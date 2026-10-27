import { ChangeSpec } from "@codemirror/state";
import { test, expect, Page } from "@playwright/test";
import { EditorView } from "codemirror";
import { execFileSync } from "node:child_process";
import fs from "fs/promises";
import { createMystState } from "../src/mystState";
import { DEMO_FEATURE_TIP } from "../src/myst-git/demo-data.js";

declare global {
  interface Window {
    myst_editor: Record<
      string,
      {
        text: string;
        main_editor: EditorView;
        state: ReturnType<typeof createMystState>;
      }
    >;
  }
}

const id = "demo";

test.describe.parallel("With collaboration disabled", () => {
  test.beforeEach(async ({ page }) => {
    await applyPageOpts(page, { collab: "false" });
    await page.evaluate(async (id) => {
      const previousEditor = window.myst_editor[id].main_editor;
      const options = window.myst_editor[id].state.options;
      options.collaboration.value = { ...options.collaboration.peek(), commentsEnabled: true };
      await new Promise<void>((resolve) => {
        const waitForEditor = () => {
          if (window.myst_editor[id].main_editor !== previousEditor) resolve();
          else requestAnimationFrame(waitForEditor);
        };
        waitForEditor();
      });
    }, id);
    await expect(page.locator('[name="suggest-mode"]')).toBeVisible();
  });

  test("Loads initial document", async ({ page }) => {
    await expect(async () => {
      const editorContent = await page.evaluate((id) => window.myst_editor[id].text, id);
      expect(editorContent).toMatch(/^# This is MyST Editor/);
      expect(editorContent.indexOf(editorContent.slice(0, 20))).toBe(editorContent.lastIndexOf(editorContent.slice(0, 20))); // Assert that content isn't duplicated
    }).toPass();
  });

  test("Keeps the template confirmation dialog outside the hover dropdown", async ({ page }) => {
    await page.route("**/linkedtemplatelist.json", (route) =>
      route.fulfill({
        contentType: "application/json",
        body: JSON.stringify([{ id: "Test template", templatetext: "/template.md" }]),
      }),
    );
    await page.route("**/template.md", (route) => route.fulfill({ contentType: "text/markdown", body: "# Test template" }));
    await applyPageOpts(page, { collab: "false" });

    await page.getByTitle("Templates").hover();
    await page.getByRole("button", { name: "Test template" }).click();

    const dialog = page.getByRole("dialog");
    await expect(dialog).toBeVisible();
    expect(await dialog.evaluate((element) => element.closest(".btn-dropdown"))).toBeNull();

    await page.mouse.move(1200, 700);
    await expect(dialog).toBeVisible();

    const otherPage = await page.context().newPage();
    await otherPage.bringToFront();
    await page.bringToFront();
    await expect(dialog).toBeVisible();
    await otherPage.close();

    await page.getByRole("button", { name: "No, cancel" }).click();
    await expect(dialog).not.toBeVisible();
  });

  test("Caches async transforms", async ({ page }) => {
    await clearEditor(page);
    const todayDate = new Date().toLocaleString("en-GB", { timeZone: "UTC" }).split(" ")[0];

    // |date| gets transformed for the first time
    await insertChangesAndCheckOutput(
      page,
      {
        from: 0,
        insert: "blah blah |date| blah blah",
      },
      (html) => expect(html).toContain(todayDate),
    );

    // Find out what the transform has returned
    const previewContent = (await page.locator(".myst-preview").first().textContent()) as string;
    const time = previewContent.split(" ")[3];

    await page.waitForTimeout(2000);

    // Assert that the next |date| returns the same time as the first one
    await clearEditor(page);
    await insertChangesAndCheckOutput(
      page,
      {
        from: 0,
        insert: "blah blah |date| blah blah",
      },
      (html) => expect(html).toContain(time),
    );

    // But if we click the refresh button then the transform will be updated and output will be different
    await page.getByTitle("Refresh issue links").click();
    await insertChangesAndCheckOutput(page, null, (html) => expect(html).not.toContain(time));
  });

  test.describe("Renders input", () => {
    test("Keeps links with parenthesized destinations as text", async ({ page }) => {
      await clearEditor(page);
      await insertToMainEditor(page, { from: 0, insert: "[](()) [text](()) [**bold**](()) [valid](https://example.com)" });
      const preview = page.locator(".myst-preview").first();
      await expect(preview).toContainText("[](()) [text](()) [bold](()) valid");
      await expect(preview.locator("strong")).toHaveText("bold");
      await expect(preview.locator("a")).toHaveCount(1);
      await expect(preview.locator("a")).toHaveAttribute("href", "https://example.com");
    });

    [1, 2, 3].forEach((header) => {
      test("Renders header: " + header, async ({ page }) => {
        await clearEditor(page);
        await insertChangesAndCheckOutput(
          page,
          {
            from: 0,
            insert: "#".repeat(header) + " Some title",
          },
          (html) => expect(html.match(`<h${header}.*>Some title`)).toHaveLength(1),
        );
      });
    });

    test("Renders synchronous transforms", async ({ page }) => {
      await clearEditor(page);
      await insertChangesAndCheckOutput(
        page,
        {
          from: 0,
          insert: "blah blah @some-user blah  blah ",
        },
        (html) => expect(html).toContain(`<a href="https://github.com/some-user">`),
      );
    });

    test("Does not nest a link when a link-producing transform is used inside [text](link)", async ({ page }) => {
      await clearEditor(page);
      await insertChangesAndCheckOutput(
        page,
        {
          from: 0,
          insert: "See [issue #1234](https://example.com/issue/1234) for details",
        },
        (html) => {
          expect(html).not.toContain(`href="https://github.com/antmicro/myst-editor/issues/1234"`);
          expect(html).toContain(`href="https://example.com/issue/1234"`);
          expect(html.replace(/<[^>]+>/g, "")).toContain("See issue #1234 for details");
        },
      );
    });

    // Only links produced by a transform are dropped, the transform itself still runs.
    test("Still applies text-only transforms inside [text](link)", async ({ page }) => {
      const [date] = new Date().toLocaleString("en-GB", { timeZone: "UTC" }).split(" ");
      await clearEditor(page);
      await insertChangesAndCheckOutput(
        page,
        {
          from: 0,
          insert: "[|date|](https://example.com)",
        },
        (html) => {
          expect(html).toContain(`href="https://example.com"`);
          expect(html).toContain(date);
        },
      );
    });

    // `checkLinks` invalidates links like `[bad]((url))`, which then render as plain text - so
    // there is no link here to nest anything inside, and transforms have to apply as usual.
    // An invalidated link leaves a `link_open` token whose `link_close` was rewritten to text,
    // so anything tracking link nesting must not get stuck treating the rest of the document as
    // being inside a link.
    test("Transforms still apply after a malformed [text]((url)) link", async ({ page }) => {
      await clearEditor(page);
      await insertChangesAndCheckOutput(
        page,
        {
          from: 0,
          insert: "[bad]((url)) #1234",
        },
        (html) => expect(html).toContain(`<a href="https://github.com/antmicro/myst-editor/issues/1234">#1234</a>`),
      );
    });

    test("Transforms still apply inside a malformed [text]((url)) link", async ({ page }) => {
      await clearEditor(page);
      await insertChangesAndCheckOutput(
        page,
        {
          from: 0,
          insert: "[bad #1234]((url))",
        },
        (html) => expect(html).toContain(`<a href="https://github.com/antmicro/myst-editor/issues/1234">#1234</a>`),
      );
    });

    test("Renders async transforms", async ({ page }) => {
      const today = new Date().toLocaleString("en-GB", { timeZone: "UTC" });
      const [date, time] = today.split(" ");
      await clearEditor(page);
      await insertChangesAndCheckOutput(
        page,
        {
          from: 0,
          insert: "blah blah |date| blah blah",
        },
        (html) => expect(html).toContain(date),
      );
    });

    test("Renders custom roles", async ({ page }) => {
      await clearEditor(page);
      await insertChangesAndCheckOutput(
        page,
        {
          from: 0,
          insert: "blah blah {say}`something` blah blah",
        },
        (html) => expect(html).toContain(" says: 'something'"),
      );
    });
  });

  test("Copy as HTML button copies to clipboard", async ({ page, context }) => {
    await context.grantPermissions(["clipboard-write", "clipboard-read"]);
    await page.getByTitle("Copy document as HTML").click();
    await page.waitForSelector(".topbar-alert");
    await expect(async () => {
      const clipboard = await page.evaluate(() => navigator.clipboard.readText());
      expect(clipboard).toContain("<h1>");
    }).toPass();
  });

  test("Settings build hint shows and links the editor commit", async ({ page }) => {
    const commit = process.env.CI_COMMIT_SHA || process.env.GITHUB_SHA || execFileSync("git", ["rev-parse", "HEAD"], { encoding: "utf8" }).trim();
    const commitUrl = process.env.MYST_EDITOR_COMMIT_URL?.replaceAll("{sha}", commit);

    await page.getByTitle("Editor settings").hover();
    const buildLabel = page.getByText(`build ${commit.slice(0, 10)}`);
    await expect(buildLabel).toBeVisible();
    if (commitUrl) await expect(buildLabel).toHaveAttribute("href", commitUrl);
  });

  test("Mermaid diagrams", async ({ page }) => {
    await clearEditor(page);
    await insertChangesAndCheckOutput(
      page,
      {
        from: 0,
        insert: `\`\`\`mermaid
graph TD
    A-->B
\`\`\``,
      },
      (html) => expect(html).toContain('class="pele pele-flowchart"'),
    );
  });

  test("Invalid Mermaid diagrams show a safe error", async ({ page }) => {
    await clearEditor(page);
    await insertToMainEditor(page, {
      from: 0,
      insert: "```mermaid\n<img src=x onerror=alert(1)>\n```",
    });

    await expect(page.locator(".myst-preview pre").first()).toContainText("Mermaid error:");
    await expect(page.locator(".myst-preview img")).toHaveCount(0);
  });

  test.describe.parallel("Inline mode", () => {
    test("Renders an empty link label with a parenthesized destination", async ({ page }) => {
      await startInlineMode(page);
      await clearEditor(page);
      await insertToMainEditor(page, { from: 0, insert: "[](())" });
      await expect(page.locator(".cm-inline-rendered-md")).toHaveText("[](())");
    });

    test("Starts properly", async ({ page }) => {
      await startInlineMode(page);
      await clearEditor(page);
      await insertToMainEditor(page, { from: 0, insert: `# |date|\n## Test heading\ntest123` });
      await page.waitForSelector(".inline-custom-styles");
    });

    test("ArrowUp does not skip list items", async ({ page }) => {
      await startInlineMode(page);
      await clearEditor(page);
      await insertToMainEditor(page, {
        from: 0,
        insert: [
          "## List",
          "",
          "- The first list item is deliberately long enough to wrap onto another visual line in the editor.",
          "- The second list item is deliberately long enough to wrap onto another visual line in the editor.",
          "- The third list item is deliberately long enough to wrap onto another visual line in the editor.",
        ].join("\n"),
      });
      await expect(page.locator(".cm-inline-bullet")).toHaveCount(3);

      await page.evaluate((id) => {
        const view = window.myst_editor[id].main_editor;
        const line = view.state.doc.line(5);
        const pos = line.from + 20;
        view.dispatch({ selection: { anchor: pos } });
        view.focus();
      }, id);
      await page.keyboard.press("ArrowUp");

      const cursorLine = await page.evaluate((id) => {
        const view = window.myst_editor[id].main_editor;
        return view.state.doc.lineAt(view.state.selection.main.head).number;
      }, id);
      expect(cursorLine).toBe(4);
    });

    test("ArrowUp does not skip fenced blocks", async ({ page }) => {
      await startInlineMode(page);
      await clearEditor(page);
      await insertToMainEditor(page, {
        from: 0,
        insert: [
          "before",
          "~~~mermaid",
          "gitGraph",
          "  commit",
          "  commit",
          "  branch develop",
          "  commit",
          "  checkout main",
          "  commit",
          "~~~",
          "after",
        ].join("\n"),
      });
      await expect(page.locator(".cm-inline-rendered-md")).toHaveCount(1);

      await page.evaluate((id) => {
        const view = window.myst_editor[id].main_editor;
        const line = view.state.doc.line(11);
        view.dispatch({ selection: { anchor: line.from + 2 } });
        view.focus();
      }, id);
      await page.keyboard.press("ArrowUp");

      const cursorLine = await page.evaluate((id) => {
        const view = window.myst_editor[id].main_editor;
        return view.state.doc.lineAt(view.state.selection.main.head).number;
      }, id);
      expect(cursorLine).toBe(10);
    });

    test("ArrowUp does not skip indented blocks", async ({ page }) => {
      await startInlineMode(page);
      await clearEditor(page);
      await insertToMainEditor(page, {
        from: 0,
        insert: [
          "ggg~~~mermaid",
          "   gitGraph",
          "   commit",
          "   commit",
          "   branch develop",
          "   commit",
          "   commit",
          "   commit",
          "   checkout main",
          "   commit",
          "   commit",
          "~~~SS",
        ].join("\n"),
      });

      await page.evaluate((id) => {
        const view = window.myst_editor[id].main_editor;
        const line = view.state.doc.line(11);
        view.dispatch({ selection: { anchor: line.from + 2 } });
        view.focus();
      }, id);

      const visitedLines = [];
      for (let line = 10; line >= 1; line--) {
        await page.keyboard.press("ArrowUp");
        visitedLines.push(
          await page.evaluate((id) => {
            const view = window.myst_editor[id].main_editor;
            return view.state.doc.lineAt(view.state.selection.main.head).number;
          }, id),
        );
      }
      expect(visitedLines).toEqual([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
    });

    test("Details elements can be toggled and still lead to their source", async ({ page }) => {
      await startInlineMode(page);
      await clearEditor(page);
      await insertToMainEditor(page, { from: 0, insert: `<details>\n<summary>Click me</summary>\nHidden body\n</details>` });

      // Clicking the summary toggles it and leaves the line rendered
      const details = page.locator(".cm-inline-rendered-md details");
      const summary = page.locator(".cm-inline-rendered-md summary");
      await expect(details).toHaveJSProperty("open", false);
      await summary.click();
      await expect(details).toHaveJSProperty("open", true);
      await summary.click();
      await expect(details).toHaveJSProperty("open", false);

      // The details does not take up the whole line, so the rest of it still opens the source
      const line = page.locator(".cm-content .cm-line").first();
      const box = (await line.boundingBox())!;
      await line.click({ position: { x: box.width - 5, y: box.height / 2 } });
      await expect(details).toHaveCount(0);
    });

    test("Open links in new tabs updates rendered links in inline preview", async ({ page }) => {
      await startInlineMode(page);
      await clearEditor(page);
      await insertToMainEditor(page, { from: 0, insert: "[Example](https://example.com/)" });

      const link = page.locator('.cm-inline-rendered-md a[href="https://example.com/"]');
      await expect(link).toBeVisible();
      await expect(link).not.toHaveAttribute("target", "_blank");

      await page.getByTitle("Editor settings").hover();
      const setting = page.locator('label[for="links-new-tab"]');
      await setting.click();
      await expect(link).toHaveAttribute("target", "_blank");
      await setting.click();
      await expect(link).not.toHaveAttribute("target", "_blank");
      await setting.click();
      await expect(link).toHaveAttribute("target", "_blank");
      await page.mouse.move(1200, 700);

      const popupPromise = page.waitForEvent("popup");
      await link.click();
      const popup = await popupPromise;
      await popup.close();
    });

    test.describe("Common transforms", () => {
      test("Bold text is being rendered", async ({ page }) => {
        await startInlineMode(page);
        await clearEditor(page);
        const text = "This text should render as bold";
        await insertToMainEditor(page, { from: 0, insert: `**${text}**` });
        expect((await page.locator(".tok-strong").allInnerTexts()).join("")).toBe(text);
      });

      test("Italic text is being rendered", async ({ page }) => {
        await startInlineMode(page);
        await clearEditor(page);
        const text = "This text should render as italic";
        await insertToMainEditor(page, { from: 0, insert: `_${text}_` });
        expect((await page.locator(".tok-emphasis").allInnerTexts()).join("")).toBe(text);
      });

      test("Strikethrough text is being rendered", async ({ page }) => {
        await startInlineMode(page);
        await clearEditor(page);
        const text = "This text should render as strikethrough";
        await insertToMainEditor(page, { from: 0, insert: `~~${text}~~` });
        // Strikethrough is special because it doesn't add any "tok-..." classes to the tokens. Therefore we need to check the style manually.
        expect(
          await page.locator(".cm-content *").evaluateAll((elements) =>
            elements
              .filter((element) => getComputedStyle(element).textDecorationLine === "line-through")
              .map((element) => element.textContent)
              .filter(Boolean)
              .join(" ")
              .replace(/\s+/g, " "),
          ),
        ).toBe(text);
      });
    });
  });

  test.describe.parallel("Review", () => {
    test("commentsEnabled disables review without collaboration", async ({ page }) => {
      await applyPageOpts(page, { collab: "false" });
      await expect(page.locator('[name="suggest-mode"]')).toHaveCount(0);
      await expect(page.locator('[name="show-comments"]')).toHaveCount(0);
      await expect(page.locator('[name="resolved"]')).toHaveCount(0);
      await setupReviewTest(page, "# Heading\n`code`", { selection: { anchor: 2, head: 9 }, selectionEvent: null, suggestMode: false });
      await expect(page.getByRole("button", { name: "Add comment" })).toHaveCount(0);

      await page.evaluate((id) => (window.myst_editor[id].state.suggestMode.value = true), id);
      await selectMainEditor(page, { anchor: 2 }, "select.pointer");
      await page.keyboard.type("New ");
      await expectMainEditorDoc(page, "# New Heading\n`code`");
      await expect.poll(() => page.evaluate((id) => window.myst_editor[id].state.reviewItems.value.size, id)).toBe(0);
      await expect(page.locator(".cm-suggestion-card, .cm-comment-card, .cm-review-card-marker")).toHaveCount(0);
      await expect(page.locator(".suggestions-insert, .suggestions-delete")).toHaveCount(0);
      await expect(page.locator(".myst-preview")).toContainText("New Heading");
      await expect(page.locator(".myst-preview [data-review-kind], .myst-preview [data-suggestion-type]")).toHaveCount(0);
      await page.evaluate((id) => (window.myst_editor[id].state.options.mode.value = "Resolved"), id);
      await expect(page.locator("#preview-wrapper")).toHaveCSS("display", "none");
      await expect(page.locator("#resolved-wrapper")).toHaveCount(0);

      await startInlineMode(page);
      await expect(page.locator(".cm-inline-rendered-md")).not.toHaveCount(0);
      await expect(page.locator(".cm-inline-rendered-md [data-review-kind], .cm-inline-rendered-md [data-suggestion-type]")).toHaveCount(0);
    });

    test("Disables multicursor in suggest mode", async ({ page }) => {
      await setupReviewTest(page, `# Heading`, { suggestMode: false });

      const setMultipleCursors = () =>
        page.evaluate((id) => {
          const editor = window.myst_editor[id].main_editor;
          const Selection = editor.state.selection.constructor as any;
          editor.dispatch({ selection: Selection.create([Selection.cursor(2), Selection.cursor(9)]) });
        }, id);
      const selectionCount = () => page.evaluate((id) => window.myst_editor[id].main_editor.state.selection.ranges.length, id);

      await setMultipleCursors();
      await expect.poll(selectionCount).toBe(2);

      await page.locator('[name="suggest-mode"]').click();
      await expect.poll(selectionCount).toBe(1);

      await setMultipleCursors();
      await expect.poll(selectionCount).toBe(1);

      await page.locator('[name="suggest-mode"]').click();
      await setMultipleCursors();
      await expect.poll(selectionCount).toBe(2);
    });

    test("Highlights a suggestion when selected from its text or card", async ({ page }) => {
      await setupReviewTest(page, `# Heading`, { selection: { anchor: 2, head: 9 } });
      await page.keyboard.type("Better");

      const suggestionCard = page.locator(".cm-suggestion-card");
      await moveMainEditorCursor(page, 0);
      await expect(suggestionCard).not.toHaveClass(/cm-review-card-selected/);
      await expect(page.locator(".review-selection")).toHaveCount(0);

      await expandReviewCards(page);
      await suggestionCard.locator(".suggestion-diff").click();
      await expect(suggestionCard).toHaveClass(/cm-review-card-selected/);
      await expect(page.locator(".review-selection")).toHaveCount(2);
      await expect(suggestionCard.getByRole("textbox", { name: "Reply or add others with @" })).toBeVisible();

      await suggestionCard.locator(".suggestion-diff").click();
      await expect(suggestionCard).toHaveClass(/cm-review-card-selected/);
      await expect(page.locator(".review-selection")).toHaveCount(2);
      await expect(suggestionCard.getByRole("textbox", { name: "Reply or add others with @" })).toBeVisible();

      await moveMainEditorCursor(page, 4);
      await expect(suggestionCard).toHaveClass(/cm-review-card-selected/);
      await expect(suggestionCard.getByRole("textbox", { name: "Reply or add others with @" })).toBeVisible();
      await expect(page.locator(".review-selection")).toHaveCount(2);

      await moveMainEditorCursor(page, 11);
      await expect(suggestionCard).toHaveClass(/cm-review-card-selected/);
      await expect(page.locator(".review-selection")).toHaveCount(2);
    });

    test("Highlights a comment when selected from its text or card", async ({ page }) => {
      await setupReviewTest(page, `# Heading`, { selection: { anchor: 2, head: 9 }, suggestMode: false });

      const commentCard = await createComment(page, "Comment");
      await expect(commentCard.locator(".cm-comment-card-content")).toHaveText("Comment");

      await page.evaluate((id) => {
        const editor = window.myst_editor[id].main_editor;
        editor.contentDOM.dispatchEvent(new PointerEvent("pointerdown", { bubbles: true, composed: true }));
      }, id);
      await expect(commentCard).toBeVisible();

      await moveMainEditorCursor(page, 0);
      await expect(commentCard).not.toHaveClass(/cm-review-card-selected/);
      await expect(page.locator(".review-selection")).toHaveCount(0);

      await commentCard.locator(".cm-comment-card-content").click();
      await expect(commentCard).toHaveClass(/cm-review-card-selected/);
      await expect(page.locator(".review-selection")).toBeVisible();
      await expect(commentCard.getByRole("textbox", { name: "Reply or add others with @" })).toBeVisible();

      await commentCard.locator(".cm-comment-card-content").click();
      await expect(commentCard).toHaveClass(/cm-review-card-selected/);
      await expect(page.locator(".review-selection")).toBeVisible();
      await expect(commentCard.getByRole("textbox", { name: "Reply or add others with @" })).toBeVisible();

      await moveMainEditorCursor(page, 4);
      await expect(commentCard).toHaveClass(/cm-review-card-selected/);
      await expect(commentCard.getByRole("textbox", { name: "Reply or add others with @" })).toBeVisible();
      await expect(page.locator(".review-selection")).toBeVisible();
    });

    test("Copies comment text and replies from a review card", async ({ page, context }) => {
      await context.grantPermissions(["clipboard-read", "clipboard-write"]);
      await setupReviewTest(page, "# Heading", { selection: { anchor: 2, head: 9 }, selectionEvent: null, suggestMode: false });

      const copyText = async (content: ReturnType<Page["locator"]>, expected: string) => {
        const bounds = await content.evaluate((element) => {
          const range = document.createRange();
          range.selectNodeContents(element);
          const rect = range.getBoundingClientRect();
          return { left: rect.left, right: rect.right, top: rect.top, height: rect.height };
        });

        await page.mouse.move(bounds.left - 2, bounds.top + bounds.height / 2);
        await page.mouse.down();
        await page.mouse.move(bounds.right + 2, bounds.top + bounds.height / 2, { steps: 10 });
        await page.mouse.up();

        await expect.poll(() => page.evaluate(() => window.getSelection()?.toString())).toBe(expected);
        await page.keyboard.press("ControlOrMeta+C");
        await expect.poll(() => page.evaluate(() => navigator.clipboard.readText())).toBe(expected);
      };

      const commentBody = "Test comment text";
      const commentCard = await createComment(page, commentBody);
      await expandReviewCards(page);
      const commentText = commentCard.locator(".cm-comment-card-content");
      await copyText(commentText, commentBody);

      await commentText.click();
      const replyText = "Test reply text";
      await commentCard.getByRole("textbox", { name: "Reply or add others with @" }).fill(replyText);
      await commentCard.getByRole("button", { name: "Reply" }).click();
      await copyText(commentCard.locator(".cm-review-card-comment-text"), replyText);
    });

    test("Can use suggest mode", async ({ page }) => {
      await setupReviewTest(page, `# Heading`, { selection: { anchor: 2, head: 9 }, selectionEvent: null });
      await page.keyboard.type("Better heading");
      await expect(page.getByRole("button", { name: "Open suggestion" })).toBeVisible();
      await expect(page.locator(".cm-suggestion-card")).not.toBeVisible();
    });

    test("Compact review cards open from their marker or text and close after hover", async ({ page }) => {
      await setupReviewTest(page, "# Heading", { selection: { anchor: 2, head: 9 }, selectionEvent: null });
      await page.keyboard.type("Better");
      await page.evaluate((id) => {
        window.myst_editor[id].main_editor.dispatch({ selection: { anchor: 0 }, userEvent: "select.pointer" });
      }, id);

      const marker = page.getByRole("button", { name: "Open suggestion" });
      const card = page.locator(".cm-suggestion-card");
      await expect(marker).toBeVisible();
      await expect(marker).toHaveCSS("opacity", "1");
      await expect(card).not.toBeVisible();
      await expect(card).not.toHaveClass(/cm-review-card-selected/);

      await marker.hover();
      await expect(card).toBeVisible();
      await expect(marker).toHaveCSS("opacity", "1");
      await expect(marker).toHaveCSS("border-color", "rgb(0, 135, 255)");

      await page.mouse.move(0, 0);
      await expect(card).not.toBeVisible();
      await expect(marker).toHaveCSS("opacity", "1");
      await expect(marker).not.toHaveCSS("border-color", "rgb(0, 135, 255)");

      await page.locator(".cm-review-text").first().hover();
      await expect(card).toBeVisible();
      await expect(marker).toHaveCSS("border-color", "rgb(0, 135, 255)");
      await page.mouse.move(0, 0);
      await expect(card).not.toBeVisible();
      await expect(marker).not.toHaveCSS("border-color", "rgb(0, 135, 255)");

      await marker.click();
      await expect(card).toBeVisible();
      await expect(card).toHaveClass(/cm-review-card-selected/);
      await page.mouse.move(0, 0);
      await expect(marker).toHaveCSS("border-color", "rgb(0, 135, 255)");
    });

    test("Marks comments and suggestions in raw HTML preview", async ({ page }) => {
      const heading = "Admonition";
      const source = `<h2>${heading}</h2>\n<p>You can bring more attention.</p>`;
      const headingStart = source.indexOf(heading);
      await setupReviewTest(page, source, {
        selection: { anchor: headingStart, head: headingStart + heading.length },
        suggestMode: false,
      });
      await createComment(page, "Review heading");
      await expect(page.locator('.myst-preview h2 [data-review-kind="comment"]')).toHaveText(heading);

      await page.locator('[name="suggest-mode"]').click();
      await moveMainEditorCursor(page, source.indexOf("bring") + "bring".length);
      await page.keyboard.type("!");
      await expect(page.locator('.myst-preview p [data-suggestion-type="insert"]')).toHaveText("!");
    });

    test("Marks comments in multiline raw HTML inside a blockquote", async ({ page }) => {
      const source = "> <div>\n> Review me\n> </div>";
      const start = source.indexOf("Review me");
      await setupReviewTest(page, source, { selection: { anchor: start, head: start + "Review me".length }, suggestMode: false });
      await createComment(page, "Review quoted HTML");

      await expect(page.locator('.myst-preview blockquote div [data-review-kind="comment"]')).toHaveText("Review me");
    });

    test("Renders suggestion - replace", async ({ page }) => {
      await setupReviewTest(page, `# Heading`, { selection: { anchor: 2, head: 9 }, selectionEvent: null });
      await page.keyboard.type("Better heading");
      await expandReviewCards(page);
      await expect(page.locator(".suggestion-diff")).toBeVisible();
      const suggestions = page.locator(".suggestion-content");
      await expect(suggestions).toHaveCount(2);

      const expected = [
        { marker: "-", text: "Heading", className: "suggestions-delete" },
        { marker: "+", text: "Better heading", className: "suggestions-insert" },
      ];

      for (const [index, item] of expected.entries()) {
        const row = suggestions.nth(index);
        const content = row.locator(".cm-suggestion-card-content");

        await expect(row.locator("small")).toHaveText(item.marker);
        await expect(content).toHaveText(item.text);
        await expect(content).toHaveClass(new RegExp(`\\b${item.className}\\b`));
      }
    });

    test("Typing at the start of a replacement insertion extends it", async ({ page }) => {
      await setupReviewTest(page, "# Heading", { selection: { anchor: 2, head: 9 } });
      await page.keyboard.type("Better");

      await moveMainEditorCursor(page, 9);
      await page.keyboard.type("X");

      const liveSuggestions = await page.evaluate((id) => {
        return [...window.myst_editor[id].state.reviewItems.value.values()]
          .filter(({ resolved }) => !resolved)
          .map(({ type, text, replacementId }) => ({ type, text, replacementId }));
      }, id);
      const insertion = liveSuggestions.find(({ type }) => type === "insert");
      const deletion = liveSuggestions.find(({ type }) => type === "delete");

      expect(liveSuggestions).toHaveLength(2);
      expect(insertion).toMatchObject({ text: "XBetter" });
      expect(insertion?.replacementId).toBe(deletion?.replacementId);
      await expect(page.locator(".suggestion-content")).toHaveCount(2);
      await expect(page.locator(".cm-suggestion-card-content.suggestions-insert")).toHaveText("XBetter");
    });

    test("Renders suggestion - insert", async ({ page }) => {
      await setupReviewTest(page, `# Heading`);
      await page.evaluate((id) => {
        const editor = window.myst_editor[id].main_editor;
        editor.focus();
        editor.dispatch({
          changes: {
            from: 2,
            insert: "Better ",
          },
          userEvent: "input.type",
        });
      }, id);
      await expandReviewCards(page);
      await expect(page.locator(".suggestion-diff")).toBeVisible();
      const suggestions = page.locator(".suggestion-content");
      await expect(suggestions).toHaveCount(1);

      const expected = [{ marker: "+", text: "Better ", className: "suggestions-insert" }];

      for (const [index, item] of expected.entries()) {
        const row = suggestions.nth(index);
        const content = row.locator(".cm-suggestion-card-content");

        await expect(row.locator("small")).toHaveText(item.marker);
        await expect(content).toHaveText(item.text);
        await expect(content).toHaveClass(new RegExp(`\\b${item.className}\\b`));
      }
    });

    test("Pasting in suggest mode creates an insertion suggestion", async ({ page, context }) => {
      await context.grantPermissions(["clipboard-write", "clipboard-read"]);
      await setupReviewTest(page, `# Heading`, { selection: { anchor: 2, head: 9 }, selectionEvent: null });

      await page.keyboard.press("Control+x");
      await page.keyboard.press("Control+v");

      const suggestions = page.locator(".suggestion-content");
      await expect(suggestions).toHaveCount(2);
      await expect(suggestions.locator(".suggestions-delete")).toHaveText("Heading");
      await expect(suggestions.locator(".suggestions-insert")).toHaveText("Heading");
    });

    test("Moves a suggestion with text dragged to a new position", async ({ page }) => {
      await setupReviewTest(page, `# Heading\nDestination`);
      await page.evaluate((id) => {
        window.myst_editor[id].main_editor.dispatch({
          changes: { from: 2, insert: "Suggested " },
          userEvent: "input.type",
        });
      }, id);

      const moved = await simulateReviewDragToDocumentEnd(page, "suggestion");

      expect(moved.anchoredText).toBe("Suggested ");
      expect(moved.from).toBe(moved.documentLength - "Suggested ".length);
      expect(moved.to).toBe(moved.documentLength);
      await expect(page.locator(".suggestions-insert").first()).toHaveText("Suggested ");
    });

    test("Deleting suggested text in edit mode removes its suggestion", async ({ page }) => {
      await setupReviewTest(page, `# Heading`);
      await page.evaluate((id) => {
        window.myst_editor[id].main_editor.dispatch({
          changes: { from: 2, insert: "Suggested " },
          userEvent: "input.type",
        });
      }, id);
      await expect(page.getByRole("button", { name: "Open suggestion" })).toBeVisible();

      await page.locator('[name="suggest-mode"]').click();
      await selectMainEditor(page, { anchor: 2, head: 12 });
      await page.keyboard.press("Backspace");

      await expect(page.locator(".cm-suggestion-card")).toHaveCount(0);
      expect(await page.evaluate((id) => window.myst_editor[id].state.reviewItems.value.size, id)).toBe(0);
    });

    test("Dragging normal text in suggest mode creates deletion and insertion suggestions", async ({ page }) => {
      await setupReviewTest(page, `Destination\nMove`);
      await dragMainEditorSelection(page, { source: { from: 12, to: 16 }, destination: 0 });

      const suggestions = page.locator(".suggestion-content");
      await expect(suggestions).toHaveCount(2);
      await expect(suggestions.locator(".suggestions-delete")).toHaveText("Move");
      await expect(suggestions.locator(".suggestions-insert")).toHaveText("Move");
      expect(await page.evaluate((id) => window.myst_editor[id].main_editor.state.doc.toString(), id)).toBe("MoveDestination\nMove");
      expect(
        await page.evaluate(
          (id) =>
            [...window.myst_editor[id].state.reviewItems.value.values()]
              .map(({ type, anchors: [{ from, to }] }) => ({ type, from, to }))
              .sort((a, b) => a.from - b.from),
          id,
        ),
      ).toEqual([
        { type: "insert", from: 0, to: 4 },
        { type: "delete", from: 16, to: 20 },
      ]);
    });

    test("Dragging a deletion suggestion preserves it and creates an insertion suggestion", async ({ page }) => {
      await setupReviewTest(page, `Destination\nDelete`, { selection: { anchor: 12, head: 18 }, selectionEvent: null });
      await page.keyboard.press("Backspace");

      await dragMainEditorSelection(page, { source: { from: 12, to: 18 }, destination: 0 });

      const suggestions = page.locator(".suggestion-content");
      await expect(suggestions).toHaveCount(2);
      await expect(suggestions.locator(".suggestions-delete")).toHaveText("Delete");
      await expect(suggestions.locator(".suggestions-insert")).toHaveText("Delete");
      expect(await page.evaluate((id) => window.myst_editor[id].main_editor.state.doc.toString(), id)).toBe("DeleteDestination\nDelete");
      expect(
        await page.evaluate(
          (id) =>
            [...window.myst_editor[id].state.reviewItems.value.values()]
              .map(({ type, anchors: [{ from, to }] }) => ({ type, from, to }))
              .sort((a, b) => a.from - b.from),
          id,
        ),
      ).toEqual([
        { type: "insert", from: 0, to: 6 },
        { type: "delete", from: 18, to: 24 },
      ]);
    });

    test("Renders suggestion - delete", async ({ page }) => {
      await setupReviewTest(page, `# Heading`, { selection: { anchor: 2, head: 9 }, selectionEvent: null });
      await page.keyboard.press("Backspace");

      await expandReviewCards(page);
      await expect(page.locator(".suggestion-diff")).toBeVisible();
      const suggestions = page.locator(".suggestion-content");
      await expect(suggestions).toHaveCount(1);

      const expected = [{ marker: "-", text: "Heading", className: "suggestions-delete" }];

      for (const [index, item] of expected.entries()) {
        const row = suggestions.nth(index);
        const content = row.locator(".cm-suggestion-card-content");

        await expect(row.locator("small")).toHaveText(item.marker);
        await expect(content).toHaveText(item.text);
        await expect(content).toHaveClass(new RegExp(`\\b${item.className}\\b`));
      }
    });

    test("Deletes inserted text while suggesting another deletion in the same transaction", async ({ page }) => {
      await setupReviewTest(page, "# one two");

      await page.evaluate((id) => {
        window.myst_editor[id].main_editor.dispatch({ changes: { from: 2, insert: "NEW " }, userEvent: "input.type" });
      }, id);
      await page.evaluate((id) => {
        window.myst_editor[id].main_editor.dispatch({
          changes: [
            { from: 2, to: 5 },
            { from: 10, to: 13 },
          ],
          userEvent: "delete",
        });
      }, id);

      await expectMainEditorDoc(page, "#  one two");
      const suggestions = await page.evaluate(
        (id) =>
          [...window.myst_editor[id].state.reviewItems.value.values()].map(({ type, text, anchors: [{ from, to }] }) => ({ type, text, from, to })),
        id,
      );
      expect(suggestions).toEqual([
        { type: "insert", text: " ", from: 2, to: 3 },
        { type: "delete", text: "two", from: 7, to: 10 },
      ]);
    });

    test("Partially deleting a pending insertion only suggests the original text", async ({ page }) => {
      await setupReviewTest(page, "# one two");

      await page.evaluate((id) => {
        window.myst_editor[id].main_editor.dispatch({ changes: { from: 2, insert: "NEW " }, userEvent: "input.type" });
      }, id);
      await selectMainEditor(page, { anchor: 4, head: 9 }, "select.pointer");
      await page.keyboard.press("Backspace");

      await expectMainEditorDoc(page, "# NEone two");
      const suggestions = await page.evaluate(
        (id) =>
          [...window.myst_editor[id].state.reviewItems.value.values()].map(({ type, text, anchors: [{ from, to }] }) => ({ type, text, from, to })),
        id,
      );
      expect(suggestions).toEqual([
        { type: "insert", text: "NE", from: 2, to: 4 },
        { type: "delete", text: "one", from: 4, to: 7 },
      ]);
    });

    test("Backspace inside a deletion suggestion does move only the cursor through", async ({ page }) => {
      await setupReviewTest(page, `# Heading`, { selection: { anchor: 2, head: 9 }, selectionEvent: null });
      await page.keyboard.press("Backspace");

      await page.evaluate((id) => {
        window.myst_editor[id].main_editor.dispatch({
          selection: { anchor: 5 },
          userEvent: "select.pointer",
        });
      }, id);
      await page.keyboard.press("Backspace");

      await expect(page.locator(".suggestion-content")).toHaveCount(1);
      expect(await page.evaluate((id) => window.myst_editor[id].main_editor.state.doc.toString(), id)).toBe("# Heading");
      expect(
        await page.evaluate(
          (id) => [...window.myst_editor[id].state.reviewItems.value.values()].map(({ type, anchors: [{ from, to }] }) => ({ type, from, to })),
          id,
        ),
      ).toEqual([{ type: "delete", from: 2, to: 9 }]);
    });

    test("Deleting text from a rejected deletion creates a new suggestion", async ({ page }) => {
      await setupReviewTest(page, "# Heading", { selection: { anchor: 2, head: 9 }, selectionEvent: null });
      await page.keyboard.press("Backspace");
      await expandReviewCards(page);
      await page.getByTitle("Reject Suggestion").click();

      await selectMainEditor(page, { anchor: 2, head: 9 });
      await page.keyboard.press("Backspace");

      expect(await page.evaluate((id) => window.myst_editor[id].main_editor.state.doc.toString(), id)).toBe("# Heading");
      await expect(page.locator(".cm-suggestion-card-content.suggestions-delete")).toHaveText("Heading");
      await expectReviewValues(page, "type", false, ["delete"]);
    });

    test("Deleting text from an accepted insertion creates a new suggestion", async ({ page }) => {
      await setupReviewTest(page, "# Heading");
      await page.evaluate((id) => {
        window.myst_editor[id].main_editor.dispatch({
          changes: { from: 2, insert: "Accepted " },
          userEvent: "input.type",
        });
      }, id);
      await expandReviewCards(page);
      await page.getByTitle("Accept Suggestion").click();

      await selectMainEditor(page, { anchor: 2, head: 11 });
      await page.keyboard.press("Backspace");

      expect(await page.evaluate((id) => window.myst_editor[id].main_editor.state.doc.toString(), id)).toBe("# Accepted Heading");
      await expect(page.locator(".cm-suggestion-card-content.suggestions-delete")).toHaveText("Accepted ");
      await expectReviewValues(page, "type", false, ["delete"]);
    });

    test("Can accept suggestions", async ({ page }) => {
      await setupReviewTest(page, `# Heading`, { selection: { anchor: 2, head: 9 }, selectionEvent: null });
      await page.keyboard.type("Better heading");

      await expandReviewCards(page);
      await page.getByTitle("Accept Suggestion").first().click();
      await expect(async () => {
        const text = await page.evaluate((id) => window.myst_editor[id].text, id);
        expect(text).toBe(`# Better heading`);
      }).toPass();
    });

    test("Can reject suggestions", async ({ page }) => {
      await setupReviewTest(page, `# Heading`, { selection: { anchor: 2, head: 9 }, selectionEvent: null });
      await page.keyboard.type("Better heading");

      await expandReviewCards(page);
      await page.getByTitle("Reject Suggestion").first().click();
      await expect(async () => {
        const text = await page.evaluate((id) => window.myst_editor[id].text, id);
        expect(text).toBe(`# Heading`);
      }).toPass();
    });

    test("Can comment", async ({ page }) => {
      await setupReviewTest(page, `# Heading`, { selection: { anchor: 2, head: 9 }, selectionEvent: null, suggestMode: false });

      await expect(page.getByRole("button", { name: "Add comment" })).toBeVisible();
    });

    test("Show comments button toggles review cards", async ({ page }) => {
      await setupReviewTest(page, "# Commented\n# Suggested", { suggestMode: false });
      await page.getByTitle("Inline Preview").click();
      await expect(page.locator(".cm-editor")).toHaveClass(/cm-review-cards-empty/);
      await expect(page.locator('[name="show-comments"]')).toHaveCount(0);

      await selectMainEditor(page, { anchor: 2, head: 11 }, "select.pointer");
      const commentCard = await createComment(page, "Comment");
      await expect(page.locator('[name="show-comments"]')).toBeVisible();
      await page.locator('[name="show-comments"]').click();

      await page.locator('[name="suggest-mode"]').click();
      await selectMainEditor(page, { anchor: 14, head: 23 }, "select.pointer");
      await page.keyboard.type("Better");

      const showCommentsButton = page.locator('[name="show-comments"]');
      const suggestionCard = page.locator(".cm-suggestion-card");
      const commentHighlight = page.locator(".review-comment-range");
      const deletionHighlight = page.locator(".suggestions-delete").first();
      const insertionHighlight = page.locator(".suggestions-insert").first();

      await showCommentsButton.focus();
      await page.mouse.move(0, 0);
      await expect(commentCard).not.toBeVisible();
      await expect(suggestionCard).not.toBeVisible();
      await expect(page.getByRole("button", { name: "Open comment" })).toHaveCSS("opacity", "1");
      await expect(page.getByRole("button", { name: "Open suggestion" })).toHaveCSS("opacity", "1");
      await expect(commentHighlight).toBeVisible();
      await expect(deletionHighlight).toBeVisible();
      await expect(insertionHighlight).toBeVisible();

      await showCommentsButton.click();

      await expect(page.locator(".cm-editor")).toHaveClass(/cm-review-cards-expanded/);
      await expect(commentCard).toBeVisible();
      await expect(suggestionCard).toBeVisible();
      await expect(page.locator(".cm-review-card-marker").first()).not.toBeVisible();
      await expect(commentHighlight).toBeVisible();
      await expect(deletionHighlight).toBeVisible();
      await expect(insertionHighlight).toBeVisible();

      await showCommentsButton.click();

      await expect(page.locator(".cm-editor")).not.toHaveClass(/cm-review-cards-expanded/);
      await expect(commentCard).not.toBeVisible();
      await expect(suggestionCard).not.toBeVisible();
      await expect(page.getByRole("button", { name: "Open comment" })).toHaveCSS("opacity", "1");
      await expect(page.getByRole("button", { name: "Open suggestion" })).toHaveCSS("opacity", "1");
    });

    test("Review sidebar appears only while a live card exists in a wide inline editor", async ({ page }) => {
      await page.setViewportSize({ width: 2000, height: 900 });
      await page.reload();
      await expect(page.locator(".cm-editor")).toBeVisible();
      await expect(page.locator("#preview-wrapper")).toHaveCSS("display", "none");
      await page.evaluate((id) => {
        const options = window.myst_editor[id].state.options;
        options.collaboration.value = { ...options.collaboration.peek(), commentsEnabled: true };
      }, id);
      await expect(page.locator('[name="suggest-mode"]')).toBeVisible();
      await expect(page.locator('[name="show-comments"]')).toHaveCount(0);
      await expect(page.locator(".cm-editor")).toHaveClass(/cm-review-cards-empty/);
      await expect(page.locator(".cm-editor")).not.toHaveClass(/cm-review-cards-wide/);
      await expect(page.locator(".cm-line").first()).toHaveCSS("padding-right", "0px");

      await setupReviewTest(page, "# Heading", { selection: { anchor: 2, head: 9 }, selectionEvent: null, suggestMode: false });
      const commentCard = await createComment(page, "Comment");
      await expect(page.locator('[name="show-comments"]')).toBeVisible();
      await expect(page.locator(".cm-editor")).toHaveClass(/cm-review-cards-expanded/);
      await expect(page.locator(".cm-editor")).toHaveClass(/cm-review-cards-wide/);

      await commentCard.getByRole("button", { name: "Resolve comment" }).click();
      await expect(page.locator('[name="show-comments"]')).toHaveCount(0);
      await expect(page.locator(".cm-editor")).toHaveClass(/cm-review-cards-empty/);
      await expect(page.locator(".cm-editor")).not.toHaveClass(/cm-review-cards-wide/);
      await expect(page.locator(".cm-line").first()).toHaveCSS("padding-right", "0px");
    });

    test("Show comments button follows suggestion creation and resolution", async ({ page }) => {
      await setupReviewTest(page, "# Heading", { selection: { anchor: 2, head: 9 } });
      await expect(page.locator('[name="show-comments"]')).toHaveCount(0);
      await expect(page.locator(".cm-editor")).toHaveClass(/cm-review-cards-empty/);

      await page.keyboard.type("Better");
      await expect(page.locator('[name="show-comments"]')).toBeVisible();
      await expect(page.locator(".cm-editor")).not.toHaveClass(/cm-review-cards-empty/);

      await expandReviewCards(page);
      await page.locator(".cm-suggestion-card-decline").click();
      await expect(page.locator('[name="show-comments"]')).toHaveCount(0);
      await expect(page.locator(".cm-editor")).toHaveClass(/cm-review-cards-empty/);
    });

    test("Review cards expand and collapse as the editor crosses 800 pixels", async ({ page }) => {
      await expect(page.locator(".cm-editor")).not.toHaveClass(/cm-review-cards-expanded/);
      await page.setViewportSize({ width: 2000, height: 900 });
      await expect(page.locator(".cm-editor")).toHaveClass(/cm-review-cards-empty/);
      await setupReviewTest(page, "# Heading", { selection: { anchor: 2, head: 9 }, selectionEvent: null, suggestMode: false });
      const commentCard = await createComment(page, "Comment");

      await expect(page.locator(".cm-editor")).toHaveClass(/cm-review-cards-expanded/);
      await expect(page.locator(".cm-editor")).toHaveClass(/cm-review-cards-wide/);
      await expect(commentCard).toBeVisible();

      await page.setViewportSize({ width: 1100, height: 900 });
      await expect(page.locator(".cm-editor")).not.toHaveClass(/cm-review-cards-expanded/);
      await expect(commentCard).not.toBeVisible();
      await expect(page.getByRole("button", { name: "Open comment" })).toBeVisible();

      await page.setViewportSize({ width: 2000, height: 900 });
      await expect(page.locator(".cm-editor")).toHaveClass(/cm-review-cards-expanded/);
      await expect(commentCard).toBeVisible();

      await page.setViewportSize({ width: 1100, height: 900 });
      await expect(page.locator(".cm-editor")).not.toHaveClass(/cm-review-cards-expanded/);
      await expandReviewCards(page);
      await expect(commentCard).toBeVisible();
      await page.setViewportSize({ width: 1000, height: 900 });
      await expect(page.locator(".cm-editor")).toHaveClass(/cm-review-cards-expanded/);
    });

    test("Show comments button expands review cards in dual pane mode", async ({ page }) => {
      await setupReviewTest(page, "# Heading", { selection: { anchor: 2, head: 9 }, selectionEvent: null });
      await page.keyboard.type("Better");
      await page.getByTitle("Dual Pane").click();

      const card = page.locator(".cm-suggestion-card");
      await expect(page.getByRole("button", { name: "Open suggestion" })).toBeVisible();
      await expect(card).not.toBeVisible();

      await expandReviewCards(page);
      await expect(card).toBeVisible();

      await page.locator('[name="show-comments"]').click();
      await expect(page.locator(".cm-editor")).not.toHaveClass(/cm-review-cards-expanded/);
      await expect(card).not.toBeVisible();
      await expect(page.getByRole("button", { name: "Open suggestion" })).toBeVisible();
    });

    test("Add comment", async ({ page }) => {
      await setupReviewTest(page, `# Heading`, { selection: { anchor: 2, head: 9 }, selectionEvent: null, suggestMode: false });

      await page.getByRole("button", { name: "Add comment" }).click();
      await page.waitForSelector(".cm-review-card");
      const commentCard = page.locator(".cm-comment-card");
      await expect(commentCard).toBeVisible();
      const commentInput = commentCard.getByRole("textbox", { name: "Mention someone with @" });
      await expect(page.getByRole("button", { name: "Comment", exact: true })).toBeDisabled();
      await commentInput.fill("Comment");
      await expect(page.getByRole("button", { name: "Comment", exact: true })).toBeEnabled();
      await page.getByRole("button", { name: "Comment", exact: true }).click();

      await expect(commentCard.locator(".cm-comment-card-content")).toHaveText("Comment");

      await expect(commentCard.getByRole("button", { name: "Resolve comment" })).toBeVisible();
      await expect(commentCard.getByRole("button", { name: "More options" })).toBeVisible();

      await commentCard.getByRole("button", { name: "More options" }).click();

      await expect(commentCard.getByRole("menu")).toBeVisible();
      await expect(commentCard.getByRole("menuitem", { name: "Edit comment" })).toBeVisible();
      await expect(commentCard.getByRole("menuitem", { name: "Delete comment" })).toBeVisible();
    });

    test("Adds one comment to multiple selected ranges", async ({ page }) => {
      await setupReviewTest(page, "# First\n# Second", { suggestMode: false });
      await page.evaluate((id) => {
        const editor = window.myst_editor[id].main_editor;
        const EditorSelection = editor.state.selection.constructor as typeof import("@codemirror/state").EditorSelection;
        editor.focus();
        editor.dispatch({
          selection: EditorSelection.create([EditorSelection.range(2, 7), EditorSelection.range(10, 16)], 1),
          userEvent: "select.pointer",
        });
      }, id);

      await page.getByRole("button", { name: "Add comment" }).click();

      const commentCard = page.locator(".cm-comment-card");
      await expect(commentCard).toHaveCount(1);
      await expect(page.locator(".review-comment-range")).toHaveCount(2);
      await expect(page.locator(".review-comment-range").nth(0)).toHaveText("First");
      await expect(page.locator(".review-comment-range").nth(1)).toHaveText("Second");

      const comment = await page.evaluate((id) => {
        const reviews = [...window.myst_editor[id].state.reviewItems.value.values()];
        return reviews.find(({ kind }) => kind === "comment");
      }, id);
      expect(comment).toMatchObject({
        kind: "comment",
        anchors: [
          { from: 2, to: 7 },
          { from: 10, to: 16 },
        ],
      });
      expect(comment).not.toHaveProperty("from");
      expect(comment).not.toHaveProperty("to");

      await commentCard.getByRole("textbox", { name: "Mention someone with @" }).fill("Both headings");
      await commentCard.getByRole("button", { name: "Comment" }).click();
      await expect(commentCard.locator(".cm-comment-card-content")).toHaveText("Both headings");

      const commentId = comment.id;
      await expect(page.locator(`[data-review-kind="comment"][data-comment-ids~="${commentId}"]`)).toHaveCount(2);

      await page.evaluate((id) => {
        window.myst_editor[id].main_editor.dispatch({
          changes: { from: 2, to: 7 },
          userEvent: "delete.cut",
        });
      }, id);

      await expect(commentCard).toHaveCount(1);
      await expect(page.locator(".review-comment-range")).toHaveCount(1);
      await expect(page.locator(".review-comment-range")).toHaveText("Second");
      await expect
        .poll(() =>
          page.evaluate((id) => {
            const review = [...window.myst_editor[id].state.reviewItems.value.values()].find(({ kind }) => kind === "comment");
            return review?.anchors.map(({ from, to }) => ({ from, to }));
          }, id),
        )
        .toEqual([{ from: 5, to: 11 }]);
    });

    test("Cutting and pasting text preserves its comment and replies", async ({ page }) => {
      await page.context().grantPermissions(["clipboard-read", "clipboard-write"]);
      await setupReviewTest(page, "# Before Heading after\nDestination", {
        selection: { anchor: 9, head: 16 },
        selectionEvent: null,
        suggestMode: false,
      });

      const commentCard = await createComment(page, "Keep this comment");
      await commentCard.locator(".cm-comment-card-content").click();
      await commentCard.getByRole("textbox", { name: "Reply or add others with @" }).fill("Keep this reply");
      await commentCard.getByRole("button", { name: "Reply" }).click();
      await expect(commentCard.locator(".cm-review-card-comment-text")).toHaveText("Keep this reply");

      const original = await page.evaluate((id) => {
        const comment = [...window.myst_editor[id].state.reviewItems.value.values()].find(({ kind }) => kind === "comment");
        return { id: comment.id, anchorId: comment.anchors[0].id, text: comment.text, replies: comment.comments };
      }, id);

      await selectMainEditor(page, { anchor: 2, head: 22 });
      await page.keyboard.press("Control+x");
      await expectMainEditorDoc(page, "# \nDestination");
      await expect(commentCard).toHaveCount(0);

      await page.evaluate((id) => {
        const editor = window.myst_editor[id].main_editor;
        editor.focus();
        editor.dispatch({ selection: { anchor: editor.state.doc.length } });
      }, id);
      await page.keyboard.press("Control+v");
      await expectMainEditorDoc(page, "# \nDestinationBefore Heading after");
      await expect
        .poll(() =>
          page.evaluate((id) => {
            const editor = window.myst_editor[id].main_editor;
            const comment = [...window.myst_editor[id].state.reviewItems.value.values()].find(({ kind }) => kind === "comment");
            return (
              comment && {
                id: comment.id,
                text: comment.text,
                replies: comment.comments,
                anchors: comment.anchors.map(({ id, from, to }) => ({ id, from, to })),
                anchoredText: editor.state.sliceDoc(comment.anchors[0].from, comment.anchors[0].to),
              }
            );
          }, id),
        )
        .toEqual({
          id: original.id,
          text: original.text,
          replies: original.replies,
          anchors: [{ id: original.anchorId, from: 21, to: 28 }],
          anchoredText: "Heading",
        });
    });

    test("Deleting all commented text in edit mode removes its comment", async ({ page }) => {
      await setupReviewTest(page, `# Heading`, { selection: { anchor: 2, head: 9 }, selectionEvent: null, suggestMode: false });

      const commentCard = await createComment(page, "Comment");
      await expect(commentCard).toBeVisible();

      await selectMainEditor(page, { anchor: 2, head: 9 });
      await page.keyboard.press("Backspace");

      await expect(commentCard).toHaveCount(0);
      expect(await page.evaluate((id) => window.myst_editor[id].state.reviewItems.value.size, id)).toBe(0);
    });

    test("Moves a comment with text dragged to a new position", async ({ page }) => {
      await setupReviewTest(page, `# Heading\nDestination`, { selection: { anchor: 2, head: 9 }, selectionEvent: null, suggestMode: false });

      const commentCard = await createComment(page, "Comment");

      const moved = await simulateReviewDragToDocumentEnd(page, "comment");

      expect(moved.anchoredText).toBe("Heading");
      expect(moved.reviewText).toBe("Comment");
      expect(moved.from).toBe(moved.documentLength - "Heading".length);
      expect(moved.to).toBe(moved.documentLength);
      await expect(commentCard).toBeVisible();
    });

    test("Can reply to a comment", async ({ page }) => {
      await setupReviewTest(page, `# Heading`, { selection: { anchor: 2, head: 9 }, selectionEvent: null, suggestMode: false });

      const commentCard = await createComment(page, "Comment");

      await commentCard.locator(".cm-comment-card-content").click();
      const replyInput = commentCard.getByRole("textbox", { name: "Reply or add others with @" });
      await replyInput.click();
      await replyInput.fill("Reply to comment");
      await commentCard.getByRole("button", { name: "Reply" }).click();

      const reply = commentCard.locator(".cm-review-card-thread .cm-review-card-comment");
      await expect(reply.locator(".cm-review-card-comment-text")).toHaveText("Reply to comment");

      await reply.getByRole("button", { name: "More options" }).click();
      await reply.getByRole("menuitem", { name: "Edit comment" }).click();
      await reply.getByRole("textbox", { name: "Edit comment" }).fill("Edited reply to comment");
      await reply.getByRole("button", { name: "Save" }).click();
      await expect(reply.locator(".cm-review-card-comment-text")).toHaveText("Edited reply to comment");

      await reply.getByRole("button", { name: "More options" }).click();
      await reply.getByRole("menuitem", { name: "Delete comment" }).click();
      await expect(reply).toHaveCount(0);
    });

    test("Can reply to a suggestion", async ({ page }) => {
      await setupReviewTest(page, `# Heading`, { selection: { anchor: 2, head: 9 }, selectionEvent: null });
      await page.keyboard.type("Better heading");

      const suggestionCard = page.locator(".cm-suggestion-card");
      await expandReviewCards(page);
      await suggestionCard.locator(".suggestion-diff").click();
      const replyInput = suggestionCard.getByRole("textbox", { name: "Reply or add others with @" });
      await replyInput.fill("Reply to suggestion");
      await suggestionCard.getByRole("button", { name: "Reply" }).click();

      const reply = suggestionCard.locator(".cm-review-card-thread .cm-review-card-comment");
      await expect(reply.locator(".cm-review-card-comment-text")).toHaveText("Reply to suggestion");

      await reply.getByRole("button", { name: "More options" }).click();
      await reply.getByRole("menuitem", { name: "Edit comment" }).click();
      await reply.getByRole("textbox", { name: "Edit comment" }).fill("Edited reply to suggestion");
      await reply.getByRole("button", { name: "Save" }).click();
      await expect(reply.locator(".cm-review-card-comment-text")).toHaveText("Edited reply to suggestion");

      await reply.getByRole("button", { name: "More options" }).click();
      await reply.getByRole("menuitem", { name: "Delete comment" }).click();
      await expect(reply).toHaveCount(0);
    });

    test("Shows a resolved comment in the resolved panel", async ({ page }) => {
      await setupReviewTest(page, `# Heading`, { selection: { anchor: 2, head: 9 }, selectionEvent: null, suggestMode: false });

      const commentCard = await createComment(page, "Comment to resolve");
      await expandReviewCards(page);
      await commentCard.getByRole("button", { name: "Resolve comment" }).click();

      await openResolvedComments(page);
      const resolvedComment = page.locator(".resolved-review-comment");
      await expect(resolvedComment).toBeVisible();
      await expect(resolvedComment.locator(".resolved-review-message")).toContainText("Comment to resolve");

      await resolvedComment.getByRole("button", { name: "More options" }).click();
      await expect(resolvedComment.getByRole("menu")).toBeVisible();
      await expect(resolvedComment.getByRole("menuitem", { name: "Restore" })).toBeVisible();
      await expect(resolvedComment.getByRole("menuitem", { name: "Delete" })).toBeVisible();
      await resolvedComment.getByRole("menuitem", { name: "Restore" }).click();
      await expect(resolvedComment).not.toBeVisible();
      await expect(page.locator(".cm-comment-card")).toBeVisible();

      await commentCard.getByRole("button", { name: "Resolve comment" }).click();
      await resolvedComment.getByRole("button", { name: "More options" }).click();
      await resolvedComment.getByRole("menuitem", { name: "Delete" }).click();
      await expect(resolvedComment).not.toBeVisible();
      await expect(page.locator(".cm-comment-card")).not.toBeVisible();
    });

    test("Shows a resolved suggestion in the resolved panel", async ({ page }) => {
      await setupReviewTest(page, `# Heading`, { selection: { anchor: 2, head: 9 }, selectionEvent: null });
      await page.keyboard.type("Better heading");

      await expandReviewCards(page);
      await page.locator(".cm-suggestion-card").getByRole("button", { name: "Accept suggestion" }).click();
      await openResolvedComments(page);

      const resolvedSuggestion = page.locator(".resolved-review-suggestion");
      await expect(resolvedSuggestion).toBeVisible();
      await expect(resolvedSuggestion.locator("del")).toHaveText("Heading");
      await expect(resolvedSuggestion.locator("ins")).toHaveText("Better heading");
      await expect(resolvedSuggestion).toContainText("Suggestion accepted by @You");
    });

    test.describe("History", () => {
      test("Ctrl+Z and Ctrl+Y undo and redo an insertion suggestion", async ({ page }) => {
        await setupReviewTest(page, "# Heading", { selection: { anchor: 2 } });
        await page.keyboard.type("New ");

        await expectMainEditorDoc(page, "# New Heading");
        await expectLiveReviewTypes(page, ["insert"]);

        await pressMainEditorShortcut(page, "Control+z");
        await expectMainEditorDoc(page, "# Heading");
        await expectLiveReviewTypes(page, []);

        await pressMainEditorShortcut(page, "Control+y");
        await expectMainEditorDoc(page, "# New Heading");
        await expectLiveReviewTypes(page, ["insert"]);
      });

      test("Ctrl+Z restores an insertion suggestion deleted in normal mode", async ({ page }) => {
        await setupReviewTest(page, "# Heading", { selection: { anchor: 2 } });
        await page.keyboard.type("New ");
        await page.locator('[name="suggest-mode"]').click();
        await selectMainEditor(page, { anchor: 2, head: 6 }, "select.pointer");
        await page.keyboard.press("Backspace");

        await expectMainEditorDoc(page, "# Heading");
        await expectLiveReviewTypes(page, []);

        await pressMainEditorShortcut(page, "Control+z");
        await expectMainEditorDoc(page, "# New Heading");
        await expectLiveReviewTypes(page, ["insert"]);
        await expect(page.locator(".suggestions-insert").first()).toHaveText("New ");
        await expect(page.locator(".cm-suggestion-card-content.suggestions-insert")).toHaveText("New ");

        await pressMainEditorShortcut(page, "Control+y");
        await expectMainEditorDoc(page, "# Heading");
        await expectLiveReviewTypes(page, []);
      });

      test("Ctrl+Z and Ctrl+Shift+Z undo and redo a deletion suggestion", async ({ page }) => {
        await setupReviewTest(page, "# Heading", { selection: { anchor: 2, head: 9 } });
        await page.keyboard.press("Backspace");

        await expectMainEditorDoc(page, "# Heading");
        await expectLiveReviewTypes(page, ["delete"]);

        await pressMainEditorShortcut(page, "Control+z");
        await expectMainEditorDoc(page, "# Heading");
        await expectLiveReviewTypes(page, []);

        await pressMainEditorShortcut(page, "Control+Shift+Z");
        await expectMainEditorDoc(page, "# Heading");
        await expectLiveReviewTypes(page, ["delete"]);
      });

      test("Ctrl+Z and Ctrl+Y undo and redo a replacement suggestion", async ({ page }) => {
        await setupReviewTest(page, "# Heading", { selection: { anchor: 2, head: 9 } });
        await page.keyboard.type("Better");

        await expectMainEditorDoc(page, "# HeadingBetter");
        await expectLiveReviewTypes(page, ["delete", "insert"]);

        await pressMainEditorShortcut(page, "Control+z");
        await expectMainEditorDoc(page, "# Heading");
        await expectLiveReviewTypes(page, []);

        await pressMainEditorShortcut(page, "Control+y");
        await expectMainEditorDoc(page, "# HeadingBetter");
        await expectLiveReviewTypes(page, ["delete", "insert"]);
      });

      test("Ctrl+Z and Ctrl+Y undo and redo dragging normal text in suggest mode", async ({ page }) => {
        await setupReviewTest(page, "# Move\nDestination", { selection: { anchor: 2, head: 6 } });
        await dragMainEditorSelection(page, { destination: "end" });

        await expectMainEditorDoc(page, "# Move\nDestinationMove");
        await expectLiveReviewTypes(page, ["delete", "insert"]);

        await pressMainEditorShortcut(page, "Control+z");
        await expectMainEditorDoc(page, "# Move\nDestination");
        await expectLiveReviewTypes(page, []);

        await pressMainEditorShortcut(page, "Control+y");
        await expectMainEditorDoc(page, "# Move\nDestinationMove");
        await expectLiveReviewTypes(page, ["delete", "insert"]);
      });

      test("Ctrl+Z and Ctrl+Y undo and redo accepting a suggestion", async ({ page }) => {
        await setupReviewTest(page, "# Heading", { selection: { anchor: 2, head: 9 } });
        await page.keyboard.type("Better");
        await page.waitForTimeout(550);
        await expandReviewCards(page);
        await page.locator(".cm-suggestion-card").getByRole("button", { name: "Accept suggestion" }).click();

        await expectMainEditorDoc(page, "# Better");
        await expectLiveReviewTypes(page, []);
        await expectResolvedReviewTypes(page, ["delete", "insert"]);

        await pressMainEditorShortcut(page, "Control+z");
        await expectMainEditorDoc(page, "# HeadingBetter");
        await expectLiveReviewTypes(page, ["delete", "insert"]);
        await expectResolvedReviewTypes(page, []);

        await pressMainEditorShortcut(page, "Control+y");
        await expectMainEditorDoc(page, "# Better");
        await expectLiveReviewTypes(page, []);
        await expectResolvedReviewTypes(page, ["delete", "insert"]);
      });

      test("Ctrl+Z and Ctrl+Shift+Z undo and redo rejecting a suggestion", async ({ page }) => {
        await setupReviewTest(page, "# Heading", { selection: { anchor: 2, head: 9 } });
        await page.keyboard.type("Better");
        await page.waitForTimeout(550);
        await expandReviewCards(page);
        await page.locator(".cm-suggestion-card").getByRole("button", { name: "Reject suggestion" }).click();

        await expectMainEditorDoc(page, "# Heading");
        await expectLiveReviewTypes(page, []);
        await expectResolvedReviewTypes(page, ["delete", "insert"]);

        await pressMainEditorShortcut(page, "Control+z");
        await expectMainEditorDoc(page, "# HeadingBetter");
        await expectLiveReviewTypes(page, ["delete", "insert"]);
        await expectResolvedReviewTypes(page, []);

        await pressMainEditorShortcut(page, "Control+Shift+Z");
        await expectMainEditorDoc(page, "# Heading");
        await expectLiveReviewTypes(page, []);
        await expectResolvedReviewTypes(page, ["delete", "insert"]);
      });

      test("Undo and redo creating and resolving a comment", async ({ page }) => {
        await setupReviewTest(page, "# Heading", { selection: { anchor: 2, head: 9 }, suggestMode: false });
        const commentCard = await createComment(page, "Comment");
        await expandReviewCards(page);
        await expect(commentCard.locator(".cm-comment-card-content")).toHaveText("Comment");

        // Submitting the comment and opening its draft are separate history entries.
        await pressMainEditorShortcut(page, "Control+z");
        await expect
          .poll(() =>
            page.evaluate((id) => {
              const reviewItem = window.myst_editor[id].state.reviewItems.value.values().next().value;
              return Boolean(reviewItem?.draft);
            }, id),
          )
          .toBe(true);
        await expect(commentCard).toBeVisible();
        await pressMainEditorShortcut(page, "Control+z");
        await expect(commentCard).toHaveCount(0);

        await pressMainEditorShortcut(page, "Control+y");
        await expect(commentCard.getByRole("textbox", { name: "Mention someone with @" })).toBeVisible();
        await pressMainEditorShortcut(page, "Control+y");
        await expect(commentCard.locator(".cm-comment-card-content")).toHaveText("Comment");

        await commentCard.getByRole("button", { name: "Resolve comment" }).click();
        await expect(commentCard).toHaveCount(0);
        await expectResolvedReviewKinds(page, ["comment"]);

        await pressMainEditorShortcut(page, "Control+z");
        await expect(commentCard).toBeVisible();
        await expectResolvedReviewKinds(page, []);

        await pressMainEditorShortcut(page, "Control+Shift+Z");
        await expect(commentCard).toHaveCount(0);
        await expectResolvedReviewKinds(page, ["comment"]);
      });

      test("Undo and redo replying to, editing, and deleting comments", async ({ page }) => {
        await setupReviewTest(page, "# Heading", { selection: { anchor: 2, head: 9 }, suggestMode: false });
        const commentCard = await createComment(page, "Comment");
        await expandReviewCards(page);

        await commentCard.locator(".cm-comment-card-content").click();
        const replyInput = commentCard.getByRole("textbox", { name: "Reply or add others with @" });
        await replyInput.click();
        await replyInput.fill("Reply");
        await commentCard.getByRole("button", { name: "Reply" }).click();
        let reply = commentCard.locator(".cm-review-card-thread .cm-review-card-comment");
        await expect(reply.locator(".cm-review-card-comment-text")).toHaveText("Reply");

        await pressMainEditorShortcut(page, "Control+z");
        await expect(reply).toHaveCount(0);
        await pressMainEditorShortcut(page, "Control+y");
        reply = commentCard.locator(".cm-review-card-thread .cm-review-card-comment");
        await expect(reply.locator(".cm-review-card-comment-text")).toHaveText("Reply");

        await reply.getByRole("button", { name: "More options" }).click();
        await reply.getByRole("menuitem", { name: "Edit comment" }).click();
        await reply.getByRole("textbox", { name: "Edit comment" }).fill("Edited reply");
        await reply.getByRole("button", { name: "Save" }).click();
        await expect(reply.locator(".cm-review-card-comment-text")).toHaveText("Edited reply");

        await pressMainEditorShortcut(page, "Control+z");
        await expect(reply.locator(".cm-review-card-comment-text")).toHaveText("Reply");
        await pressMainEditorShortcut(page, "Control+Shift+Z");
        await expect(reply.locator(".cm-review-card-comment-text")).toHaveText("Edited reply");

        await reply.getByRole("button", { name: "More options" }).click();
        await reply.getByRole("menuitem", { name: "Delete comment" }).click();
        await expect(reply).toHaveCount(0);

        await pressMainEditorShortcut(page, "Control+z");
        reply = commentCard.locator(".cm-review-card-thread .cm-review-card-comment");
        await expect(reply.locator(".cm-review-card-comment-text")).toHaveText("Edited reply");
        await pressMainEditorShortcut(page, "Control+y");
        await expect(reply).toHaveCount(0);

        await commentCard.getByRole("button", { name: "More options" }).click();
        await commentCard.getByRole("menuitem", { name: "Edit comment" }).click();
        await commentCard.getByRole("textbox", { name: "Edit comment" }).fill("Edited comment");
        await commentCard.getByRole("button", { name: "Save" }).click();
        await expect(commentCard.locator(".cm-comment-card-content")).toHaveText("Edited comment");

        await pressMainEditorShortcut(page, "Control+z");
        await expect(commentCard.locator(".cm-comment-card-content")).toHaveText("Comment");
        await pressMainEditorShortcut(page, "Control+y");
        await expect(commentCard.locator(".cm-comment-card-content")).toHaveText("Edited comment");

        await commentCard.getByRole("button", { name: "More options" }).click();
        await commentCard.getByRole("menuitem", { name: "Delete comment" }).click();
        await expect(commentCard).toHaveCount(0);

        await pressMainEditorShortcut(page, "Control+z");
        await expect(commentCard.locator(".cm-comment-card-content")).toHaveText("Edited comment");
        await pressMainEditorShortcut(page, "Control+y");
        await expect(commentCard).toHaveCount(0);
      });

      test("Ctrl+X and Ctrl+V are undone and redone as separate history steps", async ({ page, context }) => {
        await context.grantPermissions(["clipboard-write", "clipboard-read"]);
        await setupReviewTest(page, "# Heading", { selection: { anchor: 2, head: 9 } });

        await page.keyboard.press("Control+x");
        await expectMainEditorDoc(page, "# Heading");
        await expectLiveReviewTypes(page, ["delete"]);

        await page.keyboard.press("Control+v");
        await expectMainEditorDoc(page, "# HeadingHeading");
        await expectLiveReviewTypes(page, ["delete", "insert"]);

        await pressMainEditorShortcut(page, "Control+z");
        await expectMainEditorDoc(page, "# Heading");
        await expectLiveReviewTypes(page, ["delete"]);

        await pressMainEditorShortcut(page, "Control+z");
        await expectMainEditorDoc(page, "# Heading");
        await expectLiveReviewTypes(page, []);

        await pressMainEditorShortcut(page, "Control+y");
        await expectMainEditorDoc(page, "# Heading");
        await expectLiveReviewTypes(page, ["delete"]);

        await pressMainEditorShortcut(page, "Control+Shift+Z");
        await expectMainEditorDoc(page, "# HeadingHeading");
        await expectLiveReviewTypes(page, ["delete", "insert"]);
      });
    });
  });

  test.describe.skip("Suggestions", () => {
    test("Can accept suggestions", async ({ page }) => {
      await setupReviewTest(page, `# {~~Heading~>Better heading~~}\nThis{++ is++} some text.\nThis is some text{-- text--}.`, { suggestMode: false });
      await page.waitForSelector(".cm-critic-widget");
      await page.getByTitle("Accept suggestion").first().click();
      await page.getByTitle("Accept suggestion").first().click();
      await page.getByTitle("Accept suggestion").first().click();
      await expect(async () => {
        const text = await page.evaluate((id) => window.myst_editor[id].text, id);
        expect(text).toBe(`# Better heading\nThis is some text.\nThis is some text.`);
      }).toPass();
    });

    test("Can reject suggestions", async ({ page }) => {
      await setupReviewTest(page, `# {~~Heading~>Better heading~~}\nThis{++ is++} some text.\nThis is some text{-- text--}.`, { suggestMode: false });
      await page.waitForSelector(".cm-critic-widget");
      await page.getByTitle("Reject suggestion").first().click();
      await page.getByTitle("Reject suggestion").first().click();
      await page.getByTitle("Reject suggestion").first().click();
      await expect(async () => {
        const text = await page.evaluate((id) => window.myst_editor[id].text, id);
        expect(text).toBe(`# Heading\nThis some text.\nThis is some text text.`);
      }).toPass();
    });

    test("Can use suggest mode", async ({ page }) => {
      await setupReviewTest(page, `# Heading`, { selection: { anchor: 2, head: 9 }, selectionEvent: null });
      await page.keyboard.type("Better heading");
      await expect(page.locator(".cm-suggestion-card")).toBeVisible();
    });

    test("A multiline suggestion doesn't delete the paragraph above", async ({ page }) => {
      await clearEditor(page);
      await insertToMainEditor(page, {
        from: 0,
        insert: `Paragraph 1 {++
      The text here shouldn't overwrite the text above++}`,
      });
      const ins = page.locator("ins").first();
      await ins.waitFor();
      await expect(ins.locator("xpath=../span").filter({ hasText: "Paragraph 1" })).toBeVisible();
    });

    test("A multiline suggestion doesn't delete the paragraph below", async ({ page }) => {
      await clearEditor(page);
      await insertToMainEditor(page, {
        from: 0,
        insert: `Paragraph 1 {++
        The text here shouldn't overwrite the text below
        ++} Paragraph 2`,
      });
      const ins = page.locator("ins").last();
      await ins.waitFor();
      await expect(ins.locator("xpath=../span").filter({ hasText: "Paragraph 2" })).toBeVisible();
    });

    test("The original type of the block is preserved when using multiline suggestions", async ({ page }) => {
      await clearEditor(page);
      await insertToMainEditor(page, {
        from: 0,
        insert: `# Heading 1 {++
      The text here shouldn't overwrite the text above++}`,
      });
      const ins = page.locator("ins").first();
      await expect(ins).toHaveJSProperty("parentElement.tagName", "H1");
    });
  });

  test("Unfinished substitution suggestions don't cause the text inside to merge into the previous block", async ({ page }) => {
    await clearEditor(page);
    await insertToMainEditor(page, {
      from: 0,
      insert: `# Heading 1 {~~
This text shouldn't merge inside the previous block~~}`,
    });
    // Check whether the heading exists and whether the line under it is rendered in a seperate block.
    await expect(page.locator("html-chunk").locator("h1").locator("..").locator("p")).toHaveCount(1);
  });
});

test("Loads Pele only when a Mermaid diagram is rendered", async ({ page }) => {
  const peleRequests: string[] = [];
  page.on("request", (request) => {
    if (/\/assets\/lazy-[^/]+\.js$/.test(new URL(request.url()).pathname)) {
      peleRequests.push(request.url());
    }
  });

  await page.route("**/mermaid-lazy-test.html", (route) =>
    route.fulfill({
      contentType: "text/html",
      body: `
        <div id="myst"></div>
        <script type="module">
          import MystEditor from "/MystEditor.js";
          MystEditor(
            { id: "${id}", initialText: "# Plain Markdown",  mode: "Both"},
            document.getElementById("myst"),
          );
        </script>
      `,
    }),
  );

  await page.goto("/mermaid-lazy-test.html");
  await expect(page.locator(".myst-preview").first()).toContainText("Plain Markdown");
  expect(peleRequests).toHaveLength(0);

  await clearEditor(page);
  await insertChangesAndCheckOutput(
    page,
    {
      from: 0,
      insert: `\`\`\`mermaid
graph TD
    A-->B
\`\`\``,
    },
    (html) => expect(html).toContain("<svg"),
  );

  expect(peleRequests).toHaveLength(1);
});

test.describe.parallel("With collaboration enabled", () => {
  test("Error modal copies error details to the clipboard", async ({ context }) => {
    await context.grantPermissions(["clipboard-write", "clipboard-read"]);
    const page = await applyPageOpts(await context.newPage(), defaultCollabOpts());

    await page.evaluate((id) => {
      window.myst_editor[id].state.error.value = { src: "test", error: new Error("Test error") };
    }, id);

    const dialog = page.getByRole("dialog");
    const copyButton = dialog.getByRole("button");
    await expect(dialog).toBeVisible();
    await expect(copyButton).toHaveText("Copy error to clipboard");
    await copyButton.click();
    await expect(copyButton).toHaveText("Copied!");

    await expect(async () => {
      const clipboard = await page.evaluate(() => navigator.clipboard.readText());
      expect(clipboard).toContain("Error detected from: test");
      expect(clipboard).toContain("Error: Test error");
      expect(clipboard).toContain("Comments: count 0, lines []");
    }).toPass();
  });

  test("commentsEnabled hides stored reviews while collaboration stays enabled", async ({ context }) => {
    const collabOpts = defaultCollabOpts();
    const pageA = await applyPageOpts(await context.newPage(), collabOpts);
    await setupReviewTest(pageA, "# Heading\nParagraph `code`", { selection: { anchor: 2, head: 9 }, suggestMode: false });
    await createComment(pageA, "Keep this comment");
    await pageA.locator('[name="suggest-mode"]').click();
    await selectMainEditor(pageA, { anchor: 10, head: 19 }, "select.pointer");
    await pageA.keyboard.type("Changed");
    await expect.poll(() => pageA.evaluate((id) => window.myst_editor[id].state.collab.value.reviewAdapter.getReviewIds().length, id)).toBe(3);

    const pageB = await applyPageOpts(await context.newPage(), collabOpts);
    await expect.poll(() => pageB.evaluate((id) => window.myst_editor[id].state.reviewItems.value.size, id)).toBe(3);
    await expect(pageB.locator('.myst-preview [data-review-kind="comment"]')).not.toHaveCount(0);
    await expect(pageB.locator(".myst-preview [data-suggestion-type]")).not.toHaveCount(0);

    await pageB.evaluate(async (id) => {
      const editor = window.myst_editor[id];
      const previousClient = editor.state.collab.value;
      const previousView = editor.main_editor;
      const options = editor.state.options;
      options.collaboration.value = { ...options.collaboration.peek(), commentsEnabled: false };
      await new Promise<void>((resolve) => {
        const waitForEditor = () => {
          if (editor.state.collab.value !== previousClient && editor.state.collab.value?.ready.value && editor.main_editor !== previousView) {
            resolve();
          } else {
            requestAnimationFrame(waitForEditor);
          }
        };
        waitForEditor();
      });
    }, id);

    expect(await pageB.evaluate((id) => window.myst_editor[id].state.options.collaboration.value.enabled, id)).toBe(true);
    // The shared data remains in the room even though this editor no longer displays it.
    await expect.poll(() => pageB.evaluate((id) => window.myst_editor[id].state.collab.value.reviewAdapter.getReviewIds().length, id)).toBe(3);
    await expect.poll(() => pageB.evaluate((id) => window.myst_editor[id].state.reviewItems.value.size, id)).toBe(0);
    await expect(pageB.locator('[name="suggest-mode"], [name="show-comments"], [name="resolved"]')).toHaveCount(0);
    await selectMainEditor(pageB, { anchor: 2, head: 9 }, "select.pointer");
    await expect(pageB.getByRole("button", { name: "Add comment" })).toHaveCount(0);
    await expect(pageB.locator(".cm-suggestion-card, .cm-comment-card, .cm-review-card-marker")).toHaveCount(0);
    await expect(pageB.locator(".review-comment-range, .suggestions-insert, .suggestions-delete")).toHaveCount(0);
    await expect(pageB.locator(".myst-preview [data-review-kind], .myst-preview [data-suggestion-type]")).toHaveCount(0);
    await pageB.evaluate((id) => (window.myst_editor[id].state.options.mode.value = "Resolved"), id);
    await expect(pageB.locator("#preview-wrapper")).toHaveCSS("display", "none");
    await expect(pageB.locator("#resolved-wrapper")).toHaveCount(0);

    await startInlineMode(pageB);
    await expect(pageB.locator(".cm-inline-rendered-md")).not.toHaveCount(0);
    await expect(pageB.locator(".cm-inline-rendered-md [data-review-kind], .cm-inline-rendered-md [data-suggestion-type]")).toHaveCount(0);
  });

  test("Initializes an empty document only once", async ({ context }) => {
    const collabOpts = defaultCollabOpts();
    const page = await applyPageOpts(await context.newPage(), collabOpts);

    await expect(async () => {
      const editorContent = await page.evaluate((id) => window.myst_editor[id].text, id);
      expect(editorContent).toMatch(/^# This is MyST Editor/);
      expect(editorContent.indexOf(editorContent.slice(0, 20))).toBe(editorContent.lastIndexOf(editorContent.slice(0, 20))); // Assert that content isn't duplicated
    }).toPass();

    const syncedPage = await applyPageOpts(await context.newPage(), collabOpts);
    await clearEditor(page);
    await expectText(page, "");
    await expectText(syncedPage, "");
    await syncedPage.close();

    const reopenedPage = await applyPageOpts(await context.newPage(), collabOpts, false, false);
    await expectText(reopenedPage, "");
  });

  test("Does not duplicate the initial document when local peers open simultaneously", async ({ context }) => {
    const localOpts = { room: crypto.randomUUID() };
    const pageA = await context.newPage();
    const pageB = await context.newPage();

    await Promise.all([applyPageOpts(pageA, localOpts), applyPageOpts(pageB, localOpts)]);

    const initialText = await pageA.evaluate((id) => window.myst_editor[id].state.options.initialText.value, id);
    await expectText(pageA, initialText);
    await expectText(pageB, initialText);
  });

  test("Does not duplicate the initial document for a local peer which joins later", async ({ context }) => {
    const localOpts = { room: crypto.randomUUID() };
    const pageA = await applyPageOpts(await context.newPage(), localOpts);
    const initialText = await pageA.evaluate((id) => window.myst_editor[id].state.options.initialText.value, id);

    const pageB = await applyPageOpts(await context.newPage(), localOpts);

    await expectText(pageA, initialText);
    await expectText(pageB, initialText);
  });

  test("Rejects the initial document if collaborative state is not empty", async ({ context }) => {
    const collabOpts = defaultCollabOpts();
    const pageA = await applyPageOpts(await context.newPage(), collabOpts);

    // Initialize the document from pageA
    await clearEditor(pageA);
    await insertChangesAndCheckOutput(pageA, { from: 0, insert: "Some content" }, (html) => expect(html).toContain("Some content"));
    await pageA.close();

    // Open the document as another user and verify that the initial content was ignored
    const pageB = await applyPageOpts(await context.newPage(), collabOpts);

    await expect(async () => {
      const editorContent = await pageB.evaluate((id) => window.myst_editor[id].text, id);
      expect(editorContent).not.toContain("# This is MyST Editor");
      expect(editorContent).toContain("Some content");
      expect(editorContent.indexOf("Some content")).toBe(editorContent.lastIndexOf("Some content")); // Assert that content isn't duplicated
    }).toPass();
  });

  test("Synces document between peers", async ({ context }) => {
    const collabOpts = defaultCollabOpts();
    const pageA = await applyPageOpts(await context.newPage(), collabOpts);

    // Initialize the document from pageA and add some content
    await clearEditor(pageA);
    await insertChangesAndCheckOutput(pageA, { from: 0, insert: "This is from pageA!" }, (html) => expect(html).toContain("This is from pageA!"));

    // Open the document as another user and add some content
    const pageB = await applyPageOpts(await context.newPage(), collabOpts);
    await expect(async () => {
      const currentText = await pageB.evaluate((id) => window.myst_editor[id].text, id);
      expect(currentText).toBe("This is from pageA!");

      await insertChangesAndCheckOutput(
        pageB,
        {
          from: currentText.length,
          insert: "And this is from pageB!",
        },
        (html) => {
          // Verify that both contents are present
          expect(html).toContain("This is from pageA!");
          expect(html).toContain("And this is from pageB!");
        },
      );
    }).toPass();
  });

  test("Syncs reviews between peers", async ({ context }) => {
    const collabOpts = defaultCollabOpts();
    const pageA = await applyPageOpts(await context.newPage(), collabOpts);

    await setupReviewTest(pageA, "# Heading", { suggestMode: false });

    const pageB = await applyPageOpts(await context.newPage(), collabOpts);
    await expectText(pageB, "# Heading");

    await selectMainEditor(pageA, { anchor: 2, head: 9 }, "select.pointer");
    await createComment(pageA, "Shared comment");

    await expect(pageB.locator(".cm-comment-card-content")).toHaveText("Shared comment");
  });

  test("Persisted and remote comments do not select a review for another peer", async ({ context }) => {
    const collabOpts = defaultCollabOpts();
    const pageA = await applyPageOpts(await context.newPage(), collabOpts);
    await setupReviewTest(pageA, "# First\nSecond", { suggestMode: false });

    const pageB = await applyPageOpts(await context.newPage(), collabOpts);
    await expectText(pageB, "# First\nSecond");

    const addReviewComment = async (page: Page, from: number, to: number, comment: string) => {
      await selectMainEditor(page, { anchor: from, head: to }, "select.pointer");
      await createComment(page, comment);
    };

    await addReviewComment(pageA, 2, 7, "First comment");
    const firstCard = pageA.locator(".cm-comment-card").filter({ hasText: "First comment" });
    await expect(firstCard).toHaveClass(/cm-review-card-selected/);
    await expect(pageB.locator(".cm-comment-card-content")).toHaveText("First comment");

    await addReviewComment(pageB, 8, 14, "Second comment");
    const secondCard = pageA.locator(".cm-comment-card").filter({ hasText: "Second comment" });
    await expect(secondCard).toHaveCount(1);
    await expect(firstCard).toHaveClass(/cm-review-card-selected/);
    await expect(secondCard).not.toHaveClass(/cm-review-card-selected/);

    const pageC = await applyPageOpts(await context.newPage(), collabOpts);
    await expect(pageC.locator(".cm-comment-card-content")).toHaveCount(2);
    await expect(pageC.locator(".cm-review-card-selected")).toHaveCount(0);
    await expect(pageC.locator(".review-selection")).toHaveCount(0);
  });

  test("Preserves the selection after reconnecting", async ({ context }) => {
    const collabOpts = defaultCollabOpts();
    const pageA = await applyPageOpts(await context.newPage(), collabOpts);
    const pageB = await applyPageOpts(await context.newPage(), collabOpts);

    await clearEditor(pageA);
    await insertToMainEditor(pageA, { from: 0, insert: "first\nsecond\nthird" });
    await expectText(pageB, "first\nsecond\nthird");

    await pageA.evaluate((id) => {
      const editor = window.myst_editor[id];
      editor.main_editor.focus();
      editor.main_editor.dispatch({ selection: { anchor: 6, head: 12 } });
      editor.state.collab.value.provider.disconnect();
    }, id);
    await pageA.waitForFunction((id) => !window.myst_editor[id].state.collab.value.ready.value, id);

    // A relative Yjs position should keep the selection on "second" even when a
    // collaborator changes the document while this client is disconnected.
    await insertToMainEditor(pageB, { from: 0, insert: "prefix " });
    await pageA.evaluate((id) => window.myst_editor[id].state.collab.value.provider.connect(), id);
    await collaborationReady(pageA);

    await expect(async () => {
      const state = await pageA.evaluate((id) => {
        const editor = window.myst_editor[id].main_editor;
        return {
          selectedText: editor.state.sliceDoc(editor.state.selection.main.from, editor.state.selection.main.to),
          anchor: editor.state.selection.main.anchor,
          head: editor.state.selection.main.head,
        };
      }, id);
      expect(state).toEqual({ selectedText: "second", anchor: 13, head: 19 });
    }).toPass();
  });

  test.describe.skip("Comments", () => {
    test("Positions are synced", async ({ context }) => {
      const collabOpts = defaultCollabOpts();
      const pageA = await applyPageOpts(await context.newPage(), collabOpts);
      const pageB = await applyPageOpts(await context.newPage(), collabOpts);

      // Initialize the document from pageA and add some content
      await clearEditor(pageA);
      await insertChangesAndCheckOutput(pageA, { from: 0, insert: "Line1\nLine2\nLine3\nLine4" }, (html) => expect(html).toContain("Line4"));

      await addComment(pageA, 2);

      // Confirm that comment was added
      await expect(pageA.locator(".comment-wrapper")).toHaveCount(1);
      await expect(pageB.locator(".comment-wrapper")).toHaveCount(1);

      // Remove the comment from pageB
      await getCommentBtn(pageB, 2).hover({ force: true });
      await pageB.getByText("DELETE").click();

      // Verify that comment was removed on both peers
      await expect(pageB.locator(".comment-wrapper")).toHaveCount(0);
      await expect(pageA.locator(".comment-wrapper")).toHaveCount(0);
    });

    test("Can be dragged", async ({ context }) => {
      const collabOpts = defaultCollabOpts();
      const pageA = await applyPageOpts(await context.newPage(), collabOpts);
      const pageB = await applyPageOpts(await context.newPage(), collabOpts);

      // Initialize the document from pageA and add some content
      await clearEditor(pageA);
      await insertChangesAndCheckOutput(pageA, { from: 0, insert: "Line1\nLine2\nLine3\nLine4" }, (html) => expect(html).toContain("Line4"));

      await addComment(pageA, 1);

      const initialCommentPosition = await pageA
        .locator("div:has(> .comment-wrapper)")
        .first()
        .evaluate((e) => Number(e.getAttribute("top")));

      // Drag the comment
      await getCommentBtn(pageA, 1).hover({ force: true });
      await pageA.mouse.down();
      const box = await getCommentBtn(pageA, 3).boundingBox();
      expect(box).not.toBeNull();
      await pageA.mouse.move(box!.x + box!.width / 2, box!.y + box!.height / 2, { steps: 5 });
      await pageA.mouse.up();

      await expect(pageA.locator(".comment-wrapper")).toHaveCount(1);
      await expect(pageB.locator(".comment-wrapper")).toHaveCount(1);

      // Confirm that the comment position has changed
      await expect(async () => {
        const newCommentPosition = await pageA
          .locator("div:has(> .comment-wrapper)")
          .first()
          .evaluate((e) => Number(e.getAttribute("top")));
        expect(newCommentPosition).toBeGreaterThan(initialCommentPosition);
      }).toPass();
    });

    test("Can be resolved", async ({ context }) => {
      const collabOpts = defaultCollabOpts();
      const pageA = await applyPageOpts(await context.newPage(), collabOpts);
      const pageB = await applyPageOpts(await context.newPage(), collabOpts);

      await addComment(pageA, 1);

      // Resolve the comment
      await getCommentBtn(pageA, 1).hover({ force: true });
      await pageA.locator("#demo-editor").getByText("RESOLVE").click();

      // Verify that it disappeared from the editor
      await expect(pageA.locator(".comment-wrapper")).toHaveCount(0);

      // Verify that it appeared in the resolved comments
      await openResolvedComments(pageA);
      await pageA.waitForSelector(".resolved-comment");
      await expect(pageA.locator(".resolved-comment")).toHaveCount(1);

      // Verify that the resolved comments are synced among peers
      await openResolvedComments(pageB);
      await pageB.waitForSelector(".resolved-comment");
      await expect(pageB.locator(".resolved-comment")).toHaveCount(1);
    });

    test("Can be deleted", async ({ context }) => {
      const collabOpts = defaultCollabOpts();
      const pageA = await applyPageOpts(await context.newPage(), collabOpts);
      const pageB = await applyPageOpts(await context.newPage(), collabOpts);

      await addComment(pageA, 1);

      // Resolve the comment
      await getCommentBtn(pageA, 1).hover({ force: true });
      await pageA.locator("#demo-editor").getByText("DELETE").click();

      // Verify it is gone
      await expect(pageA.locator(".comment-wrapper")).toHaveCount(0);
      await expect(pageB.locator(".comment-wrapper")).toHaveCount(0);
    });

    test("Can be merged", async ({ context }) => {
      const collabOpts = defaultCollabOpts();
      const pageA = await applyPageOpts(await context.newPage(), collabOpts);
      const pageB = await applyPageOpts(await context.newPage(), collabOpts);

      // Initialize the document from pageA and add some content
      await clearEditor(pageA);
      await insertChangesAndCheckOutput(pageA, { from: 0, insert: "Line1\nLine2\nLine3\nLine4" }, (html) => expect(html).toContain("Line4"));

      await addComment(pageA, 1, "1");
      await addComment(pageA, 3, "2");

      // Drag the comment
      // Locator.dragTo() has issues as reported in https://github.com/microsoft/playwright/issues/20254
      await getCommentBtn(pageA, 1).hover({ force: true });
      await pageA.mouse.down();
      const box = await getCommentBtn(pageA, 3).boundingBox();
      expect(box).not.toBeNull();
      await pageA.mouse.move(box!.x + box!.width / 2, box!.y + box!.height / 2, { steps: 5 });
      await pageA.mouse.up();

      await expect(pageA.locator(".comment-wrapper")).toHaveCount(1);
      await expect(pageB.locator(".comment-wrapper")).toHaveCount(1);

      // Confirm the comment contents are merged
      await expect(pageA.locator(".cm-comment-author-colored").first()).toContainText("2");
      await expect(pageA.locator(".cm-comment-author-colored").last()).toContainText("1");
      await expect(pageB.locator(".cm-comment-author-colored").first()).toContainText("2");
      await expect(pageB.locator(".cm-comment-author-colored").last()).toContainText("1");
    });
  });

  test.describe.skip("Resolved Comments", () => {
    test("Can be restored", async ({ context }) => {
      const collabOpts = defaultCollabOpts();
      const pageA = await applyPageOpts(await context.newPage(), collabOpts);
      const pageB = await applyPageOpts(await context.newPage(), collabOpts);

      // Switch to resolved comments view
      await openResolvedComments(pageA);
      await openResolvedComments(pageB);

      await addComment(pageA, 1);

      // Resolve the comment
      await getCommentBtn(pageA, 1).hover({ force: true });
      await pageA.locator("#demo-editor").getByText("RESOLVE").click();

      // Restore the comment
      await pageA.locator(".myst-dropdown-toggle").first().hover({ force: true });
      await pageA.locator(".myst-restore-btn").first().click();

      // Verify it is gone from resolved comments
      await expect(pageA.locator(".resolved-comment")).toHaveCount(0);
      await expect(pageB.locator(".resolved-comment")).toHaveCount(0);

      // Verify it appeared in the editor
      await expect(pageA.locator(".comment-wrapper")).toHaveCount(1);
      await expect(pageB.locator(".comment-wrapper")).toHaveCount(1);
    });

    test("Can be occupied and restored", async ({ context }) => {
      const collabOpts = defaultCollabOpts();
      const pageA = await applyPageOpts(await context.newPage(), collabOpts);
      const pageB = await applyPageOpts(await context.newPage(), collabOpts);

      // Switch to resolved comments view
      await openResolvedComments(pageA);
      await openResolvedComments(pageB);

      await addComment(pageA, 1, "1");

      // Resolve the comment
      await getCommentBtn(pageA, 1).hover({ force: true });
      await pageA.locator("#demo-editor").getByText("RESOLVE").click();

      await addComment(pageA, 1, "2");

      // Restore the comment
      await pageA.locator(".myst-dropdown-toggle").first().hover({ force: true });
      await pageA.locator(".myst-restore-btn").first().click();

      // Verify it is gone from resolved comments
      await expect(pageA.locator(".resolved-comment")).toHaveCount(0);
      await expect(pageB.locator(".resolved-comment")).toHaveCount(0);

      // Verify it is in the editor and contains both lines
      await expect(pageA.locator(".cm-comment-author-colored").first()).toContainText("2");
      await expect(pageA.locator(".cm-comment-author-colored").last()).toContainText("1");
      await expect(pageB.locator(".cm-comment-author-colored").first()).toContainText("2");
      await expect(pageB.locator(".cm-comment-author-colored").last()).toContainText("1");
    });

    test("Can be orphaned and restored", async ({ context }) => {
      const collabOpts = defaultCollabOpts();
      const pageA = await applyPageOpts(await context.newPage(), collabOpts);
      const pageB = await applyPageOpts(await context.newPage(), collabOpts);

      // Switch to resolved comments view
      await openResolvedComments(pageA);
      await openResolvedComments(pageB);

      await addComment(pageA, 1);

      // Resolve the comment
      await getCommentBtn(pageA, 1).hover({ force: true });
      await pageA.locator("#demo-editor").getByText("RESOLVE").click();

      await clearEditor(pageA);

      // Restore comment
      await pageA.locator(".myst-dropdown-toggle").first().hover({ force: true });
      await pageA.locator(".myst-restore-btn").first().click();

      // Verify it is at the end of the document
      await expect(pageA.locator(".comment-wrapper")).toHaveCount(1);
      await expect(pageB.locator(".comment-wrapper")).toHaveCount(1);
    });

    test("Can be deleted", async ({ context }) => {
      const collabOpts = defaultCollabOpts();
      const pageA = await applyPageOpts(await context.newPage(), collabOpts);
      const pageB = await applyPageOpts(await context.newPage(), collabOpts);

      // Switch to resolved comments view
      await openResolvedComments(pageA);
      await openResolvedComments(pageB);

      await addComment(pageA, 1);

      // Resolve the comment
      await getCommentBtn(pageA, 1).hover({ force: true });
      await pageA.locator("#demo-editor").getByText("RESOLVE").click();

      // Delete the comment
      await pageA.locator(".myst-dropdown-toggle").first().hover({ force: true });
      await pageA.locator(".myst-delete-btn").first().click();

      // Verify it is gone
      await expect(pageA.locator(".resolved-comment")).toHaveCount(0);
      await expect(pageB.locator(".resolved-comment")).toHaveCount(0);
    });
  });

  test.describe("Dynamic options", () => {
    test("Can modify UI", async ({ context }) => {
      const collabOpts = defaultCollabOpts();
      const page = await applyPageOpts(await context.newPage(), collabOpts);
      await page.evaluate(() => {
        window.myst_editor.demo.state.options.title.value = "Playwright";
        const btns = window.myst_editor.demo.state.options.includeButtons.value;
        window.myst_editor.demo.state.options.includeButtons.value = [...btns, { id: "test", text: "test" }];
        window.myst_editor.demo.state.options.mode.value = "Resolved";
      });

      await expect(page.locator("#document-title")).toContainText("Playwright");
      await page.evaluate(() => {
        window.myst_editor.demo.state.options.subtitle.value = "A subtitle";
      });
      await expect(page.locator("#document-subtitle")).toContainText("A subtitle");
      await expect(page.locator("#topbar .side:last-child .btns button")).toHaveCount(2);
      await expect(page.locator("#resolved-wrapper")).toBeVisible();
    });

    test("Can change rooms", async ({ context }) => {
      const collabOpts = defaultCollabOpts();
      // A, B - room 0
      const pageA = await applyPageOpts(await context.newPage(), collabOpts);
      const pageB = await applyPageOpts(await context.newPage(), collabOpts);

      await clearEditor(pageA);
      const text0 = "this is room 0";
      await insertToMainEditor(pageA, { from: 0, insert: text0 });
      await expect(async () => {
        const text = await pageB.evaluate((id) => window.myst_editor[id].text, id);
        expect(text).toBe(text0);
      }).toPass();

      const text1 = "this is room 1";
      const room1 = collabOpts.room + "1";
      // A - join room 1
      await changeRoom(pageA, room1);
      await clearEditor(pageA);
      await insertToMainEditor(pageA, { from: 0, insert: text1 });
      await expect(async () => {
        const text = await pageA.evaluate((id) => window.myst_editor[id].text, id);
        expect(text).toBe(text1);
      }).toPass();

      await expect(async () => {
        const text = await pageB.evaluate((id) => window.myst_editor[id].text, id);
        expect(text).toBe(text0);
      }).toPass();
      // B - join room 1
      await changeRoom(pageB, room1);
      await expect(async () => {
        const text = await pageB.evaluate((id) => window.myst_editor[id].text, id);
        expect(text).toBe(text1);
      }).toPass();
    });
  });

  test.skip("resolved suggestions are shown", async ({ context }) => {
    const collabOpts = defaultCollabOpts();
    const pageA = await applyPageOpts(await context.newPage(), collabOpts);
    const pageB = await applyPageOpts(await context.newPage(), collabOpts);

    await clearEditor(pageA);
    await insertToMainEditor(pageA, { from: 0, insert: `# {~~Heading~>Better heading~~}\nThis{++ is++} some text.\nThis is some text{-- text--}.` });
    await pageA.waitForSelector(".cm-critic-widget");

    await openResolvedComments(pageA);
    await pageA.getByTitle("Accept suggestion").first().click();
    await pageA.getByTitle("Reject suggestion").first().click();
    await pageA.getByTitle("Accept suggestion").first().click();
    await expect(pageA.locator(".resolved-suggestion")).toHaveCount(3);

    await openResolvedComments(pageB);
    await expect(pageB.locator(".resolved-suggestion")).toHaveCount(3);
  });
});

test.describe.parallel("MystEditorGit wrapper", () => {
  test("Shows branch and commit in subtitle", async ({ context }) => {
    const page = await applyPageOpts(await context.newPage(), defaultCollabOpts(), true);
    await expect(page.locator("[data-git-branch]")).toContainText("feature");
    await expect(page.locator("[data-git-commit]")).toContainText(DEMO_FEATURE_TIP);
  });

  test("Does not duplicate repository content when peers open simultaneously", async ({ context }) => {
    const collabOpts = defaultCollabOpts();
    const pageA = await context.newPage();
    const pageB = await context.newPage();

    await Promise.all([applyPageOpts(pageA, collabOpts, true), applyPageOpts(pageB, collabOpts, true)]);

    const initialText = await pageA.evaluate((id) => window.myst_editor[id].state.options.initialText.value, id);
    await expectText(pageA, initialText);
    await expectText(pageB, initialText);
  });

  test("Synces document between peers", async ({ context }) => {
    const collabOpts = defaultCollabOpts();
    const pageA = await applyPageOpts(await context.newPage(), collabOpts, true);

    // Initialize the document from pageA and add some content
    await clearEditor(pageA);
    await insertChangesAndCheckOutput(pageA, { from: 0, insert: "This is from pageA!" }, (html) => expect(html).toContain("This is from pageA!"));

    // Open the document as another user and add some content
    const pageB = await applyPageOpts(await context.newPage(), collabOpts, true);
    await expect(async () => {
      const currentText = await pageB.evaluate((id) => window.myst_editor[id].text, id);
      expect(currentText).toBe("This is from pageA!");

      await insertChangesAndCheckOutput(
        pageB,
        {
          from: currentText.length,
          insert: "And this is from pageB!",
        },
        (html) => {
          // Verify that both contents are present
          expect(html).toContain("This is from pageA!");
          expect(html).toContain("And this is from pageB!");
        },
      );
    }).toPass();
  });

  test("Switches rooms", async ({ context }) => {
    const collabOpts = defaultCollabOpts();
    const page = await applyPageOpts(await context.newPage(), collabOpts, true);

    async function checkRoomSwitch(roomId: number, action: () => Promise<void>) {
      await clearEditor(page);
      await insertToMainEditor(page, { from: 0, insert: `room ${roomId}` });
      await action();
      await page.waitForSelector(".cm-content");
      await expect(async () => {
        const text = await page.evaluate((id) => window.myst_editor[id].text, id);
        expect(text).not.toContain(`room ${roomId}`);
      }).toPass();
    }

    // commits first — pick a different revision than the current tip
    await checkRoomSwitch(1, async () => {
      await page.click("[data-git-commit]");
      await page.locator("#git-commit-picker[open]").waitFor();
      await page.locator("#git-commit-picker-list li").nth(1).click();
    });
    await checkRoomSwitch(2, async () => {
      await page.click("[data-git-branch]");
      await page.locator("#git-branch-picker[open]").waitFor();
      await page.locator("#git-branch-picker-list >> text=main").click();
    });
    await checkRoomSwitch(3, async () => {
      await page.locator(".file").nth(1).click();
    });
  });

  test("Commits changes", async ({ context }) => {
    const collabOpts = defaultCollabOpts();
    const pageA = await applyPageOpts(await context.newPage(), collabOpts, true);
    await clearEditor(pageA);
    await insertToMainEditor(pageA, { from: 0, insert: `change` });

    const pageB = await applyPageOpts(await context.newPage(), collabOpts, true);

    await pageA.getByTitle("Commit").click();

    // Check if text used for commit contains the changes
    await expect(async () => {
      const textA = await pageA.evaluate((id) => window.myst_editor[id].text, id);
      expect(textA).toContain("change");
      const textB = await pageB.evaluate((id) => window.myst_editor[id].text, id);
      expect(textB).toContain("change");
    }).toPass();

    // Commit
    await pageA.click("button[type=submit]");
    await pageA.waitForSelector(".cm-content");

    await expect(async () => {
      const hashA = await pageA.evaluate((id) => window.myst_editor[id].git.commit.value.hash, id);
      const hashB = await pageB.evaluate((id) => window.myst_editor[id].git.commit.value.hash, id);
      expect(hashA).toMatch(/^offline-/);
      expect(hashB).toBe(hashA);
      await expect(pageA.locator("[data-git-commit]")).toContainText(hashA);
      await expect(pageB.locator("[data-git-commit]")).toContainText(hashB);
    }).toPass();
  });

  test("Carries comments and suggestions into the new commit room", async ({ context }) => {
    const page = await applyPageOpts(await context.newPage(), defaultCollabOpts(), true);
    await setupReviewTest(page, "# Heading\nParagraph", { selection: { anchor: 2, head: 9 }, suggestMode: false });
    await createComment(page, "Keep this comment");

    await page.locator('[name="suggest-mode"]').click();
    await selectMainEditor(page, { anchor: 10, head: 19 }, "select.pointer");
    await page.keyboard.type("Changed");

    const reviewsInRoom = () =>
      page.evaluate((id) => {
        const adapter = window.myst_editor[id].state.collab.value.reviewAdapter;
        return adapter
          .getReviewIds()
          .map((reviewId) => {
            const review = adapter.getReview(reviewId);
            return { id: review.id, kind: review.kind, type: review.type, text: review.text, anchors: review.anchors };
          })
          .sort((a, b) => a.id.localeCompare(b.id));
      }, id);

    await expect.poll(reviewsInRoom).toHaveLength(3);
    const beforeCommit = await reviewsInRoom();

    await page.getByTitle("Commit").click();
    await page.getByRole("button", { name: "Commit", exact: true }).click();
    await expect.poll(() => page.evaluate((id) => window.myst_editor[id].git.commit.value.hash, id)).toMatch(/^offline-/);
    await expect.poll(reviewsInRoom).toEqual(beforeCommit);
    await expect.poll(() => page.evaluate((id) => window.myst_editor[id].state.reviewItems.value.size, id)).toBe(3);
  });

  test("Carries changes made while commiting over to the new commit", async ({ context }) => {
    const collabOpts = defaultCollabOpts();
    const pageA = await applyPageOpts(await context.newPage(), collabOpts, true);
    await clearEditor(pageA);
    await insertToMainEditor(pageA, { from: 0, insert: "commited" });

    const pageB = await applyPageOpts(await context.newPage(), collabOpts, true);
    await expectText(pageB, "commited");

    await pageA.getByTitle("Commit").click();
    await pageA.locator("button[type=submit]").waitFor();

    // Documents stay editable while a commit is being prepared
    await insertToMainEditor(pageB, { from: "commited".length, insert: " and later" });
    await expectText(pageA, "commited and later");

    await pageA.click("button[type=submit]");
    await pageA.waitForSelector(".cm-content");

    await expect(async () => {
      // The commit holds what was shown in the diff ...
      const commited = await pageA.evaluate((id) => window.myst_editor[id].state.options.initialText.value, id);
      expect(commited).toBe("commited");
      // ... and the change made while it was being prepared is in the room of the new commit.
      await expectText(pageA, "commited and later");
      await expectText(pageB, "commited and later");
    }).toPass();
  });

  test("Closes the commit modal when someone else commits first", async ({ context }) => {
    const collabOpts = defaultCollabOpts();
    const pageA = await applyPageOpts(await context.newPage(), collabOpts, true);
    await clearEditor(pageA);
    await insertToMainEditor(pageA, { from: 0, insert: "change" });

    const pageB = await applyPageOpts(await context.newPage(), collabOpts, true);
    await expectText(pageB, "change");

    await pageA.getByTitle("Commit").click();
    await pageA.locator("button[type=submit]").waitFor();

    await pageB.getByTitle("Commit").click();
    await pageB.click("button[type=submit]");

    await expect(pageA.getByText("Someone else has commited in the meantime")).toBeVisible();
    await expect(pageA.locator("button[type=submit]")).toBeHidden();
  });
});

test("dist/MystEditor.js exports the editor module", async () => {
  const entry = await fs.readFile("dist/MystEditor.js", "utf8");
  expect(entry).toMatch(/\bexport\s*(?:default\b|\{[^}]*\bdefault\b)/s);
  expect(entry.length).toBeGreaterThan(3000);

  ["spellcheckOpts", "transforms", "collaboration", "ycomments", "commentsEnabled"].forEach((s) => expect(entry).toContain(s));
});

///////////////////////// UTILITY FUNCTIONS /////////////////////////

const expandReviewCards = async (page: Page) => {
  await page.locator('[name="show-comments"]').click();
  await expect(page.locator(".cm-editor")).toHaveClass(/cm-review-cards-expanded/);
};

const insertToMainEditor = (page: Page, changes: ChangeSpec | null): Promise<void> /** @ts-ignore */ =>
  page.evaluate(({ changes, id }) => window.myst_editor[id].main_editor.dispatch({ changes }), { changes, id });

const clearEditor = async (page: Page) => {
  const currentText = await page.evaluate((id) => window.myst_editor[id].text, id);
  await insertToMainEditor(page, {
    from: 0,
    to: currentText.length,
    insert: "",
  });
};

const moveMainEditorCursor = (page: Page, anchor: number) =>
  page.evaluate(
    ({ id, anchor }) => {
      const editor = window.myst_editor[id].main_editor;
      editor.focus();
      editor.dispatch({ selection: { anchor }, userEvent: "select.pointer" });
    },
    { id, anchor },
  );

const selectMainEditor = (page: Page, selection: { anchor: number; head?: number }, userEvent?: string) =>
  page.evaluate(
    ({ id, selection, userEvent }) => {
      const editor = window.myst_editor[id].main_editor;
      editor.focus();
      editor.dispatch({ selection, ...(userEvent ? { userEvent } : {}) });
    },
    { id, selection, userEvent },
  );

const dragMainEditorSelection = (page: Page, { source, destination }: { source?: { from: number; to: number }; destination: number | "end" }) =>
  page.evaluate(
    ({ id, source, destination }) => {
      const editor = window.myst_editor[id].main_editor;
      if (source) editor.dispatch({ selection: { anchor: source.from, head: source.to }, userEvent: "select.pointer" });

      const { from, to } = source ?? editor.state.selection.main;
      const destinationPos = destination === "end" ? editor.state.doc.length : destination;
      const changes = editor.state.changes([
        { from, to },
        { from: destinationPos, insert: editor.state.sliceDoc(from, to) },
      ]);
      editor.dispatch({
        changes,
        selection: { anchor: changes.mapPos(destinationPos, -1), head: changes.mapPos(destinationPos, 1) },
        userEvent: "move.drop",
      });
    },
    { id, source, destination },
  );

const setupReviewTest = async (
  page: Page,
  text: string,
  {
    selection,
    suggestMode = true,
    selectionEvent = "select.pointer",
  }: { selection?: { anchor: number; head?: number }; suggestMode?: boolean; selectionEvent?: string | null } = {},
) => {
  await clearEditor(page);
  await insertToMainEditor(page, { from: 0, insert: text });
  if (suggestMode) await page.locator('[name="suggest-mode"]').click();
  if (selection) await selectMainEditor(page, selection, selectionEvent ?? undefined);
};

const createComment = async (page: Page, text: string) => {
  await page.getByRole("button", { name: "Add comment" }).click();
  const commentCard = page.locator(".cm-comment-card");
  await page.getByRole("textbox", { name: "Mention someone with @" }).fill(text);
  await page.getByRole("button", { name: "Comment", exact: true }).click();
  return commentCard;
};

const pressMainEditorShortcut = async (page: Page, shortcut: string) => {
  await page.evaluate((id) => window.myst_editor[id].main_editor.focus(), id);
  await page.keyboard.press(shortcut);
};

const expectMainEditorDoc = async (page: Page, expected: string) => {
  await expect.poll(() => page.evaluate((id) => window.myst_editor[id].main_editor.state.doc.toString(), id)).toBe(expected);
};

const expectReviewValues = async (page: Page, key: "type" | "kind", resolved: boolean, expected: string[]) => {
  await expect
    .poll(() =>
      page.evaluate(
        ({ id, key, resolved }) =>
          [...window.myst_editor[id].state.reviewItems.value.values()]
            .filter((reviewItem) => Boolean(reviewItem.resolved) === resolved)
            .map((reviewItem) => reviewItem[key])
            .filter(Boolean)
            .sort(),
        { id, key, resolved },
      ),
    )
    .toEqual([...expected].sort());
};

const expectLiveReviewTypes = (page: Page, expected: string[]) => expectReviewValues(page, "type", false, expected);

const expectResolvedReviewTypes = (page: Page, expected: string[]) => expectReviewValues(page, "type", true, expected);

const expectResolvedReviewKinds = (page: Page, expected: string[]) => expectReviewValues(page, "kind", true, expected);

const simulateReviewDragToDocumentEnd = (page: Page, kind: "suggestion" | "comment") =>
  page.evaluate(
    ({ id, kind }) => {
      const mystEditor = window.myst_editor[id];
      const editor = mystEditor.main_editor;
      const reviewItem = [...mystEditor.state.reviewItems.value.values()].find((item) =>
        kind === "comment" ? item.kind === "comment" : item.type === "insert",
      );
      if (!reviewItem) throw new Error(`No ${kind} review found`);

      const source = reviewItem.anchors[0];
      editor.dispatch({ selection: { anchor: source.from, head: source.to }, userEvent: "select.pointer" });

      const destination = editor.state.doc.length;
      const text = editor.state.sliceDoc(source.from, source.to);
      const changes = editor.state.changes([
        { from: source.from, to: source.to },
        { from: destination, insert: text },
      ]);
      editor.dispatch({
        changes,
        selection: { anchor: changes.mapPos(destination, -1), head: changes.mapPos(destination, 1) },
        userEvent: "move.drop",
      });

      const movedReview = mystEditor.state.reviewItems.value.get(reviewItem.id);
      if (!movedReview) throw new Error(`${kind} review disappeared after moving its text`);

      return {
        from: movedReview.anchors[0].from,
        to: movedReview.anchors[0].to,
        reviewText: movedReview.text,
        anchoredText: editor.state.sliceDoc(movedReview.anchors[0].from, movedReview.anchors[0].to),
        documentLength: editor.state.doc.length,
      };
    },
    { id, kind },
  );

const expectText = (page: Page, text: string) =>
  expect(async () => {
    expect(await page.evaluate((id) => window.myst_editor[id].text, id)).toBe(text);
  }).toPass();

const defaultCollabOpts = () => ({ collab_server: "ws://localhost:4455", room: crypto.randomUUID(), repo: `repos/${crypto.randomUUID()}` });

const collaborationReady = (page: Page) =>
  page.waitForFunction(
    (id) => window?.myst_editor[id]?.state?.collab?.value?.ready?.value && window.myst_editor[id].state.collab.value.editorReady.value,
    id,
  );

const insertChangesAndCheckOutput = async (page: Page, changes: ChangeSpec | null, check: (html: string) => void | Promise<void>) => {
  await insertToMainEditor(page, changes);
  await expect(async () => {
    const preview = await page.locator(".myst-preview").first().innerHTML();
    check(preview);
  }).toPass();
};

const applyPageOpts = async (page: Page, opts: object, git = false, expectInitialText = true) => {
  let query = new URLSearchParams();
  Object.entries(opts).forEach(([k, v]) => query.set(k, v));

  // Fail on errors
  page.on("pageerror", (err) => {
    throw new Error(`Unhandled page exception: ${err.stack || err}`);
  });
  page.on("console", (msg) => {
    if (msg.type() === "error") {
      throw new Error(`Console error: ${msg.text()} ${JSON.stringify(msg.location())}`);
    }
  });

  await page.goto(`${git ? "/myst-git/git.html" : "/"}?` + query.toString());
  await page.waitForSelector(".cm-content");
  await page.evaluate((id) => (window.myst_editor[id].state.options.mode.value = "Both"), id);
  await expect(page.locator("#preview-wrapper")).toBeVisible();
  if (!("collab" in opts) || opts.collab !== "false") {
    await collaborationReady(page);
  }
  if (expectInitialText) {
    await expect(async () => {
      const text = await page.evaluate((id) => window.myst_editor[id].text, id);
      expect(text).not.toHaveLength(0);
    }).toPass();
  }
  return page;
};

const getCommentBtn = (page: Page, lineNumber: number) =>
  page.locator(`.cm-gutters > .cm-gutter:first-child > .cm-gutterElement:nth-child(${lineNumber + 1}) .comment-gutter-icon`);

const addComment = async (page: Page, lineNumber: number, text?: string) => {
  await getCommentBtn(page, lineNumber).click();
  if (text) {
    await page.locator(`[data-comment-line="${lineNumber}"] .cm-line`).first().fill(text);
  }
  await page.mouse.move(0, 0);
};

const openResolvedComments = async (page: Page) => {
  await page.hover(".more");
  await page.click('[name="resolved"]');
  await page.mouse.move(0, 0);
};

async function changeRoom(page: Page, room: string) {
  await page.evaluate(
    ({ id, room }) => {
      const collab = window.myst_editor[id].state.options.collaboration.value;
      window.myst_editor[id].state.options.collaboration.value = { ...collab, room };
    },
    { id, room },
  );
  await page.waitForSelector(".cm-content");
  await collaborationReady(page);
  await expect(async () => {
    const text = await page.evaluate((id) => window.myst_editor[id].main_editor?.state?.doc?.toString?.(), id);
    expect(text).not.toHaveLength(0);
  }).toPass();
}

const startInlineMode = async (page: Page) => {
  await page.getByTitle("Inline Preview").click();
  await expect(page.locator("#preview-wrapper")).toHaveCSS("display", "none");
};

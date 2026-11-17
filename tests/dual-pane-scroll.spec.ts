import { test, expect } from "@playwright/test";

for (const collaboration of [false, true]) {
  for (const scrollPastEnd of [false, true]) {
    test.describe(`Navigation with collaboration ${collaboration ? "enabled" : "disabled"} and scroll past last line ${scrollPastEnd ? "enabled" : "disabled"}`, () => {
      test.beforeEach(async ({ page }) => {
        await page.goto(`/?collab=${collaboration}&room=${crypto.randomUUID()}`);
        if (collaboration) {
          await page.waitForFunction(() => window.myst_editor?.demo?.state.collab.value?.editorReady.value);
        }
        await page.waitForSelector(".cm-content");
        await page.evaluate((enabled) => {
          const { userSettings } = window.myst_editor.demo.state;
          userSettings.value = userSettings.value.map((setting) => (setting.id === "scroll-past-end" ? { ...setting, enabled } : setting));
        }, scrollPastEnd);
      });

      if (scrollPastEnd) {
        test("Source text stays visible after scrolling to the end and keyboard navigation to the top", async ({ page }) => {
          await page.evaluate(() => (window.myst_editor.demo.state.options.mode.value = "Source"));
          const source = Array.from({ length: 150 }, (_, index) => `Line ${index + 1}: ${"Blog note text. ".repeat(20)}`).join("\n\n");
          await page.evaluate((source) => {
            const editor = window.myst_editor.demo.main_editor;
            editor.dispatch({ changes: { from: 0, to: editor.state.doc.length, insert: source }, selection: { anchor: source.length } });
            editor.focus();
          }, source);

          await page.locator(".myst-main-editor").evaluate((element) => element.scrollTo({ top: element.scrollHeight }));
          await expect(page.locator(".myst-main-editor .cm-line").filter({ hasText: /^Line 150:/ })).toBeInViewport();
          await page.keyboard.press("Control+Home");
          await expect(page.locator(".myst-main-editor .cm-line").filter({ hasText: /^Line 1:/ })).toBeInViewport();
        });
      }

      test("Source text stays visible after navigating from the table of contents and scrolling to the top", async ({ page }) => {
        await page.waitForSelector(".cm-content");
        await page.evaluate(() => (window.myst_editor.demo.state.options.mode.value = "Outline"));
        await expect(page.getByRole("heading", { name: "Table of Contents" })).toBeVisible();
        const source = Array.from({ length: 100 }, (_, index) => `## Heading ${index + 1}\n\n${"Blog note text. ".repeat(20)}\n`).join("\n");
        await page.evaluate((source) => {
          const editor = window.myst_editor.demo.main_editor;
          editor.dispatch({ changes: { from: 0, to: editor.state.doc.length, insert: source } });
        }, source);
        for (const heading of [50, 100]) {
          await page
            .getByTitle("Go to heading", { exact: true })
            .filter({ hasText: new RegExp(`^Heading ${heading}$`) })
            .click();
          await expect
            .poll(() =>
              page.evaluate(() => {
                const editor = window.myst_editor.demo.main_editor;
                return editor.state.doc.lineAt(editor.state.selection.main.head).text;
              }),
            )
            .toBe(`## Heading ${heading}`);
          await expect(page.locator(".myst-main-editor .cm-line").filter({ hasText: new RegExp(`^## Heading ${heading}$`) })).toBeInViewport();
          await page.locator(".myst-main-editor").evaluate((element) => element.scrollTo({ top: 0 }));
          await expect(page.locator(".myst-main-editor .cm-line").filter({ hasText: /^## Heading 1$/ })).toBeInViewport();
        }
      });

      test("Source text stays visible after editing, clicking the preview, and scrolling to the top", async ({ page }) => {
        await page.waitForSelector(".cm-content");
        await page.evaluate(() => (window.myst_editor.demo.state.options.mode.value = "Both"));
        await expect(page.locator("#preview-wrapper")).toBeVisible();
        const source = Array.from({ length: 150 }, (_, index) =>
          index % 2 ? "" : `Paragraph ${index + 1}: ${"Some text in a long blog note. ".repeat(10)}`,
        ).join("\n");
        await page.evaluate((source) => {
          const { main_editor: editor } = window.myst_editor.demo;
          editor.dispatch({ changes: { from: 0, to: editor.state.doc.length, insert: source } });
        }, source);
        await expect(page.locator(".myst-preview")).toContainText("Paragraph 79:");

        await page.evaluate(() => {
          const editor = window.myst_editor.demo.main_editor;
          const line = editor.state.doc.line(79);
          editor.focus();
          editor.dispatch({ selection: { anchor: line.to }, scrollIntoView: true });
        });
        await page.keyboard.type(".");
        await page.keyboard.press("Backspace");
        for (const line of [75, 149]) {
          await page
            .locator(".myst-preview [data-line-id]")
            .filter({ hasText: `Paragraph ${line}:` })
            .click({ position: { x: 10, y: 5 } });
          await expect
            .poll(() =>
              page.evaluate(() => {
                const editor = window.myst_editor.demo.main_editor;
                return editor.state.doc.lineAt(editor.state.selection.main.head).number;
              }),
            )
            .toBe(line);
        }
        await page.locator(".myst-main-editor").evaluate((element) => element.scrollTo({ top: 0 }));

        await expect(page.locator(".myst-main-editor .cm-line").filter({ hasText: "Paragraph 1:" })).toBeInViewport();
        expect(await page.evaluate(() => window.myst_editor.demo.main_editor.state.doc.toString())).toBe(source);
      });
    });
  }
}

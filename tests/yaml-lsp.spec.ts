import { expect, Page, test } from "@playwright/test";

type YamlTarget = {
  name: string;
  language: "markdown" | "yaml";
  wrap: (yaml: string) => string;
};

const targets: YamlTarget[] = [
  {
    name: "Markdown YAML code block",
    language: "markdown",
    wrap: (yaml) => `\`\`\`yaml\n${yaml}\n\`\`\``,
  },
  {
    name: "YAML file",
    language: "yaml",
    wrap: (yaml) => yaml,
  },
];

for (const target of targets) {
  test.describe(target.name, () => {
    test.beforeEach(async ({ page }) => {
      await openYamlEditor(page, target);
    });

    test("applies YAML syntax highlighting", async ({ page }) => {
      await setEditorText(page, target.wrap('name: "demo"\nport: 8080'));

      await expect(page.locator(".cm-content .tok-propertyName").filter({ hasText: "name" })).toBeVisible();
      await expect(page.locator(".cm-content .tok-string").filter({ hasText: '"demo"' })).toBeVisible();
    });

    test("publishes and clears schema diagnostics", async ({ page }) => {
      await setEditorText(page, target.wrap("name: demo\nport: wrong\nmode: invalid\nextra: true"));
      await expect.poll(() => diagnosticCount(page)).toBeGreaterThan(0);

      await setEditorText(page, target.wrap("name: demo\nport: 8080\nmode: development"));
      await expect(page.locator(".cm-lintRange")).toHaveCount(0);
    });

    test("shows schema documentation on hover", async ({ page }) => {
      await waitForLanguageServer(page, target);

      const text = target.wrap("name: demo\nport: 8080");
      await setEditorText(page, text);
      await expect(page.locator(".cm-lintRange")).toHaveCount(0);

      await hoverEditorPosition(page, text.indexOf("name") + 2);
      await expect(page.locator(".cm-tooltip-hover")).toContainText("Name of the application");
    });

    test("offers schema completions", async ({ page }) => {
      await waitForLanguageServer(page, target);

      const text = target.wrap("name: demo\nport: 8080\nmo");
      const cursor = text.lastIndexOf("mo") + 2;
      await setEditorText(page, text, cursor);

      // Document changes are sent to the language server after a 200 ms debounce.
      await page.waitForTimeout(300);
      await page.keyboard.press("Control+Space");

      await expect(page.locator(".cm-tooltip-autocomplete")).toBeVisible();
      await expect(page.locator(".cm-completionLabel").filter({ hasText: "mode" })).toBeVisible();
    });
  });
}

const openYamlEditor = async (page: Page, target: YamlTarget) => {
  page.on("pageerror", (error) => {
    throw new Error(`Unhandled page exception: ${error.stack || error}`);
  });
  page.on("console", (message) => {
    if (message.type() === "error") {
      throw new Error(`Console error: ${message.text()} ${JSON.stringify(message.location())}`);
    }
  });

  await page.route("**/yaml-lsp-test-schema.json", (route) =>
    route.fulfill({
      path: "tests/fixtures/yaml-schema.json",
      contentType: "application/json",
    }),
  );

  await page.goto("/?collab=false");
  await page.waitForSelector(".cm-content");

  if (target.language === "yaml") {
    await reconfigureEditor(page, "language", target.language);
  }
  await reconfigureEditor(page, "yamlSchema", await page.evaluate(() => `${window.location.origin}/yaml-lsp-test-schema.json`));
};

const reconfigureEditor = async (page: Page, option: "language" | "yamlSchema", value: string) => {
  await page.evaluate(
    ({ option, value }) => {
      const editor = (window as any).myst_editor.demo;
      (window as any).__editorBeforeYamlConfiguration = editor.main_editor;
      editor.state.options[option].value = value;
    },
    { option, value },
  );

  await page.waitForFunction(() => {
    const currentEditor = (window as any).myst_editor.demo.main_editor;
    return currentEditor !== (window as any).__editorBeforeYamlConfiguration;
  });
  await page.waitForSelector(".cm-content");
};

const setEditorText = async (page: Page, text: string, cursor = text.length) => {
  await page.evaluate(
    ({ text, cursor }) => {
      const view = (window as any).myst_editor.demo.main_editor;
      view.dispatch({
        changes: { from: 0, to: view.state.doc.length, insert: text },
        selection: { anchor: cursor },
      });
      view.focus();
    },
    { text, cursor },
  );
};

const diagnosticCount = (page: Page) => page.locator(".cm-lintRange").count();

const waitForLanguageServer = async (page: Page, target: YamlTarget) => {
  await setEditorText(page, target.wrap("name: demo\nport: wrong"));
  await expect.poll(() => diagnosticCount(page)).toBeGreaterThan(0);
};

const hoverEditorPosition = async (page: Page, position: number) => {
  const coordinates = await page.evaluate((position) => {
    const view = (window as any).myst_editor.demo.main_editor;
    const rect = view.coordsAtPos(position);
    return rect && { x: rect.left + 1, y: (rect.top + rect.bottom) / 2 };
  }, position);

  expect(coordinates).not.toBeNull();
  await page.mouse.move(coordinates!.x, coordinates!.y);
};

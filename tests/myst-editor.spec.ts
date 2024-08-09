import { ChangeSpec } from '@codemirror/state';
import { test, expect, Page, BrowserContext } from '@playwright/test';
import { EditorView } from 'codemirror';
import fs from "fs/promises"
import { YComments } from '../src/comments/ycomments';

declare global {
    interface Window {
        myst_editor: {
            text: string,
            main_editor: EditorView,
            ycomments: YComments
        };
    }
}

test.describe.parallel("With collaboration disabled", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("/");
        await page.waitForSelector(".cm-content");
    });

    test('Loads initial document', async ({ page }) => {
        const editorContent = await page.evaluate(() => window.myst_editor.text);
        expect(editorContent)
            .toMatch(/^# h1 is quite big/);
        expect(editorContent.indexOf(editorContent.slice(0, 20)))
            .toBe(editorContent.lastIndexOf(editorContent.slice(0, 20))); // Assert that content isn't duplicated
    });

    test('Caches async transforms', async ({ page }) => {
        await clearEditor(page);
        const todayDate = new Date().toLocaleString('en-GB', { timeZone: 'UTC' }).split(" ")[0];

        // |date| gets transformed for the first time
        await insertChangesAndCheckOutput(
            page,
            {
                from: 0,
                insert: "blah blah |date| blah blah",
            },
            (html) => expect(html).toContain(todayDate)
        );

        // Find out what the transform has returned
        const previewContent = await page.locator(".myst-preview").first().textContent() as string;
        const time = previewContent.split(" ")[3];

        await page.waitForTimeout(2000)

        // Assert that the next |date| returns the same time as the first one 
        await clearEditor(page);
        await insertChangesAndCheckOutput(
            page,
            {
                from: 0,
                insert: "blah blah |date| blah blah",
            },
            (html) => expect(html).toContain(time)
        );

        // But if we click the refresh button then the transform will be updated and output will be different
        await page.getByTitle("Refresh issue links").click();
        await insertChangesAndCheckOutput(
            page,
            null,
            (html) => expect(html).not.toContain(time)
        );

    });

    test.describe("Renders input", () => {
        [1, 2, 3].forEach(header => {
            test('Renders header: ' + header, async ({ page }) => {
                await clearEditor(page);
                await insertChangesAndCheckOutput(
                    page,
                    {
                        from: 0,
                        insert: "#".repeat(header) + " Some title",
                    },
                    (html) => expect(html).toContain(`<h${header}>Some title`)
                )
            });
        })

        test('Renders synchronous transforms', async ({ page }) => {
            await clearEditor(page);
            await insertChangesAndCheckOutput(
                page,
                {
                    from: 0,
                    insert: "blah blah @some-user blah  blah ",
                },
                (html) => expect(html).toContain(`<a href="https://github.com/some-user">`)
            )
        });

        test('Renders async transforms', async ({ page }) => {
            const today = new Date().toLocaleString('en-GB', { timeZone: 'UTC' });
            const [date, time] = today.split(" ");
            await clearEditor(page);
            await insertChangesAndCheckOutput(
                page,
                {
                    from: 0,
                    insert: "blah blah |date| blah blah",
                },
                (html) => expect(html).toContain(date)
            )
        });

        test('Renders custom roles', async ({ page }) => {
            await clearEditor(page);
            await insertChangesAndCheckOutput(
                page,
                {
                    from: 0,
                    insert: "blah blah {say}`something` blah blah",
                },
                (html) => expect(html).toContain(" says: 'something'")
            )
        });
    })
})

test.describe.parallel("With collaboration enabled", () => {
    test('Keeps the initial document if collaborative state is empty', async ({ context }) => {
        const collabOpts = { collab_server: "ws://localhost:4455", collab: "true", room: Date.now().toString() };
        const page = await openPageWithOpts(context, collabOpts);

        const editorContent = await page.evaluate(() => window.myst_editor.text);
        expect(editorContent)
            .toMatch(/^# h1 is quite big/);
        expect(editorContent.indexOf(editorContent.slice(0, 20)))
            .toBe(editorContent.lastIndexOf(editorContent.slice(0, 20))); // Assert that content isn't duplicated
    });

    test('Rejects the initial document if collaborative state is not empty', async ({ context }) => {
        const collabOpts = { collab_server: "ws://localhost:4455", collab: "true", room: Date.now().toString() };
        const pageA = await openPageWithOpts(context, collabOpts);

        // Initialize the document from pageA
        await clearEditor(pageA);
        await insertChangesAndCheckOutput(
            pageA,
            { from: 0, insert: "Some content" },
            (html) => expect(html).toContain("Some content")
        );
        await pageA.close();

        // Open the document as another user and verify that the initial content was ignored
        const pageB = await openPageWithOpts(context, collabOpts);
        const editorContent = await pageB.evaluate(() => window.myst_editor.text);

        expect(editorContent).not.toContain("# h1 is quite big");
        expect(editorContent).toContain("Some content");
        expect(editorContent.indexOf("Some content")).toBe(editorContent.lastIndexOf("Some content")); // Assert that content isn't duplicated
    });

    test('Synces document between peers', async ({ context }) => {
        const collabOpts = defaultCollabOpts();
        const pageA = await openPageWithOpts(context, collabOpts);

        // Initialize the document from pageA and add some content
        await clearEditor(pageA);
        await insertChangesAndCheckOutput(
            pageA,
            { from: 0, insert: "This is from pageA!" },
            (html) => expect(html).toContain("This is from pageA!")
        );

        // Open the document as another user and add some content
        const pageB = await openPageWithOpts(context, collabOpts);
        const currentText = await pageB.evaluate(() => window.myst_editor.text);
        expect(currentText).toBe("This is from pageA!");

        await insertChangesAndCheckOutput(
            pageB, {
            from: currentText.length,
            insert: "And this is from pageB!"
        }, (html) => {
            // Verify that both contents are present
            expect(html).toContain("This is from pageA!");
            expect(html).toContain("And this is from pageB!");
        })
    });

    test.describe("Comments", () => {
        test('Positions are synced', async ({ context }) => {
            const collabOpts = defaultCollabOpts();
            const pageA = await openPageWithOpts(context, collabOpts);
            const pageB = await openPageWithOpts(context, collabOpts);

            // Initialize the document from pageA and add some content
            await clearEditor(pageA);
            await insertChangesAndCheckOutput(
                pageA,
                { from: 0, insert: "Line1\nLine2\nLine3\nLine4" },
                (html) => expect(html).toContain("Line4")
            );

            await addComment(pageA, 2);

            // Confirm that comment was added
            expect(await pageA.locator(".comment-wrapper").count()).toBe(1);
            expect(await pageB.locator(".comment-wrapper").count()).toBe(1);

            // Remove the comment from pageB
            await pageB.locator(".comment-gutter-icon.comment-image").hover();
            await pageB.getByText("DELETE").click();

            // Verify that comment was removed on both peers
            expect(await pageB.locator(".comment-wrapper").count()).toBe(0);
            expect(await pageA.locator(".comment-wrapper").count()).toBe(0);
        });

        test('Can be dragged', async ({ context }) => {
            const collabOpts = defaultCollabOpts();
            const pageA = await openPageWithOpts(context, collabOpts);
            const pageB = await openPageWithOpts(context, collabOpts);

            // Initialize the document from pageA and add some content
            await clearEditor(pageA);
            await insertChangesAndCheckOutput(
                pageA,
                { from: 0, insert: "Line1\nLine2\nLine3\nLine4" },
                (html) => expect(html).toContain("Line4")
            );

            await addComment(pageA, 1);

            // Drag the comment
            const placesForCommentA = await pageA.locator(".comment-gutter-icon").all();
            const from = await pageA.locator(".comment-icon").boundingBox() as
                { x: number; y: number; width: number; height: number; };
            const to = await placesForCommentA[3].boundingBox() as
                { x: number; y: number; width: number; height: number; };
            await pageA.mouse.move(from.x + from.width / 2, from.y + from.height / 2);
            await pageA.mouse.down();
            await pageA.mouse.move(to.x + to.width / 2, to.y + to.height / 2, { steps: 100 });
            await pageA.mouse.up();

            expect(await pageA.locator(".comment-wrapper").count()).toBe(1);
            expect(await pageB.locator(".comment-wrapper").count()).toBe(1);

            // Confirm that the comment position has changed
            const newCommentPosition = await pageA
                .locator(".comment-wrapper")
                .first()
                .evaluate(e => Number(e.parentElement?.getAttribute("top")));
            expect(newCommentPosition - to.x).toBeLessThan(to.height);
        });


        test("Can be resolved", async ({ context }) => {
            const collabOpts = defaultCollabOpts();
            const pageA = await openPageWithOpts(context, collabOpts);
            const pageB = await openPageWithOpts(context, collabOpts);

            await addComment(pageA, 1);

            // Resolve the comment
            await pageA.locator(".comment-gutter-icon.comment-image").first().hover();
            await pageA.locator('#textarea_id-editor').getByText('RESOLVE').click();

            // Verify that it disappeared from the editor
            expect(await pageA.locator(".comment-wrapper").count()).toBe(0);

            // Verify that it appeared in the resolved comments
            await pageA.getByTitle("Resolved Comments").click();
            await pageA.waitForSelector(".resolved-comment");
            expect(await pageA.locator(".resolved-comment").count()).toBe(1);

            // Verify that the resolved comments are synced among peers
            await pageB.getByTitle("Resolved Comments").click();
            await pageB.waitForSelector(".resolved-comment");
            expect(await pageB.locator(".resolved-comment").count()).toBe(1);
        })

        test("Can be deleted", async ({ context }) => {
            const collabOpts = defaultCollabOpts();
            const pageA = await openPageWithOpts(context, collabOpts);
            const pageB = await openPageWithOpts(context, collabOpts);

            await addComment(pageA, 1);

            // Resolve the comment
            await pageA.locator(".comment-gutter-icon.comment-image").first().hover();
            await pageA.locator('#textarea_id-editor').getByText('DELETE').click();

            // Verify it is gone
            expect(await pageA.locator(".comment-wrapper").count()).toBe(0);
            expect(await pageB.locator(".comment-wrapper").count()).toBe(0);
        });

        test("Can be merged", async ({ context }) => {
            const collabOpts = defaultCollabOpts();
            const pageA = await openPageWithOpts(context, collabOpts);
            const pageB = await openPageWithOpts(context, collabOpts);

            // Initialize the document from pageA and add some content
            await clearEditor(pageA);
            await insertChangesAndCheckOutput(
                pageA,
                { from: 0, insert: "Line1\nLine2\nLine3\nLine4" },
                (html) => expect(html).toContain("Line4")
            );

            await addComment(pageA, 1, "1");
            await addComment(pageA, 3, "2");

            // Drag the comment
            const placesForCommentA = await pageA.locator(".comment-gutter-icon").all();
            const from = await placesForCommentA[1].boundingBox() as
                { x: number; y: number; width: number; height: number; };
            const to = await placesForCommentA[3].boundingBox() as
                { x: number; y: number; width: number; height: number; };
            await pageA.mouse.move(from.x + from.width / 2, from.y + from.height / 2);
            await pageA.mouse.down();
            await pageA.mouse.move(to.x + to.width / 2, to.y + to.height / 2, { steps: 100 });
            await pageA.mouse.up();

            expect(await pageA.locator(".comment-wrapper").count()).toBe(1);
            expect(await pageB.locator(".comment-wrapper").count()).toBe(1);

            // Confirm the comment contents are merged
            expect(await pageA.locator(".cm-comment-author-colored").first().innerHTML()).toContain("2");
            expect(await pageA.locator(".cm-comment-author-colored").last().innerHTML()).toContain("1");
            expect(await pageB.locator(".cm-comment-author-colored").first().innerHTML()).toContain("2");
            expect(await pageB.locator(".cm-comment-author-colored").last().innerHTML()).toContain("1");
        });
    })

    test.describe("Resolved Comments", () => {
        test("Can be restored", async ({ context }) => {
            const collabOpts = defaultCollabOpts();
            const pageA = await openPageWithOpts(context, collabOpts);
            const pageB = await openPageWithOpts(context, collabOpts);

            // Switch to resolved comments view
            await pageA.getByTitle("Resolved Comments").first().click();
            await pageB.getByTitle("Resolved Comments").first().click();

            await addComment(pageA, 1);

            // Resolve the comment
            await pageA.locator(".comment-gutter-icon.comment-image").first().hover();
            await pageA.locator('#textarea_id-editor').getByText('RESOLVE').click();

            // Restore the comment
            await pageA.locator(".myst-dropdown-toggle").first().hover();
            await pageA.locator(".myst-restore-btn").first().click();

            // Verify it is gone from resolved comments
            expect(await pageA.locator(".resolved-comment").count()).toBe(0);
            expect(await pageB.locator(".resolved-comment").count()).toBe(0);

            // Verify it appeared in the editor
            expect(await pageA.locator(".comment-wrapper").count()).toBe(1);
            expect(await pageB.locator(".comment-wrapper").count()).toBe(1);
        });

        test("Can be occupied and restored", async ({ context }) => {
            const collabOpts = defaultCollabOpts();
            const pageA = await openPageWithOpts(context, collabOpts);
            const pageB = await openPageWithOpts(context, collabOpts);

            // Switch to resolved comments view
            await pageA.getByTitle("Resolved Comments").first().click();
            await pageB.getByTitle("Resolved Comments").first().click();

            await addComment(pageA, 1, "1");

            // Resolve the comment
            await pageA.locator(".comment-gutter-icon.comment-image").first().hover();
            await pageA.locator('#textarea_id-editor').getByText('RESOLVE').click();

            await addComment(pageA, 1, "2");

            // Restore the comment
            await pageA.locator(".myst-dropdown-toggle").first().hover();
            await pageA.locator(".myst-restore-btn").first().click();

            // Verify it is gone from resolved comments
            expect(await pageA.locator(".resolved-comment").count()).toBe(0);
            expect(await pageB.locator(".resolved-comment").count()).toBe(0);

            // Verify it is in the editor and contains both lines
            expect(await pageA.locator(".cm-comment-author-colored").first().innerHTML()).toContain("2");
            expect(await pageA.locator(".cm-comment-author-colored").last().innerHTML()).toContain("1");
            expect(await pageB.locator(".cm-comment-author-colored").first().innerHTML()).toContain("2");
            expect(await pageB.locator(".cm-comment-author-colored").last().innerHTML()).toContain("1");
        });

        test("Can be orphaned and restored", async ({ context }) => {
            const collabOpts = defaultCollabOpts();
            const pageA = await openPageWithOpts(context, collabOpts);
            const pageB = await openPageWithOpts(context, collabOpts);

            // Switch to resolved comments view
            await pageA.getByTitle("Resolved Comments").first().click();
            await pageB.getByTitle("Resolved Comments").first().click();

            await addComment(pageA, 1);

            // Resolve the comment
            await pageA.locator(".comment-gutter-icon.comment-image").first().hover();
            await pageA.locator('#textarea_id-editor').getByText('RESOLVE').click();

            await clearEditor(pageA);

            // Restore comment
            await pageA.locator(".myst-dropdown-toggle").first().hover();
            await pageA.locator(".myst-restore-btn").first().click();

            // Verify it is at the end of the document
            expect(await pageA.locator(".comment-wrapper").count()).toBe(1);
            expect(await pageB.locator(".comment-wrapper").count()).toBe(1);
        });

        test("Can be deleted", async ({ context }) => {
            const collabOpts = defaultCollabOpts();
            const pageA = await openPageWithOpts(context, collabOpts);
            const pageB = await openPageWithOpts(context, collabOpts);

            // Switch to resolved comments view
            await pageA.getByTitle("Resolved Comments").first().click();
            await pageB.getByTitle("Resolved Comments").first().click();

            await addComment(pageA, 1);

            // Resolve the comment
            await pageA.locator(".comment-gutter-icon.comment-image").first().hover();
            await pageA.locator('#textarea_id-editor').getByText('RESOLVE').click();

            // Delete the comment
            await pageA.locator(".myst-dropdown-toggle").first().hover();
            await pageA.locator(".myst-delete-btn").first().click();

            // Verify it is gone
            expect(await pageA.locator(".resolved-comment").count()).toBe(0);
            expect(await pageB.locator(".resolved-comment").count()).toBe(0);
        });
    });

    test.describe("Suggestions", () => {
        test("Can be added without replacement", async ({ context }) => {
            const collabOpts = defaultCollabOpts();
            const pageA = await openPageWithOpts(context, collabOpts);
            const pageB = await openPageWithOpts(context, collabOpts);

            // Initialize the document from pageA and add some content
            await clearEditor(pageA);
            await insertChangesAndCheckOutput(
                pageA,
                { from: 0, insert: "Line1\nLine2\nLine3\nLine4" },
                (html) => expect(html).toContain("Line4")
            );

            await addComment(pageA, 1, "|Line2|")

            // Check if the phrase is highlighted
            expect(await pageA.locator(".cm-comment-author-colored").first().innerText()).toContain("|Line2|");
            expect(await pageA.locator(".cm-suggestion").first().innerHTML()).toContain("Line2");
            expect(await pageB.locator(".cm-suggestion").first().innerHTML()).toContain("Line2");
        });

        test("Can be added with replacement", async ({ context }) => {
            const collabOpts = defaultCollabOpts();
            const pageA = await openPageWithOpts(context, collabOpts);
            const pageB = await openPageWithOpts(context, collabOpts);

            // Initialize the document from pageA and add some content
            await clearEditor(pageA);
            await insertChangesAndCheckOutput(
                pageA,
                { from: 0, insert: "Line1\nLine2\nLine3\nLine4" },
                (html) => expect(html).toContain("Line4")
            );

            await addComment(pageA, 1, "|Line2 -> 2Line|")

            // Check if the suggestion shows up
            expect(await pageA.locator(".cm-comment-author-colored").first().innerText()).toContain("|Line2 -> 2Line|");
            expect(await pageA.locator(".replaced").first().innerHTML()).toContain("Line2");
            expect(await pageA.locator(".cm-replacement").first().innerHTML()).toContain("2Line");
            expect(await pageB.locator(".replaced").first().innerHTML()).toContain("Line2");
            expect(await pageB.locator(".cm-replacement").first().innerHTML()).toContain("2Line");
        });

        test("Can be applied", async ({ context }) => {
            const collabOpts = defaultCollabOpts();
            const pageA = await openPageWithOpts(context, collabOpts);
            const pageB = await openPageWithOpts(context, collabOpts);

            // Initialize the document from pageA and add some content
            await clearEditor(pageA);
            await insertChangesAndCheckOutput(
                pageA,
                { from: 0, insert: "Line1\nLine2\nLine3\nLine4" },
                (html) => expect(html).toContain("Line4")
            );

            await addComment(pageA, 1, "|Line2 -> 2Line|")

            // Apply suggestion
            expect(await pageA.locator(".cm-comment-author-colored").first().innerText()).toContain("|Line2 -> 2Line|");
            await pageA.locator(".cm-replacement").first().click();

            // Check if the text changed
            const currentTextA = await pageA.evaluate(() => window.myst_editor.text);
            expect(currentTextA).toContain("2Line");
            const currentTextB = await pageB.evaluate(() => window.myst_editor.text);
            expect(currentTextB).toContain("2Line");
        });
    });
})

test("dist/MystEditor.js exports src/MystEditor.js module", async () => {
    const module = await fs.readFile("dist/MystEditor.js");
    expect(module.length)
        .toBeGreaterThan(3000);

    const moduleContent = module.toString();

    ["spellcheckOpts",
        "highlights",
        "collaboration",
        "ycomments",
        "commentsEnabled"]
        .forEach(s => expect(moduleContent).toContain(s))
})

///////////////////////// UTILITY FUNCTIONS /////////////////////////

const insertToMainEditor = (page: Page, changes: ChangeSpec | null): Promise<void> =>  /** @ts-ignore */
    page.evaluate((changes) => window.myst_editor.main_editor.dispatch({ changes }), changes);

const clearEditor = async (page: Page) => {
    const currentText = await page.evaluate(() => window.myst_editor.text);
    await insertToMainEditor(page, {
        from: 0,
        to: currentText.length,
        insert: "",
    })
}

const defaultCollabOpts = () => ({ collab_server: "ws://localhost:4455", collab: "true", room: Date.now().toString() });

const insertChangesAndCheckOutput = async (page: Page, changes: ChangeSpec | null, check: (html: string) => void | Promise<void>) => {
    await insertToMainEditor(page, changes);
    const preview = await page.locator(".myst-preview").first().innerHTML();
    await check(preview);
}

const openPageWithOpts = async (context: BrowserContext, opts: object) => {
    let query = new URLSearchParams();
    Object.entries(opts).forEach(([k, v]) => query.set(k, v));
    let page = await context.newPage();
    await page.goto("/?" + query.toString());
    await page.waitForSelector(".cm-content");
    return page;
}

const addComment = async (page: Page, lineNumber: number, text?: string) => {
    const placesForComment = await page.locator(".comment-gutter-icon").all();
    await placesForComment[lineNumber].hover();
    await placesForComment[lineNumber].click();
    if (text) {
        await page.locator(".cm-comment-author-colored").last().fill(text);
        // for some reason yjs does not pick up the changes made above, so we need to add them below
        await page.evaluate(({lineNumber, text}) => {
            const ycomments = window.myst_editor.ycomments
            const commentId = ycomments.findCommentOn(lineNumber + 1)?.commentId;
            ycomments.getTextForComment(commentId).insert(0, text);
            ycomments.syncSuggestions(commentId);
        }, {lineNumber, text});
    }
}
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import * as Y from "yjs";
import { LeveldbPersistence } from "y-leveldb";

import { deleteLegacyComments } from "./delete-legacy-comments.js";
import { migrateDocument } from "./migrate-comments.js";

const addLegacyThread = (ydoc, legacyId, text, authors) => {
  ydoc.getText(`comments/${legacyId}`).insert(0, text);
  const lineAuthors = ydoc.getArray(`${legacyId}/commentLineAuthors`);
  for (const author of authors) {
    const line = new Y.Map();
    line.set("author", author);
    lineAuthors.push([line]);
  }
};

const absoluteAnchor = (ydoc, anchor) => ({
  from: Y.createAbsolutePositionFromRelativePosition(Y.decodeRelativePosition(anchor.fromRelative), ydoc).index,
  to: Y.createAbsolutePositionFromRelativePosition(Y.decodeRelativePosition(anchor.toRelative), ydoc).index,
});

test("migrates a legacy thread to a new whole-line comment exactly once", () => {
  const ydoc = new Y.Doc();
  const ytext = ydoc.getText("codemirror");
  ytext.insert(0, "First line\nCommented line\nLast line");

  const legacyId = "comment-legacy-active";
  addLegacyThread(ydoc, legacyId, "First message\ncontinued\nReply", [
    { name: "Alice", color: "#f00" },
    { name: "Alice", color: "#f00" },
    { name: "Bob", color: "#00f" },
  ]);
  ydoc.getMap().set(legacyId, "2");

  assert.deepEqual(migrateDocument(ydoc), { found: 1, migrated: 1, skipped: 0, errors: [] });

  const reviews = ydoc.getMap("live-reviews");
  assert.equal(reviews.size, 1);
  const review = [...reviews.values()][0];
  assert.notEqual(review.id, legacyId);
  assert.match(review.id, /^[0-9a-f-]{36}$/);
  assert.equal(review.legacy, legacyId);
  assert.equal(typeof review.createdAt, "number");
  assert.equal(review.text, "First message\ncontinued");
  assert.deepEqual(review.author, { name: "Alice", color: "#f00", avatarUrl: undefined, userUrl: undefined });
  assert.equal(review.comments.length, 1);
  assert.equal(review.comments[0].text, "Reply");
  assert.equal(review.comments[0].author.name, "Bob");
  assert.equal(review.comments[0].legacy, legacyId);
  assert.equal(review.comments[0].createdAt, review.createdAt);

  const { from, to } = absoluteAnchor(ydoc, review.anchors[0]);
  assert.equal(ytext.toString().slice(from, to), "Commented line");

  assert.deepEqual(migrateDocument(ydoc), { found: 1, migrated: 0, skipped: 1, errors: [] });
  assert.equal(reviews.size, 1);
  assert.equal(ydoc.getMap().get(legacyId), "2");
  assert.equal(ydoc.getText(`comments/${legacyId}`).toString(), "First message\ncontinued\nReply");
});

test("preserves legacy resolution metadata", () => {
  const ydoc = new Y.Doc();
  const ytext = ydoc.getText("codemirror");
  ytext.insert(0, "First line\nResolved line\nLast line");

  const legacyId = "comment-legacy-resolved";
  addLegacyThread(ydoc, legacyId, "Resolved comment", [{ name: "Alice", color: "#f00" }]);
  ydoc.getMap("resolved-comments").set(
    legacyId,
    JSON.stringify({
      resolvedLine: "Resolved line",
      lineNumber: 2,
      resolvedBy: { name: "Bob", color: "#00f" },
      resolvedDate: 123456789,
      pos: 11,
    }),
  );

  assert.deepEqual(migrateDocument(ydoc), { found: 1, migrated: 1, skipped: 0, errors: [] });
  const review = [...ydoc.getMap("live-reviews").values()][0];
  assert.equal(review.legacy, legacyId);
  assert.equal(review.resolved, true);
  assert.equal(review.resolvedAt, 123456789);
  assert.equal(review.resolvedBy.name, "Bob");
  assert.deepEqual(review.resolvedAnchors, [{ id: review.anchors[0].id, fromLine: 2, toLine: 2, line: "Resolved line" }]);

  const { from, to } = absoluteAnchor(ydoc, review.anchors[0]);
  assert.equal(ytext.toString().slice(from, to), "Resolved line");
});

test("reports details for a legacy comment that cannot be migrated", () => {
  const ydoc = new Y.Doc();
  const legacyId = "comment-without-document-text";
  addLegacyThread(ydoc, legacyId, "Comment that stays in legacy storage", [{ name: "Alice", color: "#f00" }]);
  ydoc.getMap().set(legacyId, "2");

  const migration = migrateDocument(ydoc);

  assert.deepEqual({ found: migration.found, migrated: migration.migrated, skipped: migration.skipped }, { found: 1, migrated: 0, skipped: 0 });
  assert.deepEqual(migration.errors, [
    {
      legacyId,
      author: { name: "Alice", color: "#f00", avatarUrl: undefined, userUrl: undefined },
      text: "Comment that stays in legacy storage",
      line: 2,
      reason: "document is empty",
    },
  ]);
  assert.equal(ydoc.getMap().get(legacyId), "2");
  assert.equal(ydoc.getText(`comments/${legacyId}`).toString(), "Comment that stays in legacy storage");
});

test("deletes only legacy comments that have migrated reviews", () => {
  const ydoc = new Y.Doc();
  ydoc.getText("codemirror").insert(0, "First line\nSecond line\nThird line");

  addLegacyThread(ydoc, "legacy-active", "Active comment", [{ name: "Alice" }]);
  ydoc.getMap().set("legacy-active", "2");

  addLegacyThread(ydoc, "legacy-resolved", "Resolved comment", [{ name: "Alice" }]);
  ydoc
    .getMap("resolved-comments")
    .set("legacy-resolved", JSON.stringify({ resolvedLine: "Third line", lineNumber: 3, resolvedBy: { name: "Bob" }, resolvedDate: 123 }));

  assert.equal(migrateDocument(ydoc).migrated, 2);

  addLegacyThread(ydoc, "legacy-not-migrated", "Do not delete", [{ name: "Alice" }]);
  ydoc.getMap().set("legacy-not-migrated", "1");

  assert.deepEqual(deleteLegacyComments(ydoc), {
    found: 3,
    deleted: ["legacy-active", "legacy-resolved"],
    skipped: ["legacy-not-migrated"],
  });

  assert.equal(ydoc.getMap().has("legacy-active"), false);
  assert.equal(ydoc.getMap("resolved-comments").has("legacy-resolved"), false);
  assert.equal(ydoc.getText("comments/legacy-active").length, 0);
  assert.equal(ydoc.getArray("legacy-active/commentLineAuthors").length, 0);

  assert.equal(ydoc.getMap().get("legacy-not-migrated"), "1");
  assert.equal(ydoc.getText("comments/legacy-not-migrated").toString(), "Do not delete");
  assert.equal(ydoc.getMap("live-reviews").size, 2);

  assert.deepEqual(deleteLegacyComments(ydoc, { deleteAll: true }), {
    found: 1,
    deleted: ["legacy-not-migrated"],
    skipped: [],
  });
  assert.equal(ydoc.getMap().has("legacy-not-migrated"), false);
  assert.equal(ydoc.getText("comments/legacy-not-migrated").length, 0);
});

test("cleanup CLI previews with --dry-run and persists changes without flags", async (t) => {
  const persistenceDir = await mkdtemp(join(tmpdir(), "myst-comment-cleanup-"));
  t.after(() => rm(persistenceDir, { recursive: true, force: true }));

  const room = "repo/main/README.md";
  const legacyId = "legacy-comment";
  const status = { text: true, comments: true, reviews: true };
  const ydoc = new Y.Doc();
  ydoc.getText("codemirror").insert(0, "Document text");
  addLegacyThread(ydoc, legacyId, "Legacy comment", [{ name: "Alice" }]);
  ydoc.getMap().set(legacyId, "1");
  migrateDocument(ydoc);

  const persistence = new LeveldbPersistence(persistenceDir);
  try {
    await persistence.storeUpdate(room, Y.encodeStateAsUpdate(ydoc));
    await persistence.setMeta("repo/main", "docsWithChanges", { [room]: status });
  } finally {
    ydoc.destroy();
    await persistence.destroy();
  }

  const runCleanup = (args) => {
    const result = spawnSync(process.execPath, [fileURLToPath(new URL("./delete-legacy-comments.js", import.meta.url)), ...args], {
      env: { ...process.env, YPERSISTENCE: persistenceDir },
      encoding: "utf8",
      timeout: 10000,
    });
    assert.ifError(result.error);
    assert.equal(result.status, 0, result.stderr);
    return result.stdout
      .trim()
      .split("\n")
      .map((line) => JSON.parse(line));
  };

  const assertStoredState = async (hasLegacyComment) => {
    const database = new LeveldbPersistence(persistenceDir);
    let doc;
    try {
      doc = await database.getYDoc(room);
      assert.equal(doc.getMap().has(legacyId), hasLegacyComment);
      assert.equal(doc.getText(`comments/${legacyId}`).toString(), hasLegacyComment ? "Legacy comment" : "");
      assert.equal(doc.getArray(`${legacyId}/commentLineAuthors`).length, hasLegacyComment ? 1 : 0);
      assert.equal(doc.getText("codemirror").toString(), "Document text");
      assert.equal(doc.getMap("live-reviews").size, 1);
      assert.deepEqual(await database.getMeta("repo/main", "docsWithChanges"), {
        [room]: hasLegacyComment ? status : { text: true, reviews: true },
      });
    } finally {
      doc?.destroy();
      await database.destroy();
    }
  };

  const preview = runCleanup(["--dry-run"]);
  assert.equal(preview[0].dryRun, true);
  assert.deepEqual(preview[0].deleted, [legacyId]);
  assert.deepEqual(preview.at(-1), {
    dryRun: true,
    deleteAll: false,
    totals: { rooms: 1, changedRooms: 1, found: 1, deleted: 1, skipped: 0 },
  });
  await assertStoredState(true);

  const applied = runCleanup([]);
  assert.equal(applied[0].dryRun, false);
  assert.deepEqual(applied[0].deleted, [legacyId]);
  assert.deepEqual(applied.at(-1), { ...preview.at(-1), dryRun: false });
  await assertStoredState(false);
});

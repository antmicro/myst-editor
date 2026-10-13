#!/usr/bin/env node

import { randomUUID } from "node:crypto";
import { pathToFileURL } from "node:url";
import * as Y from "yjs";
import { LeveldbPersistence } from "y-leveldb";

const migrationOrigin = "legacy-comment-migration";
const docsWithChangesKey = "docsWithChanges";

const markRoomWithReviews = async (persistence, room) => {
  if (!room.includes("/")) return;
  const prefix = room.split("/").slice(0, 2).join("/");
  const statuses = (await persistence.getMeta(prefix, docsWithChangesKey)) ?? {};
  await persistence.setMeta(prefix, docsWithChangesKey, {
    ...statuses,
    [room]: { ...(statuses[room] ?? {}), reviews: true },
  });
};

const normalizeUser = (user) => {
  if (!user?.name) return { name: "Unknown" };
  const { avatar, url, ...normalized } = user;
  return {
    ...normalized,
    avatarUrl: normalized.avatarUrl ?? avatar,
    userUrl: normalized.userUrl ?? url,
  };
};

const commentMessages = (ydoc, commentId) => {
  const text = ydoc.getText(`comments/${commentId}`).toString();
  const authors = ydoc.getArray(`${commentId}/commentLineAuthors`);
  const messages = [];

  for (const [index, line] of text.split("\n").entries()) {
    const author = normalizeUser(authors.get(index)?.get("author"));
    const previous = messages.at(-1);
    if (previous?.author.name === author.name) {
      previous.text += `\n${line}`;
    } else {
      messages.push({ author, text: line });
    }
  }

  return messages;
};

const legacyCommentDetails = (ydoc, legacyId, lineNumber) => {
  const messages = commentMessages(ydoc, legacyId);
  const parsedLine = Number.parseInt(lineNumber, 10);
  return {
    legacyId,
    author: messages[0]?.author ?? { name: "Unknown" },
    text: ydoc.getText(`comments/${legacyId}`).toString(),
    line: Number.isNaN(parsedLine) ? null : parsedLine,
  };
};

const wholeLineRange = (text, requestedLine) => {
  if (text.length === 0) return null;

  const starts = [0];
  for (let position = text.indexOf("\n"); position !== -1; position = text.indexOf("\n", position + 1)) {
    starts.push(position + 1);
  }

  const line = Math.max(1, Math.min(starts.length, Number.parseInt(requestedLine, 10) || 1));
  const from = starts[line - 1];
  const nextLineFrom = starts[line];
  const to = nextLineFrom === undefined ? text.length : nextLineFrom - 1;

  if (from < to) return { from, to, line };
  // Empty lines are represented by their adjacent line break so the new
  // range-based comment remains visible.
  if (nextLineFrom !== undefined) return { from, to: nextLineFrom, line };
  return { from: Math.max(0, from - 1), to: from, line };
};

const sharedAnchor = (ytext, { id, from, to }) => ({
  id,
  fromRelative: Y.encodeRelativePosition(Y.createRelativePositionFromTypeIndex(ytext, from, 1)),
  toRelative: Y.encodeRelativePosition(Y.createRelativePositionFromTypeIndex(ytext, to, -1)),
});

const migratedReview = (ydoc, ytext, legacyId, lineNumber, resolved) => {
  const messages = commentMessages(ydoc, legacyId);
  const primary = messages[0] ?? { author: { name: "Unknown" }, text: "" };
  const id = randomUUID();
  const anchorId = randomUUID();
  const createdAt = Date.now();
  const lineRange = wholeLineRange(ytext.toString(), resolved?.lineNumber ?? lineNumber);
  if (!lineRange && !resolved) return null;

  const orphanPosition = Math.max(0, Math.min(ytext.length, Number.parseInt(resolved?.pos, 10) || 0));
  const anchor = resolved?.orphaned
    ? { id: anchorId, from: orphanPosition, to: orphanPosition }
    : { id: anchorId, from: lineRange?.from ?? orphanPosition, to: lineRange?.to ?? orphanPosition };

  return {
    id,
    kind: "comment",
    type: null,
    text: primary.text,
    comments: messages.slice(1).map((message) => ({
      id: randomUUID(),
      ...message,
      createdAt,
      legacy: legacyId,
    })),
    draft: false,
    resolved: Boolean(resolved),
    resolution: null,
    resolvedAt: resolved?.resolvedDate ?? null,
    resolvedBy: resolved?.resolvedBy ? normalizeUser(resolved.resolvedBy) : null,
    resolvedAnchors: resolved
      ? [
          {
            id: anchorId,
            fromLine: resolved.lineNumber ?? lineRange?.line ?? 1,
            toLine: resolved.lineNumber ?? lineRange?.line ?? 1,
            line: resolved.resolvedLine ?? "",
          },
        ]
      : [],
    replacementId: null,
    legacy: legacyId,
    anchors: [sharedAnchor(ytext, anchor)],
    author: primary.author,
    createdAt,
  };
};

export const migrateDocument = (ydoc) => {
  // YComments.dataPath was undefined, so Yjs used the default empty-string
  // map name for legacy positions.
  const positions = ydoc.getMap();
  const resolvedComments = ydoc.getMap("resolved-comments");
  const yreviews = ydoc.getMap("live-reviews");
  const ytext = ydoc.getText("codemirror");
  const legacyComments = new Map([...positions].map(([legacyId, lineNumber]) => [legacyId, { lineNumber }]));
  const legacyIds = new Set([...positions.keys(), ...resolvedComments.keys()]);
  const errors = [];

  for (const [legacyId, value] of resolvedComments) {
    try {
      legacyComments.set(legacyId, { resolved: typeof value === "string" ? JSON.parse(value) : value });
    } catch {
      errors.push({ ...legacyCommentDetails(ydoc, legacyId, positions.get(legacyId)), reason: "malformed resolved comment" });
    }
  }

  const migratedLegacyIds = new Set([...yreviews.values()].map((review) => review?.legacy).filter((legacy) => legacy != null));
  const reviews = [];
  let skipped = 0;

  for (const [legacyId, { lineNumber, resolved }] of legacyComments) {
    // A matching legacy ID means this comment was migrated previously. Do not
    // create a duplicate; the old data remains until the cleanup job removes it.
    if (migratedLegacyIds.has(legacyId)) {
      skipped++;
      continue;
    }
    const review = migratedReview(ydoc, ytext, legacyId, lineNumber, resolved);
    if (review) reviews.push(review);
    // Without an anchorable document position, the comment cannot be migrated
    // safely, so leave its legacy data untouched and report an error.
    else errors.push({ ...legacyCommentDetails(ydoc, legacyId, resolved?.lineNumber ?? lineNumber), reason: "document is empty" });
  }

  if (reviews.length > 0) {
    ydoc.transact(() => {
      for (const review of reviews) yreviews.set(review.id, review);
    }, migrationOrigin);
  }

  return {
    found: legacyIds.size,
    migrated: reviews.length,
    skipped,
    errors,
  };
};

const argumentValue = (name) => {
  const inline = process.argv.find((argument) => argument.startsWith(`${name}=`));
  if (inline) return inline.slice(name.length + 1);
  const index = process.argv.indexOf(name);
  return index === -1 ? undefined : process.argv[index + 1];
};

const main = async () => {
  const persistenceDir = process.env.YPERSISTENCE;
  if (!persistenceDir) throw new Error("YPERSISTENCE must point to the collaboration server's LevelDB directory.");

  const dryRun = process.argv.includes("--dry-run");
  const selectedRoom = argumentValue("--room");
  const persistence = new LeveldbPersistence(persistenceDir);
  const allRooms = await persistence.getAllDocNames();
  const rooms = selectedRoom ? allRooms.filter((room) => room === selectedRoom) : allRooms;
  const totals = { rooms: rooms.length, changedRooms: 0, found: 0, migrated: 0, skipped: 0, errors: 0 };

  if (selectedRoom && rooms.length === 0) throw new Error(`Room not found: ${selectedRoom}`);

  for (const room of rooms) {
    const ydoc = await persistence.getYDoc(room);
    const stateVector = Y.encodeStateVector(ydoc);
    const result = migrateDocument(ydoc);

    totals.found += result.found;
    totals.migrated += result.migrated;
    totals.skipped += result.skipped;
    totals.errors += result.errors.length;
    if (result.migrated > 0) totals.changedRooms++;

    if (!dryRun && result.migrated > 0) {
      await persistence.storeUpdate(room, Y.encodeStateAsUpdate(ydoc, stateVector));
      await markRoomWithReviews(persistence, room);
    }

    if (result.found > 0 || result.errors.length > 0) {
      console.log(JSON.stringify({ room, dryRun, ...result }));
    }
    ydoc.destroy();
  }

  console.log(JSON.stringify({ dryRun, totals }));
  process.exit(totals.errors > 0 ? 1 : 0);
};

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().catch((error) => {
    console.error(error);
    process.exit(1);
  });
}

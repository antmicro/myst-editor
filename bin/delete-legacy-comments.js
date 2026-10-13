#!/usr/bin/env node

import { pathToFileURL } from "node:url";
import * as Y from "yjs";
import { LeveldbPersistence } from "y-leveldb";

const docsWithChangesKey = "docsWithChanges";

const updateRoomStatus = async (persistence, room, hasLegacyComments) => {
  if (!room.includes("/")) return;

  const prefix = room.split("/").slice(0, 2).join("/");
  const statuses = (await persistence.getMeta(prefix, docsWithChangesKey)) ?? {};
  const currentStatus = statuses[room];
  if (!currentStatus) return;
  if (hasLegacyComments || !("comments" in currentStatus)) return;

  const roomStatus = { ...currentStatus };
  delete roomStatus.comments;

  const updatedStatuses = { ...statuses };
  if (Object.keys(roomStatus).length > 0) updatedStatuses[room] = roomStatus;
  else delete updatedStatuses[room];

  await persistence.setMeta(prefix, docsWithChangesKey, updatedStatuses);
};

export const deleteLegacyComments = (ydoc, { deleteAll = false } = {}) => {
  const positions = ydoc.getMap();
  const resolvedComments = ydoc.getMap("resolved-comments");
  const reviews = ydoc.getMap("live-reviews");
  const legacyIds = new Set([...positions.keys(), ...resolvedComments.keys()]);
  const migratedLegacyIds = new Set([...reviews.values()].map((review) => review?.legacy).filter((legacy) => legacy != null));
  const deleted = [];
  const skipped = [];

  ydoc.transact(() => {
    for (const legacyId of legacyIds) {
      // Only delete old data when a new review points back to the same legacy
      // ID. Otherwise migration may not have run or persisted, so keep the old
      // comment and report it as skipped unless deletion of all legacy comments
      // was explicitly requested.
      if (!deleteAll && !migratedLegacyIds.has(legacyId)) {
        skipped.push(legacyId);
        continue;
      }

      positions.delete(legacyId);
      resolvedComments.delete(legacyId);

      const text = ydoc.getText(`comments/${legacyId}`);
      if (text.length > 0) text.delete(0, text.length);

      const authors = ydoc.getArray(`${legacyId}/commentLineAuthors`);
      if (authors.length > 0) authors.delete(0, authors.length);

      deleted.push(legacyId);
    }
  }, "legacy-comment-cleanup");

  return { found: legacyIds.size, deleted, skipped };
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
  const deleteAll = process.argv.includes("--delete-all");
  const selectedRoom = argumentValue("--room");
  const persistence = new LeveldbPersistence(persistenceDir);

  try {
    const allRooms = await persistence.getAllDocNames();
    const rooms = selectedRoom ? allRooms.filter((room) => room === selectedRoom) : allRooms;
    const totals = { rooms: rooms.length, changedRooms: 0, found: 0, deleted: 0, skipped: 0 };

    if (selectedRoom && rooms.length === 0) throw new Error(`Room not found: ${selectedRoom}`);

    for (const room of rooms) {
      const ydoc = await persistence.getYDoc(room);
      const stateVector = Y.encodeStateVector(ydoc);
      const result = deleteLegacyComments(ydoc, { deleteAll });

      totals.found += result.found;
      totals.deleted += result.deleted.length;
      totals.skipped += result.skipped.length;
      if (result.deleted.length > 0) totals.changedRooms++;

      if (!dryRun && result.deleted.length > 0) {
        await persistence.storeUpdate(room, Y.encodeStateAsUpdate(ydoc, stateVector));
        await updateRoomStatus(persistence, room, ydoc.getMap().size > 0);
      }

      if (result.found > 0) console.log(JSON.stringify({ room, dryRun, deleteAll, ...result }));
      ydoc.destroy();
    }

    console.log(JSON.stringify({ dryRun, deleteAll, totals }));
    if (totals.skipped > 0) process.exitCode = 1;
  } finally {
    await persistence.destroy();
  }
};

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
}

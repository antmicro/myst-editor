// https://github.com/yjs/y-codemirror.next/blob/637183e997f2ff6ba7f6bf737307f049c93dee12/src/y-sync.js#L100
// I placed this here so that we can customize syncing yjs updates with CodeMirror and mark remote and local updates.

import { Annotation } from "@codemirror/state";
import { EditorView, ViewPlugin, ViewUpdate } from "@codemirror/view";
import { ySyncFacet } from "y-codemirror.next";
import { Transaction } from "yjs";

const ySyncAnnotation = Annotation.define();
export const yRemoteAnnotation = Annotation.define();
export const yHistoryAnnotation = Annotation.define();

/**
 * @extends {import("@codemirror/view").PluginValue}
 */
class YSyncPluginValue {
  /**
   * @param {EditorView} view
   */
  constructor(view) {
    this.view = view;
    this.conf = view.state.facet(ySyncFacet);
    this._observer = (event, /** @type {Transaction} */ tr) => {
      if (tr.origin !== this.conf) {
        const annotations = [ySyncAnnotation.of(this.conf)];
        if (!tr.local) {
          // remote change
          annotations.push(yRemoteAnnotation.of(true));
        } else {
          // undo/redo change
          annotations.push(yHistoryAnnotation.of(true));
        }

        const delta = event.delta;
        const changes = [];
        let pos = 0;
        for (let i = 0; i < delta.length; i++) {
          const d = delta[i];
          if (d.insert != null) {
            changes.push({ from: pos, to: pos, insert: d.insert });
          } else if (d.delete != null) {
            changes.push({ from: pos, to: pos + d.delete, insert: "" });
            pos += d.delete;
          } else {
            pos += d.retain;
          }
        }
        view.dispatch({ changes, annotations });
      }
    };
    this._ytext = this.conf.ytext;
    this._ytext.observe(this._observer);
  }

  /**
   * @param {ViewUpdate} update
   */
  update(update) {
    if (!update.docChanged || (update.transactions.length > 0 && update.transactions[0].annotation(ySyncAnnotation) === this.conf)) {
      return;
    }
    const ytext = this.conf.ytext;
    ytext.doc.transact(() => {
      /**
       * This variable adjusts the fromA position to the current position in the Y.Text type.
       */
      let adj = 0;
      update.changes.iterChanges((fromA, toA, fromB, toB, insert) => {
        const insertText = insert.sliceString(0, insert.length, "\n");
        if (fromA !== toA) {
          ytext.delete(fromA + adj, toA - fromA);
        }
        if (insertText.length > 0) {
          ytext.insert(fromA + adj, insertText);
        }
        adj += insertText.length - (toA - fromA);
      });
    }, this.conf);
  }

  destroy() {
    this._ytext.unobserve(this._observer);
  }
}

export const ySync = ViewPlugin.fromClass(YSyncPluginValue);

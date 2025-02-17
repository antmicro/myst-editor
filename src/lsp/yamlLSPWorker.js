import {
  BrowserMessageReader,
  BrowserMessageWriter,
  CompletionRequest,
  createProtocolConnection,
  DidChangeTextDocumentNotification,
  DidOpenTextDocumentNotification,
  HoverRequest,
  InitializeRequest,
  TextDocumentSyncKind,
} from "vscode-languageserver-protocol/browser";
import { getLanguageService } from "yaml-language-server/lib/esm/languageservice/yamlLanguageService";
import { TextDocument } from "vscode-languageserver-textdocument";

const yamlService = getLanguageService({
  async schemaRequestService(uri) {
    console.log(uri);
    const res = await fetch(uri);
    return res.text();
  },
});

const docs = {};

const worker = self;
const conn = createProtocolConnection(new BrowserMessageReader(worker), new BrowserMessageWriter(worker));
conn.onRequest(InitializeRequest.type, () => {
  return {
    capabilities: {
      textDocumentSync: TextDocumentSyncKind.Incremental,
      completionProvider: true,
      hoverProvider: true,
    },
  };
});
conn.onNotification(DidOpenTextDocumentNotification.type, ({ textDocument: { uri, languageId, version, text } }) => {
  docs[uri] = TextDocument.create(uri, languageId, version, text);
});
conn.onNotification(DidChangeTextDocumentNotification.type, ({ textDocument, contentChanges }) => {
  const doc = docs[textDocument.uri];
  if (doc) {
    docs[textDocument.uri] = TextDocument.update(doc, contentChanges, textDocument.version || 0);
  }
});
conn.onRequest(CompletionRequest.type, async ({ textDocument, position }) => {
  const doc = docs[textDocument.uri];
  if (!doc) return null;

  return yamlService.doComplete(doc, position);
});
conn.onRequest(HoverRequest.type, async ({ textDocument, position }) => {
  const doc = docs[textDocument.uri];
  if (!doc) return null;
  return yamlService.doHover(doc, position);
});
conn.listen();

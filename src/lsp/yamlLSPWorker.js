import {
  BrowserMessageReader,
  BrowserMessageWriter,
  CompletionRequest,
  createProtocolConnection,
  DidChangeTextDocumentNotification,
  DidOpenTextDocumentNotification,
  HoverRequest,
  InitializeRequest,
  PublishDiagnosticsNotification,
  TextDocumentSyncKind,
} from "vscode-languageserver-protocol/browser";
import { getLanguageService } from "yaml-language-server/lib/esm/languageservice/yamlLanguageService";
import { TextDocument } from "vscode-languageserver-textdocument";

const yamlService = getLanguageService({
  async schemaRequestService(uri) {
    const res = await fetch(uri);
    return res.text();
  },
});

const docs = {};

const worker = self;
const conn = createProtocolConnection(new BrowserMessageReader(worker), new BrowserMessageWriter(worker));

async function handleDiagnostics(uri) {
  const diagnostics = await yamlService.doValidation(docs[uri]);
  await conn.sendNotification(PublishDiagnosticsNotification.type, { uri, diagnostics });
}

conn.onRequest(InitializeRequest.type, () => {
  return {
    capabilities: {
      textDocumentSync: TextDocumentSyncKind.Incremental,
      completionProvider: true,
      hoverProvider: true,
    },
  };
});
conn.onNotification(DidOpenTextDocumentNotification.type, async ({ textDocument: { uri, languageId, version, text } }) => {
  docs[uri] = TextDocument.create(uri, languageId, version, text);
  await handleDiagnostics(uri);
});
conn.onNotification(DidChangeTextDocumentNotification.type, async ({ textDocument, contentChanges }) => {
  const doc = docs[textDocument.uri];
  if (doc) {
    docs[textDocument.uri] = TextDocument.update(doc, contentChanges, textDocument.version + 1);
    await handleDiagnostics(textDocument.uri);
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

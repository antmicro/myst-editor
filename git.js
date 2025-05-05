import { MystEditorGit as g } from "./MystEditor.js";
const i = ["#30bced", "#60c771", "#e6aa3a", "#cbb63e", "#ee6352", "#9ac2c9", "#8acb88", "#14b2c4"], a = new URLSearchParams(window.location.search), d = a.get("username") || Math.floor(Math.random() * 1e3).toString(), u = i[Math.floor(Math.random() * i.length)];
let h = [{
  target: "say",
  transform: async (e) => d + " says: '" + e + "'"
}], b = [{
  target: "bold",
  transform: (e, t) => `<b style="white-space: pre-wrap;">${t.body}</b>`
}], f = [{
  target: /[0-9a-z\-]+\/[0-9a-z\-]+#\d{1,10}/g,
  transform: (e) => {
    const [t, s] = e.split("#");
    return `<a href="https://github.com/${t}/issues/${s}">${e}</a>`;
  }
}, {
  target: /[0-9a-z\-]+\/[0-9a-z\-]+\!\d+/g,
  transform: (e) => {
    const [t, s] = e.split("!");
    return `<a href="https://github.com/${t}/pull/${s}">${e}</a>`;
  }
}, {
  target: new RegExp("(^|(?<=\\s))#\\d+", "g"),
  transform: (e) => `<a href="https://github.com/antmicro/myst-editor/issues/${e.slice(1)}">${e}</a>`
}, {
  target: new RegExp("(^|(?<=\\s))!\\d+", "g"),
  transform: (e) => `<a href="https://github.com/antmicro/myst-editor/pull/${e.slice(1)}">${e}</a>`
}, {
  target: /@[0-9a-z\-]+/g,
  transform: (e) => {
    const t = e.slice(1);
    return `
                <a href='https://github.com/${t}'>
                  ${t}
                </a>`;
  }
}, {
  target: /\|date\|/g,
  transform: (e) => new Promise((t) => t(new Date().toLocaleString("en-GB", {
    timeZone: "UTC"
  })))
}];
const r = {}.VITE_COLLAB != "OFF" && a.get("collab") != "false";
var l;
const o = (l = {}.VITE_WS_URL) != null ? l : a.get("collab_server"), n = ["main", "dev"], m = [{
  message: "commit 2",
  hash: "aaa"
}, {
  message: "commit 1",
  hash: "bbb"
}], p = ["docs/source/file1.md", "docs/source/file2.md", "docs/source/index.md"], y = {
  ["docs/source/index.md"]: "# {{project}}\n\n```{toctree}\nfile2\nfile1\n```\n",
  ["docs/source/file1.md"]: `# Document 1
line1
line2
## Heading2_1
line3
## Heading2_2
line4`,
  ["docs/source/file2.md"]: `# Document 2
line1
line2
## Heading2_1
line3
## Heading2_2
line4`
};
g({
  repo: "repos/myst",
  initialBranches: n,
  getBranches: (e) => e == 1 ? n : [],
  searchBranches: (e) => n.filter((t) => t.includes(e)),
  getCommits: (e, t) => t == 1 ? m : [],
  searchCommits: (e) => m.filter((t) => t.message.includes(e)),
  getFiles: () => p,
  getText: async (e, t, s) => {
    var c;
    return (c = y[s]) != null ? c : "";
  },
  storeHistory: () => {
  },
  commitChanges: (e) => ({
    hash: "ccc",
    webUrl: "#"
  }),
  id: "demo",
  title: "[MyST Editor](https://github.com/antmicro/myst-editor/) demo",
  transforms: f,
  collaboration: {
    enabled: r,
    commentsEnabled: r,
    resolvingCommentsEnabled: r,
    wsUrl: o != null ? o : "#",
    username: d,
    color: u,
    mode: o ? "websocket" : "local"
  },
  customRoles: h,
  customDirectives: b,
  syncScroll: !0,
  index: "docs/source/index.md",
  docsRoot: "docs/source"
}, document.getElementById("myst"));
//# sourceMappingURL=git.js.map

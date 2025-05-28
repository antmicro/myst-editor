import { MystEditorGit as u } from "./MystEditor.js";
const i = ["#30bced", "#60c771", "#e6aa3a", "#cbb63e", "#ee6352", "#9ac2c9", "#8acb88", "#14b2c4"], r = new URLSearchParams(window.location.search), g = r.get("username") || Math.floor(Math.random() * 1e3).toString(), h = i[Math.floor(Math.random() * i.length)];
let b = [{
  target: "say",
  transform: async (e) => g + " says: '" + e + "'"
}], f = [{
  target: "bold",
  transform: (e, t) => `<b style="white-space: pre-wrap;">${t.body}</b>`
}], p = [{
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
const n = {}.VITE_COLLAB != "OFF" && r.get("collab") != "false";
var l;
const o = (l = {}.VITE_WS_URL) != null ? l : r.get("collab_server"), a = ["main", "dev"], m = [{
  message: "commit 2",
  hash: "aaa"
}, {
  message: "commit 1",
  hash: "bbb"
}], y = ["docs/source/file1.md", "docs/source/file2.md", "docs/source/index.md"], _ = {
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
var d;
u({
  repo: (d = r.get("repo")) != null ? d : "repos/myst",
  initialBranches: a,
  getBranches: (e) => e == 1 ? a : [],
  searchBranches: (e) => a.filter((t) => t.includes(e)),
  getCommits: (e, t) => t == 1 ? m : [],
  searchCommits: (e) => m.filter((t) => t.message.includes(e)),
  getFiles: () => y,
  getText: async (e, t, s) => {
    var c;
    return (c = _[s]) != null ? c : "";
  },
  storeHistory: () => {
  },
  commitChanges: (e) => ({
    hash: "ccc",
    webUrl: "#"
  }),
  id: "demo",
  title: "[MyST Editor](https://github.com/antmicro/myst-editor/) demo",
  transforms: p,
  collaboration: {
    enabled: n,
    commentsEnabled: n,
    resolvingCommentsEnabled: n,
    wsUrl: o != null ? o : "#",
    username: g,
    color: h,
    mode: o ? "websocket" : "local"
  },
  customRoles: b,
  customDirectives: f,
  syncScroll: !0,
  index: "docs/source/index.md",
  docsRoot: "docs/source"
}, document.getElementById("myst"));
//# sourceMappingURL=git.js.map

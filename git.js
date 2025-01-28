import { MystEditorGit as d } from "./MystEditor.js";
const c = ["#30bced", "#60c771", "#e6aa3a", "#cbb63e", "#ee6352", "#9ac2c9", "#8acb88", "#14b2c4"], n = new URLSearchParams(window.location.search), l = n.get("username") || Math.floor(Math.random() * 1e3).toString(), g = c[Math.floor(Math.random() * c.length)];
let h = [{
  target: "say",
  transform: async (e) => l + " says: '" + e + "'"
}], u = [{
  target: "bold",
  transform: (e, t) => `<b style="white-space: pre-wrap;">${t.body}</b>`
}], b = [{
  target: /[0-9a-z\-]+\/[0-9a-z\-]+#\d{1,10}/g,
  transform: (e) => {
    const [t, r] = e.split("#");
    return `<a href="https://github.com/${t}/issues/${r}">${e}</a>`;
  }
}, {
  target: /[0-9a-z\-]+\/[0-9a-z\-]+\!\d+/g,
  transform: (e) => {
    const [t, r] = e.split("!");
    return `<a href="https://github.com/${t}/pull/${r}">${e}</a>`;
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
const o = {}.VITE_COLLAB != "OFF" && n.get("collab") != "false";
var m;
const s = (m = {}.VITE_WS_URL) != null ? m : n.get("collab_server"), a = ["main", "dev"], i = [{
  message: "commit 2",
  hash: "aaa"
}, {
  message: "commit 1",
  hash: "bbb"
}], f = ["docs/source/file1", "docs/source/file2"];
d({
  repo: "repos/myst",
  initialBranches: a,
  getBranches: (e) => e == 1 ? a : [],
  searchBranches: (e) => a.filter((t) => t.includes(e)),
  getCommits: (e, t) => t == 1 ? i : [],
  searchCommits: (e) => i.filter((t) => t.message.includes(e)),
  getFiles: () => f,
  getText: () => `line1
line2
line3`,
  storeHistory: () => {
  },
  commitChanges: (e) => ({
    hash: "ccc",
    webUrl: "#"
  }),
  id: "demo",
  title: "[MyST Editor](https://github.com/antmicro/myst-editor/) demo",
  transforms: b,
  collaboration: {
    enabled: o,
    commentsEnabled: o,
    resolvingCommentsEnabled: o,
    wsUrl: s != null ? s : "#",
    username: l,
    color: g,
    mode: s ? "websocket" : "local"
  },
  customRoles: h,
  customDirectives: u,
  syncScroll: !0
}, document.getElementById("myst"));

import { MystEditorGit as F } from "./MystEditor.js";
const L = "docs", C = "docs/index.md", R = 45, A = 45, d = "4a3f2b1", w = "e7c91d0";
function j(e) {
  return (e * 2654435761 >>> 0).toString(16).padStart(7, "0").slice(-7);
}
const O = `# Demo Documentation

\`\`\`{mysttoctree}
file1 - describes some aspect of the project
file2 - explains another aspect of the project
\`\`\`

Welcome to the MyST editor git demo. Edit files, then use the Commit button to save.
`, N = O.replace(`another aspect of the project
`, `another aspect of the project
feature - contains an overview of the new feature
`), P = `# Document 1

## Introduction

This is the first document in the demo repository.

## Content

Edit this text and commit the changes to see git history.
`, z = `# Document 2

## Overview

This is the second document in the demo repository.

## Details

Edit this text and commit the changes to see git history.
`, G = `# Feature Document

This file was added on the feature branch.
`, E = {
  [C]: O,
  "docs/file1.md": P,
  "docs/file2.md": z
}, H = {
  ...E,
  [C]: N,
  "docs/feature.md": G
}, p = ["feature", "main", ...Array.from({
  length: R - 2
}, (e, s) => `branch-${String(s + 3).padStart(3, "0")}`)];
function K() {
  const e = {
    [d]: {
      message: "Initial commit",
      files: {
        ...E
      }
    }
  };
  let s = d;
  const r = [];
  for (let n = 1; n < A - 1; n++) {
    const c = j(n);
    e[c] = {
      message: `Update docs (${n})`,
      parent: s,
      files: {
        ...E
      }
    }, r.push(c), s = c;
  }
  return e[w] = {
    message: "Add feature document",
    parent: s,
    files: {
      ...H
    }
  }, {
    commits: e,
    history: [w, ...r.reverse(), d]
  };
}
function W() {
  const {
    commits: e,
    history: s
  } = K(), r = p.filter((n) => n !== "main" && n !== "feature");
  return {
    branches: {
      main: d,
      feature: w,
      ...Object.fromEntries(r.map((n) => [n, d]))
    },
    commits: e,
    history: {
      main: [d],
      feature: s,
      ...Object.fromEntries(r.map((n) => [n, [d]]))
    }
  };
}
const h = 20;
function q(e) {
  return structuredClone(e);
}
function J(e = {}) {
  var I, S;
  const s = `myst-stub-repo:${(I = e.repoKey) != null ? I : "default"}`;
  let r = q((S = e.initialState) != null ? S : W()), n = 0;
  const c = () => {
    try {
      const o = localStorage.getItem(s);
      o && ({
        state: r,
        commitCounter: n
      } = JSON.parse(o));
    } catch {
    }
  };
  c();
  const v = () => {
    var o, t;
    return (t = (o = e.getBranch) == null ? void 0 : o.call(e)) != null ? t : "main";
  };
  function u(o) {
    const t = r.commits[o];
    if (!t)
      throw new Error(`Unknown commit: ${o}`);
    return t;
  }
  function U(o) {
    return Object.keys(u(o).files).filter((t) => t.endsWith(".md") || t.endsWith(".rst"));
  }
  return {
    initialBranches: p.slice(0, h),
    async getBranches(o) {
      const t = (Math.max(1, o) - 1) * h;
      return p.slice(t, t + h);
    },
    async searchBranches(o) {
      const t = o.toLowerCase();
      return p.filter((a) => a.toLowerCase().includes(t)).slice(0, h);
    },
    async getCommits(o, t) {
      var i;
      const a = (i = r.history[o]) != null ? i : [], m = (Math.max(1, t) - 1) * h;
      return a.slice(m, m + h).map((l) => ({
        hash: l,
        message: u(l).message
      }));
    },
    async searchCommits(o, t) {
      var i;
      const a = o.toLowerCase();
      return ((i = r.history[t]) != null ? i : []).filter((l) => u(l).message.toLowerCase().includes(a)).slice(0, h).map((l) => ({
        hash: l,
        message: u(l).message
      }));
    },
    async getFiles(o, t) {
      return t != null && t.hash ? (c(), U(t.hash)) : [];
    },
    async getText(o, t, a) {
      var m;
      return t != null && t.hash ? (c(), (m = u(t.hash).files[a]) != null ? m : "") : "";
    },
    async commitChanges(o, t) {
      var _;
      c();
      const a = v(), m = r.branches[a];
      if (!m)
        throw new Error(`Unknown branch: ${a}`);
      n++;
      const i = `offline-${n}`, l = {
        ...u(m).files
      };
      for (const {
        file: y,
        text: k
      } of t)
        l[y] = k;
      r.commits[i] = {
        message: o,
        parent: m,
        files: l
      }, r.branches[a] = i, r.history[a] = [i, ...((_ = r.history[a]) != null ? _ : []).filter((y) => y !== i)];
      try {
        localStorage.setItem(s, JSON.stringify({
          state: r,
          commitCounter: n
        }));
      } catch {
      }
      return {
        hash: i,
        webUrl: "#"
      };
    }
  };
}
function V(e = "stub", s = {}) {
  switch (e) {
    case "stub":
      return J(s);
    default:
      throw new Error(`Unknown git backend: ${e}`);
  }
}
const $ = ["#30bced", "#60c771", "#e6aa3a", "#cbb63e", "#ee6352", "#9ac2c9", "#8acb88", "#14b2c4"], f = new URLSearchParams(window.location.search), D = f.get("username") || Math.floor(Math.random() * 1e3).toString(), Z = $[Math.floor(Math.random() * $.length)];
let Q = [{
  target: "say",
  transform: async (e) => D + " says: '" + e + "'"
}], X = [{
  target: "bold",
  transform: (e, s) => `<b style="white-space: pre-wrap;">${s.body}</b>`
}], Y = [{
  target: /[0-9a-z\-]+\/[0-9a-z\-]+#\d{1,10}/g,
  transform: (e) => {
    const [s, r] = e.split("#");
    return `<a href="https://github.com/${s}/issues/${r}">${e}</a>`;
  }
}, {
  target: /[0-9a-z\-]+\/[0-9a-z\-]+\!\d+/g,
  transform: (e) => {
    const [s, r] = e.split("!");
    return `<a href="https://github.com/${s}/pull/${r}">${e}</a>`;
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
    const s = e.slice(1);
    return `
                <a href='https://github.com/${s}'>
                  ${s}
                </a>`;
  }
}, {
  target: /\|date\|/g,
  transform: (e) => new Promise((s) => s(new Date().toLocaleString("en-GB", {
    timeZone: "UTC"
  })))
}];
const b = {}.VITE_COLLAB != "OFF" && f.get("collab") != "false";
var M;
const g = (M = {}.VITE_WS_URL) != null ? M : f.get("collab_server");
var T;
const ee = (T = f.get("git_backend")) != null ? T : "stub";
var x;
const {
  initialBranches: te,
  ...se
} = V(ee, {
  repoKey: (x = f.get("repo")) != null ? x : "repos/myst",
  getBranch: () => {
    var e, s, r, n, c;
    return (c = (n = (r = (s = (e = window.myst_editor) == null ? void 0 : e.demo) == null ? void 0 : s.git) == null ? void 0 : r.branch) == null ? void 0 : n.value) != null ? c : "main";
  }
});
var B;
F({
  repo: (B = f.get("repo")) != null ? B : "repos/myst",
  initialBranches: te,
  ...se,
  id: "demo",
  title: "[MyST Editor](https://github.com/antmicro/myst-editor/) demo",
  transforms: Y,
  collaboration: {
    enabled: b,
    commentsEnabled: b,
    resolvingCommentsEnabled: b,
    wsUrl: g != null ? g : "#",
    username: D,
    color: Z,
    mode: g ? "websocket" : "local"
  },
  customRoles: Q,
  customDirectives: X,
  syncScroll: !0,
  index: C,
  docsRoot: L
}, document.getElementById("myst"));
//# sourceMappingURL=git.js.map

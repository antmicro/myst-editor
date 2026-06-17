import { MystEditorGit as F } from "./MystEditor.js";
const L = "docs", C = "docs/index.md", R = 45, A = 45, d = "4a3f2b1", w = "e7c91d0";
function N(e) {
  return (e * 2654435761 >>> 0).toString(16).padStart(7, "0").slice(-7);
}
const x = `# Demo Documentation

\`\`\`{toctree}
file1
file2
\`\`\`

Welcome to the MyST editor git demo. Edit files, then use the Commit button to save.
`, P = x.replace("file2\n```", "file2\nfeature\n```"), z = `# Document 1

## Introduction

This is the first document in the demo repository.

## Content

Edit this text and commit the changes to see git history.
`, G = `# Document 2

## Overview

This is the second document in the demo repository.

## Details

Edit this text and commit the changes to see git history.
`, H = `# Feature Document

This file was added on the feature branch.
`, E = {
  [C]: x,
  "docs/file1.md": z,
  "docs/file2.md": G
}, K = {
  ...E,
  [C]: P,
  "docs/feature.md": H
}, y = ["feature", "main", ...Array.from({
  length: R - 2
}, (e, s) => `branch-${String(s + 3).padStart(3, "0")}`)];
function W() {
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
  for (let o = 1; o < A - 1; o++) {
    const i = N(o);
    e[i] = {
      message: `Update docs (${o})`,
      parent: s,
      files: {
        ...E
      }
    }, r.push(i), s = i;
  }
  return e[w] = {
    message: "Add feature document",
    parent: s,
    files: {
      ...K
    }
  }, {
    commits: e,
    history: [w, ...r.reverse(), d]
  };
}
function j() {
  const {
    commits: e,
    history: s
  } = W(), r = y.filter((o) => o !== "main" && o !== "feature");
  return {
    branches: {
      main: d,
      feature: w,
      ...Object.fromEntries(r.map((o) => [o, d]))
    },
    commits: e,
    history: {
      main: [d],
      feature: s,
      ...Object.fromEntries(r.map((o) => [o, [d]]))
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
  let r = q((S = e.initialState) != null ? S : j()), o = 0;
  const i = () => {
    try {
      const n = localStorage.getItem(s);
      n && ({
        state: r,
        commitCounter: o
      } = JSON.parse(n));
    } catch {
    }
  };
  i();
  const U = () => {
    var n, t;
    return (t = (n = e.getBranch) == null ? void 0 : n.call(e)) != null ? t : "main";
  };
  function u(n) {
    const t = r.commits[n];
    if (!t)
      throw new Error(`Unknown commit: ${n}`);
    return t;
  }
  function k(n) {
    return Object.keys(u(n).files).filter((t) => t.endsWith(".md") || t.endsWith(".rst"));
  }
  return {
    initialBranches: y.slice(0, h),
    async getBranches(n) {
      const t = (Math.max(1, n) - 1) * h;
      return y.slice(t, t + h);
    },
    async searchBranches(n) {
      const t = n.toLowerCase();
      return y.filter((a) => a.toLowerCase().includes(t)).slice(0, h);
    },
    async getCommits(n, t) {
      var c;
      const a = (c = r.history[n]) != null ? c : [], m = (Math.max(1, t) - 1) * h;
      return a.slice(m, m + h).map((l) => ({
        hash: l,
        message: u(l).message
      }));
    },
    async searchCommits(n, t) {
      var c;
      const a = n.toLowerCase();
      return ((c = r.history[t]) != null ? c : []).filter((l) => u(l).message.toLowerCase().includes(a)).slice(0, h).map((l) => ({
        hash: l,
        message: u(l).message
      }));
    },
    async getFiles(n, t) {
      return t != null && t.hash ? (i(), k(t.hash)) : [];
    },
    async getText(n, t, a) {
      var m;
      return t != null && t.hash ? (i(), (m = u(t.hash).files[a]) != null ? m : "") : "";
    },
    async commitChanges(n, t) {
      var _;
      i();
      const a = U(), m = r.branches[a];
      if (!m)
        throw new Error(`Unknown branch: ${a}`);
      o++;
      const c = `offline-${o}`, l = {
        ...u(m).files
      };
      for (const {
        file: b,
        text: v
      } of t)
        l[b] = v;
      r.commits[c] = {
        message: n,
        parent: m,
        files: l
      }, r.branches[a] = c, r.history[a] = [c, ...((_ = r.history[a]) != null ? _ : []).filter((b) => b !== c)];
      try {
        localStorage.setItem(s, JSON.stringify({
          state: r,
          commitCounter: o
        }));
      } catch {
      }
      return {
        hash: c,
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
const p = {}.VITE_COLLAB != "OFF" && f.get("collab") != "false";
var M;
const g = (M = {}.VITE_WS_URL) != null ? M : f.get("collab_server");
var T;
const ee = (T = f.get("git_backend")) != null ? T : "stub";
var B;
const {
  initialBranches: te,
  ...se
} = V(ee, {
  repoKey: (B = f.get("repo")) != null ? B : "repos/myst",
  getBranch: () => {
    var e, s, r, o, i;
    return (i = (o = (r = (s = (e = window.myst_editor) == null ? void 0 : e.demo) == null ? void 0 : s.git) == null ? void 0 : r.branch) == null ? void 0 : o.value) != null ? i : "main";
  }
});
var O;
F({
  repo: (O = f.get("repo")) != null ? O : "repos/myst",
  initialBranches: te,
  ...se,
  id: "demo",
  title: "[MyST Editor](https://github.com/antmicro/myst-editor/) demo",
  transforms: Y,
  collaboration: {
    enabled: p,
    commentsEnabled: p,
    resolvingCommentsEnabled: p,
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

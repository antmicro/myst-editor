import { MystEditorGit as M } from "./MystEditor.js";
const F = "docs", p = "docs/index.md", b = ["feature", "main"], k = `# Demo Documentation

\`\`\`{toctree}
file1
file2
\`\`\`

Welcome to the MyST editor git demo. Edit files, then use the Commit button to save.
`, R = k.replace("file2\n```", "file2\nfeature\n```"), U = `# Document 1

## Introduction

This is the first document in the demo repository.

## Content

Edit this text and commit the changes to see git history.
`, O = `# Document 2

## Overview

This is the second document in the demo repository.

## Details

Edit this text and commit the changes to see git history.
`, z = `# Feature Document

This file was added on the feature branch.
`, T = {
  [p]: k,
  "docs/file1.md": U,
  "docs/file2.md": O
}, G = {
  ...T,
  [p]: R,
  "docs/feature.md": z
};
function P() {
  return {
    branches: {
      main: "aaa",
      feature: "bbb"
    },
    commits: {
      aaa: {
        message: "Initial commit",
        files: {
          ...T
        }
      },
      bbb: {
        message: "Add feature document",
        parent: "aaa",
        files: {
          ...G
        }
      }
    },
    history: {
      main: ["aaa"],
      feature: ["bbb", "aaa"]
    }
  };
}
const d = 20;
function A(e) {
  return structuredClone(e);
}
function K(e = {}) {
  var w, C;
  const r = `myst-stub-repo:${(w = e.repoKey) != null ? w : "default"}`;
  let a = A((C = e.initialState) != null ? C : P()), l = 0;
  const m = () => {
    try {
      const s = localStorage.getItem(r);
      s && ({
        state: a,
        commitCounter: l
      } = JSON.parse(s));
    } catch {
    }
  };
  m();
  const v = () => {
    var s, t;
    return (t = (s = e.getBranch) == null ? void 0 : s.call(e)) != null ? t : "main";
  };
  function h(s) {
    const t = a.commits[s];
    if (!t)
      throw new Error(`Unknown commit: ${s}`);
    return t;
  }
  function D(s) {
    return Object.keys(h(s).files).filter((t) => t.endsWith(".md") || t.endsWith(".rst"));
  }
  return {
    initialBranches: [...b],
    async getBranches(s) {
      const t = (Math.max(1, s) - 1) * d;
      return b.slice(t, t + d);
    },
    async searchBranches(s) {
      const t = s.toLowerCase();
      return b.filter((n) => n.toLowerCase().includes(t)).slice(0, d);
    },
    async getCommits(s, t) {
      var o;
      const n = (o = a.history[s]) != null ? o : [], i = (Math.max(1, t) - 1) * d;
      return n.slice(i, i + d).map((c) => ({
        hash: c,
        message: h(c).message
      }));
    },
    async searchCommits(s, t) {
      var o;
      const n = s.toLowerCase();
      return ((o = a.history[t]) != null ? o : []).filter((c) => h(c).message.toLowerCase().includes(n)).slice(0, d).map((c) => ({
        hash: c,
        message: h(c).message
      }));
    },
    async getFiles(s, t) {
      return t != null && t.hash ? (m(), D(t.hash)) : [];
    },
    async getText(s, t, n) {
      var i;
      return t != null && t.hash ? (m(), (i = h(t.hash).files[n]) != null ? i : "") : "";
    },
    async commitChanges(s, t) {
      var $;
      m();
      const n = v(), i = a.branches[n];
      if (!i)
        throw new Error(`Unknown branch: ${n}`);
      l++;
      const o = `offline-${l}`, c = {
        ...h(i).files
      };
      for (const {
        file: g,
        text: L
      } of t)
        c[g] = L;
      a.commits[o] = {
        message: s,
        parent: i,
        files: c
      }, a.branches[n] = o, a.history[n] = [o, ...(($ = a.history[n]) != null ? $ : []).filter((g) => g !== o)];
      try {
        localStorage.setItem(r, JSON.stringify({
          state: a,
          commitCounter: l
        }));
      } catch {
      }
      return {
        hash: o,
        webUrl: "#"
      };
    },
    storeHistory: () => {
    }
  };
}
function W(e = "stub", r = {}) {
  switch (e) {
    case "stub":
      return K(r);
    default:
      throw new Error(`Unknown git backend: ${e}`);
  }
}
const E = ["#30bced", "#60c771", "#e6aa3a", "#cbb63e", "#ee6352", "#9ac2c9", "#8acb88", "#14b2c4"], u = new URLSearchParams(window.location.search), _ = u.get("username") || Math.floor(Math.random() * 1e3).toString(), q = E[Math.floor(Math.random() * E.length)];
let J = [{
  target: "say",
  transform: async (e) => _ + " says: '" + e + "'"
}], N = [{
  target: "bold",
  transform: (e, r) => `<b style="white-space: pre-wrap;">${r.body}</b>`
}], V = [{
  target: /[0-9a-z\-]+\/[0-9a-z\-]+#\d{1,10}/g,
  transform: (e) => {
    const [r, a] = e.split("#");
    return `<a href="https://github.com/${r}/issues/${a}">${e}</a>`;
  }
}, {
  target: /[0-9a-z\-]+\/[0-9a-z\-]+\!\d+/g,
  transform: (e) => {
    const [r, a] = e.split("!");
    return `<a href="https://github.com/${r}/pull/${a}">${e}</a>`;
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
    const r = e.slice(1);
    return `
                <a href='https://github.com/${r}'>
                  ${r}
                </a>`;
  }
}, {
  target: /\|date\|/g,
  transform: (e) => new Promise((r) => r(new Date().toLocaleString("en-GB", {
    timeZone: "UTC"
  })))
}];
const y = {}.VITE_COLLAB != "OFF" && u.get("collab") != "false";
var S;
const f = (S = {}.VITE_WS_URL) != null ? S : u.get("collab_server");
var x;
const Z = (x = u.get("git_backend")) != null ? x : "stub";
var B;
const {
  initialBranches: j,
  ...H
} = W(Z, {
  repoKey: (B = u.get("repo")) != null ? B : "repos/myst",
  getBranch: () => {
    var e, r, a, l, m;
    return (m = (l = (a = (r = (e = window.myst_editor) == null ? void 0 : e.demo) == null ? void 0 : r.git) == null ? void 0 : a.branch) == null ? void 0 : l.value) != null ? m : "main";
  }
});
var I;
M({
  repo: (I = u.get("repo")) != null ? I : "repos/myst",
  initialBranches: j,
  ...H,
  id: "demo",
  title: "[MyST Editor](https://github.com/antmicro/myst-editor/) demo",
  transforms: V,
  collaboration: {
    enabled: y,
    commentsEnabled: y,
    resolvingCommentsEnabled: y,
    wsUrl: f != null ? f : "#",
    username: _,
    color: q,
    mode: f ? "websocket" : "local"
  },
  customRoles: J,
  customDirectives: N,
  syncScroll: !0,
  index: p,
  docsRoot: F
}, document.getElementById("myst"));
//# sourceMappingURL=git.js.map

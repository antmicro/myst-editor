var Le = Object.defineProperty;
var Xe = (t, e, n) => e in t ? Le(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var W = (t, e, n) => (Xe(t, typeof e != "symbol" ? e + "" : e, n), n);
import { i as ze } from "./D5TW5CPZ-bb4cf81d.js";
import { A as ye, E as Ae } from "./LM4J5P2M-41ed4480.js";
import { a as F, R as _e, g as O, d as Pe, b as L } from "./lazy-950901f8.js";
import { p as je, h as Re } from "./DKTLEL5E-e2b762b2.js";
import { Y as Ue, $ as Be, v as He, x as Qe, D as Ye, U as Fe, B as Ze, z as qe } from "./IU7WZTP6-20f2a5ec.js";
import { e as Ge, x as c, b as Je, L as ve, S as Ne, u as Ke, V as et, m as tt } from "./3G3HCGVE-09704139.js";
var Z = /[─━│┃└┗├┣]/, Ce = /[└┗├┣]/, nt = /[─━]/, ke = /^[\s│┃]+$/, it = /^[\s─━│┃└┗├┣]+$/, rt = /^\s*(title[\t ]|accTitle[\t ]*:|accDescr[\t ]*[:{])/, ot = /^\s*%%/, lt = "    ";
function at(t) {
  return t.some((e) => Z.test(e));
}
function st(t) {
  for (let e of t) {
    let n = Ce.exec(e);
    if ((n == null ? void 0 : n.index) && n.index > 0)
      return n.index;
  }
  return 4;
}
function ct(t, e) {
  return t.replace(/\bline\s+(\d+)\b/gi, (n, i) => {
    let o = e.get(parseInt(i, 10));
    return o ? `line ${o}` : n;
  });
}
function Ee(t, e) {
  let n = 0;
  for (let i = 1; i < e; i++)
    n = t.indexOf(`
`, n) + 1;
  return n;
}
function Te(t, e, n) {
  let { line: i } = _e(t, Ee(t, e + 1));
  throw new F(`Line ${i}: ${n}`, "syntax", { type: "treeView", line: i });
}
function dt(t, e) {
  let n = 0;
  for (let i = 0; n < t.length && i < e; n++)
    i += t[n] === "	" ? 4 : 1;
  return n;
}
function ht(t) {
  let e = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  if (!Z.test(t))
    return { text: t, lineMap: e, columns: n };
  let i = t.split(`
`), o = -1;
  for (let a = 0; a < i.length; a++)
    if (i[a].trim() === "treeView-beta") {
      o = a;
      break;
    }
  if (o === -1)
    return { text: t, lineMap: e, columns: n };
  let s = (a) => a.trim() === "" || ot.test(a) || rt.test(a), l = [];
  for (let a = o + 1; a < i.length; a++) {
    let f = i[a];
    s(f) || ke.test(f) || l.push(f.replace(/\t/g, "    "));
  }
  if (!at(l))
    return { text: t, lineMap: e, columns: n };
  let y = st(l), A = [], g = (a, f, p) => {
    A.push(a), e.set(A.length, f + 1), p && n.set(A.length, p);
  };
  for (let a = 0; a <= o; a++)
    g(i[a], a);
  for (let a = o + 1; a < i.length; a++) {
    let f = i[a];
    if (s(f)) {
      g(f, a);
      continue;
    }
    if (ke.test(f))
      continue;
    let p = f.replace(/\t/g, "    "), b = Ce.exec(p);
    if (b) {
      let _ = Math.round(b.index / y) + 1, x = b.index + 1;
      for (; x < p.length && nt.test(p[x]); )
        x++;
      for (; x < p.length && p[x] === " "; )
        x++;
      let N = p.slice(x).trimEnd();
      N || Te(t, a, "Empty node \u2014 expected a filename or directory name after the box-drawing prefix");
      let k = lt.repeat(_);
      g(k + N, a, (j) => dt(f, x + Math.max(j - k.length, 0)));
    } else {
      if (it.test(p))
        continue;
      Z.test(p) ? g(f, a) : /^\s+/.test(p) ? Te(t, a, "Unexpected indentation without box-drawing characters. In box-drawing format, use \u251C\u2500\u2500 or \u2514\u2500\u2500 prefixes for indented nodes.") : g(f, a);
    }
  }
  return { text: A.join(`
`), lineMap: e, columns: n };
}
function ft(t, e) {
  if (t.startsWith("##", e) || t.startsWith("icon(", e))
    return !0;
  if (!t.startsWith(":::", e))
    return !1;
  let n = e + 3;
  for (; O(t.charCodeAt(n)); )
    n++;
  let i = t.charCodeAt(n);
  return i >= 65 && i <= 90 || i >= 97 && i <= 122 || i === 95;
}
function pt(t, e) {
  let n = t.charCodeAt(e);
  if (O(n) || n === 10 || n === 13 || n === 34 || n === 39 || t.startsWith(":::", e) || t.startsWith("icon(", e) || t.startsWith("##", e))
    return -1;
  let i = t.length, o = e + 1;
  for (; o < i; ) {
    let s = t.charCodeAt(o);
    if (s === 10 || s === 13)
      break;
    if (O(s)) {
      let l = o + 1;
      for (; O(t.charCodeAt(l)); )
        l++;
      if (ft(t, l))
        break;
      o = l;
    } else
      o++;
  }
  return o;
}
var Me = { name: "BARE_NAME", pattern: /(?!:::|icon\(|##)[^ \t\n\r"'](?:(?![ \t]+:::[ \t]*[A-Za-z_]|[ \t]+icon\(|[ \t]+##)[^\n\r])*/y, match: pt }, be = [{ ...Ue("treeView-beta"), longer: [Me] }, ze(), Be, He(String.raw`(?!%%)[^\n\r]`), { name: "CLASS_ANNOTATION", pattern: /[ \t]+:::[ \t]*[A-Za-z_][\w-]*/y }, { name: "ICON_ANNOTATION", pattern: /[ \t]+icon\([\w-]*(?::[\w-]+)?\)/y }, { name: "DESC_ANNOTATION", pattern: /[ \t]+##[^\n\r]*/y }, { name: "INDENTATION", pattern: /[ \t]{1,}/y }, { name: "QUOTED_NAME", pattern: /"[^"]*"|'[^']*'/y }, { name: "WS", pattern: /[ \t]+/y, hidden: !0 }, { name: "ML_COMMENT", pattern: /\%\%[^\n]*/y, hidden: !0 }, { name: "NL", pattern: /\r?\n/y, hidden: !0 }, Me];
function De(t) {
  let e = t.length;
  for (; e > 0 && O(t.charCodeAt(e - 1)); )
    e--;
  return e === t.length ? t : t.slice(0, e);
}
function Q(t, e) {
  switch (t) {
    case "INDENTATION":
      return (e == null ? void 0 : e.length) || 0;
    case "QUOTED_NAME":
      return e.substring(1, e.length - 1);
    case "BARE_NAME":
      return De(e);
    case "CLASS_ANNOTATION":
      return e.trim().substring(3).trim();
    case "ICON_ANNOTATION": {
      let n = e.trim();
      return n.substring(5, n.length - 1);
    }
    case "DESC_ANNOTATION":
      return e.trim().substring(2).trim();
    default:
      return;
  }
}
function ut(t) {
  let e = new Qe(Ye(t, be, "treeView"), be, "treeView"), n = { $type: "TreeView", nodes: [] };
  for (e.expect(0); ; )
    if (e.kind === 1)
      n.accDescr = Fe(e.take());
    else if (e.kind === 2)
      n.accTitle = Ze(e.take());
    else if (e.kind === 3)
      n.title = qe(e.take());
    else
      break;
  for (; e.kind !== -1; ) {
    let i = { $type: "TreeNode", name: "" };
    if (e.kind === 7 && (i.indent = e.take().length), e.kind === 8) {
      let o = e.take();
      i.name = o.substring(1, o.length - 1);
    } else
      e.kind === 12 ? i.name = De(e.take()) : e.fail("a name");
    for (; ; )
      if (e.kind === 4)
        i.classAnnotation = Q("CLASS_ANNOTATION", e.take());
      else if (e.kind === 5)
        i.iconAnnotation = Q("ICON_ANNOTATION", e.take());
      else if (e.kind === 6)
        i.descAnnotation = Q("DESC_ANNOTATION", e.take());
      else
        break;
    n.nodes.push(i);
  }
  return n;
}
var gt = class {
  constructor() {
    W(this, "count", 1);
    W(this, "root", { id: 0, level: -1, name: "/", nodeType: "directory", children: [] });
    W(this, "stack", [this.root]);
  }
  addNode(t, e, n, i, o, s) {
    let l = this.stack;
    for (; t <= l[l.length - 1].level; )
      l.pop();
    let y = { id: this.count++, level: t, name: e, nodeType: n, icon: o, cssClass: i, description: s, children: [] };
    l[l.length - 1].children.push(y), l.push(y);
  }
};
function mt(t, e) {
  for (let n of t.nodes) {
    let i = typeof n.indent == "number" ? n.indent : 0, o = n.name, s = o.endsWith("/");
    s && (o = o.slice(0, -1));
    let l = n.iconAnnotation;
    e.addNode(i, o, s ? "directory" : "file", n.classAnnotation || void 0, l !== void 0 ? l || "none" : void 0, n.descAnnotation || void 0);
  }
}
function wt(t) {
  var o, s;
  let { text: e, lineMap: n, columns: i } = ht(t);
  try {
    return ut(e);
  } catch (l) {
    if (!(l instanceof F) || e === t)
      throw l;
    let y = n.get(l.line);
    if (y === void 0)
      throw l;
    let A = l.column > 0 ? (s = (o = i.get(l.line)) == null ? void 0 : o(l.column - 1)) != null ? s : l.column - 1 : 0, g = _e(t, Ee(t, y) + A), a = l.message.includes(`
`) ? l.message.indexOf(`
`) : l.message.length, f = l.message.slice(a), p = ct(l.message.slice(0, a), /* @__PURE__ */ new Map([[l.line, g.line]])) + (l.snippet ? f.replace(l.snippet, () => g.snippet) : f);
    throw new F(p, l.code, { type: l.type, line: g.line, column: l.column > 0 ? g.column : 0, snippet: l.snippet ? g.snippet : "" });
  }
}
function $t(t, e) {
  let n = new gt();
  return mt(t, n), { type: "treeView", title: t.title || e, accTitle: t.accTitle ? t.accTitle.replace(/^\s+/g, "") : void 0, accDescr: t.accDescr ? t.accDescr.replace(/\n\s+/g, `
`) : void 0, root: n.root, count: n.count };
}
var P = "mermaid-treeview", q = /* @__PURE__ */ new Map([["folder", "M3 6.5A1.5 1.5 0 0 1 4.5 5h4.6l2.4 2.5h8A1.5 1.5 0 0 1 21 9v9a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 18z"], ["file", "M6.5 3h7L19 8.5v11a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 19.5v-15A1.5 1.5 0 0 1 6.5 3zM13.5 3v5.5H19"]]);
function Y(t, e) {
  if (t === void 0 || !Object.prototype.hasOwnProperty.call(t, e))
    return;
  let n = t[e];
  return typeof n == "string" ? n : void 0;
}
function xt(t, e) {
  var o;
  let n = Y(e == null ? void 0 : e.filenameIcons, t);
  if (n)
    return n;
  let i = t.lastIndexOf(".");
  if (i > 0) {
    let s = t.substring(i).toLowerCase();
    return (o = Y(e == null ? void 0 : e.extensionIcons, s)) != null ? o : Y(e == null ? void 0 : e.extensionIcons, s.slice(1));
  }
}
function Ie(t, e) {
  return t.includes(":") ? t : q.has(t) || !e ? `${P}:${t}` : `${e}:${t}`;
}
function Oe(t, e) {
  if (t.icon !== "none") {
    if (t.icon)
      return Ie(t.icon, e.defaultIconPack);
    if (e.showIcons) {
      if (t.nodeType === "file") {
        let n = xt(t.name, e);
        if (n === "none")
          return;
        if (n)
          return Ie(n, e.defaultIconPack);
      }
      return `${P}:${t.nodeType === "directory" ? "folder" : "file"}`;
    }
  }
}
function yt(t) {
  var i;
  let e = (o) => typeof o == "object" && o !== null && !Array.isArray(o) ? o : void 0, n = (i = e(t.treeView)) != null ? i : {};
  return { showIcons: !!n.showIcons, defaultIconPack: typeof n.defaultIconPack == "string" ? n.defaultIconPack : "", filenameIcons: e(n.filenameIcons), extensionIcons: e(n.extensionIcons) };
}
var At = 6, vt = 16, Nt = 7, kt = 4, X = 4;
function z(t, e, n, i, o) {
  var l;
  let s = (l = t.treeView) == null ? void 0 : l[e];
  return typeof s == "number" && s >= i && s <= o ? s : n;
}
function Tt(t) {
  return { paddingX: z(t, "paddingX", 5, 0, 100), paddingY: z(t, "paddingY", 2, 0, 100), rowIndent: z(t, "rowIndent", 15, 0, 400), lineThickness: z(t, "lineThickness", 1, 0.25, 12) };
}
function Mt(t, e, n) {
  return je(n, (i) => bt(t, e, n, i));
}
function bt(t, e, n, i) {
  var ie, re, oe, le, ae, se, ce, de, he, fe, pe, ue, ge, me;
  let o = (ie = n.fontSize) != null ? ie : 16, s = (re = n.measurer) != null ? re : Pe(n.fontFamily, n.fontFamilyMono), l = (oe = n.padding) != null ? oe : 8, y = yt(e), { paddingX: A, paddingY: g, rowIndent: a, lineThickness: f } = Tt(e), p = 0, b = t.root.children.map((r) => [r, 0]);
  for (let r = 0; i && r < b.length; r++) {
    let [d, h] = b[r];
    p = Math.max(p, h);
    for (let u of d.children)
      b.push([u, h + 1]);
  }
  let _ = i ? Math.min(a + A, Math.max(2, (((le = n.maxWidth) != null ? le : 320) - 120) / Math.max(1, p))) : a + A, x = Math.round(o * 1.5) + 2 * g, N = o, k = Ge(t.title, !1, s, o, i ? Re(n) : 4e3, 1), j = k.height > 0 ? k.height + 12 : 0, Ve = (r) => r.some((d) => Oe(d, y) !== void 0), C = [], R = /* @__PURE__ */ new Map(), U = [], G = (r, d) => {
    let h = Ve(r);
    for (let u = r.length - 1; u >= 0; u--)
      U.push([r[u], d, h]);
  };
  G(t.root.children, 0);
  let E = 0, J = !1, D = 0;
  for (; U.length > 0; ) {
    let [r, d, h] = U.pop(), u = d * _, m = L(r.name), $ = u + (h ? N + At : 0), M = Math.max(40, ((ae = n.maxWidth) != null ? ae : 320) - 2 * l - 2 * X - $), w = i ? ye(m, s, o, M, r.nodeType === "directory" ? 1 : 0) : void 0, S = i && r.description ? ye(L(r.description), s, o, M, 2) : void 0, we = w ? w.width : s.width(m, o, r.nodeType === "directory" ? 1 : 0);
    $ + we > E && (E = $ + we);
    let $e = r.cssClass !== void 0 && r.cssClass.split(/\s+/).includes("highlight");
    $e && (J = !0);
    let H = i ? Math.max(x, ((se = w == null ? void 0 : w.height) != null ? se : 0) + ((ce = S == null ? void 0 : S.height) != null ? ce : 0) + 2 * g) : x, We = D + (i ? g + Math.max(N, (de = w == null ? void 0 : w.height) != null ? de : 0) / 2 : H / 2), xe = { node: r, x: u, cy: We, icon: Oe(r, y), text: m, labelX: $, highlighted: $e, label: w, description: S, top: D, height: H };
    D += H, C.push(xe), R.set(r, xe), G(r.children, d + 1);
  }
  let K = E + vt, I = E;
  for (let r of C) {
    let d = r.node.description;
    if (!d)
      continue;
    let h = r.description ? r.description.width : s.width(L(d), o, 2);
    I = Math.max(I, (i ? r.labelX : K) + h);
  }
  I = Math.max(I, k.width);
  let v = l + (J ? X : 0), T = l + j, V = Math.ceil(I + 2 * v), ee = Math.ceil(T + D + l), B = "";
  for (let r of C) {
    let d = r.node.children;
    if (d.length === 0)
      continue;
    let h = v + r.x + Nt, u = Math.max(h, v + r.x + _ - A), m = T + R.get(d[d.length - 1]).cy, $ = Math.min(kt, u - h), M = `M${c(h)},${c(T + r.top + r.height - 2)}V${c(m - $)}`;
    $ > 0 && (M += `Q${c(h)},${c(m)} ${c(h + $)},${c(m)}H${c(u)}`);
    for (let w = 0; w < d.length - 1 && u > h; w++)
      M += `M${c(h)},${c(T + R.get(d[w]).cy)}H${c(u)}`;
    B += `<path d="${M}"/>`;
  }
  let te = o * 0.35, ne = "";
  for (let r of C) {
    let d = r.node, h = T + r.cy, u = d.nodeType === "directory", m = "";
    if (r.highlighted) {
      let $ = v + r.x - X;
      m += `<rect class="pele-tree-highlight" x="${c($)}" y="${c(T + r.top + 1)}" width="${c(V - v + X - $)}" height="${c(r.height - 2)}" fill="var(--_c)" fill-opacity="0.14"${Je}/>`;
    }
    if (r.icon !== void 0) {
      let $ = r.icon.startsWith(P + ":") ? r.icon.slice(P.length + 1) : "", M = (he = q.get($)) != null ? he : q.get(u ? "folder" : "file"), w = (pe = (fe = n.icons) == null ? void 0 : fe.call(n, r.icon)) != null ? pe : `<path d="${M}" stroke="var(--_m)" stroke-width="1.5"/>`;
      m += `<svg class="pele-icon" data-icon="${ve(r.icon)}" x="${c(v + r.x)}" y="${c(h - N / 2)}" width="${c(N)}" height="${c(N)}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${w}</svg>`;
    }
    r.label ? m += Ae(r.label, v + r.labelX, T + r.top + g, ` class="pele-label"${u ? ' font-weight="var(--_hw)"' : ""}`) : r.text !== "" && (m += `<text class="pele-label" x="${c(v + r.labelX)}" y="${c(h + te)}"${u ? ' font-weight="var(--_hw)"' : ""} xml:space="preserve">${Ne(r.text)}</text>`), r.description ? m += Ae(r.description, v + r.labelX, T + r.top + g + ((ge = (ue = r.label) == null ? void 0 : ue.height) != null ? ge : 0), ' class="pele-tree-description" font-style="italic" fill="var(--_m)"') : d.description && (m += `<text class="pele-tree-description" x="${c(v + K)}" y="${c(h + te)}" font-style="italic" fill="var(--_m)" xml:space="preserve">${Ne(L(d.description))}</text>`), ne += `<g class="pele-node pele-tree-${u ? "dir" : "file"}${Ke((me = d.cssClass) != null ? me : "")}" data-id="${ve(d.name)}">${m}</g>`;
  }
  let Se = et(k, V / 2, l + k.height / 2, ' class="pele-title" font-weight="var(--_tw)"') + (B ? `<g class="pele-tree-guides" fill="none" stroke="var(--_b)" stroke-width="${c(f)}">${B}</g>` : "") + ne;
  return { svg: tt("treeView", V, ee, o, n, t, Se), width: V, height: ee, links: [] };
}
var St = { type: "treeView", parse: (t, e, n) => $t(wt(t), n), render: Mt };
export {
  St as treeView
};
//# sourceMappingURL=QPGOFIPZ-20adfec7.js.map

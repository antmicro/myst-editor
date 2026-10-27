var at = Object.defineProperty;
var lt = (r, i, d) => i in r ? at(r, i, { enumerable: !0, configurable: !0, writable: !0, value: d }) : r[i] = d;
var U = (r, i, d) => (lt(r, typeof i != "symbol" ? i + "" : i, d), d);
import { a as nt, i as ot } from "./FTXIJQGB-9f8e460c.js";
import { q as dt, a as le, e as F, K as ct, Z as ht, V as We, d as ft, b as ut, i as Pe } from "./lazy-950901f8.js";
import { h as pt } from "./7WLXJQOR-4872eebf.js";
import { x as gt, h as bt, y as yt, C as kt } from "./WJQKAQUO-dbb8c0b4.js";
import { q as Be, z as Ue, _ as mt, j as wt, H as Tt } from "./QRQ46LE7-b110495e.js";
import { g as vt } from "./ECH2OJJK-8814648a.js";
import { N as st, H as Et, U as xt, M as At, D as St } from "./6B2VI7MB-716cdb27.js";
import { j as Ct, P as _t, E as It, R as Lt, D as de, B as Ke } from "./XQLH73R6-5278eaeb.js";
import { m as $t, c as Dt, p as Nt, h as He } from "./DKTLEL5E-e2b762b2.js";
import { L as ce, W as Rt, T as Mt, O as Fe, G as Ot, _ as Vt } from "./YTAM2TF7-f178d8af.js";
import { a as qe, e as be, u as Xe, L as he, x as P, f as Gt, V as ye, S as fe, m as Wt } from "./3G3HCGVE-09704139.js";
function ke(r) {
  return r === "markdown" || r === "string" || r === "text" ? r : "markdown";
}
function je(r) {
  return r.startsWith('"') && r.endsWith('"') ? r.substring(1, r.length - 1) : r;
}
function Pt(r, i) {
  let d = 0;
  for (let a = 0; a < i.length; a++)
    i[a] === r && d++;
  return d;
}
function Bt(r) {
  let i = r.trim(), d = "arrow_open";
  switch (i[0]) {
    case "<":
      d = "arrow_point", i = i.slice(1);
      break;
    case "x":
      d = "arrow_cross", i = i.slice(1);
      break;
    case "o":
      d = "arrow_circle", i = i.slice(1);
      break;
  }
  let a = "normal";
  return i.includes("=") && (a = "thick"), i.includes(".") && (a = "dotted"), { type: d, stroke: a };
}
function Ut(r) {
  let i = r.trim(), d = i.slice(0, -1), a = "arrow_open";
  switch (i.slice(-1)) {
    case "x":
      a = "arrow_cross", i.startsWith("x") && (a = "double_" + a, d = d.slice(1));
      break;
    case ">":
      a = "arrow_point", i.startsWith("<") && (a = "double_" + a, d = d.slice(1));
      break;
    case "o":
      a = "arrow_circle", i.startsWith("o") && (a = "double_" + a, d = d.slice(1));
      break;
  }
  let f = "normal", w = d.length - 1;
  d.startsWith("=") && (f = "thick"), d.startsWith("~") && (f = "invisible");
  let s = Pt(".", d);
  return s && (f = "dotted", w = s), { type: a, stroke: f, length: w };
}
var Kt = class {
  constructor(r = {}) {
    U(this, "type", "flowchart");
    U(this, "direction");
    U(this, "nodes", /* @__PURE__ */ new Map());
    U(this, "edges", []);
    U(this, "subgraphs", []);
    U(this, "classes", /* @__PURE__ */ new Map());
    U(this, "tooltips", /* @__PURE__ */ new Map());
    U(this, "defaultEdgeStyle");
    U(this, "defaultInterpolate");
    U(this, "title");
    U(this, "accTitle");
    U(this, "accDescr");
    U(this, "subgraphLookup", /* @__PURE__ */ new Map());
    U(this, "members", /* @__PURE__ */ new Set());
    U(this, "edgeById", /* @__PURE__ */ new Map());
    U(this, "pairCount", /* @__PURE__ */ new Map());
    U(this, "subCount", 0);
    U(this, "options");
    this.options = r;
  }
  addVertex(r, i, d, a, f, w, s, e) {
    var S, _;
    if (!r || r.trim().length === 0)
      return;
    let p;
    if (e !== void 0) {
      let I = e.includes(`
`) ? e + `
` : `{
` + e + `
}`, O;
      try {
        O = dt(I);
      } catch (h) {
        throw new le(`Metadata of "${r}" is not valid YAML. ${h.message}`, "syntax", { type: "flowchart" });
      }
      p = O !== null && typeof O == "object" && !Array.isArray(O) ? O : void 0;
    }
    let m = this.subgraphLookup.get(r);
    if (m && p) {
      m.metadata = { ...m.metadata, ...p };
      return;
    }
    let D = this.edgeById.get(r);
    if (D) {
      (p == null ? void 0 : p.animate) !== void 0 && (D.animate = p.animate), (p == null ? void 0 : p.animation) !== void 0 && (D.animation = p.animation), (p == null ? void 0 : p.curve) !== void 0 && (D.interpolate = p.curve);
      return;
    }
    let T = this.nodes.get(r);
    if (T === void 0 && (i === void 0 && d === void 0 && a !== void 0 && a !== null && ((_ = (S = this.options).warn) == null || _.call(S, `Style applied to unknown node "${r}". This may indicate a typo. The node will be created automatically.`)), T = { id: r, labelType: "text", styles: [], classes: [] }, this.nodes.set(r, T)), i !== void 0 ? (T.labelType = i.type, T.text = je(i.text.trim())) : T.text === void 0 && (T.text = r), d !== void 0 && (T.type = d), a != null)
      for (let I of a)
        T.styles.push(I);
    if (f != null)
      for (let I of f)
        T.classes.push(I);
    if (w !== void 0 && (T.dir = w), T.props === void 0 ? T.props = s != null ? s : {} : s !== void 0 && Object.assign(T.props, s), p === void 0)
      return;
    if (p.shape) {
      let I = String(p.shape);
      if (I !== I.toLowerCase() || I.includes("_"))
        throw new le(`No such shape: ${I}. Shape names should be lowercase.`, "semantic", { type: "flowchart" });
      if (!nt(I))
        throw new le(`No such shape: ${I}.`, "semantic", { type: "flowchart" });
      T.type = I;
    }
    let G = typeof p.label == "string" ? p.label : void 0;
    p.label && (T.text = String(p.label), T.labelType = ke(p.labelType)), p.icon && (T.icon = String(p.icon), !(G != null && G.trim()) && T.text === r && (T.text = "")), p.form && (T.form = String(p.form)), p.pos && (T.pos = String(p.pos)), p.img && (T.img = String(p.img), !(G != null && G.trim()) && T.text === r && (T.text = "")), p.constraint && (T.constraint = String(p.constraint)), p.w && (T.assetWidth = Number(p.w)), p.h && (T.assetHeight = Number(p.h));
  }
  addSingleLink(r, i, d, a) {
    var m;
    let f = { start: r, end: i, type: void 0, text: "", labelType: "text", classes: [], isUserDefinedId: !1, interpolate: this.defaultInterpolate }, w = d == null ? void 0 : d.text;
    w !== void 0 && (f.text = je(w.text.trim()), f.labelType = ke(w.type)), d !== void 0 && (f.type = d.type, f.stroke = d.stroke, f.length = d.length > 10 ? 10 : d.length);
    let s = r + "\0" + i, e = (m = this.pairCount.get(s)) != null ? m : 0;
    a && !this.edgeById.has(a) ? (f.id = a, f.isUserDefinedId = !0) : f.id = `L_${r}_${i}_${e === 0 ? 0 : e + 1}`;
    let p = this.options.maxEdges;
    if (p !== void 0 && this.edges.length >= p)
      throw new le(`Edge limit exceeded. The limit is ${p}.`, "limit", { type: "flowchart" });
    this.edges.push(f), this.pairCount.set(s, e + 1), this.edgeById.has(f.id) || this.edgeById.set(f.id, f);
  }
  addLink(r, i, d) {
    let a = typeof (d == null ? void 0 : d.id) == "string" ? d.id.replace("@", "") : void 0, f = r[r.length - 1], w = i[0];
    for (let s of r)
      for (let e of i)
        this.addSingleLink(s, e, d, s === f && e === w ? a : void 0);
  }
  updateLinkInterpolate(r, i) {
    for (let d of r)
      d === "default" ? this.defaultInterpolate = i : this.edgeAt(d).interpolate = i;
  }
  updateLink(r, i) {
    for (let d of r) {
      if (d === "default") {
        this.defaultEdgeStyle = i;
        continue;
      }
      let a = this.edgeAt(d);
      a.style = i, i.length > 0 && !i.some((f) => f == null ? void 0 : f.startsWith("fill")) && i.push("fill:none");
    }
  }
  edgeAt(r) {
    let i = this.edges[Number(r)];
    if (i === void 0)
      throw new le(`The index ${r} for linkStyle is out of bounds. Valid indices for linkStyle are between 0 and ${this.edges.length - 1}. (Help: Ensure that the index is within the range of existing edges.)`, "semantic", { type: "flowchart" });
    return i;
  }
  addClass(r, i) {
    let d = i.join().replace(/\\,/g, "\xA7\xA7\xA7").replace(/,/g, ";").replace(/§§§/g, ",").split(";");
    for (let a of r.split(",")) {
      let f = this.classes.get(a);
      f === void 0 && (f = { id: a, styles: [], textStyles: [] }, this.classes.set(a, f));
      for (let w of d)
        w.includes("color") && f.textStyles.push(w.replace("fill", "bgFill")), f.styles.push(w);
    }
  }
  setDirection(r) {
    let i = r.trim();
    i.includes("<") && (i = "RL"), i.includes("^") && (i = "BT"), i.includes(">") && (i = "LR"), i.includes("v") && (i = "TB"), i === "TD" && (i = "TB"), this.direction = i;
  }
  setClass(r, i) {
    var d, a, f;
    for (let w of r.split(","))
      (d = this.nodes.get(w)) == null || d.classes.push(i), (a = this.edgeById.get(w)) == null || a.classes.push(i), (f = this.subgraphLookup.get(w)) == null || f.classes.push(i);
  }
  setTooltip(r, i) {
    if (i !== void 0)
      for (let d of r.split(","))
        this.tooltips.set(d, i);
  }
  setLink(r, i, d) {
    let a = i.trim();
    for (let f of r.split(",")) {
      let w = this.nodes.get(f);
      w !== void 0 && (w.link = a ? st(a) : void 0, w.linkTarget = d);
    }
    this.setClass(r, "clickable");
  }
  setClickEvent(r, i, d) {
    this.setClass(r, "clickable");
  }
  setAccTitle(r) {
    this.accTitle = r.replace(/^\s+/g, "");
  }
  setAccDescription(r) {
    this.accDescr = r.replace(/\n\s+/g, `
`);
  }
  addSubGraph(r, i, d) {
    var T, G;
    let a = r == null ? void 0 : r.text.trim(), f = (T = d == null ? void 0 : d.text) != null ? T : "";
    r !== void 0 && r === d && /\s/.test(f) && (a = void 0);
    let w = /* @__PURE__ */ new Set(), s = [], e;
    for (let S of i)
      if (typeof S == "string")
        S.trim() !== "" && !w.has(S) && (w.add(S), s.push(S));
      else if (Array.isArray(S))
        for (let _ of S)
          _.trim() !== "" && !w.has(_) && (w.add(_), s.push(_));
      else
        e = S.value;
    e != null || (e = this.options.inheritDir ? (G = this.direction) != null ? G : this.options.direction : void 0), a != null || (a = "subGraph" + this.subCount), f = f || "", this.subCount++;
    let p = { id: a, nodes: s, title: f.trim(), classes: [], dir: e, labelType: ke(d == null ? void 0 : d.type) }, m = this.members;
    p.nodes = s.filter((S) => !m.has(S) && S !== a);
    for (let S of p.nodes)
      m.add(S);
    let D = this.subgraphLookup.get(a);
    if (D)
      for (let S of p.nodes)
        D.nodes.push(S);
    else
      this.subgraphs.push(p);
    return this.subgraphLookup.set(a, D != null ? D : p), a;
  }
  exists(r, i) {
    for (let d of r)
      if (d.nodes.includes(i))
        return !0;
    return !1;
  }
  makeUniq(r, i) {
    let d = /* @__PURE__ */ new Set();
    for (let a of i)
      for (let f of a.nodes)
        d.add(f);
    return { nodes: r.nodes.filter((a) => !d.has(a)) };
  }
  destructLink(r, i) {
    let d = Ut(r);
    if (!i)
      return d;
    let a = Bt(i);
    if (a.stroke !== d.stroke)
      return { type: "INVALID", stroke: "INVALID" };
    if (a.type === "arrow_open")
      a.type = d.type;
    else {
      if (a.type !== d.type)
        return { type: "INVALID", stroke: "INVALID" };
      a.type = "double_" + a.type;
    }
    return a.type === "double_arrow" && (a.type = "double_arrow_point"), a.length = d.length, a;
  }
  subgraph(r) {
    return this.subgraphLookup.get(r);
  }
}, Ye = ["$end", "INVALID", "acc_title", "acc_title_value", "acc_descr", "acc_descr_value", "acc_descr_multiline_value", "SHAPE_DATA", "CALLBACKNAME", "CALLBACKARGS", "MD_STR", "STR", "STYLE", "DEFAULT", "LINKSTYLE", "INTERPOLATE", "CLASSDEF", "CLASS", "HREF", "CLICK", "GRAPH", "subgraph", "end", "LINK_TARGET", "NODIR", "DIR", "direction_tb", "direction_bt", "direction_rl", "direction_lr", "direction_td", "LINK_ID", "NUM", "BRKT", "STYLE_SEPARATOR", "COLON", "AMP", "SEMI", "COMMA", "MULT", "LINK", "START_LINK", "EDGE_TEXT", "-)", "TEXT", "(-", "STADIUMEND", "STADIUMSTART", "SUBROUTINEEND", "SUBROUTINESTART", "VERTEX_WITH_PROPS_START", "TAGEND", "CYLINDEREND", "CYLINDERSTART", "DOUBLECIRCLEEND", "DOUBLECIRCLESTART", "TRAPEND", "INVTRAPEND", "TRAPSTART", "INVTRAPSTART", "TAGSTART", "UP", "SEP", "DOWN", "NODE_STRING", "MINUS", "UNICODE_TEXT", "PIPE", "PE", "PS", "SQE", "SQS", "DIAMOND_STOP", "DIAMOND_START", "NEWLINE", "SPACE", "EOF"], it = new Uint8Array(128);
for (let r of "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!\"#$%&'*+.`?\\_/")
  it[r.charCodeAt(0)] = 1;
var Ht = /accTitle\s*:\s*/y, Ft = /accDescr\s*:\s*/y, qt = /accDescr\s*\{\s*/y, Xt = /call\s+/y, jt = /click\s+/y, Yt = /(?:\r?\n)*\s*\n/y, zt = /\s*(?:LR|RL|TB|BT|TD|BR)\b/y, Qt = /\s*[<>^]/y, Zt = /\s*v\b/y, Jt = [/.*direction\s+TB[^\n]*/y, /.*direction\s+BT[^\n]*/y, /.*direction\s+RL[^\n]*/y, /.*direction\s+LR[^\n]*/y, /.*direction\s+TD[^\n]*/y], me = /[\n\r\u2028\u2029]/g, ze = /\s*[xo<]?--+[-xo>]\s*/y, er = /\s*[xo<]?--\s*/y, Qe = /\s*[xo<]?==+[=xo>]\s*/y, tr = /\s*[xo<]?==\s*/y, we = /\s*[xo<]?-?\.+-[xo>]?\s*/y, rr = /\s*[xo<]?-\.\s*/y, Ze = /\s*~~~+\s*/y, sr = /(?:\r?\n)+/y, ir = /[^\S\n\r]+/y, ar = /\(\s*\)/y, lr = /\n\s*/g;
function nr(r) {
  let i = r.length, d = [], a = [], f = [], w = [], s = 0, e = 0, p = !0, m = r.indexOf("direction"), D = r.indexOf("@"), T = -1, G = 0, S = 0, _ = -1, I = -1, O = -1, h = (t, n, l) => {
    d.push(t), a.push(r.slice(n, l)), f.push(n), e = l;
  }, k = (t) => {
    w.push(s), s = t;
  }, $ = () => {
    w.length > 0 && (s = w.pop());
  }, L = (t, n) => (t.lastIndex = n, t.test(r) ? t.lastIndex : -1), c = (t) => r.startsWith(t, e) && !Pe(r.charCodeAt(e + t.length)), y = (t) => {
    let n = t;
    if (t >= I && t <= O)
      n = O;
    else if (F(r.charCodeAt(t))) {
      for (; n < i && F(r.charCodeAt(n)); )
        n++;
      I = t, O = n;
    }
    let l = r.charCodeAt(n);
    return l === 120 || l === 111 || l === 60 ? r.charCodeAt(n + 1) : l;
  }, C = (t) => {
    let n = t;
    if (t >= I && t <= O)
      n = O;
    else if (F(r.charCodeAt(t))) {
      for (; n < i && F(r.charCodeAt(n)); )
        n++;
      I = t, O = n;
    }
    return r.charCodeAt(n) === 126;
  }, A = () => {
    r.charCodeAt(e + 1) === 96 ? (k(2), e += 2) : (k(1), e++);
  }, R = () => {
    if (!C(e))
      return !1;
    let t = L(Ze, e);
    return t < 0 ? !1 : (h(40, e, t), !0);
  }, M = (t) => {
    let n = r.charCodeAt(e + 1);
    return t === 40 ? (n === 45 ? (k(8), h(45, e, e + 2)) : n === 91 ? (k(7), h(47, e, e + 2)) : n === 40 && r.charCodeAt(e + 2) === 40 ? (k(7), h(55, e, e + 3)) : (k(7), h(69, e, e + 1)), !0) : t === 91 ? (n === 91 ? (k(7), h(49, e, e + 2)) : n === 40 ? (k(7), h(53, e, e + 2)) : n === 47 ? (k(9), h(58, e, e + 2)) : n === 92 ? (k(9), h(59, e, e + 2)) : (k(7), h(71, e, e + 1)), !0) : t === 124 ? (k(7), h(67, e, e + 1), !0) : t === 123 ? (k(7), h(73, e, e + 1), !0) : !1;
  }, Z = (t) => {
    p && (p = !1, k(6)), h(20, e, e + t);
  }, X = () => {
    let t = e;
    for (; t < i; ) {
      let n = r.charCodeAt(t);
      if (n < 128 && it[n] === 1)
        t++;
      else if (n === 45 && t + 1 < i) {
        let l = r.charCodeAt(t + 1);
        if (l === 62 || l === 45 || l === 46)
          break;
        t++;
      } else
        break;
    }
    return t === e ? !1 : (h(64, e, t), !0);
  }, Y = (t) => {
    let n = y(e), l;
    if (n === 45) {
      if ((l = L(ze, e)) >= 0)
        return h(40, e, l), !0;
      if ((l = L(er, e)) >= 0)
        return k(10), h(41, e, l), !0;
      if ((l = L(we, e)) >= 0)
        return h(40, e, l), !0;
      if ((l = L(rr, e)) >= 0)
        return k(12), h(41, e, l), !0;
    } else if (n === 61) {
      if ((l = L(Qe, e)) >= 0)
        return h(40, e, l), !0;
      if ((l = L(tr, e)) >= 0)
        return k(11), h(41, e, l), !0;
    } else if (n === 46 && (l = L(we, e)) >= 0)
      return h(40, e, l), !0;
    return t !== 45 && t !== 61 && t !== 46 && R();
  }, se = (t) => {
    let n;
    switch (t) {
      case 97:
        if (r.startsWith("acc", e)) {
          if ((n = L(Ht, e)) >= 0)
            return k(3), h(2, e, n), !0;
          if ((n = L(Ft, e)) >= 0)
            return k(4), h(4, e, n), !0;
          if ((n = L(qt, e)) >= 0)
            return k(5), e = n, !0;
        }
        break;
      case 64:
        if (r.charCodeAt(e + 1) === 123)
          return k(16), d.push(7), a.push(""), f.push(e), e += 2, !0;
        break;
      case 99:
        if ((n = L(Xt, e)) >= 0)
          return k(14), e = n, !0;
        if (c("classDef"))
          return h(16, e, e + 8), !0;
        if (c("class"))
          return h(17, e, e + 5), !0;
        if ((n = L(jt, e)) >= 0)
          return k(13), e = n, !0;
        break;
      case 34:
        return A(), !0;
      case 115:
        if (c("style"))
          return h(12, e, e + 5), !0;
        if (c("swimlane-beta"))
          return Z(13), !0;
        if (c("subgraph"))
          return h(21, e, e + 8), !0;
        break;
      case 100:
        if (c("default"))
          return h(13, e, e + 7), !0;
        break;
      case 108:
        if (c("linkStyle"))
          return h(14, e, e + 9), !0;
        break;
      case 105:
        if (c("interpolate"))
          return h(15, e, e + 11), !0;
        break;
      case 104:
        if (r.startsWith("href", e) && F(r.charCodeAt(e + 4)))
          return h(18, e, e + 5), !0;
        break;
      case 102:
        if (c("flowchart-elk"))
          return Z(13), !0;
        if (c("flowchart"))
          return Z(9), !0;
        break;
      case 103:
        if (c("graph"))
          return Z(5), !0;
        break;
      case 101:
        if (c("end")) {
          for (n = e + 3; n < i && F(r.charCodeAt(n)); )
            n++;
          return h(22, e, n), !0;
        }
        break;
      case 95:
        if (c("_self"))
          return h(23, e, e + 5), !0;
        if (c("_blank"))
          return h(23, e, e + 6), !0;
        if (c("_parent"))
          return h(23, e, e + 7), !0;
        if (c("_top"))
          return h(23, e, e + 4), !0;
        break;
    }
    if (m !== -1 && e >= G && (m < e && (m = r.indexOf("direction", e)), m !== -1 && (T < e && (me.lastIndex = e, T = me.test(r) ? me.lastIndex - 1 : i), m < T))) {
      for (let l = 0; l < 5; l++)
        if ((n = L(Jt[l], e)) >= 0)
          return h(26 + l, e, n), !0;
      G = T;
    }
    if (D !== -1 && t !== 34 && !F(t)) {
      if (e >= S) {
        D < e && (D = r.indexOf("@", e));
        let l = e;
        for (; l < i; ) {
          let g = r.charCodeAt(l);
          if (g === 34 || F(g))
            break;
          l++;
        }
        if (S = l, _ = -1, D !== -1 && D < l)
          for (let g = Math.min(l, i - 1) - 1; g >= D; g--) {
            if (r.charCodeAt(g) !== 64)
              continue;
            let v = r.charCodeAt(g + 1);
            if (v !== 123 && v !== 34) {
              _ = g;
              break;
            }
          }
      }
      if (_ > e)
        return h(31, e, _ + 1), !0;
    }
    if (t >= 48 && t <= 57) {
      let l = e + 1;
      for (; l < i; ) {
        let g = r.charCodeAt(l);
        if (g < 48 || g > 57)
          break;
        l++;
      }
      return h(32, e, l), !0;
    }
    switch (t) {
      case 35:
        return h(33, e, e + 1), !0;
      case 58:
        return r.charCodeAt(e + 1) === 58 && r.charCodeAt(e + 2) === 58 ? h(34, e, e + 3) : h(35, e, e + 1), !0;
      case 38:
        return h(36, e, e + 1), !0;
      case 59:
        return h(37, e, e + 1), !0;
      case 44:
        return h(38, e, e + 1), !0;
      case 42:
        return h(39, e, e + 1), !0;
      case 120:
      case 111:
        return Y(t) || X();
      case 60:
        return Y(t) || h(60, e, e + 1), !0;
      case 45:
        return Y(t) || X() || h(65, e, e + 1), !0;
      case 61:
        return Y(t);
      case 46:
        return Y(t) || X();
      case 126:
        return R();
      case 40:
        return M(t);
      case 91:
        return r.charCodeAt(e + 1) === 124 ? (h(50, e, e + 2), !0) : M(t);
      case 124:
      case 123:
        return M(t);
      case 62:
        return k(7), h(51, e, e + 1), !0;
      case 94:
        return h(61, e, e + 1), !0;
      case 92:
        return r.charCodeAt(e + 1) === 124 ? (h(62, e, e + 2), !0) : X();
      case 118:
        return Pe(r.charCodeAt(e + 1)) ? X() : (h(63, e, e + 1), !0);
    }
    return F(t) ? Y(t) ? !0 : (n = L(sr, e)) >= 0 ? (h(74, e, n), !0) : (n = L(ir, e)) >= 0 ? (h(75, e, n), !0) : !1 : t < 128 ? X() : pt(t) ? (h(66, e, e + 1), !0) : !1;
  }, o = (t, n, l, g) => {
    if (t === 34)
      return A(), !0;
    let v = y(e);
    if (v === l || v === g) {
      let z = L(n, e);
      if (z >= 0)
        return $(), h(40, e, z), !0;
    }
    if (t === l && (l !== 45 || r.charCodeAt(e + 1) === 45))
      return !1;
    let ee = e + 1;
    for (; ee < i; ) {
      let z = r.charCodeAt(ee);
      if (z === 34)
        break;
      if (z === l) {
        if (l !== 45 || r.charCodeAt(ee + 1) === 45)
          break;
      } else if (z === 120 || z === 111 || z === 60 || z === g || F(z)) {
        let ie = y(ee);
        if ((ie === l || ie === g) && L(n, ee) >= 0)
          break;
      }
      ee++;
    }
    return h(42, e, ee), !0;
  };
  e:
    for (; ; ) {
      if (e >= i) {
        let l = -1;
        switch (s) {
          case 0:
            l = 76;
            break;
          case 3:
            l = 3;
            break;
          case 4:
            l = 5;
            break;
          case 5:
            l = 6;
            break;
          case 13:
            l = 19;
            break;
          case 14:
            l = 8;
            break;
          case 15:
            l = 9;
            break;
        }
        l !== -1 && h(l, i, i);
        break;
      }
      let t = r.charCodeAt(e), n = !0;
      switch (s) {
        case 0:
          n = se(t);
          break;
        case 1:
          if (t === 34)
            r.charCodeAt(e + 1) === 96 ? (k(2), e += 2) : ($(), e++);
          else {
            let l = r.indexOf('"', e);
            h(11, e, l === -1 ? i : l);
          }
          break;
        case 2:
          if (t === 96)
            r.charCodeAt(e + 1) === 34 ? ($(), e += 2) : n = !1;
          else if (t === 34)
            A();
          else {
            let l = e + 1;
            for (; l < i; ) {
              let g = r.charCodeAt(l);
              if (g === 96 || g === 34)
                break;
              l++;
            }
            h(10, e, l);
          }
          break;
        case 3:
        case 4: {
          let l = r.indexOf(`
`, e);
          l === -1 && (l = i);
          let g = s === 3 ? 3 : 5;
          $(), h(g, e, l);
          break;
        }
        case 5:
          if (t === 125)
            $(), e++;
          else {
            let l = r.indexOf("}", e);
            l === -1 && (l = i), h(6, e, l);
          }
          break;
        case 6: {
          let l;
          t === 34 ? A() : (l = L(Yt, e)) >= 0 ? ($(), h(24, e, l)) : (l = L(zt, e)) >= 0 || (l = L(Qt, e)) >= 0 || (l = L(Zt, e)) >= 0 ? ($(), h(25, e, l)) : n = R() || M(t);
          break;
        }
        case 7: {
          let l = r.charCodeAt(e + 1);
          switch (t) {
            case 34:
              A();
              break;
            case 40:
            case 91:
            case 123:
              M(t);
              break;
            case 93:
              $(), l === 41 ? h(46, e, e + 2) : l === 93 ? h(48, e, e + 2) : h(70, e, e + 1);
              break;
            case 41:
              $(), l === 93 ? h(52, e, e + 2) : l === 41 && r.charCodeAt(e + 2) === 41 ? h(54, e, e + 3) : h(68, e, e + 1);
              break;
            case 124:
              $(), h(67, e, e + 1);
              break;
            case 125:
              $(), h(72, e, e + 1);
              break;
            default: {
              if ((t === 126 || F(t)) && R())
                break;
              let g = e + 1;
              for (; g < i; ) {
                let v = r.charCodeAt(g);
                if (v === 91 || v === 93 || v === 40 || v === 41 || v === 123 || v === 125 || v === 124 || v === 34)
                  break;
                g++;
              }
              h(44, e, g);
            }
          }
          break;
        }
        case 8: {
          let l = r.charCodeAt(e + 1);
          if (t === 34)
            A();
          else {
            if ((t === 126 || F(t)) && R())
              break;
            if ((t === 45 || t === 47 || t === 41) && l === 41)
              $(), h(43, e, e + 2);
            else if (t === 40 || t === 91 || t === 123)
              M(t);
            else if (t === 41 || t === 93 || t === 125)
              n = !1;
            else {
              let g = e + 1;
              for (; g < i; ) {
                let v = r.charCodeAt(g);
                if (v === 34 || v === 40 || v === 41 || v === 91 || v === 93 || v === 123 || v === 125 || (v === 45 || v === 47) && r.charCodeAt(g + 1) === 41 || (v === 126 || F(v)) && C(g) && L(Ze, g) >= 0)
                  break;
                g++;
              }
              h(44, e, g);
            }
          }
          break;
        }
        case 9: {
          let l = r.charCodeAt(e + 1);
          if (t === 34) {
            A();
            break;
          }
          if ((t === 126 || F(t)) && R())
            break;
          switch (t) {
            case 40:
              l === 45 || l === 91 || l === 40 && r.charCodeAt(e + 2) === 40 ? M(t) : l === 93 ? ($(), h(56, e, e + 2)) : M(t);
              break;
            case 91:
            case 123:
              M(t);
              break;
            case 92:
              l === 93 ? ($(), h(56, e, e + 2)) : h(44, e, e + 1);
              break;
            case 47:
              l === 93 ? ($(), h(57, e, e + 2)) : h(44, e, e + 1);
              break;
            case 93:
            case 41:
              l === 93 ? ($(), h(56, e, e + 2)) : n = !1;
              break;
            case 125:
              n = !1;
              break;
            default: {
              if ((t === 63 || t === 61) && l === 93) {
                $(), h(56, e, e + 2);
                break;
              }
              let g = e + 1;
              for (; g < i; ) {
                let v = r.charCodeAt(g);
                if (v === 92 || v === 91 || v === 93 || v === 40 || v === 41 || v === 123 || v === 125 || v === 47)
                  break;
                g++;
              }
              h(44, e, g);
            }
          }
          break;
        }
        case 10:
          n = o(t, ze, 45, -1);
          break;
        case 11:
          n = o(t, Qe, 61, -1);
          break;
        case 12:
          n = o(t, we, 46, 45);
          break;
        case 13:
          if (t === 34)
            A();
          else if (F(t))
            $(), e++;
          else {
            let l = e + 1;
            for (; l < i && !F(r.charCodeAt(l)); )
              l++;
            h(19, e, l);
          }
          break;
        case 14:
          if (t === 40) {
            let l = L(ar, e);
            $(), l >= 0 ? e = l : (k(15), e++);
          } else {
            let l = r.indexOf("(", e);
            l === -1 && (l = i), h(8, e, l);
          }
          break;
        case 15:
          if (t === 41)
            $(), e++;
          else {
            let l = r.indexOf(")", e);
            l === -1 && (l = i), h(9, e, l);
          }
          break;
        case 16:
          if (t === 34)
            k(17), h(7, e, e + 1);
          else if (t === 125)
            $(), e++;
          else if (t === 94)
            n = !1;
          else {
            let l = e + 1;
            for (; l < i; ) {
              let g = r.charCodeAt(l);
              if (g === 125 || g === 94 || g === 34)
                break;
              l++;
            }
            h(7, e, l);
          }
          break;
        case 17:
          if (t === 34)
            $(), h(7, e, e + 1);
          else {
            let l = r.indexOf('"', e);
            l === -1 && (l = i), d.push(7), a.push(r.slice(e, l).replace(lr, "<br/>")), f.push(e), e = l;
          }
          break;
      }
      if (!n)
        return d.push(1), a.push(""), f.push(e), { types: d, texts: a, starts: f };
      continue e;
    }
  return d.push(0), a.push(""), f.push(i), { types: d, texts: a, starts: f };
}
var ue = new Uint8Array(77);
for (let r of [32, 64, 63, 65, 13, 38, 35, 36, 33, 39, 66])
  ue[r] = 1;
var xe = new Uint8Array(77);
for (let r of [32, 66, 64, 25, 63, 65, 38, 35, 36, 33, 39])
  xe[r] = 1;
var Ae = new Uint8Array(77);
for (let r of [32, 64, 75, 65, 36, 66, 35, 39, 33, 12, 14, 16, 17, 19, 20, 25, 21, 22, 63, 61, 41])
  Ae[r] = 1;
var Se = new Uint8Array(77);
for (let r of [32, 64, 35, 75, 33, 12])
  Se[r] = 1;
var Je = "'UNICODE_TEXT', 'TEXT', 'TAGSTART'", ne = [], et = /}\s*\n/g;
function or(r, i) {
  let d = r.includes("}") ? r.replace(et, `}
`) : r, { types: a, texts: f, starts: w } = nr(d), s = 0, e, p = (o) => {
    let t = a[s], n = d === r ? w[s] : ct([ht(r, et, 2)], w[s]);
    throw t === 1 ? We("flowchart", r, n, "", !0) : We("flowchart", r, n, `Expecting ${o}, got '${Ye[t]}'`);
  }, m = (o, t = "") => (a[s] !== o && p(`'${Ye[o]}'${t ? ", " + t : ""}`), f[s++]), D = () => {
    let o = a[s];
    o !== 74 && o !== 37 && o !== 76 && p("'SEMI', 'NEWLINE', 'EOF'"), s++;
  }, T = () => {
    ue[a[s]] === 0 && p("'NODE_STRING'");
    let o = f[s++];
    for (; ue[a[s]] === 1; )
      o += f[s++];
    return o;
  }, G = () => {
    xe[a[s]] === 0 && p("'NODE_STRING'");
    let o = f[s++];
    for (; xe[a[s]] === 1; )
      o += f[s++];
    return o;
  }, S = () => {
    let o = a[s], t;
    if (o === 11)
      t = "string";
    else if (o === 10)
      t = "markdown";
    else if (o === 44 || o === 60 || o === 51 || o === 66)
      t = "text";
    else
      return p(`${Je}, 'TAGEND', 'STR', 'MD_STR'`);
    let n = f[s++];
    for (; ; ) {
      let l = a[s];
      if (l !== 44 && l !== 60 && l !== 51 && l !== 66)
        break;
      n += f[s++];
    }
    return { text: n, type: t };
  }, _ = (o) => {
    m(o, Je);
  }, I = () => {
    let o = a[s], t;
    if (o === 11)
      t = "string";
    else if (o === 10)
      t = "markdown";
    else if (o === 42 || o === 66)
      t = "text";
    else
      return p("'EDGE_TEXT', 'STR', 'MD_STR'");
    let n = f[s++];
    for (; a[s] === 42 || a[s] === 66; )
      n += f[s++];
    return { text: n, type: t };
  }, O = () => {
    let o = a[s], t;
    if (o === 11)
      t = "text";
    else if (o === 10)
      t = "markdown";
    else if (Ae[o] === 1)
      t = "text";
    else
      return p("'NODE_STRING', 'STR', 'MD_STR'");
    let n = f[s++];
    for (; Ae[a[s]] === 1; )
      n += f[s++];
    return { text: n, type: t };
  }, h = () => {
    let o = f[s++];
    for (; a[s] === 7; )
      o += f[s++];
    return o;
  }, k = () => {
    let o = T(), t;
    switch (a[s]) {
      case 71:
        s++, t = S(), _(70), i.addVertex(o, t, "square");
        break;
      case 55:
        s++, t = S(), _(54), i.addVertex(o, t, "doublecircle");
        break;
      case 69:
        s++, a[s] === 69 ? (s++, t = S(), _(68), m(68), i.addVertex(o, t, "circle")) : (t = S(), _(68), i.addVertex(o, t, "round"));
        break;
      case 45:
        s++, t = S(), _(43), i.addVertex(o, t, "ellipse");
        break;
      case 47:
        s++, t = S(), _(46), i.addVertex(o, t, "stadium");
        break;
      case 49:
        s++, t = S(), _(48), i.addVertex(o, t, "subroutine");
        break;
      case 50: {
        s++;
        let n = m(64);
        m(35);
        let l = m(64);
        m(67), t = S(), _(70), i.addVertex(o, t, "rect", void 0, void 0, void 0, { [n]: l });
        break;
      }
      case 53:
        s++, t = S(), _(52), i.addVertex(o, t, "cylinder");
        break;
      case 73:
        s++, a[s] === 73 ? (s++, t = S(), _(72), m(72), i.addVertex(o, t, "hexagon")) : (t = S(), _(72), i.addVertex(o, t, "diamond"));
        break;
      case 51:
        s++, t = S(), _(70), i.addVertex(o, t, "odd");
        break;
      case 58:
        s++, t = S(), a[s] === 57 ? (s++, i.addVertex(o, t, "lean_right")) : (_(56), i.addVertex(o, t, "trapezoid"));
        break;
      case 59:
        s++, t = S(), a[s] === 56 ? (s++, i.addVertex(o, t, "lean_left")) : (_(57), i.addVertex(o, t, "inv_trapezoid"));
        break;
      default:
        i.addVertex(o);
    }
    return o;
  }, $ = () => {
    let o = k();
    return a[s] === 34 && (s++, i.setClass(o, T())), o;
  }, L = () => {
    let o = [$()];
    for (e = void 0; ; ) {
      let t = a[s] === 7 ? h() : void 0;
      if (a[s] !== 75)
        return e = t, o;
      do
        s++;
      while (a[s] === 75);
      if (a[s] !== 36)
        return t !== void 0 && p("'AMP'"), o;
      s++, a[s] !== 75 && p("'SPACE'");
      do
        s++;
      while (a[s] === 75);
      let n = $();
      t !== void 0 && i.addVertex(o[o.length - 1], void 0, void 0, void 0, void 0, void 0, void 0, t), o.push(n);
    }
  }, c = () => {
    let o;
    if (a[s] === 31 && (o = f[s++]), a[s] === 40) {
      let t = i.destructLink(f[s++]);
      return o !== void 0 && (t.id = o), a[s] === 67 && (s++, t.text = S(), _(67), a[s] === 75 && s++), t;
    }
    if (a[s] === 41) {
      let t = f[s++], n = I(), l = m(40, "'EDGE_TEXT'"), g = i.destructLink(l, t);
      return g.text = n, o !== void 0 && (g.id = o), g;
    }
    return p("'LINK', 'START_LINK'");
  }, y = (o) => {
    let t = L();
    e !== void 0 && i.addVertex(t[t.length - 1], void 0, void 0, void 0, void 0, void 0, void 0, e);
    let n = t;
    for (; ; ) {
      let l = a[s];
      if (l !== 40 && l !== 41 && l !== 31)
        return n;
      let g = c(), v = L();
      e !== void 0 && i.addVertex(v[v.length - 1], void 0, void 0, void 0, void 0, void 0, void 0, e), i.addLink(t, v, g), o && (n = v.concat(n)), t = v;
    }
  }, C = () => {
    Se[a[s]] === 0 && p("'NODE_STRING', 'NUM', 'COLON', 'BRKT'");
    let o = f[s++];
    for (; Se[a[s]] === 1; )
      o += f[s++];
    return o;
  }, A = () => {
    let o = [C()];
    for (; a[s] === 38; )
      s++, o.push(C());
    return o;
  }, R = () => {
    s++, m(75);
    let o;
    if (a[s] === 13)
      o = [f[s++]];
    else
      for (o = [m(32, "'DEFAULT'")]; a[s] === 38; )
        s++, o.push(m(32));
    if (m(75), a[s] !== 15) {
      i.updateLink(o, A());
      return;
    }
    s++, m(75);
    let t = G();
    if (a[s] === 75) {
      s++;
      let n = A();
      i.updateLinkInterpolate(o, t), i.updateLink(o, n);
    } else
      i.updateLinkInterpolate(o, t);
  }, M = (o, t) => {
    if (a[s] !== 75) {
      i.setLink(o, t);
      return;
    }
    if (s++, a[s] === 23) {
      i.setLink(o, t, f[s++]);
      return;
    }
    let n = m(11, "'LINK_TARGET'");
    a[s] === 75 ? (s++, i.setLink(o, t, m(23))) : i.setLink(o, t), i.setTooltip(o, n);
  }, Z = () => {
    let o = f[s++];
    switch (a[s]) {
      case 8: {
        let t = f[s++], n = a[s] === 9, l = n ? f[s++] : void 0, g;
        a[s] === 75 && (s++, g = m(11)), n ? i.setClickEvent(o, t, l) : i.setClickEvent(o, t), g !== void 0 && i.setTooltip(o, g);
        return;
      }
      case 18:
        s++, M(o, m(11));
        return;
      case 11:
        M(o, f[s++]);
        return;
      default: {
        let t = G();
        if (a[s] === 75) {
          s++;
          let n = m(11);
          i.setClickEvent(o, t), i.setTooltip(o, n);
        } else
          i.setClickEvent(o, t);
      }
    }
  }, X = () => {
    s++;
    let o = a[s];
    if (o === 74 || o === 37 || o === 76)
      return s++, { id: void 0, title: void 0, list: [], collect: !1 };
    m(75, "'SEMI', 'NEWLINE', 'EOF'");
    let t = O(), n = t;
    return a[s] === 71 && (s++, n = S(), _(70)), o = a[s], o !== 74 && o !== 37 && o !== 76 && p("'SEMI', 'NEWLINE', 'EOF', 'SQS'"), s++, { id: t, title: n, list: [], collect: !1 };
  }, Y = (o) => {
    let t = a[s];
    switch (t) {
      case 12: {
        s++, m(75);
        let n = T();
        return m(75), i.addVertex(n, void 0, void 0, A()), D(), ne;
      }
      case 14:
        return R(), D(), ne;
      case 16: {
        s++, m(75);
        let n = T();
        return m(75), i.addClass(n, A()), D(), ne;
      }
      case 17: {
        s++, m(75);
        let n = T();
        return m(75), i.setClass(n, T()), D(), ne;
      }
      case 19:
        return Z(), D(), ne;
      case 26:
      case 27:
      case 28:
      case 29:
      case 30:
        return s++, { stmt: "dir", value: dr[t - 26] };
      case 2: {
        s++;
        let n = m(3).trim();
        return i.setAccTitle(n), n;
      }
      case 4: {
        s++;
        let n = m(5).trim();
        return i.setAccDescription(n), n;
      }
      case 6: {
        let n = f[s++].trim();
        return i.setAccDescription(n), n;
      }
      default: {
        ue[t] === 0 && p(tt);
        let n = y(o);
        return D(), n;
      }
    }
  }, se = () => {
    let o = [], t = [], n = !1;
    for (; ; ) {
      let l = a[s];
      if (l === 0)
        break;
      if (l === 22) {
        let g = o.pop();
        if (g === void 0)
          break;
        s++;
        let v = i.addSubGraph(g.id, t, g.title);
        t = g.list, n = g.collect, n && t.push(v);
      } else if (l === 37 || l === 74 || l === 75 || l === 76)
        n && t.push(f[s]), s++;
      else if (l === 21) {
        let g = X();
        g.list = t, g.collect = n, o.push(g), t = [], n = !0;
      } else {
        let g = Y(n);
        n && (!Array.isArray(g) || g.length > 0) && t.push(g);
      }
    }
    o.length > 0 && p("'end'");
  };
  for (; a[s] === 75 || a[s] === 74; )
    s++;
  if (m(20, "'SPACE', 'NEWLINE'"), a[s] === 24)
    s++, i.setDirection("TB");
  else {
    let o = m(25, "'NODIR'"), t = a[s];
    if (t === 75) {
      do
        s++;
      while (a[s] === 75);
      t = a[s], t !== 74 && p("'NEWLINE', 'SPACE'");
    } else
      t !== 37 && t !== 74 && p("'SEMI', 'NEWLINE', 'SPACE'");
    s++, i.setDirection(o);
  }
  se(), a[s] !== 0 && p(tt);
}
var dr = ["TB", "BT", "RL", "LR", "TD"], tt = "'SEMI', 'NEWLINE', 'SPACE', 'EOF', 'subgraph', 'acc_title', 'acc_descr', 'acc_descr_multiline_value', 'STYLE', 'LINKSTYLE', 'CLASSDEF', 'CLASS', 'CLICK', 'NODE_STRING'";
function cr(r) {
  if (r.img)
    return "imageSquare";
  if (r.icon)
    return r.form === "circle" ? "iconCircle" : r.form === "square" ? "iconSquare" : r.form === "rounded" ? "iconRounded" : "icon";
  switch (r.type) {
    case "square":
    case void 0:
      return "squareRect";
    case "round":
      return "roundedRect";
    default:
      return r.type;
  }
}
function hr(r) {
  switch (r) {
    case "arrow_point":
    case "arrow_circle":
    case "arrow_cross":
      return ["none", r];
    case "double_arrow_point":
    case "double_arrow_circle":
    case "double_arrow_cross": {
      let i = r.replace("double_", "");
      return [i, i];
    }
  }
  return ["none", "arrow_point"];
}
function fr(r, i) {
  var $, L;
  let d = [], a = [], f = r.subgraphs, w = (c) => {
    let y = [];
    for (let C of c) {
      let A = r.classes.get(C);
      if (A !== void 0) {
        for (let R of A.styles)
          y.push(R.trim());
        for (let R of A.textStyles)
          y.push(R.trim());
      }
    }
    return y;
  }, s = /* @__PURE__ */ new Map();
  for (let c of f)
    for (let y of c.nodes)
      r.subgraph(y) && s.set(y, c.id);
  let e = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new Map();
  for (let c of f) {
    let y = s.get(c.id);
    if (y === void 0)
      continue;
    let C = p.get(y);
    C ? C.push(c.id) : p.set(y, [c.id]);
  }
  let m = 0;
  for (let c of f) {
    if (s.has(c.id))
      continue;
    let y = [c.id];
    for (; y.length > 0; ) {
      let C = y.pop();
      if (e.has(C))
        continue;
      e.set(C, m++);
      let A = p.get(C);
      if (A)
        for (let R = A.length - 1; R >= 0; R--)
          y.push(A[R]);
    }
  }
  let D = (c) => {
    var y, C;
    return ((C = (y = r.subgraph(c)) == null ? void 0 : y.metadata) == null ? void 0 : C.view) === "collapsed";
  }, T = !1;
  for (let c of f)
    (($ = c.metadata) == null ? void 0 : $.view) === "collapsed" && (T = !0);
  let G = /* @__PURE__ */ new Map(), S = (c) => {
    let y = [], C = /* @__PURE__ */ new Set(), A = c;
    for (; A !== void 0 && !G.has(A) && !C.has(A); )
      C.add(A), y.push(A), A = s.get(A);
    let R = A !== void 0 ? G.get(A) : void 0;
    for (let M = y.length - 1; M >= 0; M--)
      R === void 0 && D(y[M]) && (R = y[M]), G.set(y[M], R);
    return R;
  }, _ = /* @__PURE__ */ new Set(), I = /* @__PURE__ */ new Map();
  for (let c of T ? f : []) {
    let y = S(c.id);
    if (y !== void 0) {
      c.id !== y && (_.add(c.id), I.set(c.id, y));
      for (let C of c.nodes)
        C !== y && (_.add(C), I.set(C, y));
    }
  }
  let O = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Set();
  for (let c = f.length - 1; c >= 0; c--) {
    let y = f[c];
    if (!_.has(y.id)) {
      y.nodes.length > 0 && h.add(y.id);
      for (let C of y.nodes)
        O.set(C, y.id);
    }
  }
  let k = /* @__PURE__ */ new Map();
  for (let c = f.length - 1; c >= 0; c--) {
    let y = f[c];
    if (_.has(y.id))
      continue;
    let C = ((L = y.metadata) == null ? void 0 : L.view) === "collapsed", A = { id: y.id, label: y.title, labelType: y.labelType, parentId: O.get(y.id), cssStyles: [], cssCompiledStyles: w(y.classes), cssClasses: y.classes.join(" "), shape: C ? "collapsedGroup" : "rect", dir: y.dir, isGroup: !C, colorIndex: e.get(y.id) };
    C || (A.metadata = y.metadata), d.push(A), k.set(y.id, A);
  }
  for (let c of r.nodes.values()) {
    if (_.has(c.id))
      continue;
    let y = k.get(c.id);
    if (y) {
      y.cssStyles = c.styles, y.cssCompiledStyles = w(c.classes), y.cssClasses = c.classes.join(" ");
      continue;
    }
    let C = h.has(c.id), A = { id: c.id, label: c.text, labelType: c.labelType, parentId: O.get(c.id), cssStyles: c.styles, cssCompiledStyles: w(["default", "node", ...c.classes]), cssClasses: "default " + c.classes.join(" "), dir: c.dir, link: c.link, linkTarget: c.linkTarget, tooltip: r.tooltips.get(c.id), icon: c.icon, pos: c.pos, img: c.img, assetWidth: c.assetWidth, assetHeight: c.assetHeight, constraint: c.constraint, isGroup: C, shape: C ? "rect" : cr(c) };
    d.push(A);
  }
  return r.edges.forEach((c, y) => {
    var Y, se, o, t;
    let C = (Y = I.get(c.start)) != null ? Y : c.start, A = (se = I.get(c.end)) != null ? se : c.end;
    if (C === A && (I.has(c.start) || I.has(c.end)))
      return;
    let [R, M] = hr(c.type), Z = [...(o = r.defaultEdgeStyle) != null ? o : []];
    c.style && Z.push(...c.style);
    let X = c.stroke === "invisible" || c.type === "arrow_open";
    a.push({ id: c.id || `L_${C}_${A}_${y}`, isUserDefinedId: c.isUserDefinedId, start: C, end: A, type: (t = c.type) != null ? t : "normal", label: c.text, labelType: c.labelType, thickness: c.stroke, pattern: c.stroke, minlen: c.length, classes: c.stroke === "invisible" ? "" : "edge-thickness-normal edge-pattern-solid flowchart-link", arrowTypeStart: X ? "none" : R, arrowTypeEnd: X ? "none" : M, cssCompiledStyles: w(c.classes), style: Z, animate: c.animate, animation: c.animation, curve: c.interpolate || r.defaultInterpolate || i });
  }), { nodes: d, edges: a };
}
var ur = 40, pr = 16, gr = 48, rt = 20, Te = 26, ve = ' fill="var(--_s)" stroke="var(--_b)"', br = ' stroke="var(--_b)"';
function Ee(r, i, d) {
  let a = r[i];
  return typeof a == "number" && a > 0 ? Math.min(a, 2e3) : d;
}
function oe(r, i) {
  return r !== void 0 && r > 0 && r <= 4e3 ? r : i;
}
function yr(r, i, d, a) {
  let f = (w) => Nt(d, (s) => kr(r, i, d, a, w, s));
  return $t(r.direction) ? Dt(d, f) : f(!1);
}
function kr(r, i, d, a, f, w) {
  var _e, Ie, Le, $e, De, Ne, Re, Me, Oe, Ve, Ge;
  let s = w ? 12 : rt, e = a ? i[a.type] : void 0, p = typeof e == "object" && e !== null && !Array.isArray(e) ? e : (_e = i.flowchart) != null ? _e : {}, m = fr(r, typeof p.curve == "string" ? p.curve : void 0);
  a == null || a.prepare(m);
  let D = (Ie = d.fontSize) != null ? Ie : 16, T = Math.round(D * 0.875), G = (Le = d.measurer) != null ? Le : ft(d.fontFamily, d.fontFamilyMono), S = Math.min(Ee(p, "wrappingWidth", 200), a && w ? 100 : 1 / 0), _ = ($e = d.padding) != null ? $e : 8, I = d.icons, O = /* @__PURE__ */ new Map(), h = [], k = [];
  m.nodes.forEach((b, u) => O.set(b.id, u));
  for (let b of m.nodes) {
    let u = qe(b.cssStyles.length > 0 ? b.cssCompiledStyles.concat(b.cssStyles) : b.cssCompiledStyles), E = (u.bold ? 1 : 0) | (u.italic ? 2 : 0), x = b.labelType === "markdown", H = (De = u.fontSize) != null ? De : D, J, W;
    if (b.isGroup) {
      let V = be(b.label, x, G, H, a && w ? Math.max(80, He(d) / 2) : 4e3, E);
      J = { node: b, style: u, label: V, shape: "group", w: 0, h: 0, dy: 0, loops: 0 }, W = Ue(0, 0), W.isGroup = !0, W.dir = b.dir ? Be(b.dir) : void 0, W.padX = s, W.padTop = V.height > 0 ? V.height + 16 : rt, W.padBottom = s, W.minW = V.width + 2 * s - 12;
    } else {
      let V = ot(b.shape), ae = b.img || b.icon || Ct(V) ? b.label : void 0, K = be(ae, x, G, H, S, E), te, B, q = 0;
      if (b.img || b.icon) {
        let N = b.img ? 80 : 48, j = oe(b.assetWidth, N), Q = oe(b.assetHeight, N);
        te = Math.max(j, K.width + 8), B = Q + (K.height > 0 ? K.height + 6 : 0), q = b.pos === "t" ? -Q / 2 : Q / 2, K.height === 0 && (q = 0);
      } else {
        let N = _t(V, K.width, K.height);
        te = N.w, B = N.h, q = N.dy;
      }
      J = { node: b, style: u, label: K, shape: V, w: te, h: B, dy: q, loops: 0 }, W = Ue(te, B);
    }
    W.seq = h.length, h.push(J), k.push(W);
  }
  m.nodes.forEach((b, u) => {
    var E;
    k[u].parent = b.parentId !== void 0 && (E = O.get(b.parentId)) != null ? E : -1;
  }), mt(k, m.edges.map((b) => {
    var u, E;
    return [(u = O.get(b.start)) != null ? u : -1, (E = O.get(b.end)) != null ? E : -1];
  }));
  let $ = f ? "TB" : Be(r.direction), L = (b) => {
    let u;
    for (let E = k[b].parent, x = 0; E >= 0 && u === void 0 && x < 1e4; E = k[E].parent, x++)
      u = k[E].dir;
    return u != null || (u = $), u === "LR" || u === "RL";
  };
  h.forEach((b, u) => {
    b.node.isGroup ? k[u].span = 1 / 0 : !b.node.img && !b.node.icon && (k[u].span = It(b.shape, b.w, b.h, L(u)));
  });
  let c = [], y = [], C = [];
  for (let b of m.edges) {
    let u = O.get(b.start), E = O.get(b.end);
    if (u === void 0 || E === void 0)
      continue;
    let x = be(b.label, b.labelType === "markdown", G, T, S);
    u === E && (h[u].loops++, L(u) ? k[u].h += 2 * (Te + (x.height > 0 ? x.height + 8 : 0)) : k[u].w += 2 * (Te + (x.width > 0 ? x.width + 12 : 0))), C.push(b), y.push(x), c.push({ src: u, dst: E, minlen: (Ne = b.minlen) != null ? Ne : 1, labelW: x.width > 0 ? x.width + 12 : 0, labelH: x.height > 0 ? x.height + 4 : 0, route: [], labelX: 0, labelY: 0 });
  }
  let A = { nodeSep: Ee(p, "nodeSpacing", ur) * (w ? 0.5 : 1), edgeSep: pr, rankSep: Ee(p, "rankSpacing", gr) * (w ? 0.75 : 1), portSep: 20, tracks: typeof p.curve == "string" && /^step/.test(p.curve), straight: p.curve === "linear", headRoom: ce("arrow_point") }, R = a ? a.layout(k, c, $, A, w) : wt(k, c, $, A), M = vt(r.title, G, D, w ? He(d) : 4e3), Z = M.height > 0 ? M.height + 12 : 0, X = Math.max(R.width, M.width), Y = _ + (X - R.width) / 2, se = _ + Z;
  Tt(k, c, Y, se);
  let o = Math.ceil(X + 2 * _), t = Math.ceil(R.height + Z + 2 * _), n = [], l = /* @__PURE__ */ new Map(), g = !1;
  for (let b of k)
    b.isGroup && (g = !0);
  if (g)
    for (let b of c)
      gt(l, b.route);
  let v = "", ee = "", z = "";
  for (let b = 0; b < h.length; b++) {
    let u = h[b], E = k[b], x = u.node, H = E.x, J = E.y, W = Xe(x.cssClasses.replace(/^default\s?/, "")), V = he(x.id);
    if (E.isGroup && (a == null ? void 0 : a.drawGroup) && E.parent < 0) {
      v += a.drawGroup(E, u.label, u.style, W, V, $, I);
      continue;
    }
    if (E.isGroup) {
      let N = bt(E, u.label.width, l, s), j = J - E.h / 2 + 8 + u.label.height / 2, Q = ` class="pele-cluster-label" fill="var(--_m)"${u.style.text}`, re = yt(E, u.label.width, N, l);
      re && (ee += kt(u.label, N, j, Q, V, k, b, I)), v += `<g class="pele-cluster${W}" data-id="${V}"><rect x="${P(H - E.w / 2)}" y="${P(J - E.h / 2)}" width="${P(E.w)}" height="${P(E.h)}" fill="var(--_a)" fill-opacity="0.5" stroke="var(--_b)"${Gt(u.style.shape)}/>` + (re ? "" : ye(u.label, N, j, Q, I)) + "</g>";
      continue;
    }
    let ae = u.w, K = u.h, te;
    if (x.img) {
      let N = oe(x.assetWidth, 80), j = oe(x.assetHeight, 80), Q = u.label.height > 0 ? x.pos === "t" ? K / 2 - j : -K / 2 : -j / 2, re = Et(st(x.img), d);
      te = re === void 0 ? "" : `<image href="${fe(re)}" x="${P(-N / 2)}" y="${P(Q)}" width="${P(N)}" height="${P(j)}" preserveAspectRatio="${x.constraint === "on" ? "xMidYMid meet" : "none"}"/>`;
    } else if (x.icon) {
      let N = oe(x.assetHeight, 48), j = u.label.height > 0 ? x.pos === "t" ? K / 2 - N : -K / 2 : -N / 2, Q = x.shape === "icon" ? "" : x.shape === "iconCircle" ? `<circle cy="${P(j + N / 2)}" r="${P(N / 2)}"${ve}${u.style.shape}/>` : `<rect x="${P(-N / 2)}" y="${P(j)}" width="${P(N)}" height="${P(N)}" rx="${x.shape === "iconRounded" ? 8 : 0}"${ve}${u.style.shape}/>`, re = N * 0.6;
      te = Q + `<svg class="pele-icon" data-icon="${he(x.icon)}" x="${P(-re / 2)}" y="${P(j + (N - re) / 2)}" width="${P(re)}" height="${P(re)}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${(Re = I == null ? void 0 : I(x.icon)) != null ? Re : ""}</svg>`;
    } else
      te = Lt(u.shape, ae, K, ve + u.style.shape, br + u.style.line);
    let B = ye(u.label, 0, u.dy, ` class="pele-label"${u.style.text}`, I);
    if (/ internal-link(?: |$)/.test(W + " ") && x.label && d.links !== !1) {
      let N = ut(x.label), j = xt(N, d), Q = fe(N);
      B = `<a class="internal-link"${j ? ` href="${Q}"${At(d)}` : ""} data-href="${Q}">${B}</a>`, n.push({ id: x.id, href: N, internal: !0 });
    }
    let q = te + B;
    x.tooltip && (q = `<title>${he(x.tooltip)}</title>` + q), x.link && (q = St(q, x.link, x.id, n, d, x.linkTarget ? ` target="${fe(x.linkTarget)}"` : "")), z += `<g class="pele-node pele-shape-${u.shape}${W}" data-id="${V}" transform="translate(${P(H)},${P(J)})">${q}</g>`;
  }
  let ie = Vt();
  for (let b = 0; b < c.length; b++) {
    let u = c[b];
    u.src === u.dst || C[b].thickness === "invisible" || u.route.length < 6 || (ie.add(u.src, de(u.route, 0, k[u.src]), C[b].arrowTypeStart), ie.add(u.dst, de(u.route, u.route.length - 3, k[u.dst]), C[b].arrowTypeEnd));
  }
  let pe = "", ge = "", Ce = /* @__PURE__ */ new Map();
  for (let b = 0; b < c.length; b++) {
    let u = c[b], E = C[b], x = y[b], H = E.style.length > 0 || E.cssCompiledStyles.length > 0 ? qe(E.cssCompiledStyles.concat(E.style)) : void 0;
    if (E.thickness !== "invisible") {
      let J = E.arrowTypeStart, W = E.arrowTypeEnd, V;
      if (u.src === u.dst) {
        let B = h[u.src], q = (Me = Ce.get(u.src)) != null ? Me : 0;
        Ce.set(u.src, q + 1), V = Rt(k[u.src], B.w, B.h, q, L(u.src), Te, ce(W), u);
      } else {
        let B = u.route.slice(), q = ie.of(u.src, de(B, 0, k[u.src])), N = ie.of(u.dst, de(B, B.length - 3, k[u.dst]));
        Ke(B, 0, h[u.src], k[u.src]), Ke(B, B.length - 3, h[u.dst], k[u.dst]), V = Mt(B, E.curve, ce(J), ce(W), q, N);
      }
      let ae = (H == null ? void 0 : H.stroke) && E.thickness !== "invisible" ? fe(H.stroke) : "var(--_l)", K = "";
      E.thickness === "thick" ? K += ' stroke-width="2.5"' : E.thickness === "dotted" && (K += ' stroke-dasharray="3 4"');
      let te = Xe(E.classes.replace(/edge-thickness-normal|edge-pattern-solid|flowchart-link/g, ""));
      pe += `<g class="pele-edge${te}" data-id="${he(E.id)}"${(Oe = H == null ? void 0 : H.line) != null ? Oe : ""}><path d="${V.d}"${K}/>` + Fe(J, V.sx, V.sy, V.sdx, V.sdy, ae) + Fe(W, V.ex, V.ey, V.edx, V.edy, ae) + "</g>";
    }
    if (x.width > 0) {
      let J = u.labelX, W = u.labelY;
      ge += Ot(E.id, x, J, W, (Ve = H == null ? void 0 : H.text) != null ? Ve : "", I);
    }
  }
  return { svg: Wt((Ge = a == null ? void 0 : a.type) != null ? Ge : "flowchart", o, t, D, d, r, ye(M, o / 2, _ + M.height / 2, ' class="pele-title" font-weight="var(--_tw)"') + (v ? `<g class="pele-clusters">${v}</g>` : "") + (pe ? `<g class="pele-edges" fill="none" stroke="var(--_l)" stroke-linecap="round">${pe}</g>` : "") + (ee ? `<g class="pele-cluster-titles">${ee}</g>` : "") + (ge ? `<g class="pele-edge-labels" font-size="${T}">${ge}</g>` : "") + `<g class="pele-nodes">${z}</g>`), width: o, height: t, links: n };
}
var $r = { type: "flowchart", math: !0, parse(r, i, d, a, f) {
  var e;
  let w = (e = i.flowchart) != null ? e : {}, s = new Kt({ inheritDir: w.inheritDir === !0, maxEdges: f.maxEdges });
  return d && (s.title = d), or(r, s), s;
}, render: yr };
export {
  $r as V,
  yr as w
};
//# sourceMappingURL=XGLSEVV2-34ed7c4c.js.map

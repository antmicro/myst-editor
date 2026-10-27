var pt = Object.defineProperty;
var ut = (t, i, r) => i in t ? pt(t, i, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[i] = r;
var ee = (t, i, r) => (ut(t, typeof i != "symbol" ? i + "" : i, r), r);
import { q as Je, z as Ie, j as gt } from "./QRQ46LE7-b110495e.js";
import { x as mt } from "./ECH2OJJK-8814648a.js";
import { D as yt, N as Ct } from "./6B2VI7MB-716cdb27.js";
import { D as De } from "./XQLH73R6-5278eaeb.js";
import { d as bt, b as kt, i as te, e as ie, a as dt, R as At, V as Qe } from "./lazy-950901f8.js";
import { m as wt, c as vt } from "./DKTLEL5E-e2b762b2.js";
import { L as $e, T as St, O as Tt, G as _t, _ as xt } from "./YTAM2TF7-f178d8af.js";
import { e as Ze, a as Et, x as G, V as pe, S as Dt, u as $t, L as et, m as Mt } from "./3G3HCGVE-09704139.js";
function Ot(t) {
  let i = "TB";
  for (let r of t)
    typeof r != "string" && r.stmt === "dir" && (i = r.value);
  return i;
}
function Lt(t, i, r) {
  var re;
  let f = [], A = [], R = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), e = /* @__PURE__ */ new Map(), D = 0, W = 0, S = (C) => {
    var v;
    if (!C.id || C.id === "</join></fork>" || C.id === "</choice>")
      return;
    if (C.cssClasses) {
      let y;
      for (let z of C.cssClasses.split(" ")) {
        let N = r.get(z);
        if (N) {
          y != null || (y = C.cssCompiledStyles.slice());
          for (let P of N.styles)
            y.push(P);
        }
      }
      y && (C.cssCompiledStyles = y);
    }
    let d = R.get(C.id);
    if (d) {
      let y = (v = C.parentId) != null ? v : d.parentId;
      Object.assign(d, C), y !== void 0 && (d.parentId = y);
    } else
      R.set(C.id, C), f.push(C);
  }, V = (C, d, v) => {
    var le, ae, J;
    let y = d.id;
    if (y === "root")
      return;
    let z = i.get(y), N = (ae = (le = z == null ? void 0 : z.classes) == null ? void 0 : le.join(" ")) != null ? ae : "", P = (J = z == null ? void 0 : z.styles) != null ? J : [], o = n.get(y);
    if (!o) {
      let j = "rect";
      d.start === !0 ? j = "stateStart" : d.start === !1 && (j = "stateEnd"), d.type !== "default" && (j = d.type), o = { shape: j, description: y, cssClasses: `${N} statediagram-state`, cssStyles: P, type: void 0, dir: void 0, colorIndex: void 0 }, n.set(y, o);
    }
    if (d.description && (Array.isArray(o.description) ? (o.shape = "rectWithTitle", o.description = o.description.concat(d.description)) : o.description.length > 0 ? (o.shape = "rectWithTitle", o.description = o.description === y ? [d.description].flat() : [o.description, d.description].flat()) : (o.shape = "rect", o.description = Array.isArray(d.description) ? d.description.slice() : d.description)), o.description.length === 1 && o.shape === "rectWithTitle" && (o.shape = o.type === "group" ? "roundedWithTitle" : "rect"), !o.type && d.doc) {
      if (o.type = "group", o.dir = Ot(d.doc), o.shape = d.type === "divider" ? "divider" : "roundedWithTitle", o.shape === "divider" && (C == null ? void 0 : C.id) !== void 0 && e.has(C.id))
        o.colorIndex = e.get(C.id);
      else {
        let j = W++;
        o.colorIndex = N.trim() !== "" || P.length > 0 ? void 0 : j;
      }
      e.set(y, o.colorIndex), o.cssClasses = `${o.cssClasses} statediagram-cluster ${v ? "statediagram-cluster-alt" : ""}`;
    }
    let q = o.description, L = { id: y, shape: o.shape, label: Array.isArray(q) ? q[0] : q, description: Array.isArray(q) ? q.slice(1) : [], cssClasses: o.cssClasses, cssCompiledStyles: [], cssStyles: o.cssStyles, type: o.type, isGroup: o.type === "group", dir: o.dir, colorIndex: o.colorIndex };
    L.shape === "divider" && (L.label = ""), C && C.id !== "root" && (L.parentId = C.id);
    let M = d.note;
    if (!M) {
      S(L);
      return;
    }
    let I = (j, u, a, g) => ({ id: j, shape: u, label: M.text, description: [], cssClasses: a, cssCompiledStyles: [], cssStyles: [], type: g ? "group" : "node", isGroup: g, dir: void 0, position: M.position }), T = I(`${y}----note-${D++}`, "note", "statediagram-note", !1);
    T.parentId = `${y}----parent`, T.noteFor = y, S(I(T.parentId, "noteGroup", o.cssClasses, !0)), S(T), S(L);
    let se = M.position === "left of", X = se ? T.id : y, K = se ? y : T.id;
    A.push({ id: `${X}-${K}`, start: X, end: K, label: "", classes: "transition note-edge", pattern: "dashed" });
  }, O = [{ item: void 0, doc: t, at: 0, alt: !0 }];
  for (; O.length > 0; ) {
    let C = O[O.length - 1];
    if (C.at >= C.doc.length) {
      O.pop();
      continue;
    }
    let d = C.doc[C.at++];
    typeof d != "string" && (d.stmt === "state" ? (V(C.item, d, C.alt), d.doc && O.push({ item: d, doc: d.doc, at: 0, alt: !C.alt })) : d.stmt === "relation" && (V(C.item, d.state1, C.alt), V(C.item, d.state2, C.alt), A.push({ id: `edge${D++}`, start: d.state1.id, end: d.state2.id, label: (re = d.description) != null ? re : "", classes: "transition" })));
  }
  for (let C of f)
    if (C.isGroup && C.description.length > 0)
      throw new dt(`Group nodes can only have label. Remove the additional description for node [${C.id}]`, "semantic", { type: "state" });
  return { nodes: f, edges: A };
}
var Rt = class {
  constructor() {
    ee(this, "type", "state");
    ee(this, "rootDoc", []);
    ee(this, "states", /* @__PURE__ */ new Map());
    ee(this, "relations", []);
    ee(this, "classes", /* @__PURE__ */ new Map());
    ee(this, "links", /* @__PURE__ */ new Map());
    ee(this, "graph", { nodes: [], edges: [] });
    ee(this, "title");
    ee(this, "accTitle");
    ee(this, "accDescr");
    ee(this, "dividerCount", 0);
  }
  get direction() {
    let t = "TB";
    for (let i of this.rootDoc)
      typeof i != "string" && i.stmt === "dir" && (t = i.value);
    return t;
  }
  setRootDoc(t) {
    this.rootDoc = t, this.translate(), this.extract(t);
  }
  extract(t) {
    this.states = /* @__PURE__ */ new Map(), this.relations = [], this.classes = /* @__PURE__ */ new Map();
    let i = Array.isArray(t) ? t : t.doc;
    for (let r of i)
      if (typeof r != "string")
        switch (r.stmt) {
          case "state":
            this.addState(r.id.trim(), r.type, r.doc, r.description, r.note);
            break;
          case "relation":
            this.addRelation(r.state1, r.state2, r.description);
            break;
          case "classDef":
            this.addStyleClass(r.id.trim(), r.classes);
            break;
          case "style": {
            let f = r.styleClass.split(",").map((A) => A.replace(/;/g, "").trim());
            for (let A of this.named(r.id.trim()))
              A.styles = f.slice();
            break;
          }
          case "applyClass":
            this.setCssClass(r.id.trim(), r.styleClass);
            break;
          case "click":
            this.addLink(typeof r.id == "string" ? r.id : r.id.id, r.url, r.tooltip);
            break;
        }
    this.graph = Lt(i, this.states, this.classes);
  }
  translate() {
    let t = [["root", { stmt: "root", id: "root", doc: this.rootDoc }, !0]];
    for (; t.length > 0; ) {
      let [i, r, f] = t.pop();
      if (typeof r == "string")
        continue;
      if (r.stmt === "relation") {
        t.push([i, r.state2, !1], [i, r.state1, !0]);
        continue;
      }
      if (r.stmt === "state")
        r.id === "[*]" ? (r.id = i + (f ? "_start" : "_end"), r.start = f) : r.id = r.id.trim();
      else if (r.stmt !== "root")
        continue;
      if (!r.doc)
        continue;
      let A = [], R = [];
      for (let n of r.doc)
        typeof n != "string" && n.stmt === "state" && n.type === "divider" && !n.doc ? (A.push({ ...n, doc: R }), R = []) : R.push(n);
      A.length > 0 && (R.length > 0 && A.push({ stmt: "state", id: this.getDividerId(), type: "divider", doc: R }), r.doc = A);
      for (let n = r.doc.length - 1; n >= 0; n--)
        t.push([r.id, r.doc[n], !0]);
    }
  }
  addState(t, i = "default", r, f, A, R) {
    let n = t.trim(), e = this.states.get(n);
    if (e ? (e.doc || (e.doc = r), e.type || (e.type = i)) : (e = { stmt: "state", id: n, descriptions: [], type: i, doc: r, note: A, classes: [], styles: [], textStyles: [] }, this.states.set(n, e)), f)
      for (let D of Array.isArray(f) ? f : [f])
        this.addDescription(n, D.trim());
    if (A && (e.note = A), R)
      for (let D of R)
        this.setCssClass(n, D.trim());
  }
  getState(t) {
    return this.states.get(t);
  }
  addLink(t, i, r) {
    this.links.set(t, { url: i, tooltip: r });
  }
  addRelation(t, i, r = "") {
    for (let f of [t, i])
      this.addState(f.id, f.type, f.doc, f.description, f.note, f.classes);
    this.relations.push({ id1: t.id.trim(), id2: i.id.trim(), relationTitle: r });
  }
  addDescription(t, i) {
    var r, f;
    (f = (r = this.states.get(t)) == null ? void 0 : r.descriptions) == null || f.push(i.startsWith(":") ? i.replace(":", "").trim() : i);
  }
  getDividerId() {
    return `divider-id-${++this.dividerCount}`;
  }
  addStyleClass(t, i = "") {
    let r = this.classes.get(t);
    if (r || (r = { id: t, styles: [], textStyles: [] }, this.classes.set(t, r)), !!i)
      for (let f of i.split(",")) {
        let A = f.replace(";", "").trim();
        f.includes("color") && r.textStyles.push(A.replace("fill", "bgFill").replace("color", "fill")), r.styles.push(A);
      }
  }
  setCssClass(t, i) {
    var r;
    for (let f of this.named(t))
      (r = f.classes) == null || r.push(i);
  }
  getDirection() {
    for (let t of this.rootDoc)
      if (typeof t != "string" && t.stmt === "dir")
        return t.value;
    return "TB";
  }
  setDirection(t) {
    for (let i of this.rootDoc)
      if (typeof i != "string" && i.stmt === "dir") {
        i.value = t;
        return;
      }
    this.rootDoc.unshift({ stmt: "dir", value: t });
  }
  trimColon(t) {
    return t.startsWith(":") ? t.slice(1).trim() : t.trim();
  }
  setAccTitle(t) {
    this.accTitle = t.replace(/^\s+/g, "");
  }
  setAccDescription(t) {
    this.accDescr = t.replace(/\n\s+/g, `
`);
  }
  named(t) {
    let i = [];
    for (let r of t.split(",")) {
      let f = this.states.get(r);
      f || (this.addState(r), f = this.states.get(r.trim())), f && i.push(f);
    }
    return i;
  }
}, tt = ["$end", "INVALID", "NL", "SD", "DESCR", "-->", "HIDE_EMPTY", "scale", "WIDTH", "COMPOSIT_STATE", "STRUCT_START", "STRUCT_STOP", "STATE_DESCR", "AS", "ID", "FORK", "JOIN", "CHOICE", "CONCURRENT", "note", "NOTE_TEXT", "acc_title", "acc_title_value", "acc_descr", "acc_descr_value", "acc_descr_multiline_value", "CLICK", "STRING", "HREF", "classDef", "CLASSDEF_ID", "DEFAULT_CLASSDEF_ID", "CLASSDEF_STYLEOPTS", "DEFAULT", "style", "STYLE_IDS", "STYLEDEF_STYLEOPTS", "class", "CLASSENTITY_IDS", "STYLECLASS", "direction_tb", "direction_bt", "direction_rl", "direction_lr", "EDGE_STATE", "STYLE_SEPARATOR", "left_of", "right_of", "INVALID"], It = /direction/gi, Ht = /<<(?:fork|join|choice)>>|\[\[(?:fork|join|choice)\]\]/gi, Ft = /[\n\r\u2028\u2029]/g, Gt = /%%/g, Nt = /\{/g;
function ue(t, i) {
  let r = 0, f = -2;
  return (A) => {
    if (f === -2 || A < r || f !== -1 && A > f) {
      t.lastIndex = A;
      let R = t.exec(i);
      f = R ? R.index : -1, r = A;
    }
    return f;
  };
}
function Yt(t) {
  let i = t.length, r = [], f = [], A = [], R = [], n = 0, e = 0, D, W = ue(It, t), S = ue(Ht, t), V = ue(Ft, t), O = ue(Gt, t), re = ue(Nt, t), C = -1, d = -1, v = [-1, -1, -1, -1], y = [0, 0, 0, 0], z = -1, N = -1, P = [-1, -1, -1, -1, -1, -1], o = (u, a, g) => {
    r.push(u), f.push(t.slice(a, g)), A.push(a), e = g;
  }, q = (u, a, g, b) => {
    r.push(u), f.push(a), A.push(g), e = b;
  }, L = (u) => {
    R.push(n), n = u;
  }, M = () => {
    R.length > 0 && (n = R.pop());
  }, I = (u, a) => {
    for (let g = 0; g < u.length; g++) {
      let b = u.charCodeAt(g), c = t.charCodeAt(a + g);
      if (c !== b && !(b >= 97 && b <= 122 && c === b - 32))
        return !1;
    }
    return !0;
  }, T = (u) => {
    let a = u;
    for (; a < i && ie(t.charCodeAt(a)); )
      a++;
    return a;
  }, se = (u) => {
    let a = u;
    for (; a < i && te(t.charCodeAt(a)); )
      a++;
    return a;
  }, X = (u) => {
    let a = t.indexOf(`
`, u);
    return a === -1 ? i : a;
  }, K = (u) => {
    let a = V(u);
    return a === -1 ? i : a;
  }, le = (u) => {
    if (u < C || u > d) {
      let a = W(u), g = a === -1 ? i : K(u);
      C = u, d = g, v[0] = v[1] = v[2] = v[3] = -1;
      for (let b = a; b !== -1 && b < g; b = W(b + 1)) {
        let c = T(b + 9);
        if (c === b + 9)
          continue;
        let E = I("tb", c) ? 0 : I("bt", c) ? 1 : I("rl", c) ? 2 : I("lr", c) ? 3 : -1;
        E !== -1 && (v[E] = b, y[E] = c + 2);
      }
    }
    for (let a = 0; a < 4; a++)
      if (v[a] >= u)
        return a;
    return -1;
  }, ae = (u) => {
    if (u < z || u > N) {
      let a = S(u), g = a === -1 ? i : K(u);
      z = u, N = g, P.fill(-1);
      for (let b = a; b !== -1 && b < g; b = S(b + 1)) {
        let c = t.charCodeAt(b + 2) | 32;
        P[(t.charCodeAt(b) === 60 ? 0 : 3) + (c === 102 ? 0 : c === 106 ? 1 : 2)] = b;
      }
    }
    for (let a = 0; a < 6; a++)
      if (P[a] >= u)
        return a;
    return -1;
  }, J = (u, a) => {
    let g = O(u);
    return g === -1 || g + 2 > a ? (o(14, u, a), !0) : g === u ? (e = a, !1) : (o(14, u, g), !0);
  }, j = (u) => (r.push(u), f.push(""), A.push(e), { types: r, texts: f, starts: A, error: D });
  for (; ; ) {
    if (e >= i) {
      switch (n) {
        case 0:
          o(2, i, i);
          break;
        case 6:
          o(22, i, i);
          break;
        case 7:
          o(24, i, i);
          break;
        case 8:
          o(25, i, i);
          break;
        case 10:
          o(32, i, i);
          break;
        case 12:
          o(39, i, i);
          break;
        case 14:
          o(36, i, i);
          break;
        case 3:
          o(12, i, i);
          break;
        case 18:
          o(20, i, i);
          break;
        case 4:
        case 19:
          o(14, i, i);
          break;
      }
      return j(0);
    }
    let u = t.charCodeAt(e);
    switch (n) {
      case 0:
      case 1: {
        let a = n === 0, g = u | 32;
        if (a) {
          if (g === 99 && I("click", e) && !te(t.charCodeAt(e + 5))) {
            o(26, e, e + 5);
            continue;
          }
          if (g === 104 && I("href", e) && !te(t.charCodeAt(e + 4))) {
            o(28, e, e + 4);
            continue;
          }
          if (u === 34) {
            let E = t.indexOf('"', e + 1);
            if (E !== -1) {
              o(27, e, E + 1);
              continue;
            }
          }
          if (g === 100 && I("default", e) && !te(t.charCodeAt(e + 7))) {
            o(33, e, e + 7);
            continue;
          }
          let c = le(e);
          if (c !== -1) {
            o(40 + c, e, X(y[c]));
            continue;
          }
          if (u === 10) {
            let E = e + 1;
            for (; t.charCodeAt(E) === 10; )
              E++;
            o(2, e, E);
            continue;
          }
          if (ie(u)) {
            e = T(e);
            continue;
          }
        } else if (u !== 10 && ie(u)) {
          let c = e + 1;
          for (; c < i && t.charCodeAt(c) !== 10 && ie(t.charCodeAt(c)); )
            c++;
          e = c;
          continue;
        }
        if (u === 35 || u === 37 && t.charCodeAt(e + 1) === 37 && t.charCodeAt(e + 2) !== 123) {
          e = X(e);
          continue;
        }
        if (g === 115) {
          if (a && I("scale", e)) {
            let c = T(e + 5);
            if (c > e + 5) {
              o(7, e, c), L(5);
              continue;
            }
          }
          if (I("style", e)) {
            let c = T(e + 5);
            if (c > e + 5) {
              o(34, e, c), L(13);
              continue;
            }
          }
          if (I("state", e)) {
            let c = T(e + 5);
            if (c > e + 5) {
              e = c, L(2);
              continue;
            }
            if (a && I("diagram", e + 5)) {
              let E = I("-v2", e + 12) ? e + 15 : e + 12;
              if (c = T(E), c > E) {
                o(3, e, c);
                continue;
              }
            }
          }
        } else if (g === 99) {
          if (I("class", e)) {
            let c = I("def", e + 5), E = c ? e + 8 : e + 5, Q = T(E);
            if (Q > E) {
              o(c ? 29 : 37, e, Q), L(c ? 9 : 11);
              continue;
            }
          }
        } else if (g === 97 && a && (I("acctitle", e) || I("accdescr", e))) {
          let c = (t.charCodeAt(e + 3) | 32) === 116, E = T(e + 8), Q = t.charCodeAt(E);
          if (Q === 58) {
            o(c ? 21 : 23, e, T(E + 1)), L(c ? 6 : 7);
            continue;
          }
          if (Q === 123 && !c) {
            e = T(E + 1), L(8);
            continue;
          }
        }
        if (a) {
          if (u === 123) {
            o(10, e, e + 1), L(1);
            continue;
          }
        } else {
          let c = le(e);
          if (c !== -1) {
            o(40 + c, e, X(y[c]));
            continue;
          }
          if (u === 125) {
            o(11, e, e + 1), M();
            continue;
          }
          if (u === 10) {
            e++;
            continue;
          }
        }
        if (g === 110 && I("note", e)) {
          let c = T(e + 4);
          if (c > e + 4) {
            o(19, e, c), L(15);
            continue;
          }
        }
        if (a && g === 104 && I("hide empty description", e) && !te(t.charCodeAt(e + 22))) {
          o(6, e, e + 22);
          continue;
        }
        if (u === 91 && t.charCodeAt(e + 1) === 42 && t.charCodeAt(e + 2) === 93) {
          o(44, e, e + 3);
          continue;
        }
        let b = e;
        for (; b < i; ) {
          let c = t.charCodeAt(b);
          if (c === 58 || c === 45 || c === 123 || ie(c))
            break;
          b++;
        }
        if (b > e) {
          J(e, b);
          continue;
        }
        if (u === 58) {
          for (b = e + 1; b < i; ) {
            let c = t.charCodeAt(b);
            if (c === 10 || c === 59)
              break;
            if (c === 58) {
              let E = t.charCodeAt(b + 1);
              if (b + 1 >= i || E === 58 || E === 10 || E === 59)
                break;
              b++;
            }
            b++;
          }
          if (b > e + 1) {
            q(4, t.slice(e, b).trim(), e, b);
            continue;
          }
          if (t.charCodeAt(e + 1) === 58 && t.charCodeAt(e + 2) === 58) {
            o(45, e, e + 3);
            continue;
          }
        } else if (u === 45 && t.charCodeAt(e + 1) === 45) {
          if (t.charCodeAt(e + 2) === 62) {
            o(5, e, e + 3);
            continue;
          }
          if (!a) {
            o(18, e, e + 2);
            continue;
          }
        }
        if (!a)
          return j(1);
        o(48, e, e + 1);
        continue;
      }
      case 2: {
        if (u !== 10 && ie(u)) {
          let c = e + 1;
          for (; c < i && t.charCodeAt(c) !== 10 && ie(t.charCodeAt(c)); )
            c++;
          e = c;
          continue;
        }
        if (u === 35 || u === 37 && t.charCodeAt(e + 1) === 37 && t.charCodeAt(e + 2) !== 123) {
          e = X(e);
          continue;
        }
        let a = ae(e);
        if (a !== -1) {
          let c = P[a], E = a === 2 || a === 5;
          q(E ? 17 : a % 3 === 0 ? 15 : 16, t.slice(e, c).trim(), e, c + (E ? 10 : 8)), M();
          continue;
        }
        if (u === 34) {
          e++, L(3);
          continue;
        }
        let g = u === 10 ? T(e) : e;
        if (I("as", g)) {
          let c = T(g + 2);
          if (c > g + 2) {
            o(13, e, c), L(4);
            continue;
          }
        }
        if (u === 10) {
          e++, M();
          continue;
        }
        if (u === 123) {
          o(10, e, e + 1), M(), L(1);
          continue;
        }
        if (te(u)) {
          let c = se(e), E = T(c);
          if (E > c && te(t.charCodeAt(E))) {
            let Q = re(E + 1);
            if (Q !== -1 && Q < K(E))
              return D = `Error: State name must be a single word. Found: "${t.slice(e, Q + 1).trim()}"`, j(1);
          }
        }
        let b = e + 1;
        for (; b < i; ) {
          let c = t.charCodeAt(b);
          if (c === 123 || ie(c))
            break;
          b++;
        }
        o(9, e, b);
        continue;
      }
      case 3: {
        if (u === 34) {
          e++, M();
          continue;
        }
        let a = t.indexOf('"', e);
        o(12, e, a === -1 ? i : a);
        continue;
      }
      case 4: {
        let a = e;
        for (; a < i; ) {
          let g = t.charCodeAt(a);
          if (g === 10 || g === 123)
            break;
          a++;
        }
        J(e, a) && M();
        continue;
      }
      case 5: {
        if (u >= 48 && u <= 57) {
          let g = e + 1;
          for (; g < i && t.charCodeAt(g) >= 48 && t.charCodeAt(g) <= 57; )
            g++;
          o(8, e, g);
          continue;
        }
        let a = T(e);
        if (a > e && I("width", a) && !te(t.charCodeAt(a + 5))) {
          e = a + 5, M();
          continue;
        }
        return j(1);
      }
      case 6:
        o(22, e, X(e)), M();
        continue;
      case 7:
        o(24, e, X(e)), M();
        continue;
      case 8: {
        if (u === 125) {
          e++, M();
          continue;
        }
        let a = t.indexOf("}", e);
        o(25, e, a === -1 ? i : a);
        continue;
      }
      case 9: {
        let a = I("default", e) && T(e + 7) > e + 7, g = a ? e + 7 : se(e), b = T(g);
        if (g === e || b === g)
          return j(1);
        o(a ? 31 : 30, e, b), M(), L(10);
        continue;
      }
      case 10:
        o(32, e, X(e)), M();
        continue;
      case 11: {
        let a = se(e);
        if (a === e)
          return j(1);
        for (; t.charCodeAt(a) === 44; ) {
          let g = T(a + 1), b = se(g);
          if (b === g)
            break;
          a = b;
        }
        o(38, e, a), M(), L(12);
        continue;
      }
      case 12:
        o(39, e, X(e)), M();
        continue;
      case 13: {
        let a = e;
        for (; a < i && (te(t.charCodeAt(a)) || t.charCodeAt(a) === 44); )
          a++;
        let g = T(a);
        if (a === e || g === a)
          return j(1);
        o(35, e, g), M(), L(14);
        continue;
      }
      case 14:
        o(36, e, X(e)), M();
        continue;
      case 15: {
        if (I("left of", e) && !te(t.charCodeAt(e + 7))) {
          o(46, e, e + 7), M(), L(16);
          continue;
        }
        if (I("right of", e) && !te(t.charCodeAt(e + 8))) {
          o(47, e, e + 8), M(), L(16);
          continue;
        }
        if (u === 34) {
          e++, M(), L(18);
          continue;
        }
        return j(1);
      }
      case 16: {
        let a = T(e), g = a;
        for (; g < i; ) {
          let b = t.charCodeAt(g);
          if (b === 58 || b === 45 || ie(b))
            break;
          g++;
        }
        if (g === a)
          return j(1);
        J(e, g) && (M(), L(17));
        continue;
      }
      case 17: {
        let a = T(e);
        if (t.charCodeAt(a) === 58) {
          let c = a + 1;
          for (; c < i; ) {
            let E = t.charCodeAt(c);
            if (E === 58 || E === 10 || E === 59)
              break;
            c++;
          }
          if (c > a + 1) {
            q(20, t.slice(e + 2, c).trim(), e, c), M();
            continue;
          }
        }
        let g = t.indexOf(`
`, e), b = -1;
        for (; g !== -1 && (b = T(g), !(I("end note", b) && !te(t.charCodeAt(b + 8)))); )
          g = t.indexOf(`
`, b);
        if (g === -1)
          return j(1);
        q(20, t.slice(e, b).trim(), e, b + 8), M();
        continue;
      }
      case 18: {
        let a = T(e);
        if (I("as", a)) {
          o(13, e, T(a + 2)), M(), L(19);
          continue;
        }
        if (u === 34) {
          e++;
          continue;
        }
        let g = t.indexOf('"', e);
        o(20, e, g === -1 ? i : g);
        continue;
      }
      case 19:
        J(e, X(e)) && M();
        continue;
    }
  }
}
var jt = ["TB", "BT", "RL", "LR"], ke = "'NL', 'ID', 'HIDE_EMPTY', 'scale', 'COMPOSIT_STATE', 'STATE_DESCR', 'FORK', 'JOIN', 'CHOICE', 'CONCURRENT', 'note', 'acc_title', 'acc_descr', 'acc_descr_multiline_value', 'CLICK', 'classDef', 'style', 'class', 'direction_tb', 'direction_bt', 'direction_rl', 'direction_lr', 'EDGE_STATE'";
function Pt(t, i) {
  let { types: r, texts: f, starts: A, error: R } = Yt(t), n = 0, e = (C) => {
    let d = r[n];
    throw d === 1 ? R !== void 0 ? new dt(R, "syntax", { type: "state", ...At(t, A[n]) }) : Qe("state", t, A[n], "", !0) : Qe("state", t, A[n], `Expecting ${C}, got '${tt[d]}'`);
  }, D = (C) => (r[n] !== C && e(`'${tt[C]}'`), f[n++]), W = () => {
    let C = r[n];
    C !== 14 && C !== 44 && e("'ID', 'EDGE_STATE'");
    let d = f[n++].trim();
    return r[n] !== 45 ? { stmt: "state", id: d, type: "default", description: "" } : (n++, { stmt: "state", id: d, classes: [D(14).trim()], type: "default", description: "" });
  };
  for (; r[n] === 2; )
    n++;
  r[n] !== 3 && e("'NL', 'SD'"), n++;
  let S = [], V = [], O = (C) => {
    C !== "nl" && S.push(C);
  }, re = (C, d) => {
    n++;
    let v = [];
    S.push({ stmt: "state", id: C, type: "default", description: d, doc: v }), V.push(S), S = v;
  };
  for (; ; ) {
    let C = r[n];
    switch (C) {
      case 2:
        n++;
        break;
      case 14:
      case 44: {
        let d = W();
        if (r[n] === 4)
          d.description = i.trimColon(f[n++]), O(d);
        else if (r[n] === 5) {
          n++;
          let v = W();
          r[n] === 4 ? O({ stmt: "relation", state1: d, state2: v, description: i.trimColon(f[n++]) }) : O({ stmt: "relation", state1: d, state2: v });
        } else
          O(d);
        break;
      }
      case 6:
        O(f[n++]);
        break;
      case 7:
        n++, D(8), O(f[n - 2]);
        break;
      case 9:
        r[n + 1] === 10 ? re(f[n++], "") : O(f[n++]);
        break;
      case 12: {
        let d = f[n++];
        D(13);
        let v = D(14);
        if (r[n] === 10)
          re(v, d);
        else if (v.includes(":")) {
          let y = v.split(":");
          O({ stmt: "state", id: y[0], type: "default", description: [d.trim(), y[1]] });
        } else
          O({ stmt: "state", id: v, type: "default", description: d.trim() });
        break;
      }
      case 15:
        O({ stmt: "state", id: f[n++], type: "fork" });
        break;
      case 16:
        O({ stmt: "state", id: f[n++], type: "join" });
        break;
      case 17:
        O({ stmt: "state", id: f[n++], type: "choice" });
        break;
      case 18:
        n++, O({ stmt: "state", id: i.getDividerId(), type: "divider" });
        break;
      case 19: {
        let d = f[n++];
        if (r[n] === 46 || r[n] === 47) {
          let v = f[n++].trim(), y = D(14).trim();
          O({ stmt: "state", id: y, note: { position: v, text: D(20).trim() } });
        } else
          r[n] !== 20 && e("'NOTE_TEXT', 'left_of', 'right_of'"), n++, D(13), D(14), O(d);
        break;
      }
      case 40:
      case 41:
      case 42:
      case 43: {
        let d = jt[C - 40];
        n++, i.setDirection(d), O({ stmt: "dir", value: d });
        break;
      }
      case 21: {
        n++;
        let d = D(22).trim();
        i.setAccTitle(d), O(d);
        break;
      }
      case 23: {
        n++;
        let d = D(24).trim();
        i.setAccDescription(d), O(d);
        break;
      }
      case 25: {
        let d = f[n++].trim();
        i.setAccDescription(d), O(d);
        break;
      }
      case 26: {
        n++;
        let d = W(), v, y = "";
        r[n] === 28 ? (n++, v = D(27)) : (r[n] !== 27 && e("'STRING', 'HREF'"), v = f[n++], y = D(27)), D(2), O({ stmt: "click", id: d, url: v, tooltip: y });
        break;
      }
      case 29: {
        n++;
        let d = D(30).trim();
        O({ stmt: "classDef", id: d, classes: D(32).trim() });
        break;
      }
      case 34: {
        n++;
        let d = D(35).trim();
        O({ stmt: "style", id: d, styleClass: D(36).trim() });
        break;
      }
      case 37: {
        n++;
        let d = D(38).trim();
        O({ stmt: "applyClass", id: d, styleClass: D(39).trim() });
        break;
      }
      case 11:
        V.length === 0 && e(`'$end', ${ke}`), n++, S = V.pop();
        break;
      case 0:
        return V.length > 0 && e(`'STRUCT_STOP', ${ke}`), i.setRootDoc(S), S;
      default:
        e(V.length > 0 ? `'STRUCT_STOP', ${ke}` : `'$end', ${ke}`);
    }
  }
}
var Ut = 40, Wt = 16, Bt = 44, de = 16, Me = 10, Vt = 16, st = 10, Oe = 26, rt = 8, Xt = 320, Le = 10, it = 8, lt = ' fill="var(--_s)" stroke="var(--_b)"', Ae = ' fill="none" stroke="var(--_b)"', zt = /(?:^| )statediagram-(?:state|cluster-alt|cluster|note)(?= |$)/g, Kt = /* @__PURE__ */ new Map([["rectWithTitle", 1], ["stateStart", 2], ["stateEnd", 3], ["choice", 4], ["fork", 5], ["join", 6], ["note", 7], ["divider", 10]]), qt = ["pele-node pele-state", "pele-node pele-state", "pele-node pele-state-start", "pele-node pele-state-end", "pele-node pele-state-choice", "pele-node pele-state-fork", "pele-node pele-state-join", "pele-note", "pele-cluster pele-state-composite"];
function at(t) {
  return t === "TB" || t === "BT";
}
function Re(t, i, r) {
  var A;
  let f = (A = t.state) == null ? void 0 : A[i];
  return typeof f == "number" && f > 0 ? Math.min(f, 2e3) : r;
}
function ot(t) {
  let i = 0, r = t.length;
  for (; i < r && t.charCodeAt(i) === 34; )
    i++;
  for (; r > i && t.charCodeAt(r - 1) === 34; )
    r--;
  return t.slice(i, r);
}
function nt(t, i, r) {
  return t < i ? i : t > r ? r : t;
}
function we(t, i, r, f, A) {
  return `<rect x="${G(t)}" y="${G(i)}" width="${G(r)}" height="${G(f)}"${A}/>`;
}
function ve(t, i, r, f) {
  let A = Ie(0, 0);
  return A.isGroup = !0, A.dir = t, A.padX = i, A.padTop = r, A.padBottom = f, A;
}
function Jt(t, i, r) {
  return wt(t.direction) ? vt(r, (f) => ct(t, i, r, f)) : ct(t, i, r, !1);
}
function ct(t, i, r, f) {
  var Pe, Ue, We, Be, Ve, Xe;
  let A = t.graph, R = (Pe = i.flowchart) == null ? void 0 : Pe.curve, n = (Ue = r.fontSize) != null ? Ue : 16, e = Math.round(n * 0.875), D = (We = r.measurer) != null ? We : bt(r.fontFamily, r.fontFamilyMono), W = Re(i, "wrappingWidth", 200), S = (Be = r.padding) != null ? Be : 8, V = r.icons, O = f ? "TB" : Je(t.direction), re = Ze(void 0, !1, D, n, 0), C = (l, s, h, k = 0) => Ze(l, !0, D, s, h, k), d = /* @__PURE__ */ new Map(), v = [], y = [], z = (l, s, h) => (v.push({ node: l, kind: s, style: void 0, label: re, lines: [], w: 0, h: 0, titleH: 0 }), h && y.push(h), v.length - 1);
  for (let l of A.nodes) {
    if (l.shape === "noteGroup")
      continue;
    let s = l.isGroup ? l.shape === "divider" ? 9 : 8 : (Ve = Kt.get(l.shape)) != null ? Ve : 0;
    d.set(l.id, z(l, s, void 0));
  }
  let N = v.length, P = [];
  for (let l = 0; l < N; l++) {
    let s = v[l].node.parentId, h = s === void 0 ? void 0 : d.get(s);
    P.push(h !== void 0 && h !== l && v[h].node.isGroup ? h : -1);
  }
  {
    let l = [];
    for (let m = 0; m < N; m++)
      l.push([]);
    let s = [], h = new Uint8Array(N);
    for (let m = 0; m < N; m++)
      P[m] === -1 ? (h[m] = 1, s.push(m)) : l[P[m]].push(m);
    let k = 0, x = () => {
      for (; k < s.length; k++)
        for (let m of l[s[k]])
          h[m] || (h[m] = 1, s.push(m));
    };
    x();
    let U = new Int32Array(N).fill(-1);
    for (let m = 0; m < N; m++) {
      if (h[m])
        continue;
      let p = m;
      for (; U[p] !== m; )
        U[p] = m, p = P[p];
      P[p] = -1, h[p] = 1, s.push(p), x();
    }
  }
  let o = new Int32Array(N).fill(-1);
  for (let l = 0; l < N; l++) {
    let s = v[l].node.noteFor, h = s === void 0 ? void 0 : d.get(s);
    h !== void 0 && (o[l] = h, P[l] = P[h]);
  }
  let q = (l) => Je(v[l].node.dir), L = (l) => at(P[l] === -1 ? O : q(P[l])), M = new Int32Array(N), I = new Uint8Array(N), T = new Array(N).fill(1 / 0), se = 0, X = new Int32Array(2 * N);
  for (let l of A.edges) {
    let s = d.get(l.start), h = d.get(l.end);
    if (!(s === void 0 || h === void 0)) {
      if (l.pattern === "dashed") {
        I[v[s].kind === 7 ? h : s] = 1;
        continue;
      }
      M[s] = Math.max(M[s], ++X[2 * s]), M[h] = Math.max(M[h], ++X[2 * h + 1]), T[s] === 1 / 0 && (T[s] = se++), T[h] === 1 / 0 && (T[h] = se++);
    }
  }
  for (let l = 0; l < N; l++) {
    let s = v[l], h = s.node, k = Et(h.cssStyles.length > 0 ? h.cssCompiledStyles.concat(h.cssStyles) : h.cssCompiledStyles), x = (k.bold ? 1 : 0) | (k.italic ? 2 : 0), U = (Xe = k.fontSize) != null ? Xe : n;
    s.style = k;
    let m;
    switch (s.kind) {
      case 8:
        s.label = C(h.label, U, 4e3, x), s.titleH = s.label.height > 0 ? s.label.height + 12 : 0, m = ve(q(l), de, s.titleH + de, de), m.minW = s.label.width + 2 * de;
        break;
      case 9:
        m = ve(q(l), Me, Me, Me);
        break;
      case 2:
        s.w = s.h = 14;
        break;
      case 3:
        s.w = s.h = 18;
        break;
      case 4:
        s.w = s.h = 30;
        break;
      case 5:
      case 6: {
        let p = nt(40 * M[l] + 16, 72, 320);
        s.w = L(l) ? p : it, s.h = L(l) ? it : p;
        break;
      }
      case 10:
        break;
      case 7:
        s.label = C(h.label, e, Math.max(W, Xt)), s.w = s.label.width + 24, s.h = s.label.height + 16;
        break;
      default: {
        s.label = C(h.label, U, W, x);
        let p = s.label.width, w = s.label.height + 2 * st;
        if (s.kind === 1) {
          w += 14;
          for (let H of h.description) {
            let _ = C(H === "" ? " " : H, e, W, x);
            s.lines.push(_), _.width > p && (p = _.width), w += _.height;
          }
        }
        s.w = Math.max(p + 2 * Vt, 56), s.h = w;
      }
    }
    m != null || (m = Ie(s.w, s.h)), (s.kind === 0 || s.kind === 1) && (m.span = (L(l) ? s.w : s.h) - 24), y.push(m);
  }
  let K = [], le = [], ae = [], J = new Int32Array(N), j = new Float64Array(N), u = new Float64Array(N), a = /* @__PURE__ */ new Map(), g = (l, s) => {
    if (!y[l].isGroup)
      return !1;
    for (let h = P[s]; h !== -1; h = P[h])
      if (h === l)
        return !0;
    return !1;
  }, b = (l, s) => (a.set(K.length, l), T.push(s ? -1 : 1 / 0), z(void 0, 10, Ie(0, 0, l)));
  for (let l of A.edges) {
    let s = d.get(l.start), h = d.get(l.end);
    if (s === void 0 || h === void 0)
      continue;
    let k = C(l.label, e, W), x = k.width > 0 ? k.width + 12 : 0;
    s === h ? (J[s]++, j[s] = Math.max(j[s], x), u[s] += k.height) : g(s, h) ? s = b(s, !0) : g(h, s) && (h = b(h, !1)), ae.push(l), le.push(k), K.push({ src: s, dst: h, minlen: 1, labelW: x, labelH: k.height > 0 ? k.height + 4 : 0, route: [], labelX: 0, labelY: 0 });
  }
  for (let l = 0; l < N; l++) {
    if (o[l] !== -1)
      continue;
    let s = y[l], h = 0;
    if (J[l] > 0) {
      let x = Oe + (J[l] - 1) * 8;
      h = L(l) ? x + j[l] : x * 0.75 + 4 + u[l], s.isGroup || (L(l) ? (s.w += 2 * h, s.h = Math.max(s.h, u[l])) : (s.h += 2 * h, s.w = Math.max(s.w, j[l])), h = 0);
    }
    if (!I[l] && h === 0) {
      s.parent = P[l];
      continue;
    }
    let k = L(l) ? ve("LR", h, 0, 0) : ve("TB", 0, h, h);
    k.parent = P[l], T.push(T[l]), y[l].parent = z(void 0, 10, k);
  }
  for (let l = 0; l < N; l++)
    o[l] !== -1 && (y[l].parent = y[o[l]].parent);
  {
    let l = [];
    for (let m = 0; m < y.length; m++)
      l.push([]);
    let s = [];
    for (let m = 0; m < y.length; m++) {
      let p = y[m].parent;
      p >= 0 ? l[p].push(m) : s.push(m);
    }
    let h = (m) => v[m].kind === 2 ? 0 : 1, k = (m, p) => h(m) - h(p) || (T[m] === T[p] ? 0 : T[m] < T[p] ? -1 : 1) || m - p, x = 0, U = s.sort(k).reverse();
    for (; U.length > 0; ) {
      let m = U.pop();
      y[m].seq = x++;
      let p = l[m].sort(k);
      for (let w = p.length - 1; w >= 0; w--)
        U.push(p[w]);
    }
  }
  let c = gt(y, K, O, { nodeSep: Re(i, "nodeSpacing", Ut), edgeSep: Wt, rankSep: Re(i, "rankSpacing", Bt), portSep: 20, tracks: R === "step" || R === "stepBefore" || R === "stepAfter", straight: R === "linear", headRoom: $e("arrow_point") }), E = Math.ceil(c.width + 2 * S), Q = Math.ceil(c.height + 2 * S), He = [], Se = /* @__PURE__ */ new Map();
  for (let l of K) {
    let s = l.route;
    for (let h = 3; h < s.length - 3; h += 3) {
      let k = Math.round(s[h + 1]), x = Se.get(k);
      x ? x.push(s[h]) : Se.set(k, [s[h]]);
    }
  }
  let ge = [];
  for (let l = 0; l < y.length; l++)
    ge.push([]);
  let oe = [];
  for (let l = 0; l < y.length; l++) {
    let s = y[l].parent;
    s >= 0 ? ge[s].push(l) : oe.push(l);
  }
  let ht = oe.slice();
  for (let l = 0; l < oe.length; l++)
    for (let s of ge[oe[l]])
      oe.push(s);
  let Te = "", me = "", Fe = "", Ge = "", Ne = (l, s, h, k, x) => {
    let U = l.filter((w) => v[w].kind === 9);
    if (U.length < 2)
      return;
    let m = (w, H) => H ? y[w].x - y[w].w / 2 : y[w].y - y[w].h / 2, p = (w, H) => H ? y[w].x + y[w].w / 2 : y[w].y + y[w].h / 2;
    for (let w of [!0, !1]) {
      let H = U.slice().sort(($, B) => m($, w) - m(B, w) || $ - B), _ = !0;
      for (let $ = 1; $ < H.length; $++)
        p(H[$ - 1], w) > m(H[$], w) + 0.5 && (_ = !1);
      if (_) {
        for (let $ = 1; $ < H.length; $++) {
          let B = G((p(H[$ - 1], w) + m(H[$], w)) / 2 + S);
          me += `<path class="pele-divider" d="M${w ? `${B},${G(h)}V${G(x)}` : `${G(s)},${B}H${G(k)}`}"/>`;
        }
        return;
      }
    }
    for (let w of U) {
      let H = y[w];
      me += we(H.x - H.w / 2 + S, H.y - H.h / 2 + S, H.w, H.h, ` class="pele-divider" rx="${Le}"`);
    }
  };
  Ne(ht, S / 2, S / 2, E - S / 2, Q - S / 2);
  for (let l of oe) {
    let s = v[l], h = s.node, k = s.style;
    if (h === void 0 || k === void 0 || s.kind >= 9)
      continue;
    let x = y[l], U = x.x + S, m = x.y + S, p = s.w, w = s.h, H = ` class="pele-label"${k.text}`, _;
    switch (s.kind) {
      case 8: {
        let F = U - x.w / 2, Y = m - x.h / 2;
        _ = we(F, Y, x.w, x.h, ` rx="${Le}" fill="var(--_a)" fill-opacity="0.5" stroke="var(--_b)"${k.shape}`), s.titleH > 0 && (_ += `<path d="M${G(F)},${G(Y + s.titleH)}H${G(F + x.w)}"${Ae}${k.line}/>` + pe(s.label, Qt(x, s.label.width, Se) + S, Y + s.titleH / 2, ` class="pele-cluster-label"${k.text}`, V)), Ne(ge[l], F, Y + s.titleH, F + x.w, Y + x.h);
        break;
      }
      case 2:
        _ = `<circle r="7" fill="var(--_l)"${k.shape}/>`;
        break;
      case 3:
        _ = `<circle r="8.5" fill="var(--_bg)" stroke="var(--_l)"${k.line}/><circle r="5" fill="var(--_l)"${k.shape}/>`;
        break;
      case 4:
        _ = `<polygon points="0,${G(-w / 2)} ${G(p / 2)},0 0,${G(w / 2)} ${G(-p / 2)},0"${lt}${k.shape}/>`;
        break;
      case 5:
      case 6:
        _ = we(-p / 2, -w / 2, p, w, ` rx="2" fill="var(--_l)"${k.shape}`);
        break;
      case 7: {
        let F = G(p / 2), Y = G(w / 2), Z = G(p / 2 - rt), fe = G(rt - w / 2);
        _ = `<path d="M-${F},-${Y}H${Z}L${F},${fe}V${Y}H-${F}Z" fill="var(--_bg)" stroke="var(--_b)"/><path d="M${Z},-${Y}V${fe}H${F}"${Ae}/>` + pe(s.label, 0, 0, ` class="pele-label" font-size="${e}" fill="var(--_m)"`, V);
        break;
      }
      default: {
        if (_ = we(-p / 2, -w / 2, p, w, ` rx="${G(Math.min(Le, w / 2))}"${lt}${k.shape}`), s.kind === 0) {
          _ += pe(s.label, 0, 0, H, V);
          break;
        }
        let F = st - w / 2 + s.label.height;
        _ += `<path d="M${G(-p / 2)},${G(F + 6)}H${G(p / 2)}"${Ae}${k.line}/>` + pe(s.label, 0, F - s.label.height / 2, H, V), F += 14;
        for (let Y of s.lines)
          _ += pe(Y, 0, F + Y.height / 2, ` class="pele-state-description" font-size="${e}"${k.text}`, V), F += Y.height;
      }
    }
    let $ = t.links.get(h.id);
    if ($) {
      let F = kt(ot($.tooltip));
      F && (_ = `<title>${Dt(F)}</title>` + _), _ = yt(_, Ct(ot($.url)), h.id, He, r, ' target="_blank"');
    }
    let B = `<g class="${qt[s.kind]}${$t(h.cssClasses.replace(zt, ""))}" data-id="${et(h.id)}"`;
    s.kind === 8 ? Te += `${B}>${_}</g>` : s.kind === 7 ? Ge += `${B} transform="translate(${G(U)},${G(m)})">${_}</g>` : Fe += `${B} transform="translate(${G(U)},${G(m)})">${_}</g>`;
  }
  let Ye = (l, s, h) => {
    let k = y[h];
    if (k.isGroup)
      return;
    let x = v[h], U = x.kind === 5 || x.kind === 6, m = s === 0 ? 3 : s - 3;
    for (let p of [1, 0]) {
      let w = p ? k.h : k.w, H = p ? x.h : x.w, _ = p ? x.w : x.h, $ = (p ? k.y : k.x) + S, B = (p ? k.x : k.y) + S, F = l[s + p] - $;
      if (!(Math.abs(Math.abs(F) - w / 2) >= 0.5)) {
        l[s + p] -= Math.sign(F) * (w - H) / 2, U && _ > H && (l[s + 1 - p] = nt(l[m + 1 - p], B - _ / 2 + 6, B + _ / 2 - 6));
        return;
      }
    }
  }, _e = xt();
  for (let l = 0; l < K.length; l++) {
    let s = K[l];
    s.src === s.dst || s.route.length < 6 || ae[l].pattern === "dashed" || _e.add(s.dst, De(s.route, s.route.length - 3, y[s.dst]), "arrow_point");
  }
  let xe = "", Ee = "", ft = new Int32Array(N), je = new Float64Array(N);
  for (let l = 0; l < K.length; l++) {
    let s = K[l], h = ae[l], k = le[l], x = h.pattern === "dashed", U = x ? "none" : "arrow_point", m;
    if (s.src === s.dst) {
      let p = y[s.src], w = v[s.src], H = ft[s.src]++, _ = L(s.src), $ = p.isGroup ? p.w : w.w, B = p.isGroup ? p.h : w.h, F = (_ ? $ : B) / 2, Y = Math.max(Math.min((_ ? B : $) / 2 - 4, 8 + H * 6), 2), Z = Oe + H * 8, fe = $e(U) / (Math.hypot(Z, Y) || 1), ye = (ne, ce) => p.x + S + (_ ? F + ne : -ce), Ce = (ne, ce) => p.y + S + (_ ? ce : F + ne), be = (ne, ce) => `${G(ye(ne, ce))},${G(Ce(ne, ce))}`;
      m = { d: `M${be(0, -Y)}C${be(Z, -2 * Y)} ${be(Z, 2 * Y)} ${be(Z * fe, Y + Y * fe)}`, sx: 0, sy: 0, sdx: 0, sdy: 0, ex: ye(0, Y), ey: Ce(0, Y), edx: ye(-Z, -Y) - ye(0, 0), edy: Ce(-Z, -Y) - Ce(0, 0) };
      let ze = Math.hypot(m.edx, m.edy) || 1;
      m.edx /= ze, m.edy /= ze;
      let Ke = Oe + (J[s.src] - 1) * 8, qe = je[s.src] + k.height / 2;
      je[s.src] += k.height, s.labelX = _ ? p.x + F + Ke + 4 + s.labelW / 2 : p.x, s.labelY = _ ? p.y - u[s.src] / 2 + qe : p.y + F + Ke * 0.75 + 4 + qe;
    } else {
      let p = s.route.slice(), w = _e.of(s.src, De(p, 0, y[s.src])), H = _e.of(s.dst, De(p, p.length - 3, y[s.dst]));
      for (let $ = 0; $ < p.length; $ += 3)
        p[$] += S, p[$ + 1] += S;
      Ye(p, 0, s.src), Ye(p, p.length - 3, s.dst);
      let _ = a.get(l);
      if (_ !== void 0 && p.length >= 6) {
        let $ = y[_], B = v[s.src].kind === 10, F = B ? 0 : p.length - 3, Y = ($.dir === "TB" || $.dir === "LR") === B, Z = at($.dir) ? [p[F], $.y + S + (Y ? v[_].titleH - $.h / 2 : $.h / 2), 0] : [$.x + S + (Y ? -$.w / 2 : $.w / 2), p[F + 1], 1];
        p = B ? Z.concat(p) : p.concat(Z);
      }
      m = St(p, typeof R == "string" ? R : void 0, 0, $e(U), w, H);
    }
    if (xe += `<g class="pele-edge ${x ? 'pele-note-edge" stroke="var(--_b)" stroke-dasharray="3 4' : "pele-transition"}" data-id="${et(h.id)}"><path d="${m.d}"/>` + Tt(U, m.ex, m.ey, m.edx, m.edy, "var(--_l)") + "</g>", k.width > 0) {
      let p = s.labelX + S, w = s.labelY + S;
      Ee += _t(h.id, k, p, w, "", V);
    }
  }
  let he = mt(t.title, D, n, S, E, Q, (Te ? `<g class="pele-clusters">${Te}</g>` : "") + (me ? `<g class="pele-dividers" stroke-dasharray="4 4"${Ae}>${me}</g>` : "") + (xe ? `<g class="pele-edges" fill="none" stroke="var(--_l)" stroke-linecap="round">${xe}</g>` : "") + (Ee ? `<g class="pele-edge-labels" font-size="${e}">${Ee}</g>` : "") + `<g class="pele-nodes">${Fe}${Ge}</g>`);
  return { svg: Mt("state", he.width, he.height, n, r, t, he.content), width: he.width, height: he.height, links: He };
}
function Qt(t, i, r) {
  let f = r.get(Math.round(t.y - t.h / 2));
  if (f === void 0 || i === 0)
    return t.x;
  let A = t.x - t.w / 2, R = i / 2, n = t.x, e = -1;
  for (let D of [t.x, A + de + R, A + t.w - de - R]) {
    let W = 1 / 0;
    for (let S of f)
      S > A && S < A + t.w && (W = Math.min(W, Math.abs(S - D) - R));
    if (W >= 6)
      return D;
    W > e + 0.5 && (e = W, n = D);
  }
  return n;
}
var ns = { type: "state", math: !0, parse(t, i, r) {
  let f = new Rt();
  return r && (f.title = r), Pt(t, f), f;
}, render: Jt };
export {
  ns as state
};
//# sourceMappingURL=J7FQ7VDA-d0b55ab2.js.map

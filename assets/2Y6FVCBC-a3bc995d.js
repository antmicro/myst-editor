var ce = Object.defineProperty;
var oe = (t, a, s) => a in t ? ce(t, a, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[a] = s;
var D = (t, a, s) => (oe(t, typeof a != "symbol" ? a + "" : a, s), s);
import { g as de } from "./ECH2OJJK-8814648a.js";
import { R as ue, P as fe, V as le } from "./XQLH73R6-5278eaeb.js";
import { a as _t, V as qt, d as pe, e as Mt, i as nt } from "./lazy-950901f8.js";
import { p as be, h as jt } from "./DKTLEL5E-e2b762b2.js";
import { O as Gt, G as ye, L as pt } from "./YTAM2TF7-f178d8af.js";
import { e as ct, u as ge, L as Ht, x as I, f as me, V as St, m as we, a as $t } from "./3G3HCGVE-09704139.js";
var Qt = 1e5;
function xe(t) {
  switch (t) {
    case "[]":
      return "square";
    case "()":
      return "round";
    case "(())":
      return "circle";
    case ">]":
      return "rect_left_inv_arrow";
    case "{}":
      return "diamond";
    case "{{}}":
      return "hexagon";
    case "([])":
      return "stadium";
    case "[[]]":
      return "subroutine";
    case "[()]":
      return "cylinder";
    case "((()))":
      return "doublecircle";
    case "[//]":
      return "lean_right";
    case "[\\\\]":
      return "lean_left";
    case "[/\\]":
      return "trapezoid";
    case "[\\/]":
      return "inv_trapezoid";
    case "<[]>":
      return "block_arrow";
    default:
      return "na";
  }
}
function ke(t) {
  switch (t.trim().slice(-1)) {
    case "x":
      return "arrow_cross";
    case "o":
      return "arrow_circle";
    case ">":
      return "arrow_point";
    default:
      return "";
  }
}
function Me(t) {
  switch (t.trim().charAt(0)) {
    case "x":
      return "arrow_cross";
    case "o":
      return "arrow_circle";
    case "<":
      return "arrow_point";
    default:
      return "arrow_open";
  }
}
function Se(t) {
  return t.includes("==") ? "thick" : "normal";
}
function Ce(t) {
  return t.includes(".-") ? "dotted" : "solid";
}
function Jt(t, a) {
  var n;
  let s = t.flat(), h = -1;
  for (let l of s)
    if (l.type === "column-setting") {
      h = (n = l.columns) != null ? n : -1;
      break;
    }
  return { list: s, at: 0, parent: a, children: [], columns: h };
}
var _e = class {
  constructor(t = {}) {
    D(this, "type", "block");
    D(this, "title");
    D(this, "root", { id: "root", type: "composite", children: [], columns: -1 });
    D(this, "blocks", []);
    D(this, "edges", []);
    D(this, "classes", /* @__PURE__ */ new Map());
    D(this, "byId", /* @__PURE__ */ new Map());
    D(this, "typeStr2Type", xe);
    D(this, "edgeStrToEdgeData", ke);
    D(this, "edgeStrToEdgeStartData", Me);
    D(this, "edgeStrToThickness", Se);
    D(this, "edgeStrToPattern", Ce);
    D(this, "warn");
    D(this, "pending", /* @__PURE__ */ new Set());
    D(this, "edgeCount", /* @__PURE__ */ new Map());
    D(this, "ids", 0);
    D(this, "colors", 0);
    D(this, "spaces", 0);
    this.warn = t.warn;
  }
  generateId() {
    return "id-" + ++this.ids;
  }
  addStyleClass(t, a = "") {
    let s = this.classes.get(t);
    s || (s = { id: t, styles: [], textStyles: [] }, this.classes.set(t, s));
    for (let h of a.split(",")) {
      let n = h.indexOf(";"), l = (n === -1 ? h : h.slice(0, n) + h.slice(n + 1)).trim();
      h.includes("color") && s.textStyles.push(l.replace("fill", "bgFill").replace("color", "fill")), s.styles.push(l);
    }
  }
  addStyle2Node(t, a = "") {
    this.named(t).styles = a.split(",");
  }
  setCssClass(t, a) {
    var s, h;
    for (let n of t.split(","))
      ((h = (s = this.named(n.trim())).classes) != null ? h : s.classes = []).push(a);
  }
  named(t) {
    let a = this.byId.get(t);
    return a === void 0 && (a = { id: t, type: "na", children: [] }, this.byId.set(t, a), this.pending.add(t)), a;
  }
  setHierarchy(t) {
    var s, h, n, l, i, e, w;
    let a = [Jt(t, this.root)];
    for (; a.length > 0; ) {
      let u = a[a.length - 1];
      if (u.at === u.list.length) {
        u.parent.children = u.children, a.pop();
        continue;
      }
      let r = u.list[u.at++];
      switch (u.columns > 0 && r.type !== "column-setting" && typeof r.widthInColumns == "number" && r.widthInColumns > u.columns && ((s = this.warn) == null || s.call(this, `Block ${r.id} width ${r.widthInColumns} exceeds configured column width ${u.columns}`)), r.type) {
        case "classDef":
          this.addStyleClass(r.id, r.css);
          continue;
        case "applyClass":
          this.setCssClass(r.id, (h = r.styleClass) != null ? h : "");
          continue;
        case "applyStyles":
          r.stylesStr && this.addStyle2Node(r.id, r.stylesStr);
          continue;
        case "column-setting":
          u.parent.columns = (n = r.columns) != null ? n : -1;
          continue;
        case "edge": {
          let g = ((l = this.edgeCount.get(r.id)) != null ? l : 0) + 1;
          this.edgeCount.set(r.id, g), r.id = g + "-" + r.id, this.edges.push(r);
          continue;
        }
      }
      (i = r.id) != null || (r.id = this.generateId()), r.label || (r.label = r.type === "composite" ? "" : r.id);
      let f = this.byId.get(r.id), o = f === void 0 || this.pending.delete(r.id);
      o ? (f && (r.classes = f.classes, r.styles = f.styles), r.type === "composite" && (r.colorIndex = this.colors++), this.byId.set(r.id, r)) : (r.type !== "na" && (f.type = r.type), r.label !== r.id && (f.label = r.label));
      let x = r.children;
      if (r.children = [], r.type === "space") {
        let g = (e = r.width) != null ? e : 1;
        if (!(g <= Qt - this.spaces))
          throw new _t(`A block diagram can hold at most ${Qt} space blocks.`, "limit", { type: "block" });
        this.spaces += Math.max(g, 0);
        for (let k = 0; k < g; k++) {
          let A = { ...r, id: r.id + "-" + k, children: [] };
          this.byId.set(A.id, A), u.children.push(A);
        }
      } else
        o && u.children.push(r);
      x && x.length > 0 && a.push(Jt(x, r));
    }
    this.blocks = (w = this.root.children) != null ? w : [];
  }
}, Zt = ["$end", "INVALID", "BLOCK_DIAGRAM_KEY", "id-block", "COLUMNS", "MD_STR", "STR", "SPACE_BLOCK", "DEFAULT", "LINKSTYLE", "INTERPOLATE", "classDef", "DEFAULT_CLASSDEF_ID", "CLASSDEF_ID", "CLASSDEF_STYLEOPTS", "class", "CLASSENTITY_IDS", "STYLECLASS", "style", "STYLE_ENTITY_IDS", "STYLE_DEFINITION_DATA", "acc_title", "acc_title_value", "acc_descr", "acc_descr_value", "acc_descr_multiline_value", "end", "NODE_DSTART", "NODE_DEND", "BLOCK_ARROW_START", "BLOCK_ARROW_END", "DIR", "NODE_ID", "LINK", "START_LINK", "LINK_LABEL", "SIZE", "EOF"], Ae = ["right", "left", "x", "y", "up", "down"], ie = new Uint8Array(128);
for (let t of [9, 10, 11, 12, 13, 32, 40, 41, 45, 58, 60, 61, 62, 91, 123, 125])
  ie[t] = 1;
function Ie(t) {
  let a = t.length, s = [], h = [], n = [], l = [], i = 0, e = 0, w = (b, d, c) => (s.push(b), h.push(d), n.push(e), e = c, !0), u = (b, d) => w(b, t.slice(e, d), d), r = (b) => {
    l.push(i), i = b;
  }, f = () => {
    l.length > 0 && (i = l.pop());
  }, o = (b) => {
    for (; b < a && Mt(t.charCodeAt(b)); )
      b++;
    return b;
  }, x = (b) => {
    for (; b < a; ) {
      let d = t.charCodeAt(b);
      if (d < 48 || d > 57)
        break;
      b++;
    }
    return b;
  }, g = (b) => {
    for (; b < a && nt(t.charCodeAt(b)); )
      b++;
    return b;
  }, k = (b) => t.startsWith(b, e) && !nt(t.charCodeAt(e + b.length)), A = () => (t.charCodeAt(e + 1) === 96 ? (r(2), e += 2) : (r(1), e++), !0), N = (b) => {
    if (t.charCodeAt(b) !== 46)
      return -1;
    do
      b++;
    while (t.charCodeAt(b) === 46);
    if (t.charCodeAt(b) !== 45)
      return -1;
    let d = t.charCodeAt(b + 1);
    return d === 120 || d === 111 || d === 62 ? b + 2 : b + 1;
  }, T = (b) => {
    let d = t.charCodeAt(b);
    (d === 120 || d === 111 || d === 60) && b++;
    let c = t.charCodeAt(b);
    if (c === 46)
      return N(b);
    if (c !== 45 && c !== 61)
      return -1;
    let y = b + 1;
    for (; t.charCodeAt(y) === c; )
      y++;
    if (y - b === 1)
      return c === 45 ? N(y) : -1;
    let M = t.charCodeAt(y);
    return M === 120 || M === 111 || M === 62 ? y + 1 : y - b >= 3 ? y : -1;
  }, R = () => {
    let b = T(e);
    if (b >= 0)
      return u(33, o(b));
    let d = t.charCodeAt(e) === 60 ? e + 1 : e, c = t.charCodeAt(d), y = t.charCodeAt(d + 1);
    return c === 45 && (y === 45 || y === 46) || c === 61 && y === 61 ? (r(6), u(34, o(d + 2))) : !1;
  }, L = (b) => {
    let d = t.indexOf(`
`, e);
    return d === -1 && (d = a), f(), u(b, d);
  }, P = (b, d) => {
    let c = g(e);
    if (c === e)
      return !1;
    for (; t.charCodeAt(c) === 44; ) {
      let y = o(c + 1), M = g(y);
      if (M === y)
        break;
      c = M;
    }
    return i = d, u(b, c);
  }, F = (b) => {
    if (Mt(b))
      return e = o(e + 1), !0;
    let d;
    switch (b) {
      case 98:
        if (t.startsWith("block", e)) {
          if (k("block-beta"))
            return u(2, e + 10);
          if (t.charCodeAt(e + 5) === 58)
            return u(3, e + 6);
          if (!nt(t.charCodeAt(e + 5)))
            return u(2, e + 5);
        }
        break;
      case 99:
        if (t.startsWith("columns", e)) {
          if (d = o(e + 7), d > e + 7) {
            if (t.startsWith("auto", d) && !nt(t.charCodeAt(d + 4)))
              return w(4, "-1", d + 4);
            let c = x(d);
            if (c > d)
              return w(4, t.slice(d, c), c);
          }
        } else if (t.startsWith("class", e)) {
          let c = t.startsWith("Def", e + 5), y = c ? e + 8 : e + 5;
          if (d = o(y), d > y)
            return r(c ? 7 : 9), u(c ? 11 : 15, d);
        }
        break;
      case 34:
        return A();
      case 115:
        if (t.startsWith("space", e)) {
          if (t.charCodeAt(e + 5) === 58) {
            let c = x(e + 6);
            if (c > e + 6)
              return w(7, t.slice(e + 6, c), c);
          }
          if (!nt(t.charCodeAt(e + 5)))
            return w(7, "1", e + 5);
        } else if (t.startsWith("style", e) && (d = o(e + 5), d > e + 5))
          return r(11), u(18, d);
        break;
      case 100:
        if (k("default"))
          return u(8, e + 7);
        break;
      case 108:
        if (k("linkStyle"))
          return u(9, e + 9);
        break;
      case 105:
        if (k("interpolate"))
          return u(10, e + 11);
        break;
      case 97:
        if (t.startsWith("accTitle", e)) {
          if (d = o(e + 8), t.charCodeAt(d) === 58)
            return r(13), u(21, o(d + 1));
        } else if (t.startsWith("accDescr", e)) {
          d = o(e + 8);
          let c = t.charCodeAt(d);
          if (c === 58)
            return r(14), u(23, o(d + 1));
          if (c === 123)
            return r(15), e = o(d + 1), !0;
        }
        break;
      case 101:
        if (k("end"))
          return u(26, o(e + 3));
        break;
      case 45:
        return t.charCodeAt(e + 1) === 41 ? (r(3), u(27, e + 2)) : R();
      case 61:
        return R();
      case 60:
        return t.charCodeAt(e + 1) === 91 ? (r(4), u(29, e + 2)) : R();
      case 40: {
        let c = t.charCodeAt(e + 1), y = c === 45 || c === 91 ? 2 : c === 40 ? t.charCodeAt(e + 2) === 40 ? 3 : 2 : 1;
        return r(3), u(27, e + y);
      }
      case 41:
      case 123:
        return r(3), u(27, t.charCodeAt(e + 1) === b ? e + 2 : e + 1);
      case 62:
        return r(3), u(27, e + 1);
      case 91: {
        let c = t.charCodeAt(e + 1);
        return r(3), u(27, c === 91 || c === 124 || c === 40 || c === 92 || c === 47 ? e + 2 : e + 1);
      }
      case 58: {
        let c = x(e + 1);
        return c > e + 1 ? w(36, t.slice(e + 1, c), c) : !1;
      }
    }
    for (d = e; d < a; ) {
      let c = t.charCodeAt(d);
      if (c < 128 ? ie[c] === 1 : Mt(c))
        break;
      d++;
    }
    return d > e && u(32, d);
  }, z = (b) => {
    let d = t.charCodeAt(e + 1), c = 0;
    switch (b) {
      case 34:
        return A();
      case 40:
        c = d === 45 ? 2 : d === 40 ? t.charCodeAt(e + 2) === 40 ? 3 : 2 : 1;
        break;
      case 41:
        c = d === 41 ? t.charCodeAt(e + 2) === 41 ? 3 : 2 : d === 93 ? 2 : 1;
        break;
      case 125:
        c = d === 125 ? 2 : 1;
        break;
      case 45:
        c = d === 41 ? 2 : 0;
        break;
      case 93:
        c = d === 93 || d === 41 || d === 62 ? 2 : 1;
        break;
      case 92:
      case 47:
        c = d === 93 ? 2 : 0;
        break;
    }
    return c === 0 ? !1 : (f(), u(28, e + c));
  }, G = (b) => {
    if (b === 41)
      return f(), f(), w(30, "]>", o(e + 1));
    let d = o(b === 44 ? e + 1 : e);
    for (let c of Ae)
      if (t.startsWith(c, d)) {
        let y = o(d + c.length);
        return w(31, t.slice(b === 44 ? d : e, y), y);
      }
    return !1;
  };
  for (; ; ) {
    if (e >= a) {
      let c = -1;
      switch (i) {
        case 0:
          c = 37;
          break;
        case 1:
          c = 6;
          break;
        case 8:
          c = 14;
          break;
        case 10:
          c = 17;
          break;
        case 12:
          c = 20;
          break;
        case 13:
          c = 22;
          break;
        case 14:
          c = 24;
          break;
        case 15:
          c = 25;
          break;
      }
      e = a, c !== -1 && w(c, "", a);
      break;
    }
    let b = t.charCodeAt(e), d = !0;
    switch (i) {
      case 0:
        d = F(b);
        break;
      case 1:
        if (b === 34)
          f(), e++;
        else {
          let c = t.indexOf('"', e);
          u(6, c === -1 ? a : c);
        }
        break;
      case 2:
        if (b === 96)
          d = t.charCodeAt(e + 1) === 34, d && (f(), e += 2);
        else if (b === 34)
          d = !1;
        else {
          let c = e + 1;
          for (; c < a; ) {
            let y = t.charCodeAt(c);
            if (y === 96 || y === 34)
              break;
            c++;
          }
          u(5, c);
        }
        break;
      case 3:
        d = z(b);
        break;
      case 4:
        if (b === 34)
          A();
        else if (b === 93 && t.charCodeAt(e + 1) === 62) {
          let c = o(e + 2);
          d = t.charCodeAt(c) === 40, d && (r(5), e = c + 1);
        } else
          d = !1;
        break;
      case 5:
        d = G(b);
        break;
      case 6:
        if (b === 34)
          t.charCodeAt(e + 1) === 96 ? A() : (u(35, e + 1), r(1));
        else {
          let c = T(o(e));
          d = c >= 0, d && (f(), u(33, o(c)));
        }
        break;
      case 7: {
        let c = 12, y = t.startsWith("DEFAULT", e) ? e + 7 : e, M = o(y);
        (y === e || M === y) && (c = 13, y = g(e), M = o(y)), d = y > e && M > y, d && (i = 8, u(c, M));
        break;
      }
      case 8:
        L(14);
        break;
      case 9:
        d = P(16, 10);
        break;
      case 10:
        L(17);
        break;
      case 11:
        d = P(19, 12);
        break;
      case 12:
        L(20);
        break;
      case 13:
        L(22);
        break;
      case 14:
        L(24);
        break;
      case 15:
        if (b === 125)
          f(), e++;
        else {
          let c = t.indexOf("}", e);
          u(25, c === -1 ? a : c);
        }
        break;
    }
    if (!d)
      return s.push(1), h.push(""), n.push(e), { types: s, texts: h, starts: n };
  }
  return s.push(0), h.push(""), n.push(a), { types: s, texts: h, starts: n };
}
var ot = "'NODE_ID', 'COLUMNS', 'SPACE_BLOCK', 'BLOCK_DIAGRAM_KEY', 'id-block', 'classDef', 'class', 'style'";
function Xt(t) {
  let a = t[t.length - 1];
  return Array.isArray(a) ? (t.pop(), t.concat(a)) : t;
}
function Te(t, a) {
  let { types: s, texts: h, starts: n } = Ie(t), l = 0, i = (o) => {
    let x = s[l];
    throw x === 1 ? qt("block", t, n[l], "", !0) : qt("block", t, n[l], `Expecting ${o}, got '${Zt[x]}'`);
  }, e = (o) => (s[l] !== o && i(`'${Zt[o]}'`), h[l++]), w = () => {
    let o = e(32);
    if (s[l] === 27) {
      let x = h[l++], g = e(6);
      return { id: o, label: g, typeStr: x + e(28) };
    }
    if (s[l] === 29) {
      let x = h[l++], g = e(6), k = [e(31)];
      for (; s[l] === 31; )
        k.push(h[l++]);
      return { id: o, label: g, typeStr: x + e(30), directions: k };
    }
    return { id: o };
  }, u = () => {
    let o = w(), x = s[l] === 36 ? parseInt(h[l++], 10) : 1, g = { id: o.id, label: o.label, type: a.typeStr2Type(o.typeStr), directions: o.directions, widthInColumns: x }, k;
    for (; s[l] === 33 || s[l] === 34; ) {
      let A = "";
      s[l++] === 34 && (e(35), A = e(6), e(33));
      let N = h[l - 1], T = w(), R = a.edgeStrToEdgeData(N), L = a.edgeStrToEdgeStartData(N), P = a.edgeStrToThickness(N), F = a.edgeStrToPattern(N);
      k != null || (k = [{ id: g.id, label: g.label, type: g.type, directions: g.directions }]), g = { id: T.id, label: T.label, type: a.typeStr2Type(T.typeStr), directions: T.directions }, k.push({ id: k[k.length - 1].id + "-" + T.id, start: k[k.length - 1].id, end: T.id, label: A, type: "edge", thickness: P, pattern: F, directions: T.directions, arrowTypeEnd: R, arrowTypeStart: L }, g);
    }
    return k != null ? k : g;
  };
  e(2);
  let r = [], f = [];
  for (; ; )
    switch (s[l]) {
      case 32:
        f.push(u());
        break;
      case 4:
        f.push({ type: "column-setting", columns: parseInt(h[l++], 10) });
        break;
      case 7: {
        let o = parseInt(h[l++], 10);
        f.push({ id: a.generateId(), type: "space", label: "", width: o, children: [] });
        break;
      }
      case 2:
        l++, r.push({ list: f, header: void 0 }), f = [];
        break;
      case 3:
        l++, s[l] !== 32 && i("'NODE_ID'"), r.push({ list: f, header: u() }), f = [];
        break;
      case 26: {
        let o = r.pop();
        if (o === void 0 || f.length === 0)
          return i(ot);
        l++;
        let x = a.generateId(), g = Xt(f);
        f = o.list, f.push(o.header === void 0 ? { id: x, type: "composite", label: "", children: g } : { ...o.header, type: "composite", children: g });
        break;
      }
      case 11: {
        l++;
        let o = e(13).trim();
        f.push({ type: "classDef", id: o, css: e(14).trim() });
        break;
      }
      case 15: {
        l++;
        let o = e(16).trim();
        f.push({ type: "applyClass", id: o, styleClass: e(17).trim() });
        break;
      }
      case 18: {
        l++;
        let o = e(19).trim();
        f.push({ type: "applyStyles", id: o, stylesStr: e(20).trim() });
        break;
      }
      case 37:
        r.length > 0 && i(ot + ", 'end'"), f.length === 0 && i(ot), a.setHierarchy(Xt(f));
        return;
      default:
        i(f.length === 0 ? ot : ot + (r.length > 0 ? ", 'end'" : ", 'EOF'"));
    }
}
var H = 1, $ = 2, Q = 4, J = 8, lt = 7, bt = 20, tt = 12;
function Ee(t) {
  let a = 0;
  if (t)
    for (let s of t)
      switch (s.trim()) {
        case "right":
          a |= H;
          break;
        case "left":
          a |= $;
          break;
        case "up":
          a |= Q;
          break;
        case "down":
          a |= J;
          break;
        case "x":
          a |= H | $;
          break;
        case "y":
          a |= Q | J;
          break;
      }
  return a;
}
var X = (t, a) => t & a ? 1 : 0;
function yt(t) {
  return t !== 0 && (t & (Q | J)) === 0 ? "x" : t !== 0 && (t & (H | $)) === 0 ? "y" : "";
}
function te(t, a, s) {
  let h = yt(t), n = X(t, $) - X(t, H), l = X(t, Q) - X(t, J);
  if (h === "x") {
    let i = Math.max(s + 8, 14) + 2 * lt, e = Math.min(i / 2, bt);
    return { w: Math.max(a + 12, 16) + e * (t === (H | $) ? 2 : 1), h: i, dx: n * e / 2, dy: 0 };
  }
  if (h === "y") {
    let i = Math.max(a + 16, 14) + 2 * lt, e = Math.min(i / 2, bt);
    return { w: i, h: Math.max(s + 8, 16) + e * (t === (Q | J) ? 2 : 1), dx: 0, dy: l * e / 2 };
  }
  return { w: Math.max(a + 16, 24) + tt * (X(t, $) + X(t, H)), h: Math.max(s + 8, 24) + tt * (X(t, Q) + X(t, J)), dx: n * tt / 2, dy: l * tt / 2 };
}
function ve(t, a, s, h) {
  let n = yt(t), l = a / 2, i = s / 2, e;
  if (n === "x") {
    let u = Math.min(i, bt), r = i - lt, f = t & $ ? -l + u : -l, o = t & H ? l - u : l;
    e = [f, -r, o, -r], t & H && e.push(o, -i, l, 0, o, i), e.push(o, r, f, r), t & $ && e.push(f, i, -l, 0, f, -i);
  } else if (n === "y") {
    let u = Math.min(l, bt), r = l - lt, f = t & Q ? -i + u : -i, o = t & J ? i - u : i;
    e = [r, f, r, o], t & J && e.push(l, o, 0, i, -l, o), e.push(-r, o, -r, f), t & Q && e.push(-l, f, 0, -i, l, f);
  } else {
    let u = t & $ ? -l + tt : -l, r = t & H ? l - tt : l, f = t & Q ? -i + tt : -i, o = t & J ? i - tt : i, x = (u + r) / 2, g = (f + o) / 2, k = Math.min(10, (r - u) / 2), A = Math.min(10, (o - f) / 2);
    e = [u, f], t & Q && e.push(x - k, f, x, -i, x + k, f), e.push(r, f), t & H && e.push(r, g - A, l, g, r, g + A), e.push(r, o), t & J && e.push(x + k, o, x, i, x - k, o), e.push(u, o), t & $ && e.push(u, g + A, -l, g, u, g - A);
  }
  let w = "";
  for (let u = 0; u < e.length; u += 2)
    w += (u ? " " : "") + I(e[u]) + "," + I(e[u + 1]);
  return `<polygon points="${w}" stroke-linejoin="round"${h}/>`;
}
var De = 1e3;
function Le(t, a) {
  if (t === 0 || !Number.isInteger(t))
    throw new _t("Columns must be an integer !== 0.", "semantic", { type: "block" });
  if (a < 0 || !Number.isInteger(a))
    throw new _t("Position must be a non-negative integer." + a, "semantic", { type: "block" });
  return t < 0 ? { px: a, py: 0 } : { px: a % t, py: Math.floor(a / t) };
}
function Oe(t, a, s) {
  let h = t.columns, n = [], l = 0, i = 0, e = 0, w = 0;
  for (let r of t.children) {
    let { px: f, py: o } = Le(h, l), x = r.span >= 1 ? Math.min(r.span, De) : 1;
    if (h > 0 && x > h - f && (x = h - f), r.span = x, r.col = f, r.row = o, l += x, f + x > i && (i = f + x), o === n.length && n.push(0), r.children.length === 0 ? n[o] = -1 : n[o] >= 0 && r.nh > n[o] && (n[o] = r.nh), r.space)
      continue;
    let g = (r.nw - a * (x - 1)) / x;
    g > e && (e = g), r.nh > w && (w = r.nh);
  }
  let u = (n.length - 1) * a;
  for (let r = 0; r < n.length; r++)
    n[r] < 0 && (n[r] = w), u += n[r];
  t.cols = i, t.heights = n, t.nw = Math.max(t.nw, i * e + (i - 1) * a + 2 * s), t.nh = u + 2 * s + t.head;
}
function Ne(t, a, s) {
  let { cols: h, heights: n } = t, l = n.length, i = (t.w - 2 * s - (h - 1) * a) / h, e = t.h - 2 * s - t.head - (l - 1) * a, w = 0;
  for (let g of n)
    w += g;
  let u = w > 0 ? e / w : 0, r = w > 0 ? 0 : e / l, f = t.x - t.w / 2 + s, o = t.y - t.h / 2 + s + t.head, x = 0;
  for (let g of t.children) {
    for (; x < g.row; x++)
      o += n[x] * u + r + a;
    g.w = i * g.span + a * (g.span - 1), g.h = n[x] * u + r, g.x = f + g.col * (i + a) + g.w / 2, g.y = o + g.h / 2;
  }
}
function Re(t, a) {
  let s = [t];
  for (let h = 0; h < s.length; h++)
    for (let n of s[h].children)
      s.push(n);
  for (let h = s.length - 1; h >= 0; h--) {
    let n = s[h];
    n.children.length > 0 && Oe(n, a, h === 0 ? 0 : a);
  }
  t.w = t.nw, t.h = t.nh, t.x = t.w / 2, t.y = t.h / 2;
  for (let h = 0; h < s.length; h++) {
    let n = s[h];
    n.children.length > 0 && Ne(n, a, h === 0 ? 0 : a);
  }
  return { width: t.w, height: t.h };
}
var Pe = 12, ee = 200, Ke = 8, ae = ' fill="var(--_s)" stroke="var(--_b)"', We = ' stroke="var(--_b)"', re = [], Be = [], Fe = [], Ye = ["default"], ze = 2e6, Ve = /* @__PURE__ */ new Map([["square", "rect"], ["round", "rounded"], ["circle", "circle"], ["doublecircle", "dbl-circ"], ["diamond", "diam"], ["hexagon", "hex"], ["stadium", "stadium"], ["subroutine", "fr-rect"], ["cylinder", "cyl"], ["rect_left_inv_arrow", "odd"], ["lean_right", "lean-r"], ["lean_left", "lean-l"], ["trapezoid", "trap-b"], ["inv_trapezoid", "trap-t"]]), Ue = /* @__PURE__ */ new Set(["circle", "dbl-circ", "diam"]), qe = /* @__PURE__ */ new Set(["stadium", "hex", "odd", "lean-r", "lean-l", "trap-b", "trap-t"]);
function gt(t) {
  return t.kind === 0 && (t.shape === "circle" || t.shape === "dbl-circ");
}
function rt(t, a, s) {
  let h = t.bw / 2, n = t.bh / 2, l = Math.abs(a - t.x), i = n;
  return gt(t) ? i = Math.sqrt(Math.max(h * h - l * l, 0)) : t.kind === 0 && t.shape === "diam" ? i = n * Math.max(1 - l / h, 0) : t.kind === 0 ? i = n - le(t.shape, t.bw, t.bh, s > 0 ? 2 : 0) : t.kind === 1 && yt(t.mask) === "x" && (i = n - lt), t.y + s * i;
}
function st(t, a, s) {
  let h = t.bw / 2, n = t.bh / 2, l = Math.abs(a - t.y), i = h;
  return gt(t) ? i = Math.sqrt(Math.max(n * n - l * l, 0)) : t.kind === 0 && t.shape === "diam" ? i = h * Math.max(1 - l / n, 0) : t.kind === 0 ? i = h - le(t.shape, t.bw, t.bh, s > 0 ? 1 : 3) : t.kind === 1 && yt(t.mask) === "y" && (i = h - lt), t.x + s * i;
}
function se(t, a, s, h) {
  let n = a - t.x, l = s - t.y, i = t.bw / 2, e = t.bh / 2, w;
  gt(t) ? w = i / (Math.hypot(n, l) || 1) : t.kind === 0 && t.shape === "diam" ? w = 1 / (Math.abs(n) / i + Math.abs(l) / e || 1) : w = Math.min(n === 0 ? 1 / 0 : i / Math.abs(n), l === 0 ? 1 / 0 : e / Math.abs(l)), w === 1 / 0 && (w = 0), h.push(t.x + n * w, t.y + l * w);
}
function je(t, a, s, h, n) {
  let l = n.x - n.bw / 2 + 1, i = n.x + n.bw / 2 - 1, e = n.y - n.bh / 2 + 1, w = n.y + n.bh / 2 - 1;
  if (t < l && s < l || t > i && s > i || a < e && h < e || a > w && h > w)
    return !1;
  if (t === s || a === h)
    return !0;
  let u = s - t, r = h - a, f = (x, g) => Math.sign(u * (g - a) - r * (x - t)), o = f(l, e);
  return o === 0 || f(i, e) !== o || f(i, w) !== o || f(l, w) !== o;
}
function Ct(t, a, s, h) {
  let n = 0;
  for (let l of h)
    if (!(l === a || l === s)) {
      for (let i = 0; i + 3 < t.length; i += 2)
        if (je(t[i], t[i + 1], t[i + 2], t[i + 3], l)) {
          n++;
          break;
        }
    }
  return n;
}
function Ge(t, a, s, h) {
  let n = t.x - t.bw / 2, l = t.x + t.bw / 2, i = t.y - t.bh / 2, e = t.y + t.bh / 2, w = a.x - a.bw / 2, u = a.x + a.bw / 2, r = a.y - a.bh / 2, f = a.y + a.bh / 2, o = Math.max(n, w), x = Math.min(l, u), g = Math.max(i, r), k = Math.min(e, f), A = x - o > 6, N = k - g > 6;
  if (A && N) {
    let y = t.bw * t.bh <= a.bw * a.bh ? t : a, M = y === t ? a : t, V = y.y - y.bh / 2 - (M.y - M.bh / 2), Z = M.y + M.bh / 2 - (y.y + y.bh / 2), dt = y.x - y.bw / 2 - (M.x - M.bw / 2), it = M.x + M.bw / 2 - (y.x + y.bw / 2), et = Math.min(V, Z, dt, it), B;
    return et === Z ? B = [y.x, rt(y, y.x, 1), y.x, M.y + M.bh / 2] : et === V ? B = [y.x, rt(y, y.x, -1), y.x, M.y - M.bh / 2] : et === it ? B = [st(y, y.y, 1), y.y, M.x + M.bw / 2, y.y] : B = [st(y, y.y, -1), y.y, M.x - M.bw / 2, y.y], y === t ? B : [B[2], B[3], B[0], B[1]];
  }
  if (A) {
    let y = Math.min(6, (x - o) / 2), M = Math.min(Math.max((o + x) / 2 + s, o + y), x - y), V = a.y > t.y ? 1 : -1;
    return [M, rt(t, M, V), M, rt(a, M, -V)];
  }
  if (N) {
    let y = Math.min(6, (k - g) / 2), M = Math.min(Math.max((g + k) / 2 + s, g + y), k - y), V = a.x > t.x ? 1 : -1;
    return [st(t, M, V), M, st(a, M, -V), M];
  }
  let T = a.x > t.x ? 1 : -1, R = a.y > t.y ? 1 : -1, L = [st(t, t.y, T), t.y, a.x, t.y, a.x, rt(a, a.x, -R)], P = [t.x, rt(t, t.x, R), t.x, a.y, st(a, a.y, -T), a.y], F = Math.abs(a.x - t.x) >= Math.abs(a.y - t.y), z = F ? L : P;
  if (h === void 0)
    return z;
  let G = Ct(z, t, a, h);
  if (G === 0)
    return z;
  let b = F ? P : L, d = Ct(b, t, a, h);
  if (d < G && (z = b, G = d), G === 0)
    return z;
  let c = [];
  return se(t, a.x, a.y, c), se(a, t.x, t.y, c), Ct(c, t, a, h) < G ? c : z;
}
function He(t, a, s) {
  let h = t.length, n = t[0], l = t[1], i = t[h - 2], e = t[h - 1], w = t[2] - n, u = t[3] - l, r = Math.hypot(w, u);
  w /= r || 1, u /= r || 1;
  let f = i - t[h - 4], o = e - t[h - 3], x = Math.hypot(f, o);
  if (f /= x || 1, o /= x || 1, h === 4 && a + s > r) {
    let k = r / (a + s);
    a *= k, s *= k;
  }
  a = Math.min(a, r), s = Math.min(s, x);
  let g = `M${I(n + w * a)},${I(l + u * a)}`;
  if (h === 6) {
    let k = Math.max(0, Math.min(Ke, r - a, x - s));
    g += `L${I(t[2] - w * k)},${I(t[3] - u * k)}Q${I(t[2])},${I(t[3])} ${I(t[2] + f * k)},${I(t[3] + o * k)}`;
  }
  return g += `L${I(i - f * s)},${I(e - o * s)}`, { d: g, sx: n, sy: l, sdx: -w, sdy: -u, ex: i, ey: e, edx: f, edy: o };
}
function he(t, a) {
  let s = t.bw / 2, h = t.bh / 2, n = Math.max(1, Math.min(10 + 5 * (a - 1), s, h));
  if (gt(t)) {
    let l = t.x + s * Math.SQRT1_2, i = t.y - s * Math.SQRT1_2, e = 2 * Math.asin(Math.min(1, n / (2 * s))), w = (u) => Math.atan2(t.y - s * Math.sin(u) - i, t.x + s * Math.cos(u) - l);
    return [l, i, n, w(Math.PI / 4 + e), w(Math.PI / 4 - e)];
  }
  if (t.kind === 0 && t.shape === "diam") {
    let l = Math.atan2(h, s);
    return [t.x + s / 2, t.y - h / 2, n, l + Math.PI, l];
  }
  return [t.x + s, t.y - h, n, Math.PI, Math.PI / 2];
}
function $e(t, a, s, h) {
  let [n, l, i, e, w] = he(t, a), u = e + s / i, r = w - h / i, f = (r - u) % (2 * Math.PI);
  f <= 0 && (f += 2 * Math.PI);
  let o = n + i * Math.cos(u), x = l + i * Math.sin(u), g = n + i * Math.cos(r), k = l + i * Math.sin(r), A = n + i * Math.cos(e), N = l + i * Math.sin(e), T = n + i * Math.cos(w), R = l + i * Math.sin(w), L = Math.hypot(A - o, N - x), P = Math.hypot(T - g, R - k);
  return { d: `M${I(o)},${I(x)}A${I(i)},${I(i)} 0 ${f > Math.PI ? 1 : 0} 1 ${I(g)},${I(k)}`, sx: A, sy: N, sdx: L > 0 ? (A - o) / L : Math.sin(e), sdy: L > 0 ? (N - x) / L : -Math.cos(e), ex: T, ey: R, edx: P > 0 ? (T - g) / P : -Math.sin(w), edy: P > 0 ? (R - k) / P : Math.cos(w) };
}
var Qe = [0.5, 0.3, 0.7, 0.15, 0.85];
function Je(t, a, s, h, n, l, i) {
  if (i === void 0)
    return 0.5;
  for (let e of Qe) {
    let w = t[a] + (t[a + 2] - t[a]) * e, u = t[a + 1] + (t[a + 3] - t[a + 1]) * e, r = !0;
    for (let f of i)
      if (f !== n && f !== l && Math.abs(w - f.x) < (s + f.bw) / 2 && Math.abs(u - f.y) < (h + f.bh) / 2) {
        r = !1;
        break;
      }
    if (r)
      return e;
  }
  return 0.5;
}
function Ze(t, a, s) {
  return be(s, (h) => Xe(t, a, s, h));
}
function Xe(t, a, s, h) {
  var Tt, Et, vt, Dt, Lt, Ot, Nt, Rt, Pt, Kt, Wt, Bt, Ft;
  let n = (Tt = s.fontSize) != null ? Tt : 16, l = Math.round(n * 0.875), i = (Et = s.measurer) != null ? Et : pe(s.fontFamily, s.fontFamilyMono), e = (vt = s.padding) != null ? vt : 8, w = s.icons, u = (Dt = a.block) == null ? void 0 : Dt.padding, r = Math.min(typeof u == "number" && u >= 0 ? Math.min(u, 200) : Pe, h ? 6 : 1 / 0), f = h ? 80 : ee, o = (p) => {
    let m = [], S = (_) => {
      for (let K of _)
        for (let O of K.split(";"))
          m.push(O);
    };
    for (let _ of p.classes && p.classes.length > 0 ? p.classes : Ye) {
      let K = t.classes.get(_);
      K && S(K.styles);
    }
    return p.styles && S(p.styles), $t(m);
  }, x = (p, m) => {
    var ht, Yt, zt, Vt;
    let S = p.type, _ = S === "space" ? $t(re) : o(p), K = (_.bold ? 1 : 0) | (_.italic ? 2 : 0), O = (ht = _.fontSize) != null ? ht : n, v = 0, C = "", E, W = 0, U = 0, Y = 0, q = 0, ut = 0, j = 0;
    if (S === "space")
      v = 3, E = ct(void 0, !1, i, O, f);
    else if (S === "composite")
      v = 2, E = ct(p.label, !1, i, O, h ? jt(s) : 4e3, K), Y = E.height > 0 ? E.height + 4 : 0, W = E.width + 2 * r, U = Y + 2 * r;
    else if (S === "block_arrow") {
      v = 1, E = ct(p.label, !1, i, O, f, K);
      let at = !0;
      for (let ne of E.lines)
        for (let Ut of ne)
          (Ut.icon !== void 0 || Ut.text.trim() !== "") && (at = !1);
      q = Ee(p.directions);
      let ft = at ? te(q, 0, 0) : te(q, E.width, E.height);
      W = ft.w, U = ft.h, ut = ft.dx, j = ft.dy;
    } else {
      C = (Yt = Ve.get(S != null ? S : "")) != null ? Yt : "rect", E = ct(p.label, !1, i, O, f, K);
      let at = fe(C, E.width, E.height);
      W = at.w, U = C === "cyl" ? Math.max(at.h, E.height + 40) : at.h, j = at.dy;
    }
    return { children: [], columns: v === 2 && (zt = p.columns) != null ? zt : -1, span: v === 3 ? 1 : (Vt = p.widthInColumns) != null ? Vt : 1, space: v === 3, head: Y, nw: W, nh: U, col: 0, row: 0, cols: 0, heights: Fe, x: 0, y: 0, w: 0, h: 0, block: p, kind: v, index: m, shape: C, label: E, style: _, mask: q, dx: ut, dy: j, bw: 0, bh: 0 };
  }, g = x(t.root, 0);
  g.nw = 0, g.nh = 0;
  let k = [g], A = /* @__PURE__ */ new Map();
  for (let p = 0; p < k.length; p++) {
    let m = k[p];
    if (m.kind === 2)
      for (let S of (Lt = m.block.children) != null ? Lt : Be) {
        let _ = x(S, k.length);
        m.children.push(_), k.push(_), _.kind !== 3 && A.set(S.id, _);
      }
  }
  let N = Re(g, r), T = [];
  for (let p of k)
    p.kind === 0 && Ue.has(p.shape) ? (p.bw = p.nw, p.bh = p.nh) : p.kind === 1 ? (p.bw = p.span > 1 ? p.w : p.nw, p.bh = p.nh) : (p.bw = p.w, p.bh = p.kind === 0 && qe.has(p.shape) ? p.nh : p.h), p.kind === 0 && p.shape === "cyl" && (p.dy = Math.min(12, Math.max(6, p.bw / 14)) / 2), (p.kind === 0 || p.kind === 1) && T.push(p);
  let R = /* @__PURE__ */ new Map(), L = /* @__PURE__ */ new Set(), P = [], F = [];
  for (let p of t.edges) {
    let m = A.get((Ot = p.start) != null ? Ot : ""), S = A.get((Nt = p.end) != null ? Nt : "");
    if (m === void 0 || S === void 0)
      continue;
    let _ = Math.min(m.index, S.index) * k.length + Math.max(m.index, S.index);
    R.set(_, ((Rt = R.get(_)) != null ? Rt : 0) + 1), p.label && L.add(_), P.push([m, S]), F.push(p);
  }
  let z = F.length * T.length <= ze ? T : void 0, G = /* @__PURE__ */ new Map(), b = [], d = 0, c = 0, y = N.width, M = N.height, V = (p, m, S, _) => {
    p - S / 2 < d && (d = p - S / 2), p + S / 2 > y && (y = p + S / 2), m - _ / 2 < c && (c = m - _ / 2), m + _ / 2 > M && (M = m + _ / 2);
  };
  for (let p = 0; p < F.length; p++) {
    let [m, S] = P[p], _ = Math.min(m.index, S.index) * k.length + Math.max(m.index, S.index), K = (Pt = R.get(_)) != null ? Pt : 1, O = (Kt = G.get(_)) != null ? Kt : 0;
    G.set(_, O + 1);
    let v = ct(F[p].label, !1, i, l, ee), C, E, W;
    if (m === S) {
      let [U, Y, q] = he(m, O + 1);
      C = [], V(U, Y, 2 * q + 2, 2 * q + 2), E = U + q + 6 + v.width / 2, W = Y - q / 2;
    } else {
      let U = L.has(_) ? Math.round(l * 1.5) + 2 : 14;
      C = Ge(m, S, (O - (K - 1) / 2) * U, z);
      let Y = C.length, q = Math.abs(C[2] - C[0]) + Math.abs(C[3] - C[1]), ut = Math.abs(C[Y - 2] - C[Y - 4]) + Math.abs(C[Y - 1] - C[Y - 3]), j = Y === 6 && ut > q ? 2 : 0, ht = v.width > 0 ? Je(C, j, v.width + 8, v.height, m, S, z) : 0.5;
      E = C[j] + (C[j + 2] - C[j]) * ht, W = C[j + 1] + (C[j + 3] - C[j + 1]) * ht;
    }
    v.width > 0 && V(E, W, v.width + 8, v.height), b.push({ edge: F[p], points: C, loop: m === S ? O + 1 : 0, label: v, lx: E, ly: W });
  }
  let Z = de(t.title, i, n, h ? jt(s) : 4e3), dt = Z.height > 0 ? Z.height + 12 : 0, it = Math.max(y - d, Z.width), et = e - d + (it - (y - d)) / 2, B = e + dt - c;
  for (let p of k)
    p.x += et, p.y += B;
  let mt = Math.ceil(it + 2 * e), At = Math.ceil(M - c + dt + 2 * e), wt = "", It = "";
  for (let p = 1; p < k.length; p++) {
    let m = k[p];
    if (m.kind === 3)
      continue;
    let S = ge(((Wt = m.block.classes) != null ? Wt : re).join(" ")), _ = Ht(m.block.id);
    if (m.kind === 2) {
      let O = m.y - m.h / 2;
      wt += `<g class="pele-cluster${S}" data-id="${_}"><rect x="${I(m.x - m.w / 2)}" y="${I(O)}" width="${I(m.w)}" height="${I(m.h)}" fill="var(--_a)" fill-opacity="0.5" stroke="var(--_b)"${me(m.style.shape)}/>` + St(m.label, m.x, O + (m.head + r) / 2 + 2, ` class="pele-cluster-label" fill="var(--_m)"${m.style.text}`, w) + "</g>";
      continue;
    }
    let K = m.kind === 1;
    It += `<g class="pele-node pele-shape-${K ? "block-arrow" : m.shape}${S}" data-id="${_}" transform="translate(${I(m.x)},${I(m.y)})">` + (K ? ve(m.mask, m.bw, m.bh, ae + m.style.shape) : ue(m.shape, m.bw, m.bh, ae + m.style.shape, We + m.style.line)) + St(m.label, m.dx, m.dy, ` class="pele-label"${m.style.text}`, w) + "</g>";
  }
  let xt = "", kt = "";
  for (let p = 0; p < b.length; p++) {
    let { edge: m, points: S, loop: _, label: K } = b[p], O = (Bt = m.arrowTypeStart) != null ? Bt : "", v = (Ft = m.arrowTypeEnd) != null ? Ft : "", C;
    if (_ > 0)
      C = $e(P[p][0], _, pt(O), pt(v));
    else {
      for (let W = 0; W < S.length; W += 2)
        S[W] += et, S[W + 1] += B;
      C = He(S, pt(O), pt(v));
    }
    let E = Ht(m.id);
    if (xt += `<g class="pele-edge" data-id="${E}"><path d="${C.d}"${m.thickness === "thick" ? ' stroke-width="2.5"' : ""}${m.pattern === "dotted" ? ' stroke-dasharray="3 4"' : ""}/>` + Gt(O, C.sx, C.sy, C.sdx, C.sdy, "var(--_l)") + Gt(v, C.ex, C.ey, C.edx, C.edy, "var(--_l)") + "</g>", K.width > 0) {
      let W = b[p].lx + et, U = b[p].ly + B;
      kt += ye(m.id, K, W, U, "", w);
    }
  }
  return { svg: we("block", mt, At, n, s, t, St(Z, mt / 2, e + Z.height / 2, ' class="pele-title" font-weight="var(--_tw)"') + (wt ? `<g class="pele-clusters">${wt}</g>` : "") + (xt ? `<g class="pele-edges" fill="none" stroke="var(--_l)" stroke-linecap="round">${xt}</g>` : "") + `<g class="pele-nodes">${It}</g>` + (kt ? `<g class="pele-edge-labels" font-size="${l}">${kt}</g>` : "")), width: mt, height: At, links: [] };
}
var ha = { type: "block", math: !0, parse(t, a, s) {
  let h = new _e();
  return h.title = s, Te(t, h), h;
}, render: Ze };
export {
  ha as block
};
//# sourceMappingURL=2Y6FVCBC-a3bc995d.js.map

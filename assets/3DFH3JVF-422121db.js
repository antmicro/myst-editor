var It = Object.defineProperty;
var Rt = (t, i, r) => i in t ? It(t, i, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[i] = r;
var U = (t, i, r) => (Rt(t, typeof i != "symbol" ? i + "" : i, r), r);
import { c as ke } from "./G3MDBVQH-bcd5257d.js";
import { h as Pt } from "./7WLXJQOR-4872eebf.js";
import { x as Dt, h as Gt, y as Bt, C as Ut } from "./WJQKAQUO-dbb8c0b4.js";
import { q as Ht, z as ie, j as zt, H as Wt } from "./QRQ46LE7-b110495e.js";
import { x as Ft } from "./ECH2OJJK-8814648a.js";
import { _ as Yt, D as Kt } from "./6B2VI7MB-716cdb27.js";
import { D as Xt } from "./XQLH73R6-5278eaeb.js";
import { b as me, e as J, d as jt, o as gt, i as Me, V as bt } from "./lazy-950901f8.js";
import { m as Qt, c as Vt, p as qt } from "./DKTLEL5E-e2b762b2.js";
import { T as Zt, G as Jt, O as es, L as ts } from "./YTAM2TF7-f178d8af.js";
import { e as ne, a as Fe, L as Ye, x as T, b as ss, V as oe, f as rs, S as we, u as as, m as ls, n as is } from "./3G3HCGVE-09704139.js";
function $t(t) {
  return t === "#" || t === "+" || t === "~" || t === "-";
}
var Tt = class {
  constructor(t, i) {
    U(this, "id", "");
    U(this, "memberType");
    U(this, "visibility", "");
    U(this, "classifier", "");
    U(this, "parameters", "");
    U(this, "returnType", "");
    this.memberType = i, (i !== "method" || !this.parseMethod(t)) && this.parseAttribute(t), this.id = this.id.startsWith(" ") ? " " + this.id.trim() : this.id.trim();
  }
  parseMethod(t) {
    let i = t.length;
    for (let r = 0; r < i; ) {
      let c = r;
      for (; c < i && !gt(t.charCodeAt(c)); )
        c++;
      let m = c - 1;
      for (; m > r && t.charCodeAt(m) !== 41; )
        m--;
      let a = m - 1;
      for (; a > r && t.charCodeAt(a) !== 40; )
        a--;
      if (a > r) {
        let g = t[r], e = $t(g) && a > r + 1;
        e && (this.visibility = g), this.id = t.slice(e ? r + 1 : r, a), this.parameters = t.slice(a + 1, m).trim();
        let E = m + 1, C = "";
        if (E < i) {
          let h = t[E];
          (h === "$" || h === "*" || h.trim() === "") && (C = h.trim(), E++);
        }
        let S = E;
        for (; S < i && !gt(t.charCodeAt(S)); )
          S++;
        if (this.returnType = t.slice(E, S).trim(), C === "") {
          let h = this.returnType.slice(-1);
          (h === "$" || h === "*") && (C = h, this.returnType = this.returnType.slice(0, -1));
        }
        return this.classifier = C, !0;
      }
      r = c + 1;
    }
    return this.memberType = "attribute", !1;
  }
  parseAttribute(t) {
    let i = t.slice(0, 1), r = t.slice(-1);
    $t(i) && (this.visibility = i), (r === "$" || r === "*") && (this.classifier = r), this.id = t.substring(this.visibility === "" ? 0 : 1, this.classifier === "" ? t.length : t.length - 1);
  }
  getDisplayDetails() {
    let t = this.visibility + ke(this.id);
    return this.memberType === "method" && (t += `(${ke(this.parameters.trim())})`, this.returnType && (t += " : " + ke(this.returnType))), { displayText: t.trim(), cssStyle: this.parseClassifier() };
  }
  parseClassifier() {
    return this.classifier === "*" ? "font-style:italic;" : this.classifier === "$" ? "text-decoration:underline;" : "";
  }
}, ns = { LINE: 0, DOTTED_LINE: 1 }, ge = { AGGREGATION: 0, EXTENSION: 1, COMPOSITION: 2, DEPENDENCY: 3, LOLLIPOP: 4 }, os = "classId-";
function Z(t) {
  let i = t.indexOf("~");
  if (i <= 0)
    return { className: t, type: "" };
  let r = t.indexOf("~", i + 1);
  return { className: t.slice(0, i), type: t.slice(i + 1, r === -1 ? t.length : r) };
}
function yt(t) {
  let i = t.charCodeAt(0);
  return Z(i >= 48 && i <= 57 ? os + t : t).className;
}
var cs = class {
  constructor() {
    U(this, "type", "class");
    U(this, "lineType", ns);
    U(this, "relationType", ge);
    U(this, "direction", "TB");
    U(this, "classes", /* @__PURE__ */ new Map());
    U(this, "relations", []);
    U(this, "notes", /* @__PURE__ */ new Map());
    U(this, "namespaces", /* @__PURE__ */ new Map());
    U(this, "interfaces", []);
    U(this, "styleClasses", /* @__PURE__ */ new Map());
    U(this, "title");
    U(this, "accTitle");
    U(this, "accDescr");
    U(this, "namespaceStack", []);
    U(this, "withCssClass", /* @__PURE__ */ new Map());
  }
  addClass(t) {
    let { className: i, type: r } = Z(t);
    if (this.classes.has(i))
      return;
    let c = { id: i, type: r, label: i, cssClasses: "default", methods: [], members: [], annotations: [], styles: [] };
    this.classes.set(i, c), this.tag(c, "default");
  }
  tag(t, i) {
    let r = this.withCssClass.get(i);
    r ? r.add(t) : this.withCssClass.set(i, /* @__PURE__ */ new Set([t]));
  }
  ensure(t) {
    return this.addClass(t), this.classes.get(Z(t).className);
  }
  setClassLabel(t, i) {
    this.ensure(t).label = i;
  }
  addRelation(t) {
    let { type1: i, type2: r } = t.relation;
    i === ge.LOLLIPOP && r === "none" ? (this.addClass(t.id2), t.id1 = this.addInterface(t.id1, t.id2)) : r === ge.LOLLIPOP && i === "none" ? (this.addClass(t.id1), t.id2 = this.addInterface(t.id2, t.id1)) : (this.addClass(t.id1), this.addClass(t.id2)), t.id1 = Z(t.id1).className, t.id2 = Z(t.id2).className, t.relationTitle1 = t.relationTitle1.trim(), t.relationTitle2 = t.relationTitle2.trim(), this.relations.push(t);
  }
  addInterface(t, i) {
    let r = `interface${this.interfaces.length}`;
    return this.interfaces.push({ id: r, label: t, classId: i }), r;
  }
  addAnnotation(t, i) {
    this.ensure(t).annotations.push(i);
  }
  addMember(t, i) {
    let r = this.ensure(t);
    if (typeof i != "string")
      return;
    let c = i.trim();
    if (c.startsWith("<<") && c.endsWith(">>"))
      r.annotations.push(c.substring(2, c.length - 2));
    else if (c.indexOf(")") > 0) {
      let m = new Tt(c, "method");
      (m.memberType === "method" ? r.methods : r.members).push(m);
    } else
      c && r.members.push(new Tt(c, "attribute"));
  }
  addMembers(t, i) {
    if (Array.isArray(i)) {
      i.reverse();
      for (let r of i)
        this.addMember(t, r);
    }
  }
  addNote(t, i) {
    let r = this.notes.size, c = `note${r}`;
    return this.notes.set(c, { id: c, class: i, text: t, index: r }), c;
  }
  cleanupLabel(t) {
    return (t.startsWith(":") ? t.substring(1) : t).trim();
  }
  setCssClass(t, i) {
    for (let r of t.split(",")) {
      let c = this.classes.get(yt(r));
      if (c !== void 0) {
        c.cssClasses += " " + i;
        for (let m of i.split(" "))
          this.tag(c, m);
      }
    }
  }
  defineClass(t, i) {
    for (let r of t) {
      let c = this.styleClasses.get(r);
      if (c === void 0 && (c = { id: r, styles: [], textStyles: [] }, this.styleClasses.set(r, c)), !i)
        continue;
      for (let g of i)
        g.includes("color") && c.textStyles.push(g.replace("fill", "bgFill")), c.styles.push(g);
      let m = this.withCssClass.get(r);
      if (m === void 0)
        continue;
      let a = i.flatMap((g) => g.split(","));
      for (let g of m)
        for (let e of a)
          g.styles.push(e);
    }
  }
  setTooltip(t, i) {
    if (i !== void 0)
      for (let r of t.split(",")) {
        let c = this.classes.get(Z(r).className);
        c && (c.tooltip = i);
      }
  }
  setLink(t, i, r) {
    let c = me(i).trim();
    for (let m of t.split(",")) {
      let a = this.classes.get(yt(m));
      a && (a.link = c ? Yt(c) : void 0, a.linkTarget = typeof r == "string" ? r : "_blank");
    }
    this.setCssClass(t, "clickable");
  }
  setClickEvent(t, i, r) {
    for (let c of t.split(",")) {
      let m = this.classes.get(Z(c).className);
      m && (m.haveCallback = !0);
    }
    this.setCssClass(t, "clickable");
  }
  setDirection(t) {
    this.direction = t;
  }
  setAccTitle(t) {
    this.accTitle = t.replace(/^\s+/g, "");
  }
  setAccDescription(t) {
    this.accDescr = t.replace(/\n\s+/g, `
`);
  }
  addNamespace(t, i) {
    var e;
    let r = this.namespaceStack[this.namespaceStack.length - 1], c = r ? `${r}.${t}` : t;
    this.namespaceStack.push(c);
    let m = this.namespaces.get(c);
    if (m)
      return m.explicit = !0, i && (m.label = i), c;
    let a = r || void 0, g = r ? r.length + 1 : 0;
    for (; ; ) {
      let E = c.indexOf(".", g), C = E === -1, S = C ? c : c.slice(0, E), h = this.namespaces.get(S);
      if (h === void 0) {
        let R = c.slice(g, C ? c.length : E);
        h = { id: S, label: C && i ? i : R, classes: /* @__PURE__ */ new Map(), notes: /* @__PURE__ */ new Map(), children: /* @__PURE__ */ new Map(), parent: a, explicit: C }, this.namespaces.set(S, h);
      } else
        C && (h.explicit = !0);
      let w = a ? this.namespaces.get(a) : void 0;
      if (w && (w.children.has(S) || w.children.set(S, h), (e = h.parent) != null || (h.parent = a)), C)
        return c;
      a = S, g = E + 1;
    }
  }
  popNamespace() {
    this.namespaceStack.pop();
  }
  addClassesToNamespace(t, i, r) {
    let c = this.namespaces.get(t);
    if (c !== void 0) {
      for (let m of i) {
        let { className: a } = Z(m), g = this.classes.get(a);
        g !== void 0 && (g.parent = t, c.classes.set(a, g));
      }
      for (let m of r) {
        let a = this.notes.get(m);
        a !== void 0 && (a.parent = t, c.notes.set(m, a));
      }
    }
  }
  setCssStyle(t, i) {
    let r = this.classes.get(t);
    if (!(!i || !r))
      for (let c of i)
        for (let m of c.split(","))
          r.styles.push(m);
  }
}, Ct = ["$end", "INVALID", "CLASS_DIAGRAM", "NEWLINE", "EOF", "SQS", "STR", "SQE", "DOT", "GENERICTYPE", "LABEL", "acc_title", "acc_title_value", "acc_descr", "acc_descr_value", "acc_descr_multiline_value", "STRUCT_START", "STRUCT_STOP", "NAMESPACE", "STYLE_SEPARATOR", "ANNOTATION_START", "ANNOTATION_END", "CLASS", "MEMBER", "NOTE_FOR", "NOTE", "CLASSDEF", "ALPHA", "COMMA", "direction_tb", "direction_bt", "direction_rl", "direction_lr", "AGGREGATION", "EXTENSION", "COMPOSITION", "DEPENDENCY", "LOLLIPOP", "LINE", "DOTTED_LINE", "CALLBACK", "LINK", "LINK_TARGET", "CLICK", "CALLBACK_NAME", "CALLBACK_ARGS", "HREF", "STYLE", "CSSCLASS", "COLON", "BRKT", "PCT", "MINUS", "UNICODE_TEXT", "BQUOTE_STR", "EDGE_STATE", "EOF_IN_STRUCT", "OPEN_IN_STRUCT", "PLUS", "EQUALS", "PUNCTUATION"], hs = [4, 6, 4, 9, 44, 45, 12, 14, 15, 4, 56, 4, 56], ds = [/.*direction\s+TB[^\n]*/y, /.*direction\s+BT[^\n]*/y, /.*direction\s+RL[^\n]*/y, /.*direction\s+LR[^\n]*/y], Ke = /[\n\r\u2028\u2029]/g;
function ps(t) {
  let i = t.length, r = [], c = [], m = [], a = [], g = 0, e = 0, E = t.indexOf("direction"), C = -1, S = 0, h = (n, d, b) => (r.push(n), c.push(t.slice(d, b)), m.push(d), e = b, !0), w = (n) => {
    a.push(g), g = n;
  }, R = () => {
    a.length > 0 && (g = a.pop());
  }, u = (n) => t.startsWith(n, e) && !Me(t.charCodeAt(e + n.length)), _ = (n) => {
    for (; n < i && J(t.charCodeAt(n)); )
      n++;
    return n;
  }, v = (n) => {
    let d = t.indexOf(n, e);
    return d === -1 ? i : d;
  }, f = (n) => {
    let d = e, b = -1;
    for (let I = t.charCodeAt(d); d < i && J(I); I = t.charCodeAt(++d))
      I === 10 && (b = d);
    if (b < 0) {
      e = d;
      return;
    }
    n && R(), h(3, e, b + 1);
  }, O = (n) => {
    switch (n) {
      case 99:
        if (u("cssClass"))
          return h(48, e, e + 8);
        if (u("callback"))
          return h(40, e, e + 8);
        if (u("click"))
          return h(43, e, e + 5);
        break;
      case 108:
        if (u("link"))
          return h(41, e, e + 4);
        break;
      case 110:
        if (u("note for"))
          return h(24, e, e + 8);
        if (u("note"))
          return h(25, e, e + 4);
        break;
      case 60:
        if (t.charCodeAt(e + 1) === 60)
          return h(20, e, e + 2);
        break;
      case 62:
        if (t.charCodeAt(e + 1) === 62)
          return h(21, e, e + 2);
        break;
      case 104:
        if (u("href"))
          return h(46, e, e + 4);
        break;
    }
    return !1;
  }, P = (n) => {
    if (O(n))
      return !0;
    let d = t.charCodeAt(e + 1);
    switch (n) {
      case 34:
        return w(1), e++, !0;
      case 126:
        return w(3), e++, !0;
      case 96:
        return w(2), e++, !0;
      case 95:
        if (u("_self"))
          return h(42, e, e + 5);
        if (u("_blank"))
          return h(42, e, e + 6);
        if (u("_parent"))
          return h(42, e, e + 7);
        if (u("_top"))
          return h(42, e, e + 4);
        break;
      case 60:
        return d === 124 ? h(34, e, e + 2) : h(36, e, e + 1);
      case 124:
        return d === 62 && h(34, e, e + 2);
      case 62:
        return h(36, e, e + 1);
      case 42:
        return h(35, e, e + 1);
      case 111:
        if (!Me(d))
          return h(33, e, e + 1);
        break;
      case 40:
        return d === 41 && h(37, e, e + 2);
      case 45:
        return d === 45 ? h(38, e, e + 2) : h(52, e, e + 1);
      case 46:
        return d === 46 ? h(39, e, e + 2) : h(8, e, e + 1);
      case 58: {
        let b = e + 1;
        for (; b < i; ) {
          let I = t.charCodeAt(b);
          if (I === 58 || I === 10 || I === 59)
            break;
          b++;
        }
        return b > e + 1 ? h(10, e, b) : d === 58 && t.charCodeAt(e + 2) === 58 && h(19, e, e + 3);
      }
      case 43:
        return h(58, e, e + 1);
      case 37:
        return h(51, e, e + 1);
      case 61:
        return h(59, e, e + 1);
      case 91:
        return h(5, e, e + 1);
      case 93:
        return h(7, e, e + 1);
      case 33:
      case 35:
      case 36:
      case 38:
      case 39:
      case 44:
      case 63:
      case 92:
      case 47:
        return h(60, e, e + 1);
    }
    if (Me(n)) {
      let b = e + 1;
      for (; Me(t.charCodeAt(b)); )
        b++;
      return h(27, e, b);
    }
    return Pt(n) && h(53, e, e + 1);
  }, W = () => {
    if (E === -1 || e < S || (E < e && (E = t.indexOf("direction", e)), E === -1) || (C < e && (Ke.lastIndex = e, C = Ke.test(t) ? Ke.lastIndex - 1 : i), E >= C))
      return !1;
    for (let n = 0; n < 4; n++) {
      let d = ds[n];
      if (d.lastIndex = e, d.test(t))
        return h(29 + n, e, d.lastIndex);
    }
    return S = C, !1;
  }, X = (n) => {
    if (W())
      return !0;
    if (J(n))
      return f(!1), !0;
    switch (n) {
      case 37:
        if (t.charCodeAt(e + 1) === 37) {
          let d = v(`
`);
          for (; d < i && (t.charCodeAt(d) === 10 || t.charCodeAt(d) === 13); )
            d++;
          return e = d, !0;
        }
        break;
      case 97: {
        let d = t.startsWith("accTitle", e);
        if (!d && !t.startsWith("accDescr", e))
          break;
        let b = _(e + 8), I = t.charCodeAt(b);
        if (I === 58)
          return h(d ? 11 : 13, e, _(b + 1)), w(d ? 6 : 7), !0;
        if (I === 123 && !d)
          return e = _(b + 1), w(8), !0;
        break;
      }
      case 99:
        if (u("classDiagram-v2"))
          return h(2, e, e + 15);
        if (u("classDiagram"))
          return h(2, e, e + 12);
        if (t.startsWith("call", e) && J(t.charCodeAt(e + 4)))
          return e = _(e + 4), w(4), !0;
        if (u("classDef"))
          return h(26, e, e + 8);
        if (u("class"))
          return w(9), h(22, e, e + 5);
        break;
      case 91:
        if (t.startsWith("*]", e + 1))
          return h(55, e, e + 3);
        break;
      case 115:
        if (u("style"))
          return h(47, e, e + 5);
        break;
      case 110:
        if (u("namespace"))
          return w(11), h(18, e, e + 9);
        break;
      case 44:
        return h(28, e, e + 1);
      case 35:
        return h(50, e, e + 1);
    }
    return P(n) || n === 58 && h(49, e, e + 1);
  };
  for (; ; ) {
    if (e >= i) {
      r.push(hs[g]), c.push(""), m.push(i);
      break;
    }
    let n = t.charCodeAt(e), d = !0;
    switch (g) {
      case 0:
        d = X(n);
        break;
      case 9:
        J(n) ? f(!0) : n === 125 ? (R(), R(), h(17, e, e + 1)) : n === 123 ? (w(10), h(16, e, e + 1)) : d = P(n);
        break;
      case 10:
        if (n === 34)
          w(1), e++;
        else if (n === 125)
          R(), h(17, e, e + 1);
        else if (n === 91 && t.startsWith("*]", e + 1))
          h(55, e, e + 3);
        else if (n === 123)
          h(57, e, e + 1);
        else if (n === 10)
          e++;
        else {
          let b = e + 1;
          for (; b < i; ) {
            let I = t.charCodeAt(b);
            if (I === 123 || I === 125 || I === 10)
              break;
            b++;
          }
          h(23, e, b);
        }
        break;
      case 11:
        J(n) ? f(!0) : n === 123 ? (w(12), h(16, e, e + 1)) : n === 125 ? R() : n === 110 && u("namespace") ? (w(11), h(18, e, e + 9)) : d = P(n);
        break;
      case 12:
        J(n) ? f(!1) : n === 125 ? (R(), h(17, e, e + 1)) : n === 110 && u("namespace") ? (w(11), h(18, e, e + 9)) : n === 91 && t.startsWith("*]", e + 1) ? h(55, e, e + 3) : n === 99 && u("class") ? (w(9), h(22, e, e + 5)) : d = P(n);
        break;
      case 1:
        n === 34 ? (R(), e++) : h(6, e, v('"'));
        break;
      case 3:
        if (n === 34)
          w(1), e++;
        else {
          if (O(n))
            break;
          n === 126 ? (R(), e++) : h(9, e, v("~"));
        }
        break;
      case 2:
        if (n === 34)
          w(1), e++;
        else {
          if (O(n))
            break;
          n === 126 ? (w(3), e++) : n === 96 ? (R(), e++) : h(54, e, v("`"));
        }
        break;
      case 4:
        if (n === 40) {
          let b = _(e + 1);
          R(), t.charCodeAt(b) === 41 ? e = b + 1 : (w(5), e++);
        } else
          h(44, e, v("("));
        break;
      case 5:
        n === 41 ? (R(), e++) : h(45, e, v(")"));
        break;
      case 6:
      case 7:
        h(g === 6 ? 12 : 14, e, v(`
`)), R();
        break;
      case 8:
        n === 125 ? (R(), e++) : h(15, e, v("}"));
        break;
    }
    if (!d)
      return r.push(1), c.push(""), m.push(e), { types: r, texts: c, starts: m };
  }
  return r.push(0), c.push(""), m.push(i), { types: r, texts: c, starts: m };
}
var Je = 61, Se = new Uint8Array(Je);
for (let t of [53, 27, 52])
  Se[t] = 1;
var qe = new Uint8Array(Je);
for (let t of [27, 49, 50, 47, 51, 10])
  qe[t] = 1;
var te = new Uint8Array(Je);
te[33] = 1;
te[34] = 2;
te[35] = 3;
te[36] = 4;
te[37] = 5;
var us = "'UNICODE_TEXT', 'NUM', 'ALPHA', 'MINUS', 'BQUOTE_STR'";
function fs(t, i) {
  let { types: r, texts: c, starts: m } = ps(t), a = 0, g = (n) => {
    let d = r[a];
    throw d === 1 ? bt("class", t, m[a], "", !0) : bt("class", t, m[a], `Expecting ${n}, got '${Ct[d]}'`);
  }, e = (n) => (r[a] !== n && g(`'${Ct[n]}'`), c[a++]), E = () => (Se[r[a]] === 0 && g("'UNICODE_TEXT', 'NUM', 'ALPHA', 'MINUS'"), c[a++]), C = (n) => {
    let d = "";
    for (; ; ) {
      if (r[a] === 54) {
        d += c[a++];
        break;
      }
      Se[r[a]] === 0 && g(us), d += c[a++];
      let b = r[a];
      if (b === 8)
        d += ".", a++;
      else if (Se[b] === 0 && b !== 54)
        break;
    }
    return n && r[a] === 9 && (d += "~" + c[a++] + "~"), d;
  }, S = () => {
    a++;
    let n = e(6);
    return e(7), n;
  }, h = () => {
    r[a] !== 23 && g("'STRUCT_STOP', 'MEMBER'");
    let n = [];
    for (; r[a] === 23; )
      n.push(c[a++]);
    return e(17), n.reverse();
  }, w = () => {
    a++;
    let n = C(!0);
    switch (i.addClass(n), r[a] === 5 && i.setClassLabel(n, S()), r[a]) {
      case 19: {
        a++;
        let d = E();
        i.setCssClass(n, d), r[a] === 16 && (a++, i.addMembers(n, h()));
        break;
      }
      case 16:
        a++, r[a] === 17 ? a++ : i.addMembers(n, h());
        break;
      case 20: {
        a++;
        let d = E();
        e(21), i.addAnnotation(n, d), r[a] === 16 && (a++, r[a] === 17 ? a++ : i.addMembers(n, h()));
        break;
      }
    }
    return n;
  }, R = () => {
    if (r[a++] === 25)
      return i.addNote(e(6));
    let n = C(!0);
    return i.addNote(e(6), n);
  }, u = () => {
    let n = [];
    for (; ; ) {
      a++;
      let d = C(!1), b = r[a] === 5 ? i.addNamespace(d, S()) : i.addNamespace(d);
      e(16), r[a] === 3 && a++, n.push({ id: b, classes: [], notes: [] });
      let I = !0;
      for (; I; ) {
        let j = n[n.length - 1], Q = r[a];
        if (Q === 18)
          break;
        for (Q === 22 ? j.classes.push(w()) : Q === 25 || Q === 24 ? j.notes.push(R()) : g("'NAMESPACE', 'CLASS', 'NOTE_FOR', 'NOTE'"); ; ) {
          if (r[a] === 3) {
            let F = r[a + 1];
            if (F === 18 || F === 22 || F === 25 || F === 24) {
              a++;
              break;
            }
            a++;
          }
          e(17);
          let z = n.pop();
          if (i.addClassesToNamespace(z.id, z.classes, z.notes), i.popNamespace(), n.length === 0) {
            I = !1;
            break;
          }
        }
      }
      if (n.length === 0)
        return;
    }
  }, _ = () => {
    let n = te[r[a]];
    return n === 0 ? "none" : (a++, n - 1);
  }, v = () => {
    let n = C(!0), d = r[a];
    if (d === 10) {
      i.addMember(n, i.cleanupLabel(c[a++]));
      return;
    }
    let b = "none";
    if (d === 6)
      b = c[a++], d = r[a];
    else if (te[d] === 0 && d !== 38 && d !== 39)
      return;
    let I = _();
    d = r[a], d !== 38 && d !== 39 && g("'AGGREGATION', 'EXTENSION', 'COMPOSITION', 'DEPENDENCY', 'LOLLIPOP', 'LINE', 'DOTTED_LINE'"), a++;
    let j = _(), Q = r[a] === 6 ? c[a++] : "none", z = C(!0), F = { id1: n, id2: z, relation: { type1: I, type2: j, lineType: d === 38 ? 0 : 1 }, relationTitle1: b, relationTitle2: Q };
    r[a] === 10 && (F.title = i.cleanupLabel(c[a++])), i.addRelation(F);
  }, f = () => {
    let n = [];
    for (; ; ) {
      qe[r[a]] === 0 && g("'ALPHA', 'NUM', 'COLON', 'UNIT', 'SPACE', 'BRKT', 'STYLE', 'PCT', 'LABEL'");
      let d = c[a++];
      for (; qe[r[a]] === 1; )
        d += c[a++];
      if (n.push(d), r[a] !== 28)
        return n;
      a++;
    }
  }, O = (n) => {
    r[a] === 6 && i.setTooltip(n, c[a++]);
  }, P = (n) => {
    let d = e(6), b = r[a] === 6 ? c[a++] : void 0;
    r[a] === 42 ? i.setLink(n, d, c[a++]) : i.setLink(n, d), b !== void 0 && i.setTooltip(n, b);
  }, W = () => {
    let n = r[a];
    switch (n) {
      case 53:
      case 27:
      case 52:
      case 54:
        v();
        return;
      case 18:
        u();
        return;
      case 22:
        w();
        return;
      case 23:
        a++;
        return;
      case 20: {
        a++;
        let d = E();
        e(21), i.addAnnotation(C(!0), d);
        return;
      }
      case 40: {
        a++;
        let d = C(!0);
        i.setClickEvent(d, e(6)), O(d);
        return;
      }
      case 41:
        a++, P(C(!0));
        return;
      case 43: {
        a++;
        let d = C(!0);
        if (r[a] === 46) {
          a++, P(d);
          return;
        }
        let b = e(44);
        r[a] === 45 ? i.setClickEvent(d, b, c[a++]) : i.setClickEvent(d, b), O(d);
        return;
      }
      case 47: {
        a++;
        let d = e(27);
        i.setCssStyle(d, f());
        return;
      }
      case 48: {
        a++;
        let d = e(6);
        i.setCssClass(d, e(27));
        return;
      }
      case 25:
      case 24:
        R();
        return;
      case 26: {
        a++;
        let d = [e(27)];
        for (; r[a] === 28; )
          a++, d.push(e(27));
        i.defineClass(d, f());
        return;
      }
      case 29:
      case 30:
      case 31:
      case 32:
        a++, i.setDirection(n === 29 ? "TB" : n === 30 ? "BT" : n === 31 ? "RL" : "LR");
        return;
      case 11:
        a++, i.setAccTitle(e(12).trim());
        return;
      case 13:
        a++, i.setAccDescription(e(14).trim());
        return;
      case 15:
        i.setAccDescription(c[a++].trim());
        return;
    }
    g("'acc_title', 'acc_descr', 'acc_descr_multiline_value', 'NAMESPACE', 'ANNOTATION_START', 'CLASS', 'MEMBER', 'NOTE_FOR', 'NOTE', 'CLASSDEF', 'direction_tb', 'CALLBACK', 'LINK', 'CLICK', 'STYLE', 'CSSCLASS', 'ALPHA', 'MINUS', 'BQUOTE_STR'");
  }, X = r[a] === 2;
  for (X && (a++, e(3)); W(), !(r[a] !== 3 || (a++, r[a] === 4 || r[a] === 0)); )
    ;
  X && e(4), e(0);
}
function ms(t, i, r, c) {
  let m = Int32Array.from(t, (f, O) => O), a = (f) => {
    for (; m[f] !== f; )
      m[f] = m[m[f]], f = m[f];
    return f;
  }, g = (f, O) => {
    m[a(f)] = a(O);
  };
  for (let f = 0; f < t.length; f++)
    t[f].parent >= 0 && g(f, t[f].parent);
  for (let f of i)
    g(f.src, f.dst);
  let e = /* @__PURE__ */ new Map(), E = (f, O, P, W = 0, X = 0) => {
    f.left = Math.min(f.left, O - W / 2), f.top = Math.min(f.top, P - X / 2), f.right = Math.max(f.right, O + W / 2), f.bottom = Math.max(f.bottom, P + X / 2);
  };
  for (let f = 0; f < t.length; f++) {
    let O = a(f), P = e.get(O);
    P || (P = { nodes: [], edges: [], left: 1 / 0, top: 1 / 0, right: -1 / 0, bottom: -1 / 0 }, e.set(O, P));
    let W = t[f];
    P.nodes.push(W), E(P, W.x, W.y, W.w, W.h);
  }
  if (e.size < 2)
    return;
  for (let f of i) {
    let O = e.get(a(f.src));
    O.edges.push(f);
    for (let P = 0; P < f.route.length; P += 3)
      E(O, f.route[P], f.route[P + 1]);
    f.labelW > 0 && E(O, f.labelX, f.labelY, f.labelW, f.labelH);
  }
  let C = 0, S = 0, h = 0, w = 0, R = 1 / 0, u = -1 / 0, _ = [];
  for (let f of e.values()) {
    let O = f.right - f.left, P = f.bottom - f.top;
    C > 0 && C + O > r && (S += h + c, C = 0, h = 0), _.push(C - f.left, S - f.top), R = Math.min(R, f.left), u = Math.max(u, f.right), w = Math.max(w, C + O), h = Math.max(h, P), C += O + c;
  }
  if (w >= u - R)
    return;
  let v = 0;
  for (let f of e.values())
    Wt(f.nodes, f.edges, _[v++], _[v++]);
  return { width: w, height: S + h };
}
var gs = ["aggregation", "extension", "composition", "dependency", "lollipop"];
function xt(t) {
  return typeof t == "number" && gs[t] || "none";
}
function bs(t, i = !0) {
  var w, R;
  let r = [], c = [], m = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ new Map(), e = /* @__PURE__ */ new Map(), E = (u) => {
    if (i || u === void 0)
      return u;
    let _ = [], v = u, f;
    for (; v; ) {
      if (e.has(v)) {
        f = e.get(v);
        break;
      }
      let O = t.namespaces.get(v);
      if (O === void 0)
        break;
      if (O.explicit) {
        f = v;
        break;
      }
      _.push(v), v = O.parent;
    }
    for (let O of _)
      e.set(O, f);
    return f;
  }, C = (u) => {
    var _;
    return u === void 0 ? -1 : (_ = m.get(u)) != null ? _ : -1;
  };
  for (let u of t.namespaces.values())
    !i && !u.explicit || (m.set(u.id, r.length), r.push({ id: u.id, label: i ? u.label : u.id, isGroup: !0, shape: "rect", parentId: i ? u.parent : void 0, parent: -1 }));
  for (let u of r)
    u.parent = C(u.parentId);
  let S = 0;
  for (let u of t.classes.values()) {
    let _ = E(u.parent);
    a.set(u.id, r.length), r.push({ id: u.id, label: u.label, isGroup: !1, shape: "classBox", parentId: _, parent: C(_), classNode: u, colorIndex: S++ });
  }
  for (let u of t.notes.values()) {
    let _ = E(u.parent), v = u.class === void 0 ? void 0 : a.get(u.class);
    v !== void 0 && c.push({ id: `edgeNote${u.index}`, start: u.id, end: r[v].id, source: r.length, target: v, label: void 0, arrowTypeStart: "none", arrowTypeEnd: "none", startLabelRight: "", endLabelLeft: "", pattern: "dotted", classes: "relation" }), r.push({ id: u.id, label: u.text, isGroup: !1, shape: "note", parentId: _, parent: C(_) });
  }
  for (let u of t.interfaces) {
    let _ = a.get(u.classId);
    g.set(u.id, r.length), r.push({ id: u.id, label: u.label, isGroup: !1, shape: "interface", parentId: void 0, parent: _ === void 0 ? -1 : r[_].parent });
  }
  let h = 0;
  for (let u of t.relations) {
    h++;
    let { type1: _, type2: v } = u.relation, f = _ === ge.LOLLIPOP && v === "none" ? g : a, O = f === a && v === ge.LOLLIPOP && _ === "none" ? g : a;
    c.push({ id: `id_${u.id1}_${u.id2}_${h}`, start: u.id1, end: u.id2, source: (w = f.get(u.id1)) != null ? w : -1, target: (R = O.get(u.id2)) != null ? R : -1, label: u.title, arrowTypeStart: xt(_), arrowTypeEnd: xt(v), startLabelRight: u.relationTitle1 === "none" ? "" : u.relationTitle1, endLabelLeft: u.relationTitle2 === "none" ? "" : u.relationTitle2, pattern: u.relation.lineType === 1 ? "dashed" : "solid", classes: "relation" });
  }
  return { nodes: r, edges: c };
}
var Ze = 12, fe = 16, ue = 6, ve = 5;
function Mt(t) {
  switch (t) {
    case "extension":
      return Ze;
    case "composition":
    case "aggregation":
      return fe;
    case "lollipop":
      return 2 * ve;
    case "dependency":
      return ts("arrow_point");
  }
  return 0;
}
function wt(t, i, r, c, m, a) {
  let g = -m, e = c;
  switch (t) {
    case "extension": {
      let E = i - c * Ze, C = r - m * Ze;
      return `<path class="pele-marker" d="M${T(i)},${T(r)}L${T(E + g * ue)},${T(C + e * ue)}L${T(E - g * ue)},${T(C - e * ue)}Z" stroke-linejoin="round"/>`;
    }
    case "composition":
    case "aggregation": {
      let E = i - c * fe / 2, C = r - m * fe / 2, S = ue - 1;
      return `<path class="pele-marker" d="M${T(i)},${T(r)}L${T(E + g * S)},${T(C + e * S)}L${T(i - c * fe)},${T(r - m * fe)}L${T(E - g * S)},${T(C - e * S)}Z" stroke-linejoin="round"${t === "composition" ? ` fill="${a}"` : ""}/>`;
    }
    case "lollipop":
      return `<circle class="pele-marker" cx="${T(i - c * ve)}" cy="${T(r - m * ve)}" r="${ve}"/>`;
    case "dependency":
      return es("arrow_point", i, r, c, m, a);
  }
  return "";
}
var At = 40, $s = 16, Lt = 56, ee = 20, Xe = 26, je = 12, Ae = 8, Nt = 6, Ts = 10, ys = 64, Le = 8, Qe = "var(--_l)", Cs = /* @__PURE__ */ new Set(["_self", "_blank", "_parent", "_top"]);
function Ve(t, i, r) {
  let c = t[i];
  return typeof c == "number" && c > 0 ? Math.min(c, 2e3) : r;
}
var Ne = [], Ee = [];
function Et(t, i, r) {
  let c = me(t.getDisplayDetails().displayText).trim();
  return { text: c, width: i.width(c, r, t.classifier === "*" ? 2 : 0), classifier: t.classifier };
}
function xs(t, i, r) {
  let c = (m) => qt(r, (a) => Ms(t, i, r, m, a));
  return Qt(t.direction) ? Vt(r, c) : c(!1);
}
function Ms(t, i, r, c, m) {
  var ct, ht, dt, pt, ut;
  let a = (ct = i.class) != null ? ct : {}, g = bs(t, a.hierarchicalNamespaces !== !1), e = a.hideEmptyMembersBox === !0, E = (ht = r.fontSize) != null ? ht : 16, C = Math.round(E * 0.875), S = Math.round(E * 0.8), h = Math.round(S * 1.4), w = (dt = r.measurer) != null ? dt : jt(r.fontFamily, r.fontFamilyMono), R = (pt = r.padding) != null ? pt : 8, u = (s, l) => {
    if (!s.includes("$$"))
      return;
    let o = ne(s, !1, w, l, 4e3);
    return o.lines.some(is) ? o : void 0;
  }, _ = (s) => {
    var l, o;
    return s ? (o = (l = u(s, S)) == null ? void 0 : l.width) != null ? o : w.width(me(s), S, 0) : 0;
  }, v = c ? "TB" : Ht(t.direction), f = /* @__PURE__ */ new Map(), O = /* @__PURE__ */ new Map(), P = /* @__PURE__ */ new Map(), W = (s) => {
    let l = f.get(s);
    if (l === void 0) {
      let o = Fe([s]);
      l = o.shape === "" && o.text === "" ? "" : s.slice(0, s.indexOf(":")).trim().toLowerCase(), f.set(s, l);
    }
    l !== "" && P.set(l, s);
  }, X = (s) => {
    P.clear();
    let l = O.get(s.cssClasses);
    if (l === void 0) {
      for (let o of s.cssClasses.split(" ")) {
        let p = t.styleClasses.get(o);
        if (p)
          for (let $ of p.styles)
            for (let y of $.split(","))
              W(y);
      }
      l = [...P], O.set(s.cssClasses, l);
    } else
      for (let [o, p] of l)
        P.set(o, p);
    for (let o of s.styles)
      W(o);
    return Fe(P.size === 0 ? Ee : [...P.values()]);
  }, n = new Int32Array(g.nodes.length);
  for (let s of g.nodes)
    s.parent >= 0 && n[s.parent]++;
  let d = new Uint8Array(g.nodes.length);
  for (let s of g.edges) {
    if (s.source < 0 || s.target < 0)
      continue;
    let l = g.nodes[s.source].parent, o = g.nodes[s.target].parent;
    if (l !== o) {
      for (let p = l; p >= 0 && d[p] === 0; p = g.nodes[p].parent)
        d[p] = 1;
      for (let p = o; p >= 0 && d[p] === 0; p = g.nodes[p].parent)
        d[p] = 1;
    }
  }
  let b = [], I = [];
  g.nodes.forEach((s, l) => {
    let o, p;
    if (s.isGroup) {
      let $ = ne(s.label, !1, w, E, 4e3);
      o = j(s, $, 0, 0, E), n[l] > 0 ? (p = ie(0, 0), p.isGroup = !0, p.padX = ee, p.padTop = $.height > 0 ? $.height + 16 : ee, p.padBottom = ee, p.minW = $.width + 2 * ee - 12 + (d[l] === 1 && !m ? Math.min($.width + 24, 240) : 0)) : (o.w = Math.max($.width + 2 * ee, 80), o.h = $.height + 2 * ee, p = ie(o.w, o.h));
    } else if (s.classNode)
      o = Q(s, s.classNode), p = ie(o.w, o.h);
    else if (s.shape === "note") {
      let $ = ne(s.label, !0, w, C, 260);
      o = j(s, $, Math.max($.width + 2 * je, 40), $.height + 2 * Ae, C), p = ie(o.w, o.h);
    } else {
      let $ = ne(s.label, !1, w, C, 200);
      o = j(s, $, Math.max($.width, 12) + 4, Math.max($.height, 12), C), p = ie(o.w, o.h);
    }
    p.parent = s.parent, p.seq = l, b.push(o), I.push(p);
  });
  function j(s, l, o, p, $) {
    return { node: s, style: Fe(Ee), label: l, w: o, h: p, loops: 0, annotations: Ee, attributes: Ne, methods: Ne, titleH: 0, attributesH: 0, fontSize: $ };
  }
  function Q(s, l) {
    var K;
    let o = X(l), p = (K = o.fontSize) != null ? K : E, $ = Math.round(p * 0.875), y = Math.round($ * 1.5), N = l.type ? "&lt;" + ke(l.type).replace(/</g, "&lt;").replace(/>/g, "&gt;") + "&gt;" : "", k = ne(l.label + N, !1, w, p, 4e3, 1 | (o.italic ? 2 : 0)), x = l.annotations.length > 0 ? l.annotations.map((G) => {
      var xe;
      return (xe = u(`\xAB${G.trim()}\xBB`, S)) != null ? xe : `\xAB${me(G).trim()}\xBB`;
    }) : Ee, A = l.members.length > 0 ? l.members.map((G) => Et(G, w, $)) : Ne, L = l.methods.length > 0 ? l.methods.map((G) => Et(G, w, $)) : Ne, M = k.width, B = 0;
    for (let G of x)
      M = Math.max(M, typeof G == "string" ? w.width(G, S, 0) : G.width), B += typeof G == "string" ? h : Math.max(h, G.height);
    for (let G of A)
      M = Math.max(M, G.width);
    for (let G of L)
      M = Math.max(M, G.width);
    let H = !(e && A.length === 0 && L.length === 0), D = (G) => H ? G > 0 ? 2 * Nt + G * y : Ts : 0, Y = 2 * Ae + B + Math.max(k.height, Math.round(p * 1.5)), q = D(A.length);
    return { node: s, style: o, label: k, w: Math.max(M + 2 * je, ys), h: Y + q + D(L.length), loops: 0, annotations: x, attributes: A, methods: L, titleH: Y, attributesH: q, fontSize: p };
  }
  let z = [], F = [], et = [], se = [], re = [], ce = new Float64Array(b.length * 4), tt = (s, l, o) => {
    ce[s * 4 + l]++, o > ce[s * 4 + l + 1] && (ce[s * 4 + l + 1] = o);
  };
  for (let s of g.edges) {
    if (s.source < 0 || s.target < 0)
      continue;
    let l = ne(s.label, !0, w, C, 200), o = _(s.startLabelRight), p = _(s.endLabelLeft);
    s.source === s.target ? (b[s.source].loops++, I[s.source].w += 2 * (Xe + (l.width > 0 ? l.width + 12 : 0))) : (tt(s.source, 0, o), tt(s.target, 2, p)), se.push(o), re.push(p), F.push(s), et.push(l), z.push({ src: s.source, dst: s.target, minlen: 1, labelW: l.width > 0 ? l.width + 12 : 0, labelH: l.height > 0 ? l.height + 4 : 0, route: [], labelX: 0, labelY: 0 });
  }
  if (v === "TB" || v === "BT")
    for (let s = 0; s < b.length; s++) {
      if (!b[s].node.classNode)
        continue;
      let l = 0;
      for (let o = 0; o < 4; o += 2) {
        let p = ce[s * 4 + o], $ = ce[s * 4 + o + 1];
        p > 1 && (l = Math.max(l, (p - 1) * ($ > 0 ? $ + 24 : 14) + 24));
      }
      l = Math.min(l, 480), l > b[s].w && (I[s].w += l - b[s].w, b[s].w = l);
    }
  let Oe = !1;
  for (let s = 0; s < F.length && !Oe; s++)
    Oe = se[s] > 0 || re[s] > 0;
  let _e = 0;
  if (v === "TB" || v === "BT") {
    let s = (l) => {
      var o, p;
      return l ? Math.max(h, (p = (o = u(l, S)) == null ? void 0 : o.height) != null ? p : 0) : 0;
    };
    for (let l of F)
      _e = Math.max(_e, s(l.startLabelRight) + s(l.endLabelLeft) - 2 * h);
  }
  let st = zt(I, z, v, { nodeSep: Ve(a, "nodeSpacing", At), edgeSep: $s, rankSep: Ve(a, "rankSpacing", Oe ? Lt + 16 : Lt) + _e, portSep: 20, apart: !0 }), Ie = /* @__PURE__ */ new Map(), be = [], rt = (s, l, o, p, $) => {
    let y = s.route, N = I[o], k = Xt(y, l, N);
    if (k < 0)
      return;
    let x = (N.w - b[o].w) / 2;
    k === 1 ? y[l] -= x : k === 3 && (y[l] += x);
    let A = k & 1, L = y[(l === 0 ? 3 : l - 3) + A], M = L - y[l + A], B = { route: y, at: l, toward: L, order: $, room: p, side: k, after: A ? M > 0 : M >= 0 }, H = o * 4 + k, D = Ie.get(H);
    return D ? D.push(B) : Ie.set(H, [B]), B;
  }, Re = [], Pe = [];
  for (let s = 0; s < z.length; s++) {
    let l = z[s], o = l.src !== l.dst && l.route.length >= 6;
    Re.push(o ? rt(l, 0, l.src, se[s], s) : void 0), Pe.push(o ? rt(l, l.route.length - 3, l.dst, re[s], s) : void 0);
  }
  let kt = (s, l, o) => {
    for (let p = I[s].parent, $ = 0; p >= 0 && $ < 1e4; p = I[p].parent, $++) {
      let y = I[p], N = Math.abs(l - y.x), k = Math.abs(o - y.y);
      if (Math.abs(k - y.h / 2) < 0.5 && N <= y.w / 2 + 0.5 || Math.abs(N - y.w / 2) < 0.5 && k <= y.h / 2 + 0.5)
        return !0;
    }
    return !1;
  }, at = [];
  for (let [s, l] of Ie) {
    if (l.length < 2)
      continue;
    let o = s >> 2, p = s & 1, $ = p ? b[o].h : b[o].w;
    l.sort((x, A) => x.toward - A.toward || x.order - A.order);
    let y = 0;
    for (let x = 0; x + 1 < l.length; x++) {
      let A = l[x], L = l[x + 1], M = p ? 20 : 24;
      A.room > 0 && A.after && (M += p ? h + 6 : A.room), L.room > 0 && !L.after && (M += p ? h + 6 : L.room), at[x] = M, y += M;
    }
    let N = Math.min(1, ($ - 24) / y);
    if (N <= 0)
      continue;
    let k = (p ? I[o].y : I[o].x) - y * N / 2;
    for (let x = 0; x < l.length; x++) {
      let { route: A, at: L } = l[x], M = L === 0 ? 3 : -3, B = L + M, H = -1;
      for (let D = B; D >= 0 && D < A.length && Math.abs(A[D + p] - A[B + p]) < 0.5; D += M)
        if (kt(o, A[D], A[D + 1])) {
          H = D;
          break;
        }
      if (H >= 0 && Math.abs(A[B + p] - k) <= 24)
        for (let D = B; D !== H + M; D += M)
          A[D + p] = k;
      A[L + p] = k, k += at[x] * N;
    }
  }
  let lt = (s, l, o, p) => {
    if (l === void 0 || o <= 0)
      return;
    let $ = l.side & 1, y = p ? 0 : s.length - 3, N = y + 1 - $, k = Math.abs(s[(p ? 3 : y - 3) + 1 - $] - s[N]), x = Math.min($ ? o + 10 : h + 6, k * 0.35);
    if (x < 4)
      return;
    let A = [s[y], s[y + 1], s[y + 2]];
    A[1 - $] += (l.side === 0 || l.side === 3 ? -1 : 1) * x, s.splice(p ? 3 : y, 0, A[0], A[1], A[2]);
  };
  for (let s = 0; s < z.length; s++)
    lt(z[s].route, Re[s], se[s], !0), lt(z[s].route, Pe[s], re[s], !1);
  let ae = 0, he = 0, de = st.width, $e = st.height, Te = (s, l, o, p, $, y, N) => {
    if (!l)
      return;
    let k = u(l, S), x = k ? Math.max(h, k.height) : h, A = p, L = $;
    y & 1 ? (A += (y === 3 ? -1 : 1) * (5 + o / 2), L += (N ? 1 : -1) * (7 + x / 2)) : (A += (N ? 1 : -1) * (9 + o / 2), L += (y === 0 ? -1 : 1) * (3 + x / 2)), be.push({ text: me(l), math: k, x: A, y: L, w: o, h: x, parent: s }), ae = Math.min(ae, A - o / 2), de = Math.max(de, A + o / 2), he = Math.min(he, L - x / 2), $e = Math.max($e, L + x / 2);
  }, it = /* @__PURE__ */ new Map(), nt = new Int32Array(z.length);
  for (let s = 0; s < z.length; s++) {
    let l = z[s], o = F[s], p = l.route;
    if (l.src === l.dst) {
      let $ = (ut = it.get(l.src)) != null ? ut : 0;
      it.set(l.src, $ + 1), nt[s] = $;
      let y = I[l.src], N = b[l.src], k = y.x + N.w / 2, x = Math.min(N.h / 2 - 4, 8 + $ * 6);
      Te(l.src, o.startLabelRight, se[s], k, y.y - x, 1, !1), Te(l.dst, o.endLabelLeft, re[s], k, y.y + x, 1, !0), l.labelX = y.x + N.w / 2 + Xe + $ * 8 + 4 + l.labelW / 2, l.labelY = y.y;
    } else if (p.length >= 6) {
      let $ = p.length - 3, y = Re[s], N = Pe[s];
      Te(l.src, o.startLabelRight, se[s], p[0], p[1], y ? y.side : 2, y ? y.after : !0), Te(l.dst, o.endLabelLeft, re[s], p[$], p[$ + 1], N ? N.side : 0, N ? N.after : !0);
    }
  }
  let ye = r.maxWidth;
  if (ye !== void 0 && ye > 0 && de - ae + 2 * R > ye) {
    let s = be.map((o) => ({ ...ie(o.w, o.h, o.parent), x: o.x, y: o.y })), l = ms(I.concat(s), z, Math.max(1, ye - 2 * R), Ve(a, "nodeSpacing", At));
    l && (be.forEach((o, p) => {
      o.x = s[p].x, o.y = s[p].y;
    }), ae = he = 0, de = l.width, $e = l.height);
  }
  let V = R - ae, le = R - he, St = Math.ceil(de - ae + 2 * R), vt = Math.ceil($e - he + 2 * R), ot = [], De = /* @__PURE__ */ new Map();
  if (g.nodes.length > 0 && g.nodes[0].isGroup)
    for (let s of z)
      Dt(De, s.route);
  let Ge = "", Be = "", Ce = "";
  for (let s = 0; s < b.length; s++) {
    let l = b[s], o = I[s], p = l.node, $ = o.x + V, y = o.y + le, N = Ye(p.id), k = o.isGroup ? o.w : l.w, x = o.isGroup ? o.h : l.h;
    if (p.isGroup) {
      let L = o.isGroup ? Gt(o, l.label.width, De, ee) : o.x, M = y - x / 2 + 8 + l.label.height / 2, B = ' class="pele-cluster-label" fill="var(--_m)"', H = o.isGroup && Bt(o, l.label.width, L, De);
      H && (Be += Ut(l.label, L + V, M, B, N, g.nodes, s)), Ge += `<g class="pele-cluster pele-namespace" data-id="${N}"><rect x="${T($ - k / 2)}" y="${T(y - x / 2)}" width="${T(k)}" height="${T(x)}" fill="var(--_a)" fill-opacity="0.5" stroke="var(--_b)"${ss}/>` + (H ? "" : oe(l.label, L + V, M, B)) + "</g>";
      continue;
    }
    let A = ` transform="translate(${T($)},${T(y)})"`;
    if (p.classNode)
      Ce += Ot(l, p.classNode, N, A);
    else if (p.shape === "note") {
      let L = k / 2, M = -x / 2;
      Ce += `<g class="pele-node pele-note" data-id="${N}"${A}><path d="M${T(-L)},${T(M)}H${T(L - Le)}L${T(L)},${T(M + Le)}V${T(-M)}H${T(-L)}Z" fill="var(--_a)" stroke="var(--_b)" stroke-linejoin="round"/><path d="M${T(L - Le)},${T(M)}V${T(M + Le)}H${T(L)}" fill="none" stroke="var(--_b)" stroke-linejoin="round"/>` + oe(l.label, 0, 0, ` class="pele-label" font-size="${C}"`, r.icons) + "</g>";
    } else
      Ce += `<g class="pele-node pele-interface" data-id="${N}"${A}>` + oe(l.label, 0, 0, ` class="pele-label" font-size="${C}"`, r.icons) + "</g>";
  }
  function Ot(s, l, o, p) {
    let { w: $, h: y, style: N } = s, k = -$ / 2, x = -y / 2, A = Math.round(s.fontSize * 0.875), L = Math.round(A * 1.5), M = `<rect x="${T(k)}" y="${T(x)}" width="${T($)}" height="${T(y)}" fill="var(--_s)" stroke="var(--_b)"${rs(N.shape)}/>`, B = x + s.titleH, H = B + s.attributesH;
    if (y > s.titleH) {
      let K = N.stroke ? ` style="stroke:${we(N.stroke)}"` : "";
      M += `<path class="pele-divider" d="M${T(k)},${T(B)}H${T(-k)}M${T(k)},${T(H)}H${T(-k)}" fill="none" stroke="var(--_b)"${K}/>`;
    }
    let D = x + Ae;
    for (let K of s.annotations)
      if (typeof K == "string")
        M += `<text class="pele-annotation" x="0" y="${T(D + h / 2 + S * 0.35)}" text-anchor="middle" font-size="${S}" fill="var(--_m)">${we(K)}</text>`, D += h;
      else {
        let G = Math.max(h, K.height);
        M += oe(K, 0, D + G / 2, ` class="pele-annotation" font-size="${S}" fill="var(--_m)"`, r.icons), D += G;
      }
    let Y = s.fontSize === E ? "" : ` font-size="${T(s.fontSize)}"`;
    M += oe(s.label, 0, (D + B - Ae) / 2, ` class="pele-label"${Y} font-weight="var(--_hw)"${N.text}`, r.icons);
    let q = (K, G, xe) => {
      let ft = "", mt = xe + Nt + L / 2 + A * 0.35;
      for (let We of K) {
        let _t = We.classifier === "$" ? ` pele-static"${N.text ? N.text.slice(0, -1) + 'text-decoration:underline"' : ' style="text-decoration:underline"'}` : We.classifier === "*" ? ` pele-abstract" font-style="italic"${N.text}` : `"${N.text}`;
        ft += `<text class="pele-member pele-${G}${_t} x="${T(k + je)}" y="${T(mt)}">${we(We.text)}</text>`, mt += L;
      }
      return ft;
    };
    return (s.attributes.length > 0 || s.methods.length > 0) && (M += `<g class="pele-members" font-size="${A}">${q(s.attributes, "attribute", B)}${q(s.methods, "method", H)}</g>`), l.tooltip && (M = `<title>${Ye(l.tooltip)}</title>` + M), l.link && (M = Kt(M, l.link, l.id, ot, r, l.linkTarget && Cs.has(l.linkTarget) ? ` target="${l.linkTarget}"` : "")), `<g class="pele-node pele-class${as(l.cssClasses.replace(/^default\s?/, ""))}" data-id="${o}"${p}>${M}</g>`;
  }
  let Ue = "", He = "";
  for (let s = 0; s < z.length; s++) {
    let l = z[s], o = F[s], p = et[s], $ = o.arrowTypeStart, y = o.arrowTypeEnd, N = Mt($), k = Mt(y), x;
    if (l.src === l.dst) {
      let L = I[l.src], M = b[l.src], B = nt[s], H = L.x + V + M.w / 2, D = L.y + le, Y = Math.min(M.h / 2 - 4, 8 + B * 6), q = Xe + B * 8;
      x = { d: `M${T(H + N)},${T(D - Y)}C${T(H + q + N)},${T(D - Y)} ${T(H + q + k)},${T(D + Y)} ${T(H + k)},${T(D + Y)}`, sx: H, sy: D - Y, sdx: -1, sdy: 0, ex: H, ey: D + Y, edx: -1, edy: 0 };
    } else {
      let L = l.route;
      for (let M = 0; M < L.length; M += 3)
        L[M] += V, L[M + 1] += le;
      x = Zt(L, void 0, N, k);
    }
    let A = o.pattern === "dashed" ? ' stroke-dasharray="6 4"' : o.pattern === "dotted" ? ' stroke-dasharray="2 4"' : "";
    if (Ue += `<g class="pele-edge${o.pattern === "dotted" ? " pele-note-edge" : " pele-relation"}" data-id="${Ye(o.id)}"><path d="${x.d}"${A}/>` + wt($, x.sx, x.sy, x.sdx, x.sdy, Qe) + wt(y, x.ex, x.ey, x.edx, x.edy, Qe) + "</g>", p.width > 0) {
      let L = l.labelX + V, M = l.labelY + le;
      He += Jt(o.id, p, L, M, "", r.icons);
    }
  }
  let ze = "";
  for (let s of be)
    ze += s.math ? oe(s.math, s.x + V, s.y + le, ' class="pele-cardinality"', r.icons) : `<text class="pele-cardinality" x="${T(s.x + V)}" y="${T(s.y + le + S * 0.35)}" text-anchor="middle">${we(s.text)}</text>`;
  let pe = Ft(t.title, w, E, R, St, vt, (Ge ? `<g class="pele-clusters">${Ge}</g>` : "") + (Ue ? `<g class="pele-edges" fill="none" stroke="${Qe}" stroke-linecap="round">${Ue}</g>` : "") + (Be ? `<g class="pele-cluster-titles">${Be}</g>` : "") + (He ? `<g class="pele-edge-labels" font-size="${C}">${He}</g>` : "") + (ze ? `<g class="pele-cardinalities" font-size="${S}" fill="var(--_m)">${ze}</g>` : "") + `<g class="pele-nodes">${Ce}</g>`);
  return { svg: ls("class", pe.width, pe.height, E, r, t, pe.content), width: pe.width, height: pe.height, links: ot };
}
var Ps = { type: "class", math: !0, parse(t, i, r) {
  let c = new cs();
  return r && (c.title = r), fs(t, c), c;
}, render: xs };
export {
  Ps as classDiagram
};
//# sourceMappingURL=3DFH3JVF-422121db.js.map

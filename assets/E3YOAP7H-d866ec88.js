var ot = Object.defineProperty;
var nt = (t, s, r) => s in t ? ot(t, s, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[s] = r;
var j = (t, s, r) => (nt(t, typeof s != "symbol" ? s + "" : s, r), r);
import { c as ht } from "./G3MDBVQH-bcd5257d.js";
import { x as ct, h as dt } from "./WJQKAQUO-dbb8c0b4.js";
import { q as Pe, z as Se, j as ft, H as ut } from "./QRQ46LE7-b110495e.js";
import { g as pt } from "./ECH2OJJK-8814648a.js";
import { U as $t, M as gt } from "./6B2VI7MB-716cdb27.js";
import { d as yt, b as bt, e as le, V as Ke, t as Ne, i as fe } from "./lazy-950901f8.js";
import { m as mt, c as _t } from "./DKTLEL5E-e2b762b2.js";
import { T as wt, G as Et } from "./YTAM2TF7-f178d8af.js";
import { e as he, a as Tt, u as Mt, L as Ee, x as $, f as me, V as Te, S as Me, b as At, m as Ct, c as xt, i as St, n as Nt, s as Ot, j as kt, $ as It } from "./3G3HCGVE-09704139.js";
function Rt(t) {
  return t === "markdown" || t === "string" || t === "text" ? t : "markdown";
}
var vt = class {
  constructor() {
    j(this, "type", "er");
    j(this, "direction", "TB");
    j(this, "entities", /* @__PURE__ */ new Map());
    j(this, "relationships", []);
    j(this, "classes", /* @__PURE__ */ new Map());
    j(this, "subgraphs", []);
    j(this, "title");
    j(this, "accTitle");
    j(this, "accDescr");
    j(this, "subgraphLookup", /* @__PURE__ */ new Map());
    j(this, "claimed", /* @__PURE__ */ new Set());
  }
  addEntity(t, s = "") {
    let r = this.entities.get(t);
    return r === void 0 ? (r = { id: `entity-${t}-${this.entities.size}`, label: t, alias: s, attributes: [], cssClasses: "default", cssStyles: [] }, this.entities.set(t, r)) : !r.alias && s && (r.alias = s), r;
  }
  addAttributes(t, s) {
    var i, f;
    let r = this.addEntity(t);
    for (let l = s.length - 1; l >= 0; l--) {
      let e = s[l];
      (i = e.keys) != null || (e.keys = []), (f = e.comment) != null || (e.comment = ""), r.attributes.push(e);
    }
  }
  addRelationship(t, s, r, i) {
    let f = this.subgraphLookup.has(t) ? t : this.addEntity(t).id, l = this.subgraphLookup.has(r) ? r : this.addEntity(r).id;
    this.relationships.push({ entityA: f, roleA: s, entityB: l, relSpec: i });
  }
  setDirection(t) {
    this.direction = t;
  }
  addCssStyles(t, s) {
    if (s)
      for (let r of t) {
        let i = this.entities.get(r);
        if (i)
          for (let l of s)
            i.cssStyles.push(l);
        let f = this.subgraphLookup.get(r);
        if (f)
          for (let l of s)
            f.cssStyles.push(l);
      }
  }
  addClass(t, s) {
    for (let r of t) {
      let i = this.classes.get(r);
      if (i === void 0 && (i = { id: r, styles: [], textStyles: [] }, this.classes.set(r, i)), !!s)
        for (let f of s)
          f.includes("color") && i.textStyles.push(f.replace("fill", "bgFill")), i.styles.push(f);
    }
  }
  setClass(t, s) {
    for (let r of t) {
      let i = this.entities.get(r);
      if (i)
        for (let l of s)
          i.cssClasses += " " + l;
      let f = this.subgraphLookup.get(r);
      if (f)
        for (let l of s)
          f.classes.push(l);
    }
  }
  addSubGraph(t, s, r) {
    let i = t.text.trim(), f = /* @__PURE__ */ new Set(), l = [], e;
    for (let u of s.flat()) {
      if (typeof u != "string") {
        (u == null ? void 0 : u.stmt) === "dir" && (e = u.value);
        continue;
      }
      let d = u.trim();
      d === "" || f.has(d) || (f.add(d), this.claimed.has(u) || l.push(u));
    }
    for (let u of l)
      this.claimed.add(u);
    let y = { id: i, nodes: l, title: (r.text || "").trim(), classes: [], cssStyles: [], dir: e, labelType: Rt(r.type) };
    return this.subgraphs.push(y), this.subgraphLookup.set(i, y), i;
  }
  setAccTitle(t) {
    this.accTitle = t.replace(/^\s+/g, "");
  }
  setAccDescription(t) {
    this.accDescr = t.replace(/\n\s+/g, `
`);
  }
}, Ze = ["$end", "INVALID", "ER_DIAGRAM", "EOF", "NEWLINE", "COLON", "STYLE_SEPARATOR", "BLOCK_START", "BLOCK_STOP", "SQS", "SQE", "acc_title", "acc_title_value", "acc_descr", "acc_descr_value", "acc_descr_multiline_value", "END", "SUBGRAPH", "direction_tb", "direction_bt", "direction_rl", "direction_lr", "CLASSDEF", "UNICODE_TEXT", "STYLE_TEXT", "COMMA", "CLASS", "STYLE", "SEMI", "NUM", "BRKT", "ENTITY_NAME", "DECIMAL_NUM", "ENTITY_ONE", "ATTRIBUTE_WORD", "ATTRIBUTE_KEY", "COMMENT", "ZERO_OR_ONE", "ZERO_OR_MORE", "ONE_OR_MORE", "ONLY_ONE", "MD_PARENT", "NON_IDENTIFYING", "IDENTIFYING", "WORD", "CHAR"], ge = 1, Ae = 2, Ye = 4, ye = 8, q = new Uint8Array(128);
for (let t = 0; t < 128; t++) {
  let s = t >= 48 && t <= 57 || t >= 65 && t <= 90 || t >= 97 && t <= 122 || t === 95, r = s && (t < 48 || t > 57);
  s && (q[t] |= ge | Ae | ye), r && (q[t] |= Ye);
}
for (let t of "-*")
  q[t.charCodeAt(0)] |= ge | Ae | ye;
q[46] |= ge | ye;
q[42] |= Ye;
for (let t of "[](),")
  q[t.charCodeAt(0)] |= ye;
var Lt = /accTitle\s*:\s*/iy, Dt = /accDescr\s*:\s*/iy, Gt = /accDescr\s*\{\s*/iy, Yt = [/.*direction\s+TB[^\n]*/iy, /.*direction\s+BT[^\n]*/iy, /.*direction\s+RL[^\n]*/iy, /.*direction\s+LR[^\n]*/iy], Oe = /direction/gi, ke = /[\n\r\u2028\u2029]/g;
function je(t, s) {
  return t < 128 ? (q[t] & s) !== 0 : t >= 192 || t === 181;
}
function zt(t) {
  let s = t.length, r = [], i = [], f = [], l = 0, e = 0, y = -2, u = 0, d = -1, b = -2, _ = -1, M = -1, A = -1, h = (o, a, m) => {
    r.push(o), i.push(t.slice(a, m)), f.push(a), e = m;
  }, X = (o, a) => (o.lastIndex = a, o.test(t) ? o.lastIndex : -1), H = (o) => {
    for (let a = 0; a < o.length; a++) {
      let m = o.charCodeAt(a), Y = t.charCodeAt(e + a);
      if (Y !== m && (m < 97 || m > 122 || (Y | 32) !== m))
        return !1;
    }
    return !0;
  }, O = (o) => H(o) && !fe(t.charCodeAt(e + o.length)), Q = (o) => {
    let a = t.charCodeAt(o);
    return a >= 65 && a <= 90 ? a + 32 : a;
  }, U = (o) => (ke.lastIndex = o, ke.test(t) ? ke.lastIndex - 1 : s), D = (o) => {
    for (; Ne(t.charCodeAt(o)); )
      o++;
    return o;
  }, v = () => {
    if (y === -1 || y < e && (Oe.lastIndex = e, y = Oe.test(t) ? Oe.lastIndex - 9 : -1, y === -1) || e < u || (d < e && (d = U(e)), y >= d))
      return !1;
    for (let o = 0; o < 4; o++) {
      let a = X(Yt[o], e);
      if (a >= 0)
        return h(18 + o, e, a), !0;
    }
    return u = d, !1;
  }, G = () => {
    let o = t.indexOf('"', e + 1);
    if (o === -1) {
      h(45, e, e + 1);
      return;
    }
    let a = o > e + 1;
    for (let m = e + 1; a && m < o; m++) {
      let Y = t.charCodeAt(m);
      (Y === 37 || Y === 92 || Y === 13 || Y === 10 || Y === 11 || Y === 8) && (a = !1);
    }
    h(a ? 31 : 44, e, o + 1);
  }, c = (o) => {
    let a = t.charCodeAt(e + 1);
    if (a === 43 && (o === 49 || o === 48)) {
      h(o === 49 ? 39 : 38, e, e + 2);
      return;
    }
    let m = D(e + 1);
    if (t.charCodeAt(m) === 46 && Ne(t.charCodeAt(m + 1))) {
      h(32, e, D(m + 2));
      return;
    }
    if (o === 49) {
      if (le(a)) {
        let Y = e + 2;
        for (; le(t.charCodeAt(Y)); )
          Y++;
        let ae = t.charCodeAt(Y);
        if (fe(ae) || ae === 34 || ae === 39) {
          h(40, e, e + 1);
          return;
        }
      } else if (a === 45 || a === 46) {
        let Y = t.charCodeAt(e + 2);
        if (Y === 45 || Y === 46) {
          h(40, e, e + 1);
          return;
        }
      }
      if (!fe(a)) {
        h(33, e, e + 1);
        return;
      }
    }
    h(29, e, m);
  }, p = (o) => {
    let a = t.charCodeAt(e + 1);
    switch (o) {
      case 101:
        if (O("erdiagram"))
          h(2, e, e + 9);
        else if (O("end")) {
          let m = e + 3;
          for (; le(t.charCodeAt(m)); )
            m++;
          h(16, e, m);
        } else
          return !1;
        return !0;
      case 115:
        if (O("style"))
          l = 6, h(27, e, e + 5);
        else if (O("subgraph"))
          h(17, e, e + 8);
        else
          return !1;
        return !0;
      case 99:
        if (O("classdef"))
          l = 6, h(22, e, e + 8);
        else if (O("class"))
          h(26, e, e + 5);
        else
          return !1;
        return !0;
      case 111:
        if (O("one or zero"))
          h(37, e, e + 11);
        else if (O("one or more") || O("one or many"))
          h(39, e, e + 11);
        else if (O("one"))
          h(40, e, e + 3);
        else if (O("only one"))
          h(40, e, e + 8);
        else if (a === 124)
          h(37, e, e + 2);
        else if (a === 123)
          h(38, e, e + 2);
        else if (O("optionally to"))
          h(42, e, e + 13);
        else
          return !1;
        return !0;
      case 122:
        if (O("zero or one"))
          h(37, e, e + 11);
        else if (O("zero or more") || O("zero or many"))
          h(38, e, e + 12);
        else
          return !1;
        return !0;
      case 109:
        if (H("many(0)"))
          h(38, e, e + 7);
        else if (H("many(1)"))
          h(39, e, e + 7);
        else if (O("many"))
          h(38, e, e + 4);
        else
          return !1;
        return !0;
      case 116:
        return O("to") ? (h(43, e, e + 2), !0) : !1;
      case 117:
        return a !== 46 && a !== 45 && a !== 124 ? !1 : (h(41, e, e + 1), !0);
      case 124:
        if (Q(e + 1) === 111 && !fe(t.charCodeAt(e + 2)))
          h(37, e, e + 2);
        else if (a === 124)
          h(40, e, e + 2);
        else if (a === 123)
          h(39, e, e + 2);
        else
          return !1;
        return !0;
      case 125:
        if (Q(e + 1) === 111 && !fe(t.charCodeAt(e + 2)))
          h(38, e, e + 2);
        else if (a === 124)
          h(39, e, e + 2);
        else
          return !1;
        return !0;
      case 46:
        return a !== 46 && a !== 45 ? !1 : (h(42, e, e + 2), !0);
      case 45:
        if (a === 45)
          h(43, e, e + 2);
        else if (a === 46)
          h(42, e, e + 2);
        else
          return !1;
        return !0;
    }
    return !1;
  }, N = (o) => {
    let a;
    if ((o === 97 || o === 65) && H("acc")) {
      if ((a = X(Lt, e)) >= 0) {
        l = 3, h(11, e, a);
        return;
      }
      if ((a = X(Dt, e)) >= 0) {
        l = 4, h(13, e, a);
        return;
      }
      if ((a = X(Gt, e)) >= 0) {
        l = 5, e = a;
        return;
      }
    }
    if (!v()) {
      switch (o) {
        case 32:
        case 9:
        case 13:
          a = e + 1;
          for (let m = t.charCodeAt(a); m === 32 || m === 9 || m === 13; m = t.charCodeAt(a))
            a++;
          e = a;
          return;
        case 10:
          for (a = e + 1; t.charCodeAt(a) === 10; )
            a++;
          h(4, e, a);
          return;
        case 34:
          G();
          return;
        case 123:
          l = 1, h(7, e, e + 1);
          return;
        case 35:
          h(30, e, e + 1);
          return;
        case 44:
          h(25, e, e + 1);
          return;
        case 58:
          t.charCodeAt(e + 1) === 58 && t.charCodeAt(e + 2) === 58 ? h(6, e, e + 3) : h(5, e, e + 1);
          return;
        case 91:
          h(9, e, e + 1);
          return;
        case 93:
          h(10, e, e + 1);
          return;
      }
      if (Ne(o)) {
        c(o);
        return;
      }
      if (!p(o >= 65 && o <= 90 ? o + 32 : o)) {
        if (o >= 128 || (q[o] & ge) !== 0) {
          a = e + 1;
          for (let m = t.charCodeAt(a); m >= 128 || (q[m] & ge) !== 0; m = t.charCodeAt(a))
            a++;
          h(23, e, a);
          return;
        }
        h(45, e, e + 1);
      }
    }
  }, z = () => {
    if (b === -1 || b < e && (b = t.indexOf("~", e), b === -1))
      return !1;
    if (A < e) {
      let a = e;
      for (; a < s && !le(t.charCodeAt(a)); )
        a++;
      A = a;
    }
    if (b >= A || (_ < e && (_ = U(e), M = t.lastIndexOf("~", _ - 1)), M <= b))
      return !1;
    let o = M + 1;
    for (; o < s && !le(t.charCodeAt(o)); )
      o++;
    return h(34, e, o), !0;
  }, se = (o) => {
    if (le(o)) {
      for (e++; le(t.charCodeAt(e)); )
        e++;
      return;
    }
    let a = o | 32;
    if ((a === 112 || a === 102 || a === 117) && (t.charCodeAt(e + 1) | 32) === 107 && !fe(t.charCodeAt(e + 2))) {
      h(35, e, e + 2);
      return;
    }
    if (!z()) {
      if (je(o, Ye)) {
        let m = e + 1;
        for (; m < s && je(t.charCodeAt(m), ye); )
          m++;
        h(34, e, m);
        return;
      }
      if (o === 96) {
        l = 2, e++;
        return;
      }
      if (o === 34) {
        let m = t.indexOf('"', e + 1);
        if (m !== -1) {
          h(36, e, m + 1);
          return;
        }
      } else if (o === 125) {
        l = 0, h(8, e, e + 1);
        return;
      }
      h(45, e, e + 1);
    }
  };
  for (; e < s; ) {
    let o = t.charCodeAt(e), a;
    switch (l) {
      case 0:
        N(o);
        break;
      case 1:
        se(o);
        break;
      case 2:
        o === 96 ? (l = 1, e++) : (a = t.indexOf("`", e), h(34, e, a === -1 ? s : a));
        break;
      case 3:
      case 4:
        a = t.indexOf(`
`, e), h(l === 3 ? 12 : 14, e, a === -1 ? s : a), l = 0;
        break;
      case 5:
        o === 125 ? (l = 0, e++) : (a = t.indexOf("}", e), h(15, e, a === -1 ? s : a));
        break;
      case 6:
        if (o === 10) {
          for (a = e + 1; t.charCodeAt(a) === 10; )
            a++;
          l = 0, h(4, e, a);
        } else if (le(o))
          for (e++; le(t.charCodeAt(e)); )
            e++;
        else if (o === 58)
          h(5, e, e + 1);
        else if (o === 44)
          h(25, e, e + 1);
        else if (o === 35)
          h(30, e, e + 1);
        else if (o === 59)
          h(28, e, e + 1);
        else if (o >= 128 || (q[o] & Ae) !== 0) {
          a = e + 1;
          for (let m = t.charCodeAt(a); m >= 128 || (q[m] & Ae) !== 0; m = t.charCodeAt(a))
            a++;
          h(24, e, a);
        } else
          return r.push(1), i.push(""), f.push(e), { types: r, texts: i, starts: f };
        break;
    }
  }
  let W = l === 0 ? 3 : l === 3 ? 12 : l === 4 ? 14 : l === 5 ? 15 : -1;
  return W !== -1 && (r.push(W), i.push(""), f.push(s)), r.push(0), i.push(""), f.push(s), { types: r, texts: i, starts: f };
}
var Ie = /* @__PURE__ */ new Map([[37, "ZERO_OR_ONE"], [38, "ZERO_OR_MORE"], [39, "ONE_OR_MORE"], [40, "ONLY_ONE"], [41, "MD_PARENT"]]), Bt = ["TB", "BT", "RL", "LR"], it = "'UNICODE_TEXT', 'NUM', 'ENTITY_NAME', 'DECIMAL_NUM', 'ENTITY_ONE'", Ut = "'ZERO_OR_ONE', 'ZERO_OR_MORE', 'ONE_OR_MORE', 'ONLY_ONE', 'MD_PARENT'", _e = "'EOF', 'NEWLINE', 'title', 'acc_title', 'acc_descr', 'acc_descr_multiline_value', 'SUBGRAPH', 'direction_tb', 'direction_bt', 'direction_rl', 'direction_lr', 'CLASSDEF', 'CLASS', 'STYLE', " + it;
function Ft(t, s) {
  let { types: r, texts: i, starts: f } = zt(t), l = 0, e = (c) => {
    let p = r[l];
    throw p === 1 ? Ke("er", t, f[l], "", !0) : Ke("er", t, f[l], `Expecting ${c}, got '${p === 45 ? i[l] : Ze[p]}'`);
  }, y = (c) => (r[l] !== c && e(`'${Ze[c]}'`), i[l++]), u = () => {
    let c = r[l];
    c !== 4 && c !== 28 && c !== 3 && e("'EOF', 'NEWLINE', 'SEMI'"), l++;
  }, d = (c) => c === 23 || c === 31 || c === 29 || c === 32 || c === 33, b = () => {
    let c = r[l];
    d(c) || e(it);
    let p = i[l++];
    return c === 31 ? p.slice(1, -1) : p;
  }, _ = () => {
    let c = [];
    for (; ; ) {
      let p = r[l];
      if (p !== 23 && p !== 24 && e("'UNICODE_TEXT', 'STYLE_TEXT'"), c.push(i[l++]), r[l] !== 25)
        return c;
      l++;
    }
  }, M = (c) => c === 24 || c === 29 || c === 5 || c === 30, A = () => {
    let c = [];
    for (; ; ) {
      M(r[l]) || e("'STYLE_TEXT', 'COLON', 'NUM', 'BRKT'");
      let p = i[l++];
      for (; M(r[l]); )
        p += i[l++];
      if (c.push(p), r[l] !== 25)
        return c;
      l++;
    }
  }, h = () => {
    let c = Ie.get(r[l++]), p = r[l];
    p !== 43 && p !== 42 && e("'NON_IDENTIFYING', 'IDENTIFYING'");
    let N = p === 43 ? "IDENTIFYING" : "NON_IDENTIFYING";
    l++;
    let z = Ie.get(r[l]);
    return z === void 0 ? e(Ut) : (l++, { cardA: z, relType: N, cardB: c });
  }, X = () => {
    let c = r[l];
    c !== 44 && c !== 31 && c !== 23 && e("'UNICODE_TEXT', 'ENTITY_NAME', 'WORD'");
    let p = i[l++];
    return c === 23 ? p : p.slice(1, -1);
  }, H = (c) => r[l] === 45 && i[l] === c, O = () => {
    let c = [];
    do {
      let p = y(34);
      H("?") && (p += i[l++]), r[l] !== 34 && e(p.endsWith("?") ? "'ATTRIBUTE_WORD'" : "'ATTRIBUTE_WORD', '?'");
      let N = { type: p, name: i[l++] };
      if (r[l] === 35) {
        let z = [i[l++]];
        for (; H(","); )
          l++, z.push(y(35));
        N.keys = z;
      }
      r[l] === 36 && (N.comment = i[l++].slice(1, -1)), c.push(N);
    } while (r[l] !== 8);
    return c.reverse();
  }, Q = () => {
    if (r[l] !== 7)
      return;
    if (l++, r[l] === 8) {
      l++;
      return;
    }
    let c = O();
    return l++, c;
  }, U = () => {
    let c = b(), p = r[l];
    if (p === 9) {
      l++;
      let se = b();
      y(10);
      let W;
      r[l] === 6 && (l++, W = _());
      let o = Q();
      return s.addEntity(c, se), o && s.addAttributes(c, o), W && s.setClass([c], W), [c];
    }
    let N;
    if (p === 6 && (l++, N = _(), p = r[l]), Ie.has(p)) {
      let se = h(), W = b(), o;
      r[l] === 6 && (l++, o = _()), y(5);
      let a = X();
      return s.addEntity(c), s.addEntity(W), s.addRelationship(c, a, W, se), N && s.setClass([c], N), o && s.setClass([W], o), [c, W];
    }
    let z = Q();
    return s.addEntity(c), z && s.addAttributes(c, z), N && s.setClass([c], N), [c];
  };
  y(2);
  let D = [{ id: "", title: "", list: [] }], v = D[0], G = !1;
  for (; ; ) {
    let c = r[l];
    switch (c) {
      case 4:
        l++;
        break;
      case 3:
        l++, G && e(`'END', ${_e}`);
        return;
      case 16: {
        G || e(_e), l++;
        let p = s.addSubGraph({ text: v.id }, v.list, { text: v.title });
        D.pop(), v = D[D.length - 1], G = D.length > 1, G && v.list.push(p);
        break;
      }
      case 17: {
        l++;
        let p = b(), N = p;
        if (r[l] === 9) {
          for (l++, N = b(); d(r[l]); )
            N += " " + b();
          y(10);
        }
        u(), v = { id: p, title: N, list: [] }, D.push(v), G = !0;
        break;
      }
      case 11: {
        l++;
        let p = y(12).trim();
        s.setAccTitle(p), G && v.list.push(p);
        break;
      }
      case 13: {
        l++;
        let p = y(14).trim();
        s.setAccDescription(p), G && v.list.push(p);
        break;
      }
      case 15: {
        let p = i[l++].trim();
        s.setAccDescription(p), G && v.list.push(p);
        break;
      }
      case 18:
      case 19:
      case 20:
      case 21: {
        l++;
        let p = Bt[c - 18];
        G ? v.list.push({ stmt: "dir", value: p }) : s.setDirection(p);
        break;
      }
      case 22: {
        let p = i[l++], N = _(), z = A();
        u(), s.addClass(N, z), G && v.list.push(p);
        break;
      }
      case 26: {
        let p = i[l++], N = _();
        s.setClass(N, _()), G && v.list.push(p);
        break;
      }
      case 27: {
        let p = i[l++], N = _(), z = A();
        u(), s.addCssStyles(N, z), G && v.list.push(p);
        break;
      }
      default: {
        d(c) || e(G ? `'END', ${_e}` : _e);
        let p = U();
        if (G)
          for (let N of p)
            v.list.push(N);
      }
    }
  }
}
var Ht = [];
function Xt(t) {
  let s = [], r = [], i = t.subgraphs, f = (u) => {
    let d = [];
    for (let b of u) {
      let _ = t.classes.get(b);
      if (_ !== void 0) {
        for (let M of _.styles)
          d.push(M.trim());
        for (let M of _.textStyles)
          d.push(M.trim());
      }
    }
    return d;
  }, l = /* @__PURE__ */ new Map(), e = /* @__PURE__ */ new Set();
  for (let u = i.length - 1; u >= 0; u--) {
    let d = i[u];
    e.add(d.id);
    for (let b of d.nodes)
      l.set(b, d.id);
  }
  for (let u = i.length - 1; u >= 0; u--) {
    let d = i[u];
    s.push({ id: d.id, label: d.title, alias: "", attributes: Ht, isGroup: !0, parentId: l.get(d.id), cssStyles: d.cssStyles, cssCompiledStyles: f(d.classes), cssClasses: d.classes.join(" "), dir: d.dir, labelType: d.labelType });
  }
  let y = /* @__PURE__ */ new Map();
  for (let [u, d] of t.entities) {
    if (e.has(u)) {
      y.set(d.id, u);
      continue;
    }
    s.push({ id: d.id, label: d.label, alias: d.alias, attributes: d.attributes, isGroup: !1, parentId: l.get(u), cssStyles: d.cssStyles, cssCompiledStyles: f(d.cssClasses.split(" ")), cssClasses: d.cssClasses, dir: void 0, labelType: "markdown" });
  }
  return t.relationships.forEach((u, d) => {
    var b, _;
    r.push({ id: `id_${u.entityA}_${u.entityB}_${d}`, start: (b = y.get(u.entityA)) != null ? b : u.entityA, end: (_ = y.get(u.entityB)) != null ? _ : u.entityB, label: u.roleA, arrowTypeStart: u.relSpec.cardB.toLowerCase(), arrowTypeEnd: u.relSpec.cardA.toLowerCase(), pattern: u.relSpec.relType === "IDENTIFYING" ? "solid" : "dashed" });
  }), { nodes: s, edges: r };
}
var re = 18, Ve = 5, qe = 6, Re = 10, Qe = 3.5;
function ue(t, s, r, i, f) {
  let l = (b, _) => $(s - i * b - f * _) + "," + $(r - f * b + i * _), e = (b) => `M${l(b, -Ve)}L${l(b, Ve)}`, y = `M${l(0, -qe)}L${l(Re, 0)}L${l(0, qe)}`, u = (b) => `<circle class="pele-marker" cx="${$(s - i * b)}" cy="${$(r - f * b)}" r="${Qe}" fill="var(--_bg)"/>`, d = (b) => `<path class="pele-marker" d="${b}"/>`;
  switch (t) {
    case "only_one":
      return d(e(6) + e(10));
    case "zero_or_one":
      return d(e(6)) + u(13.5);
    case "one_or_more":
      return d(y + e(Re + 3.5));
    case "zero_or_more":
      return d(y) + u(Re + Qe + 0.5);
    case "md_parent":
      return `<path class="pele-marker" d="M${l(0, 0)}L${l(6, 4)}L${l(12, 0)}L${l(6, -4)}Z" fill="var(--_bg)"/>`;
  }
  return "";
}
var Wt = 48, Pt = 20, Kt = 64, pe = 20, $e = 28, Zt = 38, Je = 96, et = 18, jt = 12, Vt = 9, ve = 12, tt = 16, Le = 9, qt = 260, De = 1e6, Qt = [], Jt = 18, el = 14, lt = ' fill="var(--_s)" stroke="var(--_b)"';
function rt(t, s, r) {
  var f;
  let i = (f = t.er) == null ? void 0 : f[s];
  return typeof i == "number" && i > 0 ? Math.min(i, 2e3) : r;
}
function we(t, s, r, i, f) {
  var M;
  let l = t.lines;
  if (l.length === 0)
    return "";
  let e = l.length === 1 && l[0].length === 1 ? l[0][0] : void 0;
  if (e && e.icon === void 0 && e.math === void 0 && e.style === 0)
    return `<text${i} x="${$(s)}" y="${$(r)}">${Me(e.text)}</text>`;
  let y = xt(t), u = t.size * 0.35, d = r - u - t.lineHeight / 2, b = "", _ = "";
  for (let A = 0; A < l.length; A++) {
    let h = l[A], X = d + St(t, A);
    if (Nt(h)) {
      _ += Te(Ot(t, A), s + t.widths[A] / 2, X, i, f);
      continue;
    }
    r = X + u;
    let H = !1;
    for (let U of h)
      U.icon !== void 0 && (H = !0);
    let O = s, Q = !1;
    for (let U of h) {
      if (U.icon !== void 0) {
        let D = t.size * 1.1;
        _ += `<svg class="pele-icon" data-icon="${Ee(U.icon)}" x="${$(O)}" y="${$(r - t.size * 0.35 - D / 2)}" width="${$(D)}" height="${$(D)}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${(M = f == null ? void 0 : f(U.icon)) != null ? M : ""}</svg>`;
      } else if (U.text !== "") {
        let D = H || !Q ? ` x="${$(O)}" y="${$(r)}"` : "";
        b += `<tspan${D}${kt(U.style & ~y)}>${Me(U.text)}</tspan>`, Q = !0;
      }
      O += U.width;
    }
  }
  return `<text${It(i, y)} xml:space="preserve">${b}</text>${_}`;
}
function Ge(t) {
  let s = ht(t);
  return s === t ? t : s.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function tl(t, s, r) {
  return mt(t.direction) ? _t(r, (i) => st(t, s, r, i)) : st(t, s, r, !1);
}
function st(t, s, r, i) {
  var ze, Be, Ue, Fe, He, Xe, We;
  let f = Xt(t), l = (ze = r.fontSize) != null ? ze : 16, e = Math.round(l * 0.875), y = (Be = r.measurer) != null ? Be : yt(r.fontFamily, r.fontFamilyMono), u = (Ue = r.padding) != null ? Ue : 8, d = r.icons, b = /* @__PURE__ */ new Map(), _ = [], M = [];
  f.nodes.forEach((w, n) => b.set(w.id, n));
  let A = [], h = [], X = [], H = /* @__PURE__ */ new Map(), O = [];
  for (let w of f.edges) {
    let n = b.get(w.start), g = b.get(w.end);
    if (n === void 0 || g === void 0)
      continue;
    let T = he(w.label, !0, y, e, 200), k;
    if (n === g) {
      k = { label: T, band: 0, at: 0 };
      let I = H.get(n);
      I ? I.push(k) : H.set(n, [k]);
    }
    O.push(k), X.push(w), h.push(T), A.push({ src: n, dst: g, minlen: 1, labelW: T.width > 0 ? T.width + 12 : 0, labelH: T.height > 0 ? T.height + 4 : 0, route: [], labelX: 0, labelY: 0 });
  }
  let Q = (w) => {
    let n = w;
    for (let g = 0; g < f.nodes.length; g++) {
      let T = f.nodes[n].parentId, k = T === void 0 ? void 0 : b.get(T);
      if (k === void 0)
        break;
      let I = f.nodes[k].dir;
      if (I)
        return I === "LR" || I === "RL";
      n = k;
    }
    return t.direction === "LR" || t.direction === "RL";
  };
  for (let w = 0; w < f.nodes.length; w++) {
    let n = f.nodes[w], g = Tt(n.cssStyles.length > 0 ? n.cssCompiledStyles.concat(n.cssStyles) : n.cssCompiledStyles), T = (g.bold ? 1 : 0) | (g.italic ? 2 : 0), k = (Fe = g.fontSize) != null ? Fe : l, I = (He = g.fontSize) != null ? He : e, F = (Xe = g.fontSize) != null ? Xe : Math.round(l * 0.75), B = n.isGroup ? he(n.label, !0, y, k, 4e3, T) : he(n.alias || n.label, !0, y, k, 240, T), V = (We = H.get(w)) != null ? We : Qt, C = V.length > 0 && !n.isGroup && Q(w), S = { node: n, style: g, label: B, w: 0, h: 0, headH: 0, rows: [], cols: [], rowSize: I, keySize: F, below: C }, R = 0, P = 0;
    for (let L of V)
      L.band = Math.max(Zt, C ? L.label.width + 12 : L.label.height + 6), P += L.band, R = Math.max(R, C ? L.label.height : L.label.width);
    let E = Math.max(Je, C ? P + 8 : 0), x;
    if (n.isGroup)
      x = Se(0, 0), x.isGroup = !0, x.dir = n.dir ? Pe(n.dir) : void 0, x.padX = pe, x.padTop = S.label.height > 0 ? S.label.height + 16 : pe, x.padBottom = pe, x.minW = Math.max(S.label.width + 2 * pe - 12, Je);
    else {
      let L = Math.max(B.height, Math.round(k * 1.5));
      if (n.attributes.length === 0)
        S.w = Math.max(B.width + 2 * et, E), S.h = Math.max(L + 2 * jt, C ? 0 : P + 8);
      else {
        let be = Math.round(I * 1.5), J = [0, 0, 0, 0];
        for (let Z of n.attributes) {
          let ne = [he(Ge(Z.type), !0, y, I, De, T), he(Ge(Z.name), !0, y, I, De, T), he(Z.keys.join(", "), !1, y, F, De, T), he(Ge(Z.comment), !0, y, I, qt, T)], de = be;
          for (let ee = 0; ee < 4; ee++)
            ne[ee].width > J[ee] && (J[ee] = ne[ee].width), ne[ee].height > de && (de = ne[ee].height);
          S.rows.push({ cells: ne, h: de + Le }), S.h += de + Le;
        }
        let ce = 0, te = 0;
        for (let Z of J)
          Z !== 0 && (te += Z + (ce > 0 ? tt : 0), ce++);
        S.w = Math.max(te + 2 * ve, B.width + 2 * et, E);
        let ie = ce > 0 ? (S.w - te - 2 * ve) / ce : 0, oe = ve;
        for (let Z of J)
          S.cols.push(oe), Z > 0 && (oe += Z + ie + tt);
        S.headH = L + 2 * Vt, S.h += S.headH;
      }
      let K = V.length > 0 ? 2 * (re + $e * 0.75 + 10 + R) : 0;
      x = C ? Se(S.w, S.h + K) : Se(S.w + K, S.h);
    }
    x.seq = _.length, _.push(S), M.push(x);
  }
  f.nodes.forEach((w, n) => {
    var g;
    M[n].parent = w.parentId !== void 0 && (g = b.get(w.parentId)) != null ? g : -1;
  });
  let U = ft(M, A, i ? "TB" : Pe(t.direction), { nodeSep: rt(s, "nodeSpacing", Wt), edgeSep: Pt, rankSep: rt(s, "rankSpacing", Kt), portSep: 24 });
  rl(A, M, _);
  let D = U.width;
  for (let [w, n] of H) {
    let g = M[w];
    if (!g.isGroup)
      continue;
    let T = 0;
    for (let k of n)
      T = Math.max(T, k.label.width);
    D = Math.max(D, g.x + g.w / 2 + re + $e * 0.75 + 10 + T);
  }
  let v = pt(t.title, y, l, 4e3), G = v.height > 0 ? v.height + 12 : 0, c = Math.max(D, v.width), p = u + (c - D) / 2, N = u + G;
  ut(M, A, p, N);
  let z = Math.ceil(c + 2 * u), se = Math.ceil(U.height + G + 2 * u), W = [], o = /* @__PURE__ */ new Map(), a = !1;
  for (let w of M)
    w.isGroup && (a = !0);
  if (a)
    for (let w of A)
      ct(o, w.route);
  let m = "", Y = "";
  for (let w = 0; w < _.length; w++) {
    let n = _[w], g = M[w], T = n.node, k = Mt(T.cssClasses.replace(/^default\s?/, ""));
    if (g.isGroup) {
      n.w = g.w, n.h = g.h;
      let x = g.x - g.w / 2, L = g.y - g.h / 2, K = dt(g, n.label.width, o, pe);
      m += `<g class="pele-cluster${k}" data-id="${Ee(T.id)}"><rect x="${$(x)}" y="${$(L)}" width="${$(g.w)}" height="${$(g.h)}" fill="var(--_a)" fill-opacity="0.5" stroke="var(--_b)"${me(n.style.shape)}/>` + Te(n.label, K, L + 8 + n.label.height / 2, ` class="pele-cluster-label" fill="var(--_m)"${n.style.text}`, d) + "</g>";
      continue;
    }
    let I = n.w, F = n.h, B = -I / 2, V = -F / 2, C = n.style.text, S = `x="${$(B)}" y="${$(V)}" width="${$(I)}" height="${$(F)}"`, R = Te(n.label, 0, n.rows.length > 0 ? V + n.headH / 2 : 0, ` class="pele-label"${C}`, d), P = bt(T.alias || T.label);
    if (/ internal-link(?: |$)/.test(k + " ") && R !== "" && r.links !== !1) {
      let x = $t(P, r), L = Me(P);
      R = `<a class="internal-link"${x ? ` href="${L}"${gt(r)}` : ""} data-href="${L}">${R}</a>`, W.push({ id: T.label, href: P, internal: !0 });
    }
    let E;
    if (n.rows.length === 0)
      E = `<rect ${S}${me(lt + n.style.shape)}/>` + R;
    else {
      let x = Math.round(n.rowSize * 1.5), L = n.style.stroke ? Me(n.style.stroke) : "var(--_b)", K = "", be = "", J = V + n.headH;
      for (let te = 0; te < n.rows.length; te++) {
        let ie = n.rows[te];
        if (te % 2 === 0) {
          let xe = `x="${$(B)}" width="${$(I)}"`;
          te === n.rows.length - 1 ? K += `<rect ${xe} y="${$(J)}" height="${$(ie.h)}"${At}/><rect ${xe} y="${$(J)}" height="${$(ie.h / 2)}"/>` : K += `<rect ${xe} y="${$(J)}" height="${$(ie.h)}"/>`;
        }
        let oe = J + Le / 2 + x / 2 + n.rowSize * 0.35, [Z, ne, de, ee] = ie.cells;
        be += we(Z, B + n.cols[0], oe, ` class="pele-er-type" fill="var(--_m)"${C}`, d) + we(ne, B + n.cols[1], oe, ` class="pele-er-name"${C}`, d) + we(de, B + n.cols[2], oe, ` class="pele-er-keys" font-size="${n.keySize}" fill="var(--_m)"${C}`, d) + we(ee, B + n.cols[3], oe, ` class="pele-er-comment" fill="var(--_m)"${C}`, d), J += ie.h;
      }
      let ce = $(V + n.headH);
      E = `<rect ${S}${me(lt + n.style.shape)}/><g class="pele-er-stripes" fill="var(--_bg)"${n.style.shape.includes("fill:") ? ' opacity="0.6"' : ""}>${K}</g><path class="pele-er-divider" d="M${$(B)},${ce}H${$(B + I)}" stroke="${L}"/><rect ${S} fill="none" stroke="var(--_b)"${me(n.style.line)}/>` + R + `<g class="pele-er-attributes" font-size="${n.rowSize}">${be}</g>`;
    }
    Y += `<g class="pele-node pele-entity${k}" data-id="${Ee(T.label)}" transform="translate(${$(g.x)},${$(g.y)})">${E}</g>`;
  }
  for (let [w, n] of H) {
    let g = _[w], T = 0;
    for (let F of n)
      T += F.band;
    let k = Math.min(1, Math.max((g.below ? g.w : g.h) - 8, 0) / T), I = -T * k / 2;
    for (let F of n)
      F.band *= k, F.at = I + F.band / 2, I += F.band;
  }
  let ae = "", Ce = "";
  for (let w = 0; w < A.length; w++) {
    let n = A[w], g = X[w], T = h[w], k, I, F, B = O[w];
    if (B) {
      let C = M[n.src], S = _[n.src], R = Math.max(Math.min(B.band / 2 - 6, 13), 1), P = re + $e * 0.75 + 6;
      if (S.below) {
        let E = C.x + B.at, x = C.y + S.h / 2, L = $(x + re), K = $(x + re + $e);
        k = `M${$(E - R)},${$(x)}V${L}C${$(E - R)},${K} ${$(E + R)},${K} ${$(E + R)},${L}V${$(x)}`, I = ue(g.arrowTypeStart, E - R, x, 0, -1), F = ue(g.arrowTypeEnd, E + R, x, 0, -1), n.labelX = E, n.labelY = x + P + T.height / 2;
      } else {
        let E = C.x + S.w / 2, x = C.y + B.at, L = $(E + re), K = $(E + re + $e);
        k = `M${$(E)},${$(x - R)}H${L}C${K},${$(x - R)} ${K},${$(x + R)} ${L},${$(x + R)}H${$(E)}`, I = ue(g.arrowTypeStart, E, x - R, -1, 0), F = ue(g.arrowTypeEnd, E, x + R, -1, 0), n.labelX = E + P + T.width / 2, n.labelY = x;
      }
    } else {
      let C = ll(n.route);
      if (C.length < 6)
        continue;
      at(C, 0, _[n.src], M[n.src]), at(C, C.length - 3, _[n.dst], M[n.dst]);
      let S = Math.abs(C[C.length - 3] - C[0]), R = Math.abs(C[C.length - 2] - C[1]), P = C.length === 6 && (S < 0.01 || R < 0.01 || Math.hypot(S, R) <= 3 * re) ? 0 : re, E = wt(C, void 0, P, P);
      k = P > 0 ? `M${$(E.sx)},${$(E.sy)}L${E.d.slice(1)}L${$(E.ex)},${$(E.ey)}` : E.d, I = ue(g.arrowTypeStart, E.sx, E.sy, E.sdx, E.sdy), F = ue(g.arrowTypeEnd, E.ex, E.ey, E.edx, E.edy);
    }
    let V = g.pattern === "dashed";
    if (ae += `<g class="pele-edge pele-er-${V ? "non-identifying" : "identifying"}" data-id="${Ee(g.id)}"><path d="${k}"${V ? ' stroke-dasharray="4 3"' : ""}/>` + I + F + "</g>", T.width > 0) {
      let C = n.labelX, S = n.labelY;
      Ce += Et(g.id, T, C, S, "", d);
    }
  }
  return { svg: Ct("er", z, se, l, r, t, Te(v, z / 2, u + v.height / 2, ' class="pele-title" font-weight="var(--_tw)"') + (m ? `<g class="pele-clusters">${m}</g>` : "") + (ae ? `<g class="pele-edges" fill="none" stroke="var(--_l)" stroke-linecap="round">${ae}</g>` : "") + (Ce ? `<g class="pele-edge-labels" font-size="${e}">${Ce}</g>` : "") + `<g class="pele-nodes">${Y}</g>`), width: z, height: se, links: W };
}
function ll(t) {
  let s = t.slice(0, 3);
  for (let r = 3; r < t.length; r += 3) {
    let i = s.length - 3, f = (l) => Math.abs(s[i + l] - t[r + l]) < 0.01 && Math.abs(t[r + l] - t[r + 3 + l]) < 0.01;
    r + 3 < t.length && (f(0) || f(1)) || s.push(t[r], t[r + 1], t[r + 2]);
  }
  return s;
}
function rl(t, s, r) {
  let i = /* @__PURE__ */ new Map(), f = (l, e, y, u) => {
    let d = s[l], b = e[y] - d.x, _ = e[y + 1] - d.y, M;
    if (Math.abs(Math.abs(_) - d.h / 2) < 0.5)
      M = _ < 0 ? 0 : 2;
    else if (Math.abs(Math.abs(b) - d.w / 2) < 0.5)
      M = b < 0 ? 3 : 1;
    else
      return;
    let A = l * 4 + M, h = { route: e, at: y, toward: e[u + (M & 1 ? 1 : 0)] }, X = i.get(A);
    X ? X.push(h) : i.set(A, [h]);
  };
  for (let l of t) {
    let e = l.route.length - 3;
    l.src === l.dst || e < 3 || (f(l.src, l.route, 0, 3), f(l.dst, l.route, e, e - 3));
  }
  for (let [l, e] of i) {
    if (e.length < 2)
      continue;
    let y = l >> 2, u = (l & 1) === 1, d = s[y].isGroup ? s[y] : r[y], b = u ? d.h : d.w, _ = Math.max(Math.min(Jt, (b - 2 * el) / (e.length - 1)), 0), M = u ? s[y].y : s[y].x;
    e.sort((A, h) => A.toward - h.toward);
    for (let A = 0; A < e.length; A++)
      e[A].route[e[A].at + (u ? 1 : 0)] = M + (A - (e.length - 1) / 2) * _;
  }
}
function at(t, s, r, i) {
  if (i.isGroup)
    return;
  let f = t[s] - i.x, l = t[s + 1] - i.y;
  i.w !== r.w && Math.abs(Math.abs(f) - i.w / 2) < 0.5 && (t[s] -= Math.sign(f) * (i.w - r.w) / 2), i.h !== r.h && Math.abs(Math.abs(l) - i.h / 2) < 0.5 && (t[s + 1] -= Math.sign(l) * (i.h - r.h) / 2);
}
var pl = { type: "er", math: !0, parse(t, s, r) {
  let i = new vt();
  return r && (i.title = r), Ft(t, i), i;
}, render: tl };
export {
  pl as er
};
//# sourceMappingURL=E3YOAP7H-d866ec88.js.map

var ve = Object.defineProperty;
var qe = (e, r, i) => r in e ? ve(e, r, { enumerable: !0, configurable: !0, writable: !0, value: i }) : e[r] = i;
var _ = (e, r, i) => (qe(e, typeof r != "symbol" ? r + "" : r, i), i);
import { j as Oe, z as ke, q as Le } from "./QRQ46LE7-b110495e.js";
import { g as De } from "./ECH2OJJK-8814648a.js";
import { d as be, a as Fe, V as Te, e as oe, o as Ve, i as X } from "./lazy-950901f8.js";
import { m as Ye, c as Ue } from "./DKTLEL5E-e2b762b2.js";
import { T as Pe, G as He } from "./YTAM2TF7-f178d8af.js";
import { a as Qe, e as W, x as S, f as ze, V as re, u as Ke, L as we, m as Ge, c as We, i as je, n as Be, s as Xe, j as Je, S as Ze, $ as et } from "./3G3HCGVE-09704139.js";
var Q = { REQUIREMENT: "Requirement", FUNCTIONAL_REQUIREMENT: "Functional Requirement", INTERFACE_REQUIREMENT: "Interface Requirement", PERFORMANCE_REQUIREMENT: "Performance Requirement", PHYSICAL_REQUIREMENT: "Physical Requirement", DESIGN_CONSTRAINT: "Design Constraint" }, ce = { LOW_RISK: "Low", MED_RISK: "Medium", HIGH_RISK: "High" }, J = { VERIFY_ANALYSIS: "Analysis", VERIFY_DEMONSTRATION: "Demonstration", VERIFY_INSPECTION: "Inspection", VERIFY_TEST: "Test" }, U = { CONTAINS: "contains", COPIES: "copies", DERIVES: "derives", SATISFIES: "satisfies", VERIFIES: "verifies", REFINES: "refines", TRACES: "traces" }, tt = 1e6, st = class {
  constructor() {
    _(this, "type", "requirement");
    _(this, "direction", "TB");
    _(this, "requirements", /* @__PURE__ */ new Map());
    _(this, "elements", /* @__PURE__ */ new Map());
    _(this, "relations", []);
    _(this, "classes", /* @__PURE__ */ new Map());
    _(this, "title");
    _(this, "accTitle");
    _(this, "accDescr");
    _(this, "newId", "");
    _(this, "newText", "");
    _(this, "newRisk", "");
    _(this, "newVerifyMethod", "");
    _(this, "newElementType", "");
    _(this, "newDocRef", "");
    _(this, "styleCopies", 0);
  }
  copy(e, r) {
    if (this.styleCopies += r.length, this.styleCopies > tt)
      throw new Fe("Requirement diagram applies too many style declarations.", "limit", { type: "requirement" });
    for (let i of r)
      e.push(i);
  }
  setDirection(e) {
    this.direction = e;
  }
  addRequirement(e, r) {
    let i = this.requirements.get(e);
    return i === void 0 && (i = { name: e, type: r, requirementId: this.newId, text: this.newText, risk: this.newRisk, verifyMethod: this.newVerifyMethod, cssStyles: [], classes: ["default"] }, this.requirements.set(e, i)), this.newId = this.newText = this.newRisk = this.newVerifyMethod = "", i;
  }
  setNewReqId(e) {
    this.newId = e;
  }
  setNewReqText(e) {
    this.newText = e;
  }
  setNewReqRisk(e) {
    this.newRisk = e;
  }
  setNewReqVerifyMethod(e) {
    this.newVerifyMethod = e;
  }
  addElement(e) {
    let r = this.elements.get(e);
    return r === void 0 && (r = { name: e, type: this.newElementType, docRef: this.newDocRef, cssStyles: [], classes: ["default"] }, this.elements.set(e, r)), this.newElementType = this.newDocRef = "", r;
  }
  setNewElementType(e) {
    this.newElementType = e;
  }
  setNewElementDocRef(e) {
    this.newDocRef = e;
  }
  addRelationship(e, r, i) {
    this.relations.push({ type: e, src: r, dst: i });
  }
  node(e) {
    var r;
    return (r = this.requirements.get(e)) != null ? r : this.elements.get(e);
  }
  setCssStyle(e, r) {
    for (let i of e) {
      let a = this.node(i);
      if (!r || !a)
        return;
      for (let l of r)
        this.copy(a.cssStyles, l.includes(",") ? l.split(",") : [l]);
    }
  }
  setClass(e, r) {
    var i;
    for (let a of e) {
      let l = this.node(a);
      if (l)
        for (let s of r) {
          l.classes.push(s);
          let f = (i = this.classes.get(s)) == null ? void 0 : i.styles;
          f && this.copy(l.cssStyles, f);
        }
    }
  }
  defineClass(e, r) {
    for (let i of e) {
      let a = this.classes.get(i);
      a === void 0 && (a = { id: i, styles: [], textStyles: [] }, this.classes.set(i, a));
      for (let s of r)
        s.includes("color") && a.textStyles.push(s.replace("fill", "bgFill")), a.styles.push(s);
      let l = r.flatMap((s) => s.split(","));
      for (let s of this.requirements.values())
        s.classes.includes(i) && this.copy(s.cssStyles, l);
      for (let s of this.elements.values())
        s.classes.includes(i) && this.copy(s.cssStyles, l);
    }
  }
  setAccTitle(e) {
    this.accTitle = e.replace(/^\s+/g, "");
  }
  setAccDescription(e) {
    this.accDescr = e.replace(/\n\s+/g, `
`);
  }
}, ge = ["$end", "INVALID", "title", "acc_title", "acc_title_value", "acc_descr", "acc_descr_value", "acc_descr_multiline_value", "direction_tb", "direction_bt", "direction_rl", "direction_lr", "NEWLINE", "EOF", "RD", "STRUCT_START", "STRUCT_STOP", "STYLE_SEPARATOR", "COLONSEP", "ID", "TEXT", "RISK", "VERIFYMTHD", "REQUIREMENT", "FUNCTIONAL_REQUIREMENT", "INTERFACE_REQUIREMENT", "PERFORMANCE_REQUIREMENT", "PHYSICAL_REQUIREMENT", "DESIGN_CONSTRAINT", "LOW_RISK", "MED_RISK", "HIGH_RISK", "VERIFY_ANALYSIS", "VERIFY_DEMONSTRATION", "VERIFY_INSPECTION", "VERIFY_TEST", "ELEMENT", "CONTAINS", "COPIES", "DERIVES", "SATISFIES", "VERIFIES", "REFINES", "TRACES", "TYPE", "DOCREF", "STYLE", "CLASSDEF", "CLASS", "ALPHA", "COLON", "SEMICOLON", "PERCENT", "MINUS", "BRKT", "END_ARROW_L", "END_ARROW_R", "LINE", "qString", "unqString", "COMMA"], rt = /* @__PURE__ */ new Map([["requirementdiagram", 14], ["id", 19], ["text", 20], ["risk", 21], ["verifymethod", 22], ["requirement", 23], ["functionalrequirement", 24], ["interfacerequirement", 25], ["performancerequirement", 26], ["physicalrequirement", 27], ["designconstraint", 28], ["low", 29], ["medium", 30], ["high", 31], ["analysis", 32], ["demonstration", 33], ["inspection", 34], ["test", 35], ["element", 36], ["contains", 37], ["copies", 38], ["derives", 39], ["satisfies", 40], ["verifies", 41], ["refines", 42], ["traces", 43], ["type", 44], ["docref", 45], ["style", 46], ["classdef", 47], ["class", 48]]), it = /accTitle\s*:\s*/iy, lt = /accDescr\s*:\s*/iy, nt = /accDescr\s*\{\s*/iy, Z = /direction\s+(?:(TB)|(BT)|(RL)|LR)/gi, he = /[\n\r\u2028\u2029]/g, at = 22, _e = new Uint8Array(128);
for (let e of `:,\r
{<>-=`)
  _e[e.charCodeAt(0)] = 1;
function ot(e) {
  let r = e.length, i = [], a = [], l = [], s = [], f = 0, t = 0, p = [[], [], [], []], m = [[], [], [], []], E = [0, 0, 0, 0], I = !1, N = -1;
  Z.lastIndex = 0;
  for (let n = Z.exec(e); n !== null; n = Z.exec(e)) {
    let R = n[1] !== void 0 ? 0 : n[2] !== void 0 ? 1 : n[3] !== void 0 ? 2 : 3;
    p[R].push(n.index), m[R].push(Z.lastIndex), I = !0;
  }
  let c = (n, R, d) => {
    i.push(n), a.push(e.slice(R, d)), l.push(R), t = d;
  }, C = (n) => {
    s.push(f), f = n;
  }, v = () => {
    s.length > 0 && (f = s.pop());
  }, Y = (n, R) => (n.lastIndex = R, n.test(e) ? n.lastIndex : -1), o = (n) => {
    let R = e.indexOf(`
`, n);
    return R === -1 ? r : R;
  }, h = () => {
    if (N < t) {
      he.lastIndex = t, N = he.test(e) ? he.lastIndex - 1 : r;
      for (let n = 0; n < 4; n++) {
        let R = p[n], d = E[n];
        for (; d < R.length && R[d] <= N; )
          d++;
        E[n] = d;
      }
    }
    for (let n = 0; n < 4; n++) {
      let R = E[n] - 1;
      if (R >= 0 && p[n][R] >= t)
        return c(8 + n, t, o(m[n][R])), !0;
    }
    return !1;
  }, y = (n) => {
    let R = n | 32;
    if (R === 116 && e.slice(t + 1, t + 5).toLowerCase() === "itle" && oe(e.charCodeAt(t + 5))) {
      let d = t + 6;
      for (; d < r; ) {
        let A = e.charCodeAt(d);
        if (A === 35 || A === 10 || A === 59)
          break;
        d++;
      }
      if (d > t + 6)
        return c(2, t, d), !0;
    }
    if (R === 97 && (e.charCodeAt(t + 1) | 32) === 99 && (e.charCodeAt(t + 2) | 32) === 99) {
      let d;
      if ((d = Y(it, t)) >= 0)
        return C(3), c(3, t, d), !0;
      if ((d = Y(lt, t)) >= 0)
        return C(4), c(5, t, d), !0;
      if ((d = Y(nt, t)) >= 0)
        return C(5), t = d, !0;
    }
    if (I && !Ve(n) && h())
      return !0;
    if (n === 10 || n === 13 && e.charCodeAt(t + 1) === 10) {
      let d = t;
      for (; d < r; ) {
        let A = e.charCodeAt(d);
        if (A === 10)
          d++;
        else if (A === 13 && e.charCodeAt(d + 1) === 10)
          d += 2;
        else
          break;
      }
      return c(12, t, d), !0;
    }
    if (oe(n)) {
      for (t++; t < r && oe(e.charCodeAt(t)); )
        t++;
      return !0;
    }
    if (n === 35 || n === 37)
      return t = o(t), !0;
    if (X(n)) {
      let d = t + 1;
      for (; d < r && X(e.charCodeAt(d)); )
        d++;
      if (d - t <= at) {
        let A = rt.get(e.slice(t, d).toLowerCase());
        if (A !== void 0)
          return (A === 46 || A === 47 || A === 48) && C(2), c(A, t, d), !0;
      }
      for (; d < r; ) {
        let A = e.charCodeAt(d);
        if (A < 128 && _e[A] === 1)
          break;
        d++;
      }
      return i.push(59), a.push(e.slice(t, d).trim()), l.push(t), t = d, !0;
    }
    switch (n) {
      case 123:
        return c(15, t, t + 1), !0;
      case 125:
        return c(16, t, t + 1), !0;
      case 58:
        return e.charCodeAt(t + 1) === 58 && e.charCodeAt(t + 2) === 58 ? c(17, t, t + 3) : c(18, t, t + 1), !0;
      case 60:
        return e.charCodeAt(t + 1) !== 45 ? !1 : (c(55, t, t + 2), !0);
      case 45:
        return e.charCodeAt(t + 1) === 62 ? c(56, t, t + 2) : c(57, t, t + 1), !0;
      case 34:
        return C(1), t++, !0;
      case 44:
        return c(60, t, t + 1), !0;
    }
    return !1;
  }, q = (n) => {
    if (X(n)) {
      let R = t + 1;
      for (; R < r && X(e.charCodeAt(R)); )
        R++;
      return c(49, t, R), !0;
    }
    switch (n) {
      case 58:
        return c(50, t, t + 1), !0;
      case 59:
        return c(51, t, t + 1), !0;
      case 37:
        return c(52, t, t + 1), !0;
      case 45:
        return c(53, t, t + 1), !0;
      case 35:
        return c(54, t, t + 1), !0;
      case 32:
        return t++, !0;
      case 34:
        return C(1), t++, !0;
      case 10:
        return v(), t++, !0;
      case 44:
        return c(60, t, t + 1), !0;
    }
    return !1;
  };
  for (; t < r; ) {
    let n = e.charCodeAt(t), R = !0;
    switch (f) {
      case 0:
        R = y(n);
        break;
      case 2:
        R = q(n);
        break;
      case 1:
        if (n === 34)
          v(), t++;
        else {
          let d = e.indexOf('"', t);
          c(58, t, d === -1 ? r : d);
        }
        break;
      case 3:
        v(), c(4, t, o(t));
        break;
      case 4:
        v(), c(6, t, o(t));
        break;
      case 5:
        if (n === 125)
          v(), t++;
        else {
          let d = e.indexOf("}", t);
          c(7, t, d === -1 ? r : d);
        }
        break;
    }
    if (!R)
      return i.push(1), a.push(""), l.push(t), { types: i, texts: a, starts: l };
  }
  let L = f === 0 ? 13 : f === 1 ? 58 : f === 3 ? 4 : f === 4 ? 6 : f === 5 ? 7 : -1;
  return L !== -1 && c(L, r, r), c(0, r, r), { types: i, texts: a, starts: l };
}
var ct = [Q.REQUIREMENT, Q.FUNCTIONAL_REQUIREMENT, Q.INTERFACE_REQUIREMENT, Q.PERFORMANCE_REQUIREMENT, Q.PHYSICAL_REQUIREMENT, Q.DESIGN_CONSTRAINT, ce.LOW_RISK, ce.MED_RISK, ce.HIGH_RISK, J.VERIFY_ANALYSIS, J.VERIFY_DEMONSTRATION, J.VERIFY_INSPECTION, J.VERIFY_TEST, "", U.CONTAINS, U.COPIES, U.DERIVES, U.SATISFIES, U.VERIFIES, U.REFINES, U.TRACES];
function Ne(e) {
  return e === 49 || e === 50 || e === 54 || e === 53 || e === 51;
}
function ht(e, r) {
  let { types: i, texts: a, starts: l } = ot(e), s = 0, f = [], t = [], p = (o, h = o, ...y) => {
    let q = i[s];
    if (q === 1)
      throw Te("requirement", e, l[s], "", !0);
    for (let n = h; n >= o; n--)
      y.unshift(n);
    let L = y.map((n) => `'${ge[n]}'`).join(", ");
    throw Te("requirement", e, l[s], `Expecting ${L}, got '${ge[q]}'`);
  }, m = (o) => (i[s] !== o && p(o), a[s++]), E = (o, h) => {
    let y = i[s];
    return (y < o || y > h) && p(o, h), s++, ct[y - 23];
  }, I = () => {
    let o = i[s];
    return o !== 59 && o !== 58 && p(58, 59), a[s++];
  }, N = () => {
    let o = i[s];
    if (o === 3)
      s++, r.setAccTitle(m(4).trim());
    else if (o === 5)
      s++, r.setAccDescription(m(6).trim());
    else if (o === 7)
      r.setAccDescription(a[s++].trim());
    else
      return !1;
    return !0;
  }, c = () => {
    let o = [];
    for (; ; ) {
      let h = i[s];
      if (h !== 49 && h !== 59 && h !== 58 && p(58, 59, 49), o.push(a[s++]), i[s] !== 60)
        return o;
      s++;
    }
  }, C = () => {
    let o = [];
    for (; ; ) {
      Ne(i[s]) || p(49, 51, 53, 54);
      let h = a[s++];
      for (; Ne(i[s]); )
        h += a[s++];
      if (o.push(h), i[s] !== 60)
        return o;
      s++;
    }
  }, v = () => {
    let o;
    return i[s] === 17 ? (s++, o = c(), m(15)) : i[s] === 15 ? s++ : p(15, 15, 17), m(12), o;
  }, Y = (o) => {
    for (f.length = 0, t.length = 0; ; ) {
      let h = i[s];
      if (h === 16) {
        s++;
        break;
      }
      if (h === 12) {
        s++;
        continue;
      }
      (o ? h < 19 || h > 22 : h !== 44 && h !== 45) && (o && p(19, 22, 12, 16), p(44, 45, 12, 16)), s++, m(18), t.push(h === 21 ? E(29, 31) : h === 22 ? E(32, 35) : I()), f.push(h), m(12);
    }
    for (let h = f.length - 1; h >= 0; h--) {
      let y = t[h];
      switch (f[h]) {
        case 19:
          r.setNewReqId(y);
          break;
        case 20:
          r.setNewReqText(y);
          break;
        case 21:
          r.setNewReqRisk(y);
          break;
        case 22:
          r.setNewReqVerifyMethod(y);
          break;
        case 44:
          r.setNewElementType(y);
          break;
        default:
          r.setNewElementDocRef(y);
      }
    }
  };
  for (; N(); )
    i[s] === 12 && s++;
  for (i[s] !== 14 && p(14, 14, 3, 5, 7), s++, m(12); ; ) {
    let o = i[s];
    if (o === 13)
      return;
    if (o === 12)
      s++;
    else {
      if (N())
        continue;
      if (o >= 8 && o <= 11)
        s++, r.setDirection(o === 8 ? "TB" : o === 9 ? "BT" : o === 10 ? "RL" : "LR");
      else if (o >= 23 && o <= 28) {
        let h = E(23, 28), y = I(), q = v();
        Y(!0), r.addRequirement(y, h), q && r.setClass([y], q);
      } else if (o === 36) {
        s++;
        let h = I(), y = v();
        Y(!1), r.addElement(h), y && r.setClass([h], y);
      } else if (o === 46) {
        s++;
        let h = c();
        r.setCssStyle(h, C());
      } else if (o === 47) {
        s++;
        let h = c();
        r.defineClass(h, C());
      } else if (o === 48) {
        s++;
        let h = c();
        r.setClass(h, c());
      } else if (o === 59 || o === 58) {
        let h = a[s++], y = i[s];
        if (y === 17)
          s++, r.setClass([h], c());
        else if (y === 55 || y === 57) {
          s++;
          let q = E(37, 43);
          m(y === 57 ? 56 : 57);
          let L = I();
          y === 57 ? r.addRelationship(q, h, L) : r.addRelationship(q, L, h);
        } else
          p(17, 17, 55, 57);
      } else
        p(12, 13, 3, 5, 7, 8, 9, 10, 11, 23, 24, 25, 26, 27, 28, 36, 47, 48, 46, 59, 58);
    }
  }
}
function dt(e) {
  let r = [];
  for (let l of e.requirements.values())
    r.push({ id: l.name, requirement: l, element: void 0, cssStyles: l.cssStyles, cssClasses: l.classes.join(" ") });
  for (let l of e.elements.values())
    r.push({ id: l.name, requirement: void 0, element: l, cssStyles: l.cssStyles, cssClasses: l.classes.join(" ") });
  let i = (l) => e.requirements.has(l) || e.elements.has(l) ? l : void 0, a = e.relations.map((l, s) => ({ id: `${l.src}-${l.dst}-${s}`, start: i(l.src), end: i(l.dst), type: l.type, contains: l.type === U.CONTAINS }));
  return { nodes: r, edges: a, direction: e.direction };
}
var ft = 40, ut = 16, Et = 56, ee = 14, j = 10, de = 2, $e = 12, pt = 120, Rt = 280, mt = 240, fe = 26, xe = 6, Ce = 9, te = 4.5, It = 28, St = 14;
function se(e, r, i) {
  if (r === 0 || e.lines.length === 0)
    return e;
  let a = 0, l = [], s = e.lines.map((f) => {
    let t = 0, p = f.map((m) => {
      let E = m.style | r, I = m.icon !== void 0 || m.math ? m.width : i.width(m.text, e.size, E);
      return t += I, { ...m, style: E, width: I };
    });
    return l.push(t), t > a && (a = t), p;
  });
  return { ...e, lines: s, widths: l, width: a };
}
function Ae(e, r, i, a) {
  let l = We(e), s = "", f = "";
  for (let t = 0; t < e.lines.length; t++) {
    let p = e.lines[t], m = i + je(e, t);
    if (Be(p)) {
      f += re(Xe(e, t), r + e.widths[t] / 2, m, a);
      continue;
    }
    let E = m + e.size * 0.35, I = !0;
    for (let N of p)
      N.icon !== void 0 || N.text === "" || (s += `<tspan${I ? ` x="${S(r)}" y="${S(E)}"` : ""}${Je(N.style & ~l)}>${Ze(N.text)}</tspan>`, I = !1);
  }
  return (s === "" ? "" : `<text${et(a, l)} text-anchor="start" xml:space="preserve">${s}</text>`) + f;
}
function yt(e, r, i, a) {
  let l = xe, s = e - i * l, f = r - a * l;
  return `<circle class="pele-marker" cx="${S(s)}" cy="${S(f)}" r="${l}"/><path class="pele-marker" d="M${S(s - i * l)},${S(f - a * l)}L${S(s + i * l)},${S(f + a * l)}M${S(s + a * l)},${S(f - i * l)}L${S(s - a * l)},${S(f + i * l)}"/>`;
}
function Tt(e, r, i, a) {
  let l = e - i * Ce, s = r - a * Ce;
  return `<path class="pele-marker" d="M${S(l - a * te)},${S(s + i * te)}L${S(e)},${S(r)}L${S(l + a * te)},${S(s - i * te)}" stroke-linejoin="round"/>`;
}
function wt(e, r, i) {
  let a = /* @__PURE__ */ new Map();
  for (let l of r) {
    let s = l.route;
    if (!(l.src === l.dst || s.length < 6))
      for (let f of [0, s.length - 3]) {
        let t = f === 0 ? l.src : l.dst, p = e[t], m = s[f] - p.x, E = s[f + 1] - p.y, I = f === 0 ? 3 : f - 3, N;
        if (Math.abs(Math.abs(E) - p.h / 2) < 0.5)
          N = E < 0 ? 0 : 2;
        else if (Math.abs(Math.abs(m) - p.w / 2) < 0.5)
          N = m < 0 ? 3 : 1;
        else
          continue;
        let c = t * 4 + N, C = { route: s, at: f, toward: s[N % 2 === 0 ? I : I + 1] }, v = a.get(c);
        v ? v.push(C) : a.set(c, [C]);
      }
  }
  for (let [l, s] of a) {
    if (s.length < 2)
      continue;
    let f = l >> 2, t = l % 2 === 1, p = (t ? i[f].h : i[f].w) - 2 * St, m = Math.max(0, Math.min(It, p / (s.length - 1)));
    s.sort((E, I) => E.toward - I.toward);
    for (let E = 0; E < s.length; E++) {
      let I = (E - (s.length - 1) / 2) * m;
      t ? s[E].route[s[E].at + 1] = e[f].y + I : s[E].route[s[E].at] = e[f].x + I;
    }
  }
}
function gt(e, r, i) {
  return Ye(e.direction) ? Ue(i, (a) => Me(e, r, i, a)) : Me(e, r, i, !1);
}
function Me(e, r, i, a) {
  var Ee, pe, Re, me, Ie, Se;
  let l = dt(e), s = (Ee = i.fontSize) != null ? Ee : 16, f = Math.round(s * 0.875), t = (pe = i.measurer) != null ? pe : be(i.fontFamily, i.fontFamilyMono), p = (Re = i.padding) != null ? Re : 8, m = /* @__PURE__ */ new Map(), E = [], I = [];
  for (let T of l.nodes) {
    let u = Qe(T.cssStyles), M = (u.bold ? 1 : 0) | (u.italic ? 2 : 0), D = (me = u.fontSize) != null ? me : s, O = (Ie = u.fontSize) != null ? Ie : f, w = T.requirement, F = T.element, V = se(W(`\xAB${w ? w.type : "Element"}\xBB`, !1, t, O, 4e3), M, t), g = se(W(T.id, !0, t, D, Rt), M | 1, t), $ = w ? [["ID", w.requirementId], ["Text", w.text], ["Risk", w.risk], ["Verification", w.verifyMethod]] : [["Type", F.type], ["Doc Ref", F.docRef]], x = [], b = 0, z = 0, k = 0;
    for (let [B, G] of $) {
      if (!G)
        continue;
      let ne = se(W(B, !1, t, O, 4e3), M, t), ae = se(W(G, !0, t, O, mt), M, t), ye = Math.max(ne.height, ae.height);
      x.push({ key: ne, value: ae, height: ye }), b = Math.max(b, ne.width), z = Math.max(z, ae.width), k += ye + de;
    }
    x.length > 0 && (k += 2 * j - de);
    let P = 2 * j + V.height + g.height, H = Math.max(pt, Math.max(V.width, g.width) + 2 * ee, x.length > 0 ? b + $e + z + 2 * ee : 0);
    m.has(T.id) || m.set(T.id, E.length);
    let K = ke(H, P + k);
    K.seq = E.length, E.push({ node: T, style: u, kind: V, name: g, rows: x, keyWidth: b, headHeight: P, w: H, h: P + k }), I.push(K);
  }
  let N = a ? "TB" : Le(l.direction), c = N === "LR" || N === "RL", C = [], v = [], Y = [];
  for (let T of l.edges) {
    let u = T.start === void 0 ? void 0 : m.get(T.start), M = T.end === void 0 ? void 0 : m.get(T.end);
    if (u === void 0 || M === void 0)
      continue;
    let D = W(`\xAB${T.type}\xBB`, !1, t, f, 4e3);
    u === M && (c ? I[u].h += 2 * (fe + D.height + 8) : I[u].w += 2 * (fe + D.width + 12)), Y.push(T), v.push(D), C.push({ src: u, dst: M, minlen: 1, labelW: D.width + 12, labelH: D.height + 4, route: [], labelX: 0, labelY: 0 });
  }
  let o = Oe(I, C, N, { nodeSep: ft, edgeSep: ut, rankSep: Et, portSep: 20 });
  wt(I, C, E);
  let h = De(e.title, t, s, 4e3), y = h.height > 0 ? h.height + 12 : 0, q = Math.max(o.width, h.width), L = p + (q - o.width) / 2, n = p + y, R = Math.ceil(q + 2 * p), d = Math.ceil(o.height + y + 2 * p), A = "";
  for (let T = 0; T < E.length; T++) {
    let u = E[T], { w: M, h: D, style: O } = u, w = -M / 2, F = -D / 2, V = `<rect x="${S(w)}" y="${S(F)}" width="${S(M)}" height="${S(D)}" fill="var(--_s)" stroke="var(--_b)"${ze(O.shape)}/>` + re(u.kind, 0, F + j + u.kind.height / 2, ` class="pele-stereotype" font-size="${u.kind.size}" fill="var(--_m)"${O.text}`) + re(u.name, 0, F + j + u.kind.height + u.name.height / 2, ` class="pele-label" font-size="${u.name.size}" font-weight="var(--_hw)"${O.text}`);
    if (u.rows.length > 0) {
      let g = F + u.headHeight;
      V += `<path class="pele-divider" d="M${S(w)},${S(g)}H${S(-w)}" stroke="var(--_b)"${O.line}/>`;
      let $ = g + j, x = "";
      for (let b of u.rows)
        x += Ae(b.key, w + ee, $, ` class="pele-field" fill="var(--_m)"${O.text}`) + Ae(b.value, w + ee + u.keyWidth + $e, $, ` class="pele-value"${O.text}`), $ += b.height + de;
      V += `<g class="pele-fields" font-size="${u.rows[0].key.size}">${x}</g>`;
    }
    A += `<g class="pele-node ${u.node.requirement ? "pele-requirement" : "pele-element"}${Ke(u.node.cssClasses.replace(/^default\s?/, ""))}" data-id="${we(u.node.id)}" transform="translate(${S(I[T].x + L)},${S(I[T].y + n)})">${V}</g>`;
  }
  let ie = "", le = "", ue = /* @__PURE__ */ new Map();
  for (let T = 0; T < C.length; T++) {
    let u = C[T], M = Y[T], D = v[T], O = M.contains ? 2 * xe : 0, w, F = u.labelX + L, V = u.labelY + n;
    if (u.src === u.dst) {
      let g = E[u.src], $ = I[u.src].x + L, x = I[u.src].y + n, b = (Se = ue.get(u.src)) != null ? Se : 0;
      ue.set(u.src, b + 1);
      let z = (c ? g.w : g.h) / 2, k = Math.min(z - 4, 12 + b * 6), P = fe + b * 8, H = (B, G) => c ? `${S($ + G)},${S(x + g.h / 2 + B)}` : `${S($ + g.w / 2 + B)},${S(x + G)}`, K = P / 0.75;
      w = { d: `M${H(O, -k)}C${H(K, -k)} ${H(K, k)} ${H(0, k)}`, sx: c ? $ - k : $ + g.w / 2, sy: c ? x + g.h / 2 : x - k, sdx: c ? 0 : -1, sdy: c ? -1 : 0, ex: c ? $ + k : $ + g.w / 2, ey: c ? x + g.h / 2 : x + k, edx: c ? 0 : -1, edy: c ? -1 : 0 }, c ? (F = $, V = x + g.h / 2 + P + 4 + u.labelH / 2) : (F = $ + g.w / 2 + P + 4 + u.labelW / 2, V = x);
    } else {
      let g = u.route.slice();
      for (let $ = 0; $ < g.length; $ += 3)
        g[$] += L, g[$ + 1] += n;
      w = Pe(g, void 0, O, 0);
    }
    ie += `<g class="pele-edge pele-relationship-${M.contains ? "contains" : "arrow"}" data-id="${we(M.id)}"><path d="${w.d}"${M.contains ? "" : ' stroke-dasharray="5 4"'}/>` + (M.contains ? yt(w.sx, w.sy, w.sdx, w.sdy) : Tt(w.ex, w.ey, w.edx, w.edy)) + "</g>", le += He(M.id, D, F, V, "");
  }
  return { svg: Ge("requirement", R, d, s, i, e, re(h, R / 2, p + h.height / 2, ' class="pele-title" font-weight="var(--_tw)"') + (ie ? `<g class="pele-edges" fill="none" stroke="var(--_l)" stroke-linecap="round">${ie}</g>` : "") + (le ? `<g class="pele-edge-labels" font-size="${f}" fill="var(--_m)">${le}</g>` : "") + `<g class="pele-nodes">${A}</g>`), width: R, height: d, links: [] };
}
var vt = { type: "requirement", math: !0, parse(e, r, i) {
  let a = new st();
  return i && (a.title = i), ht(e, a), a;
}, render: gt };
export {
  vt as requirement
};
//# sourceMappingURL=5CXA2WIO-d34f63cc.js.map

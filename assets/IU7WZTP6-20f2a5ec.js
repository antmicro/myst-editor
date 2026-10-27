var $ = Object.defineProperty;
var w = (t, e, r) => e in t ? $(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var u = (t, e, r) => (w(t, typeof e != "symbol" ? e + "" : e, r), r);
import { V as S } from "./lazy-950901f8.js";
var I = /* @__PURE__ */ new WeakMap();
function A(t) {
  let e = t.map((s, i) => i), r = [];
  for (let s = 0; s < 128; s++) {
    let i = String.fromCharCode(s);
    r.push(e.filter((o) => {
      let { pattern: m, first: y } = t[o];
      return typeof m == "string" ? m[0] === i : y === void 0 || y.includes(i);
    }));
  }
  let n = { starting: r, every: e, longer: t.map((s) => {
    var i;
    return (i = s.longer) == null ? void 0 : i.map((o) => t.indexOf(o));
  }) };
  return I.set(t, n), n;
}
function _(t, e, r) {
  var C;
  let n = [], s = [], i = [], o = new Uint8Array(e.length), { starting: m, every: y, longer: T } = (C = I.get(e)) != null ? C : A(e), k = [], v = t.length, E = (p, l) => {
    var d, f, g;
    if (o[p])
      return -1;
    let a = e[p];
    if (a.match !== void 0)
      return a.match(t, l, (d = n[n.length - 1]) != null ? d : -1);
    if (a.scanner !== void 0)
      return ((f = k[p]) != null ? f : k[p] = a.scanner())(t, l, (g = n[n.length - 1]) != null ? g : -1);
    let h = a.pattern;
    return typeof h == "string" ? t.startsWith(h, l) ? l + h.length : -1 : (h.lastIndex = l, h.test(t) ? h.lastIndex : (a.opener !== void 0 && (a.opener.lastIndex = l, a.opener.test(t) && (o[p] = 1)), -1));
  }, c = 0;
  t:
    for (; c < v; ) {
      let p = t.charCodeAt(c);
      for (let l of p < 128 ? m[p] : y) {
        let a = E(l, c);
        if (a <= c)
          continue;
        let h = l, d = T[l];
        if (d !== void 0)
          for (let f of d) {
            let g = E(f, c);
            if (g > a) {
              h = f, a = g;
              break;
            }
          }
        e[h].hidden || (n.push(h), s.push(c), i.push(a)), c = a;
        continue t;
      }
      throw S(r, t, c, "", !0);
    }
  return n.push(-1), s.push(v), i.push(v), { kinds: n, starts: s, ends: i, src: t };
}
var V = { name: "ACC_DESCR", pattern: /[\t ]*accDescr(?:[\t ]*:([^\n\r]*?(?=%%)|[^\n\r]*)|\s*{([^}]*)})/y, first: "	 a" }, G = { name: "ACC_TITLE", pattern: /[\t ]*accTitle[\t ]*:(?:[^\n\r]*?(?=%%)|[^\n\r]*)/y, first: "	 a" }, L = { name: "TITLE", pattern: /[\t ]*title(?:[\t ][^\n\r]*?(?=%%)|[\t ][^\n\r]*|)/y, first: "	 t" };
function O(t) {
  return { ...L, pattern: new RegExp(String.raw`[\t ]*title(?:[\t ][^\n\r]*?(?=%%)|[\t ][^\n\r]*|(?!${t}))`, "y") };
}
var H = { name: "STRING", pattern: /"([^"\\]|\\.)*"|'([^'\\]|\\.)*'/y, first: `"'` }, P = { name: "NEWLINE", pattern: /\r?\n/y, first: `\r
` }, U = { name: "WHITESPACE", pattern: /[\t ]+/y, hidden: !0, first: "	 " }, Y = { name: "YAML", pattern: /---[\t ]*\r?\n(?:[\S\s]*?\r?\n)?---(?:\r?\n|(?!\S))/y, hidden: !0, opener: /---[\t ]*\r?\n/y, first: "-" }, j = { name: "DIRECTIVE", pattern: /[\t ]*%%{[\S\s]*?}%%(?:\r?\n|(?!\S))/y, hidden: !0, opener: /[\t ]*%%{/y, first: "	 %" }, z = { name: "SINGLE_LINE_COMMENT", pattern: /[\t ]*%%[^\n\r]*/y, first: "	 %", hidden: !0 };
function B(t) {
  return { name: t, pattern: new RegExp(t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "(?:(?=%%)|(?!\\S))", "y"), first: t[0] };
}
var N = /accDescr(?:[\t ]*:([^\n\r]*)|\s*{([^}]*)})/, M = /accTitle[\t ]*:([^\n\r]*)/, R = /title([\t ][^\n\r]*|)/;
function x(t) {
  return t.trim().replace(/[\t ]{2,}/gm, " ");
}
function q(t) {
  return x(R.exec(t)[1]);
}
function F(t) {
  return x(M.exec(t)[1]);
}
function J(t) {
  let e = N.exec(t);
  return e[1] !== void 0 ? x(e[1]) : e[2].replace(/^\s*/gm, "").replace(/\s+$/gm, "").replace(/[\t ]{2,}/gm, " ").replace(/[\n\r]{2,}/gm, `
`);
}
var b = /* @__PURE__ */ new Map([["b", "\b"], ["f", "\f"], ["n", `
`], ["r", "\r"], ["t", "	"], ["v", "\v"], ["0", "\0"]]);
function K(t) {
  var r;
  if (!t.includes("\\"))
    return t.slice(1, -1);
  let e = "";
  for (let n = 1; n < t.length - 1; n++) {
    let s = t[n];
    if (s === "\\") {
      let i = t[++n];
      e += (r = b.get(i)) != null ? r : i;
    } else
      e += s;
  }
  return e;
}
var Q = class {
  constructor(t, e, r) {
    u(this, "tokens");
    u(this, "types");
    u(this, "diagram");
    u(this, "i", 0);
    u(this, "kinds");
    this.tokens = t, this.types = e, this.diagram = r, this.kinds = t.kinds;
  }
  get kind() {
    return this.kinds[this.i];
  }
  text(t = this.i) {
    return this.tokens.src.slice(this.tokens.starts[t], this.tokens.ends[t]);
  }
  take() {
    return this.text(this.i++);
  }
  accept(t) {
    return this.kinds[this.i] !== t ? !1 : (this.i++, !0);
  }
  expect(t) {
    return this.kinds[this.i] !== t && this.fail(`token of type '${this.types[t].name}'`), this.take();
  }
  fail(t) {
    let e = this.kind === -1 ? "end of input" : `\`${this.text()}\``, { src: r, starts: n, ends: s } = this.tokens, i = n[this.i];
    if (this.kind === -1) {
      let o = this.i;
      for (; o > 0 && r.slice(n[o - 1], s[o - 1]).trim() === ""; )
        o--;
      o > 0 && (i = s[o - 1]);
    }
    throw S(this.diagram, r, i, `Expecting ${t} but found ${e}.`);
  }
};
export {
  G as $,
  F as B,
  _ as D,
  U as G,
  z as H,
  L,
  V as M,
  Y as O,
  j as P,
  J as U,
  H as V,
  P as W,
  B as Y,
  K as j,
  O as v,
  Q as x,
  q as z
};
//# sourceMappingURL=IU7WZTP6-20f2a5ec.js.map

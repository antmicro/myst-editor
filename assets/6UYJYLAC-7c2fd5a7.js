var dt = Object.defineProperty;
var ht = (e, t, n) => t in e ? dt(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var z = (e, t, n) => (ht(e, typeof t != "symbol" ? t + "" : t, n), n);
import { p as mt, h as $t } from "./DKTLEL5E-e2b762b2.js";
import { Y as xt, O as gt, P as yt, H as bt, x as kt, D as wt, z as Et, B as vt, U as Mt } from "./IU7WZTP6-20f2a5ec.js";
import { e as At, L as Le, x as l, S as ee, V as Rt, m as _t, g as Pt, b as ze } from "./3G3HCGVE-09704139.js";
import { a as Ct, d as Nt, b as St } from "./lazy-950901f8.js";
function et(e) {
  return e === 32 || e >= 9 && e <= 13 || e > 127 && /\s/.test(String.fromCharCode(e));
}
function Tt() {
  let e = 1 / 0;
  return (t, n) => {
    if (!t.startsWith("accDescr", n))
      return -1;
    let r = t.length, a = n + 8;
    for (; a < r && (t.charCodeAt(a) === 32 || t.charCodeAt(a) === 9); )
      a++;
    if (t.charCodeAt(a) === 58) {
      for (a++; a < r; a++) {
        let i = t.charCodeAt(a);
        if (i === 10 || i === 13 || i === 37 && t.charCodeAt(a + 1) === 37)
          break;
      }
      return a;
    }
    for (; a < r && et(t.charCodeAt(a)); )
      a++;
    if (t.charCodeAt(a) !== 123 || a >= e)
      return -1;
    let o = t.indexOf("}", a + 1);
    return o === -1 && (e = a), o + 1 || -1;
  };
}
var tt = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
function oe(e) {
  return { name: "TITLE", pattern: new RegExp(String.raw`title(?:[\t ][^\n\r]*?(?=%%)|[\t ][^\n\r]*|(?!${e}))`, "y"), first: "t" };
}
var se = { name: "ACC_TITLE", pattern: /accTitle[\t ]*:(?:[^\n\r]*?(?=%%)|[^\n\r]*)/y, first: "a" }, ce = { name: "ACC_DESCR", pattern: /accDescr(?:[\t ]*:([^\n\r]*?(?=%%)|[^\n\r]*)|\s*{([^}]*)})/y, first: "a", scanner: Tt };
function s(e, t) {
  return { name: e, pattern: e, longer: t };
}
function pe(e, t) {
  return { ...xt(e), longer: [t] };
}
function _e(e) {
  return { name: e, pattern: /[A-Z_a-z][\w-]*/y, first: tt + "_" };
}
function Pe(e) {
  return { name: e, pattern: /"([^"\\]|\\.)*"|'([^'\\]|\\.)*'/y, first: `"'` };
}
function ue(e) {
  return [{ name: e + "_WHITESPACE", pattern: /[\t \r\n]+/y, hidden: !0, first: `	 \r
` }, { ...gt, name: e + "_YAML", first: "-" }, { ...yt, name: e + "_DIRECTIVE", first: "	 %" }, { ...bt, name: e + "_SINGLE_LINE_COMMENT", first: "	 %" }];
}
function X(e) {
  if (!e.includes("\\"))
    return e.slice(1, -1);
  let t = e.length - 1, n = "";
  for (let r = 1; r < t; r++) {
    let a = e[r];
    a === "\\" && r + 1 < t ? (a = e[++r], n += a === "n" ? `
` : a === "r" ? "\r" : a === "t" ? "	" : a) : n += a;
  }
  return n;
}
function fe(e, t, n, r, a, o) {
  let i = new kt(wt(e, t, "railroad"), t, "railroad"), c = { $type: n, rules: [] };
  for (i.expect(0); ; ) {
    let h = i.kind;
    if (h === r) {
      let m = Et(i.take()), d = m[0];
      c.title = (d === '"' || d === "'") && m.endsWith(d) ? a(m) : m;
    } else if (h === r + 1)
      c.accTitle = vt(i.take());
    else if (h === r + 2)
      c.accDescr = Mt(i.take());
    else
      break;
  }
  for (; i.kind !== -1; )
    c.rules.push(o(i));
  return c;
}
var nt = [];
function Ae(e) {
  var a, o, i, c;
  let t = e, n = (o = (a = t.element) != null ? a : t.primary) != null ? o : t.suffix, r = (c = (i = t.alternatives) != null ? i : t.elements) != null ? c : n ? [n] : nt;
  if (t.base) {
    r = [t.base];
    for (let h of t.postfixes)
      h.except && r.push(h.except);
  }
  return r;
}
var te = (e) => ({ type: "terminal", value: e }), de = (e) => ({ type: "nonterminal", name: e }), ie = (e) => ({ type: "special", text: e }), K = (e) => ({ type: "optional", element: e }), ne = (e, t, n = 1 / 0) => ({ type: "repetition", element: e, min: t, max: n });
function he(e) {
  return e.length === 1 ? e[0] : { type: "sequence", elements: e };
}
function me(e) {
  return e.length === 1 ? e[0] : { type: "choice", alternatives: e };
}
function $e(e, t) {
  return e.rules.map((n) => ({ name: n.name, definition: rt(n.definition, Ae, t) }));
}
function rt(e, t, n) {
  let r = [e], a = [t(e)], o = [[]];
  for (; ; ) {
    let i = r.length - 1, c = o[i];
    if (c.length < a[i].length) {
      let h = a[i][c.length];
      r.push(h), a.push(t(h)), o.push([]);
    } else {
      let h = n(r[i], c);
      if (i === 0)
        return h;
      r.pop(), a.pop(), o.pop(), o[i - 1].push(h);
    }
  }
}
var De = "0123456789", Ve = { name: "ABNF_RULENAME", pattern: /[A-Za-z][A-Za-z0-9-]*/y, first: tt }, He = { name: "ABNF_COMMENT", pattern: /;[^\n\r]*/y, hidden: !0, first: ";" }, at = [pe("railroad-abnf-beta", Ve), s("="), s(";", [He]), s("/"), s("("), s(")"), s("["), s("]"), oe(String.raw`[A-Za-z0-9-]`), se, ce, Ve, { name: "ABNF_STRING", pattern: /"[^"]*"/y, first: '"' }, { name: "ABNF_NUMVAL", pattern: /%[xXdDbB][0-9A-Fa-f]+(?:-[0-9A-Fa-f]+|\.[0-9A-Fa-f]+)*/y, first: "%" }, { name: "ABNF_REPEAT", pattern: /[0-9]*\*[0-9]*/y, first: De + "*" }, { name: "ABNF_EXACT_REPEAT", pattern: /[0-9]+/y, first: De }, ...ue("ABNF"), He];
function We(e, t, n, r) {
  let a = { $type: "AbnfConcatenation", elements: [] };
  return t.alternatives.push(a), { alternation: t, concatenation: a, node: e, close: n, repeat: r };
}
function Ot(e) {
  let t = [], n = We(void 0, { $type: "AbnfAlternation", alternatives: [] }, -2, void 0);
  for (; ; ) {
    let r = e.kind === 14 || e.kind === 15 ? e.take() : void 0, a, o = e.kind;
    switch (o) {
      case 12:
        a = { $type: "AbnfStringLiteral", value: e.take().slice(1, -1) };
        break;
      case 13:
        a = { $type: "AbnfNumVal", value: e.take() };
        break;
      case 11:
        a = { $type: "AbnfRuleName", name: e.take() };
        break;
      case 4:
      case 6: {
        e.i++;
        let i = { $type: "AbnfAlternation", alternatives: [] };
        t.push(n), n = We({ $type: o === 4 ? "AbnfGroup" : "AbnfOptionalGroup", element: i }, i, o + 1, r);
        continue;
      }
      default:
        e.fail("a string, a number, a name, or an opening bracket");
    }
    for (; ; ) {
      n.concatenation.elements.push(r === void 0 ? { $type: "AbnfElement", primary: a } : { $type: "AbnfElement", repeat: r, primary: a });
      let i = e.kind;
      if (i === n.close) {
        e.i++, a = n.node, r = n.repeat, n = t.pop();
        continue;
      }
      if (i === 3)
        e.i++, n.concatenation = { $type: "AbnfConcatenation", elements: [] }, n.alternation.alternatives.push(n.concatenation);
      else if (i !== 12 && i !== 13 && i !== 11 && i !== 4 && i !== 6 && i !== 14 && i !== 15) {
        if (t.length === 0)
          return n.alternation;
        e.fail(`token of type '${at[n.close].name}'`);
      }
      break;
    }
  }
}
function qt(e) {
  return fe(e, at, "RailroadAbnf", 8, (t) => t.slice(1, -1), (t) => {
    let n = t.expect(11);
    t.expect(1);
    let r = Ot(t);
    return t.expect(2), { $type: "AbnfRule", name: n, definition: r };
  });
}
function It(e, t) {
  switch (e.$type) {
    case "AbnfAlternation":
      return me(t);
    case "AbnfConcatenation":
      return he(t);
    case "AbnfElement": {
      let n = e.repeat;
      if (!n)
        return t[0];
      let r = n.indexOf("*"), a = r === -1, o = r > 0 || a ? parseInt(n, 10) : 0, i = a ? o : r < n.length - 1 ? parseInt(n.slice(r + 1), 10) : 1 / 0;
      return o === 0 && i === 1 ? K(t[0]) : ne(t[0], o, i);
    }
    case "AbnfStringLiteral":
    case "AbnfNumVal":
      return te(e.value);
    case "AbnfRuleName":
      return de(e.name);
    case "AbnfGroup":
      return t[0];
    case "AbnfOptionalGroup":
      return K(t[0]);
  }
}
var Ft = (e) => $e(e, It);
function Bt(e, t) {
  if (e.charCodeAt(t) !== 63)
    return -1;
  let n = !1;
  for (let r = t + 1; r < e.length; r++) {
    let a = e.charCodeAt(r);
    if (a === 63)
      return n ? r + 1 : -1;
    if (a === 59)
      return -1;
    n || (n = !et(a));
  }
  return -1;
}
var Ze = _e("EBNF_ID"), Ue = { name: "EBNF_SPECIAL_SEQUENCE", pattern: /\?(?=[^?;]*[^?\s;][^?;]*\?)[^?;]*\?/y, first: "?", scanner: () => Bt }, Ye = ue("EBNF"), Ke = { name: "EBNF_ISO_COMMENT", pattern: /\(\*[\s\S]*?\*\)/y, hidden: !0, first: "(", opener: /\(\*/y }, it = [pe("railroad-ebnf-beta", Ze), s("::="), s("="), s(";"), s("|"), s(","), s("(", [Ke]), s(")"), s("["), s("]"), s("{"), s("}"), s("?", [Ue]), s("*"), s("+"), s("-", [Ye[1]]), oe(String.raw`[\w-]`), se, ce, Ze, Pe("EBNF_STRING"), Ue, ...Ye, { name: "EBNF_BLOCK_COMMENT", pattern: /\/\*[\s\S]*?\*\//y, hidden: !0, first: "/", opener: /\/\*/y }, Ke];
function Xe(e, t, n, r) {
  let a = { $type: "EbnfSequence", elements: [] };
  return t.alternatives.push(a), { choice: t, sequence: a, term: void 0, node: e, close: n, except: r };
}
var Gt = ["EbnfGroup", "EbnfOptional", "EbnfRepetition"];
function Lt(e) {
  let t = [], n = Xe(void 0, { $type: "EbnfChoice", alternatives: [] }, -2, !1), r = !1;
  for (; ; ) {
    let a, o = e.kind;
    switch (o) {
      case 20:
        a = { $type: "EbnfTerminal", value: X(e.take()) };
        break;
      case 19:
        a = { $type: "EbnfNonTerminal", name: e.take() };
        break;
      case 21:
        a = { $type: "EbnfSpecial", text: e.take().slice(1, -1).trim() };
        break;
      case 6:
      case 8:
      case 10: {
        e.i++;
        let i = { $type: "EbnfChoice", alternatives: [] };
        t.push(n), n = Xe({ $type: Gt[o - 6 >> 1], element: i }, i, o + 1, r), r = !1;
        continue;
      }
      default:
        e.fail("a terminal, a name, or an opening bracket");
    }
    for (; ; ) {
      r ? (n.term.postfixes.push({ $type: "EbnfExceptionPostfix", except: a }), r = !1) : (n.term = { $type: "EbnfTerm", base: a, postfixes: [] }, n.sequence.elements.push(n.term));
      let i = n.term.postfixes;
      for (; ; ) {
        let h = e.kind;
        if (h === 12)
          i.push({ $type: "EbnfOptionalPostfix", operator: e.take() });
        else if (h === 13)
          i.push({ $type: "EbnfZeroOrMorePostfix", operator: e.take() });
        else if (h === 14)
          i.push({ $type: "EbnfOneOrMorePostfix", operator: e.take() });
        else
          break;
      }
      let c = e.kind;
      if (c === n.close) {
        e.i++, a = n.node, r = n.except, n = t.pop();
        continue;
      }
      if (c === 15)
        e.i++, r = !0;
      else if (c === 5)
        e.i++;
      else if (c === 4)
        e.i++, n.sequence = { $type: "EbnfSequence", elements: [] }, n.choice.alternatives.push(n.sequence);
      else if (c !== 20 && c !== 19 && c !== 21 && c !== 6 && c !== 8 && c !== 10) {
        if (t.length === 0)
          return n.choice;
        e.fail(`token of type '${it[n.close].name}'`);
      }
      break;
    }
  }
}
function zt(e) {
  return fe(e, it, "RailroadEbnf", 16, X, (t) => {
    let n = t.expect(19);
    t.accept(2) || t.expect(1);
    let r = { $type: "EbnfRule", name: n, definition: Lt(t) };
    return t.expect(3), r;
  });
}
function Dt(e, t) {
  switch (e.$type) {
    case "EbnfChoice":
      return me(t);
    case "EbnfSequence":
      return he(t);
    case "EbnfTerm": {
      let n = t[0], r = 1;
      for (let a of e.postfixes)
        a.$type === "EbnfOptionalPostfix" ? n = K(n) : a.$type === "EbnfExceptionPostfix" ? n = { type: "sequence", elements: [n, te("-"), t[r++]] } : n = ne(n, a.$type === "EbnfOneOrMorePostfix" ? 1 : 0);
      return n;
    }
    case "EbnfTerminal":
      return te(e.value);
    case "EbnfNonTerminal":
      return de(e.name);
    case "EbnfSpecial":
      return ie(e.text);
    case "EbnfGroup":
      return t[0];
    case "EbnfOptional":
      return K(t[0]);
    case "EbnfRepetition":
      return ne(t[0], 0);
  }
}
var Vt = (e) => $e(e, Dt), Re = _e("RR_ID"), D = (e) => s(e, [Re]), Ht = [pe("railroad-beta", Re), D("nonterminal"), D("zeroOrMore"), D("oneOrMore"), D("sequence"), D("optional"), D("terminal"), D("special"), D("choice"), s("="), s(";"), s("("), s(","), s(")"), oe(String.raw`[\w-]`), se, ce, Re, Pe("RR_STRING"), ...ue("RR"), { name: "RR_BLOCK_COMMENT", pattern: /\/\*[\s\S]*?\*\//y, hidden: !0, first: "/", opener: /\/\*/y }];
function we(e) {
  e.i++, e.expect(11);
  let t = X(e.expect(18));
  return e.expect(13), t;
}
function Ee(e) {
  return { $type: e, element: void 0 };
}
function Wt(e) {
  let t = [];
  for (; ; ) {
    let n;
    switch (e.kind) {
      case 6:
        n = { $type: "RailroadTerminalExpr", value: we(e) };
        break;
      case 1:
        n = { $type: "RailroadNonTerminalExpr", name: we(e) };
        break;
      case 7:
        n = { $type: "RailroadSpecialExpr", text: we(e) };
        break;
      case 4:
        n = { $type: "RailroadSequenceExpr", elements: [] };
        break;
      case 8:
        n = { $type: "RailroadChoiceExpr", alternatives: [] };
        break;
      case 5:
        n = Ee("RailroadOptionalExpr");
        break;
      case 3:
        n = Ee("RailroadOneOrMoreExpr");
        break;
      case 2:
        n = Ee("RailroadZeroOrMoreExpr");
        break;
      default:
        e.fail("an expression");
    }
    if ("elements" in n || "alternatives" in n || "element" in n) {
      e.i++, e.expect(11), t.push(n);
      continue;
    }
    for (; ; ) {
      let r = t[t.length - 1];
      if (r === void 0)
        return n;
      if ("element" in r)
        r.element = n;
      else if (("elements" in r ? r.elements : r.alternatives).push(n), e.accept(12))
        break;
      e.expect(13), t.pop(), n = r;
    }
  }
}
function Zt(e) {
  return fe(e, Ht, "Railroad", 14, X, (t) => {
    let n = t.expect(17);
    t.expect(9);
    let r = Wt(t);
    return t.expect(10), { $type: "RailroadRule", name: n, definition: r };
  });
}
function Ut(e, t) {
  switch (e.$type) {
    case "RailroadTerminalExpr":
      return te(e.value);
    case "RailroadNonTerminalExpr":
      return de(e.name);
    case "RailroadSpecialExpr":
      return ie(e.text);
    case "RailroadSequenceExpr":
      return he(t);
    case "RailroadChoiceExpr":
      return me(t);
    case "RailroadOptionalExpr":
      return K(t[0]);
    default:
      return ne(t[0], e.$type === "RailroadOneOrMoreExpr" ? 1 : 0);
  }
}
var Yt = (e) => $e(e, Ut), je = _e("PEG_ID"), Kt = [pe("railroad-peg-beta", je), s("<-"), s(";"), s("/"), s("&"), s("!"), s("?"), s("*"), s("+"), s("("), s(")"), s("."), oe(String.raw`[\w-]`), se, ce, je, Pe("PEG_STRING"), ...ue("PEG"), { name: "PEG_LINE_COMMENT", pattern: /#[^\n\r]*/y, hidden: !0, first: "#" }];
function Qe(e, t, n) {
  let r = { $type: "PegSequence", elements: [] };
  return t.alternatives.push(r), { choice: t, sequence: r, node: e, operator: n };
}
function Xt(e) {
  let t = [], n = Qe(void 0, { $type: "PegOrderedChoice", alternatives: [] }, void 0);
  for (; ; ) {
    let r = e.kind === 4 || e.kind === 5 ? e.take() : void 0, a;
    switch (e.kind) {
      case 16:
        a = { $type: "PegLiteral", value: X(e.take()) };
        break;
      case 15:
        a = { $type: "PegIdentifier", name: e.take() };
        break;
      case 11:
        a = { $type: "PegAny", dot: e.take() };
        break;
      case 9: {
        e.i++;
        let o = { $type: "PegOrderedChoice", alternatives: [] };
        t.push(n), n = Qe({ $type: "PegGroup", element: o }, o, r);
        continue;
      }
      default:
        e.fail("a literal, a name, a dot, or an opening parenthesis");
    }
    for (; ; ) {
      let o = { $type: "PegSuffix", primary: a };
      (e.kind === 6 || e.kind === 7 || e.kind === 8) && (o.operator = e.take()), n.sequence.elements.push(r === void 0 ? { $type: "PegPrefix", suffix: o } : { $type: "PegPrefix", operator: r, suffix: o });
      let i = e.kind;
      if (i === 10 && t.length > 0) {
        e.i++, a = n.node, r = n.operator, n = t.pop();
        continue;
      }
      if (i === 3)
        e.i++, n.sequence = { $type: "PegSequence", elements: [] }, n.choice.alternatives.push(n.sequence);
      else if (i !== 4 && i !== 5 && i !== 16 && i !== 15 && i !== 11 && i !== 9) {
        if (t.length === 0)
          return n.choice;
        e.fail("token of type ')'");
      }
      break;
    }
  }
}
function jt(e) {
  return fe(e, Kt, "RailroadPeg", 12, X, (t) => {
    let n = t.expect(15);
    t.expect(1);
    let r = { $type: "PegRule", name: n, definition: Xt(t) };
    return t.expect(2), r;
  });
}
function Qt(e) {
  switch (e.type) {
    case "terminal":
      return `"${e.value}"`;
    case "nonterminal":
      return e.name;
    case "special":
      return e.text;
    default:
      return "(...)";
  }
}
function Jt(e, t) {
  let n = t[0];
  switch (e.$type) {
    case "PegOrderedChoice":
      return me(t);
    case "PegSequence":
      return he(t);
    case "PegPrefix":
      return e.operator ? ie(e.operator + Qt(n)) : n;
    case "PegSuffix":
      return e.operator ? e.operator === "?" ? K(n) : ne(n, e.operator === "+" ? 1 : 0) : n;
    case "PegLiteral":
      return te(e.value);
    case "PegIdentifier":
      return de(e.name);
    case "PegAny":
      return ie(e.dot);
    case "PegGroup":
      return n;
  }
}
var en = (e) => $e(e, Jt), tn = class {
  constructor() {
    z(this, "type", "railroad");
    z(this, "notation", "railroad");
    z(this, "title");
    z(this, "accTitle");
    z(this, "accDescr");
    z(this, "rules", []);
    z(this, "byName", /* @__PURE__ */ new Map());
  }
  setTitle(e) {
    this.title = e;
  }
  setAccTitle(e) {
    this.accTitle = e.replace(/^\s+/g, "");
  }
  setAccDescription(e) {
    this.accDescr = e.replace(/\n\s+/g, `
`);
  }
  addRule(e) {
    this.rules.push(e), this.byName.set(e.name, e);
  }
  getRule(e) {
    return this.byName.get(e);
  }
}, nn = /^\s*railroad-(ebnf-|abnf-|peg-)?beta/i;
function rn(e) {
  var r;
  let t = nn.exec(e);
  if (t === null)
    return;
  let n = (r = t[1]) == null ? void 0 : r.toLowerCase();
  return n === "ebnf-" ? "ebnf" : n === "abnf-" ? "abnf" : n === "peg-" ? "peg" : "railroad";
}
function an(e, t) {
  switch (t) {
    case "ebnf": {
      let n = zt(e);
      return [n, Vt(n)];
    }
    case "abnf": {
      let n = qt(e);
      return [n, Ft(n)];
    }
    case "peg": {
      let n = jt(e);
      return [n, en(n)];
    }
    default: {
      let n = Zt(e);
      return [n, Yt(n)];
    }
  }
}
function ln(e, t, n) {
  let [r, a] = an(t, n);
  e.notation = n, r.accDescr && e.setAccDescription(r.accDescr), r.accTitle && e.setAccTitle(r.accTitle), r.title && e.setTitle(r.title);
  for (let o of a)
    e.addRule(o);
}
function on(e, t) {
  let n = rn(e);
  if (n === void 0)
    throw new Ct("No railroad diagram keyword found.", "syntax", { type: "railroad" });
  let r = new tn();
  return t && (r.title = t), ln(r, e, n), r;
}
var ve = 12, sn = 6, cn = 18, le = 12, N = 7;
function Z(e, t, n, r) {
  var o;
  let a = (o = e.railroad) == null ? void 0 : o[t];
  return typeof a == "number" && a >= 0 ? Math.min(a, r) : n;
}
var pn = /[\n\r\t]/g;
function ae(e) {
  return (e.includes("\xB6\xDF") ? St(e.replace(/&/g, "&amp;")) : e).replace(pn, (t) => t === `
` ? "\\n" : t === "\r" ? "\\r" : "\\t");
}
function re(e, t) {
  for (let n = t, r = e.length - 1; n < r; n++, r--) {
    let a = e[n];
    e[n] = e[r], e[r] = a;
  }
}
function Ce(e) {
  return Math.ceil(e / 2) * 2;
}
function Me(e, t, n, r, a) {
  let o = a.height / 2, i = Math.max(Ce(a.measurer.width(t, a.size, r) + 2 * a.padding), a.height);
  return { kind: e, width: i, up: o, down: o, kids: nt, text: t, id: n, reach: 0 };
}
function un(e, t) {
  if (t === 1 / 0 && e <= 1)
    return "";
  let n = (r) => Number.isFinite(r) ? String(r) : "\u221E";
  return e === t ? n(e) + "\xD7" : t === 1 / 0 ? "\u2265" + n(e) + "\xD7" : e === 0 ? "\u2264" + n(t) + "\xD7" : n(e) + "\u2013" + n(t) + "\xD7";
}
function lt(e, t, n, r) {
  return Math.max(e + t.down + r.sep + n.up, 2 * r.arc);
}
function Je(e, t) {
  let n = Math.max(e.up + t.sep, 2 * t.arc);
  return { kind: 5, width: e.width + 4 * t.arc, up: n, down: e.down, kids: [e], text: "", id: "", reach: n };
}
function fn(e, t, n = 1 / 0) {
  let r = /* @__PURE__ */ new Map(), a = [[e, n]];
  for (let o = 0; n !== 1 / 0 && o < a.length; o++) {
    let [i, c] = a[o];
    r.set(i, c);
    let h = i.type === "choice" || i.type === "optional" ? 4 * t.arc : i.type === "repetition" ? (i.min === 0 ? 6 : 2) * t.arc : i.type === "sequence" ? 6 * t.arc : 0;
    for (let m of Ae(i))
      a.push([m, Math.max(40, c - h)]);
  }
  return rt(e, Ae, (o, i) => {
    var h;
    let c = (h = r.get(o)) != null ? h : 1 / 0;
    switch (o.type) {
      case "terminal": {
        let m = ae(o.value);
        return Me(0, /^ +$/.test(m) ? "\u2423".repeat(m.length) : m, "", 4, t);
      }
      case "nonterminal":
        return Me(1, ae(o.name), o.name, 0, t);
      case "special":
        return Me(2, "? " + ae(o.text) + " ?", "", 2, t);
      case "sequence": {
        let m = Math.max(0, i.length - 1) * t.gap, d = 0, g = 0;
        for (let $ of i)
          m += $.width, d = Math.max(d, $.up), g = Math.max(g, $.down);
        let v = { kind: 3, width: m, up: d, down: g, kids: i, text: "", id: "", reach: 0 };
        if (m <= c || i.length < 2)
          return v;
        let w = [], b = [], p = 0, V = () => {
          let $ = 0, H = 0;
          for (let Q of b)
            $ = Math.max($, Q.up), H = Math.max(H, Q.down);
          w.push({ kind: 3, width: p, up: $, down: H, kids: b, text: "", id: "", reach: 0 }), b = [], p = 0;
        };
        for (let $ of i)
          b.length && p + t.gap + $.width > Math.max(40, c - 6 * t.arc) && V(), p += (b.length ? t.gap : 0) + $.width, b.push($);
        if (V(), w.length < 2)
          return v;
        let S = 0, j = 0;
        for (let $ = 0; $ < w.length; $++)
          S = Math.max(S, w[$].width), $ && (j += w[$ - 1].down + Math.max(t.sep, 2 * t.arc) + w[$].up);
        return { kind: 7, width: S + 6 * t.arc, up: w[0].up, down: j + w[w.length - 1].down, kids: w, text: "", id: "", reach: 0 };
      }
      case "choice": {
        let m = 0, d = 0;
        for (let v = 0; v < i.length; v++)
          m = Math.max(m, i[v].width), v > 0 && (d = lt(d, i[v - 1], i[v], t));
        let g = i[i.length - 1];
        return { kind: 4, width: m + 4 * t.arc, up: i.length > 0 ? i[0].up : 0, down: g ? d + g.down : 0, kids: i, text: "", id: "", reach: 0 };
      }
      case "optional":
        return Je(i[0], t);
      case "repetition": {
        let { min: m, max: d } = o, g = i[0];
        if (m === 1 && d === 1)
          return g;
        let v = un(m, d), w = Math.max(g.down + t.sep, 2 * t.arc), b = v === "" ? 0 : Ce(t.measurer.width(v, le, 0)), p = { kind: 6, width: Math.max(g.width, b) + 2 * t.arc, up: g.up, down: w + (v === "" ? N / 2 + 1 : le + 6), kids: [g], text: v, id: "", reach: w };
        return m === 0 ? Je(p, t) : p;
      }
    }
  });
}
function dn(e, t, n) {
  return mt(n, (r) => hn(e, t, n, r));
}
function hn(e, t, n, r) {
  var Oe, qe, Ie, Fe, Be;
  let a = (Oe = n.fontSize) != null ? Oe : 16, o = Z(t, "fontSize", 0, 200), i = o || Math.round(a * 0.875), c = o || a, h = Z(t, "padding", -1, 200), m = Math.round(i * 1.5), d = { measurer: (qe = n.measurer) != null ? qe : Nt(n.fontFamily, n.fontFamilyMono), size: i, padding: h < 0 ? 12 : h, height: Ce(m + (h < 0 ? 9 : 2 * h)), gap: Math.min(Z(t, "horizontalSeparation", 16, 500), r ? 12 : 1 / 0), sep: Z(t, "verticalSeparation", 10, 500), arc: Math.min(Z(t, "arcRadius", 10, 200), r ? 6 : 1 / 0) }, g = ((Ie = t.railroad) == null ? void 0 : Ie.showMarkers) === !1 ? 0 : Z(t, "markerRadius", 4, 50), v = Z(t, "strokeWidth", 0, 20), w = v > 0 ? ` stroke-width="${l(v)}"` : "", b = (Fe = n.padding) != null ? Fe : 8, { arc: p } = d, V = l(p), S = (O, P, I) => `a${V},${V} 0 0 ${O} ${P}${V},${I}${V}`, j = S(1, "", ""), $ = S(0, "", ""), H = S(0, "", "-"), Q = S(1, "", "-"), ot = S(0, "-", ""), st = S(0, "-", "-"), U = At(e.title, !1, d.measurer, a, r ? $t(n) : 4e3, 1), ct = U.height > 0 ? U.height + 16 : 0, Ne = Math.round(c * 1.5), pt = i * 0.35, Se = d.height / 2, G = "", J = "", Y = "", T = (O, P, I) => {
    I > O && (G += `M${l(O)},${l(P)}H${l(I)}`);
  }, ut = (O, P, I) => {
    let E = [O], _ = [P, I];
    for (; E.length > 0; ) {
      let y = E.pop(), u = _.pop(), k = _.pop(), R = y.kids, q = k + y.width;
      switch (y.kind) {
        case 3: {
          let f = q;
          for (let x = R.length - 1; x >= 0; x--)
            f -= R[x].width, E.push(R[x]), _.push(f, u), x > 0 && T(f - d.gap, u, f), f -= d.gap;
          break;
        }
        case 7: {
          let f = k + 2 * p, x = E.length, A = 0;
          T(k, u, f);
          for (let M = 0; M < R.length; M++) {
            let F = R[M], C = u + A;
            if (E.push(F), _.push(C, f), M + 1 < R.length) {
              let W = R[M + 1], L = A + F.down + Math.max(d.sep, 2 * p) + W.up, B = u + A + F.down + Math.max(d.sep, 2 * p) / 2;
              G += `M${l(f + F.width)},${l(C)}H${l(q - 2 * p)}V${l(B)}H${l(k + p)}V${l(u + L)}H${l(f)}`, J += `M${l(f - N)},${l(u + L - N / 2)}l${N},${N / 2}l${-N},${N / 2}z`, A = L;
            } else
              G += `M${l(f + F.width)},${l(C)}H${l(q - p)}V${l(u)}H${l(q)}`;
          }
          re(E, x), re(_, 2 * x);
          break;
        }
        case 4: {
          let f = y.width - 4 * p, x = k + p, A = q - p, M = E.length, F = 0;
          for (let C = 0; C < R.length; C++) {
            let W = R[C];
            C > 0 && (F = lt(F, R[C - 1], W, d));
            let L = u + F, B = k + 2 * p + (f - W.width) / 2, Ge = C === R.length - 1;
            C === 0 ? (T(k, u, B), T(B + W.width, u, q)) : G += (Ge ? `M${l(k)},${l(u)}${j}V${l(L - p)}` : `M${l(x)},${l(L - p)}`) + $ + (B > x + p ? `H${l(B)}` : "") + `M${l(B + W.width)},${l(L)}` + (B > x + p ? `H${l(A - p)}` : "") + H + (Ge ? `V${l(u + p)}${Q}` : ""), E.push(W), _.push(L, B);
          }
          re(E, M), re(_, 2 * M);
          break;
        }
        case 5: {
          let f = R[0], x = k + 2 * p;
          T(k, u, x), T(x + f.width, u, q), G += `M${l(k)},${l(u)}${H}V${l(u - y.reach + p)}${Q}H${l(q - 2 * p)}${j}V${l(u - p)}${$}`, E.push(f), _.push(x, u);
          break;
        }
        case 6: {
          let f = R[0], x = k + (y.width - f.width) / 2, A = u + y.reach, M = k + y.width / 2;
          T(k, u, x), T(x + f.width, u, q), G += `M${l(k + p)},${l(u)}${ot}V${l(A - p)}${$}H${l(q - p)}${H}V${l(u + p)}${st}`, J += `M${l(M - N / 2)},${l(A)}l${N},${-N / 2}v${N}z`, y.text !== "" && (Y += `<text class="pele-edge-label pele-count" x="${l(M)}" y="${l(A + le + 3)}" font-size="${le}" fill="var(--_m)">${ee(y.text)}</text>`), E.push(f), _.push(x, u);
          break;
        }
        default: {
          let f = y.text, x = f.startsWith(" ") || f.endsWith(" ") || f.includes("  ") ? ' xml:space="preserve"' : "", A = `<rect x="${l(k)}" y="${l(u - Se)}" width="${l(y.width)}" height="${l(d.height)}"`, M = `<text x="${l(k + y.width / 2)}" y="${l(u + pt)}"${x}`;
          y.kind === 0 ? Y += `<g class="pele-node pele-terminal">${A} rx="${l(Se)}" fill="var(--_s)" stroke="var(--_b)"${w}/>${M} font-family="${Pt}">${ee(f)}</text></g>` : y.kind === 1 ? Y += `<g class="pele-node pele-nonterminal" data-id="${Le(y.id)}">${A} fill="var(--_bg)" stroke="var(--_b)"${w}${ze}/>${M}>${ee(f)}</text></g>` : Y += `<g class="pele-node pele-special">${A} fill="var(--_bg)" stroke="var(--_b)" stroke-dasharray="4 3"${w}${ze}/>${M} font-style="italic"><tspan fill="var(--_m)">? </tspan>${ee(f.slice(2, -2))}<tspan fill="var(--_m)"> ?</tspan></text></g>`;
        }
      }
    }
  }, xe = "", ge = U.width, ye = b + ct, be = b + U.height;
  for (let O of e.rules) {
    let P = fn(O.definition, d, r ? Math.max(80, ((Be = n.maxWidth) != null ? Be : 320) - 2 * b - 4 * g - 2 * ve - 1) : 1 / 0), I = ae(O.name), E = ye + Ne + sn + P.up, _ = b + 2 * g, y = _ + ve, u = y + P.width + ve;
    G = "", J = "", Y = "", T(_, E, y), T(y + P.width, E, u), ut(P, y, E);
    let k = g > 0 ? `<circle class="pele-marker pele-start" cx="${l(b + g)}" cy="${l(E)}" r="${l(g)}" fill="var(--_l)"/><circle class="pele-marker pele-end" cx="${l(u + g)}" cy="${l(E)}" r="${l(g)}" fill="var(--_l)"/>` : "";
    xe += `<g class="pele-rule" data-id="${Le(O.name)}"><text class="pele-rule-name" x="${l(b)}" y="${l(ye + Ne / 2 + c * 0.35)}" font-size="${l(c)}" font-weight="var(--_hw)" text-anchor="start">${ee(I)}</text><path class="pele-edge pele-track" d="${G}" fill="none" stroke="var(--_l)"${w}/>` + (J ? `<path class="pele-marker" d="${J}" fill="var(--_l)"/>` : "") + k + Y + "</g>", ge = Math.max(ge, u + 2 * g - b, d.measurer.width(I, c, 1)), be = E + P.down, ye = be + d.sep + cn;
  }
  let ke = Math.ceil(ge + 2 * b), Te = Math.ceil(be + b), ft = Rt(U, ke / 2, b + U.height / 2, ' class="pele-title" font-weight="var(--_tw)"') + (xe ? `<g class="pele-rules" transform="translate(0.5,0.5)" font-size="${l(i)}" text-anchor="middle">${xe}</g>` : "");
  return { svg: _t("railroad", ke, Te, a, n, e, ft), width: ke, height: Te, links: [] };
}
var bn = { type: "railroad", parse: (e, t, n) => on(e, n), render: dn };
export {
  bn as railroad
};
//# sourceMappingURL=6UYJYLAC-7c2fd5a7.js.map

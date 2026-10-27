var Tt = Object.defineProperty;
var jt = (e, t, i) => t in e ? Tt(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : e[t] = i;
var P = (e, t, i) => (jt(e, typeof t != "symbol" ? t + "" : t, i), i);
var ce = class {
  constructor(e) {
    P(this, "message");
    this.message = e;
  }
}, ct = 64;
function Ee(e, t, i) {
  t === "__proto__" ? Object.defineProperty(e, t, { value: i, enumerable: !0, writable: !0, configurable: !0 }) : e[t] = i;
}
var St = class {
  constructor(e) {
    P(this, "lines");
    P(this, "i", 0);
    this.lines = (e.includes("\r") ? e.replace(/\r\n?/g, `
`) : e).split(`
`);
  }
  skipBlank() {
    for (; this.i < this.lines.length; ) {
      let e = this.lines[this.i].trim();
      if (e !== "" && e[0] !== "#" && e !== "---")
        break;
      this.i++;
    }
  }
  indent() {
    let e = this.lines[this.i], t = 0;
    for (; t < e.length && e[t] === " "; )
      t++;
    if (e[t] === "	")
      throw new Error("YAML: tabs are not allowed for indentation");
    return t;
  }
}, Dt = /^[-+]?(?:0|[1-9][0-9]*)$/, Rt = /^[-+]?0x[0-9a-fA-F]+$/, It = /^[-+]?0o[0-7]+$/, Yt = /^[-+]?0b[01]+$/, Bt = /^[-+]?(?:[0-9][0-9]*(?:\.[0-9]*)?|\.[0-9]+)(?:[eE][-+]?[0-9]+)?$/, Nt = /[\s#:,[\]{}&*!|>'"%@`]/;
function pe(e) {
  return e === " " || e === "	" || e === `
` || e === "\r";
}
function De(e) {
  let t = e[0], i, r;
  if (t === '"' || t === "'") {
    let n = 1;
    for (; ; ) {
      if (n >= e.length)
        return null;
      let l = e[n];
      if (t === '"' && l === "\\")
        n += 2;
      else if (l === t) {
        if (t === '"' || e[n + 1] !== "'")
          break;
        n += 2;
      } else
        n++;
    }
    for (i = n + 1, r = i; pe(e[r]); )
      r++;
    if (e[r] !== ":")
      return null;
  } else {
    if (t === void 0 || Nt.test(t) || t === "-" && (e.length < 2 || pe(e[1]) || e[1] === ":" || e[1] === "#"))
      return null;
    for (r = 1; r < e.length && e[r] !== ":" && e[r] !== "#"; )
      r++;
    if (e[r] !== ":")
      return null;
    for (i = r; pe(e[i - 1]); )
      i--;
  }
  let a = r + 1;
  if (a < e.length && !pe(e[a]))
    return null;
  for (; pe(e[a]); )
    a++;
  return { key: e.slice(0, i), length: a };
}
function Ve(e) {
  let t = e.trim();
  if (t === "" || t === "~" || t === "null" || t === "Null" || t === "NULL")
    return null;
  if (t === "true" || t === "True" || t === "TRUE")
    return !0;
  if (t === "false" || t === "False" || t === "FALSE")
    return !1;
  let i = t[0];
  if (i !== "-" && i !== "+" && i !== "." && (i < "0" || i > "9"))
    return t;
  if (Dt.test(t) || Bt.test(t))
    return Number(t);
  if (Rt.test(t) || It.test(t) || Yt.test(t)) {
    let r = t[0] === "-", a = Number(r || t[0] === "+" ? t.slice(1) : t);
    return r ? -a : a;
  }
  return /^[-+]?\.(?:inf|Inf|INF)$/.test(t) ? t[0] === "-" ? -1 / 0 : 1 / 0 : /^\.(?:nan|NaN|NAN)$/.test(t) ? NaN : t;
}
var Je = { 0: "\0", a: "\x07", b: "\b", t: "	", n: `
`, v: "\v", f: "\f", r: "\r", e: "\x1B", " ": " ", '"': '"', "/": "/", "\\": "\\", N: "\x85", _: "\xA0", L: "\u2028", P: "\u2029" };
function ye(e) {
  if (!e.includes(`
`))
    return e;
  let t = e.split(`
`), i = t.length - 1;
  for (let r = 0; r <= i; r++) {
    let a = t[r], n = 0, l = a.length;
    if (r > 0)
      for (; n < l && (a.charCodeAt(n) === 32 || a.charCodeAt(n) === 9); )
        n++;
    if (r < i)
      for (; l > n && (a.charCodeAt(l - 1) === 32 || a.charCodeAt(l - 1) === 9); )
        l--;
    t[r] = a.slice(n, l);
  }
  return t.join(`
`).replace(/\n+/g, (r) => r.length === 1 ? " " : `
`.repeat(r.length - 1));
}
function Ft(e) {
  if (!e.includes("\\"))
    return ye(e);
  let t = "", i = ye(e.replace(/\\\n[ \t]*/g, ""));
  for (let r = 0; r < i.length; r++) {
    let a = i[r];
    if (a !== "\\") {
      t += a;
      continue;
    }
    let n = i[++r];
    if (n === "x" || n === "u" || n === "U") {
      let l = n === "x" ? 2 : n === "u" ? 4 : 8;
      t += String.fromCodePoint(parseInt(i.slice(r + 1, r + 1 + l), 16)), r += l;
    } else if (n in Je)
      t += Je[n];
    else
      throw new Error("YAML: unknown escape sequence");
  }
  return t;
}
function re(e, t, i) {
  for (; t < e.length; ) {
    let r = e[t];
    if (r === " " || r === `
` || r === "	" || r === "\r" || i && r === ",")
      t++;
    else if (r === "#" && (t === 0 || /\s/.test(e[t - 1]))) {
      let a = e.indexOf(`
`, t);
      t = a === -1 ? e.length : a;
    } else
      break;
  }
  return t;
}
function et(e, t) {
  if (!t)
    throw new Error("YAML: missed comma between flow collection entries");
  if (e === ",")
    throw new Error("YAML: expected the node content, but found ','");
}
function de(e, t, i, r = 0) {
  if (r > ct)
    throw new Error("YAML: nesting is too deep");
  t = re(e, t, !1);
  let a = e[t];
  if (a === "{") {
    let l = {};
    t++;
    let s = !0;
    for (; ; ) {
      if (t = re(e, t, !1), t >= e.length)
        throw new ce("YAML: unexpected end of the stream within a flow collection");
      if (e[t] === "}")
        return [l, t + 1];
      et(e[t], s);
      let d;
      [d, t] = de(e, t, ":,}", r + 1), t = re(e, t, !1);
      let c = null;
      e[t] === ":" && ([c, t] = de(e, t + 1, ",}", r + 1)), Ee(l, String(d), c), t = re(e, t, !1), s = e[t] === ",", s && t++;
    }
  }
  if (a === "[") {
    let l = [];
    t++;
    let s = !0;
    for (; ; ) {
      if (t = re(e, t, !1), t >= e.length)
        throw new ce("YAML: unexpected end of the stream within a flow collection");
      if (e[t] === "]")
        return [l, t + 1];
      et(e[t], s);
      let d;
      [d, t] = de(e, t, ",]", r + 1), l.push(d), t = re(e, t, !1), s = e[t] === ",", s && t++;
    }
  }
  if (a === '"') {
    let l = t + 1;
    for (; l < e.length && e[l] !== '"'; )
      l += e[l] === "\\" ? 2 : 1;
    if (l >= e.length)
      throw new ce("YAML: unexpected end of the stream within a double quoted scalar");
    return [Ft(e.slice(t + 1, l)), l + 1];
  }
  if (a === "'") {
    let l = t + 1;
    for (; l < e.length; ) {
      if (e[l] === "'") {
        if (e[l + 1] !== "'")
          break;
        l++;
      }
      l++;
    }
    if (l >= e.length)
      throw new ce("YAML: unexpected end of the stream within a single quoted scalar");
    return [ye(e.slice(t + 1, l)).replace(/''/g, "'"), l + 1];
  }
  let n = t;
  for (; n < e.length; ) {
    let l = e[n];
    if (i.includes(l) && (l !== ":" || n + 1 >= e.length || /[\s,[\]{}]/.test(e[n + 1])))
      break;
    if (l === "#" && n > t && /\s/.test(e[n - 1])) {
      let s = e.indexOf(`
`, n);
      return [Ve(ye(e.slice(t, n).trim())), s === -1 ? e.length : s];
    }
    n++;
  }
  return [Ve(ye(e.slice(t, n).trim())), n];
}
function we(e) {
  let t = "";
  for (let i = 0; i < e.length; i++) {
    let r = e[i];
    if (t)
      r === "\\" && t === '"' ? i++ : r === t && (t = "");
    else if (r === '"' || r === "'")
      t = r;
    else if (r === "#" && (i === 0 || e[i - 1] === " " || e[i - 1] === "	"))
      return e.slice(0, i);
  }
  return e;
}
function _t(e, t, i) {
  let r = t[0] === ">", a = t.includes("-") ? "-" : t.includes("+") ? "+" : "", n = /[1-9]/.exec(t), l = n ? i + Number(n[0]) : -1, s = [];
  for (; e.i < e.lines.length; ) {
    let f = e.lines[e.i];
    if (f.trim() === "") {
      s.push(""), e.i++;
      continue;
    }
    let u = f.length - f.trimStart().length;
    if (l === -1) {
      if (u <= i)
        break;
      l = u;
    }
    if (u < l)
      break;
    s.push(f.slice(l)), e.i++;
  }
  let d = 0;
  for (; s.length > 0 && s[s.length - 1] === ""; )
    s.pop(), d++;
  let c;
  if (r) {
    c = "";
    for (let f = 0; f < s.length; f++) {
      let u = s[f];
      if (f > 0) {
        let p = s[f - 1];
        u === "" ? c += `
` : p !== "" && (c += /^[ \t]/.test(p) || /^[ \t]/.test(u) ? `
` : " ");
      }
      c += u;
    }
  } else
    c = s.join(`
`);
  return s.length === 0 ? a === "+" ? `
`.repeat(d) : "" : a === "-" ? c : a === "+" ? c + `
`.repeat(d + 1) : c + `
`;
}
function Re(e, t, i) {
  let r = t[0];
  if ((r === "|" || r === ">") && /^[|>][-+0-9]*\s*(?:#.*)?$/.test(t))
    return _t(e, t, i);
  if (r === "{" || r === "[" || r === '"' || r === "'") {
    let n = e.i, l = t, s = 0, d = 1;
    for (; ; )
      try {
        let [c, f] = de(l, 0, ""), u = 0;
        for (let m = l.indexOf(`
`); m !== -1 && m < f; m = l.indexOf(`
`, m + 1))
          u++;
        let p = l.indexOf(`
`, f);
        if (we(l.slice(f, p === -1 ? l.length : p)).trim() !== "")
          throw new Error("YAML: unexpected content after a value");
        return e.i = n + u, c;
      } catch (c) {
        if (!(c instanceof ce))
          throw c;
        if (n + s >= e.lines.length)
          throw new Error(c.message);
        let f = e.lines.slice(n + s, n + s + d);
        l += `
` + f.join(`
`), s += f.length, d *= 2;
      }
  }
  let a = we(t).trim();
  for (; e.i < e.lines.length; ) {
    let n = e.lines[e.i];
    if (n.trim() === "") {
      let s = e.i;
      for (; s < e.lines.length && e.lines[s].trim() === ""; )
        s++;
      if (s >= e.lines.length || e.lines[s].length - e.lines[s].trimStart().length <= i)
        break;
      a += `
`.repeat(s - e.i), e.i = s;
      continue;
    }
    if (n.length - n.trimStart().length <= i)
      break;
    let l = we(n).trim();
    a += (a.endsWith(`
`) ? "" : " ") + l, e.i++;
  }
  return Ve(a);
}
function Oe(e, t, i = 0) {
  if (i > ct)
    throw new Error("YAML: nesting is too deep");
  if (e.skipBlank(), e.i >= e.lines.length)
    return null;
  let r = e.indent();
  if (r < t)
    return null;
  let a = e.lines[e.i].slice(r);
  if (a === "-" || a.startsWith("- ")) {
    let l = [];
    for (; e.i < e.lines.length && (e.skipBlank(), !(e.i >= e.lines.length || e.indent() !== r)); ) {
      let s = e.lines[e.i].slice(r);
      if (s !== "-" && !s.startsWith("- "))
        break;
      let d = s.slice(1), c = d.length - d.trimStart().length + 1, f = we(d).trim();
      f === "" ? (e.i++, l.push(Oe(e, r + 1, i + 1))) : De(f) !== null ? (e.lines[e.i] = " ".repeat(r + c) + d.trimStart(), l.push(Oe(e, r + c, i + 1))) : (e.i++, l.push(Re(e, d.trim(), r)));
    }
    return l;
  }
  if (De(a) === null)
    return e.i++, Re(e, a.trim(), r - 1);
  let n = {};
  for (; e.i < e.lines.length && (e.skipBlank(), !(e.i >= e.lines.length)); ) {
    let l = e.indent();
    if (l < r)
      break;
    if (l > r)
      throw new Error("YAML: bad indentation of a mapping entry");
    let s = e.lines[e.i].slice(r), d = De(s);
    if (!d)
      throw new Error("YAML: can not read a block mapping entry");
    let c = String(de(d.key, 0, "")[0]), f = s.slice(d.length);
    if (e.i++, we(f).trim() === "")
      if (e.skipBlank(), e.i < e.lines.length) {
        let u = e.indent(), p = e.lines[e.i].slice(u), m = p === "-" || p.startsWith("- ");
        Ee(n, c, u > r || m && u === r ? Oe(e, m ? r : r + 1, i + 1) : null);
      } else
        Ee(n, c, null);
    else
      Ee(n, c, Re(e, f.trim(), r));
  }
  return n;
}
function Pt(e) {
  let t = e.trim();
  if (t[0] === "{" || t[0] === "[")
    try {
      let [a, n] = de(t, 0, "");
      if (re(t, n, !1) === t.length)
        return a;
    } catch (a) {
      throw a instanceof ce ? new Error(a.message) : a;
    }
  let i = new St(e), r = Oe(i, 0);
  if (i.skipBlank(), i.i < i.lines.length && i.lines[i.i].trim() !== "...")
    throw new Error("YAML: end of the stream or a document separator is expected");
  return r;
}
function Vt(e) {
  return e < 128 ? e === 32 || e >= 9 && e <= 13 : e === 160 || e === 5760 || e >= 8192 && e <= 8202 || e === 8232 || e === 8233 || e === 8239 || e === 8287 || e === 12288 || e === 65279;
}
function Ur(e) {
  return e === 32 || e === 9;
}
function Kr(e) {
  return e === 10 || e === 13 || e === 8232 || e === 8233;
}
function Zr(e) {
  return e >= 48 && e <= 57;
}
function Qr(e) {
  return e >= 65 && e <= 90 || e >= 97 && e <= 122;
}
function Jr(e) {
  return e >= 48 && e <= 57 || e >= 65 && e <= 70 || e >= 97 && e <= 102;
}
function ei(e) {
  return e >= 48 && e <= 57 || e >= 65 && e <= 90 || e >= 97 && e <= 122 || e === 95;
}
var G = class extends Error {
  constructor(t, i = "syntax", r = {}) {
    var a, n, l, s, d;
    super(t);
    P(this, "code");
    P(this, "type");
    P(this, "mermaidType");
    P(this, "line");
    P(this, "column");
    P(this, "snippet");
    this.name = "PeleError", this.code = i, this.type = (a = r.type) != null ? a : null, this.mermaidType = (n = r.mermaidType) != null ? n : null, this.line = (l = r.line) != null ? l : 0, this.column = (s = r.column) != null ? s : 0, this.snippet = (d = r.snippet) != null ? d : "";
  }
};
function Gt(e, t, i) {
  return Array.from(e.matchAll(t), (r) => [r.index, r.index + r[0].length, i]);
}
function Xt(e, t) {
  let i = 0;
  for (let [r, a, n] of e) {
    let l = r - i;
    if (t < l)
      break;
    if (t < l + n)
      return r + Math.min(t - l, a - r - 1);
    i += a - r - n;
  }
  return t + i;
}
function Ht(e, t) {
  for (let i = e.length - 1; i >= 0; i--)
    t = Xt(e[i], t);
  return t;
}
var he;
function Ut(e, t) {
  let i = he;
  he = e;
  try {
    return t();
  } finally {
    he = i;
  }
}
function tt(e, t) {
  return he !== void 0 && e === he.parsed ? he.find(t) : [e, t];
}
function Kt(e, t) {
  let i = e.trimEnd().length;
  i > 0 && t >= i ? ([e, t] = tt(e, i - 1), t++) : [e, t] = tt(e, t);
  let r = 1, a = 0;
  for (let d = e.indexOf(`
`); d !== -1 && d < t; d = e.indexOf(`
`, d + 1))
    r++, a = d + 1;
  let n = e.indexOf(`
`, t);
  n === -1 && (n = e.length);
  let l = t - a + 1, s = e.slice(a, n);
  return { line: r, column: l, snippet: s + `
` + "-".repeat(l - 1) + "^" };
}
function ti(e, t, i, r, a = !1) {
  let n = Kt(t, i), l = a ? `Lexical error on line ${n.line}. Unrecognized text.` : `Parse error on line ${n.line}:`, s = a ? `${l}
${n.snippet}` : `${l}
${n.snippet}
${r}`;
  return new G(s, "syntax", { type: e, ...n });
}
var Zt = "amp:38,lt:60,gt:62,quot:34,apos:39,nbsp:160,shy:173,iexcl:161,cent:162,pound:163,curren:164,yen:165,sect:167,copy:169,laquo:171,not:172,reg:174,deg:176,plusmn:177,sup2:178,sup3:179,micro:181,para:182,middot:183,sup1:185,raquo:187,frac14:188,frac12:189,frac34:190,iquest:191,times:215,divide:247,ndash:8211,mdash:8212,lsquo:8216,rsquo:8217,sbquo:8218,ldquo:8220,rdquo:8221,bdquo:8222,dagger:8224,Dagger:8225,bull:8226,hellip:8230,permil:8240,prime:8242,Prime:8243,lsaquo:8249,rsaquo:8250,euro:8364,trade:8482,larr:8592,uarr:8593,rarr:8594,darr:8595,harr:8596,lArr:8656,uArr:8657,rArr:8658,dArr:8659,hArr:8660,forall:8704,part:8706,exist:8707,empty:8709,nabla:8711,isin:8712,notin:8713,ni:8715,prod:8719,sum:8721,minus:8722,radic:8730,infin:8734,and:8743,or:8744,cap:8745,cup:8746,int:8747,there4:8756,sim:8764,cong:8773,asymp:8776,ne:8800,equiv:8801,le:8804,ge:8805,sub:8834,sup:8835,sube:8838,supe:8839,oplus:8853,otimes:8855,perp:8869,sdot:8901,loz:9674,spades:9824,clubs:9827,hearts:9829,diams:9830,check:10003,cross:10007,AMP:38,LT:60,GT:62,QUOT:34,lsqb:91,rsqb:93,lcub:123,rcub:125,verbar:124,VerticalLine:124,midast:42,DiacriticalGrave:96,Hat:94,UnderBar:95,equals:61,colon:58,semi:59,num:35,percnt:37,lpar:40,rpar:41,lbrack:91,rbrack:93,lbrace:123,rbrace:125,vert:124,sol:47,bsol:92,quest:63,excl:33,ast:42,plus:43,comma:44,period:46,dollar:36,commat:64,grave:96,hat:94,lowbar:95,tilde:126,Alpha:913,Beta:914,Gamma:915,Delta:916,Epsilon:917,Zeta:918,Eta:919,Theta:920,Iota:921,Kappa:922,Lambda:923,Mu:924,Nu:925,Xi:926,Omicron:927,Pi:928,Rho:929,Sigma:931,Tau:932,Upsilon:933,Phi:934,Chi:935,Psi:936,Omega:937,alpha:945,beta:946,gamma:947,delta:948,epsilon:949,zeta:950,eta:951,theta:952,iota:953,kappa:954,lambda:955,mu:956,nu:957,xi:958,omicron:959,pi:960,rho:961,sigmaf:962,sigma:963,tau:964,upsilon:965,phi:966,chi:967,psi:968,omega:969", Ce;
function Qt(e) {
  if (!Ce) {
    Ce = /* @__PURE__ */ new Map();
    for (let t of Zt.split(",")) {
      let i = t.indexOf(":");
      Ce.set(t.slice(0, i), String.fromCodePoint(Number(t.slice(i + 1))));
    }
  }
  return Ce.get(e);
}
function rt(e, t) {
  return e > 0 && e <= 1114111 && (e < 55296 || e > 57343) ? String.fromCodePoint(e) : t;
}
var Jt = /&(?:#(\d+)|#[xX]([0-9a-fA-F]+)|(\w+));/g, it = "\uFB02\xB0", dt = "\xB6\xDF";
function er(e) {
  let t = "", i = 0, r = e.indexOf(it);
  for (; r !== -1; ) {
    let a = e.indexOf("\xB6", r + 2);
    if (a === -1)
      break;
    if (e[a + 1] === "\xDF") {
      let n = e[r + 2] === "\xB0";
      t += e.slice(i, r) + (n ? "&#" : "&") + e.slice(r + (n ? 3 : 2), a) + ";", i = a + 2;
    }
    r = e.indexOf(it, a + 1);
  }
  return i === 0 ? e : t + e.slice(i);
}
var tr = /ﬂ°°?(\w+)¶ß/g;
function nt(e) {
  return e.includes(dt) ? e.replace(tr, "#$1;") : e;
}
function lt(e) {
  return e.includes(dt) && (e = er(e)), e.includes("&") && (e = e.replace(Jt, (t, i, r, a) => {
    var n;
    return i ? rt(Number(i), t) : r ? rt(parseInt(r, 16), t) : (n = Qt(a)) != null ? n : t;
  })), e;
}
var ve, be = /* @__PURE__ */ new Map();
function rr(e, t) {
  let i = ve, r = be;
  ve = e, be = /* @__PURE__ */ new Map();
  try {
    return t();
  } finally {
    ve = i, be = r;
  }
}
function ri(e) {
  var i;
  if (ve === void 0)
    return "";
  let t = be.get(e);
  return t === void 0 && (t = (i = ve(e)) != null ? i : "", be.set(e, t)), t;
}
var V, ge = /* @__PURE__ */ new Map();
function ir(e, t) {
  let i = V, r = ge;
  V = e, ge = /* @__PURE__ */ new Map();
  try {
    return t();
  } finally {
    V = i, ge = r;
  }
}
function ii() {
  return V !== void 0;
}
function at(e) {
  return Number.isFinite(e) && e > 0;
}
function ni(e, t) {
  var n;
  if (V === void 0)
    return;
  let i = t + `
` + e;
  if (ge.has(i))
    return ge.get(i);
  let r = (n = V(e, t)) != null ? n : void 0, a = r && at(r.width) && at(r.height) && typeof ("svg" in r ? r.svg : r.html) == "string" ? r : void 0;
  return ge.set(i, a), a;
}
function li(e) {
  if (V === void 0)
    return e();
  let t = V;
  V = void 0;
  try {
    return e();
  } finally {
    V = t;
  }
}
var nr = "7q7q9vfgfgopij5b9999atg87q997q7qfgfgfgfgfgfgfgfgfgfg7q7qg8g8g8fgs7ijijk2k2ijgzlmk27qdwijfgn5k2lmijlmk2ijgzk2ijq8ijijgz7q7q7qd1fg99fgfgdwfgfg7qfgfg6666dw66n5fgfgfgfg99dw7qfgdwk2dwdwdw9a789ag8", lr = "7q99d6fgfgopk26m9999atg87q997q7qfgfgfgfgfgfgfgfgfgfg9999g8g8g8gzr3k2k2k2k2ijgzlmk27qfgk2gzn5k2lmijlmk2ijgzk2ijq8ijijgz997q99g8fg99fggzfggzfg99gzgz7q7qfg7qopgzgzgzgzatfg99gzfglmfgfgdwat7satg8", ht = 1.2;
function ot(e) {
  let t = new Uint16Array(95);
  for (let i = 0; i < 95; i++)
    t[i] = parseInt(e.substr(i * 2, 2), 36);
  return t;
}
var Ie, Ye;
function ar(e) {
  return e >= 4352 && e <= 4447 || e >= 11904 && e <= 42191 || e >= 44032 && e <= 55203 || e >= 63744 && e <= 64255 || e >= 65072 && e <= 65103 || e >= 65280 && e <= 65376 || e >= 65504 && e <= 65510 || e >= 55296 && e <= 56319;
}
function or(e) {
  return e === 173 || e >= 768 && e <= 879 || e >= 8203 && e <= 8207 || e >= 56320 && e <= 57343 || e >= 65024 && e <= 65039 || e === 65279;
}
var sr = { width(e, t, i) {
  let r = (i & 4) !== 0, a = i & 24 ? t / ht : t, n = i & 1 ? Ye != null ? Ye : Ye = ot(lr) : Ie != null ? Ie : Ie = ot(nr), l = 0;
  for (let s = 0; s < e.length; s++) {
    let d = e.charCodeAt(s);
    if (!(d < 32))
      if (d < 127)
        l += r ? 600 : n[d - 32];
      else {
        if (or(d))
          continue;
        ar(d) ? l += r ? 1200 : 1e3 : l += r ? 600 : 580;
      }
  }
  return l * a / 1e3;
} };
function ur() {
  let e = globalThis;
  try {
    if (e.OffscreenCanvas)
      return new e.OffscreenCanvas(1, 1).getContext("2d");
    if (e.document)
      return e.document.createElement("canvas").getContext("2d");
  } catch {
    return null;
  }
  return null;
}
var fr = 2e4;
function st() {
  var t, i;
  let e = globalThis;
  return (i = (t = e.document) == null ? void 0 : t.fonts) != null ? i : e.fonts;
}
function cr(e, t, i) {
  var r;
  try {
    return (r = e == null ? void 0 : e.check(t, i)) != null ? r : !0;
  } catch {
    return !0;
  }
}
function dr(e, t = "monospace") {
  var l;
  let i = ur();
  if (!i)
    return null;
  let r = /* @__PURE__ */ new Map(), a = "", n = (l = st()) == null ? void 0 : l.size;
  return { width(s, d, c) {
    let f = st();
    (f == null ? void 0 : f.size) !== n && (n = f == null ? void 0 : f.size, r.clear());
    let u = c & 24 ? d / ht : d, p = (c & 2 ? "italic " : "") + (c & 1 ? "bold " : "") + u + "px " + (c & 4 ? t : e), m = r.get(p);
    m || r.set(p, m = /* @__PURE__ */ new Map());
    let k = m.get(s);
    return k === void 0 && (p !== a && (i.font = a = p), k = i.measureText(s).width, cr(f, p, s) && (m.size >= fr && m.clear(), m.set(s, k))), k;
  } };
}
var Ge = /* @__PURE__ */ new Map();
function ai(e = "sans-serif", t = "monospace") {
  var a;
  let i = e + `
` + t, r = Ge.get(i);
  return r || (r = (a = dr(e, t)) != null ? a : sr, Ge.set(i, r)), r;
}
function gt() {
  Ge.clear();
}
var hr = [["flowchart", "flowchart-elk", /^\s*flowchart-elk/], ["mindmap", "mindmap", /^\s*mindmap/], ["architecture", "architecture", /^\s*architecture/], ["agentflow", "agentflow", /^\s*agentflow-beta\b/], ["c4", "c4", /^\s*(?:C4Context|C4Container|C4Component|C4Dynamic|C4Deployment)/], ["kanban", "kanban", /^\s*kanban/], ["class", "classDiagram", /^\s*classDiagram/], ["er", "er", /^\s*erDiagram/], ["gantt", "gantt", /^\s*gantt/], ["info", "info", /^\s*info/], ["pie", "pie", /^\s*pie/], ["requirement", "requirement", /^\s*requirement(Diagram)?/], ["sequence", "sequence", /^\s*sequenceDiagram/], ["swimlane", "swimlane", /^\s*swimlane-beta\b/], ["flowchart", "flowchart-v2", /^\s*(graph|flowchart)/], ["timeline", "timeline", /^\s*timeline/], ["gitGraph", "gitGraph", /^\s*gitGraph/], ["state", "stateDiagram", /^\s*stateDiagram/], ["journey", "journey", /^\s*journey/], ["quadrantChart", "quadrantChart", /^\s*quadrantChart/], ["sankey", "sankey", /^\s*sankey(-beta)?/], ["packet", "packet", /^\s*packet(-beta)?/], ["xychart", "xychart", /^\s*xychart(-beta)?/], ["block", "block", /^\s*block(-beta)?/], ["eventmodeling", "eventmodeling", /^\s*eventmodeling/], ["treeView", "treeView", /^\s*treeView-beta/], ["radar", "radar", /^\s*radar-beta/], ["ishikawa", "ishikawa", /^\s*ishikawa(-beta)?\b/i], ["treemap", "treemap", /^\s*treemap/], ["railroad", "railroad", /^\s*railroad-beta/i], ["railroad", "railroadEbnf", /^\s*railroad-ebnf-beta/i], ["railroad", "railroadAbnf", /^\s*railroad-abnf-beta/i], ["railroad", "railroadPeg", /^\s*railroad-peg-beta/i], ["venn", "venn", /^\s*venn-beta/], ["wardley", "wardley", /^\s*wardley-beta/i], ["cynefin", "cynefin", /^\s*cynefin-beta(?:[\s:]|$)/], ["usecase", "usecase", /^\s*usecase-beta(?:\s|$)/]];
function mt(e) {
  for (let [t, i, r] of hr)
    if (r.test(e))
      return { type: t, mermaidType: i };
  return null;
}
var gr = /^\s*%%(?!{)[^\n]+\n?/gm, ue = /%{2}{\s*(?:(\w+)\s*:|(\w+))\s*(?:(\w+)|((?:(?!}%{2}).|\r?\n)*))?\s*(?:}%{2})?/gi, mr = /<(\w+)([^>]*)>/g, pr = /="([^"]*)"/g, yr = /* @__PURE__ */ new Set(["__proto__", "constructor", "prototype"]);
function pt(e, t, i) {
  return i == null || i.push(Gt(e, t, 0)), e.replace(t, "");
}
function yt(e, t) {
  e.includes("%%") && (e = pt(e, gr, t));
  let i = e.trimStart();
  return t == null || t.push([[0, e.length - i.length, 0]]), i;
}
function wt(e) {
  return e.includes("\r") ? e.replace(/\r\n?/g, `
`) : e;
}
function qe(e) {
  return e === `
` || e === "\r";
}
function Be(e) {
  return e !== void 0 && /\s/.test(e);
}
function wr(e) {
  let t = 0;
  for (; t < e.length && Be(e[t]) && !qe(e[t]); )
    t++;
  let i = e.slice(0, t);
  if (!e.startsWith("---", t))
    return;
  let r = [];
  for (let u = t + 3; u < e.length && Be(e[u]); u++)
    qe(e[u]) && r.push(u);
  if (r.length === 0)
    return;
  let a = i + "---", n = (u) => {
    if (!qe(e[u]) || !e.startsWith(a, u + 1))
      return -1;
    let p = -1;
    for (let m = u + 1 + a.length; m < e.length && Be(e[m]); m++)
      qe(e[m]) && (p = m);
    return p;
  }, l = `
` + a, s = -1;
  for (let u = e.lastIndexOf(l); u > r[0]; u = e.lastIndexOf(l, u - 1))
    if (n(u) !== -1) {
      s = u;
      break;
    }
  if (s === -1)
    return;
  let d = r[0];
  for (let u of r)
    u < s && (d = u);
  let c = d + 1, f = c > 0 ? c - 1 : 0;
  for (let u = e.indexOf(l, f); u !== -1 && u <= s; u = e.indexOf(l, u + 1)) {
    if (u < c)
      continue;
    let p = n(u);
    if (p !== -1)
      return { indent: i, body: e.slice(c, u), length: p + 1 };
  }
}
function ie(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
function Le(e, t) {
  for (let i of Object.keys(t)) {
    if (yr.has(i))
      continue;
    let r = t[i], a = e[i];
    ie(r) && ie(a) ? Le(a, r) : ie(r) ? e[i] = Le({}, r) : e[i] = r;
  }
  return e;
}
function vr(e, t, i) {
  var n;
  if (!e.includes("%%{"))
    return e;
  let r = e.trim().replace(/'/g, '"');
  ue.lastIndex = 0;
  let a;
  for (; (a = ue.exec(r)) !== null; ) {
    a.index === ue.lastIndex && ue.lastIndex++;
    let l = (n = a[1]) != null ? n : a[2];
    if (l === "wrap")
      t.wrap = !0;
    else if ((l === "init" || l === "initialize") && a[4])
      try {
        let s = JSON.parse(a[4].trim());
        ie(s) && Le(t, s);
      } catch {
      }
  }
  return ue.lastIndex = 0, pt(e, ue, i);
}
function He(e, t) {
  let i = wt(e), r = i.includes("<") ? i.lastIndexOf(">") : -1;
  r > 0 && (i = i.slice(0, r + 1).replace(mr, (d, c, f) => "<" + c + f.replace(pr, "='$1'") + ">") + i.slice(r + 1));
  let a = {}, n, l = 0, s = i.includes("---") ? wr(i) : void 0;
  if (s) {
    let d = s.indent ? s.body.split(`
`).map((f) => f.startsWith(s.indent) ? f.slice(s.indent.length) : f).join(`
`) : s.body, c;
    try {
      c = Pt(d);
    } catch (f) {
      throw new G(`Front matter is not valid YAML. ${f.message}`, "syntax");
    }
    if (ie(c) && (c.title && (n = String(c.title)), ie(c.config) && Le(a, c.config), c.displayMode)) {
      let f = ie(a.gantt) ? a.gantt : a.gantt = {};
      f.displayMode = String(c.displayMode);
    }
    for (let f = i.indexOf(`
`); f !== -1 && f < s.length; f = i.indexOf(`
`, f + 1))
      l++;
    i = i.slice(s.length), t == null || t.push([[0, s.length, 0]]);
  }
  return i = vr(i, a, t), { text: yt(i), title: n, config: a, withComments: i, lineOffset: l };
}
var br = /#\w+;/g, xr = /^\+?\d+$/, Ne = new RegExp("[\\n\\r\u2028\u2029]", "g");
function vt(e) {
  if (e === void 0)
    return;
  let t = [];
  return e.push(t), t;
}
function ut(e, t, i) {
  let r = vt(i), a = e.indexOf(t);
  if (a === -1)
    return e;
  let n = "", l = 0;
  for (; a !== -1; ) {
    Ne.lastIndex = a;
    let s = Ne.test(e) ? Ne.lastIndex - 1 : e.length, d = !1, c = -1;
    for (let f = a + t.length; f < s; f++) {
      let u = e.charCodeAt(f);
      if (u === 58)
        d = !0;
      else if (u === 35) {
        if (d) {
          c = f;
          break;
        }
      } else
        Vt(u) && (d = !1);
    }
    if (c !== -1) {
      let f = e.lastIndexOf(";", s - 1);
      f > c && (r == null || r.push([f, f + 1, 0]), n += e.slice(l, f), l = f + 1);
    }
    a = s >= e.length ? -1 : e.indexOf(t, s + 1);
  }
  return l === 0 ? e : n + e.slice(l);
}
function bt(e, t) {
  if (!e.includes("#"))
    return e;
  e = ut(ut(e, "style", t), "classDef", t);
  let i = vt(t);
  return e.replace(br, (r, a) => {
    let n = r.substring(1, r.length - 1), l = (xr.test(n) ? "\uFB02\xB0\xB0" : "\uFB02\xB0") + n + "\xB6\xDF";
    return i == null || i.push([a, a + r.length, l.length]), l;
  });
}
function xe(e) {
  var t, i;
  return (i = (t = e.ownerDocument) == null ? void 0 : t.defaultView) != null ? i : globalThis;
}
function ft(e, t) {
  let i = e.clientWidth - (parseFloat(t.paddingLeft) || 0) - (parseFloat(t.paddingRight) || 0);
  return i > 0 ? i : 0;
}
function kr(e, t, i, r, a) {
  let n = t.width / i, l = t.height / i, s = (d, c, f) => c >= f ? Math.min(Math.max(d, f - c), 0) : Math.min(Math.max(d, 0), f - c);
  return { x: s(r, n, e.width), y: s(a, l, e.height), width: n, height: l };
}
var fe = 1.25, Me = 48, zr = 4, Ar = "--_bg:var(--pele-bg,#fff);--_fg:var(--pele-fg,#1f1f1f);--_b:var(--pele-border,#8a8a8a);position:absolute;top:var(--pele-zoom-top,8px);right:var(--pele-zoom-right,8px);bottom:var(--pele-zoom-bottom,auto);left:var(--pele-zoom-left,auto);display:flex;flex-direction:column;gap:2px;padding:2px;width:auto;max-width:none;border:1px solid var(--_b);border-radius:var(--pele-radius,4px);background:var(--_bg);color:var(--_fg);line-height:0", Cr = "appearance:none;display:grid;place-items:center;width:24px;height:24px;margin:0;padding:0;border:0;border-radius:calc(var(--pele-radius,4px) - 1px);background:transparent;color:inherit;font:inherit;cursor:var(--pele-zoom-cursor,pointer)", qr = { zoomIn: "M5 12h14M12 5v14", zoomOut: "M5 12h14", reset: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8M3 3v5h5" }, Mr = { zoomIn: "Zoom in", zoomOut: "Zoom out", reset: "Reset zoom" };
function $r(e, t = {}) {
  return xt(e, t, !0);
}
function xt(e, t, i) {
  let r = null, a = { width: 0, height: 0 }, n = { width: 0, height: 0 }, l = { width: 0, height: 0 }, s = !1, d = "", c = { width: "", height: "", maxWidth: "", margin: "", display: "" }, f = null, u = 0, p = 0, m = 0, k = 0, O = () => xe(e), w = () => a.width > 0 && n.width > 0 ? n.width / a.width : 1, Y = () => {
    var o;
    return Math.max(w(), (o = t.maxScale) != null ? o : 3);
  }, L = () => r !== null && a.width > 0 && (t.always === !0 || w() < 0.999), U = () => {
    if (!r || u !== 0)
      return;
    let o = r.getBoundingClientRect();
    n = { width: o.width, height: o.height }, l = { width: Math.max(n.width, e.clientWidth), height: Math.max(n.height, e.clientHeight) }, s = l.width > n.width + 1 || l.height > n.height + 1, s || (l = n);
    let h = O().getComputedStyle(e);
    d = ["Top", "Right", "Bottom", "Left"].map((y) => `${-(parseFloat(h.getPropertyValue(`padding-${y.toLowerCase()}`)) || 0)}px`).join(" ");
  }, b, x = {}, K = !1, ne = () => {
    var y, z;
    if (t.controls === !1)
      return;
    let o = L();
    if (!b) {
      if (!o)
        return;
      let R = e.ownerDocument;
      b = R.createElement("div"), b.className = "pele pele-zoom", b.setAttribute("style", Ar);
      let q = { zoomIn: () => $((u || w()) * fe * fe), zoomOut: () => $((u || w()) / (fe * fe)), reset: () => j() };
      for (let I of ["zoomIn", "zoomOut", "reset"]) {
        let T = R.createElement("button"), se = (z = (y = t.labels) == null ? void 0 : y[I]) != null ? z : Mr[I];
        T.type = "button", T.className = `pele-zoom-${I === "zoomIn" ? "in" : I === "zoomOut" ? "out" : "reset"}`, T.setAttribute("style", Cr), T.setAttribute("aria-label", se), T.title = se, T.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${qr[I]}"/></svg>`, T.addEventListener("click", q[I]), x[I] = T, b.append(T);
      }
    }
    o && !K && O().getComputedStyle(e).position === "static" && (e.style.position = "relative", K = !0), o && b.parentNode !== e && e.append(b), b.hidden = !o, b.style.display = o ? "flex" : "none";
    let h = (R, q) => {
      R && (R.disabled = q, R.style.opacity = q ? "0.35" : "", R.style.cursor = q ? "default" : "var(--pele-zoom-cursor,pointer)");
    };
    h(x.zoomIn, (u || w()) >= Y() * 0.999), h(x.zoomOut, u === 0), x.reset && (x.reset.style.display = u === 0 ? "none" : "grid");
  }, le = (o) => b !== void 0 && o.target instanceof O().Node && b.contains(o.target), ke = () => {
    r && (ee(), r.style.width = c.width, r.style.height = c.height, r.style.maxWidth = c.maxWidth, r.style.margin = c.margin, r.style.display = c.display);
  }, j = () => {
    r && (ke(), u = 0, r.setAttribute("viewBox", `0 0 ${a.width} ${a.height}`), r.style.cursor = "", r.style.userSelect = "", U(), r.style.touchAction = L() ? "pan-y" : "", L() ? r.setAttribute("tabindex", "0") : r.removeAttribute("tabindex"), je(L()), ne(), M());
  }, M = () => {
    if (!r || !b || b.hidden)
      return;
    let o = b.getBoundingClientRect(), h = [...r.querySelectorAll("text")].some((Se) => {
      let J = Se.getBoundingClientRect();
      return J.right > o.left && J.left < o.right && J.bottom > o.top && J.top < o.bottom;
    }), y = r.getBoundingClientRect(), z = o.left - zr;
    if (!h || y.right - z >= y.width / 2)
      return;
    let R = e.getBoundingClientRect(), q = e.offsetWidth > 0 ? R.width / e.offsetWidth : 1, I = parseFloat(O().getComputedStyle(e).paddingRight) || 0, T = R.left + (e.clientLeft + e.clientWidth - I) * q, se = [r.style.maxWidth, r.style.marginRight];
    r.style.maxWidth = `${(z - y.left) / q}px`, r.style.marginRight = `${Math.max(T - z, 0) / q}px`, f = { before: se, after: [r.style.maxWidth, r.style.marginRight] }, r.getBoundingClientRect().right > z + 1 && ee(), U();
  }, ee = () => {
    !r || !f || (r.style.maxWidth === f.after[0] && (r.style.maxWidth = f.before[0]), r.style.marginRight === f.after[1] && (r.style.marginRight = f.before[1]), f = null);
  }, $ = (o, h, y) => {
    if (!r || (u === 0 && U(), !L()))
      return;
    let z = u || w(), R = Math.min(Math.max(o, w()), Y());
    if (R <= w() * 1.001) {
      j();
      return;
    }
    let q = r.getBoundingClientRect(), I = h != null ? h : q.left + q.width / 2, T = y != null ? y : q.top + q.height / 2, se = (u ? p : 0) + (I - q.left) / z, Se = (u ? m : 0) + (T - q.top) / z;
    u = R;
    let J = q;
    s && (r.style.maxWidth = "none", r.style.margin = d, r.style.display = "block", r.style.width = `${l.width}px`, r.style.height = `${l.height}px`, J = r.getBoundingClientRect()), ze(se - (I - J.left) / u, Se - (T - J.top) / u), r.style.cursor = "grab", r.style.userSelect = "none", r.style.touchAction = "none", ne();
  }, ze = (o, h) => {
    if (!r)
      return;
    let y = kr(a, l, u, o, h);
    p = y.x, m = y.y, r.setAttribute("viewBox", `${p} ${m} ${y.width} ${y.height}`);
  }, Z = (o, h) => {
    u !== 0 && ze(p - o / u, m - h / u);
  }, te = () => {
    X();
    let o = e.clientWidth + e.clientHeight;
    o !== k && (k = o, j());
  }, C, W, X = () => {
    if (!i)
      return;
    let o = O();
    o !== W && (C == null || C.disconnect(), W = o, C = o.ResizeObserver ? new o.ResizeObserver(te) : void 0, C == null || C.observe(e));
  }, me = () => {
    X(), u !== 0 ? ke() : ee();
    let o = e.firstElementChild;
    if (r = o && o.localName === "svg" ? o : null, u = 0, !r) {
      b == null || b.remove(), je(!1);
      return;
    }
    a = { width: Number(r.getAttribute("width")) || 0, height: Number(r.getAttribute("height")) || 0 }, c = { width: r.style.width, height: r.style.height, maxWidth: r.style.maxWidth, margin: r.style.margin, display: r.style.display }, j();
  }, S = /* @__PURE__ */ new Map(), B = !1, ae = 0, g = 0, v = () => {
    let [o, h] = [...S.values()];
    return { distance: Math.hypot(o.x - h.x, o.y - h.y), x: (o.x + h.x) / 2, y: (o.y + h.y) / 2 };
  }, E = (o) => {
    var h;
    !L() || le(o) || o.pointerType === "mouse" && o.button !== 0 || (S.set(o.pointerId, { x: o.clientX, y: o.clientY }), ae = 0, S.size === 2 && (g = v().distance), (S.size === 2 || u !== 0) && ((h = e.setPointerCapture) == null || h.call(e, o.pointerId), r && (r.style.cursor = "grabbing")));
  }, N = (o) => {
    let h = S.get(o.pointerId);
    if (h) {
      if (S.size === 2) {
        let y = v();
        S.set(o.pointerId, { x: o.clientX, y: o.clientY });
        let z = v();
        g > 0 && z.distance > 0 && $((u || w()) * (z.distance / y.distance), z.x, z.y), Z(z.x - y.x, z.y - y.y), B = !0;
        return;
      }
      S.set(o.pointerId, { x: o.clientX, y: o.clientY }), u !== 0 && (ae += Math.abs(o.clientX - h.x) + Math.abs(o.clientY - h.y), ae > 4 && (B = !0), Z(o.clientX - h.x, o.clientY - h.y));
    }
  }, D = (o) => {
    S.delete(o.pointerId) && (g = 0, S.size === 0 && r && u !== 0 && (r.style.cursor = "grab"));
  }, A = (o) => {
    B && (B = !1, o.preventDefault(), o.stopPropagation());
  }, Q = (o) => {
    if (!(o.ctrlKey || o.metaKey) || !L())
      return;
    o.preventDefault(), u === 0 && U();
    let h = Math.min(Math.max(-o.deltaY, -24), 24);
    $((u || w()) * 2 ** (h * 0.02), o.clientX, o.clientY);
  }, H = (o) => {
    !L() || le(o) || (o.preventDefault(), u !== 0 ? j() : $(Math.max(1, w() * 2), o.clientX, o.clientY));
  }, _ = (o) => {
    if (!L() || le(o) || o.ctrlKey || o.metaKey || o.altKey)
      return;
    let h = o.key;
    if (h === "+" || h === "=")
      $((u || w()) * fe);
    else if (h === "-")
      $((u || w()) / fe);
    else {
      if (u === 0)
        return;
      if (h === "0" || h === "Escape")
        j();
      else if (h === "ArrowLeft")
        Z(Me, 0);
      else if (h === "ArrowRight")
        Z(-Me, 0);
      else if (h === "ArrowUp")
        Z(0, Me);
      else if (h === "ArrowDown")
        Z(0, -Me);
      else
        return;
    }
    o.preventDefault();
  }, oe = (o) => {
    if (!r || o.target !== r)
      return;
    let h = !0;
    try {
      h = r.matches(":focus-visible");
    } catch {
    }
    r.style.outline = h ? "" : "none";
  }, F = 0, Ae = (o) => {
    L() && (o.preventDefault(), u === 0 && U(), F = u || w());
  }, Ot = (o) => {
    if (F === 0)
      return;
    o.preventDefault();
    let { scale: h, clientX: y, clientY: z } = o;
    $(F * h, y, z);
  }, Lt = () => {
    F = 0;
  }, Ze = [["pointerdown", E], ["pointermove", N], ["pointerup", D], ["pointercancel", D], ["click", A, { capture: !0 }], ["dblclick", H], ["keydown", _], ["focusin", oe]];
  for (let [o, h, y] of Ze)
    e.addEventListener(o, h, y);
  let Wt = [["wheel", Q, { passive: !1 }], ["gesturestart", Ae, { passive: !1 }], ["gesturechange", Ot, { passive: !1 }], ["gestureend", Lt, { passive: !1 }]], Qe = !1;
  function je(o) {
    if (o !== Qe) {
      Qe = o;
      for (let [h, y, z] of Wt)
        o ? e.addEventListener(h, y, z) : e.removeEventListener(h, y, z);
      o || (F = 0);
    }
  }
  return k = e.clientWidth + e.clientHeight, me(), { get scale() {
    return u || w();
  }, get fit() {
    return w();
  }, zoomBy(o) {
    $((u || w()) * o);
  }, zoomTo(o) {
    $(o);
  }, reset: j, refresh: me, resized: te, destroy() {
    j(), ee(), r && (r.style.touchAction = "", r.removeAttribute("tabindex")), b == null || b.remove(), K && (e.style.position = ""), C == null || C.disconnect(), je(!1);
    for (let [o, h, y] of Ze)
      e.removeEventListener(o, h, y);
  } };
}
function Fe(e, t) {
  let i = t ? xe(t).getComputedStyle(t) : e;
  return { family: i.getPropertyValue("--pele-font").trim() || e.fontFamily || void 0, mono: i.getPropertyValue("--pele-font-mono").trim() || void 0 };
}
function Er(e) {
  var t, i;
  return [.../* @__PURE__ */ new Set([(t = e.ownerDocument) == null ? void 0 : t.fonts, (i = globalThis.document) == null ? void 0 : i.fonts])].filter((r) => r !== void 0);
}
var _e = /* @__PURE__ */ new WeakMap();
function Or(e) {
  let t = _e.get(e);
  return t || (t = e.ready.then(() => {
    _e.delete(e), gt();
  }), _e.set(e, t)), t;
}
var Xe = /* @__PURE__ */ new WeakMap();
function Lr(e, t) {
  Promise.all(e.map(Or)).then(() => {
    var r;
    let i = t.deref();
    i && ((r = Xe.get(i)) == null || r());
  });
}
var $e = /* @__PURE__ */ new WeakMap(), Wr = 0, Tr = Math.random().toString(36).slice(2, 7), jr = "position:relative;height:1.3em;margin-top:-1.3em;line-height:1.3;font-size:0.8em;color:var(--pele-error,#e45756);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;", Sr = "margin:0;font-size:0.8em;font-family:var(--pele-font-mono,monospace);color:var(--pele-error,#e45756);white-space:pre-wrap;";
function Dr(e) {
  return e instanceof Error ? e.message : String(e);
}
function Rr(e) {
  var i;
  let t = e.split(`
`).filter((r) => r.trim() !== "");
  return t.length > 1 ? `${t[0]} ${t[t.length - 1]}` : (i = t[0]) != null ? i : "";
}
function Ir(e, t, i, r = {}) {
  var ae;
  (ae = $e.get(t)) == null || ae.destroy();
  let a = i, n = r, l, s, d = !1, c, f, u, p = `pele-${Tr}-${++Wr}`, m = {}, k, O = -1, w = !1, Y = !1, L = !1, U = (g, v) => {
    var _, oe, F, Ae;
    let { onRender: E, onError: N, sanitize: D, ...A } = n, Q = { ...A, idPrefix: (_ = A.idPrefix) != null ? _ : p, fontFamily: (oe = A.fontFamily) != null ? oe : m.family, fontFamilyMono: (F = A.fontFamilyMono) != null ? F : m.mono, maxWidth: void 0 };
    v && (f = e.render(l, Q), k = void 0);
    let H = (Ae = n.maxWidth) != null ? Ae : ft(t, g);
    return O = H, H > 0 && H < f.width && (k != null || (k = e.render(l, { ...Q, maxWidth: 1 }).svg !== f.svg), k) ? e.render(l, { ...Q, maxWidth: H }) : f;
  }, b = (g) => {
    n.sanitize ? t.replaceChildren(n.sanitize(g)) : t.innerHTML = g;
  }, x, K = () => {
    let g = u ? t.firstElementChild : null;
    if (g != null && g.style && (g.style.opacity = c === void 0 ? "" : "0.4"), c === void 0) {
      x == null || x.remove(), x = void 0;
      return;
    }
    let v = t.ownerDocument;
    if (!v)
      return;
    x != null || (x = v.createElement("div")), x.className = "pele pele-error";
    let E = Dr(c);
    g ? (x.textContent = Rr(E), x.title = E, x.setAttribute("style", jr), x.parentNode !== t && t.append(x)) : (x.textContent = E, x.removeAttribute("title"), x.setAttribute("style", Sr), t.replaceChildren(x));
  }, ne = (g) => {
    var v;
    c = g, K(), (v = n.onError) == null || v.call(n, g);
  }, le = () => {
    if (Y || L)
      return;
    let g = Er(t).filter((v) => v.status === "loading");
    g.length !== 0 && (Y = !0, Lr(g, new WeakRef(B)));
  }, ke = () => {
    Y = !1, w = !0, te();
  }, j = (g, v = !g) => {
    var Q, H;
    let E = xe(t).getComputedStyle(t), N = (Q = t.firstElementChild) != null ? Q : null, D = { fonts: m, natural: f, adapts: k, drawnFor: O, stale: w }, A;
    try {
      if (g && (m = Fe(E, N), w = t.isConnected === !1), A = U(E, g), v && A.svg === (u == null ? void 0 : u.svg)) {
        g && (s = l), d && c !== void 0 && (c = void 0, K());
        return;
      }
      b(A.svg);
    } catch (_) {
      throw { fonts: m, natural: f, adapts: k, drawnFor: O, stale: w } = D, _;
    }
    if (g && (s = l), g && !N && t.firstElementChild) {
      let _ = Fe(E, t.firstElementChild);
      if (_.family !== m.family || _.mono !== m.mono) {
        let oe = { fonts: m, natural: f, adapts: k, drawnFor: O };
        m = _;
        try {
          let F = U(E, !0);
          b(F.svg), A = F;
        } catch {
          ({ fonts: m, natural: f, adapts: k, drawnFor: O } = oe);
        }
      }
    }
    u = A, d && (c = void 0), K(), M == null || M.refresh(), le(), (H = n.onRender) == null || H.call(n, A);
  }, M, ee = !1, $ = () => {
    var v;
    let g = (v = n.zoom) != null ? v : "auto";
    g !== ee && (M == null || M.destroy(), ee = g, M = g === !1 ? void 0 : xt(t, typeof g == "object" ? g : { always: g === !0 }, !1));
  }, ze = () => t.isConnected === !1 || !(t.clientWidth > 0), Z = () => t.isConnected !== !1 && !(t.clientWidth > 0), te = () => {
    var E, N;
    if (L || (S(), !l || ze()))
      return;
    let g = xe(t).getComputedStyle(t), v = Fe(g, (E = t.firstElementChild) != null ? E : null);
    try {
      if (w || v.family !== m.family || v.mono !== m.mono)
        j(!0, !0);
      else if (k !== !1 && n.maxWidth === void 0) {
        let D = ft(t, g);
        D !== O && D !== (u == null ? void 0 : u.width) && j(!1);
      }
    } catch (D) {
      w = !1, d && (c = D), l !== s && (l = s, d = !1), K(), (N = n.onError) == null || N.call(n, D);
    }
    M == null || M.resized(), le();
  }, C, W, X, me = () => {
    X !== void 0 && (C == null || C.cancelAnimationFrame(X)), X = void 0;
  }, S = () => {
    let g = xe(t);
    g !== C && (W == null || W.disconnect(), me(), C = g, W = g.ResizeObserver ? new g.ResizeObserver(() => {
      if (X === void 0) {
        if (!g.requestAnimationFrame)
          return te();
        X = g.requestAnimationFrame(() => {
          X = void 0, te();
        });
      }
    }) : void 0, W == null || W.observe(t));
  }, B = { get result() {
    return u;
  }, get source() {
    return a;
  }, get error() {
    return c;
  }, get zoom() {
    return M;
  }, update(g, v = n) {
    let E = !d || g !== a || v.limit !== n.limit || v.maxEdges !== n.maxEdges || v.config !== n.config;
    a = g, n = v;
    let N = l;
    if (E)
      try {
        N = e.parse(g, v);
      } catch (A) {
        d = !1, ne(A), $();
        return;
      }
    let D = u;
    if (l = N, d = !0, Z()) {
      w = !0, $();
      return;
    }
    try {
      j(!0);
    } catch (A) {
      if (u !== D)
        throw $(), A;
      l = s, d = !1, ne(A);
    }
    $();
  }, refresh: te, destroy() {
    L = !0, W == null || W.disconnect(), W = void 0, me(), C = void 0, M == null || M.destroy(), Xe.delete(B), $e.get(t) === B && $e.delete(t);
  } };
  Xe.set(B, ke);
  try {
    l = e.parse(i, r), d = !0, j(!0);
  } catch (g) {
    if (u)
      throw g;
    l = s, d = !1, ne(g);
  }
  return $(), S(), $e.set(t, B), B;
}
var We = /* @__PURE__ */ new Map();
function kt(...e) {
  for (let t of e)
    We.set(t.type, t);
}
function zt(e) {
  return We.has(e);
}
var Yr = 5e4, Br = 4e6, Nr = 5e3;
function At(e) {
  try {
    return e();
  } catch (t) {
    throw t instanceof RangeError ? new G("Diagram is nested too deeply.", "limit") : t;
  }
}
function Ct(e, t) {
  var i, r, a;
  try {
    return t();
  } catch (n) {
    if (n instanceof RangeError)
      throw new G("Diagram is nested too deeply.", "limit", e);
    if (n instanceof G) {
      (i = n.type) != null || (n.type = e.type), (r = n.mermaidType) != null || (n.mermaidType = e.mermaidType);
      let l = nt(n.message);
      l !== n.message && (n.stack = (a = n.stack) == null ? void 0 : a.replace(n.message, () => l), n.message = l), n.snippet = nt(n.snippet);
    }
    throw n;
  }
}
var qt = /* @__PURE__ */ new WeakMap();
function Mt(e, t = Yr, i = Nr, r) {
  if (e.length > t)
    throw new G(`Diagram source is longer than the limit of ${t} characters.`, "limit");
  let a = He(e), n = mt(a.text);
  if (n === null)
    throw new G("No diagram type detected for the given text.", "unsupported-diagram");
  let l = We.get(n.type);
  if (l === void 0)
    throw new G(`Diagram type "${n.type}" is not supported yet.`, "unsupported-diagram", n);
  let s = r ? { ...r, ...a.config } : a.config, d = l.keepComments === !0, c = bt(d ? a.withComments : a.text) + `
`, f = Ct(n, () => Ut({ parsed: c, find: Fr(e, d) }, () => l.parse(c, s, a.title, a.lineOffset, { maxEdges: i })));
  return { ...n, diagram: l, model: f, config: s };
}
function Fr(e, t) {
  let i, r = "";
  return (a) => {
    if (i === void 0) {
      i = [];
      let n = He(e, i);
      bt(t ? n.withComments : yt(n.withComments, i), i), r = wt(e) + `
`;
    }
    return [r, Ht(i, a)];
  };
}
function _r(e, t) {
  if (typeof e == "string")
    return Mt(e, t.limit, t.maxEdges, t.config);
  let i = qt.get(e);
  if (i === void 0)
    throw new TypeError("render() takes diagram text or a model that parse() returned.");
  return i;
}
function Te(e) {
  var t, i;
  return (i = (t = mt(He(e).text)) == null ? void 0 : t.type) != null ? i : null;
}
function Pr(e) {
  try {
    let t = Te(e);
    return t !== null && We.has(t);
  } catch {
    return !1;
  }
}
function $t(e, t = {}) {
  return At(() => {
    let i = Mt(e, t.limit, t.maxEdges, t.config), r = i.model;
    return Object.defineProperty(r, "mermaidType", { value: i.mermaidType, enumerable: !0 }), qt.set(r, i), r;
  });
}
function Ue(e, t = {}) {
  return At(() => {
    var k, O, w;
    let { type: i, mermaidType: r, diagram: a, model: n, config: l } = _r(e, t), s = l[(k = a.section) != null ? k : i], d = typeof s == "object" && s !== null && !Array.isArray(s) && s.useMaxWidth === !1, c = (O = t.responsive) != null ? O : !d, f = t.icons, u = f && ((Y) => f(lt(Y))), p = Ct({ type: i, mermaidType: r }, () => ir(a.math ? t.math : void 0, () => rr(u, () => a.render(n, l, { ...t, responsive: c, icons: u })))), m = (w = t.outputLimit) != null ? w : Br;
    if (p.svg.length > m)
      throw new G(`Diagram output is longer than the limit of ${m} characters.`, "limit", { type: i, mermaidType: r });
    for (let Y of p.links)
      Y.id = lt(Y.id);
    return { type: i, mermaidType: r, ...p };
  });
}
function Et(e, t, i = {}) {
  return Ir({ parse: $t, render: Ue }, e, t, i);
}
var Vr = /* @__PURE__ */ new Map([["flowchart", () => import("./LUCMYNWH-e66169d7.js").then((e) => e.flowchart)], ["pie", () => import("./OOH3NFHU-3abf5e24.js").then((e) => e.pie)], ["er", () => import("./E3YOAP7H-d866ec88.js").then((e) => e.er)], ["mindmap", () => import("./IKBYKPBU-3690d8bc.js").then((e) => e.mindmap)], ["kanban", () => import("./FEFF3ABF-fc8a5521.js").then((e) => e.kanban)], ["timeline", () => import("./UFGW6RF5-6147a55c.js").then((e) => e.timeline)], ["journey", () => import("./GZPH4LF3-ec49b39f.js").then((e) => e.journey)], ["class", () => import("./3DFH3JVF-422121db.js").then((e) => e.classDiagram)], ["quadrantChart", () => import("./CDMJA7OQ-708a0fa4.js").then((e) => e.quadrantChart)], ["xychart", () => import("./WE7EXA47-9f427725.js").then((e) => e.xychart)], ["state", () => import("./J7FQ7VDA-d0b55ab2.js").then((e) => e.state)], ["gantt", () => import("./DGIHIYXJ-2d0b420b.js").then((e) => e.gantt)], ["architecture", () => import("./LCDG4LVO-20a74fff.js").then((e) => e.architecture)], ["requirement", () => import("./5CXA2WIO-d34f63cc.js").then((e) => e.requirement)], ["sankey", () => import("./6JL5XOLI-23bc2113.js").then((e) => e.sankey)], ["packet", () => import("./RERGJ25T-9f991178.js").then((e) => e.packet)], ["radar", () => import("./EMNRHFBD-0094a70f.js").then((e) => e.radar)], ["treemap", () => import("./XPNITXKI-8db5ce7a.js").then((e) => e.treemap)], ["info", () => import("./S6FLUJIY-c609dd38.js").then((e) => e.info)], ["sequence", () => import("./PYZXGPSM-b5ea7e22.js").then((e) => e.sequence)], ["gitGraph", () => import("./ACZTSGUB-bbdec0a7.js").then((e) => e.gitGraph)], ["c4", () => import("./NOOGINLS-463b37bc.js").then((e) => e.c4)], ["block", () => import("./2Y6FVCBC-a3bc995d.js").then((e) => e.block)], ["railroad", () => import("./6UYJYLAC-7c2fd5a7.js").then((e) => e.railroad)], ["agentflow", () => import("./NT6C27D7-ef03b471.js").then((e) => e.agentflow)], ["treeView", () => import("./QPGOFIPZ-20adfec7.js").then((e) => e.treeView)], ["cynefin", () => import("./LFQDSII2-0b033936.js").then((e) => e.cynefin)], ["wardley", () => import("./7T3UPCQQ-67400113.js").then((e) => e.wardley)], ["eventmodeling", () => import("./APHGIUZY-24951c24.js").then((e) => e.eventmodeling)], ["usecase", () => import("./NIR2UTOY-c89a7cc0.js").then((e) => e.usecase)], ["venn", () => import("./JGRMMSE7-aa43877a.js").then((e) => e.venn)], ["ishikawa", () => import("./JSZ2UHMW-a949b591.js").then((e) => e.ishikawa)], ["swimlane", () => import("./AQ4F6Z3W-4288e263.js").then((e) => e.swimlane)]]), Pe = /* @__PURE__ */ new Map();
function Ke(e) {
  if (e === null)
    return Promise.resolve(!1);
  if (zt(e))
    return Promise.resolve(!0);
  let t = Pe.get(e);
  if (t === void 0) {
    let i = Vr.get(e);
    if (i === void 0)
      return Promise.resolve(!1);
    t = i().then((r) => (kt(r), !0), (r) => {
      throw Pe.delete(e), r;
    }), Pe.set(e, t);
  }
  return t;
}
async function Gr(e, t = {}) {
  let i = null;
  try {
    i = Te(e);
  } catch {
  }
  return await Ke(i), Ue(e, t);
}
async function Xr(e, t, i = {}) {
  let r = null;
  try {
    r = Te(t);
  } catch {
  }
  return await Ke(r), Et(e, t, i);
}
const oi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  PeleError: G,
  detectType: Te,
  enableZoom: $r,
  forgetTextWidths: gt,
  load: Ke,
  mount: Et,
  mountAsync: Xr,
  parse: $t,
  register: kt,
  registered: zt,
  render: Ue,
  renderAsync: Gr,
  supports: Pr
}, Symbol.toStringTag, { value: "Module" }));
export {
  nt as J,
  Ht as K,
  Kt as R,
  ti as V,
  Gt as Z,
  G as a,
  lt as b,
  li as c,
  ai as d,
  Vt as e,
  Qr as f,
  Ur as g,
  ei as i,
  oi as l,
  Kr as o,
  Pt as q,
  ri as r,
  ii as s,
  Zr as t,
  ni as u,
  tt as w,
  Jr as x
};
//# sourceMappingURL=lazy-950901f8.js.map

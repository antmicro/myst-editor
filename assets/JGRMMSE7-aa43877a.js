var gt = Object.defineProperty;
var pt = (t, r, e) => r in t ? gt(t, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[r] = e;
var I = (t, r, e) => (pt(t, typeof r != "symbol" ? r + "" : r, e), e);
import { d as ct, a as H, V as ht, i as ft, e as _, t as D, x as mt } from "./lazy-950901f8.js";
import { a as yt, e as z, L as V, x as q, V as dt, m as Ct, h as At } from "./3G3HCGVE-09704139.js";
function F(t) {
  let r = t.trim();
  return r.length >= 2 && r.startsWith('"') && r.endsWith('"') ? r.slice(1, -1) : r;
}
function W(t) {
  return t.map(F).sort();
}
var wt = class {
  constructor() {
    I(this, "type", "venn");
    I(this, "title");
    I(this, "subsets", []);
    I(this, "textNodes", []);
    I(this, "styles", []);
    I(this, "known", /* @__PURE__ */ new Set());
    I(this, "current");
    I(this, "indent", !1);
  }
  setDiagramTitle(t) {
    this.title = t;
  }
  addSubsetData(t, r, e) {
    let i = W(t);
    this.current = i, i.length === 1 && this.known.add(i[0]), this.subsets.push({ sets: i, size: e != null ? e : 10 / t.length ** 2, label: r ? F(r) : void 0 });
  }
  addTextData(t, r, e) {
    this.textNodes.push({ sets: W(t), id: F(r), label: e ? F(e) : void 0 });
  }
  addStyleData(t, r) {
    let e = /* @__PURE__ */ new Map();
    for (let [i, l] of r)
      e.set(i, l && F(l));
    this.styles.push({ targets: W(t), styles: e });
  }
  validateUnionIdentifiers(t) {
    let r = t.map(F).filter((e) => !this.known.has(e));
    if (r.length > 0)
      throw new H(`unknown set identifier: ${r.join(", ")}`, "semantic", { type: "venn" });
  }
  getCurrentSets() {
    return this.current;
  }
  getIndentMode() {
    return this.indent;
  }
  setIndentMode(t) {
    this.indent = t;
  }
}, ut = ["$end", "INVALID", "EOF", "NEWLINE", "VENN", "TITLE", "SET", "UNION", "TEXT", "INDENT_TEXT", "STYLE", "BRACKET_LABEL", "NUMERIC", "HEXCOLOR", "RGBCOLOR", "RGBACOLOR", "IDENTIFIER", "STRING", "COMMA", "COLON"], $t = [["venn-beta", 4], ["set", 6], ["union", 7], ["text", 8], ["style", 10]], Et = class {
  constructor(t, r) {
    I(this, "src");
    I(this, "host");
    I(this, "text", "");
    I(this, "start", 0);
    I(this, "at", 0);
    I(this, "lineStart", !1);
    I(this, "ended", !1);
    this.src = t, this.host = r;
  }
  word(t, r) {
    let e = this.src;
    for (let i = 0; i < r.length; i++) {
      let l = e.charCodeAt(t + i), f = r.charCodeAt(i);
      if (l !== f && (l + 32 !== f || l < 65 || l > 90))
        return !1;
    }
    return !0;
  }
  keyword(t, r) {
    return this.word(t, r) && !ft(this.src.charCodeAt(t + r.length));
  }
  color(t, r) {
    let e = this.src, i = t + 1;
    for (let l = 0; l < r; l++) {
      for (; _(e.charCodeAt(i)); )
        i++;
      let f = i;
      for (; D(e.charCodeAt(i)) || e.charCodeAt(i) === 46; )
        i++;
      if (i === f)
        return -1;
      for (; _(e.charCodeAt(i)); )
        i++;
      if (e.charCodeAt(i) !== (l === r - 1 ? 41 : 44))
        return -1;
      i++;
    }
    return i;
  }
  afterLineFeed(t) {
    let r = t - 1;
    for (; this.src.charCodeAt(r) === 32 || this.src.charCodeAt(r) === 9; )
      r--;
    return this.src.charCodeAt(r) === 10;
  }
  lineEnd(t) {
    let r = this.src.indexOf(`
`, t);
    return r === -1 ? this.src.length : r;
  }
  next() {
    let t = this.src, r = t.length;
    for (; ; ) {
      let e = this.at;
      if (this.start = e, this.text = "", e >= r)
        return this.ended ? 0 : (this.ended = !0, 2);
      let i = t.charCodeAt(e);
      if (i === 37 && t.charCodeAt(e + 1) === 37 && t.charCodeAt(e + 2) !== 123) {
        this.at = this.lineEnd(e + 2);
        continue;
      }
      if (this.lineStart && this.word(e, "title") && this.afterLineFeed(e) && t.slice(e + 5, this.lineEnd(e + 5)).trim() === "") {
        let l = this.lineEnd(e + 5);
        for (; t.charCodeAt(l) === 10 || t.charCodeAt(l) === 13; )
          l++;
        this.at = l;
        continue;
      }
      if (this.lineStart) {
        if (i === 32 || i === 9) {
          let l = e + 1;
          for (; t.charCodeAt(l) === 32 || t.charCodeAt(l) === 9; )
            l++;
          if (this.at = l, this.keyword(l, "text") && this.host.getIndentMode())
            return this.at = l + 4, this.lineStart = !1, this.text = t.slice(e, l), 9;
          continue;
        }
        i !== 10 && i !== 13 && (this.host.setIndentMode(!1), this.lineStart = !1);
      }
      if (i === 10 || i === 13) {
        for (e++; t.charCodeAt(e) === 10 || t.charCodeAt(e) === 13; )
          e++;
        return this.lineStart = !0, this.token(3, e);
      }
      if (i === 37 && t.charCodeAt(e + 1) === 37) {
        this.at = this.lineEnd(e);
        continue;
      }
      if (i === 32 || i === 9) {
        for (e++; t.charCodeAt(e) === 32 || t.charCodeAt(e) === 9; )
          e++;
        this.at = e;
        continue;
      }
      if ((i | 32) >= 97 && (i | 32) <= 122 || i === 95) {
        let l = t.charCodeAt(e + 5);
        if (this.word(e, "title") && _(l) && l !== 10 && l !== 13) {
          let f = e + 6;
          for (; f < r; ) {
            let o = t.charCodeAt(f);
            if (o === 35 || o === 10 || o === 59)
              break;
            f++;
          }
          if (f > e + 6)
            return this.token(5, f);
        }
        for (let [f, o] of $t)
          if (this.keyword(e, f) && t.charCodeAt(e + f.length) !== 45)
            return this.token(o, e + f.length);
        if (this.word(e, "rgb")) {
          let f = (t.charCodeAt(e + 3) | 32) === 97, o = e + (f ? 4 : 3), C = t.charCodeAt(o) === 40 ? this.color(o, f ? 4 : 3) : -1;
          if (C !== -1)
            return this.token(f ? 15 : 14, C);
        }
        for (e++; ft(t.charCodeAt(e)) || t.charCodeAt(e) === 45; )
          e++;
        return this.token(16, e);
      }
      if (i === 91) {
        if (t.charCodeAt(e + 1) === 34) {
          let f = t.indexOf('"', e + 2);
          return f === -1 || t.charCodeAt(f + 1) !== 93 ? 1 : (this.at = f + 2, this.text = t.slice(e + 2, f), 11);
        }
        let l = e + 1;
        for (; l < r && t.charCodeAt(l) !== 93 && t.charCodeAt(l) !== 34; )
          l++;
        return l === e + 1 || t.charCodeAt(l) !== 93 ? 1 : (this.at = l + 1, this.text = t.slice(e + 1, l).trim(), 11);
      }
      if (D(i) || i === 46 || i === 43 || i === 45) {
        (i === 43 || i === 45) && e++;
        let l = e;
        for (; D(t.charCodeAt(e)); )
          e++;
        if (e > l) {
          if (t.charCodeAt(e) === 46 && D(t.charCodeAt(e + 1)))
            for (e += 2; D(t.charCodeAt(e)); )
              e++;
        } else if (t.charCodeAt(e) === 46 && D(t.charCodeAt(e + 1)))
          for (e += 2; D(t.charCodeAt(e)); )
            e++;
        else
          return 1;
        return this.token(12, e);
      }
      if (i === 35) {
        let l = e + 1;
        for (; l < e + 9 && mt(t.charCodeAt(l)); )
          l++;
        return l >= e + 4 ? this.token(13, l) : 1;
      }
      if (i === 34) {
        let l = t.indexOf('"', e + 1);
        return l === -1 ? 1 : this.token(17, l + 1);
      }
      return i === 44 ? this.token(18, e + 1) : i === 58 ? this.token(19, e + 1) : 1;
    }
  }
  token(t, r) {
    return this.text = this.src.slice(this.at, r), this.at = r, t;
  }
}, It = "'EOF', 'NEWLINE', 'TITLE', 'SET', 'UNION', 'TEXT', 'INDENT_TEXT', 'STYLE'", bt = "'NUMERIC', 'IDENTIFIER', 'STRING', 'HEXCOLOR', 'RGBCOLOR', 'RGBACOLOR'";
function vt(t, r) {
  let e = new Et(t, r), i = -1, l = () => i === -1 ? i = e.next() : i, f = (x) => {
    throw l() === 1 ? ht("venn", t, e.start, "", !0) : ht("venn", t, e.start, `Expecting ${x}, got '${ut[i]}'`);
  }, o = () => (i = -1, e.text), C = (x) => (l() !== x && f(`'${ut[x]}'`), o()), s = () => (l() !== 16 && i !== 17 && f("'IDENTIFIER', 'STRING'"), o()), M = () => {
    let x = [s()];
    for (; l() === 18; )
      o(), x.push(s());
    return x;
  }, u = (x, d) => {
    let p = l() === 11 ? o() : void 0, n;
    if (l() === 19 && (o(), n = parseFloat(C(12))), d) {
      if (x.length < 2)
        throw new H("union requires multiple identifiers", "semantic", { type: "venn" });
      r.validateUnionIdentifiers(x);
    }
    r.addSubsetData(x, p, n), r.setIndentMode(!0);
  }, y = (x) => {
    let d = l();
    d !== 16 && d !== 17 && d !== 12 && f("'NUMERIC', 'IDENTIFIER', 'STRING'");
    let p = o(), n = d !== 12 && l() === 11 ? o() : void 0;
    r.addTextData(x(), p, n);
  }, m = () => {
    let x = M(), d = [];
    for (; ; ) {
      let p = C(16);
      C(19);
      let n;
      if (l() === 17)
        n = o();
      else {
        let h = [];
        for (; l() === 16 || i >= 12 && i <= 15; )
          h.push(o());
        h.length === 0 && f(bt), n = h.join(" ");
      }
      if (d.push([p, n]), l() !== 18)
        break;
      o();
    }
    r.addStyleData(x, d);
  };
  for (; l() === 3; )
    o();
  for (C(4); ; ) {
    let x = l();
    if (x === 2)
      return;
    if ((x < 3 || x > 10 || x === 4) && f(It), o(), x === 5)
      r.setDiagramTitle(e.text.slice(6));
    else if (x === 6)
      u([s()], !1);
    else if (x === 7)
      u(M(), !0);
    else if (x === 8) {
      let d = M();
      y(() => d);
    } else
      x === 9 ? y(() => {
        let d = r.getCurrentSets();
        if (!d)
          throw new H("text requires set", "semantic", { type: "venn" });
        return d;
      }) : x === 10 && m();
  }
}
var G = Math.PI * 2;
function Nt(t) {
  let r = /* @__PURE__ */ new Set(), e = /* @__PURE__ */ new Map();
  for (let l of t)
    r.add(JSON.stringify([...l.sets].sort())), l.sets.length === 1 && e.set(l.sets[0], l.size);
  let i = [];
  for (let l of t) {
    if (l.sets.length < 3)
      continue;
    let f = [...l.sets].sort();
    for (let o = 0; o < f.length - 1; o++)
      for (let C = o + 1; C < f.length; C++) {
        let s = [f[o], f[C]], M = JSON.stringify(s);
        if (r.has(M))
          continue;
        r.add(M);
        let u = e.get(s[0]), y = e.get(s[1]);
        i.push({ sets: s, size: u !== void 0 && y !== void 0 ? Math.min(u, y) / 4 : 2.5, label: "" });
      }
  }
  return i.length > 0 ? [...t, ...i] : t;
}
function Tt(t, r, e) {
  if (e >= t + r)
    return 0;
  let i = Math.min(t, r);
  if (e <= Math.abs(t - r))
    return Math.PI * i * i;
  let l = t * t * Math.acos((e * e + t * t - r * r) / (2 * e * t)), f = r * r * Math.acos((e * e + r * r - t * t) / (2 * e * r)), o = 0.5 * Math.sqrt(Math.max((-e + t + r) * (e + t - r) * (e - t + r) * (e + t + r), 0));
  return l + f - o;
}
function St(t, r, e) {
  let i = Math.abs(t - r), l = t + r;
  if (!(e > 0))
    return l;
  if (e >= Math.PI * Math.min(t, r) ** 2)
    return i;
  for (let f = 0; f < 48; f++) {
    let o = (i + l) / 2;
    Tt(t, r, o) > e ? i = o : l = o;
  }
  return (i + l) / 2;
}
function Mt(t, r, e, i, l, f) {
  let o = 1 / 0;
  for (let C of r) {
    let s = t[C], M = i - s.x, u = l - s.y, y = s.r - Math.sqrt(M * M + u * u);
    if (y < o) {
      if (y < f)
        return y;
      o = y;
    }
  }
  for (let C of e) {
    let s = t[C], M = i - s.x, u = l - s.y, y = Math.sqrt(M * M + u * u) - s.r;
    if (y < o) {
      if (y < f)
        return y;
      o = y;
    }
  }
  return o;
}
function J(t, r, e) {
  let i = 0, l = 0, f = t[r[0]];
  for (let d of r) {
    let p = t[d];
    i += p.x / r.length, l += p.y / r.length, p.r < f.r && (f = p);
  }
  let o = f.r, C = i, s = l, M = Mt(t, r, e, C, s, -1 / 0), u = 0, y = (d, p) => {
    let n = Mt(t, r, e, d, p, M - o * 1e-9);
    if (!(n > M - o * 1e-9))
      return !1;
    let h = Math.hypot(d - i, p - l);
    return n > M + o * 1e-9 || h < u - o * 1e-9 ? (M = n, u = h, C = d, s = p, !0) : !1;
  }, m = 10;
  for (let d = -m; d <= m; d++)
    for (let p = -m; p <= m; p++)
      p * p + d * d <= m * m && y(f.x + p * o / m, f.y + d * o / m);
  let x = o / m;
  for (let d = 0; d < 40 && x > o * 1e-6; d++) {
    let p = !1;
    for (let n = 0; n < 8; n++) {
      let h = n * G / 8;
      y(C + Math.cos(h) * x, s + Math.sin(h) * x) && (p = !0);
    }
    p || (x /= 2);
  }
  return { x: C, y: s, margin: M };
}
function Ot(t) {
  let r = /* @__PURE__ */ new Map();
  for (let n of t)
    for (let h of n.sets)
      r.has(h) || r.set(h, 10);
  for (let n of t)
    n.sets.length === 1 && r.set(n.sets[0], n.size);
  let e = /* @__PURE__ */ new Map(), i = [], l = 0;
  for (let n of r.values())
    Number.isFinite(n) && n > l && (l = n);
  l === 0 && (l = 10);
  let f = Math.sqrt(l / Math.PI);
  for (let [n, h] of r) {
    e.set(n, i.length);
    let g = Number.isFinite(h) && h > 0 ? Math.sqrt(h / Math.PI) : 0;
    i.push({ id: n, x: 0, y: 0, r: Math.max(g, f * 0.3) });
  }
  let o = i.length;
  if (o < 2)
    return i;
  let C = /* @__PURE__ */ new Map();
  for (let n of Nt(t)) {
    if (n.sets.length !== 2)
      continue;
    let h = e.get(n.sets[0]), g = e.get(n.sets[1]);
    h !== g && C.set(Math.min(h, g) * o + Math.max(h, g), n.size);
  }
  let s = /* @__PURE__ */ new Map();
  for (let [n, h] of C)
    s.set(n, St(i[Math.floor(n / o)].r, i[n % o].r, h));
  let M = f * 0.15, u = (n, h) => {
    var g;
    return (g = s.get(n * o + h)) != null ? g : i[n].r + i[h].r + M;
  };
  if (o === 2)
    return i[1].x = u(0, 1), i;
  if (o === 3) {
    let n = u(0, 1), h = u(0, 2), g = u(1, 2), w = t.some((b) => new Set(b.sets).size === 3);
    for (let b = 0; b < 40; b++) {
      let v = n > 0 ? (n * n + h * h - g * g) / (2 * n) : 0;
      if (i[1].x = n, i[2].x = Math.max(-h, Math.min(h, v)), i[2].y = Math.sqrt(Math.max(h * h - v * v, 0)), !w || J(i, [0, 1, 2], []).margin > f * 0.12)
        break;
      n *= 0.94, h *= 0.94, g *= 0.94;
    }
    return i;
  }
  let y = 0;
  for (let n of i)
    y += 2 * n.r + M;
  let m = Math.min(300, Math.floor(3e6 / (o * o)));
  if (o <= 64) {
    let n = y / G;
    i.forEach((h, g) => {
      let w = g * G / o - Math.PI / 2;
      h.x = Math.cos(w) * n, h.y = Math.sin(w) * n;
    });
  } else {
    let n = Math.ceil(Math.sqrt(o)), h = 2 * f + M;
    i.forEach((g, w) => {
      g.x = w % n * h, g.y = Math.floor(w / n) * h;
    });
  }
  let x = new Float64Array(o), d = new Float64Array(o), p = new Int32Array(o);
  for (let n = 0; n < m; n++) {
    x.fill(0), d.fill(0), p.fill(0);
    for (let h = 0; h < o; h++)
      for (let g = h + 1; g < o; g++) {
        let w = s.get(h * o + g), b = i[h].r + i[g].r + M, v = i[g].x - i[h].x, S = i[g].y - i[h].y, R = Math.hypot(v, S);
        if (w === void 0 && R >= b)
          continue;
        R < 1e-9 && (v = Math.cos(h + g), S = Math.sin(h + g), R = 1);
        let k = (R - (w != null ? w : b)) / 2 / R;
        x[h] += v * k, d[h] += S * k, x[g] -= v * k, d[g] -= S * k, p[h]++, p[g]++;
      }
    for (let h = 0; h < o; h++)
      p[h] !== 0 && (i[h].x += x[h] / p[h], i[h].y += d[h] / p[h]);
  }
  return i;
}
function Rt(t, r) {
  let e = (s) => `M${r(s.x - s.r)},${r(s.y)}A${r(s.r)},${r(s.r)} 0 1 1 ${r(s.x + s.r)},${r(s.y)}A${r(s.r)},${r(s.r)} 0 1 1 ${r(s.x - s.r)},${r(s.y)}Z`;
  if (t.length === 1)
    return e(t[0]);
  let i = (s, M, u, y) => {
    for (let m of t)
      if (m !== u && m !== y && Math.hypot(s - m.x, M - m.y) > m.r * (1 + 1e-9))
        return !1;
    return !0;
  }, l = [];
  for (let s = 0; s < t.length; s++)
    for (let M = s + 1; M < t.length; M++) {
      let u = t[s], y = t[M], m = Math.hypot(y.x - u.x, y.y - u.y);
      if (m >= u.r + y.r || m <= Math.abs(u.r - y.r) || m === 0)
        continue;
      let x = (u.r * u.r - y.r * y.r + m * m) / (2 * m), d = Math.sqrt(Math.max(u.r * u.r - x * x, 0)), p = u.x + (y.x - u.x) * x / m, n = u.y + (y.y - u.y) * x / m;
      for (let h of [1, -1]) {
        let g = p + h * d * (y.y - u.y) / m, w = n - h * d * (y.x - u.x) / m;
        i(g, w, u, y) && l.push({ x: g, y: w, a: u, b: y });
      }
    }
  if (l.length < 2) {
    let s = t[0];
    for (let M of t)
      M.r < s.r && (s = M);
    for (let M of t)
      if (M !== s && Math.hypot(M.x - s.x, M.y - s.y) + s.r > M.r * (1 + 1e-9))
        return "";
    return e(s);
  }
  let f = 0, o = 0;
  for (let s of l)
    f += s.x / l.length, o += s.y / l.length;
  l.sort((s, M) => Math.atan2(s.y - o, s.x - f) - Math.atan2(M.y - o, M.x - f));
  let C = "";
  for (let s = 0; s < l.length; s++) {
    let M = l[s], u = l[(s + 1) % l.length];
    s === 0 && (C = `M${r(M.x)},${r(M.y)}`);
    let y, m = 0, x = 1 / 0;
    for (let d of [M.a, M.b]) {
      if (d !== u.a && d !== u.b)
        continue;
      let p = Math.atan2(M.y - d.y, M.x - d.x), n = Math.atan2(u.y - d.y, u.x - d.x) - p;
      n <= 0 && (n += G);
      let h = d.x + d.r * Math.cos(p + n / 2), g = d.y + d.r * Math.sin(p + n / 2), w = Math.hypot(h - (M.x + u.x) / 2, g - (M.y + u.y) / 2);
      w < x && (x = w, y = d, m = n > Math.PI ? 1 : 0);
    }
    y === void 0 ? C += `L${r(u.x)},${r(u.y)}` : C += `A${r(y.r)},${r(y.r)} 0 ${m} 1 ${r(u.x)},${r(u.y)}`;
  }
  return C + "Z";
}
var kt = 100, Lt = 1.6, xt = yt([]);
function j(t) {
  return t.length === 1 ? t[0] : JSON.stringify(t);
}
function Dt(t, r, e) {
  var et, rt, it, lt, st, nt;
  let i = (et = e.fontSize) != null ? et : 16, l = Math.round(i * 0.875), f = Math.round(i * 0.8125), o = (rt = e.measurer) != null ? rt : ct(e.fontFamily, e.fontFamilyMono), C = (it = e.padding) != null ? it : 8, s = Ot(t.subsets), M = /* @__PURE__ */ new Map();
  s.forEach((a, c) => M.set(a.id, c));
  let u = /* @__PURE__ */ new Map();
  for (let { targets: a, styles: c } of t.styles) {
    let A = j(a), $ = u.get(A);
    $ || u.set(A, $ = /* @__PURE__ */ new Map());
    for (let [N, T] of c)
      $.set(N, T);
  }
  let y = (a) => {
    let c = u.get(a);
    if (!c)
      return xt;
    let A = [];
    for (let [$, N] of c)
      A.push(`${$}:${N}`);
    return yt(A);
  }, m = s.map(() => []);
  for (let a = 0; a < s.length; a++)
    for (let c = a + 1; c < s.length; c++)
      Math.hypot(s[a].x - s[c].x, s[a].y - s[c].y) < s[a].r + s[c].r && (m[a].push(c), m[c].push(a));
  let x = /* @__PURE__ */ new Map();
  for (let a of t.subsets)
    x.set(j(a.sets), a);
  let d = /* @__PURE__ */ new Map();
  for (let [a, c] of x) {
    let A = [...new Set(c.sets)], $ = A.map((O) => M.get(O)), N = new Set($), T = $[0];
    for (let O of $)
      s[O].r < s[T].r && (T = O);
    let E = y(a), L = (lt = c.label) != null ? lt : c.sets.length === 1 ? c.sets[0] : void 0, ot = (E.bold ? 1 : 0) | (E.italic ? 2 : 0), B = J(s, $, m[T].filter((O) => !N.has(O)));
    B.margin < s[T].r * 0.2 && (B = J(s, $, []));
    let at = { sets: A, inside: $, spot: B, lines: [], style: E };
    if (L) {
      let O = A.length === 1 ? i : l;
      at.lines.push({ id: void 0, raw: L, size: O, base: ot, label: z(L, !1, o, O, 4e3, ot) });
    }
    d.set(a, at);
  }
  for (let a of t.textNodes) {
    let c = (st = a.label) != null ? st : a.id;
    (nt = d.get(j(a.sets))) == null || nt.lines.push({ id: a.id, raw: c, size: f, base: 0, label: z(c, !1, o, f, 4e3) });
  }
  let p = 0;
  for (let a of s)
    a.r > p && (p = a.r);
  let n = p > 0 ? kt / p : 1, h = 1;
  for (let a of d.values()) {
    if (a.spot.margin <= 0)
      continue;
    let c = 0, A = 0;
    for (let N of a.lines)
      c = Math.max(c, N.label.width), A += N.label.height;
    let $ = Math.hypot(c, A) / 2 + 4;
    h = Math.max(h, Math.min($ / (a.spot.margin * n), Lt));
  }
  n *= h;
  for (let a of d.values()) {
    let c = Math.max(a.spot.margin * n * 1.8, 72);
    for (let A of a.lines)
      A.label.width > c && (A.label = z(A.raw, !1, o, A.size, c, A.base));
  }
  let g = 1 / 0, w = 1 / 0, b = -1 / 0, v = -1 / 0;
  for (let a of s)
    g = Math.min(g, (a.x - a.r) * n), w = Math.min(w, (a.y - a.r) * n), b = Math.max(b, (a.x + a.r) * n), v = Math.max(v, (a.y + a.r) * n);
  for (let a of d.values()) {
    let c = 0, A = 0;
    for (let $ of a.lines)
      c = Math.max(c, $.label.width), A += $.label.height;
    g = Math.min(g, a.spot.x * n - c / 2), b = Math.max(b, a.spot.x * n + c / 2), w = Math.min(w, a.spot.y * n - A / 2), v = Math.max(v, a.spot.y * n + A / 2);
  }
  s.length === 0 && (g = w = b = v = 0);
  let S = z(t.title && F(t.title), !1, o, i, 4e3, 1), R = S.height > 0 ? S.height + 12 : 0, k = Math.max(b - g, S.width), Y = C + (k - (b - g)) / 2 - g, Z = C + R - w, P = Math.ceil(k + 2 * C), K = Math.ceil(v - w + R + 2 * C), Q = s.map((a) => ({ id: a.id, x: a.x * n + Y, y: a.y * n + Z, r: a.r * n })), tt = "";
  Q.forEach((a, c) => {
    var N, T;
    let A = At(c), $ = (T = (N = d.get(a.id)) == null ? void 0 : N.style) != null ? T : xt;
    tt += `<circle class="pele-venn-set" data-id="${V(a.id)}" cx="${q(a.x)}" cy="${q(a.y)}" r="${q(a.r)}" fill="${A}" fill-opacity="0.2" stroke="${A}"${$.shape}/>`;
  });
  let U = "", X = "";
  for (let a of d.values()) {
    let c = V(a.sets.join("|"));
    if (a.sets.length > 1 && a.style.shape !== "") {
      let E = Rt(a.inside.map((L) => Q[L]), q);
      E !== "" && (U += `<path class="pele-venn-overlap" data-id="${c}" d="${E}" fill="none"${a.style.shape}/>`);
    }
    let A = 0;
    for (let E of a.lines)
      A += E.label.height;
    if (A === 0)
      continue;
    let $ = a.spot.x * n + Y, N = a.spot.y * n + Z - A / 2, T = "";
    for (let E of a.lines) {
      let L = E.id === void 0 ? ` class="pele-label"${E.size === i ? "" : ` font-size="${E.size}"`}${a.style.text}` : ` class="pele-venn-text" data-id="${V(E.id)}" font-size="${f}" fill="var(--_m)"${y(E.id).text}`;
      T += dt(E.label, $, N + E.label.height / 2, L), N += E.label.height;
    }
    X += `<g class="pele-venn-region" data-id="${c}">${T}</g>`;
  }
  return { svg: Ct("venn", P, K, i, e, {}, dt(S, P / 2, C + S.height / 2, ' class="pele-title" font-weight="var(--_tw)"') + `<g class="pele-venn-sets">${tt}</g>` + (U ? `<g class="pele-venn-overlaps">${U}</g>` : "") + (X ? `<g class="pele-venn-labels">${X}</g>` : "")), width: P, height: K, links: [] };
}
var Gt = { type: "venn", parse(t, r, e) {
  let i = new wt();
  return e && (i.title = e), vt(t, i), i;
}, render: Dt };
export {
  Gt as venn
};
//# sourceMappingURL=JGRMMSE7-aa43877a.js.map

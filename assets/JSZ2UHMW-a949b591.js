var de = Object.defineProperty;
var pe = (l, i, t) => i in l ? de(l, i, { enumerable: !0, configurable: !0, writable: !0, value: t }) : l[i] = t;
var H = (l, i, t) => (pe(l, typeof i != "symbol" ? i + "" : i, t), t);
import { T as fe } from "./LM4J5P2M-41ed4480.js";
import { e as ce, V as xe, d as se, i as he } from "./lazy-950901f8.js";
import { c as $e, h as ge } from "./DKTLEL5E-e2b762b2.js";
import { O as le, a as re } from "./YTAM2TF7-f178d8af.js";
import { e as W, x as s, V as N, L as J, b as me, m as ne } from "./3G3HCGVE-09704139.js";
var we = class {
  constructor() {
    H(this, "type", "ishikawa");
    H(this, "title");
    H(this, "root");
    H(this, "stack", []);
    H(this, "baseLevel");
  }
  addNode(l, i) {
    var e;
    let t = { text: i, children: [] };
    if (!this.root) {
      this.root = t, this.stack = [{ level: 0, node: t }];
      return;
    }
    (e = this.baseLevel) != null || (this.baseLevel = l);
    let n = Math.max(l - this.baseLevel + 1, 1), r = this.stack;
    for (; r.length > 1 && r[r.length - 1].level >= n; )
      r.pop();
    r[r.length - 1].node.children.push(t), r.push({ level: n, node: t });
  }
}, be = ["$end", "EOF", "SPACELINE", "NL", "ISHIKAWA", "SPACELIST", "TEXT"];
function ue(l, i) {
  let t = "ishikawa-beta", n = 0;
  for (; n < 13; ) {
    let r = l.charCodeAt(i + n), e = t.charCodeAt(n);
    if (r !== e && (r + 32 !== e || r < 65 || r > 90))
      break;
    n++;
  }
  return n === 13 && !he(l.charCodeAt(i + 13)) ? 13 : n >= 8 && !he(l.charCodeAt(i + 8)) ? 8 : 0;
}
function Me(l) {
  let i = [], t = [], n = [], r = l.length, e = 0;
  for (; e < r; ) {
    let c = e, o = -1;
    for (; c < r && ce(l.charCodeAt(c)); )
      l.charCodeAt(c) === 10 && (o = c), c++;
    let p, d;
    if (l.charCodeAt(c) === 37 && l.charCodeAt(c + 1) === 37)
      for (p = 2, d = c + 2; d < r; ) {
        let g = l.charCodeAt(d);
        if (g === 10 || g === 13 || g === 8232 || g === 8233)
          break;
        d++;
      }
    else if (c === e) {
      let g = ue(l, e);
      g > 0 ? (p = 4, d = e + g) : (p = 6, d = l.indexOf(`
`, e), d === -1 && (d = r));
    } else
      o > e ? (p = 2, d = o + 1) : o === e ? (p = 3, d = e + 1) : (p = 5, d = c);
    i.push(p), t.push(e), n.push(d), e = d;
  }
  return i.push(1, 0), t.push(r, r), n.push(r, r), { types: i, starts: t, ends: n };
}
var D = "'SPACELINE', 'NL', 'EOF'";
function ke(l, i) {
  let { types: t, starts: n, ends: r } = Me(l), e = 0, c = (o) => {
    throw xe("ishikawa", l, n[e], `Expecting ${o}, got '${be[t[e]]}'`);
  };
  if (t[e] === 2) {
    for (e++; t[e] === 2 || t[e] === 3; )
      e++;
    t[e] !== 4 && c("'SPACELINE', 'NL', 'ISHIKAWA'");
  } else
    t[e] !== 4 && c("'SPACELINE', 'ISHIKAWA'");
  for (e++, t[e] === 3 && e++; ; ) {
    let o = t[e];
    if (o === 6 || o === 5 && t[e + 1] === 6) {
      let p = o === 6 ? e : e + 1;
      e = p + 1, t[e] !== 2 && t[e] !== 3 && t[e] !== 1 && c(D), i.addNode(o === 6 ? 0 : r[p - 1] - n[p - 1], l.slice(n[p], r[p]).trim());
    } else
      o === 2 || o === 5 ? (e++, t[e] !== 2 && t[e] !== 3 && t[e] !== 1 && c(o === 5 ? `${D}, 'TEXT'` : D)) : c("'SPACELINE', 'SPACELIST', 'TEXT'");
    for (e++; t[e] === 3 || t[e] === 1; )
      e++;
    if (t[e] === 0)
      return;
  }
}
var Z = 0.5, j = Math.hypot(Z, 1), ve = 14, Ee = 6, Ae = 8, oe = 22, ye = 18, Q = 5, _e = 26, ie = 34, Ce = 28, Ie = 10, Le = 5;
function Se(l, i, t, n, r) {
  let e = W(l.text, !1, t, n, 180), c = Math.round(r * 1.5), o = [], p = [], d = [], g = (h, x, y) => {
    let v = h.length;
    for (let k = v - 1; k >= 0; k--)
      d.push({ node: h[i ? v - 1 - k : k], depth: x, parent: y, slot: k, bone: -1 });
  };
  for (g(l.children, 2, -1); d.length > 0; ) {
    let h = d.pop();
    if (h.bone !== -1) {
      p.push(h.bone);
      continue;
    }
    let x = o.length;
    o.push({ label: W(h.node.text, !1, t, r, 200), depth: h.depth, parent: h.parent, slot: h.slot, kids: h.node.children.length, rise: 0, at: 0, textEnd: 0 }), h.depth % 2 === 0 ? p.push(x) : (h.bone = x, d.push(h)), g(h.node.children, h.depth + 1, x);
  }
  let b = ve;
  for (let h of p) {
    let x = Math.max(o[h].label.height, c) + Ee;
    o[h].rise = b + x / 2, b += x;
  }
  let m = e.width + 2 * Ie, w = m / 2;
  for (let h of o) {
    let x = h.parent === -1 ? void 0 : o[h.parent];
    h.depth % 2 === 0 ? (h.at = x ? x.at : 0, h.textEnd = h.at - (h.kids > 0 ? (h.kids + 1) * oe : ye) - Q) : (h.at = x.at - (x.kids - h.slot) * oe, h.textEnd = h.at - Q), w = Math.max(w, h.label.width - h.textEnd);
  }
  return { node: l, label: e, boxW: m, boxH: e.height + 2 * Le, bones: o, rise: b + Ae, reach: w };
}
function He(l, i, t) {
  return $e(t, (n) => Ne(l, i, t, n));
}
function Ne(l, i, t, n) {
  var T, P, a;
  let r = (T = t.fontSize) != null ? T : 16, e = Math.round(r * 0.875), c = (P = t.measurer) != null ? P : se(t.fontFamily, t.fontFamilyMono), o = (a = t.padding) != null ? a : 8;
  if (n)
    return We(l, t);
  let p = l.root, d = W(l.title, !1, c, r, 4e3, 1), g = d.height > 0 ? d.height + 12 : 0, b = "", m = 0, w = 0, h = 0, x = 0;
  if (p) {
    let E = W(p.text, !1, c, r, 200, 1), u = Math.max(E.height + 24, 48), I = E.width + 24 + u / 2, _ = p.children.map((f, C) => Se(f, C % 2 === 0, c, r, e));
    for (let f of _)
      f.rise = Math.max(f.rise, u / 2 + 14);
    let R = [], V = -ie;
    for (let f = 0; f < _.length; f += 2) {
      if (f > 0) {
        let C = 0;
        for (let M = 0; M < 2; M++) {
          let S = _[f - 2 + M], A = _[f + M];
          S && (C = Math.max(C, S.reach + (A ? A.boxW / 2 : 0)));
        }
        V -= C + _e;
      }
      R.push(V, V);
    }
    let G = _.length > 0 ? V - Ce : -ie;
    w = I, m = G, h = -u / 2, x = u / 2;
    let U = "";
    _.forEach((f, C) => {
      let M = C % 2 === 0 ? -1 : 1, S = R[C], A = ($, O) => S + $ - O * Z, F = A(0, f.rise), Y = M * f.rise, ee = re - 1, q = `M${s(S - Z / j * ee)},${s(M * ee / j)}L${s(F)},${s(Y)}`, B = "";
      for (let $ of f.bones) {
        let O = M * $.rise;
        if ($.depth % 2 === 0)
          q += `M${s(A($.at, $.rise))},${s(O)}H${s(A($.textEnd + Q, $.rise))}`;
        else {
          let ae = f.bones[$.parent].rise;
          q += `M${s(A($.at, ae))},${s(M * ae)}L${s(A($.at, $.rise))},${s(O)}`;
        }
        let te = A($.textEnd, $.rise);
        B += N($.label, te - $.label.width / 2, O, $.depth > 2 ? ' fill="var(--_m)"' : ""), m = Math.min(m, te - $.label.width);
      }
      let X = Y + M * (f.boxH / 2);
      m = Math.min(m, F - f.boxW / 2), w = Math.max(w, F + f.boxW / 2), h = Math.min(h, X - f.boxH / 2), x = Math.max(x, X + f.boxH / 2), U += `<g class="pele-ishikawa-category" data-id="${J(f.node.text)}"><path class="pele-ishikawa-bones" d="${q}" fill="none" stroke="var(--_l)"/>` + le("arrow_point", S, 0, Z / j, -M / j, "var(--_l)") + `<rect x="${s(F - f.boxW / 2)}" y="${s(X - f.boxH / 2)}" width="${s(f.boxW)}" height="${s(f.boxH)}" fill="var(--_s)" stroke="var(--_b)"${me}/>` + N(f.label, F, X, ' class="pele-label"') + (B ? `<g class="pele-ishikawa-causes" font-size="${e}">${B}</g>` : "") + "</g>";
    });
    let L = u / 2;
    b = `<path class="pele-ishikawa-spine" d="M${s(G)},0H${s(-(re - 1))}" fill="none" stroke="var(--_l)"/>` + le("arrow_point", 0, 0, 1, 0, "var(--_l)") + U + `<g class="pele-ishikawa-head" data-id="${J(p.text)}"><path d="M0,${s(-L)}H${s(I - L)}A${s(L)},${s(L)} 0 0 1 ${s(I - L)},${s(L)}H0Z" fill="var(--_s)" stroke="var(--_b)" stroke-linejoin="round"/>` + N(E, 12 + E.width / 2, 0, ' class="pele-label" font-weight="var(--_hw)"') + "</g>";
  }
  let y = Math.max(w - m, d.width), v = Math.ceil(y + 2 * o), k = Math.ceil(x - h + g + 2 * o), z = o + (y - (w - m)) / 2 - m, K = o + g - h;
  return { svg: ne("ishikawa", v, k, r, t, {}, N(d, v / 2, o + d.height / 2, ' class="pele-title" font-weight="var(--_tw)"') + (b ? `<g transform="translate(${s(z)},${s(K)})">${b}</g>` : "")), width: v, height: k, links: [] };
}
function We(l, i) {
  var z, K, T, P;
  let t = (z = i.fontSize) != null ? z : 16, n = Math.round(t * 0.875), r = (K = i.measurer) != null ? K : se(i.fontFamily, i.fontFamilyMono), e = (T = i.padding) != null ? T : 8, c = Math.max(140, ((P = i.maxWidth) != null ? P : 320) - 2 * e), o = W(l.title, !1, r, t, ge(i), 1), p = [], d = l.root ? [{ node: l.root, depth: 0, parent: -1 }] : [], g = 0;
  for (; d.length; ) {
    let a = d.pop(), E = p.length;
    p.push({ ...a, x: 0, y: 0, w: 0, h: 0 }), g = Math.max(g, a.depth);
    for (let u = a.node.children.length - 1; u >= 0; u--)
      d.push({ node: a.node.children[u], depth: a.depth + 1, parent: E });
  }
  let b = Math.min(20, Math.max(2, (c - 120) / Math.max(1, g))), m = e + (o.height ? o.height + 12 : 0), w = o.width, h = "", x = "";
  for (let a of p) {
    a.x = e + a.depth * b;
    let E = Math.max(60, c - a.depth * b - 20);
    a.label = fe(W(a.node.text, !1, r, a.depth < 2 ? t : n, E, a.depth < 2 ? 1 : 0), r, E), a.w = a.label.width + 20, a.h = a.label.height + 12, a.y = m, m += a.h + 12, w = Math.max(w, a.x - e + a.w);
    let u = a.depth < 2;
    if (h += `<g class="pele-node ${a.depth === 0 ? "pele-ishikawa-head" : a.depth === 1 ? "pele-ishikawa-category" : "pele-ishikawa-cause"}" data-id="${J(a.node.text)}">` + (u ? `<rect x="${s(a.x)}" y="${s(a.y)}" width="${s(a.w)}" height="${s(a.h)}" rx="${a.depth === 0 ? 12 : 4}" fill="var(--_s)" stroke="var(--_b)"/>` : "") + N(a.label, a.x + a.w / 2, a.y + a.h / 2, ` class="pele-label"${a.depth < 2 ? ' font-weight="var(--_hw)"' : ""}${a.depth > 1 ? ` font-size="${n}"` : ""}`) + "</g>", a.parent >= 0) {
      let I = p[a.parent], _ = I.x + b / 2;
      x += `<path class="pele-edge" d="M${s(_)},${s(I.y + I.h)}V${s(a.y + a.h / 2)}H${s(a.x)}" fill="none" stroke="var(--_b)"/>`;
    }
  }
  let y = Math.ceil(w + 2 * e), v = Math.ceil(Math.max(e + o.height, m - 12) + e), k = N(o, y / 2, e + o.height / 2, ' class="pele-title" font-weight="var(--_tw)"') + x + h;
  return { svg: ne("ishikawa", y, v, t, i, {}, k), width: y, height: v, links: [] };
}
var Ve = { type: "ishikawa", parse(l, i, t) {
  let n = new we();
  return n.title = t, ke(l, n), n;
}, render: He };
export {
  Ve as ishikawa
};
//# sourceMappingURL=JSZ2UHMW-a949b591.js.map

var Lt = Object.defineProperty;
var Vt = (t, l, a) => l in t ? Lt(t, l, { enumerable: !0, configurable: !0, writable: !0, value: a }) : t[l] = a;
var D = (t, l, a) => (Vt(t, typeof l != "symbol" ? l + "" : l, a), a);
import { g as Wt, d as ht, x as Ht } from "./XLHPVVFU-26e8f3b1.js";
import { s as It, T } from "./PKICWIR7-b8631c3c.js";
import { i as Ot, e as nt, V as Pt, d as At } from "./lazy-950901f8.js";
import { c as Bt } from "./DKTLEL5E-e2b762b2.js";
import { x as r, h as pt, L as at, b as gt, V as z, m as jt } from "./3G3HCGVE-09704139.js";
function ut(t) {
  let l = /* @__PURE__ */ new Set();
  for (let a of t)
    for (let o of a.people)
      l.add(o);
  return [...l].sort();
}
var Gt = class {
  constructor() {
    D(this, "type", "journey");
    D(this, "title");
    D(this, "accTitle");
    D(this, "accDescr");
    D(this, "sections", []);
    D(this, "tasks", []);
    D(this, "currentSection", "");
  }
  setDiagramTitle(t) {
    this.title = t;
  }
  setAccTitle(t) {
    this.accTitle = t.replace(/^\s+/g, "");
  }
  setAccDescription(t) {
    this.accDescr = t.replace(/\n\s+/g, `
`);
  }
  addSection(t) {
    this.currentSection = t, this.sections.push(t);
  }
  addTask(t, l) {
    let a = l.substring(1).split(":"), o = a.length === 1 ? [] : a[1].split(",").map((n) => n.trim());
    this.tasks.push({ task: t, score: Number(a[0]), people: o, section: this.currentSection });
  }
  getActors() {
    return ut(this.tasks);
  }
}, Jt = ["$end", "EOF", "INVALID", "NEWLINE", "journey", "title", "acc_title", "acc_title_value", "acc_descr", "acc_descr_value", "acc_descr_multiline_value", "section", "taskName", "taskData", ":"];
function lt(t, l, a) {
  let o = t.length, n = l;
  for (; n < o; n++) {
    let s = t.charCodeAt(n);
    if (s === 35 || s === 10 || s === 59 || a && s === 58)
      break;
  }
  return n;
}
function Ut(t) {
  let l = t.length, a = [], o = [], n = [], s = { types: a, texts: o, starts: n }, e = 0, c = (u, i) => {
    a.push(u), o.push(t.slice(e, i)), n.push(e), e = i;
  };
  for (; e = Wt(t, e), !(e >= l); ) {
    let u = t.charCodeAt(e), i = e + 1;
    if (u === 10) {
      for (; t.charCodeAt(i) === 10; )
        i++;
      c(3, i);
      continue;
    }
    if (ht(t, e, "journey") && !Ot(t.charCodeAt(e + 7))) {
      c(4, e + 7);
      continue;
    }
    if (ht(t, e, "title")) {
      for (i = e + 5; t.charCodeAt(i) !== 10 && nt(t.charCodeAt(i)); )
        i++;
      if (i === l || t.charCodeAt(i) === 10) {
        e = i;
        continue;
      }
      let f = t.charCodeAt(e + 5);
      if (f !== 13 && nt(f) && (i = lt(t, e + 6, !1), i > e + 6)) {
        c(5, i);
        continue;
      }
    }
    if (i = Ht(t, e, s, 6), i !== e) {
      e = i;
      continue;
    }
    if (ht(t, e, "section") && nt(t.charCodeAt(e + 7)) && (i = lt(t, e + 8, !0), i > e + 8)) {
      c(11, i);
      continue;
    }
    u === 58 ? (i = lt(t, e + 1, !1), c(i > e + 1 ? 13 : 14, i > e + 1 ? i : e + 1)) : u === 59 ? c(2, e + 1) : c(12, lt(t, e + 1, !0));
  }
  return (n.length === 0 || n[n.length - 1] < l) && c(1, l), c(0, l), s;
}
var Rt = "'EOF', 'SPACE', 'NEWLINE', 'title', 'acc_title', 'acc_descr', 'acc_descr_multiline_value', 'section', 'taskName'";
function Yt(t, l) {
  let { types: a, texts: o, starts: n } = Ut(t), s = (e, c) => {
    let u = a[e] === 0 ? "1" : Jt[a[e]];
    throw Pt("journey", t, n[e], `Expecting ${c}, got '${u}'`);
  };
  a[0] !== 4 && s(0, "'journey'");
  for (let e = 1; ; e++) {
    let c = o[e];
    switch (a[e]) {
      case 3:
        break;
      case 5:
        l.setDiagramTitle(c.substring(6));
        break;
      case 6:
        l.setAccTitle(o[++e].trim());
        break;
      case 8:
        l.setAccDescription(o[++e].trim());
        break;
      case 10:
        l.setAccDescription(c.trim());
        break;
      case 11:
        l.addSection(c.substring(8));
        break;
      case 12:
        a[++e] !== 13 && s(e, "'taskData'"), l.addTask(c, o[e]);
        break;
      case 1:
        return;
      default:
        s(e, Rt);
    }
  }
}
var rt = 10, S = 8, qt = 124, Kt = 200, it = 12, vt = 6, ft = 24, dt = 26, R = 11, w = 5, Qt = 13, Xt = 20, Zt = '<circle cx="-3.6" cy="-2.8" r="1.3"/><circle cx="3.6" cy="-2.8" r="1.3"/>', te = { happy: "M-5,2A6,6 0 0 0 5,2", neutral: "M-4.5,4.5H4.5", sad: "M-5,6.5A6,6 0 0 1 5,6.5" };
function Et(t, l, a) {
  return `<g class="pele-face pele-face-${a}" transform="translate(${r(t)},${r(l)})"><circle r="${R}" fill="var(--_bg)" stroke="var(--_l)"/><g fill="var(--_l)">${Zt}</g><path d="${te[a]}" fill="none" stroke="var(--_l)" stroke-linecap="round"/></g>`;
}
function ee(t, l, a) {
  return Bt(a, (o) => ae(t, l, a, o));
}
function ae(t, l, a, o) {
  var xt, Mt, kt, yt;
  let n = (xt = a.fontSize) != null ? xt : 16, s = Math.round(n * 0.875), e = Math.round(n * 0.75), c = (Mt = a.measurer) != null ? Mt : At(a.fontFamily, a.fontFamilyMono), u = (kt = a.padding) != null ? kt : 8;
  if (o)
    return le(t, a);
  let i = t.tasks, f = i.length, F = ut(i).filter((h) => h !== ""), x = /* @__PURE__ */ new Map();
  F.forEach((h, $) => x.set(h, $));
  let k = qt, E = i.map((h) => It(h.task, c, s, k)), L = 0;
  for (let h of E)
    L = Math.max(L, h.width);
  L > k && (k = Math.min(Math.ceil(L), Kt), E = i.map((h) => T(h.task, c, s, k)));
  let H = k + 2 * rt, N = H + it, V = f > 0 ? f * N - it : 0, I = Math.round(s * 1.5), Y = Math.max(V, 240), g = [], v = 0, y = 0, b = 0;
  for (let h of F) {
    let $ = T(h, c, s, Y - 2 * w - 6), j = 2 * w + 6 + $.width;
    b > 0 && b + j > Y && (b = 0, y += 4);
    let K = b > 0 ? g[g.length - 1].y : y, Q = Math.max($.height, I);
    g.push({ name: h, label: $, x: b, y: K, h: Q }), b += j, v = Math.max(v, b), y = Math.max(y, K + Q), b += Xt;
  }
  let O = f > 0 ? ft + V : 0, A = T(t.title, c, n, Math.max(O, 320), 1), P = A.height > 0 ? A.height + 16 : 0, B = Math.max(O, A.width, f > 0 ? ft + v : 0), _ = u + (B - O) / 2 + ft, d = u + P, G = [], J = 0;
  for (let h = 0; h < f; ) {
    let $ = h + 1;
    for (; $ < f && i[$].section === i[h].section; )
      $++;
    let j;
    i[h].section !== "" && (j = T(i[h].section, c, s, ($ - h) * N - it - 2 * rt, 1), J = Math.max(J, Math.max(j.height, I) + 2 * vt)), G.push({ start: h, count: $ - h, label: j }), h = $;
  }
  let X = I;
  for (let h of E)
    X = Math.max(X, h.height);
  let Nt = F.length > 0 ? 2 * w + 6 : 0, Z = X + Nt + 2 * S, q = d + (J > 0 ? J + vt : 0), st = q + Z + R + 16, Ct = st + 4 * dt, Dt = _ + V, U = "", tt = d;
  if (f > 0) {
    let h = "", $ = "";
    for (let p = 5; p >= 1; p--) {
      let M = st + (5 - p) * dt;
      h += `M${r(_ - 6)},${r(M)}H${r(Dt)}`, $ += `<text x="${r(_ - 12)}" y="${r(M + e * 0.35)}">${p}</text>`;
    }
    U += `<path class="pele-grid" d="${h}" fill="none" stroke="var(--_a)"/><g class="pele-scale" font-size="${e}" text-anchor="end" fill="var(--_m)">${$}</g>`;
    let j = "", K = "", Q = "", bt = [];
    i.forEach((p, M) => {
      let C = _ + M * N, m = C + H / 2, W = p.score, Tt = Number.isNaN(W) ? 3 : Math.min(5, Math.max(1, W)), ct = st + (5 - Tt) * dt;
      j += `${M === 0 ? "M" : "L"}${r(m)},${r(ct)}`, K += `M${r(m)},${r(q + Z)}V${r(ct - R)}`, Q += Et(m, ct, W > 3 ? "happy" : W < 3 ? "sad" : "neutral");
      let _t = "", ot = p.people.filter((et) => et !== ""), zt = Math.min(Qt, (H - 2 * rt - 2 * w) / Math.max(ot.length - 1, 1));
      ot.forEach((et, Ft) => {
        var wt;
        _t += `<circle class="pele-actor" cx="${r(m + (Ft - (ot.length - 1) / 2) * zt)}" cy="${r(q + Z - S - w)}" r="${w}" fill="${pt((wt = x.get(et)) != null ? wt : 0)}" stroke="var(--_s)"><title>${at(et)}</title></circle>`;
      }), bt.push(`<g class="pele-node pele-task" data-id="${at(p.task.trim())}"><rect x="${r(C)}" y="${r(q)}" width="${r(H)}" height="${r(Z)}" fill="var(--_s)" stroke="var(--_b)"${gt}/>` + z(E[M], m, q + S + X / 2, ` font-size="${s}"`) + _t + "</g>");
    }), U += `<path class="pele-stems" d="${K}" fill="none" stroke="var(--_b)" stroke-dasharray="2 3"/>` + (f > 1 ? `<path class="pele-edge" d="${j}" fill="none" stroke="var(--_l)" stroke-linejoin="round"/>` : "") + Q;
    for (let p of G) {
      let M = bt.slice(p.start, p.start + p.count).join("");
      if (!p.label) {
        U += M;
        continue;
      }
      let C = _ + p.start * N, m = p.count * N - it;
      U += `<g class="pele-cluster pele-section" data-id="${at(i[p.start].section.trim())}"><rect x="${r(C)}" y="${r(d)}" width="${r(m)}" height="${r(J)}" fill="var(--_a)"${gt}/>` + z(p.label, C + m / 2, d + J / 2, ` font-size="${s}" font-weight="var(--_hw)"`) + M + "</g>";
    }
    if (tt = Ct + R, g.length > 0) {
      let p = _ + (V - v) / 2, M = tt + 16, C = "";
      for (let m of g) {
        let W = M + m.y + m.h / 2;
        C += `<g class="pele-legend-item" data-id="${at(m.name)}"><circle cx="${r(p + m.x + w)}" cy="${r(W)}" r="${w}" fill="${pt((yt = x.get(m.name)) != null ? yt : 0)}"/>` + z(m.label, p + m.x + 2 * w + 6 + m.label.width / 2, W, "") + "</g>";
      }
      U += `<g class="pele-legend" font-size="${s}">${C}</g>`, tt = M + y;
    }
  }
  let mt = Math.ceil(B + 2 * u), $t = Math.ceil(Math.max(tt, u) + u), St = z(A, u + B / 2, u + A.height / 2, ' class="pele-title" font-weight="var(--_tw)"') + U;
  return { svg: jt("journey", mt, $t, n, a, t, St), width: mt, height: $t, links: [] };
}
function le(t, l) {
  var N, V, I, Y;
  let a = (N = l.fontSize) != null ? N : 16, o = Math.round(a * 0.875), n = (V = l.measurer) != null ? V : At(l.fontFamily, l.fontFamilyMono), s = (I = l.padding) != null ? I : 8, e = Math.max(140, ((Y = l.maxWidth) != null ? Y : 320) - 2 * s), c = T(t.title, n, a, e, 1), u = ut(t.tasks).filter((g) => g !== ""), i = new Map(u.map((g, v) => [g, v])), f = s + (c.height ? c.height + 16 : 0), F, x = "", k = c.width;
  t.tasks.forEach((g, v) => {
    if (g.section !== F) {
      F = g.section;
      let d = T(F, n, a, e - 16, 1);
      d.height && (x += z(d, s + 8 + d.width / 2, f + d.height / 2, ' class="pele-cluster-label" font-weight="var(--_hw)"'), k = Math.max(k, d.width + 16), f += d.height + 8);
    }
    let y = T(g.task, n, o, e - 72), b = g.people.filter((d) => d !== "").map((d) => ({ name: d, label: T(d, n, o, e - 44) })), O = Math.max(y.height, 42), A = 2 * S + O;
    for (let d of b)
      A += Math.max(16, d.label.height) + 4;
    let P = Math.max(e, y.width + 72);
    x += `<g class="pele-node pele-journey-step" data-id="${v}"><rect x="${r(s)}" y="${r(f)}" width="${r(P)}" height="${r(A)}" fill="var(--_s)" stroke="var(--_b)"${gt}/>`, x += z(y, s + rt + y.width / 2, f + S + y.height / 2, ' class="pele-label"');
    let B = s + P - 28;
    x += Et(B, f + S + R, g.score > 3 ? "happy" : g.score < 3 ? "sad" : "neutral"), Number.isNaN(g.score) || (x += `<text class="pele-journey-score" x="${r(B)}" y="${r(f + S + 2 * R + o)}" font-size="${o}" text-anchor="middle">${r(Math.min(5, Math.max(1, g.score)))}</text>`);
    let _ = f + S + O + 4;
    for (let d of b) {
      let G = Math.max(16, d.label.height);
      x += `<circle class="pele-actor" cx="${r(s + 16)}" cy="${r(_ + G / 2)}" r="${w}" fill="${pt(i.get(d.name))}"/>` + z(d.label, s + 28 + d.label.width / 2, _ + G / 2, ` class="pele-journey-actor" font-size="${o}"`), _ += G + 4;
    }
    x += "</g>", f += A, v + 1 < t.tasks.length && (x += `<path class="pele-edge" d="M${r(s + P / 2)},${r(f)}v16" fill="none" stroke="var(--_l)"/>`), f += 16, k = Math.max(k, P);
  });
  let E = Math.ceil(k + 2 * s), L = Math.ceil(Math.max(s + c.height, f - (t.tasks.length ? 16 : 0)) + s), H = z(c, E / 2, s + c.height / 2, ' class="pele-title" font-weight="var(--_tw)"') + x;
  return { svg: jt("journey", E, L, a, l, t, H), width: E, height: L, links: [] };
}
var ne = { type: "journey", parse(t, l, a) {
  let o = new Gt();
  return o.title = a, Yt(t, o), o;
}, render: ee };
export {
  ne as journey
};
//# sourceMappingURL=GZPH4LF3-ec49b39f.js.map

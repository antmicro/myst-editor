var Be = Object.defineProperty;
var Ge = (e, o, r) => o in e ? Be(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r;
var b = (e, o, r) => (Ge(e, typeof o != "symbol" ? o + "" : o, r), r);
import { g as Pe, d as Q, h as Ue, x as Xe } from "./XLHPVVFU-26e8f3b1.js";
import { s as We, T as P } from "./PKICWIR7-b8631c3c.js";
import { d as Ye, a as et, i as Fe, e as R, V as tt } from "./lazy-950901f8.js";
import { c as it } from "./DKTLEL5E-e2b762b2.js";
import { O as He, a as U } from "./YTAM2TF7-f178d8af.js";
import { x as n, V as X, m as at, h as fe, L as qe, f as ot } from "./3G3HCGVE-09704139.js";
var rt = class {
  constructor() {
    b(this, "type", "timeline");
    b(this, "title");
    b(this, "accTitle");
    b(this, "accDescr");
    b(this, "direction", "LR");
    b(this, "sections", []);
    b(this, "periods", []);
    b(this, "currentSection", "");
  }
  getCommonDb() {
    return this;
  }
  setDiagramTitle(e) {
    this.title = e;
  }
  setAccTitle(e) {
    this.accTitle = e.replace(/^\s+/g, "");
  }
  setAccDescription(e) {
    this.accDescr = e.replace(/\n\s+/g, `
`);
  }
  setDirection(e) {
    this.direction = e;
  }
  addSection(e) {
    this.currentSection = e, this.sections.push(e);
  }
  addTask(e, o, r) {
    this.periods.push({ text: e, events: r ? [r] : [], section: this.currentSection, sectionIndex: this.sections.length - 1 });
  }
  addEvent(e) {
    let o = this.periods[this.periods.length - 1];
    if (!o)
      throw new et("An event needs a time period before it.", "semantic", { type: "timeline" });
    o.events.push(e);
  }
}, st = ["$end", "EOF", "INVALID", "NEWLINE", "timeline", "timeline_lr", "timeline_td", "title", "acc_title", "acc_title_value", "acc_descr", "acc_descr_value", "acc_descr_multiline_value", "section", "period", "event"];
function lt(e) {
  let o = e.length, r = [], f = [], p = [], v = { types: r, texts: f, starts: p }, a = 0, s = ($, i) => {
    r.push($), f.push(e.slice(a, i)), p.push(a), a = i;
  };
  for (; a = Pe(e, a), !(a >= o); ) {
    let $ = e.charCodeAt(a), i = a + 1;
    if ($ === 10) {
      for (; e.charCodeAt(i) === 10; )
        i++;
      s(3, i);
      continue;
    }
    if (Q(e, a, "timeline")) {
      for (i = a + 8; e.charCodeAt(i) === 32 || e.charCodeAt(i) === 9; )
        i++;
      let u = Q(e, i, "lr");
      if (i > a + 8 && (u || Q(e, i, "td")) && !Fe(e.charCodeAt(i + 2))) {
        s(u ? 5 : 6, i + 2);
        continue;
      }
      if (!Fe(e.charCodeAt(a + 8))) {
        s(4, a + 8);
        continue;
      }
    }
    if (Q(e, a, "title")) {
      for (i = a + 5; e.charCodeAt(i) !== 10 && R(e.charCodeAt(i)); )
        i++;
      if (i === o || e.charCodeAt(i) === 10) {
        a = i;
        continue;
      }
      let u = e.charCodeAt(a + 5);
      if (u !== 13 && R(u)) {
        s(7, Ue(e, a + 6));
        continue;
      }
    }
    if (i = Xe(e, a, v, 8), i !== a) {
      a = i;
      continue;
    }
    if (Q(e, a, "section") && R(e.charCodeAt(a + 7))) {
      for (i = a + 8; i < o && e.charCodeAt(i) !== 58 && e.charCodeAt(i) !== 10; )
        i++;
      if (i > a + 8) {
        s(13, i);
        continue;
      }
    }
    if ($ !== 58) {
      i = a + 1;
      for (let u = e.charCodeAt(i); i < o && u !== 35 && u !== 58 && u !== 10; u = e.charCodeAt(++i))
        ;
      s(14, i);
      continue;
    }
    if (R(e.charCodeAt(a + 1))) {
      for (i = a + 2; i < o; i++) {
        let u = e.charCodeAt(i);
        if (u === 10 || u === 58 && R(e.charCodeAt(i + 1)))
          break;
      }
      if (i > a + 2) {
        s(15, i);
        continue;
      }
    }
    s(2, a + 1);
  }
  return (p.length === 0 || p[p.length - 1] < o) && s(1, o), s(0, o), v;
}
var ct = "'EOF', 'SPACE', 'NEWLINE', 'title', 'acc_title', 'acc_descr', 'acc_descr_multiline_value', 'section', 'period', 'event'";
function nt(e, o) {
  let { types: r, texts: f, starts: p } = lt(e), v = (s, $) => {
    let i = r[s] === 0 ? "1" : st[r[s]];
    throw tt("timeline", e, p[s], `Expecting ${$}, got '${i}'`);
  }, a = r[0];
  a !== 4 && a !== 5 && a !== 6 && v(0, "'timeline', 'timeline_lr', 'timeline_td'"), a !== 4 && o.setDirection(a === 5 ? "LR" : "TD");
  for (let s = 1; ; s++) {
    let $ = f[s];
    switch (r[s]) {
      case 3:
        break;
      case 7:
        o.getCommonDb().setDiagramTitle($.substring(6));
        break;
      case 8:
        o.getCommonDb().setAccTitle(f[++s].trim());
        break;
      case 10:
        o.getCommonDb().setAccDescription(f[++s].trim());
        break;
      case 12:
        o.getCommonDb().setAccDescription($.trim());
        break;
      case 13:
        o.addSection($.substring(8));
        break;
      case 14:
        o.addTask($, 0, "");
        break;
      case 15:
        o.addEvent($.substring(2));
        break;
      case 1:
        return;
      default:
        v(s, ct);
    }
  }
}
var Y = 12, ze = 8, ht = 152, dt = 216, ft = 264, S = 20, F = 20, ee = 14, Z = 8, me = 8, te = 12, Je = ' fill="var(--_bg)"', Ke = ' fill="none" stroke="var(--_b)"';
function pe(e, o, r, f, p) {
  return `<rect x="${n(e)}" y="${n(o)}" width="${n(r)}" height="${n(f)}"${ot(p)}/>`;
}
function mt(e, o, r) {
  return e.direction === "TD" ? Qe(e, o, r, !0) : it(r, (f) => Qe(e, o, r, f));
}
function Qe(e, o, r, f) {
  var Te, ye, Se, Le;
  let p = (Te = r.fontSize) != null ? Te : 16, v = Math.round(p * 0.875), a = (ye = r.measurer) != null ? ye : Ye(r.fontFamily, r.fontFamilyMono), s = (Se = r.padding) != null ? Se : 8, $ = ((Le = o.timeline) == null ? void 0 : Le.disableMulticolor) !== !0, i = e.periods, u = e.sections.length > 0, w = e.sections.map((t, l) => ({ section: l, periods: [] })), ie = { section: -1, periods: [] };
  i.forEach((t, l) => {
    var h;
    return ((h = w[t.sectionIndex]) != null ? h : ie).periods.push(l);
  }), ie.periods.length > 0 && w.unshift(ie);
  let ae = f && r.maxWidth !== void 0 && r.maxWidth > 0 ? r.maxWidth - 2 * s : 1 / 0, ge = F + ee * 2 + 4 * Y, j = Math.min(ht, Math.max(80, Math.round((ae - ge) * 0.38))), ue = Math.min(ft, Math.max(110, ae - ge - j)), L = j, oe = () => f ? ue : L, H = i.map((t) => We(t.text, a, p, L)), A = i.map((t) => t.events.map((l) => We(l, a, v, oe()))), V = 0;
  for (let t of H)
    V = Math.max(V, t.width);
  if (!f)
    for (let t of A)
      for (let l of t)
        V = Math.max(V, l.width);
  let $e = V > L;
  if (f)
    for (let t of A)
      for (let l of t)
        $e || ($e = l.width > ue);
  $e && (L = Math.min(Math.max(Math.ceil(V), j), ae === 1 / 0 ? dt : j), H = i.map((t) => P(t.text, a, p, L)), A = i.map((t) => t.events.map((l) => P(l, a, v, oe()))));
  let Re = Math.round(p * 1.5), D = L + 2 * Y, re = oe() + 2 * Y, B = (t) => Math.max(t.height, Re) + 2 * ze, se = (t) => Math.max(t.height, Math.round(v * 1.5)) + 2 * ze, xe = (t, l) => t.section >= 0 ? fe(t.section) : u ? "var(--_m)" : fe($ ? l : 0), Me = !1;
  for (let t of A)
    t.length > 0 && (Me = !0);
  let le = 0;
  for (let t of w)
    le += Math.max(t.periods.length, 1);
  let q = D + S, z = i.length > 0, I = f ? D + (Me ? F + ee * 2 + re : z ? F + te : 0) : le > 0 ? le * q - S + (z ? te + U : 0) : 0, J = P(e.title, a, p, Math.max(I, 320), 1), Ze = J.height > 0 ? J.height + 16 : 0, ve = Math.max(I, J.width), E = s + (ve - I) / 2, K = s + Ze, _e = (t, l) => P(e.sections[t.section], a, p, l - 2 * Y, 1), Ae = (t, l, h, d, c, g) => pe(h, d, c, g, ` fill="${fe(t.section)}"`) + X(l, h + c / 2, d + g / 2, ' font-weight="var(--_hw)"' + Je), Ce = (t, l, h, d, c) => pe(h, d, D, c, ` fill="${l}"`) + X(H[t], h + D / 2, d + c / 2, Je), be = (t, l, h, d, c) => '<g class="pele-node pele-event">' + pe(h, d, re, c, ` fill="${l}" fill-opacity="0.16"`) + X(t, h + re / 2, d + c / 2, ` font-size="${v}"`) + "</g>", ke = (t, l, h) => `<circle class="pele-dot" cx="${n(t)}" cy="${n(l)}" r="4" fill="${h}" stroke="var(--_bg)" stroke-width="2"/>`, we = (t) => t.section >= 0 ? `<g class="pele-cluster pele-section" data-id="${qe(e.sections[t.section].trim())}">` : "", De = (t) => `<g class="pele-node pele-period" data-id="${qe(i[t].text.trim())}">`, x = "", ce;
  if (f) {
    let t = E + D + F, l = t + ee, h = l + ee, d = K;
    for (let c of w) {
      if (x += we(c), c.section >= 0) {
        let g = _e(c, I), _ = B(g);
        x += Ae(c, g, E, d, I, _), d += _ + me + 4;
      }
      for (let g of c.periods) {
        let _ = xe(c, g), k = B(H[g]), m = A[g].length > 0 ? se(A[g][0]) : k, M = d + Math.max(k, m) / 2, N = `M${n(E + D)},${n(M)}H${n(t)}`, O = "", T = M - m / 2, C = M;
        for (let G of A[g]) {
          let y = se(G);
          C = T + y / 2, N += `M${n(l)},${n(C)}H${n(h)}`, O += be(G, _, h, T, y), T += y + Z;
        }
        O && (N += `M${n(t)},${n(M)}H${n(l)}V${n(C)}`), x += De(g) + Ce(g, _, E, M - k / 2, k) + `<path class="pele-edge" d="${N}"${Ke}/>` + ke(t, M, _) + O + "</g>", d = Math.max(M + k / 2, T - Z) + S;
      }
      c.periods.length === 0 && (d += S - me - 4), c.section >= 0 && (x += "</g>");
    }
    if (w.length > 0 && (d -= S), z) {
      let c = d + te + U;
      x = `<path class="pele-axis" d="M${n(t)},${n(K)}V${n(c - U + 1)}" fill="none" stroke="var(--_l)"/>` + He("arrow_point", t, c, 0, 1, "var(--_l)") + x, d = c;
    }
    ce = d + s;
  } else {
    let t = 0, l = w.map((m) => {
      if (m.section < 0)
        return;
      let M = _e(m, Math.max(m.periods.length, 1) * q - S);
      return t = Math.max(t, B(M)), M;
    }), h = 0;
    for (let m of H)
      h = Math.max(h, B(m));
    let d = K + (u ? t + me : 0), c = d + h + (h > 0 ? F : 0), g = c + F, _ = z ? c + te : K + t, k = 0;
    if (w.forEach((m, M) => {
      let N = Math.max(m.periods.length, 1), O = E + k * q;
      x += we(m);
      let T = l[M];
      T && (x += Ae(m, T, O, K, N * q - S, t)), m.periods.forEach((C, G) => {
        let y = xe(m, C), he = O + G * q, de = he + D / 2, Ve = `M${n(de)},${n(d + h)}V${n(A[C].length > 0 ? g : c)}`, Ie = "", W = g;
        for (let Ne of A[C]) {
          let Oe = se(Ne);
          W > g && (Ve += `M${n(de)},${n(W - Z)}V${n(W)}`), Ie += be(Ne, y, he, W, Oe), W += Oe + Z;
        }
        _ = Math.max(_, W - Z), x += De(C) + Ce(C, y, he, d, h) + `<path class="pele-edge" d="${Ve}"${Ke}/>` + ke(de, c, y) + Ie + "</g>";
      }), m.section >= 0 && (x += "</g>"), k += N;
    }), z) {
      let m = E + I;
      x = `<path class="pele-axis" d="M${n(E)},${n(c)}H${n(m - U + 1)}" fill="none" stroke="var(--_l)"/>` + He("arrow_point", m, c, 1, 0, "var(--_l)") + x;
    }
    ce = _ + s;
  }
  let ne = Math.ceil(ve + 2 * s), Ee = Math.ceil(Math.max(ce, s * 2)), je = X(J, ne / 2, s + J.height / 2, ' class="pele-title" font-weight="var(--_tw)"') + x;
  return { svg: at("timeline", ne, Ee, p, r, e, je), width: ne, height: Ee, links: [] };
}
var _t = { type: "timeline", parse(e, o, r) {
  let f = new rt();
  return f.title = r, nt(e, f), f;
}, render: mt };
export {
  _t as timeline
};
//# sourceMappingURL=UFGW6RF5-6147a55c.js.map

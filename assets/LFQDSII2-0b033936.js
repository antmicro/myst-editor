var ht = Object.defineProperty;
var ft = (t, e, n) => e in t ? ht(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var be = (t, e, n) => (ft(t, typeof e != "symbol" ? e + "" : e, n), n);
import { Y as pt, M as $t, $ as mt, L as dt, V as ut, W as gt, G as yt, O as bt, P as Mt, H as wt, x as xt, D as kt, j as He, z as vt, B as _t, U as St } from "./IU7WZTP6-20f2a5ec.js";
import { O as Dt, L as Ue } from "./YTAM2TF7-f178d8af.js";
import { e as J, x as i, h as Ye, V as K, m as Lt, L as Ct, b as At } from "./3G3HCGVE-09704139.js";
import { d as Tt } from "./lazy-950901f8.js";
var Et = class {
  constructor() {
    be(this, "domains", /* @__PURE__ */ new Map());
    be(this, "transitions", []);
  }
  setDomains(t) {
    var e;
    if (t)
      for (let n of t) {
        let s = n.domain;
        this.domains.set(s, { name: s, items: ((e = n.items) != null ? e : []).map((c) => ({ label: c.label })) });
      }
  }
  setTransitions(t) {
    t && (this.transitions = t.filter((e) => e.from !== e.to).map((e) => ({ from: e.from, to: e.to, label: e.label || void 0 })));
  }
};
function Pt(t, e) {
  let n = new Et();
  return n.setDomains(t.domains), n.setTransitions(t.transitions), { type: "cynefin", title: t.title || e, accTitle: t.accTitle ? t.accTitle.replace(/^\s+/g, "") : void 0, accDescr: t.accDescr ? t.accDescr.replace(/\n\s+/g, `
`) : void 0, domains: n.domains, transitions: n.transitions };
}
var qe = [{ name: "cynefin-beta:", pattern: "cynefin-beta:" }, pt("cynefin-beta"), { name: "-->", pattern: "-->" }, { name: ":", pattern: ":" }, { name: "DOMAIN_NAME", pattern: /complex|complicated|clear|chaotic|confusion/y }, $t, mt, dt, ut, gt, yt, bt, Mt, wt];
function zt(t) {
  let e = new xt(kt(t, qe, "cynefin"), qe, "cynefin"), n = { $type: "Cynefin", domains: [], transitions: [] }, s = () => {
    for (; e.kinds[e.i] === 9; )
      e.i++;
  }, c = () => {
    e.kind !== -1 && (e.kind !== 9 && e.fail("a line break or the end of input"), s());
  };
  for (s(), e.kind !== 1 && e.kind !== 0 && e.fail("'cynefin-beta'"), e.i++; e.kind !== -1; )
    switch (e.kind) {
      case 9:
        e.i++;
        break;
      case 5:
        n.accDescr = St(e.take()), c();
        break;
      case 6:
        n.accTitle = _t(e.take()), c();
        break;
      case 7:
        n.title = vt(e.take()), c();
        break;
      case 4: {
        let f = e.take();
        if (e.accept(2)) {
          let $ = { $type: "Transition", from: f, to: e.expect(4) };
          e.accept(3) && ($.label = He(e.expect(8))), c(), n.transitions.push($);
          break;
        }
        let g = { $type: "DomainBlock", domain: f, items: [] };
        for (s(); e.kinds[e.i] === 8; )
          g.items.push({ $type: "DomainItem", label: He(e.take()) }), s();
        n.domains.push(g);
        break;
      }
      default:
        e.fail("a domain, a transition, a title, or a line break");
    }
  return n;
}
function Je(t) {
  let e = t + 1831565813 | 0;
  return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
}
function Zt(t) {
  let e = 0;
  for (let n = 0; n < t.length; n++)
    e = (e << 5) - e + t.charCodeAt(n), e |= 0;
  return e;
}
function Nt(t, e) {
  return typeof t == "number" && Number.isFinite(t) && t !== 0 ? t : Zt(e);
}
var Ot = { segments: 7, vertical: !0, pointStep: 17, controlStep: 31, controlShift: 7 }, Ke = { segments: 7, vertical: !1, pointStep: 23, controlStep: 37, controlShift: 11 };
function Me(t, e, n, s, c, f) {
  let g = (e - t) / f.segments, $ = [], y = [];
  for (let h = 0; h <= f.segments; h++) {
    let M = h === 0 && f.pinStart || h === f.segments && f.pinEnd;
    $.push(t + h * g), y.push(M ? n : n + Je(s + h * f.pointStep) * c * 2 - c);
  }
  let F = f.vertical ? [y[0], $[0]] : [$[0], y[0]];
  for (let h = 0; h < f.segments; h++) {
    let M = ($[h] + $[h + 1]) / 2, P = c * 1.5 * (h % 2 === 0 ? 1 : -1) * Je(s + h * f.controlStep + f.controlShift);
    f.vertical ? F.push(y[h] + P, M, y[h + 1] - P, M, y[h + 1], $[h + 1]) : F.push(M, y[h] + P, M, y[h + 1] - P, $[h + 1], y[h + 1]);
  }
  return F;
}
function Bt(t, e, n, s) {
  let c = n - e;
  return [t, e, t + s, e + c * 0.2, t - s * 1.5, e + c * 0.55, t + s * 0.5, e + c * 0.75, t - s, e + c * 0.85, t + s * 0.3, e + c * 0.95, t, n];
}
function X(t) {
  let e = "";
  for (let n = 2; n < t.length; n += 6)
    e += `C${i(t[n])},${i(t[n + 1])} ${i(t[n + 2])},${i(t[n + 3])} ${i(t[n + 4])},${i(t[n + 5])}`;
  return e;
}
function re(t) {
  let e = "";
  for (let n = t.length - 6; n >= 2; n -= 6)
    e += `C${i(t[n + 2])},${i(t[n + 3])} ${i(t[n])},${i(t[n + 1])} ${i(t[n - 2])},${i(t[n - 1])}`;
  return e;
}
function se(t) {
  return `M${i(t[0])},${i(t[1])}${X(t)}`;
}
function Rt(t, e, n, s) {
  let c = `${i(n)},${i(s)}`;
  return `M${i(t - n)},${i(e)}A${c} 0 1,1 ${i(t + n)},${i(e)}A${c} 0 1,1 ${i(t - n)},${i(e)}Z`;
}
var we = [["complex", 0, 0, 0], ["complicated", 1, 0, 1], ["chaotic", 0, 1, 3], ["clear", 1, 1, 2]], Ft = 4, Vt = /* @__PURE__ */ new Map([["complex", ["Complex", "Probe \u2192 Sense \u2192 Respond", "Emergent Practices"]], ["complicated", ["Complicated", "Sense \u2192 Analyse \u2192 Respond", "Good Practices"]], ["clear", ["Clear", "Sense \u2192 Categorise \u2192 Respond", "Best Practices"]], ["chaotic", ["Chaotic", "Act \u2192 Sense \u2192 Respond", "Novel Practices"]], ["confusion", ["Confusion", "", "Disorder"]]]), Xe = 3, et = 200, Wt = 10, jt = 4, ce = 6, tt = 10, nt = 20, he = 10;
function fe(t, e, n, s, c) {
  var g;
  let f = (g = t.cynefin) == null ? void 0 : g[e];
  return typeof f == "number" && f >= s && f <= c ? f : n;
}
function Gt(t, e, n) {
  var Ee, Pe, ze, Ze, Ne, Oe;
  let s = (Ee = n.fontSize) != null ? Ee : 16, c = Math.round(s * 0.8125), f = Math.round(s * 0.875), g = (Pe = n.measurer) != null ? Pe : Tt(n.fontFamily, n.fontFamilyMono), $ = (ze = n.padding) != null ? ze : 8, y = n.icons, F = ((Ze = e.cynefin) == null ? void 0 : Ze.showDomainDescriptions) !== !1, h = fe(e, "boundaryAmplitude", 8, 0, 50), M = Nt(fe(e, "seed", 0, -1e15, 1e15), (Ne = n.idPrefix) != null ? Ne : "pele"), P = Math.round(f * 1.5), xe = (a, l) => {
    let o = J(a, !1, g, f, et);
    return { text: a, label: o, w: o.width + 2 * Wt, h: Math.max(o.height, P) + 2 * jt, overflow: l };
  }, ke = (a) => {
    var Q, H;
    let l = Vt.get(a), o = J(l[0], !1, g, s, 4e3, 1), r = [];
    if (F)
      for (let p of [l[1], l[2]])
        p && r.push(J(p, !1, g, c, 4e3, 2));
    let m = (H = (Q = t.domains.get(a)) == null ? void 0 : Q.items) != null ? H : [], A = a === "confusion" && m.length > Xe ? Xe : m.length, w = [];
    for (let p = 0; p < A; p++)
      w.push(xe(m[p].label, !1));
    A < m.length && w.push(xe(`+${m.length - A} more`, !0));
    let D = o.width, T = o.height;
    for (let p of r)
      D = Math.max(D, p.width), T += p.height;
    w.length > 0 && (T += tt - ce);
    for (let p of w)
      D = Math.max(D, p.w), T += ce + p.h;
    return { name: a, title: o, subtitles: r, badges: w, w: D, h: T, cx: 0, cy: 0 };
  }, pe = we.map(([a]) => ke(a)), k = ke("confusion"), V = Math.max(88, k.w * 0.71 + 8), W = Math.max(64, k.h * 0.71 + 6), v = fe(e, "width", 640, 100, 1e4) / 2, _ = fe(e, "height", 440, 100, 1e4) / 2;
  for (let a of pe)
    v = Math.max(v, a.w + 2 * nt), _ = Math.max(_, a.h + 2 * nt);
  for (let a of pe) {
    let l = (v - a.w) / 2, o = (_ - a.h) / 2;
    if ((l / (V + he)) ** 2 + (o / (W + he)) ** 2 >= 1)
      continue;
    let r = a.w + 2 * (V + he), m = a.h + 2 * (W + he);
    r * _ <= v * m ? v = Math.max(v, r) : _ = Math.max(_, m);
  }
  let j = J(t.title, !1, g, s, 4e3, 1), ve = j.height > 0 ? j.height + 12 : 0, ee = 2 * v, _e = 2 * _, S = $, z = $ + ve, L = S + v, C = z + _, te = S + ee, $e = z + _e, G = Me(z, C, L, M, h, { ...Ot, segments: 4, pinEnd: !0 }), ne = Me(S, L, C, M + 100, h, { ...Ke, segments: 4, pinEnd: !0 }), I = Me(L, te, C, M + 200, h, { ...Ke, segments: 4, pinStart: !0 }), ae = Bt(L, C, $e, ee * 0.03), Z = (a, l) => l ? `${i(a[a.length - 2])},${i(a[a.length - 1])}` : `${i(a[0])},${i(a[1])}`, at = /* @__PURE__ */ new Map([["complex", `M${i(S)},${i(z)}L${Z(G, !1)}${X(G)}${re(ne)}Z`], ["complicated", `M${Z(G, !1)}L${i(te)},${i(z)}L${Z(I, !0)}${re(I)}${re(G)}Z`], ["chaotic", `M${Z(ne, !1)}${X(ne)}${X(ae)}L${i(S)},${i($e)}Z`], ["clear", `M${Z(I, !1)}${X(I)}L${i(te)},${i($e)}L${Z(ae, !0)}${re(ae)}Z`]]), Se = "";
  for (let [a, , , l] of we)
    Se += `<path class="pele-cynefin-region" data-id="${a}" d="${at.get(a)}" fill="${Ye(l)}" fill-opacity="0.14"/>`;
  let it = `<g class="pele-cynefin-boundaries" fill="none" stroke="var(--_b)" stroke-dasharray="6 3"><path d="${se(G)}"/><path d="${se(ne)}"/><path d="${se(I)}"/><path class="pele-cynefin-cliff" d="${se(ae)}" stroke="var(--_l)" stroke-width="2" stroke-dasharray="none" stroke-linecap="round"/></g>`, De = Rt(L, C, V, W), lt = `<path d="${De}" fill="var(--_bg)"/><path class="pele-cynefin-region" data-id="confusion" d="${De}" fill="${Ye(Ft)}" fill-opacity="0.18" stroke="var(--_b)" stroke-dasharray="4 2"/>`, Le = (a) => {
    let l = a.cy - a.h / 2, o = K(a.title, a.cx, l + a.title.height / 2, ' class="pele-label" font-weight="var(--_hw)"');
    l += a.title.height;
    for (let r of a.subtitles)
      o += K(r, a.cx, l + r.height / 2, ` class="pele-cynefin-subtitle" font-size="${c}" font-style="italic" fill="var(--_m)"`), l += r.height;
    l += tt - ce;
    for (let r of a.badges)
      l += ce, o += `<g class="pele-node${r.overflow ? " pele-cynefin-overflow" : ""}"${r.overflow ? "" : ` data-id="${Ct(r.text)}"`}><rect x="${i(a.cx - r.w / 2)}" y="${i(l)}" width="${i(r.w)}" height="${i(r.h)}" fill="var(--_bg)" stroke="var(--_b)"${r.overflow ? ' stroke-dasharray="3 2"' : ""}${At}/>` + K(r.label, a.cx, l + r.h / 2, ` class="pele-label" font-size="${f}"${r.overflow ? ' fill="var(--_m)"' : ""}`, y) + "</g>", l += r.h;
    return `<g class="pele-cynefin-domain" data-id="${a.name}">${o}</g>`;
  }, ie = /* @__PURE__ */ new Map(), me = "";
  we.forEach(([a, l, o], r) => {
    let m = pe[r];
    m.cx = S + v * (l + 0.5), m.cy = z + _ * (o + 0.5), ie.set(a, m), me += Le(m);
  }), k.cx = L, k.cy = C, ie.set("confusion", k), me += Le(k);
  let de = (a, l, o) => a === k ? ((l - L) / (V + 4)) ** 2 + ((o - C) / (W + 4)) ** 2 <= 1 : Math.abs(l - a.cx) <= a.w / 2 + 8 && Math.abs(o - a.cy) <= a.h / 2 + 8, ue = "", Ce = /* @__PURE__ */ new Map();
  for (let a of t.transitions) {
    let l = ie.get(a.from), o = ie.get(a.to);
    if (!l || !o || l === o)
      continue;
    let r = a.from < a.to ? `${a.from} ${a.to}` : `${a.to} ${a.from}`, m = (Oe = Ce.get(r)) != null ? Oe : 0;
    Ce.set(r, m + 1);
    let A = o.cx - l.cx, w = o.cy - l.cy, D = Math.hypot(A, w) || 1, T = (l.cx + o.cx) / 2, Q = (l.cy + o.cy) / 2, H = -w * (T - L) + A * (Q - C) >= 0 ? 1 : -1, p = -w / D * H, le = A / D * H, Be = (l !== k && o !== k && Math.abs(A) > 1 && Math.abs(w) > 1 ? 2 * (Math.hypot(V * p, W * le) + 16) : D * 0.15) + m * 56, Re = T + p * Be, Fe = Q + le * Be, N = (d) => {
      let u = 1 - d;
      return [u * u * l.cx + 2 * u * d * Re + d * d * o.cx, u * u * l.cy + 2 * u * d * Fe + d * d * o.cy];
    }, Ve = (d, u, E, oe) => {
      for (let R = 0; R < 16; R++) {
        let q = (u + E) / 2;
        de(d, ...N(q)) === oe ? u = q : E = q;
      }
      return (u + E) / 2;
    }, x = 48, b = 1;
    for (; b <= x && de(l, ...N(b / x)); )
      b++;
    if (b > x)
      continue;
    let O = Ve(l, (b - 1) / x, b / x, !0);
    for (; b <= x && !de(o, ...N(b / x)); )
      b++;
    let B = b > x ? 1 : Ve(o, (b - 1) / x, b / x, !1), [rt, st] = N(O), [U, Y] = N(B), We = (d, u, E) => (1 - O) * (1 - B) * d + ((1 - O) * B + O * (1 - B)) * u + O * B * E, ge = We(l.cx, Re, o.cx), ye = We(l.cy, Fe, o.cy), je = Math.hypot(U - ge, Y - ye) || 1, Ge = (U - ge) / je, Ie = (Y - ye) / je, ct = Dt("arrow_point", U, Y, Ge, Ie, "var(--_l)");
    U -= Ge * Ue("arrow_point"), Y -= Ie * Ue("arrow_point");
    let Qe = "";
    if (a.label) {
      let d = J(a.label, !1, g, c, et), [u, E] = N((O + B) / 2), oe = Math.abs(p) * d.width / 2 + Math.abs(le) * d.height / 2 + 6, R = d.width / 2 + 4, q = Math.min(Math.max(u + p * oe, S + R), Math.max(te - R, S + R));
      Qe = K(d, q, E + le * oe, ` class="pele-edge-label" font-size="${c}"`, y);
    }
    ue += `<g class="pele-edge" data-id="${a.from}-${a.to}"><path d="M${i(rt)},${i(st)}Q${i(ge)},${i(ye)} ${i(U)},${i(Y)}" fill="none" stroke="var(--_l)"/>` + ct + Qe + "</g>";
  }
  let Ae = Math.ceil(Math.max(ee, j.width) + 2 * $), Te = Math.ceil(_e + ve + 2 * $), ot = K(j, S + ee / 2, $ + j.height / 2, ' class="pele-title" font-weight="var(--_tw)"') + `<g class="pele-cynefin-regions">${Se}</g>` + it + lt + me + (ue ? `<g class="pele-edges">${ue}</g>` : "");
  return { svg: Lt("cynefin", Ae, Te, s, n, t, ot), width: Ae, height: Te, links: [] };
}
var qt = { type: "cynefin", parse: (t, e, n) => Pt(zt(t), n), render: Gt };
export {
  qt as cynefin
};
//# sourceMappingURL=LFQDSII2-0b033936.js.map

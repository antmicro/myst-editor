import { f as Le, h as Te } from "./DKTLEL5E-e2b762b2.js";
import { M as ve, Y as Ae, $ as Ce, v as De, V as Ee, W as Ne, G as Fe, O as Oe, P as ze, H as Be, x as Se, z as Pe, B as Re, U as Ue, D as _e, j as Ge } from "./IU7WZTP6-20f2a5ec.js";
import { x as o, e as q, L as K, V as W, m as He, h as me } from "./3G3HCGVE-09704139.js";
import { a as Ve, d as je } from "./lazy-950901f8.js";
var de = 32;
function fe(t) {
  return new Ve(t, "semantic", { type: "radar" });
}
function Ye(t, e) {
  let a = t.axes.map((r) => {
    var s;
    return { name: r.name, label: (s = r.label) != null ? s : r.name };
  }), i = t.curves.map((r) => {
    var h;
    let s;
    if (r.entries[0].axis === void 0)
      s = r.entries.map((d) => d.value);
    else {
      if (a.length === 0)
        throw fe("Axes must be populated before curves for reference entries");
      let d = /* @__PURE__ */ new Map();
      for (let u of r.entries)
        u.axis !== void 0 && !d.has(u.axis.$refText) && d.set(u.axis.$refText, u.value);
      s = a.map((u) => {
        let k = d.get(u.name);
        if (k === void 0)
          throw fe("Missing entry for axis " + u.label);
        return k;
      });
    }
    return { name: r.name, label: (h = r.label) != null ? h : r.name, entries: s };
  }), n = { showLegend: !0, ticks: 5, max: null, min: 0, graticule: "circle" };
  for (let r of t.options)
    r.name === "showLegend" ? n.showLegend = r.value : r.name === "graticule" ? n.graticule = r.value : n[r.name] = r.value;
  return n.ticks > de && (n.ticks = de), { type: "radar", title: t.title || e, accTitle: t.accTitle ? t.accTitle.replace(/^\s+/g, "") : void 0, accDescr: t.accDescr ? t.accDescr.replace(/\n\s+/g, `
`) : void 0, axes: a, curves: i, options: n };
}
var Q = 0, U = 0;
function xe(t, e) {
  let a = e;
  for (let i = t.charCodeAt(a); i >= 48 && i <= 57; i = t.charCodeAt(a))
    a++;
  return a;
}
function qe(t, e) {
  (e < Q || e >= U) && (Q = e, U = xe(t, e));
  let a = U;
  if (a === e)
    return -1;
  let i = t.charCodeAt(a) === 46;
  if (i) {
    let n = xe(t, a + 1), r = n - a - 1;
    if (r > 0 && t.charCodeAt(n) !== 46)
      return n;
    if (r > 1)
      return n - 1;
  }
  return t.charCodeAt(e) === 48 ? e + 1 : i ? a - 1 > e ? a - 1 : -1 : a;
}
var X = ve.pattern, Z = /[\t ]*accDescr\s*{/y, _ = -2;
function Ke(t, e) {
  return Z.lastIndex = e, Z.test(t) && (_ === -2 && (_ = t.lastIndexOf("}")), Z.lastIndex > _) ? -1 : (X.lastIndex = e, X.test(t) ? X.lastIndex : -1);
}
var ee = { name: "ID", pattern: /[\w]([-\w]*\w)?/y }, ge = /[-\w]*\w/y;
function $e(t, e) {
  return (a, i, n) => {
    if (t.lastIndex = i, !t.test(a))
      return -1;
    let r = t.lastIndex;
    return n === e ? r : (ge.lastIndex = r, ge.test(a) ? -1 : r);
  };
}
var M = (t) => ({ name: t, pattern: t, longer: [ee] }), I = (t) => ({ name: t, pattern: t }), we = [I("radar-beta:"), { ...Ae("radar-beta"), longer: [ee] }, M("showLegend"), M("graticule"), M("curve"), M("ticks"), M("axis"), M("max"), M("min"), I(":"), I(","), I("["), I("]"), I("{"), I("}"), { name: "GRATICULE", pattern: /circle|polygon/y, match: $e(/circle|polygon/y, 3) }, { name: "BOOLEAN", pattern: /true|false/y, match: $e(/true|false/y, 2) }, { ...ve, match: Ke }, Ce, De(String.raw`[-\w]*\w`), { name: "NUMBER", pattern: /(?:[0-9]+\.[0-9]+(?!\.))|(?:0|[1-9][0-9]*(?!\.))/y, match: qe }, Ee, ee, Ne, Fe, Oe, ze, Be];
function We(t) {
  return Q = U = 0, _ = -2, _e(t, we, "radar");
}
function Xe(t) {
  let e = new Se(We(t), we, "radar"), a = { $type: "Radar", axes: [], curves: [], options: [] }, i = () => {
    for (; e.kind === 23; )
      e.i++;
  }, n = () => {
    e.kind !== -1 && (e.kind !== 23 && e.fail("a line break or the end of input"), i());
  }, r = () => {
    if (!e.accept(11))
      return;
    let x = Ge(e.expect(21));
    return e.expect(12), x;
  }, s = (x) => {
    if (!x)
      return { $type: "Entry", value: Number(e.expect(20)) };
    let g = { $refText: e.expect(22) };
    return e.accept(9), { $type: "Entry", axis: g, value: Number(e.expect(20)) };
  }, h = () => {
    let x = e.expect(22), g = r(), p = { $type: "Curve", name: x, entries: [] };
    g !== void 0 && (p.label = g), e.expect(13), i(), e.kind !== 20 && e.kind !== 22 && e.fail("a number or an axis name");
    let v = e.kind === 22;
    for (p.entries.push(s(v)); e.accept(10); )
      i(), p.entries.push(s(v));
    return i(), e.expect(14), p;
  }, d = () => {
    let x = { $type: "Axis", name: e.expect(22) }, g = r();
    return g !== void 0 && (x.label = g), x;
  }, u = () => {
    let x = e.kind, g = e.take(), p;
    return x === 2 ? p = e.expect(16) === "true" : x === 3 ? p = e.expect(15) : p = Number(e.expect(20)), { $type: "Option", name: g, value: p };
  }, k = () => e.kind === 2 || e.kind === 5 || e.kind === 7 || e.kind === 8 || e.kind === 3;
  for (i(), e.accept(0) || (e.expect(1), e.accept(9)), i(); e.kind !== -1; )
    switch (e.kind) {
      case 23:
        e.i++;
        break;
      case 17:
        a.accDescr = Ue(e.take()), n();
        break;
      case 18:
        a.accTitle = Re(e.take()), n();
        break;
      case 19:
        a.title = Pe(e.take()), n();
        break;
      case 6:
        e.i++;
        do
          a.axes.push(d());
        while (e.accept(10));
        break;
      case 4:
        e.i++;
        do
          a.curves.push(h());
        while (e.accept(10));
        break;
      default:
        for (k() || e.fail("an axis, a curve, an option, a title, or a line break"), a.options.push(u()); e.accept(10); )
          k() || e.fail("an option"), a.options.push(u());
    }
  return a;
}
var A = 12, J = 26, ye = 24;
function $(t, e, a, i, n) {
  var s;
  let r = (s = t.radar) == null ? void 0 : s[e];
  return typeof r == "number" && r >= i ? Math.min(r, n) : a;
}
function Ze(t, e, a, i) {
  let n = Math.min(Math.max(t, e), a), r = i * (n - e);
  return Number.isFinite(r) ? r / (a - e) : i * ((n - e) / (a - e));
}
function Je(t, e) {
  let a = t.length, i = `M${o(t[0].x)},${o(t[0].y)}`;
  for (let n = 0; n < a; n++) {
    let r = t[(n - 1 + a) % a], s = t[n], h = t[(n + 1) % a], d = t[(n + 2) % a];
    i += ` C${o(s.x + (h.x - r.x) * e)},${o(s.y + (h.y - r.y) * e)} ${o(h.x - (d.x - s.x) * e)},${o(h.y - (d.y - s.y) * e)} ${o(h.x)},${o(h.y)}`;
  }
  return i + " Z";
}
function ke(t) {
  let e = "";
  for (let a of t)
    e += (e ? " " : "") + o(a.x) + "," + o(a.y);
  return e;
}
function Qe(t, e, a) {
  let i = $(e, "width", 320, 1, 4e3);
  return Le(a, i, 160, (n, r) => et(t, e, a, n, $(e, "height", 320, 1, 4e3) * n / i, r));
}
function et(t, e, a, i, n, r) {
  var ce, oe, he;
  let s = (ce = a.fontSize) != null ? ce : 16, h = Math.round(s * 0.875), d = (oe = a.measurer) != null ? oe : je(a.fontFamily, a.fontFamilyMono), u = (he = a.padding) != null ? he : 8, k = $(e, "axisScaleFactor", 1, 0, 10), x = $(e, "axisLabelFactor", 1.05, 0, 10), g = $(e, "curveTension", 0.17, 0, 1), p = Math.min(i, n) / 2, { axes: v, curves: z } = t, { ticks: te, graticule: ae, min: be } = t.options, re = v.length, B = v.map((l, c) => {
    let f = 2 * Math.PI * c / re - Math.PI / 2;
    return { x: Math.cos(f), y: Math.sin(f) };
  }), C = t.options.max;
  if (C === null) {
    C = -1 / 0;
    for (let l of z)
      for (let c of l.entries)
        c > C && (C = c);
  }
  let w = -i / 2 - $(e, "marginLeft", 16, 0, 2e3), y = i / 2 + $(e, "marginRight", 16, 0, 2e3), L = -n / 2 - $(e, "marginTop", 16, 0, 2e3), b = n / 2 + $(e, "marginBottom", 16, 0, 2e3), S = "";
  for (let l = 0; l < te; l++) {
    let c = Math.min(p, p * (l + 1) / te);
    ae === "circle" ? S += `<circle r="${o(c)}"/>` : S += `<polygon points="${ke(B.map((f) => ({ x: f.x * c, y: f.y * c })))}"/>`;
  }
  let G = "", H = "";
  B.forEach((l, c) => {
    let f = p * k;
    G += `M0,0L${o(l.x * f)},${o(l.y * f)}`;
    let m = q(v[c].label, !1, d, h, 4e3), F = p * x + 6, O = l.x * F + (l.x > 0.01 ? m.width / 2 : l.x < -0.01 ? -m.width / 2 : 0), T = l.y * F + (l.y > 0.01 ? m.height / 2 : l.y < -0.01 ? -m.height / 2 : 0);
    H += `<g class="pele-axis-label" data-id="${K(v[c].name)}">${W(m, O, T, "")}</g>`, w = Math.min(w, O - m.width / 2), y = Math.max(y, O + m.width / 2), L = Math.min(L, T - m.height / 2), b = Math.max(b, T + m.height / 2);
  });
  let V = "";
  z.forEach((l, c) => {
    if (l.entries.length !== re)
      return;
    let f = l.entries.map((O, T) => {
      let ue = Ze(O, be, C, p), pe = Number.isFinite(ue) ? ue : 0;
      return { x: B[T].x * pe, y: B[T].y * pe };
    }), m = me(c), F = ` class="pele-curve" data-id="${K(l.name)}" fill="${m}" stroke="${m}"`;
    V += ae === "circle" ? `<path${F} d="${Je(f, g)}"/>` : `<polygon${F} points="${ke(f)}"/>`;
  });
  let D = t.options.showLegend ? z.map((l) => q(l.label, !1, d, h, 4e3)) : [], P = 0;
  for (let l of D)
    P = Math.max(P, l.width);
  let R = D.length * J, E = r ? -(A + 8 + P) / 2 : y + ye, ne = r ? b + ye / 2 : -R / 2;
  D.length > 0 && r ? (w = Math.min(w, E), y = Math.max(y, -E), b = ne + R) : D.length > 0 && (y = E + A + 8 + P, L = Math.min(L, -R / 2), b = Math.max(b, R / 2));
  let j = "";
  D.forEach((l, c) => {
    let f = ne + c * J + J / 2, m = me(c);
    j += `<g class="pele-legend-item" data-id="${K(z[c].name)}"><rect x="${o(E)}" y="${o(f - A / 2)}" width="${A}" height="${A}" rx="2" fill="${m}" fill-opacity="0.4" stroke="${m}"/>` + W(l, E + A + 8 + l.width / 2, f, "") + "</g>";
  });
  let N = q(t.title, !1, d, s, Te(a), 1), ie = N.height > 0 ? N.height + 8 : 0, le = Math.max(y - w, N.width), Y = Math.ceil(le + 2 * u), se = Math.ceil(b - L + ie + 2 * u), Me = `translate(${o(u + (le - (y - w)) / 2 - w)},${o(u + ie - L)})`, Ie = W(N, Y / 2, u + N.height / 2, ' class="pele-title" font-weight="var(--_tw)"') + `<g transform="${Me}">` + (S ? `<g class="pele-graticule" fill="none" stroke="var(--_a)">${S}</g>` : "") + (G ? `<path class="pele-axes" d="${G}" fill="none" stroke="var(--_b)"/>` : "") + (V ? `<g class="pele-curves" fill-opacity="0.2" stroke-width="1.5" stroke-linejoin="round">${V}</g>` : "") + (H ? `<g class="pele-axis-labels" font-size="${h}">${H}</g>` : "") + (j ? `<g class="pele-legend" font-size="${h}">${j}</g>` : "") + "</g>";
  return { svg: He("radar", Y, se, s, a, t, Ie), width: Y, height: se, links: [] };
}
var it = { type: "radar", parse: (t, e, a) => Ye(Xe(t), a), render: Qe };
export {
  it as radar
};
//# sourceMappingURL=EMNRHFBD-0094a70f.js.map

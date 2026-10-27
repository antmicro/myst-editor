import { f as be, h as ke } from "./DKTLEL5E-e2b762b2.js";
import { Y as ne, M as ve, $ as ye, L as Ae, V as De, W as Pe, G as Ce, O as ze, P as Fe, H as Ie, x as Le, D as _e, j as Te, z as Ee, B as Ne, U as Se } from "./IU7WZTP6-20f2a5ec.js";
import { e as he, L as $e, h as fe, x as r, V as de, m as Ve } from "./3G3HCGVE-09704139.js";
import { a as je, d as He } from "./lazy-950901f8.js";
function Oe(i, e) {
  let t = /* @__PURE__ */ new Map();
  for (let { label: a, value: c } of i.sections) {
    if (c < 0)
      throw new je(`"${a}" has invalid value: ${c}. Negative values are not allowed in pie charts. All slice values must be >= 0.`, "semantic", { type: "pie" });
    t.has(a) || t.set(a, c);
  }
  return { type: "pie", title: i.title || e, accTitle: i.accTitle ? i.accTitle.replace(/^\s+/g, "") : void 0, accDescr: i.accDescr ? i.accDescr.replace(/\n\s+/g, `
`) : void 0, showData: i.showData, sections: t };
}
function pe(i, e) {
  let t = e;
  for (let a = i.charCodeAt(t); a >= 48 && a <= 57; a = i.charCodeAt(t))
    t++;
  return t;
}
function Re() {
  let i = 0, e = 0, t = -1;
  return (a, c) => {
    let o = a.charCodeAt(c) === 45 ? c + 1 : c;
    if ((o < i || o >= e) && (i = o, e = pe(a, o), t = -1, e > o && a.charCodeAt(e) === 46)) {
      let l = pe(a, e + 1), h = l - e - 1;
      h > 0 && a.charCodeAt(l) !== 46 ? t = l : h > 1 && (t = l - 1);
    }
    return e === o ? -1 : t >= 0 ? t : a.charCodeAt(o) === 48 ? a.charCodeAt(o + 1) === 46 ? -1 : o + 1 : a.charCodeAt(e) !== 46 ? e : e - 1 > o ? e - 1 : -1;
  };
}
var ue = [ne("showData"), ne("pie"), { name: ":", pattern: ":" }, { name: "NUMBER_PIE", pattern: /(?:-?[0-9]+\.[0-9]+(?!\.))|(?:-?(0|[1-9][0-9]*)(?!\.))/y, scanner: Re, first: "-0123456789" }, ve, ye, Ae, De, Pe, Ce, ze, Fe, Ie];
function Ue(i) {
  let e = new Le(_e(i, ue, "pie"), ue, "pie"), t = { $type: "Pie", showData: !1, sections: [] }, a = () => {
    if (e.kind !== -1)
      for (e.kind !== 8 && e.fail("a line break or the end of input"); e.kind === 8; )
        e.i++;
  };
  for (; e.kind === 8; )
    e.i++;
  for (e.expect(1), t.showData = e.accept(0); e.kind !== -1; )
    switch (e.kind) {
      case 8:
        e.i++;
        break;
      case 4:
        t.accDescr = Se(e.take()), a();
        break;
      case 5:
        t.accTitle = Ne(e.take()), a();
        break;
      case 6:
        t.title = Ee(e.take()), a();
        break;
      case 7: {
        let c = Te(e.take());
        e.expect(2);
        let o = Number(e.expect(3));
        t.sections.push({ $type: "PieSection", label: c, value: o }), a();
        break;
      }
      default:
        e.fail("a section, a title, or a line break");
    }
  return t;
}
var We = 120, I = 12, B = 26, G = 32, ge = 28;
function q(i, e) {
  var t;
  return (t = i.pie) == null ? void 0 : t[e];
}
function k(i, e) {
  return `${r(Math.sin(i) * e)},${r(-Math.cos(i) * e)}`;
}
function Ze(i, e, t, a) {
  if (e - i >= Math.PI * 2 - 1e-9) {
    let o = (l, h) => `M0,${r(-l)}A${r(l)},${r(l)} 0 1 ${h} 0,${r(l)}A${r(l)},${r(l)} 0 1 ${h} 0,${r(-l)}Z`;
    return o(t, 1) + (a > 0 ? o(a, 0) : "");
  }
  let c = e - i > Math.PI ? 1 : 0;
  return a <= 0 ? `M0,0L${k(i, t)}A${r(t)},${r(t)} 0 ${c} 1 ${k(e, t)}Z` : `M${k(i, t)}A${r(t)},${r(t)} 0 ${c} 1 ${k(e, t)}L${k(e, a)}A${r(a)},${r(a)} 0 ${c} 0 ${k(i, a)}Z`;
}
function Be(i, e, t) {
  return be(t, We * 2, 140, (a, c) => Ge(i, e, t, a / 2, c));
}
function Ge(i, e, t, a, c) {
  var ae, ie, re, le;
  let o = (ae = t.fontSize) != null ? ae : 16, l = Math.round(o * 0.875), h = (ie = t.measurer) != null ? ie : He(t.fontFamily, t.fontFamilyMono), g = (re = t.padding) != null ? re : 8, L = q(e, "textPosition"), J = typeof L == "number" && L >= 0 && L <= 1 ? L : 0.75, _ = q(e, "donutHole"), me = typeof _ == "number" && _ > 0 && _ <= 0.9 ? _ * a : 0, V = String((le = q(e, "legendPosition")) != null ? le : "right"), f = c && (V === "left" || V === "right") ? "bottom" : V, v = [...i.sections], j = 0;
  for (let [, s] of v)
    j += s;
  let T = v.map(([s, n]) => he(i.showData ? `${s} [${n}]` : s, !1, h, l, 4e3)), $ = 0;
  for (let s of T)
    $ = Math.max($, s.width);
  $ += T.length > 0 ? I + 8 : 0;
  let m = T.length * B, y = he(i.title, !1, h, o, ke(t), 1), Q = y.height > 0 ? y.height + 16 : 0, X = v.map(([, s]) => {
    let n = j > 0 ? s / j : 0;
    return n * 100 >= 1 && (n * 100).toFixed(0) !== "0" ? n : 0;
  }), Y = X.map((s) => s === 0 || s >= 0.5 ? !1 : 2 * a * J * Math.sin(s * Math.PI) < h.width((s * 100).toFixed(0) + "%", l, 0) + 6), Me = Y.includes(!0) ? ge : 0, M = f === "left" || f === "right" || f === "center" ? f : "", K = f === "top" || f === "bottom", d = (a + Me) * 2, p = d, x = d;
  M === "left" || M === "right" ? (p += $ > 0 ? G + $ : 0, x = Math.max(x, m)) : K && (p = Math.max(p, $), x += m > 0 ? 20 + m : 0), p = Math.max(p, y.width);
  let A = g + (M === "left" ? $ + G + d / 2 : M === "right" ? d / 2 : p / 2), D = g + Q, E = D + (f === "top" ? m + 20 + d / 2 : K ? d / 2 : x / 2), N = "", H = "", O = "", S = 0, P = a + ge / 2, ee = [], xe = (s, n, u) => ee.every((w) => Math.abs(s - w.x) >= (u + w.width) / 2 + 2 || Math.abs(n - w.y) >= l + 2);
  v.forEach(([s], n) => {
    let u = X[n];
    if (u === 0)
      return;
    let w = S + u * Math.PI * 2;
    N += `<path class="pele-slice" data-id="${$e(s)}" d="${Ze(S, w, a, me)}" fill="${fe(n)}"/>`;
    let W = (S + w) / 2, Z = (u * 100).toFixed(0) + "%";
    if (Y[n]) {
      let z = h.width(Z, l, 0), F = W;
      for (let ce = 0; ce < 360 && !xe(Math.sin(F) * P, -Math.cos(F) * P, z); ce++)
        F += 2 / P;
      let se = Math.sin(F) * P, oe = -Math.cos(F) * P;
      ee.push({ x: se, y: oe, width: z }), O += `<text x="${r(se)}" y="${r(oe + l * 0.35)}">${Z}</text>`;
    } else {
      let z = a * J;
      H += `<text x="${r(Math.sin(W) * z)}" y="${r(-Math.cos(W) * z + l * 0.35)}">${Z}</text>`;
    }
    S = w;
  }), N === "" && (N = `<circle class="pele-slice" r="${a}" fill="none" stroke="var(--_b)"/>`);
  let R = "", b, C;
  M === "right" ? (b = A + d / 2 + G, C = D + (x - m) / 2) : M === "left" ? (b = g, C = D + (x - m) / 2) : M === "center" ? (b = A - $ / 2, C = E - m / 2) : (b = g + (p - $) / 2, C = f === "top" ? D : D + d + 20), T.forEach((s, n) => {
    let u = C + n * B + B / 2;
    R += `<g class="pele-legend-item" data-id="${$e(v[n][0])}"><rect x="${r(b)}" y="${r(u - I / 2)}" width="${I}" height="${I}" rx="2" fill="${fe(n)}"/>` + de(s, b + I + 8 + s.width / 2, u, "") + "</g>";
  });
  let U = Math.ceil(p + 2 * g), te = Math.ceil(x + Q + 2 * g), we = de(y, U / 2, g + y.height / 2, ' class="pele-title" font-weight="var(--_tw)"') + `<g class="pele-slices" transform="translate(${r(A)},${r(E)})" stroke="var(--_bg)" stroke-width="1" stroke-linejoin="round">${N}</g>` + (H ? `<g class="pele-slice-labels" transform="translate(${r(A)},${r(E)})" font-size="${l}" text-anchor="middle" fill="var(--_bg)">${H}</g>` : "") + (O ? `<g class="pele-slice-labels" transform="translate(${r(A)},${r(E)})" font-size="${l}" text-anchor="middle">${O}</g>` : "") + (R ? `<g class="pele-legend" font-size="${l}">${R}</g>` : "");
  return { svg: Ve("pie", U, te, o, t, i, we), width: U, height: te, links: [] };
}
var Ye = { type: "pie", parse: (i, e, t) => Oe(Ue(i), t), render: Be };
export {
  Ye as pie
};
//# sourceMappingURL=OOH3NFHU-3abf5e24.js.map

import { s as ct } from "./5THPTBWS-363b7521.js";
import { A as ht } from "./LM4J5P2M-41ed4480.js";
import { c as dt, h as ft } from "./DKTLEL5E-e2b762b2.js";
import { Y as pt, O as tt, M as bt, $ as mt, L as kt, V as $t, W as gt, G as ut, P as xt, H as Mt, x as wt, D as vt, j as yt, z as Pt, B as zt, U as Rt } from "./IU7WZTP6-20f2a5ec.js";
import { e as Tt, x as $, b as Dt, V as et, S as Bt, m as Nt } from "./3G3HCGVE-09704139.js";
import { a as Wt, d as _t, b as at } from "./lazy-950901f8.js";
var Et = 1e4;
function T(e, t, a, l, s) {
  var f;
  let m = (f = e.packet) == null ? void 0 : f[t];
  return typeof m == "number" && m >= l ? Math.min(m, s) : a;
}
function F(e) {
  return new Wt(e, "semantic", { type: "packet" });
}
function Ft(e, t, a) {
  let l = Math.floor(T(t, "bitsPerRow", 32, 1, 4096)), s = [], m = -1, f = [], y = 1;
  for (let g of e.blocks) {
    let { start: i, end: h, bits: o } = g;
    if (i !== void 0 && h !== void 0 && h < i)
      throw F(`Packet block ${i} - ${h} is invalid. End must be greater than start.`);
    if (i != null || (i = m + 1), i !== m + 1)
      throw F(`Packet block ${i} - ${h != null ? h : i} is not contiguous. It should start from ${m + 1}.`);
    if (o === 0)
      throw F(`Packet block ${i} is invalid. Cannot have a zero bit field.`);
    for (h != null || (h = i + (o != null ? o : 1) - 1), o != null || (o = h - i + 1), m = h; f.length <= l + 1 && s.length < Et; ) {
      let w = y * l - 1;
      if (h <= w) {
        f.push({ start: i, end: h, bits: o, label: g.label }), h === w && (s.push(f), f = [], y++);
        break;
      }
      f.push({ start: i, end: w, bits: w - i, label: g.label }), s.push(f), f = [], y++, i = w + 1, o = h - i;
    }
  }
  return f.length > 0 && s.push(f), { type: "packet", title: e.title || a, accTitle: e.accTitle ? e.accTitle.replace(/^\s+/g, "") : void 0, accDescr: e.accDescr ? e.accDescr.replace(/\n\s+/g, `
`) : void 0, bitsPerRow: l, rows: s };
}
var rt = [{ name: "packet-beta", pattern: "packet-beta" }, pt("packet"), { name: "-", pattern: "-", longer: [tt] }, { name: "+", pattern: "+" }, { name: ":", pattern: ":" }, bt, mt, kt, { name: "INT", pattern: /0|[1-9][0-9]*(?!\.)/y }, $t, gt, ut, tt, xt, Mt];
function Vt(e) {
  let t = new wt(vt(e, rt, "packet"), rt, "packet"), a = { $type: "Packet", blocks: [] }, l = () => {
    if (t.kind !== -1)
      for (t.kind !== 10 && t.fail("a line break or the end of input"); t.kind === 10; )
        t.i++;
  };
  for (; t.kind === 10; )
    t.i++;
  for (t.accept(0) || t.expect(1); t.kind !== -1; )
    switch (t.kind) {
      case 10:
        t.i++;
        break;
      case 5:
        a.accDescr = Rt(t.take()), l();
        break;
      case 6:
        a.accTitle = zt(t.take()), l();
        break;
      case 7:
        a.title = Pt(t.take()), l();
        break;
      case 8:
      case 3: {
        let s = { $type: "PacketBlock", label: "" };
        t.accept(3) ? s.bits = Number(t.expect(8)) : (s.start = Number(t.take()), t.accept(2) && (s.end = Number(t.expect(8)))), t.expect(4), s.label = yt(t.expect(9)), a.blocks.push(s), l();
        break;
      }
      default:
        t.fail("a field, a title, or a line break");
    }
  return a;
}
function Ct(e, t, a) {
  return dt(a, (l) => Ht(e, t, a, l));
}
function Ht(e, t, a, l) {
  var L, O, S, U, X, q, J, K, Q;
  let s = (L = a.fontSize) != null ? L : 16, m = Math.round(s * 0.875), f = Math.round(s * 0.625), y = (O = a.measurer) != null ? O : _t(a.fontFamily, a.fontFamilyMono), g = (S = a.padding) != null ? S : 8, i = (U = t.packet) != null ? U : {}, h = T(t, "rowHeight", 32, 1, 400), o = T(t, "bitWidth", 32, 1, 400), w = T(t, "paddingX", 5, 0, 400), V = T(t, "paddingY", 5, 0, 400), C = i.showBits !== !1, B = i.bitOrder === "descending", u = e.bitsPerRow, v = e.rows;
  if (l) {
    let k = Math.max(1, Math.floor((((X = a.maxWidth) != null ? X : 320) - 2 * g) / Math.min(o, 18)));
    u = Math.min(u, Math.max(8, 2 ** Math.floor(Math.log2(k))));
    let r = e.rows[e.rows.length - 1], n = (J = (q = r == null ? void 0 : r[r.length - 1]) == null ? void 0 : q.end) != null ? J : 0;
    Math.ceil((n + 1) / u) > 1e4 && (u = e.bitsPerRow), o = Math.min(o, Math.max(18, (((K = a.maxWidth) != null ? K : 320) - 2 * g) / u));
    let x = (b) => b.bits === b.end - b.start, d = [];
    for (let b of e.rows)
      for (let p of b) {
        let c = d[d.length - 1];
        c && x(c) && x(p) && c.label === p.label && p.start === c.end + 1 && p.start % e.bitsPerRow === 0 ? (c.end = p.end, c.bits = c.end - c.start) : d.push({ ...p });
      }
    v = [];
    for (let b of d)
      for (let p = b.start; p <= b.end; ) {
        let c = Math.min(b.end, (Math.floor(p / u) + 1) * u - 1), M = Math.floor(p / u);
        ((Q = v[M]) != null ? Q : v[M] = []).push({ ...b, start: p, end: c }), p = c + 1;
      }
  }
  let N = /* @__PURE__ */ new Map();
  if (l)
    for (let k of v)
      for (let r of k) {
        let n = Math.max(1, (r.end - r.start + 1) * o - Math.min(w, o - 1) - 6), x = ht(at(r.label).trim(), y, m, n);
        N.set(r, x);
      }
  let H = C ? f + 4 : 0, Y = v.map((k) => {
    let r = h;
    if (l)
      for (let n of k)
        r = Math.max(r, N.get(n).height + 10);
    return r;
  }), j = [], R = 0;
  for (let k of Y)
    j.push(R), R += H + k + V;
  v.length && (R -= V);
  let A = Math.min(w, o - 1), G = v.length > 0 ? u * o - A : 0, P = Tt(e.title, !1, y, s, l ? ft(a) : 4e3, 1), it = P.height > 0 ? P.height + (R > 0 ? 12 : 0) : 0, I = /* @__PURE__ */ new Map(), lt = (k, r) => {
    let n = I.get(k);
    return n || I.set(k, n = /* @__PURE__ */ new Map()), n.has(r) || n.set(r, ct(at(k).trim(), r, m, Math.round(s * 0.5), y)), n.get(r);
  }, st = g + Math.max(0, (P.width - G) / 2), W = "", D = "";
  v.forEach((k, r) => {
    let n = g + j[r] + H, x = Y[r];
    for (let d of k) {
      let b = d.end - d.start + 1, p = d.start % u, c = st + (B ? u - p - b : p) * o, M = b * o - A, z = l ? void 0 : lt(d.label, M - 6);
      if (W += `<g class="pele-node" data-id="${d.start}-${d.end}"><rect x="${$(c)}" y="${$(n)}" width="${$(M)}" height="${$(x)}" fill="var(--_s)" stroke="var(--_b)"${Dt}/>` + (l ? et(N.get(d), c + M / 2, n + x / 2, "") : z && z.size <= x ? `<text x="${$(c + M / 2)}" y="${$(n + x / 2 + z.size * 0.35)}"${z.size === m ? "" : ` font-size="${$(z.size)}"`}>${Bt(z.text)}</text>` : "") + "</g>", !C)
        continue;
      let Z = B ? d.end : d.start, nt = B ? d.start : d.end;
      b === 1 ? D += `<text x="${$(c + M / 2)}" y="${$(n - 4)}" text-anchor="middle">${Z}</text>` : D += `<text x="${$(c)}" y="${$(n - 4)}">${Z}</text><text x="${$(c + M)}" y="${$(n - 4)}" text-anchor="end">${nt}</text>`;
    }
  });
  let _ = Math.ceil(Math.max(G, P.width) + 2 * g), E = Math.ceil(R + it + 2 * g), ot = (W ? `<g class="pele-packet-fields" font-size="${m}" text-anchor="middle">${W}</g>` : "") + (D ? `<g class="pele-packet-bits" font-size="${f}" fill="var(--_m)">${D}</g>` : "") + et(P, _ / 2, E - g - P.height / 2, ' class="pele-title" font-weight="var(--_tw)"');
  return { svg: Nt("packet", _, E, s, a, e, ot), width: _, height: E, links: [] };
}
var Ot = { type: "packet", parse: (e, t, a) => Ft(Vt(e), t, a), render: Ct };
export {
  Ot as packet
};
//# sourceMappingURL=RERGJ25T-9f991178.js.map

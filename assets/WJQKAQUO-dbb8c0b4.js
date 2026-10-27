import { V as g, x as c } from "./3G3HCGVE-09704139.js";
function m(t, r) {
  for (let n = 0; n < r.length; n += 3) {
    let e = Math.round(r[n + 1]), i = t.get(e);
    i ? i.push(r[n]) : t.set(e, [r[n]]);
  }
}
function w(t, r, n, e) {
  if (r === 0)
    return t.x;
  let i = t.y - t.h / 2, o = t.x - t.w / 2, l = r / 2, f = [o + e - 6 + l, t.x, o + t.w - e + 6 - l], u = n.get(Math.round(i));
  if (u === void 0)
    return f[0];
  let h = f[0], a = -1;
  for (let d of f) {
    let s = 1 / 0;
    for (let x of u)
      x > o && x < o + t.w && (s = Math.min(s, Math.abs(x - d) - l));
    if (s >= 6)
      return d;
    s > a + 0.5 && (a = s, h = d);
  }
  return h;
}
function M(t, r, n, e) {
  let i = r > 0 ? e.get(Math.round(t.y - t.h / 2)) : void 0;
  if (i === void 0)
    return !1;
  let o = t.x - t.w / 2;
  for (let l of i)
    if (l > o && l < o + t.w && Math.abs(l - n) < r / 2 + 4)
      return !0;
  return !1;
}
function b(t, r, n, e, i, o, l, f) {
  let u = 1;
  for (let a = o[l].parent; a >= 0 && u < 8; a = o[a].parent)
    u++;
  let h = `color-mix(in srgb,var(--_a) ${c(100 * (1 - 0.5 ** u))}%,var(--_bg))`;
  return `<g class="pele-cluster-title" data-id="${i}">` + g(t, r, n, ` fill="none" stroke="${h}" stroke-width="5" stroke-linejoin="round"`, f) + g(t, r, n, e, f) + "</g>";
}
export {
  b as C,
  w as h,
  m as x,
  M as y
};
//# sourceMappingURL=WJQKAQUO-dbb8c0b4.js.map

import { V as f, x as s, e as l } from "./3G3HCGVE-09704139.js";
import { c as m } from "./lazy-950901f8.js";
function u(h, i, r, e) {
  return m(() => l(h, !1, i, r, e, 1));
}
function p(h, i, r, e, n, o, g) {
  let t = u(h, i, r, 4e3);
  if (t.height === 0)
    return { width: n, height: o, content: g };
  let c = t.height + 12, a = Math.max(n, Math.ceil(t.width + 2 * e));
  return { width: a, height: Math.ceil(o + c), content: f(t, a / 2, e + t.height / 2, ' class="pele-title" font-weight="var(--_tw)"') + `<g transform="translate(${s((a - n) / 2)},${s(c)})">${g}</g>` };
}
export {
  u as g,
  p as x
};
//# sourceMappingURL=ECH2OJJK-8814648a.js.map

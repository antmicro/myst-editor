import { Y as k, M as w, $ as y, L as D, W as M, G as x, O as z, P as T, H as $, x as _, D as b, U as F, B as I, z as L } from "./IU7WZTP6-20f2a5ec.js";
import { e as m, V as g, m as P } from "./3G3HCGVE-09704139.js";
import { d as S } from "./lazy-950901f8.js";
function V(t, e) {
  return { type: "info", title: t.title || e, accTitle: t.accTitle ? t.accTitle.replace(/^\s+/g, "") : void 0, accDescr: t.accDescr ? t.accDescr.replace(/\n\s+/g, `
`) : void 0 };
}
var v = [k("showInfo"), k("info"), w, y, D, M, x, z, T, $];
function A(t) {
  let e = new _(b(t, v, "info"), v, "info"), i = { $type: "Info" };
  for (; e.kind === 5; )
    e.i++;
  for (e.expect(1); e.kind === 5; )
    e.i++;
  if (e.accept(0))
    for (; e.kind === 5; )
      e.i++;
  for (; e.kind !== -1; ) {
    let n = e.kind;
    if (n === 2 ? i.accDescr = F(e.take()) : n === 3 ? i.accTitle = I(e.take()) : n === 4 ? i.title = L(e.take()) : e.fail("a title or the end of input"), e.kind === -1)
      break;
    for (e.kind !== 5 && e.fail("a line break or the end of input"); e.kind === 5; )
      e.i++;
  }
  return i;
}
var B = "1.10.1";
function C(t, e, i) {
  var h, d, p;
  let n = (h = i.fontSize) != null ? h : 16, f = (d = i.measurer) != null ? d : S(i.fontFamily, i.fontFamilyMono), r = (p = i.padding) != null ? p : 8, a = m(t.title, !1, f, n, 4e3, 1), l = a.height > 0 ? a.height + 8 : 0, o = m(`Pele v${B}`, !1, f, n, 4e3), c = Math.ceil(Math.max(a.width, o.width) + 2 * r), s = Math.ceil(l + o.height + 2 * r), u = g(a, c / 2, r + a.height / 2, ' class="pele-title" font-weight="var(--_tw)"') + g(o, c / 2, r + l + o.height / 2, ' class="pele-version" fill="var(--_m)"');
  return { svg: P("info", c, s, n, i, t, u), width: c, height: s, links: [] };
}
var Q = { type: "info", parse: (t, e, i) => V(A(t), i), render: C };
export {
  Q as info
};
//# sourceMappingURL=S6FLUJIY-c609dd38.js.map

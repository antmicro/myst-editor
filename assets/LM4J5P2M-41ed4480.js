import { d as M, c as j, $ as z, V as H, j as b, S as v, x as $ } from "./3G3HCGVE-09704139.js";
var x = /\s/;
function E(e, c, f, u, d = 0) {
  let o = [];
  for (let n of e.split(`
`)) {
    let i = Array.from(n);
    i.length === 0 && o.push("");
    let t = 0;
    for (; t < i.length; ) {
      let g = (w) => c.width(i.slice(t, t + w).join(""), f, d) <= u, l = 1;
      for (; l < i.length - t && g(l); )
        l = Math.min(i.length - t, l * 2);
      let p = 1;
      for (; p < l; ) {
        let w = Math.ceil((p + l) / 2);
        g(w) ? p = w : l = w - 1;
      }
      let r = p, m = t + r < i.length;
      if (m && !x.test(i[t + r])) {
        for (let w = r - 1; w > 0; w--)
          if (x.test(i[t + w])) {
            r = w + 1;
            break;
          }
      }
      let y = i.slice(t, t + r).join("");
      for (o.push(m && y.trimEnd() || y), t += r; m && t < i.length && x.test(i[t]); )
        t++;
    }
  }
  e === "" && (o.length = 0);
  let a = o.map((n) => c.width(n, f, d)), h = 0;
  for (let n of a)
    h = Math.max(h, n);
  let s = Math.round(f * 1.5);
  return { lines: o.map((n, i) => [{ text: n, style: d, width: a[i] }]), widths: a, width: h, height: o.length * s, size: f, lineHeight: s };
}
function V(e, c, f) {
  if (e.width <= f)
    return e;
  let u = [], d = [];
  for (let h = 0; h < e.lines.length; h++) {
    if (e.widths[h] <= f) {
      u.push(e.lines[h]), d.push(e.widths[h]);
      continue;
    }
    let s = [], n = 0, i = () => {
      u.push(s), d.push(n), s = [], n = 0;
    };
    for (let t of e.lines[h]) {
      if (t.icon !== void 0 || t.math) {
        s.length && n + t.width > f && i(), s.push(t), n += t.width;
        continue;
      }
      for (let g of Array.from(t.text)) {
        let l = s[s.length - 1], p = l && l.icon === void 0 && l.math === void 0 && l.style === t.style, r = c.width(p ? l.text + g : g, e.size, t.style) - (p ? l.width : 0);
        s.length && n + r > f && (i(), l = void 0, r = c.width(g, e.size, t.style)), l && l.icon === void 0 && l.math === void 0 && l.style === t.style ? (l.text += g, l.width += r) : s.push({ text: g, style: t.style, width: r }), n += r;
      }
    }
    (s.length || !e.lines[h].length) && i();
  }
  let o = 0;
  for (let h of d)
    o = Math.max(o, h);
  let a = { ...e, lines: u, widths: d, width: o, height: u.length * e.lineHeight };
  return e.heights ? M(a) : a;
}
function k(e, c, f, u) {
  let d = j(e), o = "<text" + z(u, d), a = "";
  for (let h = 0; h < e.lines.length; h++) {
    let s = e.lines[h], n = f + (h + 0.5) * e.lineHeight;
    if (s.some((t) => t.icon !== void 0)) {
      let t = e.widths[h];
      a += H({ ...e, lines: [s], widths: [t], width: t, height: e.lineHeight }, c + t / 2, n, u);
      continue;
    }
    let i = "";
    for (let t of s) {
      let g = b(t.style & ~d);
      i += g ? `<tspan${g}>${v(t.text)}</tspan>` : v(t.text);
    }
    i !== "" && (a += `${o} x="${$(c)}" y="${$(n + e.size * 0.35)}" text-anchor="start" xml:space="preserve">${i}</text>`);
  }
  return a;
}
export {
  E as A,
  k as E,
  V as T
};
//# sourceMappingURL=LM4J5P2M-41ed4480.js.map

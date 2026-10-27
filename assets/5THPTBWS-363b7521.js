function x(e, i, w, r, o, l = 0) {
  if (e === "" || i <= 0)
    return;
  let t = o.width(e, w, l);
  if (t <= i)
    return { text: e, size: w, width: t };
  let h = Math.max(r, Math.floor(w * i / t));
  for (; h >= r; ) {
    if (t = o.width(e, h, l), t <= i)
      return { text: e, size: h, width: t };
    h--;
  }
  let d = Array.from(e), n = 0, u = d.length - 1;
  for (; n < u; ) {
    let f = n + u + 1 >> 1;
    o.width(d.slice(0, f).join("").trimEnd() + "\u2026", r, l) <= i ? n = f : u = f - 1;
  }
  if (n === 0)
    return;
  let s = d.slice(0, n).join("").trimEnd() + "\u2026";
  return t = o.width(s, r, l), t <= i ? { text: s, size: r, width: t } : void 0;
}
export {
  x as s
};
//# sourceMappingURL=5THPTBWS-363b7521.js.map

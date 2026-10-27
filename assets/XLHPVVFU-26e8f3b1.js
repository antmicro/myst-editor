import { e as h } from "./lazy-950901f8.js";
function d(t, n) {
  let e = t.indexOf(`
`, n);
  return e === -1 ? t.length : e;
}
function A(t, n, e) {
  for (let r = 0; r < e.length; r++)
    if ((t.charCodeAt(n + r) | 32) !== e.charCodeAt(r))
      return !1;
  return !0;
}
function g(t, n) {
  let e = t.length, r = n;
  for (; r < e; ) {
    let u = t.charCodeAt(r);
    if (u === 37 && t.charCodeAt(r + 1) !== 123)
      r = d(t, r);
    else {
      if (u === 10)
        return r;
      if (h(u))
        do
          r++;
        while (r < e && h(t.charCodeAt(r)));
      else if (u === 35)
        r = d(t, r);
      else
        return r;
    }
  }
  return r;
}
function l(t, n) {
  let e = n;
  for (; h(t.charCodeAt(e)); )
    e++;
  return e;
}
function x(t, n, e, r) {
  let u = A(t, n, "accdescr");
  if (!u && !A(t, n, "acctitle"))
    return n;
  let i = t.length, o = l(t, n + 8), s = t.charCodeAt(o), c = (f, a, C) => {
    e.types.push(f), e.texts.push(t.slice(a, C)), e.starts.push(a);
  };
  if (s === 58) {
    o = l(t, o + 1);
    let f = d(t, o);
    return c(u ? r + 2 : r, n, o), c(u ? r + 3 : r + 1, o, f), f;
  }
  if (!u || s !== 123)
    return n;
  for (o = l(t, o + 1); t.charCodeAt(o) !== 125; ) {
    let f = t.indexOf("}", o);
    if (f === -1 && (f = i), c(r + 4, o, f), o === i)
      return i;
    o = f;
  }
  return o + 1;
}
export {
  A as d,
  g,
  d as h,
  x
};
//# sourceMappingURL=XLHPVVFU-26e8f3b1.js.map

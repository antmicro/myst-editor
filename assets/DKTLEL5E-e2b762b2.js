function f(r, i, e, d) {
  let t = d(i, !1), n = r.maxWidth;
  if (n === void 0 || !(n > 0) || t.width <= n)
    return t;
  let o = Math.min(e, i), h = i;
  t = d(h, !0);
  for (let a = 0; a < 3 && t.width > n && h > o; a++)
    h = Math.max(o, h - (t.width - n)), t = d(h, !0);
  return t;
}
function m(r) {
  var e;
  let i = r.maxWidth;
  return i !== void 0 && i > 0 ? Math.max(80, i - 2 * ((e = r.padding) != null ? e : 8)) : 4e3;
}
function l(r, i, e, d = 0) {
  let t = r.maxWidth;
  return t === void 0 || !(t > 0) ? i : Math.max(Math.min(e, i), Math.min(i, t - d));
}
var u = 640;
function c(r, i) {
  let e = i(!1), d = r.maxWidth;
  if (r.autoDirection === !1 || d === void 0 || !(d > 0) || e.width <= d)
    return e;
  let t = r.directionBreakpoint;
  if (d >= (t !== void 0 && t > 0 ? t : u))
    return e;
  let n = i(!0);
  return n.width < e.width ? n : e;
}
function w(r) {
  return r === "LR" || r === "RL";
}
function x(r, i) {
  let e = i(!1), d = r.maxWidth;
  if (d === void 0 || !(d > 0) || e.width <= d)
    return e;
  let t = i(!0);
  return t.width < e.width ? t : e;
}
export {
  c,
  f,
  m as h,
  l,
  w as m,
  x as p
};
//# sourceMappingURL=DKTLEL5E-e2b762b2.js.map

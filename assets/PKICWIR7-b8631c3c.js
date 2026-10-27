import { e as s } from "./3G3HCGVE-09704139.js";
var g = /<(?!br\s*\/?>)/gi, h = /:fa-/g, p = /<br\s*\/?>|ﬂ°°?\w+¶ß|&#?\w+;|[\ud800-\udbff][\udc00-\udfff]|[\s\S]/gi;
function u(r, f, n, t, i = 0) {
  let e = r;
  return e !== void 0 && (e.includes("<") && (e = e.replace(g, "&lt;")), e.includes(":fa-") && (e = e.replace(h, "&colon;fa-"))), s(e, !1, f, n, t, i);
}
function m(r, f, n, t, i = 0) {
  var a;
  let e = u(r, f, n, t, i);
  if (r === void 0 || e.width <= t)
    return e;
  let d = "", o = 0;
  for (let l of (a = r.match(p)) != null ? a : []) {
    if (l.trim() === "" || l.length > 2 && l[0] === "<")
      o = 0;
    else {
      let c = f.width(l.length > 2 ? "x" : l, n, i);
      o > 0 && o + c > t && (d += `
`, o = 0), o += c;
    }
    d += l;
  }
  return u(d, f, n, t, i);
}
export {
  m as T,
  u as s
};
//# sourceMappingURL=PKICWIR7-b8631c3c.js.map

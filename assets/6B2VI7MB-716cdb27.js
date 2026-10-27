import { S as d, F as C } from "./3G3HCGVE-09704139.js";
import { b as S } from "./lazy-950901f8.js";
var o = "about:blank", $ = /^([^\w]*)(javascript|data|vbscript)/im, s = /&#(\w+)(^\w|;)?/g, f = /&(newline|tab);/gi, m = /[\u0000-\u001F\u007F-\u009F -‍﻿\uD800-\uDFFF\uFFFE\uFFFF]/gimu, x = /^.+(:|&colon;)/gim, h = /(\\|%5[cC])((%(6[eE]|72|74))|[nrt])/g;
function F(t) {
  try {
    return decodeURIComponent(t);
  } catch {
    return t;
  }
}
function g(t) {
  if (!t)
    return o;
  let e = F(t.trim()), r, a = 0;
  do {
    if (++a > 32)
      return o;
    e = e.replace(m, "").replace(s, (i, v) => String.fromCharCode(v)).replace(f, "").replace(m, "").replace(h, "").trim(), e = F(e), r = e.match(m) || e.match(s) || e.match(f) || e.match(h);
  } while (r && r.length > 0);
  if (!e)
    return o;
  if (e[0] === "." || e[0] === "/")
    return e;
  let u = e.trimStart(), c = u.match(x);
  if (!c)
    return e;
  let n = c[0].toLowerCase().trim();
  if ($.test(n))
    return o;
  let l = u.replace(/\\/g, "/");
  if (n === "mailto:" || n.includes("://"))
    return l;
  if (n === "http:" || n === "https:") {
    let i;
    try {
      i = new URL(l);
    } catch {
      return o;
    }
    return i.protocol = i.protocol.toLowerCase(), i.hostname = i.hostname.toLowerCase(), i.toString();
  }
  return l;
}
function z(t) {
  return g(S(t));
}
var L = ["http", "https", "mailto", "tel"], b = ["http", "https"], R = /^([a-z][a-z0-9+.-]*):/i, k = /^[\\/]{2}/;
function w(t, e) {
  if (k.test(t))
    return;
  let r = R.exec(t);
  return !r || e.includes(r[1].toLowerCase()) ? t : void 0;
}
function p(t, e) {
  var r;
  return e.links === !1 ? void 0 : w(t, (r = e.linkSchemes) != null ? r : L);
}
function I(t, e) {
  var r;
  return e.images === !1 ? void 0 : w(t, (r = e.imageSchemes) != null ? r : b);
}
var E = new RegExp(C.source, "gu");
function j(t, e) {
  let r = g(t);
  if (r === o || p(r, e) === void 0)
    return !1;
  let a = t.replace(E, "").replace(/[\t\n\r]/g, "").replace(/^[\x00-\x20]+/, "");
  return p(a, e) !== void 0;
}
function H(t, e, r, a, u, c = "") {
  let n = p(e, u);
  return n === void 0 ? t : (a.push({ id: r, href: n, internal: !1 }), `<a href="${d(n)}"${c}${D(u)}>${t}</a>`);
}
function D(t) {
  var r;
  let e = (r = t.linkRel) != null ? r : "noopener";
  return e ? ` rel="${d(e)}"` : "";
}
export {
  H as D,
  I as H,
  D as M,
  z as N,
  j as U,
  g as _,
  p as f
};
//# sourceMappingURL=6B2VI7MB-716cdb27.js.map

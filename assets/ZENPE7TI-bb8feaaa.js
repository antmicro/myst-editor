import { i as $, V as _ } from "./lazy-950901f8.js";
import { L as y, x as T } from "./3G3HCGVE-09704139.js";
var g = ["1", "INVALID", "SPACELINE", "NL", "EOF", "", "SPACELIST", "ICON", "CLASS", "NODE_DSTART", "NODE_ID", "NODE_DESCR", "NODE_DEND", "SHAPE_DATA"];
function R(s, o) {
  return s === 5 ? o ? "KANBAN" : "MINDMAP" : g[s];
}
var S = { DEFAULT: 0, NO_BORDER: 0, ROUNDED_RECT: 1, RECT: 2, CIRCLE: 3, CLOUD: 4, BANG: 5, HEXAGON: 6 };
function M(s, o) {
  switch (s) {
    case "[":
      return S.RECT;
    case "(":
      return o === ")" ? S.ROUNDED_RECT : S.CLOUD;
    case "((":
      return S.CIRCLE;
    case ")":
      return S.CLOUD;
    case "))":
      return S.BANG;
    case "{{":
      return S.HEXAGON;
    default:
      return S.DEFAULT;
  }
}
var k = /\s+/y, h = /.+/y, m = /[^([\n){}]+/y, b = /[^([\n){}@]+/y, v = /[^)\](}]+/y, U = /[^`"]+/y, w = /[^}^"]+/y, B = /\n\s*/g;
function p(s, o, A) {
  for (let C = 0; C < A.length; C++)
    if ((s.charCodeAt(o + C) | 32) !== A.charCodeAt(C))
      return !1;
  return !0;
}
function F(s, o) {
  let A = s.length, C = [], l = [], a = [], u = o ? "kanban" : "mindmap", L = o ? b : m, e = 0, t = 0, d = -1, c = (r, i, f) => {
    C.push(r), l.push(i), a.push(t), t = f;
  }, n = (r, i, f) => {
    c(r, s.slice(t, i), i), e = f;
  }, N = (r, i) => (r.lastIndex = i, r.test(s) ? r.lastIndex : -1), E = (r) => {
    let i = s.indexOf(r, t);
    return i === -1 ? A : i;
  };
  for (; t < A; ) {
    let r = s.charCodeAt(t), i = s.charCodeAt(t + 1), f;
    if (e === 0) {
      let D = r <= 32 || r >= 160 ? Math.max(N(k, t), t) : t;
      if (o && r === 64 && i === 123)
        c(13, "", t + 2), e = 6;
      else if (s.charCodeAt(D) === 37 && s.charCodeAt(D + 1) === 37)
        n(2, N(h, D), 0);
      else if (D > t)
        d < t && (d = E(`
`)), d >= D ? n(6, D, 0) : (f = s.lastIndexOf(`
`, D - 1)) > t ? n(2, f + 1, 0) : n(3, t + 1, 0);
      else if (p(s, t, u) && !$(s.charCodeAt(t + u.length)))
        n(5, t + u.length, 0);
      else if (r === 58 && i === 58 && s.charCodeAt(t + 2) === 58)
        t += 3, e = 1;
      else if (r === 58 && i === 58 && p(s, t + 2, "icon") && s.charCodeAt(t + 6) === 40)
        t += 7, e = 2;
      else if (r === 45 && i === 41 || r === 40 && (i === 45 || i === 40) || (r === 41 || r === 123) && i === r)
        n(9, t + 2, 3);
      else if (r === 41 || r === 40 || r === 91)
        n(9, t + 1, 3);
      else if ((f = N(L, t)) !== -1)
        n(10, f, 0);
      else
        break;
    } else if (e === 3)
      r === 34 ? (e = i === 96 ? 5 : 4, t += i === 96 ? 2 : 1) : r === 41 || r === 40 ? n(12, i === r || r === 40 && i === 45 ? t + 2 : t + 1, 0) : r === 93 ? n(12, t + 1, 0) : r === 125 && i === 125 || r === 45 && i === 41 ? n(12, t + 2, 0) : n(11, N(r === 125 ? h : v, t), 3);
    else if (e === 4)
      r === 34 ? (t++, e = 3) : n(11, E('"'), 4);
    else if (e === 5)
      if (r === 96 && i === 34)
        t += 2, e = 3;
      else if ((f = N(U, t)) !== -1)
        n(11, f, 5);
      else
        break;
    else if (e === 1)
      if ((f = N(h, t)) !== -1)
        n(8, f, 0);
      else if (r === 10)
        t++, e = 0;
      else
        break;
    else if (e === 2)
      r === 41 ? (t++, e = 0) : n(7, E(")"), 2);
    else if (e === 6)
      if (r === 34)
        n(13, t + 1, 7);
      else if (r === 125)
        t++, e = 0;
      else if ((f = N(w, t)) !== -1)
        n(13, f, 6);
      else
        break;
    else
      r === 34 ? n(13, t + 1, 6) : (f = E('"'), c(13, s.slice(t, f).replace(B, "<br/>"), f));
  }
  return t < A ? c(1, "", t) : (e === 0 && c(4, "", A), c(0, "", A)), { types: C, texts: l, starts: a };
}
var O = "'SPACELINE', 'NL', 'EOF'", x = new Uint8Array(14);
for (let s of [2, 6, 7, 8, 9, 10])
  x[s] = 1;
function I(s) {
  return s === 2 || s === 3 || s === 4;
}
function X(s, o, A) {
  let C = A ? "kanban" : "mindmap", { types: l, texts: a, starts: u } = F(s, A), L = A ? ", 'SHAPE_DATA'" : "", e = 0, t = (n) => {
    let N = l[e];
    throw N === 1 ? _(C, s, u[e], "", !0) : _(C, s, u[e], `Expecting ${n}, got '${R(N, A)}'`);
  }, d = `'${R(5, A)}'`;
  if (l[e] === 2) {
    for (e++; l[e] === 2 || l[e] === 3; )
      e++;
    l[e] !== 5 && t(`'SPACELINE', 'NL', ${d}`);
  } else
    l[e] !== 5 && t(`'SPACELINE', ${d}`);
  e++;
  let c = "'SPACELINE', 'NL', 'SPACELIST', 'ICON', 'CLASS', 'NODE_DSTART', 'NODE_ID'";
  for (l[e] === 3 && (e++, c = "'SPACELINE', 'SPACELIST', 'ICON', 'CLASS', 'NODE_DSTART', 'NODE_ID'"); ; ) {
    let n = l[e], N = 0, E = n === 6;
    if (E && (N = a[e++].length, n = l[e]), n === 10 || n === 9) {
      let r, i, f = 0;
      if (n === 10 && (r = a[e++]), l[e] === 9) {
        let D = a[e++];
        l[e] !== 11 && t("'NODE_DESCR'"), i = a[e++], l[e] !== 12 && t("'NODE_DEND'");
        let P = a[e++];
        !I(l[e]) && l[e] !== 13 && t(O + L), f = o.getType(D, P);
      } else
        !I(l[e]) && l[e] !== 13 && t(O + ", 'NODE_DSTART'" + L), i = r;
      if (l[e] === 13) {
        let D = a[e++];
        for (; l[e] === 13; )
          D += a[e++];
        I(l[e]) || t(O + L), o.addNode(N, r != null ? r : i, i, f, D);
      } else
        o.addNode(N, r != null ? r : i, i, f);
    } else if (n === 7 || n === 8) {
      let r = a[e++];
      I(l[e]) || t(O), o.decorateNode(n === 7 ? { icon: r } : { class: r });
    } else
      E ? I(n) || t(O + ", 'ICON', 'CLASS', 'NODE_DSTART', 'NODE_ID'") : n === 2 ? I(l[++e]) || t(O) : t(c);
    for (e++; l[e] === 3 || l[e] === 4; )
      e++;
    if (l[e] === 0)
      return;
    x[l[e]] === 0 && t(O + ", 'SPACELIST', 'ICON', 'CLASS', 'NODE_DSTART', 'NODE_ID'");
  }
}
function V(s, o, A, C, l) {
  var a;
  return `<svg class="pele-icon" data-icon="${y(s)}" x="${T(o)}" y="${T(A)}" width="${T(C)}" height="${T(C)}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${(a = l == null ? void 0 : l(s)) != null ? a : ""}</svg>`;
}
export {
  M as W,
  V as X,
  X as Y
};
//# sourceMappingURL=ZENPE7TI-bb8feaaa.js.map

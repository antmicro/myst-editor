var ae = Object.defineProperty;
var ie = (t, a, i) => a in t ? ae(t, a, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[a] = i;
var L = (t, a, i) => (ie(t, typeof a != "symbol" ? a + "" : a, i), i);
import { s as X } from "./RVARI57O-efc1a1cc.js";
import { d as se, i as lt, e as Ot, f as Qt, t as ct, V as Xt, a as Gt, o as re } from "./lazy-950901f8.js";
import { l as ne } from "./DKTLEL5E-e2b762b2.js";
import { e as Bt, x as B, b as oe, V as G, u as he, L as le, a as ce, m as de, h as ue } from "./3G3HCGVE-09704139.js";
var fe = /^\d+$/, Ft = /^#?([\dA-Fa-f]{6}|[\dA-Fa-f]{3})$/, xe = /^\d+px$/;
function dt(t, a, i) {
  return new Gt(`value for ${t} ${a} is invalid, please use a valid ${i}`, "semantic", { type: "quadrantChart" });
}
function Ae(t) {
  let a = t.trim(), i = a.indexOf(":");
  if (i === -1)
    return [a, "undefined"];
  let o = a.slice(i + 1).trimStart(), l = o.indexOf(":");
  return [a.slice(0, i).trimEnd(), l === -1 ? o : o.slice(0, l).trimEnd()];
}
function Wt(t) {
  let a = {};
  for (let i of t) {
    let [o, l] = Ae(i);
    if (o === "radius") {
      if (!fe.test(l))
        throw dt(o, l, "number");
      a.radius = parseInt(l);
    } else if (o === "color") {
      if (!Ft.test(l))
        throw dt(o, l, "hex code");
      a.color = l;
    } else if (o === "stroke-color") {
      if (!Ft.test(l))
        throw dt(o, l, "hex code");
      a.strokeColor = l;
    } else if (o === "stroke-width") {
      if (!xe.test(l))
        throw dt(o, l, "number of pixels (eg. 10px)");
      a.strokeWidth = l;
    } else
      throw new Gt(`style named ${o} is not supported.`, "semantic", { type: "quadrantChart" });
  }
  return a;
}
function F(t) {
  return { text: t.text.trim(), type: t.type };
}
var pe = class {
  constructor() {
    L(this, "type", "quadrantChart");
    L(this, "title");
    L(this, "accTitle");
    L(this, "accDescr");
    L(this, "quadrants", [void 0, void 0, void 0, void 0]);
    L(this, "xAxisLeft");
    L(this, "xAxisRight");
    L(this, "yAxisBottom");
    L(this, "yAxisTop");
    L(this, "points", []);
    L(this, "classes", /* @__PURE__ */ new Map());
  }
  setQuadrant1Text(t) {
    this.quadrants[0] = F(t);
  }
  setQuadrant2Text(t) {
    this.quadrants[1] = F(t);
  }
  setQuadrant3Text(t) {
    this.quadrants[2] = F(t);
  }
  setQuadrant4Text(t) {
    this.quadrants[3] = F(t);
  }
  setXAxisLeftText(t) {
    this.xAxisLeft = F(t);
  }
  setXAxisRightText(t) {
    this.xAxisRight = F(t);
  }
  setYAxisBottomText(t) {
    this.yAxisBottom = F(t);
  }
  setYAxisTopText(t) {
    this.yAxisTop = F(t);
  }
  addPoint(t, a, i, o, l) {
    this.points.push({ x: Number(i), y: Number(o), text: F(t), className: a, ...Wt(l) });
  }
  addClass(t, a) {
    this.classes.set(t, Wt(a));
  }
  setDiagramTitle(t) {
    this.title = t;
  }
  setAccTitle(t) {
    this.accTitle = t.replace(/^\s+/g, "");
  }
  setAccDescription(t) {
    this.accDescr = t.replace(/\n\s+/g, `
`);
  }
}, Ht = ["$end", "INVALID", "NEWLINE", "title", "title_value", "acc_title", "acc_title_value", "acc_descr", "acc_descr_value", "acc_descr_multiline_value", "X-AXIS", "Y-AXIS", "AXIS-TEXT-DELIMITER", "QUADRANT_1", "QUADRANT_2", "QUADRANT_3", "QUADRANT_4", "CLASSDEF", "MD_STR", "STR", "class_name", "point_start", "point_x", "point_y", "QUADRANT", "ALPHA", "UNICODE_TEXT", "COLON", "PLUS", "COMMA", "EQUALS", "MULT", "BRKT", "UNDERSCORE", "DOT", "AMP", "MINUS", "NUM", "SPACE", "SEMI", "PUNCTUATION", "EOF"], xt = [41, 4, 6, 8, 9, 19], pt = new Uint8Array(128);
for (let [t, a] of [[":", 27], ["+", 28], [",", 29], ["=", 30], ["*", 31], ["#", 32], ["_", 33], [".", 34], ["&", 35], ["-", 36], [" 	\v\f", 38], [";", 39], ["!$%'`?\\/", 40]])
  for (let i = 0; i < t.length; i++)
    pt[t.charCodeAt(i)] = a;
function me(t) {
  let a = t.length, i = [], o = [], l = [], r = [], y = 0, e = 0, b = 0, w = 0, S = 0, u = 0, x = 0, k = 0, q = 0, D = 0, p = (h, N, M) => {
    i.push(h), o.push(t.slice(N, M)), l.push(N), e = M;
  }, R = (h) => {
    r.push(y), y = h;
  }, O = () => {
    r.length > 0 && (y = r.pop());
  }, J = (h) => {
    let N = t.indexOf(`
`, h);
    return N === -1 ? a : N;
  }, K = (h) => {
    for (; t.charCodeAt(h) === 32; )
      h++;
    return h;
  }, E = (h) => {
    for (; h < a && Ot(t.charCodeAt(h)); )
      h++;
    return h;
  }, H = (h) => {
    let N = t.charCodeAt(h);
    if (N === 49)
      return h + 1;
    if (N !== 48)
      return -1;
    let M = h + 1;
    if (M < a && !re(t.charCodeAt(M)) && ct(t.charCodeAt(M + 1)))
      for (M += 2; ct(t.charCodeAt(M)); )
        M++;
    return M;
  };
  t:
    for (; e < a; ) {
      let h = t.charCodeAt(e), N = t.charCodeAt(e + 1);
      switch (y) {
        case 0:
          break;
        case 1:
        case 2:
        case 3:
          p(xt[y], e, J(e)), O();
          continue;
        case 4:
          if (h === 125)
            e++, O();
          else {
            let s = t.indexOf("}", e);
            p(9, e, s === -1 ? a : s);
          }
          continue;
        case 5:
          if (h === 34)
            e++, O();
          else {
            let s = t.indexOf('"', e);
            p(19, e, s === -1 ? a : s);
          }
          continue;
        case 6:
          if (h === 96 && N === 34) {
            e += 2, O();
            continue;
          }
          if (h !== 96 && h !== 34) {
            let s = e + 1;
            for (let d = t.charCodeAt(s); s < a && d !== 96 && d !== 34; d = t.charCodeAt(++s))
              ;
            p(18, e, s);
            continue;
          }
          break t;
        case 7:
          if (lt(h)) {
            let s = e + 1;
            for (; lt(t.charCodeAt(s)); )
              s++;
            p(20, e, s), O();
            continue;
          }
          break t;
        case 8: {
          let s = H(e);
          if (s !== -1) {
            p(22, e, s), R(9);
            continue;
          }
          let d = E(e);
          if (t.charCodeAt(d) === 93) {
            e = K(d + 1), O();
            continue;
          }
          break t;
        }
        case 9: {
          let s = E(e);
          if (t.charCodeAt(s) === 44) {
            e = E(s + 1), y = 10;
            continue;
          }
          break t;
        }
        case 10: {
          let s = H(e);
          if (s !== -1) {
            p(23, e, s), O();
            continue;
          }
          break t;
        }
      }
      if (h === 37 && N === 37) {
        e = J(e + 2);
        continue;
      }
      if (h === 10 || h === 13) {
        let s = e + 1;
        for (let d = t.charCodeAt(s); d === 10 || d === 13; d = t.charCodeAt(++s))
          ;
        p(2, e, s);
        continue;
      }
      let M = h | 32;
      if (M === 116 && X(t, e, "title") && !lt(t.charCodeAt(e + 5))) {
        p(3, e, e + 5), R(1);
        continue;
      }
      if (M === 97 && X(t, e, "acc")) {
        let s = X(t, e + 3, "descr");
        if (s || X(t, e + 3, "title")) {
          let d = E(e + 8), C = t.charCodeAt(d);
          if (C === 58) {
            p(s ? 7 : 5, e, E(d + 1)), R(s ? 3 : 2);
            continue;
          }
          if (C === 123 && s) {
            e = E(d + 1), R(4);
            continue;
          }
        }
      }
      let m = e;
      h === 32 && ((e < b || e >= w) && (b = e, w = K(e)), m = w);
      let z = t.charCodeAt(m), V = z | 32, I = 0, Q = 0;
      if (V === 120 && X(t, m, "x-axis"))
        I = 10, Q = m + 6;
      else if (V === 121 && X(t, m, "y-axis"))
        I = 11, Q = m + 6;
      else if (z === 45) {
        if (m < S || m >= u)
          for (S = m, u = m; t.charCodeAt(u) === 45; )
            u++;
        u - m >= 2 && t.charCodeAt(u) === 62 && (I = 12, Q = u + 1);
      } else if (V === 113 && X(t, m, "quadrant")) {
        let s = t.charCodeAt(m + 9);
        t.charCodeAt(m + 8) === 45 && s >= 49 && s <= 52 ? (I = 13 + s - 49, Q = m + 10) : X(t, m + 8, "chart") && (I = 24, Q = m + 13);
      }
      if (I !== 0) {
        p(I, e, K(Q));
        continue;
      }
      if (M === 99 && X(t, e, "classdef") && !lt(t.charCodeAt(e + 8))) {
        p(17, e, e + 8);
        continue;
      }
      if (h === 34) {
        N === 96 ? (e += 2, R(6)) : (e++, R(5));
        continue;
      }
      if (h === 58 && N === 58 && t.charCodeAt(e + 2) === 58) {
        e += 3, R(7);
        continue;
      }
      if (h === 58 || Ot(h)) {
        let s = e;
        if (h !== 58 && ((e < x || e >= k) && (x = e, k = E(e)), s = k), t.charCodeAt(s) === 58 && ((s + 1 < q || s + 1 >= D) && (q = s + 1, D = E(s + 1)), t.charCodeAt(D) === 91)) {
          p(21, e, E(D + 1)), R(8);
          continue;
        }
      }
      if (Qt(h)) {
        let s = e + 1;
        for (; Qt(t.charCodeAt(s)); )
          s++;
        p(25, e, s);
        continue;
      }
      if (h >= 128) {
        let s = e + 1;
        for (; t.charCodeAt(s) >= 128; )
          s++;
        p(26, e, s);
        continue;
      }
      if (ct(h)) {
        let s = e + 1;
        for (; ct(t.charCodeAt(s)); )
          s++;
        p(37, e, s);
        continue;
      }
      if (pt[h] !== 0) {
        p(pt[h], e, e + 1);
        continue;
      }
      break;
    }
  return e < a ? (i.push(1), o.push(""), l.push(e), { types: i, texts: o, starts: l }) : (y < xt.length && (i.push(xt[y]), o.push(""), l.push(a)), i.push(0), o.push(""), l.push(a), { types: i, texts: o, starts: l });
}
function ut(...t) {
  let a = new Uint8Array(42);
  for (let i of t)
    a[i] = 1;
  return a;
}
var zt = ut(40, 35, 37, 25, 29, 28, 30, 31, 34, 32, 33, 26), Vt = ut(25, 37, 36, 29, 27, 35, 32, 31, 26), At = ut(25, 37, 27, 38, 32, 36), Yt = ut(2, 39, 41), ge = ["setQuadrant1Text", "setQuadrant2Text", "setQuadrant3Text", "setQuadrant4Text"], Te = "'STR', 'MD_STR', 'ALPHA', 'NUM', 'UNICODE_TEXT', 'PUNCTUATION'";
function Ce(t, a) {
  let { types: i, texts: o, starts: l } = me(t), r = 0, y = (u) => {
    let x = i[r];
    throw x === 1 ? Xt("quadrantChart", t, l[r], "", !0) : Xt("quadrantChart", t, l[r], `Expecting ${u}, got '${Ht[x]}'`);
  }, e = (u) => (i[r] !== u && y(`'${Ht[u]}'`), o[r++]), b = (u) => u === 19 || u === 18 || zt[u] === 1, w = () => {
    let u = i[r];
    b(u) || y(Te);
    let x = o[r++];
    for (; zt[i[r]] === 1 || i[r] === 38 || i[r] === 36; )
      x += o[r++];
    return { text: x, type: u === 18 ? "markdown" : "text" };
  }, S = () => {
    let u = [];
    for (; ; ) {
      At[i[r]] === 0 && y("'ALPHA', 'NUM', 'COLON', 'SPACE', 'BRKT', 'MINUS'");
      let x = o[r++];
      for (; At[i[r]] === 1; )
        x += o[r++];
      if (u.push(x.trim()), i[r] !== 29)
        return u;
      r++;
    }
  };
  for (; Yt[i[r]] === 1 || i[r] === 38; )
    r++;
  for (e(24); i[r] !== 0; ) {
    for (; i[r] === 38; )
      r++;
    let u = i[r];
    switch (u) {
      case 17: {
        r++, e(38), Vt[i[r]] === 0 && y("'ALPHA', 'NUM', 'UNICODE_TEXT'");
        let x = o[r++];
        for (; Vt[i[r]] === 1; )
          x += o[r++];
        e(38), a.addClass(x, S());
        break;
      }
      case 10:
      case 11: {
        r++;
        let x = w(), k;
        i[r] === 12 && (r++, b(i[r]) ? k = w() : x.text += " \u27F6 "), u === 10 ? (a.setXAxisLeftText(x), k && a.setXAxisRightText(k)) : (a.setYAxisBottomText(x), k && a.setYAxisTopText(k));
        break;
      }
      case 13:
      case 14:
      case 15:
      case 16:
        r++, a[ge[u - 13]](w());
        break;
      case 3:
        r++, a.setDiagramTitle(e(4).trim());
        break;
      case 5:
        r++, a.setAccTitle(e(6).trim());
        break;
      case 7:
        r++, a.setAccDescription(e(8).trim());
        break;
      case 9:
        a.setAccDescription(o[r++].trim());
        break;
      default:
        if (b(u)) {
          let x = w(), k = i[r] === 20 ? o[r++] : "";
          e(21);
          let q = e(22), D = e(23);
          a.addPoint(x, k, q, D, At[i[r]] === 1 ? S() : []);
        }
    }
    Yt[i[r]] === 0 && y("'NEWLINE', 'SEMI', 'EOF'"), r++;
  }
}
var Kt = 4, Me = 300;
function mt(t, a) {
  var i;
  return (i = t.quadrantChart) == null ? void 0 : i[a];
}
function W(t, a, i, o) {
  let l = mt(t, a);
  return typeof l == "number" && l >= 0 ? Math.min(l, o) : i;
}
function jt(t) {
  return t.startsWith("#") ? t : "#" + t;
}
function ye(t, a, i) {
  var Nt, kt, bt, _t, wt, Et, vt, Ut, Lt, St, qt, Dt;
  let o = (Nt = i.fontSize) != null ? Nt : 16, l = Math.round(o * 0.875), r = Math.round(o * 0.75), y = (kt = i.measurer) != null ? kt : se(i.fontFamily, i.fontFamilyMono), e = Math.round(Math.max(100, W(a, "chartWidth", 500, 4e3))), b = Math.round(ne(i, e, 280)), w = Math.round(Math.max(100, W(a, "chartHeight", 500, 4e3)) * b / e), S = W(a, "quadrantPadding", (bt = i.padding) != null ? bt : 8, 200), u = W(a, "xAxisLabelPadding", 5, 200), x = W(a, "yAxisLabelPadding", 5, 200), k = t.points.length > 0, q = (n, c, g) => Bt(n == null ? void 0 : n.text, (n == null ? void 0 : n.type) === "markdown", y, c, Math.max(g, 40)), D = Bt(t.title, !1, y, o, Math.max(b - 2 * S, 40), 1), p = W(a, "titlePadding", 10, 200), R = D.height > 0 ? D.height + p : 0, O = !!(((_t = t.xAxisLeft) == null ? void 0 : _t.text) || ((wt = t.xAxisRight) == null ? void 0 : wt.text)), J = !!(((Et = t.yAxisBottom) == null ? void 0 : Et.text) || ((vt = t.yAxisTop) == null ? void 0 : vt.text)), K = k || mt(a, "xAxisPosition") === "bottom", E = mt(a, "yAxisPosition") === "right", H = b - 2 * S, h = q(t.xAxisLeft, l, t.xAxisRight ? H / 2 - 16 : H), N = q(t.xAxisRight, l, H / 2 - 16), M = Math.max(h.height, N.height), m = O ? M + u : 0, z = w - 2 * S - R - m, V = q(t.yAxisBottom, l, t.yAxisTop ? z / 2 - 16 : z), I = q(t.yAxisTop, l, z / 2 - 16), Q = Math.max(V.height, I.height), s = J ? Q + x : 0, d = S + (E ? 0 : s), C = S + R + (K ? 0 : m), v = Math.max(0, H - s), U = Math.max(0, z), Y = Math.max(0, (v - Kt) / 2), Z = Math.max(0, (U - Kt) / 2), _ = [d + Y, C, d + v - Y, C + U, d, C + Z, d + v, C + U - Z], Jt = (n, c, g, A, T) => {
    for (let f = n; f < _.length; f += 4)
      if (!(_[f] >= _[f + 2] || _[f + 1] >= _[f + 3]) && c < _[f + 2] && A > _[f] && g < _[f + 3] && T > _[f + 1])
        return !1;
    return !0;
  }, Zt = W(a, "quadrantTextTopPadding", 5, 200), gt = "";
  for (let n = 0; n < 4; n++) {
    let c = n === 0 || n === 3 ? d + v - Y : d, g = n < 2 ? C : C + U - Z, A = q(t.quadrants[n], o, Y - 16), T = c + Y / 2, f = k ? g + Zt + A.height / 2 : g + Z / 2;
    _.push(T - A.width / 2, f - A.height / 2, T + A.width / 2, f + A.height / 2), gt += `<g class="pele-quadrant" data-id="${n + 1}"><rect x="${B(c)}" y="${B(g)}" width="${B(Y)}" height="${B(Z)}"${oe}/>` + G(A, T, f, ' class="pele-label" fill="var(--_fg)" stroke="none"') + "</g>";
  }
  let at = "";
  if (O) {
    let n = K ? C + U + u + M / 2 : C - u - M / 2;
    at += G(h, N.height > 0 ? d + v / 4 : d + h.width / 2, n, "") + G(N, d + v * 3 / 4, n, "");
  }
  if (J) {
    let n = E ? d + v + x + Q / 2 : d - x - Q / 2, c = (g, A) => g.height > 0 ? `<g transform="translate(${B(n)},${B(A)}) rotate(-90)">${G(g, 0, 0, "")}</g>` : "";
    at += c(V, I.height > 0 ? C + U * 3 / 4 : C + U - V.width / 2) + c(I, C + U / 4);
  }
  let $t = W(a, "pointRadius", 5, 200), Tt = W(a, "pointTextPadding", 5, 200), Ct = ue(0), $ = [], Mt = [];
  for (let n of t.points) {
    if (!(n.x >= 0 && n.x <= 1 && n.y >= 0 && n.y <= 1))
      continue;
    let c = t.classes.get(n.className), g = Math.min((Lt = (Ut = n.radius) != null ? Ut : c == null ? void 0 : c.radius) != null ? Lt : $t, 2e3), A = (St = n.color) != null ? St : c == null ? void 0 : c.color, T = (qt = n.strokeColor) != null ? qt : c == null ? void 0 : c.strokeColor, f = (Dt = n.strokeWidth) != null ? Dt : c == null ? void 0 : c.strokeWidth, P = [];
    A && P.push("fill:" + jt(A)), f && (T && P.push("stroke:" + jt(T)), P.push("stroke-width:" + f));
    let it = d + n.x * v, st = C + (1 - n.y) * U;
    $.push({ cx: it, cy: st, reach: g + (f ? Math.min(parseInt(f), 400) / 2 : 0), text: q(n.text, r, 200) }), Mt.push(`<circle class="pele-point${he(n.className)}" data-id="${le(n.text.text)}" cx="${B(it)}" cy="${B(st)}" r="${B(g)}"${f && !T ? ` stroke="${Ct}"` : ""}${ce(P).shape}/>`);
  }
  let ft = $.length <= Me;
  if (ft)
    for (let { cx: n, cy: c, reach: g } of $)
      _.push(n - g, c - g, n + g, c + g);
  let yt = "";
  for (let { cx: n, cy: c, reach: g, text: A } of $) {
    let T = A.width / 2, f = A.size * 0.6 + (A.height - A.lineHeight) / 2, P = g + Tt, it = Math.min(P, Math.max(0, (Y - A.width) / 2)), st = 8 + 4 * (n < d + v / 2 ? c < C + U / 2 ? 1 : 2 : c < C + U / 2 ? 0 : 3), ee = Math.max(c + P, _[st + 3] + Tt) + f, rt = [n, c + P + f, n, c - P - f, n + P + T, c, n - P - T, c, n, ee], nt = n, ot = rt[1], Rt = !1;
    for (let ht = 0; ht < 20; ht += 2) {
      let j = ht % 10, It = j === 8 ? it : 0, tt = (j < 4 || j === 8) && A.width < v ? Math.min(Math.max(rt[j], d + T + It), d + v - T - It) : rt[j], et = rt[j + 1];
      if (tt - T < d || tt + T > d + v || et - f < C || et + f > C + U)
        continue;
      let Pt = !ft || Jt(ht < 10 ? 0 : 8, tt - T, et - f, tt + T, et + f);
      if ((!Rt || Pt) && (nt = tt, ot = et, Rt = !0), Pt)
        break;
    }
    ft && _.push(nt - T, ot - f, nt + T, ot + f), yt += G(A, nt, ot, ' class="pele-label"');
  }
  let te = G(D, b / 2, p / 2 + D.height / 2, ' class="pele-title" font-weight="var(--_tw)"') + `<g class="pele-quadrants" fill="var(--_s)" stroke="var(--_b)">${gt}</g>` + (at ? `<g class="pele-axis-labels" font-size="${l}" fill="var(--_m)">${at}</g>` : "") + ($.length > 0 ? `<g class="pele-points" fill="${Ct}">${Mt.reverse().join("")}</g><g class="pele-point-labels" font-size="${r}">${yt}</g>` : "");
  return { svg: de("quadrantChart", b, w, o, i, t, te), width: b, height: w, links: [] };
}
var Ee = { type: "quadrantChart", parse(t, a, i) {
  let o = new pe();
  return o.title = i, Ce(t, o), o;
}, render: ye };
export {
  Ee as quadrantChart
};
//# sourceMappingURL=CDMJA7OQ-708a0fa4.js.map

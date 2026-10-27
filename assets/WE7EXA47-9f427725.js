var Ge = Object.defineProperty;
var Je = (t, i, l) => i in t ? Ge(t, i, { enumerable: !0, configurable: !0, writable: !0, value: l }) : t[i] = l;
var O = (t, i, l) => (Je(t, typeof i != "symbol" ? i + "" : i, l), l);
import { s as it } from "./RVARI57O-efc1a1cc.js";
import { a as Ze, d as ti, t as dt, f as _e, e as Se, V as ke, i as ei } from "./lazy-950901f8.js";
import { l as ii } from "./DKTLEL5E-e2b762b2.js";
import { e as Te, x as f, L as Le, V as ut, m as ai, S as li, h as Re } from "./3G3HCGVE-09704139.js";
var ni = class {
  constructor() {
    O(this, "type", "xychart");
    O(this, "title");
    O(this, "accTitle");
    O(this, "accDescr");
    O(this, "orientation");
    O(this, "xAxis", { type: "band", title: "", categories: [] });
    O(this, "yAxis", { type: "linear", title: "", min: 1 / 0, max: -1 / 0 });
    O(this, "hasSetXAxis", !1);
    O(this, "hasSetYAxis", !1);
    O(this, "plots", []);
  }
  setOrientation(t) {
    this.orientation = t === "horizontal" ? "horizontal" : "vertical";
  }
  setXAxisTitle(t) {
    this.xAxis.title = t.text.trim();
  }
  setXAxisRangeData(t, i) {
    this.xAxis = { type: "linear", title: this.xAxis.title, min: t, max: i }, this.hasSetXAxis = !0;
  }
  setXAxisBand(t) {
    this.xAxis = { type: "band", title: this.xAxis.title, categories: t.map((i) => i.text.trim()) }, this.hasSetXAxis = !0;
  }
  setYAxisTitle(t) {
    this.yAxis.title = t.text.trim();
  }
  setYAxisRangeData(t, i) {
    this.yAxis = { type: "linear", title: this.yAxis.title, min: t, max: i }, this.hasSetYAxis = !0;
  }
  plotData(t) {
    if (t.length === 0)
      return [];
    this.hasSetXAxis || this.setXAxisRangeData(1, t.length);
    let i = this.xAxis;
    if (i.type === "band" && t.length > i.categories.length && (t = t.slice(0, i.categories.length)), !this.hasSetYAxis) {
      let { min: s, max: o } = this.yAxis;
      for (let n of t)
        n < s && (s = n), n > o && (o = n);
      this.yAxis = { type: "linear", title: this.yAxis.title, min: s, max: o };
    }
    if (i.type === "band")
      return i.categories.map((s, o) => [s, t[o]]);
    if (t.length === 1)
      return [[`${i.min}`, t[0]]];
    let l = (i.max - i.min) / (t.length - 1);
    return t.map((s, o) => [`${i.min + o * l}`, s]);
  }
  addPlot(t, i, l) {
    let s = { type: t, title: i.text.trim(), data: this.plotData(l.map((o) => o.value)) };
    t === "line" && l.some((o) => o.label.trim() !== "") && (s.pointLabels = l.map((o) => o.label.trim())), this.plots.push(s);
  }
  setLineData(t, i) {
    this.addPlot("line", t, i);
  }
  setBarData(t, i) {
    this.addPlot("bar", t, i);
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
}, De = ["$end", "INVALID", "NEWLINE", "title", "acc_title", "acc_title_value", "acc_descr", "acc_descr_value", "acc_descr_multiline_value", "XYCHART", "CHART_ORIENTATION", "X_AXIS", "Y_AXIS", "ARROW_DELIMITER", "LINE", "BAR", "NUMBER_WITH_DECIMAL", "SQUARE_BRACES_START", "SQUARE_BRACES_END", "STR", "ALPHA", "COLON", "PLUS", "COMMA", "EQUALS", "MULT", "BRKT", "UNDERSCORE", "DOT", "AMP", "MINUS", "NUM", "SEMI", "EOF"], Ce = [33, 33, 33, 33, 33, 19, 5, 7, 8], Ee = "`)" + " ".repeat(36) + '{ this.pushstate(md_string); }\n<md_string>(?:(?!`").)+' + " ".repeat(18) + "{ return md_str; }\n<md_string>(?:`", Jt = new Uint8Array(128);
for (let [t, i] of [[":", 21], ["+", 22], [",", 23], ["=", 24], ["*", 25], ["#", 26], ["_", 27], [".", 28], ["&", 29], ["-", 30], [";", 32]])
  Jt[t.charCodeAt(0)] = i;
function si(t) {
  let i = t.length, l = [], s = [], o = [], n = [], x = 0, e = 0, d = (h, M, m) => {
    l.push(h), s.push(t.slice(M, m)), o.push(M), e = m;
  }, $ = (h) => {
    n.push(x), x = h;
  }, b = () => {
    n.length > 0 && (x = n.pop());
  }, N = (h) => {
    let M = t.indexOf(`
`, h);
    return M === -1 ? i : M;
  }, r = (h) => {
    for (; h < i && Se(t.charCodeAt(h)); )
      h++;
    return h;
  }, g = (h) => {
    for (; dt(t.charCodeAt(h)); )
      h++;
    return h;
  }, u = (h) => it(t, e, h) && !ei(t.charCodeAt(e + h.length));
  for (; e < i; ) {
    let h = t.charCodeAt(e);
    if (x === 5) {
      if (h === 34)
        e++, b();
      else {
        let m = t.indexOf('"', e);
        d(19, e, m === -1 ? i : m);
      }
      continue;
    }
    if (x === 6 || x === 7) {
      d(Ce[x], e, N(e)), b();
      continue;
    }
    if (x === 8) {
      if (h === 125)
        e++, b();
      else {
        let m = t.indexOf("}", e);
        d(8, e, m === -1 ? i : m);
      }
      continue;
    }
    let M = t.charCodeAt(e + 1);
    if (h === 37 && M === 37) {
      e = N(e + 2);
      continue;
    }
    if (h === 10 || h === 13) {
      if ((x === 1 || x === 3) && (h === 10 || M === 10)) {
        d(2, e, h === 10 ? e + 1 : e + 2), b();
        continue;
      }
      let m = e + 1;
      for (let v = t.charCodeAt(m); v === 10 || v === 13; v = t.charCodeAt(++m))
        ;
      d(2, e, m);
      continue;
    }
    switch (h | 32) {
      case 116:
        if (u("title")) {
          d(3, e, e + 5);
          continue;
        }
        break;
      case 97:
        if (it(t, e, "acc")) {
          let m = it(t, e + 3, "descr");
          if (m || it(t, e + 3, "title")) {
            let v = r(e + 8), w = t.charCodeAt(v);
            if (w === 58) {
              d(m ? 6 : 4, e, r(v + 1)), $(m ? 7 : 6);
              continue;
            }
            if (w === 123 && m) {
              e = r(v + 1), $(8);
              continue;
            }
          }
        }
        break;
      case 120:
        if (u("xychart-beta")) {
          d(9, e, e + 12);
          continue;
        }
        if (u("xychart")) {
          d(9, e, e + 7);
          continue;
        }
        if (u("x-axis")) {
          d(11, e, e + 6), $(1);
          continue;
        }
        break;
      case 121:
        if (u("y-axis")) {
          d(12, e, e + 6), $(1);
          continue;
        }
        break;
      case 118:
        if (it(t, e, "vertical")) {
          d(10, e, e + 8);
          continue;
        }
        break;
      case 104:
        if (it(t, e, "horizontal")) {
          d(10, e, e + 10);
          continue;
        }
        break;
      case 108:
        if (u("line")) {
          d(14, e, e + 4), $(3);
          continue;
        }
        break;
      case 98:
        if (u("bar")) {
          d(15, e, e + 3), $(3);
          continue;
        }
        break;
    }
    if (h === 91) {
      x === 1 ? $(2) : x === 3 && $(4), d(17, e, e + 1);
      continue;
    }
    if (h === 93) {
      (x === 4 || x === 2) && b(), d(18, e, e + 1);
      continue;
    }
    if (x === 1 && h === 45 && M === 45 && t.charCodeAt(e + 2) === 62) {
      d(13, e, e + 3);
      continue;
    }
    if (x === 1 || x === 4) {
      let m = h === 43 || h === 45 ? e + 1 : e, v = t.charCodeAt(m), w = -1;
      if (dt(v) ? (w = g(m + 1), t.charCodeAt(w) === 46 && dt(t.charCodeAt(w + 1)) && (w = g(w + 2))) : v === 46 && dt(t.charCodeAt(m + 1)) && (w = g(m + 2)), w !== -1) {
        d(16, e, w);
        continue;
      }
    }
    if (h === 96 && it(t, e, Ee)) {
      e += Ee.length, b();
      continue;
    }
    if (h === 34) {
      e++, $(5);
      continue;
    }
    if (_e(h)) {
      let m = e + 1;
      for (; _e(t.charCodeAt(m)); )
        m++;
      d(20, e, m);
      continue;
    }
    if (dt(h)) {
      d(31, e, g(e + 1));
      continue;
    }
    if (Se(h)) {
      e = r(e + 1);
      continue;
    }
    if (h < 128 && Jt[h] !== 0) {
      d(Jt[h], e, e + 1);
      continue;
    }
    break;
  }
  return e < i ? (l.push(1), s.push(""), o.push(e), { types: l, texts: s, starts: o }) : (l.push(Ce[x]), s.push(""), o.push(i), l.push(0), s.push(""), o.push(i), { types: l, texts: s, starts: o });
}
function He(...t) {
  let i = new Uint8Array(34);
  for (let l of t)
    i[l] = 1;
  return i;
}
var Ne = He(29, 31, 20, 22, 24, 25, 28, 26, 30, 27), Xe = He(2, 32, 33);
function ri(t, i) {
  let { types: l, texts: s, starts: o } = si(t), n = 0, x = (r) => {
    let g = l[n];
    throw g === 1 ? ke("xychart", t, o[n], "", !0) : ke("xychart", t, o[n], `Expecting ${r}, got '${De[g]}'`);
  }, e = (r) => (l[n] !== r && x(`'${De[r]}'`), s[n++]), d = (r) => r === 19 || Ne[r] === 1, $ = () => {
    d(l[n]) || x("'STR', 'ALPHA', 'NUM'");
    let r = s[n++];
    if (l[n - 1] !== 19)
      for (; Ne[l[n]] === 1; )
        r += s[n++];
    return { text: r, type: "text" };
  }, b = () => {
    let r = Number(e(16));
    return e(13), [r, Number(e(16))];
  }, N = () => {
    let r = [];
    for (e(17); ; ) {
      let g = Number(e(16));
      if (r.push({ value: g, label: l[n] === 19 ? s[n++] : "" }), l[n] !== 23)
        break;
      n++;
    }
    return e(18), r;
  };
  for (; ; )
    if (Xe[l[n]] === 1)
      n++;
    else {
      if (l[n] !== 9)
        break;
      l[++n] === 10 && i.setOrientation(s[n++]);
    }
  for (; l[n] !== 0; ) {
    let r = l[n++];
    switch (r) {
      case 3:
        i.setDiagramTitle($().text.trim());
        break;
      case 11:
      case 12: {
        let g = d(l[n]) ? $() : void 0;
        if (r === 11 && l[n] === 17) {
          let u = [];
          do
            n++, u.push($());
          while (l[n] === 23);
          e(18), i.setXAxisBand(u);
        } else if (l[n] === 16 || g === void 0) {
          let [u, h] = b();
          r === 11 ? i.setXAxisRangeData(u, h) : i.setYAxisRangeData(u, h);
        }
        r === 11 ? i.setXAxisTitle(g != null ? g : { type: "text", text: "" }) : i.setYAxisTitle(g != null ? g : { type: "text", text: "" });
        break;
      }
      case 14:
      case 15: {
        let g = l[n] === 17 ? { text: "", type: "text" } : $(), u = N();
        r === 14 ? i.setLineData(g, u) : i.setBarData(g, u);
        break;
      }
      case 4:
        i.setAccTitle(e(5).trim());
        break;
      case 6:
        i.setAccDescription(e(7).trim());
        break;
      case 8:
        i.setAccDescription(s[n - 1].trim());
        break;
      default:
        n--, x("'title', 'X_AXIS', 'Y_AXIS', 'LINE', 'BAR', 'acc_title', 'acc_descr', 'acc_descr_multiline_value'");
    }
    for (; Xe[l[n]] === 1; )
      n++;
  }
}
function Oe(t, i) {
  let l = t / Math.max(i, 1), s = Math.floor(Math.log10(l)), o = l / 10 ** s, n = o >= 7.07 ? 10 : o >= 3.16 ? 5 : o >= 1.41 ? 2 : 1;
  return s < 0 ? -(10 ** -s) / n : n * 10 ** s;
}
function Rt(t, i) {
  return t > 0 ? i / t : i * -t;
}
function mt(t, i) {
  return t > 0 ? i * t : i / -t;
}
function Ie(t, i, l) {
  let s = Math.round(Rt(l, t));
  mt(l, s) < t && s++;
  let o = Math.round(Rt(l, i));
  mt(l, o) > i && o--;
  let n = [];
  for (let x = s; x <= o && n.length < 100; x++)
    n.push(mt(l, x));
  return n;
}
var Ue = 4, st = 12, ze = 26, Ye = 24, Be = 1e300;
function Gt(t) {
  return typeof t == "object" && t !== null && !Array.isArray(t) ? t : {};
}
function E(t, i, l = !0) {
  let s = t[i];
  return typeof s == "boolean" ? s : l;
}
function Pe(t, i) {
  return typeof t == "number" && t > 0 ? Math.round(Math.min(Math.max(t, 100), 4e3)) : i;
}
function j(t) {
  return typeof t == "number" && isFinite(t) ? Math.min(Math.max(t, -Be), Be) : void 0;
}
function hi(t) {
  let i = 0;
  for (let l of t)
    i = Math.max(i, l.label.width);
  return i;
}
function Lt(t, i, l, s) {
  let o = t.lines.length === 1 ? t.lines[0] : void 0;
  return o && o.length === 1 && o[0].icon === void 0 && o[0].style === 0 ? `<text x="${f(i)}" y="${f(l + t.size * 0.35)}" text-anchor="${s}">${li(o[0].text)}</text>` : ut(t, i + (s === "start" ? t.width / 2 : s === "end" ? -t.width / 2 : 0), l, "");
}
function oi(t, i, l) {
  var xe, de, ue, me, pe, ge, Ae, Me;
  if (t.plots.length === 0)
    throw new Ze("No Plot to render, please provide a plot with some data", "semantic", { type: "xychart" });
  let s = Gt(i.xyChart), o = (xe = l.fontSize) != null ? xe : 16, n = Math.round(o * 0.875), x = Math.round(o * 0.75), e = (de = l.measurer) != null ? de : ti(l.fontFamily, l.fontFamilyMono), d = (ue = l.padding) != null ? ue : 8, $ = Pe(s.width, 700), b = ii(l, $, 240), N = Math.round(Pe(s.height, 500) * Math.max(0.6, b / $)), r = ((me = t.orientation) != null ? me : s.chartOrientation) === "horizontal", g = E(s, "showDataLabel", !1), u = t.xAxis, h = t.plots, M = (a, c, p) => Te(a, !1, e, c, p), m = M("0", n, 4e3).height, v = M("0", x, 4e3).height, w = Te(E(s, "showTitle") ? t.title : void 0, !1, e, o, b - 2 * d, 1), Ve = w.height > 0 ? w.height + 12 : 0, pt = [], Dt = 0;
  E(s, "showLegend") && h.forEach((a, c) => {
    if (a.title === "")
      return;
    let p = M(a.title, n, b * 0.3);
    pt.push({ index: c, label: p }), Dt = Math.max(Dt, p.width + st + 8);
  });
  let Ct = pt.length > 0 ? Dt + Ye : 0, K = h.filter((a) => a.type === "bar").length, A = (pe = j(t.yAxis.min)) != null ? pe : 1 / 0, y = (ge = j(t.yAxis.max)) != null ? ge : -1 / 0, Zt = t.hasSetYAxis && isFinite(A) && isFinite(y) && A !== y;
  if (!Zt) {
    A = 1 / 0, y = -1 / 0;
    for (let a of h)
      for (let [, c] of a.data) {
        let p = j(c);
        p !== void 0 && (p < A && (A = p), p > y && (y = p));
      }
    A > y && (A = y = 0), K > 0 && (A = Math.min(A, 0), y = Math.max(y, 0)), A === y && (A === 0 ? y = 1 : (A -= Math.abs(A) / 2, y += Math.abs(y) / 2));
  }
  let te = (a, c) => {
    let p = Oe(Math.abs(y - A), Math.max(2, Math.min(10, Math.floor(a / c))));
    return Zt || (A = mt(p, Math.floor(Rt(p, A) + 1e-9)), y = mt(p, Math.ceil(Rt(p, y) - 1e-9))), Ie(Math.min(A, y), Math.max(A, y), p).map((S) => ({ at: (S - A) / (y - A), label: M(String(S), n, 4e3) }));
  }, rt = 1;
  if (u.type === "band")
    rt = Math.max(u.categories.length, 1);
  else
    for (let a of h)
      rt = Math.max(rt, a.data.length);
  let at = 1 / rt, gt = u.type === "band" || K > 0 ? at / 2 : 0, Y = j(u.type === "linear" ? u.min : void 0), lt = j(u.type === "linear" ? u.max : void 0), ee = Y !== void 0 && lt !== void 0 && Y !== lt, ie = (a, c) => u.type === "band" ? (a + 0.5) * at : gt + (c > 1 ? a / (c - 1) : ee ? 0 : 0.5) * (1 - 2 * gt), Et = Gt(s.xAxis), ae = Gt(s.yAxis), At = r ? Et : ae, Mt = r ? ae : Et, ht = M(E(At, "showTitle") ? r ? u.title : t.yAxis.title : void 0, n, N * 0.8), bt = M(E(Mt, "showTitle") ? r ? t.yAxis.title : u.title : void 0, n, b * 0.8), yt = E(At, "showTick") ? Ue : 0, $t = E(Mt, "showTick") ? Ue : 0, Nt = E(At, "showLabel"), Xt = E(Mt, "showLabel"), Fe = r ? b * 0.3 : Math.max(48, (b - 2 * d - 64 - Ct) * at - 8), Ot = u.type === "band" && E(Et, "showLabel") ? u.categories.map((a) => M(a, n, Fe)) : [], It = 0, wt = 0;
  for (let a of Ot)
    It = Math.max(It, a.width), wt = Math.max(wt, a.height);
  let le = (a) => {
    var p;
    let c = [];
    if (u.type === "band") {
      let S = Ot.length === 0 ? 8 : r ? wt : It + 12, L = Math.max(1, Math.ceil(S / (a * at)));
      for (let I = 0; I < u.categories.length; I += L)
        c.push({ at: (I + 0.5) * at, label: (p = Ot[I]) != null ? p : M(void 0, n, 0) });
    } else if (ee) {
      let S = Oe(Math.abs(lt - Y), Math.max(2, Math.min(10, Math.floor(a / (r ? 32 : 80)))));
      for (let L of Ie(Math.min(Y, lt), Math.max(Y, lt), S))
        c.push({ at: gt + (L - Y) / (lt - Y) * (1 - 2 * gt), label: M(String(L), n, 4e3) });
    } else
      Y !== void 0 && c.push({ at: 0.5, label: M(String(Y), n, 4e3) });
    return c;
  }, ot = 0, vt = 0;
  for (let a of h) {
    for (let c of (Ae = a.pointLabels) != null ? Ae : [])
      ot = Math.max(ot, e.width(c, x, 0));
    if (g && r && a.type === "bar")
      for (let [, c] of a.data)
        vt = Math.max(vt, e.width(String((Me = j(c)) != null ? Me : ""), x, 0));
  }
  let ne = Xt ? r || u.type !== "band" ? m : wt : 0, Qe = $t + (ne > 0 ? ne + 4 : 0) + (bt.height > 0 ? bt.height + 4 : 0), We = r ? 0 : ot > 0 || g ? v + 4 : Nt ? m / 2 : 0, V = d + Ve + We, X = Math.max(1, N - d - Qe - V), q = V + X, Ut = r ? le(X) : te(X, 56), se = Nt ? hi(Ut) : 0, T = d + (ht.height > 0 ? ht.height + 6 : 0) + (se > 0 ? se + 6 : 0) + yt, je = Math.max(ot > 0 ? ot + 12 : 0, vt > 0 ? vt + 8 : 0), zt = r ? Math.min(b * 0.25, je) : 0, _ = Math.max(1, b - d - T - Ct - zt), Yt = r ? te(_, 80) : le(_);
  if (Xt && Ct + zt === 0) {
    let a = 0;
    for (let c of Yt)
      a = Math.max(a, c.at * _ + c.label.width / 2 - _);
    _ = Math.max(1, _ - a);
  }
  let _t = T + _, G = (a, c) => r ? T + c * _ : T + a * _, J = (a, c) => r ? V + a * X : q - c * X, Bt = (a) => (a - A) / (y - A), re = (a) => Math.min(Math.max(a, 0), 1), he = (a) => r ? `M${f(G(0, a))},${f(V)}V${f(q)}` : `M${f(T)},${f(J(0, a))}H${f(_t)}`, Pt = "";
  for (let a of r ? Yt : Ut)
    Pt += he(a.at);
  let Z = "", St = "";
  E(At, "showAxisLine") && (Z += `M${f(T)},${f(V)}V${f(q)}`), E(Mt, "showAxisLine") && (Z += `M${f(T)},${f(q)}H${f(_t)}`);
  for (let a of Ut) {
    let c = r ? V + a.at * X : q - a.at * X;
    yt && (Z += `M${f(T)},${f(c)}h${-yt}`), Nt && (St += Lt(a.label, T - yt - 6, c, "end"));
  }
  for (let a of Yt) {
    let c = T + a.at * _;
    $t && (Z += `M${f(c)},${f(q)}v${$t}`), Xt && (St += Lt(a.label, c, q + $t + 4 + a.label.height / 2, "middle"));
  }
  let Ht = (r ? X : _) * at, ct = Ht * 0.7 / Math.max(K, 1), Vt = K > 1 ? Math.min(2, ct * 0.2) : 0, nt = re(Bt(0));
  K > 0 && nt > 0 && nt < 1 && (Z += he(nt));
  let oe = "", ce = "", Ft = "", Qt = "", Ke = 0;
  h.forEach((a, c) => {
    var ye;
    let p = Re(c), S = a.title ? ` data-id="${Le(a.title)}"` : "", L = u.type === "band" ? Math.min(a.data.length, rt) : a.data.length;
    if (a.type === "bar") {
      let F = (Ke++ - (K - 1) / 2) * ct - (ct - Vt) / 2, xt = "";
      for (let R = 0; R < L; R++) {
        let D = j(a.data[R][1]);
        if (D === void 0)
          continue;
        let U = ie(R, L), tt = re(Bt(D)), et = Math.min(nt, tt), P = Math.max(nt, tt), k = r ? G(U, et) : G(U, 0) + F, C = r ? J(U, 0) + F : J(U, P), H = r ? (P - et) * _ : ct - Vt, z = r ? ct - Vt : (P - et) * X;
        if (xt += `<rect x="${f(k)}" y="${f(C)}" width="${f(H)}" height="${f(z)}"/>`, !g)
          continue;
        let Q = String(D), Tt = e.width(Q, x, 0), W = tt >= nt ? 1 : -1, $e = k + H / 2, we = C + z / 2, ve = "middle";
        if (r) {
          if (z < x)
            continue;
          $e = (W > 0 ? k + H : k) + W * 6, ve = W > 0 ? "start" : "end";
        } else {
          if (Tt + 2 > Ht / K)
            continue;
          we = (W > 0 ? C : C + z) - W * (v / 2 + 2);
        }
        Ft += `<text x="${f($e)}" y="${f(we + x * 0.35)}" text-anchor="${ve}">${Q}</text>`;
      }
      oe += `<g class="pele-series pele-bars"${S} fill="${p}">${xt}</g>`;
      return;
    }
    let I = "", be = "", qt = !1, ft = 0, B = NaN;
    for (let F = 0; F < L; F++) {
      let xt = j(a.data[F][1]);
      if (xt === void 0) {
        B = NaN;
        continue;
      }
      let R = ie(F, L), D = Bt(xt), U = D >= 0 && D <= 1;
      if (B !== B)
        U && (I += `M${f(G(R, D))},${f(J(R, D))}`), qt = U;
      else {
        let k = D - B, C = 0, H = 1;
        if (k !== 0) {
          let z = -B / k, Q = (1 - B) / k;
          C = Math.max(C, Math.min(z, Q)), H = Math.min(H, Math.max(z, Q));
        } else
          U || (C = 2);
        if (C <= H) {
          let z = ft + (R - ft) * C, Q = B + k * C, Tt = ft + (R - ft) * H, W = B + k * H;
          (!qt || C > 0) && (I += `M${f(G(z, Q))},${f(J(z, Q))}`), I += `L${f(G(Tt, W))},${f(J(Tt, W))}`;
        }
        qt = U;
      }
      if (ft = R, B = D, !U)
        continue;
      let tt = G(R, D), et = J(R, D);
      Ht >= 12 && (be += `<circle cx="${f(tt)}" cy="${f(et)}" r="3"/>`);
      let P = M((ye = a.pointLabels) == null ? void 0 : ye[F], x, 4e3);
      if (P.height > 0) {
        let k = P.width / 2;
        Qt += r ? Lt(P, tt + 10, et, "start") : Lt(P, Math.max(Math.min(tt, _t - k), T + k), et - 6 - P.height / 2, "middle");
      }
    }
    ce += `<g class="pele-series pele-line"${S} fill="${p}">` + (I ? `<path d="${I}" fill="none" stroke="${p}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>` : "") + be + "</g>";
  });
  let kt = "";
  ht.height > 0 && (kt += `<g transform="translate(${f(d + ht.height / 2)},${f(V + X / 2)}) rotate(-90)">${ut(ht, 0, 0, "")}</g>`), kt += ut(bt, T + _ / 2, N - d - bt.height / 2, "");
  let Wt = "", fe = 0;
  for (let a of pt)
    fe += Math.max(ze, a.label.height + 6);
  let jt = V + Math.max(0, (X - fe) / 2), Kt = _t + zt + Ye;
  for (let { index: a, label: c } of pt) {
    let p = Math.max(ze, c.height + 6);
    if (jt + p > N)
      break;
    let S = jt + p / 2, L = Re(a);
    Wt += `<g class="pele-legend-item" data-id="${Le(h[a].title)}">` + (h[a].type === "bar" ? `<rect x="${f(Kt)}" y="${f(S - st / 2)}" width="${st}" height="${st}" rx="2" fill="${L}"/>` : `<path d="M${f(Kt)},${f(S)}h${st}" stroke="${L}" stroke-width="2" stroke-linecap="round"/>`) + ut(c, Kt + st + 8 + c.width / 2, S, "") + "</g>", jt += p;
  }
  let qe = ut(w, b / 2, d + w.height / 2, ' class="pele-title" font-weight="var(--_tw)"') + (Pt ? `<path class="pele-grid" d="${Pt}" stroke="var(--_a)"/>` : "") + `<g class="pele-plot">${oe}${ce}</g>` + (Z ? `<path class="pele-axis" d="${Z}" fill="none" stroke="var(--_b)"/>` : "") + (St ? `<g class="pele-axis-labels" font-size="${n}" fill="var(--_m)">${St}</g>` : "") + (kt ? `<g class="pele-axis-titles" font-size="${n}">${kt}</g>` : "") + (Ft ? `<g class="pele-data-labels" font-size="${x}">${Ft}</g>` : "") + (Qt ? `<g class="pele-point-labels" font-size="${x}">${Qt}</g>` : "") + (Wt ? `<g class="pele-legend" font-size="${n}">${Wt}</g>` : "");
  return { svg: ai("xychart", b, N, o, l, t, qe), width: b, height: N, links: [] };
}
var mi = { type: "xychart", section: "xyChart", parse(t, i, l) {
  let s = new ni();
  return s.title = l, ri(t, s), s;
}, render: oi };
export {
  mi as xychart
};
//# sourceMappingURL=WE7EXA47-9f427725.js.map

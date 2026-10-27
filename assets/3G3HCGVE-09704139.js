import { b as L, s as Q, u as tt, r as et } from "./lazy-950901f8.js";
var it = /[&<>"\x00-\x08\x0b\x0c\x0e-\x1f\x7f\ud800-\udfff\ufffe\uffff]/u, lt = /[&<>"]|[\x00-\x08\x0b\x0c\x0e-\x1f\x7f\ud800-\udfff\ufffe\uffff]+/gu, rt = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }, nt = /[\x00-\x08\x0b\x0c\x0e-\x1f\x7f\ud800-\udfff\ufffe\uffff]/u;
function k(t) {
  return it.test(t) ? t.replace(lt, (e) => {
    var l;
    return (l = rt[e]) != null ? l : "";
  }) : t;
}
function O(t) {
  return k(L(t));
}
var A = [];
for (let t = 0; t < 100; t++)
  A.push(t === 0 ? "" : t % 10 === 0 ? "." + t / 10 : "." + (t < 10 ? "0" + t : t));
function $(t) {
  let e = Math.round(t * 100);
  if (e === 0)
    return "0";
  if (e > 0) {
    if (e < 1e11) {
      let l = Math.floor(e / 100);
      return l + A[e - l * 100];
    }
  } else if (e > -1e11) {
    let l = -e, i = Math.floor(l / 100);
    return "-" + i + A[l - i * 100];
  }
  return String(e / 100);
}
function Zt(t, e, l, i, r) {
  var c;
  let s = t.lines;
  if (s.length === 0)
    return "";
  let a = t.lineHeight, n = t.heights, f = t.size * 0.35, h = l - t.height / 2, o = s.length === 1 && s[0].length === 1 ? s[0][0] : void 0;
  if (o && o.icon === void 0 && o.math === void 0 && o.style === 0)
    return `<text${i} x="${$(e)}" y="${$(h + a / 2 + f)}" text-anchor="middle">${k(o.text)}</text>`;
  let u = mt(t), d = i, g;
  i = xt(i, u);
  let p = "", x = "";
  for (let m = 0; m < s.length; m++) {
    let v = s[m], z = n ? n[m] : a, y = h + z / 2, _ = y + f, R = !1;
    for (let b of v)
      (b.icon !== void 0 || b.math) && (R = !0);
    if (R) {
      let b = e - t.widths[m] / 2;
      for (let w of v) {
        if (w.math) {
          let H = `x="${$(b)}" y="${$(y - w.math.height / 2)}" width="${$(w.math.width)}" height="${$(w.math.height)}"`;
          g != null || (g = dt(d)), x += g.halo === void 0 ? ut(w.math, H, t.size, g.attrs) : `<rect ${H} rx="2" fill="${g.halo}"/>`;
        } else if (w.icon !== void 0) {
          let H = t.size * 1.1, J = (c = r == null ? void 0 : r(w.icon)) != null ? c : "";
          x += `<svg class="pele-icon" data-icon="${O(w.icon)}" x="${$(b)}" y="${$(y - H / 2)}" width="${$(H)}" height="${$(H)}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${J}</svg>`;
        } else
          w.text !== "" && (p += `<tspan x="${$(b)}" y="${$(_)}" text-anchor="start"${q(w.style & ~u)}>${k(w.text)}</tspan>`);
        b += w.width;
      }
    } else {
      for (let b = 0; b < v.length; b++) {
        let w = v[b], H = b === 0 ? ` x="${$(e)}" y="${$(_)}"` : "";
        p += `<tspan${H}${q(w.style & ~u)}>${k(w.text)}</tspan>`;
      }
      v.length === 0 && (p += `<tspan x="${$(e)}" y="${$(_)}"> </tspan>`);
    }
    h += z;
  }
  return `<text${i} text-anchor="middle" xml:space="preserve">${p}</text>${x}`;
}
var st = / fill="([^"]*)"/, ot = / stroke="([^"]*)"/, ft = / style="([^"]*)"/, at = /(?:^|;)\s*fill:([^;]*)/, ht = /(?:^|;)\s*opacity:([^;]*)/;
function dt(t) {
  var r, s, a, n, f, h, o, u, d;
  let e = (s = (r = ft.exec(t)) == null ? void 0 : r[1]) != null ? s : "", l = ((h = (f = (a = at.exec(e)) == null ? void 0 : a[1]) != null ? f : (n = st.exec(t)) == null ? void 0 : n[1]) != null ? h : "").trim();
  if (l === "none")
    return { attrs: "", halo: (u = (o = ot.exec(t)) == null ? void 0 : o[1]) != null ? u : "none" };
  let i = (d = ht.exec(e)) == null ? void 0 : d[1].trim();
  return { attrs: (l === "" ? "" : ` color="${l}"`) + (i ? ` opacity="${i}"` : "") };
}
function ut(t, e, l, i) {
  return "svg" in t ? `<svg class="pele-math" ${e} overflow="visible"${i}>${t.svg}</svg>` : `<foreignObject class="pele-math" ${e} overflow="visible"${i}><div xmlns="http://www.w3.org/1999/xhtml" style="display:flex;align-items:center;justify-content:center;width:100%;height:100%;font-size:${$(l)}px;line-height:normal;white-space:nowrap">${t.html}</div></foreignObject>`;
}
var G = ' font-weight="var(--_w)"', K = ' font-style="italic"', ct = ' text-decoration="underline"', P = ' font-family="var(--_fm)"', gt = ' baseline-shift="sub" font-size="smaller"', pt = ' baseline-shift="super" font-size="smaller"';
function q(t) {
  return (t & 1 ? G : "") + (t & 2 ? K : "") + (t & 4 ? P : "") + (t & 32 ? ct : "") + (t & 8 ? gt : t & 16 ? pt : "");
}
function mt(t) {
  let e = 7, l = !1;
  for (let i of t.lines)
    for (let r of i)
      r.icon !== void 0 || r.text === "" || (e &= r.style, l = !0);
  return l ? e : 0;
}
function xt(t, e) {
  return t + (e & 1 && !t.includes(' font-weight="') ? G : "") + (e & 2 && !t.includes(' font-style="') ? K : "") + (e & 4 && !t.includes(' font-family="') ? P : "");
}
var $t = 1.5, U = 1.3, wt = /<br\s*\/?>|\\n|\n/gi, I = /<\/?([a-zA-Z][\w-]*)(?:\s[^<>]*)?\/?>/y, B = /(fa[bklrs]?):fa-([\w-]+)/g, vt = /[<\\\n*_]|fa[bklrs]?:fa-/, yt = /* @__PURE__ */ new Map([["b", 1], ["strong", 1], ["i", 2], ["em", 2], ["cite", 2], ["dfn", 2], ["var", 2], ["code", 4], ["kbd", 4], ["samp", 4], ["tt", 4], ["sub", 8], ["sup", 16], ["u", 32], ["ins", 32]]), bt = 24, _t = new Set("a abbr address article aside audio b bdi bdo big blockquote body br button caption center cite code col colgroup data dd del details dfn dialog div dl dt em embed fieldset figcaption figure font footer form h1 h2 h3 h4 h5 h6 head header hr html i iframe img input ins kbd label legend li link main map mark meta meter nav noscript object ol optgroup option output p picture pre progress q rp rt ruby s samp script section select small source span strike strong style sub summary sup table tbody td template textarea tfoot th thead time title tr track tt u ul var video wbr".split(" ")), F = "\\u2e80-\\u9fff\\uf900-\\ufaff\\uff00-\\uff60", N = "\u3001\u3002\uFF0C\uFF0E\uFF1A\uFF1B\uFF01\uFF1F\uFF09\uFF3D\uFF5D\u300D\u300F\u3011\u3015\u3009\u300B\u3019\u3017\u30FC\u2026\u2025\u30FB\u309D\u309E\u3041\u3043\u3045\u3047\u3049\u3063\u3083\u3085\u3087\u308E\u30A1\u30A3\u30A5\u30A7\u30A9\u30C3\u30E3\u30E5\u30E7\u30EE,.:;!?)\\]}", kt = "\uFF08\uFF3B\uFF5B\u300C\u300E\u3010\u3014\u3008\u300A\u3018\u3016([{", zt = new RegExp(`[${F}]`), E = "\\u200b\\u00ad", Ht = new RegExp(`[${E}]`), St = new RegExp(`\\s*(?:[${kt}]*[${F}][${N}]*|[^\\s${F}${E}]+[${E}]*[${N}]*|[${E}]+)\\s*|\\s+`, "g"), X = 57344, Et = 6400, Mt = /\$\$(.+?)\$\$/g, Y = /[\ue000-\uf8ff]/, jt = /([\ue000-\uf8ff])/, S, Ct = { lines: [], widths: [], width: 0, height: 0, size: 0, lineHeight: 0 };
function Ot(t) {
  let e = t.split(`
`), l = 1 / 0;
  for (let i of e) {
    if (i.trim() === "")
      continue;
    let r = i.length - i.trimStart().length;
    r < l && (l = r);
  }
  return l === 1 / 0 || l === 0 ? t : e.map((i) => i.slice(Math.min(l, i.length - i.trimStart().length))).join(`
`);
}
function M(t) {
  return t !== void 0 && t.icon === void 0 && t.math === void 0;
}
function j(t, e, l) {
  if (e !== "") {
    if (S !== void 0 && Y.test(e)) {
      let i = S, r = e.split(jt);
      for (let s = 0; s < r.length; s++) {
        if (s % 2 === 0) {
          r[s] !== "" && C(t, r[s], l);
          continue;
        }
        let a = r[s].charCodeAt(0) - X, n = i.math[a];
        n ? t.push({ text: "", style: l, math: n, width: n.width }) : C(t, `$$${i.tex[a]}$$`, l);
      }
      return;
    }
    C(t, e, l);
  }
}
function C(t, e, l) {
  let i = L(e), r = t[t.length - 1];
  M(r) && r.style === l ? r.text += i : t.push({ text: i, style: l, width: 0 });
}
function At(t, e, l) {
  if (!e.includes(":fa-")) {
    j(t, e, l);
    return;
  }
  let i = 0;
  B.lastIndex = 0;
  let r;
  for (; (r = B.exec(e)) !== null; ) {
    let s = `${r[1]}:fa-${r[2]}`;
    if (j(t, e.slice(i, r.index), l), i = r.index + r[0].length, et(s) !== "")
      t.push({ text: "", style: l, icon: s, width: 0 });
    else if (e[i] === " ")
      i++;
    else if (i === e.length) {
      let a = t[t.length - 1];
      M(a) && (a.text = a.text.trimEnd());
    }
  }
  j(t, e.slice(i), l);
}
function Ft(t, e, l, i, r) {
  var u;
  let s = r.style, a = 0, n = "", f = 0, h = e.length, o = () => {
    var d;
    At(t, n, s | ((d = r.shifts[r.shifts.length - 1]) != null ? d : 0)), n = "";
  };
  for (; f < h; ) {
    let d = e[f];
    if (d === "<") {
      I.lastIndex = f;
      let g = I.exec(e);
      if (g && g.index === f) {
        let p = g[1].toLowerCase(), x = e[f + 1] === "/", c = (u = yt.get(p)) != null ? u : 0;
        if (c & bt) {
          o();
          let m = r.shifts.lastIndexOf(c);
          x ? m !== -1 && r.shifts.splice(m, 1) : r.shifts.push(c);
        } else
          c && (o(), r.style = x ? r.style & ~c | i & c : r.style | c, s = x ? s & ~c | i & c : s | c);
        if (c || _t.has(p)) {
          f += g[0].length;
          continue;
        }
      }
    } else if (l && (d === "*" || d === "_")) {
      let g = e[f + 1] === d, p = g ? 1 : 2, x = g ? 2 : 1, c = (a & p) === 0, m = f > 0 ? e[f - 1] : " ", v = f + x < h ? e[f + x] : " ", z = c && v.trim() !== "" && e.indexOf(g ? d + d : d, f + x) !== -1, y = !c && m.trim() !== "", _ = d === "_" && /\w/.test(m) && /\w/.test(v);
      if ((z || y) && !_) {
        o(), a = z ? a | p : a & ~p, s = z ? s | p : s & ~p | i & p, f += x;
        continue;
      }
    }
    n += d, f++;
  }
  o();
}
function Lt(t, e, l) {
  let i = 0;
  for (let r of t)
    r.width = r.icon !== void 0 ? l * 1.25 : r.math ? r.math.width : e.width(r.text, l, r.style), i += r.width;
  return i;
}
function Z(t, e, l, i, r, s) {
  var h;
  let a = [], n = 0, f = (o = !1) => {
    let u = a[a.length - 1];
    if (M(u)) {
      let d = u.text.trimEnd();
      if (o && u.text.endsWith("\xAD") && (d = d.slice(0, -1) + "-"), d !== u.text) {
        u.text = d;
        let g = e.width(d, l, u.style);
        n += g - u.width, u.width = g;
      }
    }
    r.push(a), s.push(n), a = [], n = 0;
  };
  for (let o of t) {
    if (o.icon !== void 0 || o.math) {
      let c = o.math ? o.math.width : l * 1.25;
      n > 0 && n + c > i && f(), a.push({ ...o, width: c }), n += c;
      continue;
    }
    let u = (h = o.text.match(St)) != null ? h : [], d = o.text.includes("\xAD"), g = d ? u.length : 0, p = new Float64Array(g), x = new Float64Array(g + 1);
    for (let c = g - 1; c >= 0; c--) {
      let m = u[c].endsWith("\xAD"), v = u[c].trimEnd();
      p[c] = e.width(m ? v.slice(0, -1) : v, l, o.style), x[c] = m ? c === g - 1 ? o === t[t.length - 1] ? p[c] : 1 / 0 : p[c] + x[c + 1] : p[c];
    }
    for (let c = 0; c < u.length; c++) {
      let m = u[c], v = d ? p[c] : e.width(m.trimEnd(), l, o.style), z = !d || !m.endsWith("\xAD") ? n + v <= i : n + e.width(m.slice(0, -1) + "-", l, o.style) <= i || n + x[c] <= i;
      n > 0 && !z && (f(m.trimStart() === m), m = m.trimStart());
      let y = a[a.length - 1];
      if (M(y) && y.style === o.style) {
        if (y.text += m, v > 0 || m.trimEnd() !== m) {
          let _ = y.width;
          y.width = e.width(y.text, l, y.style), n += y.width - _;
        }
      } else {
        let _ = e.width(m, l, o.style);
        a.push({ text: m, style: o.style, width: _ }), n += _;
      }
    }
  }
  (a.length > 0 || r.length === 0) && f();
}
function Jt(t, e, l, i, r, s = 0) {
  if (t === void 0 || t === "")
    return Ct;
  let a = Math.round(i * $t);
  if (Q() && t.includes("$$") && !Y.test(t)) {
    let n = { tex: [], math: [] }, f = t.replace(Mt, (h, o) => n.tex.length === Et ? h : (n.tex.push(o), String.fromCharCode(X + n.tex.length - 1)));
    if (n.tex.length > 0) {
      for (let h of n.tex)
        n.math.push(tt(L(h), i));
      return T(f, e, l, i, r, s, a, n);
    }
  }
  if (!vt.test(t) && !t.includes("&") && !t.includes("\uFB02")) {
    let n = t.trim(), f = l.width(n, i, s);
    if (f <= r || !(n.includes(" ") || zt.test(n) || Ht.test(n)))
      return { lines: [[{ text: n, style: s, width: f }]], widths: [f], width: f, height: a, size: i, lineHeight: a };
    let h = [], o = [];
    Z([{ text: n, style: s, width: f }], l, i, r, h, o);
    let u = 0;
    for (let g of o)
      g > u && (u = g);
    let d = h.length > 1 ? Math.round(i * U) : a;
    return { lines: h, widths: o, width: u, height: h.length * d, size: i, lineHeight: d };
  }
  return T(t, e, l, i, r, s, a);
}
function T(t, e, l, i, r, s, a, n) {
  let f = S;
  S = n;
  try {
    let h = Rt(t, e, l, i, r, s, a);
    return n ? qt(h) : h;
  } finally {
    S = f;
  }
}
function Rt(t, e, l, i, r, s, a) {
  let n = e ? Ot(t.replace(/\r\n?/g, `
`)).trim() : t.trim(), f = [], h = [], o = 0, u = { style: s, shifts: [] };
  for (let g of n.split(wt)) {
    let p = [];
    Ft(p, g.trim(), e, s, u);
    let x = Lt(p, l, i);
    x > r ? Z(p, l, i, r, f, h) : (f.push(p), h.push(x));
  }
  for (let g of h)
    g > o && (o = g);
  let d = f.length > 1 ? Math.round(i * U) : a;
  return { lines: f, widths: h, width: o, height: f.length * d, size: i, lineHeight: d };
}
function qt(t) {
  let e;
  for (let i = 0; i < t.lines.length; i++) {
    let r = t.lineHeight;
    for (let s of t.lines[i])
      s.math && (r = Math.max(r, Math.ceil(s.math.height + t.size / 4)));
    r !== t.lineHeight && e === void 0 && (e = t.lines.map(() => t.lineHeight)), e && (e[i] = r);
  }
  if (e === void 0)
    return t.heights === void 0 ? t : { ...t, heights: void 0, height: t.lines.length * t.lineHeight };
  let l = 0;
  for (let i of e)
    l += i;
  return { ...t, heights: e, height: l };
}
function Qt(t) {
  for (let e of t)
    if (e.math)
      return !0;
  return !1;
}
function te(t, e) {
  let l = t.heights;
  if (!l)
    return (e + 0.5) * t.lineHeight;
  let i = 0;
  for (let r = 0; r < e; r++)
    i += l[r];
  return i + l[e] / 2;
}
function ee(t, e) {
  let l = t.widths[e], i = t.heights ? t.heights[e] : t.lineHeight, r = { lines: [t.lines[e]], widths: [l], width: l, height: i, size: t.size, lineHeight: t.lineHeight };
  return i !== t.lineHeight && (r.heights = [i]), r;
}
var It = "--_bg:var(--pele-bg,#fff);--_fg:var(--pele-fg,#1f1f1f);--_m:var(--pele-muted,#6e6e6e);--_l:var(--pele-line,#1f1f1f);--_s:var(--pele-surface,#f3f3f3);--_a:var(--pele-surface-alt,#e6e6e6);--_b:var(--pele-border,#8a8a8a);--_c:var(--pele-accent,#5b7bd5);color:var(--_fg)", ie = "var(--_fm)", Bt = "var(--pele-radius,4px)", Nt = ' style="rx:var(--_r)"';
function le(t) {
  let e = t.indexOf(' style="');
  return e < 0 ? t + Nt : `${t.slice(0, e + 8)}rx:var(--_r);${t.slice(e + 8)}`;
}
var re = "var(--pele-critical,#e45756)", W = String.raw`(?:"[^"'\\\n<>{}();:@]*"|'[^"'\\\n<>{}();:@]*'|[\p{L}\p{N}_-][\p{L}\p{N}_ .-]*)`, Tt = new RegExp(String.raw`^\s*${W}(?:\s*,\s*${W})*\s*$`, "u");
function D(t, e) {
  return t && Tt.test(t) ? t : e;
}
function Wt(t, e, l) {
  return `;--_fm:var(--pele-font-mono,${D(l, "monospace")});font:${t}px sans-serif;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;font-family:var(--pele-font,${D(e, "sans-serif")})`;
}
var Dt = /* @__PURE__ */ new Set(["fill", "fill-opacity", "stroke", "stroke-width", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-opacity", "opacity", "rx", "ry"]), Vt = /* @__PURE__ */ new Set(["color", "font-size", "font-family", "font-weight", "font-style", "text-decoration", "letter-spacing", "word-spacing", "opacity"]), Gt = /url\s*\(|expression\s*\(|javascript:|[<>{};\\]|@import|image-set|\/\*/i, V = { shape: "", line: "", text: "", stroke: void 0, bold: !1, italic: !1, fontSize: void 0 };
function ne(t) {
  if (t.length === 0)
    return V;
  let e = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map();
  for (let h of t) {
    let o = h.indexOf(":");
    if (o <= 0)
      continue;
    let u = h.slice(0, o).trim().toLowerCase(), d = h.slice(o + 1).replace(/!important/gi, "").trim();
    d === "" || Gt.test(d) || nt.test(d) || (Dt.has(u) && e.set(u, d), Vt.has(u) && l.set(u === "color" ? "fill" : u, d));
  }
  if (e.size === 0 && l.size === 0)
    return V;
  let i = "", r = "";
  for (let [h, o] of e)
    i += `${h}:${o};`, h !== "fill" && h !== "fill-opacity" && (r += `${h}:${o};`);
  let s = "";
  for (let [h, o] of l)
    s += `${h}:${o};`;
  let a = l.get("font-weight"), n = l.get("font-size"), f = n && /^[\d.]+(px)?$/.test(n) ? parseFloat(n) : void 0;
  return { shape: i ? ` style="${k(i)}"` : "", line: r ? ` style="${k(r)}"` : "", text: s ? ` style="${k(s)}"` : "", stroke: e.get("stroke"), bold: a === "bold" || a === "bolder" || Number(a) >= 600, italic: l.get("font-style") === "italic", fontSize: f !== void 0 && f > 0 && f <= 200 ? f : void 0 };
}
var Kt = /[^\w-]+/g;
function se(t) {
  let e = t.replace(Kt, " ").trim();
  return e === "" ? "" : " " + e;
}
var Pt = ["#4c78a8", "#f58518", "#54a24b", "#e45756", "#72b7b2", "#eeca3b", "#b279a2", "#9d755d"];
function oe(t) {
  let e = (t % 8 + 8) % 8;
  return `var(--pele-series-${e + 1},${Pt[e]})`;
}
var Ut = [["tw", "title"], ["hw", "heading"], ["w", "bold"]], Xt = /var\(--_(r|tw|hw|w)\)/g;
function fe(t, e, l, i, r, s, a) {
  var g;
  let n = k((g = r.idPrefix) != null ? g : "pele"), f = "", h = "";
  s.accTitle && (f += `<title id="${n}-title">${O(s.accTitle)}</title>`, h += ` aria-labelledby="${n}-title"`), s.accDescr && (f += `<desc id="${n}-desc">${O(s.accDescr)}</desc>`, h += ` aria-describedby="${n}-desc"`);
  let o = r.responsive === !1 ? "" : "max-width:100%;height:auto;", u = /* @__PURE__ */ new Set();
  for (let [, p] of a.matchAll(Xt))
    if (u.add(p), u.size === 4)
      break;
  let d = u.has("r") ? `;--_r:${Bt}` : "";
  for (let [p, x] of Ut)
    u.has(p) && (d += `;--_${p}:var(--pele-${x}-weight,bold)`);
  return `<svg xmlns="http://www.w3.org/2000/svg" class="pele pele-${t}" viewBox="0 0 ${e} ${l}" width="${e}" height="${l}" style="${o}${It}${d}${k(Wt(i, r.fontFamily, r.fontFamilyMono))}" fill="var(--_fg)" role="graphics-document document" aria-roledescription="${t}"${h}>` + f + a + "</svg>";
}
export {
  xt as $,
  nt as F,
  O as L,
  k as S,
  Zt as V,
  ne as a,
  Nt as b,
  mt as c,
  qt as d,
  Jt as e,
  le as f,
  ie as g,
  oe as h,
  te as i,
  q as j,
  re as l,
  fe as m,
  Qt as n,
  ee as s,
  se as u,
  $ as x
};
//# sourceMappingURL=3G3HCGVE-09704139.js.map

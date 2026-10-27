import { s as ie } from "./5THPTBWS-363b7521.js";
import { l as de, h as he } from "./DKTLEL5E-e2b762b2.js";
import { M as fe, $ as me, v as ue, x as $e, D as ve, U as xe, B as ge, z as ye } from "./IU7WZTP6-20f2a5ec.js";
import { e as Me, a as we, h as Se, L as Te, x, S as F, u as ne, f as re, V as ze, m as Re } from "./3G3HCGVE-09704139.js";
import { d as Ae, b as De } from "./lazy-950901f8.js";
function _e(i) {
  let e = [], t = [];
  for (let n of i) {
    let l = n.type === "Leaf", a = { name: n.name, children: l ? void 0 : [] };
    for (a.classSelector = n.classSelector, n.cssCompiledStyles && (a.cssCompiledStyles = n.cssCompiledStyles), l && n.value !== void 0 && (a.value = n.value); t.length > 0 && t[t.length - 1].level >= n.level; )
      t.pop();
    t.length === 0 ? e.push(a) : t[t.length - 1].node.children.push(a), l || t.push({ node: a, level: n.level });
  }
  return e;
}
function Ne(i, e) {
  var l, a;
  let t = /* @__PURE__ */ new Map();
  for (let o of i.TreemapRows) {
    if (o.$type !== "ClassDefStatement")
      continue;
    let c = t.get(o.className);
    c || t.set(o.className, c = []);
    let h = ((l = o.styleText) != null ? l : "").replace(/\\,/g, "\xA7\xA7\xA7").replace(/,/g, ";").replace(/§§§/g, ",");
    for (let p of h.split(";"))
      c.push(p);
  }
  let n = [];
  for (let o of i.TreemapRows) {
    if (o.$type !== "TreemapRow")
      continue;
    let c = o.item, h = c.classSelector ? t.get(c.classSelector) : void 0;
    n.push({ level: (a = o.indent) != null ? a : 0, name: c.name, type: c.$type, value: c.$type === "Leaf" ? c.value : void 0, classSelector: c.classSelector, cssCompiledStyles: h && h.length > 0 ? h : void 0 });
  }
  return { type: "treemap", title: i.title || e, accTitle: i.accTitle ? i.accTitle.replace(/^\s+/g, "") : void 0, accDescr: i.accDescr ? i.accDescr.replace(/\n\s+/g, `
`) : void 0, roots: _e(n), classes: t };
}
var oe = [fe, me, ue(String.raw`\w`), { name: "TREEMAP_KEYWORD", pattern: /treemap-beta|treemap/y }, { name: "CLASS_DEF", pattern: /classDef\s+([a-zA-Z_][a-zA-Z0-9_]+)(?:\s+([^;\r\n]*))?(?:;)?/y }, { name: "STYLE_SEPARATOR", pattern: /:::/y }, { name: "SEPARATOR", pattern: /:/y }, { name: "COMMA", pattern: /,/y }, { name: "INDENTATION", pattern: /[ \t]{1,}/y }, { name: "WS", pattern: /[ \t]+/y, hidden: !0 }, { name: "ML_COMMENT", pattern: /\%\%[^\n]*/y, hidden: !0 }, { name: "NL", pattern: /\r?\n/y, hidden: !0 }, { name: "ID2", pattern: /[a-zA-Z_][a-zA-Z0-9_]*/y }, { name: "NUMBER2", pattern: /[0-9_\.\,]+/y }, { name: "STRING2", pattern: /"[^"]*"|'[^']*'/y }], be = /classDef\s+([A-Z_a-z]\w+)(?:\s+([^\n\r;]*))?;?/;
function ke(i) {
  let e = new $e(ve(i, oe, "treemap"), oe, "treemap"), t = e.kinds, n = { $type: "Treemap", TreemapRows: [] }, l = () => e.accept(5) ? e.expect(12) : void 0;
  for (e.expect(3); e.kind !== -1; ) {
    let a = e.kind;
    if (a === 0) {
      n.accDescr = xe(e.take());
      continue;
    }
    if (a === 1) {
      n.accTitle = ge(e.take());
      continue;
    }
    if (a === 2) {
      n.title = ye(e.take());
      continue;
    }
    a !== 8 && a !== 14 && a !== 4 && e.fail("a node, a class definition, or a title");
    let o = a === 8 ? e.take().length : void 0;
    if (e.kind === 4) {
      let d = be.exec(e.take()), s = { $type: "ClassDefStatement", className: d[1] };
      d[2] && (s.styleText = d[2]), o !== void 0 && (s.indent = o), n.TreemapRows.push(s);
      continue;
    }
    let c = e.expect(14).slice(1, -1), h = t[e.i] === 8 ? e.i + 1 : e.i, p;
    t[h] === 6 || t[h] === 7 ? (e.i = h + 1, e.accept(8), p = { $type: "Leaf", name: c, value: parseFloat(e.expect(13).replace(/,/g, "")) }) : p = { $type: "Section", name: c };
    let r = l();
    r !== void 0 && (p.classSelector = r);
    let f = { $type: "TreemapRow", item: p };
    o !== void 0 && (f.indent = o), n.TreemapRows.push(f);
  }
  return n;
}
var se = /^(?:.?[<>=^])?([-+( ])?(\$)?0?\d*(,)?(?:\.(\d+))?(~)?([a-zA-Z%])?$/;
function ce(i) {
  let e = "";
  for (let t = i.length; t > 0; t -= 3)
    e = i.slice(Math.max(0, t - 3), t) + (e ? "," + e : "");
  return e;
}
function Fe(i) {
  var o, c;
  let e = (o = se.exec(i === "$0,0" ? "$," : i)) != null ? o : se.exec(","), t = e[1] === "+", n = e[3] !== void 0, l = e[4] === void 0 ? void 0 : Math.min(Number(e[4]), 20), a = (c = e[6]) != null ? c : "";
  return (h) => {
    var d;
    let p = Math.abs(h), r, f = "";
    if (a === "f" ? r = p.toFixed(l != null ? l : 6) : a === "%" ? (r = (p * 100).toFixed(l != null ? l : 6), f = "%") : a === "d" ? r = Math.round(p).toFixed(0) : a === "e" ? r = p.toExponential(l != null ? l : 6) : r = String(Number(p.toPrecision(Math.max(1, l != null ? l : 12)))), e[5] && r.includes(".") && !r.includes("e") && (r = r.replace(/\.?0+$/, "")), n && !r.includes("e")) {
      let s = r.indexOf(".");
      r = s === -1 ? ce(r) : ce(r.slice(0, s)) + r.slice(s);
    }
    return (h < 0 ? "-" : t ? "+" : "") + ((d = e[2]) != null ? d : "") + r + f;
  };
}
function pe(i, e, t) {
  let n = i.children === void 0 && Number.isFinite(i.value) && i.value > 0 ? i.value : 0;
  return { node: i, parent: e, series: t, value: n, children: [], x: 0, y: 0, w: 0, h: 0 };
}
function Ce(i, e, t, n, l, a, o) {
  let c = e, h = 0;
  for (; h < i.length; ) {
    let p = l * a / c, r = Math.min(l, a), f = i[h].value * p, d = f, s = Math.max(r * r * d / (f * f), f * f / (r * r * d)), y = h + 1;
    for (; y < i.length; ) {
      let g = i[y].value * p, $ = f + g, u = Math.max(r * r * d / ($ * $), $ * $ / (r * r * g));
      if (u > s)
        break;
      s = u, f = $, y++;
    }
    let m = f / r, M = 0;
    for (let g = h; g < y; g++) {
      let $ = i[g], u = g === y - 1 ? r - M : $.value * p / m, T = l >= a ? t : t + M, D = l >= a ? n + M : n, b = Math.round(T + o / 2), C = Math.round(D + o / 2);
      $.x = b, $.y = C, $.w = Math.round(T + (l >= a ? m : u) - o / 2) - b, $.h = Math.round(D + (l >= a ? u : m) - o / 2) - C, M += u, c -= $.value;
    }
    l >= a ? (t += m, l -= m) : (n += m, a -= m), h = y;
  }
}
function Ee(i, e, t, n) {
  var f;
  let l = i.map((d, s) => pe(d, void 0, s)), a = l.slice();
  for (let d = 0; d < a.length; d++) {
    let s = a[d];
    for (let y of (f = s.node.children) != null ? f : []) {
      let m = pe(y, s, s.series);
      s.children.push(m), a.push(m);
    }
  }
  for (let d = a.length - 1; d >= 0; d--) {
    let s = a[d];
    s.parent && (s.parent.value += s.value);
  }
  let { gap: o, header: c, side: h } = n, p = [], r = (d, s, y, m, M) => {
    if (m <= 0 || M <= 0)
      return;
    let g = d.filter((u) => u.value > 0).sort((u, T) => T.value - u.value), $ = 0;
    for (let u of g)
      $ += u.value;
    if (!(g.length === 0 || !Number.isFinite($))) {
      Ce(g, $, s - o / 2, y - o / 2, m + o, M + o, o);
      for (let u of g)
        u.w > 0 && u.h > 0 && p.push(u);
    }
  };
  r(l, 0, 0, e, t);
  for (let d = 0; d < p.length; d++) {
    let s = p[d];
    s.children.length > 0 && r(s.children, s.x + h, s.y + c, s.w - 2 * h, s.h - c - h);
  }
  return p;
}
var V = 28, P = 6, Z = 1.25;
function I(i, e, t, n, l) {
  var o;
  let a = (o = i.treemap) == null ? void 0 : o[e];
  return typeof a == "number" && a >= n ? Math.min(a, l) : t;
}
function Le(i, e, t) {
  var W, Y, G, K, j, q, H;
  let n = (W = t.fontSize) != null ? W : 16, l = Math.round(n * 0.875), a = Math.round(n * 0.75), o = Math.round(n * 0.5625), c = (Y = t.measurer) != null ? Y : Ae(t.fontFamily, t.fontFamilyMono), h = (G = e.treemap) != null ? G : {}, p = (K = t.padding) != null ? K : I(e, "diagramPadding", 8, 0, 2e3), r = Math.round(de(t, I(e, "nodeWidth", 64, 1, 400) * 10, 200, 2 * p)), f = Math.round(I(e, "nodeHeight", 40, 1, 400) * 10), d = h.showValues !== !1, s = Fe(typeof h.valueFormat == "string" ? h.valueFormat : ","), y = Ee(i.roots, r, f, { gap: I(e, "padding", 4, 0, 200), header: V, side: P }), m = Me(i.title, !1, c, n, he(t), 1), M = m.height > 0 ? m.height + 8 : 0, g = p + Math.max(0, (m.width - r) / 2), $ = p + M, u = "", T = "";
  for (let v of y) {
    let _ = v.node, z = we((j = _.cssCompiledStyles) != null ? j : []), J = Se(v.series), E = g + v.x, B = $ + v.y, Q = De(_.name).trim(), N = d ? s(v.value) : "", X = `data-id="${Te(_.name)}">`, ee = `<rect x="${x(E)}" y="${x(B)}" width="${x(v.w)}" height="${x(v.h)}" fill="${J}"`;
    if (_.children !== void 0) {
      let R = "";
      if (v.h >= V) {
        let S = v.w - 2 * P - 4, A = N ? c.width(N, a, 0) : 0, L = A > 0 && S - A - 12 >= 3 * l, O = ie(Q, L ? S - A - 12 : S, l, l, c, 1), le = B + V / 2 + 1;
        O && (R += `<text x="${x(E + P + 2)}" y="${x(le + l * 0.35)}" font-weight="var(--_hw)"${z.text}>${F(O.text)}</text>`), L && (R += `<text class="pele-value" x="${x(E + v.w - P - 2)}" y="${x(le + a * 0.35)}" font-size="${a}" text-anchor="end" fill="var(--_m)"${z.text}>${F(N)}</text>`);
      }
      let k = /[";]fill:/.test(z.shape) ? "" : ' fill-opacity="0.12"';
      u += `<g class="pele-node pele-section${ne((q = _.classSelector) != null ? q : "")}" ${X}${ee}${re(`${k} stroke="${J}"${z.shape}`)}/>${R}</g>`;
      continue;
    }
    let U = "", te = v.w - 8, ae = Math.min(n, Math.floor((v.h - 4) / Z)), w = ae >= o ? ie(Q, te, ae, o, c) : void 0;
    if (w) {
      let R = x(E + v.w / 2), k = B + v.h / 2, S = Math.max(o, Math.round(w.size * 0.8)), A = (w.size + S) * Z;
      if (N && A <= v.h - 4 && c.width(N, S, 0) <= te) {
        let L = k - A / 2 + w.size * Z / 2, O = k + A / 2 - S * Z / 2;
        U = `<text x="${R}" y="${x(L + w.size * 0.35)}" font-size="${x(w.size)}"${z.text}>${F(w.text)}</text><text class="pele-value" x="${R}" y="${x(O + S * 0.35)}" font-size="${x(S)}"${z.text}>${F(N)}</text>`;
      } else
        U = `<text x="${R}" y="${x(k + w.size * 0.35)}" font-size="${x(w.size)}"${z.text}>${F(w.text)}</text>`;
    }
    T += `<g class="pele-node pele-leaf${ne((H = _.classSelector) != null ? H : "")}" ${X}${ee}${re(z.shape)}/>${U}</g>`;
  }
  let D = Math.ceil(Math.max(r, m.width) + 2 * p), b = Math.ceil(f + M + 2 * p), C = ze(m, D / 2, p + m.height / 2, ' class="pele-title" font-weight="var(--_tw)"') + (u ? `<g class="pele-sections" font-size="${l}">${u}</g>` : "") + (T ? `<g class="pele-leaves" text-anchor="middle" fill="var(--_bg)">${T}</g>` : "");
  return { svg: Re("treemap", D, b, n, t, i, C), width: D, height: b, links: [] };
}
var Ue = { type: "treemap", parse: (i, e, t) => Ne(ke(i), t), render: Le };
export {
  Ue as treemap
};
//# sourceMappingURL=XPNITXKI-8db5ce7a.js.map

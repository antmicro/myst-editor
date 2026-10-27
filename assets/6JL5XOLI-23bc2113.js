var ze = Object.defineProperty;
var Ke = (t, l, r) => l in t ? ze(t, l, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[l] = r;
var G = (t, l, r) => (Ke(t, typeof l != "symbol" ? l + "" : l, r), r);
import { Z as Ze, K as Fe, V as Ge, b as ae, d as He, i as Ie, a as Qe } from "./lazy-950901f8.js";
import { f as Je, h as Re } from "./DKTLEL5E-e2b762b2.js";
import { L as ge, x as M, h as $e, S as q, e as qe, m as Be, V as je, a as et } from "./3G3HCGVE-09704139.js";
var tt = class {
  constructor() {
    G(this, "type", "sankey");
    G(this, "nodes", []);
    G(this, "links", []);
    G(this, "title");
    G(this, "accTitle");
    G(this, "accDescr");
    G(this, "lookup", /* @__PURE__ */ new Map());
  }
  findOrCreateNode(t) {
    let l = this.lookup.get(t);
    return l === void 0 && (l = { id: t, index: this.nodes.length }, this.lookup.set(t, l), this.nodes.push(l)), l;
  }
  addLink(t, l, r) {
    this.links.push({ source: t, target: l, value: r });
  }
}, pe = ["$end", "STUCK", "SANKEY", "NEWLINE", "COMMA", "DQUOTE", "NON_ESCAPED_TEXT", "ESCAPED_TEXT", "EOF"];
function Se(t) {
  return t >= 32 && t <= 126 && t !== 34 && t !== 44 || t >= 160 && t <= 55295 || t >= 57344 && t <= 65533 || t >= 65536 && t <= 1114111;
}
function lt(t) {
  let l = t.length, r = [], n = [], u = [], g = [], i = 0, s = 0, c = ($, v, d) => {
    r.push($), n.push(t.slice(v, d)), u.push(v), s = d;
  }, m = ($) => t.slice(s, s + $.length).toLowerCase() === $ && !Ie(t.charCodeAt(s + $.length));
  for (; s < l; ) {
    let $ = t.charCodeAt(s), v = s, d = s;
    if (i === 2) {
      if ($ === 34 && t.charCodeAt(s + 1) !== 34) {
        g.length > 0 && (i = g.pop()), c(5, s, s + 1);
        continue;
      }
      for (; d < l; ) {
        let h = t.codePointAt(d);
        if (Se(h) || h === 44 || h === 13 || h === 10)
          d += h > 65535 ? 2 : 1;
        else if (h === 34 && t.charCodeAt(d + 1) === 34)
          d += 2;
        else
          break;
      }
      c(7, s, d);
    } else {
      if (i === 0 && ($ | 32) === 115) {
        let h = m("sankey-beta") ? 11 : m("sankey") ? 6 : 0;
        if (h > 0) {
          g.push(i), i = 1, c(2, s, s + h);
          continue;
        }
      }
      if ($ === 10 || $ === 13 && t.charCodeAt(s + 1) === 10) {
        c(3, s, $ === 10 ? s + 1 : s + 2);
        continue;
      }
      if ($ === 44) {
        c(4, s, s + 1);
        continue;
      }
      if ($ === 34) {
        g.push(i), i = 2, c(5, s, s + 1);
        continue;
      }
      for (; d < l; ) {
        let h = t.codePointAt(d);
        if (!Se(h))
          break;
        d += h > 65535 ? 2 : 1;
      }
      c(6, s, d);
    }
    if (d === v)
      return c(1, s, s), { types: r, texts: n, starts: u };
  }
  return c(i === 2 ? 7 : 8, l, l), c(0, l, l), { types: r, texts: n, starts: u };
}
var Oe = /[\n\r]+/g, nt = /[\x00-\x08\x0b\x0c\x0e-\x1f\ud800-\udfff\ufffe\uffff]/u;
function me(t) {
  return t === 10 || t === 13 ? !1 : t < 128 ? t === 32 || t === 9 || t === 11 || t === 12 : t === 160 || t === 5760 || t >= 8192 && t <= 8202 || t === 8232 || t === 8233 || t === 8239 || t === 8287 || t === 12288 || t === 65279;
}
function rt(t, l) {
  let r = t.length;
  for (; r > 0 && me(t.charCodeAt(r - 1)); )
    r--;
  let n = "", u = 0, g = !1;
  for (let i = 0; i < r; ) {
    let s = t.charCodeAt(i);
    if (g)
      s === 34 && (t.charCodeAt(i + 1) === 34 ? i++ : g = !1), i++;
    else if (s === 34)
      g = !0, i++;
    else if (me(s)) {
      let c = i + 1;
      for (; me(t.charCodeAt(c)); )
        c++;
      let m = t.charCodeAt(i - 1), $ = t.charCodeAt(c);
      (i === 0 || $ === 10 || $ === 13 || (m === 10 || m === 13) && $ !== 44) && (n += t.slice(u, i), l.push([i, c, 0]), u = c), i = c;
    } else
      i++;
  }
  return r < t.length && l.push([r, t.length, 0]), n + t.slice(u, r);
}
function _e(t, l) {
  let r = [], n = rt(t, r), u = n.replace(Oe, `
`), g = u.trim();
  if (l !== void 0) {
    let i = u.length - u.trimStart().length;
    l.push(r, Ze(n, Oe, 1), [[0, i, 0], [i + g.length, u.length, 0]]);
  }
  return g;
}
function ot(t, l, r = t) {
  let { types: n, texts: u, starts: g } = lt(t), i = 0, s = (d, h) => {
    let N = [];
    r !== t && _e(r, N);
    let C = d > 0 && d >= t.length ? Fe(N, t.length - 1) + 1 : Fe(N, d);
    return Ge("sankey", r, C, h);
  }, c = (d) => {
    let h = n[i], N = h === 1 ? pe[n[i - 1]] : pe[h];
    throw s(g[i], `Expecting ${d}, got '${N}'`);
  }, m = (d, h = "") => {
    n[i] !== d && c(`'${pe[d]}'${h}`), i++;
  }, $ = () => {
    if (n[i] === 6)
      return u[i++];
    n[i] !== 5 && c("'DQUOTE', 'NON_ESCAPED_TEXT'"), i++, n[i] !== 7 && c("'ESCAPED_TEXT'");
    let d = u[i++];
    return m(5), d;
  }, v = () => {
    let d = g[i], h = $().trim().replaceAll('""', '"');
    if (nt.test(ae(h)))
      throw s(d, "Invalid XML character in node name");
    return h;
  };
  for (m(2), m(3); ; ) {
    let d = v();
    m(4, ", 'NEWLINE', 'EOF'");
    let h = v();
    m(4, ", 'NEWLINE', 'EOF'");
    let N = g[i], C = parseFloat($());
    if (!Number.isFinite(C))
      throw s(N, "Expecting a number");
    let B = l.findOrCreateNode(d), Y = l.findOrCreateNode(h);
    if (l.addLink(B, Y, C), n[i] !== 3)
      break;
    i++;
  }
  n[i] === 8 && i++, n[i] !== 0 && c("'NEWLINE', 'EOF'");
}
var it = 6;
function xe(t, l) {
  if (t.length > 8) {
    t.sort(l);
    return;
  }
  for (let r = 1; r < t.length; r++) {
    let n = t[r], u = r - 1;
    for (; u >= 0 && l(t[u], n) > 0; )
      t[u + 1] = t[u], u--;
    t[u + 1] = n;
  }
}
function at(t, l) {
  let r = t.nodes.length, n = t.links.map((e) => ({ source: e.source.index, target: e.target.index, value: Number.isFinite(e.value) && e.value > 0 ? e.value : 0, thickness: 0, sourceY: 0, targetY: 0 })), u = [], g = [];
  for (let e = 0; e < r; e++)
    u.push([]), g.push([]);
  n.forEach((e, o) => {
    u[e.source].push(o), g[e.target].push(o);
  });
  let i = new Int32Array(r), s = new Int32Array(r), c = [];
  for (let e = 0; e < r; e++)
    s[e] = g[e].length, s[e] === 0 && c.push(e);
  for (let e = 0; e < c.length; e++) {
    let o = c[e];
    for (let f of u[o]) {
      let y = n[f].target;
      i[y] < i[o] + 1 && (i[y] = i[o] + 1), --s[y] === 0 && c.push(y);
    }
  }
  if (c.length < r) {
    let e = 0;
    for (; s[e] === 0; )
      e++;
    let o = new Uint8Array(r);
    for (; o[e] === 0; ) {
      o[e] = 1;
      for (let f of g[e])
        if (s[n[f].source] > 0) {
          e = n[f].source;
          break;
        }
    }
    throw new Qe(`Sankey diagrams cannot have circular links, and "${t.nodes[e].id}" is part of one.`, "semantic", { type: "sankey" });
  }
  let m = 1;
  for (let e = 0; e < r; e++)
    i[e] + 1 > m && (m = i[e] + 1);
  let $ = new Int32Array(r);
  for (let e = r - 1; e >= 0; e--) {
    let o = c[e];
    for (let f of u[o])
      $[o] < $[n[f].target] + 1 && ($[o] = $[n[f].target] + 1);
  }
  let v = 0;
  for (let e of n)
    e.value > v && (v = e.value);
  let d = v > 0 ? 1 / v : 0, h = [], N = new Float64Array(r), C = [];
  for (let e = 0; e < m; e++)
    C.push([]);
  let B = m > 1 ? (l.width - l.nodeWidth) / (m - 1) : 0;
  for (let e = 0; e < r; e++) {
    let o;
    if (l.alignment === "left")
      o = i[e];
    else if (l.alignment === "right")
      o = m - 1 - $[e];
    else if (l.alignment === "center") {
      if (o = i[e], g[e].length === 0 && u[e].length > 0) {
        o = m;
        for (let L of u[e])
          i[n[L].target] - 1 < o && (o = i[n[L].target] - 1);
      }
    } else
      o = u[e].length > 0 ? i[e] : m - 1;
    let f = 0, y = 0, x = 0, A = 0;
    for (let L of g[e])
      f += n[L].value * d, x += n[L].value;
    for (let L of u[e])
      y += n[L].value * d, A += n[L].value;
    N[e] = Math.max(f, y), h.push({ layer: o, value: Math.max(x, A), x: o * B, y: 0, height: 0 }), C[o].push(e);
  }
  let Y = 1;
  for (let e of C)
    e.length > Y && (Y = e.length);
  let W = Y > 1 ? Math.min(l.nodePadding, l.height / (Y - 1)) : l.nodePadding, F = 1 / 0;
  for (let e of C) {
    let o = 0;
    for (let f of e)
      o += N[f];
    o > 0 && (F = Math.min(F, (l.height - (e.length - 1) * W) / o));
  }
  (!Number.isFinite(F) || F < 0) && (F = 0);
  let H = Math.max(0, l.labelHeight - W), I = (e) => {
    for (let o of C) {
      let f = (o.length - 1) * W;
      for (let y of o)
        f += Math.max(N[y] * e, H);
      if (f > l.height + 1e-6)
        return !1;
    }
    return !0;
  };
  if (H > 0 && !I(F))
    if (I(0)) {
      let e = 0;
      for (let o = 0; o < 40; o++) {
        let f = (e + F) / 2;
        I(f) ? e = f : F = f;
      }
      F = e;
    } else
      H = 0;
  let P = new Float64Array(r);
  for (let e of n)
    e.thickness = e.value * d * F;
  for (let e of C) {
    let o = 0;
    for (let y of e)
      h[y].height = N[y] * F, P[y] = Math.max(0, H - h[y].height) / 2, h[y].y = o + P[y], o += h[y].height + 2 * P[y] + W;
    let f = (l.height - o + W) / (e.length + 1);
    e.forEach((y, x) => h[y].y += f * (x + 1));
  }
  let E = (e) => h[e].y + h[e].height / 2, J = new Float64Array(n.length), U = new Float64Array(n.length), se = (e, o) => E(n[e].target) - E(n[o].target) || e - o, j = (e, o) => E(n[e].source) - E(n[o].source) || e - o, ee = (e, o) => E(e) - E(o) || e - o, te = (e) => {
    let o = 0;
    xe(u[e], se);
    for (let f of u[e])
      J[f] = o + n[f].thickness / 2, o += n[f].thickness;
  }, le = (e) => {
    let o = 0;
    xe(g[e], j);
    for (let f of g[e])
      U[f] = o + n[f].thickness / 2, o += n[f].thickness;
  }, V = () => {
    for (let e = 0; e < r; e++)
      te(e), le(e);
  }, Z = (e, o, f) => {
    for (let x of e) {
      let A = f ? g[x] : u[x];
      if (A.length === 0)
        continue;
      f ? le(x) : te(x);
      let L = 0, R = 0, he = 0;
      for (let T of A) {
        let Q = f ? h[n[T].source].y + J[T] - U[T] : h[n[T].target].y + U[T] - J[T];
        L += Q * n[T].thickness, R += n[T].thickness, he += E(f ? n[T].source : n[T].target) - h[x].height / 2;
      }
      let ne = R > 0 ? L / R : he / A.length;
      h[x].y += (ne - h[x].y) * o;
    }
    xe(e, ee);
    let y = 0;
    for (let x of e)
      h[x].y - P[x] < y && (h[x].y = y + P[x]), y = h[x].y + h[x].height + P[x] + W;
    y = l.height;
    for (let x = e.length - 1; x >= 0; x--) {
      let A = e[x];
      h[A].y + h[A].height + P[A] > y && (h[A].y = y - h[A].height - P[A]), y = h[A].y - P[A] - W;
    }
  };
  V();
  for (let e = 0; e < it; e++) {
    let o = Math.pow(0.99, e);
    for (let f = m - 2; f >= 0; f--)
      Z(C[f], o, !1);
    V();
    for (let f = 1; f < m; f++)
      Z(C[f], o, !0);
    V();
  }
  for (let e = 0; e < n.length; e++)
    n[e].sourceY = h[n[e].source].y + J[e], n[e].targetY = h[n[e].target].y + U[e];
  return { nodes: h, links: n };
}
var z = 6, st = 15, ht = 1.8, Ye = 300;
function ft(t) {
  let l = 2166136261, r = 5381;
  for (let n = 0; n < t.length; n++) {
    let u = t.charCodeAt(n);
    l = Math.imul(l ^ u, 16777619), r = Math.imul(r, 33) + u | 0;
  }
  return (l >>> 0).toString(36) + (r >>> 0).toString(36);
}
function De(t) {
  return typeof t == "object" && t !== null && !Array.isArray(t);
}
function de(t, l, r, n, u) {
  let g = t[l];
  return typeof g == "number" && g >= n ? Math.min(g, u) : r;
}
function Le(t, l) {
  let r = t[l];
  return typeof r == "string" || typeof r == "number" && Number.isFinite(r) ? String(r) : "";
}
function Te(t) {
  return Math.abs(t) < 1e15 ? Math.round(t * 100) / 100 : t;
}
function Pe(t) {
  return typeof t == "string" ? et([`fill:${t}`]).shape : "";
}
function ut(t, l, r) {
  let n = De(l.sankey) ? l.sankey : {}, u = de(n, "width", 600, 1, 1e4);
  return Je(r, u, 160, (g) => gt(t, n, r, g, u));
}
function gt(t, l, r, n, u) {
  var ve, Ae, Ee, Ce, be;
  let g = (ve = r.fontSize) != null ? ve : 16, i = Math.round(g * 0.625), s = Math.max(i, Math.round(g * 0.875 * Math.min(1, n / u))), c = (Ae = r.measurer) != null ? Ae : He(r.fontFamily, r.fontFamilyMono), m = (Ee = r.padding) != null ? Ee : 8, $ = de(l, "height", 400, 1, 1e4), v = Math.min(de(l, "nodeWidth", 10, 1, 200), n), d = l.showValues !== !1, h = ae(Le(l, "prefix")), N = ae(Le(l, "suffix")), C = l.labelStyle === "outlined", B = l.nodeAlignment === "left" || l.nodeAlignment === "right" || l.nodeAlignment === "center" ? l.nodeAlignment : "justify", Y = typeof l.linkColor == "string" ? l.linkColor : "gradient", W = (a) => at(t, { width: n, height: $, nodeWidth: v, nodePadding: de(l, "nodePadding", 12, 0, 200) + (d ? st : 0), labelHeight: a * 1.15, alignment: B }), F = W(s), H = /* @__PURE__ */ new Map(), I = 1;
  for (let a of F.nodes) {
    let p = ((Ce = H.get(a.layer)) != null ? Ce : 0) + 1;
    H.set(a.layer, p), p > I && (I = p);
  }
  let P = Math.max(i, Math.round($ / I / ht));
  P < s && (s = P, F = W(s));
  let { nodes: E, links: J } = F, U = s * 1.5, se = /* @__PURE__ */ new Map();
  if (De(l.nodeColors))
    for (let [a, p] of Object.entries(l.nodeColors)) {
      let k = Pe(p);
      k && se.set(a, k);
    }
  let j = (a) => {
    var p;
    return (p = se.get(t.nodes[a].id)) != null ? p : "";
  }, ee = (a) => {
    var p, k;
    return (k = (p = /^ style="fill:(.*);"$/.exec(j(a))) == null ? void 0 : p[1]) != null ? k : $e(a);
  }, te = 0, le = 0;
  E.forEach((a) => {
    a.value > le && (le = a.value, te = a.layer);
  });
  let V = 0, Z = n, e = 0, o = $, f = E.map((a, p) => {
    let k = ae(t.nodes[p].id), S = d ? `${h}${Te(a.value)}${N}` : "", _ = c.width(S ? `${k} ${S}` : k, s, 0), w = C ? a.layer >= te : a.x < n / 2, O = w ? a.x + v + z : a.x - z, D = a.y + a.height / 2;
    return V = Math.min(V, w ? O : O - _), Z = Math.max(Z, w ? O + _ : O), e = Math.min(e, D - s * 0.75), o = Math.max(o, D + s * 0.75), { value: S, width: _, after: w, left: w ? O : O - _, y: D };
  }), y = /* @__PURE__ */ new Map();
  if (E.length <= Ye)
    for (let a of f) {
      let p = Math.floor(a.y / U);
      for (let k of [p - 2, p - 1, p, p + 1, p + 2]) {
        let S = y.get(k);
        S ? S.push(a) : y.set(k, [a]);
      }
    }
  let x = "", A = "";
  E.forEach((a, p) => {
    let k = t.nodes[p].id, S = ae(k), _ = Math.max(a.height, 1);
    A += `<rect class="pele-sankey-node" data-id="${ge(k)}" x="${M(a.x)}" y="${M(a.y)}" width="${M(v)}" height="${M(_)}" rx="${M(Math.min(2, _ / 2))}" fill="${$e(p)}"${j(p)}/>`;
    let w = f[p], O = (ue, ie) => {
      var K;
      return ((K = y.get(Math.floor(ie / U))) != null ? K : []).some((b) => b !== w && Math.abs(b.y - ie) < U && ue < b.left + b.width + z && ue + w.width > b.left - z);
    };
    if (E.length <= Ye && O(w.left, w.y))
      e:
        for (let ue of [0, -U, U])
          for (let ie of [w.after, !w.after]) {
            let K = ie ? a.x + v + z : a.x - z - w.width, b = w.y + ue;
            if (O(K, b) || K < V || K + w.width > Z || b - s * 0.75 < e || b + s * 0.75 > o || E.some((X, ye) => ye !== p && K < X.x + v + z && K + w.width > X.x - z && b - s * 0.75 < X.y + X.height && b + s * 0.75 > X.y))
              continue;
            let Xe = Math.max(0, a.y - b, b - a.y - a.height);
            if (!E.some((X, ye) => ye !== p && X.x === a.x && Math.max(0, X.y - b, b - X.y - X.height) <= Xe)) {
              w.left = K, w.y = b, w.after = ie;
              break e;
            }
          }
    let { value: D, after: re, y: fe } = w, oe = re ? a.x + v + z : a.x - z, Ne = ` x="${M(oe)}" y="${M(fe + s * 0.35)}" text-anchor="${re ? "start" : "end"}"`, Ve = q(S) + (D ? ` <tspan class="pele-sankey-value" fill="var(--_m)">${q(D)}</tspan>` : "");
    x += `<g class="pele-label" data-id="${ge(k)}">` + (C ? `<text${Ne} fill="none" stroke="var(--_bg)" stroke-width="3" stroke-linejoin="round">${q(S)}${D ? " " + q(D) : ""}</text>` : "") + `<text${Ne}>${Ve}</text></g>`;
  });
  let L = Y === "gradient" || Y === "source" || Y === "target" ? "" : Pe(Y), R = (be = r.idPrefix) != null ? be : "", he = Y === "gradient" && /^[\w-]+$/.test(R), ne = /* @__PURE__ */ new Map(), T = "";
  for (let a of J) {
    let p = Y === "target" ? a.target : a.source, k = Math.max(a.thickness, 1) / 2, S = E[a.source].x + v, _ = E[a.target].x, w = `fill="${$e(p)}"${L || j(p)}`;
    if (he) {
      let fe = `x1="${M(S)}" x2="${M(_)}"><stop offset="0" stop-color="${ee(a.source)}"/><stop offset="1" stop-color="${ee(a.target)}"/>`, oe = `${R}-sankey-${ft(fe)}`;
      ne.set(oe, `<linearGradient id="${oe}" gradientUnits="userSpaceOnUse" ${fe}</linearGradient>`), w = `fill="url(#${oe}) ${ee(a.source)}"`;
    }
    let O = M((S + _) / 2), D = ge(t.nodes[a.source].id), re = ge(t.nodes[a.target].id);
    T += `<path class="pele-sankey-link" data-id="${D}-&gt;${re}" d="M${M(S)},${M(a.sourceY - k)}C${O},${M(a.sourceY - k)} ${O},${M(a.targetY - k)} ${M(_)},${M(a.targetY - k)}L${M(_)},${M(a.targetY + k)}C${O},${M(a.targetY + k)} ${O},${M(a.sourceY + k)} ${M(S)},${M(a.sourceY + k)}Z" ${w}><title>${D} \u2192 ${re}: ${q(h)}${Te(a.value)}${q(N)}</title></path>`;
  }
  let Q = qe(t.title, !1, c, g, Re(r), 1), ke = Q.height > 0 ? Q.height + 12 : 0, Me = Math.max(Z - V, Q.width), We = m - V + (Me - (Z - V)) / 2, Ue = m + ke - e, ce = Math.ceil(Me + 2 * m), we = Math.ceil(o - e + ke + 2 * m);
  return { svg: Be("sankey", ce, we, g, r, t, je(Q, ce / 2, m + Q.height / 2, ' class="pele-title" font-weight="var(--_tw)"') + `<g transform="translate(${M(We)},${M(Ue)})">` + (ne.size > 0 ? `<defs>${[...ne.values()].join("")}</defs>` : "") + `<g class="pele-sankey-links" fill-opacity="0.4">${T}</g><g class="pele-sankey-nodes">${A}</g><g class="pele-labels" font-size="${s}">${x}</g></g>`), width: ce, height: we, links: [] };
}
var pt = { type: "sankey", parse(t, l, r) {
  let n = new tt();
  return r && (n.title = r), ot(_e(t), n, t), n;
}, render: ut };
export {
  pt as sankey
};
//# sourceMappingURL=6JL5XOLI-23bc2113.js.map

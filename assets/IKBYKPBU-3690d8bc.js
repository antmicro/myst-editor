var qe = Object.defineProperty;
var ze = (a, s, n) => s in a ? qe(a, s, { enumerable: !0, configurable: !0, writable: !0, value: n }) : a[s] = n;
var V = (a, s, n) => (ze(a, typeof s != "symbol" ? s + "" : s, n), n);
import { Y as Ce, W as He, X as Qe } from "./ZENPE7TI-bb8feaaa.js";
import { g as Se } from "./ECH2OJJK-8814648a.js";
import { P as Ue, V as re, R as ve } from "./XQLH73R6-5278eaeb.js";
import { c as Ye, h as Be } from "./DKTLEL5E-e2b762b2.js";
import { e as De, h as Fe, x as h, u as Ee, L as Ge, V as te, m as Je, i as Ke, s as Pe } from "./3G3HCGVE-09704139.js";
import { a as Ze, d as je, r as Oe } from "./lazy-950901f8.js";
var et = 11, tt = class {
  constructor() {
    V(this, "type", "mindmap");
    V(this, "title");
    V(this, "nodes", []);
    V(this, "getType", He);
    V(this, "baseLevel", 0);
    V(this, "open", []);
  }
  addNode(a, s, n, p) {
    let M = this.nodes.length === 0;
    M && (this.baseLevel = a), a -= this.baseLevel;
    let u = this.open, $ = u.length;
    for (; $ > 0 && u[$ - 1].level >= a; )
      $--;
    let x = u[$ - 1];
    if (!x && !M)
      throw new Ze(`There can be only one root. No parent could be found for ("${n}")`, "semantic", { type: "mindmap" });
    let b = { id: this.nodes.length, nodeId: s, level: a, descr: n, type: p, children: [], isRoot: M };
    x && (b.section = x.isRoot ? x.children.length % et : x.section, x.children.push(b)), u.length = $, u.push(b), this.nodes.push(b);
  }
  decorateNode(a) {
    let s = this.nodes[this.nodes.length - 1];
    !a || !s || (a.icon && (s.icon = a.icon), a.class && (s.class = a.class));
  }
};
function lt(a, s) {
  Ce(a, s, !1);
}
var at = ["", "rounded", "rect", "circle", "cloud", "bang", "hex"], ke = "stadium", nt = 36, rt = 8, ot = 18, it = 52, We = 28, Ie = 6, ht = 12, st = 0.22, oe = 6, ie = 28, Le = 12, Ve = 8, Ne = 10;
function dt(a, s, n, p) {
  if (a.lines.length < 2)
    return te(a, s + a.width / 2, n, ' class="pele-label"', p);
  let M = "", u = n - a.height / 2;
  for (let $ = 0; $ < a.lines.length; $++)
    M += te(Pe(a, $), s + a.widths[$] / 2, u + Ke(a, $), ' class="pele-label"', p);
  return M;
}
function mt(a, s, n) {
  return Ye(n, (p) => ct(a, s, n, p));
}
function ct(a, s, n, p) {
  var pe, ge, ye, Me, ue, xe, Ae;
  let M = (pe = n.fontSize) != null ? pe : 16, u = (ge = n.measurer) != null ? ge : je(n.fontFamily, n.fontFamilyMono), $ = (ye = n.padding) != null ? ye : 8, x = n.icons, b = (Me = s.mindmap) == null ? void 0 : Me.maxNodeWidth, _e = typeof b == "number" && b > 0 ? Math.min(b, 2e3) : 200, z = M * 1.25, v = a.nodes, r = v.length, I = new Int32Array(r), D = new Int32Array(r);
  for (let t = 0; t < r; t++)
    for (let e of v[t].children)
      I[e.id] = t, D[e.id] = D[t] + 1;
  let Re = p && n.maxWidth !== void 0 && n.maxWidth > 0 ? n.maxWidth - 2 * $ : 1 / 0, he = new Array(r), E = new Array(r), m = new Float64Array(r), c = new Float64Array(r), G = new Float64Array(r), F = new Float64Array(r), J = new Uint8Array(r);
  for (let t = 0; t < r; t++) {
    let e = v[t];
    J[t] = e.icon !== void 0 && Oe(e.icon) !== "" ? 1 : 0;
    let d = Math.min(_e, Math.max(72, Re - D[t] * ie - 2 * Ie - (J[t] ? z + oe : 0))), o = he[t] = De(e.descr, !0, u, M, d), g = o.width + (J[t] ? z + (o.width > 0 ? oe : 0) : 0), y = Math.max(o.height, Math.round(M * 1.5)), l = at[e.type] || (t === 0 ? ke : "");
    if (p && t === 0 && l !== "rect" && l !== "rounded" && (l = ke), E[t] = l, l === "") {
      let i = e.children.length > 0;
      m[t] = g + 2 * (i ? ht : Ie), c[t] = y + (i ? 6 : 0), F[t] = c[t] / 2;
    } else {
      let i = Ue(l, g, y);
      m[t] = i.w, c[t] = i.h, G[t] = i.dy, F[t] = i.h / 2;
    }
  }
  let C = new Float64Array(r), H = new Float64Array(r), K = new Float64Array(r), se = new Float64Array(r), de = 0, me = (t, e, d, o) => {
    let g = 0, y = 0;
    for (let f = e; f < d; f++) {
      let A = t[f].id;
      H[A] = g, y = t[f].children.length > 0 || f + 1 < d && t[f + 1].children.length > 0 ? Math.max(o, ot) : o, g += C[A] + y;
    }
    de = g - y;
    let l = t[e].id, i = t[d - 1].id;
    return (H[l] + K[l] + F[l] + H[i] + K[i] + F[i]) / 2;
  };
  for (let t = r - 1; t > 0; t--) {
    let e = v[t].children;
    if (e.length === 0) {
      C[t] = c[t];
      continue;
    }
    let d = me(e, 0, e.length, rt) - F[t], o = Math.min(0, d);
    C[t] = Math.max(de, d + c[t]) - o, K[t] = d - o, se[t] = -o;
  }
  let N = new Float64Array(r), _ = new Float64Array(r), P = new Float64Array(r), Q = new Int8Array(r), ce = new Float64Array(r);
  if (p) {
    let t = 0;
    for (let e = 0; e < r; e++)
      e > 0 && I[e] === 0 && (t += Ne), N[e] = D[e] * ie + m[e] / 2, _[e] = t, t += c[e] + Ne;
  } else if (r > 0) {
    let t = v[0].children, e = t.length, d = 0;
    for (let l of t)
      d += C[l.id];
    let o = e, g = 1 / 0, y = 0;
    for (let l = 1; l < e; l++) {
      y += C[t[l - 1].id];
      let i = Math.abs(2 * y - d + (2 * l - e) * We);
      i < g && (g = i, o = l);
    }
    for (let l = 0, i = o, f = 1; l < e; l = i, i = e, f = -1) {
      let A = me(t, l, i, We);
      for (let k = l; k < i; k++) {
        let T = t[k].id;
        P[T] = H[T] - A, Q[T] = f;
      }
    }
    _[0] = -c[0] / 2;
    for (let l = 0; l < r; l++) {
      l > 0 && (_[l] = P[l] + K[l]);
      for (let i of v[l].children) {
        let f = i.id;
        l > 0 && (Q[f] = Q[l], P[f] = P[l] + se[l] + H[f]), N[f] = N[l] + Q[f] * (m[l] / 2 + (l > 0 ? nt : it) + m[f] / 2);
      }
    }
  }
  let S = 0, Z = 0, j = 0, le = 0, ae = "", O = "", ee = "", R = "", Te = (t) => {
    ee !== "" && (ae += `<g class="pele-branch pele-section-${t != null ? t : 0}"><g class="pele-edges" fill="none" stroke="${R}" stroke-width="1.5">${O}</g>${ee}</g>`, O = ee = "");
  };
  for (let t = 1; t <= r; t++) {
    let e = t % r, d = v[e], o = E[e], g = he[e], y = N[e], l = _[e];
    if (S = Math.min(S, y - m[e] / 2), Z = Math.max(Z, y + m[e] / 2), j = Math.min(j, l), le = Math.max(le, l + c[e]), (e === 0 || I[e] === 0) && Te(v[t - 1].section), e > 0 && p) {
      I[e] === 0 && (R = Fe((ue = d.section) != null ? ue : 0));
      let w = I[e], X = w === 0 ? Math.min(Math.max(Le, c[0] / 2), ie - Ve) : Le, L = N[w] - m[w] / 2 + Math.min(X, m[w] / 2), Y = ce[w] || _[w] + c[w], B = y - m[e] / 2 + (o ? re(o, m[e], c[e], 3) : 0), W = l + F[e], q = Math.max(0, Math.min(Ve, B - L, W - Y));
      ce[w] = W - q, O += `<path class="pele-edge" d="M${h(L)},${h(Y)}V${h(W - q)}Q${h(L)},${h(W)} ${h(L + q)},${h(W)}H${h(B)}"/>`;
    } else if (e > 0) {
      I[e] === 0 && (R = Fe((xe = d.section) != null ? xe : 0));
      let w = I[e], X = Q[e], L = X > 0 ? 1 : 3, Y = N[w] + X * (m[w] / 2 - (E[w] ? re(E[w], m[w], c[w], L) : 0)), B = _[w] + F[w], W = y - X * m[e] / 2 + (o ? X * re(o, m[e], c[e], 4 - L) : 0), q = l + F[e], be = h((Y + W) / 2);
      O += `<path class="pele-edge" d="M${h(Y)},${h(B)}C${be},${h(B)} ${be},${h(q)} ${h(W)},${h(q)}"/>`;
    }
    let i = !o && d.children.length > 0, f = ` fill="${R}" fill-opacity="${st}" stroke="${R}"`, A = "";
    o ? A = e > 0 ? ve(o, m[e], c[e], f, ` stroke="${R}"`) : ve(o, m[e], c[e], ' fill="var(--_s)" stroke="var(--_b)"', ' stroke="var(--_b)"') : i && (A = `<rect x="${h(-m[e] / 2)}" y="${h(-c[e] / 2)}" width="${h(m[e])}" height="${h(c[e])}" rx="${h(c[e] / 2)}"${f}/>`);
    let k = 0;
    d.icon && J[e] && (k = (z + (g.width > 0 ? oe : 0)) / 2, A += Qe(d.icon, -k - g.width / 2, G[e] - z / 2, z, x));
    let T = `<g class="pele-node pele-shape-${o || (i ? "branch" : "text")}${e > 0 ? "" : " pele-root"}${Ee((Ae = d.class) != null ? Ae : "")}" data-id="${Ge(d.nodeId)}" transform="translate(${h(y)},${h(l + c[e] / 2)})">` + A + (p && !o ? dt(g, k - g.width / 2, G[e], x) : te(g, k, G[e], ' class="pele-label"', x)) + "</g>";
    e > 0 ? ee += T : ae += T;
  }
  let U = Se(a.title, u, M, Be(n)), fe = U.height > 0 ? U.height + 16 : 0, $e = Math.max(Z - S, U.width), ne = Math.ceil($e + 2 * $), we = Math.ceil(le - j + fe + 2 * $), Xe = te(U, ne / 2, $ + U.height / 2, ' class="pele-title" font-weight="var(--_tw)"') + `<g transform="translate(${h($ - S + ($e - Z + S) / 2)},${h($ + fe - j)})">${ae}</g>`;
  return { svg: Je("mindmap", ne, we, M, n, {}, Xe), width: ne, height: we, links: [] };
}
var ut = { type: "mindmap", math: !0, parse(a, s, n) {
  let p = new tt();
  return p.title = n, lt(a, p), p;
}, render: mt };
export {
  ut as mindmap
};
//# sourceMappingURL=IKBYKPBU-3690d8bc.js.map

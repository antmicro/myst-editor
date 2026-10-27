import { N as ce, $ as Me, R as Te, p as ve, A as Oe, C as Ie } from "./YTAM2TF7-f178d8af.js";
function me(o) {
  return o === "BT" || o === "LR" || o === "RL" ? o : "TB";
}
var Ye = 4e4, qe = 400, He = 500, Le = 1.5, De = 4;
function Ee(o, w, X, F) {
  let d = [];
  for (let G of o)
    d.push(G.x, G.y, G.w, G.h);
  let b = [];
  for (let G of w)
    b.push(G.labelX, G.labelY);
  let c = [];
  for (let G of X) {
    c.push(G.x, G.y);
    for (let z of G.ports)
      c.push(z.px, z.py);
  }
  return { nodes: d, routes: w.map((G) => G.route), labels: b, levels: c, total: F };
}
function We(o, w, X, F) {
  w.forEach((b, c) => {
    b.x = o.nodes[4 * c], b.y = o.nodes[4 * c + 1], b.w = o.nodes[4 * c + 2], b.h = o.nodes[4 * c + 3];
  }), X.forEach((b, c) => {
    b.route = o.routes[c], b.labelX = o.labels[2 * c], b.labelY = o.labels[2 * c + 1];
  });
  let d = 0;
  for (let b of F) {
    b.x = o.levels[d++], b.y = o.levels[d++];
    for (let c of b.ports)
      c.px = o.levels[d++], c.py = o.levels[d++];
  }
  return o.total;
}
var Xe = 24, pe = 0.5, Ge = 3, Fe = 2, ke = Math.max(3, Ge, Fe + 1), ye = 0.62, Ce = 128;
function ze(o) {
  return o.tracks ? 1 : o.straight ? 2 : 0;
}
function Ae(o, w, X = 0) {
  let F = 0;
  for (let h of w)
    h.src !== h.dst && h.route.length > 3 && (F += (h.route.length / 3 - 1) * ke);
  let d = new Float64Array(F), b = new Float64Array(F), c = new Float64Array(F), G = new Float64Array(F), z = new Float64Array(F), C = new Float64Array(F), _ = new Int32Array(F), L = new Uint8Array(F), v = 0, Z = 1 / 0, K = -1 / 0, oe = NaN, ne = NaN, P = NaN, ie = NaN, Q = (h, y, u, g, t, e) => {
    let r = v - 1;
    u === P && g === ie && (e === g && ne === g || t === u && oe === u) && _[r] === h && L[r] === y && (u - oe) * (t - u) + (g - ne) * (e - g) > 0 && (v--, u = oe, g = ne), oe = u, ne = g, P = t, ie = e, L[v] = y, d[v] = Math.min(u, t), c[v] = Math.max(u, t), b[v] = u <= t ? g : e, G[v] = u <= t ? e : g, z[v] = Math.min(g, e), C[v] = Math.max(g, e), z[v] < Z && (Z = z[v]), C[v] > K && (K = C[v]), _[v++] = h;
  };
  for (let h = 0; h < w.length; h++) {
    let y = w[h];
    if (y.src === y.dst)
      continue;
    let u = y.route, g = (l) => Math.abs(u[l] - u[l - 3]) < 0.01 || Math.abs(u[l + 1] - u[l - 2]) < 0.01, t = (l) => Math.abs(u[l] - u[l - 3]) + Math.abs(u[l + 1] - u[l - 2]), e = (l) => X === 0 && l > 0 && l < u.length - 3 && g(l) && g(l + 3) && t(l) >= 0.01 && t(l + 3) >= 0.01 && Math.abs(u[l] - u[l - 3]) < 0.01 != Math.abs(u[l + 3] - u[l]) < 0.01, r = u[0], i = u[1];
    for (let l = 3; l < u.length; l += 3) {
      let p = (l === 3 ? 1 : 0) | (l === u.length - 3 ? 2 : 0), n = r, s = i, A = u[l], a = u[l + 1];
      if (r = A, i = a, g(l) || X === 2) {
        if (!e(l)) {
          Q(h, p, n, s, A, a);
          continue;
        }
        let I = e(l - 3) ? t(l) / 2 : t(l), T = e(l + 3) ? t(l + 3) / 2 : t(l + 3), E = (A - u[l - 3]) / t(l), k = (a - u[l - 2]) / t(l), q = (u[l + 3] - A) / t(l + 3), R = (u[l + 4] - a) / t(l + 3), V = A - E * I, se = a - k * I;
        Q(h, p, n, s, V, se);
        let xe = A - E * I * (1 - ye), Be = a - k * I * (1 - ye), M = A + q * T * (1 - ye), O = a + R * T * (1 - ye);
        r = A + q * T, i = a + R * T;
        let W = p | (l + 3 === u.length - 3 ? 2 : 0), j = V, ee = se;
        for (let te = 1; te <= Fe; te++) {
          let Y = te / Fe, H = 1 - Y, U = H * H * H * V + 3 * H * H * Y * xe + 3 * H * Y * Y * M + Y * Y * Y * r, de = H * H * H * se + 3 * H * H * Y * Be + 3 * H * Y * Y * O + Y * Y * Y * i;
          Q(h, W, j, ee, U, de), j = U, ee = de;
        }
        continue;
      }
      if (X === 1) {
        let I = u[l + 2] === 0, T = I ? n : (n + A) / 2, E = I ? (s + a) / 2 : s;
        Q(h, p, n, s, T, E), Q(h, p, T, E, I ? A : T, I ? E : a), Q(h, p, I ? A : T, I ? E : a, A, a);
        continue;
      }
      let B = u[l + 2] === 0, x = B ? Ie(A - n, a - s) : Ie(a - s, A - n), f = n, N = s;
      for (let I = 1; I <= Ge; I++) {
        let T = I / Ge, E = 1 - T, k = T * T * (3 - 2 * T), q = 3 * x * T * E * E + 3 * (1 - x) * T * T * E + T * T * T, R = n + (A - n) * (B ? k : q), V = s + (a - s) * (B ? q : k);
        Q(h, p, f, N, R, V), f = R, N = V;
      }
    }
  }
  let $ = K > Z ? Math.round(Math.sqrt(v)) : 1, re = K > Z ? $ / (K - Z) : 0, J = (h) => Math.min($ - 1, Math.floor((h - Z) * re)), le = new Int32Array(v), D = new Int32Array($ + 1);
  for (let h = 0; h < v; h++) {
    le[h] = J(z[h]);
    for (let y = le[h], u = J(C[h]); y <= u; y++)
      D[y + 1]++;
  }
  for (let h = 0; h < $; h++)
    D[h + 1] += D[h];
  let ae = D.slice(0, $), m = new Int32Array(D[$]);
  for (let h = 0; h < v; h++)
    for (let y = le[h], u = J(C[h]); y <= u; y++)
      m[ae[y]++] = h;
  let fe = new Float64Array(w.length * 8), S = (h, y, u, g) => Math.abs(h[y] - h[u]) < pe && Math.abs(h[y] - h[g]) < pe || Math.abs(h[y + 1] - h[u + 1]) < pe && Math.abs(h[y + 1] - h[g + 1]) < pe;
  for (let h = 0; h < w.length; h++) {
    let y = w[h].route;
    if (y.length < 6)
      continue;
    let u = 3;
    for (; u + 3 < y.length && S(y, 0, u, u + 3); )
      u += 3;
    let g = y.length - 3, t = g - 3;
    for (; t >= 3 && S(y, g, t, t - 3); )
      t -= 3;
    fe.set([y[0], y[1], y[u], y[u + 1], y[t], y[t + 1], y[g], y[g + 1]], h * 8);
  }
  let ue = (h, y, u, g) => {
    let t = h * 8 + (y === 1 ? 0 : 4), e = fe[t], r = fe[t + 1], i = fe[t + 2] - e, l = fe[t + 3] - r, p = i * i + l * l, n = p > 0 ? Math.max(0, Math.min(1, ((u - e) * i + (g - r) * l) / p)) : 0;
    return Math.hypot(u - e - n * i, g - r - n * l) < pe;
  }, he = 0;
  for (let h = 0; h < $; h++) {
    let y = D[h + 1];
    if (y - D[h] > Ce)
      m.subarray(D[h], y).sort((u, g) => d[u] - d[g] || u - g);
    else
      for (let u = D[h] + 1; u < y; u++) {
        let g = m[u], t = u;
        for (; t > D[h] && d[m[t - 1]] > d[g]; t--)
          m[t] = m[t - 1];
        m[t] = g;
      }
    for (let u = D[h]; u < y; u++) {
      let g = m[u], t = c[g] - d[g], e = G[g] - b[g], r = le[g] === h;
      for (let i = u + 1; i < y; i++) {
        let l = m[i];
        if (d[l] > c[g])
          break;
        if (C[l] < z[g] || z[l] > C[g] || _[g] === _[l] || !r && le[l] !== h)
          continue;
        let p = t * (b[l] - b[g]) - e * (d[l] - d[g]), n = t * (G[l] - b[g]) - e * (c[l] - d[g]);
        if (p > 0 == n > 0)
          continue;
        let s = c[l] - d[l], A = G[l] - b[l], a = s * (b[g] - b[l]) - A * (d[g] - d[l]), B = s * (G[g] - b[l]) - A * (c[g] - d[l]);
        if (a > 0 == B > 0)
          continue;
        let x = w[_[g]], f = w[_[l]], N = a / (a - B), I = d[g] + N * t, T = b[g] + N * e, E = (k, q, R) => (L[g] & q) !== 0 && (L[l] & R) !== 0 || Math.abs(I - o[k].x) < o[k].w / 2 + Xe && Math.abs(T - o[k].y) < o[k].h / 2 + Xe || ue(_[g], q, I, T) && ue(_[l], R, I, T);
        x.src === f.src && E(x.src, 1, 1) || x.src === f.dst && E(x.src, 1, 2) || x.dst === f.src && E(x.dst, 2, 1) || x.dst === f.dst && E(x.dst, 2, 2) || he++;
      }
    }
  }
  return he;
}
function Re(o, w) {
  let X = (F) => {
    let d = /* @__PURE__ */ new Set();
    for (let b = o[F].parent; b >= 0 && !d.has(b); b = o[b].parent)
      d.add(b);
    return d;
  };
  for (let [F, d] of w) {
    if (F < 0 || d < 0 || F === d)
      continue;
    let b = X(F), c = X(d);
    for (let G of b)
      c.has(G) || (o[G].dir = void 0);
    for (let G of c)
      b.has(G) || (o[G].dir = void 0);
  }
}
function Ue(o, w, X, F) {
  for (let d of o)
    d.x += X, d.y += F;
  for (let d of w) {
    for (let b = 0; b < d.route.length; b += 3)
      d.route[b] += X, d.route[b + 1] += F;
    d.labelX += X, d.labelY += F;
  }
}
function _e(o, w, X = -1) {
  return { w: o, h: w, parent: X, isGroup: !1, dir: void 0, padX: 0, padTop: 0, padBottom: 0, minW: 0, seq: 0, span: 0, x: 0, y: 0 };
}
function Ne(o) {
  return o === "TB" ? 0 : o === "BT" ? 2 : o === "LR" ? 3 : 1;
}
function we(o) {
  return o + 2 & 3;
}
function $e(o, w, X, F) {
  var y, u, g;
  let d = o.length, b = /* @__PURE__ */ new Map(), c = [], G = (t, e) => {
    let r = { id: t, dir: e, items: [], edges: [], ports: [], portOf: /* @__PURE__ */ new Map(), routes: /* @__PURE__ */ new Map(), x: 0, y: 0 };
    return b.set(t, r), r;
  }, z = G(-1, X), C = [];
  for (let t = 0; t < d; t++)
    C.push([]);
  let _ = [];
  for (let t = 0; t < d; t++) {
    let e = o[t].parent;
    e >= 0 && e < d && e !== t && o[e].isGroup ? C[e].push(t) : (o[t].parent = -1, _.push(t));
  }
  z.items = _, c.push(z);
  let L = new Int32Array(d), v = new Uint8Array(d), Z = (t) => {
    var e;
    for (let r = t; r < c.length; r++) {
      let i = c[r];
      for (let l of i.items)
        if (v[l] = 1, L[l] = i.id < 0 ? 0 : L[i.id] + 1, o[l].isGroup) {
          let p = G(l, (e = o[l].dir) != null ? e : i.dir);
          p.items = C[l], c.push(p);
        }
    }
  };
  Z(0);
  for (let t = 0; t < d; t++) {
    if (v[t])
      continue;
    let e = o[t].parent;
    if (C[e] = C[e].filter((r) => r !== t), o[t].parent = -1, z.items.push(t), v[t] = 1, L[t] = 0, o[t].isGroup) {
      let r = c.length, i = G(t, (y = o[t].dir) != null ? y : X);
      i.items = C[t], c.push(i), Z(r);
    }
  }
  for (let t = c.length - 1; t > 0; t--) {
    let e = c[t], r = 1 / 0;
    for (let i of e.items)
      o[i].seq < r && (r = o[i].seq);
    r !== 1 / 0 && (o[e.id].seq = r);
  }
  for (let t of c)
    t.items.sort((e, r) => o[e].seq - o[r].seq || e - r);
  let K = 0;
  for (let t of w) {
    let e = t.src, r = t.dst, i = 0;
    for (; L[e] > L[r]; i++)
      e = o[e].parent;
    for (; L[r] > L[e]; i++)
      r = o[r].parent;
    for (; e !== r && o[e].parent !== o[r].parent; i += 2)
      e = o[e].parent, r = o[r].parent;
    e !== r && (K + i > Ye ? (t.src = e, t.dst = r) : K += i);
  }
  let oe = [], ne = [];
  for (let t = 0; t < w.length; t++) {
    let e = w[t];
    if (e.route = [], e.src === e.dst) {
      oe.push(t);
      continue;
    }
    let r = e.src, i = e.dst, l = [], p = [];
    for (; L[r] > L[i]; )
      l.push(r), r = o[r].parent;
    for (; L[i] > L[r]; )
      p.push(i), i = o[i].parent;
    if (r === i) {
      ne.push(t);
      continue;
    }
    for (; o[r].parent !== o[i].parent; )
      l.push(r), p.push(i), r = o[r].parent, i = o[i].parent;
    b.get(o[r].parent).edges.push({ e: t, a: r, b: i });
    for (let [n, s] of [[l, !0], [p, !1]])
      for (let A of n) {
        let a = b.get(o[A].parent), B = { e: t, inner: A, out: s, side: 0, hint: NaN, px: 0, py: 0, route: [] };
        a.ports.push(B), a.portOf.set(t * 2 + (s ? 0 : 1), B);
      }
  }
  let P = new Int32Array(d), ie = (t, e, r) => (r ? e.src : e.dst) !== t, Q = (t, e) => {
    let r = t.dir === "TB" || t.dir === "BT", i = Ne(t.dir), l = [], p = [];
    t.items.forEach((a, B) => {
      P[a] = B;
      let x = o[a], f = e ? ce(r ? x.w : x.h, r ? x.h : x.w) : ce(0, 0);
      f.span = x.isGroup ? Math.min(x.span, f.w - 2 * x.padX) : x.span, f.key = J ? re[a] : NaN, l.push(f);
    });
    let n = (a, B, x) => o[a].isGroup && ie(a, w[B], x), s = (a, B, x) => {
      if (!e || !o[a].isGroup || !ie(a, w[B], x))
        return 0;
      let f = b.get(a).portOf.get(B * 2 + (x ? 0 : 1));
      return r ? f.px - o[a].w / 2 : f.py - o[a].h / 2;
    };
    for (let a of t.edges) {
      let B = w[a.e], x = Me(P[a.a], P[a.b], B.minlen);
      e && (x.labelW = r ? B.labelW : B.labelH, x.labelH = r ? B.labelH : B.labelW, x.tailDx = s(a.a, a.e, !0), x.headDx = s(a.b, a.e, !1), x.tailFixed = n(a.a, a.e, !0), x.headFixed = n(a.b, a.e, !1)), p.push(x);
    }
    let A = new Int32Array(t.ports.length).fill(-1);
    return t.ports.forEach((a, B) => {
      if (a.side === i || a.side === we(i)) {
        let x = l.length, f = ce(0, 0, a.side === i ? 3 : 4);
        f.key = J ? re[a.out ? w[a.e].dst : w[a.e].src] : NaN, f.hint = Number.isNaN(a.hint) && J && D ? D(t, a) : a.hint, l.push(f), A[B] = x;
        let N = a.out ? Me(P[a.inner], x) : Me(x, P[a.inner]);
        a.out ? (N.tailDx = s(a.inner, a.e, !0), N.tailFixed = n(a.inner, a.e, !0)) : (N.headDx = s(a.inner, a.e, !1), N.headFixed = n(a.inner, a.e, !1)), p.push(N);
      } else
        l[P[a.inner]].pin = a.side === 0 || a.side === 3 ? -1 : 1;
    }), { lnodes: l, ledges: p, dummies: A };
  }, $ = K > 1 && K <= qe && w.length <= He, re = new Float64Array(d).fill(NaN), J = !1, le = 0, D, ae = c.length > 1 && $;
  for (let t of c)
    t.dir !== X && (ae = !1);
  if (ae) {
    let t = X === "TB" || X === "BT", e = new Int32Array(d).fill(-1), r = new Int32Array(d).fill(-1), i = [], l = [], p = [];
    for (let f = 0; f < d; f++)
      o[f].isGroup && (r[f] = p.length, p.push(-1));
    for (let f = 0; f < d; f++) {
      let N = o[f].parent;
      o[f].isGroup ? p[r[f]] = N >= 0 ? r[N] : -1 : (e[f] = i.length, i.push(ce(t ? o[f].w : o[f].h, t ? o[f].h : o[f].w)), l.push(N >= 0 ? r[N] : -1));
    }
    let n = [], s = new Int32Array(w.length).fill(-1);
    w.forEach((f, N) => {
      f.src === f.dst || e[f.src] < 0 || e[f.dst] < 0 || (s[N] = n.length, n.push(Me(e[f.src], e[f.dst], f.minlen, t ? f.labelW : f.labelH, t ? f.labelH : f.labelW)));
    });
    let A = Te(i, n, { ...F, groups: { of: Int32Array.from(l), parent: Int32Array.from(p) }, orderOnly: !0 });
    le = Math.min((u = A.crossings) != null ? u : 0, (g = A.declared) != null ? g : 0);
    let a = new Float64Array(d), B = new Int32Array(d), x = new Int32Array(d).fill(-1);
    for (let f = 0; f < d; f++)
      if (!(e[f] < 0)) {
        re[f] = i[e[f]].x;
        for (let N = o[f].parent; N >= 0; N = o[N].parent)
          a[N] += re[f], B[N]++, x[N] = Math.max(x[N], i[e[f]].rank);
      }
    for (let f = 0; f < d; f++)
      B[f] > 0 && (re[f] = a[f] / B[f]);
    D = (f, N) => {
      let I = s[N.e];
      if (I < 0 || f.id < 0 || !N.out || N.side !== we(Ne(f.dir)))
        return NaN;
      let T = n[I].points, E = re[w[N.e].src], k = 0;
      for (let q = 0; q < T.length; q += 2)
        T[q] === x[f.id] && (E = T[q + 1]), T[q] === x[f.id] + 1 && (k = T[q + 1]);
      return E + k * 1e-6;
    };
  }
  let m = /* @__PURE__ */ new Map(), fe = (t, e, r) => {
    if (!$)
      return { lnodes: e, ledges: r, size: Te(e, r, F) };
    let i = [];
    for (let n of e)
      i.push(n.w, n.h, n.kind, n.pin, n.hint, n.key, n.span);
    for (let n of r)
      i.push(n.tail, n.head, n.minlen, n.labelW, n.labelH, n.tailDx, n.headDx, +n.tailFixed, +n.headFixed);
    let l = m.get(t.id);
    l || m.set(t.id, l = []);
    for (let n of l) {
      let s = n.given.length === i.length;
      for (let A = 0; s && A < i.length; A++)
        s = Object.is(n.given[A], i[A]);
      if (s)
        return n;
    }
    let p = { given: i, lnodes: e, ledges: r, size: Te(e, r, F) };
    return l.push(p), p;
  }, S = { width: 0, height: 0 }, ue = () => {
    for (let e of c) {
      for (let n of e.ports)
        o[n.inner].isGroup && ie(n.inner, w[n.e], n.out) && (b.get(n.inner).portOf.get(n.e * 2 + (n.out ? 0 : 1)).side = n.side);
      if (e.edges.length === 0)
        continue;
      let r = !1;
      for (let n of e.edges) {
        let s = w[n.e];
        (o[n.a].isGroup && s.src !== n.a || o[n.b].isGroup && s.dst !== n.b) && (r = !0);
      }
      if (!r)
        continue;
      let { lnodes: i, ledges: l } = Q(e, !1);
      ve(i, l), Oe(i, l, 1);
      let p = Ne(e.dir);
      e.edges.forEach((n, s) => {
        let A = w[n.e], a = !l[s].reversed;
        o[n.a].isGroup && A.src !== n.a && (b.get(n.a).portOf.get(n.e * 2).side = a ? we(p) : p), o[n.b].isGroup && A.dst !== n.b && (b.get(n.b).portOf.get(n.e * 2 + 1).side = a ? p : we(p));
      });
    }
    for (let e = c.length - 1; e >= 0; e--) {
      let r = c[e], i = r.id >= 0 ? o[r.id] : void 0, l = r.dir === "TB" || r.dir === "BT", p = r.dir === "BT" || r.dir === "RL", n = Q(r, !0), { lnodes: s, ledges: A, size: a } = fe(r, n.lnodes, n.ledges), B = n.dummies, x = l ? a.width : a.height, f = l ? a.height : a.width, N = i ? i.padX : 0, I = i ? i.padTop : 0, T = Math.max(x + 2 * N, i ? i.minW : 0), E = f + I + (i ? i.padBottom : 0), k = (T - x) / 2, q = I, R = (M, O) => k + (l ? M : p ? a.height - O : O), V = (M, O) => q + (l ? p ? a.height - O : O : M), se = l ? 0 : 1, xe = (M) => {
        let O = [];
        for (let W = 0; W < M.length; W += 2)
          O.push(R(M[W], M[W + 1]), V(M[W], M[W + 1]), se);
        return O;
      };
      r.items.forEach((M, O) => {
        o[M].x = R(s[O].x, s[O].y), o[M].y = V(s[O].x, s[O].y);
      }), r.edges.forEach((M, O) => {
        let W = A[O];
        r.routes.set(M.e, xe(W.points));
        let j = w[M.e];
        j.labelW > 0 && (j.labelX = R(W.labelX, W.labelY), j.labelY = V(W.labelX, W.labelY));
      });
      let Be = r.edges.length;
      r.ports.forEach((M, O) => {
        let W = o[M.inner];
        if (B[O] >= 0) {
          let U = xe(A[Be++].points), de = M.out ? U.length - 3 : 0, ge = U[de], be = U[de + 1];
          M.side === 0 ? be = 0 : M.side === 2 ? be = E : M.side === 3 ? ge = 0 : ge = T, M.out ? U.push(ge, be, se) : U.unshift(ge, be, se), M.px = ge, M.py = be, M.route = U;
          return;
        }
        let j = W.x, ee = W.y;
        if (W.isGroup && ie(M.inner, w[M.e], M.out)) {
          let U = b.get(M.inner).portOf.get(M.e * 2 + (M.out ? 0 : 1));
          j += U.px - W.w / 2, ee += U.py - W.h / 2;
        } else
          M.side === 0 ? ee -= W.h / 2 : M.side === 2 ? ee += W.h / 2 : M.side === 3 ? j -= W.w / 2 : j += W.w / 2;
        let te = j, Y = ee;
        M.side === 0 ? Y = 0 : M.side === 2 ? Y = E : M.side === 3 ? te = 0 : te = T;
        let H = M.side === 0 || M.side === 2 ? 0 : 1;
        M.px = te, M.py = Y, M.route = M.out ? [j, ee, H, te, Y, H] : [te, Y, H, j, ee, H];
      }), i ? (i.w = T, i.h = E) : S = { width: T, height: E };
    }
    for (let e of c) {
      let r = e.x, i = e.y;
      for (let l of e.items) {
        let p = o[l];
        if (p.x += r, p.y += i, p.isGroup) {
          let n = b.get(l);
          n.x = p.x - p.w / 2, n.y = p.y - p.h / 2;
        }
      }
    }
    let t = (e, r, i, l) => {
      for (let p = 0; p < r.length; p += 3) {
        let n = r[p] + i, s = r[p + 1] + l, A = e.length;
        A >= 3 && Math.abs(e[A - 3] - n) < 0.01 && Math.abs(e[A - 2] - s) < 0.01 || e.push(n, s, r[p + 2]);
      }
    };
    for (let e of c)
      for (let r of e.edges) {
        let i = w[r.e], l = [], p = [];
        for (let s = i.src; o[s].parent !== e.id; s = o[s].parent)
          p.push(b.get(o[s].parent));
        for (let s of p)
          t(l, s.portOf.get(r.e * 2).route, s.x, s.y);
        t(l, e.routes.get(r.e), e.x, e.y);
        let n = [];
        for (let s = i.dst; o[s].parent !== e.id; s = o[s].parent)
          n.push(b.get(o[s].parent));
        for (let s = n.length - 1; s >= 0; s--)
          t(l, n[s].portOf.get(r.e * 2 + 1).route, n[s].x, n[s].y);
        i.route = l, i.labelW > 0 && (i.labelX += e.x, i.labelY += e.y);
      }
  }, he = ze(F);
  J = ae, ue();
  let h = -1;
  if (ae && (h = Ae(o, w, he), h > le * Le + De)) {
    let t = Ee(o, w, c, S);
    J = !1, ue();
    let e = Ae(o, w, he);
    e >= h ? (J = !0, S = We(t, o, w, c)) : h = e;
  }
  if (J === ae && $) {
    let t = !1;
    for (let e of c) {
      if (e.id < 0)
        continue;
      let r = o[e.id], i = e.dir === "TB" || e.dir === "BT", l = we(Ne(e.dir)), p = [];
      for (let n of e.ports) {
        if (n.side !== l)
          continue;
        let s = w[n.e].route, A = e.x + n.px, a = e.y + n.py, B = -1;
        for (let N = 0; N < s.length && (B < 0 || n.out); N += 3)
          Math.abs(s[N] - A) < 0.01 && Math.abs(s[N + 1] - a) < 0.01 && (B = N);
        if (B < 0)
          continue;
        let x = i ? 0 : 1, f = n.out ? B + 3 : B - 3;
        for (; f >= 0 && f < s.length && Math.abs(s[f + x] - s[B + x]) < pe; )
          f += n.out ? 3 : -3;
        f < 0 || f >= s.length || (n.hint = s[f + x] - (i ? r.x - r.w / 2 : r.y - r.h / 2), p.push([i ? n.px : n.py, n.hint]));
      }
      p.sort((n, s) => n[0] - s[0]);
      for (let n = 1; n < p.length; n++)
        p[n - 1][1] > p[n][1] && (t = !0);
    }
    if (t) {
      let e = h >= 0 ? h : Ae(o, w, he), r = e > 0 ? Ee(o, w, c, S) : void 0;
      r && (ue(), Ae(o, w, he) >= e && (S = We(r, o, w, c)));
    }
  }
  for (let t of ne) {
    let e = w[t], r = o[e.src], i = o[e.dst];
    e.route = [r.x, r.y, 0, i.x, i.y, 0], e.labelX = (r.x + i.x) / 2, e.labelY = (r.y + i.y) / 2;
  }
  for (let t of oe) {
    let e = w[t], r = o[e.src];
    e.labelX = r.x + r.w / 2 + 28 + e.labelW / 2, e.labelY = r.y;
  }
  return S;
}
export {
  Ue as H,
  Re as _,
  $e as j,
  me as q,
  _e as z
};
//# sourceMappingURL=QRQ46LE7-b110495e.js.map

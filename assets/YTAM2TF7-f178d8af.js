import { x as it, L as ne, V as ae } from "./3G3HCGVE-09704139.js";
function Ke(o, c, r = 0) {
  return { w: o, h: c, kind: r, pin: 0, hint: NaN, key: NaN, span: 0, x: 0, y: 0, rank: 0 };
}
function Re(o, c, r = 1, y = 0, s = 0) {
  return { tail: o, head: c, minlen: r, labelW: y, labelH: s, tailDx: 0, headDx: 0, tailFixed: !1, headFixed: !1, reversed: !1, points: [], labelX: 0, labelY: 0 };
}
var oe = 24, bt = 2e4, Gt = 16, Pt = 8, fe = 0.125, Jt = 3, ie = 18, he = 10, ue = 14, se = 2, ce = 28, _t = 12, de = 12, pe = 8, we = 4, Qt = 0.5, Dt = 0.5, Ht = 12, ye = 40, qt = 400, Yt = 16, jt = new Float64Array(2 * Yt + 2), zt = new Float64Array(2 * Yt + 2);
function Ct(o) {
  return o === 1 || o === 2;
}
function Zt(o, c, r, y) {
  for (let s = c + 1; s < r; s++) {
    let T = o[s], I = y[T], U = s - 1;
    for (; U >= c && (y[o[U]] > I || y[o[U]] === I && o[U] > T); )
      o[U + 1] = o[U], U--;
    o[U + 1] = T;
  }
}
function Ae(o, c, r, y, s, T) {
  let I = (l, d) => r[l] < r[d] || r[l] === r[d] && (s ? y[l] > y[d] : y[l] < y[d]);
  for (let l = 0; l < c; l += 8)
    for (let d = l + 1, V = Math.min(c, l + 8); d < V; d++) {
      let i = o[d], x = d - 1;
      for (; x >= l && I(i, o[x]); )
        o[x + 1] = o[x], x--;
      o[x + 1] = i;
    }
  let U = o, u = T;
  for (let l = 8; l < c; l *= 2) {
    for (let V = 0; V < c; V += 2 * l) {
      let i = Math.min(c, V + l), x = Math.min(c, V + 2 * l), f = V, k = i, C = V;
      for (; f < i && k < x; )
        u[C++] = I(U[k], U[f]) ? U[k++] : U[f++];
      for (; f < i; )
        u[C++] = U[f++];
      for (; k < x; )
        u[C++] = U[k++];
    }
    let d = U;
    U = u, u = d;
  }
  if (U !== o)
    for (let l = 0; l < c; l++)
      o[l] = U[l];
}
function Ne(o, c, r) {
  var Tt, Nt;
  let y = o.length;
  if (y === 0)
    return { width: 0, height: 0 };
  let s = c.length;
  if (y === 1 && s === 0 && o[0].kind === 0) {
    let t = o[0];
    return t.rank = 0, t.x = t.w / 2, t.y = t.h / 2, { width: t.w, height: t.h };
  }
  let T = 1;
  if (s > 0) {
    let t = /* @__PURE__ */ new Set();
    for (let a of c) {
      let M = Math.min(a.tail, a.head), G = Math.max(a.tail, a.head), $ = M * y + G;
      if (a.labelW > 0 || t.has($)) {
        T = 2;
        break;
      }
      t.add($);
    }
  }
  Me(o, c), ge(o, c, T);
  let I = new Int32Array(s), U = 0;
  for (let t = 0; t < s; t++) {
    let a = c[t];
    I[t] = Math.abs(o[a.head].rank - o[a.tail].rank), I[t] > 1 && (U += I[t] - 1);
  }
  let u = new Uint8Array(s);
  if (U > bt) {
    let t = [];
    for (let a = 0; a < s; a++)
      I[a] > 1 && t.push(a);
    t.sort((a, M) => I[M] - I[a] || a - M);
    for (let a of t) {
      if (U <= bt)
        break;
      u[a] = 1, U -= I[a] - 1;
    }
  }
  let l = y + U, d = new Float64Array(l), V = new Float64Array(l), i = new Uint8Array(l), x = new Int32Array(l), f = 0;
  for (let t = 0; t < y; t++) {
    let a = o[t];
    d[t] = a.w, V[t] = a.h, i[t] = a.kind, x[t] = a.rank, a.rank > f && (f = a.rank);
  }
  let k = 0;
  for (let t = 0; t < s; t++)
    u[t] || (k += I[t]);
  let C = new Int32Array(k), tt = new Int32Array(k), ot = new Float64Array(k), g = new Float64Array(k), D = new Int32Array(s).fill(-1), R = new Uint8Array(f + 1), m = new Int32Array(s).fill(-1), _ = !1;
  for (let t = 0; t < y; t++)
    o[t].span > 0 && o[t].kind === 0 && (_ = !0);
  let j = _ ? new Uint8Array(k) : void 0, b = _ ? new Uint8Array(k) : void 0, e = new Int32Array(s).fill(-1), n = new Int32Array(s).fill(-1), E = new Float64Array(l).fill(NaN);
  for (let t = 0; t < y; t++)
    E[t] = o[t].key;
  let w = !1;
  {
    let t = y, a = 0;
    for (let M = 0; M < s; M++) {
      if (u[M])
        continue;
      let G = c[M], $ = G.reversed ? G.head : G.tail, H = G.reversed ? G.tail : G.head, ut = G.reversed ? G.headDx : G.tailDx, q = G.reversed ? G.tailDx : G.headDx;
      (ut !== 0 || q !== 0) && (w = !0);
      let mt = x[$], $t = x[H], vt = -1;
      G.labelW > 0 && (vt = mt + ($t - mt >> 1), T === 2 && $t - mt >= 4 ? (vt & 1) === 1 && (vt += G.reversed ? 1 : -1) : T === 2 && (vt & 1) === 0 && (vt += G.reversed ? 1 : -1));
      let Wt = $;
      $t - mt > 1 && (D[M] = t), e[M] = a, j && !(G.reversed ? G.headFixed : G.tailFixed) && (j[a] = G.reversed ? 2 : 1);
      for (let Lt = mt + 1; Lt < $t; Lt++) {
        let Ut = t++;
        x[Ut] = Lt, E[Ut] = E[$] + (E[H] - E[$]) * (Lt - mt) / ($t - mt), Lt === vt ? (d[Ut] = G.labelW, V[Ut] = G.labelH, i[Ut] = 2, m[M] = Ut, R[Lt] |= G.reversed ? 2 : 1) : i[Ut] = 1, C[a] = Wt, tt[a] = Ut, ot[a] = Wt === $ ? ut : 0, a++, Wt = Ut;
      }
      C[a] = Wt, tt[a] = H, ot[a] = Wt === $ ? ut : 0, g[a] = q, b && !(G.reversed ? G.tailFixed : G.headFixed) && (b[a] = G.reversed ? 1 : 2), n[M] = a, a++;
    }
  }
  let A;
  if (r.groups) {
    let { of: t, parent: a } = r.groups;
    A = new Int32Array(l);
    for (let $ = 0; $ < y; $++)
      A[$] = t[$];
    let M = ($) => {
      let H = 0;
      for (; $ >= 0; $ = a[$])
        H++;
      return H;
    }, G = ($, H) => {
      let ut = M($), q = M(H);
      for (; ut > q; ut--)
        $ = a[$];
      for (; q > ut; q--)
        H = a[H];
      for (; $ !== H; )
        $ = a[$], H = a[H];
      return $;
    };
    for (let $ = 0; $ < s; $++) {
      if (D[$] < 0)
        continue;
      let H = c[$], ut = G(t[H.tail], t[H.head]);
      for (let q = D[$], mt = q + I[$] - 1; q < mt; q++)
        A[q] = ut;
    }
  }
  let F = new Int32Array(l + 1), v = new Int32Array(l + 1);
  for (let t = 0; t < k; t++)
    F[C[t] + 1]++, v[tt[t] + 1]++;
  for (let t = 0; t < l; t++)
    F[t + 1] += F[t], v[t + 1] += v[t];
  let J = new Int32Array(k), p = new Int32Array(k);
  {
    let t = F.slice(0, l), a = v.slice(0, l);
    for (let M = 0; M < k; M++)
      J[t[C[M]]++] = M, p[a[tt[M]]++] = M;
  }
  let W = new Int32Array(f + 2);
  for (let t = 0; t < l; t++)
    W[x[t] + 1]++;
  for (let t = 0; t <= f; t++)
    W[t + 1] += W[t];
  let h = new Int32Array(l), N = new Int32Array(l);
  {
    let t = new Int32Array(l), a = W.slice(0, f + 1);
    for (let $ = 0; $ < l; $++)
      t[a[x[$]]++] = $;
    for (let $ = 0; $ <= f; $++)
      a[$] = W[$];
    let M = new Uint8Array(l), G = [];
    for (let $ = 0; $ < l; $++)
      if (!M[t[$]])
        for (G.push(t[$]); G.length > 0; ) {
          let H = G.pop();
          if (!M[H]) {
            M[H] = 1, h[a[x[H]]++] = H;
            for (let ut = F[H + 1] - 1; ut >= F[H]; ut--) {
              let q = tt[J[ut]];
              M[q] || G.push(q);
            }
          }
        }
  }
  let B = (t, a) => {
    let M = W[t], G = W[t + 1];
    if (G - M < 2)
      return !1;
    for (let ut = M; ut < G; ut++)
      if (Number.isNaN(a(h[ut])))
        return !1;
    let $ = Array.from(h.subarray(M, G)), H = /* @__PURE__ */ new Map();
    return $.forEach((ut, q) => H.set(ut, q)), $.sort((ut, q) => a(ut) - a(q) || H.get(ut) - H.get(q)), h.set($, M), !0;
  };
  for (let t = 0; t <= f; t++)
    B(t, (a) => E[a]);
  let L = !1;
  for (let t = 0; t < y; t++)
    o[t].pin !== 0 && (L = !0);
  if (L)
    for (let t = 0; t <= f; t++) {
      let a = Array.from(h.subarray(W[t], W[t + 1])), M = /* @__PURE__ */ new Map();
      a.forEach(($, H) => M.set($, H));
      let G = ($) => $ < y ? o[$].pin : 0;
      a.sort(($, H) => G($) - G(H) || M.get($) - M.get(H)), h.set(a, W[t]);
    }
  let et = new Uint8Array(f + 1), P = (t) => t < y && (o[t].kind === 3 || o[t].kind === 4) ? o[t].hint : NaN;
  for (let t of [0, f])
    B(t, P) && (et[t] = 1);
  let nt = () => {
    for (let t = 0; t <= f; t++) {
      let a = W[t];
      for (let M = a, G = W[t + 1]; M < G; M++)
        N[h[M]] = M - a;
    }
  };
  nt();
  let K = { n: l, real: y, maxRank: f, W: d, KIND: i, RANK: x, EF: C, ET: tt, EFD: ot, ETD: g, succStart: F, succE: J, predStart: v, predE: p, layerStart: W, order: h, pos: N, offsets: w, fixed: et, GRP: A, groupParent: (Tt = r.groups) == null ? void 0 : Tt.parent }, z = 0, st = 0;
  if (k > 0 && f > 0 && ([z, st] = De(K, o), nt()), r.orderOnly) {
    let t = te(K, r);
    for (let a = 0; a < y; a++)
      o[a].x = t[a];
    for (let a = 0; a < s; a++) {
      let M = c[a], G = M.reversed ? M.head : M.tail, $ = M.reversed ? M.tail : M.head, H = [x[G], t[G]];
      if (!u[a] && D[a] >= 0)
        for (let ut = D[a], q = ut + I[a] - 1; ut < q; ut++)
          H.push(x[ut], t[ut]);
      H.push(x[$], t[$]), M.points = H;
    }
    return { width: 0, height: 0, crossings: z, declared: st };
  }
  j && b && xe(K, o, j, b);
  let Z = te(K, r), ht = Fe(K);
  if (j && b) {
    let t = ke(K, j, b);
    me(K, o, Z, t, r, ht), Ie(K, o, Z, j, b, t, ht), Ee(K, Z, ht, r);
    for (let a = 0; a < s; a++) {
      if (u[a])
        continue;
      let M = c[a], G = ot[e[a]], $ = g[n[a]];
      M.tailDx = M.reversed ? $ : G, M.headDx = M.reversed ? G : $;
    }
  }
  let yt = new Uint8Array(l);
  ht && !r.tracks && Se(K, Z, ht, D, I, r.apart ? 0 : r.edgeSep, yt), r.tracks || ve(K, Z, D, I, r.edgeSep, yt);
  let Ft = new Int32Array(s + 1), S = r.tracks || j && !r.straight ? { from: [], to: [], rank: [], lower: [], track: [], levels: [], wide: [] } : void 0, At = new Int32Array(f + 1);
  if (S) {
    for (let t = 0; t < s; t++) {
      if (Ft[t] = S.from.length, u[t])
        continue;
      let a = D[t], M = !1;
      for (let H = a, ut = a < 0 ? a : a + I[t] - 1; H < ut; H++) {
        let q = ht !== void 0 && ht[x[H]] === 1;
        !r.tracks && q !== (yt[H] === 1) && (M = !0);
      }
      if (M)
        continue;
      let G = Z[C[e[t]]] + ot[e[t]], $ = x[C[e[t]]];
      for (let H = a, ut = a < 0 ? a : a + I[t] - 1; H < ut; H++)
        ht && ht[x[H]] || (S.from.push(G), S.to.push(Z[H]), S.rank.push($), S.lower.push(H), G = Z[H], $ = x[H]);
      S.from.push(G), S.to.push(Z[tt[n[t]]] + g[n[t]]), S.rank.push($), S.lower.push(-1);
    }
    Ft[s] = S.from.length;
  }
  let Mt = (t, a) => {
    let M = !1;
    for (let G = W[t]; G < W[t + 1]; G++) {
      let $ = i[h[G]];
      if ($ === a)
        M = !0;
      else if ($ !== 1)
        return !1;
    }
    return M;
  }, gt = Mt(0, 3) ? T : 0, ct = Mt(f, 4) ? T : 0, Y = new Float64Array(f + 1);
  for (let t = 0; t < k; t++) {
    let a = Math.abs(Z[C[t]] + ot[t] - Z[tt[t]] - g[t]);
    a > Y[x[C[t]]] && (Y[x[C[t]]] = a);
  }
  let O = new Float64Array(f + 1), X = new Float64Array(f + 1), Q = (t) => (t < gt || t >= f - ct ? r.portSep : r.rankSep) / T, at = new Float64Array(f + 1);
  for (let t = 0; t < f; t++)
    at[t] = S ? Q(t) : Math.max(Q(t), Math.min(Jt * r.rankSep / T, Y[t] * fe));
  let rt = new Uint8Array(f + 1).fill(1);
  for (let t = 0; t < y; t++)
    rt[x[t]] = 0;
  for (let t = 1; t < f; t++) {
    if (r.tracks || !rt[t] || R[t] !== 1 && R[t] !== 2)
      continue;
    let a = Math.min(((Nt = r.headRoom) != null ? Nt : 0) / 2, at[R[t] === 1 ? t - 1 : t] / 2);
    at[t - 1] += R[t] === 1 ? -a : a, at[t] += R[t] === 1 ? a : -a;
  }
  let ft = (t) => i[t] === 1 && rt[x[t]] && !r.tracks ? (X[x[t]] - O[x[t]]) / 4 : 0, It = r.tracks ? ie : ce, lt = r.tracks ? he : _t, dt = r.tracks ? ue : _t, kt = new Int32Array(f + 1);
  if (S) {
    let t = new Float64Array(f + 1);
    for (let M = 0; M < f; M++) {
      if (ht && ht[M])
        continue;
      let G = M + 1;
      for (t[M] = at[M]; G < f && ht && ht[G]; )
        t[M] += at[G++];
      kt[M] = G;
    }
    for (let M = 0; M < S.from.length; M++)
      S.wide.push(Math.abs(S.from[M] - S.to[M]) > se * t[S.rank[M]] ? 1 : 0);
    let a = new Float64Array(f + 1);
    $e(S, At, !r.tracks, t, a);
    for (let M = 0; M < f; M++)
      At[M] > 0 ? at[M] += Math.max(0, 2 * It + (At[M] - 1) * lt - t[M]) : a[M] > 0 && (at[M] += Math.max(0, Math.min(Jt * r.rankSep, a[M]) - t[M]));
  }
  let xt = 0;
  for (let t = 0; t <= f; t++) {
    let a = 0;
    for (let M = W[t]; M < W[t + 1]; M++)
      V[h[M]] > a && (a = V[h[M]]);
    O[t] = xt, X[t] = xt + a, xt += a + at[t];
  }
  let pt = xt, wt = (t, a = S.track[t]) => {
    let M = S.rank[t], G = X[M], $ = O[kt[M]], H = r.tracks ? At[M] : S.levels[t], ut = H > 1 ? Math.min(dt, ($ - G - 2 * It) / (H - 1)) : 0;
    return (G + $) / 2 + (a - (H - 1) / 2) * ut;
  }, Et = 1 / 0, St = -1 / 0;
  for (let t = 0; t < l; t++) {
    let a = d[t] / 2;
    Z[t] - a < Et && (Et = Z[t] - a), Z[t] + a > St && (St = Z[t] + a);
  }
  let Kt = new Uint8Array(f + 1), Rt = new Uint8Array(f + 1);
  for (let t = 0; t < y; t++)
    i[t] !== 0 || !j || (v[t + 1] > v[t] && (Kt[x[t]] = 1), F[t + 1] > F[t] && (Rt[x[t]] = 1));
  for (let t = 0; t < y; t++) {
    let a = o[t], M = a.rank;
    a.x = Z[t] - Et, i[t] === 0 && Rt[M] && !Kt[M] ? a.y = X[M] - a.h / 2 : i[t] === 0 && Kt[M] && !Rt[M] ? a.y = O[M] + a.h / 2 : a.y = (O[M] + X[M]) / 2;
  }
  for (let t = 0; t < s; t++) {
    let a = c[t], M = o[a.reversed ? a.head : a.tail], G = o[a.reversed ? a.tail : a.head], $ = [M.x + (a.reversed ? a.headDx : a.tailDx), M.y + M.h / 2], H = D[t];
    if (S && Ft[t + 1] > Ft[t])
      for (let q = Ft[t]; q < Ft[t + 1]; q++) {
        if (S.track[q] >= 0 && (r.tracks || S.wide[q] === 1)) {
          let $t = wt(q);
          $.push(S.from[q] - Et, $t, S.to[q] - Et, $t);
        } else
          S.track[q] > 0 && $.push(S.from[q] - Et, wt(q, S.track[q] - 1));
        let mt = S.lower[q];
        mt < 0 || ($.push(Z[mt] - Et, O[x[mt]] + ft(mt)), X[x[mt]] > O[x[mt]] && $.push(Z[mt] - Et, X[x[mt]] - ft(mt)));
      }
    else if (H >= 0)
      for (let q = H, mt = H + I[t] - 1; q < mt; q++) {
        if (yt[q])
          continue;
        let $t = Z[q] - Et, vt = O[x[q]], Wt = X[x[q]];
        $.push($t, vt + ft(q)), Wt > vt && $.push($t, Wt - ft(q));
      }
    if ($.push(G.x + (a.reversed ? a.tailDx : a.headDx), G.y - G.h / 2), a.reversed)
      for (let q = 0, mt = $.length - 2; q < mt; q += 2, mt -= 2) {
        let $t = $[q], vt = $[q + 1];
        $[q] = $[mt], $[q + 1] = $[mt + 1], $[mt] = $t, $[mt + 1] = vt;
      }
    a.points = $;
    let ut = m[t];
    ut >= 0 ? (a.labelX = Z[ut] - Et, a.labelY = (O[x[ut]] + X[x[ut]]) / 2) : a.labelW > 0 && (a.labelX = ($[0] + $[$.length - 2]) / 2, a.labelY = ($[1] + $[$.length - 1]) / 2);
  }
  return { width: St - Et, height: pt };
}
function Me(o, c) {
  let r = o.length, y = c.length, s = new Int32Array(r + 1);
  for (let l = 0; l < y; l++) {
    let d = c[l];
    d.reversed = o[d.head].kind === 3 || o[d.tail].kind === 4, d.reversed || s[d.tail + 1]++;
  }
  for (let l = 0; l < r; l++)
    s[l + 1] += s[l];
  let T = new Int32Array(s[r]);
  {
    let l = s.slice(0, r);
    for (let d = 0; d < y; d++)
      c[d].reversed || (T[l[c[d].tail]++] = d);
  }
  let I = new Uint8Array(r), U = s.slice(0, r), u = [];
  for (let l = 0; l < r; l++)
    if (I[l] === 0)
      for (u.push(l), I[l] = 1; u.length > 0; ) {
        let d = u[u.length - 1];
        if (U[d] < s[d + 1]) {
          let V = c[T[U[d]++]], i = V.head;
          I[i] === 1 ? V.reversed = !0 : I[i] === 0 && (I[i] = 1, u.push(i));
        } else
          I[d] = 2, u.pop();
      }
}
function ge(o, c, r) {
  let y = o.length, s = c.length, T = new Int32Array(s), I = new Int32Array(s), U = new Int32Array(s), u = new Int32Array(y + 1), l = new Int32Array(y + 1);
  for (let g = 0; g < s; g++) {
    let D = c[g], R = D.reversed ? D.head : D.tail, m = D.reversed ? D.tail : D.head;
    T[g] = R, I[g] = m, U[g] = Math.max(1, D.minlen) * r, u[R + 1]++, l[m + 1]++;
  }
  for (let g = 0; g < y; g++)
    u[g + 1] += u[g], l[g + 1] += l[g];
  let d = new Int32Array(s), V = new Int32Array(s);
  {
    let g = u.slice(0, y), D = l.slice(0, y);
    for (let R = 0; R < s; R++)
      d[g[T[R]]++] = R, V[D[I[R]]++] = R;
  }
  let i = new Int32Array(y), x = new Int32Array(y);
  for (let g = 0; g < y; g++)
    x[g] = l[g + 1] - l[g];
  let f = new Int32Array(y), k = 0;
  for (let g = 0; g < y; g++)
    x[g] === 0 && (f[k++] = g);
  for (let g = 0; g < k; g++) {
    let D = f[g];
    for (let R = u[D]; R < u[D + 1]; R++) {
      let m = d[R], _ = I[m];
      i[D] + U[m] > i[_] && (i[_] = i[D] + U[m]), --x[_] === 0 && (f[k++] = _);
    }
  }
  for (let g = 0; g < 8; g++) {
    let D = !1;
    for (let R = k - 1; R >= 0; R--) {
      let m = f[R], _ = l[m + 1] - l[m], j = u[m + 1] - u[m];
      if (_ === 0 && j === 0)
        continue;
      let b = -1 / 0, e = 1 / 0;
      for (let E = l[m]; E < l[m + 1]; E++) {
        let w = V[E];
        b = Math.max(b, i[T[w]] + U[w]);
      }
      for (let E = u[m]; E < u[m + 1]; E++) {
        let w = d[E];
        e = Math.min(e, i[I[w]] - U[w]);
      }
      let n = i[m];
      j > _ && e !== 1 / 0 ? n = e : _ > j && b !== -1 / 0 && (n = b), n !== i[m] && (i[m] = n, D = !0);
    }
    if (!D)
      break;
  }
  let C = 1 / 0, tt = -1 / 0, ot = !1;
  for (let g = 0; g < y; g++) {
    let D = o[g].kind;
    D === 3 && (ot = !0), !(D === 3 || D === 4) && (i[g] < C && (C = i[g]), i[g] > tt && (tt = i[g]));
  }
  C === 1 / 0 && (C = 0, tt = 0);
  for (let g = 0; g < y; g++)
    o[g].kind === 3 ? i[g] = C - r : o[g].kind === 4 && (i[g] = tt + r);
  ot && (C -= r);
  for (let g = 0; g < y; g++)
    o[g].rank = i[g] - C;
}
function ee(o, c, r, y, s, T, I) {
  let U = r === 0 ? o.predStart : o.succStart, u = r === 0 ? o.predE : o.succE, l = r === 0 ? o.EF : o.ET, d = o.pos;
  for (let f = U[c]; f < U[c + 1]; f++)
    s[u[f]] !== 0 && T.push(u[f]);
  if (T.length < 2)
    return 0;
  T.sort((f, k) => d[l[f]] - d[l[k]] || f - k);
  let V = (f) => {
    let k = 0;
    I[0] = 0;
    for (let C = 1; C < T.length; C++) {
      let tt = s[T[C]] === s[T[C - 1]];
      I[C] = f(tt && s[T[C]] === 1, tt), k += I[C];
    }
    return k;
  }, i = V(() => 1);
  if (y / i < Pt && (i = V((f) => f ? 0.5 : 1)), y / i < Pt && (i = V((f, k) => k ? 0 : 1)), i === 0)
    return 0;
  let x = Math.min(Gt, y / i);
  for (let f = 1; f < T.length; f++)
    I[f] *= x;
  return i * x;
}
function xe(o, c, r, y) {
  let { real: s, W: T, EFD: I, ETD: U } = o;
  for (let u = 0; u < s; u++) {
    let l = Math.min(c[u].span, T[u]);
    if (!(l <= 0 || c[u].kind !== 0))
      for (let d = 0; d < 2; d++) {
        let V = [], i = [], x = ee(o, u, d, l, d === 0 ? y : r, V, i);
        if (x === 0)
          continue;
        let f = d === 0 ? U : I, k = -x / 2;
        for (let C = 0; C < V.length; C++)
          k += i[C], f[V[C]] = k;
      }
  }
}
function Bt(o, c, r, y) {
  if (!c)
    return r;
  let { KIND: s, RANK: T, EF: I, ET: U, succStart: u, succE: l, predStart: d, predE: V } = o;
  for (let i = 0; i < 1e5; i++) {
    let x = y === 0 ? I[r] : U[r];
    if (s[x] !== 1 || !c[T[x]])
      break;
    r = y === 0 ? V[d[x]] : l[u[x]];
  }
  return r;
}
function ke(o, c, r) {
  let y = [new Int32Array(o.n), new Int32Array(o.n)];
  for (let s = 0; s < o.EF.length; s++)
    r[s] !== 0 && y[0][o.ET[s]]++, c[s] !== 0 && y[1][o.EF[s]]++;
  return y;
}
function re(o, c) {
  return Math.max(0.25, Math.min(0.5, 4 * Math.abs(c) / (Math.abs(o) || 1)));
}
function me(o, c, r, y, s, T) {
  let I = s.edgeSep, { n: U, real: u, maxRank: l, KIND: d, RANK: V, W: i, EF: x, ET: f, EFD: k, ETD: C, succStart: tt, succE: ot, predStart: g, predE: D, layerStart: R, order: m, pos: _ } = o, j = (A) => d[A] === 2 || d[A] === 1 && !(T !== void 0 && T[V[A]] === 1), b = (A, F) => {
    let v = F === 0 ? x[A] : f[A];
    return [F === 0 ? r[v] + k[A] : r[v] + C[A], v < u && c[v].kind === 0 ? y[1 - F][v] : 0];
  }, e = (A) => {
    let F = R[V[A]], v = F + _[A], J = (p) => i[p] / 2 + i[A] / 2 + (d[p] === 0 ? s.nodeSep / 2 + I / 2 : d[p] === d[A] ? I : I / 2);
    return [v > F ? r[m[v - 1]] + J(m[v - 1]) : -1 / 0, v + 1 < R[V[A] + 1] ? r[m[v + 1]] - J(m[v + 1]) : 1 / 0];
  }, n = (A, F, v, J, p) => {
    var h;
    let W = (F[1] !== v[1] ? F[1] < v[1] : Math.abs(F[0] - A) <= Math.abs(v[0] - A)) ? [F[0], v[0]] : [v[0], F[0]];
    return (h = W.find((N) => N >= J && N <= p)) != null ? h : Math.max(J, Math.min(p, W[0]));
  }, E = new Uint8Array(U), w = [];
  for (let A = 1; A < l; A++)
    for (let F = R[A]; F < R[A + 1]; F++) {
      if (!j(m[F]) || E[m[F]])
        continue;
      let v = m[F];
      for (; Ct(d[x[D[g[v]]]]); )
        v = x[D[g[v]]];
      let J = v, p = -1 / 0, W = 1 / 0;
      w.length = 0;
      for (let h = v; Ct(d[h]); h = f[ot[tt[h]]]) {
        if (J = h, !j(h))
          continue;
        E[h] = 1, w.push(h);
        let [N, B] = e(h);
        N > p && (p = N), B < W && (W = B);
      }
      if (p <= W) {
        let h = n(r[w[0]], b(D[g[v]], 0), b(ot[tt[J]], 1), p, W);
        for (let N of w)
          r[N] = h;
        continue;
      }
      for (let h of w) {
        let [N, B] = e(h);
        N > B || (r[h] = n(r[h], b(Bt(o, T, D[g[h]], 0), 0), b(Bt(o, T, ot[tt[h]], 1), 1), N, B));
      }
    }
}
function Ie(o, c, r, y, s, T, I) {
  let { real: U, W: u, EF: l, ET: d, EFD: V, ETD: i, succStart: x, succE: f, predStart: k, predE: C, pos: tt } = o, ot = (D, R, m, _, j) => {
    if (T[R][m] < 2)
      return 0;
    D = Bt(o, I, D, R);
    let b = R === 0 ? l[D] : d[D], e = R === 0 ? r[b] + V[D] : r[b] + i[D];
    if (j && Math.abs(e - r[m]) <= _ / 2 + Dt)
      return Math.max(-_ / 2, Math.min(_ / 2, e - r[m]));
    let n = e, E = 0;
    b < U && c[b].kind === 0 && (R === 0 ? y : s)[D] !== 0 && T[1 - R][b] >= 2 && (E = Math.max(0, Math.min(c[b].span, u[b])), E > 0 && (n = r[b]));
    let w = Math.max(r[m] - _ / 2, n - E / 2), A = Math.min(r[m] + _ / 2, n + E / 2);
    if (w > A + Dt) {
      let v = Math.max(0, _ / 2 - ye);
      return Math.max(-v, Math.min(v, e - r[m]));
    }
    let F = (r[m] * E + n * _) / (E + _);
    return Math.max(w, Math.min(A, F)) - r[m];
  }, g = [];
  for (let D = 0; D < U; D++) {
    let R = Math.min(c[D].span, u[D]);
    if (!(R <= 0 || c[D].kind !== 0))
      for (let m = 0; m < 2; m++) {
        let _ = m === 0 ? l : d, j = m === 0 ? k : x, b = m === 0 ? C : f, e = [], n = [];
        if (ee(o, D, m, R, m === 0 ? s : y, e, n), e.length === 0)
          continue;
        e.length === 1 && (n[0] = 0);
        let E = [];
        for (let w = j[D]; w < j[D + 1]; w++)
          E.push(b[w]);
        E.sort((w, A) => tt[_[w]] - tt[_[A]] || w - A), g.push({ v: D, side: m, span: R, ids: e, room: n, all: E });
      }
  }
  for (let D = 0, R = !0; R && D < 6; D++) {
    R = !1;
    for (let { v: m, side: _, span: j, ids: b, room: e, all: n } of g) {
      let E = _ === 0 ? s : y, w = _ === 0 ? i : V, A = 0, F = -j / 2;
      for (let v = 0; v <= n.length; v++) {
        let J = v < n.length && E[n[v]] === 0;
        if (v < n.length && !J)
          continue;
        let p = 0;
        for (let h = v - 1; h >= 0 && E[n[h]] !== 0; h--)
          p++;
        let W = J ? w[n[v]] - Gt : j / 2;
        if (p > 0) {
          let h = [], N = [], B = 0;
          for (let P = 0; P < p; P++) {
            P > 0 && (B += e[A + P]), h.push(ot(b[A + P], _, m, j, D > 0) - B), N.push(1);
            let nt = P > 0 && e[A + P] === 0;
            for (; h.length > 1 && (nt || h[h.length - 2] / N[N.length - 2] > h[h.length - 1] / N[N.length - 1]); ) {
              nt = !1;
              let K = h.pop(), z = N.pop();
              h[h.length - 1] += K, N[N.length - 1] += z;
            }
          }
          let L = B, et = 0;
          B = 0;
          for (let P = 0; P < h.length; P++) {
            let nt = W - L < F ? (F + W - L) / 2 : Math.max(F, Math.min(W - L, h[P] / N[P]));
            for (let K = 0; K < N[P]; K++, et++)
              et > 0 && (B += e[A + et]), Math.abs(w[b[A + et]] - nt - B) > 0.01 && (R = !0), w[b[A + et]] = nt + B;
          }
          A += p;
        }
        J && (F = w[n[v]] + Gt);
      }
    }
  }
}
function Ee(o, c, r, y) {
  let { n: s, KIND: T, RANK: I, EF: U, ET: u, EFD: l, ETD: d, layerStart: V, order: i, pos: x } = o, f = (e) => r !== void 0 && T[e] === 1 && r[I[e]] === 1, k = [], C = [], tt = [], ot = [];
  for (let e = 0; e < U.length; e++) {
    if (f(U[e]))
      continue;
    let n = Bt(o, r, e, 1);
    k.push(U[e]), C.push(u[n]), tt.push(l[e]), ot.push(d[n]);
  }
  let g = (e) => c[C[e]] + ot[e] - c[k[e]] - tt[e], D = new Int32Array(s), R = [];
  for (let e = 0; e < s; e++)
    D[e] = e, R.push([e]);
  let m = (e, n) => {
    let E = D[e], w = D[n];
    if (E !== w) {
      R[E].length < R[w].length && ([E, w] = [w, E]);
      for (let A of R[w])
        D[A] = E, R[E].push(A);
      R[w] = [];
    }
  }, _ = [];
  for (let e = 0; e < k.length; e++) {
    let n = Math.abs(g(e));
    n < 0.01 ? m(k[e], C[e]) : n <= Ht && _.push(e);
  }
  if (_.length === 0)
    return;
  _.sort((e, n) => Math.abs(g(e)) - Math.abs(g(n)) || e - n);
  let j = (e) => le(o, y, e), b = (e, n) => {
    for (let E of R[e]) {
      let w = V[I[E]], A = V[I[E] + 1], F = w + x[E];
      if (F > w && D[i[F - 1]] !== e && c[E] + n - c[i[F - 1]] < j(E) + j(i[F - 1]) - 0.01 || F + 1 < A && D[i[F + 1]] !== e && c[i[F + 1]] - c[E] - n < j(E) + j(i[F + 1]) - 0.01)
        return !1;
    }
    return !0;
  };
  for (let e of _) {
    let n = g(e);
    if (Math.abs(n) < 0.01) {
      m(k[e], C[e]);
      continue;
    }
    if (Math.abs(n) > Ht || D[k[e]] === D[C[e]])
      continue;
    let E = D[k[e]], w = D[C[e]], A = R[E].length <= R[w].length ? E : w;
    for (let F of [A, A === E ? w : E]) {
      let v = F === E ? n : -n;
      if (b(F, v)) {
        for (let J of R[F])
          c[J] += v;
        m(k[e], C[e]);
        break;
      }
    }
  }
}
function Fe(o) {
  let { maxRank: c, KIND: r, layerStart: y, order: s } = o, T = new Uint8Array(c + 1), I = !1;
  for (let U = 1; U < c; U++) {
    let u = y[U + 1] > y[U];
    for (let l = y[U]; u && l < y[U + 1]; l++)
      r[s[l]] !== 1 && (u = !1);
    u && (T[U] = 1, I = !0);
  }
  return I ? T : void 0;
}
function $e(o, c, r, y, s) {
  let { from: T, to: I, rank: U, track: u, levels: l, wide: d } = o, V = T.length, i = /* @__PURE__ */ new Map();
  for (let e = 0; e < V; e++) {
    if (u.push(-1), l.push(0), Math.abs(T[e] - I[e]) < Dt)
      continue;
    let n = i.get(U[e]);
    n ? n.push(e) : i.set(U[e], [e]);
  }
  if (i.size === 0)
    return;
  let x = new Float64Array(V), f = new Float64Array(V);
  for (let e = 0; e < V; e++)
    x[e] = Math.min(T[e], I[e]), f[e] = Math.max(T[e], I[e]);
  let k = (e, n) => e >= x[n] - Dt && e <= f[n] + Dt ? 1 : 0, C = (e, n) => Math.abs(T[e] - T[n]) < Dt || Math.abs(I[e] - I[n]) < Dt, tt = (e, n) => x[e] < f[n] - Dt && x[n] < f[e] - Dt, ot = (e, n) => tt(e, n) && !C(e, n), g = (e, n) => tt(e, n) || k(I[e], n) + k(T[n], e) + k(I[n], e) + k(T[e], n) > 0, D = (e, n) => k(I[e], n) + k(T[n], e), R = (e) => {
    let n = e.map((w, A) => A).sort((w, A) => x[e[w]] - x[e[A]]), E = [];
    for (let w = 0; w < n.length; w++) {
      let A = n[w], F = f[e[A]] + 4 * Dt;
      for (let v = w + 1; v < n.length && x[e[n[v]]] <= F; v++) {
        let J = n[v];
        E.push(Math.min(A, J), Math.max(A, J));
      }
    }
    return E;
  }, m = (e) => {
    var et, P, nt;
    e.sort((K, z) => f[z] - x[z] - (f[K] - x[K]) || x[K] - x[z] || K - z);
    let n = e.length, E = [], w = e.map((K, z) => z), A = (K) => {
      for (; w[K] !== K; )
        K = w[K] = w[w[K]];
      return K;
    }, F = n <= qt, v = F ? R(e) : [], J = F ? e.map(() => []) : [];
    for (let K = 0; K < v.length; K += 2) {
      let z = v[K], st = v[K + 1];
      ot(e[z], e[st]) && (J[z].push(st), J[st].push(z));
    }
    let p = e.map((K, z) => z);
    if (F) {
      let K = new Int32Array(n), z = [];
      for (let Z = 0; Z < n; Z++)
        E.push([]), z.push([]);
      for (let Z = 0; Z < v.length; Z += 2) {
        let ht = v[Z], yt = v[Z + 1], Ft = e[ht], S = e[yt];
        if (!g(Ft, S))
          continue;
        w[A(ht)] = A(yt);
        let At = D(Ft, S), Mt = D(S, Ft);
        if (At === Mt)
          continue;
        let gt = At < Mt ? ht : yt, ct = At < Mt ? yt : ht;
        E[ct].push(gt), z[gt].push(ct), K[ct]++;
      }
      let st = new Uint8Array(n);
      p = [];
      for (let Z = 0; Z < n; Z++) {
        let ht = -1;
        for (let yt = 0; yt < n && !(!st[yt] && ((ht < 0 || K[yt] < K[ht]) && (ht = yt), K[yt] === 0)); yt++)
          ;
        st[ht] = 1, p.push(ht);
        for (let yt of z[ht])
          K[yt]--;
      }
    }
    let W = /* @__PURE__ */ new Set(), h = [], N = 0;
    for (let K of p) {
      let z = e[K], st = 0;
      for (let Z of (et = E[K]) != null ? et : [])
        u[e[Z]] >= st && (st = u[e[Z]] + 1);
      if (F) {
        W.clear();
        for (let Z of J[K])
          W.add(u[e[Z]]);
        for (; W.has(st); )
          st++;
      } else {
        for (; (P = h[st]) != null && P.some((Z) => ot(z, Z)); )
          st++;
        ((nt = h[st]) != null ? nt : h[st] = []).push(z);
      }
      u[z] = st, st >= N && (N = st + 1);
    }
    let B = new Int32Array(n).fill(N), L = new Int32Array(n).fill(-1);
    for (let K = 0; K < n; K++) {
      let z = A(K);
      B[z] = Math.min(B[z], u[e[K]]), L[z] = Math.max(L[z], u[e[K]]);
    }
    for (let K = 0; K < n; K++) {
      let z = A(K);
      l[e[K]] = L[z] - B[z] + 1, r && (u[e[K]] -= B[z]);
    }
    return N;
  }, _ = (e, n, E) => {
    let w = re(I[e] - T[e], n);
    for (let A = 0; A <= Yt; A++) {
      let F = A / Yt, v = 1 - F;
      E[2 * A] = T[e] + (I[e] - T[e]) * F * F * (3 - 2 * F), E[2 * A + 1] = n * (3 * w * F * v * v + 3 * (1 - w) * F * F * v + F * F * F);
    }
  }, j = (e, n, E) => {
    let w = E * E * 1.000000001;
    for (let A = 0; A <= Yt; A++) {
      let F = e[2 * A], v = e[2 * A + 1];
      for (let J = 0; J < Yt; J++) {
        let p = n[2 * J + 2] - n[2 * J], W = n[2 * J + 3] - n[2 * J + 1], h = Math.max(0, Math.min(1, ((F - n[2 * J]) * p + (v - n[2 * J + 1]) * W) / (p * p + W * W || 1))), N = F - n[2 * J] - h * p, B = v - n[2 * J + 1] - h * W;
        if (N * N + B * B < w && Math.hypot(N, B) < E)
          return !0;
      }
    }
    return !1;
  }, b = (e, n, E, w) => {
    let A = Math.max(E / 2, E - 2 * de);
    return _(e, A, jt), _(n, A, zt), j(jt, zt, w) || j(zt, jt, w);
  };
  for (let [e, n] of i) {
    if (!r) {
      c[e] = m(n);
      continue;
    }
    if (n.length > qt)
      continue;
    let E = n.filter((h) => d[h] === 1);
    m(E);
    let w = new Set(E.filter((h) => l[h] > 1)), A = R(n);
    for (let h = 0; h < A.length; h += 2) {
      let N = n[A[h]], B = n[A[h + 1]];
      w.has(N) && w.has(B) || !ot(N, B) || T[N] < I[N] != T[B] < I[B] || b(N, B, y[e], d[N] === 1 || d[B] === 1 ? pe : we) && w.add(N).add(B);
    }
    for (let h of E)
      u[h] = -1, l[h] = 0;
    if (w.size === 0)
      continue;
    let F = 0, v = 0, J = /* @__PURE__ */ new Set();
    for (let h = 0; h < A.length; h += 2) {
      let N = n[A[h]], B = n[A[h + 1]];
      if (w.has(N) && w.has(B)) {
        if (!tt(N, B))
          continue;
        T[N] < I[N] != T[B] < I[B] ? F++ : C(N, B) || v++;
      } else
        (w.has(N) || w.has(B)) && g(N, B) && J.add(N).add(B);
    }
    if (F > v) {
      for (let h of n)
        (f[h] - x[h]) * Qt > s[e] && (s[e] = (f[h] - x[h]) * Qt);
      continue;
    }
    let p = n.filter((h) => w.has(h) || d[h] !== 1 && J.has(h));
    m(p);
    let W = 0;
    for (let h of p)
      l[h] > W && (W = l[h]);
    c[e] = W;
  }
}
function Se(o, c, r, y, s, T, I) {
  let { maxRank: U, EF: u, ET: l, EFD: d, ETD: V, succStart: i, succE: x, predStart: f, predE: k, layerStart: C, order: tt } = o, ot = new Float64Array(c.length), g = new Float64Array(c.length), D = new Float64Array(c.length);
  for (let m = 0; m < y.length; m++) {
    let _ = y[m];
    if (_ < 0)
      continue;
    let j = _ + s[m] - 1, b = o.RANK[_];
    for (let e = _; e < j; e++) {
      if (!r[b + e - _])
        continue;
      let n = e;
      for (; n + 1 < j && r[b + n + 1 - _]; )
        n++;
      let E = k[f[e]], w = x[i[n]], A = c[u[E]] + d[E], F = c[l[w]] + V[w], v = n - e + 2;
      for (let J = e; J <= n; J++)
        ot[J] = A + (F - A) * (J - e + 1) / v, g[J] = A, D[J] = F;
      e = n;
    }
  }
  let R = [];
  for (let m = 1; m < U; m++) {
    if (!r[m])
      continue;
    let _ = C[m], j = C[m + 1], b = Array.from(tt.subarray(_, j)).sort((e, n) => g[e] - g[n] || D[e] - D[n] || e - n);
    for (let e = 0; e < b.length; ) {
      R.length = 0;
      let n = e;
      for (; n < b.length && Math.abs(g[b[n]] - g[b[e]]) < 1 && Math.abs(D[b[n]] - D[b[e]]) < 1; n++)
        R.push(b[n]);
      R.sort((E, w) => o.pos[E] - o.pos[w]);
      for (let E = 0; E < R.length; E++) {
        let w = R[E];
        c[w] = ot[w] + (E - (R.length - 1) / 2) * T, (R.length === 1 || T === 0) && (I[w] = 1);
      }
      e = n;
    }
  }
}
function ve(o, c, r, y, s, T) {
  let { maxRank: I, W: U, KIND: u, RANK: l, EF: d, ET: V, EFD: i, ETD: x, succStart: f, succE: k, predStart: C, predE: tt, layerStart: ot, order: g } = o, D = new Uint8Array(I + 1), R = !1;
  for (let m = 1; m < I; m++) {
    let _ = !1, j = !1;
    for (let b = ot[m]; b < ot[m + 1]; b++) {
      let e = u[g[b]];
      e === 2 ? _ = !0 : e !== 1 && (j = !0);
    }
    _ && !j && (D[m] = 1, R = !0);
  }
  if (R)
    for (let m = 0; m < r.length; m++) {
      let _ = r[m];
      if (!(_ < 0))
        for (let j = _, b = _ + y[m] - 1; j < b; j++) {
          if (u[j] !== 1 || !D[l[j]])
            continue;
          let e = j, n = j;
          for (; e > _ && T[e - 1]; )
            e--;
          for (; n + 1 < b && T[n + 1]; )
            n++;
          let E = tt[C[e]], w = k[f[n]], A = c[d[E]] + i[E], F = c[V[w]] + x[w], v = Math.min(A, F) - s, J = Math.max(A, F) + s, p = !0, W = l[j];
          for (let N = ot[W]; p && N < ot[W + 1]; N++) {
            let B = g[N];
            u[B] === 2 && c[B] + U[B] / 2 > v && c[B] - U[B] / 2 < J && (p = !1);
          }
          if (!p)
            continue;
          T[j] = 1;
          let h = n - e + 2;
          for (let N = e; N <= n; N++)
            c[N] = A + (F - A) * (N - e + 1) / h;
        }
    }
}
function De(o, c) {
  let { n: r, real: y, maxRank: s, W: T, EF: I, ET: U, EFD: u, ETD: l, succStart: d, succE: V, predStart: i, predE: x, layerStart: f, order: k, pos: C, offsets: tt, fixed: ot, GRP: g, groupParent: D } = o, R = 0;
  for (let Y = 0; Y <= s; Y++)
    R = Math.max(R, f[Y + 1] - f[Y]);
  if (R < 2)
    return [0, 0];
  let m = tt ? new Int32Array(I.length) : void 0, _ = new Int32Array(m ? I.length : 0), j = new Int32Array(m ? r : 0), b = m ? V.slice() : V, e = new Uint8Array(m ? r : 0);
  if (m) {
    let Y = x.slice(), O = (X, Q, at, rt) => {
      for (let ft = Q + 1; ft < at; ft++)
        if (rt[X[ft]] !== rt[X[Q]])
          return X.subarray(Q, at).sort((It, lt) => rt[It] - rt[lt]), !0;
      return !1;
    };
    for (let X = 0; X < r; X++) {
      if (j[X] = 1, O(Y, i[X], i[X + 1], l))
        for (let Q = i[X] + 1; Q < i[X + 1]; Q++)
          l[Y[Q]] !== l[Y[Q - 1]] && j[X]++, _[Y[Q]] = j[X] - 1;
      O(b, d[X], d[X + 1], u) && (e[X] = 1);
    }
  }
  let n = 1;
  for (; n < (m ? R + I.length : R); )
    n <<= 1;
  let E = new Int32Array(2 * n), w = new Int32Array(I.length), A = () => {
    let Y = 0;
    for (let O = 0; O < s; O++) {
      let X = f[O + 2] - f[O + 1];
      if (m) {
        let rt = 0;
        for (let ft = f[O + 1]; ft < f[O + 2]; ft++) {
          let It = k[ft];
          for (let lt = i[It]; lt < i[It + 1]; lt++)
            m[x[lt]] = rt + _[x[lt]];
          rt += j[It];
        }
        X = rt;
      }
      if (X < 2)
        continue;
      let Q = 0;
      for (let rt = f[O]; rt < f[O + 1]; rt++) {
        let ft = k[rt], It = d[ft], lt = d[ft + 1], dt = Q;
        for (let xt = It; xt < lt; xt++)
          w[Q++] = m ? m[b[xt]] : C[U[V[xt]]];
        let kt = Q - dt;
        if (!(kt < 2))
          if (m && e[ft])
            for (let xt = dt + 1; xt < Q; xt++) {
              let pt = w[xt], wt = u[b[It + xt - dt]], Et = xt - 1;
              for (; Et >= dt && u[b[It + Et - dt]] === wt && w[Et] > pt; )
                w[Et + 1] = w[Et], Et--;
              w[Et + 1] = pt;
            }
          else if (kt <= 12)
            for (let xt = dt + 1; xt < Q; xt++) {
              let pt = w[xt], wt = xt - 1;
              for (; wt >= dt && w[wt] > pt; )
                w[wt + 1] = w[wt], wt--;
              w[wt + 1] = pt;
            }
          else
            w.subarray(dt, Q).sort();
      }
      if (Q < 2)
        continue;
      let at = 1;
      for (; at < X; )
        at <<= 1;
      E.fill(0, 0, 2 * at);
      for (let rt = 0; rt < Q; rt++) {
        let ft = w[rt] + at;
        for (E[ft]++; ft > 1; )
          (ft & 1) === 0 && (Y += E[ft + 1]), ft >>= 1, E[ft]++;
      }
    }
    return Y;
  }, F = A(), v = new Float64Array(r), J = new Int32Array(R), p = new Int32Array(R), W = D ? D.length : 0, h = new Int32Array(W);
  for (let Y = 0; Y < W; Y++)
    for (let O = Y; O >= 0; O = D[O])
      h[Y]++;
  let N = new Float64Array(W), B = new Int32Array(W), L = new Int32Array(W), et = (Y, O) => {
    let X = f[Y], Q = f[Y + 1];
    for (let lt = X; lt < Q; lt++)
      for (let dt = g[k[lt]]; dt >= 0; dt = D[dt])
        N[dt] = 0, B[dt] = 0;
    for (let lt = X; lt < Q; lt++) {
      let dt = k[lt];
      for (let kt = g[dt]; kt >= 0; kt = D[kt])
        B[kt] === 0 && (L[kt] = lt), N[kt] += O[dt], B[kt]++;
    }
    let at = (lt) => lt >= r ? N[lt - r] / B[lt - r] : O[lt], rt = (lt) => lt >= r ? L[lt - r] : X + C[lt], ft = (lt, dt) => {
      let kt = lt, xt = dt, pt = g[lt], wt = g[dt], Et = pt < 0 ? 0 : h[pt], St = wt < 0 ? 0 : h[wt];
      for (; Et > St; Et--)
        kt = r + pt, pt = D[pt];
      for (; St > Et; St--)
        xt = r + wt, wt = D[wt];
      for (; pt !== wt; )
        kt = r + pt, pt = D[pt], xt = r + wt, wt = D[wt];
      return at(kt) - at(xt) || rt(kt) - rt(xt);
    }, It = Array.from(k.subarray(X, Q)).sort(ft);
    k.set(It, X);
    for (let lt = X; lt < Q; lt++)
      C[k[lt]] = lt - X;
  };
  if (g) {
    let Y = new Float64Array(r);
    for (let O = 0; O <= s; O++) {
      for (let X = f[O]; X < f[O + 1]; X++)
        Y[k[X]] = X - f[O];
      et(O, Y);
    }
  }
  let P = g ? A() : F;
  if (P === 0)
    return [0, F];
  let nt = k.slice(), K = Math.min(P, F), z = (Y, O) => {
    let X = Y ? i : d, Q = Y ? x : V, at = Y ? I : U, rt = Y ? u : l;
    for (let ft = 1; ft <= s; ft++) {
      let It = Y ? ft : s - ft;
      if (ot[It])
        continue;
      let lt = f[It], dt = f[It + 1], kt = 0;
      for (let pt = lt; pt < dt; pt++) {
        let wt = k[pt], Et = wt < y ? c[wt].pin : 0;
        if (Et !== 0) {
          v[wt] = Et * 1e9, J[kt++] = wt;
          continue;
        }
        let St = X[wt], Kt = X[wt + 1];
        if (St === Kt) {
          if (g) {
            let Tt = Y ? f[It] - f[It - 1] : f[It + 2] - f[It + 1];
            v[wt] = (pt - lt) * Tt / (dt - lt);
            continue;
          }
          v[wt] = -1;
          continue;
        }
        let Rt = 0;
        for (let Tt = St; Tt < Kt; Tt++) {
          let Nt = at[Q[Tt]];
          Rt += C[Nt], tt && T[Nt] > 0 && (Rt += rt[Q[Tt]] / T[Nt]);
        }
        v[wt] = Rt / (Kt - St), J[kt++] = wt;
      }
      if (g) {
        et(It, v);
        continue;
      }
      if (kt < 2)
        continue;
      Ae(J, kt, v, C, O, p);
      let xt = 0;
      for (let pt = lt; pt < dt; pt++)
        v[k[pt]] !== -1 && (k[pt] = J[xt++]);
      for (let pt = lt; pt < dt; pt++)
        C[k[pt]] = pt - lt;
    }
  }, st = () => {
    let Y = 0;
    for (let O = 0; O <= s; O++)
      for (let X = f[O]; X < f[O + 1]; X++)
        if (!(k[X] >= y))
          for (let Q = X + 1; Q < f[O + 1]; Q++)
            k[Q] < k[X] && Y++;
    return Y;
  }, Z = () => {
    for (let Y = 0; Y <= s; Y++)
      for (let O = f[Y]; O < f[Y + 1]; O++)
        C[k[O]] = O - f[Y];
  }, ht = (Y) => Y < y ? c[Y].pin : 0, yt = (Y, O) => {
    let X = O ? I[Y] : U[Y];
    return tt && T[X] > 0 ? C[X] + (O ? u[Y] : l[Y]) / T[X] : C[X];
  }, Ft = (Y, O) => {
    let X = 0;
    for (let Q = i[Y]; Q < i[Y + 1]; Q++) {
      let at = yt(x[Q], !0);
      for (let rt = i[O]; rt < i[O + 1]; rt++)
        at > yt(x[rt], !0) && X++;
    }
    for (let Q = d[Y]; Q < d[Y + 1]; Q++) {
      let at = yt(V[Q], !1);
      for (let rt = d[O]; rt < d[O + 1]; rt++)
        at > yt(V[rt], !1) && X++;
    }
    return X;
  }, S = () => {
    for (let Y = 0; Y < 8; Y++) {
      let O = !1;
      for (let X = 0; X <= s; X++) {
        if (ot[X])
          continue;
        let Q = f[X];
        for (let at = Q; at + 1 < f[X + 1]; at++) {
          let rt = k[at], ft = k[at + 1];
          ht(rt) !== ht(ft) || g && g[rt] !== g[ft] || Ft(ft, rt) >= Ft(rt, ft) || (k[at] = ft, k[at + 1] = rt, C[ft] = at - Q, C[rt] = at + 1 - Q, O = !0);
        }
      }
      if (!O)
        break;
    }
  }, At = k.slice(), Mt = r <= 600, gt = nt, ct = 1 / 0;
  for (let Y = 0; Y < (Mt ? 2 : 1); Y++) {
    Y > 0 && (k.set(At), Z());
    let O = K, X = At.slice();
    for (let at = 0, rt = 0; rt < 4 && at < oe; at++, rt++) {
      z((at + Y) % 2 === 0, at % 4 >= 2);
      let ft = A();
      if (ft < O && (O = ft, X.set(k), rt = 0, ft === 0))
        break;
    }
    if (k.set(X), Mt && O > 0) {
      Z(), S();
      let at = A();
      at < O && (O = at, X.set(k));
    }
    let Q = Mt ? st() : 0;
    (Y === 0 || O < P || O === P && Q < ct) && (P = O, gt = X, ct = Q);
  }
  if (k.set(gt), Z(), nt.set(gt), g && (P = A()), !Mt)
    return [P, F];
  for (let Y = 0; Y < y; Y++)
    if (c[Y].pin !== 0)
      return [P, F];
  if (ct === 0 || ot[0] || ot[s])
    return [P, F];
  for (let Y = 0; Y <= s; Y++)
    k.subarray(f[Y], f[Y + 1]).reverse();
  return Z(), (A() > P || st() >= ct) && k.set(nt), [P, F];
}
function le(o, c, r) {
  return o.W[r] / 2 + (o.KIND[r] === 0 ? c.nodeSep : c.edgeSep) / 2;
}
function te(o, c) {
  let { n: r, maxRank: y, W: s, KIND: T, EF: I, ET: U, EFD: u, ETD: l, succStart: d, succE: V, predStart: i, predE: x, layerStart: f, order: k, pos: C } = o, tt = I.length, ot = new Float64Array(r);
  for (let L = 0; L < r; L++)
    ot[L] = le(o, c, L);
  let g = new Int32Array(tt);
  for (let L = 0; L < tt; L++)
    g[L] = C[U[L]];
  for (let L = 0; L < r; L++)
    d[L + 1] - d[L] > 1 && Zt(V, d[L], d[L + 1], g);
  for (let L = 0; L < tt; L++)
    g[L] = C[I[L]];
  for (let L = 0; L < r; L++)
    i[L + 1] - i[L] > 1 && Zt(x, i[L], i[L + 1], g);
  let D = new Uint8Array(tt);
  for (let L = 1; L <= y; L++) {
    let et = f[L] - f[L - 1], P = f[L], nt = f[L + 1], K = 0, z = P;
    for (let st = P; st < nt; st++) {
      let Z = k[st], ht = -1;
      if (Ct(T[Z])) {
        let Ft = I[x[i[Z]]];
        Ct(T[Ft]) && (ht = Ft);
      }
      let yt = ht >= 0 ? C[ht] : et;
      if (ht >= 0 || st === nt - 1) {
        for (let Ft = z; Ft <= st; Ft++) {
          let S = k[Ft], At = Ct(T[S]);
          for (let Mt = i[S]; Mt < i[S + 1]; Mt++) {
            let gt = x[Mt], ct = C[I[gt]];
            (ct < K || yt < ct) && !(At && Ct(T[I[gt]])) && (D[gt] = 1);
          }
        }
        z = st + 1, K = yt;
      }
    }
  }
  let R = [], m = new Int32Array(r), _ = new Int32Array(r), j = new Float64Array(r), b = new Int32Array(r), e = new Int32Array(r), n = new Float64Array(r), E = new Int32Array(r), w = new Int32Array(r + 1), A = new Int32Array(r), F = new Int32Array(r), v = new Int32Array(r), J = new Float64Array(r);
  for (let L = 0; L < 4; L++) {
    let et = L < 2, P = (L & 1) === 1, nt = et ? i : d, K = et ? x : V, z = et ? I : U, st = et ? l : u, Z = et ? u : l;
    for (let S = 0; S < r; S++)
      m[S] = S, _[S] = S, j[S] = 0, E[S] = 0, w[S + 1] = 0, J[S] = 0;
    for (let S = 0; S <= y; S++) {
      let At = et ? S : y - S, Mt = f[At], gt = f[At + 1], ct = et ? At - 1 : At + 1, Y = ct >= 0 && ct <= y ? f[ct + 1] - f[ct] - 1 : 0, O = -1;
      for (let X = P ? gt - 1 : Mt; P ? X >= Mt : X < gt; P ? X-- : X++) {
        let Q = k[X], at = nt[Q], rt = nt[Q + 1] - at;
        if (rt === 0)
          continue;
        let ft = at + (rt - 1 >> 1), It = at + (rt >> 1);
        for (let lt = 0; lt < 2 && !(lt === 1 && ft === It); lt++) {
          let dt = K[lt === 0 !== P ? ft : It], kt = z[dt], xt = P ? Y - C[kt] : C[kt];
          _[Q] === Q && O < xt && D[dt] === 0 && (_[kt] = Q, _[Q] = m[Q] = m[kt], j[Q] = j[kt] + Z[dt] - st[dt], O = xt);
        }
      }
    }
    let ht = 0;
    for (let S = 0; S <= y; S++) {
      let At = f[S], Mt = f[S + 1];
      for (let gt = At + 1; gt < Mt; gt++) {
        let ct = P ? k[gt] : k[gt - 1], Y = P ? k[gt - 1] : k[gt], O = ot[ct] + ot[Y];
        b[ht] = m[ct], e[ht] = m[Y], n[ht] = P ? O - j[ct] + j[Y] : O + j[ct] - j[Y], E[m[Y]]++, w[m[ct] + 1]++, ht++;
      }
    }
    for (let S = 0; S < r; S++)
      w[S + 1] += w[S];
    for (let S = 0; S < r; S++)
      F[S] = w[S];
    for (let S = 0; S < ht; S++)
      A[F[b[S]]++] = S;
    let yt = 0;
    for (let S = 0; S < r; S++)
      m[S] === S && E[S] === 0 && (v[yt++] = S);
    for (let S = 0; S < yt; S++) {
      let At = v[S];
      for (let Mt = w[At]; Mt < w[At + 1]; Mt++) {
        let gt = A[Mt], ct = e[gt];
        J[At] + n[gt] > J[ct] && (J[ct] = J[At] + n[gt]), --E[ct] === 0 && (v[yt++] = ct);
      }
    }
    for (let S = yt - 1; S >= 0; S--) {
      let At = v[S], Mt = 1 / 0;
      for (let gt = w[At]; gt < w[At + 1]; gt++) {
        let ct = A[gt], Y = J[e[ct]] - n[ct];
        Y < Mt && (Mt = Y);
      }
      Mt !== 1 / 0 && Mt > J[At] && (J[At] = Mt);
    }
    let Ft = new Float64Array(r);
    for (let S = 0; S < r; S++)
      Ft[S] = (P ? -J[m[S]] : J[m[S]]) + j[S];
    R.push(Ft);
  }
  let p = 0, W = 1 / 0, h = [], N = [];
  for (let L = 0; L < 4; L++) {
    let et = 1 / 0, P = -1 / 0, nt = R[L];
    for (let K = 0; K < r; K++) {
      let z = s[K] / 2;
      nt[K] - z < et && (et = nt[K] - z), nt[K] + z > P && (P = nt[K] + z);
    }
    h.push(et), N.push(P), P - et < W && (W = P - et, p = L);
  }
  for (let L = 0; L < 4; L++) {
    let et = (L & 1) === 0 ? h[p] - h[L] : N[p] - N[L];
    if (et !== 0) {
      let P = R[L];
      for (let nt = 0; nt < r; nt++)
        P[nt] += et;
    }
  }
  let B = new Float64Array(r);
  for (let L = 0; L < r; L++) {
    let et = R[0][L], P = R[1][L], nt = R[2][L], K = R[3][L], z;
    et > P && (z = et, et = P, P = z), nt > K && (z = nt, nt = K, K = z), et > nt && (z = et, et = nt, nt = z), P > K && (z = P, P = K, K = z), P > nt && (z = P, P = nt, nt = z), B[L] = (P + nt) / 2;
  }
  return B;
}
var Xt = 8, Te = 12, Vt = 0.62, Ot = 6;
function Le() {
  let o = /* @__PURE__ */ new Map();
  return { add(c, r, y) {
    var T;
    let s = Ue(y);
    r >= 0 && s > 0 && s + Ot > ((T = o.get(c * 4 + r)) != null ? T : 0) && o.set(c * 4 + r, s + Ot);
  }, of: (c, r) => {
    var y;
    return r >= 0 && (y = o.get(c * 4 + r)) != null ? y : 0;
  } };
}
function Ye(o, c, r, y, s = r > 0 ? r + Ot : 0, T = y > 0 ? y + Ot : 0) {
  let I = c === "linear", U = c === "step" || c === "stepBefore" || c === "stepAfter", u = [], l = [], d = [], V = (p, W, h, N) => Math.abs(p - h) < 0.01 && Math.abs(W - N) < 0.01;
  for (let p = 0; p < o.length; p += 3) {
    let W = o[p], h = o[p + 1], N = o[p + 2], B = u.length - 1;
    if (U && B >= 0 && Math.abs(W - u[B]) >= 0.01 && Math.abs(h - l[B]) >= 0.01) {
      let L = u[B], et = l[B], P = c === "stepBefore" ? et : c === "stepAfter" ? h : (et + h) / 2, nt = c === "stepBefore" ? L : c === "stepAfter" ? W : (L + W) / 2, K = N === 0 ? [L, P, W, P] : [nt, et, nt, h];
      for (let z = 0; z < 4; z += 2)
        V(K[z], K[z + 1], L, et) || V(K[z], K[z + 1], W, h) || (u.push(K[z]), l.push(K[z + 1]), d.push(N));
    }
    u.push(W), l.push(h), d.push(N);
  }
  let i = u.length - 1, x = (p) => Math.abs(u[p] - u[p - 1]) < 0.01 || Math.abs(l[p] - l[p - 1]) < 0.01, f = (p) => I || x(p), k = (p, W, h) => {
    if (!f(Math.max(p, W)))
      return h === 0 ? [0, Math.sign(l[W] - l[p]) || 1] : [Math.sign(u[W] - u[p]) || 1, 0];
    let N = u[W] - u[p], B = l[W] - l[p], L = Math.hypot(N, B) || 1;
    return [N / L, B / L];
  }, [C, tt] = k(0, 1, d[1]), [ot, g] = k(i - 1, i, d[i]), D = u[0], R = l[0], m = u[i], _ = l[i];
  u[0] += C * r, l[0] += tt * r, u[i] -= ot * y, l[i] -= g * y;
  let j = (p) => Math.abs(u[p] - u[p - 1]) + Math.abs(l[p] - l[p - 1]), b = (p) => !I && p > 0 && p < i && x(p) && x(p + 1) && j(p) >= 0.01 && j(p + 1) >= 0.01 && Math.abs(u[p] - u[p - 1]) < 0.01 != Math.abs(u[p + 1] - u[p]) < 0.01, e = (p, W, h) => Math.abs(u[p] - u[p - 1]) * Math.abs(W) + Math.abs(l[p] - l[p - 1]) * Math.abs(h), n = (p, W, h) => {
    let N = Math.min(Math.max(0, p - Ot - W), h / 4);
    return N + Math.min(p - W - N, (h - N) / 4);
  }, E = T > y && (!f(i) || b(i - 1)) ? n(T, y, e(i, ot, g)) : 0, w = s > r && (!f(1) || b(1)) ? n(s, r, e(1, C, tt)) : 0;
  E >= 1 && (u.splice(i, 0, u[i] - ot * E), l.splice(i, 0, l[i] - g * E), d.splice(i, 0, d[i]), i++), w >= 1 && (u.splice(1, 0, u[0] + C * w), l.splice(1, 0, l[0] + tt * w), d.splice(1, 0, d[1]), i++);
  let A = `M${it(u[0])},${it(l[0])}`, F = u[0], v = l[0], J = (p, W) => {
    V(p, W, F, v) || (A += `L${it(p)},${it(W)}`, F = p, v = W);
  };
  for (let p = 1; p <= i; p++) {
    let W = u[p], h = l[p];
    if (!f(p)) {
      let K = d[p] === 0, z = K ? h - v : W - F, st = Math.abs(z) * re(K ? W - F : h - v, z), Z = K ? 0 : Math.sign(z) * st, ht = K ? Math.sign(z) * st : 0;
      A += `C${it(F + Z)},${it(v + ht)} ${it(W - Z)},${it(h - ht)} ${it(W)},${it(h)}`, F = W, v = h;
      continue;
    }
    if (!b(p)) {
      if (p < i && x(p) && x(p + 1) && (W - u[p - 1]) * (u[p + 1] - W) + (h - l[p - 1]) * (l[p + 1] - h) > 0)
        continue;
      J(W, h);
      continue;
    }
    let N = b(p - 1) ? j(p) / 2 : j(p), B = b(p + 1) ? j(p + 1) / 2 : j(p + 1);
    U && (N = B = Math.min(Te, N, B));
    let [L, et] = k(p - 1, p, d[p]), [P, nt] = k(p, p + 1, d[p + 1]);
    J(W - L * N, h - et * N), F = W + P * B, v = h + nt * B, U ? A += `Q${it(W)},${it(h)} ${it(F)},${it(v)}` : A += `C${it(W - L * N * (1 - Vt))},${it(h - et * N * (1 - Vt))} ${it(W + P * B * (1 - Vt))},${it(h + nt * B * (1 - Vt))} ${it(F)},${it(v)}`;
  }
  return { d: A, sx: D, sy: R, sdx: -C, sdy: -tt, ex: m, ey: _, edx: ot, edy: g };
}
function Ue(o) {
  return o === "arrow_point" ? Xt - 1 : o === "arrow_circle" ? Xt : o === "arrow_cross" ? 4 : 0;
}
function Ce(o, c, r, y, s, T) {
  let I = -s, U = y;
  if (o === "arrow_point") {
    let u = c - y * Xt, l = r - s * Xt, d = Xt * 0.42;
    return `<path class="pele-marker" d="M${it(c)},${it(r)}L${it(u + I * d)},${it(l + U * d)}L${it(u - I * d)},${it(l - U * d)}Z" fill="${T}" stroke="none"/>`;
  }
  if (o === "arrow_circle")
    return `<circle class="pele-marker" cx="${it(c - y * 4)}" cy="${it(r - s * 4)}" r="3.5" fill="${T}" stroke="none"/>`;
  if (o === "arrow_cross") {
    let u = c - y * 4, l = r - s * 4, d = 3.5, V = (y + I) * d, i = (s + U) * d, x = (y - I) * d, f = (s - U) * d;
    return `<path class="pele-marker" d="M${it(u - V)},${it(l - i)}L${it(u + V)},${it(l + i)}M${it(u - x)},${it(l - f)}L${it(u + x)},${it(l + f)}"/>`;
  }
  return "";
}
function Xe(o, c, r, y, s, T) {
  let I = c.width + 8, U = c.height;
  return `<g class="pele-edge-label" data-id="${ne(o)}"><rect x="${it(r - I / 2)}" y="${it(y - U / 2)}" width="${it(I)}" height="${it(U)}" rx="3" fill="var(--_bg)"/>` + ae(c, r, y, s, T) + "</g>";
}
function Oe(o, c, r, y, s, T, I, U) {
  let u = (s ? c : r) / 2, l = Math.min(u - 4, 8 + y * 6), d = T + y * 8, V = Math.hypot(d, l) || 1, i = (k, C) => s ? `${it(o.x + C)},${it(o.y + r / 2 + k)}` : `${it(o.x + c / 2 + k)},${it(o.y + C)}`, x = d / V * I, f = l / V * I;
  return s ? (U.labelX = o.x, U.labelY = o.y + r / 2 + d + 4 + U.labelH / 2) : (U.labelX = o.x + c / 2 + d + 4 + U.labelW / 2, U.labelY = o.y), { d: `M${i(0, -l)}C${i(d, -l * 2)} ${i(d, l * 2)} ${i(x, l + f)}`, sx: s ? o.x - l : o.x + c / 2, sy: s ? o.y + r / 2 : o.y - l, sdx: s ? 0 : -1, sdy: s ? -1 : 0, ex: s ? o.x + l : o.x + c / 2, ey: s ? o.y + r / 2 : o.y + l, edx: s ? -l / V : -d / V, edy: s ? -d / V : -l / V };
}
export {
  Re as $,
  ge as A,
  re as C,
  Xe as G,
  Ue as L,
  Ke as N,
  Ce as O,
  Ne as R,
  Ye as T,
  Oe as W,
  Le as _,
  Xt as a,
  Me as p
};
//# sourceMappingURL=YTAM2TF7-f178d8af.js.map

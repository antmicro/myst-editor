import { V as we, w as xe } from "./XGLSEVV2-34ed7c4c.js";
import { N as Ae, $ as ve, p as $e, A as Ie } from "./YTAM2TF7-f178d8af.js";
import { V as Fe, x as ot } from "./3G3HCGVE-09704139.js";
import "./FTXIJQGB-9f8e460c.js";
import "./lazy-950901f8.js";
import "./7WLXJQOR-4872eebf.js";
import "./WJQKAQUO-dbb8c0b4.js";
import "./QRQ46LE7-b110495e.js";
import "./ECH2OJJK-8814648a.js";
import "./6B2VI7MB-716cdb27.js";
import "./XQLH73R6-5278eaeb.js";
import "./DKTLEL5E-e2b762b2.js";
var ke = 34, Te = 24, We = 8, He = 2e4, oe = 1e4, Qt = 2e6, he = 4, _e = 3, ie = 8, jt = 20, fe = 20, pe = 14, Se = 3;
function Ue(n, y, A, Y, E = Te) {
  let _ = n.length;
  if (_ === 0)
    return { width: 0, height: 0 };
  let k = A === "LR" || A === "RL", mt = A === "BT" || A === "RL", X = [];
  for (let p = _ - 1; p >= 0; p--)
    n[p].parent < 0 && n[p].isGroup && X.push(p);
  let C = Math.max(1, X.length), lt = new Int32Array(_).fill(-1);
  X.forEach((p, T) => lt[p] = T);
  let vt = new Uint8Array(_);
  for (let p = 0; p < _; p++)
    n[p].parent >= 0 && (vt[n[p].parent] = 1);
  let dt = new Float64Array(C).fill(E), Ft = E, me = (p) => {
    let T = p, c = E;
    for (let j = 0; n[T].parent >= 0 && j < oe; j++)
      T = n[T].parent, lt[T] < 0 && (c += Math.max(n[T].padX, n[T].padTop, n[T].padBottom));
    let S = Math.max(0, lt[T]);
    return c > dt[S] && (dt[S] = c), c > Ft && (Ft = c), S;
  }, kt = new Int32Array(_).fill(-1), D = [];
  for (let p = 0; p < _; p++)
    lt[p] >= 0 || (!n[p].isGroup || !vt[p]) && (kt[p] = D.length, D.push(p));
  let de = (p) => k ? p.w : p.h, be = (p) => k ? p.h : p.w, bt = D.map((p) => Ae(be(n[p]), de(n[p]))), rt = [], Ut = [], Mt = 1;
  {
    let p = /* @__PURE__ */ new Set();
    for (let T = 0; T < y.length; T++) {
      let c = y[T], S = kt[c.src], j = kt[c.dst];
      if (S < 0 || j < 0 || S === j)
        continue;
      let q = Math.min(S, j) * D.length + Math.max(S, j);
      (c.labelW > 0 || p.has(q)) && (Mt = 2), p.add(q), rt.push(ve(S, j, c.minlen, k ? c.labelH : c.labelW, k ? c.labelW : c.labelH)), Ut.push(T);
    }
  }
  $e(bt, rt), Ie(bt, rt, Mt);
  let Q = rt.length, Me = Int32Array.from(D, me), Gt = (p, T) => {
    let c = dt.map((t, e) => T[e] ? Math.max(t, fe) : t), S = new Uint8Array(C), j = 0, q = new Int32Array(Q);
    for (let t = 0; t < Q; t++)
      q[t] = Math.abs(bt[rt[t].head].rank - bt[rt[t].tail].rank), p[t] || (j += q[t] - 1);
    let qt = j > He, R = D.length + (qt ? 0 : j), w = new Int32Array(R), v = new Int32Array(R), G = new Float64Array(R), tt = new Float64Array(R), Lt = new Uint8Array(R), N = 0;
    for (let t = 0; t < D.length; t++)
      w[t] = bt[t].rank, v[t] = Me[t], G[t] = bt[t].w, tt[t] = bt[t].h, w[t] > N && (N = w[t]);
    let Yt = new Int32Array(Q).fill(-1), zt = new Int32Array(Q).fill(-1), O = [];
    {
      let t = D.length;
      for (let e = 0; e < Q; e++) {
        let l = rt[e], o = l.reversed ? l.head : l.tail, s = l.reversed ? l.tail : l.head;
        if (qt || q[e] < 2 || p[e]) {
          O.push(o, s);
          continue;
        }
        let u = w[o], f = w[s], r = -1;
        l.labelW > 0 && (r = u + (f - u >> 1), Mt === 2 && (r & 1) === 0 && r--), Yt[e] = t;
        let m = o;
        for (let a = u + 1; a < f; a++) {
          let b = t++;
          w[b] = a, v[b] = v[o] + Math.round((v[s] - v[o]) * (a - u) / (f - u)), Lt[b] = 1, a === r && (G[b] = l.labelW, tt[b] = l.labelH, zt[e] = b), O.push(m, b), m = b;
        }
        O.push(m, s);
      }
    }
    let yt = new Int32Array(R + 1), ct = new Int32Array(R + 1);
    for (let t = 0; t < O.length; t += 2)
      ct[O[t] + 1]++, yt[O[t + 1] + 1]++;
    for (let t = 0; t < R; t++)
      yt[t + 1] += yt[t], ct[t + 1] += ct[t];
    let Rt = new Int32Array(O.length / 2), Vt = new Int32Array(O.length / 2);
    {
      let t = yt.slice(0, R), e = ct.slice(0, R);
      for (let l = 0; l < O.length; l += 2)
        Vt[e[O[l]]++] = O[l + 1], Rt[t[O[l + 1]]++] = O[l];
    }
    let ft = [];
    for (let t = 0; t <= N; t++)
      ft.push([]);
    for (let t = 0; t < R; t++)
      ft[w[t]].push(t);
    let Xt = new Float64Array(R), Wt = new Float64Array(R), Pt = (t) => {
      t.sort((e, l) => v[e] - v[l] || Wt[e] - Wt[l] || e - l);
      for (let e = 0; e < t.length; e++)
        Xt[t[e]] = e;
    };
    for (let t of ft) {
      for (let e = 0; e < t.length; e++)
        Wt[t[e]] = e;
      Pt(t);
    }
    for (let t = 0; t < We && N > 0; t++) {
      let e = (t & 1) === 0;
      for (let l = 1; l <= N; l++) {
        let o = ft[e ? l : N - l], s = e ? yt : ct, u = e ? Rt : Vt;
        for (let f of o) {
          let r = 0, m = s[f + 1] - s[f];
          for (let a = s[f]; a < s[f + 1]; a++)
            r += Xt[u[a]];
          Wt[f] = m > 0 ? r / m : Xt[f];
        }
        Pt(o);
      }
    }
    let Ht = (t, e) => Lt[t] || Lt[e] ? Y.edgeSep : Y.nodeSep, Ct = (t, e) => {
      let l = 0;
      for (; l < t.length; ) {
        let o = l;
        for (; o + 1 < t.length && v[t[o + 1]] === v[t[l]]; )
          o++;
        e(t, l, o), l = o + 1;
      }
    }, Zt = (t, e, l) => {
      let o = G[t[e]];
      for (let s = e; s < l; s++)
        o += Ht(t[s], t[s + 1]) + G[t[s + 1]];
      return o;
    }, _t = new Float64Array(C), $t = X.length > 0 ? ke : 0;
    for (let t = 0; t < X.length; t++) {
      let e = n[X[t]];
      _t[t] = Math.max(0, e.minW - 2 * c[t]), e.padTop > $t && ($t = e.padTop);
    }
    for (let t of ft)
      Ct(t, (e, l, o) => {
        let s = Zt(t, l, o);
        s > _t[v[t[l]]] && (_t[v[t[l]]] = s);
      });
    let K = new Float64Array(C + 1);
    for (let t = 0; t < C; t++)
      K[t + 1] = K[t] + _t[t] + 2 * c[t];
    let $ = new Float64Array(R), Jt = new Float64Array(R), ge = (t, e, l) => {
      let o = v[t[e]], s = (K[o] + c[o] + (K[o + 1] - c[o]) - Zt(t, e, l)) / 2;
      for (let u = e; u <= l; u++)
        $[t[u]] = s + G[t[u]] / 2, u < l && (s += G[t[u]] + Ht(t[u], t[u + 1]));
    }, ye = (t, e, l) => {
      let o = v[t[e]], s = K[o] + c[o];
      for (let f = e; f <= l; f++) {
        let r = t[f];
        $[r] = Math.max(Jt[r], s + G[r] / 2), f < l && (s = $[r] + G[r] / 2 + Ht(r, t[f + 1]));
      }
      let u = K[o + 1] - c[o];
      for (let f = l; f >= e; f--) {
        let r = t[f];
        $[r] = Math.min($[r], u - G[r] / 2), f > e && (u = $[r] - G[r] / 2 - Ht(t[f - 1], r));
      }
    };
    for (let t of ft)
      Ct(t, ge);
    for (let t = 0; t < 4 && N > 0; t++) {
      let e = (t & 1) === 0;
      for (let l = 1; l <= N; l++) {
        let o = ft[e ? l : N - l], s = e ? yt : ct, u = e ? Rt : Vt;
        for (let f of o) {
          let r = 0, m = 0;
          for (let a = s[f]; a < s[f + 1]; a++)
            v[u[a]] === v[f] && (r += $[u[a]], m++);
          Jt[f] = m > 0 ? r / m : $[f];
        }
        Ct(o, ye);
      }
    }
    let ht = new Float64Array(N + 1), it = new Float64Array(N + 1), wt = new Float64Array(N + 1).fill(Y.rankSep / Mt);
    if (p.some((t) => t === 1)) {
      let t = Y.rankSep / Mt;
      wt.fill(t / Se);
      for (let e = 0; e < Q; e++) {
        let l = rt[e], o = l.reversed ? l.head : l.tail, s = l.reversed ? l.tail : l.head;
        if (p[e]) {
          if (l.labelH <= 0 || q[e] > Mt)
            continue;
          let f = Math.min(t, (l.labelH + 2 * jt - Math.min(tt[o], tt[s]) / 2) / q[e]);
          for (let r = w[o]; r < w[s]; r++)
            f > wt[r] && (wt[r] = f);
          continue;
        }
        let u = Yt[e];
        if (u < 0 || q[e] <= Mt * l.minlen) {
          for (let f = w[o]; f < w[s]; f++)
            wt[f] = t;
          continue;
        }
        for (let f = u - 1; f < u + q[e] - 1; f++) {
          let r = f < u ? o : f, m = f + 1 < u + q[e] - 1 ? f + 1 : s;
          (v[r] !== v[m] || Math.abs($[r] - $[m]) >= 0.5) && (wt[w[r]] = t);
        }
      }
    }
    let St = $t + Ft;
    for (let t = 0; t <= N; t++) {
      let e = 0;
      for (let l of ft[t])
        tt[l] > e && (e = tt[l]);
      ht[t] = St, it[t] = St + e, St += e + (t === N ? 0 : wt[t]);
    }
    let pt = St + Ft, Nt = K[C], Bt = (t) => mt ? $t + pt - t : t, z = (t, e) => k ? Bt(e) : t, P = (t, e) => k ? t : Bt(e), Et = k ? 1 : 0;
    for (let t = 0; t < D.length; t++) {
      let e = n[D[t]], l = (ht[w[t]] + it[w[t]]) / 2;
      e.x = z($[t], l), e.y = P($[t], l);
    }
    for (let t = 0; t < X.length; t++) {
      let e = n[X[t]], l = (K[t] + K[t + 1]) / 2, o = K[t + 1] - K[t];
      e.x = k ? pt / 2 : l, e.y = k ? l : pt / 2, e.w = k ? pt : o, e.h = k ? o : pt, e.padTop = $t;
    }
    let Dt = new Int32Array(_), Ot = [];
    for (let t = 0; t < _; t++) {
      if (!n[t].isGroup || lt[t] >= 0 || kt[t] >= 0)
        continue;
      let e = 0;
      for (let l = n[t].parent; l >= 0 && e < oe; l = n[l].parent)
        e++;
      Dt[t] = e, Ot.push(t);
    }
    Ot.sort((t, e) => Dt[e] - Dt[t] || t - e);
    let H = new Float64Array(_ * 4);
    for (let t = 0; t < _; t++)
      H[t * 4] = 1 / 0, H[t * 4 + 1] = 1 / 0, H[t * 4 + 2] = -1 / 0, H[t * 4 + 3] = -1 / 0;
    let te = (t, e) => {
      e.x - e.w / 2 < H[t * 4] && (H[t * 4] = e.x - e.w / 2), e.y - e.h / 2 < H[t * 4 + 1] && (H[t * 4 + 1] = e.y - e.h / 2), e.x + e.w / 2 > H[t * 4 + 2] && (H[t * 4 + 2] = e.x + e.w / 2), e.y + e.h / 2 > H[t * 4 + 3] && (H[t * 4 + 3] = e.y + e.h / 2);
    };
    for (let t of D)
      n[t].parent >= 0 && lt[n[t].parent] < 0 && te(n[t].parent, n[t]);
    for (let t of Ot) {
      let e = n[t];
      if (H[t * 4] === 1 / 0)
        continue;
      let l = Math.max(H[t * 4 + 2] - H[t * 4] + 2 * e.padX, e.minW);
      e.x = (H[t * 4] + H[t * 4 + 2]) / 2, e.w = l, e.y = (H[t * 4 + 1] - e.padTop + H[t * 4 + 3] + e.padBottom) / 2, e.h = H[t * 4 + 3] - H[t * 4 + 1] + e.padTop + e.padBottom, e.parent >= 0 && lt[e.parent] < 0 && te(e.parent, e);
    }
    for (let t of y)
      t.route = [];
    for (let t = 0; t < Q; t++) {
      let e = rt[t], l = y[Ut[t]], o = e.reversed ? e.head : e.tail, s = e.reversed ? e.tail : e.head, u = [$[o], it[w[o]] - (it[w[o]] - ht[w[o]] - tt[o]) / 2], f = Yt[t];
      if (f >= 0)
        for (let a = f; a < f + q[t] - 1; a++)
          u.push($[a], ht[w[a]]), it[w[a]] > ht[w[a]] && u.push($[a], it[w[a]]);
      u.push($[s], ht[w[s]] + (it[w[s]] - ht[w[s]] - tt[s]) / 2);
      let r = [];
      for (let a = 0; a < u.length; a += 2)
        r.push(z(u[a], u[a + 1]), P(u[a], u[a + 1]), Et);
      if (e.reversed)
        for (let a = 0, b = r.length - 3; a < b; a += 3, b -= 3)
          for (let g = 0; g < 2; g++) {
            let M = r[a + g];
            r[a + g] = r[b + g], r[b + g] = M;
          }
      l.route = r;
      let m = zt[t];
      if (m >= 0) {
        let a = (ht[w[m]] + it[w[m]]) / 2;
        l.labelX = z($[m], a), l.labelY = P($[m], a);
      } else
        l.labelX = (r[0] + r[r.length - 3]) / 2, l.labelY = (r[1] + r[r.length - 2]) / 2;
    }
    for (let t of y) {
      if (t.route.length > 0 || t.src === t.dst)
        continue;
      let e = n[t.src], l = n[t.dst], [o, s] = se(e, l), [u, f] = se(l, e), r = Math.abs(u - o) > Math.abs(f - s) ? 1 : 0;
      t.route = [o, s, r, u, f, r], t.labelX = (o + u) / 2, t.labelY = (s + f) / 2;
    }
    let ee = new Uint8Array(Q), ce = y.reduce((t, e) => t + e.route.length / 3, 0), Kt = Q * (D.length + y.length + ce);
    if (Kt <= Qt) {
      let t = (r) => (ht[w[r]] + it[w[r]]) / 2, e = y.map((r) => [k ? r.labelY : r.labelX, Bt(k ? r.labelX : r.labelY)]), l = (r, m, a, b, g, M, W, d) => a > g - W / 2 && r < g + W / 2 && b > M - d / 2 && m < M + d / 2, o = (r, m, a, b, g, M, W) => {
        for (let d = 0; d < D.length; d++)
          if (d !== g && d !== M && l(r, m, a, b, $[d], t(d), G[d] + 8, tt[d] + 8))
            return !1;
        for (let d = 0; d < y.length; d++) {
          let x = y[d];
          if (d !== W && x.labelW > 0 && x.src !== x.dst && l(r, m, a, b, e[d][0], e[d][1], k ? x.labelH : x.labelW, k ? x.labelW : x.labelH))
            return !1;
        }
        return !0;
      }, s = (r, m, a, b, g) => {
        let M = 0;
        for (let W = 0; W < y.length; W++) {
          if (W === g)
            continue;
          let d = y[W].route;
          for (let x = 3; x < d.length; x += 3)
            if (Math.max(d[x - 3], d[x]) > r && Math.min(d[x - 3], d[x]) < a && Math.max(d[x - 2], d[x + 1]) > m && Math.min(d[x - 2], d[x + 1]) < b) {
              M++;
              break;
            }
        }
        return M;
      }, u = (r, m, a) => {
        let b = 0;
        for (let g = 0; g < y.length; g++) {
          let M = y[g].route;
          if (g === a || M.length === 0)
            continue;
          let W = M.length - 3;
          (Math.abs(M[0] - r) < 1 && Math.abs(M[1] - m) < 1 || Math.abs(M[W] - r) < 1 && Math.abs(M[W + 1] - m) < 1) && b++;
        }
        return b;
      }, f = (r, m, a, b, g) => {
        let M = Math.abs(a - r) < 0.5, W = M ? Math.min(m, b) : Math.min(r, a), d = M ? Math.max(m, b) : Math.max(r, a), x = M ? r : m;
        for (let et = 0; et < y.length; et++) {
          let xt = y[et];
          if (et === g || xt.src === y[g].src || xt.dst === y[g].dst)
            continue;
          let st = xt.route;
          for (let nt = 3; nt < st.length; nt += 3) {
            let It = st[nt - 3 + (M ? 0 : 1)], h = st[nt + (M ? 0 : 1)];
            if (Math.abs(It - x) >= he || Math.abs(h - x) >= he)
              continue;
            let Z = st[nt - 3 + (M ? 1 : 0)], B = st[nt + (M ? 1 : 0)];
            if (Math.min(d, Math.max(Z, B)) - Math.max(W, Math.min(Z, B)) > 1)
              return !0;
          }
        }
        return !1;
      };
      for (let r = 0; r < Q; r++) {
        let m = rt[r], a = Ut[r], b = y[a], g = m.tail, M = m.head;
        if (v[g] === v[M] || Math.abs($[M] - $[g]) < 1)
          continue;
        let W = $[g], d = $[M], x = t(g), et = t(M), xt = Math.sign(d - W), st = Math.sign(et - x), nt = (h, Z) => {
          for (let i = 2; i < h.length; i += 2)
            if (!o(Math.min(h[i - 2], h[i]) - Z, Math.min(h[i - 1], h[i + 1]) - Z, Math.max(h[i - 2], h[i]) + Z, Math.max(h[i - 1], h[i + 1]) + Z, g, M, a) || f(z(h[i - 2], h[i - 1]), P(h[i - 2], h[i - 1]), z(h[i], h[i + 1]), P(h[i], h[i + 1]), a))
              return !1;
          let B = 0, I = 0, At = -1;
          if (b.labelW > 0) {
            let i = m.labelW, V = m.labelH;
            for (let U = 2; U < h.length; U += 2) {
              let L = (h[U - 2] + h[U]) / 2, J = (h[U - 1] + h[U + 1]) / 2, ut = Math.abs(h[U] - h[U - 2]), le = Math.abs(h[U + 1] - h[U - 1]), re = ut + le;
              if (re <= At || (ut > 0 ? ut < i + 8 : le < V + 8) || L - i / 2 < 0 || L + i / 2 > Nt || J - V / 2 < 0 || J + V / 2 > pt || !o(L - i / 2, J - V / 2, L + i / 2, J + V / 2, -1, -1, a))
                continue;
              let ae = z(L, J), ne = P(L, J);
              s(ae - b.labelW / 2, ne - b.labelH / 2, ae + b.labelW / 2, ne + b.labelH / 2, a) > 0 || (B = L, I = J, At = re);
            }
            if (At < 0)
              return !1;
          }
          let F = [h[0], h[1]];
          for (let i = 2; i < h.length; i += 2) {
            let V = h[i] - h[i - 2], U = h[i + 1] - h[i - 1], L = Math.abs(V) + Math.abs(U), J = i > 2 ? jt : 0, ut = i + 2 < h.length ? jt : 0;
            L > J + ut + 1 && (J && F.push(h[i - 2] + V / L * J, h[i - 1] + U / L * J), ut && F.push(h[i] - V / L * ut, h[i + 1] - U / L * ut)), F.push(h[i], h[i + 1]);
          }
          b.route = [];
          for (let i = 0; i < F.length; i += 2) {
            let V = i === 0 ? F[0] !== F[2] : F[i] !== F[i - 2];
            b.route.push(z(F[i], F[i + 1]), P(F[i], F[i + 1]), V ? 1 - Et : Et);
          }
          return b.labelW > 0 && (b.labelX = z(B, I), b.labelY = P(B, I), e[a] = [B, I]), ee[r] = 1, !0;
        };
        if (nt([W + xt * G[g] / 2, x, d, x, d, et - st * tt[M] / 2], 2) || nt([W, x + st * tt[g] / 2, W, et, d - xt * G[M] / 2, et], 2) || Kt > Qt / ie)
          continue;
        let It = [];
        for (let h of v[g] < v[M] ? [v[M], v[g]] : [v[g], v[M]]) {
          let Z = Math.max(c[h] - pe, Math.min(c[h] / 2, fe - pe));
          for (let B of [K[h] + Z, K[h + 1] - Z]) {
            if (Math.abs(B - W) < G[g] / 2 + 4 || Math.abs(B - d) < G[M] / 2 + 4)
              continue;
            let I = [W + Math.sign(B - W) * G[g] / 2, x, B, x, B, et, d + Math.sign(B - d) * G[M] / 2, et], At = (u(z(I[0], I[1]), P(I[0], I[1]), a) + u(z(I[6], I[7]), P(I[6], I[7]), a)) * 1e6;
            for (let F = 2; F < I.length; F += 2) {
              let i = z(I[F - 2], I[F - 1]), V = P(I[F - 2], I[F - 1]), U = z(I[F], I[F + 1]), L = P(I[F], I[F + 1]);
              At += s(Math.min(i, U), Math.min(V, L), Math.max(i, U), Math.max(V, L), a) * 1e6 + Math.abs(U - i) + Math.abs(L - V);
            }
            It.push({ pts: I, cost: At, lane: h });
          }
        }
        It.sort((h, Z) => h.cost - Z.cost);
        for (let h of It)
          if (nt(h.pts, 1)) {
            S[h.lane] = 1;
            break;
          }
      }
    }
    return { width: k ? pt : Nt, height: k ? Nt : pt, routed: ee, margins: S, work: Kt };
  }, gt = new Uint8Array(Q), Tt = new Uint8Array(C), at = Gt(gt, Tt);
  for (let p = 0; p < _e && at.work <= Qt / ie; p++) {
    let T = p === 0 ? at.routed : gt.map((c, S) => c & at.routed[S]);
    if (T.every((c, S) => c === gt[S]) && at.margins.every((c, S) => c === Tt[S]))
      break;
    gt = T, Tt = at.margins, at = Gt(gt, Tt);
  }
  return gt.some((p, T) => p && !at.routed[T]) && (at = Gt(new Uint8Array(Q), new Uint8Array(C))), { width: at.width, height: at.height };
}
function se(n, y) {
  let A = y.x - n.x, Y = y.y - n.y, E = Math.max(n.w / 2, 0.5), _ = Math.max(n.h / 2, 0.5);
  if (Math.abs(A) < E && Math.abs(Y) < _) {
    let mt = E - Math.abs(A), X = _ - Math.abs(Y);
    return mt < X ? [n.x + (A < 0 ? -E : E), y.y] : [y.x, n.y + (Y < 0 ? -_ : _)];
  }
  let k = Math.min(A !== 0 ? E / Math.abs(A) : 1 / 0, Y !== 0 ? _ / Math.abs(Y) : 1 / 0);
  return [n.x + A * k, n.y + Y * k];
}
var ue = "__swimlane_default__";
function Ge(n) {
  let y = !1;
  for (let A of n.nodes)
    A.isGroup ? A.dir = void 0 : A.parentId === void 0 && (y = !0);
  if (y) {
    for (let A of n.nodes)
      !A.isGroup && A.parentId === void 0 && (A.parentId = ue);
    n.nodes.push({ id: ue, label: void 0, labelType: "text", shape: "rect", isGroup: !0, parentId: void 0, cssStyles: [], cssCompiledStyles: [], cssClasses: "", dir: void 0 });
  }
}
function Le(n, y, A, Y, E, _, k) {
  let mt = n.x - n.w / 2, X = n.y - n.h / 2, C = _ === "LR" || _ === "RL", lt = C ? mt + n.padTop / 2 : n.x, vt = C ? n.y : X + n.padTop / 2, dt = Fe(y, lt, vt, ` class="pele-cluster-label" fill="var(--_m)"${A.text}`, k);
  return `<g class="pele-cluster pele-lane${Y}" data-id="${E}"><rect x="${ot(mt)}" y="${ot(X)}" width="${ot(n.w)}" height="${ot(n.h)}" fill="none" stroke="var(--_b)"/><rect x="${ot(mt)}" y="${ot(X)}" width="${ot(C ? n.padTop : n.w)}" height="${ot(C ? n.h : n.padTop)}" fill="var(--_a)" stroke="var(--_b)"${A.shape}/>` + (C && dt ? `<g transform="rotate(-90 ${ot(lt)} ${ot(vt)})">${dt}</g>` : dt) + "</g>";
}
var Ye = { type: "swimlane", prepare: Ge, layout: (n, y, A, Y, E) => Ue(n, y, A, Y, E ? 12 : void 0), drawGroup: Le }, qe = { type: "swimlane", math: !0, parse: we.parse, render: (n, y, A) => xe(n, y, A, Ye) };
export {
  qe as swimlane
};
//# sourceMappingURL=AQ4F6Z3W-4288e263.js.map

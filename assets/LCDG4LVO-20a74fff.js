var ke = Object.defineProperty;
var Te = (r, e, n) => e in r ? ke(r, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : r[e] = n;
var kt = (r, e, n) => (Te(r, typeof e != "symbol" ? e + "" : e, n), n);
import { p as Fe, h as pe } from "./DKTLEL5E-e2b762b2.js";
import { O as te, M as _e, $ as Re, v as De, V as ze, W as Ce, G as je, P as Ee, H as He, x as Ge, D as Le, j as Pe, z as Se, B as Oe, U as We } from "./IU7WZTP6-20f2a5ec.js";
import { O as ue, G as Je, L as Ne } from "./YTAM2TF7-f178d8af.js";
import { e as Jt, L as Kt, V as Bt, x as C, b as ge, m as Ue } from "./3G3HCGVE-09704139.js";
import { d as Ve, a as qe } from "./lazy-950901f8.js";
function Tt(r) {
  throw new qe(r, "semantic", { type: "architecture" });
}
var Be = class {
  constructor() {
    kt(this, "type", "architecture");
    kt(this, "title");
    kt(this, "accTitle");
    kt(this, "accDescr");
    kt(this, "nodes", /* @__PURE__ */ new Map());
    kt(this, "groups", /* @__PURE__ */ new Map());
    kt(this, "edges", []);
    kt(this, "layoutHints", []);
    kt(this, "registered", /* @__PURE__ */ new Map());
  }
  register(r, e, n) {
    this.registered.has(e) && Tt(`The ${r} id [${e}] is already in use by another ${this.registered.get(e)}`), n !== void 0 && (e === n && Tt(`The ${r} [${e}] cannot be placed within itself`), this.registered.has(n) || Tt(`The ${r} [${e}]'s parent does not exist. Please make sure the parent is created before this ${r}`), this.registered.get(n) === "node" && Tt(`The ${r} [${e}]'s parent is not a group`)), this.registered.set(e, r === "group" ? "group" : "node");
  }
  addService({ id: r, icon: e, iconText: n, title: h, in: l }) {
    this.register("service", r, l), this.nodes.set(r, { id: r, type: "service", icon: e, iconText: n, title: h, in: l });
  }
  addJunction({ id: r, in: e }) {
    this.register("junction", r, e), this.nodes.set(r, { id: r, type: "junction", in: e });
  }
  addGroup({ id: r, icon: e, title: n, in: h }) {
    this.register("group", r, h), this.groups.set(r, { id: r, icon: e, title: n, in: h });
  }
  addEdge({ lhsId: r, rhsId: e, lhsDir: n, rhsDir: h, lhsInto: l, rhsInto: a, lhsGroup: c, rhsGroup: M, title: s }) {
    let v = [["left", r, c], ["right", e, M]];
    for (let [x, u] of v)
      this.registered.has(u) || Tt(`The ${x}-hand id [${u}] does not yet exist. Please create the service/group before declaring an edge to it.`);
    for (let [x, u] of v)
      this.nodes.has(u) || Tt(`The ${x}-hand id [${u}] is a group. Add {group} to a service inside it instead.`);
    let b = this.nodes.get(r).in;
    if (b !== void 0 && b === this.nodes.get(e).in)
      for (let [x, u, D] of v)
        D && Tt(`The ${x}-hand id [${u}] is modified to traverse the group boundary, but the edge does not pass through two groups.`);
    this.edges.push({ lhsId: r, lhsDir: n, lhsInto: l, lhsGroup: c, rhsId: e, rhsDir: h, rhsInto: a, rhsGroup: M, title: s });
  }
  addLayoutHint(r) {
    r.members.length < 2 && Tt(`An align directive requires at least two members; got ${r.members.length}`);
    let e = /* @__PURE__ */ new Set();
    for (let n of r.members)
      this.registered.get(n) !== "node" && Tt(`align ${r.direction} references [${n}], which is not a service or junction`), e.has(n) && Tt(`align ${r.direction} lists [${n}] more than once`), e.add(n);
    this.layoutHints.push(r);
  }
};
function Qe(r, e) {
  r.accDescr && (e.accDescr = r.accDescr.replace(/\n\s+/g, `
`)), r.accTitle && (e.accTitle = r.accTitle.replace(/^\s+/g, "")), r.title && (e.title = r.title);
  for (let n of r.groups)
    e.addGroup(n);
  for (let n of r.services)
    e.addService(n);
  for (let n of r.junctions)
    e.addJunction(n);
  for (let n of r.edges)
    e.addEdge(n);
  for (let n of r.alignments)
    e.addLayoutHint({ direction: n.direction, members: [...n.members] });
}
var ve = { name: "ID", pattern: /[\w]([-\w]*\w)?/y };
function jt(r) {
  return { name: r, pattern: r, longer: [ve] };
}
var fe = [jt("architecture-beta"), jt("junction"), jt("service"), jt("column"), jt("group"), jt("align"), jt("row"), { name: "--", pattern: "--", longer: [te] }, jt("in"), { name: ":", pattern: ":" }, { name: "-", pattern: "-", longer: [te] }, { name: "ARROW_DIRECTION", pattern: /L|R|T|B/y }, { name: "ARROW_GROUP", pattern: /\{group\}/y }, { name: "ARROW_INTO", pattern: /<|>/y }, _e, Re, De(String.raw`[-\w]*\w`), ze, ve, Ce, je, te, Ee, He, { name: "ARCH_ICON", pattern: /\([\w-:]+\)/y }, { name: "ARCH_TITLE", pattern: /\[(?:"([^"\\]|\\.)*"|'([^'\\]|\\.)*'|[^\[\]\r\n]+)\]/y }];
function ee(r) {
  let e = r.slice(1, -1).trim();
  return (e.startsWith('"') && e.endsWith('"') || e.startsWith("'") && e.endsWith("'")) && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\'/g, "'")), e.trim();
}
function Ze(r) {
  let e = new Ge(Le(r, fe, "architecture"), fe, "architecture"), n = { $type: "Architecture", groups: [], services: [], junctions: [], edges: [], alignments: [] }, h = (a) => e.kinds[e.i] === a, l = () => {
    if (e.kind !== -1)
      for (e.kind !== 19 && e.fail("a line break or the end of input"); e.kind === 19; )
        e.i++;
  };
  for (; e.kind === 19; )
    e.i++;
  for (e.expect(0); e.kind !== -1; ) {
    switch (e.kind) {
      case 19:
        e.i++;
        continue;
      case 14:
        n.accDescr = We(e.take());
        break;
      case 15:
        n.accTitle = Oe(e.take());
        break;
      case 16:
        n.title = Se(e.take());
        break;
      case 4: {
        e.i++;
        let a = { $type: "Group", id: e.expect(18) };
        h(24) && (a.icon = e.take().slice(1, -1)), h(25) && (a.title = ee(e.take())), e.accept(8) && (a.in = e.expect(18)), n.groups.push(a);
        break;
      }
      case 2: {
        e.i++;
        let a = { $type: "Service", id: e.expect(18) };
        h(17) ? a.iconText = Pe(e.take()) : h(24) && (a.icon = e.take().slice(1, -1)), h(25) && (a.title = ee(e.take())), e.accept(8) && (a.in = e.expect(18)), n.services.push(a);
        break;
      }
      case 1: {
        e.i++;
        let a = { $type: "Junction", id: e.expect(18) };
        e.accept(8) && (a.in = e.expect(18)), n.junctions.push(a);
        break;
      }
      case 18: {
        let a = e.take(), c = e.accept(12);
        e.expect(9);
        let M = e.expect(11), s = e.accept(13), v;
        e.accept(7) || (h(10) || e.fail("'--' or '-'"), e.i++, v = ee(e.expect(25)), e.expect(10));
        let b = e.accept(13), x = e.expect(11);
        e.expect(9);
        let u = e.expect(18), D = e.accept(12);
        n.edges.push({ $type: "Edge", lhsId: a, lhsGroup: c, lhsDir: M, lhsInto: s, title: v, rhsInto: b, rhsDir: x, rhsId: u, rhsGroup: D });
        break;
      }
      case 5: {
        e.i++, !h(6) && !h(3) && e.fail("'row' or 'column'");
        let a = e.take(), c = [e.expect(18), e.expect(18)];
        for (; h(18); )
          c.push(e.take());
        n.alignments.push({ $type: "Alignment", direction: a, members: c });
        break;
      }
      default:
        e.fail("a group, a service, a junction, an edge, an alignment, a title, or a line break");
    }
    l();
  }
  return n;
}
var Ke = /* @__PURE__ */ new Map([["database", "M4 6a8 3 0 1 0 16 0a8 3 0 1 0-16 0M4 6v12a8 3 0 0 0 16 0V6M4 12a8 3 0 0 0 16 0"], ["server", "M3 4h18v7H3zM3 13h18v7H3zM7 7.5h.01M7 16.5h.01M11 7.5h6M11 16.5h6"], ["disk", "M5 3h14v18H5zM12 6.5a4 4 0 1 0 0 8a4 4 0 1 0 0-8M12 10.5h.01M8 18h3"], ["internet", "M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0M3 12h18M12 3a13 13 0 0 0 0 18M12 3a13 13 0 0 1 0 18"], ["cloud", "M7 18a4 4 0 0 1-.5-7.97A6 6 0 0 1 18 9.5a4.25 4.25 0 0 1-.5 8.5z"]]);
function Ye(r) {
  let e = Ke.get(r);
  return e === void 0 ? "" : `<path d="${e}" stroke="var(--_fg)" stroke-width="1.5"/>`;
}
var Nt = [-1, 1, 0, 0], Qt = [0, 0, -1, 1];
function Yt(r) {
  return r === "L" ? 0 : r === "R" ? 1 : r === "T" ? 2 : 3;
}
var ye = 64, Zt = 2 ** 25, xe = 2 ** 26;
function Xe(r, e, n, h) {
  let l = r.length, a = e.length, c = a, M = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), v = new Int32Array(l + a).fill(c), b = new Int32Array(a + 1), x = [];
  for (let i = 0; i <= a; i++)
    x.push([]);
  e.forEach((i, o) => {
    s.set(i.id, o);
    let d = i.in === void 0 ? void 0 : s.get(i.in);
    d !== void 0 && d !== o ? (v[l + o] = d, b[o] = b[d] + 1) : b[o] = 1;
  }), r.forEach((i, o) => {
    M.set(i.id, o);
    let d = i.in === void 0 ? void 0 : s.get(i.in);
    d !== void 0 && (v[o] = d), x[v[o]].push(o);
  });
  for (let i = 0; i < a; i++)
    x[v[l + i]].push(l + i);
  let u = [], D = [], k = [], I = [], _ = [], j = [], B = new Array(l + a), ut = new Array(l + a), mt = (i, o, d, f, m) => {
    var xt, J;
    if (i === o)
      return;
    let z = i, E = o, P = v[i], T = v[o];
    for (; P !== T; )
      b[P] >= b[T] ? (z = l + P, P = v[z]) : (E = l + T, T = v[E]);
    let G = u.length;
    u.push(i), D.push(o), k.push(d), I.push(f), _.push(z), j.push(E), ((xt = m[z]) != null ? xt : m[z] = []).push(G), ((J = m[E]) != null ? J : m[E] = []).push(G);
  };
  for (let i of h) {
    let o = i.direction === "row";
    for (let d = 1; d < i.members.length; d++) {
      let f = M.get(i.members[d - 1]), m = M.get(i.members[d]);
      f !== void 0 && m !== void 0 && mt(f, m, o ? 1 : 3, o ? 0 : 2, B);
    }
  }
  for (let i of [!1, !0])
    for (let o of n) {
      if (o.lhsDir === o.rhsDir !== i)
        continue;
      let d = M.get(o.lhsId), f = M.get(o.rhsId);
      d !== void 0 && f !== void 0 && mt(d, f, Yt(o.lhsDir), Yt(o.rhsDir), ut);
    }
  let W = new Int32Array(l + a), L = new Int32Array(l + a), Z = new Int32Array(l + a).fill(1), q = new Int32Array(l + a).fill(1), wt = new Uint8Array(l + a), H = [], gt = /* @__PURE__ */ new Map(), rt = [], Mt = /* @__PURE__ */ new Map(), Ft = 0, ft = 0, $t = 0, it = (i, o) => {
    ft = 0, $t = 0;
    for (let d = i; d !== o; d = l + v[d])
      ft += W[d], $t += L[d];
  }, ot = (i, o, d) => {
    if (W[i] = o, L[i] = d, wt[i] = 1, H.push(i), Z[i] * q[i] > ye) {
      rt.push(i);
      return;
    }
    for (let f = d; f < d + q[i]; f++)
      for (let m = o; m < o + Z[i]; m++)
        gt.set((m + Zt) * xe + f + Zt, i);
  }, Et = (i, o, d, f, m) => W[i] < o + f && o < W[i] + Z[i] && L[i] < d + m && d < L[i] + q[i], Ut = (i, o, d, f) => {
    if (d * f > ye) {
      for (let m = Ft; m < H.length; m++)
        if (Et(H[m], i, o, d, f))
          return H[m];
      return -1;
    }
    for (let m = o; m < o + f; m++)
      for (let z = i; z < i + d; z++) {
        let E = gt.get((z + Zt) * xe + m + Zt);
        if (E !== void 0)
          return E;
      }
    for (let m of rt)
      if (Et(m, i, o, d, f))
        return m;
    return -1;
  }, _t = (i, o, d, f, m, z) => {
    var T;
    let E = `${i},${o},${d},${f},${m},${z}`, P = (T = Mt.get(E)) != null ? T : 0;
    for (; ; ) {
      let G = Ut(i + P * m, o + P * z, d, f);
      if (G < 0)
        break;
      P = m > 0 ? W[G] + Z[G] - i : m < 0 ? i + d - W[G] : z > 0 ? L[G] + q[G] - o : o + f - L[G];
    }
    return Mt.set(E, P), P;
  }, Lt = (i, o) => {
    let d = _[o] === i, f = d ? j[o] : _[o];
    if (wt[f])
      return;
    let m = d ? k[o] : I[o], z = d ? I[o] : k[o];
    it(d ? u[o] : D[o], i);
    let E = ft, P = $t;
    it(d ? D[o] : u[o], f);
    let T = Nt[m], G = Qt[m], xt = 0, J = 0, lt = Nt[m] + Nt[z] === 0 && Qt[m] + Qt[z] === 0;
    m === z ? (T = Nt[m] === 0 ? 1 : 0, G = 1 - T) : lt || (xt = -Nt[z], J = -Qt[z]);
    let S, U;
    if (T !== 0 ? (S = T > 0 ? W[i] + Z[i] : W[i] - Z[f], U = L[i] + P + J - $t) : (U = G > 0 ? L[i] + q[i] : L[i] - q[f], S = W[i] + E + xt - ft), lt) {
      let A = ut[f];
      if (A !== void 0 && A.length > 1) {
        let O = [];
        for (let V of A) {
          let tt = j[V] === f, Ht = tt ? _[V] : j[V];
          if (!wt[Ht] || (tt ? k[V] : I[V]) !== m || (tt ? I[V] : k[V]) !== z)
            continue;
          it(tt ? u[V] : D[V], Ht);
          let Pt = T !== 0 ? L[Ht] + $t : W[Ht] + ft;
          it(tt ? D[V] : u[V], f), O.push(Pt - (T !== 0 ? $t : ft));
        }
        O.length > 1 && (O.sort((V, tt) => V - tt), T !== 0 ? U = O[O.length - 1 >> 1] : S = O[O.length - 1 >> 1]);
      }
      let N = T === 0 ? 1 : 0, K = 1 - N, nt = _t(S, U, Z[f], q[f], N, K), X = nt === 0 ? 0 : _t(S, U, Z[f], q[f], -N, -K), ht = nt <= X ? nt : -X;
      S += N * ht, U += K * ht;
    } else {
      let A = _t(S, U, Z[f], q[f], T, G);
      S += T * A, U += G * A;
    }
    ot(f, S, U);
  }, vt = (i) => {
    let o = x[i];
    if (o.length === 0)
      return;
    H.length = 0;
    let d = [];
    for (let A of o) {
      if (wt[A])
        continue;
      Ft = H.length, d.push(Ft), gt.clear(), rt.length = 0, Mt.clear(), ot(A, 0, 0);
      let N = Ft, K = Ft, nt = 0;
      for (; ; ) {
        if (N < H.length) {
          let ht = H[N++], O = B[ht];
          if (O !== void 0)
            for (let V of O)
              Lt(ht, V);
          continue;
        }
        if (K >= H.length)
          break;
        let X = ut[H[K]];
        if (X === void 0 || nt >= X.length) {
          K++, nt = 0;
          continue;
        }
        Lt(H[K], X[nt++]);
      }
    }
    d.push(H.length);
    let f = d.length - 1, m = new Array(f), z = new Array(f), E = new Array(f), P = new Array(f), T = 0, G = 0;
    for (let A = 0; A < f; A++) {
      let N = 1 / 0, K = 1 / 0, nt = -1 / 0, X = -1 / 0;
      for (let ht = d[A]; ht < d[A + 1]; ht++) {
        let O = H[ht];
        N = Math.min(N, W[O]), K = Math.min(K, L[O]), nt = Math.max(nt, W[O] + Z[O]), X = Math.max(X, L[O] + q[O]);
      }
      m[A] = N, z[A] = K, E[A] = nt - N, P[A] = X - K, T += E[A] * P[A], G = Math.max(G, E[A]);
    }
    let xt = Math.max(G, Math.ceil(Math.sqrt(T * 2))), J = 0, lt = 0, S = 0, U = 0;
    for (let A = 0; A < f; A++) {
      J > 0 && J + E[A] > xt && (lt += S, J = 0, S = 0);
      for (let N = d[A]; N < d[A + 1]; N++)
        W[H[N]] += J - m[A], L[H[N]] += lt - z[A];
      J += E[A], S = Math.max(S, P[A]), U = Math.max(U, J);
    }
    i < a && (Z[l + i] = U, q[l + i] = lt + S);
  };
  for (let i = a - 1; i >= 0; i--)
    vt(i);
  vt(c);
  let at = new Int32Array(a), yt = new Int32Array(a), bt = new Int32Array(a), Rt = new Uint8Array(a);
  for (let i = 0; i < a; i++) {
    let o = v[l + i];
    bt[i] = o === c ? -1 : o, at[i] = W[l + i] + (o === c ? 0 : at[o]), yt[i] = L[l + i] + (o === c ? 0 : yt[o]), x[i].length === 0 && (Rt[i] = 1);
  }
  let Dt = new Int32Array(l), zt = new Int32Array(l), Ct = new Int32Array(l);
  for (let i = 0; i < l; i++) {
    let o = v[i];
    Ct[i] = o === c ? -1 : o, Dt[i] = W[i] + (o === c ? 0 : at[o]), zt[i] = L[i] + (o === c ? 0 : yt[o]);
  }
  return { col: Dt, row: zt, groupCol: at, groupRow: yt, groupCols: Z.slice(l), groupRows: q.slice(l), groupParent: bt, groupEmpty: Rt, nodeParent: Ct };
}
var et = 12, tr = 6, me = 4, we = 3, er = [-1, 1, 0, 0], rr = [0, 0, -1, 1];
function re(r, e, n, h, l) {
  let a = r.architecture, c = a !== null && typeof a == "object" && !Array.isArray(a) ? a[e] : void 0;
  return typeof c == "number" && Number.isFinite(c) ? Math.min(l, Math.max(h, c)) : n;
}
function Me(r) {
  let e = /* @__PURE__ */ new Map();
  for (let n of r.sort((h, l) => h - l))
    e.has(n) || e.set(n, e.size);
  return e;
}
function $e(r, e, n, h, l) {
  var a;
  return `<svg class="pele-icon" data-icon="${Kt(r)}" x="${C(e)}" y="${C(n)}" width="${C(h)}" height="${C(h)}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${(a = l == null ? void 0 : l(r)) != null ? a : Ye(r)}</svg>`;
}
function ir(r, e, n, h) {
  let l = r.lines.length > n;
  if (!l && r.width <= e)
    return r;
  let a = h.width("\u2026", r.size, 0), c = [], M = [], s = 0;
  for (let v = 0; v < Math.min(n, r.lines.length); v++) {
    let b = r.lines[v].map((u) => ({ ...u })), x = r.widths[v];
    if (x > e || l && v === n - 1)
      for (; ; ) {
        let u = b[b.length - 1];
        if (u === void 0) {
          b.push({ text: "\u2026", style: 0, width: a }), x = a;
          break;
        }
        let D = x - u.width;
        if (u.icon === void 0 && D + a < e) {
          let k = 0, I = u.text.length;
          for (; k < I; ) {
            let j = k + I + 1 >> 1;
            D + h.width(u.text.slice(0, j), r.size, u.style) + a <= e ? k = j : I = j - 1;
          }
          let _ = k > 0 ? u.text.charCodeAt(k - 1) : 0;
          _ >= 55296 && _ <= 56319 && k--, u.text = u.text.slice(0, k).trimEnd() + "\u2026", u.width = h.width(u.text, r.size, u.style), x = D + u.width;
          break;
        }
        b.pop(), x = D;
      }
    c.push(b), M.push(x), s = Math.max(s, x);
  }
  return { ...r, lines: c, widths: M, width: s, height: c.length * r.lineHeight };
}
function ar(r, e) {
  let { x: n, y: h, dx: l, dy: a } = r, { x: c, y: M, dx: s, dy: v } = e, b = n + l * et, x = h + a * et, u = c + s * et, D = M + v * et;
  if (l * s + a * v === 0) {
    let j = l !== 0 ? c : n, B = l !== 0 ? h : M;
    return (j - n) * l + (B - h) * a > 0 && (j - c) * s + (B - M) * v > 0 ? [n, h, j, B, c, M] : l !== 0 ? [n, h, b, x, b, D, u, D, c, M] : [n, h, b, x, u, x, u, D, c, M];
  }
  let k = l !== 0, I = k ? M - h : c - n;
  if (l === -s && a === -v) {
    if ((c - n) * l + (M - h) * a > 0) {
      if (Math.abs(I) < 0.5)
        return [n, h, c, M];
      if (k) {
        let mt = l > 0 ? r.x1 : e.x1, W = l > 0 ? e.x0 : r.x0, L = mt < W ? (mt + W) / 2 : (n + c) / 2;
        return [n, h, L, h, L, M, c, M];
      }
      let j = a > 0 ? r.y1 : e.y1, B = a > 0 ? e.y0 : r.y0, ut = j < B ? (j + B) / 2 : (h + M) / 2;
      return [n, h, n, ut, c, ut, c, M];
    }
  } else if (Math.abs(I) >= 1) {
    if (k) {
      let B = l > 0 ? Math.max(n, c) + et : Math.min(n, c) - et;
      return [n, h, B, h, B, M, c, M];
    }
    let j = a > 0 ? Math.max(h, M) + et : Math.min(h, M) - et;
    return [n, h, n, j, c, j, c, M];
  }
  if (k) {
    let j = r.y1 + et <= e.y0 ? (r.y1 + e.y0) / 2 : e.y1 + et <= r.y0 ? (e.y1 + r.y0) / 2 : Math.max(r.y1, e.y1) + et;
    return [n, h, b, h, b, j, u, j, u, M, c, M];
  }
  let _ = r.x1 + et <= e.x0 ? (r.x1 + e.x0) / 2 : e.x1 + et <= r.x0 ? (e.x1 + r.x0) / 2 : Math.max(r.x1, e.x1) + et;
  return [n, h, n, x, _, x, _, D, c, D, c, M];
}
function nr(r) {
  let e = [r[0], r[1]];
  for (let n = 2; n < r.length; n += 2) {
    let h = r[n], l = r[n + 1], a = e.length, c = Math.abs(h - e[a - 2]) < 0.01, M = Math.abs(l - e[a - 1]) < 0.01;
    c && M || (a >= 4 && (c && Math.abs(e[a - 4] - e[a - 2]) < 0.01 || M && Math.abs(e[a - 3] - e[a - 1]) < 0.01) ? (e[a - 2] = h, e[a - 1] = l) : e.push(h, l));
  }
  return e;
}
function lr(r, e, n) {
  let h = r.length / 2, l = new Array(h), a = new Array(h);
  for (let s = 0; s < h; s++)
    l[s] = r[s * 2], a[s] = r[s * 2 + 1];
  let c = (s, v, b) => {
    let x = Math.hypot(l[v] - l[s], a[v] - a[s]), u = Math.min(b, Math.max(0, x - 1));
    x > 0 && u > 0 && (l[s] += (l[v] - l[s]) / x * u, a[s] += (a[v] - a[s]) / x * u);
  };
  c(0, 1, e), c(h - 1, h - 2, n);
  let M = `M${C(l[0])},${C(a[0])}`;
  for (let s = 1; s < h - 1; s++) {
    let v = Math.hypot(l[s] - l[s - 1], a[s] - a[s - 1]), b = Math.hypot(l[s + 1] - l[s], a[s + 1] - a[s]), x = Math.min(tr, v / 2, b / 2);
    if (x < 0.5) {
      M += `L${C(l[s])},${C(a[s])}`;
      continue;
    }
    let u = l[s] - (l[s] - l[s - 1]) / v * x, D = a[s] - (a[s] - a[s - 1]) / v * x, k = l[s] + (l[s + 1] - l[s]) / b * x, I = a[s] + (a[s + 1] - a[s]) / b * x;
    M += `L${C(u)},${C(D)}Q${C(l[s])},${C(a[s])} ${C(k)},${C(I)}`;
  }
  return M + `L${C(l[h - 1])},${C(a[h - 1])}`;
}
function or(r, e, n) {
  return Fe(n, (h) => hr(r, e, n, h));
}
function hr(r, e, n, h) {
  var oe, he, se, ce, de;
  let l = re(e, "iconSize", 48, 8, 512), a = re(e, "fontSize", (oe = n.fontSize) != null ? oe : 16, 4, 128), c = Math.min(re(e, "padding", 20, 0, 256), h ? 12 : 1 / 0), M = Math.round(a * 0.875), s = (he = n.measurer) != null ? he : Ve(n.fontFamily, n.fontFamilyMono), v = (se = n.padding) != null ? se : 8, b = n.icons, x = l / 2, u = [...r.nodes.values()], D = [...r.groups.values()], k = u.length, I = D.length, _ = Xe(u, D, r.edges, r.layoutHints), j = /* @__PURE__ */ new Map();
  u.forEach((t, g) => j.set(t.id, g));
  let B = new Array(k), ut = new Float64Array(k), mt = new Float64Array(k), W = h ? Math.max(l, 64) : Math.max(l * 2.25, 96);
  for (let t = 0; t < k; t++) {
    let g = u[t], w = Jt(g.type === "service" ? g.title : void 0, !0, s, a, W);
    B[t] = w, ut[t] = Math.max(l, 2 * Math.ceil(w.width / 2)), mt[t] = l + (w.height > 0 ? me + w.height : 0);
  }
  let L = [], Z = [];
  for (let t = 0; t < k; t++)
    L.push(_.col[t]), Z.push(_.row[t]);
  for (let t = 0; t < I; t++)
    _.groupEmpty[t] && (L.push(_.groupCol[t]), Z.push(_.groupRow[t]));
  let q = Me(L), wt = Me(Z), H = q.size, gt = wt.size, rt = new Float64Array(H), Mt = new Float64Array(gt), Ft = h ? Math.max(24, 2 * et) : Math.max(40, Math.round(l * 0.75)), ft = new Float64Array(H).fill(Ft), $t = new Float64Array(gt).fill(Ft), it = new Int32Array(k), ot = new Int32Array(k);
  for (let t = 0; t < k; t++) {
    let g = it[t] = q.get(_.col[t]), w = ot[t] = wt.get(_.row[t]);
    rt[g] = Math.max(rt[g], ut[t]), Mt[w] = Math.max(Mt[w], mt[t]);
  }
  for (let t = 0; t < I; t++) {
    if (!_.groupEmpty[t])
      continue;
    let g = q.get(_.groupCol[t]), w = wt.get(_.groupRow[t]);
    rt[g] = Math.max(rt[g], l), Mt[w] = Math.max(Mt[w], x);
  }
  let Et = r.edges.length, Ut = new Array(Et), _t = new Int32Array(Et * 2);
  for (let t = 0; t < Et; t++) {
    let g = r.edges[t], w = _t[t * 2] = (ce = j.get(g.lhsId)) != null ? ce : -1, F = _t[t * 2 + 1] = (de = j.get(g.rhsId)) != null ? de : -1, $ = Jt(g.title, !0, s, M, 160);
    if (Ut[t] = $, !($.width === 0 || w < 0 || F < 0)) {
      if (it[w] !== it[F]) {
        let y = Math.min(it[w], it[F]);
        ft[y] = Math.max(ft[y], Math.ceil($.width) + 28);
      } else if (rt[it[w]] = Math.max(rt[it[w]], 2 * Math.ceil($.width / 2) + 8), ot[w] !== ot[F]) {
        let y = Math.min(ot[w], ot[F]);
        $t[y] = Math.max($t[y], Math.ceil($.height) + 24);
      }
    }
  }
  let Lt = new Array(I), vt = new Int32Array(I), at = new Int32Array(I), yt = new Int32Array(I), bt = new Int32Array(I), Rt = new Float64Array(I), Dt = new Float64Array(I), zt = new Float64Array(I), Ct = new Float64Array(I), i = new Float64Array(I), o = new Float64Array(I), d = new Float64Array(H), f = new Float64Array(H), m = new Float64Array(gt), z = new Float64Array(gt), E = Math.round(a * 1.25);
  for (let t = 0; t < I; t++) {
    vt[t] = q.get(_.groupCol[t]), at[t] = q.get(_.groupCol[t] + _.groupCols[t] - 1), yt[t] = wt.get(_.groupRow[t]), bt[t] = wt.get(_.groupRow[t] + _.groupRows[t] - 1);
    let g = Jt(D[t].title, !0, s, a, h ? Math.max(80, pe(n) / 2) : 320);
    Lt[t] = g;
    let w = D[t].icon ? E : 0;
    i[t] = g.width + w + (g.width > 0 && w > 0 ? 6 : 0), o[t] = Math.max(g.height, w);
  }
  for (let t = I - 1; t >= 0; t--) {
    let g = c + Rt[t], w = c + Dt[t], F = (o[t] > 0 ? Math.max(c, o[t] + 12) : c) + zt[t], $ = c + Ct[t];
    if (i[t] > 0) {
      let Q = g + w;
      for (let p = vt[t]; p <= at[t]; p++)
        Q += rt[p] + (p < at[t] ? f[p] + ft[p] + d[p + 1] : 0);
      i[t] + 20 > Q && (w += Math.ceil(i[t] + 20 - Q));
    }
    Rt[t] = g, Dt[t] = w, zt[t] = F, Ct[t] = $, d[vt[t]] = Math.max(d[vt[t]], g), f[at[t]] = Math.max(f[at[t]], w), m[yt[t]] = Math.max(m[yt[t]], F), z[bt[t]] = Math.max(z[bt[t]], $);
    let y = _.groupParent[t];
    y < 0 || (vt[y] === vt[t] && (Rt[y] = Math.max(Rt[y], g)), at[y] === at[t] && (Dt[y] = Math.max(Dt[y], w)), yt[y] === yt[t] && (zt[y] = Math.max(zt[y], F)), bt[y] === bt[t] && (Ct[y] = Math.max(Ct[y], $)));
  }
  let P = new Float64Array(H), T = new Float64Array(gt), G = 0;
  for (let t = 0; t < H; t++)
    P[t] = G + d[t], G = P[t] + rt[t] + f[t] + (t < H - 1 ? ft[t] : 0);
  let xt = 0;
  for (let t = 0; t < gt; t++)
    T[t] = xt + m[t], xt = T[t] + Mt[t] + z[t] + (t < gt - 1 ? $t[t] : 0);
  let J = 0, lt = 0, S = G, U = xt, A = (t) => P[vt[t]] - Rt[t], N = (t) => P[at[t]] + rt[at[t]] + Dt[t], K = (t) => T[yt[t]] - zt[t], nt = (t) => T[bt[t]] + Mt[bt[t]] + Ct[t], X = (t) => P[it[t]] + rt[it[t]] / 2, ht = (t, g, w) => {
    let F = er[g], $ = rr[g], y = X(t), Q = T[ot[t]], p = { x: y, y: Q + x, dx: F, dy: $, x0: y - ut[t] / 2, y0: Q, x1: y + ut[t] / 2, y1: Q + mt[t], gap: 0, wire: !1 };
    u[t].type === "junction" ? (p.x0 = p.x1 = y, p.y0 = p.y1 = p.y, p.gap = we) : F !== 0 ? p.x = y + F * x : p.y = $ < 0 ? Q : Q + mt[t] + (B[t].height > 0 ? 2 : 0);
    let st = w ? _.nodeParent[t] : -1;
    return st >= 0 && (p.x0 = A(st), p.x1 = N(st), p.y0 = K(st), p.y1 = nt(st), p.gap = 0, p.wire = u[t].type === "junction", F !== 0 ? p.x = F < 0 ? p.x0 : p.x1 : p.y = $ < 0 ? p.y0 : p.y1), p;
  }, O = "", V = "", tt = [], Ht = Ne("arrow_point");
  for (let t = 0; t < Et; t++) {
    let g = r.edges[t], w = _t[t * 2], F = _t[t * 2 + 1];
    if (w < 0 || F < 0)
      continue;
    let $ = ht(w, Yt(g.lhsDir), g.lhsGroup), y = ht(F, Yt(g.rhsDir), g.rhsGroup);
    $.x === y.x && $.y === y.y && $.dx === y.dx && ($.x -= 8 * Math.abs($.dy), $.y -= 8 * Math.abs($.dx), y.x += 8 * Math.abs($.dy), y.y += 8 * Math.abs($.dx));
    let Q = ar($, y);
    $.wire && Q.unshift(X(w), T[ot[w]] + x), y.wire && Q.push(X(F), T[ot[F]] + x);
    let p = nr(Q);
    if (p.length < 4)
      continue;
    let st = Kt(`${g.lhsId}-${g.rhsId}`);
    O += `<g class="pele-edge" data-id="${st}"><path d="${lr(p, g.lhsInto && !$.wire ? Ht + $.gap : 0, g.rhsInto && !y.wire ? Ht + y.gap : 0)}"/>` + (g.lhsInto ? ue("arrow_point", $.x + $.dx * $.gap, $.y + $.dy * $.gap, -$.dx, -$.dy, "var(--_l)") : "") + (g.rhsInto ? ue("arrow_point", y.x + y.dx * y.gap, y.y + y.dy * y.gap, -y.dx, -y.dy, "var(--_l)") : "") + "</g>";
    let At = -1, Ot = -1, Wt = -1, Y = -1, ct = Ut[t];
    for (let R = 0; R < p.length; R += 2)
      J = Math.min(J, p[R] - 4), S = Math.max(S, p[R] + 4), lt = Math.min(lt, p[R + 1] - 4), U = Math.max(U, p[R + 1] + 4);
    for (let R = 0; R + 3 < p.length; R += 2) {
      let It = Math.abs(p[R + 1] - p[R + 3]) < 0.01, dt = Math.abs(p[R] - p[R + 2]) + Math.abs(p[R + 1] - p[R + 3]);
      It || tt.push(p[R], Math.min(p[R + 1], p[R + 3]), Math.max(p[R + 1], p[R + 3])), dt > Ot && (At = R, Ot = dt), It && dt > Y && (Wt = R, Y = dt);
    }
    if (ct.width > 0) {
      let R = Y >= ct.width + 8 ? Wt : At, It = (p[R] + p[R + 2]) / 2, dt = (p[R + 1] + p[R + 3]) / 2, Gt = ct.width + 8, Ie = Math.abs(p[R] - p[R + 2]) < 0.01;
      for (let pt of [$, y])
        It + Gt / 2 <= pt.x0 || It - Gt / 2 >= pt.x1 || dt + ct.height / 2 <= pt.y0 || dt - ct.height / 2 >= pt.y1 || (Ie ? It = It >= (pt.x0 + pt.x1) / 2 ? pt.x1 + Gt / 2 + 4 : pt.x0 - Gt / 2 - 4 : dt = dt >= (pt.y0 + pt.y1) / 2 ? pt.y1 + ct.height / 2 + 4 : pt.y0 - ct.height / 2 - 4);
      J = Math.min(J, It - Gt / 2), S = Math.max(S, It + Gt / 2), lt = Math.min(lt, dt - ct.height / 2), U = Math.max(U, dt + ct.height / 2), V += Je(`${g.lhsId}-${g.rhsId}`, ct, It, dt, "", b);
    }
  }
  let Pt = "";
  for (let t = 0; t < I; t++) {
    let g = D[t], w = A(t), F = K(t), $ = N(t) - w, y = Lt[t], Q = "";
    if (i[t] > 0) {
      let p = F + o[t] + 12, st = [];
      for (let Y = 0; Y < tt.length; Y += 3)
        tt[Y + 1] < p && tt[Y + 2] > F && tt[Y] > w && tt[Y] < w + $ && st.push(tt[Y]);
      st.sort((Y, ct) => Y - ct), st.push(w + $ - 4);
      let At = w + 10;
      for (let Y of st) {
        if (Y - 6 - At >= i[t])
          break;
        At = Math.max(At, Y + 6);
      }
      At + i[t] > w + $ - 4 && (At = w + 10);
      let Ot = F + 6 + o[t] / 2, Wt = At;
      g.icon && (Q += $e(g.icon, At, Ot - E / 2, E, b), Wt += E + 6), Q += Bt(y, Wt + y.width / 2, Ot, ' class="pele-cluster-label" fill="var(--_m)"', b);
    }
    Pt += `<g class="pele-cluster" data-id="${Kt(g.id)}"><rect x="${C(w)}" y="${C(F)}" width="${C($)}" height="${C(nt(t) - F)}" fill="var(--_a)" fill-opacity="0.5" stroke="var(--_b)"${ge}/>` + Q + "</g>";
  }
  let Vt = "", Xt = l * 0.5, ie = Math.max(6, Math.round(a * 0.75));
  for (let t = 0; t < k; t++) {
    let g = u[t], w = `data-id="${Kt(g.id)}" transform="translate(${C(X(t))},${C(T[ot[t]])})"`;
    if (g.type === "junction") {
      Vt += `<g class="pele-node pele-junction" ${w}><circle cy="${C(x)}" r="${we}" fill="var(--_l)"/></g>`;
      continue;
    }
    let F = "";
    if (g.icon)
      F = $e(g.icon, -Xt / 2, (l - Xt) / 2, Xt, b);
    else if (g.iconText) {
      let $ = Jt(g.iconText, !1, s, ie, l - 8), y = Math.max(1, Math.floor((l - 4) / ($.lineHeight || 1)));
      F = Bt(ir($, l - 8, y, s), 0, x, ` class="pele-icon-text" font-size="${ie}"`, b);
    }
    Vt += `<g class="pele-node pele-service" ${w}><rect x="${C(-x)}" width="${C(l)}" height="${C(l)}" fill="var(--_s)" stroke="var(--_b)"${ge}/>` + F + Bt(B[t], 0, l + me + B[t].height / 2, ' class="pele-label"', b) + "</g>";
  }
  let St = Jt(r.title, !1, s, a, h ? pe(n) : 4e3, 1), ae = St.height > 0 ? St.height + 12 : 0, qt = Math.ceil(Math.max(S - J, St.width) + 2 * v), ne = Math.ceil(U - lt + ae + 2 * v), be = Math.round((qt - (S - J)) / 2 - J), Ae = Math.round(v + ae - lt), le = (Pt ? `<g class="pele-clusters">${Pt}</g>` : "") + (O ? `<g class="pele-edges" fill="none" stroke="var(--_l)" stroke-linecap="round" stroke-linejoin="round">${O}</g>` : "") + (V ? `<g class="pele-edge-labels" font-size="${M}">${V}</g>` : "") + (Vt ? `<g class="pele-nodes">${Vt}</g>` : "");
  return { svg: Ue("architecture", qt, ne, a, n, r, Bt(St, qt / 2, v + St.height / 2, ' class="pele-title" font-weight="var(--_tw)"') + (le ? `<g transform="translate(${be},${Ae})">${le}</g>` : "")), width: qt, height: ne, links: [] };
}
var fr = { type: "architecture", parse(r, e, n) {
  let h = new Be();
  return n && (h.title = n), Qe(Ze(r), h), h;
}, render: or };
export {
  fr as architecture
};
//# sourceMappingURL=LCDG4LVO-20a74fff.js.map

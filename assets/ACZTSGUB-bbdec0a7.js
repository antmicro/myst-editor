import { s as ke } from "./PKICWIR7-b8631c3c.js";
import { c as Ye } from "./DKTLEL5E-e2b762b2.js";
import { Y as ze, M as Ke, $ as je, v as Ue, V as Je, W as Qe, G as We, O as Xe, P as Ze, H as et, x as tt, D as at, z as rt, B as it, U as nt, j as Te } from "./IU7WZTP6-20f2a5ec.js";
import { L as be, x as h, b as lt, V as ae, h as ce, e as st, m as ct } from "./3G3HCGVE-09704139.js";
import { d as ot, a as ht } from "./lazy-950901f8.js";
var G = { NORMAL: 0, REVERSE: 1, HIGHLIGHT: 2, MERGE: 3, CHERRY_PICK: 4 };
function S(a) {
  throw new ht(a, "semantic", { type: "gitGraph" });
}
function Be(a) {
  return a === "REVERSE" ? G.REVERSE : a === "HIGHLIGHT" ? G.HIGHLIGHT : G.NORMAL;
}
function mt(a, e) {
  a.dir && e.setDirection(a.dir);
  for (let s of a.statements)
    gt(s, e);
}
function gt(a, e) {
  var s, g, k, E, b, o;
  switch (a.$type) {
    case "Commit":
      e.commit({ id: a.id, msg: (s = a.message) != null ? s : "", type: a.type !== void 0 ? Be(a.type) : G.NORMAL, tags: (g = a.tags) != null ? g : void 0 });
      break;
    case "Branch":
      e.branch({ name: a.name, order: (k = a.order) != null ? k : 0 });
      break;
    case "Merge":
      e.merge({ branch: a.branch, id: (E = a.id) != null ? E : "", type: a.type !== void 0 ? Be(a.type) : void 0, tags: (b = a.tags) != null ? b : void 0 });
      break;
    case "Checkout":
      e.checkout(a.branch);
      break;
    case "CherryPicking":
      e.cherryPick({ id: a.id, targetId: "", tags: ((o = a.tags) == null ? void 0 : o.length) === 0 ? void 0 : a.tags, parent: a.parent });
      break;
  }
}
function pt(a, e, s) {
  let g = e.gitGraph, k = typeof (g == null ? void 0 : g.mainBranchName) == "string" ? g.mainBranchName : "main", E = typeof (g == null ? void 0 : g.mainBranchOrder) == "number" ? g.mainBranchOrder : 0, b = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map([[k, null]]), W = /* @__PURE__ */ new Map([[k, E]]), ne = [], B = null, C = k, y = "LR", P = 0, U = () => {
    for (let i = P + 1; ; i += 2654435761) {
      let f = `${P}-${(Math.imul(i, 2654435761) >>> 0).toString(16).padStart(8, "0").slice(0, 7)}`;
      if (!b.has(f))
        return f;
    }
  }, D = (i) => {
    B = i, b.set(i.id, i), o.set(C, i.id);
  }, X = (i) => {
    var I;
    o.has(i) || S(`Trying to checkout branch which is not yet created. (Help try using "branch ${i}")`), C = i;
    let f = o.get(i);
    B = f && (I = b.get(f)) != null ? I : null;
  };
  mt(a, { setDirection(i) {
    y = i;
  }, commit({ msg: i, id: f, type: I, tags: _ }) {
    let M = { id: f || U(), message: i, seq: P++, type: I != null ? I : G.NORMAL, tags: _ ? [..._] : [], parents: B === null ? [] : [B.id], branch: C };
    b.has(M.id) && ne.push(`Commit ID ${M.id} already exists`), D(M);
  }, branch({ name: i, order: f }) {
    o.has(i) && S(`Trying to create an existing branch. (Help: Either use a new name if you want create a new branch or try using "checkout ${i}")`), o.set(i, B !== null ? B.id : null), W.set(i, f), X(i);
  }, merge({ branch: i, id: f, type: I, tags: _ }) {
    let M = o.get(C), A = o.get(i), V = M ? b.get(M) : void 0, J = A ? b.get(A) : void 0;
    V && J && V.branch === i && S(`Cannot merge branch '${i}' into itself.`), C === i && S('Incorrect usage of "merge". Cannot merge a branch to itself'), V === void 0 && S(`Incorrect usage of "merge". Current branch (${C})has no commits`), o.has(i) || S(`Incorrect usage of "merge". Branch to be merged (${i}) does not exist`), J === void 0 && S(`Incorrect usage of "merge". Branch to be merged (${i}) has no commits`), V === J && S('Incorrect usage of "merge". Both branches have same head'), f && b.has(f) && S(`Incorrect usage of "merge". Commit with id:${f} already exists, use different custom id`), D({ id: f || U(), message: `merged branch ${i} into ${C}`, seq: P++, parents: B === null ? [] : [B.id, A || ""], branch: C, type: G.MERGE, customType: I, customId: !!f, tags: _ ? [..._] : [] });
  }, cherryPick({ id: i, targetId: f, tags: I, parent: _ }) {
    let M = i ? b.get(i) : void 0;
    if (M === void 0 && S('Incorrect usage of "cherryPick". Source commit id should exist and provided'), _ && !M.parents.includes(_) && S("Invalid operation: The specified parent commit is not an immediate parent of the cherry-picked commit."), M.type === G.MERGE && !_ && S("Incorrect usage of cherry-pick: If the source commit is a merge commit, an immediate parent commit must be specified."), f && b.has(f))
      return;
    M.branch === C && S('Incorrect usage of "cherryPick". Source commit is already on current branch');
    let A = o.get(C);
    (!A || !b.has(A)) && S(`Incorrect usage of "cherry-pick". Current branch (${C})has no commits`), D({ id: U(), message: `cherry-picked ${M.message} into ${C}`, seq: P++, parents: B === null ? [] : [B.id, M.id], branch: C, type: G.CHERRY_PICK, tags: I ? I.filter(Boolean) : [`cherry-pick:${M.id}${M.type === G.MERGE ? `|parent:${_}` : ""}`] });
  }, checkout: X });
  let le = [...W].map(([i, f], I) => ({ name: i, order: f != null ? f : parseFloat(`0.${I}`) })).sort((i, f) => i.order - f.order).map((i) => i.name);
  return { type: "gitGraph", title: a.title || s, accTitle: a.accTitle ? a.accTitle.replace(/^\s+/g, "") : void 0, accDescr: a.accDescr ? a.accDescr.replace(/\n\s+/g, `
`) : void 0, direction: y, commits: b, branches: o, lanes: le, currentBranch: C, head: B, warnings: ne };
}
var De = { name: "REFERENCE", pattern: /\w([-\./\w]*[-\w])?/y }, Ve = [De];
function F(a) {
  return { name: a, pattern: a, longer: Ve };
}
var _e = [F("cherry-pick"), { name: "gitGraph:", pattern: "gitGraph:" }, F("HIGHLIGHT"), { ...ze("gitGraph"), longer: Ve }, F("checkout"), F("REVERSE"), { name: "parent:", pattern: "parent:" }, F("commit"), F("NORMAL"), F("branch"), { name: "order:", pattern: "order:" }, F("switch"), { name: "type:", pattern: "type:" }, F("merge"), { name: "msg:", pattern: "msg:" }, { name: "tag:", pattern: "tag:" }, { name: "id:", pattern: "id:" }, F("LR"), F("TB"), F("BT"), { name: ":", pattern: ":" }, { ...Ke, opener: /[\t ]*accDescr\s*{/y }, je, Ue(String.raw`[-./\w]*[-\w]`), { name: "INT", pattern: /0|[1-9][0-9]*(?!\.)/y }, Je, Qe, We, Xe, Ze, et, De];
function dt(a) {
  let e = new tt(at(a, _e, "gitGraph"), _e, "gitGraph"), s = { $type: "GitGraph", statements: [] }, g = () => {
    if (e.kind !== -1)
      for (e.kind !== 26 && e.fail("a line break or the end of input"); e.kind === 26; )
        e.i++;
  }, k = () => e.kind === 31 ? e.take() : e.kind === 25 ? Te(e.take()) : e.fail("a branch name"), E = () => Te(e.expect(25)), b = () => (e.kind !== 8 && e.kind !== 5 && e.kind !== 2 && e.fail("NORMAL, REVERSE, or HIGHLIGHT"), e.take());
  for (; e.kind === 26; )
    e.i++;
  if (!e.accept(1)) {
    e.expect(3);
    let o = e.kinds[e.i + 1];
    (e.kind === 17 || e.kind === 18 || e.kind === 19) && o === 20 ? (s.$type = "Direction", s.dir = e.take(), e.i++) : e.accept(20);
  }
  for (; e.kind !== -1; )
    switch (e.kind) {
      case 26:
        e.i++;
        break;
      case 21:
        s.accDescr = nt(e.take()), g();
        break;
      case 22:
        s.accTitle = it(e.take()), g();
        break;
      case 23:
        s.title = rt(e.take()), g();
        break;
      case 7: {
        e.i++;
        let o = { $type: "Commit", tags: [] };
        for (; ; )
          if (e.accept(16))
            o.id = E();
          else if (e.accept(15))
            o.tags.push(E());
          else if (e.accept(12))
            o.type = b();
          else if (e.accept(14) || e.kinds[e.i] === 25)
            o.message = E();
          else
            break;
        g(), s.statements.push(o);
        break;
      }
      case 9: {
        e.i++;
        let o = { $type: "Branch", name: k() };
        e.accept(10) && (o.order = parseInt(e.expect(24))), g(), s.statements.push(o);
        break;
      }
      case 13: {
        e.i++;
        let o = { $type: "Merge", branch: k(), tags: [] };
        for (; ; )
          if (e.accept(16))
            o.id = E();
          else if (e.accept(15))
            o.tags.push(E());
          else if (e.accept(12))
            o.type = b();
          else
            break;
        g(), s.statements.push(o);
        break;
      }
      case 4:
      case 11: {
        e.i++;
        let o = { $type: "Checkout", branch: k() };
        g(), s.statements.push(o);
        break;
      }
      case 0: {
        e.i++;
        let o = { $type: "CherryPicking", tags: [] };
        for (; ; )
          if (e.accept(16))
            o.id = E();
          else if (e.accept(15))
            o.tags.push(E());
          else if (e.accept(6))
            o.parent = E();
          else
            break;
        g(), s.statements.push(o);
        break;
      }
      default:
        e.fail("a statement, a title, or a line break");
    }
  return s;
}
var v = 7, ft = 44, $t = 44, oe = 36, he = 8, j = 20, re = 20, ie = 7, Se = 6, Me = Math.SQRT1_2, Ae = ["normal", "reverse", "highlight", "merge", "cherry-pick"];
function me(a, e, s) {
  var k;
  let g = (k = a.gitGraph) == null ? void 0 : k[e];
  return typeof g == "boolean" ? g : s;
}
function Fe(a) {
  return ie + 4 + a.width + 6;
}
function ut(a, e, s, g) {
  let k = `cx="${h(e)}" cy="${h(s)}"`;
  if (a === G.HIGHLIGHT)
    return `<rect x="${h(e - v - 1)}" y="${h(s - v - 1)}" width="${2 * v + 2}" height="${2 * v + 2}" rx="2" fill="${g}"/>`;
  if (a === G.MERGE)
    return `<circle ${k} r="${v - 1}" fill="var(--_bg)" stroke="${g}" stroke-width="2"/><circle ${k} r="2.5" fill="${g}"/>`;
  let E = `<circle ${k} r="${v}" fill="${g}"/>`;
  return a === G.REVERSE ? E + `<path d="M${h(e - 3)},${h(s - 3)}l6,6M${h(e - 3)},${h(s + 3)}l6,-6" fill="none" stroke="var(--_bg)" stroke-width="1.5" stroke-linecap="round"/>` : a === G.CHERRY_PICK ? E + `<path d="M${h(e - 2.6)},${h(s + 1)}L${h(e + 0.8)},${h(s - 4.2)}L${h(e + 2.6)},${h(s + 1)}" fill="none" stroke="var(--_bg)" stroke-linejoin="round"/><circle cx="${h(e - 2.6)}" cy="${h(s + 2.2)}" r="1.8" fill="var(--_bg)"/><circle cx="${h(e + 2.6)}" cy="${h(s + 2.2)}" r="1.8" fill="var(--_bg)"/>` : E;
}
function yt(a, e, s) {
  return a.direction !== "LR" ? Pe(a, e, s, a.direction) : Ye(s, (g) => Pe(a, e, s, g ? "TB" : "LR"));
}
function Pe(a, e, s, g) {
  var ve, Ge, Ie, Le, Ce, He;
  let k = (ve = s.fontSize) != null ? ve : 16, E = Math.round(k * 0.75), b = (Ge = s.measurer) != null ? Ge : ot(s.fontFamily, s.fontFamilyMono), o = (Ie = s.padding) != null ? Ie : 8, W = me(e, "showBranches", !0), ne = me(e, "showCommitLabel", !0), B = me(e, "rotateCommitLabel", !0), C = me(e, "parallelCommits", !1), y = g !== "LR", P = g === "BT", U = /* @__PURE__ */ new Map();
  a.lanes.forEach((t, r) => U.set(t, r));
  let D = a.lanes.length, X = Math.round(k * 0.875), le = a.lanes.map((t) => ke(W ? t : "", b, X, 4e3)), i = [], f = /* @__PURE__ */ new Map();
  for (let t of [...a.commits.values()].sort((r, n) => r.seq - n.seq)) {
    let r = ne && t.type !== G.CHERRY_PICK && (t.type !== G.MERGE || t.customId === !0), n = [];
    for (let c of t.tags) {
      let m = ke(c, b, E, 4e3);
      m.lines.length > 0 && n.push(m);
    }
    let l = { commit: t, index: i.length, lane: (Le = U.get(t.branch)) != null ? Le : 0, m: 0, label: r ? ke(t.id, b, E, 4e3) : void 0, tags: n };
    i.push(l), f.set(t.id, l);
  }
  let I = new Float64Array(i.length), _ = new Float64Array(i.length), M = new Float64Array(D).fill(v), A = new Float64Array(D).fill(v);
  i.forEach((t, r) => {
    let { label: n, tags: l } = t, c = 0, m = 0;
    for (let d of l) {
      let L = Fe(d);
      y ? (c = Math.max(c, d.height), m += L + 4) : (c = Math.max(c, L), m += d.height + 3);
    }
    let w = 0, p = 0;
    n !== void 0 && n.lines.length > 0 && (B ? p = 3 + Me * (n.width + n.height) : (w = y ? n.height : n.width, p = 6 + (y ? n.width : n.height))), I[r] = Math.max(v, c / 2, w / 2), _[r] = c / 2;
    let H = v + (l.length > 0 ? Se + m : 0), K = v + p, u = t.lane;
    M[u] = Math.max(M[u], y ? K : H), A[u] = Math.max(A[u], y ? H : K);
  });
  let V = new Float64Array(i.length);
  y || i.forEach((t, r) => {
    if (_[r] !== 0)
      for (let n of t.commit.parents) {
        let l = f.get(n);
        l !== void 0 && l.lane < t.lane && (V[r] = _[r] + 4);
      }
  });
  let J = (t, r) => Math.max(ft, I[t] + I[r] + he, V[r] > 0 ? I[t] + oe + V[r] : 0);
  i.forEach((t, r) => {
    if (!C) {
      t.m = r === 0 ? 0 : i[r - 1].m + J(r - 1, r);
      return;
    }
    let n = 0;
    for (let l of t.commit.parents) {
      let c = f.get(l);
      c === void 0 || c.index >= r || (n = Math.max(n, c.m + J(c.index, r)));
    }
    t.m = n;
  });
  let O = 0;
  for (let t of i)
    O = Math.max(O, t.m);
  let q = new Float64Array(D);
  for (let t = 0; t < D; t++) {
    let r = le[t], n = r.lines.length === 0 ? 0 : y ? r.width / 2 + 8 : r.height / 2 + 2;
    M[t] = Math.max(M[t], n), A[t] = Math.max(A[t], n), t > 0 && (q[t] = q[t - 1] + Math.max($t, A[t - 1] + M[t] + he));
  }
  let Y = (t, r) => y ? r : t, z = (t, r) => y ? P ? -t : t : r, x = (t, r) => `${h(Y(t, r))},${h(z(t, r))}`, Q = 1 / 0, se = 1 / 0, Z = -1 / 0, ge = -1 / 0, N = (t, r, n, l) => {
    t < Q && (Q = t), r < se && (se = r), n > Z && (Z = n), l > ge && (ge = l);
  }, ee = "";
  if (W)
    for (let t = 0; t < D; t++) {
      let r = le[t], n = ce(t), l = q[t], c = r.width + 16, m = r.height + 4, w = r.lines.length === 0 ? -j : -j - (y ? m : c), p = Y(w + (y ? m : c) / 2, l), H = z(w + (y ? m : c) / 2, l);
      N(Y(-j, l), z(-j, l), Y(-j, l), z(-j, l)), N(Y(O + re, l), z(O + re, l), Y(O + re, l), z(O + re, l)), ee += `<g class="pele-branch" data-id="${be(a.lanes[t])}"><path class="pele-lane" d="M${x(-j, l)}L${x(O + re, l)}" stroke="${n}" stroke-dasharray="2 4"/>`, r.lines.length > 0 && (N(p - c / 2, H - m / 2, p + c / 2, H + m / 2), ee += `<rect x="${h(p - c / 2)}" y="${h(H - m / 2)}" width="${h(c)}" height="${h(m)}" fill="${n}"${lt}/>` + ae(r, p, H, ' class="pele-label" fill="var(--_bg)"')), ee += "</g>";
    }
  let pe = Array.from({ length: D }, () => []);
  for (let t of i)
    pe[t.lane].push(t.m);
  if (C)
    for (let t of pe)
      t.sort((r, n) => r - n);
  let Ee = (t, r, n) => {
    let l = pe[t], c = 0, m = l.length;
    for (; c < m; ) {
      let w = c + m >> 1;
      l[w] <= r ? c = w + 1 : m = w;
    }
    return c < l.length && l[c] < n;
  }, de = "", fe = "";
  for (let t of i) {
    let { commit: r } = t, n = q[t.lane], l = t.m;
    for (let c = 0; c < r.parents.length; c++) {
      let m = f.get(r.parents[c]);
      if (m === void 0 || m === t)
        continue;
      let w = q[m.lane], p = m.m;
      if (m.lane === t.lane) {
        fe += `<path class="pele-edge" d="M${x(p, w)}L${x(l, n)}" stroke="${ce(t.lane)}"/>`;
        continue;
      }
      let H = c > 0 && r.type === G.MERGE, K = c > 0 && !H, u = `M${x(p, w)}`;
      if (l <= p) {
        let d = (p + l) / 2;
        u += `C${x(d, w)} ${x(d, n)} ${x(l, n)}`;
      } else if (!H && !Ee(t.lane, p, l)) {
        let d = Math.min(oe, l - p);
        u += `C${x(p + d / 2, w)} ${x(p + d / 2, n)} ${x(p + d, n)}L${x(l, n)}`;
      } else {
        let d = m.lane < t.lane && l - V[t.index] > p ? l - V[t.index] : l, L = Math.min(oe, d - p), $ = w;
        (!H || Ee(m.lane, p, l)) && ($ = w > n ? n + A[t.lane] + he / 2 : n - M[t.lane] - he / 2, L = Math.min(oe, (d - p) / 2), u += `C${x(p + L / 2, w)} ${x(p + L / 2, $)} ${x(p + L, $)}`), u += `L${x(d - L, $)}C${x(d - L / 2, $)} ${x(d - L / 2, n)} ${x(d, n)}`, d < l && (u += `L${x(l, n)}`);
      }
      de += `<path class="pele-edge${H ? " pele-edge-merge" : K ? " pele-edge-cherry-pick" : ""}" d="${u}" stroke="${ce(H ? m.lane : t.lane)}"${K ? ' stroke-dasharray="4 3"' : ""}/>`;
    }
  }
  let $e = "";
  for (let t of i) {
    let { commit: r, label: n, tags: l } = t, c = Y(t.m, q[t.lane]), m = z(t.m, q[t.lane]), w = (Ce = r.customType) != null ? Ce : r.type;
    N(c - v - 1, m - v - 1, c + v + 1, m + v + 1);
    let p = r.type < G.MERGE && r.message !== "" ? `<title>${be(r.message)}</title>` : "";
    if (p += ut(w, c, m, ce(t.lane)), n !== void 0 && n.lines.length > 0) {
      let u = n.width, d = n.height, L = ($, R) => `<rect x="${h($ - u / 2 - 2)}" y="${h(R - d / 2 + 2)}" width="${h(u + 4)}" height="${h(d - 4)}" rx="3" fill="var(--_bg)"/>`;
      if (B) {
        let $ = Me * d / 2, R = y ? c - v - 3 - $ : c + 3, T = y ? m : m + v + 3 + $, ye = Me * u + $;
        N(R - ye, P ? T - ye : T - $, R + $, P ? T + $ : T + ye), p += `<g class="pele-commit-label" transform="rotate(${P ? 45 : -45} ${h(R)} ${h(T)})">` + L(R - u / 2, T) + ae(n, R - u / 2, T, "") + "</g>";
      } else {
        let $ = y ? c - v - 6 - u / 2 : c, R = y ? m : m + v + 6 + d / 2;
        N($ - u / 2, R - d / 2, $ + u / 2, R + d / 2), p += `<g class="pele-commit-label">${L($, R)}${ae(n, $, R, "")}</g>`;
      }
    }
    let H = v + Se;
    for (let u = y ? 0 : l.length - 1; u >= 0 && u < l.length; u += y ? 1 : -1) {
      let d = l[u], L = Fe(d), $ = d.height, R = y ? c + H : c - L / 2, T = y ? m : m - H - $ / 2;
      H += y ? L + 4 : $ + 3, N(R, T - $ / 2, R + L, T + $ / 2), p += `<g class="pele-tag"><path d="M${h(R)},${h(T)}L${h(R + ie)},${h(T - $ / 2)}H${h(R + L)}V${h(T + $ / 2)}H${h(R + ie)}Z" fill="var(--_s)" stroke="var(--_b)" stroke-linejoin="round"/><circle cx="${h(R + ie)}" cy="${h(T)}" r="1.5" fill="var(--_b)"/>` + ae(d, R + ie + 4 + d.width / 2, T, ' fill="var(--_fg)"') + "</g>";
    }
    let K = r.type === G.MERGE && w !== G.MERGE ? " pele-commit-merge" : "";
    $e += `<g class="pele-commit pele-commit-${(He = Ae[w]) != null ? He : Ae[0]}${K}" data-id="${be(r.id)}">${p}</g>`;
  }
  Q > Z && N(0, 0, 0, 0);
  let te = st(a.title, !1, b, k, 4e3, 1), we = te.height > 0 ? te.height + 16 : 0, Re = Math.max(Z - Q, te.width), ue = Math.ceil(Re + 2 * o), xe = Math.ceil(ge - se + we + 2 * o), Ne = o - Q + (Re - (Z - Q)) / 2, Oe = o + we - se, qe = ae(te, ue / 2, o + te.height / 2, ' class="pele-title" font-weight="var(--_tw)"') + `<g transform="translate(${h(Ne)},${h(Oe)})">` + (ee ? `<g class="pele-branches" fill="none" font-size="${X}">${ee}</g>` : "") + (de || fe ? `<g class="pele-edges" fill="none" stroke-width="2" stroke-linecap="round">${de}${fe}</g>` : "") + ($e ? `<g class="pele-commits" font-size="${E}" fill="var(--_m)">${$e}</g>` : "") + "</g>";
  return { svg: ct("gitGraph", ue, xe, k, s, a, qe), width: ue, height: xe, links: [] };
}
var Rt = { type: "gitGraph", parse: (a, e, s) => pt(dt(a), e, s), render: yt };
export {
  Rt as gitGraph
};
//# sourceMappingURL=ACZTSGUB-bbdec0a7.js.map

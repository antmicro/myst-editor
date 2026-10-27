import { i as Ve } from "./D5TW5CPZ-bb4cf81d.js";
import { T as Oe, E as Be, A as Re } from "./LM4J5P2M-41ed4480.js";
import { c as Ge } from "./DKTLEL5E-e2b762b2.js";
import { Y as He, $ as Ue, v as We, O as Ye, P as Ke, H as qe, z as Ze, B as Je, U as Qe, x as Pe, D as Xe } from "./IU7WZTP6-20f2a5ec.js";
import { L as Me, O as me } from "./YTAM2TF7-f178d8af.js";
import { e as Y, L as R, x as o, b as W, V as q, m as De, h as de, S as Ce, g as ze } from "./3G3HCGVE-09704139.js";
import { R as et, a as tt, d as Ae, b as Le } from "./lazy-950901f8.js";
var at = /* @__PURE__ */ new Map([["ui", "ui"], ["pcr", "processor"], ["processor", "processor"], ["rmo", "readmodel"], ["readmodel", "readmodel"], ["cmd", "command"], ["command", "command"], ["evt", "event"], ["event", "event"]]), it = /* @__PURE__ */ new Map([["trigger", [0, "UI/Automation", "UI/A: "]], ["state", [100, "Command/Read Model", "C/RM: "]], ["stream", [200, "Events", "Stream: "]]]);
function nt(a) {
  return a === "ui" || a === "processor" ? "trigger" : a === "event" ? "stream" : "state";
}
function $e(a) {
  let t = a.indexOf("{"), h = a.lastIndexOf("}"), m = (t !== -1 && h > t ? a.slice(t + 1, h) : t === -1 && a.length >= 2 ? a.slice(1, -1) : "").replace(/\r/g, "").split(`
`);
  for (; m.length > 0 && m[0].trim() === ""; )
    m.shift();
  for (; m.length > 0 && m[m.length - 1].trim() === ""; )
    m.pop();
  let x = 1 / 0;
  for (let s of m)
    s.trim() !== "" && (x = Math.min(x, s.length - s.trimStart().length));
  return m.map((s) => s.slice(Math.min(x, s.length)).trimEnd()).join(`
`);
}
function lt(a, t) {
  let h = /* @__PURE__ */ new Set();
  for (let l of a.frames) {
    if (h.has(l.name)) {
      let u = et(a.$source, l.$offset).line;
      throw new tt(`Duplicate event modeling frame ID "${l.name}" on line ${u}`, "semantic", { type: "eventmodeling", line: u });
    }
    h.add(l.name);
  }
  let m = /* @__PURE__ */ new Map();
  for (let l of a.dataEntities)
    m.has(l.name) || m.set(l.name, l.dataBlockValue);
  let x = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), w = (l, u) => {
    var j;
    let _ = nt(l), N = u === void 0 ? _ : `${_} ${u}`, L = x.get(N);
    if (!L) {
      let [v, V, T] = it.get(_), F = v;
      u !== void 0 && (F = (j = s.get(_)) != null ? j : v + 1, s.set(_, F + 1)), L = { index: F, label: u === void 0 ? V : T + u, group: _, namespace: u }, x.set(N, L);
    }
    return L;
  }, A = [], p = /* @__PURE__ */ new Map(), f = [];
  a.frames.forEach((l, u) => {
    var V;
    let _ = l.entityIdentifier.split("."), N = _.length === 2 ? _[0] : void 0, L = (V = at.get(l.modelEntityType)) != null ? V : "event", j = l.dataInlineValue === void 0 ? void 0 : $e(l.dataInlineValue);
    if (l.dataReference) {
      let T = m.get(l.dataReference.$refText);
      T !== void 0 && (j = $e(T));
    }
    let v = { id: l.name, kind: L, entity: l.entityIdentifier, name: _.length === 2 ? _[1] : l.entityIdentifier, namespace: N, reset: l.$type === "EmResetFrame", lane: w(L, N), data: j, dataType: l.dataType };
    if (A.push(v), p.set(v.id, v), l.sourceFrames.length > 0) {
      let T = new Set(l.sourceFrames.map((F) => F.$refText));
      for (let F of A)
        T.has(F.id) && f.push({ source: F, target: v });
    } else if (u > 0 && !v.reset) {
      for (let T = u - 1; T >= 0; T--)
        if (A[T].lane !== v.lane) {
          f.push({ source: A[T], target: v });
          break;
        }
    }
  });
  let b = (l) => l.map((u) => u.entityIdentifier.$refText);
  return { type: "eventmodeling", title: a.title && Ze(a.title) || t, accTitle: a.accTitle ? Je(a.accTitle).replace(/^\s+/g, "") : void 0, accDescr: a.accDescr ? Qe(a.accDescr).replace(/\n\s+/g, `
`) : void 0, boxes: A, lanes: [...x.values()].sort((l, u) => l.index - u.index), relations: f, notes: a.noteEntities.map((l) => ({ frame: l.sourceFrame.$refText, text: $e(l.dataBlockValue), dataType: l.dataType })), specifications: a.gwtEntities.map((l) => ({ frame: l.sourceFrame.$refText, given: b(l.givenStatements), when: b(l.whenStatements), then: b(l.thenStatements) })), entities: a.modelEntities.map((l) => l.name) };
}
var ve = { name: "EM_ID", pattern: /[_a-zA-Z][\w_]*/y }, te = (a) => ({ name: a, pattern: a, longer: [ve] }), le = (a) => ({ name: a, pattern: a }), rt = ["resetframe", "readmodel", "processor", "timeframe", "command", "entity", "event", "jsobj", "figma", "given", "json", "salt", "html", "text", "data", "note", "when", "then", "rmo", "cmd", "evt", "pcr", "uri"], ye = [{ ...He("eventmodeling"), longer: [ve] }, ...rt.map(te), le("->>"), te("gwt"), te("ui"), te("md"), te("tf"), le("[["), le("]]"), te("rf"), le("`"), le("."), ve, { name: "EM_FID", pattern: /\d{1,3}/y }, { name: "EM_DATA_INLINE", pattern: /\{(.*)\}|"(.*)"|'(.*)'/y }, { name: "EM_DATA_BLOCK", pattern: /\{[\t ]*\r?\n(?:[\S\s]*?\r?\n)?\}(?:\r?\n|(?!\S))/y }, Ve("EM_ACC_DESCR"), { ...Ue, name: "EM_ACC_TITLE" }, { ...We(String.raw`\w`), name: "EM_TITLE" }, { name: "EM_WS", pattern: /\s+/y, hidden: !0 }, { ...Ye, name: "EM_YAML" }, { ...Ke, name: "EM_DIRECTIVE" }, { ...qe, name: "EM_SINGLE_LINE_COMMENT" }, { name: "EM_ML_COMMENT", pattern: /\/\*[\s\S]*?\*\//y, hidden: !0 }, { name: "EM_SL_COMMENT", pattern: /\/\/[^\n\r]*/y, hidden: !0 }], S = (a) => ye.findIndex((t) => t.name === a), ce = (a) => new Set(a.map(S)), $ = { keyword: 0, arrow: S("->>"), open: S("[["), close: S("]]"), tick: S("`"), dot: S("."), id: S("EM_ID"), frameId: S("EM_FID"), inline: S("EM_DATA_INLINE"), block: S("EM_DATA_BLOCK"), accDescr: S("EM_ACC_DESCR"), accTitle: S("EM_ACC_TITLE"), title: S("EM_TITLE"), entity: S("entity"), data: S("data"), note: S("note"), gwt: S("gwt"), given: S("given"), when: S("when"), then: S("then") }, be = ce(["tf", "timeframe"]), ot = ce(["rf", "resetframe"]), xe = ce(["rmo", "readmodel", "ui", "cmd", "command", "evt", "event", "pcr", "processor"]), st = ce(["json", "jsobj", "figma", "salt", "uri", "md", "html", "text"]);
function ht(a) {
  let t = new Pe(Xe(a, ye, "eventmodeling"), ye, "eventmodeling"), h = { $type: "EventModel", modelEntities: [], frames: [], dataEntities: [], noteEntities: [], gwtEntities: [], $source: a }, m = (p) => t.kinds[t.i] === p, x = (p, f) => p.has(t.kinds[t.i]) ? t.take() : t.fail(f), s = () => {
    let p = t.expect($.id);
    for (; t.accept($.dot); )
      p += "." + t.expect($.id);
    return p;
  }, w = () => {
    if (!t.accept($.tick))
      return;
    let p = x(st, "a data type");
    return t.expect($.tick), p;
  }, A = () => {
    let p = [];
    do
      x(xe, "an entity type"), p.push({ $type: "EmGwtStatement", entityIdentifier: { $refText: t.expect($.id) } });
    while (xe.has(t.kinds[t.i]));
    return p;
  };
  for (t.expect($.keyword); !m(-1); ) {
    let p = t.kinds[t.i];
    if (p === $.accDescr)
      h.accDescr = t.take();
    else if (p === $.accTitle)
      h.accTitle = t.take();
    else if (p === $.title)
      h.title = t.take();
    else if (p === $.entity)
      t.i++, h.modelEntities.push({ $type: "EmModelEntity", name: s() });
    else if (be.has(p) || ot.has(p)) {
      let f = { $type: be.has(p) ? "EmTimeFrame" : "EmResetFrame", name: "", modelEntityType: "", entityIdentifier: "", sourceFrames: [], $offset: t.tokens.starts[t.i] };
      for (t.i++, f.name = t.expect($.frameId), f.modelEntityType = x(xe, "an entity type"), f.entityIdentifier = s(); t.accept($.arrow); )
        f.sourceFrames.push({ $refText: t.expect($.frameId) });
      if (t.accept($.open) && (f.dataReference = { $refText: t.expect($.id) }, t.expect($.close)), m($.tick) || m($.inline)) {
        let b = w();
        b !== void 0 && (f.dataType = b), f.dataInlineValue = t.expect($.inline);
      }
      h.frames.push(f);
    } else if (p === $.data) {
      t.i++;
      let f = { $type: "EmDataEntity", name: t.expect($.id), dataBlockValue: "" }, b = w();
      b !== void 0 && (f.dataType = b), f.dataBlockValue = t.expect($.block), h.dataEntities.push(f);
    } else if (p === $.note) {
      t.i++;
      let f = { $type: "EmNoteEntity", sourceFrame: { $refText: t.expect($.frameId) }, dataBlockValue: "" }, b = w();
      b !== void 0 && (f.dataType = b), f.dataBlockValue = t.expect($.block), h.noteEntities.push(f);
    } else if (p === $.gwt) {
      t.i++;
      let f = { $type: "EmGwt", sourceFrame: { $refText: t.expect($.frameId) }, givenStatements: [], whenStatements: [], thenStatements: [] };
      t.expect($.given), f.givenStatements = A(), t.accept($.when) && (f.whenStatements = A()), t.expect($.then), f.thenStatements = A(), h.gwtEntities.push(f);
    } else
      t.fail("a frame, an entity, a data block, a note, or a specification");
  }
  return h;
}
var Fe = /* @__PURE__ */ new Map([["command", 0], ["event", 1], ["readmodel", 2], ["processor", 6]]), z = 12, O = 10, mt = 96, Te = 16, dt = 80, he = 12, ke = 8, ft = 48, Ie = 80, Ne = 8;
function we(a, t) {
  let h = [];
  for (let m of Le(a).split(`
`)) {
    let x = m.length <= t ? void 0 : Array.from(m);
    if (x === void 0 || x.length <= t) {
      h.push(m);
      continue;
    }
    for (let s = 0; s < x.length; s += t)
      h.push(x.slice(s, s + t).join(""));
  }
  return h;
}
function fe(a, t, h, m, x) {
  let s = "";
  for (let w = 0; w < a.length; w++)
    a[w] !== "" && (s += `<tspan x="${o(t)}" y="${o(h + w * m)}">${Ce(a[w])}</tspan>`);
  return s === "" ? "" : `<text${x} xml:space="preserve">${s}</text>`;
}
function ct(a, t, h) {
  return Ge(h, (m) => pt(a, t, h, m));
}
function pt(a, t, h, m) {
  var M, E, k;
  if (m)
    return xt(a, h);
  let x = (M = h.fontSize) != null ? M : 16, s = Math.round(x * 0.875), w = Math.round(x * 0.8125), A = Math.round(x * 0.75), p = Math.round(A * 1.4), f = Math.round(w * 1.5), b = (E = h.measurer) != null ? E : Ae(h.fontFamily, h.fontFamilyMono), l = (k = h.padding) != null ? k : 8, u = (e, i, n) => {
    let g = 0;
    for (let y of e)
      g = Math.max(g, b.width(y, i, n));
    return g;
  }, _ = /* @__PURE__ */ new Map(), N = 0;
  for (let e of a.lanes) {
    let i = Y(e.label, !1, b, w, 4e3, 1);
    N = Math.max(N, i.width), _.set(e, { lane: e, label: i, right: -1 / 0, y: 0, h: 0 });
  }
  N += 2 * he;
  let L = [], j = /* @__PURE__ */ new Map(), v;
  for (let e of a.boxes) {
    let i = _.get(e.lane), n = Y(e.name, !1, b, s, 4e3, 1), g = e.data ? we(e.data, ft) : [], y = Math.max(mt, Math.max(n.width, u(g, A, 4)) + 2 * z), I = 2 * O + n.height + (g.length > 0 ? 6 + g.length * p : 0), D = 0;
    if (v) {
      let B = v.x + Math.max(v.w / 2, v.w - dt);
      D = v.box.lane === e.lane ? i.right + Te : Math.max(B, i.right + Te);
    }
    let C = { box: e, name: n, data: g, x: D, y: 0, w: y, h: I };
    i.right = D + y, i.h = Math.max(i.h, I), L.push(C), j.set(e, C), v = C;
  }
  let V = 0;
  for (let e of L)
    V = Math.max(V, e.x + e.w);
  let T = N + V + he, F = Y(a.title, !1, b, x, 4e3, 1), re = F.height > 0 ? F.height + 12 : 0, G = l, Z = l + re, H = Z, ae = "";
  for (let e of _.values())
    e.y = H, e.h += 2 * he, ae += `<g class="pele-cluster pele-em-lane" data-id="${R(e.lane.label)}"><rect x="${o(G)}" y="${o(H)}" width="${o(T)}" height="${o(e.h)}" fill="var(--_s)"${W}/>` + q(e.label, G + he + e.label.width / 2, H + e.h / 2, ` class="pele-cluster-label" font-size="${w}" font-weight="var(--_hw)" fill="var(--_m)"`) + "</g>", H += e.h + ke;
  let J = _.size > 0 ? H - ke : Z, Q = "";
  for (let e of L) {
    let i = _.get(e.box.lane);
    e.x += G + N, e.y = i.y + (i.h - e.h) / 2;
    let n = Fe.get(e.box.kind), g = `x="${o(e.x)}" y="${o(e.y)}" width="${o(e.w)}" height="${o(e.h)}"`, y = n === void 0 ? `<rect ${g} fill="var(--_bg)" stroke="var(--_b)"${W}/>` : `<rect ${g} fill="var(--_bg)"${W}/><rect ${g} fill="${de(n)}" fill-opacity="0.22" stroke="${de(n)}"${W}/>`, I = e.y + O + e.name.height / 2, D = q(e.name, e.x + e.w / 2, I, ` class="pele-label" font-size="${s}" font-weight="var(--_hw)"`) + fe(e.data, e.x + z, e.y + O + e.name.height + 6 + p / 2 + A * 0.35, p, ` class="pele-em-data" font-family="${ze}" font-size="${A}"`);
    Q += `<g class="pele-node pele-em-${e.box.kind}${e.box.reset ? " pele-em-reset" : ""}" data-id="${R(e.box.id)}">${y}${D}</g>`;
  }
  let ie = "", oe = Me("arrow_point");
  for (let e of a.relations) {
    let i = j.get(e.source), n = j.get(e.target);
    if (!i || !n || i === n)
      continue;
    let g, y;
    if (i.box.lane === n.box.lane) {
      let I = n.x >= i.x, D = I ? i.x + i.w : i.x, C = I ? n.x : n.x + n.w, B = i.y + i.h / 2, U = n.y + n.h / 2, K = C >= D ? 1 : -1;
      g = `M${o(D)},${o(B)}L${o(C - K * oe)},${o(U)}`, y = me("arrow_point", C, U, K, 0, "var(--_l)");
    } else {
      let I = n.y > i.y, D = Math.max(i.x, n.x), C = Math.min(i.x + i.w, n.x + n.w), B = (je) => Math.min(24, je / 4), U = C - D >= 16 ? (D + C) / 2 : n.x > i.x ? i.x + i.w - B(i.w) : i.x + B(i.w), K = C - D >= 16 ? U : n.x > i.x ? n.x + B(n.w) : n.x + n.w - B(n.w), pe = I ? i.y + i.h : i.y, ue = I ? n.y : n.y + n.h, _e = I ? 1 : -1, ge = ue - _e * oe, Ee = (pe + ge) / 2;
      g = U === K ? `M${o(U)},${o(pe)}V${o(ge)}` : `M${o(U)},${o(pe)}C${o(U)},${o(Ee)} ${o(K)},${o(Ee)} ${o(K)},${o(ge)}`, y = me("arrow_point", K, ue, 0, _e, "var(--_l)");
    }
    ie += `<g class="pele-edge" data-id="${R(e.source.id)}-${R(e.target.id)}"><path d="${g}" fill="none" stroke="var(--_l)"/>${y}</g>`;
  }
  let P = /* @__PURE__ */ new Map();
  for (let e of a.boxes)
    P.set(e.id, e.name);
  let X = "", ee = 0, ne = (e, i, n, g) => {
    let y = Y(`${i} \xB7 ${n}${P.has(n) ? " " + P.get(n) : ""}`, !1, b, w, 4e3, 1), I = Math.max(y.width, u(g, w, 0)) + 2 * z, D = 2 * O + y.height + g.length * f, C = J + (X === "" && _.size === 0 ? 0 : Ne);
    X += `<g class="pele-em-${e}" data-id="${R(n)}"><rect x="${o(G)}" y="${o(C)}" width="${o(I)}" height="${o(D)}" fill="var(--_bg)" stroke="var(--_b)"${W}/>` + q(y, G + z + y.width / 2, C + O + y.height / 2, ` font-size="${w}" font-weight="var(--_hw)"`) + fe(g, G + z, C + O + y.height + f / 2 + w * 0.35, f, ` font-size="${w}"`) + "</g>", J = C + D, ee = Math.max(ee, I);
  };
  for (let e of a.notes)
    ne("note", "Note", e.frame, we(e.text, Ie));
  for (let e of a.specifications) {
    let i = [`Given  ${e.given.join(", ")}`];
    e.when.length > 0 && i.push(`When  ${e.when.join(", ")}`), i.push(`Then  ${e.then.join(", ")}`), ne("specification", "Given / When / Then", e.frame, i.flatMap((n) => we(n, Ie)));
  }
  let se = Math.max(_.size > 0 ? T : 0, ee, F.width), r = Math.ceil(se + 2 * l), d = Math.ceil(J + l), c = q(F, r / 2, l + F.height / 2, ' class="pele-title" font-weight="var(--_tw)"') + ae + ie + Q + X;
  return { svg: De("eventmodeling", r, d, x, h, a, c), width: r, height: d, links: [] };
}
var Se = 8, gt = 120, $t = 20;
function xt(a, t) {
  var P, X, ee, ne, se;
  let h = (P = t.fontSize) != null ? P : 16, m = Math.round(h * 0.875), x = Math.round(h * 0.75), s = (X = t.padding) != null ? X : 8, w = (ee = t.measurer) != null ? ee : Ae(t.fontFamily, t.fontFamilyMono), A = Math.max(160, ((ne = t.maxWidth) != null ? ne : 320) - 2 * s), p = new Map(a.boxes.map((r, d) => [r, d])), f = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ new Set();
  for (let r of a.relations) {
    let d = p.get(r.source), c = p.get(r.target);
    if (d === void 0 || c === void 0 || d === c)
      continue;
    if (Math.abs(d - c) < 2) {
      b.add(a.boxes[Math.max(d, c)]);
      continue;
    }
    let M = f.get(r.target);
    M ? (M[0] = Math.min(M[0], d), M[1] = Math.max(M[1], d)) : f.set(r.target, [Math.min(d, c), Math.max(d, c)]);
  }
  let l = /* @__PURE__ */ new Map(), u = [];
  for (let [r, [d, c]] of [...f].sort((M, E) => M[1][0] - E[1][0])) {
    let M = u.findIndex((E) => E < d);
    M < 0 && (M = u.length), u[M] = c, l.set(r, M);
  }
  let _ = 24 + Se * Math.max(0, u.length - 1), N = Math.max(gt, A - _), L = N - 2 * z, j = Y(a.title, !1, w, h, A, 1), v = s + (j.height ? j.height + 12 : 0), V = s + j.height, T = Math.max(j.width, N + _), F = "", re = "", G = "", Z = /* @__PURE__ */ new Map(), H = (r, d, c = 0) => Re(Le(r), w, d, L, c);
  a.boxes.forEach((r, d) => {
    var D;
    let c = b.has(r) ? L - $t : L, M = Oe(Y(r.lane.label, !1, w, m, c, 1), w, c), E = Y(r.name, !1, w, m, L - 36, 1), k = r.data ? H(r.data, x, 4) : void 0, e = Math.max(N, M.width + 2 * z, E.width + 2 * z + 36, ((D = k == null ? void 0 : k.width) != null ? D : 0) + 2 * z), i = M.height + 12, n = 2 * O + E.height + (k ? k.height + 6 : 0), g = Fe.get(r.kind), y = v + i, I = `x="${o(s)}" y="${o(y)}" width="${o(e)}" height="${o(n)}"`;
    F += `<g class="pele-cluster pele-em-lane" data-id="${R(r.lane.label)}">` + Be(M, s + z, v, ` class="pele-cluster-label" font-size="${m}" font-weight="var(--_hw)" fill="var(--_m)"`) + `<g class="pele-node pele-em-${r.kind}${r.reset ? " pele-em-reset" : ""}" data-id="${R(r.id)}"><rect ${I} fill="var(--_bg)" stroke="var(--_b)"${W}/>` + (g === void 0 ? "" : `<rect ${I} fill="${de(g)}" fill-opacity="0.22" stroke="${de(g)}"${W}/>`) + q(E, s + z + E.width / 2, y + O + E.height / 2, ` class="pele-label" font-size="${m}" font-weight="var(--_hw)"`) + `<text class="pele-em-frame" x="${o(s + e - z)}" y="${o(y + O + m)}" text-anchor="end" font-size="${x}" fill="var(--_m)">${Ce(r.id)}</text>` + (k ? fe(k.lines.map((C) => C.map((B) => B.text).join("")), s + z, y + O + E.height + 6 + k.lineHeight / 2 + x * 0.35, k.lineHeight, ` class="pele-em-data" font-family="${ze}" font-size="${x}"`) : "") + "</g></g>", Z.set(r, { y, h: n, w: e, index: d, lane: M.width }), T = Math.max(T, e + _), V = y + n, v = V + 28;
  });
  for (let r of a.relations) {
    let d = Z.get(r.source), c = Z.get(r.target);
    if (!d || !c || d === c)
      continue;
    let M = c.y > d.y, E = M ? 1 : -1, k = M ? d.y + d.h : d.y, e = M ? c.y : c.y + c.h, i, n;
    if (Math.abs(d.index - c.index) === 1) {
      let g = s + Math.max(Math.min(d.w, c.w) / 2, z + (M ? c : d).lane + 16);
      i = `M${o(g)},${o(k)}V${o(e - E * Me("arrow_point"))}`, n = me("arrow_point", g, e, 0, E, "var(--_l)");
    } else {
      let g = s + T - _ + 12 + Se * ((se = l.get(r.target)) != null ? se : 0), y = d.y + d.h / 2 - 5, I = c.y + c.h / 2 + 5;
      i = `M${o(s + d.w)},${o(y)}H${o(g)}V${o(I)}H${o(s + c.w + Me("arrow_point"))}`, n = me("arrow_point", s + c.w, I, -1, 0, "var(--_l)");
    }
    re += `<g class="pele-edge" data-id="${R(r.source.id)}-${R(r.target.id)}"><path d="${i}" fill="none" stroke="var(--_l)"/>${n}</g>`;
  }
  let ae = new Map(a.boxes.map((r) => [r.id, r.name])), J = (r, d, c, M) => {
    let E = Y(`${d} \xB7 ${c}${ae.has(c) ? " " + ae.get(c) : ""}`, !1, w, m, L, 1), k = H(M, m), e = Math.max(N, E.width + 2 * z, k.width + 2 * z), i = 2 * O + E.height + k.height;
    G += `<g class="pele-em-${r}" data-id="${R(c)}"><rect x="${o(s)}" y="${o(v)}" width="${o(e)}" height="${o(i)}" fill="var(--_bg)" stroke="var(--_b)"${W}/>` + q(E, s + z + E.width / 2, v + O + E.height / 2, ` font-size="${m}" font-weight="var(--_hw)"`) + fe(k.lines.map((n) => n.map((g) => g.text).join("")), s + z, v + O + E.height + k.lineHeight / 2 + m * 0.35, k.lineHeight, ` font-size="${m}"`) + "</g>", V = v + i, v = V + Ne, T = Math.max(T, e);
  };
  for (let r of a.notes)
    J("note", "Note", r.frame, r.text);
  for (let r of a.specifications) {
    let d = [`Given  ${r.given.join(", ")}`];
    r.when.length && d.push(`When  ${r.when.join(", ")}`), d.push(`Then  ${r.then.join(", ")}`), J("specification", "Given / When / Then", r.frame, d.join(`
`));
  }
  let Q = Math.ceil(T + 2 * s), ie = Math.ceil(V + s), oe = q(j, Q / 2, s + j.height / 2, ' class="pele-title" font-weight="var(--_tw)"') + re + F + G;
  return { svg: De("eventmodeling", Q, ie, h, t, a, oe), width: Q, height: ie, links: [] };
}
var bt = { type: "eventmodeling", keepComments: !0, parse: (a, t, h) => lt(ht(a), h), render: ct };
export {
  bt as eventmodeling
};
//# sourceMappingURL=APHGIUZY-24951c24.js.map

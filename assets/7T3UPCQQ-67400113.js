var $t = Object.defineProperty;
var mt = (t, e, l) => e in t ? $t(t, e, { enumerable: !0, configurable: !0, writable: !0, value: l }) : t[e] = l;
var I = (t, e, l) => (mt(t, typeof e != "symbol" ? e + "" : e, l), l);
import { i as yt } from "./D5TW5CPZ-bb4cf81d.js";
import { f as ut } from "./DKTLEL5E-e2b762b2.js";
import { O as Ue, $ as bt, L as gt, V as xt, W as wt, G as vt, P as kt, H as _t, x as Mt, D as Nt, j as $e, z as At, B as Lt, U as Pt } from "./IU7WZTP6-20f2a5ec.js";
import { L as F, O as me } from "./YTAM2TF7-f178d8af.js";
import { V as ae, x as c, L as Y, b as qe, e as Qe, m as Ot, c as It, j as zt, S as Et, $ as Tt } from "./3G3HCGVE-09704139.js";
import { a as ue, d as Wt } from "./lazy-950901f8.js";
var St = class {
  constructor() {
    I(this, "nodes", /* @__PURE__ */ new Map());
    I(this, "labels");
    I(this, "links", []);
    I(this, "trends", /* @__PURE__ */ new Map());
    I(this, "pipelines", /* @__PURE__ */ new Map());
    I(this, "annotations", []);
    I(this, "notes", []);
    I(this, "accelerators", []);
    I(this, "deaccelerators", []);
    I(this, "annotationsBox");
    I(this, "axes", {});
    I(this, "size");
  }
  addNode(t) {
    var l, n, v, m;
    let e = (l = this.nodes.get(t.id)) != null ? l : { id: t.id, label: t.label };
    this.nodes.set(t.id, { ...e, ...t, className: (n = t.className) != null ? n : e.className, labelOffsetX: (v = t.labelOffsetX) != null ? v : e.labelOffsetX, labelOffsetY: (m = t.labelOffsetY) != null ? m : e.labelOffsetY }), this.labels = void 0;
  }
  addLink(t) {
    this.links.push(t);
  }
  addTrend(t) {
    this.trends.set(t.nodeId, t);
  }
  startPipeline(t) {
    this.pipelines.set(t, { nodeId: t, componentIds: [] });
    let e = this.nodes.get(t);
    e && (e.isPipelineParent = !0);
  }
  addPipelineComponent(t, e) {
    var n;
    (n = this.pipelines.get(t)) == null || n.componentIds.push(e);
    let l = this.nodes.get(e);
    l && (l.inPipeline = !0);
  }
  addAnnotation(t) {
    this.annotations.push(t);
  }
  addNote(t) {
    this.notes.push(t);
  }
  addAccelerator(t) {
    this.accelerators.push(t);
  }
  addDeaccelerator(t) {
    this.deaccelerators.push(t);
  }
  setAnnotationsBox(t, e) {
    this.annotationsBox = { x: t, y: e };
  }
  setAxes(t) {
    this.axes = { ...this.axes, ...t };
  }
  setSize(t, e) {
    this.size = { width: t, height: e };
  }
  getNode(t) {
    return this.nodes.get(t);
  }
  resolveNodeId(t) {
    var e;
    if (this.nodes.has(t))
      return t;
    if (!this.labels) {
      this.labels = /* @__PURE__ */ new Map();
      for (let [l, n] of this.nodes)
        this.labels.has(n.label) || this.labels.set(n.label, l);
    }
    return (e = this.labels.get(t)) != null ? e : t;
  }
  build() {
    let t = [];
    for (let e of this.nodes.values()) {
      if (typeof e.x != "number" || typeof e.y != "number")
        throw new ue(`Node "${e.label}" is missing coordinates`, "semantic", { type: "wardley" });
      t.push(e);
    }
    return { nodes: t, links: [...this.links], trends: [...this.trends.values()], pipelines: [...this.pipelines.values()], annotations: [...this.annotations], notes: [...this.notes], accelerators: [...this.accelerators], deaccelerators: [...this.deaccelerators], annotationsBox: this.annotationsBox, axes: { ...this.axes }, size: this.size };
  }
};
function oe(t, e) {
  let l = t <= 1 ? t * 100 : t;
  if (l < 0 || l > 100)
    throw new ue(`${e} must be between 0-1 (decimal) or 0-100 (percentage). Received: ${t}`, "semantic", { type: "wardley" });
  return l;
}
function B(t, e, l) {
  return { x: oe(e, `${l} evolution`), y: oe(t, `${l} visibility`) };
}
function Je(t) {
  return t === "+<>" ? "bidirectional" : t === "+<" ? "backward" : t === "+>" ? "forward" : void 0;
}
function Ct(t) {
  if (!(t != null && t.startsWith("+")))
    return {};
  let e = t.indexOf("'", 2), l = t[1] === "'" && e !== -1 ? t.slice(2, e) : void 0;
  return t.includes("<>") ? { flow: "bidirectional", label: l } : t.includes("<") ? { flow: "backward", label: l } : t.includes(">") ? { flow: "forward", label: l } : { label: l };
}
function et(t) {
  return t ? [(t.negX ? -1 : 1) * t.offsetX, (t.negY ? -1 : 1) * t.offsetY] : [void 0, void 0];
}
function Rt(t, e) {
  var l, n, v, m;
  t.size && e.setSize(t.size.width, t.size.height), t.evolution && e.setAxes({ stages: t.evolution.stages.map((i) => i.secondName ? `${i.name.trim()} / ${i.secondName.trim()}` : i.name.trim()), stageBoundaries: t.evolution.stages.filter((i) => i.boundary !== void 0).map((i) => i.boundary) });
  for (let i of t.anchors) {
    let d = B(i.visibility, i.evolution, `Anchor "${i.name}"`);
    e.addNode({ id: i.name, label: i.name, x: d.x, y: d.y, className: "anchor" });
  }
  for (let i of t.components) {
    let d = B(i.visibility, i.evolution, `Component "${i.name}"`), [_, u] = et(i.label);
    e.addNode({ id: i.name, label: i.name, x: d.x, y: d.y, className: "component", labelOffsetX: _, labelOffsetY: u, inertia: i.inertia, sourceStrategy: (l = i.decorator) == null ? void 0 : l.strategy });
  }
  for (let i of t.notes) {
    let d = B(i.visibility, i.evolution, `Note "${i.text}"`);
    e.addNote({ text: i.text, x: d.x, y: d.y });
  }
  for (let i of t.pipelines) {
    let d = e.getNode(i.parent);
    if (!d || typeof d.y != "number")
      throw new ue(`Pipeline "${i.parent}" must reference an existing component with coordinates.`, "semantic", { type: "wardley" });
    let _ = d.y;
    e.startPipeline(i.parent);
    for (let u of i.components) {
      let M = `${i.parent}_${u.name}`, [N, R] = et(u.label), p = oe(u.evolution, `Pipeline component "${u.name}" evolution`);
      e.addNode({ id: M, label: u.name, x: p, y: _, className: "pipeline-component", labelOffsetX: N, labelOffsetY: R, inertia: void 0, sourceStrategy: void 0 }), e.addPipelineComponent(i.parent, M);
    }
  }
  for (let i of t.links) {
    let d = !!i.arrow && (i.arrow.includes("-.->") || i.arrow.includes(".-.")), _ = Ct(i.arrow), u = (v = (n = Je(i.fromPort)) != null ? n : Je(i.toPort)) != null ? v : _.flow;
    e.addLink({ source: e.resolveNodeId(i.from), target: e.resolveNodeId(i.to), dashed: d, label: (m = _.label) != null ? m : i.linkLabel, flow: u });
  }
  for (let i of t.evolves) {
    let d = e.getNode(i.component);
    (d == null ? void 0 : d.y) !== void 0 && e.addTrend({ nodeId: i.component, targetX: oe(i.target, `Evolve target for "${i.component}"`), targetY: d.y });
  }
  if (t.annotations.length > 0) {
    let i = B(t.annotations[0].x, t.annotations[0].y, "Annotations box");
    e.setAnnotationsBox(i.x, i.y);
  }
  for (let i of t.annotation) {
    let d = B(i.x, i.y, `Annotation ${i.number}`);
    e.addAnnotation({ number: i.number, coordinates: [{ x: d.x, y: d.y }], text: i.text });
  }
  for (let i of t.accelerators) {
    let d = B(i.x, i.y, `Accelerator "${i.name}"`);
    e.addAccelerator({ name: i.name, x: d.x, y: d.y });
  }
  for (let i of t.deaccelerators) {
    let d = B(i.x, i.y, `Deaccelerator "${i.name}"`);
    e.addDeaccelerator({ name: i.name, x: d.x, y: d.y });
  }
}
function Kt(t, e) {
  let l = new St();
  return Rt(t, l), { type: "wardley", title: t.title || e, accTitle: t.accTitle ? t.accTitle.replace(/^\s+/g, "") : void 0, accDescr: t.accDescr ? t.accDescr.replace(/\n\s+/g, `
`) : void 0, ...l.build() };
}
function tt(t, e) {
  let l = e;
  for (let n = t.charCodeAt(l); n >= 48 && n <= 57; n = t.charCodeAt(l))
    l++;
  return l;
}
function Yt() {
  let t = 0, e = 0;
  return (l, n) => {
    if ((n < t || n >= e) && (t = n, e = tt(l, n)), e === n || l.charCodeAt(e) !== 46)
      return -1;
    let v = tt(l, e + 1);
    return v > e + 1 ? v : -1;
  };
}
var at = { name: "ARROW", pattern: /->/y, first: "-" }, it = { name: "LINK_ARROW", pattern: /-->|-\.->|>|\+'[^']*'<>|\+'[^']*'<|\+'[^']*'>/y, first: "->+" }, O = (t, e) => ({ name: t, pattern: new RegExp(e, "y"), first: e[0] }), ot = [{ name: "[", pattern: "[" }, { name: ",", pattern: "," }, { name: "]", pattern: "]" }, { name: "@", pattern: "@" }, { name: "/", pattern: "/" }, { name: "(", pattern: "(" }, { name: ")", pattern: ")" }, { name: "-", pattern: "-", longer: [at, it, Ue] }, { name: "{", pattern: "{" }, { name: "}", pattern: "}" }, { name: "WARDLEY_NUMBER", pattern: /[0-9]+\.[0-9]+/y, first: "0123456789", scanner: Yt }, at, { name: "LINK_PORT", pattern: /\+<>|\+>|\+</y, first: "+" }, it, { name: "LINK_LABEL", pattern: /;[^\n\r]+/y, first: ";" }, { name: "STRATEGY", pattern: /build|buy|outsource|market/y, first: "bom" }, O("KW_WARDLEY", "wardley-beta"), O("KW_SIZE", "size"), O("KW_EVOLUTION", "evolution"), O("KW_ANCHOR", "anchor"), O("KW_COMPONENT", "component"), O("KW_LABEL", "label"), O("KW_INERTIA", "inertia"), O("KW_EVOLVE", "evolve"), O("KW_PIPELINE", "pipeline"), O("KW_NOTE", "note"), O("KW_ANNOTATIONS", "annotations"), O("KW_ANNOTATION", "annotation"), O("KW_ACCELERATOR", "accelerator"), O("KW_DEACCELERATOR", "deaccelerator"), { name: "NAME_WITH_SPACES", pattern: /(?!title\s|accTitle|accDescr)[A-Za-z](?:[A-Za-z0-9_()&]|-(?!>))*(?:[ \t]+[A-Za-z(](?:[A-Za-z0-9_()&]|-(?!>))*)*/y, first: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz" }, { name: "WS", pattern: /[ \t]+/y, hidden: !0, first: "	 " }, yt(), bt, gt, { name: "INT", pattern: /0|[1-9][0-9]*(?!\.)/y, first: "0123456789" }, xt, { name: "ID", pattern: /[\w]([-\w]*\w)?/y, first: "_0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz" }, wt, vt, Ue, kt, _t];
function Bt(t) {
  let e = new Mt(Nt(t, ot, "wardley"), ot, "wardley"), l = { $type: "Wardley", anchors: [], components: [], links: [], evolves: [], pipelines: [], notes: [], annotations: [], annotation: [], accelerators: [], deaccelerators: [] }, n = (p) => e.kinds[e.i] === p, v = () => n(36) || n(37) || n(30), m = () => n(36) ? $e(e.take()) : n(37) || n(30) ? e.take() : e.fail("a name"), i = () => Number(e.expect(10)), d = () => parseInt(e.expect(35)), _ = () => n(10) ? Number(e.take()) : parseInt(e.expect(35)), u = () => {
    if (!n(-1))
      for (n(38) || e.fail("a line break or the end of input"); n(38); )
        e.i++;
  }, M = (p) => {
    e.expect(0);
    let x = p();
    e.expect(1);
    let k = p();
    return e.expect(2), [x, k];
  }, N = () => {
    e.expect(21), e.expect(0);
    let p = e.accept(7), x = d();
    e.expect(1);
    let k = e.accept(7), T = d();
    return e.expect(2), { $type: "Label", negX: p, offsetX: x, negY: k, offsetY: T };
  }, R = () => {
    let p = { $type: "EvolutionStage", name: m() };
    return e.accept(3) && (p.boundary = i()), e.accept(4) && (p.secondName = m()), p;
  };
  for (; n(38); )
    e.i++;
  for (e.expect(16); !n(-1); )
    switch (e.kind) {
      case 38:
        e.i++;
        break;
      case 32:
        l.accDescr = Pt(e.take()), u();
        break;
      case 33:
        l.accTitle = Lt(e.take()), u();
        break;
      case 34:
        l.title = At(e.take()), u();
        break;
      case 17: {
        e.i++;
        let [p, x] = M(d);
        u(), l.size = { $type: "Size", width: p, height: x };
        break;
      }
      case 18: {
        e.i++;
        let p = [R()];
        for (e.expect(11), p.push(R()); e.accept(11); )
          p.push(R());
        u(), l.evolution = { $type: "Evolution", stages: p };
        break;
      }
      case 19: {
        e.i++;
        let p = m(), [x, k] = M(i);
        u(), l.anchors.push({ $type: "Anchor", name: p, visibility: x, evolution: k });
        break;
      }
      case 20: {
        e.i++;
        let p = { $type: "Component", name: m(), visibility: 0, evolution: 0, inertia: !1 };
        [p.visibility, p.evolution] = M(i), n(21) && (p.label = N()), n(5) && e.kinds[e.i + 1] === 15 && (e.i++, p.decorator = { $type: "Decorator", strategy: e.take() }, e.expect(6)), e.accept(22) ? p.inertia = !0 : e.accept(5) && (e.expect(22), e.expect(6), p.inertia = !0), u(), l.components.push(p);
        break;
      }
      case 23: {
        e.i++;
        let p = m(), x = i();
        u(), l.evolves.push({ $type: "Evolve", component: p, target: x });
        break;
      }
      case 24: {
        e.i++;
        let p = m();
        for (e.expect(8), e.expect(38); n(38); )
          e.i++;
        let x = [];
        do {
          e.expect(20);
          let k = { $type: "PipelineComponent", name: m(), evolution: 0 };
          e.expect(0), k.evolution = i(), e.expect(2), n(21) && (k.label = N()), u(), x.push(k);
        } while (n(20));
        e.expect(9), u(), l.pipelines.push({ $type: "Pipeline", parent: p, components: x });
        break;
      }
      case 25: {
        e.i++;
        let p = $e(e.expect(36)), [x, k] = M(i);
        u(), l.notes.push({ $type: "Note", text: p, visibility: x, evolution: k });
        break;
      }
      case 26: {
        e.i++;
        let [p, x] = M(_);
        u(), l.annotations.push({ $type: "Annotations", x: p, y: x });
        break;
      }
      case 27: {
        e.i++;
        let p = d();
        e.expect(1);
        let [x, k] = M(_), T = $e(e.expect(36));
        u(), l.annotation.push({ $type: "Annotation", number: p, x, y: k, text: T });
        break;
      }
      case 28:
      case 29: {
        let p = e.kind === 29;
        e.i++;
        let x = m(), [k, T] = M(i);
        u(), p ? l.deaccelerators.push({ $type: "Deaccelerator", name: x, x: k, y: T }) : l.accelerators.push({ $type: "Accelerator", name: x, x: k, y: T });
        break;
      }
      default: {
        v() || e.fail("a statement");
        let p = { $type: "Link", from: m(), to: "" };
        n(12) && (p.fromPort = e.take()), (n(13) || n(11)) && (p.arrow = e.take()), p.to = m(), n(12) && (p.toPort = e.take()), n(14) && (p.linkLabel = e.take().substring(1).trim()), u(), l.links.push(p);
      }
    }
  return l;
}
var Dt = ["Genesis", "Custom Built", "Product", "Commodity"], Vt = 48, w = 6, D = 10, Xt = 8, ie = 15, U = 60, Ht = 30, lt = 20, ye = "var(--_c)", z = "var(--_l)";
function Zt(t, e, l, n, v) {
  var i;
  let m = (i = t["wardley-beta"]) == null ? void 0 : i[e];
  return typeof m == "number" && m >= n && m <= v ? m : l;
}
function G(t, e, l) {
  return t < e ? e : t > l ? l : t;
}
function nt(t, e, l, n) {
  let v = It(t), m = "", i = l;
  for (let d of t.lines) {
    let _ = !0;
    for (let u of d) {
      if (u.icon !== void 0)
        continue;
      let M = zt(u.style & ~v);
      m += `<tspan${_ ? ` x="${c(e)}" y="${c(i)}"` : ""}${M}>${Et(u.text)}</tspan>`, _ = !1;
    }
    i += t.lineHeight;
  }
  return m === "" ? "" : `<text${Tt(n, v)} xml:space="preserve">${m}</text>`;
}
function rt(t, e, l, n) {
  let v = typeof e == "number" && Number.isFinite(e) ? e : Zt(t, l, n, 1, 1e6);
  return G(v, 200, 1e4) - 2 * Vt;
}
function Ft(t, e, l) {
  var v;
  let n = rt(e, (v = t.size) == null ? void 0 : v.width, "width", 900);
  return ut(l, n, 160, (m, i) => Gt(t, e, l, m, n, i));
}
function Gt(t, e, l, n, v, m) {
  var Se, Ce, Re, Ke, Ye, Be, De, Ve, Xe, He;
  let i = (Se = l.fontSize) != null ? Se : 16, d = Math.round(i * 0.8125), _ = Math.round(i * 0.6875), u = (Ce = l.measurer) != null ? Ce : Wt(l.fontFamily, l.fontFamilyMono), M = (Re = l.padding) != null ? Re : 8, N = rt(e, (Ke = t.size) == null ? void 0 : Ke.height, "height", 600) * Math.max(0.75, n / v), R = ((Ye = e["wardley-beta"]) == null ? void 0 : Ye.showGrid) === !0, p = 0, x = 0, k = n, T = N, S = (a, o, r, s) => {
    a < p && (p = a), o < x && (x = o), r > k && (k = r), s > T && (T = s);
  }, V = (a, o, r, s) => (S(o - a.width / 2, r - a.height / 2, o + a.width / 2, r + a.height / 2), ae(a, o, r, s, l.icons)), le = (a, o, r, s) => (S(o, r - a.size, o + a.width, r - a.size + a.height + 4), nt(a, o, r, s)), E = (a, o, r = m ? Math.max(64, Math.min(120, n / 2)) : 4e3, s = 0) => Qe(a, !1, u, o, r, s), X = (a) => a / 100 * n, H = (a) => N - a / 100 * N, q = t.axes.stages && t.axes.stages.length > 0 ? t.axes.stages : Dt, ne = t.axes.stageBoundaries, be = ne !== void 0 && ne.length === q.length, Q = "", ge = "", J = N, xe = 0;
  if (q.forEach((a, o) => {
    let r = be ? xe : o / q.length, s = be ? G(ne[o], 0, 1) : (o + 1) / q.length;
    xe = s, o > 0 && (Q += `<path class="pele-wardley-stage" d="M${c(r * n)},0V${c(N)}" stroke="var(--_b)" stroke-dasharray="4 4"/>`);
    let f = E(a, d, Math.max(48, Math.abs(s - r) * n - 12));
    ge += V(f, (r + s) / 2 * n, N + 8 + f.height / 2, ` class="pele-wardley-stage-label" font-size="${d}" fill="var(--_m)"`), J = Math.max(J, N + 8 + f.height);
  }), R)
    for (let a = 1; a < 4; a++)
      Q += `<path class="pele-wardley-grid" d="M${c(n * a / 4)},0V${c(N)}M0,${c(N * a / 4)}H${c(n)}" stroke="var(--_b)" stroke-dasharray="2 6"/>`;
  Q += `<path class="pele-wardley-axis" d="M0,0V${c(N)}H${c(n)}" stroke="${z}"/>`;
  let re = E((Be = t.axes.xLabel) != null ? Be : "Evolution", d), we = E((De = t.axes.yLabel) != null ? De : "Visibility", d), ve = ` class="pele-wardley-axis-label" font-size="${d}" font-weight="var(--_hw)"`, st = V(re, n / 2, J + 6 + re.height / 2, ve) + ae(we, -16, N / 2, `${ve} transform="rotate(-90 -16 ${c(N / 2)})"`);
  S(-16 - we.height / 2, 0, 0, 0);
  let ct = J + 6 + re.height + 10, K = /* @__PURE__ */ new Map();
  for (let a of t.nodes)
    K.set(a.id, { x: X(a.x), y: H(a.y), node: a });
  let ke = "", _e = /* @__PURE__ */ new Map();
  for (let a of t.pipelines) {
    _e.set(a.nodeId, new Set(a.componentIds));
    let o = [];
    for (let b of a.componentIds) {
      let y = K.get(b);
      y && o.push(y);
    }
    if (o.length === 0)
      continue;
    o.sort((b, y) => b.x - y.x);
    let r = o[0].x, s = o[o.length - 1].x, f = o[0].y, $ = f - 2 * w, h = K.get(a.nodeId);
    h && (h.x = (r + s) / 2, h.y = $ - D / 6), S(r - ie, $, s + ie, $ + 4 * w), ke += `<g class="pele-wardley-pipeline" data-id="${Y(a.nodeId)}"><rect x="${c(r - ie)}" y="${c($)}" width="${c(s - r + 2 * ie)}" height="${c(4 * w)}" fill="var(--_s)" stroke="var(--_b)"${qe}/>` + (o.length > 1 ? `<path d="M${c(r)},${c(f)}H${c(s)}" stroke="${z}" stroke-dasharray="4 4"/>` : "") + "</g>";
  }
  let se = /* @__PURE__ */ new Map(), ce = (a, o, r) => {
    let s = a.node;
    if (s.className === "anchor") {
      let f = se.get(s);
      return f || se.set(s, f = E(s.label, d, m ? Math.max(64, n / 2) : 4e3, 1)), 1 / Math.hypot(o / (f.width / 2 + 5), r / (d * 0.8));
    }
    return s.isPipelineParent ? D / Math.SQRT2 : s.sourceStrategy ? 2 * w : w;
  }, de = /* @__PURE__ */ new Map(), Me = (a, o, r) => {
    var s;
    Math.abs(o) < 0.25 || Math.abs(r) < 0.25 || de.set(a, ((s = de.get(a)) != null ? s : 0) | (o > 0 ? r < 0 ? 1 : 2 : r < 0 ? 4 : 8));
  }, pe = "";
  for (let a of t.links) {
    let o = K.get(a.source), r = K.get(a.target);
    if (!o || !r || o === r || ((Ve = _e.get(a.target)) == null ? void 0 : Ve.has(a.source)))
      continue;
    let s = r.x - o.x, f = r.y - o.y, $ = Math.hypot(s, f);
    if ($ < 0.01)
      continue;
    let h = s / $, b = f / $, y = ce(o, h, b), A = ce(r, h, b);
    if (y + A >= $)
      continue;
    Me(o, h, b), Me(r, -h, -b);
    let g = o.x + h * y, P = o.y + b * y, L = r.x - h * A, W = r.y - b * A, C = "";
    (a.flow === "forward" || a.flow === "bidirectional") && (C += me("arrow_point", L, W, h, b, z), L -= h * F("arrow_point"), W -= b * F("arrow_point")), (a.flow === "backward" || a.flow === "bidirectional") && (C += me("arrow_point", g, P, -h, -b, z), g += h * F("arrow_point"), P += b * F("arrow_point"));
    let te = "";
    if (a.label) {
      let j = E(a.label, _ + 1, 200), Ze = h >= 0 ? 1 : -1, Fe = b * Ze, Ge = -h * Ze, je = 5 + Math.abs(Fe) * j.width / 2 + Math.abs(Ge) * j.height / 2;
      te = V(j, (o.x + r.x) / 2 + Fe * je, (o.y + r.y) / 2 + Ge * je, ` class="pele-edge-label" font-size="${_ + 1}" fill="var(--_m)"`);
    }
    pe += `<g class="pele-edge${a.dashed ? " pele-wardley-dashed" : ""}" data-id="${Y(a.source)}-${Y(a.target)}"><path d="M${c(g)},${c(P)}L${c(L)},${c(W)}" stroke="${z}"${a.dashed ? ' stroke-dasharray="6 6"' : ""}/>` + C + te + "</g>";
  }
  let he = "";
  for (let a of t.trends) {
    let o = K.get(a.nodeId);
    if (!o)
      continue;
    let r = X(a.targetX), s = H(a.targetY), f = r - o.x, $ = s - o.y, h = Math.hypot(f, $), b = "", y = h > 0 ? ce(o, f / h, $ / h) : 0;
    if (h > y + w + 4) {
      let A = f / h, g = $ / h, P = r - A * (w + 2), L = s - g * (w + 2);
      b = `<path d="M${c(o.x + A * y)},${c(o.y + g * y)}L${c(P - A * F("arrow_point"))},${c(L - g * F("arrow_point"))}" stroke="${ye}" stroke-dasharray="4 4"/>` + me("arrow_point", P, L, A, g, ye);
    }
    S(r - w, s - w, r + w, s + w), he += `<g class="pele-wardley-trend" data-id="${Y(a.nodeId)}">${b}<circle cx="${c(r)}" cy="${c(s)}" r="${w}" fill="var(--_bg)" stroke="${ye}"/></g>`;
  }
  let Ne = "", ee = 1.2 * w, dt = 0.7 * w;
  for (let a of K.values()) {
    let o = a.node, { x: r, y: s } = a, f = o.className === "anchor", $ = o.sourceStrategy, h = "";
    if ($) {
      let g = $ === "outsource" ? "var(--_m)" : $ === "buy" ? "var(--_a)" : $ === "build" ? "var(--_s)" : "var(--_bg)";
      h += `<circle class="pele-wardley-${$}" cx="${c(r)}" cy="${c(s)}" r="${2 * w}" fill="${g}" stroke="${z}"/>`;
    }
    if ($ === "market") {
      let g = ee * Math.cos(Math.PI / 6), P = s + ee * Math.sin(Math.PI / 6);
      h += `<path d="M${c(r)},${c(s - ee)}L${c(r - g)},${c(P)}H${c(r + g)}Z" fill="none" stroke="${z}"/>`;
      for (let [L, W] of [[r, s - ee], [r - g, P], [r + g, P]])
        h += `<circle cx="${c(L)}" cy="${c(W)}" r="${c(dt)}" fill="var(--_bg)" stroke="${z}"/>`;
    } else
      o.isPipelineParent ? h += `<rect x="${c(r - D / 2)}" y="${c(s - D / 2)}" width="${D}" height="${D}" fill="var(--_bg)" stroke="${z}"/>` : f || (h += `<circle cx="${c(r)}" cy="${c(s)}" r="${w}" fill="var(--_bg)" stroke="${z}"/>`);
    if (o.inertia === !0) {
      let g = (o.isPipelineParent ? D / 2 : w) + 10 + ($ ? w + 4 : 0);
      h += `<rect class="pele-wardley-inertia" x="${c(r + g)}" y="${c(s - w)}" width="4" height="${2 * w}" fill="${z}"/>`;
    }
    let b = o.labelOffsetX === void 0 ? void 0 : G(o.labelOffsetX, -5e3, 5e3), y = o.labelOffsetY === void 0 ? void 0 : G(o.labelOffsetY, -5e3, 5e3), A;
    if (f) {
      let g = (Xe = se.get(o)) != null ? Xe : E(o.label, d, m ? Math.max(64, n / 2) : 4e3, 1);
      A = V(g, r + (b != null ? b : 0), s + (y != null ? y : -3), ` class="pele-label" font-size="${d}" font-weight="var(--_hw)"`);
    } else {
      let g = E(o.label, d), P = ` class="pele-label" font-size="${d}"`, L = Xt + ($ ? 10 : 0);
      if (b !== void 0 || y !== void 0)
        A = le(g, r + (b != null ? b : L), s + (y != null ? y : -L), P);
      else if (o.inPipeline)
        A = V(g, r, s + 2 * w + 4 + g.height / 2, P);
      else {
        let W = (He = de.get(a)) != null ? He : 0, C = (W & 1) === 0 ? 1 : (W & 2) === 0 ? 2 : (W & 4) === 0 ? 4 : (W & 8) === 0 ? 8 : 1, te = C === 1 || C === 2, j = C === 1 || C === 4;
        A = le(g, te ? r + L : r - L - g.width, j ? s - L : s + L + d * 0.75, P);
      }
    }
    S(r - 2 * w, s - 2 * w, r + 2 * w + 20, s + 2 * w), Ne += `<g class="pele-node pele-wardley-${f ? "anchor" : o.isPipelineParent ? "pipeline-parent" : o.inPipeline ? "pipeline-component" : "component"}" data-id="${Y(o.id)}">${h}${A}</g>`;
  }
  let fe = "";
  for (let a of t.annotations) {
    let o = E(String(a.number), _, 4e3, 1), r = "";
    for (let s of a.coordinates) {
      let f = X(s.x), $ = H(s.y), h = Math.max(10, o.width / 2 + 4);
      S(f - h, $ - h, f + h, $ + h), r += `<circle cx="${c(f)}" cy="${c($)}" r="${c(h)}" fill="var(--_bg)" stroke="${z}"/>` + ae(o, f, $, ` font-size="${_}" font-weight="var(--_hw)"`);
    }
    fe += `<g class="pele-wardley-annotation" data-id="${Y(String(a.number))}">${r}</g>`;
  }
  let Ae = t.annotations.filter((a) => a.text).sort((a, o) => a.number - o.number);
  if (Ae.length > 0) {
    let a = Ae.map((y) => E(`${y.number}. ${y.text}`, d, m ? Math.max(80, n - 20) : 320)), o = 0, r = 0;
    for (let y of a)
      o = Math.max(o, y.width), r += y.height;
    o += 20, r += 14;
    let s = t.annotationsBox, f = s ? G(X(s.x), 0, Math.max(0, n - o)) : 0, $ = s ? G(H(s.y), 0, Math.max(0, N - r)) : ct;
    S(f, $, f + o, $ + r);
    let h = "", b = $ + 7;
    for (let y of a)
      h += nt(y, f + 10, b + y.lineHeight / 2 + d * 0.35, ` font-size="${d}"`), b += y.height;
    fe += `<g class="pele-wardley-annotations"><rect x="${c(f)}" y="${c($)}" width="${c(o)}" height="${c(r)}" fill="var(--_bg)" stroke="var(--_b)"${qe}/>${h}</g>`;
  }
  let Le = "";
  for (let a of t.notes)
    Le += le(E(a.text, d, Math.min(360, n * 0.6), 1), X(a.x), H(a.y), ` class="pele-wardley-note" font-size="${d}" font-weight="var(--_hw)"`);
  let Pe = "", Oe = (a, o, r, s) => {
    let f = X(o), $ = H(r), h = Ht / 2, b = s ? f + U : f, y = s ? f : f + U, A = s ? f + U - lt : f + lt, g = `M${c(y)},${c($ - h)}H${c(A)}V${c($ - h - 8)}L${c(b)},${c($)}L${c(A)},${c($ + h + 8)}V${c($ + h)}H${c(y)}Z`;
    S(f, $ - h - 8, f + U, $ + h + 8), Pe += `<g class="pele-wardley-${s ? "accelerator" : "deaccelerator"}" data-id="${Y(a)}"><path d="${g}" fill="var(--_s)" stroke="${z}"/>` + V(E(a, _ + 1, 160, 1), f + U / 2, $ + h + 8 + 12, ` font-size="${_ + 1}" font-weight="var(--_hw)"`) + "</g>";
  };
  for (let a of t.accelerators)
    Oe(a.name, a.x, a.y, !0);
  for (let a of t.deaccelerators)
    Oe(a.name, a.x, a.y, !1);
  let Z = Qe(t.title, !1, u, i, m ? Math.max(80, n) : 4e3, 1), Ie = Z.height > 0 ? Z.height + 12 : 0, ze = Math.min(p, n / 2 - Z.width / 2), pt = Math.max(k, n / 2 + Z.width / 2), Ee = M - ze, ht = M + Ie - x, Te = Math.ceil(pt - ze + 2 * M), We = Math.ceil(T - x + Ie + 2 * M), ft = ae(Z, Ee + n / 2, M + Z.height / 2, ' class="pele-title" font-weight="var(--_tw)"') + `<g transform="translate(${c(Ee)},${c(ht)})"><g class="pele-wardley-frame" fill="none">${Q}</g>` + ge + st + ke + (pe ? `<g class="pele-edges" fill="none">${pe}</g>` : "") + (he ? `<g class="pele-wardley-trends" fill="none">${he}</g>` : "") + Ne + fe + Le + Pe + "</g>";
  return { svg: Ot("wardley", Te, We, i, l, t, ft), width: Te, height: We, links: [] };
}
var aa = { type: "wardley", section: "wardley-beta", parse: (t, e, l) => Kt(Bt(t), l), render: Ft };
export {
  aa as wardley
};
//# sourceMappingURL=7T3UPCQQ-67400113.js.map

var xt = Object.defineProperty;
var Et = (t, r, s) => r in t ? xt(t, r, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[r] = s;
var z = (t, r, s) => (Et(t, typeof r != "symbol" ? r + "" : r, s), s);
import { i as It, a as $t } from "./FTXIJQGB-9f8e460c.js";
import { q as st, a as ve, R as Lt, d as Mt, b as _t, e as pe, K as Nt, Z as Rt, V as at, i as lt } from "./lazy-950901f8.js";
import { h as Dt } from "./7WLXJQOR-4872eebf.js";
import { x as ot, h as Ot } from "./WJQKAQUO-dbb8c0b4.js";
import { q as nt, z as Ie, _ as Gt, j as Ut, H as Bt } from "./QRQ46LE7-b110495e.js";
import { N as Pt, U as Vt, M as Kt, D as zt } from "./6B2VI7MB-716cdb27.js";
import { o as jt, i as Ft, P as Wt, B as $e, R as Xt } from "./XQLH73R6-5278eaeb.js";
import { m as qt, c as Ht } from "./DKTLEL5E-e2b762b2.js";
import { T as dt, L as Le, W as Yt, O as Jt, G as Zt } from "./YTAM2TF7-f178d8af.js";
import { a as ct, e as be, u as ht, L as Me, x as re, f as pt, V as _e, h as Pe, S as Ne, m as Qt } from "./3G3HCGVE-09704139.js";
var er = /* @__PURE__ */ new Map([["task", "roundedRect"], ["tool", "subroutine"], ["input", "lean-right"], ["decision", "diamond"], ["refdoc", "lin-doc"], ["action", "hexagon"], ["round", "rect"]]), tr = /* @__PURE__ */ new Set(["doc", "stadium", "terminal", "circle", "trapezoid", "inv_trapezoid", "inv-trapezoid", "doublecircle", "double-circle", "typeDeclaration", "procs", "lean_left", "lean-left", "in-out", "cylinder", "ellipse", "odd", "tag-rect", "tagged-rectangle", "delay", "half-rounded-rectangle", "lin-rect", "lined-rectangle", "win-pane", "window-pane", "curv-trap", "curved-trapezoid"]), rr = /* @__PURE__ */ new Set(["roundedRect", "subroutine", "subprocess", "subproc", "framed-rectangle", "lean-right", "diamond", "lin-doc", "lined-document", "hexagon", "hex", "connector", "collapsedGroup"]), me = "roundedRect";
function Se(t) {
  var r;
  return t && ((r = er.get(t)) != null ? r : t);
}
function ir(t) {
  return $t(t) || t === "constructor";
}
function sr(t, r) {
  for (let s of t)
    s.isGroup || ((!s.shape || s.shape === "squareRect" || s.shape === "rect") && (s.shape = me), tr.has(s.shape) ? (r.emitError("SHAPE_REMOVED", `shape "${s.shape}" was removed in v0.8.1, using "${me}"`, { nodeId: s.id }), s.shape = me) : rr.has(s.shape) || (r.emitWarning("SHAPE_UNSUPPORTED", `shape "${s.shape}" is not supported, using "${me}"`, { nodeId: s.id }), s.shape = me));
}
var ar = /* @__PURE__ */ new Set(["shape", "view", "icon", "img", "form", "pos", "w", "h", "class", "style", "labelType"]), lr = /* @__PURE__ */ new Set(["subroutine", "subprocess", "subproc", "framed-rectangle", "tool"]);
function or(t) {
  return lr.has(t.type);
}
function Re(t) {
  return t === "markdown" || t === "string" || t === "text" ? t : "markdown";
}
function ft(t) {
  return t.startsWith('"') && t.endsWith('"') ? t.substring(1, t.length - 1) : t;
}
function Ve(t) {
  return typeof t == "object" && t !== null && !Array.isArray(t);
}
function nr(t) {
  let r = (i) => Array.isArray(i) ? [] : Ve(i) ? {} : i, s = r(t), n = [[t, s]];
  for (; n.length > 0; ) {
    let [i, a] = n.pop();
    if (Array.isArray(i))
      for (let h of i) {
        let g = r(h);
        a.push(g), typeof h == "object" && h !== null && n.push([h, g]);
      }
    else if (Ve(i))
      for (let h of Object.keys(i)) {
        if (h === "__proto__" || h === "constructor" || h === "prototype")
          continue;
        let g = i[h], e = r(g);
        a[h] = e, typeof g == "object" && g !== null && n.push([g, e]);
      }
  }
  return s;
}
function we(t, r) {
  return Object.assign(t != null ? t : {}, r);
}
var dr = /:\s*[>|][\d+-]*\s*$/, cr = /,([\t ]*)$/;
function hr(t) {
  let r = !1, s = !1, n = 0, i, a = [];
  for (let h of t.split(`
`)) {
    if (i !== void 0) {
      let b = h.length - h.trimStart().length;
      if (h.trim() === "" || b > i) {
        a.push(h);
        continue;
      }
      i = void 0;
    }
    let g = -1;
    for (let b = 0; b < h.length; b++) {
      let N = h[b];
      if (s)
        N === "\\" ? b++ : N === '"' && (s = !1);
      else if (r)
        N === "'" && (r = !1);
      else if (N === '"')
        s = !0;
      else if (N === "'")
        r = !0;
      else if (N === "#" && (b === 0 || h[b - 1] === " " || h[b - 1] === "	")) {
        g = b;
        break;
      } else
        N === "[" || N === "{" ? n++ : (N === "]" || N === "}") && (n = Math.max(0, n - 1));
    }
    if (r || s || n > 0) {
      a.push(h);
      continue;
    }
    let e = g >= 0 ? h.slice(0, g) : h, C = g >= 0 ? h.slice(g) : "";
    if (dr.test(e)) {
      i = h.length - h.trimStart().length, a.push(h);
      continue;
    }
    a.push(e.replace(cr, "$1") + C);
  }
  return a.join(`
`);
}
function pr(t, r) {
  if (t === "arrow_point" && r === "normal")
    return "sequence";
  if (t === "arrow_cross" && r === "normal")
    return "failure";
  if (t === "arrow_open" && r === "dotted")
    return "reference";
}
function fr(t) {
  let r = t.trim(), s = r.slice(0, -1), n = "arrow_open";
  switch (r.slice(-1)) {
    case "x":
      n = "arrow_cross";
      break;
    case ">":
      n = "arrow_point";
      break;
    case "-":
    case ".":
      s = r;
      break;
  }
  let i = "normal", a = s.length - 1, h = 0;
  for (let g = 0; g < s.length; g++)
    s[g] === "." && h++;
  return h > 0 && (i = "dotted", a = h), { type: n, stroke: i, length: a };
}
function ut(t) {
  if (!t)
    return;
  let r = {}, s = !1;
  for (let n of Object.keys(t))
    ar.has(n) || (r[n] = t[n], s = !0);
  return s ? r : void 0;
}
var ur = class {
  constructor(t = {}) {
    z(this, "type", "agentflow");
    z(this, "direction");
    z(this, "nodes", /* @__PURE__ */ new Map());
    z(this, "edges", []);
    z(this, "subgraphs", []);
    z(this, "connectors", /* @__PURE__ */ new Map());
    z(this, "classes", /* @__PURE__ */ new Map());
    z(this, "tooltips", /* @__PURE__ */ new Map());
    z(this, "defaultEdgeStyle");
    z(this, "defaultInterpolate");
    z(this, "mappings", []);
    z(this, "diagnostics", []);
    z(this, "title");
    z(this, "accTitle");
    z(this, "accDescr");
    z(this, "lineOffset");
    z(this, "subgraphLookup", /* @__PURE__ */ new Map());
    z(this, "globalNodes", /* @__PURE__ */ new Set());
    z(this, "members", /* @__PURE__ */ new Set());
    z(this, "edgeById", /* @__PURE__ */ new Map());
    z(this, "pairCount", /* @__PURE__ */ new Map());
    z(this, "subCount", 0);
    z(this, "bareMappings", /* @__PURE__ */ new Set());
    z(this, "firstMapping", /* @__PURE__ */ new Map());
    z(this, "reported", /* @__PURE__ */ new Map());
    z(this, "options");
    var r;
    this.options = t, this.lineOffset = (r = t.lineOffset) != null ? r : 0;
  }
  metadata(t, r, s) {
    let n = r.includes(`
`), i;
    try {
      i = st(n ? r + `
` : `{
` + r + `
}`);
    } catch (a) {
      let h = n ? hr(r) : r, g;
      if (h !== r)
        try {
          g = st(h + `
`);
        } catch {
          g = void 0;
        }
      if (g === void 0) {
        let { line: e, column: C } = this.errorAt(s), b = s ? ` (${e}:${C})` : "";
        throw new ve(`Metadata of "${t}" is not valid YAML. ${a.message}${b}`, "syntax", { type: "agentflow", line: e, column: C });
      }
      i = g;
    }
    return nr(i != null ? i : {});
  }
  errorAt(t) {
    if (t === void 0)
      return { line: 0, column: 0 };
    let r = this.options.source;
    if (r === void 0)
      return { line: t.first_line + this.lineOffset, column: t.first_column + 1 };
    let s = 0;
    for (let a = 1; a < t.first_line; a++)
      s = r.indexOf(`
`, s) + 1;
    let { line: n, column: i } = Lt(r, s + t.first_column);
    return { line: n, column: i };
  }
  shapeError(t, r) {
    return new ve(t, "semantic", { type: "agentflow", ...this.errorAt(r) });
  }
  addVertex(t, r, s, n, i, a, h = {}, g, e) {
    if (!t || t.trim().length === 0)
      return;
    let C, b, N;
    g !== void 0 && (C = this.metadata(t, g, e), Ve(C) && (b = C, typeof C.shape == "string" && (N = C.shape, C.shape = Se(C.shape))));
    let $ = this.subgraphLookup.get(t);
    if ($ && C) {
      $.metadata = we($.metadata, C);
      return;
    }
    let O = this.connectors.get(t);
    if (O && C) {
      O.metadata = we(O.metadata, C);
      return;
    }
    if (t === "connectors")
      return;
    let y = this.edgeById.get(t);
    if (y) {
      (b == null ? void 0 : b.animate) !== void 0 && (y.animate = b.animate), (b == null ? void 0 : b.animation) !== void 0 && (y.animation = b.animation), (b == null ? void 0 : b.curve) !== void 0 && (y.interpolate = b.curve), C && (y.metadata = we(y.metadata, C));
      return;
    }
    let x = this.nodes.get(t);
    if (x === void 0 && (x = { id: t, labelType: "text", styles: [], classes: [] }, this.nodes.set(t, x)), r !== void 0 ? (x.labelType = r.type, x.text = ft(r.text.trim())) : x.text === void 0 && (x.text = t), s !== void 0 && (x.type = s), n != null)
      for (let G of n)
        x.styles.push(G);
    if (i != null)
      for (let G of i)
        x.classes.push(G);
    if (a !== void 0 && (x.dir = a), x.props === void 0 ? x.props = h : h !== void 0 && Object.assign(x.props, h), !!C && (x.metadata = we(x.metadata, C), b !== void 0)) {
      if (b.shape) {
        let G = N != null ? N : b.shape;
        if (typeof G != "string")
          throw this.shapeError(`No such shape: ${JSON.stringify(G)}.`, e);
        if (G !== G.toLowerCase() || G.includes("_"))
          throw this.shapeError(`No such shape: ${G}. Shape names should be lowercase.`, e);
        let ee = b.shape;
        if (!ir(ee))
          throw this.shapeError(`No such shape: ${ee}.`, e);
        x.type = ee;
      }
      b.label && (x.text = String(b.label), x.labelType = Re(b.labelType));
    }
  }
  addSingleLink(t, r, s, n) {
    var C;
    let i = { start: t, end: r, type: void 0, text: "", labelType: "text", classes: [], isUserDefinedId: !1, interpolate: this.defaultInterpolate }, a = s == null ? void 0 : s.text;
    a !== void 0 && (i.text = ft(a.text.trim()), i.labelType = Re(a.type)), s !== void 0 && (i.type = s.type, i.stroke = s.stroke, i.length = s.length > 10 ? 10 : s.length, s.edgeSemantic && (i.edgeSemantic = s.edgeSemantic));
    let h = t + "\0" + r, g = (C = this.pairCount.get(h)) != null ? C : 0;
    n && !this.edgeById.has(n) ? (i.id = n, i.isUserDefinedId = !0) : i.id = `L_${t}_${r}_${g === 0 ? 0 : g + 1}`;
    let e = this.options.maxEdges;
    if (e !== void 0 && this.edges.length >= e)
      throw new ve(`Edge limit exceeded. The limit is ${e}.`, "limit", { type: "agentflow" });
    this.edges.push(i), this.pairCount.set(h, g + 1), this.edgeById.has(i.id) || this.edgeById.set(i.id, i);
  }
  addLink(t, r, s) {
    let n = typeof (s == null ? void 0 : s.id) == "string" ? s.id.replace("@", "") : void 0, i = t[t.length - 1], a = r[0];
    for (let h of t)
      for (let g of r)
        this.addSingleLink(h, g, s, h === i && g === a ? n : void 0);
  }
  updateLinkInterpolate(t, r) {
    for (let s of t)
      s === "default" ? this.defaultInterpolate = r : this.edgeAt(s).interpolate = r;
  }
  updateLink(t, r) {
    for (let s of t) {
      if (s === "default") {
        this.defaultEdgeStyle = r;
        continue;
      }
      let n = this.edgeAt(s);
      n.style = r, r.length > 0 && !r.some((i) => i == null ? void 0 : i.startsWith("fill")) && r.push("fill:none");
    }
  }
  edgeAt(t) {
    let r = this.edges[Number(t)];
    if (r === void 0)
      throw new ve(`The index ${t} for linkStyle is out of bounds. Valid indices for linkStyle are between 0 and ${this.edges.length - 1}. (Help: Ensure that the index is within the range of existing edges.)`, "semantic", { type: "agentflow" });
    return r;
  }
  addClass(t, r) {
    let s = r.join().replace(/\\,/g, "\xA7\xA7\xA7").replace(/,/g, ";").replace(/§§§/g, ",").split(";");
    for (let n of t.split(",")) {
      let i = this.classes.get(n);
      i === void 0 && (i = { id: n, styles: [], textStyles: [] }, this.classes.set(n, i));
      for (let a of s)
        a.includes("color") && i.textStyles.push(a.replace("fill", "bgFill")), i.styles.push(a);
    }
  }
  setDirection(t) {
    let r = t.trim();
    r.includes("<") && (r = "RL"), r.includes("^") && (r = "BT"), r.includes(">") && (r = "LR"), r.includes("v") && (r = "TB"), r === "TD" && (r = "TB"), this.direction = r;
  }
  setClass(t, r) {
    var s, n, i;
    for (let a of t.split(","))
      (s = this.nodes.get(a)) == null || s.classes.push(r), (n = this.edgeById.get(a)) == null || n.classes.push(r), (i = this.subgraphLookup.get(a)) == null || i.classes.push(r);
  }
  setTooltip(t, r) {
    if (r !== void 0)
      for (let s of t.split(","))
        this.tooltips.set(s, r);
  }
  setLink(t, r, s) {
    let n = r.trim();
    for (let i of t.split(",")) {
      let a = this.nodes.get(i);
      a !== void 0 && (a.link = n ? Pt(n) : void 0, a.linkTarget = s);
    }
    this.setClass(t, "clickable");
  }
  setClickEvent(t, r, s) {
    this.setClass(t, "clickable");
  }
  setAccTitle(t) {
    this.accTitle = t.replace(/^\s+/g, "");
  }
  setAccDescription(t) {
    this.accDescr = t.replace(/\n\s+/g, `
`);
  }
  addSubGraph(t, r, s, n) {
    var O, y;
    let i = (O = t == null ? void 0 : t.text) == null ? void 0 : O.trim(), a = (s == null ? void 0 : s.text) || "";
    t !== void 0 && t === s && /\s/.test(a) && (i = void 0);
    let h = /* @__PURE__ */ new Set(), g = [], e;
    for (let x of r)
      if (typeof x == "string")
        x.trim() !== "" && !h.has(x) && (h.add(x), g.push(x));
      else if (Array.isArray(x))
        for (let G of x)
          G.trim() !== "" && !h.has(G) && (h.add(G), g.push(G));
      else
        e = x.value;
    e != null || (e = this.options.inheritDir ? (y = this.direction) != null ? y : this.options.direction : void 0), i != null || (i = "subGraph" + this.subCount), this.subCount++;
    let C = this.members, b = g.filter((x) => x !== i && !this.globalNodes.has(x) && !C.has(x));
    for (let x of b)
      C.add(x);
    let N = this.subgraphLookup.get(i);
    if (N) {
      for (let x of b)
        N.nodes.push(x);
      return a.trim() && (N.title = a.trim()), e && (N.dir = e), i;
    }
    let $ = { id: i, nodes: b, title: a.trim(), classes: [], dir: e, labelType: Re(s == null ? void 0 : s.type), type: "flow" };
    return this.subgraphs.push($), this.subgraphLookup.set(i, $), i;
  }
  addGlobal(t) {
    let r = !1, s = (n) => {
      let i = n.trim();
      i !== "" && (this.globalNodes.add(i), this.members.delete(i) && (r = !0));
    };
    for (let n of t)
      if (typeof n == "string")
        s(n);
      else if (Array.isArray(n))
        for (let i of n)
          s(i);
    if (r)
      for (let n of this.subgraphs)
        n.nodes = n.nodes.filter((i) => !this.globalNodes.has(i));
  }
  addConnector(t, r) {
    var a, h, g;
    let s = (a = t == null ? void 0 : t.text) == null ? void 0 : a.trim();
    if (!s)
      return "";
    let n = (g = (h = r == null ? void 0 : r.text) == null ? void 0 : h.trim()) != null ? g : "", i = this.connectors.get(s);
    if (i)
      n.length > 0 && (i.text = n);
    else {
      let e = { id: s, labelType: "text", styles: [], classes: [], isConnector: !0, text: n.length > 0 ? n : s };
      this.connectors.set(s, e), this.nodes.set(s, e);
    }
    return s;
  }
  destructLink(t, r) {
    let s = fr(t);
    return r && (r.includes(".") ? "dotted" : "normal") !== s.stroke ? { type: "INVALID", stroke: "INVALID" } : { ...s, edgeSemantic: pr(s.type, s.stroke) };
  }
  subgraph(t) {
    return this.subgraphLookup.get(t);
  }
  vertexKind(t) {
    if (or(t))
      return "tool";
    let r = Se(t.type);
    return r === "hexagon" || r === "hex" ? "action" : r === "lean-right" || r === "lean_right" ? "input" : r === "lin-doc" || r === "lined-document" ? "refdoc" : r === "diamond" ? "decision" : "task";
  }
  semanticModel() {
    let t = [], r = [];
    for (let [a, h] of this.nodes) {
      if (this.subgraphLookup.has(a))
        continue;
      let g = ut(h.metadata);
      if (h.isConnector) {
        let b = { id: a };
        h.text !== void 0 && h.text !== a && (b.title = h.text), g && (b.metadata = g), r.push(b);
        continue;
      }
      let e = { id: a };
      h.text !== void 0 && (e.label = h.text);
      let C = Se(h.type);
      C !== void 0 && (e.shape = C), e.vertexKind = this.vertexKind(h), g && (e.metadata = g), t.push(e);
    }
    let s = this.edges.map((a) => {
      let h = { start: a.start, end: a.end };
      return a.id !== void 0 && (h.id = a.id), a.text.length > 0 && (h.label = a.text), a.type !== void 0 && (h.type = a.type), a.stroke !== void 0 && (h.stroke = a.stroke), a.edgeSemantic !== void 0 && (h.edgeSemantic = a.edgeSemantic), a.length !== void 0 && (h.length = a.length), a.metadata && Object.keys(a.metadata).length > 0 && (h.metadata = { ...a.metadata }), h;
    }), n = this.subgraphs.map((a) => {
      let h = { id: a.id, nodes: [...a.nodes], type: a.type, title: a.title };
      a.dir !== void 0 && (h.direction = a.dir);
      let g = ut(a.metadata);
      return g && (h.metadata = g), h;
    }), i = { vertices: t, edges: s, subGraphs: n, connectors: r, diagnostics: this.diagnostics };
    return this.direction !== void 0 && (i.direction = this.direction), i;
  }
  position(t) {
    var n, i, a, h;
    let r = (n = t == null ? void 0 : t.first_line) != null ? n : 0, s = (i = t == null ? void 0 : t.first_column) != null ? i : 0;
    return { startLine: r + this.lineOffset, startColumn: s, endLine: ((a = t == null ? void 0 : t.last_line) != null ? a : r) + this.lineOffset, endColumn: (h = t == null ? void 0 : t.last_column) != null ? h : s, startIndex: 0, endIndex: 0 };
  }
  pushMapping(t, r, s) {
    let n = { id: t, type: r, position: s };
    return this.mappings.push(n), this.firstMapping.has(t) || this.firstMapping.set(t, n), n;
  }
  addVertexMapping(t, r, s, n) {
    if (!t)
      return;
    let i = this.pushMapping(t, "vertex", this.position(n));
    s == null && this.bareMappings.add(i);
  }
  extendVertexMapping(t, r) {
    if (!t || !r)
      return;
    let s = this.position(r);
    for (let n = this.mappings.length - 1; n >= 0; n--) {
      let i = this.mappings[n];
      if (i.type !== "vertex" || i.id !== t)
        continue;
      this.bareMappings.delete(i) && (i.type = "attachment");
      let a = i.position;
      (s.endLine > a.endLine || s.endLine === a.endLine && s.endColumn > a.endColumn) && (a.endLine = s.endLine, a.endColumn = s.endColumn);
      return;
    }
    this.pushMapping(t, "attachment", s);
  }
  addEdgeMapping(t, r, s, n) {
    let i = Array.isArray(r) ? r.filter((a) => typeof a == "string" && a !== "") : [];
    this.pushMapping(i.length > 0 ? i.join(">") : "edge", "edge", this.position(n));
  }
  blockMapping(t, r, s, n) {
    if (!t)
      return;
    let i = this.position(s), a = n ? this.position(n) : i;
    this.pushMapping(t, r, { startLine: i.startLine, startColumn: i.startColumn, endLine: a.endLine, endColumn: a.endColumn, startIndex: 0, endIndex: 0 });
  }
  addSubgraphMapping(t, r, s, n) {
    let i = typeof t == "string" ? t : t == null ? void 0 : t.text;
    this.blockMapping(i != null ? i : "", "subgraph", s, n);
  }
  addConnectorMapping(t, r, s, n) {
    var i, a;
    this.blockMapping((a = (i = t == null ? void 0 : t.text) == null ? void 0 : i.trim()) != null ? a : "", "connector", s, n);
  }
  emit(t, r, s, n) {
    var C, b, N;
    let i = (C = n == null ? void 0 : n.nodeId) != null ? C : n == null ? void 0 : n.edgeId, a = { id: t, severity: r, message: s };
    n != null && n.nodeId ? a.nodeId = n.nodeId : n != null && n.edgeId && (a.edgeId = n.edgeId);
    let h = i ? this.firstMapping.get(i) : void 0;
    h && (a.position = h.position);
    let g = i != null ? i : "", e = this.reported.get(g);
    if (e === void 0)
      this.reported.set(g, [a]);
    else {
      for (let $ of e)
        if ($.id === t && $.severity === r && $.message === s && $.nodeId === a.nodeId && $.edgeId === a.edgeId)
          return;
      e.push(a);
    }
    this.diagnostics.push(a), (N = (b = this.options).log) == null || N.call(b, r, `agentflow[${t}]: ${s}`);
  }
  emitWarning(t, r, s) {
    this.emit(t, "warning", r, s);
  }
  emitError(t, r, s) {
    this.emit(t, "error", r, s);
  }
}, gt = ["$end", "INVALID", "acc_title", "acc_title_value", "acc_descr", "acc_descr_value", "acc_descr_multiline_value", "SHAPE_DATA", "CALLBACKNAME", "CALLBACKARGS", "MD_STR", "STR", "STYLE", "DEFAULT", "LINKSTYLE", "INTERPOLATE", "CLASSDEF", "CLASS", "HREF", "CLICK", "GRAPH", "flow", "connector", "global", "end", "LINK_TARGET", "NODIR", "DIR", "direction_tb", "direction_bt", "direction_rl", "direction_lr", "direction_td", "LINK_ID", "NUM", "BRKT", "STYLE_SEPARATOR", "COLON", "AMP", "SEMI", "COMMA", "MULT", "LINK", "START_LINK", "EDGE_TEXT", "-)", "TEXT", "(-", "STADIUMEND", "STADIUMSTART", "SUBROUTINEEND", "SUBROUTINESTART", "VERTEX_WITH_PROPS_START", "TAGEND", "CYLINDEREND", "CYLINDERSTART", "DOUBLECIRCLEEND", "DOUBLECIRCLESTART", "TRAPEND", "INVTRAPEND", "TRAPSTART", "INVTRAPSTART", "TAGSTART", "UP", "SEP", "DOWN", "COMMENT", "NODE_STRING", "MINUS", "UNICODE_TEXT", "PIPE", "PE", "PS", "SQE", "SQS", "DIAMOND_STOP", "DIAMOND_START", "NEWLINE", "SPACE", "EOF"], wt = new Uint8Array(128);
for (let t of "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!\"#$%&'*+.`?\\_/")
  wt[t.charCodeAt(0)] = 1;
var gr = /accTitle\s*:\s*/y, br = /accDescr\s*:\s*/y, mr = /accDescr\s*\{\s*/y, yr = /call\s+/y, kr = /click\s+/y, Ar = /(?:\r?\n)*\s*\n/y, vr = /\s*(?:LR|RL|TB|BT|TD|BR)\b/y, wr = /\s*[<>^]/y, Tr = /\s*v\b/y, Cr = [/.*direction\s+TB[^\n]*/y, /.*direction\s+BT[^\n]*/y, /.*direction\s+RL[^\n]*/y, /.*direction\s+LR[^\n]*/y, /.*direction\s+TD[^\n]*/y], De = /[\n\r\u2028\u2029]/g, Sr = /\(\s*\)/y, xr = /\n\s*/g;
function Er(t) {
  let r = t.length, s = [], n = [], i = [], a = [], h = [], g = 0, e = 0, C = 1, b = 0, N = !0, $ = t.indexOf("direction"), O = t.indexOf("@"), y = -1, x = 0, G = 0, ee = -1, V = -1, K = -1, f = -1, T = -1, M = -1, E = -1, _ = (o) => {
    let p = -1;
    for (let l = e; l < o; l++) {
      let w = t.charCodeAt(l);
      w === 10 ? (C++, p = l) : w === 13 && (l + 1 < o && t.charCodeAt(l + 1) === 10 && l++, C++, p = l);
    }
    if (p < 0)
      b += o - e;
    else {
      let l = p + 1;
      for (; l < o; ) {
        let w = t.charCodeAt(l);
        if (w === 8232 || w === 8233)
          break;
        l++;
      }
      b = l - p - 1;
    }
    e = o;
  }, D = (o, p) => {
    s.push(o), n.push(t.slice(e, p)), i.push(e), a.push(C, b), _(p), a.push(C, b);
  }, k = (o, p) => {
    s.push(o), n.push(t.slice(e, p)), i.push(e), a.push(C, b), b += p - e, e = p, a.push(C, b);
  }, le = (o, p) => {
    s.push(o), n.push(t.slice(e, p)), i.push(e), a.push(C, b);
    for (let l = e; l < p; l++) {
      let w = t.charCodeAt(l);
      w === 10 || w === 13 ? (C++, b = 0) : b++;
    }
    e = p, a.push(C, b);
  }, ne = (o, p, l) => {
    s.push(o), n.push(p), i.push(e), a.push(C, b), _(l), a.push(C, b);
  }, U = (o) => {
    h.push(g), g = o;
  }, B = () => {
    h.length > 0 && (g = h.pop());
  }, Y = (o, p) => (o.lastIndex = p, o.test(t) ? o.lastIndex : -1), q = (o) => t.startsWith(o, e) && !lt(t.charCodeAt(e + o.length)), se = (o) => {
    if (o >= V && o <= K)
      return K;
    let p = o;
    for (; p < r && pe(t.charCodeAt(p)); )
      p++;
    return V = o, K = p, p;
  }, fe = (o) => {
    if (o >= f && o <= T)
      return T;
    let p = o;
    for (; p < r; ) {
      let l = t.charCodeAt(p);
      if (l !== 32 && l !== 9)
        break;
      p++;
    }
    return f = o, T = p, p;
  }, ce = (o) => {
    let p = se(o);
    if (p === E || t.charCodeAt(p) !== 45 || t.charCodeAt(p + 1) !== 45)
      return -1;
    let l = p + 2;
    for (; t.charCodeAt(l) === 45; )
      l++;
    let w = t.charCodeAt(l);
    return w === 120 || w === 62 ? se(l + 1) : (E = p, -1);
  }, ue = () => {
    let o = se(e);
    if (o === M || t.charCodeAt(o) !== 45)
      return !1;
    let p = t.charCodeAt(o + 1), l = o + 2;
    if (p === 45) {
      for (; t.charCodeAt(l) === 45; )
        l++;
      let w = t.charCodeAt(l);
      return w === 120 || w === 62 ? D(42, se(l + 1)) : (U(10), D(43, se(o + 2))), !0;
    }
    if (p === 46) {
      for (; t.charCodeAt(l) === 46; )
        l++;
      if (t.charCodeAt(l) === 45)
        return D(42, se(l + 1)), !0;
    }
    return M = o, !1;
  }, oe = (o) => {
    if (t.charCodeAt(o) !== 37 || t.charCodeAt(o + 1) !== 37 || t.charCodeAt(o + 2) === 123)
      return -1;
    let p = t.indexOf(`
`, o + 2);
    return p === -1 ? r : p;
  }, c = () => {
    t.charCodeAt(e + 1) === 96 ? (U(2), _(e + 2)) : (U(1), _(e + 1));
  }, d = (o) => {
    let p = t.charCodeAt(e + 1);
    return o === 40 ? (p === 45 ? (U(8), k(47, e + 2)) : p === 91 ? (U(7), k(49, e + 2)) : p === 40 && t.charCodeAt(e + 2) === 40 ? (U(7), k(57, e + 3)) : (U(7), k(72, e + 1)), !0) : o === 91 ? (p === 91 ? (U(7), k(51, e + 2)) : p === 40 ? (U(7), k(55, e + 2)) : p === 47 ? (U(9), k(60, e + 2)) : p === 92 ? (U(9), k(61, e + 2)) : (U(7), k(74, e + 1)), !0) : o === 124 ? (U(7), k(70, e + 1), !0) : o === 123 ? (U(7), k(76, e + 1), !0) : !1;
  }, A = () => {
    let o = e;
    for (; o < r; ) {
      let p = t.charCodeAt(o);
      if (p < 128 && wt[p] === 1)
        o++;
      else if (p === 45 && o + 1 < r) {
        let l = t.charCodeAt(o + 1);
        if (l === 62 || l === 45 || l === 46)
          break;
        o++;
      } else
        break;
    }
    return o === e ? !1 : (k(67, o), !0);
  }, v = (o) => {
    let p = o;
    for (; p < r; ) {
      let l = t.charCodeAt(p);
      if (l !== 32 && l !== 9)
        break;
      p++;
    }
    return p;
  }, I = (o) => {
    let p;
    switch (o) {
      case 97:
        if (t.startsWith("acc", e)) {
          if ((p = Y(gr, e)) >= 0)
            return U(3), D(2, p), !0;
          if ((p = Y(br, e)) >= 0)
            return U(4), D(4, p), !0;
          if ((p = Y(mr, e)) >= 0)
            return U(5), _(p), !0;
        }
        if (q("agentflow-beta"))
          return N && (N = !1, U(6)), k(20, e + 14), !0;
        break;
      case 64:
        if (t.charCodeAt(e + 1) === 123)
          return U(14), ne(7, "", e + 2), !0;
        break;
      case 99:
        if ((p = Y(yr, e)) >= 0)
          return U(12), _(p), !0;
        if (q("classDef"))
          return k(16, e + 8), !0;
        if (q("class"))
          return k(17, e + 5), !0;
        if ((p = Y(kr, e)) >= 0)
          return U(11), _(p), !0;
        if (q("connector"))
          return k(22, e + 9), !0;
        break;
      case 34:
        return c(), !0;
      case 115:
        if (q("style"))
          return k(12, e + 5), !0;
        break;
      case 100:
        if (q("default"))
          return k(13, e + 7), !0;
        break;
      case 108:
        if (q("linkStyle"))
          return k(14, e + 9), !0;
        break;
      case 105:
        if (q("interpolate"))
          return k(15, e + 11), !0;
        break;
      case 104:
        if (t.startsWith("href", e) && pe(t.charCodeAt(e + 4)))
          return D(18, e + 5), !0;
        break;
      case 102:
        if (q("flow"))
          return k(21, e + 4), !0;
        break;
      case 103:
        if (q("global"))
          return k(23, v(e + 6)), !0;
        break;
      case 101:
        if (q("end"))
          return k(24, v(e + 3)), !0;
        break;
      case 95:
        if (q("_self"))
          return k(25, e + 5), !0;
        if (q("_blank"))
          return k(25, e + 6), !0;
        if (q("_parent"))
          return k(25, e + 7), !0;
        if (q("_top"))
          return k(25, e + 4), !0;
        break;
    }
    if ($ !== -1 && e >= x && ($ < e && ($ = t.indexOf("direction", e)), $ !== -1 && (y < e && (De.lastIndex = e, y = De.test(t) ? De.lastIndex - 1 : r), $ < y))) {
      for (let l = 0; l < 5; l++)
        if ((p = Y(Cr[l], e)) >= 0)
          return D(28 + l, p), !0;
      x = y;
    }
    if (O !== -1 && o !== 34 && !pe(o)) {
      if (e >= G) {
        O < e && (O = t.indexOf("@", e));
        let l = e;
        for (; l < r; ) {
          let w = t.charCodeAt(l);
          if (w === 34 || pe(w))
            break;
          l++;
        }
        if (G = l, ee = -1, O !== -1 && O < l)
          for (let w = Math.min(l, r - 1) - 1; w >= O; w--) {
            if (t.charCodeAt(w) !== 64)
              continue;
            let R = t.charCodeAt(w + 1);
            if (R !== 123 && R !== 34) {
              ee = w;
              break;
            }
          }
      }
      if (ee > e)
        return k(33, ee + 1), !0;
    }
    if (o >= 48 && o <= 57) {
      let l = e + 1;
      for (; l < r; ) {
        let w = t.charCodeAt(l);
        if (w < 48 || w > 57)
          break;
        l++;
      }
      return k(34, l), !0;
    }
    switch (o) {
      case 35:
        return k(35, e + 1), !0;
      case 58:
        return t.charCodeAt(e + 1) === 58 && t.charCodeAt(e + 2) === 58 ? k(36, e + 3) : k(37, e + 1), !0;
      case 38:
        return k(38, e + 1), !0;
      case 59:
        return k(39, e + 1), !0;
      case 44:
        return k(40, e + 1), !0;
      case 42:
        return k(41, e + 1), !0;
      case 60:
        return k(62, e + 1), !0;
      case 45:
        return ue() || A() || k(68, e + 1), !0;
      case 40:
        return d(o);
      case 91:
        return t.charCodeAt(e + 1) === 124 ? (k(52, e + 2), !0) : d(o);
      case 124:
      case 123:
        return d(o);
      case 62:
        return U(7), k(53, e + 1), !0;
      case 94:
        return k(63, e + 1), !0;
      case 92:
        return t.charCodeAt(e + 1) === 124 ? (k(64, e + 2), !0) : A();
      case 118:
        return lt(t.charCodeAt(e + 1)) ? A() : (k(65, e + 1), !0);
      case 37:
        return (p = oe(e)) >= 0 ? (D(66, p), !0) : A();
    }
    if (pe(o)) {
      if (ue())
        return !0;
      if ((o === 32 || o === 9) && (p = oe(fe(e))) >= 0)
        return D(66, p), !0;
      for (p = e; ; ) {
        let l = t.charCodeAt(p);
        if (l === 10)
          p++;
        else if (l === 13 && t.charCodeAt(p + 1) === 10)
          p += 2;
        else
          break;
      }
      return p > e ? D(77, p) : D(78, e + 1), !0;
    }
    return o < 128 ? A() : Dt(o) ? (k(69, e + 1), !0) : !1;
  };
  e:
    for (; ; ) {
      if (e >= r) {
        let l = -1;
        switch (g) {
          case 0:
            l = 79;
            break;
          case 3:
            l = 3;
            break;
          case 4:
            l = 5;
            break;
          case 5:
            l = 6;
            break;
          case 11:
            l = 19;
            break;
          case 12:
            l = 8;
            break;
          case 13:
            l = 9;
            break;
        }
        l !== -1 && k(l, r);
        break;
      }
      let o = t.charCodeAt(e), p = !0;
      switch (g) {
        case 0:
          p = I(o);
          break;
        case 1:
          if (o === 34)
            t.charCodeAt(e + 1) === 96 ? (U(2), _(e + 2)) : (B(), _(e + 1));
          else {
            let l = t.indexOf('"', e);
            D(11, l === -1 ? r : l);
          }
          break;
        case 2:
          if (o === 96)
            t.charCodeAt(e + 1) === 34 ? (B(), _(e + 2)) : p = !1;
          else if (o === 34)
            c();
          else {
            let l = e + 1;
            for (; l < r; ) {
              let w = t.charCodeAt(l);
              if (w === 96 || w === 34)
                break;
              l++;
            }
            D(10, l);
          }
          break;
        case 3:
        case 4: {
          let l = t.indexOf(`
`, e);
          l === -1 && (l = r);
          let w = g === 3 ? 3 : 5;
          B(), D(w, l);
          break;
        }
        case 5:
          if (o === 125)
            B(), _(e + 1);
          else {
            let l = t.indexOf("}", e);
            l === -1 && (l = r), D(6, l);
          }
          break;
        case 6: {
          let l;
          o === 34 ? c() : (l = Y(Ar, e)) >= 0 ? (B(), D(26, l)) : (l = Y(vr, e)) >= 0 || (l = Y(wr, e)) >= 0 || (l = Y(Tr, e)) >= 0 ? (B(), D(27, l)) : p = d(o);
          break;
        }
        case 7: {
          let l = t.charCodeAt(e + 1);
          switch (o) {
            case 34:
              c();
              break;
            case 40:
            case 91:
            case 123:
              d(o);
              break;
            case 93:
              B(), l === 41 ? k(48, e + 2) : l === 93 ? k(50, e + 2) : k(73, e + 1);
              break;
            case 41:
              B(), l === 93 ? k(54, e + 2) : l === 41 && t.charCodeAt(e + 2) === 41 ? k(56, e + 3) : k(71, e + 1);
              break;
            case 124:
              B(), k(70, e + 1);
              break;
            case 125:
              B(), k(75, e + 1);
              break;
            case 37: {
              let w = oe(e);
              w >= 0 ? _(w) : p = !1;
              break;
            }
            default: {
              let w = e + 1;
              for (; w < r; ) {
                let R = t.charCodeAt(w);
                if (R === 91 || R === 93 || R === 40 || R === 41 || R === 123 || R === 125 || R === 124 || R === 34 || R === 37)
                  break;
                w++;
              }
              D(46, w);
            }
          }
          break;
        }
        case 8: {
          let l = t.charCodeAt(e + 1), w;
          if (o === 34)
            c();
          else if (o === 37 && (w = oe(e)) >= 0)
            _(w);
          else if ((o === 45 || o === 47 || o === 41) && l === 41)
            B(), k(45, e + 2);
          else if (o === 40 || o === 91 || o === 123)
            d(o);
          else if (o === 41 || o === 93 || o === 125)
            p = !1;
          else {
            let R = e + 1;
            for (; R < r; ) {
              let ie = t.charCodeAt(R);
              if (ie === 34 || ie === 40 || ie === 41 || ie === 91 || ie === 93 || ie === 123 || ie === 125 || (ie === 45 || ie === 47) && t.charCodeAt(R + 1) === 41 || ie === 37 && t.charCodeAt(R + 1) === 37 && t.charCodeAt(R + 2) !== 123)
                break;
              R++;
            }
            le(46, R);
          }
          break;
        }
        case 9: {
          let l = t.charCodeAt(e + 1);
          if (o === 34) {
            c();
            break;
          }
          switch (o) {
            case 40:
              l === 45 || l === 91 || l === 40 && t.charCodeAt(e + 2) === 40 ? d(o) : l === 93 ? (B(), k(58, e + 2)) : d(o);
              break;
            case 91:
            case 123:
              d(o);
              break;
            case 92:
              l === 93 ? (B(), k(58, e + 2)) : k(46, e + 1);
              break;
            case 47:
              l === 93 ? (B(), k(59, e + 2)) : k(46, e + 1);
              break;
            case 93:
            case 41:
              l === 93 ? (B(), k(58, e + 2)) : p = !1;
              break;
            case 125:
              p = !1;
              break;
            case 37: {
              let w = oe(e);
              w >= 0 ? _(w) : p = !1;
              break;
            }
            default: {
              if ((o === 63 || o === 61) && l === 93) {
                B(), k(58, e + 2);
                break;
              }
              let w = e + 1;
              for (; w < r; ) {
                let R = t.charCodeAt(w);
                if (R === 92 || R === 91 || R === 93 || R === 40 || R === 41 || R === 123 || R === 125 || R === 47 || R === 37)
                  break;
                w++;
              }
              D(46, w);
            }
          }
          break;
        }
        case 10: {
          if (o === 34) {
            c();
            break;
          }
          let l = ce(e);
          if (l >= 0) {
            B(), D(42, l);
            break;
          }
          if (o === 45 && t.charCodeAt(e + 1) === 45) {
            p = !1;
            break;
          }
          let w = e + 1;
          for (; w < r; ) {
            let R = t.charCodeAt(w);
            if (R === 34)
              break;
            if (R === 45) {
              if (t.charCodeAt(w + 1) === 45)
                break;
            } else if (pe(R) && ce(w) >= 0)
              break;
            w++;
          }
          le(44, w);
          break;
        }
        case 11:
          if (o === 34)
            c();
          else if (pe(o))
            B(), _(e + 1);
          else {
            let l = e + 1;
            for (; l < r && !pe(t.charCodeAt(l)); )
              l++;
            k(19, l);
          }
          break;
        case 12:
          if (o === 40) {
            let l = Y(Sr, e);
            B(), l >= 0 ? _(l) : (U(13), _(e + 1));
          } else {
            let l = t.indexOf("(", e);
            l === -1 && (l = r), D(8, l);
          }
          break;
        case 13:
          if (o === 41)
            B(), _(e + 1);
          else {
            let l = t.indexOf(")", e);
            l === -1 && (l = r), D(9, l);
          }
          break;
        case 14:
          if (o === 34)
            U(15), k(7, e + 1);
          else if (o === 125)
            B(), _(e + 1);
          else if (o === 94)
            p = !1;
          else {
            let l = e + 1;
            for (; l < r; ) {
              let w = t.charCodeAt(l);
              if (w === 125 || w === 94 || w === 34)
                break;
              l++;
            }
            D(7, l);
          }
          break;
        case 15:
          if (o === 34)
            B(), k(7, e + 1);
          else {
            let l = t.indexOf('"', e);
            l === -1 && (l = r), ne(7, t.slice(e, l).replace(xr, "<br/>"), l);
          }
          break;
      }
      if (!p)
        return s.push(1), n.push(""), i.push(e), a.push(C, b, C, b), { types: s, texts: n, starts: i, locs: a };
      continue e;
    }
  return s.push(0), n.push(""), i.push(r), a.push(C, b, C, b), { types: s, texts: n, starts: i, locs: a };
}
var xe = new Uint8Array(80);
for (let t of [34, 67, 65, 68, 13, 40, 37, 38, 35, 41, 69])
  xe[t] = 1;
var Ke = new Uint8Array(80);
for (let t of [34, 69, 67, 27, 65, 68, 40, 37, 38, 35, 41])
  Ke[t] = 1;
var ze = new Uint8Array(80);
for (let t of [34, 67, 78, 68, 38, 69, 37, 41, 35, 12, 14, 16, 17, 19, 20, 27, 21, 22, 23, 24, 65, 63, 43])
  ze[t] = 1;
var je = new Uint8Array(80);
for (let t of [34, 67, 37, 78, 35, 12])
  je[t] = 1;
var Ee = new Uint8Array(80);
for (let t of [77, 39, 79, 66])
  Ee[t] = 1;
var bt = "'UNICODE_TEXT', 'TEXT', 'TAGSTART'", Oe = "'COMMENT', 'SEMI', 'NEWLINE', 'EOF'", Tt = new Uint8Array(80);
for (let t of [66, 77, 78, 79])
  Tt[t] = 1;
var ye = [], mt = /}[^\S\n]*\n/g;
function Ir(t, r, s = !1) {
  let n = !s && t.includes("}") ? t.replace(mt, `}
`) : t, { types: i, texts: a, starts: h, locs: g } = Er(n), e = 0, C, b = 0, N = 0, $ = (c) => {
    let d = i[e], A = h[e];
    if (d === 79 || d === 0) {
      let I = e;
      for (; I > 0 && Tt[i[I - 1]]; )
        I--;
      A = n.slice(0, h[I]).trimEnd().length;
    }
    let v = n === t ? A : Nt([Rt(t, mt, 2)], A);
    throw d === 1 ? at("agentflow", t, v, "", !0) : at("agentflow", t, v, `Expecting ${c}, got '${gt[d]}'`);
  }, O = (c, d) => ({ first_line: g[4 * c], first_column: g[4 * c + 1], last_line: g[4 * d + 2], last_column: g[4 * d + 3] }), y = (c, d = "") => (i[e] !== c && $(`'${gt[c]}'${d ? ", " + d : ""}`), a[e++]), x = () => {
    Ee[i[e]] === 0 && $(Oe), e++;
  }, G = () => {
    xe[i[e]] === 0 && $("'NODE_STRING'");
    let c = a[e++];
    for (; xe[i[e]] === 1; )
      c += a[e++];
    return c;
  }, ee = () => {
    Ke[i[e]] === 0 && $("'NODE_STRING'");
    let c = a[e++];
    for (; Ke[i[e]] === 1; )
      c += a[e++];
    return c;
  }, V = () => {
    let c = i[e], d;
    if (c === 11)
      d = "string";
    else if (c === 10)
      d = "markdown";
    else if (c === 46 || c === 62 || c === 53 || c === 69)
      d = "text";
    else
      return $(`${bt}, 'TAGEND', 'STR', 'MD_STR'`);
    let A = a[e++];
    for (; ; ) {
      let v = i[e];
      if (v !== 46 && v !== 62 && v !== 53 && v !== 69)
        break;
      A += a[e++];
    }
    return { text: A, type: d };
  }, K = (c) => {
    y(c, bt);
  }, f = () => {
    let c = i[e], d;
    if (c === 11)
      d = "string";
    else if (c === 10)
      d = "markdown";
    else if (c === 44 || c === 69)
      d = "text";
    else
      return $("'EDGE_TEXT', 'STR', 'MD_STR'");
    let A = a[e++];
    for (; i[e] === 44 || i[e] === 69; )
      A += a[e++];
    return { text: A, type: d };
  }, T = () => {
    let c = i[e], d;
    if (c === 11)
      d = "text";
    else if (c === 10)
      d = "markdown";
    else if (ze[c] === 1)
      d = "text";
    else
      return $("'NODE_STRING', 'STR', 'MD_STR'");
    let A = a[e++];
    for (; ze[i[e]] === 1; )
      A += a[e++];
    return { text: A, type: d };
  }, M = () => {
    b = e;
    let c = a[e++];
    for (; i[e] === 7; )
      c += a[e++];
    return N = e - 1, c;
  }, E = (c, d, A, v) => {
    let I = O(A, v);
    r.addVertex(c, void 0, void 0, void 0, void 0, void 0, void 0, d, I), r.extendVertexMapping(c, I);
  }, _ = (c, d) => {
    d.data !== void 0 && r.addVertex(c, void 0, void 0, void 0, void 0, void 0, void 0, d.data, O(d.dataFrom, d.dataTo));
  }, D = () => {
    let c = e, d = G(), A, v, I;
    switch (i[e]) {
      case 74:
        e++, A = V(), K(73), v = "square";
        break;
      case 57:
        e++, A = V(), K(56), v = "doublecircle";
        break;
      case 72:
        e++, i[e] === 72 ? (e++, A = V(), K(71), y(71), v = "circle") : (A = V(), K(71), v = "round");
        break;
      case 47:
        e++, A = V(), K(45), v = "ellipse";
        break;
      case 49:
        e++, A = V(), K(48), v = "stadium";
        break;
      case 51:
        e++, A = V(), K(50), v = "subroutine";
        break;
      case 52: {
        e++;
        let o = y(67);
        y(37);
        let p = y(67);
        y(70), A = V(), K(73), v = "rect", I = { [o]: p };
        break;
      }
      case 55:
        e++, A = V(), K(54), v = "cylinder";
        break;
      case 76:
        e++, i[e] === 76 ? (e++, A = V(), K(75), y(75), v = "hexagon") : (A = V(), K(75), v = "diamond");
        break;
      case 53:
        e++, A = V(), K(73), v = "odd";
        break;
      case 60:
        e++, A = V(), i[e] === 59 ? (e++, v = "lean_right") : (K(58), v = "trapezoid");
        break;
      case 61:
        e++, A = V(), i[e] === 58 ? (e++, v = "lean_left") : (K(59), v = "inv_trapezoid");
        break;
    }
    return I !== void 0 ? r.addVertex(d, A, v, void 0, void 0, void 0, I) : v !== void 0 ? r.addVertex(d, A, v) : r.addVertex(d), r.addVertexMapping(d, A, v, O(c, e - 1)), d;
  }, k = () => {
    let c = D();
    return i[e] === 36 && (e++, r.setClass(c, G())), c;
  }, le = () => {
    let c = [k()];
    for (C = void 0; ; ) {
      let d = i[e] === 7 ? M() : void 0, A = b, v = N;
      if (i[e] !== 78)
        return C = d, c;
      do
        e++;
      while (i[e] === 78);
      if (i[e] !== 38)
        return d !== void 0 && $("'AMP'"), c;
      e++, i[e] !== 78 && $("'SPACE'");
      do
        e++;
      while (i[e] === 78);
      let I = k();
      d !== void 0 && E(c[c.length - 1], d, A, v), c.push(I);
    }
  }, ne = () => {
    let c;
    if (i[e] === 33 && (c = a[e++]), i[e] === 42) {
      let d = r.destructLink(a[e++]);
      return c !== void 0 && (d.id = c), i[e] === 70 && (e++, d.text = V(), K(70), i[e] === 78 && e++), d;
    }
    if (i[e] === 43) {
      let d = a[e++], A = f(), v = y(42, "'EDGE_TEXT'"), I = r.destructLink(v, d);
      return I.text = A, c !== void 0 && (I.id = c), I;
    }
    return $("'LINK', 'START_LINK'");
  }, U = () => {
    let c = e, d = le();
    C !== void 0 && E(d[d.length - 1], C, b, N);
    let A = d;
    for (; ; ) {
      let v = i[e];
      if (v !== 42 && v !== 43 && v !== 33)
        return A;
      let I = ne(), o = le();
      C !== void 0 && E(o[o.length - 1], C, b, N), r.addLink(d, o, I), r.addEdgeMapping(d, o, I, O(c, e - 1)), A = o.concat(A), d = o;
    }
  }, B = () => {
    je[i[e]] === 0 && $("'NODE_STRING', 'NUM', 'COLON', 'BRKT'");
    let c = a[e++];
    for (; je[i[e]] === 1; )
      c += a[e++];
    return c;
  }, Y = () => {
    let c = [B()];
    for (; i[e] === 40; )
      e++, c.push(B());
    return c;
  }, q = () => {
    e++, y(78);
    let c;
    if (i[e] === 13)
      c = [a[e++]];
    else
      for (c = [y(34, "'DEFAULT'")]; i[e] === 40; )
        e++, c.push(y(34));
    if (y(78), i[e] !== 15) {
      r.updateLink(c, Y());
      return;
    }
    e++, y(78);
    let d = ee();
    if (i[e] === 78) {
      e++;
      let A = Y();
      r.updateLinkInterpolate(c, d), r.updateLink(c, A);
    } else
      r.updateLinkInterpolate(c, d);
  }, se = (c, d) => {
    if (i[e] !== 78) {
      r.setLink(c, d);
      return;
    }
    if (e++, i[e] === 25) {
      r.setLink(c, d, a[e++]);
      return;
    }
    let A = y(11, "'LINK_TARGET'");
    i[e] === 78 ? (e++, r.setLink(c, d, y(25))) : r.setLink(c, d), r.setTooltip(c, A);
  }, fe = () => {
    let c = a[e++];
    switch (i[e]) {
      case 8: {
        let d = a[e++], A = i[e] === 9, v = A ? a[e++] : void 0, I;
        i[e] === 78 && (e++, I = y(11)), A ? r.setClickEvent(c, d, v) : r.setClickEvent(c, d), I !== void 0 && r.setTooltip(c, I);
        return;
      }
      case 18:
        e++, se(c, y(11));
        return;
      case 11:
        se(c, a[e++]);
        return;
      default: {
        let d = ee();
        if (i[e] === 78) {
          e++;
          let A = y(11);
          r.setClickEvent(c, d), r.setTooltip(c, A);
        } else
          r.setClickEvent(c, d);
      }
    }
  }, ce = (c) => {
    y(78, Oe);
    let d = T(), A = { text: "", type: "text" };
    i[e] === 74 && (e++, A = V(), K(73));
    let v = i[e] === 7 ? M() : void 0;
    return Ee[i[e]] === 0 && $(`${Oe}, 'SHAPE_DATA'`), { global: !1, at: c, id: d, title: A, data: v, dataFrom: b, dataTo: N, list: [], collect: !1 };
  }, ue = () => {
    let c = i[e];
    switch (c) {
      case 12: {
        e++, y(78);
        let d = G();
        return y(78), r.addVertex(d, void 0, void 0, Y()), x(), ye;
      }
      case 14:
        return q(), x(), ye;
      case 16: {
        e++, y(78);
        let d = G();
        return y(78), r.addClass(d, Y()), x(), ye;
      }
      case 17: {
        e++, y(78);
        let d = G();
        return y(78), r.setClass(d, G()), x(), ye;
      }
      case 19:
        return fe(), x(), ye;
      case 22: {
        let d = ce(e++), A = e++, v = r.addConnector(d.id, d.title);
        return _(v, d), r.addConnectorMapping(d.id, d.title, O(d.at, d.at), O(A, A)), v;
      }
      case 28:
      case 29:
      case 30:
      case 31:
      case 32:
        return e++, { stmt: "dir", value: $r[c - 28] };
      case 2: {
        e++;
        let d = y(3).trim();
        return r.setAccTitle(d), d;
      }
      case 4: {
        e++;
        let d = y(5).trim();
        return r.setAccDescription(d), d;
      }
      case 6: {
        let d = a[e++].trim();
        return r.setAccDescription(d), d;
      }
      default: {
        xe[c] === 0 && $(yt);
        let d = U();
        return x(), d;
      }
    }
  }, oe = () => {
    let c = [], d = [], A = !1;
    for (; ; ) {
      let v = i[e];
      if (v === 0)
        break;
      if (v === 24) {
        let I = c.pop();
        if (I === void 0)
          break;
        let o = e++;
        if (I.global) {
          r.addGlobal(d), d = I.list, A = I.collect;
          continue;
        }
        let p = r.addSubGraph(I.id, d, I.title, "flow");
        _(p, I), r.addSubgraphMapping(I.id, I.title, O(I.at, I.at), O(o, o)), d = I.list, A = I.collect, A && d.push(p);
      } else if (v === 39 || v === 77 || v === 78 || v === 79)
        A && d.push(a[e]), e++;
      else if (v === 66)
        e++;
      else if (v === 21 || v === 23) {
        let I = e++, o;
        v === 23 || Ee[i[e]] === 1 ? (o = { global: v === 23, at: I, id: void 0, title: void 0, data: void 0, dataFrom: 0, dataTo: 0, list: d, collect: A }, x()) : (o = ce(I), o.list = d, o.collect = A, e++), c.push(o), d = [], A = !0;
      } else {
        let I = ue();
        A && (!Array.isArray(I) || I.length > 0) && d.push(I);
      }
    }
    c.length > 0 && $("'end'");
  };
  for (; i[e] === 78 || i[e] === 77 || i[e] === 66; )
    e++;
  if (y(20, "'SPACE', 'NEWLINE', 'COMMENT'"), i[e] === 26)
    e++, r.setDirection("TB");
  else {
    let c = y(27, "'NODIR'"), d = i[e];
    if (d === 78) {
      do
        e++;
      while (i[e] === 78);
      d = i[e], d !== 77 && $("'NEWLINE', 'SPACE'");
    } else
      d !== 39 && d !== 77 && d !== 66 && $("'COMMENT', 'SEMI', 'NEWLINE', 'SPACE'");
    e++, r.setDirection(c);
  }
  oe(), i[e] !== 0 && $(yt);
}
var $r = ["TB", "BT", "RL", "LR", "TD"], yt = "'COMMENT', 'SEMI', 'NEWLINE', 'SPACE', 'EOF', 'flow', 'global', 'connector', 'acc_title', 'acc_descr', 'acc_descr_multiline_value', 'STYLE', 'LINKSTYLE', 'CLASSDEF', 'CLASS', 'CLICK', 'NODE_STRING'", ge = /* @__PURE__ */ new Map([["tool", 0], ["task", 1], ["decision", 2], ["input", 3], ["refdoc", 4], ["connector", 5], ["action", 6]]), Ct = ge.size, Lr = (t) => Math.max(1, t - Ct), Mr = (t, r) => {
  let s = Ct + t % Lr(r);
  return r > 0 ? s % r : s;
};
function _r(t, r, s, n) {
  var a;
  let i = s.size;
  for (let h of t) {
    if (h.isGroup || h.shape === "collapsedGroup") {
      h.colorIndex = Mr((a = s.get(h.id)) != null ? a : i++, n);
      continue;
    }
    let g = r(h.id);
    g && ge.has(g) && (h.kind = g);
  }
}
function Nr(t, r, s) {
  var ee, V, K;
  let n = [], i = [], a = t.subgraphs, h = (f) => {
    let T = [];
    for (let M of f) {
      let E = t.classes.get(M);
      E != null && E.styles && (T = [...T, ...E.styles].map((_) => _.trim())), E != null && E.textStyles && (T = [...T, ...E.textStyles].map((_) => _.trim()));
    }
    return T;
  }, g = /* @__PURE__ */ new Set(), e = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Set();
  for (let f of a) {
    if (((ee = f.metadata) == null ? void 0 : ee.view) !== "collapsed" || g.has(f.id))
      continue;
    let T = [f.id];
    for (; T.length > 0; ) {
      let M = (V = t.subgraph(T.pop())) == null ? void 0 : V.nodes;
      if (M !== void 0)
        for (let E of M)
          E === f.id || g.has(E) || (g.add(E), e.set(E, f.id), C.has(E) || T.push(E));
    }
    C.add(f.id);
  }
  let b = /* @__PURE__ */ new Map();
  for (let f of g) {
    let T = [f], M = e.get(f);
    for (; ; ) {
      let E = b.get(M), _ = E != null ? E : e.get(M);
      if (_ === void 0 || (E === void 0 && T.push(M), M = _, E !== void 0))
        break;
    }
    for (let E of T)
      b.set(E, M);
  }
  let N = /* @__PURE__ */ new Map();
  a.forEach((f, T) => N.set(f.id, T));
  let $ = /* @__PURE__ */ new Map(), O = (f, T, M) => {
    let E = N.get(f);
    if (E === void 0 || E < M)
      return !1;
    let _ = T;
    for (let D = 0; _ !== void 0 && D <= a.length; D++) {
      if (_ === f)
        return !0;
      _ = $.get(_);
    }
    return !1;
  };
  for (let f = a.length - 1; f >= 0; f--) {
    let T = a[f];
    if (!g.has(T.id))
      for (let M of T.nodes) {
        if (O(M, T.id, f)) {
          t.emitWarning("CONTAINMENT_VIOLATION", `Container "${T.id}" cannot contain "${M}" because "${M}" already contains it. The nesting that would close the loop is dropped.`, { nodeId: M });
          continue;
        }
        $.set(M, T.id);
      }
  }
  let y = /* @__PURE__ */ new Map();
  for (let f = a.length - 1; f >= 0; f--) {
    let T = a[f];
    if (g.has(T.id))
      continue;
    let M = ((K = T.metadata) == null ? void 0 : K.view) === "collapsed", E = { id: T.id, label: T.title, labelType: T.labelType, parentId: $.get(T.id), cssStyles: [], cssCompiledStyles: h(T.classes), cssClasses: T.classes.join(" "), shape: M ? "collapsedGroup" : "flowGroup", dir: T.dir, isGroup: !M, metadata: M ? { ...T.metadata, containerType: T.type } : T.metadata };
    n.push(E), y.set(T.id, E);
  }
  for (let f of t.nodes.values()) {
    if (g.has(f.id))
      continue;
    let T = y.get(f.id);
    if (T) {
      T.cssStyles = f.styles, T.cssCompiledStyles = h(f.classes), T.cssClasses = f.classes.join(" ");
      continue;
    }
    let M = Se(f.type), E = { id: f.id, label: f.text, labelType: f.labelType, parentId: $.get(f.id), cssStyles: f.styles, cssCompiledStyles: h(["default", "node", ...f.classes]), cssClasses: "default " + f.classes.join(" "), dir: f.dir, link: f.link, linkTarget: f.linkTarget, tooltip: t.tooltips.get(f.id), metadata: f.metadata, isGroup: !1, shape: M === "square" || M === void 0 ? "squareRect" : M };
    n.push(E), y.set(f.id, E);
  }
  t.edges.forEach((f, T) => {
    var k, le, ne, U;
    let M = (k = b.get(f.start)) != null ? k : f.start, E = (le = b.get(f.end)) != null ? le : f.end;
    if (M === E && f.start !== f.end)
      return;
    let _ = [...(ne = t.defaultEdgeStyle) != null ? ne : []];
    f.style && _.push(...f.style);
    let D = f.type === "arrow_open" ? "none" : f.type === "arrow_cross" || f.type === "arrow_point" ? f.type : "arrow_point";
    i.push({ id: f.id || `L_${M}_${E}_${T}`, isUserDefinedId: f.isUserDefinedId, start: M, end: E, type: (U = f.type) != null ? U : "normal", label: f.text, labelType: f.labelType, thickness: f.stroke, pattern: f.stroke, minlen: f.length, classes: "edge-thickness-normal edge-pattern-solid flowchart-link", arrowTypeStart: "none", arrowTypeEnd: D, cssCompiledStyles: h(f.classes), style: _, animate: f.animate, animation: f.animation, curve: f.interpolate || t.defaultInterpolate || s, metadata: f.metadata });
  }), sr(n, t);
  let x = /* @__PURE__ */ new Map();
  for (let f of a) {
    let T = $.get(f.id);
    if (T === void 0)
      continue;
    let M = x.get(T);
    M ? M.push(f.id) : x.set(T, [f.id]);
  }
  let G = /* @__PURE__ */ new Map();
  for (let f of a) {
    if ($.get(f.id) !== void 0)
      continue;
    let T = [f.id];
    for (; T.length > 0; ) {
      let M = T.pop();
      if (G.has(M))
        continue;
      G.set(M, G.size);
      let E = x.get(M);
      if (E)
        for (let _ = E.length - 1; _ >= 0; _--)
          T.push(E[_]);
    }
  }
  return _r(n, (f) => {
    if (t.connectors.has(f))
      return "connector";
    let T = t.nodes.get(f);
    return T ? t.vertexKind(T) : void 0;
  }, G, r), { nodes: n, edges: i };
}
var Rr = 8, Dr = 40, Or = 16, Gr = 48, ke = 20, Ge = 26, Te = 14, kt = "collapsed", Ur = { TB: 2, RL: 3, BT: 0, LR: 1 }, At = /* @__PURE__ */ new WeakMap();
function St(t, r) {
  var n;
  let s = At.get(t);
  if (s === void 0) {
    let i = (n = r.flowchart) == null ? void 0 : n.curve;
    s = Nr(t, Rr, typeof i == "string" ? i : void 0), At.set(t, s);
  }
  return s;
}
function Ce(t, r, s) {
  var i;
  let n = (i = t.agentflow) == null ? void 0 : i[r];
  return typeof n == "number" && n > 0 ? Math.min(n, 2e3) : s;
}
var Br = /[";]fill:/;
function Ue(t, r, s) {
  let n = Pe(t);
  return ` fill="${n}"${Br.test(s.shape) ? "" : ` fill-opacity="${r}"`} stroke="${n}"`;
}
function Pr(t, r, s) {
  return qt(t.direction) ? Ht(s, (n) => vt(t, r, s, n)) : vt(t, r, s, !1);
}
function vt(t, r, s, n) {
  var l, w, R, ie, Fe, We, Xe, qe, He, Ye, Je, Ze, Qe;
  let i = St(t, r), a = (l = s.fontSize) != null ? l : 16, h = Math.round(a * 0.875), g = (w = s.measurer) != null ? w : Mt(s.fontFamily, s.fontFamilyMono), e = Ce(r, "wrappingWidth", 120), C = Ce(r, "minNodeWidth", 120), b = (R = s.padding) != null ? R : 8, N = s.icons, $ = /* @__PURE__ */ new Map(), O = [], y = [];
  i.nodes.forEach((m, u) => $.set(m.id, u));
  for (let m of i.nodes) {
    let u = m.cssStyles.length > 0 ? m.cssCompiledStyles.concat(m.cssStyles) : m.cssCompiledStyles, S = ct(u), L = (S.bold ? 1 : 0) | (S.italic ? 2 : 0), Z = m.labelType === "markdown", j = (ie = S.fontSize) != null ? ie : a, W, P;
    if (m.isGroup) {
      let X = be(m.label, Z, g, j, 4e3, L);
      W = { node: m, style: S, label: X, shape: "group", w: 0, h: 0, dy: 0, loops: 0 }, P = Ie(0, 0), P.isGroup = !0, P.dir = m.dir ? nt(m.dir) : void 0, P.padX = ke, P.padTop = X.height > 0 ? X.height + 16 : ke, P.padBottom = ke, P.minW = X.width + 2 * ke - 12;
    } else if (m.shape === "collapsedGroup") {
      let X = be(m.label, Z, g, j, e, L), J = Math.max(X.width, C) + 2 * jt, te = X.height + 2 * Ft + Te;
      W = { node: m, style: S, label: X, shape: kt, w: J, h: te, dy: -Te / 2, loops: 0 }, P = Ie(J, te);
    } else {
      let X = It(m.shape), J = be(m.label, Z, g, j, e, L), te = Wt(X, X === "diam" ? J.width : Math.max(J.width, C), J.height);
      W = { node: m, style: S, label: J, shape: X, w: te.w, h: te.h, dy: te.dy, loops: 0 }, P = Ie(te.w, te.h);
    }
    P.seq = O.length, O.push(W), y.push(P);
  }
  i.nodes.forEach((m, u) => {
    var S;
    y[u].parent = m.parentId !== void 0 && (S = $.get(m.parentId)) != null ? S : -1;
  }), Gt(y, i.edges.map((m) => {
    var u, S;
    return [(u = $.get(m.start)) != null ? u : -1, (S = $.get(m.end)) != null ? S : -1];
  }));
  let x = n ? "TB" : nt(t.direction), G = (m) => {
    let u;
    for (let S = y[m].parent, L = 0; S >= 0 && u === void 0 && L < 1e4; S = y[S].parent, L++)
      u = y[S].dir;
    return u != null ? u : x;
  }, ee = (m) => {
    let u = G(m);
    return u === "LR" || u === "RL";
  }, V = new Int32Array(y.length).fill(-1);
  for (let m = 0; m < y.length; m++) {
    let u = [], S = m;
    for (; S >= 0 && V[S] < 0 && u.length <= y.length; )
      u.push(S), S = y[S].parent;
    let L = S >= 0 ? V[S] + 1 : 0;
    for (let Z = u.length - 1; Z >= 0; Z--)
      V[u[Z]] = L++;
  }
  let K = (m, u) => {
    let S = u;
    for (let L = V[u]; L > V[m]; L--)
      S = y[S].parent;
    return S === m && u !== m;
  }, f = [], T = [], M = [], E = [];
  for (let m of i.edges) {
    let u = $.get(m.start), S = $.get(m.end);
    if (u === void 0 || S === void 0)
      continue;
    let L = be(m.label, m.labelType === "markdown", g, h, e);
    if (K(u, S) || K(S, u)) {
      E.push({ edge: m, label: L, src: u, dst: S });
      continue;
    }
    u === S && (O[u].loops++, ee(u) ? y[u].h += 2 * (Ge + (L.height > 0 ? L.height + 8 : 0)) : y[u].w += 2 * (Ge + (L.width > 0 ? L.width + 12 : 0))), M.push(m), T.push(L), f.push({ src: u, dst: S, minlen: (Fe = m.minlen) != null ? Fe : 1, labelW: L.width > 0 ? L.width + 12 : 0, labelH: L.height > 0 ? L.height + 4 : 0, route: [], labelX: 0, labelY: 0 });
  }
  let _ = Ut(y, f, x, { nodeSep: Ce(r, "nodeSpacing", Dr), edgeSep: Or, rankSep: Ce(r, "rankSpacing", Gr), portSep: 20 }), D = be(t.title, !1, g, a, 4e3, 1), k = D.height > 0 ? D.height + 12 : 0, le = Math.max(_.width, D.width), ne = b + (le - _.width) / 2, U = b + k;
  Bt(y, f, ne, U);
  let B = Math.ceil(le + 2 * b), Y = Math.ceil(_.height + k + 2 * b), q = [], se = [], fe = [], ce = [], ue = E.length * y.length < 2e6;
  for (let { edge: m, src: u, dst: S } of E) {
    let L = K(S, u), Z = L ? S : u, j = L ? u : S, W = y[Z], P = y[j], X = Ur[(We = W.dir) != null ? We : G(Z)], J = L ? X : X + 2 & 3, te = (F) => {
      let Q = (F & 1) === 0, H = F === 0 || F === 3 ? -1 : 1, et = Q ? P.x : P.x + H * P.w / 2, tt = Q ? P.y + H * P.h / 2 : P.y, rt = Q ? P.x : W.x + H * W.w / 2, it = Q ? W.y + H * W.h / 2 : P.y, Ae = Q ? 0 : 1;
      return L ? [et, tt, Ae, rt, it, Ae] : [rt, it, Ae, et, tt, Ae];
    }, de = (F) => {
      for (let Q = 0; Q < y.length; Q++) {
        let H = y[Q];
        if (Q !== j && !H.isGroup && H.x + H.w / 2 > Math.min(F[0], F[3]) - 1 && H.x - H.w / 2 < Math.max(F[0], F[3]) + 1 && H.y + H.h / 2 > Math.min(F[1], F[4]) - 1 && H.y - H.h / 2 < Math.max(F[1], F[4]) + 1)
          return !0;
      }
      return !1;
    }, ae = te(J);
    if (ue && de(ae))
      for (let F of [J + 1 & 3, J + 3 & 3, J + 2 & 3]) {
        let Q = te(F);
        if (!de(Q)) {
          ae = Q;
          break;
        }
      }
    ce.push(ae), fe.push((ae[0] + ae[3]) / 2, (ae[1] + ae[4]) / 2);
    let he = ae.slice();
    $e(he, L ? 0 : 3, O[j], P), se.push(dt(he, "linear", 0, Le(m.arrowTypeEnd)));
  }
  let oe = /* @__PURE__ */ new Map(), c = !1;
  for (let m of y)
    m.isGroup && (c = !0);
  if (c) {
    for (let m of f)
      ot(oe, m.route);
    for (let m of ce)
      ot(oe, m);
  }
  let d = "", A = "";
  for (let m = 0; m < O.length; m++) {
    let u = O[m], S = y[m], L = u.node, Z = S.x, j = S.y, W = ht(L.cssClasses.replace(/^default\s?/, "")), P = Me(L.id);
    if (S.isGroup) {
      let F = Ot(S, u.label.width, oe, ke);
      d += `<g class="pele-cluster pele-flow${W}" data-id="${P}"><rect x="${re(Z - S.w / 2)}" y="${re(j - S.h / 2)}" width="${re(S.w)}" height="${re(S.h)}"${pt(Ue((Xe = L.colorIndex) != null ? Xe : ge.size, "0.06", u.style) + u.style.shape)}/>` + _e(u.label, F, j - S.h / 2 + 8 + u.label.height / 2, ` class="pele-cluster-label" fill="var(--_m)"${u.style.text}`, N) + "</g>";
      continue;
    }
    let X = u.w, J = u.h, te = "", de;
    if (u.shape === kt) {
      let F = Pe((qe = L.colorIndex) != null ? qe : ge.size), Q = J / 2 - Te - 2, H = Q + (Te + 2) / 2;
      de = `<rect x="${re(-X / 2)}" y="${re(-J / 2)}" width="${re(X)}" height="${re(J)}"${pt(Ue((He = L.colorIndex) != null ? He : ge.size, "0.06", u.style) + u.style.shape)}/><path d="M${re(-X / 2 + 10)},${re(Q)}H${re(X / 2 - 10)}" fill="none" stroke="${F}" stroke-dasharray="3 3"${u.style.line}/><path class="pele-collapsed-mark" d="${Be(-9, H)}${Be(0, H)}${Be(9, H)}" fill="${F}" stroke="none"/>`;
    } else {
      let F = (Je = ge.get((Ye = L.kind) != null ? Ye : "task")) != null ? Je : 1;
      te = ` pele-kind-${(Ze = L.kind) != null ? Ze : "task"}`, de = Xt(u.shape, X, J, Ue(F, "0.14", u.style) + u.style.shape, ` stroke="${Pe(F)}"` + u.style.line);
    }
    let ae = _e(u.label, 0, u.dy, ` class="pele-label"${u.style.text}`, N);
    if (/ internal-link(?: |$)/.test(W + " ") && L.label && s.links !== !1) {
      let F = _t(L.label), Q = Vt(F, s), H = Ne(F);
      ae = `<a class="internal-link"${Q ? ` href="${H}"${Kt(s)}` : ""} data-href="${H}">${ae}</a>`, q.push({ id: L.id, href: F, internal: !0 });
    }
    let he = de + ae;
    L.tooltip && (he = `<title>${Me(L.tooltip)}</title>` + he), L.link && (he = zt(he, L.link, L.id, q, s, L.linkTarget ? ` target="${Ne(L.linkTarget)}"` : "")), A += `<g class="pele-node pele-shape-${u.shape}${te}${W}" data-id="${P}" transform="translate(${re(Z)},${re(j)})">${he}</g>`;
  }
  let v = "", I = "", o = (m, u, S, L, Z) => {
    var te, de;
    let j = m.style.length > 0 || m.cssCompiledStyles.length > 0 ? ct(m.cssCompiledStyles.concat(m.style)) : void 0, W = m.arrowTypeEnd, P = j != null && j.stroke ? Ne(j.stroke) : "var(--_l)", X = m.thickness === "dotted" ? "reference" : W === "arrow_cross" ? "failure" : "sequence", J = ht(m.classes.replace(/edge-thickness-normal|edge-pattern-solid|flowchart-link/g, ""));
    v += `<g class="pele-edge pele-edge-${X}${J}" data-id="${Me(m.id)}"${(te = j == null ? void 0 : j.line) != null ? te : ""}><path d="${S.d}"${m.thickness === "dotted" ? ' stroke-dasharray="3 4"' : ""}/>` + Jt(W, S.ex, S.ey, S.edx, S.edy, P) + "</g>", u.width > 0 && (I += Zt(m.id, u, L, Z, (de = j == null ? void 0 : j.text) != null ? de : "", N));
  }, p = /* @__PURE__ */ new Map();
  for (let m = 0; m < f.length; m++) {
    let u = f[m], S = M[m], L = T[m], Z = S.arrowTypeEnd, j;
    if (u.src === u.dst) {
      let W = O[u.src], P = (Qe = p.get(u.src)) != null ? Qe : 0;
      p.set(u.src, P + 1), j = Yt(y[u.src], W.w, W.h, P, ee(u.src), Ge, Le(Z), u);
    } else {
      let W = u.route.slice();
      $e(W, 0, O[u.src], y[u.src]), $e(W, W.length - 3, O[u.dst], y[u.dst]), j = dt(W, S.curve, 0, Le(Z));
    }
    o(S, L, j, u.labelX, u.labelY);
  }
  return E.forEach((m, u) => o(m.edge, m.label, se[u], fe[2 * u], fe[2 * u + 1])), { svg: Qt("agentflow", B, Y, a, s, t, _e(D, B / 2, b + D.height / 2, ' class="pele-title" font-weight="var(--_tw)"') + (d ? `<g class="pele-clusters">${d}</g>` : "") + (v ? `<g class="pele-edges" fill="none" stroke="var(--_l)" stroke-linecap="round">${v}</g>` : "") + (I ? `<g class="pele-edge-labels" font-size="${h}">${I}</g>` : "") + `<g class="pele-nodes">${A}</g>`), width: B, height: Y, links: q };
}
function Be(t, r) {
  return `M${re(t - 1.75)},${re(r)}a1.75,1.75 0 1 0 3.5,0a1.75,1.75 0 1 0 -3.5,0Z`;
}
var Zr = { type: "agentflow", keepComments: !0, parse(t, r, s, n, i) {
  var g;
  let a = (g = r.flowchart) != null ? g : {}, h = new ur({ inheritDir: a.inheritDir === !0, direction: typeof r.direction == "string" ? r.direction : void 0, lineOffset: n, source: t, maxEdges: i.maxEdges });
  return s && (h.title = s), Ir(t, h), St(h, r), h;
}, render: Pr };
export {
  Zr as agentflow
};
//# sourceMappingURL=NT6C27D7-ef03b471.js.map

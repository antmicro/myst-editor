var xt = Object.defineProperty;
var mt = (e, t, r) => t in e ? xt(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var O = (e, t, r) => (mt(e, typeof t != "symbol" ? t + "" : t, r), r);
import { E as ke } from "./LM4J5P2M-41ed4480.js";
import { D as gt, _ as _t } from "./6B2VI7MB-716cdb27.js";
import { R as Mt } from "./XQLH73R6-5278eaeb.js";
import { e as Me, i as Ge, V as Je, d as bt, a as Ct } from "./lazy-950901f8.js";
import { p as Et, h as wt } from "./DKTLEL5E-e2b762b2.js";
import { a as ee, O as Ze, L as $t } from "./YTAM2TF7-f178d8af.js";
import { S as Tt, L as pe, e as j, x as T, V as se, f as Nt, m as Rt, a as vt } from "./3G3HCGVE-09704139.js";
var At = /* @__PURE__ */ new Set(["label", "type", "descr", "techn", "sprite", "tags", "link", "bgColor", "fontColor", "borderColor", "shadowing", "shape", "legendText", "legendSprite"]), St = /* @__PURE__ */ new Set(["label", "descr", "techn", "sprite", "tags", "link", "textColor", "lineColor"]);
function ye(e, t) {
  var i;
  let { key: r, value: o } = t;
  "from" in e && (r === "offsetX" || r === "offsetY") ? e[r] = parseInt(o) : ("from" in e ? St : At).has(r) ? e[r] = o : ((i = e.extra) != null ? i : e.extra = /* @__PURE__ */ new Map()).set(r, o);
}
function I(e, t, r) {
  r !== void 0 && (typeof r == "string" ? e[t] = r : ye(e, r));
}
function de(e, t, r) {
  var o;
  r === void 0 ? (o = e[t]) != null || (e[t] = "") : I(e, t, r);
}
function je(e, t) {
  e.labelAttr = void 0, typeof t == "object" ? (e.label = "", e.labelAttr = t, ye(e, t)) : e.label = t != null ? t : "";
}
var It = class {
  constructor() {
    O(this, "type", "c4");
    O(this, "c4Type");
    O(this, "title");
    O(this, "accTitle");
    O(this, "accDescr");
    O(this, "shapes", []);
    O(this, "boundaries", [{ alias: "global", label: "global", type: "global", parent: void 0 }]);
    O(this, "rels", []);
    O(this, "shapeInRow", 4);
    O(this, "boundaryInRow", 2);
    O(this, "shapeIndex", /* @__PURE__ */ new Map());
    O(this, "boundaryIndex", /* @__PURE__ */ new Map());
    O(this, "relIndex", /* @__PURE__ */ new Map());
    O(this, "current", this.boundaries[0]);
    O(this, "stack", []);
  }
  setC4Type(e) {
    this.c4Type = e;
  }
  setTitle(e) {
    this.title = e;
  }
  setAccDescription(e) {
    this.accDescr = e.replace(/\n\s+/g, `
`);
  }
  element(e, t, r, o) {
    let i = typeof r == "string" ? t.get(r) : void 0;
    return i === void 0 && (i = { alias: "", label: "", parent: void 0 }, e.push(i), typeof r == "string" ? (i.alias = r, t.set(r, i)) : (i.aliasAttr = r, ye(i, r))), je(i, o), i;
  }
  addPersonOrSystem(e, t) {
    let r = this.element(this.shapes, this.shapeIndex, t[0], t[1]);
    de(r, "descr", t[2]), this.finishShape(r, e, t, 3);
  }
  addContainer(e, t) {
    let r = this.element(this.shapes, this.shapeIndex, t[0], t[1]);
    de(r, "techn", t[2]), de(r, "descr", t[3]), this.finishShape(r, e, t, 4);
  }
  addComponent(e, t) {
    this.addContainer(e, t);
  }
  finishShape(e, t, r, o) {
    I(e, "sprite", r[o]), I(e, "tags", r[o + 1]), I(e, "link", r[o + 2]), e.kind = t, e.parent = this.current;
  }
  boundary(e, t) {
    let r = this.element(this.boundaries, this.boundaryIndex, e[0], e[1]);
    return e[2] === void 0 ? r.type = t : I(r, "type", e[2]), r;
  }
  open(e) {
    e.parent = this.current, this.stack.push(this.current), this.current = e;
  }
  addPersonOrSystemBoundary(e, t = "system") {
    let r = this.boundary(e, t);
    I(r, "tags", e[3]), I(r, "link", e[4]), this.open(r);
  }
  addContainerBoundary(e) {
    this.addPersonOrSystemBoundary(e, "container");
  }
  addDeploymentNode(e, t) {
    let r = this.boundary(t, "node");
    de(r, "descr", t[3]), I(r, "sprite", t[4]), I(r, "tags", t[5]), I(r, "link", t[6]), r.nodeType = e, this.open(r);
  }
  popBoundaryParseStack() {
    var e;
    this.current = (e = this.stack.pop()) != null ? e : this.boundaries[0];
  }
  addRel(e, t) {
    var l;
    let r = t[0], o = t[1];
    if (r === void 0 || o === void 0 || t[2] === void 0)
      return;
    let i = typeof r == "string" && typeof o == "string", a = i ? (l = this.relIndex.get(r)) == null ? void 0 : l.get(o) : void 0;
    if (a === void 0) {
      if (a = { type: e, from: "", to: "", label: "" }, this.rels.push(a), i) {
        let n = this.relIndex.get(r);
        n === void 0 && this.relIndex.set(r, n = /* @__PURE__ */ new Map()), n.set(o, a);
      }
      typeof r == "string" ? a.from = r : a.fromAttr = r, typeof o == "string" ? a.to = o : a.toAttr = o;
    }
    a.type = e, je(a, t[2]), de(a, "techn", t[3]), de(a, "descr", t[4]), I(a, "sprite", t[5]), I(a, "tags", t[6]), I(a, "link", t[7]);
  }
  getC4Shape(e) {
    var t;
    return (t = this.shapeIndex.get(e)) != null ? t : this.boundaryIndex.get(e);
  }
  updateElStyle(e, t) {
    let r = typeof t[0] == "string" ? this.getC4Shape(t[0]) : void 0;
    r !== void 0 && (I(r, "bgColor", t[1]), I(r, "fontColor", t[2]), I(r, "borderColor", t[3]), I(r, "shadowing", t[4]), I(r, "shape", t[5]), I(r, "sprite", t[6]), I(r, "techn", t[7]), I(r, "legendText", t[8]), I(r, "legendSprite", t[9]));
  }
  updateRelStyle(e, t) {
    var n;
    let r = t[0], o = t[1], i = typeof r == "string" && typeof o == "string" ? (n = this.relIndex.get(r)) == null ? void 0 : n.get(o) : void 0;
    if (i === void 0)
      return;
    I(i, "textColor", t[2]), I(i, "lineColor", t[3]);
    let a = t[4], l = t[5];
    typeof a == "string" ? i.offsetX = parseInt(a) : a !== void 0 && ye(i, a), typeof l == "string" ? i.offsetY = parseInt(l) : l !== void 0 && ye(i, l);
  }
  updateLayoutConfig(e, t) {
    let r = (a) => a === void 0 ? NaN : parseInt(typeof a == "string" ? a : a.value), o = r(t[0]), i = r(t[1]);
    o >= 1 && (this.shapeInRow = o), i >= 1 && (this.boundaryInRow = i);
  }
}, et = ["$end", "INVALID", "direction_tb", "direction_bt", "direction_rl", "direction_lr", "title", "accDescription", "acc_title", "acc_title_value", "acc_descr", "acc_descr_value", "acc_descr_multiline_value", "NEWLINE", "C4_CONTEXT", "C4_CONTAINER", "C4_COMPONENT", "C4_DYNAMIC", "C4_DEPLOYMENT", "PERSON", "PERSON_EXT", "SYSTEM", "SYSTEM_DB", "SYSTEM_QUEUE", "SYSTEM_EXT", "SYSTEM_EXT_DB", "SYSTEM_EXT_QUEUE", "CONTAINER", "CONTAINER_DB", "CONTAINER_QUEUE", "CONTAINER_EXT", "CONTAINER_EXT_DB", "CONTAINER_EXT_QUEUE", "COMPONENT", "COMPONENT_DB", "COMPONENT_QUEUE", "COMPONENT_EXT", "COMPONENT_EXT_DB", "COMPONENT_EXT_QUEUE", "ENTERPRISE_BOUNDARY", "SYSTEM_BOUNDARY", "BOUNDARY", "CONTAINER_BOUNDARY", "NODE", "NODE_L", "NODE_R", "REL", "BIREL", "REL_U", "REL_D", "REL_L", "REL_R", "REL_B", "REL_INDEX", "UPDATE_EL_STYLE", "UPDATE_REL_STYLE", "UPDATE_LAYOUT_CONFIG", "EOF_IN_STRUCT", "ATTRIBUTE_EMPTY", "STR", "STR_KEY", "STR_VALUE", "LBRACE", "RBRACE", "EOF"], kt = /* @__PURE__ */ new Map([["C4Context", 14], ["C4Container", 15], ["C4Component", 16], ["C4Dynamic", 17], ["C4Deployment", 18], ["Person", 19], ["Person_Ext", 20], ["System", 21], ["SystemDb", 22], ["SystemQueue", 23], ["System_Ext", 24], ["SystemDb_Ext", 25], ["SystemQueue_Ext", 26], ["Container", 27], ["ContainerDb", 28], ["ContainerQueue", 29], ["Container_Ext", 30], ["ContainerDb_Ext", 31], ["ContainerQueue_Ext", 32], ["Component", 33], ["ComponentDb", 34], ["ComponentQueue", 35], ["Component_Ext", 36], ["ComponentDb_Ext", 37], ["ComponentQueue_Ext", 38], ["Enterprise_Boundary", 39], ["System_Boundary", 40], ["Boundary", 41], ["Container_Boundary", 42], ["Deployment_Node", 43], ["Node", 43], ["Node_L", 44], ["Node_R", 45], ["Rel", 46], ["BiRel", 47], ["Rel_Up", 48], ["Rel_U", 48], ["Rel_Down", 49], ["Rel_D", 49], ["Rel_Left", 50], ["Rel_L", 50], ["Rel_Right", 51], ["Rel_R", 51], ["Rel_Back", 52], ["RelIndex", 53], ["UpdateElementStyle", 54], ["UpdateRelStyle", 55], ["UpdateLayoutConfig", 56]]), De = [/.*direction\s+TB[^\n]*/y, /.*direction\s+BT[^\n]*/y, /.*direction\s+RL[^\n]*/y, /.*direction\s+LR[^\n]*/y], Le = /[\n\r\u2028\u2029]/g, Oe = /title[^\S\r\n]*(?=[\r\n]|$)\s*/y;
function Dt(e) {
  let t = e.length, r = [], o = [], i = [], a = 0, l = 9, n = 0, s = !1, h = -2, p = -1, u = 0, _ = (f, m, d) => {
    r.push(f), o.push(m), i.push(d), n = d;
  }, R = (f) => {
    for (; f < t && Me(e.charCodeAt(f)); )
      f++;
    return f;
  }, $ = (f, m) => {
    let d = e.indexOf(f, m);
    return d === -1 ? t : d;
  }, c = (f, m) => {
    let d = n + f.length;
    if (!e.startsWith(f, n) || !Me(e.charCodeAt(d)))
      return !1;
    let x = ++d;
    for (; d < t; ) {
      let E = e.charCodeAt(d);
      if (E === 35 || E === 10 || E === 59)
        break;
      d++;
    }
    return d === x ? !1 : (_(m, n, d), !0);
  };
  for (; ; ) {
    if (s) {
      _(0, t, t);
      break;
    }
    n >= t && (s = !0);
    let f = e.charCodeAt(n);
    if (a === 0) {
      if (n >= t) {
        _(64, t, t);
        continue;
      }
      if (h !== -1 && n >= u && (h < n && (h = e.indexOf("direction", n)), h !== -1 && (p < n && (Le.lastIndex = n, p = Le.test(e) ? Le.lastIndex - 1 : t), h < p))) {
        let m = !1;
        for (let d = 0; d < 4 && !m; d++)
          De[d].lastIndex = n, De[d].test(e) && (_(2 + d, n, De[d].lastIndex), m = !0);
        if (m)
          continue;
        u = p;
      }
      if (f === 116) {
        if (Oe.lastIndex = n, Oe.test(e)) {
          n = Oe.lastIndex;
          continue;
        }
        if (c("title", 6))
          continue;
      }
      if (f === 97) {
        if (c("accDescription", 7))
          continue;
        let m = e.startsWith("accTitle", n);
        if (m || e.startsWith("accDescr", n)) {
          let d = R(n + 8), x = e.charCodeAt(d);
          if (x === 58) {
            _(m ? 8 : 10, n, R(d + 1)), l = m ? 9 : 11, a = 7;
            continue;
          }
          if (x === 123 && !m) {
            n = R(d + 1), a = 8;
            continue;
          }
        }
      }
      if (f === 37 && e.charCodeAt(n + 1) === 37) {
        let m = $(`
`, n + 2);
        for (; m < t && (e.charCodeAt(m) === 10 || e.charCodeAt(m) === 13); )
          m++;
        n = m;
        continue;
      }
      if (Me(f)) {
        let m = n, d = -1;
        for (; m < t; ) {
          let x = e.charCodeAt(m);
          if (!Me(x))
            break;
          x === 10 && (d = m), m++;
        }
        d !== -1 ? _(13, n, d + 1) : n = m;
        continue;
      }
      if (f === 123) {
        _(62, n, n + 1);
        continue;
      }
      if (f === 125) {
        _(63, n, n + 1);
        continue;
      }
      if (Ge(f)) {
        let m = n + 1;
        for (; m < t && Ge(e.charCodeAt(m)); )
          m++;
        let d = m - n <= 19 ? kt.get(e.slice(n, m)) : void 0;
        if (d !== void 0) {
          d > 18 && (a = 1), _(d, n, m);
          continue;
        }
      }
      _(1, n, n);
      break;
    }
    if (a === 1) {
      if (n >= t)
        _(57, t, t);
      else if (f === 40) {
        let m = n + 1;
        for (; e.charCodeAt(m) === 32; )
          m++;
        e.charCodeAt(m) === 44 ? _(58, n, m + 1) : n++, a = 2;
      } else if (f === 41)
        n++, a = 0;
      else {
        _(1, n, n);
        break;
      }
      continue;
    }
    if (a === 2) {
      if (n >= t)
        continue;
      if (f === 41)
        n++, a = 0;
      else if (f === 44)
        e.charCodeAt(n + 1) === 44 ? _(58, n, n + 2) : n++;
      else {
        let m = n;
        for (; e.charCodeAt(m) === 32; )
          m++;
        let d = e.charCodeAt(m);
        d === 34 ? e.charCodeAt(m + 1) === 34 ? _(58, n, m + 2) : (n = m + 1, a = 3) : d === 36 ? (n = m + 1, a = 4) : _(59, n, $(",", n));
      }
      continue;
    }
    if (a === 3) {
      f === 34 ? (n++, a = 2) : _(59, n, $('"', n));
      continue;
    }
    if (a === 4) {
      _(60, n, $("=", n)), a = 5;
      continue;
    }
    if (a === 5) {
      if (n >= t)
        continue;
      let m = n + 1;
      if (f === 61)
        for (; e.charCodeAt(m) === 32; )
          m++;
      if (f !== 61 || e.charCodeAt(m) !== 34) {
        _(1, n, n);
        break;
      }
      n = m + 1, a = 6;
      continue;
    }
    if (a === 6) {
      if (n >= t)
        continue;
      f === 34 ? (n++, a = 2) : _(61, n, $('"', n));
      continue;
    }
    if (a === 7) {
      _(l, n, $(`
`, n)), a = 0;
      continue;
    }
    f === 125 ? (n++, a = 0) : _(12, n, $("}", n));
  }
  return { types: r, starts: o, ends: i };
}
var Be = ["person", "external_person", "system", "system_db", "system_queue", "external_system", "external_system_db", "external_system_queue", "container", "container_db", "container_queue", "external_container", "external_container_db", "external_container_queue", "component", "component_db", "component_queue", "external_component", "external_component_db", "external_component_queue"], Lt = ["rel", "birel", "rel_u", "rel_d", "rel_l", "rel_r", "rel_b", "rel"], Ot = ["node", "nodeL", "nodeR"], Bt = "'direction_tb', 'direction_bt', 'direction_rl', 'direction_lr', 'C4_CONTEXT', 'C4_CONTAINER', 'C4_COMPONENT', 'C4_DYNAMIC', 'C4_DEPLOYMENT'", Ut = "'STR', 'STR_KEY', 'ATTRIBUTE', 'ATTRIBUTE_EMPTY'";
function Pt(e) {
  return e === 6 || e === 7 || e === 8 || e === 10 || e === 12;
}
function tt(e) {
  return e >= 19 && e <= 56;
}
function Yt(e, t) {
  let { types: r, starts: o, ends: i } = Dt(e), a = 0, l = (c) => e.slice(o[c], i[c]), n = (c) => {
    let f = r[a];
    throw f === 1 ? Je("c4", e, o[a], "", !0) : Je("c4", e, o[a], `Expecting ${c}, got '${et[f]}'`);
  }, s = (c) => {
    r[a] !== c && n(`'${et[c]}'`), a++;
  }, h = () => {
    let c = [];
    for (; ; ) {
      let f = r[a];
      if (f === 59)
        c.push(l(a++).trim());
      else if (f === 58)
        c.push(""), a++;
      else if (f === 60)
        a++, r[a] !== 61 && n("'STR_VALUE'"), c.push({ key: l(a - 1).trim(), value: l(a).trim() }), a++;
      else
        break;
    }
    return c.length === 0 && n(Ut), c;
  }, p = (c) => {
    c === 6 ? t.setTitle(l(a++).substring(6)) : c === 7 ? t.setAccDescription(l(a++).substring(15)) : c === 12 ? t.setAccDescription(l(a++).trim()) : (a++, c === 8 ? (r[a] !== 9 && n("'acc_title_value'"), t.setTitle(l(a++).trim())) : (r[a] !== 11 && n("'acc_descr_value'"), t.setAccDescription(l(a++).trim())));
  }, u = (c) => {
    a++;
    let f = h();
    if (c <= 26)
      t.addPersonOrSystem(Be[c - 19], f);
    else if (c <= 32)
      t.addContainer(Be[c - 19], f);
    else if (c <= 38)
      t.addComponent(Be[c - 19], f);
    else {
      if (c <= 45)
        return c === 39 ? f.splice(2, 0, "ENTERPRISE") : c === 40 ? f.splice(2, 0, "SYSTEM") : c === 42 && f.splice(2, 0, "CONTAINER"), c >= 43 ? t.addDeploymentNode(Ot[c - 43], f) : c === 42 ? t.addContainerBoundary(f) : t.addPersonOrSystemBoundary(f), r[a] === 62 ? (a++, s(13)) : r[a] === 13 ? (a++, s(62), r[a] === 13 && a++) : n("'NEWLINE', 'LBRACE'"), !0;
      c <= 53 ? (c === 53 && f.splice(0, 1), t.addRel(Lt[c - 46], f)) : c === 54 ? t.updateElStyle("update_el_style", f) : c === 55 ? t.updateRelStyle("update_rel_style", f) : t.updateLayoutConfig("update_layout_config", f);
    }
    return !1;
  }, _ = r[a];
  (_ < 14 || _ > 18) && n(Bt), a++, s(13);
  let R = 0, $ = 0;
  for (; ; ) {
    let c = r[a];
    if ($ === 3 || $ === 4) {
      if (c === 13) {
        a++, $ = 2;
        continue;
      }
      if ($ === 3 && tt(c)) {
        $ = 1;
        continue;
      }
    } else if (tt(c)) {
      u(c) ? (R++, $ = 1) : $ = 4;
      continue;
    } else if (Pt(c) && $ !== 1) {
      p(c), $ = 3;
      continue;
    } else
      $ !== 2 && n("'title', 'accDescription', 'acc_title', 'acc_descr', 'acc_descr_multiline_value', 'PERSON', 'REL'");
    if (R > 0)
      c !== 63 && n("'NEWLINE', 'RBRACE'"), a++, t.popBoundaryParseStack(), R--, $ = 4;
    else {
      c !== 64 && n("'NEWLINE', 'EOF'"), a++, s(0), t.setC4Type(l(0));
      return;
    }
  }
}
var fe = 28, me = 20, st = 7, Wt = 8, Qt = 30, $e = 88, Te = 160, ht = 8, ze = 26, dt = (e) => Math.min(12, Math.max(6, e / 14)), ft = (e) => Math.min(12, e / 4);
function he(e, t, r, o, i, a, l, n) {
  let s = 0, h = 1;
  if (l === 0) {
    if (i < e || i > r)
      return 1 / 0;
  } else {
    let p = (e - i) / l, u = (r - i) / l;
    s = Math.max(s, Math.min(p, u)), h = Math.min(h, Math.max(p, u));
  }
  if (n === 0) {
    if (a < t || a > o)
      return 1 / 0;
  } else {
    let p = (t - a) / n, u = (o - a) / n;
    s = Math.max(s, Math.min(p, u)), h = Math.min(h, Math.max(p, u));
  }
  return s <= h ? s : 1 / 0;
}
function ue(e, t, r, o, i, a, l, n) {
  let s = l / r, h = n / o, p = (i - e) / r, u = (a - t) / o, _ = s * s + h * h, R = 2 * (s * p + h * u), $ = p * p + u * u - 1, c = R * R - 4 * _ * $;
  if (_ === 0 || c < 0)
    return 1 / 0;
  let f = (-R - Math.sqrt(c)) / (2 * _);
  return f >= 0 && f <= 1 ? f : $ <= 0 ? 0 : 1 / 0;
}
function H(e, t, r, o, i) {
  let { x: a, y: l, w: n, h: s } = e, h = o - t, p = i - r;
  if (e.form === "person")
    return Math.min(he(a, l + ze, a + n, l + s, t, r, h, p), ue(a + n / 2, l + 14, 13, 13, t, r, h, p));
  if (e.form === "cyl") {
    let u = dt(n);
    return Math.min(he(a, l + u, a + n, l + s - u, t, r, h, p), ue(a + n / 2, l + u, n / 2, u, t, r, h, p), ue(a + n / 2, l + s - u, n / 2, u, t, r, h, p));
  }
  if (e.form === "h-cyl") {
    let u = ft(s);
    return Math.min(he(a + u, l, a + n - u, l + s, t, r, h, p), ue(a + u, l + s / 2, u, s / 2, t, r, h, p), ue(a + n - u, l + s / 2, u, s / 2, t, r, h, p));
  }
  return he(a, l, a + n, l + s, t, r, h, p);
}
function ct(e, t, r, o, i) {
  for (let a = 2; a < e.length; a += 2) {
    let l = e[a - 2], n = e[a - 1];
    if (he(t, r, o, i, l, n, e[a] - l, e[a + 1] - n) <= 1)
      return !0;
  }
  return !1;
}
function Ne(e, t) {
  return e.x <= t.x && e.y <= t.y && e.x + e.w >= t.x + t.w && e.y + e.h >= t.y + t.h;
}
function qt(e, t, r) {
  let o = e.x + e.w / 2, i = e.y + e.h / 2, a = t.x + t.w / 2, l = t.y + t.h / 2, n = Ne(e, t);
  if (n || Ne(t, e)) {
    let g = n ? e : t, N = n ? t : e, L = N.x + N.w / 2, Y = N.y + N.h / 2, z = N.x - g.x, B = g.x + g.w - N.x - N.w, V = N.y - g.y, J = g.y + g.h - N.y - N.h, q = Math.min(z, B, V, J), P = q === z ? g.x : q === B ? g.x + g.w : L, Q = q === z || q === B ? Y : q === J ? g.y + g.h : g.y, F = Math.min(H(N, P, Q, L, Y), 1), te = P + (L - P) * F, re = Q + (Y - Q) * F;
    return n ? [P, Q, te, re] : [te, re, P, Q];
  }
  let s = o, h = i, p = a, u = l, _ = Math.max(e.x, t.x), R = Math.min(e.x + e.w, t.x + t.w), $ = Math.max(e.y, t.y), c = Math.min(e.y + e.h, t.y + t.h);
  _ < R ? s = p = (_ + R) / 2 : $ < c && (h = u = ($ + c) / 2);
  let f = Math.hypot(p - s, u - h) || 1, m = -(u - h) / f * r, d = (p - s) / f * r, x = H(e, p + m, u + d, s + m, h + d), E = H(t, s + m, h + d, p + m, u + d);
  return x <= 1 && E <= 1 ? (s += m, h += d, p += m, u += d) : (s = o, h = i, p = a, u = l, x = Math.min(H(e, p, u, s, h), 1), E = Math.min(H(t, s, h, p, u), 1)), [p + (s - p) * x, u + (h - u) * x, s + (p - s) * E, h + (u - h) * E];
}
var Qe = 6, Xt = 3, rt = 12, zt = class {
  constructor() {
    O(this, "upright", []);
    O(this, "level", []);
    O(this, "frames", [[], []]);
    O(this, "taken", /* @__PURE__ */ new Map());
    O(this, "squeezed", 0);
  }
  free(e, t, r, o) {
    let i = Math.min(r, o), a = Math.max(r, o), l = (n, s) => {
      for (let h = 0; h < n.length; h += 3)
        if (Math.abs(n[h] - t) < s && n[h + 1] < a && n[h + 2] > i)
          return !0;
      return !1;
    };
    return !l(e ? this.upright : this.level, Qe) && !l(this.frames[e ? 0 : 1], Xt);
  }
  crossings(e) {
    let t = 0;
    for (let r = 2; r < e.length; r += 2) {
      let o = e[r] === e[r - 2], i = o ? e[r] : e[r + 1], a = Math.min(o ? e[r - 1] : e[r - 2], o ? e[r + 1] : e[r]), l = Math.max(o ? e[r - 1] : e[r - 2], o ? e[r + 1] : e[r]), n = o ? this.level : this.upright;
      for (let s = 0; s < n.length; s += 3)
        n[s] > a && n[s] < l && n[s + 1] < i && n[s + 2] > i && t++;
    }
    return t;
  }
  frame(e) {
    this.frames[0].push(e.x, e.y, e.y + e.h, e.x + e.w, e.y, e.y + e.h), this.frames[1].push(e.y, e.x, e.x + e.w, e.y + e.h, e.x, e.x + e.w);
  }
  take(e) {
    for (let t = 2; t < e.length; t += 2)
      e[t] === e[t - 2] ? this.upright.push(e[t], Math.min(e[t - 1], e[t + 1]), Math.max(e[t - 1], e[t + 1])) : e[t + 1] === e[t - 1] && this.level.push(e[t + 1], Math.min(e[t - 2], e[t]), Math.max(e[t - 2], e[t]));
  }
  ports(e, t, r, o, i) {
    var n;
    let a = (n = this.taken.get(e)) != null ? n : [], l = [];
    for (let s = 0; s < 9 && l.length < 4; s++) {
      let h = r + (s & 1 ? 1 : -1) * Math.ceil(s / 2) * rt;
      if (h < o || h > i)
        continue;
      let p = !0;
      for (let u = 0; u < a.length; u += 2)
        a[u] === t && Math.abs(a[u + 1] - h) < rt && (p = !1);
      p && l.push(h);
    }
    return l.length ? l : [r];
  }
  claim(e, t, r) {
    let o = this.taken.get(e);
    o ? o.push(t, r) : this.taken.set(e, [t, r]);
  }
};
function Vt(e, t, r) {
  let o = e.length, i = Math.sign(e[2] - e[0]), a = Math.sign(e[3] - e[1]), l = `M${T(e[0] + i * t)},${T(e[1] + a * t)}`;
  for (let h = 2; h < o - 2; h += 2) {
    let p = e[h], u = e[h + 1], _ = Math.sign(p - e[h - 2]), R = Math.sign(u - e[h - 1]), $ = Math.sign(e[h + 2] - p), c = Math.sign(e[h + 3] - u), f = Math.min(Wt, Math.abs(p - e[h - 2] + u - e[h - 1]) / 2, Math.abs(e[h + 2] - p + e[h + 3] - u) / 2);
    l += `${_ ? "H" + T(p - _ * f) : "V" + T(u - R * f)}Q${T(p)},${T(u)} ${T(p + $ * f)},${T(u + c * f)}`;
  }
  let n = Math.sign(e[o - 2] - e[o - 4]), s = Math.sign(e[o - 1] - e[o - 3]);
  return l + (n ? "H" + T(e[o - 2] - n * r) : "V" + T(e[o - 1] - s * r));
}
function pt(e, t, r, o) {
  for (let i of t)
    if (i !== r && i !== o && ct(e, i.x, i.y, i.x + i.w, i.y + i.h))
      return !1;
  return !0;
}
function ut(e, t, r, o, i) {
  let a = e.length;
  return { d: Vt(e, r, o), sx: e[0], sy: e[1], sdx: -Math.sign(e[2] - e[0]), sdy: -Math.sign(e[3] - e[1]), ex: e[a - 2], ey: e[a - 1], edx: Math.sign(e[a - 2] - e[a - 4]), edy: Math.sign(e[a - 1] - e[a - 3]), x0: e[t], y0: e[t + 1], x1: e[t + 2], y1: e[t + 3], nx: 0, ny: 0, lean: 0, room: Te, ...i, points: e };
}
function nt(e, t) {
  let r = [], o = (e + t) / 2, i = Math.max(st, (t - e) / 4);
  for (let a = 0; a < 9; a++) {
    let l = o + (a & 1 ? 1 : -1) * Math.ceil(a / 2) * i;
    l >= e + Qe && l <= t - Qe && r.push(l);
  }
  return r;
}
function Ft(e, t, r, o, i, a) {
  let l = e.x + e.w / 2, n = e.y + e.h / 2, s = t.x + t.w / 2, h = t.y + t.h / 2, p, u = (c, f, m) => {
    if (!pt(c, r, e, t))
      return;
    for (let x = 2; x < c.length; x += 2) {
      let E = c[x] === c[x - 2];
      if (!o.free(E, E ? c[x] : c[x + 1], E ? c[x - 1] : c[x - 2], E ? c[x + 1] : c[x]))
        return;
    }
    let d = o.crossings(c) * 1e6;
    for (let x = 2; x < c.length; x += 2)
      d += Math.abs(c[x] - c[x - 2]) + Math.abs(c[x + 1] - c[x - 1]);
    (!p || d < p.cost) && (p = { points: c, cost: d, upright: f, sides: m });
  };
  if (e.x + e.w <= t.x || t.x + t.w <= e.x) {
    let c = s > l, f = Math.sign(h - n), m = c ? [1, 0] : [0, 1], d = nt(c ? e.x + e.w : t.x + t.w, c ? t.x : e.x);
    e:
      for (let x of o.ports(e, m[0], n + f * e.h / 4, e.y + 8, e.y + e.h - 8))
        for (let E of o.ports(t, m[1], h - f * t.h / 4, t.y + 8, t.y + t.h - 8))
          for (let g of d) {
            let N = g + (l - g) * Math.min(H(e, g, x, l, x), 1), L = g + (s - g) * Math.min(H(t, g, E, s, E), 1), Y = p;
            if (u([N, x, g, x, g, E, L, E], !0, m), p !== Y)
              break e;
          }
  }
  if (e.y + e.h <= t.y || t.y + t.h <= e.y) {
    let c = h > n, f = Math.sign(s - l), m = c ? [3, 2] : [2, 3], d = nt(c ? e.y + e.h : t.y + t.h, c ? t.y : e.y);
    e:
      for (let x of o.ports(e, m[0], l + f * e.w / 4, e.x + 8, e.x + e.w - 8))
        for (let E of o.ports(t, m[1], s - f * t.w / 4, t.x + 8, t.x + t.w - 8))
          for (let g of d) {
            let N = g + (n - g) * Math.min(H(e, x, g, x, n), 1), L = g + (h - g) * Math.min(H(t, E, g, E, h), 1), Y = p;
            if (u([x, N, x, g, E, g, E, L], !1, m), p !== Y)
              break e;
          }
  }
  if (!p)
    return;
  let { points: _, upright: R, sides: $ } = p;
  return o.take(_), o.claim(e, $[0], R ? _[1] : _[0]), o.claim(t, $[1], R ? _[7] : _[6]), ut(_, 2, i, a, { room: R ? $e : Te });
}
function Kt(e, t, r, o, i, a, l) {
  if (e === t) {
    let f = Math.min(e.h / 2 - 4, 10), m = Math.hypot(fe, f), d = e.x + e.w, x = e.y + e.h / 2, E = fe / m, g = f / m;
    return { d: `M${T(d + E * a)},${T(x - f - g * a)}C${T(d + fe)},${T(x - f * 2)} ${T(d + fe)},${T(x + f * 2)} ${T(d + E * l)},${T(x + f + g * l)}`, sx: d, sy: x - f, sdx: -E, sdy: g, ex: d, ey: x + f, edx: -E, edy: -g, x0: d + fe + 4, y0: x, x1: d + fe + 4, y1: x, nx: 1, ny: 0, lean: 0, room: 64, points: [] };
  }
  let [n, s, h, p] = qt(e, t, r), u = n === h, _ = !1;
  if (o && !Ne(e, t) && !Ne(t, e))
    for (let f of o)
      f !== e && f !== t && he(f.x, f.y, f.x + f.w, f.y + f.h, n, s, h - n, p - s) <= 1 && (_ = !0);
  if (o && _ && !u && s !== p) {
    let f = Ft(e, t, o, i, a, l);
    if (f)
      return f;
    i.squeezed++;
  }
  if (o && _ && (u || s === p)) {
    let f = (X) => {
      let K = X ? -1 / 0 : 1 / 0, D = (S) => {
        let y = u ? S.x : S.y;
        K = X ? Math.max(K, y + (u ? S.w : S.h)) : Math.min(K, y);
      };
      D(e), D(t);
      for (let S of o)
        S !== e && S !== t && he(S.x, S.y, S.x + S.w, S.y + S.h, n, s, h - n, p - s) <= 1 && D(S);
      return K;
    }, m = u ? Math.min(e.y, t.y) : Math.min(e.x, t.x), d = u ? Math.max(e.y + e.h, t.y + t.h) : Math.max(e.x + e.w, t.x + t.w), x = (X, K) => {
      for (let D of o) {
        if (D === e || D === t)
          continue;
        let S = u ? D.y < d && D.y + D.h > m : D.x < d && D.x + D.w > m, y = u ? D.x : D.y, b = y + (u ? D.w : D.h);
        if (S && (X ? b > K : y < K))
          return !1;
      }
      return !0;
    }, E = e.x + e.w / 2, g = e.y + e.h / 2, N = t.x + t.w / 2, L = t.y + t.h / 2, Y = Math.sign(u ? L - g : N - E), z = (X) => {
      let K = f(X), D = X ? 1 : -1, S = u ? X ? 1 : 0 : X ? 3 : 2, y = u ? i.ports(e, S, g + Y * e.h / 4, e.y + 8, e.y + e.h - 8)[0] : i.ports(e, S, E + Y * e.w / 4, e.x + 8, e.x + e.w - 8)[0], b = u ? i.ports(t, S, L - Y * t.h / 4, t.y + 8, t.y + t.h - 8)[0] : i.ports(t, S, N - Y * t.w / 4, t.x + 8, t.x + t.w - 8)[0], M = (C) => {
        if (u) {
          let W = C + (E - C) * Math.min(H(e, C, y, E, y), 1), U = C + (N - C) * Math.min(H(t, C, b, N, b), 1);
          return [W, y, C, y, C, b, U, b];
        }
        let v = C + (g - C) * Math.min(H(e, y, C, y, g), 1), k = C + (L - C) * Math.min(H(t, b, C, b, L), 1);
        return [y, v, y, C, b, C, b, k];
      }, A = M(K + D * me);
      for (let C = 0; C <= 4; C++) {
        let v = K + D * (me + C * st), k = M(v);
        if (pt(k, o, e, t) && (A = k, i.free(u, v, y, b)))
          return { points: A, side: S, p0: y, p1: b, step: C };
      }
      return { points: A, side: S, p0: y, p1: b, step: 5 };
    }, B = u ? p > s : h < n, V = x(B, f(B)), J = x(!B, f(!B)), q = z(B), P = V === J ? z(!B) : void 0, Q = (X) => i.crossings(X.points) * 8 + X.step, F = J && !V || P && Q(P) < Q(q) ? !B : B, { points: te, side: re, p0: ce, p1: ge, step: Re } = F === B ? q : P != null ? P : z(!B), ve = F ? 1 : -1;
    return Re > 4 && i.squeezed++, i.take(te), i.claim(e, re, ce), i.claim(t, re, ge), ut(te, 2, a, l, u ? { nx: ve, lean: Qt, room: $e } : { room: Te });
  }
  let R = Math.hypot(h - n, p - s) || 1, $ = (h - n) / R, c = (p - s) / R;
  return (u || s === p) && i.take([n, s, h, p]), { d: `M${T(n + $ * a)},${T(s + c * a)}L${T(h - $ * l)},${T(p - c * l)}`, sx: n, sy: s, sdx: -$, sdy: -c, ex: h, ey: p, edx: $, edy: c, x0: n, y0: s, x1: h, y1: p, nx: r ? -c : 0, ny: r ? $ : 0, lean: 0, room: Math.abs($) > Math.abs(c) ? $e : Te, points: [n, s, h, p] };
}
var qe = 216, Ht = 64, at = 14, Gt = 12, Jt = $e + ht + 3 * ee, Zt = 88, ot = me + 8, be = 48, xe = 16, Xe = 10, Ue = /* @__PURE__ */ new Map([["person", "person"], ["box", "rect"], ["rounded", "rect"], ["component", "rect"], ["cylinder", "cyl"], ["database", "cyl"], ["db", "cyl"], ["queue", "h-cyl"], ["pipe", "h-cyl"]]);
function jt(e) {
  var o, i, a;
  let t = (a = Ue.get(((o = e.shape) != null ? o : "").toLowerCase())) != null ? a : Ue.get(((i = e.sprite) != null ? i : "").toLowerCase());
  if (t)
    return t;
  if (e.tags)
    for (let l of e.tags.split(",")) {
      let n = Ue.get(l.trim().toLowerCase());
      if (n)
        return n;
    }
  let r = e.kind;
  return r.endsWith("person") ? "person" : r.endsWith("_db") ? "cyl" : r.endsWith("_queue") ? "h-cyl" : "rect";
}
function er(e, t, r, o, i = qe) {
  let a = jt(e), l = a === "h-cyl" ? 36 : 0, n = a === "person" ? ze : a === "cyl" ? 24 : 0, s = i - 2 * at - l, h = [j("\xAB" + e.kind.replace(/_/g, " ") + "\xBB", !1, t, o - 1, s), j(e.label, !1, t, r, s, 1), j(e.techn ? `[${e.techn}]` : void 0, !1, t, o, s), j(e.descr, !1, t, o, s)], p = 0, u = h[3].height > 0 ? 4 : 0;
  for (let _ of h)
    p = Math.max(p, _.width), u += _.height;
  return { shape: e, form: a, labels: h, textH: u, x: 0, y: 0, w: Math.max(i, p + 2 * at + l), h: Math.max(Ht, u + 2 * Gt + n) };
}
function it(e, t, r, o, i) {
  let a = 0, l = 0;
  for (let n = 0; n < e.length; n += t) {
    let s = Math.min(e.length, n + t), h = 0, p = 0;
    for (let u = n; u < s; u++)
      p = Math.max(p, e[u].h);
    for (let u = n; u < s; u++) {
      let _ = e[u];
      _.x = h, _.y = l, i && (_.h = p), h += _.w + r;
    }
    a = Math.max(a, h - r), l += p + o;
  }
  return [a, e.length > 0 ? l - o : 0];
}
function tr(e, t, r, o, i, a) {
  var c, f, m;
  let l = i === void 0 ? ot : 12, n = /* @__PURE__ */ new Map();
  for (let d of e.boundaries) {
    let x = i === void 0 ? 4e3 : Math.max(80, i - 2 * xe - 2 * ot * 2), E = d.parent ? [j(d.label, !1, t, r, x, 1), j(d.type ? `[${d.type}]` : void 0, !1, t, o, x), j(d.descr, !1, t, o, x)] : [], g = 0, N = 0;
    for (let L of E)
      g += L.height, N = Math.max(N, L.width);
    n.set(d, { boundary: d, kids: [], nodes: [], labels: E, head: g > 0 ? g + Xe + 6 + me : l, headW: N, headX: xe, x: 0, y: 0, w: 0, h: 0, form: "rect" });
  }
  let s = n.get(e.boundaries[0]);
  for (let d of n.values()) {
    let x = d.boundary.parent;
    x && ((c = n.get(x)) == null || c.kids.push(d));
  }
  let h = [s], p = /* @__PURE__ */ new Map([[s.boundary, 0]]);
  for (let d = 0; d < h.length; d++)
    for (let x of h[d].kids)
      p.set(x.boundary, p.get(h[d].boundary) + 1), h.push(x);
  for (let d of e.shapes)
    if (d.parent) {
      let x = (f = p.get(d.parent)) != null ? f : 0, E = i === void 0 ? qe : Math.max(100, Math.min(qe, i - 2 * x * l - 32));
      (m = n.get(d.parent)) == null || m.nodes.push(er(d, t, r, o, E));
    }
  let u = Math.max(1, e.shapeInRow), _ = Math.max(1, e.boundaryInRow), R = /* @__PURE__ */ new Map();
  for (let d = h.length - 1; d >= 0; d--) {
    let x = h[d], E = i === void 0 ? Jt : a, g = (J, q, P) => {
      if (i === void 0)
        return q;
      let Q = 1;
      for (let F of J)
        Q = Math.max(Q, F.w);
      return Math.max(1, Math.min(q, Math.floor((i + P - 2 * l) / (Q + P))));
    }, [N, L] = it(x.nodes, g(x.nodes, u, E), E, Zt, !0), [Y, z] = it(x.kids, g(x.kids, _, be), be, be, !1), B = L > 0 && z > 0 ? be : 0, V = x === s ? 0 : l;
    R.set(x, L + B), x.w = Math.max(N, Y, x.headW + 2 * xe - 2 * V) + 2 * V, x.h = (V && x.head) + L + B + z + V;
  }
  let $ = /* @__PURE__ */ new Map();
  for (let d of h) {
    let x = d.x + (d === s ? 0 : l), E = d.y + (d === s ? 0 : d.head);
    for (let g of d.nodes)
      g.x += x, g.y += E, $.set(g.shape, g);
    for (let g of d.kids)
      g.x += x, g.y += E + R.get(d);
    d !== s && $.set(d.boundary, d);
  }
  return { order: h, boxes: $ };
}
var rr = 7, we = 36, Pe = 24, lt = 2e3, Ce = 8, nr = [0.5, 0.4, 0.6, 0.3, 0.7, 0.2, 0.8], ar = 2e6;
function Ee(e, t, r) {
  let o = [];
  return e && o.push("fill:" + e), t && o.push("stroke:" + t), r && o.push("color:" + r), vt(o);
}
function Ye(e, t, r, o, i) {
  return t ? gt(e, _t(t.includes("\xB6\xDF") ? t.replace(/\ufb02\u00b0\u00b0?/g, "#").replace(/\u00b6\u00df/g, ";") : t), r, o, i) : e;
}
function or(e, t, r) {
  return Et(r, (o) => {
    if (!o)
      return We(e, t, r, !1)[0];
    let [i, a] = We(e, t, r, !0, we);
    for (let l = we + Pe; a > 0 && l <= we + 3 * Pe; l += Pe) {
      let [n, s] = We(e, t, r, !0, l);
      s < a && ([i, a] = [n, s]);
    }
    return i;
  });
}
function We(e, t, r, o, i = we) {
  var X, K, D, S;
  let a = (X = r.fontSize) != null ? X : 16, l = Math.round(a * 0.8125), n = (K = r.measurer) != null ? K : bt(r.fontFamily, r.fontFamilyMono), s = (D = r.padding) != null ? D : 8, h = [], { order: p, boxes: u } = tr(e, n, a, l, o ? Math.max(80, ((S = r.maxWidth) != null ? S : 320) - 2 * s) : void 0, i), _ = p[0], R = 0, $ = 0, c = _.w, f = _.h, m = (y, b, M, A) => {
    R = Math.min(R, y), $ = Math.min($, b), c = Math.max(c, M), f = Math.max(f, A);
  }, d = [], x = /* @__PURE__ */ new Map();
  for (let y of e.rels) {
    let b = y.fromAttr ? void 0 : e.getC4Shape(y.from), M = y.toAttr ? void 0 : e.getC4Shape(y.to), A = b && u.get(b), C = M && u.get(M);
    if (!A || !C)
      throw new Ct(`C4 rel "${y.from}" -> "${y.to}" references an unknown shape or boundary`, "semantic", { type: "c4" });
    d.push(A, C);
    let v = x.get(A);
    v || x.set(A, v = /* @__PURE__ */ new Set()), v.add(C);
  }
  let E = [], g = [];
  for (let y of p)
    for (let b of y.nodes)
      E.push(b), g.push(b.x + Ce, b.y + Ce, b.x + b.w - Ce, b.y + b.h - Ce);
  let N = e.rels.length * (E.length + p.length + 3 * e.rels.length) <= ar, L = (y, b, M, A) => {
    let C = 0;
    for (let v = 0; v < g.length; v += 4) {
      let k = Math.min(M, g[v + 2]) - Math.max(y, g[v]);
      if (k <= 0)
        continue;
      let W = Math.min(A, g[v + 3]) - Math.max(b, g[v + 1]);
      W > 0 && (C += k * W);
    }
    return C;
  }, Y = (y) => y ? Math.max(-lt, Math.min(lt, y)) : 0, z = "", B = $t("arrow_point"), V = new zt();
  for (let y of p)
    y !== _ && V.frame(y);
  let J = e.rels.map((y, b) => {
    var Z;
    let M = d[b * 2], A = d[b * 2 + 1], C = Ee(void 0, y.lineColor, void 0), v = C.stroke ? Tt(C.stroke) : "var(--_l)", k = y.type === "birel" || y.type === "rel_b", W = y.type !== "rel_b", U = M !== A && ((Z = x.get(A)) == null ? void 0 : Z.has(M)) === !0, w = Kt(M, A, U ? rr : 0, N ? E : void 0, V, k ? B : 0, W ? B : 0);
    return m(Math.min(w.x0, w.x1), Math.min(w.y0, w.y1), Math.max(w.x0, w.x1), Math.max(w.y0, w.y1)), k && N && g.push(w.sx - ee, w.sy - ee, w.sx + ee, w.sy + ee), W && N && g.push(w.ex - ee, w.ey - ee, w.ex + ee, w.ey + ee), z += `<g class="pele-edge" data-id="${pe(y.from + "-" + y.to)}"${C.line}><path d="${w.d}"/>` + (k ? Ze("arrow_point", w.sx, w.sy, w.sdx, w.sdy, v) : "") + (W ? Ze("arrow_point", w.ex, w.ey, w.edx, w.edy, v) : "") + "</g>", w;
  });
  for (let y of p) {
    if (!N || y.headW === 0)
      continue;
    let b = y.y + Xe, M = y.y + y.head - me, A = 1 / 0;
    for (let C of [xe, (y.w - y.headW) / 2, y.w - xe - y.headW]) {
      let v = 0;
      for (let k of J)
        ct(k.points, y.x + C - 4, b, y.x + C + y.headW + 4, M) && v++;
      if (v < A && (A = v, y.headX = C), v === 0)
        break;
    }
    g.push(y.x + y.headX - 4, b, y.x + y.headX + y.headW + 4, M);
  }
  let q = "";
  e.rels.forEach((y, b) => {
    let M = J[b], A = y.from + "-" + y.to, C = Ee(void 0, void 0, y.textColor), v = (e.c4Type === "C4Dynamic" ? b + 1 + ": " : "") + y.label, k = j(v, !1, n, l, M.room), W = j(y.techn ? `[${y.techn}]` : void 0, !1, n, l, M.room, 2), U = Math.max(k.width, W.width) + ht, w = k.height + W.height;
    if (w === 0)
      return;
    let Z = Math.abs(M.nx) * (U / 2) + Math.abs(M.ny) * (w / 2) + 2, ne = M.lean ? Math.max(0, Math.min(M.lean, Z - 14)) : Z, oe = M.nx * ne + (o ? 0 : Y(y.offsetX)), G = M.ny * ne + (o ? 0 : Y(y.offsetY)), ae = 0.5;
    if (N) {
      let Ae = 1 / 0, yt = oe !== M.nx * ne || G !== M.ny * ne;
      for (let _e = 0; _e < (yt ? 2 : 1) && Ae > 0; _e++) {
        let Ve = _e ? M.nx * ne : oe, Fe = _e ? M.ny * ne : G;
        for (let Se of nr) {
          let Ke = M.x0 + (M.x1 - M.x0) * Se + Ve, He = M.y0 + (M.y1 - M.y0) * Se + Fe, Ie = L(Ke - U / 2, He - w / 2, Ke + U / 2, He + w / 2);
          if (Ie < Ae && (Ae = Ie, ae = Se, oe = Ve, G = Fe), Ie === 0)
            break;
        }
      }
    }
    let ie = M.x0 + (M.x1 - M.x0) * ae + oe, le = M.y0 + (M.y1 - M.y0) * ae + G - w / 2;
    N && g.push(ie - U / 2, le, ie + U / 2, le + w), m(ie - U / 2, le, ie + U / 2, le + w), q += `<g class="pele-edge-label" data-id="${pe(A)}">` + (y.descr ? `<title>${pe(y.descr)}</title>` : "") + `<rect x="${T(ie - U / 2)}" y="${T(le)}" width="${T(U)}" height="${T(w)}" rx="3" fill="var(--_bg)"/>` + Ye(se(k, ie, le + k.height / 2, C.text) + se(W, ie, le + k.height + W.height / 2, ` class="pele-c4-techn" fill="var(--_m)"${C.text}`), y.link, A, h, r) + "</g>";
  });
  let P = "", Q = "";
  for (let y of p) {
    if (y !== _) {
      let b = y.boundary, M = Ee(b.bgColor, b.borderColor, b.fontColor), A = y.x + y.headX, C = y.y + Xe, v = ke(y.labels[0], A, C, ` class="pele-cluster-label" font-weight="var(--_hw)"${M.text}`);
      C += y.labels[0].height, v += ke(y.labels[1], A, C, ` class="pele-c4-type" font-size="${l}" fill="var(--_m)"${M.text}`), C += y.labels[1].height, v += ke(y.labels[2], A, C, ` class="pele-c4-descr" font-size="${l}" fill="var(--_m)"${M.text}`), P += `<g class="pele-cluster pele-c4-${b.nodeType ? "node" : "boundary"}" data-id="${pe(b.alias)}"><rect x="${T(y.x)}" y="${T(y.y)}" width="${T(y.w)}" height="${T(y.h)}" fill="none" stroke="var(--_b)"${b.nodeType ? "" : ' stroke-dasharray="6 4"'}${Nt(M.shape)}/>` + Ye(v, b.link, b.alias, h, r) + "</g>";
    }
    for (let b of y.nodes) {
      let M = b.shape, A = M.kind.startsWith("external"), C = Ee(M.bgColor, M.borderColor, M.fontColor), v = ' stroke="var(--_b)"' + (A ? ' stroke-dasharray="4 3"' : ""), { w: k, h: W, form: U, labels: w } = b, Z = U === "h-cyl" ? -ft(W) / 2 : 0, ne = U === "person" ? ze / 2 : U === "cyl" ? dt(k) / 2 : 0, oe = ` fill="var(--_m)"${C.text}`, G = ne - b.textH / 2, ae = se(w[0], Z, G + w[0].height / 2, ` class="pele-c4-type" font-size="${l - 1}"${oe}`);
      G += w[0].height, ae += se(w[1], Z, G + w[1].height / 2, ` class="pele-label" font-weight="var(--_hw)"${C.text}`), G += w[1].height, ae += se(w[2], Z, G + w[2].height / 2, ` class="pele-c4-techn" font-size="${l}"${oe}`), G += w[2].height + 4, ae += se(w[3], Z, G + w[3].height / 2, ` class="pele-c4-descr" font-size="${l}"${C.text}`), Q += `<g class="pele-node pele-shape-${U} pele-c4-${M.kind}${A ? " pele-c4-external" : ""}" data-id="${pe(M.alias)}" transform="translate(${T(b.x + k / 2)},${T(b.y + W / 2)})">` + Ye(Mt(U, k, W, ` fill="var(${A ? "--_bg" : "--_s"})"${v}${C.shape}`, v + C.line) + ae, M.link, M.alias, h, r) + "</g>";
    }
  }
  let F = j(e.title, !1, n, a, o ? wt(r) : 4e3, 1), te = F.height > 0 ? F.height + 12 : 0, re = Math.max(c - R, F.width), ce = Math.ceil(re + 2 * s), ge = Math.ceil(f - $ + te + 2 * s), Re = s - R + (re - (c - R)) / 2, ve = s + te - $;
  return [{ svg: Rt("c4", ce, ge, a, r, e, se(F, ce / 2, s + F.height / 2, ' class="pele-title" font-weight="var(--_tw)"') + `<g transform="translate(${T(Re)},${T(ve)})">` + (P ? `<g class="pele-clusters">${P}</g>` : "") + (z ? `<g class="pele-edges" fill="none" stroke="var(--_l)" stroke-linecap="round">${z}</g>` : "") + (Q ? `<g class="pele-nodes">${Q}</g>` : "") + (q ? `<g class="pele-edge-labels" font-size="${l}">${q}</g>` : "") + "</g>"), width: ce, height: ge, links: h }, V.squeezed];
}
var ur = { type: "c4", parse(e, t, r) {
  let o = new It();
  return r && (o.title = r), Yt(e, o), o;
}, render: or };
export {
  ur as c4
};
//# sourceMappingURL=NOOGINLS-463b37bc.js.map

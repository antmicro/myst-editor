var sa = Object.defineProperty;
var la = (e, t, i) => t in e ? sa(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : e[t] = i;
var V = (e, t, i) => (la(e, typeof t != "symbol" ? t + "" : t, i), i);
import { q as na, a as Jt, V as Wt, d as oa, e as ge, i as ca, t as He } from "./lazy-950901f8.js";
import { T as Nt } from "./LM4J5P2M-41ed4480.js";
import { g as da } from "./ECH2OJJK-8814648a.js";
import { p as ha, h as pa } from "./DKTLEL5E-e2b762b2.js";
import { a as Ge, O as qt } from "./YTAM2TF7-f178d8af.js";
import { x as o, a as zt, f as Pt, b as Oe, L as ce, V as de, m as ua, e as ga, u as fa, S as xa } from "./3G3HCGVE-09704139.js";
var ma = "aliceblue antiquewhite aqua aquamarine azure beige bisque black blanchedalmond blue blueviolet brown burlywood cadetblue chartreuse chocolate coral cornflowerblue cornsilk crimson cyan darkblue darkcyan darkgoldenrod darkgray darkgreen darkgrey darkkhaki darkmagenta darkolivegreen darkorange darkorchid darkred darksalmon darkseagreen darkslateblue darkslategray darkslategrey darkturquoise darkviolet deeppink deepskyblue dimgray dimgrey dodgerblue firebrick floralwhite forestgreen fuchsia gainsboro ghostwhite gold goldenrod gray green greenyellow grey honeydew hotpink indianred indigo ivory khaki lavender lavenderblush lawngreen lemonchiffon lightblue lightcoral lightcyan lightgoldenrodyellow lightgray lightgreen lightgrey lightpink lightsalmon lightseagreen lightskyblue lightslategray lightslategrey lightsteelblue lightyellow lime limegreen linen magenta maroon mediumaquamarine mediumblue mediumorchid mediumpurple mediumseagreen mediumslateblue mediumspringgreen mediumturquoise mediumvioletred midnightblue mintcream mistyrose moccasin navajowhite navy oldlace olive olivedrab orange orangered orchid palegoldenrod palegreen paleturquoise palevioletred papayawhip peachpuff peru pink plum powderblue purple rebeccapurple red rosybrown royalblue saddlebrown salmon sandybrown seagreen seashell sienna silver skyblue slateblue slategray slategrey snow springgreen steelblue tan teal thistle tomato turquoise violet wheat white whitesmoke yellow yellowgreen transparent currentcolor inherit initial unset revert accentcolor accentcolortext activetext buttonborder buttonface buttontext canvas canvastext field fieldtext graytext highlight highlighttext linktext mark marktext selecteditem selecteditemtext visitedtext activeborder activecaption appworkspace background buttonhighlight buttonshadow captiontext inactiveborder inactivecaption inactivecaptiontext infobackground infotext menu menutext scrollbar threeddarkshadow threedface threedhighlight threedlightshadow threedshadow window windowframe windowtext", Fe, $a = /^[+-]?(?:\d+(?:\.\d+)?|\.\d+)(?:e[+-]?\d+)?(%|deg|grad|rad|turn)?$/i;
function Xt(e) {
  if (e.toLowerCase() === "none")
    return 4;
  let t = $a.exec(e);
  return t ? t[1] === void 0 ? 1 : t[1] === "%" ? 2 : 3 : 0;
}
function ya(e, t) {
  let i = Xt(e);
  return i === 1 || i === 2 || t && i === 4;
}
function ba(e) {
  let t = e.startsWith("hsl"), i = e.indexOf("("), l = e.slice(0, i);
  if (l !== "rgb" && l !== "rgba" && l !== "hsl" && l !== "hsla" || e.length > 120 || e.indexOf(")") !== e.length - 1)
    return !1;
  let d = e.slice(i + 1, -1).trim(), n, b, r = d.includes(",");
  if (r)
    n = d.split(",").map((p) => p.trim()), n.length === 4 && (b = n.pop());
  else {
    let p = d.split("/");
    if (p.length > 2)
      return !1;
    n = p[0].trim().split(/\s+/), p.length === 2 && (b = p[1].trim());
  }
  if (n.length !== 3 || b !== void 0 && !ya(b, !r))
    return !1;
  let v = n.map(Xt);
  if (r)
    return t ? (v[0] === 1 || v[0] === 3) && v[1] === 2 && v[2] === 2 : (v[0] === 1 || v[0] === 2) && v[1] === v[0] && v[2] === v[0];
  for (let p = 0; p < 3; p++) {
    let M = v[p];
    if (!(M === 1 || M === 4 || (t && p === 0 ? M === 3 : M === 2)))
      return !1;
  }
  return !0;
}
function wa(e) {
  return e.includes("(") ? ba(e) : (Fe != null || (Fe = new Set(ma.split(" "))), Fe.has(e.toLowerCase()));
}
var va = /^:?wrap:/, ka = /^:?nowrap:/, Ta = /^:?(?:no)?wrap:/, Aa = /^(?:rgba?|hsla?)\s*\(/, Bt = /[\r\u2028\u2029]/, _a = /^\w*/;
function Ee(e) {
  throw new Jt(e, "semantic", { type: "sequence" });
}
function Vt(e) {
  let t = e.trim(), i = va.test(t) ? !0 : ka.test(t) ? !1 : void 0;
  return { text: (i === void 0 ? t : t.replace(Ta, "")).trim(), wrap: i };
}
function Oa(e) {
  let t = Aa.exec(e);
  if (t) {
    let l = e.lastIndexOf(")");
    if (l >= t[0].length)
      return Bt.test(e.slice(t[0].length)) ? void 0 : [e.slice(0, l + 1), e.slice(l + 1)];
  }
  if (Bt.test(e))
    return;
  let i = _a.exec(e)[0];
  return [i, e.slice(i.length)];
}
function jt(e) {
  return typeof e == "string" ? [...e].map((t, i) => [String(i), t]) : e !== null && typeof e == "object" ? Object.entries(e) : [];
}
var Ma = class {
  constructor(e = {}) {
    V(this, "type", "sequence");
    V(this, "actors", /* @__PURE__ */ new Map());
    V(this, "createdActors", /* @__PURE__ */ new Map());
    V(this, "destroyedActors", /* @__PURE__ */ new Map());
    V(this, "boxes", []);
    V(this, "messages", []);
    V(this, "notes", []);
    V(this, "title");
    V(this, "accTitle");
    V(this, "accDescr");
    V(this, "prevActor");
    V(this, "currentBox");
    V(this, "lastCreated");
    V(this, "lastDestroyed");
    V(this, "wrapEnabled");
    V(this, "sequenceWrap");
    V(this, "active", /* @__PURE__ */ new Map());
    var t;
    this.wrapEnabled = e.wrap, this.sequenceWrap = (t = e.sequenceWrap) != null ? t : !1;
  }
  autoWrap() {
    var e;
    return (e = this.wrapEnabled) != null ? e : this.sequenceWrap;
  }
  setAccTitle(e) {
    this.accTitle = e.replace(/^\s+/g, "");
  }
  setAccDescription(e) {
    this.accDescr = e.replace(/\n\s+/g, `
`);
  }
  setDiagramTitle(e) {
    this.title = e;
  }
  parseMessage(e) {
    return Vt(e);
  }
  parseBoxData(e) {
    let t = Oa(e), i = t != null && t[0] ? t[0].trim() : "transparent", l = t != null && t[1] ? t[1].trim() : void 0;
    if (wa(i) || (i = "transparent", l = e.trim()), l === void 0)
      return { text: void 0, color: i, wrap: void 0 };
    let { text: d, wrap: n } = Vt(l);
    return { text: d || void 0, color: i, wrap: n };
  }
  addBox(e) {
    var t;
    this.currentBox = { name: e.text, wrap: (t = e.wrap) != null ? t : this.autoWrap(), fill: e.color, actorKeys: [] }, this.boxes.push(this.currentBox);
  }
  addActor(e, t, i, l, d) {
    var M;
    let n = this.currentBox, b;
    if (d !== void 0) {
      let E;
      try {
        E = na(d.includes(`
`) ? d + `
` : `{
` + d + `
}`);
      } catch (z) {
        throw new Jt(`Config of participant "${e}" is not valid YAML. ${z.message}`, "syntax", { type: "sequence" });
      }
      E !== null && typeof E == "object" && !Array.isArray(E) && (b = E);
    }
    let r = b && Object.prototype.hasOwnProperty.call(b, "type") ? b.type : void 0, v = b && Object.prototype.hasOwnProperty.call(b, "alias") ? b.alias : void 0;
    r != null && (l = String(r)), v && (!i || i.text === t) && (i = { text: String(v), wrap: i == null ? void 0 : i.wrap, type: l });
    let p = this.actors.get(e);
    if (!(p && (this.currentBox && p.box && this.currentBox !== p.box && Ee(`A same participant should only be defined in one Box: ${p.name} can't be in '${p.box.name}' and in '${this.currentBox.name}' at the same time.`), n = p.box ? p.box : this.currentBox, p.box = n, t === p.name && i == null))) {
      if (((i == null ? void 0 : i.text) == null || l == null) && (i = { text: t, type: l }), this.actors.set(e, { box: n, name: t, description: i.text, wrap: (M = i.wrap) != null ? M : this.autoWrap(), prevActor: this.prevActor, links: /* @__PURE__ */ new Map(), properties: /* @__PURE__ */ new Map(), type: l != null ? l : "participant" }), this.prevActor) {
        let E = this.actors.get(this.prevActor);
        E && (E.nextActor = e);
      }
      this.currentBox && this.currentBox.actorKeys.push(e), this.prevActor = e;
    }
  }
  addMessage(e, t, i, l) {
    var d;
    this.messages.push({ id: String(this.messages.length), from: e, to: t, message: i.text, wrap: (d = i.wrap) != null ? d : this.autoWrap(), answer: l });
  }
  addSignal(e, t, i, l, d = !1, n) {
    var b, r, v, p;
    if (l === 18) {
      let M = e && (b = this.active.get(e)) != null ? b : 0;
      M < 1 && Ee(`Trying to inactivate an inactive participant (${e})`), this.active.set(e, M - 1);
    } else
      l === 17 && e && this.active.set(e, ((r = this.active.get(e)) != null ? r : 0) + 1);
    return this.messages.push({ id: String(this.messages.length), from: e, to: t, message: (v = i == null ? void 0 : i.text) != null ? v : "", wrap: (p = i == null ? void 0 : i.wrap) != null ? p : this.autoWrap(), type: l, activate: d, centralConnection: n != null ? n : 0 }), !0;
  }
  addNote(e, t, i) {
    var b;
    let l = (b = i.wrap) != null ? b : this.autoWrap(), d = { actor: e, placement: t, message: i.text, wrap: l }, n = typeof e == "string" ? [e, e] : e;
    this.notes.push(d), this.messages.push({ id: String(this.messages.length), from: n[0], to: n[1], message: i.text, wrap: l, type: 2, placement: t });
  }
  addLinks(e, t) {
    let i = this.actors.get(e);
    if (i)
      try {
        let l = JSON.parse(t.text);
        for (let [d, n] of jt(l))
          i.links.set(d, n);
      } catch {
        return;
      }
  }
  addALink(e, t) {
    let i = this.actors.get(e);
    if (!i)
      return;
    let l = t.text.indexOf("@");
    i.links.set(t.text.slice(0, l - 1).trim(), t.text.slice(l + 1).trim());
  }
  addProperties(e, t) {
    let i = this.actors.get(e);
    if (i)
      try {
        let l = JSON.parse(t.text);
        for (let [d, n] of jt(l))
          i.properties.set(d, n);
      } catch {
        return;
      }
  }
  addDetails(e, t) {
    let i = this.actors.get(e);
    i && (i.details = t.text);
  }
  apply(e) {
    let t = [], i = [], l = e;
    for (; ; ) {
      l !== void 0 && (Array.isArray(l) ? (t.push(l), i.push(0)) : typeof l != "string" && this.applyOne(l));
      let d = t.length - 1;
      if (d < 0)
        return;
      let n = t[d];
      i[d] < n.length ? l = n[i[d]++] : (t.pop(), i.pop(), l = void 0);
    }
  }
  applyOne(e) {
    let t = e.actor;
    switch (e.type) {
      case "sequenceIndex":
        this.messages.push({ id: String(this.messages.length), from: void 0, to: void 0, message: { start: e.sequenceIndex, step: e.sequenceIndexStep, visible: e.sequenceVisible === !0 }, wrap: !1, type: e.signalType });
        break;
      case "addParticipant":
        this.addActor(t, t, e.description, e.draw, e.config);
        break;
      case "createParticipant":
        this.actors.has(t) && Ee("It is not possible to have actors with the same id, even if one is destroyed before the next is created. Use 'AS' aliases to simulate the behavior"), this.lastCreated = t, this.addActor(t, t, e.description, e.draw, e.config), this.createdActors.set(t, this.messages.length);
        break;
      case "destroyParticipant":
        this.lastDestroyed = t, this.destroyedActors.set(t, this.messages.length);
        break;
      case "activeStart":
      case "activeEnd":
      case "centralConnection":
      case "centralConnectionReverse":
        this.addSignal(t, void 0, void 0, e.signalType);
        break;
      case "addNote":
        this.addNote(e.actor, e.placement, e.text);
        break;
      case "addLinks":
        this.addLinks(t, e.text);
        break;
      case "addALink":
        this.addALink(t, e.text);
        break;
      case "addProperties":
        this.addProperties(t, e.text);
        break;
      case "addDetails":
        this.addDetails(t, e.text);
        break;
      case "addMessage":
        this.lastCreated ? (e.to !== this.lastCreated && Ee(`The created participant ${this.lastCreated} does not have an associated creating message after its declaration. Please check the sequence diagram.`), this.lastCreated = void 0) : this.lastDestroyed && (e.to !== this.lastDestroyed && e.from !== this.lastDestroyed && Ee(`The destroyed participant ${this.lastDestroyed} does not have an associated destroying message after its declaration. Please check the sequence diagram.`), this.lastDestroyed = void 0), this.addSignal(e.from, e.to, e.msg, e.signalType, e.activate, e.centralConnection);
        break;
      case "boxStart":
        this.addBox(e.boxData);
        break;
      case "boxEnd":
        this.currentBox = void 0;
        break;
      case "loopStart":
        this.addSignal(void 0, void 0, e.loopText, e.signalType);
        break;
      case "rectStart":
        this.addSignal(void 0, void 0, e.color, e.signalType);
        break;
      case "optStart":
        this.addSignal(void 0, void 0, e.optText, e.signalType);
        break;
      case "altStart":
      case "else":
        this.addSignal(void 0, void 0, e.altText, e.signalType);
        break;
      case "parStart":
      case "and":
        this.addSignal(void 0, void 0, e.parText, e.signalType);
        break;
      case "criticalStart":
        this.addSignal(void 0, void 0, e.criticalText, e.signalType);
        break;
      case "option":
        this.addSignal(void 0, void 0, e.optionText, e.signalType);
        break;
      case "breakStart":
        this.addSignal(void 0, void 0, e.breakText, e.signalType);
        break;
      case "loopEnd":
      case "rectEnd":
      case "optEnd":
      case "altEnd":
      case "parEnd":
      case "criticalEnd":
      case "breakEnd":
        this.addSignal(void 0, void 0, void 0, e.signalType);
        break;
    }
  }
}, Kt = ["$end", "INVALID", "INVALID", "NEWLINE", "SD", "create", "box", "restOfLine", "end", "autonumber", "NUM", "off", "activate", "deactivate", "title", "legacy_title", "acc_title", "acc_title_value", "acc_descr", "acc_descr_value", "acc_descr_multiline_value", "loop", "rect", "opt", "alt", "par", "par_over", "critical", "break", "option", "and", "else", "participant", "AS", "participant_actor", "destroy", "note", "over", "links", "link", "properties", "details", ",", "left_of", "right_of", "+", "-", "()", "ACTOR", "CONFIG_START", "CONFIG_CONTENT", "CONFIG_END", "TXT", "SOLID_OPEN_ARROW", "DOTTED_OPEN_ARROW", "SOLID_ARROW", "BIDIRECTIONAL_SOLID_ARROW", "DOTTED_ARROW", "BIDIRECTIONAL_DOTTED_ARROW", "SOLID_CROSS", "DOTTED_CROSS", "SOLID_POINT", "DOTTED_POINT", "SOLID_ARROW_TOP", "SOLID_ARROW_BOTTOM", "STICK_ARROW_TOP", "STICK_ARROW_BOTTOM", "SOLID_ARROW_TOP_DOTTED", "SOLID_ARROW_BOTTOM_DOTTED", "STICK_ARROW_TOP_DOTTED", "STICK_ARROW_BOTTOM_DOTTED", "SOLID_ARROW_TOP_REVERSE", "SOLID_ARROW_BOTTOM_REVERSE", "STICK_ARROW_TOP_REVERSE", "STICK_ARROW_BOTTOM_REVERSE", "SOLID_ARROW_TOP_REVERSE_DOTTED", "SOLID_ARROW_BOTTOM_REVERSE_DOTTED", "STICK_ARROW_TOP_REVERSE_DOTTED", "STICK_ARROW_BOTTOM_REVERSE_DOTTED"], Qt = new Uint8Array(128);
for (let e = 0; e < 128; e++) {
  let t = String.fromCharCode(e), i = e === 32 || e >= 9 && e <= 13, l = 0;
  `/\\+()<->:
,;`.includes(t) || (l |= 1), `+<->:
,;`.includes(t) || (l |= 2), `<>:
,;@`.includes(t) || (l |= 8 | (i ? 0 : 4)), `#
;`.includes(t) || (l |= 16), !`/\\+()<>:
,;-`.includes(t) && !i && (l |= 32), Qt[e] = l;
}
function Sa(e) {
  let t = e.length, i = [], l = [], d = [], n = [], b = 0, r = 0, v = -1, p = (s, f, y) => {
    i.push(s), l.push(e.slice(f, y)), d.push(f), r = y;
  }, M = (s, f, y, _) => {
    i.push(s), l.push(_), d.push(f), r = y;
  }, E = (s) => {
    n.push(b), b = s;
  }, z = () => {
    n.length > 0 && (b = n.pop());
  }, B = (s) => (v < s && (v = e.indexOf(`
`, s), v === -1 && (v = t)), v), Q = (s, f) => {
    let y = e.charCodeAt(s);
    return y < 128 ? (Qt[y] & f) !== 0 : f === 4 || f === 32 ? !ge(y) : !0;
  }, ee = (s, f) => {
    for (let y = 0; y < f.length; y++) {
      let _ = f.charCodeAt(y), C = e.charCodeAt(s + y);
      if (_ >= 97 && _ <= 122 ? (C | 32) !== _ : C !== _)
        return !1;
    }
    return !0;
  }, re = (s) => ee(r, s) && !ca(e.charCodeAt(r + s.length)), J = (s) => {
    for (; s < t && ge(e.charCodeAt(s)); )
      s++;
    return s;
  }, L = () => {
    let s = r;
    for (; s < t; ) {
      let f = e.charCodeAt(s);
      if (f === 10 || !ge(f))
        break;
      s++;
    }
    return s === r ? !1 : (r = s, !0);
  }, K = (s) => {
    for (; s < t && Q(s, 16); )
      s++;
    return s;
  }, w = (s, f, y) => {
    p(s, r, r + f), E(y);
  }, x = (s, f, y = -1) => re(s) ? (p(f, r, r + s.length), y >= 0 && E(y), !0) : !1, $ = (s, f) => {
    if (!ee(r, s))
      return !1;
    let y = r + s.length, _ = e.charCodeAt(y);
    if (_ !== 32 && _ !== 9)
      return !1;
    for (; _ === 32 || _ === 9; )
      _ = e.charCodeAt(++y);
    return y >= t || !Q(y, 32) ? !1 : (p(f, r, r + s.length), !0);
  }, W = (s) => {
    let f = e.charCodeAt(s), y = e.charCodeAt(s + 1);
    if (f === 45) {
      if (y === 120 || y === 88 || y === 41 || y === 92 || y === 47 || y === 45)
        return !0;
      let _ = e.charCodeAt(s + 2);
      return y === 124 && (_ === 92 || _ === 47);
    }
    return f === 47 || f === 92 ? (y === 124 || y === f) && e.charCodeAt(s + 2) === 45 : f === 40 && y === 41;
  }, H = () => {
    let s = r + 1;
    for (; s < t && Q(s, 1); )
      s++;
    for (; s < t && !W(s); ) {
      let f = s;
      for (; e.charCodeAt(f) === 45; )
        f++;
      if (f >= t || !Q(f, 2))
        break;
      for (f++; f < t && Q(f, 2); )
        f++;
      s = f;
    }
    M(48, r, s, e.slice(r, s).trim());
  }, N = () => {
    let s = r;
    for (; He(e.charCodeAt(s)); )
      s++;
    let f = s > r;
    if (e.charCodeAt(s) === 46 && He(e.charCodeAt(s + 1))) {
      let _ = He(e.charCodeAt(s + 2)) ? s + 3 : s + 2, C = e.charCodeAt(_);
      if (C === 32 || C === 10)
        return p(10, r, _), !0;
    }
    let y = e.charCodeAt(s);
    return f && (y === 32 || y === 10) ? (p(10, r, s), !0) : !1;
  }, R = () => {
    let s = e.charCodeAt(r + 1), f = e.charCodeAt(r + 2);
    if (s === 62)
      p(f === 62 ? 55 : 53, r, r + (f === 62 ? 3 : 2));
    else if (s === 120 || s === 88)
      p(59, r, r + 2);
    else if (s === 41)
      p(61, r, r + 2);
    else if (s === 124 && f === 92)
      p(63, r, r + 3);
    else if (s === 124 && f === 47)
      p(64, r, r + 3);
    else if (s === 92 && f === 92)
      p(65, r, r + 3);
    else if (s === 47 && f === 47)
      p(66, r, r + 3);
    else if (s === 45) {
      let y = e.charCodeAt(r + 3);
      f === 62 ? p(y === 62 ? 57 : 54, r, r + (y === 62 ? 4 : 3)) : f === 120 || f === 88 ? p(60, r, r + 3) : f === 41 ? p(62, r, r + 3) : f === 124 && y === 92 ? p(67, r, r + 4) : f === 124 && y === 47 ? p(68, r, r + 4) : f === 92 && y === 92 ? p(69, r, r + 4) : f === 47 && y === 47 ? p(70, r, r + 4) : p(46, r, r + 1);
    } else
      p(46, r, r + 1);
  }, Y = (s) => {
    let f = e.charCodeAt(r + 1);
    if (f !== 124 && f !== s || e.charCodeAt(r + 2) !== 45)
      return !1;
    let y = e.charCodeAt(r + 3) === 45, _ = s === 47, C;
    return f === 124 ? y ? C = _ ? 75 : 76 : C = _ ? 71 : 72 : y ? C = _ ? 77 : 78 : C = _ ? 73 : 74, p(C, r, r + (y ? 4 : 3)), !0;
  }, te = () => {
    if (!ee(r, "title"))
      return !1;
    let s = r + 5, f = e.charCodeAt(s) === 58;
    f && s++;
    let y = s;
    for (; y < t && e.charCodeAt(y) !== 10 && ge(e.charCodeAt(y)); )
      y++;
    if (y === t || e.charCodeAt(y) === 10)
      return r = y, !0;
    let _ = e.charCodeAt(s);
    return !ge(_) || _ === 13 || !Q(s + 1, 16) ? !1 : (p(f ? 15 : 14, r, K(s + 1)), !0);
  }, we = () => {
    let s = ee(r, "accdescr");
    if (!s && !ee(r, "acctitle"))
      return !1;
    let f = J(r + 8), y = e.charCodeAt(f);
    return y === 58 ? (p(s ? 18 : 16, r, J(f + 1)), E(s ? 6 : 5), !0) : s && y === 123 ? (r = J(f + 1), E(7), !0) : !1;
  }, fe = (s) => {
    switch (s | 32) {
      case 97:
        return x("actor", 34, 1) || x("alt", 24, 3) || x("and", 30, 3) || x("activate", 12, 1) || we() || x("autonumber", 9);
      case 98:
        return x("box", 6, 3) || x("break", 28, 3);
      case 99:
        return x("create", 5) || x("critical", 27, 3);
      case 100:
        return x("destroy", 35, 1) || $("details", 41) || x("deactivate", 13, 1);
      case 101:
        return x("else", 31, 3) || x("end", 8);
      case 108:
        return x("loop", 21, 3) || x("left of", 43) || $("links", 38) || $("link", 39);
      case 110:
        return x("note", 36);
      case 111:
        return x("opt", 23, 3) || x("option", 29, 3) || x("over", 37) || x("off", 11);
      case 112:
        return x("participant", 32, 1) || x("par", 25, 3) || x("par_over", 26, 3) || $("properties", 40);
      case 114:
        return x("rect", 22, 3) || x("right of", 44);
      case 115:
        return x("sequencediagram", 4);
      case 116:
        return te();
      default:
        return !1;
    }
  }, A = () => {
    let s = e.charCodeAt(r);
    if (s === 10) {
      let f = r + 1;
      for (; e.charCodeAt(f) === 10; )
        f++;
      p(3, r, f);
      return;
    }
    if (ge(s)) {
      r = J(r + 1);
      return;
    }
    if (s === 35 || s === 37 && e.charCodeAt(r + 1) !== 123) {
      r = B(r);
      return;
    }
    if (!((He(s) || s === 46) && N()) && !(s < 128 && (s | 32) >= 97 && (s | 32) <= 122 && fe(s)))
      if (s === 44)
        p(42, r, r + 1);
      else if (s === 59)
        p(3, r, r + 1);
      else if (Q(r, 1))
        H();
      else if (s === 45)
        R();
      else if (s === 60 && e.startsWith("<<->>", r))
        p(56, r, r + 5);
      else if (s === 60 && e.startsWith("<<-->>", r))
        p(58, r, r + 6);
      else {
        if ((s === 47 || s === 92) && Y(s))
          return;
        s === 58 ? p(52, r, K(r + 1)) : s === 43 ? p(45, r, r + 1) : s === 40 && e.charCodeAt(r + 1) === 41 ? p(47, r, r + 2) : p(2, r, r + 1);
      }
  }, xe = () => {
    if (L())
      return !0;
    let s = e.charCodeAt(r);
    if (s === 35)
      return r = B(r), !0;
    if (s === 64 && e.charCodeAt(r + 1) === 123)
      return w(49, 2, 4), !0;
    let f = r;
    for (; f < t && Q(f, 4); )
      f++;
    if (f > r) {
      let _ = J(f);
      if (e.charCodeAt(_) === 64 && e.charCodeAt(_ + 1) === 123)
        return p(48, r, f), !0;
      if (_ > f && ee(_, "as") && ge(e.charCodeAt(_ + 2)))
        return p(48, r, f), E(2), !0;
    }
    let y = f;
    for (; y < t && Q(y, 8); )
      y++;
    if (y > r) {
      let _ = e.charCodeAt(y), C = y;
      if (y < t && _ !== 10 && _ !== 59)
        for (C--; C > r && e.charCodeAt(C) !== 35; )
          C--;
      if (C > r)
        return M(48, r, C, e.slice(r, C).trim()), z(), !0;
    }
    if (e.charCodeAt(y) === 60)
      return p(2, r, B(r)), z(), !0;
    if (s !== 10) {
      let _ = B(r);
      return M(2, r, _, e.slice(r, _).trim()), z(), !0;
    }
    return !1;
  }, le = () => {
    switch (b) {
      case 0:
        return A(), !0;
      case 1:
        return xe();
      case 2:
        return L() ? !0 : e.charCodeAt(r) === 35 ? (r = B(r), !0) : (z(), z(), re("as") ? w(33, 2, 3) : p(3, r, r), !0);
      case 3:
        return L() ? !0 : e.charCodeAt(r) === 35 ? (r = B(r), !0) : (p(7, r, K(r)), z(), !0);
      case 4:
        if (e.charCodeAt(r) !== 125) {
          let s = e.indexOf("}", r);
          return s === -1 && (s = t), p(50, r, s), !0;
        } else {
          let s = J(r + 1), f = s > r + 1 && ee(s, "as") && ge(e.charCodeAt(s + 2));
          return p(51, r, r + 1), z(), f ? E(2) : z(), !0;
        }
      case 5:
      case 6:
        return p(b === 5 ? 17 : 19, r, B(r)), z(), !0;
      default:
        if (e.charCodeAt(r) === 125)
          r++, z();
        else {
          let s = e.indexOf("}", r);
          s === -1 && (s = t), p(20, r, s);
        }
        return !0;
    }
  };
  for (; r < t; )
    if (!le())
      return i.push(1), l.push(""), d.push(r), { types: i, texts: l, starts: d };
  return b === 0 || b === 2 ? p(3, t, t) : b === 3 ? p(7, t, t) : b === 5 ? p(17, t, t) : b === 6 ? p(19, t, t) : b === 7 && p(20, t, t), i.push(0), l.push(""), d.push(t), { types: i, texts: l, starts: d };
}
var I = new Int8Array(79).fill(-1);
I[53] = 5;
I[54] = 6;
I[55] = 0;
I[57] = 1;
I[56] = 33;
I[58] = 34;
I[59] = 3;
I[60] = 4;
I[61] = 24;
I[62] = 25;
I[63] = 41;
I[64] = 42;
I[65] = 43;
I[66] = 44;
I[67] = 51;
I[68] = 52;
I[69] = 53;
I[70] = 54;
I[71] = 45;
I[72] = 46;
I[73] = 47;
I[74] = 48;
I[75] = 55;
I[76] = 56;
I[77] = 57;
I[78] = 58;
var oe = new Int8Array(79).fill(-1);
oe[21] = 2;
oe[22] = 3;
oe[23] = 4;
oe[28] = 5;
oe[24] = 6;
oe[25] = 7;
oe[26] = 7;
oe[27] = 8;
oe[6] = 1;
var Ea = "'SOLID_OPEN_ARROW', 'DOTTED_OPEN_ARROW', 'SOLID_ARROW', 'DOTTED_ARROW', 'SOLID_CROSS', 'DOTTED_CROSS', 'SOLID_POINT', 'DOTTED_POINT'";
function Ca(e, t) {
  var K;
  let { types: i, texts: l, starts: d } = Sa(e), n = 0, b = (w) => {
    let x = i[n];
    throw x === 1 ? Wt("sequence", e, d[n], "", !0) : Wt("sequence", e, d[n], `Expecting ${w}, got '${Kt[x]}'`);
  }, r = (w) => (i[n] !== w && b(`'${Kt[w]}'`), l[n++]), v = () => {
    let w = i[n];
    return w !== 48 && w !== 39 && b("'ACTOR'"), { type: "addParticipant", actor: l[n++] };
  }, p = () => t.parseMessage(r(52).trim().substring(1)), M = () => {
    let w = i[n++];
    if (w === 35) {
      let $ = v();
      return r(3), $.type = "destroyParticipant", $;
    }
    let x = v();
    if (i[n] === 49 && i[n - 1] === 48) {
      n++;
      let $ = r(50);
      r(51), x.config = $.trim();
    }
    if (x.draw = w === 32 ? "participant" : "actor", i[n] === 33) {
      n++;
      let $ = r(7);
      r(3), x.description = t.parseMessage($);
    } else
      i[n] === 3 ? n++ : b("'AS', 'NEWLINE'");
    return x;
  }, E = (w) => {
    let x = !1;
    i[n] === 47 && (x = !0, n++);
    let $ = I[i[n]];
    $ < 0 && b(Ea), n++;
    let W = i[n];
    (W === 47 || !x && (W === 45 || W === 46)) && n++;
    let H = v(), N = p(), R = { type: "addMessage", from: w.actor, to: H.actor, signalType: $, msg: N }, Y = [w, H, R];
    if (x) {
      let te = W === 47;
      R.activate = te, R.centralConnection = te ? 61 : 60, te && Y.push({ type: "centralConnection", signalType: 59, actor: H.actor }), Y.push({ type: "centralConnectionReverse", signalType: 60, actor: w.actor });
    } else
      W === 45 ? (R.activate = !0, Y.push({ type: "activeStart", signalType: 17, actor: H.actor })) : W === 46 ? Y.push({ type: "activeEnd", signalType: 18, actor: w.actor }) : W === 47 && (R.activate = !0, R.centralConnection = 59, Y.push({ type: "centralConnection", signalType: 59, actor: H.actor }));
    return Y;
  }, z = (w) => {
    n++;
    let x = v();
    return [x, { type: w, actor: x.actor, text: p() }];
  }, B = () => {
    n++;
    let w = i[n];
    if (w === 37) {
      n++;
      let W = v(), H = W, N = [W.actor, W.actor];
      if (i[n] === 42) {
        n++;
        let R = v();
        H = [W, R], N = [W.actor, R.actor];
      }
      return [H, { type: "addNote", placement: 2, actor: N, text: p() }];
    }
    w !== 43 && w !== 44 && b("'over', 'left_of', 'right_of'"), n++;
    let x = v();
    return [x, { type: "addNote", placement: w === 43 ? 0 : 1, actor: x.actor, text: p() }];
  }, Q = () => {
    n++;
    let w = { type: "sequenceIndex", sequenceVisible: !0, signalType: 26 };
    return i[n] === 10 ? (w.sequenceIndex = Number(l[n++]), w.sequenceIndexStep = i[n] === 10 ? Number(l[n++]) : 1) : i[n] === 11 && (n++, w.sequenceVisible = !1), i[n] !== 3 && b("'NEWLINE', 'NUM', 'off'"), n++, w;
  }, ee = (w, x, $, W) => {
    let H = w.list, N = w.sections;
    if (N)
      for (let R = N.length - 2; R >= 0; R -= 2) {
        let Y = { type: x, signalType: W };
        Y[$] = t.parseMessage(N[R + 1]), H = N[R].concat([Y, H]);
      }
    return H;
  }, re = (w) => {
    let x = w.text, $ = w.list;
    switch (w.kind) {
      case 1:
        $[0] = { type: "boxStart", boxData: t.parseBoxData(x) }, $.push({ type: "boxEnd", boxText: x });
        break;
      case 2:
        $[0] = { type: "loopStart", loopText: t.parseMessage(x), signalType: 10 }, $.push({ type: "loopEnd", loopText: x, signalType: 11 });
        break;
      case 3:
        $[0] = { type: "rectStart", color: t.parseMessage(x), signalType: 22 }, $.push({ type: "rectEnd", color: t.parseMessage(x), signalType: 23 });
        break;
      case 4:
        $[0] = { type: "optStart", optText: t.parseMessage(x), signalType: 15 }, $.push({ type: "optEnd", optText: t.parseMessage(x), signalType: 16 });
        break;
      case 5:
        $[0] = { type: "breakStart", breakText: t.parseMessage(x), signalType: 30 }, $.push({ type: "breakEnd", optText: t.parseMessage(x), signalType: 31 });
        break;
      case 6:
        $ = ee(w, "else", "altText", 13), $[0] = { type: "altStart", altText: t.parseMessage(x), signalType: 12 }, $.push({ type: "altEnd", signalType: 14 });
        break;
      case 7:
        $ = ee(w, "and", "parText", 20), $[0] = { type: "parStart", parText: t.parseMessage(x), signalType: w.startType }, $.push({ type: "parEnd", signalType: 21 });
        break;
      default:
        $ = ee(w, "option", "optionText", 28), $[0] = { type: "criticalStart", criticalText: t.parseMessage(x), signalType: 27 }, $.push({ type: "criticalEnd", signalType: 29 });
    }
    return $;
  };
  for (; i[n] === 3; )
    n++;
  r(4);
  let J = [], L = { kind: 0, text: "", startType: 0, list: [], sections: void 0 };
  for (; ; ) {
    let w = i[n], x = L.list;
    if (L.kind === 1) {
      if (w === 32 || w === 34 || w === 35)
        x.push(M());
      else if (w === 3)
        x.push([]), n++;
      else if (w === 8) {
        n++;
        let $ = re(L);
        L = J.pop(), L.list.push($);
      } else
        b("'end', 'NEWLINE', 'participant', 'participant_actor', 'destroy'");
      continue;
    }
    switch (w) {
      case 3:
      case 2:
        x.push([]), n++;
        break;
      case 32:
      case 34:
      case 35:
        x.push(M());
        break;
      case 5: {
        n++;
        let $ = i[n];
        $ !== 32 && $ !== 34 && $ !== 35 && b("'participant', 'participant_actor', 'destroy'");
        let W = M();
        W.type = "createParticipant", x.push(W);
        break;
      }
      case 48:
        x.push(E(v())), r(3);
        break;
      case 39: {
        let $ = i[n + 1];
        x.push($ === 48 || $ === 39 ? z("addALink") : E(v())), r(3);
        break;
      }
      case 38:
        x.push(z("addLinks")), r(3);
        break;
      case 40:
        x.push(z("addProperties")), r(3);
        break;
      case 41:
        x.push(z("addDetails")), r(3);
        break;
      case 36:
        x.push(B()), r(3);
        break;
      case 9:
        x.push(Q());
        break;
      case 12:
      case 13: {
        n++;
        let $ = v();
        r(3), x.push(w === 12 ? { type: "activeStart", signalType: 17, actor: $.actor } : { type: "activeEnd", signalType: 18, actor: $.actor });
        break;
      }
      case 14:
      case 15: {
        let $ = l[n++].substring(w === 14 ? 6 : 7);
        t.setDiagramTitle($), x.push($);
        break;
      }
      case 16: {
        n++;
        let $ = r(17).trim();
        t.setAccTitle($), x.push($);
        break;
      }
      case 18: {
        n++;
        let $ = r(19).trim();
        t.setAccDescription($), x.push($);
        break;
      }
      case 20: {
        let $ = l[n++].trim();
        t.setAccDescription($), x.push($);
        break;
      }
      case 21:
      case 22:
      case 23:
      case 28:
      case 24:
      case 25:
      case 26:
      case 27:
      case 6: {
        n++;
        let $ = r(7);
        J.push(L), L = { kind: oe[w], text: $, startType: w === 26 ? 32 : 19, list: [[]], sections: void 0 };
        break;
      }
      case 31:
      case 30:
      case 29: {
        L.kind !== (w === 31 ? 6 : w === 30 ? 7 : 8) && b("'end'"), n++;
        let $ = r(7);
        ((K = L.sections) != null ? K : L.sections = []).push(x, $), L.list = [];
        break;
      }
      case 8: {
        L.kind === 0 && b("'NEWLINE', 'EOF'"), n++;
        let $ = re(L);
        L = J.pop(), L.list.push($);
        break;
      }
      case 0:
        L.kind !== 0 && b("'end'"), t.apply(x);
        return;
      default:
        b("'NEWLINE', 'ACTOR', 'participant', 'note', 'end'");
    }
  }
}
var Da = 16, Ra = 10, ea = 34, ta = 4, be = 5, ye = 6, he = ' fill="var(--_s)" stroke="var(--_b)"', _e = ' fill="none" stroke="var(--_b)"', Ia = /* @__PURE__ */ new Set(["participant", "actor", "boundary", "control", "entity", "database", "collections", "queue"]), La = /* @__PURE__ */ new Set(["actor", "boundary", "control", "entity", "database"]);
function Wa(e) {
  return Ia.has(e) ? e : "participant";
}
function xt(e) {
  return La.has(e);
}
function Na(e, t, i, l, d = Da) {
  if (xt(e))
    return { w: Math.max(40, t.width + 8), h: ea + (t.height > 0 ? ta + t.height : 0) };
  let n = e === "collections" ? be : e === "queue" ? 2 * ye : 0;
  return { w: Math.max(i, t.width + 2 * d) + n, h: Math.max(l, t.height + 2 * Ra) + (e === "collections" ? be : 0) };
}
function qa(e, t, i) {
  let l = o(t), d = (n) => o(i + n);
  switch (e) {
    case "actor":
      return `<circle cx="${l}" cy="${d(7)}" r="6"${he}/><path d="M${l},${d(13)}V${d(24)}M${o(t - 10)},${d(17)}H${o(t + 10)}M${o(t - 8)},${d(34)}L${l},${d(24)}L${o(t + 8)},${d(34)}"${_e}/>`;
    case "boundary":
      return `<path d="M${o(t - 19)},${d(6)}V${d(28)}M${o(t - 19)},${d(17)}H${o(t - 8)}"${_e}/><circle cx="${o(t + 3)}" cy="${d(17)}" r="11"${he}/>`;
    case "control":
      return `<circle cx="${l}" cy="${d(21)}" r="11"${he}/><path d="M${o(t + 5)},${d(5)}L${o(t - 1)},${d(10)}L${o(t + 5)},${d(15)}"${_e}/>`;
    case "entity":
      return `<circle cx="${l}" cy="${d(15)}" r="11"${he}/><path d="M${o(t - 11)},${d(30)}H${o(t + 11)}"${_e}/>`;
    default: {
      let n = o(t - 14), b = o(t + 14);
      return `<path d="M${n},${d(7)}V${d(27)}A14,5 0 0 0 ${b},${d(27)}V${d(7)}A14,5 0 0 0 ${n},${d(7)}Z"${he}/><path d="M${n},${d(7)}A14,5 0 0 0 ${b},${d(7)}"${_e}/>`;
    }
  }
}
function za(e, t, i, l, d, n) {
  let { w: b, h: r } = l, v = ' class="pele-label"';
  if (xt(e))
    return qa(e, t, i) + de(d, t, i + ea + ta + d.height / 2, v, n);
  let p = t - b / 2;
  if (e === "collections") {
    let M = b - be, E = r - be, z = `<rect x="${o(p + be)}" y="${o(i)}" width="${o(M)}" height="${o(E)}"${he}${Oe}/>`, B = `<rect x="${o(p)}" y="${o(i + be)}" width="${o(M)}" height="${o(E)}"${he}${Oe}/>`;
    return z + B + de(d, p + M / 2, i + be + E / 2, v, n);
  }
  if (e === "queue") {
    let M = o(p + ye), E = o(p + b - ye), z = o(i + r), B = o(r / 2);
    return `<path d="M${M},${o(i)}H${E}A${ye},${B} 0 0 1 ${E},${z}H${M}A${ye},${B} 0 0 1 ${M},${o(i)}Z"${he}/><path d="M${E},${o(i)}A${ye},${B} 0 0 0 ${E},${z}"${_e}/>` + de(d, t - ye / 2, i + r / 2, v, n);
  }
  return `<rect x="${o(p)}" y="${o(i)}" width="${o(b)}" height="${o(r)}"${he}${Oe}/>` + de(d, t, i + r / 2, v, n);
}
var mt = [];
function j(e, t, i, l = 1, d = !1) {
  mt[e] = { dotted: t, head: i, atStart: l !== 1, atEnd: l !== 0, bottom: d };
}
j(0, !1, 1);
j(1, !0, 1);
j(3, !1, 2);
j(4, !0, 2);
j(5, !1, 0);
j(6, !0, 0);
j(24, !1, 3);
j(25, !0, 3);
j(33, !1, 1, 2);
j(34, !0, 1, 2);
for (let e of [!1, !0]) {
  let t = e ? 10 : 0;
  j(41 + t, e, 4), j(42 + t, e, 4, 1, !0), j(43 + t, e, 5), j(44 + t, e, 5, 1, !0), j(45 + t, e, 4, 0), j(46 + t, e, 4, 0, !0), j(47 + t, e, 5, 0), j(48 + t, e, 5, 0, !0);
}
var Pa = /* @__PURE__ */ new Map([[10, "loop"], [12, "alt"], [15, "opt"], [19, "par"], [32, "par"], [27, "critical"], [30, "break"], [22, "rect"]]), Ba = 12, gt = 28, Ht = 22, se = 10, Ft = 4, Va = 14, Te = 10, ja = 16, Ka = 20, Ha = 10, Ye = 20, Yt = 240, Ue = 16, Ae = 4, Ut = ' stroke-dasharray="4 4"';
function ft(e) {
  return e !== void 0 && mt[e] !== void 0;
}
function Fa(e, t) {
  let i = new Array(e.length), l = new Array(e.length), d = 1, n = 1, b = !1;
  for (let r = 0; r < e.length; r++) {
    let v = e[r];
    if (i[r] = NaN, l[r] = !1, v.type === 26) {
      let p = v.message;
      d = p.start || d, n = p.step || n, b = p.visible;
    } else
      ft(v.type) && (i[r] = d, l[r] = b || t, d = Math.round((d + n) * 100) / 100);
  }
  return { index: i, shown: l, visible: b };
}
var Zt = { lines: [], widths: [], width: 0, height: 0, size: 0, lineHeight: 0 };
function $e(e, t, i) {
  let l = e[t];
  return typeof l == "number" && l >= 0 && l <= 2e3 ? l : i;
}
function Gt(e, t, i, l, d) {
  let n = o(e - i * Ge);
  return d ? `<path class="pele-marker" d="M${o(e)},${o(t)}L${n},${o(t + l * 5)}"/>` : `<path class="pele-marker" d="M${o(e)},${o(t)}L${n},${o(t + l * 4.5)}V${o(t)}Z" fill="var(--_l)" stroke="none"/>`;
}
function Ze(e, t, i, l, d) {
  switch (e) {
    case 1:
      return qt("arrow_point", t, i, l, 0, "var(--_l)");
    case 2:
      return qt("arrow_cross", t, i, l, 0, "var(--_l)");
    case 3:
      return `<path class="pele-marker" d="M${o(t - l * Ge)},${o(i - 4.5)}L${o(t)},${o(i)}L${o(t - l * Ge)},${o(i + 4.5)}" stroke-linejoin="round"/>`;
    case 4:
      return Gt(t, i, l, d, !1);
    case 5:
      return Gt(t, i, l, d, !0);
    default:
      return "";
  }
}
function Ya(e) {
  return e === 1 ? Ge - 1 : e === 2 ? 4 : 0;
}
function Ua(e, t, i) {
  return ha(i, (l) => Za(e, t, i, l));
}
function Za(e, t, i, l) {
  var Ot, Mt, St, Et, Ct, Dt, Rt;
  let d = (Ot = t.sequence) != null ? Ot : {}, n = (Mt = i.fontSize) != null ? Mt : 16, b = Math.round(n * 0.875), r = Math.round(n * 0.75), v = (St = i.measurer) != null ? St : oa(i.fontFamily, i.fontFamilyMono), p = i.icons, M = (Et = i.padding) != null ? Et : 8, E = d.mirrorActors !== !1, z = d.rightAngles === !0, B = Math.min($e(d, "actorMargin", 40), l ? 8 : 1 / 0), Q = Math.min($e(d, "width", 64), l ? 48 : 1 / 0), ee = $e(d, "height", Math.round(n * 1.5) + 20), re = Math.min($e(d, "width", 160), l ? Math.max(32, (((Ct = i.maxWidth) != null ? Ct : 320) - 2 * M) / Math.max(1, e.actors.size) - B - 24) : 1 / 0), J = Math.max(4, 14 + $e(d, "messageMargin", 35) - 35), L = Math.min($e(d, "noteMargin", 10), l ? 6 : 1 / 0), K = Math.min($e(d, "boxMargin", 10), l ? 6 : 1 / 0), w = d.messageAlign === "left" ? -1 : d.messageAlign === "right" ? 1 : 0, x = l ? 6 : Ba, $ = l ? 8 : ja, W = l ? 12 : Ka, H = l ? 6 : Ha, N = e.messages, R = N.length, Y = Fa(N, d.showSequenceNumbers === !0), te = (a, c, u, m = re, g = 0) => {
    let h = ga(a, !1, v, c, l || u ? m : 1 / 0, g);
    return l ? Nt(h, v, Math.max(120, m)) : h;
  }, we;
  if (d.hideUnusedParticipants === !0) {
    we = /* @__PURE__ */ new Set();
    for (let a of N)
      we.add(a.from).add(a.to);
  }
  let fe = new Int32Array(R + 1);
  fe[R] = -1;
  for (let a = R - 1; a >= 0; a--)
    fe[a] = ft(N[a].type) ? a : fe[a + 1];
  let A = [], xe = /* @__PURE__ */ new Map();
  for (let [a, c] of e.actors) {
    if (we && !we.has(a))
      continue;
    let u = Wa(c.type), m = te(c.description, n, c.wrap), g = e.createdActors.get(a), h = e.destroyedActors.get(a), k = g === void 0 ? -1 : fe[Math.min(g, R)];
    k >= 0 && N[k].to !== a && (k = -1);
    let T = h === void 0 ? -1 : fe[Math.min(h, R)];
    T >= 0 && N[T].to !== a && N[T].from !== a && (T = -1), xe.set(a, A.length), A.push({ id: a, actor: c, kind: u, label: m, size: Na(u, m, Q, ee, l ? 8 : void 0), x: 0, createAt: k, destroyAt: T, top: 0, lifeStart: 0, lifeEnd: -1, activations: [] });
  }
  let le = A.length - 1, s = /* @__PURE__ */ new Map(), f = (a, c, u) => {
    var g;
    if (a < 0 || c > le)
      return;
    let m = a * A.length + c;
    ((g = s.get(m)) != null ? g : 0) < u && s.set(m, u);
  }, y = (a) => Y.shown[a] ? Math.max(Ue, v.width(String(Y.index[a]), r, 0) + 8) : 0, _ = new Array(R);
  for (let a = 0; a < R; a++) {
    let c = N[a], u = c.from === void 0 ? void 0 : xe.get(c.from), m = c.to === void 0 ? void 0 : xe.get(c.to);
    if (!(u === void 0 || m === void 0 || typeof c.message != "string")) {
      if (c.type === 2) {
        let g = te(c.message, b, c.wrap), h = g.width + 2 * L;
        c.placement === 0 ? f(u - 1, u, h + 2 * Te + se) : c.placement === 1 ? f(u, u + 1, h + 2 * Te + se) : u === m ? (f(u - 1, u, h / 2 + Te), f(u, u + 1, h / 2 + Te)) : f(Math.min(u, m), Math.max(u, m), h - 2 * $), _[a] = { kind: 2, a: u, b: m, label: g, x: 0, w: h };
      } else if (ft(c.type)) {
        let g = te(c.message, b, c.wrap), h = y(a);
        if (u === m)
          f(u, u + 1, gt + 8 + g.width + 16 + se + h), _[a] = { kind: 1, a: u, b: m, label: g, x: 0, w: 0 };
        else {
          let k = A[m].createAt === a ? A[m].size.w / 2 : 0, T = c.centralConnection ? 4 * Ae : 0;
          f(Math.min(u, m), Math.max(u, m), (l ? Math.min(g.width, Math.max(16, re - 16)) : g.width) + 2 * x + se + h + k + T), _[a] = { kind: 0, a: u, b: m, label: g, x: 0, w: 0 };
        }
      }
    }
  }
  let C = [];
  for (let a = 0; a <= le; a++) {
    let c = A[a].actor.box, u = C[C.length - 1];
    c && u && u.box === c && u.last === a - 1 ? u.last = a : c && C.push({ box: c, first: a, last: a, title: te(c.name, b, c.wrap), grow: 0 });
  }
  let ve = new Array(Math.max(le, 0));
  for (let a = 0; a < le; a++) {
    let c = A[a], u = A[a + 1], m = c.actor.box !== u.actor.box ? (c.actor.box ? K : 0) + (u.actor.box ? K : 0) : 0;
    ve[a] = Math.max(c.size.w / 2 + u.size.w / 2 + B + m, (Dt = s.get(a * A.length + a + 1)) != null ? Dt : 0);
  }
  let Je = [];
  for (let [a, c] of s) {
    let u = Math.floor(a / A.length), m = a % A.length;
    m - u > 1 && Je.push([u, m, c]);
  }
  Je.sort((a, c) => a[1] - a[0] - (c[1] - c[0]) || a[0] - c[0]);
  for (let [a, c, u] of Je) {
    let m = 0;
    for (let h = a; h < c; h++)
      m += ve[h];
    if (m >= u)
      continue;
    let g = (u - m) / (c - a);
    for (let h = a; h < c; h++)
      ve[h] += g;
  }
  let $t = () => {
    for (let a = 1; a <= le; a++)
      A[a].x = A[a - 1].x + ve[a - 1];
  };
  $t();
  for (let a of C) {
    let c = A[a.last].x + A[a.last].size.w / 2 - (A[a.first].x - A[a.first].size.w / 2);
    a.grow = Math.max(0, (a.title.width - c) / 2), a.grow !== 0 && (a.first > 0 && (ve[a.first - 1] += a.grow), a.last < le && (ve[a.last] += a.grow));
  }
  $t();
  let ke = 1 / 0, Me = -1 / 0, ne = (a, c) => {
    a < ke && (ke = a), c > Me && (Me = c);
  };
  for (let a of A)
    ne(a.x - a.size.w / 2, a.x + a.size.w / 2);
  for (let a of C)
    ne(A[a.first].x - A[a.first].size.w / 2 - K - a.grow, A[a.last].x + A[a.last].size.w / 2 + K + a.grow);
  let Xe = new Array(R), pe = [], aa = () => le < 0 ? [0, 120] : [A[0].x - W, A[le].x + W];
  for (let a = 0; a < R; a++) {
    let c = N[a], u = c.type, m = u === void 0 ? void 0 : Pa.get(u), g = _[a];
    if (m !== void 0) {
      let h = { kind: m, x0: 1 / 0, x1: -1 / 0, top: 0, title: Zt, tabW: 0, fill: m === "rect" && typeof c.message == "string" ? c.message : "", dividers: [a], dividerY: [], dividerLabels: [] };
      Xe[a] = h, pe.push(h);
    } else if (u === 13 || u === 20 || u === 28)
      (Rt = pe[pe.length - 1]) == null || Rt.dividers.push(a);
    else if (u === 11 || u === 14 || u === 16 || u === 21 || u === 29 || u === 31 || u === 23) {
      let h = pe.pop();
      if (!h)
        continue;
      if (Xe[a] = h, h.x0 > h.x1 && ([h.x0, h.x1] = aa()), h.kind !== "rect") {
        h.tabW = v.width(h.kind, r, 1) + 14;
        for (let T = 0; T < h.dividers.length; T++) {
          let O = N[h.dividers[T]].message, q = T === 0 ? h.tabW + 8 : 0, U = h.x1 - h.x0 - 16 - q, F = O ? te(`[${O}]`, b, !0, Math.max(U, l ? Math.min(Yt, re) : Yt)) : Zt;
          F.width > U && (h.x1 += F.width - U), T === 0 ? h.title = F : h.dividerLabels.push(F);
        }
      }
      ne(h.x0, h.x1);
      let k = pe[pe.length - 1];
      k && (k.x0 = Math.min(k.x0, h.x0 - H), k.x1 = Math.max(k.x1, h.x1 + H));
    } else if (g) {
      let h = A[g.a], k = A[g.b], T, O;
      if (g.kind === 2) {
        if (c.placement === 0)
          g.x = h.x - Te - g.w;
        else if (c.placement === 1)
          g.x = h.x + Te;
        else if (g.a === g.b)
          g.x = h.x - g.w / 2;
        else {
          let U = Math.min(h.x, k.x) - $, F = Math.max(h.x, k.x) + $;
          (l || c.wrap) && (g.label = te(c.message, b, !0, Math.max(re, F - U - 2 * L))), g.w = Math.max(F - U, g.label.width + 2 * L), g.x = (U + F - g.w) / 2;
        }
        T = g.x, O = g.x + g.w;
      } else
        g.kind === 1 ? (T = h.x, O = h.x + se + gt + 8 + g.label.width + y(a)) : (T = Math.min(h.x, k.x), O = Math.max(h.x, k.x), (l || c.wrap) && (g.label = te(c.message, b, !0, Math.max(re, O - T - 2 * x - se))), k.createAt === a && (k.x > h.x ? O += k.size.w / 2 : T -= k.size.w / 2));
      ne(T, O);
      let q = pe[pe.length - 1];
      q && (q.x0 = Math.min(q.x0, T - W), q.x1 = Math.max(q.x1, O + W));
    }
  }
  let Ce = 0;
  for (let a of C)
    Ce = Math.max(Ce, a.title.height);
  let ra = C.length > 0 ? K + (Ce > 0 ? Ce + 4 : 0) : 0, Qe = 0;
  for (let a of A)
    a.createAt < 0 && (Qe = Math.max(Qe, a.size.h));
  let et = ra + Qe;
  for (let a of A)
    a.top = et - a.size.h, a.lifeStart = et;
  let De = A.map((a) => a.x), ia = (a, c) => {
    let u = 0, m = De.length;
    for (; u < m; ) {
      let g = u + m >> 1;
      De[g] <= a ? u = g + 1 : m = g;
    }
    return u < De.length && De[u] < c;
  }, tt = (a, c, u, m) => {
    if (a.width === 0)
      return "";
    let g = c - a.width / 2;
    return (ia(g, g + a.width) ? `<rect x="${o(g - 3)}" y="${o(u - a.height / 2 + 2)}" width="${o(a.width + 6)}" height="${o(a.height - 4)}" rx="3" fill="var(--_bg)" stroke="none"/>` : "") + de(a, c, u, m, p);
  }, at = (a, c = 0) => a.activations.length + c > 0 ? a.x - se / 2 : a.x, Se = (a, c = 0) => {
    let u = a.activations.length + c;
    return u > 0 ? a.x + se / 2 + (u - 1) * Ft : a.x;
  }, rt = [], it = [], st = "", lt = "", Re = "", nt = "", Ie = "", ot = "", yt = (a, c) => {
    let u = a.activations.pop(), m = Math.max(c, u + Va), g = a.x - se / 2 + a.activations.length * Ft;
    return ne(g, g + se), it.push(`<rect class="pele-activation" data-id="${ce(a.id)}" x="${o(g)}" y="${o(u)}" width="${se}" height="${o(m - u)}" rx="2"/>`), m;
  }, bt = (a, c) => {
    let u = a.x, m = c + 16;
    return a.lifeEnd = m, ot += `<path class="pele-destroy" data-id="${ce(a.id)}" d="M${o(u - 6)},${o(m - 6)}L${o(u + 6)},${o(m + 6)}M${o(u + 6)},${o(m - 6)}L${o(u - 6)},${o(m + 6)}"/>`, m + 6;
  }, wt = (a, c, u) => {
    let m = a.actor.properties.get("class");
    return `<g class="pele-node pele-actor pele-actor-${a.kind}${u ? " pele-actor-footer" : ""}${typeof m == "string" ? fa(m) : ""}" data-id="${ce(a.id)}">` + za(a.kind, a.x, c, a.size, a.label, p) + "</g>";
  }, ct = (a, c, u, m) => `<g class="pele-sequence-number"><rect x="${o(c - m / 2)}" y="${o(u - Ue / 2)}" width="${o(m)}" height="${Ue}" rx="${Ue / 2}" fill="var(--_l)" stroke="none"/><text x="${o(c)}" y="${o(u + r * 0.35)}" text-anchor="middle" font-size="${r}" fill="var(--_bg)" stroke="none">${xa(String(Y.index[a]))}</text></g>`, D = et + 6, Le = [];
  for (let a = 0; a < R; a++) {
    let c = N[a], u = c.type, m = _[a], g = Xe[a];
    if (u === 17) {
      let h = c.from === void 0 ? void 0 : xe.get(c.from);
      h !== void 0 && A[h].activations.push(D);
    } else if (u === 18) {
      let h = c.from === void 0 ? void 0 : xe.get(c.from);
      h !== void 0 && A[h].activations.length > 0 && (D = Math.max(D, yt(A[h], D)));
    } else if (g && g.dividers[0] === a)
      Le.push(g), g.kind === "rect" ? (g.top = D + 8, D = g.top) : (g.top = D + 12, D = g.top + Math.max(Ye, g.title.height + 2));
    else if (g) {
      Le.pop();
      let h = D + 12, k = o(g.x0), T = o(g.x1 - g.x0);
      if (g.kind === "rect") {
        let O = g.fill ? zt([`fill:${g.fill}`]).shape : "";
        rt.push(`<rect class="pele-rect" x="${k}" y="${o(g.top)}" width="${T}" height="${o(h - g.top)}"${Pt((O ? "" : ' fill-opacity="0.5"') + O)}/>`);
      } else {
        let O = `<rect x="${k}" y="${o(g.top)}" width="${T}" height="${o(h - g.top)}" fill="none"${Oe}/>`;
        for (let q = 0; q < g.dividerY.length; q++) {
          let U = g.dividerY[q], F = g.dividerLabels[q];
          O += `<path d="M${k},${o(U)}H${o(g.x1)}"${Ut}/>` + tt(F, g.x0 + 8 + F.width / 2, U + 2 + F.height / 2, ' class="pele-frame-label" fill="var(--_m)" stroke="none"');
        }
        O += `<rect x="${k}" y="${o(g.top)}" width="${o(g.tabW)}" height="${Ye}" fill="var(--_s)"${Oe}/><text class="pele-frame-kind" x="${o(g.x0 + g.tabW / 2)}" y="${o(g.top + Ye / 2 + r * 0.35)}" text-anchor="middle" font-size="${r}" font-weight="var(--_hw)" fill="var(--_m)" stroke="none">${g.kind}</text>` + tt(g.title, g.x0 + g.tabW + 8 + g.title.width / 2, g.top + Math.max(Ye, g.title.height) / 2, ' class="pele-frame-label" fill="var(--_m)" stroke="none"'), st += `<g class="pele-frame pele-frame-${g.kind}">${O}</g>`;
      }
      D = h;
    } else if (u === 13 || u === 20 || u === 28) {
      let h = Le[Le.length - 1];
      if (h) {
        let k = h.dividerLabels[h.dividerY.length];
        h.dividerY.push(D + 12), D += 12 + (k.height > 0 ? k.height : 0);
      }
    } else if (m && m.kind === 2) {
      let h = A[m.a], k = m.label.height + 2 * Math.max(4, L - 4), T = D + 10, O = m.x;
      c.placement === 1 ? O += Se(h) - h.x : c.placement === 0 && (O += at(h) - h.x), ne(O, O + m.w), nt += `<g class="pele-note" data-id="i${ce(c.id)}"><rect x="${o(O)}" y="${o(T)}" width="${o(m.w)}" height="${o(k)}"${Oe}/>` + de(m.label, O + m.w / 2, T + k / 2, ' class="pele-label" stroke="none" fill="var(--_fg)"', p) + "</g>", D = T + k;
    } else if (m) {
      let h = mt[u], k = A[m.a], T = A[m.b], O = m.label, q = y(a), U = 0;
      for (let S = a + 1; S < R; S++) {
        let P = N[S].type;
        if (P === 17)
          N[S].from === c.to && U++;
        else if (P !== 18 && P !== 59 && P !== 60)
          break;
      }
      let F = h.bottom ? 1 : -1, It = h.dotted ? Ut : "", qe = c.centralConnection, ze = qe === 59 || qe === 61, Pe = qe === 60 || qe === 61, Be = (S, P) => `<circle class="pele-central" cx="${o(S)}" cy="${o(P)}" r="${Ae}" fill="var(--_l)" stroke="none"/>`, Ve = h.atStart && !h.atEnd, je = Ya(h.head), ae = "", Z;
      if (m.kind === 1) {
        let S = D + J + Math.max(0, (O.height - Ht) / 2), P = S + Ht, X = Pe ? k.x + Ae : Se(k), G = ze ? k.x + Ae : Se(k, U), ue = Math.max(X, G) + gt + q / 2;
        Pe && (ae += Be(k.x, S)), ze && (ae += Be(k.x, P)), q > 0 && (ae += ct(a, Ve ? G : X, Ve ? P : S, q), Ve ? G += q / 2 : X += q / 2);
        let pt = (h.atStart ? Ze(h.head, X, S, -1, F) : "") + (h.atEnd ? Ze(h.head, G, P, -1, -F) : ""), Ke = o(X + (h.atStart ? je : 0)), ie = o(G + (h.atEnd ? je : 0));
        ae = `<path d="${z ? `M${Ke},${o(S)}H${o(ue)}V${o(P)}H${ie}` : `M${Ke},${o(S)}H${o(ue - 6)}A6,6 0 0 1 ${o(ue)},${o(S + 6)}V${o(P - 6)}A6,6 0 0 1 ${o(ue - 6)},${o(P)}H${ie}`}"${It}/>` + pt + ae, ne(k.x, ue + 8 + O.width), O.width > 0 && (Re += `<g class="pele-edge-label" data-id="i${ce(c.id)}">${de(O, ue + 8 + O.width / 2, (S + P) / 2, "", p)}</g>`), Z = Math.max(P, (S + P) / 2 + O.height / 2);
      } else {
        let S = T.x > k.x ? 1 : -1, P = T.createAt === a;
        Z = D + J + Math.max(O.height > 0 ? O.height + 2 : 6, P ? T.size.h / 2 - J + 6 : 0);
        let X = S > 0 ? Se(k) : at(k), G = S > 0 ? at(T, U) : Se(T, U);
        if (P && (T.top = Z - T.size.h / 2, T.lifeStart = T.top + T.size.h, G = T.x - S * (xt(T.kind) ? 18 : T.size.w / 2 + 1)), Pe && (ae += Be(k.x, Z), X = k.x + S * Ae), ze && (ae += Be(T.x, Z), G = T.x - S * Ae), q > 0)
          if (Ve) {
            let ie = ze ? G - S * (q / 2 + 2) : G;
            ae += ct(a, ie, Z, q), G = ie - S * q / 2;
          } else {
            let ie = Pe ? X + S * (q / 2 + 2) : X;
            ae += ct(a, ie, Z, q), X = ie + S * q / 2;
          }
        let ue = (h.atStart ? Ze(h.head, X, Z, -S, F * S) : "") + (h.atEnd ? Ze(h.head, G, Z, S, F * S) : ""), pt = X + (h.atStart ? S * je : 0), Ke = G - (h.atEnd ? S * je : 0);
        if (ae = `<path d="M${o(pt)},${o(Z)}H${o(Ke)}"${It}/>` + ue + ae, O.width > 0) {
          let ie = Math.min(X, G), Lt = Math.max(X, G), ut = w < 0 ? ie + x + O.width / 2 : w > 0 ? Lt - x - O.width / 2 : (ie + Lt) / 2;
          ne(ut - O.width / 2, ut + O.width / 2), Re += `<g class="pele-edge-label" data-id="i${ce(c.id)}">${tt(O, ut, Z - 4 - O.height / 2, "")}</g>`;
        }
        P && (D = Z + T.size.h / 2 - 6);
      }
      lt += `<g class="pele-edge pele-message" data-id="i${ce(c.id)}">${ae}</g>`, D = Math.max(D, Z), k.destroyAt === a && (D = Math.max(D, bt(k, Z))), T.destroyAt === a && T !== k && (D = Math.max(D, bt(T, Z)));
    }
  }
  D += 20;
  for (let a of A)
    for (; a.activations.length > 0; )
      yt(a, D);
  let We = D;
  if (E) {
    let a = 0;
    for (let c of A)
      c.lifeEnd >= 0 || (a = Math.max(a, c.size.h), Ie += wt(c, D, !0));
    We = D + a;
  }
  let dt = "";
  for (let a of A) {
    Ie += wt(a, a.top, !1);
    let c = a.lifeEnd >= 0 ? a.lifeEnd : D;
    c > a.lifeStart && (dt += `<path class="pele-lifeline" data-id="${ce(a.id)}" d="M${o(a.x)},${o(a.lifeStart)}V${o(c)}"/>`);
  }
  let ht = "";
  for (let a of C) {
    let c = A[a.first].x - A[a.first].size.w / 2 - K - a.grow, u = A[a.last].x + A[a.last].size.w / 2 + K + a.grow, m = a.box.fill === "transparent" ? "" : zt([`fill:${a.box.fill}`]).shape;
    ht += `<g class="pele-cluster pele-box"${a.box.name ? ` data-id="${ce(a.box.name)}"` : ""}><rect x="${o(c)}" y="0" width="${o(u - c)}" height="${o(We + K)}" fill="var(--_a)" stroke="var(--_b)"${Pt((m ? "" : ' fill-opacity="0.5"') + m)}/>` + de(a.title, (c + u) / 2, K / 2 + 2 + a.title.height / 2, ' class="pele-cluster-label" fill="var(--_m)"', p) + "</g>";
  }
  C.length > 0 && (We += K);
  let Ne = 0, vt = "", kt = pa(i), Tt = da(e.title, v, n, l ? kt : 1 / 0), me = l ? Nt(Tt, v, Math.max(120, kt)) : Tt;
  if (ke > Me && ne(0, Math.max(me.width, 40)), me.width > 0) {
    let a = (ke + Me) / 2;
    ne(a - me.width / 2, a + me.width / 2), Ne = -me.height - 12, vt = de(me, a, Ne + me.height / 2, ' class="pele-title" font-weight="var(--_tw)"', p);
  }
  let At = Math.ceil(Me - ke + 2 * M), _t = Math.ceil(We - Ne + 2 * M);
  return { svg: ua("sequence", At, _t, n, i, e, `<g transform="translate(${o(M - ke)},${o(M - Ne)})">` + vt + (ht ? `<g class="pele-boxes" font-size="${b}">${ht}</g>` : "") + (rt.length > 0 ? `<g class="pele-rects" fill="var(--_a)">${rt.reverse().join("")}</g>` : "") + (dt ? `<g class="pele-lifelines" fill="none" stroke="var(--_b)">${dt}</g>` : "") + (it.length > 0 ? `<g class="pele-activations" fill="var(--_s)" stroke="var(--_b)">${it.reverse().join("")}</g>` : "") + (st ? `<g class="pele-frames" font-size="${b}" stroke="var(--_b)">${st}</g>` : "") + (lt ? `<g class="pele-edges" fill="none" stroke="var(--_l)" stroke-linecap="round">${lt}</g>` : "") + (ot ? `<g class="pele-destroys" fill="none" stroke="var(--_l)" stroke-width="1.5" stroke-linecap="round">${ot}</g>` : "") + (Re ? `<g class="pele-edge-labels" font-size="${b}">${Re}</g>` : "") + (nt ? `<g class="pele-notes" font-size="${b}" fill="var(--_a)" stroke="var(--_b)">${nt}</g>` : "") + (Ie ? `<g class="pele-nodes">${Ie}</g>` : "") + "</g>"), width: At, height: _t, links: [] };
}
var rr = { type: "sequence", math: !0, parse(e, t, i) {
  var n;
  let l = (n = t.sequence) != null ? n : {}, d = new Ma({ wrap: typeof t.wrap == "boolean" ? t.wrap : void 0, sequenceWrap: l.wrap === !0 });
  return i && d.setDiagramTitle(i), Ca(e, d), d;
}, render: Ua };
export {
  rr as sequence
};
//# sourceMappingURL=PYZXGPSM-b5ea7e22.js.map

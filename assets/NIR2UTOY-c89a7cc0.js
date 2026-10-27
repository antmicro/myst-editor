var Es = Object.defineProperty;
var Ts = (e, a, l) => a in e ? Es(e, a, { enumerable: !0, configurable: !0, writable: !0, value: l }) : e[a] = l;
var xt = (e, a, l) => (Ts(e, typeof a != "symbol" ? a + "" : a, l), l);
import { x as ws } from "./WJQKAQUO-dbb8c0b4.js";
import { q as Rs, z as Ot, j as Is, H as xs } from "./QRQ46LE7-b110495e.js";
import { g as Os } from "./ECH2OJJK-8814648a.js";
import { d as _s, w as xe, g as Ce, t as X, f as _t, x as ks, J as Ls, a as Ze } from "./lazy-950901f8.js";
import { m as vs, c as Ns } from "./DKTLEL5E-e2b762b2.js";
import { T as Ms, G as Ds, O as Ws, L as Bs } from "./YTAM2TF7-f178d8af.js";
import { a as kt, u as Lt, L as ct, x as $, V as Z, f as Je, S as js, m as Fs, i as Ps, s as Ks, e as Hs } from "./3G3HCGVE-09704139.js";
var Xt = "EOF USECASE ACTOR SYSTEM_BOUNDARY END DIRECTION TD TB BT LR RL NOTE FOR JSON CLASS_DEF CLASS STYLE INCLUDE EXTEND TRUE FALSE IDENTIFIER NUMBER AT COMMA COLON HASH_COLOR CSS_IDENTIFIER CSS_ESCAPED_COMMA DASH DOT PERCENT CSS_PUNCTUATION LABEL_PUNCTUATION LABEL_SYMBOL PLAIN_STRING MARKDOWN_STRING UNCLOSED_MARKDOWN_STRING COMMENT NEWLINE ACC_DESCR_BLOCK ACC_TITLE_LINE ACC_DESCR_LINE JSON_DECLARATION_START JSON_OBJECT_LITERAL UNCLOSED_JSON_OBJECT_LITERAL GENERALIZATION DEPENDENCY_ARROW STEREOTYPE_START STEREOTYPE_END STEREOTYPE_TEXT UNCLOSED_STEREOTYPE_TEXT CLASS_SEPARATOR FORWARD_SOLID BACKWARD_SOLID FORWARD_CIRCLE BACKWARD_CIRCLE FORWARD_CROSS BACKWARD_CROSS MARKERLESS_SOLID METADATA_START LBRACE RBRACE LBRACKET RBRACKET LPAREN RPAREN".split(" "), _e = 1, qt = 2, le = new Uint8Array(128);
for (let e = 48; e <= 57; e++)
  le[e] = _e;
for (let e = 65; e <= 90; e++)
  le[e] = le[e + 32] = _e;
le[95] = _e;
for (let e of "!#$&*+/=?^|~")
  le[e.charCodeAt(0)] = qt;
var vt = [0, 12, 5, 14, 3, 9, 2, 2, 2, 2, 2, 4, 3, 4, 8, 5, 5, 7, 6, 4, 5];
function Ke(e) {
  return e < 128 && (le[e] & _e) !== 0;
}
function at(e, a, l) {
  for (let n = 0; n < l.length; n++)
    if ((e.charCodeAt(a + n) | 32) !== l.charCodeAt(n))
      return !1;
  return !0;
}
function Gs(e, a, l) {
  switch (l) {
    case 97:
      return e.startsWith("actor", a) ? 2 : 0;
    case 115:
      return e.startsWith("systemBoundary", a) ? 3 : e.startsWith("style", a) ? 16 : 0;
    case 101:
      return e.startsWith("end", a) ? 4 : at(e, a, "extend") ? 18 : 0;
    case 69:
      return at(e, a, "extend") ? 18 : 0;
    case 100:
      return e.startsWith("direction", a) ? 5 : 0;
    case 84:
      return e.startsWith("TD", a) ? 6 : e.startsWith("TB", a) ? 7 : 0;
    case 66:
      return e.startsWith("BT", a) ? 8 : 0;
    case 76:
      return e.startsWith("LR", a) ? 9 : 0;
    case 82:
      return e.startsWith("RL", a) ? 10 : 0;
    case 110:
      return e.startsWith("note", a) ? 11 : 0;
    case 102:
      return e.startsWith("for", a) ? 12 : e.startsWith("false", a) ? 20 : 0;
    case 106:
      return e.startsWith("json", a) ? 13 : 0;
    case 99:
      return e.startsWith("classDef", a) ? 14 : e.startsWith("class", a) ? 15 : 0;
    case 105:
    case 73:
      return at(e, a, "include") ? 17 : 0;
    case 116:
      return e.startsWith("true", a) ? 19 : 0;
    case 117:
      return e.startsWith("usecase-beta", a) ? 1 : 0;
    default:
      return 0;
  }
}
function ke(e, a) {
  [e, a] = xe(e, a);
  let l = 1, n = 0;
  for (let o = 0; o < a; o++) {
    let s = e.charCodeAt(o);
    s !== 10 && s !== 13 || (s === 13 && o + 1 < a && e.charCodeAt(o + 1) === 10 && o++, l++, n = o + 1);
  }
  return [l, a - n + 1];
}
function Vt(e, a, l) {
  let [n, o] = ke(e, a);
  return `line ${n}, column ${o} [${xe(e, a)[1]},${xe(e, l)[1]})`;
}
function Zt(e, a, l) {
  for (let n = a + 1; n < e.length; n++) {
    let o = e.charCodeAt(n);
    if (o === l)
      return n + 1;
    if (o === 10 || o === 13)
      return -1;
  }
  return -1;
}
function Us(e, a) {
  let l = e.charCodeAt(a);
  return l !== 34 && l !== 39 ? !0 : l === 34 && e.charCodeAt(a + 1) === 96 || Zt(e, a, l) !== -1;
}
function Nt(e, a, l) {
  let [n, o] = ke(e, a), [s, u] = [xe(e, a)[1], xe(e, a + l)[1]];
  return new Ze(`Error lexing usecase diagram: unexpected character: ->${e.charAt(a)}<- at offset: ${s}, skipped ${u - s} characters. at line ${n}, column ${o} [${s},${u})`, "syntax", { type: "usecase", line: n, column: o });
}
function Ys(e) {
  let a = [], l = [], n = [], o = e.length, s = 0, u = !0, g = !1;
  for (; s < o; ) {
    let f = e.charCodeAt(s);
    if (f === 32 || f === 9) {
      s++;
      continue;
    }
    let h, d = s + 1, w = !1;
    if (f < 128 && (le[f] & _e) !== 0) {
      if (h = 0, f === 97 && u && e.startsWith("acc", s)) {
        let i = e.startsWith("Descr", s + 3);
        if (i || e.startsWith("Title", s + 3)) {
          let m = s + 8;
          for (; Ce(e.charCodeAt(m)); )
            m++;
          let O = e.charCodeAt(m);
          if (O === 58)
            for (h = i ? 42 : 41, d = m + 1; d < o && e.charCodeAt(d) !== 10 && e.charCodeAt(d) !== 13; )
              d++;
          else if (O === 123 && i && !g) {
            let x = e.indexOf("}", m + 1);
            x === -1 ? g = !0 : (h = 40, d = x + 1);
          }
        }
      } else if (f === 106 && e.startsWith("json", s) && Ce(e.charCodeAt(s + 4))) {
        let i = s + 5;
        for (; Ce(e.charCodeAt(i)); )
          i++;
        let m = i;
        for (; Ke(e.charCodeAt(i)); )
          i++;
        if (i > m) {
          for (; Ce(e.charCodeAt(i)); )
            i++;
          if (e.charCodeAt(i) === 64) {
            for (i++; Ce(e.charCodeAt(i)); )
              i++;
            if (e.charCodeAt(i) === 123) {
              a.push(43), l.push(s), n.push(i), s = i;
              let O = 0, x = !1, k = !1, I = i;
              for (; I < o; I++) {
                let D = e.charCodeAt(I);
                if (x)
                  k ? k = !1 : D === 92 ? k = !0 : D === 34 && (x = !1);
                else if (D === 34)
                  x = !0;
                else if (D === 123)
                  O++;
                else if (D === 125 && --O === 0)
                  break;
              }
              a.push(I < o ? 44 : 45), l.push(i), s = I < o ? I + 1 : o, n.push(s), u = !1;
              continue;
            }
          }
        }
      }
      if (h === 0) {
        for (; d < o && Ke(e.charCodeAt(d)); )
          d++;
        let i = Gs(e, s, f);
        if (i !== 0)
          i === 1 || d - s === vt[i] ? (h = i, d = s + vt[i]) : h = 21;
        else if ((f === 111 || f === 120) && e.charCodeAt(s + 1) === 45 && e.charCodeAt(s + 2) === 45)
          h = f === 111 ? 56 : 58, d = s + 3;
        else if (X(f)) {
          let m = s + 1;
          for (; X(e.charCodeAt(m)); )
            m++;
          if (e.charCodeAt(m) === 46 && X(e.charCodeAt(m + 1))) {
            for (h = 22, d = m + 2; X(e.charCodeAt(d)); )
              d++;
            for (; _t(e.charCodeAt(d)); )
              d++;
          } else
            h = 21;
        } else
          for (h = 21; e.charCodeAt(d) === 45 && Ke(e.charCodeAt(d + 1)); )
            for (h = 27, d += 2; Ke(e.charCodeAt(d)); )
              d++;
      }
    } else if (f === 10)
      h = 39, w = !0;
    else if (f === 13)
      h = 39, w = !0, e.charCodeAt(d) === 10 && d++;
    else if (f === 34 || f === 39) {
      if (f === 34 && e.charCodeAt(s + 1) === 96) {
        let i = e.indexOf('`"', s + 2);
        h = i === -1 ? 37 : 36, d = i === -1 ? o : i + 2;
      } else if (h = 35, d = Zt(e, s, f), d === -1) {
        let i = s + 1;
        for (; i < o && !Us(e, i); )
          i++;
        throw Nt(e, s, i - s);
      }
    } else if (f === 37)
      if (u && e.charCodeAt(d) === 37)
        for (h = 38; d < o && e.charCodeAt(d) !== 10 && e.charCodeAt(d) !== 13; )
          d++;
      else
        h = 31;
    else if (f === 45)
      if (e.charCodeAt(d) !== 45)
        h = 29;
      else {
        for (; e.charCodeAt(d) === 45; )
          d++;
        let i = e.charCodeAt(d), m = d - s === 2;
        m && i === 124 && e.charCodeAt(d + 1) === 62 ? (h = 46, d += 2) : i === 62 ? (h = 53, d++) : m && (i === 111 || i === 120) ? (h = i === 111 ? 55 : 57, d++) : h = 59;
      }
    else if (f === 46) {
      let i = e.charCodeAt(d);
      if (i === 46 && e.charCodeAt(d + 1) === 62)
        h = 47, d += 2;
      else if (X(i)) {
        for (h = 22; X(e.charCodeAt(d)); )
          d++;
        for (; _t(e.charCodeAt(d)); )
          d++;
      } else
        h = 30;
    } else if (f === 60)
      if (e.charCodeAt(d) === 60) {
        if (a.push(48), l.push(s), n.push(s + 2), u = !1, s += 2, s >= o)
          break;
        if (e.charCodeAt(s) === 62 && e.charCodeAt(s + 1) === 62)
          h = 49, d = s + 2;
        else {
          let i = s, m = !1;
          for (; i < o; i++) {
            let O = e.charCodeAt(i);
            if (O === 10 || O === 13)
              break;
            if (O === 62 && e.charCodeAt(i + 1) === 62) {
              m = !0;
              break;
            }
          }
          if (m && e.slice(s, i).trim() !== "")
            a.push(50), l.push(s), n.push(i), h = 49, s = i, d = i + 2;
          else {
            for (; i < o && e.charCodeAt(i) !== 10 && e.charCodeAt(i) !== 13; )
              i++;
            if (i === s) {
              for (; i < o && (e.charCodeAt(i) === 10 || e.charCodeAt(i) === 13); )
                i++;
              throw Nt(e, s, i - s);
            }
            h = 51, d = i;
          }
        }
      } else if (e.charCodeAt(d) === 45 && e.charCodeAt(d + 1) === 45)
        for (h = 54, d += 2; e.charCodeAt(d) === 45; )
          d++;
      else
        h = 33;
    else if (f === 58)
      e.charCodeAt(d) === 58 && e.charCodeAt(d + 1) === 58 ? (h = 52, d += 2) : h = 25;
    else if (f === 64)
      e.charCodeAt(d) === 123 ? (h = 60, d++) : h = 23;
    else if (f === 123)
      h = 61;
    else if (f === 125)
      h = 62;
    else if (f === 91)
      h = 63;
    else if (f === 93)
      h = 64;
    else if (f === 40)
      h = 65;
    else if (f === 41)
      h = 66;
    else if (f === 44)
      h = 24;
    else if (f === 35) {
      for (; ks(e.charCodeAt(d)); )
        d++;
      h = d > s + 1 ? 26 : 32;
    } else if (f === 92)
      e.charCodeAt(d) === 44 ? (h = 28, d++) : h = 33;
    else if (f < 127 && f > 32)
      h = (le[f] & qt) !== 0 ? 32 : 33;
    else
      for (h = 34; d < o; ) {
        let i = e.charCodeAt(d);
        if (i >= 32 && i < 127 || i === 9 || i === 10 || i === 13)
          break;
        d++;
      }
    a.push(h), l.push(s), n.push(d), s = d, u = w;
  }
  for (let f = 0; f < 3; f++)
    a.push(0), l.push(o), n.push(o);
  return { types: a, starts: l, ends: n };
}
function Js() {
  return { type: "usecase", actors: /* @__PURE__ */ new Map(), useCases: /* @__PURE__ */ new Map(), systemBoundaries: /* @__PURE__ */ new Map(), relationships: [], notes: /* @__PURE__ */ new Map(), jsonNodes: /* @__PURE__ */ new Map(), classDefs: /* @__PURE__ */ new Map(), direction: "LR", title: void 0, accTitle: "", accDescr: "", accDescription: "", source: "", headerSpan: [0, 0], statements: [] };
}
function zs() {
  return { elements: [], boundaries: [], jsons: [], relationships: [], notes: [], metadata: [], classes: [], styles: [], classDefs: [], direction: void 0, accTitle: "", accDescription: "" };
}
function lt(e, a) {
  if (a.length === 0)
    return;
  let l = new Set(e);
  for (let n of a)
    l.has(n) || (l.add(n), e.push(n));
}
function Xs(e) {
  let a = /* @__PURE__ */ new Set(["actor", "usecase", "boundary", "edge"]);
  for (let { key: l, value: n } of e)
    if (l === "icon")
      a.clear(), a.add("actor");
    else if (l === "animate" || l === "animation")
      a.clear(), a.add("edge");
    else if (l === "type")
      a.clear(), n === "rect" || n === "package" ? a.add("boundary") : (n === "normal" || n === "hollow" || n === "awesome") && a.add("actor");
    else if (l === "business")
      a.delete("boundary"), a.delete("edge");
    else
      return;
  return a.size === 1 ? [...a][0] : void 0;
}
function qs(e, a, l, n, o) {
  var be, Ae, $e, me;
  let s = Js(), { actors: u, useCases: g, systemBoundaries: f } = s, h = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ new Map(), O = (t) => Vt(e, t[0], t[1]), x = (t, r) => {
    let [p, y] = ke(e, r[0]);
    return new Ze(t, "semantic", { type: "usecase", line: p, column: y });
  }, k = (t, r) => {
    throw x(`${t} at ${O(r)}`, r);
  }, I = (t, r, p, y, A) => {
    let S = (b) => b === void 0 ? "" : ` (label "${b}")`;
    throw x(`${t} at ${O(r)}${S(y)}; previous declaration at ${O(p)}${S(A)}`, r);
  }, D = (t, r, p) => k(`Metadata property '${p.key}' is invalid for ${r} '${t}'`, p.keySpan), Y = (t, r) => {
    let p = m.get(t);
    (p === void 0 || r < p) && m.set(t, r);
  }, te = (t) => [...t].sort((r, p) => {
    var y, A;
    return ((y = m.get(r.id)) != null ? y : 0) - ((A = m.get(p.id)) != null ? A : 0);
  }), pe = (t, r) => {
    h.set(t.id, { kind: r, span: t.span, generated: t.generated, label: t.label.text });
  }, he = (t, r) => {
    let p = h.get(t.id);
    if (!p)
      return;
    let y = t.generated ? t.label.text : void 0, A = p.generated ? p.label : void 0;
    p.kind !== r && I(`ID '${t.id}' is declared as both ${p.kind} and ${r}`, t.span, p.span, y, A), (p.generated || t.generated) && I(`Generated ID '${t.id}' collides with another declaration`, t.span, p.span, y, A);
  }, Le = (t, r, p) => {
    let y = h.get(t);
    y && I(`ID '${t}' is declared more than once (${y.kind} and ${r})`, p, y.span, void 0, y.generated ? y.label : void 0), h.set(t, { kind: r, span: p, generated: !1 });
  }, st = (t, r, p) => {
    let { key: y, value: A } = r, S = (b) => {
      !p && b !== void 0 && b !== A && I(`Actor '${t.id}' has conflicting ${y} metadata`, r.keySpan, t.span);
    };
    y === "type" && (A === "normal" || A === "hollow" || A === "awesome") ? (S(t.actorType), t.actorType = A) : y === "icon" && typeof A == "string" ? (S(t.icon), t.icon = A) : y === "business" && typeof A == "boolean" ? (S(t.business), t.business = A) : D(t.id, "actor", r);
  }, ne = (t, r, p) => {
    for (let y of r != null ? r : [])
      t.kind === "actor" ? st(t, y, p) : y.key === "business" && typeof y.value == "boolean" ? (!p && t.business !== void 0 && t.business !== y.value && I(`Use case '${t.id}' has conflicting business metadata`, y.keySpan, t.span), t.business = y.value) : D(t.id, "usecase", y);
  }, de = (t) => {
    var p, y, A, S, b, E, T, R, _;
    let r;
    if (t.kind === "actor") {
      g.delete(t.id);
      let W = { id: t.id, label: t.label.text, labelType: t.label.type, business: (p = t.business) != null ? p : !1, classes: [...t.classes], type: t.icon ? "icon" : (y = t.actorType) != null ? y : "normal", styles: (S = (A = u.get(t.id)) == null ? void 0 : A.styles) != null ? S : [] };
      t.icon && (W.icon = t.icon), u.set(t.id, W), r = W;
    } else
      u.delete(t.id), r = { id: t.id, label: t.label.text, labelType: t.label.type, business: (b = t.business) != null ? b : !1, classes: [...t.classes], shape: (E = t.shape) != null ? E : "ellipse", styles: (R = (T = g.get(t.id)) == null ? void 0 : T.styles) != null ? R : [] }, g.set(t.id, r);
    t.stereotype && (r.stereotype = t.stereotype), (_ = t.parent) != null && _.id && (r.parentId = t.parent.id);
  }, ve = (t) => {
    var y, A, S, b, E, T, R;
    he(t, t.kind);
    let r = (y = t.parent) != null && y.id ? t.parent : void 0, p = d.get(t.id);
    if (!p) {
      let _ = { kind: t.kind, id: t.id, label: t.label, span: t.span, generated: t.generated, classes: [...t.classes], parent: r, shape: t.shape, stereotype: t.stereotype, stereotypeSpan: t.stereotype ? t.span : void 0 };
      ne(_, t.metadata, !1), d.set(t.id, _), pe(t, t.kind);
      return;
    }
    (p.label.text !== t.label.text || p.label.type !== t.label.type) && I(`ID '${t.id}' has conflicting labels`, t.span, p.span), t.shape && p.shape && t.shape !== p.shape && I(`Use case '${t.id}' has conflicting shapes`, t.span, p.span), r && ((A = p.parent) == null ? void 0 : A.id) && r.id !== p.parent.id && I(`Element '${t.id}' belongs to more than one system boundary`, r.span, p.parent.span), t.stereotype && p.stereotype && t.stereotype !== p.stereotype && I(`Element '${t.id}' has conflicting stereotypes`, t.span, (S = p.stereotypeSpan) != null ? S : p.span), (b = p.shape) != null || (p.shape = t.shape), (E = p.parent) != null || (p.parent = t.parent), (T = p.stereotype) != null || (p.stereotype = t.stereotype), (R = p.stereotypeSpan) != null || (p.stereotypeSpan = t.stereotype ? t.span : void 0), lt(p.classes, t.classes), ne(p, t.metadata, !1);
  }, ye = (t) => {
    he(t, "boundary");
    let r = w.get(t.id);
    if (r) {
      (r.label.text !== t.label.text || r.label.type !== t.label.type) && I(`Boundary '${t.id}' has conflicting titles`, t.span, r.span), lt(r.classes, t.classes);
      return;
    }
    w.set(t.id, { ...t, classes: [...t.classes], members: [] }), pe(t, "boundary");
  }, ge = (t) => {
    t.classed && !t.declares && k(`Relationship endpoint '${t.id}' uses ::: without declaring the node`, t.span);
    let r = h.get(t.id);
    return r ? r.kind : (d.set(t.id, { ...t, kind: "usecase", shape: "ellipse", classes: [] }), pe(t, "usecase"), Y(t.id, t.span[0]), "usecase");
  }, ce = (t, r) => {
    var y, A;
    let p = (y = h.get(t)) == null ? void 0 : y.kind;
    return (A = p === "actor" ? u.get(t) : p === "usecase" ? g.get(t) : p === "boundary" ? f.get(t) : p === "json" ? s.jsonNodes.get(t) : i.get(t)) != null ? A : k(`Class/style target '${t}' is unresolved or anonymous`, r);
  }, se = [];
  for (let { source: t, target: r } of a.relationships)
    Y(t.id, t.span[0]), Y(r.id, r.span[0]);
  for (let t of a.elements)
    Y(t.id, t.span[0]), se.push({ offset: t.span[0], run: () => ve(t) });
  for (let t of a.boundaries)
    Y(t.id, t.span[0]), se.push({ offset: t.span[0], run: () => ye(t) });
  for (let t of a.jsons)
    Y(t.id, t.span[0]), se.push({ offset: t.span[0], run: () => Le(t.id, "json", t.span) });
  for (let { id: t, idSpan: r } of a.relationships)
    t && r && se.push({ offset: r[0], run: () => Le(t, "edge", r) });
  se.sort((t, r) => t.offset - r.offset);
  for (let t of se)
    t.run();
  for (let t of te(d.values()))
    de(t);
  for (let t of te(w.values()))
    f.set(t.id, { id: t.id, label: t.label.text, labelType: t.label.type, type: "rect", members: [], classes: [], styles: [] });
  for (let t of te(a.jsons))
    s.jsonNodes.set(t.id, { id: t.id, value: t.value, propertyOrder: t.propertyOrder, classes: [...t.classes], styles: [] });
  let Ne = 0;
  for (let t of a.relationships) {
    let { source: r, target: p, type: y } = t, A = ge(r), S = ge(p), b = (R) => R === "actor" || R === "usecase" || R === "json";
    b(A) || I(`Relationship source '${r.id}' cannot be ${A}`, r.span, h.get(r.id).span), b(S) || I(`Relationship target '${p.id}' cannot be ${S}`, p.span, h.get(p.id).span), (y === "include" || y === "extend") && (A !== "usecase" || S !== "usecase") && k(`${y} relationship requires use-case endpoints`, t.span), y === "generalization" && (A === "json" || A !== S) && k("Generalization requires actor-to-actor or use-case-to-use-case endpoints", t.span), y === "association" && (A === "json" || S === "json") && t.arrowType > 2 && k(`JSON relationship '${r.id}' to '${p.id}' permits only point, reversed-point, or markerless solid association`, t.span);
    let E = (be = t.id) != null ? be : `edge-${Ne++}`, T = { id: E, explicitId: !!t.id, source: r.id, target: p.id, type: y, arrowType: t.arrowType, minlen: t.minlen, classes: [], styles: [], animate: !1 };
    t.label && (T.label = t.label.text, T.labelType = t.label.type), s.relationships.push(T), i.set(E, T);
  }
  let Me = new Map(u), De = new Map(g);
  u.clear(), g.clear();
  for (let t of te(d.values())) {
    let r = Me.get(t.id), p = De.get(t.id);
    r ? u.set(t.id, r) : p ? g.set(t.id, p) : de(t);
  }
  for (let { target: t, span: r, properties: p, statement: y } of a.metadata) {
    let A = h.get(t);
    if (!A) {
      let T = Xs(p);
      return k(`Metadata target '${t}' is unresolved${T ? ` (metadata implies ${T})` : ""}`, r);
    }
    let S = A.kind;
    S === "actor" || S === "usecase" ? ne(d.get(t), p, !0) : S === "edge" && (y.kind = "edgeMetadata", y.edges = [{ id: t, span: y.span, idSpan: r, metadata: y.metadata }], delete y.nodes);
    let b = w.get(t), E = i.get(t);
    for (let T of S === "actor" || S === "usecase" ? [] : p) {
      let { key: R, value: _ } = T;
      S === "boundary" && b && R === "type" && (_ === "rect" || _ === "package") ? b.type = _ : S === "edge" && E && R === "animate" && typeof _ == "boolean" ? E.animate = _ : S === "edge" && E && R === "animation" && (_ === "fast" || _ === "slow") ? (E.animation = _, E.animate = !0) : D(t, S, T);
    }
  }
  for (let t of s.relationships)
    t.animation && (t.animate = !0);
  for (let t of d.values())
    t.kind === "actor" ? (t.icon && t.actorType && t.actorType !== "normal" && k(`Actor '${t.id}' cannot combine icon with type '${t.actorType}'`, t.span), t.business && (t.icon || t.actorType === "awesome") && k(`Business actor '${t.id}' must use normal or hollow geometry`, t.span)) : t.shape === "rect" && t.business && k(`Rectangular use case '${t.id}' cannot be a business use case`, t.span), de(t);
  for (let t of [...a.elements].sort((r, p) => r.span[0] - p.span[0])) {
    if (!((Ae = t.parent) != null && Ae.id))
      continue;
    let r = w.get(t.parent.id).members;
    r.includes(t.id) || r.push(t.id);
  }
  for (let t of w.values()) {
    let r = f.get(t.id);
    r.type = ($e = t.type) != null ? $e : "rect", r.members = t.members, r.classes = [...t.classes];
  }
  let We = 0;
  for (let t of a.notes) {
    let r = h.get(t.target);
    if (!r)
      return k(`Note target '${t.target}' is unresolved`, t.span);
    r.kind !== "actor" && r.kind !== "usecase" && I(`Note target '${t.target}' must be an actor or use case, not ${r.kind}`, t.span, r.span);
    let p = `note-${We++}`;
    s.notes.set(p, { id: p, target: t.target, label: t.label.text, labelType: t.label.type });
  }
  for (let t of a.classDefs)
    for (let r of t.ids)
      s.classDefs.set(r, { id: r, styles: [...t.styles] });
  for (let t of a.classes)
    for (let r of t.targets)
      lt(ce(r.id, r.span).classes, t.classes);
  for (let t of a.styles)
    ce(t.target, t.span).styles.push(...t.styles);
  return s.direction = (me = a.direction) != null ? me : s.direction, s.title = o, s.accTitle = a.accTitle, s.accDescription = a.accDescription, s.accDescr = a.accDescription.replace(/\n\s+/g, `
`), s.source = e, s.headerSpan = l, s.statements = n, s;
}
var U = class extends Error {
  constructor(a) {
    super("Invalid JSON token");
    xt(this, "offset");
    this.offset = a;
  }
};
function Mt(e) {
  let a = /* @__PURE__ */ new Map(), l = [], n = [], o = e.length, s = 0, u = "", g = 0, f = () => {
    for (; s < o; ) {
      let i = e.charCodeAt(s);
      if (i !== 32 && i !== 9 && i !== 10 && i !== 13)
        return;
      s++;
    }
  }, h = (i) => {
    s++;
    let m = "";
    for (; s < o; ) {
      let O = s, x = e[s++];
      if (x === '"')
        return m;
      if (x.charCodeAt(0) < 32)
        throw new U(O);
      if (x !== "\\") {
        i && (m += x);
        continue;
      }
      let k = s, I = e[s++], D;
      if (I === '"' || I === "\\" || I === "/")
        D = I;
      else if (I === "b")
        D = "\b";
      else if (I === "f")
        D = "\f";
      else if (I === "n")
        D = `
`;
      else if (I === "r")
        D = "\r";
      else if (I === "t")
        D = "	";
      else if (I === "u") {
        let Y = e.slice(s, s + 4);
        if (!/^[\dA-Fa-f]{4}$/.test(Y))
          throw new U(s);
        D = String.fromCharCode(parseInt(Y, 16)), s += 4;
      } else
        throw new U(k);
      i && (m += D);
    }
    throw new U(s);
  }, d = (i) => {
    for (let m = 0; m < i.length; m++)
      if (e[s + m] !== i[m])
        throw new U(s + m);
    s += i.length;
  }, w = () => {
    if (e.charCodeAt(s) === 45 && s++, e.charCodeAt(s) === 48)
      s++;
    else if (X(e.charCodeAt(s)))
      for (; X(e.charCodeAt(s)); )
        s++;
    else
      throw new U(s);
    if (e.charCodeAt(s) === 46) {
      if (s++, !X(e.charCodeAt(s)))
        throw new U(s);
      for (; X(e.charCodeAt(s)); )
        s++;
    }
    if ((e.charCodeAt(s) | 32) === 101) {
      if (s++, (e.charCodeAt(s) === 43 || e.charCodeAt(s) === 45) && s++, !X(e.charCodeAt(s)))
        throw new U(s);
      for (; X(e.charCodeAt(s)); )
        s++;
    }
  };
  for (f(); ; )
    if (g === 0) {
      f();
      let i = e.charCodeAt(s);
      if (g = 2, i === 123) {
        s++;
        let m = [];
        a.set(u, m), l.push(u), f(), e.charCodeAt(s) === 125 ? s++ : (n.push({ object: !0, pointer: u, keys: m, ranges: /* @__PURE__ */ new Map(), key: "", from: 0, index: 0 }), g = 1);
      } else if (i === 91)
        s++, f(), e.charCodeAt(s) === 93 ? s++ : (n.push({ object: !1, pointer: u, keys: [], ranges: /* @__PURE__ */ new Map(), key: "", from: 0, index: 0 }), u += "/0", g = 0);
      else if (i === 34)
        h(!1);
      else if (i === 116)
        d("true");
      else if (i === 102)
        d("false");
      else if (i === 110)
        d("null");
      else if (i === 45 || X(i))
        w();
      else
        throw new U(s);
    } else if (g === 1) {
      let i = n[n.length - 1];
      if (e.charCodeAt(s) !== 34)
        throw new U(s);
      let m = h(!0), O = i.ranges.get(m);
      if (O === void 0)
        i.keys.push(m);
      else
        for (let x = O[0]; x < O[1]; x++)
          a.delete(l[x]);
      if (i.key = m, i.from = l.length, f(), e.charCodeAt(s) !== 58)
        throw new U(s);
      s++, u = `${i.pointer}/${m.replaceAll("~", "~0").replaceAll("/", "~1")}`, g = 0;
    } else {
      let i = n[n.length - 1];
      if (i === void 0)
        break;
      i.object ? i.ranges.set(i.key, [i.from, l.length]) : i.index++, f();
      let m = e.charCodeAt(s);
      if (m === (i.object ? 125 : 93))
        s++, n.pop();
      else {
        if (m !== 44)
          throw new U(s);
        s++, f(), u = `${i.pointer}/${i.index}`, g = i.object ? 1 : 0;
      }
    }
  if (f(), s !== o)
    throw new U(s);
  return a;
}
function ut(e, a, l, n) {
  let o = Math.min(Math.max(a, 0), e.length);
  for (let s = 0; s < o; s++) {
    let u = e.charCodeAt(s);
    u === 13 ? (l++, n = 1) : u === 10 ? (s === 0 || e.charCodeAt(s - 1) !== 13) && (l++, n = 1) : n++;
  }
  return [l, n];
}
function Vs(e, a, l, n) {
  let o = /\bposition (\d+)\b/.exec(e);
  if (o)
    return ut(a, parseInt(o[1], 10), l, n);
  let s = /\bline (\d+) column (\d+)\b/.exec(e);
  if (s) {
    let u = parseInt(s[1], 10), g = parseInt(s[2], 10);
    return [l + u - 1, u === 1 ? n + g - 1 : g];
  }
  if (/unexpected end|end of json input/i.test(e))
    return ut(a, a.length, l, n);
}
function Dt(e, a, l) {
  return new Ze(`${e} (line ${a}, column ${l})`, "syntax", { type: "usecase", line: a, column: l });
}
function Zs(e, a) {
  let l;
  try {
    l = JSON.parse(e);
  } catch (n) {
    let o = n instanceof Error ? n.message : String(n), s = Ls(e);
    if (s !== e)
      try {
        JSON.parse(s);
      } catch (h) {
        h instanceof Error && (o = h.message);
      }
    let [u, g] = a(), f = Vs(o, s, u, g);
    if (!f) {
      let h = 0;
      try {
        Mt(s);
      } catch (d) {
        d instanceof U && (h = d.offset);
      }
      f = ut(s, h, u, g);
    }
    throw Dt(`Invalid JSON: ${o}`, f[0], f[1]);
  }
  if (typeof l != "object" || l === null || Array.isArray(l)) {
    let [n, o] = a();
    throw Dt("JSON value must have an object root", n, o);
  }
  return { value: l, propertyOrder: Mt(e) };
}
var Qt = 1, gt = 2, ft = 4, es = 8, ts = 16, ss = 32, as = 64, Qe = "DEPENDENCY_ARROW|GENERALIZATION|FORWARD_SOLID|BACKWARD_SOLID|MARKERLESS_SOLID|FORWARD_CIRCLE|BACKWARD_CIRCLE|FORWARD_CROSS|BACKWARD_CROSS", et = "IDENTIFIER|PLAIN_STRING|MARKDOWN_STRING", Qs = "PLAIN_STRING|MARKDOWN_STRING|LABEL_TEXT", ls = "ACC_TITLE_LINE|ACC_DESCR_LINE|ACC_DESCR_BLOCK|DIRECTION|ACTOR|SYSTEM_BOUNDARY|NOTE|JSON_DECLARATION_START|CLASS_DEF|CLASS|STYLE", ns = "WORD|PLAIN_STRING|NUMBER|HASH_COLOR|CSS_IDENTIFIER|CSS_ESCAPED_COMMA|DASH|DOT|PERCENT|CSS_PUNCTUATION|COLON|LPAREN|RPAREN|LBRACKET|RBRACKET|LBRACE|RBRACE|AT|MARKERLESS_SOLID", ee = new Uint8Array(67);
function oe(e, a) {
  for (let l of e.split("|"))
    if (l === "WORD")
      for (let n = 1; n <= 21; n++)
        ee[n] |= a;
    else
      ee[Xt.indexOf(l)] |= a;
}
oe(`NEWLINE|COMMENT|${ls}|${et}`, Qt);
oe(`IDENTIFIER|${Qe}`, gt);
oe(ns, ft);
oe(`STEREOTYPE_START|CLASS_SEPARATOR|IDENTIFIER|${Qe}|NEWLINE|EOF`, es);
oe(`NEWLINE|COMMENT|ACTOR|${et}`, ts);
oe("FORWARD_SOLID|MARKERLESS_SOLID|FORWARD_CIRCLE|FORWARD_CROSS", ss);
oe("NEWLINE|IDENTIFIER|PLAIN_STRING|RBRACE", as);
var ea = /* @__PURE__ */ new Set(["allowmixing", "newpage", "package", "rectangle", "skinparam"]), H = "", C = [], P = [], G = [], c = 0, rs = 0, F, qe, ze = [], is = 0, os = 0;
function B(e) {
  return H.slice(P[e], G[e]);
}
function q(e) {
  return [P[e], G[e]];
}
function tt(e) {
  let [a, l] = ke(H, P[c]);
  throw new Ze(`Error parsing usecase diagram: ${e} at ${Vt(H, P[c], G[c])}`, "syntax", { type: "usecase", line: a, column: l });
}
function ps(e) {
  tt(`Expecting token of type --> ${e} <-- but found --> '${B(c)}' <--`);
}
function j(e) {
  return C[c] !== e && ps(Xt[e]), c++;
}
function V(e) {
  let a = e.split("|").map((l, n) => `  ${n + 1}. [${l}]`);
  tt(`Expecting: one of these possible Token sequences:
${a.join(`
`)}
but found: '${B(c)}'`);
}
function Wt() {
  let e = et.split("|"), a = e.flatMap((o) => ["NEWLINE", "IDENTIFIER", "PLAIN_STRING", "RBRACE"].map((s) => `${o}, METADATA_START, ${s}`)), l = `STEREOTYPE_START|CLASS_SEPARATOR|IDENTIFIER|${Qe}|NEWLINE|EOF`.split("|"), n = e.flatMap((o, s) => (s === 0 ? ["LPAREN", "LBRACKET", ...l] : l).map((u) => `${o}, ${u}`));
  return [ls, ...a, ...n, ...a].join("|");
}
function Bt(e) {
  return e >= 1 && e <= 21;
}
function jt(e) {
  return e >= 1 && e <= 34;
}
function ie() {
  rs = G[c - 1], C[c] === 39 ? c++ : C[c] !== 0 && V("NEWLINE|EOF");
}
function Oe(e) {
  let a = C[e] === 36 ? 2 : C[e] === 35 ? 1 : 0;
  return [P[e] + a, G[e] - a];
}
function ht(e) {
  let a = Oe(e);
  return { text: H.slice(a[0], a[1]), type: C[e] === 36 ? "markdown" : "text", span: a };
}
function ds(e) {
  return e.replace(/\W/g, "_");
}
function we() {
  let e = C[c];
  if (e === 35 || e === 36)
    return ht(c++);
  jt(e) || V(Qs);
  let a = c;
  for (; jt(C[c]); )
    c++;
  let l = [P[a], G[c - 1]];
  return { text: H.slice(l[0], l[1]), type: "text", span: l };
}
function re(e) {
  return e === 21 || e === 35;
}
function Ft() {
  let e = c;
  re(C[c]) || V("IDENTIFIER|PLAIN_STRING"), c++, j(25);
  let a = c, l = C[c];
  !re(l) && l !== 19 && l !== 20 && V("IDENTIFIER|PLAIN_STRING|TRUE|FALSE"), c++;
  let n = Oe(e), o = Oe(a);
  return { key: H.slice(n[0], n[1]), value: l === 19 ? !0 : l === 20 ? !1 : H.slice(o[0], o[1]), span: [P[e], G[a]], keySpan: n, valueSpan: o };
}
function ta() {
  let e = C[c], a = C[c + 1], l = C[c + 2];
  return e === 24 ? re(a) || a === 39 && (l === 39 || re(l)) : e !== 39 ? !1 : a === 24 || re(a) || a === 39 && (l === 39 || l === 24 || re(l));
}
function bt() {
  j(60);
  let e = [];
  for (; C[c] === 39; )
    c++;
  if (re(C[c])) {
    for (e.push(Ft()); ta(); ) {
      if (C[c] === 24)
        c++;
      else {
        for (; C[c] === 39; )
          c++;
        C[c] === 24 && c++;
      }
      for (; C[c] === 39; )
        c++;
      e.push(Ft());
    }
    for (C[c] === 24 && c++; C[c] === 39; )
      c++;
  }
  return j(62), e;
}
function At(e) {
  return e.map(({ key: a, span: l, keySpan: n, valueSpan: o }) => ({ key: a, span: l, keySpan: n, valueSpan: o }));
}
function $t(e, a) {
  do {
    c++;
    let l = j(21);
    e.push(B(l)), a.push(q(l));
  } while (C[c] === 24);
}
function cs(e) {
  let a = c, l = C[c], n = { id: "", label: void 0, span: Oe(a), generated: l !== 21, classes: [], classSpans: [], explicit: !1, nodeSpan: [0, 0] };
  if (l === 21) {
    c++, n.id = B(a);
    let o = C[c];
    o === 65 || e && o === 63 ? (c++, n.label = we(), j(o === 65 ? 66 : 64), n.shape = o === 65 ? "ellipse" : "rect") : n.label = ht(a);
  } else
    l === 35 || l === 36 ? (c++, n.label = ht(a), n.id = ds(n.label.text)) : V(et);
  return n;
}
function Ve(e) {
  let a = c, l = cs(!e);
  if (e && (l.shape = void 0), C[c] === 60 && (l.metadata = bt()), C[c] === 48) {
    c++;
    let n = j(50);
    j(49), l.stereotype = B(n).trim(), l.stereotypeSpan = q(n);
  }
  return C[c] === 52 && $t(l.classes, l.classSpans), l.explicit = !!(l.shape || l.metadata || l.stereotype), l.nodeSpan = [P[a], G[c - 1]], l;
}
function mt(e, a) {
  return { id: e.id, kind: a, label: e.label, span: e.span, generated: e.generated, parent: qe, shape: e.shape, metadata: e.metadata, stereotype: e.stereotype, classes: e.classes };
}
function Pt(e, a) {
  return { id: e.id, label: e.label, span: e.span, generated: e.generated, declares: a, classed: e.classes.length > 0 };
}
function Ct(e, a) {
  let l = { id: e.id, span: e.nodeSpan, idSpan: e.span, labelSpan: e.label.span };
  return a && (l.defines = !0), e.stereotypeSpan && (l.stereotypeSpan = e.stereotypeSpan), e.metadata && (l.metadata = At(e.metadata)), e.classSpans.length > 0 && (l.classSpans = e.classSpans), l;
}
function nt(e) {
  if (C[c] < 1 || C[c] > 36)
    return !1;
  for (let a = c + 1; ; a++) {
    let l = C[a];
    if (l === 59 || (ee[l] & e) !== 0)
      return !0;
    if (l < 1 || l > 36)
      return !1;
  }
}
function Se(e) {
  let a = G[e] - P[e] - (C[e] === 59 ? 0 : 1);
  return Math.max(1, a - 1);
}
function us() {
  let e = c, a = { type: "association", arrowType: 0, minlen: 1, target: void 0, span: [0, 0] };
  C[c] === 21 && C[c + 1] === 23 && (a.explicitId = B(c), a.explicitIdSpan = q(c), c += 2);
  let l = c, n = C[c++];
  if (n === 47)
    j(25), C[c] !== 17 && C[c] !== 18 && V("INCLUDE|EXTEND"), a.type = C[c] === 17 ? "include" : "extend", a.label = { text: a.type, type: "text", span: q(c) }, c++;
  else if (n === 46)
    a.type = "generalization";
  else if (n === 53)
    a.minlen = Se(l);
  else if (n === 54)
    a.arrowType = 1, G[l] - P[l] === 3 && nt(0) ? (a.label = we(), a.minlen = Se(j(59))) : a.minlen = Se(l);
  else if (n === 59)
    if (a.arrowType = 2, G[l] - P[l] === 2 && nt(ss)) {
      a.label = we();
      let o = C[c];
      o === 53 ? a.arrowType = 0 : o === 55 ? a.arrowType = 3 : o === 57 ? a.arrowType = 4 : o !== 59 && V("FORWARD_SOLID|MARKERLESS_SOLID|FORWARD_CIRCLE|FORWARD_CROSS"), (a.arrowType === 0 || a.arrowType === 2) && (a.minlen = Se(c)), c++;
    } else
      a.minlen = Se(l);
  else
    n === 55 ? a.arrowType = 3 : n === 57 ? a.arrowType = 4 : n === 56 || n === 58 ? (a.arrowType = n === 56 ? 5 : 6, nt(0) && (a.label = we(), j(59))) : (c--, V(Qe));
  return a.target = Ve(!1), a.span = [P[e], G[c - 1]], a;
}
function Q(e) {
  return { kind: e, span: [0, 0] };
}
function fs(e, a, l, n) {
  var u;
  let o = l.target;
  o.explicit && F.elements.push(mt(o, "usecase")), F.relationships.push({ source: Pt(e, a), target: Pt(o, o.explicit), span: l.span, id: l.explicitId, idSpan: l.explicitIdSpan, type: l.type, arrowType: l.arrowType, label: l.label, minlen: l.minlen }), n.push(Ct(o, o.explicit));
  let s = Q("edge");
  return s.nodes = n, s.edges = [{ id: (u = l.explicitId) != null ? u : `edge-${is++}`, span: s.span }], l.explicitIdSpan && (s.edges[0].idSpan = l.explicitIdSpan), l.label && (s.edges[0].labelSpan = l.label.span), s;
}
function hs(e) {
  let a = Q("node");
  return a.nodes = e, a;
}
function ys(e) {
  c++;
  let a = [Ve(!0)], l;
  if (C[c] === 24)
    do
      c++, a.push(Ve(!0));
    while (C[c] === 24);
  else
    e && (ee[C[c]] & gt) !== 0 && (l = us());
  ie();
  for (let o of a)
    F.elements.push(mt(o, "actor"));
  let n = a.map((o) => Ct(o, !0));
  return l ? fs(a[0], !0, l, n) : hs(n);
}
function gs(e) {
  var o;
  let a = Ve(!1), l = e && (ee[C[c]] & gt) !== 0 ? us() : void 0;
  ie(), l || (a.explicit = !0, (o = a.shape) != null || (a.shape = "ellipse")), a.explicit && F.elements.push(mt(a, "usecase"));
  let n = [Ct(a, a.explicit)];
  return l ? fs(a, a.explicit, l, n) : hs(n);
}
function sa() {
  c++;
  let e = cs(!0), a = { id: e.id, label: e.label, span: e.span, generated: e.generated, classes: e.classes }, l = C[c] === 60 ? bt() : void 0;
  C[c] === 52 && $t(e.classes, e.classSpans), ie(), F.boundaries.push(a), qe = a;
  let n = [];
  for (; (ee[C[c]] & ts) !== 0; )
    n.push(bs(!1));
  qe = void 0;
  let o = j(4);
  ie();
  let s = Q("group");
  return s.group = a.id, s.idSpan = a.span, s.titleSpan = a.label.span, s.endSpan = q(o), s.classSpans = e.classSpans, n.length > 0 && (s.children = n), l && (s.metadata = At(l), F.metadata.push({ target: a.id, span: a.span, properties: l, statement: s })), s;
}
function Kt() {
  let e = c, a = C[c];
  for (Bt(a) || a === 27 ? c++ : a === 59 ? (c++, Bt(C[c]) || ps("WORD"), c++) : V("WORD|CSS_IDENTIFIER|MARKERLESS_SOLID"), j(25), (ee[C[c]] & ft) === 0 && tt(`Expecting: expecting at least one iteration which starts with one of these possible Token sequences::
  <[${ns.replaceAll("|", "] ,[")}]>
but found: '${B(c)}'`); (ee[C[c]] & ft) !== 0; )
    c++;
  return H.slice(P[e], G[c - 1]).replaceAll("\\,", ",");
}
function Ht() {
  let e = [Kt()];
  for (; C[c] === 24; )
    c++, e.push(Kt());
  return e;
}
function rt() {
  let e = [j(21)];
  for (; C[c] === 24; )
    c++, e.push(j(21));
  return e;
}
function He(e) {
  let a = Oe(e);
  return { id: B(e), span: a, idSpan: a };
}
function aa() {
  let e = c, a = C[c], l;
  if (a === 41 || a === 42 || a === 40) {
    c++;
    let n = B(e);
    a === 40 ? F.accDescription = n.slice(n.indexOf("{") + 1, n.lastIndexOf("}")).trim() : a === 42 ? F.accDescription = n.slice(n.indexOf(":") + 1).trim() : F.accTitle = n.slice(n.indexOf(":") + 1).trim(), l = Q(a === 41 ? "accTitle" : "accDescr");
  } else if (a === 5) {
    c++;
    let n = C[c];
    (n < 6 || n > 10) && V("TD|TB|BT|LR|RL"), F.direction = n === 6 ? "TB" : B(c), c++, l = Q("direction");
  } else {
    if (a === 2)
      return ys(!0);
    if (a === 3)
      return sa();
    if (a === 11) {
      c++, j(12);
      let n = j(21), o = we();
      F.notes.push({ target: B(n), span: q(n), label: o }), l = Q("note"), l.ref = `note-${os++}`, l.refSpan = o.span, l.nodes = [He(n)];
    } else if (a === 43) {
      c++;
      let n = j(44), o = [], s = [];
      C[c] === 52 && $t(o, s);
      let u = P[e] + 4;
      for (; H.charCodeAt(u) === 32 || H.charCodeAt(u) === 9; )
        u++;
      let g = u;
      for (; /\w/.test(H.charAt(g)); )
        g++;
      let f = { id: H.slice(u, g), value: {}, propertyOrder: /* @__PURE__ */ new Map(), span: [u, g], classes: o };
      F.jsons.push(f), ze.push([f, n]), l = Q("json"), l.nodes = [{ id: f.id, span: f.span, idSpan: f.span, defines: !0, classSpans: s }], l.classSpans = s;
    } else if (a === 14) {
      c++;
      let n = rt();
      F.classDefs.push({ ids: n.map(B), styles: Ht() }), l = Q("classDef"), l.ref = B(n[0]), l.refSpan = q(n[0]);
    } else if (a === 15) {
      c++;
      let n = rt(), o = rt();
      F.classes.push({ targets: n.map((s) => ({ id: B(s), span: q(s) })), classes: o.map(B) }), l = Q("classAssign"), l.ref = B(o[0]), l.refSpan = q(o[0]), l.nodes = n.map(He);
    } else if (a === 16) {
      c++;
      let n = j(21);
      F.styles.push({ target: B(n), span: q(n), styles: Ht() }), l = Q("style"), l.nodes = [He(n)];
    } else {
      let n = C[c + 1];
      if (n === 60) {
        (ee[C[c + 2]] & as) === 0 && V(Wt()), c++;
        let o = He(e);
        a !== 21 && (o.id = ds(H.slice(o.span[0], o.span[1])));
        let s = bt();
        l = Q("metadata"), l.nodes = [o], l.metadata = At(s), F.metadata.push({ target: o.id, span: o.span, properties: s, statement: l });
      } else
        return (!((ee[n] & es) !== 0 || a === 21 && (n === 65 || n === 63)) || a === 21 && ea.has(B(e).toLowerCase())) && V(Wt()), gs(!0);
    }
  }
  return ie(), l;
}
function bs(e) {
  let a = c, l = C[c];
  if (l === 39)
    return c++, { kind: "blank", span: q(a) };
  if (l === 38)
    return c++, ie(), { kind: "comment", span: q(a) };
  let n = e ? aa() : l === 2 ? ys(!1) : gs(!1);
  if (n.span = [P[a], rs], n.edges)
    for (let o of n.edges)
      o.span = n.span;
  return n;
}
function la(e, a) {
  H = e, { types: C, starts: P, ends: G } = Ys(e), c = 0, F = zs(), qe = void 0, ze = [], is = 0, os = 0;
  try {
    let l = j(1);
    ie();
    let n = [];
    for (; (ee[C[c]] & Qt) !== 0; )
      n.push(bs(!0));
    C[c] !== 0 && tt(`Redundant input, expecting EOF but found: ${B(c)}`);
    for (let [o, s] of ze) {
      let u = Zs(B(s), () => ke(e, P[s]));
      o.value = u.value, o.propertyOrder = u.propertyOrder;
    }
    return qs(e, F, q(l), n, a);
  } finally {
    H = "", C = P = G = ze = [];
  }
}
var na = { normal: "usecaseActor", hollow: "usecaseActorHollow", awesome: "usecaseActorAwesome", icon: "usecaseActorIcon" }, it = [["none", "arrow_point"], ["arrow_point", "none"], ["none", "none"], ["none", "arrow_circle"], ["none", "arrow_cross"], ["arrow_circle", "none"], ["arrow_cross", "none"]];
function Gt(e) {
  return typeof e == "string" ? e : e === null ? "null" : String(e);
}
function ra(e) {
  var o;
  let a = [], l = [[e.value, "", ""]], n = [];
  for (; l.length > 0; ) {
    let [s, u, g] = l.pop();
    if (n.length = 0, Array.isArray(s))
      s.length === 0 ? a.push({ key: u, accessibleKey: u, value: "[]" }) : s.every((f) => f === null || typeof f != "object") ? s.forEach((f, h) => a.push({ key: h === 0 ? u : "", accessibleKey: u, value: Gt(f) })) : s.forEach((f, h) => n.push([f, `${u}[${h}]`, `${g}/${h}`]));
    else if (s !== null && typeof s == "object") {
      let f = s, h = (o = e.propertyOrder.get(g)) != null ? o : Object.keys(f);
      h.length === 0 && a.push({ key: u, accessibleKey: u, value: "{}" });
      for (let d of h)
        n.push([Object.prototype.hasOwnProperty.call(f, d) ? f[d] : void 0, u ? `${u}.${d}` : d, `${g}/${d.replaceAll("~", "~0").replaceAll("/", "~1")}`]);
    } else
      a.push({ key: u, accessibleKey: u, value: Gt(s) });
    for (let f = n.length - 1; f >= 0; f--)
      l.push(n[f]);
  }
  return a;
}
function Ee(...e) {
  return e.filter(Boolean).join(" ");
}
function ia(e) {
  var a;
  return e.type === "generalization" ? ["none", "extension"] : e.type !== "association" ? it[0] : (a = it[e.arrowType]) != null ? a : it[2];
}
function oa(e) {
  var o;
  let a = [], l = [], n = (s) => {
    let u = /* @__PURE__ */ new Map();
    for (let g of ["default", ...s]) {
      let f = e.classDefs.get(g);
      if (f)
        for (let h of f.styles) {
          let d = h.trim(), w = d.indexOf(":"), i = (w === -1 ? d : d.slice(0, w)).trim();
          i && u.set(i, d);
        }
    }
    return [...u.values()];
  };
  for (let s of e.actors.values())
    a.push({ id: s.id, label: s.label, labelType: s.labelType, shape: na[s.type], isGroup: !1, padding: 10, cssClasses: Ee("default", "usecase-actor", `usecase-actor-${s.type}`, s.business && "usecase-business", ...s.classes), cssStyles: [...s.styles], cssCompiledStyles: n(s.classes), actorType: s.type, business: s.business, icon: s.icon || void 0, stereotype: s.stereotype || void 0, parentId: s.parentId || void 0 });
  for (let s of e.useCases.values()) {
    let u = s.shape === "ellipse";
    a.push({ id: s.id, label: s.label, labelType: s.labelType, shape: u ? s.business ? "usecaseBusiness" : "usecaseEllipse" : "rect", isGroup: !1, padding: u ? 20 : 10, cssClasses: Ee("default", "usecase-element", `usecase-${s.shape}`, s.business && "usecase-business", ...s.classes), cssStyles: [...s.styles], cssCompiledStyles: n(s.classes), business: s.business, stereotype: s.stereotype || void 0, parentId: s.parentId || void 0 });
  }
  for (let s of e.notes.values())
    a.push({ id: s.id, label: s.label, labelType: s.labelType, shape: "note", isGroup: !1, padding: 10, cssClasses: "default usecase-note", cssStyles: [], cssCompiledStyles: n([]), noteTarget: s.target });
  for (let s of e.jsonNodes.values())
    a.push({ id: s.id, label: s.id, labelType: "text", shape: "usecaseJsonTable", isGroup: !1, padding: 10, cssClasses: Ee("default", "usecase-json-table", ...s.classes), cssStyles: [...s.styles], cssCompiledStyles: n(s.classes), jsonRows: ra(s) });
  for (let s of e.systemBoundaries.values())
    a.push({ id: s.id, label: s.label, labelType: s.labelType, shape: "usecaseSystemBoundary", isGroup: !0, padding: 20, cssClasses: Ee("default", "system-boundary", `system-boundary-${s.type}`, ...s.classes), cssStyles: [...s.styles], cssCompiledStyles: n(s.classes), boundaryType: s.type });
  for (let s of e.relationships) {
    let u = s.type === "include" || s.type === "extend", [g, f] = ia(s), h = s.animate || s.animation !== void 0, d = { id: s.id, start: s.source, end: s.target, relationshipType: s.type, pattern: u ? "dotted" : "solid", arrowTypeStart: g, arrowTypeEnd: f, classes: Ee("default", "relationship", `relationship-${s.type}`, ...s.classes, h && `edge-animation-${(o = s.animation) != null ? o : "fast"}`), style: [...s.styles], cssCompiledStyles: n(s.classes), animate: s.animate, animation: s.animation, minlen: s.minlen, explicitId: s.explicitId, internal: !1 };
    u ? (d.label = s.type, d.labelType = "text") : s.type === "association" && (s.label && (d.label = s.label), s.labelType && (d.labelType = s.labelType)), l.push(d);
  }
  for (let s of e.notes.values())
    l.push({ id: `${s.id}-edge`, start: s.id, end: s.target, relationshipType: "note", pattern: "dotted", arrowTypeStart: "none", arrowTypeEnd: "none", classes: "default relationship relationship-note", style: [], cssCompiledStyles: n([]), animate: !1, minlen: 1, explicitId: !1, internal: !0 });
  return { nodes: a, edges: l };
}
var pa = 32, da = 16, ca = 72, Ge = 20, ot = 26, St = 40, Re = 60, Ut = 6, pt = 6, Te = 10, dt = 8, Ue = 9, Xe = 12, ua = 14, Ie = ' fill="var(--_s)" stroke="var(--_b)"';
function Yt(e, a, l) {
  var o;
  let n = (o = e.usecase) == null ? void 0 : o[a];
  return typeof n == "number" && n > 0 ? Math.min(n, 2e3) : l;
}
function fa(e) {
  return e.replace(/[&<>\\]/g, (a) => `&#${a.charCodeAt(0)};`);
}
function ae(e, a, l, n, o, s = 0) {
  return Hs(e && !a ? fa(e) : e, a, l, n, o, s);
}
function yt(e, a, l, n) {
  let o = l === 1 || l === 2 ? 1 : -1, s = l === 1 || l === 3, u = (s ? e.w : e.h) / 2, g = 0;
  if (e.kind === 0)
    s ? (u = St / 2 + 3, g = (Re - e.h) / 2) : u += 2;
  else if (e.kind === 1) {
    let f = (s ? e.h : e.w) / 2;
    u *= Math.sqrt(Math.max(1 - (n / f) ** 2, 0));
  }
  return s ? [a.x + o * u, a.y + g + n] : [a.x + n, a.y + o * u];
}
function As(e, a) {
  let l = a === 1 || a === 3;
  if (e.kind === 0)
    return l ? Re * 0.5 : St * 0.6;
  let n = l ? e.h : e.w;
  return e.kind === 1 ? n * 0.6 : n - 16;
}
function ha(e, a, l) {
  let n = /* @__PURE__ */ new Map(), o = (s, u, g, f) => {
    let h = a[s];
    if (h.isGroup)
      return;
    let d = u[g] - h.x, w = u[g + 1] - h.y, i;
    if (Math.abs(Math.abs(w) - h.h / 2) < 0.5)
      i = w < 0 ? 0 : 2;
    else if (Math.abs(Math.abs(d) - h.w / 2) < 0.5)
      i = d < 0 ? 3 : 1;
    else
      return;
    let m = s * 4 + i, O = { route: u, at: g, toward: u[f + (i & 1 ? 1 : 0)] }, x = n.get(m);
    x ? x.push(O) : n.set(m, [O]);
  };
  for (let s of e) {
    let u = s.route.length - 3;
    s.src === s.dst || u < 3 || (o(s.src, s.route, 0, 3), o(s.dst, s.route, u, u - 3));
  }
  for (let [s, u] of n) {
    let g = s >> 2, f = s & 3, h = l[g], d = u.length > 1 ? Math.min(ua, As(h, f) / (u.length - 1)) : 0;
    u.sort((w, i) => w.toward - i.toward);
    for (let w = 0; w < u.length; w++) {
      let [i, m] = yt(h, a[g], f, (w - (u.length - 1) / 2) * d);
      u[w].route[u[w].at] = i, u[w].route[u[w].at + 1] = m;
    }
  }
}
function ya(e, a, l, n, o) {
  let s = e - l * Xe, u = a - n * Xe, g = Xe * 0.5;
  return `<path class="pele-marker" d="M${$(e)},${$(a)}L${$(s - n * g)},${$(u + l * g)}L${$(s + n * g)},${$(u - l * g)}Z" fill="var(--_bg)" stroke="${o}" stroke-linejoin="round"/>`;
}
function Ye(e) {
  return e === "extension" ? Xe : Bs(e);
}
function Jt(e, a, l, n, o, s) {
  return e === "extension" ? ya(a, l, n, o, s) : Ws(e, a, l, n, o, s);
}
function ga(e, a) {
  var f, h, d;
  let l = e.node, n = e.style.shape, o = ` fill="none" stroke="var(--_b)"${e.style.line}`, s = -21, u = 9, g;
  return l.actorType === "hollow" ? (u = 8, g = `<circle cy="-21" r="8" fill="var(--_bg)" stroke="var(--_b)"${n}/><path d="M-20,-9H20V0H5.5L20,15.5L12,25.5L0,12L-12,25.5L-20,15.5L-5.5,0H-20Z" fill="var(--_bg)" stroke="var(--_b)" stroke-linejoin="round"${n}/>`) : l.actorType === "awesome" ? g = `<path d="M0,-30A11,11 0 1 1 0,-8A11,11 0 1 1 0,-30ZM-20,25C-20,9 -12,-3 0,-3C12,-3 20,9 20,25C20,28 18,30 15,30H-15C-18,30 -20,28 -20,25Z" fill="var(--_b)"${n}/>` : l.actorType === "icon" ? (s = -14, u = 12, g = `<rect x="-22" y="-26" width="44" height="44"${Je(Ie + n)}/><svg class="pele-icon" data-icon="${ct((f = l.icon) != null ? f : "")}" x="-14" y="-18" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${(d = a == null ? void 0 : a((h = l.icon) != null ? h : "")) != null ? d : ""}</svg>`) : g = `<circle cy="-21" r="9"${Ie}${n}/><path d="M0,-12V10M-14,-3H14M0,10L-12,30M0,10L12,30"${o}/>`, l.business && (g += `<path class="pele-business" d="M${$(0.12 * u)},${$(s + 0.99 * u)}L${$(0.92 * u)},${$(s - 0.39 * u)}"${o}/>`), g;
}
function ba(e, a, l) {
  return vs(e.direction) ? Ns(l, (n) => zt(e, a, l, n)) : zt(e, a, l, !1);
}
function zt(e, a, l, n) {
  var Me, De, We, be, Ae, $e, me;
  let o = oa(e), s = (Me = l.fontSize) != null ? Me : 16, u = Math.round(s * 0.875), g = Math.round(s * 0.8125), f = (De = l.measurer) != null ? De : _s(l.fontFamily, l.fontFamilyMono), h = (We = l.padding) != null ? We : 8, d = l.icons, w = n ? "TB" : Rs(e.direction), i = w === "LR" || w === "RL", m = /* @__PURE__ */ new Map(), O = [], x = [];
  o.nodes.forEach((t, r) => m.set(t.id, r));
  for (let t of o.nodes) {
    let r = kt(t.cssStyles.length > 0 ? t.cssCompiledStyles.concat(t.cssStyles) : t.cssCompiledStyles), p = (r.bold ? 1 : 0) | (r.italic ? 2 : 0), y = (be = r.fontSize) != null ? be : s, A = t.labelType === "markdown", S = ae(t.stereotype && `\xAB${t.stereotype}\xBB`, !1, f, g, 200, p), b = { node: t, kind: 2, style: r, label: S, stereotype: S, w: 0, h: 0, rows: [], keyW: 0, headH: 0, loops: 0 }, E;
    if (t.isGroup) {
      b.kind = 4, b.label = ae(t.label, A, f, y, 4e3, p);
      let T = b.label.height;
      E = Ot(0, 0), E.isGroup = !0, E.padX = Ge, E.padBottom = Ge, E.padTop = t.boundaryType === "package" ? T + 2 * pt + 16 : T > 0 ? T + 16 : Ge, E.minW = b.label.width + 2 * Ge;
    } else {
      if (t.jsonRows) {
        b.kind = 3, b.label = ae(t.label, !1, f, y, 4e3, p | 1);
        let T = 0;
        for (let R of t.jsonRows) {
          let _ = ae(R.key, !1, f, u, 4e3, p), W = ae(R.value, !1, f, u, 260, p);
          b.rows.push([_, W]), b.keyW = Math.max(b.keyW, _.width), T = Math.max(T, W.width), b.h += Math.max(_.height, W.height, Math.round(u * 1.5)) + dt;
        }
        b.keyW > 0 && (b.keyW += 2 * Te), b.headH = Math.max(b.label.height, Math.round(y * 1.5)) + dt, b.w = Math.max(b.label.width + 2 * Te, b.rows.length > 0 ? b.keyW + T + 2 * Te : 0, 72), b.h += b.headH;
      } else if (t.actorType)
        b.kind = 0, b.label = ae(t.label, A, f, y, 140, p), b.w = Math.max(St, b.label.width, S.width), b.h = Re + Ut + S.height + b.label.height;
      else {
        b.label = ae(t.label, A, f, t.shape === "note" ? u : y, 180, p);
        let T = Math.max(b.label.width, S.width), R = b.label.height + S.height;
        t.shape === "usecaseEllipse" || t.shape === "usecaseBusiness" ? (b.kind = 1, b.w = Math.max(T + 2 * t.padding + (t.business ? 16 : 4), 88), b.h = Math.max(R + 28, 48)) : t.shape === "note" ? (b.w = T + 2 * t.padding + 6, b.h = R + 18) : (b.w = Math.max(T + 2 * t.padding + 12, 80), b.h = Math.max(R + 24, 44));
      }
      E = Ot(b.w, b.h);
    }
    E.seq = O.length, O.push(b), x.push(E);
  }
  o.nodes.forEach((t, r) => {
    var p;
    x[r].parent = t.parentId !== void 0 && (p = m.get(t.parentId)) != null ? p : -1;
  });
  let k = [], I = [], D = [];
  for (let t of o.edges) {
    let r = m.get(t.start), p = m.get(t.end);
    if (r === void 0 || p === void 0)
      continue;
    let y = t.relationshipType === "include" || t.relationshipType === "extend", A = ae(y ? `\xAB${t.label}\xBB` : t.label, t.labelType === "markdown", f, u, 200);
    r === p && (O[r].loops++, i ? x[r].h += 2 * (ot + (A.height > 0 ? A.height + 8 : 0)) : x[r].w += 2 * (ot + (A.width > 0 ? A.width + 12 : 0))), D.push(t), I.push(A), k.push({ src: r, dst: p, minlen: t.minlen, labelW: A.width > 0 ? A.width + 12 : 0, labelH: A.height > 0 ? A.height + 4 : 0, route: [], labelX: 0, labelY: 0 });
  }
  let Y = Is(x, k, w, { nodeSep: Yt(a, "nodeSpacing", pa), edgeSep: da, rankSep: Yt(a, "rankSpacing", ca), portSep: 20 }), te = Os(e.title, f, s, 4e3), pe = te.height > 0 ? te.height + 12 : 0, he = Math.max(Y.width, te.width), Le = h + (he - Y.width) / 2, st = h + pe;
  xs(x, k, Le, st);
  let ne = Math.ceil(he + 2 * h), de = Math.ceil(Y.height + pe + 2 * h), ve = /* @__PURE__ */ new Map();
  for (let t of k)
    ws(ve, t.route);
  ha(k, x, O);
  let ye = "", ge = "";
  for (let t = 0; t < O.length; t++) {
    let r = O[t], p = x[t], y = r.node, A = Lt(y.cssClasses.replace(/^default\s?/, "")), S = ct(y.id), b = r.style.text, E = r.style.shape, T = r.w, R = r.h;
    if (r.kind === 4) {
      let N = p.x - p.w / 2, v = p.y - p.h / 2, L = ` fill="var(--_a)" fill-opacity="0.5" stroke="var(--_b)"${E}`, M = ` class="pele-cluster-label" fill="var(--_m)"${b}`, K;
      if (y.boundaryType === "package") {
        let J = Math.min(r.label.width + 2 * pt + 8, p.w), z = r.label.height + 2 * pt;
        K = `<rect class="pele-boundary-tab" x="${$(N)}" y="${$(v)}" width="${$(J)}" height="${$(z)}"${L}/><rect x="${$(N)}" y="${$(v + z)}" width="${$(p.w)}" height="${$(p.h - z)}"${L}/>` + Z(r.label, N + J / 2, v + z / 2, M, d);
      } else
        K = `<rect x="${$(N)}" y="${$(v)}" width="${$(p.w)}" height="${$(p.h)}"${Je(L)}/>` + Z(r.label, Aa(p, r.label.width, ve), v + 8 + r.label.height / 2, M, d);
      ye += `<g class="pele-cluster pele-boundary${A}" data-id="${S}">${K}</g>`;
      continue;
    }
    let _, W;
    if (r.kind === 0) {
      W = "pele-actor";
      let N = -R / 2, v = N + Re + Ut + r.stereotype.height / 2;
      _ = `<g class="pele-actor-figure" transform="translate(0,${$(N + Re / 2)})">${ga(r, d)}</g>` + Z(r.stereotype, 0, v, ` class="pele-stereotype" font-size="${g}" fill="var(--_m)"`, d) + Z(r.label, 0, R / 2 - r.label.height / 2, ` class="pele-label"${b}`, d);
    } else if (r.kind === 3) {
      W = "pele-json";
      let N = -T / 2, v = -R / 2 + r.headH, L = "", M = `M${$(N)},${$(v)}H${$(N + T)}`;
      r.keyW > 0 && (M += `M${$(N + r.keyW)},${$(v)}V${$(R / 2)}`);
      for (let [K, J] of r.rows) {
        let z = Math.max(K.height, J.height, Math.round(u * 1.5)) + dt;
        L += Z(K, N + Te + K.width / 2, v + z / 2, ' class="pele-json-key" fill="var(--_m)"', d) + $a(J, N + r.keyW + Te, v + z / 2, ` class="pele-json-value"${b}`, d), v += z;
      }
      _ = `<rect x="${$(N)}" y="${$(-R / 2)}" width="${$(T)}" height="${$(R)}"${Je(Ie + E)}/><path class="pele-json-lines" d="${M}" fill="none" stroke="var(--_b)"${r.style.line}/>` + Z(r.label, 0, -R / 2 + r.headH / 2, ` class="pele-label" font-weight="var(--_hw)"${b}`, d) + `<g font-size="${u}">${L}</g>`;
    } else {
      let N = r.stereotype.height / 2, v;
      if (r.kind === 1) {
        if (W = "pele-usecase", v = `<ellipse rx="${$(T / 2)}" ry="${$(R / 2)}"${Ie}${E}/>`, y.business) {
          let L = T / 2 - 15, M = T / 2 - 5, K = (J) => R / 2 * Math.sqrt(1 - (J / (T / 2)) ** 2);
          v += `<path class="pele-business" d="M${$(L)},${$(K(L))}L${$(M)},${$(-K(M))}" fill="none" stroke="var(--_b)"${r.style.line}/>`;
        }
      } else if (y.shape === "note") {
        W = "pele-note";
        let L = T / 2, M = R / 2;
        v = `<path d="M${$(-L)},${$(-M)}H${$(L - Ue)}L${$(L)},${$(Ue - M)}V${$(M)}H${$(-L)}Z" fill="var(--_a)" stroke="var(--_b)" stroke-linejoin="round"${E}/><path d="M${$(L - Ue)},${$(-M)}V${$(Ue - M)}H${$(L)}" fill="none" stroke="var(--_b)" stroke-linejoin="round"${r.style.line}/>`;
      } else
        W = "pele-usecase", v = `<rect x="${$(-T / 2)}" y="${$(-R / 2)}" width="${$(T)}" height="${$(R)}"${Je(Ie + E)}/>`;
      _ = v + Z(r.stereotype, 0, -r.label.height / 2, ` class="pele-stereotype" font-size="${g}" fill="var(--_m)"`, d) + Z(r.label, 0, N, ` class="pele-label"${y.shape === "note" ? ` font-size="${u}"` : ""}${b}`, d);
    }
    ge += `<g class="pele-node ${W}${A}" data-id="${S}" transform="translate(${$(p.x)},${$(p.y)})">${_}</g>`;
  }
  let ce = "", se = "", Ne = /* @__PURE__ */ new Map();
  for (let t = 0; t < k.length; t++) {
    let r = k[t], p = D[t], y = I[t], A = p.style.length > 0 || p.cssCompiledStyles.length > 0 ? kt(p.cssCompiledStyles.concat(p.style)) : void 0, S = p.arrowTypeStart, b = p.arrowTypeEnd, E;
    if (r.src === r.dst) {
      let _ = x[r.src], W = O[r.src], N = (Ae = Ne.get(r.src)) != null ? Ae : 0;
      Ne.set(r.src, N + 1);
      let v = i ? 2 : 1, L = Math.min(As(W, v) / 2, 8 + N * 6), M = ot + N * 8, [K, J] = yt(W, _, v, -L), [z, Be] = yt(W, _, v, L), je = Math.hypot(M, L) || 1, ue = i ? L / je : M / je, fe = i ? M / je : L / je, Fe = Ye(S), Et = Ye(b), Tt = (wt, Rt, It, Pe) => i ? `${$(wt + It * L * (Pe ? 1 : 0))},${$(Rt + Pe)}` : `${$(wt + Pe)},${$(Rt + It * L * (Pe ? 1 : 0))}`, $s = i ? K - ue * Fe : K + ue * Fe, ms = i ? J + fe * Fe : J - fe * Fe, Cs = z + ue * Et, Ss = Be + fe * Et;
      E = { d: `M${$($s)},${$(ms)}C${Tt(K, J, -1, M)} ${Tt(z, Be, 1, M)} ${$(Cs)},${$(Ss)}`, sx: K, sy: J, sdx: i ? ue : -ue, sdy: i ? -fe : fe, ex: z, ey: Be, edx: -ue, edy: -fe }, i ? (r.labelX = _.x, r.labelY = Math.max(J, Be) + M * 0.75 + 6 + y.height / 2) : (r.labelX = Math.max(K, z) + M * 0.75 + 8 + y.width / 2, r.labelY = _.y);
    } else {
      if (r.route.length < 6)
        continue;
      E = Ms(r.route, void 0, Ye(S), Ye(b));
    }
    let T = A != null && A.stroke ? js(A.stroke) : "var(--_l)", R = p.internal ? "2 3" : p.pattern === "dotted" ? "5 4" : p.animate ? "9 5" : "";
    if (ce += `<g class="pele-edge pele-${p.relationshipType}${Lt(p.classes.replace(/^default relationship relationship-\S+\s?/, ""))}" data-id="${ct(p.id)}"${($e = A == null ? void 0 : A.line) != null ? $e : ""}><path d="${E.d}"${R ? ` stroke-dasharray="${R}"` : ""}/>` + Jt(S, E.sx, E.sy, E.sdx, E.sdy, T) + Jt(b, E.ex, E.ey, E.edx, E.edy, T) + "</g>", y.width > 0) {
      let _ = r.labelX, W = r.labelY, N = p.relationshipType === "include" || p.relationshipType === "extend";
      se += Ds(p.id, y, _, W, (N ? ' fill="var(--_m)"' : "") + ((me = A == null ? void 0 : A.text) != null ? me : ""), d);
    }
  }
  return { svg: Fs("usecase", ne, de, s, l, e, Z(te, ne / 2, h + te.height / 2, ' class="pele-title" font-weight="var(--_tw)"') + (ye ? `<g class="pele-clusters">${ye}</g>` : "") + (ce ? `<g class="pele-edges" fill="none" stroke="var(--_l)" stroke-linecap="round">${ce}</g>` : "") + (se ? `<g class="pele-edge-labels" font-size="${u}">${se}</g>` : "") + `<g class="pele-nodes">${ge}</g>`), width: ne, height: de, links: [] };
}
function Aa(e, a, l) {
  let n = l.get(Math.round(e.y - e.h / 2));
  if (a === 0 || n === void 0)
    return e.x;
  let o = e.x - e.w / 2 + 6, s = e.x + e.w / 2 - 6, u = n.filter((i) => i > o && i < s).sort((i, m) => i - m);
  u.push(s);
  let g = a / 2 + 6, f = e.x, h = 1 / 0, d = 0, w = o;
  for (let i of u) {
    if (i - w >= 2 * g) {
      let m = Math.min(Math.max(e.x, w + g), i - g);
      Math.abs(m - e.x) < h && (h = Math.abs(m - e.x), f = m);
    } else
      h === 1 / 0 && i - w > d && (d = i - w, f = (w + i) / 2);
    w = i;
  }
  return f;
}
function $a(e, a, l, n, o) {
  if (e.lines.length < 2)
    return Z(e, a + e.width / 2, l, n, o);
  let s = "";
  for (let u = 0; u < e.lines.length; u++)
    s += Z(Ks(e, u), a + e.widths[u] / 2, l - e.height / 2 + Ps(e, u), n, o);
  return s;
}
var xa = { type: "usecase", math: !0, parse: (e, a, l) => la(e, l), render: ba };
export {
  xa as usecase
};
//# sourceMappingURL=NIR2UTOY-c89a7cc0.js.map

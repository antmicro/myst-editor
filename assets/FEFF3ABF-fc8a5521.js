var zt = Object.defineProperty;
var Nt = (t, h, i) => h in t ? zt(t, h, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[h] = i;
var N = (t, h, i) => (Nt(t, typeof h != "symbol" ? h + "" : h, i), i);
import { Y as Wt, X as yt, W as At } from "./ZENPE7TI-bb8feaaa.js";
import { d as It, q as Tt, a as R, r as jt } from "./lazy-950901f8.js";
import { g as qt } from "./ECH2OJJK-8814648a.js";
import { f as Ft, N as Ut, M as Yt } from "./6B2VI7MB-716cdb27.js";
import { h as Bt } from "./DKTLEL5E-e2b762b2.js";
import { x as L, b as wt, S as xt, u as Mt, L as kt, V as bt, m as Ht, l as vt, e as _t, d as Ot, i as Vt, $ as Dt, s as Et } from "./3G3HCGVE-09704139.js";
var Kt = class {
  constructor() {
    N(this, "type", "kanban");
    N(this, "title");
    N(this, "sections", []);
    N(this, "getType", At);
    N(this, "last");
    N(this, "sectionLevel", 0);
    N(this, "misplaced");
  }
  addNode(t, h, i, c, l) {
    let r = { id: h, level: t, label: i };
    if (l !== void 0) {
      let a = l.includes(`
`) ? l + `
` : `{
` + l + `
}`, e;
      try {
        e = Tt(a);
      } catch (o) {
        throw new R(`Metadata of "${r.id}" is not valid YAML. ${o.message}`, "syntax", { type: "kanban" });
      }
      if (e !== null && typeof e == "object" && !Array.isArray(e)) {
        let o = e.shape ? String(e.shape) : "";
        if (o !== o.toLowerCase() || o.includes("_"))
          throw new R(`No such shape: ${o}. Shape names should be lowercase.`, "semantic", { type: "kanban" });
        e.label && (r.label = String(e.label)), e.icon && (r.icon = String(e.icon)), e.assigned && (r.assigned = String(e.assigned)), e.ticket && (r.ticket = String(e.ticket)), e.priority && (r.priority = String(e.priority));
      }
    }
    if (this.misplaced)
      throw new R(`Items without section detected, found section ("${this.misplaced.label}")`, "semantic", { type: "kanban" });
    let n = this.sections;
    if (n.length === 0 && (this.sectionLevel = t), this.last = r, t === this.sectionLevel) {
      let a = r;
      a.items = [], n.push(a);
    } else
      n[n.length - 1].items.push(r), t < this.sectionLevel && (this.misplaced = r);
  }
  decorateNode(t) {
    let h = this.last;
    !t || !h || (t.icon && (h.icon = t.icon), t.class && (h.cssClasses = t.class));
  }
};
function Pt(t, h) {
  Wt(t, h, !0);
}
var b = 12, _ = 8, x = 10, X = 8, Gt = 4, D = 6, Jt = /* @__PURE__ */ new Map([["very high", `stroke="${vt}"`], ["high", `stroke="${vt}" opacity="0.5"`], ["low", 'stroke="var(--_m)" opacity="0.5"'], ["very low", 'stroke="var(--_m)"']]);
function G(t, h, i, c, l, r = 0) {
  let n = _t(t, h, i, c, l, r);
  if (n.width <= l)
    return n;
  let a = [], e = [], o = 0, w = [], d = 0, g = () => {
    a.push(w), e.push(d), o = Math.max(o, d), w = [], d = 0;
  };
  for (let k = 0; k < n.lines.length; k++) {
    if (n.widths[k] <= l) {
      w = n.lines[k], d = n.widths[k], g();
      continue;
    }
    for (let p of n.lines[k]) {
      if (p.icon !== void 0 || p.math) {
        d > 0 && d + p.width > l && g(), w.push(p), d += p.width;
        continue;
      }
      let v = "", A = d;
      for (let F of p.text) {
        let S = i.width(F, c, p.style);
        d > 0 && d + S > l && (v && w.push({ text: v, style: p.style, width: d - A }), g(), v = "", A = 0), v += F, d += S;
      }
      v && w.push({ text: v, style: p.style, width: d - A });
    }
    g();
  }
  let W = { ...n, lines: a, widths: e, width: o, height: a.length * n.lineHeight };
  return n.heights ? Ot(W) : W;
}
function E(t, h, i, c, l, r = !1) {
  let n = "";
  for (let a = 0; a < t.lines.length; a++) {
    let e = t.lines[a], o = i + Vt(t, a);
    if (e.length === 1 && e[0].icon === void 0 && e[0].math === void 0 && (e[0].style & 56) === 0)
      n += `<text${Dt(c, e[0].style)} x="${L(h)}" y="${L(o + t.size * 0.35)}"${r ? ' text-anchor="end"' : ""}>${xt(e[0].text)}</text>`;
    else {
      let w = t.widths[a];
      n += bt(Et(t, a), h + (r ? -w : w) / 2, o, c, l);
    }
  }
  return n;
}
var q = (t) => !!t && jt(t) !== "";
function Qt(t, h, i) {
  var dt, mt, ft, gt, pt, $t, ut;
  let c = (dt = i.fontSize) != null ? dt : 16, l = Math.round(c * 0.875), r = Math.round(c * 1.5), n = Math.round(l * 1.5), a = (mt = i.measurer) != null ? mt : It(i.fontFamily, i.fontFamilyMono), e = (ft = i.padding) != null ? ft : 8, o = i.icons, w = (gt = h.kanban) != null ? gt : {}, d = w.sectionWidth, g = l * 1.25, W = 0, k = (s, $, m) => {
    if (!(!s || !s.includes("$$")))
      for (let f of _t(s, !0, a, $, 1 / 0).lines)
        for (let C of f)
          C.math && (W = Math.max(W, C.math.width + m));
  };
  for (let s of t.sections) {
    let $ = a.width(String(s.items.length), l, 0);
    k(s.label, c, 2 * _ + 8 + $ + 12 + (q(s.icon) ? g + D : 0));
    for (let m of s.items) {
      let f = 2 * (_ + x);
      k(m.label, l, f + (q(m.icon) ? g + D : 0)), k(m.ticket, l, f), k(m.assigned, l, f);
    }
  }
  let p = Math.max(typeof d == "number" && d > 0 ? Math.min(Math.max(d, 80), 2e3) : 200, Math.ceil(W)), v = i.maxWidth !== void 0 && i.maxWidth > 0 ? i.maxWidth - 2 * e : 1 / 0, A = t.sections.length, F = A * (p + b) - b <= v, S = F ? Math.max(A, 1) : Math.max(1, Math.floor((v + b) / (p + b))), U = F ? p : Math.max(Math.min(p, v), Math.min(Math.floor((v + b) / S) - b, p * 2), Math.ceil(W)), Z = typeof w.ticketBaseUrl == "string" ? w.ticketBaseUrl : "", Y = U - 2 * _, K = Y - 2 * x, tt = [], I = t.sections, et = [], it = [], st = [], T = r, lt = [];
  for (let s of I) {
    let $ = a.width(String(s.items.length), l, 0), m = $ + 12 + (q(s.icon) ? g + D : 0), f = G(s.label, !0, a, c, Y - 8 - m, 1);
    T = Math.max(T, f.height), it.push($), et.push(f);
    let C = [], y = 0;
    for (let u of s.items) {
      let O = G(u.label, !0, a, l, K - (q(u.icon) ? g + D : 0)), z = G(u.ticket, !1, a, l, K), M = G(u.assigned, !1, a, l, K), j = z.width + M.width + 8 > K ? z.height + M.height : Math.max(z.height, M.height), V = 2 * x + Math.max(O.height, n) + (j ? Gt + j : 0);
      C.push({ item: u, label: O, ticket: z, assigned: M, meta: j, height: V }), y += V + X;
    }
    st.push(C), lt.push(y);
  }
  T += 2 * _;
  let B = [], P = [];
  for (let s = 0, $ = 0; s < I.length; s += S) {
    let m = X;
    for (let f = s; f < Math.min(s + S, I.length); f++)
      m = Math.max(m, lt[f]);
    P.push($), B.push(T + m), $ += T + m + b;
  }
  let St = B.length > 0 ? P[P.length - 1] + B[B.length - 1] : 0, H = qt(t.title, a, c, Bt(i)), at = H.height > 0 ? H.height + 16 : 0, ht = Math.max(Math.min(I.length, S) * (U + b) - b, 0), nt = Math.max(ht, H.width), Lt = e + (nt - ht) / 2, ot = U - _ - 4, rt = "";
  for (let s = 0; s < I.length; s++) {
    let $ = I[s], m = Math.floor(s / S), f = `<rect width="${U}" height="${L(B[m])}" fill="var(--_s)"${wt}/>` + E(et[s], _ + 4, _, ' class="pele-cluster-label" font-weight="var(--_hw)"', o) + `<text class="pele-count" x="${ot}" y="${L(_ + r / 2 + l * 0.35)}" text-anchor="end" font-size="${l}" fill="var(--_m)">${$.items.length}</text>`;
    q($.icon) && (f += yt($.icon, ot - it[s] - D - g, _ + (r - g) / 2, g, o));
    let C = T;
    for (let y of st[s]) {
      let u = y.item, O = ((pt = u.priority) != null ? pt : "").trim().toLowerCase(), z = Jt.get(O), M = `<rect width="${Y}" height="${L(y.height)}" fill="var(--_bg)" stroke="var(--_b)"${wt}/>`;
      z !== void 0 && (M += `<path class="pele-priority" d="M2.5,5V${L(y.height - 5)}" fill="none" ${z} stroke-width="3" stroke-linecap="round"/>`), M += E(y.label, x, x, ' class="pele-label"', o), q(u.icon) && (M += yt(u.icon, Y - x - g, x + (n - g) / 2, g, o));
      let j = y.height - x;
      if (u.ticket) {
        let V = j - y.meta, Q = Z ? Ft(Ut(Z.replace("#TICKET#", () => u.ticket)), i) : void 0;
        Q === void 0 ? M += E(y.ticket, x, V, ' class="pele-ticket" fill="var(--_m)"', o) : (M += `<a href="${xt(Q)}" target="_blank"${Yt(i)}>` + E(y.ticket, x, V, ' class="pele-ticket" fill="var(--_c)"', o) + "</a>", tt.push({ id: u.id, href: Q, internal: !1 }));
      }
      u.assigned && (M += E(y.assigned, Y - x, j - y.assigned.height, ' class="pele-assigned" fill="var(--_m)"', o, !0)), f += `<g class="pele-node pele-card${z === void 0 ? "" : " pele-priority-" + O.replace(" ", "-")}${Mt(($t = u.cssClasses) != null ? $t : "")}" data-id="${kt(u.id)}" transform="translate(${_},${L(C)})" font-size="${l}">${M}</g>`, C += y.height + X;
    }
    rt += `<g class="pele-cluster pele-column${Mt((ut = $.cssClasses) != null ? ut : "")}" data-id="${kt($.id)}" transform="translate(${L(Lt + s % S * (U + b))},${L(e + at + P[m])})">${f}</g>`;
  }
  let J = Math.ceil(nt + 2 * e), ct = Math.ceil(St + at + 2 * e), Ct = bt(H, J / 2, e + H.height / 2, ' class="pele-title" font-weight="var(--_tw)"') + rt;
  return { svg: Ht("kanban", J, ct, c, i, {}, Ct), width: J, height: ct, links: tt };
}
var le = { type: "kanban", math: !0, parse(t, h, i) {
  let c = new Kt();
  return c.title = i, Pt(t, c), c;
}, render: Qt };
export {
  le as kanban
};
//# sourceMappingURL=FEFF3ABF-fc8a5521.js.map

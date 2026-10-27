import { f as p, x as a } from "./3G3HCGVE-09704139.js";
var n = 18, d = 12, z = 12, o = (e, $, r) => (r ? $ : e) - 2 * z, x = (e) => ($, r, t) => t ? 0 : $ - 2 * e(r) - 2 * z;
function V(e, $, r) {
  let t = Math.min(1, Math.abs(e) / $);
  return r * (1 - Math.sqrt(1 - t * t));
}
var u = (e, $, r, t) => r & 1 ? V(t, $ / 2, e / 2) : V(t, e / 2, $ / 2), M = (e, $, r) => (r ? $ : e) * 0.6, q = (e, $, r, t) => r & 1 ? 0 : V(t, e / 2, Math.min(12, Math.max(6, e / 14))), y = (e, $) => () => ({ w: e, h: $, dy: 0 });
function v(e, $, r) {
  let t = Math.max(1.6 * e + 40, 80), i = ($ + 10) / (1 - (e + 8) / t), s = i / 2 - 10 - $ / 2;
  return { w: t, h: i, dy: r ? -s : s };
}
function f(e, $) {
  return `<path d="${e}"${$}/>`;
}
var g = (e, $, r) => r & 1 ? $ / 8 : 0, m = (e, $) => ({ w: Math.max(e + 2 * n, 2 * n + 12), h: $ + 2 * d, dy: 0 });
function c(e, $) {
  let r = "";
  for (let t = 0; t < e.length; t += 2)
    r += (t ? " " : "") + a(e[t]) + "," + a(e[t + 1]);
  return `<polygon points="${r}"${$}/>`;
}
function w(e, $, r, t = "") {
  return `<rect x="${a(-e / 2)}" y="${a(-$ / 2)}" width="${a(e)}" height="${a($)}"${t}${r}/>`;
}
var _ = { rect: { size: m, span: o, draw: (e, $, r) => w(e, $, p(r)) }, rounded: { size: m, span: o, draw: (e, $, r) => w(e, $, r, ` rx="${a(Math.min(12, $ / 2))}"`) }, stadium: { inset: (e, $, r, t) => r & 1 ? V(t, $ / 2, $ / 2) : 0, span: (e, $, r) => r ? $ * 0.6 : e - $, size: (e, $) => {
  let r = $ + 2 * d;
  return { w: e + r * 0.5 + 2 * n - 8, h: r, dy: 0 };
}, draw: (e, $, r) => w(e, $, r, ` rx="${a($ / 2)}"`) }, "fr-rect": { span: o, size: (e, $) => ({ w: e + 2 * n + 16, h: $ + 2 * d, dy: 0 }), draw: (e, $, r, t) => {
  let i = e / 2 - 8;
  return w(e, $, p(r)) + `<path d="M${a(-i)},${a(-$ / 2)}V${a($ / 2)}M${a(i)},${a(-$ / 2)}V${a($ / 2)}" fill="none"${t}/>`;
} }, cyl: { inset: q, span: (e, $, r) => r ? $ - 2 * z - 12 : e * 0.6, size: (e, $) => {
  let r = Math.max(e + 2 * n, 56), t = Math.min(12, Math.max(6, r / 14));
  return { w: r, h: $ + 2 * d + 2 * t, dy: t / 2 };
}, draw: (e, $, r, t) => {
  let i = e / 2, s = Math.min(12, Math.max(6, e / 14)), l = -$ / 2 + s, h = $ / 2 - s;
  return `<path d="M${a(-i)},${a(l)}A${a(i)},${a(s)} 0 0 1 ${a(i)},${a(l)}V${a(h)}A${a(i)},${a(s)} 0 0 1 ${a(-i)},${a(h)}Z"${r}/><path d="M${a(-i)},${a(l)}A${a(i)},${a(s)} 0 0 0 ${a(i)},${a(l)}" fill="none"${t}/>`;
} }, circle: { inset: u, span: M, size: (e, $) => {
  let r = Math.max(Math.sqrt(e * e + $ * $) + 16, 44);
  return { w: r, h: r, dy: 0 };
}, draw: (e, $, r) => `<circle r="${a(e / 2)}"${r}/>` }, "dbl-circ": { inset: u, span: M, size: (e, $) => {
  let r = Math.max(Math.sqrt(e * e + $ * $) + 26, 54);
  return { w: r, h: r, dy: 0 };
}, draw: (e, $, r, t) => `<circle r="${a(e / 2)}"${r}/><circle r="${a(e / 2 - 5)}" fill="none"${t}/>` }, ellipse: { inset: u, span: M, size: (e, $) => ({ w: e * 1.3 + 2 * n, h: $ * 1.2 + 2 * d, dy: 0 }), draw: (e, $, r) => `<ellipse rx="${a(e / 2)}" ry="${a($ / 2)}"${r}/>` }, diam: { inset: (e, $, r, t) => r & 1 ? Math.abs(t) * e / $ : Math.abs(t) * $ / e, span: (e, $, r) => (r ? $ : e) * 0.6, size: (e, $) => {
  let r = e + 16, t = $ + 8;
  return { w: r + 1.6 * t, h: r / 1.6 + t, dy: 0 };
}, draw: (e, $, r) => c([0, -$ / 2, e / 2, 0, 0, $ / 2, -e / 2, 0], r) }, hex: { inset: (e, $, r, t) => r & 1 ? Math.abs(t) / 2 : 0, span: (e, $, r) => r ? $ * 0.5 : e - $ / 2 - z, size: (e, $) => {
  let r = $ + 2 * d;
  return { w: e + 2 * n + r / 2, h: r, dy: 0 };
}, draw: (e, $, r) => {
  let t = $ / 4;
  return c([-e / 2 + t, -$ / 2, e / 2 - t, -$ / 2, e / 2, 0, e / 2 - t, $ / 2, -e / 2 + t, $ / 2, -e / 2, 0], r);
} }, odd: { inset: (e, $, r) => r === 3 ? $ / 4 : 0, span: x(() => 0), size: (e, $) => {
  let r = $ + 2 * d;
  return { w: e + 2 * n + r / 4, h: r, dy: 0 };
}, draw: (e, $, r) => {
  let t = $ / 4;
  return c([-e / 2, -$ / 2, e / 2, -$ / 2, e / 2, $ / 2, -e / 2, $ / 2, -e / 2 + t, 0], r);
} }, "lean-r": { inset: g, span: x((e) => e / 4), size: (e, $) => {
  let r = $ + 2 * d;
  return { w: e + 2 * n + r / 2, h: r, dy: 0 };
}, draw: (e, $, r) => {
  let t = $ / 4;
  return c([-e / 2 + t, -$ / 2, e / 2, -$ / 2, e / 2 - t, $ / 2, -e / 2, $ / 2], r);
} }, "lean-l": { inset: g, span: x((e) => e / 4), size: (e, $) => {
  let r = $ + 2 * d;
  return { w: e + 2 * n + r / 2, h: r, dy: 0 };
}, draw: (e, $, r) => {
  let t = $ / 4;
  return c([-e / 2, -$ / 2, e / 2 - t, -$ / 2, e / 2, $ / 2, -e / 2 + t, $ / 2], r);
} }, "trap-b": { inset: g, span: x((e) => e / 4), size: (e, $) => {
  let r = $ + 2 * d;
  return { w: e + 2 * n + r / 2, h: r, dy: 0 };
}, draw: (e, $, r) => {
  let t = $ / 4;
  return c([-e / 2 + t, -$ / 2, e / 2 - t, -$ / 2, e / 2, $ / 2, -e / 2, $ / 2], r);
} }, "trap-t": { inset: g, span: x((e) => e / 4), size: (e, $) => {
  let r = $ + 2 * d;
  return { w: e + 2 * n + r / 2, h: r, dy: 0 };
}, draw: (e, $, r) => {
  let t = $ / 4;
  return c([-e / 2, -$ / 2, e / 2, -$ / 2, e / 2 - t, $ / 2, -e / 2 + t, $ / 2], r);
} }, text: { span: o, size: (e, $) => ({ w: e + 8, h: $ + 8, dy: 0 }), draw: (e, $) => w(e, $, ' fill="none" stroke="none"') }, "sm-circ": { noLabel: !0, inset: u, span: M, size: y(14, 14), draw: (e, $, r) => `<circle r="${a(e / 2)}"${r}/>` }, "f-circ": { noLabel: !0, inset: u, span: M, size: y(14, 14), draw: (e, $, r, t) => `<circle r="${a(e / 2)}" fill="var(--_l)"${t}/>` }, "fr-circ": { noLabel: !0, inset: u, span: M, size: y(18, 18), draw: (e, $, r, t) => `<circle r="${a(e / 2)}"${r}/><circle r="${a(e / 2 - 4)}" fill="var(--_l)"${t}/>` }, fork: { noLabel: !0, span: (e, $, r) => (r ? $ : e) - 8, size: y(72, 8), draw: (e, $, r, t) => w(e, $, ` fill="var(--_l)"${t}`, ' rx="2"') }, "notch-rect": { size: m, span: o, draw: (e, $, r) => c([-e / 2 + 10, -$ / 2, e / 2, -$ / 2, e / 2, $ / 2, -e / 2, $ / 2, -e / 2, -$ / 2 + 10], r) }, "lin-rect": { span: o, size: (e, $) => ({ w: e + 2 * n + 8, h: $ + 2 * d, dy: 0 }), draw: (e, $, r, t) => w(e, $, p(r)) + `<path d="M${a(-e / 2 + 8)},${a(-$ / 2)}V${a($ / 2)}" fill="none"${t}/>` }, "div-rect": { span: o, size: (e, $) => ({ w: e + 2 * n, h: $ + 2 * d + 8, dy: 4 }), draw: (e, $, r, t) => w(e, $, p(r)) + `<path d="M${a(-e / 2)},${a(-$ / 2 + 8)}H${a(e / 2)}" fill="none"${t}/>` }, "win-pane": { span: o, size: (e, $) => ({ w: e + 2 * n + 8, h: $ + 2 * d + 8, dy: 4 }), draw: (e, $, r, t) => w(e, $, p(r)) + `<path d="M${a(-e / 2 + 8)},${a(-$ / 2)}V${a($ / 2)}M${a(-e / 2)},${a(-$ / 2 + 8)}H${a(e / 2)}" fill="none"${t}/>` }, tri: { inset: (e, $, r) => r & 1 ? e / 4 : 0, size: (e, $) => v(e, $, !1), draw: (e, $, r) => c([0, -$ / 2, e / 2, $ / 2, -e / 2, $ / 2], r) }, "flip-tri": { inset: (e, $, r) => r & 1 ? e / 4 : 0, size: (e, $) => v(e, $, !0), draw: (e, $, r) => c([-e / 2, -$ / 2, e / 2, -$ / 2, 0, $ / 2], r) }, "sl-rect": { inset: (e, $, r) => r === 0 ? 5 : 0, size: (e, $) => ({ w: e + 2 * n, h: $ + 2 * d + 10, dy: 5 }), draw: (e, $, r) => c([-e / 2, -$ / 2 + 10, e / 2, -$ / 2, e / 2, $ / 2, -e / 2, $ / 2], r) }, "notch-pent": { span: o, size: (e, $) => ({ w: e + 2 * n, h: $ + 2 * d, dy: 0 }), draw: (e, $, r) => c([-e / 2 + 10, -$ / 2, e / 2 - 10, -$ / 2, e / 2, -$ / 2 + 10, e / 2, $ / 2, -e / 2, $ / 2, -e / 2, -$ / 2 + 10], r) }, hourglass: { noLabel: !0, inset: (e, $, r) => r & 1 ? e / 2 : 0, size: y(32, 40), draw: (e, $, r) => c([-e / 2, -$ / 2, e / 2, -$ / 2, -e / 2, $ / 2, e / 2, $ / 2], r) }, delay: { size: (e, $) => {
  let r = $ + 2 * d;
  return { w: e + 2 * n + r / 4, h: r, dy: 0 };
}, draw: (e, $, r) => {
  let t = $ / 2;
  return `<path d="M${a(-e / 2)},${a(-t)}H${a(e / 2 - t)}A${a(t)},${a(t)} 0 0 1 ${a(e / 2 - t)},${a(t)}H${a(-e / 2)}Z"${r}/>`;
} }, "h-cyl": { size: (e, $) => {
  let r = $ + 2 * d, t = Math.min(12, r / 4);
  return { w: e + 2 * n + 2 * t, h: r, dy: 0 };
}, draw: (e, $, r, t) => {
  let i = $ / 2, s = Math.min(12, $ / 4), l = -e / 2 + s, h = e / 2 - s;
  return `<path d="M${a(l)},${a(-i)}H${a(h)}A${a(s)},${a(i)} 0 0 1 ${a(h)},${a(i)}H${a(l)}A${a(s)},${a(i)} 0 0 1 ${a(l)},${a(-i)}Z"${r}/><path d="M${a(h)},${a(-i)}A${a(s)},${a(i)} 0 0 0 ${a(h)},${a(i)}" fill="none"${t}/>`;
} }, "cross-circ": { noLabel: !0, inset: u, span: M, size: y(44, 44), draw: (e, $, r, t) => {
  let i = e / 2, s = i * Math.SQRT1_2;
  return `<circle r="${a(i)}"${r}/><path d="M${a(-s)},${a(-s)}L${a(s)},${a(s)}M${a(s)},${a(-s)}L${a(-s)},${a(s)}" fill="none"${t}/>`;
} }, "st-rect": { span: (e, $, r) => (r ? $ : e) - 2 * z - 8, size: (e, $) => ({ w: e + 2 * n + 8, h: $ + 2 * d + 8, dy: 4 }), draw: (e, $, r) => {
  let t = e - 8, i = $ - 8, s = "";
  for (let l = 0; l < 3; l++) {
    let h = -e / 2 + (2 - l) * 4, A = -$ / 2 + l * 4;
    s += `<rect x="${a(h)}" y="${a(A)}" width="${a(t)}" height="${a(i)}"${p(r)}/>`;
  }
  return s;
} }, doc: { inset: (e, $, r) => r === 2 ? 10 : 0, size: (e, $) => ({ w: e + 2 * n, h: $ + 2 * d + 10, dy: -5 }), draw: (e, $, r) => L(e, $, r) }, flag: { inset: (e, $, r) => r & 1 ? 0 : 8, size: (e, $) => ({ w: e + 2 * n, h: $ + 2 * d + 16, dy: 0 }), draw: (e, $, r) => {
  let t = e / 2, i = $ / 2 - 8, s = e / 4;
  return `<path d="M${a(-t)},${a(-i)}q${a(s)},-10 ${a(2 * s)},0t${a(2 * s)},0V${a(i)}q${a(-s)},10 ${a(-2 * s)},0t${a(-2 * s)},0Z"${r}/>`;
} }, datastore: { size: m, span: o, draw: (e, $, r, t) => w(e, $, r.replace('stroke="var(--_b)"', 'stroke="none"')) + `<path d="M${a(-e / 2)},${a(-$ / 2)}H${a(e / 2)}M${a(-e / 2)},${a($ / 2)}H${a(e / 2)}" fill="none"${t}/>` }, folder: { size: (e, $) => ({ w: Math.max(e + 2 * n, 64), h: $ + 2 * d + 8, dy: 4 }), draw: (e, $, r) => {
  let t = e / 2, i = $ / 2, s = Math.min(e * 0.4, 48);
  return f(`M${a(-t)},${a(-i)}H${a(-t + s)}L${a(-t + s + 8)},${a(-i + 8)}H${a(t)}V${a(i)}H${a(-t)}Z`, r);
} }, bucket: { size: (e, $) => ({ w: e + 2 * n + 20, h: $ + 2 * d + 10, dy: 3 }), inset: (e, $, r) => r & 1 ? $ / 12 : 0, draw: (e, $, r, t) => {
  let i = e / 2, s = $ / 2, l = 5, h = $ / 6;
  return f(`M${a(-i)},${a(-s + l)}A${a(i)},${a(l)} 0 0 1 ${a(i)},${a(-s + l)}L${a(i - h)},${a(s - l)}A${a(i - h)},${a(l)} 0 0 1 ${a(-i + h)},${a(s - l)}Z`, r) + `<path d="M${a(-i)},${a(-s + l)}A${a(i)},${a(l)} 0 0 0 ${a(i)},${a(-s + l)}" fill="none"${t}/>`;
} }, console: { span: o, size: (e, $) => ({ w: Math.max(e + 2 * n, 72), h: $ + 2 * d + 12, dy: 6 }), draw: (e, $, r, t) => w(e, $, p(r)) + `<path d="M${a(-e / 2)},${a(-$ / 2 + 12)}H${a(e / 2)}M${a(-e / 2 + 7)},${a(-$ / 2 + 4)}l3,2.5l-3,2.5M${a(-e / 2 + 13)},${a(-$ / 2 + 9)}h4" fill="none"${t}/>` }, browser: { span: o, size: (e, $) => ({ w: Math.max(e + 2 * n, 72), h: $ + 2 * d + 12, dy: 6 }), draw: (e, $, r, t) => {
  let i = "";
  for (let s = 0; s < 3; s++)
    i += `<circle cx="${a(-e / 2 + 8 + s * 7)}" cy="${a(-$ / 2 + 6)}" r="1.5" fill="none"${t}/>`;
  return w(e, $, p(r)) + `<path d="M${a(-e / 2)},${a(-$ / 2 + 12)}H${a(e / 2)}" fill="none"${t}/>` + i;
} }, person: { size: (e, $) => ({ w: Math.max(e + 2 * n, 56), h: $ + 2 * d + 26, dy: 13 }), draw: (e, $, r) => {
  let t = -$ / 2;
  return `<rect x="${a(-e / 2)}" y="${a(t + 26)}" width="${a(e)}" height="${a($ - 26)}" rx="12"${r}/><circle cy="${a(t + 14)}" r="13"${r}/>`;
} }, bang: { size: (e, $) => ({ w: e + 2 * n + 28, h: $ + 2 * d + 24, dy: 0 }), inset: () => 3, draw: (e, $, r) => {
  let t = [];
  for (let i = 0; i < 28; i++) {
    let s = Math.PI * i / 14 - Math.PI / 2, l = i % 2 === 0 ? 1 : 0.82;
    t.push(Math.cos(s) * (e / 2) * l, Math.sin(s) * ($ / 2) * l);
  }
  return c(t, r);
} }, cloud: { size: (e, $) => ({ w: e + 2 * n + 32, h: $ + 2 * d + 24, dy: 0 }), inset: (e, $, r) => r & 1 ? 2 : 1, draw: (e, $, r) => {
  let t = e / 2, i = $ / 2, s = i * 0.55;
  return f(`M${a(-t + s)},${a(i)}A${a(s)},${a(s)} 0 0 1 ${a(-t + s * 0.6)},${a(-i * 0.1)}A${a(t * 0.42)},${a(i * 0.7)} 0 0 1 ${a(-t * 0.1)},${a(-i * 0.72)}A${a(t * 0.4)},${a(i * 0.62)} 0 0 1 ${a(t * 0.62)},${a(-i * 0.42)}A${a(s * 1.05)},${a(s * 1.05)} 0 0 1 ${a(t - s)},${a(i)}Z`, r);
} }, brace: { size: (e, $) => ({ w: e + 2 * n + 12, h: $ + 2 * d, dy: 0 }), draw: (e, $, r, t) => w(e, $, ' fill="none" stroke="none"') + H(-e / 2 + 12, $, -1, t) }, "brace-r": { size: (e, $) => ({ w: e + 2 * n + 12, h: $ + 2 * d, dy: 0 }), draw: (e, $, r, t) => w(e, $, ' fill="none" stroke="none"') + H(e / 2 - 12, $, 1, t) }, braces: { size: (e, $) => ({ w: e + 2 * n + 24, h: $ + 2 * d, dy: 0 }), draw: (e, $, r, t) => w(e, $, ' fill="none" stroke="none"') + H(-e / 2 + 12, $, -1, t) + H(e / 2 - 12, $, 1, t) }, bolt: { noLabel: !0, size: y(36, 56), inset: (e, $, r) => r & 1 ? e / 4 : 0, draw: (e, $, r) => c([e * 0.15, -$ / 2, -e / 2, $ * 0.08, -e * 0.05, $ * 0.08, -e * 0.15, $ / 2, e / 2, -$ * 0.08, e * 0.05, -$ * 0.08], r) }, "lin-cyl": { inset: q, span: (e, $, r) => r ? $ - 2 * z - 20 : e * 0.6, size: (e, $) => {
  let r = Math.max(e + 2 * n, 56), t = Math.min(12, Math.max(6, r / 14));
  return { w: r, h: $ + 2 * d + 2 * t + 8, dy: t / 2 + 4 };
}, draw: (e, $, r, t) => {
  let i = e / 2, s = Math.min(12, Math.max(6, e / 14)), l = -$ / 2 + s, h = $ / 2 - s, A = (Z) => `M${a(-i)},${a(Z)}A${a(i)},${a(s)} 0 0 0 ${a(i)},${a(Z)}`;
  return f(`M${a(-i)},${a(l)}A${a(i)},${a(s)} 0 0 1 ${a(i)},${a(l)}V${a(h)}A${a(i)},${a(s)} 0 0 1 ${a(-i)},${a(h)}Z`, r) + `<path d="${A(l)}${A(l + 8)}" fill="none"${t}/>`;
} }, "curv-trap": { size: (e, $) => {
  let r = $ + 2 * d;
  return { w: e + 2 * n + r * 0.6, h: r, dy: 0 };
}, draw: (e, $, r) => {
  let t = e / 2, i = $ / 2, s = $ * 0.3;
  return f(`M${a(-t + s)},${a(-i)}H${a(t - s)}A${a(s)},${a(i)} 0 0 1 ${a(t - s)},${a(i)}H${a(-t + s)}L${a(-t)},0Z`, r);
} }, docs: { size: (e, $) => ({ w: e + 2 * n + 8, h: $ + 2 * d + 18, dy: -1 }), inset: (e, $, r) => r === 2 ? 10 : 0, draw: (e, $, r) => {
  let t = "";
  for (let i = 0; i < 3; i++)
    t += `<g transform="translate(${(1 - i) * 4},${(i - 1) * 4})">${L(e - 8, $ - 8, r)}</g>`;
  return t;
} }, "bow-rect": { size: (e, $) => {
  let r = $ + 2 * d;
  return { w: e + 2 * n + r * 0.4, h: r, dy: 0 };
}, inset: (e, $, r) => r === 1 ? $ * 0.2 : 0, draw: (e, $, r) => {
  let t = e / 2, i = $ / 2, s = $ * 0.2;
  return f(`M${a(-t + s)},${a(-i)}H${a(t)}A${a(s)},${a(i)} 0 0 0 ${a(t)},${a(i)}H${a(-t + s)}A${a(s)},${a(i)} 0 0 1 ${a(-t + s)},${a(-i)}Z`, r);
} }, "tag-rect": { size: m, span: o, draw: (e, $, r, t) => w(e, $, p(r)) + `<path d="M${a(e / 2 - 12)},${a($ / 2)}L${a(e / 2)},${a($ / 2 - 12)}" fill="none"${t}/>` }, "tag-doc": { size: (e, $) => ({ w: e + 2 * n, h: $ + 2 * d + 10, dy: -5 }), inset: (e, $, r) => r === 2 ? 10 : 0, draw: (e, $, r, t) => L(e, $, r) + `<path d="M${a(e / 2 - 12)},${a($ / 2 - 14)}L${a(e / 2)},${a($ / 2 - 26)}" fill="none"${t}/>` }, "lin-doc": { size: (e, $) => ({ w: e + 2 * n + 8, h: $ + 2 * d + 10, dy: -5 }), inset: (e, $, r) => r === 2 ? 10 : 0, draw: (e, $, r, t) => L(e, $, r) + `<path d="M${a(-e / 2 + 8)},${a(-$ / 2)}V${a($ / 2 - 6)}" fill="none"${t}/>` }, collapsedGroup: { size: (e, $) => ({ w: e + 2 * n + 8, h: $ + 2 * d + 8, dy: -2 }), draw: (e, $, r) => `<rect x="${a(-e / 2 + 6)}" y="${a(-$ / 2 + 8)}" width="${a(e - 12)}" height="${a($ - 8)}"${p(r)}/><rect x="${a(-e / 2)}" y="${a(-$ / 2)}" width="${a(e)}" height="${a($ - 4)}"${p(r)}/>` } };
function H(e, $, r, t) {
  let i = $ / 2, s = 6 * r;
  return `<path d="M${a(e)},${a(-i)}q${a(s)},0 ${a(s)},6V-6q0,6 ${a(s)},6q${a(-s)},0 ${a(-s)},6V${a(i - 6)}q0,6 ${a(-s)},6" fill="none"${t}/>`;
}
function L(e, $, r) {
  let t = e / 2, i = -$ / 2, s = $ / 2 - 10, l = e / 4;
  return `<path d="M${a(-t)},${a(i)}H${a(t)}V${a(s)}q${a(-l)},-12 ${a(-2 * l)},0t${a(-2 * l)},0Z"${r}/>`;
}
var I = _.rect, b = new Map(Object.entries(_));
function G(e, $, r) {
  var t;
  return ((t = b.get(e)) != null ? t : I).size($, r);
}
function R(e, $, r, t, i) {
  var s;
  return ((s = b.get(e)) != null ? s : I).draw($, r, t, i);
}
function k(e, $, r, t, i = 0) {
  var s, l, h;
  return (h = (l = (s = b.get(e)) == null ? void 0 : s.inset) == null ? void 0 : l.call(s, $, r, t, i)) != null ? h : 0;
}
function S(e, $, r, t) {
  var i, s, l;
  return Math.max(0, (l = (s = (i = b.get(e)) == null ? void 0 : i.span) == null ? void 0 : s.call(i, $, r, t)) != null ? l : 0);
}
function B(e) {
  var $;
  return (($ = b.get(e)) == null ? void 0 : $.noLabel) !== !0;
}
function P(e, $, r) {
  let t = e[$] - r.x, i = e[$ + 1] - r.y;
  return Math.abs(Math.abs(i) - r.h / 2) < 0.5 ? i < 0 ? 0 : 2 : Math.abs(Math.abs(t) - r.w / 2) < 0.5 ? t < 0 ? 3 : 1 : -1;
}
function D(e, $, r, t) {
  if (t.isGroup)
    return;
  let i = P(e, $, t);
  if (i === 0 || i === 2) {
    let s = k(r.shape, r.w, r.h, i, e[$] - t.x) + (t.h - r.h) / 2;
    e[$ + 1] += i === 0 ? s : -s;
  } else if (i >= 0) {
    let s = k(r.shape, r.w, r.h, i, e[$ + 1] - t.y) + (t.w - r.w) / 2;
    e[$] += i === 3 ? s : -s;
  }
}
export {
  D as B,
  P as D,
  S as E,
  G as P,
  R,
  k as V,
  d as i,
  B as j,
  n as o
};
//# sourceMappingURL=XQLH73R6-5278eaeb.js.map

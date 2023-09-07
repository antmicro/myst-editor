var et = function() {
  return et = Object.assign || function(e) {
    for (var n, r = 1, i = arguments.length; r < i; r++) {
      n = arguments[r];
      for (var o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
    }
    return e;
  }, et.apply(this, arguments);
};
function qr(t, e, n) {
  if (n || arguments.length === 2)
    for (var r = 0, i = e.length, o; r < i; r++)
      (o || !(r in e)) && (o || (o = Array.prototype.slice.call(e, 0, r)), o[r] = e[r]);
  return t.concat(o || Array.prototype.slice.call(e));
}
function m1(t) {
  var e = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return e[n] === void 0 && (e[n] = t(n)), e[n];
  };
}
var g1 = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, y1 = /* @__PURE__ */ m1(
  function(t) {
    return g1.test(t) || t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && t.charCodeAt(2) < 91;
  }
), ro, B, sm, jn, Dh, lm, $a, am, Rr = {}, cm = [], b1 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Zs = Array.isArray;
function on(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function um(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function Tt(t, e, n) {
  var r, i, o, s = {};
  for (o in e)
    o == "key" ? r = e[o] : o == "ref" ? i = e[o] : s[o] = e[o];
  if (arguments.length > 2 && (s.children = arguments.length > 3 ? ro.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (o in t.defaultProps)
      s[o] === void 0 && (s[o] = t.defaultProps[o]);
  return Si(t, s, r, i, null);
}
function Si(t, e, n, r, i) {
  var o = { type: t, props: e, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++sm : i };
  return i == null && B.vnode != null && B.vnode(o), o;
}
function v1() {
  return { current: null };
}
function an(t) {
  return t.children;
}
function jt(t, e) {
  this.props = t, this.context = e;
}
function Ii(t, e) {
  if (e == null)
    return t.__ ? Ii(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? Ii(t) : null;
}
function hm(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return hm(t);
  }
}
function Ha(t) {
  (!t.__d && (t.__d = !0) && jn.push(t) && !hs.__r++ || Dh !== B.debounceRendering) && ((Dh = B.debounceRendering) || lm)(hs);
}
function hs() {
  var t, e, n, r, i, o, s, l, a;
  for (jn.sort($a); t = jn.shift(); )
    t.__d && (e = jn.length, r = void 0, i = void 0, o = void 0, l = (s = (n = t).__v).__e, (a = n.__P) && (r = [], i = [], (o = on({}, s)).__v = s.__v + 1, su(a, s, o, n.__n, a.ownerSVGElement !== void 0, s.__h != null ? [l] : null, r, l == null ? Ii(s) : l, s.__h, i), mm(r, s, i), s.__e != l && hm(s)), jn.length > e && jn.sort($a));
  hs.__r = 0;
}
function fm(t, e, n, r, i, o, s, l, a, c, u) {
  var h, f, d, p, m, g, y, b, k, x = 0, w = r && r.__k || cm, v = w.length, C = v, L = e.length;
  for (n.__k = [], h = 0; h < L; h++)
    (p = n.__k[h] = (p = e[h]) == null || typeof p == "boolean" || typeof p == "function" ? null : typeof p == "string" || typeof p == "number" || typeof p == "bigint" ? Si(null, p, null, null, p) : Zs(p) ? Si(an, { children: p }, null, null, null) : p.__b > 0 ? Si(p.type, p.props, p.key, p.ref ? p.ref : null, p.__v) : p) != null ? (p.__ = n, p.__b = n.__b + 1, (b = x1(p, w, y = h + x, C)) === -1 ? d = Rr : (d = w[b] || Rr, w[b] = void 0, C--), su(t, p, d, i, o, s, l, a, c, u), m = p.__e, (f = p.ref) && d.ref != f && (d.ref && lu(d.ref, null, p), u.push(f, p.__c || m, p)), m != null && (g == null && (g = m), (k = d === Rr || d.__v === null) ? b == -1 && x-- : b !== y && (b === y + 1 ? x++ : b > y ? C > L - y ? x += b - y : x-- : x = b < y && b == y - 1 ? b - y : 0), y = h + x, typeof p.type != "function" || b === y && d.__k !== p.__k ? typeof p.type == "function" || b === y && !k ? p.__d !== void 0 ? (a = p.__d, p.__d = void 0) : a = m.nextSibling : a = pm(t, m, a) : a = dm(p, a, t), typeof n.type == "function" && (n.__d = a))) : (d = w[h]) && d.key == null && d.__e && (d.__e == a && (a = Ii(d)), za(d, d, !1), w[h] = null);
  for (n.__e = g, h = v; h--; )
    w[h] != null && (typeof n.type == "function" && w[h].__e != null && w[h].__e == n.__d && (n.__d = w[h].__e.nextSibling), za(w[h], w[h]));
}
function dm(t, e, n) {
  for (var r, i = t.__k, o = 0; i && o < i.length; o++)
    (r = i[o]) && (r.__ = t, e = typeof r.type == "function" ? dm(r, e, n) : pm(n, r.__e, e));
  return e;
}
function sn(t, e) {
  return e = e || [], t == null || typeof t == "boolean" || (Zs(t) ? t.some(function(n) {
    sn(n, e);
  }) : e.push(t)), e;
}
function pm(t, e, n) {
  return n == null || n.parentNode !== t ? t.insertBefore(e, null) : e == n && e.parentNode != null || t.insertBefore(e, n), e.nextSibling;
}
function x1(t, e, n, r) {
  var i = t.key, o = t.type, s = n - 1, l = n + 1, a = e[n];
  if (a === null || a && i == a.key && o === a.type)
    return n;
  if (r > (a != null ? 1 : 0))
    for (; s >= 0 || l < e.length; ) {
      if (s >= 0) {
        if ((a = e[s]) && i == a.key && o === a.type)
          return s;
        s--;
      }
      if (l < e.length) {
        if ((a = e[l]) && i == a.key && o === a.type)
          return l;
        l++;
      }
    }
  return -1;
}
function _1(t, e, n, r, i) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in e || fs(t, o, null, n[o], r);
  for (o in e)
    i && typeof e[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === e[o] || fs(t, o, e[o], n[o], r);
}
function Mh(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n == null ? "" : n) : t[e] = n == null ? "" : typeof n != "number" || b1.test(e) ? n : n + "px";
}
function fs(t, e, n, r, i) {
  var o;
  e:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof r == "string" && (t.style.cssText = r = ""), r)
          for (e in r)
            n && e in n || Mh(t.style, e, "");
        if (n)
          for (e in n)
            r && n[e] === r[e] || Mh(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      o = e !== (e = e.replace(/(PointerCapture)$|Capture$/, "$1")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + o] = n, n ? r || t.addEventListener(e, o ? Rh : Oh, o) : t.removeEventListener(e, o ? Rh : Oh, o);
    else if (e !== "dangerouslySetInnerHTML") {
      if (i)
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e !== "width" && e !== "height" && e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e !== "rowSpan" && e !== "colSpan" && e in t)
        try {
          t[e] = n == null ? "" : n;
          break e;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && e[4] !== "-" ? t.removeAttribute(e) : t.setAttribute(e, n));
    }
}
function Oh(t) {
  return this.l[t.type + !1](B.event ? B.event(t) : t);
}
function Rh(t) {
  return this.l[t.type + !0](B.event ? B.event(t) : t);
}
function su(t, e, n, r, i, o, s, l, a, c) {
  var u, h, f, d, p, m, g, y, b, k, x, w, v, C, L, R = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (a = n.__h, l = e.__e = n.__e, e.__h = null, o = [l]), (u = B.__b) && u(e);
  e:
    if (typeof R == "function")
      try {
        if (y = e.props, b = (u = R.contextType) && r[u.__c], k = u ? b ? b.props.value : u.__ : r, n.__c ? g = (h = e.__c = n.__c).__ = h.__E : ("prototype" in R && R.prototype.render ? e.__c = h = new R(y, k) : (e.__c = h = new jt(y, k), h.constructor = R, h.render = w1), b && b.sub(h), h.props = y, h.state || (h.state = {}), h.context = k, h.__n = r, f = h.__d = !0, h.__h = [], h._sb = []), h.__s == null && (h.__s = h.state), R.getDerivedStateFromProps != null && (h.__s == h.state && (h.__s = on({}, h.__s)), on(h.__s, R.getDerivedStateFromProps(y, h.__s))), d = h.props, p = h.state, h.__v = e, f)
          R.getDerivedStateFromProps == null && h.componentWillMount != null && h.componentWillMount(), h.componentDidMount != null && h.__h.push(h.componentDidMount);
        else {
          if (R.getDerivedStateFromProps == null && y !== d && h.componentWillReceiveProps != null && h.componentWillReceiveProps(y, k), !h.__e && (h.shouldComponentUpdate != null && h.shouldComponentUpdate(y, h.__s, k) === !1 || e.__v === n.__v)) {
            for (e.__v !== n.__v && (h.props = y, h.state = h.__s, h.__d = !1), e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(T) {
              T && (T.__ = e);
            }), x = 0; x < h._sb.length; x++)
              h.__h.push(h._sb[x]);
            h._sb = [], h.__h.length && s.push(h);
            break e;
          }
          h.componentWillUpdate != null && h.componentWillUpdate(y, h.__s, k), h.componentDidUpdate != null && h.__h.push(function() {
            h.componentDidUpdate(d, p, m);
          });
        }
        if (h.context = k, h.props = y, h.__P = t, h.__e = !1, w = B.__r, v = 0, "prototype" in R && R.prototype.render) {
          for (h.state = h.__s, h.__d = !1, w && w(e), u = h.render(h.props, h.state, h.context), C = 0; C < h._sb.length; C++)
            h.__h.push(h._sb[C]);
          h._sb = [];
        } else
          do
            h.__d = !1, w && w(e), u = h.render(h.props, h.state, h.context), h.state = h.__s;
          while (h.__d && ++v < 25);
        h.state = h.__s, h.getChildContext != null && (r = on(on({}, r), h.getChildContext())), f || h.getSnapshotBeforeUpdate == null || (m = h.getSnapshotBeforeUpdate(d, p)), fm(t, Zs(L = u != null && u.type === an && u.key == null ? u.props.children : u) ? L : [L], e, n, r, i, o, s, l, a, c), h.base = e.__e, e.__h = null, h.__h.length && s.push(h), g && (h.__E = h.__ = null);
      } catch (T) {
        e.__v = null, (a || o != null) && (e.__e = l, e.__h = !!a, o[o.indexOf(l)] = null), B.__e(T, e, n);
      }
    else
      o == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = k1(n.__e, e, n, r, i, o, s, a, c);
  (u = B.diffed) && u(e);
}
function mm(t, e, n) {
  for (var r = 0; r < n.length; r++)
    lu(n[r], n[++r], n[++r]);
  B.__c && B.__c(e, t), t.some(function(i) {
    try {
      t = i.__h, i.__h = [], t.some(function(o) {
        o.call(i);
      });
    } catch (o) {
      B.__e(o, i.__v);
    }
  });
}
function k1(t, e, n, r, i, o, s, l, a) {
  var c, u, h, f = n.props, d = e.props, p = e.type, m = 0;
  if (p === "svg" && (i = !0), o != null) {
    for (; m < o.length; m++)
      if ((c = o[m]) && "setAttribute" in c == !!p && (p ? c.localName === p : c.nodeType === 3)) {
        t = c, o[m] = null;
        break;
      }
  }
  if (t == null) {
    if (p === null)
      return document.createTextNode(d);
    t = i ? document.createElementNS("http://www.w3.org/2000/svg", p) : document.createElement(p, d.is && d), o = null, l = !1;
  }
  if (p === null)
    f === d || l && t.data === d || (t.data = d);
  else {
    if (o = o && ro.call(t.childNodes), u = (f = n.props || Rr).dangerouslySetInnerHTML, h = d.dangerouslySetInnerHTML, !l) {
      if (o != null)
        for (f = {}, m = 0; m < t.attributes.length; m++)
          f[t.attributes[m].name] = t.attributes[m].value;
      (h || u) && (h && (u && h.__html == u.__html || h.__html === t.innerHTML) || (t.innerHTML = h && h.__html || ""));
    }
    if (_1(t, d, f, i, l), h)
      e.__k = [];
    else if (fm(t, Zs(m = e.props.children) ? m : [m], e, n, r, i && p !== "foreignObject", o, s, o ? o[0] : n.__k && Ii(n, 0), l, a), o != null)
      for (m = o.length; m--; )
        o[m] != null && um(o[m]);
    l || ("value" in d && (m = d.value) !== void 0 && (m !== t.value || p === "progress" && !m || p === "option" && m !== f.value) && fs(t, "value", m, f.value, !1), "checked" in d && (m = d.checked) !== void 0 && m !== t.checked && fs(t, "checked", m, f.checked, !1));
  }
  return t;
}
function lu(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (r) {
    B.__e(r, n);
  }
}
function za(t, e, n) {
  var r, i;
  if (B.unmount && B.unmount(t), (r = t.ref) && (r.current && r.current !== t.__e || lu(r, null, e)), (r = t.__c) != null) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (o) {
        B.__e(o, e);
      }
    r.base = r.__P = null, t.__c = void 0;
  }
  if (r = t.__k)
    for (i = 0; i < r.length; i++)
      r[i] && za(r[i], e, n || typeof t.type != "function");
  n || t.__e == null || um(t.__e), t.__ = t.__e = t.__d = void 0;
}
function w1(t, e, n) {
  return this.constructor(t, n);
}
function Ni(t, e, n) {
  var r, i, o, s;
  B.__ && B.__(t, e), i = (r = typeof n == "function") ? null : n && n.__k || e.__k, o = [], s = [], su(e, t = (!r && n || e).__k = Tt(an, null, [t]), i || Rr, Rr, e.ownerSVGElement !== void 0, !r && n ? [n] : i ? null : e.firstChild ? ro.call(e.childNodes) : null, o, !r && n ? n : i ? i.__e : e.firstChild, r, s), mm(o, t, s);
}
function gm(t, e) {
  Ni(t, e, gm);
}
function C1(t, e, n) {
  var r, i, o, s, l = on({}, t.props);
  for (o in t.type && t.type.defaultProps && (s = t.type.defaultProps), e)
    o == "key" ? r = e[o] : o == "ref" ? i = e[o] : l[o] = e[o] === void 0 && s !== void 0 ? s[o] : e[o];
  return arguments.length > 2 && (l.children = arguments.length > 3 ? ro.call(arguments, 2) : n), Si(t.type, l, r || t.key, i || t.ref, null);
}
function A1(t, e) {
  var n = { __c: e = "__cC" + am++, __: t, Consumer: function(r, i) {
    return r.children(i);
  }, Provider: function(r) {
    var i, o;
    return this.getChildContext || (i = [], (o = {})[e] = this, this.getChildContext = function() {
      return o;
    }, this.shouldComponentUpdate = function(s) {
      this.props.value !== s.value && i.some(function(l) {
        l.__e = !0, Ha(l);
      });
    }, this.sub = function(s) {
      i.push(s);
      var l = s.componentWillUnmount;
      s.componentWillUnmount = function() {
        i.splice(i.indexOf(s), 1), l && l.call(s);
      };
    }), r.children;
  } };
  return n.Provider.__ = n.Consumer.contextType = n;
}
ro = cm.slice, B = { __e: function(t, e, n, r) {
  for (var i, o, s; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((o = i.constructor) && o.getDerivedStateFromError != null && (i.setState(o.getDerivedStateFromError(t)), s = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, r || {}), s = i.__d), s)
          return i.__E = i;
      } catch (l) {
        t = l;
      }
  throw t;
} }, sm = 0, jt.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = on({}, this.state), typeof t == "function" && (t = t(on({}, n), this.props)), t && on(n, t), t != null && this.__v && (e && this._sb.push(e), Ha(this));
}, jt.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), Ha(this));
}, jt.prototype.render = an, jn = [], lm = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, $a = function(t, e) {
  return t.__v.__b - e.__v.__b;
}, hs.__r = 0, am = 0;
var Dn, pe, Hl, Lh, $r = 0, ym = [], Go = [], Ih = B.__b, Nh = B.__r, Ph = B.diffed, Bh = B.__c, Fh = B.unmount;
function Qr(t, e) {
  B.__h && B.__h(pe, t, $r || e), $r = 0;
  var n = pe.__H || (pe.__H = { __: [], __h: [] });
  return t >= n.__.length && n.__.push({ __V: Go }), n.__[t];
}
function ut(t) {
  return $r = 1, bm(xm, t);
}
function bm(t, e, n) {
  var r = Qr(Dn++, 2);
  if (r.t = t, !r.__c && (r.__ = [n ? n(e) : xm(void 0, e), function(l) {
    var a = r.__N ? r.__N[0] : r.__[0], c = r.t(a, l);
    a !== c && (r.__N = [c, r.__[1]], r.__c.setState({}));
  }], r.__c = pe, !pe.u)) {
    var i = function(l, a, c) {
      if (!r.__c.__H)
        return !0;
      var u = r.__c.__H.__.filter(function(f) {
        return f.__c;
      });
      if (u.every(function(f) {
        return !f.__N;
      }))
        return !o || o.call(this, l, a, c);
      var h = !1;
      return u.forEach(function(f) {
        if (f.__N) {
          var d = f.__[0];
          f.__ = f.__N, f.__N = void 0, d !== f.__[0] && (h = !0);
        }
      }), !(!h && r.__c.props === l) && (!o || o.call(this, l, a, c));
    };
    pe.u = !0;
    var o = pe.shouldComponentUpdate, s = pe.componentWillUpdate;
    pe.componentWillUpdate = function(l, a, c) {
      if (this.__e) {
        var u = o;
        o = void 0, i(l, a, c), o = u;
      }
      s && s.call(this, l, a, c);
    }, pe.shouldComponentUpdate = i;
  }
  return r.__N || r.__;
}
function Hr(t, e) {
  var n = Qr(Dn++, 3);
  !B.__s && cu(n.__H, e) && (n.__ = t, n.i = e, pe.__H.__h.push(n));
}
function Js(t, e) {
  var n = Qr(Dn++, 4);
  !B.__s && cu(n.__H, e) && (n.__ = t, n.i = e, pe.__h.push(n));
}
function Xs(t) {
  return $r = 5, au(function() {
    return { current: t };
  }, []);
}
function S1(t, e, n) {
  $r = 6, Js(function() {
    return typeof t == "function" ? (t(e()), function() {
      return t(null);
    }) : t ? (t.current = e(), function() {
      return t.current = null;
    }) : void 0;
  }, n == null ? n : n.concat(t));
}
function au(t, e) {
  var n = Qr(Dn++, 7);
  return cu(n.__H, e) ? (n.__V = t(), n.i = e, n.__h = t, n.__V) : n.__;
}
function E1(t, e) {
  return $r = 8, au(function() {
    return t;
  }, e);
}
function vm(t) {
  var e = pe.context[t.__c], n = Qr(Dn++, 9);
  return n.c = t, e ? (n.__ == null && (n.__ = !0, e.sub(pe)), e.props.value) : t.__;
}
function Va(t, e) {
  B.useDebugValue && B.useDebugValue(e ? e(t) : t);
}
function T1() {
  var t = Qr(Dn++, 11);
  if (!t.__) {
    for (var e = pe.__v; e !== null && !e.__m && e.__ !== null; )
      e = e.__;
    var n = e.__m || (e.__m = [0, 0]);
    t.__ = "P" + n[0] + "-" + n[1]++;
  }
  return t.__;
}
function D1() {
  for (var t; t = ym.shift(); )
    if (t.__P && t.__H)
      try {
        t.__H.__h.forEach(Ko), t.__H.__h.forEach(Ua), t.__H.__h = [];
      } catch (e) {
        t.__H.__h = [], B.__e(e, t.__v);
      }
}
B.__b = function(t) {
  pe = null, Ih && Ih(t);
}, B.__r = function(t) {
  Nh && Nh(t), Dn = 0;
  var e = (pe = t.__c).__H;
  e && (Hl === pe ? (e.__h = [], pe.__h = [], e.__.forEach(function(n) {
    n.__N && (n.__ = n.__N), n.__V = Go, n.__N = n.i = void 0;
  })) : (e.__h.forEach(Ko), e.__h.forEach(Ua), e.__h = [], Dn = 0)), Hl = pe;
}, B.diffed = function(t) {
  Ph && Ph(t);
  var e = t.__c;
  e && e.__H && (e.__H.__h.length && (ym.push(e) !== 1 && Lh === B.requestAnimationFrame || ((Lh = B.requestAnimationFrame) || M1)(D1)), e.__H.__.forEach(function(n) {
    n.i && (n.__H = n.i), n.__V !== Go && (n.__ = n.__V), n.i = void 0, n.__V = Go;
  })), Hl = pe = null;
}, B.__c = function(t, e) {
  e.some(function(n) {
    try {
      n.__h.forEach(Ko), n.__h = n.__h.filter(function(r) {
        return !r.__ || Ua(r);
      });
    } catch (r) {
      e.some(function(i) {
        i.__h && (i.__h = []);
      }), e = [], B.__e(r, n.__v);
    }
  }), Bh && Bh(t, e);
}, B.unmount = function(t) {
  Fh && Fh(t);
  var e, n = t.__c;
  n && n.__H && (n.__H.__.forEach(function(r) {
    try {
      Ko(r);
    } catch (i) {
      e = i;
    }
  }), n.__H = void 0, e && B.__e(e, n.__v));
};
var qh = typeof requestAnimationFrame == "function";
function M1(t) {
  var e, n = function() {
    clearTimeout(r), qh && cancelAnimationFrame(e), setTimeout(t);
  }, r = setTimeout(n, 100);
  qh && (e = requestAnimationFrame(n));
}
function Ko(t) {
  var e = pe, n = t.__c;
  typeof n == "function" && (t.__c = void 0, n()), pe = e;
}
function Ua(t) {
  var e = pe;
  t.__c = t.__(), pe = e;
}
function cu(t, e) {
  return !t || t.length !== e.length || e.some(function(n, r) {
    return n !== t[r];
  });
}
function xm(t, e) {
  return typeof e == "function" ? e(t) : e;
}
function _m(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function Wa(t, e) {
  for (var n in t)
    if (n !== "__source" && !(n in e))
      return !0;
  for (var r in e)
    if (r !== "__source" && t[r] !== e[r])
      return !0;
  return !1;
}
function zl(t, e) {
  return t === e && (t !== 0 || 1 / t == 1 / e) || t != t && e != e;
}
function ja(t) {
  this.props = t;
}
function O1(t, e) {
  function n(i) {
    var o = this.props.ref, s = o == i.ref;
    return !s && o && (o.call ? o(null) : o.current = null), e ? !e(this.props, i) || !s : Wa(this.props, i);
  }
  function r(i) {
    return this.shouldComponentUpdate = n, Tt(t, i);
  }
  return r.displayName = "Memo(" + (t.displayName || t.name) + ")", r.prototype.isReactComponent = !0, r.__f = !0, r;
}
(ja.prototype = new jt()).isPureReactComponent = !0, ja.prototype.shouldComponentUpdate = function(t, e) {
  return Wa(this.props, t) || Wa(this.state, e);
};
var $h = B.__b;
B.__b = function(t) {
  t.type && t.type.__f && t.ref && (t.props.ref = t.ref, t.ref = null), $h && $h(t);
};
var R1 = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function L1(t) {
  function e(n) {
    var r = _m({}, n);
    return delete r.ref, t(r, n.ref || null);
  }
  return e.$$typeof = R1, e.render = e, e.prototype.isReactComponent = e.__f = !0, e.displayName = "ForwardRef(" + (t.displayName || t.name) + ")", e;
}
var Hh = function(t, e) {
  return t == null ? null : sn(sn(t).map(e));
}, I1 = { map: Hh, forEach: Hh, count: function(t) {
  return t ? sn(t).length : 0;
}, only: function(t) {
  var e = sn(t);
  if (e.length !== 1)
    throw "Children.only";
  return e[0];
}, toArray: sn }, N1 = B.__e;
B.__e = function(t, e, n, r) {
  if (t.then) {
    for (var i, o = e; o = o.__; )
      if ((i = o.__c) && i.__c)
        return e.__e == null && (e.__e = n.__e, e.__k = n.__k), i.__c(t, e);
  }
  N1(t, e, n, r);
};
var zh = B.unmount;
function km(t, e, n) {
  return t && (t.__c && t.__c.__H && (t.__c.__H.__.forEach(function(r) {
    typeof r.__c == "function" && r.__c();
  }), t.__c.__H = null), (t = _m({}, t)).__c != null && (t.__c.__P === n && (t.__c.__P = e), t.__c = null), t.__k = t.__k && t.__k.map(function(r) {
    return km(r, e, n);
  })), t;
}
function wm(t, e, n) {
  return t && (t.__v = null, t.__k = t.__k && t.__k.map(function(r) {
    return wm(r, e, n);
  }), t.__c && t.__c.__P === e && (t.__e && n.insertBefore(t.__e, t.__d), t.__c.__e = !0, t.__c.__P = n)), t;
}
function Yo() {
  this.__u = 0, this.t = null, this.__b = null;
}
function Cm(t) {
  var e = t.__.__c;
  return e && e.__a && e.__a(t);
}
function P1(t) {
  var e, n, r;
  function i(o) {
    if (e || (e = t()).then(function(s) {
      n = s.default || s;
    }, function(s) {
      r = s;
    }), r)
      throw r;
    if (!n)
      throw e;
    return Tt(n, o);
  }
  return i.displayName = "Lazy", i.__f = !0, i;
}
function bi() {
  this.u = null, this.o = null;
}
B.unmount = function(t) {
  var e = t.__c;
  e && e.__R && e.__R(), e && t.__h === !0 && (t.type = null), zh && zh(t);
}, (Yo.prototype = new jt()).__c = function(t, e) {
  var n = e.__c, r = this;
  r.t == null && (r.t = []), r.t.push(n);
  var i = Cm(r.__v), o = !1, s = function() {
    o || (o = !0, n.__R = null, i ? i(l) : l());
  };
  n.__R = s;
  var l = function() {
    if (!--r.__u) {
      if (r.state.__a) {
        var c = r.state.__a;
        r.__v.__k[0] = wm(c, c.__c.__P, c.__c.__O);
      }
      var u;
      for (r.setState({ __a: r.__b = null }); u = r.t.pop(); )
        u.forceUpdate();
    }
  }, a = e.__h === !0;
  r.__u++ || a || r.setState({ __a: r.__b = r.__v.__k[0] }), t.then(s, s);
}, Yo.prototype.componentWillUnmount = function() {
  this.t = [];
}, Yo.prototype.render = function(t, e) {
  if (this.__b) {
    if (this.__v.__k) {
      var n = document.createElement("div"), r = this.__v.__k[0].__c;
      this.__v.__k[0] = km(this.__b, n, r.__O = r.__P);
    }
    this.__b = null;
  }
  var i = e.__a && Tt(an, null, t.fallback);
  return i && (i.__h = null), [Tt(an, null, e.__a ? null : t.children), i];
};
var Vh = function(t, e, n) {
  if (++n[1] === n[0] && t.o.delete(e), t.props.revealOrder && (t.props.revealOrder[0] !== "t" || !t.o.size))
    for (n = t.u; n; ) {
      for (; n.length > 3; )
        n.pop()();
      if (n[1] < n[0])
        break;
      t.u = n = n[2];
    }
};
function B1(t) {
  return this.getChildContext = function() {
    return t.context;
  }, t.children;
}
function F1(t) {
  var e = this, n = t.i;
  e.componentWillUnmount = function() {
    Ni(null, e.l), e.l = null, e.i = null;
  }, e.i && e.i !== n && e.componentWillUnmount(), e.l || (e.i = n, e.l = { nodeType: 1, parentNode: n, childNodes: [], appendChild: function(r) {
    this.childNodes.push(r), e.i.appendChild(r);
  }, insertBefore: function(r, i) {
    this.childNodes.push(r), e.i.appendChild(r);
  }, removeChild: function(r) {
    this.childNodes.splice(this.childNodes.indexOf(r) >>> 1, 1), e.i.removeChild(r);
  } }), Ni(Tt(B1, { context: e.context }, t.__v), e.l);
}
function q1(t, e) {
  var n = Tt(F1, { __v: t, i: e });
  return n.containerInfo = e, n;
}
(bi.prototype = new jt()).__a = function(t) {
  var e = this, n = Cm(e.__v), r = e.o.get(t);
  return r[0]++, function(i) {
    var o = function() {
      e.props.revealOrder ? (r.push(i), Vh(e, t, r)) : i();
    };
    n ? n(o) : o();
  };
}, bi.prototype.render = function(t) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var e = sn(t.children);
  t.revealOrder && t.revealOrder[0] === "b" && e.reverse();
  for (var n = e.length; n--; )
    this.o.set(e[n], this.u = [1, 0, this.u]);
  return t.children;
}, bi.prototype.componentDidUpdate = bi.prototype.componentDidMount = function() {
  var t = this;
  this.o.forEach(function(e, n) {
    Vh(t, n, e);
  });
};
var Am = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, $1 = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, H1 = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, z1 = /[A-Z0-9]/g, V1 = typeof document < "u", U1 = function(t) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(t);
};
function W1(t, e, n) {
  return e.__k == null && (e.textContent = ""), Ni(t, e), typeof n == "function" && n(), t ? t.__c : null;
}
function j1(t, e, n) {
  return gm(t, e), typeof n == "function" && n(), t ? t.__c : null;
}
jt.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(t) {
  Object.defineProperty(jt.prototype, t, { configurable: !0, get: function() {
    return this["UNSAFE_" + t];
  }, set: function(e) {
    Object.defineProperty(this, t, { configurable: !0, writable: !0, value: e });
  } });
});
var Uh = B.event;
function G1() {
}
function K1() {
  return this.cancelBubble;
}
function Y1() {
  return this.defaultPrevented;
}
B.event = function(t) {
  return Uh && (t = Uh(t)), t.persist = G1, t.isPropagationStopped = K1, t.isDefaultPrevented = Y1, t.nativeEvent = t;
};
var uu, Z1 = { enumerable: !1, configurable: !0, get: function() {
  return this.class;
} }, Wh = B.vnode;
B.vnode = function(t) {
  typeof t.type == "string" && function(e) {
    var n = e.props, r = e.type, i = {};
    for (var o in n) {
      var s = n[o];
      if (!(o === "value" && "defaultValue" in n && s == null || V1 && o === "children" && r === "noscript" || o === "class" || o === "className")) {
        var l = o.toLowerCase();
        o === "defaultValue" && "value" in n && n.value == null ? o = "value" : o === "download" && s === !0 ? s = "" : l === "ondoubleclick" ? o = "ondblclick" : l !== "onchange" || r !== "input" && r !== "textarea" || U1(n.type) ? l === "onfocus" ? o = "onfocusin" : l === "onblur" ? o = "onfocusout" : H1.test(o) ? o = l : r.indexOf("-") === -1 && $1.test(o) ? o = o.replace(z1, "-$&").toLowerCase() : s === null && (s = void 0) : l = o = "oninput", l === "oninput" && i[o = l] && (o = "oninputCapture"), i[o] = s;
      }
    }
    r == "select" && i.multiple && Array.isArray(i.value) && (i.value = sn(n.children).forEach(function(a) {
      a.props.selected = i.value.indexOf(a.props.value) != -1;
    })), r == "select" && i.defaultValue != null && (i.value = sn(n.children).forEach(function(a) {
      a.props.selected = i.multiple ? i.defaultValue.indexOf(a.props.value) != -1 : i.defaultValue == a.props.value;
    })), n.class && !n.className ? (i.class = n.class, Object.defineProperty(i, "className", Z1)) : (n.className && !n.class || n.class && n.className) && (i.class = i.className = n.className), e.props = i;
  }(t), t.$$typeof = Am, Wh && Wh(t);
};
var jh = B.__r;
B.__r = function(t) {
  jh && jh(t), uu = t.__c;
};
var Gh = B.diffed;
B.diffed = function(t) {
  Gh && Gh(t);
  var e = t.props, n = t.__e;
  n != null && t.type === "textarea" && "value" in e && e.value !== n.value && (n.value = e.value == null ? "" : e.value), uu = null;
};
var J1 = { ReactCurrentDispatcher: { current: { readContext: function(t) {
  return uu.__n[t.__c].props.value;
} } } };
function X1(t) {
  return Tt.bind(null, t);
}
function Qs(t) {
  return !!t && t.$$typeof === Am;
}
function Q1(t) {
  return Qs(t) && t.type === an;
}
function ev(t) {
  return Qs(t) ? C1.apply(null, arguments) : t;
}
function tv(t) {
  return !!t.__k && (Ni(null, t), !0);
}
function nv(t) {
  return t && (t.base || t.nodeType === 1 && t) || null;
}
var rv = function(t, e) {
  return t(e);
}, iv = function(t, e) {
  return t(e);
}, ov = an;
function Sm(t) {
  t();
}
function sv(t) {
  return t;
}
function lv() {
  return [!1, Sm];
}
var av = Js, cv = Qs;
function uv(t, e) {
  var n = e(), r = ut({ h: { __: n, v: e } }), i = r[0].h, o = r[1];
  return Js(function() {
    i.__ = n, i.v = e, zl(i.__, e()) || o({ h: i });
  }, [t, n, e]), Hr(function() {
    return zl(i.__, i.v()) || o({ h: i }), t(function() {
      zl(i.__, i.v()) || o({ h: i });
    });
  }, [t]), n;
}
var Pi = { useState: ut, useId: T1, useReducer: bm, useEffect: Hr, useLayoutEffect: Js, useInsertionEffect: av, useTransition: lv, useDeferredValue: sv, useSyncExternalStore: uv, startTransition: Sm, useRef: Xs, useImperativeHandle: S1, useMemo: au, useCallback: E1, useContext: vm, useDebugValue: Va, version: "17.0.2", Children: I1, render: W1, hydrate: j1, unmountComponentAtNode: tv, createPortal: q1, createElement: Tt, createContext: A1, createFactory: X1, cloneElement: ev, createRef: v1, Fragment: an, isValidElement: Qs, isElement: cv, isFragment: Q1, findDOMNode: nv, Component: jt, PureComponent: ja, memo: O1, forwardRef: L1, flushSync: iv, unstable_batchedUpdates: rv, StrictMode: ov, Suspense: Yo, SuspenseList: bi, lazy: P1, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: J1 };
function hv(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function fv(t) {
  var e = t.default;
  if (typeof e == "function") {
    var n = function() {
      return e.apply(this, arguments);
    };
    n.prototype = e.prototype;
  } else
    n = {};
  return Object.defineProperty(n, "__esModule", {
    value: !0
  }), Object.keys(t).forEach(function(r) {
    var i = Object.getOwnPropertyDescriptor(t, r);
    Object.defineProperty(n, r, i.get ? i : {
      enumerable: !0,
      get: function() {
        return t[r];
      }
    });
  }), n;
}
var fe = "-ms-", Ei = "-moz-", ee = "-webkit-", Em = "comm", el = "rule", hu = "decl", dv = "@import", Tm = "@keyframes", pv = "@layer", mv = Math.abs, fu = String.fromCharCode, Ga = Object.assign;
function gv(t, e) {
  return Me(t, 0) ^ 45 ? (((e << 2 ^ Me(t, 0)) << 2 ^ Me(t, 1)) << 2 ^ Me(t, 2)) << 2 ^ Me(t, 3) : 0;
}
function Dm(t) {
  return t.trim();
}
function rn(t, e) {
  return (t = e.exec(t)) ? t[0] : t;
}
function W(t, e, n) {
  return t.replace(e, n);
}
function Zo(t, e) {
  return t.indexOf(e);
}
function Me(t, e) {
  return t.charCodeAt(e) | 0;
}
function zr(t, e, n) {
  return t.slice(e, n);
}
function Bt(t) {
  return t.length;
}
function Mm(t) {
  return t.length;
}
function vi(t, e) {
  return e.push(t), t;
}
function yv(t, e) {
  return t.map(e).join("");
}
function Kh(t, e) {
  return t.filter(function(n) {
    return !rn(n, e);
  });
}
var tl = 1, Vr = 1, Om = 0, gt = 0, _e = 0, ei = "";
function nl(t, e, n, r, i, o, s, l) {
  return { value: t, root: e, parent: n, type: r, props: i, children: o, line: tl, column: Vr, length: s, return: "", siblings: l };
}
function mn(t, e) {
  return Ga(nl("", null, null, "", null, null, 0, t.siblings), t, { length: -t.length }, e);
}
function xr(t) {
  for (; t.root; )
    t = mn(t.root, { children: [t] });
  vi(t, t.siblings);
}
function bv() {
  return _e;
}
function vv() {
  return _e = gt > 0 ? Me(ei, --gt) : 0, Vr--, _e === 10 && (Vr = 1, tl--), _e;
}
function Et() {
  return _e = gt < Om ? Me(ei, gt++) : 0, Vr++, _e === 10 && (Vr = 1, tl++), _e;
}
function er() {
  return Me(ei, gt);
}
function Jo() {
  return gt;
}
function rl(t, e) {
  return zr(ei, t, e);
}
function Ka(t) {
  switch (t) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function xv(t) {
  return tl = Vr = 1, Om = Bt(ei = t), gt = 0, [];
}
function _v(t) {
  return ei = "", t;
}
function Vl(t) {
  return Dm(rl(gt - 1, Ya(t === 91 ? t + 2 : t === 40 ? t + 1 : t)));
}
function kv(t) {
  for (; (_e = er()) && _e < 33; )
    Et();
  return Ka(t) > 2 || Ka(_e) > 3 ? "" : " ";
}
function wv(t, e) {
  for (; --e && Et() && !(_e < 48 || _e > 102 || _e > 57 && _e < 65 || _e > 70 && _e < 97); )
    ;
  return rl(t, Jo() + (e < 6 && er() == 32 && Et() == 32));
}
function Ya(t) {
  for (; Et(); )
    switch (_e) {
      case t:
        return gt;
      case 34:
      case 39:
        t !== 34 && t !== 39 && Ya(_e);
        break;
      case 40:
        t === 41 && Ya(t);
        break;
      case 92:
        Et();
        break;
    }
  return gt;
}
function Cv(t, e) {
  for (; Et() && t + _e !== 47 + 10; )
    if (t + _e === 42 + 42 && er() === 47)
      break;
  return "/*" + rl(e, gt - 1) + "*" + fu(t === 47 ? t : Et());
}
function Av(t) {
  for (; !Ka(er()); )
    Et();
  return rl(t, gt);
}
function Sv(t) {
  return _v(Xo("", null, null, null, [""], t = xv(t), 0, [0], t));
}
function Xo(t, e, n, r, i, o, s, l, a) {
  for (var c = 0, u = 0, h = s, f = 0, d = 0, p = 0, m = 1, g = 1, y = 1, b = 0, k = "", x = i, w = o, v = r, C = k; g; )
    switch (p = b, b = Et()) {
      case 40:
        if (p != 108 && Me(C, h - 1) == 58) {
          Zo(C += W(Vl(b), "&", "&\f"), "&\f") != -1 && (y = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        C += Vl(b);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        C += kv(p);
        break;
      case 92:
        C += wv(Jo() - 1, 7);
        continue;
      case 47:
        switch (er()) {
          case 42:
          case 47:
            vi(Ev(Cv(Et(), Jo()), e, n, a), a);
            break;
          default:
            C += "/";
        }
        break;
      case 123 * m:
        l[c++] = Bt(C) * y;
      case 125 * m:
      case 59:
      case 0:
        switch (b) {
          case 0:
          case 125:
            g = 0;
          case 59 + u:
            y == -1 && (C = W(C, /\f/g, "")), d > 0 && Bt(C) - h && vi(d > 32 ? Zh(C + ";", r, n, h - 1, a) : Zh(W(C, " ", "") + ";", r, n, h - 2, a), a);
            break;
          case 59:
            C += ";";
          default:
            if (vi(v = Yh(C, e, n, c, u, i, l, k, x = [], w = [], h, o), o), b === 123)
              if (u === 0)
                Xo(C, e, v, v, x, o, h, l, w);
              else
                switch (f === 99 && Me(C, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Xo(t, v, v, r && vi(Yh(t, v, v, 0, 0, i, l, k, i, x = [], h, w), w), i, w, h, l, r ? x : w);
                    break;
                  default:
                    Xo(C, v, v, v, [""], w, 0, l, w);
                }
        }
        c = u = d = 0, m = y = 1, k = C = "", h = s;
        break;
      case 58:
        h = 1 + Bt(C), d = p;
      default:
        if (m < 1) {
          if (b == 123)
            --m;
          else if (b == 125 && m++ == 0 && vv() == 125)
            continue;
        }
        switch (C += fu(b), b * m) {
          case 38:
            y = u > 0 ? 1 : (C += "\f", -1);
            break;
          case 44:
            l[c++] = (Bt(C) - 1) * y, y = 1;
            break;
          case 64:
            er() === 45 && (C += Vl(Et())), f = er(), u = h = Bt(k = C += Av(Jo())), b++;
            break;
          case 45:
            p === 45 && Bt(C) == 2 && (m = 0);
        }
    }
  return o;
}
function Yh(t, e, n, r, i, o, s, l, a, c, u, h) {
  for (var f = i - 1, d = i === 0 ? o : [""], p = Mm(d), m = 0, g = 0, y = 0; m < r; ++m)
    for (var b = 0, k = zr(t, f + 1, f = mv(g = s[m])), x = t; b < p; ++b)
      (x = Dm(g > 0 ? d[b] + " " + k : W(k, /&\f/g, d[b]))) && (a[y++] = x);
  return nl(t, e, n, i === 0 ? el : l, a, c, u, h);
}
function Ev(t, e, n, r) {
  return nl(t, e, n, Em, fu(bv()), zr(t, 2, -2), 0, r);
}
function Zh(t, e, n, r, i) {
  return nl(t, e, n, hu, zr(t, 0, r), zr(t, r + 1, -1), r, i);
}
function Rm(t, e, n) {
  switch (gv(t, e)) {
    case 5103:
      return ee + "print-" + t + t;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return ee + t + t;
    case 4789:
      return Ei + t + t;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return ee + t + Ei + t + fe + t + t;
    case 5936:
      switch (Me(t, e + 11)) {
        case 114:
          return ee + t + fe + W(t, /[svh]\w+-[tblr]{2}/, "tb") + t;
        case 108:
          return ee + t + fe + W(t, /[svh]\w+-[tblr]{2}/, "tb-rl") + t;
        case 45:
          return ee + t + fe + W(t, /[svh]\w+-[tblr]{2}/, "lr") + t;
      }
    case 6828:
    case 4268:
    case 2903:
      return ee + t + fe + t + t;
    case 6165:
      return ee + t + fe + "flex-" + t + t;
    case 5187:
      return ee + t + W(t, /(\w+).+(:[^]+)/, ee + "box-$1$2" + fe + "flex-$1$2") + t;
    case 5443:
      return ee + t + fe + "flex-item-" + W(t, /flex-|-self/g, "") + (rn(t, /flex-|baseline/) ? "" : fe + "grid-row-" + W(t, /flex-|-self/g, "")) + t;
    case 4675:
      return ee + t + fe + "flex-line-pack" + W(t, /align-content|flex-|-self/g, "") + t;
    case 5548:
      return ee + t + fe + W(t, "shrink", "negative") + t;
    case 5292:
      return ee + t + fe + W(t, "basis", "preferred-size") + t;
    case 6060:
      return ee + "box-" + W(t, "-grow", "") + ee + t + fe + W(t, "grow", "positive") + t;
    case 4554:
      return ee + W(t, /([^-])(transform)/g, "$1" + ee + "$2") + t;
    case 6187:
      return W(W(W(t, /(zoom-|grab)/, ee + "$1"), /(image-set)/, ee + "$1"), t, "") + t;
    case 5495:
    case 3959:
      return W(t, /(image-set\([^]*)/, ee + "$1$`$1");
    case 4968:
      return W(W(t, /(.+:)(flex-)?(.*)/, ee + "box-pack:$3" + fe + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + ee + t + t;
    case 4200:
      if (!rn(t, /flex-|baseline/))
        return fe + "grid-column-align" + zr(t, e) + t;
      break;
    case 2592:
    case 3360:
      return fe + W(t, "template-", "") + t;
    case 4384:
    case 3616:
      return n && n.some(function(r, i) {
        return e = i, rn(r.props, /grid-\w+-end/);
      }) ? ~Zo(t + (n = n[e].value), "span") ? t : fe + W(t, "-start", "") + t + fe + "grid-row-span:" + (~Zo(n, "span") ? rn(n, /\d+/) : +rn(n, /\d+/) - +rn(t, /\d+/)) + ";" : fe + W(t, "-start", "") + t;
    case 4896:
    case 4128:
      return n && n.some(function(r) {
        return rn(r.props, /grid-\w+-start/);
      }) ? t : fe + W(W(t, "-end", "-span"), "span ", "") + t;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return W(t, /(.+)-inline(.+)/, ee + "$1$2") + t;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Bt(t) - 1 - e > 6)
        switch (Me(t, e + 1)) {
          case 109:
            if (Me(t, e + 4) !== 45)
              break;
          case 102:
            return W(t, /(.+:)(.+)-([^]+)/, "$1" + ee + "$2-$3$1" + Ei + (Me(t, e + 3) == 108 ? "$3" : "$2-$3")) + t;
          case 115:
            return ~Zo(t, "stretch") ? Rm(W(t, "stretch", "fill-available"), e, n) + t : t;
        }
      break;
    case 5152:
    case 5920:
      return W(t, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(r, i, o, s, l, a, c) {
        return fe + i + ":" + o + c + (s ? fe + i + "-span:" + (l ? a : +a - +o) + c : "") + t;
      });
    case 4949:
      if (Me(t, e + 6) === 121)
        return W(t, ":", ":" + ee) + t;
      break;
    case 6444:
      switch (Me(t, Me(t, 14) === 45 ? 18 : 11)) {
        case 120:
          return W(t, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + ee + (Me(t, 14) === 45 ? "inline-" : "") + "box$3$1" + ee + "$2$3$1" + fe + "$2box$3") + t;
        case 100:
          return W(t, ":", ":" + fe) + t;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return W(t, "scroll-", "scroll-snap-") + t;
  }
  return t;
}
function ds(t, e) {
  for (var n = "", r = 0; r < t.length; r++)
    n += e(t[r], r, t, e) || "";
  return n;
}
function Tv(t, e, n, r) {
  switch (t.type) {
    case pv:
      if (t.children.length)
        break;
    case dv:
    case hu:
      return t.return = t.return || t.value;
    case Em:
      return "";
    case Tm:
      return t.return = t.value + "{" + ds(t.children, r) + "}";
    case el:
      if (!Bt(t.value = t.props.join(",")))
        return "";
  }
  return Bt(n = ds(t.children, r)) ? t.return = t.value + "{" + n + "}" : "";
}
function Dv(t) {
  var e = Mm(t);
  return function(n, r, i, o) {
    for (var s = "", l = 0; l < e; l++)
      s += t[l](n, r, i, o) || "";
    return s;
  };
}
function Mv(t) {
  return function(e) {
    e.root || (e = e.return) && t(e);
  };
}
function Ov(t, e, n, r) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case hu:
        t.return = Rm(t.value, t.length, n);
        return;
      case Tm:
        return ds([mn(t, { value: W(t.value, "@", "@" + ee) })], r);
      case el:
        if (t.length)
          return yv(n = t.props, function(i) {
            switch (rn(i, r = /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                xr(mn(t, { props: [W(i, /:(read-\w+)/, ":" + Ei + "$1")] })), xr(mn(t, { props: [i] })), Ga(t, { props: Kh(n, r) });
                break;
              case "::placeholder":
                xr(mn(t, { props: [W(i, /:(plac\w+)/, ":" + ee + "input-$1")] })), xr(mn(t, { props: [W(i, /:(plac\w+)/, ":" + Ei + "$1")] })), xr(mn(t, { props: [W(i, /:(plac\w+)/, fe + "input-$1")] })), xr(mn(t, { props: [i] })), Ga(t, { props: Kh(n, r) });
                break;
            }
            return "";
          });
    }
}
var Rv = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, or = typeof process < "u" && {} !== void 0 && ({}.REACT_APP_SC_ATTR || {}.SC_ATTR) || "data-styled", du = typeof window < "u" && "HTMLElement" in window, Lv = Boolean(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && {} !== void 0 && {}.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && {}.REACT_APP_SC_DISABLE_SPEEDY !== "" ? {}.REACT_APP_SC_DISABLE_SPEEDY !== "false" && {}.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && {} !== void 0 && {}.SC_DISABLE_SPEEDY !== void 0 && {}.SC_DISABLE_SPEEDY !== "" ? {}.SC_DISABLE_SPEEDY !== "false" && {}.SC_DISABLE_SPEEDY : {}.NODE_ENV !== "production"), Jh = /invalid hook call/i, bo = /* @__PURE__ */ new Set(), Iv = function(t, e) {
  if ({}.NODE_ENV !== "production") {
    var n = e ? ' with the id of "'.concat(e, '"') : "", r = "The component ".concat(t).concat(n, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, i = console.error;
    try {
      var o = !0;
      console.error = function(s) {
        for (var l = [], a = 1; a < arguments.length; a++)
          l[a - 1] = arguments[a];
        Jh.test(s) ? (o = !1, bo.delete(r)) : i.apply(void 0, qr([s], l, !1));
      }, Xs(), o && !bo.has(r) && (console.warn(r), bo.add(r));
    } catch (s) {
      Jh.test(s.message) && bo.delete(r);
    } finally {
      console.error = i;
    }
  }
}, il = Object.freeze([]), Ur = Object.freeze({});
function Nv(t, e, n) {
  return n === void 0 && (n = Ur), t.theme !== n.theme && t.theme || e || n.theme;
}
var Za = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), Pv = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Bv = /(^-|-$)/g;
function Xh(t) {
  return t.replace(Pv, "-").replace(Bv, "");
}
var Fv = /(a)(d)/gi, Qh = function(t) {
  return String.fromCharCode(t + (t > 25 ? 39 : 97));
};
function Ja(t) {
  var e, n = "";
  for (e = Math.abs(t); e > 52; e = e / 52 | 0)
    n = Qh(e % 52) + n;
  return (Qh(e % 52) + n).replace(Fv, "$1-$2");
}
var Ul, Gn = function(t, e) {
  for (var n = e.length; n; )
    t = 33 * t ^ e.charCodeAt(--n);
  return t;
}, Lm = function(t) {
  return Gn(5381, t);
};
function qv(t) {
  return Ja(Lm(t) >>> 0);
}
function Im(t) {
  return {}.NODE_ENV !== "production" && typeof t == "string" && t || t.displayName || t.name || "Component";
}
function Wl(t) {
  return typeof t == "string" && ({}.NODE_ENV === "production" || t.charAt(0) === t.charAt(0).toLowerCase());
}
var Nm = typeof Symbol == "function" && Symbol.for, Pm = Nm ? Symbol.for("react.memo") : 60115, $v = Nm ? Symbol.for("react.forward_ref") : 60112, Hv = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, zv = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, Bm = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, Vv = ((Ul = {})[$v] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, Ul[Pm] = Bm, Ul);
function ef(t) {
  return ("type" in (e = t) && e.type.$$typeof) === Pm ? Bm : "$$typeof" in t ? Vv[t.$$typeof] : Hv;
  var e;
}
var Uv = Object.defineProperty, Wv = Object.getOwnPropertyNames, tf = Object.getOwnPropertySymbols, jv = Object.getOwnPropertyDescriptor, Gv = Object.getPrototypeOf, nf = Object.prototype;
function Fm(t, e, n) {
  if (typeof e != "string") {
    if (nf) {
      var r = Gv(e);
      r && r !== nf && Fm(t, r, n);
    }
    var i = Wv(e);
    tf && (i = i.concat(tf(e)));
    for (var o = ef(t), s = ef(e), l = 0; l < i.length; ++l) {
      var a = i[l];
      if (!(a in zv || n && n[a] || s && a in s || o && a in o)) {
        var c = jv(e, a);
        try {
          Uv(t, a, c);
        } catch {
        }
      }
    }
  }
  return t;
}
function Wr(t) {
  return typeof t == "function";
}
function pu(t) {
  return typeof t == "object" && "styledComponentId" in t;
}
function Zn(t, e) {
  return t && e ? "".concat(t, " ").concat(e) : t || e || "";
}
function rf(t, e) {
  if (t.length === 0)
    return "";
  for (var n = t[0], r = 1; r < t.length; r++)
    n += e ? e + t[r] : t[r];
  return n;
}
function jr(t) {
  return t !== null && typeof t == "object" && t.constructor.name === Object.name && !("props" in t && t.$$typeof);
}
function Xa(t, e, n) {
  if (n === void 0 && (n = !1), !n && !jr(t) && !Array.isArray(t))
    return e;
  if (Array.isArray(e))
    for (var r = 0; r < e.length; r++)
      t[r] = Xa(t[r], e[r]);
  else if (jr(e))
    for (var r in e)
      t[r] = Xa(t[r], e[r]);
  return t;
}
function mu(t, e) {
  Object.defineProperty(t, "toString", { value: e });
}
var Kv = {}.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

`, 2: `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, 3: `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, 4: `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, 5: `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, 6: `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, 7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', 8: `ThemeProvider: Please make your "theme" prop an object.

`, 9: "Missing document `<head>`\n\n", 10: `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, 11: `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, 12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", 13: `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, 14: `ThemeProvider: "theme" prop is required.

`, 15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", 16: `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, 17: `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
`, 18: "ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`" } : {};
function Yv() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  for (var n = t[0], r = [], i = 1, o = t.length; i < o; i += 1)
    r.push(t[i]);
  return r.forEach(function(s) {
    n = n.replace(/%[a-z]/, s);
  }), n;
}
function ti(t) {
  for (var e = [], n = 1; n < arguments.length; n++)
    e[n - 1] = arguments[n];
  return {}.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t, " for more information.").concat(e.length > 0 ? " Args: ".concat(e.join(", ")) : "")) : new Error(Yv.apply(void 0, qr([Kv[t]], e, !1)).trim());
}
var Zv = function() {
  function t(e) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = e;
  }
  return t.prototype.indexOfGroup = function(e) {
    for (var n = 0, r = 0; r < e; r++)
      n += this.groupSizes[r];
    return n;
  }, t.prototype.insertRules = function(e, n) {
    if (e >= this.groupSizes.length) {
      for (var r = this.groupSizes, i = r.length, o = i; e >= o; )
        if ((o <<= 1) < 0)
          throw ti(16, "".concat(e));
      this.groupSizes = new Uint32Array(o), this.groupSizes.set(r), this.length = o;
      for (var s = i; s < o; s++)
        this.groupSizes[s] = 0;
    }
    for (var l = this.indexOfGroup(e + 1), a = (s = 0, n.length); s < a; s++)
      this.tag.insertRule(l, n[s]) && (this.groupSizes[e]++, l++);
  }, t.prototype.clearGroup = function(e) {
    if (e < this.length) {
      var n = this.groupSizes[e], r = this.indexOfGroup(e), i = r + n;
      this.groupSizes[e] = 0;
      for (var o = r; o < i; o++)
        this.tag.deleteRule(r);
    }
  }, t.prototype.getGroup = function(e) {
    var n = "";
    if (e >= this.length || this.groupSizes[e] === 0)
      return n;
    for (var r = this.groupSizes[e], i = this.indexOfGroup(e), o = i + r, s = i; s < o; s++)
      n += "".concat(this.tag.getRule(s)).concat(`/*!sc*/
`);
    return n;
  }, t;
}(), Qo = /* @__PURE__ */ new Map(), ps = /* @__PURE__ */ new Map(), jl = 1, vo = function(t) {
  if (Qo.has(t))
    return Qo.get(t);
  for (; ps.has(jl); )
    jl++;
  var e = jl++;
  if ({}.NODE_ENV !== "production" && ((0 | e) < 0 || e > 1073741824))
    throw ti(16, "".concat(e));
  return Qo.set(t, e), ps.set(e, t), e;
}, Jv = function(t, e) {
  Qo.set(t, e), ps.set(e, t);
}, Xv = "style[".concat(or, "][").concat("data-styled-version", '="').concat("6.0.7", '"]'), Qv = new RegExp("^".concat(or, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), ex = function(t, e, n) {
  for (var r, i = n.split(","), o = 0, s = i.length; o < s; o++)
    (r = i[o]) && t.registerName(e, r);
}, tx = function(t, e) {
  for (var n, r = ((n = e.textContent) !== null && n !== void 0 ? n : "").split(`/*!sc*/
`), i = [], o = 0, s = r.length; o < s; o++) {
    var l = r[o].trim();
    if (l) {
      var a = l.match(Qv);
      if (a) {
        var c = 0 | parseInt(a[1], 10), u = a[2];
        c !== 0 && (Jv(u, c), ex(t, u, a[3]), t.getTag().insertRules(c, i)), i.length = 0;
      } else
        i.push(l);
    }
  }
};
function nx() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var qm = function(t) {
  var e = document.head, n = t || e, r = document.createElement("style"), i = function(l) {
    var a = Array.from(l.querySelectorAll("style[".concat(or, "]")));
    return a[a.length - 1];
  }(n), o = i !== void 0 ? i.nextSibling : null;
  r.setAttribute(or, "active"), r.setAttribute("data-styled-version", "6.0.7");
  var s = nx();
  return s && r.setAttribute("nonce", s), n.insertBefore(r, o), r;
}, rx = function() {
  function t(e) {
    this.element = qm(e), this.element.appendChild(document.createTextNode("")), this.sheet = function(n) {
      if (n.sheet)
        return n.sheet;
      for (var r = document.styleSheets, i = 0, o = r.length; i < o; i++) {
        var s = r[i];
        if (s.ownerNode === n)
          return s;
      }
      throw ti(17);
    }(this.element), this.length = 0;
  }
  return t.prototype.insertRule = function(e, n) {
    try {
      return this.sheet.insertRule(n, e), this.length++, !0;
    } catch {
      return !1;
    }
  }, t.prototype.deleteRule = function(e) {
    this.sheet.deleteRule(e), this.length--;
  }, t.prototype.getRule = function(e) {
    var n = this.sheet.cssRules[e];
    return n && n.cssText ? n.cssText : "";
  }, t;
}(), ix = function() {
  function t(e) {
    this.element = qm(e), this.nodes = this.element.childNodes, this.length = 0;
  }
  return t.prototype.insertRule = function(e, n) {
    if (e <= this.length && e >= 0) {
      var r = document.createTextNode(n);
      return this.element.insertBefore(r, this.nodes[e] || null), this.length++, !0;
    }
    return !1;
  }, t.prototype.deleteRule = function(e) {
    this.element.removeChild(this.nodes[e]), this.length--;
  }, t.prototype.getRule = function(e) {
    return e < this.length ? this.nodes[e].textContent : "";
  }, t;
}(), ox = function() {
  function t(e) {
    this.rules = [], this.length = 0;
  }
  return t.prototype.insertRule = function(e, n) {
    return e <= this.length && (this.rules.splice(e, 0, n), this.length++, !0);
  }, t.prototype.deleteRule = function(e) {
    this.rules.splice(e, 1), this.length--;
  }, t.prototype.getRule = function(e) {
    return e < this.length ? this.rules[e] : "";
  }, t;
}(), of = du, sx = { isServer: !du, useCSSOMInjection: !Lv }, $m = function() {
  function t(e, n, r) {
    e === void 0 && (e = Ur), n === void 0 && (n = {});
    var i = this;
    this.options = et(et({}, sx), e), this.gs = n, this.names = new Map(r), this.server = !!e.isServer, !this.server && du && of && (of = !1, function(o) {
      for (var s = document.querySelectorAll(Xv), l = 0, a = s.length; l < a; l++) {
        var c = s[l];
        c && c.getAttribute(or) !== "active" && (tx(o, c), c.parentNode && c.parentNode.removeChild(c));
      }
    }(this)), mu(this, function() {
      return function(o) {
        for (var s = o.getTag(), l = s.length, a = "", c = function(h) {
          var f = function(y) {
            return ps.get(y);
          }(h);
          if (f === void 0)
            return "continue";
          var d = o.names.get(f), p = s.getGroup(h);
          if (d === void 0 || p.length === 0)
            return "continue";
          var m = "".concat(or, ".g").concat(h, '[id="').concat(f, '"]'), g = "";
          d !== void 0 && d.forEach(function(y) {
            y.length > 0 && (g += "".concat(y, ","));
          }), a += "".concat(p).concat(m, '{content:"').concat(g, '"}').concat(`/*!sc*/
`);
        }, u = 0; u < l; u++)
          c(u);
        return a;
      }(i);
    });
  }
  return t.registerId = function(e) {
    return vo(e);
  }, t.prototype.reconstructWithOptions = function(e, n) {
    return n === void 0 && (n = !0), new t(et(et({}, this.options), e), this.gs, n && this.names || void 0);
  }, t.prototype.allocateGSInstance = function(e) {
    return this.gs[e] = (this.gs[e] || 0) + 1;
  }, t.prototype.getTag = function() {
    return this.tag || (this.tag = (e = function(n) {
      var r = n.useCSSOMInjection, i = n.target;
      return n.isServer ? new ox(i) : r ? new rx(i) : new ix(i);
    }(this.options), new Zv(e)));
    var e;
  }, t.prototype.hasNameForId = function(e, n) {
    return this.names.has(e) && this.names.get(e).has(n);
  }, t.prototype.registerName = function(e, n) {
    if (vo(e), this.names.has(e))
      this.names.get(e).add(n);
    else {
      var r = /* @__PURE__ */ new Set();
      r.add(n), this.names.set(e, r);
    }
  }, t.prototype.insertRules = function(e, n, r) {
    this.registerName(e, n), this.getTag().insertRules(vo(e), r);
  }, t.prototype.clearNames = function(e) {
    this.names.has(e) && this.names.get(e).clear();
  }, t.prototype.clearRules = function(e) {
    this.getTag().clearGroup(vo(e)), this.clearNames(e);
  }, t.prototype.clearTag = function() {
    this.tag = void 0;
  }, t;
}(), lx = /&/g, ax = /^\s*\/\/.*$/gm;
function Hm(t, e) {
  return t.map(function(n) {
    return n.type === "rule" && (n.value = "".concat(e, " ").concat(n.value), n.value = n.value.replaceAll(",", ",".concat(e, " ")), n.props = n.props.map(function(r) {
      return "".concat(e, " ").concat(r);
    })), Array.isArray(n.children) && n.type !== "@keyframes" && (n.children = Hm(n.children, e)), n;
  });
}
function cx(t) {
  var e, n, r, i = t === void 0 ? Ur : t, o = i.options, s = o === void 0 ? Ur : o, l = i.plugins, a = l === void 0 ? il : l, c = function(f, d, p) {
    return p === n || p.startsWith(n) && p.endsWith(n) && p.replaceAll(n, "").length > 0 ? ".".concat(e) : f;
  }, u = a.slice();
  u.push(function(f) {
    f.type === el && f.value.includes("&") && (f.props[0] = f.props[0].replace(lx, n).replace(r, c));
  }), s.prefix && u.push(Ov), u.push(Tv);
  var h = function(f, d, p, m) {
    d === void 0 && (d = ""), p === void 0 && (p = ""), m === void 0 && (m = "&"), e = m, n = d, r = new RegExp("\\".concat(n, "\\b"), "g");
    var g = f.replace(ax, ""), y = Sv(p || d ? "".concat(p, " ").concat(d, " { ").concat(g, " }") : g);
    s.namespace && (y = Hm(y, s.namespace));
    var b = [];
    return ds(y, Dv(u.concat(Mv(function(k) {
      return b.push(k);
    })))), b;
  };
  return h.hash = a.length ? a.reduce(function(f, d) {
    return d.name || ti(15), Gn(f, d.name);
  }, 5381).toString() : "", h;
}
var ux = new $m(), Qa = cx(), zm = Pi.createContext({ shouldForwardProp: void 0, styleSheet: ux, stylis: Qa });
zm.Consumer;
Pi.createContext(void 0);
function sf() {
  return vm(zm);
}
var lf = function() {
  function t(e, n) {
    var r = this;
    this.inject = function(i, o) {
      o === void 0 && (o = Qa);
      var s = r.name + o.hash;
      i.hasNameForId(r.id, s) || i.insertRules(r.id, s, o(r.rules, s, "@keyframes"));
    }, this.name = e, this.id = "sc-keyframes-".concat(e), this.rules = n, mu(this, function() {
      throw ti(12, String(r.name));
    });
  }
  return t.prototype.getName = function(e) {
    return e === void 0 && (e = Qa), this.name + e.hash;
  }, t;
}(), hx = function(t) {
  return t >= "A" && t <= "Z";
};
function af(t) {
  for (var e = "", n = 0; n < t.length; n++) {
    var r = t[n];
    if (n === 1 && r === "-" && t[0] === "-")
      return t;
    hx(r) ? e += "-" + r.toLowerCase() : e += r;
  }
  return e.startsWith("ms-") ? "-" + e : e;
}
var Vm = function(t) {
  return t == null || t === !1 || t === "";
}, Um = function(t) {
  var e, n, r = [];
  for (var i in t) {
    var o = t[i];
    t.hasOwnProperty(i) && !Vm(o) && (Array.isArray(o) && o.isCss || Wr(o) ? r.push("".concat(af(i), ":"), o, ";") : jr(o) ? r.push.apply(r, qr(qr(["".concat(i, " {")], Um(o), !1), ["}"], !1)) : r.push("".concat(af(i), ": ").concat((e = i, (n = o) == null || typeof n == "boolean" || n === "" ? "" : typeof n != "number" || n === 0 || e in Rv || e.startsWith("--") ? String(n).trim() : "".concat(n, "px")), ";")));
  }
  return r;
};
function tr(t, e, n, r) {
  if (Vm(t))
    return [];
  if (pu(t))
    return [".".concat(t.styledComponentId)];
  if (Wr(t)) {
    if (!Wr(o = t) || o.prototype && o.prototype.isReactComponent || !e)
      return [t];
    var i = t(e);
    return {}.NODE_ENV === "production" || typeof i != "object" || Array.isArray(i) || i instanceof lf || jr(i) || i === null || console.error("".concat(Im(t), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), tr(i, e, n, r);
  }
  var o;
  return t instanceof lf ? n ? (t.inject(n, r), [t.getName(r)]) : [t] : jr(t) ? Um(t) : Array.isArray(t) ? Array.prototype.concat.apply(il, t.map(function(s) {
    return tr(s, e, n, r);
  })) : [t.toString()];
}
function fx(t) {
  for (var e = 0; e < t.length; e += 1) {
    var n = t[e];
    if (Wr(n) && !pu(n))
      return !1;
  }
  return !0;
}
var dx = Lm("6.0.7"), px = function() {
  function t(e, n, r) {
    this.rules = e, this.staticRulesId = "", this.isStatic = {}.NODE_ENV === "production" && (r === void 0 || r.isStatic) && fx(e), this.componentId = n, this.baseHash = Gn(dx, n), this.baseStyle = r, $m.registerId(n);
  }
  return t.prototype.generateAndInjectStyles = function(e, n, r) {
    var i = this.baseStyle ? this.baseStyle.generateAndInjectStyles(e, n, r) : "";
    if (this.isStatic && !r.hash)
      if (this.staticRulesId && n.hasNameForId(this.componentId, this.staticRulesId))
        i = Zn(i, this.staticRulesId);
      else {
        var o = rf(tr(this.rules, e, n, r)), s = Ja(Gn(this.baseHash, o) >>> 0);
        if (!n.hasNameForId(this.componentId, s)) {
          var l = r(o, ".".concat(s), void 0, this.componentId);
          n.insertRules(this.componentId, s, l);
        }
        i = Zn(i, s), this.staticRulesId = s;
      }
    else {
      for (var a = Gn(this.baseHash, r.hash), c = "", u = 0; u < this.rules.length; u++) {
        var h = this.rules[u];
        if (typeof h == "string")
          c += h, {}.NODE_ENV !== "production" && (a = Gn(a, h));
        else if (h) {
          var f = rf(tr(h, e, n, r));
          a = Gn(a, f), c += f;
        }
      }
      if (c) {
        var d = Ja(a >>> 0);
        n.hasNameForId(this.componentId, d) || n.insertRules(this.componentId, d, r(c, ".".concat(d), void 0, this.componentId)), i = Zn(i, d);
      }
    }
    return i;
  }, t;
}(), Wm = Pi.createContext(void 0);
Wm.Consumer;
var Gl = {}, cf = /* @__PURE__ */ new Set();
function mx(t, e, n) {
  var r = pu(t), i = t, o = !Wl(t), s = e.attrs, l = s === void 0 ? il : s, a = e.componentId, c = a === void 0 ? function(x, w) {
    var v = typeof x != "string" ? "sc" : Xh(x);
    Gl[v] = (Gl[v] || 0) + 1;
    var C = "".concat(v, "-").concat(qv("6.0.7" + v + Gl[v]));
    return w ? "".concat(w, "-").concat(C) : C;
  }(e.displayName, e.parentComponentId) : a, u = e.displayName, h = u === void 0 ? function(x) {
    return Wl(x) ? "styled.".concat(x) : "Styled(".concat(Im(x), ")");
  }(t) : u, f = e.displayName && e.componentId ? "".concat(Xh(e.displayName), "-").concat(e.componentId) : e.componentId || c, d = r && i.attrs ? i.attrs.concat(l).filter(Boolean) : l, p = e.shouldForwardProp;
  if (r && i.shouldForwardProp) {
    var m = i.shouldForwardProp;
    if (e.shouldForwardProp) {
      var g = e.shouldForwardProp;
      p = function(x, w) {
        return m(x, w) && g(x, w);
      };
    } else
      p = m;
  }
  var y = new px(n, f, r ? i.componentStyle : void 0);
  function b(x, w) {
    return function(v, C, L) {
      var R = v.attrs, T = v.componentStyle, H = v.defaultProps, Q = v.foldedComponentIds, G = v.styledComponentId, S = v.target, z = Pi.useContext(Wm), $ = sf(), he = v.shouldForwardProp || $.shouldForwardProp;
      ({}).NODE_ENV !== "production" && Va(G);
      var ie = function(le, dn, ae) {
        for (var ct, wt = et(et({}, dn), { className: void 0, theme: ae }), dr = 0; dr < le.length; dr += 1) {
          var pn = Wr(ct = le[dr]) ? ct(wt) : ct;
          for (var Ct in pn)
            wt[Ct] = Ct === "className" ? Zn(wt[Ct], pn[Ct]) : Ct === "style" ? et(et({}, wt[Ct]), pn[Ct]) : pn[Ct];
        }
        return dn.className && (wt.className = Zn(wt.className, dn.className)), wt;
      }(R, C, Nv(C, z, H) || Ur), ne = ie.as || S, oe = {};
      for (var me in ie)
        ie[me] === void 0 || me[0] === "$" || me === "as" || me === "theme" || (me === "forwardedAs" ? oe.as = ie.forwardedAs : he && !he(me, ne) || (oe[me] = ie[me], he || {}.NODE_ENV !== "development" || y1(me) || cf.has(me) || !Za.has(ne) || (cf.add(me), console.warn('styled-components: it looks like an unknown prop "'.concat(me, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var re = function(le, dn) {
        var ae = sf(), ct = le.generateAndInjectStyles(dn, ae.styleSheet, ae.stylis);
        return {}.NODE_ENV !== "production" && Va(ct), ct;
      }(T, ie);
      ({}).NODE_ENV !== "production" && v.warnTooManyClasses && v.warnTooManyClasses(re);
      var kt = Zn(Q, G);
      return re && (kt += " " + re), ie.className && (kt += " " + ie.className), oe[Wl(ne) && !Za.has(ne) ? "class" : "className"] = kt, oe.ref = L, Tt(ne, oe);
    }(k, x, w);
  }
  ({}).NODE_ENV !== "production" && (b.displayName = h);
  var k = Pi.forwardRef(b);
  return k.attrs = d, k.componentStyle = y, k.shouldForwardProp = p, {}.NODE_ENV !== "production" && (k.displayName = h), k.foldedComponentIds = r ? Zn(i.foldedComponentIds, i.styledComponentId) : "", k.styledComponentId = f, k.target = r ? i.target : t, Object.defineProperty(k, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(x) {
    this._foldedDefaultProps = r ? function(w) {
      for (var v = [], C = 1; C < arguments.length; C++)
        v[C - 1] = arguments[C];
      for (var L = 0, R = v; L < R.length; L++)
        Xa(w, R[L], !0);
      return w;
    }({}, i.defaultProps, x) : x;
  } }), {}.NODE_ENV !== "production" && (Iv(h, f), k.warnTooManyClasses = function(x, w) {
    var v = {}, C = !1;
    return function(L) {
      if (!C && (v[L] = !0, Object.keys(v).length >= 200)) {
        var R = w ? ' with the id of "'.concat(w, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(x).concat(R, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), C = !0, v = {};
      }
    };
  }(h, f)), mu(k, function() {
    return ".".concat(k.styledComponentId);
  }), o && Fm(k, t, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), k;
}
function uf(t, e) {
  for (var n = [t[0]], r = 0, i = e.length; r < i; r += 1)
    n.push(e[r], t[r + 1]);
  return n;
}
var hf = function(t) {
  return Object.assign(t, { isCss: !0 });
};
function Ti(t) {
  for (var e = [], n = 1; n < arguments.length; n++)
    e[n - 1] = arguments[n];
  if (Wr(t) || jr(t)) {
    var r = t;
    return hf(tr(uf(il, qr([r], e, !0))));
  }
  var i = t;
  return e.length === 0 && i.length === 1 && typeof i[0] == "string" ? tr(i) : hf(tr(uf(i, e)));
}
function ec(t, e, n) {
  if (n === void 0 && (n = Ur), !e)
    throw ti(1, e);
  var r = function(i) {
    for (var o = [], s = 1; s < arguments.length; s++)
      o[s - 1] = arguments[s];
    return t(e, n, Ti.apply(void 0, qr([i], o, !1)));
  };
  return r.attrs = function(i) {
    return ec(t, e, et(et({}, n), { attrs: Array.prototype.concat(n.attrs, i).filter(Boolean) }));
  }, r.withConfig = function(i) {
    return ec(t, e, et(et({}, n), i));
  }, r;
}
var jm = function(t) {
  return ec(mx, t);
}, ve = jm;
Za.forEach(function(t) {
  ve[t] = jm(t);
});
({}).NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var xo = "__sc-".concat(or, "__");
({}).NODE_ENV !== "production" && {}.NODE_ENV !== "test" && typeof window < "u" && (window[xo] || (window[xo] = 0), window[xo] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[xo] += 1);
var Gm = function(t, e, n, r) {
  var i;
  e[0] = 0;
  for (var o = 1; o < e.length; o++) {
    var s = e[o++], l = e[o] ? (e[0] |= s ? 1 : 2, n[e[o++]]) : e[++o];
    s === 3 ? r[0] = l : s === 4 ? r[1] = Object.assign(r[1] || {}, l) : s === 5 ? (r[1] = r[1] || {})[e[++o]] = l : s === 6 ? r[1][e[++o]] += l + "" : s ? (i = t.apply(l, Gm(t, l, n, ["", null])), r.push(i), l[0] ? e[0] |= 2 : (e[o - 2] = 0, e[o] = i)) : r.push(l);
  }
  return r;
}, ff = /* @__PURE__ */ new Map();
function gx(t) {
  var e = ff.get(this);
  return e || (e = /* @__PURE__ */ new Map(), ff.set(this, e)), (e = Gm(this, e.get(t) || (e.set(t, e = function(n) {
    for (var r, i, o = 1, s = "", l = "", a = [0], c = function(f) {
      o === 1 && (f || (s = s.replace(/^\s*\n\s*|\s*\n\s*$/g, ""))) ? a.push(0, f, s) : o === 3 && (f || s) ? (a.push(3, f, s), o = 2) : o === 2 && s === "..." && f ? a.push(4, f, 0) : o === 2 && s && !f ? a.push(5, 0, !0, s) : o >= 5 && ((s || !f && o === 5) && (a.push(o, 0, s, i), o = 6), f && (a.push(o, f, 0, i), o = 6)), s = "";
    }, u = 0; u < n.length; u++) {
      u && (o === 1 && c(), c(u));
      for (var h = 0; h < n[u].length; h++)
        r = n[u][h], o === 1 ? r === "<" ? (c(), a = [a], o = 3) : s += r : o === 4 ? s === "--" && r === ">" ? (o = 1, s = "") : s = r + s[0] : l ? r === l ? l = "" : s += r : r === '"' || r === "'" ? l = r : r === ">" ? (c(), o = 1) : o && (r === "=" ? (o = 5, i = s, s = "") : r === "/" && (o < 5 || n[u][h + 1] === ">") ? (c(), o === 3 && (a = a[0]), o = a, (a = a[0]).push(2, 0, o), o = 0) : r === " " || r === "	" || r === `
` || r === "\r" ? (c(), o = 2) : s += r), o === 3 && s === "!--" && (o = 4, a = a[0]);
    }
    return c(), a;
  }(t)), e), arguments, [])).length > 1 ? e : e[0];
}
var ht = gx.bind(Tt);
class Fn {
  constructor(e) {
    this.state = e;
  }
  run(e) {
    return [];
  }
}
class yx extends Fn {
  run(e) {
    const n = new this.state.Token("code_inline", "code", 0);
    return n.content = e.content, [n];
  }
}
const bx = {
  raw: yx
}, tc = "math_inline";
class vx extends Fn {
  run(e) {
    const n = new this.state.Token(tc, "span", 0);
    return n.attrSet("class", "math inline"), n.markup = "$", n.content = e.content, [n];
  }
}
function xx(t, e) {
  var n;
  !(!((n = e == null ? void 0 : e.roles) === null || n === void 0) && n.math) || t.renderer.rules[tc] || (t.renderer.rules[tc] = (r, i) => {
    var o, s, l;
    const a = (l = (s = (o = e == null ? void 0 : e.opts) === null || o === void 0 ? void 0 : o.math) === null || s === void 0 ? void 0 : s.renderer) !== null && l !== void 0 ? l : (f) => t.utils.escapeHtml(f), c = r[i], u = c.content.trim(), h = a(u, { displayMode: !1 });
    return `<span class="${c.attrGet("class")}">${h}</span>`;
  });
}
const _x = {
  math: vx
};
function kx(t, e) {
  e.parseRoles && t.inline.ruler.before("backticks", "parse_roles", wx), t.core.ruler.after(e.rolesAfter || "inline", "run_roles", Ax(e.roles || {})), t.renderer.rules.role = (n, r) => {
    const i = n[r];
    return `<span class="role-unhandled"><mark>${i.meta.name}</mark><code>${i.content}</code></span>`;
  }, xx(t, e);
}
function wx(t, e) {
  if (t.src.charCodeAt(t.pos - 1) === 92)
    return !1;
  const n = Cx.exec(t.src.slice(t.pos));
  if (n == null)
    return !1;
  const [r, i, , o] = n;
  if (t.pos += r.length, !e) {
    const s = t.push("role", "", 0);
    s.meta = { name: i }, s.content = o;
  }
  return !0;
}
let nc;
try {
  nc = new RegExp("^\\{([a-zA-Z_\\-+:]{1,36})\\}(`+)(?!`)(.+?)(?<!`)\\2(?!`)");
} catch {
  nc = /^\{([a-zA-Z_\-+:]{1,36})\}(`+)(?!`)(.+?)\2(?!`)/;
}
const Cx = nc;
function Ax(t) {
  function e(n) {
    var r;
    for (const i of n.tokens)
      if (i.type === "inline" && i.children) {
        const o = [];
        for (const s of i.children)
          if (s.type === "role" && ((r = s.meta) === null || r === void 0 ? void 0 : r.name) in t)
            try {
              const l = new t[s.meta.name](n), a = new n.Token("parsed_role_open", "", 1);
              a.content = s.content, a.hidden = !0, a.meta = { name: s.meta.name }, a.block = !1;
              const c = [a];
              c.push(...l.run({
                parentMap: i.map,
                content: s.content
              }));
              const u = new n.Token("parsed_role_close", "", -1);
              u.block = !1, u.hidden = !0, c.push(u), o.push(...c);
            } catch (l) {
              const a = new n.Token("role_error", "", 0);
              a.content = s.content, a.info = s.info, a.meta = s.meta, a.map = s.map, a.meta.error_message = l.message, a.meta.error_name = l.name, o.push(a);
            }
          else
            o.push(s);
        i.children = o;
      }
    return !0;
  }
  return e;
}
class df extends Fn {
  run(e) {
    const n = new this.state.Token("sub_open", "sub", 1);
    n.markup = "~";
    const r = new this.state.Token("text", "", 0);
    r.content = e.content;
    const i = new this.state.Token("sub_close", "sub", -1);
    return i.markup = "~", [n, r, i];
  }
}
class pf extends Fn {
  run(e) {
    const n = new this.state.Token("sup_open", "sup", 1);
    n.markup = "~";
    const r = new this.state.Token("text", "", 0);
    r.content = e.content;
    const i = new this.state.Token("sup_close", "sup", -1);
    return i.markup = "~", [n, r, i];
  }
}
const Sx = /^(.+?)\(([^()]+)\)$/;
class mf extends Fn {
  run(e) {
    var n, r, i, o;
    const s = Sx.exec(e.content), l = (r = (n = s == null ? void 0 : s[1]) === null || n === void 0 ? void 0 : n.trim()) !== null && r !== void 0 ? r : e.content.trim(), a = (o = (i = s == null ? void 0 : s[2]) === null || i === void 0 ? void 0 : i.trim()) !== null && o !== void 0 ? o : null, c = new this.state.Token("abbr_open", "abbr", 1);
    a && c.attrSet("title", a);
    const u = new this.state.Token("text", "", 0);
    u.content = l;
    const h = new this.state.Token("abbr_close", "abbr", -1);
    return [c, u, h];
  }
}
const Ex = {
  subscript: df,
  sub: df,
  superscript: pf,
  sup: pf,
  abbreviation: mf,
  abbr: mf
};
var Bi;
(function(t) {
  t.equation = "eq", t.figure = "fig", t.table = "table", t.code = "code", t.section = "sec";
})(Bi || (Bi = {}));
function ol(t) {
  var e, n;
  const r = (n = (e = t.env) === null || e === void 0 ? void 0 : e.docutils) !== null && n !== void 0 ? n : {};
  return r.targets || (r.targets = {}), r.references || (r.references = []), r.numbering || (r.numbering = {}), t.env.docutils || (t.env.docutils = r), r;
}
function Tx(t) {
  var e, n;
  const r = (n = (e = t.meta) === null || e === void 0 ? void 0 : e.docutils) !== null && n !== void 0 ? n : {};
  return t.meta || (t.meta = {}), t.meta.docutils || (t.meta.docutils = r), r;
}
function Dx(t, e) {
  const n = ol(t);
  return n.numbering[e] == null ? n.numbering[e] = 1 : n.numbering[e] += 1, n.numbering[e];
}
function Km(t, e, n, r, i, o = !1) {
  const s = ol(t), l = Dx(t, n), a = {
    label: r,
    kind: n,
    number: l,
    title: i
  };
  if (!o) {
    const c = Tx(e);
    c.target = a, e.attrSet("id", r), s.targets[r] = a;
  }
  return a;
}
function gu(t, e, n, r) {
  var i;
  e.open.meta = (i = e.open.meta) !== null && i !== void 0 ? i : {}, e.open.meta.kind = n.kind, e.open.meta.label = n.label, e.open.meta.value = n.value, ol(t).references.push(Object.assign({ label: n.label, tokens: e }, r));
}
const Ym = /^(.+?)<([^<>]+)>$/;
class Mx extends Fn {
  run(e) {
    const n = new this.state.Token("ref_open", "a", 1), r = new this.state.Token("text", "", 0), i = new this.state.Token("ref_close", "a", -1);
    return gu(this.state, { open: n, content: r, close: i }, { kind: "eq", label: e.content }, {
      kind: Bi.equation,
      contentFromTarget: (o) => `(${o.number})`
    }), [n, r, i];
  }
}
class Ox extends Fn {
  run(e) {
    const n = Ym.exec(e.content), [, r, i] = n != null ? n : [], o = r == null ? void 0 : r.trim(), s = new this.state.Token("ref_open", "a", 1), l = new this.state.Token("text", "", 0), a = new this.state.Token("ref_close", "a", -1);
    return gu(this.state, { open: s, content: l, close: a }, { kind: "numref", label: i || e.content, value: o }, {
      contentFromTarget: (c) => n ? o.replace(/%s/g, String(c.number)).replace(/\{number\}/g, String(c.number)) : c.title.trim()
    }), [s, l, a];
  }
}
class Rx extends Fn {
  run(e) {
    const n = Ym.exec(e.content), [, r, i] = n != null ? n : [], o = r == null ? void 0 : r.trim(), s = new this.state.Token("ref_open", "a", 1), l = new this.state.Token("text", "", 0), a = new this.state.Token("ref_close", "a", -1);
    return gu(this.state, { open: s, content: l, close: a }, { kind: "ref", label: i || e.content, value: o }, {
      contentFromTarget: (c) => o || c.title
    }), [s, l, a];
  }
}
const Lx = {
  eq: Mx,
  ref: Rx,
  numref: Ox
}, Ix = Object.assign(Object.assign(Object.assign(Object.assign({}, bx), Ex), _x), Lx);
/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */
function Zm(t) {
  return typeof t > "u" || t === null;
}
function Nx(t) {
  return typeof t == "object" && t !== null;
}
function Px(t) {
  return Array.isArray(t) ? t : Zm(t) ? [] : [t];
}
function Bx(t, e) {
  var n, r, i, o;
  if (e)
    for (o = Object.keys(e), n = 0, r = o.length; n < r; n += 1)
      i = o[n], t[i] = e[i];
  return t;
}
function Fx(t, e) {
  var n = "", r;
  for (r = 0; r < e; r += 1)
    n += t;
  return n;
}
function qx(t) {
  return t === 0 && Number.NEGATIVE_INFINITY === 1 / t;
}
var $x = Zm, Hx = Nx, zx = Px, Vx = Fx, Ux = qx, Wx = Bx, Ae = {
  isNothing: $x,
  isObject: Hx,
  toArray: zx,
  repeat: Vx,
  isNegativeZero: Ux,
  extend: Wx
};
function Jm(t, e) {
  var n = "", r = t.reason || "(unknown reason)";
  return t.mark ? (t.mark.name && (n += 'in "' + t.mark.name + '" '), n += "(" + (t.mark.line + 1) + ":" + (t.mark.column + 1) + ")", !e && t.mark.snippet && (n += `

` + t.mark.snippet), r + " " + n) : r;
}
function Fi(t, e) {
  Error.call(this), this.name = "YAMLException", this.reason = t, this.mark = e, this.message = Jm(this, !1), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack || "";
}
Fi.prototype = Object.create(Error.prototype);
Fi.prototype.constructor = Fi;
Fi.prototype.toString = function(e) {
  return this.name + ": " + Jm(this, e);
};
var Ge = Fi;
function Kl(t, e, n, r, i) {
  var o = "", s = "", l = Math.floor(i / 2) - 1;
  return r - e > l && (o = " ... ", e = r - l + o.length), n - r > l && (s = " ...", n = r + l - s.length), {
    str: o + t.slice(e, n).replace(/\t/g, "\u2192") + s,
    pos: r - e + o.length
  };
}
function Yl(t, e) {
  return Ae.repeat(" ", e - t.length) + t;
}
function jx(t, e) {
  if (e = Object.create(e || null), !t.buffer)
    return null;
  e.maxLength || (e.maxLength = 79), typeof e.indent != "number" && (e.indent = 1), typeof e.linesBefore != "number" && (e.linesBefore = 3), typeof e.linesAfter != "number" && (e.linesAfter = 2);
  for (var n = /\r?\n|\r|\0/g, r = [0], i = [], o, s = -1; o = n.exec(t.buffer); )
    i.push(o.index), r.push(o.index + o[0].length), t.position <= o.index && s < 0 && (s = r.length - 2);
  s < 0 && (s = r.length - 1);
  var l = "", a, c, u = Math.min(t.line + e.linesAfter, i.length).toString().length, h = e.maxLength - (e.indent + u + 3);
  for (a = 1; a <= e.linesBefore && !(s - a < 0); a++)
    c = Kl(
      t.buffer,
      r[s - a],
      i[s - a],
      t.position - (r[s] - r[s - a]),
      h
    ), l = Ae.repeat(" ", e.indent) + Yl((t.line - a + 1).toString(), u) + " | " + c.str + `
` + l;
  for (c = Kl(t.buffer, r[s], i[s], t.position, h), l += Ae.repeat(" ", e.indent) + Yl((t.line + 1).toString(), u) + " | " + c.str + `
`, l += Ae.repeat("-", e.indent + u + 3 + c.pos) + `^
`, a = 1; a <= e.linesAfter && !(s + a >= i.length); a++)
    c = Kl(
      t.buffer,
      r[s + a],
      i[s + a],
      t.position - (r[s] - r[s + a]),
      h
    ), l += Ae.repeat(" ", e.indent) + Yl((t.line + a + 1).toString(), u) + " | " + c.str + `
`;
  return l.replace(/\n$/, "");
}
var Gx = jx, Kx = [
  "kind",
  "multi",
  "resolve",
  "construct",
  "instanceOf",
  "predicate",
  "represent",
  "representName",
  "defaultStyle",
  "styleAliases"
], Yx = [
  "scalar",
  "sequence",
  "mapping"
];
function Zx(t) {
  var e = {};
  return t !== null && Object.keys(t).forEach(function(n) {
    t[n].forEach(function(r) {
      e[String(r)] = n;
    });
  }), e;
}
function Jx(t, e) {
  if (e = e || {}, Object.keys(e).forEach(function(n) {
    if (Kx.indexOf(n) === -1)
      throw new Ge('Unknown option "' + n + '" is met in definition of "' + t + '" YAML type.');
  }), this.options = e, this.tag = t, this.kind = e.kind || null, this.resolve = e.resolve || function() {
    return !0;
  }, this.construct = e.construct || function(n) {
    return n;
  }, this.instanceOf = e.instanceOf || null, this.predicate = e.predicate || null, this.represent = e.represent || null, this.representName = e.representName || null, this.defaultStyle = e.defaultStyle || null, this.multi = e.multi || !1, this.styleAliases = Zx(e.styleAliases || null), Yx.indexOf(this.kind) === -1)
    throw new Ge('Unknown kind "' + this.kind + '" is specified for "' + t + '" YAML type.');
}
var Pe = Jx;
function gf(t, e) {
  var n = [];
  return t[e].forEach(function(r) {
    var i = n.length;
    n.forEach(function(o, s) {
      o.tag === r.tag && o.kind === r.kind && o.multi === r.multi && (i = s);
    }), n[i] = r;
  }), n;
}
function Xx() {
  var t = {
    scalar: {},
    sequence: {},
    mapping: {},
    fallback: {},
    multi: {
      scalar: [],
      sequence: [],
      mapping: [],
      fallback: []
    }
  }, e, n;
  function r(i) {
    i.multi ? (t.multi[i.kind].push(i), t.multi.fallback.push(i)) : t[i.kind][i.tag] = t.fallback[i.tag] = i;
  }
  for (e = 0, n = arguments.length; e < n; e += 1)
    arguments[e].forEach(r);
  return t;
}
function rc(t) {
  return this.extend(t);
}
rc.prototype.extend = function(e) {
  var n = [], r = [];
  if (e instanceof Pe)
    r.push(e);
  else if (Array.isArray(e))
    r = r.concat(e);
  else if (e && (Array.isArray(e.implicit) || Array.isArray(e.explicit)))
    e.implicit && (n = n.concat(e.implicit)), e.explicit && (r = r.concat(e.explicit));
  else
    throw new Ge("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");
  n.forEach(function(o) {
    if (!(o instanceof Pe))
      throw new Ge("Specified list of YAML types (or a single Type object) contains a non-Type object.");
    if (o.loadKind && o.loadKind !== "scalar")
      throw new Ge("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");
    if (o.multi)
      throw new Ge("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.");
  }), r.forEach(function(o) {
    if (!(o instanceof Pe))
      throw new Ge("Specified list of YAML types (or a single Type object) contains a non-Type object.");
  });
  var i = Object.create(rc.prototype);
  return i.implicit = (this.implicit || []).concat(n), i.explicit = (this.explicit || []).concat(r), i.compiledImplicit = gf(i, "implicit"), i.compiledExplicit = gf(i, "explicit"), i.compiledTypeMap = Xx(i.compiledImplicit, i.compiledExplicit), i;
};
var Xm = rc, Qm = new Pe("tag:yaml.org,2002:str", {
  kind: "scalar",
  construct: function(t) {
    return t !== null ? t : "";
  }
}), eg = new Pe("tag:yaml.org,2002:seq", {
  kind: "sequence",
  construct: function(t) {
    return t !== null ? t : [];
  }
}), tg = new Pe("tag:yaml.org,2002:map", {
  kind: "mapping",
  construct: function(t) {
    return t !== null ? t : {};
  }
}), ng = new Xm({
  explicit: [
    Qm,
    eg,
    tg
  ]
});
function Qx(t) {
  if (t === null)
    return !0;
  var e = t.length;
  return e === 1 && t === "~" || e === 4 && (t === "null" || t === "Null" || t === "NULL");
}
function e_() {
  return null;
}
function t_(t) {
  return t === null;
}
var rg = new Pe("tag:yaml.org,2002:null", {
  kind: "scalar",
  resolve: Qx,
  construct: e_,
  predicate: t_,
  represent: {
    canonical: function() {
      return "~";
    },
    lowercase: function() {
      return "null";
    },
    uppercase: function() {
      return "NULL";
    },
    camelcase: function() {
      return "Null";
    },
    empty: function() {
      return "";
    }
  },
  defaultStyle: "lowercase"
});
function n_(t) {
  if (t === null)
    return !1;
  var e = t.length;
  return e === 4 && (t === "true" || t === "True" || t === "TRUE") || e === 5 && (t === "false" || t === "False" || t === "FALSE");
}
function r_(t) {
  return t === "true" || t === "True" || t === "TRUE";
}
function i_(t) {
  return Object.prototype.toString.call(t) === "[object Boolean]";
}
var ig = new Pe("tag:yaml.org,2002:bool", {
  kind: "scalar",
  resolve: n_,
  construct: r_,
  predicate: i_,
  represent: {
    lowercase: function(t) {
      return t ? "true" : "false";
    },
    uppercase: function(t) {
      return t ? "TRUE" : "FALSE";
    },
    camelcase: function(t) {
      return t ? "True" : "False";
    }
  },
  defaultStyle: "lowercase"
});
function o_(t) {
  return 48 <= t && t <= 57 || 65 <= t && t <= 70 || 97 <= t && t <= 102;
}
function s_(t) {
  return 48 <= t && t <= 55;
}
function l_(t) {
  return 48 <= t && t <= 57;
}
function a_(t) {
  if (t === null)
    return !1;
  var e = t.length, n = 0, r = !1, i;
  if (!e)
    return !1;
  if (i = t[n], (i === "-" || i === "+") && (i = t[++n]), i === "0") {
    if (n + 1 === e)
      return !0;
    if (i = t[++n], i === "b") {
      for (n++; n < e; n++)
        if (i = t[n], i !== "_") {
          if (i !== "0" && i !== "1")
            return !1;
          r = !0;
        }
      return r && i !== "_";
    }
    if (i === "x") {
      for (n++; n < e; n++)
        if (i = t[n], i !== "_") {
          if (!o_(t.charCodeAt(n)))
            return !1;
          r = !0;
        }
      return r && i !== "_";
    }
    if (i === "o") {
      for (n++; n < e; n++)
        if (i = t[n], i !== "_") {
          if (!s_(t.charCodeAt(n)))
            return !1;
          r = !0;
        }
      return r && i !== "_";
    }
  }
  if (i === "_")
    return !1;
  for (; n < e; n++)
    if (i = t[n], i !== "_") {
      if (!l_(t.charCodeAt(n)))
        return !1;
      r = !0;
    }
  return !(!r || i === "_");
}
function c_(t) {
  var e = t, n = 1, r;
  if (e.indexOf("_") !== -1 && (e = e.replace(/_/g, "")), r = e[0], (r === "-" || r === "+") && (r === "-" && (n = -1), e = e.slice(1), r = e[0]), e === "0")
    return 0;
  if (r === "0") {
    if (e[1] === "b")
      return n * parseInt(e.slice(2), 2);
    if (e[1] === "x")
      return n * parseInt(e.slice(2), 16);
    if (e[1] === "o")
      return n * parseInt(e.slice(2), 8);
  }
  return n * parseInt(e, 10);
}
function u_(t) {
  return Object.prototype.toString.call(t) === "[object Number]" && t % 1 === 0 && !Ae.isNegativeZero(t);
}
var og = new Pe("tag:yaml.org,2002:int", {
  kind: "scalar",
  resolve: a_,
  construct: c_,
  predicate: u_,
  represent: {
    binary: function(t) {
      return t >= 0 ? "0b" + t.toString(2) : "-0b" + t.toString(2).slice(1);
    },
    octal: function(t) {
      return t >= 0 ? "0o" + t.toString(8) : "-0o" + t.toString(8).slice(1);
    },
    decimal: function(t) {
      return t.toString(10);
    },
    hexadecimal: function(t) {
      return t >= 0 ? "0x" + t.toString(16).toUpperCase() : "-0x" + t.toString(16).toUpperCase().slice(1);
    }
  },
  defaultStyle: "decimal",
  styleAliases: {
    binary: [2, "bin"],
    octal: [8, "oct"],
    decimal: [10, "dec"],
    hexadecimal: [16, "hex"]
  }
}), h_ = new RegExp(
  "^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"
);
function f_(t) {
  return !(t === null || !h_.test(t) || t[t.length - 1] === "_");
}
function d_(t) {
  var e, n;
  return e = t.replace(/_/g, "").toLowerCase(), n = e[0] === "-" ? -1 : 1, "+-".indexOf(e[0]) >= 0 && (e = e.slice(1)), e === ".inf" ? n === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY : e === ".nan" ? NaN : n * parseFloat(e, 10);
}
var p_ = /^[-+]?[0-9]+e/;
function m_(t, e) {
  var n;
  if (isNaN(t))
    switch (e) {
      case "lowercase":
        return ".nan";
      case "uppercase":
        return ".NAN";
      case "camelcase":
        return ".NaN";
    }
  else if (Number.POSITIVE_INFINITY === t)
    switch (e) {
      case "lowercase":
        return ".inf";
      case "uppercase":
        return ".INF";
      case "camelcase":
        return ".Inf";
    }
  else if (Number.NEGATIVE_INFINITY === t)
    switch (e) {
      case "lowercase":
        return "-.inf";
      case "uppercase":
        return "-.INF";
      case "camelcase":
        return "-.Inf";
    }
  else if (Ae.isNegativeZero(t))
    return "-0.0";
  return n = t.toString(10), p_.test(n) ? n.replace("e", ".e") : n;
}
function g_(t) {
  return Object.prototype.toString.call(t) === "[object Number]" && (t % 1 !== 0 || Ae.isNegativeZero(t));
}
var sg = new Pe("tag:yaml.org,2002:float", {
  kind: "scalar",
  resolve: f_,
  construct: d_,
  predicate: g_,
  represent: m_,
  defaultStyle: "lowercase"
}), lg = ng.extend({
  implicit: [
    rg,
    ig,
    og,
    sg
  ]
}), ag = lg, cg = new RegExp(
  "^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"
), ug = new RegExp(
  "^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$"
);
function y_(t) {
  return t === null ? !1 : cg.exec(t) !== null || ug.exec(t) !== null;
}
function b_(t) {
  var e, n, r, i, o, s, l, a = 0, c = null, u, h, f;
  if (e = cg.exec(t), e === null && (e = ug.exec(t)), e === null)
    throw new Error("Date resolve error");
  if (n = +e[1], r = +e[2] - 1, i = +e[3], !e[4])
    return new Date(Date.UTC(n, r, i));
  if (o = +e[4], s = +e[5], l = +e[6], e[7]) {
    for (a = e[7].slice(0, 3); a.length < 3; )
      a += "0";
    a = +a;
  }
  return e[9] && (u = +e[10], h = +(e[11] || 0), c = (u * 60 + h) * 6e4, e[9] === "-" && (c = -c)), f = new Date(Date.UTC(n, r, i, o, s, l, a)), c && f.setTime(f.getTime() - c), f;
}
function v_(t) {
  return t.toISOString();
}
var hg = new Pe("tag:yaml.org,2002:timestamp", {
  kind: "scalar",
  resolve: y_,
  construct: b_,
  instanceOf: Date,
  represent: v_
});
function x_(t) {
  return t === "<<" || t === null;
}
var fg = new Pe("tag:yaml.org,2002:merge", {
  kind: "scalar",
  resolve: x_
}), yu = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;
function __(t) {
  if (t === null)
    return !1;
  var e, n, r = 0, i = t.length, o = yu;
  for (n = 0; n < i; n++)
    if (e = o.indexOf(t.charAt(n)), !(e > 64)) {
      if (e < 0)
        return !1;
      r += 6;
    }
  return r % 8 === 0;
}
function k_(t) {
  var e, n, r = t.replace(/[\r\n=]/g, ""), i = r.length, o = yu, s = 0, l = [];
  for (e = 0; e < i; e++)
    e % 4 === 0 && e && (l.push(s >> 16 & 255), l.push(s >> 8 & 255), l.push(s & 255)), s = s << 6 | o.indexOf(r.charAt(e));
  return n = i % 4 * 6, n === 0 ? (l.push(s >> 16 & 255), l.push(s >> 8 & 255), l.push(s & 255)) : n === 18 ? (l.push(s >> 10 & 255), l.push(s >> 2 & 255)) : n === 12 && l.push(s >> 4 & 255), new Uint8Array(l);
}
function w_(t) {
  var e = "", n = 0, r, i, o = t.length, s = yu;
  for (r = 0; r < o; r++)
    r % 3 === 0 && r && (e += s[n >> 18 & 63], e += s[n >> 12 & 63], e += s[n >> 6 & 63], e += s[n & 63]), n = (n << 8) + t[r];
  return i = o % 3, i === 0 ? (e += s[n >> 18 & 63], e += s[n >> 12 & 63], e += s[n >> 6 & 63], e += s[n & 63]) : i === 2 ? (e += s[n >> 10 & 63], e += s[n >> 4 & 63], e += s[n << 2 & 63], e += s[64]) : i === 1 && (e += s[n >> 2 & 63], e += s[n << 4 & 63], e += s[64], e += s[64]), e;
}
function C_(t) {
  return Object.prototype.toString.call(t) === "[object Uint8Array]";
}
var dg = new Pe("tag:yaml.org,2002:binary", {
  kind: "scalar",
  resolve: __,
  construct: k_,
  predicate: C_,
  represent: w_
}), A_ = Object.prototype.hasOwnProperty, S_ = Object.prototype.toString;
function E_(t) {
  if (t === null)
    return !0;
  var e = [], n, r, i, o, s, l = t;
  for (n = 0, r = l.length; n < r; n += 1) {
    if (i = l[n], s = !1, S_.call(i) !== "[object Object]")
      return !1;
    for (o in i)
      if (A_.call(i, o))
        if (!s)
          s = !0;
        else
          return !1;
    if (!s)
      return !1;
    if (e.indexOf(o) === -1)
      e.push(o);
    else
      return !1;
  }
  return !0;
}
function T_(t) {
  return t !== null ? t : [];
}
var pg = new Pe("tag:yaml.org,2002:omap", {
  kind: "sequence",
  resolve: E_,
  construct: T_
}), D_ = Object.prototype.toString;
function M_(t) {
  if (t === null)
    return !0;
  var e, n, r, i, o, s = t;
  for (o = new Array(s.length), e = 0, n = s.length; e < n; e += 1) {
    if (r = s[e], D_.call(r) !== "[object Object]" || (i = Object.keys(r), i.length !== 1))
      return !1;
    o[e] = [i[0], r[i[0]]];
  }
  return !0;
}
function O_(t) {
  if (t === null)
    return [];
  var e, n, r, i, o, s = t;
  for (o = new Array(s.length), e = 0, n = s.length; e < n; e += 1)
    r = s[e], i = Object.keys(r), o[e] = [i[0], r[i[0]]];
  return o;
}
var mg = new Pe("tag:yaml.org,2002:pairs", {
  kind: "sequence",
  resolve: M_,
  construct: O_
}), R_ = Object.prototype.hasOwnProperty;
function L_(t) {
  if (t === null)
    return !0;
  var e, n = t;
  for (e in n)
    if (R_.call(n, e) && n[e] !== null)
      return !1;
  return !0;
}
function I_(t) {
  return t !== null ? t : {};
}
var gg = new Pe("tag:yaml.org,2002:set", {
  kind: "mapping",
  resolve: L_,
  construct: I_
}), bu = ag.extend({
  implicit: [
    hg,
    fg
  ],
  explicit: [
    dg,
    pg,
    mg,
    gg
  ]
}), Mn = Object.prototype.hasOwnProperty, ms = 1, yg = 2, bg = 3, gs = 4, Zl = 1, N_ = 2, yf = 3, P_ = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, B_ = /[\x85\u2028\u2029]/, F_ = /[,\[\]\{\}]/, vg = /^(?:!|!!|![a-z\-]+!)$/i, xg = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
function bf(t) {
  return Object.prototype.toString.call(t);
}
function Gt(t) {
  return t === 10 || t === 13;
}
function nr(t) {
  return t === 9 || t === 32;
}
function tt(t) {
  return t === 9 || t === 32 || t === 10 || t === 13;
}
function Er(t) {
  return t === 44 || t === 91 || t === 93 || t === 123 || t === 125;
}
function q_(t) {
  var e;
  return 48 <= t && t <= 57 ? t - 48 : (e = t | 32, 97 <= e && e <= 102 ? e - 97 + 10 : -1);
}
function $_(t) {
  return t === 120 ? 2 : t === 117 ? 4 : t === 85 ? 8 : 0;
}
function H_(t) {
  return 48 <= t && t <= 57 ? t - 48 : -1;
}
function vf(t) {
  return t === 48 ? "\0" : t === 97 ? "\x07" : t === 98 ? "\b" : t === 116 || t === 9 ? "	" : t === 110 ? `
` : t === 118 ? "\v" : t === 102 ? "\f" : t === 114 ? "\r" : t === 101 ? "\x1B" : t === 32 ? " " : t === 34 ? '"' : t === 47 ? "/" : t === 92 ? "\\" : t === 78 ? "\x85" : t === 95 ? "\xA0" : t === 76 ? "\u2028" : t === 80 ? "\u2029" : "";
}
function z_(t) {
  return t <= 65535 ? String.fromCharCode(t) : String.fromCharCode(
    (t - 65536 >> 10) + 55296,
    (t - 65536 & 1023) + 56320
  );
}
var _g = new Array(256), kg = new Array(256);
for (var _r = 0; _r < 256; _r++)
  _g[_r] = vf(_r) ? 1 : 0, kg[_r] = vf(_r);
function V_(t, e) {
  this.input = t, this.filename = e.filename || null, this.schema = e.schema || bu, this.onWarning = e.onWarning || null, this.legacy = e.legacy || !1, this.json = e.json || !1, this.listener = e.listener || null, this.implicitTypes = this.schema.compiledImplicit, this.typeMap = this.schema.compiledTypeMap, this.length = t.length, this.position = 0, this.line = 0, this.lineStart = 0, this.lineIndent = 0, this.firstTabInLine = -1, this.documents = [];
}
function wg(t, e) {
  var n = {
    name: t.filename,
    buffer: t.input.slice(0, -1),
    position: t.position,
    line: t.line,
    column: t.position - t.lineStart
  };
  return n.snippet = Gx(n), new Ge(e, n);
}
function q(t, e) {
  throw wg(t, e);
}
function ys(t, e) {
  t.onWarning && t.onWarning.call(null, wg(t, e));
}
var xf = {
  YAML: function(e, n, r) {
    var i, o, s;
    e.version !== null && q(e, "duplication of %YAML directive"), r.length !== 1 && q(e, "YAML directive accepts exactly one argument"), i = /^([0-9]+)\.([0-9]+)$/.exec(r[0]), i === null && q(e, "ill-formed argument of the YAML directive"), o = parseInt(i[1], 10), s = parseInt(i[2], 10), o !== 1 && q(e, "unacceptable YAML version of the document"), e.version = r[0], e.checkLineBreaks = s < 2, s !== 1 && s !== 2 && ys(e, "unsupported YAML version of the document");
  },
  TAG: function(e, n, r) {
    var i, o;
    r.length !== 2 && q(e, "TAG directive accepts exactly two arguments"), i = r[0], o = r[1], vg.test(i) || q(e, "ill-formed tag handle (first argument) of the TAG directive"), Mn.call(e.tagMap, i) && q(e, 'there is a previously declared suffix for "' + i + '" tag handle'), xg.test(o) || q(e, "ill-formed tag prefix (second argument) of the TAG directive");
    try {
      o = decodeURIComponent(o);
    } catch {
      q(e, "tag prefix is malformed: " + o);
    }
    e.tagMap[i] = o;
  }
};
function Sn(t, e, n, r) {
  var i, o, s, l;
  if (e < n) {
    if (l = t.input.slice(e, n), r)
      for (i = 0, o = l.length; i < o; i += 1)
        s = l.charCodeAt(i), s === 9 || 32 <= s && s <= 1114111 || q(t, "expected valid JSON character");
    else
      P_.test(l) && q(t, "the stream contains non-printable characters");
    t.result += l;
  }
}
function _f(t, e, n, r) {
  var i, o, s, l;
  for (Ae.isObject(n) || q(t, "cannot merge mappings; the provided source object is unacceptable"), i = Object.keys(n), s = 0, l = i.length; s < l; s += 1)
    o = i[s], Mn.call(e, o) || (e[o] = n[o], r[o] = !0);
}
function Tr(t, e, n, r, i, o, s, l, a) {
  var c, u;
  if (Array.isArray(i))
    for (i = Array.prototype.slice.call(i), c = 0, u = i.length; c < u; c += 1)
      Array.isArray(i[c]) && q(t, "nested arrays are not supported inside keys"), typeof i == "object" && bf(i[c]) === "[object Object]" && (i[c] = "[object Object]");
  if (typeof i == "object" && bf(i) === "[object Object]" && (i = "[object Object]"), i = String(i), e === null && (e = {}), r === "tag:yaml.org,2002:merge")
    if (Array.isArray(o))
      for (c = 0, u = o.length; c < u; c += 1)
        _f(t, e, o[c], n);
    else
      _f(t, e, o, n);
  else
    !t.json && !Mn.call(n, i) && Mn.call(e, i) && (t.line = s || t.line, t.lineStart = l || t.lineStart, t.position = a || t.position, q(t, "duplicated mapping key")), i === "__proto__" ? Object.defineProperty(e, i, {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      value: o
    }) : e[i] = o, delete n[i];
  return e;
}
function vu(t) {
  var e;
  e = t.input.charCodeAt(t.position), e === 10 ? t.position++ : e === 13 ? (t.position++, t.input.charCodeAt(t.position) === 10 && t.position++) : q(t, "a line break is expected"), t.line += 1, t.lineStart = t.position, t.firstTabInLine = -1;
}
function ke(t, e, n) {
  for (var r = 0, i = t.input.charCodeAt(t.position); i !== 0; ) {
    for (; nr(i); )
      i === 9 && t.firstTabInLine === -1 && (t.firstTabInLine = t.position), i = t.input.charCodeAt(++t.position);
    if (e && i === 35)
      do
        i = t.input.charCodeAt(++t.position);
      while (i !== 10 && i !== 13 && i !== 0);
    if (Gt(i))
      for (vu(t), i = t.input.charCodeAt(t.position), r++, t.lineIndent = 0; i === 32; )
        t.lineIndent++, i = t.input.charCodeAt(++t.position);
    else
      break;
  }
  return n !== -1 && r !== 0 && t.lineIndent < n && ys(t, "deficient indentation"), r;
}
function sl(t) {
  var e = t.position, n;
  return n = t.input.charCodeAt(e), !!((n === 45 || n === 46) && n === t.input.charCodeAt(e + 1) && n === t.input.charCodeAt(e + 2) && (e += 3, n = t.input.charCodeAt(e), n === 0 || tt(n)));
}
function xu(t, e) {
  e === 1 ? t.result += " " : e > 1 && (t.result += Ae.repeat(`
`, e - 1));
}
function U_(t, e, n) {
  var r, i, o, s, l, a, c, u, h = t.kind, f = t.result, d;
  if (d = t.input.charCodeAt(t.position), tt(d) || Er(d) || d === 35 || d === 38 || d === 42 || d === 33 || d === 124 || d === 62 || d === 39 || d === 34 || d === 37 || d === 64 || d === 96 || (d === 63 || d === 45) && (i = t.input.charCodeAt(t.position + 1), tt(i) || n && Er(i)))
    return !1;
  for (t.kind = "scalar", t.result = "", o = s = t.position, l = !1; d !== 0; ) {
    if (d === 58) {
      if (i = t.input.charCodeAt(t.position + 1), tt(i) || n && Er(i))
        break;
    } else if (d === 35) {
      if (r = t.input.charCodeAt(t.position - 1), tt(r))
        break;
    } else {
      if (t.position === t.lineStart && sl(t) || n && Er(d))
        break;
      if (Gt(d))
        if (a = t.line, c = t.lineStart, u = t.lineIndent, ke(t, !1, -1), t.lineIndent >= e) {
          l = !0, d = t.input.charCodeAt(t.position);
          continue;
        } else {
          t.position = s, t.line = a, t.lineStart = c, t.lineIndent = u;
          break;
        }
    }
    l && (Sn(t, o, s, !1), xu(t, t.line - a), o = s = t.position, l = !1), nr(d) || (s = t.position + 1), d = t.input.charCodeAt(++t.position);
  }
  return Sn(t, o, s, !1), t.result ? !0 : (t.kind = h, t.result = f, !1);
}
function W_(t, e) {
  var n, r, i;
  if (n = t.input.charCodeAt(t.position), n !== 39)
    return !1;
  for (t.kind = "scalar", t.result = "", t.position++, r = i = t.position; (n = t.input.charCodeAt(t.position)) !== 0; )
    if (n === 39)
      if (Sn(t, r, t.position, !0), n = t.input.charCodeAt(++t.position), n === 39)
        r = t.position, t.position++, i = t.position;
      else
        return !0;
    else
      Gt(n) ? (Sn(t, r, i, !0), xu(t, ke(t, !1, e)), r = i = t.position) : t.position === t.lineStart && sl(t) ? q(t, "unexpected end of the document within a single quoted scalar") : (t.position++, i = t.position);
  q(t, "unexpected end of the stream within a single quoted scalar");
}
function j_(t, e) {
  var n, r, i, o, s, l;
  if (l = t.input.charCodeAt(t.position), l !== 34)
    return !1;
  for (t.kind = "scalar", t.result = "", t.position++, n = r = t.position; (l = t.input.charCodeAt(t.position)) !== 0; ) {
    if (l === 34)
      return Sn(t, n, t.position, !0), t.position++, !0;
    if (l === 92) {
      if (Sn(t, n, t.position, !0), l = t.input.charCodeAt(++t.position), Gt(l))
        ke(t, !1, e);
      else if (l < 256 && _g[l])
        t.result += kg[l], t.position++;
      else if ((s = $_(l)) > 0) {
        for (i = s, o = 0; i > 0; i--)
          l = t.input.charCodeAt(++t.position), (s = q_(l)) >= 0 ? o = (o << 4) + s : q(t, "expected hexadecimal character");
        t.result += z_(o), t.position++;
      } else
        q(t, "unknown escape sequence");
      n = r = t.position;
    } else
      Gt(l) ? (Sn(t, n, r, !0), xu(t, ke(t, !1, e)), n = r = t.position) : t.position === t.lineStart && sl(t) ? q(t, "unexpected end of the document within a double quoted scalar") : (t.position++, r = t.position);
  }
  q(t, "unexpected end of the stream within a double quoted scalar");
}
function G_(t, e) {
  var n = !0, r, i, o, s = t.tag, l, a = t.anchor, c, u, h, f, d, p = /* @__PURE__ */ Object.create(null), m, g, y, b;
  if (b = t.input.charCodeAt(t.position), b === 91)
    u = 93, d = !1, l = [];
  else if (b === 123)
    u = 125, d = !0, l = {};
  else
    return !1;
  for (t.anchor !== null && (t.anchorMap[t.anchor] = l), b = t.input.charCodeAt(++t.position); b !== 0; ) {
    if (ke(t, !0, e), b = t.input.charCodeAt(t.position), b === u)
      return t.position++, t.tag = s, t.anchor = a, t.kind = d ? "mapping" : "sequence", t.result = l, !0;
    n ? b === 44 && q(t, "expected the node content, but found ','") : q(t, "missed comma between flow collection entries"), g = m = y = null, h = f = !1, b === 63 && (c = t.input.charCodeAt(t.position + 1), tt(c) && (h = f = !0, t.position++, ke(t, !0, e))), r = t.line, i = t.lineStart, o = t.position, Gr(t, e, ms, !1, !0), g = t.tag, m = t.result, ke(t, !0, e), b = t.input.charCodeAt(t.position), (f || t.line === r) && b === 58 && (h = !0, b = t.input.charCodeAt(++t.position), ke(t, !0, e), Gr(t, e, ms, !1, !0), y = t.result), d ? Tr(t, l, p, g, m, y, r, i, o) : h ? l.push(Tr(t, null, p, g, m, y, r, i, o)) : l.push(m), ke(t, !0, e), b = t.input.charCodeAt(t.position), b === 44 ? (n = !0, b = t.input.charCodeAt(++t.position)) : n = !1;
  }
  q(t, "unexpected end of the stream within a flow collection");
}
function K_(t, e) {
  var n, r, i = Zl, o = !1, s = !1, l = e, a = 0, c = !1, u, h;
  if (h = t.input.charCodeAt(t.position), h === 124)
    r = !1;
  else if (h === 62)
    r = !0;
  else
    return !1;
  for (t.kind = "scalar", t.result = ""; h !== 0; )
    if (h = t.input.charCodeAt(++t.position), h === 43 || h === 45)
      Zl === i ? i = h === 43 ? yf : N_ : q(t, "repeat of a chomping mode identifier");
    else if ((u = H_(h)) >= 0)
      u === 0 ? q(t, "bad explicit indentation width of a block scalar; it cannot be less than one") : s ? q(t, "repeat of an indentation width identifier") : (l = e + u - 1, s = !0);
    else
      break;
  if (nr(h)) {
    do
      h = t.input.charCodeAt(++t.position);
    while (nr(h));
    if (h === 35)
      do
        h = t.input.charCodeAt(++t.position);
      while (!Gt(h) && h !== 0);
  }
  for (; h !== 0; ) {
    for (vu(t), t.lineIndent = 0, h = t.input.charCodeAt(t.position); (!s || t.lineIndent < l) && h === 32; )
      t.lineIndent++, h = t.input.charCodeAt(++t.position);
    if (!s && t.lineIndent > l && (l = t.lineIndent), Gt(h)) {
      a++;
      continue;
    }
    if (t.lineIndent < l) {
      i === yf ? t.result += Ae.repeat(`
`, o ? 1 + a : a) : i === Zl && o && (t.result += `
`);
      break;
    }
    for (r ? nr(h) ? (c = !0, t.result += Ae.repeat(`
`, o ? 1 + a : a)) : c ? (c = !1, t.result += Ae.repeat(`
`, a + 1)) : a === 0 ? o && (t.result += " ") : t.result += Ae.repeat(`
`, a) : t.result += Ae.repeat(`
`, o ? 1 + a : a), o = !0, s = !0, a = 0, n = t.position; !Gt(h) && h !== 0; )
      h = t.input.charCodeAt(++t.position);
    Sn(t, n, t.position, !1);
  }
  return !0;
}
function kf(t, e) {
  var n, r = t.tag, i = t.anchor, o = [], s, l = !1, a;
  if (t.firstTabInLine !== -1)
    return !1;
  for (t.anchor !== null && (t.anchorMap[t.anchor] = o), a = t.input.charCodeAt(t.position); a !== 0 && (t.firstTabInLine !== -1 && (t.position = t.firstTabInLine, q(t, "tab characters must not be used in indentation")), !(a !== 45 || (s = t.input.charCodeAt(t.position + 1), !tt(s)))); ) {
    if (l = !0, t.position++, ke(t, !0, -1) && t.lineIndent <= e) {
      o.push(null), a = t.input.charCodeAt(t.position);
      continue;
    }
    if (n = t.line, Gr(t, e, bg, !1, !0), o.push(t.result), ke(t, !0, -1), a = t.input.charCodeAt(t.position), (t.line === n || t.lineIndent > e) && a !== 0)
      q(t, "bad indentation of a sequence entry");
    else if (t.lineIndent < e)
      break;
  }
  return l ? (t.tag = r, t.anchor = i, t.kind = "sequence", t.result = o, !0) : !1;
}
function Y_(t, e, n) {
  var r, i, o, s, l, a, c = t.tag, u = t.anchor, h = {}, f = /* @__PURE__ */ Object.create(null), d = null, p = null, m = null, g = !1, y = !1, b;
  if (t.firstTabInLine !== -1)
    return !1;
  for (t.anchor !== null && (t.anchorMap[t.anchor] = h), b = t.input.charCodeAt(t.position); b !== 0; ) {
    if (!g && t.firstTabInLine !== -1 && (t.position = t.firstTabInLine, q(t, "tab characters must not be used in indentation")), r = t.input.charCodeAt(t.position + 1), o = t.line, (b === 63 || b === 58) && tt(r))
      b === 63 ? (g && (Tr(t, h, f, d, p, null, s, l, a), d = p = m = null), y = !0, g = !0, i = !0) : g ? (g = !1, i = !0) : q(t, "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"), t.position += 1, b = r;
    else {
      if (s = t.line, l = t.lineStart, a = t.position, !Gr(t, n, yg, !1, !0))
        break;
      if (t.line === o) {
        for (b = t.input.charCodeAt(t.position); nr(b); )
          b = t.input.charCodeAt(++t.position);
        if (b === 58)
          b = t.input.charCodeAt(++t.position), tt(b) || q(t, "a whitespace character is expected after the key-value separator within a block mapping"), g && (Tr(t, h, f, d, p, null, s, l, a), d = p = m = null), y = !0, g = !1, i = !1, d = t.tag, p = t.result;
        else if (y)
          q(t, "can not read an implicit mapping pair; a colon is missed");
        else
          return t.tag = c, t.anchor = u, !0;
      } else if (y)
        q(t, "can not read a block mapping entry; a multiline key may not be an implicit key");
      else
        return t.tag = c, t.anchor = u, !0;
    }
    if ((t.line === o || t.lineIndent > e) && (g && (s = t.line, l = t.lineStart, a = t.position), Gr(t, e, gs, !0, i) && (g ? p = t.result : m = t.result), g || (Tr(t, h, f, d, p, m, s, l, a), d = p = m = null), ke(t, !0, -1), b = t.input.charCodeAt(t.position)), (t.line === o || t.lineIndent > e) && b !== 0)
      q(t, "bad indentation of a mapping entry");
    else if (t.lineIndent < e)
      break;
  }
  return g && Tr(t, h, f, d, p, null, s, l, a), y && (t.tag = c, t.anchor = u, t.kind = "mapping", t.result = h), y;
}
function Z_(t) {
  var e, n = !1, r = !1, i, o, s;
  if (s = t.input.charCodeAt(t.position), s !== 33)
    return !1;
  if (t.tag !== null && q(t, "duplication of a tag property"), s = t.input.charCodeAt(++t.position), s === 60 ? (n = !0, s = t.input.charCodeAt(++t.position)) : s === 33 ? (r = !0, i = "!!", s = t.input.charCodeAt(++t.position)) : i = "!", e = t.position, n) {
    do
      s = t.input.charCodeAt(++t.position);
    while (s !== 0 && s !== 62);
    t.position < t.length ? (o = t.input.slice(e, t.position), s = t.input.charCodeAt(++t.position)) : q(t, "unexpected end of the stream within a verbatim tag");
  } else {
    for (; s !== 0 && !tt(s); )
      s === 33 && (r ? q(t, "tag suffix cannot contain exclamation marks") : (i = t.input.slice(e - 1, t.position + 1), vg.test(i) || q(t, "named tag handle cannot contain such characters"), r = !0, e = t.position + 1)), s = t.input.charCodeAt(++t.position);
    o = t.input.slice(e, t.position), F_.test(o) && q(t, "tag suffix cannot contain flow indicator characters");
  }
  o && !xg.test(o) && q(t, "tag name cannot contain such characters: " + o);
  try {
    o = decodeURIComponent(o);
  } catch {
    q(t, "tag name is malformed: " + o);
  }
  return n ? t.tag = o : Mn.call(t.tagMap, i) ? t.tag = t.tagMap[i] + o : i === "!" ? t.tag = "!" + o : i === "!!" ? t.tag = "tag:yaml.org,2002:" + o : q(t, 'undeclared tag handle "' + i + '"'), !0;
}
function J_(t) {
  var e, n;
  if (n = t.input.charCodeAt(t.position), n !== 38)
    return !1;
  for (t.anchor !== null && q(t, "duplication of an anchor property"), n = t.input.charCodeAt(++t.position), e = t.position; n !== 0 && !tt(n) && !Er(n); )
    n = t.input.charCodeAt(++t.position);
  return t.position === e && q(t, "name of an anchor node must contain at least one character"), t.anchor = t.input.slice(e, t.position), !0;
}
function X_(t) {
  var e, n, r;
  if (r = t.input.charCodeAt(t.position), r !== 42)
    return !1;
  for (r = t.input.charCodeAt(++t.position), e = t.position; r !== 0 && !tt(r) && !Er(r); )
    r = t.input.charCodeAt(++t.position);
  return t.position === e && q(t, "name of an alias node must contain at least one character"), n = t.input.slice(e, t.position), Mn.call(t.anchorMap, n) || q(t, 'unidentified alias "' + n + '"'), t.result = t.anchorMap[n], ke(t, !0, -1), !0;
}
function Gr(t, e, n, r, i) {
  var o, s, l, a = 1, c = !1, u = !1, h, f, d, p, m, g;
  if (t.listener !== null && t.listener("open", t), t.tag = null, t.anchor = null, t.kind = null, t.result = null, o = s = l = gs === n || bg === n, r && ke(t, !0, -1) && (c = !0, t.lineIndent > e ? a = 1 : t.lineIndent === e ? a = 0 : t.lineIndent < e && (a = -1)), a === 1)
    for (; Z_(t) || J_(t); )
      ke(t, !0, -1) ? (c = !0, l = o, t.lineIndent > e ? a = 1 : t.lineIndent === e ? a = 0 : t.lineIndent < e && (a = -1)) : l = !1;
  if (l && (l = c || i), (a === 1 || gs === n) && (ms === n || yg === n ? m = e : m = e + 1, g = t.position - t.lineStart, a === 1 ? l && (kf(t, g) || Y_(t, g, m)) || G_(t, m) ? u = !0 : (s && K_(t, m) || W_(t, m) || j_(t, m) ? u = !0 : X_(t) ? (u = !0, (t.tag !== null || t.anchor !== null) && q(t, "alias node should not have any properties")) : U_(t, m, ms === n) && (u = !0, t.tag === null && (t.tag = "?")), t.anchor !== null && (t.anchorMap[t.anchor] = t.result)) : a === 0 && (u = l && kf(t, g))), t.tag === null)
    t.anchor !== null && (t.anchorMap[t.anchor] = t.result);
  else if (t.tag === "?") {
    for (t.result !== null && t.kind !== "scalar" && q(t, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + t.kind + '"'), h = 0, f = t.implicitTypes.length; h < f; h += 1)
      if (p = t.implicitTypes[h], p.resolve(t.result)) {
        t.result = p.construct(t.result), t.tag = p.tag, t.anchor !== null && (t.anchorMap[t.anchor] = t.result);
        break;
      }
  } else if (t.tag !== "!") {
    if (Mn.call(t.typeMap[t.kind || "fallback"], t.tag))
      p = t.typeMap[t.kind || "fallback"][t.tag];
    else
      for (p = null, d = t.typeMap.multi[t.kind || "fallback"], h = 0, f = d.length; h < f; h += 1)
        if (t.tag.slice(0, d[h].tag.length) === d[h].tag) {
          p = d[h];
          break;
        }
    p || q(t, "unknown tag !<" + t.tag + ">"), t.result !== null && p.kind !== t.kind && q(t, "unacceptable node kind for !<" + t.tag + '> tag; it should be "' + p.kind + '", not "' + t.kind + '"'), p.resolve(t.result, t.tag) ? (t.result = p.construct(t.result, t.tag), t.anchor !== null && (t.anchorMap[t.anchor] = t.result)) : q(t, "cannot resolve a node with !<" + t.tag + "> explicit tag");
  }
  return t.listener !== null && t.listener("close", t), t.tag !== null || t.anchor !== null || u;
}
function Q_(t) {
  var e = t.position, n, r, i, o = !1, s;
  for (t.version = null, t.checkLineBreaks = t.legacy, t.tagMap = /* @__PURE__ */ Object.create(null), t.anchorMap = /* @__PURE__ */ Object.create(null); (s = t.input.charCodeAt(t.position)) !== 0 && (ke(t, !0, -1), s = t.input.charCodeAt(t.position), !(t.lineIndent > 0 || s !== 37)); ) {
    for (o = !0, s = t.input.charCodeAt(++t.position), n = t.position; s !== 0 && !tt(s); )
      s = t.input.charCodeAt(++t.position);
    for (r = t.input.slice(n, t.position), i = [], r.length < 1 && q(t, "directive name must not be less than one character in length"); s !== 0; ) {
      for (; nr(s); )
        s = t.input.charCodeAt(++t.position);
      if (s === 35) {
        do
          s = t.input.charCodeAt(++t.position);
        while (s !== 0 && !Gt(s));
        break;
      }
      if (Gt(s))
        break;
      for (n = t.position; s !== 0 && !tt(s); )
        s = t.input.charCodeAt(++t.position);
      i.push(t.input.slice(n, t.position));
    }
    s !== 0 && vu(t), Mn.call(xf, r) ? xf[r](t, r, i) : ys(t, 'unknown document directive "' + r + '"');
  }
  if (ke(t, !0, -1), t.lineIndent === 0 && t.input.charCodeAt(t.position) === 45 && t.input.charCodeAt(t.position + 1) === 45 && t.input.charCodeAt(t.position + 2) === 45 ? (t.position += 3, ke(t, !0, -1)) : o && q(t, "directives end mark is expected"), Gr(t, t.lineIndent - 1, gs, !1, !0), ke(t, !0, -1), t.checkLineBreaks && B_.test(t.input.slice(e, t.position)) && ys(t, "non-ASCII line breaks are interpreted as content"), t.documents.push(t.result), t.position === t.lineStart && sl(t)) {
    t.input.charCodeAt(t.position) === 46 && (t.position += 3, ke(t, !0, -1));
    return;
  }
  if (t.position < t.length - 1)
    q(t, "end of the stream or a document separator is expected");
  else
    return;
}
function Cg(t, e) {
  t = String(t), e = e || {}, t.length !== 0 && (t.charCodeAt(t.length - 1) !== 10 && t.charCodeAt(t.length - 1) !== 13 && (t += `
`), t.charCodeAt(0) === 65279 && (t = t.slice(1)));
  var n = new V_(t, e), r = t.indexOf("\0");
  for (r !== -1 && (n.position = r, q(n, "null byte is not allowed in input")), n.input += "\0"; n.input.charCodeAt(n.position) === 32; )
    n.lineIndent += 1, n.position += 1;
  for (; n.position < n.length - 1; )
    Q_(n);
  return n.documents;
}
function ek(t, e, n) {
  e !== null && typeof e == "object" && typeof n > "u" && (n = e, e = null);
  var r = Cg(t, n);
  if (typeof e != "function")
    return r;
  for (var i = 0, o = r.length; i < o; i += 1)
    e(r[i]);
}
function tk(t, e) {
  var n = Cg(t, e);
  if (n.length !== 0) {
    if (n.length === 1)
      return n[0];
    throw new Ge("expected a single document in the stream, but found more");
  }
}
var nk = ek, rk = tk, Ag = {
  loadAll: nk,
  load: rk
}, Sg = Object.prototype.toString, Eg = Object.prototype.hasOwnProperty, _u = 65279, ik = 9, qi = 10, ok = 13, sk = 32, lk = 33, ak = 34, ic = 35, ck = 37, uk = 38, hk = 39, fk = 42, Tg = 44, dk = 45, bs = 58, pk = 61, mk = 62, gk = 63, yk = 64, Dg = 91, Mg = 93, bk = 96, Og = 123, vk = 124, Rg = 125, Ve = {};
Ve[0] = "\\0";
Ve[7] = "\\a";
Ve[8] = "\\b";
Ve[9] = "\\t";
Ve[10] = "\\n";
Ve[11] = "\\v";
Ve[12] = "\\f";
Ve[13] = "\\r";
Ve[27] = "\\e";
Ve[34] = '\\"';
Ve[92] = "\\\\";
Ve[133] = "\\N";
Ve[160] = "\\_";
Ve[8232] = "\\L";
Ve[8233] = "\\P";
var xk = [
  "y",
  "Y",
  "yes",
  "Yes",
  "YES",
  "on",
  "On",
  "ON",
  "n",
  "N",
  "no",
  "No",
  "NO",
  "off",
  "Off",
  "OFF"
], _k = /^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;
function kk(t, e) {
  var n, r, i, o, s, l, a;
  if (e === null)
    return {};
  for (n = {}, r = Object.keys(e), i = 0, o = r.length; i < o; i += 1)
    s = r[i], l = String(e[s]), s.slice(0, 2) === "!!" && (s = "tag:yaml.org,2002:" + s.slice(2)), a = t.compiledTypeMap.fallback[s], a && Eg.call(a.styleAliases, l) && (l = a.styleAliases[l]), n[s] = l;
  return n;
}
function wk(t) {
  var e, n, r;
  if (e = t.toString(16).toUpperCase(), t <= 255)
    n = "x", r = 2;
  else if (t <= 65535)
    n = "u", r = 4;
  else if (t <= 4294967295)
    n = "U", r = 8;
  else
    throw new Ge("code point within a string may not be greater than 0xFFFFFFFF");
  return "\\" + n + Ae.repeat("0", r - e.length) + e;
}
var Ck = 1, $i = 2;
function Ak(t) {
  this.schema = t.schema || bu, this.indent = Math.max(1, t.indent || 2), this.noArrayIndent = t.noArrayIndent || !1, this.skipInvalid = t.skipInvalid || !1, this.flowLevel = Ae.isNothing(t.flowLevel) ? -1 : t.flowLevel, this.styleMap = kk(this.schema, t.styles || null), this.sortKeys = t.sortKeys || !1, this.lineWidth = t.lineWidth || 80, this.noRefs = t.noRefs || !1, this.noCompatMode = t.noCompatMode || !1, this.condenseFlow = t.condenseFlow || !1, this.quotingType = t.quotingType === '"' ? $i : Ck, this.forceQuotes = t.forceQuotes || !1, this.replacer = typeof t.replacer == "function" ? t.replacer : null, this.implicitTypes = this.schema.compiledImplicit, this.explicitTypes = this.schema.compiledExplicit, this.tag = null, this.result = "", this.duplicates = [], this.usedDuplicates = null;
}
function wf(t, e) {
  for (var n = Ae.repeat(" ", e), r = 0, i = -1, o = "", s, l = t.length; r < l; )
    i = t.indexOf(`
`, r), i === -1 ? (s = t.slice(r), r = l) : (s = t.slice(r, i + 1), r = i + 1), s.length && s !== `
` && (o += n), o += s;
  return o;
}
function oc(t, e) {
  return `
` + Ae.repeat(" ", t.indent * e);
}
function Sk(t, e) {
  var n, r, i;
  for (n = 0, r = t.implicitTypes.length; n < r; n += 1)
    if (i = t.implicitTypes[n], i.resolve(e))
      return !0;
  return !1;
}
function vs(t) {
  return t === sk || t === ik;
}
function Hi(t) {
  return 32 <= t && t <= 126 || 161 <= t && t <= 55295 && t !== 8232 && t !== 8233 || 57344 <= t && t <= 65533 && t !== _u || 65536 <= t && t <= 1114111;
}
function Cf(t) {
  return Hi(t) && t !== _u && t !== ok && t !== qi;
}
function Af(t, e, n) {
  var r = Cf(t), i = r && !vs(t);
  return (n ? r : r && t !== Tg && t !== Dg && t !== Mg && t !== Og && t !== Rg) && t !== ic && !(e === bs && !i) || Cf(e) && !vs(e) && t === ic || e === bs && i;
}
function Ek(t) {
  return Hi(t) && t !== _u && !vs(t) && t !== dk && t !== gk && t !== bs && t !== Tg && t !== Dg && t !== Mg && t !== Og && t !== Rg && t !== ic && t !== uk && t !== fk && t !== lk && t !== vk && t !== pk && t !== mk && t !== hk && t !== ak && t !== ck && t !== yk && t !== bk;
}
function Tk(t) {
  return !vs(t) && t !== bs;
}
function xi(t, e) {
  var n = t.charCodeAt(e), r;
  return n >= 55296 && n <= 56319 && e + 1 < t.length && (r = t.charCodeAt(e + 1), r >= 56320 && r <= 57343) ? (n - 55296) * 1024 + r - 56320 + 65536 : n;
}
function Lg(t) {
  var e = /^\n* /;
  return e.test(t);
}
var Ig = 1, sc = 2, Ng = 3, Pg = 4, Cr = 5;
function Dk(t, e, n, r, i, o, s, l) {
  var a, c = 0, u = null, h = !1, f = !1, d = r !== -1, p = -1, m = Ek(xi(t, 0)) && Tk(xi(t, t.length - 1));
  if (e || s)
    for (a = 0; a < t.length; c >= 65536 ? a += 2 : a++) {
      if (c = xi(t, a), !Hi(c))
        return Cr;
      m = m && Af(c, u, l), u = c;
    }
  else {
    for (a = 0; a < t.length; c >= 65536 ? a += 2 : a++) {
      if (c = xi(t, a), c === qi)
        h = !0, d && (f = f || a - p - 1 > r && t[p + 1] !== " ", p = a);
      else if (!Hi(c))
        return Cr;
      m = m && Af(c, u, l), u = c;
    }
    f = f || d && a - p - 1 > r && t[p + 1] !== " ";
  }
  return !h && !f ? m && !s && !i(t) ? Ig : o === $i ? Cr : sc : n > 9 && Lg(t) ? Cr : s ? o === $i ? Cr : sc : f ? Pg : Ng;
}
function Mk(t, e, n, r, i) {
  t.dump = function() {
    if (e.length === 0)
      return t.quotingType === $i ? '""' : "''";
    if (!t.noCompatMode && (xk.indexOf(e) !== -1 || _k.test(e)))
      return t.quotingType === $i ? '"' + e + '"' : "'" + e + "'";
    var o = t.indent * Math.max(1, n), s = t.lineWidth === -1 ? -1 : Math.max(Math.min(t.lineWidth, 40), t.lineWidth - o), l = r || t.flowLevel > -1 && n >= t.flowLevel;
    function a(c) {
      return Sk(t, c);
    }
    switch (Dk(
      e,
      l,
      t.indent,
      s,
      a,
      t.quotingType,
      t.forceQuotes && !r,
      i
    )) {
      case Ig:
        return e;
      case sc:
        return "'" + e.replace(/'/g, "''") + "'";
      case Ng:
        return "|" + Sf(e, t.indent) + Ef(wf(e, o));
      case Pg:
        return ">" + Sf(e, t.indent) + Ef(wf(Ok(e, s), o));
      case Cr:
        return '"' + Rk(e) + '"';
      default:
        throw new Ge("impossible error: invalid scalar style");
    }
  }();
}
function Sf(t, e) {
  var n = Lg(t) ? String(e) : "", r = t[t.length - 1] === `
`, i = r && (t[t.length - 2] === `
` || t === `
`), o = i ? "+" : r ? "" : "-";
  return n + o + `
`;
}
function Ef(t) {
  return t[t.length - 1] === `
` ? t.slice(0, -1) : t;
}
function Ok(t, e) {
  for (var n = /(\n+)([^\n]*)/g, r = function() {
    var c = t.indexOf(`
`);
    return c = c !== -1 ? c : t.length, n.lastIndex = c, Tf(t.slice(0, c), e);
  }(), i = t[0] === `
` || t[0] === " ", o, s; s = n.exec(t); ) {
    var l = s[1], a = s[2];
    o = a[0] === " ", r += l + (!i && !o && a !== "" ? `
` : "") + Tf(a, e), i = o;
  }
  return r;
}
function Tf(t, e) {
  if (t === "" || t[0] === " ")
    return t;
  for (var n = / [^ ]/g, r, i = 0, o, s = 0, l = 0, a = ""; r = n.exec(t); )
    l = r.index, l - i > e && (o = s > i ? s : l, a += `
` + t.slice(i, o), i = o + 1), s = l;
  return a += `
`, t.length - i > e && s > i ? a += t.slice(i, s) + `
` + t.slice(s + 1) : a += t.slice(i), a.slice(1);
}
function Rk(t) {
  for (var e = "", n = 0, r, i = 0; i < t.length; n >= 65536 ? i += 2 : i++)
    n = xi(t, i), r = Ve[n], !r && Hi(n) ? (e += t[i], n >= 65536 && (e += t[i + 1])) : e += r || wk(n);
  return e;
}
function Lk(t, e, n) {
  var r = "", i = t.tag, o, s, l;
  for (o = 0, s = n.length; o < s; o += 1)
    l = n[o], t.replacer && (l = t.replacer.call(n, String(o), l)), (cn(t, e, l, !1, !1) || typeof l > "u" && cn(t, e, null, !1, !1)) && (r !== "" && (r += "," + (t.condenseFlow ? "" : " ")), r += t.dump);
  t.tag = i, t.dump = "[" + r + "]";
}
function Df(t, e, n, r) {
  var i = "", o = t.tag, s, l, a;
  for (s = 0, l = n.length; s < l; s += 1)
    a = n[s], t.replacer && (a = t.replacer.call(n, String(s), a)), (cn(t, e + 1, a, !0, !0, !1, !0) || typeof a > "u" && cn(t, e + 1, null, !0, !0, !1, !0)) && ((!r || i !== "") && (i += oc(t, e)), t.dump && qi === t.dump.charCodeAt(0) ? i += "-" : i += "- ", i += t.dump);
  t.tag = o, t.dump = i || "[]";
}
function Ik(t, e, n) {
  var r = "", i = t.tag, o = Object.keys(n), s, l, a, c, u;
  for (s = 0, l = o.length; s < l; s += 1)
    u = "", r !== "" && (u += ", "), t.condenseFlow && (u += '"'), a = o[s], c = n[a], t.replacer && (c = t.replacer.call(n, a, c)), cn(t, e, a, !1, !1) && (t.dump.length > 1024 && (u += "? "), u += t.dump + (t.condenseFlow ? '"' : "") + ":" + (t.condenseFlow ? "" : " "), cn(t, e, c, !1, !1) && (u += t.dump, r += u));
  t.tag = i, t.dump = "{" + r + "}";
}
function Nk(t, e, n, r) {
  var i = "", o = t.tag, s = Object.keys(n), l, a, c, u, h, f;
  if (t.sortKeys === !0)
    s.sort();
  else if (typeof t.sortKeys == "function")
    s.sort(t.sortKeys);
  else if (t.sortKeys)
    throw new Ge("sortKeys must be a boolean or a function");
  for (l = 0, a = s.length; l < a; l += 1)
    f = "", (!r || i !== "") && (f += oc(t, e)), c = s[l], u = n[c], t.replacer && (u = t.replacer.call(n, c, u)), cn(t, e + 1, c, !0, !0, !0) && (h = t.tag !== null && t.tag !== "?" || t.dump && t.dump.length > 1024, h && (t.dump && qi === t.dump.charCodeAt(0) ? f += "?" : f += "? "), f += t.dump, h && (f += oc(t, e)), cn(t, e + 1, u, !0, h) && (t.dump && qi === t.dump.charCodeAt(0) ? f += ":" : f += ": ", f += t.dump, i += f));
  t.tag = o, t.dump = i || "{}";
}
function Mf(t, e, n) {
  var r, i, o, s, l, a;
  for (i = n ? t.explicitTypes : t.implicitTypes, o = 0, s = i.length; o < s; o += 1)
    if (l = i[o], (l.instanceOf || l.predicate) && (!l.instanceOf || typeof e == "object" && e instanceof l.instanceOf) && (!l.predicate || l.predicate(e))) {
      if (n ? l.multi && l.representName ? t.tag = l.representName(e) : t.tag = l.tag : t.tag = "?", l.represent) {
        if (a = t.styleMap[l.tag] || l.defaultStyle, Sg.call(l.represent) === "[object Function]")
          r = l.represent(e, a);
        else if (Eg.call(l.represent, a))
          r = l.represent[a](e, a);
        else
          throw new Ge("!<" + l.tag + '> tag resolver accepts not "' + a + '" style');
        t.dump = r;
      }
      return !0;
    }
  return !1;
}
function cn(t, e, n, r, i, o, s) {
  t.tag = null, t.dump = n, Mf(t, n, !1) || Mf(t, n, !0);
  var l = Sg.call(t.dump), a = r, c;
  r && (r = t.flowLevel < 0 || t.flowLevel > e);
  var u = l === "[object Object]" || l === "[object Array]", h, f;
  if (u && (h = t.duplicates.indexOf(n), f = h !== -1), (t.tag !== null && t.tag !== "?" || f || t.indent !== 2 && e > 0) && (i = !1), f && t.usedDuplicates[h])
    t.dump = "*ref_" + h;
  else {
    if (u && f && !t.usedDuplicates[h] && (t.usedDuplicates[h] = !0), l === "[object Object]")
      r && Object.keys(t.dump).length !== 0 ? (Nk(t, e, t.dump, i), f && (t.dump = "&ref_" + h + t.dump)) : (Ik(t, e, t.dump), f && (t.dump = "&ref_" + h + " " + t.dump));
    else if (l === "[object Array]")
      r && t.dump.length !== 0 ? (t.noArrayIndent && !s && e > 0 ? Df(t, e - 1, t.dump, i) : Df(t, e, t.dump, i), f && (t.dump = "&ref_" + h + t.dump)) : (Lk(t, e, t.dump), f && (t.dump = "&ref_" + h + " " + t.dump));
    else if (l === "[object String]")
      t.tag !== "?" && Mk(t, t.dump, e, o, a);
    else {
      if (l === "[object Undefined]")
        return !1;
      if (t.skipInvalid)
        return !1;
      throw new Ge("unacceptable kind of an object to dump " + l);
    }
    t.tag !== null && t.tag !== "?" && (c = encodeURI(
      t.tag[0] === "!" ? t.tag.slice(1) : t.tag
    ).replace(/!/g, "%21"), t.tag[0] === "!" ? c = "!" + c : c.slice(0, 18) === "tag:yaml.org,2002:" ? c = "!!" + c.slice(18) : c = "!<" + c + ">", t.dump = c + " " + t.dump);
  }
  return !0;
}
function Pk(t, e) {
  var n = [], r = [], i, o;
  for (lc(t, n, r), i = 0, o = r.length; i < o; i += 1)
    e.duplicates.push(n[r[i]]);
  e.usedDuplicates = new Array(o);
}
function lc(t, e, n) {
  var r, i, o;
  if (t !== null && typeof t == "object")
    if (i = e.indexOf(t), i !== -1)
      n.indexOf(i) === -1 && n.push(i);
    else if (e.push(t), Array.isArray(t))
      for (i = 0, o = t.length; i < o; i += 1)
        lc(t[i], e, n);
    else
      for (r = Object.keys(t), i = 0, o = r.length; i < o; i += 1)
        lc(t[r[i]], e, n);
}
function Bk(t, e) {
  e = e || {};
  var n = new Ak(e);
  n.noRefs || Pk(t, n);
  var r = t;
  return n.replacer && (r = n.replacer.call({ "": r }, "", r)), cn(n, 0, r, !0, !0) ? n.dump + `
` : "";
}
var Fk = Bk, qk = {
  dump: Fk
};
function ku(t, e) {
  return function() {
    throw new Error("Function yaml." + t + " is removed in js-yaml 4. Use yaml." + e + " instead, which is now safe by default.");
  };
}
var $k = Pe, Hk = Xm, zk = ng, Vk = lg, Uk = ag, Wk = bu, jk = Ag.load, Gk = Ag.loadAll, Kk = qk.dump, Yk = Ge, Zk = {
  binary: dg,
  float: sg,
  map: tg,
  null: rg,
  pairs: mg,
  set: gg,
  timestamp: hg,
  bool: ig,
  int: og,
  merge: fg,
  omap: pg,
  seq: eg,
  str: Qm
}, Jk = ku("safeLoad", "load"), Xk = ku("safeLoadAll", "loadAll"), Qk = ku("safeDump", "dump"), ew = {
  Type: $k,
  Schema: Hk,
  FAILSAFE_SCHEMA: zk,
  JSON_SCHEMA: Vk,
  CORE_SCHEMA: Uk,
  DEFAULT_SCHEMA: Wk,
  load: jk,
  loadAll: Gk,
  dump: Kk,
  YAMLException: Yk,
  types: Zk,
  safeLoad: Jk,
  safeLoadAll: Xk,
  safeDump: Qk
};
function tw(t, e, n, r, i, o = !0) {
  const s = [];
  for (const a of [...t.core.ruler.__rules__].reverse()) {
    if (a.name === e) {
      o || s.push(a.name);
      break;
    }
    a.name && s.push(a.name);
  }
  t.core.ruler.disable(s);
  let l = [];
  try {
    l = t.parse(n, r);
  } finally {
    t.core.ruler.enable(s);
  }
  for (const a of l)
    a.map = a.map !== null ? [a.map[0] + i, a.map[1] + i] : a.map;
  return l;
}
class hr {
  constructor(e) {
    this.required_arguments = 0, this.optional_arguments = 0, this.final_argument_whitespace = !1, this.has_content = !1, this.option_spec = {}, this.rawOptions = !1, this.state = e;
  }
  run(e) {
    return [];
  }
  assert(e, n) {
    if (!e)
      throw new Error(n);
  }
  assert_has_content(e) {
    if (!e.body)
      throw new Error("Content block expected, but none found.");
  }
  createToken(e, n, r, i) {
    const o = new this.state.Token(e, n, r);
    return (i == null ? void 0 : i.content) !== void 0 && (o.content = i.content), (i == null ? void 0 : i.level) !== void 0 && (o.level = i.level), (i == null ? void 0 : i.map) !== void 0 && (o.map = i.map), (i == null ? void 0 : i.block) !== void 0 && (o.block = i.block), (i == null ? void 0 : i.info) !== void 0 && (o.info = i.info), (i == null ? void 0 : i.meta) !== void 0 && (o.meta = i.meta), (i == null ? void 0 : i.children) !== void 0 && (o.children = i.children), o;
  }
  nestedParse(e, n) {
    return tw(this.state.md, "run_directives", e, this.state.env, n, !0);
  }
}
class _n extends Error {
  constructor() {
    super(...arguments), this.name = "DirectiveParsingError";
  }
}
function nw(t, e) {
  const n = t.meta.arg || "", r = t.content;
  let i = r.trim() ? r.split(/\r?\n/) : [], o = 0, s = {};
  (Object.keys(e.option_spec || {}) || e.rawOptions) && ([i, s, o] = Bg(i, e));
  let l = [];
  if (!e.required_arguments && !e.optional_arguments ? n && (o = 0, i = [n].concat(i)) : l = rw(n, e), i.length && !i[0].trim() && (i.shift(), o++), i.length && !e.has_content)
    throw new _n("Has content but content not allowed");
  return {
    map: t.map ? t.map : [0, 0],
    args: l,
    options: s,
    body: i.join(`
`),
    bodyMap: t.map ? [
      i.length > 0 ? t.map[0] + o : t.map[1],
      i.length > 0 ? t.map[1] - 1 : t.map[1]
    ] : [0, 0]
  };
}
function Bg(t, e) {
  let n = 1, r = {}, i = null;
  if (t.length && t[0].startsWith("---")) {
    n++;
    const o = [];
    i = [];
    let s = !1;
    for (const l of t.slice(1)) {
      if (l.startsWith("---")) {
        n++, s = !0;
        continue;
      }
      s ? o.push(l) : (n++, i.push(l));
    }
    t = o;
  } else if (t.length && t[0].startsWith(":")) {
    const o = [];
    i = [];
    let s = !1;
    for (const l of t) {
      if (!s && !l.startsWith(":")) {
        s = !0, o.push(l);
        continue;
      }
      s ? o.push(l) : (n++, i.push(l.slice(1)));
    }
    t = o;
  }
  if (i !== null)
    try {
      const o = ew.load(i.join(`
`));
      if (o !== null && typeof o == "object")
        r = o;
      else
        throw new _n(`not dict: ${o}`);
    } catch (o) {
      throw new _n(`Invalid options YAML: ${o}`);
    }
  if (e.rawOptions)
    return [t, r, n];
  for (const [o, s] of Object.entries(r)) {
    const l = e.option_spec ? e.option_spec[o] : null;
    if (!l)
      throw new _n(`Unknown option: ${o}`);
    let a = s;
    (s === null || s === !1) && (a = "");
    try {
      a = l(`${a || ""}`);
    } catch (c) {
      throw new _n(`Invalid option value: (option: '${o}'; value: ${s})
${c}`);
    }
    r[o] = a;
  }
  return [t, r, n];
}
function rw(t, e) {
  var n;
  let r = t.trim() ? (n = t.trim()) === null || n === void 0 ? void 0 : n.split(/\s+/) : [];
  const i = (e.required_arguments || 0) + (e.optional_arguments || 0);
  if (r.length < (e.required_arguments || 0))
    throw new _n(`${e.required_arguments} argument(s) required, ${r.length} supplied`);
  if (r.length > i)
    if (e.final_argument_whitespace) {
      const o = t.split(/\s+/);
      r = o.splice(0, i - 1), r.push(o.join(" "));
    } else
      throw new _n(`maximum ${i} argument(s) allowed, ${r.length} supplied`);
  return r;
}
function iw(t, e) {
  var n;
  let r = e.directivesAfter || "block";
  (!((n = e.replaceFences) !== null && n !== void 0) || n) && (t.core.ruler.after(r, "fence_to_directive", ow), r = "fence_to_directive"), t.core.ruler.after(r, "run_directives", sw(e.directives || {})), t.renderer.rules.directive = (i, o) => {
    const s = i[o];
    return `<aside class="directive-unhandled">
<header><mark>${s.info}</mark><code> ${s.meta.arg}</code></header>
<pre>${s.content}</pre></aside>
`;
  }, t.renderer.rules.directive_error = (i, o) => {
    const s = i[o];
    let l = "";
    return s.content && (l = `
---
${s.content}`), `<aside class="directive-error">
<header><mark>${s.info}</mark><code> ${s.meta.arg}</code></header>
<pre>${s.meta.error_name}:
${s.meta.error_message}
${l}</pre></aside>
`;
  };
}
function ow(t) {
  for (const e of t.tokens)
    if (e.type === "fence" || e.type === "colon_fence") {
      const n = e.info.match(/^\{([^\s}]+)\}\s*(.*)$/);
      n && (e.type = "directive", e.info = n[1], e.meta = { arg: n[2] });
    }
  return !0;
}
function sw(t) {
  function e(n) {
    const r = [];
    for (const i of n.tokens)
      if (i.type === "directive" && i.info in t)
        try {
          const o = new t[i.info](n), s = nw(i, o), [l, a] = Bg(i.content.trim() ? i.content.split(/\r?\n/) : [], o), c = new n.Token("parsed_directive_open", "", 1);
          c.info = i.info, c.hidden = !0, c.content = l.join(`
`).trim(), c.meta = {
            arg: i.meta.arg,
            opts: a
          };
          const u = [c];
          u.push(...o.run(s));
          const h = new n.Token("parsed_directive_close", "", -1);
          h.hidden = !0, u.push(h), u[1].meta = Object.assign(Object.assign({ directive: !0 }, s.options), u[1].meta), r.push(...u);
        } catch (o) {
          const s = new n.Token("directive_error", "", 0);
          s.content = i.content, s.info = i.info, s.meta = i.meta, s.map = i.map, s.meta.error_message = o.message, s.meta.error_name = o.name, r.push(s);
        }
      else
        r.push(i);
    return n.tokens = r, !0;
  }
  return e;
}
function lw(t) {
  return t.toLowerCase().split(/\s+/).join("-").replace(/[^a-z0-9]+/, "-").replace(/^[-0-9]+|-+$/, "");
}
class sr extends Error {
  constructor() {
    super(...arguments), this.name = "OptionSpecError";
  }
}
const On = (t) => t, ac = (t) => {
  if (!t)
    throw new sr("Argument required but none supplied");
  return t;
}, cc = (t) => {
  if (t.trim())
    throw new sr(`No argument is allowed: "${t}" supplied`);
  return null;
}, ni = (t) => `${t || ""}`.split(/\s+/).map((e) => lw(e));
function Fg(t) {
  if (!t)
    throw new sr("Value is not set");
  const e = Number.parseFloat(t);
  if (Number.isNaN(e) || !Number.isInteger(e))
    throw new sr(`Value "${t}" is not an integer`);
  return e;
}
function xs(t) {
  const e = Fg(t);
  if (e < 0)
    throw new sr(`Value "${t}" must be positive or zero`);
  return e;
}
const qg = (t) => t ? xs(t) : null, aw = (t) => (t = `${t || ""}`.replace(/\s+%$/, ""), xs(t));
function $g(t, e) {
  const r = new RegExp(`^(?<number>[0-9.]+)\\s*(?<units>${e.join("|")})$`).exec(t);
  if (!r || !r.groups)
    throw new sr(`not a positive measure of one of the following units: ${e.join("|")}`);
  return r.groups.number + r.groups.units;
}
const Hg = ["em", "ex", "px", "in", "cm", "mm", "pt", "pc"], zg = (t) => $g(t, [...Hg, ""]), wu = (t, e = "") => {
  try {
    return $g(t, [...Hg, "%"]);
  } catch {
    return zg(t) + e;
  }
}, cw = (t, e = "") => t.toLowerCase() === "image" ? "image" : wu(t, e);
function Cu(t) {
  return (e) => {
    if (e = e.toLowerCase().trim(), t.includes(e))
      return e;
    throw new sr(`must be in: ${t.join("|")}`);
  };
}
const uw = (t) => t;
class Mt extends hr {
  constructor() {
    super(...arguments), this.final_argument_whitespace = !0, this.has_content = !0, this.option_spec = {
      class: ni,
      name: On
    }, this.title = "", this.kind = "";
  }
  run(e) {
    var n;
    const r = [], i = this.createToken("admonition_open", "aside", 1, {
      map: e.map,
      block: !0,
      meta: { kind: this.kind }
    });
    ((n = e.options.class) === null || n === void 0 ? void 0 : n.length) >= 1 ? (i.attrSet("class", e.options.class.join(" ")), i.attrJoin("class", "admonition")) : i.attrSet("class", "admonition"), this.kind && i.attrJoin("class", this.kind), r.push(i);
    const o = this.createToken("admonition_title_open", "header", 1);
    o.attrSet("class", "admonition-title"), r.push(o);
    const s = e.args[0] || this.title;
    r.push(this.createToken("inline", "", 0, {
      map: [e.map[0], e.map[0]],
      content: s,
      children: []
    })), r.push(this.createToken("admonition_title_close", "header", -1, { block: !0 }));
    const l = this.nestedParse(e.body, e.bodyMap[0]);
    return r.push(...l), r.push(this.createToken("admonition_close", "aside", -1, { block: !0 })), r;
  }
}
class hw extends Mt {
  constructor() {
    super(...arguments), this.required_arguments = 1;
  }
}
class fw extends Mt {
  constructor() {
    super(...arguments), this.title = "Attention", this.kind = "attention";
  }
}
class dw extends Mt {
  constructor() {
    super(...arguments), this.title = "Caution", this.kind = "caution";
  }
}
class pw extends Mt {
  constructor() {
    super(...arguments), this.title = "Danger", this.kind = "danger";
  }
}
class mw extends Mt {
  constructor() {
    super(...arguments), this.title = "Error", this.kind = "error";
  }
}
class gw extends Mt {
  constructor() {
    super(...arguments), this.title = "Important", this.kind = "important";
  }
}
class yw extends Mt {
  constructor() {
    super(...arguments), this.title = "Hint", this.kind = "hint";
  }
}
class bw extends Mt {
  constructor() {
    super(...arguments), this.title = "Note", this.kind = "note";
  }
}
class vw extends Mt {
  constructor() {
    super(...arguments), this.title = "See Also", this.kind = "seealso";
  }
}
class xw extends Mt {
  constructor() {
    super(...arguments), this.title = "Tip", this.kind = "tip";
  }
}
class _w extends Mt {
  constructor() {
    super(...arguments), this.title = "Warning", this.kind = "warning";
  }
}
const kw = {
  admonition: hw,
  attention: fw,
  caution: dw,
  danger: pw,
  error: mw,
  important: gw,
  hint: yw,
  note: bw,
  seealso: vw,
  tip: xw,
  warning: _w
};
class ww extends hr {
  constructor() {
    super(...arguments), this.required_arguments = 0, this.optional_arguments = 1, this.final_argument_whitespace = !1, this.has_content = !0, this.option_spec = {
      "number-lines": qg,
      force: cc,
      name: On,
      class: ni
    };
  }
  run(e) {
    return this.assert_has_content(e), [this.createToken("fence", "code", 0, {
      info: e.args ? e.args[0] : "",
      content: e.body,
      map: e.bodyMap
    })];
  }
}
class Cw extends hr {
  constructor() {
    super(...arguments), this.required_arguments = 0, this.optional_arguments = 1, this.final_argument_whitespace = !1, this.has_content = !0, this.option_spec = {
      linenos: cc,
      "lineno-start": Fg,
      dedent: qg,
      "emphasize-lines": ac,
      caption: ac,
      force: cc,
      name: On,
      class: ni
    };
  }
  run(e) {
    return this.assert_has_content(e), [this.createToken("fence", "code", 0, {
      info: e.args ? e.args[0] : "",
      content: e.body,
      map: e.bodyMap
    })];
  }
}
class Aw extends hr {
  constructor() {
    super(...arguments), this.required_arguments = 0, this.optional_arguments = 1, this.final_argument_whitespace = !1, this.has_content = !0, this.rawOptions = !0;
  }
  run(e) {
    return [this.createToken("fence", "code", 0, {
      info: e.args ? e.args[0] : "",
      content: e.body,
      map: e.bodyMap
    })];
  }
}
const Sw = {
  code: ww,
  "code-block": Cw,
  "code-cell": Aw
}, Vg = {
  alt: On,
  height: zg,
  width: wu,
  scale: aw,
  target: ac,
  class: ni,
  name: On
};
class Ug extends hr {
  constructor() {
    super(...arguments), this.required_arguments = 1, this.optional_arguments = 0, this.final_argument_whitespace = !0, this.option_spec = Object.assign(Object.assign({}, Vg), { align: Cu(["left", "center", "right", "top", "middle", "bottom"]) });
  }
  create_image(e) {
    const n = uw(e.args[0] || ""), r = this.createToken("image", "img", 0, { map: e.map, block: !0 });
    r.attrSet("src", n), r.attrSet("alt", e.options.alt || "");
    const i = [];
    return e.options.alt && this.state.md.inline.parse(e.options.alt, this.state.md, this.state.env, i), r.children = i, e.options.height && r.attrSet("height", e.options.height), e.options.width && r.attrSet("width", e.options.width), e.options.align && r.attrJoin("class", `align-${e.options.align}`), e.options.class && r.attrJoin("class", e.options.class.join(" ")), r;
  }
  run(e) {
    return [this.create_image(e)];
  }
}
class Ew extends Ug {
  constructor() {
    super(...arguments), this.option_spec = Object.assign(Object.assign({}, Vg), { align: Cu(["left", "center", "right"]), figwidth: cw, figclass: ni }), this.has_content = !0;
  }
  run(e) {
    const n = this.createToken("figure_open", "figure", 1, {
      map: e.map,
      block: !0
    });
    e.options.figclass && n.attrJoin("class", e.options.figclass.join(" ")), e.options.align && n.attrJoin("class", `align-${e.options.align}`), e.options.figwidth && e.options.figwidth !== "image" && n.attrSet("width", e.options.figwidth);
    let r;
    e.options.name && (r = Km(
      this.state,
      n,
      Bi.figure,
      e.options.name,
      e.body.trim()
    ), n.attrJoin("class", "numbered"));
    const i = this.create_image(e);
    i.map = [e.map[0], e.map[0]];
    let o = [], s = [];
    if (e.body) {
      const [a, ...c] = e.body.split(`

`), u = c.join(`

`), h = e.bodyMap[0], f = this.createToken("figure_caption_open", "figcaption", 1, {
        block: !0
      });
      r && f.attrSet("number", `${r.number}`);
      const d = this.nestedParse(a, h), p = this.createToken("figure_caption_close", "figcaption", -1, {
        block: !0
      });
      if (o = [f, ...d, p], u) {
        const m = h + a.split(`
`).length + 1, g = this.createToken("figure_legend_open", "", 1, {
          block: !0
        }), y = this.nestedParse(u, m), b = this.createToken("figure_legend_close", "", -1, {
          block: !0
        });
        s = [g, ...y, b];
      }
    }
    const l = this.createToken("figure_close", "figure", -1, { block: !0 });
    return [n, i, ...o, ...s, l];
  }
}
const Tw = {
  image: Ug,
  figure: Ew
};
class Au {
  constructor(e, n = !0) {
    if (this.children = [], this.children = [], n) {
      this._set_children_from_tokens(e);
      return;
    }
    if (e.length === 0)
      throw new Error("Tree creation: Can only create root from empty token sequence.");
    if (e.length === 1) {
      const r = e[0];
      if (r.nesting)
        throw new Error("Unequal nesting level at the start and end of token stream.");
      this.token = r, r.children !== null && r.children.length > 0 && this._set_children_from_tokens(r.children);
    } else
      this.nester_tokens = { opening: e[0], closing: e[e.length - 1] }, this._set_children_from_tokens(e.slice(1, -1));
  }
  _set_children_from_tokens(e) {
    const n = [...e].reverse();
    let r;
    for (; n.length > 0 && (r = n.pop(), !!r); ) {
      if (!r.nesting) {
        this._add_child([r]);
        continue;
      }
      if (r.nesting !== 1)
        throw new Error("Invalid token nesting");
      const i = [r];
      let o = 1;
      for (; n.length > 0 && o !== 0; )
        r = n.pop(), r && (i.push(r), o += r.nesting);
      if (o)
        throw new Error(`unclosed tokens starting: ${i[0]}`);
      this._add_child(i);
    }
  }
  _add_child(e) {
    const n = new Au(e, !1);
    n.parent = this, this.children.push(n);
  }
  to_tokens() {
    function e(r, i) {
      if (r.type === "root")
        for (const o of r.children)
          e(o, i);
      else if (r.token)
        i.push(r.token);
      else {
        if (!r.nester_tokens)
          throw new Error("No nested token available");
        i.push(r.nester_tokens.opening);
        for (const o of r.children)
          e(o, i);
        i.push(r.nester_tokens.closing);
      }
    }
    const n = [];
    return e(this, n), n;
  }
  get is_root() {
    return !(this.token || this.nester_tokens);
  }
  get is_nested() {
    return !!this.nester_tokens;
  }
  get siblings() {
    return this.parent ? this.parent.children : [this];
  }
  *walk(e = !0) {
    e && (yield this);
    for (const n of this.children)
      yield* n.walk(!0);
  }
  get type() {
    var e, n, r;
    if (this.is_root)
      return "root";
    if (this.token)
      return this.token.type;
    if (!((e = this.nester_tokens) === null || e === void 0) && e.opening.type.endsWith("_open"))
      return (n = this.nester_tokens) === null || n === void 0 ? void 0 : n.opening.type.slice(0, -5);
    if (this.nester_tokens)
      return (r = this.nester_tokens) === null || r === void 0 ? void 0 : r.opening.type;
    throw new Error("no internal token");
  }
  attribute_token() {
    if (this.token)
      return this.token;
    if (this.nester_tokens)
      return this.nester_tokens.opening;
    throw new Error("Tree node does not have the accessed attribute");
  }
  get tag() {
    return this.attribute_token().tag;
  }
  get level() {
    return this.attribute_token().level;
  }
  get content() {
    return this.attribute_token().content;
  }
  get markup() {
    return this.attribute_token().markup;
  }
  get info() {
    return this.attribute_token().info;
  }
  get meta() {
    return this.attribute_token().meta;
  }
  get block() {
    return this.attribute_token().block;
  }
  get hidden() {
    return this.attribute_token().hidden;
  }
  get map() {
    return this.attribute_token().map;
  }
  get attrs() {
    return this.attribute_token().attrs;
  }
}
class Dw extends hr {
  constructor() {
    super(...arguments), this.required_arguments = 0, this.optional_arguments = 1, this.final_argument_whitespace = !0, this.has_content = !0, this.option_spec = {
      "header-rows": xs,
      "stub-columns": xs,
      width: wu,
      widths: On,
      class: ni,
      name: On,
      align: Cu(["left", "center", "right"])
    };
  }
  run(e) {
    this.assert_has_content(e);
    const n = e.options["header-rows"] || 0, r = this.nestedParse(e.body, e.bodyMap[0]);
    if (r.length < 2 || r[0].type !== "bullet_list_open" || r[r.length - 1].type !== "bullet_list_close")
      throw new _n("Content is not a single bullet list");
    const i = [], o = this.createToken("table_open", "table", 1, { map: e.bodyMap });
    e.options.align && o.attrJoin("class", `align-${e.options.align}`), e.options.class && o.attrJoin("class", e.options.class.join(" ")), i.push(o), e.args.length && e.args[0] && (i.push(this.createToken("table_caption_open", "caption", 1)), i.push(this.createToken("inline", "", 0, {
      map: [e.map[0], e.map[0]],
      content: e.args[0],
      children: []
    })), i.push(this.createToken("table_caption_close", "caption", -1)));
    let s = "th";
    n ? (i.push(this.createToken("thead_open", "thead", 1, { level: 1 })), s = "th") : (i.push(this.createToken("tbody_open", "tbody", 1, { level: 1 })), s = "td");
    let l, a = 0;
    for (const c of new Au(r.slice(1, -1)).children) {
      a += 1, this.assert(c.type === "list_item", `list item ${a} not of type 'list_item': ${c.type}`), this.assert(c.children.length === 1 && c.children[0].type === "bullet_list", `list item ${a} content not a nested bullet list`);
      const u = c.children[0].children;
      l === void 0 ? l = u.length : this.assert(u.length === l, `list item ${a} does not contain the same number of columns as previous items`), n && a === n + 1 && (i.push(this.createToken("thead_close", "thead", -1, { level: 1 })), i.push(this.createToken("tbody_open", "tbody", 1, { level: 1 })), s = "td"), i.push(this.createToken("tr_open", "tr", 1, { map: c.map, level: 2 }));
      for (const h of u)
        i.push(this.createToken(`${s}_open`, s, 1, { map: h.map, level: 3 })), i.push(...h.to_tokens().slice(1, -1)), i.push(this.createToken(`${s}_close`, s, -1, { level: 3 }));
      i.push(this.createToken("tr_close", "tr", -1, { level: 2 }));
    }
    if (n && a < n)
      throw new Error(`Insufficient rows (${a}) for required header rows (${n})`);
    return s === "td" ? i.push(this.createToken("tbody_close", "tbody", -1, { level: 1 })) : i.push(this.createToken("thead_close", "thead", -1, { level: 1 })), i.push(this.createToken("table_close", "table", -1)), i;
  }
}
const Mw = {
  "list-table": Dw
};
class Ow extends hr {
  constructor() {
    super(...arguments), this.required_arguments = 0, this.optional_arguments = 0, this.final_argument_whitespace = !1, this.has_content = !0, this.option_spec = {
      label: On
    };
  }
  run(e) {
    this.assert_has_content(e);
    const n = this.createToken("math_block", "div", 0, {
      content: e.body,
      map: e.bodyMap,
      block: !0
    });
    if (n.attrSet("class", "math block"), e.options.label) {
      n.attrSet("id", e.options.label);
      const r = Km(this.state, n, Bi.equation, e.options.label, "");
      n.attrSet("number", `${r.number}`), n.info = e.options.label, n.meta = { label: e.options.label, numbered: !0, number: r.number };
    }
    return [n];
  }
}
const Rw = {
  math: Ow
}, Lw = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, kw), Tw), Sw), Mw), Rw);
function Iw(t) {
  return (e) => {
    const n = ol(e);
    return n.references.forEach((r) => {
      const { label: i, tokens: o, contentFromTarget: s } = r, l = (c, u) => (o.open.attrJoin("class", "error"), o.open.tag = o.close.tag = "code", s && u ? o.content.content = s(u) : o.content.content = c, !0), a = n.targets[i];
      if (!a)
        return l(i, {
          kind: r.kind || "",
          label: i,
          title: i,
          number: `"${i}"`
        });
      if (r.kind && a.kind !== r.kind)
        return l(`Reference "${i}" does not match kind "${r.kind}"`);
      o.open.attrSet("href", `#${a.label}`), a.title && o.open.attrSet("title", a.title), s && (o.content.content = s(a).trim());
    }), !0;
  };
}
function Nw(t, e) {
  t.core.ruler.push("docutils_number", Iw());
}
const Pw = {
  parseRoles: !0,
  replaceFences: !0,
  rolesAfter: "inline",
  directivesAfter: "block",
  directives: Lw,
  roles: Ix
};
function Bw(t, e) {
  const n = Object.assign(Object.assign({}, Pw), e);
  t.use(kx, n), t.use(iw, n), t.use(Nw, n);
}
/*! @license DOMPurify 2.4.7 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.4.7/LICENSE */
function vn(t) {
  return vn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, vn(t);
}
function uc(t, e) {
  return uc = Object.setPrototypeOf || function(r, i) {
    return r.__proto__ = i, r;
  }, uc(t, e);
}
function Fw() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function es(t, e, n) {
  return Fw() ? es = Reflect.construct : es = function(i, o, s) {
    var l = [null];
    l.push.apply(l, o);
    var a = Function.bind.apply(i, l), c = new a();
    return s && uc(c, s.prototype), c;
  }, es.apply(null, arguments);
}
function St(t) {
  return qw(t) || $w(t) || Hw(t) || zw();
}
function qw(t) {
  if (Array.isArray(t))
    return hc(t);
}
function $w(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null)
    return Array.from(t);
}
function Hw(t, e) {
  if (!!t) {
    if (typeof t == "string")
      return hc(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    if (n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set")
      return Array.from(t);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return hc(t, e);
  }
}
function hc(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++)
    r[n] = t[n];
  return r;
}
function zw() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Vw = Object.hasOwnProperty, Of = Object.setPrototypeOf, Uw = Object.isFrozen, Ww = Object.getPrototypeOf, jw = Object.getOwnPropertyDescriptor, Je = Object.freeze, Dt = Object.seal, Gw = Object.create, Wg = typeof Reflect < "u" && Reflect, _s = Wg.apply, fc = Wg.construct;
_s || (_s = function(e, n, r) {
  return e.apply(n, r);
});
Je || (Je = function(e) {
  return e;
});
Dt || (Dt = function(e) {
  return e;
});
fc || (fc = function(e, n) {
  return es(e, St(n));
});
var Kw = yt(Array.prototype.forEach), Rf = yt(Array.prototype.pop), fi = yt(Array.prototype.push), ts = yt(String.prototype.toLowerCase), Jl = yt(String.prototype.toString), Yw = yt(String.prototype.match), At = yt(String.prototype.replace), Zw = yt(String.prototype.indexOf), Jw = yt(String.prototype.trim), We = yt(RegExp.prototype.test), Xl = Xw(TypeError);
function yt(t) {
  return function(e) {
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
      r[i - 1] = arguments[i];
    return _s(t, e, r);
  };
}
function Xw(t) {
  return function() {
    for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
      n[r] = arguments[r];
    return fc(t, n);
  };
}
function U(t, e, n) {
  var r;
  n = (r = n) !== null && r !== void 0 ? r : ts, Of && Of(t, null);
  for (var i = e.length; i--; ) {
    var o = e[i];
    if (typeof o == "string") {
      var s = n(o);
      s !== o && (Uw(e) || (e[i] = s), o = s);
    }
    t[o] = !0;
  }
  return t;
}
function Vn(t) {
  var e = Gw(null), n;
  for (n in t)
    _s(Vw, t, [n]) === !0 && (e[n] = t[n]);
  return e;
}
function _o(t, e) {
  for (; t !== null; ) {
    var n = jw(t, e);
    if (n) {
      if (n.get)
        return yt(n.get);
      if (typeof n.value == "function")
        return yt(n.value);
    }
    t = Ww(t);
  }
  function r(i) {
    return console.warn("fallback value for", i), null;
  }
  return r;
}
var Lf = Je(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Ql = Je(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), ea = Je(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Qw = Je(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), ta = Je(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]), eC = Je(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), If = Je(["#text"]), Nf = Je(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]), na = Je(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Pf = Je(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), ko = Je(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), tC = Dt(/\{\{[\w\W]*|[\w\W]*\}\}/gm), nC = Dt(/<%[\w\W]*|[\w\W]*%>/gm), rC = Dt(/\${[\w\W]*}/gm), iC = Dt(/^data-[\-\w.\u00B7-\uFFFF]/), oC = Dt(/^aria-[\-\w]+$/), sC = Dt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
), lC = Dt(/^(?:\w+script|data):/i), aC = Dt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
), cC = Dt(/^html$/i), uC = function() {
  return typeof window > "u" ? null : window;
}, hC = function(e, n) {
  if (vn(e) !== "object" || typeof e.createPolicy != "function")
    return null;
  var r = null, i = "data-tt-policy-suffix";
  n.currentScript && n.currentScript.hasAttribute(i) && (r = n.currentScript.getAttribute(i));
  var o = "dompurify" + (r ? "#" + r : "");
  try {
    return e.createPolicy(o, {
      createHTML: function(l) {
        return l;
      },
      createScriptURL: function(l) {
        return l;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + o + " could not be created."), null;
  }
};
function jg() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : uC(), e = function(_) {
    return jg(_);
  };
  if (e.version = "2.4.7", e.removed = [], !t || !t.document || t.document.nodeType !== 9)
    return e.isSupported = !1, e;
  var n = t.document, r = t.document, i = t.DocumentFragment, o = t.HTMLTemplateElement, s = t.Node, l = t.Element, a = t.NodeFilter, c = t.NamedNodeMap, u = c === void 0 ? t.NamedNodeMap || t.MozNamedAttrMap : c, h = t.HTMLFormElement, f = t.DOMParser, d = t.trustedTypes, p = l.prototype, m = _o(p, "cloneNode"), g = _o(p, "nextSibling"), y = _o(p, "childNodes"), b = _o(p, "parentNode");
  if (typeof o == "function") {
    var k = r.createElement("template");
    k.content && k.content.ownerDocument && (r = k.content.ownerDocument);
  }
  var x = hC(d, n), w = x ? x.createHTML("") : "", v = r, C = v.implementation, L = v.createNodeIterator, R = v.createDocumentFragment, T = v.getElementsByTagName, H = n.importNode, Q = {};
  try {
    Q = Vn(r).documentMode ? r.documentMode : {};
  } catch {
  }
  var G = {};
  e.isSupported = typeof b == "function" && C && C.createHTMLDocument !== void 0 && Q !== 9;
  var S = tC, z = nC, $ = rC, he = iC, ie = oC, ne = lC, oe = aC, me = sC, re = null, kt = U({}, [].concat(St(Lf), St(Ql), St(ea), St(ta), St(If))), le = null, dn = U({}, [].concat(St(Nf), St(na), St(Pf), St(ko))), ae = Object.seal(Object.create(null, {
    tagNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    attributeNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    allowCustomizedBuiltInElements: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: !1
    }
  })), ct = null, wt = null, dr = !0, pn = !0, Ct = !1, fh = !0, pr = !1, Hn = !1, Ol = !1, Rl = !1, mr = !1, ho = !1, fo = !1, dh = !0, ph = !1, s1 = "user-content-", Ll = !0, ui = !1, gr = {}, yr = null, mh = U({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), gh = null, yh = U({}, ["audio", "video", "img", "source", "image", "track"]), Il = null, bh = U({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), po = "http://www.w3.org/1998/Math/MathML", mo = "http://www.w3.org/2000/svg", en = "http://www.w3.org/1999/xhtml", br = en, Nl = !1, Pl = null, l1 = U({}, [po, mo, en], Jl), zn, a1 = ["application/xhtml+xml", "text/html"], c1 = "text/html", Te, vr = null, u1 = r.createElement("form"), vh = function(_) {
    return _ instanceof RegExp || _ instanceof Function;
  }, Bl = function(_) {
    vr && vr === _ || ((!_ || vn(_) !== "object") && (_ = {}), _ = Vn(_), zn = a1.indexOf(_.PARSER_MEDIA_TYPE) === -1 ? zn = c1 : zn = _.PARSER_MEDIA_TYPE, Te = zn === "application/xhtml+xml" ? Jl : ts, re = "ALLOWED_TAGS" in _ ? U({}, _.ALLOWED_TAGS, Te) : kt, le = "ALLOWED_ATTR" in _ ? U({}, _.ALLOWED_ATTR, Te) : dn, Pl = "ALLOWED_NAMESPACES" in _ ? U({}, _.ALLOWED_NAMESPACES, Jl) : l1, Il = "ADD_URI_SAFE_ATTR" in _ ? U(
      Vn(bh),
      _.ADD_URI_SAFE_ATTR,
      Te
    ) : bh, gh = "ADD_DATA_URI_TAGS" in _ ? U(
      Vn(yh),
      _.ADD_DATA_URI_TAGS,
      Te
    ) : yh, yr = "FORBID_CONTENTS" in _ ? U({}, _.FORBID_CONTENTS, Te) : mh, ct = "FORBID_TAGS" in _ ? U({}, _.FORBID_TAGS, Te) : {}, wt = "FORBID_ATTR" in _ ? U({}, _.FORBID_ATTR, Te) : {}, gr = "USE_PROFILES" in _ ? _.USE_PROFILES : !1, dr = _.ALLOW_ARIA_ATTR !== !1, pn = _.ALLOW_DATA_ATTR !== !1, Ct = _.ALLOW_UNKNOWN_PROTOCOLS || !1, fh = _.ALLOW_SELF_CLOSE_IN_ATTR !== !1, pr = _.SAFE_FOR_TEMPLATES || !1, Hn = _.WHOLE_DOCUMENT || !1, mr = _.RETURN_DOM || !1, ho = _.RETURN_DOM_FRAGMENT || !1, fo = _.RETURN_TRUSTED_TYPE || !1, Rl = _.FORCE_BODY || !1, dh = _.SANITIZE_DOM !== !1, ph = _.SANITIZE_NAMED_PROPS || !1, Ll = _.KEEP_CONTENT !== !1, ui = _.IN_PLACE || !1, me = _.ALLOWED_URI_REGEXP || me, br = _.NAMESPACE || en, ae = _.CUSTOM_ELEMENT_HANDLING || {}, _.CUSTOM_ELEMENT_HANDLING && vh(_.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (ae.tagNameCheck = _.CUSTOM_ELEMENT_HANDLING.tagNameCheck), _.CUSTOM_ELEMENT_HANDLING && vh(_.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (ae.attributeNameCheck = _.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), _.CUSTOM_ELEMENT_HANDLING && typeof _.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (ae.allowCustomizedBuiltInElements = _.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), pr && (pn = !1), ho && (mr = !0), gr && (re = U({}, St(If)), le = [], gr.html === !0 && (U(re, Lf), U(le, Nf)), gr.svg === !0 && (U(re, Ql), U(le, na), U(le, ko)), gr.svgFilters === !0 && (U(re, ea), U(le, na), U(le, ko)), gr.mathMl === !0 && (U(re, ta), U(le, Pf), U(le, ko))), _.ADD_TAGS && (re === kt && (re = Vn(re)), U(re, _.ADD_TAGS, Te)), _.ADD_ATTR && (le === dn && (le = Vn(le)), U(le, _.ADD_ATTR, Te)), _.ADD_URI_SAFE_ATTR && U(Il, _.ADD_URI_SAFE_ATTR, Te), _.FORBID_CONTENTS && (yr === mh && (yr = Vn(yr)), U(yr, _.FORBID_CONTENTS, Te)), Ll && (re["#text"] = !0), Hn && U(re, ["html", "head", "body"]), re.table && (U(re, ["tbody"]), delete ct.tbody), Je && Je(_), vr = _);
  }, xh = U({}, ["mi", "mo", "mn", "ms", "mtext"]), _h = U({}, ["foreignobject", "desc", "title", "annotation-xml"]), h1 = U({}, ["title", "style", "font", "a", "script"]), go = U({}, Ql);
  U(go, ea), U(go, Qw);
  var Fl = U({}, ta);
  U(Fl, eC);
  var f1 = function(_) {
    var E = b(_);
    (!E || !E.tagName) && (E = {
      namespaceURI: br,
      tagName: "template"
    });
    var M = ts(_.tagName), Z = ts(E.tagName);
    return Pl[_.namespaceURI] ? _.namespaceURI === mo ? E.namespaceURI === en ? M === "svg" : E.namespaceURI === po ? M === "svg" && (Z === "annotation-xml" || xh[Z]) : Boolean(go[M]) : _.namespaceURI === po ? E.namespaceURI === en ? M === "math" : E.namespaceURI === mo ? M === "math" && _h[Z] : Boolean(Fl[M]) : _.namespaceURI === en ? E.namespaceURI === mo && !_h[Z] || E.namespaceURI === po && !xh[Z] ? !1 : !Fl[M] && (h1[M] || !go[M]) : !!(zn === "application/xhtml+xml" && Pl[_.namespaceURI]) : !1;
  }, tn = function(_) {
    fi(e.removed, {
      element: _
    });
    try {
      _.parentNode.removeChild(_);
    } catch {
      try {
        _.outerHTML = w;
      } catch {
        _.remove();
      }
    }
  }, ql = function(_, E) {
    try {
      fi(e.removed, {
        attribute: E.getAttributeNode(_),
        from: E
      });
    } catch {
      fi(e.removed, {
        attribute: null,
        from: E
      });
    }
    if (E.removeAttribute(_), _ === "is" && !le[_])
      if (mr || ho)
        try {
          tn(E);
        } catch {
        }
      else
        try {
          E.setAttribute(_, "");
        } catch {
        }
  }, kh = function(_) {
    var E, M;
    if (Rl)
      _ = "<remove></remove>" + _;
    else {
      var Z = Yw(_, /^[\r\n\t ]+/);
      M = Z && Z[0];
    }
    zn === "application/xhtml+xml" && br === en && (_ = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + _ + "</body></html>");
    var Xe = x ? x.createHTML(_) : _;
    if (br === en)
      try {
        E = new f().parseFromString(Xe, zn);
      } catch {
      }
    if (!E || !E.documentElement) {
      E = C.createDocument(br, "template", null);
      try {
        E.documentElement.innerHTML = Nl ? w : Xe;
      } catch {
      }
    }
    var Fe = E.body || E.documentElement;
    return _ && M && Fe.insertBefore(r.createTextNode(M), Fe.childNodes[0] || null), br === en ? T.call(E, Hn ? "html" : "body")[0] : Hn ? E.documentElement : Fe;
  }, wh = function(_) {
    return L.call(
      _.ownerDocument || _,
      _,
      a.SHOW_ELEMENT | a.SHOW_COMMENT | a.SHOW_TEXT,
      null,
      !1
    );
  }, d1 = function(_) {
    return _ instanceof h && (typeof _.nodeName != "string" || typeof _.textContent != "string" || typeof _.removeChild != "function" || !(_.attributes instanceof u) || typeof _.removeAttribute != "function" || typeof _.setAttribute != "function" || typeof _.namespaceURI != "string" || typeof _.insertBefore != "function" || typeof _.hasChildNodes != "function");
  }, hi = function(_) {
    return vn(s) === "object" ? _ instanceof s : _ && vn(_) === "object" && typeof _.nodeType == "number" && typeof _.nodeName == "string";
  }, nn = function(_, E, M) {
    !G[_] || Kw(G[_], function(Z) {
      Z.call(e, E, M, vr);
    });
  }, Ch = function(_) {
    var E;
    if (nn("beforeSanitizeElements", _, null), d1(_) || We(/[\u0080-\uFFFF]/, _.nodeName))
      return tn(_), !0;
    var M = Te(_.nodeName);
    if (nn("uponSanitizeElement", _, {
      tagName: M,
      allowedTags: re
    }), _.hasChildNodes() && !hi(_.firstElementChild) && (!hi(_.content) || !hi(_.content.firstElementChild)) && We(/<[/\w]/g, _.innerHTML) && We(/<[/\w]/g, _.textContent) || M === "select" && We(/<template/i, _.innerHTML))
      return tn(_), !0;
    if (!re[M] || ct[M]) {
      if (!ct[M] && Sh(M) && (ae.tagNameCheck instanceof RegExp && We(ae.tagNameCheck, M) || ae.tagNameCheck instanceof Function && ae.tagNameCheck(M)))
        return !1;
      if (Ll && !yr[M]) {
        var Z = b(_) || _.parentNode, Xe = y(_) || _.childNodes;
        if (Xe && Z)
          for (var Fe = Xe.length, Oe = Fe - 1; Oe >= 0; --Oe)
            Z.insertBefore(m(Xe[Oe], !0), g(_));
      }
      return tn(_), !0;
    }
    return _ instanceof l && !f1(_) || (M === "noscript" || M === "noembed" || M === "noframes") && We(/<\/no(script|embed|frames)/i, _.innerHTML) ? (tn(_), !0) : (pr && _.nodeType === 3 && (E = _.textContent, E = At(E, S, " "), E = At(E, z, " "), E = At(E, $, " "), _.textContent !== E && (fi(e.removed, {
      element: _.cloneNode()
    }), _.textContent = E)), nn("afterSanitizeElements", _, null), !1);
  }, Ah = function(_, E, M) {
    if (dh && (E === "id" || E === "name") && (M in r || M in u1))
      return !1;
    if (!(pn && !wt[E] && We(he, E))) {
      if (!(dr && We(ie, E))) {
        if (!le[E] || wt[E]) {
          if (!(Sh(_) && (ae.tagNameCheck instanceof RegExp && We(ae.tagNameCheck, _) || ae.tagNameCheck instanceof Function && ae.tagNameCheck(_)) && (ae.attributeNameCheck instanceof RegExp && We(ae.attributeNameCheck, E) || ae.attributeNameCheck instanceof Function && ae.attributeNameCheck(E)) || E === "is" && ae.allowCustomizedBuiltInElements && (ae.tagNameCheck instanceof RegExp && We(ae.tagNameCheck, M) || ae.tagNameCheck instanceof Function && ae.tagNameCheck(M))))
            return !1;
        } else if (!Il[E]) {
          if (!We(me, At(M, oe, ""))) {
            if (!((E === "src" || E === "xlink:href" || E === "href") && _ !== "script" && Zw(M, "data:") === 0 && gh[_])) {
              if (!(Ct && !We(ne, At(M, oe, "")))) {
                if (M)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, Sh = function(_) {
    return _.indexOf("-") > 0;
  }, Eh = function(_) {
    var E, M, Z, Xe;
    nn("beforeSanitizeAttributes", _, null);
    var Fe = _.attributes;
    if (!!Fe) {
      var Oe = {
        attrName: "",
        attrValue: "",
        keepAttr: !0,
        allowedAttributes: le
      };
      for (Xe = Fe.length; Xe--; ) {
        E = Fe[Xe];
        var yo = E, De = yo.name, $l = yo.namespaceURI;
        if (M = De === "value" ? E.value : Jw(E.value), Z = Te(De), Oe.attrName = Z, Oe.attrValue = M, Oe.keepAttr = !0, Oe.forceKeepAttr = void 0, nn("uponSanitizeAttribute", _, Oe), M = Oe.attrValue, !Oe.forceKeepAttr && (ql(De, _), !!Oe.keepAttr)) {
          if (!fh && We(/\/>/i, M)) {
            ql(De, _);
            continue;
          }
          pr && (M = At(M, S, " "), M = At(M, z, " "), M = At(M, $, " "));
          var Th = Te(_.nodeName);
          if (!!Ah(Th, Z, M)) {
            if (ph && (Z === "id" || Z === "name") && (ql(De, _), M = s1 + M), x && vn(d) === "object" && typeof d.getAttributeType == "function" && !$l)
              switch (d.getAttributeType(Th, Z)) {
                case "TrustedHTML": {
                  M = x.createHTML(M);
                  break;
                }
                case "TrustedScriptURL": {
                  M = x.createScriptURL(M);
                  break;
                }
              }
            try {
              $l ? _.setAttributeNS($l, De, M) : _.setAttribute(De, M), Rf(e.removed);
            } catch {
            }
          }
        }
      }
      nn("afterSanitizeAttributes", _, null);
    }
  }, p1 = function F(_) {
    var E, M = wh(_);
    for (nn("beforeSanitizeShadowDOM", _, null); E = M.nextNode(); )
      nn("uponSanitizeShadowNode", E, null), !Ch(E) && (E.content instanceof i && F(E.content), Eh(E));
    nn("afterSanitizeShadowDOM", _, null);
  };
  return e.sanitize = function(F) {
    var _ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, E, M, Z, Xe, Fe;
    if (Nl = !F, Nl && (F = "<!-->"), typeof F != "string" && !hi(F))
      if (typeof F.toString == "function") {
        if (F = F.toString(), typeof F != "string")
          throw Xl("dirty is not a string, aborting");
      } else
        throw Xl("toString is not a function");
    if (!e.isSupported) {
      if (vn(t.toStaticHTML) === "object" || typeof t.toStaticHTML == "function") {
        if (typeof F == "string")
          return t.toStaticHTML(F);
        if (hi(F))
          return t.toStaticHTML(F.outerHTML);
      }
      return F;
    }
    if (Ol || Bl(_), e.removed = [], typeof F == "string" && (ui = !1), ui) {
      if (F.nodeName) {
        var Oe = Te(F.nodeName);
        if (!re[Oe] || ct[Oe])
          throw Xl("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (F instanceof s)
      E = kh("<!---->"), M = E.ownerDocument.importNode(F, !0), M.nodeType === 1 && M.nodeName === "BODY" || M.nodeName === "HTML" ? E = M : E.appendChild(M);
    else {
      if (!mr && !pr && !Hn && F.indexOf("<") === -1)
        return x && fo ? x.createHTML(F) : F;
      if (E = kh(F), !E)
        return mr ? null : fo ? w : "";
    }
    E && Rl && tn(E.firstChild);
    for (var yo = wh(ui ? F : E); Z = yo.nextNode(); )
      Z.nodeType === 3 && Z === Xe || Ch(Z) || (Z.content instanceof i && p1(Z.content), Eh(Z), Xe = Z);
    if (Xe = null, ui)
      return F;
    if (mr) {
      if (ho)
        for (Fe = R.call(E.ownerDocument); E.firstChild; )
          Fe.appendChild(E.firstChild);
      else
        Fe = E;
      return (le.shadowroot || le.shadowrootmod) && (Fe = H.call(n, Fe, !0)), Fe;
    }
    var De = Hn ? E.outerHTML : E.innerHTML;
    return Hn && re["!doctype"] && E.ownerDocument && E.ownerDocument.doctype && E.ownerDocument.doctype.name && We(cC, E.ownerDocument.doctype.name) && (De = "<!DOCTYPE " + E.ownerDocument.doctype.name + `>
` + De), pr && (De = At(De, S, " "), De = At(De, z, " "), De = At(De, $, " ")), x && fo ? x.createHTML(De) : De;
  }, e.setConfig = function(F) {
    Bl(F), Ol = !0;
  }, e.clearConfig = function() {
    vr = null, Ol = !1;
  }, e.isValidAttribute = function(F, _, E) {
    vr || Bl({});
    var M = Te(F), Z = Te(_);
    return Ah(M, Z, E);
  }, e.addHook = function(F, _) {
    typeof _ == "function" && (G[F] = G[F] || [], fi(G[F], _));
  }, e.removeHook = function(F) {
    if (G[F])
      return Rf(G[F]);
  }, e.removeHooks = function(F) {
    G[F] && (G[F] = []);
  }, e.removeAllHooks = function() {
    G = {};
  }, e;
}
var fC = jg(), Gg = { exports: {} }, X = {}, Su = { exports: {} };
const dC = "\xC1", pC = "\xE1", mC = "\u0102", gC = "\u0103", yC = "\u223E", bC = "\u223F", vC = "\u223E\u0333", xC = "\xC2", _C = "\xE2", kC = "\xB4", wC = "\u0410", CC = "\u0430", AC = "\xC6", SC = "\xE6", EC = "\u2061", TC = "\u{1D504}", DC = "\u{1D51E}", MC = "\xC0", OC = "\xE0", RC = "\u2135", LC = "\u2135", IC = "\u0391", NC = "\u03B1", PC = "\u0100", BC = "\u0101", FC = "\u2A3F", qC = "&", $C = "&", HC = "\u2A55", zC = "\u2A53", VC = "\u2227", UC = "\u2A5C", WC = "\u2A58", jC = "\u2A5A", GC = "\u2220", KC = "\u29A4", YC = "\u2220", ZC = "\u29A8", JC = "\u29A9", XC = "\u29AA", QC = "\u29AB", eA = "\u29AC", tA = "\u29AD", nA = "\u29AE", rA = "\u29AF", iA = "\u2221", oA = "\u221F", sA = "\u22BE", lA = "\u299D", aA = "\u2222", cA = "\xC5", uA = "\u237C", hA = "\u0104", fA = "\u0105", dA = "\u{1D538}", pA = "\u{1D552}", mA = "\u2A6F", gA = "\u2248", yA = "\u2A70", bA = "\u224A", vA = "\u224B", xA = "'", _A = "\u2061", kA = "\u2248", wA = "\u224A", CA = "\xC5", AA = "\xE5", SA = "\u{1D49C}", EA = "\u{1D4B6}", TA = "\u2254", DA = "*", MA = "\u2248", OA = "\u224D", RA = "\xC3", LA = "\xE3", IA = "\xC4", NA = "\xE4", PA = "\u2233", BA = "\u2A11", FA = "\u224C", qA = "\u03F6", $A = "\u2035", HA = "\u223D", zA = "\u22CD", VA = "\u2216", UA = "\u2AE7", WA = "\u22BD", jA = "\u2305", GA = "\u2306", KA = "\u2305", YA = "\u23B5", ZA = "\u23B6", JA = "\u224C", XA = "\u0411", QA = "\u0431", eS = "\u201E", tS = "\u2235", nS = "\u2235", rS = "\u2235", iS = "\u29B0", oS = "\u03F6", sS = "\u212C", lS = "\u212C", aS = "\u0392", cS = "\u03B2", uS = "\u2136", hS = "\u226C", fS = "\u{1D505}", dS = "\u{1D51F}", pS = "\u22C2", mS = "\u25EF", gS = "\u22C3", yS = "\u2A00", bS = "\u2A01", vS = "\u2A02", xS = "\u2A06", _S = "\u2605", kS = "\u25BD", wS = "\u25B3", CS = "\u2A04", AS = "\u22C1", SS = "\u22C0", ES = "\u290D", TS = "\u29EB", DS = "\u25AA", MS = "\u25B4", OS = "\u25BE", RS = "\u25C2", LS = "\u25B8", IS = "\u2423", NS = "\u2592", PS = "\u2591", BS = "\u2593", FS = "\u2588", qS = "=\u20E5", $S = "\u2261\u20E5", HS = "\u2AED", zS = "\u2310", VS = "\u{1D539}", US = "\u{1D553}", WS = "\u22A5", jS = "\u22A5", GS = "\u22C8", KS = "\u29C9", YS = "\u2510", ZS = "\u2555", JS = "\u2556", XS = "\u2557", QS = "\u250C", e2 = "\u2552", t2 = "\u2553", n2 = "\u2554", r2 = "\u2500", i2 = "\u2550", o2 = "\u252C", s2 = "\u2564", l2 = "\u2565", a2 = "\u2566", c2 = "\u2534", u2 = "\u2567", h2 = "\u2568", f2 = "\u2569", d2 = "\u229F", p2 = "\u229E", m2 = "\u22A0", g2 = "\u2518", y2 = "\u255B", b2 = "\u255C", v2 = "\u255D", x2 = "\u2514", _2 = "\u2558", k2 = "\u2559", w2 = "\u255A", C2 = "\u2502", A2 = "\u2551", S2 = "\u253C", E2 = "\u256A", T2 = "\u256B", D2 = "\u256C", M2 = "\u2524", O2 = "\u2561", R2 = "\u2562", L2 = "\u2563", I2 = "\u251C", N2 = "\u255E", P2 = "\u255F", B2 = "\u2560", F2 = "\u2035", q2 = "\u02D8", $2 = "\u02D8", H2 = "\xA6", z2 = "\u{1D4B7}", V2 = "\u212C", U2 = "\u204F", W2 = "\u223D", j2 = "\u22CD", G2 = "\u29C5", K2 = "\\", Y2 = "\u27C8", Z2 = "\u2022", J2 = "\u2022", X2 = "\u224E", Q2 = "\u2AAE", eE = "\u224F", tE = "\u224E", nE = "\u224F", rE = "\u0106", iE = "\u0107", oE = "\u2A44", sE = "\u2A49", lE = "\u2A4B", aE = "\u2229", cE = "\u22D2", uE = "\u2A47", hE = "\u2A40", fE = "\u2145", dE = "\u2229\uFE00", pE = "\u2041", mE = "\u02C7", gE = "\u212D", yE = "\u2A4D", bE = "\u010C", vE = "\u010D", xE = "\xC7", _E = "\xE7", kE = "\u0108", wE = "\u0109", CE = "\u2230", AE = "\u2A4C", SE = "\u2A50", EE = "\u010A", TE = "\u010B", DE = "\xB8", ME = "\xB8", OE = "\u29B2", RE = "\xA2", LE = "\xB7", IE = "\xB7", NE = "\u{1D520}", PE = "\u212D", BE = "\u0427", FE = "\u0447", qE = "\u2713", $E = "\u2713", HE = "\u03A7", zE = "\u03C7", VE = "\u02C6", UE = "\u2257", WE = "\u21BA", jE = "\u21BB", GE = "\u229B", KE = "\u229A", YE = "\u229D", ZE = "\u2299", JE = "\xAE", XE = "\u24C8", QE = "\u2296", eT = "\u2295", tT = "\u2297", nT = "\u25CB", rT = "\u29C3", iT = "\u2257", oT = "\u2A10", sT = "\u2AEF", lT = "\u29C2", aT = "\u2232", cT = "\u201D", uT = "\u2019", hT = "\u2663", fT = "\u2663", dT = ":", pT = "\u2237", mT = "\u2A74", gT = "\u2254", yT = "\u2254", bT = ",", vT = "@", xT = "\u2201", _T = "\u2218", kT = "\u2201", wT = "\u2102", CT = "\u2245", AT = "\u2A6D", ST = "\u2261", ET = "\u222E", TT = "\u222F", DT = "\u222E", MT = "\u{1D554}", OT = "\u2102", RT = "\u2210", LT = "\u2210", IT = "\xA9", NT = "\xA9", PT = "\u2117", BT = "\u2233", FT = "\u21B5", qT = "\u2717", $T = "\u2A2F", HT = "\u{1D49E}", zT = "\u{1D4B8}", VT = "\u2ACF", UT = "\u2AD1", WT = "\u2AD0", jT = "\u2AD2", GT = "\u22EF", KT = "\u2938", YT = "\u2935", ZT = "\u22DE", JT = "\u22DF", XT = "\u21B6", QT = "\u293D", eD = "\u2A48", tD = "\u2A46", nD = "\u224D", rD = "\u222A", iD = "\u22D3", oD = "\u2A4A", sD = "\u228D", lD = "\u2A45", aD = "\u222A\uFE00", cD = "\u21B7", uD = "\u293C", hD = "\u22DE", fD = "\u22DF", dD = "\u22CE", pD = "\u22CF", mD = "\xA4", gD = "\u21B6", yD = "\u21B7", bD = "\u22CE", vD = "\u22CF", xD = "\u2232", _D = "\u2231", kD = "\u232D", wD = "\u2020", CD = "\u2021", AD = "\u2138", SD = "\u2193", ED = "\u21A1", TD = "\u21D3", DD = "\u2010", MD = "\u2AE4", OD = "\u22A3", RD = "\u290F", LD = "\u02DD", ID = "\u010E", ND = "\u010F", PD = "\u0414", BD = "\u0434", FD = "\u2021", qD = "\u21CA", $D = "\u2145", HD = "\u2146", zD = "\u2911", VD = "\u2A77", UD = "\xB0", WD = "\u2207", jD = "\u0394", GD = "\u03B4", KD = "\u29B1", YD = "\u297F", ZD = "\u{1D507}", JD = "\u{1D521}", XD = "\u2965", QD = "\u21C3", eM = "\u21C2", tM = "\xB4", nM = "\u02D9", rM = "\u02DD", iM = "`", oM = "\u02DC", sM = "\u22C4", lM = "\u22C4", aM = "\u22C4", cM = "\u2666", uM = "\u2666", hM = "\xA8", fM = "\u2146", dM = "\u03DD", pM = "\u22F2", mM = "\xF7", gM = "\xF7", yM = "\u22C7", bM = "\u22C7", vM = "\u0402", xM = "\u0452", _M = "\u231E", kM = "\u230D", wM = "$", CM = "\u{1D53B}", AM = "\u{1D555}", SM = "\xA8", EM = "\u02D9", TM = "\u20DC", DM = "\u2250", MM = "\u2251", OM = "\u2250", RM = "\u2238", LM = "\u2214", IM = "\u22A1", NM = "\u2306", PM = "\u222F", BM = "\xA8", FM = "\u21D3", qM = "\u21D0", $M = "\u21D4", HM = "\u2AE4", zM = "\u27F8", VM = "\u27FA", UM = "\u27F9", WM = "\u21D2", jM = "\u22A8", GM = "\u21D1", KM = "\u21D5", YM = "\u2225", ZM = "\u2913", JM = "\u2193", XM = "\u2193", QM = "\u21D3", eO = "\u21F5", tO = "\u0311", nO = "\u21CA", rO = "\u21C3", iO = "\u21C2", oO = "\u2950", sO = "\u295E", lO = "\u2956", aO = "\u21BD", cO = "\u295F", uO = "\u2957", hO = "\u21C1", fO = "\u21A7", dO = "\u22A4", pO = "\u2910", mO = "\u231F", gO = "\u230C", yO = "\u{1D49F}", bO = "\u{1D4B9}", vO = "\u0405", xO = "\u0455", _O = "\u29F6", kO = "\u0110", wO = "\u0111", CO = "\u22F1", AO = "\u25BF", SO = "\u25BE", EO = "\u21F5", TO = "\u296F", DO = "\u29A6", MO = "\u040F", OO = "\u045F", RO = "\u27FF", LO = "\xC9", IO = "\xE9", NO = "\u2A6E", PO = "\u011A", BO = "\u011B", FO = "\xCA", qO = "\xEA", $O = "\u2256", HO = "\u2255", zO = "\u042D", VO = "\u044D", UO = "\u2A77", WO = "\u0116", jO = "\u0117", GO = "\u2251", KO = "\u2147", YO = "\u2252", ZO = "\u{1D508}", JO = "\u{1D522}", XO = "\u2A9A", QO = "\xC8", eR = "\xE8", tR = "\u2A96", nR = "\u2A98", rR = "\u2A99", iR = "\u2208", oR = "\u23E7", sR = "\u2113", lR = "\u2A95", aR = "\u2A97", cR = "\u0112", uR = "\u0113", hR = "\u2205", fR = "\u2205", dR = "\u25FB", pR = "\u2205", mR = "\u25AB", gR = "\u2004", yR = "\u2005", bR = "\u2003", vR = "\u014A", xR = "\u014B", _R = "\u2002", kR = "\u0118", wR = "\u0119", CR = "\u{1D53C}", AR = "\u{1D556}", SR = "\u22D5", ER = "\u29E3", TR = "\u2A71", DR = "\u03B5", MR = "\u0395", OR = "\u03B5", RR = "\u03F5", LR = "\u2256", IR = "\u2255", NR = "\u2242", PR = "\u2A96", BR = "\u2A95", FR = "\u2A75", qR = "=", $R = "\u2242", HR = "\u225F", zR = "\u21CC", VR = "\u2261", UR = "\u2A78", WR = "\u29E5", jR = "\u2971", GR = "\u2253", KR = "\u212F", YR = "\u2130", ZR = "\u2250", JR = "\u2A73", XR = "\u2242", QR = "\u0397", eL = "\u03B7", tL = "\xD0", nL = "\xF0", rL = "\xCB", iL = "\xEB", oL = "\u20AC", sL = "!", lL = "\u2203", aL = "\u2203", cL = "\u2130", uL = "\u2147", hL = "\u2147", fL = "\u2252", dL = "\u0424", pL = "\u0444", mL = "\u2640", gL = "\uFB03", yL = "\uFB00", bL = "\uFB04", vL = "\u{1D509}", xL = "\u{1D523}", _L = "\uFB01", kL = "\u25FC", wL = "\u25AA", CL = "fj", AL = "\u266D", SL = "\uFB02", EL = "\u25B1", TL = "\u0192", DL = "\u{1D53D}", ML = "\u{1D557}", OL = "\u2200", RL = "\u2200", LL = "\u22D4", IL = "\u2AD9", NL = "\u2131", PL = "\u2A0D", BL = "\xBD", FL = "\u2153", qL = "\xBC", $L = "\u2155", HL = "\u2159", zL = "\u215B", VL = "\u2154", UL = "\u2156", WL = "\xBE", jL = "\u2157", GL = "\u215C", KL = "\u2158", YL = "\u215A", ZL = "\u215D", JL = "\u215E", XL = "\u2044", QL = "\u2322", eI = "\u{1D4BB}", tI = "\u2131", nI = "\u01F5", rI = "\u0393", iI = "\u03B3", oI = "\u03DC", sI = "\u03DD", lI = "\u2A86", aI = "\u011E", cI = "\u011F", uI = "\u0122", hI = "\u011C", fI = "\u011D", dI = "\u0413", pI = "\u0433", mI = "\u0120", gI = "\u0121", yI = "\u2265", bI = "\u2267", vI = "\u2A8C", xI = "\u22DB", _I = "\u2265", kI = "\u2267", wI = "\u2A7E", CI = "\u2AA9", AI = "\u2A7E", SI = "\u2A80", EI = "\u2A82", TI = "\u2A84", DI = "\u22DB\uFE00", MI = "\u2A94", OI = "\u{1D50A}", RI = "\u{1D524}", LI = "\u226B", II = "\u22D9", NI = "\u22D9", PI = "\u2137", BI = "\u0403", FI = "\u0453", qI = "\u2AA5", $I = "\u2277", HI = "\u2A92", zI = "\u2AA4", VI = "\u2A8A", UI = "\u2A8A", WI = "\u2A88", jI = "\u2269", GI = "\u2A88", KI = "\u2269", YI = "\u22E7", ZI = "\u{1D53E}", JI = "\u{1D558}", XI = "`", QI = "\u2265", eN = "\u22DB", tN = "\u2267", nN = "\u2AA2", rN = "\u2277", iN = "\u2A7E", oN = "\u2273", sN = "\u{1D4A2}", lN = "\u210A", aN = "\u2273", cN = "\u2A8E", uN = "\u2A90", hN = "\u2AA7", fN = "\u2A7A", dN = ">", pN = ">", mN = "\u226B", gN = "\u22D7", yN = "\u2995", bN = "\u2A7C", vN = "\u2A86", xN = "\u2978", _N = "\u22D7", kN = "\u22DB", wN = "\u2A8C", CN = "\u2277", AN = "\u2273", SN = "\u2269\uFE00", EN = "\u2269\uFE00", TN = "\u02C7", DN = "\u200A", MN = "\xBD", ON = "\u210B", RN = "\u042A", LN = "\u044A", IN = "\u2948", NN = "\u2194", PN = "\u21D4", BN = "\u21AD", FN = "^", qN = "\u210F", $N = "\u0124", HN = "\u0125", zN = "\u2665", VN = "\u2665", UN = "\u2026", WN = "\u22B9", jN = "\u{1D525}", GN = "\u210C", KN = "\u210B", YN = "\u2925", ZN = "\u2926", JN = "\u21FF", XN = "\u223B", QN = "\u21A9", eP = "\u21AA", tP = "\u{1D559}", nP = "\u210D", rP = "\u2015", iP = "\u2500", oP = "\u{1D4BD}", sP = "\u210B", lP = "\u210F", aP = "\u0126", cP = "\u0127", uP = "\u224E", hP = "\u224F", fP = "\u2043", dP = "\u2010", pP = "\xCD", mP = "\xED", gP = "\u2063", yP = "\xCE", bP = "\xEE", vP = "\u0418", xP = "\u0438", _P = "\u0130", kP = "\u0415", wP = "\u0435", CP = "\xA1", AP = "\u21D4", SP = "\u{1D526}", EP = "\u2111", TP = "\xCC", DP = "\xEC", MP = "\u2148", OP = "\u2A0C", RP = "\u222D", LP = "\u29DC", IP = "\u2129", NP = "\u0132", PP = "\u0133", BP = "\u012A", FP = "\u012B", qP = "\u2111", $P = "\u2148", HP = "\u2110", zP = "\u2111", VP = "\u0131", UP = "\u2111", WP = "\u22B7", jP = "\u01B5", GP = "\u21D2", KP = "\u2105", YP = "\u221E", ZP = "\u29DD", JP = "\u0131", XP = "\u22BA", QP = "\u222B", e3 = "\u222C", t3 = "\u2124", n3 = "\u222B", r3 = "\u22BA", i3 = "\u22C2", o3 = "\u2A17", s3 = "\u2A3C", l3 = "\u2063", a3 = "\u2062", c3 = "\u0401", u3 = "\u0451", h3 = "\u012E", f3 = "\u012F", d3 = "\u{1D540}", p3 = "\u{1D55A}", m3 = "\u0399", g3 = "\u03B9", y3 = "\u2A3C", b3 = "\xBF", v3 = "\u{1D4BE}", x3 = "\u2110", _3 = "\u2208", k3 = "\u22F5", w3 = "\u22F9", C3 = "\u22F4", A3 = "\u22F3", S3 = "\u2208", E3 = "\u2062", T3 = "\u0128", D3 = "\u0129", M3 = "\u0406", O3 = "\u0456", R3 = "\xCF", L3 = "\xEF", I3 = "\u0134", N3 = "\u0135", P3 = "\u0419", B3 = "\u0439", F3 = "\u{1D50D}", q3 = "\u{1D527}", $3 = "\u0237", H3 = "\u{1D541}", z3 = "\u{1D55B}", V3 = "\u{1D4A5}", U3 = "\u{1D4BF}", W3 = "\u0408", j3 = "\u0458", G3 = "\u0404", K3 = "\u0454", Y3 = "\u039A", Z3 = "\u03BA", J3 = "\u03F0", X3 = "\u0136", Q3 = "\u0137", eB = "\u041A", tB = "\u043A", nB = "\u{1D50E}", rB = "\u{1D528}", iB = "\u0138", oB = "\u0425", sB = "\u0445", lB = "\u040C", aB = "\u045C", cB = "\u{1D542}", uB = "\u{1D55C}", hB = "\u{1D4A6}", fB = "\u{1D4C0}", dB = "\u21DA", pB = "\u0139", mB = "\u013A", gB = "\u29B4", yB = "\u2112", bB = "\u039B", vB = "\u03BB", xB = "\u27E8", _B = "\u27EA", kB = "\u2991", wB = "\u27E8", CB = "\u2A85", AB = "\u2112", SB = "\xAB", EB = "\u21E4", TB = "\u291F", DB = "\u2190", MB = "\u219E", OB = "\u21D0", RB = "\u291D", LB = "\u21A9", IB = "\u21AB", NB = "\u2939", PB = "\u2973", BB = "\u21A2", FB = "\u2919", qB = "\u291B", $B = "\u2AAB", HB = "\u2AAD", zB = "\u2AAD\uFE00", VB = "\u290C", UB = "\u290E", WB = "\u2772", jB = "{", GB = "[", KB = "\u298B", YB = "\u298F", ZB = "\u298D", JB = "\u013D", XB = "\u013E", QB = "\u013B", eF = "\u013C", tF = "\u2308", nF = "{", rF = "\u041B", iF = "\u043B", oF = "\u2936", sF = "\u201C", lF = "\u201E", aF = "\u2967", cF = "\u294B", uF = "\u21B2", hF = "\u2264", fF = "\u2266", dF = "\u27E8", pF = "\u21E4", mF = "\u2190", gF = "\u2190", yF = "\u21D0", bF = "\u21C6", vF = "\u21A2", xF = "\u2308", _F = "\u27E6", kF = "\u2961", wF = "\u2959", CF = "\u21C3", AF = "\u230A", SF = "\u21BD", EF = "\u21BC", TF = "\u21C7", DF = "\u2194", MF = "\u2194", OF = "\u21D4", RF = "\u21C6", LF = "\u21CB", IF = "\u21AD", NF = "\u294E", PF = "\u21A4", BF = "\u22A3", FF = "\u295A", qF = "\u22CB", $F = "\u29CF", HF = "\u22B2", zF = "\u22B4", VF = "\u2951", UF = "\u2960", WF = "\u2958", jF = "\u21BF", GF = "\u2952", KF = "\u21BC", YF = "\u2A8B", ZF = "\u22DA", JF = "\u2264", XF = "\u2266", QF = "\u2A7D", e4 = "\u2AA8", t4 = "\u2A7D", n4 = "\u2A7F", r4 = "\u2A81", i4 = "\u2A83", o4 = "\u22DA\uFE00", s4 = "\u2A93", l4 = "\u2A85", a4 = "\u22D6", c4 = "\u22DA", u4 = "\u2A8B", h4 = "\u22DA", f4 = "\u2266", d4 = "\u2276", p4 = "\u2276", m4 = "\u2AA1", g4 = "\u2272", y4 = "\u2A7D", b4 = "\u2272", v4 = "\u297C", x4 = "\u230A", _4 = "\u{1D50F}", k4 = "\u{1D529}", w4 = "\u2276", C4 = "\u2A91", A4 = "\u2962", S4 = "\u21BD", E4 = "\u21BC", T4 = "\u296A", D4 = "\u2584", M4 = "\u0409", O4 = "\u0459", R4 = "\u21C7", L4 = "\u226A", I4 = "\u22D8", N4 = "\u231E", P4 = "\u21DA", B4 = "\u296B", F4 = "\u25FA", q4 = "\u013F", $4 = "\u0140", H4 = "\u23B0", z4 = "\u23B0", V4 = "\u2A89", U4 = "\u2A89", W4 = "\u2A87", j4 = "\u2268", G4 = "\u2A87", K4 = "\u2268", Y4 = "\u22E6", Z4 = "\u27EC", J4 = "\u21FD", X4 = "\u27E6", Q4 = "\u27F5", eq = "\u27F5", tq = "\u27F8", nq = "\u27F7", rq = "\u27F7", iq = "\u27FA", oq = "\u27FC", sq = "\u27F6", lq = "\u27F6", aq = "\u27F9", cq = "\u21AB", uq = "\u21AC", hq = "\u2985", fq = "\u{1D543}", dq = "\u{1D55D}", pq = "\u2A2D", mq = "\u2A34", gq = "\u2217", yq = "_", bq = "\u2199", vq = "\u2198", xq = "\u25CA", _q = "\u25CA", kq = "\u29EB", wq = "(", Cq = "\u2993", Aq = "\u21C6", Sq = "\u231F", Eq = "\u21CB", Tq = "\u296D", Dq = "\u200E", Mq = "\u22BF", Oq = "\u2039", Rq = "\u{1D4C1}", Lq = "\u2112", Iq = "\u21B0", Nq = "\u21B0", Pq = "\u2272", Bq = "\u2A8D", Fq = "\u2A8F", qq = "[", $q = "\u2018", Hq = "\u201A", zq = "\u0141", Vq = "\u0142", Uq = "\u2AA6", Wq = "\u2A79", jq = "<", Gq = "<", Kq = "\u226A", Yq = "\u22D6", Zq = "\u22CB", Jq = "\u22C9", Xq = "\u2976", Qq = "\u2A7B", e5 = "\u25C3", t5 = "\u22B4", n5 = "\u25C2", r5 = "\u2996", i5 = "\u294A", o5 = "\u2966", s5 = "\u2268\uFE00", l5 = "\u2268\uFE00", a5 = "\xAF", c5 = "\u2642", u5 = "\u2720", h5 = "\u2720", f5 = "\u21A6", d5 = "\u21A6", p5 = "\u21A7", m5 = "\u21A4", g5 = "\u21A5", y5 = "\u25AE", b5 = "\u2A29", v5 = "\u041C", x5 = "\u043C", _5 = "\u2014", k5 = "\u223A", w5 = "\u2221", C5 = "\u205F", A5 = "\u2133", S5 = "\u{1D510}", E5 = "\u{1D52A}", T5 = "\u2127", D5 = "\xB5", M5 = "*", O5 = "\u2AF0", R5 = "\u2223", L5 = "\xB7", I5 = "\u229F", N5 = "\u2212", P5 = "\u2238", B5 = "\u2A2A", F5 = "\u2213", q5 = "\u2ADB", $5 = "\u2026", H5 = "\u2213", z5 = "\u22A7", V5 = "\u{1D544}", U5 = "\u{1D55E}", W5 = "\u2213", j5 = "\u{1D4C2}", G5 = "\u2133", K5 = "\u223E", Y5 = "\u039C", Z5 = "\u03BC", J5 = "\u22B8", X5 = "\u22B8", Q5 = "\u2207", e$ = "\u0143", t$ = "\u0144", n$ = "\u2220\u20D2", r$ = "\u2249", i$ = "\u2A70\u0338", o$ = "\u224B\u0338", s$ = "\u0149", l$ = "\u2249", a$ = "\u266E", c$ = "\u2115", u$ = "\u266E", h$ = "\xA0", f$ = "\u224E\u0338", d$ = "\u224F\u0338", p$ = "\u2A43", m$ = "\u0147", g$ = "\u0148", y$ = "\u0145", b$ = "\u0146", v$ = "\u2247", x$ = "\u2A6D\u0338", _$ = "\u2A42", k$ = "\u041D", w$ = "\u043D", C$ = "\u2013", A$ = "\u2924", S$ = "\u2197", E$ = "\u21D7", T$ = "\u2197", D$ = "\u2260", M$ = "\u2250\u0338", O$ = "\u200B", R$ = "\u200B", L$ = "\u200B", I$ = "\u200B", N$ = "\u2262", P$ = "\u2928", B$ = "\u2242\u0338", F$ = "\u226B", q$ = "\u226A", $$ = `
`, H$ = "\u2204", z$ = "\u2204", V$ = "\u{1D511}", U$ = "\u{1D52B}", W$ = "\u2267\u0338", j$ = "\u2271", G$ = "\u2271", K$ = "\u2267\u0338", Y$ = "\u2A7E\u0338", Z$ = "\u2A7E\u0338", J$ = "\u22D9\u0338", X$ = "\u2275", Q$ = "\u226B\u20D2", e6 = "\u226F", t6 = "\u226F", n6 = "\u226B\u0338", r6 = "\u21AE", i6 = "\u21CE", o6 = "\u2AF2", s6 = "\u220B", l6 = "\u22FC", a6 = "\u22FA", c6 = "\u220B", u6 = "\u040A", h6 = "\u045A", f6 = "\u219A", d6 = "\u21CD", p6 = "\u2025", m6 = "\u2266\u0338", g6 = "\u2270", y6 = "\u219A", b6 = "\u21CD", v6 = "\u21AE", x6 = "\u21CE", _6 = "\u2270", k6 = "\u2266\u0338", w6 = "\u2A7D\u0338", C6 = "\u2A7D\u0338", A6 = "\u226E", S6 = "\u22D8\u0338", E6 = "\u2274", T6 = "\u226A\u20D2", D6 = "\u226E", M6 = "\u22EA", O6 = "\u22EC", R6 = "\u226A\u0338", L6 = "\u2224", I6 = "\u2060", N6 = "\xA0", P6 = "\u{1D55F}", B6 = "\u2115", F6 = "\u2AEC", q6 = "\xAC", $6 = "\u2262", H6 = "\u226D", z6 = "\u2226", V6 = "\u2209", U6 = "\u2260", W6 = "\u2242\u0338", j6 = "\u2204", G6 = "\u226F", K6 = "\u2271", Y6 = "\u2267\u0338", Z6 = "\u226B\u0338", J6 = "\u2279", X6 = "\u2A7E\u0338", Q6 = "\u2275", e8 = "\u224E\u0338", t8 = "\u224F\u0338", n8 = "\u2209", r8 = "\u22F5\u0338", i8 = "\u22F9\u0338", o8 = "\u2209", s8 = "\u22F7", l8 = "\u22F6", a8 = "\u29CF\u0338", c8 = "\u22EA", u8 = "\u22EC", h8 = "\u226E", f8 = "\u2270", d8 = "\u2278", p8 = "\u226A\u0338", m8 = "\u2A7D\u0338", g8 = "\u2274", y8 = "\u2AA2\u0338", b8 = "\u2AA1\u0338", v8 = "\u220C", x8 = "\u220C", _8 = "\u22FE", k8 = "\u22FD", w8 = "\u2280", C8 = "\u2AAF\u0338", A8 = "\u22E0", S8 = "\u220C", E8 = "\u29D0\u0338", T8 = "\u22EB", D8 = "\u22ED", M8 = "\u228F\u0338", O8 = "\u22E2", R8 = "\u2290\u0338", L8 = "\u22E3", I8 = "\u2282\u20D2", N8 = "\u2288", P8 = "\u2281", B8 = "\u2AB0\u0338", F8 = "\u22E1", q8 = "\u227F\u0338", $8 = "\u2283\u20D2", H8 = "\u2289", z8 = "\u2241", V8 = "\u2244", U8 = "\u2247", W8 = "\u2249", j8 = "\u2224", G8 = "\u2226", K8 = "\u2226", Y8 = "\u2AFD\u20E5", Z8 = "\u2202\u0338", J8 = "\u2A14", X8 = "\u2280", Q8 = "\u22E0", e9 = "\u2280", t9 = "\u2AAF\u0338", n9 = "\u2AAF\u0338", r9 = "\u2933\u0338", i9 = "\u219B", o9 = "\u21CF", s9 = "\u219D\u0338", l9 = "\u219B", a9 = "\u21CF", c9 = "\u22EB", u9 = "\u22ED", h9 = "\u2281", f9 = "\u22E1", d9 = "\u2AB0\u0338", p9 = "\u{1D4A9}", m9 = "\u{1D4C3}", g9 = "\u2224", y9 = "\u2226", b9 = "\u2241", v9 = "\u2244", x9 = "\u2244", _9 = "\u2224", k9 = "\u2226", w9 = "\u22E2", C9 = "\u22E3", A9 = "\u2284", S9 = "\u2AC5\u0338", E9 = "\u2288", T9 = "\u2282\u20D2", D9 = "\u2288", M9 = "\u2AC5\u0338", O9 = "\u2281", R9 = "\u2AB0\u0338", L9 = "\u2285", I9 = "\u2AC6\u0338", N9 = "\u2289", P9 = "\u2283\u20D2", B9 = "\u2289", F9 = "\u2AC6\u0338", q9 = "\u2279", $9 = "\xD1", H9 = "\xF1", z9 = "\u2278", V9 = "\u22EA", U9 = "\u22EC", W9 = "\u22EB", j9 = "\u22ED", G9 = "\u039D", K9 = "\u03BD", Y9 = "#", Z9 = "\u2116", J9 = "\u2007", X9 = "\u224D\u20D2", Q9 = "\u22AC", eH = "\u22AD", tH = "\u22AE", nH = "\u22AF", rH = "\u2265\u20D2", iH = ">\u20D2", oH = "\u2904", sH = "\u29DE", lH = "\u2902", aH = "\u2264\u20D2", cH = "<\u20D2", uH = "\u22B4\u20D2", hH = "\u2903", fH = "\u22B5\u20D2", dH = "\u223C\u20D2", pH = "\u2923", mH = "\u2196", gH = "\u21D6", yH = "\u2196", bH = "\u2927", vH = "\xD3", xH = "\xF3", _H = "\u229B", kH = "\xD4", wH = "\xF4", CH = "\u229A", AH = "\u041E", SH = "\u043E", EH = "\u229D", TH = "\u0150", DH = "\u0151", MH = "\u2A38", OH = "\u2299", RH = "\u29BC", LH = "\u0152", IH = "\u0153", NH = "\u29BF", PH = "\u{1D512}", BH = "\u{1D52C}", FH = "\u02DB", qH = "\xD2", $H = "\xF2", HH = "\u29C1", zH = "\u29B5", VH = "\u03A9", UH = "\u222E", WH = "\u21BA", jH = "\u29BE", GH = "\u29BB", KH = "\u203E", YH = "\u29C0", ZH = "\u014C", JH = "\u014D", XH = "\u03A9", QH = "\u03C9", ez = "\u039F", tz = "\u03BF", nz = "\u29B6", rz = "\u2296", iz = "\u{1D546}", oz = "\u{1D560}", sz = "\u29B7", lz = "\u201C", az = "\u2018", cz = "\u29B9", uz = "\u2295", hz = "\u21BB", fz = "\u2A54", dz = "\u2228", pz = "\u2A5D", mz = "\u2134", gz = "\u2134", yz = "\xAA", bz = "\xBA", vz = "\u22B6", xz = "\u2A56", _z = "\u2A57", kz = "\u2A5B", wz = "\u24C8", Cz = "\u{1D4AA}", Az = "\u2134", Sz = "\xD8", Ez = "\xF8", Tz = "\u2298", Dz = "\xD5", Mz = "\xF5", Oz = "\u2A36", Rz = "\u2A37", Lz = "\u2297", Iz = "\xD6", Nz = "\xF6", Pz = "\u233D", Bz = "\u203E", Fz = "\u23DE", qz = "\u23B4", $z = "\u23DC", Hz = "\xB6", zz = "\u2225", Vz = "\u2225", Uz = "\u2AF3", Wz = "\u2AFD", jz = "\u2202", Gz = "\u2202", Kz = "\u041F", Yz = "\u043F", Zz = "%", Jz = ".", Xz = "\u2030", Qz = "\u22A5", e7 = "\u2031", t7 = "\u{1D513}", n7 = "\u{1D52D}", r7 = "\u03A6", i7 = "\u03C6", o7 = "\u03D5", s7 = "\u2133", l7 = "\u260E", a7 = "\u03A0", c7 = "\u03C0", u7 = "\u22D4", h7 = "\u03D6", f7 = "\u210F", d7 = "\u210E", p7 = "\u210F", m7 = "\u2A23", g7 = "\u229E", y7 = "\u2A22", b7 = "+", v7 = "\u2214", x7 = "\u2A25", _7 = "\u2A72", k7 = "\xB1", w7 = "\xB1", C7 = "\u2A26", A7 = "\u2A27", S7 = "\xB1", E7 = "\u210C", T7 = "\u2A15", D7 = "\u{1D561}", M7 = "\u2119", O7 = "\xA3", R7 = "\u2AB7", L7 = "\u2ABB", I7 = "\u227A", N7 = "\u227C", P7 = "\u2AB7", B7 = "\u227A", F7 = "\u227C", q7 = "\u227A", $7 = "\u2AAF", H7 = "\u227C", z7 = "\u227E", V7 = "\u2AAF", U7 = "\u2AB9", W7 = "\u2AB5", j7 = "\u22E8", G7 = "\u2AAF", K7 = "\u2AB3", Y7 = "\u227E", Z7 = "\u2032", J7 = "\u2033", X7 = "\u2119", Q7 = "\u2AB9", eV = "\u2AB5", tV = "\u22E8", nV = "\u220F", rV = "\u220F", iV = "\u232E", oV = "\u2312", sV = "\u2313", lV = "\u221D", aV = "\u221D", cV = "\u2237", uV = "\u221D", hV = "\u227E", fV = "\u22B0", dV = "\u{1D4AB}", pV = "\u{1D4C5}", mV = "\u03A8", gV = "\u03C8", yV = "\u2008", bV = "\u{1D514}", vV = "\u{1D52E}", xV = "\u2A0C", _V = "\u{1D562}", kV = "\u211A", wV = "\u2057", CV = "\u{1D4AC}", AV = "\u{1D4C6}", SV = "\u210D", EV = "\u2A16", TV = "?", DV = "\u225F", MV = '"', OV = '"', RV = "\u21DB", LV = "\u223D\u0331", IV = "\u0154", NV = "\u0155", PV = "\u221A", BV = "\u29B3", FV = "\u27E9", qV = "\u27EB", $V = "\u2992", HV = "\u29A5", zV = "\u27E9", VV = "\xBB", UV = "\u2975", WV = "\u21E5", jV = "\u2920", GV = "\u2933", KV = "\u2192", YV = "\u21A0", ZV = "\u21D2", JV = "\u291E", XV = "\u21AA", QV = "\u21AC", eU = "\u2945", tU = "\u2974", nU = "\u2916", rU = "\u21A3", iU = "\u219D", oU = "\u291A", sU = "\u291C", lU = "\u2236", aU = "\u211A", cU = "\u290D", uU = "\u290F", hU = "\u2910", fU = "\u2773", dU = "}", pU = "]", mU = "\u298C", gU = "\u298E", yU = "\u2990", bU = "\u0158", vU = "\u0159", xU = "\u0156", _U = "\u0157", kU = "\u2309", wU = "}", CU = "\u0420", AU = "\u0440", SU = "\u2937", EU = "\u2969", TU = "\u201D", DU = "\u201D", MU = "\u21B3", OU = "\u211C", RU = "\u211B", LU = "\u211C", IU = "\u211D", NU = "\u211C", PU = "\u25AD", BU = "\xAE", FU = "\xAE", qU = "\u220B", $U = "\u21CB", HU = "\u296F", zU = "\u297D", VU = "\u230B", UU = "\u{1D52F}", WU = "\u211C", jU = "\u2964", GU = "\u21C1", KU = "\u21C0", YU = "\u296C", ZU = "\u03A1", JU = "\u03C1", XU = "\u03F1", QU = "\u27E9", eW = "\u21E5", tW = "\u2192", nW = "\u2192", rW = "\u21D2", iW = "\u21C4", oW = "\u21A3", sW = "\u2309", lW = "\u27E7", aW = "\u295D", cW = "\u2955", uW = "\u21C2", hW = "\u230B", fW = "\u21C1", dW = "\u21C0", pW = "\u21C4", mW = "\u21CC", gW = "\u21C9", yW = "\u219D", bW = "\u21A6", vW = "\u22A2", xW = "\u295B", _W = "\u22CC", kW = "\u29D0", wW = "\u22B3", CW = "\u22B5", AW = "\u294F", SW = "\u295C", EW = "\u2954", TW = "\u21BE", DW = "\u2953", MW = "\u21C0", OW = "\u02DA", RW = "\u2253", LW = "\u21C4", IW = "\u21CC", NW = "\u200F", PW = "\u23B1", BW = "\u23B1", FW = "\u2AEE", qW = "\u27ED", $W = "\u21FE", HW = "\u27E7", zW = "\u2986", VW = "\u{1D563}", UW = "\u211D", WW = "\u2A2E", jW = "\u2A35", GW = "\u2970", KW = ")", YW = "\u2994", ZW = "\u2A12", JW = "\u21C9", XW = "\u21DB", QW = "\u203A", ej = "\u{1D4C7}", tj = "\u211B", nj = "\u21B1", rj = "\u21B1", ij = "]", oj = "\u2019", sj = "\u2019", lj = "\u22CC", aj = "\u22CA", cj = "\u25B9", uj = "\u22B5", hj = "\u25B8", fj = "\u29CE", dj = "\u29F4", pj = "\u2968", mj = "\u211E", gj = "\u015A", yj = "\u015B", bj = "\u201A", vj = "\u2AB8", xj = "\u0160", _j = "\u0161", kj = "\u2ABC", wj = "\u227B", Cj = "\u227D", Aj = "\u2AB0", Sj = "\u2AB4", Ej = "\u015E", Tj = "\u015F", Dj = "\u015C", Mj = "\u015D", Oj = "\u2ABA", Rj = "\u2AB6", Lj = "\u22E9", Ij = "\u2A13", Nj = "\u227F", Pj = "\u0421", Bj = "\u0441", Fj = "\u22A1", qj = "\u22C5", $j = "\u2A66", Hj = "\u2925", zj = "\u2198", Vj = "\u21D8", Uj = "\u2198", Wj = "\xA7", jj = ";", Gj = "\u2929", Kj = "\u2216", Yj = "\u2216", Zj = "\u2736", Jj = "\u{1D516}", Xj = "\u{1D530}", Qj = "\u2322", eG = "\u266F", tG = "\u0429", nG = "\u0449", rG = "\u0428", iG = "\u0448", oG = "\u2193", sG = "\u2190", lG = "\u2223", aG = "\u2225", cG = "\u2192", uG = "\u2191", hG = "\xAD", fG = "\u03A3", dG = "\u03C3", pG = "\u03C2", mG = "\u03C2", gG = "\u223C", yG = "\u2A6A", bG = "\u2243", vG = "\u2243", xG = "\u2A9E", _G = "\u2AA0", kG = "\u2A9D", wG = "\u2A9F", CG = "\u2246", AG = "\u2A24", SG = "\u2972", EG = "\u2190", TG = "\u2218", DG = "\u2216", MG = "\u2A33", OG = "\u29E4", RG = "\u2223", LG = "\u2323", IG = "\u2AAA", NG = "\u2AAC", PG = "\u2AAC\uFE00", BG = "\u042C", FG = "\u044C", qG = "\u233F", $G = "\u29C4", HG = "/", zG = "\u{1D54A}", VG = "\u{1D564}", UG = "\u2660", WG = "\u2660", jG = "\u2225", GG = "\u2293", KG = "\u2293\uFE00", YG = "\u2294", ZG = "\u2294\uFE00", JG = "\u221A", XG = "\u228F", QG = "\u2291", eK = "\u228F", tK = "\u2291", nK = "\u2290", rK = "\u2292", iK = "\u2290", oK = "\u2292", sK = "\u25A1", lK = "\u25A1", aK = "\u2293", cK = "\u228F", uK = "\u2291", hK = "\u2290", fK = "\u2292", dK = "\u2294", pK = "\u25AA", mK = "\u25A1", gK = "\u25AA", yK = "\u2192", bK = "\u{1D4AE}", vK = "\u{1D4C8}", xK = "\u2216", _K = "\u2323", kK = "\u22C6", wK = "\u22C6", CK = "\u2606", AK = "\u2605", SK = "\u03F5", EK = "\u03D5", TK = "\xAF", DK = "\u2282", MK = "\u22D0", OK = "\u2ABD", RK = "\u2AC5", LK = "\u2286", IK = "\u2AC3", NK = "\u2AC1", PK = "\u2ACB", BK = "\u228A", FK = "\u2ABF", qK = "\u2979", $K = "\u2282", HK = "\u22D0", zK = "\u2286", VK = "\u2AC5", UK = "\u2286", WK = "\u228A", jK = "\u2ACB", GK = "\u2AC7", KK = "\u2AD5", YK = "\u2AD3", ZK = "\u2AB8", JK = "\u227B", XK = "\u227D", QK = "\u227B", eY = "\u2AB0", tY = "\u227D", nY = "\u227F", rY = "\u2AB0", iY = "\u2ABA", oY = "\u2AB6", sY = "\u22E9", lY = "\u227F", aY = "\u220B", cY = "\u2211", uY = "\u2211", hY = "\u266A", fY = "\xB9", dY = "\xB2", pY = "\xB3", mY = "\u2283", gY = "\u22D1", yY = "\u2ABE", bY = "\u2AD8", vY = "\u2AC6", xY = "\u2287", _Y = "\u2AC4", kY = "\u2283", wY = "\u2287", CY = "\u27C9", AY = "\u2AD7", SY = "\u297B", EY = "\u2AC2", TY = "\u2ACC", DY = "\u228B", MY = "\u2AC0", OY = "\u2283", RY = "\u22D1", LY = "\u2287", IY = "\u2AC6", NY = "\u228B", PY = "\u2ACC", BY = "\u2AC8", FY = "\u2AD4", qY = "\u2AD6", $Y = "\u2926", HY = "\u2199", zY = "\u21D9", VY = "\u2199", UY = "\u292A", WY = "\xDF", jY = "	", GY = "\u2316", KY = "\u03A4", YY = "\u03C4", ZY = "\u23B4", JY = "\u0164", XY = "\u0165", QY = "\u0162", eZ = "\u0163", tZ = "\u0422", nZ = "\u0442", rZ = "\u20DB", iZ = "\u2315", oZ = "\u{1D517}", sZ = "\u{1D531}", lZ = "\u2234", aZ = "\u2234", cZ = "\u2234", uZ = "\u0398", hZ = "\u03B8", fZ = "\u03D1", dZ = "\u03D1", pZ = "\u2248", mZ = "\u223C", gZ = "\u205F\u200A", yZ = "\u2009", bZ = "\u2009", vZ = "\u2248", xZ = "\u223C", _Z = "\xDE", kZ = "\xFE", wZ = "\u02DC", CZ = "\u223C", AZ = "\u2243", SZ = "\u2245", EZ = "\u2248", TZ = "\u2A31", DZ = "\u22A0", MZ = "\xD7", OZ = "\u2A30", RZ = "\u222D", LZ = "\u2928", IZ = "\u2336", NZ = "\u2AF1", PZ = "\u22A4", BZ = "\u{1D54B}", FZ = "\u{1D565}", qZ = "\u2ADA", $Z = "\u2929", HZ = "\u2034", zZ = "\u2122", VZ = "\u2122", UZ = "\u25B5", WZ = "\u25BF", jZ = "\u25C3", GZ = "\u22B4", KZ = "\u225C", YZ = "\u25B9", ZZ = "\u22B5", JZ = "\u25EC", XZ = "\u225C", QZ = "\u2A3A", eJ = "\u20DB", tJ = "\u2A39", nJ = "\u29CD", rJ = "\u2A3B", iJ = "\u23E2", oJ = "\u{1D4AF}", sJ = "\u{1D4C9}", lJ = "\u0426", aJ = "\u0446", cJ = "\u040B", uJ = "\u045B", hJ = "\u0166", fJ = "\u0167", dJ = "\u226C", pJ = "\u219E", mJ = "\u21A0", gJ = "\xDA", yJ = "\xFA", bJ = "\u2191", vJ = "\u219F", xJ = "\u21D1", _J = "\u2949", kJ = "\u040E", wJ = "\u045E", CJ = "\u016C", AJ = "\u016D", SJ = "\xDB", EJ = "\xFB", TJ = "\u0423", DJ = "\u0443", MJ = "\u21C5", OJ = "\u0170", RJ = "\u0171", LJ = "\u296E", IJ = "\u297E", NJ = "\u{1D518}", PJ = "\u{1D532}", BJ = "\xD9", FJ = "\xF9", qJ = "\u2963", $J = "\u21BF", HJ = "\u21BE", zJ = "\u2580", VJ = "\u231C", UJ = "\u231C", WJ = "\u230F", jJ = "\u25F8", GJ = "\u016A", KJ = "\u016B", YJ = "\xA8", ZJ = "_", JJ = "\u23DF", XJ = "\u23B5", QJ = "\u23DD", eX = "\u22C3", tX = "\u228E", nX = "\u0172", rX = "\u0173", iX = "\u{1D54C}", oX = "\u{1D566}", sX = "\u2912", lX = "\u2191", aX = "\u2191", cX = "\u21D1", uX = "\u21C5", hX = "\u2195", fX = "\u2195", dX = "\u21D5", pX = "\u296E", mX = "\u21BF", gX = "\u21BE", yX = "\u228E", bX = "\u2196", vX = "\u2197", xX = "\u03C5", _X = "\u03D2", kX = "\u03D2", wX = "\u03A5", CX = "\u03C5", AX = "\u21A5", SX = "\u22A5", EX = "\u21C8", TX = "\u231D", DX = "\u231D", MX = "\u230E", OX = "\u016E", RX = "\u016F", LX = "\u25F9", IX = "\u{1D4B0}", NX = "\u{1D4CA}", PX = "\u22F0", BX = "\u0168", FX = "\u0169", qX = "\u25B5", $X = "\u25B4", HX = "\u21C8", zX = "\xDC", VX = "\xFC", UX = "\u29A7", WX = "\u299C", jX = "\u03F5", GX = "\u03F0", KX = "\u2205", YX = "\u03D5", ZX = "\u03D6", JX = "\u221D", XX = "\u2195", QX = "\u21D5", eQ = "\u03F1", tQ = "\u03C2", nQ = "\u228A\uFE00", rQ = "\u2ACB\uFE00", iQ = "\u228B\uFE00", oQ = "\u2ACC\uFE00", sQ = "\u03D1", lQ = "\u22B2", aQ = "\u22B3", cQ = "\u2AE8", uQ = "\u2AEB", hQ = "\u2AE9", fQ = "\u0412", dQ = "\u0432", pQ = "\u22A2", mQ = "\u22A8", gQ = "\u22A9", yQ = "\u22AB", bQ = "\u2AE6", vQ = "\u22BB", xQ = "\u2228", _Q = "\u22C1", kQ = "\u225A", wQ = "\u22EE", CQ = "|", AQ = "\u2016", SQ = "|", EQ = "\u2016", TQ = "\u2223", DQ = "|", MQ = "\u2758", OQ = "\u2240", RQ = "\u200A", LQ = "\u{1D519}", IQ = "\u{1D533}", NQ = "\u22B2", PQ = "\u2282\u20D2", BQ = "\u2283\u20D2", FQ = "\u{1D54D}", qQ = "\u{1D567}", $Q = "\u221D", HQ = "\u22B3", zQ = "\u{1D4B1}", VQ = "\u{1D4CB}", UQ = "\u2ACB\uFE00", WQ = "\u228A\uFE00", jQ = "\u2ACC\uFE00", GQ = "\u228B\uFE00", KQ = "\u22AA", YQ = "\u299A", ZQ = "\u0174", JQ = "\u0175", XQ = "\u2A5F", QQ = "\u2227", eee = "\u22C0", tee = "\u2259", nee = "\u2118", ree = "\u{1D51A}", iee = "\u{1D534}", oee = "\u{1D54E}", see = "\u{1D568}", lee = "\u2118", aee = "\u2240", cee = "\u2240", uee = "\u{1D4B2}", hee = "\u{1D4CC}", fee = "\u22C2", dee = "\u25EF", pee = "\u22C3", mee = "\u25BD", gee = "\u{1D51B}", yee = "\u{1D535}", bee = "\u27F7", vee = "\u27FA", xee = "\u039E", _ee = "\u03BE", kee = "\u27F5", wee = "\u27F8", Cee = "\u27FC", Aee = "\u22FB", See = "\u2A00", Eee = "\u{1D54F}", Tee = "\u{1D569}", Dee = "\u2A01", Mee = "\u2A02", Oee = "\u27F6", Ree = "\u27F9", Lee = "\u{1D4B3}", Iee = "\u{1D4CD}", Nee = "\u2A06", Pee = "\u2A04", Bee = "\u25B3", Fee = "\u22C1", qee = "\u22C0", $ee = "\xDD", Hee = "\xFD", zee = "\u042F", Vee = "\u044F", Uee = "\u0176", Wee = "\u0177", jee = "\u042B", Gee = "\u044B", Kee = "\xA5", Yee = "\u{1D51C}", Zee = "\u{1D536}", Jee = "\u0407", Xee = "\u0457", Qee = "\u{1D550}", ete = "\u{1D56A}", tte = "\u{1D4B4}", nte = "\u{1D4CE}", rte = "\u042E", ite = "\u044E", ote = "\xFF", ste = "\u0178", lte = "\u0179", ate = "\u017A", cte = "\u017D", ute = "\u017E", hte = "\u0417", fte = "\u0437", dte = "\u017B", pte = "\u017C", mte = "\u2128", gte = "\u200B", yte = "\u0396", bte = "\u03B6", vte = "\u{1D537}", xte = "\u2128", _te = "\u0416", kte = "\u0436", wte = "\u21DD", Cte = "\u{1D56B}", Ate = "\u2124", Ste = "\u{1D4B5}", Ete = "\u{1D4CF}", Tte = "\u200D", Dte = "\u200C", Mte = {
  Aacute: dC,
  aacute: pC,
  Abreve: mC,
  abreve: gC,
  ac: yC,
  acd: bC,
  acE: vC,
  Acirc: xC,
  acirc: _C,
  acute: kC,
  Acy: wC,
  acy: CC,
  AElig: AC,
  aelig: SC,
  af: EC,
  Afr: TC,
  afr: DC,
  Agrave: MC,
  agrave: OC,
  alefsym: RC,
  aleph: LC,
  Alpha: IC,
  alpha: NC,
  Amacr: PC,
  amacr: BC,
  amalg: FC,
  amp: qC,
  AMP: $C,
  andand: HC,
  And: zC,
  and: VC,
  andd: UC,
  andslope: WC,
  andv: jC,
  ang: GC,
  ange: KC,
  angle: YC,
  angmsdaa: ZC,
  angmsdab: JC,
  angmsdac: XC,
  angmsdad: QC,
  angmsdae: eA,
  angmsdaf: tA,
  angmsdag: nA,
  angmsdah: rA,
  angmsd: iA,
  angrt: oA,
  angrtvb: sA,
  angrtvbd: lA,
  angsph: aA,
  angst: cA,
  angzarr: uA,
  Aogon: hA,
  aogon: fA,
  Aopf: dA,
  aopf: pA,
  apacir: mA,
  ap: gA,
  apE: yA,
  ape: bA,
  apid: vA,
  apos: xA,
  ApplyFunction: _A,
  approx: kA,
  approxeq: wA,
  Aring: CA,
  aring: AA,
  Ascr: SA,
  ascr: EA,
  Assign: TA,
  ast: DA,
  asymp: MA,
  asympeq: OA,
  Atilde: RA,
  atilde: LA,
  Auml: IA,
  auml: NA,
  awconint: PA,
  awint: BA,
  backcong: FA,
  backepsilon: qA,
  backprime: $A,
  backsim: HA,
  backsimeq: zA,
  Backslash: VA,
  Barv: UA,
  barvee: WA,
  barwed: jA,
  Barwed: GA,
  barwedge: KA,
  bbrk: YA,
  bbrktbrk: ZA,
  bcong: JA,
  Bcy: XA,
  bcy: QA,
  bdquo: eS,
  becaus: tS,
  because: nS,
  Because: rS,
  bemptyv: iS,
  bepsi: oS,
  bernou: sS,
  Bernoullis: lS,
  Beta: aS,
  beta: cS,
  beth: uS,
  between: hS,
  Bfr: fS,
  bfr: dS,
  bigcap: pS,
  bigcirc: mS,
  bigcup: gS,
  bigodot: yS,
  bigoplus: bS,
  bigotimes: vS,
  bigsqcup: xS,
  bigstar: _S,
  bigtriangledown: kS,
  bigtriangleup: wS,
  biguplus: CS,
  bigvee: AS,
  bigwedge: SS,
  bkarow: ES,
  blacklozenge: TS,
  blacksquare: DS,
  blacktriangle: MS,
  blacktriangledown: OS,
  blacktriangleleft: RS,
  blacktriangleright: LS,
  blank: IS,
  blk12: NS,
  blk14: PS,
  blk34: BS,
  block: FS,
  bne: qS,
  bnequiv: $S,
  bNot: HS,
  bnot: zS,
  Bopf: VS,
  bopf: US,
  bot: WS,
  bottom: jS,
  bowtie: GS,
  boxbox: KS,
  boxdl: YS,
  boxdL: ZS,
  boxDl: JS,
  boxDL: XS,
  boxdr: QS,
  boxdR: e2,
  boxDr: t2,
  boxDR: n2,
  boxh: r2,
  boxH: i2,
  boxhd: o2,
  boxHd: s2,
  boxhD: l2,
  boxHD: a2,
  boxhu: c2,
  boxHu: u2,
  boxhU: h2,
  boxHU: f2,
  boxminus: d2,
  boxplus: p2,
  boxtimes: m2,
  boxul: g2,
  boxuL: y2,
  boxUl: b2,
  boxUL: v2,
  boxur: x2,
  boxuR: _2,
  boxUr: k2,
  boxUR: w2,
  boxv: C2,
  boxV: A2,
  boxvh: S2,
  boxvH: E2,
  boxVh: T2,
  boxVH: D2,
  boxvl: M2,
  boxvL: O2,
  boxVl: R2,
  boxVL: L2,
  boxvr: I2,
  boxvR: N2,
  boxVr: P2,
  boxVR: B2,
  bprime: F2,
  breve: q2,
  Breve: $2,
  brvbar: H2,
  bscr: z2,
  Bscr: V2,
  bsemi: U2,
  bsim: W2,
  bsime: j2,
  bsolb: G2,
  bsol: K2,
  bsolhsub: Y2,
  bull: Z2,
  bullet: J2,
  bump: X2,
  bumpE: Q2,
  bumpe: eE,
  Bumpeq: tE,
  bumpeq: nE,
  Cacute: rE,
  cacute: iE,
  capand: oE,
  capbrcup: sE,
  capcap: lE,
  cap: aE,
  Cap: cE,
  capcup: uE,
  capdot: hE,
  CapitalDifferentialD: fE,
  caps: dE,
  caret: pE,
  caron: mE,
  Cayleys: gE,
  ccaps: yE,
  Ccaron: bE,
  ccaron: vE,
  Ccedil: xE,
  ccedil: _E,
  Ccirc: kE,
  ccirc: wE,
  Cconint: CE,
  ccups: AE,
  ccupssm: SE,
  Cdot: EE,
  cdot: TE,
  cedil: DE,
  Cedilla: ME,
  cemptyv: OE,
  cent: RE,
  centerdot: LE,
  CenterDot: IE,
  cfr: NE,
  Cfr: PE,
  CHcy: BE,
  chcy: FE,
  check: qE,
  checkmark: $E,
  Chi: HE,
  chi: zE,
  circ: VE,
  circeq: UE,
  circlearrowleft: WE,
  circlearrowright: jE,
  circledast: GE,
  circledcirc: KE,
  circleddash: YE,
  CircleDot: ZE,
  circledR: JE,
  circledS: XE,
  CircleMinus: QE,
  CirclePlus: eT,
  CircleTimes: tT,
  cir: nT,
  cirE: rT,
  cire: iT,
  cirfnint: oT,
  cirmid: sT,
  cirscir: lT,
  ClockwiseContourIntegral: aT,
  CloseCurlyDoubleQuote: cT,
  CloseCurlyQuote: uT,
  clubs: hT,
  clubsuit: fT,
  colon: dT,
  Colon: pT,
  Colone: mT,
  colone: gT,
  coloneq: yT,
  comma: bT,
  commat: vT,
  comp: xT,
  compfn: _T,
  complement: kT,
  complexes: wT,
  cong: CT,
  congdot: AT,
  Congruent: ST,
  conint: ET,
  Conint: TT,
  ContourIntegral: DT,
  copf: MT,
  Copf: OT,
  coprod: RT,
  Coproduct: LT,
  copy: IT,
  COPY: NT,
  copysr: PT,
  CounterClockwiseContourIntegral: BT,
  crarr: FT,
  cross: qT,
  Cross: $T,
  Cscr: HT,
  cscr: zT,
  csub: VT,
  csube: UT,
  csup: WT,
  csupe: jT,
  ctdot: GT,
  cudarrl: KT,
  cudarrr: YT,
  cuepr: ZT,
  cuesc: JT,
  cularr: XT,
  cularrp: QT,
  cupbrcap: eD,
  cupcap: tD,
  CupCap: nD,
  cup: rD,
  Cup: iD,
  cupcup: oD,
  cupdot: sD,
  cupor: lD,
  cups: aD,
  curarr: cD,
  curarrm: uD,
  curlyeqprec: hD,
  curlyeqsucc: fD,
  curlyvee: dD,
  curlywedge: pD,
  curren: mD,
  curvearrowleft: gD,
  curvearrowright: yD,
  cuvee: bD,
  cuwed: vD,
  cwconint: xD,
  cwint: _D,
  cylcty: kD,
  dagger: wD,
  Dagger: CD,
  daleth: AD,
  darr: SD,
  Darr: ED,
  dArr: TD,
  dash: DD,
  Dashv: MD,
  dashv: OD,
  dbkarow: RD,
  dblac: LD,
  Dcaron: ID,
  dcaron: ND,
  Dcy: PD,
  dcy: BD,
  ddagger: FD,
  ddarr: qD,
  DD: $D,
  dd: HD,
  DDotrahd: zD,
  ddotseq: VD,
  deg: UD,
  Del: WD,
  Delta: jD,
  delta: GD,
  demptyv: KD,
  dfisht: YD,
  Dfr: ZD,
  dfr: JD,
  dHar: XD,
  dharl: QD,
  dharr: eM,
  DiacriticalAcute: tM,
  DiacriticalDot: nM,
  DiacriticalDoubleAcute: rM,
  DiacriticalGrave: iM,
  DiacriticalTilde: oM,
  diam: sM,
  diamond: lM,
  Diamond: aM,
  diamondsuit: cM,
  diams: uM,
  die: hM,
  DifferentialD: fM,
  digamma: dM,
  disin: pM,
  div: mM,
  divide: gM,
  divideontimes: yM,
  divonx: bM,
  DJcy: vM,
  djcy: xM,
  dlcorn: _M,
  dlcrop: kM,
  dollar: wM,
  Dopf: CM,
  dopf: AM,
  Dot: SM,
  dot: EM,
  DotDot: TM,
  doteq: DM,
  doteqdot: MM,
  DotEqual: OM,
  dotminus: RM,
  dotplus: LM,
  dotsquare: IM,
  doublebarwedge: NM,
  DoubleContourIntegral: PM,
  DoubleDot: BM,
  DoubleDownArrow: FM,
  DoubleLeftArrow: qM,
  DoubleLeftRightArrow: $M,
  DoubleLeftTee: HM,
  DoubleLongLeftArrow: zM,
  DoubleLongLeftRightArrow: VM,
  DoubleLongRightArrow: UM,
  DoubleRightArrow: WM,
  DoubleRightTee: jM,
  DoubleUpArrow: GM,
  DoubleUpDownArrow: KM,
  DoubleVerticalBar: YM,
  DownArrowBar: ZM,
  downarrow: JM,
  DownArrow: XM,
  Downarrow: QM,
  DownArrowUpArrow: eO,
  DownBreve: tO,
  downdownarrows: nO,
  downharpoonleft: rO,
  downharpoonright: iO,
  DownLeftRightVector: oO,
  DownLeftTeeVector: sO,
  DownLeftVectorBar: lO,
  DownLeftVector: aO,
  DownRightTeeVector: cO,
  DownRightVectorBar: uO,
  DownRightVector: hO,
  DownTeeArrow: fO,
  DownTee: dO,
  drbkarow: pO,
  drcorn: mO,
  drcrop: gO,
  Dscr: yO,
  dscr: bO,
  DScy: vO,
  dscy: xO,
  dsol: _O,
  Dstrok: kO,
  dstrok: wO,
  dtdot: CO,
  dtri: AO,
  dtrif: SO,
  duarr: EO,
  duhar: TO,
  dwangle: DO,
  DZcy: MO,
  dzcy: OO,
  dzigrarr: RO,
  Eacute: LO,
  eacute: IO,
  easter: NO,
  Ecaron: PO,
  ecaron: BO,
  Ecirc: FO,
  ecirc: qO,
  ecir: $O,
  ecolon: HO,
  Ecy: zO,
  ecy: VO,
  eDDot: UO,
  Edot: WO,
  edot: jO,
  eDot: GO,
  ee: KO,
  efDot: YO,
  Efr: ZO,
  efr: JO,
  eg: XO,
  Egrave: QO,
  egrave: eR,
  egs: tR,
  egsdot: nR,
  el: rR,
  Element: iR,
  elinters: oR,
  ell: sR,
  els: lR,
  elsdot: aR,
  Emacr: cR,
  emacr: uR,
  empty: hR,
  emptyset: fR,
  EmptySmallSquare: dR,
  emptyv: pR,
  EmptyVerySmallSquare: mR,
  emsp13: gR,
  emsp14: yR,
  emsp: bR,
  ENG: vR,
  eng: xR,
  ensp: _R,
  Eogon: kR,
  eogon: wR,
  Eopf: CR,
  eopf: AR,
  epar: SR,
  eparsl: ER,
  eplus: TR,
  epsi: DR,
  Epsilon: MR,
  epsilon: OR,
  epsiv: RR,
  eqcirc: LR,
  eqcolon: IR,
  eqsim: NR,
  eqslantgtr: PR,
  eqslantless: BR,
  Equal: FR,
  equals: qR,
  EqualTilde: $R,
  equest: HR,
  Equilibrium: zR,
  equiv: VR,
  equivDD: UR,
  eqvparsl: WR,
  erarr: jR,
  erDot: GR,
  escr: KR,
  Escr: YR,
  esdot: ZR,
  Esim: JR,
  esim: XR,
  Eta: QR,
  eta: eL,
  ETH: tL,
  eth: nL,
  Euml: rL,
  euml: iL,
  euro: oL,
  excl: sL,
  exist: lL,
  Exists: aL,
  expectation: cL,
  exponentiale: uL,
  ExponentialE: hL,
  fallingdotseq: fL,
  Fcy: dL,
  fcy: pL,
  female: mL,
  ffilig: gL,
  fflig: yL,
  ffllig: bL,
  Ffr: vL,
  ffr: xL,
  filig: _L,
  FilledSmallSquare: kL,
  FilledVerySmallSquare: wL,
  fjlig: CL,
  flat: AL,
  fllig: SL,
  fltns: EL,
  fnof: TL,
  Fopf: DL,
  fopf: ML,
  forall: OL,
  ForAll: RL,
  fork: LL,
  forkv: IL,
  Fouriertrf: NL,
  fpartint: PL,
  frac12: BL,
  frac13: FL,
  frac14: qL,
  frac15: $L,
  frac16: HL,
  frac18: zL,
  frac23: VL,
  frac25: UL,
  frac34: WL,
  frac35: jL,
  frac38: GL,
  frac45: KL,
  frac56: YL,
  frac58: ZL,
  frac78: JL,
  frasl: XL,
  frown: QL,
  fscr: eI,
  Fscr: tI,
  gacute: nI,
  Gamma: rI,
  gamma: iI,
  Gammad: oI,
  gammad: sI,
  gap: lI,
  Gbreve: aI,
  gbreve: cI,
  Gcedil: uI,
  Gcirc: hI,
  gcirc: fI,
  Gcy: dI,
  gcy: pI,
  Gdot: mI,
  gdot: gI,
  ge: yI,
  gE: bI,
  gEl: vI,
  gel: xI,
  geq: _I,
  geqq: kI,
  geqslant: wI,
  gescc: CI,
  ges: AI,
  gesdot: SI,
  gesdoto: EI,
  gesdotol: TI,
  gesl: DI,
  gesles: MI,
  Gfr: OI,
  gfr: RI,
  gg: LI,
  Gg: II,
  ggg: NI,
  gimel: PI,
  GJcy: BI,
  gjcy: FI,
  gla: qI,
  gl: $I,
  glE: HI,
  glj: zI,
  gnap: VI,
  gnapprox: UI,
  gne: WI,
  gnE: jI,
  gneq: GI,
  gneqq: KI,
  gnsim: YI,
  Gopf: ZI,
  gopf: JI,
  grave: XI,
  GreaterEqual: QI,
  GreaterEqualLess: eN,
  GreaterFullEqual: tN,
  GreaterGreater: nN,
  GreaterLess: rN,
  GreaterSlantEqual: iN,
  GreaterTilde: oN,
  Gscr: sN,
  gscr: lN,
  gsim: aN,
  gsime: cN,
  gsiml: uN,
  gtcc: hN,
  gtcir: fN,
  gt: dN,
  GT: pN,
  Gt: mN,
  gtdot: gN,
  gtlPar: yN,
  gtquest: bN,
  gtrapprox: vN,
  gtrarr: xN,
  gtrdot: _N,
  gtreqless: kN,
  gtreqqless: wN,
  gtrless: CN,
  gtrsim: AN,
  gvertneqq: SN,
  gvnE: EN,
  Hacek: TN,
  hairsp: DN,
  half: MN,
  hamilt: ON,
  HARDcy: RN,
  hardcy: LN,
  harrcir: IN,
  harr: NN,
  hArr: PN,
  harrw: BN,
  Hat: FN,
  hbar: qN,
  Hcirc: $N,
  hcirc: HN,
  hearts: zN,
  heartsuit: VN,
  hellip: UN,
  hercon: WN,
  hfr: jN,
  Hfr: GN,
  HilbertSpace: KN,
  hksearow: YN,
  hkswarow: ZN,
  hoarr: JN,
  homtht: XN,
  hookleftarrow: QN,
  hookrightarrow: eP,
  hopf: tP,
  Hopf: nP,
  horbar: rP,
  HorizontalLine: iP,
  hscr: oP,
  Hscr: sP,
  hslash: lP,
  Hstrok: aP,
  hstrok: cP,
  HumpDownHump: uP,
  HumpEqual: hP,
  hybull: fP,
  hyphen: dP,
  Iacute: pP,
  iacute: mP,
  ic: gP,
  Icirc: yP,
  icirc: bP,
  Icy: vP,
  icy: xP,
  Idot: _P,
  IEcy: kP,
  iecy: wP,
  iexcl: CP,
  iff: AP,
  ifr: SP,
  Ifr: EP,
  Igrave: TP,
  igrave: DP,
  ii: MP,
  iiiint: OP,
  iiint: RP,
  iinfin: LP,
  iiota: IP,
  IJlig: NP,
  ijlig: PP,
  Imacr: BP,
  imacr: FP,
  image: qP,
  ImaginaryI: $P,
  imagline: HP,
  imagpart: zP,
  imath: VP,
  Im: UP,
  imof: WP,
  imped: jP,
  Implies: GP,
  incare: KP,
  in: "\u2208",
  infin: YP,
  infintie: ZP,
  inodot: JP,
  intcal: XP,
  int: QP,
  Int: e3,
  integers: t3,
  Integral: n3,
  intercal: r3,
  Intersection: i3,
  intlarhk: o3,
  intprod: s3,
  InvisibleComma: l3,
  InvisibleTimes: a3,
  IOcy: c3,
  iocy: u3,
  Iogon: h3,
  iogon: f3,
  Iopf: d3,
  iopf: p3,
  Iota: m3,
  iota: g3,
  iprod: y3,
  iquest: b3,
  iscr: v3,
  Iscr: x3,
  isin: _3,
  isindot: k3,
  isinE: w3,
  isins: C3,
  isinsv: A3,
  isinv: S3,
  it: E3,
  Itilde: T3,
  itilde: D3,
  Iukcy: M3,
  iukcy: O3,
  Iuml: R3,
  iuml: L3,
  Jcirc: I3,
  jcirc: N3,
  Jcy: P3,
  jcy: B3,
  Jfr: F3,
  jfr: q3,
  jmath: $3,
  Jopf: H3,
  jopf: z3,
  Jscr: V3,
  jscr: U3,
  Jsercy: W3,
  jsercy: j3,
  Jukcy: G3,
  jukcy: K3,
  Kappa: Y3,
  kappa: Z3,
  kappav: J3,
  Kcedil: X3,
  kcedil: Q3,
  Kcy: eB,
  kcy: tB,
  Kfr: nB,
  kfr: rB,
  kgreen: iB,
  KHcy: oB,
  khcy: sB,
  KJcy: lB,
  kjcy: aB,
  Kopf: cB,
  kopf: uB,
  Kscr: hB,
  kscr: fB,
  lAarr: dB,
  Lacute: pB,
  lacute: mB,
  laemptyv: gB,
  lagran: yB,
  Lambda: bB,
  lambda: vB,
  lang: xB,
  Lang: _B,
  langd: kB,
  langle: wB,
  lap: CB,
  Laplacetrf: AB,
  laquo: SB,
  larrb: EB,
  larrbfs: TB,
  larr: DB,
  Larr: MB,
  lArr: OB,
  larrfs: RB,
  larrhk: LB,
  larrlp: IB,
  larrpl: NB,
  larrsim: PB,
  larrtl: BB,
  latail: FB,
  lAtail: qB,
  lat: $B,
  late: HB,
  lates: zB,
  lbarr: VB,
  lBarr: UB,
  lbbrk: WB,
  lbrace: jB,
  lbrack: GB,
  lbrke: KB,
  lbrksld: YB,
  lbrkslu: ZB,
  Lcaron: JB,
  lcaron: XB,
  Lcedil: QB,
  lcedil: eF,
  lceil: tF,
  lcub: nF,
  Lcy: rF,
  lcy: iF,
  ldca: oF,
  ldquo: sF,
  ldquor: lF,
  ldrdhar: aF,
  ldrushar: cF,
  ldsh: uF,
  le: hF,
  lE: fF,
  LeftAngleBracket: dF,
  LeftArrowBar: pF,
  leftarrow: mF,
  LeftArrow: gF,
  Leftarrow: yF,
  LeftArrowRightArrow: bF,
  leftarrowtail: vF,
  LeftCeiling: xF,
  LeftDoubleBracket: _F,
  LeftDownTeeVector: kF,
  LeftDownVectorBar: wF,
  LeftDownVector: CF,
  LeftFloor: AF,
  leftharpoondown: SF,
  leftharpoonup: EF,
  leftleftarrows: TF,
  leftrightarrow: DF,
  LeftRightArrow: MF,
  Leftrightarrow: OF,
  leftrightarrows: RF,
  leftrightharpoons: LF,
  leftrightsquigarrow: IF,
  LeftRightVector: NF,
  LeftTeeArrow: PF,
  LeftTee: BF,
  LeftTeeVector: FF,
  leftthreetimes: qF,
  LeftTriangleBar: $F,
  LeftTriangle: HF,
  LeftTriangleEqual: zF,
  LeftUpDownVector: VF,
  LeftUpTeeVector: UF,
  LeftUpVectorBar: WF,
  LeftUpVector: jF,
  LeftVectorBar: GF,
  LeftVector: KF,
  lEg: YF,
  leg: ZF,
  leq: JF,
  leqq: XF,
  leqslant: QF,
  lescc: e4,
  les: t4,
  lesdot: n4,
  lesdoto: r4,
  lesdotor: i4,
  lesg: o4,
  lesges: s4,
  lessapprox: l4,
  lessdot: a4,
  lesseqgtr: c4,
  lesseqqgtr: u4,
  LessEqualGreater: h4,
  LessFullEqual: f4,
  LessGreater: d4,
  lessgtr: p4,
  LessLess: m4,
  lesssim: g4,
  LessSlantEqual: y4,
  LessTilde: b4,
  lfisht: v4,
  lfloor: x4,
  Lfr: _4,
  lfr: k4,
  lg: w4,
  lgE: C4,
  lHar: A4,
  lhard: S4,
  lharu: E4,
  lharul: T4,
  lhblk: D4,
  LJcy: M4,
  ljcy: O4,
  llarr: R4,
  ll: L4,
  Ll: I4,
  llcorner: N4,
  Lleftarrow: P4,
  llhard: B4,
  lltri: F4,
  Lmidot: q4,
  lmidot: $4,
  lmoustache: H4,
  lmoust: z4,
  lnap: V4,
  lnapprox: U4,
  lne: W4,
  lnE: j4,
  lneq: G4,
  lneqq: K4,
  lnsim: Y4,
  loang: Z4,
  loarr: J4,
  lobrk: X4,
  longleftarrow: Q4,
  LongLeftArrow: eq,
  Longleftarrow: tq,
  longleftrightarrow: nq,
  LongLeftRightArrow: rq,
  Longleftrightarrow: iq,
  longmapsto: oq,
  longrightarrow: sq,
  LongRightArrow: lq,
  Longrightarrow: aq,
  looparrowleft: cq,
  looparrowright: uq,
  lopar: hq,
  Lopf: fq,
  lopf: dq,
  loplus: pq,
  lotimes: mq,
  lowast: gq,
  lowbar: yq,
  LowerLeftArrow: bq,
  LowerRightArrow: vq,
  loz: xq,
  lozenge: _q,
  lozf: kq,
  lpar: wq,
  lparlt: Cq,
  lrarr: Aq,
  lrcorner: Sq,
  lrhar: Eq,
  lrhard: Tq,
  lrm: Dq,
  lrtri: Mq,
  lsaquo: Oq,
  lscr: Rq,
  Lscr: Lq,
  lsh: Iq,
  Lsh: Nq,
  lsim: Pq,
  lsime: Bq,
  lsimg: Fq,
  lsqb: qq,
  lsquo: $q,
  lsquor: Hq,
  Lstrok: zq,
  lstrok: Vq,
  ltcc: Uq,
  ltcir: Wq,
  lt: jq,
  LT: Gq,
  Lt: Kq,
  ltdot: Yq,
  lthree: Zq,
  ltimes: Jq,
  ltlarr: Xq,
  ltquest: Qq,
  ltri: e5,
  ltrie: t5,
  ltrif: n5,
  ltrPar: r5,
  lurdshar: i5,
  luruhar: o5,
  lvertneqq: s5,
  lvnE: l5,
  macr: a5,
  male: c5,
  malt: u5,
  maltese: h5,
  Map: "\u2905",
  map: f5,
  mapsto: d5,
  mapstodown: p5,
  mapstoleft: m5,
  mapstoup: g5,
  marker: y5,
  mcomma: b5,
  Mcy: v5,
  mcy: x5,
  mdash: _5,
  mDDot: k5,
  measuredangle: w5,
  MediumSpace: C5,
  Mellintrf: A5,
  Mfr: S5,
  mfr: E5,
  mho: T5,
  micro: D5,
  midast: M5,
  midcir: O5,
  mid: R5,
  middot: L5,
  minusb: I5,
  minus: N5,
  minusd: P5,
  minusdu: B5,
  MinusPlus: F5,
  mlcp: q5,
  mldr: $5,
  mnplus: H5,
  models: z5,
  Mopf: V5,
  mopf: U5,
  mp: W5,
  mscr: j5,
  Mscr: G5,
  mstpos: K5,
  Mu: Y5,
  mu: Z5,
  multimap: J5,
  mumap: X5,
  nabla: Q5,
  Nacute: e$,
  nacute: t$,
  nang: n$,
  nap: r$,
  napE: i$,
  napid: o$,
  napos: s$,
  napprox: l$,
  natural: a$,
  naturals: c$,
  natur: u$,
  nbsp: h$,
  nbump: f$,
  nbumpe: d$,
  ncap: p$,
  Ncaron: m$,
  ncaron: g$,
  Ncedil: y$,
  ncedil: b$,
  ncong: v$,
  ncongdot: x$,
  ncup: _$,
  Ncy: k$,
  ncy: w$,
  ndash: C$,
  nearhk: A$,
  nearr: S$,
  neArr: E$,
  nearrow: T$,
  ne: D$,
  nedot: M$,
  NegativeMediumSpace: O$,
  NegativeThickSpace: R$,
  NegativeThinSpace: L$,
  NegativeVeryThinSpace: I$,
  nequiv: N$,
  nesear: P$,
  nesim: B$,
  NestedGreaterGreater: F$,
  NestedLessLess: q$,
  NewLine: $$,
  nexist: H$,
  nexists: z$,
  Nfr: V$,
  nfr: U$,
  ngE: W$,
  nge: j$,
  ngeq: G$,
  ngeqq: K$,
  ngeqslant: Y$,
  nges: Z$,
  nGg: J$,
  ngsim: X$,
  nGt: Q$,
  ngt: e6,
  ngtr: t6,
  nGtv: n6,
  nharr: r6,
  nhArr: i6,
  nhpar: o6,
  ni: s6,
  nis: l6,
  nisd: a6,
  niv: c6,
  NJcy: u6,
  njcy: h6,
  nlarr: f6,
  nlArr: d6,
  nldr: p6,
  nlE: m6,
  nle: g6,
  nleftarrow: y6,
  nLeftarrow: b6,
  nleftrightarrow: v6,
  nLeftrightarrow: x6,
  nleq: _6,
  nleqq: k6,
  nleqslant: w6,
  nles: C6,
  nless: A6,
  nLl: S6,
  nlsim: E6,
  nLt: T6,
  nlt: D6,
  nltri: M6,
  nltrie: O6,
  nLtv: R6,
  nmid: L6,
  NoBreak: I6,
  NonBreakingSpace: N6,
  nopf: P6,
  Nopf: B6,
  Not: F6,
  not: q6,
  NotCongruent: $6,
  NotCupCap: H6,
  NotDoubleVerticalBar: z6,
  NotElement: V6,
  NotEqual: U6,
  NotEqualTilde: W6,
  NotExists: j6,
  NotGreater: G6,
  NotGreaterEqual: K6,
  NotGreaterFullEqual: Y6,
  NotGreaterGreater: Z6,
  NotGreaterLess: J6,
  NotGreaterSlantEqual: X6,
  NotGreaterTilde: Q6,
  NotHumpDownHump: e8,
  NotHumpEqual: t8,
  notin: n8,
  notindot: r8,
  notinE: i8,
  notinva: o8,
  notinvb: s8,
  notinvc: l8,
  NotLeftTriangleBar: a8,
  NotLeftTriangle: c8,
  NotLeftTriangleEqual: u8,
  NotLess: h8,
  NotLessEqual: f8,
  NotLessGreater: d8,
  NotLessLess: p8,
  NotLessSlantEqual: m8,
  NotLessTilde: g8,
  NotNestedGreaterGreater: y8,
  NotNestedLessLess: b8,
  notni: v8,
  notniva: x8,
  notnivb: _8,
  notnivc: k8,
  NotPrecedes: w8,
  NotPrecedesEqual: C8,
  NotPrecedesSlantEqual: A8,
  NotReverseElement: S8,
  NotRightTriangleBar: E8,
  NotRightTriangle: T8,
  NotRightTriangleEqual: D8,
  NotSquareSubset: M8,
  NotSquareSubsetEqual: O8,
  NotSquareSuperset: R8,
  NotSquareSupersetEqual: L8,
  NotSubset: I8,
  NotSubsetEqual: N8,
  NotSucceeds: P8,
  NotSucceedsEqual: B8,
  NotSucceedsSlantEqual: F8,
  NotSucceedsTilde: q8,
  NotSuperset: $8,
  NotSupersetEqual: H8,
  NotTilde: z8,
  NotTildeEqual: V8,
  NotTildeFullEqual: U8,
  NotTildeTilde: W8,
  NotVerticalBar: j8,
  nparallel: G8,
  npar: K8,
  nparsl: Y8,
  npart: Z8,
  npolint: J8,
  npr: X8,
  nprcue: Q8,
  nprec: e9,
  npreceq: t9,
  npre: n9,
  nrarrc: r9,
  nrarr: i9,
  nrArr: o9,
  nrarrw: s9,
  nrightarrow: l9,
  nRightarrow: a9,
  nrtri: c9,
  nrtrie: u9,
  nsc: h9,
  nsccue: f9,
  nsce: d9,
  Nscr: p9,
  nscr: m9,
  nshortmid: g9,
  nshortparallel: y9,
  nsim: b9,
  nsime: v9,
  nsimeq: x9,
  nsmid: _9,
  nspar: k9,
  nsqsube: w9,
  nsqsupe: C9,
  nsub: A9,
  nsubE: S9,
  nsube: E9,
  nsubset: T9,
  nsubseteq: D9,
  nsubseteqq: M9,
  nsucc: O9,
  nsucceq: R9,
  nsup: L9,
  nsupE: I9,
  nsupe: N9,
  nsupset: P9,
  nsupseteq: B9,
  nsupseteqq: F9,
  ntgl: q9,
  Ntilde: $9,
  ntilde: H9,
  ntlg: z9,
  ntriangleleft: V9,
  ntrianglelefteq: U9,
  ntriangleright: W9,
  ntrianglerighteq: j9,
  Nu: G9,
  nu: K9,
  num: Y9,
  numero: Z9,
  numsp: J9,
  nvap: X9,
  nvdash: Q9,
  nvDash: eH,
  nVdash: tH,
  nVDash: nH,
  nvge: rH,
  nvgt: iH,
  nvHarr: oH,
  nvinfin: sH,
  nvlArr: lH,
  nvle: aH,
  nvlt: cH,
  nvltrie: uH,
  nvrArr: hH,
  nvrtrie: fH,
  nvsim: dH,
  nwarhk: pH,
  nwarr: mH,
  nwArr: gH,
  nwarrow: yH,
  nwnear: bH,
  Oacute: vH,
  oacute: xH,
  oast: _H,
  Ocirc: kH,
  ocirc: wH,
  ocir: CH,
  Ocy: AH,
  ocy: SH,
  odash: EH,
  Odblac: TH,
  odblac: DH,
  odiv: MH,
  odot: OH,
  odsold: RH,
  OElig: LH,
  oelig: IH,
  ofcir: NH,
  Ofr: PH,
  ofr: BH,
  ogon: FH,
  Ograve: qH,
  ograve: $H,
  ogt: HH,
  ohbar: zH,
  ohm: VH,
  oint: UH,
  olarr: WH,
  olcir: jH,
  olcross: GH,
  oline: KH,
  olt: YH,
  Omacr: ZH,
  omacr: JH,
  Omega: XH,
  omega: QH,
  Omicron: ez,
  omicron: tz,
  omid: nz,
  ominus: rz,
  Oopf: iz,
  oopf: oz,
  opar: sz,
  OpenCurlyDoubleQuote: lz,
  OpenCurlyQuote: az,
  operp: cz,
  oplus: uz,
  orarr: hz,
  Or: fz,
  or: dz,
  ord: pz,
  order: mz,
  orderof: gz,
  ordf: yz,
  ordm: bz,
  origof: vz,
  oror: xz,
  orslope: _z,
  orv: kz,
  oS: wz,
  Oscr: Cz,
  oscr: Az,
  Oslash: Sz,
  oslash: Ez,
  osol: Tz,
  Otilde: Dz,
  otilde: Mz,
  otimesas: Oz,
  Otimes: Rz,
  otimes: Lz,
  Ouml: Iz,
  ouml: Nz,
  ovbar: Pz,
  OverBar: Bz,
  OverBrace: Fz,
  OverBracket: qz,
  OverParenthesis: $z,
  para: Hz,
  parallel: zz,
  par: Vz,
  parsim: Uz,
  parsl: Wz,
  part: jz,
  PartialD: Gz,
  Pcy: Kz,
  pcy: Yz,
  percnt: Zz,
  period: Jz,
  permil: Xz,
  perp: Qz,
  pertenk: e7,
  Pfr: t7,
  pfr: n7,
  Phi: r7,
  phi: i7,
  phiv: o7,
  phmmat: s7,
  phone: l7,
  Pi: a7,
  pi: c7,
  pitchfork: u7,
  piv: h7,
  planck: f7,
  planckh: d7,
  plankv: p7,
  plusacir: m7,
  plusb: g7,
  pluscir: y7,
  plus: b7,
  plusdo: v7,
  plusdu: x7,
  pluse: _7,
  PlusMinus: k7,
  plusmn: w7,
  plussim: C7,
  plustwo: A7,
  pm: S7,
  Poincareplane: E7,
  pointint: T7,
  popf: D7,
  Popf: M7,
  pound: O7,
  prap: R7,
  Pr: L7,
  pr: I7,
  prcue: N7,
  precapprox: P7,
  prec: B7,
  preccurlyeq: F7,
  Precedes: q7,
  PrecedesEqual: $7,
  PrecedesSlantEqual: H7,
  PrecedesTilde: z7,
  preceq: V7,
  precnapprox: U7,
  precneqq: W7,
  precnsim: j7,
  pre: G7,
  prE: K7,
  precsim: Y7,
  prime: Z7,
  Prime: J7,
  primes: X7,
  prnap: Q7,
  prnE: eV,
  prnsim: tV,
  prod: nV,
  Product: rV,
  profalar: iV,
  profline: oV,
  profsurf: sV,
  prop: lV,
  Proportional: aV,
  Proportion: cV,
  propto: uV,
  prsim: hV,
  prurel: fV,
  Pscr: dV,
  pscr: pV,
  Psi: mV,
  psi: gV,
  puncsp: yV,
  Qfr: bV,
  qfr: vV,
  qint: xV,
  qopf: _V,
  Qopf: kV,
  qprime: wV,
  Qscr: CV,
  qscr: AV,
  quaternions: SV,
  quatint: EV,
  quest: TV,
  questeq: DV,
  quot: MV,
  QUOT: OV,
  rAarr: RV,
  race: LV,
  Racute: IV,
  racute: NV,
  radic: PV,
  raemptyv: BV,
  rang: FV,
  Rang: qV,
  rangd: $V,
  range: HV,
  rangle: zV,
  raquo: VV,
  rarrap: UV,
  rarrb: WV,
  rarrbfs: jV,
  rarrc: GV,
  rarr: KV,
  Rarr: YV,
  rArr: ZV,
  rarrfs: JV,
  rarrhk: XV,
  rarrlp: QV,
  rarrpl: eU,
  rarrsim: tU,
  Rarrtl: nU,
  rarrtl: rU,
  rarrw: iU,
  ratail: oU,
  rAtail: sU,
  ratio: lU,
  rationals: aU,
  rbarr: cU,
  rBarr: uU,
  RBarr: hU,
  rbbrk: fU,
  rbrace: dU,
  rbrack: pU,
  rbrke: mU,
  rbrksld: gU,
  rbrkslu: yU,
  Rcaron: bU,
  rcaron: vU,
  Rcedil: xU,
  rcedil: _U,
  rceil: kU,
  rcub: wU,
  Rcy: CU,
  rcy: AU,
  rdca: SU,
  rdldhar: EU,
  rdquo: TU,
  rdquor: DU,
  rdsh: MU,
  real: OU,
  realine: RU,
  realpart: LU,
  reals: IU,
  Re: NU,
  rect: PU,
  reg: BU,
  REG: FU,
  ReverseElement: qU,
  ReverseEquilibrium: $U,
  ReverseUpEquilibrium: HU,
  rfisht: zU,
  rfloor: VU,
  rfr: UU,
  Rfr: WU,
  rHar: jU,
  rhard: GU,
  rharu: KU,
  rharul: YU,
  Rho: ZU,
  rho: JU,
  rhov: XU,
  RightAngleBracket: QU,
  RightArrowBar: eW,
  rightarrow: tW,
  RightArrow: nW,
  Rightarrow: rW,
  RightArrowLeftArrow: iW,
  rightarrowtail: oW,
  RightCeiling: sW,
  RightDoubleBracket: lW,
  RightDownTeeVector: aW,
  RightDownVectorBar: cW,
  RightDownVector: uW,
  RightFloor: hW,
  rightharpoondown: fW,
  rightharpoonup: dW,
  rightleftarrows: pW,
  rightleftharpoons: mW,
  rightrightarrows: gW,
  rightsquigarrow: yW,
  RightTeeArrow: bW,
  RightTee: vW,
  RightTeeVector: xW,
  rightthreetimes: _W,
  RightTriangleBar: kW,
  RightTriangle: wW,
  RightTriangleEqual: CW,
  RightUpDownVector: AW,
  RightUpTeeVector: SW,
  RightUpVectorBar: EW,
  RightUpVector: TW,
  RightVectorBar: DW,
  RightVector: MW,
  ring: OW,
  risingdotseq: RW,
  rlarr: LW,
  rlhar: IW,
  rlm: NW,
  rmoustache: PW,
  rmoust: BW,
  rnmid: FW,
  roang: qW,
  roarr: $W,
  robrk: HW,
  ropar: zW,
  ropf: VW,
  Ropf: UW,
  roplus: WW,
  rotimes: jW,
  RoundImplies: GW,
  rpar: KW,
  rpargt: YW,
  rppolint: ZW,
  rrarr: JW,
  Rrightarrow: XW,
  rsaquo: QW,
  rscr: ej,
  Rscr: tj,
  rsh: nj,
  Rsh: rj,
  rsqb: ij,
  rsquo: oj,
  rsquor: sj,
  rthree: lj,
  rtimes: aj,
  rtri: cj,
  rtrie: uj,
  rtrif: hj,
  rtriltri: fj,
  RuleDelayed: dj,
  ruluhar: pj,
  rx: mj,
  Sacute: gj,
  sacute: yj,
  sbquo: bj,
  scap: vj,
  Scaron: xj,
  scaron: _j,
  Sc: kj,
  sc: wj,
  sccue: Cj,
  sce: Aj,
  scE: Sj,
  Scedil: Ej,
  scedil: Tj,
  Scirc: Dj,
  scirc: Mj,
  scnap: Oj,
  scnE: Rj,
  scnsim: Lj,
  scpolint: Ij,
  scsim: Nj,
  Scy: Pj,
  scy: Bj,
  sdotb: Fj,
  sdot: qj,
  sdote: $j,
  searhk: Hj,
  searr: zj,
  seArr: Vj,
  searrow: Uj,
  sect: Wj,
  semi: jj,
  seswar: Gj,
  setminus: Kj,
  setmn: Yj,
  sext: Zj,
  Sfr: Jj,
  sfr: Xj,
  sfrown: Qj,
  sharp: eG,
  SHCHcy: tG,
  shchcy: nG,
  SHcy: rG,
  shcy: iG,
  ShortDownArrow: oG,
  ShortLeftArrow: sG,
  shortmid: lG,
  shortparallel: aG,
  ShortRightArrow: cG,
  ShortUpArrow: uG,
  shy: hG,
  Sigma: fG,
  sigma: dG,
  sigmaf: pG,
  sigmav: mG,
  sim: gG,
  simdot: yG,
  sime: bG,
  simeq: vG,
  simg: xG,
  simgE: _G,
  siml: kG,
  simlE: wG,
  simne: CG,
  simplus: AG,
  simrarr: SG,
  slarr: EG,
  SmallCircle: TG,
  smallsetminus: DG,
  smashp: MG,
  smeparsl: OG,
  smid: RG,
  smile: LG,
  smt: IG,
  smte: NG,
  smtes: PG,
  SOFTcy: BG,
  softcy: FG,
  solbar: qG,
  solb: $G,
  sol: HG,
  Sopf: zG,
  sopf: VG,
  spades: UG,
  spadesuit: WG,
  spar: jG,
  sqcap: GG,
  sqcaps: KG,
  sqcup: YG,
  sqcups: ZG,
  Sqrt: JG,
  sqsub: XG,
  sqsube: QG,
  sqsubset: eK,
  sqsubseteq: tK,
  sqsup: nK,
  sqsupe: rK,
  sqsupset: iK,
  sqsupseteq: oK,
  square: sK,
  Square: lK,
  SquareIntersection: aK,
  SquareSubset: cK,
  SquareSubsetEqual: uK,
  SquareSuperset: hK,
  SquareSupersetEqual: fK,
  SquareUnion: dK,
  squarf: pK,
  squ: mK,
  squf: gK,
  srarr: yK,
  Sscr: bK,
  sscr: vK,
  ssetmn: xK,
  ssmile: _K,
  sstarf: kK,
  Star: wK,
  star: CK,
  starf: AK,
  straightepsilon: SK,
  straightphi: EK,
  strns: TK,
  sub: DK,
  Sub: MK,
  subdot: OK,
  subE: RK,
  sube: LK,
  subedot: IK,
  submult: NK,
  subnE: PK,
  subne: BK,
  subplus: FK,
  subrarr: qK,
  subset: $K,
  Subset: HK,
  subseteq: zK,
  subseteqq: VK,
  SubsetEqual: UK,
  subsetneq: WK,
  subsetneqq: jK,
  subsim: GK,
  subsub: KK,
  subsup: YK,
  succapprox: ZK,
  succ: JK,
  succcurlyeq: XK,
  Succeeds: QK,
  SucceedsEqual: eY,
  SucceedsSlantEqual: tY,
  SucceedsTilde: nY,
  succeq: rY,
  succnapprox: iY,
  succneqq: oY,
  succnsim: sY,
  succsim: lY,
  SuchThat: aY,
  sum: cY,
  Sum: uY,
  sung: hY,
  sup1: fY,
  sup2: dY,
  sup3: pY,
  sup: mY,
  Sup: gY,
  supdot: yY,
  supdsub: bY,
  supE: vY,
  supe: xY,
  supedot: _Y,
  Superset: kY,
  SupersetEqual: wY,
  suphsol: CY,
  suphsub: AY,
  suplarr: SY,
  supmult: EY,
  supnE: TY,
  supne: DY,
  supplus: MY,
  supset: OY,
  Supset: RY,
  supseteq: LY,
  supseteqq: IY,
  supsetneq: NY,
  supsetneqq: PY,
  supsim: BY,
  supsub: FY,
  supsup: qY,
  swarhk: $Y,
  swarr: HY,
  swArr: zY,
  swarrow: VY,
  swnwar: UY,
  szlig: WY,
  Tab: jY,
  target: GY,
  Tau: KY,
  tau: YY,
  tbrk: ZY,
  Tcaron: JY,
  tcaron: XY,
  Tcedil: QY,
  tcedil: eZ,
  Tcy: tZ,
  tcy: nZ,
  tdot: rZ,
  telrec: iZ,
  Tfr: oZ,
  tfr: sZ,
  there4: lZ,
  therefore: aZ,
  Therefore: cZ,
  Theta: uZ,
  theta: hZ,
  thetasym: fZ,
  thetav: dZ,
  thickapprox: pZ,
  thicksim: mZ,
  ThickSpace: gZ,
  ThinSpace: yZ,
  thinsp: bZ,
  thkap: vZ,
  thksim: xZ,
  THORN: _Z,
  thorn: kZ,
  tilde: wZ,
  Tilde: CZ,
  TildeEqual: AZ,
  TildeFullEqual: SZ,
  TildeTilde: EZ,
  timesbar: TZ,
  timesb: DZ,
  times: MZ,
  timesd: OZ,
  tint: RZ,
  toea: LZ,
  topbot: IZ,
  topcir: NZ,
  top: PZ,
  Topf: BZ,
  topf: FZ,
  topfork: qZ,
  tosa: $Z,
  tprime: HZ,
  trade: zZ,
  TRADE: VZ,
  triangle: UZ,
  triangledown: WZ,
  triangleleft: jZ,
  trianglelefteq: GZ,
  triangleq: KZ,
  triangleright: YZ,
  trianglerighteq: ZZ,
  tridot: JZ,
  trie: XZ,
  triminus: QZ,
  TripleDot: eJ,
  triplus: tJ,
  trisb: nJ,
  tritime: rJ,
  trpezium: iJ,
  Tscr: oJ,
  tscr: sJ,
  TScy: lJ,
  tscy: aJ,
  TSHcy: cJ,
  tshcy: uJ,
  Tstrok: hJ,
  tstrok: fJ,
  twixt: dJ,
  twoheadleftarrow: pJ,
  twoheadrightarrow: mJ,
  Uacute: gJ,
  uacute: yJ,
  uarr: bJ,
  Uarr: vJ,
  uArr: xJ,
  Uarrocir: _J,
  Ubrcy: kJ,
  ubrcy: wJ,
  Ubreve: CJ,
  ubreve: AJ,
  Ucirc: SJ,
  ucirc: EJ,
  Ucy: TJ,
  ucy: DJ,
  udarr: MJ,
  Udblac: OJ,
  udblac: RJ,
  udhar: LJ,
  ufisht: IJ,
  Ufr: NJ,
  ufr: PJ,
  Ugrave: BJ,
  ugrave: FJ,
  uHar: qJ,
  uharl: $J,
  uharr: HJ,
  uhblk: zJ,
  ulcorn: VJ,
  ulcorner: UJ,
  ulcrop: WJ,
  ultri: jJ,
  Umacr: GJ,
  umacr: KJ,
  uml: YJ,
  UnderBar: ZJ,
  UnderBrace: JJ,
  UnderBracket: XJ,
  UnderParenthesis: QJ,
  Union: eX,
  UnionPlus: tX,
  Uogon: nX,
  uogon: rX,
  Uopf: iX,
  uopf: oX,
  UpArrowBar: sX,
  uparrow: lX,
  UpArrow: aX,
  Uparrow: cX,
  UpArrowDownArrow: uX,
  updownarrow: hX,
  UpDownArrow: fX,
  Updownarrow: dX,
  UpEquilibrium: pX,
  upharpoonleft: mX,
  upharpoonright: gX,
  uplus: yX,
  UpperLeftArrow: bX,
  UpperRightArrow: vX,
  upsi: xX,
  Upsi: _X,
  upsih: kX,
  Upsilon: wX,
  upsilon: CX,
  UpTeeArrow: AX,
  UpTee: SX,
  upuparrows: EX,
  urcorn: TX,
  urcorner: DX,
  urcrop: MX,
  Uring: OX,
  uring: RX,
  urtri: LX,
  Uscr: IX,
  uscr: NX,
  utdot: PX,
  Utilde: BX,
  utilde: FX,
  utri: qX,
  utrif: $X,
  uuarr: HX,
  Uuml: zX,
  uuml: VX,
  uwangle: UX,
  vangrt: WX,
  varepsilon: jX,
  varkappa: GX,
  varnothing: KX,
  varphi: YX,
  varpi: ZX,
  varpropto: JX,
  varr: XX,
  vArr: QX,
  varrho: eQ,
  varsigma: tQ,
  varsubsetneq: nQ,
  varsubsetneqq: rQ,
  varsupsetneq: iQ,
  varsupsetneqq: oQ,
  vartheta: sQ,
  vartriangleleft: lQ,
  vartriangleright: aQ,
  vBar: cQ,
  Vbar: uQ,
  vBarv: hQ,
  Vcy: fQ,
  vcy: dQ,
  vdash: pQ,
  vDash: mQ,
  Vdash: gQ,
  VDash: yQ,
  Vdashl: bQ,
  veebar: vQ,
  vee: xQ,
  Vee: _Q,
  veeeq: kQ,
  vellip: wQ,
  verbar: CQ,
  Verbar: AQ,
  vert: SQ,
  Vert: EQ,
  VerticalBar: TQ,
  VerticalLine: DQ,
  VerticalSeparator: MQ,
  VerticalTilde: OQ,
  VeryThinSpace: RQ,
  Vfr: LQ,
  vfr: IQ,
  vltri: NQ,
  vnsub: PQ,
  vnsup: BQ,
  Vopf: FQ,
  vopf: qQ,
  vprop: $Q,
  vrtri: HQ,
  Vscr: zQ,
  vscr: VQ,
  vsubnE: UQ,
  vsubne: WQ,
  vsupnE: jQ,
  vsupne: GQ,
  Vvdash: KQ,
  vzigzag: YQ,
  Wcirc: ZQ,
  wcirc: JQ,
  wedbar: XQ,
  wedge: QQ,
  Wedge: eee,
  wedgeq: tee,
  weierp: nee,
  Wfr: ree,
  wfr: iee,
  Wopf: oee,
  wopf: see,
  wp: lee,
  wr: aee,
  wreath: cee,
  Wscr: uee,
  wscr: hee,
  xcap: fee,
  xcirc: dee,
  xcup: pee,
  xdtri: mee,
  Xfr: gee,
  xfr: yee,
  xharr: bee,
  xhArr: vee,
  Xi: xee,
  xi: _ee,
  xlarr: kee,
  xlArr: wee,
  xmap: Cee,
  xnis: Aee,
  xodot: See,
  Xopf: Eee,
  xopf: Tee,
  xoplus: Dee,
  xotime: Mee,
  xrarr: Oee,
  xrArr: Ree,
  Xscr: Lee,
  xscr: Iee,
  xsqcup: Nee,
  xuplus: Pee,
  xutri: Bee,
  xvee: Fee,
  xwedge: qee,
  Yacute: $ee,
  yacute: Hee,
  YAcy: zee,
  yacy: Vee,
  Ycirc: Uee,
  ycirc: Wee,
  Ycy: jee,
  ycy: Gee,
  yen: Kee,
  Yfr: Yee,
  yfr: Zee,
  YIcy: Jee,
  yicy: Xee,
  Yopf: Qee,
  yopf: ete,
  Yscr: tte,
  yscr: nte,
  YUcy: rte,
  yucy: ite,
  yuml: ote,
  Yuml: ste,
  Zacute: lte,
  zacute: ate,
  Zcaron: cte,
  zcaron: ute,
  Zcy: hte,
  zcy: fte,
  Zdot: dte,
  zdot: pte,
  zeetrf: mte,
  ZeroWidthSpace: gte,
  Zeta: yte,
  zeta: bte,
  zfr: vte,
  Zfr: xte,
  ZHcy: _te,
  zhcy: kte,
  zigrarr: wte,
  zopf: Cte,
  Zopf: Ate,
  Zscr: Ste,
  zscr: Ete,
  zwj: Tte,
  zwnj: Dte
};
(function(t) {
  t.exports = Mte;
})(Su);
var Eu = /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4E\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/, ri = {}, Bf = {};
function Ote(t) {
  var e, n, r = Bf[t];
  if (r)
    return r;
  for (r = Bf[t] = [], e = 0; e < 128; e++)
    n = String.fromCharCode(e), /^[0-9a-z]$/i.test(n) ? r.push(n) : r.push("%" + ("0" + e.toString(16).toUpperCase()).slice(-2));
  for (e = 0; e < t.length; e++)
    r[t.charCodeAt(e)] = t[e];
  return r;
}
function ll(t, e, n) {
  var r, i, o, s, l, a = "";
  for (typeof e != "string" && (n = e, e = ll.defaultChars), typeof n > "u" && (n = !0), l = Ote(e), r = 0, i = t.length; r < i; r++) {
    if (o = t.charCodeAt(r), n && o === 37 && r + 2 < i && /^[0-9a-f]{2}$/i.test(t.slice(r + 1, r + 3))) {
      a += t.slice(r, r + 3), r += 2;
      continue;
    }
    if (o < 128) {
      a += l[o];
      continue;
    }
    if (o >= 55296 && o <= 57343) {
      if (o >= 55296 && o <= 56319 && r + 1 < i && (s = t.charCodeAt(r + 1), s >= 56320 && s <= 57343)) {
        a += encodeURIComponent(t[r] + t[r + 1]), r++;
        continue;
      }
      a += "%EF%BF%BD";
      continue;
    }
    a += encodeURIComponent(t[r]);
  }
  return a;
}
ll.defaultChars = ";/?:@&=+$,-_.!~*'()#";
ll.componentChars = "-_.!~*'()";
var Rte = ll, Ff = {};
function Lte(t) {
  var e, n, r = Ff[t];
  if (r)
    return r;
  for (r = Ff[t] = [], e = 0; e < 128; e++)
    n = String.fromCharCode(e), r.push(n);
  for (e = 0; e < t.length; e++)
    n = t.charCodeAt(e), r[n] = "%" + ("0" + n.toString(16).toUpperCase()).slice(-2);
  return r;
}
function al(t, e) {
  var n;
  return typeof e != "string" && (e = al.defaultChars), n = Lte(e), t.replace(/(%[a-f0-9]{2})+/gi, function(r) {
    var i, o, s, l, a, c, u, h = "";
    for (i = 0, o = r.length; i < o; i += 3) {
      if (s = parseInt(r.slice(i + 1, i + 3), 16), s < 128) {
        h += n[s];
        continue;
      }
      if ((s & 224) === 192 && i + 3 < o && (l = parseInt(r.slice(i + 4, i + 6), 16), (l & 192) === 128)) {
        u = s << 6 & 1984 | l & 63, u < 128 ? h += "\uFFFD\uFFFD" : h += String.fromCharCode(u), i += 3;
        continue;
      }
      if ((s & 240) === 224 && i + 6 < o && (l = parseInt(r.slice(i + 4, i + 6), 16), a = parseInt(r.slice(i + 7, i + 9), 16), (l & 192) === 128 && (a & 192) === 128)) {
        u = s << 12 & 61440 | l << 6 & 4032 | a & 63, u < 2048 || u >= 55296 && u <= 57343 ? h += "\uFFFD\uFFFD\uFFFD" : h += String.fromCharCode(u), i += 6;
        continue;
      }
      if ((s & 248) === 240 && i + 9 < o && (l = parseInt(r.slice(i + 4, i + 6), 16), a = parseInt(r.slice(i + 7, i + 9), 16), c = parseInt(r.slice(i + 10, i + 12), 16), (l & 192) === 128 && (a & 192) === 128 && (c & 192) === 128)) {
        u = s << 18 & 1835008 | l << 12 & 258048 | a << 6 & 4032 | c & 63, u < 65536 || u > 1114111 ? h += "\uFFFD\uFFFD\uFFFD\uFFFD" : (u -= 65536, h += String.fromCharCode(55296 + (u >> 10), 56320 + (u & 1023))), i += 9;
        continue;
      }
      h += "\uFFFD";
    }
    return h;
  });
}
al.defaultChars = ";/?:@&=+$,#";
al.componentChars = "";
var Ite = al, Nte = function(e) {
  var n = "";
  return n += e.protocol || "", n += e.slashes ? "//" : "", n += e.auth ? e.auth + "@" : "", e.hostname && e.hostname.indexOf(":") !== -1 ? n += "[" + e.hostname + "]" : n += e.hostname || "", n += e.port ? ":" + e.port : "", n += e.pathname || "", n += e.search || "", n += e.hash || "", n;
};
function ks() {
  this.protocol = null, this.slashes = null, this.auth = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.pathname = null;
}
var Pte = /^([a-z0-9.+-]+:)/i, Bte = /:[0-9]*$/, Fte = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/, qte = ["<", ">", '"', "`", " ", "\r", `
`, "	"], $te = ["{", "}", "|", "\\", "^", "`"].concat(qte), Hte = ["'"].concat($te), qf = ["%", "/", "?", ";", "#"].concat(Hte), $f = ["/", "?", "#"], zte = 255, Hf = /^[+a-z0-9A-Z_-]{0,63}$/, Vte = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, zf = {
  javascript: !0,
  "javascript:": !0
}, Vf = {
  http: !0,
  https: !0,
  ftp: !0,
  gopher: !0,
  file: !0,
  "http:": !0,
  "https:": !0,
  "ftp:": !0,
  "gopher:": !0,
  "file:": !0
};
function Ute(t, e) {
  if (t && t instanceof ks)
    return t;
  var n = new ks();
  return n.parse(t, e), n;
}
ks.prototype.parse = function(t, e) {
  var n, r, i, o, s, l = t;
  if (l = l.trim(), !e && t.split("#").length === 1) {
    var a = Fte.exec(l);
    if (a)
      return this.pathname = a[1], a[2] && (this.search = a[2]), this;
  }
  var c = Pte.exec(l);
  if (c && (c = c[0], i = c.toLowerCase(), this.protocol = c, l = l.substr(c.length)), (e || c || l.match(/^\/\/[^@\/]+@[^@\/]+/)) && (s = l.substr(0, 2) === "//", s && !(c && zf[c]) && (l = l.substr(2), this.slashes = !0)), !zf[c] && (s || c && !Vf[c])) {
    var u = -1;
    for (n = 0; n < $f.length; n++)
      o = l.indexOf($f[n]), o !== -1 && (u === -1 || o < u) && (u = o);
    var h, f;
    for (u === -1 ? f = l.lastIndexOf("@") : f = l.lastIndexOf("@", u), f !== -1 && (h = l.slice(0, f), l = l.slice(f + 1), this.auth = h), u = -1, n = 0; n < qf.length; n++)
      o = l.indexOf(qf[n]), o !== -1 && (u === -1 || o < u) && (u = o);
    u === -1 && (u = l.length), l[u - 1] === ":" && u--;
    var d = l.slice(0, u);
    l = l.slice(u), this.parseHost(d), this.hostname = this.hostname || "";
    var p = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
    if (!p) {
      var m = this.hostname.split(/\./);
      for (n = 0, r = m.length; n < r; n++) {
        var g = m[n];
        if (!!g && !g.match(Hf)) {
          for (var y = "", b = 0, k = g.length; b < k; b++)
            g.charCodeAt(b) > 127 ? y += "x" : y += g[b];
          if (!y.match(Hf)) {
            var x = m.slice(0, n), w = m.slice(n + 1), v = g.match(Vte);
            v && (x.push(v[1]), w.unshift(v[2])), w.length && (l = w.join(".") + l), this.hostname = x.join(".");
            break;
          }
        }
      }
    }
    this.hostname.length > zte && (this.hostname = ""), p && (this.hostname = this.hostname.substr(1, this.hostname.length - 2));
  }
  var C = l.indexOf("#");
  C !== -1 && (this.hash = l.substr(C), l = l.slice(0, C));
  var L = l.indexOf("?");
  return L !== -1 && (this.search = l.substr(L), l = l.slice(0, L)), l && (this.pathname = l), Vf[i] && this.hostname && !this.pathname && (this.pathname = ""), this;
};
ks.prototype.parseHost = function(t) {
  var e = Bte.exec(t);
  e && (e = e[0], e !== ":" && (this.port = e.substr(1)), t = t.substr(0, t.length - e.length)), t && (this.hostname = t);
};
var Wte = Ute;
ri.encode = Rte;
ri.decode = Ite;
ri.format = Nte;
ri.parse = Wte;
var Un = {}, ra, Uf;
function Kg() {
  return Uf || (Uf = 1, ra = /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/), ra;
}
var ia, Wf;
function Yg() {
  return Wf || (Wf = 1, ia = /[\0-\x1F\x7F-\x9F]/), ia;
}
var oa, jf;
function jte() {
  return jf || (jf = 1, oa = /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/), oa;
}
var sa, Gf;
function Zg() {
  return Gf || (Gf = 1, sa = /[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/), sa;
}
var Kf;
function Gte() {
  return Kf || (Kf = 1, Un.Any = Kg(), Un.Cc = Yg(), Un.Cf = jte(), Un.P = Eu, Un.Z = Zg()), Un;
}
(function(t) {
  function e(S) {
    return Object.prototype.toString.call(S);
  }
  function n(S) {
    return e(S) === "[object String]";
  }
  var r = Object.prototype.hasOwnProperty;
  function i(S, z) {
    return r.call(S, z);
  }
  function o(S) {
    var z = Array.prototype.slice.call(arguments, 1);
    return z.forEach(function($) {
      if (!!$) {
        if (typeof $ != "object")
          throw new TypeError($ + "must be object");
        Object.keys($).forEach(function(he) {
          S[he] = $[he];
        });
      }
    }), S;
  }
  function s(S, z, $) {
    return [].concat(S.slice(0, z), $, S.slice(z + 1));
  }
  function l(S) {
    return !(S >= 55296 && S <= 57343 || S >= 64976 && S <= 65007 || (S & 65535) === 65535 || (S & 65535) === 65534 || S >= 0 && S <= 8 || S === 11 || S >= 14 && S <= 31 || S >= 127 && S <= 159 || S > 1114111);
  }
  function a(S) {
    if (S > 65535) {
      S -= 65536;
      var z = 55296 + (S >> 10), $ = 56320 + (S & 1023);
      return String.fromCharCode(z, $);
    }
    return String.fromCharCode(S);
  }
  var c = /\\([!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~])/g, u = /&([a-z#][a-z0-9]{1,31});/gi, h = new RegExp(c.source + "|" + u.source, "gi"), f = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i, d = Su.exports;
  function p(S, z) {
    var $ = 0;
    return i(d, z) ? d[z] : z.charCodeAt(0) === 35 && f.test(z) && ($ = z[1].toLowerCase() === "x" ? parseInt(z.slice(2), 16) : parseInt(z.slice(1), 10), l($)) ? a($) : S;
  }
  function m(S) {
    return S.indexOf("\\") < 0 ? S : S.replace(c, "$1");
  }
  function g(S) {
    return S.indexOf("\\") < 0 && S.indexOf("&") < 0 ? S : S.replace(h, function(z, $, he) {
      return $ || p(z, he);
    });
  }
  var y = /[&<>"]/, b = /[&<>"]/g, k = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;"
  };
  function x(S) {
    return k[S];
  }
  function w(S) {
    return y.test(S) ? S.replace(b, x) : S;
  }
  var v = /[.?*+^$[\]\\(){}|-]/g;
  function C(S) {
    return S.replace(v, "\\$&");
  }
  function L(S) {
    switch (S) {
      case 9:
      case 32:
        return !0;
    }
    return !1;
  }
  function R(S) {
    if (S >= 8192 && S <= 8202)
      return !0;
    switch (S) {
      case 9:
      case 10:
      case 11:
      case 12:
      case 13:
      case 32:
      case 160:
      case 5760:
      case 8239:
      case 8287:
      case 12288:
        return !0;
    }
    return !1;
  }
  var T = Eu;
  function H(S) {
    return T.test(S);
  }
  function Q(S) {
    switch (S) {
      case 33:
      case 34:
      case 35:
      case 36:
      case 37:
      case 38:
      case 39:
      case 40:
      case 41:
      case 42:
      case 43:
      case 44:
      case 45:
      case 46:
      case 47:
      case 58:
      case 59:
      case 60:
      case 61:
      case 62:
      case 63:
      case 64:
      case 91:
      case 92:
      case 93:
      case 94:
      case 95:
      case 96:
      case 123:
      case 124:
      case 125:
      case 126:
        return !0;
      default:
        return !1;
    }
  }
  function G(S) {
    return S = S.trim().replace(/\s+/g, " "), "\u1E9E".toLowerCase() === "\u1E7E" && (S = S.replace(/ẞ/g, "\xDF")), S.toLowerCase().toUpperCase();
  }
  t.lib = {}, t.lib.mdurl = ri, t.lib.ucmicro = Gte(), t.assign = o, t.isString = n, t.has = i, t.unescapeMd = m, t.unescapeAll = g, t.isValidEntityCode = l, t.fromCodePoint = a, t.escapeHtml = w, t.arrayReplaceAt = s, t.isSpace = L, t.isWhiteSpace = R, t.isMdAsciiPunct = Q, t.isPunctChar = H, t.escapeRE = C, t.normalizeReference = G;
})(X);
var cl = {}, Kte = function(e, n, r) {
  var i, o, s, l, a = -1, c = e.posMax, u = e.pos;
  for (e.pos = n + 1, i = 1; e.pos < c; ) {
    if (s = e.src.charCodeAt(e.pos), s === 93 && (i--, i === 0)) {
      o = !0;
      break;
    }
    if (l = e.pos, e.md.inline.skipToken(e), s === 91) {
      if (l === e.pos - 1)
        i++;
      else if (r)
        return e.pos = u, -1;
    }
  }
  return o && (a = e.pos), e.pos = u, a;
}, Yf = X.unescapeAll, Yte = function(e, n, r) {
  var i, o, s = 0, l = n, a = {
    ok: !1,
    pos: 0,
    lines: 0,
    str: ""
  };
  if (e.charCodeAt(n) === 60) {
    for (n++; n < r; ) {
      if (i = e.charCodeAt(n), i === 10 || i === 60)
        return a;
      if (i === 62)
        return a.pos = n + 1, a.str = Yf(e.slice(l + 1, n)), a.ok = !0, a;
      if (i === 92 && n + 1 < r) {
        n += 2;
        continue;
      }
      n++;
    }
    return a;
  }
  for (o = 0; n < r && (i = e.charCodeAt(n), !(i === 32 || i < 32 || i === 127)); ) {
    if (i === 92 && n + 1 < r) {
      if (e.charCodeAt(n + 1) === 32)
        break;
      n += 2;
      continue;
    }
    if (i === 40 && (o++, o > 32))
      return a;
    if (i === 41) {
      if (o === 0)
        break;
      o--;
    }
    n++;
  }
  return l === n || o !== 0 || (a.str = Yf(e.slice(l, n)), a.lines = s, a.pos = n, a.ok = !0), a;
}, Zte = X.unescapeAll, Jte = function(e, n, r) {
  var i, o, s = 0, l = n, a = {
    ok: !1,
    pos: 0,
    lines: 0,
    str: ""
  };
  if (n >= r || (o = e.charCodeAt(n), o !== 34 && o !== 39 && o !== 40))
    return a;
  for (n++, o === 40 && (o = 41); n < r; ) {
    if (i = e.charCodeAt(n), i === o)
      return a.pos = n + 1, a.lines = s, a.str = Zte(e.slice(l + 1, n)), a.ok = !0, a;
    if (i === 40 && o === 41)
      return a;
    i === 10 ? s++ : i === 92 && n + 1 < r && (n++, e.charCodeAt(n) === 10 && s++), n++;
  }
  return a;
};
cl.parseLinkLabel = Kte;
cl.parseLinkDestination = Yte;
cl.parseLinkTitle = Jte;
var Xte = X.assign, Qte = X.unescapeAll, lr = X.escapeHtml, Zt = {};
Zt.code_inline = function(t, e, n, r, i) {
  var o = t[e];
  return "<code" + i.renderAttrs(o) + ">" + lr(t[e].content) + "</code>";
};
Zt.code_block = function(t, e, n, r, i) {
  var o = t[e];
  return "<pre" + i.renderAttrs(o) + "><code>" + lr(t[e].content) + `</code></pre>
`;
};
Zt.fence = function(t, e, n, r, i) {
  var o = t[e], s = o.info ? Qte(o.info).trim() : "", l = "", a = "", c, u, h, f, d;
  return s && (h = s.split(/(\s+)/g), l = h[0], a = h.slice(2).join("")), n.highlight ? c = n.highlight(o.content, l, a) || lr(o.content) : c = lr(o.content), c.indexOf("<pre") === 0 ? c + `
` : s ? (u = o.attrIndex("class"), f = o.attrs ? o.attrs.slice() : [], u < 0 ? f.push(["class", n.langPrefix + l]) : (f[u] = f[u].slice(), f[u][1] += " " + n.langPrefix + l), d = {
    attrs: f
  }, "<pre><code" + i.renderAttrs(d) + ">" + c + `</code></pre>
`) : "<pre><code" + i.renderAttrs(o) + ">" + c + `</code></pre>
`;
};
Zt.image = function(t, e, n, r, i) {
  var o = t[e];
  return o.attrs[o.attrIndex("alt")][1] = i.renderInlineAsText(o.children, n, r), i.renderToken(t, e, n);
};
Zt.hardbreak = function(t, e, n) {
  return n.xhtmlOut ? `<br />
` : `<br>
`;
};
Zt.softbreak = function(t, e, n) {
  return n.breaks ? n.xhtmlOut ? `<br />
` : `<br>
` : `
`;
};
Zt.text = function(t, e) {
  return lr(t[e].content);
};
Zt.html_block = function(t, e) {
  return t[e].content;
};
Zt.html_inline = function(t, e) {
  return t[e].content;
};
function ii() {
  this.rules = Xte({}, Zt);
}
ii.prototype.renderAttrs = function(e) {
  var n, r, i;
  if (!e.attrs)
    return "";
  for (i = "", n = 0, r = e.attrs.length; n < r; n++)
    i += " " + lr(e.attrs[n][0]) + '="' + lr(e.attrs[n][1]) + '"';
  return i;
};
ii.prototype.renderToken = function(e, n, r) {
  var i, o = "", s = !1, l = e[n];
  return l.hidden ? "" : (l.block && l.nesting !== -1 && n && e[n - 1].hidden && (o += `
`), o += (l.nesting === -1 ? "</" : "<") + l.tag, o += this.renderAttrs(l), l.nesting === 0 && r.xhtmlOut && (o += " /"), l.block && (s = !0, l.nesting === 1 && n + 1 < e.length && (i = e[n + 1], (i.type === "inline" || i.hidden || i.nesting === -1 && i.tag === l.tag) && (s = !1))), o += s ? `>
` : ">", o);
};
ii.prototype.renderInline = function(t, e, n) {
  for (var r, i = "", o = this.rules, s = 0, l = t.length; s < l; s++)
    r = t[s].type, typeof o[r] < "u" ? i += o[r](t, s, e, n, this) : i += this.renderToken(t, s, e);
  return i;
};
ii.prototype.renderInlineAsText = function(t, e, n) {
  for (var r = "", i = 0, o = t.length; i < o; i++)
    t[i].type === "text" ? r += t[i].content : t[i].type === "image" ? r += this.renderInlineAsText(t[i].children, e, n) : t[i].type === "softbreak" && (r += `
`);
  return r;
};
ii.prototype.render = function(t, e, n) {
  var r, i, o, s = "", l = this.rules;
  for (r = 0, i = t.length; r < i; r++)
    o = t[r].type, o === "inline" ? s += this.renderInline(t[r].children, e, n) : typeof l[o] < "u" ? s += l[t[r].type](t, r, e, n, this) : s += this.renderToken(t, r, e, n);
  return s;
};
var ene = ii;
function Ot() {
  this.__rules__ = [], this.__cache__ = null;
}
Ot.prototype.__find__ = function(t) {
  for (var e = 0; e < this.__rules__.length; e++)
    if (this.__rules__[e].name === t)
      return e;
  return -1;
};
Ot.prototype.__compile__ = function() {
  var t = this, e = [""];
  t.__rules__.forEach(function(n) {
    !n.enabled || n.alt.forEach(function(r) {
      e.indexOf(r) < 0 && e.push(r);
    });
  }), t.__cache__ = {}, e.forEach(function(n) {
    t.__cache__[n] = [], t.__rules__.forEach(function(r) {
      !r.enabled || n && r.alt.indexOf(n) < 0 || t.__cache__[n].push(r.fn);
    });
  });
};
Ot.prototype.at = function(t, e, n) {
  var r = this.__find__(t), i = n || {};
  if (r === -1)
    throw new Error("Parser rule not found: " + t);
  this.__rules__[r].fn = e, this.__rules__[r].alt = i.alt || [], this.__cache__ = null;
};
Ot.prototype.before = function(t, e, n, r) {
  var i = this.__find__(t), o = r || {};
  if (i === -1)
    throw new Error("Parser rule not found: " + t);
  this.__rules__.splice(i, 0, {
    name: e,
    enabled: !0,
    fn: n,
    alt: o.alt || []
  }), this.__cache__ = null;
};
Ot.prototype.after = function(t, e, n, r) {
  var i = this.__find__(t), o = r || {};
  if (i === -1)
    throw new Error("Parser rule not found: " + t);
  this.__rules__.splice(i + 1, 0, {
    name: e,
    enabled: !0,
    fn: n,
    alt: o.alt || []
  }), this.__cache__ = null;
};
Ot.prototype.push = function(t, e, n) {
  var r = n || {};
  this.__rules__.push({
    name: t,
    enabled: !0,
    fn: e,
    alt: r.alt || []
  }), this.__cache__ = null;
};
Ot.prototype.enable = function(t, e) {
  Array.isArray(t) || (t = [t]);
  var n = [];
  return t.forEach(function(r) {
    var i = this.__find__(r);
    if (i < 0) {
      if (e)
        return;
      throw new Error("Rules manager: invalid rule name " + r);
    }
    this.__rules__[i].enabled = !0, n.push(r);
  }, this), this.__cache__ = null, n;
};
Ot.prototype.enableOnly = function(t, e) {
  Array.isArray(t) || (t = [t]), this.__rules__.forEach(function(n) {
    n.enabled = !1;
  }), this.enable(t, e);
};
Ot.prototype.disable = function(t, e) {
  Array.isArray(t) || (t = [t]);
  var n = [];
  return t.forEach(function(r) {
    var i = this.__find__(r);
    if (i < 0) {
      if (e)
        return;
      throw new Error("Rules manager: invalid rule name " + r);
    }
    this.__rules__[i].enabled = !1, n.push(r);
  }, this), this.__cache__ = null, n;
};
Ot.prototype.getRules = function(t) {
  return this.__cache__ === null && this.__compile__(), this.__cache__[t] || [];
};
var Tu = Ot, tne = /\r\n?|\n/g, nne = /\0/g, rne = function(e) {
  var n;
  n = e.src.replace(tne, `
`), n = n.replace(nne, "\uFFFD"), e.src = n;
}, ine = function(e) {
  var n;
  e.inlineMode ? (n = new e.Token("inline", "", 0), n.content = e.src, n.map = [0, 1], n.children = [], e.tokens.push(n)) : e.md.block.parse(e.src, e.md, e.env, e.tokens);
}, one = function(e) {
  var n = e.tokens, r, i, o;
  for (i = 0, o = n.length; i < o; i++)
    r = n[i], r.type === "inline" && e.md.inline.parse(r.content, e.md, e.env, r.children);
}, sne = X.arrayReplaceAt;
function lne(t) {
  return /^<a[>\s]/i.test(t);
}
function ane(t) {
  return /^<\/a\s*>/i.test(t);
}
var cne = function(e) {
  var n, r, i, o, s, l, a, c, u, h, f, d, p, m, g, y, b = e.tokens, k;
  if (!!e.md.options.linkify) {
    for (r = 0, i = b.length; r < i; r++)
      if (!(b[r].type !== "inline" || !e.md.linkify.pretest(b[r].content)))
        for (o = b[r].children, p = 0, n = o.length - 1; n >= 0; n--) {
          if (l = o[n], l.type === "link_close") {
            for (n--; o[n].level !== l.level && o[n].type !== "link_open"; )
              n--;
            continue;
          }
          if (l.type === "html_inline" && (lne(l.content) && p > 0 && p--, ane(l.content) && p++), !(p > 0) && l.type === "text" && e.md.linkify.test(l.content)) {
            for (u = l.content, k = e.md.linkify.match(u), a = [], d = l.level, f = 0, c = 0; c < k.length; c++)
              m = k[c].url, g = e.md.normalizeLink(m), e.md.validateLink(g) && (y = k[c].text, k[c].schema ? k[c].schema === "mailto:" && !/^mailto:/i.test(y) ? y = e.md.normalizeLinkText("mailto:" + y).replace(/^mailto:/, "") : y = e.md.normalizeLinkText(y) : y = e.md.normalizeLinkText("http://" + y).replace(/^http:\/\//, ""), h = k[c].index, h > f && (s = new e.Token("text", "", 0), s.content = u.slice(f, h), s.level = d, a.push(s)), s = new e.Token("link_open", "a", 1), s.attrs = [["href", g]], s.level = d++, s.markup = "linkify", s.info = "auto", a.push(s), s = new e.Token("text", "", 0), s.content = y, s.level = d, a.push(s), s = new e.Token("link_close", "a", -1), s.level = --d, s.markup = "linkify", s.info = "auto", a.push(s), f = k[c].lastIndex);
            f < u.length && (s = new e.Token("text", "", 0), s.content = u.slice(f), s.level = d, a.push(s)), b[r].children = o = sne(o, n, a);
          }
        }
  }
}, Jg = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/, une = /\((c|tm|r|p)\)/i, hne = /\((c|tm|r|p)\)/ig, fne = {
  c: "\xA9",
  r: "\xAE",
  p: "\xA7",
  tm: "\u2122"
};
function dne(t, e) {
  return fne[e.toLowerCase()];
}
function pne(t) {
  var e, n, r = 0;
  for (e = t.length - 1; e >= 0; e--)
    n = t[e], n.type === "text" && !r && (n.content = n.content.replace(hne, dne)), n.type === "link_open" && n.info === "auto" && r--, n.type === "link_close" && n.info === "auto" && r++;
}
function mne(t) {
  var e, n, r = 0;
  for (e = t.length - 1; e >= 0; e--)
    n = t[e], n.type === "text" && !r && Jg.test(n.content) && (n.content = n.content.replace(/\+-/g, "\xB1").replace(/\.{2,}/g, "\u2026").replace(/([?!])…/g, "$1..").replace(/([?!]){4,}/g, "$1$1$1").replace(/,{2,}/g, ",").replace(/(^|[^-])---(?=[^-]|$)/mg, "$1\u2014").replace(/(^|\s)--(?=\s|$)/mg, "$1\u2013").replace(/(^|[^-\s])--(?=[^-\s]|$)/mg, "$1\u2013")), n.type === "link_open" && n.info === "auto" && r--, n.type === "link_close" && n.info === "auto" && r++;
}
var gne = function(e) {
  var n;
  if (!!e.md.options.typographer)
    for (n = e.tokens.length - 1; n >= 0; n--)
      e.tokens[n].type === "inline" && (une.test(e.tokens[n].content) && pne(e.tokens[n].children), Jg.test(e.tokens[n].content) && mne(e.tokens[n].children));
}, Zf = X.isWhiteSpace, Jf = X.isPunctChar, Xf = X.isMdAsciiPunct, yne = /['"]/, Qf = /['"]/g, ed = "\u2019";
function wo(t, e, n) {
  return t.substr(0, e) + n + t.substr(e + 1);
}
function bne(t, e) {
  var n, r, i, o, s, l, a, c, u, h, f, d, p, m, g, y, b, k, x, w, v;
  for (x = [], n = 0; n < t.length; n++) {
    for (r = t[n], a = t[n].level, b = x.length - 1; b >= 0 && !(x[b].level <= a); b--)
      ;
    if (x.length = b + 1, r.type !== "text")
      continue;
    i = r.content, s = 0, l = i.length;
    e:
      for (; s < l && (Qf.lastIndex = s, o = Qf.exec(i), !!o); ) {
        if (g = y = !0, s = o.index + 1, k = o[0] === "'", u = 32, o.index - 1 >= 0)
          u = i.charCodeAt(o.index - 1);
        else
          for (b = n - 1; b >= 0 && !(t[b].type === "softbreak" || t[b].type === "hardbreak"); b--)
            if (!!t[b].content) {
              u = t[b].content.charCodeAt(t[b].content.length - 1);
              break;
            }
        if (h = 32, s < l)
          h = i.charCodeAt(s);
        else
          for (b = n + 1; b < t.length && !(t[b].type === "softbreak" || t[b].type === "hardbreak"); b++)
            if (!!t[b].content) {
              h = t[b].content.charCodeAt(0);
              break;
            }
        if (f = Xf(u) || Jf(String.fromCharCode(u)), d = Xf(h) || Jf(String.fromCharCode(h)), p = Zf(u), m = Zf(h), m ? g = !1 : d && (p || f || (g = !1)), p ? y = !1 : f && (m || d || (y = !1)), h === 34 && o[0] === '"' && u >= 48 && u <= 57 && (y = g = !1), g && y && (g = f, y = d), !g && !y) {
          k && (r.content = wo(r.content, o.index, ed));
          continue;
        }
        if (y) {
          for (b = x.length - 1; b >= 0 && (c = x[b], !(x[b].level < a)); b--)
            if (c.single === k && x[b].level === a) {
              c = x[b], k ? (w = e.md.options.quotes[2], v = e.md.options.quotes[3]) : (w = e.md.options.quotes[0], v = e.md.options.quotes[1]), r.content = wo(r.content, o.index, v), t[c.token].content = wo(
                t[c.token].content,
                c.pos,
                w
              ), s += v.length - 1, c.token === n && (s += w.length - 1), i = r.content, l = i.length, x.length = b;
              continue e;
            }
        }
        g ? x.push({
          token: n,
          pos: o.index,
          single: k,
          level: a
        }) : y && k && (r.content = wo(r.content, o.index, ed));
      }
  }
}
var vne = function(e) {
  var n;
  if (!!e.md.options.typographer)
    for (n = e.tokens.length - 1; n >= 0; n--)
      e.tokens[n].type !== "inline" || !yne.test(e.tokens[n].content) || bne(e.tokens[n].children, e);
};
function oi(t, e, n) {
  this.type = t, this.tag = e, this.attrs = null, this.map = null, this.nesting = n, this.level = 0, this.children = null, this.content = "", this.markup = "", this.info = "", this.meta = null, this.block = !1, this.hidden = !1;
}
oi.prototype.attrIndex = function(e) {
  var n, r, i;
  if (!this.attrs)
    return -1;
  for (n = this.attrs, r = 0, i = n.length; r < i; r++)
    if (n[r][0] === e)
      return r;
  return -1;
};
oi.prototype.attrPush = function(e) {
  this.attrs ? this.attrs.push(e) : this.attrs = [e];
};
oi.prototype.attrSet = function(e, n) {
  var r = this.attrIndex(e), i = [e, n];
  r < 0 ? this.attrPush(i) : this.attrs[r] = i;
};
oi.prototype.attrGet = function(e) {
  var n = this.attrIndex(e), r = null;
  return n >= 0 && (r = this.attrs[n][1]), r;
};
oi.prototype.attrJoin = function(e, n) {
  var r = this.attrIndex(e);
  r < 0 ? this.attrPush([e, n]) : this.attrs[r][1] = this.attrs[r][1] + " " + n;
};
var Du = oi, xne = Du;
function Xg(t, e, n) {
  this.src = t, this.env = n, this.tokens = [], this.inlineMode = !1, this.md = e;
}
Xg.prototype.Token = xne;
var _ne = Xg, kne = Tu, la = [
  ["normalize", rne],
  ["block", ine],
  ["inline", one],
  ["linkify", cne],
  ["replacements", gne],
  ["smartquotes", vne]
];
function Mu() {
  this.ruler = new kne();
  for (var t = 0; t < la.length; t++)
    this.ruler.push(la[t][0], la[t][1]);
}
Mu.prototype.process = function(t) {
  var e, n, r;
  for (r = this.ruler.getRules(""), e = 0, n = r.length; e < n; e++)
    r[e](t);
};
Mu.prototype.State = _ne;
var wne = Mu, aa = X.isSpace;
function ca(t, e) {
  var n = t.bMarks[e] + t.tShift[e], r = t.eMarks[e];
  return t.src.substr(n, r - n);
}
function td(t) {
  var e = [], n = 0, r = t.length, i, o = !1, s = 0, l = "";
  for (i = t.charCodeAt(n); n < r; )
    i === 124 && (o ? (l += t.substring(s, n - 1), s = n) : (e.push(l + t.substring(s, n)), l = "", s = n + 1)), o = i === 92, n++, i = t.charCodeAt(n);
  return e.push(l + t.substring(s)), e;
}
var Cne = function(e, n, r, i) {
  var o, s, l, a, c, u, h, f, d, p, m, g, y, b, k, x, w, v;
  if (n + 2 > r || (u = n + 1, e.sCount[u] < e.blkIndent) || e.sCount[u] - e.blkIndent >= 4 || (l = e.bMarks[u] + e.tShift[u], l >= e.eMarks[u]) || (w = e.src.charCodeAt(l++), w !== 124 && w !== 45 && w !== 58) || l >= e.eMarks[u] || (v = e.src.charCodeAt(l++), v !== 124 && v !== 45 && v !== 58 && !aa(v)) || w === 45 && aa(v))
    return !1;
  for (; l < e.eMarks[u]; ) {
    if (o = e.src.charCodeAt(l), o !== 124 && o !== 45 && o !== 58 && !aa(o))
      return !1;
    l++;
  }
  for (s = ca(e, n + 1), h = s.split("|"), p = [], a = 0; a < h.length; a++) {
    if (m = h[a].trim(), !m) {
      if (a === 0 || a === h.length - 1)
        continue;
      return !1;
    }
    if (!/^:?-+:?$/.test(m))
      return !1;
    m.charCodeAt(m.length - 1) === 58 ? p.push(m.charCodeAt(0) === 58 ? "center" : "right") : m.charCodeAt(0) === 58 ? p.push("left") : p.push("");
  }
  if (s = ca(e, n).trim(), s.indexOf("|") === -1 || e.sCount[n] - e.blkIndent >= 4 || (h = td(s), h.length && h[0] === "" && h.shift(), h.length && h[h.length - 1] === "" && h.pop(), f = h.length, f === 0 || f !== p.length))
    return !1;
  if (i)
    return !0;
  for (b = e.parentType, e.parentType = "table", x = e.md.block.ruler.getRules("blockquote"), d = e.push("table_open", "table", 1), d.map = g = [n, 0], d = e.push("thead_open", "thead", 1), d.map = [n, n + 1], d = e.push("tr_open", "tr", 1), d.map = [n, n + 1], a = 0; a < h.length; a++)
    d = e.push("th_open", "th", 1), p[a] && (d.attrs = [["style", "text-align:" + p[a]]]), d = e.push("inline", "", 0), d.content = h[a].trim(), d.children = [], d = e.push("th_close", "th", -1);
  for (d = e.push("tr_close", "tr", -1), d = e.push("thead_close", "thead", -1), u = n + 2; u < r && !(e.sCount[u] < e.blkIndent); u++) {
    for (k = !1, a = 0, c = x.length; a < c; a++)
      if (x[a](e, u, r, !0)) {
        k = !0;
        break;
      }
    if (k || (s = ca(e, u).trim(), !s) || e.sCount[u] - e.blkIndent >= 4)
      break;
    for (h = td(s), h.length && h[0] === "" && h.shift(), h.length && h[h.length - 1] === "" && h.pop(), u === n + 2 && (d = e.push("tbody_open", "tbody", 1), d.map = y = [n + 2, 0]), d = e.push("tr_open", "tr", 1), d.map = [u, u + 1], a = 0; a < f; a++)
      d = e.push("td_open", "td", 1), p[a] && (d.attrs = [["style", "text-align:" + p[a]]]), d = e.push("inline", "", 0), d.content = h[a] ? h[a].trim() : "", d.children = [], d = e.push("td_close", "td", -1);
    d = e.push("tr_close", "tr", -1);
  }
  return y && (d = e.push("tbody_close", "tbody", -1), y[1] = u), d = e.push("table_close", "table", -1), g[1] = u, e.parentType = b, e.line = u, !0;
}, Ane = function(e, n, r) {
  var i, o, s;
  if (e.sCount[n] - e.blkIndent < 4)
    return !1;
  for (o = i = n + 1; i < r; ) {
    if (e.isEmpty(i)) {
      i++;
      continue;
    }
    if (e.sCount[i] - e.blkIndent >= 4) {
      i++, o = i;
      continue;
    }
    break;
  }
  return e.line = o, s = e.push("code_block", "code", 0), s.content = e.getLines(n, o, 4 + e.blkIndent, !1) + `
`, s.map = [n, e.line], !0;
}, Sne = function(e, n, r, i) {
  var o, s, l, a, c, u, h, f = !1, d = e.bMarks[n] + e.tShift[n], p = e.eMarks[n];
  if (e.sCount[n] - e.blkIndent >= 4 || d + 3 > p || (o = e.src.charCodeAt(d), o !== 126 && o !== 96) || (c = d, d = e.skipChars(d, o), s = d - c, s < 3) || (h = e.src.slice(c, d), l = e.src.slice(d, p), o === 96 && l.indexOf(String.fromCharCode(o)) >= 0))
    return !1;
  if (i)
    return !0;
  for (a = n; a++, !(a >= r || (d = c = e.bMarks[a] + e.tShift[a], p = e.eMarks[a], d < p && e.sCount[a] < e.blkIndent)); )
    if (e.src.charCodeAt(d) === o && !(e.sCount[a] - e.blkIndent >= 4) && (d = e.skipChars(d, o), !(d - c < s) && (d = e.skipSpaces(d), !(d < p)))) {
      f = !0;
      break;
    }
  return s = e.sCount[n], e.line = a + (f ? 1 : 0), u = e.push("fence", "code", 0), u.info = l, u.content = e.getLines(n + 1, a, s, !0), u.markup = h, u.map = [n, e.line], !0;
}, nd = X.isSpace, Ene = function(e, n, r, i) {
  var o, s, l, a, c, u, h, f, d, p, m, g, y, b, k, x, w, v, C, L, R = e.lineMax, T = e.bMarks[n] + e.tShift[n], H = e.eMarks[n];
  if (e.sCount[n] - e.blkIndent >= 4 || e.src.charCodeAt(T++) !== 62)
    return !1;
  if (i)
    return !0;
  for (a = d = e.sCount[n] + 1, e.src.charCodeAt(T) === 32 ? (T++, a++, d++, o = !1, x = !0) : e.src.charCodeAt(T) === 9 ? (x = !0, (e.bsCount[n] + d) % 4 === 3 ? (T++, a++, d++, o = !1) : o = !0) : x = !1, p = [e.bMarks[n]], e.bMarks[n] = T; T < H && (s = e.src.charCodeAt(T), nd(s)); ) {
    s === 9 ? d += 4 - (d + e.bsCount[n] + (o ? 1 : 0)) % 4 : d++;
    T++;
  }
  for (m = [e.bsCount[n]], e.bsCount[n] = e.sCount[n] + 1 + (x ? 1 : 0), u = T >= H, b = [e.sCount[n]], e.sCount[n] = d - a, k = [e.tShift[n]], e.tShift[n] = T - e.bMarks[n], v = e.md.block.ruler.getRules("blockquote"), y = e.parentType, e.parentType = "blockquote", f = n + 1; f < r && (L = e.sCount[f] < e.blkIndent, T = e.bMarks[f] + e.tShift[f], H = e.eMarks[f], !(T >= H)); f++) {
    if (e.src.charCodeAt(T++) === 62 && !L) {
      for (a = d = e.sCount[f] + 1, e.src.charCodeAt(T) === 32 ? (T++, a++, d++, o = !1, x = !0) : e.src.charCodeAt(T) === 9 ? (x = !0, (e.bsCount[f] + d) % 4 === 3 ? (T++, a++, d++, o = !1) : o = !0) : x = !1, p.push(e.bMarks[f]), e.bMarks[f] = T; T < H && (s = e.src.charCodeAt(T), nd(s)); ) {
        s === 9 ? d += 4 - (d + e.bsCount[f] + (o ? 1 : 0)) % 4 : d++;
        T++;
      }
      u = T >= H, m.push(e.bsCount[f]), e.bsCount[f] = e.sCount[f] + 1 + (x ? 1 : 0), b.push(e.sCount[f]), e.sCount[f] = d - a, k.push(e.tShift[f]), e.tShift[f] = T - e.bMarks[f];
      continue;
    }
    if (u)
      break;
    for (w = !1, l = 0, c = v.length; l < c; l++)
      if (v[l](e, f, r, !0)) {
        w = !0;
        break;
      }
    if (w) {
      e.lineMax = f, e.blkIndent !== 0 && (p.push(e.bMarks[f]), m.push(e.bsCount[f]), k.push(e.tShift[f]), b.push(e.sCount[f]), e.sCount[f] -= e.blkIndent);
      break;
    }
    p.push(e.bMarks[f]), m.push(e.bsCount[f]), k.push(e.tShift[f]), b.push(e.sCount[f]), e.sCount[f] = -1;
  }
  for (g = e.blkIndent, e.blkIndent = 0, C = e.push("blockquote_open", "blockquote", 1), C.markup = ">", C.map = h = [n, 0], e.md.block.tokenize(e, n, f), C = e.push("blockquote_close", "blockquote", -1), C.markup = ">", e.lineMax = R, e.parentType = y, h[1] = e.line, l = 0; l < k.length; l++)
    e.bMarks[l + n] = p[l], e.tShift[l + n] = k[l], e.sCount[l + n] = b[l], e.bsCount[l + n] = m[l];
  return e.blkIndent = g, !0;
}, Tne = X.isSpace, Dne = function(e, n, r, i) {
  var o, s, l, a, c = e.bMarks[n] + e.tShift[n], u = e.eMarks[n];
  if (e.sCount[n] - e.blkIndent >= 4 || (o = e.src.charCodeAt(c++), o !== 42 && o !== 45 && o !== 95))
    return !1;
  for (s = 1; c < u; ) {
    if (l = e.src.charCodeAt(c++), l !== o && !Tne(l))
      return !1;
    l === o && s++;
  }
  return s < 3 ? !1 : (i || (e.line = n + 1, a = e.push("hr", "hr", 0), a.map = [n, e.line], a.markup = Array(s + 1).join(String.fromCharCode(o))), !0);
}, Qg = X.isSpace;
function rd(t, e) {
  var n, r, i, o;
  return r = t.bMarks[e] + t.tShift[e], i = t.eMarks[e], n = t.src.charCodeAt(r++), n !== 42 && n !== 45 && n !== 43 || r < i && (o = t.src.charCodeAt(r), !Qg(o)) ? -1 : r;
}
function id(t, e) {
  var n, r = t.bMarks[e] + t.tShift[e], i = r, o = t.eMarks[e];
  if (i + 1 >= o || (n = t.src.charCodeAt(i++), n < 48 || n > 57))
    return -1;
  for (; ; ) {
    if (i >= o)
      return -1;
    if (n = t.src.charCodeAt(i++), n >= 48 && n <= 57) {
      if (i - r >= 10)
        return -1;
      continue;
    }
    if (n === 41 || n === 46)
      break;
    return -1;
  }
  return i < o && (n = t.src.charCodeAt(i), !Qg(n)) ? -1 : i;
}
function Mne(t, e) {
  var n, r, i = t.level + 2;
  for (n = e + 2, r = t.tokens.length - 2; n < r; n++)
    t.tokens[n].level === i && t.tokens[n].type === "paragraph_open" && (t.tokens[n + 2].hidden = !0, t.tokens[n].hidden = !0, n += 2);
}
var One = function(e, n, r, i) {
  var o, s, l, a, c, u, h, f, d, p, m, g, y, b, k, x, w, v, C, L, R, T, H, Q, G, S, z, $, he = !1, ie = !0;
  if (e.sCount[n] - e.blkIndent >= 4 || e.listIndent >= 0 && e.sCount[n] - e.listIndent >= 4 && e.sCount[n] < e.blkIndent)
    return !1;
  if (i && e.parentType === "paragraph" && e.sCount[n] >= e.blkIndent && (he = !0), (H = id(e, n)) >= 0) {
    if (h = !0, G = e.bMarks[n] + e.tShift[n], y = Number(e.src.slice(G, H - 1)), he && y !== 1)
      return !1;
  } else if ((H = rd(e, n)) >= 0)
    h = !1;
  else
    return !1;
  if (he && e.skipSpaces(H) >= e.eMarks[n])
    return !1;
  if (g = e.src.charCodeAt(H - 1), i)
    return !0;
  for (m = e.tokens.length, h ? ($ = e.push("ordered_list_open", "ol", 1), y !== 1 && ($.attrs = [["start", y]])) : $ = e.push("bullet_list_open", "ul", 1), $.map = p = [n, 0], $.markup = String.fromCharCode(g), k = n, Q = !1, z = e.md.block.ruler.getRules("list"), v = e.parentType, e.parentType = "list"; k < r; ) {
    for (T = H, b = e.eMarks[k], u = x = e.sCount[k] + H - (e.bMarks[n] + e.tShift[n]); T < b; ) {
      if (o = e.src.charCodeAt(T), o === 9)
        x += 4 - (x + e.bsCount[k]) % 4;
      else if (o === 32)
        x++;
      else
        break;
      T++;
    }
    if (s = T, s >= b ? c = 1 : c = x - u, c > 4 && (c = 1), a = u + c, $ = e.push("list_item_open", "li", 1), $.markup = String.fromCharCode(g), $.map = f = [n, 0], h && ($.info = e.src.slice(G, H - 1)), R = e.tight, L = e.tShift[n], C = e.sCount[n], w = e.listIndent, e.listIndent = e.blkIndent, e.blkIndent = a, e.tight = !0, e.tShift[n] = s - e.bMarks[n], e.sCount[n] = x, s >= b && e.isEmpty(n + 1) ? e.line = Math.min(e.line + 2, r) : e.md.block.tokenize(e, n, r, !0), (!e.tight || Q) && (ie = !1), Q = e.line - n > 1 && e.isEmpty(e.line - 1), e.blkIndent = e.listIndent, e.listIndent = w, e.tShift[n] = L, e.sCount[n] = C, e.tight = R, $ = e.push("list_item_close", "li", -1), $.markup = String.fromCharCode(g), k = n = e.line, f[1] = k, s = e.bMarks[n], k >= r || e.sCount[k] < e.blkIndent || e.sCount[n] - e.blkIndent >= 4)
      break;
    for (S = !1, l = 0, d = z.length; l < d; l++)
      if (z[l](e, k, r, !0)) {
        S = !0;
        break;
      }
    if (S)
      break;
    if (h) {
      if (H = id(e, k), H < 0)
        break;
      G = e.bMarks[k] + e.tShift[k];
    } else if (H = rd(e, k), H < 0)
      break;
    if (g !== e.src.charCodeAt(H - 1))
      break;
  }
  return h ? $ = e.push("ordered_list_close", "ol", -1) : $ = e.push("bullet_list_close", "ul", -1), $.markup = String.fromCharCode(g), p[1] = k, e.line = k, e.parentType = v, ie && Mne(e, m), !0;
}, Rne = X.normalizeReference, Co = X.isSpace, Lne = function(e, n, r, i) {
  var o, s, l, a, c, u, h, f, d, p, m, g, y, b, k, x, w = 0, v = e.bMarks[n] + e.tShift[n], C = e.eMarks[n], L = n + 1;
  if (e.sCount[n] - e.blkIndent >= 4 || e.src.charCodeAt(v) !== 91)
    return !1;
  for (; ++v < C; )
    if (e.src.charCodeAt(v) === 93 && e.src.charCodeAt(v - 1) !== 92) {
      if (v + 1 === C || e.src.charCodeAt(v + 1) !== 58)
        return !1;
      break;
    }
  for (a = e.lineMax, k = e.md.block.ruler.getRules("reference"), p = e.parentType, e.parentType = "reference"; L < a && !e.isEmpty(L); L++)
    if (!(e.sCount[L] - e.blkIndent > 3) && !(e.sCount[L] < 0)) {
      for (b = !1, u = 0, h = k.length; u < h; u++)
        if (k[u](e, L, a, !0)) {
          b = !0;
          break;
        }
      if (b)
        break;
    }
  for (y = e.getLines(n, L, e.blkIndent, !1).trim(), C = y.length, v = 1; v < C; v++) {
    if (o = y.charCodeAt(v), o === 91)
      return !1;
    if (o === 93) {
      d = v;
      break;
    } else
      o === 10 ? w++ : o === 92 && (v++, v < C && y.charCodeAt(v) === 10 && w++);
  }
  if (d < 0 || y.charCodeAt(d + 1) !== 58)
    return !1;
  for (v = d + 2; v < C; v++)
    if (o = y.charCodeAt(v), o === 10)
      w++;
    else if (!Co(o))
      break;
  if (m = e.md.helpers.parseLinkDestination(y, v, C), !m.ok || (c = e.md.normalizeLink(m.str), !e.md.validateLink(c)))
    return !1;
  for (v = m.pos, w += m.lines, s = v, l = w, g = v; v < C; v++)
    if (o = y.charCodeAt(v), o === 10)
      w++;
    else if (!Co(o))
      break;
  for (m = e.md.helpers.parseLinkTitle(y, v, C), v < C && g !== v && m.ok ? (x = m.str, v = m.pos, w += m.lines) : (x = "", v = s, w = l); v < C && (o = y.charCodeAt(v), !!Co(o)); )
    v++;
  if (v < C && y.charCodeAt(v) !== 10 && x)
    for (x = "", v = s, w = l; v < C && (o = y.charCodeAt(v), !!Co(o)); )
      v++;
  return v < C && y.charCodeAt(v) !== 10 || (f = Rne(y.slice(1, d)), !f) ? !1 : (i || (typeof e.env.references > "u" && (e.env.references = {}), typeof e.env.references[f] > "u" && (e.env.references[f] = { title: x, href: c }), e.parentType = p, e.line = n + w + 1), !0);
}, Ine = [
  "address",
  "article",
  "aside",
  "base",
  "basefont",
  "blockquote",
  "body",
  "caption",
  "center",
  "col",
  "colgroup",
  "dd",
  "details",
  "dialog",
  "dir",
  "div",
  "dl",
  "dt",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "frame",
  "frameset",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hr",
  "html",
  "iframe",
  "legend",
  "li",
  "link",
  "main",
  "menu",
  "menuitem",
  "nav",
  "noframes",
  "ol",
  "optgroup",
  "option",
  "p",
  "param",
  "section",
  "source",
  "summary",
  "table",
  "tbody",
  "td",
  "tfoot",
  "th",
  "thead",
  "title",
  "tr",
  "track",
  "ul"
], ul = {}, Nne = "[a-zA-Z_:][a-zA-Z0-9:._-]*", Pne = "[^\"'=<>`\\x00-\\x20]+", Bne = "'[^']*'", Fne = '"[^"]*"', qne = "(?:" + Pne + "|" + Bne + "|" + Fne + ")", $ne = "(?:\\s+" + Nne + "(?:\\s*=\\s*" + qne + ")?)", e0 = "<[A-Za-z][A-Za-z0-9\\-]*" + $ne + "*\\s*\\/?>", t0 = "<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>", Hne = "<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->", zne = "<[?][\\s\\S]*?[?]>", Vne = "<![A-Z]+\\s+[^>]*>", Une = "<!\\[CDATA\\[[\\s\\S]*?\\]\\]>", Wne = new RegExp("^(?:" + e0 + "|" + t0 + "|" + Hne + "|" + zne + "|" + Vne + "|" + Une + ")"), jne = new RegExp("^(?:" + e0 + "|" + t0 + ")");
ul.HTML_TAG_RE = Wne;
ul.HTML_OPEN_CLOSE_TAG_RE = jne;
var Gne = Ine, Kne = ul.HTML_OPEN_CLOSE_TAG_RE, kr = [
  [/^<(script|pre|style|textarea)(?=(\s|>|$))/i, /<\/(script|pre|style|textarea)>/i, !0],
  [/^<!--/, /-->/, !0],
  [/^<\?/, /\?>/, !0],
  [/^<![A-Z]/, />/, !0],
  [/^<!\[CDATA\[/, /\]\]>/, !0],
  [new RegExp("^</?(" + Gne.join("|") + ")(?=(\\s|/?>|$))", "i"), /^$/, !0],
  [new RegExp(Kne.source + "\\s*$"), /^$/, !1]
], Yne = function(e, n, r, i) {
  var o, s, l, a, c = e.bMarks[n] + e.tShift[n], u = e.eMarks[n];
  if (e.sCount[n] - e.blkIndent >= 4 || !e.md.options.html || e.src.charCodeAt(c) !== 60)
    return !1;
  for (a = e.src.slice(c, u), o = 0; o < kr.length && !kr[o][0].test(a); o++)
    ;
  if (o === kr.length)
    return !1;
  if (i)
    return kr[o][2];
  if (s = n + 1, !kr[o][1].test(a)) {
    for (; s < r && !(e.sCount[s] < e.blkIndent); s++)
      if (c = e.bMarks[s] + e.tShift[s], u = e.eMarks[s], a = e.src.slice(c, u), kr[o][1].test(a)) {
        a.length !== 0 && s++;
        break;
      }
  }
  return e.line = s, l = e.push("html_block", "", 0), l.map = [n, s], l.content = e.getLines(n, s, e.blkIndent, !0), !0;
}, od = X.isSpace, Zne = function(e, n, r, i) {
  var o, s, l, a, c = e.bMarks[n] + e.tShift[n], u = e.eMarks[n];
  if (e.sCount[n] - e.blkIndent >= 4 || (o = e.src.charCodeAt(c), o !== 35 || c >= u))
    return !1;
  for (s = 1, o = e.src.charCodeAt(++c); o === 35 && c < u && s <= 6; )
    s++, o = e.src.charCodeAt(++c);
  return s > 6 || c < u && !od(o) ? !1 : (i || (u = e.skipSpacesBack(u, c), l = e.skipCharsBack(u, 35, c), l > c && od(e.src.charCodeAt(l - 1)) && (u = l), e.line = n + 1, a = e.push("heading_open", "h" + String(s), 1), a.markup = "########".slice(0, s), a.map = [n, e.line], a = e.push("inline", "", 0), a.content = e.src.slice(c, u).trim(), a.map = [n, e.line], a.children = [], a = e.push("heading_close", "h" + String(s), -1), a.markup = "########".slice(0, s)), !0);
}, Jne = function(e, n, r) {
  var i, o, s, l, a, c, u, h, f, d = n + 1, p, m = e.md.block.ruler.getRules("paragraph");
  if (e.sCount[n] - e.blkIndent >= 4)
    return !1;
  for (p = e.parentType, e.parentType = "paragraph"; d < r && !e.isEmpty(d); d++)
    if (!(e.sCount[d] - e.blkIndent > 3)) {
      if (e.sCount[d] >= e.blkIndent && (c = e.bMarks[d] + e.tShift[d], u = e.eMarks[d], c < u && (f = e.src.charCodeAt(c), (f === 45 || f === 61) && (c = e.skipChars(c, f), c = e.skipSpaces(c), c >= u)))) {
        h = f === 61 ? 1 : 2;
        break;
      }
      if (!(e.sCount[d] < 0)) {
        for (o = !1, s = 0, l = m.length; s < l; s++)
          if (m[s](e, d, r, !0)) {
            o = !0;
            break;
          }
        if (o)
          break;
      }
    }
  return h ? (i = e.getLines(n, d, e.blkIndent, !1).trim(), e.line = d + 1, a = e.push("heading_open", "h" + String(h), 1), a.markup = String.fromCharCode(f), a.map = [n, e.line], a = e.push("inline", "", 0), a.content = i, a.map = [n, e.line - 1], a.children = [], a = e.push("heading_close", "h" + String(h), -1), a.markup = String.fromCharCode(f), e.parentType = p, !0) : !1;
}, Xne = function(e, n) {
  var r, i, o, s, l, a, c = n + 1, u = e.md.block.ruler.getRules("paragraph"), h = e.lineMax;
  for (a = e.parentType, e.parentType = "paragraph"; c < h && !e.isEmpty(c); c++)
    if (!(e.sCount[c] - e.blkIndent > 3) && !(e.sCount[c] < 0)) {
      for (i = !1, o = 0, s = u.length; o < s; o++)
        if (u[o](e, c, h, !0)) {
          i = !0;
          break;
        }
      if (i)
        break;
    }
  return r = e.getLines(n, c, e.blkIndent, !1).trim(), e.line = c, l = e.push("paragraph_open", "p", 1), l.map = [n, e.line], l = e.push("inline", "", 0), l.content = r, l.map = [n, e.line], l.children = [], l = e.push("paragraph_close", "p", -1), e.parentType = a, !0;
}, n0 = Du, hl = X.isSpace;
function Jt(t, e, n, r) {
  var i, o, s, l, a, c, u, h;
  for (this.src = t, this.md = e, this.env = n, this.tokens = r, this.bMarks = [], this.eMarks = [], this.tShift = [], this.sCount = [], this.bsCount = [], this.blkIndent = 0, this.line = 0, this.lineMax = 0, this.tight = !1, this.ddIndent = -1, this.listIndent = -1, this.parentType = "root", this.level = 0, this.result = "", o = this.src, h = !1, s = l = c = u = 0, a = o.length; l < a; l++) {
    if (i = o.charCodeAt(l), !h)
      if (hl(i)) {
        c++, i === 9 ? u += 4 - u % 4 : u++;
        continue;
      } else
        h = !0;
    (i === 10 || l === a - 1) && (i !== 10 && l++, this.bMarks.push(s), this.eMarks.push(l), this.tShift.push(c), this.sCount.push(u), this.bsCount.push(0), h = !1, c = 0, u = 0, s = l + 1);
  }
  this.bMarks.push(o.length), this.eMarks.push(o.length), this.tShift.push(0), this.sCount.push(0), this.bsCount.push(0), this.lineMax = this.bMarks.length - 1;
}
Jt.prototype.push = function(t, e, n) {
  var r = new n0(t, e, n);
  return r.block = !0, n < 0 && this.level--, r.level = this.level, n > 0 && this.level++, this.tokens.push(r), r;
};
Jt.prototype.isEmpty = function(e) {
  return this.bMarks[e] + this.tShift[e] >= this.eMarks[e];
};
Jt.prototype.skipEmptyLines = function(e) {
  for (var n = this.lineMax; e < n && !(this.bMarks[e] + this.tShift[e] < this.eMarks[e]); e++)
    ;
  return e;
};
Jt.prototype.skipSpaces = function(e) {
  for (var n, r = this.src.length; e < r && (n = this.src.charCodeAt(e), !!hl(n)); e++)
    ;
  return e;
};
Jt.prototype.skipSpacesBack = function(e, n) {
  if (e <= n)
    return e;
  for (; e > n; )
    if (!hl(this.src.charCodeAt(--e)))
      return e + 1;
  return e;
};
Jt.prototype.skipChars = function(e, n) {
  for (var r = this.src.length; e < r && this.src.charCodeAt(e) === n; e++)
    ;
  return e;
};
Jt.prototype.skipCharsBack = function(e, n, r) {
  if (e <= r)
    return e;
  for (; e > r; )
    if (n !== this.src.charCodeAt(--e))
      return e + 1;
  return e;
};
Jt.prototype.getLines = function(e, n, r, i) {
  var o, s, l, a, c, u, h, f = e;
  if (e >= n)
    return "";
  for (u = new Array(n - e), o = 0; f < n; f++, o++) {
    for (s = 0, h = a = this.bMarks[f], f + 1 < n || i ? c = this.eMarks[f] + 1 : c = this.eMarks[f]; a < c && s < r; ) {
      if (l = this.src.charCodeAt(a), hl(l))
        l === 9 ? s += 4 - (s + this.bsCount[f]) % 4 : s++;
      else if (a - h < this.tShift[f])
        s++;
      else
        break;
      a++;
    }
    s > r ? u[o] = new Array(s - r + 1).join(" ") + this.src.slice(a, c) : u[o] = this.src.slice(a, c);
  }
  return u.join("");
};
Jt.prototype.Token = n0;
var Qne = Jt, ere = Tu, Ao = [
  ["table", Cne, ["paragraph", "reference"]],
  ["code", Ane],
  ["fence", Sne, ["paragraph", "reference", "blockquote", "list"]],
  ["blockquote", Ene, ["paragraph", "reference", "blockquote", "list"]],
  ["hr", Dne, ["paragraph", "reference", "blockquote", "list"]],
  ["list", One, ["paragraph", "reference", "blockquote"]],
  ["reference", Lne],
  ["html_block", Yne, ["paragraph", "reference", "blockquote"]],
  ["heading", Zne, ["paragraph", "reference", "blockquote"]],
  ["lheading", Jne],
  ["paragraph", Xne]
];
function fl() {
  this.ruler = new ere();
  for (var t = 0; t < Ao.length; t++)
    this.ruler.push(Ao[t][0], Ao[t][1], { alt: (Ao[t][2] || []).slice() });
}
fl.prototype.tokenize = function(t, e, n) {
  for (var r, i, o = this.ruler.getRules(""), s = o.length, l = e, a = !1, c = t.md.options.maxNesting; l < n && (t.line = l = t.skipEmptyLines(l), !(l >= n || t.sCount[l] < t.blkIndent)); ) {
    if (t.level >= c) {
      t.line = n;
      break;
    }
    for (i = 0; i < s && (r = o[i](t, l, n, !1), !r); i++)
      ;
    t.tight = !a, t.isEmpty(t.line - 1) && (a = !0), l = t.line, l < n && t.isEmpty(l) && (a = !0, l++, t.line = l);
  }
};
fl.prototype.parse = function(t, e, n, r) {
  var i;
  !t || (i = new this.State(t, e, n, r), this.tokenize(i, i.line, i.lineMax));
};
fl.prototype.State = Qne;
var tre = fl;
function nre(t) {
  switch (t) {
    case 10:
    case 33:
    case 35:
    case 36:
    case 37:
    case 38:
    case 42:
    case 43:
    case 45:
    case 58:
    case 60:
    case 61:
    case 62:
    case 64:
    case 91:
    case 92:
    case 93:
    case 94:
    case 95:
    case 96:
    case 123:
    case 125:
    case 126:
      return !0;
    default:
      return !1;
  }
}
var rre = function(e, n) {
  for (var r = e.pos; r < e.posMax && !nre(e.src.charCodeAt(r)); )
    r++;
  return r === e.pos ? !1 : (n || (e.pending += e.src.slice(e.pos, r)), e.pos = r, !0);
}, ire = X.isSpace, ore = function(e, n) {
  var r, i, o, s = e.pos;
  if (e.src.charCodeAt(s) !== 10)
    return !1;
  if (r = e.pending.length - 1, i = e.posMax, !n)
    if (r >= 0 && e.pending.charCodeAt(r) === 32)
      if (r >= 1 && e.pending.charCodeAt(r - 1) === 32) {
        for (o = r - 1; o >= 1 && e.pending.charCodeAt(o - 1) === 32; )
          o--;
        e.pending = e.pending.slice(0, o), e.push("hardbreak", "br", 0);
      } else
        e.pending = e.pending.slice(0, -1), e.push("softbreak", "br", 0);
    else
      e.push("softbreak", "br", 0);
  for (s++; s < i && ire(e.src.charCodeAt(s)); )
    s++;
  return e.pos = s, !0;
}, sre = X.isSpace, Ou = [];
for (var sd = 0; sd < 256; sd++)
  Ou.push(0);
"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(t) {
  Ou[t.charCodeAt(0)] = 1;
});
var lre = function(e, n) {
  var r, i = e.pos, o = e.posMax;
  if (e.src.charCodeAt(i) !== 92)
    return !1;
  if (i++, i < o) {
    if (r = e.src.charCodeAt(i), r < 256 && Ou[r] !== 0)
      return n || (e.pending += e.src[i]), e.pos += 2, !0;
    if (r === 10) {
      for (n || e.push("hardbreak", "br", 0), i++; i < o && (r = e.src.charCodeAt(i), !!sre(r)); )
        i++;
      return e.pos = i, !0;
    }
  }
  return n || (e.pending += "\\"), e.pos++, !0;
}, are = function(e, n) {
  var r, i, o, s, l, a, c, u, h = e.pos, f = e.src.charCodeAt(h);
  if (f !== 96)
    return !1;
  for (r = h, h++, i = e.posMax; h < i && e.src.charCodeAt(h) === 96; )
    h++;
  if (o = e.src.slice(r, h), c = o.length, e.backticksScanned && (e.backticks[c] || 0) <= r)
    return n || (e.pending += o), e.pos += c, !0;
  for (l = a = h; (l = e.src.indexOf("`", a)) !== -1; ) {
    for (a = l + 1; a < i && e.src.charCodeAt(a) === 96; )
      a++;
    if (u = a - l, u === c)
      return n || (s = e.push("code_inline", "code", 0), s.markup = o, s.content = e.src.slice(h, l).replace(/\n/g, " ").replace(/^ (.+) $/, "$1")), e.pos = a, !0;
    e.backticks[u] = l;
  }
  return e.backticksScanned = !0, n || (e.pending += o), e.pos += c, !0;
}, dl = {};
dl.tokenize = function(e, n) {
  var r, i, o, s, l, a = e.pos, c = e.src.charCodeAt(a);
  if (n || c !== 126 || (i = e.scanDelims(e.pos, !0), s = i.length, l = String.fromCharCode(c), s < 2))
    return !1;
  for (s % 2 && (o = e.push("text", "", 0), o.content = l, s--), r = 0; r < s; r += 2)
    o = e.push("text", "", 0), o.content = l + l, e.delimiters.push({
      marker: c,
      length: 0,
      token: e.tokens.length - 1,
      end: -1,
      open: i.can_open,
      close: i.can_close
    });
  return e.pos += i.length, !0;
};
function ld(t, e) {
  var n, r, i, o, s, l = [], a = e.length;
  for (n = 0; n < a; n++)
    i = e[n], i.marker === 126 && i.end !== -1 && (o = e[i.end], s = t.tokens[i.token], s.type = "s_open", s.tag = "s", s.nesting = 1, s.markup = "~~", s.content = "", s = t.tokens[o.token], s.type = "s_close", s.tag = "s", s.nesting = -1, s.markup = "~~", s.content = "", t.tokens[o.token - 1].type === "text" && t.tokens[o.token - 1].content === "~" && l.push(o.token - 1));
  for (; l.length; ) {
    for (n = l.pop(), r = n + 1; r < t.tokens.length && t.tokens[r].type === "s_close"; )
      r++;
    r--, n !== r && (s = t.tokens[r], t.tokens[r] = t.tokens[n], t.tokens[n] = s);
  }
}
dl.postProcess = function(e) {
  var n, r = e.tokens_meta, i = e.tokens_meta.length;
  for (ld(e, e.delimiters), n = 0; n < i; n++)
    r[n] && r[n].delimiters && ld(e, r[n].delimiters);
};
var pl = {};
pl.tokenize = function(e, n) {
  var r, i, o, s = e.pos, l = e.src.charCodeAt(s);
  if (n || l !== 95 && l !== 42)
    return !1;
  for (i = e.scanDelims(e.pos, l === 42), r = 0; r < i.length; r++)
    o = e.push("text", "", 0), o.content = String.fromCharCode(l), e.delimiters.push({
      marker: l,
      length: i.length,
      token: e.tokens.length - 1,
      end: -1,
      open: i.can_open,
      close: i.can_close
    });
  return e.pos += i.length, !0;
};
function ad(t, e) {
  var n, r, i, o, s, l, a = e.length;
  for (n = a - 1; n >= 0; n--)
    r = e[n], !(r.marker !== 95 && r.marker !== 42) && r.end !== -1 && (i = e[r.end], l = n > 0 && e[n - 1].end === r.end + 1 && e[n - 1].marker === r.marker && e[n - 1].token === r.token - 1 && e[r.end + 1].token === i.token + 1, s = String.fromCharCode(r.marker), o = t.tokens[r.token], o.type = l ? "strong_open" : "em_open", o.tag = l ? "strong" : "em", o.nesting = 1, o.markup = l ? s + s : s, o.content = "", o = t.tokens[i.token], o.type = l ? "strong_close" : "em_close", o.tag = l ? "strong" : "em", o.nesting = -1, o.markup = l ? s + s : s, o.content = "", l && (t.tokens[e[n - 1].token].content = "", t.tokens[e[r.end + 1].token].content = "", n--));
}
pl.postProcess = function(e) {
  var n, r = e.tokens_meta, i = e.tokens_meta.length;
  for (ad(e, e.delimiters), n = 0; n < i; n++)
    r[n] && r[n].delimiters && ad(e, r[n].delimiters);
};
var cre = X.normalizeReference, ua = X.isSpace, ure = function(e, n) {
  var r, i, o, s, l, a, c, u, h, f = "", d = "", p = e.pos, m = e.posMax, g = e.pos, y = !0;
  if (e.src.charCodeAt(e.pos) !== 91 || (l = e.pos + 1, s = e.md.helpers.parseLinkLabel(e, e.pos, !0), s < 0))
    return !1;
  if (a = s + 1, a < m && e.src.charCodeAt(a) === 40) {
    for (y = !1, a++; a < m && (i = e.src.charCodeAt(a), !(!ua(i) && i !== 10)); a++)
      ;
    if (a >= m)
      return !1;
    if (g = a, c = e.md.helpers.parseLinkDestination(e.src, a, e.posMax), c.ok) {
      for (f = e.md.normalizeLink(c.str), e.md.validateLink(f) ? a = c.pos : f = "", g = a; a < m && (i = e.src.charCodeAt(a), !(!ua(i) && i !== 10)); a++)
        ;
      if (c = e.md.helpers.parseLinkTitle(e.src, a, e.posMax), a < m && g !== a && c.ok)
        for (d = c.str, a = c.pos; a < m && (i = e.src.charCodeAt(a), !(!ua(i) && i !== 10)); a++)
          ;
    }
    (a >= m || e.src.charCodeAt(a) !== 41) && (y = !0), a++;
  }
  if (y) {
    if (typeof e.env.references > "u")
      return !1;
    if (a < m && e.src.charCodeAt(a) === 91 ? (g = a + 1, a = e.md.helpers.parseLinkLabel(e, a), a >= 0 ? o = e.src.slice(g, a++) : a = s + 1) : a = s + 1, o || (o = e.src.slice(l, s)), u = e.env.references[cre(o)], !u)
      return e.pos = p, !1;
    f = u.href, d = u.title;
  }
  return n || (e.pos = l, e.posMax = s, h = e.push("link_open", "a", 1), h.attrs = r = [["href", f]], d && r.push(["title", d]), e.md.inline.tokenize(e), h = e.push("link_close", "a", -1)), e.pos = a, e.posMax = m, !0;
}, hre = X.normalizeReference, ha = X.isSpace, fre = function(e, n) {
  var r, i, o, s, l, a, c, u, h, f, d, p, m, g = "", y = e.pos, b = e.posMax;
  if (e.src.charCodeAt(e.pos) !== 33 || e.src.charCodeAt(e.pos + 1) !== 91 || (a = e.pos + 2, l = e.md.helpers.parseLinkLabel(e, e.pos + 1, !1), l < 0))
    return !1;
  if (c = l + 1, c < b && e.src.charCodeAt(c) === 40) {
    for (c++; c < b && (i = e.src.charCodeAt(c), !(!ha(i) && i !== 10)); c++)
      ;
    if (c >= b)
      return !1;
    for (m = c, h = e.md.helpers.parseLinkDestination(e.src, c, e.posMax), h.ok && (g = e.md.normalizeLink(h.str), e.md.validateLink(g) ? c = h.pos : g = ""), m = c; c < b && (i = e.src.charCodeAt(c), !(!ha(i) && i !== 10)); c++)
      ;
    if (h = e.md.helpers.parseLinkTitle(e.src, c, e.posMax), c < b && m !== c && h.ok)
      for (f = h.str, c = h.pos; c < b && (i = e.src.charCodeAt(c), !(!ha(i) && i !== 10)); c++)
        ;
    else
      f = "";
    if (c >= b || e.src.charCodeAt(c) !== 41)
      return e.pos = y, !1;
    c++;
  } else {
    if (typeof e.env.references > "u")
      return !1;
    if (c < b && e.src.charCodeAt(c) === 91 ? (m = c + 1, c = e.md.helpers.parseLinkLabel(e, c), c >= 0 ? s = e.src.slice(m, c++) : c = l + 1) : c = l + 1, s || (s = e.src.slice(a, l)), u = e.env.references[hre(s)], !u)
      return e.pos = y, !1;
    g = u.href, f = u.title;
  }
  return n || (o = e.src.slice(a, l), e.md.inline.parse(
    o,
    e.md,
    e.env,
    p = []
  ), d = e.push("image", "img", 0), d.attrs = r = [["src", g], ["alt", ""]], d.children = p, d.content = o, f && r.push(["title", f])), e.pos = c, e.posMax = b, !0;
}, dre = /^([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/, pre = /^([a-zA-Z][a-zA-Z0-9+.\-]{1,31}):([^<>\x00-\x20]*)$/, mre = function(e, n) {
  var r, i, o, s, l, a, c = e.pos;
  if (e.src.charCodeAt(c) !== 60)
    return !1;
  for (l = e.pos, a = e.posMax; ; ) {
    if (++c >= a || (s = e.src.charCodeAt(c), s === 60))
      return !1;
    if (s === 62)
      break;
  }
  return r = e.src.slice(l + 1, c), pre.test(r) ? (i = e.md.normalizeLink(r), e.md.validateLink(i) ? (n || (o = e.push("link_open", "a", 1), o.attrs = [["href", i]], o.markup = "autolink", o.info = "auto", o = e.push("text", "", 0), o.content = e.md.normalizeLinkText(r), o = e.push("link_close", "a", -1), o.markup = "autolink", o.info = "auto"), e.pos += r.length + 2, !0) : !1) : dre.test(r) ? (i = e.md.normalizeLink("mailto:" + r), e.md.validateLink(i) ? (n || (o = e.push("link_open", "a", 1), o.attrs = [["href", i]], o.markup = "autolink", o.info = "auto", o = e.push("text", "", 0), o.content = e.md.normalizeLinkText(r), o = e.push("link_close", "a", -1), o.markup = "autolink", o.info = "auto"), e.pos += r.length + 2, !0) : !1) : !1;
}, gre = ul.HTML_TAG_RE;
function yre(t) {
  var e = t | 32;
  return e >= 97 && e <= 122;
}
var bre = function(e, n) {
  var r, i, o, s, l = e.pos;
  return !e.md.options.html || (o = e.posMax, e.src.charCodeAt(l) !== 60 || l + 2 >= o) || (r = e.src.charCodeAt(l + 1), r !== 33 && r !== 63 && r !== 47 && !yre(r)) || (i = e.src.slice(l).match(gre), !i) ? !1 : (n || (s = e.push("html_inline", "", 0), s.content = e.src.slice(l, l + i[0].length)), e.pos += i[0].length, !0);
}, cd = Su.exports, vre = X.has, xre = X.isValidEntityCode, ud = X.fromCodePoint, _re = /^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i, kre = /^&([a-z][a-z0-9]{1,31});/i, wre = function(e, n) {
  var r, i, o, s = e.pos, l = e.posMax;
  if (e.src.charCodeAt(s) !== 38)
    return !1;
  if (s + 1 < l) {
    if (r = e.src.charCodeAt(s + 1), r === 35) {
      if (o = e.src.slice(s).match(_re), o)
        return n || (i = o[1][0].toLowerCase() === "x" ? parseInt(o[1].slice(1), 16) : parseInt(o[1], 10), e.pending += xre(i) ? ud(i) : ud(65533)), e.pos += o[0].length, !0;
    } else if (o = e.src.slice(s).match(kre), o && vre(cd, o[1]))
      return n || (e.pending += cd[o[1]]), e.pos += o[0].length, !0;
  }
  return n || (e.pending += "&"), e.pos++, !0;
};
function hd(t, e) {
  var n, r, i, o, s, l, a, c, u = {}, h = e.length;
  if (!!h) {
    var f = 0, d = -2, p = [];
    for (n = 0; n < h; n++)
      if (i = e[n], p.push(0), (e[f].marker !== i.marker || d !== i.token - 1) && (f = n), d = i.token, i.length = i.length || 0, !!i.close) {
        for (u.hasOwnProperty(i.marker) || (u[i.marker] = [-1, -1, -1, -1, -1, -1]), s = u[i.marker][(i.open ? 3 : 0) + i.length % 3], r = f - p[f] - 1, l = r; r > s; r -= p[r] + 1)
          if (o = e[r], o.marker === i.marker && o.open && o.end < 0 && (a = !1, (o.close || i.open) && (o.length + i.length) % 3 === 0 && (o.length % 3 !== 0 || i.length % 3 !== 0) && (a = !0), !a)) {
            c = r > 0 && !e[r - 1].open ? p[r - 1] + 1 : 0, p[n] = n - r + c, p[r] = c, i.open = !1, o.end = n, o.close = !1, l = -1, d = -2;
            break;
          }
        l !== -1 && (u[i.marker][(i.open ? 3 : 0) + (i.length || 0) % 3] = l);
      }
  }
}
var Cre = function(e) {
  var n, r = e.tokens_meta, i = e.tokens_meta.length;
  for (hd(e, e.delimiters), n = 0; n < i; n++)
    r[n] && r[n].delimiters && hd(e, r[n].delimiters);
}, Are = function(e) {
  var n, r, i = 0, o = e.tokens, s = e.tokens.length;
  for (n = r = 0; n < s; n++)
    o[n].nesting < 0 && i--, o[n].level = i, o[n].nesting > 0 && i++, o[n].type === "text" && n + 1 < s && o[n + 1].type === "text" ? o[n + 1].content = o[n].content + o[n + 1].content : (n !== r && (o[r] = o[n]), r++);
  n !== r && (o.length = r);
}, Ru = Du, fd = X.isWhiteSpace, dd = X.isPunctChar, pd = X.isMdAsciiPunct;
function io(t, e, n, r) {
  this.src = t, this.env = n, this.md = e, this.tokens = r, this.tokens_meta = Array(r.length), this.pos = 0, this.posMax = this.src.length, this.level = 0, this.pending = "", this.pendingLevel = 0, this.cache = {}, this.delimiters = [], this._prev_delimiters = [], this.backticks = {}, this.backticksScanned = !1;
}
io.prototype.pushPending = function() {
  var t = new Ru("text", "", 0);
  return t.content = this.pending, t.level = this.pendingLevel, this.tokens.push(t), this.pending = "", t;
};
io.prototype.push = function(t, e, n) {
  this.pending && this.pushPending();
  var r = new Ru(t, e, n), i = null;
  return n < 0 && (this.level--, this.delimiters = this._prev_delimiters.pop()), r.level = this.level, n > 0 && (this.level++, this._prev_delimiters.push(this.delimiters), this.delimiters = [], i = { delimiters: this.delimiters }), this.pendingLevel = this.level, this.tokens.push(r), this.tokens_meta.push(i), r;
};
io.prototype.scanDelims = function(t, e) {
  var n = t, r, i, o, s, l, a, c, u, h, f = !0, d = !0, p = this.posMax, m = this.src.charCodeAt(t);
  for (r = t > 0 ? this.src.charCodeAt(t - 1) : 32; n < p && this.src.charCodeAt(n) === m; )
    n++;
  return o = n - t, i = n < p ? this.src.charCodeAt(n) : 32, c = pd(r) || dd(String.fromCharCode(r)), h = pd(i) || dd(String.fromCharCode(i)), a = fd(r), u = fd(i), u ? f = !1 : h && (a || c || (f = !1)), a ? d = !1 : c && (u || h || (d = !1)), e ? (s = f, l = d) : (s = f && (!d || c), l = d && (!f || h)), {
    can_open: s,
    can_close: l,
    length: o
  };
};
io.prototype.Token = Ru;
var Sre = io, md = Tu, fa = [
  ["text", rre],
  ["newline", ore],
  ["escape", lre],
  ["backticks", are],
  ["strikethrough", dl.tokenize],
  ["emphasis", pl.tokenize],
  ["link", ure],
  ["image", fre],
  ["autolink", mre],
  ["html_inline", bre],
  ["entity", wre]
], da = [
  ["balance_pairs", Cre],
  ["strikethrough", dl.postProcess],
  ["emphasis", pl.postProcess],
  ["text_collapse", Are]
];
function oo() {
  var t;
  for (this.ruler = new md(), t = 0; t < fa.length; t++)
    this.ruler.push(fa[t][0], fa[t][1]);
  for (this.ruler2 = new md(), t = 0; t < da.length; t++)
    this.ruler2.push(da[t][0], da[t][1]);
}
oo.prototype.skipToken = function(t) {
  var e, n, r = t.pos, i = this.ruler.getRules(""), o = i.length, s = t.md.options.maxNesting, l = t.cache;
  if (typeof l[r] < "u") {
    t.pos = l[r];
    return;
  }
  if (t.level < s)
    for (n = 0; n < o && (t.level++, e = i[n](t, !0), t.level--, !e); n++)
      ;
  else
    t.pos = t.posMax;
  e || t.pos++, l[r] = t.pos;
};
oo.prototype.tokenize = function(t) {
  for (var e, n, r = this.ruler.getRules(""), i = r.length, o = t.posMax, s = t.md.options.maxNesting; t.pos < o; ) {
    if (t.level < s)
      for (n = 0; n < i && (e = r[n](t, !1), !e); n++)
        ;
    if (e) {
      if (t.pos >= o)
        break;
      continue;
    }
    t.pending += t.src[t.pos++];
  }
  t.pending && t.pushPending();
};
oo.prototype.parse = function(t, e, n, r) {
  var i, o, s, l = new this.State(t, e, n, r);
  for (this.tokenize(l), o = this.ruler2.getRules(""), s = o.length, i = 0; i < s; i++)
    o[i](l);
};
oo.prototype.State = Sre;
var Ere = oo, pa, gd;
function Tre() {
  return gd || (gd = 1, pa = function(t) {
    var e = {};
    e.src_Any = Kg().source, e.src_Cc = Yg().source, e.src_Z = Zg().source, e.src_P = Eu.source, e.src_ZPCc = [e.src_Z, e.src_P, e.src_Cc].join("|"), e.src_ZCc = [e.src_Z, e.src_Cc].join("|");
    var n = "[><\uFF5C]";
    return e.src_pseudo_letter = "(?:(?!" + n + "|" + e.src_ZPCc + ")" + e.src_Any + ")", e.src_ip4 = "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)", e.src_auth = "(?:(?:(?!" + e.src_ZCc + "|[@/\\[\\]()]).)+@)?", e.src_port = "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?", e.src_host_terminator = "(?=$|" + n + "|" + e.src_ZPCc + ")(?!-|_|:\\d|\\.-|\\.(?!$|" + e.src_ZPCc + "))", e.src_path = "(?:[/?#](?:(?!" + e.src_ZCc + "|" + n + `|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!` + e.src_ZCc + "|\\]).)*\\]|\\((?:(?!" + e.src_ZCc + "|[)]).)*\\)|\\{(?:(?!" + e.src_ZCc + '|[}]).)*\\}|\\"(?:(?!' + e.src_ZCc + `|["]).)+\\"|\\'(?:(?!` + e.src_ZCc + "|[']).)+\\'|\\'(?=" + e.src_pseudo_letter + "|[-]).|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!" + e.src_ZCc + "|[.]).|" + (t && t["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") + ",(?!" + e.src_ZCc + ").|;(?!" + e.src_ZCc + ").|\\!+(?!" + e.src_ZCc + "|[!]).|\\?(?!" + e.src_ZCc + "|[?]).)+|\\/)?", e.src_email_name = '[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*', e.src_xn = "xn--[a-z0-9\\-]{1,59}", e.src_domain_root = "(?:" + e.src_xn + "|" + e.src_pseudo_letter + "{1,63})", e.src_domain = "(?:" + e.src_xn + "|(?:" + e.src_pseudo_letter + ")|(?:" + e.src_pseudo_letter + "(?:-|" + e.src_pseudo_letter + "){0,61}" + e.src_pseudo_letter + "))", e.src_host = "(?:(?:(?:(?:" + e.src_domain + ")\\.)*" + e.src_domain + "))", e.tpl_host_fuzzy = "(?:" + e.src_ip4 + "|(?:(?:(?:" + e.src_domain + ")\\.)+(?:%TLDS%)))", e.tpl_host_no_ip_fuzzy = "(?:(?:(?:" + e.src_domain + ")\\.)+(?:%TLDS%))", e.src_host_strict = e.src_host + e.src_host_terminator, e.tpl_host_fuzzy_strict = e.tpl_host_fuzzy + e.src_host_terminator, e.src_host_port_strict = e.src_host + e.src_port + e.src_host_terminator, e.tpl_host_port_fuzzy_strict = e.tpl_host_fuzzy + e.src_port + e.src_host_terminator, e.tpl_host_port_no_ip_fuzzy_strict = e.tpl_host_no_ip_fuzzy + e.src_port + e.src_host_terminator, e.tpl_host_fuzzy_test = "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" + e.src_ZPCc + "|>|$))", e.tpl_email_fuzzy = "(^|" + n + '|"|\\(|' + e.src_ZCc + ")(" + e.src_email_name + "@" + e.tpl_host_fuzzy_strict + ")", e.tpl_link_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|\uFF5C]|" + e.src_ZPCc + "))((?![$+<=>^`|\uFF5C])" + e.tpl_host_port_fuzzy_strict + e.src_path + ")", e.tpl_link_no_ip_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|\uFF5C]|" + e.src_ZPCc + "))((?![$+<=>^`|\uFF5C])" + e.tpl_host_port_no_ip_fuzzy_strict + e.src_path + ")", e;
  }), pa;
}
function dc(t) {
  var e = Array.prototype.slice.call(arguments, 1);
  return e.forEach(function(n) {
    !n || Object.keys(n).forEach(function(r) {
      t[r] = n[r];
    });
  }), t;
}
function ml(t) {
  return Object.prototype.toString.call(t);
}
function Dre(t) {
  return ml(t) === "[object String]";
}
function Mre(t) {
  return ml(t) === "[object Object]";
}
function Ore(t) {
  return ml(t) === "[object RegExp]";
}
function yd(t) {
  return ml(t) === "[object Function]";
}
function Rre(t) {
  return t.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
}
var r0 = {
  fuzzyLink: !0,
  fuzzyEmail: !0,
  fuzzyIP: !1
};
function Lre(t) {
  return Object.keys(t || {}).reduce(function(e, n) {
    return e || r0.hasOwnProperty(n);
  }, !1);
}
var Ire = {
  "http:": {
    validate: function(t, e, n) {
      var r = t.slice(e);
      return n.re.http || (n.re.http = new RegExp(
        "^\\/\\/" + n.re.src_auth + n.re.src_host_port_strict + n.re.src_path,
        "i"
      )), n.re.http.test(r) ? r.match(n.re.http)[0].length : 0;
    }
  },
  "https:": "http:",
  "ftp:": "http:",
  "//": {
    validate: function(t, e, n) {
      var r = t.slice(e);
      return n.re.no_http || (n.re.no_http = new RegExp(
        "^" + n.re.src_auth + "(?:localhost|(?:(?:" + n.re.src_domain + ")\\.)+" + n.re.src_domain_root + ")" + n.re.src_port + n.re.src_host_terminator + n.re.src_path,
        "i"
      )), n.re.no_http.test(r) ? e >= 3 && t[e - 3] === ":" || e >= 3 && t[e - 3] === "/" ? 0 : r.match(n.re.no_http)[0].length : 0;
    }
  },
  "mailto:": {
    validate: function(t, e, n) {
      var r = t.slice(e);
      return n.re.mailto || (n.re.mailto = new RegExp(
        "^" + n.re.src_email_name + "@" + n.re.src_host_strict,
        "i"
      )), n.re.mailto.test(r) ? r.match(n.re.mailto)[0].length : 0;
    }
  }
}, Nre = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]", Pre = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|\u0440\u0444".split("|");
function Bre(t) {
  t.__index__ = -1, t.__text_cache__ = "";
}
function Fre(t) {
  return function(e, n) {
    var r = e.slice(n);
    return t.test(r) ? r.match(t)[0].length : 0;
  };
}
function bd() {
  return function(t, e) {
    e.normalize(t);
  };
}
function ws(t) {
  var e = t.re = Tre()(t.__opts__), n = t.__tlds__.slice();
  t.onCompile(), t.__tlds_replaced__ || n.push(Nre), n.push(e.src_xn), e.src_tlds = n.join("|");
  function r(l) {
    return l.replace("%TLDS%", e.src_tlds);
  }
  e.email_fuzzy = RegExp(r(e.tpl_email_fuzzy), "i"), e.link_fuzzy = RegExp(r(e.tpl_link_fuzzy), "i"), e.link_no_ip_fuzzy = RegExp(r(e.tpl_link_no_ip_fuzzy), "i"), e.host_fuzzy_test = RegExp(r(e.tpl_host_fuzzy_test), "i");
  var i = [];
  t.__compiled__ = {};
  function o(l, a) {
    throw new Error('(LinkifyIt) Invalid schema "' + l + '": ' + a);
  }
  Object.keys(t.__schemas__).forEach(function(l) {
    var a = t.__schemas__[l];
    if (a !== null) {
      var c = { validate: null, link: null };
      if (t.__compiled__[l] = c, Mre(a)) {
        Ore(a.validate) ? c.validate = Fre(a.validate) : yd(a.validate) ? c.validate = a.validate : o(l, a), yd(a.normalize) ? c.normalize = a.normalize : a.normalize ? o(l, a) : c.normalize = bd();
        return;
      }
      if (Dre(a)) {
        i.push(l);
        return;
      }
      o(l, a);
    }
  }), i.forEach(function(l) {
    !t.__compiled__[t.__schemas__[l]] || (t.__compiled__[l].validate = t.__compiled__[t.__schemas__[l]].validate, t.__compiled__[l].normalize = t.__compiled__[t.__schemas__[l]].normalize);
  }), t.__compiled__[""] = { validate: null, normalize: bd() };
  var s = Object.keys(t.__compiled__).filter(function(l) {
    return l.length > 0 && t.__compiled__[l];
  }).map(Rre).join("|");
  t.re.schema_test = RegExp("(^|(?!_)(?:[><\uFF5C]|" + e.src_ZPCc + "))(" + s + ")", "i"), t.re.schema_search = RegExp("(^|(?!_)(?:[><\uFF5C]|" + e.src_ZPCc + "))(" + s + ")", "ig"), t.re.pretest = RegExp(
    "(" + t.re.schema_test.source + ")|(" + t.re.host_fuzzy_test.source + ")|@",
    "i"
  ), Bre(t);
}
function qre(t, e) {
  var n = t.__index__, r = t.__last_index__, i = t.__text_cache__.slice(n, r);
  this.schema = t.__schema__.toLowerCase(), this.index = n + e, this.lastIndex = r + e, this.raw = i, this.text = i, this.url = i;
}
function vd(t, e) {
  var n = new qre(t, e);
  return t.__compiled__[n.schema].normalize(n, t), n;
}
function bt(t, e) {
  if (!(this instanceof bt))
    return new bt(t, e);
  e || Lre(t) && (e = t, t = {}), this.__opts__ = dc({}, r0, e), this.__index__ = -1, this.__last_index__ = -1, this.__schema__ = "", this.__text_cache__ = "", this.__schemas__ = dc({}, Ire, t), this.__compiled__ = {}, this.__tlds__ = Pre, this.__tlds_replaced__ = !1, this.re = {}, ws(this);
}
bt.prototype.add = function(e, n) {
  return this.__schemas__[e] = n, ws(this), this;
};
bt.prototype.set = function(e) {
  return this.__opts__ = dc(this.__opts__, e), this;
};
bt.prototype.test = function(e) {
  if (this.__text_cache__ = e, this.__index__ = -1, !e.length)
    return !1;
  var n, r, i, o, s, l, a, c, u;
  if (this.re.schema_test.test(e)) {
    for (a = this.re.schema_search, a.lastIndex = 0; (n = a.exec(e)) !== null; )
      if (o = this.testSchemaAt(e, n[2], a.lastIndex), o) {
        this.__schema__ = n[2], this.__index__ = n.index + n[1].length, this.__last_index__ = n.index + n[0].length + o;
        break;
      }
  }
  return this.__opts__.fuzzyLink && this.__compiled__["http:"] && (c = e.search(this.re.host_fuzzy_test), c >= 0 && (this.__index__ < 0 || c < this.__index__) && (r = e.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) !== null && (s = r.index + r[1].length, (this.__index__ < 0 || s < this.__index__) && (this.__schema__ = "", this.__index__ = s, this.__last_index__ = r.index + r[0].length))), this.__opts__.fuzzyEmail && this.__compiled__["mailto:"] && (u = e.indexOf("@"), u >= 0 && (i = e.match(this.re.email_fuzzy)) !== null && (s = i.index + i[1].length, l = i.index + i[0].length, (this.__index__ < 0 || s < this.__index__ || s === this.__index__ && l > this.__last_index__) && (this.__schema__ = "mailto:", this.__index__ = s, this.__last_index__ = l))), this.__index__ >= 0;
};
bt.prototype.pretest = function(e) {
  return this.re.pretest.test(e);
};
bt.prototype.testSchemaAt = function(e, n, r) {
  return this.__compiled__[n.toLowerCase()] ? this.__compiled__[n.toLowerCase()].validate(e, r, this) : 0;
};
bt.prototype.match = function(e) {
  var n = 0, r = [];
  this.__index__ >= 0 && this.__text_cache__ === e && (r.push(vd(this, n)), n = this.__last_index__);
  for (var i = n ? e.slice(n) : e; this.test(i); )
    r.push(vd(this, n)), i = i.slice(this.__last_index__), n += this.__last_index__;
  return r.length ? r : null;
};
bt.prototype.tlds = function(e, n) {
  return e = Array.isArray(e) ? e : [e], n ? (this.__tlds__ = this.__tlds__.concat(e).sort().filter(function(r, i, o) {
    return r !== o[i - 1];
  }).reverse(), ws(this), this) : (this.__tlds__ = e.slice(), this.__tlds_replaced__ = !0, ws(this), this);
};
bt.prototype.normalize = function(e) {
  e.schema || (e.url = "http://" + e.url), e.schema === "mailto:" && !/^mailto:/i.test(e.url) && (e.url = "mailto:" + e.url);
};
bt.prototype.onCompile = function() {
};
var $re = bt;
const Lr = 2147483647, Ht = 36, Lu = 1, zi = 26, Hre = 38, zre = 700, i0 = 72, o0 = 128, s0 = "-", Vre = /^xn--/, Ure = /[^\0-\x7F]/, Wre = /[\x2E\u3002\uFF0E\uFF61]/g, jre = {
  overflow: "Overflow: input needs wider integers to process",
  "not-basic": "Illegal input >= 0x80 (not a basic code point)",
  "invalid-input": "Invalid input"
}, ma = Ht - Lu, zt = Math.floor, ga = String.fromCharCode;
function gn(t) {
  throw new RangeError(jre[t]);
}
function Gre(t, e) {
  const n = [];
  let r = t.length;
  for (; r--; )
    n[r] = e(t[r]);
  return n;
}
function l0(t, e) {
  const n = t.split("@");
  let r = "";
  n.length > 1 && (r = n[0] + "@", t = n[1]), t = t.replace(Wre, ".");
  const i = t.split("."), o = Gre(i, e).join(".");
  return r + o;
}
function Iu(t) {
  const e = [];
  let n = 0;
  const r = t.length;
  for (; n < r; ) {
    const i = t.charCodeAt(n++);
    if (i >= 55296 && i <= 56319 && n < r) {
      const o = t.charCodeAt(n++);
      (o & 64512) == 56320 ? e.push(((i & 1023) << 10) + (o & 1023) + 65536) : (e.push(i), n--);
    } else
      e.push(i);
  }
  return e;
}
const a0 = (t) => String.fromCodePoint(...t), Kre = function(t) {
  return t >= 48 && t < 58 ? 26 + (t - 48) : t >= 65 && t < 91 ? t - 65 : t >= 97 && t < 123 ? t - 97 : Ht;
}, xd = function(t, e) {
  return t + 22 + 75 * (t < 26) - ((e != 0) << 5);
}, c0 = function(t, e, n) {
  let r = 0;
  for (t = n ? zt(t / zre) : t >> 1, t += zt(t / e); t > ma * zi >> 1; r += Ht)
    t = zt(t / ma);
  return zt(r + (ma + 1) * t / (t + Hre));
}, Nu = function(t) {
  const e = [], n = t.length;
  let r = 0, i = o0, o = i0, s = t.lastIndexOf(s0);
  s < 0 && (s = 0);
  for (let l = 0; l < s; ++l)
    t.charCodeAt(l) >= 128 && gn("not-basic"), e.push(t.charCodeAt(l));
  for (let l = s > 0 ? s + 1 : 0; l < n; ) {
    const a = r;
    for (let u = 1, h = Ht; ; h += Ht) {
      l >= n && gn("invalid-input");
      const f = Kre(t.charCodeAt(l++));
      f >= Ht && gn("invalid-input"), f > zt((Lr - r) / u) && gn("overflow"), r += f * u;
      const d = h <= o ? Lu : h >= o + zi ? zi : h - o;
      if (f < d)
        break;
      const p = Ht - d;
      u > zt(Lr / p) && gn("overflow"), u *= p;
    }
    const c = e.length + 1;
    o = c0(r - a, c, a == 0), zt(r / c) > Lr - i && gn("overflow"), i += zt(r / c), r %= c, e.splice(r++, 0, i);
  }
  return String.fromCodePoint(...e);
}, Pu = function(t) {
  const e = [];
  t = Iu(t);
  const n = t.length;
  let r = o0, i = 0, o = i0;
  for (const a of t)
    a < 128 && e.push(ga(a));
  const s = e.length;
  let l = s;
  for (s && e.push(s0); l < n; ) {
    let a = Lr;
    for (const u of t)
      u >= r && u < a && (a = u);
    const c = l + 1;
    a - r > zt((Lr - i) / c) && gn("overflow"), i += (a - r) * c, r = a;
    for (const u of t)
      if (u < r && ++i > Lr && gn("overflow"), u === r) {
        let h = i;
        for (let f = Ht; ; f += Ht) {
          const d = f <= o ? Lu : f >= o + zi ? zi : f - o;
          if (h < d)
            break;
          const p = h - d, m = Ht - d;
          e.push(
            ga(xd(d + p % m, 0))
          ), h = zt(p / m);
        }
        e.push(ga(xd(h, 0))), o = c0(i, c, l === s), i = 0, ++l;
      }
    ++i, ++r;
  }
  return e.join("");
}, u0 = function(t) {
  return l0(t, function(e) {
    return Vre.test(e) ? Nu(e.slice(4).toLowerCase()) : e;
  });
}, h0 = function(t) {
  return l0(t, function(e) {
    return Ure.test(e) ? "xn--" + Pu(e) : e;
  });
}, Yre = {
  version: "2.1.0",
  ucs2: {
    decode: Iu,
    encode: a0
  },
  decode: Nu,
  encode: Pu,
  toASCII: h0,
  toUnicode: u0
}, Zre = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ucs2decode: Iu,
  ucs2encode: a0,
  decode: Nu,
  encode: Pu,
  toASCII: h0,
  toUnicode: u0,
  default: Yre
}, Symbol.toStringTag, { value: "Module" })), Jre = /* @__PURE__ */ fv(Zre);
var Xre = {
  options: {
    html: !1,
    xhtmlOut: !1,
    breaks: !1,
    langPrefix: "language-",
    linkify: !1,
    typographer: !1,
    quotes: "\u201C\u201D\u2018\u2019",
    highlight: null,
    maxNesting: 100
  },
  components: {
    core: {},
    block: {},
    inline: {}
  }
}, Qre = {
  options: {
    html: !1,
    xhtmlOut: !1,
    breaks: !1,
    langPrefix: "language-",
    linkify: !1,
    typographer: !1,
    quotes: "\u201C\u201D\u2018\u2019",
    highlight: null,
    maxNesting: 20
  },
  components: {
    core: {
      rules: [
        "normalize",
        "block",
        "inline"
      ]
    },
    block: {
      rules: [
        "paragraph"
      ]
    },
    inline: {
      rules: [
        "text"
      ],
      rules2: [
        "balance_pairs",
        "text_collapse"
      ]
    }
  }
}, eie = {
  options: {
    html: !0,
    xhtmlOut: !0,
    breaks: !1,
    langPrefix: "language-",
    linkify: !1,
    typographer: !1,
    quotes: "\u201C\u201D\u2018\u2019",
    highlight: null,
    maxNesting: 20
  },
  components: {
    core: {
      rules: [
        "normalize",
        "block",
        "inline"
      ]
    },
    block: {
      rules: [
        "blockquote",
        "code",
        "fence",
        "heading",
        "hr",
        "html_block",
        "lheading",
        "list",
        "reference",
        "paragraph"
      ]
    },
    inline: {
      rules: [
        "autolink",
        "backticks",
        "emphasis",
        "entity",
        "escape",
        "html_inline",
        "image",
        "link",
        "newline",
        "text"
      ],
      rules2: [
        "balance_pairs",
        "emphasis",
        "text_collapse"
      ]
    }
  }
}, Di = X, tie = cl, nie = ene, rie = wne, iie = tre, oie = Ere, sie = $re, Jn = ri, f0 = Jre, lie = {
  default: Xre,
  zero: Qre,
  commonmark: eie
}, aie = /^(vbscript|javascript|file|data):/, cie = /^data:image\/(gif|png|jpeg|webp);/;
function uie(t) {
  var e = t.trim().toLowerCase();
  return aie.test(e) ? !!cie.test(e) : !0;
}
var d0 = ["http:", "https:", "mailto:"];
function hie(t) {
  var e = Jn.parse(t, !0);
  if (e.hostname && (!e.protocol || d0.indexOf(e.protocol) >= 0))
    try {
      e.hostname = f0.toASCII(e.hostname);
    } catch {
    }
  return Jn.encode(Jn.format(e));
}
function fie(t) {
  var e = Jn.parse(t, !0);
  if (e.hostname && (!e.protocol || d0.indexOf(e.protocol) >= 0))
    try {
      e.hostname = f0.toUnicode(e.hostname);
    } catch {
    }
  return Jn.decode(Jn.format(e), Jn.decode.defaultChars + "%");
}
function vt(t, e) {
  if (!(this instanceof vt))
    return new vt(t, e);
  e || Di.isString(t) || (e = t || {}, t = "default"), this.inline = new oie(), this.block = new iie(), this.core = new rie(), this.renderer = new nie(), this.linkify = new sie(), this.validateLink = uie, this.normalizeLink = hie, this.normalizeLinkText = fie, this.utils = Di, this.helpers = Di.assign({}, tie), this.options = {}, this.configure(t), e && this.set(e);
}
vt.prototype.set = function(t) {
  return Di.assign(this.options, t), this;
};
vt.prototype.configure = function(t) {
  var e = this, n;
  if (Di.isString(t) && (n = t, t = lie[n], !t))
    throw new Error('Wrong `markdown-it` preset "' + n + '", check name');
  if (!t)
    throw new Error("Wrong `markdown-it` preset, can't be empty");
  return t.options && e.set(t.options), t.components && Object.keys(t.components).forEach(function(r) {
    t.components[r].rules && e[r].ruler.enableOnly(t.components[r].rules), t.components[r].rules2 && e[r].ruler2.enableOnly(t.components[r].rules2);
  }), this;
};
vt.prototype.enable = function(t, e) {
  var n = [];
  Array.isArray(t) || (t = [t]), ["core", "block", "inline"].forEach(function(i) {
    n = n.concat(this[i].ruler.enable(t, !0));
  }, this), n = n.concat(this.inline.ruler2.enable(t, !0));
  var r = t.filter(function(i) {
    return n.indexOf(i) < 0;
  });
  if (r.length && !e)
    throw new Error("MarkdownIt. Failed to enable unknown rule(s): " + r);
  return this;
};
vt.prototype.disable = function(t, e) {
  var n = [];
  Array.isArray(t) || (t = [t]), ["core", "block", "inline"].forEach(function(i) {
    n = n.concat(this[i].ruler.disable(t, !0));
  }, this), n = n.concat(this.inline.ruler2.disable(t, !0));
  var r = t.filter(function(i) {
    return n.indexOf(i) < 0;
  });
  if (r.length && !e)
    throw new Error("MarkdownIt. Failed to disable unknown rule(s): " + r);
  return this;
};
vt.prototype.use = function(t) {
  var e = [this].concat(Array.prototype.slice.call(arguments, 1));
  return t.apply(t, e), this;
};
vt.prototype.parse = function(t, e) {
  if (typeof t != "string")
    throw new Error("Input data should be a String");
  var n = new this.core.State(t, this, e);
  return this.core.process(n), n.tokens;
};
vt.prototype.render = function(t, e) {
  return e = e || {}, this.renderer.render(this.parse(t, e), this.options, e);
};
vt.prototype.parseInline = function(t, e) {
  var n = new this.core.State(t, this, e);
  return n.inlineMode = !0, this.core.process(n), n.tokens;
};
vt.prototype.renderInline = function(t, e) {
  return e = e || {}, this.renderer.render(this.parseInline(t, e), this.options, e);
};
var die = vt;
(function(t) {
  t.exports = die;
})(Gg);
const pie = /* @__PURE__ */ hv(Gg.exports), gl = ve.button.withConfig({
  displayName: "Buttons__DefaultButton",
  componentId: "sc-temzhj-0"
})(['cursor:pointer;color:#fff;font-family:"Lato",sans-serif;text-transform:uppercase;font-size:12px;font-weight:bold;border:1px solid var(--gray-800);background-color:var(--gray-800);height:40px;display:flex;justify-content:center;align-items:center;padding:0;transition:0.4s ease;border-radius:var(--border-radius);&:not(:disabled):hover{background-color:var(--green-400);border:1px solid var(--green-400);}']), pc = ve(gl).withConfig({
  displayName: "Buttons__TopbarButton",
  componentId: "sc-temzhj-1"
})(["padding:0px 15px;margin:5px;"]), mie = ve(gl).withConfig({
  displayName: "ButtonGroup__GroupButton",
  componentId: "sc-retnx5-0"
})(["color:", ";border:", ";background-color:", ";margin:5px;width:40px;"], (t) => t.$active ? "white" : "var(--gray-900)", (t) => t.$active ? "1px solid var(--green-500)" : "1px solid var(--gray-800)", (t) => t.$active ? "var(--green-500)" : "var(--gray-800)"), gie = ({
  buttons: t,
  initialClickedId: e = 2,
  clickCallback: n
}) => {
  const [r, i] = ut(e);
  return ht`
    ${t.map((o, s) => ht`
      <${mie} type="button" key=${o.label} name=${o.label} onClick=${() => {
    i(s), n(o.label);
  }} $active=${s === r}>
        <img src=${o.img} alt=${o.label} />
      <//>`)}
  `;
};
console.log("ButtonGroup component loaded");
class J {
  lineAt(e) {
    if (e < 0 || e > this.length)
      throw new RangeError(`Invalid position ${e} in document of length ${this.length}`);
    return this.lineInner(e, !1, 1, 0);
  }
  line(e) {
    if (e < 1 || e > this.lines)
      throw new RangeError(`Invalid line number ${e} in ${this.lines}-line document`);
    return this.lineInner(e, !0, 1, 0);
  }
  replace(e, n, r) {
    let i = [];
    return this.decompose(0, e, i, 2), r.length && r.decompose(0, r.length, i, 3), this.decompose(n, this.length, i, 1), qt.from(i, this.length - (n - e) + r.length);
  }
  append(e) {
    return this.replace(this.length, this.length, e);
  }
  slice(e, n = this.length) {
    let r = [];
    return this.decompose(e, n, r, 0), qt.from(r, n - e);
  }
  eq(e) {
    if (e == this)
      return !0;
    if (e.length != this.length || e.lines != this.lines)
      return !1;
    let n = this.scanIdentical(e, 1), r = this.length - this.scanIdentical(e, -1), i = new Mi(this), o = new Mi(e);
    for (let s = n, l = n; ; ) {
      if (i.next(s), o.next(s), s = 0, i.lineBreak != o.lineBreak || i.done != o.done || i.value != o.value)
        return !1;
      if (l += i.value.length, i.done || l >= r)
        return !0;
    }
  }
  iter(e = 1) {
    return new Mi(this, e);
  }
  iterRange(e, n = this.length) {
    return new p0(this, e, n);
  }
  iterLines(e, n) {
    let r;
    if (e == null)
      r = this.iter();
    else {
      n == null && (n = this.lines + 1);
      let i = this.line(e).from;
      r = this.iterRange(i, Math.max(i, n == this.lines + 1 ? this.length : n <= 1 ? 0 : this.line(n - 1).to));
    }
    return new m0(r);
  }
  toString() {
    return this.sliceString(0);
  }
  toJSON() {
    let e = [];
    return this.flatten(e), e;
  }
  constructor() {
  }
  static of(e) {
    if (e.length == 0)
      throw new RangeError("A document must have at least one line");
    return e.length == 1 && !e[0] ? J.empty : e.length <= 32 ? new xe(e) : qt.from(xe.split(e, []));
  }
}
class xe extends J {
  constructor(e, n = yie(e)) {
    super(), this.text = e, this.length = n;
  }
  get lines() {
    return this.text.length;
  }
  get children() {
    return null;
  }
  lineInner(e, n, r, i) {
    for (let o = 0; ; o++) {
      let s = this.text[o], l = i + s.length;
      if ((n ? r : l) >= e)
        return new bie(i, l, r, s);
      i = l + 1, r++;
    }
  }
  decompose(e, n, r, i) {
    let o = e <= 0 && n >= this.length ? this : new xe(_d(this.text, e, n), Math.min(n, this.length) - Math.max(0, e));
    if (i & 1) {
      let s = r.pop(), l = ns(o.text, s.text.slice(), 0, o.length);
      if (l.length <= 32)
        r.push(new xe(l, s.length + o.length));
      else {
        let a = l.length >> 1;
        r.push(new xe(l.slice(0, a)), new xe(l.slice(a)));
      }
    } else
      r.push(o);
  }
  replace(e, n, r) {
    if (!(r instanceof xe))
      return super.replace(e, n, r);
    let i = ns(this.text, ns(r.text, _d(this.text, 0, e)), n), o = this.length + r.length - (n - e);
    return i.length <= 32 ? new xe(i, o) : qt.from(xe.split(i, []), o);
  }
  sliceString(e, n = this.length, r = `
`) {
    let i = "";
    for (let o = 0, s = 0; o <= n && s < this.text.length; s++) {
      let l = this.text[s], a = o + l.length;
      o > e && s && (i += r), e < a && n > o && (i += l.slice(Math.max(0, e - o), n - o)), o = a + 1;
    }
    return i;
  }
  flatten(e) {
    for (let n of this.text)
      e.push(n);
  }
  scanIdentical() {
    return 0;
  }
  static split(e, n) {
    let r = [], i = -1;
    for (let o of e)
      r.push(o), i += o.length + 1, r.length == 32 && (n.push(new xe(r, i)), r = [], i = -1);
    return i > -1 && n.push(new xe(r, i)), n;
  }
}
class qt extends J {
  constructor(e, n) {
    super(), this.children = e, this.length = n, this.lines = 0;
    for (let r of e)
      this.lines += r.lines;
  }
  lineInner(e, n, r, i) {
    for (let o = 0; ; o++) {
      let s = this.children[o], l = i + s.length, a = r + s.lines - 1;
      if ((n ? a : l) >= e)
        return s.lineInner(e, n, r, i);
      i = l + 1, r = a + 1;
    }
  }
  decompose(e, n, r, i) {
    for (let o = 0, s = 0; s <= n && o < this.children.length; o++) {
      let l = this.children[o], a = s + l.length;
      if (e <= a && n >= s) {
        let c = i & ((s <= e ? 1 : 0) | (a >= n ? 2 : 0));
        s >= e && a <= n && !c ? r.push(l) : l.decompose(e - s, n - s, r, c);
      }
      s = a + 1;
    }
  }
  replace(e, n, r) {
    if (r.lines < this.lines)
      for (let i = 0, o = 0; i < this.children.length; i++) {
        let s = this.children[i], l = o + s.length;
        if (e >= o && n <= l) {
          let a = s.replace(e - o, n - o, r), c = this.lines - s.lines + a.lines;
          if (a.lines < c >> 5 - 1 && a.lines > c >> 5 + 1) {
            let u = this.children.slice();
            return u[i] = a, new qt(u, this.length - (n - e) + r.length);
          }
          return super.replace(o, l, a);
        }
        o = l + 1;
      }
    return super.replace(e, n, r);
  }
  sliceString(e, n = this.length, r = `
`) {
    let i = "";
    for (let o = 0, s = 0; o < this.children.length && s <= n; o++) {
      let l = this.children[o], a = s + l.length;
      s > e && o && (i += r), e < a && n > s && (i += l.sliceString(e - s, n - s, r)), s = a + 1;
    }
    return i;
  }
  flatten(e) {
    for (let n of this.children)
      n.flatten(e);
  }
  scanIdentical(e, n) {
    if (!(e instanceof qt))
      return 0;
    let r = 0, [i, o, s, l] = n > 0 ? [0, 0, this.children.length, e.children.length] : [this.children.length - 1, e.children.length - 1, -1, -1];
    for (; ; i += n, o += n) {
      if (i == s || o == l)
        return r;
      let a = this.children[i], c = e.children[o];
      if (a != c)
        return r + a.scanIdentical(c, n);
      r += a.length + 1;
    }
  }
  static from(e, n = e.reduce((r, i) => r + i.length + 1, -1)) {
    let r = 0;
    for (let d of e)
      r += d.lines;
    if (r < 32) {
      let d = [];
      for (let p of e)
        p.flatten(d);
      return new xe(d, n);
    }
    let i = Math.max(32, r >> 5), o = i << 1, s = i >> 1, l = [], a = 0, c = -1, u = [];
    function h(d) {
      let p;
      if (d.lines > o && d instanceof qt)
        for (let m of d.children)
          h(m);
      else
        d.lines > s && (a > s || !a) ? (f(), l.push(d)) : d instanceof xe && a && (p = u[u.length - 1]) instanceof xe && d.lines + p.lines <= 32 ? (a += d.lines, c += d.length + 1, u[u.length - 1] = new xe(p.text.concat(d.text), p.length + 1 + d.length)) : (a + d.lines > i && f(), a += d.lines, c += d.length + 1, u.push(d));
    }
    function f() {
      a != 0 && (l.push(u.length == 1 ? u[0] : qt.from(u, c)), c = -1, a = u.length = 0);
    }
    for (let d of e)
      h(d);
    return f(), l.length == 1 ? l[0] : new qt(l, n);
  }
}
J.empty = /* @__PURE__ */ new xe([""], 0);
function yie(t) {
  let e = -1;
  for (let n of t)
    e += n.length + 1;
  return e;
}
function ns(t, e, n = 0, r = 1e9) {
  for (let i = 0, o = 0, s = !0; o < t.length && i <= r; o++) {
    let l = t[o], a = i + l.length;
    a >= n && (a > r && (l = l.slice(0, r - i)), i < n && (l = l.slice(n - i)), s ? (e[e.length - 1] += l, s = !1) : e.push(l)), i = a + 1;
  }
  return e;
}
function _d(t, e, n) {
  return ns(t, [""], e, n);
}
class Mi {
  constructor(e, n = 1) {
    this.dir = n, this.done = !1, this.lineBreak = !1, this.value = "", this.nodes = [e], this.offsets = [n > 0 ? 1 : (e instanceof xe ? e.text.length : e.children.length) << 1];
  }
  nextInner(e, n) {
    for (this.done = this.lineBreak = !1; ; ) {
      let r = this.nodes.length - 1, i = this.nodes[r], o = this.offsets[r], s = o >> 1, l = i instanceof xe ? i.text.length : i.children.length;
      if (s == (n > 0 ? l : 0)) {
        if (r == 0)
          return this.done = !0, this.value = "", this;
        n > 0 && this.offsets[r - 1]++, this.nodes.pop(), this.offsets.pop();
      } else if ((o & 1) == (n > 0 ? 0 : 1)) {
        if (this.offsets[r] += n, e == 0)
          return this.lineBreak = !0, this.value = `
`, this;
        e--;
      } else if (i instanceof xe) {
        let a = i.text[s + (n < 0 ? -1 : 0)];
        if (this.offsets[r] += n, a.length > Math.max(0, e))
          return this.value = e == 0 ? a : n > 0 ? a.slice(e) : a.slice(0, a.length - e), this;
        e -= a.length;
      } else {
        let a = i.children[s + (n < 0 ? -1 : 0)];
        e > a.length ? (e -= a.length, this.offsets[r] += n) : (n < 0 && this.offsets[r]--, this.nodes.push(a), this.offsets.push(n > 0 ? 1 : (a instanceof xe ? a.text.length : a.children.length) << 1));
      }
    }
  }
  next(e = 0) {
    return e < 0 && (this.nextInner(-e, -this.dir), e = this.value.length), this.nextInner(e, this.dir);
  }
}
class p0 {
  constructor(e, n, r) {
    this.value = "", this.done = !1, this.cursor = new Mi(e, n > r ? -1 : 1), this.pos = n > r ? e.length : 0, this.from = Math.min(n, r), this.to = Math.max(n, r);
  }
  nextInner(e, n) {
    if (n < 0 ? this.pos <= this.from : this.pos >= this.to)
      return this.value = "", this.done = !0, this;
    e += Math.max(0, n < 0 ? this.pos - this.to : this.from - this.pos);
    let r = n < 0 ? this.pos - this.from : this.to - this.pos;
    e > r && (e = r), r -= e;
    let { value: i } = this.cursor.next(e);
    return this.pos += (i.length + e) * n, this.value = i.length <= r ? i : n < 0 ? i.slice(i.length - r) : i.slice(0, r), this.done = !this.value, this;
  }
  next(e = 0) {
    return e < 0 ? e = Math.max(e, this.from - this.pos) : e > 0 && (e = Math.min(e, this.to - this.pos)), this.nextInner(e, this.cursor.dir);
  }
  get lineBreak() {
    return this.cursor.lineBreak && this.value != "";
  }
}
class m0 {
  constructor(e) {
    this.inner = e, this.afterBreak = !0, this.value = "", this.done = !1;
  }
  next(e = 0) {
    let { done: n, lineBreak: r, value: i } = this.inner.next(e);
    return n ? (this.done = !0, this.value = "") : r ? this.afterBreak ? this.value = "" : (this.afterBreak = !0, this.next()) : (this.value = i, this.afterBreak = !1), this;
  }
  get lineBreak() {
    return !1;
  }
}
typeof Symbol < "u" && (J.prototype[Symbol.iterator] = function() {
  return this.iter();
}, Mi.prototype[Symbol.iterator] = p0.prototype[Symbol.iterator] = m0.prototype[Symbol.iterator] = function() {
  return this;
});
class bie {
  constructor(e, n, r, i) {
    this.from = e, this.to = n, this.number = r, this.text = i;
  }
  get length() {
    return this.to - this.from;
  }
}
let Ir = /* @__PURE__ */ "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map((t) => t ? parseInt(t, 36) : 1);
for (let t = 1; t < Ir.length; t++)
  Ir[t] += Ir[t - 1];
function vie(t) {
  for (let e = 1; e < Ir.length; e += 2)
    if (Ir[e] > t)
      return Ir[e - 1] <= t;
  return !1;
}
function kd(t) {
  return t >= 127462 && t <= 127487;
}
const wd = 8205;
function $e(t, e, n = !0, r = !0) {
  return (n ? g0 : xie)(t, e, r);
}
function g0(t, e, n) {
  if (e == t.length)
    return e;
  e && y0(t.charCodeAt(e)) && b0(t.charCodeAt(e - 1)) && e--;
  let r = Le(t, e);
  for (e += ft(r); e < t.length; ) {
    let i = Le(t, e);
    if (r == wd || i == wd || n && vie(i))
      e += ft(i), r = i;
    else if (kd(i)) {
      let o = 0, s = e - 2;
      for (; s >= 0 && kd(Le(t, s)); )
        o++, s -= 2;
      if (o % 2 == 0)
        break;
      e += 2;
    } else
      break;
  }
  return e;
}
function xie(t, e, n) {
  for (; e > 0; ) {
    let r = g0(t, e - 2, n);
    if (r < e)
      return r;
    e--;
  }
  return 0;
}
function y0(t) {
  return t >= 56320 && t < 57344;
}
function b0(t) {
  return t >= 55296 && t < 56320;
}
function Le(t, e) {
  let n = t.charCodeAt(e);
  if (!b0(n) || e + 1 == t.length)
    return n;
  let r = t.charCodeAt(e + 1);
  return y0(r) ? (n - 55296 << 10) + (r - 56320) + 65536 : n;
}
function Bu(t) {
  return t <= 65535 ? String.fromCharCode(t) : (t -= 65536, String.fromCharCode((t >> 10) + 55296, (t & 1023) + 56320));
}
function ft(t) {
  return t < 65536 ? 1 : 2;
}
const mc = /\r\n?|\n/;
var Ke = /* @__PURE__ */ function(t) {
  return t[t.Simple = 0] = "Simple", t[t.TrackDel = 1] = "TrackDel", t[t.TrackBefore = 2] = "TrackBefore", t[t.TrackAfter = 3] = "TrackAfter", t;
}(Ke || (Ke = {}));
class Kt {
  constructor(e) {
    this.sections = e;
  }
  get length() {
    let e = 0;
    for (let n = 0; n < this.sections.length; n += 2)
      e += this.sections[n];
    return e;
  }
  get newLength() {
    let e = 0;
    for (let n = 0; n < this.sections.length; n += 2) {
      let r = this.sections[n + 1];
      e += r < 0 ? this.sections[n] : r;
    }
    return e;
  }
  get empty() {
    return this.sections.length == 0 || this.sections.length == 2 && this.sections[1] < 0;
  }
  iterGaps(e) {
    for (let n = 0, r = 0, i = 0; n < this.sections.length; ) {
      let o = this.sections[n++], s = this.sections[n++];
      s < 0 ? (e(r, i, o), i += o) : i += s, r += o;
    }
  }
  iterChangedRanges(e, n = !1) {
    gc(this, e, n);
  }
  get invertedDesc() {
    let e = [];
    for (let n = 0; n < this.sections.length; ) {
      let r = this.sections[n++], i = this.sections[n++];
      i < 0 ? e.push(r, i) : e.push(i, r);
    }
    return new Kt(e);
  }
  composeDesc(e) {
    return this.empty ? e : e.empty ? this : v0(this, e);
  }
  mapDesc(e, n = !1) {
    return e.empty ? this : yc(this, e, n);
  }
  mapPos(e, n = -1, r = Ke.Simple) {
    let i = 0, o = 0;
    for (let s = 0; s < this.sections.length; ) {
      let l = this.sections[s++], a = this.sections[s++], c = i + l;
      if (a < 0) {
        if (c > e)
          return o + (e - i);
        o += l;
      } else {
        if (r != Ke.Simple && c >= e && (r == Ke.TrackDel && i < e && c > e || r == Ke.TrackBefore && i < e || r == Ke.TrackAfter && c > e))
          return null;
        if (c > e || c == e && n < 0 && !l)
          return e == i || n < 0 ? o : o + a;
        o += a;
      }
      i = c;
    }
    if (e > i)
      throw new RangeError(`Position ${e} is out of range for changeset of length ${i}`);
    return o;
  }
  touchesRange(e, n = e) {
    for (let r = 0, i = 0; r < this.sections.length && i <= n; ) {
      let o = this.sections[r++], s = this.sections[r++], l = i + o;
      if (s >= 0 && i <= n && l >= e)
        return i < e && l > n ? "cover" : !0;
      i = l;
    }
    return !1;
  }
  toString() {
    let e = "";
    for (let n = 0; n < this.sections.length; ) {
      let r = this.sections[n++], i = this.sections[n++];
      e += (e ? " " : "") + r + (i >= 0 ? ":" + i : "");
    }
    return e;
  }
  toJSON() {
    return this.sections;
  }
  static fromJSON(e) {
    if (!Array.isArray(e) || e.length % 2 || e.some((n) => typeof n != "number"))
      throw new RangeError("Invalid JSON representation of ChangeDesc");
    return new Kt(e);
  }
  static create(e) {
    return new Kt(e);
  }
}
class Ce extends Kt {
  constructor(e, n) {
    super(e), this.inserted = n;
  }
  apply(e) {
    if (this.length != e.length)
      throw new RangeError("Applying change set to a document with the wrong length");
    return gc(this, (n, r, i, o, s) => e = e.replace(i, i + (r - n), s), !1), e;
  }
  mapDesc(e, n = !1) {
    return yc(this, e, n, !0);
  }
  invert(e) {
    let n = this.sections.slice(), r = [];
    for (let i = 0, o = 0; i < n.length; i += 2) {
      let s = n[i], l = n[i + 1];
      if (l >= 0) {
        n[i] = l, n[i + 1] = s;
        let a = i >> 1;
        for (; r.length < a; )
          r.push(J.empty);
        r.push(s ? e.slice(o, o + s) : J.empty);
      }
      o += s;
    }
    return new Ce(n, r);
  }
  compose(e) {
    return this.empty ? e : e.empty ? this : v0(this, e, !0);
  }
  map(e, n = !1) {
    return e.empty ? this : yc(this, e, n, !0);
  }
  iterChanges(e, n = !1) {
    gc(this, e, n);
  }
  get desc() {
    return Kt.create(this.sections);
  }
  filter(e) {
    let n = [], r = [], i = [], o = new Vi(this);
    e:
      for (let s = 0, l = 0; ; ) {
        let a = s == e.length ? 1e9 : e[s++];
        for (; l < a || l == a && o.len == 0; ) {
          if (o.done)
            break e;
          let u = Math.min(o.len, a - l);
          qe(i, u, -1);
          let h = o.ins == -1 ? -1 : o.off == 0 ? o.ins : 0;
          qe(n, u, h), h > 0 && kn(r, n, o.text), o.forward(u), l += u;
        }
        let c = e[s++];
        for (; l < c; ) {
          if (o.done)
            break e;
          let u = Math.min(o.len, c - l);
          qe(n, u, -1), qe(i, u, o.ins == -1 ? -1 : o.off == 0 ? o.ins : 0), o.forward(u), l += u;
        }
      }
    return {
      changes: new Ce(n, r),
      filtered: Kt.create(i)
    };
  }
  toJSON() {
    let e = [];
    for (let n = 0; n < this.sections.length; n += 2) {
      let r = this.sections[n], i = this.sections[n + 1];
      i < 0 ? e.push(r) : i == 0 ? e.push([r]) : e.push([r].concat(this.inserted[n >> 1].toJSON()));
    }
    return e;
  }
  static of(e, n, r) {
    let i = [], o = [], s = 0, l = null;
    function a(u = !1) {
      if (!u && !i.length)
        return;
      s < n && qe(i, n - s, -1);
      let h = new Ce(i, o);
      l = l ? l.compose(h.map(l)) : h, i = [], o = [], s = 0;
    }
    function c(u) {
      if (Array.isArray(u))
        for (let h of u)
          c(h);
      else if (u instanceof Ce) {
        if (u.length != n)
          throw new RangeError(`Mismatched change set length (got ${u.length}, expected ${n})`);
        a(), l = l ? l.compose(u.map(l)) : u;
      } else {
        let { from: h, to: f = h, insert: d } = u;
        if (h > f || h < 0 || f > n)
          throw new RangeError(`Invalid change range ${h} to ${f} (in doc of length ${n})`);
        let p = d ? typeof d == "string" ? J.of(d.split(r || mc)) : d : J.empty, m = p.length;
        if (h == f && m == 0)
          return;
        h < s && a(), h > s && qe(i, h - s, -1), qe(i, f - h, m), kn(o, i, p), s = f;
      }
    }
    return c(e), a(!l), l;
  }
  static empty(e) {
    return new Ce(e ? [e, -1] : [], []);
  }
  static fromJSON(e) {
    if (!Array.isArray(e))
      throw new RangeError("Invalid JSON representation of ChangeSet");
    let n = [], r = [];
    for (let i = 0; i < e.length; i++) {
      let o = e[i];
      if (typeof o == "number")
        n.push(o, -1);
      else {
        if (!Array.isArray(o) || typeof o[0] != "number" || o.some((s, l) => l && typeof s != "string"))
          throw new RangeError("Invalid JSON representation of ChangeSet");
        if (o.length == 1)
          n.push(o[0], 0);
        else {
          for (; r.length < i; )
            r.push(J.empty);
          r[i] = J.of(o.slice(1)), n.push(o[0], r[i].length);
        }
      }
    }
    return new Ce(n, r);
  }
  static createSet(e, n) {
    return new Ce(e, n);
  }
}
function qe(t, e, n, r = !1) {
  if (e == 0 && n <= 0)
    return;
  let i = t.length - 2;
  i >= 0 && n <= 0 && n == t[i + 1] ? t[i] += e : e == 0 && t[i] == 0 ? t[i + 1] += n : r ? (t[i] += e, t[i + 1] += n) : t.push(e, n);
}
function kn(t, e, n) {
  if (n.length == 0)
    return;
  let r = e.length - 2 >> 1;
  if (r < t.length)
    t[t.length - 1] = t[t.length - 1].append(n);
  else {
    for (; t.length < r; )
      t.push(J.empty);
    t.push(n);
  }
}
function gc(t, e, n) {
  let r = t.inserted;
  for (let i = 0, o = 0, s = 0; s < t.sections.length; ) {
    let l = t.sections[s++], a = t.sections[s++];
    if (a < 0)
      i += l, o += l;
    else {
      let c = i, u = o, h = J.empty;
      for (; c += l, u += a, a && r && (h = h.append(r[s - 2 >> 1])), !(n || s == t.sections.length || t.sections[s + 1] < 0); )
        l = t.sections[s++], a = t.sections[s++];
      e(i, c, o, u, h), i = c, o = u;
    }
  }
}
function yc(t, e, n, r = !1) {
  let i = [], o = r ? [] : null, s = new Vi(t), l = new Vi(e);
  for (let a = -1; ; )
    if (s.ins == -1 && l.ins == -1) {
      let c = Math.min(s.len, l.len);
      qe(i, c, -1), s.forward(c), l.forward(c);
    } else if (l.ins >= 0 && (s.ins < 0 || a == s.i || s.off == 0 && (l.len < s.len || l.len == s.len && !n))) {
      let c = l.len;
      for (qe(i, l.ins, -1); c; ) {
        let u = Math.min(s.len, c);
        s.ins >= 0 && a < s.i && s.len <= u && (qe(i, 0, s.ins), o && kn(o, i, s.text), a = s.i), s.forward(u), c -= u;
      }
      l.next();
    } else if (s.ins >= 0) {
      let c = 0, u = s.len;
      for (; u; )
        if (l.ins == -1) {
          let h = Math.min(u, l.len);
          c += h, u -= h, l.forward(h);
        } else if (l.ins == 0 && l.len < u)
          u -= l.len, l.next();
        else
          break;
      qe(i, c, a < s.i ? s.ins : 0), o && a < s.i && kn(o, i, s.text), a = s.i, s.forward(s.len - u);
    } else {
      if (s.done && l.done)
        return o ? Ce.createSet(i, o) : Kt.create(i);
      throw new Error("Mismatched change set lengths");
    }
}
function v0(t, e, n = !1) {
  let r = [], i = n ? [] : null, o = new Vi(t), s = new Vi(e);
  for (let l = !1; ; ) {
    if (o.done && s.done)
      return i ? Ce.createSet(r, i) : Kt.create(r);
    if (o.ins == 0)
      qe(r, o.len, 0, l), o.next();
    else if (s.len == 0 && !s.done)
      qe(r, 0, s.ins, l), i && kn(i, r, s.text), s.next();
    else {
      if (o.done || s.done)
        throw new Error("Mismatched change set lengths");
      {
        let a = Math.min(o.len2, s.len), c = r.length;
        if (o.ins == -1) {
          let u = s.ins == -1 ? -1 : s.off ? 0 : s.ins;
          qe(r, a, u, l), i && u && kn(i, r, s.text);
        } else
          s.ins == -1 ? (qe(r, o.off ? 0 : o.len, a, l), i && kn(i, r, o.textBit(a))) : (qe(r, o.off ? 0 : o.len, s.off ? 0 : s.ins, l), i && !s.off && kn(i, r, s.text));
        l = (o.ins > a || s.ins >= 0 && s.len > a) && (l || r.length > c), o.forward2(a), s.forward(a);
      }
    }
  }
}
class Vi {
  constructor(e) {
    this.set = e, this.i = 0, this.next();
  }
  next() {
    let { sections: e } = this.set;
    this.i < e.length ? (this.len = e[this.i++], this.ins = e[this.i++]) : (this.len = 0, this.ins = -2), this.off = 0;
  }
  get done() {
    return this.ins == -2;
  }
  get len2() {
    return this.ins < 0 ? this.len : this.ins;
  }
  get text() {
    let { inserted: e } = this.set, n = this.i - 2 >> 1;
    return n >= e.length ? J.empty : e[n];
  }
  textBit(e) {
    let { inserted: n } = this.set, r = this.i - 2 >> 1;
    return r >= n.length && !e ? J.empty : n[r].slice(this.off, e == null ? void 0 : this.off + e);
  }
  forward(e) {
    e == this.len ? this.next() : (this.len -= e, this.off += e);
  }
  forward2(e) {
    this.ins == -1 ? this.forward(e) : e == this.ins ? this.next() : (this.ins -= e, this.off += e);
  }
}
class Xn {
  constructor(e, n, r) {
    this.from = e, this.to = n, this.flags = r;
  }
  get anchor() {
    return this.flags & 16 ? this.to : this.from;
  }
  get head() {
    return this.flags & 16 ? this.from : this.to;
  }
  get empty() {
    return this.from == this.to;
  }
  get assoc() {
    return this.flags & 4 ? -1 : this.flags & 8 ? 1 : 0;
  }
  get bidiLevel() {
    let e = this.flags & 3;
    return e == 3 ? null : e;
  }
  get goalColumn() {
    let e = this.flags >> 5;
    return e == 33554431 ? void 0 : e;
  }
  map(e, n = -1) {
    let r, i;
    return this.empty ? r = i = e.mapPos(this.from, n) : (r = e.mapPos(this.from, 1), i = e.mapPos(this.to, -1)), r == this.from && i == this.to ? this : new Xn(r, i, this.flags);
  }
  extend(e, n = e) {
    if (e <= this.anchor && n >= this.anchor)
      return A.range(e, n);
    let r = Math.abs(e - this.anchor) > Math.abs(n - this.anchor) ? e : n;
    return A.range(this.anchor, r);
  }
  eq(e) {
    return this.anchor == e.anchor && this.head == e.head;
  }
  toJSON() {
    return { anchor: this.anchor, head: this.head };
  }
  static fromJSON(e) {
    if (!e || typeof e.anchor != "number" || typeof e.head != "number")
      throw new RangeError("Invalid JSON representation for SelectionRange");
    return A.range(e.anchor, e.head);
  }
  static create(e, n, r) {
    return new Xn(e, n, r);
  }
}
class A {
  constructor(e, n) {
    this.ranges = e, this.mainIndex = n;
  }
  map(e, n = -1) {
    return e.empty ? this : A.create(this.ranges.map((r) => r.map(e, n)), this.mainIndex);
  }
  eq(e) {
    if (this.ranges.length != e.ranges.length || this.mainIndex != e.mainIndex)
      return !1;
    for (let n = 0; n < this.ranges.length; n++)
      if (!this.ranges[n].eq(e.ranges[n]))
        return !1;
    return !0;
  }
  get main() {
    return this.ranges[this.mainIndex];
  }
  asSingle() {
    return this.ranges.length == 1 ? this : new A([this.main], 0);
  }
  addRange(e, n = !0) {
    return A.create([e].concat(this.ranges), n ? 0 : this.mainIndex + 1);
  }
  replaceRange(e, n = this.mainIndex) {
    let r = this.ranges.slice();
    return r[n] = e, A.create(r, this.mainIndex);
  }
  toJSON() {
    return { ranges: this.ranges.map((e) => e.toJSON()), main: this.mainIndex };
  }
  static fromJSON(e) {
    if (!e || !Array.isArray(e.ranges) || typeof e.main != "number" || e.main >= e.ranges.length)
      throw new RangeError("Invalid JSON representation for EditorSelection");
    return new A(e.ranges.map((n) => Xn.fromJSON(n)), e.main);
  }
  static single(e, n = e) {
    return new A([A.range(e, n)], 0);
  }
  static create(e, n = 0) {
    if (e.length == 0)
      throw new RangeError("A selection needs at least one range");
    for (let r = 0, i = 0; i < e.length; i++) {
      let o = e[i];
      if (o.empty ? o.from <= r : o.from < r)
        return A.normalized(e.slice(), n);
      r = o.to;
    }
    return new A(e, n);
  }
  static cursor(e, n = 0, r, i) {
    return Xn.create(e, e, (n == 0 ? 0 : n < 0 ? 4 : 8) | (r == null ? 3 : Math.min(2, r)) | (i != null ? i : 33554431) << 5);
  }
  static range(e, n, r, i) {
    let o = (r != null ? r : 33554431) << 5 | (i == null ? 3 : Math.min(2, i));
    return n < e ? Xn.create(n, e, 24 | o) : Xn.create(e, n, (n > e ? 4 : 0) | o);
  }
  static normalized(e, n = 0) {
    let r = e[n];
    e.sort((i, o) => i.from - o.from), n = e.indexOf(r);
    for (let i = 1; i < e.length; i++) {
      let o = e[i], s = e[i - 1];
      if (o.empty ? o.from <= s.to : o.from < s.to) {
        let l = s.from, a = Math.max(o.to, s.to);
        i <= n && n--, e.splice(--i, 2, o.anchor > o.head ? A.range(a, l) : A.range(l, a));
      }
    }
    return new A(e, n);
  }
}
function x0(t, e) {
  for (let n of t.ranges)
    if (n.to > e)
      throw new RangeError("Selection points outside of document");
}
let Fu = 0;
class N {
  constructor(e, n, r, i, o) {
    this.combine = e, this.compareInput = n, this.compare = r, this.isStatic = i, this.id = Fu++, this.default = e([]), this.extensions = typeof o == "function" ? o(this) : o;
  }
  static define(e = {}) {
    return new N(e.combine || ((n) => n), e.compareInput || ((n, r) => n === r), e.compare || (e.combine ? (n, r) => n === r : qu), !!e.static, e.enables);
  }
  of(e) {
    return new rs([], this, 0, e);
  }
  compute(e, n) {
    if (this.isStatic)
      throw new Error("Can't compute a static facet");
    return new rs(e, this, 1, n);
  }
  computeN(e, n) {
    if (this.isStatic)
      throw new Error("Can't compute a static facet");
    return new rs(e, this, 2, n);
  }
  from(e, n) {
    return n || (n = (r) => r), this.compute([e], (r) => n(r.field(e)));
  }
}
function qu(t, e) {
  return t == e || t.length == e.length && t.every((n, r) => n === e[r]);
}
class rs {
  constructor(e, n, r, i) {
    this.dependencies = e, this.facet = n, this.type = r, this.value = i, this.id = Fu++;
  }
  dynamicSlot(e) {
    var n;
    let r = this.value, i = this.facet.compareInput, o = this.id, s = e[o] >> 1, l = this.type == 2, a = !1, c = !1, u = [];
    for (let h of this.dependencies)
      h == "doc" ? a = !0 : h == "selection" ? c = !0 : (((n = e[h.id]) !== null && n !== void 0 ? n : 1) & 1) == 0 && u.push(e[h.id]);
    return {
      create(h) {
        return h.values[s] = r(h), 1;
      },
      update(h, f) {
        if (a && f.docChanged || c && (f.docChanged || f.selection) || bc(h, u)) {
          let d = r(h);
          if (l ? !Cd(d, h.values[s], i) : !i(d, h.values[s]))
            return h.values[s] = d, 1;
        }
        return 0;
      },
      reconfigure: (h, f) => {
        let d, p = f.config.address[o];
        if (p != null) {
          let m = As(f, p);
          if (this.dependencies.every((g) => g instanceof N ? f.facet(g) === h.facet(g) : g instanceof Be ? f.field(g, !1) == h.field(g, !1) : !0) || (l ? Cd(d = r(h), m, i) : i(d = r(h), m)))
            return h.values[s] = m, 0;
        } else
          d = r(h);
        return h.values[s] = d, 1;
      }
    };
  }
}
function Cd(t, e, n) {
  if (t.length != e.length)
    return !1;
  for (let r = 0; r < t.length; r++)
    if (!n(t[r], e[r]))
      return !1;
  return !0;
}
function bc(t, e) {
  let n = !1;
  for (let r of e)
    Oi(t, r) & 1 && (n = !0);
  return n;
}
function _ie(t, e, n) {
  let r = n.map((a) => t[a.id]), i = n.map((a) => a.type), o = r.filter((a) => !(a & 1)), s = t[e.id] >> 1;
  function l(a) {
    let c = [];
    for (let u = 0; u < r.length; u++) {
      let h = As(a, r[u]);
      if (i[u] == 2)
        for (let f of h)
          c.push(f);
      else
        c.push(h);
    }
    return e.combine(c);
  }
  return {
    create(a) {
      for (let c of r)
        Oi(a, c);
      return a.values[s] = l(a), 1;
    },
    update(a, c) {
      if (!bc(a, o))
        return 0;
      let u = l(a);
      return e.compare(u, a.values[s]) ? 0 : (a.values[s] = u, 1);
    },
    reconfigure(a, c) {
      let u = bc(a, r), h = c.config.facets[e.id], f = c.facet(e);
      if (h && !u && qu(n, h))
        return a.values[s] = f, 0;
      let d = l(a);
      return e.compare(d, f) ? (a.values[s] = f, 0) : (a.values[s] = d, 1);
    }
  };
}
const Ad = /* @__PURE__ */ N.define({ static: !0 });
class Be {
  constructor(e, n, r, i, o) {
    this.id = e, this.createF = n, this.updateF = r, this.compareF = i, this.spec = o, this.provides = void 0;
  }
  static define(e) {
    let n = new Be(Fu++, e.create, e.update, e.compare || ((r, i) => r === i), e);
    return e.provide && (n.provides = e.provide(n)), n;
  }
  create(e) {
    let n = e.facet(Ad).find((r) => r.field == this);
    return ((n == null ? void 0 : n.create) || this.createF)(e);
  }
  slot(e) {
    let n = e[this.id] >> 1;
    return {
      create: (r) => (r.values[n] = this.create(r), 1),
      update: (r, i) => {
        let o = r.values[n], s = this.updateF(o, i);
        return this.compareF(o, s) ? 0 : (r.values[n] = s, 1);
      },
      reconfigure: (r, i) => i.config.address[this.id] != null ? (r.values[n] = i.field(this), 0) : (r.values[n] = this.create(r), 1)
    };
  }
  init(e) {
    return [this, Ad.of({ field: this, create: e })];
  }
  get extension() {
    return this;
  }
}
const Kn = { lowest: 4, low: 3, default: 2, high: 1, highest: 0 };
function di(t) {
  return (e) => new _0(e, t);
}
const si = {
  highest: /* @__PURE__ */ di(Kn.highest),
  high: /* @__PURE__ */ di(Kn.high),
  default: /* @__PURE__ */ di(Kn.default),
  low: /* @__PURE__ */ di(Kn.low),
  lowest: /* @__PURE__ */ di(Kn.lowest)
};
class _0 {
  constructor(e, n) {
    this.inner = e, this.prec = n;
  }
}
class yl {
  of(e) {
    return new vc(this, e);
  }
  reconfigure(e) {
    return yl.reconfigure.of({ compartment: this, extension: e });
  }
  get(e) {
    return e.config.compartments.get(this);
  }
}
class vc {
  constructor(e, n) {
    this.compartment = e, this.inner = n;
  }
}
class Cs {
  constructor(e, n, r, i, o, s) {
    for (this.base = e, this.compartments = n, this.dynamicSlots = r, this.address = i, this.staticValues = o, this.facets = s, this.statusTemplate = []; this.statusTemplate.length < r.length; )
      this.statusTemplate.push(0);
  }
  staticFacet(e) {
    let n = this.address[e.id];
    return n == null ? e.default : this.staticValues[n >> 1];
  }
  static resolve(e, n, r) {
    let i = [], o = /* @__PURE__ */ Object.create(null), s = /* @__PURE__ */ new Map();
    for (let f of kie(e, n, s))
      f instanceof Be ? i.push(f) : (o[f.facet.id] || (o[f.facet.id] = [])).push(f);
    let l = /* @__PURE__ */ Object.create(null), a = [], c = [];
    for (let f of i)
      l[f.id] = c.length << 1, c.push((d) => f.slot(d));
    let u = r == null ? void 0 : r.config.facets;
    for (let f in o) {
      let d = o[f], p = d[0].facet, m = u && u[f] || [];
      if (d.every((g) => g.type == 0))
        if (l[p.id] = a.length << 1 | 1, qu(m, d))
          a.push(r.facet(p));
        else {
          let g = p.combine(d.map((y) => y.value));
          a.push(r && p.compare(g, r.facet(p)) ? r.facet(p) : g);
        }
      else {
        for (let g of d)
          g.type == 0 ? (l[g.id] = a.length << 1 | 1, a.push(g.value)) : (l[g.id] = c.length << 1, c.push((y) => g.dynamicSlot(y)));
        l[p.id] = c.length << 1, c.push((g) => _ie(g, p, d));
      }
    }
    let h = c.map((f) => f(l));
    return new Cs(e, s, h, l, a, o);
  }
}
function kie(t, e, n) {
  let r = [[], [], [], [], []], i = /* @__PURE__ */ new Map();
  function o(s, l) {
    let a = i.get(s);
    if (a != null) {
      if (a <= l)
        return;
      let c = r[a].indexOf(s);
      c > -1 && r[a].splice(c, 1), s instanceof vc && n.delete(s.compartment);
    }
    if (i.set(s, l), Array.isArray(s))
      for (let c of s)
        o(c, l);
    else if (s instanceof vc) {
      if (n.has(s.compartment))
        throw new RangeError("Duplicate use of compartment in extensions");
      let c = e.get(s.compartment) || s.inner;
      n.set(s.compartment, c), o(c, l);
    } else if (s instanceof _0)
      o(s.inner, s.prec);
    else if (s instanceof Be)
      r[l].push(s), s.provides && o(s.provides, l);
    else if (s instanceof rs)
      r[l].push(s), s.facet.extensions && o(s.facet.extensions, Kn.default);
    else {
      let c = s.extension;
      if (!c)
        throw new Error(`Unrecognized extension value in extension set (${s}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);
      o(c, l);
    }
  }
  return o(t, Kn.default), r.reduce((s, l) => s.concat(l));
}
function Oi(t, e) {
  if (e & 1)
    return 2;
  let n = e >> 1, r = t.status[n];
  if (r == 4)
    throw new Error("Cyclic dependency between fields and/or facets");
  if (r & 2)
    return r;
  t.status[n] = 4;
  let i = t.computeSlot(t, t.config.dynamicSlots[n]);
  return t.status[n] = 2 | i;
}
function As(t, e) {
  return e & 1 ? t.config.staticValues[e >> 1] : t.values[e >> 1];
}
const k0 = /* @__PURE__ */ N.define(), w0 = /* @__PURE__ */ N.define({
  combine: (t) => t.some((e) => e),
  static: !0
}), C0 = /* @__PURE__ */ N.define({
  combine: (t) => t.length ? t[0] : void 0,
  static: !0
}), A0 = /* @__PURE__ */ N.define(), S0 = /* @__PURE__ */ N.define(), E0 = /* @__PURE__ */ N.define(), T0 = /* @__PURE__ */ N.define({
  combine: (t) => t.length ? t[0] : !1
});
class fn {
  constructor(e, n) {
    this.type = e, this.value = n;
  }
  static define() {
    return new wie();
  }
}
class wie {
  of(e) {
    return new fn(this, e);
  }
}
class Cie {
  constructor(e) {
    this.map = e;
  }
  of(e) {
    return new j(this, e);
  }
}
class j {
  constructor(e, n) {
    this.type = e, this.value = n;
  }
  map(e) {
    let n = this.type.map(this.value, e);
    return n === void 0 ? void 0 : n == this.value ? this : new j(this.type, n);
  }
  is(e) {
    return this.type == e;
  }
  static define(e = {}) {
    return new Cie(e.map || ((n) => n));
  }
  static mapEffects(e, n) {
    if (!e.length)
      return e;
    let r = [];
    for (let i of e) {
      let o = i.map(n);
      o && r.push(o);
    }
    return r;
  }
}
j.reconfigure = /* @__PURE__ */ j.define();
j.appendConfig = /* @__PURE__ */ j.define();
class Se {
  constructor(e, n, r, i, o, s) {
    this.startState = e, this.changes = n, this.selection = r, this.effects = i, this.annotations = o, this.scrollIntoView = s, this._doc = null, this._state = null, r && x0(r, n.newLength), o.some((l) => l.type == Se.time) || (this.annotations = o.concat(Se.time.of(Date.now())));
  }
  static create(e, n, r, i, o, s) {
    return new Se(e, n, r, i, o, s);
  }
  get newDoc() {
    return this._doc || (this._doc = this.changes.apply(this.startState.doc));
  }
  get newSelection() {
    return this.selection || this.startState.selection.map(this.changes);
  }
  get state() {
    return this._state || this.startState.applyTransaction(this), this._state;
  }
  annotation(e) {
    for (let n of this.annotations)
      if (n.type == e)
        return n.value;
  }
  get docChanged() {
    return !this.changes.empty;
  }
  get reconfigured() {
    return this.startState.config != this.state.config;
  }
  isUserEvent(e) {
    let n = this.annotation(Se.userEvent);
    return !!(n && (n == e || n.length > e.length && n.slice(0, e.length) == e && n[e.length] == "."));
  }
}
Se.time = /* @__PURE__ */ fn.define();
Se.userEvent = /* @__PURE__ */ fn.define();
Se.addToHistory = /* @__PURE__ */ fn.define();
Se.remote = /* @__PURE__ */ fn.define();
function Aie(t, e) {
  let n = [];
  for (let r = 0, i = 0; ; ) {
    let o, s;
    if (r < t.length && (i == e.length || e[i] >= t[r]))
      o = t[r++], s = t[r++];
    else if (i < e.length)
      o = e[i++], s = e[i++];
    else
      return n;
    !n.length || n[n.length - 1] < o ? n.push(o, s) : n[n.length - 1] < s && (n[n.length - 1] = s);
  }
}
function D0(t, e, n) {
  var r;
  let i, o, s;
  return n ? (i = e.changes, o = Ce.empty(e.changes.length), s = t.changes.compose(e.changes)) : (i = e.changes.map(t.changes), o = t.changes.mapDesc(e.changes, !0), s = t.changes.compose(i)), {
    changes: s,
    selection: e.selection ? e.selection.map(o) : (r = t.selection) === null || r === void 0 ? void 0 : r.map(i),
    effects: j.mapEffects(t.effects, i).concat(j.mapEffects(e.effects, o)),
    annotations: t.annotations.length ? t.annotations.concat(e.annotations) : e.annotations,
    scrollIntoView: t.scrollIntoView || e.scrollIntoView
  };
}
function xc(t, e, n) {
  let r = e.selection, i = Nr(e.annotations);
  return e.userEvent && (i = i.concat(Se.userEvent.of(e.userEvent))), {
    changes: e.changes instanceof Ce ? e.changes : Ce.of(e.changes || [], n, t.facet(C0)),
    selection: r && (r instanceof A ? r : A.single(r.anchor, r.head)),
    effects: Nr(e.effects),
    annotations: i,
    scrollIntoView: !!e.scrollIntoView
  };
}
function M0(t, e, n) {
  let r = xc(t, e.length ? e[0] : {}, t.doc.length);
  e.length && e[0].filter === !1 && (n = !1);
  for (let o = 1; o < e.length; o++) {
    e[o].filter === !1 && (n = !1);
    let s = !!e[o].sequential;
    r = D0(r, xc(t, e[o], s ? r.changes.newLength : t.doc.length), s);
  }
  let i = Se.create(t, r.changes, r.selection, r.effects, r.annotations, r.scrollIntoView);
  return Eie(n ? Sie(i) : i);
}
function Sie(t) {
  let e = t.startState, n = !0;
  for (let i of e.facet(A0)) {
    let o = i(t);
    if (o === !1) {
      n = !1;
      break;
    }
    Array.isArray(o) && (n = n === !0 ? o : Aie(n, o));
  }
  if (n !== !0) {
    let i, o;
    if (n === !1)
      o = t.changes.invertedDesc, i = Ce.empty(e.doc.length);
    else {
      let s = t.changes.filter(n);
      i = s.changes, o = s.filtered.mapDesc(s.changes).invertedDesc;
    }
    t = Se.create(e, i, t.selection && t.selection.map(o), j.mapEffects(t.effects, o), t.annotations, t.scrollIntoView);
  }
  let r = e.facet(S0);
  for (let i = r.length - 1; i >= 0; i--) {
    let o = r[i](t);
    o instanceof Se ? t = o : Array.isArray(o) && o.length == 1 && o[0] instanceof Se ? t = o[0] : t = M0(e, Nr(o), !1);
  }
  return t;
}
function Eie(t) {
  let e = t.startState, n = e.facet(E0), r = t;
  for (let i = n.length - 1; i >= 0; i--) {
    let o = n[i](t);
    o && Object.keys(o).length && (r = D0(r, xc(e, o, t.changes.newLength), !0));
  }
  return r == t ? t : Se.create(e, t.changes, t.selection, r.effects, r.annotations, r.scrollIntoView);
}
const Tie = [];
function Nr(t) {
  return t == null ? Tie : Array.isArray(t) ? t : [t];
}
var ge = /* @__PURE__ */ function(t) {
  return t[t.Word = 0] = "Word", t[t.Space = 1] = "Space", t[t.Other = 2] = "Other", t;
}(ge || (ge = {}));
const Die = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
let _c;
try {
  _c = /* @__PURE__ */ new RegExp("[\\p{Alphabetic}\\p{Number}_]", "u");
} catch {
}
function Mie(t) {
  if (_c)
    return _c.test(t);
  for (let e = 0; e < t.length; e++) {
    let n = t[e];
    if (/\w/.test(n) || n > "\x80" && (n.toUpperCase() != n.toLowerCase() || Die.test(n)))
      return !0;
  }
  return !1;
}
function Oie(t) {
  return (e) => {
    if (!/\S/.test(e))
      return ge.Space;
    if (Mie(e))
      return ge.Word;
    for (let n = 0; n < t.length; n++)
      if (e.indexOf(t[n]) > -1)
        return ge.Word;
    return ge.Other;
  };
}
class Y {
  constructor(e, n, r, i, o, s) {
    this.config = e, this.doc = n, this.selection = r, this.values = i, this.status = e.statusTemplate.slice(), this.computeSlot = o, s && (s._state = this);
    for (let l = 0; l < this.config.dynamicSlots.length; l++)
      Oi(this, l << 1);
    this.computeSlot = null;
  }
  field(e, n = !0) {
    let r = this.config.address[e.id];
    if (r == null) {
      if (n)
        throw new RangeError("Field is not present in this state");
      return;
    }
    return Oi(this, r), As(this, r);
  }
  update(...e) {
    return M0(this, e, !0);
  }
  applyTransaction(e) {
    let n = this.config, { base: r, compartments: i } = n;
    for (let s of e.effects)
      s.is(yl.reconfigure) ? (n && (i = /* @__PURE__ */ new Map(), n.compartments.forEach((l, a) => i.set(a, l)), n = null), i.set(s.value.compartment, s.value.extension)) : s.is(j.reconfigure) ? (n = null, r = s.value) : s.is(j.appendConfig) && (n = null, r = Nr(r).concat(s.value));
    let o;
    n ? o = e.startState.values.slice() : (n = Cs.resolve(r, i, this), o = new Y(n, this.doc, this.selection, n.dynamicSlots.map(() => null), (l, a) => a.reconfigure(l, this), null).values), new Y(n, e.newDoc, e.newSelection, o, (s, l) => l.update(s, e), e);
  }
  replaceSelection(e) {
    return typeof e == "string" && (e = this.toText(e)), this.changeByRange((n) => ({
      changes: { from: n.from, to: n.to, insert: e },
      range: A.cursor(n.from + e.length)
    }));
  }
  changeByRange(e) {
    let n = this.selection, r = e(n.ranges[0]), i = this.changes(r.changes), o = [r.range], s = Nr(r.effects);
    for (let l = 1; l < n.ranges.length; l++) {
      let a = e(n.ranges[l]), c = this.changes(a.changes), u = c.map(i);
      for (let f = 0; f < l; f++)
        o[f] = o[f].map(u);
      let h = i.mapDesc(c, !0);
      o.push(a.range.map(h)), i = i.compose(u), s = j.mapEffects(s, u).concat(j.mapEffects(Nr(a.effects), h));
    }
    return {
      changes: i,
      selection: A.create(o, n.mainIndex),
      effects: s
    };
  }
  changes(e = []) {
    return e instanceof Ce ? e : Ce.of(e, this.doc.length, this.facet(Y.lineSeparator));
  }
  toText(e) {
    return J.of(e.split(this.facet(Y.lineSeparator) || mc));
  }
  sliceDoc(e = 0, n = this.doc.length) {
    return this.doc.sliceString(e, n, this.lineBreak);
  }
  facet(e) {
    let n = this.config.address[e.id];
    return n == null ? e.default : (Oi(this, n), As(this, n));
  }
  toJSON(e) {
    let n = {
      doc: this.sliceDoc(),
      selection: this.selection.toJSON()
    };
    if (e)
      for (let r in e) {
        let i = e[r];
        i instanceof Be && this.config.address[i.id] != null && (n[r] = i.spec.toJSON(this.field(e[r]), this));
      }
    return n;
  }
  static fromJSON(e, n = {}, r) {
    if (!e || typeof e.doc != "string")
      throw new RangeError("Invalid JSON representation for EditorState");
    let i = [];
    if (r) {
      for (let o in r)
        if (Object.prototype.hasOwnProperty.call(e, o)) {
          let s = r[o], l = e[o];
          i.push(s.init((a) => s.spec.fromJSON(l, a)));
        }
    }
    return Y.create({
      doc: e.doc,
      selection: A.fromJSON(e.selection),
      extensions: n.extensions ? i.concat([n.extensions]) : i
    });
  }
  static create(e = {}) {
    let n = Cs.resolve(e.extensions || [], /* @__PURE__ */ new Map()), r = e.doc instanceof J ? e.doc : J.of((e.doc || "").split(n.staticFacet(Y.lineSeparator) || mc)), i = e.selection ? e.selection instanceof A ? e.selection : A.single(e.selection.anchor, e.selection.head) : A.single(0);
    return x0(i, r.length), n.staticFacet(w0) || (i = i.asSingle()), new Y(n, r, i, n.dynamicSlots.map(() => null), (o, s) => s.create(o), null);
  }
  get tabSize() {
    return this.facet(Y.tabSize);
  }
  get lineBreak() {
    return this.facet(Y.lineSeparator) || `
`;
  }
  get readOnly() {
    return this.facet(T0);
  }
  phrase(e, ...n) {
    for (let r of this.facet(Y.phrases))
      if (Object.prototype.hasOwnProperty.call(r, e)) {
        e = r[e];
        break;
      }
    return n.length && (e = e.replace(/\$(\$|\d*)/g, (r, i) => {
      if (i == "$")
        return "$";
      let o = +(i || 1);
      return !o || o > n.length ? r : n[o - 1];
    })), e;
  }
  languageDataAt(e, n, r = -1) {
    let i = [];
    for (let o of this.facet(k0))
      for (let s of o(this, n, r))
        Object.prototype.hasOwnProperty.call(s, e) && i.push(s[e]);
    return i;
  }
  charCategorizer(e) {
    return Oie(this.languageDataAt("wordChars", e).join(""));
  }
  wordAt(e) {
    let { text: n, from: r, length: i } = this.doc.lineAt(e), o = this.charCategorizer(e), s = e - r, l = e - r;
    for (; s > 0; ) {
      let a = $e(n, s, !1);
      if (o(n.slice(a, s)) != ge.Word)
        break;
      s = a;
    }
    for (; l < i; ) {
      let a = $e(n, l);
      if (o(n.slice(l, a)) != ge.Word)
        break;
      l = a;
    }
    return s == l ? null : A.range(s + r, l + r);
  }
}
Y.allowMultipleSelections = w0;
Y.tabSize = /* @__PURE__ */ N.define({
  combine: (t) => t.length ? t[0] : 4
});
Y.lineSeparator = C0;
Y.readOnly = T0;
Y.phrases = /* @__PURE__ */ N.define({
  compare(t, e) {
    let n = Object.keys(t), r = Object.keys(e);
    return n.length == r.length && n.every((i) => t[i] == e[i]);
  }
});
Y.languageData = k0;
Y.changeFilter = A0;
Y.transactionFilter = S0;
Y.transactionExtender = E0;
yl.reconfigure = /* @__PURE__ */ j.define();
function Xt(t, e, n = {}) {
  let r = {};
  for (let i of t)
    for (let o of Object.keys(i)) {
      let s = i[o], l = r[o];
      if (l === void 0)
        r[o] = s;
      else if (!(l === s || s === void 0))
        if (Object.hasOwnProperty.call(n, o))
          r[o] = n[o](l, s);
        else
          throw new Error("Config merge conflict for field " + o);
    }
  for (let i in e)
    r[i] === void 0 && (r[i] = e[i]);
  return r;
}
class ar {
  eq(e) {
    return this == e;
  }
  range(e, n = e) {
    return Ui.create(e, n, this);
  }
}
ar.prototype.startSide = ar.prototype.endSide = 0;
ar.prototype.point = !1;
ar.prototype.mapMode = Ke.TrackDel;
class Ui {
  constructor(e, n, r) {
    this.from = e, this.to = n, this.value = r;
  }
  static create(e, n, r) {
    return new Ui(e, n, r);
  }
}
function kc(t, e) {
  return t.from - e.from || t.value.startSide - e.value.startSide;
}
class $u {
  constructor(e, n, r, i) {
    this.from = e, this.to = n, this.value = r, this.maxPoint = i;
  }
  get length() {
    return this.to[this.to.length - 1];
  }
  findIndex(e, n, r, i = 0) {
    let o = r ? this.to : this.from;
    for (let s = i, l = o.length; ; ) {
      if (s == l)
        return s;
      let a = s + l >> 1, c = o[a] - e || (r ? this.value[a].endSide : this.value[a].startSide) - n;
      if (a == s)
        return c >= 0 ? s : l;
      c >= 0 ? l = a : s = a + 1;
    }
  }
  between(e, n, r, i) {
    for (let o = this.findIndex(n, -1e9, !0), s = this.findIndex(r, 1e9, !1, o); o < s; o++)
      if (i(this.from[o] + e, this.to[o] + e, this.value[o]) === !1)
        return !1;
  }
  map(e, n) {
    let r = [], i = [], o = [], s = -1, l = -1;
    for (let a = 0; a < this.value.length; a++) {
      let c = this.value[a], u = this.from[a] + e, h = this.to[a] + e, f, d;
      if (u == h) {
        let p = n.mapPos(u, c.startSide, c.mapMode);
        if (p == null || (f = d = p, c.startSide != c.endSide && (d = n.mapPos(u, c.endSide), d < f)))
          continue;
      } else if (f = n.mapPos(u, c.startSide), d = n.mapPos(h, c.endSide), f > d || f == d && c.startSide > 0 && c.endSide <= 0)
        continue;
      (d - f || c.endSide - c.startSide) < 0 || (s < 0 && (s = f), c.point && (l = Math.max(l, d - f)), r.push(c), i.push(f - s), o.push(d - s));
    }
    return { mapped: r.length ? new $u(i, o, r, l) : null, pos: s };
  }
}
class te {
  constructor(e, n, r, i) {
    this.chunkPos = e, this.chunk = n, this.nextLayer = r, this.maxPoint = i;
  }
  static create(e, n, r, i) {
    return new te(e, n, r, i);
  }
  get length() {
    let e = this.chunk.length - 1;
    return e < 0 ? 0 : Math.max(this.chunkEnd(e), this.nextLayer.length);
  }
  get size() {
    if (this.isEmpty)
      return 0;
    let e = this.nextLayer.size;
    for (let n of this.chunk)
      e += n.value.length;
    return e;
  }
  chunkEnd(e) {
    return this.chunkPos[e] + this.chunk[e].length;
  }
  update(e) {
    let { add: n = [], sort: r = !1, filterFrom: i = 0, filterTo: o = this.length } = e, s = e.filter;
    if (n.length == 0 && !s)
      return this;
    if (r && (n = n.slice().sort(kc)), this.isEmpty)
      return n.length ? te.of(n) : this;
    let l = new O0(this, null, -1).goto(0), a = 0, c = [], u = new Rn();
    for (; l.value || a < n.length; )
      if (a < n.length && (l.from - n[a].from || l.startSide - n[a].value.startSide) >= 0) {
        let h = n[a++];
        u.addInner(h.from, h.to, h.value) || c.push(h);
      } else
        l.rangeIndex == 1 && l.chunkIndex < this.chunk.length && (a == n.length || this.chunkEnd(l.chunkIndex) < n[a].from) && (!s || i > this.chunkEnd(l.chunkIndex) || o < this.chunkPos[l.chunkIndex]) && u.addChunk(this.chunkPos[l.chunkIndex], this.chunk[l.chunkIndex]) ? l.nextChunk() : ((!s || i > l.to || o < l.from || s(l.from, l.to, l.value)) && (u.addInner(l.from, l.to, l.value) || c.push(Ui.create(l.from, l.to, l.value))), l.next());
    return u.finishInner(this.nextLayer.isEmpty && !c.length ? te.empty : this.nextLayer.update({ add: c, filter: s, filterFrom: i, filterTo: o }));
  }
  map(e) {
    if (e.empty || this.isEmpty)
      return this;
    let n = [], r = [], i = -1;
    for (let s = 0; s < this.chunk.length; s++) {
      let l = this.chunkPos[s], a = this.chunk[s], c = e.touchesRange(l, l + a.length);
      if (c === !1)
        i = Math.max(i, a.maxPoint), n.push(a), r.push(e.mapPos(l));
      else if (c === !0) {
        let { mapped: u, pos: h } = a.map(l, e);
        u && (i = Math.max(i, u.maxPoint), n.push(u), r.push(h));
      }
    }
    let o = this.nextLayer.map(e);
    return n.length == 0 ? o : new te(r, n, o || te.empty, i);
  }
  between(e, n, r) {
    if (!this.isEmpty) {
      for (let i = 0; i < this.chunk.length; i++) {
        let o = this.chunkPos[i], s = this.chunk[i];
        if (n >= o && e <= o + s.length && s.between(o, e - o, n - o, r) === !1)
          return;
      }
      this.nextLayer.between(e, n, r);
    }
  }
  iter(e = 0) {
    return Wi.from([this]).goto(e);
  }
  get isEmpty() {
    return this.nextLayer == this;
  }
  static iter(e, n = 0) {
    return Wi.from(e).goto(n);
  }
  static compare(e, n, r, i, o = -1) {
    let s = e.filter((h) => h.maxPoint > 0 || !h.isEmpty && h.maxPoint >= o), l = n.filter((h) => h.maxPoint > 0 || !h.isEmpty && h.maxPoint >= o), a = Sd(s, l, r), c = new pi(s, a, o), u = new pi(l, a, o);
    r.iterGaps((h, f, d) => Ed(c, h, u, f, d, i)), r.empty && r.length == 0 && Ed(c, 0, u, 0, 0, i);
  }
  static eq(e, n, r = 0, i) {
    i == null && (i = 1e9 - 1);
    let o = e.filter((u) => !u.isEmpty && n.indexOf(u) < 0), s = n.filter((u) => !u.isEmpty && e.indexOf(u) < 0);
    if (o.length != s.length)
      return !1;
    if (!o.length)
      return !0;
    let l = Sd(o, s), a = new pi(o, l, 0).goto(r), c = new pi(s, l, 0).goto(r);
    for (; ; ) {
      if (a.to != c.to || !wc(a.active, c.active) || a.point && (!c.point || !a.point.eq(c.point)))
        return !1;
      if (a.to > i)
        return !0;
      a.next(), c.next();
    }
  }
  static spans(e, n, r, i, o = -1) {
    let s = new pi(e, null, o).goto(n), l = n, a = s.openStart;
    for (; ; ) {
      let c = Math.min(s.to, r);
      if (s.point) {
        let u = s.activeForPoint(s.to), h = s.pointFrom < n ? u.length + 1 : Math.min(u.length, a);
        i.point(l, c, s.point, u, h, s.pointRank), a = Math.min(s.openEnd(c), u.length);
      } else
        c > l && (i.span(l, c, s.active, a), a = s.openEnd(c));
      if (s.to > r)
        return a + (s.point && s.to > r ? 1 : 0);
      l = s.to, s.next();
    }
  }
  static of(e, n = !1) {
    let r = new Rn();
    for (let i of e instanceof Ui ? [e] : n ? Rie(e) : e)
      r.add(i.from, i.to, i.value);
    return r.finish();
  }
}
te.empty = /* @__PURE__ */ new te([], [], null, -1);
function Rie(t) {
  if (t.length > 1)
    for (let e = t[0], n = 1; n < t.length; n++) {
      let r = t[n];
      if (kc(e, r) > 0)
        return t.slice().sort(kc);
      e = r;
    }
  return t;
}
te.empty.nextLayer = te.empty;
class Rn {
  finishChunk(e) {
    this.chunks.push(new $u(this.from, this.to, this.value, this.maxPoint)), this.chunkPos.push(this.chunkStart), this.chunkStart = -1, this.setMaxPoint = Math.max(this.setMaxPoint, this.maxPoint), this.maxPoint = -1, e && (this.from = [], this.to = [], this.value = []);
  }
  constructor() {
    this.chunks = [], this.chunkPos = [], this.chunkStart = -1, this.last = null, this.lastFrom = -1e9, this.lastTo = -1e9, this.from = [], this.to = [], this.value = [], this.maxPoint = -1, this.setMaxPoint = -1, this.nextLayer = null;
  }
  add(e, n, r) {
    this.addInner(e, n, r) || (this.nextLayer || (this.nextLayer = new Rn())).add(e, n, r);
  }
  addInner(e, n, r) {
    let i = e - this.lastTo || r.startSide - this.last.endSide;
    if (i <= 0 && (e - this.lastFrom || r.startSide - this.last.startSide) < 0)
      throw new Error("Ranges must be added sorted by `from` position and `startSide`");
    return i < 0 ? !1 : (this.from.length == 250 && this.finishChunk(!0), this.chunkStart < 0 && (this.chunkStart = e), this.from.push(e - this.chunkStart), this.to.push(n - this.chunkStart), this.last = r, this.lastFrom = e, this.lastTo = n, this.value.push(r), r.point && (this.maxPoint = Math.max(this.maxPoint, n - e)), !0);
  }
  addChunk(e, n) {
    if ((e - this.lastTo || n.value[0].startSide - this.last.endSide) < 0)
      return !1;
    this.from.length && this.finishChunk(!0), this.setMaxPoint = Math.max(this.setMaxPoint, n.maxPoint), this.chunks.push(n), this.chunkPos.push(e);
    let r = n.value.length - 1;
    return this.last = n.value[r], this.lastFrom = n.from[r] + e, this.lastTo = n.to[r] + e, !0;
  }
  finish() {
    return this.finishInner(te.empty);
  }
  finishInner(e) {
    if (this.from.length && this.finishChunk(!1), this.chunks.length == 0)
      return e;
    let n = te.create(this.chunkPos, this.chunks, this.nextLayer ? this.nextLayer.finishInner(e) : e, this.setMaxPoint);
    return this.from = null, n;
  }
}
function Sd(t, e, n) {
  let r = /* @__PURE__ */ new Map();
  for (let o of t)
    for (let s = 0; s < o.chunk.length; s++)
      o.chunk[s].maxPoint <= 0 && r.set(o.chunk[s], o.chunkPos[s]);
  let i = /* @__PURE__ */ new Set();
  for (let o of e)
    for (let s = 0; s < o.chunk.length; s++) {
      let l = r.get(o.chunk[s]);
      l != null && (n ? n.mapPos(l) : l) == o.chunkPos[s] && !(n != null && n.touchesRange(l, l + o.chunk[s].length)) && i.add(o.chunk[s]);
    }
  return i;
}
class O0 {
  constructor(e, n, r, i = 0) {
    this.layer = e, this.skip = n, this.minPoint = r, this.rank = i;
  }
  get startSide() {
    return this.value ? this.value.startSide : 0;
  }
  get endSide() {
    return this.value ? this.value.endSide : 0;
  }
  goto(e, n = -1e9) {
    return this.chunkIndex = this.rangeIndex = 0, this.gotoInner(e, n, !1), this;
  }
  gotoInner(e, n, r) {
    for (; this.chunkIndex < this.layer.chunk.length; ) {
      let i = this.layer.chunk[this.chunkIndex];
      if (!(this.skip && this.skip.has(i) || this.layer.chunkEnd(this.chunkIndex) < e || i.maxPoint < this.minPoint))
        break;
      this.chunkIndex++, r = !1;
    }
    if (this.chunkIndex < this.layer.chunk.length) {
      let i = this.layer.chunk[this.chunkIndex].findIndex(e - this.layer.chunkPos[this.chunkIndex], n, !0);
      (!r || this.rangeIndex < i) && this.setRangeIndex(i);
    }
    this.next();
  }
  forward(e, n) {
    (this.to - e || this.endSide - n) < 0 && this.gotoInner(e, n, !0);
  }
  next() {
    for (; ; )
      if (this.chunkIndex == this.layer.chunk.length) {
        this.from = this.to = 1e9, this.value = null;
        break;
      } else {
        let e = this.layer.chunkPos[this.chunkIndex], n = this.layer.chunk[this.chunkIndex], r = e + n.from[this.rangeIndex];
        if (this.from = r, this.to = e + n.to[this.rangeIndex], this.value = n.value[this.rangeIndex], this.setRangeIndex(this.rangeIndex + 1), this.minPoint < 0 || this.value.point && this.to - this.from >= this.minPoint)
          break;
      }
  }
  setRangeIndex(e) {
    if (e == this.layer.chunk[this.chunkIndex].value.length) {
      if (this.chunkIndex++, this.skip)
        for (; this.chunkIndex < this.layer.chunk.length && this.skip.has(this.layer.chunk[this.chunkIndex]); )
          this.chunkIndex++;
      this.rangeIndex = 0;
    } else
      this.rangeIndex = e;
  }
  nextChunk() {
    this.chunkIndex++, this.rangeIndex = 0, this.next();
  }
  compare(e) {
    return this.from - e.from || this.startSide - e.startSide || this.rank - e.rank || this.to - e.to || this.endSide - e.endSide;
  }
}
class Wi {
  constructor(e) {
    this.heap = e;
  }
  static from(e, n = null, r = -1) {
    let i = [];
    for (let o = 0; o < e.length; o++)
      for (let s = e[o]; !s.isEmpty; s = s.nextLayer)
        s.maxPoint >= r && i.push(new O0(s, n, r, o));
    return i.length == 1 ? i[0] : new Wi(i);
  }
  get startSide() {
    return this.value ? this.value.startSide : 0;
  }
  goto(e, n = -1e9) {
    for (let r of this.heap)
      r.goto(e, n);
    for (let r = this.heap.length >> 1; r >= 0; r--)
      ya(this.heap, r);
    return this.next(), this;
  }
  forward(e, n) {
    for (let r of this.heap)
      r.forward(e, n);
    for (let r = this.heap.length >> 1; r >= 0; r--)
      ya(this.heap, r);
    (this.to - e || this.value.endSide - n) < 0 && this.next();
  }
  next() {
    if (this.heap.length == 0)
      this.from = this.to = 1e9, this.value = null, this.rank = -1;
    else {
      let e = this.heap[0];
      this.from = e.from, this.to = e.to, this.value = e.value, this.rank = e.rank, e.value && e.next(), ya(this.heap, 0);
    }
  }
}
function ya(t, e) {
  for (let n = t[e]; ; ) {
    let r = (e << 1) + 1;
    if (r >= t.length)
      break;
    let i = t[r];
    if (r + 1 < t.length && i.compare(t[r + 1]) >= 0 && (i = t[r + 1], r++), n.compare(i) < 0)
      break;
    t[r] = n, t[e] = i, e = r;
  }
}
class pi {
  constructor(e, n, r) {
    this.minPoint = r, this.active = [], this.activeTo = [], this.activeRank = [], this.minActive = -1, this.point = null, this.pointFrom = 0, this.pointRank = 0, this.to = -1e9, this.endSide = 0, this.openStart = -1, this.cursor = Wi.from(e, n, r);
  }
  goto(e, n = -1e9) {
    return this.cursor.goto(e, n), this.active.length = this.activeTo.length = this.activeRank.length = 0, this.minActive = -1, this.to = e, this.endSide = n, this.openStart = -1, this.next(), this;
  }
  forward(e, n) {
    for (; this.minActive > -1 && (this.activeTo[this.minActive] - e || this.active[this.minActive].endSide - n) < 0; )
      this.removeActive(this.minActive);
    this.cursor.forward(e, n);
  }
  removeActive(e) {
    So(this.active, e), So(this.activeTo, e), So(this.activeRank, e), this.minActive = Td(this.active, this.activeTo);
  }
  addActive(e) {
    let n = 0, { value: r, to: i, rank: o } = this.cursor;
    for (; n < this.activeRank.length && this.activeRank[n] <= o; )
      n++;
    Eo(this.active, n, r), Eo(this.activeTo, n, i), Eo(this.activeRank, n, o), e && Eo(e, n, this.cursor.from), this.minActive = Td(this.active, this.activeTo);
  }
  next() {
    let e = this.to, n = this.point;
    this.point = null;
    let r = this.openStart < 0 ? [] : null;
    for (; ; ) {
      let i = this.minActive;
      if (i > -1 && (this.activeTo[i] - this.cursor.from || this.active[i].endSide - this.cursor.startSide) < 0) {
        if (this.activeTo[i] > e) {
          this.to = this.activeTo[i], this.endSide = this.active[i].endSide;
          break;
        }
        this.removeActive(i), r && So(r, i);
      } else if (this.cursor.value)
        if (this.cursor.from > e) {
          this.to = this.cursor.from, this.endSide = this.cursor.startSide;
          break;
        } else {
          let o = this.cursor.value;
          if (!o.point)
            this.addActive(r), this.cursor.next();
          else if (n && this.cursor.to == this.to && this.cursor.from < this.cursor.to)
            this.cursor.next();
          else {
            this.point = o, this.pointFrom = this.cursor.from, this.pointRank = this.cursor.rank, this.to = this.cursor.to, this.endSide = o.endSide, this.cursor.next(), this.forward(this.to, this.endSide);
            break;
          }
        }
      else {
        this.to = this.endSide = 1e9;
        break;
      }
    }
    if (r) {
      this.openStart = 0;
      for (let i = r.length - 1; i >= 0 && r[i] < e; i--)
        this.openStart++;
    }
  }
  activeForPoint(e) {
    if (!this.active.length)
      return this.active;
    let n = [];
    for (let r = this.active.length - 1; r >= 0 && !(this.activeRank[r] < this.pointRank); r--)
      (this.activeTo[r] > e || this.activeTo[r] == e && this.active[r].endSide >= this.point.endSide) && n.push(this.active[r]);
    return n.reverse();
  }
  openEnd(e) {
    let n = 0;
    for (let r = this.activeTo.length - 1; r >= 0 && this.activeTo[r] > e; r--)
      n++;
    return n;
  }
}
function Ed(t, e, n, r, i, o) {
  t.goto(e), n.goto(r);
  let s = r + i, l = r, a = r - e;
  for (; ; ) {
    let c = t.to + a - n.to || t.endSide - n.endSide, u = c < 0 ? t.to + a : n.to, h = Math.min(u, s);
    if (t.point || n.point ? t.point && n.point && (t.point == n.point || t.point.eq(n.point)) && wc(t.activeForPoint(t.to), n.activeForPoint(n.to)) || o.comparePoint(l, h, t.point, n.point) : h > l && !wc(t.active, n.active) && o.compareRange(l, h, t.active, n.active), u > s)
      break;
    l = u, c <= 0 && t.next(), c >= 0 && n.next();
  }
}
function wc(t, e) {
  if (t.length != e.length)
    return !1;
  for (let n = 0; n < t.length; n++)
    if (t[n] != e[n] && !t[n].eq(e[n]))
      return !1;
  return !0;
}
function So(t, e) {
  for (let n = e, r = t.length - 1; n < r; n++)
    t[n] = t[n + 1];
  t.pop();
}
function Eo(t, e, n) {
  for (let r = t.length - 1; r >= e; r--)
    t[r + 1] = t[r];
  t[e] = n;
}
function Td(t, e) {
  let n = -1, r = 1e9;
  for (let i = 0; i < e.length; i++)
    (e[i] - r || t[i].endSide - t[n].endSide) < 0 && (n = i, r = e[i]);
  return n;
}
function li(t, e, n = t.length) {
  let r = 0;
  for (let i = 0; i < n; )
    t.charCodeAt(i) == 9 ? (r += e - r % e, i++) : (r++, i = $e(t, i));
  return r;
}
function Cc(t, e, n, r) {
  for (let i = 0, o = 0; ; ) {
    if (o >= e)
      return i;
    if (i == t.length)
      break;
    o += t.charCodeAt(i) == 9 ? n - o % n : 1, i = $e(t, i);
  }
  return r === !0 ? -1 : t.length;
}
const Ac = "\u037C", Dd = typeof Symbol > "u" ? "__" + Ac : Symbol.for(Ac), Sc = typeof Symbol > "u" ? "__styleSet" + Math.floor(Math.random() * 1e8) : Symbol("styleSet"), Md = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : {};
class Ln {
  constructor(e, n) {
    this.rules = [];
    let { finish: r } = n || {};
    function i(s) {
      return /^@/.test(s) ? [s] : s.split(/,\s*/);
    }
    function o(s, l, a, c) {
      let u = [], h = /^@(\w+)\b/.exec(s[0]), f = h && h[1] == "keyframes";
      if (h && l == null)
        return a.push(s[0] + ";");
      for (let d in l) {
        let p = l[d];
        if (/&/.test(d))
          o(
            d.split(/,\s*/).map((m) => s.map((g) => m.replace(/&/, g))).reduce((m, g) => m.concat(g)),
            p,
            a
          );
        else if (p && typeof p == "object") {
          if (!h)
            throw new RangeError("The value of a property (" + d + ") should be a primitive value.");
          o(i(d), p, u, f);
        } else
          p != null && u.push(d.replace(/_.*/, "").replace(/[A-Z]/g, (m) => "-" + m.toLowerCase()) + ": " + p + ";");
      }
      (u.length || f) && a.push((r && !h && !c ? s.map(r) : s).join(", ") + " {" + u.join(" ") + "}");
    }
    for (let s in e)
      o(i(s), e[s], this.rules);
  }
  getRules() {
    return this.rules.join(`
`);
  }
  static newName() {
    let e = Md[Dd] || 1;
    return Md[Dd] = e + 1, Ac + e.toString(36);
  }
  static mount(e, n, r) {
    let i = e[Sc], o = r && r.nonce;
    i ? o && i.setNonce(o) : i = new Lie(e, o), i.mount(Array.isArray(n) ? n : [n]);
  }
}
let Od = /* @__PURE__ */ new Map();
class Lie {
  constructor(e, n) {
    let r = e.ownerDocument || e, i = r.defaultView;
    if (!e.head && e.adoptedStyleSheets && i.CSSStyleSheet) {
      let o = Od.get(r);
      if (o)
        return e.adoptedStyleSheets = [o.sheet, ...e.adoptedStyleSheets], e[Sc] = o;
      this.sheet = new i.CSSStyleSheet(), e.adoptedStyleSheets = [this.sheet, ...e.adoptedStyleSheets], Od.set(r, this);
    } else {
      this.styleTag = r.createElement("style"), n && this.styleTag.setAttribute("nonce", n);
      let o = e.head || e;
      o.insertBefore(this.styleTag, o.firstChild);
    }
    this.modules = [], e[Sc] = this;
  }
  mount(e) {
    let n = this.sheet, r = 0, i = 0;
    for (let o = 0; o < e.length; o++) {
      let s = e[o], l = this.modules.indexOf(s);
      if (l < i && l > -1 && (this.modules.splice(l, 1), i--, l = -1), l == -1) {
        if (this.modules.splice(i++, 0, s), n)
          for (let a = 0; a < s.rules.length; a++)
            n.insertRule(s.rules[a], r++);
      } else {
        for (; i < l; )
          r += this.modules[i++].rules.length;
        r += s.rules.length, i++;
      }
    }
    if (!n) {
      let o = "";
      for (let s = 0; s < this.modules.length; s++)
        o += this.modules[s].getRules() + `
`;
      this.styleTag.textContent = o;
    }
  }
  setNonce(e) {
    this.styleTag && this.styleTag.getAttribute("nonce") != e && this.styleTag.setAttribute("nonce", e);
  }
}
var In = {
  8: "Backspace",
  9: "Tab",
  10: "Enter",
  12: "NumLock",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  44: "PrintScreen",
  45: "Insert",
  46: "Delete",
  59: ";",
  61: "=",
  91: "Meta",
  92: "Meta",
  106: "*",
  107: "+",
  108: ",",
  109: "-",
  110: ".",
  111: "/",
  144: "NumLock",
  145: "ScrollLock",
  160: "Shift",
  161: "Shift",
  162: "Control",
  163: "Control",
  164: "Alt",
  165: "Alt",
  173: "-",
  186: ";",
  187: "=",
  188: ",",
  189: "-",
  190: ".",
  191: "/",
  192: "`",
  219: "[",
  220: "\\",
  221: "]",
  222: "'"
}, ji = {
  48: ")",
  49: "!",
  50: "@",
  51: "#",
  52: "$",
  53: "%",
  54: "^",
  55: "&",
  56: "*",
  57: "(",
  59: ":",
  61: "+",
  173: "_",
  186: ":",
  187: "+",
  188: "<",
  189: "_",
  190: ">",
  191: "?",
  192: "~",
  219: "{",
  220: "|",
  221: "}",
  222: '"'
}, Iie = typeof navigator < "u" && /Mac/.test(navigator.platform), Nie = typeof navigator < "u" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);
for (var Ie = 0; Ie < 10; Ie++)
  In[48 + Ie] = In[96 + Ie] = String(Ie);
for (var Ie = 1; Ie <= 24; Ie++)
  In[Ie + 111] = "F" + Ie;
for (var Ie = 65; Ie <= 90; Ie++)
  In[Ie] = String.fromCharCode(Ie + 32), ji[Ie] = String.fromCharCode(Ie);
for (var ba in In)
  ji.hasOwnProperty(ba) || (ji[ba] = In[ba]);
function Pie(t) {
  var e = Iie && t.metaKey && t.shiftKey && !t.ctrlKey && !t.altKey || Nie && t.shiftKey && t.key && t.key.length == 1 || t.key == "Unidentified", n = !e && t.key || (t.shiftKey ? ji : In)[t.keyCode] || t.key || "Unidentified";
  return n == "Esc" && (n = "Escape"), n == "Del" && (n = "Delete"), n == "Left" && (n = "ArrowLeft"), n == "Up" && (n = "ArrowUp"), n == "Right" && (n = "ArrowRight"), n == "Down" && (n = "ArrowDown"), n;
}
function Ss(t) {
  let e;
  return t.nodeType == 11 ? e = t.getSelection ? t : t.ownerDocument : e = t, e.getSelection();
}
function Ec(t, e) {
  return e ? t == e || t.contains(e.nodeType != 1 ? e.parentNode : e) : !1;
}
function Bie(t) {
  let e = t.activeElement;
  for (; e && e.shadowRoot; )
    e = e.shadowRoot.activeElement;
  return e;
}
function is(t, e) {
  if (!e.anchorNode)
    return !1;
  try {
    return Ec(t, e.anchorNode);
  } catch {
    return !1;
  }
}
function Gi(t) {
  return t.nodeType == 3 ? cr(t, 0, t.nodeValue.length).getClientRects() : t.nodeType == 1 ? t.getClientRects() : [];
}
function Es(t, e, n, r) {
  return n ? Rd(t, e, n, r, -1) || Rd(t, e, n, r, 1) : !1;
}
function Ts(t) {
  for (var e = 0; ; e++)
    if (t = t.previousSibling, !t)
      return e;
}
function Rd(t, e, n, r, i) {
  for (; ; ) {
    if (t == n && e == r)
      return !0;
    if (e == (i < 0 ? 0 : Nn(t))) {
      if (t.nodeName == "DIV")
        return !1;
      let o = t.parentNode;
      if (!o || o.nodeType != 1)
        return !1;
      e = Ts(t) + (i < 0 ? 0 : 1), t = o;
    } else if (t.nodeType == 1) {
      if (t = t.childNodes[e + (i < 0 ? -1 : 0)], t.nodeType == 1 && t.contentEditable == "false")
        return !1;
      e = i < 0 ? Nn(t) : 0;
    } else
      return !1;
  }
}
function Nn(t) {
  return t.nodeType == 3 ? t.nodeValue.length : t.childNodes.length;
}
function Hu(t, e) {
  let n = e ? t.left : t.right;
  return { left: n, right: n, top: t.top, bottom: t.bottom };
}
function Fie(t) {
  return {
    left: 0,
    right: t.innerWidth,
    top: 0,
    bottom: t.innerHeight
  };
}
function qie(t, e, n, r, i, o, s, l) {
  let a = t.ownerDocument, c = a.defaultView || window;
  for (let u = t, h = !1; u && !h; )
    if (u.nodeType == 1) {
      let f, d = u == a.body;
      if (d)
        f = Fie(c);
      else {
        if (/^(fixed|sticky)$/.test(getComputedStyle(u).position) && (h = !0), u.scrollHeight <= u.clientHeight && u.scrollWidth <= u.clientWidth) {
          u = u.assignedSlot || u.parentNode;
          continue;
        }
        let g = u.getBoundingClientRect();
        f = {
          left: g.left,
          right: g.left + u.clientWidth,
          top: g.top,
          bottom: g.top + u.clientHeight
        };
      }
      let p = 0, m = 0;
      if (i == "nearest")
        e.top < f.top ? (m = -(f.top - e.top + s), n > 0 && e.bottom > f.bottom + m && (m = e.bottom - f.bottom + m + s)) : e.bottom > f.bottom && (m = e.bottom - f.bottom + s, n < 0 && e.top - m < f.top && (m = -(f.top + m - e.top + s)));
      else {
        let g = e.bottom - e.top, y = f.bottom - f.top;
        m = (i == "center" && g <= y ? e.top + g / 2 - y / 2 : i == "start" || i == "center" && n < 0 ? e.top - s : e.bottom - y + s) - f.top;
      }
      if (r == "nearest" ? e.left < f.left ? (p = -(f.left - e.left + o), n > 0 && e.right > f.right + p && (p = e.right - f.right + p + o)) : e.right > f.right && (p = e.right - f.right + o, n < 0 && e.left < f.left + p && (p = -(f.left + p - e.left + o))) : p = (r == "center" ? e.left + (e.right - e.left) / 2 - (f.right - f.left) / 2 : r == "start" == l ? e.left - o : e.right - (f.right - f.left) + o) - f.left, p || m)
        if (d)
          c.scrollBy(p, m);
        else {
          let g = 0, y = 0;
          if (m) {
            let b = u.scrollTop;
            u.scrollTop += m, y = u.scrollTop - b;
          }
          if (p) {
            let b = u.scrollLeft;
            u.scrollLeft += p, g = u.scrollLeft - b;
          }
          e = {
            left: e.left - g,
            top: e.top - y,
            right: e.right - g,
            bottom: e.bottom - y
          }, g && Math.abs(g - p) < 1 && (r = "nearest"), y && Math.abs(y - m) < 1 && (i = "nearest");
        }
      if (d)
        break;
      u = u.assignedSlot || u.parentNode;
    } else if (u.nodeType == 11)
      u = u.host;
    else
      break;
}
function $ie(t) {
  let e = t.ownerDocument;
  for (let n = t.parentNode; n && n != e.body; )
    if (n.nodeType == 1) {
      if (n.scrollHeight > n.clientHeight || n.scrollWidth > n.clientWidth)
        return n;
      n = n.assignedSlot || n.parentNode;
    } else if (n.nodeType == 11)
      n = n.host;
    else
      break;
  return null;
}
class Hie {
  constructor() {
    this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0;
  }
  eq(e) {
    return this.anchorNode == e.anchorNode && this.anchorOffset == e.anchorOffset && this.focusNode == e.focusNode && this.focusOffset == e.focusOffset;
  }
  setRange(e) {
    let { anchorNode: n, focusNode: r } = e;
    this.set(n, Math.min(e.anchorOffset, n ? Nn(n) : 0), r, Math.min(e.focusOffset, r ? Nn(r) : 0));
  }
  set(e, n, r, i) {
    this.anchorNode = e, this.anchorOffset = n, this.focusNode = r, this.focusOffset = i;
  }
}
let wr = null;
function R0(t) {
  if (t.setActive)
    return t.setActive();
  if (wr)
    return t.focus(wr);
  let e = [];
  for (let n = t; n && (e.push(n, n.scrollTop, n.scrollLeft), n != n.ownerDocument); n = n.parentNode)
    ;
  if (t.focus(wr == null ? {
    get preventScroll() {
      return wr = { preventScroll: !0 }, !0;
    }
  } : void 0), !wr) {
    wr = !1;
    for (let n = 0; n < e.length; ) {
      let r = e[n++], i = e[n++], o = e[n++];
      r.scrollTop != i && (r.scrollTop = i), r.scrollLeft != o && (r.scrollLeft = o);
    }
  }
}
let Ld;
function cr(t, e, n = e) {
  let r = Ld || (Ld = document.createRange());
  return r.setEnd(t, n), r.setStart(t, e), r;
}
function Pr(t, e, n) {
  let r = { key: e, code: e, keyCode: n, which: n, cancelable: !0 }, i = new KeyboardEvent("keydown", r);
  i.synthetic = !0, t.dispatchEvent(i);
  let o = new KeyboardEvent("keyup", r);
  return o.synthetic = !0, t.dispatchEvent(o), i.defaultPrevented || o.defaultPrevented;
}
function zie(t) {
  for (; t; ) {
    if (t && (t.nodeType == 9 || t.nodeType == 11 && t.host))
      return t;
    t = t.assignedSlot || t.parentNode;
  }
  return null;
}
function L0(t) {
  for (; t.attributes.length; )
    t.removeAttributeNode(t.attributes[0]);
}
function Vie(t, e) {
  let n = e.focusNode, r = e.focusOffset;
  if (!n || e.anchorNode != n || e.anchorOffset != r)
    return !1;
  for (r = Math.min(r, Nn(n)); ; )
    if (r) {
      if (n.nodeType != 1)
        return !1;
      let i = n.childNodes[r - 1];
      i.contentEditable == "false" ? r-- : (n = i, r = Nn(n));
    } else {
      if (n == t)
        return !0;
      r = Ts(n), n = n.parentNode;
    }
}
function I0(t) {
  return t.scrollTop > Math.max(1, t.scrollHeight - t.clientHeight - 4);
}
class Ye {
  constructor(e, n, r = !0) {
    this.node = e, this.offset = n, this.precise = r;
  }
  static before(e, n) {
    return new Ye(e.parentNode, Ts(e), n);
  }
  static after(e, n) {
    return new Ye(e.parentNode, Ts(e) + 1, n);
  }
}
const zu = [];
class ue {
  constructor() {
    this.parent = null, this.dom = null, this.flags = 2;
  }
  get overrideDOMText() {
    return null;
  }
  get posAtStart() {
    return this.parent ? this.parent.posBefore(this) : 0;
  }
  get posAtEnd() {
    return this.posAtStart + this.length;
  }
  posBefore(e) {
    let n = this.posAtStart;
    for (let r of this.children) {
      if (r == e)
        return n;
      n += r.length + r.breakAfter;
    }
    throw new RangeError("Invalid child in posBefore");
  }
  posAfter(e) {
    return this.posBefore(e) + e.length;
  }
  sync(e, n) {
    if (this.flags & 2) {
      let r = this.dom, i = null, o;
      for (let s of this.children) {
        if (s.flags & 7) {
          if (!s.dom && (o = i ? i.nextSibling : r.firstChild)) {
            let l = ue.get(o);
            (!l || !l.parent && l.canReuseDOM(s)) && s.reuseDOM(o);
          }
          s.sync(e, n), s.flags &= -8;
        }
        if (o = i ? i.nextSibling : r.firstChild, n && !n.written && n.node == r && o != s.dom && (n.written = !0), s.dom.parentNode == r)
          for (; o && o != s.dom; )
            o = Id(o);
        else
          r.insertBefore(s.dom, o);
        i = s.dom;
      }
      for (o = i ? i.nextSibling : r.firstChild, o && n && n.node == r && (n.written = !0); o; )
        o = Id(o);
    } else if (this.flags & 1)
      for (let r of this.children)
        r.flags & 7 && (r.sync(e, n), r.flags &= -8);
  }
  reuseDOM(e) {
  }
  localPosFromDOM(e, n) {
    let r;
    if (e == this.dom)
      r = this.dom.childNodes[n];
    else {
      let i = Nn(e) == 0 ? 0 : n == 0 ? -1 : 1;
      for (; ; ) {
        let o = e.parentNode;
        if (o == this.dom)
          break;
        i == 0 && o.firstChild != o.lastChild && (e == o.firstChild ? i = -1 : i = 1), e = o;
      }
      i < 0 ? r = e : r = e.nextSibling;
    }
    if (r == this.dom.firstChild)
      return 0;
    for (; r && !ue.get(r); )
      r = r.nextSibling;
    if (!r)
      return this.length;
    for (let i = 0, o = 0; ; i++) {
      let s = this.children[i];
      if (s.dom == r)
        return o;
      o += s.length + s.breakAfter;
    }
  }
  domBoundsAround(e, n, r = 0) {
    let i = -1, o = -1, s = -1, l = -1;
    for (let a = 0, c = r, u = r; a < this.children.length; a++) {
      let h = this.children[a], f = c + h.length;
      if (c < e && f > n)
        return h.domBoundsAround(e, n, c);
      if (f >= e && i == -1 && (i = a, o = c), c > n && h.dom.parentNode == this.dom) {
        s = a, l = u;
        break;
      }
      u = f, c = f + h.breakAfter;
    }
    return {
      from: o,
      to: l < 0 ? r + this.length : l,
      startDOM: (i ? this.children[i - 1].dom.nextSibling : null) || this.dom.firstChild,
      endDOM: s < this.children.length && s >= 0 ? this.children[s].dom : null
    };
  }
  markDirty(e = !1) {
    this.flags |= 2, this.markParentsDirty(e);
  }
  markParentsDirty(e) {
    for (let n = this.parent; n; n = n.parent) {
      if (e && (n.flags |= 2), n.flags & 1)
        return;
      n.flags |= 1, e = !1;
    }
  }
  setParent(e) {
    this.parent != e && (this.parent = e, this.flags & 7 && this.markParentsDirty(!0));
  }
  setDOM(e) {
    this.dom && (this.dom.cmView = null), this.dom = e, e.cmView = this;
  }
  get rootView() {
    for (let e = this; ; ) {
      let n = e.parent;
      if (!n)
        return e;
      e = n;
    }
  }
  replaceChildren(e, n, r = zu) {
    this.markDirty();
    for (let i = e; i < n; i++) {
      let o = this.children[i];
      o.parent == this && o.destroy();
    }
    this.children.splice(e, n - e, ...r);
    for (let i = 0; i < r.length; i++)
      r[i].setParent(this);
  }
  ignoreMutation(e) {
    return !1;
  }
  ignoreEvent(e) {
    return !1;
  }
  childCursor(e = this.length) {
    return new N0(this.children, e, this.children.length);
  }
  childPos(e, n = 1) {
    return this.childCursor().findPos(e, n);
  }
  toString() {
    let e = this.constructor.name.replace("View", "");
    return e + (this.children.length ? "(" + this.children.join() + ")" : this.length ? "[" + (e == "Text" ? this.text : this.length) + "]" : "") + (this.breakAfter ? "#" : "");
  }
  static get(e) {
    return e.cmView;
  }
  get isEditable() {
    return !0;
  }
  get isWidget() {
    return !1;
  }
  get isHidden() {
    return !1;
  }
  merge(e, n, r, i, o, s) {
    return !1;
  }
  become(e) {
    return !1;
  }
  canReuseDOM(e) {
    return e.constructor == this.constructor && !((this.flags | e.flags) & 8);
  }
  getSide() {
    return 0;
  }
  destroy() {
    this.parent = null;
  }
}
ue.prototype.breakAfter = 0;
function Id(t) {
  let e = t.nextSibling;
  return t.parentNode.removeChild(t), e;
}
class N0 {
  constructor(e, n, r) {
    this.children = e, this.pos = n, this.i = r, this.off = 0;
  }
  findPos(e, n = 1) {
    for (; ; ) {
      if (e > this.pos || e == this.pos && (n > 0 || this.i == 0 || this.children[this.i - 1].breakAfter))
        return this.off = e - this.pos, this;
      let r = this.children[--this.i];
      this.pos -= r.length + r.breakAfter;
    }
  }
}
function P0(t, e, n, r, i, o, s, l, a) {
  let { children: c } = t, u = c.length ? c[e] : null, h = o.length ? o[o.length - 1] : null, f = h ? h.breakAfter : s;
  if (!(e == r && u && !s && !f && o.length < 2 && u.merge(n, i, o.length ? h : null, n == 0, l, a))) {
    if (r < c.length) {
      let d = c[r];
      d && i < d.length ? (e == r && (d = d.split(i), i = 0), !f && h && d.merge(0, i, h, !0, 0, a) ? o[o.length - 1] = d : (i && d.merge(0, i, null, !1, 0, a), o.push(d))) : d != null && d.breakAfter && (h ? h.breakAfter = 1 : s = 1), r++;
    }
    for (u && (u.breakAfter = s, n > 0 && (!s && o.length && u.merge(n, u.length, o[0], !1, l, 0) ? u.breakAfter = o.shift().breakAfter : (n < u.length || u.children.length && u.children[u.children.length - 1].length == 0) && u.merge(n, u.length, null, !1, l, 0), e++)); e < r && o.length; )
      if (c[r - 1].become(o[o.length - 1]))
        r--, o.pop(), a = o.length ? 0 : l;
      else if (c[e].become(o[0]))
        e++, o.shift(), l = o.length ? 0 : a;
      else
        break;
    !o.length && e && r < c.length && !c[e - 1].breakAfter && c[r].merge(0, 0, c[e - 1], !1, l, a) && e--, (e < r || o.length) && t.replaceChildren(e, r, o);
  }
}
function B0(t, e, n, r, i, o) {
  let s = t.childCursor(), { i: l, off: a } = s.findPos(n, 1), { i: c, off: u } = s.findPos(e, -1), h = e - n;
  for (let f of r)
    h += f.length;
  t.length += h, P0(t, c, u, l, a, r, 0, i, o);
}
const Dr = "\uFFFF";
class F0 {
  constructor(e, n) {
    this.points = e, this.text = "", this.lineSeparator = n.facet(Y.lineSeparator);
  }
  append(e) {
    this.text += e;
  }
  lineBreak() {
    this.text += Dr;
  }
  readRange(e, n) {
    if (!e)
      return this;
    let r = e.parentNode;
    for (let i = e; ; ) {
      this.findPointBefore(r, i);
      let o = this.text.length;
      this.readNode(i);
      let s = i.nextSibling;
      if (s == n)
        break;
      let l = ue.get(i), a = ue.get(s);
      (l && a ? l.breakAfter : (l ? l.breakAfter : Nd(i)) || Nd(s) && (i.nodeName != "BR" || i.cmIgnore) && this.text.length > o) && this.lineBreak(), i = s;
    }
    return this.findPointBefore(r, n), this;
  }
  readTextNode(e) {
    let n = e.nodeValue;
    for (let r of this.points)
      r.node == e && (r.pos = this.text.length + Math.min(r.offset, n.length));
    for (let r = 0, i = this.lineSeparator ? null : /\r\n?|\n/g; ; ) {
      let o = -1, s = 1, l;
      if (this.lineSeparator ? (o = n.indexOf(this.lineSeparator, r), s = this.lineSeparator.length) : (l = i.exec(n)) && (o = l.index, s = l[0].length), this.append(n.slice(r, o < 0 ? n.length : o)), o < 0)
        break;
      if (this.lineBreak(), s > 1)
        for (let a of this.points)
          a.node == e && a.pos > this.text.length && (a.pos -= s - 1);
      r = o + s;
    }
  }
  readNode(e) {
    if (e.cmIgnore)
      return;
    let n = ue.get(e), r = n && n.overrideDOMText;
    if (r != null) {
      this.findPointInside(e, r.length);
      for (let i = r.iter(); !i.next().done; )
        i.lineBreak ? this.lineBreak() : this.append(i.value);
    } else
      e.nodeType == 3 ? this.readTextNode(e) : e.nodeName == "BR" ? e.nextSibling && this.lineBreak() : e.nodeType == 1 && this.readRange(e.firstChild, null);
  }
  findPointBefore(e, n) {
    for (let r of this.points)
      r.node == e && e.childNodes[r.offset] == n && (r.pos = this.text.length);
  }
  findPointInside(e, n) {
    for (let r of this.points)
      (e.nodeType == 3 ? r.node == e : e.contains(r.node)) && (r.pos = this.text.length + Math.min(n, r.offset));
  }
}
function Nd(t) {
  return t.nodeType == 1 && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(t.nodeName);
}
class Pd {
  constructor(e, n) {
    this.node = e, this.offset = n, this.pos = -1;
  }
}
let lt = typeof navigator < "u" ? navigator : { userAgent: "", vendor: "", platform: "" }, Tc = typeof document < "u" ? document : { documentElement: { style: {} } };
const Dc = /* @__PURE__ */ /Edge\/(\d+)/.exec(lt.userAgent), q0 = /* @__PURE__ */ /MSIE \d/.test(lt.userAgent), Mc = /* @__PURE__ */ /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(lt.userAgent), bl = !!(q0 || Mc || Dc), Bd = !bl && /* @__PURE__ */ /gecko\/(\d+)/i.test(lt.userAgent), va = !bl && /* @__PURE__ */ /Chrome\/(\d+)/.exec(lt.userAgent), Fd = "webkitFontSmoothing" in Tc.documentElement.style, $0 = !bl && /* @__PURE__ */ /Apple Computer/.test(lt.vendor), qd = $0 && (/* @__PURE__ */ /Mobile\/\w+/.test(lt.userAgent) || lt.maxTouchPoints > 2);
var P = {
  mac: qd || /* @__PURE__ */ /Mac/.test(lt.platform),
  windows: /* @__PURE__ */ /Win/.test(lt.platform),
  linux: /* @__PURE__ */ /Linux|X11/.test(lt.platform),
  ie: bl,
  ie_version: q0 ? Tc.documentMode || 6 : Mc ? +Mc[1] : Dc ? +Dc[1] : 0,
  gecko: Bd,
  gecko_version: Bd ? +(/* @__PURE__ */ /Firefox\/(\d+)/.exec(lt.userAgent) || [0, 0])[1] : 0,
  chrome: !!va,
  chrome_version: va ? +va[1] : 0,
  ios: qd,
  android: /* @__PURE__ */ /Android\b/.test(lt.userAgent),
  webkit: Fd,
  safari: $0,
  webkit_version: Fd ? +(/* @__PURE__ */ /\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1] : 0,
  tabSize: Tc.documentElement.style.tabSize != null ? "tab-size" : "-moz-tab-size"
};
const Uie = 256;
class Yt extends ue {
  constructor(e) {
    super(), this.text = e;
  }
  get length() {
    return this.text.length;
  }
  createDOM(e) {
    this.setDOM(e || document.createTextNode(this.text));
  }
  sync(e, n) {
    this.dom || this.createDOM(), this.dom.nodeValue != this.text && (n && n.node == this.dom && (n.written = !0), this.dom.nodeValue = this.text);
  }
  reuseDOM(e) {
    e.nodeType == 3 && this.createDOM(e);
  }
  merge(e, n, r) {
    return this.flags & 8 || r && (!(r instanceof Yt) || this.length - (n - e) + r.length > Uie || r.flags & 8) ? !1 : (this.text = this.text.slice(0, e) + (r ? r.text : "") + this.text.slice(n), this.markDirty(), !0);
  }
  split(e) {
    let n = new Yt(this.text.slice(e));
    return this.text = this.text.slice(0, e), this.markDirty(), n.flags |= this.flags & 8, n;
  }
  localPosFromDOM(e, n) {
    return e == this.dom ? n : n ? this.text.length : 0;
  }
  domAtPos(e) {
    return new Ye(this.dom, e);
  }
  domBoundsAround(e, n, r) {
    return { from: r, to: r + this.length, startDOM: this.dom, endDOM: this.dom.nextSibling };
  }
  coordsAt(e, n) {
    return Wie(this.dom, e, n);
  }
}
class un extends ue {
  constructor(e, n = [], r = 0) {
    super(), this.mark = e, this.children = n, this.length = r;
    for (let i of n)
      i.setParent(this);
  }
  setAttrs(e) {
    if (L0(e), this.mark.class && (e.className = this.mark.class), this.mark.attrs)
      for (let n in this.mark.attrs)
        e.setAttribute(n, this.mark.attrs[n]);
    return e;
  }
  canReuseDOM(e) {
    return super.canReuseDOM(e) && !((this.flags | e.flags) & 8);
  }
  reuseDOM(e) {
    e.nodeName == this.mark.tagName.toUpperCase() && (this.setDOM(e), this.flags |= 6);
  }
  sync(e, n) {
    this.dom ? this.flags & 4 && this.setAttrs(this.dom) : this.setDOM(this.setAttrs(document.createElement(this.mark.tagName))), super.sync(e, n);
  }
  merge(e, n, r, i, o, s) {
    return r && (!(r instanceof un && r.mark.eq(this.mark)) || e && o <= 0 || n < this.length && s <= 0) ? !1 : (B0(this, e, n, r ? r.children : [], o - 1, s - 1), this.markDirty(), !0);
  }
  split(e) {
    let n = [], r = 0, i = -1, o = 0;
    for (let l of this.children) {
      let a = r + l.length;
      a > e && n.push(r < e ? l.split(e - r) : l), i < 0 && r >= e && (i = o), r = a, o++;
    }
    let s = this.length - e;
    return this.length = e, i > -1 && (this.children.length = i, this.markDirty()), new un(this.mark, n, s);
  }
  domAtPos(e) {
    return H0(this, e);
  }
  coordsAt(e, n) {
    return V0(this, e, n);
  }
}
function Wie(t, e, n) {
  let r = t.nodeValue.length;
  e > r && (e = r);
  let i = e, o = e, s = 0;
  e == 0 && n < 0 || e == r && n >= 0 ? P.chrome || P.gecko || (e ? (i--, s = 1) : o < r && (o++, s = -1)) : n < 0 ? i-- : o < r && o++;
  let l = cr(t, i, o).getClientRects();
  if (!l.length)
    return null;
  let a = l[(s ? s < 0 : n >= 0) ? 0 : l.length - 1];
  return P.safari && !s && a.width == 0 && (a = Array.prototype.find.call(l, (c) => c.width) || a), s ? Hu(a, s < 0) : a || null;
}
class wn extends ue {
  static create(e, n, r) {
    return new wn(e, n, r);
  }
  constructor(e, n, r) {
    super(), this.widget = e, this.length = n, this.side = r, this.prevWidget = null;
  }
  split(e) {
    let n = wn.create(this.widget, this.length - e, this.side);
    return this.length -= e, n;
  }
  sync(e) {
    (!this.dom || !this.widget.updateDOM(this.dom, e)) && (this.dom && this.prevWidget && this.prevWidget.destroy(this.dom), this.prevWidget = null, this.setDOM(this.widget.toDOM(e)), this.dom.contentEditable = "false");
  }
  getSide() {
    return this.side;
  }
  merge(e, n, r, i, o, s) {
    return r && (!(r instanceof wn) || !this.widget.compare(r.widget) || e > 0 && o <= 0 || n < this.length && s <= 0) ? !1 : (this.length = e + (r ? r.length : 0) + (this.length - n), !0);
  }
  become(e) {
    return e instanceof wn && e.side == this.side && this.widget.constructor == e.widget.constructor ? (this.widget.compare(e.widget) || this.markDirty(!0), this.dom && !this.prevWidget && (this.prevWidget = this.widget), this.widget = e.widget, this.length = e.length, !0) : !1;
  }
  ignoreMutation() {
    return !0;
  }
  ignoreEvent(e) {
    return this.widget.ignoreEvent(e);
  }
  get overrideDOMText() {
    if (this.length == 0)
      return J.empty;
    let e = this;
    for (; e.parent; )
      e = e.parent;
    let { view: n } = e, r = n && n.state.doc, i = this.posAtStart;
    return r ? r.slice(i, i + this.length) : J.empty;
  }
  domAtPos(e) {
    return (this.length ? e == 0 : this.side > 0) ? Ye.before(this.dom) : Ye.after(this.dom, e == this.length);
  }
  domBoundsAround() {
    return null;
  }
  coordsAt(e, n) {
    let r = this.widget.coordsAt(this.dom, e, n);
    if (r)
      return r;
    let i = this.dom.getClientRects(), o = null;
    if (!i.length)
      return null;
    let s = this.side ? this.side < 0 : e > 0;
    for (let l = s ? i.length - 1 : 0; o = i[l], !(e > 0 ? l == 0 : l == i.length - 1 || o.top < o.bottom); l += s ? -1 : 1)
      ;
    return Hu(o, !s);
  }
  get isEditable() {
    return !1;
  }
  get isWidget() {
    return !0;
  }
  get isHidden() {
    return this.widget.isHidden;
  }
  destroy() {
    super.destroy(), this.dom && this.widget.destroy(this.dom);
  }
}
class Kr extends ue {
  constructor(e) {
    super(), this.side = e;
  }
  get length() {
    return 0;
  }
  merge() {
    return !1;
  }
  become(e) {
    return e instanceof Kr && e.side == this.side;
  }
  split() {
    return new Kr(this.side);
  }
  sync() {
    if (!this.dom) {
      let e = document.createElement("img");
      e.className = "cm-widgetBuffer", e.setAttribute("aria-hidden", "true"), this.setDOM(e);
    }
  }
  getSide() {
    return this.side;
  }
  domAtPos(e) {
    return this.side > 0 ? Ye.before(this.dom) : Ye.after(this.dom);
  }
  localPosFromDOM() {
    return 0;
  }
  domBoundsAround() {
    return null;
  }
  coordsAt(e) {
    return this.dom.getBoundingClientRect();
  }
  get overrideDOMText() {
    return J.empty;
  }
  get isHidden() {
    return !0;
  }
}
Yt.prototype.children = wn.prototype.children = Kr.prototype.children = zu;
function H0(t, e) {
  let n = t.dom, { children: r } = t, i = 0;
  for (let o = 0; i < r.length; i++) {
    let s = r[i], l = o + s.length;
    if (!(l == o && s.getSide() <= 0)) {
      if (e > o && e < l && s.dom.parentNode == n)
        return s.domAtPos(e - o);
      if (e <= o)
        break;
      o = l;
    }
  }
  for (let o = i; o > 0; o--) {
    let s = r[o - 1];
    if (s.dom.parentNode == n)
      return s.domAtPos(s.length);
  }
  for (let o = i; o < r.length; o++) {
    let s = r[o];
    if (s.dom.parentNode == n)
      return s.domAtPos(0);
  }
  return new Ye(n, 0);
}
function z0(t, e, n) {
  let r, { children: i } = t;
  n > 0 && e instanceof un && i.length && (r = i[i.length - 1]) instanceof un && r.mark.eq(e.mark) ? z0(r, e.children[0], n - 1) : (i.push(e), e.setParent(t)), t.length += e.length;
}
function V0(t, e, n) {
  let r = null, i = -1, o = null, s = -1;
  function l(c, u) {
    for (let h = 0, f = 0; h < c.children.length && f <= u; h++) {
      let d = c.children[h], p = f + d.length;
      p >= u && (d.children.length ? l(d, u - f) : (!o || o.isHidden && n > 0) && (p > u || f == p && d.getSide() > 0) ? (o = d, s = u - f) : (f < u || f == p && d.getSide() < 0 && !d.isHidden) && (r = d, i = u - f)), f = p;
    }
  }
  l(t, e);
  let a = (n < 0 ? r : o) || r || o;
  return a ? a.coordsAt(Math.max(0, a == r ? i : s), n) : jie(t);
}
function jie(t) {
  let e = t.dom.lastChild;
  if (!e)
    return t.dom.getBoundingClientRect();
  let n = Gi(e);
  return n[n.length - 1] || null;
}
function Oc(t, e) {
  for (let n in t)
    n == "class" && e.class ? e.class += " " + t.class : n == "style" && e.style ? e.style += ";" + t.style : e[n] = t[n];
  return e;
}
const $d = /* @__PURE__ */ Object.create(null);
function Vu(t, e, n) {
  if (t == e)
    return !0;
  t || (t = $d), e || (e = $d);
  let r = Object.keys(t), i = Object.keys(e);
  if (r.length - (n && r.indexOf(n) > -1 ? 1 : 0) != i.length - (n && i.indexOf(n) > -1 ? 1 : 0))
    return !1;
  for (let o of r)
    if (o != n && (i.indexOf(o) == -1 || t[o] !== e[o]))
      return !1;
  return !0;
}
function Rc(t, e, n) {
  let r = !1;
  if (e)
    for (let i in e)
      n && i in n || (r = !0, i == "style" ? t.style.cssText = "" : t.removeAttribute(i));
  if (n)
    for (let i in n)
      e && e[i] == n[i] || (r = !0, i == "style" ? t.style.cssText = n[i] : t.setAttribute(i, n[i]));
  return r;
}
function Gie(t) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let n = 0; n < t.attributes.length; n++) {
    let r = t.attributes[n];
    e[r.name] = r.value;
  }
  return e;
}
class qn {
  eq(e) {
    return !1;
  }
  updateDOM(e, n) {
    return !1;
  }
  compare(e) {
    return this == e || this.constructor == e.constructor && this.eq(e);
  }
  get estimatedHeight() {
    return -1;
  }
  get lineBreaks() {
    return 0;
  }
  ignoreEvent(e) {
    return !0;
  }
  coordsAt(e, n, r) {
    return null;
  }
  get isHidden() {
    return !1;
  }
  destroy(e) {
  }
}
var be = /* @__PURE__ */ function(t) {
  return t[t.Text = 0] = "Text", t[t.WidgetBefore = 1] = "WidgetBefore", t[t.WidgetAfter = 2] = "WidgetAfter", t[t.WidgetRange = 3] = "WidgetRange", t;
}(be || (be = {}));
class V extends ar {
  constructor(e, n, r, i) {
    super(), this.startSide = e, this.endSide = n, this.widget = r, this.spec = i;
  }
  get heightRelevant() {
    return !1;
  }
  static mark(e) {
    return new so(e);
  }
  static widget(e) {
    let n = Math.max(-1e4, Math.min(1e4, e.side || 0)), r = !!e.block;
    return n += r && !e.inlineOrder ? n > 0 ? 3e8 : -4e8 : n > 0 ? 1e8 : -1e8, new Pn(e, n, n, r, e.widget || null, !1);
  }
  static replace(e) {
    let n = !!e.block, r, i;
    if (e.isBlockGap)
      r = -5e8, i = 4e8;
    else {
      let { start: o, end: s } = U0(e, n);
      r = (o ? n ? -3e8 : -1 : 5e8) - 1, i = (s ? n ? 2e8 : 1 : -6e8) + 1;
    }
    return new Pn(e, r, i, n, e.widget || null, !0);
  }
  static line(e) {
    return new lo(e);
  }
  static set(e, n = !1) {
    return te.of(e, n);
  }
  hasHeight() {
    return this.widget ? this.widget.estimatedHeight > -1 : !1;
  }
}
V.none = te.empty;
class so extends V {
  constructor(e) {
    let { start: n, end: r } = U0(e);
    super(n ? -1 : 5e8, r ? 1 : -6e8, null, e), this.tagName = e.tagName || "span", this.class = e.class || "", this.attrs = e.attributes || null;
  }
  eq(e) {
    var n, r;
    return this == e || e instanceof so && this.tagName == e.tagName && (this.class || ((n = this.attrs) === null || n === void 0 ? void 0 : n.class)) == (e.class || ((r = e.attrs) === null || r === void 0 ? void 0 : r.class)) && Vu(this.attrs, e.attrs, "class");
  }
  range(e, n = e) {
    if (e >= n)
      throw new RangeError("Mark decorations may not be empty");
    return super.range(e, n);
  }
}
so.prototype.point = !1;
class lo extends V {
  constructor(e) {
    super(-2e8, -2e8, null, e);
  }
  eq(e) {
    return e instanceof lo && this.spec.class == e.spec.class && Vu(this.spec.attributes, e.spec.attributes);
  }
  range(e, n = e) {
    if (n != e)
      throw new RangeError("Line decoration ranges must be zero-length");
    return super.range(e, n);
  }
}
lo.prototype.mapMode = Ke.TrackBefore;
lo.prototype.point = !0;
class Pn extends V {
  constructor(e, n, r, i, o, s) {
    super(n, r, o, e), this.block = i, this.isReplace = s, this.mapMode = i ? n <= 0 ? Ke.TrackBefore : Ke.TrackAfter : Ke.TrackDel;
  }
  get type() {
    return this.startSide < this.endSide ? be.WidgetRange : this.startSide <= 0 ? be.WidgetBefore : be.WidgetAfter;
  }
  get heightRelevant() {
    return this.block || !!this.widget && (this.widget.estimatedHeight >= 5 || this.widget.lineBreaks > 0);
  }
  eq(e) {
    return e instanceof Pn && Kie(this.widget, e.widget) && this.block == e.block && this.startSide == e.startSide && this.endSide == e.endSide;
  }
  range(e, n = e) {
    if (this.isReplace && (e > n || e == n && this.startSide > 0 && this.endSide <= 0))
      throw new RangeError("Invalid range for replacement decoration");
    if (!this.isReplace && n != e)
      throw new RangeError("Widget decorations can only have zero-length ranges");
    return super.range(e, n);
  }
}
Pn.prototype.point = !0;
function U0(t, e = !1) {
  let { inclusiveStart: n, inclusiveEnd: r } = t;
  return n == null && (n = t.inclusive), r == null && (r = t.inclusive), { start: n != null ? n : e, end: r != null ? r : e };
}
function Kie(t, e) {
  return t == e || !!(t && e && t.compare(e));
}
function Lc(t, e, n, r = 0) {
  let i = n.length - 1;
  i >= 0 && n[i] + r >= t ? n[i] = Math.max(n[i], e) : n.push(t, e);
}
class je extends ue {
  constructor() {
    super(...arguments), this.children = [], this.length = 0, this.prevAttrs = void 0, this.attrs = null, this.breakAfter = 0;
  }
  merge(e, n, r, i, o, s) {
    if (r) {
      if (!(r instanceof je))
        return !1;
      this.dom || r.transferDOM(this);
    }
    return i && this.setDeco(r ? r.attrs : null), B0(this, e, n, r ? r.children : [], o, s), !0;
  }
  split(e) {
    let n = new je();
    if (n.breakAfter = this.breakAfter, this.length == 0)
      return n;
    let { i: r, off: i } = this.childPos(e);
    i && (n.append(this.children[r].split(i), 0), this.children[r].merge(i, this.children[r].length, null, !1, 0, 0), r++);
    for (let o = r; o < this.children.length; o++)
      n.append(this.children[o], 0);
    for (; r > 0 && this.children[r - 1].length == 0; )
      this.children[--r].destroy();
    return this.children.length = r, this.markDirty(), this.length = e, n;
  }
  transferDOM(e) {
    !this.dom || (this.markDirty(), e.setDOM(this.dom), e.prevAttrs = this.prevAttrs === void 0 ? this.attrs : this.prevAttrs, this.prevAttrs = void 0, this.dom = null);
  }
  setDeco(e) {
    Vu(this.attrs, e) || (this.dom && (this.prevAttrs = this.attrs, this.markDirty()), this.attrs = e);
  }
  append(e, n) {
    z0(this, e, n);
  }
  addLineDeco(e) {
    let n = e.spec.attributes, r = e.spec.class;
    n && (this.attrs = Oc(n, this.attrs || {})), r && (this.attrs = Oc({ class: r }, this.attrs || {}));
  }
  domAtPos(e) {
    return H0(this, e);
  }
  reuseDOM(e) {
    e.nodeName == "DIV" && (this.setDOM(e), this.flags |= 6);
  }
  sync(e, n) {
    var r;
    this.dom ? this.flags & 4 && (L0(this.dom), this.dom.className = "cm-line", this.prevAttrs = this.attrs ? null : void 0) : (this.setDOM(document.createElement("div")), this.dom.className = "cm-line", this.prevAttrs = this.attrs ? null : void 0), this.prevAttrs !== void 0 && (Rc(this.dom, this.prevAttrs, this.attrs), this.dom.classList.add("cm-line"), this.prevAttrs = void 0), super.sync(e, n);
    let i = this.dom.lastChild;
    for (; i && ue.get(i) instanceof un; )
      i = i.lastChild;
    if (!i || !this.length || i.nodeName != "BR" && ((r = ue.get(i)) === null || r === void 0 ? void 0 : r.isEditable) == !1 && (!P.ios || !this.children.some((o) => o instanceof Yt))) {
      let o = document.createElement("BR");
      o.cmIgnore = !0, this.dom.appendChild(o);
    }
  }
  measureTextSize() {
    if (this.children.length == 0 || this.length > 20)
      return null;
    let e = 0, n;
    for (let r of this.children) {
      if (!(r instanceof Yt) || /[^ -~]/.test(r.text))
        return null;
      let i = Gi(r.dom);
      if (i.length != 1)
        return null;
      e += i[0].width, n = i[0].height;
    }
    return e ? {
      lineHeight: this.dom.getBoundingClientRect().height,
      charWidth: e / this.length,
      textHeight: n
    } : null;
  }
  coordsAt(e, n) {
    let r = V0(this, e, n);
    if (!this.children.length && r && this.parent) {
      let { heightOracle: i } = this.parent.view.viewState, o = r.bottom - r.top;
      if (Math.abs(o - i.lineHeight) < 2 && i.textHeight < o) {
        let s = (o - i.textHeight) / 2;
        return { top: r.top + s, bottom: r.bottom - s, left: r.left, right: r.left };
      }
    }
    return r;
  }
  become(e) {
    return !1;
  }
  get type() {
    return be.Text;
  }
  static find(e, n) {
    for (let r = 0, i = 0; r < e.children.length; r++) {
      let o = e.children[r], s = i + o.length;
      if (s >= n) {
        if (o instanceof je)
          return o;
        if (s > n)
          break;
      }
      i = s + o.breakAfter;
    }
    return null;
  }
}
class rr extends ue {
  constructor(e, n, r) {
    super(), this.widget = e, this.length = n, this.type = r, this.breakAfter = 0, this.prevWidget = null;
  }
  merge(e, n, r, i, o, s) {
    return r && (!(r instanceof rr) || !this.widget.compare(r.widget) || e > 0 && o <= 0 || n < this.length && s <= 0) ? !1 : (this.length = e + (r ? r.length : 0) + (this.length - n), !0);
  }
  domAtPos(e) {
    return e == 0 ? Ye.before(this.dom) : Ye.after(this.dom, e == this.length);
  }
  split(e) {
    let n = this.length - e;
    this.length = e;
    let r = new rr(this.widget, n, this.type);
    return r.breakAfter = this.breakAfter, r;
  }
  get children() {
    return zu;
  }
  sync(e) {
    (!this.dom || !this.widget.updateDOM(this.dom, e)) && (this.dom && this.prevWidget && this.prevWidget.destroy(this.dom), this.prevWidget = null, this.setDOM(this.widget.toDOM(e)), this.dom.contentEditable = "false");
  }
  get overrideDOMText() {
    return this.parent ? this.parent.view.state.doc.slice(this.posAtStart, this.posAtEnd) : J.empty;
  }
  domBoundsAround() {
    return null;
  }
  become(e) {
    return e instanceof rr && e.widget.constructor == this.widget.constructor ? (e.widget.compare(this.widget) || this.markDirty(!0), this.dom && !this.prevWidget && (this.prevWidget = this.widget), this.widget = e.widget, this.length = e.length, this.type = e.type, this.breakAfter = e.breakAfter, !0) : !1;
  }
  ignoreMutation() {
    return !0;
  }
  ignoreEvent(e) {
    return this.widget.ignoreEvent(e);
  }
  get isEditable() {
    return !1;
  }
  get isWidget() {
    return !0;
  }
  coordsAt(e, n) {
    return this.widget.coordsAt(this.dom, e, n);
  }
  destroy() {
    super.destroy(), this.dom && this.widget.destroy(this.dom);
  }
}
class Ri {
  constructor(e, n, r, i) {
    this.doc = e, this.pos = n, this.end = r, this.disallowBlockEffectsFor = i, this.content = [], this.curLine = null, this.breakAtStart = 0, this.pendingBuffer = 0, this.bufferMarks = [], this.atCursorPos = !0, this.openStart = -1, this.openEnd = -1, this.text = "", this.textOff = 0, this.cursor = e.iter(), this.skip = n;
  }
  posCovered() {
    if (this.content.length == 0)
      return !this.breakAtStart && this.doc.lineAt(this.pos).from != this.pos;
    let e = this.content[this.content.length - 1];
    return !e.breakAfter && !(e instanceof rr && e.type == be.WidgetBefore);
  }
  getLine() {
    return this.curLine || (this.content.push(this.curLine = new je()), this.atCursorPos = !0), this.curLine;
  }
  flushBuffer(e = this.bufferMarks) {
    this.pendingBuffer && (this.curLine.append(To(new Kr(-1), e), e.length), this.pendingBuffer = 0);
  }
  addBlockWidget(e) {
    this.flushBuffer(), this.curLine = null, this.content.push(e);
  }
  finish(e) {
    this.pendingBuffer && e <= this.bufferMarks.length ? this.flushBuffer() : this.pendingBuffer = 0, this.posCovered() || this.getLine();
  }
  buildText(e, n, r) {
    for (; e > 0; ) {
      if (this.textOff == this.text.length) {
        let { value: o, lineBreak: s, done: l } = this.cursor.next(this.skip);
        if (this.skip = 0, l)
          throw new Error("Ran out of text content when drawing inline views");
        if (s) {
          this.posCovered() || this.getLine(), this.content.length ? this.content[this.content.length - 1].breakAfter = 1 : this.breakAtStart = 1, this.flushBuffer(), this.curLine = null, this.atCursorPos = !0, e--;
          continue;
        } else
          this.text = o, this.textOff = 0;
      }
      let i = Math.min(this.text.length - this.textOff, e, 512);
      this.flushBuffer(n.slice(n.length - r)), this.getLine().append(To(new Yt(this.text.slice(this.textOff, this.textOff + i)), n), r), this.atCursorPos = !0, this.textOff += i, e -= i, r = 0;
    }
  }
  span(e, n, r, i) {
    this.buildText(n - e, r, i), this.pos = n, this.openStart < 0 && (this.openStart = i);
  }
  point(e, n, r, i, o, s) {
    if (this.disallowBlockEffectsFor[s] && r instanceof Pn) {
      if (r.block)
        throw new RangeError("Block decorations may not be specified via plugins");
      if (n > this.doc.lineAt(this.pos).to)
        throw new RangeError("Decorations that replace line breaks may not be specified via plugins");
    }
    let l = n - e;
    if (r instanceof Pn)
      if (r.block) {
        let { type: a } = r;
        a == be.WidgetAfter && !this.posCovered() && this.getLine(), this.addBlockWidget(new rr(r.widget || new Hd("div"), l, a));
      } else {
        let a = wn.create(r.widget || new Hd("span"), l, l ? 0 : r.startSide), c = this.atCursorPos && !a.isEditable && o <= i.length && (e < n || r.startSide > 0), u = !a.isEditable && (e < n || o > i.length || r.startSide <= 0), h = this.getLine();
        this.pendingBuffer == 2 && !c && !a.isEditable && (this.pendingBuffer = 0), this.flushBuffer(i), c && (h.append(To(new Kr(1), i), o), o = i.length + Math.max(0, o - i.length)), h.append(To(a, i), o), this.atCursorPos = u, this.pendingBuffer = u ? e < n || o > i.length ? 1 : 2 : 0, this.pendingBuffer && (this.bufferMarks = i.slice());
      }
    else
      this.doc.lineAt(this.pos).from == this.pos && this.getLine().addLineDeco(r);
    l && (this.textOff + l <= this.text.length ? this.textOff += l : (this.skip += l - (this.text.length - this.textOff), this.text = "", this.textOff = 0), this.pos = n), this.openStart < 0 && (this.openStart = o);
  }
  static build(e, n, r, i, o) {
    let s = new Ri(e, n, r, o);
    return s.openEnd = te.spans(i, n, r, s), s.openStart < 0 && (s.openStart = s.openEnd), s.finish(s.openEnd), s;
  }
}
function To(t, e) {
  for (let n of e)
    t = new un(n, [t], t.length);
  return t;
}
class Hd extends qn {
  constructor(e) {
    super(), this.tag = e;
  }
  eq(e) {
    return e.tag == this.tag;
  }
  toDOM() {
    return document.createElement(this.tag);
  }
  updateDOM(e) {
    return e.nodeName.toLowerCase() == this.tag;
  }
  get isHidden() {
    return !0;
  }
}
const W0 = /* @__PURE__ */ N.define(), j0 = /* @__PURE__ */ N.define(), G0 = /* @__PURE__ */ N.define(), K0 = /* @__PURE__ */ N.define(), Ic = /* @__PURE__ */ N.define(), Y0 = /* @__PURE__ */ N.define(), Z0 = /* @__PURE__ */ N.define(), J0 = /* @__PURE__ */ N.define({
  combine: (t) => t.some((e) => e)
}), X0 = /* @__PURE__ */ N.define({
  combine: (t) => t.some((e) => e)
});
class Ds {
  constructor(e, n = "nearest", r = "nearest", i = 5, o = 5) {
    this.range = e, this.y = n, this.x = r, this.yMargin = i, this.xMargin = o;
  }
  map(e) {
    return e.empty ? this : new Ds(this.range.map(e), this.y, this.x, this.yMargin, this.xMargin);
  }
}
const zd = /* @__PURE__ */ j.define({ map: (t, e) => t.map(e) });
function pt(t, e, n) {
  let r = t.facet(K0);
  r.length ? r[0](e) : window.onerror ? window.onerror(String(e), n, void 0, void 0, e) : n ? console.error(n + ":", e) : console.error(e);
}
const vl = /* @__PURE__ */ N.define({ combine: (t) => t.length ? t[0] : !0 });
let Yie = 0;
const _i = /* @__PURE__ */ N.define();
class Ee {
  constructor(e, n, r, i) {
    this.id = e, this.create = n, this.domEventHandlers = r, this.extension = i(this);
  }
  static define(e, n) {
    const { eventHandlers: r, provide: i, decorations: o } = n || {};
    return new Ee(Yie++, e, r, (s) => {
      let l = [_i.of(s)];
      return o && l.push(Ki.of((a) => {
        let c = a.plugin(s);
        return c ? o(c) : V.none;
      })), i && l.push(i(s)), l;
    });
  }
  static fromClass(e, n) {
    return Ee.define((r) => new e(r), n);
  }
}
class xa {
  constructor(e) {
    this.spec = e, this.mustUpdate = null, this.value = null;
  }
  update(e) {
    if (this.value) {
      if (this.mustUpdate) {
        let n = this.mustUpdate;
        if (this.mustUpdate = null, this.value.update)
          try {
            this.value.update(n);
          } catch (r) {
            if (pt(n.state, r, "CodeMirror plugin crashed"), this.value.destroy)
              try {
                this.value.destroy();
              } catch {
              }
            this.deactivate();
          }
      }
    } else if (this.spec)
      try {
        this.value = this.spec.create(e);
      } catch (n) {
        pt(e.state, n, "CodeMirror plugin crashed"), this.deactivate();
      }
    return this;
  }
  destroy(e) {
    var n;
    if (!((n = this.value) === null || n === void 0) && n.destroy)
      try {
        this.value.destroy();
      } catch (r) {
        pt(e.state, r, "CodeMirror plugin crashed");
      }
  }
  deactivate() {
    this.spec = this.value = null;
  }
}
const Q0 = /* @__PURE__ */ N.define(), Uu = /* @__PURE__ */ N.define(), Ki = /* @__PURE__ */ N.define(), Wu = /* @__PURE__ */ N.define(), ey = /* @__PURE__ */ N.define();
function Vd(t, e, n) {
  let r = t.state.facet(ey);
  if (!r.length)
    return r;
  let i = r.map((s) => s instanceof Function ? s(t) : s), o = [];
  return te.spans(i, e, n, {
    point() {
    },
    span(s, l, a, c) {
      let u = o;
      for (let h = a.length - 1; h >= 0; h--, c--) {
        let f = a[h].spec.bidiIsolate, d;
        if (f != null)
          if (c > 0 && u.length && (d = u[u.length - 1]).to == s && d.direction == f)
            d.to = l, u = d.inner;
          else {
            let p = { from: s, to: l, direction: f, inner: [] };
            u.push(p), u = p.inner;
          }
      }
    }
  }), o;
}
const ty = /* @__PURE__ */ N.define();
function ny(t) {
  let e = 0, n = 0, r = 0, i = 0;
  for (let o of t.state.facet(ty)) {
    let s = o(t);
    s && (s.left != null && (e = Math.max(e, s.left)), s.right != null && (n = Math.max(n, s.right)), s.top != null && (r = Math.max(r, s.top)), s.bottom != null && (i = Math.max(i, s.bottom)));
  }
  return { left: e, right: n, top: r, bottom: i };
}
const ki = /* @__PURE__ */ N.define();
class mt {
  constructor(e, n, r, i) {
    this.fromA = e, this.toA = n, this.fromB = r, this.toB = i;
  }
  join(e) {
    return new mt(Math.min(this.fromA, e.fromA), Math.max(this.toA, e.toA), Math.min(this.fromB, e.fromB), Math.max(this.toB, e.toB));
  }
  addToSet(e) {
    let n = e.length, r = this;
    for (; n > 0; n--) {
      let i = e[n - 1];
      if (!(i.fromA > r.toA)) {
        if (i.toA < r.fromA)
          break;
        r = r.join(i), e.splice(n - 1, 1);
      }
    }
    return e.splice(n, 0, r), e;
  }
  static extendWithRanges(e, n) {
    if (n.length == 0)
      return e;
    let r = [];
    for (let i = 0, o = 0, s = 0, l = 0; ; i++) {
      let a = i == e.length ? null : e[i], c = s - l, u = a ? a.fromB : 1e9;
      for (; o < n.length && n[o] < u; ) {
        let h = n[o], f = n[o + 1], d = Math.max(l, h), p = Math.min(u, f);
        if (d <= p && new mt(d + c, p + c, d, p).addToSet(r), f > u)
          break;
        o += 2;
      }
      if (!a)
        return r;
      new mt(a.fromA, a.toA, a.fromB, a.toB).addToSet(r), s = a.toA, l = a.toB;
    }
  }
}
class Ms {
  constructor(e, n, r) {
    this.view = e, this.state = n, this.transactions = r, this.flags = 0, this.startState = e.state, this.changes = Ce.empty(this.startState.doc.length);
    for (let o of r)
      this.changes = this.changes.compose(o.changes);
    let i = [];
    this.changes.iterChangedRanges((o, s, l, a) => i.push(new mt(o, s, l, a))), this.changedRanges = i;
  }
  static create(e, n, r) {
    return new Ms(e, n, r);
  }
  get viewportChanged() {
    return (this.flags & 4) > 0;
  }
  get heightChanged() {
    return (this.flags & 2) > 0;
  }
  get geometryChanged() {
    return this.docChanged || (this.flags & 10) > 0;
  }
  get focusChanged() {
    return (this.flags & 1) > 0;
  }
  get docChanged() {
    return !this.changes.empty;
  }
  get selectionSet() {
    return this.transactions.some((e) => e.selection);
  }
  get empty() {
    return this.flags == 0 && this.transactions.length == 0;
  }
}
var ye = /* @__PURE__ */ function(t) {
  return t[t.LTR = 0] = "LTR", t[t.RTL = 1] = "RTL", t;
}(ye || (ye = {}));
const Yi = ye.LTR, ry = ye.RTL;
function iy(t) {
  let e = [];
  for (let n = 0; n < t.length; n++)
    e.push(1 << +t[n]);
  return e;
}
const Zie = /* @__PURE__ */ iy("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"), Jie = /* @__PURE__ */ iy("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"), Nc = /* @__PURE__ */ Object.create(null), Lt = [];
for (let t of ["()", "[]", "{}"]) {
  let e = /* @__PURE__ */ t.charCodeAt(0), n = /* @__PURE__ */ t.charCodeAt(1);
  Nc[e] = n, Nc[n] = -e;
}
function Xie(t) {
  return t <= 247 ? Zie[t] : 1424 <= t && t <= 1524 ? 2 : 1536 <= t && t <= 1785 ? Jie[t - 1536] : 1774 <= t && t <= 2220 ? 4 : 8192 <= t && t <= 8203 ? 256 : 64336 <= t && t <= 65023 ? 4 : t == 8204 ? 256 : 1;
}
const Qie = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;
class Cn {
  get dir() {
    return this.level % 2 ? ry : Yi;
  }
  constructor(e, n, r) {
    this.from = e, this.to = n, this.level = r;
  }
  side(e, n) {
    return this.dir == n == e ? this.to : this.from;
  }
  static find(e, n, r, i) {
    let o = -1;
    for (let s = 0; s < e.length; s++) {
      let l = e[s];
      if (l.from <= n && l.to >= n) {
        if (l.level == r)
          return s;
        (o < 0 || (i != 0 ? i < 0 ? l.from < n : l.to > n : e[o].level > l.level)) && (o = s);
      }
    }
    if (o < 0)
      throw new RangeError("Index out of range");
    return o;
  }
}
function oy(t, e) {
  if (t.length != e.length)
    return !1;
  for (let n = 0; n < t.length; n++) {
    let r = t[n], i = e[n];
    if (r.from != i.from || r.to != i.to || r.direction != i.direction || !oy(r.inner, i.inner))
      return !1;
  }
  return !0;
}
const se = [];
function eoe(t, e, n, r, i) {
  for (let o = 0; o <= r.length; o++) {
    let s = o ? r[o - 1].to : e, l = o < r.length ? r[o].from : n, a = o ? 256 : i;
    for (let c = s, u = a, h = a; c < l; c++) {
      let f = Xie(t.charCodeAt(c));
      f == 512 ? f = u : f == 8 && h == 4 && (f = 16), se[c] = f == 4 ? 2 : f, f & 7 && (h = f), u = f;
    }
    for (let c = s, u = a, h = a; c < l; c++) {
      let f = se[c];
      if (f == 128)
        c < l - 1 && u == se[c + 1] && u & 24 ? f = se[c] = u : se[c] = 256;
      else if (f == 64) {
        let d = c + 1;
        for (; d < l && se[d] == 64; )
          d++;
        let p = c && u == 8 || d < n && se[d] == 8 ? h == 1 ? 1 : 8 : 256;
        for (let m = c; m < d; m++)
          se[m] = p;
        c = d - 1;
      } else
        f == 8 && h == 1 && (se[c] = 1);
      u = f, f & 7 && (h = f);
    }
  }
}
function toe(t, e, n, r, i) {
  let o = i == 1 ? 2 : 1;
  for (let s = 0, l = 0, a = 0; s <= r.length; s++) {
    let c = s ? r[s - 1].to : e, u = s < r.length ? r[s].from : n;
    for (let h = c, f, d, p; h < u; h++)
      if (d = Nc[f = t.charCodeAt(h)])
        if (d < 0) {
          for (let m = l - 3; m >= 0; m -= 3)
            if (Lt[m + 1] == -d) {
              let g = Lt[m + 2], y = g & 2 ? i : g & 4 ? g & 1 ? o : i : 0;
              y && (se[h] = se[Lt[m]] = y), l = m;
              break;
            }
        } else {
          if (Lt.length == 189)
            break;
          Lt[l++] = h, Lt[l++] = f, Lt[l++] = a;
        }
      else if ((p = se[h]) == 2 || p == 1) {
        let m = p == i;
        a = m ? 0 : 1;
        for (let g = l - 3; g >= 0; g -= 3) {
          let y = Lt[g + 2];
          if (y & 2)
            break;
          if (m)
            Lt[g + 2] |= 2;
          else {
            if (y & 4)
              break;
            Lt[g + 2] |= 4;
          }
        }
      }
  }
}
function noe(t, e, n, r) {
  for (let i = 0, o = r; i <= n.length; i++) {
    let s = i ? n[i - 1].to : t, l = i < n.length ? n[i].from : e;
    for (let a = s; a < l; ) {
      let c = se[a];
      if (c == 256) {
        let u = a + 1;
        for (; ; )
          if (u == l) {
            if (i == n.length)
              break;
            u = n[i++].to, l = i < n.length ? n[i].from : e;
          } else if (se[u] == 256)
            u++;
          else
            break;
        let h = o == 1, f = (u < e ? se[u] : r) == 1, d = h == f ? h ? 1 : 2 : r;
        for (let p = u, m = i, g = m ? n[m - 1].to : t; p > a; )
          p == g && (p = n[--m].from, g = m ? n[m - 1].to : t), se[--p] = d;
        a = u;
      } else
        o = c, a++;
    }
  }
}
function Pc(t, e, n, r, i, o, s) {
  let l = r % 2 ? 2 : 1;
  if (r % 2 == i % 2)
    for (let a = e, c = 0; a < n; ) {
      let u = !0, h = !1;
      if (c == o.length || a < o[c].from) {
        let m = se[a];
        m != l && (u = !1, h = m == 16);
      }
      let f = !u && l == 1 ? [] : null, d = u ? r : r + 1, p = a;
      e:
        for (; ; )
          if (c < o.length && p == o[c].from) {
            if (h)
              break e;
            let m = o[c];
            if (!u)
              for (let g = m.to, y = c + 1; ; ) {
                if (g == n)
                  break e;
                if (y < o.length && o[y].from == g)
                  g = o[y++].to;
                else {
                  if (se[g] == l)
                    break e;
                  break;
                }
              }
            if (c++, f)
              f.push(m);
            else {
              m.from > a && s.push(new Cn(a, m.from, d));
              let g = m.direction == Yi != !(d % 2);
              Bc(t, g ? r + 1 : r, i, m.inner, m.from, m.to, s), a = m.to;
            }
            p = m.to;
          } else {
            if (p == n || (u ? se[p] != l : se[p] == l))
              break;
            p++;
          }
      f ? Pc(t, a, p, r + 1, i, f, s) : a < p && s.push(new Cn(a, p, d)), a = p;
    }
  else
    for (let a = n, c = o.length; a > e; ) {
      let u = !0, h = !1;
      if (!c || a > o[c - 1].to) {
        let m = se[a - 1];
        m != l && (u = !1, h = m == 16);
      }
      let f = !u && l == 1 ? [] : null, d = u ? r : r + 1, p = a;
      e:
        for (; ; )
          if (c && p == o[c - 1].to) {
            if (h)
              break e;
            let m = o[--c];
            if (!u)
              for (let g = m.from, y = c; ; ) {
                if (g == e)
                  break e;
                if (y && o[y - 1].to == g)
                  g = o[--y].from;
                else {
                  if (se[g - 1] == l)
                    break e;
                  break;
                }
              }
            if (f)
              f.push(m);
            else {
              m.to < a && s.push(new Cn(m.to, a, d));
              let g = m.direction == Yi != !(d % 2);
              Bc(t, g ? r + 1 : r, i, m.inner, m.from, m.to, s), a = m.from;
            }
            p = m.from;
          } else {
            if (p == e || (u ? se[p - 1] != l : se[p - 1] == l))
              break;
            p--;
          }
      f ? Pc(t, p, a, r + 1, i, f, s) : p < a && s.push(new Cn(p, a, d)), a = p;
    }
}
function Bc(t, e, n, r, i, o, s) {
  let l = e % 2 ? 2 : 1;
  eoe(t, i, o, r, l), toe(t, i, o, r, l), noe(i, o, r, l), Pc(t, i, o, e, n, r, s);
}
function roe(t, e, n) {
  if (!t)
    return [new Cn(0, 0, e == ry ? 1 : 0)];
  if (e == Yi && !n.length && !Qie.test(t))
    return sy(t.length);
  if (n.length)
    for (; t.length > se.length; )
      se[se.length] = 256;
  let r = [], i = e == Yi ? 0 : 1;
  return Bc(t, i, i, n, 0, t.length, r), r;
}
function sy(t) {
  return [new Cn(0, t, 0)];
}
let ly = "";
function ioe(t, e, n, r, i) {
  var o;
  let s = r.head - t.from, l = -1;
  if (s == 0) {
    if (!i || !t.length)
      return null;
    e[0].level != n && (s = e[0].side(!1, n), l = 0);
  } else if (s == t.length) {
    if (i)
      return null;
    let f = e[e.length - 1];
    f.level != n && (s = f.side(!0, n), l = e.length - 1);
  }
  l < 0 && (l = Cn.find(e, s, (o = r.bidiLevel) !== null && o !== void 0 ? o : -1, r.assoc));
  let a = e[l];
  s == a.side(i, n) && (a = e[l += i ? 1 : -1], s = a.side(!i, n));
  let c = i == (a.dir == n), u = $e(t.text, s, c);
  if (ly = t.text.slice(Math.min(s, u), Math.max(s, u)), u != a.side(i, n))
    return A.cursor(u + t.from, c ? -1 : 1, a.level);
  let h = l == (i ? e.length - 1 : 0) ? null : e[l + (i ? 1 : -1)];
  return !h && a.level != n ? A.cursor(i ? t.to : t.from, i ? -1 : 1, n) : h && h.level < a.level ? A.cursor(h.side(!i, n) + t.from, i ? 1 : -1, h.level) : A.cursor(u + t.from, i ? -1 : 1, a.level);
}
class Ud extends ue {
  get length() {
    return this.view.state.doc.length;
  }
  constructor(e) {
    super(), this.view = e, this.decorations = [], this.dynamicDecorationMap = [], this.hasComposition = null, this.markedForComposition = /* @__PURE__ */ new Set(), this.minWidth = 0, this.minWidthFrom = 0, this.minWidthTo = 0, this.impreciseAnchor = null, this.impreciseHead = null, this.forceSelection = !1, this.lastUpdate = Date.now(), this.setDOM(e.contentDOM), this.children = [new je()], this.children[0].setParent(this), this.updateDeco(), this.updateInner([new mt(0, 0, 0, e.state.doc.length)], 0, null);
  }
  update(e) {
    let n = e.changedRanges;
    this.minWidth > 0 && n.length && (n.every(({ fromA: l, toA: a }) => a < this.minWidthFrom || l > this.minWidthTo) ? (this.minWidthFrom = e.changes.mapPos(this.minWidthFrom, 1), this.minWidthTo = e.changes.mapPos(this.minWidthTo, 1)) : this.minWidth = this.minWidthFrom = this.minWidthTo = 0);
    let r = this.view.inputState.composing < 0 ? null : soe(this.view, e.changes);
    if (this.hasComposition) {
      this.markedForComposition.clear();
      let { from: l, to: a } = this.hasComposition;
      n = new mt(l, a, e.changes.mapPos(l, -1), e.changes.mapPos(a, 1)).addToSet(n.slice());
    }
    this.hasComposition = r ? { from: r.range.fromB, to: r.range.toB } : null, (P.ie || P.chrome) && !r && e && e.state.doc.lines != e.startState.doc.lines && (this.forceSelection = !0);
    let i = this.decorations, o = this.updateDeco(), s = coe(i, o, e.changes);
    return n = mt.extendWithRanges(n, s), !(this.flags & 7) && n.length == 0 ? !1 : (this.updateInner(n, e.startState.doc.length, r), e.transactions.length && (this.lastUpdate = Date.now()), !0);
  }
  updateInner(e, n, r) {
    this.view.viewState.mustMeasureContent = !0, this.updateChildren(e, n, r);
    let { observer: i } = this.view;
    i.ignore(() => {
      this.dom.style.height = this.view.viewState.contentHeight + "px", this.dom.style.flexBasis = this.minWidth ? this.minWidth + "px" : "";
      let s = P.chrome || P.ios ? { node: i.selectionRange.focusNode, written: !1 } : void 0;
      this.sync(this.view, s), this.flags &= -8, s && (s.written || i.selectionRange.focusNode != s.node) && (this.forceSelection = !0), this.dom.style.height = "";
    }), this.markedForComposition.forEach((s) => s.flags &= -9);
    let o = [];
    if (this.view.viewport.from || this.view.viewport.to < this.view.state.doc.length)
      for (let s of this.children)
        s instanceof rr && s.widget instanceof Wd && o.push(s.dom);
    i.updateGaps(o);
  }
  updateChildren(e, n, r) {
    let i = r ? r.range.addToSet(e.slice()) : e, o = this.childCursor(n);
    for (let s = i.length - 1; ; s--) {
      let l = s >= 0 ? i[s] : null;
      if (!l)
        break;
      let { fromA: a, toA: c, fromB: u, toB: h } = l, f, d, p, m;
      if (r && r.range.fromB < h && r.range.toB > u) {
        let x = Ri.build(this.view.state.doc, u, r.range.fromB, this.decorations, this.dynamicDecorationMap), w = Ri.build(this.view.state.doc, r.range.toB, h, this.decorations, this.dynamicDecorationMap);
        d = x.breakAtStart, p = x.openStart, m = w.openEnd;
        let v = this.compositionView(r);
        w.breakAtStart ? v.breakAfter = 1 : w.content.length && v.merge(v.length, v.length, w.content[0], !1, w.openStart, 0) && (v.breakAfter = w.content[0].breakAfter, w.content.shift()), x.content.length && v.merge(0, 0, x.content[x.content.length - 1], !0, 0, x.openEnd) && x.content.pop(), f = x.content.concat(v).concat(w.content);
      } else
        ({ content: f, breakAtStart: d, openStart: p, openEnd: m } = Ri.build(this.view.state.doc, u, h, this.decorations, this.dynamicDecorationMap));
      let { i: g, off: y } = o.findPos(c, 1), { i: b, off: k } = o.findPos(a, -1);
      P0(this, b, k, g, y, f, d, p, m);
    }
    r && this.fixCompositionDOM(r);
  }
  compositionView(e) {
    let n = new Yt(e.text.nodeValue);
    n.flags |= 8;
    for (let { deco: i } of e.marks)
      n = new un(i, [n], n.length);
    let r = new je();
    return r.append(n, 0), r;
  }
  fixCompositionDOM(e) {
    let n = (o, s) => {
      s.flags |= 8, this.markedForComposition.add(s);
      let l = ue.get(o);
      l != s && (l && (l.dom = null), s.setDOM(o));
    }, r = this.childPos(e.range.fromB, 1), i = this.children[r.i];
    n(e.line, i);
    for (let o = e.marks.length - 1; o >= -1; o--)
      r = i.childPos(r.off, 1), i = i.children[r.i], n(o >= 0 ? e.marks[o].node : e.text, i);
  }
  updateSelection(e = !1, n = !1) {
    (e || !this.view.observer.selectionRange.focusNode) && this.view.observer.readSelectionRange();
    let r = this.view.root.activeElement, i = r == this.dom, o = !i && is(this.dom, this.view.observer.selectionRange) && !(r && this.dom.contains(r));
    if (!(i || n || o))
      return;
    let s = this.forceSelection;
    this.forceSelection = !1;
    let l = this.view.state.selection.main, a = this.domAtPos(l.anchor), c = l.empty ? a : this.domAtPos(l.head);
    if (P.gecko && l.empty && !this.hasComposition && ooe(a)) {
      let h = document.createTextNode("");
      this.view.observer.ignore(() => a.node.insertBefore(h, a.node.childNodes[a.offset] || null)), a = c = new Ye(h, 0), s = !0;
    }
    let u = this.view.observer.selectionRange;
    (s || !u.focusNode || !Es(a.node, a.offset, u.anchorNode, u.anchorOffset) || !Es(c.node, c.offset, u.focusNode, u.focusOffset)) && (this.view.observer.ignore(() => {
      P.android && P.chrome && this.dom.contains(u.focusNode) && uoe(u.focusNode, this.dom) && (this.dom.blur(), this.dom.focus({ preventScroll: !0 }));
      let h = Ss(this.view.root);
      if (h)
        if (l.empty) {
          if (P.gecko) {
            let f = loe(a.node, a.offset);
            if (f && f != 3) {
              let d = cy(a.node, a.offset, f == 1 ? 1 : -1);
              d && (a = new Ye(d, f == 1 ? 0 : d.nodeValue.length));
            }
          }
          h.collapse(a.node, a.offset), l.bidiLevel != null && u.caretBidiLevel != null && (u.caretBidiLevel = l.bidiLevel);
        } else if (h.extend) {
          h.collapse(a.node, a.offset);
          try {
            h.extend(c.node, c.offset);
          } catch {
          }
        } else {
          let f = document.createRange();
          l.anchor > l.head && ([a, c] = [c, a]), f.setEnd(c.node, c.offset), f.setStart(a.node, a.offset), h.removeAllRanges(), h.addRange(f);
        }
      o && this.view.root.activeElement == this.dom && (this.dom.blur(), r && r.focus());
    }), this.view.observer.setSelectionRange(a, c)), this.impreciseAnchor = a.precise ? null : new Ye(u.anchorNode, u.anchorOffset), this.impreciseHead = c.precise ? null : new Ye(u.focusNode, u.focusOffset);
  }
  enforceCursorAssoc() {
    if (this.hasComposition)
      return;
    let { view: e } = this, n = e.state.selection.main, r = Ss(e.root), { anchorNode: i, anchorOffset: o } = e.observer.selectionRange;
    if (!r || !n.empty || !n.assoc || !r.modify)
      return;
    let s = je.find(this, n.head);
    if (!s)
      return;
    let l = s.posAtStart;
    if (n.head == l || n.head == l + s.length)
      return;
    let a = this.coordsAt(n.head, -1), c = this.coordsAt(n.head, 1);
    if (!a || !c || a.bottom > c.top)
      return;
    let u = this.domAtPos(n.head + n.assoc);
    r.collapse(u.node, u.offset), r.modify("move", n.assoc < 0 ? "forward" : "backward", "lineboundary"), e.observer.readSelectionRange();
    let h = e.observer.selectionRange;
    e.docView.posFromDOM(h.anchorNode, h.anchorOffset) != n.from && r.collapse(i, o);
  }
  nearest(e) {
    for (let n = e; n; ) {
      let r = ue.get(n);
      if (r && r.rootView == this)
        return r;
      n = n.parentNode;
    }
    return null;
  }
  posFromDOM(e, n) {
    let r = this.nearest(e);
    if (!r)
      throw new RangeError("Trying to find position for a DOM position outside of the document");
    return r.localPosFromDOM(e, n) + r.posAtStart;
  }
  domAtPos(e) {
    let { i: n, off: r } = this.childCursor().findPos(e, -1);
    for (; n < this.children.length - 1; ) {
      let i = this.children[n];
      if (r < i.length || i instanceof je)
        break;
      n++, r = 0;
    }
    return this.children[n].domAtPos(r);
  }
  coordsAt(e, n) {
    for (let r = this.length, i = this.children.length - 1; ; i--) {
      let o = this.children[i], s = r - o.breakAfter - o.length;
      if (e > s || e == s && o.type != be.WidgetBefore && o.type != be.WidgetAfter && (!i || n == 2 || this.children[i - 1].breakAfter || this.children[i - 1].type == be.WidgetBefore && n > -2))
        return o.coordsAt(e - s, n);
      r = s;
    }
  }
  coordsForChar(e) {
    let { i: n, off: r } = this.childPos(e, 1), i = this.children[n];
    if (!(i instanceof je))
      return null;
    for (; i.children.length; ) {
      let { i: l, off: a } = i.childPos(r, 1);
      for (; ; l++) {
        if (l == i.children.length)
          return null;
        if ((i = i.children[l]).length)
          break;
      }
      r = a;
    }
    if (!(i instanceof Yt))
      return null;
    let o = $e(i.text, r);
    if (o == r)
      return null;
    let s = cr(i.dom, r, o).getClientRects();
    return !s.length || s[0].top >= s[0].bottom ? null : s[0];
  }
  measureVisibleLineHeights(e) {
    let n = [], { from: r, to: i } = e, o = this.view.contentDOM.clientWidth, s = o > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1, l = -1, a = this.view.textDirection == ye.LTR;
    for (let c = 0, u = 0; u < this.children.length; u++) {
      let h = this.children[u], f = c + h.length;
      if (f > i)
        break;
      if (c >= r) {
        let d = h.dom.getBoundingClientRect();
        if (n.push(d.height), s) {
          let p = h.dom.lastChild, m = p ? Gi(p) : [];
          if (m.length) {
            let g = m[m.length - 1], y = a ? g.right - d.left : d.right - g.left;
            y > l && (l = y, this.minWidth = o, this.minWidthFrom = c, this.minWidthTo = f);
          }
        }
      }
      c = f + h.breakAfter;
    }
    return n;
  }
  textDirectionAt(e) {
    let { i: n } = this.childPos(e, 1);
    return getComputedStyle(this.children[n].dom).direction == "rtl" ? ye.RTL : ye.LTR;
  }
  measureTextSize() {
    for (let o of this.children)
      if (o instanceof je) {
        let s = o.measureTextSize();
        if (s)
          return s;
      }
    let e = document.createElement("div"), n, r, i;
    return e.className = "cm-line", e.style.width = "99999px", e.style.position = "absolute", e.textContent = "abc def ghi jkl mno pqr stu", this.view.observer.ignore(() => {
      this.dom.appendChild(e);
      let o = Gi(e.firstChild)[0];
      n = e.getBoundingClientRect().height, r = o ? o.width / 27 : 7, i = o ? o.height : n, e.remove();
    }), { lineHeight: n, charWidth: r, textHeight: i };
  }
  childCursor(e = this.length) {
    let n = this.children.length;
    return n && (e -= this.children[--n].length), new N0(this.children, e, n);
  }
  computeBlockGapDeco() {
    let e = [], n = this.view.viewState;
    for (let r = 0, i = 0; ; i++) {
      let o = i == n.viewports.length ? null : n.viewports[i], s = o ? o.from - 1 : this.length;
      if (s > r) {
        let l = n.lineBlockAt(s).bottom - n.lineBlockAt(r).top;
        e.push(V.replace({
          widget: new Wd(l),
          block: !0,
          inclusive: !0,
          isBlockGap: !0
        }).range(r, s));
      }
      if (!o)
        break;
      r = o.to + 1;
    }
    return V.set(e);
  }
  updateDeco() {
    let e = this.view.state.facet(Ki).map((n, r) => (this.dynamicDecorationMap[r] = typeof n == "function") ? n(this.view) : n);
    for (let n = e.length; n < e.length + 3; n++)
      this.dynamicDecorationMap[n] = !1;
    return this.decorations = [
      ...e,
      this.computeBlockGapDeco(),
      this.view.viewState.lineGapDeco
    ];
  }
  scrollIntoView(e) {
    let { range: n } = e, r = this.coordsAt(n.head, n.empty ? n.assoc : n.head > n.anchor ? -1 : 1), i;
    if (!r)
      return;
    !n.empty && (i = this.coordsAt(n.anchor, n.anchor > n.head ? -1 : 1)) && (r = {
      left: Math.min(r.left, i.left),
      top: Math.min(r.top, i.top),
      right: Math.max(r.right, i.right),
      bottom: Math.max(r.bottom, i.bottom)
    });
    let o = ny(this.view), s = {
      left: r.left - o.left,
      top: r.top - o.top,
      right: r.right + o.right,
      bottom: r.bottom + o.bottom
    };
    qie(this.view.scrollDOM, s, n.head < n.anchor ? -1 : 1, e.x, e.y, e.xMargin, e.yMargin, this.view.textDirection == ye.LTR);
  }
}
function ooe(t) {
  return t.node.nodeType == 1 && t.node.firstChild && (t.offset == 0 || t.node.childNodes[t.offset - 1].contentEditable == "false") && (t.offset == t.node.childNodes.length || t.node.childNodes[t.offset].contentEditable == "false");
}
class Wd extends qn {
  constructor(e) {
    super(), this.height = e;
  }
  toDOM() {
    let e = document.createElement("div");
    return this.updateDOM(e), e;
  }
  eq(e) {
    return e.height == this.height;
  }
  updateDOM(e) {
    return e.style.height = this.height + "px", !0;
  }
  get estimatedHeight() {
    return this.height;
  }
}
function ay(t) {
  let e = t.observer.selectionRange, n = e.focusNode && cy(e.focusNode, e.focusOffset, 0);
  if (!n)
    return null;
  let r = ue.get(n), i, o;
  if (r instanceof Yt)
    i = r.posAtStart, o = i + r.length;
  else {
    e:
      for (let s = 0, l = n; ; ) {
        for (let c = l.previousSibling, u; c; c = c.previousSibling) {
          if (u = ue.get(c)) {
            i = o = u.posAtEnd + s;
            break e;
          }
          let h = new F0([], t.state);
          if (h.readNode(c), h.text.indexOf(Dr) > -1)
            return null;
          s += h.text.length;
        }
        if (l = l.parentNode, !l)
          return null;
        let a = ue.get(l);
        if (a) {
          i = o = a.posAtStart + s;
          break;
        }
      }
  }
  return { from: i, to: o, node: n };
}
function soe(t, e) {
  let n = ay(t);
  if (!n)
    return null;
  let { from: r, to: i, node: o } = n, s = e.mapPos(r, -1), l = e.mapPos(i, 1), a = o.nodeValue;
  if (/[\n\r]/.test(a))
    return null;
  if (l - s != a.length) {
    let f = e.mapPos(r, 1), d = e.mapPos(i, -1);
    if (d - f == a.length)
      s = f, l = d;
    else if (t.state.doc.sliceString(l - a.length, l) == a)
      s = l - a.length;
    else if (t.state.doc.sliceString(s, s + a.length) == a)
      l = s + a.length;
    else
      return null;
  }
  let { main: c } = t.state.selection;
  if (t.state.doc.sliceString(s, l) != a || s > c.head || l < c.head)
    return null;
  let u = [], h = new mt(r, i, s, l);
  for (let f = o.parentNode; ; f = f.parentNode) {
    let d = ue.get(f);
    if (d instanceof un)
      u.push({ node: f, deco: d.mark });
    else {
      if (d instanceof je || f.nodeName == "DIV" && f.parentNode == t.contentDOM)
        return { range: h, text: o, marks: u, line: f };
      if (f != t.contentDOM)
        u.push({ node: f, deco: new so({
          inclusive: !0,
          attributes: Gie(f),
          tagName: f.tagName.toLowerCase()
        }) });
      else
        return null;
    }
  }
}
function cy(t, e, n) {
  if (n <= 0)
    for (let r = t, i = e; ; ) {
      if (r.nodeType == 3)
        return r;
      if (r.nodeType == 1 && i > 0)
        r = r.childNodes[i - 1], i = Nn(r);
      else
        break;
    }
  if (n >= 0)
    for (let r = t, i = e; ; ) {
      if (r.nodeType == 3)
        return r;
      if (r.nodeType == 1 && i < r.childNodes.length && n >= 0)
        r = r.childNodes[i], i = 0;
      else
        break;
    }
  return null;
}
function loe(t, e) {
  return t.nodeType != 1 ? 0 : (e && t.childNodes[e - 1].contentEditable == "false" ? 1 : 0) | (e < t.childNodes.length && t.childNodes[e].contentEditable == "false" ? 2 : 0);
}
let aoe = class {
  constructor() {
    this.changes = [];
  }
  compareRange(e, n) {
    Lc(e, n, this.changes);
  }
  comparePoint(e, n) {
    Lc(e, n, this.changes);
  }
};
function coe(t, e, n) {
  let r = new aoe();
  return te.compare(t, e, n, r), r.changes;
}
function uoe(t, e) {
  for (let n = t; n && n != e; n = n.assignedSlot || n.parentNode)
    if (n.nodeType == 1 && n.contentEditable == "false")
      return !0;
  return !1;
}
function hoe(t, e, n = 1) {
  let r = t.charCategorizer(e), i = t.doc.lineAt(e), o = e - i.from;
  if (i.length == 0)
    return A.cursor(e);
  o == 0 ? n = 1 : o == i.length && (n = -1);
  let s = o, l = o;
  n < 0 ? s = $e(i.text, o, !1) : l = $e(i.text, o);
  let a = r(i.text.slice(s, l));
  for (; s > 0; ) {
    let c = $e(i.text, s, !1);
    if (r(i.text.slice(c, s)) != a)
      break;
    s = c;
  }
  for (; l < i.length; ) {
    let c = $e(i.text, l);
    if (r(i.text.slice(l, c)) != a)
      break;
    l = c;
  }
  return A.range(s + i.from, l + i.from);
}
function foe(t, e) {
  return e.left > t ? e.left - t : Math.max(0, t - e.right);
}
function doe(t, e) {
  return e.top > t ? e.top - t : Math.max(0, t - e.bottom);
}
function _a(t, e) {
  return t.top < e.bottom - 1 && t.bottom > e.top + 1;
}
function jd(t, e) {
  return e < t.top ? { top: e, left: t.left, right: t.right, bottom: t.bottom } : t;
}
function Gd(t, e) {
  return e > t.bottom ? { top: t.top, left: t.left, right: t.right, bottom: e } : t;
}
function Fc(t, e, n) {
  let r, i, o, s, l = !1, a, c, u, h;
  for (let p = t.firstChild; p; p = p.nextSibling) {
    let m = Gi(p);
    for (let g = 0; g < m.length; g++) {
      let y = m[g];
      i && _a(i, y) && (y = jd(Gd(y, i.bottom), i.top));
      let b = foe(e, y), k = doe(n, y);
      if (b == 0 && k == 0)
        return p.nodeType == 3 ? Kd(p, e, n) : Fc(p, e, n);
      if (!r || s > k || s == k && o > b) {
        r = p, i = y, o = b, s = k;
        let x = k ? n < y.top ? -1 : 1 : b ? e < y.left ? -1 : 1 : 0;
        l = !x || (x > 0 ? g < m.length - 1 : g > 0);
      }
      b == 0 ? n > y.bottom && (!u || u.bottom < y.bottom) ? (a = p, u = y) : n < y.top && (!h || h.top > y.top) && (c = p, h = y) : u && _a(u, y) ? u = Gd(u, y.bottom) : h && _a(h, y) && (h = jd(h, y.top));
    }
  }
  if (u && u.bottom >= n ? (r = a, i = u) : h && h.top <= n && (r = c, i = h), !r)
    return { node: t, offset: 0 };
  let f = Math.max(i.left, Math.min(i.right, e));
  if (r.nodeType == 3)
    return Kd(r, f, n);
  if (l && r.contentEditable != "false")
    return Fc(r, f, n);
  let d = Array.prototype.indexOf.call(t.childNodes, r) + (e >= (i.left + i.right) / 2 ? 1 : 0);
  return { node: t, offset: d };
}
function Kd(t, e, n) {
  let r = t.nodeValue.length, i = -1, o = 1e9, s = 0;
  for (let l = 0; l < r; l++) {
    let a = cr(t, l, l + 1).getClientRects();
    for (let c = 0; c < a.length; c++) {
      let u = a[c];
      if (u.top == u.bottom)
        continue;
      s || (s = e - u.left);
      let h = (u.top > n ? u.top - n : n - u.bottom) - 1;
      if (u.left - 1 <= e && u.right + 1 >= e && h < o) {
        let f = e >= (u.left + u.right) / 2, d = f;
        if ((P.chrome || P.gecko) && cr(t, l).getBoundingClientRect().left == u.right && (d = !f), h <= 0)
          return { node: t, offset: l + (d ? 1 : 0) };
        i = l + (d ? 1 : 0), o = h;
      }
    }
  }
  return { node: t, offset: i > -1 ? i : s > 0 ? t.nodeValue.length : 0 };
}
function uy(t, e, n, r = -1) {
  var i, o;
  let s = t.contentDOM.getBoundingClientRect(), l = s.top + t.viewState.paddingTop, a, { docHeight: c } = t.viewState, { x: u, y: h } = e, f = h - l;
  if (f < 0)
    return 0;
  if (f > c)
    return t.state.doc.length;
  for (let x = t.viewState.heightOracle.textHeight / 2, w = !1; a = t.elementAtHeight(f), a.type != be.Text; )
    for (; f = r > 0 ? a.bottom + x : a.top - x, !(f >= 0 && f <= c); ) {
      if (w)
        return n ? null : 0;
      w = !0, r = -r;
    }
  h = l + f;
  let d = a.from;
  if (d < t.viewport.from)
    return t.viewport.from == 0 ? 0 : n ? null : Yd(t, s, a, u, h);
  if (d > t.viewport.to)
    return t.viewport.to == t.state.doc.length ? t.state.doc.length : n ? null : Yd(t, s, a, u, h);
  let p = t.dom.ownerDocument, m = t.root.elementFromPoint ? t.root : p, g = m.elementFromPoint(u, h);
  g && !t.contentDOM.contains(g) && (g = null), g || (u = Math.max(s.left + 1, Math.min(s.right - 1, u)), g = m.elementFromPoint(u, h), g && !t.contentDOM.contains(g) && (g = null));
  let y, b = -1;
  if (g && ((i = t.docView.nearest(g)) === null || i === void 0 ? void 0 : i.isEditable) != !1) {
    if (p.caretPositionFromPoint) {
      let x = p.caretPositionFromPoint(u, h);
      x && ({ offsetNode: y, offset: b } = x);
    } else if (p.caretRangeFromPoint) {
      let x = p.caretRangeFromPoint(u, h);
      x && ({ startContainer: y, startOffset: b } = x, (!t.contentDOM.contains(y) || P.safari && poe(y, b, u) || P.chrome && moe(y, b, u)) && (y = void 0));
    }
  }
  if (!y || !t.docView.dom.contains(y)) {
    let x = je.find(t.docView, d);
    if (!x)
      return f > a.top + a.height / 2 ? a.to : a.from;
    ({ node: y, offset: b } = Fc(x.dom, u, h));
  }
  let k = t.docView.nearest(y);
  if (!k)
    return null;
  if (k.isWidget && ((o = k.dom) === null || o === void 0 ? void 0 : o.nodeType) == 1) {
    let x = k.dom.getBoundingClientRect();
    return e.y < x.top || e.y <= x.bottom && e.x <= (x.left + x.right) / 2 ? k.posAtStart : k.posAtEnd;
  } else
    return k.localPosFromDOM(y, b) + k.posAtStart;
}
function Yd(t, e, n, r, i) {
  let o = Math.round((r - e.left) * t.defaultCharacterWidth);
  if (t.lineWrapping && n.height > t.defaultLineHeight * 1.5) {
    let l = t.viewState.heightOracle.textHeight, a = Math.floor((i - n.top - (t.defaultLineHeight - l) * 0.5) / l);
    o += a * t.viewState.heightOracle.lineLength;
  }
  let s = t.state.sliceDoc(n.from, n.to);
  return n.from + Cc(s, o, t.state.tabSize);
}
function poe(t, e, n) {
  let r;
  if (t.nodeType != 3 || e != (r = t.nodeValue.length))
    return !1;
  for (let i = t.nextSibling; i; i = i.nextSibling)
    if (i.nodeType != 1 || i.nodeName != "BR")
      return !1;
  return cr(t, r - 1, r).getBoundingClientRect().left > n;
}
function moe(t, e, n) {
  if (e != 0)
    return !1;
  for (let i = t; ; ) {
    let o = i.parentNode;
    if (!o || o.nodeType != 1 || o.firstChild != i)
      return !1;
    if (o.classList.contains("cm-line"))
      break;
    i = o;
  }
  let r = t.nodeType == 1 ? t.getBoundingClientRect() : cr(t, 0, Math.max(t.nodeValue.length, 1)).getBoundingClientRect();
  return n - r.left > 5;
}
function qc(t, e) {
  let n = t.lineBlockAt(e);
  if (Array.isArray(n.type)) {
    for (let r of n.type)
      if (r.to > e || r.to == e && (r.to == n.to || r.type == be.Text))
        return r;
  }
  return n;
}
function goe(t, e, n, r) {
  let i = qc(t, e.head), o = !r || i.type != be.Text || !(t.lineWrapping || i.widgetLineBreaks) ? null : t.coordsAtPos(e.assoc < 0 && e.head > i.from ? e.head - 1 : e.head);
  if (o) {
    let s = t.dom.getBoundingClientRect(), l = t.textDirectionAt(i.from), a = t.posAtCoords({
      x: n == (l == ye.LTR) ? s.right - 1 : s.left + 1,
      y: (o.top + o.bottom) / 2
    });
    if (a != null)
      return A.cursor(a, n ? -1 : 1);
  }
  return A.cursor(n ? i.to : i.from, n ? -1 : 1);
}
function Zd(t, e, n, r) {
  let i = t.state.doc.lineAt(e.head), o = t.bidiSpans(i), s = t.textDirectionAt(i.from);
  for (let l = e, a = null; ; ) {
    let c = ioe(i, o, s, l, n), u = ly;
    if (!c) {
      if (i.number == (n ? t.state.doc.lines : 1))
        return l;
      u = `
`, i = t.state.doc.line(i.number + (n ? 1 : -1)), o = t.bidiSpans(i), c = A.cursor(n ? i.from : i.to);
    }
    if (a) {
      if (!a(u))
        return l;
    } else {
      if (!r)
        return c;
      a = r(u);
    }
    l = c;
  }
}
function yoe(t, e, n) {
  let r = t.state.charCategorizer(e), i = r(n);
  return (o) => {
    let s = r(o);
    return i == ge.Space && (i = s), i == s;
  };
}
function boe(t, e, n, r) {
  let i = e.head, o = n ? 1 : -1;
  if (i == (n ? t.state.doc.length : 0))
    return A.cursor(i, e.assoc);
  let s = e.goalColumn, l, a = t.contentDOM.getBoundingClientRect(), c = t.coordsAtPos(i), u = t.documentTop;
  if (c)
    s == null && (s = c.left - a.left), l = o < 0 ? c.top : c.bottom;
  else {
    let d = t.viewState.lineBlockAt(i);
    s == null && (s = Math.min(a.right - a.left, t.defaultCharacterWidth * (i - d.from))), l = (o < 0 ? d.top : d.bottom) + u;
  }
  let h = a.left + s, f = r != null ? r : t.viewState.heightOracle.textHeight >> 1;
  for (let d = 0; ; d += 10) {
    let p = l + (f + d) * o, m = uy(t, { x: h, y: p }, !1, o);
    if (p < a.top || p > a.bottom || (o < 0 ? m < i : m > i))
      return A.cursor(m, e.assoc, void 0, s);
  }
}
function os(t, e, n) {
  for (; ; ) {
    let r = 0;
    for (let i of t)
      i.between(e - 1, e + 1, (o, s, l) => {
        if (e > o && e < s) {
          let a = r || n || (e - o < s - e ? -1 : 1);
          e = a < 0 ? o : s, r = a;
        }
      });
    if (!r)
      return e;
  }
}
function ka(t, e, n) {
  let r = os(t.state.facet(Wu).map((i) => i(t)), n.from, e.head > n.from ? -1 : 1);
  return r == n.from ? n : A.cursor(r, r < n.from ? 1 : -1);
}
class voe {
  setSelectionOrigin(e) {
    this.lastSelectionOrigin = e, this.lastSelectionTime = Date.now();
  }
  constructor(e) {
    this.lastKeyCode = 0, this.lastKeyTime = 0, this.lastTouchTime = 0, this.lastFocusTime = 0, this.lastScrollTop = 0, this.lastScrollLeft = 0, this.chromeScrollHack = -1, this.pendingIOSKey = void 0, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastEscPress = 0, this.lastContextMenu = 0, this.scrollHandlers = [], this.registeredEvents = [], this.customHandlers = [], this.composing = -1, this.compositionFirstChange = null, this.compositionEndedAt = 0, this.compositionPendingKey = !1, this.compositionPendingChange = !1, this.mouseSelection = null;
    let n = (r, i) => {
      this.ignoreDuringComposition(i) || i.type == "keydown" && this.keydown(e, i) || (this.mustFlushObserver(i) && e.observer.forceFlush(), this.runCustomHandlers(i.type, e, i) ? i.preventDefault() : r(e, i));
    };
    for (let r in we) {
      let i = we[r];
      e.contentDOM.addEventListener(r, (o) => {
        Jd(e, o) && n(i, o);
      }, $c[r]), this.registeredEvents.push(r);
    }
    e.scrollDOM.addEventListener("mousedown", (r) => {
      if (r.target == e.scrollDOM && r.clientY > e.contentDOM.getBoundingClientRect().bottom && (n(we.mousedown, r), !r.defaultPrevented && r.button == 2)) {
        let i = e.contentDOM.style.minHeight;
        e.contentDOM.style.minHeight = "100%", setTimeout(() => e.contentDOM.style.minHeight = i, 200);
      }
    }), e.scrollDOM.addEventListener("drop", (r) => {
      r.target == e.scrollDOM && r.clientY > e.contentDOM.getBoundingClientRect().bottom && n(we.drop, r);
    }), P.chrome && P.chrome_version == 102 && e.scrollDOM.addEventListener("wheel", () => {
      this.chromeScrollHack < 0 ? e.contentDOM.style.pointerEvents = "none" : window.clearTimeout(this.chromeScrollHack), this.chromeScrollHack = setTimeout(() => {
        this.chromeScrollHack = -1, e.contentDOM.style.pointerEvents = "";
      }, 100);
    }, { passive: !0 }), this.notifiedFocused = e.hasFocus, P.safari && e.contentDOM.addEventListener("input", () => null);
  }
  ensureHandlers(e, n) {
    var r;
    let i;
    this.customHandlers = [];
    for (let o of n)
      if (i = (r = o.update(e).spec) === null || r === void 0 ? void 0 : r.domEventHandlers) {
        this.customHandlers.push({ plugin: o.value, handlers: i });
        for (let s in i)
          this.registeredEvents.indexOf(s) < 0 && s != "scroll" && (this.registeredEvents.push(s), e.contentDOM.addEventListener(s, (l) => {
            !Jd(e, l) || this.runCustomHandlers(s, e, l) && l.preventDefault();
          }));
      }
  }
  runCustomHandlers(e, n, r) {
    for (let i of this.customHandlers) {
      let o = i.handlers[e];
      if (o)
        try {
          if (o.call(i.plugin, r, n) || r.defaultPrevented)
            return !0;
        } catch (s) {
          pt(n.state, s);
        }
    }
    return !1;
  }
  runScrollHandlers(e, n) {
    this.lastScrollTop = e.scrollDOM.scrollTop, this.lastScrollLeft = e.scrollDOM.scrollLeft;
    for (let r of this.customHandlers) {
      let i = r.handlers.scroll;
      if (i)
        try {
          i.call(r.plugin, n, e);
        } catch (o) {
          pt(e.state, o);
        }
    }
  }
  keydown(e, n) {
    if (this.lastKeyCode = n.keyCode, this.lastKeyTime = Date.now(), n.keyCode == 9 && Date.now() < this.lastEscPress + 2e3)
      return !0;
    if (n.keyCode != 27 && fy.indexOf(n.keyCode) < 0 && (e.inputState.lastEscPress = 0), P.android && P.chrome && !n.synthetic && (n.keyCode == 13 || n.keyCode == 8))
      return e.observer.delayAndroidKey(n.key, n.keyCode), !0;
    let r;
    return P.ios && !n.synthetic && !n.altKey && !n.metaKey && ((r = hy.find((i) => i.keyCode == n.keyCode)) && !n.ctrlKey || xoe.indexOf(n.key) > -1 && n.ctrlKey && !n.shiftKey) ? (this.pendingIOSKey = r || n, setTimeout(() => this.flushIOSKey(e), 250), !0) : !1;
  }
  flushIOSKey(e) {
    let n = this.pendingIOSKey;
    return n ? (this.pendingIOSKey = void 0, Pr(e.contentDOM, n.key, n.keyCode)) : !1;
  }
  ignoreDuringComposition(e) {
    return /^key/.test(e.type) ? this.composing > 0 ? !0 : P.safari && !P.ios && this.compositionPendingKey && Date.now() - this.compositionEndedAt < 100 ? (this.compositionPendingKey = !1, !0) : !1 : !1;
  }
  mustFlushObserver(e) {
    return e.type == "keydown" && e.keyCode != 229;
  }
  startMouseSelection(e) {
    this.mouseSelection && this.mouseSelection.destroy(), this.mouseSelection = e;
  }
  update(e) {
    this.mouseSelection && this.mouseSelection.update(e), e.transactions.length && (this.lastKeyCode = this.lastSelectionTime = 0);
  }
  destroy() {
    this.mouseSelection && this.mouseSelection.destroy();
  }
}
const hy = [
  { key: "Backspace", keyCode: 8, inputType: "deleteContentBackward" },
  { key: "Enter", keyCode: 13, inputType: "insertParagraph" },
  { key: "Enter", keyCode: 13, inputType: "insertLineBreak" },
  { key: "Delete", keyCode: 46, inputType: "deleteContentForward" }
], xoe = "dthko", fy = [16, 17, 18, 20, 91, 92, 224, 225], Do = 6;
function Mo(t) {
  return Math.max(0, t) * 0.7 + 8;
}
function _oe(t, e) {
  return Math.max(Math.abs(t.clientX - e.clientX), Math.abs(t.clientY - e.clientY));
}
class koe {
  constructor(e, n, r, i) {
    this.view = e, this.startEvent = n, this.style = r, this.mustSelect = i, this.scrollSpeed = { x: 0, y: 0 }, this.scrolling = -1, this.lastEvent = n, this.scrollParent = $ie(e.contentDOM), this.atoms = e.state.facet(Wu).map((s) => s(e));
    let o = e.contentDOM.ownerDocument;
    o.addEventListener("mousemove", this.move = this.move.bind(this)), o.addEventListener("mouseup", this.up = this.up.bind(this)), this.extend = n.shiftKey, this.multiple = e.state.facet(Y.allowMultipleSelections) && woe(e, n), this.dragging = Aoe(e, n) && gy(n) == 1 ? null : !1;
  }
  start(e) {
    this.dragging === !1 && (e.preventDefault(), this.select(e));
  }
  move(e) {
    var n;
    if (e.buttons == 0)
      return this.destroy();
    if (this.dragging || this.dragging == null && _oe(this.startEvent, e) < 10)
      return;
    this.select(this.lastEvent = e);
    let r = 0, i = 0, o = ((n = this.scrollParent) === null || n === void 0 ? void 0 : n.getBoundingClientRect()) || { left: 0, top: 0, right: this.view.win.innerWidth, bottom: this.view.win.innerHeight }, s = ny(this.view);
    e.clientX - s.left <= o.left + Do ? r = -Mo(o.left - e.clientX) : e.clientX + s.right >= o.right - Do && (r = Mo(e.clientX - o.right)), e.clientY - s.top <= o.top + Do ? i = -Mo(o.top - e.clientY) : e.clientY + s.bottom >= o.bottom - Do && (i = Mo(e.clientY - o.bottom)), this.setScrollSpeed(r, i);
  }
  up(e) {
    this.dragging == null && this.select(this.lastEvent), this.dragging || e.preventDefault(), this.destroy();
  }
  destroy() {
    this.setScrollSpeed(0, 0);
    let e = this.view.contentDOM.ownerDocument;
    e.removeEventListener("mousemove", this.move), e.removeEventListener("mouseup", this.up), this.view.inputState.mouseSelection = null;
  }
  setScrollSpeed(e, n) {
    this.scrollSpeed = { x: e, y: n }, e || n ? this.scrolling < 0 && (this.scrolling = setInterval(() => this.scroll(), 50)) : this.scrolling > -1 && (clearInterval(this.scrolling), this.scrolling = -1);
  }
  scroll() {
    this.scrollParent ? (this.scrollParent.scrollLeft += this.scrollSpeed.x, this.scrollParent.scrollTop += this.scrollSpeed.y) : this.view.win.scrollBy(this.scrollSpeed.x, this.scrollSpeed.y), this.dragging === !1 && this.select(this.lastEvent);
  }
  skipAtoms(e) {
    let n = null;
    for (let r = 0; r < e.ranges.length; r++) {
      let i = e.ranges[r], o = null;
      if (i.empty) {
        let s = os(this.atoms, i.from, 0);
        s != i.from && (o = A.cursor(s, -1));
      } else {
        let s = os(this.atoms, i.from, -1), l = os(this.atoms, i.to, 1);
        (s != i.from || l != i.to) && (o = A.range(i.from == i.anchor ? s : l, i.from == i.head ? s : l));
      }
      o && (n || (n = e.ranges.slice()), n[r] = o);
    }
    return n ? A.create(n, e.mainIndex) : e;
  }
  select(e) {
    let { view: n } = this, r = this.skipAtoms(this.style.get(e, this.extend, this.multiple));
    (this.mustSelect || !r.eq(n.state.selection) || r.main.assoc != n.state.selection.main.assoc && this.dragging === !1) && this.view.dispatch({
      selection: r,
      userEvent: "select.pointer"
    }), this.mustSelect = !1;
  }
  update(e) {
    e.docChanged && this.dragging && (this.dragging = this.dragging.map(e.changes)), this.style.update(e) && setTimeout(() => this.select(this.lastEvent), 20);
  }
}
function woe(t, e) {
  let n = t.state.facet(W0);
  return n.length ? n[0](e) : P.mac ? e.metaKey : e.ctrlKey;
}
function Coe(t, e) {
  let n = t.state.facet(j0);
  return n.length ? n[0](e) : P.mac ? !e.altKey : !e.ctrlKey;
}
function Aoe(t, e) {
  let { main: n } = t.state.selection;
  if (n.empty)
    return !1;
  let r = Ss(t.root);
  if (!r || r.rangeCount == 0)
    return !0;
  let i = r.getRangeAt(0).getClientRects();
  for (let o = 0; o < i.length; o++) {
    let s = i[o];
    if (s.left <= e.clientX && s.right >= e.clientX && s.top <= e.clientY && s.bottom >= e.clientY)
      return !0;
  }
  return !1;
}
function Jd(t, e) {
  if (!e.bubbles)
    return !0;
  if (e.defaultPrevented)
    return !1;
  for (let n = e.target, r; n != t.contentDOM; n = n.parentNode)
    if (!n || n.nodeType == 11 || (r = ue.get(n)) && r.ignoreEvent(e))
      return !1;
  return !0;
}
const we = /* @__PURE__ */ Object.create(null), $c = /* @__PURE__ */ Object.create(null), dy = P.ie && P.ie_version < 15 || P.ios && P.webkit_version < 604;
function Soe(t) {
  let e = t.dom.parentNode;
  if (!e)
    return;
  let n = e.appendChild(document.createElement("textarea"));
  n.style.cssText = "position: fixed; left: -10000px; top: 10px", n.focus(), setTimeout(() => {
    t.focus(), n.remove(), py(t, n.value);
  }, 50);
}
function py(t, e) {
  let { state: n } = t, r, i = 1, o = n.toText(e), s = o.lines == n.selection.ranges.length;
  if (Hc != null && n.selection.ranges.every((a) => a.empty) && Hc == o.toString()) {
    let a = -1;
    r = n.changeByRange((c) => {
      let u = n.doc.lineAt(c.from);
      if (u.from == a)
        return { range: c };
      a = u.from;
      let h = n.toText((s ? o.line(i++).text : e) + n.lineBreak);
      return {
        changes: { from: u.from, insert: h },
        range: A.cursor(c.from + h.length)
      };
    });
  } else
    s ? r = n.changeByRange((a) => {
      let c = o.line(i++);
      return {
        changes: { from: a.from, to: a.to, insert: c.text },
        range: A.cursor(a.from + c.length)
      };
    }) : r = n.replaceSelection(o);
  t.dispatch(r, {
    userEvent: "input.paste",
    scrollIntoView: !0
  });
}
we.keydown = (t, e) => {
  t.inputState.setSelectionOrigin("select"), e.keyCode == 27 && (t.inputState.lastEscPress = Date.now());
};
we.touchstart = (t, e) => {
  t.inputState.lastTouchTime = Date.now(), t.inputState.setSelectionOrigin("select.pointer");
};
we.touchmove = (t) => {
  t.inputState.setSelectionOrigin("select.pointer");
};
$c.touchstart = $c.touchmove = { passive: !0 };
we.mousedown = (t, e) => {
  if (t.observer.flush(), t.inputState.lastTouchTime > Date.now() - 2e3)
    return;
  let n = null;
  for (let r of t.state.facet(G0))
    if (n = r(t, e), n)
      break;
  if (!n && e.button == 0 && (n = Doe(t, e)), n) {
    let r = !t.hasFocus;
    t.inputState.startMouseSelection(new koe(t, e, n, r)), r && t.observer.ignore(() => R0(t.contentDOM)), t.inputState.mouseSelection && t.inputState.mouseSelection.start(e);
  }
};
function Xd(t, e, n, r) {
  if (r == 1)
    return A.cursor(e, n);
  if (r == 2)
    return hoe(t.state, e, n);
  {
    let i = je.find(t.docView, e), o = t.state.doc.lineAt(i ? i.posAtEnd : e), s = i ? i.posAtStart : o.from, l = i ? i.posAtEnd : o.to;
    return l < t.state.doc.length && l == o.to && l++, A.range(s, l);
  }
}
let my = (t, e) => t >= e.top && t <= e.bottom, Qd = (t, e, n) => my(e, n) && t >= n.left && t <= n.right;
function Eoe(t, e, n, r) {
  let i = je.find(t.docView, e);
  if (!i)
    return 1;
  let o = e - i.posAtStart;
  if (o == 0)
    return 1;
  if (o == i.length)
    return -1;
  let s = i.coordsAt(o, -1);
  if (s && Qd(n, r, s))
    return -1;
  let l = i.coordsAt(o, 1);
  return l && Qd(n, r, l) ? 1 : s && my(r, s) ? -1 : 1;
}
function ep(t, e) {
  let n = t.posAtCoords({ x: e.clientX, y: e.clientY }, !1);
  return { pos: n, bias: Eoe(t, n, e.clientX, e.clientY) };
}
const Toe = P.ie && P.ie_version <= 11;
let tp = null, np = 0, rp = 0;
function gy(t) {
  if (!Toe)
    return t.detail;
  let e = tp, n = rp;
  return tp = t, rp = Date.now(), np = !e || n > Date.now() - 400 && Math.abs(e.clientX - t.clientX) < 2 && Math.abs(e.clientY - t.clientY) < 2 ? (np + 1) % 3 : 1;
}
function Doe(t, e) {
  let n = ep(t, e), r = gy(e), i = t.state.selection;
  return {
    update(o) {
      o.docChanged && (n.pos = o.changes.mapPos(n.pos), i = i.map(o.changes));
    },
    get(o, s, l) {
      let a = ep(t, o), c, u = Xd(t, a.pos, a.bias, r);
      if (n.pos != a.pos && !s) {
        let h = Xd(t, n.pos, n.bias, r), f = Math.min(h.from, u.from), d = Math.max(h.to, u.to);
        u = f < u.from ? A.range(f, d) : A.range(d, f);
      }
      return s ? i.replaceRange(i.main.extend(u.from, u.to)) : l && r == 1 && i.ranges.length > 1 && (c = Moe(i, a.pos)) ? c : l ? i.addRange(u) : A.create([u]);
    }
  };
}
function Moe(t, e) {
  for (let n = 0; n < t.ranges.length; n++) {
    let { from: r, to: i } = t.ranges[n];
    if (r <= e && i >= e)
      return A.create(t.ranges.slice(0, n).concat(t.ranges.slice(n + 1)), t.mainIndex == n ? 0 : t.mainIndex - (t.mainIndex > n ? 1 : 0));
  }
  return null;
}
we.dragstart = (t, e) => {
  let { selection: { main: n } } = t.state, { mouseSelection: r } = t.inputState;
  r && (r.dragging = n), e.dataTransfer && (e.dataTransfer.setData("Text", t.state.sliceDoc(n.from, n.to)), e.dataTransfer.effectAllowed = "copyMove");
};
function ip(t, e, n, r) {
  if (!n)
    return;
  let i = t.posAtCoords({ x: e.clientX, y: e.clientY }, !1);
  e.preventDefault();
  let { mouseSelection: o } = t.inputState, s = r && o && o.dragging && Coe(t, e) ? { from: o.dragging.from, to: o.dragging.to } : null, l = { from: i, insert: n }, a = t.state.changes(s ? [s, l] : l);
  t.focus(), t.dispatch({
    changes: a,
    selection: { anchor: a.mapPos(i, -1), head: a.mapPos(i, 1) },
    userEvent: s ? "move.drop" : "input.drop"
  });
}
we.drop = (t, e) => {
  if (!e.dataTransfer)
    return;
  if (t.state.readOnly)
    return e.preventDefault();
  let n = e.dataTransfer.files;
  if (n && n.length) {
    e.preventDefault();
    let r = Array(n.length), i = 0, o = () => {
      ++i == n.length && ip(t, e, r.filter((s) => s != null).join(t.state.lineBreak), !1);
    };
    for (let s = 0; s < n.length; s++) {
      let l = new FileReader();
      l.onerror = o, l.onload = () => {
        /[\x00-\x08\x0e-\x1f]{2}/.test(l.result) || (r[s] = l.result), o();
      }, l.readAsText(n[s]);
    }
  } else
    ip(t, e, e.dataTransfer.getData("Text"), !0);
};
we.paste = (t, e) => {
  if (t.state.readOnly)
    return e.preventDefault();
  t.observer.flush();
  let n = dy ? null : e.clipboardData;
  n ? (py(t, n.getData("text/plain") || n.getData("text/uri-text")), e.preventDefault()) : Soe(t);
};
function Ooe(t, e) {
  let n = t.dom.parentNode;
  if (!n)
    return;
  let r = n.appendChild(document.createElement("textarea"));
  r.style.cssText = "position: fixed; left: -10000px; top: 10px", r.value = e, r.focus(), r.selectionEnd = e.length, r.selectionStart = 0, setTimeout(() => {
    r.remove(), t.focus();
  }, 50);
}
function Roe(t) {
  let e = [], n = [], r = !1;
  for (let i of t.selection.ranges)
    i.empty || (e.push(t.sliceDoc(i.from, i.to)), n.push(i));
  if (!e.length) {
    let i = -1;
    for (let { from: o } of t.selection.ranges) {
      let s = t.doc.lineAt(o);
      s.number > i && (e.push(s.text), n.push({ from: s.from, to: Math.min(t.doc.length, s.to + 1) })), i = s.number;
    }
    r = !0;
  }
  return { text: e.join(t.lineBreak), ranges: n, linewise: r };
}
let Hc = null;
we.copy = we.cut = (t, e) => {
  let { text: n, ranges: r, linewise: i } = Roe(t.state);
  if (!n && !i)
    return;
  Hc = i ? n : null;
  let o = dy ? null : e.clipboardData;
  o ? (e.preventDefault(), o.clearData(), o.setData("text/plain", n)) : Ooe(t, n), e.type == "cut" && !t.state.readOnly && t.dispatch({
    changes: r,
    scrollIntoView: !0,
    userEvent: "delete.cut"
  });
};
const yy = /* @__PURE__ */ fn.define();
function by(t, e) {
  let n = [];
  for (let r of t.facet(Z0)) {
    let i = r(t, e);
    i && n.push(i);
  }
  return n ? t.update({ effects: n, annotations: yy.of(!0) }) : null;
}
function vy(t) {
  setTimeout(() => {
    let e = t.hasFocus;
    if (e != t.inputState.notifiedFocused) {
      let n = by(t.state, e);
      n ? t.dispatch(n) : t.update([]);
    }
  }, 10);
}
we.focus = (t) => {
  t.inputState.lastFocusTime = Date.now(), !t.scrollDOM.scrollTop && (t.inputState.lastScrollTop || t.inputState.lastScrollLeft) && (t.scrollDOM.scrollTop = t.inputState.lastScrollTop, t.scrollDOM.scrollLeft = t.inputState.lastScrollLeft), vy(t);
};
we.blur = (t) => {
  t.observer.clearSelectionRange(), vy(t);
};
we.compositionstart = we.compositionupdate = (t) => {
  t.inputState.compositionFirstChange == null && (t.inputState.compositionFirstChange = !0), t.inputState.composing < 0 && (t.inputState.composing = 0);
};
we.compositionend = (t) => {
  t.inputState.composing = -1, t.inputState.compositionEndedAt = Date.now(), t.inputState.compositionPendingKey = !0, t.inputState.compositionPendingChange = t.observer.pendingRecords().length > 0, t.inputState.compositionFirstChange = null, P.chrome && P.android ? t.observer.flushSoon() : t.inputState.compositionPendingChange ? Promise.resolve().then(() => t.observer.flush()) : setTimeout(() => {
    t.inputState.composing < 0 && t.docView.hasComposition && t.update([]);
  }, 50);
};
we.contextmenu = (t) => {
  t.inputState.lastContextMenu = Date.now();
};
we.beforeinput = (t, e) => {
  var n;
  let r;
  if (P.chrome && P.android && (r = hy.find((i) => i.inputType == e.inputType)) && (t.observer.delayAndroidKey(r.key, r.keyCode), r.key == "Backspace" || r.key == "Delete")) {
    let i = ((n = window.visualViewport) === null || n === void 0 ? void 0 : n.height) || 0;
    setTimeout(() => {
      var o;
      (((o = window.visualViewport) === null || o === void 0 ? void 0 : o.height) || 0) > i + 10 && t.hasFocus && (t.contentDOM.blur(), t.focus());
    }, 100);
  }
};
const op = ["pre-wrap", "normal", "pre-line", "break-spaces"];
class Loe {
  constructor(e) {
    this.lineWrapping = e, this.doc = J.empty, this.heightSamples = {}, this.lineHeight = 14, this.charWidth = 7, this.textHeight = 14, this.lineLength = 30, this.heightChanged = !1;
  }
  heightForGap(e, n) {
    let r = this.doc.lineAt(n).number - this.doc.lineAt(e).number + 1;
    return this.lineWrapping && (r += Math.max(0, Math.ceil((n - e - r * this.lineLength * 0.5) / this.lineLength))), this.lineHeight * r;
  }
  heightForLine(e) {
    return this.lineWrapping ? (1 + Math.max(0, Math.ceil((e - this.lineLength) / (this.lineLength - 5)))) * this.lineHeight : this.lineHeight;
  }
  setDoc(e) {
    return this.doc = e, this;
  }
  mustRefreshForWrapping(e) {
    return op.indexOf(e) > -1 != this.lineWrapping;
  }
  mustRefreshForHeights(e) {
    let n = !1;
    for (let r = 0; r < e.length; r++) {
      let i = e[r];
      i < 0 ? r++ : this.heightSamples[Math.floor(i * 10)] || (n = !0, this.heightSamples[Math.floor(i * 10)] = !0);
    }
    return n;
  }
  refresh(e, n, r, i, o, s) {
    let l = op.indexOf(e) > -1, a = Math.round(n) != Math.round(this.lineHeight) || this.lineWrapping != l;
    if (this.lineWrapping = l, this.lineHeight = n, this.charWidth = r, this.textHeight = i, this.lineLength = o, a) {
      this.heightSamples = {};
      for (let c = 0; c < s.length; c++) {
        let u = s[c];
        u < 0 ? c++ : this.heightSamples[Math.floor(u * 10)] = !0;
      }
    }
    return a;
  }
}
class Ioe {
  constructor(e, n) {
    this.from = e, this.heights = n, this.index = 0;
  }
  get more() {
    return this.index < this.heights.length;
  }
}
class $t {
  constructor(e, n, r, i, o) {
    this.from = e, this.length = n, this.top = r, this.height = i, this._content = o;
  }
  get type() {
    return typeof this._content == "number" ? be.Text : Array.isArray(this._content) ? this._content : this._content.type;
  }
  get to() {
    return this.from + this.length;
  }
  get bottom() {
    return this.top + this.height;
  }
  get widget() {
    return this._content instanceof Pn ? this._content.widget : null;
  }
  get widgetLineBreaks() {
    return typeof this._content == "number" ? this._content : 0;
  }
  join(e) {
    let n = (Array.isArray(this._content) ? this._content : [this]).concat(Array.isArray(e._content) ? e._content : [e]);
    return new $t(this.from, this.length + e.length, this.top, this.height + e.height, n);
  }
}
var de = /* @__PURE__ */ function(t) {
  return t[t.ByPos = 0] = "ByPos", t[t.ByHeight = 1] = "ByHeight", t[t.ByPosNoHeight = 2] = "ByPosNoHeight", t;
}(de || (de = {}));
const ss = 1e-3;
class Ze {
  constructor(e, n, r = 2) {
    this.length = e, this.height = n, this.flags = r;
  }
  get outdated() {
    return (this.flags & 2) > 0;
  }
  set outdated(e) {
    this.flags = (e ? 2 : 0) | this.flags & -3;
  }
  setHeight(e, n) {
    this.height != n && (Math.abs(this.height - n) > ss && (e.heightChanged = !0), this.height = n);
  }
  replace(e, n, r) {
    return Ze.of(r);
  }
  decomposeLeft(e, n) {
    n.push(this);
  }
  decomposeRight(e, n) {
    n.push(this);
  }
  applyChanges(e, n, r, i) {
    let o = this, s = r.doc;
    for (let l = i.length - 1; l >= 0; l--) {
      let { fromA: a, toA: c, fromB: u, toB: h } = i[l], f = o.lineAt(a, de.ByPosNoHeight, r.setDoc(n), 0, 0), d = f.to >= c ? f : o.lineAt(c, de.ByPosNoHeight, r, 0, 0);
      for (h += d.to - c, c = d.to; l > 0 && f.from <= i[l - 1].toA; )
        a = i[l - 1].fromA, u = i[l - 1].fromB, l--, a < f.from && (f = o.lineAt(a, de.ByPosNoHeight, r, 0, 0));
      u += f.from - a, a = f.from;
      let p = ju.build(r.setDoc(s), e, u, h);
      o = o.replace(a, c, p);
    }
    return o.updateHeight(r, 0);
  }
  static empty() {
    return new ot(0, 0);
  }
  static of(e) {
    if (e.length == 1)
      return e[0];
    let n = 0, r = e.length, i = 0, o = 0;
    for (; ; )
      if (n == r)
        if (i > o * 2) {
          let l = e[n - 1];
          l.break ? e.splice(--n, 1, l.left, null, l.right) : e.splice(--n, 1, l.left, l.right), r += 1 + l.break, i -= l.size;
        } else if (o > i * 2) {
          let l = e[r];
          l.break ? e.splice(r, 1, l.left, null, l.right) : e.splice(r, 1, l.left, l.right), r += 2 + l.break, o -= l.size;
        } else
          break;
      else if (i < o) {
        let l = e[n++];
        l && (i += l.size);
      } else {
        let l = e[--r];
        l && (o += l.size);
      }
    let s = 0;
    return e[n - 1] == null ? (s = 1, n--) : e[n] == null && (s = 1, r++), new Noe(Ze.of(e.slice(0, n)), s, Ze.of(e.slice(r)));
  }
}
Ze.prototype.size = 1;
class xy extends Ze {
  constructor(e, n, r) {
    super(e, n), this.deco = r;
  }
  blockAt(e, n, r, i) {
    return new $t(i, this.length, r, this.height, this.deco || 0);
  }
  lineAt(e, n, r, i, o) {
    return this.blockAt(0, r, i, o);
  }
  forEachLine(e, n, r, i, o, s) {
    e <= o + this.length && n >= o && s(this.blockAt(0, r, i, o));
  }
  updateHeight(e, n = 0, r = !1, i) {
    return i && i.from <= n && i.more && this.setHeight(e, i.heights[i.index++]), this.outdated = !1, this;
  }
  toString() {
    return `block(${this.length})`;
  }
}
class ot extends xy {
  constructor(e, n) {
    super(e, n, null), this.collapsed = 0, this.widgetHeight = 0, this.breaks = 0;
  }
  blockAt(e, n, r, i) {
    return new $t(i, this.length, r, this.height, this.breaks);
  }
  replace(e, n, r) {
    let i = r[0];
    return r.length == 1 && (i instanceof ot || i instanceof Re && i.flags & 4) && Math.abs(this.length - i.length) < 10 ? (i instanceof Re ? i = new ot(i.length, this.height) : i.height = this.height, this.outdated || (i.outdated = !1), i) : Ze.of(r);
  }
  updateHeight(e, n = 0, r = !1, i) {
    return i && i.from <= n && i.more ? this.setHeight(e, i.heights[i.index++]) : (r || this.outdated) && this.setHeight(e, Math.max(this.widgetHeight, e.heightForLine(this.length - this.collapsed)) + this.breaks * e.lineHeight), this.outdated = !1, this;
  }
  toString() {
    return `line(${this.length}${this.collapsed ? -this.collapsed : ""}${this.widgetHeight ? ":" + this.widgetHeight : ""})`;
  }
}
class Re extends Ze {
  constructor(e) {
    super(e, 0);
  }
  heightMetrics(e, n) {
    let r = e.doc.lineAt(n).number, i = e.doc.lineAt(n + this.length).number, o = i - r + 1, s, l = 0;
    if (e.lineWrapping) {
      let a = Math.min(this.height, e.lineHeight * o);
      s = a / o, this.length > o + 1 && (l = (this.height - a) / (this.length - o - 1));
    } else
      s = this.height / o;
    return { firstLine: r, lastLine: i, perLine: s, perChar: l };
  }
  blockAt(e, n, r, i) {
    let { firstLine: o, lastLine: s, perLine: l, perChar: a } = this.heightMetrics(n, i);
    if (n.lineWrapping) {
      let c = i + Math.round(Math.max(0, Math.min(1, (e - r) / this.height)) * this.length), u = n.doc.lineAt(c), h = l + u.length * a, f = Math.max(r, e - h / 2);
      return new $t(u.from, u.length, f, h, 0);
    } else {
      let c = Math.max(0, Math.min(s - o, Math.floor((e - r) / l))), { from: u, length: h } = n.doc.line(o + c);
      return new $t(u, h, r + l * c, l, 0);
    }
  }
  lineAt(e, n, r, i, o) {
    if (n == de.ByHeight)
      return this.blockAt(e, r, i, o);
    if (n == de.ByPosNoHeight) {
      let { from: d, to: p } = r.doc.lineAt(e);
      return new $t(d, p - d, 0, 0, 0);
    }
    let { firstLine: s, perLine: l, perChar: a } = this.heightMetrics(r, o), c = r.doc.lineAt(e), u = l + c.length * a, h = c.number - s, f = i + l * h + a * (c.from - o - h);
    return new $t(c.from, c.length, Math.max(i, Math.min(f, i + this.height - u)), u, 0);
  }
  forEachLine(e, n, r, i, o, s) {
    e = Math.max(e, o), n = Math.min(n, o + this.length);
    let { firstLine: l, perLine: a, perChar: c } = this.heightMetrics(r, o);
    for (let u = e, h = i; u <= n; ) {
      let f = r.doc.lineAt(u);
      if (u == e) {
        let p = f.number - l;
        h += a * p + c * (e - o - p);
      }
      let d = a + c * f.length;
      s(new $t(f.from, f.length, h, d, 0)), h += d, u = f.to + 1;
    }
  }
  replace(e, n, r) {
    let i = this.length - n;
    if (i > 0) {
      let o = r[r.length - 1];
      o instanceof Re ? r[r.length - 1] = new Re(o.length + i) : r.push(null, new Re(i - 1));
    }
    if (e > 0) {
      let o = r[0];
      o instanceof Re ? r[0] = new Re(e + o.length) : r.unshift(new Re(e - 1), null);
    }
    return Ze.of(r);
  }
  decomposeLeft(e, n) {
    n.push(new Re(e - 1), null);
  }
  decomposeRight(e, n) {
    n.push(null, new Re(this.length - e - 1));
  }
  updateHeight(e, n = 0, r = !1, i) {
    let o = n + this.length;
    if (i && i.from <= n + this.length && i.more) {
      let s = [], l = Math.max(n, i.from), a = -1;
      for (i.from > n && s.push(new Re(i.from - n - 1).updateHeight(e, n)); l <= o && i.more; ) {
        let u = e.doc.lineAt(l).length;
        s.length && s.push(null);
        let h = i.heights[i.index++];
        a == -1 ? a = h : Math.abs(h - a) >= ss && (a = -2);
        let f = new ot(u, h);
        f.outdated = !1, s.push(f), l += u + 1;
      }
      l <= o && s.push(null, new Re(o - l).updateHeight(e, l));
      let c = Ze.of(s);
      return (a < 0 || Math.abs(c.height - this.height) >= ss || Math.abs(a - this.heightMetrics(e, n).perLine) >= ss) && (e.heightChanged = !0), c;
    } else
      (r || this.outdated) && (this.setHeight(e, e.heightForGap(n, n + this.length)), this.outdated = !1);
    return this;
  }
  toString() {
    return `gap(${this.length})`;
  }
}
class Noe extends Ze {
  constructor(e, n, r) {
    super(e.length + n + r.length, e.height + r.height, n | (e.outdated || r.outdated ? 2 : 0)), this.left = e, this.right = r, this.size = e.size + r.size;
  }
  get break() {
    return this.flags & 1;
  }
  blockAt(e, n, r, i) {
    let o = r + this.left.height;
    return e < o ? this.left.blockAt(e, n, r, i) : this.right.blockAt(e, n, o, i + this.left.length + this.break);
  }
  lineAt(e, n, r, i, o) {
    let s = i + this.left.height, l = o + this.left.length + this.break, a = n == de.ByHeight ? e < s : e < l, c = a ? this.left.lineAt(e, n, r, i, o) : this.right.lineAt(e, n, r, s, l);
    if (this.break || (a ? c.to < l : c.from > l))
      return c;
    let u = n == de.ByPosNoHeight ? de.ByPosNoHeight : de.ByPos;
    return a ? c.join(this.right.lineAt(l, u, r, s, l)) : this.left.lineAt(l, u, r, i, o).join(c);
  }
  forEachLine(e, n, r, i, o, s) {
    let l = i + this.left.height, a = o + this.left.length + this.break;
    if (this.break)
      e < a && this.left.forEachLine(e, n, r, i, o, s), n >= a && this.right.forEachLine(e, n, r, l, a, s);
    else {
      let c = this.lineAt(a, de.ByPos, r, i, o);
      e < c.from && this.left.forEachLine(e, c.from - 1, r, i, o, s), c.to >= e && c.from <= n && s(c), n > c.to && this.right.forEachLine(c.to + 1, n, r, l, a, s);
    }
  }
  replace(e, n, r) {
    let i = this.left.length + this.break;
    if (n < i)
      return this.balanced(this.left.replace(e, n, r), this.right);
    if (e > this.left.length)
      return this.balanced(this.left, this.right.replace(e - i, n - i, r));
    let o = [];
    e > 0 && this.decomposeLeft(e, o);
    let s = o.length;
    for (let l of r)
      o.push(l);
    if (e > 0 && sp(o, s - 1), n < this.length) {
      let l = o.length;
      this.decomposeRight(n, o), sp(o, l);
    }
    return Ze.of(o);
  }
  decomposeLeft(e, n) {
    let r = this.left.length;
    if (e <= r)
      return this.left.decomposeLeft(e, n);
    n.push(this.left), this.break && (r++, e >= r && n.push(null)), e > r && this.right.decomposeLeft(e - r, n);
  }
  decomposeRight(e, n) {
    let r = this.left.length, i = r + this.break;
    if (e >= i)
      return this.right.decomposeRight(e - i, n);
    e < r && this.left.decomposeRight(e, n), this.break && e < i && n.push(null), n.push(this.right);
  }
  balanced(e, n) {
    return e.size > 2 * n.size || n.size > 2 * e.size ? Ze.of(this.break ? [e, null, n] : [e, n]) : (this.left = e, this.right = n, this.height = e.height + n.height, this.outdated = e.outdated || n.outdated, this.size = e.size + n.size, this.length = e.length + this.break + n.length, this);
  }
  updateHeight(e, n = 0, r = !1, i) {
    let { left: o, right: s } = this, l = n + o.length + this.break, a = null;
    return i && i.from <= n + o.length && i.more ? a = o = o.updateHeight(e, n, r, i) : o.updateHeight(e, n, r), i && i.from <= l + s.length && i.more ? a = s = s.updateHeight(e, l, r, i) : s.updateHeight(e, l, r), a ? this.balanced(o, s) : (this.height = this.left.height + this.right.height, this.outdated = !1, this);
  }
  toString() {
    return this.left + (this.break ? " " : "-") + this.right;
  }
}
function sp(t, e) {
  let n, r;
  t[e] == null && (n = t[e - 1]) instanceof Re && (r = t[e + 1]) instanceof Re && t.splice(e - 1, 3, new Re(n.length + 1 + r.length));
}
const Poe = 5;
class ju {
  constructor(e, n) {
    this.pos = e, this.oracle = n, this.nodes = [], this.lineStart = -1, this.lineEnd = -1, this.covering = null, this.writtenTo = e;
  }
  get isCovered() {
    return this.covering && this.nodes[this.nodes.length - 1] == this.covering;
  }
  span(e, n) {
    if (this.lineStart > -1) {
      let r = Math.min(n, this.lineEnd), i = this.nodes[this.nodes.length - 1];
      i instanceof ot ? i.length += r - this.pos : (r > this.pos || !this.isCovered) && this.nodes.push(new ot(r - this.pos, -1)), this.writtenTo = r, n > r && (this.nodes.push(null), this.writtenTo++, this.lineStart = -1);
    }
    this.pos = n;
  }
  point(e, n, r) {
    if (e < n || r.heightRelevant) {
      let i = r.widget ? r.widget.estimatedHeight : 0, o = r.widget ? r.widget.lineBreaks : 0;
      i < 0 && (i = this.oracle.lineHeight);
      let s = n - e;
      r.block ? this.addBlock(new xy(s, i, r)) : (s || o || i >= Poe) && this.addLineDeco(i, o, s);
    } else
      n > e && this.span(e, n);
    this.lineEnd > -1 && this.lineEnd < this.pos && (this.lineEnd = this.oracle.doc.lineAt(this.pos).to);
  }
  enterLine() {
    if (this.lineStart > -1)
      return;
    let { from: e, to: n } = this.oracle.doc.lineAt(this.pos);
    this.lineStart = e, this.lineEnd = n, this.writtenTo < e && ((this.writtenTo < e - 1 || this.nodes[this.nodes.length - 1] == null) && this.nodes.push(this.blankContent(this.writtenTo, e - 1)), this.nodes.push(null)), this.pos > e && this.nodes.push(new ot(this.pos - e, -1)), this.writtenTo = this.pos;
  }
  blankContent(e, n) {
    let r = new Re(n - e);
    return this.oracle.doc.lineAt(e).to == n && (r.flags |= 4), r;
  }
  ensureLine() {
    this.enterLine();
    let e = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
    if (e instanceof ot)
      return e;
    let n = new ot(0, -1);
    return this.nodes.push(n), n;
  }
  addBlock(e) {
    var n;
    this.enterLine();
    let r = (n = e.deco) === null || n === void 0 ? void 0 : n.type;
    r == be.WidgetAfter && !this.isCovered && this.ensureLine(), this.nodes.push(e), this.writtenTo = this.pos = this.pos + e.length, r != be.WidgetBefore && (this.covering = e);
  }
  addLineDeco(e, n, r) {
    let i = this.ensureLine();
    i.length += r, i.collapsed += r, i.widgetHeight = Math.max(i.widgetHeight, e), i.breaks += n, this.writtenTo = this.pos = this.pos + r;
  }
  finish(e) {
    let n = this.nodes.length == 0 ? null : this.nodes[this.nodes.length - 1];
    this.lineStart > -1 && !(n instanceof ot) && !this.isCovered ? this.nodes.push(new ot(0, -1)) : (this.writtenTo < this.pos || n == null) && this.nodes.push(this.blankContent(this.writtenTo, this.pos));
    let r = e;
    for (let i of this.nodes)
      i instanceof ot && i.updateHeight(this.oracle, r), r += i ? i.length : 1;
    return this.nodes;
  }
  static build(e, n, r, i) {
    let o = new ju(r, e);
    return te.spans(n, r, i, o, 0), o.finish(r);
  }
}
function Boe(t, e, n) {
  let r = new Foe();
  return te.compare(t, e, n, r, 0), r.changes;
}
class Foe {
  constructor() {
    this.changes = [];
  }
  compareRange() {
  }
  comparePoint(e, n, r, i) {
    (e < n || r && r.heightRelevant || i && i.heightRelevant) && Lc(e, n, this.changes, 5);
  }
}
function qoe(t, e) {
  let n = t.getBoundingClientRect(), r = t.ownerDocument, i = r.defaultView || window, o = Math.max(0, n.left), s = Math.min(i.innerWidth, n.right), l = Math.max(0, n.top), a = Math.min(i.innerHeight, n.bottom);
  for (let c = t.parentNode; c && c != r.body; )
    if (c.nodeType == 1) {
      let u = c, h = window.getComputedStyle(u);
      if ((u.scrollHeight > u.clientHeight || u.scrollWidth > u.clientWidth) && h.overflow != "visible") {
        let f = u.getBoundingClientRect();
        o = Math.max(o, f.left), s = Math.min(s, f.right), l = Math.max(l, f.top), a = c == t.parentNode ? f.bottom : Math.min(a, f.bottom);
      }
      c = h.position == "absolute" || h.position == "fixed" ? u.offsetParent : u.parentNode;
    } else if (c.nodeType == 11)
      c = c.host;
    else
      break;
  return {
    left: o - n.left,
    right: Math.max(o, s) - n.left,
    top: l - (n.top + e),
    bottom: Math.max(l, a) - (n.top + e)
  };
}
function $oe(t, e) {
  let n = t.getBoundingClientRect();
  return {
    left: 0,
    right: n.right - n.left,
    top: e,
    bottom: n.bottom - (n.top + e)
  };
}
class wa {
  constructor(e, n, r) {
    this.from = e, this.to = n, this.size = r;
  }
  static same(e, n) {
    if (e.length != n.length)
      return !1;
    for (let r = 0; r < e.length; r++) {
      let i = e[r], o = n[r];
      if (i.from != o.from || i.to != o.to || i.size != o.size)
        return !1;
    }
    return !0;
  }
  draw(e) {
    return V.replace({ widget: new Hoe(this.size, e) }).range(this.from, this.to);
  }
}
class Hoe extends qn {
  constructor(e, n) {
    super(), this.size = e, this.vertical = n;
  }
  eq(e) {
    return e.size == this.size && e.vertical == this.vertical;
  }
  toDOM() {
    let e = document.createElement("div");
    return this.vertical ? e.style.height = this.size + "px" : (e.style.width = this.size + "px", e.style.height = "2px", e.style.display = "inline-block"), e;
  }
  get estimatedHeight() {
    return this.vertical ? this.size : -1;
  }
}
class lp {
  constructor(e) {
    this.state = e, this.pixelViewport = { left: 0, right: window.innerWidth, top: 0, bottom: 0 }, this.inView = !0, this.paddingTop = 0, this.paddingBottom = 0, this.contentDOMWidth = 0, this.contentDOMHeight = 0, this.editorHeight = 0, this.editorWidth = 0, this.scrollTop = 0, this.scrolledToBottom = !0, this.scrollAnchorPos = 0, this.scrollAnchorHeight = -1, this.scaler = ap, this.scrollTarget = null, this.printing = !1, this.mustMeasureContent = !0, this.defaultTextDirection = ye.LTR, this.visibleRanges = [], this.mustEnforceCursorAssoc = !1;
    let n = e.facet(Uu).some((r) => typeof r != "function" && r.class == "cm-lineWrapping");
    this.heightOracle = new Loe(n), this.stateDeco = e.facet(Ki).filter((r) => typeof r != "function"), this.heightMap = Ze.empty().applyChanges(this.stateDeco, J.empty, this.heightOracle.setDoc(e.doc), [new mt(0, 0, 0, e.doc.length)]), this.viewport = this.getViewport(0, null), this.updateViewportLines(), this.updateForViewport(), this.lineGaps = this.ensureLineGaps([]), this.lineGapDeco = V.set(this.lineGaps.map((r) => r.draw(!1))), this.computeVisibleRanges();
  }
  updateForViewport() {
    let e = [this.viewport], { main: n } = this.state.selection;
    for (let r = 0; r <= 1; r++) {
      let i = r ? n.head : n.anchor;
      if (!e.some(({ from: o, to: s }) => i >= o && i <= s)) {
        let { from: o, to: s } = this.lineBlockAt(i);
        e.push(new Oo(o, s));
      }
    }
    this.viewports = e.sort((r, i) => r.from - i.from), this.scaler = this.heightMap.height <= 7e6 ? ap : new Uoe(this.heightOracle, this.heightMap, this.viewports);
  }
  updateViewportLines() {
    this.viewportLines = [], this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.heightOracle.setDoc(this.state.doc), 0, 0, (e) => {
      this.viewportLines.push(this.scaler.scale == 1 ? e : wi(e, this.scaler));
    });
  }
  update(e, n = null) {
    this.state = e.state;
    let r = this.stateDeco;
    this.stateDeco = this.state.facet(Ki).filter((u) => typeof u != "function");
    let i = e.changedRanges, o = mt.extendWithRanges(i, Boe(r, this.stateDeco, e ? e.changes : Ce.empty(this.state.doc.length))), s = this.heightMap.height, l = this.scrolledToBottom ? null : this.scrollAnchorAt(this.scrollTop);
    this.heightMap = this.heightMap.applyChanges(this.stateDeco, e.startState.doc, this.heightOracle.setDoc(this.state.doc), o), this.heightMap.height != s && (e.flags |= 2), l ? (this.scrollAnchorPos = e.changes.mapPos(l.from, -1), this.scrollAnchorHeight = l.top) : (this.scrollAnchorPos = -1, this.scrollAnchorHeight = this.heightMap.height);
    let a = o.length ? this.mapViewport(this.viewport, e.changes) : this.viewport;
    (n && (n.range.head < a.from || n.range.head > a.to) || !this.viewportIsAppropriate(a)) && (a = this.getViewport(0, n));
    let c = !e.changes.empty || e.flags & 2 || a.from != this.viewport.from || a.to != this.viewport.to;
    this.viewport = a, this.updateForViewport(), c && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 2e3 << 1) && this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, e.changes))), e.flags |= this.computeVisibleRanges(), n && (this.scrollTarget = n), !this.mustEnforceCursorAssoc && e.selectionSet && e.view.lineWrapping && e.state.selection.main.empty && e.state.selection.main.assoc && !e.state.facet(X0) && (this.mustEnforceCursorAssoc = !0);
  }
  measure(e) {
    let n = e.contentDOM, r = window.getComputedStyle(n), i = this.heightOracle, o = r.whiteSpace;
    this.defaultTextDirection = r.direction == "rtl" ? ye.RTL : ye.LTR;
    let s = this.heightOracle.mustRefreshForWrapping(o), l = n.getBoundingClientRect(), a = s || this.mustMeasureContent || this.contentDOMHeight != l.height;
    this.contentDOMHeight = l.height, this.mustMeasureContent = !1;
    let c = 0, u = 0, h = parseInt(r.paddingTop) || 0, f = parseInt(r.paddingBottom) || 0;
    (this.paddingTop != h || this.paddingBottom != f) && (this.paddingTop = h, this.paddingBottom = f, c |= 10), this.editorWidth != e.scrollDOM.clientWidth && (i.lineWrapping && (a = !0), this.editorWidth = e.scrollDOM.clientWidth, c |= 8), this.scrollTop != e.scrollDOM.scrollTop && (this.scrollAnchorHeight = -1, this.scrollTop = e.scrollDOM.scrollTop), this.scrolledToBottom = I0(e.scrollDOM);
    let d = (this.printing ? $oe : qoe)(n, this.paddingTop), p = d.top - this.pixelViewport.top, m = d.bottom - this.pixelViewport.bottom;
    this.pixelViewport = d;
    let g = this.pixelViewport.bottom > this.pixelViewport.top && this.pixelViewport.right > this.pixelViewport.left;
    if (g != this.inView && (this.inView = g, g && (a = !0)), !this.inView && !this.scrollTarget)
      return 0;
    let y = l.width;
    if ((this.contentDOMWidth != y || this.editorHeight != e.scrollDOM.clientHeight) && (this.contentDOMWidth = l.width, this.editorHeight = e.scrollDOM.clientHeight, c |= 8), a) {
      let k = e.docView.measureVisibleLineHeights(this.viewport);
      if (i.mustRefreshForHeights(k) && (s = !0), s || i.lineWrapping && Math.abs(y - this.contentDOMWidth) > i.charWidth) {
        let { lineHeight: x, charWidth: w, textHeight: v } = e.docView.measureTextSize();
        s = x > 0 && i.refresh(o, x, w, v, y / w, k), s && (e.docView.minWidth = 0, c |= 8);
      }
      p > 0 && m > 0 ? u = Math.max(p, m) : p < 0 && m < 0 && (u = Math.min(p, m)), i.heightChanged = !1;
      for (let x of this.viewports) {
        let w = x.from == this.viewport.from ? k : e.docView.measureVisibleLineHeights(x);
        this.heightMap = (s ? Ze.empty().applyChanges(this.stateDeco, J.empty, this.heightOracle, [new mt(0, 0, 0, e.state.doc.length)]) : this.heightMap).updateHeight(i, 0, s, new Ioe(x.from, w));
      }
      i.heightChanged && (c |= 2);
    }
    let b = !this.viewportIsAppropriate(this.viewport, u) || this.scrollTarget && (this.scrollTarget.range.head < this.viewport.from || this.scrollTarget.range.head > this.viewport.to);
    return b && (this.viewport = this.getViewport(u, this.scrollTarget)), this.updateForViewport(), (c & 2 || b) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 2e3 << 1) && this.updateLineGaps(this.ensureLineGaps(s ? [] : this.lineGaps, e)), c |= this.computeVisibleRanges(), this.mustEnforceCursorAssoc && (this.mustEnforceCursorAssoc = !1, e.docView.enforceCursorAssoc()), c;
  }
  get visibleTop() {
    return this.scaler.fromDOM(this.pixelViewport.top);
  }
  get visibleBottom() {
    return this.scaler.fromDOM(this.pixelViewport.bottom);
  }
  getViewport(e, n) {
    let r = 0.5 - Math.max(-0.5, Math.min(0.5, e / 1e3 / 2)), i = this.heightMap, o = this.heightOracle, { visibleTop: s, visibleBottom: l } = this, a = new Oo(i.lineAt(s - r * 1e3, de.ByHeight, o, 0, 0).from, i.lineAt(l + (1 - r) * 1e3, de.ByHeight, o, 0, 0).to);
    if (n) {
      let { head: c } = n.range;
      if (c < a.from || c > a.to) {
        let u = Math.min(this.editorHeight, this.pixelViewport.bottom - this.pixelViewport.top), h = i.lineAt(c, de.ByPos, o, 0, 0), f;
        n.y == "center" ? f = (h.top + h.bottom) / 2 - u / 2 : n.y == "start" || n.y == "nearest" && c < a.from ? f = h.top : f = h.bottom - u, a = new Oo(i.lineAt(f - 1e3 / 2, de.ByHeight, o, 0, 0).from, i.lineAt(f + u + 1e3 / 2, de.ByHeight, o, 0, 0).to);
      }
    }
    return a;
  }
  mapViewport(e, n) {
    let r = n.mapPos(e.from, -1), i = n.mapPos(e.to, 1);
    return new Oo(this.heightMap.lineAt(r, de.ByPos, this.heightOracle, 0, 0).from, this.heightMap.lineAt(i, de.ByPos, this.heightOracle, 0, 0).to);
  }
  viewportIsAppropriate({ from: e, to: n }, r = 0) {
    if (!this.inView)
      return !0;
    let { top: i } = this.heightMap.lineAt(e, de.ByPos, this.heightOracle, 0, 0), { bottom: o } = this.heightMap.lineAt(n, de.ByPos, this.heightOracle, 0, 0), { visibleTop: s, visibleBottom: l } = this;
    return (e == 0 || i <= s - Math.max(10, Math.min(-r, 250))) && (n == this.state.doc.length || o >= l + Math.max(10, Math.min(r, 250))) && i > s - 2 * 1e3 && o < l + 2 * 1e3;
  }
  mapLineGaps(e, n) {
    if (!e.length || n.empty)
      return e;
    let r = [];
    for (let i of e)
      n.touchesRange(i.from, i.to) || r.push(new wa(n.mapPos(i.from), n.mapPos(i.to), i.size));
    return r;
  }
  ensureLineGaps(e, n) {
    let r = this.heightOracle.lineWrapping, i = r ? 1e4 : 2e3, o = i >> 1, s = i << 1;
    if (this.defaultTextDirection != ye.LTR && !r)
      return [];
    let l = [], a = (c, u, h, f) => {
      if (u - c < o)
        return;
      let d = this.state.selection.main, p = [d.from];
      d.empty || p.push(d.to);
      for (let g of p)
        if (g > c && g < u) {
          a(c, g - 10, h, f), a(g + 10, u, h, f);
          return;
        }
      let m = Voe(e, (g) => g.from >= h.from && g.to <= h.to && Math.abs(g.from - c) < o && Math.abs(g.to - u) < o && !p.some((y) => g.from < y && g.to > y));
      if (!m) {
        if (u < h.to && n && r && n.visibleRanges.some((g) => g.from <= u && g.to >= u)) {
          let g = n.moveToLineBoundary(A.cursor(u), !1, !0).head;
          g > c && (u = g);
        }
        m = new wa(c, u, this.gapSize(h, c, u, f));
      }
      l.push(m);
    };
    for (let c of this.viewportLines) {
      if (c.length < s)
        continue;
      let u = zoe(c.from, c.to, this.stateDeco);
      if (u.total < s)
        continue;
      let h = this.scrollTarget ? this.scrollTarget.range.head : null, f, d;
      if (r) {
        let p = i / this.heightOracle.lineLength * this.heightOracle.lineHeight, m, g;
        if (h != null) {
          let y = Lo(u, h), b = ((this.visibleBottom - this.visibleTop) / 2 + p) / c.height;
          m = y - b, g = y + b;
        } else
          m = (this.visibleTop - c.top - p) / c.height, g = (this.visibleBottom - c.top + p) / c.height;
        f = Ro(u, m), d = Ro(u, g);
      } else {
        let p = u.total * this.heightOracle.charWidth, m = i * this.heightOracle.charWidth, g, y;
        if (h != null) {
          let b = Lo(u, h), k = ((this.pixelViewport.right - this.pixelViewport.left) / 2 + m) / p;
          g = b - k, y = b + k;
        } else
          g = (this.pixelViewport.left - m) / p, y = (this.pixelViewport.right + m) / p;
        f = Ro(u, g), d = Ro(u, y);
      }
      f > c.from && a(c.from, f, c, u), d < c.to && a(d, c.to, c, u);
    }
    return l;
  }
  gapSize(e, n, r, i) {
    let o = Lo(i, r) - Lo(i, n);
    return this.heightOracle.lineWrapping ? e.height * o : i.total * this.heightOracle.charWidth * o;
  }
  updateLineGaps(e) {
    wa.same(e, this.lineGaps) || (this.lineGaps = e, this.lineGapDeco = V.set(e.map((n) => n.draw(this.heightOracle.lineWrapping))));
  }
  computeVisibleRanges() {
    let e = this.stateDeco;
    this.lineGaps.length && (e = e.concat(this.lineGapDeco));
    let n = [];
    te.spans(e, this.viewport.from, this.viewport.to, {
      span(i, o) {
        n.push({ from: i, to: o });
      },
      point() {
      }
    }, 20);
    let r = n.length != this.visibleRanges.length || this.visibleRanges.some((i, o) => i.from != n[o].from || i.to != n[o].to);
    return this.visibleRanges = n, r ? 4 : 0;
  }
  lineBlockAt(e) {
    return e >= this.viewport.from && e <= this.viewport.to && this.viewportLines.find((n) => n.from <= e && n.to >= e) || wi(this.heightMap.lineAt(e, de.ByPos, this.heightOracle, 0, 0), this.scaler);
  }
  lineBlockAtHeight(e) {
    return wi(this.heightMap.lineAt(this.scaler.fromDOM(e), de.ByHeight, this.heightOracle, 0, 0), this.scaler);
  }
  scrollAnchorAt(e) {
    let n = this.lineBlockAtHeight(e + 8);
    return n.from >= this.viewport.from || this.viewportLines[0].top - e > 200 ? n : this.viewportLines[0];
  }
  elementAtHeight(e) {
    return wi(this.heightMap.blockAt(this.scaler.fromDOM(e), this.heightOracle, 0, 0), this.scaler);
  }
  get docHeight() {
    return this.scaler.toDOM(this.heightMap.height);
  }
  get contentHeight() {
    return this.docHeight + this.paddingTop + this.paddingBottom;
  }
}
class Oo {
  constructor(e, n) {
    this.from = e, this.to = n;
  }
}
function zoe(t, e, n) {
  let r = [], i = t, o = 0;
  return te.spans(n, t, e, {
    span() {
    },
    point(s, l) {
      s > i && (r.push({ from: i, to: s }), o += s - i), i = l;
    }
  }, 20), i < e && (r.push({ from: i, to: e }), o += e - i), { total: o, ranges: r };
}
function Ro({ total: t, ranges: e }, n) {
  if (n <= 0)
    return e[0].from;
  if (n >= 1)
    return e[e.length - 1].to;
  let r = Math.floor(t * n);
  for (let i = 0; ; i++) {
    let { from: o, to: s } = e[i], l = s - o;
    if (r <= l)
      return o + r;
    r -= l;
  }
}
function Lo(t, e) {
  let n = 0;
  for (let { from: r, to: i } of t.ranges) {
    if (e <= i) {
      n += e - r;
      break;
    }
    n += i - r;
  }
  return n / t.total;
}
function Voe(t, e) {
  for (let n of t)
    if (e(n))
      return n;
}
const ap = {
  toDOM(t) {
    return t;
  },
  fromDOM(t) {
    return t;
  },
  scale: 1
};
class Uoe {
  constructor(e, n, r) {
    let i = 0, o = 0, s = 0;
    this.viewports = r.map(({ from: l, to: a }) => {
      let c = n.lineAt(l, de.ByPos, e, 0, 0).top, u = n.lineAt(a, de.ByPos, e, 0, 0).bottom;
      return i += u - c, { from: l, to: a, top: c, bottom: u, domTop: 0, domBottom: 0 };
    }), this.scale = (7e6 - i) / (n.height - i);
    for (let l of this.viewports)
      l.domTop = s + (l.top - o) * this.scale, s = l.domBottom = l.domTop + (l.bottom - l.top), o = l.bottom;
  }
  toDOM(e) {
    for (let n = 0, r = 0, i = 0; ; n++) {
      let o = n < this.viewports.length ? this.viewports[n] : null;
      if (!o || e < o.top)
        return i + (e - r) * this.scale;
      if (e <= o.bottom)
        return o.domTop + (e - o.top);
      r = o.bottom, i = o.domBottom;
    }
  }
  fromDOM(e) {
    for (let n = 0, r = 0, i = 0; ; n++) {
      let o = n < this.viewports.length ? this.viewports[n] : null;
      if (!o || e < o.domTop)
        return r + (e - i) / this.scale;
      if (e <= o.domBottom)
        return o.top + (e - o.domTop);
      r = o.bottom, i = o.domBottom;
    }
  }
}
function wi(t, e) {
  if (e.scale == 1)
    return t;
  let n = e.toDOM(t.top), r = e.toDOM(t.bottom);
  return new $t(t.from, t.length, n, r - n, Array.isArray(t._content) ? t._content.map((i) => wi(i, e)) : t._content);
}
const Io = /* @__PURE__ */ N.define({ combine: (t) => t.join(" ") }), zc = /* @__PURE__ */ N.define({ combine: (t) => t.indexOf(!0) > -1 }), Vc = /* @__PURE__ */ Ln.newName(), _y = /* @__PURE__ */ Ln.newName(), ky = /* @__PURE__ */ Ln.newName(), wy = { "&light": "." + _y, "&dark": "." + ky };
function Uc(t, e, n) {
  return new Ln(e, {
    finish(r) {
      return /&/.test(r) ? r.replace(/&\w*/, (i) => {
        if (i == "&")
          return t;
        if (!n || !n[i])
          throw new RangeError(`Unsupported selector: ${i}`);
        return n[i];
      }) : t + " " + r;
    }
  });
}
const Woe = /* @__PURE__ */ Uc("." + Vc, {
  "&": {
    position: "relative !important",
    boxSizing: "border-box",
    "&.cm-focused": {
      outline: "1px dotted #212121"
    },
    display: "flex !important",
    flexDirection: "column"
  },
  ".cm-scroller": {
    display: "flex !important",
    alignItems: "flex-start !important",
    fontFamily: "monospace",
    lineHeight: 1.4,
    height: "100%",
    overflowX: "auto",
    position: "relative",
    zIndex: 0
  },
  ".cm-content": {
    margin: 0,
    flexGrow: 2,
    flexShrink: 0,
    display: "block",
    whiteSpace: "pre",
    wordWrap: "normal",
    boxSizing: "border-box",
    padding: "4px 0",
    outline: "none",
    "&[contenteditable=true]": {
      WebkitUserModify: "read-write-plaintext-only"
    }
  },
  ".cm-lineWrapping": {
    whiteSpace_fallback: "pre-wrap",
    whiteSpace: "break-spaces",
    wordBreak: "break-word",
    overflowWrap: "anywhere",
    flexShrink: 1
  },
  "&light .cm-content": { caretColor: "black" },
  "&dark .cm-content": { caretColor: "white" },
  ".cm-line": {
    display: "block",
    padding: "0 2px 0 6px"
  },
  ".cm-layer": {
    position: "absolute",
    left: 0,
    top: 0,
    contain: "size style",
    "& > *": {
      position: "absolute"
    }
  },
  "&light .cm-selectionBackground": {
    background: "#d9d9d9"
  },
  "&dark .cm-selectionBackground": {
    background: "#222"
  },
  "&light.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground": {
    background: "#d7d4f0"
  },
  "&dark.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground": {
    background: "#233"
  },
  ".cm-cursorLayer": {
    pointerEvents: "none"
  },
  "&.cm-focused > .cm-scroller > .cm-cursorLayer": {
    animation: "steps(1) cm-blink 1.2s infinite"
  },
  "@keyframes cm-blink": { "0%": {}, "50%": { opacity: 0 }, "100%": {} },
  "@keyframes cm-blink2": { "0%": {}, "50%": { opacity: 0 }, "100%": {} },
  ".cm-cursor, .cm-dropCursor": {
    borderLeft: "1.2px solid black",
    marginLeft: "-0.6px",
    pointerEvents: "none"
  },
  ".cm-cursor": {
    display: "none"
  },
  "&dark .cm-cursor": {
    borderLeftColor: "#444"
  },
  ".cm-dropCursor": {
    position: "absolute"
  },
  "&.cm-focused > .cm-scroller > .cm-cursorLayer .cm-cursor": {
    display: "block"
  },
  "&light .cm-activeLine": { backgroundColor: "#cceeff44" },
  "&dark .cm-activeLine": { backgroundColor: "#99eeff33" },
  "&light .cm-specialChar": { color: "red" },
  "&dark .cm-specialChar": { color: "#f78" },
  ".cm-gutters": {
    flexShrink: 0,
    display: "flex",
    height: "100%",
    boxSizing: "border-box",
    insetInlineStart: 0,
    zIndex: 200
  },
  "&light .cm-gutters": {
    backgroundColor: "#f5f5f5",
    color: "#6c6c6c",
    borderRight: "1px solid #ddd"
  },
  "&dark .cm-gutters": {
    backgroundColor: "#333338",
    color: "#ccc"
  },
  ".cm-gutter": {
    display: "flex !important",
    flexDirection: "column",
    flexShrink: 0,
    boxSizing: "border-box",
    minHeight: "100%",
    overflow: "hidden"
  },
  ".cm-gutterElement": {
    boxSizing: "border-box"
  },
  ".cm-lineNumbers .cm-gutterElement": {
    padding: "0 3px 0 5px",
    minWidth: "20px",
    textAlign: "right",
    whiteSpace: "nowrap"
  },
  "&light .cm-activeLineGutter": {
    backgroundColor: "#e2f2ff"
  },
  "&dark .cm-activeLineGutter": {
    backgroundColor: "#222227"
  },
  ".cm-panels": {
    boxSizing: "border-box",
    position: "sticky",
    left: 0,
    right: 0
  },
  "&light .cm-panels": {
    backgroundColor: "#f5f5f5",
    color: "black"
  },
  "&light .cm-panels-top": {
    borderBottom: "1px solid #ddd"
  },
  "&light .cm-panels-bottom": {
    borderTop: "1px solid #ddd"
  },
  "&dark .cm-panels": {
    backgroundColor: "#333338",
    color: "white"
  },
  ".cm-tab": {
    display: "inline-block",
    overflow: "hidden",
    verticalAlign: "bottom"
  },
  ".cm-widgetBuffer": {
    verticalAlign: "text-top",
    height: "1em",
    width: 0,
    display: "inline"
  },
  ".cm-placeholder": {
    color: "#888",
    display: "inline-block",
    verticalAlign: "top"
  },
  ".cm-highlightSpace:before": {
    content: "attr(data-display)",
    position: "absolute",
    pointerEvents: "none",
    color: "#888"
  },
  ".cm-highlightTab": {
    backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="20"><path stroke="%23888" stroke-width="1" fill="none" d="M1 10H196L190 5M190 15L196 10M197 4L197 16"/></svg>')`,
    backgroundSize: "auto 100%",
    backgroundPosition: "right 90%",
    backgroundRepeat: "no-repeat"
  },
  ".cm-trailingSpace": {
    backgroundColor: "#ff332255"
  },
  ".cm-button": {
    verticalAlign: "middle",
    color: "inherit",
    fontSize: "70%",
    padding: ".2em 1em",
    borderRadius: "1px"
  },
  "&light .cm-button": {
    backgroundImage: "linear-gradient(#eff1f5, #d9d9df)",
    border: "1px solid #888",
    "&:active": {
      backgroundImage: "linear-gradient(#b4b4b4, #d0d3d6)"
    }
  },
  "&dark .cm-button": {
    backgroundImage: "linear-gradient(#393939, #111)",
    border: "1px solid #888",
    "&:active": {
      backgroundImage: "linear-gradient(#111, #333)"
    }
  },
  ".cm-textfield": {
    verticalAlign: "middle",
    color: "inherit",
    fontSize: "70%",
    border: "1px solid silver",
    padding: ".2em .5em"
  },
  "&light .cm-textfield": {
    backgroundColor: "white"
  },
  "&dark .cm-textfield": {
    border: "1px solid #555",
    backgroundColor: "inherit"
  }
}, wy);
class joe {
  constructor(e, n, r, i) {
    this.typeOver = i, this.bounds = null, this.text = "";
    let { impreciseHead: o, impreciseAnchor: s } = e.docView;
    if (e.state.readOnly && n > -1)
      this.newSel = null;
    else if (n > -1 && (this.bounds = e.docView.domBoundsAround(n, r, 0))) {
      let l = o || s ? [] : Yoe(e), a = new F0(l, e.state);
      a.readRange(this.bounds.startDOM, this.bounds.endDOM), this.text = a.text, this.newSel = Zoe(l, this.bounds.from);
    } else {
      let l = e.observer.selectionRange, a = o && o.node == l.focusNode && o.offset == l.focusOffset || !Ec(e.contentDOM, l.focusNode) ? e.state.selection.main.head : e.docView.posFromDOM(l.focusNode, l.focusOffset), c = s && s.node == l.anchorNode && s.offset == l.anchorOffset || !Ec(e.contentDOM, l.anchorNode) ? e.state.selection.main.anchor : e.docView.posFromDOM(l.anchorNode, l.anchorOffset);
      this.newSel = A.single(c, a);
    }
  }
}
function Cy(t, e) {
  let n, { newSel: r } = e, i = t.state.selection.main, o = t.inputState.lastKeyTime > Date.now() - 100 ? t.inputState.lastKeyCode : -1;
  if (e.bounds) {
    let { from: s, to: l } = e.bounds, a = i.from, c = null;
    (o === 8 || P.android && e.text.length < l - s) && (a = i.to, c = "end");
    let u = Koe(t.state.doc.sliceString(s, l, Dr), e.text, a - s, c);
    u && (P.chrome && o == 13 && u.toB == u.from + 2 && e.text.slice(u.from, u.toB) == Dr + Dr && u.toB--, n = {
      from: s + u.from,
      to: s + u.toA,
      insert: J.of(e.text.slice(u.from, u.toB).split(Dr))
    });
  } else
    r && (!t.hasFocus && t.state.facet(vl) || r.main.eq(i)) && (r = null);
  if (!n && !r)
    return !1;
  if (!n && e.typeOver && !i.empty && r && r.main.empty ? n = { from: i.from, to: i.to, insert: t.state.doc.slice(i.from, i.to) } : n && n.from >= i.from && n.to <= i.to && (n.from != i.from || n.to != i.to) && i.to - i.from - (n.to - n.from) <= 4 ? n = {
    from: i.from,
    to: i.to,
    insert: t.state.doc.slice(i.from, n.from).append(n.insert).append(t.state.doc.slice(n.to, i.to))
  } : (P.mac || P.android) && n && n.from == n.to && n.from == i.head - 1 && /^\. ?$/.test(n.insert.toString()) && t.contentDOM.getAttribute("autocorrect") == "off" ? (r && n.insert.length == 2 && (r = A.single(r.main.anchor - 1, r.main.head - 1)), n = { from: i.from, to: i.to, insert: J.of([" "]) }) : P.chrome && n && n.from == n.to && n.from == i.head && n.insert.toString() == `
 ` && t.lineWrapping && (r && (r = A.single(r.main.anchor - 1, r.main.head - 1)), n = { from: i.from, to: i.to, insert: J.of([" "]) }), n) {
    if (P.ios && t.inputState.flushIOSKey(t) || P.android && (n.from == i.from && n.to == i.to && n.insert.length == 1 && n.insert.lines == 2 && Pr(t.contentDOM, "Enter", 13) || (n.from == i.from - 1 && n.to == i.to && n.insert.length == 0 || o == 8 && n.insert.length < n.to - n.from) && Pr(t.contentDOM, "Backspace", 8) || n.from == i.from && n.to == i.to + 1 && n.insert.length == 0 && Pr(t.contentDOM, "Delete", 46)))
      return !0;
    let s = n.insert.toString();
    t.inputState.composing >= 0 && t.inputState.composing++;
    let l, a = () => l || (l = Goe(t, n, r));
    return t.state.facet(Y0).some((c) => c(t, n.from, n.to, s, a)) || t.dispatch(a()), !0;
  } else if (r && !r.main.eq(i)) {
    let s = !1, l = "select";
    return t.inputState.lastSelectionTime > Date.now() - 50 && (t.inputState.lastSelectionOrigin == "select" && (s = !0), l = t.inputState.lastSelectionOrigin), t.dispatch({ selection: r, scrollIntoView: s, userEvent: l }), !0;
  } else
    return !1;
}
function Goe(t, e, n) {
  let r, i = t.state, o = i.selection.main;
  if (e.from >= o.from && e.to <= o.to && e.to - e.from >= (o.to - o.from) / 3 && (!n || n.main.empty && n.main.from == e.from + e.insert.length) && t.inputState.composing < 0) {
    let l = o.from < e.from ? i.sliceDoc(o.from, e.from) : "", a = o.to > e.to ? i.sliceDoc(e.to, o.to) : "";
    r = i.replaceSelection(t.state.toText(l + e.insert.sliceString(0, void 0, t.state.lineBreak) + a));
  } else {
    let l = i.changes(e), a = n && n.main.to <= l.newLength ? n.main : void 0;
    if (i.selection.ranges.length > 1 && t.inputState.composing >= 0 && e.to <= o.to && e.to >= o.to - 10) {
      let c = t.state.sliceDoc(e.from, e.to), u = ay(t) || t.state.doc.lineAt(o.head), h = o.to - e.to, f = o.to - o.from;
      r = i.changeByRange((d) => {
        if (d.from == o.from && d.to == o.to)
          return { changes: l, range: a || d.map(l) };
        let p = d.to - h, m = p - c.length;
        if (d.to - d.from != f || t.state.sliceDoc(m, p) != c || u && d.to >= u.from && d.from <= u.to)
          return { range: d };
        let g = i.changes({ from: m, to: p, insert: e.insert }), y = d.to - o.to;
        return {
          changes: g,
          range: a ? A.range(Math.max(0, a.anchor + y), Math.max(0, a.head + y)) : d.map(g)
        };
      });
    } else
      r = {
        changes: l,
        selection: a && i.selection.replaceRange(a)
      };
  }
  let s = "input.type";
  return (t.composing || t.inputState.compositionPendingChange && t.inputState.compositionEndedAt > Date.now() - 50) && (t.inputState.compositionPendingChange = !1, s += ".compose", t.inputState.compositionFirstChange && (s += ".start", t.inputState.compositionFirstChange = !1)), i.update(r, { userEvent: s, scrollIntoView: !0 });
}
function Koe(t, e, n, r) {
  let i = Math.min(t.length, e.length), o = 0;
  for (; o < i && t.charCodeAt(o) == e.charCodeAt(o); )
    o++;
  if (o == i && t.length == e.length)
    return null;
  let s = t.length, l = e.length;
  for (; s > 0 && l > 0 && t.charCodeAt(s - 1) == e.charCodeAt(l - 1); )
    s--, l--;
  if (r == "end") {
    let a = Math.max(0, o - Math.min(s, l));
    n -= s + a - o;
  }
  if (s < o && t.length < e.length) {
    let a = n <= o && n >= s ? o - n : 0;
    o -= a, l = o + (l - s), s = o;
  } else if (l < o) {
    let a = n <= o && n >= l ? o - n : 0;
    o -= a, s = o + (s - l), l = o;
  }
  return { from: o, toA: s, toB: l };
}
function Yoe(t) {
  let e = [];
  if (t.root.activeElement != t.contentDOM)
    return e;
  let { anchorNode: n, anchorOffset: r, focusNode: i, focusOffset: o } = t.observer.selectionRange;
  return n && (e.push(new Pd(n, r)), (i != n || o != r) && e.push(new Pd(i, o))), e;
}
function Zoe(t, e) {
  if (t.length == 0)
    return null;
  let n = t[0].pos, r = t.length == 2 ? t[1].pos : n;
  return n > -1 && r > -1 ? A.single(n + e, r + e) : null;
}
const Joe = {
  childList: !0,
  characterData: !0,
  subtree: !0,
  attributes: !0,
  characterDataOldValue: !0
}, Ca = P.ie && P.ie_version <= 11;
class Xoe {
  constructor(e) {
    this.view = e, this.active = !1, this.selectionRange = new Hie(), this.selectionChanged = !1, this.delayedFlush = -1, this.resizeTimeout = -1, this.queue = [], this.delayedAndroidKey = null, this.flushingAndroidKey = -1, this.lastChange = 0, this.scrollTargets = [], this.intersection = null, this.resizeScroll = null, this.resizeContent = null, this.intersecting = !1, this.gapIntersection = null, this.gaps = [], this.parentCheck = -1, this.dom = e.contentDOM, this.observer = new MutationObserver((n) => {
      for (let r of n)
        this.queue.push(r);
      (P.ie && P.ie_version <= 11 || P.ios && e.composing) && n.some((r) => r.type == "childList" && r.removedNodes.length || r.type == "characterData" && r.oldValue.length > r.target.nodeValue.length) ? this.flushSoon() : this.flush();
    }), Ca && (this.onCharData = (n) => {
      this.queue.push({
        target: n.target,
        type: "characterData",
        oldValue: n.prevValue
      }), this.flushSoon();
    }), this.onSelectionChange = this.onSelectionChange.bind(this), this.onResize = this.onResize.bind(this), this.onPrint = this.onPrint.bind(this), this.onScroll = this.onScroll.bind(this), typeof ResizeObserver == "function" && (this.resizeScroll = new ResizeObserver(() => {
      var n;
      ((n = this.view.docView) === null || n === void 0 ? void 0 : n.lastUpdate) < Date.now() - 75 && this.onResize();
    }), this.resizeScroll.observe(e.scrollDOM), this.resizeContent = new ResizeObserver(() => this.view.requestMeasure()), this.resizeContent.observe(e.contentDOM)), this.addWindowListeners(this.win = e.win), this.start(), typeof IntersectionObserver == "function" && (this.intersection = new IntersectionObserver((n) => {
      this.parentCheck < 0 && (this.parentCheck = setTimeout(this.listenForScroll.bind(this), 1e3)), n.length > 0 && n[n.length - 1].intersectionRatio > 0 != this.intersecting && (this.intersecting = !this.intersecting, this.intersecting != this.view.inView && this.onScrollChanged(document.createEvent("Event")));
    }, { threshold: [0, 1e-3] }), this.intersection.observe(this.dom), this.gapIntersection = new IntersectionObserver((n) => {
      n.length > 0 && n[n.length - 1].intersectionRatio > 0 && this.onScrollChanged(document.createEvent("Event"));
    }, {})), this.listenForScroll(), this.readSelectionRange();
  }
  onScrollChanged(e) {
    this.view.inputState.runScrollHandlers(this.view, e), this.intersecting && this.view.measure();
  }
  onScroll(e) {
    this.intersecting && this.flush(!1), this.onScrollChanged(e);
  }
  onResize() {
    this.resizeTimeout < 0 && (this.resizeTimeout = setTimeout(() => {
      this.resizeTimeout = -1, this.view.requestMeasure();
    }, 50));
  }
  onPrint() {
    this.view.viewState.printing = !0, this.view.measure(), setTimeout(() => {
      this.view.viewState.printing = !1, this.view.requestMeasure();
    }, 500);
  }
  updateGaps(e) {
    if (this.gapIntersection && (e.length != this.gaps.length || this.gaps.some((n, r) => n != e[r]))) {
      this.gapIntersection.disconnect();
      for (let n of e)
        this.gapIntersection.observe(n);
      this.gaps = e;
    }
  }
  onSelectionChange(e) {
    let n = this.selectionChanged;
    if (!this.readSelectionRange() || this.delayedAndroidKey)
      return;
    let { view: r } = this, i = this.selectionRange;
    if (r.state.facet(vl) ? r.root.activeElement != this.dom : !is(r.dom, i))
      return;
    let o = i.anchorNode && r.docView.nearest(i.anchorNode);
    if (o && o.ignoreEvent(e)) {
      n || (this.selectionChanged = !1);
      return;
    }
    (P.ie && P.ie_version <= 11 || P.android && P.chrome) && !r.state.selection.main.empty && i.focusNode && Es(i.focusNode, i.focusOffset, i.anchorNode, i.anchorOffset) ? this.flushSoon() : this.flush(!1);
  }
  readSelectionRange() {
    let { view: e } = this, n = P.safari && e.root.nodeType == 11 && Bie(this.dom.ownerDocument) == this.dom && Qoe(this.view) || Ss(e.root);
    if (!n || this.selectionRange.eq(n))
      return !1;
    let r = is(this.dom, n);
    return r && !this.selectionChanged && e.inputState.lastFocusTime > Date.now() - 200 && e.inputState.lastTouchTime < Date.now() - 300 && Vie(this.dom, n) ? (this.view.inputState.lastFocusTime = 0, e.docView.updateSelection(), !1) : (this.selectionRange.setRange(n), r && (this.selectionChanged = !0), !0);
  }
  setSelectionRange(e, n) {
    this.selectionRange.set(e.node, e.offset, n.node, n.offset), this.selectionChanged = !1;
  }
  clearSelectionRange() {
    this.selectionRange.set(null, 0, null, 0);
  }
  listenForScroll() {
    this.parentCheck = -1;
    let e = 0, n = null;
    for (let r = this.dom; r; )
      if (r.nodeType == 1)
        !n && e < this.scrollTargets.length && this.scrollTargets[e] == r ? e++ : n || (n = this.scrollTargets.slice(0, e)), n && n.push(r), r = r.assignedSlot || r.parentNode;
      else if (r.nodeType == 11)
        r = r.host;
      else
        break;
    if (e < this.scrollTargets.length && !n && (n = this.scrollTargets.slice(0, e)), n) {
      for (let r of this.scrollTargets)
        r.removeEventListener("scroll", this.onScroll);
      for (let r of this.scrollTargets = n)
        r.addEventListener("scroll", this.onScroll);
    }
  }
  ignore(e) {
    if (!this.active)
      return e();
    try {
      return this.stop(), e();
    } finally {
      this.start(), this.clear();
    }
  }
  start() {
    this.active || (this.observer.observe(this.dom, Joe), Ca && this.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.active = !0);
  }
  stop() {
    !this.active || (this.active = !1, this.observer.disconnect(), Ca && this.dom.removeEventListener("DOMCharacterDataModified", this.onCharData));
  }
  clear() {
    this.processRecords(), this.queue.length = 0, this.selectionChanged = !1;
  }
  delayAndroidKey(e, n) {
    var r;
    if (!this.delayedAndroidKey) {
      let i = () => {
        let o = this.delayedAndroidKey;
        o && (this.clearDelayedAndroidKey(), this.view.inputState.lastKeyCode = o.keyCode, this.view.inputState.lastKeyTime = Date.now(), !this.flush() && o.force && Pr(this.dom, o.key, o.keyCode));
      };
      this.flushingAndroidKey = this.view.win.requestAnimationFrame(i);
    }
    (!this.delayedAndroidKey || e == "Enter") && (this.delayedAndroidKey = {
      key: e,
      keyCode: n,
      force: this.lastChange < Date.now() - 50 || !!(!((r = this.delayedAndroidKey) === null || r === void 0) && r.force)
    });
  }
  clearDelayedAndroidKey() {
    this.win.cancelAnimationFrame(this.flushingAndroidKey), this.delayedAndroidKey = null, this.flushingAndroidKey = -1;
  }
  flushSoon() {
    this.delayedFlush < 0 && (this.delayedFlush = this.view.win.requestAnimationFrame(() => {
      this.delayedFlush = -1, this.flush();
    }));
  }
  forceFlush() {
    this.delayedFlush >= 0 && (this.view.win.cancelAnimationFrame(this.delayedFlush), this.delayedFlush = -1), this.flush();
  }
  pendingRecords() {
    for (let e of this.observer.takeRecords())
      this.queue.push(e);
    return this.queue;
  }
  processRecords() {
    let e = this.pendingRecords();
    e.length && (this.queue = []);
    let n = -1, r = -1, i = !1;
    for (let o of e) {
      let s = this.readMutation(o);
      !s || (s.typeOver && (i = !0), n == -1 ? { from: n, to: r } = s : (n = Math.min(s.from, n), r = Math.max(s.to, r)));
    }
    return { from: n, to: r, typeOver: i };
  }
  readChange() {
    let { from: e, to: n, typeOver: r } = this.processRecords(), i = this.selectionChanged && is(this.dom, this.selectionRange);
    return e < 0 && !i ? null : (e > -1 && (this.lastChange = Date.now()), this.view.inputState.lastFocusTime = 0, this.selectionChanged = !1, new joe(this.view, e, n, r));
  }
  flush(e = !0) {
    if (this.delayedFlush >= 0 || this.delayedAndroidKey)
      return !1;
    e && this.readSelectionRange();
    let n = this.readChange();
    if (!n)
      return !1;
    let r = this.view.state, i = Cy(this.view, n);
    return this.view.state == r && this.view.update([]), i;
  }
  readMutation(e) {
    let n = this.view.docView.nearest(e.target);
    if (!n || n.ignoreMutation(e))
      return null;
    if (n.markDirty(e.type == "attributes"), e.type == "attributes" && (n.flags |= 4), e.type == "childList") {
      let r = cp(n, e.previousSibling || e.target.previousSibling, -1), i = cp(n, e.nextSibling || e.target.nextSibling, 1);
      return {
        from: r ? n.posAfter(r) : n.posAtStart,
        to: i ? n.posBefore(i) : n.posAtEnd,
        typeOver: !1
      };
    } else
      return e.type == "characterData" ? { from: n.posAtStart, to: n.posAtEnd, typeOver: e.target.nodeValue == e.oldValue } : null;
  }
  setWindow(e) {
    e != this.win && (this.removeWindowListeners(this.win), this.win = e, this.addWindowListeners(this.win));
  }
  addWindowListeners(e) {
    e.addEventListener("resize", this.onResize), e.addEventListener("beforeprint", this.onPrint), e.addEventListener("scroll", this.onScroll), e.document.addEventListener("selectionchange", this.onSelectionChange);
  }
  removeWindowListeners(e) {
    e.removeEventListener("scroll", this.onScroll), e.removeEventListener("resize", this.onResize), e.removeEventListener("beforeprint", this.onPrint), e.document.removeEventListener("selectionchange", this.onSelectionChange);
  }
  destroy() {
    var e, n, r, i;
    this.stop(), (e = this.intersection) === null || e === void 0 || e.disconnect(), (n = this.gapIntersection) === null || n === void 0 || n.disconnect(), (r = this.resizeScroll) === null || r === void 0 || r.disconnect(), (i = this.resizeContent) === null || i === void 0 || i.disconnect();
    for (let o of this.scrollTargets)
      o.removeEventListener("scroll", this.onScroll);
    this.removeWindowListeners(this.win), clearTimeout(this.parentCheck), clearTimeout(this.resizeTimeout), this.win.cancelAnimationFrame(this.delayedFlush), this.win.cancelAnimationFrame(this.flushingAndroidKey);
  }
}
function cp(t, e, n) {
  for (; e; ) {
    let r = ue.get(e);
    if (r && r.parent == t)
      return r;
    let i = e.parentNode;
    e = i != t.dom ? i : n > 0 ? e.nextSibling : e.previousSibling;
  }
  return null;
}
function Qoe(t) {
  let e = null;
  function n(a) {
    a.preventDefault(), a.stopImmediatePropagation(), e = a.getTargetRanges()[0];
  }
  if (t.contentDOM.addEventListener("beforeinput", n, !0), t.dom.ownerDocument.execCommand("indent"), t.contentDOM.removeEventListener("beforeinput", n, !0), !e)
    return null;
  let r = e.startContainer, i = e.startOffset, o = e.endContainer, s = e.endOffset, l = t.docView.domAtPos(t.state.selection.main.anchor);
  return Es(l.node, l.offset, o, s) && ([r, i, o, s] = [o, s, r, i]), { anchorNode: r, anchorOffset: i, focusNode: o, focusOffset: s };
}
class I {
  get state() {
    return this.viewState.state;
  }
  get viewport() {
    return this.viewState.viewport;
  }
  get visibleRanges() {
    return this.viewState.visibleRanges;
  }
  get inView() {
    return this.viewState.inView;
  }
  get composing() {
    return this.inputState.composing > 0;
  }
  get compositionStarted() {
    return this.inputState.composing >= 0;
  }
  get root() {
    return this._root;
  }
  get win() {
    return this.dom.ownerDocument.defaultView || window;
  }
  constructor(e = {}) {
    this.plugins = [], this.pluginMap = /* @__PURE__ */ new Map(), this.editorAttrs = {}, this.contentAttrs = {}, this.bidiCache = [], this.destroyed = !1, this.updateState = 2, this.measureScheduled = -1, this.measureRequests = [], this.contentDOM = document.createElement("div"), this.scrollDOM = document.createElement("div"), this.scrollDOM.tabIndex = -1, this.scrollDOM.className = "cm-scroller", this.scrollDOM.appendChild(this.contentDOM), this.announceDOM = document.createElement("div"), this.announceDOM.style.cssText = "position: fixed; top: -10000px", this.announceDOM.setAttribute("aria-live", "polite"), this.dom = document.createElement("div"), this.dom.appendChild(this.announceDOM), this.dom.appendChild(this.scrollDOM);
    let { dispatch: n } = e;
    this.dispatchTransactions = e.dispatchTransactions || n && ((r) => r.forEach((i) => n(i, this))) || ((r) => this.update(r)), this.dispatch = this.dispatch.bind(this), this._root = e.root || zie(e.parent) || document, this.viewState = new lp(e.state || Y.create(e)), this.plugins = this.state.facet(_i).map((r) => new xa(r));
    for (let r of this.plugins)
      r.update(this);
    this.observer = new Xoe(this), this.inputState = new voe(this), this.inputState.ensureHandlers(this, this.plugins), this.docView = new Ud(this), this.mountStyles(), this.updateAttrs(), this.updateState = 0, this.requestMeasure(), e.parent && e.parent.appendChild(this.dom);
  }
  dispatch(...e) {
    let n = e.length == 1 && e[0] instanceof Se ? e : e.length == 1 && Array.isArray(e[0]) ? e[0] : [this.state.update(...e)];
    this.dispatchTransactions(n, this);
  }
  update(e) {
    if (this.updateState != 0)
      throw new Error("Calls to EditorView.update are not allowed while an update is in progress");
    let n = !1, r = !1, i, o = this.state;
    for (let f of e) {
      if (f.startState != o)
        throw new RangeError("Trying to update state with a transaction that doesn't start from the previous state.");
      o = f.state;
    }
    if (this.destroyed) {
      this.viewState.state = o;
      return;
    }
    let s = this.hasFocus, l = 0, a = null;
    e.some((f) => f.annotation(yy)) ? (this.inputState.notifiedFocused = s, l = 1) : s != this.inputState.notifiedFocused && (this.inputState.notifiedFocused = s, a = by(o, s), a || (l = 1));
    let c = this.observer.delayedAndroidKey, u = null;
    if (c ? (this.observer.clearDelayedAndroidKey(), u = this.observer.readChange(), (u && !this.state.doc.eq(o.doc) || !this.state.selection.eq(o.selection)) && (u = null)) : this.observer.clear(), o.facet(Y.phrases) != this.state.facet(Y.phrases))
      return this.setState(o);
    i = Ms.create(this, o, e), i.flags |= l;
    let h = this.viewState.scrollTarget;
    try {
      this.updateState = 2;
      for (let f of e) {
        if (h && (h = h.map(f.changes)), f.scrollIntoView) {
          let { main: d } = f.state.selection;
          h = new Ds(d.empty ? d : A.cursor(d.head, d.head > d.anchor ? -1 : 1));
        }
        for (let d of f.effects)
          d.is(zd) && (h = d.value);
      }
      this.viewState.update(i, h), this.bidiCache = Os.update(this.bidiCache, i.changes), i.empty || (this.updatePlugins(i), this.inputState.update(i)), n = this.docView.update(i), this.state.facet(ki) != this.styleModules && this.mountStyles(), r = this.updateAttrs(), this.showAnnouncements(e), this.docView.updateSelection(n, e.some((f) => f.isUserEvent("select.pointer")));
    } finally {
      this.updateState = 0;
    }
    if (i.startState.facet(Io) != i.state.facet(Io) && (this.viewState.mustMeasureContent = !0), (n || r || h || this.viewState.mustEnforceCursorAssoc || this.viewState.mustMeasureContent) && this.requestMeasure(), !i.empty)
      for (let f of this.state.facet(Ic))
        f(i);
    (a || u) && Promise.resolve().then(() => {
      a && this.state == a.startState && this.dispatch(a), u && !Cy(this, u) && c.force && Pr(this.contentDOM, c.key, c.keyCode);
    });
  }
  setState(e) {
    if (this.updateState != 0)
      throw new Error("Calls to EditorView.setState are not allowed while an update is in progress");
    if (this.destroyed) {
      this.viewState.state = e;
      return;
    }
    this.updateState = 2;
    let n = this.hasFocus;
    try {
      for (let r of this.plugins)
        r.destroy(this);
      this.viewState = new lp(e), this.plugins = e.facet(_i).map((r) => new xa(r)), this.pluginMap.clear();
      for (let r of this.plugins)
        r.update(this);
      this.docView = new Ud(this), this.inputState.ensureHandlers(this, this.plugins), this.mountStyles(), this.updateAttrs(), this.bidiCache = [];
    } finally {
      this.updateState = 0;
    }
    n && this.focus(), this.requestMeasure();
  }
  updatePlugins(e) {
    let n = e.startState.facet(_i), r = e.state.facet(_i);
    if (n != r) {
      let i = [];
      for (let o of r) {
        let s = n.indexOf(o);
        if (s < 0)
          i.push(new xa(o));
        else {
          let l = this.plugins[s];
          l.mustUpdate = e, i.push(l);
        }
      }
      for (let o of this.plugins)
        o.mustUpdate != e && o.destroy(this);
      this.plugins = i, this.pluginMap.clear(), this.inputState.ensureHandlers(this, this.plugins);
    } else
      for (let i of this.plugins)
        i.mustUpdate = e;
    for (let i = 0; i < this.plugins.length; i++)
      this.plugins[i].update(this);
  }
  measure(e = !0) {
    if (this.destroyed)
      return;
    this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.measureScheduled = 0, e && this.observer.forceFlush();
    let n = null, r = this.scrollDOM, { scrollTop: i } = r, { scrollAnchorPos: o, scrollAnchorHeight: s } = this.viewState;
    i != this.viewState.scrollTop && (s = -1), this.viewState.scrollAnchorHeight = -1;
    try {
      for (let l = 0; ; l++) {
        if (s < 0)
          if (I0(r))
            o = -1, s = this.viewState.heightMap.height;
          else {
            let d = this.viewState.scrollAnchorAt(i);
            o = d.from, s = d.top;
          }
        this.updateState = 1;
        let a = this.viewState.measure(this);
        if (!a && !this.measureRequests.length && this.viewState.scrollTarget == null)
          break;
        if (l > 5) {
          console.warn(this.measureRequests.length ? "Measure loop restarted more than 5 times" : "Viewport failed to stabilize");
          break;
        }
        let c = [];
        a & 4 || ([this.measureRequests, c] = [c, this.measureRequests]);
        let u = c.map((d) => {
          try {
            return d.read(this);
          } catch (p) {
            return pt(this.state, p), up;
          }
        }), h = Ms.create(this, this.state, []), f = !1;
        h.flags |= a, n ? n.flags |= a : n = h, this.updateState = 2, h.empty || (this.updatePlugins(h), this.inputState.update(h), this.updateAttrs(), f = this.docView.update(h));
        for (let d = 0; d < c.length; d++)
          if (u[d] != up)
            try {
              let p = c[d];
              p.write && p.write(u[d], this);
            } catch (p) {
              pt(this.state, p);
            }
        if (f && this.docView.updateSelection(!0), !h.viewportChanged && this.measureRequests.length == 0) {
          if (this.viewState.editorHeight)
            if (this.viewState.scrollTarget) {
              this.docView.scrollIntoView(this.viewState.scrollTarget), this.viewState.scrollTarget = null;
              continue;
            } else {
              let p = (o < 0 ? this.viewState.heightMap.height : this.viewState.lineBlockAt(o).top) - s;
              if (p > 1 || p < -1) {
                i = r.scrollTop = i + p, s = -1;
                continue;
              }
            }
          break;
        }
      }
    } finally {
      this.updateState = 0, this.measureScheduled = -1;
    }
    if (n && !n.empty)
      for (let l of this.state.facet(Ic))
        l(n);
  }
  get themeClasses() {
    return Vc + " " + (this.state.facet(zc) ? ky : _y) + " " + this.state.facet(Io);
  }
  updateAttrs() {
    let e = hp(this, Q0, {
      class: "cm-editor" + (this.hasFocus ? " cm-focused " : " ") + this.themeClasses
    }), n = {
      spellcheck: "false",
      autocorrect: "off",
      autocapitalize: "off",
      translate: "no",
      contenteditable: this.state.facet(vl) ? "true" : "false",
      class: "cm-content",
      style: `${P.tabSize}: ${this.state.tabSize}`,
      role: "textbox",
      "aria-multiline": "true"
    };
    this.state.readOnly && (n["aria-readonly"] = "true"), hp(this, Uu, n);
    let r = this.observer.ignore(() => {
      let i = Rc(this.contentDOM, this.contentAttrs, n), o = Rc(this.dom, this.editorAttrs, e);
      return i || o;
    });
    return this.editorAttrs = e, this.contentAttrs = n, r;
  }
  showAnnouncements(e) {
    let n = !0;
    for (let r of e)
      for (let i of r.effects)
        if (i.is(I.announce)) {
          n && (this.announceDOM.textContent = ""), n = !1;
          let o = this.announceDOM.appendChild(document.createElement("div"));
          o.textContent = i.value;
        }
  }
  mountStyles() {
    this.styleModules = this.state.facet(ki);
    let e = this.state.facet(I.cspNonce);
    Ln.mount(this.root, this.styleModules.concat(Woe).reverse(), e ? { nonce: e } : void 0);
  }
  readMeasured() {
    if (this.updateState == 2)
      throw new Error("Reading the editor layout isn't allowed during an update");
    this.updateState == 0 && this.measureScheduled > -1 && this.measure(!1);
  }
  requestMeasure(e) {
    if (this.measureScheduled < 0 && (this.measureScheduled = this.win.requestAnimationFrame(() => this.measure())), e) {
      if (this.measureRequests.indexOf(e) > -1)
        return;
      if (e.key != null) {
        for (let n = 0; n < this.measureRequests.length; n++)
          if (this.measureRequests[n].key === e.key) {
            this.measureRequests[n] = e;
            return;
          }
      }
      this.measureRequests.push(e);
    }
  }
  plugin(e) {
    let n = this.pluginMap.get(e);
    return (n === void 0 || n && n.spec != e) && this.pluginMap.set(e, n = this.plugins.find((r) => r.spec == e) || null), n && n.update(this).value;
  }
  get documentTop() {
    return this.contentDOM.getBoundingClientRect().top + this.viewState.paddingTop;
  }
  get documentPadding() {
    return { top: this.viewState.paddingTop, bottom: this.viewState.paddingBottom };
  }
  elementAtHeight(e) {
    return this.readMeasured(), this.viewState.elementAtHeight(e);
  }
  lineBlockAtHeight(e) {
    return this.readMeasured(), this.viewState.lineBlockAtHeight(e);
  }
  get viewportLineBlocks() {
    return this.viewState.viewportLines;
  }
  lineBlockAt(e) {
    return this.viewState.lineBlockAt(e);
  }
  get contentHeight() {
    return this.viewState.contentHeight;
  }
  moveByChar(e, n, r) {
    return ka(this, e, Zd(this, e, n, r));
  }
  moveByGroup(e, n) {
    return ka(this, e, Zd(this, e, n, (r) => yoe(this, e.head, r)));
  }
  moveToLineBoundary(e, n, r = !0) {
    return goe(this, e, n, r);
  }
  moveVertically(e, n, r) {
    return ka(this, e, boe(this, e, n, r));
  }
  domAtPos(e) {
    return this.docView.domAtPos(e);
  }
  posAtDOM(e, n = 0) {
    return this.docView.posFromDOM(e, n);
  }
  posAtCoords(e, n = !0) {
    return this.readMeasured(), uy(this, e, n);
  }
  coordsAtPos(e, n = 1) {
    this.readMeasured();
    let r = this.docView.coordsAt(e, n);
    if (!r || r.left == r.right)
      return r;
    let i = this.state.doc.lineAt(e), o = this.bidiSpans(i), s = o[Cn.find(o, e - i.from, -1, n)];
    return Hu(r, s.dir == ye.LTR == n > 0);
  }
  coordsForChar(e) {
    return this.readMeasured(), this.docView.coordsForChar(e);
  }
  get defaultCharacterWidth() {
    return this.viewState.heightOracle.charWidth;
  }
  get defaultLineHeight() {
    return this.viewState.heightOracle.lineHeight;
  }
  get textDirection() {
    return this.viewState.defaultTextDirection;
  }
  textDirectionAt(e) {
    return !this.state.facet(J0) || e < this.viewport.from || e > this.viewport.to ? this.textDirection : (this.readMeasured(), this.docView.textDirectionAt(e));
  }
  get lineWrapping() {
    return this.viewState.heightOracle.lineWrapping;
  }
  bidiSpans(e) {
    if (e.length > ese)
      return sy(e.length);
    let n = this.textDirectionAt(e.from), r;
    for (let o of this.bidiCache)
      if (o.from == e.from && o.dir == n && (o.fresh || oy(o.isolates, r = Vd(this, e.from, e.to))))
        return o.order;
    r || (r = Vd(this, e.from, e.to));
    let i = roe(e.text, n, r);
    return this.bidiCache.push(new Os(e.from, e.to, n, r, !0, i)), i;
  }
  get hasFocus() {
    var e;
    return (this.dom.ownerDocument.hasFocus() || P.safari && ((e = this.inputState) === null || e === void 0 ? void 0 : e.lastContextMenu) > Date.now() - 3e4) && this.root.activeElement == this.contentDOM;
  }
  focus() {
    this.observer.ignore(() => {
      R0(this.contentDOM), this.docView.updateSelection();
    });
  }
  setRoot(e) {
    this._root != e && (this._root = e, this.observer.setWindow((e.nodeType == 9 ? e : e.ownerDocument).defaultView || window), this.mountStyles());
  }
  destroy() {
    for (let e of this.plugins)
      e.destroy(this);
    this.plugins = [], this.inputState.destroy(), this.dom.remove(), this.observer.destroy(), this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.destroyed = !0;
  }
  static scrollIntoView(e, n = {}) {
    return zd.of(new Ds(typeof e == "number" ? A.cursor(e) : e, n.y, n.x, n.yMargin, n.xMargin));
  }
  static domEventHandlers(e) {
    return Ee.define(() => ({}), { eventHandlers: e });
  }
  static theme(e, n) {
    let r = Ln.newName(), i = [Io.of(r), ki.of(Uc(`.${r}`, e))];
    return n && n.dark && i.push(zc.of(!0)), i;
  }
  static baseTheme(e) {
    return si.lowest(ki.of(Uc("." + Vc, e, wy)));
  }
  static findFromDOM(e) {
    var n;
    let r = e.querySelector(".cm-content"), i = r && ue.get(r) || ue.get(e);
    return ((n = i == null ? void 0 : i.rootView) === null || n === void 0 ? void 0 : n.view) || null;
  }
}
I.styleModule = ki;
I.inputHandler = Y0;
I.focusChangeEffect = Z0;
I.perLineTextDirection = J0;
I.exceptionSink = K0;
I.updateListener = Ic;
I.editable = vl;
I.mouseSelectionStyle = G0;
I.dragMovesSelection = j0;
I.clickAddsSelectionRange = W0;
I.decorations = Ki;
I.atomicRanges = Wu;
I.bidiIsolatedRanges = ey;
I.scrollMargins = ty;
I.darkTheme = zc;
I.cspNonce = /* @__PURE__ */ N.define({ combine: (t) => t.length ? t[0] : "" });
I.contentAttributes = Uu;
I.editorAttributes = Q0;
I.lineWrapping = /* @__PURE__ */ I.contentAttributes.of({ class: "cm-lineWrapping" });
I.announce = /* @__PURE__ */ j.define();
const ese = 4096, up = {};
class Os {
  constructor(e, n, r, i, o, s) {
    this.from = e, this.to = n, this.dir = r, this.isolates = i, this.fresh = o, this.order = s;
  }
  static update(e, n) {
    if (n.empty && !e.some((o) => o.fresh))
      return e;
    let r = [], i = e.length ? e[e.length - 1].dir : ye.LTR;
    for (let o = Math.max(0, e.length - 10); o < e.length; o++) {
      let s = e[o];
      s.dir == i && !n.touchesRange(s.from, s.to) && r.push(new Os(n.mapPos(s.from, 1), n.mapPos(s.to, -1), s.dir, s.isolates, !1, s.order));
    }
    return r;
  }
}
function hp(t, e, n) {
  for (let r = t.state.facet(e), i = r.length - 1; i >= 0; i--) {
    let o = r[i], s = typeof o == "function" ? o(t) : o;
    s && Oc(s, n);
  }
  return n;
}
const tse = P.mac ? "mac" : P.windows ? "win" : P.linux ? "linux" : "key";
function nse(t, e) {
  const n = t.split(/-(?!$)/);
  let r = n[n.length - 1];
  r == "Space" && (r = " ");
  let i, o, s, l;
  for (let a = 0; a < n.length - 1; ++a) {
    const c = n[a];
    if (/^(cmd|meta|m)$/i.test(c))
      l = !0;
    else if (/^a(lt)?$/i.test(c))
      i = !0;
    else if (/^(c|ctrl|control)$/i.test(c))
      o = !0;
    else if (/^s(hift)?$/i.test(c))
      s = !0;
    else if (/^mod$/i.test(c))
      e == "mac" ? l = !0 : o = !0;
    else
      throw new Error("Unrecognized modifier name: " + c);
  }
  return i && (r = "Alt-" + r), o && (r = "Ctrl-" + r), l && (r = "Meta-" + r), s && (r = "Shift-" + r), r;
}
function No(t, e, n) {
  return e.altKey && (t = "Alt-" + t), e.ctrlKey && (t = "Ctrl-" + t), e.metaKey && (t = "Meta-" + t), n !== !1 && e.shiftKey && (t = "Shift-" + t), t;
}
const rse = /* @__PURE__ */ si.default(/* @__PURE__ */ I.domEventHandlers({
  keydown(t, e) {
    return Sy(Ay(e.state), t, e, "editor");
  }
})), xl = /* @__PURE__ */ N.define({ enables: rse }), fp = /* @__PURE__ */ new WeakMap();
function Ay(t) {
  let e = t.facet(xl), n = fp.get(e);
  return n || fp.set(e, n = sse(e.reduce((r, i) => r.concat(i), []))), n;
}
function ise(t, e, n) {
  return Sy(Ay(t.state), e, t, n);
}
let xn = null;
const ose = 4e3;
function sse(t, e = tse) {
  let n = /* @__PURE__ */ Object.create(null), r = /* @__PURE__ */ Object.create(null), i = (s, l) => {
    let a = r[s];
    if (a == null)
      r[s] = l;
    else if (a != l)
      throw new Error("Key binding " + s + " is used both as a regular binding and as a multi-stroke prefix");
  }, o = (s, l, a, c, u) => {
    var h, f;
    let d = n[s] || (n[s] = /* @__PURE__ */ Object.create(null)), p = l.split(/ (?!$)/).map((y) => nse(y, e));
    for (let y = 1; y < p.length; y++) {
      let b = p.slice(0, y).join(" ");
      i(b, !0), d[b] || (d[b] = {
        preventDefault: !0,
        stopPropagation: !1,
        run: [(k) => {
          let x = xn = { view: k, prefix: b, scope: s };
          return setTimeout(() => {
            xn == x && (xn = null);
          }, ose), !0;
        }]
      });
    }
    let m = p.join(" ");
    i(m, !1);
    let g = d[m] || (d[m] = {
      preventDefault: !1,
      stopPropagation: !1,
      run: ((f = (h = d._any) === null || h === void 0 ? void 0 : h.run) === null || f === void 0 ? void 0 : f.slice()) || []
    });
    a && g.run.push(a), c && (g.preventDefault = !0), u && (g.stopPropagation = !0);
  };
  for (let s of t) {
    let l = s.scope ? s.scope.split(" ") : ["editor"];
    if (s.any)
      for (let c of l) {
        let u = n[c] || (n[c] = /* @__PURE__ */ Object.create(null));
        u._any || (u._any = { preventDefault: !1, stopPropagation: !1, run: [] });
        for (let h in u)
          u[h].run.push(s.any);
      }
    let a = s[e] || s.key;
    if (!!a)
      for (let c of l)
        o(c, a, s.run, s.preventDefault, s.stopPropagation), s.shift && o(c, "Shift-" + a, s.shift, s.preventDefault, s.stopPropagation);
  }
  return n;
}
function Sy(t, e, n, r) {
  let i = Pie(e), o = Le(i, 0), s = ft(o) == i.length && i != " ", l = "", a = !1, c = !1, u = !1;
  xn && xn.view == n && xn.scope == r && (l = xn.prefix + " ", fy.indexOf(e.keyCode) < 0 && (c = !0, xn = null));
  let h = /* @__PURE__ */ new Set(), f = (g) => {
    if (g) {
      for (let y of g.run)
        if (!h.has(y) && (h.add(y), y(n, e)))
          return g.stopPropagation && (u = !0), !0;
      g.preventDefault && (g.stopPropagation && (u = !0), c = !0);
    }
    return !1;
  }, d = t[r], p, m;
  return d && (f(d[l + No(i, e, !s)]) ? a = !0 : s && (e.altKey || e.metaKey || e.ctrlKey) && !(P.windows && e.ctrlKey && e.altKey) && (p = In[e.keyCode]) && p != i ? (f(d[l + No(p, e, !0)]) || e.shiftKey && (m = ji[e.keyCode]) != i && m != p && f(d[l + No(m, e, !1)])) && (a = !0) : s && e.shiftKey && f(d[l + No(i, e, !0)]) && (a = !0), !a && f(d._any) && (a = !0)), c && (a = !0), a && u && e.stopPropagation(), a;
}
class ao {
  constructor(e, n, r, i, o) {
    this.className = e, this.left = n, this.top = r, this.width = i, this.height = o;
  }
  draw() {
    let e = document.createElement("div");
    return e.className = this.className, this.adjust(e), e;
  }
  update(e, n) {
    return n.className != this.className ? !1 : (this.adjust(e), !0);
  }
  adjust(e) {
    e.style.left = this.left + "px", e.style.top = this.top + "px", this.width != null && (e.style.width = this.width + "px"), e.style.height = this.height + "px";
  }
  eq(e) {
    return this.left == e.left && this.top == e.top && this.width == e.width && this.height == e.height && this.className == e.className;
  }
  static forRange(e, n, r) {
    if (r.empty) {
      let i = e.coordsAtPos(r.head, r.assoc || 1);
      if (!i)
        return [];
      let o = Ey(e);
      return [new ao(n, i.left - o.left, i.top - o.top, null, i.bottom - i.top)];
    } else
      return lse(e, n, r);
  }
}
function Ey(t) {
  let e = t.scrollDOM.getBoundingClientRect();
  return { left: (t.textDirection == ye.LTR ? e.left : e.right - t.scrollDOM.clientWidth) - t.scrollDOM.scrollLeft, top: e.top - t.scrollDOM.scrollTop };
}
function dp(t, e, n) {
  let r = A.cursor(e);
  return {
    from: Math.max(n.from, t.moveToLineBoundary(r, !1, !0).from),
    to: Math.min(n.to, t.moveToLineBoundary(r, !0, !0).from),
    type: be.Text
  };
}
function lse(t, e, n) {
  if (n.to <= t.viewport.from || n.from >= t.viewport.to)
    return [];
  let r = Math.max(n.from, t.viewport.from), i = Math.min(n.to, t.viewport.to), o = t.textDirection == ye.LTR, s = t.contentDOM, l = s.getBoundingClientRect(), a = Ey(t), c = s.querySelector(".cm-line"), u = c && window.getComputedStyle(c), h = l.left + (u ? parseInt(u.paddingLeft) + Math.min(0, parseInt(u.textIndent)) : 0), f = l.right - (u ? parseInt(u.paddingRight) : 0), d = qc(t, r), p = qc(t, i), m = d.type == be.Text ? d : null, g = p.type == be.Text ? p : null;
  if (m && (t.lineWrapping || d.widgetLineBreaks) && (m = dp(t, r, m)), g && (t.lineWrapping || p.widgetLineBreaks) && (g = dp(t, i, g)), m && g && m.from == g.from)
    return b(k(n.from, n.to, m));
  {
    let w = m ? k(n.from, null, m) : x(d, !1), v = g ? k(null, n.to, g) : x(p, !0), C = [];
    return (m || d).to < (g || p).from - (m && g ? 1 : 0) || d.widgetLineBreaks > 1 && w.bottom + t.defaultLineHeight / 2 < v.top ? C.push(y(h, w.bottom, f, v.top)) : w.bottom < v.top && t.elementAtHeight((w.bottom + v.top) / 2).type == be.Text && (w.bottom = v.top = (w.bottom + v.top) / 2), b(w).concat(C).concat(b(v));
  }
  function y(w, v, C, L) {
    return new ao(e, w - a.left, v - a.top - 0.01, C - w, L - v + 0.01);
  }
  function b({ top: w, bottom: v, horizontal: C }) {
    let L = [];
    for (let R = 0; R < C.length; R += 2)
      L.push(y(C[R], w, C[R + 1], v));
    return L;
  }
  function k(w, v, C) {
    let L = 1e9, R = -1e9, T = [];
    function H(S, z, $, he, ie) {
      let ne = t.coordsAtPos(S, S == C.to ? -2 : 2), oe = t.coordsAtPos($, $ == C.from ? 2 : -2);
      !ne || !oe || (L = Math.min(ne.top, oe.top, L), R = Math.max(ne.bottom, oe.bottom, R), ie == ye.LTR ? T.push(o && z ? h : ne.left, o && he ? f : oe.right) : T.push(!o && he ? h : oe.left, !o && z ? f : ne.right));
    }
    let Q = w != null ? w : C.from, G = v != null ? v : C.to;
    for (let S of t.visibleRanges)
      if (S.to > Q && S.from < G)
        for (let z = Math.max(S.from, Q), $ = Math.min(S.to, G); ; ) {
          let he = t.state.doc.lineAt(z);
          for (let ie of t.bidiSpans(he)) {
            let ne = ie.from + he.from, oe = ie.to + he.from;
            if (ne >= $)
              break;
            oe > z && H(Math.max(ne, z), w == null && ne <= Q, Math.min(oe, $), v == null && oe >= G, ie.dir);
          }
          if (z = he.to + 1, z >= $)
            break;
        }
    return T.length == 0 && H(Q, w == null, G, v == null, t.textDirection), { top: L, bottom: R, horizontal: T };
  }
  function x(w, v) {
    let C = l.top + (v ? w.top : w.bottom);
    return { top: C, bottom: C, horizontal: [] };
  }
}
function ase(t, e) {
  return t.constructor == e.constructor && t.eq(e);
}
class cse {
  constructor(e, n) {
    this.view = e, this.layer = n, this.drawn = [], this.measureReq = { read: this.measure.bind(this), write: this.draw.bind(this) }, this.dom = e.scrollDOM.appendChild(document.createElement("div")), this.dom.classList.add("cm-layer"), n.above && this.dom.classList.add("cm-layer-above"), n.class && this.dom.classList.add(n.class), this.dom.setAttribute("aria-hidden", "true"), this.setOrder(e.state), e.requestMeasure(this.measureReq), n.mount && n.mount(this.dom, e);
  }
  update(e) {
    e.startState.facet(ls) != e.state.facet(ls) && this.setOrder(e.state), (this.layer.update(e, this.dom) || e.geometryChanged) && e.view.requestMeasure(this.measureReq);
  }
  setOrder(e) {
    let n = 0, r = e.facet(ls);
    for (; n < r.length && r[n] != this.layer; )
      n++;
    this.dom.style.zIndex = String((this.layer.above ? 150 : -1) - n);
  }
  measure() {
    return this.layer.markers(this.view);
  }
  draw(e) {
    if (e.length != this.drawn.length || e.some((n, r) => !ase(n, this.drawn[r]))) {
      let n = this.dom.firstChild, r = 0;
      for (let i of e)
        i.update && n && i.constructor && this.drawn[r].constructor && i.update(n, this.drawn[r]) ? (n = n.nextSibling, r++) : this.dom.insertBefore(i.draw(), n);
      for (; n; ) {
        let i = n.nextSibling;
        n.remove(), n = i;
      }
      this.drawn = e;
    }
  }
  destroy() {
    this.layer.destroy && this.layer.destroy(this.dom, this.view), this.dom.remove();
  }
}
const ls = /* @__PURE__ */ N.define();
function Ty(t) {
  return [
    Ee.define((e) => new cse(e, t)),
    ls.of(t)
  ];
}
const Dy = !P.ios, Zi = /* @__PURE__ */ N.define({
  combine(t) {
    return Xt(t, {
      cursorBlinkRate: 1200,
      drawRangeCursor: !0
    }, {
      cursorBlinkRate: (e, n) => Math.min(e, n),
      drawRangeCursor: (e, n) => e || n
    });
  }
});
function use(t = {}) {
  return [
    Zi.of(t),
    hse,
    fse,
    dse,
    X0.of(!0)
  ];
}
function My(t) {
  return t.startState.facet(Zi) != t.state.facet(Zi);
}
const hse = /* @__PURE__ */ Ty({
  above: !0,
  markers(t) {
    let { state: e } = t, n = e.facet(Zi), r = [];
    for (let i of e.selection.ranges) {
      let o = i == e.selection.main;
      if (i.empty ? !o || Dy : n.drawRangeCursor) {
        let s = o ? "cm-cursor cm-cursor-primary" : "cm-cursor cm-cursor-secondary", l = i.empty ? i : A.cursor(i.head, i.head > i.anchor ? -1 : 1);
        for (let a of ao.forRange(t, s, l))
          r.push(a);
      }
    }
    return r;
  },
  update(t, e) {
    t.transactions.some((r) => r.selection) && (e.style.animationName = e.style.animationName == "cm-blink" ? "cm-blink2" : "cm-blink");
    let n = My(t);
    return n && pp(t.state, e), t.docChanged || t.selectionSet || n;
  },
  mount(t, e) {
    pp(e.state, t);
  },
  class: "cm-cursorLayer"
});
function pp(t, e) {
  e.style.animationDuration = t.facet(Zi).cursorBlinkRate + "ms";
}
const fse = /* @__PURE__ */ Ty({
  above: !1,
  markers(t) {
    return t.state.selection.ranges.map((e) => e.empty ? [] : ao.forRange(t, "cm-selectionBackground", e)).reduce((e, n) => e.concat(n));
  },
  update(t, e) {
    return t.docChanged || t.selectionSet || t.viewportChanged || My(t);
  },
  class: "cm-selectionLayer"
}), Oy = {
  ".cm-line": {
    "& ::selection": { backgroundColor: "transparent !important" },
    "&::selection": { backgroundColor: "transparent !important" }
  }
};
Dy && (Oy[".cm-line"].caretColor = "transparent !important");
const dse = /* @__PURE__ */ si.highest(/* @__PURE__ */ I.theme(Oy)), Ry = /* @__PURE__ */ j.define({
  map(t, e) {
    return t == null ? null : e.mapPos(t);
  }
}), Ci = /* @__PURE__ */ Be.define({
  create() {
    return null;
  },
  update(t, e) {
    return t != null && (t = e.changes.mapPos(t)), e.effects.reduce((n, r) => r.is(Ry) ? r.value : n, t);
  }
}), pse = /* @__PURE__ */ Ee.fromClass(class {
  constructor(t) {
    this.view = t, this.cursor = null, this.measureReq = { read: this.readPos.bind(this), write: this.drawCursor.bind(this) };
  }
  update(t) {
    var e;
    let n = t.state.field(Ci);
    n == null ? this.cursor != null && ((e = this.cursor) === null || e === void 0 || e.remove(), this.cursor = null) : (this.cursor || (this.cursor = this.view.scrollDOM.appendChild(document.createElement("div")), this.cursor.className = "cm-dropCursor"), (t.startState.field(Ci) != n || t.docChanged || t.geometryChanged) && this.view.requestMeasure(this.measureReq));
  }
  readPos() {
    let t = this.view.state.field(Ci), e = t != null && this.view.coordsAtPos(t);
    if (!e)
      return null;
    let n = this.view.scrollDOM.getBoundingClientRect();
    return {
      left: e.left - n.left + this.view.scrollDOM.scrollLeft,
      top: e.top - n.top + this.view.scrollDOM.scrollTop,
      height: e.bottom - e.top
    };
  }
  drawCursor(t) {
    this.cursor && (t ? (this.cursor.style.left = t.left + "px", this.cursor.style.top = t.top + "px", this.cursor.style.height = t.height + "px") : this.cursor.style.left = "-100000px");
  }
  destroy() {
    this.cursor && this.cursor.remove();
  }
  setDropPos(t) {
    this.view.state.field(Ci) != t && this.view.dispatch({ effects: Ry.of(t) });
  }
}, {
  eventHandlers: {
    dragover(t) {
      this.setDropPos(this.view.posAtCoords({ x: t.clientX, y: t.clientY }));
    },
    dragleave(t) {
      (t.target == this.view.contentDOM || !this.view.contentDOM.contains(t.relatedTarget)) && this.setDropPos(null);
    },
    dragend() {
      this.setDropPos(null);
    },
    drop() {
      this.setDropPos(null);
    }
  }
});
function mse() {
  return [Ci, pse];
}
function mp(t, e, n, r, i) {
  e.lastIndex = 0;
  for (let o = t.iterRange(n, r), s = n, l; !o.next().done; s += o.value.length)
    if (!o.lineBreak)
      for (; l = e.exec(o.value); )
        i(s + l.index, l);
}
function gse(t, e) {
  let n = t.visibleRanges;
  if (n.length == 1 && n[0].from == t.viewport.from && n[0].to == t.viewport.to)
    return n;
  let r = [];
  for (let { from: i, to: o } of n)
    i = Math.max(t.state.doc.lineAt(i).from, i - e), o = Math.min(t.state.doc.lineAt(o).to, o + e), r.length && r[r.length - 1].to >= i ? r[r.length - 1].to = o : r.push({ from: i, to: o });
  return r;
}
class yse {
  constructor(e) {
    const { regexp: n, decoration: r, decorate: i, boundary: o, maxLength: s = 1e3 } = e;
    if (!n.global)
      throw new RangeError("The regular expression given to MatchDecorator should have its 'g' flag set");
    if (this.regexp = n, i)
      this.addMatch = (l, a, c, u) => i(u, c, c + l[0].length, l, a);
    else if (typeof r == "function")
      this.addMatch = (l, a, c, u) => {
        let h = r(l, a, c);
        h && u(c, c + l[0].length, h);
      };
    else if (r)
      this.addMatch = (l, a, c, u) => u(c, c + l[0].length, r);
    else
      throw new RangeError("Either 'decorate' or 'decoration' should be provided to MatchDecorator");
    this.boundary = o, this.maxLength = s;
  }
  createDeco(e) {
    let n = new Rn(), r = n.add.bind(n);
    for (let { from: i, to: o } of gse(e, this.maxLength))
      mp(e.state.doc, this.regexp, i, o, (s, l) => this.addMatch(l, e, s, r));
    return n.finish();
  }
  updateDeco(e, n) {
    let r = 1e9, i = -1;
    return e.docChanged && e.changes.iterChanges((o, s, l, a) => {
      a > e.view.viewport.from && l < e.view.viewport.to && (r = Math.min(l, r), i = Math.max(a, i));
    }), e.viewportChanged || i - r > 1e3 ? this.createDeco(e.view) : i > -1 ? this.updateRange(e.view, n.map(e.changes), r, i) : n;
  }
  updateRange(e, n, r, i) {
    for (let o of e.visibleRanges) {
      let s = Math.max(o.from, r), l = Math.min(o.to, i);
      if (l > s) {
        let a = e.state.doc.lineAt(s), c = a.to < l ? e.state.doc.lineAt(l) : a, u = Math.max(o.from, a.from), h = Math.min(o.to, c.to);
        if (this.boundary) {
          for (; s > a.from; s--)
            if (this.boundary.test(a.text[s - 1 - a.from])) {
              u = s;
              break;
            }
          for (; l < c.to; l++)
            if (this.boundary.test(c.text[l - c.from])) {
              h = l;
              break;
            }
        }
        let f = [], d, p = (m, g, y) => f.push(y.range(m, g));
        if (a == c)
          for (this.regexp.lastIndex = u - a.from; (d = this.regexp.exec(a.text)) && d.index < h - a.from; )
            this.addMatch(d, e, d.index + a.from, p);
        else
          mp(e.state.doc, this.regexp, u, h, (m, g) => this.addMatch(g, e, m, p));
        n = n.update({ filterFrom: u, filterTo: h, filter: (m, g) => m < u || g > h, add: f });
      }
    }
    return n;
  }
}
const Wc = /x/.unicode != null ? "gu" : "g", bse = /* @__PURE__ */ new RegExp(`[\0-\b
-\x7F-\x9F\xAD\u061C\u200B\u200E\u200F\u2028\u2029\u202D\u202E\u2066\u2067\u2069\uFEFF\uFFF9-\uFFFC]`, Wc), vse = {
  0: "null",
  7: "bell",
  8: "backspace",
  10: "newline",
  11: "vertical tab",
  13: "carriage return",
  27: "escape",
  8203: "zero width space",
  8204: "zero width non-joiner",
  8205: "zero width joiner",
  8206: "left-to-right mark",
  8207: "right-to-left mark",
  8232: "line separator",
  8237: "left-to-right override",
  8238: "right-to-left override",
  8294: "left-to-right isolate",
  8295: "right-to-left isolate",
  8297: "pop directional isolate",
  8233: "paragraph separator",
  65279: "zero width no-break space",
  65532: "object replacement"
};
let Aa = null;
function xse() {
  var t;
  if (Aa == null && typeof document < "u" && document.body) {
    let e = document.body.style;
    Aa = ((t = e.tabSize) !== null && t !== void 0 ? t : e.MozTabSize) != null;
  }
  return Aa || !1;
}
const as = /* @__PURE__ */ N.define({
  combine(t) {
    let e = Xt(t, {
      render: null,
      specialChars: bse,
      addSpecialChars: null
    });
    return (e.replaceTabs = !xse()) && (e.specialChars = new RegExp("	|" + e.specialChars.source, Wc)), e.addSpecialChars && (e.specialChars = new RegExp(e.specialChars.source + "|" + e.addSpecialChars.source, Wc)), e;
  }
});
function _se(t = {}) {
  return [as.of(t), kse()];
}
let gp = null;
function kse() {
  return gp || (gp = Ee.fromClass(class {
    constructor(t) {
      this.view = t, this.decorations = V.none, this.decorationCache = /* @__PURE__ */ Object.create(null), this.decorator = this.makeDecorator(t.state.facet(as)), this.decorations = this.decorator.createDeco(t);
    }
    makeDecorator(t) {
      return new yse({
        regexp: t.specialChars,
        decoration: (e, n, r) => {
          let { doc: i } = n.state, o = Le(e[0], 0);
          if (o == 9) {
            let s = i.lineAt(r), l = n.state.tabSize, a = li(s.text, l, r - s.from);
            return V.replace({ widget: new Sse((l - a % l) * this.view.defaultCharacterWidth) });
          }
          return this.decorationCache[o] || (this.decorationCache[o] = V.replace({ widget: new Ase(t, o) }));
        },
        boundary: t.replaceTabs ? void 0 : /[^]/
      });
    }
    update(t) {
      let e = t.state.facet(as);
      t.startState.facet(as) != e ? (this.decorator = this.makeDecorator(e), this.decorations = this.decorator.createDeco(t.view)) : this.decorations = this.decorator.updateDeco(t, this.decorations);
    }
  }, {
    decorations: (t) => t.decorations
  }));
}
const wse = "\u2022";
function Cse(t) {
  return t >= 32 ? wse : t == 10 ? "\u2424" : String.fromCharCode(9216 + t);
}
class Ase extends qn {
  constructor(e, n) {
    super(), this.options = e, this.code = n;
  }
  eq(e) {
    return e.code == this.code;
  }
  toDOM(e) {
    let n = Cse(this.code), r = e.state.phrase("Control character") + " " + (vse[this.code] || "0x" + this.code.toString(16)), i = this.options.render && this.options.render(this.code, r, n);
    if (i)
      return i;
    let o = document.createElement("span");
    return o.textContent = n, o.title = r, o.setAttribute("aria-label", r), o.className = "cm-specialChar", o;
  }
  ignoreEvent() {
    return !1;
  }
}
class Sse extends qn {
  constructor(e) {
    super(), this.width = e;
  }
  eq(e) {
    return e.width == this.width;
  }
  toDOM() {
    let e = document.createElement("span");
    return e.textContent = "	", e.className = "cm-tab", e.style.width = this.width + "px", e;
  }
  ignoreEvent() {
    return !1;
  }
}
function Ese() {
  return Dse;
}
const Tse = /* @__PURE__ */ V.line({ class: "cm-activeLine" }), Dse = /* @__PURE__ */ Ee.fromClass(class {
  constructor(t) {
    this.decorations = this.getDeco(t);
  }
  update(t) {
    (t.docChanged || t.selectionSet) && (this.decorations = this.getDeco(t.view));
  }
  getDeco(t) {
    let e = -1, n = [];
    for (let r of t.state.selection.ranges) {
      let i = t.lineBlockAt(r.head);
      i.from > e && (n.push(Tse.range(i.from)), e = i.from);
    }
    return V.set(n);
  }
}, {
  decorations: (t) => t.decorations
}), jc = 2e3;
function Mse(t, e, n) {
  let r = Math.min(e.line, n.line), i = Math.max(e.line, n.line), o = [];
  if (e.off > jc || n.off > jc || e.col < 0 || n.col < 0) {
    let s = Math.min(e.off, n.off), l = Math.max(e.off, n.off);
    for (let a = r; a <= i; a++) {
      let c = t.doc.line(a);
      c.length <= l && o.push(A.range(c.from + s, c.to + l));
    }
  } else {
    let s = Math.min(e.col, n.col), l = Math.max(e.col, n.col);
    for (let a = r; a <= i; a++) {
      let c = t.doc.line(a), u = Cc(c.text, s, t.tabSize, !0);
      if (u < 0)
        o.push(A.cursor(c.to));
      else {
        let h = Cc(c.text, l, t.tabSize);
        o.push(A.range(c.from + u, c.from + h));
      }
    }
  }
  return o;
}
function Ose(t, e) {
  let n = t.coordsAtPos(t.viewport.from);
  return n ? Math.round(Math.abs((n.left - e) / t.defaultCharacterWidth)) : -1;
}
function yp(t, e) {
  let n = t.posAtCoords({ x: e.clientX, y: e.clientY }, !1), r = t.state.doc.lineAt(n), i = n - r.from, o = i > jc ? -1 : i == r.length ? Ose(t, e.clientX) : li(r.text, t.state.tabSize, n - r.from);
  return { line: r.number, col: o, off: i };
}
function Rse(t, e) {
  let n = yp(t, e), r = t.state.selection;
  return n ? {
    update(i) {
      if (i.docChanged) {
        let o = i.changes.mapPos(i.startState.doc.line(n.line).from), s = i.state.doc.lineAt(o);
        n = { line: s.number, col: n.col, off: Math.min(n.off, s.length) }, r = r.map(i.changes);
      }
    },
    get(i, o, s) {
      let l = yp(t, i);
      if (!l)
        return r;
      let a = Mse(t.state, n, l);
      return a.length ? s ? A.create(a.concat(r.ranges)) : A.create(a) : r;
    }
  } : null;
}
function Lse(t) {
  let e = (t == null ? void 0 : t.eventFilter) || ((n) => n.altKey && n.button == 0);
  return I.mouseSelectionStyle.of((n, r) => e(r) ? Rse(n, r) : null);
}
const Ise = {
  Alt: [18, (t) => !!t.altKey],
  Control: [17, (t) => !!t.ctrlKey],
  Shift: [16, (t) => !!t.shiftKey],
  Meta: [91, (t) => !!t.metaKey]
}, Nse = { style: "cursor: crosshair" };
function Pse(t = {}) {
  let [e, n] = Ise[t.key || "Alt"], r = Ee.fromClass(class {
    constructor(i) {
      this.view = i, this.isDown = !1;
    }
    set(i) {
      this.isDown != i && (this.isDown = i, this.view.update([]));
    }
  }, {
    eventHandlers: {
      keydown(i) {
        this.set(i.keyCode == e || n(i));
      },
      keyup(i) {
        (i.keyCode == e || !n(i)) && this.set(!1);
      },
      mousemove(i) {
        this.set(n(i));
      }
    }
  });
  return [
    r,
    I.contentAttributes.of((i) => {
      var o;
      return !((o = i.plugin(r)) === null || o === void 0) && o.isDown ? Nse : null;
    })
  ];
}
const Po = "-10000px";
class Ly {
  constructor(e, n, r) {
    this.facet = n, this.createTooltipView = r, this.input = e.state.facet(n), this.tooltips = this.input.filter((i) => i), this.tooltipViews = this.tooltips.map(r);
  }
  update(e) {
    var n;
    let r = e.state.facet(this.facet), i = r.filter((s) => s);
    if (r === this.input) {
      for (let s of this.tooltipViews)
        s.update && s.update(e);
      return !1;
    }
    let o = [];
    for (let s = 0; s < i.length; s++) {
      let l = i[s], a = -1;
      if (!!l) {
        for (let c = 0; c < this.tooltips.length; c++) {
          let u = this.tooltips[c];
          u && u.create == l.create && (a = c);
        }
        if (a < 0)
          o[s] = this.createTooltipView(l);
        else {
          let c = o[s] = this.tooltipViews[a];
          c.update && c.update(e);
        }
      }
    }
    for (let s of this.tooltipViews)
      o.indexOf(s) < 0 && (s.dom.remove(), (n = s.destroy) === null || n === void 0 || n.call(s));
    return this.input = r, this.tooltips = i, this.tooltipViews = o, !0;
  }
}
function Bse(t) {
  let { win: e } = t;
  return { top: 0, left: 0, bottom: e.innerHeight, right: e.innerWidth };
}
const Sa = /* @__PURE__ */ N.define({
  combine: (t) => {
    var e, n, r;
    return {
      position: P.ios ? "absolute" : ((e = t.find((i) => i.position)) === null || e === void 0 ? void 0 : e.position) || "fixed",
      parent: ((n = t.find((i) => i.parent)) === null || n === void 0 ? void 0 : n.parent) || null,
      tooltipSpace: ((r = t.find((i) => i.tooltipSpace)) === null || r === void 0 ? void 0 : r.tooltipSpace) || Bse
    };
  }
}), bp = /* @__PURE__ */ new WeakMap(), Iy = /* @__PURE__ */ Ee.fromClass(class {
  constructor(t) {
    this.view = t, this.inView = !0, this.lastTransaction = 0, this.measureTimeout = -1;
    let e = t.state.facet(Sa);
    this.position = e.position, this.parent = e.parent, this.classes = t.themeClasses, this.createContainer(), this.measureReq = { read: this.readMeasure.bind(this), write: this.writeMeasure.bind(this), key: this }, this.manager = new Ly(t, Gu, (n) => this.createTooltip(n)), this.intersectionObserver = typeof IntersectionObserver == "function" ? new IntersectionObserver((n) => {
      Date.now() > this.lastTransaction - 50 && n.length > 0 && n[n.length - 1].intersectionRatio < 1 && this.measureSoon();
    }, { threshold: [1] }) : null, this.observeIntersection(), t.win.addEventListener("resize", this.measureSoon = this.measureSoon.bind(this)), this.maybeMeasure();
  }
  createContainer() {
    this.parent ? (this.container = document.createElement("div"), this.container.style.position = "relative", this.container.className = this.view.themeClasses, this.parent.appendChild(this.container)) : this.container = this.view.dom;
  }
  observeIntersection() {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
      for (let t of this.manager.tooltipViews)
        this.intersectionObserver.observe(t.dom);
    }
  }
  measureSoon() {
    this.measureTimeout < 0 && (this.measureTimeout = setTimeout(() => {
      this.measureTimeout = -1, this.maybeMeasure();
    }, 50));
  }
  update(t) {
    t.transactions.length && (this.lastTransaction = Date.now());
    let e = this.manager.update(t);
    e && this.observeIntersection();
    let n = e || t.geometryChanged, r = t.state.facet(Sa);
    if (r.position != this.position) {
      this.position = r.position;
      for (let i of this.manager.tooltipViews)
        i.dom.style.position = this.position;
      n = !0;
    }
    if (r.parent != this.parent) {
      this.parent && this.container.remove(), this.parent = r.parent, this.createContainer();
      for (let i of this.manager.tooltipViews)
        this.container.appendChild(i.dom);
      n = !0;
    } else
      this.parent && this.view.themeClasses != this.classes && (this.classes = this.container.className = this.view.themeClasses);
    n && this.maybeMeasure();
  }
  createTooltip(t) {
    let e = t.create(this.view);
    if (e.dom.classList.add("cm-tooltip"), t.arrow && !e.dom.querySelector(".cm-tooltip > .cm-tooltip-arrow")) {
      let n = document.createElement("div");
      n.className = "cm-tooltip-arrow", e.dom.appendChild(n);
    }
    return e.dom.style.position = this.position, e.dom.style.top = Po, this.container.appendChild(e.dom), e.mount && e.mount(this.view), e;
  }
  destroy() {
    var t, e;
    this.view.win.removeEventListener("resize", this.measureSoon);
    for (let n of this.manager.tooltipViews)
      n.dom.remove(), (t = n.destroy) === null || t === void 0 || t.call(n);
    (e = this.intersectionObserver) === null || e === void 0 || e.disconnect(), clearTimeout(this.measureTimeout);
  }
  readMeasure() {
    let t = this.view.dom.getBoundingClientRect();
    return {
      editor: t,
      parent: this.parent ? this.container.getBoundingClientRect() : t,
      pos: this.manager.tooltips.map((e, n) => {
        let r = this.manager.tooltipViews[n];
        return r.getCoords ? r.getCoords(e.pos) : this.view.coordsAtPos(e.pos);
      }),
      size: this.manager.tooltipViews.map(({ dom: e }) => e.getBoundingClientRect()),
      space: this.view.state.facet(Sa).tooltipSpace(this.view)
    };
  }
  writeMeasure(t) {
    var e;
    let { editor: n, space: r } = t, i = [];
    for (let o = 0; o < this.manager.tooltips.length; o++) {
      let s = this.manager.tooltips[o], l = this.manager.tooltipViews[o], { dom: a } = l, c = t.pos[o], u = t.size[o];
      if (!c || c.bottom <= Math.max(n.top, r.top) || c.top >= Math.min(n.bottom, r.bottom) || c.right < Math.max(n.left, r.left) - 0.1 || c.left > Math.min(n.right, r.right) + 0.1) {
        a.style.top = Po;
        continue;
      }
      let h = s.arrow ? l.dom.querySelector(".cm-tooltip-arrow") : null, f = h ? 7 : 0, d = u.right - u.left, p = (e = bp.get(l)) !== null && e !== void 0 ? e : u.bottom - u.top, m = l.offset || qse, g = this.view.textDirection == ye.LTR, y = u.width > r.right - r.left ? g ? r.left : r.right - u.width : g ? Math.min(c.left - (h ? 14 : 0) + m.x, r.right - d) : Math.max(r.left, c.left - d + (h ? 14 : 0) - m.x), b = !!s.above;
      !s.strictSide && (b ? c.top - (u.bottom - u.top) - m.y < r.top : c.bottom + (u.bottom - u.top) + m.y > r.bottom) && b == r.bottom - c.bottom > c.top - r.top && (b = !b);
      let k = (b ? c.top - r.top : r.bottom - c.bottom) - f;
      if (k < p && l.resize !== !1) {
        if (k < this.view.defaultLineHeight) {
          a.style.top = Po;
          continue;
        }
        bp.set(l, p), a.style.height = (p = k) + "px";
      } else
        a.style.height && (a.style.height = "");
      let x = b ? c.top - p - f - m.y : c.bottom + f + m.y, w = y + d;
      if (l.overlap !== !0)
        for (let v of i)
          v.left < w && v.right > y && v.top < x + p && v.bottom > x && (x = b ? v.top - p - 2 - f : v.bottom + f + 2);
      this.position == "absolute" ? (a.style.top = x - t.parent.top + "px", a.style.left = y - t.parent.left + "px") : (a.style.top = x + "px", a.style.left = y + "px"), h && (h.style.left = `${c.left + (g ? m.x : -m.x) - (y + 14 - 7)}px`), l.overlap !== !0 && i.push({ left: y, top: x, right: w, bottom: x + p }), a.classList.toggle("cm-tooltip-above", b), a.classList.toggle("cm-tooltip-below", !b), l.positioned && l.positioned(t.space);
    }
  }
  maybeMeasure() {
    if (this.manager.tooltips.length && (this.view.inView && this.view.requestMeasure(this.measureReq), this.inView != this.view.inView && (this.inView = this.view.inView, !this.inView)))
      for (let t of this.manager.tooltipViews)
        t.dom.style.top = Po;
  }
}, {
  eventHandlers: {
    scroll() {
      this.maybeMeasure();
    }
  }
}), Fse = /* @__PURE__ */ I.baseTheme({
  ".cm-tooltip": {
    zIndex: 100,
    boxSizing: "border-box"
  },
  "&light .cm-tooltip": {
    border: "1px solid #bbb",
    backgroundColor: "#f5f5f5"
  },
  "&light .cm-tooltip-section:not(:first-child)": {
    borderTop: "1px solid #bbb"
  },
  "&dark .cm-tooltip": {
    backgroundColor: "#333338",
    color: "white"
  },
  ".cm-tooltip-arrow": {
    height: `${7}px`,
    width: `${7 * 2}px`,
    position: "absolute",
    zIndex: -1,
    overflow: "hidden",
    "&:before, &:after": {
      content: "''",
      position: "absolute",
      width: 0,
      height: 0,
      borderLeft: `${7}px solid transparent`,
      borderRight: `${7}px solid transparent`
    },
    ".cm-tooltip-above &": {
      bottom: `-${7}px`,
      "&:before": {
        borderTop: `${7}px solid #bbb`
      },
      "&:after": {
        borderTop: `${7}px solid #f5f5f5`,
        bottom: "1px"
      }
    },
    ".cm-tooltip-below &": {
      top: `-${7}px`,
      "&:before": {
        borderBottom: `${7}px solid #bbb`
      },
      "&:after": {
        borderBottom: `${7}px solid #f5f5f5`,
        top: "1px"
      }
    }
  },
  "&dark .cm-tooltip .cm-tooltip-arrow": {
    "&:before": {
      borderTopColor: "#333338",
      borderBottomColor: "#333338"
    },
    "&:after": {
      borderTopColor: "transparent",
      borderBottomColor: "transparent"
    }
  }
}), qse = { x: 0, y: 0 }, Gu = /* @__PURE__ */ N.define({
  enables: [Iy, Fse]
}), Rs = /* @__PURE__ */ N.define();
class Ku {
  static create(e) {
    return new Ku(e);
  }
  constructor(e) {
    this.view = e, this.mounted = !1, this.dom = document.createElement("div"), this.dom.classList.add("cm-tooltip-hover"), this.manager = new Ly(e, Rs, (n) => this.createHostedView(n));
  }
  createHostedView(e) {
    let n = e.create(this.view);
    return n.dom.classList.add("cm-tooltip-section"), this.dom.appendChild(n.dom), this.mounted && n.mount && n.mount(this.view), n;
  }
  mount(e) {
    for (let n of this.manager.tooltipViews)
      n.mount && n.mount(e);
    this.mounted = !0;
  }
  positioned(e) {
    for (let n of this.manager.tooltipViews)
      n.positioned && n.positioned(e);
  }
  update(e) {
    this.manager.update(e);
  }
  destroy() {
    var e;
    for (let n of this.manager.tooltipViews)
      (e = n.destroy) === null || e === void 0 || e.call(n);
  }
}
const $se = /* @__PURE__ */ Gu.compute([Rs], (t) => {
  let e = t.facet(Rs).filter((n) => n);
  return e.length === 0 ? null : {
    pos: Math.min(...e.map((n) => n.pos)),
    end: Math.max(...e.filter((n) => n.end != null).map((n) => n.end)),
    create: Ku.create,
    above: e[0].above,
    arrow: e.some((n) => n.arrow)
  };
});
class Hse {
  constructor(e, n, r, i, o) {
    this.view = e, this.source = n, this.field = r, this.setHover = i, this.hoverTime = o, this.hoverTimeout = -1, this.restartTimeout = -1, this.pending = null, this.lastMove = { x: 0, y: 0, target: e.dom, time: 0 }, this.checkHover = this.checkHover.bind(this), e.dom.addEventListener("mouseleave", this.mouseleave = this.mouseleave.bind(this)), e.dom.addEventListener("mousemove", this.mousemove = this.mousemove.bind(this));
  }
  update() {
    this.pending && (this.pending = null, clearTimeout(this.restartTimeout), this.restartTimeout = setTimeout(() => this.startHover(), 20));
  }
  get active() {
    return this.view.state.field(this.field);
  }
  checkHover() {
    if (this.hoverTimeout = -1, this.active)
      return;
    let e = Date.now() - this.lastMove.time;
    e < this.hoverTime ? this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime - e) : this.startHover();
  }
  startHover() {
    clearTimeout(this.restartTimeout);
    let { view: e, lastMove: n } = this, r = e.docView.nearest(n.target);
    if (!r)
      return;
    let i, o = 1;
    if (r instanceof wn)
      i = r.posAtStart;
    else {
      if (i = e.posAtCoords(n), i == null)
        return;
      let l = e.coordsAtPos(i);
      if (!l || n.y < l.top || n.y > l.bottom || n.x < l.left - e.defaultCharacterWidth || n.x > l.right + e.defaultCharacterWidth)
        return;
      let a = e.bidiSpans(e.state.doc.lineAt(i)).find((u) => u.from <= i && u.to >= i), c = a && a.dir == ye.RTL ? -1 : 1;
      o = n.x < l.left ? -c : c;
    }
    let s = this.source(e, i, o);
    if (s != null && s.then) {
      let l = this.pending = { pos: i };
      s.then((a) => {
        this.pending == l && (this.pending = null, a && e.dispatch({ effects: this.setHover.of(a) }));
      }, (a) => pt(e.state, a, "hover tooltip"));
    } else
      s && e.dispatch({ effects: this.setHover.of(s) });
  }
  mousemove(e) {
    var n;
    this.lastMove = { x: e.clientX, y: e.clientY, target: e.target, time: Date.now() }, this.hoverTimeout < 0 && (this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime));
    let r = this.active;
    if (r && !vp(this.lastMove.target) || this.pending) {
      let { pos: i } = r || this.pending, o = (n = r == null ? void 0 : r.end) !== null && n !== void 0 ? n : i;
      (i == o ? this.view.posAtCoords(this.lastMove) != i : !zse(this.view, i, o, e.clientX, e.clientY, 6)) && (this.view.dispatch({ effects: this.setHover.of(null) }), this.pending = null);
    }
  }
  mouseleave(e) {
    clearTimeout(this.hoverTimeout), this.hoverTimeout = -1, this.active && !vp(e.relatedTarget) && this.view.dispatch({ effects: this.setHover.of(null) });
  }
  destroy() {
    clearTimeout(this.hoverTimeout), this.view.dom.removeEventListener("mouseleave", this.mouseleave), this.view.dom.removeEventListener("mousemove", this.mousemove);
  }
}
function vp(t) {
  for (let e = t; e; e = e.parentNode)
    if (e.nodeType == 1 && e.classList.contains("cm-tooltip"))
      return !0;
  return !1;
}
function zse(t, e, n, r, i, o) {
  let s = document.createRange(), l = t.domAtPos(e), a = t.domAtPos(n);
  s.setEnd(a.node, a.offset), s.setStart(l.node, l.offset);
  let c = s.getClientRects();
  s.detach();
  for (let u = 0; u < c.length; u++) {
    let h = c[u];
    if (Math.max(h.top - i, i - h.bottom, h.left - r, r - h.right) <= o)
      return !0;
  }
  return !1;
}
function Vse(t, e = {}) {
  let n = j.define(), r = Be.define({
    create() {
      return null;
    },
    update(i, o) {
      if (i && (e.hideOnChange && (o.docChanged || o.selection) || e.hideOn && e.hideOn(o, i)))
        return null;
      if (i && o.docChanged) {
        let s = o.changes.mapPos(i.pos, -1, Ke.TrackDel);
        if (s == null)
          return null;
        let l = Object.assign(/* @__PURE__ */ Object.create(null), i);
        l.pos = s, i.end != null && (l.end = o.changes.mapPos(i.end)), i = l;
      }
      for (let s of o.effects)
        s.is(n) && (i = s.value), s.is(Use) && (i = null);
      return i;
    },
    provide: (i) => Rs.from(i)
  });
  return [
    r,
    Ee.define((i) => new Hse(i, t, r, n, e.hoverTime || 300)),
    $se
  ];
}
function Ny(t, e) {
  let n = t.plugin(Iy);
  if (!n)
    return null;
  let r = n.manager.tooltips.indexOf(e);
  return r < 0 ? null : n.manager.tooltipViews[r];
}
const Use = /* @__PURE__ */ j.define(), xp = /* @__PURE__ */ N.define({
  combine(t) {
    let e, n;
    for (let r of t)
      e = e || r.topContainer, n = n || r.bottomContainer;
    return { topContainer: e, bottomContainer: n };
  }
});
function Ji(t, e) {
  let n = t.plugin(Py), r = n ? n.specs.indexOf(e) : -1;
  return r > -1 ? n.panels[r] : null;
}
const Py = /* @__PURE__ */ Ee.fromClass(class {
  constructor(t) {
    this.input = t.state.facet(Xi), this.specs = this.input.filter((n) => n), this.panels = this.specs.map((n) => n(t));
    let e = t.state.facet(xp);
    this.top = new Bo(t, !0, e.topContainer), this.bottom = new Bo(t, !1, e.bottomContainer), this.top.sync(this.panels.filter((n) => n.top)), this.bottom.sync(this.panels.filter((n) => !n.top));
    for (let n of this.panels)
      n.dom.classList.add("cm-panel"), n.mount && n.mount();
  }
  update(t) {
    let e = t.state.facet(xp);
    this.top.container != e.topContainer && (this.top.sync([]), this.top = new Bo(t.view, !0, e.topContainer)), this.bottom.container != e.bottomContainer && (this.bottom.sync([]), this.bottom = new Bo(t.view, !1, e.bottomContainer)), this.top.syncClasses(), this.bottom.syncClasses();
    let n = t.state.facet(Xi);
    if (n != this.input) {
      let r = n.filter((a) => a), i = [], o = [], s = [], l = [];
      for (let a of r) {
        let c = this.specs.indexOf(a), u;
        c < 0 ? (u = a(t.view), l.push(u)) : (u = this.panels[c], u.update && u.update(t)), i.push(u), (u.top ? o : s).push(u);
      }
      this.specs = r, this.panels = i, this.top.sync(o), this.bottom.sync(s);
      for (let a of l)
        a.dom.classList.add("cm-panel"), a.mount && a.mount();
    } else
      for (let r of this.panels)
        r.update && r.update(t);
  }
  destroy() {
    this.top.sync([]), this.bottom.sync([]);
  }
}, {
  provide: (t) => I.scrollMargins.of((e) => {
    let n = e.plugin(t);
    return n && { top: n.top.scrollMargin(), bottom: n.bottom.scrollMargin() };
  })
});
class Bo {
  constructor(e, n, r) {
    this.view = e, this.top = n, this.container = r, this.dom = void 0, this.classes = "", this.panels = [], this.syncClasses();
  }
  sync(e) {
    for (let n of this.panels)
      n.destroy && e.indexOf(n) < 0 && n.destroy();
    this.panels = e, this.syncDOM();
  }
  syncDOM() {
    if (this.panels.length == 0) {
      this.dom && (this.dom.remove(), this.dom = void 0);
      return;
    }
    if (!this.dom) {
      this.dom = document.createElement("div"), this.dom.className = this.top ? "cm-panels cm-panels-top" : "cm-panels cm-panels-bottom", this.dom.style[this.top ? "top" : "bottom"] = "0";
      let n = this.container || this.view.dom;
      n.insertBefore(this.dom, this.top ? n.firstChild : null);
    }
    let e = this.dom.firstChild;
    for (let n of this.panels)
      if (n.dom.parentNode == this.dom) {
        for (; e != n.dom; )
          e = _p(e);
        e = e.nextSibling;
      } else
        this.dom.insertBefore(n.dom, e);
    for (; e; )
      e = _p(e);
  }
  scrollMargin() {
    return !this.dom || this.container ? 0 : Math.max(0, this.top ? this.dom.getBoundingClientRect().bottom - Math.max(0, this.view.scrollDOM.getBoundingClientRect().top) : Math.min(innerHeight, this.view.scrollDOM.getBoundingClientRect().bottom) - this.dom.getBoundingClientRect().top);
  }
  syncClasses() {
    if (!(!this.container || this.classes == this.view.themeClasses)) {
      for (let e of this.classes.split(" "))
        e && this.container.classList.remove(e);
      for (let e of (this.classes = this.view.themeClasses).split(" "))
        e && this.container.classList.add(e);
    }
  }
}
function _p(t) {
  let e = t.nextSibling;
  return t.remove(), e;
}
const Xi = /* @__PURE__ */ N.define({
  enables: Py
});
class hn extends ar {
  compare(e) {
    return this == e || this.constructor == e.constructor && this.eq(e);
  }
  eq(e) {
    return !1;
  }
  destroy(e) {
  }
}
hn.prototype.elementClass = "";
hn.prototype.toDOM = void 0;
hn.prototype.mapMode = Ke.TrackBefore;
hn.prototype.startSide = hn.prototype.endSide = -1;
hn.prototype.point = !0;
const cs = /* @__PURE__ */ N.define(), Wse = {
  class: "",
  renderEmptyElements: !1,
  elementStyle: "",
  markers: () => te.empty,
  lineMarker: () => null,
  widgetMarker: () => null,
  lineMarkerChange: null,
  initialSpacer: null,
  updateSpacer: null,
  domEventHandlers: {}
}, Li = /* @__PURE__ */ N.define();
function jse(t) {
  return [By(), Li.of(Object.assign(Object.assign({}, Wse), t))];
}
const Gc = /* @__PURE__ */ N.define({
  combine: (t) => t.some((e) => e)
});
function By(t) {
  let e = [
    Gse
  ];
  return t && t.fixed === !1 && e.push(Gc.of(!0)), e;
}
const Gse = /* @__PURE__ */ Ee.fromClass(class {
  constructor(t) {
    this.view = t, this.prevViewport = t.viewport, this.dom = document.createElement("div"), this.dom.className = "cm-gutters", this.dom.setAttribute("aria-hidden", "true"), this.dom.style.minHeight = this.view.contentHeight + "px", this.gutters = t.state.facet(Li).map((e) => new wp(t, e));
    for (let e of this.gutters)
      this.dom.appendChild(e.dom);
    this.fixed = !t.state.facet(Gc), this.fixed && (this.dom.style.position = "sticky"), this.syncGutters(!1), t.scrollDOM.insertBefore(this.dom, t.contentDOM);
  }
  update(t) {
    if (this.updateGutters(t)) {
      let e = this.prevViewport, n = t.view.viewport, r = Math.min(e.to, n.to) - Math.max(e.from, n.from);
      this.syncGutters(r < (n.to - n.from) * 0.8);
    }
    t.geometryChanged && (this.dom.style.minHeight = this.view.contentHeight + "px"), this.view.state.facet(Gc) != !this.fixed && (this.fixed = !this.fixed, this.dom.style.position = this.fixed ? "sticky" : ""), this.prevViewport = t.view.viewport;
  }
  syncGutters(t) {
    let e = this.dom.nextSibling;
    t && this.dom.remove();
    let n = te.iter(this.view.state.facet(cs), this.view.viewport.from), r = [], i = this.gutters.map((o) => new Kse(o, this.view.viewport, -this.view.documentPadding.top));
    for (let o of this.view.viewportLineBlocks)
      if (r.length && (r = []), Array.isArray(o.type)) {
        let s = !0;
        for (let l of o.type)
          if (l.type == be.Text && s) {
            Kc(n, r, l.from);
            for (let a of i)
              a.line(this.view, l, r);
            s = !1;
          } else if (l.widget)
            for (let a of i)
              a.widget(this.view, l);
      } else if (o.type == be.Text) {
        Kc(n, r, o.from);
        for (let s of i)
          s.line(this.view, o, r);
      }
    for (let o of i)
      o.finish();
    t && this.view.scrollDOM.insertBefore(this.dom, e);
  }
  updateGutters(t) {
    let e = t.startState.facet(Li), n = t.state.facet(Li), r = t.docChanged || t.heightChanged || t.viewportChanged || !te.eq(t.startState.facet(cs), t.state.facet(cs), t.view.viewport.from, t.view.viewport.to);
    if (e == n)
      for (let i of this.gutters)
        i.update(t) && (r = !0);
    else {
      r = !0;
      let i = [];
      for (let o of n) {
        let s = e.indexOf(o);
        s < 0 ? i.push(new wp(this.view, o)) : (this.gutters[s].update(t), i.push(this.gutters[s]));
      }
      for (let o of this.gutters)
        o.dom.remove(), i.indexOf(o) < 0 && o.destroy();
      for (let o of i)
        this.dom.appendChild(o.dom);
      this.gutters = i;
    }
    return r;
  }
  destroy() {
    for (let t of this.gutters)
      t.destroy();
    this.dom.remove();
  }
}, {
  provide: (t) => I.scrollMargins.of((e) => {
    let n = e.plugin(t);
    return !n || n.gutters.length == 0 || !n.fixed ? null : e.textDirection == ye.LTR ? { left: n.dom.offsetWidth } : { right: n.dom.offsetWidth };
  })
});
function kp(t) {
  return Array.isArray(t) ? t : [t];
}
function Kc(t, e, n) {
  for (; t.value && t.from <= n; )
    t.from == n && e.push(t.value), t.next();
}
class Kse {
  constructor(e, n, r) {
    this.gutter = e, this.height = r, this.i = 0, this.cursor = te.iter(e.markers, n.from);
  }
  addElement(e, n, r) {
    let { gutter: i } = this, o = n.top - this.height;
    if (this.i == i.elements.length) {
      let s = new Fy(e, n.height, o, r);
      i.elements.push(s), i.dom.appendChild(s.dom);
    } else
      i.elements[this.i].update(e, n.height, o, r);
    this.height = n.bottom, this.i++;
  }
  line(e, n, r) {
    let i = [];
    Kc(this.cursor, i, n.from), r.length && (i = i.concat(r));
    let o = this.gutter.config.lineMarker(e, n, i);
    o && i.unshift(o);
    let s = this.gutter;
    i.length == 0 && !s.config.renderEmptyElements || this.addElement(e, n, i);
  }
  widget(e, n) {
    let r = this.gutter.config.widgetMarker(e, n.widget, n);
    r && this.addElement(e, n, [r]);
  }
  finish() {
    let e = this.gutter;
    for (; e.elements.length > this.i; ) {
      let n = e.elements.pop();
      e.dom.removeChild(n.dom), n.destroy();
    }
  }
}
class wp {
  constructor(e, n) {
    this.view = e, this.config = n, this.elements = [], this.spacer = null, this.dom = document.createElement("div"), this.dom.className = "cm-gutter" + (this.config.class ? " " + this.config.class : "");
    for (let r in n.domEventHandlers)
      this.dom.addEventListener(r, (i) => {
        let o = i.target, s;
        if (o != this.dom && this.dom.contains(o)) {
          for (; o.parentNode != this.dom; )
            o = o.parentNode;
          let a = o.getBoundingClientRect();
          s = (a.top + a.bottom) / 2;
        } else
          s = i.clientY;
        let l = e.lineBlockAtHeight(s - e.documentTop);
        n.domEventHandlers[r](e, l, i) && i.preventDefault();
      });
    this.markers = kp(n.markers(e)), n.initialSpacer && (this.spacer = new Fy(e, 0, 0, [n.initialSpacer(e)]), this.dom.appendChild(this.spacer.dom), this.spacer.dom.style.cssText += "visibility: hidden; pointer-events: none");
  }
  update(e) {
    let n = this.markers;
    if (this.markers = kp(this.config.markers(e.view)), this.spacer && this.config.updateSpacer) {
      let i = this.config.updateSpacer(this.spacer.markers[0], e);
      i != this.spacer.markers[0] && this.spacer.update(e.view, 0, 0, [i]);
    }
    let r = e.view.viewport;
    return !te.eq(this.markers, n, r.from, r.to) || (this.config.lineMarkerChange ? this.config.lineMarkerChange(e) : !1);
  }
  destroy() {
    for (let e of this.elements)
      e.destroy();
  }
}
class Fy {
  constructor(e, n, r, i) {
    this.height = -1, this.above = 0, this.markers = [], this.dom = document.createElement("div"), this.dom.className = "cm-gutterElement", this.update(e, n, r, i);
  }
  update(e, n, r, i) {
    this.height != n && (this.dom.style.height = (this.height = n) + "px"), this.above != r && (this.dom.style.marginTop = (this.above = r) ? r + "px" : ""), Yse(this.markers, i) || this.setMarkers(e, i);
  }
  setMarkers(e, n) {
    let r = "cm-gutterElement", i = this.dom.firstChild;
    for (let o = 0, s = 0; ; ) {
      let l = s, a = o < n.length ? n[o++] : null, c = !1;
      if (a) {
        let u = a.elementClass;
        u && (r += " " + u);
        for (let h = s; h < this.markers.length; h++)
          if (this.markers[h].compare(a)) {
            l = h, c = !0;
            break;
          }
      } else
        l = this.markers.length;
      for (; s < l; ) {
        let u = this.markers[s++];
        if (u.toDOM) {
          u.destroy(i);
          let h = i.nextSibling;
          i.remove(), i = h;
        }
      }
      if (!a)
        break;
      a.toDOM && (c ? i = i.nextSibling : this.dom.insertBefore(a.toDOM(e), i)), c && s++;
    }
    this.dom.className = r, this.markers = n;
  }
  destroy() {
    this.setMarkers(null, []);
  }
}
function Yse(t, e) {
  if (t.length != e.length)
    return !1;
  for (let n = 0; n < t.length; n++)
    if (!t[n].compare(e[n]))
      return !1;
  return !0;
}
const Zse = /* @__PURE__ */ N.define(), Mr = /* @__PURE__ */ N.define({
  combine(t) {
    return Xt(t, { formatNumber: String, domEventHandlers: {} }, {
      domEventHandlers(e, n) {
        let r = Object.assign({}, e);
        for (let i in n) {
          let o = r[i], s = n[i];
          r[i] = o ? (l, a, c) => o(l, a, c) || s(l, a, c) : s;
        }
        return r;
      }
    });
  }
});
class Ea extends hn {
  constructor(e) {
    super(), this.number = e;
  }
  eq(e) {
    return this.number == e.number;
  }
  toDOM() {
    return document.createTextNode(this.number);
  }
}
function Ta(t, e) {
  return t.state.facet(Mr).formatNumber(e, t.state);
}
const Jse = /* @__PURE__ */ Li.compute([Mr], (t) => ({
  class: "cm-lineNumbers",
  renderEmptyElements: !1,
  markers(e) {
    return e.state.facet(Zse);
  },
  lineMarker(e, n, r) {
    return r.some((i) => i.toDOM) ? null : new Ea(Ta(e, e.state.doc.lineAt(n.from).number));
  },
  widgetMarker: () => null,
  lineMarkerChange: (e) => e.startState.facet(Mr) != e.state.facet(Mr),
  initialSpacer(e) {
    return new Ea(Ta(e, Cp(e.state.doc.lines)));
  },
  updateSpacer(e, n) {
    let r = Ta(n.view, Cp(n.view.state.doc.lines));
    return r == e.number ? e : new Ea(r);
  },
  domEventHandlers: t.facet(Mr).domEventHandlers
}));
function Xse(t = {}) {
  return [
    Mr.of(t),
    By(),
    Jse
  ];
}
function Cp(t) {
  let e = 9;
  for (; e < t; )
    e = e * 10 + 9;
  return e;
}
const Qse = /* @__PURE__ */ new class extends hn {
  constructor() {
    super(...arguments), this.elementClass = "cm-activeLineGutter";
  }
}(), ele = /* @__PURE__ */ cs.compute(["selection"], (t) => {
  let e = [], n = -1;
  for (let r of t.selection.ranges) {
    let i = t.doc.lineAt(r.head).from;
    i > n && (n = i, e.push(Qse.range(i)));
  }
  return te.of(e);
});
function tle() {
  return ele;
}
const nle = 1024;
let rle = 0;
class Da {
  constructor(e, n) {
    this.from = e, this.to = n;
  }
}
class K {
  constructor(e = {}) {
    this.id = rle++, this.perNode = !!e.perNode, this.deserialize = e.deserialize || (() => {
      throw new Error("This node type doesn't define a deserialize function");
    });
  }
  add(e) {
    if (this.perNode)
      throw new RangeError("Can't add per-node props to node types");
    return typeof e != "function" && (e = xt.match(e)), (n) => {
      let r = e(n);
      return r === void 0 ? null : [this, r];
    };
  }
}
K.closedBy = new K({ deserialize: (t) => t.split(" ") });
K.openedBy = new K({ deserialize: (t) => t.split(" ") });
K.group = new K({ deserialize: (t) => t.split(" ") });
K.contextHash = new K({ perNode: !0 });
K.lookAhead = new K({ perNode: !0 });
K.mounted = new K({ perNode: !0 });
const ile = /* @__PURE__ */ Object.create(null);
class xt {
  constructor(e, n, r, i = 0) {
    this.name = e, this.props = n, this.id = r, this.flags = i;
  }
  static define(e) {
    let n = e.props && e.props.length ? /* @__PURE__ */ Object.create(null) : ile, r = (e.top ? 1 : 0) | (e.skipped ? 2 : 0) | (e.error ? 4 : 0) | (e.name == null ? 8 : 0), i = new xt(e.name || "", n, e.id, r);
    if (e.props) {
      for (let o of e.props)
        if (Array.isArray(o) || (o = o(i)), o) {
          if (o[0].perNode)
            throw new RangeError("Can't store a per-node prop on a node type");
          n[o[0].id] = o[1];
        }
    }
    return i;
  }
  prop(e) {
    return this.props[e.id];
  }
  get isTop() {
    return (this.flags & 1) > 0;
  }
  get isSkipped() {
    return (this.flags & 2) > 0;
  }
  get isError() {
    return (this.flags & 4) > 0;
  }
  get isAnonymous() {
    return (this.flags & 8) > 0;
  }
  is(e) {
    if (typeof e == "string") {
      if (this.name == e)
        return !0;
      let n = this.prop(K.group);
      return n ? n.indexOf(e) > -1 : !1;
    }
    return this.id == e;
  }
  static match(e) {
    let n = /* @__PURE__ */ Object.create(null);
    for (let r in e)
      for (let i of r.split(" "))
        n[i] = e[r];
    return (r) => {
      for (let i = r.prop(K.group), o = -1; o < (i ? i.length : 0); o++) {
        let s = n[o < 0 ? r.name : i[o]];
        if (s)
          return s;
      }
    };
  }
}
xt.none = new xt("", /* @__PURE__ */ Object.create(null), 0, 8);
const Fo = /* @__PURE__ */ new WeakMap(), Ap = /* @__PURE__ */ new WeakMap();
var Ne;
(function(t) {
  t[t.ExcludeBuffers = 1] = "ExcludeBuffers", t[t.IncludeAnonymous = 2] = "IncludeAnonymous", t[t.IgnoreMounts = 4] = "IgnoreMounts", t[t.IgnoreOverlays = 8] = "IgnoreOverlays";
})(Ne || (Ne = {}));
class He {
  constructor(e, n, r, i, o) {
    if (this.type = e, this.children = n, this.positions = r, this.length = i, this.props = null, o && o.length) {
      this.props = /* @__PURE__ */ Object.create(null);
      for (let [s, l] of o)
        this.props[typeof s == "number" ? s : s.id] = l;
    }
  }
  toString() {
    let e = this.prop(K.mounted);
    if (e && !e.overlay)
      return e.tree.toString();
    let n = "";
    for (let r of this.children) {
      let i = r.toString();
      i && (n && (n += ","), n += i);
    }
    return this.type.name ? (/\W/.test(this.type.name) && !this.type.isError ? JSON.stringify(this.type.name) : this.type.name) + (n.length ? "(" + n + ")" : "") : n;
  }
  cursor(e = 0) {
    return new Ns(this.topNode, e);
  }
  cursorAt(e, n = 0, r = 0) {
    let i = Fo.get(this) || this.topNode, o = new Ns(i);
    return o.moveTo(e, n), Fo.set(this, o._tree), o;
  }
  get topNode() {
    return new ln(this, 0, 0, null);
  }
  resolve(e, n = 0) {
    let r = Yr(Fo.get(this) || this.topNode, e, n, !1);
    return Fo.set(this, r), r;
  }
  resolveInner(e, n = 0) {
    let r = Yr(Ap.get(this) || this.topNode, e, n, !0);
    return Ap.set(this, r), r;
  }
  iterate(e) {
    let { enter: n, leave: r, from: i = 0, to: o = this.length } = e, s = e.mode || 0, l = (s & Ne.IncludeAnonymous) > 0;
    for (let a = this.cursor(s | Ne.IncludeAnonymous); ; ) {
      let c = !1;
      if (a.from <= o && a.to >= i && (!l && a.type.isAnonymous || n(a) !== !1)) {
        if (a.firstChild())
          continue;
        c = !0;
      }
      for (; c && r && (l || !a.type.isAnonymous) && r(a), !a.nextSibling(); ) {
        if (!a.parent())
          return;
        c = !0;
      }
    }
  }
  prop(e) {
    return e.perNode ? this.props ? this.props[e.id] : void 0 : this.type.prop(e);
  }
  get propValues() {
    let e = [];
    if (this.props)
      for (let n in this.props)
        e.push([+n, this.props[n]]);
    return e;
  }
  balance(e = {}) {
    return this.children.length <= 8 ? this : Ju(xt.none, this.children, this.positions, 0, this.children.length, 0, this.length, (n, r, i) => new He(this.type, n, r, i, this.propValues), e.makeTree || ((n, r, i) => new He(xt.none, n, r, i)));
  }
  static build(e) {
    return sle(e);
  }
}
He.empty = new He(xt.none, [], [], 0);
class Yu {
  constructor(e, n) {
    this.buffer = e, this.index = n;
  }
  get id() {
    return this.buffer[this.index - 4];
  }
  get start() {
    return this.buffer[this.index - 3];
  }
  get end() {
    return this.buffer[this.index - 2];
  }
  get size() {
    return this.buffer[this.index - 1];
  }
  get pos() {
    return this.index;
  }
  next() {
    this.index -= 4;
  }
  fork() {
    return new Yu(this.buffer, this.index);
  }
}
class fr {
  constructor(e, n, r) {
    this.buffer = e, this.length = n, this.set = r;
  }
  get type() {
    return xt.none;
  }
  toString() {
    let e = [];
    for (let n = 0; n < this.buffer.length; )
      e.push(this.childString(n)), n = this.buffer[n + 3];
    return e.join(",");
  }
  childString(e) {
    let n = this.buffer[e], r = this.buffer[e + 3], i = this.set.types[n], o = i.name;
    if (/\W/.test(o) && !i.isError && (o = JSON.stringify(o)), e += 4, r == e)
      return o;
    let s = [];
    for (; e < r; )
      s.push(this.childString(e)), e = this.buffer[e + 3];
    return o + "(" + s.join(",") + ")";
  }
  findChild(e, n, r, i, o) {
    let { buffer: s } = this, l = -1;
    for (let a = e; a != n && !(qy(o, i, s[a + 1], s[a + 2]) && (l = a, r > 0)); a = s[a + 3])
      ;
    return l;
  }
  slice(e, n, r) {
    let i = this.buffer, o = new Uint16Array(n - e), s = 0;
    for (let l = e, a = 0; l < n; ) {
      o[a++] = i[l++], o[a++] = i[l++] - r;
      let c = o[a++] = i[l++] - r;
      o[a++] = i[l++] - e, s = Math.max(s, c);
    }
    return new fr(o, s, this.set);
  }
}
function qy(t, e, n, r) {
  switch (t) {
    case -2:
      return n < e;
    case -1:
      return r >= e && n < e;
    case 0:
      return n < e && r > e;
    case 1:
      return n <= e && r > e;
    case 2:
      return r > e;
    case 4:
      return !0;
  }
}
function $y(t, e) {
  let n = t.childBefore(e);
  for (; n; ) {
    let r = n.lastChild;
    if (!r || r.to != n.to)
      break;
    r.type.isError && r.from == r.to ? (t = n, n = r.prevSibling) : n = r;
  }
  return t;
}
function Yr(t, e, n, r) {
  for (var i; t.from == t.to || (n < 1 ? t.from >= e : t.from > e) || (n > -1 ? t.to <= e : t.to < e); ) {
    let s = !r && t instanceof ln && t.index < 0 ? null : t.parent;
    if (!s)
      return t;
    t = s;
  }
  let o = r ? 0 : Ne.IgnoreOverlays;
  if (r)
    for (let s = t, l = s.parent; l; s = l, l = s.parent)
      s instanceof ln && s.index < 0 && ((i = l.enter(e, n, o)) === null || i === void 0 ? void 0 : i.from) != s.from && (t = l);
  for (; ; ) {
    let s = t.enter(e, n, o);
    if (!s)
      return t;
    t = s;
  }
}
class ln {
  constructor(e, n, r, i) {
    this._tree = e, this.from = n, this.index = r, this._parent = i;
  }
  get type() {
    return this._tree.type;
  }
  get name() {
    return this._tree.type.name;
  }
  get to() {
    return this.from + this._tree.length;
  }
  nextChild(e, n, r, i, o = 0) {
    for (let s = this; ; ) {
      for (let { children: l, positions: a } = s._tree, c = n > 0 ? l.length : -1; e != c; e += n) {
        let u = l[e], h = a[e] + s.from;
        if (!!qy(i, r, h, h + u.length)) {
          if (u instanceof fr) {
            if (o & Ne.ExcludeBuffers)
              continue;
            let f = u.findChild(0, u.buffer.length, n, r - h, i);
            if (f > -1)
              return new An(new ole(s, u, e, h), null, f);
          } else if (o & Ne.IncludeAnonymous || !u.type.isAnonymous || Zu(u)) {
            let f;
            if (!(o & Ne.IgnoreMounts) && u.props && (f = u.prop(K.mounted)) && !f.overlay)
              return new ln(f.tree, h, e, s);
            let d = new ln(u, h, e, s);
            return o & Ne.IncludeAnonymous || !d.type.isAnonymous ? d : d.nextChild(n < 0 ? u.children.length - 1 : 0, n, r, i);
          }
        }
      }
      if (o & Ne.IncludeAnonymous || !s.type.isAnonymous || (s.index >= 0 ? e = s.index + n : e = n < 0 ? -1 : s._parent._tree.children.length, s = s._parent, !s))
        return null;
    }
  }
  get firstChild() {
    return this.nextChild(0, 1, 0, 4);
  }
  get lastChild() {
    return this.nextChild(this._tree.children.length - 1, -1, 0, 4);
  }
  childAfter(e) {
    return this.nextChild(0, 1, e, 2);
  }
  childBefore(e) {
    return this.nextChild(this._tree.children.length - 1, -1, e, -2);
  }
  enter(e, n, r = 0) {
    let i;
    if (!(r & Ne.IgnoreOverlays) && (i = this._tree.prop(K.mounted)) && i.overlay) {
      let o = e - this.from;
      for (let { from: s, to: l } of i.overlay)
        if ((n > 0 ? s <= o : s < o) && (n < 0 ? l >= o : l > o))
          return new ln(i.tree, i.overlay[0].from + this.from, -1, this);
    }
    return this.nextChild(0, 1, e, n, r);
  }
  nextSignificantParent() {
    let e = this;
    for (; e.type.isAnonymous && e._parent; )
      e = e._parent;
    return e;
  }
  get parent() {
    return this._parent ? this._parent.nextSignificantParent() : null;
  }
  get nextSibling() {
    return this._parent && this.index >= 0 ? this._parent.nextChild(this.index + 1, 1, 0, 4) : null;
  }
  get prevSibling() {
    return this._parent && this.index >= 0 ? this._parent.nextChild(this.index - 1, -1, 0, 4) : null;
  }
  cursor(e = 0) {
    return new Ns(this, e);
  }
  get tree() {
    return this._tree;
  }
  toTree() {
    return this._tree;
  }
  resolve(e, n = 0) {
    return Yr(this, e, n, !1);
  }
  resolveInner(e, n = 0) {
    return Yr(this, e, n, !0);
  }
  enterUnfinishedNodesBefore(e) {
    return $y(this, e);
  }
  getChild(e, n = null, r = null) {
    let i = Ls(this, e, n, r);
    return i.length ? i[0] : null;
  }
  getChildren(e, n = null, r = null) {
    return Ls(this, e, n, r);
  }
  toString() {
    return this._tree.toString();
  }
  get node() {
    return this;
  }
  matchContext(e) {
    return Is(this, e);
  }
}
function Ls(t, e, n, r) {
  let i = t.cursor(), o = [];
  if (!i.firstChild())
    return o;
  if (n != null) {
    for (; !i.type.is(n); )
      if (!i.nextSibling())
        return o;
  }
  for (; ; ) {
    if (r != null && i.type.is(r))
      return o;
    if (i.type.is(e) && o.push(i.node), !i.nextSibling())
      return r == null ? o : [];
  }
}
function Is(t, e, n = e.length - 1) {
  for (let r = t.parent; n >= 0; r = r.parent) {
    if (!r)
      return !1;
    if (!r.type.isAnonymous) {
      if (e[n] && e[n] != r.name)
        return !1;
      n--;
    }
  }
  return !0;
}
class ole {
  constructor(e, n, r, i) {
    this.parent = e, this.buffer = n, this.index = r, this.start = i;
  }
}
class An {
  get name() {
    return this.type.name;
  }
  get from() {
    return this.context.start + this.context.buffer.buffer[this.index + 1];
  }
  get to() {
    return this.context.start + this.context.buffer.buffer[this.index + 2];
  }
  constructor(e, n, r) {
    this.context = e, this._parent = n, this.index = r, this.type = e.buffer.set.types[e.buffer.buffer[r]];
  }
  child(e, n, r) {
    let { buffer: i } = this.context, o = i.findChild(this.index + 4, i.buffer[this.index + 3], e, n - this.context.start, r);
    return o < 0 ? null : new An(this.context, this, o);
  }
  get firstChild() {
    return this.child(1, 0, 4);
  }
  get lastChild() {
    return this.child(-1, 0, 4);
  }
  childAfter(e) {
    return this.child(1, e, 2);
  }
  childBefore(e) {
    return this.child(-1, e, -2);
  }
  enter(e, n, r = 0) {
    if (r & Ne.ExcludeBuffers)
      return null;
    let { buffer: i } = this.context, o = i.findChild(this.index + 4, i.buffer[this.index + 3], n > 0 ? 1 : -1, e - this.context.start, n);
    return o < 0 ? null : new An(this.context, this, o);
  }
  get parent() {
    return this._parent || this.context.parent.nextSignificantParent();
  }
  externalSibling(e) {
    return this._parent ? null : this.context.parent.nextChild(this.context.index + e, e, 0, 4);
  }
  get nextSibling() {
    let { buffer: e } = this.context, n = e.buffer[this.index + 3];
    return n < (this._parent ? e.buffer[this._parent.index + 3] : e.buffer.length) ? new An(this.context, this._parent, n) : this.externalSibling(1);
  }
  get prevSibling() {
    let { buffer: e } = this.context, n = this._parent ? this._parent.index + 4 : 0;
    return this.index == n ? this.externalSibling(-1) : new An(this.context, this._parent, e.findChild(n, this.index, -1, 0, 4));
  }
  cursor(e = 0) {
    return new Ns(this, e);
  }
  get tree() {
    return null;
  }
  toTree() {
    let e = [], n = [], { buffer: r } = this.context, i = this.index + 4, o = r.buffer[this.index + 3];
    if (o > i) {
      let s = r.buffer[this.index + 1];
      e.push(r.slice(i, o, s)), n.push(0);
    }
    return new He(this.type, e, n, this.to - this.from);
  }
  resolve(e, n = 0) {
    return Yr(this, e, n, !1);
  }
  resolveInner(e, n = 0) {
    return Yr(this, e, n, !0);
  }
  enterUnfinishedNodesBefore(e) {
    return $y(this, e);
  }
  toString() {
    return this.context.buffer.childString(this.index);
  }
  getChild(e, n = null, r = null) {
    let i = Ls(this, e, n, r);
    return i.length ? i[0] : null;
  }
  getChildren(e, n = null, r = null) {
    return Ls(this, e, n, r);
  }
  get node() {
    return this;
  }
  matchContext(e) {
    return Is(this, e);
  }
}
class Ns {
  get name() {
    return this.type.name;
  }
  constructor(e, n = 0) {
    if (this.mode = n, this.buffer = null, this.stack = [], this.index = 0, this.bufferNode = null, e instanceof ln)
      this.yieldNode(e);
    else {
      this._tree = e.context.parent, this.buffer = e.context;
      for (let r = e._parent; r; r = r._parent)
        this.stack.unshift(r.index);
      this.bufferNode = e, this.yieldBuf(e.index);
    }
  }
  yieldNode(e) {
    return e ? (this._tree = e, this.type = e.type, this.from = e.from, this.to = e.to, !0) : !1;
  }
  yieldBuf(e, n) {
    this.index = e;
    let { start: r, buffer: i } = this.buffer;
    return this.type = n || i.set.types[i.buffer[e]], this.from = r + i.buffer[e + 1], this.to = r + i.buffer[e + 2], !0;
  }
  yield(e) {
    return e ? e instanceof ln ? (this.buffer = null, this.yieldNode(e)) : (this.buffer = e.context, this.yieldBuf(e.index, e.type)) : !1;
  }
  toString() {
    return this.buffer ? this.buffer.buffer.childString(this.index) : this._tree.toString();
  }
  enterChild(e, n, r) {
    if (!this.buffer)
      return this.yield(this._tree.nextChild(e < 0 ? this._tree._tree.children.length - 1 : 0, e, n, r, this.mode));
    let { buffer: i } = this.buffer, o = i.findChild(this.index + 4, i.buffer[this.index + 3], e, n - this.buffer.start, r);
    return o < 0 ? !1 : (this.stack.push(this.index), this.yieldBuf(o));
  }
  firstChild() {
    return this.enterChild(1, 0, 4);
  }
  lastChild() {
    return this.enterChild(-1, 0, 4);
  }
  childAfter(e) {
    return this.enterChild(1, e, 2);
  }
  childBefore(e) {
    return this.enterChild(-1, e, -2);
  }
  enter(e, n, r = this.mode) {
    return this.buffer ? r & Ne.ExcludeBuffers ? !1 : this.enterChild(1, e, n) : this.yield(this._tree.enter(e, n, r));
  }
  parent() {
    if (!this.buffer)
      return this.yieldNode(this.mode & Ne.IncludeAnonymous ? this._tree._parent : this._tree.parent);
    if (this.stack.length)
      return this.yieldBuf(this.stack.pop());
    let e = this.mode & Ne.IncludeAnonymous ? this.buffer.parent : this.buffer.parent.nextSignificantParent();
    return this.buffer = null, this.yieldNode(e);
  }
  sibling(e) {
    if (!this.buffer)
      return this._tree._parent ? this.yield(this._tree.index < 0 ? null : this._tree._parent.nextChild(this._tree.index + e, e, 0, 4, this.mode)) : !1;
    let { buffer: n } = this.buffer, r = this.stack.length - 1;
    if (e < 0) {
      let i = r < 0 ? 0 : this.stack[r] + 4;
      if (this.index != i)
        return this.yieldBuf(n.findChild(i, this.index, -1, 0, 4));
    } else {
      let i = n.buffer[this.index + 3];
      if (i < (r < 0 ? n.buffer.length : n.buffer[this.stack[r] + 3]))
        return this.yieldBuf(i);
    }
    return r < 0 ? this.yield(this.buffer.parent.nextChild(this.buffer.index + e, e, 0, 4, this.mode)) : !1;
  }
  nextSibling() {
    return this.sibling(1);
  }
  prevSibling() {
    return this.sibling(-1);
  }
  atLastNode(e) {
    let n, r, { buffer: i } = this;
    if (i) {
      if (e > 0) {
        if (this.index < i.buffer.buffer.length)
          return !1;
      } else
        for (let o = 0; o < this.index; o++)
          if (i.buffer.buffer[o + 3] < this.index)
            return !1;
      ({ index: n, parent: r } = i);
    } else
      ({ index: n, _parent: r } = this._tree);
    for (; r; { index: n, _parent: r } = r)
      if (n > -1)
        for (let o = n + e, s = e < 0 ? -1 : r._tree.children.length; o != s; o += e) {
          let l = r._tree.children[o];
          if (this.mode & Ne.IncludeAnonymous || l instanceof fr || !l.type.isAnonymous || Zu(l))
            return !1;
        }
    return !0;
  }
  move(e, n) {
    if (n && this.enterChild(e, 0, 4))
      return !0;
    for (; ; ) {
      if (this.sibling(e))
        return !0;
      if (this.atLastNode(e) || !this.parent())
        return !1;
    }
  }
  next(e = !0) {
    return this.move(1, e);
  }
  prev(e = !0) {
    return this.move(-1, e);
  }
  moveTo(e, n = 0) {
    for (; (this.from == this.to || (n < 1 ? this.from >= e : this.from > e) || (n > -1 ? this.to <= e : this.to < e)) && this.parent(); )
      ;
    for (; this.enterChild(1, e, n); )
      ;
    return this;
  }
  get node() {
    if (!this.buffer)
      return this._tree;
    let e = this.bufferNode, n = null, r = 0;
    if (e && e.context == this.buffer) {
      e:
        for (let i = this.index, o = this.stack.length; o >= 0; ) {
          for (let s = e; s; s = s._parent)
            if (s.index == i) {
              if (i == this.index)
                return s;
              n = s, r = o + 1;
              break e;
            }
          i = this.stack[--o];
        }
    }
    for (let i = r; i < this.stack.length; i++)
      n = new An(this.buffer, n, this.stack[i]);
    return this.bufferNode = new An(this.buffer, n, this.index);
  }
  get tree() {
    return this.buffer ? null : this._tree._tree;
  }
  iterate(e, n) {
    for (let r = 0; ; ) {
      let i = !1;
      if (this.type.isAnonymous || e(this) !== !1) {
        if (this.firstChild()) {
          r++;
          continue;
        }
        this.type.isAnonymous || (i = !0);
      }
      for (; i && n && n(this), i = this.type.isAnonymous, !this.nextSibling(); ) {
        if (!r)
          return;
        this.parent(), r--, i = !0;
      }
    }
  }
  matchContext(e) {
    if (!this.buffer)
      return Is(this.node, e);
    let { buffer: n } = this.buffer, { types: r } = n.set;
    for (let i = e.length - 1, o = this.stack.length - 1; i >= 0; o--) {
      if (o < 0)
        return Is(this.node, e, i);
      let s = r[n.buffer[this.stack[o]]];
      if (!s.isAnonymous) {
        if (e[i] && e[i] != s.name)
          return !1;
        i--;
      }
    }
    return !0;
  }
}
function Zu(t) {
  return t.children.some((e) => e instanceof fr || !e.type.isAnonymous || Zu(e));
}
function sle(t) {
  var e;
  let { buffer: n, nodeSet: r, maxBufferLength: i = nle, reused: o = [], minRepeatType: s = r.types.length } = t, l = Array.isArray(n) ? new Yu(n, n.length) : n, a = r.types, c = 0, u = 0;
  function h(x, w, v, C, L) {
    let { id: R, start: T, end: H, size: Q } = l, G = u;
    for (; Q < 0; )
      if (l.next(), Q == -1) {
        let ie = o[R];
        v.push(ie), C.push(T - x);
        return;
      } else if (Q == -3) {
        c = R;
        return;
      } else if (Q == -4) {
        u = R;
        return;
      } else
        throw new RangeError(`Unrecognized record size: ${Q}`);
    let S = a[R], z, $, he = T - x;
    if (H - T <= i && ($ = m(l.pos - w, L))) {
      let ie = new Uint16Array($.size - $.skip), ne = l.pos - $.size, oe = ie.length;
      for (; l.pos > ne; )
        oe = g($.start, ie, oe);
      z = new fr(ie, H - $.start, r), he = $.start - x;
    } else {
      let ie = l.pos - Q;
      l.next();
      let ne = [], oe = [], me = R >= s ? R : -1, re = 0, kt = H;
      for (; l.pos > ie; )
        me >= 0 && l.id == me && l.size >= 0 ? (l.end <= kt - i && (d(ne, oe, T, re, l.end, kt, me, G), re = ne.length, kt = l.end), l.next()) : h(T, ie, ne, oe, me);
      if (me >= 0 && re > 0 && re < ne.length && d(ne, oe, T, re, T, kt, me, G), ne.reverse(), oe.reverse(), me > -1 && re > 0) {
        let le = f(S);
        z = Ju(S, ne, oe, 0, ne.length, 0, H - T, le, le);
      } else
        z = p(S, ne, oe, H - T, G - H);
    }
    v.push(z), C.push(he);
  }
  function f(x) {
    return (w, v, C) => {
      let L = 0, R = w.length - 1, T, H;
      if (R >= 0 && (T = w[R]) instanceof He) {
        if (!R && T.type == x && T.length == C)
          return T;
        (H = T.prop(K.lookAhead)) && (L = v[R] + T.length + H);
      }
      return p(x, w, v, C, L);
    };
  }
  function d(x, w, v, C, L, R, T, H) {
    let Q = [], G = [];
    for (; x.length > C; )
      Q.push(x.pop()), G.push(w.pop() + v - L);
    x.push(p(r.types[T], Q, G, R - L, H - R)), w.push(L - v);
  }
  function p(x, w, v, C, L = 0, R) {
    if (c) {
      let T = [K.contextHash, c];
      R = R ? [T].concat(R) : [T];
    }
    if (L > 25) {
      let T = [K.lookAhead, L];
      R = R ? [T].concat(R) : [T];
    }
    return new He(x, w, v, C, R);
  }
  function m(x, w) {
    let v = l.fork(), C = 0, L = 0, R = 0, T = v.end - i, H = { size: 0, start: 0, skip: 0 };
    e:
      for (let Q = v.pos - x; v.pos > Q; ) {
        let G = v.size;
        if (v.id == w && G >= 0) {
          H.size = C, H.start = L, H.skip = R, R += 4, C += 4, v.next();
          continue;
        }
        let S = v.pos - G;
        if (G < 0 || S < Q || v.start < T)
          break;
        let z = v.id >= s ? 4 : 0, $ = v.start;
        for (v.next(); v.pos > S; ) {
          if (v.size < 0)
            if (v.size == -3)
              z += 4;
            else
              break e;
          else
            v.id >= s && (z += 4);
          v.next();
        }
        L = $, C += G, R += z;
      }
    return (w < 0 || C == x) && (H.size = C, H.start = L, H.skip = R), H.size > 4 ? H : void 0;
  }
  function g(x, w, v) {
    let { id: C, start: L, end: R, size: T } = l;
    if (l.next(), T >= 0 && C < s) {
      let H = v;
      if (T > 4) {
        let Q = l.pos - (T - 4);
        for (; l.pos > Q; )
          v = g(x, w, v);
      }
      w[--v] = H, w[--v] = R - x, w[--v] = L - x, w[--v] = C;
    } else
      T == -3 ? c = C : T == -4 && (u = C);
    return v;
  }
  let y = [], b = [];
  for (; l.pos > 0; )
    h(t.start || 0, t.bufferStart || 0, y, b, -1);
  let k = (e = t.length) !== null && e !== void 0 ? e : y.length ? b[0] + y[0].length : 0;
  return new He(a[t.topID], y.reverse(), b.reverse(), k);
}
const Sp = /* @__PURE__ */ new WeakMap();
function us(t, e) {
  if (!t.isAnonymous || e instanceof fr || e.type != t)
    return 1;
  let n = Sp.get(e);
  if (n == null) {
    n = 1;
    for (let r of e.children) {
      if (r.type != t || !(r instanceof He)) {
        n = 1;
        break;
      }
      n += us(t, r);
    }
    Sp.set(e, n);
  }
  return n;
}
function Ju(t, e, n, r, i, o, s, l, a) {
  let c = 0;
  for (let p = r; p < i; p++)
    c += us(t, e[p]);
  let u = Math.ceil(c * 1.5 / 8), h = [], f = [];
  function d(p, m, g, y, b) {
    for (let k = g; k < y; ) {
      let x = k, w = m[k], v = us(t, p[k]);
      for (k++; k < y; k++) {
        let C = us(t, p[k]);
        if (v + C >= u)
          break;
        v += C;
      }
      if (k == x + 1) {
        if (v > u) {
          let C = p[x];
          d(C.children, C.positions, 0, C.children.length, m[x] + b);
          continue;
        }
        h.push(p[x]);
      } else {
        let C = m[k - 1] + p[k - 1].length - w;
        h.push(Ju(t, p, m, x, k, w, C, null, a));
      }
      f.push(w + b - o);
    }
  }
  return d(e, n, r, i, 0), (l || a)(h, f, s);
}
class ir {
  constructor(e, n, r, i, o = !1, s = !1) {
    this.from = e, this.to = n, this.tree = r, this.offset = i, this.open = (o ? 1 : 0) | (s ? 2 : 0);
  }
  get openStart() {
    return (this.open & 1) > 0;
  }
  get openEnd() {
    return (this.open & 2) > 0;
  }
  static addTree(e, n = [], r = !1) {
    let i = [new ir(0, e.length, e, 0, !1, r)];
    for (let o of n)
      o.to > e.length && i.push(o);
    return i;
  }
  static applyChanges(e, n, r = 128) {
    if (!n.length)
      return e;
    let i = [], o = 1, s = e.length ? e[0] : null;
    for (let l = 0, a = 0, c = 0; ; l++) {
      let u = l < n.length ? n[l] : null, h = u ? u.fromA : 1e9;
      if (h - a >= r)
        for (; s && s.from < h; ) {
          let f = s;
          if (a >= f.from || h <= f.to || c) {
            let d = Math.max(f.from, a) - c, p = Math.min(f.to, h) - c;
            f = d >= p ? null : new ir(d, p, f.tree, f.offset + c, l > 0, !!u);
          }
          if (f && i.push(f), s.to > h)
            break;
          s = o < e.length ? e[o++] : null;
        }
      if (!u)
        break;
      a = u.toA, c = u.toA - u.toB;
    }
    return i;
  }
}
class lle {
  startParse(e, n, r) {
    return typeof e == "string" && (e = new ale(e)), r = r ? r.length ? r.map((i) => new Da(i.from, i.to)) : [new Da(0, 0)] : [new Da(0, e.length)], this.createParse(e, n || [], r);
  }
  parse(e, n, r) {
    let i = this.startParse(e, n, r);
    for (; ; ) {
      let o = i.advance();
      if (o)
        return o;
    }
  }
}
class ale {
  constructor(e) {
    this.string = e;
  }
  get length() {
    return this.string.length;
  }
  chunk(e) {
    return this.string.slice(e);
  }
  get lineChunks() {
    return !1;
  }
  read(e, n) {
    return this.string.slice(e, n);
  }
}
new K({ perNode: !0 });
let cle = 0;
class Ft {
  constructor(e, n, r) {
    this.set = e, this.base = n, this.modified = r, this.id = cle++;
  }
  static define(e) {
    if (e != null && e.base)
      throw new Error("Can not derive from a modified tag");
    let n = new Ft([], null, []);
    if (n.set.push(n), e)
      for (let r of e.set)
        n.set.push(r);
    return n;
  }
  static defineModifier() {
    let e = new Ps();
    return (n) => n.modified.indexOf(e) > -1 ? n : Ps.get(n.base || n, n.modified.concat(e).sort((r, i) => r.id - i.id));
  }
}
let ule = 0;
class Ps {
  constructor() {
    this.instances = [], this.id = ule++;
  }
  static get(e, n) {
    if (!n.length)
      return e;
    let r = n[0].instances.find((l) => l.base == e && hle(n, l.modified));
    if (r)
      return r;
    let i = [], o = new Ft(i, e, n);
    for (let l of n)
      l.instances.push(o);
    let s = fle(n);
    for (let l of e.set)
      if (!l.modified.length)
        for (let a of s)
          i.push(Ps.get(l, a));
    return o;
  }
}
function hle(t, e) {
  return t.length == e.length && t.every((n, r) => n == e[r]);
}
function fle(t) {
  let e = [[]];
  for (let n = 0; n < t.length; n++)
    for (let r = 0, i = e.length; r < i; r++)
      e.push(e[r].concat(t[n]));
  return e.sort((n, r) => r.length - n.length);
}
function dle(t) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let n in t) {
    let r = t[n];
    Array.isArray(r) || (r = [r]);
    for (let i of n.split(" "))
      if (i) {
        let o = [], s = 2, l = i;
        for (let h = 0; ; ) {
          if (l == "..." && h > 0 && h + 3 == i.length) {
            s = 1;
            break;
          }
          let f = /^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(l);
          if (!f)
            throw new RangeError("Invalid path: " + i);
          if (o.push(f[0] == "*" ? "" : f[0][0] == '"' ? JSON.parse(f[0]) : f[0]), h += f[0].length, h == i.length)
            break;
          let d = i[h++];
          if (h == i.length && d == "!") {
            s = 0;
            break;
          }
          if (d != "/")
            throw new RangeError("Invalid path: " + i);
          l = i.slice(h);
        }
        let a = o.length - 1, c = o[a];
        if (!c)
          throw new RangeError("Invalid path: " + i);
        let u = new Bs(r, s, a > 0 ? o.slice(0, a) : null);
        e[c] = u.sort(e[c]);
      }
  }
  return Hy.add(e);
}
const Hy = new K();
class Bs {
  constructor(e, n, r, i) {
    this.tags = e, this.mode = n, this.context = r, this.next = i;
  }
  get opaque() {
    return this.mode == 0;
  }
  get inherit() {
    return this.mode == 1;
  }
  sort(e) {
    return !e || e.depth < this.depth ? (this.next = e, this) : (e.next = this.sort(e.next), e);
  }
  get depth() {
    return this.context ? this.context.length : 0;
  }
}
Bs.empty = new Bs([], 2, null);
function zy(t, e) {
  let n = /* @__PURE__ */ Object.create(null);
  for (let o of t)
    if (!Array.isArray(o.tag))
      n[o.tag.id] = o.class;
    else
      for (let s of o.tag)
        n[s.id] = o.class;
  let { scope: r, all: i = null } = e || {};
  return {
    style: (o) => {
      let s = i;
      for (let l of o)
        for (let a of l.set) {
          let c = n[a.id];
          if (c) {
            s = s ? s + " " + c : c;
            break;
          }
        }
      return s;
    },
    scope: r
  };
}
function ple(t, e) {
  let n = null;
  for (let r of t) {
    let i = r.style(e);
    i && (n = n ? n + " " + i : i);
  }
  return n;
}
function mle(t, e, n, r = 0, i = t.length) {
  let o = new gle(r, Array.isArray(e) ? e : [e], n);
  o.highlightRange(t.cursor(), r, i, "", o.highlighters), o.flush(i);
}
class gle {
  constructor(e, n, r) {
    this.at = e, this.highlighters = n, this.span = r, this.class = "";
  }
  startSpan(e, n) {
    n != this.class && (this.flush(e), e > this.at && (this.at = e), this.class = n);
  }
  flush(e) {
    e > this.at && this.class && this.span(this.at, e, this.class);
  }
  highlightRange(e, n, r, i, o) {
    let { type: s, from: l, to: a } = e;
    if (l >= r || a <= n)
      return;
    s.isTop && (o = this.highlighters.filter((d) => !d.scope || d.scope(s)));
    let c = i, u = yle(e) || Bs.empty, h = ple(o, u.tags);
    if (h && (c && (c += " "), c += h, u.mode == 1 && (i += (i ? " " : "") + h)), this.startSpan(Math.max(n, l), c), u.opaque)
      return;
    let f = e.tree && e.tree.prop(K.mounted);
    if (f && f.overlay) {
      let d = e.node.enter(f.overlay[0].from + l, 1), p = this.highlighters.filter((g) => !g.scope || g.scope(f.tree.type)), m = e.firstChild();
      for (let g = 0, y = l; ; g++) {
        let b = g < f.overlay.length ? f.overlay[g] : null, k = b ? b.from + l : a, x = Math.max(n, y), w = Math.min(r, k);
        if (x < w && m)
          for (; e.from < w && (this.highlightRange(e, x, w, i, o), this.startSpan(Math.min(w, e.to), c), !(e.to >= k || !e.nextSibling())); )
            ;
        if (!b || k > r)
          break;
        y = b.to + l, y > n && (this.highlightRange(d.cursor(), Math.max(n, b.from + l), Math.min(r, y), "", p), this.startSpan(Math.min(r, y), c));
      }
      m && e.parent();
    } else if (e.firstChild()) {
      f && (i = "");
      do
        if (!(e.to <= n)) {
          if (e.from >= r)
            break;
          this.highlightRange(e, n, r, i, o), this.startSpan(Math.min(r, e.to), c);
        }
      while (e.nextSibling());
      e.parent();
    }
  }
}
function yle(t) {
  let e = t.type.prop(Hy);
  for (; e && e.context && !t.matchContext(e.context); )
    e = e.next;
  return e || null;
}
const D = Ft.define, qo = D(), yn = D(), Ep = D(yn), Tp = D(yn), bn = D(), $o = D(bn), Ma = D(bn), Pt = D(), Wn = D(Pt), It = D(), Nt = D(), Yc = D(), mi = D(Yc), Ho = D(), O = {
  comment: qo,
  lineComment: D(qo),
  blockComment: D(qo),
  docComment: D(qo),
  name: yn,
  variableName: D(yn),
  typeName: Ep,
  tagName: D(Ep),
  propertyName: Tp,
  attributeName: D(Tp),
  className: D(yn),
  labelName: D(yn),
  namespace: D(yn),
  macroName: D(yn),
  literal: bn,
  string: $o,
  docString: D($o),
  character: D($o),
  attributeValue: D($o),
  number: Ma,
  integer: D(Ma),
  float: D(Ma),
  bool: D(bn),
  regexp: D(bn),
  escape: D(bn),
  color: D(bn),
  url: D(bn),
  keyword: It,
  self: D(It),
  null: D(It),
  atom: D(It),
  unit: D(It),
  modifier: D(It),
  operatorKeyword: D(It),
  controlKeyword: D(It),
  definitionKeyword: D(It),
  moduleKeyword: D(It),
  operator: Nt,
  derefOperator: D(Nt),
  arithmeticOperator: D(Nt),
  logicOperator: D(Nt),
  bitwiseOperator: D(Nt),
  compareOperator: D(Nt),
  updateOperator: D(Nt),
  definitionOperator: D(Nt),
  typeOperator: D(Nt),
  controlOperator: D(Nt),
  punctuation: Yc,
  separator: D(Yc),
  bracket: mi,
  angleBracket: D(mi),
  squareBracket: D(mi),
  paren: D(mi),
  brace: D(mi),
  content: Pt,
  heading: Wn,
  heading1: D(Wn),
  heading2: D(Wn),
  heading3: D(Wn),
  heading4: D(Wn),
  heading5: D(Wn),
  heading6: D(Wn),
  contentSeparator: D(Pt),
  list: D(Pt),
  quote: D(Pt),
  emphasis: D(Pt),
  strong: D(Pt),
  link: D(Pt),
  monospace: D(Pt),
  strikethrough: D(Pt),
  inserted: D(),
  deleted: D(),
  changed: D(),
  invalid: D(),
  meta: Ho,
  documentMeta: D(Ho),
  annotation: D(Ho),
  processingInstruction: D(Ho),
  definition: Ft.defineModifier(),
  constant: Ft.defineModifier(),
  function: Ft.defineModifier(),
  standard: Ft.defineModifier(),
  local: Ft.defineModifier(),
  special: Ft.defineModifier()
};
zy([
  { tag: O.link, class: "tok-link" },
  { tag: O.heading, class: "tok-heading" },
  { tag: O.emphasis, class: "tok-emphasis" },
  { tag: O.strong, class: "tok-strong" },
  { tag: O.keyword, class: "tok-keyword" },
  { tag: O.atom, class: "tok-atom" },
  { tag: O.bool, class: "tok-bool" },
  { tag: O.url, class: "tok-url" },
  { tag: O.labelName, class: "tok-labelName" },
  { tag: O.inserted, class: "tok-inserted" },
  { tag: O.deleted, class: "tok-deleted" },
  { tag: O.literal, class: "tok-literal" },
  { tag: O.string, class: "tok-string" },
  { tag: O.number, class: "tok-number" },
  { tag: [O.regexp, O.escape, O.special(O.string)], class: "tok-string2" },
  { tag: O.variableName, class: "tok-variableName" },
  { tag: O.local(O.variableName), class: "tok-variableName tok-local" },
  { tag: O.definition(O.variableName), class: "tok-variableName tok-definition" },
  { tag: O.special(O.variableName), class: "tok-variableName2" },
  { tag: O.definition(O.propertyName), class: "tok-propertyName tok-definition" },
  { tag: O.typeName, class: "tok-typeName" },
  { tag: O.namespace, class: "tok-namespace" },
  { tag: O.className, class: "tok-className" },
  { tag: O.macroName, class: "tok-macroName" },
  { tag: O.propertyName, class: "tok-propertyName" },
  { tag: O.operator, class: "tok-operator" },
  { tag: O.comment, class: "tok-comment" },
  { tag: O.meta, class: "tok-meta" },
  { tag: O.invalid, class: "tok-invalid" },
  { tag: O.punctuation, class: "tok-punctuation" }
]);
var Oa;
const Ai = /* @__PURE__ */ new K(), ble = /* @__PURE__ */ new K();
class Vt {
  constructor(e, n, r = [], i = "") {
    this.data = e, this.name = i, Y.prototype.hasOwnProperty("tree") || Object.defineProperty(Y.prototype, "tree", { get() {
      return ze(this);
    } }), this.parser = n, this.extension = [
      Bn.of(this),
      Y.languageData.of((o, s, l) => {
        let a = Dp(o, s, l), c = a.type.prop(Ai);
        if (!c)
          return [];
        let u = o.facet(c), h = a.type.prop(ble);
        if (h) {
          let f = a.resolve(s - a.from, l);
          for (let d of h)
            if (d.test(f, o)) {
              let p = o.facet(d.facet);
              return d.type == "replace" ? p : p.concat(u);
            }
        }
        return u;
      })
    ].concat(r);
  }
  isActiveAt(e, n, r = -1) {
    return Dp(e, n, r).type.prop(Ai) == this.data;
  }
  findRegions(e) {
    let n = e.facet(Bn);
    if ((n == null ? void 0 : n.data) == this.data)
      return [{ from: 0, to: e.doc.length }];
    if (!n || !n.allowsNesting)
      return [];
    let r = [], i = (o, s) => {
      if (o.prop(Ai) == this.data) {
        r.push({ from: s, to: s + o.length });
        return;
      }
      let l = o.prop(K.mounted);
      if (l) {
        if (l.tree.prop(Ai) == this.data) {
          if (l.overlay)
            for (let a of l.overlay)
              r.push({ from: a.from + s, to: a.to + s });
          else
            r.push({ from: s, to: s + o.length });
          return;
        } else if (l.overlay) {
          let a = r.length;
          if (i(l.tree, l.overlay[0].from + s), r.length > a)
            return;
        }
      }
      for (let a = 0; a < o.children.length; a++) {
        let c = o.children[a];
        c instanceof He && i(c, o.positions[a] + s);
      }
    };
    return i(ze(e), 0), r;
  }
  get allowsNesting() {
    return !0;
  }
}
Vt.setState = /* @__PURE__ */ j.define();
function Dp(t, e, n) {
  let r = t.facet(Bn), i = ze(t).topNode;
  if (!r || r.allowsNesting)
    for (let o = i; o; o = o.enter(e, n, Ne.ExcludeBuffers))
      o.type.isTop && (i = o);
  return i;
}
function ze(t) {
  let e = t.field(Vt.state, !1);
  return e ? e.tree : He.empty;
}
class vle {
  constructor(e) {
    this.doc = e, this.cursorPos = 0, this.string = "", this.cursor = e.iter();
  }
  get length() {
    return this.doc.length;
  }
  syncTo(e) {
    return this.string = this.cursor.next(e - this.cursorPos).value, this.cursorPos = e + this.string.length, this.cursorPos - this.string.length;
  }
  chunk(e) {
    return this.syncTo(e), this.string;
  }
  get lineChunks() {
    return !0;
  }
  read(e, n) {
    let r = this.cursorPos - this.string.length;
    return e < r || n >= this.cursorPos ? this.doc.sliceString(e, n) : this.string.slice(e - r, n - r);
  }
}
let gi = null;
class Fs {
  constructor(e, n, r = [], i, o, s, l, a) {
    this.parser = e, this.state = n, this.fragments = r, this.tree = i, this.treeLen = o, this.viewport = s, this.skipped = l, this.scheduleOn = a, this.parse = null, this.tempSkipped = [];
  }
  static create(e, n, r) {
    return new Fs(e, n, [], He.empty, 0, r, [], null);
  }
  startParse() {
    return this.parser.startParse(new vle(this.state.doc), this.fragments);
  }
  work(e, n) {
    return n != null && n >= this.state.doc.length && (n = void 0), this.tree != He.empty && this.isDone(n != null ? n : this.state.doc.length) ? (this.takeTree(), !0) : this.withContext(() => {
      var r;
      if (typeof e == "number") {
        let i = Date.now() + e;
        e = () => Date.now() > i;
      }
      for (this.parse || (this.parse = this.startParse()), n != null && (this.parse.stoppedAt == null || this.parse.stoppedAt > n) && n < this.state.doc.length && this.parse.stopAt(n); ; ) {
        let i = this.parse.advance();
        if (i)
          if (this.fragments = this.withoutTempSkipped(ir.addTree(i, this.fragments, this.parse.stoppedAt != null)), this.treeLen = (r = this.parse.stoppedAt) !== null && r !== void 0 ? r : this.state.doc.length, this.tree = i, this.parse = null, this.treeLen < (n != null ? n : this.state.doc.length))
            this.parse = this.startParse();
          else
            return !0;
        if (e())
          return !1;
      }
    });
  }
  takeTree() {
    let e, n;
    this.parse && (e = this.parse.parsedPos) >= this.treeLen && ((this.parse.stoppedAt == null || this.parse.stoppedAt > e) && this.parse.stopAt(e), this.withContext(() => {
      for (; !(n = this.parse.advance()); )
        ;
    }), this.treeLen = e, this.tree = n, this.fragments = this.withoutTempSkipped(ir.addTree(this.tree, this.fragments, !0)), this.parse = null);
  }
  withContext(e) {
    let n = gi;
    gi = this;
    try {
      return e();
    } finally {
      gi = n;
    }
  }
  withoutTempSkipped(e) {
    for (let n; n = this.tempSkipped.pop(); )
      e = Mp(e, n.from, n.to);
    return e;
  }
  changes(e, n) {
    let { fragments: r, tree: i, treeLen: o, viewport: s, skipped: l } = this;
    if (this.takeTree(), !e.empty) {
      let a = [];
      if (e.iterChangedRanges((c, u, h, f) => a.push({ fromA: c, toA: u, fromB: h, toB: f })), r = ir.applyChanges(r, a), i = He.empty, o = 0, s = { from: e.mapPos(s.from, -1), to: e.mapPos(s.to, 1) }, this.skipped.length) {
        l = [];
        for (let c of this.skipped) {
          let u = e.mapPos(c.from, 1), h = e.mapPos(c.to, -1);
          u < h && l.push({ from: u, to: h });
        }
      }
    }
    return new Fs(this.parser, n, r, i, o, s, l, this.scheduleOn);
  }
  updateViewport(e) {
    if (this.viewport.from == e.from && this.viewport.to == e.to)
      return !1;
    this.viewport = e;
    let n = this.skipped.length;
    for (let r = 0; r < this.skipped.length; r++) {
      let { from: i, to: o } = this.skipped[r];
      i < e.to && o > e.from && (this.fragments = Mp(this.fragments, i, o), this.skipped.splice(r--, 1));
    }
    return this.skipped.length >= n ? !1 : (this.reset(), !0);
  }
  reset() {
    this.parse && (this.takeTree(), this.parse = null);
  }
  skipUntilInView(e, n) {
    this.skipped.push({ from: e, to: n });
  }
  static getSkippingParser(e) {
    return new class extends lle {
      createParse(n, r, i) {
        let o = i[0].from, s = i[i.length - 1].to;
        return {
          parsedPos: o,
          advance() {
            let a = gi;
            if (a) {
              for (let c of i)
                a.tempSkipped.push(c);
              e && (a.scheduleOn = a.scheduleOn ? Promise.all([a.scheduleOn, e]) : e);
            }
            return this.parsedPos = s, new He(xt.none, [], [], s - o);
          },
          stoppedAt: null,
          stopAt() {
          }
        };
      }
    }();
  }
  isDone(e) {
    e = Math.min(e, this.state.doc.length);
    let n = this.fragments;
    return this.treeLen >= e && n.length && n[0].from == 0 && n[0].to >= e;
  }
  static get() {
    return gi;
  }
}
function Mp(t, e, n) {
  return ir.applyChanges(t, [{ fromA: e, toA: n, fromB: e, toB: n }]);
}
class Zr {
  constructor(e) {
    this.context = e, this.tree = e.tree;
  }
  apply(e) {
    if (!e.docChanged && this.tree == this.context.tree)
      return this;
    let n = this.context.changes(e.changes, e.state), r = this.context.treeLen == e.startState.doc.length ? void 0 : Math.max(e.changes.mapPos(this.context.treeLen), n.viewport.to);
    return n.work(20, r) || n.takeTree(), new Zr(n);
  }
  static init(e) {
    let n = Math.min(3e3, e.doc.length), r = Fs.create(e.facet(Bn).parser, e, { from: 0, to: n });
    return r.work(20, n) || r.takeTree(), new Zr(r);
  }
}
Vt.state = /* @__PURE__ */ Be.define({
  create: Zr.init,
  update(t, e) {
    for (let n of e.effects)
      if (n.is(Vt.setState))
        return n.value;
    return e.startState.facet(Bn) != e.state.facet(Bn) ? Zr.init(e.state) : t.apply(e);
  }
});
let Vy = (t) => {
  let e = setTimeout(() => t(), 500);
  return () => clearTimeout(e);
};
typeof requestIdleCallback < "u" && (Vy = (t) => {
  let e = -1, n = setTimeout(() => {
    e = requestIdleCallback(t, { timeout: 500 - 100 });
  }, 100);
  return () => e < 0 ? clearTimeout(n) : cancelIdleCallback(e);
});
const Ra = typeof navigator < "u" && ((Oa = navigator.scheduling) === null || Oa === void 0 ? void 0 : Oa.isInputPending) ? () => navigator.scheduling.isInputPending() : null, xle = /* @__PURE__ */ Ee.fromClass(class {
  constructor(e) {
    this.view = e, this.working = null, this.workScheduled = 0, this.chunkEnd = -1, this.chunkBudget = -1, this.work = this.work.bind(this), this.scheduleWork();
  }
  update(e) {
    let n = this.view.state.field(Vt.state).context;
    (n.updateViewport(e.view.viewport) || this.view.viewport.to > n.treeLen) && this.scheduleWork(), e.docChanged && (this.view.hasFocus && (this.chunkBudget += 50), this.scheduleWork()), this.checkAsyncSchedule(n);
  }
  scheduleWork() {
    if (this.working)
      return;
    let { state: e } = this.view, n = e.field(Vt.state);
    (n.tree != n.context.tree || !n.context.isDone(e.doc.length)) && (this.working = Vy(this.work));
  }
  work(e) {
    this.working = null;
    let n = Date.now();
    if (this.chunkEnd < n && (this.chunkEnd < 0 || this.view.hasFocus) && (this.chunkEnd = n + 3e4, this.chunkBudget = 3e3), this.chunkBudget <= 0)
      return;
    let { state: r, viewport: { to: i } } = this.view, o = r.field(Vt.state);
    if (o.tree == o.context.tree && o.context.isDone(i + 1e5))
      return;
    let s = Date.now() + Math.min(this.chunkBudget, 100, e && !Ra ? Math.max(25, e.timeRemaining() - 5) : 1e9), l = o.context.treeLen < i && r.doc.length > i + 1e3, a = o.context.work(() => Ra && Ra() || Date.now() > s, i + (l ? 0 : 1e5));
    this.chunkBudget -= Date.now() - n, (a || this.chunkBudget <= 0) && (o.context.takeTree(), this.view.dispatch({ effects: Vt.setState.of(new Zr(o.context)) })), this.chunkBudget > 0 && !(a && !l) && this.scheduleWork(), this.checkAsyncSchedule(o.context);
  }
  checkAsyncSchedule(e) {
    e.scheduleOn && (this.workScheduled++, e.scheduleOn.then(() => this.scheduleWork()).catch((n) => pt(this.view.state, n)).then(() => this.workScheduled--), e.scheduleOn = null);
  }
  destroy() {
    this.working && this.working();
  }
  isWorking() {
    return !!(this.working || this.workScheduled > 0);
  }
}, {
  eventHandlers: { focus() {
    this.scheduleWork();
  } }
}), Bn = /* @__PURE__ */ N.define({
  combine(t) {
    return t.length ? t[0] : null;
  },
  enables: (t) => [
    Vt.state,
    xle,
    I.contentAttributes.compute([t], (e) => {
      let n = e.facet(t);
      return n && n.name ? { "data-language": n.name } : {};
    })
  ]
}), _le = /* @__PURE__ */ N.define(), Xu = /* @__PURE__ */ N.define({
  combine: (t) => {
    if (!t.length)
      return "  ";
    let e = t[0];
    if (!e || /\S/.test(e) || Array.from(e).some((n) => n != e[0]))
      throw new Error("Invalid indent unit: " + JSON.stringify(t[0]));
    return e;
  }
});
function qs(t) {
  let e = t.facet(Xu);
  return e.charCodeAt(0) == 9 ? t.tabSize * e.length : e.length;
}
function Qi(t, e) {
  let n = "", r = t.tabSize, i = t.facet(Xu)[0];
  if (i == "	") {
    for (; e >= r; )
      n += "	", e -= r;
    i = " ";
  }
  for (let o = 0; o < e; o++)
    n += i;
  return n;
}
function Qu(t, e) {
  t instanceof Y && (t = new _l(t));
  for (let r of t.state.facet(_le)) {
    let i = r(t, e);
    if (i !== void 0)
      return i;
  }
  let n = ze(t.state);
  return n.length >= e ? wle(t, n, e) : null;
}
class _l {
  constructor(e, n = {}) {
    this.state = e, this.options = n, this.unit = qs(e);
  }
  lineAt(e, n = 1) {
    let r = this.state.doc.lineAt(e), { simulateBreak: i, simulateDoubleBreak: o } = this.options;
    return i != null && i >= r.from && i <= r.to ? o && i == e ? { text: "", from: e } : (n < 0 ? i < e : i <= e) ? { text: r.text.slice(i - r.from), from: i } : { text: r.text.slice(0, i - r.from), from: r.from } : r;
  }
  textAfterPos(e, n = 1) {
    if (this.options.simulateDoubleBreak && e == this.options.simulateBreak)
      return "";
    let { text: r, from: i } = this.lineAt(e, n);
    return r.slice(e - i, Math.min(r.length, e + 100 - i));
  }
  column(e, n = 1) {
    let { text: r, from: i } = this.lineAt(e, n), o = this.countColumn(r, e - i), s = this.options.overrideIndentation ? this.options.overrideIndentation(i) : -1;
    return s > -1 && (o += s - this.countColumn(r, r.search(/\S|$/))), o;
  }
  countColumn(e, n = e.length) {
    return li(e, this.state.tabSize, n);
  }
  lineIndent(e, n = 1) {
    let { text: r, from: i } = this.lineAt(e, n), o = this.options.overrideIndentation;
    if (o) {
      let s = o(i);
      if (s > -1)
        return s;
    }
    return this.countColumn(r, r.search(/\S|$/));
  }
  get simulatedBreak() {
    return this.options.simulateBreak || null;
  }
}
const kle = /* @__PURE__ */ new K();
function wle(t, e, n) {
  return Uy(e.resolveInner(n).enterUnfinishedNodesBefore(n), n, t);
}
function Cle(t) {
  return t.pos == t.options.simulateBreak && t.options.simulateDoubleBreak;
}
function Ale(t) {
  let e = t.type.prop(kle);
  if (e)
    return e;
  let n = t.firstChild, r;
  if (n && (r = n.type.prop(K.closedBy))) {
    let i = t.lastChild, o = i && r.indexOf(i.name) > -1;
    return (s) => Dle(s, !0, 1, void 0, o && !Cle(s) ? i.from : void 0);
  }
  return t.parent == null ? Sle : null;
}
function Uy(t, e, n) {
  for (; t; t = t.parent) {
    let r = Ale(t);
    if (r)
      return r(eh.create(n, e, t));
  }
  return null;
}
function Sle() {
  return 0;
}
class eh extends _l {
  constructor(e, n, r) {
    super(e.state, e.options), this.base = e, this.pos = n, this.node = r;
  }
  static create(e, n, r) {
    return new eh(e, n, r);
  }
  get textAfter() {
    return this.textAfterPos(this.pos);
  }
  get baseIndent() {
    return this.baseIndentFor(this.node);
  }
  baseIndentFor(e) {
    let n = this.state.doc.lineAt(e.from);
    for (; ; ) {
      let r = e.resolve(n.from);
      for (; r.parent && r.parent.from == r.from; )
        r = r.parent;
      if (Ele(r, e))
        break;
      n = this.state.doc.lineAt(r.from);
    }
    return this.lineIndent(n.from);
  }
  continue() {
    let e = this.node.parent;
    return e ? Uy(e, this.pos, this.base) : 0;
  }
}
function Ele(t, e) {
  for (let n = e; n; n = n.parent)
    if (t == n)
      return !0;
  return !1;
}
function Tle(t) {
  let e = t.node, n = e.childAfter(e.from), r = e.lastChild;
  if (!n)
    return null;
  let i = t.options.simulateBreak, o = t.state.doc.lineAt(n.from), s = i == null || i <= o.from ? o.to : Math.min(o.to, i);
  for (let l = n.to; ; ) {
    let a = e.childAfter(l);
    if (!a || a == r)
      return null;
    if (!a.type.isSkipped)
      return a.from < s ? n : null;
    l = a.to;
  }
}
function Dle(t, e, n, r, i) {
  let o = t.textAfter, s = o.match(/^\s*/)[0].length, l = r && o.slice(s, s + r.length) == r || i == t.pos + s, a = e ? Tle(t) : null;
  return a ? l ? t.column(a.from) : t.column(a.to) : t.baseIndent + (l ? 0 : t.unit * n);
}
const Mle = 200;
function Ole() {
  return Y.transactionFilter.of((t) => {
    if (!t.docChanged || !t.isUserEvent("input.type") && !t.isUserEvent("input.complete"))
      return t;
    let e = t.startState.languageDataAt("indentOnInput", t.startState.selection.main.head);
    if (!e.length)
      return t;
    let n = t.newDoc, { head: r } = t.newSelection.main, i = n.lineAt(r);
    if (r > i.from + Mle)
      return t;
    let o = n.sliceString(i.from, r);
    if (!e.some((c) => c.test(o)))
      return t;
    let { state: s } = t, l = -1, a = [];
    for (let { head: c } of s.selection.ranges) {
      let u = s.doc.lineAt(c);
      if (u.from == l)
        continue;
      l = u.from;
      let h = Qu(s, u.from);
      if (h == null)
        continue;
      let f = /^\s*/.exec(u.text)[0], d = Qi(s, h);
      f != d && a.push({ from: u.from, to: u.from + f.length, insert: d });
    }
    return a.length ? [t, { changes: a, sequential: !0 }] : t;
  });
}
const Rle = /* @__PURE__ */ N.define(), Lle = /* @__PURE__ */ new K();
function Ile(t, e, n) {
  let r = ze(t);
  if (r.length < n)
    return null;
  let i = r.resolveInner(n, 1), o = null;
  for (let s = i; s; s = s.parent) {
    if (s.to <= n || s.from > n)
      continue;
    if (o && s.from < e)
      break;
    let l = s.type.prop(Lle);
    if (l && (s.to < r.length - 50 || r.length == t.doc.length || !Nle(s))) {
      let a = l(s, t);
      a && a.from <= n && a.from >= e && a.to > n && (o = a);
    }
  }
  return o;
}
function Nle(t) {
  let e = t.lastChild;
  return e && e.to == t.to && e.type.isError;
}
function $s(t, e, n) {
  for (let r of t.facet(Rle)) {
    let i = r(t, e, n);
    if (i)
      return i;
  }
  return Ile(t, e, n);
}
function Wy(t, e) {
  let n = e.mapPos(t.from, 1), r = e.mapPos(t.to, -1);
  return n >= r ? void 0 : { from: n, to: r };
}
const kl = /* @__PURE__ */ j.define({ map: Wy }), co = /* @__PURE__ */ j.define({ map: Wy });
function jy(t) {
  let e = [];
  for (let { head: n } of t.state.selection.ranges)
    e.some((r) => r.from <= n && r.to >= n) || e.push(t.lineBlockAt(n));
  return e;
}
const ur = /* @__PURE__ */ Be.define({
  create() {
    return V.none;
  },
  update(t, e) {
    t = t.map(e.changes);
    for (let n of e.effects)
      if (n.is(kl) && !Ple(t, n.value.from, n.value.to)) {
        let { preparePlaceholder: r } = e.state.facet(th), i = r ? V.replace({ widget: new Vle(r(e.state, n.value)) }) : Op;
        t = t.update({ add: [i.range(n.value.from, n.value.to)] });
      } else
        n.is(co) && (t = t.update({
          filter: (r, i) => n.value.from != r || n.value.to != i,
          filterFrom: n.value.from,
          filterTo: n.value.to
        }));
    if (e.selection) {
      let n = !1, { head: r } = e.selection.main;
      t.between(r, r, (i, o) => {
        i < r && o > r && (n = !0);
      }), n && (t = t.update({
        filterFrom: r,
        filterTo: r,
        filter: (i, o) => o <= r || i >= r
      }));
    }
    return t;
  },
  provide: (t) => I.decorations.from(t),
  toJSON(t, e) {
    let n = [];
    return t.between(0, e.doc.length, (r, i) => {
      n.push(r, i);
    }), n;
  },
  fromJSON(t) {
    if (!Array.isArray(t) || t.length % 2)
      throw new RangeError("Invalid JSON for fold state");
    let e = [];
    for (let n = 0; n < t.length; ) {
      let r = t[n++], i = t[n++];
      if (typeof r != "number" || typeof i != "number")
        throw new RangeError("Invalid JSON for fold state");
      e.push(Op.range(r, i));
    }
    return V.set(e, !0);
  }
});
function Hs(t, e, n) {
  var r;
  let i = null;
  return (r = t.field(ur, !1)) === null || r === void 0 || r.between(e, n, (o, s) => {
    (!i || i.from > o) && (i = { from: o, to: s });
  }), i;
}
function Ple(t, e, n) {
  let r = !1;
  return t.between(e, e, (i, o) => {
    i == e && o == n && (r = !0);
  }), r;
}
function Gy(t, e) {
  return t.field(ur, !1) ? e : e.concat(j.appendConfig.of(Yy()));
}
const Ble = (t) => {
  for (let e of jy(t)) {
    let n = $s(t.state, e.from, e.to);
    if (n)
      return t.dispatch({ effects: Gy(t.state, [kl.of(n), Ky(t, n)]) }), !0;
  }
  return !1;
}, Fle = (t) => {
  if (!t.state.field(ur, !1))
    return !1;
  let e = [];
  for (let n of jy(t)) {
    let r = Hs(t.state, n.from, n.to);
    r && e.push(co.of(r), Ky(t, r, !1));
  }
  return e.length && t.dispatch({ effects: e }), e.length > 0;
};
function Ky(t, e, n = !0) {
  let r = t.state.doc.lineAt(e.from).number, i = t.state.doc.lineAt(e.to).number;
  return I.announce.of(`${t.state.phrase(n ? "Folded lines" : "Unfolded lines")} ${r} ${t.state.phrase("to")} ${i}.`);
}
const qle = (t) => {
  let { state: e } = t, n = [];
  for (let r = 0; r < e.doc.length; ) {
    let i = t.lineBlockAt(r), o = $s(e, i.from, i.to);
    o && n.push(kl.of(o)), r = (o ? t.lineBlockAt(o.to) : i).to + 1;
  }
  return n.length && t.dispatch({ effects: Gy(t.state, n) }), !!n.length;
}, $le = (t) => {
  let e = t.state.field(ur, !1);
  if (!e || !e.size)
    return !1;
  let n = [];
  return e.between(0, t.state.doc.length, (r, i) => {
    n.push(co.of({ from: r, to: i }));
  }), t.dispatch({ effects: n }), !0;
}, Hle = [
  { key: "Ctrl-Shift-[", mac: "Cmd-Alt-[", run: Ble },
  { key: "Ctrl-Shift-]", mac: "Cmd-Alt-]", run: Fle },
  { key: "Ctrl-Alt-[", run: qle },
  { key: "Ctrl-Alt-]", run: $le }
], zle = {
  placeholderDOM: null,
  preparePlaceholder: null,
  placeholderText: "\u2026"
}, th = /* @__PURE__ */ N.define({
  combine(t) {
    return Xt(t, zle);
  }
});
function Yy(t) {
  let e = [ur, jle];
  return t && e.push(th.of(t)), e;
}
function Zy(t, e) {
  let { state: n } = t, r = n.facet(th), i = (s) => {
    let l = t.lineBlockAt(t.posAtDOM(s.target)), a = Hs(t.state, l.from, l.to);
    a && t.dispatch({ effects: co.of(a) }), s.preventDefault();
  };
  if (r.placeholderDOM)
    return r.placeholderDOM(t, i, e);
  let o = document.createElement("span");
  return o.textContent = r.placeholderText, o.setAttribute("aria-label", n.phrase("folded code")), o.title = n.phrase("unfold"), o.className = "cm-foldPlaceholder", o.onclick = i, o;
}
const Op = /* @__PURE__ */ V.replace({ widget: /* @__PURE__ */ new class extends qn {
  toDOM(t) {
    return Zy(t, null);
  }
}() });
class Vle extends qn {
  constructor(e) {
    super(), this.value = e;
  }
  eq(e) {
    return this.value == e.value;
  }
  toDOM(e) {
    return Zy(e, this.value);
  }
}
const Ule = {
  openText: "\u2304",
  closedText: "\u203A",
  markerDOM: null,
  domEventHandlers: {},
  foldingChanged: () => !1
};
class La extends hn {
  constructor(e, n) {
    super(), this.config = e, this.open = n;
  }
  eq(e) {
    return this.config == e.config && this.open == e.open;
  }
  toDOM(e) {
    if (this.config.markerDOM)
      return this.config.markerDOM(this.open);
    let n = document.createElement("span");
    return n.textContent = this.open ? this.config.openText : this.config.closedText, n.title = e.state.phrase(this.open ? "Fold line" : "Unfold line"), n;
  }
}
function Wle(t = {}) {
  let e = Object.assign(Object.assign({}, Ule), t), n = new La(e, !0), r = new La(e, !1), i = Ee.fromClass(class {
    constructor(s) {
      this.from = s.viewport.from, this.markers = this.buildMarkers(s);
    }
    update(s) {
      (s.docChanged || s.viewportChanged || s.startState.facet(Bn) != s.state.facet(Bn) || s.startState.field(ur, !1) != s.state.field(ur, !1) || ze(s.startState) != ze(s.state) || e.foldingChanged(s)) && (this.markers = this.buildMarkers(s.view));
    }
    buildMarkers(s) {
      let l = new Rn();
      for (let a of s.viewportLineBlocks) {
        let c = Hs(s.state, a.from, a.to) ? r : $s(s.state, a.from, a.to) ? n : null;
        c && l.add(a.from, a.from, c);
      }
      return l.finish();
    }
  }), { domEventHandlers: o } = e;
  return [
    i,
    jse({
      class: "cm-foldGutter",
      markers(s) {
        var l;
        return ((l = s.plugin(i)) === null || l === void 0 ? void 0 : l.markers) || te.empty;
      },
      initialSpacer() {
        return new La(e, !1);
      },
      domEventHandlers: Object.assign(Object.assign({}, o), { click: (s, l, a) => {
        if (o.click && o.click(s, l, a))
          return !0;
        let c = Hs(s.state, l.from, l.to);
        if (c)
          return s.dispatch({ effects: co.of(c) }), !0;
        let u = $s(s.state, l.from, l.to);
        return u ? (s.dispatch({ effects: kl.of(u) }), !0) : !1;
      } })
    }),
    Yy()
  ];
}
const jle = /* @__PURE__ */ I.baseTheme({
  ".cm-foldPlaceholder": {
    backgroundColor: "#eee",
    border: "1px solid #ddd",
    color: "#888",
    borderRadius: ".2em",
    margin: "0 1px",
    padding: "0 1px",
    cursor: "pointer"
  },
  ".cm-foldGutter span": {
    padding: "0 1px",
    cursor: "pointer"
  }
});
class wl {
  constructor(e, n) {
    this.specs = e;
    let r;
    function i(l) {
      let a = Ln.newName();
      return (r || (r = /* @__PURE__ */ Object.create(null)))["." + a] = l, a;
    }
    const o = typeof n.all == "string" ? n.all : n.all ? i(n.all) : void 0, s = n.scope;
    this.scope = s instanceof Vt ? (l) => l.prop(Ai) == s.data : s ? (l) => l == s : void 0, this.style = zy(e.map((l) => ({
      tag: l.tag,
      class: l.class || i(Object.assign({}, l, { tag: null }))
    })), {
      all: o
    }).style, this.module = r ? new Ln(r) : null, this.themeType = n.themeType;
  }
  static define(e, n) {
    return new wl(e, n || {});
  }
}
const Zc = /* @__PURE__ */ N.define(), Jy = /* @__PURE__ */ N.define({
  combine(t) {
    return t.length ? [t[0]] : null;
  }
});
function Ia(t) {
  let e = t.facet(Zc);
  return e.length ? e : t.facet(Jy);
}
function Gle(t, e) {
  let n = [Yle], r;
  return t instanceof wl && (t.module && n.push(I.styleModule.of(t.module)), r = t.themeType), e != null && e.fallback ? n.push(Jy.of(t)) : r ? n.push(Zc.computeN([I.darkTheme], (i) => i.facet(I.darkTheme) == (r == "dark") ? [t] : [])) : n.push(Zc.of(t)), n;
}
class Kle {
  constructor(e) {
    this.markCache = /* @__PURE__ */ Object.create(null), this.tree = ze(e.state), this.decorations = this.buildDeco(e, Ia(e.state));
  }
  update(e) {
    let n = ze(e.state), r = Ia(e.state), i = r != Ia(e.startState);
    n.length < e.view.viewport.to && !i && n.type == this.tree.type ? this.decorations = this.decorations.map(e.changes) : (n != this.tree || e.viewportChanged || i) && (this.tree = n, this.decorations = this.buildDeco(e.view, r));
  }
  buildDeco(e, n) {
    if (!n || !this.tree.length)
      return V.none;
    let r = new Rn();
    for (let { from: i, to: o } of e.visibleRanges)
      mle(this.tree, n, (s, l, a) => {
        r.add(s, l, this.markCache[a] || (this.markCache[a] = V.mark({ class: a })));
      }, i, o);
    return r.finish();
  }
}
const Yle = /* @__PURE__ */ si.high(/* @__PURE__ */ Ee.fromClass(Kle, {
  decorations: (t) => t.decorations
})), Zle = /* @__PURE__ */ wl.define([
  {
    tag: O.meta,
    color: "#404740"
  },
  {
    tag: O.link,
    textDecoration: "underline"
  },
  {
    tag: O.heading,
    textDecoration: "underline",
    fontWeight: "bold"
  },
  {
    tag: O.emphasis,
    fontStyle: "italic"
  },
  {
    tag: O.strong,
    fontWeight: "bold"
  },
  {
    tag: O.strikethrough,
    textDecoration: "line-through"
  },
  {
    tag: O.keyword,
    color: "#708"
  },
  {
    tag: [O.atom, O.bool, O.url, O.contentSeparator, O.labelName],
    color: "#219"
  },
  {
    tag: [O.literal, O.inserted],
    color: "#164"
  },
  {
    tag: [O.string, O.deleted],
    color: "#a11"
  },
  {
    tag: [O.regexp, O.escape, /* @__PURE__ */ O.special(O.string)],
    color: "#e40"
  },
  {
    tag: /* @__PURE__ */ O.definition(O.variableName),
    color: "#00f"
  },
  {
    tag: /* @__PURE__ */ O.local(O.variableName),
    color: "#30a"
  },
  {
    tag: [O.typeName, O.namespace],
    color: "#085"
  },
  {
    tag: O.className,
    color: "#167"
  },
  {
    tag: [/* @__PURE__ */ O.special(O.variableName), O.macroName],
    color: "#256"
  },
  {
    tag: /* @__PURE__ */ O.definition(O.propertyName),
    color: "#00c"
  },
  {
    tag: O.comment,
    color: "#940"
  },
  {
    tag: O.invalid,
    color: "#f00"
  }
]), Jle = /* @__PURE__ */ I.baseTheme({
  "&.cm-focused .cm-matchingBracket": { backgroundColor: "#328c8252" },
  "&.cm-focused .cm-nonmatchingBracket": { backgroundColor: "#bb555544" }
}), Xy = 1e4, Qy = "()[]{}", eb = /* @__PURE__ */ N.define({
  combine(t) {
    return Xt(t, {
      afterCursor: !0,
      brackets: Qy,
      maxScanDistance: Xy,
      renderMatch: eae
    });
  }
}), Xle = /* @__PURE__ */ V.mark({ class: "cm-matchingBracket" }), Qle = /* @__PURE__ */ V.mark({ class: "cm-nonmatchingBracket" });
function eae(t) {
  let e = [], n = t.matched ? Xle : Qle;
  return e.push(n.range(t.start.from, t.start.to)), t.end && e.push(n.range(t.end.from, t.end.to)), e;
}
const tae = /* @__PURE__ */ Be.define({
  create() {
    return V.none;
  },
  update(t, e) {
    if (!e.docChanged && !e.selection)
      return t;
    let n = [], r = e.state.facet(eb);
    for (let i of e.state.selection.ranges) {
      if (!i.empty)
        continue;
      let o = Ut(e.state, i.head, -1, r) || i.head > 0 && Ut(e.state, i.head - 1, 1, r) || r.afterCursor && (Ut(e.state, i.head, 1, r) || i.head < e.state.doc.length && Ut(e.state, i.head + 1, -1, r));
      o && (n = n.concat(r.renderMatch(o, e.state)));
    }
    return V.set(n, !0);
  },
  provide: (t) => I.decorations.from(t)
}), nae = [
  tae,
  Jle
];
function rae(t = {}) {
  return [eb.of(t), nae];
}
const iae = /* @__PURE__ */ new K();
function Jc(t, e, n) {
  let r = t.prop(e < 0 ? K.openedBy : K.closedBy);
  if (r)
    return r;
  if (t.name.length == 1) {
    let i = n.indexOf(t.name);
    if (i > -1 && i % 2 == (e < 0 ? 1 : 0))
      return [n[i + e]];
  }
  return null;
}
function Xc(t) {
  let e = t.type.prop(iae);
  return e ? e(t.node) : t;
}
function Ut(t, e, n, r = {}) {
  let i = r.maxScanDistance || Xy, o = r.brackets || Qy, s = ze(t), l = s.resolveInner(e, n);
  for (let a = l; a; a = a.parent) {
    let c = Jc(a.type, n, o);
    if (c && a.from < a.to) {
      let u = Xc(a);
      if (u && (n > 0 ? e >= u.from && e < u.to : e > u.from && e <= u.to))
        return oae(t, e, n, a, u, c, o);
    }
  }
  return sae(t, e, n, s, l.type, i, o);
}
function oae(t, e, n, r, i, o, s) {
  let l = r.parent, a = { from: i.from, to: i.to }, c = 0, u = l == null ? void 0 : l.cursor();
  if (u && (n < 0 ? u.childBefore(r.from) : u.childAfter(r.to)))
    do
      if (n < 0 ? u.to <= r.from : u.from >= r.to) {
        if (c == 0 && o.indexOf(u.type.name) > -1 && u.from < u.to) {
          let h = Xc(u);
          return { start: a, end: h ? { from: h.from, to: h.to } : void 0, matched: !0 };
        } else if (Jc(u.type, n, s))
          c++;
        else if (Jc(u.type, -n, s)) {
          if (c == 0) {
            let h = Xc(u);
            return {
              start: a,
              end: h && h.from < h.to ? { from: h.from, to: h.to } : void 0,
              matched: !1
            };
          }
          c--;
        }
      }
    while (n < 0 ? u.prevSibling() : u.nextSibling());
  return { start: a, matched: !1 };
}
function sae(t, e, n, r, i, o, s) {
  let l = n < 0 ? t.sliceDoc(e - 1, e) : t.sliceDoc(e, e + 1), a = s.indexOf(l);
  if (a < 0 || a % 2 == 0 != n > 0)
    return null;
  let c = { from: n < 0 ? e - 1 : e, to: n > 0 ? e + 1 : e }, u = t.doc.iterRange(e, n > 0 ? t.doc.length : 0), h = 0;
  for (let f = 0; !u.next().done && f <= o; ) {
    let d = u.value;
    n < 0 && (f += d.length);
    let p = e + f * n;
    for (let m = n > 0 ? 0 : d.length - 1, g = n > 0 ? d.length : -1; m != g; m += n) {
      let y = s.indexOf(d[m]);
      if (!(y < 0 || r.resolveInner(p + m, 1).type != i))
        if (y % 2 == 0 == n > 0)
          h++;
        else {
          if (h == 1)
            return { start: c, end: { from: p + m, to: p + m + 1 }, matched: y >> 1 == a >> 1 };
          h--;
        }
    }
    n > 0 && (f += d.length);
  }
  return u.done ? { start: c, matched: !1 } : null;
}
const lae = /* @__PURE__ */ Object.create(null), Rp = [xt.none], Lp = [], aae = /* @__PURE__ */ Object.create(null);
for (let [t, e] of [
  ["variable", "variableName"],
  ["variable-2", "variableName.special"],
  ["string-2", "string.special"],
  ["def", "variableName.definition"],
  ["tag", "tagName"],
  ["attribute", "attributeName"],
  ["type", "typeName"],
  ["builtin", "variableName.standard"],
  ["qualifier", "modifier"],
  ["error", "invalid"],
  ["header", "heading"],
  ["property", "propertyName"]
])
  aae[t] = /* @__PURE__ */ cae(lae, e);
function Na(t, e) {
  Lp.indexOf(t) > -1 || (Lp.push(t), console.warn(e));
}
function cae(t, e) {
  let n = null;
  for (let o of e.split(".")) {
    let s = t[o] || O[o];
    s ? typeof s == "function" ? n ? n = s(n) : Na(o, `Modifier ${o} used at start of tag`) : n ? Na(o, `Tag ${o} used as modifier`) : n = s : Na(o, `Unknown highlighting tag ${o}`);
  }
  if (!n)
    return 0;
  let r = e.replace(/ /g, "_"), i = xt.define({
    id: Rp.length,
    name: r,
    props: [dle({ [r]: n })]
  });
  return Rp.push(i), i.id;
}
const uae = (t) => {
  let { state: e } = t, n = e.doc.lineAt(e.selection.main.from), r = rh(t.state, n.from);
  return r.line ? hae(t) : r.block ? dae(t) : !1;
};
function nh(t, e) {
  return ({ state: n, dispatch: r }) => {
    if (n.readOnly)
      return !1;
    let i = t(e, n);
    return i ? (r(n.update(i)), !0) : !1;
  };
}
const hae = /* @__PURE__ */ nh(gae, 0), fae = /* @__PURE__ */ nh(tb, 0), dae = /* @__PURE__ */ nh((t, e) => tb(t, e, mae(e)), 0);
function rh(t, e) {
  let n = t.languageDataAt("commentTokens", e);
  return n.length ? n[0] : {};
}
const yi = 50;
function pae(t, { open: e, close: n }, r, i) {
  let o = t.sliceDoc(r - yi, r), s = t.sliceDoc(i, i + yi), l = /\s*$/.exec(o)[0].length, a = /^\s*/.exec(s)[0].length, c = o.length - l;
  if (o.slice(c - e.length, c) == e && s.slice(a, a + n.length) == n)
    return {
      open: { pos: r - l, margin: l && 1 },
      close: { pos: i + a, margin: a && 1 }
    };
  let u, h;
  i - r <= 2 * yi ? u = h = t.sliceDoc(r, i) : (u = t.sliceDoc(r, r + yi), h = t.sliceDoc(i - yi, i));
  let f = /^\s*/.exec(u)[0].length, d = /\s*$/.exec(h)[0].length, p = h.length - d - n.length;
  return u.slice(f, f + e.length) == e && h.slice(p, p + n.length) == n ? {
    open: {
      pos: r + f + e.length,
      margin: /\s/.test(u.charAt(f + e.length)) ? 1 : 0
    },
    close: {
      pos: i - d - n.length,
      margin: /\s/.test(h.charAt(p - 1)) ? 1 : 0
    }
  } : null;
}
function mae(t) {
  let e = [];
  for (let n of t.selection.ranges) {
    let r = t.doc.lineAt(n.from), i = n.to <= r.to ? r : t.doc.lineAt(n.to), o = e.length - 1;
    o >= 0 && e[o].to > r.from ? e[o].to = i.to : e.push({ from: r.from + /^\s*/.exec(r.text)[0].length, to: i.to });
  }
  return e;
}
function tb(t, e, n = e.selection.ranges) {
  let r = n.map((o) => rh(e, o.from).block);
  if (!r.every((o) => o))
    return null;
  let i = n.map((o, s) => pae(e, r[s], o.from, o.to));
  if (t != 2 && !i.every((o) => o))
    return { changes: e.changes(n.map((o, s) => i[s] ? [] : [{ from: o.from, insert: r[s].open + " " }, { from: o.to, insert: " " + r[s].close }])) };
  if (t != 1 && i.some((o) => o)) {
    let o = [];
    for (let s = 0, l; s < i.length; s++)
      if (l = i[s]) {
        let a = r[s], { open: c, close: u } = l;
        o.push({ from: c.pos - a.open.length, to: c.pos + c.margin }, { from: u.pos - u.margin, to: u.pos + a.close.length });
      }
    return { changes: o };
  }
  return null;
}
function gae(t, e, n = e.selection.ranges) {
  let r = [], i = -1;
  for (let { from: o, to: s } of n) {
    let l = r.length, a = 1e9, c = rh(e, o).line;
    if (!!c) {
      for (let u = o; u <= s; ) {
        let h = e.doc.lineAt(u);
        if (h.from > i && (o == s || s > h.from)) {
          i = h.from;
          let f = /^\s*/.exec(h.text)[0].length, d = f == h.length, p = h.text.slice(f, f + c.length) == c ? f : -1;
          f < h.text.length && f < a && (a = f), r.push({ line: h, comment: p, token: c, indent: f, empty: d, single: !1 });
        }
        u = h.to + 1;
      }
      if (a < 1e9)
        for (let u = l; u < r.length; u++)
          r[u].indent < r[u].line.text.length && (r[u].indent = a);
      r.length == l + 1 && (r[l].single = !0);
    }
  }
  if (t != 2 && r.some((o) => o.comment < 0 && (!o.empty || o.single))) {
    let o = [];
    for (let { line: l, token: a, indent: c, empty: u, single: h } of r)
      (h || !u) && o.push({ from: l.from + c, insert: a + " " });
    let s = e.changes(o);
    return { changes: s, selection: e.selection.map(s, 1) };
  } else if (t != 1 && r.some((o) => o.comment >= 0)) {
    let o = [];
    for (let { line: s, comment: l, token: a } of r)
      if (l >= 0) {
        let c = s.from + l, u = c + a.length;
        s.text[u - s.from] == " " && u++, o.push({ from: c, to: u });
      }
    return { changes: o };
  }
  return null;
}
const Qc = /* @__PURE__ */ fn.define(), yae = /* @__PURE__ */ fn.define(), bae = /* @__PURE__ */ N.define(), nb = /* @__PURE__ */ N.define({
  combine(t) {
    return Xt(t, {
      minDepth: 100,
      newGroupDelay: 500,
      joinToEvent: (e, n) => n
    }, {
      minDepth: Math.max,
      newGroupDelay: Math.min,
      joinToEvent: (e, n) => (r, i) => e(r, i) || n(r, i)
    });
  }
});
function vae(t) {
  let e = 0;
  return t.iterChangedRanges((n, r) => e = r), e;
}
const rb = /* @__PURE__ */ Be.define({
  create() {
    return Wt.empty;
  },
  update(t, e) {
    let n = e.state.facet(nb), r = e.annotation(Qc);
    if (r) {
      let a = e.docChanged ? A.single(vae(e.changes)) : void 0, c = nt.fromTransaction(e, a), u = r.side, h = u == 0 ? t.undone : t.done;
      return c ? h = zs(h, h.length, n.minDepth, c) : h = sb(h, e.startState.selection), new Wt(u == 0 ? r.rest : h, u == 0 ? h : r.rest);
    }
    let i = e.annotation(yae);
    if ((i == "full" || i == "before") && (t = t.isolate()), e.annotation(Se.addToHistory) === !1)
      return e.changes.empty ? t : t.addMapping(e.changes.desc);
    let o = nt.fromTransaction(e), s = e.annotation(Se.time), l = e.annotation(Se.userEvent);
    return o ? t = t.addChanges(o, s, l, n, e) : e.selection && (t = t.addSelection(e.startState.selection, s, l, n.newGroupDelay)), (i == "full" || i == "after") && (t = t.isolate()), t;
  },
  toJSON(t) {
    return { done: t.done.map((e) => e.toJSON()), undone: t.undone.map((e) => e.toJSON()) };
  },
  fromJSON(t) {
    return new Wt(t.done.map(nt.fromJSON), t.undone.map(nt.fromJSON));
  }
});
function xae(t = {}) {
  return [
    rb,
    nb.of(t),
    I.domEventHandlers({
      beforeinput(e, n) {
        let r = e.inputType == "historyUndo" ? ib : e.inputType == "historyRedo" ? eu : null;
        return r ? (e.preventDefault(), r(n)) : !1;
      }
    })
  ];
}
function Cl(t, e) {
  return function({ state: n, dispatch: r }) {
    if (!e && n.readOnly)
      return !1;
    let i = n.field(rb, !1);
    if (!i)
      return !1;
    let o = i.pop(t, n, e);
    return o ? (r(o), !0) : !1;
  };
}
const ib = /* @__PURE__ */ Cl(0, !1), eu = /* @__PURE__ */ Cl(1, !1), _ae = /* @__PURE__ */ Cl(0, !0), kae = /* @__PURE__ */ Cl(1, !0);
class nt {
  constructor(e, n, r, i, o) {
    this.changes = e, this.effects = n, this.mapped = r, this.startSelection = i, this.selectionsAfter = o;
  }
  setSelAfter(e) {
    return new nt(this.changes, this.effects, this.mapped, this.startSelection, e);
  }
  toJSON() {
    var e, n, r;
    return {
      changes: (e = this.changes) === null || e === void 0 ? void 0 : e.toJSON(),
      mapped: (n = this.mapped) === null || n === void 0 ? void 0 : n.toJSON(),
      startSelection: (r = this.startSelection) === null || r === void 0 ? void 0 : r.toJSON(),
      selectionsAfter: this.selectionsAfter.map((i) => i.toJSON())
    };
  }
  static fromJSON(e) {
    return new nt(e.changes && Ce.fromJSON(e.changes), [], e.mapped && Kt.fromJSON(e.mapped), e.startSelection && A.fromJSON(e.startSelection), e.selectionsAfter.map(A.fromJSON));
  }
  static fromTransaction(e, n) {
    let r = dt;
    for (let i of e.startState.facet(bae)) {
      let o = i(e);
      o.length && (r = r.concat(o));
    }
    return !r.length && e.changes.empty ? null : new nt(e.changes.invert(e.startState.doc), r, void 0, n || e.startState.selection, dt);
  }
  static selection(e) {
    return new nt(void 0, dt, void 0, void 0, e);
  }
}
function zs(t, e, n, r) {
  let i = e + 1 > n + 20 ? e - n - 1 : 0, o = t.slice(i, e);
  return o.push(r), o;
}
function wae(t, e) {
  let n = [], r = !1;
  return t.iterChangedRanges((i, o) => n.push(i, o)), e.iterChangedRanges((i, o, s, l) => {
    for (let a = 0; a < n.length; ) {
      let c = n[a++], u = n[a++];
      l >= c && s <= u && (r = !0);
    }
  }), r;
}
function Cae(t, e) {
  return t.ranges.length == e.ranges.length && t.ranges.filter((n, r) => n.empty != e.ranges[r].empty).length === 0;
}
function ob(t, e) {
  return t.length ? e.length ? t.concat(e) : t : e;
}
const dt = [], Aae = 200;
function sb(t, e) {
  if (t.length) {
    let n = t[t.length - 1], r = n.selectionsAfter.slice(Math.max(0, n.selectionsAfter.length - Aae));
    return r.length && r[r.length - 1].eq(e) ? t : (r.push(e), zs(t, t.length - 1, 1e9, n.setSelAfter(r)));
  } else
    return [nt.selection([e])];
}
function Sae(t) {
  let e = t[t.length - 1], n = t.slice();
  return n[t.length - 1] = e.setSelAfter(e.selectionsAfter.slice(0, e.selectionsAfter.length - 1)), n;
}
function Pa(t, e) {
  if (!t.length)
    return t;
  let n = t.length, r = dt;
  for (; n; ) {
    let i = Eae(t[n - 1], e, r);
    if (i.changes && !i.changes.empty || i.effects.length) {
      let o = t.slice(0, n);
      return o[n - 1] = i, o;
    } else
      e = i.mapped, n--, r = i.selectionsAfter;
  }
  return r.length ? [nt.selection(r)] : dt;
}
function Eae(t, e, n) {
  let r = ob(t.selectionsAfter.length ? t.selectionsAfter.map((l) => l.map(e)) : dt, n);
  if (!t.changes)
    return nt.selection(r);
  let i = t.changes.map(e), o = e.mapDesc(t.changes, !0), s = t.mapped ? t.mapped.composeDesc(o) : o;
  return new nt(i, j.mapEffects(t.effects, e), s, t.startSelection.map(o), r);
}
const Tae = /^(input\.type|delete)($|\.)/;
class Wt {
  constructor(e, n, r = 0, i = void 0) {
    this.done = e, this.undone = n, this.prevTime = r, this.prevUserEvent = i;
  }
  isolate() {
    return this.prevTime ? new Wt(this.done, this.undone) : this;
  }
  addChanges(e, n, r, i, o) {
    let s = this.done, l = s[s.length - 1];
    return l && l.changes && !l.changes.empty && e.changes && (!r || Tae.test(r)) && (!l.selectionsAfter.length && n - this.prevTime < i.newGroupDelay && i.joinToEvent(o, wae(l.changes, e.changes)) || r == "input.type.compose") ? s = zs(s, s.length - 1, i.minDepth, new nt(e.changes.compose(l.changes), ob(e.effects, l.effects), l.mapped, l.startSelection, dt)) : s = zs(s, s.length, i.minDepth, e), new Wt(s, dt, n, r);
  }
  addSelection(e, n, r, i) {
    let o = this.done.length ? this.done[this.done.length - 1].selectionsAfter : dt;
    return o.length > 0 && n - this.prevTime < i && r == this.prevUserEvent && r && /^select($|\.)/.test(r) && Cae(o[o.length - 1], e) ? this : new Wt(sb(this.done, e), this.undone, n, r);
  }
  addMapping(e) {
    return new Wt(Pa(this.done, e), Pa(this.undone, e), this.prevTime, this.prevUserEvent);
  }
  pop(e, n, r) {
    let i = e == 0 ? this.done : this.undone;
    if (i.length == 0)
      return null;
    let o = i[i.length - 1];
    if (r && o.selectionsAfter.length)
      return n.update({
        selection: o.selectionsAfter[o.selectionsAfter.length - 1],
        annotations: Qc.of({ side: e, rest: Sae(i) }),
        userEvent: e == 0 ? "select.undo" : "select.redo",
        scrollIntoView: !0
      });
    if (o.changes) {
      let s = i.length == 1 ? dt : i.slice(0, i.length - 1);
      return o.mapped && (s = Pa(s, o.mapped)), n.update({
        changes: o.changes,
        selection: o.startSelection,
        effects: o.effects,
        annotations: Qc.of({ side: e, rest: s }),
        filter: !1,
        userEvent: e == 0 ? "undo" : "redo",
        scrollIntoView: !0
      });
    } else
      return null;
  }
}
Wt.empty = /* @__PURE__ */ new Wt(dt, dt);
const Dae = [
  { key: "Mod-z", run: ib, preventDefault: !0 },
  { key: "Mod-y", mac: "Mod-Shift-z", run: eu, preventDefault: !0 },
  { linux: "Ctrl-Shift-z", run: eu, preventDefault: !0 },
  { key: "Mod-u", run: _ae, preventDefault: !0 },
  { key: "Alt-u", mac: "Mod-Shift-u", run: kae, preventDefault: !0 }
];
function ai(t, e) {
  return A.create(t.ranges.map(e), t.mainIndex);
}
function Qt(t, e) {
  return t.update({ selection: e, scrollIntoView: !0, userEvent: "select" });
}
function Rt({ state: t, dispatch: e }, n) {
  let r = ai(t.selection, n);
  return r.eq(t.selection) ? !1 : (e(Qt(t, r)), !0);
}
function Al(t, e) {
  return A.cursor(e ? t.to : t.from);
}
function lb(t, e) {
  return Rt(t, (n) => n.empty ? t.moveByChar(n, e) : Al(n, e));
}
function Ue(t) {
  return t.textDirectionAt(t.state.selection.main.head) == ye.LTR;
}
const ab = (t) => lb(t, !Ue(t)), cb = (t) => lb(t, Ue(t));
function ub(t, e) {
  return Rt(t, (n) => n.empty ? t.moveByGroup(n, e) : Al(n, e));
}
const Mae = (t) => ub(t, !Ue(t)), Oae = (t) => ub(t, Ue(t));
function Rae(t, e, n) {
  if (e.type.prop(n))
    return !0;
  let r = e.to - e.from;
  return r && (r > 2 || /[^\s,.;:]/.test(t.sliceDoc(e.from, e.to))) || e.firstChild;
}
function Sl(t, e, n) {
  let r = ze(t).resolveInner(e.head), i = n ? K.closedBy : K.openedBy;
  for (let a = e.head; ; ) {
    let c = n ? r.childAfter(a) : r.childBefore(a);
    if (!c)
      break;
    Rae(t, c, i) ? r = c : a = n ? c.to : c.from;
  }
  let o = r.type.prop(i), s, l;
  return o && (s = n ? Ut(t, r.from, 1) : Ut(t, r.to, -1)) && s.matched ? l = n ? s.end.to : s.end.from : l = n ? r.to : r.from, A.cursor(l, n ? -1 : 1);
}
const Lae = (t) => Rt(t, (e) => Sl(t.state, e, !Ue(t))), Iae = (t) => Rt(t, (e) => Sl(t.state, e, Ue(t)));
function hb(t, e) {
  return Rt(t, (n) => {
    if (!n.empty)
      return Al(n, e);
    let r = t.moveVertically(n, e);
    return r.head != n.head ? r : t.moveToLineBoundary(n, e);
  });
}
const fb = (t) => hb(t, !1), db = (t) => hb(t, !0);
function pb(t) {
  let e = t.scrollDOM.clientHeight < t.scrollDOM.scrollHeight - 2, n = 0, r = 0, i;
  if (e) {
    for (let o of t.state.facet(I.scrollMargins)) {
      let s = o(t);
      s != null && s.top && (n = Math.max(s == null ? void 0 : s.top, n)), s != null && s.bottom && (r = Math.max(s == null ? void 0 : s.bottom, r));
    }
    i = t.scrollDOM.clientHeight - n - r;
  } else
    i = (t.dom.ownerDocument.defaultView || window).innerHeight;
  return {
    marginTop: n,
    marginBottom: r,
    selfScroll: e,
    height: Math.max(t.defaultLineHeight, i - 5)
  };
}
function mb(t, e) {
  let n = pb(t), { state: r } = t, i = ai(r.selection, (s) => s.empty ? t.moveVertically(s, e, n.height) : Al(s, e));
  if (i.eq(r.selection))
    return !1;
  let o;
  if (n.selfScroll) {
    let s = t.coordsAtPos(r.selection.main.head), l = t.scrollDOM.getBoundingClientRect(), a = l.top + n.marginTop, c = l.bottom - n.marginBottom;
    s && s.top > a && s.bottom < c && (o = I.scrollIntoView(i.main.head, { y: "start", yMargin: s.top - a }));
  }
  return t.dispatch(Qt(r, i), { effects: o }), !0;
}
const Ip = (t) => mb(t, !1), tu = (t) => mb(t, !0);
function $n(t, e, n) {
  let r = t.lineBlockAt(e.head), i = t.moveToLineBoundary(e, n);
  if (i.head == e.head && i.head != (n ? r.to : r.from) && (i = t.moveToLineBoundary(e, n, !1)), !n && i.head == r.from && r.length) {
    let o = /^\s*/.exec(t.state.sliceDoc(r.from, Math.min(r.from + 100, r.to)))[0].length;
    o && e.head != r.from + o && (i = A.cursor(r.from + o));
  }
  return i;
}
const Nae = (t) => Rt(t, (e) => $n(t, e, !0)), Pae = (t) => Rt(t, (e) => $n(t, e, !1)), Bae = (t) => Rt(t, (e) => $n(t, e, !Ue(t))), Fae = (t) => Rt(t, (e) => $n(t, e, Ue(t))), qae = (t) => Rt(t, (e) => A.cursor(t.lineBlockAt(e.head).from, 1)), $ae = (t) => Rt(t, (e) => A.cursor(t.lineBlockAt(e.head).to, -1));
function Hae(t, e, n) {
  let r = !1, i = ai(t.selection, (o) => {
    let s = Ut(t, o.head, -1) || Ut(t, o.head, 1) || o.head > 0 && Ut(t, o.head - 1, 1) || o.head < t.doc.length && Ut(t, o.head + 1, -1);
    if (!s || !s.end)
      return o;
    r = !0;
    let l = s.start.from == o.head ? s.end.to : s.end.from;
    return n ? A.range(o.anchor, l) : A.cursor(l);
  });
  return r ? (e(Qt(t, i)), !0) : !1;
}
const zae = ({ state: t, dispatch: e }) => Hae(t, e, !1);
function _t(t, e) {
  let n = ai(t.state.selection, (r) => {
    let i = e(r);
    return A.range(r.anchor, i.head, i.goalColumn, i.bidiLevel || void 0);
  });
  return n.eq(t.state.selection) ? !1 : (t.dispatch(Qt(t.state, n)), !0);
}
function gb(t, e) {
  return _t(t, (n) => t.moveByChar(n, e));
}
const yb = (t) => gb(t, !Ue(t)), bb = (t) => gb(t, Ue(t));
function vb(t, e) {
  return _t(t, (n) => t.moveByGroup(n, e));
}
const Vae = (t) => vb(t, !Ue(t)), Uae = (t) => vb(t, Ue(t)), Wae = (t) => _t(t, (e) => Sl(t.state, e, !Ue(t))), jae = (t) => _t(t, (e) => Sl(t.state, e, Ue(t)));
function xb(t, e) {
  return _t(t, (n) => t.moveVertically(n, e));
}
const _b = (t) => xb(t, !1), kb = (t) => xb(t, !0);
function wb(t, e) {
  return _t(t, (n) => t.moveVertically(n, e, pb(t).height));
}
const Np = (t) => wb(t, !1), Pp = (t) => wb(t, !0), Gae = (t) => _t(t, (e) => $n(t, e, !0)), Kae = (t) => _t(t, (e) => $n(t, e, !1)), Yae = (t) => _t(t, (e) => $n(t, e, !Ue(t))), Zae = (t) => _t(t, (e) => $n(t, e, Ue(t))), Jae = (t) => _t(t, (e) => A.cursor(t.lineBlockAt(e.head).from)), Xae = (t) => _t(t, (e) => A.cursor(t.lineBlockAt(e.head).to)), Bp = ({ state: t, dispatch: e }) => (e(Qt(t, { anchor: 0 })), !0), Fp = ({ state: t, dispatch: e }) => (e(Qt(t, { anchor: t.doc.length })), !0), qp = ({ state: t, dispatch: e }) => (e(Qt(t, { anchor: t.selection.main.anchor, head: 0 })), !0), $p = ({ state: t, dispatch: e }) => (e(Qt(t, { anchor: t.selection.main.anchor, head: t.doc.length })), !0), Qae = ({ state: t, dispatch: e }) => (e(t.update({ selection: { anchor: 0, head: t.doc.length }, userEvent: "select" })), !0), ece = ({ state: t, dispatch: e }) => {
  let n = Tl(t).map(({ from: r, to: i }) => A.range(r, Math.min(i + 1, t.doc.length)));
  return e(t.update({ selection: A.create(n), userEvent: "select" })), !0;
}, tce = ({ state: t, dispatch: e }) => {
  let n = ai(t.selection, (r) => {
    var i;
    let o = ze(t).resolveInner(r.head, 1);
    for (; !(o.from < r.from && o.to >= r.to || o.to > r.to && o.from <= r.from || !(!((i = o.parent) === null || i === void 0) && i.parent)); )
      o = o.parent;
    return A.range(o.to, o.from);
  });
  return e(Qt(t, n)), !0;
}, nce = ({ state: t, dispatch: e }) => {
  let n = t.selection, r = null;
  return n.ranges.length > 1 ? r = A.create([n.main]) : n.main.empty || (r = A.create([A.cursor(n.main.head)])), r ? (e(Qt(t, r)), !0) : !1;
};
function El(t, e) {
  if (t.state.readOnly)
    return !1;
  let n = "delete.selection", { state: r } = t, i = r.changeByRange((o) => {
    let { from: s, to: l } = o;
    if (s == l) {
      let a = e(s);
      a < s ? (n = "delete.backward", a = zo(t, a, !1)) : a > s && (n = "delete.forward", a = zo(t, a, !0)), s = Math.min(s, a), l = Math.max(l, a);
    } else
      s = zo(t, s, !1), l = zo(t, l, !0);
    return s == l ? { range: o } : { changes: { from: s, to: l }, range: A.cursor(s) };
  });
  return i.changes.empty ? !1 : (t.dispatch(r.update(i, {
    scrollIntoView: !0,
    userEvent: n,
    effects: n == "delete.selection" ? I.announce.of(r.phrase("Selection deleted")) : void 0
  })), !0);
}
function zo(t, e, n) {
  if (t instanceof I)
    for (let r of t.state.facet(I.atomicRanges).map((i) => i(t)))
      r.between(e, e, (i, o) => {
        i < e && o > e && (e = n ? o : i);
      });
  return e;
}
const Cb = (t, e) => El(t, (n) => {
  let { state: r } = t, i = r.doc.lineAt(n), o, s;
  if (!e && n > i.from && n < i.from + 200 && !/[^ \t]/.test(o = i.text.slice(0, n - i.from))) {
    if (o[o.length - 1] == "	")
      return n - 1;
    let l = li(o, r.tabSize), a = l % qs(r) || qs(r);
    for (let c = 0; c < a && o[o.length - 1 - c] == " "; c++)
      n--;
    s = n;
  } else
    s = $e(i.text, n - i.from, e, e) + i.from, s == n && i.number != (e ? r.doc.lines : 1) && (s += e ? 1 : -1);
  return s;
}), nu = (t) => Cb(t, !1), Ab = (t) => Cb(t, !0), Sb = (t, e) => El(t, (n) => {
  let r = n, { state: i } = t, o = i.doc.lineAt(r), s = i.charCategorizer(r);
  for (let l = null; ; ) {
    if (r == (e ? o.to : o.from)) {
      r == n && o.number != (e ? i.doc.lines : 1) && (r += e ? 1 : -1);
      break;
    }
    let a = $e(o.text, r - o.from, e) + o.from, c = o.text.slice(Math.min(r, a) - o.from, Math.max(r, a) - o.from), u = s(c);
    if (l != null && u != l)
      break;
    (c != " " || r != n) && (l = u), r = a;
  }
  return r;
}), Eb = (t) => Sb(t, !1), rce = (t) => Sb(t, !0), Tb = (t) => El(t, (e) => {
  let n = t.lineBlockAt(e).to;
  return e < n ? n : Math.min(t.state.doc.length, e + 1);
}), ice = (t) => El(t, (e) => {
  let n = t.lineBlockAt(e).from;
  return e > n ? n : Math.max(0, e - 1);
}), oce = ({ state: t, dispatch: e }) => {
  if (t.readOnly)
    return !1;
  let n = t.changeByRange((r) => ({
    changes: { from: r.from, to: r.to, insert: J.of(["", ""]) },
    range: A.cursor(r.from)
  }));
  return e(t.update(n, { scrollIntoView: !0, userEvent: "input" })), !0;
}, sce = ({ state: t, dispatch: e }) => {
  if (t.readOnly)
    return !1;
  let n = t.changeByRange((r) => {
    if (!r.empty || r.from == 0 || r.from == t.doc.length)
      return { range: r };
    let i = r.from, o = t.doc.lineAt(i), s = i == o.from ? i - 1 : $e(o.text, i - o.from, !1) + o.from, l = i == o.to ? i + 1 : $e(o.text, i - o.from, !0) + o.from;
    return {
      changes: { from: s, to: l, insert: t.doc.slice(i, l).append(t.doc.slice(s, i)) },
      range: A.cursor(l)
    };
  });
  return n.changes.empty ? !1 : (e(t.update(n, { scrollIntoView: !0, userEvent: "move.character" })), !0);
};
function Tl(t) {
  let e = [], n = -1;
  for (let r of t.selection.ranges) {
    let i = t.doc.lineAt(r.from), o = t.doc.lineAt(r.to);
    if (!r.empty && r.to == o.from && (o = t.doc.lineAt(r.to - 1)), n >= i.number) {
      let s = e[e.length - 1];
      s.to = o.to, s.ranges.push(r);
    } else
      e.push({ from: i.from, to: o.to, ranges: [r] });
    n = o.number + 1;
  }
  return e;
}
function Db(t, e, n) {
  if (t.readOnly)
    return !1;
  let r = [], i = [];
  for (let o of Tl(t)) {
    if (n ? o.to == t.doc.length : o.from == 0)
      continue;
    let s = t.doc.lineAt(n ? o.to + 1 : o.from - 1), l = s.length + 1;
    if (n) {
      r.push({ from: o.to, to: s.to }, { from: o.from, insert: s.text + t.lineBreak });
      for (let a of o.ranges)
        i.push(A.range(Math.min(t.doc.length, a.anchor + l), Math.min(t.doc.length, a.head + l)));
    } else {
      r.push({ from: s.from, to: o.from }, { from: o.to, insert: t.lineBreak + s.text });
      for (let a of o.ranges)
        i.push(A.range(a.anchor - l, a.head - l));
    }
  }
  return r.length ? (e(t.update({
    changes: r,
    scrollIntoView: !0,
    selection: A.create(i, t.selection.mainIndex),
    userEvent: "move.line"
  })), !0) : !1;
}
const lce = ({ state: t, dispatch: e }) => Db(t, e, !1), ace = ({ state: t, dispatch: e }) => Db(t, e, !0);
function Mb(t, e, n) {
  if (t.readOnly)
    return !1;
  let r = [];
  for (let i of Tl(t))
    n ? r.push({ from: i.from, insert: t.doc.slice(i.from, i.to) + t.lineBreak }) : r.push({ from: i.to, insert: t.lineBreak + t.doc.slice(i.from, i.to) });
  return e(t.update({ changes: r, scrollIntoView: !0, userEvent: "input.copyline" })), !0;
}
const cce = ({ state: t, dispatch: e }) => Mb(t, e, !1), uce = ({ state: t, dispatch: e }) => Mb(t, e, !0), hce = (t) => {
  if (t.state.readOnly)
    return !1;
  let { state: e } = t, n = e.changes(Tl(e).map(({ from: i, to: o }) => (i > 0 ? i-- : o < e.doc.length && o++, { from: i, to: o }))), r = ai(e.selection, (i) => t.moveVertically(i, !0)).map(n);
  return t.dispatch({ changes: n, selection: r, scrollIntoView: !0, userEvent: "delete.line" }), !0;
};
function fce(t, e) {
  if (/\(\)|\[\]|\{\}/.test(t.sliceDoc(e - 1, e + 1)))
    return { from: e, to: e };
  let n = ze(t).resolveInner(e), r = n.childBefore(e), i = n.childAfter(e), o;
  return r && i && r.to <= e && i.from >= e && (o = r.type.prop(K.closedBy)) && o.indexOf(i.name) > -1 && t.doc.lineAt(r.to).from == t.doc.lineAt(i.from).from && !/\S/.test(t.sliceDoc(r.to, i.from)) ? { from: r.to, to: i.from } : null;
}
const dce = /* @__PURE__ */ Ob(!1), pce = /* @__PURE__ */ Ob(!0);
function Ob(t) {
  return ({ state: e, dispatch: n }) => {
    if (e.readOnly)
      return !1;
    let r = e.changeByRange((i) => {
      let { from: o, to: s } = i, l = e.doc.lineAt(o), a = !t && o == s && fce(e, o);
      t && (o = s = (s <= l.to ? l : e.doc.lineAt(s)).to);
      let c = new _l(e, { simulateBreak: o, simulateDoubleBreak: !!a }), u = Qu(c, o);
      for (u == null && (u = li(/^\s*/.exec(e.doc.lineAt(o).text)[0], e.tabSize)); s < l.to && /\s/.test(l.text[s - l.from]); )
        s++;
      a ? { from: o, to: s } = a : o > l.from && o < l.from + 100 && !/\S/.test(l.text.slice(0, o)) && (o = l.from);
      let h = ["", Qi(e, u)];
      return a && h.push(Qi(e, c.lineIndent(l.from, -1))), {
        changes: { from: o, to: s, insert: J.of(h) },
        range: A.cursor(o + 1 + h[1].length)
      };
    });
    return n(e.update(r, { scrollIntoView: !0, userEvent: "input" })), !0;
  };
}
function ih(t, e) {
  let n = -1;
  return t.changeByRange((r) => {
    let i = [];
    for (let s = r.from; s <= r.to; ) {
      let l = t.doc.lineAt(s);
      l.number > n && (r.empty || r.to > l.from) && (e(l, i, r), n = l.number), s = l.to + 1;
    }
    let o = t.changes(i);
    return {
      changes: i,
      range: A.range(o.mapPos(r.anchor, 1), o.mapPos(r.head, 1))
    };
  });
}
const mce = ({ state: t, dispatch: e }) => {
  if (t.readOnly)
    return !1;
  let n = /* @__PURE__ */ Object.create(null), r = new _l(t, { overrideIndentation: (o) => {
    let s = n[o];
    return s == null ? -1 : s;
  } }), i = ih(t, (o, s, l) => {
    let a = Qu(r, o.from);
    if (a == null)
      return;
    /\S/.test(o.text) || (a = 0);
    let c = /^\s*/.exec(o.text)[0], u = Qi(t, a);
    (c != u || l.from < o.from + c.length) && (n[o.from] = a, s.push({ from: o.from, to: o.from + c.length, insert: u }));
  });
  return i.changes.empty || e(t.update(i, { userEvent: "indent" })), !0;
}, Rb = ({ state: t, dispatch: e }) => t.readOnly ? !1 : (e(t.update(ih(t, (n, r) => {
  r.push({ from: n.from, insert: t.facet(Xu) });
}), { userEvent: "input.indent" })), !0), Lb = ({ state: t, dispatch: e }) => t.readOnly ? !1 : (e(t.update(ih(t, (n, r) => {
  let i = /^\s*/.exec(n.text)[0];
  if (!i)
    return;
  let o = li(i, t.tabSize), s = 0, l = Qi(t, Math.max(0, o - qs(t)));
  for (; s < i.length && s < l.length && i.charCodeAt(s) == l.charCodeAt(s); )
    s++;
  r.push({ from: n.from + s, to: n.from + i.length, insert: l.slice(s) });
}), { userEvent: "delete.dedent" })), !0), gce = [
  { key: "Ctrl-b", run: ab, shift: yb, preventDefault: !0 },
  { key: "Ctrl-f", run: cb, shift: bb },
  { key: "Ctrl-p", run: fb, shift: _b },
  { key: "Ctrl-n", run: db, shift: kb },
  { key: "Ctrl-a", run: qae, shift: Jae },
  { key: "Ctrl-e", run: $ae, shift: Xae },
  { key: "Ctrl-d", run: Ab },
  { key: "Ctrl-h", run: nu },
  { key: "Ctrl-k", run: Tb },
  { key: "Ctrl-Alt-h", run: Eb },
  { key: "Ctrl-o", run: oce },
  { key: "Ctrl-t", run: sce },
  { key: "Ctrl-v", run: tu }
], yce = /* @__PURE__ */ [
  { key: "ArrowLeft", run: ab, shift: yb, preventDefault: !0 },
  { key: "Mod-ArrowLeft", mac: "Alt-ArrowLeft", run: Mae, shift: Vae, preventDefault: !0 },
  { mac: "Cmd-ArrowLeft", run: Bae, shift: Yae, preventDefault: !0 },
  { key: "ArrowRight", run: cb, shift: bb, preventDefault: !0 },
  { key: "Mod-ArrowRight", mac: "Alt-ArrowRight", run: Oae, shift: Uae, preventDefault: !0 },
  { mac: "Cmd-ArrowRight", run: Fae, shift: Zae, preventDefault: !0 },
  { key: "ArrowUp", run: fb, shift: _b, preventDefault: !0 },
  { mac: "Cmd-ArrowUp", run: Bp, shift: qp },
  { mac: "Ctrl-ArrowUp", run: Ip, shift: Np },
  { key: "ArrowDown", run: db, shift: kb, preventDefault: !0 },
  { mac: "Cmd-ArrowDown", run: Fp, shift: $p },
  { mac: "Ctrl-ArrowDown", run: tu, shift: Pp },
  { key: "PageUp", run: Ip, shift: Np },
  { key: "PageDown", run: tu, shift: Pp },
  { key: "Home", run: Pae, shift: Kae, preventDefault: !0 },
  { key: "Mod-Home", run: Bp, shift: qp },
  { key: "End", run: Nae, shift: Gae, preventDefault: !0 },
  { key: "Mod-End", run: Fp, shift: $p },
  { key: "Enter", run: dce },
  { key: "Mod-a", run: Qae },
  { key: "Backspace", run: nu, shift: nu },
  { key: "Delete", run: Ab },
  { key: "Mod-Backspace", mac: "Alt-Backspace", run: Eb },
  { key: "Mod-Delete", mac: "Alt-Delete", run: rce },
  { mac: "Mod-Backspace", run: ice },
  { mac: "Mod-Delete", run: Tb }
].concat(/* @__PURE__ */ gce.map((t) => ({ mac: t.key, run: t.run, shift: t.shift }))), bce = /* @__PURE__ */ [
  { key: "Alt-ArrowLeft", mac: "Ctrl-ArrowLeft", run: Lae, shift: Wae },
  { key: "Alt-ArrowRight", mac: "Ctrl-ArrowRight", run: Iae, shift: jae },
  { key: "Alt-ArrowUp", run: lce },
  { key: "Shift-Alt-ArrowUp", run: cce },
  { key: "Alt-ArrowDown", run: ace },
  { key: "Shift-Alt-ArrowDown", run: uce },
  { key: "Escape", run: nce },
  { key: "Mod-Enter", run: pce },
  { key: "Alt-l", mac: "Ctrl-l", run: ece },
  { key: "Mod-i", run: tce, preventDefault: !0 },
  { key: "Mod-[", run: Lb },
  { key: "Mod-]", run: Rb },
  { key: "Mod-Alt-\\", run: mce },
  { key: "Shift-Mod-k", run: hce },
  { key: "Shift-Mod-\\", run: zae },
  { key: "Mod-/", run: uae },
  { key: "Alt-A", run: fae }
].concat(yce), vce = { key: "Tab", run: Rb, shift: Lb };
function ce() {
  var t = arguments[0];
  typeof t == "string" && (t = document.createElement(t));
  var e = 1, n = arguments[1];
  if (n && typeof n == "object" && n.nodeType == null && !Array.isArray(n)) {
    for (var r in n)
      if (Object.prototype.hasOwnProperty.call(n, r)) {
        var i = n[r];
        typeof i == "string" ? t.setAttribute(r, i) : i != null && (t[r] = i);
      }
    e++;
  }
  for (; e < arguments.length; e++)
    Ib(t, arguments[e]);
  return t;
}
function Ib(t, e) {
  if (typeof e == "string")
    t.appendChild(document.createTextNode(e));
  else if (e != null)
    if (e.nodeType != null)
      t.appendChild(e);
    else if (Array.isArray(e))
      for (var n = 0; n < e.length; n++)
        Ib(t, e[n]);
    else
      throw new RangeError("Unsupported child node: " + e);
}
const Hp = typeof String.prototype.normalize == "function" ? (t) => t.normalize("NFKD") : (t) => t;
class Jr {
  constructor(e, n, r = 0, i = e.length, o, s) {
    this.test = s, this.value = { from: 0, to: 0 }, this.done = !1, this.matches = [], this.buffer = "", this.bufferPos = 0, this.iter = e.iterRange(r, i), this.bufferStart = r, this.normalize = o ? (l) => o(Hp(l)) : Hp, this.query = this.normalize(n);
  }
  peek() {
    if (this.bufferPos == this.buffer.length) {
      if (this.bufferStart += this.buffer.length, this.iter.next(), this.iter.done)
        return -1;
      this.bufferPos = 0, this.buffer = this.iter.value;
    }
    return Le(this.buffer, this.bufferPos);
  }
  next() {
    for (; this.matches.length; )
      this.matches.pop();
    return this.nextOverlapping();
  }
  nextOverlapping() {
    for (; ; ) {
      let e = this.peek();
      if (e < 0)
        return this.done = !0, this;
      let n = Bu(e), r = this.bufferStart + this.bufferPos;
      this.bufferPos += ft(e);
      let i = this.normalize(n);
      for (let o = 0, s = r; ; o++) {
        let l = i.charCodeAt(o), a = this.match(l, s);
        if (o == i.length - 1) {
          if (a)
            return this.value = a, this;
          break;
        }
        s == r && o < n.length && n.charCodeAt(o) == l && s++;
      }
    }
  }
  match(e, n) {
    let r = null;
    for (let i = 0; i < this.matches.length; i += 2) {
      let o = this.matches[i], s = !1;
      this.query.charCodeAt(o) == e && (o == this.query.length - 1 ? r = { from: this.matches[i + 1], to: n + 1 } : (this.matches[i]++, s = !0)), s || (this.matches.splice(i, 2), i -= 2);
    }
    return this.query.charCodeAt(0) == e && (this.query.length == 1 ? r = { from: n, to: n + 1 } : this.matches.push(1, n)), r && this.test && !this.test(r.from, r.to, this.buffer, this.bufferPos) && (r = null), r;
  }
}
typeof Symbol < "u" && (Jr.prototype[Symbol.iterator] = function() {
  return this;
});
const Nb = { from: -1, to: -1, match: /* @__PURE__ */ /.*/.exec("") }, oh = "gm" + (/x/.unicode == null ? "" : "u");
class Pb {
  constructor(e, n, r, i = 0, o = e.length) {
    if (this.text = e, this.to = o, this.curLine = "", this.done = !1, this.value = Nb, /\\[sWDnr]|\n|\r|\[\^/.test(n))
      return new Bb(e, n, r, i, o);
    this.re = new RegExp(n, oh + (r != null && r.ignoreCase ? "i" : "")), this.test = r == null ? void 0 : r.test, this.iter = e.iter();
    let s = e.lineAt(i);
    this.curLineStart = s.from, this.matchPos = Vs(e, i), this.getLine(this.curLineStart);
  }
  getLine(e) {
    this.iter.next(e), this.iter.lineBreak ? this.curLine = "" : (this.curLine = this.iter.value, this.curLineStart + this.curLine.length > this.to && (this.curLine = this.curLine.slice(0, this.to - this.curLineStart)), this.iter.next());
  }
  nextLine() {
    this.curLineStart = this.curLineStart + this.curLine.length + 1, this.curLineStart > this.to ? this.curLine = "" : this.getLine(0);
  }
  next() {
    for (let e = this.matchPos - this.curLineStart; ; ) {
      this.re.lastIndex = e;
      let n = this.matchPos <= this.to && this.re.exec(this.curLine);
      if (n) {
        let r = this.curLineStart + n.index, i = r + n[0].length;
        if (this.matchPos = Vs(this.text, i + (r == i ? 1 : 0)), r == this.curLineStart + this.curLine.length && this.nextLine(), (r < i || r > this.value.to) && (!this.test || this.test(r, i, n)))
          return this.value = { from: r, to: i, match: n }, this;
        e = this.matchPos - this.curLineStart;
      } else if (this.curLineStart + this.curLine.length < this.to)
        this.nextLine(), e = 0;
      else
        return this.done = !0, this;
    }
  }
}
const Ba = /* @__PURE__ */ new WeakMap();
class Br {
  constructor(e, n) {
    this.from = e, this.text = n;
  }
  get to() {
    return this.from + this.text.length;
  }
  static get(e, n, r) {
    let i = Ba.get(e);
    if (!i || i.from >= r || i.to <= n) {
      let l = new Br(n, e.sliceString(n, r));
      return Ba.set(e, l), l;
    }
    if (i.from == n && i.to == r)
      return i;
    let { text: o, from: s } = i;
    return s > n && (o = e.sliceString(n, s) + o, s = n), i.to < r && (o += e.sliceString(i.to, r)), Ba.set(e, new Br(s, o)), new Br(n, o.slice(n - s, r - s));
  }
}
class Bb {
  constructor(e, n, r, i, o) {
    this.text = e, this.to = o, this.done = !1, this.value = Nb, this.matchPos = Vs(e, i), this.re = new RegExp(n, oh + (r != null && r.ignoreCase ? "i" : "")), this.test = r == null ? void 0 : r.test, this.flat = Br.get(e, i, this.chunkEnd(i + 5e3));
  }
  chunkEnd(e) {
    return e >= this.to ? this.to : this.text.lineAt(e).to;
  }
  next() {
    for (; ; ) {
      let e = this.re.lastIndex = this.matchPos - this.flat.from, n = this.re.exec(this.flat.text);
      if (n && !n[0] && n.index == e && (this.re.lastIndex = e + 1, n = this.re.exec(this.flat.text)), n) {
        let r = this.flat.from + n.index, i = r + n[0].length;
        if ((this.flat.to >= this.to || n.index + n[0].length <= this.flat.text.length - 10) && (!this.test || this.test(r, i, n)))
          return this.value = { from: r, to: i, match: n }, this.matchPos = Vs(this.text, i + (r == i ? 1 : 0)), this;
      }
      if (this.flat.to == this.to)
        return this.done = !0, this;
      this.flat = Br.get(this.text, this.flat.from, this.chunkEnd(this.flat.from + this.flat.text.length * 2));
    }
  }
}
typeof Symbol < "u" && (Pb.prototype[Symbol.iterator] = Bb.prototype[Symbol.iterator] = function() {
  return this;
});
function xce(t) {
  try {
    return new RegExp(t, oh), !0;
  } catch {
    return !1;
  }
}
function Vs(t, e) {
  if (e >= t.length)
    return e;
  let n = t.lineAt(e), r;
  for (; e < n.to && (r = n.text.charCodeAt(e - n.from)) >= 56320 && r < 57344; )
    e++;
  return e;
}
function ru(t) {
  let e = ce("input", { class: "cm-textfield", name: "line" }), n = ce("form", {
    class: "cm-gotoLine",
    onkeydown: (i) => {
      i.keyCode == 27 ? (i.preventDefault(), t.dispatch({ effects: Us.of(!1) }), t.focus()) : i.keyCode == 13 && (i.preventDefault(), r());
    },
    onsubmit: (i) => {
      i.preventDefault(), r();
    }
  }, ce("label", t.state.phrase("Go to line"), ": ", e), " ", ce("button", { class: "cm-button", type: "submit" }, t.state.phrase("go")));
  function r() {
    let i = /^([+-])?(\d+)?(:\d+)?(%)?$/.exec(e.value);
    if (!i)
      return;
    let { state: o } = t, s = o.doc.lineAt(o.selection.main.head), [, l, a, c, u] = i, h = c ? +c.slice(1) : 0, f = a ? +a : s.number;
    if (a && u) {
      let m = f / 100;
      l && (m = m * (l == "-" ? -1 : 1) + s.number / o.doc.lines), f = Math.round(o.doc.lines * m);
    } else
      a && l && (f = f * (l == "-" ? -1 : 1) + s.number);
    let d = o.doc.line(Math.max(1, Math.min(o.doc.lines, f))), p = A.cursor(d.from + Math.max(0, Math.min(h, d.length)));
    t.dispatch({
      effects: [Us.of(!1), I.scrollIntoView(p.from, { y: "center" })],
      selection: p
    }), t.focus();
  }
  return { dom: n };
}
const Us = /* @__PURE__ */ j.define(), zp = /* @__PURE__ */ Be.define({
  create() {
    return !0;
  },
  update(t, e) {
    for (let n of e.effects)
      n.is(Us) && (t = n.value);
    return t;
  },
  provide: (t) => Xi.from(t, (e) => e ? ru : null)
}), _ce = (t) => {
  let e = Ji(t, ru);
  if (!e) {
    let n = [Us.of(!0)];
    t.state.field(zp, !1) == null && n.push(j.appendConfig.of([zp, kce])), t.dispatch({ effects: n }), e = Ji(t, ru);
  }
  return e && e.dom.querySelector("input").focus(), !0;
}, kce = /* @__PURE__ */ I.baseTheme({
  ".cm-panel.cm-gotoLine": {
    padding: "2px 6px 4px",
    "& label": { fontSize: "80%" }
  }
}), wce = {
  highlightWordAroundCursor: !1,
  minSelectionLength: 1,
  maxMatches: 100,
  wholeWords: !1
}, Fb = /* @__PURE__ */ N.define({
  combine(t) {
    return Xt(t, wce, {
      highlightWordAroundCursor: (e, n) => e || n,
      minSelectionLength: Math.min,
      maxMatches: Math.min
    });
  }
});
function Cce(t) {
  let e = [Dce, Tce];
  return t && e.push(Fb.of(t)), e;
}
const Ace = /* @__PURE__ */ V.mark({ class: "cm-selectionMatch" }), Sce = /* @__PURE__ */ V.mark({ class: "cm-selectionMatch cm-selectionMatch-main" });
function Vp(t, e, n, r) {
  return (n == 0 || t(e.sliceDoc(n - 1, n)) != ge.Word) && (r == e.doc.length || t(e.sliceDoc(r, r + 1)) != ge.Word);
}
function Ece(t, e, n, r) {
  return t(e.sliceDoc(n, n + 1)) == ge.Word && t(e.sliceDoc(r - 1, r)) == ge.Word;
}
const Tce = /* @__PURE__ */ Ee.fromClass(class {
  constructor(t) {
    this.decorations = this.getDeco(t);
  }
  update(t) {
    (t.selectionSet || t.docChanged || t.viewportChanged) && (this.decorations = this.getDeco(t.view));
  }
  getDeco(t) {
    let e = t.state.facet(Fb), { state: n } = t, r = n.selection;
    if (r.ranges.length > 1)
      return V.none;
    let i = r.main, o, s = null;
    if (i.empty) {
      if (!e.highlightWordAroundCursor)
        return V.none;
      let a = n.wordAt(i.head);
      if (!a)
        return V.none;
      s = n.charCategorizer(i.head), o = n.sliceDoc(a.from, a.to);
    } else {
      let a = i.to - i.from;
      if (a < e.minSelectionLength || a > 200)
        return V.none;
      if (e.wholeWords) {
        if (o = n.sliceDoc(i.from, i.to), s = n.charCategorizer(i.head), !(Vp(s, n, i.from, i.to) && Ece(s, n, i.from, i.to)))
          return V.none;
      } else if (o = n.sliceDoc(i.from, i.to).trim(), !o)
        return V.none;
    }
    let l = [];
    for (let a of t.visibleRanges) {
      let c = new Jr(n.doc, o, a.from, a.to);
      for (; !c.next().done; ) {
        let { from: u, to: h } = c.value;
        if ((!s || Vp(s, n, u, h)) && (i.empty && u <= i.from && h >= i.to ? l.push(Sce.range(u, h)) : (u >= i.to || h <= i.from) && l.push(Ace.range(u, h)), l.length > e.maxMatches))
          return V.none;
      }
    }
    return V.set(l);
  }
}, {
  decorations: (t) => t.decorations
}), Dce = /* @__PURE__ */ I.baseTheme({
  ".cm-selectionMatch": { backgroundColor: "#99ff7780" },
  ".cm-searchMatch .cm-selectionMatch": { backgroundColor: "transparent" }
}), Mce = ({ state: t, dispatch: e }) => {
  let { selection: n } = t, r = A.create(n.ranges.map((i) => t.wordAt(i.head) || A.cursor(i.head)), n.mainIndex);
  return r.eq(n) ? !1 : (e(t.update({ selection: r })), !0);
};
function Oce(t, e) {
  let { main: n, ranges: r } = t.selection, i = t.wordAt(n.head), o = i && i.from == n.from && i.to == n.to;
  for (let s = !1, l = new Jr(t.doc, e, r[r.length - 1].to); ; )
    if (l.next(), l.done) {
      if (s)
        return null;
      l = new Jr(t.doc, e, 0, Math.max(0, r[r.length - 1].from - 1)), s = !0;
    } else {
      if (s && r.some((a) => a.from == l.value.from))
        continue;
      if (o) {
        let a = t.wordAt(l.value.from);
        if (!a || a.from != l.value.from || a.to != l.value.to)
          continue;
      }
      return l.value;
    }
}
const Rce = ({ state: t, dispatch: e }) => {
  let { ranges: n } = t.selection;
  if (n.some((o) => o.from === o.to))
    return Mce({ state: t, dispatch: e });
  let r = t.sliceDoc(n[0].from, n[0].to);
  if (t.selection.ranges.some((o) => t.sliceDoc(o.from, o.to) != r))
    return !1;
  let i = Oce(t, r);
  return i ? (e(t.update({
    selection: t.selection.addRange(A.range(i.from, i.to), !1),
    effects: I.scrollIntoView(i.to)
  })), !0) : !1;
}, ci = /* @__PURE__ */ N.define({
  combine(t) {
    return Xt(t, {
      top: !1,
      caseSensitive: !1,
      literal: !1,
      regexp: !1,
      wholeWord: !1,
      createPanel: (e) => new Uce(e),
      scrollToMatch: (e) => I.scrollIntoView(e)
    });
  }
});
class qb {
  constructor(e) {
    this.search = e.search, this.caseSensitive = !!e.caseSensitive, this.literal = !!e.literal, this.regexp = !!e.regexp, this.replace = e.replace || "", this.valid = !!this.search && (!this.regexp || xce(this.search)), this.unquoted = this.unquote(this.search), this.wholeWord = !!e.wholeWord;
  }
  unquote(e) {
    return this.literal ? e : e.replace(/\\([nrt\\])/g, (n, r) => r == "n" ? `
` : r == "r" ? "\r" : r == "t" ? "	" : "\\");
  }
  eq(e) {
    return this.search == e.search && this.replace == e.replace && this.caseSensitive == e.caseSensitive && this.regexp == e.regexp && this.wholeWord == e.wholeWord;
  }
  create() {
    return this.regexp ? new Pce(this) : new Ice(this);
  }
  getCursor(e, n = 0, r) {
    let i = e.doc ? e : Y.create({ doc: e });
    return r == null && (r = i.doc.length), this.regexp ? Sr(this, i, n, r) : Ar(this, i, n, r);
  }
}
class $b {
  constructor(e) {
    this.spec = e;
  }
}
function Ar(t, e, n, r) {
  return new Jr(e.doc, t.unquoted, n, r, t.caseSensitive ? void 0 : (i) => i.toLowerCase(), t.wholeWord ? Lce(e.doc, e.charCategorizer(e.selection.main.head)) : void 0);
}
function Lce(t, e) {
  return (n, r, i, o) => ((o > n || o + i.length < r) && (o = Math.max(0, n - 2), i = t.sliceString(o, Math.min(t.length, r + 2))), (e(Ws(i, n - o)) != ge.Word || e(js(i, n - o)) != ge.Word) && (e(js(i, r - o)) != ge.Word || e(Ws(i, r - o)) != ge.Word));
}
class Ice extends $b {
  constructor(e) {
    super(e);
  }
  nextMatch(e, n, r) {
    let i = Ar(this.spec, e, r, e.doc.length).nextOverlapping();
    return i.done && (i = Ar(this.spec, e, 0, n).nextOverlapping()), i.done ? null : i.value;
  }
  prevMatchInRange(e, n, r) {
    for (let i = r; ; ) {
      let o = Math.max(n, i - 1e4 - this.spec.unquoted.length), s = Ar(this.spec, e, o, i), l = null;
      for (; !s.nextOverlapping().done; )
        l = s.value;
      if (l)
        return l;
      if (o == n)
        return null;
      i -= 1e4;
    }
  }
  prevMatch(e, n, r) {
    return this.prevMatchInRange(e, 0, n) || this.prevMatchInRange(e, r, e.doc.length);
  }
  getReplacement(e) {
    return this.spec.unquote(this.spec.replace);
  }
  matchAll(e, n) {
    let r = Ar(this.spec, e, 0, e.doc.length), i = [];
    for (; !r.next().done; ) {
      if (i.length >= n)
        return null;
      i.push(r.value);
    }
    return i;
  }
  highlight(e, n, r, i) {
    let o = Ar(this.spec, e, Math.max(0, n - this.spec.unquoted.length), Math.min(r + this.spec.unquoted.length, e.doc.length));
    for (; !o.next().done; )
      i(o.value.from, o.value.to);
  }
}
function Sr(t, e, n, r) {
  return new Pb(e.doc, t.search, {
    ignoreCase: !t.caseSensitive,
    test: t.wholeWord ? Nce(e.charCategorizer(e.selection.main.head)) : void 0
  }, n, r);
}
function Ws(t, e) {
  return t.slice($e(t, e, !1), e);
}
function js(t, e) {
  return t.slice(e, $e(t, e));
}
function Nce(t) {
  return (e, n, r) => !r[0].length || (t(Ws(r.input, r.index)) != ge.Word || t(js(r.input, r.index)) != ge.Word) && (t(js(r.input, r.index + r[0].length)) != ge.Word || t(Ws(r.input, r.index + r[0].length)) != ge.Word);
}
class Pce extends $b {
  nextMatch(e, n, r) {
    let i = Sr(this.spec, e, r, e.doc.length).next();
    return i.done && (i = Sr(this.spec, e, 0, n).next()), i.done ? null : i.value;
  }
  prevMatchInRange(e, n, r) {
    for (let i = 1; ; i++) {
      let o = Math.max(n, r - i * 1e4), s = Sr(this.spec, e, o, r), l = null;
      for (; !s.next().done; )
        l = s.value;
      if (l && (o == n || l.from > o + 10))
        return l;
      if (o == n)
        return null;
    }
  }
  prevMatch(e, n, r) {
    return this.prevMatchInRange(e, 0, n) || this.prevMatchInRange(e, r, e.doc.length);
  }
  getReplacement(e) {
    return this.spec.unquote(this.spec.replace.replace(/\$([$&\d+])/g, (n, r) => r == "$" ? "$" : r == "&" ? e.match[0] : r != "0" && +r < e.match.length ? e.match[r] : n));
  }
  matchAll(e, n) {
    let r = Sr(this.spec, e, 0, e.doc.length), i = [];
    for (; !r.next().done; ) {
      if (i.length >= n)
        return null;
      i.push(r.value);
    }
    return i;
  }
  highlight(e, n, r, i) {
    let o = Sr(this.spec, e, Math.max(0, n - 250), Math.min(r + 250, e.doc.length));
    for (; !o.next().done; )
      i(o.value.from, o.value.to);
  }
}
const eo = /* @__PURE__ */ j.define(), sh = /* @__PURE__ */ j.define(), En = /* @__PURE__ */ Be.define({
  create(t) {
    return new Fa(iu(t).create(), null);
  },
  update(t, e) {
    for (let n of e.effects)
      n.is(eo) ? t = new Fa(n.value.create(), t.panel) : n.is(sh) && (t = new Fa(t.query, n.value ? lh : null));
    return t;
  },
  provide: (t) => Xi.from(t, (e) => e.panel)
});
class Fa {
  constructor(e, n) {
    this.query = e, this.panel = n;
  }
}
const Bce = /* @__PURE__ */ V.mark({ class: "cm-searchMatch" }), Fce = /* @__PURE__ */ V.mark({ class: "cm-searchMatch cm-searchMatch-selected" }), qce = /* @__PURE__ */ Ee.fromClass(class {
  constructor(t) {
    this.view = t, this.decorations = this.highlight(t.state.field(En));
  }
  update(t) {
    let e = t.state.field(En);
    (e != t.startState.field(En) || t.docChanged || t.selectionSet || t.viewportChanged) && (this.decorations = this.highlight(e));
  }
  highlight({ query: t, panel: e }) {
    if (!e || !t.spec.valid)
      return V.none;
    let { view: n } = this, r = new Rn();
    for (let i = 0, o = n.visibleRanges, s = o.length; i < s; i++) {
      let { from: l, to: a } = o[i];
      for (; i < s - 1 && a > o[i + 1].from - 2 * 250; )
        a = o[++i].to;
      t.highlight(n.state, l, a, (c, u) => {
        let h = n.state.selection.ranges.some((f) => f.from == c && f.to == u);
        r.add(c, u, h ? Fce : Bce);
      });
    }
    return r.finish();
  }
}, {
  decorations: (t) => t.decorations
});
function uo(t) {
  return (e) => {
    let n = e.state.field(En, !1);
    return n && n.query.spec.valid ? t(e, n) : Vb(e);
  };
}
const Gs = /* @__PURE__ */ uo((t, { query: e }) => {
  let { to: n } = t.state.selection.main, r = e.nextMatch(t.state, n, n);
  if (!r)
    return !1;
  let i = A.single(r.from, r.to), o = t.state.facet(ci);
  return t.dispatch({
    selection: i,
    effects: [ah(t, r), o.scrollToMatch(i.main, t)],
    userEvent: "select.search"
  }), zb(t), !0;
}), Ks = /* @__PURE__ */ uo((t, { query: e }) => {
  let { state: n } = t, { from: r } = n.selection.main, i = e.prevMatch(n, r, r);
  if (!i)
    return !1;
  let o = A.single(i.from, i.to), s = t.state.facet(ci);
  return t.dispatch({
    selection: o,
    effects: [ah(t, i), s.scrollToMatch(o.main, t)],
    userEvent: "select.search"
  }), zb(t), !0;
}), $ce = /* @__PURE__ */ uo((t, { query: e }) => {
  let n = e.matchAll(t.state, 1e3);
  return !n || !n.length ? !1 : (t.dispatch({
    selection: A.create(n.map((r) => A.range(r.from, r.to))),
    userEvent: "select.search.matches"
  }), !0);
}), Hce = ({ state: t, dispatch: e }) => {
  let n = t.selection;
  if (n.ranges.length > 1 || n.main.empty)
    return !1;
  let { from: r, to: i } = n.main, o = [], s = 0;
  for (let l = new Jr(t.doc, t.sliceDoc(r, i)); !l.next().done; ) {
    if (o.length > 1e3)
      return !1;
    l.value.from == r && (s = o.length), o.push(A.range(l.value.from, l.value.to));
  }
  return e(t.update({
    selection: A.create(o, s),
    userEvent: "select.search.matches"
  })), !0;
}, Up = /* @__PURE__ */ uo((t, { query: e }) => {
  let { state: n } = t, { from: r, to: i } = n.selection.main;
  if (n.readOnly)
    return !1;
  let o = e.nextMatch(n, r, r);
  if (!o)
    return !1;
  let s = [], l, a, c = [];
  if (o.from == r && o.to == i && (a = n.toText(e.getReplacement(o)), s.push({ from: o.from, to: o.to, insert: a }), o = e.nextMatch(n, o.from, o.to), c.push(I.announce.of(n.phrase("replaced match on line $", n.doc.lineAt(r).number) + "."))), o) {
    let u = s.length == 0 || s[0].from >= o.to ? 0 : o.to - o.from - a.length;
    l = A.single(o.from - u, o.to - u), c.push(ah(t, o)), c.push(n.facet(ci).scrollToMatch(l.main, t));
  }
  return t.dispatch({
    changes: s,
    selection: l,
    effects: c,
    userEvent: "input.replace"
  }), !0;
}), zce = /* @__PURE__ */ uo((t, { query: e }) => {
  if (t.state.readOnly)
    return !1;
  let n = e.matchAll(t.state, 1e9).map((i) => {
    let { from: o, to: s } = i;
    return { from: o, to: s, insert: e.getReplacement(i) };
  });
  if (!n.length)
    return !1;
  let r = t.state.phrase("replaced $ matches", n.length) + ".";
  return t.dispatch({
    changes: n,
    effects: I.announce.of(r),
    userEvent: "input.replace.all"
  }), !0;
});
function lh(t) {
  return t.state.facet(ci).createPanel(t);
}
function iu(t, e) {
  var n, r, i, o, s;
  let l = t.selection.main, a = l.empty || l.to > l.from + 100 ? "" : t.sliceDoc(l.from, l.to);
  if (e && !a)
    return e;
  let c = t.facet(ci);
  return new qb({
    search: ((n = e == null ? void 0 : e.literal) !== null && n !== void 0 ? n : c.literal) ? a : a.replace(/\n/g, "\\n"),
    caseSensitive: (r = e == null ? void 0 : e.caseSensitive) !== null && r !== void 0 ? r : c.caseSensitive,
    literal: (i = e == null ? void 0 : e.literal) !== null && i !== void 0 ? i : c.literal,
    regexp: (o = e == null ? void 0 : e.regexp) !== null && o !== void 0 ? o : c.regexp,
    wholeWord: (s = e == null ? void 0 : e.wholeWord) !== null && s !== void 0 ? s : c.wholeWord
  });
}
function Hb(t) {
  let e = Ji(t, lh);
  return e && e.dom.querySelector("[main-field]");
}
function zb(t) {
  let e = Hb(t);
  e && e == t.root.activeElement && e.select();
}
const Vb = (t) => {
  let e = t.state.field(En, !1);
  if (e && e.panel) {
    let n = Hb(t);
    if (n && n != t.root.activeElement) {
      let r = iu(t.state, e.query.spec);
      r.valid && t.dispatch({ effects: eo.of(r) }), n.focus(), n.select();
    }
  } else
    t.dispatch({ effects: [
      sh.of(!0),
      e ? eo.of(iu(t.state, e.query.spec)) : j.appendConfig.of(jce)
    ] });
  return !0;
}, Ub = (t) => {
  let e = t.state.field(En, !1);
  if (!e || !e.panel)
    return !1;
  let n = Ji(t, lh);
  return n && n.dom.contains(t.root.activeElement) && t.focus(), t.dispatch({ effects: sh.of(!1) }), !0;
}, Vce = [
  { key: "Mod-f", run: Vb, scope: "editor search-panel" },
  { key: "F3", run: Gs, shift: Ks, scope: "editor search-panel", preventDefault: !0 },
  { key: "Mod-g", run: Gs, shift: Ks, scope: "editor search-panel", preventDefault: !0 },
  { key: "Escape", run: Ub, scope: "editor search-panel" },
  { key: "Mod-Shift-l", run: Hce },
  { key: "Alt-g", run: _ce },
  { key: "Mod-d", run: Rce, preventDefault: !0 }
];
class Uce {
  constructor(e) {
    this.view = e;
    let n = this.query = e.state.field(En).query.spec;
    this.commit = this.commit.bind(this), this.searchField = ce("input", {
      value: n.search,
      placeholder: it(e, "Find"),
      "aria-label": it(e, "Find"),
      class: "cm-textfield",
      name: "search",
      form: "",
      "main-field": "true",
      onchange: this.commit,
      onkeyup: this.commit
    }), this.replaceField = ce("input", {
      value: n.replace,
      placeholder: it(e, "Replace"),
      "aria-label": it(e, "Replace"),
      class: "cm-textfield",
      name: "replace",
      form: "",
      onchange: this.commit,
      onkeyup: this.commit
    }), this.caseField = ce("input", {
      type: "checkbox",
      name: "case",
      form: "",
      checked: n.caseSensitive,
      onchange: this.commit
    }), this.reField = ce("input", {
      type: "checkbox",
      name: "re",
      form: "",
      checked: n.regexp,
      onchange: this.commit
    }), this.wordField = ce("input", {
      type: "checkbox",
      name: "word",
      form: "",
      checked: n.wholeWord,
      onchange: this.commit
    });
    function r(i, o, s) {
      return ce("button", { class: "cm-button", name: i, onclick: o, type: "button" }, s);
    }
    this.dom = ce("div", { onkeydown: (i) => this.keydown(i), class: "cm-search" }, [
      this.searchField,
      r("next", () => Gs(e), [it(e, "next")]),
      r("prev", () => Ks(e), [it(e, "previous")]),
      r("select", () => $ce(e), [it(e, "all")]),
      ce("label", null, [this.caseField, it(e, "match case")]),
      ce("label", null, [this.reField, it(e, "regexp")]),
      ce("label", null, [this.wordField, it(e, "by word")]),
      ...e.state.readOnly ? [] : [
        ce("br"),
        this.replaceField,
        r("replace", () => Up(e), [it(e, "replace")]),
        r("replaceAll", () => zce(e), [it(e, "replace all")])
      ],
      ce("button", {
        name: "close",
        onclick: () => Ub(e),
        "aria-label": it(e, "close"),
        type: "button"
      }, ["\xD7"])
    ]);
  }
  commit() {
    let e = new qb({
      search: this.searchField.value,
      caseSensitive: this.caseField.checked,
      regexp: this.reField.checked,
      wholeWord: this.wordField.checked,
      replace: this.replaceField.value
    });
    e.eq(this.query) || (this.query = e, this.view.dispatch({ effects: eo.of(e) }));
  }
  keydown(e) {
    ise(this.view, e, "search-panel") ? e.preventDefault() : e.keyCode == 13 && e.target == this.searchField ? (e.preventDefault(), (e.shiftKey ? Ks : Gs)(this.view)) : e.keyCode == 13 && e.target == this.replaceField && (e.preventDefault(), Up(this.view));
  }
  update(e) {
    for (let n of e.transactions)
      for (let r of n.effects)
        r.is(eo) && !r.value.eq(this.query) && this.setQuery(r.value);
  }
  setQuery(e) {
    this.query = e, this.searchField.value = e.search, this.replaceField.value = e.replace, this.caseField.checked = e.caseSensitive, this.reField.checked = e.regexp, this.wordField.checked = e.wholeWord;
  }
  mount() {
    this.searchField.select();
  }
  get pos() {
    return 80;
  }
  get top() {
    return this.view.state.facet(ci).top;
  }
}
function it(t, e) {
  return t.state.phrase(e);
}
const Vo = 30, Uo = /[\s\.,:;?!]/;
function ah(t, { from: e, to: n }) {
  let r = t.state.doc.lineAt(e), i = t.state.doc.lineAt(n).to, o = Math.max(r.from, e - Vo), s = Math.min(i, n + Vo), l = t.state.sliceDoc(o, s);
  if (o != r.from) {
    for (let a = 0; a < Vo; a++)
      if (!Uo.test(l[a + 1]) && Uo.test(l[a])) {
        l = l.slice(a);
        break;
      }
  }
  if (s != i) {
    for (let a = l.length - 1; a > l.length - Vo; a--)
      if (!Uo.test(l[a - 1]) && Uo.test(l[a])) {
        l = l.slice(0, a);
        break;
      }
  }
  return I.announce.of(`${t.state.phrase("current match")}. ${l} ${t.state.phrase("on line")} ${r.number}.`);
}
const Wce = /* @__PURE__ */ I.baseTheme({
  ".cm-panel.cm-search": {
    padding: "2px 6px 4px",
    position: "relative",
    "& [name=close]": {
      position: "absolute",
      top: "0",
      right: "4px",
      backgroundColor: "inherit",
      border: "none",
      font: "inherit",
      padding: 0,
      margin: 0
    },
    "& input, & button, & label": {
      margin: ".2em .6em .2em 0"
    },
    "& input[type=checkbox]": {
      marginRight: ".2em"
    },
    "& label": {
      fontSize: "80%",
      whiteSpace: "pre"
    }
  },
  "&light .cm-searchMatch": { backgroundColor: "#ffff0054" },
  "&dark .cm-searchMatch": { backgroundColor: "#00ffff8a" },
  "&light .cm-searchMatch-selected": { backgroundColor: "#ff6a0054" },
  "&dark .cm-searchMatch-selected": { backgroundColor: "#ff00ff8a" }
}), jce = [
  En,
  /* @__PURE__ */ si.low(qce),
  Wce
];
class Wb {
  constructor(e, n, r) {
    this.state = e, this.pos = n, this.explicit = r, this.abortListeners = [];
  }
  tokenBefore(e) {
    let n = ze(this.state).resolveInner(this.pos, -1);
    for (; n && e.indexOf(n.name) < 0; )
      n = n.parent;
    return n ? {
      from: n.from,
      to: this.pos,
      text: this.state.sliceDoc(n.from, this.pos),
      type: n.type
    } : null;
  }
  matchBefore(e) {
    let n = this.state.doc.lineAt(this.pos), r = Math.max(n.from, this.pos - 250), i = n.text.slice(r - n.from, this.pos - n.from), o = i.search(jb(e, !1));
    return o < 0 ? null : { from: r + o, to: this.pos, text: i.slice(o) };
  }
  get aborted() {
    return this.abortListeners == null;
  }
  addEventListener(e, n) {
    e == "abort" && this.abortListeners && this.abortListeners.push(n);
  }
}
function Wp(t) {
  let e = Object.keys(t).join(""), n = /\w/.test(e);
  return n && (e = e.replace(/\w/g, "")), `[${n ? "\\w" : ""}${e.replace(/[^\w\s]/g, "\\$&")}]`;
}
function Gce(t) {
  let e = /* @__PURE__ */ Object.create(null), n = /* @__PURE__ */ Object.create(null);
  for (let { label: i } of t) {
    e[i[0]] = !0;
    for (let o = 1; o < i.length; o++)
      n[i[o]] = !0;
  }
  let r = Wp(e) + Wp(n) + "*$";
  return [new RegExp("^" + r), new RegExp(r)];
}
function Kce(t) {
  let e = t.map((i) => typeof i == "string" ? { label: i } : i), [n, r] = e.every((i) => /^\w+$/.test(i.label)) ? [/\w*$/, /\w+$/] : Gce(e);
  return (i) => {
    let o = i.matchBefore(r);
    return o || i.explicit ? { from: o ? o.from : i.pos, options: e, validFor: n } : null;
  };
}
class jp {
  constructor(e, n, r, i) {
    this.completion = e, this.source = n, this.match = r, this.score = i;
  }
}
function Tn(t) {
  return t.selection.main.from;
}
function jb(t, e) {
  var n;
  let { source: r } = t, i = e && r[0] != "^", o = r[r.length - 1] != "$";
  return !i && !o ? t : new RegExp(`${i ? "^" : ""}(?:${r})${o ? "$" : ""}`, (n = t.flags) !== null && n !== void 0 ? n : t.ignoreCase ? "i" : "");
}
const Yce = /* @__PURE__ */ fn.define();
function Zce(t, e, n, r) {
  let { main: i } = t.selection, o = n - i.from, s = r - i.from;
  return Object.assign(Object.assign({}, t.changeByRange((l) => l != i && n != r && t.sliceDoc(l.from + o, l.from + s) != t.sliceDoc(n, r) ? { range: l } : {
    changes: { from: l.from + o, to: r == i.from ? l.to : l.from + s, insert: e },
    range: A.cursor(l.from + o + e.length)
  })), { userEvent: "input.complete" });
}
const Gp = /* @__PURE__ */ new WeakMap();
function Jce(t) {
  if (!Array.isArray(t))
    return t;
  let e = Gp.get(t);
  return e || Gp.set(t, e = Kce(t)), e;
}
const ch = /* @__PURE__ */ j.define(), to = /* @__PURE__ */ j.define();
class Xce {
  constructor(e) {
    this.pattern = e, this.chars = [], this.folded = [], this.any = [], this.precise = [], this.byWord = [], this.score = 0, this.matched = [];
    for (let n = 0; n < e.length; ) {
      let r = Le(e, n), i = ft(r);
      this.chars.push(r);
      let o = e.slice(n, n + i), s = o.toUpperCase();
      this.folded.push(Le(s == o ? o.toLowerCase() : s, 0)), n += i;
    }
    this.astral = e.length != this.chars.length;
  }
  ret(e, n) {
    return this.score = e, this.matched = n, !0;
  }
  match(e) {
    if (this.pattern.length == 0)
      return this.ret(-100, []);
    if (e.length < this.pattern.length)
      return !1;
    let { chars: n, folded: r, any: i, precise: o, byWord: s } = this;
    if (n.length == 1) {
      let b = Le(e, 0), k = ft(b), x = k == e.length ? 0 : -100;
      if (b != n[0])
        if (b == r[0])
          x += -200;
        else
          return !1;
      return this.ret(x, [0, k]);
    }
    let l = e.indexOf(this.pattern);
    if (l == 0)
      return this.ret(e.length == this.pattern.length ? 0 : -100, [0, this.pattern.length]);
    let a = n.length, c = 0;
    if (l < 0) {
      for (let b = 0, k = Math.min(e.length, 200); b < k && c < a; ) {
        let x = Le(e, b);
        (x == n[c] || x == r[c]) && (i[c++] = b), b += ft(x);
      }
      if (c < a)
        return !1;
    }
    let u = 0, h = 0, f = !1, d = 0, p = -1, m = -1, g = /[a-z]/.test(e), y = !0;
    for (let b = 0, k = Math.min(e.length, 200), x = 0; b < k && h < a; ) {
      let w = Le(e, b);
      l < 0 && (u < a && w == n[u] && (o[u++] = b), d < a && (w == n[d] || w == r[d] ? (d == 0 && (p = b), m = b + 1, d++) : d = 0));
      let v, C = w < 255 ? w >= 48 && w <= 57 || w >= 97 && w <= 122 ? 2 : w >= 65 && w <= 90 ? 1 : 0 : (v = Bu(w)) != v.toLowerCase() ? 1 : v != v.toUpperCase() ? 2 : 0;
      (!b || C == 1 && g || x == 0 && C != 0) && (n[h] == w || r[h] == w && (f = !0) ? s[h++] = b : s.length && (y = !1)), x = C, b += ft(w);
    }
    return h == a && s[0] == 0 && y ? this.result(-100 + (f ? -200 : 0), s, e) : d == a && p == 0 ? this.ret(-200 - e.length + (m == e.length ? 0 : -100), [0, m]) : l > -1 ? this.ret(-700 - e.length, [l, l + this.pattern.length]) : d == a ? this.ret(-200 + -700 - e.length, [p, m]) : h == a ? this.result(-100 + (f ? -200 : 0) + -700 + (y ? 0 : -1100), s, e) : n.length == 2 ? !1 : this.result((i[0] ? -700 : 0) + -200 + -1100, i, e);
  }
  result(e, n, r) {
    let i = [], o = 0;
    for (let s of n) {
      let l = s + (this.astral ? ft(Le(r, s)) : 1);
      o && i[o - 1] == s ? i[o - 1] = l : (i[o++] = s, i[o++] = l);
    }
    return this.ret(e - r.length, i);
  }
}
const rt = /* @__PURE__ */ N.define({
  combine(t) {
    return Xt(t, {
      activateOnTyping: !0,
      selectOnOpen: !0,
      override: null,
      closeOnBlur: !0,
      maxRenderedOptions: 100,
      defaultKeymap: !0,
      tooltipClass: () => "",
      optionClass: () => "",
      aboveCursor: !1,
      icons: !0,
      addToOptions: [],
      positionInfo: Qce,
      compareCompletions: (e, n) => e.label.localeCompare(n.label),
      interactionDelay: 75
    }, {
      defaultKeymap: (e, n) => e && n,
      closeOnBlur: (e, n) => e && n,
      icons: (e, n) => e && n,
      tooltipClass: (e, n) => (r) => Kp(e(r), n(r)),
      optionClass: (e, n) => (r) => Kp(e(r), n(r)),
      addToOptions: (e, n) => e.concat(n)
    });
  }
});
function Kp(t, e) {
  return t ? e ? t + " " + e : t : e;
}
function Qce(t, e, n, r, i) {
  let o = t.textDirection == ye.RTL, s = o, l = !1, a = "top", c, u, h = e.left - i.left, f = i.right - e.right, d = r.right - r.left, p = r.bottom - r.top;
  if (s && h < Math.min(d, f) ? s = !1 : !s && f < Math.min(d, h) && (s = !0), d <= (s ? h : f))
    c = Math.max(i.top, Math.min(n.top, i.bottom - p)) - e.top, u = Math.min(400, s ? h : f);
  else {
    l = !0, u = Math.min(400, (o ? e.right : i.right - e.left) - 30);
    let m = i.bottom - e.bottom;
    m >= p || m > e.top ? c = n.bottom - e.top : (a = "bottom", c = e.bottom - n.top);
  }
  return {
    style: `${a}: ${c}px; max-width: ${u}px`,
    class: "cm-completionInfo-" + (l ? o ? "left-narrow" : "right-narrow" : s ? "left" : "right")
  };
}
function eue(t) {
  let e = t.addToOptions.slice();
  return t.icons && e.push({
    render(n) {
      let r = document.createElement("div");
      return r.classList.add("cm-completionIcon"), n.type && r.classList.add(...n.type.split(/\s+/g).map((i) => "cm-completionIcon-" + i)), r.setAttribute("aria-hidden", "true"), r;
    },
    position: 20
  }), e.push({
    render(n, r, i) {
      let o = document.createElement("span");
      o.className = "cm-completionLabel";
      let s = n.displayLabel || n.label, l = 0;
      for (let a = 0; a < i.length; ) {
        let c = i[a++], u = i[a++];
        c > l && o.appendChild(document.createTextNode(s.slice(l, c)));
        let h = o.appendChild(document.createElement("span"));
        h.appendChild(document.createTextNode(s.slice(c, u))), h.className = "cm-completionMatchedText", l = u;
      }
      return l < s.length && o.appendChild(document.createTextNode(s.slice(l))), o;
    },
    position: 50
  }, {
    render(n) {
      if (!n.detail)
        return null;
      let r = document.createElement("span");
      return r.className = "cm-completionDetail", r.textContent = n.detail, r;
    },
    position: 80
  }), e.sort((n, r) => n.position - r.position).map((n) => n.render);
}
function Yp(t, e, n) {
  if (t <= n)
    return { from: 0, to: t };
  if (e < 0 && (e = 0), e <= t >> 1) {
    let i = Math.floor(e / n);
    return { from: i * n, to: (i + 1) * n };
  }
  let r = Math.floor((t - e) / n);
  return { from: t - (r + 1) * n, to: t - r * n };
}
class tue {
  constructor(e, n, r) {
    this.view = e, this.stateField = n, this.applyCompletion = r, this.info = null, this.infoDestroy = null, this.placeInfoReq = {
      read: () => this.measureInfo(),
      write: (a) => this.placeInfo(a),
      key: this
    }, this.space = null, this.currentClass = "";
    let i = e.state.field(n), { options: o, selected: s } = i.open, l = e.state.facet(rt);
    this.optionContent = eue(l), this.optionClass = l.optionClass, this.tooltipClass = l.tooltipClass, this.range = Yp(o.length, s, l.maxRenderedOptions), this.dom = document.createElement("div"), this.dom.className = "cm-tooltip-autocomplete", this.updateTooltipClass(e.state), this.dom.addEventListener("mousedown", (a) => {
      for (let c = a.target, u; c && c != this.dom; c = c.parentNode)
        if (c.nodeName == "LI" && (u = /-(\d+)$/.exec(c.id)) && +u[1] < o.length) {
          this.applyCompletion(e, o[+u[1]]), a.preventDefault();
          return;
        }
    }), this.dom.addEventListener("focusout", (a) => {
      let c = e.state.field(this.stateField, !1);
      c && c.tooltip && e.state.facet(rt).closeOnBlur && a.relatedTarget != e.contentDOM && e.dispatch({ effects: to.of(null) });
    }), this.list = this.dom.appendChild(this.createListBox(o, i.id, this.range)), this.list.addEventListener("scroll", () => {
      this.info && this.view.requestMeasure(this.placeInfoReq);
    });
  }
  mount() {
    this.updateSel();
  }
  update(e) {
    var n, r, i;
    let o = e.state.field(this.stateField), s = e.startState.field(this.stateField);
    this.updateTooltipClass(e.state), o != s && (this.updateSel(), ((n = o.open) === null || n === void 0 ? void 0 : n.disabled) != ((r = s.open) === null || r === void 0 ? void 0 : r.disabled) && this.dom.classList.toggle("cm-tooltip-autocomplete-disabled", !!(!((i = o.open) === null || i === void 0) && i.disabled)));
  }
  updateTooltipClass(e) {
    let n = this.tooltipClass(e);
    if (n != this.currentClass) {
      for (let r of this.currentClass.split(" "))
        r && this.dom.classList.remove(r);
      for (let r of n.split(" "))
        r && this.dom.classList.add(r);
      this.currentClass = n;
    }
  }
  positioned(e) {
    this.space = e, this.info && this.view.requestMeasure(this.placeInfoReq);
  }
  updateSel() {
    let e = this.view.state.field(this.stateField), n = e.open;
    if ((n.selected > -1 && n.selected < this.range.from || n.selected >= this.range.to) && (this.range = Yp(n.options.length, n.selected, this.view.state.facet(rt).maxRenderedOptions), this.list.remove(), this.list = this.dom.appendChild(this.createListBox(n.options, e.id, this.range)), this.list.addEventListener("scroll", () => {
      this.info && this.view.requestMeasure(this.placeInfoReq);
    })), this.updateSelectedOption(n.selected)) {
      this.destroyInfo();
      let { completion: r } = n.options[n.selected], { info: i } = r;
      if (!i)
        return;
      let o = typeof i == "string" ? document.createTextNode(i) : i(r);
      if (!o)
        return;
      "then" in o ? o.then((s) => {
        s && this.view.state.field(this.stateField, !1) == e && this.addInfoPane(s, r);
      }).catch((s) => pt(this.view.state, s, "completion info")) : this.addInfoPane(o, r);
    }
  }
  addInfoPane(e, n) {
    this.destroyInfo();
    let r = this.info = document.createElement("div");
    if (r.className = "cm-tooltip cm-completionInfo", e.nodeType != null)
      r.appendChild(e), this.infoDestroy = null;
    else {
      let { dom: i, destroy: o } = e;
      r.appendChild(i), this.infoDestroy = o || null;
    }
    this.dom.appendChild(r), this.view.requestMeasure(this.placeInfoReq);
  }
  updateSelectedOption(e) {
    let n = null;
    for (let r = this.list.firstChild, i = this.range.from; r; r = r.nextSibling, i++)
      r.nodeName != "LI" || !r.id ? i-- : i == e ? r.hasAttribute("aria-selected") || (r.setAttribute("aria-selected", "true"), n = r) : r.hasAttribute("aria-selected") && r.removeAttribute("aria-selected");
    return n && rue(this.list, n), n;
  }
  measureInfo() {
    let e = this.dom.querySelector("[aria-selected]");
    if (!e || !this.info)
      return null;
    let n = this.dom.getBoundingClientRect(), r = this.info.getBoundingClientRect(), i = e.getBoundingClientRect(), o = this.space;
    if (!o) {
      let s = this.dom.ownerDocument.defaultView || window;
      o = { left: 0, top: 0, right: s.innerWidth, bottom: s.innerHeight };
    }
    return i.top > Math.min(o.bottom, n.bottom) - 10 || i.bottom < Math.max(o.top, n.top) + 10 ? null : this.view.state.facet(rt).positionInfo(this.view, n, i, r, o);
  }
  placeInfo(e) {
    this.info && (e ? (e.style && (this.info.style.cssText = e.style), this.info.className = "cm-tooltip cm-completionInfo " + (e.class || "")) : this.info.style.cssText = "top: -1e6px");
  }
  createListBox(e, n, r) {
    const i = document.createElement("ul");
    i.id = n, i.setAttribute("role", "listbox"), i.setAttribute("aria-expanded", "true"), i.setAttribute("aria-label", this.view.state.phrase("Completions"));
    let o = null;
    for (let s = r.from; s < r.to; s++) {
      let { completion: l, match: a } = e[s], { section: c } = l;
      if (c) {
        let f = typeof c == "string" ? c : c.name;
        if (f != o && (s > r.from || r.from == 0))
          if (o = f, typeof c != "string" && c.header)
            i.appendChild(c.header(c));
          else {
            let d = i.appendChild(document.createElement("completion-section"));
            d.textContent = f;
          }
      }
      const u = i.appendChild(document.createElement("li"));
      u.id = n + "-" + s, u.setAttribute("role", "option");
      let h = this.optionClass(l);
      h && (u.className = h);
      for (let f of this.optionContent) {
        let d = f(l, this.view.state, a);
        d && u.appendChild(d);
      }
    }
    return r.from && i.classList.add("cm-completionListIncompleteTop"), r.to < e.length && i.classList.add("cm-completionListIncompleteBottom"), i;
  }
  destroyInfo() {
    this.info && (this.infoDestroy && this.infoDestroy(), this.info.remove(), this.info = null);
  }
  destroy() {
    this.destroyInfo();
  }
}
function nue(t, e) {
  return (n) => new tue(n, t, e);
}
function rue(t, e) {
  let n = t.getBoundingClientRect(), r = e.getBoundingClientRect();
  r.top < n.top ? t.scrollTop -= n.top - r.top : r.bottom > n.bottom && (t.scrollTop += r.bottom - n.bottom);
}
function Zp(t) {
  return (t.boost || 0) * 100 + (t.apply ? 10 : 0) + (t.info ? 5 : 0) + (t.type ? 1 : 0);
}
function iue(t, e) {
  let n = [], r = null, i = (a) => {
    n.push(a);
    let { section: c } = a.completion;
    if (c) {
      r || (r = []);
      let u = typeof c == "string" ? c : c.name;
      r.some((h) => h.name == u) || r.push(typeof c == "string" ? { name: u } : c);
    }
  };
  for (let a of t)
    if (a.hasResult()) {
      let c = a.result.getMatch;
      if (a.result.filter === !1)
        for (let u of a.result.options)
          i(new jp(u, a.source, c ? c(u) : [], 1e9 - n.length));
      else {
        let u = new Xce(e.sliceDoc(a.from, a.to));
        for (let h of a.result.options)
          if (u.match(h.label)) {
            let f = h.displayLabel ? c ? c(h, u.matched) : [] : u.matched;
            i(new jp(h, a.source, f, u.score + (h.boost || 0)));
          }
      }
    }
  if (r) {
    let a = /* @__PURE__ */ Object.create(null), c = 0, u = (h, f) => {
      var d, p;
      return ((d = h.rank) !== null && d !== void 0 ? d : 1e9) - ((p = f.rank) !== null && p !== void 0 ? p : 1e9) || (h.name < f.name ? -1 : 1);
    };
    for (let h of r.sort(u))
      c -= 1e5, a[h.name] = c;
    for (let h of n) {
      let { section: f } = h.completion;
      f && (h.score += a[typeof f == "string" ? f : f.name]);
    }
  }
  let o = [], s = null, l = e.facet(rt).compareCompletions;
  for (let a of n.sort((c, u) => u.score - c.score || l(c.completion, u.completion))) {
    let c = a.completion;
    !s || s.label != c.label || s.detail != c.detail || s.type != null && c.type != null && s.type != c.type || s.apply != c.apply || s.boost != c.boost ? o.push(a) : Zp(a.completion) > Zp(s) && (o[o.length - 1] = a), s = a.completion;
  }
  return o;
}
class Or {
  constructor(e, n, r, i, o, s) {
    this.options = e, this.attrs = n, this.tooltip = r, this.timestamp = i, this.selected = o, this.disabled = s;
  }
  setSelected(e, n) {
    return e == this.selected || e >= this.options.length ? this : new Or(this.options, Jp(n, e), this.tooltip, this.timestamp, e, this.disabled);
  }
  static build(e, n, r, i, o) {
    let s = iue(e, n);
    if (!s.length)
      return i && e.some((a) => a.state == 1) ? new Or(i.options, i.attrs, i.tooltip, i.timestamp, i.selected, !0) : null;
    let l = n.facet(rt).selectOnOpen ? 0 : -1;
    if (i && i.selected != l && i.selected != -1) {
      let a = i.options[i.selected].completion;
      for (let c = 0; c < s.length; c++)
        if (s[c].completion == a) {
          l = c;
          break;
        }
    }
    return new Or(s, Jp(r, l), {
      pos: e.reduce((a, c) => c.hasResult() ? Math.min(a, c.from) : a, 1e8),
      create: nue(st, Yb),
      above: o.aboveCursor
    }, i ? i.timestamp : Date.now(), l, !1);
  }
  map(e) {
    return new Or(this.options, this.attrs, Object.assign(Object.assign({}, this.tooltip), { pos: e.mapPos(this.tooltip.pos) }), this.timestamp, this.selected, this.disabled);
  }
}
class Ys {
  constructor(e, n, r) {
    this.active = e, this.id = n, this.open = r;
  }
  static start() {
    return new Ys(lue, "cm-ac-" + Math.floor(Math.random() * 2e6).toString(36), null);
  }
  update(e) {
    let { state: n } = e, r = n.facet(rt), o = (r.override || n.languageDataAt("autocomplete", Tn(n)).map(Jce)).map((l) => (this.active.find((c) => c.source == l) || new Qe(l, this.active.some((c) => c.state != 0) ? 1 : 0)).update(e, r));
    o.length == this.active.length && o.every((l, a) => l == this.active[a]) && (o = this.active);
    let s = this.open;
    s && e.docChanged && (s = s.map(e.changes)), e.selection || o.some((l) => l.hasResult() && e.changes.touchesRange(l.from, l.to)) || !oue(o, this.active) ? s = Or.build(o, n, this.id, s, r) : s && s.disabled && !o.some((l) => l.state == 1) && (s = null), !s && o.every((l) => l.state != 1) && o.some((l) => l.hasResult()) && (o = o.map((l) => l.hasResult() ? new Qe(l.source, 0) : l));
    for (let l of e.effects)
      l.is(Kb) && (s = s && s.setSelected(l.value, this.id));
    return o == this.active && s == this.open ? this : new Ys(o, this.id, s);
  }
  get tooltip() {
    return this.open ? this.open.tooltip : null;
  }
  get attrs() {
    return this.open ? this.open.attrs : sue;
  }
}
function oue(t, e) {
  if (t == e)
    return !0;
  for (let n = 0, r = 0; ; ) {
    for (; n < t.length && !t[n].hasResult; )
      n++;
    for (; r < e.length && !e[r].hasResult; )
      r++;
    let i = n == t.length, o = r == e.length;
    if (i || o)
      return i == o;
    if (t[n++].result != e[r++].result)
      return !1;
  }
}
const sue = {
  "aria-autocomplete": "list"
};
function Jp(t, e) {
  let n = {
    "aria-autocomplete": "list",
    "aria-haspopup": "listbox",
    "aria-controls": t
  };
  return e > -1 && (n["aria-activedescendant"] = t + "-" + e), n;
}
const lue = [];
function ou(t) {
  return t.isUserEvent("input.type") ? "input" : t.isUserEvent("delete.backward") ? "delete" : null;
}
class Qe {
  constructor(e, n, r = -1) {
    this.source = e, this.state = n, this.explicitPos = r;
  }
  hasResult() {
    return !1;
  }
  update(e, n) {
    let r = ou(e), i = this;
    r ? i = i.handleUserEvent(e, r, n) : e.docChanged ? i = i.handleChange(e) : e.selection && i.state != 0 && (i = new Qe(i.source, 0));
    for (let o of e.effects)
      if (o.is(ch))
        i = new Qe(i.source, 1, o.value ? Tn(e.state) : -1);
      else if (o.is(to))
        i = new Qe(i.source, 0);
      else if (o.is(Gb))
        for (let s of o.value)
          s.source == i.source && (i = s);
    return i;
  }
  handleUserEvent(e, n, r) {
    return n == "delete" || !r.activateOnTyping ? this.map(e.changes) : new Qe(this.source, 1);
  }
  handleChange(e) {
    return e.changes.touchesRange(Tn(e.startState)) ? new Qe(this.source, 0) : this.map(e.changes);
  }
  map(e) {
    return e.empty || this.explicitPos < 0 ? this : new Qe(this.source, this.state, e.mapPos(this.explicitPos));
  }
}
class Fr extends Qe {
  constructor(e, n, r, i, o) {
    super(e, 2, n), this.result = r, this.from = i, this.to = o;
  }
  hasResult() {
    return !0;
  }
  handleUserEvent(e, n, r) {
    var i;
    let o = e.changes.mapPos(this.from), s = e.changes.mapPos(this.to, 1), l = Tn(e.state);
    if ((this.explicitPos < 0 ? l <= o : l < this.from) || l > s || n == "delete" && Tn(e.startState) == this.from)
      return new Qe(this.source, n == "input" && r.activateOnTyping ? 1 : 0);
    let a = this.explicitPos < 0 ? -1 : e.changes.mapPos(this.explicitPos), c;
    return aue(this.result.validFor, e.state, o, s) ? new Fr(this.source, a, this.result, o, s) : this.result.update && (c = this.result.update(this.result, o, s, new Wb(e.state, l, a >= 0))) ? new Fr(this.source, a, c, c.from, (i = c.to) !== null && i !== void 0 ? i : Tn(e.state)) : new Qe(this.source, 1, a);
  }
  handleChange(e) {
    return e.changes.touchesRange(this.from, this.to) ? new Qe(this.source, 0) : this.map(e.changes);
  }
  map(e) {
    return e.empty ? this : new Fr(this.source, this.explicitPos < 0 ? -1 : e.mapPos(this.explicitPos), this.result, e.mapPos(this.from), e.mapPos(this.to, 1));
  }
}
function aue(t, e, n, r) {
  if (!t)
    return !1;
  let i = e.sliceDoc(n, r);
  return typeof t == "function" ? t(i, n, r, e) : jb(t, !0).test(i);
}
const Gb = /* @__PURE__ */ j.define({
  map(t, e) {
    return t.map((n) => n.map(e));
  }
}), Kb = /* @__PURE__ */ j.define(), st = /* @__PURE__ */ Be.define({
  create() {
    return Ys.start();
  },
  update(t, e) {
    return t.update(e);
  },
  provide: (t) => [
    Gu.from(t, (e) => e.tooltip),
    I.contentAttributes.from(t, (e) => e.attrs)
  ]
});
function Yb(t, e) {
  const n = e.completion.apply || e.completion.label;
  let r = t.state.field(st).active.find((i) => i.source == e.source);
  return r instanceof Fr ? (typeof n == "string" ? t.dispatch(Object.assign(Object.assign({}, Zce(t.state, n, r.from, r.to)), { annotations: Yce.of(e.completion) })) : n(t, e.completion, r.from, r.to), !0) : !1;
}
function Wo(t, e = "option") {
  return (n) => {
    let r = n.state.field(st, !1);
    if (!r || !r.open || r.open.disabled || Date.now() - r.open.timestamp < n.state.facet(rt).interactionDelay)
      return !1;
    let i = 1, o;
    e == "page" && (o = Ny(n, r.open.tooltip)) && (i = Math.max(2, Math.floor(o.dom.offsetHeight / o.dom.querySelector("li").offsetHeight) - 1));
    let { length: s } = r.open.options, l = r.open.selected > -1 ? r.open.selected + i * (t ? 1 : -1) : t ? 0 : s - 1;
    return l < 0 ? l = e == "page" ? 0 : s - 1 : l >= s && (l = e == "page" ? s - 1 : 0), n.dispatch({ effects: Kb.of(l) }), !0;
  };
}
const cue = (t) => {
  let e = t.state.field(st, !1);
  return t.state.readOnly || !e || !e.open || e.open.selected < 0 || e.open.disabled || Date.now() - e.open.timestamp < t.state.facet(rt).interactionDelay ? !1 : Yb(t, e.open.options[e.open.selected]);
}, uue = (t) => t.state.field(st, !1) ? (t.dispatch({ effects: ch.of(!0) }), !0) : !1, hue = (t) => {
  let e = t.state.field(st, !1);
  return !e || !e.active.some((n) => n.state != 0) ? !1 : (t.dispatch({ effects: to.of(null) }), !0);
};
class fue {
  constructor(e, n) {
    this.active = e, this.context = n, this.time = Date.now(), this.updates = [], this.done = void 0;
  }
}
const Xp = 50, due = 50, pue = 1e3, mue = /* @__PURE__ */ Ee.fromClass(class {
  constructor(t) {
    this.view = t, this.debounceUpdate = -1, this.running = [], this.debounceAccept = -1, this.composing = 0;
    for (let e of t.state.field(st).active)
      e.state == 1 && this.startQuery(e);
  }
  update(t) {
    let e = t.state.field(st);
    if (!t.selectionSet && !t.docChanged && t.startState.field(st) == e)
      return;
    let n = t.transactions.some((r) => (r.selection || r.docChanged) && !ou(r));
    for (let r = 0; r < this.running.length; r++) {
      let i = this.running[r];
      if (n || i.updates.length + t.transactions.length > due && Date.now() - i.time > pue) {
        for (let o of i.context.abortListeners)
          try {
            o();
          } catch (s) {
            pt(this.view.state, s);
          }
        i.context.abortListeners = null, this.running.splice(r--, 1);
      } else
        i.updates.push(...t.transactions);
    }
    if (this.debounceUpdate > -1 && clearTimeout(this.debounceUpdate), this.debounceUpdate = e.active.some((r) => r.state == 1 && !this.running.some((i) => i.active.source == r.source)) ? setTimeout(() => this.startUpdate(), Xp) : -1, this.composing != 0)
      for (let r of t.transactions)
        ou(r) == "input" ? this.composing = 2 : this.composing == 2 && r.selection && (this.composing = 3);
  }
  startUpdate() {
    this.debounceUpdate = -1;
    let { state: t } = this.view, e = t.field(st);
    for (let n of e.active)
      n.state == 1 && !this.running.some((r) => r.active.source == n.source) && this.startQuery(n);
  }
  startQuery(t) {
    let { state: e } = this.view, n = Tn(e), r = new Wb(e, n, t.explicitPos == n), i = new fue(t, r);
    this.running.push(i), Promise.resolve(t.source(r)).then((o) => {
      i.context.aborted || (i.done = o || null, this.scheduleAccept());
    }, (o) => {
      this.view.dispatch({ effects: to.of(null) }), pt(this.view.state, o);
    });
  }
  scheduleAccept() {
    this.running.every((t) => t.done !== void 0) ? this.accept() : this.debounceAccept < 0 && (this.debounceAccept = setTimeout(() => this.accept(), Xp));
  }
  accept() {
    var t;
    this.debounceAccept > -1 && clearTimeout(this.debounceAccept), this.debounceAccept = -1;
    let e = [], n = this.view.state.facet(rt);
    for (let r = 0; r < this.running.length; r++) {
      let i = this.running[r];
      if (i.done === void 0)
        continue;
      if (this.running.splice(r--, 1), i.done) {
        let s = new Fr(i.active.source, i.active.explicitPos, i.done, i.done.from, (t = i.done.to) !== null && t !== void 0 ? t : Tn(i.updates.length ? i.updates[0].startState : this.view.state));
        for (let l of i.updates)
          s = s.update(l, n);
        if (s.hasResult()) {
          e.push(s);
          continue;
        }
      }
      let o = this.view.state.field(st).active.find((s) => s.source == i.active.source);
      if (o && o.state == 1)
        if (i.done == null) {
          let s = new Qe(i.active.source, 0);
          for (let l of i.updates)
            s = s.update(l, n);
          s.state != 1 && e.push(s);
        } else
          this.startQuery(o);
    }
    e.length && this.view.dispatch({ effects: Gb.of(e) });
  }
}, {
  eventHandlers: {
    blur(t) {
      let e = this.view.state.field(st, !1);
      if (e && e.tooltip && this.view.state.facet(rt).closeOnBlur) {
        let n = e.open && Ny(this.view, e.open.tooltip);
        (!n || !n.dom.contains(t.relatedTarget)) && this.view.dispatch({ effects: to.of(null) });
      }
    },
    compositionstart() {
      this.composing = 1;
    },
    compositionend() {
      this.composing == 3 && setTimeout(() => this.view.dispatch({ effects: ch.of(!1) }), 20), this.composing = 0;
    }
  }
}), gue = /* @__PURE__ */ I.baseTheme({
  ".cm-tooltip.cm-tooltip-autocomplete": {
    "& > ul": {
      fontFamily: "monospace",
      whiteSpace: "nowrap",
      overflow: "hidden auto",
      maxWidth_fallback: "700px",
      maxWidth: "min(700px, 95vw)",
      minWidth: "250px",
      maxHeight: "10em",
      height: "100%",
      listStyle: "none",
      margin: 0,
      padding: 0,
      "& > li, & > completion-section": {
        padding: "1px 3px",
        lineHeight: 1.2
      },
      "& > li": {
        overflowX: "hidden",
        textOverflow: "ellipsis",
        cursor: "pointer"
      },
      "& > completion-section": {
        display: "list-item",
        borderBottom: "1px solid silver",
        paddingLeft: "0.5em",
        opacity: 0.7
      }
    }
  },
  "&light .cm-tooltip-autocomplete ul li[aria-selected]": {
    background: "#17c",
    color: "white"
  },
  "&light .cm-tooltip-autocomplete-disabled ul li[aria-selected]": {
    background: "#777"
  },
  "&dark .cm-tooltip-autocomplete ul li[aria-selected]": {
    background: "#347",
    color: "white"
  },
  "&dark .cm-tooltip-autocomplete-disabled ul li[aria-selected]": {
    background: "#444"
  },
  ".cm-completionListIncompleteTop:before, .cm-completionListIncompleteBottom:after": {
    content: '"\xB7\xB7\xB7"',
    opacity: 0.5,
    display: "block",
    textAlign: "center"
  },
  ".cm-tooltip.cm-completionInfo": {
    position: "absolute",
    padding: "3px 9px",
    width: "max-content",
    maxWidth: `${400}px`,
    boxSizing: "border-box"
  },
  ".cm-completionInfo.cm-completionInfo-left": { right: "100%" },
  ".cm-completionInfo.cm-completionInfo-right": { left: "100%" },
  ".cm-completionInfo.cm-completionInfo-left-narrow": { right: `${30}px` },
  ".cm-completionInfo.cm-completionInfo-right-narrow": { left: `${30}px` },
  "&light .cm-snippetField": { backgroundColor: "#00000022" },
  "&dark .cm-snippetField": { backgroundColor: "#ffffff22" },
  ".cm-snippetFieldPosition": {
    verticalAlign: "text-top",
    width: 0,
    height: "1.15em",
    display: "inline-block",
    margin: "0 -0.7px -.7em",
    borderLeft: "1.4px dotted #888"
  },
  ".cm-completionMatchedText": {
    textDecoration: "underline"
  },
  ".cm-completionDetail": {
    marginLeft: "0.5em",
    fontStyle: "italic"
  },
  ".cm-completionIcon": {
    fontSize: "90%",
    width: ".8em",
    display: "inline-block",
    textAlign: "center",
    paddingRight: ".6em",
    opacity: "0.6",
    boxSizing: "content-box"
  },
  ".cm-completionIcon-function, .cm-completionIcon-method": {
    "&:after": { content: "'\u0192'" }
  },
  ".cm-completionIcon-class": {
    "&:after": { content: "'\u25CB'" }
  },
  ".cm-completionIcon-interface": {
    "&:after": { content: "'\u25CC'" }
  },
  ".cm-completionIcon-variable": {
    "&:after": { content: "'\u{1D465}'" }
  },
  ".cm-completionIcon-constant": {
    "&:after": { content: "'\u{1D436}'" }
  },
  ".cm-completionIcon-type": {
    "&:after": { content: "'\u{1D461}'" }
  },
  ".cm-completionIcon-enum": {
    "&:after": { content: "'\u222A'" }
  },
  ".cm-completionIcon-property": {
    "&:after": { content: "'\u25A1'" }
  },
  ".cm-completionIcon-keyword": {
    "&:after": { content: "'\u{1F511}\uFE0E'" }
  },
  ".cm-completionIcon-namespace": {
    "&:after": { content: "'\u25A2'" }
  },
  ".cm-completionIcon-text": {
    "&:after": { content: "'abc'", fontSize: "50%", verticalAlign: "middle" }
  }
}), no = {
  brackets: ["(", "[", "{", "'", '"'],
  before: ")]}:;>",
  stringPrefixes: []
}, Qn = /* @__PURE__ */ j.define({
  map(t, e) {
    let n = e.mapPos(t, -1, Ke.TrackAfter);
    return n == null ? void 0 : n;
  }
}), uh = /* @__PURE__ */ new class extends ar {
}();
uh.startSide = 1;
uh.endSide = -1;
const Zb = /* @__PURE__ */ Be.define({
  create() {
    return te.empty;
  },
  update(t, e) {
    if (e.selection) {
      let n = e.state.doc.lineAt(e.selection.main.head).from, r = e.startState.doc.lineAt(e.startState.selection.main.head).from;
      n != e.changes.mapPos(r, -1) && (t = te.empty);
    }
    t = t.map(e.changes);
    for (let n of e.effects)
      n.is(Qn) && (t = t.update({ add: [uh.range(n.value, n.value + 1)] }));
    return t;
  }
});
function yue() {
  return [vue, Zb];
}
const qa = "()[]{}<>";
function Jb(t) {
  for (let e = 0; e < qa.length; e += 2)
    if (qa.charCodeAt(e) == t)
      return qa.charAt(e + 1);
  return Bu(t < 128 ? t : t + 1);
}
function Xb(t, e) {
  return t.languageDataAt("closeBrackets", e)[0] || no;
}
const bue = typeof navigator == "object" && /* @__PURE__ */ /Android\b/.test(navigator.userAgent), vue = /* @__PURE__ */ I.inputHandler.of((t, e, n, r) => {
  if ((bue ? t.composing : t.compositionStarted) || t.state.readOnly)
    return !1;
  let i = t.state.selection.main;
  if (r.length > 2 || r.length == 2 && ft(Le(r, 0)) == 1 || e != i.from || n != i.to)
    return !1;
  let o = kue(t.state, r);
  return o ? (t.dispatch(o), !0) : !1;
}), xue = ({ state: t, dispatch: e }) => {
  if (t.readOnly)
    return !1;
  let r = Xb(t, t.selection.main.head).brackets || no.brackets, i = null, o = t.changeByRange((s) => {
    if (s.empty) {
      let l = wue(t.doc, s.head);
      for (let a of r)
        if (a == l && Dl(t.doc, s.head) == Jb(Le(a, 0)))
          return {
            changes: { from: s.head - a.length, to: s.head + a.length },
            range: A.cursor(s.head - a.length)
          };
    }
    return { range: i = s };
  });
  return i || e(t.update(o, { scrollIntoView: !0, userEvent: "delete.backward" })), !i;
}, _ue = [
  { key: "Backspace", run: xue }
];
function kue(t, e) {
  let n = Xb(t, t.selection.main.head), r = n.brackets || no.brackets;
  for (let i of r) {
    let o = Jb(Le(i, 0));
    if (e == i)
      return o == i ? Sue(t, i, r.indexOf(i + i + i) > -1, n) : Cue(t, i, o, n.before || no.before);
    if (e == o && Qb(t, t.selection.main.from))
      return Aue(t, i, o);
  }
  return null;
}
function Qb(t, e) {
  let n = !1;
  return t.field(Zb).between(0, t.doc.length, (r) => {
    r == e && (n = !0);
  }), n;
}
function Dl(t, e) {
  let n = t.sliceString(e, e + 2);
  return n.slice(0, ft(Le(n, 0)));
}
function wue(t, e) {
  let n = t.sliceString(e - 2, e);
  return ft(Le(n, 0)) == n.length ? n : n.slice(1);
}
function Cue(t, e, n, r) {
  let i = null, o = t.changeByRange((s) => {
    if (!s.empty)
      return {
        changes: [{ insert: e, from: s.from }, { insert: n, from: s.to }],
        effects: Qn.of(s.to + e.length),
        range: A.range(s.anchor + e.length, s.head + e.length)
      };
    let l = Dl(t.doc, s.head);
    return !l || /\s/.test(l) || r.indexOf(l) > -1 ? {
      changes: { insert: e + n, from: s.head },
      effects: Qn.of(s.head + e.length),
      range: A.cursor(s.head + e.length)
    } : { range: i = s };
  });
  return i ? null : t.update(o, {
    scrollIntoView: !0,
    userEvent: "input.type"
  });
}
function Aue(t, e, n) {
  let r = null, i = t.changeByRange((o) => o.empty && Dl(t.doc, o.head) == n ? {
    changes: { from: o.head, to: o.head + n.length, insert: n },
    range: A.cursor(o.head + n.length)
  } : r = { range: o });
  return r ? null : t.update(i, {
    scrollIntoView: !0,
    userEvent: "input.type"
  });
}
function Sue(t, e, n, r) {
  let i = r.stringPrefixes || no.stringPrefixes, o = null, s = t.changeByRange((l) => {
    if (!l.empty)
      return {
        changes: [{ insert: e, from: l.from }, { insert: e, from: l.to }],
        effects: Qn.of(l.to + e.length),
        range: A.range(l.anchor + e.length, l.head + e.length)
      };
    let a = l.head, c = Dl(t.doc, a), u;
    if (c == e) {
      if (Qp(t, a))
        return {
          changes: { insert: e + e, from: a },
          effects: Qn.of(a + e.length),
          range: A.cursor(a + e.length)
        };
      if (Qb(t, a)) {
        let f = n && t.sliceDoc(a, a + e.length * 3) == e + e + e ? e + e + e : e;
        return {
          changes: { from: a, to: a + f.length, insert: f },
          range: A.cursor(a + f.length)
        };
      }
    } else {
      if (n && t.sliceDoc(a - 2 * e.length, a) == e + e && (u = em(t, a - 2 * e.length, i)) > -1 && Qp(t, u))
        return {
          changes: { insert: e + e + e + e, from: a },
          effects: Qn.of(a + e.length),
          range: A.cursor(a + e.length)
        };
      if (t.charCategorizer(a)(c) != ge.Word && em(t, a, i) > -1 && !Eue(t, a, e, i))
        return {
          changes: { insert: e + e, from: a },
          effects: Qn.of(a + e.length),
          range: A.cursor(a + e.length)
        };
    }
    return { range: o = l };
  });
  return o ? null : t.update(s, {
    scrollIntoView: !0,
    userEvent: "input.type"
  });
}
function Qp(t, e) {
  let n = ze(t).resolveInner(e + 1);
  return n.parent && n.from == e;
}
function Eue(t, e, n, r) {
  let i = ze(t).resolveInner(e, -1), o = r.reduce((s, l) => Math.max(s, l.length), 0);
  for (let s = 0; s < 5; s++) {
    let l = t.sliceDoc(i.from, Math.min(i.to, i.from + n.length + o)), a = l.indexOf(n);
    if (!a || a > -1 && r.indexOf(l.slice(0, a)) > -1) {
      let u = i.firstChild;
      for (; u && u.from == i.from && u.to - u.from > n.length + a; ) {
        if (t.sliceDoc(u.to - n.length, u.to) == n)
          return !1;
        u = u.firstChild;
      }
      return !0;
    }
    let c = i.to == e && i.parent;
    if (!c)
      break;
    i = c;
  }
  return !1;
}
function em(t, e, n) {
  let r = t.charCategorizer(e);
  if (r(t.sliceDoc(e - 1, e)) != ge.Word)
    return e;
  for (let i of n) {
    let o = e - i.length;
    if (t.sliceDoc(o, e) == i && r(t.sliceDoc(o - 1, o)) != ge.Word)
      return o;
  }
  return -1;
}
function Tue(t = {}) {
  return [
    st,
    rt.of(t),
    mue,
    Due,
    gue
  ];
}
const e1 = [
  { key: "Ctrl-Space", run: uue },
  { key: "Escape", run: hue },
  { key: "ArrowDown", run: /* @__PURE__ */ Wo(!0) },
  { key: "ArrowUp", run: /* @__PURE__ */ Wo(!1) },
  { key: "PageDown", run: /* @__PURE__ */ Wo(!0, "page") },
  { key: "PageUp", run: /* @__PURE__ */ Wo(!1, "page") },
  { key: "Enter", run: cue }
], Due = /* @__PURE__ */ si.highest(/* @__PURE__ */ xl.computeN([rt], (t) => t.facet(rt).defaultKeymap ? [e1] : []));
class Mue {
  constructor(e, n, r) {
    this.from = e, this.to = n, this.diagnostic = r;
  }
}
class Yn {
  constructor(e, n, r) {
    this.diagnostics = e, this.panel = n, this.selected = r;
  }
  static init(e, n, r) {
    let i = e, o = r.facet(r1).markerFilter;
    o && (i = o(i));
    let s = V.set(i.map((l) => l.from == l.to || l.from == l.to - 1 && r.doc.lineAt(l.from).to == l.from ? V.widget({
      widget: new que(l),
      diagnostic: l
    }).range(l.from) : V.mark({
      attributes: { class: "cm-lintRange cm-lintRange-" + l.severity + (l.markClass ? " " + l.markClass : "") },
      diagnostic: l
    }).range(l.from, l.to)), !0);
    return new Yn(s, n, Xr(s));
  }
}
function Xr(t, e = null, n = 0) {
  let r = null;
  return t.between(n, 1e9, (i, o, { spec: s }) => {
    if (!(e && s.diagnostic != e))
      return r = new Mue(i, o, s.diagnostic), !1;
  }), r;
}
function Oue(t, e) {
  let n = t.startState.doc.lineAt(e.pos);
  return !!(t.effects.some((r) => r.is(t1)) || t.changes.touchesRange(n.from, n.to));
}
function Rue(t, e) {
  return t.field(at, !1) ? e : e.concat(j.appendConfig.of(zue));
}
const t1 = /* @__PURE__ */ j.define(), hh = /* @__PURE__ */ j.define(), n1 = /* @__PURE__ */ j.define(), at = /* @__PURE__ */ Be.define({
  create() {
    return new Yn(V.none, null, null);
  },
  update(t, e) {
    if (e.docChanged) {
      let n = t.diagnostics.map(e.changes), r = null;
      if (t.selected) {
        let i = e.changes.mapPos(t.selected.from, 1);
        r = Xr(n, t.selected.diagnostic, i) || Xr(n, null, i);
      }
      t = new Yn(n, t.panel, r);
    }
    for (let n of e.effects)
      n.is(t1) ? t = Yn.init(n.value, t.panel, e.state) : n.is(hh) ? t = new Yn(t.diagnostics, n.value ? Ml.open : null, t.selected) : n.is(n1) && (t = new Yn(t.diagnostics, t.panel, n.value));
    return t;
  },
  provide: (t) => [
    Xi.from(t, (e) => e.panel),
    I.decorations.from(t, (e) => e.diagnostics)
  ]
}), Lue = /* @__PURE__ */ V.mark({ class: "cm-lintRange cm-lintRange-active" });
function Iue(t, e, n) {
  let { diagnostics: r } = t.state.field(at), i = [], o = 2e8, s = 0;
  r.between(e - (n < 0 ? 1 : 0), e + (n > 0 ? 1 : 0), (a, c, { spec: u }) => {
    e >= a && e <= c && (a == c || (e > a || n > 0) && (e < c || n < 0)) && (i.push(u.diagnostic), o = Math.min(a, o), s = Math.max(c, s));
  });
  let l = t.state.facet(r1).tooltipFilter;
  return l && (i = l(i)), i.length ? {
    pos: o,
    end: s,
    above: t.state.doc.lineAt(o).to < s,
    create() {
      return { dom: Nue(t, i) };
    }
  } : null;
}
function Nue(t, e) {
  return ce("ul", { class: "cm-tooltip-lint" }, e.map((n) => o1(t, n, !1)));
}
const Pue = (t) => {
  let e = t.state.field(at, !1);
  (!e || !e.panel) && t.dispatch({ effects: Rue(t.state, [hh.of(!0)]) });
  let n = Ji(t, Ml.open);
  return n && n.dom.querySelector(".cm-panel-lint ul").focus(), !0;
}, tm = (t) => {
  let e = t.state.field(at, !1);
  return !e || !e.panel ? !1 : (t.dispatch({ effects: hh.of(!1) }), !0);
}, Bue = (t) => {
  let e = t.state.field(at, !1);
  if (!e)
    return !1;
  let n = t.state.selection.main, r = e.diagnostics.iter(n.to + 1);
  return !r.value && (r = e.diagnostics.iter(0), !r.value || r.from == n.from && r.to == n.to) ? !1 : (t.dispatch({ selection: { anchor: r.from, head: r.to }, scrollIntoView: !0 }), !0);
}, Fue = [
  { key: "Mod-Shift-m", run: Pue, preventDefault: !0 },
  { key: "F8", run: Bue }
], r1 = /* @__PURE__ */ N.define({
  combine(t) {
    return Object.assign({ sources: t.map((e) => e.source) }, Xt(t.map((e) => e.config), {
      delay: 750,
      markerFilter: null,
      tooltipFilter: null,
      needsRefresh: null
    }, {
      needsRefresh: (e, n) => e ? n ? (r) => e(r) || n(r) : e : n
    }));
  }
});
function i1(t) {
  let e = [];
  if (t)
    e:
      for (let { name: n } of t) {
        for (let r = 0; r < n.length; r++) {
          let i = n[r];
          if (/[a-zA-Z]/.test(i) && !e.some((o) => o.toLowerCase() == i.toLowerCase())) {
            e.push(i);
            continue e;
          }
        }
        e.push("");
      }
  return e;
}
function o1(t, e, n) {
  var r;
  let i = n ? i1(e.actions) : [];
  return ce("li", { class: "cm-diagnostic cm-diagnostic-" + e.severity }, ce("span", { class: "cm-diagnosticText" }, e.renderMessage ? e.renderMessage() : e.message), (r = e.actions) === null || r === void 0 ? void 0 : r.map((o, s) => {
    let l = !1, a = (f) => {
      if (f.preventDefault(), l)
        return;
      l = !0;
      let d = Xr(t.state.field(at).diagnostics, e);
      d && o.apply(t, d.from, d.to);
    }, { name: c } = o, u = i[s] ? c.indexOf(i[s]) : -1, h = u < 0 ? c : [
      c.slice(0, u),
      ce("u", c.slice(u, u + 1)),
      c.slice(u + 1)
    ];
    return ce("button", {
      type: "button",
      class: "cm-diagnosticAction",
      onclick: a,
      onmousedown: a,
      "aria-label": ` Action: ${c}${u < 0 ? "" : ` (access key "${i[s]})"`}.`
    }, h);
  }), e.source && ce("div", { class: "cm-diagnosticSource" }, e.source));
}
class que extends qn {
  constructor(e) {
    super(), this.diagnostic = e;
  }
  eq(e) {
    return e.diagnostic == this.diagnostic;
  }
  toDOM() {
    return ce("span", { class: "cm-lintPoint cm-lintPoint-" + this.diagnostic.severity });
  }
}
class nm {
  constructor(e, n) {
    this.diagnostic = n, this.id = "item_" + Math.floor(Math.random() * 4294967295).toString(16), this.dom = o1(e, n, !0), this.dom.id = this.id, this.dom.setAttribute("role", "option");
  }
}
class Ml {
  constructor(e) {
    this.view = e, this.items = [];
    let n = (i) => {
      if (i.keyCode == 27)
        tm(this.view), this.view.focus();
      else if (i.keyCode == 38 || i.keyCode == 33)
        this.moveSelection((this.selectedIndex - 1 + this.items.length) % this.items.length);
      else if (i.keyCode == 40 || i.keyCode == 34)
        this.moveSelection((this.selectedIndex + 1) % this.items.length);
      else if (i.keyCode == 36)
        this.moveSelection(0);
      else if (i.keyCode == 35)
        this.moveSelection(this.items.length - 1);
      else if (i.keyCode == 13)
        this.view.focus();
      else if (i.keyCode >= 65 && i.keyCode <= 90 && this.selectedIndex >= 0) {
        let { diagnostic: o } = this.items[this.selectedIndex], s = i1(o.actions);
        for (let l = 0; l < s.length; l++)
          if (s[l].toUpperCase().charCodeAt(0) == i.keyCode) {
            let a = Xr(this.view.state.field(at).diagnostics, o);
            a && o.actions[l].apply(e, a.from, a.to);
          }
      } else
        return;
      i.preventDefault();
    }, r = (i) => {
      for (let o = 0; o < this.items.length; o++)
        this.items[o].dom.contains(i.target) && this.moveSelection(o);
    };
    this.list = ce("ul", {
      tabIndex: 0,
      role: "listbox",
      "aria-label": this.view.state.phrase("Diagnostics"),
      onkeydown: n,
      onclick: r
    }), this.dom = ce("div", { class: "cm-panel-lint" }, this.list, ce("button", {
      type: "button",
      name: "close",
      "aria-label": this.view.state.phrase("close"),
      onclick: () => tm(this.view)
    }, "\xD7")), this.update();
  }
  get selectedIndex() {
    let e = this.view.state.field(at).selected;
    if (!e)
      return -1;
    for (let n = 0; n < this.items.length; n++)
      if (this.items[n].diagnostic == e.diagnostic)
        return n;
    return -1;
  }
  update() {
    let { diagnostics: e, selected: n } = this.view.state.field(at), r = 0, i = !1, o = null;
    for (e.between(0, this.view.state.doc.length, (s, l, { spec: a }) => {
      let c = -1, u;
      for (let h = r; h < this.items.length; h++)
        if (this.items[h].diagnostic == a.diagnostic) {
          c = h;
          break;
        }
      c < 0 ? (u = new nm(this.view, a.diagnostic), this.items.splice(r, 0, u), i = !0) : (u = this.items[c], c > r && (this.items.splice(r, c - r), i = !0)), n && u.diagnostic == n.diagnostic ? u.dom.hasAttribute("aria-selected") || (u.dom.setAttribute("aria-selected", "true"), o = u) : u.dom.hasAttribute("aria-selected") && u.dom.removeAttribute("aria-selected"), r++;
    }); r < this.items.length && !(this.items.length == 1 && this.items[0].diagnostic.from < 0); )
      i = !0, this.items.pop();
    this.items.length == 0 && (this.items.push(new nm(this.view, {
      from: -1,
      to: -1,
      severity: "info",
      message: this.view.state.phrase("No diagnostics")
    })), i = !0), o ? (this.list.setAttribute("aria-activedescendant", o.id), this.view.requestMeasure({
      key: this,
      read: () => ({ sel: o.dom.getBoundingClientRect(), panel: this.list.getBoundingClientRect() }),
      write: ({ sel: s, panel: l }) => {
        s.top < l.top ? this.list.scrollTop -= l.top - s.top : s.bottom > l.bottom && (this.list.scrollTop += s.bottom - l.bottom);
      }
    })) : this.selectedIndex < 0 && this.list.removeAttribute("aria-activedescendant"), i && this.sync();
  }
  sync() {
    let e = this.list.firstChild;
    function n() {
      let r = e;
      e = r.nextSibling, r.remove();
    }
    for (let r of this.items)
      if (r.dom.parentNode == this.list) {
        for (; e != r.dom; )
          n();
        e = r.dom.nextSibling;
      } else
        this.list.insertBefore(r.dom, e);
    for (; e; )
      n();
  }
  moveSelection(e) {
    if (this.selectedIndex < 0)
      return;
    let n = this.view.state.field(at), r = Xr(n.diagnostics, this.items[e].diagnostic);
    !r || this.view.dispatch({
      selection: { anchor: r.from, head: r.to },
      scrollIntoView: !0,
      effects: n1.of(r)
    });
  }
  static open(e) {
    return new Ml(e);
  }
}
function $ue(t, e = 'viewBox="0 0 40 40"') {
  return `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${e}>${encodeURIComponent(t)}</svg>')`;
}
function jo(t) {
  return $ue(`<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${t}" fill="none" stroke-width=".7"/>`, 'width="6" height="3"');
}
const Hue = /* @__PURE__ */ I.baseTheme({
  ".cm-diagnostic": {
    padding: "3px 6px 3px 8px",
    marginLeft: "-1px",
    display: "block",
    whiteSpace: "pre-wrap"
  },
  ".cm-diagnostic-error": { borderLeft: "5px solid #d11" },
  ".cm-diagnostic-warning": { borderLeft: "5px solid orange" },
  ".cm-diagnostic-info": { borderLeft: "5px solid #999" },
  ".cm-diagnostic-hint": { borderLeft: "5px solid #66d" },
  ".cm-diagnosticAction": {
    font: "inherit",
    border: "none",
    padding: "2px 4px",
    backgroundColor: "#444",
    color: "white",
    borderRadius: "3px",
    marginLeft: "8px",
    cursor: "pointer"
  },
  ".cm-diagnosticSource": {
    fontSize: "70%",
    opacity: 0.7
  },
  ".cm-lintRange": {
    backgroundPosition: "left bottom",
    backgroundRepeat: "repeat-x",
    paddingBottom: "0.7px"
  },
  ".cm-lintRange-error": { backgroundImage: /* @__PURE__ */ jo("#d11") },
  ".cm-lintRange-warning": { backgroundImage: /* @__PURE__ */ jo("orange") },
  ".cm-lintRange-info": { backgroundImage: /* @__PURE__ */ jo("#999") },
  ".cm-lintRange-hint": { backgroundImage: /* @__PURE__ */ jo("#66d") },
  ".cm-lintRange-active": { backgroundColor: "#ffdd9980" },
  ".cm-tooltip-lint": {
    padding: 0,
    margin: 0
  },
  ".cm-lintPoint": {
    position: "relative",
    "&:after": {
      content: '""',
      position: "absolute",
      bottom: 0,
      left: "-2px",
      borderLeft: "3px solid transparent",
      borderRight: "3px solid transparent",
      borderBottom: "4px solid #d11"
    }
  },
  ".cm-lintPoint-warning": {
    "&:after": { borderBottomColor: "orange" }
  },
  ".cm-lintPoint-info": {
    "&:after": { borderBottomColor: "#999" }
  },
  ".cm-lintPoint-hint": {
    "&:after": { borderBottomColor: "#66d" }
  },
  ".cm-panel.cm-panel-lint": {
    position: "relative",
    "& ul": {
      maxHeight: "100px",
      overflowY: "auto",
      "& [aria-selected]": {
        backgroundColor: "#ddd",
        "& u": { textDecoration: "underline" }
      },
      "&:focus [aria-selected]": {
        background_fallback: "#bdf",
        backgroundColor: "Highlight",
        color_fallback: "white",
        color: "HighlightText"
      },
      "& u": { textDecoration: "none" },
      padding: 0,
      margin: 0
    },
    "& [name=close]": {
      position: "absolute",
      top: "0",
      right: "2px",
      background: "inherit",
      border: "none",
      font: "inherit",
      padding: 0,
      margin: 0
    }
  }
}), zue = [
  at,
  /* @__PURE__ */ I.decorations.compute([at], (t) => {
    let { selected: e, panel: n } = t.field(at);
    return !e || !n || e.from == e.to ? V.none : V.set([
      Lue.range(e.from, e.to)
    ]);
  }),
  /* @__PURE__ */ Vse(Iue, { hideOn: Oue }),
  Hue
], Vue = /* @__PURE__ */ (() => [
  Xse(),
  tle(),
  _se(),
  xae(),
  Wle(),
  use(),
  mse(),
  Y.allowMultipleSelections.of(!0),
  Ole(),
  Gle(Zle, { fallback: !0 }),
  rae(),
  yue(),
  Tue(),
  Lse(),
  Pse(),
  Ese(),
  Cce(),
  xl.of([
    ..._ue,
    ...bce,
    ...Vce,
    ...Dae,
    ...Hle,
    ...e1,
    ...Fue
  ])
])(), Uue = ve.div.withConfig({
  displayName: "CodeMirror__CodeEditor",
  componentId: "sc-1q0hyc9-0"
})(["border-radius:var(--border-radius);background:var(--gray-200);font-family:monospace;font-size:0.94em;resize:none;border:0;padding:20px;min-height:500px;display:", ";flex:1;border:1px solid var(--gray-400);box-shadow:inset 0px 0px 4px rgba(0,0,0,0.15);@media print{display:none;}"], (t) => t.$shown ? "block" : "none"), Wue = ve.textarea.withConfig({
  displayName: "CodeMirror__HiddenTextArea",
  componentId: "sc-1q0hyc9-1"
})(["display:none;"]), jue = (t) => {
  const e = Xs();
  return Hr(() => {
    e.current = t;
  }, [t]), e.current;
}, Gue = ({
  value: t,
  setText: e,
  id: n,
  name: r,
  className: i,
  shown: o,
  templateState: s
}) => {
  const l = Xs(null), a = jue(s), c = (u, h) => document.getElementById(h).value = u;
  return Hr(() => {
    const u = Y.create({
      doc: t,
      extensions: [Vue, xl.of([vce]), I.lineWrapping, I.updateListener.of((f) => {
        f.docChanged && e(h.state.doc.toString());
      })]
    }), h = new I({
      state: u,
      parent: document.getElementById("editor")
    });
    return l.current = h, () => {
      h.destroy();
    };
  }, []), Hr(() => {
    s && (!a || a.timestamp !== s.timestamp) && (l.current.dispatch({
      changes: {
        from: 0,
        to: l.current.state.doc.length,
        insert: s.template
      }
    }), e(s.template), c(s.template, n));
  }, [s]), ht`
      <${Uue} $shown="${o}" id="editor" class=${i}><//>
      <${Wue} value=${t} name=${r} id=${n}><//>
  `;
};
console.log("CodeMirror component loaded");
const Kue = ve.section`
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  width: 450px;
  padding: 20px;
  right: 50%;
  transform: translate(50%, 0);
  top: 100%;
  position: absolute;
  background-color: var(--white);
  border: 1px solid var(--gray-600);
  border-radius: var(--border-radius);
`, Yue = ve.h3`
  font-family: 'Lato', sans-serif;
  color: var(--gray-900);
`, Zue = ve.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`, rm = ve(gl)`
  padding: 0 10px;
  margin-top: 0px;

  &:hover {
    background-color: ${(t) => t.$negative ? "var(--red-500)" : "var(--green-400)"} !important;
    border: 1px solid ${(t) => t.$negative ? "var(--red-500)" : "var(--green-400)"} !important;
  }
`, Jue = ({
  changeDocumentTemplate: t,
  selectedTemplate: e,
  closeModal: n
}) => ht`
    <${Kue}>
        <${Yue}>Are you sure you want to change the current template?<//>
        <${Zue}>
            <${rm} type="button" onClick=${() => t(e)}>✓ Yes<//>
            <${rm} $negative type="button" onClick=${n}>x Cancel<//>
        <//>
    <//>
  `;
console.log("Modal functional component loaded");
const Xue = ve.div`
  position: absolute;
  ${(t) => t.$orientation == "left" && Ti(["left:0;"])}
  transform: ${(t) => t.$orientation == "left" ? "translateX(-81%)" : "translate(-50%, 130%)"};
`, Que = ve.div`
  position: relative; 
  background: var(--green-400);
  color: #ffffff;
  font-family: 'Lato', sans-serif;
  text-align: left;
  padding: 10px 20px 10px 20px;
  border-radius: var(--border-radius);
  border: solid var(--green-400);
  border-width: 1px 1px 1px 1px;
  top: calc(100% + 11px);
  ${(t) => t.$orientation == "bottom" && Ti(["left:50%;"])}
  transform: ${(t) => t.$orientation == "left" ? "translateX(-20%)" : "translateX(-25%)"};

  &::before {
    content: '';
    position: absolute;
    ${(t) => t.$orientation == "left" ? Ti(["right:0;top:50%;border-top:15px solid transparent;border-bottom:15px solid transparent;border-left:30px solid var(--green-400);"]) : Ti(["left:50%;border-left:15px solid transparent;border-right:15px solid transparent;border-bottom:30px solid var(--green-400);"])}
    transform: ${(t) => t.$orientation == "left" ? "translate(50%, -50%)" : "translate(-50%, -100%)"};
  }
`, im = ({
  tooltipOrientation: t,
  errorMessage: e
}) => ht`
    <${Xue} $orientation=${t}>
      <${Que} $orientation=${t}>
          ${e}
      <//>
    <//>`;
console.log("Tooltip component loaded");
const ehe = ve.div`
  display: none;
  margin-left: 5px;
  font-family: 'Lato', sans-serif;
  text-transform: uppercase;
  font-size: 12px;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  border: 1px solid var(--gray-900);
  border-radius: var(--border-radius);
  color: var(--white);
  background-color: var(--gray-800);
  z-index: 20;
  width: 100%;
`, om = ve(gl)`
  width: 100%!important;
  color: var(--white);
  border: 1px solid var(--gray-900)!important;
  padding: 0 10px 0 10px!important;
  margin-top: 0px;
`, the = ve.div`
  position: relative;
  display: inline-block;
  width: min-content;

  &:hover {
    div {
      display: inline-flex;
      flex-direction: column;
    }
  }
`, nhe = ve.div`
  display: flex;
  flex-direction: row-reverse;
  border: 1px solid var(--gray-900);
  width: inherit;
`, rhe = ve.div`
  position: absolute;
  display: flex;
  padding-top: 5px;
`, ihe = ({
  setDocumentTemplate: t,
  templatelist: e
}) => {
  const [n, r] = ut(""), [i, o] = ut({}), [s, l] = ut(null), [a, c] = ut(!1), [u, h] = ut(!1), [f, d] = ut({
    fetchError: !1,
    errorText: "",
    templateError: []
  }), p = (k, x) => {
    throw d({
      ...f,
      fetchError: !0,
      errorText: x
    }), new Error(x);
  }, m = (k) => {
    r(i[k].templatetext), t(i[k].templatetext), c(!1);
  }, g = async (k) => {
    try {
      const x = await fetch(k);
      if (!x.ok)
        throw new Error(`HTTP error! Status: ${x.status}`);
      return await x.json();
    } catch (x) {
      p(x, "Unable to download template config.");
    }
  }, y = async (k) => {
    try {
      const x = await fetch(k);
      if (!x.ok)
        throw new Error("Encountered error while fetching the template");
      return await x.text();
    } catch {
      return d({
        ...f,
        templateError: [...f.templateError, k]
      }), null;
    }
  }, b = async (k) => {
    const w = Object.entries(k).map(async ([v, C]) => {
      const L = v, R = {
        ...C,
        templatetext: C.templatetext ? await y(C.templatetext) : void 0
      };
      return [L, R];
    });
    return Object.fromEntries(await Promise.all(w));
  };
  return Hr(async () => {
    const k = await g(e), x = await b(k);
    o(x);
  }, []), f.fetchError ? ht`
      <${pc} disabled type="button" template=${n} onMouseEnter=${() => h(!0)} onMouseLeave=${() => h(!1)}>
        Templates
      <//>
      <${im} tooltipOrientation="bottom" showTooltip=${u} errorMessage=${f.errorText}/>` : ht`
    ${a && ht`<${Jue} selectedTemplate=${s} closeModal=${() => {
    c(!1), l(!1);
  }} changeDocumentTemplate=${m}/>`}
    <${the}>
      <${pc} type="button" template=${n}>Templates<//>
      <${rhe}>
        <${ehe}>
        ${Object.keys(i).map((k) => ht`
            ${i[k].templatetext == null ? ht`
              <${nhe}>
                <${im} tooltipOrientation="left" showTooltip=${u === k} errorMessage="Failed to fetch template"/>
                  <${om} disabled type="button" onMouseEnter=${() => h(k)} onMouseLeave=${() => h(!1)}>${i[k].id}
                <//>
              <//>
            ` : ht`
              <${om} type="button" 
              onClick=${() => {
    c(!0), l(k);
  }}>${i[k].id}
              <//>
            `}
          `)}      
        <//>
      <//>
    <//>
  `;
};
console.log("TemplateManager component loaded");
const ohe = ve.div.withConfig({
  displayName: "MystEditor__EditorParent",
  componentId: "sc-f9eyv2-0"
})(["display:flex;flex-flow:row wrap;width:100%;"]), she = ve.div.withConfig({
  displayName: "MystEditor__Topbar",
  componentId: "sc-f9eyv2-1"
})(["z-index:10;position:sticky;top:0;display:", ";width:100%;height:60px;background-color:var(--gray-900);border-bottom:1px solid var(--gray-600);@media print{display:none;}"], (t) => t.$shown ? "flex" : "none"), lhe = ve.div.withConfig({
  displayName: "MystEditor__TopbarRight",
  componentId: "sc-f9eyv2-2"
})(["width:100%;display:flex;justify-content:flex-end;align-items:center;margin-right:15px;"]), ahe = ve.div.withConfig({
  displayName: "MystEditor__Separator",
  componentId: "sc-f9eyv2-3"
})(["border-left:1px solid var(--gray-800);height:40px;margin-right:10px;margin-left:10px;"]), che = ve.div.withConfig({
  displayName: "MystEditor__MystWrapper",
  componentId: "sc-f9eyv2-4"
})(["padding:20px;display:flex;flex-flow:row wrap;width:100%;"]), uhe = [{
  label: "Source",
  img: "data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M22 14.3344V15.6663L17 18.1331V16.7394L20.525 15L17 13.2562V11.8669L22 14.3344ZM12 16.7394L8.475 15L12 13.2562V11.8669L7 14.3344V15.6663L12 18.1331V16.7394ZM16.4044 10H15.1056L12.5988 20H13.8944L16.4044 10V10Z' fill='%23FFFFFF'/%3E%3C/svg%3E"
}, {
  label: "Preview",
  img: "data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12.7232 13.5185L13.0717 13.6453C13.364 13.7516 13.6059 13.4674 13.5201 13.2249L13.394 12.8684C13.1324 13.0434 12.905 13.264 12.7232 13.5185ZM5.3783 14.1143L6.20344 14.6793L5.36684 15.2271L5 14.6669L5.3783 14.1143ZM23.4976 14.6793C23.4976 14.6793 20.4337 20 14.8613 20C9.68749 20 6.20344 14.6793 6.20344 14.6793C6.20344 14.6793 9.40718 10 14.8613 10C20.4056 10 23.4976 14.6793 23.4976 14.6793ZM23.4976 14.6793C24.3642 15.1783 24.364 15.1787 24.3638 15.179L24.3633 15.1799L24.3621 15.182L24.3588 15.1875L24.3489 15.2044C24.3407 15.2182 24.3295 15.2369 24.3153 15.2603C24.2867 15.3069 24.246 15.3722 24.1933 15.4533C24.0878 15.6154 23.9336 15.8417 23.7316 16.1109C23.3288 16.6477 22.7301 17.3626 21.9419 18.0794C20.3721 19.5072 17.9836 21 14.8613 21C11.9278 21 9.5357 19.4963 7.93308 18.0917C7.12296 17.3817 6.48766 16.6739 6.05421 16.1433C5.83691 15.8773 5.66881 15.6539 5.55335 15.4945C5.49559 15.4147 5.45088 15.3508 5.41968 15.3054C5.40407 15.2827 5.39183 15.2646 5.38301 15.2514L5.37234 15.2355L5.36894 15.2303L5.36773 15.2285L5.36724 15.2277C5.36703 15.2274 5.36684 15.2271 6.20344 14.6793C5.3783 14.1143 5.37853 14.114 5.37878 14.1137L5.37933 14.1129L5.38065 14.1109L5.38421 14.1058L5.39489 14.0905C5.40361 14.0781 5.41551 14.0614 5.43057 14.0406C5.46067 13.9989 5.50343 13.941 5.55862 13.8692C5.66894 13.7255 5.82936 13.5255 6.03813 13.288C6.45474 12.814 7.06911 12.1846 7.86767 11.5546C9.45985 10.2984 11.8369 9 14.8613 9C17.9286 9 20.3014 10.2965 21.8823 11.558C22.6741 12.1898 23.2783 12.8211 23.6867 13.2969C23.8913 13.5353 24.048 13.7361 24.1557 13.8806C24.2095 13.9528 24.2513 14.0111 24.2806 14.0531C24.2954 14.0741 24.307 14.091 24.3155 14.1036L24.326 14.1192L24.3296 14.1244L24.3309 14.1264L24.3314 14.1273C24.3317 14.1276 24.3319 14.128 23.4976 14.6793ZM23.4976 14.6793L24.3319 14.128L24.6724 14.6432L24.3642 15.1783L23.4976 14.6793ZM15.5108 12.959C16.3818 13.2357 17.0123 14.0453 17.0123 15C17.0123 16.1836 16.0445 17.1429 14.8505 17.1429C13.8785 17.1429 13.0565 16.5071 12.7844 15.6322C12.7222 15.4324 12.6888 15.2201 12.6888 15C12.6888 14.8579 12.7032 14.7193 12.7298 14.585C12.8702 14.6361 13.0104 14.6627 13.147 14.6678C13.8935 14.6961 14.535 14.0861 14.541 13.3486C14.5422 13.2 14.5176 13.0462 14.4628 12.8914C14.5882 12.87 14.7179 12.8571 14.8505 12.8571C15.0808 12.8571 15.3027 12.8929 15.5108 12.959ZM11.2476 15C11.2476 16.9729 12.861 18.5714 14.8505 18.5714C16.8408 18.5714 18.4535 16.9729 18.4535 15C18.4535 13.0279 16.8408 11.4286 14.8505 11.4286C12.861 11.4286 11.2476 13.0279 11.2476 15Z' fill='%23FFFFFF'/%3E%3C/svg%3E%0A"
}, {
  label: "Both",
  img: "data:image/svg+xml,%3Csvg width='22' height='17' viewBox='0 0 22 17' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2.66667 0.666667H10.5338V15.5109H2.66667C1.5621 15.5109 0.666667 14.6154 0.666667 13.5109V2.66667C0.666667 1.5621 1.5621 0.666667 2.66667 0.666667Z' stroke='white' stroke-width='1.33333'/%3E%3Cpath d='M10.8001 0.666667H18.6673C19.7718 0.666667 20.6673 1.5621 20.6673 2.66667V13.5109C20.6673 14.6154 19.7718 15.5109 18.6673 15.5109H10.8001V0.666667Z' stroke='white' stroke-width='1.33333'/%3E%3C/svg%3E%0A"
}], phe = ({
  name: t = "myst_editor_textarea",
  id: e = "myst_editor_textarea",
  initialMode: n = "Both",
  initialText: r = "",
  printCallback: i = window.print,
  topbar: o = !0,
  templatelist: s
}) => {
  const [l, a] = ut(n), [c, u] = ut(r), [h, f] = ut(null);
  return ht`
  <${ohe}>
    <${she} $shown=${o}>
      <${lhe}>
        <${pc} type="button" onClick=${(m) => i(m)}>Export as PDF<//>
        <${ihe} templatelist=${s} templateState=${h} setDocumentTemplate=${(m) => {
    f({
      template: m,
      timestamp: Date.now()
    });
  }}/>
        <${ahe} />
        <${gie} buttons=${uhe} clickedId=${2} clickCallback=${(m) => a(m)}/>
      <//>
    <//>
    <${che}>
      <${Gue} setText=${u} name=${t} id=${e} shown=${l === "Both" || l === "Source"} templateState=${h} value=${c}/>
      <div class="myst_rendered ${l === "Both" || l === "Preview" ? "" : "hidden"}" dangerouslySetInnerHTML=${{
    __html: ((m) => fC.sanitize(pie().use(Bw).render(m)))(c)
  }}/>
    <//>
  <//>`;
};
export {
  phe as default,
  ht as html,
  Ni as render
};

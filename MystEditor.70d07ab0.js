var gt = function() {
  return gt = Object.assign || function(e) {
    for (var n, r = 1, i = arguments.length; r < i; r++) {
      n = arguments[r];
      for (var s in n)
        Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s]);
    }
    return e;
  }, gt.apply(this, arguments);
};
function qi(t, e, n) {
  if (n || arguments.length === 2)
    for (var r = 0, i = e.length, s; r < i; r++)
      (s || !(r in e)) && (s || (s = Array.prototype.slice.call(e, 0, r)), s[r] = e[r]);
  return t.concat(s || Array.prototype.slice.call(e));
}
function Qk(t) {
  var e = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return e[n] === void 0 && (e[n] = t(n)), e[n];
  };
}
var e_ = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, t_ = /* @__PURE__ */ Qk(
  function(t) {
    return e_.test(t) || t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && t.charCodeAt(2) < 91;
  }
), Eo, F, Py, Or, Lp, Fy, eu, By, Di = {}, qy = [], n_ = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Uc = Array.isArray;
function Ln(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function $y(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function Gt(t, e, n) {
  var r, i, s, o = {};
  for (s in e)
    s == "key" ? r = e[s] : s == "ref" ? i = e[s] : o[s] = e[s];
  if (arguments.length > 2 && (o.children = arguments.length > 3 ? Eo.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (s in t.defaultProps)
      o[s] === void 0 && (o[s] = t.defaultProps[s]);
  return Fs(t, o, r, i, null);
}
function Fs(t, e, n, r, i) {
  var s = { type: t, props: e, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++Py : i };
  return i == null && F.vnode != null && F.vnode(s), s;
}
function r_() {
  return { current: null };
}
function Fn(t) {
  return t.children;
}
function gn(t, e) {
  this.props = t, this.context = e;
}
function Gs(t, e) {
  if (e == null)
    return t.__ ? Gs(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? Gs(t) : null;
}
function Hy(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return Hy(t);
  }
}
function tu(t) {
  (!t.__d && (t.__d = !0) && Or.push(t) && !Jl.__r++ || Lp !== F.debounceRendering) && ((Lp = F.debounceRendering) || Fy)(Jl);
}
function Jl() {
  var t, e, n, r, i, s, o, l, c;
  for (Or.sort(eu); t = Or.shift(); )
    t.__d && (e = Or.length, r = void 0, i = void 0, s = void 0, l = (o = (n = t).__v).__e, (c = n.__P) && (r = [], i = [], (s = Ln({}, o)).__v = o.__v + 1, Ff(c, o, s, n.__n, c.ownerSVGElement !== void 0, o.__h != null ? [l] : null, r, l == null ? Gs(o) : l, o.__h, i), Wy(r, o, i), o.__e != l && Hy(o)), Or.length > e && Or.sort(eu));
  Jl.__r = 0;
}
function zy(t, e, n, r, i, s, o, l, c, a, h) {
  var u, f, d, p, g, m, y, b, _, w = 0, x = r && r.__k || qy, v = x.length, S = v, R = e.length;
  for (n.__k = [], u = 0; u < R; u++)
    (p = n.__k[u] = (p = e[u]) == null || typeof p == "boolean" || typeof p == "function" ? null : typeof p == "string" || typeof p == "number" || typeof p == "bigint" ? Fs(null, p, null, null, p) : Uc(p) ? Fs(Fn, { children: p }, null, null, null) : p.__b > 0 ? Fs(p.type, p.props, p.key, p.ref ? p.ref : null, p.__v) : p) != null ? (p.__ = n, p.__b = n.__b + 1, (b = i_(p, x, y = u + w, S)) === -1 ? d = Di : (d = x[b] || Di, x[b] = void 0, S--), Ff(t, p, d, i, s, o, l, c, a, h), g = p.__e, (f = p.ref) && d.ref != f && (d.ref && Bf(d.ref, null, p), h.push(f, p.__c || g, p)), g != null && (m == null && (m = g), (_ = d === Di || d.__v === null) ? b == -1 && w-- : b !== y && (b === y + 1 ? w++ : b > y ? S > R - y ? w += b - y : w-- : w = b < y && b == y - 1 ? b - y : 0), y = u + w, typeof p.type != "function" || b === y && d.__k !== p.__k ? typeof p.type == "function" || b === y && !_ ? p.__d !== void 0 ? (c = p.__d, p.__d = void 0) : c = g.nextSibling : c = Uy(t, g, c) : c = Vy(p, c, t), typeof n.type == "function" && (n.__d = c))) : (d = x[u]) && d.key == null && d.__e && (d.__e == c && (c = Gs(d)), nu(d, d, !1), x[u] = null);
  for (n.__e = m, u = v; u--; )
    x[u] != null && (typeof n.type == "function" && x[u].__e != null && x[u].__e == n.__d && (n.__d = x[u].__e.nextSibling), nu(x[u], x[u]));
}
function Vy(t, e, n) {
  for (var r, i = t.__k, s = 0; i && s < i.length; s++)
    (r = i[s]) && (r.__ = t, e = typeof r.type == "function" ? Vy(r, e, n) : Uy(n, r.__e, e));
  return e;
}
function In(t, e) {
  return e = e || [], t == null || typeof t == "boolean" || (Uc(t) ? t.some(function(n) {
    In(n, e);
  }) : e.push(t)), e;
}
function Uy(t, e, n) {
  return n == null || n.parentNode !== t ? t.insertBefore(e, null) : e == n && e.parentNode != null || t.insertBefore(e, n), e.nextSibling;
}
function i_(t, e, n, r) {
  var i = t.key, s = t.type, o = n - 1, l = n + 1, c = e[n];
  if (c === null || c && i == c.key && s === c.type)
    return n;
  if (r > (c != null ? 1 : 0))
    for (; o >= 0 || l < e.length; ) {
      if (o >= 0) {
        if ((c = e[o]) && i == c.key && s === c.type)
          return o;
        o--;
      }
      if (l < e.length) {
        if ((c = e[l]) && i == c.key && s === c.type)
          return l;
        l++;
      }
    }
  return -1;
}
function s_(t, e, n, r, i) {
  var s;
  for (s in n)
    s === "children" || s === "key" || s in e || Zl(t, s, null, n[s], r);
  for (s in e)
    i && typeof e[s] != "function" || s === "children" || s === "key" || s === "value" || s === "checked" || n[s] === e[s] || Zl(t, s, e[s], n[s], r);
}
function Rp(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n == null ? "" : n) : t[e] = n == null ? "" : typeof n != "number" || n_.test(e) ? n : n + "px";
}
function Zl(t, e, n, r, i) {
  var s;
  e:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof r == "string" && (t.style.cssText = r = ""), r)
          for (e in r)
            n && e in n || Rp(t.style, e, "");
        if (n)
          for (e in n)
            r && n[e] === r[e] || Rp(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      s = e !== (e = e.replace(/(PointerCapture)$|Capture$/, "$1")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + s] = n, n ? r || t.addEventListener(e, s ? Np : Ip, s) : t.removeEventListener(e, s ? Np : Ip, s);
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
function Ip(t) {
  return this.l[t.type + !1](F.event ? F.event(t) : t);
}
function Np(t) {
  return this.l[t.type + !0](F.event ? F.event(t) : t);
}
function Ff(t, e, n, r, i, s, o, l, c, a) {
  var h, u, f, d, p, g, m, y, b, _, w, x, v, S, R, L = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (c = n.__h, l = e.__e = n.__e, e.__h = null, s = [l]), (h = F.__b) && h(e);
  e:
    if (typeof L == "function")
      try {
        if (y = e.props, b = (h = L.contextType) && r[h.__c], _ = h ? b ? b.props.value : h.__ : r, n.__c ? m = (u = e.__c = n.__c).__ = u.__E : ("prototype" in L && L.prototype.render ? e.__c = u = new L(y, _) : (e.__c = u = new gn(y, _), u.constructor = L, u.render = l_), b && b.sub(u), u.props = y, u.state || (u.state = {}), u.context = _, u.__n = r, f = u.__d = !0, u.__h = [], u._sb = []), u.__s == null && (u.__s = u.state), L.getDerivedStateFromProps != null && (u.__s == u.state && (u.__s = Ln({}, u.__s)), Ln(u.__s, L.getDerivedStateFromProps(y, u.__s))), d = u.props, p = u.state, u.__v = e, f)
          L.getDerivedStateFromProps == null && u.componentWillMount != null && u.componentWillMount(), u.componentDidMount != null && u.__h.push(u.componentDidMount);
        else {
          if (L.getDerivedStateFromProps == null && y !== d && u.componentWillReceiveProps != null && u.componentWillReceiveProps(y, _), !u.__e && (u.shouldComponentUpdate != null && u.shouldComponentUpdate(y, u.__s, _) === !1 || e.__v === n.__v)) {
            for (e.__v !== n.__v && (u.props = y, u.state = u.__s, u.__d = !1), e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(D) {
              D && (D.__ = e);
            }), w = 0; w < u._sb.length; w++)
              u.__h.push(u._sb[w]);
            u._sb = [], u.__h.length && o.push(u);
            break e;
          }
          u.componentWillUpdate != null && u.componentWillUpdate(y, u.__s, _), u.componentDidUpdate != null && u.__h.push(function() {
            u.componentDidUpdate(d, p, g);
          });
        }
        if (u.context = _, u.props = y, u.__P = t, u.__e = !1, x = F.__r, v = 0, "prototype" in L && L.prototype.render) {
          for (u.state = u.__s, u.__d = !1, x && x(e), h = u.render(u.props, u.state, u.context), S = 0; S < u._sb.length; S++)
            u.__h.push(u._sb[S]);
          u._sb = [];
        } else
          do
            u.__d = !1, x && x(e), h = u.render(u.props, u.state, u.context), u.state = u.__s;
          while (u.__d && ++v < 25);
        u.state = u.__s, u.getChildContext != null && (r = Ln(Ln({}, r), u.getChildContext())), f || u.getSnapshotBeforeUpdate == null || (g = u.getSnapshotBeforeUpdate(d, p)), zy(t, Uc(R = h != null && h.type === Fn && h.key == null ? h.props.children : h) ? R : [R], e, n, r, i, s, o, l, c, a), u.base = e.__e, e.__h = null, u.__h.length && o.push(u), m && (u.__E = u.__ = null);
      } catch (D) {
        e.__v = null, (c || s != null) && (e.__e = l, e.__h = !!c, s[s.indexOf(l)] = null), F.__e(D, e, n);
      }
    else
      s == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = o_(n.__e, e, n, r, i, s, o, c, a);
  (h = F.diffed) && h(e);
}
function Wy(t, e, n) {
  for (var r = 0; r < n.length; r++)
    Bf(n[r], n[++r], n[++r]);
  F.__c && F.__c(e, t), t.some(function(i) {
    try {
      t = i.__h, i.__h = [], t.some(function(s) {
        s.call(i);
      });
    } catch (s) {
      F.__e(s, i.__v);
    }
  });
}
function o_(t, e, n, r, i, s, o, l, c) {
  var a, h, u, f = n.props, d = e.props, p = e.type, g = 0;
  if (p === "svg" && (i = !0), s != null) {
    for (; g < s.length; g++)
      if ((a = s[g]) && "setAttribute" in a == !!p && (p ? a.localName === p : a.nodeType === 3)) {
        t = a, s[g] = null;
        break;
      }
  }
  if (t == null) {
    if (p === null)
      return document.createTextNode(d);
    t = i ? document.createElementNS("http://www.w3.org/2000/svg", p) : document.createElement(p, d.is && d), s = null, l = !1;
  }
  if (p === null)
    f === d || l && t.data === d || (t.data = d);
  else {
    if (s = s && Eo.call(t.childNodes), h = (f = n.props || Di).dangerouslySetInnerHTML, u = d.dangerouslySetInnerHTML, !l) {
      if (s != null)
        for (f = {}, g = 0; g < t.attributes.length; g++)
          f[t.attributes[g].name] = t.attributes[g].value;
      (u || h) && (u && (h && u.__html == h.__html || u.__html === t.innerHTML) || (t.innerHTML = u && u.__html || ""));
    }
    if (s_(t, d, f, i, l), u)
      e.__k = [];
    else if (zy(t, Uc(g = e.props.children) ? g : [g], e, n, r, i && p !== "foreignObject", s, o, s ? s[0] : n.__k && Gs(n, 0), l, c), s != null)
      for (g = s.length; g--; )
        s[g] != null && $y(s[g]);
    l || ("value" in d && (g = d.value) !== void 0 && (g !== t.value || p === "progress" && !g || p === "option" && g !== f.value) && Zl(t, "value", g, f.value, !1), "checked" in d && (g = d.checked) !== void 0 && g !== t.checked && Zl(t, "checked", g, f.checked, !1));
  }
  return t;
}
function Bf(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (r) {
    F.__e(r, n);
  }
}
function nu(t, e, n) {
  var r, i;
  if (F.unmount && F.unmount(t), (r = t.ref) && (r.current && r.current !== t.__e || Bf(r, null, e)), (r = t.__c) != null) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (s) {
        F.__e(s, e);
      }
    r.base = r.__P = null, t.__c = void 0;
  }
  if (r = t.__k)
    for (i = 0; i < r.length; i++)
      r[i] && nu(r[i], e, n || typeof t.type != "function");
  n || t.__e == null || $y(t.__e), t.__ = t.__e = t.__d = void 0;
}
function l_(t, e, n) {
  return this.constructor(t, n);
}
function Ys(t, e, n) {
  var r, i, s, o;
  F.__ && F.__(t, e), i = (r = typeof n == "function") ? null : n && n.__k || e.__k, s = [], o = [], Ff(e, t = (!r && n || e).__k = Gt(Fn, null, [t]), i || Di, Di, e.ownerSVGElement !== void 0, !r && n ? [n] : i ? null : e.firstChild ? Eo.call(e.childNodes) : null, s, !r && n ? n : i ? i.__e : e.firstChild, r, o), Wy(s, t, o);
}
function jy(t, e) {
  Ys(t, e, jy);
}
function c_(t, e, n) {
  var r, i, s, o, l = Ln({}, t.props);
  for (s in t.type && t.type.defaultProps && (o = t.type.defaultProps), e)
    s == "key" ? r = e[s] : s == "ref" ? i = e[s] : l[s] = e[s] === void 0 && o !== void 0 ? o[s] : e[s];
  return arguments.length > 2 && (l.children = arguments.length > 3 ? Eo.call(arguments, 2) : n), Fs(t.type, l, r || t.key, i || t.ref, null);
}
function a_(t, e) {
  var n = { __c: e = "__cC" + By++, __: t, Consumer: function(r, i) {
    return r.children(i);
  }, Provider: function(r) {
    var i, s;
    return this.getChildContext || (i = [], (s = {})[e] = this, this.getChildContext = function() {
      return s;
    }, this.shouldComponentUpdate = function(o) {
      this.props.value !== o.value && i.some(function(l) {
        l.__e = !0, tu(l);
      });
    }, this.sub = function(o) {
      i.push(o);
      var l = o.componentWillUnmount;
      o.componentWillUnmount = function() {
        i.splice(i.indexOf(o), 1), l && l.call(o);
      };
    }), r.children;
  } };
  return n.Provider.__ = n.Consumer.contextType = n;
}
Eo = qy.slice, F = { __e: function(t, e, n, r) {
  for (var i, s, o; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((s = i.constructor) && s.getDerivedStateFromError != null && (i.setState(s.getDerivedStateFromError(t)), o = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, r || {}), o = i.__d), o)
          return i.__E = i;
      } catch (l) {
        t = l;
      }
  throw t;
} }, Py = 0, gn.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ln({}, this.state), typeof t == "function" && (t = t(Ln({}, n), this.props)), t && Ln(n, t), t != null && this.__v && (e && this._sb.push(e), tu(this));
}, gn.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), tu(this));
}, gn.prototype.render = Fn, Or = [], Fy = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, eu = function(t, e) {
  return t.__v.__b - e.__v.__b;
}, Jl.__r = 0, By = 0;
var hr, we, Ua, Pp, $i = 0, Gy = [], Al = [], Fp = F.__b, Bp = F.__r, qp = F.diffed, $p = F.__c, Hp = F.unmount;
function ss(t, e) {
  F.__h && F.__h(we, t, $i || e), $i = 0;
  var n = we.__H || (we.__H = { __: [], __h: [] });
  return t >= n.__.length && n.__.push({ __V: Al }), n.__[t];
}
function st(t) {
  return $i = 1, Yy(Jy, t);
}
function Yy(t, e, n) {
  var r = ss(hr++, 2);
  if (r.t = t, !r.__c && (r.__ = [n ? n(e) : Jy(void 0, e), function(l) {
    var c = r.__N ? r.__N[0] : r.__[0], a = r.t(c, l);
    c !== a && (r.__N = [a, r.__[1]], r.__c.setState({}));
  }], r.__c = we, !we.u)) {
    var i = function(l, c, a) {
      if (!r.__c.__H)
        return !0;
      var h = r.__c.__H.__.filter(function(f) {
        return f.__c;
      });
      if (h.every(function(f) {
        return !f.__N;
      }))
        return !s || s.call(this, l, c, a);
      var u = !1;
      return h.forEach(function(f) {
        if (f.__N) {
          var d = f.__[0];
          f.__ = f.__N, f.__N = void 0, d !== f.__[0] && (u = !0);
        }
      }), !(!u && r.__c.props === l) && (!s || s.call(this, l, c, a));
    };
    we.u = !0;
    var s = we.shouldComponentUpdate, o = we.componentWillUpdate;
    we.componentWillUpdate = function(l, c, a) {
      if (this.__e) {
        var h = s;
        s = void 0, i(l, c, a), s = h;
      }
      o && o.call(this, l, c, a);
    }, we.shouldComponentUpdate = i;
  }
  return r.__N || r.__;
}
function Hi(t, e) {
  var n = ss(hr++, 3);
  !F.__s && $f(n.__H, e) && (n.__ = t, n.i = e, we.__H.__h.push(n));
}
function Wc(t, e) {
  var n = ss(hr++, 4);
  !F.__s && $f(n.__H, e) && (n.__ = t, n.i = e, we.__h.push(n));
}
function qf(t) {
  return $i = 5, Rn(function() {
    return { current: t };
  }, []);
}
function h_(t, e, n) {
  $i = 6, Wc(function() {
    return typeof t == "function" ? (t(e()), function() {
      return t(null);
    }) : t ? (t.current = e(), function() {
      return t.current = null;
    }) : void 0;
  }, n == null ? n : n.concat(t));
}
function Rn(t, e) {
  var n = ss(hr++, 7);
  return $f(n.__H, e) ? (n.__V = t(), n.i = e, n.__h = t, n.__V) : n.__;
}
function u_(t, e) {
  return $i = 8, Rn(function() {
    return t;
  }, e);
}
function Ky(t) {
  var e = we.context[t.__c], n = ss(hr++, 9);
  return n.c = t, e ? (n.__ == null && (n.__ = !0, e.sub(we)), e.props.value) : t.__;
}
function ru(t, e) {
  F.useDebugValue && F.useDebugValue(e ? e(t) : t);
}
function f_() {
  var t = ss(hr++, 11);
  if (!t.__) {
    for (var e = we.__v; e !== null && !e.__m && e.__ !== null; )
      e = e.__;
    var n = e.__m || (e.__m = [0, 0]);
    t.__ = "P" + n[0] + "-" + n[1]++;
  }
  return t.__;
}
function d_() {
  for (var t; t = Gy.shift(); )
    if (t.__P && t.__H)
      try {
        t.__H.__h.forEach(El), t.__H.__h.forEach(iu), t.__H.__h = [];
      } catch (e) {
        t.__H.__h = [], F.__e(e, t.__v);
      }
}
F.__b = function(t) {
  we = null, Fp && Fp(t);
}, F.__r = function(t) {
  Bp && Bp(t), hr = 0;
  var e = (we = t.__c).__H;
  e && (Ua === we ? (e.__h = [], we.__h = [], e.__.forEach(function(n) {
    n.__N && (n.__ = n.__N), n.__V = Al, n.__N = n.i = void 0;
  })) : (e.__h.forEach(El), e.__h.forEach(iu), e.__h = [], hr = 0)), Ua = we;
}, F.diffed = function(t) {
  qp && qp(t);
  var e = t.__c;
  e && e.__H && (e.__H.__h.length && (Gy.push(e) !== 1 && Pp === F.requestAnimationFrame || ((Pp = F.requestAnimationFrame) || p_)(d_)), e.__H.__.forEach(function(n) {
    n.i && (n.__H = n.i), n.__V !== Al && (n.__ = n.__V), n.i = void 0, n.__V = Al;
  })), Ua = we = null;
}, F.__c = function(t, e) {
  e.some(function(n) {
    try {
      n.__h.forEach(El), n.__h = n.__h.filter(function(r) {
        return !r.__ || iu(r);
      });
    } catch (r) {
      e.some(function(i) {
        i.__h && (i.__h = []);
      }), e = [], F.__e(r, n.__v);
    }
  }), $p && $p(t, e);
}, F.unmount = function(t) {
  Hp && Hp(t);
  var e, n = t.__c;
  n && n.__H && (n.__H.__.forEach(function(r) {
    try {
      El(r);
    } catch (i) {
      e = i;
    }
  }), n.__H = void 0, e && F.__e(e, n.__v));
};
var zp = typeof requestAnimationFrame == "function";
function p_(t) {
  var e, n = function() {
    clearTimeout(r), zp && cancelAnimationFrame(e), setTimeout(t);
  }, r = setTimeout(n, 100);
  zp && (e = requestAnimationFrame(n));
}
function El(t) {
  var e = we, n = t.__c;
  typeof n == "function" && (t.__c = void 0, n()), we = e;
}
function iu(t) {
  var e = we;
  t.__c = t.__(), we = e;
}
function $f(t, e) {
  return !t || t.length !== e.length || e.some(function(n, r) {
    return n !== t[r];
  });
}
function Jy(t, e) {
  return typeof e == "function" ? e(t) : e;
}
function Zy(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function su(t, e) {
  for (var n in t)
    if (n !== "__source" && !(n in e))
      return !0;
  for (var r in e)
    if (r !== "__source" && t[r] !== e[r])
      return !0;
  return !1;
}
function Wa(t, e) {
  return t === e && (t !== 0 || 1 / t == 1 / e) || t != t && e != e;
}
function ou(t) {
  this.props = t;
}
function g_(t, e) {
  function n(i) {
    var s = this.props.ref, o = s == i.ref;
    return !o && s && (s.call ? s(null) : s.current = null), e ? !e(this.props, i) || !o : su(this.props, i);
  }
  function r(i) {
    return this.shouldComponentUpdate = n, Gt(t, i);
  }
  return r.displayName = "Memo(" + (t.displayName || t.name) + ")", r.prototype.isReactComponent = !0, r.__f = !0, r;
}
(ou.prototype = new gn()).isPureReactComponent = !0, ou.prototype.shouldComponentUpdate = function(t, e) {
  return su(this.props, t) || su(this.state, e);
};
var Vp = F.__b;
F.__b = function(t) {
  t.type && t.type.__f && t.ref && (t.props.ref = t.ref, t.ref = null), Vp && Vp(t);
};
var m_ = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function y_(t) {
  function e(n) {
    var r = Zy({}, n);
    return delete r.ref, t(r, n.ref || null);
  }
  return e.$$typeof = m_, e.render = e, e.prototype.isReactComponent = e.__f = !0, e.displayName = "ForwardRef(" + (t.displayName || t.name) + ")", e;
}
var Up = function(t, e) {
  return t == null ? null : In(In(t).map(e));
}, b_ = { map: Up, forEach: Up, count: function(t) {
  return t ? In(t).length : 0;
}, only: function(t) {
  var e = In(t);
  if (e.length !== 1)
    throw "Children.only";
  return e[0];
}, toArray: In }, w_ = F.__e;
F.__e = function(t, e, n, r) {
  if (t.then) {
    for (var i, s = e; s = s.__; )
      if ((i = s.__c) && i.__c)
        return e.__e == null && (e.__e = n.__e, e.__k = n.__k), i.__c(t, e);
  }
  w_(t, e, n, r);
};
var Wp = F.unmount;
function Xy(t, e, n) {
  return t && (t.__c && t.__c.__H && (t.__c.__H.__.forEach(function(r) {
    typeof r.__c == "function" && r.__c();
  }), t.__c.__H = null), (t = Zy({}, t)).__c != null && (t.__c.__P === n && (t.__c.__P = e), t.__c = null), t.__k = t.__k && t.__k.map(function(r) {
    return Xy(r, e, n);
  })), t;
}
function Qy(t, e, n) {
  return t && (t.__v = null, t.__k = t.__k && t.__k.map(function(r) {
    return Qy(r, e, n);
  }), t.__c && t.__c.__P === e && (t.__e && n.insertBefore(t.__e, t.__d), t.__c.__e = !0, t.__c.__P = n)), t;
}
function Dl() {
  this.__u = 0, this.t = null, this.__b = null;
}
function eb(t) {
  var e = t.__.__c;
  return e && e.__a && e.__a(t);
}
function v_(t) {
  var e, n, r;
  function i(s) {
    if (e || (e = t()).then(function(o) {
      n = o.default || o;
    }, function(o) {
      r = o;
    }), r)
      throw r;
    if (!n)
      throw e;
    return Gt(n, s);
  }
  return i.displayName = "Lazy", i.__f = !0, i;
}
function Ts() {
  this.u = null, this.o = null;
}
F.unmount = function(t) {
  var e = t.__c;
  e && e.__R && e.__R(), e && t.__h === !0 && (t.type = null), Wp && Wp(t);
}, (Dl.prototype = new gn()).__c = function(t, e) {
  var n = e.__c, r = this;
  r.t == null && (r.t = []), r.t.push(n);
  var i = eb(r.__v), s = !1, o = function() {
    s || (s = !0, n.__R = null, i ? i(l) : l());
  };
  n.__R = o;
  var l = function() {
    if (!--r.__u) {
      if (r.state.__a) {
        var a = r.state.__a;
        r.__v.__k[0] = Qy(a, a.__c.__P, a.__c.__O);
      }
      var h;
      for (r.setState({ __a: r.__b = null }); h = r.t.pop(); )
        h.forceUpdate();
    }
  }, c = e.__h === !0;
  r.__u++ || c || r.setState({ __a: r.__b = r.__v.__k[0] }), t.then(o, o);
}, Dl.prototype.componentWillUnmount = function() {
  this.t = [];
}, Dl.prototype.render = function(t, e) {
  if (this.__b) {
    if (this.__v.__k) {
      var n = document.createElement("div"), r = this.__v.__k[0].__c;
      this.__v.__k[0] = Xy(this.__b, n, r.__O = r.__P);
    }
    this.__b = null;
  }
  var i = e.__a && Gt(Fn, null, t.fallback);
  return i && (i.__h = null), [Gt(Fn, null, e.__a ? null : t.children), i];
};
var jp = function(t, e, n) {
  if (++n[1] === n[0] && t.o.delete(e), t.props.revealOrder && (t.props.revealOrder[0] !== "t" || !t.o.size))
    for (n = t.u; n; ) {
      for (; n.length > 3; )
        n.pop()();
      if (n[1] < n[0])
        break;
      t.u = n = n[2];
    }
};
function x_(t) {
  return this.getChildContext = function() {
    return t.context;
  }, t.children;
}
function k_(t) {
  var e = this, n = t.i;
  e.componentWillUnmount = function() {
    Ys(null, e.l), e.l = null, e.i = null;
  }, e.i && e.i !== n && e.componentWillUnmount(), e.l || (e.i = n, e.l = { nodeType: 1, parentNode: n, childNodes: [], appendChild: function(r) {
    this.childNodes.push(r), e.i.appendChild(r);
  }, insertBefore: function(r, i) {
    this.childNodes.push(r), e.i.appendChild(r);
  }, removeChild: function(r) {
    this.childNodes.splice(this.childNodes.indexOf(r) >>> 1, 1), e.i.removeChild(r);
  } }), Ys(Gt(x_, { context: e.context }, t.__v), e.l);
}
function __(t, e) {
  var n = Gt(k_, { __v: t, i: e });
  return n.containerInfo = e, n;
}
(Ts.prototype = new gn()).__a = function(t) {
  var e = this, n = eb(e.__v), r = e.o.get(t);
  return r[0]++, function(i) {
    var s = function() {
      e.props.revealOrder ? (r.push(i), jp(e, t, r)) : i();
    };
    n ? n(s) : s();
  };
}, Ts.prototype.render = function(t) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var e = In(t.children);
  t.revealOrder && t.revealOrder[0] === "b" && e.reverse();
  for (var n = e.length; n--; )
    this.o.set(e[n], this.u = [1, 0, this.u]);
  return t.children;
}, Ts.prototype.componentDidUpdate = Ts.prototype.componentDidMount = function() {
  var t = this;
  this.o.forEach(function(e, n) {
    jp(t, n, e);
  });
};
var tb = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, S_ = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, C_ = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, A_ = /[A-Z0-9]/g, E_ = typeof document < "u", D_ = function(t) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(t);
};
function T_(t, e, n) {
  return e.__k == null && (e.textContent = ""), Ys(t, e), typeof n == "function" && n(), t ? t.__c : null;
}
function M_(t, e, n) {
  return jy(t, e), typeof n == "function" && n(), t ? t.__c : null;
}
gn.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(t) {
  Object.defineProperty(gn.prototype, t, { configurable: !0, get: function() {
    return this["UNSAFE_" + t];
  }, set: function(e) {
    Object.defineProperty(this, t, { configurable: !0, writable: !0, value: e });
  } });
});
var Gp = F.event;
function O_() {
}
function L_() {
  return this.cancelBubble;
}
function R_() {
  return this.defaultPrevented;
}
F.event = function(t) {
  return Gp && (t = Gp(t)), t.persist = O_, t.isPropagationStopped = L_, t.isDefaultPrevented = R_, t.nativeEvent = t;
};
var Hf, I_ = { enumerable: !1, configurable: !0, get: function() {
  return this.class;
} }, Yp = F.vnode;
F.vnode = function(t) {
  typeof t.type == "string" && function(e) {
    var n = e.props, r = e.type, i = {};
    for (var s in n) {
      var o = n[s];
      if (!(s === "value" && "defaultValue" in n && o == null || E_ && s === "children" && r === "noscript" || s === "class" || s === "className")) {
        var l = s.toLowerCase();
        s === "defaultValue" && "value" in n && n.value == null ? s = "value" : s === "download" && o === !0 ? o = "" : l === "ondoubleclick" ? s = "ondblclick" : l !== "onchange" || r !== "input" && r !== "textarea" || D_(n.type) ? l === "onfocus" ? s = "onfocusin" : l === "onblur" ? s = "onfocusout" : C_.test(s) ? s = l : r.indexOf("-") === -1 && S_.test(s) ? s = s.replace(A_, "-$&").toLowerCase() : o === null && (o = void 0) : l = s = "oninput", l === "oninput" && i[s = l] && (s = "oninputCapture"), i[s] = o;
      }
    }
    r == "select" && i.multiple && Array.isArray(i.value) && (i.value = In(n.children).forEach(function(c) {
      c.props.selected = i.value.indexOf(c.props.value) != -1;
    })), r == "select" && i.defaultValue != null && (i.value = In(n.children).forEach(function(c) {
      c.props.selected = i.multiple ? i.defaultValue.indexOf(c.props.value) != -1 : i.defaultValue == c.props.value;
    })), n.class && !n.className ? (i.class = n.class, Object.defineProperty(i, "className", I_)) : (n.className && !n.class || n.class && n.className) && (i.class = i.className = n.className), e.props = i;
  }(t), t.$$typeof = tb, Yp && Yp(t);
};
var Kp = F.__r;
F.__r = function(t) {
  Kp && Kp(t), Hf = t.__c;
};
var Jp = F.diffed;
F.diffed = function(t) {
  Jp && Jp(t);
  var e = t.props, n = t.__e;
  n != null && t.type === "textarea" && "value" in e && e.value !== n.value && (n.value = e.value == null ? "" : e.value), Hf = null;
};
var N_ = { ReactCurrentDispatcher: { current: { readContext: function(t) {
  return Hf.__n[t.__c].props.value;
} } } };
function P_(t) {
  return Gt.bind(null, t);
}
function jc(t) {
  return !!t && t.$$typeof === tb;
}
function F_(t) {
  return jc(t) && t.type === Fn;
}
function B_(t) {
  return jc(t) ? c_.apply(null, arguments) : t;
}
function q_(t) {
  return !!t.__k && (Ys(null, t), !0);
}
function $_(t) {
  return t && (t.base || t.nodeType === 1 && t) || null;
}
var H_ = function(t, e) {
  return t(e);
}, z_ = function(t, e) {
  return t(e);
}, V_ = Fn;
function nb(t) {
  t();
}
function U_(t) {
  return t;
}
function W_() {
  return [!1, nb];
}
var j_ = Wc, G_ = jc;
function Y_(t, e) {
  var n = e(), r = st({ h: { __: n, v: e } }), i = r[0].h, s = r[1];
  return Wc(function() {
    i.__ = n, i.v = e, Wa(i.__, e()) || s({ h: i });
  }, [t, n, e]), Hi(function() {
    return Wa(i.__, i.v()) || s({ h: i }), t(function() {
      Wa(i.__, i.v()) || s({ h: i });
    });
  }, [t]), n;
}
var Gr = { useState: st, useId: f_, useReducer: Yy, useEffect: Hi, useLayoutEffect: Wc, useInsertionEffect: j_, useTransition: W_, useDeferredValue: U_, useSyncExternalStore: Y_, startTransition: nb, useRef: qf, useImperativeHandle: h_, useMemo: Rn, useCallback: u_, useContext: Ky, useDebugValue: ru, version: "17.0.2", Children: b_, render: T_, hydrate: M_, unmountComponentAtNode: q_, createPortal: __, createElement: Gt, createContext: a_, createFactory: P_, cloneElement: B_, createRef: r_, Fragment: Fn, isValidElement: jc, isElement: G_, isFragment: F_, findDOMNode: $_, Component: gn, PureComponent: ou, memo: g_, forwardRef: y_, flushSync: z_, unstable_batchedUpdates: H_, StrictMode: V_, Suspense: Dl, SuspenseList: Ts, lazy: v_, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: N_ };
function K_(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function J_(t) {
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
var Z_ = function(e, n, r, i) {
  var s = r ? r.call(i, e, n) : void 0;
  if (s !== void 0)
    return !!s;
  if (e === n)
    return !0;
  if (typeof e != "object" || !e || typeof n != "object" || !n)
    return !1;
  var o = Object.keys(e), l = Object.keys(n);
  if (o.length !== l.length)
    return !1;
  for (var c = Object.prototype.hasOwnProperty.bind(n), a = 0; a < o.length; a++) {
    var h = o[a];
    if (!c(h))
      return !1;
    var u = e[h], f = n[h];
    if (s = r ? r.call(i, u, f, h) : void 0, s === !1 || s === void 0 && u !== f)
      return !1;
  }
  return !0;
}, ye = "-ms-", Bs = "-moz-", ie = "-webkit-", rb = "comm", Gc = "rule", zf = "decl", X_ = "@import", ib = "@keyframes", Q_ = "@layer", eS = Math.abs, Vf = String.fromCharCode, lu = Object.assign;
function tS(t, e) {
  return $e(t, 0) ^ 45 ? (((e << 2 ^ $e(t, 0)) << 2 ^ $e(t, 1)) << 2 ^ $e(t, 2)) << 2 ^ $e(t, 3) : 0;
}
function sb(t) {
  return t.trim();
}
function On(t, e) {
  return (t = e.exec(t)) ? t[0] : t;
}
function Y(t, e, n) {
  return t.replace(e, n);
}
function Tl(t, e) {
  return t.indexOf(e);
}
function $e(t, e) {
  return t.charCodeAt(e) | 0;
}
function zi(t, e, n) {
  return t.slice(e, n);
}
function on(t) {
  return t.length;
}
function ob(t) {
  return t.length;
}
function Ms(t, e) {
  return e.push(t), t;
}
function nS(t, e) {
  return t.map(e).join("");
}
function Zp(t, e) {
  return t.filter(function(n) {
    return !On(n, e);
  });
}
var Yc = 1, Vi = 1, lb = 0, It = 0, Me = 0, os = "";
function Kc(t, e, n, r, i, s, o, l) {
  return { value: t, root: e, parent: n, type: r, props: i, children: s, line: Yc, column: Vi, length: o, return: "", siblings: l };
}
function Gn(t, e) {
  return lu(Kc("", null, null, "", null, null, 0, t.siblings), t, { length: -t.length }, e);
}
function pi(t) {
  for (; t.root; )
    t = Gn(t.root, { children: [t] });
  Ms(t, t.siblings);
}
function rS() {
  return Me;
}
function iS() {
  return Me = It > 0 ? $e(os, --It) : 0, Vi--, Me === 10 && (Vi = 1, Yc--), Me;
}
function Wt() {
  return Me = It < lb ? $e(os, It++) : 0, Vi++, Me === 10 && (Vi = 1, Yc++), Me;
}
function $r() {
  return $e(os, It);
}
function Ml() {
  return It;
}
function Jc(t, e) {
  return zi(os, t, e);
}
function cu(t) {
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
function sS(t) {
  return Yc = Vi = 1, lb = on(os = t), It = 0, [];
}
function oS(t) {
  return os = "", t;
}
function ja(t) {
  return sb(Jc(It - 1, au(t === 91 ? t + 2 : t === 40 ? t + 1 : t)));
}
function lS(t) {
  for (; (Me = $r()) && Me < 33; )
    Wt();
  return cu(t) > 2 || cu(Me) > 3 ? "" : " ";
}
function cS(t, e) {
  for (; --e && Wt() && !(Me < 48 || Me > 102 || Me > 57 && Me < 65 || Me > 70 && Me < 97); )
    ;
  return Jc(t, Ml() + (e < 6 && $r() == 32 && Wt() == 32));
}
function au(t) {
  for (; Wt(); )
    switch (Me) {
      case t:
        return It;
      case 34:
      case 39:
        t !== 34 && t !== 39 && au(Me);
        break;
      case 40:
        t === 41 && au(t);
        break;
      case 92:
        Wt();
        break;
    }
  return It;
}
function aS(t, e) {
  for (; Wt() && t + Me !== 47 + 10; )
    if (t + Me === 42 + 42 && $r() === 47)
      break;
  return "/*" + Jc(e, It - 1) + "*" + Vf(t === 47 ? t : Wt());
}
function hS(t) {
  for (; !cu($r()); )
    Wt();
  return Jc(t, It);
}
function uS(t) {
  return oS(Ol("", null, null, null, [""], t = sS(t), 0, [0], t));
}
function Ol(t, e, n, r, i, s, o, l, c) {
  for (var a = 0, h = 0, u = o, f = 0, d = 0, p = 0, g = 1, m = 1, y = 1, b = 0, _ = "", w = i, x = s, v = r, S = _; m; )
    switch (p = b, b = Wt()) {
      case 40:
        if (p != 108 && $e(S, u - 1) == 58) {
          Tl(S += Y(ja(b), "&", "&\f"), "&\f") != -1 && (y = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        S += ja(b);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        S += lS(p);
        break;
      case 92:
        S += cS(Ml() - 1, 7);
        continue;
      case 47:
        switch ($r()) {
          case 42:
          case 47:
            Ms(fS(aS(Wt(), Ml()), e, n, c), c);
            break;
          default:
            S += "/";
        }
        break;
      case 123 * g:
        l[a++] = on(S) * y;
      case 125 * g:
      case 59:
      case 0:
        switch (b) {
          case 0:
          case 125:
            m = 0;
          case 59 + h:
            y == -1 && (S = Y(S, /\f/g, "")), d > 0 && on(S) - u && Ms(d > 32 ? Qp(S + ";", r, n, u - 1, c) : Qp(Y(S, " ", "") + ";", r, n, u - 2, c), c);
            break;
          case 59:
            S += ";";
          default:
            if (Ms(v = Xp(S, e, n, a, h, i, l, _, w = [], x = [], u, s), s), b === 123)
              if (h === 0)
                Ol(S, e, v, v, w, s, u, l, x);
              else
                switch (f === 99 && $e(S, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Ol(t, v, v, r && Ms(Xp(t, v, v, 0, 0, i, l, _, i, w = [], u, x), x), i, x, u, l, r ? w : x);
                    break;
                  default:
                    Ol(S, v, v, v, [""], x, 0, l, x);
                }
        }
        a = h = d = 0, g = y = 1, _ = S = "", u = o;
        break;
      case 58:
        u = 1 + on(S), d = p;
      default:
        if (g < 1) {
          if (b == 123)
            --g;
          else if (b == 125 && g++ == 0 && iS() == 125)
            continue;
        }
        switch (S += Vf(b), b * g) {
          case 38:
            y = h > 0 ? 1 : (S += "\f", -1);
            break;
          case 44:
            l[a++] = (on(S) - 1) * y, y = 1;
            break;
          case 64:
            $r() === 45 && (S += ja(Wt())), f = $r(), h = u = on(_ = S += hS(Ml())), b++;
            break;
          case 45:
            p === 45 && on(S) == 2 && (g = 0);
        }
    }
  return s;
}
function Xp(t, e, n, r, i, s, o, l, c, a, h, u) {
  for (var f = i - 1, d = i === 0 ? s : [""], p = ob(d), g = 0, m = 0, y = 0; g < r; ++g)
    for (var b = 0, _ = zi(t, f + 1, f = eS(m = o[g])), w = t; b < p; ++b)
      (w = sb(m > 0 ? d[b] + " " + _ : Y(_, /&\f/g, d[b]))) && (c[y++] = w);
  return Kc(t, e, n, i === 0 ? Gc : l, c, a, h, u);
}
function fS(t, e, n, r) {
  return Kc(t, e, n, rb, Vf(rS()), zi(t, 2, -2), 0, r);
}
function Qp(t, e, n, r, i) {
  return Kc(t, e, n, zf, zi(t, 0, r), zi(t, r + 1, -1), r, i);
}
function cb(t, e, n) {
  switch (tS(t, e)) {
    case 5103:
      return ie + "print-" + t + t;
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
      return ie + t + t;
    case 4789:
      return Bs + t + t;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return ie + t + Bs + t + ye + t + t;
    case 5936:
      switch ($e(t, e + 11)) {
        case 114:
          return ie + t + ye + Y(t, /[svh]\w+-[tblr]{2}/, "tb") + t;
        case 108:
          return ie + t + ye + Y(t, /[svh]\w+-[tblr]{2}/, "tb-rl") + t;
        case 45:
          return ie + t + ye + Y(t, /[svh]\w+-[tblr]{2}/, "lr") + t;
      }
    case 6828:
    case 4268:
    case 2903:
      return ie + t + ye + t + t;
    case 6165:
      return ie + t + ye + "flex-" + t + t;
    case 5187:
      return ie + t + Y(t, /(\w+).+(:[^]+)/, ie + "box-$1$2" + ye + "flex-$1$2") + t;
    case 5443:
      return ie + t + ye + "flex-item-" + Y(t, /flex-|-self/g, "") + (On(t, /flex-|baseline/) ? "" : ye + "grid-row-" + Y(t, /flex-|-self/g, "")) + t;
    case 4675:
      return ie + t + ye + "flex-line-pack" + Y(t, /align-content|flex-|-self/g, "") + t;
    case 5548:
      return ie + t + ye + Y(t, "shrink", "negative") + t;
    case 5292:
      return ie + t + ye + Y(t, "basis", "preferred-size") + t;
    case 6060:
      return ie + "box-" + Y(t, "-grow", "") + ie + t + ye + Y(t, "grow", "positive") + t;
    case 4554:
      return ie + Y(t, /([^-])(transform)/g, "$1" + ie + "$2") + t;
    case 6187:
      return Y(Y(Y(t, /(zoom-|grab)/, ie + "$1"), /(image-set)/, ie + "$1"), t, "") + t;
    case 5495:
    case 3959:
      return Y(t, /(image-set\([^]*)/, ie + "$1$`$1");
    case 4968:
      return Y(Y(t, /(.+:)(flex-)?(.*)/, ie + "box-pack:$3" + ye + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + ie + t + t;
    case 4200:
      if (!On(t, /flex-|baseline/))
        return ye + "grid-column-align" + zi(t, e) + t;
      break;
    case 2592:
    case 3360:
      return ye + Y(t, "template-", "") + t;
    case 4384:
    case 3616:
      return n && n.some(function(r, i) {
        return e = i, On(r.props, /grid-\w+-end/);
      }) ? ~Tl(t + (n = n[e].value), "span") ? t : ye + Y(t, "-start", "") + t + ye + "grid-row-span:" + (~Tl(n, "span") ? On(n, /\d+/) : +On(n, /\d+/) - +On(t, /\d+/)) + ";" : ye + Y(t, "-start", "") + t;
    case 4896:
    case 4128:
      return n && n.some(function(r) {
        return On(r.props, /grid-\w+-start/);
      }) ? t : ye + Y(Y(t, "-end", "-span"), "span ", "") + t;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Y(t, /(.+)-inline(.+)/, ie + "$1$2") + t;
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
      if (on(t) - 1 - e > 6)
        switch ($e(t, e + 1)) {
          case 109:
            if ($e(t, e + 4) !== 45)
              break;
          case 102:
            return Y(t, /(.+:)(.+)-([^]+)/, "$1" + ie + "$2-$3$1" + Bs + ($e(t, e + 3) == 108 ? "$3" : "$2-$3")) + t;
          case 115:
            return ~Tl(t, "stretch") ? cb(Y(t, "stretch", "fill-available"), e, n) + t : t;
        }
      break;
    case 5152:
    case 5920:
      return Y(t, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(r, i, s, o, l, c, a) {
        return ye + i + ":" + s + a + (o ? ye + i + "-span:" + (l ? c : +c - +s) + a : "") + t;
      });
    case 4949:
      if ($e(t, e + 6) === 121)
        return Y(t, ":", ":" + ie) + t;
      break;
    case 6444:
      switch ($e(t, $e(t, 14) === 45 ? 18 : 11)) {
        case 120:
          return Y(t, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + ie + ($e(t, 14) === 45 ? "inline-" : "") + "box$3$1" + ie + "$2$3$1" + ye + "$2box$3") + t;
        case 100:
          return Y(t, ":", ":" + ye) + t;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return Y(t, "scroll-", "scroll-snap-") + t;
  }
  return t;
}
function Xl(t, e) {
  for (var n = "", r = 0; r < t.length; r++)
    n += e(t[r], r, t, e) || "";
  return n;
}
function dS(t, e, n, r) {
  switch (t.type) {
    case Q_:
      if (t.children.length)
        break;
    case X_:
    case zf:
      return t.return = t.return || t.value;
    case rb:
      return "";
    case ib:
      return t.return = t.value + "{" + Xl(t.children, r) + "}";
    case Gc:
      if (!on(t.value = t.props.join(",")))
        return "";
  }
  return on(n = Xl(t.children, r)) ? t.return = t.value + "{" + n + "}" : "";
}
function pS(t) {
  var e = ob(t);
  return function(n, r, i, s) {
    for (var o = "", l = 0; l < e; l++)
      o += t[l](n, r, i, s) || "";
    return o;
  };
}
function gS(t) {
  return function(e) {
    e.root || (e = e.return) && t(e);
  };
}
function mS(t, e, n, r) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case zf:
        t.return = cb(t.value, t.length, n);
        return;
      case ib:
        return Xl([Gn(t, { value: Y(t.value, "@", "@" + ie) })], r);
      case Gc:
        if (t.length)
          return nS(n = t.props, function(i) {
            switch (On(i, r = /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                pi(Gn(t, { props: [Y(i, /:(read-\w+)/, ":" + Bs + "$1")] })), pi(Gn(t, { props: [i] })), lu(t, { props: Zp(n, r) });
                break;
              case "::placeholder":
                pi(Gn(t, { props: [Y(i, /:(plac\w+)/, ":" + ie + "input-$1")] })), pi(Gn(t, { props: [Y(i, /:(plac\w+)/, ":" + Bs + "$1")] })), pi(Gn(t, { props: [Y(i, /:(plac\w+)/, ye + "input-$1")] })), pi(Gn(t, { props: [i] })), lu(t, { props: Zp(n, r) });
                break;
            }
            return "";
          });
    }
}
var yS = {
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
}, Yr = typeof process < "u" && {} !== void 0 && ({}.REACT_APP_SC_ATTR || {}.SC_ATTR) || "data-styled", Uf = typeof window < "u" && "HTMLElement" in window, bS = Boolean(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && {} !== void 0 && {}.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && {}.REACT_APP_SC_DISABLE_SPEEDY !== "" ? {}.REACT_APP_SC_DISABLE_SPEEDY !== "false" && {}.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && {} !== void 0 && {}.SC_DISABLE_SPEEDY !== void 0 && {}.SC_DISABLE_SPEEDY !== "" ? {}.SC_DISABLE_SPEEDY !== "false" && {}.SC_DISABLE_SPEEDY : {}.NODE_ENV !== "production"), eg = /invalid hook call/i, Go = /* @__PURE__ */ new Set(), wS = function(t, e) {
  if ({}.NODE_ENV !== "production") {
    var n = e ? ' with the id of "'.concat(e, '"') : "", r = "The component ".concat(t).concat(n, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, i = console.error;
    try {
      var s = !0;
      console.error = function(o) {
        for (var l = [], c = 1; c < arguments.length; c++)
          l[c - 1] = arguments[c];
        eg.test(o) ? (s = !1, Go.delete(r)) : i.apply(void 0, qi([o], l, !1));
      }, qf(), s && !Go.has(r) && (console.warn(r), Go.add(r));
    } catch (o) {
      eg.test(o.message) && Go.delete(r);
    } finally {
      console.error = i;
    }
  }
}, Zc = Object.freeze([]), Ui = Object.freeze({});
function vS(t, e, n) {
  return n === void 0 && (n = Ui), t.theme !== n.theme && t.theme || e || n.theme;
}
var hu = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), xS = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, kS = /(^-|-$)/g;
function tg(t) {
  return t.replace(xS, "-").replace(kS, "");
}
var _S = /(a)(d)/gi, ng = function(t) {
  return String.fromCharCode(t + (t > 25 ? 39 : 97));
};
function uu(t) {
  var e, n = "";
  for (e = Math.abs(t); e > 52; e = e / 52 | 0)
    n = ng(e % 52) + n;
  return (ng(e % 52) + n).replace(_S, "$1-$2");
}
var Ga, Lr = function(t, e) {
  for (var n = e.length; n; )
    t = 33 * t ^ e.charCodeAt(--n);
  return t;
}, ab = function(t) {
  return Lr(5381, t);
};
function SS(t) {
  return uu(ab(t) >>> 0);
}
function hb(t) {
  return {}.NODE_ENV !== "production" && typeof t == "string" && t || t.displayName || t.name || "Component";
}
function Ya(t) {
  return typeof t == "string" && ({}.NODE_ENV === "production" || t.charAt(0) === t.charAt(0).toLowerCase());
}
var ub = typeof Symbol == "function" && Symbol.for, fb = ub ? Symbol.for("react.memo") : 60115, CS = ub ? Symbol.for("react.forward_ref") : 60112, AS = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, ES = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, db = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, DS = ((Ga = {})[CS] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, Ga[fb] = db, Ga);
function rg(t) {
  return ("type" in (e = t) && e.type.$$typeof) === fb ? db : "$$typeof" in t ? DS[t.$$typeof] : AS;
  var e;
}
var TS = Object.defineProperty, MS = Object.getOwnPropertyNames, ig = Object.getOwnPropertySymbols, OS = Object.getOwnPropertyDescriptor, LS = Object.getPrototypeOf, sg = Object.prototype;
function pb(t, e, n) {
  if (typeof e != "string") {
    if (sg) {
      var r = LS(e);
      r && r !== sg && pb(t, r, n);
    }
    var i = MS(e);
    ig && (i = i.concat(ig(e)));
    for (var s = rg(t), o = rg(e), l = 0; l < i.length; ++l) {
      var c = i[l];
      if (!(c in ES || n && n[c] || o && c in o || s && c in s)) {
        var a = OS(e, c);
        try {
          TS(t, c, a);
        } catch {
        }
      }
    }
  }
  return t;
}
function Wi(t) {
  return typeof t == "function";
}
function Wf(t) {
  return typeof t == "object" && "styledComponentId" in t;
}
function Nr(t, e) {
  return t && e ? "".concat(t, " ").concat(e) : t || e || "";
}
function og(t, e) {
  if (t.length === 0)
    return "";
  for (var n = t[0], r = 1; r < t.length; r++)
    n += e ? e + t[r] : t[r];
  return n;
}
function ji(t) {
  return t !== null && typeof t == "object" && t.constructor.name === Object.name && !("props" in t && t.$$typeof);
}
function fu(t, e, n) {
  if (n === void 0 && (n = !1), !n && !ji(t) && !Array.isArray(t))
    return e;
  if (Array.isArray(e))
    for (var r = 0; r < e.length; r++)
      t[r] = fu(t[r], e[r]);
  else if (ji(e))
    for (var r in e)
      t[r] = fu(t[r], e[r]);
  return t;
}
function jf(t, e) {
  Object.defineProperty(t, "toString", { value: e });
}
var RS = {}.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function IS() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  for (var n = t[0], r = [], i = 1, s = t.length; i < s; i += 1)
    r.push(t[i]);
  return r.forEach(function(o) {
    n = n.replace(/%[a-z]/, o);
  }), n;
}
function ls(t) {
  for (var e = [], n = 1; n < arguments.length; n++)
    e[n - 1] = arguments[n];
  return {}.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t, " for more information.").concat(e.length > 0 ? " Args: ".concat(e.join(", ")) : "")) : new Error(IS.apply(void 0, qi([RS[t]], e, !1)).trim());
}
var NS = function() {
  function t(e) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = e;
  }
  return t.prototype.indexOfGroup = function(e) {
    for (var n = 0, r = 0; r < e; r++)
      n += this.groupSizes[r];
    return n;
  }, t.prototype.insertRules = function(e, n) {
    if (e >= this.groupSizes.length) {
      for (var r = this.groupSizes, i = r.length, s = i; e >= s; )
        if ((s <<= 1) < 0)
          throw ls(16, "".concat(e));
      this.groupSizes = new Uint32Array(s), this.groupSizes.set(r), this.length = s;
      for (var o = i; o < s; o++)
        this.groupSizes[o] = 0;
    }
    for (var l = this.indexOfGroup(e + 1), c = (o = 0, n.length); o < c; o++)
      this.tag.insertRule(l, n[o]) && (this.groupSizes[e]++, l++);
  }, t.prototype.clearGroup = function(e) {
    if (e < this.length) {
      var n = this.groupSizes[e], r = this.indexOfGroup(e), i = r + n;
      this.groupSizes[e] = 0;
      for (var s = r; s < i; s++)
        this.tag.deleteRule(r);
    }
  }, t.prototype.getGroup = function(e) {
    var n = "";
    if (e >= this.length || this.groupSizes[e] === 0)
      return n;
    for (var r = this.groupSizes[e], i = this.indexOfGroup(e), s = i + r, o = i; o < s; o++)
      n += "".concat(this.tag.getRule(o)).concat(`/*!sc*/
`);
    return n;
  }, t;
}(), Ll = /* @__PURE__ */ new Map(), Ql = /* @__PURE__ */ new Map(), Ka = 1, Yo = function(t) {
  if (Ll.has(t))
    return Ll.get(t);
  for (; Ql.has(Ka); )
    Ka++;
  var e = Ka++;
  if ({}.NODE_ENV !== "production" && ((0 | e) < 0 || e > 1073741824))
    throw ls(16, "".concat(e));
  return Ll.set(t, e), Ql.set(e, t), e;
}, PS = function(t, e) {
  Ll.set(t, e), Ql.set(e, t);
}, FS = "style[".concat(Yr, "][").concat("data-styled-version", '="').concat("6.0.7", '"]'), BS = new RegExp("^".concat(Yr, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), qS = function(t, e, n) {
  for (var r, i = n.split(","), s = 0, o = i.length; s < o; s++)
    (r = i[s]) && t.registerName(e, r);
}, $S = function(t, e) {
  for (var n, r = ((n = e.textContent) !== null && n !== void 0 ? n : "").split(`/*!sc*/
`), i = [], s = 0, o = r.length; s < o; s++) {
    var l = r[s].trim();
    if (l) {
      var c = l.match(BS);
      if (c) {
        var a = 0 | parseInt(c[1], 10), h = c[2];
        a !== 0 && (PS(h, a), qS(t, h, c[3]), t.getTag().insertRules(a, i)), i.length = 0;
      } else
        i.push(l);
    }
  }
};
function HS() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var gb = function(t) {
  var e = document.head, n = t || e, r = document.createElement("style"), i = function(l) {
    var c = Array.from(l.querySelectorAll("style[".concat(Yr, "]")));
    return c[c.length - 1];
  }(n), s = i !== void 0 ? i.nextSibling : null;
  r.setAttribute(Yr, "active"), r.setAttribute("data-styled-version", "6.0.7");
  var o = HS();
  return o && r.setAttribute("nonce", o), n.insertBefore(r, s), r;
}, zS = function() {
  function t(e) {
    this.element = gb(e), this.element.appendChild(document.createTextNode("")), this.sheet = function(n) {
      if (n.sheet)
        return n.sheet;
      for (var r = document.styleSheets, i = 0, s = r.length; i < s; i++) {
        var o = r[i];
        if (o.ownerNode === n)
          return o;
      }
      throw ls(17);
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
}(), VS = function() {
  function t(e) {
    this.element = gb(e), this.nodes = this.element.childNodes, this.length = 0;
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
}(), US = function() {
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
}(), lg = Uf, WS = { isServer: !Uf, useCSSOMInjection: !bS }, mb = function() {
  function t(e, n, r) {
    e === void 0 && (e = Ui), n === void 0 && (n = {});
    var i = this;
    this.options = gt(gt({}, WS), e), this.gs = n, this.names = new Map(r), this.server = !!e.isServer, !this.server && Uf && lg && (lg = !1, function(s) {
      for (var o = document.querySelectorAll(FS), l = 0, c = o.length; l < c; l++) {
        var a = o[l];
        a && a.getAttribute(Yr) !== "active" && ($S(s, a), a.parentNode && a.parentNode.removeChild(a));
      }
    }(this)), jf(this, function() {
      return function(s) {
        for (var o = s.getTag(), l = o.length, c = "", a = function(u) {
          var f = function(y) {
            return Ql.get(y);
          }(u);
          if (f === void 0)
            return "continue";
          var d = s.names.get(f), p = o.getGroup(u);
          if (d === void 0 || p.length === 0)
            return "continue";
          var g = "".concat(Yr, ".g").concat(u, '[id="').concat(f, '"]'), m = "";
          d !== void 0 && d.forEach(function(y) {
            y.length > 0 && (m += "".concat(y, ","));
          }), c += "".concat(p).concat(g, '{content:"').concat(m, '"}').concat(`/*!sc*/
`);
        }, h = 0; h < l; h++)
          a(h);
        return c;
      }(i);
    });
  }
  return t.registerId = function(e) {
    return Yo(e);
  }, t.prototype.reconstructWithOptions = function(e, n) {
    return n === void 0 && (n = !0), new t(gt(gt({}, this.options), e), this.gs, n && this.names || void 0);
  }, t.prototype.allocateGSInstance = function(e) {
    return this.gs[e] = (this.gs[e] || 0) + 1;
  }, t.prototype.getTag = function() {
    return this.tag || (this.tag = (e = function(n) {
      var r = n.useCSSOMInjection, i = n.target;
      return n.isServer ? new US(i) : r ? new zS(i) : new VS(i);
    }(this.options), new NS(e)));
    var e;
  }, t.prototype.hasNameForId = function(e, n) {
    return this.names.has(e) && this.names.get(e).has(n);
  }, t.prototype.registerName = function(e, n) {
    if (Yo(e), this.names.has(e))
      this.names.get(e).add(n);
    else {
      var r = /* @__PURE__ */ new Set();
      r.add(n), this.names.set(e, r);
    }
  }, t.prototype.insertRules = function(e, n, r) {
    this.registerName(e, n), this.getTag().insertRules(Yo(e), r);
  }, t.prototype.clearNames = function(e) {
    this.names.has(e) && this.names.get(e).clear();
  }, t.prototype.clearRules = function(e) {
    this.getTag().clearGroup(Yo(e)), this.clearNames(e);
  }, t.prototype.clearTag = function() {
    this.tag = void 0;
  }, t;
}(), jS = /&/g, GS = /^\s*\/\/.*$/gm;
function yb(t, e) {
  return t.map(function(n) {
    return n.type === "rule" && (n.value = "".concat(e, " ").concat(n.value), n.value = n.value.replaceAll(",", ",".concat(e, " ")), n.props = n.props.map(function(r) {
      return "".concat(e, " ").concat(r);
    })), Array.isArray(n.children) && n.type !== "@keyframes" && (n.children = yb(n.children, e)), n;
  });
}
function bb(t) {
  var e, n, r, i = t === void 0 ? Ui : t, s = i.options, o = s === void 0 ? Ui : s, l = i.plugins, c = l === void 0 ? Zc : l, a = function(f, d, p) {
    return p === n || p.startsWith(n) && p.endsWith(n) && p.replaceAll(n, "").length > 0 ? ".".concat(e) : f;
  }, h = c.slice();
  h.push(function(f) {
    f.type === Gc && f.value.includes("&") && (f.props[0] = f.props[0].replace(jS, n).replace(r, a));
  }), o.prefix && h.push(mS), h.push(dS);
  var u = function(f, d, p, g) {
    d === void 0 && (d = ""), p === void 0 && (p = ""), g === void 0 && (g = "&"), e = g, n = d, r = new RegExp("\\".concat(n, "\\b"), "g");
    var m = f.replace(GS, ""), y = uS(p || d ? "".concat(p, " ").concat(d, " { ").concat(m, " }") : m);
    o.namespace && (y = yb(y, o.namespace));
    var b = [];
    return Xl(y, pS(h.concat(gS(function(_) {
      return b.push(_);
    })))), b;
  };
  return u.hash = c.length ? c.reduce(function(f, d) {
    return d.name || ls(15), Lr(f, d.name);
  }, 5381).toString() : "", u;
}
var YS = new mb(), du = bb(), Gf = Gr.createContext({ shouldForwardProp: void 0, styleSheet: YS, stylis: du });
Gf.Consumer;
var KS = Gr.createContext(void 0);
function pu() {
  return Ky(Gf);
}
function kbe(t) {
  var e = st(t.stylisPlugins), n = e[0], r = e[1], i = pu().styleSheet, s = Rn(function() {
    var l = i;
    return t.sheet ? l = t.sheet : t.target && (l = l.reconstructWithOptions({ target: t.target }, !1)), t.disableCSSOMInjection && (l = l.reconstructWithOptions({ useCSSOMInjection: !1 })), l;
  }, [t.disableCSSOMInjection, t.sheet, t.target, i]), o = Rn(function() {
    return bb({ options: { namespace: t.namespace, prefix: t.enableVendorPrefixes }, plugins: n });
  }, [t.enableVendorPrefixes, t.namespace, n]);
  return Hi(function() {
    Z_(n, t.stylisPlugins) || r(t.stylisPlugins);
  }, [t.stylisPlugins]), Gr.createElement(Gf.Provider, { value: { shouldForwardProp: t.shouldForwardProp, styleSheet: s, stylis: o } }, Gr.createElement(KS.Provider, { value: o }, t.children));
}
var cg = function() {
  function t(e, n) {
    var r = this;
    this.inject = function(i, s) {
      s === void 0 && (s = du);
      var o = r.name + s.hash;
      i.hasNameForId(r.id, o) || i.insertRules(r.id, o, s(r.rules, o, "@keyframes"));
    }, this.name = e, this.id = "sc-keyframes-".concat(e), this.rules = n, jf(this, function() {
      throw ls(12, String(r.name));
    });
  }
  return t.prototype.getName = function(e) {
    return e === void 0 && (e = du), this.name + e.hash;
  }, t;
}(), JS = function(t) {
  return t >= "A" && t <= "Z";
};
function ag(t) {
  for (var e = "", n = 0; n < t.length; n++) {
    var r = t[n];
    if (n === 1 && r === "-" && t[0] === "-")
      return t;
    JS(r) ? e += "-" + r.toLowerCase() : e += r;
  }
  return e.startsWith("ms-") ? "-" + e : e;
}
var wb = function(t) {
  return t == null || t === !1 || t === "";
}, vb = function(t) {
  var e, n, r = [];
  for (var i in t) {
    var s = t[i];
    t.hasOwnProperty(i) && !wb(s) && (Array.isArray(s) && s.isCss || Wi(s) ? r.push("".concat(ag(i), ":"), s, ";") : ji(s) ? r.push.apply(r, qi(qi(["".concat(i, " {")], vb(s), !1), ["}"], !1)) : r.push("".concat(ag(i), ": ").concat((e = i, (n = s) == null || typeof n == "boolean" || n === "" ? "" : typeof n != "number" || n === 0 || e in yS || e.startsWith("--") ? String(n).trim() : "".concat(n, "px")), ";")));
  }
  return r;
};
function Hr(t, e, n, r) {
  if (wb(t))
    return [];
  if (Wf(t))
    return [".".concat(t.styledComponentId)];
  if (Wi(t)) {
    if (!Wi(s = t) || s.prototype && s.prototype.isReactComponent || !e)
      return [t];
    var i = t(e);
    return {}.NODE_ENV === "production" || typeof i != "object" || Array.isArray(i) || i instanceof cg || ji(i) || i === null || console.error("".concat(hb(t), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), Hr(i, e, n, r);
  }
  var s;
  return t instanceof cg ? n ? (t.inject(n, r), [t.getName(r)]) : [t] : ji(t) ? vb(t) : Array.isArray(t) ? Array.prototype.concat.apply(Zc, t.map(function(o) {
    return Hr(o, e, n, r);
  })) : [t.toString()];
}
function ZS(t) {
  for (var e = 0; e < t.length; e += 1) {
    var n = t[e];
    if (Wi(n) && !Wf(n))
      return !1;
  }
  return !0;
}
var XS = ab("6.0.7"), QS = function() {
  function t(e, n, r) {
    this.rules = e, this.staticRulesId = "", this.isStatic = {}.NODE_ENV === "production" && (r === void 0 || r.isStatic) && ZS(e), this.componentId = n, this.baseHash = Lr(XS, n), this.baseStyle = r, mb.registerId(n);
  }
  return t.prototype.generateAndInjectStyles = function(e, n, r) {
    var i = this.baseStyle ? this.baseStyle.generateAndInjectStyles(e, n, r) : "";
    if (this.isStatic && !r.hash)
      if (this.staticRulesId && n.hasNameForId(this.componentId, this.staticRulesId))
        i = Nr(i, this.staticRulesId);
      else {
        var s = og(Hr(this.rules, e, n, r)), o = uu(Lr(this.baseHash, s) >>> 0);
        if (!n.hasNameForId(this.componentId, o)) {
          var l = r(s, ".".concat(o), void 0, this.componentId);
          n.insertRules(this.componentId, o, l);
        }
        i = Nr(i, o), this.staticRulesId = o;
      }
    else {
      for (var c = Lr(this.baseHash, r.hash), a = "", h = 0; h < this.rules.length; h++) {
        var u = this.rules[h];
        if (typeof u == "string")
          a += u, {}.NODE_ENV !== "production" && (c = Lr(c, u));
        else if (u) {
          var f = og(Hr(u, e, n, r));
          c = Lr(c, f), a += f;
        }
      }
      if (a) {
        var d = uu(c >>> 0);
        n.hasNameForId(this.componentId, d) || n.insertRules(this.componentId, d, r(a, ".".concat(d), void 0, this.componentId)), i = Nr(i, d);
      }
    }
    return i;
  }, t;
}(), xb = Gr.createContext(void 0);
xb.Consumer;
var Ja = {}, hg = /* @__PURE__ */ new Set();
function eC(t, e, n) {
  var r = Wf(t), i = t, s = !Ya(t), o = e.attrs, l = o === void 0 ? Zc : o, c = e.componentId, a = c === void 0 ? function(w, x) {
    var v = typeof w != "string" ? "sc" : tg(w);
    Ja[v] = (Ja[v] || 0) + 1;
    var S = "".concat(v, "-").concat(SS("6.0.7" + v + Ja[v]));
    return x ? "".concat(x, "-").concat(S) : S;
  }(e.displayName, e.parentComponentId) : c, h = e.displayName, u = h === void 0 ? function(w) {
    return Ya(w) ? "styled.".concat(w) : "Styled(".concat(hb(w), ")");
  }(t) : h, f = e.displayName && e.componentId ? "".concat(tg(e.displayName), "-").concat(e.componentId) : e.componentId || a, d = r && i.attrs ? i.attrs.concat(l).filter(Boolean) : l, p = e.shouldForwardProp;
  if (r && i.shouldForwardProp) {
    var g = i.shouldForwardProp;
    if (e.shouldForwardProp) {
      var m = e.shouldForwardProp;
      p = function(w, x) {
        return g(w, x) && m(w, x);
      };
    } else
      p = g;
  }
  var y = new QS(n, f, r ? i.componentStyle : void 0);
  function b(w, x) {
    return function(v, S, R) {
      var L = v.attrs, D = v.componentStyle, z = v.defaultProps, re = v.foldedComponentIds, J = v.styledComponentId, A = v.target, U = Gr.useContext(xb), $ = pu(), me = v.shouldForwardProp || $.shouldForwardProp;
      ({}).NODE_ENV !== "production" && ru(J);
      var le = function(fe, Wn, de) {
        for (var Et, Ht = gt(gt({}, Wn), { className: void 0, theme: de }), li = 0; li < fe.length; li += 1) {
          var jn = Wi(Et = fe[li]) ? Et(Ht) : Et;
          for (var zt in jn)
            Ht[zt] = zt === "className" ? Nr(Ht[zt], jn[zt]) : zt === "style" ? gt(gt({}, Ht[zt]), jn[zt]) : jn[zt];
        }
        return Wn.className && (Ht.className = Nr(Ht.className, Wn.className)), Ht;
      }(L, S, vS(S, U, z) || Ui), se = le.as || A, ce = {};
      for (var ve in le)
        le[ve] === void 0 || ve[0] === "$" || ve === "as" || ve === "theme" || (ve === "forwardedAs" ? ce.as = le.forwardedAs : me && !me(ve, se) || (ce[ve] = le[ve], me || {}.NODE_ENV !== "development" || t_(ve) || hg.has(ve) || !hu.has(se) || (hg.add(ve), console.warn('styled-components: it looks like an unknown prop "'.concat(ve, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var oe = function(fe, Wn) {
        var de = pu(), Et = fe.generateAndInjectStyles(Wn, de.styleSheet, de.stylis);
        return {}.NODE_ENV !== "production" && ru(Et), Et;
      }(D, le);
      ({}).NODE_ENV !== "production" && v.warnTooManyClasses && v.warnTooManyClasses(oe);
      var $t = Nr(re, J);
      return oe && ($t += " " + oe), le.className && ($t += " " + le.className), ce[Ya(se) && !hu.has(se) ? "class" : "className"] = $t, ce.ref = R, Gt(se, ce);
    }(_, w, x);
  }
  ({}).NODE_ENV !== "production" && (b.displayName = u);
  var _ = Gr.forwardRef(b);
  return _.attrs = d, _.componentStyle = y, _.shouldForwardProp = p, {}.NODE_ENV !== "production" && (_.displayName = u), _.foldedComponentIds = r ? Nr(i.foldedComponentIds, i.styledComponentId) : "", _.styledComponentId = f, _.target = r ? i.target : t, Object.defineProperty(_, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(w) {
    this._foldedDefaultProps = r ? function(x) {
      for (var v = [], S = 1; S < arguments.length; S++)
        v[S - 1] = arguments[S];
      for (var R = 0, L = v; R < L.length; R++)
        fu(x, L[R], !0);
      return x;
    }({}, i.defaultProps, w) : w;
  } }), {}.NODE_ENV !== "production" && (wS(u, f), _.warnTooManyClasses = function(w, x) {
    var v = {}, S = !1;
    return function(R) {
      if (!S && (v[R] = !0, Object.keys(v).length >= 200)) {
        var L = x ? ' with the id of "'.concat(x, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(w).concat(L, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), S = !0, v = {};
      }
    };
  }(u, f)), jf(_, function() {
    return ".".concat(_.styledComponentId);
  }), s && pb(_, t, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), _;
}
function ug(t, e) {
  for (var n = [t[0]], r = 0, i = e.length; r < i; r += 1)
    n.push(e[r], t[r + 1]);
  return n;
}
var fg = function(t) {
  return Object.assign(t, { isCss: !0 });
};
function Ti(t) {
  for (var e = [], n = 1; n < arguments.length; n++)
    e[n - 1] = arguments[n];
  if (Wi(t) || ji(t)) {
    var r = t;
    return fg(Hr(ug(Zc, qi([r], e, !0))));
  }
  var i = t;
  return e.length === 0 && i.length === 1 && typeof i[0] == "string" ? Hr(i) : fg(Hr(ug(i, e)));
}
function gu(t, e, n) {
  if (n === void 0 && (n = Ui), !e)
    throw ls(1, e);
  var r = function(i) {
    for (var s = [], o = 1; o < arguments.length; o++)
      s[o - 1] = arguments[o];
    return t(e, n, Ti.apply(void 0, qi([i], s, !1)));
  };
  return r.attrs = function(i) {
    return gu(t, e, gt(gt({}, n), { attrs: Array.prototype.concat(n.attrs, i).filter(Boolean) }));
  }, r.withConfig = function(i) {
    return gu(t, e, gt(gt({}, n), i));
  }, r;
}
var kb = function(t) {
  return gu(eC, t);
}, Ce = kb;
hu.forEach(function(t) {
  Ce[t] = kb(t);
});
({}).NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var Ko = "__sc-".concat(Yr, "__");
({}).NODE_ENV !== "production" && {}.NODE_ENV !== "test" && typeof window < "u" && (window[Ko] || (window[Ko] = 0), window[Ko] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[Ko] += 1);
var _b = function(t, e, n, r) {
  var i;
  e[0] = 0;
  for (var s = 1; s < e.length; s++) {
    var o = e[s++], l = e[s] ? (e[0] |= o ? 1 : 2, n[e[s++]]) : e[++s];
    o === 3 ? r[0] = l : o === 4 ? r[1] = Object.assign(r[1] || {}, l) : o === 5 ? (r[1] = r[1] || {})[e[++s]] = l : o === 6 ? r[1][e[++s]] += l + "" : o ? (i = t.apply(l, _b(t, l, n, ["", null])), r.push(i), l[0] ? e[0] |= 2 : (e[s - 2] = 0, e[s] = i)) : r.push(l);
  }
  return r;
}, dg = /* @__PURE__ */ new Map();
function tC(t) {
  var e = dg.get(this);
  return e || (e = /* @__PURE__ */ new Map(), dg.set(this, e)), (e = _b(this, e.get(t) || (e.set(t, e = function(n) {
    for (var r, i, s = 1, o = "", l = "", c = [0], a = function(f) {
      s === 1 && (f || (o = o.replace(/^\s*\n\s*|\s*\n\s*$/g, ""))) ? c.push(0, f, o) : s === 3 && (f || o) ? (c.push(3, f, o), s = 2) : s === 2 && o === "..." && f ? c.push(4, f, 0) : s === 2 && o && !f ? c.push(5, 0, !0, o) : s >= 5 && ((o || !f && s === 5) && (c.push(s, 0, o, i), s = 6), f && (c.push(s, f, 0, i), s = 6)), o = "";
    }, h = 0; h < n.length; h++) {
      h && (s === 1 && a(), a(h));
      for (var u = 0; u < n[h].length; u++)
        r = n[h][u], s === 1 ? r === "<" ? (a(), c = [c], s = 3) : o += r : s === 4 ? o === "--" && r === ">" ? (s = 1, o = "") : o = r + o[0] : l ? r === l ? l = "" : o += r : r === '"' || r === "'" ? l = r : r === ">" ? (a(), s = 1) : s && (r === "=" ? (s = 5, i = o, o = "") : r === "/" && (s < 5 || n[h][u + 1] === ">") ? (a(), s === 3 && (c = c[0]), s = c, (c = c[0]).push(2, 0, s), s = 0) : r === " " || r === "	" || r === `
` || r === "\r" ? (a(), s = 2) : o += r), s === 3 && o === "!--" && (s = 4, c = c[0]);
    }
    return a(), c;
  }(t)), e), arguments, [])).length > 1 ? e : e[0];
}
var kt = tC.bind(Gt);
class kr {
  constructor(e) {
    this.state = e;
  }
  run(e) {
    return [];
  }
}
class nC extends kr {
  run(e) {
    const n = new this.state.Token("code_inline", "code", 0);
    return n.content = e.content, [n];
  }
}
const rC = {
  raw: nC
}, mu = "math_inline";
class iC extends kr {
  run(e) {
    const n = new this.state.Token(mu, "span", 0);
    return n.attrSet("class", "math inline"), n.markup = "$", n.content = e.content, [n];
  }
}
function sC(t, e) {
  var n;
  !(!((n = e == null ? void 0 : e.roles) === null || n === void 0) && n.math) || t.renderer.rules[mu] || (t.renderer.rules[mu] = (r, i) => {
    var s, o, l;
    const c = (l = (o = (s = e == null ? void 0 : e.opts) === null || s === void 0 ? void 0 : s.math) === null || o === void 0 ? void 0 : o.renderer) !== null && l !== void 0 ? l : (f) => t.utils.escapeHtml(f), a = r[i], h = a.content.trim(), u = c(h, { displayMode: !1 });
    return `<span class="${a.attrGet("class")}">${u}</span>`;
  });
}
const oC = {
  math: iC
};
function lC(t, e) {
  e.parseRoles && t.inline.ruler.before("backticks", "parse_roles", cC), t.core.ruler.after(e.rolesAfter || "inline", "run_roles", hC(e.roles || {})), t.renderer.rules.role = (n, r) => {
    const i = n[r];
    return `<span class="role-unhandled"><mark>${i.meta.name}</mark><code>${i.content}</code></span>`;
  }, sC(t, e);
}
function cC(t, e) {
  if (t.src.charCodeAt(t.pos - 1) === 92)
    return !1;
  const n = aC.exec(t.src.slice(t.pos));
  if (n == null)
    return !1;
  const [r, i, , s] = n;
  if (t.pos += r.length, !e) {
    const o = t.push("role", "", 0);
    o.meta = { name: i }, o.content = s;
  }
  return !0;
}
let yu;
try {
  yu = new RegExp("^\\{([a-zA-Z_\\-+:]{1,36})\\}(`+)(?!`)(.+?)(?<!`)\\2(?!`)");
} catch {
  yu = /^\{([a-zA-Z_\-+:]{1,36})\}(`+)(?!`)(.+?)\2(?!`)/;
}
const aC = yu;
function hC(t) {
  function e(n) {
    var r;
    for (const i of n.tokens)
      if (i.type === "inline" && i.children) {
        const s = [];
        for (const o of i.children)
          if (o.type === "role" && ((r = o.meta) === null || r === void 0 ? void 0 : r.name) in t)
            try {
              const l = new t[o.meta.name](n), c = new n.Token("parsed_role_open", "", 1);
              c.content = o.content, c.hidden = !0, c.meta = { name: o.meta.name }, c.block = !1;
              const a = [c];
              a.push(...l.run({
                parentMap: i.map,
                content: o.content
              }));
              const h = new n.Token("parsed_role_close", "", -1);
              h.block = !1, h.hidden = !0, a.push(h), s.push(...a);
            } catch (l) {
              const c = new n.Token("role_error", "", 0);
              c.content = o.content, c.info = o.info, c.meta = o.meta, c.map = o.map, c.meta.error_message = l.message, c.meta.error_name = l.name, s.push(c);
            }
          else
            s.push(o);
        i.children = s;
      }
    return !0;
  }
  return e;
}
class pg extends kr {
  run(e) {
    const n = new this.state.Token("sub_open", "sub", 1);
    n.markup = "~";
    const r = new this.state.Token("text", "", 0);
    r.content = e.content;
    const i = new this.state.Token("sub_close", "sub", -1);
    return i.markup = "~", [n, r, i];
  }
}
class gg extends kr {
  run(e) {
    const n = new this.state.Token("sup_open", "sup", 1);
    n.markup = "~";
    const r = new this.state.Token("text", "", 0);
    r.content = e.content;
    const i = new this.state.Token("sup_close", "sup", -1);
    return i.markup = "~", [n, r, i];
  }
}
const uC = /^(.+?)\(([^()]+)\)$/;
class mg extends kr {
  run(e) {
    var n, r, i, s;
    const o = uC.exec(e.content), l = (r = (n = o == null ? void 0 : o[1]) === null || n === void 0 ? void 0 : n.trim()) !== null && r !== void 0 ? r : e.content.trim(), c = (s = (i = o == null ? void 0 : o[2]) === null || i === void 0 ? void 0 : i.trim()) !== null && s !== void 0 ? s : null, a = new this.state.Token("abbr_open", "abbr", 1);
    c && a.attrSet("title", c);
    const h = new this.state.Token("text", "", 0);
    h.content = l;
    const u = new this.state.Token("abbr_close", "abbr", -1);
    return [a, h, u];
  }
}
const fC = {
  subscript: pg,
  sub: pg,
  superscript: gg,
  sup: gg,
  abbreviation: mg,
  abbr: mg
};
var Ks;
(function(t) {
  t.equation = "eq", t.figure = "fig", t.table = "table", t.code = "code", t.section = "sec";
})(Ks || (Ks = {}));
function Xc(t) {
  var e, n;
  const r = (n = (e = t.env) === null || e === void 0 ? void 0 : e.docutils) !== null && n !== void 0 ? n : {};
  return r.targets || (r.targets = {}), r.references || (r.references = []), r.numbering || (r.numbering = {}), t.env.docutils || (t.env.docutils = r), r;
}
function dC(t) {
  var e, n;
  const r = (n = (e = t.meta) === null || e === void 0 ? void 0 : e.docutils) !== null && n !== void 0 ? n : {};
  return t.meta || (t.meta = {}), t.meta.docutils || (t.meta.docutils = r), r;
}
function pC(t, e) {
  const n = Xc(t);
  return n.numbering[e] == null ? n.numbering[e] = 1 : n.numbering[e] += 1, n.numbering[e];
}
function Sb(t, e, n, r, i, s = !1) {
  const o = Xc(t), l = pC(t, n), c = {
    label: r,
    kind: n,
    number: l,
    title: i
  };
  if (!s) {
    const a = dC(e);
    a.target = c, e.attrSet("id", r), o.targets[r] = c;
  }
  return c;
}
function Yf(t, e, n, r) {
  var i;
  e.open.meta = (i = e.open.meta) !== null && i !== void 0 ? i : {}, e.open.meta.kind = n.kind, e.open.meta.label = n.label, e.open.meta.value = n.value, Xc(t).references.push(Object.assign({ label: n.label, tokens: e }, r));
}
const Cb = /^(.+?)<([^<>]+)>$/;
class gC extends kr {
  run(e) {
    const n = new this.state.Token("ref_open", "a", 1), r = new this.state.Token("text", "", 0), i = new this.state.Token("ref_close", "a", -1);
    return Yf(this.state, { open: n, content: r, close: i }, { kind: "eq", label: e.content }, {
      kind: Ks.equation,
      contentFromTarget: (s) => `(${s.number})`
    }), [n, r, i];
  }
}
class mC extends kr {
  run(e) {
    const n = Cb.exec(e.content), [, r, i] = n != null ? n : [], s = r == null ? void 0 : r.trim(), o = new this.state.Token("ref_open", "a", 1), l = new this.state.Token("text", "", 0), c = new this.state.Token("ref_close", "a", -1);
    return Yf(this.state, { open: o, content: l, close: c }, { kind: "numref", label: i || e.content, value: s }, {
      contentFromTarget: (a) => n ? s.replace(/%s/g, String(a.number)).replace(/\{number\}/g, String(a.number)) : a.title.trim()
    }), [o, l, c];
  }
}
class yC extends kr {
  run(e) {
    const n = Cb.exec(e.content), [, r, i] = n != null ? n : [], s = r == null ? void 0 : r.trim(), o = new this.state.Token("ref_open", "a", 1), l = new this.state.Token("text", "", 0), c = new this.state.Token("ref_close", "a", -1);
    return Yf(this.state, { open: o, content: l, close: c }, { kind: "ref", label: i || e.content, value: s }, {
      contentFromTarget: (a) => s || a.title
    }), [o, l, c];
  }
}
const bC = {
  eq: gC,
  ref: yC,
  numref: mC
}, wC = Object.assign(Object.assign(Object.assign(Object.assign({}, rC), fC), oC), bC);
/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */
function Ab(t) {
  return typeof t > "u" || t === null;
}
function vC(t) {
  return typeof t == "object" && t !== null;
}
function xC(t) {
  return Array.isArray(t) ? t : Ab(t) ? [] : [t];
}
function kC(t, e) {
  var n, r, i, s;
  if (e)
    for (s = Object.keys(e), n = 0, r = s.length; n < r; n += 1)
      i = s[n], t[i] = e[i];
  return t;
}
function _C(t, e) {
  var n = "", r;
  for (r = 0; r < e; r += 1)
    n += t;
  return n;
}
function SC(t) {
  return t === 0 && Number.NEGATIVE_INFINITY === 1 / t;
}
var CC = Ab, AC = vC, EC = xC, DC = _C, TC = SC, MC = kC, Ie = {
  isNothing: CC,
  isObject: AC,
  toArray: EC,
  repeat: DC,
  isNegativeZero: TC,
  extend: MC
};
function Eb(t, e) {
  var n = "", r = t.reason || "(unknown reason)";
  return t.mark ? (t.mark.name && (n += 'in "' + t.mark.name + '" '), n += "(" + (t.mark.line + 1) + ":" + (t.mark.column + 1) + ")", !e && t.mark.snippet && (n += `

` + t.mark.snippet), r + " " + n) : r;
}
function Js(t, e) {
  Error.call(this), this.name = "YAMLException", this.reason = t, this.mark = e, this.message = Eb(this, !1), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack || "";
}
Js.prototype = Object.create(Error.prototype);
Js.prototype.constructor = Js;
Js.prototype.toString = function(e) {
  return this.name + ": " + Eb(this, e);
};
var lt = Js;
function Za(t, e, n, r, i) {
  var s = "", o = "", l = Math.floor(i / 2) - 1;
  return r - e > l && (s = " ... ", e = r - l + s.length), n - r > l && (o = " ...", n = r + l - o.length), {
    str: s + t.slice(e, n).replace(/\t/g, "\u2192") + o,
    pos: r - e + s.length
  };
}
function Xa(t, e) {
  return Ie.repeat(" ", e - t.length) + t;
}
function OC(t, e) {
  if (e = Object.create(e || null), !t.buffer)
    return null;
  e.maxLength || (e.maxLength = 79), typeof e.indent != "number" && (e.indent = 1), typeof e.linesBefore != "number" && (e.linesBefore = 3), typeof e.linesAfter != "number" && (e.linesAfter = 2);
  for (var n = /\r?\n|\r|\0/g, r = [0], i = [], s, o = -1; s = n.exec(t.buffer); )
    i.push(s.index), r.push(s.index + s[0].length), t.position <= s.index && o < 0 && (o = r.length - 2);
  o < 0 && (o = r.length - 1);
  var l = "", c, a, h = Math.min(t.line + e.linesAfter, i.length).toString().length, u = e.maxLength - (e.indent + h + 3);
  for (c = 1; c <= e.linesBefore && !(o - c < 0); c++)
    a = Za(
      t.buffer,
      r[o - c],
      i[o - c],
      t.position - (r[o] - r[o - c]),
      u
    ), l = Ie.repeat(" ", e.indent) + Xa((t.line - c + 1).toString(), h) + " | " + a.str + `
` + l;
  for (a = Za(t.buffer, r[o], i[o], t.position, u), l += Ie.repeat(" ", e.indent) + Xa((t.line + 1).toString(), h) + " | " + a.str + `
`, l += Ie.repeat("-", e.indent + h + 3 + a.pos) + `^
`, c = 1; c <= e.linesAfter && !(o + c >= i.length); c++)
    a = Za(
      t.buffer,
      r[o + c],
      i[o + c],
      t.position - (r[o] - r[o + c]),
      u
    ), l += Ie.repeat(" ", e.indent) + Xa((t.line + c + 1).toString(), h) + " | " + a.str + `
`;
  return l.replace(/\n$/, "");
}
var LC = OC, RC = [
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
], IC = [
  "scalar",
  "sequence",
  "mapping"
];
function NC(t) {
  var e = {};
  return t !== null && Object.keys(t).forEach(function(n) {
    t[n].forEach(function(r) {
      e[String(r)] = n;
    });
  }), e;
}
function PC(t, e) {
  if (e = e || {}, Object.keys(e).forEach(function(n) {
    if (RC.indexOf(n) === -1)
      throw new lt('Unknown option "' + n + '" is met in definition of "' + t + '" YAML type.');
  }), this.options = e, this.tag = t, this.kind = e.kind || null, this.resolve = e.resolve || function() {
    return !0;
  }, this.construct = e.construct || function(n) {
    return n;
  }, this.instanceOf = e.instanceOf || null, this.predicate = e.predicate || null, this.represent = e.represent || null, this.representName = e.representName || null, this.defaultStyle = e.defaultStyle || null, this.multi = e.multi || !1, this.styleAliases = NC(e.styleAliases || null), IC.indexOf(this.kind) === -1)
    throw new lt('Unknown kind "' + this.kind + '" is specified for "' + t + '" YAML type.');
}
var je = PC;
function yg(t, e) {
  var n = [];
  return t[e].forEach(function(r) {
    var i = n.length;
    n.forEach(function(s, o) {
      s.tag === r.tag && s.kind === r.kind && s.multi === r.multi && (i = o);
    }), n[i] = r;
  }), n;
}
function FC() {
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
function bu(t) {
  return this.extend(t);
}
bu.prototype.extend = function(e) {
  var n = [], r = [];
  if (e instanceof je)
    r.push(e);
  else if (Array.isArray(e))
    r = r.concat(e);
  else if (e && (Array.isArray(e.implicit) || Array.isArray(e.explicit)))
    e.implicit && (n = n.concat(e.implicit)), e.explicit && (r = r.concat(e.explicit));
  else
    throw new lt("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");
  n.forEach(function(s) {
    if (!(s instanceof je))
      throw new lt("Specified list of YAML types (or a single Type object) contains a non-Type object.");
    if (s.loadKind && s.loadKind !== "scalar")
      throw new lt("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");
    if (s.multi)
      throw new lt("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.");
  }), r.forEach(function(s) {
    if (!(s instanceof je))
      throw new lt("Specified list of YAML types (or a single Type object) contains a non-Type object.");
  });
  var i = Object.create(bu.prototype);
  return i.implicit = (this.implicit || []).concat(n), i.explicit = (this.explicit || []).concat(r), i.compiledImplicit = yg(i, "implicit"), i.compiledExplicit = yg(i, "explicit"), i.compiledTypeMap = FC(i.compiledImplicit, i.compiledExplicit), i;
};
var Db = bu, Tb = new je("tag:yaml.org,2002:str", {
  kind: "scalar",
  construct: function(t) {
    return t !== null ? t : "";
  }
}), Mb = new je("tag:yaml.org,2002:seq", {
  kind: "sequence",
  construct: function(t) {
    return t !== null ? t : [];
  }
}), Ob = new je("tag:yaml.org,2002:map", {
  kind: "mapping",
  construct: function(t) {
    return t !== null ? t : {};
  }
}), Lb = new Db({
  explicit: [
    Tb,
    Mb,
    Ob
  ]
});
function BC(t) {
  if (t === null)
    return !0;
  var e = t.length;
  return e === 1 && t === "~" || e === 4 && (t === "null" || t === "Null" || t === "NULL");
}
function qC() {
  return null;
}
function $C(t) {
  return t === null;
}
var Rb = new je("tag:yaml.org,2002:null", {
  kind: "scalar",
  resolve: BC,
  construct: qC,
  predicate: $C,
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
function HC(t) {
  if (t === null)
    return !1;
  var e = t.length;
  return e === 4 && (t === "true" || t === "True" || t === "TRUE") || e === 5 && (t === "false" || t === "False" || t === "FALSE");
}
function zC(t) {
  return t === "true" || t === "True" || t === "TRUE";
}
function VC(t) {
  return Object.prototype.toString.call(t) === "[object Boolean]";
}
var Ib = new je("tag:yaml.org,2002:bool", {
  kind: "scalar",
  resolve: HC,
  construct: zC,
  predicate: VC,
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
function UC(t) {
  return 48 <= t && t <= 57 || 65 <= t && t <= 70 || 97 <= t && t <= 102;
}
function WC(t) {
  return 48 <= t && t <= 55;
}
function jC(t) {
  return 48 <= t && t <= 57;
}
function GC(t) {
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
          if (!UC(t.charCodeAt(n)))
            return !1;
          r = !0;
        }
      return r && i !== "_";
    }
    if (i === "o") {
      for (n++; n < e; n++)
        if (i = t[n], i !== "_") {
          if (!WC(t.charCodeAt(n)))
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
      if (!jC(t.charCodeAt(n)))
        return !1;
      r = !0;
    }
  return !(!r || i === "_");
}
function YC(t) {
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
function KC(t) {
  return Object.prototype.toString.call(t) === "[object Number]" && t % 1 === 0 && !Ie.isNegativeZero(t);
}
var Nb = new je("tag:yaml.org,2002:int", {
  kind: "scalar",
  resolve: GC,
  construct: YC,
  predicate: KC,
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
}), JC = new RegExp(
  "^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"
);
function ZC(t) {
  return !(t === null || !JC.test(t) || t[t.length - 1] === "_");
}
function XC(t) {
  var e, n;
  return e = t.replace(/_/g, "").toLowerCase(), n = e[0] === "-" ? -1 : 1, "+-".indexOf(e[0]) >= 0 && (e = e.slice(1)), e === ".inf" ? n === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY : e === ".nan" ? NaN : n * parseFloat(e, 10);
}
var QC = /^[-+]?[0-9]+e/;
function eA(t, e) {
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
  else if (Ie.isNegativeZero(t))
    return "-0.0";
  return n = t.toString(10), QC.test(n) ? n.replace("e", ".e") : n;
}
function tA(t) {
  return Object.prototype.toString.call(t) === "[object Number]" && (t % 1 !== 0 || Ie.isNegativeZero(t));
}
var Pb = new je("tag:yaml.org,2002:float", {
  kind: "scalar",
  resolve: ZC,
  construct: XC,
  predicate: tA,
  represent: eA,
  defaultStyle: "lowercase"
}), Fb = Lb.extend({
  implicit: [
    Rb,
    Ib,
    Nb,
    Pb
  ]
}), Bb = Fb, qb = new RegExp(
  "^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"
), $b = new RegExp(
  "^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$"
);
function nA(t) {
  return t === null ? !1 : qb.exec(t) !== null || $b.exec(t) !== null;
}
function rA(t) {
  var e, n, r, i, s, o, l, c = 0, a = null, h, u, f;
  if (e = qb.exec(t), e === null && (e = $b.exec(t)), e === null)
    throw new Error("Date resolve error");
  if (n = +e[1], r = +e[2] - 1, i = +e[3], !e[4])
    return new Date(Date.UTC(n, r, i));
  if (s = +e[4], o = +e[5], l = +e[6], e[7]) {
    for (c = e[7].slice(0, 3); c.length < 3; )
      c += "0";
    c = +c;
  }
  return e[9] && (h = +e[10], u = +(e[11] || 0), a = (h * 60 + u) * 6e4, e[9] === "-" && (a = -a)), f = new Date(Date.UTC(n, r, i, s, o, l, c)), a && f.setTime(f.getTime() - a), f;
}
function iA(t) {
  return t.toISOString();
}
var Hb = new je("tag:yaml.org,2002:timestamp", {
  kind: "scalar",
  resolve: nA,
  construct: rA,
  instanceOf: Date,
  represent: iA
});
function sA(t) {
  return t === "<<" || t === null;
}
var zb = new je("tag:yaml.org,2002:merge", {
  kind: "scalar",
  resolve: sA
}), Kf = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;
function oA(t) {
  if (t === null)
    return !1;
  var e, n, r = 0, i = t.length, s = Kf;
  for (n = 0; n < i; n++)
    if (e = s.indexOf(t.charAt(n)), !(e > 64)) {
      if (e < 0)
        return !1;
      r += 6;
    }
  return r % 8 === 0;
}
function lA(t) {
  var e, n, r = t.replace(/[\r\n=]/g, ""), i = r.length, s = Kf, o = 0, l = [];
  for (e = 0; e < i; e++)
    e % 4 === 0 && e && (l.push(o >> 16 & 255), l.push(o >> 8 & 255), l.push(o & 255)), o = o << 6 | s.indexOf(r.charAt(e));
  return n = i % 4 * 6, n === 0 ? (l.push(o >> 16 & 255), l.push(o >> 8 & 255), l.push(o & 255)) : n === 18 ? (l.push(o >> 10 & 255), l.push(o >> 2 & 255)) : n === 12 && l.push(o >> 4 & 255), new Uint8Array(l);
}
function cA(t) {
  var e = "", n = 0, r, i, s = t.length, o = Kf;
  for (r = 0; r < s; r++)
    r % 3 === 0 && r && (e += o[n >> 18 & 63], e += o[n >> 12 & 63], e += o[n >> 6 & 63], e += o[n & 63]), n = (n << 8) + t[r];
  return i = s % 3, i === 0 ? (e += o[n >> 18 & 63], e += o[n >> 12 & 63], e += o[n >> 6 & 63], e += o[n & 63]) : i === 2 ? (e += o[n >> 10 & 63], e += o[n >> 4 & 63], e += o[n << 2 & 63], e += o[64]) : i === 1 && (e += o[n >> 2 & 63], e += o[n << 4 & 63], e += o[64], e += o[64]), e;
}
function aA(t) {
  return Object.prototype.toString.call(t) === "[object Uint8Array]";
}
var Vb = new je("tag:yaml.org,2002:binary", {
  kind: "scalar",
  resolve: oA,
  construct: lA,
  predicate: aA,
  represent: cA
}), hA = Object.prototype.hasOwnProperty, uA = Object.prototype.toString;
function fA(t) {
  if (t === null)
    return !0;
  var e = [], n, r, i, s, o, l = t;
  for (n = 0, r = l.length; n < r; n += 1) {
    if (i = l[n], o = !1, uA.call(i) !== "[object Object]")
      return !1;
    for (s in i)
      if (hA.call(i, s))
        if (!o)
          o = !0;
        else
          return !1;
    if (!o)
      return !1;
    if (e.indexOf(s) === -1)
      e.push(s);
    else
      return !1;
  }
  return !0;
}
function dA(t) {
  return t !== null ? t : [];
}
var Ub = new je("tag:yaml.org,2002:omap", {
  kind: "sequence",
  resolve: fA,
  construct: dA
}), pA = Object.prototype.toString;
function gA(t) {
  if (t === null)
    return !0;
  var e, n, r, i, s, o = t;
  for (s = new Array(o.length), e = 0, n = o.length; e < n; e += 1) {
    if (r = o[e], pA.call(r) !== "[object Object]" || (i = Object.keys(r), i.length !== 1))
      return !1;
    s[e] = [i[0], r[i[0]]];
  }
  return !0;
}
function mA(t) {
  if (t === null)
    return [];
  var e, n, r, i, s, o = t;
  for (s = new Array(o.length), e = 0, n = o.length; e < n; e += 1)
    r = o[e], i = Object.keys(r), s[e] = [i[0], r[i[0]]];
  return s;
}
var Wb = new je("tag:yaml.org,2002:pairs", {
  kind: "sequence",
  resolve: gA,
  construct: mA
}), yA = Object.prototype.hasOwnProperty;
function bA(t) {
  if (t === null)
    return !0;
  var e, n = t;
  for (e in n)
    if (yA.call(n, e) && n[e] !== null)
      return !1;
  return !0;
}
function wA(t) {
  return t !== null ? t : {};
}
var jb = new je("tag:yaml.org,2002:set", {
  kind: "mapping",
  resolve: bA,
  construct: wA
}), Jf = Bb.extend({
  implicit: [
    Hb,
    zb
  ],
  explicit: [
    Vb,
    Ub,
    Wb,
    jb
  ]
}), ur = Object.prototype.hasOwnProperty, ec = 1, Gb = 2, Yb = 3, tc = 4, Qa = 1, vA = 2, bg = 3, xA = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, kA = /[\x85\u2028\u2029]/, _A = /[,\[\]\{\}]/, Kb = /^(?:!|!!|![a-z\-]+!)$/i, Jb = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
function wg(t) {
  return Object.prototype.toString.call(t);
}
function mn(t) {
  return t === 10 || t === 13;
}
function zr(t) {
  return t === 9 || t === 32;
}
function mt(t) {
  return t === 9 || t === 32 || t === 10 || t === 13;
}
function ki(t) {
  return t === 44 || t === 91 || t === 93 || t === 123 || t === 125;
}
function SA(t) {
  var e;
  return 48 <= t && t <= 57 ? t - 48 : (e = t | 32, 97 <= e && e <= 102 ? e - 97 + 10 : -1);
}
function CA(t) {
  return t === 120 ? 2 : t === 117 ? 4 : t === 85 ? 8 : 0;
}
function AA(t) {
  return 48 <= t && t <= 57 ? t - 48 : -1;
}
function vg(t) {
  return t === 48 ? "\0" : t === 97 ? "\x07" : t === 98 ? "\b" : t === 116 || t === 9 ? "	" : t === 110 ? `
` : t === 118 ? "\v" : t === 102 ? "\f" : t === 114 ? "\r" : t === 101 ? "\x1B" : t === 32 ? " " : t === 34 ? '"' : t === 47 ? "/" : t === 92 ? "\\" : t === 78 ? "\x85" : t === 95 ? "\xA0" : t === 76 ? "\u2028" : t === 80 ? "\u2029" : "";
}
function EA(t) {
  return t <= 65535 ? String.fromCharCode(t) : String.fromCharCode(
    (t - 65536 >> 10) + 55296,
    (t - 65536 & 1023) + 56320
  );
}
var Zb = new Array(256), Xb = new Array(256);
for (var gi = 0; gi < 256; gi++)
  Zb[gi] = vg(gi) ? 1 : 0, Xb[gi] = vg(gi);
function DA(t, e) {
  this.input = t, this.filename = e.filename || null, this.schema = e.schema || Jf, this.onWarning = e.onWarning || null, this.legacy = e.legacy || !1, this.json = e.json || !1, this.listener = e.listener || null, this.implicitTypes = this.schema.compiledImplicit, this.typeMap = this.schema.compiledTypeMap, this.length = t.length, this.position = 0, this.line = 0, this.lineStart = 0, this.lineIndent = 0, this.firstTabInLine = -1, this.documents = [];
}
function Qb(t, e) {
  var n = {
    name: t.filename,
    buffer: t.input.slice(0, -1),
    position: t.position,
    line: t.line,
    column: t.position - t.lineStart
  };
  return n.snippet = LC(n), new lt(e, n);
}
function q(t, e) {
  throw Qb(t, e);
}
function nc(t, e) {
  t.onWarning && t.onWarning.call(null, Qb(t, e));
}
var xg = {
  YAML: function(e, n, r) {
    var i, s, o;
    e.version !== null && q(e, "duplication of %YAML directive"), r.length !== 1 && q(e, "YAML directive accepts exactly one argument"), i = /^([0-9]+)\.([0-9]+)$/.exec(r[0]), i === null && q(e, "ill-formed argument of the YAML directive"), s = parseInt(i[1], 10), o = parseInt(i[2], 10), s !== 1 && q(e, "unacceptable YAML version of the document"), e.version = r[0], e.checkLineBreaks = o < 2, o !== 1 && o !== 2 && nc(e, "unsupported YAML version of the document");
  },
  TAG: function(e, n, r) {
    var i, s;
    r.length !== 2 && q(e, "TAG directive accepts exactly two arguments"), i = r[0], s = r[1], Kb.test(i) || q(e, "ill-formed tag handle (first argument) of the TAG directive"), ur.call(e.tagMap, i) && q(e, 'there is a previously declared suffix for "' + i + '" tag handle'), Jb.test(s) || q(e, "ill-formed tag prefix (second argument) of the TAG directive");
    try {
      s = decodeURIComponent(s);
    } catch {
      q(e, "tag prefix is malformed: " + s);
    }
    e.tagMap[i] = s;
  }
};
function or(t, e, n, r) {
  var i, s, o, l;
  if (e < n) {
    if (l = t.input.slice(e, n), r)
      for (i = 0, s = l.length; i < s; i += 1)
        o = l.charCodeAt(i), o === 9 || 32 <= o && o <= 1114111 || q(t, "expected valid JSON character");
    else
      xA.test(l) && q(t, "the stream contains non-printable characters");
    t.result += l;
  }
}
function kg(t, e, n, r) {
  var i, s, o, l;
  for (Ie.isObject(n) || q(t, "cannot merge mappings; the provided source object is unacceptable"), i = Object.keys(n), o = 0, l = i.length; o < l; o += 1)
    s = i[o], ur.call(e, s) || (e[s] = n[s], r[s] = !0);
}
function _i(t, e, n, r, i, s, o, l, c) {
  var a, h;
  if (Array.isArray(i))
    for (i = Array.prototype.slice.call(i), a = 0, h = i.length; a < h; a += 1)
      Array.isArray(i[a]) && q(t, "nested arrays are not supported inside keys"), typeof i == "object" && wg(i[a]) === "[object Object]" && (i[a] = "[object Object]");
  if (typeof i == "object" && wg(i) === "[object Object]" && (i = "[object Object]"), i = String(i), e === null && (e = {}), r === "tag:yaml.org,2002:merge")
    if (Array.isArray(s))
      for (a = 0, h = s.length; a < h; a += 1)
        kg(t, e, s[a], n);
    else
      kg(t, e, s, n);
  else
    !t.json && !ur.call(n, i) && ur.call(e, i) && (t.line = o || t.line, t.lineStart = l || t.lineStart, t.position = c || t.position, q(t, "duplicated mapping key")), i === "__proto__" ? Object.defineProperty(e, i, {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      value: s
    }) : e[i] = s, delete n[i];
  return e;
}
function Zf(t) {
  var e;
  e = t.input.charCodeAt(t.position), e === 10 ? t.position++ : e === 13 ? (t.position++, t.input.charCodeAt(t.position) === 10 && t.position++) : q(t, "a line break is expected"), t.line += 1, t.lineStart = t.position, t.firstTabInLine = -1;
}
function Oe(t, e, n) {
  for (var r = 0, i = t.input.charCodeAt(t.position); i !== 0; ) {
    for (; zr(i); )
      i === 9 && t.firstTabInLine === -1 && (t.firstTabInLine = t.position), i = t.input.charCodeAt(++t.position);
    if (e && i === 35)
      do
        i = t.input.charCodeAt(++t.position);
      while (i !== 10 && i !== 13 && i !== 0);
    if (mn(i))
      for (Zf(t), i = t.input.charCodeAt(t.position), r++, t.lineIndent = 0; i === 32; )
        t.lineIndent++, i = t.input.charCodeAt(++t.position);
    else
      break;
  }
  return n !== -1 && r !== 0 && t.lineIndent < n && nc(t, "deficient indentation"), r;
}
function Qc(t) {
  var e = t.position, n;
  return n = t.input.charCodeAt(e), !!((n === 45 || n === 46) && n === t.input.charCodeAt(e + 1) && n === t.input.charCodeAt(e + 2) && (e += 3, n = t.input.charCodeAt(e), n === 0 || mt(n)));
}
function Xf(t, e) {
  e === 1 ? t.result += " " : e > 1 && (t.result += Ie.repeat(`
`, e - 1));
}
function TA(t, e, n) {
  var r, i, s, o, l, c, a, h, u = t.kind, f = t.result, d;
  if (d = t.input.charCodeAt(t.position), mt(d) || ki(d) || d === 35 || d === 38 || d === 42 || d === 33 || d === 124 || d === 62 || d === 39 || d === 34 || d === 37 || d === 64 || d === 96 || (d === 63 || d === 45) && (i = t.input.charCodeAt(t.position + 1), mt(i) || n && ki(i)))
    return !1;
  for (t.kind = "scalar", t.result = "", s = o = t.position, l = !1; d !== 0; ) {
    if (d === 58) {
      if (i = t.input.charCodeAt(t.position + 1), mt(i) || n && ki(i))
        break;
    } else if (d === 35) {
      if (r = t.input.charCodeAt(t.position - 1), mt(r))
        break;
    } else {
      if (t.position === t.lineStart && Qc(t) || n && ki(d))
        break;
      if (mn(d))
        if (c = t.line, a = t.lineStart, h = t.lineIndent, Oe(t, !1, -1), t.lineIndent >= e) {
          l = !0, d = t.input.charCodeAt(t.position);
          continue;
        } else {
          t.position = o, t.line = c, t.lineStart = a, t.lineIndent = h;
          break;
        }
    }
    l && (or(t, s, o, !1), Xf(t, t.line - c), s = o = t.position, l = !1), zr(d) || (o = t.position + 1), d = t.input.charCodeAt(++t.position);
  }
  return or(t, s, o, !1), t.result ? !0 : (t.kind = u, t.result = f, !1);
}
function MA(t, e) {
  var n, r, i;
  if (n = t.input.charCodeAt(t.position), n !== 39)
    return !1;
  for (t.kind = "scalar", t.result = "", t.position++, r = i = t.position; (n = t.input.charCodeAt(t.position)) !== 0; )
    if (n === 39)
      if (or(t, r, t.position, !0), n = t.input.charCodeAt(++t.position), n === 39)
        r = t.position, t.position++, i = t.position;
      else
        return !0;
    else
      mn(n) ? (or(t, r, i, !0), Xf(t, Oe(t, !1, e)), r = i = t.position) : t.position === t.lineStart && Qc(t) ? q(t, "unexpected end of the document within a single quoted scalar") : (t.position++, i = t.position);
  q(t, "unexpected end of the stream within a single quoted scalar");
}
function OA(t, e) {
  var n, r, i, s, o, l;
  if (l = t.input.charCodeAt(t.position), l !== 34)
    return !1;
  for (t.kind = "scalar", t.result = "", t.position++, n = r = t.position; (l = t.input.charCodeAt(t.position)) !== 0; ) {
    if (l === 34)
      return or(t, n, t.position, !0), t.position++, !0;
    if (l === 92) {
      if (or(t, n, t.position, !0), l = t.input.charCodeAt(++t.position), mn(l))
        Oe(t, !1, e);
      else if (l < 256 && Zb[l])
        t.result += Xb[l], t.position++;
      else if ((o = CA(l)) > 0) {
        for (i = o, s = 0; i > 0; i--)
          l = t.input.charCodeAt(++t.position), (o = SA(l)) >= 0 ? s = (s << 4) + o : q(t, "expected hexadecimal character");
        t.result += EA(s), t.position++;
      } else
        q(t, "unknown escape sequence");
      n = r = t.position;
    } else
      mn(l) ? (or(t, n, r, !0), Xf(t, Oe(t, !1, e)), n = r = t.position) : t.position === t.lineStart && Qc(t) ? q(t, "unexpected end of the document within a double quoted scalar") : (t.position++, r = t.position);
  }
  q(t, "unexpected end of the stream within a double quoted scalar");
}
function LA(t, e) {
  var n = !0, r, i, s, o = t.tag, l, c = t.anchor, a, h, u, f, d, p = /* @__PURE__ */ Object.create(null), g, m, y, b;
  if (b = t.input.charCodeAt(t.position), b === 91)
    h = 93, d = !1, l = [];
  else if (b === 123)
    h = 125, d = !0, l = {};
  else
    return !1;
  for (t.anchor !== null && (t.anchorMap[t.anchor] = l), b = t.input.charCodeAt(++t.position); b !== 0; ) {
    if (Oe(t, !0, e), b = t.input.charCodeAt(t.position), b === h)
      return t.position++, t.tag = o, t.anchor = c, t.kind = d ? "mapping" : "sequence", t.result = l, !0;
    n ? b === 44 && q(t, "expected the node content, but found ','") : q(t, "missed comma between flow collection entries"), m = g = y = null, u = f = !1, b === 63 && (a = t.input.charCodeAt(t.position + 1), mt(a) && (u = f = !0, t.position++, Oe(t, !0, e))), r = t.line, i = t.lineStart, s = t.position, Gi(t, e, ec, !1, !0), m = t.tag, g = t.result, Oe(t, !0, e), b = t.input.charCodeAt(t.position), (f || t.line === r) && b === 58 && (u = !0, b = t.input.charCodeAt(++t.position), Oe(t, !0, e), Gi(t, e, ec, !1, !0), y = t.result), d ? _i(t, l, p, m, g, y, r, i, s) : u ? l.push(_i(t, null, p, m, g, y, r, i, s)) : l.push(g), Oe(t, !0, e), b = t.input.charCodeAt(t.position), b === 44 ? (n = !0, b = t.input.charCodeAt(++t.position)) : n = !1;
  }
  q(t, "unexpected end of the stream within a flow collection");
}
function RA(t, e) {
  var n, r, i = Qa, s = !1, o = !1, l = e, c = 0, a = !1, h, u;
  if (u = t.input.charCodeAt(t.position), u === 124)
    r = !1;
  else if (u === 62)
    r = !0;
  else
    return !1;
  for (t.kind = "scalar", t.result = ""; u !== 0; )
    if (u = t.input.charCodeAt(++t.position), u === 43 || u === 45)
      Qa === i ? i = u === 43 ? bg : vA : q(t, "repeat of a chomping mode identifier");
    else if ((h = AA(u)) >= 0)
      h === 0 ? q(t, "bad explicit indentation width of a block scalar; it cannot be less than one") : o ? q(t, "repeat of an indentation width identifier") : (l = e + h - 1, o = !0);
    else
      break;
  if (zr(u)) {
    do
      u = t.input.charCodeAt(++t.position);
    while (zr(u));
    if (u === 35)
      do
        u = t.input.charCodeAt(++t.position);
      while (!mn(u) && u !== 0);
  }
  for (; u !== 0; ) {
    for (Zf(t), t.lineIndent = 0, u = t.input.charCodeAt(t.position); (!o || t.lineIndent < l) && u === 32; )
      t.lineIndent++, u = t.input.charCodeAt(++t.position);
    if (!o && t.lineIndent > l && (l = t.lineIndent), mn(u)) {
      c++;
      continue;
    }
    if (t.lineIndent < l) {
      i === bg ? t.result += Ie.repeat(`
`, s ? 1 + c : c) : i === Qa && s && (t.result += `
`);
      break;
    }
    for (r ? zr(u) ? (a = !0, t.result += Ie.repeat(`
`, s ? 1 + c : c)) : a ? (a = !1, t.result += Ie.repeat(`
`, c + 1)) : c === 0 ? s && (t.result += " ") : t.result += Ie.repeat(`
`, c) : t.result += Ie.repeat(`
`, s ? 1 + c : c), s = !0, o = !0, c = 0, n = t.position; !mn(u) && u !== 0; )
      u = t.input.charCodeAt(++t.position);
    or(t, n, t.position, !1);
  }
  return !0;
}
function _g(t, e) {
  var n, r = t.tag, i = t.anchor, s = [], o, l = !1, c;
  if (t.firstTabInLine !== -1)
    return !1;
  for (t.anchor !== null && (t.anchorMap[t.anchor] = s), c = t.input.charCodeAt(t.position); c !== 0 && (t.firstTabInLine !== -1 && (t.position = t.firstTabInLine, q(t, "tab characters must not be used in indentation")), !(c !== 45 || (o = t.input.charCodeAt(t.position + 1), !mt(o)))); ) {
    if (l = !0, t.position++, Oe(t, !0, -1) && t.lineIndent <= e) {
      s.push(null), c = t.input.charCodeAt(t.position);
      continue;
    }
    if (n = t.line, Gi(t, e, Yb, !1, !0), s.push(t.result), Oe(t, !0, -1), c = t.input.charCodeAt(t.position), (t.line === n || t.lineIndent > e) && c !== 0)
      q(t, "bad indentation of a sequence entry");
    else if (t.lineIndent < e)
      break;
  }
  return l ? (t.tag = r, t.anchor = i, t.kind = "sequence", t.result = s, !0) : !1;
}
function IA(t, e, n) {
  var r, i, s, o, l, c, a = t.tag, h = t.anchor, u = {}, f = /* @__PURE__ */ Object.create(null), d = null, p = null, g = null, m = !1, y = !1, b;
  if (t.firstTabInLine !== -1)
    return !1;
  for (t.anchor !== null && (t.anchorMap[t.anchor] = u), b = t.input.charCodeAt(t.position); b !== 0; ) {
    if (!m && t.firstTabInLine !== -1 && (t.position = t.firstTabInLine, q(t, "tab characters must not be used in indentation")), r = t.input.charCodeAt(t.position + 1), s = t.line, (b === 63 || b === 58) && mt(r))
      b === 63 ? (m && (_i(t, u, f, d, p, null, o, l, c), d = p = g = null), y = !0, m = !0, i = !0) : m ? (m = !1, i = !0) : q(t, "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"), t.position += 1, b = r;
    else {
      if (o = t.line, l = t.lineStart, c = t.position, !Gi(t, n, Gb, !1, !0))
        break;
      if (t.line === s) {
        for (b = t.input.charCodeAt(t.position); zr(b); )
          b = t.input.charCodeAt(++t.position);
        if (b === 58)
          b = t.input.charCodeAt(++t.position), mt(b) || q(t, "a whitespace character is expected after the key-value separator within a block mapping"), m && (_i(t, u, f, d, p, null, o, l, c), d = p = g = null), y = !0, m = !1, i = !1, d = t.tag, p = t.result;
        else if (y)
          q(t, "can not read an implicit mapping pair; a colon is missed");
        else
          return t.tag = a, t.anchor = h, !0;
      } else if (y)
        q(t, "can not read a block mapping entry; a multiline key may not be an implicit key");
      else
        return t.tag = a, t.anchor = h, !0;
    }
    if ((t.line === s || t.lineIndent > e) && (m && (o = t.line, l = t.lineStart, c = t.position), Gi(t, e, tc, !0, i) && (m ? p = t.result : g = t.result), m || (_i(t, u, f, d, p, g, o, l, c), d = p = g = null), Oe(t, !0, -1), b = t.input.charCodeAt(t.position)), (t.line === s || t.lineIndent > e) && b !== 0)
      q(t, "bad indentation of a mapping entry");
    else if (t.lineIndent < e)
      break;
  }
  return m && _i(t, u, f, d, p, null, o, l, c), y && (t.tag = a, t.anchor = h, t.kind = "mapping", t.result = u), y;
}
function NA(t) {
  var e, n = !1, r = !1, i, s, o;
  if (o = t.input.charCodeAt(t.position), o !== 33)
    return !1;
  if (t.tag !== null && q(t, "duplication of a tag property"), o = t.input.charCodeAt(++t.position), o === 60 ? (n = !0, o = t.input.charCodeAt(++t.position)) : o === 33 ? (r = !0, i = "!!", o = t.input.charCodeAt(++t.position)) : i = "!", e = t.position, n) {
    do
      o = t.input.charCodeAt(++t.position);
    while (o !== 0 && o !== 62);
    t.position < t.length ? (s = t.input.slice(e, t.position), o = t.input.charCodeAt(++t.position)) : q(t, "unexpected end of the stream within a verbatim tag");
  } else {
    for (; o !== 0 && !mt(o); )
      o === 33 && (r ? q(t, "tag suffix cannot contain exclamation marks") : (i = t.input.slice(e - 1, t.position + 1), Kb.test(i) || q(t, "named tag handle cannot contain such characters"), r = !0, e = t.position + 1)), o = t.input.charCodeAt(++t.position);
    s = t.input.slice(e, t.position), _A.test(s) && q(t, "tag suffix cannot contain flow indicator characters");
  }
  s && !Jb.test(s) && q(t, "tag name cannot contain such characters: " + s);
  try {
    s = decodeURIComponent(s);
  } catch {
    q(t, "tag name is malformed: " + s);
  }
  return n ? t.tag = s : ur.call(t.tagMap, i) ? t.tag = t.tagMap[i] + s : i === "!" ? t.tag = "!" + s : i === "!!" ? t.tag = "tag:yaml.org,2002:" + s : q(t, 'undeclared tag handle "' + i + '"'), !0;
}
function PA(t) {
  var e, n;
  if (n = t.input.charCodeAt(t.position), n !== 38)
    return !1;
  for (t.anchor !== null && q(t, "duplication of an anchor property"), n = t.input.charCodeAt(++t.position), e = t.position; n !== 0 && !mt(n) && !ki(n); )
    n = t.input.charCodeAt(++t.position);
  return t.position === e && q(t, "name of an anchor node must contain at least one character"), t.anchor = t.input.slice(e, t.position), !0;
}
function FA(t) {
  var e, n, r;
  if (r = t.input.charCodeAt(t.position), r !== 42)
    return !1;
  for (r = t.input.charCodeAt(++t.position), e = t.position; r !== 0 && !mt(r) && !ki(r); )
    r = t.input.charCodeAt(++t.position);
  return t.position === e && q(t, "name of an alias node must contain at least one character"), n = t.input.slice(e, t.position), ur.call(t.anchorMap, n) || q(t, 'unidentified alias "' + n + '"'), t.result = t.anchorMap[n], Oe(t, !0, -1), !0;
}
function Gi(t, e, n, r, i) {
  var s, o, l, c = 1, a = !1, h = !1, u, f, d, p, g, m;
  if (t.listener !== null && t.listener("open", t), t.tag = null, t.anchor = null, t.kind = null, t.result = null, s = o = l = tc === n || Yb === n, r && Oe(t, !0, -1) && (a = !0, t.lineIndent > e ? c = 1 : t.lineIndent === e ? c = 0 : t.lineIndent < e && (c = -1)), c === 1)
    for (; NA(t) || PA(t); )
      Oe(t, !0, -1) ? (a = !0, l = s, t.lineIndent > e ? c = 1 : t.lineIndent === e ? c = 0 : t.lineIndent < e && (c = -1)) : l = !1;
  if (l && (l = a || i), (c === 1 || tc === n) && (ec === n || Gb === n ? g = e : g = e + 1, m = t.position - t.lineStart, c === 1 ? l && (_g(t, m) || IA(t, m, g)) || LA(t, g) ? h = !0 : (o && RA(t, g) || MA(t, g) || OA(t, g) ? h = !0 : FA(t) ? (h = !0, (t.tag !== null || t.anchor !== null) && q(t, "alias node should not have any properties")) : TA(t, g, ec === n) && (h = !0, t.tag === null && (t.tag = "?")), t.anchor !== null && (t.anchorMap[t.anchor] = t.result)) : c === 0 && (h = l && _g(t, m))), t.tag === null)
    t.anchor !== null && (t.anchorMap[t.anchor] = t.result);
  else if (t.tag === "?") {
    for (t.result !== null && t.kind !== "scalar" && q(t, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + t.kind + '"'), u = 0, f = t.implicitTypes.length; u < f; u += 1)
      if (p = t.implicitTypes[u], p.resolve(t.result)) {
        t.result = p.construct(t.result), t.tag = p.tag, t.anchor !== null && (t.anchorMap[t.anchor] = t.result);
        break;
      }
  } else if (t.tag !== "!") {
    if (ur.call(t.typeMap[t.kind || "fallback"], t.tag))
      p = t.typeMap[t.kind || "fallback"][t.tag];
    else
      for (p = null, d = t.typeMap.multi[t.kind || "fallback"], u = 0, f = d.length; u < f; u += 1)
        if (t.tag.slice(0, d[u].tag.length) === d[u].tag) {
          p = d[u];
          break;
        }
    p || q(t, "unknown tag !<" + t.tag + ">"), t.result !== null && p.kind !== t.kind && q(t, "unacceptable node kind for !<" + t.tag + '> tag; it should be "' + p.kind + '", not "' + t.kind + '"'), p.resolve(t.result, t.tag) ? (t.result = p.construct(t.result, t.tag), t.anchor !== null && (t.anchorMap[t.anchor] = t.result)) : q(t, "cannot resolve a node with !<" + t.tag + "> explicit tag");
  }
  return t.listener !== null && t.listener("close", t), t.tag !== null || t.anchor !== null || h;
}
function BA(t) {
  var e = t.position, n, r, i, s = !1, o;
  for (t.version = null, t.checkLineBreaks = t.legacy, t.tagMap = /* @__PURE__ */ Object.create(null), t.anchorMap = /* @__PURE__ */ Object.create(null); (o = t.input.charCodeAt(t.position)) !== 0 && (Oe(t, !0, -1), o = t.input.charCodeAt(t.position), !(t.lineIndent > 0 || o !== 37)); ) {
    for (s = !0, o = t.input.charCodeAt(++t.position), n = t.position; o !== 0 && !mt(o); )
      o = t.input.charCodeAt(++t.position);
    for (r = t.input.slice(n, t.position), i = [], r.length < 1 && q(t, "directive name must not be less than one character in length"); o !== 0; ) {
      for (; zr(o); )
        o = t.input.charCodeAt(++t.position);
      if (o === 35) {
        do
          o = t.input.charCodeAt(++t.position);
        while (o !== 0 && !mn(o));
        break;
      }
      if (mn(o))
        break;
      for (n = t.position; o !== 0 && !mt(o); )
        o = t.input.charCodeAt(++t.position);
      i.push(t.input.slice(n, t.position));
    }
    o !== 0 && Zf(t), ur.call(xg, r) ? xg[r](t, r, i) : nc(t, 'unknown document directive "' + r + '"');
  }
  if (Oe(t, !0, -1), t.lineIndent === 0 && t.input.charCodeAt(t.position) === 45 && t.input.charCodeAt(t.position + 1) === 45 && t.input.charCodeAt(t.position + 2) === 45 ? (t.position += 3, Oe(t, !0, -1)) : s && q(t, "directives end mark is expected"), Gi(t, t.lineIndent - 1, tc, !1, !0), Oe(t, !0, -1), t.checkLineBreaks && kA.test(t.input.slice(e, t.position)) && nc(t, "non-ASCII line breaks are interpreted as content"), t.documents.push(t.result), t.position === t.lineStart && Qc(t)) {
    t.input.charCodeAt(t.position) === 46 && (t.position += 3, Oe(t, !0, -1));
    return;
  }
  if (t.position < t.length - 1)
    q(t, "end of the stream or a document separator is expected");
  else
    return;
}
function e1(t, e) {
  t = String(t), e = e || {}, t.length !== 0 && (t.charCodeAt(t.length - 1) !== 10 && t.charCodeAt(t.length - 1) !== 13 && (t += `
`), t.charCodeAt(0) === 65279 && (t = t.slice(1)));
  var n = new DA(t, e), r = t.indexOf("\0");
  for (r !== -1 && (n.position = r, q(n, "null byte is not allowed in input")), n.input += "\0"; n.input.charCodeAt(n.position) === 32; )
    n.lineIndent += 1, n.position += 1;
  for (; n.position < n.length - 1; )
    BA(n);
  return n.documents;
}
function qA(t, e, n) {
  e !== null && typeof e == "object" && typeof n > "u" && (n = e, e = null);
  var r = e1(t, n);
  if (typeof e != "function")
    return r;
  for (var i = 0, s = r.length; i < s; i += 1)
    e(r[i]);
}
function $A(t, e) {
  var n = e1(t, e);
  if (n.length !== 0) {
    if (n.length === 1)
      return n[0];
    throw new lt("expected a single document in the stream, but found more");
  }
}
var HA = qA, zA = $A, t1 = {
  loadAll: HA,
  load: zA
}, n1 = Object.prototype.toString, r1 = Object.prototype.hasOwnProperty, Qf = 65279, VA = 9, Zs = 10, UA = 13, WA = 32, jA = 33, GA = 34, wu = 35, YA = 37, KA = 38, JA = 39, ZA = 42, i1 = 44, XA = 45, rc = 58, QA = 61, eE = 62, tE = 63, nE = 64, s1 = 91, o1 = 93, rE = 96, l1 = 123, iE = 124, c1 = 125, nt = {};
nt[0] = "\\0";
nt[7] = "\\a";
nt[8] = "\\b";
nt[9] = "\\t";
nt[10] = "\\n";
nt[11] = "\\v";
nt[12] = "\\f";
nt[13] = "\\r";
nt[27] = "\\e";
nt[34] = '\\"';
nt[92] = "\\\\";
nt[133] = "\\N";
nt[160] = "\\_";
nt[8232] = "\\L";
nt[8233] = "\\P";
var sE = [
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
], oE = /^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;
function lE(t, e) {
  var n, r, i, s, o, l, c;
  if (e === null)
    return {};
  for (n = {}, r = Object.keys(e), i = 0, s = r.length; i < s; i += 1)
    o = r[i], l = String(e[o]), o.slice(0, 2) === "!!" && (o = "tag:yaml.org,2002:" + o.slice(2)), c = t.compiledTypeMap.fallback[o], c && r1.call(c.styleAliases, l) && (l = c.styleAliases[l]), n[o] = l;
  return n;
}
function cE(t) {
  var e, n, r;
  if (e = t.toString(16).toUpperCase(), t <= 255)
    n = "x", r = 2;
  else if (t <= 65535)
    n = "u", r = 4;
  else if (t <= 4294967295)
    n = "U", r = 8;
  else
    throw new lt("code point within a string may not be greater than 0xFFFFFFFF");
  return "\\" + n + Ie.repeat("0", r - e.length) + e;
}
var aE = 1, Xs = 2;
function hE(t) {
  this.schema = t.schema || Jf, this.indent = Math.max(1, t.indent || 2), this.noArrayIndent = t.noArrayIndent || !1, this.skipInvalid = t.skipInvalid || !1, this.flowLevel = Ie.isNothing(t.flowLevel) ? -1 : t.flowLevel, this.styleMap = lE(this.schema, t.styles || null), this.sortKeys = t.sortKeys || !1, this.lineWidth = t.lineWidth || 80, this.noRefs = t.noRefs || !1, this.noCompatMode = t.noCompatMode || !1, this.condenseFlow = t.condenseFlow || !1, this.quotingType = t.quotingType === '"' ? Xs : aE, this.forceQuotes = t.forceQuotes || !1, this.replacer = typeof t.replacer == "function" ? t.replacer : null, this.implicitTypes = this.schema.compiledImplicit, this.explicitTypes = this.schema.compiledExplicit, this.tag = null, this.result = "", this.duplicates = [], this.usedDuplicates = null;
}
function Sg(t, e) {
  for (var n = Ie.repeat(" ", e), r = 0, i = -1, s = "", o, l = t.length; r < l; )
    i = t.indexOf(`
`, r), i === -1 ? (o = t.slice(r), r = l) : (o = t.slice(r, i + 1), r = i + 1), o.length && o !== `
` && (s += n), s += o;
  return s;
}
function vu(t, e) {
  return `
` + Ie.repeat(" ", t.indent * e);
}
function uE(t, e) {
  var n, r, i;
  for (n = 0, r = t.implicitTypes.length; n < r; n += 1)
    if (i = t.implicitTypes[n], i.resolve(e))
      return !0;
  return !1;
}
function ic(t) {
  return t === WA || t === VA;
}
function Qs(t) {
  return 32 <= t && t <= 126 || 161 <= t && t <= 55295 && t !== 8232 && t !== 8233 || 57344 <= t && t <= 65533 && t !== Qf || 65536 <= t && t <= 1114111;
}
function Cg(t) {
  return Qs(t) && t !== Qf && t !== UA && t !== Zs;
}
function Ag(t, e, n) {
  var r = Cg(t), i = r && !ic(t);
  return (n ? r : r && t !== i1 && t !== s1 && t !== o1 && t !== l1 && t !== c1) && t !== wu && !(e === rc && !i) || Cg(e) && !ic(e) && t === wu || e === rc && i;
}
function fE(t) {
  return Qs(t) && t !== Qf && !ic(t) && t !== XA && t !== tE && t !== rc && t !== i1 && t !== s1 && t !== o1 && t !== l1 && t !== c1 && t !== wu && t !== KA && t !== ZA && t !== jA && t !== iE && t !== QA && t !== eE && t !== JA && t !== GA && t !== YA && t !== nE && t !== rE;
}
function dE(t) {
  return !ic(t) && t !== rc;
}
function Os(t, e) {
  var n = t.charCodeAt(e), r;
  return n >= 55296 && n <= 56319 && e + 1 < t.length && (r = t.charCodeAt(e + 1), r >= 56320 && r <= 57343) ? (n - 55296) * 1024 + r - 56320 + 65536 : n;
}
function a1(t) {
  var e = /^\n* /;
  return e.test(t);
}
var h1 = 1, xu = 2, u1 = 3, f1 = 4, bi = 5;
function pE(t, e, n, r, i, s, o, l) {
  var c, a = 0, h = null, u = !1, f = !1, d = r !== -1, p = -1, g = fE(Os(t, 0)) && dE(Os(t, t.length - 1));
  if (e || o)
    for (c = 0; c < t.length; a >= 65536 ? c += 2 : c++) {
      if (a = Os(t, c), !Qs(a))
        return bi;
      g = g && Ag(a, h, l), h = a;
    }
  else {
    for (c = 0; c < t.length; a >= 65536 ? c += 2 : c++) {
      if (a = Os(t, c), a === Zs)
        u = !0, d && (f = f || c - p - 1 > r && t[p + 1] !== " ", p = c);
      else if (!Qs(a))
        return bi;
      g = g && Ag(a, h, l), h = a;
    }
    f = f || d && c - p - 1 > r && t[p + 1] !== " ";
  }
  return !u && !f ? g && !o && !i(t) ? h1 : s === Xs ? bi : xu : n > 9 && a1(t) ? bi : o ? s === Xs ? bi : xu : f ? f1 : u1;
}
function gE(t, e, n, r, i) {
  t.dump = function() {
    if (e.length === 0)
      return t.quotingType === Xs ? '""' : "''";
    if (!t.noCompatMode && (sE.indexOf(e) !== -1 || oE.test(e)))
      return t.quotingType === Xs ? '"' + e + '"' : "'" + e + "'";
    var s = t.indent * Math.max(1, n), o = t.lineWidth === -1 ? -1 : Math.max(Math.min(t.lineWidth, 40), t.lineWidth - s), l = r || t.flowLevel > -1 && n >= t.flowLevel;
    function c(a) {
      return uE(t, a);
    }
    switch (pE(
      e,
      l,
      t.indent,
      o,
      c,
      t.quotingType,
      t.forceQuotes && !r,
      i
    )) {
      case h1:
        return e;
      case xu:
        return "'" + e.replace(/'/g, "''") + "'";
      case u1:
        return "|" + Eg(e, t.indent) + Dg(Sg(e, s));
      case f1:
        return ">" + Eg(e, t.indent) + Dg(Sg(mE(e, o), s));
      case bi:
        return '"' + yE(e) + '"';
      default:
        throw new lt("impossible error: invalid scalar style");
    }
  }();
}
function Eg(t, e) {
  var n = a1(t) ? String(e) : "", r = t[t.length - 1] === `
`, i = r && (t[t.length - 2] === `
` || t === `
`), s = i ? "+" : r ? "" : "-";
  return n + s + `
`;
}
function Dg(t) {
  return t[t.length - 1] === `
` ? t.slice(0, -1) : t;
}
function mE(t, e) {
  for (var n = /(\n+)([^\n]*)/g, r = function() {
    var a = t.indexOf(`
`);
    return a = a !== -1 ? a : t.length, n.lastIndex = a, Tg(t.slice(0, a), e);
  }(), i = t[0] === `
` || t[0] === " ", s, o; o = n.exec(t); ) {
    var l = o[1], c = o[2];
    s = c[0] === " ", r += l + (!i && !s && c !== "" ? `
` : "") + Tg(c, e), i = s;
  }
  return r;
}
function Tg(t, e) {
  if (t === "" || t[0] === " ")
    return t;
  for (var n = / [^ ]/g, r, i = 0, s, o = 0, l = 0, c = ""; r = n.exec(t); )
    l = r.index, l - i > e && (s = o > i ? o : l, c += `
` + t.slice(i, s), i = s + 1), o = l;
  return c += `
`, t.length - i > e && o > i ? c += t.slice(i, o) + `
` + t.slice(o + 1) : c += t.slice(i), c.slice(1);
}
function yE(t) {
  for (var e = "", n = 0, r, i = 0; i < t.length; n >= 65536 ? i += 2 : i++)
    n = Os(t, i), r = nt[n], !r && Qs(n) ? (e += t[i], n >= 65536 && (e += t[i + 1])) : e += r || cE(n);
  return e;
}
function bE(t, e, n) {
  var r = "", i = t.tag, s, o, l;
  for (s = 0, o = n.length; s < o; s += 1)
    l = n[s], t.replacer && (l = t.replacer.call(n, String(s), l)), (Bn(t, e, l, !1, !1) || typeof l > "u" && Bn(t, e, null, !1, !1)) && (r !== "" && (r += "," + (t.condenseFlow ? "" : " ")), r += t.dump);
  t.tag = i, t.dump = "[" + r + "]";
}
function Mg(t, e, n, r) {
  var i = "", s = t.tag, o, l, c;
  for (o = 0, l = n.length; o < l; o += 1)
    c = n[o], t.replacer && (c = t.replacer.call(n, String(o), c)), (Bn(t, e + 1, c, !0, !0, !1, !0) || typeof c > "u" && Bn(t, e + 1, null, !0, !0, !1, !0)) && ((!r || i !== "") && (i += vu(t, e)), t.dump && Zs === t.dump.charCodeAt(0) ? i += "-" : i += "- ", i += t.dump);
  t.tag = s, t.dump = i || "[]";
}
function wE(t, e, n) {
  var r = "", i = t.tag, s = Object.keys(n), o, l, c, a, h;
  for (o = 0, l = s.length; o < l; o += 1)
    h = "", r !== "" && (h += ", "), t.condenseFlow && (h += '"'), c = s[o], a = n[c], t.replacer && (a = t.replacer.call(n, c, a)), Bn(t, e, c, !1, !1) && (t.dump.length > 1024 && (h += "? "), h += t.dump + (t.condenseFlow ? '"' : "") + ":" + (t.condenseFlow ? "" : " "), Bn(t, e, a, !1, !1) && (h += t.dump, r += h));
  t.tag = i, t.dump = "{" + r + "}";
}
function vE(t, e, n, r) {
  var i = "", s = t.tag, o = Object.keys(n), l, c, a, h, u, f;
  if (t.sortKeys === !0)
    o.sort();
  else if (typeof t.sortKeys == "function")
    o.sort(t.sortKeys);
  else if (t.sortKeys)
    throw new lt("sortKeys must be a boolean or a function");
  for (l = 0, c = o.length; l < c; l += 1)
    f = "", (!r || i !== "") && (f += vu(t, e)), a = o[l], h = n[a], t.replacer && (h = t.replacer.call(n, a, h)), Bn(t, e + 1, a, !0, !0, !0) && (u = t.tag !== null && t.tag !== "?" || t.dump && t.dump.length > 1024, u && (t.dump && Zs === t.dump.charCodeAt(0) ? f += "?" : f += "? "), f += t.dump, u && (f += vu(t, e)), Bn(t, e + 1, h, !0, u) && (t.dump && Zs === t.dump.charCodeAt(0) ? f += ":" : f += ": ", f += t.dump, i += f));
  t.tag = s, t.dump = i || "{}";
}
function Og(t, e, n) {
  var r, i, s, o, l, c;
  for (i = n ? t.explicitTypes : t.implicitTypes, s = 0, o = i.length; s < o; s += 1)
    if (l = i[s], (l.instanceOf || l.predicate) && (!l.instanceOf || typeof e == "object" && e instanceof l.instanceOf) && (!l.predicate || l.predicate(e))) {
      if (n ? l.multi && l.representName ? t.tag = l.representName(e) : t.tag = l.tag : t.tag = "?", l.represent) {
        if (c = t.styleMap[l.tag] || l.defaultStyle, n1.call(l.represent) === "[object Function]")
          r = l.represent(e, c);
        else if (r1.call(l.represent, c))
          r = l.represent[c](e, c);
        else
          throw new lt("!<" + l.tag + '> tag resolver accepts not "' + c + '" style');
        t.dump = r;
      }
      return !0;
    }
  return !1;
}
function Bn(t, e, n, r, i, s, o) {
  t.tag = null, t.dump = n, Og(t, n, !1) || Og(t, n, !0);
  var l = n1.call(t.dump), c = r, a;
  r && (r = t.flowLevel < 0 || t.flowLevel > e);
  var h = l === "[object Object]" || l === "[object Array]", u, f;
  if (h && (u = t.duplicates.indexOf(n), f = u !== -1), (t.tag !== null && t.tag !== "?" || f || t.indent !== 2 && e > 0) && (i = !1), f && t.usedDuplicates[u])
    t.dump = "*ref_" + u;
  else {
    if (h && f && !t.usedDuplicates[u] && (t.usedDuplicates[u] = !0), l === "[object Object]")
      r && Object.keys(t.dump).length !== 0 ? (vE(t, e, t.dump, i), f && (t.dump = "&ref_" + u + t.dump)) : (wE(t, e, t.dump), f && (t.dump = "&ref_" + u + " " + t.dump));
    else if (l === "[object Array]")
      r && t.dump.length !== 0 ? (t.noArrayIndent && !o && e > 0 ? Mg(t, e - 1, t.dump, i) : Mg(t, e, t.dump, i), f && (t.dump = "&ref_" + u + t.dump)) : (bE(t, e, t.dump), f && (t.dump = "&ref_" + u + " " + t.dump));
    else if (l === "[object String]")
      t.tag !== "?" && gE(t, t.dump, e, s, c);
    else {
      if (l === "[object Undefined]")
        return !1;
      if (t.skipInvalid)
        return !1;
      throw new lt("unacceptable kind of an object to dump " + l);
    }
    t.tag !== null && t.tag !== "?" && (a = encodeURI(
      t.tag[0] === "!" ? t.tag.slice(1) : t.tag
    ).replace(/!/g, "%21"), t.tag[0] === "!" ? a = "!" + a : a.slice(0, 18) === "tag:yaml.org,2002:" ? a = "!!" + a.slice(18) : a = "!<" + a + ">", t.dump = a + " " + t.dump);
  }
  return !0;
}
function xE(t, e) {
  var n = [], r = [], i, s;
  for (ku(t, n, r), i = 0, s = r.length; i < s; i += 1)
    e.duplicates.push(n[r[i]]);
  e.usedDuplicates = new Array(s);
}
function ku(t, e, n) {
  var r, i, s;
  if (t !== null && typeof t == "object")
    if (i = e.indexOf(t), i !== -1)
      n.indexOf(i) === -1 && n.push(i);
    else if (e.push(t), Array.isArray(t))
      for (i = 0, s = t.length; i < s; i += 1)
        ku(t[i], e, n);
    else
      for (r = Object.keys(t), i = 0, s = r.length; i < s; i += 1)
        ku(t[r[i]], e, n);
}
function kE(t, e) {
  e = e || {};
  var n = new hE(e);
  n.noRefs || xE(t, n);
  var r = t;
  return n.replacer && (r = n.replacer.call({ "": r }, "", r)), Bn(n, 0, r, !0, !0) ? n.dump + `
` : "";
}
var _E = kE, SE = {
  dump: _E
};
function ed(t, e) {
  return function() {
    throw new Error("Function yaml." + t + " is removed in js-yaml 4. Use yaml." + e + " instead, which is now safe by default.");
  };
}
var CE = je, AE = Db, EE = Lb, DE = Fb, TE = Bb, ME = Jf, OE = t1.load, LE = t1.loadAll, RE = SE.dump, IE = lt, NE = {
  binary: Vb,
  float: Pb,
  map: Ob,
  null: Rb,
  pairs: Wb,
  set: jb,
  timestamp: Hb,
  bool: Ib,
  int: Nb,
  merge: zb,
  omap: Ub,
  seq: Mb,
  str: Tb
}, PE = ed("safeLoad", "load"), FE = ed("safeLoadAll", "loadAll"), BE = ed("safeDump", "dump"), qE = {
  Type: CE,
  Schema: AE,
  FAILSAFE_SCHEMA: EE,
  JSON_SCHEMA: DE,
  CORE_SCHEMA: TE,
  DEFAULT_SCHEMA: ME,
  load: OE,
  loadAll: LE,
  dump: RE,
  YAMLException: IE,
  types: NE,
  safeLoad: PE,
  safeLoadAll: FE,
  safeDump: BE
};
function $E(t, e, n, r, i, s = !0) {
  const o = [];
  for (const c of [...t.core.ruler.__rules__].reverse()) {
    if (c.name === e) {
      s || o.push(c.name);
      break;
    }
    c.name && o.push(c.name);
  }
  t.core.ruler.disable(o);
  let l = [];
  try {
    l = t.parse(n, r);
  } finally {
    t.core.ruler.enable(o);
  }
  for (const c of l)
    c.map = c.map !== null ? [c.map[0] + i, c.map[1] + i] : c.map;
  return l;
}
class ii {
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
    const s = new this.state.Token(e, n, r);
    return (i == null ? void 0 : i.content) !== void 0 && (s.content = i.content), (i == null ? void 0 : i.level) !== void 0 && (s.level = i.level), (i == null ? void 0 : i.map) !== void 0 && (s.map = i.map), (i == null ? void 0 : i.block) !== void 0 && (s.block = i.block), (i == null ? void 0 : i.info) !== void 0 && (s.info = i.info), (i == null ? void 0 : i.meta) !== void 0 && (s.meta = i.meta), (i == null ? void 0 : i.children) !== void 0 && (s.children = i.children), s;
  }
  nestedParse(e, n) {
    return $E(this.state.md, "run_directives", e, this.state.env, n, !0);
  }
}
class er extends Error {
  constructor() {
    super(...arguments), this.name = "DirectiveParsingError";
  }
}
function HE(t, e) {
  const n = t.meta.arg || "", r = t.content;
  let i = r.trim() ? r.split(/\r?\n/) : [], s = 0, o = {};
  (Object.keys(e.option_spec || {}) || e.rawOptions) && ([i, o, s] = d1(i, e));
  let l = [];
  if (!e.required_arguments && !e.optional_arguments ? n && (s = 0, i = [n].concat(i)) : l = zE(n, e), i.length && !i[0].trim() && (i.shift(), s++), i.length && !e.has_content)
    throw new er("Has content but content not allowed");
  return {
    map: t.map ? t.map : [0, 0],
    args: l,
    options: o,
    body: i.join(`
`),
    bodyMap: t.map ? [
      i.length > 0 ? t.map[0] + s : t.map[1],
      i.length > 0 ? t.map[1] - 1 : t.map[1]
    ] : [0, 0]
  };
}
function d1(t, e) {
  let n = 1, r = {}, i = null;
  if (t.length && t[0].startsWith("---")) {
    n++;
    const s = [];
    i = [];
    let o = !1;
    for (const l of t.slice(1)) {
      if (l.startsWith("---")) {
        n++, o = !0;
        continue;
      }
      o ? s.push(l) : (n++, i.push(l));
    }
    t = s;
  } else if (t.length && t[0].startsWith(":")) {
    const s = [];
    i = [];
    let o = !1;
    for (const l of t) {
      if (!o && !l.startsWith(":")) {
        o = !0, s.push(l);
        continue;
      }
      o ? s.push(l) : (n++, i.push(l.slice(1)));
    }
    t = s;
  }
  if (i !== null)
    try {
      const s = qE.load(i.join(`
`));
      if (s !== null && typeof s == "object")
        r = s;
      else
        throw new er(`not dict: ${s}`);
    } catch (s) {
      throw new er(`Invalid options YAML: ${s}`);
    }
  if (e.rawOptions)
    return [t, r, n];
  for (const [s, o] of Object.entries(r)) {
    const l = e.option_spec ? e.option_spec[s] : null;
    if (!l)
      throw new er(`Unknown option: ${s}`);
    let c = o;
    (o === null || o === !1) && (c = "");
    try {
      c = l(`${c || ""}`);
    } catch (a) {
      throw new er(`Invalid option value: (option: '${s}'; value: ${o})
${a}`);
    }
    r[s] = c;
  }
  return [t, r, n];
}
function zE(t, e) {
  var n;
  let r = t.trim() ? (n = t.trim()) === null || n === void 0 ? void 0 : n.split(/\s+/) : [];
  const i = (e.required_arguments || 0) + (e.optional_arguments || 0);
  if (r.length < (e.required_arguments || 0))
    throw new er(`${e.required_arguments} argument(s) required, ${r.length} supplied`);
  if (r.length > i)
    if (e.final_argument_whitespace) {
      const s = t.split(/\s+/);
      r = s.splice(0, i - 1), r.push(s.join(" "));
    } else
      throw new er(`maximum ${i} argument(s) allowed, ${r.length} supplied`);
  return r;
}
function VE(t, e) {
  var n;
  let r = e.directivesAfter || "block";
  (!((n = e.replaceFences) !== null && n !== void 0) || n) && (t.core.ruler.after(r, "fence_to_directive", UE), r = "fence_to_directive"), t.core.ruler.after(r, "run_directives", WE(e.directives || {})), t.renderer.rules.directive = (i, s) => {
    const o = i[s];
    return `<aside class="directive-unhandled">
<header><mark>${o.info}</mark><code> ${o.meta.arg}</code></header>
<pre>${o.content}</pre></aside>
`;
  }, t.renderer.rules.directive_error = (i, s) => {
    const o = i[s];
    let l = "";
    return o.content && (l = `
---
${o.content}`), `<aside class="directive-error">
<header><mark>${o.info}</mark><code> ${o.meta.arg}</code></header>
<pre>${o.meta.error_name}:
${o.meta.error_message}
${l}</pre></aside>
`;
  };
}
function UE(t) {
  for (const e of t.tokens)
    if (e.type === "fence" || e.type === "colon_fence") {
      const n = e.info.match(/^\{([^\s}]+)\}\s*(.*)$/);
      n && (e.type = "directive", e.info = n[1], e.meta = { arg: n[2] });
    }
  return !0;
}
function WE(t) {
  function e(n) {
    const r = [];
    for (const i of n.tokens)
      if (i.type === "directive" && i.info in t)
        try {
          const s = new t[i.info](n), o = HE(i, s), [l, c] = d1(i.content.trim() ? i.content.split(/\r?\n/) : [], s), a = new n.Token("parsed_directive_open", "", 1);
          a.info = i.info, a.hidden = !0, a.content = l.join(`
`).trim(), a.meta = {
            arg: i.meta.arg,
            opts: c
          };
          const h = [a];
          h.push(...s.run(o));
          const u = new n.Token("parsed_directive_close", "", -1);
          u.hidden = !0, h.push(u), h[1].meta = Object.assign(Object.assign({ directive: !0 }, o.options), h[1].meta), r.push(...h);
        } catch (s) {
          const o = new n.Token("directive_error", "", 0);
          o.content = i.content, o.info = i.info, o.meta = i.meta, o.map = i.map, o.meta.error_message = s.message, o.meta.error_name = s.name, r.push(o);
        }
      else
        r.push(i);
    return n.tokens = r, !0;
  }
  return e;
}
function jE(t) {
  return t.toLowerCase().split(/\s+/).join("-").replace(/[^a-z0-9]+/, "-").replace(/^[-0-9]+|-+$/, "");
}
class Kr extends Error {
  constructor() {
    super(...arguments), this.name = "OptionSpecError";
  }
}
const fr = (t) => t, _u = (t) => {
  if (!t)
    throw new Kr("Argument required but none supplied");
  return t;
}, Su = (t) => {
  if (t.trim())
    throw new Kr(`No argument is allowed: "${t}" supplied`);
  return null;
}, cs = (t) => `${t || ""}`.split(/\s+/).map((e) => jE(e));
function p1(t) {
  if (!t)
    throw new Kr("Value is not set");
  const e = Number.parseFloat(t);
  if (Number.isNaN(e) || !Number.isInteger(e))
    throw new Kr(`Value "${t}" is not an integer`);
  return e;
}
function sc(t) {
  const e = p1(t);
  if (e < 0)
    throw new Kr(`Value "${t}" must be positive or zero`);
  return e;
}
const g1 = (t) => t ? sc(t) : null, GE = (t) => (t = `${t || ""}`.replace(/\s+%$/, ""), sc(t));
function m1(t, e) {
  const r = new RegExp(`^(?<number>[0-9.]+)\\s*(?<units>${e.join("|")})$`).exec(t);
  if (!r || !r.groups)
    throw new Kr(`not a positive measure of one of the following units: ${e.join("|")}`);
  return r.groups.number + r.groups.units;
}
const y1 = ["em", "ex", "px", "in", "cm", "mm", "pt", "pc"], b1 = (t) => m1(t, [...y1, ""]), td = (t, e = "") => {
  try {
    return m1(t, [...y1, "%"]);
  } catch {
    return b1(t) + e;
  }
}, YE = (t, e = "") => t.toLowerCase() === "image" ? "image" : td(t, e);
function nd(t) {
  return (e) => {
    if (e = e.toLowerCase().trim(), t.includes(e))
      return e;
    throw new Kr(`must be in: ${t.join("|")}`);
  };
}
const KE = (t) => t;
class Jt extends ii {
  constructor() {
    super(...arguments), this.final_argument_whitespace = !0, this.has_content = !0, this.option_spec = {
      class: cs,
      name: fr
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
    const s = this.createToken("admonition_title_open", "header", 1);
    s.attrSet("class", "admonition-title"), r.push(s);
    const o = e.args[0] || this.title;
    r.push(this.createToken("inline", "", 0, {
      map: [e.map[0], e.map[0]],
      content: o,
      children: []
    })), r.push(this.createToken("admonition_title_close", "header", -1, { block: !0 }));
    const l = this.nestedParse(e.body, e.bodyMap[0]);
    return r.push(...l), r.push(this.createToken("admonition_close", "aside", -1, { block: !0 })), r;
  }
}
class JE extends Jt {
  constructor() {
    super(...arguments), this.required_arguments = 1;
  }
}
class ZE extends Jt {
  constructor() {
    super(...arguments), this.title = "Attention", this.kind = "attention";
  }
}
class XE extends Jt {
  constructor() {
    super(...arguments), this.title = "Caution", this.kind = "caution";
  }
}
class QE extends Jt {
  constructor() {
    super(...arguments), this.title = "Danger", this.kind = "danger";
  }
}
class e2 extends Jt {
  constructor() {
    super(...arguments), this.title = "Error", this.kind = "error";
  }
}
class t2 extends Jt {
  constructor() {
    super(...arguments), this.title = "Important", this.kind = "important";
  }
}
class n2 extends Jt {
  constructor() {
    super(...arguments), this.title = "Hint", this.kind = "hint";
  }
}
class r2 extends Jt {
  constructor() {
    super(...arguments), this.title = "Note", this.kind = "note";
  }
}
class i2 extends Jt {
  constructor() {
    super(...arguments), this.title = "See Also", this.kind = "seealso";
  }
}
class s2 extends Jt {
  constructor() {
    super(...arguments), this.title = "Tip", this.kind = "tip";
  }
}
class o2 extends Jt {
  constructor() {
    super(...arguments), this.title = "Warning", this.kind = "warning";
  }
}
const l2 = {
  admonition: JE,
  attention: ZE,
  caution: XE,
  danger: QE,
  error: e2,
  important: t2,
  hint: n2,
  note: r2,
  seealso: i2,
  tip: s2,
  warning: o2
};
class c2 extends ii {
  constructor() {
    super(...arguments), this.required_arguments = 0, this.optional_arguments = 1, this.final_argument_whitespace = !1, this.has_content = !0, this.option_spec = {
      "number-lines": g1,
      force: Su,
      name: fr,
      class: cs
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
class a2 extends ii {
  constructor() {
    super(...arguments), this.required_arguments = 0, this.optional_arguments = 1, this.final_argument_whitespace = !1, this.has_content = !0, this.option_spec = {
      linenos: Su,
      "lineno-start": p1,
      dedent: g1,
      "emphasize-lines": _u,
      caption: _u,
      force: Su,
      name: fr,
      class: cs
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
class h2 extends ii {
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
const u2 = {
  code: c2,
  "code-block": a2,
  "code-cell": h2
}, w1 = {
  alt: fr,
  height: b1,
  width: td,
  scale: GE,
  target: _u,
  class: cs,
  name: fr
};
class v1 extends ii {
  constructor() {
    super(...arguments), this.required_arguments = 1, this.optional_arguments = 0, this.final_argument_whitespace = !0, this.option_spec = Object.assign(Object.assign({}, w1), { align: nd(["left", "center", "right", "top", "middle", "bottom"]) });
  }
  create_image(e) {
    const n = KE(e.args[0] || ""), r = this.createToken("image", "img", 0, { map: e.map, block: !0 });
    r.attrSet("src", n), r.attrSet("alt", e.options.alt || "");
    const i = [];
    return e.options.alt && this.state.md.inline.parse(e.options.alt, this.state.md, this.state.env, i), r.children = i, e.options.height && r.attrSet("height", e.options.height), e.options.width && r.attrSet("width", e.options.width), e.options.align && r.attrJoin("class", `align-${e.options.align}`), e.options.class && r.attrJoin("class", e.options.class.join(" ")), r;
  }
  run(e) {
    return [this.create_image(e)];
  }
}
class f2 extends v1 {
  constructor() {
    super(...arguments), this.option_spec = Object.assign(Object.assign({}, w1), { align: nd(["left", "center", "right"]), figwidth: YE, figclass: cs }), this.has_content = !0;
  }
  run(e) {
    const n = this.createToken("figure_open", "figure", 1, {
      map: e.map,
      block: !0
    });
    e.options.figclass && n.attrJoin("class", e.options.figclass.join(" ")), e.options.align && n.attrJoin("class", `align-${e.options.align}`), e.options.figwidth && e.options.figwidth !== "image" && n.attrSet("width", e.options.figwidth);
    let r;
    e.options.name && (r = Sb(
      this.state,
      n,
      Ks.figure,
      e.options.name,
      e.body.trim()
    ), n.attrJoin("class", "numbered"));
    const i = this.create_image(e);
    i.map = [e.map[0], e.map[0]];
    let s = [], o = [];
    if (e.body) {
      const [c, ...a] = e.body.split(`

`), h = a.join(`

`), u = e.bodyMap[0], f = this.createToken("figure_caption_open", "figcaption", 1, {
        block: !0
      });
      r && f.attrSet("number", `${r.number}`);
      const d = this.nestedParse(c, u), p = this.createToken("figure_caption_close", "figcaption", -1, {
        block: !0
      });
      if (s = [f, ...d, p], h) {
        const g = u + c.split(`
`).length + 1, m = this.createToken("figure_legend_open", "", 1, {
          block: !0
        }), y = this.nestedParse(h, g), b = this.createToken("figure_legend_close", "", -1, {
          block: !0
        });
        o = [m, ...y, b];
      }
    }
    const l = this.createToken("figure_close", "figure", -1, { block: !0 });
    return [n, i, ...s, ...o, l];
  }
}
const d2 = {
  image: v1,
  figure: f2
};
class rd {
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
      let s = 1;
      for (; n.length > 0 && s !== 0; )
        r = n.pop(), r && (i.push(r), s += r.nesting);
      if (s)
        throw new Error(`unclosed tokens starting: ${i[0]}`);
      this._add_child(i);
    }
  }
  _add_child(e) {
    const n = new rd(e, !1);
    n.parent = this, this.children.push(n);
  }
  to_tokens() {
    function e(r, i) {
      if (r.type === "root")
        for (const s of r.children)
          e(s, i);
      else if (r.token)
        i.push(r.token);
      else {
        if (!r.nester_tokens)
          throw new Error("No nested token available");
        i.push(r.nester_tokens.opening);
        for (const s of r.children)
          e(s, i);
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
class p2 extends ii {
  constructor() {
    super(...arguments), this.required_arguments = 0, this.optional_arguments = 1, this.final_argument_whitespace = !0, this.has_content = !0, this.option_spec = {
      "header-rows": sc,
      "stub-columns": sc,
      width: td,
      widths: fr,
      class: cs,
      name: fr,
      align: nd(["left", "center", "right"])
    };
  }
  run(e) {
    this.assert_has_content(e);
    const n = e.options["header-rows"] || 0, r = this.nestedParse(e.body, e.bodyMap[0]);
    if (r.length < 2 || r[0].type !== "bullet_list_open" || r[r.length - 1].type !== "bullet_list_close")
      throw new er("Content is not a single bullet list");
    const i = [], s = this.createToken("table_open", "table", 1, { map: e.bodyMap });
    e.options.align && s.attrJoin("class", `align-${e.options.align}`), e.options.class && s.attrJoin("class", e.options.class.join(" ")), i.push(s), e.args.length && e.args[0] && (i.push(this.createToken("table_caption_open", "caption", 1)), i.push(this.createToken("inline", "", 0, {
      map: [e.map[0], e.map[0]],
      content: e.args[0],
      children: []
    })), i.push(this.createToken("table_caption_close", "caption", -1)));
    let o = "th";
    n ? (i.push(this.createToken("thead_open", "thead", 1, { level: 1 })), o = "th") : (i.push(this.createToken("tbody_open", "tbody", 1, { level: 1 })), o = "td");
    let l, c = 0;
    for (const a of new rd(r.slice(1, -1)).children) {
      c += 1, this.assert(a.type === "list_item", `list item ${c} not of type 'list_item': ${a.type}`), this.assert(a.children.length === 1 && a.children[0].type === "bullet_list", `list item ${c} content not a nested bullet list`);
      const h = a.children[0].children;
      l === void 0 ? l = h.length : this.assert(h.length === l, `list item ${c} does not contain the same number of columns as previous items`), n && c === n + 1 && (i.push(this.createToken("thead_close", "thead", -1, { level: 1 })), i.push(this.createToken("tbody_open", "tbody", 1, { level: 1 })), o = "td"), i.push(this.createToken("tr_open", "tr", 1, { map: a.map, level: 2 }));
      for (const u of h)
        i.push(this.createToken(`${o}_open`, o, 1, { map: u.map, level: 3 })), i.push(...u.to_tokens().slice(1, -1)), i.push(this.createToken(`${o}_close`, o, -1, { level: 3 }));
      i.push(this.createToken("tr_close", "tr", -1, { level: 2 }));
    }
    if (n && c < n)
      throw new Error(`Insufficient rows (${c}) for required header rows (${n})`);
    return o === "td" ? i.push(this.createToken("tbody_close", "tbody", -1, { level: 1 })) : i.push(this.createToken("thead_close", "thead", -1, { level: 1 })), i.push(this.createToken("table_close", "table", -1)), i;
  }
}
const g2 = {
  "list-table": p2
};
class m2 extends ii {
  constructor() {
    super(...arguments), this.required_arguments = 0, this.optional_arguments = 0, this.final_argument_whitespace = !1, this.has_content = !0, this.option_spec = {
      label: fr
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
      const r = Sb(this.state, n, Ks.equation, e.options.label, "");
      n.attrSet("number", `${r.number}`), n.info = e.options.label, n.meta = { label: e.options.label, numbered: !0, number: r.number };
    }
    return [n];
  }
}
const y2 = {
  math: m2
}, b2 = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, l2), d2), u2), g2), y2);
function w2(t) {
  return (e) => {
    const n = Xc(e);
    return n.references.forEach((r) => {
      const { label: i, tokens: s, contentFromTarget: o } = r, l = (a, h) => (s.open.attrJoin("class", "error"), s.open.tag = s.close.tag = "code", o && h ? s.content.content = o(h) : s.content.content = a, !0), c = n.targets[i];
      if (!c)
        return l(i, {
          kind: r.kind || "",
          label: i,
          title: i,
          number: `"${i}"`
        });
      if (r.kind && c.kind !== r.kind)
        return l(`Reference "${i}" does not match kind "${r.kind}"`);
      s.open.attrSet("href", `#${c.label}`), c.title && s.open.attrSet("title", c.title), o && (s.content.content = o(c).trim());
    }), !0;
  };
}
function v2(t, e) {
  t.core.ruler.push("docutils_number", w2());
}
const x2 = {
  parseRoles: !0,
  replaceFences: !0,
  rolesAfter: "inline",
  directivesAfter: "block",
  directives: b2,
  roles: wC
};
function k2(t, e) {
  const n = Object.assign(Object.assign({}, x2), e);
  t.use(lC, n), t.use(VE, n), t.use(v2, n);
}
/*! @license DOMPurify 2.4.7 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.4.7/LICENSE */
function Zn(t) {
  return Zn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Zn(t);
}
function Cu(t, e) {
  return Cu = Object.setPrototypeOf || function(r, i) {
    return r.__proto__ = i, r;
  }, Cu(t, e);
}
function _2() {
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
function Rl(t, e, n) {
  return _2() ? Rl = Reflect.construct : Rl = function(i, s, o) {
    var l = [null];
    l.push.apply(l, s);
    var c = Function.bind.apply(i, l), a = new c();
    return o && Cu(a, o.prototype), a;
  }, Rl.apply(null, arguments);
}
function Ut(t) {
  return S2(t) || C2(t) || A2(t) || E2();
}
function S2(t) {
  if (Array.isArray(t))
    return Au(t);
}
function C2(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null)
    return Array.from(t);
}
function A2(t, e) {
  if (!!t) {
    if (typeof t == "string")
      return Au(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    if (n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set")
      return Array.from(t);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Au(t, e);
  }
}
function Au(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++)
    r[n] = t[n];
  return r;
}
function E2() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var D2 = Object.hasOwnProperty, Lg = Object.setPrototypeOf, T2 = Object.isFrozen, M2 = Object.getPrototypeOf, O2 = Object.getOwnPropertyDescriptor, ut = Object.freeze, Yt = Object.seal, L2 = Object.create, x1 = typeof Reflect < "u" && Reflect, oc = x1.apply, Eu = x1.construct;
oc || (oc = function(e, n, r) {
  return e.apply(n, r);
});
ut || (ut = function(e) {
  return e;
});
Yt || (Yt = function(e) {
  return e;
});
Eu || (Eu = function(e, n) {
  return Rl(e, Ut(n));
});
var R2 = Nt(Array.prototype.forEach), Rg = Nt(Array.prototype.pop), ks = Nt(Array.prototype.push), Il = Nt(String.prototype.toLowerCase), eh = Nt(String.prototype.toString), I2 = Nt(String.prototype.match), Vt = Nt(String.prototype.replace), N2 = Nt(String.prototype.indexOf), P2 = Nt(String.prototype.trim), it = Nt(RegExp.prototype.test), th = F2(TypeError);
function Nt(t) {
  return function(e) {
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
      r[i - 1] = arguments[i];
    return oc(t, e, r);
  };
}
function F2(t) {
  return function() {
    for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
      n[r] = arguments[r];
    return Eu(t, n);
  };
}
function G(t, e, n) {
  var r;
  n = (r = n) !== null && r !== void 0 ? r : Il, Lg && Lg(t, null);
  for (var i = e.length; i--; ) {
    var s = e[i];
    if (typeof s == "string") {
      var o = n(s);
      o !== s && (T2(e) || (e[i] = o), s = o);
    }
    t[s] = !0;
  }
  return t;
}
function Dr(t) {
  var e = L2(null), n;
  for (n in t)
    oc(D2, t, [n]) === !0 && (e[n] = t[n]);
  return e;
}
function Jo(t, e) {
  for (; t !== null; ) {
    var n = O2(t, e);
    if (n) {
      if (n.get)
        return Nt(n.get);
      if (typeof n.value == "function")
        return Nt(n.value);
    }
    t = M2(t);
  }
  function r(i) {
    return console.warn("fallback value for", i), null;
  }
  return r;
}
var Ig = ut(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), nh = ut(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), rh = ut(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), B2 = ut(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), ih = ut(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]), q2 = ut(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Ng = ut(["#text"]), Pg = ut(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]), sh = ut(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Fg = ut(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Zo = ut(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), $2 = Yt(/\{\{[\w\W]*|[\w\W]*\}\}/gm), H2 = Yt(/<%[\w\W]*|[\w\W]*%>/gm), z2 = Yt(/\${[\w\W]*}/gm), V2 = Yt(/^data-[\-\w.\u00B7-\uFFFF]/), U2 = Yt(/^aria-[\-\w]+$/), W2 = Yt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
), j2 = Yt(/^(?:\w+script|data):/i), G2 = Yt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
), Y2 = Yt(/^html$/i), K2 = function() {
  return typeof window > "u" ? null : window;
}, J2 = function(e, n) {
  if (Zn(e) !== "object" || typeof e.createPolicy != "function")
    return null;
  var r = null, i = "data-tt-policy-suffix";
  n.currentScript && n.currentScript.hasAttribute(i) && (r = n.currentScript.getAttribute(i));
  var s = "dompurify" + (r ? "#" + r : "");
  try {
    return e.createPolicy(s, {
      createHTML: function(l) {
        return l;
      },
      createScriptURL: function(l) {
        return l;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + s + " could not be created."), null;
  }
};
function k1() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : K2(), e = function(k) {
    return k1(k);
  };
  if (e.version = "2.4.7", e.removed = [], !t || !t.document || t.document.nodeType !== 9)
    return e.isSupported = !1, e;
  var n = t.document, r = t.document, i = t.DocumentFragment, s = t.HTMLTemplateElement, o = t.Node, l = t.Element, c = t.NodeFilter, a = t.NamedNodeMap, h = a === void 0 ? t.NamedNodeMap || t.MozNamedAttrMap : a, u = t.HTMLFormElement, f = t.DOMParser, d = t.trustedTypes, p = l.prototype, g = Jo(p, "cloneNode"), m = Jo(p, "nextSibling"), y = Jo(p, "childNodes"), b = Jo(p, "parentNode");
  if (typeof s == "function") {
    var _ = r.createElement("template");
    _.content && _.content.ownerDocument && (r = _.content.ownerDocument);
  }
  var w = J2(d, n), x = w ? w.createHTML("") : "", v = r, S = v.implementation, R = v.createNodeIterator, L = v.createDocumentFragment, D = v.getElementsByTagName, z = n.importNode, re = {};
  try {
    re = Dr(r).documentMode ? r.documentMode : {};
  } catch {
  }
  var J = {};
  e.isSupported = typeof b == "function" && S && S.createHTMLDocument !== void 0 && re !== 9;
  var A = $2, U = H2, $ = z2, me = V2, le = U2, se = j2, ce = G2, ve = W2, oe = null, $t = G({}, [].concat(Ut(Ig), Ut(nh), Ut(rh), Ut(ih), Ut(Ng))), fe = null, Wn = G({}, [].concat(Ut(Pg), Ut(sh), Ut(Fg), Ut(Zo))), de = Object.seal(Object.create(null, {
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
  })), Et = null, Ht = null, li = !0, jn = !0, zt = !1, gp = !0, ci = !1, Ar = !1, Ia = !1, Na = !1, ai = !1, Ho = !1, zo = !1, mp = !0, yp = !1, Uk = "user-content-", Pa = !0, vs = !1, hi = {}, ui = null, bp = G({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), wp = null, vp = G({}, ["audio", "video", "img", "source", "image", "track"]), Fa = null, xp = G({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Vo = "http://www.w3.org/1998/Math/MathML", Uo = "http://www.w3.org/2000/svg", Dn = "http://www.w3.org/1999/xhtml", fi = Dn, Ba = !1, qa = null, Wk = G({}, [Vo, Uo, Dn], eh), Er, jk = ["application/xhtml+xml", "text/html"], Gk = "text/html", Fe, di = null, Yk = r.createElement("form"), kp = function(k) {
    return k instanceof RegExp || k instanceof Function;
  }, $a = function(k) {
    di && di === k || ((!k || Zn(k) !== "object") && (k = {}), k = Dr(k), Er = jk.indexOf(k.PARSER_MEDIA_TYPE) === -1 ? Er = Gk : Er = k.PARSER_MEDIA_TYPE, Fe = Er === "application/xhtml+xml" ? eh : Il, oe = "ALLOWED_TAGS" in k ? G({}, k.ALLOWED_TAGS, Fe) : $t, fe = "ALLOWED_ATTR" in k ? G({}, k.ALLOWED_ATTR, Fe) : Wn, qa = "ALLOWED_NAMESPACES" in k ? G({}, k.ALLOWED_NAMESPACES, eh) : Wk, Fa = "ADD_URI_SAFE_ATTR" in k ? G(
      Dr(xp),
      k.ADD_URI_SAFE_ATTR,
      Fe
    ) : xp, wp = "ADD_DATA_URI_TAGS" in k ? G(
      Dr(vp),
      k.ADD_DATA_URI_TAGS,
      Fe
    ) : vp, ui = "FORBID_CONTENTS" in k ? G({}, k.FORBID_CONTENTS, Fe) : bp, Et = "FORBID_TAGS" in k ? G({}, k.FORBID_TAGS, Fe) : {}, Ht = "FORBID_ATTR" in k ? G({}, k.FORBID_ATTR, Fe) : {}, hi = "USE_PROFILES" in k ? k.USE_PROFILES : !1, li = k.ALLOW_ARIA_ATTR !== !1, jn = k.ALLOW_DATA_ATTR !== !1, zt = k.ALLOW_UNKNOWN_PROTOCOLS || !1, gp = k.ALLOW_SELF_CLOSE_IN_ATTR !== !1, ci = k.SAFE_FOR_TEMPLATES || !1, Ar = k.WHOLE_DOCUMENT || !1, ai = k.RETURN_DOM || !1, Ho = k.RETURN_DOM_FRAGMENT || !1, zo = k.RETURN_TRUSTED_TYPE || !1, Na = k.FORCE_BODY || !1, mp = k.SANITIZE_DOM !== !1, yp = k.SANITIZE_NAMED_PROPS || !1, Pa = k.KEEP_CONTENT !== !1, vs = k.IN_PLACE || !1, ve = k.ALLOWED_URI_REGEXP || ve, fi = k.NAMESPACE || Dn, de = k.CUSTOM_ELEMENT_HANDLING || {}, k.CUSTOM_ELEMENT_HANDLING && kp(k.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (de.tagNameCheck = k.CUSTOM_ELEMENT_HANDLING.tagNameCheck), k.CUSTOM_ELEMENT_HANDLING && kp(k.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (de.attributeNameCheck = k.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), k.CUSTOM_ELEMENT_HANDLING && typeof k.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (de.allowCustomizedBuiltInElements = k.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), ci && (jn = !1), Ho && (ai = !0), hi && (oe = G({}, Ut(Ng)), fe = [], hi.html === !0 && (G(oe, Ig), G(fe, Pg)), hi.svg === !0 && (G(oe, nh), G(fe, sh), G(fe, Zo)), hi.svgFilters === !0 && (G(oe, rh), G(fe, sh), G(fe, Zo)), hi.mathMl === !0 && (G(oe, ih), G(fe, Fg), G(fe, Zo))), k.ADD_TAGS && (oe === $t && (oe = Dr(oe)), G(oe, k.ADD_TAGS, Fe)), k.ADD_ATTR && (fe === Wn && (fe = Dr(fe)), G(fe, k.ADD_ATTR, Fe)), k.ADD_URI_SAFE_ATTR && G(Fa, k.ADD_URI_SAFE_ATTR, Fe), k.FORBID_CONTENTS && (ui === bp && (ui = Dr(ui)), G(ui, k.FORBID_CONTENTS, Fe)), Pa && (oe["#text"] = !0), Ar && G(oe, ["html", "head", "body"]), oe.table && (G(oe, ["tbody"]), delete Et.tbody), ut && ut(k), di = k);
  }, _p = G({}, ["mi", "mo", "mn", "ms", "mtext"]), Sp = G({}, ["foreignobject", "desc", "title", "annotation-xml"]), Kk = G({}, ["title", "style", "font", "a", "script"]), Wo = G({}, nh);
  G(Wo, rh), G(Wo, B2);
  var Ha = G({}, ih);
  G(Ha, q2);
  var Jk = function(k) {
    var E = b(k);
    (!E || !E.tagName) && (E = {
      namespaceURI: fi,
      tagName: "template"
    });
    var M = Il(k.tagName), Q = Il(E.tagName);
    return qa[k.namespaceURI] ? k.namespaceURI === Uo ? E.namespaceURI === Dn ? M === "svg" : E.namespaceURI === Vo ? M === "svg" && (Q === "annotation-xml" || _p[Q]) : Boolean(Wo[M]) : k.namespaceURI === Vo ? E.namespaceURI === Dn ? M === "math" : E.namespaceURI === Uo ? M === "math" && Sp[Q] : Boolean(Ha[M]) : k.namespaceURI === Dn ? E.namespaceURI === Uo && !Sp[Q] || E.namespaceURI === Vo && !_p[Q] ? !1 : !Ha[M] && (Kk[M] || !Wo[M]) : !!(Er === "application/xhtml+xml" && qa[k.namespaceURI]) : !1;
  }, Tn = function(k) {
    ks(e.removed, {
      element: k
    });
    try {
      k.parentNode.removeChild(k);
    } catch {
      try {
        k.outerHTML = x;
      } catch {
        k.remove();
      }
    }
  }, za = function(k, E) {
    try {
      ks(e.removed, {
        attribute: E.getAttributeNode(k),
        from: E
      });
    } catch {
      ks(e.removed, {
        attribute: null,
        from: E
      });
    }
    if (E.removeAttribute(k), k === "is" && !fe[k])
      if (ai || Ho)
        try {
          Tn(E);
        } catch {
        }
      else
        try {
          E.setAttribute(k, "");
        } catch {
        }
  }, Cp = function(k) {
    var E, M;
    if (Na)
      k = "<remove></remove>" + k;
    else {
      var Q = I2(k, /^[\r\n\t ]+/);
      M = Q && Q[0];
    }
    Er === "application/xhtml+xml" && fi === Dn && (k = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + k + "</body></html>");
    var ft = w ? w.createHTML(k) : k;
    if (fi === Dn)
      try {
        E = new f().parseFromString(ft, Er);
      } catch {
      }
    if (!E || !E.documentElement) {
      E = S.createDocument(fi, "template", null);
      try {
        E.documentElement.innerHTML = Ba ? x : ft;
      } catch {
      }
    }
    var Ke = E.body || E.documentElement;
    return k && M && Ke.insertBefore(r.createTextNode(M), Ke.childNodes[0] || null), fi === Dn ? D.call(E, Ar ? "html" : "body")[0] : Ar ? E.documentElement : Ke;
  }, Ap = function(k) {
    return R.call(
      k.ownerDocument || k,
      k,
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT,
      null,
      !1
    );
  }, Zk = function(k) {
    return k instanceof u && (typeof k.nodeName != "string" || typeof k.textContent != "string" || typeof k.removeChild != "function" || !(k.attributes instanceof h) || typeof k.removeAttribute != "function" || typeof k.setAttribute != "function" || typeof k.namespaceURI != "string" || typeof k.insertBefore != "function" || typeof k.hasChildNodes != "function");
  }, xs = function(k) {
    return Zn(o) === "object" ? k instanceof o : k && Zn(k) === "object" && typeof k.nodeType == "number" && typeof k.nodeName == "string";
  }, Mn = function(k, E, M) {
    !J[k] || R2(J[k], function(Q) {
      Q.call(e, E, M, di);
    });
  }, Ep = function(k) {
    var E;
    if (Mn("beforeSanitizeElements", k, null), Zk(k) || it(/[\u0080-\uFFFF]/, k.nodeName))
      return Tn(k), !0;
    var M = Fe(k.nodeName);
    if (Mn("uponSanitizeElement", k, {
      tagName: M,
      allowedTags: oe
    }), k.hasChildNodes() && !xs(k.firstElementChild) && (!xs(k.content) || !xs(k.content.firstElementChild)) && it(/<[/\w]/g, k.innerHTML) && it(/<[/\w]/g, k.textContent) || M === "select" && it(/<template/i, k.innerHTML))
      return Tn(k), !0;
    if (!oe[M] || Et[M]) {
      if (!Et[M] && Tp(M) && (de.tagNameCheck instanceof RegExp && it(de.tagNameCheck, M) || de.tagNameCheck instanceof Function && de.tagNameCheck(M)))
        return !1;
      if (Pa && !ui[M]) {
        var Q = b(k) || k.parentNode, ft = y(k) || k.childNodes;
        if (ft && Q)
          for (var Ke = ft.length, He = Ke - 1; He >= 0; --He)
            Q.insertBefore(g(ft[He], !0), m(k));
      }
      return Tn(k), !0;
    }
    return k instanceof l && !Jk(k) || (M === "noscript" || M === "noembed" || M === "noframes") && it(/<\/no(script|embed|frames)/i, k.innerHTML) ? (Tn(k), !0) : (ci && k.nodeType === 3 && (E = k.textContent, E = Vt(E, A, " "), E = Vt(E, U, " "), E = Vt(E, $, " "), k.textContent !== E && (ks(e.removed, {
      element: k.cloneNode()
    }), k.textContent = E)), Mn("afterSanitizeElements", k, null), !1);
  }, Dp = function(k, E, M) {
    if (mp && (E === "id" || E === "name") && (M in r || M in Yk))
      return !1;
    if (!(jn && !Ht[E] && it(me, E))) {
      if (!(li && it(le, E))) {
        if (!fe[E] || Ht[E]) {
          if (!(Tp(k) && (de.tagNameCheck instanceof RegExp && it(de.tagNameCheck, k) || de.tagNameCheck instanceof Function && de.tagNameCheck(k)) && (de.attributeNameCheck instanceof RegExp && it(de.attributeNameCheck, E) || de.attributeNameCheck instanceof Function && de.attributeNameCheck(E)) || E === "is" && de.allowCustomizedBuiltInElements && (de.tagNameCheck instanceof RegExp && it(de.tagNameCheck, M) || de.tagNameCheck instanceof Function && de.tagNameCheck(M))))
            return !1;
        } else if (!Fa[E]) {
          if (!it(ve, Vt(M, ce, ""))) {
            if (!((E === "src" || E === "xlink:href" || E === "href") && k !== "script" && N2(M, "data:") === 0 && wp[k])) {
              if (!(zt && !it(se, Vt(M, ce, "")))) {
                if (M)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, Tp = function(k) {
    return k.indexOf("-") > 0;
  }, Mp = function(k) {
    var E, M, Q, ft;
    Mn("beforeSanitizeAttributes", k, null);
    var Ke = k.attributes;
    if (!!Ke) {
      var He = {
        attrName: "",
        attrValue: "",
        keepAttr: !0,
        allowedAttributes: fe
      };
      for (ft = Ke.length; ft--; ) {
        E = Ke[ft];
        var jo = E, Be = jo.name, Va = jo.namespaceURI;
        if (M = Be === "value" ? E.value : P2(E.value), Q = Fe(Be), He.attrName = Q, He.attrValue = M, He.keepAttr = !0, He.forceKeepAttr = void 0, Mn("uponSanitizeAttribute", k, He), M = He.attrValue, !He.forceKeepAttr && (za(Be, k), !!He.keepAttr)) {
          if (!gp && it(/\/>/i, M)) {
            za(Be, k);
            continue;
          }
          ci && (M = Vt(M, A, " "), M = Vt(M, U, " "), M = Vt(M, $, " "));
          var Op = Fe(k.nodeName);
          if (!!Dp(Op, Q, M)) {
            if (yp && (Q === "id" || Q === "name") && (za(Be, k), M = Uk + M), w && Zn(d) === "object" && typeof d.getAttributeType == "function" && !Va)
              switch (d.getAttributeType(Op, Q)) {
                case "TrustedHTML": {
                  M = w.createHTML(M);
                  break;
                }
                case "TrustedScriptURL": {
                  M = w.createScriptURL(M);
                  break;
                }
              }
            try {
              Va ? k.setAttributeNS(Va, Be, M) : k.setAttribute(Be, M), Rg(e.removed);
            } catch {
            }
          }
        }
      }
      Mn("afterSanitizeAttributes", k, null);
    }
  }, Xk = function B(k) {
    var E, M = Ap(k);
    for (Mn("beforeSanitizeShadowDOM", k, null); E = M.nextNode(); )
      Mn("uponSanitizeShadowNode", E, null), !Ep(E) && (E.content instanceof i && B(E.content), Mp(E));
    Mn("afterSanitizeShadowDOM", k, null);
  };
  return e.sanitize = function(B) {
    var k = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, E, M, Q, ft, Ke;
    if (Ba = !B, Ba && (B = "<!-->"), typeof B != "string" && !xs(B))
      if (typeof B.toString == "function") {
        if (B = B.toString(), typeof B != "string")
          throw th("dirty is not a string, aborting");
      } else
        throw th("toString is not a function");
    if (!e.isSupported) {
      if (Zn(t.toStaticHTML) === "object" || typeof t.toStaticHTML == "function") {
        if (typeof B == "string")
          return t.toStaticHTML(B);
        if (xs(B))
          return t.toStaticHTML(B.outerHTML);
      }
      return B;
    }
    if (Ia || $a(k), e.removed = [], typeof B == "string" && (vs = !1), vs) {
      if (B.nodeName) {
        var He = Fe(B.nodeName);
        if (!oe[He] || Et[He])
          throw th("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (B instanceof o)
      E = Cp("<!---->"), M = E.ownerDocument.importNode(B, !0), M.nodeType === 1 && M.nodeName === "BODY" || M.nodeName === "HTML" ? E = M : E.appendChild(M);
    else {
      if (!ai && !ci && !Ar && B.indexOf("<") === -1)
        return w && zo ? w.createHTML(B) : B;
      if (E = Cp(B), !E)
        return ai ? null : zo ? x : "";
    }
    E && Na && Tn(E.firstChild);
    for (var jo = Ap(vs ? B : E); Q = jo.nextNode(); )
      Q.nodeType === 3 && Q === ft || Ep(Q) || (Q.content instanceof i && Xk(Q.content), Mp(Q), ft = Q);
    if (ft = null, vs)
      return B;
    if (ai) {
      if (Ho)
        for (Ke = L.call(E.ownerDocument); E.firstChild; )
          Ke.appendChild(E.firstChild);
      else
        Ke = E;
      return (fe.shadowroot || fe.shadowrootmod) && (Ke = z.call(n, Ke, !0)), Ke;
    }
    var Be = Ar ? E.outerHTML : E.innerHTML;
    return Ar && oe["!doctype"] && E.ownerDocument && E.ownerDocument.doctype && E.ownerDocument.doctype.name && it(Y2, E.ownerDocument.doctype.name) && (Be = "<!DOCTYPE " + E.ownerDocument.doctype.name + `>
` + Be), ci && (Be = Vt(Be, A, " "), Be = Vt(Be, U, " "), Be = Vt(Be, $, " ")), w && zo ? w.createHTML(Be) : Be;
  }, e.setConfig = function(B) {
    $a(B), Ia = !0;
  }, e.clearConfig = function() {
    di = null, Ia = !1;
  }, e.isValidAttribute = function(B, k, E) {
    di || $a({});
    var M = Fe(B), Q = Fe(k);
    return Dp(M, Q, E);
  }, e.addHook = function(B, k) {
    typeof k == "function" && (J[B] = J[B] || [], ks(J[B], k));
  }, e.removeHook = function(B) {
    if (J[B])
      return Rg(J[B]);
  }, e.removeHooks = function(B) {
    J[B] && (J[B] = []);
  }, e.removeAllHooks = function() {
    J = {};
  }, e;
}
var Z2 = k1(), _1 = { exports: {} }, ne = {}, id = { exports: {} };
const X2 = "\xC1", Q2 = "\xE1", eD = "\u0102", tD = "\u0103", nD = "\u223E", rD = "\u223F", iD = "\u223E\u0333", sD = "\xC2", oD = "\xE2", lD = "\xB4", cD = "\u0410", aD = "\u0430", hD = "\xC6", uD = "\xE6", fD = "\u2061", dD = "\u{1D504}", pD = "\u{1D51E}", gD = "\xC0", mD = "\xE0", yD = "\u2135", bD = "\u2135", wD = "\u0391", vD = "\u03B1", xD = "\u0100", kD = "\u0101", _D = "\u2A3F", SD = "&", CD = "&", AD = "\u2A55", ED = "\u2A53", DD = "\u2227", TD = "\u2A5C", MD = "\u2A58", OD = "\u2A5A", LD = "\u2220", RD = "\u29A4", ID = "\u2220", ND = "\u29A8", PD = "\u29A9", FD = "\u29AA", BD = "\u29AB", qD = "\u29AC", $D = "\u29AD", HD = "\u29AE", zD = "\u29AF", VD = "\u2221", UD = "\u221F", WD = "\u22BE", jD = "\u299D", GD = "\u2222", YD = "\xC5", KD = "\u237C", JD = "\u0104", ZD = "\u0105", XD = "\u{1D538}", QD = "\u{1D552}", eT = "\u2A6F", tT = "\u2248", nT = "\u2A70", rT = "\u224A", iT = "\u224B", sT = "'", oT = "\u2061", lT = "\u2248", cT = "\u224A", aT = "\xC5", hT = "\xE5", uT = "\u{1D49C}", fT = "\u{1D4B6}", dT = "\u2254", pT = "*", gT = "\u2248", mT = "\u224D", yT = "\xC3", bT = "\xE3", wT = "\xC4", vT = "\xE4", xT = "\u2233", kT = "\u2A11", _T = "\u224C", ST = "\u03F6", CT = "\u2035", AT = "\u223D", ET = "\u22CD", DT = "\u2216", TT = "\u2AE7", MT = "\u22BD", OT = "\u2305", LT = "\u2306", RT = "\u2305", IT = "\u23B5", NT = "\u23B6", PT = "\u224C", FT = "\u0411", BT = "\u0431", qT = "\u201E", $T = "\u2235", HT = "\u2235", zT = "\u2235", VT = "\u29B0", UT = "\u03F6", WT = "\u212C", jT = "\u212C", GT = "\u0392", YT = "\u03B2", KT = "\u2136", JT = "\u226C", ZT = "\u{1D505}", XT = "\u{1D51F}", QT = "\u22C2", eM = "\u25EF", tM = "\u22C3", nM = "\u2A00", rM = "\u2A01", iM = "\u2A02", sM = "\u2A06", oM = "\u2605", lM = "\u25BD", cM = "\u25B3", aM = "\u2A04", hM = "\u22C1", uM = "\u22C0", fM = "\u290D", dM = "\u29EB", pM = "\u25AA", gM = "\u25B4", mM = "\u25BE", yM = "\u25C2", bM = "\u25B8", wM = "\u2423", vM = "\u2592", xM = "\u2591", kM = "\u2593", _M = "\u2588", SM = "=\u20E5", CM = "\u2261\u20E5", AM = "\u2AED", EM = "\u2310", DM = "\u{1D539}", TM = "\u{1D553}", MM = "\u22A5", OM = "\u22A5", LM = "\u22C8", RM = "\u29C9", IM = "\u2510", NM = "\u2555", PM = "\u2556", FM = "\u2557", BM = "\u250C", qM = "\u2552", $M = "\u2553", HM = "\u2554", zM = "\u2500", VM = "\u2550", UM = "\u252C", WM = "\u2564", jM = "\u2565", GM = "\u2566", YM = "\u2534", KM = "\u2567", JM = "\u2568", ZM = "\u2569", XM = "\u229F", QM = "\u229E", eO = "\u22A0", tO = "\u2518", nO = "\u255B", rO = "\u255C", iO = "\u255D", sO = "\u2514", oO = "\u2558", lO = "\u2559", cO = "\u255A", aO = "\u2502", hO = "\u2551", uO = "\u253C", fO = "\u256A", dO = "\u256B", pO = "\u256C", gO = "\u2524", mO = "\u2561", yO = "\u2562", bO = "\u2563", wO = "\u251C", vO = "\u255E", xO = "\u255F", kO = "\u2560", _O = "\u2035", SO = "\u02D8", CO = "\u02D8", AO = "\xA6", EO = "\u{1D4B7}", DO = "\u212C", TO = "\u204F", MO = "\u223D", OO = "\u22CD", LO = "\u29C5", RO = "\\", IO = "\u27C8", NO = "\u2022", PO = "\u2022", FO = "\u224E", BO = "\u2AAE", qO = "\u224F", $O = "\u224E", HO = "\u224F", zO = "\u0106", VO = "\u0107", UO = "\u2A44", WO = "\u2A49", jO = "\u2A4B", GO = "\u2229", YO = "\u22D2", KO = "\u2A47", JO = "\u2A40", ZO = "\u2145", XO = "\u2229\uFE00", QO = "\u2041", eL = "\u02C7", tL = "\u212D", nL = "\u2A4D", rL = "\u010C", iL = "\u010D", sL = "\xC7", oL = "\xE7", lL = "\u0108", cL = "\u0109", aL = "\u2230", hL = "\u2A4C", uL = "\u2A50", fL = "\u010A", dL = "\u010B", pL = "\xB8", gL = "\xB8", mL = "\u29B2", yL = "\xA2", bL = "\xB7", wL = "\xB7", vL = "\u{1D520}", xL = "\u212D", kL = "\u0427", _L = "\u0447", SL = "\u2713", CL = "\u2713", AL = "\u03A7", EL = "\u03C7", DL = "\u02C6", TL = "\u2257", ML = "\u21BA", OL = "\u21BB", LL = "\u229B", RL = "\u229A", IL = "\u229D", NL = "\u2299", PL = "\xAE", FL = "\u24C8", BL = "\u2296", qL = "\u2295", $L = "\u2297", HL = "\u25CB", zL = "\u29C3", VL = "\u2257", UL = "\u2A10", WL = "\u2AEF", jL = "\u29C2", GL = "\u2232", YL = "\u201D", KL = "\u2019", JL = "\u2663", ZL = "\u2663", XL = ":", QL = "\u2237", eR = "\u2A74", tR = "\u2254", nR = "\u2254", rR = ",", iR = "@", sR = "\u2201", oR = "\u2218", lR = "\u2201", cR = "\u2102", aR = "\u2245", hR = "\u2A6D", uR = "\u2261", fR = "\u222E", dR = "\u222F", pR = "\u222E", gR = "\u{1D554}", mR = "\u2102", yR = "\u2210", bR = "\u2210", wR = "\xA9", vR = "\xA9", xR = "\u2117", kR = "\u2233", _R = "\u21B5", SR = "\u2717", CR = "\u2A2F", AR = "\u{1D49E}", ER = "\u{1D4B8}", DR = "\u2ACF", TR = "\u2AD1", MR = "\u2AD0", OR = "\u2AD2", LR = "\u22EF", RR = "\u2938", IR = "\u2935", NR = "\u22DE", PR = "\u22DF", FR = "\u21B6", BR = "\u293D", qR = "\u2A48", $R = "\u2A46", HR = "\u224D", zR = "\u222A", VR = "\u22D3", UR = "\u2A4A", WR = "\u228D", jR = "\u2A45", GR = "\u222A\uFE00", YR = "\u21B7", KR = "\u293C", JR = "\u22DE", ZR = "\u22DF", XR = "\u22CE", QR = "\u22CF", eI = "\xA4", tI = "\u21B6", nI = "\u21B7", rI = "\u22CE", iI = "\u22CF", sI = "\u2232", oI = "\u2231", lI = "\u232D", cI = "\u2020", aI = "\u2021", hI = "\u2138", uI = "\u2193", fI = "\u21A1", dI = "\u21D3", pI = "\u2010", gI = "\u2AE4", mI = "\u22A3", yI = "\u290F", bI = "\u02DD", wI = "\u010E", vI = "\u010F", xI = "\u0414", kI = "\u0434", _I = "\u2021", SI = "\u21CA", CI = "\u2145", AI = "\u2146", EI = "\u2911", DI = "\u2A77", TI = "\xB0", MI = "\u2207", OI = "\u0394", LI = "\u03B4", RI = "\u29B1", II = "\u297F", NI = "\u{1D507}", PI = "\u{1D521}", FI = "\u2965", BI = "\u21C3", qI = "\u21C2", $I = "\xB4", HI = "\u02D9", zI = "\u02DD", VI = "`", UI = "\u02DC", WI = "\u22C4", jI = "\u22C4", GI = "\u22C4", YI = "\u2666", KI = "\u2666", JI = "\xA8", ZI = "\u2146", XI = "\u03DD", QI = "\u22F2", e3 = "\xF7", t3 = "\xF7", n3 = "\u22C7", r3 = "\u22C7", i3 = "\u0402", s3 = "\u0452", o3 = "\u231E", l3 = "\u230D", c3 = "$", a3 = "\u{1D53B}", h3 = "\u{1D555}", u3 = "\xA8", f3 = "\u02D9", d3 = "\u20DC", p3 = "\u2250", g3 = "\u2251", m3 = "\u2250", y3 = "\u2238", b3 = "\u2214", w3 = "\u22A1", v3 = "\u2306", x3 = "\u222F", k3 = "\xA8", _3 = "\u21D3", S3 = "\u21D0", C3 = "\u21D4", A3 = "\u2AE4", E3 = "\u27F8", D3 = "\u27FA", T3 = "\u27F9", M3 = "\u21D2", O3 = "\u22A8", L3 = "\u21D1", R3 = "\u21D5", I3 = "\u2225", N3 = "\u2913", P3 = "\u2193", F3 = "\u2193", B3 = "\u21D3", q3 = "\u21F5", $3 = "\u0311", H3 = "\u21CA", z3 = "\u21C3", V3 = "\u21C2", U3 = "\u2950", W3 = "\u295E", j3 = "\u2956", G3 = "\u21BD", Y3 = "\u295F", K3 = "\u2957", J3 = "\u21C1", Z3 = "\u21A7", X3 = "\u22A4", Q3 = "\u2910", eN = "\u231F", tN = "\u230C", nN = "\u{1D49F}", rN = "\u{1D4B9}", iN = "\u0405", sN = "\u0455", oN = "\u29F6", lN = "\u0110", cN = "\u0111", aN = "\u22F1", hN = "\u25BF", uN = "\u25BE", fN = "\u21F5", dN = "\u296F", pN = "\u29A6", gN = "\u040F", mN = "\u045F", yN = "\u27FF", bN = "\xC9", wN = "\xE9", vN = "\u2A6E", xN = "\u011A", kN = "\u011B", _N = "\xCA", SN = "\xEA", CN = "\u2256", AN = "\u2255", EN = "\u042D", DN = "\u044D", TN = "\u2A77", MN = "\u0116", ON = "\u0117", LN = "\u2251", RN = "\u2147", IN = "\u2252", NN = "\u{1D508}", PN = "\u{1D522}", FN = "\u2A9A", BN = "\xC8", qN = "\xE8", $N = "\u2A96", HN = "\u2A98", zN = "\u2A99", VN = "\u2208", UN = "\u23E7", WN = "\u2113", jN = "\u2A95", GN = "\u2A97", YN = "\u0112", KN = "\u0113", JN = "\u2205", ZN = "\u2205", XN = "\u25FB", QN = "\u2205", eP = "\u25AB", tP = "\u2004", nP = "\u2005", rP = "\u2003", iP = "\u014A", sP = "\u014B", oP = "\u2002", lP = "\u0118", cP = "\u0119", aP = "\u{1D53C}", hP = "\u{1D556}", uP = "\u22D5", fP = "\u29E3", dP = "\u2A71", pP = "\u03B5", gP = "\u0395", mP = "\u03B5", yP = "\u03F5", bP = "\u2256", wP = "\u2255", vP = "\u2242", xP = "\u2A96", kP = "\u2A95", _P = "\u2A75", SP = "=", CP = "\u2242", AP = "\u225F", EP = "\u21CC", DP = "\u2261", TP = "\u2A78", MP = "\u29E5", OP = "\u2971", LP = "\u2253", RP = "\u212F", IP = "\u2130", NP = "\u2250", PP = "\u2A73", FP = "\u2242", BP = "\u0397", qP = "\u03B7", $P = "\xD0", HP = "\xF0", zP = "\xCB", VP = "\xEB", UP = "\u20AC", WP = "!", jP = "\u2203", GP = "\u2203", YP = "\u2130", KP = "\u2147", JP = "\u2147", ZP = "\u2252", XP = "\u0424", QP = "\u0444", eF = "\u2640", tF = "\uFB03", nF = "\uFB00", rF = "\uFB04", iF = "\u{1D509}", sF = "\u{1D523}", oF = "\uFB01", lF = "\u25FC", cF = "\u25AA", aF = "fj", hF = "\u266D", uF = "\uFB02", fF = "\u25B1", dF = "\u0192", pF = "\u{1D53D}", gF = "\u{1D557}", mF = "\u2200", yF = "\u2200", bF = "\u22D4", wF = "\u2AD9", vF = "\u2131", xF = "\u2A0D", kF = "\xBD", _F = "\u2153", SF = "\xBC", CF = "\u2155", AF = "\u2159", EF = "\u215B", DF = "\u2154", TF = "\u2156", MF = "\xBE", OF = "\u2157", LF = "\u215C", RF = "\u2158", IF = "\u215A", NF = "\u215D", PF = "\u215E", FF = "\u2044", BF = "\u2322", qF = "\u{1D4BB}", $F = "\u2131", HF = "\u01F5", zF = "\u0393", VF = "\u03B3", UF = "\u03DC", WF = "\u03DD", jF = "\u2A86", GF = "\u011E", YF = "\u011F", KF = "\u0122", JF = "\u011C", ZF = "\u011D", XF = "\u0413", QF = "\u0433", eB = "\u0120", tB = "\u0121", nB = "\u2265", rB = "\u2267", iB = "\u2A8C", sB = "\u22DB", oB = "\u2265", lB = "\u2267", cB = "\u2A7E", aB = "\u2AA9", hB = "\u2A7E", uB = "\u2A80", fB = "\u2A82", dB = "\u2A84", pB = "\u22DB\uFE00", gB = "\u2A94", mB = "\u{1D50A}", yB = "\u{1D524}", bB = "\u226B", wB = "\u22D9", vB = "\u22D9", xB = "\u2137", kB = "\u0403", _B = "\u0453", SB = "\u2AA5", CB = "\u2277", AB = "\u2A92", EB = "\u2AA4", DB = "\u2A8A", TB = "\u2A8A", MB = "\u2A88", OB = "\u2269", LB = "\u2A88", RB = "\u2269", IB = "\u22E7", NB = "\u{1D53E}", PB = "\u{1D558}", FB = "`", BB = "\u2265", qB = "\u22DB", $B = "\u2267", HB = "\u2AA2", zB = "\u2277", VB = "\u2A7E", UB = "\u2273", WB = "\u{1D4A2}", jB = "\u210A", GB = "\u2273", YB = "\u2A8E", KB = "\u2A90", JB = "\u2AA7", ZB = "\u2A7A", XB = ">", QB = ">", e4 = "\u226B", t4 = "\u22D7", n4 = "\u2995", r4 = "\u2A7C", i4 = "\u2A86", s4 = "\u2978", o4 = "\u22D7", l4 = "\u22DB", c4 = "\u2A8C", a4 = "\u2277", h4 = "\u2273", u4 = "\u2269\uFE00", f4 = "\u2269\uFE00", d4 = "\u02C7", p4 = "\u200A", g4 = "\xBD", m4 = "\u210B", y4 = "\u042A", b4 = "\u044A", w4 = "\u2948", v4 = "\u2194", x4 = "\u21D4", k4 = "\u21AD", _4 = "^", S4 = "\u210F", C4 = "\u0124", A4 = "\u0125", E4 = "\u2665", D4 = "\u2665", T4 = "\u2026", M4 = "\u22B9", O4 = "\u{1D525}", L4 = "\u210C", R4 = "\u210B", I4 = "\u2925", N4 = "\u2926", P4 = "\u21FF", F4 = "\u223B", B4 = "\u21A9", q4 = "\u21AA", $4 = "\u{1D559}", H4 = "\u210D", z4 = "\u2015", V4 = "\u2500", U4 = "\u{1D4BD}", W4 = "\u210B", j4 = "\u210F", G4 = "\u0126", Y4 = "\u0127", K4 = "\u224E", J4 = "\u224F", Z4 = "\u2043", X4 = "\u2010", Q4 = "\xCD", e5 = "\xED", t5 = "\u2063", n5 = "\xCE", r5 = "\xEE", i5 = "\u0418", s5 = "\u0438", o5 = "\u0130", l5 = "\u0415", c5 = "\u0435", a5 = "\xA1", h5 = "\u21D4", u5 = "\u{1D526}", f5 = "\u2111", d5 = "\xCC", p5 = "\xEC", g5 = "\u2148", m5 = "\u2A0C", y5 = "\u222D", b5 = "\u29DC", w5 = "\u2129", v5 = "\u0132", x5 = "\u0133", k5 = "\u012A", _5 = "\u012B", S5 = "\u2111", C5 = "\u2148", A5 = "\u2110", E5 = "\u2111", D5 = "\u0131", T5 = "\u2111", M5 = "\u22B7", O5 = "\u01B5", L5 = "\u21D2", R5 = "\u2105", I5 = "\u221E", N5 = "\u29DD", P5 = "\u0131", F5 = "\u22BA", B5 = "\u222B", q5 = "\u222C", $5 = "\u2124", H5 = "\u222B", z5 = "\u22BA", V5 = "\u22C2", U5 = "\u2A17", W5 = "\u2A3C", j5 = "\u2063", G5 = "\u2062", Y5 = "\u0401", K5 = "\u0451", J5 = "\u012E", Z5 = "\u012F", X5 = "\u{1D540}", Q5 = "\u{1D55A}", e6 = "\u0399", t6 = "\u03B9", n6 = "\u2A3C", r6 = "\xBF", i6 = "\u{1D4BE}", s6 = "\u2110", o6 = "\u2208", l6 = "\u22F5", c6 = "\u22F9", a6 = "\u22F4", h6 = "\u22F3", u6 = "\u2208", f6 = "\u2062", d6 = "\u0128", p6 = "\u0129", g6 = "\u0406", m6 = "\u0456", y6 = "\xCF", b6 = "\xEF", w6 = "\u0134", v6 = "\u0135", x6 = "\u0419", k6 = "\u0439", _6 = "\u{1D50D}", S6 = "\u{1D527}", C6 = "\u0237", A6 = "\u{1D541}", E6 = "\u{1D55B}", D6 = "\u{1D4A5}", T6 = "\u{1D4BF}", M6 = "\u0408", O6 = "\u0458", L6 = "\u0404", R6 = "\u0454", I6 = "\u039A", N6 = "\u03BA", P6 = "\u03F0", F6 = "\u0136", B6 = "\u0137", q6 = "\u041A", $6 = "\u043A", H6 = "\u{1D50E}", z6 = "\u{1D528}", V6 = "\u0138", U6 = "\u0425", W6 = "\u0445", j6 = "\u040C", G6 = "\u045C", Y6 = "\u{1D542}", K6 = "\u{1D55C}", J6 = "\u{1D4A6}", Z6 = "\u{1D4C0}", X6 = "\u21DA", Q6 = "\u0139", e8 = "\u013A", t8 = "\u29B4", n8 = "\u2112", r8 = "\u039B", i8 = "\u03BB", s8 = "\u27E8", o8 = "\u27EA", l8 = "\u2991", c8 = "\u27E8", a8 = "\u2A85", h8 = "\u2112", u8 = "\xAB", f8 = "\u21E4", d8 = "\u291F", p8 = "\u2190", g8 = "\u219E", m8 = "\u21D0", y8 = "\u291D", b8 = "\u21A9", w8 = "\u21AB", v8 = "\u2939", x8 = "\u2973", k8 = "\u21A2", _8 = "\u2919", S8 = "\u291B", C8 = "\u2AAB", A8 = "\u2AAD", E8 = "\u2AAD\uFE00", D8 = "\u290C", T8 = "\u290E", M8 = "\u2772", O8 = "{", L8 = "[", R8 = "\u298B", I8 = "\u298F", N8 = "\u298D", P8 = "\u013D", F8 = "\u013E", B8 = "\u013B", q8 = "\u013C", $8 = "\u2308", H8 = "{", z8 = "\u041B", V8 = "\u043B", U8 = "\u2936", W8 = "\u201C", j8 = "\u201E", G8 = "\u2967", Y8 = "\u294B", K8 = "\u21B2", J8 = "\u2264", Z8 = "\u2266", X8 = "\u27E8", Q8 = "\u21E4", eq = "\u2190", tq = "\u2190", nq = "\u21D0", rq = "\u21C6", iq = "\u21A2", sq = "\u2308", oq = "\u27E6", lq = "\u2961", cq = "\u2959", aq = "\u21C3", hq = "\u230A", uq = "\u21BD", fq = "\u21BC", dq = "\u21C7", pq = "\u2194", gq = "\u2194", mq = "\u21D4", yq = "\u21C6", bq = "\u21CB", wq = "\u21AD", vq = "\u294E", xq = "\u21A4", kq = "\u22A3", _q = "\u295A", Sq = "\u22CB", Cq = "\u29CF", Aq = "\u22B2", Eq = "\u22B4", Dq = "\u2951", Tq = "\u2960", Mq = "\u2958", Oq = "\u21BF", Lq = "\u2952", Rq = "\u21BC", Iq = "\u2A8B", Nq = "\u22DA", Pq = "\u2264", Fq = "\u2266", Bq = "\u2A7D", qq = "\u2AA8", $q = "\u2A7D", Hq = "\u2A7F", zq = "\u2A81", Vq = "\u2A83", Uq = "\u22DA\uFE00", Wq = "\u2A93", jq = "\u2A85", Gq = "\u22D6", Yq = "\u22DA", Kq = "\u2A8B", Jq = "\u22DA", Zq = "\u2266", Xq = "\u2276", Qq = "\u2276", e$ = "\u2AA1", t$ = "\u2272", n$ = "\u2A7D", r$ = "\u2272", i$ = "\u297C", s$ = "\u230A", o$ = "\u{1D50F}", l$ = "\u{1D529}", c$ = "\u2276", a$ = "\u2A91", h$ = "\u2962", u$ = "\u21BD", f$ = "\u21BC", d$ = "\u296A", p$ = "\u2584", g$ = "\u0409", m$ = "\u0459", y$ = "\u21C7", b$ = "\u226A", w$ = "\u22D8", v$ = "\u231E", x$ = "\u21DA", k$ = "\u296B", _$ = "\u25FA", S$ = "\u013F", C$ = "\u0140", A$ = "\u23B0", E$ = "\u23B0", D$ = "\u2A89", T$ = "\u2A89", M$ = "\u2A87", O$ = "\u2268", L$ = "\u2A87", R$ = "\u2268", I$ = "\u22E6", N$ = "\u27EC", P$ = "\u21FD", F$ = "\u27E6", B$ = "\u27F5", q$ = "\u27F5", $$ = "\u27F8", H$ = "\u27F7", z$ = "\u27F7", V$ = "\u27FA", U$ = "\u27FC", W$ = "\u27F6", j$ = "\u27F6", G$ = "\u27F9", Y$ = "\u21AB", K$ = "\u21AC", J$ = "\u2985", Z$ = "\u{1D543}", X$ = "\u{1D55D}", Q$ = "\u2A2D", e9 = "\u2A34", t9 = "\u2217", n9 = "_", r9 = "\u2199", i9 = "\u2198", s9 = "\u25CA", o9 = "\u25CA", l9 = "\u29EB", c9 = "(", a9 = "\u2993", h9 = "\u21C6", u9 = "\u231F", f9 = "\u21CB", d9 = "\u296D", p9 = "\u200E", g9 = "\u22BF", m9 = "\u2039", y9 = "\u{1D4C1}", b9 = "\u2112", w9 = "\u21B0", v9 = "\u21B0", x9 = "\u2272", k9 = "\u2A8D", _9 = "\u2A8F", S9 = "[", C9 = "\u2018", A9 = "\u201A", E9 = "\u0141", D9 = "\u0142", T9 = "\u2AA6", M9 = "\u2A79", O9 = "<", L9 = "<", R9 = "\u226A", I9 = "\u22D6", N9 = "\u22CB", P9 = "\u22C9", F9 = "\u2976", B9 = "\u2A7B", q9 = "\u25C3", $9 = "\u22B4", H9 = "\u25C2", z9 = "\u2996", V9 = "\u294A", U9 = "\u2966", W9 = "\u2268\uFE00", j9 = "\u2268\uFE00", G9 = "\xAF", Y9 = "\u2642", K9 = "\u2720", J9 = "\u2720", Z9 = "\u21A6", X9 = "\u21A6", Q9 = "\u21A7", eH = "\u21A4", tH = "\u21A5", nH = "\u25AE", rH = "\u2A29", iH = "\u041C", sH = "\u043C", oH = "\u2014", lH = "\u223A", cH = "\u2221", aH = "\u205F", hH = "\u2133", uH = "\u{1D510}", fH = "\u{1D52A}", dH = "\u2127", pH = "\xB5", gH = "*", mH = "\u2AF0", yH = "\u2223", bH = "\xB7", wH = "\u229F", vH = "\u2212", xH = "\u2238", kH = "\u2A2A", _H = "\u2213", SH = "\u2ADB", CH = "\u2026", AH = "\u2213", EH = "\u22A7", DH = "\u{1D544}", TH = "\u{1D55E}", MH = "\u2213", OH = "\u{1D4C2}", LH = "\u2133", RH = "\u223E", IH = "\u039C", NH = "\u03BC", PH = "\u22B8", FH = "\u22B8", BH = "\u2207", qH = "\u0143", $H = "\u0144", HH = "\u2220\u20D2", zH = "\u2249", VH = "\u2A70\u0338", UH = "\u224B\u0338", WH = "\u0149", jH = "\u2249", GH = "\u266E", YH = "\u2115", KH = "\u266E", JH = "\xA0", ZH = "\u224E\u0338", XH = "\u224F\u0338", QH = "\u2A43", e7 = "\u0147", t7 = "\u0148", n7 = "\u0145", r7 = "\u0146", i7 = "\u2247", s7 = "\u2A6D\u0338", o7 = "\u2A42", l7 = "\u041D", c7 = "\u043D", a7 = "\u2013", h7 = "\u2924", u7 = "\u2197", f7 = "\u21D7", d7 = "\u2197", p7 = "\u2260", g7 = "\u2250\u0338", m7 = "\u200B", y7 = "\u200B", b7 = "\u200B", w7 = "\u200B", v7 = "\u2262", x7 = "\u2928", k7 = "\u2242\u0338", _7 = "\u226B", S7 = "\u226A", C7 = `
`, A7 = "\u2204", E7 = "\u2204", D7 = "\u{1D511}", T7 = "\u{1D52B}", M7 = "\u2267\u0338", O7 = "\u2271", L7 = "\u2271", R7 = "\u2267\u0338", I7 = "\u2A7E\u0338", N7 = "\u2A7E\u0338", P7 = "\u22D9\u0338", F7 = "\u2275", B7 = "\u226B\u20D2", q7 = "\u226F", $7 = "\u226F", H7 = "\u226B\u0338", z7 = "\u21AE", V7 = "\u21CE", U7 = "\u2AF2", W7 = "\u220B", j7 = "\u22FC", G7 = "\u22FA", Y7 = "\u220B", K7 = "\u040A", J7 = "\u045A", Z7 = "\u219A", X7 = "\u21CD", Q7 = "\u2025", ez = "\u2266\u0338", tz = "\u2270", nz = "\u219A", rz = "\u21CD", iz = "\u21AE", sz = "\u21CE", oz = "\u2270", lz = "\u2266\u0338", cz = "\u2A7D\u0338", az = "\u2A7D\u0338", hz = "\u226E", uz = "\u22D8\u0338", fz = "\u2274", dz = "\u226A\u20D2", pz = "\u226E", gz = "\u22EA", mz = "\u22EC", yz = "\u226A\u0338", bz = "\u2224", wz = "\u2060", vz = "\xA0", xz = "\u{1D55F}", kz = "\u2115", _z = "\u2AEC", Sz = "\xAC", Cz = "\u2262", Az = "\u226D", Ez = "\u2226", Dz = "\u2209", Tz = "\u2260", Mz = "\u2242\u0338", Oz = "\u2204", Lz = "\u226F", Rz = "\u2271", Iz = "\u2267\u0338", Nz = "\u226B\u0338", Pz = "\u2279", Fz = "\u2A7E\u0338", Bz = "\u2275", qz = "\u224E\u0338", $z = "\u224F\u0338", Hz = "\u2209", zz = "\u22F5\u0338", Vz = "\u22F9\u0338", Uz = "\u2209", Wz = "\u22F7", jz = "\u22F6", Gz = "\u29CF\u0338", Yz = "\u22EA", Kz = "\u22EC", Jz = "\u226E", Zz = "\u2270", Xz = "\u2278", Qz = "\u226A\u0338", eV = "\u2A7D\u0338", tV = "\u2274", nV = "\u2AA2\u0338", rV = "\u2AA1\u0338", iV = "\u220C", sV = "\u220C", oV = "\u22FE", lV = "\u22FD", cV = "\u2280", aV = "\u2AAF\u0338", hV = "\u22E0", uV = "\u220C", fV = "\u29D0\u0338", dV = "\u22EB", pV = "\u22ED", gV = "\u228F\u0338", mV = "\u22E2", yV = "\u2290\u0338", bV = "\u22E3", wV = "\u2282\u20D2", vV = "\u2288", xV = "\u2281", kV = "\u2AB0\u0338", _V = "\u22E1", SV = "\u227F\u0338", CV = "\u2283\u20D2", AV = "\u2289", EV = "\u2241", DV = "\u2244", TV = "\u2247", MV = "\u2249", OV = "\u2224", LV = "\u2226", RV = "\u2226", IV = "\u2AFD\u20E5", NV = "\u2202\u0338", PV = "\u2A14", FV = "\u2280", BV = "\u22E0", qV = "\u2280", $V = "\u2AAF\u0338", HV = "\u2AAF\u0338", zV = "\u2933\u0338", VV = "\u219B", UV = "\u21CF", WV = "\u219D\u0338", jV = "\u219B", GV = "\u21CF", YV = "\u22EB", KV = "\u22ED", JV = "\u2281", ZV = "\u22E1", XV = "\u2AB0\u0338", QV = "\u{1D4A9}", eU = "\u{1D4C3}", tU = "\u2224", nU = "\u2226", rU = "\u2241", iU = "\u2244", sU = "\u2244", oU = "\u2224", lU = "\u2226", cU = "\u22E2", aU = "\u22E3", hU = "\u2284", uU = "\u2AC5\u0338", fU = "\u2288", dU = "\u2282\u20D2", pU = "\u2288", gU = "\u2AC5\u0338", mU = "\u2281", yU = "\u2AB0\u0338", bU = "\u2285", wU = "\u2AC6\u0338", vU = "\u2289", xU = "\u2283\u20D2", kU = "\u2289", _U = "\u2AC6\u0338", SU = "\u2279", CU = "\xD1", AU = "\xF1", EU = "\u2278", DU = "\u22EA", TU = "\u22EC", MU = "\u22EB", OU = "\u22ED", LU = "\u039D", RU = "\u03BD", IU = "#", NU = "\u2116", PU = "\u2007", FU = "\u224D\u20D2", BU = "\u22AC", qU = "\u22AD", $U = "\u22AE", HU = "\u22AF", zU = "\u2265\u20D2", VU = ">\u20D2", UU = "\u2904", WU = "\u29DE", jU = "\u2902", GU = "\u2264\u20D2", YU = "<\u20D2", KU = "\u22B4\u20D2", JU = "\u2903", ZU = "\u22B5\u20D2", XU = "\u223C\u20D2", QU = "\u2923", eW = "\u2196", tW = "\u21D6", nW = "\u2196", rW = "\u2927", iW = "\xD3", sW = "\xF3", oW = "\u229B", lW = "\xD4", cW = "\xF4", aW = "\u229A", hW = "\u041E", uW = "\u043E", fW = "\u229D", dW = "\u0150", pW = "\u0151", gW = "\u2A38", mW = "\u2299", yW = "\u29BC", bW = "\u0152", wW = "\u0153", vW = "\u29BF", xW = "\u{1D512}", kW = "\u{1D52C}", _W = "\u02DB", SW = "\xD2", CW = "\xF2", AW = "\u29C1", EW = "\u29B5", DW = "\u03A9", TW = "\u222E", MW = "\u21BA", OW = "\u29BE", LW = "\u29BB", RW = "\u203E", IW = "\u29C0", NW = "\u014C", PW = "\u014D", FW = "\u03A9", BW = "\u03C9", qW = "\u039F", $W = "\u03BF", HW = "\u29B6", zW = "\u2296", VW = "\u{1D546}", UW = "\u{1D560}", WW = "\u29B7", jW = "\u201C", GW = "\u2018", YW = "\u29B9", KW = "\u2295", JW = "\u21BB", ZW = "\u2A54", XW = "\u2228", QW = "\u2A5D", ej = "\u2134", tj = "\u2134", nj = "\xAA", rj = "\xBA", ij = "\u22B6", sj = "\u2A56", oj = "\u2A57", lj = "\u2A5B", cj = "\u24C8", aj = "\u{1D4AA}", hj = "\u2134", uj = "\xD8", fj = "\xF8", dj = "\u2298", pj = "\xD5", gj = "\xF5", mj = "\u2A36", yj = "\u2A37", bj = "\u2297", wj = "\xD6", vj = "\xF6", xj = "\u233D", kj = "\u203E", _j = "\u23DE", Sj = "\u23B4", Cj = "\u23DC", Aj = "\xB6", Ej = "\u2225", Dj = "\u2225", Tj = "\u2AF3", Mj = "\u2AFD", Oj = "\u2202", Lj = "\u2202", Rj = "\u041F", Ij = "\u043F", Nj = "%", Pj = ".", Fj = "\u2030", Bj = "\u22A5", qj = "\u2031", $j = "\u{1D513}", Hj = "\u{1D52D}", zj = "\u03A6", Vj = "\u03C6", Uj = "\u03D5", Wj = "\u2133", jj = "\u260E", Gj = "\u03A0", Yj = "\u03C0", Kj = "\u22D4", Jj = "\u03D6", Zj = "\u210F", Xj = "\u210E", Qj = "\u210F", eG = "\u2A23", tG = "\u229E", nG = "\u2A22", rG = "+", iG = "\u2214", sG = "\u2A25", oG = "\u2A72", lG = "\xB1", cG = "\xB1", aG = "\u2A26", hG = "\u2A27", uG = "\xB1", fG = "\u210C", dG = "\u2A15", pG = "\u{1D561}", gG = "\u2119", mG = "\xA3", yG = "\u2AB7", bG = "\u2ABB", wG = "\u227A", vG = "\u227C", xG = "\u2AB7", kG = "\u227A", _G = "\u227C", SG = "\u227A", CG = "\u2AAF", AG = "\u227C", EG = "\u227E", DG = "\u2AAF", TG = "\u2AB9", MG = "\u2AB5", OG = "\u22E8", LG = "\u2AAF", RG = "\u2AB3", IG = "\u227E", NG = "\u2032", PG = "\u2033", FG = "\u2119", BG = "\u2AB9", qG = "\u2AB5", $G = "\u22E8", HG = "\u220F", zG = "\u220F", VG = "\u232E", UG = "\u2312", WG = "\u2313", jG = "\u221D", GG = "\u221D", YG = "\u2237", KG = "\u221D", JG = "\u227E", ZG = "\u22B0", XG = "\u{1D4AB}", QG = "\u{1D4C5}", eY = "\u03A8", tY = "\u03C8", nY = "\u2008", rY = "\u{1D514}", iY = "\u{1D52E}", sY = "\u2A0C", oY = "\u{1D562}", lY = "\u211A", cY = "\u2057", aY = "\u{1D4AC}", hY = "\u{1D4C6}", uY = "\u210D", fY = "\u2A16", dY = "?", pY = "\u225F", gY = '"', mY = '"', yY = "\u21DB", bY = "\u223D\u0331", wY = "\u0154", vY = "\u0155", xY = "\u221A", kY = "\u29B3", _Y = "\u27E9", SY = "\u27EB", CY = "\u2992", AY = "\u29A5", EY = "\u27E9", DY = "\xBB", TY = "\u2975", MY = "\u21E5", OY = "\u2920", LY = "\u2933", RY = "\u2192", IY = "\u21A0", NY = "\u21D2", PY = "\u291E", FY = "\u21AA", BY = "\u21AC", qY = "\u2945", $Y = "\u2974", HY = "\u2916", zY = "\u21A3", VY = "\u219D", UY = "\u291A", WY = "\u291C", jY = "\u2236", GY = "\u211A", YY = "\u290D", KY = "\u290F", JY = "\u2910", ZY = "\u2773", XY = "}", QY = "]", eK = "\u298C", tK = "\u298E", nK = "\u2990", rK = "\u0158", iK = "\u0159", sK = "\u0156", oK = "\u0157", lK = "\u2309", cK = "}", aK = "\u0420", hK = "\u0440", uK = "\u2937", fK = "\u2969", dK = "\u201D", pK = "\u201D", gK = "\u21B3", mK = "\u211C", yK = "\u211B", bK = "\u211C", wK = "\u211D", vK = "\u211C", xK = "\u25AD", kK = "\xAE", _K = "\xAE", SK = "\u220B", CK = "\u21CB", AK = "\u296F", EK = "\u297D", DK = "\u230B", TK = "\u{1D52F}", MK = "\u211C", OK = "\u2964", LK = "\u21C1", RK = "\u21C0", IK = "\u296C", NK = "\u03A1", PK = "\u03C1", FK = "\u03F1", BK = "\u27E9", qK = "\u21E5", $K = "\u2192", HK = "\u2192", zK = "\u21D2", VK = "\u21C4", UK = "\u21A3", WK = "\u2309", jK = "\u27E7", GK = "\u295D", YK = "\u2955", KK = "\u21C2", JK = "\u230B", ZK = "\u21C1", XK = "\u21C0", QK = "\u21C4", eJ = "\u21CC", tJ = "\u21C9", nJ = "\u219D", rJ = "\u21A6", iJ = "\u22A2", sJ = "\u295B", oJ = "\u22CC", lJ = "\u29D0", cJ = "\u22B3", aJ = "\u22B5", hJ = "\u294F", uJ = "\u295C", fJ = "\u2954", dJ = "\u21BE", pJ = "\u2953", gJ = "\u21C0", mJ = "\u02DA", yJ = "\u2253", bJ = "\u21C4", wJ = "\u21CC", vJ = "\u200F", xJ = "\u23B1", kJ = "\u23B1", _J = "\u2AEE", SJ = "\u27ED", CJ = "\u21FE", AJ = "\u27E7", EJ = "\u2986", DJ = "\u{1D563}", TJ = "\u211D", MJ = "\u2A2E", OJ = "\u2A35", LJ = "\u2970", RJ = ")", IJ = "\u2994", NJ = "\u2A12", PJ = "\u21C9", FJ = "\u21DB", BJ = "\u203A", qJ = "\u{1D4C7}", $J = "\u211B", HJ = "\u21B1", zJ = "\u21B1", VJ = "]", UJ = "\u2019", WJ = "\u2019", jJ = "\u22CC", GJ = "\u22CA", YJ = "\u25B9", KJ = "\u22B5", JJ = "\u25B8", ZJ = "\u29CE", XJ = "\u29F4", QJ = "\u2968", eZ = "\u211E", tZ = "\u015A", nZ = "\u015B", rZ = "\u201A", iZ = "\u2AB8", sZ = "\u0160", oZ = "\u0161", lZ = "\u2ABC", cZ = "\u227B", aZ = "\u227D", hZ = "\u2AB0", uZ = "\u2AB4", fZ = "\u015E", dZ = "\u015F", pZ = "\u015C", gZ = "\u015D", mZ = "\u2ABA", yZ = "\u2AB6", bZ = "\u22E9", wZ = "\u2A13", vZ = "\u227F", xZ = "\u0421", kZ = "\u0441", _Z = "\u22A1", SZ = "\u22C5", CZ = "\u2A66", AZ = "\u2925", EZ = "\u2198", DZ = "\u21D8", TZ = "\u2198", MZ = "\xA7", OZ = ";", LZ = "\u2929", RZ = "\u2216", IZ = "\u2216", NZ = "\u2736", PZ = "\u{1D516}", FZ = "\u{1D530}", BZ = "\u2322", qZ = "\u266F", $Z = "\u0429", HZ = "\u0449", zZ = "\u0428", VZ = "\u0448", UZ = "\u2193", WZ = "\u2190", jZ = "\u2223", GZ = "\u2225", YZ = "\u2192", KZ = "\u2191", JZ = "\xAD", ZZ = "\u03A3", XZ = "\u03C3", QZ = "\u03C2", eX = "\u03C2", tX = "\u223C", nX = "\u2A6A", rX = "\u2243", iX = "\u2243", sX = "\u2A9E", oX = "\u2AA0", lX = "\u2A9D", cX = "\u2A9F", aX = "\u2246", hX = "\u2A24", uX = "\u2972", fX = "\u2190", dX = "\u2218", pX = "\u2216", gX = "\u2A33", mX = "\u29E4", yX = "\u2223", bX = "\u2323", wX = "\u2AAA", vX = "\u2AAC", xX = "\u2AAC\uFE00", kX = "\u042C", _X = "\u044C", SX = "\u233F", CX = "\u29C4", AX = "/", EX = "\u{1D54A}", DX = "\u{1D564}", TX = "\u2660", MX = "\u2660", OX = "\u2225", LX = "\u2293", RX = "\u2293\uFE00", IX = "\u2294", NX = "\u2294\uFE00", PX = "\u221A", FX = "\u228F", BX = "\u2291", qX = "\u228F", $X = "\u2291", HX = "\u2290", zX = "\u2292", VX = "\u2290", UX = "\u2292", WX = "\u25A1", jX = "\u25A1", GX = "\u2293", YX = "\u228F", KX = "\u2291", JX = "\u2290", ZX = "\u2292", XX = "\u2294", QX = "\u25AA", eQ = "\u25A1", tQ = "\u25AA", nQ = "\u2192", rQ = "\u{1D4AE}", iQ = "\u{1D4C8}", sQ = "\u2216", oQ = "\u2323", lQ = "\u22C6", cQ = "\u22C6", aQ = "\u2606", hQ = "\u2605", uQ = "\u03F5", fQ = "\u03D5", dQ = "\xAF", pQ = "\u2282", gQ = "\u22D0", mQ = "\u2ABD", yQ = "\u2AC5", bQ = "\u2286", wQ = "\u2AC3", vQ = "\u2AC1", xQ = "\u2ACB", kQ = "\u228A", _Q = "\u2ABF", SQ = "\u2979", CQ = "\u2282", AQ = "\u22D0", EQ = "\u2286", DQ = "\u2AC5", TQ = "\u2286", MQ = "\u228A", OQ = "\u2ACB", LQ = "\u2AC7", RQ = "\u2AD5", IQ = "\u2AD3", NQ = "\u2AB8", PQ = "\u227B", FQ = "\u227D", BQ = "\u227B", qQ = "\u2AB0", $Q = "\u227D", HQ = "\u227F", zQ = "\u2AB0", VQ = "\u2ABA", UQ = "\u2AB6", WQ = "\u22E9", jQ = "\u227F", GQ = "\u220B", YQ = "\u2211", KQ = "\u2211", JQ = "\u266A", ZQ = "\xB9", XQ = "\xB2", QQ = "\xB3", eee = "\u2283", tee = "\u22D1", nee = "\u2ABE", ree = "\u2AD8", iee = "\u2AC6", see = "\u2287", oee = "\u2AC4", lee = "\u2283", cee = "\u2287", aee = "\u27C9", hee = "\u2AD7", uee = "\u297B", fee = "\u2AC2", dee = "\u2ACC", pee = "\u228B", gee = "\u2AC0", mee = "\u2283", yee = "\u22D1", bee = "\u2287", wee = "\u2AC6", vee = "\u228B", xee = "\u2ACC", kee = "\u2AC8", _ee = "\u2AD4", See = "\u2AD6", Cee = "\u2926", Aee = "\u2199", Eee = "\u21D9", Dee = "\u2199", Tee = "\u292A", Mee = "\xDF", Oee = "	", Lee = "\u2316", Ree = "\u03A4", Iee = "\u03C4", Nee = "\u23B4", Pee = "\u0164", Fee = "\u0165", Bee = "\u0162", qee = "\u0163", $ee = "\u0422", Hee = "\u0442", zee = "\u20DB", Vee = "\u2315", Uee = "\u{1D517}", Wee = "\u{1D531}", jee = "\u2234", Gee = "\u2234", Yee = "\u2234", Kee = "\u0398", Jee = "\u03B8", Zee = "\u03D1", Xee = "\u03D1", Qee = "\u2248", ete = "\u223C", tte = "\u205F\u200A", nte = "\u2009", rte = "\u2009", ite = "\u2248", ste = "\u223C", ote = "\xDE", lte = "\xFE", cte = "\u02DC", ate = "\u223C", hte = "\u2243", ute = "\u2245", fte = "\u2248", dte = "\u2A31", pte = "\u22A0", gte = "\xD7", mte = "\u2A30", yte = "\u222D", bte = "\u2928", wte = "\u2336", vte = "\u2AF1", xte = "\u22A4", kte = "\u{1D54B}", _te = "\u{1D565}", Ste = "\u2ADA", Cte = "\u2929", Ate = "\u2034", Ete = "\u2122", Dte = "\u2122", Tte = "\u25B5", Mte = "\u25BF", Ote = "\u25C3", Lte = "\u22B4", Rte = "\u225C", Ite = "\u25B9", Nte = "\u22B5", Pte = "\u25EC", Fte = "\u225C", Bte = "\u2A3A", qte = "\u20DB", $te = "\u2A39", Hte = "\u29CD", zte = "\u2A3B", Vte = "\u23E2", Ute = "\u{1D4AF}", Wte = "\u{1D4C9}", jte = "\u0426", Gte = "\u0446", Yte = "\u040B", Kte = "\u045B", Jte = "\u0166", Zte = "\u0167", Xte = "\u226C", Qte = "\u219E", ene = "\u21A0", tne = "\xDA", nne = "\xFA", rne = "\u2191", ine = "\u219F", sne = "\u21D1", one = "\u2949", lne = "\u040E", cne = "\u045E", ane = "\u016C", hne = "\u016D", une = "\xDB", fne = "\xFB", dne = "\u0423", pne = "\u0443", gne = "\u21C5", mne = "\u0170", yne = "\u0171", bne = "\u296E", wne = "\u297E", vne = "\u{1D518}", xne = "\u{1D532}", kne = "\xD9", _ne = "\xF9", Sne = "\u2963", Cne = "\u21BF", Ane = "\u21BE", Ene = "\u2580", Dne = "\u231C", Tne = "\u231C", Mne = "\u230F", One = "\u25F8", Lne = "\u016A", Rne = "\u016B", Ine = "\xA8", Nne = "_", Pne = "\u23DF", Fne = "\u23B5", Bne = "\u23DD", qne = "\u22C3", $ne = "\u228E", Hne = "\u0172", zne = "\u0173", Vne = "\u{1D54C}", Une = "\u{1D566}", Wne = "\u2912", jne = "\u2191", Gne = "\u2191", Yne = "\u21D1", Kne = "\u21C5", Jne = "\u2195", Zne = "\u2195", Xne = "\u21D5", Qne = "\u296E", ere = "\u21BF", tre = "\u21BE", nre = "\u228E", rre = "\u2196", ire = "\u2197", sre = "\u03C5", ore = "\u03D2", lre = "\u03D2", cre = "\u03A5", are = "\u03C5", hre = "\u21A5", ure = "\u22A5", fre = "\u21C8", dre = "\u231D", pre = "\u231D", gre = "\u230E", mre = "\u016E", yre = "\u016F", bre = "\u25F9", wre = "\u{1D4B0}", vre = "\u{1D4CA}", xre = "\u22F0", kre = "\u0168", _re = "\u0169", Sre = "\u25B5", Cre = "\u25B4", Are = "\u21C8", Ere = "\xDC", Dre = "\xFC", Tre = "\u29A7", Mre = "\u299C", Ore = "\u03F5", Lre = "\u03F0", Rre = "\u2205", Ire = "\u03D5", Nre = "\u03D6", Pre = "\u221D", Fre = "\u2195", Bre = "\u21D5", qre = "\u03F1", $re = "\u03C2", Hre = "\u228A\uFE00", zre = "\u2ACB\uFE00", Vre = "\u228B\uFE00", Ure = "\u2ACC\uFE00", Wre = "\u03D1", jre = "\u22B2", Gre = "\u22B3", Yre = "\u2AE8", Kre = "\u2AEB", Jre = "\u2AE9", Zre = "\u0412", Xre = "\u0432", Qre = "\u22A2", eie = "\u22A8", tie = "\u22A9", nie = "\u22AB", rie = "\u2AE6", iie = "\u22BB", sie = "\u2228", oie = "\u22C1", lie = "\u225A", cie = "\u22EE", aie = "|", hie = "\u2016", uie = "|", fie = "\u2016", die = "\u2223", pie = "|", gie = "\u2758", mie = "\u2240", yie = "\u200A", bie = "\u{1D519}", wie = "\u{1D533}", vie = "\u22B2", xie = "\u2282\u20D2", kie = "\u2283\u20D2", _ie = "\u{1D54D}", Sie = "\u{1D567}", Cie = "\u221D", Aie = "\u22B3", Eie = "\u{1D4B1}", Die = "\u{1D4CB}", Tie = "\u2ACB\uFE00", Mie = "\u228A\uFE00", Oie = "\u2ACC\uFE00", Lie = "\u228B\uFE00", Rie = "\u22AA", Iie = "\u299A", Nie = "\u0174", Pie = "\u0175", Fie = "\u2A5F", Bie = "\u2227", qie = "\u22C0", $ie = "\u2259", Hie = "\u2118", zie = "\u{1D51A}", Vie = "\u{1D534}", Uie = "\u{1D54E}", Wie = "\u{1D568}", jie = "\u2118", Gie = "\u2240", Yie = "\u2240", Kie = "\u{1D4B2}", Jie = "\u{1D4CC}", Zie = "\u22C2", Xie = "\u25EF", Qie = "\u22C3", ese = "\u25BD", tse = "\u{1D51B}", nse = "\u{1D535}", rse = "\u27F7", ise = "\u27FA", sse = "\u039E", ose = "\u03BE", lse = "\u27F5", cse = "\u27F8", ase = "\u27FC", hse = "\u22FB", use = "\u2A00", fse = "\u{1D54F}", dse = "\u{1D569}", pse = "\u2A01", gse = "\u2A02", mse = "\u27F6", yse = "\u27F9", bse = "\u{1D4B3}", wse = "\u{1D4CD}", vse = "\u2A06", xse = "\u2A04", kse = "\u25B3", _se = "\u22C1", Sse = "\u22C0", Cse = "\xDD", Ase = "\xFD", Ese = "\u042F", Dse = "\u044F", Tse = "\u0176", Mse = "\u0177", Ose = "\u042B", Lse = "\u044B", Rse = "\xA5", Ise = "\u{1D51C}", Nse = "\u{1D536}", Pse = "\u0407", Fse = "\u0457", Bse = "\u{1D550}", qse = "\u{1D56A}", $se = "\u{1D4B4}", Hse = "\u{1D4CE}", zse = "\u042E", Vse = "\u044E", Use = "\xFF", Wse = "\u0178", jse = "\u0179", Gse = "\u017A", Yse = "\u017D", Kse = "\u017E", Jse = "\u0417", Zse = "\u0437", Xse = "\u017B", Qse = "\u017C", eoe = "\u2128", toe = "\u200B", noe = "\u0396", roe = "\u03B6", ioe = "\u{1D537}", soe = "\u2128", ooe = "\u0416", loe = "\u0436", coe = "\u21DD", aoe = "\u{1D56B}", hoe = "\u2124", uoe = "\u{1D4B5}", foe = "\u{1D4CF}", doe = "\u200D", poe = "\u200C", goe = {
  Aacute: X2,
  aacute: Q2,
  Abreve: eD,
  abreve: tD,
  ac: nD,
  acd: rD,
  acE: iD,
  Acirc: sD,
  acirc: oD,
  acute: lD,
  Acy: cD,
  acy: aD,
  AElig: hD,
  aelig: uD,
  af: fD,
  Afr: dD,
  afr: pD,
  Agrave: gD,
  agrave: mD,
  alefsym: yD,
  aleph: bD,
  Alpha: wD,
  alpha: vD,
  Amacr: xD,
  amacr: kD,
  amalg: _D,
  amp: SD,
  AMP: CD,
  andand: AD,
  And: ED,
  and: DD,
  andd: TD,
  andslope: MD,
  andv: OD,
  ang: LD,
  ange: RD,
  angle: ID,
  angmsdaa: ND,
  angmsdab: PD,
  angmsdac: FD,
  angmsdad: BD,
  angmsdae: qD,
  angmsdaf: $D,
  angmsdag: HD,
  angmsdah: zD,
  angmsd: VD,
  angrt: UD,
  angrtvb: WD,
  angrtvbd: jD,
  angsph: GD,
  angst: YD,
  angzarr: KD,
  Aogon: JD,
  aogon: ZD,
  Aopf: XD,
  aopf: QD,
  apacir: eT,
  ap: tT,
  apE: nT,
  ape: rT,
  apid: iT,
  apos: sT,
  ApplyFunction: oT,
  approx: lT,
  approxeq: cT,
  Aring: aT,
  aring: hT,
  Ascr: uT,
  ascr: fT,
  Assign: dT,
  ast: pT,
  asymp: gT,
  asympeq: mT,
  Atilde: yT,
  atilde: bT,
  Auml: wT,
  auml: vT,
  awconint: xT,
  awint: kT,
  backcong: _T,
  backepsilon: ST,
  backprime: CT,
  backsim: AT,
  backsimeq: ET,
  Backslash: DT,
  Barv: TT,
  barvee: MT,
  barwed: OT,
  Barwed: LT,
  barwedge: RT,
  bbrk: IT,
  bbrktbrk: NT,
  bcong: PT,
  Bcy: FT,
  bcy: BT,
  bdquo: qT,
  becaus: $T,
  because: HT,
  Because: zT,
  bemptyv: VT,
  bepsi: UT,
  bernou: WT,
  Bernoullis: jT,
  Beta: GT,
  beta: YT,
  beth: KT,
  between: JT,
  Bfr: ZT,
  bfr: XT,
  bigcap: QT,
  bigcirc: eM,
  bigcup: tM,
  bigodot: nM,
  bigoplus: rM,
  bigotimes: iM,
  bigsqcup: sM,
  bigstar: oM,
  bigtriangledown: lM,
  bigtriangleup: cM,
  biguplus: aM,
  bigvee: hM,
  bigwedge: uM,
  bkarow: fM,
  blacklozenge: dM,
  blacksquare: pM,
  blacktriangle: gM,
  blacktriangledown: mM,
  blacktriangleleft: yM,
  blacktriangleright: bM,
  blank: wM,
  blk12: vM,
  blk14: xM,
  blk34: kM,
  block: _M,
  bne: SM,
  bnequiv: CM,
  bNot: AM,
  bnot: EM,
  Bopf: DM,
  bopf: TM,
  bot: MM,
  bottom: OM,
  bowtie: LM,
  boxbox: RM,
  boxdl: IM,
  boxdL: NM,
  boxDl: PM,
  boxDL: FM,
  boxdr: BM,
  boxdR: qM,
  boxDr: $M,
  boxDR: HM,
  boxh: zM,
  boxH: VM,
  boxhd: UM,
  boxHd: WM,
  boxhD: jM,
  boxHD: GM,
  boxhu: YM,
  boxHu: KM,
  boxhU: JM,
  boxHU: ZM,
  boxminus: XM,
  boxplus: QM,
  boxtimes: eO,
  boxul: tO,
  boxuL: nO,
  boxUl: rO,
  boxUL: iO,
  boxur: sO,
  boxuR: oO,
  boxUr: lO,
  boxUR: cO,
  boxv: aO,
  boxV: hO,
  boxvh: uO,
  boxvH: fO,
  boxVh: dO,
  boxVH: pO,
  boxvl: gO,
  boxvL: mO,
  boxVl: yO,
  boxVL: bO,
  boxvr: wO,
  boxvR: vO,
  boxVr: xO,
  boxVR: kO,
  bprime: _O,
  breve: SO,
  Breve: CO,
  brvbar: AO,
  bscr: EO,
  Bscr: DO,
  bsemi: TO,
  bsim: MO,
  bsime: OO,
  bsolb: LO,
  bsol: RO,
  bsolhsub: IO,
  bull: NO,
  bullet: PO,
  bump: FO,
  bumpE: BO,
  bumpe: qO,
  Bumpeq: $O,
  bumpeq: HO,
  Cacute: zO,
  cacute: VO,
  capand: UO,
  capbrcup: WO,
  capcap: jO,
  cap: GO,
  Cap: YO,
  capcup: KO,
  capdot: JO,
  CapitalDifferentialD: ZO,
  caps: XO,
  caret: QO,
  caron: eL,
  Cayleys: tL,
  ccaps: nL,
  Ccaron: rL,
  ccaron: iL,
  Ccedil: sL,
  ccedil: oL,
  Ccirc: lL,
  ccirc: cL,
  Cconint: aL,
  ccups: hL,
  ccupssm: uL,
  Cdot: fL,
  cdot: dL,
  cedil: pL,
  Cedilla: gL,
  cemptyv: mL,
  cent: yL,
  centerdot: bL,
  CenterDot: wL,
  cfr: vL,
  Cfr: xL,
  CHcy: kL,
  chcy: _L,
  check: SL,
  checkmark: CL,
  Chi: AL,
  chi: EL,
  circ: DL,
  circeq: TL,
  circlearrowleft: ML,
  circlearrowright: OL,
  circledast: LL,
  circledcirc: RL,
  circleddash: IL,
  CircleDot: NL,
  circledR: PL,
  circledS: FL,
  CircleMinus: BL,
  CirclePlus: qL,
  CircleTimes: $L,
  cir: HL,
  cirE: zL,
  cire: VL,
  cirfnint: UL,
  cirmid: WL,
  cirscir: jL,
  ClockwiseContourIntegral: GL,
  CloseCurlyDoubleQuote: YL,
  CloseCurlyQuote: KL,
  clubs: JL,
  clubsuit: ZL,
  colon: XL,
  Colon: QL,
  Colone: eR,
  colone: tR,
  coloneq: nR,
  comma: rR,
  commat: iR,
  comp: sR,
  compfn: oR,
  complement: lR,
  complexes: cR,
  cong: aR,
  congdot: hR,
  Congruent: uR,
  conint: fR,
  Conint: dR,
  ContourIntegral: pR,
  copf: gR,
  Copf: mR,
  coprod: yR,
  Coproduct: bR,
  copy: wR,
  COPY: vR,
  copysr: xR,
  CounterClockwiseContourIntegral: kR,
  crarr: _R,
  cross: SR,
  Cross: CR,
  Cscr: AR,
  cscr: ER,
  csub: DR,
  csube: TR,
  csup: MR,
  csupe: OR,
  ctdot: LR,
  cudarrl: RR,
  cudarrr: IR,
  cuepr: NR,
  cuesc: PR,
  cularr: FR,
  cularrp: BR,
  cupbrcap: qR,
  cupcap: $R,
  CupCap: HR,
  cup: zR,
  Cup: VR,
  cupcup: UR,
  cupdot: WR,
  cupor: jR,
  cups: GR,
  curarr: YR,
  curarrm: KR,
  curlyeqprec: JR,
  curlyeqsucc: ZR,
  curlyvee: XR,
  curlywedge: QR,
  curren: eI,
  curvearrowleft: tI,
  curvearrowright: nI,
  cuvee: rI,
  cuwed: iI,
  cwconint: sI,
  cwint: oI,
  cylcty: lI,
  dagger: cI,
  Dagger: aI,
  daleth: hI,
  darr: uI,
  Darr: fI,
  dArr: dI,
  dash: pI,
  Dashv: gI,
  dashv: mI,
  dbkarow: yI,
  dblac: bI,
  Dcaron: wI,
  dcaron: vI,
  Dcy: xI,
  dcy: kI,
  ddagger: _I,
  ddarr: SI,
  DD: CI,
  dd: AI,
  DDotrahd: EI,
  ddotseq: DI,
  deg: TI,
  Del: MI,
  Delta: OI,
  delta: LI,
  demptyv: RI,
  dfisht: II,
  Dfr: NI,
  dfr: PI,
  dHar: FI,
  dharl: BI,
  dharr: qI,
  DiacriticalAcute: $I,
  DiacriticalDot: HI,
  DiacriticalDoubleAcute: zI,
  DiacriticalGrave: VI,
  DiacriticalTilde: UI,
  diam: WI,
  diamond: jI,
  Diamond: GI,
  diamondsuit: YI,
  diams: KI,
  die: JI,
  DifferentialD: ZI,
  digamma: XI,
  disin: QI,
  div: e3,
  divide: t3,
  divideontimes: n3,
  divonx: r3,
  DJcy: i3,
  djcy: s3,
  dlcorn: o3,
  dlcrop: l3,
  dollar: c3,
  Dopf: a3,
  dopf: h3,
  Dot: u3,
  dot: f3,
  DotDot: d3,
  doteq: p3,
  doteqdot: g3,
  DotEqual: m3,
  dotminus: y3,
  dotplus: b3,
  dotsquare: w3,
  doublebarwedge: v3,
  DoubleContourIntegral: x3,
  DoubleDot: k3,
  DoubleDownArrow: _3,
  DoubleLeftArrow: S3,
  DoubleLeftRightArrow: C3,
  DoubleLeftTee: A3,
  DoubleLongLeftArrow: E3,
  DoubleLongLeftRightArrow: D3,
  DoubleLongRightArrow: T3,
  DoubleRightArrow: M3,
  DoubleRightTee: O3,
  DoubleUpArrow: L3,
  DoubleUpDownArrow: R3,
  DoubleVerticalBar: I3,
  DownArrowBar: N3,
  downarrow: P3,
  DownArrow: F3,
  Downarrow: B3,
  DownArrowUpArrow: q3,
  DownBreve: $3,
  downdownarrows: H3,
  downharpoonleft: z3,
  downharpoonright: V3,
  DownLeftRightVector: U3,
  DownLeftTeeVector: W3,
  DownLeftVectorBar: j3,
  DownLeftVector: G3,
  DownRightTeeVector: Y3,
  DownRightVectorBar: K3,
  DownRightVector: J3,
  DownTeeArrow: Z3,
  DownTee: X3,
  drbkarow: Q3,
  drcorn: eN,
  drcrop: tN,
  Dscr: nN,
  dscr: rN,
  DScy: iN,
  dscy: sN,
  dsol: oN,
  Dstrok: lN,
  dstrok: cN,
  dtdot: aN,
  dtri: hN,
  dtrif: uN,
  duarr: fN,
  duhar: dN,
  dwangle: pN,
  DZcy: gN,
  dzcy: mN,
  dzigrarr: yN,
  Eacute: bN,
  eacute: wN,
  easter: vN,
  Ecaron: xN,
  ecaron: kN,
  Ecirc: _N,
  ecirc: SN,
  ecir: CN,
  ecolon: AN,
  Ecy: EN,
  ecy: DN,
  eDDot: TN,
  Edot: MN,
  edot: ON,
  eDot: LN,
  ee: RN,
  efDot: IN,
  Efr: NN,
  efr: PN,
  eg: FN,
  Egrave: BN,
  egrave: qN,
  egs: $N,
  egsdot: HN,
  el: zN,
  Element: VN,
  elinters: UN,
  ell: WN,
  els: jN,
  elsdot: GN,
  Emacr: YN,
  emacr: KN,
  empty: JN,
  emptyset: ZN,
  EmptySmallSquare: XN,
  emptyv: QN,
  EmptyVerySmallSquare: eP,
  emsp13: tP,
  emsp14: nP,
  emsp: rP,
  ENG: iP,
  eng: sP,
  ensp: oP,
  Eogon: lP,
  eogon: cP,
  Eopf: aP,
  eopf: hP,
  epar: uP,
  eparsl: fP,
  eplus: dP,
  epsi: pP,
  Epsilon: gP,
  epsilon: mP,
  epsiv: yP,
  eqcirc: bP,
  eqcolon: wP,
  eqsim: vP,
  eqslantgtr: xP,
  eqslantless: kP,
  Equal: _P,
  equals: SP,
  EqualTilde: CP,
  equest: AP,
  Equilibrium: EP,
  equiv: DP,
  equivDD: TP,
  eqvparsl: MP,
  erarr: OP,
  erDot: LP,
  escr: RP,
  Escr: IP,
  esdot: NP,
  Esim: PP,
  esim: FP,
  Eta: BP,
  eta: qP,
  ETH: $P,
  eth: HP,
  Euml: zP,
  euml: VP,
  euro: UP,
  excl: WP,
  exist: jP,
  Exists: GP,
  expectation: YP,
  exponentiale: KP,
  ExponentialE: JP,
  fallingdotseq: ZP,
  Fcy: XP,
  fcy: QP,
  female: eF,
  ffilig: tF,
  fflig: nF,
  ffllig: rF,
  Ffr: iF,
  ffr: sF,
  filig: oF,
  FilledSmallSquare: lF,
  FilledVerySmallSquare: cF,
  fjlig: aF,
  flat: hF,
  fllig: uF,
  fltns: fF,
  fnof: dF,
  Fopf: pF,
  fopf: gF,
  forall: mF,
  ForAll: yF,
  fork: bF,
  forkv: wF,
  Fouriertrf: vF,
  fpartint: xF,
  frac12: kF,
  frac13: _F,
  frac14: SF,
  frac15: CF,
  frac16: AF,
  frac18: EF,
  frac23: DF,
  frac25: TF,
  frac34: MF,
  frac35: OF,
  frac38: LF,
  frac45: RF,
  frac56: IF,
  frac58: NF,
  frac78: PF,
  frasl: FF,
  frown: BF,
  fscr: qF,
  Fscr: $F,
  gacute: HF,
  Gamma: zF,
  gamma: VF,
  Gammad: UF,
  gammad: WF,
  gap: jF,
  Gbreve: GF,
  gbreve: YF,
  Gcedil: KF,
  Gcirc: JF,
  gcirc: ZF,
  Gcy: XF,
  gcy: QF,
  Gdot: eB,
  gdot: tB,
  ge: nB,
  gE: rB,
  gEl: iB,
  gel: sB,
  geq: oB,
  geqq: lB,
  geqslant: cB,
  gescc: aB,
  ges: hB,
  gesdot: uB,
  gesdoto: fB,
  gesdotol: dB,
  gesl: pB,
  gesles: gB,
  Gfr: mB,
  gfr: yB,
  gg: bB,
  Gg: wB,
  ggg: vB,
  gimel: xB,
  GJcy: kB,
  gjcy: _B,
  gla: SB,
  gl: CB,
  glE: AB,
  glj: EB,
  gnap: DB,
  gnapprox: TB,
  gne: MB,
  gnE: OB,
  gneq: LB,
  gneqq: RB,
  gnsim: IB,
  Gopf: NB,
  gopf: PB,
  grave: FB,
  GreaterEqual: BB,
  GreaterEqualLess: qB,
  GreaterFullEqual: $B,
  GreaterGreater: HB,
  GreaterLess: zB,
  GreaterSlantEqual: VB,
  GreaterTilde: UB,
  Gscr: WB,
  gscr: jB,
  gsim: GB,
  gsime: YB,
  gsiml: KB,
  gtcc: JB,
  gtcir: ZB,
  gt: XB,
  GT: QB,
  Gt: e4,
  gtdot: t4,
  gtlPar: n4,
  gtquest: r4,
  gtrapprox: i4,
  gtrarr: s4,
  gtrdot: o4,
  gtreqless: l4,
  gtreqqless: c4,
  gtrless: a4,
  gtrsim: h4,
  gvertneqq: u4,
  gvnE: f4,
  Hacek: d4,
  hairsp: p4,
  half: g4,
  hamilt: m4,
  HARDcy: y4,
  hardcy: b4,
  harrcir: w4,
  harr: v4,
  hArr: x4,
  harrw: k4,
  Hat: _4,
  hbar: S4,
  Hcirc: C4,
  hcirc: A4,
  hearts: E4,
  heartsuit: D4,
  hellip: T4,
  hercon: M4,
  hfr: O4,
  Hfr: L4,
  HilbertSpace: R4,
  hksearow: I4,
  hkswarow: N4,
  hoarr: P4,
  homtht: F4,
  hookleftarrow: B4,
  hookrightarrow: q4,
  hopf: $4,
  Hopf: H4,
  horbar: z4,
  HorizontalLine: V4,
  hscr: U4,
  Hscr: W4,
  hslash: j4,
  Hstrok: G4,
  hstrok: Y4,
  HumpDownHump: K4,
  HumpEqual: J4,
  hybull: Z4,
  hyphen: X4,
  Iacute: Q4,
  iacute: e5,
  ic: t5,
  Icirc: n5,
  icirc: r5,
  Icy: i5,
  icy: s5,
  Idot: o5,
  IEcy: l5,
  iecy: c5,
  iexcl: a5,
  iff: h5,
  ifr: u5,
  Ifr: f5,
  Igrave: d5,
  igrave: p5,
  ii: g5,
  iiiint: m5,
  iiint: y5,
  iinfin: b5,
  iiota: w5,
  IJlig: v5,
  ijlig: x5,
  Imacr: k5,
  imacr: _5,
  image: S5,
  ImaginaryI: C5,
  imagline: A5,
  imagpart: E5,
  imath: D5,
  Im: T5,
  imof: M5,
  imped: O5,
  Implies: L5,
  incare: R5,
  in: "\u2208",
  infin: I5,
  infintie: N5,
  inodot: P5,
  intcal: F5,
  int: B5,
  Int: q5,
  integers: $5,
  Integral: H5,
  intercal: z5,
  Intersection: V5,
  intlarhk: U5,
  intprod: W5,
  InvisibleComma: j5,
  InvisibleTimes: G5,
  IOcy: Y5,
  iocy: K5,
  Iogon: J5,
  iogon: Z5,
  Iopf: X5,
  iopf: Q5,
  Iota: e6,
  iota: t6,
  iprod: n6,
  iquest: r6,
  iscr: i6,
  Iscr: s6,
  isin: o6,
  isindot: l6,
  isinE: c6,
  isins: a6,
  isinsv: h6,
  isinv: u6,
  it: f6,
  Itilde: d6,
  itilde: p6,
  Iukcy: g6,
  iukcy: m6,
  Iuml: y6,
  iuml: b6,
  Jcirc: w6,
  jcirc: v6,
  Jcy: x6,
  jcy: k6,
  Jfr: _6,
  jfr: S6,
  jmath: C6,
  Jopf: A6,
  jopf: E6,
  Jscr: D6,
  jscr: T6,
  Jsercy: M6,
  jsercy: O6,
  Jukcy: L6,
  jukcy: R6,
  Kappa: I6,
  kappa: N6,
  kappav: P6,
  Kcedil: F6,
  kcedil: B6,
  Kcy: q6,
  kcy: $6,
  Kfr: H6,
  kfr: z6,
  kgreen: V6,
  KHcy: U6,
  khcy: W6,
  KJcy: j6,
  kjcy: G6,
  Kopf: Y6,
  kopf: K6,
  Kscr: J6,
  kscr: Z6,
  lAarr: X6,
  Lacute: Q6,
  lacute: e8,
  laemptyv: t8,
  lagran: n8,
  Lambda: r8,
  lambda: i8,
  lang: s8,
  Lang: o8,
  langd: l8,
  langle: c8,
  lap: a8,
  Laplacetrf: h8,
  laquo: u8,
  larrb: f8,
  larrbfs: d8,
  larr: p8,
  Larr: g8,
  lArr: m8,
  larrfs: y8,
  larrhk: b8,
  larrlp: w8,
  larrpl: v8,
  larrsim: x8,
  larrtl: k8,
  latail: _8,
  lAtail: S8,
  lat: C8,
  late: A8,
  lates: E8,
  lbarr: D8,
  lBarr: T8,
  lbbrk: M8,
  lbrace: O8,
  lbrack: L8,
  lbrke: R8,
  lbrksld: I8,
  lbrkslu: N8,
  Lcaron: P8,
  lcaron: F8,
  Lcedil: B8,
  lcedil: q8,
  lceil: $8,
  lcub: H8,
  Lcy: z8,
  lcy: V8,
  ldca: U8,
  ldquo: W8,
  ldquor: j8,
  ldrdhar: G8,
  ldrushar: Y8,
  ldsh: K8,
  le: J8,
  lE: Z8,
  LeftAngleBracket: X8,
  LeftArrowBar: Q8,
  leftarrow: eq,
  LeftArrow: tq,
  Leftarrow: nq,
  LeftArrowRightArrow: rq,
  leftarrowtail: iq,
  LeftCeiling: sq,
  LeftDoubleBracket: oq,
  LeftDownTeeVector: lq,
  LeftDownVectorBar: cq,
  LeftDownVector: aq,
  LeftFloor: hq,
  leftharpoondown: uq,
  leftharpoonup: fq,
  leftleftarrows: dq,
  leftrightarrow: pq,
  LeftRightArrow: gq,
  Leftrightarrow: mq,
  leftrightarrows: yq,
  leftrightharpoons: bq,
  leftrightsquigarrow: wq,
  LeftRightVector: vq,
  LeftTeeArrow: xq,
  LeftTee: kq,
  LeftTeeVector: _q,
  leftthreetimes: Sq,
  LeftTriangleBar: Cq,
  LeftTriangle: Aq,
  LeftTriangleEqual: Eq,
  LeftUpDownVector: Dq,
  LeftUpTeeVector: Tq,
  LeftUpVectorBar: Mq,
  LeftUpVector: Oq,
  LeftVectorBar: Lq,
  LeftVector: Rq,
  lEg: Iq,
  leg: Nq,
  leq: Pq,
  leqq: Fq,
  leqslant: Bq,
  lescc: qq,
  les: $q,
  lesdot: Hq,
  lesdoto: zq,
  lesdotor: Vq,
  lesg: Uq,
  lesges: Wq,
  lessapprox: jq,
  lessdot: Gq,
  lesseqgtr: Yq,
  lesseqqgtr: Kq,
  LessEqualGreater: Jq,
  LessFullEqual: Zq,
  LessGreater: Xq,
  lessgtr: Qq,
  LessLess: e$,
  lesssim: t$,
  LessSlantEqual: n$,
  LessTilde: r$,
  lfisht: i$,
  lfloor: s$,
  Lfr: o$,
  lfr: l$,
  lg: c$,
  lgE: a$,
  lHar: h$,
  lhard: u$,
  lharu: f$,
  lharul: d$,
  lhblk: p$,
  LJcy: g$,
  ljcy: m$,
  llarr: y$,
  ll: b$,
  Ll: w$,
  llcorner: v$,
  Lleftarrow: x$,
  llhard: k$,
  lltri: _$,
  Lmidot: S$,
  lmidot: C$,
  lmoustache: A$,
  lmoust: E$,
  lnap: D$,
  lnapprox: T$,
  lne: M$,
  lnE: O$,
  lneq: L$,
  lneqq: R$,
  lnsim: I$,
  loang: N$,
  loarr: P$,
  lobrk: F$,
  longleftarrow: B$,
  LongLeftArrow: q$,
  Longleftarrow: $$,
  longleftrightarrow: H$,
  LongLeftRightArrow: z$,
  Longleftrightarrow: V$,
  longmapsto: U$,
  longrightarrow: W$,
  LongRightArrow: j$,
  Longrightarrow: G$,
  looparrowleft: Y$,
  looparrowright: K$,
  lopar: J$,
  Lopf: Z$,
  lopf: X$,
  loplus: Q$,
  lotimes: e9,
  lowast: t9,
  lowbar: n9,
  LowerLeftArrow: r9,
  LowerRightArrow: i9,
  loz: s9,
  lozenge: o9,
  lozf: l9,
  lpar: c9,
  lparlt: a9,
  lrarr: h9,
  lrcorner: u9,
  lrhar: f9,
  lrhard: d9,
  lrm: p9,
  lrtri: g9,
  lsaquo: m9,
  lscr: y9,
  Lscr: b9,
  lsh: w9,
  Lsh: v9,
  lsim: x9,
  lsime: k9,
  lsimg: _9,
  lsqb: S9,
  lsquo: C9,
  lsquor: A9,
  Lstrok: E9,
  lstrok: D9,
  ltcc: T9,
  ltcir: M9,
  lt: O9,
  LT: L9,
  Lt: R9,
  ltdot: I9,
  lthree: N9,
  ltimes: P9,
  ltlarr: F9,
  ltquest: B9,
  ltri: q9,
  ltrie: $9,
  ltrif: H9,
  ltrPar: z9,
  lurdshar: V9,
  luruhar: U9,
  lvertneqq: W9,
  lvnE: j9,
  macr: G9,
  male: Y9,
  malt: K9,
  maltese: J9,
  Map: "\u2905",
  map: Z9,
  mapsto: X9,
  mapstodown: Q9,
  mapstoleft: eH,
  mapstoup: tH,
  marker: nH,
  mcomma: rH,
  Mcy: iH,
  mcy: sH,
  mdash: oH,
  mDDot: lH,
  measuredangle: cH,
  MediumSpace: aH,
  Mellintrf: hH,
  Mfr: uH,
  mfr: fH,
  mho: dH,
  micro: pH,
  midast: gH,
  midcir: mH,
  mid: yH,
  middot: bH,
  minusb: wH,
  minus: vH,
  minusd: xH,
  minusdu: kH,
  MinusPlus: _H,
  mlcp: SH,
  mldr: CH,
  mnplus: AH,
  models: EH,
  Mopf: DH,
  mopf: TH,
  mp: MH,
  mscr: OH,
  Mscr: LH,
  mstpos: RH,
  Mu: IH,
  mu: NH,
  multimap: PH,
  mumap: FH,
  nabla: BH,
  Nacute: qH,
  nacute: $H,
  nang: HH,
  nap: zH,
  napE: VH,
  napid: UH,
  napos: WH,
  napprox: jH,
  natural: GH,
  naturals: YH,
  natur: KH,
  nbsp: JH,
  nbump: ZH,
  nbumpe: XH,
  ncap: QH,
  Ncaron: e7,
  ncaron: t7,
  Ncedil: n7,
  ncedil: r7,
  ncong: i7,
  ncongdot: s7,
  ncup: o7,
  Ncy: l7,
  ncy: c7,
  ndash: a7,
  nearhk: h7,
  nearr: u7,
  neArr: f7,
  nearrow: d7,
  ne: p7,
  nedot: g7,
  NegativeMediumSpace: m7,
  NegativeThickSpace: y7,
  NegativeThinSpace: b7,
  NegativeVeryThinSpace: w7,
  nequiv: v7,
  nesear: x7,
  nesim: k7,
  NestedGreaterGreater: _7,
  NestedLessLess: S7,
  NewLine: C7,
  nexist: A7,
  nexists: E7,
  Nfr: D7,
  nfr: T7,
  ngE: M7,
  nge: O7,
  ngeq: L7,
  ngeqq: R7,
  ngeqslant: I7,
  nges: N7,
  nGg: P7,
  ngsim: F7,
  nGt: B7,
  ngt: q7,
  ngtr: $7,
  nGtv: H7,
  nharr: z7,
  nhArr: V7,
  nhpar: U7,
  ni: W7,
  nis: j7,
  nisd: G7,
  niv: Y7,
  NJcy: K7,
  njcy: J7,
  nlarr: Z7,
  nlArr: X7,
  nldr: Q7,
  nlE: ez,
  nle: tz,
  nleftarrow: nz,
  nLeftarrow: rz,
  nleftrightarrow: iz,
  nLeftrightarrow: sz,
  nleq: oz,
  nleqq: lz,
  nleqslant: cz,
  nles: az,
  nless: hz,
  nLl: uz,
  nlsim: fz,
  nLt: dz,
  nlt: pz,
  nltri: gz,
  nltrie: mz,
  nLtv: yz,
  nmid: bz,
  NoBreak: wz,
  NonBreakingSpace: vz,
  nopf: xz,
  Nopf: kz,
  Not: _z,
  not: Sz,
  NotCongruent: Cz,
  NotCupCap: Az,
  NotDoubleVerticalBar: Ez,
  NotElement: Dz,
  NotEqual: Tz,
  NotEqualTilde: Mz,
  NotExists: Oz,
  NotGreater: Lz,
  NotGreaterEqual: Rz,
  NotGreaterFullEqual: Iz,
  NotGreaterGreater: Nz,
  NotGreaterLess: Pz,
  NotGreaterSlantEqual: Fz,
  NotGreaterTilde: Bz,
  NotHumpDownHump: qz,
  NotHumpEqual: $z,
  notin: Hz,
  notindot: zz,
  notinE: Vz,
  notinva: Uz,
  notinvb: Wz,
  notinvc: jz,
  NotLeftTriangleBar: Gz,
  NotLeftTriangle: Yz,
  NotLeftTriangleEqual: Kz,
  NotLess: Jz,
  NotLessEqual: Zz,
  NotLessGreater: Xz,
  NotLessLess: Qz,
  NotLessSlantEqual: eV,
  NotLessTilde: tV,
  NotNestedGreaterGreater: nV,
  NotNestedLessLess: rV,
  notni: iV,
  notniva: sV,
  notnivb: oV,
  notnivc: lV,
  NotPrecedes: cV,
  NotPrecedesEqual: aV,
  NotPrecedesSlantEqual: hV,
  NotReverseElement: uV,
  NotRightTriangleBar: fV,
  NotRightTriangle: dV,
  NotRightTriangleEqual: pV,
  NotSquareSubset: gV,
  NotSquareSubsetEqual: mV,
  NotSquareSuperset: yV,
  NotSquareSupersetEqual: bV,
  NotSubset: wV,
  NotSubsetEqual: vV,
  NotSucceeds: xV,
  NotSucceedsEqual: kV,
  NotSucceedsSlantEqual: _V,
  NotSucceedsTilde: SV,
  NotSuperset: CV,
  NotSupersetEqual: AV,
  NotTilde: EV,
  NotTildeEqual: DV,
  NotTildeFullEqual: TV,
  NotTildeTilde: MV,
  NotVerticalBar: OV,
  nparallel: LV,
  npar: RV,
  nparsl: IV,
  npart: NV,
  npolint: PV,
  npr: FV,
  nprcue: BV,
  nprec: qV,
  npreceq: $V,
  npre: HV,
  nrarrc: zV,
  nrarr: VV,
  nrArr: UV,
  nrarrw: WV,
  nrightarrow: jV,
  nRightarrow: GV,
  nrtri: YV,
  nrtrie: KV,
  nsc: JV,
  nsccue: ZV,
  nsce: XV,
  Nscr: QV,
  nscr: eU,
  nshortmid: tU,
  nshortparallel: nU,
  nsim: rU,
  nsime: iU,
  nsimeq: sU,
  nsmid: oU,
  nspar: lU,
  nsqsube: cU,
  nsqsupe: aU,
  nsub: hU,
  nsubE: uU,
  nsube: fU,
  nsubset: dU,
  nsubseteq: pU,
  nsubseteqq: gU,
  nsucc: mU,
  nsucceq: yU,
  nsup: bU,
  nsupE: wU,
  nsupe: vU,
  nsupset: xU,
  nsupseteq: kU,
  nsupseteqq: _U,
  ntgl: SU,
  Ntilde: CU,
  ntilde: AU,
  ntlg: EU,
  ntriangleleft: DU,
  ntrianglelefteq: TU,
  ntriangleright: MU,
  ntrianglerighteq: OU,
  Nu: LU,
  nu: RU,
  num: IU,
  numero: NU,
  numsp: PU,
  nvap: FU,
  nvdash: BU,
  nvDash: qU,
  nVdash: $U,
  nVDash: HU,
  nvge: zU,
  nvgt: VU,
  nvHarr: UU,
  nvinfin: WU,
  nvlArr: jU,
  nvle: GU,
  nvlt: YU,
  nvltrie: KU,
  nvrArr: JU,
  nvrtrie: ZU,
  nvsim: XU,
  nwarhk: QU,
  nwarr: eW,
  nwArr: tW,
  nwarrow: nW,
  nwnear: rW,
  Oacute: iW,
  oacute: sW,
  oast: oW,
  Ocirc: lW,
  ocirc: cW,
  ocir: aW,
  Ocy: hW,
  ocy: uW,
  odash: fW,
  Odblac: dW,
  odblac: pW,
  odiv: gW,
  odot: mW,
  odsold: yW,
  OElig: bW,
  oelig: wW,
  ofcir: vW,
  Ofr: xW,
  ofr: kW,
  ogon: _W,
  Ograve: SW,
  ograve: CW,
  ogt: AW,
  ohbar: EW,
  ohm: DW,
  oint: TW,
  olarr: MW,
  olcir: OW,
  olcross: LW,
  oline: RW,
  olt: IW,
  Omacr: NW,
  omacr: PW,
  Omega: FW,
  omega: BW,
  Omicron: qW,
  omicron: $W,
  omid: HW,
  ominus: zW,
  Oopf: VW,
  oopf: UW,
  opar: WW,
  OpenCurlyDoubleQuote: jW,
  OpenCurlyQuote: GW,
  operp: YW,
  oplus: KW,
  orarr: JW,
  Or: ZW,
  or: XW,
  ord: QW,
  order: ej,
  orderof: tj,
  ordf: nj,
  ordm: rj,
  origof: ij,
  oror: sj,
  orslope: oj,
  orv: lj,
  oS: cj,
  Oscr: aj,
  oscr: hj,
  Oslash: uj,
  oslash: fj,
  osol: dj,
  Otilde: pj,
  otilde: gj,
  otimesas: mj,
  Otimes: yj,
  otimes: bj,
  Ouml: wj,
  ouml: vj,
  ovbar: xj,
  OverBar: kj,
  OverBrace: _j,
  OverBracket: Sj,
  OverParenthesis: Cj,
  para: Aj,
  parallel: Ej,
  par: Dj,
  parsim: Tj,
  parsl: Mj,
  part: Oj,
  PartialD: Lj,
  Pcy: Rj,
  pcy: Ij,
  percnt: Nj,
  period: Pj,
  permil: Fj,
  perp: Bj,
  pertenk: qj,
  Pfr: $j,
  pfr: Hj,
  Phi: zj,
  phi: Vj,
  phiv: Uj,
  phmmat: Wj,
  phone: jj,
  Pi: Gj,
  pi: Yj,
  pitchfork: Kj,
  piv: Jj,
  planck: Zj,
  planckh: Xj,
  plankv: Qj,
  plusacir: eG,
  plusb: tG,
  pluscir: nG,
  plus: rG,
  plusdo: iG,
  plusdu: sG,
  pluse: oG,
  PlusMinus: lG,
  plusmn: cG,
  plussim: aG,
  plustwo: hG,
  pm: uG,
  Poincareplane: fG,
  pointint: dG,
  popf: pG,
  Popf: gG,
  pound: mG,
  prap: yG,
  Pr: bG,
  pr: wG,
  prcue: vG,
  precapprox: xG,
  prec: kG,
  preccurlyeq: _G,
  Precedes: SG,
  PrecedesEqual: CG,
  PrecedesSlantEqual: AG,
  PrecedesTilde: EG,
  preceq: DG,
  precnapprox: TG,
  precneqq: MG,
  precnsim: OG,
  pre: LG,
  prE: RG,
  precsim: IG,
  prime: NG,
  Prime: PG,
  primes: FG,
  prnap: BG,
  prnE: qG,
  prnsim: $G,
  prod: HG,
  Product: zG,
  profalar: VG,
  profline: UG,
  profsurf: WG,
  prop: jG,
  Proportional: GG,
  Proportion: YG,
  propto: KG,
  prsim: JG,
  prurel: ZG,
  Pscr: XG,
  pscr: QG,
  Psi: eY,
  psi: tY,
  puncsp: nY,
  Qfr: rY,
  qfr: iY,
  qint: sY,
  qopf: oY,
  Qopf: lY,
  qprime: cY,
  Qscr: aY,
  qscr: hY,
  quaternions: uY,
  quatint: fY,
  quest: dY,
  questeq: pY,
  quot: gY,
  QUOT: mY,
  rAarr: yY,
  race: bY,
  Racute: wY,
  racute: vY,
  radic: xY,
  raemptyv: kY,
  rang: _Y,
  Rang: SY,
  rangd: CY,
  range: AY,
  rangle: EY,
  raquo: DY,
  rarrap: TY,
  rarrb: MY,
  rarrbfs: OY,
  rarrc: LY,
  rarr: RY,
  Rarr: IY,
  rArr: NY,
  rarrfs: PY,
  rarrhk: FY,
  rarrlp: BY,
  rarrpl: qY,
  rarrsim: $Y,
  Rarrtl: HY,
  rarrtl: zY,
  rarrw: VY,
  ratail: UY,
  rAtail: WY,
  ratio: jY,
  rationals: GY,
  rbarr: YY,
  rBarr: KY,
  RBarr: JY,
  rbbrk: ZY,
  rbrace: XY,
  rbrack: QY,
  rbrke: eK,
  rbrksld: tK,
  rbrkslu: nK,
  Rcaron: rK,
  rcaron: iK,
  Rcedil: sK,
  rcedil: oK,
  rceil: lK,
  rcub: cK,
  Rcy: aK,
  rcy: hK,
  rdca: uK,
  rdldhar: fK,
  rdquo: dK,
  rdquor: pK,
  rdsh: gK,
  real: mK,
  realine: yK,
  realpart: bK,
  reals: wK,
  Re: vK,
  rect: xK,
  reg: kK,
  REG: _K,
  ReverseElement: SK,
  ReverseEquilibrium: CK,
  ReverseUpEquilibrium: AK,
  rfisht: EK,
  rfloor: DK,
  rfr: TK,
  Rfr: MK,
  rHar: OK,
  rhard: LK,
  rharu: RK,
  rharul: IK,
  Rho: NK,
  rho: PK,
  rhov: FK,
  RightAngleBracket: BK,
  RightArrowBar: qK,
  rightarrow: $K,
  RightArrow: HK,
  Rightarrow: zK,
  RightArrowLeftArrow: VK,
  rightarrowtail: UK,
  RightCeiling: WK,
  RightDoubleBracket: jK,
  RightDownTeeVector: GK,
  RightDownVectorBar: YK,
  RightDownVector: KK,
  RightFloor: JK,
  rightharpoondown: ZK,
  rightharpoonup: XK,
  rightleftarrows: QK,
  rightleftharpoons: eJ,
  rightrightarrows: tJ,
  rightsquigarrow: nJ,
  RightTeeArrow: rJ,
  RightTee: iJ,
  RightTeeVector: sJ,
  rightthreetimes: oJ,
  RightTriangleBar: lJ,
  RightTriangle: cJ,
  RightTriangleEqual: aJ,
  RightUpDownVector: hJ,
  RightUpTeeVector: uJ,
  RightUpVectorBar: fJ,
  RightUpVector: dJ,
  RightVectorBar: pJ,
  RightVector: gJ,
  ring: mJ,
  risingdotseq: yJ,
  rlarr: bJ,
  rlhar: wJ,
  rlm: vJ,
  rmoustache: xJ,
  rmoust: kJ,
  rnmid: _J,
  roang: SJ,
  roarr: CJ,
  robrk: AJ,
  ropar: EJ,
  ropf: DJ,
  Ropf: TJ,
  roplus: MJ,
  rotimes: OJ,
  RoundImplies: LJ,
  rpar: RJ,
  rpargt: IJ,
  rppolint: NJ,
  rrarr: PJ,
  Rrightarrow: FJ,
  rsaquo: BJ,
  rscr: qJ,
  Rscr: $J,
  rsh: HJ,
  Rsh: zJ,
  rsqb: VJ,
  rsquo: UJ,
  rsquor: WJ,
  rthree: jJ,
  rtimes: GJ,
  rtri: YJ,
  rtrie: KJ,
  rtrif: JJ,
  rtriltri: ZJ,
  RuleDelayed: XJ,
  ruluhar: QJ,
  rx: eZ,
  Sacute: tZ,
  sacute: nZ,
  sbquo: rZ,
  scap: iZ,
  Scaron: sZ,
  scaron: oZ,
  Sc: lZ,
  sc: cZ,
  sccue: aZ,
  sce: hZ,
  scE: uZ,
  Scedil: fZ,
  scedil: dZ,
  Scirc: pZ,
  scirc: gZ,
  scnap: mZ,
  scnE: yZ,
  scnsim: bZ,
  scpolint: wZ,
  scsim: vZ,
  Scy: xZ,
  scy: kZ,
  sdotb: _Z,
  sdot: SZ,
  sdote: CZ,
  searhk: AZ,
  searr: EZ,
  seArr: DZ,
  searrow: TZ,
  sect: MZ,
  semi: OZ,
  seswar: LZ,
  setminus: RZ,
  setmn: IZ,
  sext: NZ,
  Sfr: PZ,
  sfr: FZ,
  sfrown: BZ,
  sharp: qZ,
  SHCHcy: $Z,
  shchcy: HZ,
  SHcy: zZ,
  shcy: VZ,
  ShortDownArrow: UZ,
  ShortLeftArrow: WZ,
  shortmid: jZ,
  shortparallel: GZ,
  ShortRightArrow: YZ,
  ShortUpArrow: KZ,
  shy: JZ,
  Sigma: ZZ,
  sigma: XZ,
  sigmaf: QZ,
  sigmav: eX,
  sim: tX,
  simdot: nX,
  sime: rX,
  simeq: iX,
  simg: sX,
  simgE: oX,
  siml: lX,
  simlE: cX,
  simne: aX,
  simplus: hX,
  simrarr: uX,
  slarr: fX,
  SmallCircle: dX,
  smallsetminus: pX,
  smashp: gX,
  smeparsl: mX,
  smid: yX,
  smile: bX,
  smt: wX,
  smte: vX,
  smtes: xX,
  SOFTcy: kX,
  softcy: _X,
  solbar: SX,
  solb: CX,
  sol: AX,
  Sopf: EX,
  sopf: DX,
  spades: TX,
  spadesuit: MX,
  spar: OX,
  sqcap: LX,
  sqcaps: RX,
  sqcup: IX,
  sqcups: NX,
  Sqrt: PX,
  sqsub: FX,
  sqsube: BX,
  sqsubset: qX,
  sqsubseteq: $X,
  sqsup: HX,
  sqsupe: zX,
  sqsupset: VX,
  sqsupseteq: UX,
  square: WX,
  Square: jX,
  SquareIntersection: GX,
  SquareSubset: YX,
  SquareSubsetEqual: KX,
  SquareSuperset: JX,
  SquareSupersetEqual: ZX,
  SquareUnion: XX,
  squarf: QX,
  squ: eQ,
  squf: tQ,
  srarr: nQ,
  Sscr: rQ,
  sscr: iQ,
  ssetmn: sQ,
  ssmile: oQ,
  sstarf: lQ,
  Star: cQ,
  star: aQ,
  starf: hQ,
  straightepsilon: uQ,
  straightphi: fQ,
  strns: dQ,
  sub: pQ,
  Sub: gQ,
  subdot: mQ,
  subE: yQ,
  sube: bQ,
  subedot: wQ,
  submult: vQ,
  subnE: xQ,
  subne: kQ,
  subplus: _Q,
  subrarr: SQ,
  subset: CQ,
  Subset: AQ,
  subseteq: EQ,
  subseteqq: DQ,
  SubsetEqual: TQ,
  subsetneq: MQ,
  subsetneqq: OQ,
  subsim: LQ,
  subsub: RQ,
  subsup: IQ,
  succapprox: NQ,
  succ: PQ,
  succcurlyeq: FQ,
  Succeeds: BQ,
  SucceedsEqual: qQ,
  SucceedsSlantEqual: $Q,
  SucceedsTilde: HQ,
  succeq: zQ,
  succnapprox: VQ,
  succneqq: UQ,
  succnsim: WQ,
  succsim: jQ,
  SuchThat: GQ,
  sum: YQ,
  Sum: KQ,
  sung: JQ,
  sup1: ZQ,
  sup2: XQ,
  sup3: QQ,
  sup: eee,
  Sup: tee,
  supdot: nee,
  supdsub: ree,
  supE: iee,
  supe: see,
  supedot: oee,
  Superset: lee,
  SupersetEqual: cee,
  suphsol: aee,
  suphsub: hee,
  suplarr: uee,
  supmult: fee,
  supnE: dee,
  supne: pee,
  supplus: gee,
  supset: mee,
  Supset: yee,
  supseteq: bee,
  supseteqq: wee,
  supsetneq: vee,
  supsetneqq: xee,
  supsim: kee,
  supsub: _ee,
  supsup: See,
  swarhk: Cee,
  swarr: Aee,
  swArr: Eee,
  swarrow: Dee,
  swnwar: Tee,
  szlig: Mee,
  Tab: Oee,
  target: Lee,
  Tau: Ree,
  tau: Iee,
  tbrk: Nee,
  Tcaron: Pee,
  tcaron: Fee,
  Tcedil: Bee,
  tcedil: qee,
  Tcy: $ee,
  tcy: Hee,
  tdot: zee,
  telrec: Vee,
  Tfr: Uee,
  tfr: Wee,
  there4: jee,
  therefore: Gee,
  Therefore: Yee,
  Theta: Kee,
  theta: Jee,
  thetasym: Zee,
  thetav: Xee,
  thickapprox: Qee,
  thicksim: ete,
  ThickSpace: tte,
  ThinSpace: nte,
  thinsp: rte,
  thkap: ite,
  thksim: ste,
  THORN: ote,
  thorn: lte,
  tilde: cte,
  Tilde: ate,
  TildeEqual: hte,
  TildeFullEqual: ute,
  TildeTilde: fte,
  timesbar: dte,
  timesb: pte,
  times: gte,
  timesd: mte,
  tint: yte,
  toea: bte,
  topbot: wte,
  topcir: vte,
  top: xte,
  Topf: kte,
  topf: _te,
  topfork: Ste,
  tosa: Cte,
  tprime: Ate,
  trade: Ete,
  TRADE: Dte,
  triangle: Tte,
  triangledown: Mte,
  triangleleft: Ote,
  trianglelefteq: Lte,
  triangleq: Rte,
  triangleright: Ite,
  trianglerighteq: Nte,
  tridot: Pte,
  trie: Fte,
  triminus: Bte,
  TripleDot: qte,
  triplus: $te,
  trisb: Hte,
  tritime: zte,
  trpezium: Vte,
  Tscr: Ute,
  tscr: Wte,
  TScy: jte,
  tscy: Gte,
  TSHcy: Yte,
  tshcy: Kte,
  Tstrok: Jte,
  tstrok: Zte,
  twixt: Xte,
  twoheadleftarrow: Qte,
  twoheadrightarrow: ene,
  Uacute: tne,
  uacute: nne,
  uarr: rne,
  Uarr: ine,
  uArr: sne,
  Uarrocir: one,
  Ubrcy: lne,
  ubrcy: cne,
  Ubreve: ane,
  ubreve: hne,
  Ucirc: une,
  ucirc: fne,
  Ucy: dne,
  ucy: pne,
  udarr: gne,
  Udblac: mne,
  udblac: yne,
  udhar: bne,
  ufisht: wne,
  Ufr: vne,
  ufr: xne,
  Ugrave: kne,
  ugrave: _ne,
  uHar: Sne,
  uharl: Cne,
  uharr: Ane,
  uhblk: Ene,
  ulcorn: Dne,
  ulcorner: Tne,
  ulcrop: Mne,
  ultri: One,
  Umacr: Lne,
  umacr: Rne,
  uml: Ine,
  UnderBar: Nne,
  UnderBrace: Pne,
  UnderBracket: Fne,
  UnderParenthesis: Bne,
  Union: qne,
  UnionPlus: $ne,
  Uogon: Hne,
  uogon: zne,
  Uopf: Vne,
  uopf: Une,
  UpArrowBar: Wne,
  uparrow: jne,
  UpArrow: Gne,
  Uparrow: Yne,
  UpArrowDownArrow: Kne,
  updownarrow: Jne,
  UpDownArrow: Zne,
  Updownarrow: Xne,
  UpEquilibrium: Qne,
  upharpoonleft: ere,
  upharpoonright: tre,
  uplus: nre,
  UpperLeftArrow: rre,
  UpperRightArrow: ire,
  upsi: sre,
  Upsi: ore,
  upsih: lre,
  Upsilon: cre,
  upsilon: are,
  UpTeeArrow: hre,
  UpTee: ure,
  upuparrows: fre,
  urcorn: dre,
  urcorner: pre,
  urcrop: gre,
  Uring: mre,
  uring: yre,
  urtri: bre,
  Uscr: wre,
  uscr: vre,
  utdot: xre,
  Utilde: kre,
  utilde: _re,
  utri: Sre,
  utrif: Cre,
  uuarr: Are,
  Uuml: Ere,
  uuml: Dre,
  uwangle: Tre,
  vangrt: Mre,
  varepsilon: Ore,
  varkappa: Lre,
  varnothing: Rre,
  varphi: Ire,
  varpi: Nre,
  varpropto: Pre,
  varr: Fre,
  vArr: Bre,
  varrho: qre,
  varsigma: $re,
  varsubsetneq: Hre,
  varsubsetneqq: zre,
  varsupsetneq: Vre,
  varsupsetneqq: Ure,
  vartheta: Wre,
  vartriangleleft: jre,
  vartriangleright: Gre,
  vBar: Yre,
  Vbar: Kre,
  vBarv: Jre,
  Vcy: Zre,
  vcy: Xre,
  vdash: Qre,
  vDash: eie,
  Vdash: tie,
  VDash: nie,
  Vdashl: rie,
  veebar: iie,
  vee: sie,
  Vee: oie,
  veeeq: lie,
  vellip: cie,
  verbar: aie,
  Verbar: hie,
  vert: uie,
  Vert: fie,
  VerticalBar: die,
  VerticalLine: pie,
  VerticalSeparator: gie,
  VerticalTilde: mie,
  VeryThinSpace: yie,
  Vfr: bie,
  vfr: wie,
  vltri: vie,
  vnsub: xie,
  vnsup: kie,
  Vopf: _ie,
  vopf: Sie,
  vprop: Cie,
  vrtri: Aie,
  Vscr: Eie,
  vscr: Die,
  vsubnE: Tie,
  vsubne: Mie,
  vsupnE: Oie,
  vsupne: Lie,
  Vvdash: Rie,
  vzigzag: Iie,
  Wcirc: Nie,
  wcirc: Pie,
  wedbar: Fie,
  wedge: Bie,
  Wedge: qie,
  wedgeq: $ie,
  weierp: Hie,
  Wfr: zie,
  wfr: Vie,
  Wopf: Uie,
  wopf: Wie,
  wp: jie,
  wr: Gie,
  wreath: Yie,
  Wscr: Kie,
  wscr: Jie,
  xcap: Zie,
  xcirc: Xie,
  xcup: Qie,
  xdtri: ese,
  Xfr: tse,
  xfr: nse,
  xharr: rse,
  xhArr: ise,
  Xi: sse,
  xi: ose,
  xlarr: lse,
  xlArr: cse,
  xmap: ase,
  xnis: hse,
  xodot: use,
  Xopf: fse,
  xopf: dse,
  xoplus: pse,
  xotime: gse,
  xrarr: mse,
  xrArr: yse,
  Xscr: bse,
  xscr: wse,
  xsqcup: vse,
  xuplus: xse,
  xutri: kse,
  xvee: _se,
  xwedge: Sse,
  Yacute: Cse,
  yacute: Ase,
  YAcy: Ese,
  yacy: Dse,
  Ycirc: Tse,
  ycirc: Mse,
  Ycy: Ose,
  ycy: Lse,
  yen: Rse,
  Yfr: Ise,
  yfr: Nse,
  YIcy: Pse,
  yicy: Fse,
  Yopf: Bse,
  yopf: qse,
  Yscr: $se,
  yscr: Hse,
  YUcy: zse,
  yucy: Vse,
  yuml: Use,
  Yuml: Wse,
  Zacute: jse,
  zacute: Gse,
  Zcaron: Yse,
  zcaron: Kse,
  Zcy: Jse,
  zcy: Zse,
  Zdot: Xse,
  zdot: Qse,
  zeetrf: eoe,
  ZeroWidthSpace: toe,
  Zeta: noe,
  zeta: roe,
  zfr: ioe,
  Zfr: soe,
  ZHcy: ooe,
  zhcy: loe,
  zigrarr: coe,
  zopf: aoe,
  Zopf: hoe,
  Zscr: uoe,
  zscr: foe,
  zwj: doe,
  zwnj: poe
};
(function(t) {
  t.exports = goe;
})(id);
var sd = /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4E\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/, as = {}, Bg = {};
function moe(t) {
  var e, n, r = Bg[t];
  if (r)
    return r;
  for (r = Bg[t] = [], e = 0; e < 128; e++)
    n = String.fromCharCode(e), /^[0-9a-z]$/i.test(n) ? r.push(n) : r.push("%" + ("0" + e.toString(16).toUpperCase()).slice(-2));
  for (e = 0; e < t.length; e++)
    r[t.charCodeAt(e)] = t[e];
  return r;
}
function ea(t, e, n) {
  var r, i, s, o, l, c = "";
  for (typeof e != "string" && (n = e, e = ea.defaultChars), typeof n > "u" && (n = !0), l = moe(e), r = 0, i = t.length; r < i; r++) {
    if (s = t.charCodeAt(r), n && s === 37 && r + 2 < i && /^[0-9a-f]{2}$/i.test(t.slice(r + 1, r + 3))) {
      c += t.slice(r, r + 3), r += 2;
      continue;
    }
    if (s < 128) {
      c += l[s];
      continue;
    }
    if (s >= 55296 && s <= 57343) {
      if (s >= 55296 && s <= 56319 && r + 1 < i && (o = t.charCodeAt(r + 1), o >= 56320 && o <= 57343)) {
        c += encodeURIComponent(t[r] + t[r + 1]), r++;
        continue;
      }
      c += "%EF%BF%BD";
      continue;
    }
    c += encodeURIComponent(t[r]);
  }
  return c;
}
ea.defaultChars = ";/?:@&=+$,-_.!~*'()#";
ea.componentChars = "-_.!~*'()";
var yoe = ea, qg = {};
function boe(t) {
  var e, n, r = qg[t];
  if (r)
    return r;
  for (r = qg[t] = [], e = 0; e < 128; e++)
    n = String.fromCharCode(e), r.push(n);
  for (e = 0; e < t.length; e++)
    n = t.charCodeAt(e), r[n] = "%" + ("0" + n.toString(16).toUpperCase()).slice(-2);
  return r;
}
function ta(t, e) {
  var n;
  return typeof e != "string" && (e = ta.defaultChars), n = boe(e), t.replace(/(%[a-f0-9]{2})+/gi, function(r) {
    var i, s, o, l, c, a, h, u = "";
    for (i = 0, s = r.length; i < s; i += 3) {
      if (o = parseInt(r.slice(i + 1, i + 3), 16), o < 128) {
        u += n[o];
        continue;
      }
      if ((o & 224) === 192 && i + 3 < s && (l = parseInt(r.slice(i + 4, i + 6), 16), (l & 192) === 128)) {
        h = o << 6 & 1984 | l & 63, h < 128 ? u += "\uFFFD\uFFFD" : u += String.fromCharCode(h), i += 3;
        continue;
      }
      if ((o & 240) === 224 && i + 6 < s && (l = parseInt(r.slice(i + 4, i + 6), 16), c = parseInt(r.slice(i + 7, i + 9), 16), (l & 192) === 128 && (c & 192) === 128)) {
        h = o << 12 & 61440 | l << 6 & 4032 | c & 63, h < 2048 || h >= 55296 && h <= 57343 ? u += "\uFFFD\uFFFD\uFFFD" : u += String.fromCharCode(h), i += 6;
        continue;
      }
      if ((o & 248) === 240 && i + 9 < s && (l = parseInt(r.slice(i + 4, i + 6), 16), c = parseInt(r.slice(i + 7, i + 9), 16), a = parseInt(r.slice(i + 10, i + 12), 16), (l & 192) === 128 && (c & 192) === 128 && (a & 192) === 128)) {
        h = o << 18 & 1835008 | l << 12 & 258048 | c << 6 & 4032 | a & 63, h < 65536 || h > 1114111 ? u += "\uFFFD\uFFFD\uFFFD\uFFFD" : (h -= 65536, u += String.fromCharCode(55296 + (h >> 10), 56320 + (h & 1023))), i += 9;
        continue;
      }
      u += "\uFFFD";
    }
    return u;
  });
}
ta.defaultChars = ";/?:@&=+$,#";
ta.componentChars = "";
var woe = ta, voe = function(e) {
  var n = "";
  return n += e.protocol || "", n += e.slashes ? "//" : "", n += e.auth ? e.auth + "@" : "", e.hostname && e.hostname.indexOf(":") !== -1 ? n += "[" + e.hostname + "]" : n += e.hostname || "", n += e.port ? ":" + e.port : "", n += e.pathname || "", n += e.search || "", n += e.hash || "", n;
};
function lc() {
  this.protocol = null, this.slashes = null, this.auth = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.pathname = null;
}
var xoe = /^([a-z0-9.+-]+:)/i, koe = /:[0-9]*$/, _oe = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/, Soe = ["<", ">", '"', "`", " ", "\r", `
`, "	"], Coe = ["{", "}", "|", "\\", "^", "`"].concat(Soe), Aoe = ["'"].concat(Coe), $g = ["%", "/", "?", ";", "#"].concat(Aoe), Hg = ["/", "?", "#"], Eoe = 255, zg = /^[+a-z0-9A-Z_-]{0,63}$/, Doe = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, Vg = {
  javascript: !0,
  "javascript:": !0
}, Ug = {
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
function Toe(t, e) {
  if (t && t instanceof lc)
    return t;
  var n = new lc();
  return n.parse(t, e), n;
}
lc.prototype.parse = function(t, e) {
  var n, r, i, s, o, l = t;
  if (l = l.trim(), !e && t.split("#").length === 1) {
    var c = _oe.exec(l);
    if (c)
      return this.pathname = c[1], c[2] && (this.search = c[2]), this;
  }
  var a = xoe.exec(l);
  if (a && (a = a[0], i = a.toLowerCase(), this.protocol = a, l = l.substr(a.length)), (e || a || l.match(/^\/\/[^@\/]+@[^@\/]+/)) && (o = l.substr(0, 2) === "//", o && !(a && Vg[a]) && (l = l.substr(2), this.slashes = !0)), !Vg[a] && (o || a && !Ug[a])) {
    var h = -1;
    for (n = 0; n < Hg.length; n++)
      s = l.indexOf(Hg[n]), s !== -1 && (h === -1 || s < h) && (h = s);
    var u, f;
    for (h === -1 ? f = l.lastIndexOf("@") : f = l.lastIndexOf("@", h), f !== -1 && (u = l.slice(0, f), l = l.slice(f + 1), this.auth = u), h = -1, n = 0; n < $g.length; n++)
      s = l.indexOf($g[n]), s !== -1 && (h === -1 || s < h) && (h = s);
    h === -1 && (h = l.length), l[h - 1] === ":" && h--;
    var d = l.slice(0, h);
    l = l.slice(h), this.parseHost(d), this.hostname = this.hostname || "";
    var p = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
    if (!p) {
      var g = this.hostname.split(/\./);
      for (n = 0, r = g.length; n < r; n++) {
        var m = g[n];
        if (!!m && !m.match(zg)) {
          for (var y = "", b = 0, _ = m.length; b < _; b++)
            m.charCodeAt(b) > 127 ? y += "x" : y += m[b];
          if (!y.match(zg)) {
            var w = g.slice(0, n), x = g.slice(n + 1), v = m.match(Doe);
            v && (w.push(v[1]), x.unshift(v[2])), x.length && (l = x.join(".") + l), this.hostname = w.join(".");
            break;
          }
        }
      }
    }
    this.hostname.length > Eoe && (this.hostname = ""), p && (this.hostname = this.hostname.substr(1, this.hostname.length - 2));
  }
  var S = l.indexOf("#");
  S !== -1 && (this.hash = l.substr(S), l = l.slice(0, S));
  var R = l.indexOf("?");
  return R !== -1 && (this.search = l.substr(R), l = l.slice(0, R)), l && (this.pathname = l), Ug[i] && this.hostname && !this.pathname && (this.pathname = ""), this;
};
lc.prototype.parseHost = function(t) {
  var e = koe.exec(t);
  e && (e = e[0], e !== ":" && (this.port = e.substr(1)), t = t.substr(0, t.length - e.length)), t && (this.hostname = t);
};
var Moe = Toe;
as.encode = yoe;
as.decode = woe;
as.format = voe;
as.parse = Moe;
var Tr = {}, oh, Wg;
function S1() {
  return Wg || (Wg = 1, oh = /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/), oh;
}
var lh, jg;
function C1() {
  return jg || (jg = 1, lh = /[\0-\x1F\x7F-\x9F]/), lh;
}
var ch, Gg;
function Ooe() {
  return Gg || (Gg = 1, ch = /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/), ch;
}
var ah, Yg;
function A1() {
  return Yg || (Yg = 1, ah = /[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/), ah;
}
var Kg;
function Loe() {
  return Kg || (Kg = 1, Tr.Any = S1(), Tr.Cc = C1(), Tr.Cf = Ooe(), Tr.P = sd, Tr.Z = A1()), Tr;
}
(function(t) {
  function e(A) {
    return Object.prototype.toString.call(A);
  }
  function n(A) {
    return e(A) === "[object String]";
  }
  var r = Object.prototype.hasOwnProperty;
  function i(A, U) {
    return r.call(A, U);
  }
  function s(A) {
    var U = Array.prototype.slice.call(arguments, 1);
    return U.forEach(function($) {
      if (!!$) {
        if (typeof $ != "object")
          throw new TypeError($ + "must be object");
        Object.keys($).forEach(function(me) {
          A[me] = $[me];
        });
      }
    }), A;
  }
  function o(A, U, $) {
    return [].concat(A.slice(0, U), $, A.slice(U + 1));
  }
  function l(A) {
    return !(A >= 55296 && A <= 57343 || A >= 64976 && A <= 65007 || (A & 65535) === 65535 || (A & 65535) === 65534 || A >= 0 && A <= 8 || A === 11 || A >= 14 && A <= 31 || A >= 127 && A <= 159 || A > 1114111);
  }
  function c(A) {
    if (A > 65535) {
      A -= 65536;
      var U = 55296 + (A >> 10), $ = 56320 + (A & 1023);
      return String.fromCharCode(U, $);
    }
    return String.fromCharCode(A);
  }
  var a = /\\([!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~])/g, h = /&([a-z#][a-z0-9]{1,31});/gi, u = new RegExp(a.source + "|" + h.source, "gi"), f = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i, d = id.exports;
  function p(A, U) {
    var $ = 0;
    return i(d, U) ? d[U] : U.charCodeAt(0) === 35 && f.test(U) && ($ = U[1].toLowerCase() === "x" ? parseInt(U.slice(2), 16) : parseInt(U.slice(1), 10), l($)) ? c($) : A;
  }
  function g(A) {
    return A.indexOf("\\") < 0 ? A : A.replace(a, "$1");
  }
  function m(A) {
    return A.indexOf("\\") < 0 && A.indexOf("&") < 0 ? A : A.replace(u, function(U, $, me) {
      return $ || p(U, me);
    });
  }
  var y = /[&<>"]/, b = /[&<>"]/g, _ = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;"
  };
  function w(A) {
    return _[A];
  }
  function x(A) {
    return y.test(A) ? A.replace(b, w) : A;
  }
  var v = /[.?*+^$[\]\\(){}|-]/g;
  function S(A) {
    return A.replace(v, "\\$&");
  }
  function R(A) {
    switch (A) {
      case 9:
      case 32:
        return !0;
    }
    return !1;
  }
  function L(A) {
    if (A >= 8192 && A <= 8202)
      return !0;
    switch (A) {
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
  var D = sd;
  function z(A) {
    return D.test(A);
  }
  function re(A) {
    switch (A) {
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
  function J(A) {
    return A = A.trim().replace(/\s+/g, " "), "\u1E9E".toLowerCase() === "\u1E7E" && (A = A.replace(/ẞ/g, "\xDF")), A.toLowerCase().toUpperCase();
  }
  t.lib = {}, t.lib.mdurl = as, t.lib.ucmicro = Loe(), t.assign = s, t.isString = n, t.has = i, t.unescapeMd = g, t.unescapeAll = m, t.isValidEntityCode = l, t.fromCodePoint = c, t.escapeHtml = x, t.arrayReplaceAt = o, t.isSpace = R, t.isWhiteSpace = L, t.isMdAsciiPunct = re, t.isPunctChar = z, t.escapeRE = S, t.normalizeReference = J;
})(ne);
var na = {}, Roe = function(e, n, r) {
  var i, s, o, l, c = -1, a = e.posMax, h = e.pos;
  for (e.pos = n + 1, i = 1; e.pos < a; ) {
    if (o = e.src.charCodeAt(e.pos), o === 93 && (i--, i === 0)) {
      s = !0;
      break;
    }
    if (l = e.pos, e.md.inline.skipToken(e), o === 91) {
      if (l === e.pos - 1)
        i++;
      else if (r)
        return e.pos = h, -1;
    }
  }
  return s && (c = e.pos), e.pos = h, c;
}, Jg = ne.unescapeAll, Ioe = function(e, n, r) {
  var i, s, o = 0, l = n, c = {
    ok: !1,
    pos: 0,
    lines: 0,
    str: ""
  };
  if (e.charCodeAt(n) === 60) {
    for (n++; n < r; ) {
      if (i = e.charCodeAt(n), i === 10 || i === 60)
        return c;
      if (i === 62)
        return c.pos = n + 1, c.str = Jg(e.slice(l + 1, n)), c.ok = !0, c;
      if (i === 92 && n + 1 < r) {
        n += 2;
        continue;
      }
      n++;
    }
    return c;
  }
  for (s = 0; n < r && (i = e.charCodeAt(n), !(i === 32 || i < 32 || i === 127)); ) {
    if (i === 92 && n + 1 < r) {
      if (e.charCodeAt(n + 1) === 32)
        break;
      n += 2;
      continue;
    }
    if (i === 40 && (s++, s > 32))
      return c;
    if (i === 41) {
      if (s === 0)
        break;
      s--;
    }
    n++;
  }
  return l === n || s !== 0 || (c.str = Jg(e.slice(l, n)), c.lines = o, c.pos = n, c.ok = !0), c;
}, Noe = ne.unescapeAll, Poe = function(e, n, r) {
  var i, s, o = 0, l = n, c = {
    ok: !1,
    pos: 0,
    lines: 0,
    str: ""
  };
  if (n >= r || (s = e.charCodeAt(n), s !== 34 && s !== 39 && s !== 40))
    return c;
  for (n++, s === 40 && (s = 41); n < r; ) {
    if (i = e.charCodeAt(n), i === s)
      return c.pos = n + 1, c.lines = o, c.str = Noe(e.slice(l + 1, n)), c.ok = !0, c;
    if (i === 40 && s === 41)
      return c;
    i === 10 ? o++ : i === 92 && n + 1 < r && (n++, e.charCodeAt(n) === 10 && o++), n++;
  }
  return c;
};
na.parseLinkLabel = Roe;
na.parseLinkDestination = Ioe;
na.parseLinkTitle = Poe;
var Foe = ne.assign, Boe = ne.unescapeAll, Jr = ne.escapeHtml, kn = {};
kn.code_inline = function(t, e, n, r, i) {
  var s = t[e];
  return "<code" + i.renderAttrs(s) + ">" + Jr(t[e].content) + "</code>";
};
kn.code_block = function(t, e, n, r, i) {
  var s = t[e];
  return "<pre" + i.renderAttrs(s) + "><code>" + Jr(t[e].content) + `</code></pre>
`;
};
kn.fence = function(t, e, n, r, i) {
  var s = t[e], o = s.info ? Boe(s.info).trim() : "", l = "", c = "", a, h, u, f, d;
  return o && (u = o.split(/(\s+)/g), l = u[0], c = u.slice(2).join("")), n.highlight ? a = n.highlight(s.content, l, c) || Jr(s.content) : a = Jr(s.content), a.indexOf("<pre") === 0 ? a + `
` : o ? (h = s.attrIndex("class"), f = s.attrs ? s.attrs.slice() : [], h < 0 ? f.push(["class", n.langPrefix + l]) : (f[h] = f[h].slice(), f[h][1] += " " + n.langPrefix + l), d = {
    attrs: f
  }, "<pre><code" + i.renderAttrs(d) + ">" + a + `</code></pre>
`) : "<pre><code" + i.renderAttrs(s) + ">" + a + `</code></pre>
`;
};
kn.image = function(t, e, n, r, i) {
  var s = t[e];
  return s.attrs[s.attrIndex("alt")][1] = i.renderInlineAsText(s.children, n, r), i.renderToken(t, e, n);
};
kn.hardbreak = function(t, e, n) {
  return n.xhtmlOut ? `<br />
` : `<br>
`;
};
kn.softbreak = function(t, e, n) {
  return n.breaks ? n.xhtmlOut ? `<br />
` : `<br>
` : `
`;
};
kn.text = function(t, e) {
  return Jr(t[e].content);
};
kn.html_block = function(t, e) {
  return t[e].content;
};
kn.html_inline = function(t, e) {
  return t[e].content;
};
function hs() {
  this.rules = Foe({}, kn);
}
hs.prototype.renderAttrs = function(e) {
  var n, r, i;
  if (!e.attrs)
    return "";
  for (i = "", n = 0, r = e.attrs.length; n < r; n++)
    i += " " + Jr(e.attrs[n][0]) + '="' + Jr(e.attrs[n][1]) + '"';
  return i;
};
hs.prototype.renderToken = function(e, n, r) {
  var i, s = "", o = !1, l = e[n];
  return l.hidden ? "" : (l.block && l.nesting !== -1 && n && e[n - 1].hidden && (s += `
`), s += (l.nesting === -1 ? "</" : "<") + l.tag, s += this.renderAttrs(l), l.nesting === 0 && r.xhtmlOut && (s += " /"), l.block && (o = !0, l.nesting === 1 && n + 1 < e.length && (i = e[n + 1], (i.type === "inline" || i.hidden || i.nesting === -1 && i.tag === l.tag) && (o = !1))), s += o ? `>
` : ">", s);
};
hs.prototype.renderInline = function(t, e, n) {
  for (var r, i = "", s = this.rules, o = 0, l = t.length; o < l; o++)
    r = t[o].type, typeof s[r] < "u" ? i += s[r](t, o, e, n, this) : i += this.renderToken(t, o, e);
  return i;
};
hs.prototype.renderInlineAsText = function(t, e, n) {
  for (var r = "", i = 0, s = t.length; i < s; i++)
    t[i].type === "text" ? r += t[i].content : t[i].type === "image" ? r += this.renderInlineAsText(t[i].children, e, n) : t[i].type === "softbreak" && (r += `
`);
  return r;
};
hs.prototype.render = function(t, e, n) {
  var r, i, s, o = "", l = this.rules;
  for (r = 0, i = t.length; r < i; r++)
    s = t[r].type, s === "inline" ? o += this.renderInline(t[r].children, e, n) : typeof l[s] < "u" ? o += l[t[r].type](t, r, e, n, this) : o += this.renderToken(t, r, e, n);
  return o;
};
var qoe = hs;
function Zt() {
  this.__rules__ = [], this.__cache__ = null;
}
Zt.prototype.__find__ = function(t) {
  for (var e = 0; e < this.__rules__.length; e++)
    if (this.__rules__[e].name === t)
      return e;
  return -1;
};
Zt.prototype.__compile__ = function() {
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
Zt.prototype.at = function(t, e, n) {
  var r = this.__find__(t), i = n || {};
  if (r === -1)
    throw new Error("Parser rule not found: " + t);
  this.__rules__[r].fn = e, this.__rules__[r].alt = i.alt || [], this.__cache__ = null;
};
Zt.prototype.before = function(t, e, n, r) {
  var i = this.__find__(t), s = r || {};
  if (i === -1)
    throw new Error("Parser rule not found: " + t);
  this.__rules__.splice(i, 0, {
    name: e,
    enabled: !0,
    fn: n,
    alt: s.alt || []
  }), this.__cache__ = null;
};
Zt.prototype.after = function(t, e, n, r) {
  var i = this.__find__(t), s = r || {};
  if (i === -1)
    throw new Error("Parser rule not found: " + t);
  this.__rules__.splice(i + 1, 0, {
    name: e,
    enabled: !0,
    fn: n,
    alt: s.alt || []
  }), this.__cache__ = null;
};
Zt.prototype.push = function(t, e, n) {
  var r = n || {};
  this.__rules__.push({
    name: t,
    enabled: !0,
    fn: e,
    alt: r.alt || []
  }), this.__cache__ = null;
};
Zt.prototype.enable = function(t, e) {
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
Zt.prototype.enableOnly = function(t, e) {
  Array.isArray(t) || (t = [t]), this.__rules__.forEach(function(n) {
    n.enabled = !1;
  }), this.enable(t, e);
};
Zt.prototype.disable = function(t, e) {
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
Zt.prototype.getRules = function(t) {
  return this.__cache__ === null && this.__compile__(), this.__cache__[t] || [];
};
var od = Zt, $oe = /\r\n?|\n/g, Hoe = /\0/g, zoe = function(e) {
  var n;
  n = e.src.replace($oe, `
`), n = n.replace(Hoe, "\uFFFD"), e.src = n;
}, Voe = function(e) {
  var n;
  e.inlineMode ? (n = new e.Token("inline", "", 0), n.content = e.src, n.map = [0, 1], n.children = [], e.tokens.push(n)) : e.md.block.parse(e.src, e.md, e.env, e.tokens);
}, Uoe = function(e) {
  var n = e.tokens, r, i, s;
  for (i = 0, s = n.length; i < s; i++)
    r = n[i], r.type === "inline" && e.md.inline.parse(r.content, e.md, e.env, r.children);
}, Woe = ne.arrayReplaceAt;
function joe(t) {
  return /^<a[>\s]/i.test(t);
}
function Goe(t) {
  return /^<\/a\s*>/i.test(t);
}
var Yoe = function(e) {
  var n, r, i, s, o, l, c, a, h, u, f, d, p, g, m, y, b = e.tokens, _;
  if (!!e.md.options.linkify) {
    for (r = 0, i = b.length; r < i; r++)
      if (!(b[r].type !== "inline" || !e.md.linkify.pretest(b[r].content)))
        for (s = b[r].children, p = 0, n = s.length - 1; n >= 0; n--) {
          if (l = s[n], l.type === "link_close") {
            for (n--; s[n].level !== l.level && s[n].type !== "link_open"; )
              n--;
            continue;
          }
          if (l.type === "html_inline" && (joe(l.content) && p > 0 && p--, Goe(l.content) && p++), !(p > 0) && l.type === "text" && e.md.linkify.test(l.content)) {
            for (h = l.content, _ = e.md.linkify.match(h), c = [], d = l.level, f = 0, a = 0; a < _.length; a++)
              g = _[a].url, m = e.md.normalizeLink(g), e.md.validateLink(m) && (y = _[a].text, _[a].schema ? _[a].schema === "mailto:" && !/^mailto:/i.test(y) ? y = e.md.normalizeLinkText("mailto:" + y).replace(/^mailto:/, "") : y = e.md.normalizeLinkText(y) : y = e.md.normalizeLinkText("http://" + y).replace(/^http:\/\//, ""), u = _[a].index, u > f && (o = new e.Token("text", "", 0), o.content = h.slice(f, u), o.level = d, c.push(o)), o = new e.Token("link_open", "a", 1), o.attrs = [["href", m]], o.level = d++, o.markup = "linkify", o.info = "auto", c.push(o), o = new e.Token("text", "", 0), o.content = y, o.level = d, c.push(o), o = new e.Token("link_close", "a", -1), o.level = --d, o.markup = "linkify", o.info = "auto", c.push(o), f = _[a].lastIndex);
            f < h.length && (o = new e.Token("text", "", 0), o.content = h.slice(f), o.level = d, c.push(o)), b[r].children = s = Woe(s, n, c);
          }
        }
  }
}, E1 = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/, Koe = /\((c|tm|r|p)\)/i, Joe = /\((c|tm|r|p)\)/ig, Zoe = {
  c: "\xA9",
  r: "\xAE",
  p: "\xA7",
  tm: "\u2122"
};
function Xoe(t, e) {
  return Zoe[e.toLowerCase()];
}
function Qoe(t) {
  var e, n, r = 0;
  for (e = t.length - 1; e >= 0; e--)
    n = t[e], n.type === "text" && !r && (n.content = n.content.replace(Joe, Xoe)), n.type === "link_open" && n.info === "auto" && r--, n.type === "link_close" && n.info === "auto" && r++;
}
function ele(t) {
  var e, n, r = 0;
  for (e = t.length - 1; e >= 0; e--)
    n = t[e], n.type === "text" && !r && E1.test(n.content) && (n.content = n.content.replace(/\+-/g, "\xB1").replace(/\.{2,}/g, "\u2026").replace(/([?!])…/g, "$1..").replace(/([?!]){4,}/g, "$1$1$1").replace(/,{2,}/g, ",").replace(/(^|[^-])---(?=[^-]|$)/mg, "$1\u2014").replace(/(^|\s)--(?=\s|$)/mg, "$1\u2013").replace(/(^|[^-\s])--(?=[^-\s]|$)/mg, "$1\u2013")), n.type === "link_open" && n.info === "auto" && r--, n.type === "link_close" && n.info === "auto" && r++;
}
var tle = function(e) {
  var n;
  if (!!e.md.options.typographer)
    for (n = e.tokens.length - 1; n >= 0; n--)
      e.tokens[n].type === "inline" && (Koe.test(e.tokens[n].content) && Qoe(e.tokens[n].children), E1.test(e.tokens[n].content) && ele(e.tokens[n].children));
}, Zg = ne.isWhiteSpace, Xg = ne.isPunctChar, Qg = ne.isMdAsciiPunct, nle = /['"]/, em = /['"]/g, tm = "\u2019";
function Xo(t, e, n) {
  return t.substr(0, e) + n + t.substr(e + 1);
}
function rle(t, e) {
  var n, r, i, s, o, l, c, a, h, u, f, d, p, g, m, y, b, _, w, x, v;
  for (w = [], n = 0; n < t.length; n++) {
    for (r = t[n], c = t[n].level, b = w.length - 1; b >= 0 && !(w[b].level <= c); b--)
      ;
    if (w.length = b + 1, r.type !== "text")
      continue;
    i = r.content, o = 0, l = i.length;
    e:
      for (; o < l && (em.lastIndex = o, s = em.exec(i), !!s); ) {
        if (m = y = !0, o = s.index + 1, _ = s[0] === "'", h = 32, s.index - 1 >= 0)
          h = i.charCodeAt(s.index - 1);
        else
          for (b = n - 1; b >= 0 && !(t[b].type === "softbreak" || t[b].type === "hardbreak"); b--)
            if (!!t[b].content) {
              h = t[b].content.charCodeAt(t[b].content.length - 1);
              break;
            }
        if (u = 32, o < l)
          u = i.charCodeAt(o);
        else
          for (b = n + 1; b < t.length && !(t[b].type === "softbreak" || t[b].type === "hardbreak"); b++)
            if (!!t[b].content) {
              u = t[b].content.charCodeAt(0);
              break;
            }
        if (f = Qg(h) || Xg(String.fromCharCode(h)), d = Qg(u) || Xg(String.fromCharCode(u)), p = Zg(h), g = Zg(u), g ? m = !1 : d && (p || f || (m = !1)), p ? y = !1 : f && (g || d || (y = !1)), u === 34 && s[0] === '"' && h >= 48 && h <= 57 && (y = m = !1), m && y && (m = f, y = d), !m && !y) {
          _ && (r.content = Xo(r.content, s.index, tm));
          continue;
        }
        if (y) {
          for (b = w.length - 1; b >= 0 && (a = w[b], !(w[b].level < c)); b--)
            if (a.single === _ && w[b].level === c) {
              a = w[b], _ ? (x = e.md.options.quotes[2], v = e.md.options.quotes[3]) : (x = e.md.options.quotes[0], v = e.md.options.quotes[1]), r.content = Xo(r.content, s.index, v), t[a.token].content = Xo(
                t[a.token].content,
                a.pos,
                x
              ), o += v.length - 1, a.token === n && (o += x.length - 1), i = r.content, l = i.length, w.length = b;
              continue e;
            }
        }
        m ? w.push({
          token: n,
          pos: s.index,
          single: _,
          level: c
        }) : y && _ && (r.content = Xo(r.content, s.index, tm));
      }
  }
}
var ile = function(e) {
  var n;
  if (!!e.md.options.typographer)
    for (n = e.tokens.length - 1; n >= 0; n--)
      e.tokens[n].type !== "inline" || !nle.test(e.tokens[n].content) || rle(e.tokens[n].children, e);
};
function us(t, e, n) {
  this.type = t, this.tag = e, this.attrs = null, this.map = null, this.nesting = n, this.level = 0, this.children = null, this.content = "", this.markup = "", this.info = "", this.meta = null, this.block = !1, this.hidden = !1;
}
us.prototype.attrIndex = function(e) {
  var n, r, i;
  if (!this.attrs)
    return -1;
  for (n = this.attrs, r = 0, i = n.length; r < i; r++)
    if (n[r][0] === e)
      return r;
  return -1;
};
us.prototype.attrPush = function(e) {
  this.attrs ? this.attrs.push(e) : this.attrs = [e];
};
us.prototype.attrSet = function(e, n) {
  var r = this.attrIndex(e), i = [e, n];
  r < 0 ? this.attrPush(i) : this.attrs[r] = i;
};
us.prototype.attrGet = function(e) {
  var n = this.attrIndex(e), r = null;
  return n >= 0 && (r = this.attrs[n][1]), r;
};
us.prototype.attrJoin = function(e, n) {
  var r = this.attrIndex(e);
  r < 0 ? this.attrPush([e, n]) : this.attrs[r][1] = this.attrs[r][1] + " " + n;
};
var ld = us, sle = ld;
function D1(t, e, n) {
  this.src = t, this.env = n, this.tokens = [], this.inlineMode = !1, this.md = e;
}
D1.prototype.Token = sle;
var ole = D1, lle = od, hh = [
  ["normalize", zoe],
  ["block", Voe],
  ["inline", Uoe],
  ["linkify", Yoe],
  ["replacements", tle],
  ["smartquotes", ile]
];
function cd() {
  this.ruler = new lle();
  for (var t = 0; t < hh.length; t++)
    this.ruler.push(hh[t][0], hh[t][1]);
}
cd.prototype.process = function(t) {
  var e, n, r;
  for (r = this.ruler.getRules(""), e = 0, n = r.length; e < n; e++)
    r[e](t);
};
cd.prototype.State = ole;
var cle = cd, uh = ne.isSpace;
function fh(t, e) {
  var n = t.bMarks[e] + t.tShift[e], r = t.eMarks[e];
  return t.src.substr(n, r - n);
}
function nm(t) {
  var e = [], n = 0, r = t.length, i, s = !1, o = 0, l = "";
  for (i = t.charCodeAt(n); n < r; )
    i === 124 && (s ? (l += t.substring(o, n - 1), o = n) : (e.push(l + t.substring(o, n)), l = "", o = n + 1)), s = i === 92, n++, i = t.charCodeAt(n);
  return e.push(l + t.substring(o)), e;
}
var ale = function(e, n, r, i) {
  var s, o, l, c, a, h, u, f, d, p, g, m, y, b, _, w, x, v;
  if (n + 2 > r || (h = n + 1, e.sCount[h] < e.blkIndent) || e.sCount[h] - e.blkIndent >= 4 || (l = e.bMarks[h] + e.tShift[h], l >= e.eMarks[h]) || (x = e.src.charCodeAt(l++), x !== 124 && x !== 45 && x !== 58) || l >= e.eMarks[h] || (v = e.src.charCodeAt(l++), v !== 124 && v !== 45 && v !== 58 && !uh(v)) || x === 45 && uh(v))
    return !1;
  for (; l < e.eMarks[h]; ) {
    if (s = e.src.charCodeAt(l), s !== 124 && s !== 45 && s !== 58 && !uh(s))
      return !1;
    l++;
  }
  for (o = fh(e, n + 1), u = o.split("|"), p = [], c = 0; c < u.length; c++) {
    if (g = u[c].trim(), !g) {
      if (c === 0 || c === u.length - 1)
        continue;
      return !1;
    }
    if (!/^:?-+:?$/.test(g))
      return !1;
    g.charCodeAt(g.length - 1) === 58 ? p.push(g.charCodeAt(0) === 58 ? "center" : "right") : g.charCodeAt(0) === 58 ? p.push("left") : p.push("");
  }
  if (o = fh(e, n).trim(), o.indexOf("|") === -1 || e.sCount[n] - e.blkIndent >= 4 || (u = nm(o), u.length && u[0] === "" && u.shift(), u.length && u[u.length - 1] === "" && u.pop(), f = u.length, f === 0 || f !== p.length))
    return !1;
  if (i)
    return !0;
  for (b = e.parentType, e.parentType = "table", w = e.md.block.ruler.getRules("blockquote"), d = e.push("table_open", "table", 1), d.map = m = [n, 0], d = e.push("thead_open", "thead", 1), d.map = [n, n + 1], d = e.push("tr_open", "tr", 1), d.map = [n, n + 1], c = 0; c < u.length; c++)
    d = e.push("th_open", "th", 1), p[c] && (d.attrs = [["style", "text-align:" + p[c]]]), d = e.push("inline", "", 0), d.content = u[c].trim(), d.children = [], d = e.push("th_close", "th", -1);
  for (d = e.push("tr_close", "tr", -1), d = e.push("thead_close", "thead", -1), h = n + 2; h < r && !(e.sCount[h] < e.blkIndent); h++) {
    for (_ = !1, c = 0, a = w.length; c < a; c++)
      if (w[c](e, h, r, !0)) {
        _ = !0;
        break;
      }
    if (_ || (o = fh(e, h).trim(), !o) || e.sCount[h] - e.blkIndent >= 4)
      break;
    for (u = nm(o), u.length && u[0] === "" && u.shift(), u.length && u[u.length - 1] === "" && u.pop(), h === n + 2 && (d = e.push("tbody_open", "tbody", 1), d.map = y = [n + 2, 0]), d = e.push("tr_open", "tr", 1), d.map = [h, h + 1], c = 0; c < f; c++)
      d = e.push("td_open", "td", 1), p[c] && (d.attrs = [["style", "text-align:" + p[c]]]), d = e.push("inline", "", 0), d.content = u[c] ? u[c].trim() : "", d.children = [], d = e.push("td_close", "td", -1);
    d = e.push("tr_close", "tr", -1);
  }
  return y && (d = e.push("tbody_close", "tbody", -1), y[1] = h), d = e.push("table_close", "table", -1), m[1] = h, e.parentType = b, e.line = h, !0;
}, hle = function(e, n, r) {
  var i, s, o;
  if (e.sCount[n] - e.blkIndent < 4)
    return !1;
  for (s = i = n + 1; i < r; ) {
    if (e.isEmpty(i)) {
      i++;
      continue;
    }
    if (e.sCount[i] - e.blkIndent >= 4) {
      i++, s = i;
      continue;
    }
    break;
  }
  return e.line = s, o = e.push("code_block", "code", 0), o.content = e.getLines(n, s, 4 + e.blkIndent, !1) + `
`, o.map = [n, e.line], !0;
}, ule = function(e, n, r, i) {
  var s, o, l, c, a, h, u, f = !1, d = e.bMarks[n] + e.tShift[n], p = e.eMarks[n];
  if (e.sCount[n] - e.blkIndent >= 4 || d + 3 > p || (s = e.src.charCodeAt(d), s !== 126 && s !== 96) || (a = d, d = e.skipChars(d, s), o = d - a, o < 3) || (u = e.src.slice(a, d), l = e.src.slice(d, p), s === 96 && l.indexOf(String.fromCharCode(s)) >= 0))
    return !1;
  if (i)
    return !0;
  for (c = n; c++, !(c >= r || (d = a = e.bMarks[c] + e.tShift[c], p = e.eMarks[c], d < p && e.sCount[c] < e.blkIndent)); )
    if (e.src.charCodeAt(d) === s && !(e.sCount[c] - e.blkIndent >= 4) && (d = e.skipChars(d, s), !(d - a < o) && (d = e.skipSpaces(d), !(d < p)))) {
      f = !0;
      break;
    }
  return o = e.sCount[n], e.line = c + (f ? 1 : 0), h = e.push("fence", "code", 0), h.info = l, h.content = e.getLines(n + 1, c, o, !0), h.markup = u, h.map = [n, e.line], !0;
}, rm = ne.isSpace, fle = function(e, n, r, i) {
  var s, o, l, c, a, h, u, f, d, p, g, m, y, b, _, w, x, v, S, R, L = e.lineMax, D = e.bMarks[n] + e.tShift[n], z = e.eMarks[n];
  if (e.sCount[n] - e.blkIndent >= 4 || e.src.charCodeAt(D++) !== 62)
    return !1;
  if (i)
    return !0;
  for (c = d = e.sCount[n] + 1, e.src.charCodeAt(D) === 32 ? (D++, c++, d++, s = !1, w = !0) : e.src.charCodeAt(D) === 9 ? (w = !0, (e.bsCount[n] + d) % 4 === 3 ? (D++, c++, d++, s = !1) : s = !0) : w = !1, p = [e.bMarks[n]], e.bMarks[n] = D; D < z && (o = e.src.charCodeAt(D), rm(o)); ) {
    o === 9 ? d += 4 - (d + e.bsCount[n] + (s ? 1 : 0)) % 4 : d++;
    D++;
  }
  for (g = [e.bsCount[n]], e.bsCount[n] = e.sCount[n] + 1 + (w ? 1 : 0), h = D >= z, b = [e.sCount[n]], e.sCount[n] = d - c, _ = [e.tShift[n]], e.tShift[n] = D - e.bMarks[n], v = e.md.block.ruler.getRules("blockquote"), y = e.parentType, e.parentType = "blockquote", f = n + 1; f < r && (R = e.sCount[f] < e.blkIndent, D = e.bMarks[f] + e.tShift[f], z = e.eMarks[f], !(D >= z)); f++) {
    if (e.src.charCodeAt(D++) === 62 && !R) {
      for (c = d = e.sCount[f] + 1, e.src.charCodeAt(D) === 32 ? (D++, c++, d++, s = !1, w = !0) : e.src.charCodeAt(D) === 9 ? (w = !0, (e.bsCount[f] + d) % 4 === 3 ? (D++, c++, d++, s = !1) : s = !0) : w = !1, p.push(e.bMarks[f]), e.bMarks[f] = D; D < z && (o = e.src.charCodeAt(D), rm(o)); ) {
        o === 9 ? d += 4 - (d + e.bsCount[f] + (s ? 1 : 0)) % 4 : d++;
        D++;
      }
      h = D >= z, g.push(e.bsCount[f]), e.bsCount[f] = e.sCount[f] + 1 + (w ? 1 : 0), b.push(e.sCount[f]), e.sCount[f] = d - c, _.push(e.tShift[f]), e.tShift[f] = D - e.bMarks[f];
      continue;
    }
    if (h)
      break;
    for (x = !1, l = 0, a = v.length; l < a; l++)
      if (v[l](e, f, r, !0)) {
        x = !0;
        break;
      }
    if (x) {
      e.lineMax = f, e.blkIndent !== 0 && (p.push(e.bMarks[f]), g.push(e.bsCount[f]), _.push(e.tShift[f]), b.push(e.sCount[f]), e.sCount[f] -= e.blkIndent);
      break;
    }
    p.push(e.bMarks[f]), g.push(e.bsCount[f]), _.push(e.tShift[f]), b.push(e.sCount[f]), e.sCount[f] = -1;
  }
  for (m = e.blkIndent, e.blkIndent = 0, S = e.push("blockquote_open", "blockquote", 1), S.markup = ">", S.map = u = [n, 0], e.md.block.tokenize(e, n, f), S = e.push("blockquote_close", "blockquote", -1), S.markup = ">", e.lineMax = L, e.parentType = y, u[1] = e.line, l = 0; l < _.length; l++)
    e.bMarks[l + n] = p[l], e.tShift[l + n] = _[l], e.sCount[l + n] = b[l], e.bsCount[l + n] = g[l];
  return e.blkIndent = m, !0;
}, dle = ne.isSpace, ple = function(e, n, r, i) {
  var s, o, l, c, a = e.bMarks[n] + e.tShift[n], h = e.eMarks[n];
  if (e.sCount[n] - e.blkIndent >= 4 || (s = e.src.charCodeAt(a++), s !== 42 && s !== 45 && s !== 95))
    return !1;
  for (o = 1; a < h; ) {
    if (l = e.src.charCodeAt(a++), l !== s && !dle(l))
      return !1;
    l === s && o++;
  }
  return o < 3 ? !1 : (i || (e.line = n + 1, c = e.push("hr", "hr", 0), c.map = [n, e.line], c.markup = Array(o + 1).join(String.fromCharCode(s))), !0);
}, T1 = ne.isSpace;
function im(t, e) {
  var n, r, i, s;
  return r = t.bMarks[e] + t.tShift[e], i = t.eMarks[e], n = t.src.charCodeAt(r++), n !== 42 && n !== 45 && n !== 43 || r < i && (s = t.src.charCodeAt(r), !T1(s)) ? -1 : r;
}
function sm(t, e) {
  var n, r = t.bMarks[e] + t.tShift[e], i = r, s = t.eMarks[e];
  if (i + 1 >= s || (n = t.src.charCodeAt(i++), n < 48 || n > 57))
    return -1;
  for (; ; ) {
    if (i >= s)
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
  return i < s && (n = t.src.charCodeAt(i), !T1(n)) ? -1 : i;
}
function gle(t, e) {
  var n, r, i = t.level + 2;
  for (n = e + 2, r = t.tokens.length - 2; n < r; n++)
    t.tokens[n].level === i && t.tokens[n].type === "paragraph_open" && (t.tokens[n + 2].hidden = !0, t.tokens[n].hidden = !0, n += 2);
}
var mle = function(e, n, r, i) {
  var s, o, l, c, a, h, u, f, d, p, g, m, y, b, _, w, x, v, S, R, L, D, z, re, J, A, U, $, me = !1, le = !0;
  if (e.sCount[n] - e.blkIndent >= 4 || e.listIndent >= 0 && e.sCount[n] - e.listIndent >= 4 && e.sCount[n] < e.blkIndent)
    return !1;
  if (i && e.parentType === "paragraph" && e.sCount[n] >= e.blkIndent && (me = !0), (z = sm(e, n)) >= 0) {
    if (u = !0, J = e.bMarks[n] + e.tShift[n], y = Number(e.src.slice(J, z - 1)), me && y !== 1)
      return !1;
  } else if ((z = im(e, n)) >= 0)
    u = !1;
  else
    return !1;
  if (me && e.skipSpaces(z) >= e.eMarks[n])
    return !1;
  if (m = e.src.charCodeAt(z - 1), i)
    return !0;
  for (g = e.tokens.length, u ? ($ = e.push("ordered_list_open", "ol", 1), y !== 1 && ($.attrs = [["start", y]])) : $ = e.push("bullet_list_open", "ul", 1), $.map = p = [n, 0], $.markup = String.fromCharCode(m), _ = n, re = !1, U = e.md.block.ruler.getRules("list"), v = e.parentType, e.parentType = "list"; _ < r; ) {
    for (D = z, b = e.eMarks[_], h = w = e.sCount[_] + z - (e.bMarks[n] + e.tShift[n]); D < b; ) {
      if (s = e.src.charCodeAt(D), s === 9)
        w += 4 - (w + e.bsCount[_]) % 4;
      else if (s === 32)
        w++;
      else
        break;
      D++;
    }
    if (o = D, o >= b ? a = 1 : a = w - h, a > 4 && (a = 1), c = h + a, $ = e.push("list_item_open", "li", 1), $.markup = String.fromCharCode(m), $.map = f = [n, 0], u && ($.info = e.src.slice(J, z - 1)), L = e.tight, R = e.tShift[n], S = e.sCount[n], x = e.listIndent, e.listIndent = e.blkIndent, e.blkIndent = c, e.tight = !0, e.tShift[n] = o - e.bMarks[n], e.sCount[n] = w, o >= b && e.isEmpty(n + 1) ? e.line = Math.min(e.line + 2, r) : e.md.block.tokenize(e, n, r, !0), (!e.tight || re) && (le = !1), re = e.line - n > 1 && e.isEmpty(e.line - 1), e.blkIndent = e.listIndent, e.listIndent = x, e.tShift[n] = R, e.sCount[n] = S, e.tight = L, $ = e.push("list_item_close", "li", -1), $.markup = String.fromCharCode(m), _ = n = e.line, f[1] = _, o = e.bMarks[n], _ >= r || e.sCount[_] < e.blkIndent || e.sCount[n] - e.blkIndent >= 4)
      break;
    for (A = !1, l = 0, d = U.length; l < d; l++)
      if (U[l](e, _, r, !0)) {
        A = !0;
        break;
      }
    if (A)
      break;
    if (u) {
      if (z = sm(e, _), z < 0)
        break;
      J = e.bMarks[_] + e.tShift[_];
    } else if (z = im(e, _), z < 0)
      break;
    if (m !== e.src.charCodeAt(z - 1))
      break;
  }
  return u ? $ = e.push("ordered_list_close", "ol", -1) : $ = e.push("bullet_list_close", "ul", -1), $.markup = String.fromCharCode(m), p[1] = _, e.line = _, e.parentType = v, le && gle(e, g), !0;
}, yle = ne.normalizeReference, Qo = ne.isSpace, ble = function(e, n, r, i) {
  var s, o, l, c, a, h, u, f, d, p, g, m, y, b, _, w, x = 0, v = e.bMarks[n] + e.tShift[n], S = e.eMarks[n], R = n + 1;
  if (e.sCount[n] - e.blkIndent >= 4 || e.src.charCodeAt(v) !== 91)
    return !1;
  for (; ++v < S; )
    if (e.src.charCodeAt(v) === 93 && e.src.charCodeAt(v - 1) !== 92) {
      if (v + 1 === S || e.src.charCodeAt(v + 1) !== 58)
        return !1;
      break;
    }
  for (c = e.lineMax, _ = e.md.block.ruler.getRules("reference"), p = e.parentType, e.parentType = "reference"; R < c && !e.isEmpty(R); R++)
    if (!(e.sCount[R] - e.blkIndent > 3) && !(e.sCount[R] < 0)) {
      for (b = !1, h = 0, u = _.length; h < u; h++)
        if (_[h](e, R, c, !0)) {
          b = !0;
          break;
        }
      if (b)
        break;
    }
  for (y = e.getLines(n, R, e.blkIndent, !1).trim(), S = y.length, v = 1; v < S; v++) {
    if (s = y.charCodeAt(v), s === 91)
      return !1;
    if (s === 93) {
      d = v;
      break;
    } else
      s === 10 ? x++ : s === 92 && (v++, v < S && y.charCodeAt(v) === 10 && x++);
  }
  if (d < 0 || y.charCodeAt(d + 1) !== 58)
    return !1;
  for (v = d + 2; v < S; v++)
    if (s = y.charCodeAt(v), s === 10)
      x++;
    else if (!Qo(s))
      break;
  if (g = e.md.helpers.parseLinkDestination(y, v, S), !g.ok || (a = e.md.normalizeLink(g.str), !e.md.validateLink(a)))
    return !1;
  for (v = g.pos, x += g.lines, o = v, l = x, m = v; v < S; v++)
    if (s = y.charCodeAt(v), s === 10)
      x++;
    else if (!Qo(s))
      break;
  for (g = e.md.helpers.parseLinkTitle(y, v, S), v < S && m !== v && g.ok ? (w = g.str, v = g.pos, x += g.lines) : (w = "", v = o, x = l); v < S && (s = y.charCodeAt(v), !!Qo(s)); )
    v++;
  if (v < S && y.charCodeAt(v) !== 10 && w)
    for (w = "", v = o, x = l; v < S && (s = y.charCodeAt(v), !!Qo(s)); )
      v++;
  return v < S && y.charCodeAt(v) !== 10 || (f = yle(y.slice(1, d)), !f) ? !1 : (i || (typeof e.env.references > "u" && (e.env.references = {}), typeof e.env.references[f] > "u" && (e.env.references[f] = { title: w, href: a }), e.parentType = p, e.line = n + x + 1), !0);
}, wle = [
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
], ra = {}, vle = "[a-zA-Z_:][a-zA-Z0-9:._-]*", xle = "[^\"'=<>`\\x00-\\x20]+", kle = "'[^']*'", _le = '"[^"]*"', Sle = "(?:" + xle + "|" + kle + "|" + _le + ")", Cle = "(?:\\s+" + vle + "(?:\\s*=\\s*" + Sle + ")?)", M1 = "<[A-Za-z][A-Za-z0-9\\-]*" + Cle + "*\\s*\\/?>", O1 = "<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>", Ale = "<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->", Ele = "<[?][\\s\\S]*?[?]>", Dle = "<![A-Z]+\\s+[^>]*>", Tle = "<!\\[CDATA\\[[\\s\\S]*?\\]\\]>", Mle = new RegExp("^(?:" + M1 + "|" + O1 + "|" + Ale + "|" + Ele + "|" + Dle + "|" + Tle + ")"), Ole = new RegExp("^(?:" + M1 + "|" + O1 + ")");
ra.HTML_TAG_RE = Mle;
ra.HTML_OPEN_CLOSE_TAG_RE = Ole;
var Lle = wle, Rle = ra.HTML_OPEN_CLOSE_TAG_RE, mi = [
  [/^<(script|pre|style|textarea)(?=(\s|>|$))/i, /<\/(script|pre|style|textarea)>/i, !0],
  [/^<!--/, /-->/, !0],
  [/^<\?/, /\?>/, !0],
  [/^<![A-Z]/, />/, !0],
  [/^<!\[CDATA\[/, /\]\]>/, !0],
  [new RegExp("^</?(" + Lle.join("|") + ")(?=(\\s|/?>|$))", "i"), /^$/, !0],
  [new RegExp(Rle.source + "\\s*$"), /^$/, !1]
], Ile = function(e, n, r, i) {
  var s, o, l, c, a = e.bMarks[n] + e.tShift[n], h = e.eMarks[n];
  if (e.sCount[n] - e.blkIndent >= 4 || !e.md.options.html || e.src.charCodeAt(a) !== 60)
    return !1;
  for (c = e.src.slice(a, h), s = 0; s < mi.length && !mi[s][0].test(c); s++)
    ;
  if (s === mi.length)
    return !1;
  if (i)
    return mi[s][2];
  if (o = n + 1, !mi[s][1].test(c)) {
    for (; o < r && !(e.sCount[o] < e.blkIndent); o++)
      if (a = e.bMarks[o] + e.tShift[o], h = e.eMarks[o], c = e.src.slice(a, h), mi[s][1].test(c)) {
        c.length !== 0 && o++;
        break;
      }
  }
  return e.line = o, l = e.push("html_block", "", 0), l.map = [n, o], l.content = e.getLines(n, o, e.blkIndent, !0), !0;
}, om = ne.isSpace, Nle = function(e, n, r, i) {
  var s, o, l, c, a = e.bMarks[n] + e.tShift[n], h = e.eMarks[n];
  if (e.sCount[n] - e.blkIndent >= 4 || (s = e.src.charCodeAt(a), s !== 35 || a >= h))
    return !1;
  for (o = 1, s = e.src.charCodeAt(++a); s === 35 && a < h && o <= 6; )
    o++, s = e.src.charCodeAt(++a);
  return o > 6 || a < h && !om(s) ? !1 : (i || (h = e.skipSpacesBack(h, a), l = e.skipCharsBack(h, 35, a), l > a && om(e.src.charCodeAt(l - 1)) && (h = l), e.line = n + 1, c = e.push("heading_open", "h" + String(o), 1), c.markup = "########".slice(0, o), c.map = [n, e.line], c = e.push("inline", "", 0), c.content = e.src.slice(a, h).trim(), c.map = [n, e.line], c.children = [], c = e.push("heading_close", "h" + String(o), -1), c.markup = "########".slice(0, o)), !0);
}, Ple = function(e, n, r) {
  var i, s, o, l, c, a, h, u, f, d = n + 1, p, g = e.md.block.ruler.getRules("paragraph");
  if (e.sCount[n] - e.blkIndent >= 4)
    return !1;
  for (p = e.parentType, e.parentType = "paragraph"; d < r && !e.isEmpty(d); d++)
    if (!(e.sCount[d] - e.blkIndent > 3)) {
      if (e.sCount[d] >= e.blkIndent && (a = e.bMarks[d] + e.tShift[d], h = e.eMarks[d], a < h && (f = e.src.charCodeAt(a), (f === 45 || f === 61) && (a = e.skipChars(a, f), a = e.skipSpaces(a), a >= h)))) {
        u = f === 61 ? 1 : 2;
        break;
      }
      if (!(e.sCount[d] < 0)) {
        for (s = !1, o = 0, l = g.length; o < l; o++)
          if (g[o](e, d, r, !0)) {
            s = !0;
            break;
          }
        if (s)
          break;
      }
    }
  return u ? (i = e.getLines(n, d, e.blkIndent, !1).trim(), e.line = d + 1, c = e.push("heading_open", "h" + String(u), 1), c.markup = String.fromCharCode(f), c.map = [n, e.line], c = e.push("inline", "", 0), c.content = i, c.map = [n, e.line - 1], c.children = [], c = e.push("heading_close", "h" + String(u), -1), c.markup = String.fromCharCode(f), e.parentType = p, !0) : !1;
}, Fle = function(e, n) {
  var r, i, s, o, l, c, a = n + 1, h = e.md.block.ruler.getRules("paragraph"), u = e.lineMax;
  for (c = e.parentType, e.parentType = "paragraph"; a < u && !e.isEmpty(a); a++)
    if (!(e.sCount[a] - e.blkIndent > 3) && !(e.sCount[a] < 0)) {
      for (i = !1, s = 0, o = h.length; s < o; s++)
        if (h[s](e, a, u, !0)) {
          i = !0;
          break;
        }
      if (i)
        break;
    }
  return r = e.getLines(n, a, e.blkIndent, !1).trim(), e.line = a, l = e.push("paragraph_open", "p", 1), l.map = [n, e.line], l = e.push("inline", "", 0), l.content = r, l.map = [n, e.line], l.children = [], l = e.push("paragraph_close", "p", -1), e.parentType = c, !0;
}, L1 = ld, ia = ne.isSpace;
function _n(t, e, n, r) {
  var i, s, o, l, c, a, h, u;
  for (this.src = t, this.md = e, this.env = n, this.tokens = r, this.bMarks = [], this.eMarks = [], this.tShift = [], this.sCount = [], this.bsCount = [], this.blkIndent = 0, this.line = 0, this.lineMax = 0, this.tight = !1, this.ddIndent = -1, this.listIndent = -1, this.parentType = "root", this.level = 0, this.result = "", s = this.src, u = !1, o = l = a = h = 0, c = s.length; l < c; l++) {
    if (i = s.charCodeAt(l), !u)
      if (ia(i)) {
        a++, i === 9 ? h += 4 - h % 4 : h++;
        continue;
      } else
        u = !0;
    (i === 10 || l === c - 1) && (i !== 10 && l++, this.bMarks.push(o), this.eMarks.push(l), this.tShift.push(a), this.sCount.push(h), this.bsCount.push(0), u = !1, a = 0, h = 0, o = l + 1);
  }
  this.bMarks.push(s.length), this.eMarks.push(s.length), this.tShift.push(0), this.sCount.push(0), this.bsCount.push(0), this.lineMax = this.bMarks.length - 1;
}
_n.prototype.push = function(t, e, n) {
  var r = new L1(t, e, n);
  return r.block = !0, n < 0 && this.level--, r.level = this.level, n > 0 && this.level++, this.tokens.push(r), r;
};
_n.prototype.isEmpty = function(e) {
  return this.bMarks[e] + this.tShift[e] >= this.eMarks[e];
};
_n.prototype.skipEmptyLines = function(e) {
  for (var n = this.lineMax; e < n && !(this.bMarks[e] + this.tShift[e] < this.eMarks[e]); e++)
    ;
  return e;
};
_n.prototype.skipSpaces = function(e) {
  for (var n, r = this.src.length; e < r && (n = this.src.charCodeAt(e), !!ia(n)); e++)
    ;
  return e;
};
_n.prototype.skipSpacesBack = function(e, n) {
  if (e <= n)
    return e;
  for (; e > n; )
    if (!ia(this.src.charCodeAt(--e)))
      return e + 1;
  return e;
};
_n.prototype.skipChars = function(e, n) {
  for (var r = this.src.length; e < r && this.src.charCodeAt(e) === n; e++)
    ;
  return e;
};
_n.prototype.skipCharsBack = function(e, n, r) {
  if (e <= r)
    return e;
  for (; e > r; )
    if (n !== this.src.charCodeAt(--e))
      return e + 1;
  return e;
};
_n.prototype.getLines = function(e, n, r, i) {
  var s, o, l, c, a, h, u, f = e;
  if (e >= n)
    return "";
  for (h = new Array(n - e), s = 0; f < n; f++, s++) {
    for (o = 0, u = c = this.bMarks[f], f + 1 < n || i ? a = this.eMarks[f] + 1 : a = this.eMarks[f]; c < a && o < r; ) {
      if (l = this.src.charCodeAt(c), ia(l))
        l === 9 ? o += 4 - (o + this.bsCount[f]) % 4 : o++;
      else if (c - u < this.tShift[f])
        o++;
      else
        break;
      c++;
    }
    o > r ? h[s] = new Array(o - r + 1).join(" ") + this.src.slice(c, a) : h[s] = this.src.slice(c, a);
  }
  return h.join("");
};
_n.prototype.Token = L1;
var Ble = _n, qle = od, el = [
  ["table", ale, ["paragraph", "reference"]],
  ["code", hle],
  ["fence", ule, ["paragraph", "reference", "blockquote", "list"]],
  ["blockquote", fle, ["paragraph", "reference", "blockquote", "list"]],
  ["hr", ple, ["paragraph", "reference", "blockquote", "list"]],
  ["list", mle, ["paragraph", "reference", "blockquote"]],
  ["reference", ble],
  ["html_block", Ile, ["paragraph", "reference", "blockquote"]],
  ["heading", Nle, ["paragraph", "reference", "blockquote"]],
  ["lheading", Ple],
  ["paragraph", Fle]
];
function sa() {
  this.ruler = new qle();
  for (var t = 0; t < el.length; t++)
    this.ruler.push(el[t][0], el[t][1], { alt: (el[t][2] || []).slice() });
}
sa.prototype.tokenize = function(t, e, n) {
  for (var r, i, s = this.ruler.getRules(""), o = s.length, l = e, c = !1, a = t.md.options.maxNesting; l < n && (t.line = l = t.skipEmptyLines(l), !(l >= n || t.sCount[l] < t.blkIndent)); ) {
    if (t.level >= a) {
      t.line = n;
      break;
    }
    for (i = 0; i < o && (r = s[i](t, l, n, !1), !r); i++)
      ;
    t.tight = !c, t.isEmpty(t.line - 1) && (c = !0), l = t.line, l < n && t.isEmpty(l) && (c = !0, l++, t.line = l);
  }
};
sa.prototype.parse = function(t, e, n, r) {
  var i;
  !t || (i = new this.State(t, e, n, r), this.tokenize(i, i.line, i.lineMax));
};
sa.prototype.State = Ble;
var $le = sa;
function Hle(t) {
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
var zle = function(e, n) {
  for (var r = e.pos; r < e.posMax && !Hle(e.src.charCodeAt(r)); )
    r++;
  return r === e.pos ? !1 : (n || (e.pending += e.src.slice(e.pos, r)), e.pos = r, !0);
}, Vle = ne.isSpace, Ule = function(e, n) {
  var r, i, s, o = e.pos;
  if (e.src.charCodeAt(o) !== 10)
    return !1;
  if (r = e.pending.length - 1, i = e.posMax, !n)
    if (r >= 0 && e.pending.charCodeAt(r) === 32)
      if (r >= 1 && e.pending.charCodeAt(r - 1) === 32) {
        for (s = r - 1; s >= 1 && e.pending.charCodeAt(s - 1) === 32; )
          s--;
        e.pending = e.pending.slice(0, s), e.push("hardbreak", "br", 0);
      } else
        e.pending = e.pending.slice(0, -1), e.push("softbreak", "br", 0);
    else
      e.push("softbreak", "br", 0);
  for (o++; o < i && Vle(e.src.charCodeAt(o)); )
    o++;
  return e.pos = o, !0;
}, Wle = ne.isSpace, ad = [];
for (var lm = 0; lm < 256; lm++)
  ad.push(0);
"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(t) {
  ad[t.charCodeAt(0)] = 1;
});
var jle = function(e, n) {
  var r, i = e.pos, s = e.posMax;
  if (e.src.charCodeAt(i) !== 92)
    return !1;
  if (i++, i < s) {
    if (r = e.src.charCodeAt(i), r < 256 && ad[r] !== 0)
      return n || (e.pending += e.src[i]), e.pos += 2, !0;
    if (r === 10) {
      for (n || e.push("hardbreak", "br", 0), i++; i < s && (r = e.src.charCodeAt(i), !!Wle(r)); )
        i++;
      return e.pos = i, !0;
    }
  }
  return n || (e.pending += "\\"), e.pos++, !0;
}, Gle = function(e, n) {
  var r, i, s, o, l, c, a, h, u = e.pos, f = e.src.charCodeAt(u);
  if (f !== 96)
    return !1;
  for (r = u, u++, i = e.posMax; u < i && e.src.charCodeAt(u) === 96; )
    u++;
  if (s = e.src.slice(r, u), a = s.length, e.backticksScanned && (e.backticks[a] || 0) <= r)
    return n || (e.pending += s), e.pos += a, !0;
  for (l = c = u; (l = e.src.indexOf("`", c)) !== -1; ) {
    for (c = l + 1; c < i && e.src.charCodeAt(c) === 96; )
      c++;
    if (h = c - l, h === a)
      return n || (o = e.push("code_inline", "code", 0), o.markup = s, o.content = e.src.slice(u, l).replace(/\n/g, " ").replace(/^ (.+) $/, "$1")), e.pos = c, !0;
    e.backticks[h] = l;
  }
  return e.backticksScanned = !0, n || (e.pending += s), e.pos += a, !0;
}, oa = {};
oa.tokenize = function(e, n) {
  var r, i, s, o, l, c = e.pos, a = e.src.charCodeAt(c);
  if (n || a !== 126 || (i = e.scanDelims(e.pos, !0), o = i.length, l = String.fromCharCode(a), o < 2))
    return !1;
  for (o % 2 && (s = e.push("text", "", 0), s.content = l, o--), r = 0; r < o; r += 2)
    s = e.push("text", "", 0), s.content = l + l, e.delimiters.push({
      marker: a,
      length: 0,
      token: e.tokens.length - 1,
      end: -1,
      open: i.can_open,
      close: i.can_close
    });
  return e.pos += i.length, !0;
};
function cm(t, e) {
  var n, r, i, s, o, l = [], c = e.length;
  for (n = 0; n < c; n++)
    i = e[n], i.marker === 126 && i.end !== -1 && (s = e[i.end], o = t.tokens[i.token], o.type = "s_open", o.tag = "s", o.nesting = 1, o.markup = "~~", o.content = "", o = t.tokens[s.token], o.type = "s_close", o.tag = "s", o.nesting = -1, o.markup = "~~", o.content = "", t.tokens[s.token - 1].type === "text" && t.tokens[s.token - 1].content === "~" && l.push(s.token - 1));
  for (; l.length; ) {
    for (n = l.pop(), r = n + 1; r < t.tokens.length && t.tokens[r].type === "s_close"; )
      r++;
    r--, n !== r && (o = t.tokens[r], t.tokens[r] = t.tokens[n], t.tokens[n] = o);
  }
}
oa.postProcess = function(e) {
  var n, r = e.tokens_meta, i = e.tokens_meta.length;
  for (cm(e, e.delimiters), n = 0; n < i; n++)
    r[n] && r[n].delimiters && cm(e, r[n].delimiters);
};
var la = {};
la.tokenize = function(e, n) {
  var r, i, s, o = e.pos, l = e.src.charCodeAt(o);
  if (n || l !== 95 && l !== 42)
    return !1;
  for (i = e.scanDelims(e.pos, l === 42), r = 0; r < i.length; r++)
    s = e.push("text", "", 0), s.content = String.fromCharCode(l), e.delimiters.push({
      marker: l,
      length: i.length,
      token: e.tokens.length - 1,
      end: -1,
      open: i.can_open,
      close: i.can_close
    });
  return e.pos += i.length, !0;
};
function am(t, e) {
  var n, r, i, s, o, l, c = e.length;
  for (n = c - 1; n >= 0; n--)
    r = e[n], !(r.marker !== 95 && r.marker !== 42) && r.end !== -1 && (i = e[r.end], l = n > 0 && e[n - 1].end === r.end + 1 && e[n - 1].marker === r.marker && e[n - 1].token === r.token - 1 && e[r.end + 1].token === i.token + 1, o = String.fromCharCode(r.marker), s = t.tokens[r.token], s.type = l ? "strong_open" : "em_open", s.tag = l ? "strong" : "em", s.nesting = 1, s.markup = l ? o + o : o, s.content = "", s = t.tokens[i.token], s.type = l ? "strong_close" : "em_close", s.tag = l ? "strong" : "em", s.nesting = -1, s.markup = l ? o + o : o, s.content = "", l && (t.tokens[e[n - 1].token].content = "", t.tokens[e[r.end + 1].token].content = "", n--));
}
la.postProcess = function(e) {
  var n, r = e.tokens_meta, i = e.tokens_meta.length;
  for (am(e, e.delimiters), n = 0; n < i; n++)
    r[n] && r[n].delimiters && am(e, r[n].delimiters);
};
var Yle = ne.normalizeReference, dh = ne.isSpace, Kle = function(e, n) {
  var r, i, s, o, l, c, a, h, u, f = "", d = "", p = e.pos, g = e.posMax, m = e.pos, y = !0;
  if (e.src.charCodeAt(e.pos) !== 91 || (l = e.pos + 1, o = e.md.helpers.parseLinkLabel(e, e.pos, !0), o < 0))
    return !1;
  if (c = o + 1, c < g && e.src.charCodeAt(c) === 40) {
    for (y = !1, c++; c < g && (i = e.src.charCodeAt(c), !(!dh(i) && i !== 10)); c++)
      ;
    if (c >= g)
      return !1;
    if (m = c, a = e.md.helpers.parseLinkDestination(e.src, c, e.posMax), a.ok) {
      for (f = e.md.normalizeLink(a.str), e.md.validateLink(f) ? c = a.pos : f = "", m = c; c < g && (i = e.src.charCodeAt(c), !(!dh(i) && i !== 10)); c++)
        ;
      if (a = e.md.helpers.parseLinkTitle(e.src, c, e.posMax), c < g && m !== c && a.ok)
        for (d = a.str, c = a.pos; c < g && (i = e.src.charCodeAt(c), !(!dh(i) && i !== 10)); c++)
          ;
    }
    (c >= g || e.src.charCodeAt(c) !== 41) && (y = !0), c++;
  }
  if (y) {
    if (typeof e.env.references > "u")
      return !1;
    if (c < g && e.src.charCodeAt(c) === 91 ? (m = c + 1, c = e.md.helpers.parseLinkLabel(e, c), c >= 0 ? s = e.src.slice(m, c++) : c = o + 1) : c = o + 1, s || (s = e.src.slice(l, o)), h = e.env.references[Yle(s)], !h)
      return e.pos = p, !1;
    f = h.href, d = h.title;
  }
  return n || (e.pos = l, e.posMax = o, u = e.push("link_open", "a", 1), u.attrs = r = [["href", f]], d && r.push(["title", d]), e.md.inline.tokenize(e), u = e.push("link_close", "a", -1)), e.pos = c, e.posMax = g, !0;
}, Jle = ne.normalizeReference, ph = ne.isSpace, Zle = function(e, n) {
  var r, i, s, o, l, c, a, h, u, f, d, p, g, m = "", y = e.pos, b = e.posMax;
  if (e.src.charCodeAt(e.pos) !== 33 || e.src.charCodeAt(e.pos + 1) !== 91 || (c = e.pos + 2, l = e.md.helpers.parseLinkLabel(e, e.pos + 1, !1), l < 0))
    return !1;
  if (a = l + 1, a < b && e.src.charCodeAt(a) === 40) {
    for (a++; a < b && (i = e.src.charCodeAt(a), !(!ph(i) && i !== 10)); a++)
      ;
    if (a >= b)
      return !1;
    for (g = a, u = e.md.helpers.parseLinkDestination(e.src, a, e.posMax), u.ok && (m = e.md.normalizeLink(u.str), e.md.validateLink(m) ? a = u.pos : m = ""), g = a; a < b && (i = e.src.charCodeAt(a), !(!ph(i) && i !== 10)); a++)
      ;
    if (u = e.md.helpers.parseLinkTitle(e.src, a, e.posMax), a < b && g !== a && u.ok)
      for (f = u.str, a = u.pos; a < b && (i = e.src.charCodeAt(a), !(!ph(i) && i !== 10)); a++)
        ;
    else
      f = "";
    if (a >= b || e.src.charCodeAt(a) !== 41)
      return e.pos = y, !1;
    a++;
  } else {
    if (typeof e.env.references > "u")
      return !1;
    if (a < b && e.src.charCodeAt(a) === 91 ? (g = a + 1, a = e.md.helpers.parseLinkLabel(e, a), a >= 0 ? o = e.src.slice(g, a++) : a = l + 1) : a = l + 1, o || (o = e.src.slice(c, l)), h = e.env.references[Jle(o)], !h)
      return e.pos = y, !1;
    m = h.href, f = h.title;
  }
  return n || (s = e.src.slice(c, l), e.md.inline.parse(
    s,
    e.md,
    e.env,
    p = []
  ), d = e.push("image", "img", 0), d.attrs = r = [["src", m], ["alt", ""]], d.children = p, d.content = s, f && r.push(["title", f])), e.pos = a, e.posMax = b, !0;
}, Xle = /^([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/, Qle = /^([a-zA-Z][a-zA-Z0-9+.\-]{1,31}):([^<>\x00-\x20]*)$/, ece = function(e, n) {
  var r, i, s, o, l, c, a = e.pos;
  if (e.src.charCodeAt(a) !== 60)
    return !1;
  for (l = e.pos, c = e.posMax; ; ) {
    if (++a >= c || (o = e.src.charCodeAt(a), o === 60))
      return !1;
    if (o === 62)
      break;
  }
  return r = e.src.slice(l + 1, a), Qle.test(r) ? (i = e.md.normalizeLink(r), e.md.validateLink(i) ? (n || (s = e.push("link_open", "a", 1), s.attrs = [["href", i]], s.markup = "autolink", s.info = "auto", s = e.push("text", "", 0), s.content = e.md.normalizeLinkText(r), s = e.push("link_close", "a", -1), s.markup = "autolink", s.info = "auto"), e.pos += r.length + 2, !0) : !1) : Xle.test(r) ? (i = e.md.normalizeLink("mailto:" + r), e.md.validateLink(i) ? (n || (s = e.push("link_open", "a", 1), s.attrs = [["href", i]], s.markup = "autolink", s.info = "auto", s = e.push("text", "", 0), s.content = e.md.normalizeLinkText(r), s = e.push("link_close", "a", -1), s.markup = "autolink", s.info = "auto"), e.pos += r.length + 2, !0) : !1) : !1;
}, tce = ra.HTML_TAG_RE;
function nce(t) {
  var e = t | 32;
  return e >= 97 && e <= 122;
}
var rce = function(e, n) {
  var r, i, s, o, l = e.pos;
  return !e.md.options.html || (s = e.posMax, e.src.charCodeAt(l) !== 60 || l + 2 >= s) || (r = e.src.charCodeAt(l + 1), r !== 33 && r !== 63 && r !== 47 && !nce(r)) || (i = e.src.slice(l).match(tce), !i) ? !1 : (n || (o = e.push("html_inline", "", 0), o.content = e.src.slice(l, l + i[0].length)), e.pos += i[0].length, !0);
}, hm = id.exports, ice = ne.has, sce = ne.isValidEntityCode, um = ne.fromCodePoint, oce = /^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i, lce = /^&([a-z][a-z0-9]{1,31});/i, cce = function(e, n) {
  var r, i, s, o = e.pos, l = e.posMax;
  if (e.src.charCodeAt(o) !== 38)
    return !1;
  if (o + 1 < l) {
    if (r = e.src.charCodeAt(o + 1), r === 35) {
      if (s = e.src.slice(o).match(oce), s)
        return n || (i = s[1][0].toLowerCase() === "x" ? parseInt(s[1].slice(1), 16) : parseInt(s[1], 10), e.pending += sce(i) ? um(i) : um(65533)), e.pos += s[0].length, !0;
    } else if (s = e.src.slice(o).match(lce), s && ice(hm, s[1]))
      return n || (e.pending += hm[s[1]]), e.pos += s[0].length, !0;
  }
  return n || (e.pending += "&"), e.pos++, !0;
};
function fm(t, e) {
  var n, r, i, s, o, l, c, a, h = {}, u = e.length;
  if (!!u) {
    var f = 0, d = -2, p = [];
    for (n = 0; n < u; n++)
      if (i = e[n], p.push(0), (e[f].marker !== i.marker || d !== i.token - 1) && (f = n), d = i.token, i.length = i.length || 0, !!i.close) {
        for (h.hasOwnProperty(i.marker) || (h[i.marker] = [-1, -1, -1, -1, -1, -1]), o = h[i.marker][(i.open ? 3 : 0) + i.length % 3], r = f - p[f] - 1, l = r; r > o; r -= p[r] + 1)
          if (s = e[r], s.marker === i.marker && s.open && s.end < 0 && (c = !1, (s.close || i.open) && (s.length + i.length) % 3 === 0 && (s.length % 3 !== 0 || i.length % 3 !== 0) && (c = !0), !c)) {
            a = r > 0 && !e[r - 1].open ? p[r - 1] + 1 : 0, p[n] = n - r + a, p[r] = a, i.open = !1, s.end = n, s.close = !1, l = -1, d = -2;
            break;
          }
        l !== -1 && (h[i.marker][(i.open ? 3 : 0) + (i.length || 0) % 3] = l);
      }
  }
}
var ace = function(e) {
  var n, r = e.tokens_meta, i = e.tokens_meta.length;
  for (fm(e, e.delimiters), n = 0; n < i; n++)
    r[n] && r[n].delimiters && fm(e, r[n].delimiters);
}, hce = function(e) {
  var n, r, i = 0, s = e.tokens, o = e.tokens.length;
  for (n = r = 0; n < o; n++)
    s[n].nesting < 0 && i--, s[n].level = i, s[n].nesting > 0 && i++, s[n].type === "text" && n + 1 < o && s[n + 1].type === "text" ? s[n + 1].content = s[n].content + s[n + 1].content : (n !== r && (s[r] = s[n]), r++);
  n !== r && (s.length = r);
}, hd = ld, dm = ne.isWhiteSpace, pm = ne.isPunctChar, gm = ne.isMdAsciiPunct;
function Do(t, e, n, r) {
  this.src = t, this.env = n, this.md = e, this.tokens = r, this.tokens_meta = Array(r.length), this.pos = 0, this.posMax = this.src.length, this.level = 0, this.pending = "", this.pendingLevel = 0, this.cache = {}, this.delimiters = [], this._prev_delimiters = [], this.backticks = {}, this.backticksScanned = !1;
}
Do.prototype.pushPending = function() {
  var t = new hd("text", "", 0);
  return t.content = this.pending, t.level = this.pendingLevel, this.tokens.push(t), this.pending = "", t;
};
Do.prototype.push = function(t, e, n) {
  this.pending && this.pushPending();
  var r = new hd(t, e, n), i = null;
  return n < 0 && (this.level--, this.delimiters = this._prev_delimiters.pop()), r.level = this.level, n > 0 && (this.level++, this._prev_delimiters.push(this.delimiters), this.delimiters = [], i = { delimiters: this.delimiters }), this.pendingLevel = this.level, this.tokens.push(r), this.tokens_meta.push(i), r;
};
Do.prototype.scanDelims = function(t, e) {
  var n = t, r, i, s, o, l, c, a, h, u, f = !0, d = !0, p = this.posMax, g = this.src.charCodeAt(t);
  for (r = t > 0 ? this.src.charCodeAt(t - 1) : 32; n < p && this.src.charCodeAt(n) === g; )
    n++;
  return s = n - t, i = n < p ? this.src.charCodeAt(n) : 32, a = gm(r) || pm(String.fromCharCode(r)), u = gm(i) || pm(String.fromCharCode(i)), c = dm(r), h = dm(i), h ? f = !1 : u && (c || a || (f = !1)), c ? d = !1 : a && (h || u || (d = !1)), e ? (o = f, l = d) : (o = f && (!d || a), l = d && (!f || u)), {
    can_open: o,
    can_close: l,
    length: s
  };
};
Do.prototype.Token = hd;
var uce = Do, mm = od, gh = [
  ["text", zle],
  ["newline", Ule],
  ["escape", jle],
  ["backticks", Gle],
  ["strikethrough", oa.tokenize],
  ["emphasis", la.tokenize],
  ["link", Kle],
  ["image", Zle],
  ["autolink", ece],
  ["html_inline", rce],
  ["entity", cce]
], mh = [
  ["balance_pairs", ace],
  ["strikethrough", oa.postProcess],
  ["emphasis", la.postProcess],
  ["text_collapse", hce]
];
function To() {
  var t;
  for (this.ruler = new mm(), t = 0; t < gh.length; t++)
    this.ruler.push(gh[t][0], gh[t][1]);
  for (this.ruler2 = new mm(), t = 0; t < mh.length; t++)
    this.ruler2.push(mh[t][0], mh[t][1]);
}
To.prototype.skipToken = function(t) {
  var e, n, r = t.pos, i = this.ruler.getRules(""), s = i.length, o = t.md.options.maxNesting, l = t.cache;
  if (typeof l[r] < "u") {
    t.pos = l[r];
    return;
  }
  if (t.level < o)
    for (n = 0; n < s && (t.level++, e = i[n](t, !0), t.level--, !e); n++)
      ;
  else
    t.pos = t.posMax;
  e || t.pos++, l[r] = t.pos;
};
To.prototype.tokenize = function(t) {
  for (var e, n, r = this.ruler.getRules(""), i = r.length, s = t.posMax, o = t.md.options.maxNesting; t.pos < s; ) {
    if (t.level < o)
      for (n = 0; n < i && (e = r[n](t, !1), !e); n++)
        ;
    if (e) {
      if (t.pos >= s)
        break;
      continue;
    }
    t.pending += t.src[t.pos++];
  }
  t.pending && t.pushPending();
};
To.prototype.parse = function(t, e, n, r) {
  var i, s, o, l = new this.State(t, e, n, r);
  for (this.tokenize(l), s = this.ruler2.getRules(""), o = s.length, i = 0; i < o; i++)
    s[i](l);
};
To.prototype.State = uce;
var fce = To, yh, ym;
function dce() {
  return ym || (ym = 1, yh = function(t) {
    var e = {};
    e.src_Any = S1().source, e.src_Cc = C1().source, e.src_Z = A1().source, e.src_P = sd.source, e.src_ZPCc = [e.src_Z, e.src_P, e.src_Cc].join("|"), e.src_ZCc = [e.src_Z, e.src_Cc].join("|");
    var n = "[><\uFF5C]";
    return e.src_pseudo_letter = "(?:(?!" + n + "|" + e.src_ZPCc + ")" + e.src_Any + ")", e.src_ip4 = "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)", e.src_auth = "(?:(?:(?!" + e.src_ZCc + "|[@/\\[\\]()]).)+@)?", e.src_port = "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?", e.src_host_terminator = "(?=$|" + n + "|" + e.src_ZPCc + ")(?!-|_|:\\d|\\.-|\\.(?!$|" + e.src_ZPCc + "))", e.src_path = "(?:[/?#](?:(?!" + e.src_ZCc + "|" + n + `|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!` + e.src_ZCc + "|\\]).)*\\]|\\((?:(?!" + e.src_ZCc + "|[)]).)*\\)|\\{(?:(?!" + e.src_ZCc + '|[}]).)*\\}|\\"(?:(?!' + e.src_ZCc + `|["]).)+\\"|\\'(?:(?!` + e.src_ZCc + "|[']).)+\\'|\\'(?=" + e.src_pseudo_letter + "|[-]).|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!" + e.src_ZCc + "|[.]).|" + (t && t["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") + ",(?!" + e.src_ZCc + ").|;(?!" + e.src_ZCc + ").|\\!+(?!" + e.src_ZCc + "|[!]).|\\?(?!" + e.src_ZCc + "|[?]).)+|\\/)?", e.src_email_name = '[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*', e.src_xn = "xn--[a-z0-9\\-]{1,59}", e.src_domain_root = "(?:" + e.src_xn + "|" + e.src_pseudo_letter + "{1,63})", e.src_domain = "(?:" + e.src_xn + "|(?:" + e.src_pseudo_letter + ")|(?:" + e.src_pseudo_letter + "(?:-|" + e.src_pseudo_letter + "){0,61}" + e.src_pseudo_letter + "))", e.src_host = "(?:(?:(?:(?:" + e.src_domain + ")\\.)*" + e.src_domain + "))", e.tpl_host_fuzzy = "(?:" + e.src_ip4 + "|(?:(?:(?:" + e.src_domain + ")\\.)+(?:%TLDS%)))", e.tpl_host_no_ip_fuzzy = "(?:(?:(?:" + e.src_domain + ")\\.)+(?:%TLDS%))", e.src_host_strict = e.src_host + e.src_host_terminator, e.tpl_host_fuzzy_strict = e.tpl_host_fuzzy + e.src_host_terminator, e.src_host_port_strict = e.src_host + e.src_port + e.src_host_terminator, e.tpl_host_port_fuzzy_strict = e.tpl_host_fuzzy + e.src_port + e.src_host_terminator, e.tpl_host_port_no_ip_fuzzy_strict = e.tpl_host_no_ip_fuzzy + e.src_port + e.src_host_terminator, e.tpl_host_fuzzy_test = "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" + e.src_ZPCc + "|>|$))", e.tpl_email_fuzzy = "(^|" + n + '|"|\\(|' + e.src_ZCc + ")(" + e.src_email_name + "@" + e.tpl_host_fuzzy_strict + ")", e.tpl_link_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|\uFF5C]|" + e.src_ZPCc + "))((?![$+<=>^`|\uFF5C])" + e.tpl_host_port_fuzzy_strict + e.src_path + ")", e.tpl_link_no_ip_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|\uFF5C]|" + e.src_ZPCc + "))((?![$+<=>^`|\uFF5C])" + e.tpl_host_port_no_ip_fuzzy_strict + e.src_path + ")", e;
  }), yh;
}
function Du(t) {
  var e = Array.prototype.slice.call(arguments, 1);
  return e.forEach(function(n) {
    !n || Object.keys(n).forEach(function(r) {
      t[r] = n[r];
    });
  }), t;
}
function ca(t) {
  return Object.prototype.toString.call(t);
}
function pce(t) {
  return ca(t) === "[object String]";
}
function gce(t) {
  return ca(t) === "[object Object]";
}
function mce(t) {
  return ca(t) === "[object RegExp]";
}
function bm(t) {
  return ca(t) === "[object Function]";
}
function yce(t) {
  return t.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
}
var R1 = {
  fuzzyLink: !0,
  fuzzyEmail: !0,
  fuzzyIP: !1
};
function bce(t) {
  return Object.keys(t || {}).reduce(function(e, n) {
    return e || R1.hasOwnProperty(n);
  }, !1);
}
var wce = {
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
}, vce = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]", xce = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|\u0440\u0444".split("|");
function kce(t) {
  t.__index__ = -1, t.__text_cache__ = "";
}
function _ce(t) {
  return function(e, n) {
    var r = e.slice(n);
    return t.test(r) ? r.match(t)[0].length : 0;
  };
}
function wm() {
  return function(t, e) {
    e.normalize(t);
  };
}
function cc(t) {
  var e = t.re = dce()(t.__opts__), n = t.__tlds__.slice();
  t.onCompile(), t.__tlds_replaced__ || n.push(vce), n.push(e.src_xn), e.src_tlds = n.join("|");
  function r(l) {
    return l.replace("%TLDS%", e.src_tlds);
  }
  e.email_fuzzy = RegExp(r(e.tpl_email_fuzzy), "i"), e.link_fuzzy = RegExp(r(e.tpl_link_fuzzy), "i"), e.link_no_ip_fuzzy = RegExp(r(e.tpl_link_no_ip_fuzzy), "i"), e.host_fuzzy_test = RegExp(r(e.tpl_host_fuzzy_test), "i");
  var i = [];
  t.__compiled__ = {};
  function s(l, c) {
    throw new Error('(LinkifyIt) Invalid schema "' + l + '": ' + c);
  }
  Object.keys(t.__schemas__).forEach(function(l) {
    var c = t.__schemas__[l];
    if (c !== null) {
      var a = { validate: null, link: null };
      if (t.__compiled__[l] = a, gce(c)) {
        mce(c.validate) ? a.validate = _ce(c.validate) : bm(c.validate) ? a.validate = c.validate : s(l, c), bm(c.normalize) ? a.normalize = c.normalize : c.normalize ? s(l, c) : a.normalize = wm();
        return;
      }
      if (pce(c)) {
        i.push(l);
        return;
      }
      s(l, c);
    }
  }), i.forEach(function(l) {
    !t.__compiled__[t.__schemas__[l]] || (t.__compiled__[l].validate = t.__compiled__[t.__schemas__[l]].validate, t.__compiled__[l].normalize = t.__compiled__[t.__schemas__[l]].normalize);
  }), t.__compiled__[""] = { validate: null, normalize: wm() };
  var o = Object.keys(t.__compiled__).filter(function(l) {
    return l.length > 0 && t.__compiled__[l];
  }).map(yce).join("|");
  t.re.schema_test = RegExp("(^|(?!_)(?:[><\uFF5C]|" + e.src_ZPCc + "))(" + o + ")", "i"), t.re.schema_search = RegExp("(^|(?!_)(?:[><\uFF5C]|" + e.src_ZPCc + "))(" + o + ")", "ig"), t.re.pretest = RegExp(
    "(" + t.re.schema_test.source + ")|(" + t.re.host_fuzzy_test.source + ")|@",
    "i"
  ), kce(t);
}
function Sce(t, e) {
  var n = t.__index__, r = t.__last_index__, i = t.__text_cache__.slice(n, r);
  this.schema = t.__schema__.toLowerCase(), this.index = n + e, this.lastIndex = r + e, this.raw = i, this.text = i, this.url = i;
}
function vm(t, e) {
  var n = new Sce(t, e);
  return t.__compiled__[n.schema].normalize(n, t), n;
}
function Pt(t, e) {
  if (!(this instanceof Pt))
    return new Pt(t, e);
  e || bce(t) && (e = t, t = {}), this.__opts__ = Du({}, R1, e), this.__index__ = -1, this.__last_index__ = -1, this.__schema__ = "", this.__text_cache__ = "", this.__schemas__ = Du({}, wce, t), this.__compiled__ = {}, this.__tlds__ = xce, this.__tlds_replaced__ = !1, this.re = {}, cc(this);
}
Pt.prototype.add = function(e, n) {
  return this.__schemas__[e] = n, cc(this), this;
};
Pt.prototype.set = function(e) {
  return this.__opts__ = Du(this.__opts__, e), this;
};
Pt.prototype.test = function(e) {
  if (this.__text_cache__ = e, this.__index__ = -1, !e.length)
    return !1;
  var n, r, i, s, o, l, c, a, h;
  if (this.re.schema_test.test(e)) {
    for (c = this.re.schema_search, c.lastIndex = 0; (n = c.exec(e)) !== null; )
      if (s = this.testSchemaAt(e, n[2], c.lastIndex), s) {
        this.__schema__ = n[2], this.__index__ = n.index + n[1].length, this.__last_index__ = n.index + n[0].length + s;
        break;
      }
  }
  return this.__opts__.fuzzyLink && this.__compiled__["http:"] && (a = e.search(this.re.host_fuzzy_test), a >= 0 && (this.__index__ < 0 || a < this.__index__) && (r = e.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) !== null && (o = r.index + r[1].length, (this.__index__ < 0 || o < this.__index__) && (this.__schema__ = "", this.__index__ = o, this.__last_index__ = r.index + r[0].length))), this.__opts__.fuzzyEmail && this.__compiled__["mailto:"] && (h = e.indexOf("@"), h >= 0 && (i = e.match(this.re.email_fuzzy)) !== null && (o = i.index + i[1].length, l = i.index + i[0].length, (this.__index__ < 0 || o < this.__index__ || o === this.__index__ && l > this.__last_index__) && (this.__schema__ = "mailto:", this.__index__ = o, this.__last_index__ = l))), this.__index__ >= 0;
};
Pt.prototype.pretest = function(e) {
  return this.re.pretest.test(e);
};
Pt.prototype.testSchemaAt = function(e, n, r) {
  return this.__compiled__[n.toLowerCase()] ? this.__compiled__[n.toLowerCase()].validate(e, r, this) : 0;
};
Pt.prototype.match = function(e) {
  var n = 0, r = [];
  this.__index__ >= 0 && this.__text_cache__ === e && (r.push(vm(this, n)), n = this.__last_index__);
  for (var i = n ? e.slice(n) : e; this.test(i); )
    r.push(vm(this, n)), i = i.slice(this.__last_index__), n += this.__last_index__;
  return r.length ? r : null;
};
Pt.prototype.tlds = function(e, n) {
  return e = Array.isArray(e) ? e : [e], n ? (this.__tlds__ = this.__tlds__.concat(e).sort().filter(function(r, i, s) {
    return r !== s[i - 1];
  }).reverse(), cc(this), this) : (this.__tlds__ = e.slice(), this.__tlds_replaced__ = !0, cc(this), this);
};
Pt.prototype.normalize = function(e) {
  e.schema || (e.url = "http://" + e.url), e.schema === "mailto:" && !/^mailto:/i.test(e.url) && (e.url = "mailto:" + e.url);
};
Pt.prototype.onCompile = function() {
};
var Cce = Pt;
const Mi = 2147483647, hn = 36, ud = 1, eo = 26, Ace = 38, Ece = 700, I1 = 72, N1 = 128, P1 = "-", Dce = /^xn--/, Tce = /[^\0-\x7F]/, Mce = /[\x2E\u3002\uFF0E\uFF61]/g, Oce = {
  overflow: "Overflow: input needs wider integers to process",
  "not-basic": "Illegal input >= 0x80 (not a basic code point)",
  "invalid-input": "Invalid input"
}, bh = hn - ud, un = Math.floor, wh = String.fromCharCode;
function Yn(t) {
  throw new RangeError(Oce[t]);
}
function Lce(t, e) {
  const n = [];
  let r = t.length;
  for (; r--; )
    n[r] = e(t[r]);
  return n;
}
function F1(t, e) {
  const n = t.split("@");
  let r = "";
  n.length > 1 && (r = n[0] + "@", t = n[1]), t = t.replace(Mce, ".");
  const i = t.split("."), s = Lce(i, e).join(".");
  return r + s;
}
function fd(t) {
  const e = [];
  let n = 0;
  const r = t.length;
  for (; n < r; ) {
    const i = t.charCodeAt(n++);
    if (i >= 55296 && i <= 56319 && n < r) {
      const s = t.charCodeAt(n++);
      (s & 64512) == 56320 ? e.push(((i & 1023) << 10) + (s & 1023) + 65536) : (e.push(i), n--);
    } else
      e.push(i);
  }
  return e;
}
const B1 = (t) => String.fromCodePoint(...t), Rce = function(t) {
  return t >= 48 && t < 58 ? 26 + (t - 48) : t >= 65 && t < 91 ? t - 65 : t >= 97 && t < 123 ? t - 97 : hn;
}, xm = function(t, e) {
  return t + 22 + 75 * (t < 26) - ((e != 0) << 5);
}, q1 = function(t, e, n) {
  let r = 0;
  for (t = n ? un(t / Ece) : t >> 1, t += un(t / e); t > bh * eo >> 1; r += hn)
    t = un(t / bh);
  return un(r + (bh + 1) * t / (t + Ace));
}, dd = function(t) {
  const e = [], n = t.length;
  let r = 0, i = N1, s = I1, o = t.lastIndexOf(P1);
  o < 0 && (o = 0);
  for (let l = 0; l < o; ++l)
    t.charCodeAt(l) >= 128 && Yn("not-basic"), e.push(t.charCodeAt(l));
  for (let l = o > 0 ? o + 1 : 0; l < n; ) {
    const c = r;
    for (let h = 1, u = hn; ; u += hn) {
      l >= n && Yn("invalid-input");
      const f = Rce(t.charCodeAt(l++));
      f >= hn && Yn("invalid-input"), f > un((Mi - r) / h) && Yn("overflow"), r += f * h;
      const d = u <= s ? ud : u >= s + eo ? eo : u - s;
      if (f < d)
        break;
      const p = hn - d;
      h > un(Mi / p) && Yn("overflow"), h *= p;
    }
    const a = e.length + 1;
    s = q1(r - c, a, c == 0), un(r / a) > Mi - i && Yn("overflow"), i += un(r / a), r %= a, e.splice(r++, 0, i);
  }
  return String.fromCodePoint(...e);
}, pd = function(t) {
  const e = [];
  t = fd(t);
  const n = t.length;
  let r = N1, i = 0, s = I1;
  for (const c of t)
    c < 128 && e.push(wh(c));
  const o = e.length;
  let l = o;
  for (o && e.push(P1); l < n; ) {
    let c = Mi;
    for (const h of t)
      h >= r && h < c && (c = h);
    const a = l + 1;
    c - r > un((Mi - i) / a) && Yn("overflow"), i += (c - r) * a, r = c;
    for (const h of t)
      if (h < r && ++i > Mi && Yn("overflow"), h === r) {
        let u = i;
        for (let f = hn; ; f += hn) {
          const d = f <= s ? ud : f >= s + eo ? eo : f - s;
          if (u < d)
            break;
          const p = u - d, g = hn - d;
          e.push(
            wh(xm(d + p % g, 0))
          ), u = un(p / g);
        }
        e.push(wh(xm(u, 0))), s = q1(i, a, l === o), i = 0, ++l;
      }
    ++i, ++r;
  }
  return e.join("");
}, $1 = function(t) {
  return F1(t, function(e) {
    return Dce.test(e) ? dd(e.slice(4).toLowerCase()) : e;
  });
}, H1 = function(t) {
  return F1(t, function(e) {
    return Tce.test(e) ? "xn--" + pd(e) : e;
  });
}, Ice = {
  version: "2.1.0",
  ucs2: {
    decode: fd,
    encode: B1
  },
  decode: dd,
  encode: pd,
  toASCII: H1,
  toUnicode: $1
}, Nce = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ucs2decode: fd,
  ucs2encode: B1,
  decode: dd,
  encode: pd,
  toASCII: H1,
  toUnicode: $1,
  default: Ice
}, Symbol.toStringTag, { value: "Module" })), Pce = /* @__PURE__ */ J_(Nce);
var Fce = {
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
}, Bce = {
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
}, qce = {
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
}, qs = ne, $ce = na, Hce = qoe, zce = cle, Vce = $le, Uce = fce, Wce = Cce, Pr = as, z1 = Pce, jce = {
  default: Fce,
  zero: Bce,
  commonmark: qce
}, Gce = /^(vbscript|javascript|file|data):/, Yce = /^data:image\/(gif|png|jpeg|webp);/;
function Kce(t) {
  var e = t.trim().toLowerCase();
  return Gce.test(e) ? !!Yce.test(e) : !0;
}
var V1 = ["http:", "https:", "mailto:"];
function Jce(t) {
  var e = Pr.parse(t, !0);
  if (e.hostname && (!e.protocol || V1.indexOf(e.protocol) >= 0))
    try {
      e.hostname = z1.toASCII(e.hostname);
    } catch {
    }
  return Pr.encode(Pr.format(e));
}
function Zce(t) {
  var e = Pr.parse(t, !0);
  if (e.hostname && (!e.protocol || V1.indexOf(e.protocol) >= 0))
    try {
      e.hostname = z1.toUnicode(e.hostname);
    } catch {
    }
  return Pr.decode(Pr.format(e), Pr.decode.defaultChars + "%");
}
function Ft(t, e) {
  if (!(this instanceof Ft))
    return new Ft(t, e);
  e || qs.isString(t) || (e = t || {}, t = "default"), this.inline = new Uce(), this.block = new Vce(), this.core = new zce(), this.renderer = new Hce(), this.linkify = new Wce(), this.validateLink = Kce, this.normalizeLink = Jce, this.normalizeLinkText = Zce, this.utils = qs, this.helpers = qs.assign({}, $ce), this.options = {}, this.configure(t), e && this.set(e);
}
Ft.prototype.set = function(t) {
  return qs.assign(this.options, t), this;
};
Ft.prototype.configure = function(t) {
  var e = this, n;
  if (qs.isString(t) && (n = t, t = jce[n], !t))
    throw new Error('Wrong `markdown-it` preset "' + n + '", check name');
  if (!t)
    throw new Error("Wrong `markdown-it` preset, can't be empty");
  return t.options && e.set(t.options), t.components && Object.keys(t.components).forEach(function(r) {
    t.components[r].rules && e[r].ruler.enableOnly(t.components[r].rules), t.components[r].rules2 && e[r].ruler2.enableOnly(t.components[r].rules2);
  }), this;
};
Ft.prototype.enable = function(t, e) {
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
Ft.prototype.disable = function(t, e) {
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
Ft.prototype.use = function(t) {
  var e = [this].concat(Array.prototype.slice.call(arguments, 1));
  return t.apply(t, e), this;
};
Ft.prototype.parse = function(t, e) {
  if (typeof t != "string")
    throw new Error("Input data should be a String");
  var n = new this.core.State(t, this, e);
  return this.core.process(n), n.tokens;
};
Ft.prototype.render = function(t, e) {
  return e = e || {}, this.renderer.render(this.parse(t, e), this.options, e);
};
Ft.prototype.parseInline = function(t, e) {
  var n = new this.core.State(t, this, e);
  return n.inlineMode = !0, this.core.process(n), n.tokens;
};
Ft.prototype.renderInline = function(t, e) {
  return e = e || {}, this.renderer.render(this.parseInline(t, e), this.options, e);
};
var Xce = Ft;
(function(t) {
  t.exports = Xce;
})(_1);
const Qce = /* @__PURE__ */ K_(_1.exports), aa = Ce.button.withConfig({
  displayName: "Buttons__DefaultButton",
  componentId: "sc-temzhj-0"
})(['&&{cursor:pointer;color:#fff;font-family:"Lato",sans-serif;text-transform:uppercase;font-size:12px;font-weight:bold;border:1px solid var(--gray-800);background-color:var(--gray-800);height:40px;display:flex;justify-content:center;align-items:center;padding:0;transition:0.4s ease;border-radius:var(--border-radius);&:not(:disabled):hover{background-color:var(--green-400);border:1px solid var(--green-400);}}']), Nl = Ce(aa).withConfig({
  displayName: "Buttons__TopbarButton",
  componentId: "sc-temzhj-1"
})(["&&{padding:0px 15px;margin:5px;}"]), eae = Ce(aa).withConfig({
  displayName: "ButtonGroup__GroupButton",
  componentId: "sc-retnx5-0"
})(["&&{color:", ";border:", ";background-color:", ";margin:5px;width:40px;}"], (t) => t.$active ? "white" : "var(--gray-900)", (t) => t.$active ? "1px solid var(--green-500)" : "1px solid var(--gray-800)", (t) => t.$active ? "var(--green-500)" : "var(--gray-800)"), tae = ({
  buttons: t,
  initialClickedId: e = 2,
  clickCallback: n
}) => {
  const [r, i] = st(e);
  return kt`
    ${t.map((s, o) => kt`
      <${eae} type="button" key=${s.label} name=${s.label} onClick=${() => {
    i(o), n(s.label);
  }} $active=${o === r}>
        <img src=${s.img} alt=${s.label} />
      <//>`)}
  `;
};
console.log("ButtonGroup component loaded");
class ee {
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
    return this.decompose(0, e, i, 2), r.length && r.decompose(0, r.length, i, 3), this.decompose(n, this.length, i, 1), cn.from(i, this.length - (n - e) + r.length);
  }
  append(e) {
    return this.replace(this.length, this.length, e);
  }
  slice(e, n = this.length) {
    let r = [];
    return this.decompose(e, n, r, 0), cn.from(r, n - e);
  }
  eq(e) {
    if (e == this)
      return !0;
    if (e.length != this.length || e.lines != this.lines)
      return !1;
    let n = this.scanIdentical(e, 1), r = this.length - this.scanIdentical(e, -1), i = new $s(this), s = new $s(e);
    for (let o = n, l = n; ; ) {
      if (i.next(o), s.next(o), o = 0, i.lineBreak != s.lineBreak || i.done != s.done || i.value != s.value)
        return !1;
      if (l += i.value.length, i.done || l >= r)
        return !0;
    }
  }
  iter(e = 1) {
    return new $s(this, e);
  }
  iterRange(e, n = this.length) {
    return new U1(this, e, n);
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
    return new W1(r);
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
    return e.length == 1 && !e[0] ? ee.empty : e.length <= 32 ? new De(e) : cn.from(De.split(e, []));
  }
}
class De extends ee {
  constructor(e, n = nae(e)) {
    super(), this.text = e, this.length = n;
  }
  get lines() {
    return this.text.length;
  }
  get children() {
    return null;
  }
  lineInner(e, n, r, i) {
    for (let s = 0; ; s++) {
      let o = this.text[s], l = i + o.length;
      if ((n ? r : l) >= e)
        return new rae(i, l, r, o);
      i = l + 1, r++;
    }
  }
  decompose(e, n, r, i) {
    let s = e <= 0 && n >= this.length ? this : new De(km(this.text, e, n), Math.min(n, this.length) - Math.max(0, e));
    if (i & 1) {
      let o = r.pop(), l = Pl(s.text, o.text.slice(), 0, s.length);
      if (l.length <= 32)
        r.push(new De(l, o.length + s.length));
      else {
        let c = l.length >> 1;
        r.push(new De(l.slice(0, c)), new De(l.slice(c)));
      }
    } else
      r.push(s);
  }
  replace(e, n, r) {
    if (!(r instanceof De))
      return super.replace(e, n, r);
    let i = Pl(this.text, Pl(r.text, km(this.text, 0, e)), n), s = this.length + r.length - (n - e);
    return i.length <= 32 ? new De(i, s) : cn.from(De.split(i, []), s);
  }
  sliceString(e, n = this.length, r = `
`) {
    let i = "";
    for (let s = 0, o = 0; s <= n && o < this.text.length; o++) {
      let l = this.text[o], c = s + l.length;
      s > e && o && (i += r), e < c && n > s && (i += l.slice(Math.max(0, e - s), n - s)), s = c + 1;
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
    for (let s of e)
      r.push(s), i += s.length + 1, r.length == 32 && (n.push(new De(r, i)), r = [], i = -1);
    return i > -1 && n.push(new De(r, i)), n;
  }
}
class cn extends ee {
  constructor(e, n) {
    super(), this.children = e, this.length = n, this.lines = 0;
    for (let r of e)
      this.lines += r.lines;
  }
  lineInner(e, n, r, i) {
    for (let s = 0; ; s++) {
      let o = this.children[s], l = i + o.length, c = r + o.lines - 1;
      if ((n ? c : l) >= e)
        return o.lineInner(e, n, r, i);
      i = l + 1, r = c + 1;
    }
  }
  decompose(e, n, r, i) {
    for (let s = 0, o = 0; o <= n && s < this.children.length; s++) {
      let l = this.children[s], c = o + l.length;
      if (e <= c && n >= o) {
        let a = i & ((o <= e ? 1 : 0) | (c >= n ? 2 : 0));
        o >= e && c <= n && !a ? r.push(l) : l.decompose(e - o, n - o, r, a);
      }
      o = c + 1;
    }
  }
  replace(e, n, r) {
    if (r.lines < this.lines)
      for (let i = 0, s = 0; i < this.children.length; i++) {
        let o = this.children[i], l = s + o.length;
        if (e >= s && n <= l) {
          let c = o.replace(e - s, n - s, r), a = this.lines - o.lines + c.lines;
          if (c.lines < a >> 5 - 1 && c.lines > a >> 5 + 1) {
            let h = this.children.slice();
            return h[i] = c, new cn(h, this.length - (n - e) + r.length);
          }
          return super.replace(s, l, c);
        }
        s = l + 1;
      }
    return super.replace(e, n, r);
  }
  sliceString(e, n = this.length, r = `
`) {
    let i = "";
    for (let s = 0, o = 0; s < this.children.length && o <= n; s++) {
      let l = this.children[s], c = o + l.length;
      o > e && s && (i += r), e < c && n > o && (i += l.sliceString(e - o, n - o, r)), o = c + 1;
    }
    return i;
  }
  flatten(e) {
    for (let n of this.children)
      n.flatten(e);
  }
  scanIdentical(e, n) {
    if (!(e instanceof cn))
      return 0;
    let r = 0, [i, s, o, l] = n > 0 ? [0, 0, this.children.length, e.children.length] : [this.children.length - 1, e.children.length - 1, -1, -1];
    for (; ; i += n, s += n) {
      if (i == o || s == l)
        return r;
      let c = this.children[i], a = e.children[s];
      if (c != a)
        return r + c.scanIdentical(a, n);
      r += c.length + 1;
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
      return new De(d, n);
    }
    let i = Math.max(32, r >> 5), s = i << 1, o = i >> 1, l = [], c = 0, a = -1, h = [];
    function u(d) {
      let p;
      if (d.lines > s && d instanceof cn)
        for (let g of d.children)
          u(g);
      else
        d.lines > o && (c > o || !c) ? (f(), l.push(d)) : d instanceof De && c && (p = h[h.length - 1]) instanceof De && d.lines + p.lines <= 32 ? (c += d.lines, a += d.length + 1, h[h.length - 1] = new De(p.text.concat(d.text), p.length + 1 + d.length)) : (c + d.lines > i && f(), c += d.lines, a += d.length + 1, h.push(d));
    }
    function f() {
      c != 0 && (l.push(h.length == 1 ? h[0] : cn.from(h, a)), a = -1, c = h.length = 0);
    }
    for (let d of e)
      u(d);
    return f(), l.length == 1 ? l[0] : new cn(l, n);
  }
}
ee.empty = /* @__PURE__ */ new De([""], 0);
function nae(t) {
  let e = -1;
  for (let n of t)
    e += n.length + 1;
  return e;
}
function Pl(t, e, n = 0, r = 1e9) {
  for (let i = 0, s = 0, o = !0; s < t.length && i <= r; s++) {
    let l = t[s], c = i + l.length;
    c >= n && (c > r && (l = l.slice(0, r - i)), i < n && (l = l.slice(n - i)), o ? (e[e.length - 1] += l, o = !1) : e.push(l)), i = c + 1;
  }
  return e;
}
function km(t, e, n) {
  return Pl(t, [""], e, n);
}
class $s {
  constructor(e, n = 1) {
    this.dir = n, this.done = !1, this.lineBreak = !1, this.value = "", this.nodes = [e], this.offsets = [n > 0 ? 1 : (e instanceof De ? e.text.length : e.children.length) << 1];
  }
  nextInner(e, n) {
    for (this.done = this.lineBreak = !1; ; ) {
      let r = this.nodes.length - 1, i = this.nodes[r], s = this.offsets[r], o = s >> 1, l = i instanceof De ? i.text.length : i.children.length;
      if (o == (n > 0 ? l : 0)) {
        if (r == 0)
          return this.done = !0, this.value = "", this;
        n > 0 && this.offsets[r - 1]++, this.nodes.pop(), this.offsets.pop();
      } else if ((s & 1) == (n > 0 ? 0 : 1)) {
        if (this.offsets[r] += n, e == 0)
          return this.lineBreak = !0, this.value = `
`, this;
        e--;
      } else if (i instanceof De) {
        let c = i.text[o + (n < 0 ? -1 : 0)];
        if (this.offsets[r] += n, c.length > Math.max(0, e))
          return this.value = e == 0 ? c : n > 0 ? c.slice(e) : c.slice(0, c.length - e), this;
        e -= c.length;
      } else {
        let c = i.children[o + (n < 0 ? -1 : 0)];
        e > c.length ? (e -= c.length, this.offsets[r] += n) : (n < 0 && this.offsets[r]--, this.nodes.push(c), this.offsets.push(n > 0 ? 1 : (c instanceof De ? c.text.length : c.children.length) << 1));
      }
    }
  }
  next(e = 0) {
    return e < 0 && (this.nextInner(-e, -this.dir), e = this.value.length), this.nextInner(e, this.dir);
  }
}
class U1 {
  constructor(e, n, r) {
    this.value = "", this.done = !1, this.cursor = new $s(e, n > r ? -1 : 1), this.pos = n > r ? e.length : 0, this.from = Math.min(n, r), this.to = Math.max(n, r);
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
class W1 {
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
typeof Symbol < "u" && (ee.prototype[Symbol.iterator] = function() {
  return this.iter();
}, $s.prototype[Symbol.iterator] = U1.prototype[Symbol.iterator] = W1.prototype[Symbol.iterator] = function() {
  return this;
});
class rae {
  constructor(e, n, r, i) {
    this.from = e, this.to = n, this.number = r, this.text = i;
  }
  get length() {
    return this.to - this.from;
  }
}
let Oi = /* @__PURE__ */ "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map((t) => t ? parseInt(t, 36) : 1);
for (let t = 1; t < Oi.length; t++)
  Oi[t] += Oi[t - 1];
function iae(t) {
  for (let e = 1; e < Oi.length; e += 2)
    if (Oi[e] > t)
      return Oi[e - 1] <= t;
  return !1;
}
function _m(t) {
  return t >= 127462 && t <= 127487;
}
const Sm = 8205;
function Qe(t, e, n = !0, r = !0) {
  return (n ? j1 : sae)(t, e, r);
}
function j1(t, e, n) {
  if (e == t.length)
    return e;
  e && G1(t.charCodeAt(e)) && Y1(t.charCodeAt(e - 1)) && e--;
  let r = Ve(t, e);
  for (e += Dt(r); e < t.length; ) {
    let i = Ve(t, e);
    if (r == Sm || i == Sm || n && iae(i))
      e += Dt(i), r = i;
    else if (_m(i)) {
      let s = 0, o = e - 2;
      for (; o >= 0 && _m(Ve(t, o)); )
        s++, o -= 2;
      if (s % 2 == 0)
        break;
      e += 2;
    } else
      break;
  }
  return e;
}
function sae(t, e, n) {
  for (; e > 0; ) {
    let r = j1(t, e - 2, n);
    if (r < e)
      return r;
    e--;
  }
  return 0;
}
function G1(t) {
  return t >= 56320 && t < 57344;
}
function Y1(t) {
  return t >= 55296 && t < 56320;
}
function Ve(t, e) {
  let n = t.charCodeAt(e);
  if (!Y1(n) || e + 1 == t.length)
    return n;
  let r = t.charCodeAt(e + 1);
  return G1(r) ? (n - 55296 << 10) + (r - 56320) + 65536 : n;
}
function gd(t) {
  return t <= 65535 ? String.fromCharCode(t) : (t -= 65536, String.fromCharCode((t >> 10) + 55296, (t & 1023) + 56320));
}
function Dt(t) {
  return t < 65536 ? 1 : 2;
}
const Tu = /\r\n?|\n/;
var ct = /* @__PURE__ */ function(t) {
  return t[t.Simple = 0] = "Simple", t[t.TrackDel = 1] = "TrackDel", t[t.TrackBefore = 2] = "TrackBefore", t[t.TrackAfter = 3] = "TrackAfter", t;
}(ct || (ct = {}));
class yn {
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
      let s = this.sections[n++], o = this.sections[n++];
      o < 0 ? (e(r, i, s), i += s) : i += o, r += s;
    }
  }
  iterChangedRanges(e, n = !1) {
    Mu(this, e, n);
  }
  get invertedDesc() {
    let e = [];
    for (let n = 0; n < this.sections.length; ) {
      let r = this.sections[n++], i = this.sections[n++];
      i < 0 ? e.push(r, i) : e.push(i, r);
    }
    return new yn(e);
  }
  composeDesc(e) {
    return this.empty ? e : e.empty ? this : K1(this, e);
  }
  mapDesc(e, n = !1) {
    return e.empty ? this : Ou(this, e, n);
  }
  mapPos(e, n = -1, r = ct.Simple) {
    let i = 0, s = 0;
    for (let o = 0; o < this.sections.length; ) {
      let l = this.sections[o++], c = this.sections[o++], a = i + l;
      if (c < 0) {
        if (a > e)
          return s + (e - i);
        s += l;
      } else {
        if (r != ct.Simple && a >= e && (r == ct.TrackDel && i < e && a > e || r == ct.TrackBefore && i < e || r == ct.TrackAfter && a > e))
          return null;
        if (a > e || a == e && n < 0 && !l)
          return e == i || n < 0 ? s : s + c;
        s += c;
      }
      i = a;
    }
    if (e > i)
      throw new RangeError(`Position ${e} is out of range for changeset of length ${i}`);
    return s;
  }
  touchesRange(e, n = e) {
    for (let r = 0, i = 0; r < this.sections.length && i <= n; ) {
      let s = this.sections[r++], o = this.sections[r++], l = i + s;
      if (o >= 0 && i <= n && l >= e)
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
    return new yn(e);
  }
  static create(e) {
    return new yn(e);
  }
}
class Re extends yn {
  constructor(e, n) {
    super(e), this.inserted = n;
  }
  apply(e) {
    if (this.length != e.length)
      throw new RangeError("Applying change set to a document with the wrong length");
    return Mu(this, (n, r, i, s, o) => e = e.replace(i, i + (r - n), o), !1), e;
  }
  mapDesc(e, n = !1) {
    return Ou(this, e, n, !0);
  }
  invert(e) {
    let n = this.sections.slice(), r = [];
    for (let i = 0, s = 0; i < n.length; i += 2) {
      let o = n[i], l = n[i + 1];
      if (l >= 0) {
        n[i] = l, n[i + 1] = o;
        let c = i >> 1;
        for (; r.length < c; )
          r.push(ee.empty);
        r.push(o ? e.slice(s, s + o) : ee.empty);
      }
      s += o;
    }
    return new Re(n, r);
  }
  compose(e) {
    return this.empty ? e : e.empty ? this : K1(this, e, !0);
  }
  map(e, n = !1) {
    return e.empty ? this : Ou(this, e, n, !0);
  }
  iterChanges(e, n = !1) {
    Mu(this, e, n);
  }
  get desc() {
    return yn.create(this.sections);
  }
  filter(e) {
    let n = [], r = [], i = [], s = new to(this);
    e:
      for (let o = 0, l = 0; ; ) {
        let c = o == e.length ? 1e9 : e[o++];
        for (; l < c || l == c && s.len == 0; ) {
          if (s.done)
            break e;
          let h = Math.min(s.len, c - l);
          Xe(i, h, -1);
          let u = s.ins == -1 ? -1 : s.off == 0 ? s.ins : 0;
          Xe(n, h, u), u > 0 && tr(r, n, s.text), s.forward(h), l += h;
        }
        let a = e[o++];
        for (; l < a; ) {
          if (s.done)
            break e;
          let h = Math.min(s.len, a - l);
          Xe(n, h, -1), Xe(i, h, s.ins == -1 ? -1 : s.off == 0 ? s.ins : 0), s.forward(h), l += h;
        }
      }
    return {
      changes: new Re(n, r),
      filtered: yn.create(i)
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
    let i = [], s = [], o = 0, l = null;
    function c(h = !1) {
      if (!h && !i.length)
        return;
      o < n && Xe(i, n - o, -1);
      let u = new Re(i, s);
      l = l ? l.compose(u.map(l)) : u, i = [], s = [], o = 0;
    }
    function a(h) {
      if (Array.isArray(h))
        for (let u of h)
          a(u);
      else if (h instanceof Re) {
        if (h.length != n)
          throw new RangeError(`Mismatched change set length (got ${h.length}, expected ${n})`);
        c(), l = l ? l.compose(h.map(l)) : h;
      } else {
        let { from: u, to: f = u, insert: d } = h;
        if (u > f || u < 0 || f > n)
          throw new RangeError(`Invalid change range ${u} to ${f} (in doc of length ${n})`);
        let p = d ? typeof d == "string" ? ee.of(d.split(r || Tu)) : d : ee.empty, g = p.length;
        if (u == f && g == 0)
          return;
        u < o && c(), u > o && Xe(i, u - o, -1), Xe(i, f - u, g), tr(s, i, p), o = f;
      }
    }
    return a(e), c(!l), l;
  }
  static empty(e) {
    return new Re(e ? [e, -1] : [], []);
  }
  static fromJSON(e) {
    if (!Array.isArray(e))
      throw new RangeError("Invalid JSON representation of ChangeSet");
    let n = [], r = [];
    for (let i = 0; i < e.length; i++) {
      let s = e[i];
      if (typeof s == "number")
        n.push(s, -1);
      else {
        if (!Array.isArray(s) || typeof s[0] != "number" || s.some((o, l) => l && typeof o != "string"))
          throw new RangeError("Invalid JSON representation of ChangeSet");
        if (s.length == 1)
          n.push(s[0], 0);
        else {
          for (; r.length < i; )
            r.push(ee.empty);
          r[i] = ee.of(s.slice(1)), n.push(s[0], r[i].length);
        }
      }
    }
    return new Re(n, r);
  }
  static createSet(e, n) {
    return new Re(e, n);
  }
}
function Xe(t, e, n, r = !1) {
  if (e == 0 && n <= 0)
    return;
  let i = t.length - 2;
  i >= 0 && n <= 0 && n == t[i + 1] ? t[i] += e : e == 0 && t[i] == 0 ? t[i + 1] += n : r ? (t[i] += e, t[i + 1] += n) : t.push(e, n);
}
function tr(t, e, n) {
  if (n.length == 0)
    return;
  let r = e.length - 2 >> 1;
  if (r < t.length)
    t[t.length - 1] = t[t.length - 1].append(n);
  else {
    for (; t.length < r; )
      t.push(ee.empty);
    t.push(n);
  }
}
function Mu(t, e, n) {
  let r = t.inserted;
  for (let i = 0, s = 0, o = 0; o < t.sections.length; ) {
    let l = t.sections[o++], c = t.sections[o++];
    if (c < 0)
      i += l, s += l;
    else {
      let a = i, h = s, u = ee.empty;
      for (; a += l, h += c, c && r && (u = u.append(r[o - 2 >> 1])), !(n || o == t.sections.length || t.sections[o + 1] < 0); )
        l = t.sections[o++], c = t.sections[o++];
      e(i, a, s, h, u), i = a, s = h;
    }
  }
}
function Ou(t, e, n, r = !1) {
  let i = [], s = r ? [] : null, o = new to(t), l = new to(e);
  for (let c = -1; ; )
    if (o.ins == -1 && l.ins == -1) {
      let a = Math.min(o.len, l.len);
      Xe(i, a, -1), o.forward(a), l.forward(a);
    } else if (l.ins >= 0 && (o.ins < 0 || c == o.i || o.off == 0 && (l.len < o.len || l.len == o.len && !n))) {
      let a = l.len;
      for (Xe(i, l.ins, -1); a; ) {
        let h = Math.min(o.len, a);
        o.ins >= 0 && c < o.i && o.len <= h && (Xe(i, 0, o.ins), s && tr(s, i, o.text), c = o.i), o.forward(h), a -= h;
      }
      l.next();
    } else if (o.ins >= 0) {
      let a = 0, h = o.len;
      for (; h; )
        if (l.ins == -1) {
          let u = Math.min(h, l.len);
          a += u, h -= u, l.forward(u);
        } else if (l.ins == 0 && l.len < h)
          h -= l.len, l.next();
        else
          break;
      Xe(i, a, c < o.i ? o.ins : 0), s && c < o.i && tr(s, i, o.text), c = o.i, o.forward(o.len - h);
    } else {
      if (o.done && l.done)
        return s ? Re.createSet(i, s) : yn.create(i);
      throw new Error("Mismatched change set lengths");
    }
}
function K1(t, e, n = !1) {
  let r = [], i = n ? [] : null, s = new to(t), o = new to(e);
  for (let l = !1; ; ) {
    if (s.done && o.done)
      return i ? Re.createSet(r, i) : yn.create(r);
    if (s.ins == 0)
      Xe(r, s.len, 0, l), s.next();
    else if (o.len == 0 && !o.done)
      Xe(r, 0, o.ins, l), i && tr(i, r, o.text), o.next();
    else {
      if (s.done || o.done)
        throw new Error("Mismatched change set lengths");
      {
        let c = Math.min(s.len2, o.len), a = r.length;
        if (s.ins == -1) {
          let h = o.ins == -1 ? -1 : o.off ? 0 : o.ins;
          Xe(r, c, h, l), i && h && tr(i, r, o.text);
        } else
          o.ins == -1 ? (Xe(r, s.off ? 0 : s.len, c, l), i && tr(i, r, s.textBit(c))) : (Xe(r, s.off ? 0 : s.len, o.off ? 0 : o.ins, l), i && !o.off && tr(i, r, o.text));
        l = (s.ins > c || o.ins >= 0 && o.len > c) && (l || r.length > a), s.forward2(c), o.forward(c);
      }
    }
  }
}
class to {
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
    return n >= e.length ? ee.empty : e[n];
  }
  textBit(e) {
    let { inserted: n } = this.set, r = this.i - 2 >> 1;
    return r >= n.length && !e ? ee.empty : n[r].slice(this.off, e == null ? void 0 : this.off + e);
  }
  forward(e) {
    e == this.len ? this.next() : (this.len -= e, this.off += e);
  }
  forward2(e) {
    this.ins == -1 ? this.forward(e) : e == this.ins ? this.next() : (this.ins -= e, this.off += e);
  }
}
class Fr {
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
    return this.empty ? r = i = e.mapPos(this.from, n) : (r = e.mapPos(this.from, 1), i = e.mapPos(this.to, -1)), r == this.from && i == this.to ? this : new Fr(r, i, this.flags);
  }
  extend(e, n = e) {
    if (e <= this.anchor && n >= this.anchor)
      return C.range(e, n);
    let r = Math.abs(e - this.anchor) > Math.abs(n - this.anchor) ? e : n;
    return C.range(this.anchor, r);
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
    return C.range(e.anchor, e.head);
  }
  static create(e, n, r) {
    return new Fr(e, n, r);
  }
}
class C {
  constructor(e, n) {
    this.ranges = e, this.mainIndex = n;
  }
  map(e, n = -1) {
    return e.empty ? this : C.create(this.ranges.map((r) => r.map(e, n)), this.mainIndex);
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
    return this.ranges.length == 1 ? this : new C([this.main], 0);
  }
  addRange(e, n = !0) {
    return C.create([e].concat(this.ranges), n ? 0 : this.mainIndex + 1);
  }
  replaceRange(e, n = this.mainIndex) {
    let r = this.ranges.slice();
    return r[n] = e, C.create(r, this.mainIndex);
  }
  toJSON() {
    return { ranges: this.ranges.map((e) => e.toJSON()), main: this.mainIndex };
  }
  static fromJSON(e) {
    if (!e || !Array.isArray(e.ranges) || typeof e.main != "number" || e.main >= e.ranges.length)
      throw new RangeError("Invalid JSON representation for EditorSelection");
    return new C(e.ranges.map((n) => Fr.fromJSON(n)), e.main);
  }
  static single(e, n = e) {
    return new C([C.range(e, n)], 0);
  }
  static create(e, n = 0) {
    if (e.length == 0)
      throw new RangeError("A selection needs at least one range");
    for (let r = 0, i = 0; i < e.length; i++) {
      let s = e[i];
      if (s.empty ? s.from <= r : s.from < r)
        return C.normalized(e.slice(), n);
      r = s.to;
    }
    return new C(e, n);
  }
  static cursor(e, n = 0, r, i) {
    return Fr.create(e, e, (n == 0 ? 0 : n < 0 ? 4 : 8) | (r == null ? 3 : Math.min(2, r)) | (i != null ? i : 33554431) << 5);
  }
  static range(e, n, r, i) {
    let s = (r != null ? r : 33554431) << 5 | (i == null ? 3 : Math.min(2, i));
    return n < e ? Fr.create(n, e, 24 | s) : Fr.create(e, n, (n > e ? 4 : 0) | s);
  }
  static normalized(e, n = 0) {
    let r = e[n];
    e.sort((i, s) => i.from - s.from), n = e.indexOf(r);
    for (let i = 1; i < e.length; i++) {
      let s = e[i], o = e[i - 1];
      if (s.empty ? s.from <= o.to : s.from < o.to) {
        let l = o.from, c = Math.max(s.to, o.to);
        i <= n && n--, e.splice(--i, 2, s.anchor > s.head ? C.range(c, l) : C.range(l, c));
      }
    }
    return new C(e, n);
  }
}
function J1(t, e) {
  for (let n of t.ranges)
    if (n.to > e)
      throw new RangeError("Selection points outside of document");
}
let md = 0;
class N {
  constructor(e, n, r, i, s) {
    this.combine = e, this.compareInput = n, this.compare = r, this.isStatic = i, this.id = md++, this.default = e([]), this.extensions = typeof s == "function" ? s(this) : s;
  }
  static define(e = {}) {
    return new N(e.combine || ((n) => n), e.compareInput || ((n, r) => n === r), e.compare || (e.combine ? (n, r) => n === r : yd), !!e.static, e.enables);
  }
  of(e) {
    return new Fl([], this, 0, e);
  }
  compute(e, n) {
    if (this.isStatic)
      throw new Error("Can't compute a static facet");
    return new Fl(e, this, 1, n);
  }
  computeN(e, n) {
    if (this.isStatic)
      throw new Error("Can't compute a static facet");
    return new Fl(e, this, 2, n);
  }
  from(e, n) {
    return n || (n = (r) => r), this.compute([e], (r) => n(r.field(e)));
  }
}
function yd(t, e) {
  return t == e || t.length == e.length && t.every((n, r) => n === e[r]);
}
class Fl {
  constructor(e, n, r, i) {
    this.dependencies = e, this.facet = n, this.type = r, this.value = i, this.id = md++;
  }
  dynamicSlot(e) {
    var n;
    let r = this.value, i = this.facet.compareInput, s = this.id, o = e[s] >> 1, l = this.type == 2, c = !1, a = !1, h = [];
    for (let u of this.dependencies)
      u == "doc" ? c = !0 : u == "selection" ? a = !0 : (((n = e[u.id]) !== null && n !== void 0 ? n : 1) & 1) == 0 && h.push(e[u.id]);
    return {
      create(u) {
        return u.values[o] = r(u), 1;
      },
      update(u, f) {
        if (c && f.docChanged || a && (f.docChanged || f.selection) || Lu(u, h)) {
          let d = r(u);
          if (l ? !Cm(d, u.values[o], i) : !i(d, u.values[o]))
            return u.values[o] = d, 1;
        }
        return 0;
      },
      reconfigure: (u, f) => {
        let d, p = f.config.address[s];
        if (p != null) {
          let g = hc(f, p);
          if (this.dependencies.every((m) => m instanceof N ? f.facet(m) === u.facet(m) : m instanceof Ye ? f.field(m, !1) == u.field(m, !1) : !0) || (l ? Cm(d = r(u), g, i) : i(d = r(u), g)))
            return u.values[o] = g, 0;
        } else
          d = r(u);
        return u.values[o] = d, 1;
      }
    };
  }
}
function Cm(t, e, n) {
  if (t.length != e.length)
    return !1;
  for (let r = 0; r < t.length; r++)
    if (!n(t[r], e[r]))
      return !1;
  return !0;
}
function Lu(t, e) {
  let n = !1;
  for (let r of e)
    Hs(t, r) & 1 && (n = !0);
  return n;
}
function oae(t, e, n) {
  let r = n.map((c) => t[c.id]), i = n.map((c) => c.type), s = r.filter((c) => !(c & 1)), o = t[e.id] >> 1;
  function l(c) {
    let a = [];
    for (let h = 0; h < r.length; h++) {
      let u = hc(c, r[h]);
      if (i[h] == 2)
        for (let f of u)
          a.push(f);
      else
        a.push(u);
    }
    return e.combine(a);
  }
  return {
    create(c) {
      for (let a of r)
        Hs(c, a);
      return c.values[o] = l(c), 1;
    },
    update(c, a) {
      if (!Lu(c, s))
        return 0;
      let h = l(c);
      return e.compare(h, c.values[o]) ? 0 : (c.values[o] = h, 1);
    },
    reconfigure(c, a) {
      let h = Lu(c, r), u = a.config.facets[e.id], f = a.facet(e);
      if (u && !h && yd(n, u))
        return c.values[o] = f, 0;
      let d = l(c);
      return e.compare(d, f) ? (c.values[o] = f, 0) : (c.values[o] = d, 1);
    }
  };
}
const Am = /* @__PURE__ */ N.define({ static: !0 });
class Ye {
  constructor(e, n, r, i, s) {
    this.id = e, this.createF = n, this.updateF = r, this.compareF = i, this.spec = s, this.provides = void 0;
  }
  static define(e) {
    let n = new Ye(md++, e.create, e.update, e.compare || ((r, i) => r === i), e);
    return e.provide && (n.provides = e.provide(n)), n;
  }
  create(e) {
    let n = e.facet(Am).find((r) => r.field == this);
    return ((n == null ? void 0 : n.create) || this.createF)(e);
  }
  slot(e) {
    let n = e[this.id] >> 1;
    return {
      create: (r) => (r.values[n] = this.create(r), 1),
      update: (r, i) => {
        let s = r.values[n], o = this.updateF(s, i);
        return this.compareF(s, o) ? 0 : (r.values[n] = o, 1);
      },
      reconfigure: (r, i) => i.config.address[this.id] != null ? (r.values[n] = i.field(this), 0) : (r.values[n] = this.create(r), 1)
    };
  }
  init(e) {
    return [this, Am.of({ field: this, create: e })];
  }
  get extension() {
    return this;
  }
}
const Rr = { lowest: 4, low: 3, default: 2, high: 1, highest: 0 };
function _s(t) {
  return (e) => new Z1(e, t);
}
const fs = {
  highest: /* @__PURE__ */ _s(Rr.highest),
  high: /* @__PURE__ */ _s(Rr.high),
  default: /* @__PURE__ */ _s(Rr.default),
  low: /* @__PURE__ */ _s(Rr.low),
  lowest: /* @__PURE__ */ _s(Rr.lowest)
};
class Z1 {
  constructor(e, n) {
    this.inner = e, this.prec = n;
  }
}
class ha {
  of(e) {
    return new Ru(this, e);
  }
  reconfigure(e) {
    return ha.reconfigure.of({ compartment: this, extension: e });
  }
  get(e) {
    return e.config.compartments.get(this);
  }
}
class Ru {
  constructor(e, n) {
    this.compartment = e, this.inner = n;
  }
}
class ac {
  constructor(e, n, r, i, s, o) {
    for (this.base = e, this.compartments = n, this.dynamicSlots = r, this.address = i, this.staticValues = s, this.facets = o, this.statusTemplate = []; this.statusTemplate.length < r.length; )
      this.statusTemplate.push(0);
  }
  staticFacet(e) {
    let n = this.address[e.id];
    return n == null ? e.default : this.staticValues[n >> 1];
  }
  static resolve(e, n, r) {
    let i = [], s = /* @__PURE__ */ Object.create(null), o = /* @__PURE__ */ new Map();
    for (let f of lae(e, n, o))
      f instanceof Ye ? i.push(f) : (s[f.facet.id] || (s[f.facet.id] = [])).push(f);
    let l = /* @__PURE__ */ Object.create(null), c = [], a = [];
    for (let f of i)
      l[f.id] = a.length << 1, a.push((d) => f.slot(d));
    let h = r == null ? void 0 : r.config.facets;
    for (let f in s) {
      let d = s[f], p = d[0].facet, g = h && h[f] || [];
      if (d.every((m) => m.type == 0))
        if (l[p.id] = c.length << 1 | 1, yd(g, d))
          c.push(r.facet(p));
        else {
          let m = p.combine(d.map((y) => y.value));
          c.push(r && p.compare(m, r.facet(p)) ? r.facet(p) : m);
        }
      else {
        for (let m of d)
          m.type == 0 ? (l[m.id] = c.length << 1 | 1, c.push(m.value)) : (l[m.id] = a.length << 1, a.push((y) => m.dynamicSlot(y)));
        l[p.id] = a.length << 1, a.push((m) => oae(m, p, d));
      }
    }
    let u = a.map((f) => f(l));
    return new ac(e, o, u, l, c, s);
  }
}
function lae(t, e, n) {
  let r = [[], [], [], [], []], i = /* @__PURE__ */ new Map();
  function s(o, l) {
    let c = i.get(o);
    if (c != null) {
      if (c <= l)
        return;
      let a = r[c].indexOf(o);
      a > -1 && r[c].splice(a, 1), o instanceof Ru && n.delete(o.compartment);
    }
    if (i.set(o, l), Array.isArray(o))
      for (let a of o)
        s(a, l);
    else if (o instanceof Ru) {
      if (n.has(o.compartment))
        throw new RangeError("Duplicate use of compartment in extensions");
      let a = e.get(o.compartment) || o.inner;
      n.set(o.compartment, a), s(a, l);
    } else if (o instanceof Z1)
      s(o.inner, o.prec);
    else if (o instanceof Ye)
      r[l].push(o), o.provides && s(o.provides, l);
    else if (o instanceof Fl)
      r[l].push(o), o.facet.extensions && s(o.facet.extensions, Rr.default);
    else {
      let a = o.extension;
      if (!a)
        throw new Error(`Unrecognized extension value in extension set (${o}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);
      s(a, l);
    }
  }
  return s(t, Rr.default), r.reduce((o, l) => o.concat(l));
}
function Hs(t, e) {
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
function hc(t, e) {
  return e & 1 ? t.config.staticValues[e >> 1] : t.values[e >> 1];
}
const X1 = /* @__PURE__ */ N.define(), Q1 = /* @__PURE__ */ N.define({
  combine: (t) => t.some((e) => e),
  static: !0
}), ew = /* @__PURE__ */ N.define({
  combine: (t) => t.length ? t[0] : void 0,
  static: !0
}), tw = /* @__PURE__ */ N.define(), nw = /* @__PURE__ */ N.define(), rw = /* @__PURE__ */ N.define(), iw = /* @__PURE__ */ N.define({
  combine: (t) => t.length ? t[0] : !1
});
class Xt {
  constructor(e, n) {
    this.type = e, this.value = n;
  }
  static define() {
    return new cae();
  }
}
class cae {
  of(e) {
    return new Xt(this, e);
  }
}
class aae {
  constructor(e) {
    this.map = e;
  }
  of(e) {
    return new K(this, e);
  }
}
class K {
  constructor(e, n) {
    this.type = e, this.value = n;
  }
  map(e) {
    let n = this.type.map(this.value, e);
    return n === void 0 ? void 0 : n == this.value ? this : new K(this.type, n);
  }
  is(e) {
    return this.type == e;
  }
  static define(e = {}) {
    return new aae(e.map || ((n) => n));
  }
  static mapEffects(e, n) {
    if (!e.length)
      return e;
    let r = [];
    for (let i of e) {
      let s = i.map(n);
      s && r.push(s);
    }
    return r;
  }
}
K.reconfigure = /* @__PURE__ */ K.define();
K.appendConfig = /* @__PURE__ */ K.define();
class Ne {
  constructor(e, n, r, i, s, o) {
    this.startState = e, this.changes = n, this.selection = r, this.effects = i, this.annotations = s, this.scrollIntoView = o, this._doc = null, this._state = null, r && J1(r, n.newLength), s.some((l) => l.type == Ne.time) || (this.annotations = s.concat(Ne.time.of(Date.now())));
  }
  static create(e, n, r, i, s, o) {
    return new Ne(e, n, r, i, s, o);
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
    let n = this.annotation(Ne.userEvent);
    return !!(n && (n == e || n.length > e.length && n.slice(0, e.length) == e && n[e.length] == "."));
  }
}
Ne.time = /* @__PURE__ */ Xt.define();
Ne.userEvent = /* @__PURE__ */ Xt.define();
Ne.addToHistory = /* @__PURE__ */ Xt.define();
Ne.remote = /* @__PURE__ */ Xt.define();
function hae(t, e) {
  let n = [];
  for (let r = 0, i = 0; ; ) {
    let s, o;
    if (r < t.length && (i == e.length || e[i] >= t[r]))
      s = t[r++], o = t[r++];
    else if (i < e.length)
      s = e[i++], o = e[i++];
    else
      return n;
    !n.length || n[n.length - 1] < s ? n.push(s, o) : n[n.length - 1] < o && (n[n.length - 1] = o);
  }
}
function sw(t, e, n) {
  var r;
  let i, s, o;
  return n ? (i = e.changes, s = Re.empty(e.changes.length), o = t.changes.compose(e.changes)) : (i = e.changes.map(t.changes), s = t.changes.mapDesc(e.changes, !0), o = t.changes.compose(i)), {
    changes: o,
    selection: e.selection ? e.selection.map(s) : (r = t.selection) === null || r === void 0 ? void 0 : r.map(i),
    effects: K.mapEffects(t.effects, i).concat(K.mapEffects(e.effects, s)),
    annotations: t.annotations.length ? t.annotations.concat(e.annotations) : e.annotations,
    scrollIntoView: t.scrollIntoView || e.scrollIntoView
  };
}
function Iu(t, e, n) {
  let r = e.selection, i = Li(e.annotations);
  return e.userEvent && (i = i.concat(Ne.userEvent.of(e.userEvent))), {
    changes: e.changes instanceof Re ? e.changes : Re.of(e.changes || [], n, t.facet(ew)),
    selection: r && (r instanceof C ? r : C.single(r.anchor, r.head)),
    effects: Li(e.effects),
    annotations: i,
    scrollIntoView: !!e.scrollIntoView
  };
}
function ow(t, e, n) {
  let r = Iu(t, e.length ? e[0] : {}, t.doc.length);
  e.length && e[0].filter === !1 && (n = !1);
  for (let s = 1; s < e.length; s++) {
    e[s].filter === !1 && (n = !1);
    let o = !!e[s].sequential;
    r = sw(r, Iu(t, e[s], o ? r.changes.newLength : t.doc.length), o);
  }
  let i = Ne.create(t, r.changes, r.selection, r.effects, r.annotations, r.scrollIntoView);
  return fae(n ? uae(i) : i);
}
function uae(t) {
  let e = t.startState, n = !0;
  for (let i of e.facet(tw)) {
    let s = i(t);
    if (s === !1) {
      n = !1;
      break;
    }
    Array.isArray(s) && (n = n === !0 ? s : hae(n, s));
  }
  if (n !== !0) {
    let i, s;
    if (n === !1)
      s = t.changes.invertedDesc, i = Re.empty(e.doc.length);
    else {
      let o = t.changes.filter(n);
      i = o.changes, s = o.filtered.mapDesc(o.changes).invertedDesc;
    }
    t = Ne.create(e, i, t.selection && t.selection.map(s), K.mapEffects(t.effects, s), t.annotations, t.scrollIntoView);
  }
  let r = e.facet(nw);
  for (let i = r.length - 1; i >= 0; i--) {
    let s = r[i](t);
    s instanceof Ne ? t = s : Array.isArray(s) && s.length == 1 && s[0] instanceof Ne ? t = s[0] : t = ow(e, Li(s), !1);
  }
  return t;
}
function fae(t) {
  let e = t.startState, n = e.facet(rw), r = t;
  for (let i = n.length - 1; i >= 0; i--) {
    let s = n[i](t);
    s && Object.keys(s).length && (r = sw(r, Iu(e, s, t.changes.newLength), !0));
  }
  return r == t ? t : Ne.create(e, t.changes, t.selection, r.effects, r.annotations, r.scrollIntoView);
}
const dae = [];
function Li(t) {
  return t == null ? dae : Array.isArray(t) ? t : [t];
}
var xe = /* @__PURE__ */ function(t) {
  return t[t.Word = 0] = "Word", t[t.Space = 1] = "Space", t[t.Other = 2] = "Other", t;
}(xe || (xe = {}));
const pae = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
let Nu;
try {
  Nu = /* @__PURE__ */ new RegExp("[\\p{Alphabetic}\\p{Number}_]", "u");
} catch {
}
function gae(t) {
  if (Nu)
    return Nu.test(t);
  for (let e = 0; e < t.length; e++) {
    let n = t[e];
    if (/\w/.test(n) || n > "\x80" && (n.toUpperCase() != n.toLowerCase() || pae.test(n)))
      return !0;
  }
  return !1;
}
function mae(t) {
  return (e) => {
    if (!/\S/.test(e))
      return xe.Space;
    if (gae(e))
      return xe.Word;
    for (let n = 0; n < t.length; n++)
      if (e.indexOf(t[n]) > -1)
        return xe.Word;
    return xe.Other;
  };
}
class X {
  constructor(e, n, r, i, s, o) {
    this.config = e, this.doc = n, this.selection = r, this.values = i, this.status = e.statusTemplate.slice(), this.computeSlot = s, o && (o._state = this);
    for (let l = 0; l < this.config.dynamicSlots.length; l++)
      Hs(this, l << 1);
    this.computeSlot = null;
  }
  field(e, n = !0) {
    let r = this.config.address[e.id];
    if (r == null) {
      if (n)
        throw new RangeError("Field is not present in this state");
      return;
    }
    return Hs(this, r), hc(this, r);
  }
  update(...e) {
    return ow(this, e, !0);
  }
  applyTransaction(e) {
    let n = this.config, { base: r, compartments: i } = n;
    for (let o of e.effects)
      o.is(ha.reconfigure) ? (n && (i = /* @__PURE__ */ new Map(), n.compartments.forEach((l, c) => i.set(c, l)), n = null), i.set(o.value.compartment, o.value.extension)) : o.is(K.reconfigure) ? (n = null, r = o.value) : o.is(K.appendConfig) && (n = null, r = Li(r).concat(o.value));
    let s;
    n ? s = e.startState.values.slice() : (n = ac.resolve(r, i, this), s = new X(n, this.doc, this.selection, n.dynamicSlots.map(() => null), (l, c) => c.reconfigure(l, this), null).values), new X(n, e.newDoc, e.newSelection, s, (o, l) => l.update(o, e), e);
  }
  replaceSelection(e) {
    return typeof e == "string" && (e = this.toText(e)), this.changeByRange((n) => ({
      changes: { from: n.from, to: n.to, insert: e },
      range: C.cursor(n.from + e.length)
    }));
  }
  changeByRange(e) {
    let n = this.selection, r = e(n.ranges[0]), i = this.changes(r.changes), s = [r.range], o = Li(r.effects);
    for (let l = 1; l < n.ranges.length; l++) {
      let c = e(n.ranges[l]), a = this.changes(c.changes), h = a.map(i);
      for (let f = 0; f < l; f++)
        s[f] = s[f].map(h);
      let u = i.mapDesc(a, !0);
      s.push(c.range.map(u)), i = i.compose(h), o = K.mapEffects(o, h).concat(K.mapEffects(Li(c.effects), u));
    }
    return {
      changes: i,
      selection: C.create(s, n.mainIndex),
      effects: o
    };
  }
  changes(e = []) {
    return e instanceof Re ? e : Re.of(e, this.doc.length, this.facet(X.lineSeparator));
  }
  toText(e) {
    return ee.of(e.split(this.facet(X.lineSeparator) || Tu));
  }
  sliceDoc(e = 0, n = this.doc.length) {
    return this.doc.sliceString(e, n, this.lineBreak);
  }
  facet(e) {
    let n = this.config.address[e.id];
    return n == null ? e.default : (Hs(this, n), hc(this, n));
  }
  toJSON(e) {
    let n = {
      doc: this.sliceDoc(),
      selection: this.selection.toJSON()
    };
    if (e)
      for (let r in e) {
        let i = e[r];
        i instanceof Ye && this.config.address[i.id] != null && (n[r] = i.spec.toJSON(this.field(e[r]), this));
      }
    return n;
  }
  static fromJSON(e, n = {}, r) {
    if (!e || typeof e.doc != "string")
      throw new RangeError("Invalid JSON representation for EditorState");
    let i = [];
    if (r) {
      for (let s in r)
        if (Object.prototype.hasOwnProperty.call(e, s)) {
          let o = r[s], l = e[s];
          i.push(o.init((c) => o.spec.fromJSON(l, c)));
        }
    }
    return X.create({
      doc: e.doc,
      selection: C.fromJSON(e.selection),
      extensions: n.extensions ? i.concat([n.extensions]) : i
    });
  }
  static create(e = {}) {
    let n = ac.resolve(e.extensions || [], /* @__PURE__ */ new Map()), r = e.doc instanceof ee ? e.doc : ee.of((e.doc || "").split(n.staticFacet(X.lineSeparator) || Tu)), i = e.selection ? e.selection instanceof C ? e.selection : C.single(e.selection.anchor, e.selection.head) : C.single(0);
    return J1(i, r.length), n.staticFacet(Q1) || (i = i.asSingle()), new X(n, r, i, n.dynamicSlots.map(() => null), (s, o) => o.create(s), null);
  }
  get tabSize() {
    return this.facet(X.tabSize);
  }
  get lineBreak() {
    return this.facet(X.lineSeparator) || `
`;
  }
  get readOnly() {
    return this.facet(iw);
  }
  phrase(e, ...n) {
    for (let r of this.facet(X.phrases))
      if (Object.prototype.hasOwnProperty.call(r, e)) {
        e = r[e];
        break;
      }
    return n.length && (e = e.replace(/\$(\$|\d*)/g, (r, i) => {
      if (i == "$")
        return "$";
      let s = +(i || 1);
      return !s || s > n.length ? r : n[s - 1];
    })), e;
  }
  languageDataAt(e, n, r = -1) {
    let i = [];
    for (let s of this.facet(X1))
      for (let o of s(this, n, r))
        Object.prototype.hasOwnProperty.call(o, e) && i.push(o[e]);
    return i;
  }
  charCategorizer(e) {
    return mae(this.languageDataAt("wordChars", e).join(""));
  }
  wordAt(e) {
    let { text: n, from: r, length: i } = this.doc.lineAt(e), s = this.charCategorizer(e), o = e - r, l = e - r;
    for (; o > 0; ) {
      let c = Qe(n, o, !1);
      if (s(n.slice(c, o)) != xe.Word)
        break;
      o = c;
    }
    for (; l < i; ) {
      let c = Qe(n, l);
      if (s(n.slice(l, c)) != xe.Word)
        break;
      l = c;
    }
    return o == l ? null : C.range(o + r, l + r);
  }
}
X.allowMultipleSelections = Q1;
X.tabSize = /* @__PURE__ */ N.define({
  combine: (t) => t.length ? t[0] : 4
});
X.lineSeparator = ew;
X.readOnly = iw;
X.phrases = /* @__PURE__ */ N.define({
  compare(t, e) {
    let n = Object.keys(t), r = Object.keys(e);
    return n.length == r.length && n.every((i) => t[i] == e[i]);
  }
});
X.languageData = X1;
X.changeFilter = tw;
X.transactionFilter = nw;
X.transactionExtender = rw;
ha.reconfigure = /* @__PURE__ */ K.define();
function Sn(t, e, n = {}) {
  let r = {};
  for (let i of t)
    for (let s of Object.keys(i)) {
      let o = i[s], l = r[s];
      if (l === void 0)
        r[s] = o;
      else if (!(l === o || o === void 0))
        if (Object.hasOwnProperty.call(n, s))
          r[s] = n[s](l, o);
        else
          throw new Error("Config merge conflict for field " + s);
    }
  for (let i in e)
    r[i] === void 0 && (r[i] = e[i]);
  return r;
}
class Zr {
  eq(e) {
    return this == e;
  }
  range(e, n = e) {
    return no.create(e, n, this);
  }
}
Zr.prototype.startSide = Zr.prototype.endSide = 0;
Zr.prototype.point = !1;
Zr.prototype.mapMode = ct.TrackDel;
class no {
  constructor(e, n, r) {
    this.from = e, this.to = n, this.value = r;
  }
  static create(e, n, r) {
    return new no(e, n, r);
  }
}
function Pu(t, e) {
  return t.from - e.from || t.value.startSide - e.value.startSide;
}
class bd {
  constructor(e, n, r, i) {
    this.from = e, this.to = n, this.value = r, this.maxPoint = i;
  }
  get length() {
    return this.to[this.to.length - 1];
  }
  findIndex(e, n, r, i = 0) {
    let s = r ? this.to : this.from;
    for (let o = i, l = s.length; ; ) {
      if (o == l)
        return o;
      let c = o + l >> 1, a = s[c] - e || (r ? this.value[c].endSide : this.value[c].startSide) - n;
      if (c == o)
        return a >= 0 ? o : l;
      a >= 0 ? l = c : o = c + 1;
    }
  }
  between(e, n, r, i) {
    for (let s = this.findIndex(n, -1e9, !0), o = this.findIndex(r, 1e9, !1, s); s < o; s++)
      if (i(this.from[s] + e, this.to[s] + e, this.value[s]) === !1)
        return !1;
  }
  map(e, n) {
    let r = [], i = [], s = [], o = -1, l = -1;
    for (let c = 0; c < this.value.length; c++) {
      let a = this.value[c], h = this.from[c] + e, u = this.to[c] + e, f, d;
      if (h == u) {
        let p = n.mapPos(h, a.startSide, a.mapMode);
        if (p == null || (f = d = p, a.startSide != a.endSide && (d = n.mapPos(h, a.endSide), d < f)))
          continue;
      } else if (f = n.mapPos(h, a.startSide), d = n.mapPos(u, a.endSide), f > d || f == d && a.startSide > 0 && a.endSide <= 0)
        continue;
      (d - f || a.endSide - a.startSide) < 0 || (o < 0 && (o = f), a.point && (l = Math.max(l, d - f)), r.push(a), i.push(f - o), s.push(d - o));
    }
    return { mapped: r.length ? new bd(i, s, r, l) : null, pos: o };
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
    let { add: n = [], sort: r = !1, filterFrom: i = 0, filterTo: s = this.length } = e, o = e.filter;
    if (n.length == 0 && !o)
      return this;
    if (r && (n = n.slice().sort(Pu)), this.isEmpty)
      return n.length ? te.of(n) : this;
    let l = new lw(this, null, -1).goto(0), c = 0, a = [], h = new dr();
    for (; l.value || c < n.length; )
      if (c < n.length && (l.from - n[c].from || l.startSide - n[c].value.startSide) >= 0) {
        let u = n[c++];
        h.addInner(u.from, u.to, u.value) || a.push(u);
      } else
        l.rangeIndex == 1 && l.chunkIndex < this.chunk.length && (c == n.length || this.chunkEnd(l.chunkIndex) < n[c].from) && (!o || i > this.chunkEnd(l.chunkIndex) || s < this.chunkPos[l.chunkIndex]) && h.addChunk(this.chunkPos[l.chunkIndex], this.chunk[l.chunkIndex]) ? l.nextChunk() : ((!o || i > l.to || s < l.from || o(l.from, l.to, l.value)) && (h.addInner(l.from, l.to, l.value) || a.push(no.create(l.from, l.to, l.value))), l.next());
    return h.finishInner(this.nextLayer.isEmpty && !a.length ? te.empty : this.nextLayer.update({ add: a, filter: o, filterFrom: i, filterTo: s }));
  }
  map(e) {
    if (e.empty || this.isEmpty)
      return this;
    let n = [], r = [], i = -1;
    for (let o = 0; o < this.chunk.length; o++) {
      let l = this.chunkPos[o], c = this.chunk[o], a = e.touchesRange(l, l + c.length);
      if (a === !1)
        i = Math.max(i, c.maxPoint), n.push(c), r.push(e.mapPos(l));
      else if (a === !0) {
        let { mapped: h, pos: u } = c.map(l, e);
        h && (i = Math.max(i, h.maxPoint), n.push(h), r.push(u));
      }
    }
    let s = this.nextLayer.map(e);
    return n.length == 0 ? s : new te(r, n, s || te.empty, i);
  }
  between(e, n, r) {
    if (!this.isEmpty) {
      for (let i = 0; i < this.chunk.length; i++) {
        let s = this.chunkPos[i], o = this.chunk[i];
        if (n >= s && e <= s + o.length && o.between(s, e - s, n - s, r) === !1)
          return;
      }
      this.nextLayer.between(e, n, r);
    }
  }
  iter(e = 0) {
    return ro.from([this]).goto(e);
  }
  get isEmpty() {
    return this.nextLayer == this;
  }
  static iter(e, n = 0) {
    return ro.from(e).goto(n);
  }
  static compare(e, n, r, i, s = -1) {
    let o = e.filter((u) => u.maxPoint > 0 || !u.isEmpty && u.maxPoint >= s), l = n.filter((u) => u.maxPoint > 0 || !u.isEmpty && u.maxPoint >= s), c = Em(o, l, r), a = new Ss(o, c, s), h = new Ss(l, c, s);
    r.iterGaps((u, f, d) => Dm(a, u, h, f, d, i)), r.empty && r.length == 0 && Dm(a, 0, h, 0, 0, i);
  }
  static eq(e, n, r = 0, i) {
    i == null && (i = 1e9 - 1);
    let s = e.filter((h) => !h.isEmpty && n.indexOf(h) < 0), o = n.filter((h) => !h.isEmpty && e.indexOf(h) < 0);
    if (s.length != o.length)
      return !1;
    if (!s.length)
      return !0;
    let l = Em(s, o), c = new Ss(s, l, 0).goto(r), a = new Ss(o, l, 0).goto(r);
    for (; ; ) {
      if (c.to != a.to || !Fu(c.active, a.active) || c.point && (!a.point || !c.point.eq(a.point)))
        return !1;
      if (c.to > i)
        return !0;
      c.next(), a.next();
    }
  }
  static spans(e, n, r, i, s = -1) {
    let o = new Ss(e, null, s).goto(n), l = n, c = o.openStart;
    for (; ; ) {
      let a = Math.min(o.to, r);
      if (o.point) {
        let h = o.activeForPoint(o.to), u = o.pointFrom < n ? h.length + 1 : Math.min(h.length, c);
        i.point(l, a, o.point, h, u, o.pointRank), c = Math.min(o.openEnd(a), h.length);
      } else
        a > l && (i.span(l, a, o.active, c), c = o.openEnd(a));
      if (o.to > r)
        return c + (o.point && o.to > r ? 1 : 0);
      l = o.to, o.next();
    }
  }
  static of(e, n = !1) {
    let r = new dr();
    for (let i of e instanceof no ? [e] : n ? yae(e) : e)
      r.add(i.from, i.to, i.value);
    return r.finish();
  }
}
te.empty = /* @__PURE__ */ new te([], [], null, -1);
function yae(t) {
  if (t.length > 1)
    for (let e = t[0], n = 1; n < t.length; n++) {
      let r = t[n];
      if (Pu(e, r) > 0)
        return t.slice().sort(Pu);
      e = r;
    }
  return t;
}
te.empty.nextLayer = te.empty;
class dr {
  finishChunk(e) {
    this.chunks.push(new bd(this.from, this.to, this.value, this.maxPoint)), this.chunkPos.push(this.chunkStart), this.chunkStart = -1, this.setMaxPoint = Math.max(this.setMaxPoint, this.maxPoint), this.maxPoint = -1, e && (this.from = [], this.to = [], this.value = []);
  }
  constructor() {
    this.chunks = [], this.chunkPos = [], this.chunkStart = -1, this.last = null, this.lastFrom = -1e9, this.lastTo = -1e9, this.from = [], this.to = [], this.value = [], this.maxPoint = -1, this.setMaxPoint = -1, this.nextLayer = null;
  }
  add(e, n, r) {
    this.addInner(e, n, r) || (this.nextLayer || (this.nextLayer = new dr())).add(e, n, r);
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
function Em(t, e, n) {
  let r = /* @__PURE__ */ new Map();
  for (let s of t)
    for (let o = 0; o < s.chunk.length; o++)
      s.chunk[o].maxPoint <= 0 && r.set(s.chunk[o], s.chunkPos[o]);
  let i = /* @__PURE__ */ new Set();
  for (let s of e)
    for (let o = 0; o < s.chunk.length; o++) {
      let l = r.get(s.chunk[o]);
      l != null && (n ? n.mapPos(l) : l) == s.chunkPos[o] && !(n != null && n.touchesRange(l, l + s.chunk[o].length)) && i.add(s.chunk[o]);
    }
  return i;
}
class lw {
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
class ro {
  constructor(e) {
    this.heap = e;
  }
  static from(e, n = null, r = -1) {
    let i = [];
    for (let s = 0; s < e.length; s++)
      for (let o = e[s]; !o.isEmpty; o = o.nextLayer)
        o.maxPoint >= r && i.push(new lw(o, n, r, s));
    return i.length == 1 ? i[0] : new ro(i);
  }
  get startSide() {
    return this.value ? this.value.startSide : 0;
  }
  goto(e, n = -1e9) {
    for (let r of this.heap)
      r.goto(e, n);
    for (let r = this.heap.length >> 1; r >= 0; r--)
      vh(this.heap, r);
    return this.next(), this;
  }
  forward(e, n) {
    for (let r of this.heap)
      r.forward(e, n);
    for (let r = this.heap.length >> 1; r >= 0; r--)
      vh(this.heap, r);
    (this.to - e || this.value.endSide - n) < 0 && this.next();
  }
  next() {
    if (this.heap.length == 0)
      this.from = this.to = 1e9, this.value = null, this.rank = -1;
    else {
      let e = this.heap[0];
      this.from = e.from, this.to = e.to, this.value = e.value, this.rank = e.rank, e.value && e.next(), vh(this.heap, 0);
    }
  }
}
function vh(t, e) {
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
class Ss {
  constructor(e, n, r) {
    this.minPoint = r, this.active = [], this.activeTo = [], this.activeRank = [], this.minActive = -1, this.point = null, this.pointFrom = 0, this.pointRank = 0, this.to = -1e9, this.endSide = 0, this.openStart = -1, this.cursor = ro.from(e, n, r);
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
    tl(this.active, e), tl(this.activeTo, e), tl(this.activeRank, e), this.minActive = Tm(this.active, this.activeTo);
  }
  addActive(e) {
    let n = 0, { value: r, to: i, rank: s } = this.cursor;
    for (; n < this.activeRank.length && this.activeRank[n] <= s; )
      n++;
    nl(this.active, n, r), nl(this.activeTo, n, i), nl(this.activeRank, n, s), e && nl(e, n, this.cursor.from), this.minActive = Tm(this.active, this.activeTo);
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
        this.removeActive(i), r && tl(r, i);
      } else if (this.cursor.value)
        if (this.cursor.from > e) {
          this.to = this.cursor.from, this.endSide = this.cursor.startSide;
          break;
        } else {
          let s = this.cursor.value;
          if (!s.point)
            this.addActive(r), this.cursor.next();
          else if (n && this.cursor.to == this.to && this.cursor.from < this.cursor.to)
            this.cursor.next();
          else {
            this.point = s, this.pointFrom = this.cursor.from, this.pointRank = this.cursor.rank, this.to = this.cursor.to, this.endSide = s.endSide, this.cursor.next(), this.forward(this.to, this.endSide);
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
function Dm(t, e, n, r, i, s) {
  t.goto(e), n.goto(r);
  let o = r + i, l = r, c = r - e;
  for (; ; ) {
    let a = t.to + c - n.to || t.endSide - n.endSide, h = a < 0 ? t.to + c : n.to, u = Math.min(h, o);
    if (t.point || n.point ? t.point && n.point && (t.point == n.point || t.point.eq(n.point)) && Fu(t.activeForPoint(t.to), n.activeForPoint(n.to)) || s.comparePoint(l, u, t.point, n.point) : u > l && !Fu(t.active, n.active) && s.compareRange(l, u, t.active, n.active), h > o)
      break;
    l = h, a <= 0 && t.next(), a >= 0 && n.next();
  }
}
function Fu(t, e) {
  if (t.length != e.length)
    return !1;
  for (let n = 0; n < t.length; n++)
    if (t[n] != e[n] && !t[n].eq(e[n]))
      return !1;
  return !0;
}
function tl(t, e) {
  for (let n = e, r = t.length - 1; n < r; n++)
    t[n] = t[n + 1];
  t.pop();
}
function nl(t, e, n) {
  for (let r = t.length - 1; r >= e; r--)
    t[r + 1] = t[r];
  t[e] = n;
}
function Tm(t, e) {
  let n = -1, r = 1e9;
  for (let i = 0; i < e.length; i++)
    (e[i] - r || t[i].endSide - t[n].endSide) < 0 && (n = i, r = e[i]);
  return n;
}
function ds(t, e, n = t.length) {
  let r = 0;
  for (let i = 0; i < n; )
    t.charCodeAt(i) == 9 ? (r += e - r % e, i++) : (r++, i = Qe(t, i));
  return r;
}
function Bu(t, e, n, r) {
  for (let i = 0, s = 0; ; ) {
    if (s >= e)
      return i;
    if (i == t.length)
      break;
    s += t.charCodeAt(i) == 9 ? n - s % n : 1, i = Qe(t, i);
  }
  return r === !0 ? -1 : t.length;
}
const qu = "\u037C", Mm = typeof Symbol > "u" ? "__" + qu : Symbol.for(qu), $u = typeof Symbol > "u" ? "__styleSet" + Math.floor(Math.random() * 1e8) : Symbol("styleSet"), Om = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : {};
class pr {
  constructor(e, n) {
    this.rules = [];
    let { finish: r } = n || {};
    function i(o) {
      return /^@/.test(o) ? [o] : o.split(/,\s*/);
    }
    function s(o, l, c, a) {
      let h = [], u = /^@(\w+)\b/.exec(o[0]), f = u && u[1] == "keyframes";
      if (u && l == null)
        return c.push(o[0] + ";");
      for (let d in l) {
        let p = l[d];
        if (/&/.test(d))
          s(
            d.split(/,\s*/).map((g) => o.map((m) => g.replace(/&/, m))).reduce((g, m) => g.concat(m)),
            p,
            c
          );
        else if (p && typeof p == "object") {
          if (!u)
            throw new RangeError("The value of a property (" + d + ") should be a primitive value.");
          s(i(d), p, h, f);
        } else
          p != null && h.push(d.replace(/_.*/, "").replace(/[A-Z]/g, (g) => "-" + g.toLowerCase()) + ": " + p + ";");
      }
      (h.length || f) && c.push((r && !u && !a ? o.map(r) : o).join(", ") + " {" + h.join(" ") + "}");
    }
    for (let o in e)
      s(i(o), e[o], this.rules);
  }
  getRules() {
    return this.rules.join(`
`);
  }
  static newName() {
    let e = Om[Mm] || 1;
    return Om[Mm] = e + 1, qu + e.toString(36);
  }
  static mount(e, n, r) {
    let i = e[$u], s = r && r.nonce;
    i ? s && i.setNonce(s) : i = new bae(e, s), i.mount(Array.isArray(n) ? n : [n]);
  }
}
let Lm = /* @__PURE__ */ new Map();
class bae {
  constructor(e, n) {
    let r = e.ownerDocument || e, i = r.defaultView;
    if (!e.head && e.adoptedStyleSheets && i.CSSStyleSheet) {
      let s = Lm.get(r);
      if (s)
        return e.adoptedStyleSheets = [s.sheet, ...e.adoptedStyleSheets], e[$u] = s;
      this.sheet = new i.CSSStyleSheet(), e.adoptedStyleSheets = [this.sheet, ...e.adoptedStyleSheets], Lm.set(r, this);
    } else {
      this.styleTag = r.createElement("style"), n && this.styleTag.setAttribute("nonce", n);
      let s = e.head || e;
      s.insertBefore(this.styleTag, s.firstChild);
    }
    this.modules = [], e[$u] = this;
  }
  mount(e) {
    let n = this.sheet, r = 0, i = 0;
    for (let s = 0; s < e.length; s++) {
      let o = e[s], l = this.modules.indexOf(o);
      if (l < i && l > -1 && (this.modules.splice(l, 1), i--, l = -1), l == -1) {
        if (this.modules.splice(i++, 0, o), n)
          for (let c = 0; c < o.rules.length; c++)
            n.insertRule(o.rules[c], r++);
      } else {
        for (; i < l; )
          r += this.modules[i++].rules.length;
        r += o.rules.length, i++;
      }
    }
    if (!n) {
      let s = "";
      for (let o = 0; o < this.modules.length; o++)
        s += this.modules[o].getRules() + `
`;
      this.styleTag.textContent = s;
    }
  }
  setNonce(e) {
    this.styleTag && this.styleTag.getAttribute("nonce") != e && this.styleTag.setAttribute("nonce", e);
  }
}
var gr = {
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
}, io = {
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
}, wae = typeof navigator < "u" && /Mac/.test(navigator.platform), vae = typeof navigator < "u" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);
for (var Ue = 0; Ue < 10; Ue++)
  gr[48 + Ue] = gr[96 + Ue] = String(Ue);
for (var Ue = 1; Ue <= 24; Ue++)
  gr[Ue + 111] = "F" + Ue;
for (var Ue = 65; Ue <= 90; Ue++)
  gr[Ue] = String.fromCharCode(Ue + 32), io[Ue] = String.fromCharCode(Ue);
for (var xh in gr)
  io.hasOwnProperty(xh) || (io[xh] = gr[xh]);
function xae(t) {
  var e = wae && t.metaKey && t.shiftKey && !t.ctrlKey && !t.altKey || vae && t.shiftKey && t.key && t.key.length == 1 || t.key == "Unidentified", n = !e && t.key || (t.shiftKey ? io : gr)[t.keyCode] || t.key || "Unidentified";
  return n == "Esc" && (n = "Escape"), n == "Del" && (n = "Delete"), n == "Left" && (n = "ArrowLeft"), n == "Up" && (n = "ArrowUp"), n == "Right" && (n = "ArrowRight"), n == "Down" && (n = "ArrowDown"), n;
}
function uc(t) {
  let e;
  return t.nodeType == 11 ? e = t.getSelection ? t : t.ownerDocument : e = t, e.getSelection();
}
function Hu(t, e) {
  return e ? t == e || t.contains(e.nodeType != 1 ? e.parentNode : e) : !1;
}
function kae(t) {
  let e = t.activeElement;
  for (; e && e.shadowRoot; )
    e = e.shadowRoot.activeElement;
  return e;
}
function Bl(t, e) {
  if (!e.anchorNode)
    return !1;
  try {
    return Hu(t, e.anchorNode);
  } catch {
    return !1;
  }
}
function so(t) {
  return t.nodeType == 3 ? Xr(t, 0, t.nodeValue.length).getClientRects() : t.nodeType == 1 ? t.getClientRects() : [];
}
function fc(t, e, n, r) {
  return n ? Rm(t, e, n, r, -1) || Rm(t, e, n, r, 1) : !1;
}
function dc(t) {
  for (var e = 0; ; e++)
    if (t = t.previousSibling, !t)
      return e;
}
function Rm(t, e, n, r, i) {
  for (; ; ) {
    if (t == n && e == r)
      return !0;
    if (e == (i < 0 ? 0 : mr(t))) {
      if (t.nodeName == "DIV")
        return !1;
      let s = t.parentNode;
      if (!s || s.nodeType != 1)
        return !1;
      e = dc(t) + (i < 0 ? 0 : 1), t = s;
    } else if (t.nodeType == 1) {
      if (t = t.childNodes[e + (i < 0 ? -1 : 0)], t.nodeType == 1 && t.contentEditable == "false")
        return !1;
      e = i < 0 ? mr(t) : 0;
    } else
      return !1;
  }
}
function mr(t) {
  return t.nodeType == 3 ? t.nodeValue.length : t.childNodes.length;
}
function wd(t, e) {
  let n = e ? t.left : t.right;
  return { left: n, right: n, top: t.top, bottom: t.bottom };
}
function _ae(t) {
  return {
    left: 0,
    right: t.innerWidth,
    top: 0,
    bottom: t.innerHeight
  };
}
function Sae(t, e, n, r, i, s, o, l) {
  let c = t.ownerDocument, a = c.defaultView || window;
  for (let h = t, u = !1; h && !u; )
    if (h.nodeType == 1) {
      let f, d = h == c.body;
      if (d)
        f = _ae(a);
      else {
        if (/^(fixed|sticky)$/.test(getComputedStyle(h).position) && (u = !0), h.scrollHeight <= h.clientHeight && h.scrollWidth <= h.clientWidth) {
          h = h.assignedSlot || h.parentNode;
          continue;
        }
        let m = h.getBoundingClientRect();
        f = {
          left: m.left,
          right: m.left + h.clientWidth,
          top: m.top,
          bottom: m.top + h.clientHeight
        };
      }
      let p = 0, g = 0;
      if (i == "nearest")
        e.top < f.top ? (g = -(f.top - e.top + o), n > 0 && e.bottom > f.bottom + g && (g = e.bottom - f.bottom + g + o)) : e.bottom > f.bottom && (g = e.bottom - f.bottom + o, n < 0 && e.top - g < f.top && (g = -(f.top + g - e.top + o)));
      else {
        let m = e.bottom - e.top, y = f.bottom - f.top;
        g = (i == "center" && m <= y ? e.top + m / 2 - y / 2 : i == "start" || i == "center" && n < 0 ? e.top - o : e.bottom - y + o) - f.top;
      }
      if (r == "nearest" ? e.left < f.left ? (p = -(f.left - e.left + s), n > 0 && e.right > f.right + p && (p = e.right - f.right + p + s)) : e.right > f.right && (p = e.right - f.right + s, n < 0 && e.left < f.left + p && (p = -(f.left + p - e.left + s))) : p = (r == "center" ? e.left + (e.right - e.left) / 2 - (f.right - f.left) / 2 : r == "start" == l ? e.left - s : e.right - (f.right - f.left) + s) - f.left, p || g)
        if (d)
          a.scrollBy(p, g);
        else {
          let m = 0, y = 0;
          if (g) {
            let b = h.scrollTop;
            h.scrollTop += g, y = h.scrollTop - b;
          }
          if (p) {
            let b = h.scrollLeft;
            h.scrollLeft += p, m = h.scrollLeft - b;
          }
          e = {
            left: e.left - m,
            top: e.top - y,
            right: e.right - m,
            bottom: e.bottom - y
          }, m && Math.abs(m - p) < 1 && (r = "nearest"), y && Math.abs(y - g) < 1 && (i = "nearest");
        }
      if (d)
        break;
      h = h.assignedSlot || h.parentNode;
    } else if (h.nodeType == 11)
      h = h.host;
    else
      break;
}
function Cae(t) {
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
class Aae {
  constructor() {
    this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0;
  }
  eq(e) {
    return this.anchorNode == e.anchorNode && this.anchorOffset == e.anchorOffset && this.focusNode == e.focusNode && this.focusOffset == e.focusOffset;
  }
  setRange(e) {
    let { anchorNode: n, focusNode: r } = e;
    this.set(n, Math.min(e.anchorOffset, n ? mr(n) : 0), r, Math.min(e.focusOffset, r ? mr(r) : 0));
  }
  set(e, n, r, i) {
    this.anchorNode = e, this.anchorOffset = n, this.focusNode = r, this.focusOffset = i;
  }
}
let yi = null;
function cw(t) {
  if (t.setActive)
    return t.setActive();
  if (yi)
    return t.focus(yi);
  let e = [];
  for (let n = t; n && (e.push(n, n.scrollTop, n.scrollLeft), n != n.ownerDocument); n = n.parentNode)
    ;
  if (t.focus(yi == null ? {
    get preventScroll() {
      return yi = { preventScroll: !0 }, !0;
    }
  } : void 0), !yi) {
    yi = !1;
    for (let n = 0; n < e.length; ) {
      let r = e[n++], i = e[n++], s = e[n++];
      r.scrollTop != i && (r.scrollTop = i), r.scrollLeft != s && (r.scrollLeft = s);
    }
  }
}
let Im;
function Xr(t, e, n = e) {
  let r = Im || (Im = document.createRange());
  return r.setEnd(t, n), r.setStart(t, e), r;
}
function Ri(t, e, n) {
  let r = { key: e, code: e, keyCode: n, which: n, cancelable: !0 }, i = new KeyboardEvent("keydown", r);
  i.synthetic = !0, t.dispatchEvent(i);
  let s = new KeyboardEvent("keyup", r);
  return s.synthetic = !0, t.dispatchEvent(s), i.defaultPrevented || s.defaultPrevented;
}
function Eae(t) {
  for (; t; ) {
    if (t && (t.nodeType == 9 || t.nodeType == 11 && t.host))
      return t;
    t = t.assignedSlot || t.parentNode;
  }
  return null;
}
function aw(t) {
  for (; t.attributes.length; )
    t.removeAttributeNode(t.attributes[0]);
}
function Dae(t, e) {
  let n = e.focusNode, r = e.focusOffset;
  if (!n || e.anchorNode != n || e.anchorOffset != r)
    return !1;
  for (r = Math.min(r, mr(n)); ; )
    if (r) {
      if (n.nodeType != 1)
        return !1;
      let i = n.childNodes[r - 1];
      i.contentEditable == "false" ? r-- : (n = i, r = mr(n));
    } else {
      if (n == t)
        return !0;
      r = dc(n), n = n.parentNode;
    }
}
function hw(t) {
  return t.scrollTop > Math.max(1, t.scrollHeight - t.clientHeight - 4);
}
class at {
  constructor(e, n, r = !0) {
    this.node = e, this.offset = n, this.precise = r;
  }
  static before(e, n) {
    return new at(e.parentNode, dc(e), n);
  }
  static after(e, n) {
    return new at(e.parentNode, dc(e) + 1, n);
  }
}
const vd = [];
class ge {
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
      let r = this.dom, i = null, s;
      for (let o of this.children) {
        if (o.flags & 7) {
          if (!o.dom && (s = i ? i.nextSibling : r.firstChild)) {
            let l = ge.get(s);
            (!l || !l.parent && l.canReuseDOM(o)) && o.reuseDOM(s);
          }
          o.sync(e, n), o.flags &= -8;
        }
        if (s = i ? i.nextSibling : r.firstChild, n && !n.written && n.node == r && s != o.dom && (n.written = !0), o.dom.parentNode == r)
          for (; s && s != o.dom; )
            s = Nm(s);
        else
          r.insertBefore(o.dom, s);
        i = o.dom;
      }
      for (s = i ? i.nextSibling : r.firstChild, s && n && n.node == r && (n.written = !0); s; )
        s = Nm(s);
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
      let i = mr(e) == 0 ? 0 : n == 0 ? -1 : 1;
      for (; ; ) {
        let s = e.parentNode;
        if (s == this.dom)
          break;
        i == 0 && s.firstChild != s.lastChild && (e == s.firstChild ? i = -1 : i = 1), e = s;
      }
      i < 0 ? r = e : r = e.nextSibling;
    }
    if (r == this.dom.firstChild)
      return 0;
    for (; r && !ge.get(r); )
      r = r.nextSibling;
    if (!r)
      return this.length;
    for (let i = 0, s = 0; ; i++) {
      let o = this.children[i];
      if (o.dom == r)
        return s;
      s += o.length + o.breakAfter;
    }
  }
  domBoundsAround(e, n, r = 0) {
    let i = -1, s = -1, o = -1, l = -1;
    for (let c = 0, a = r, h = r; c < this.children.length; c++) {
      let u = this.children[c], f = a + u.length;
      if (a < e && f > n)
        return u.domBoundsAround(e, n, a);
      if (f >= e && i == -1 && (i = c, s = a), a > n && u.dom.parentNode == this.dom) {
        o = c, l = h;
        break;
      }
      h = f, a = f + u.breakAfter;
    }
    return {
      from: s,
      to: l < 0 ? r + this.length : l,
      startDOM: (i ? this.children[i - 1].dom.nextSibling : null) || this.dom.firstChild,
      endDOM: o < this.children.length && o >= 0 ? this.children[o].dom : null
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
  replaceChildren(e, n, r = vd) {
    this.markDirty();
    for (let i = e; i < n; i++) {
      let s = this.children[i];
      s.parent == this && s.destroy();
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
    return new uw(this.children, e, this.children.length);
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
  merge(e, n, r, i, s, o) {
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
ge.prototype.breakAfter = 0;
function Nm(t) {
  let e = t.nextSibling;
  return t.parentNode.removeChild(t), e;
}
class uw {
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
function fw(t, e, n, r, i, s, o, l, c) {
  let { children: a } = t, h = a.length ? a[e] : null, u = s.length ? s[s.length - 1] : null, f = u ? u.breakAfter : o;
  if (!(e == r && h && !o && !f && s.length < 2 && h.merge(n, i, s.length ? u : null, n == 0, l, c))) {
    if (r < a.length) {
      let d = a[r];
      d && i < d.length ? (e == r && (d = d.split(i), i = 0), !f && u && d.merge(0, i, u, !0, 0, c) ? s[s.length - 1] = d : (i && d.merge(0, i, null, !1, 0, c), s.push(d))) : d != null && d.breakAfter && (u ? u.breakAfter = 1 : o = 1), r++;
    }
    for (h && (h.breakAfter = o, n > 0 && (!o && s.length && h.merge(n, h.length, s[0], !1, l, 0) ? h.breakAfter = s.shift().breakAfter : (n < h.length || h.children.length && h.children[h.children.length - 1].length == 0) && h.merge(n, h.length, null, !1, l, 0), e++)); e < r && s.length; )
      if (a[r - 1].become(s[s.length - 1]))
        r--, s.pop(), c = s.length ? 0 : l;
      else if (a[e].become(s[0]))
        e++, s.shift(), l = s.length ? 0 : c;
      else
        break;
    !s.length && e && r < a.length && !a[e - 1].breakAfter && a[r].merge(0, 0, a[e - 1], !1, l, c) && e--, (e < r || s.length) && t.replaceChildren(e, r, s);
  }
}
function dw(t, e, n, r, i, s) {
  let o = t.childCursor(), { i: l, off: c } = o.findPos(n, 1), { i: a, off: h } = o.findPos(e, -1), u = e - n;
  for (let f of r)
    u += f.length;
  t.length += u, fw(t, a, h, l, c, r, 0, i, s);
}
const Si = "\uFFFF";
class pw {
  constructor(e, n) {
    this.points = e, this.text = "", this.lineSeparator = n.facet(X.lineSeparator);
  }
  append(e) {
    this.text += e;
  }
  lineBreak() {
    this.text += Si;
  }
  readRange(e, n) {
    if (!e)
      return this;
    let r = e.parentNode;
    for (let i = e; ; ) {
      this.findPointBefore(r, i);
      let s = this.text.length;
      this.readNode(i);
      let o = i.nextSibling;
      if (o == n)
        break;
      let l = ge.get(i), c = ge.get(o);
      (l && c ? l.breakAfter : (l ? l.breakAfter : Pm(i)) || Pm(o) && (i.nodeName != "BR" || i.cmIgnore) && this.text.length > s) && this.lineBreak(), i = o;
    }
    return this.findPointBefore(r, n), this;
  }
  readTextNode(e) {
    let n = e.nodeValue;
    for (let r of this.points)
      r.node == e && (r.pos = this.text.length + Math.min(r.offset, n.length));
    for (let r = 0, i = this.lineSeparator ? null : /\r\n?|\n/g; ; ) {
      let s = -1, o = 1, l;
      if (this.lineSeparator ? (s = n.indexOf(this.lineSeparator, r), o = this.lineSeparator.length) : (l = i.exec(n)) && (s = l.index, o = l[0].length), this.append(n.slice(r, s < 0 ? n.length : s)), s < 0)
        break;
      if (this.lineBreak(), o > 1)
        for (let c of this.points)
          c.node == e && c.pos > this.text.length && (c.pos -= o - 1);
      r = s + o;
    }
  }
  readNode(e) {
    if (e.cmIgnore)
      return;
    let n = ge.get(e), r = n && n.overrideDOMText;
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
function Pm(t) {
  return t.nodeType == 1 && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(t.nodeName);
}
class Fm {
  constructor(e, n) {
    this.node = e, this.offset = n, this.pos = -1;
  }
}
let St = typeof navigator < "u" ? navigator : { userAgent: "", vendor: "", platform: "" }, zu = typeof document < "u" ? document : { documentElement: { style: {} } };
const Vu = /* @__PURE__ */ /Edge\/(\d+)/.exec(St.userAgent), gw = /* @__PURE__ */ /MSIE \d/.test(St.userAgent), Uu = /* @__PURE__ */ /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(St.userAgent), ua = !!(gw || Uu || Vu), Bm = !ua && /* @__PURE__ */ /gecko\/(\d+)/i.test(St.userAgent), kh = !ua && /* @__PURE__ */ /Chrome\/(\d+)/.exec(St.userAgent), qm = "webkitFontSmoothing" in zu.documentElement.style, mw = !ua && /* @__PURE__ */ /Apple Computer/.test(St.vendor), $m = mw && (/* @__PURE__ */ /Mobile\/\w+/.test(St.userAgent) || St.maxTouchPoints > 2);
var P = {
  mac: $m || /* @__PURE__ */ /Mac/.test(St.platform),
  windows: /* @__PURE__ */ /Win/.test(St.platform),
  linux: /* @__PURE__ */ /Linux|X11/.test(St.platform),
  ie: ua,
  ie_version: gw ? zu.documentMode || 6 : Uu ? +Uu[1] : Vu ? +Vu[1] : 0,
  gecko: Bm,
  gecko_version: Bm ? +(/* @__PURE__ */ /Firefox\/(\d+)/.exec(St.userAgent) || [0, 0])[1] : 0,
  chrome: !!kh,
  chrome_version: kh ? +kh[1] : 0,
  ios: $m,
  android: /* @__PURE__ */ /Android\b/.test(St.userAgent),
  webkit: qm,
  safari: mw,
  webkit_version: qm ? +(/* @__PURE__ */ /\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1] : 0,
  tabSize: zu.documentElement.style.tabSize != null ? "tab-size" : "-moz-tab-size"
};
const Tae = 256;
class wn extends ge {
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
    return this.flags & 8 || r && (!(r instanceof wn) || this.length - (n - e) + r.length > Tae || r.flags & 8) ? !1 : (this.text = this.text.slice(0, e) + (r ? r.text : "") + this.text.slice(n), this.markDirty(), !0);
  }
  split(e) {
    let n = new wn(this.text.slice(e));
    return this.text = this.text.slice(0, e), this.markDirty(), n.flags |= this.flags & 8, n;
  }
  localPosFromDOM(e, n) {
    return e == this.dom ? n : n ? this.text.length : 0;
  }
  domAtPos(e) {
    return new at(this.dom, e);
  }
  domBoundsAround(e, n, r) {
    return { from: r, to: r + this.length, startDOM: this.dom, endDOM: this.dom.nextSibling };
  }
  coordsAt(e, n) {
    return Mae(this.dom, e, n);
  }
}
class qn extends ge {
  constructor(e, n = [], r = 0) {
    super(), this.mark = e, this.children = n, this.length = r;
    for (let i of n)
      i.setParent(this);
  }
  setAttrs(e) {
    if (aw(e), this.mark.class && (e.className = this.mark.class), this.mark.attrs)
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
  merge(e, n, r, i, s, o) {
    return r && (!(r instanceof qn && r.mark.eq(this.mark)) || e && s <= 0 || n < this.length && o <= 0) ? !1 : (dw(this, e, n, r ? r.children : [], s - 1, o - 1), this.markDirty(), !0);
  }
  split(e) {
    let n = [], r = 0, i = -1, s = 0;
    for (let l of this.children) {
      let c = r + l.length;
      c > e && n.push(r < e ? l.split(e - r) : l), i < 0 && r >= e && (i = s), r = c, s++;
    }
    let o = this.length - e;
    return this.length = e, i > -1 && (this.children.length = i, this.markDirty()), new qn(this.mark, n, o);
  }
  domAtPos(e) {
    return yw(this, e);
  }
  coordsAt(e, n) {
    return ww(this, e, n);
  }
}
function Mae(t, e, n) {
  let r = t.nodeValue.length;
  e > r && (e = r);
  let i = e, s = e, o = 0;
  e == 0 && n < 0 || e == r && n >= 0 ? P.chrome || P.gecko || (e ? (i--, o = 1) : s < r && (s++, o = -1)) : n < 0 ? i-- : s < r && s++;
  let l = Xr(t, i, s).getClientRects();
  if (!l.length)
    return null;
  let c = l[(o ? o < 0 : n >= 0) ? 0 : l.length - 1];
  return P.safari && !o && c.width == 0 && (c = Array.prototype.find.call(l, (a) => a.width) || c), o ? wd(c, o < 0) : c || null;
}
class nr extends ge {
  static create(e, n, r) {
    return new nr(e, n, r);
  }
  constructor(e, n, r) {
    super(), this.widget = e, this.length = n, this.side = r, this.prevWidget = null;
  }
  split(e) {
    let n = nr.create(this.widget, this.length - e, this.side);
    return this.length -= e, n;
  }
  sync(e) {
    (!this.dom || !this.widget.updateDOM(this.dom, e)) && (this.dom && this.prevWidget && this.prevWidget.destroy(this.dom), this.prevWidget = null, this.setDOM(this.widget.toDOM(e)), this.dom.contentEditable = "false");
  }
  getSide() {
    return this.side;
  }
  merge(e, n, r, i, s, o) {
    return r && (!(r instanceof nr) || !this.widget.compare(r.widget) || e > 0 && s <= 0 || n < this.length && o <= 0) ? !1 : (this.length = e + (r ? r.length : 0) + (this.length - n), !0);
  }
  become(e) {
    return e instanceof nr && e.side == this.side && this.widget.constructor == e.widget.constructor ? (this.widget.compare(e.widget) || this.markDirty(!0), this.dom && !this.prevWidget && (this.prevWidget = this.widget), this.widget = e.widget, this.length = e.length, !0) : !1;
  }
  ignoreMutation() {
    return !0;
  }
  ignoreEvent(e) {
    return this.widget.ignoreEvent(e);
  }
  get overrideDOMText() {
    if (this.length == 0)
      return ee.empty;
    let e = this;
    for (; e.parent; )
      e = e.parent;
    let { view: n } = e, r = n && n.state.doc, i = this.posAtStart;
    return r ? r.slice(i, i + this.length) : ee.empty;
  }
  domAtPos(e) {
    return (this.length ? e == 0 : this.side > 0) ? at.before(this.dom) : at.after(this.dom, e == this.length);
  }
  domBoundsAround() {
    return null;
  }
  coordsAt(e, n) {
    let r = this.widget.coordsAt(this.dom, e, n);
    if (r)
      return r;
    let i = this.dom.getClientRects(), s = null;
    if (!i.length)
      return null;
    let o = this.side ? this.side < 0 : e > 0;
    for (let l = o ? i.length - 1 : 0; s = i[l], !(e > 0 ? l == 0 : l == i.length - 1 || s.top < s.bottom); l += o ? -1 : 1)
      ;
    return wd(s, !o);
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
class Yi extends ge {
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
    return e instanceof Yi && e.side == this.side;
  }
  split() {
    return new Yi(this.side);
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
    return this.side > 0 ? at.before(this.dom) : at.after(this.dom);
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
    return ee.empty;
  }
  get isHidden() {
    return !0;
  }
}
wn.prototype.children = nr.prototype.children = Yi.prototype.children = vd;
function yw(t, e) {
  let n = t.dom, { children: r } = t, i = 0;
  for (let s = 0; i < r.length; i++) {
    let o = r[i], l = s + o.length;
    if (!(l == s && o.getSide() <= 0)) {
      if (e > s && e < l && o.dom.parentNode == n)
        return o.domAtPos(e - s);
      if (e <= s)
        break;
      s = l;
    }
  }
  for (let s = i; s > 0; s--) {
    let o = r[s - 1];
    if (o.dom.parentNode == n)
      return o.domAtPos(o.length);
  }
  for (let s = i; s < r.length; s++) {
    let o = r[s];
    if (o.dom.parentNode == n)
      return o.domAtPos(0);
  }
  return new at(n, 0);
}
function bw(t, e, n) {
  let r, { children: i } = t;
  n > 0 && e instanceof qn && i.length && (r = i[i.length - 1]) instanceof qn && r.mark.eq(e.mark) ? bw(r, e.children[0], n - 1) : (i.push(e), e.setParent(t)), t.length += e.length;
}
function ww(t, e, n) {
  let r = null, i = -1, s = null, o = -1;
  function l(a, h) {
    for (let u = 0, f = 0; u < a.children.length && f <= h; u++) {
      let d = a.children[u], p = f + d.length;
      p >= h && (d.children.length ? l(d, h - f) : (!s || s.isHidden && n > 0) && (p > h || f == p && d.getSide() > 0) ? (s = d, o = h - f) : (f < h || f == p && d.getSide() < 0 && !d.isHidden) && (r = d, i = h - f)), f = p;
    }
  }
  l(t, e);
  let c = (n < 0 ? r : s) || r || s;
  return c ? c.coordsAt(Math.max(0, c == r ? i : o), n) : Oae(t);
}
function Oae(t) {
  let e = t.dom.lastChild;
  if (!e)
    return t.dom.getBoundingClientRect();
  let n = so(e);
  return n[n.length - 1] || null;
}
function Wu(t, e) {
  for (let n in t)
    n == "class" && e.class ? e.class += " " + t.class : n == "style" && e.style ? e.style += ";" + t.style : e[n] = t[n];
  return e;
}
const Hm = /* @__PURE__ */ Object.create(null);
function xd(t, e, n) {
  if (t == e)
    return !0;
  t || (t = Hm), e || (e = Hm);
  let r = Object.keys(t), i = Object.keys(e);
  if (r.length - (n && r.indexOf(n) > -1 ? 1 : 0) != i.length - (n && i.indexOf(n) > -1 ? 1 : 0))
    return !1;
  for (let s of r)
    if (s != n && (i.indexOf(s) == -1 || t[s] !== e[s]))
      return !1;
  return !0;
}
function ju(t, e, n) {
  let r = !1;
  if (e)
    for (let i in e)
      n && i in n || (r = !0, i == "style" ? t.style.cssText = "" : t.removeAttribute(i));
  if (n)
    for (let i in n)
      e && e[i] == n[i] || (r = !0, i == "style" ? t.style.cssText = n[i] : t.setAttribute(i, n[i]));
  return r;
}
function Lae(t) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let n = 0; n < t.attributes.length; n++) {
    let r = t.attributes[n];
    e[r.name] = r.value;
  }
  return e;
}
class zn {
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
var Se = /* @__PURE__ */ function(t) {
  return t[t.Text = 0] = "Text", t[t.WidgetBefore = 1] = "WidgetBefore", t[t.WidgetAfter = 2] = "WidgetAfter", t[t.WidgetRange = 3] = "WidgetRange", t;
}(Se || (Se = {}));
class V extends Zr {
  constructor(e, n, r, i) {
    super(), this.startSide = e, this.endSide = n, this.widget = r, this.spec = i;
  }
  get heightRelevant() {
    return !1;
  }
  static mark(e) {
    return new Mo(e);
  }
  static widget(e) {
    let n = Math.max(-1e4, Math.min(1e4, e.side || 0)), r = !!e.block;
    return n += r && !e.inlineOrder ? n > 0 ? 3e8 : -4e8 : n > 0 ? 1e8 : -1e8, new yr(e, n, n, r, e.widget || null, !1);
  }
  static replace(e) {
    let n = !!e.block, r, i;
    if (e.isBlockGap)
      r = -5e8, i = 4e8;
    else {
      let { start: s, end: o } = vw(e, n);
      r = (s ? n ? -3e8 : -1 : 5e8) - 1, i = (o ? n ? 2e8 : 1 : -6e8) + 1;
    }
    return new yr(e, r, i, n, e.widget || null, !0);
  }
  static line(e) {
    return new Oo(e);
  }
  static set(e, n = !1) {
    return te.of(e, n);
  }
  hasHeight() {
    return this.widget ? this.widget.estimatedHeight > -1 : !1;
  }
}
V.none = te.empty;
class Mo extends V {
  constructor(e) {
    let { start: n, end: r } = vw(e);
    super(n ? -1 : 5e8, r ? 1 : -6e8, null, e), this.tagName = e.tagName || "span", this.class = e.class || "", this.attrs = e.attributes || null;
  }
  eq(e) {
    var n, r;
    return this == e || e instanceof Mo && this.tagName == e.tagName && (this.class || ((n = this.attrs) === null || n === void 0 ? void 0 : n.class)) == (e.class || ((r = e.attrs) === null || r === void 0 ? void 0 : r.class)) && xd(this.attrs, e.attrs, "class");
  }
  range(e, n = e) {
    if (e >= n)
      throw new RangeError("Mark decorations may not be empty");
    return super.range(e, n);
  }
}
Mo.prototype.point = !1;
class Oo extends V {
  constructor(e) {
    super(-2e8, -2e8, null, e);
  }
  eq(e) {
    return e instanceof Oo && this.spec.class == e.spec.class && xd(this.spec.attributes, e.spec.attributes);
  }
  range(e, n = e) {
    if (n != e)
      throw new RangeError("Line decoration ranges must be zero-length");
    return super.range(e, n);
  }
}
Oo.prototype.mapMode = ct.TrackBefore;
Oo.prototype.point = !0;
class yr extends V {
  constructor(e, n, r, i, s, o) {
    super(n, r, s, e), this.block = i, this.isReplace = o, this.mapMode = i ? n <= 0 ? ct.TrackBefore : ct.TrackAfter : ct.TrackDel;
  }
  get type() {
    return this.startSide < this.endSide ? Se.WidgetRange : this.startSide <= 0 ? Se.WidgetBefore : Se.WidgetAfter;
  }
  get heightRelevant() {
    return this.block || !!this.widget && (this.widget.estimatedHeight >= 5 || this.widget.lineBreaks > 0);
  }
  eq(e) {
    return e instanceof yr && Rae(this.widget, e.widget) && this.block == e.block && this.startSide == e.startSide && this.endSide == e.endSide;
  }
  range(e, n = e) {
    if (this.isReplace && (e > n || e == n && this.startSide > 0 && this.endSide <= 0))
      throw new RangeError("Invalid range for replacement decoration");
    if (!this.isReplace && n != e)
      throw new RangeError("Widget decorations can only have zero-length ranges");
    return super.range(e, n);
  }
}
yr.prototype.point = !0;
function vw(t, e = !1) {
  let { inclusiveStart: n, inclusiveEnd: r } = t;
  return n == null && (n = t.inclusive), r == null && (r = t.inclusive), { start: n != null ? n : e, end: r != null ? r : e };
}
function Rae(t, e) {
  return t == e || !!(t && e && t.compare(e));
}
function Gu(t, e, n, r = 0) {
  let i = n.length - 1;
  i >= 0 && n[i] + r >= t ? n[i] = Math.max(n[i], e) : n.push(t, e);
}
class ot extends ge {
  constructor() {
    super(...arguments), this.children = [], this.length = 0, this.prevAttrs = void 0, this.attrs = null, this.breakAfter = 0;
  }
  merge(e, n, r, i, s, o) {
    if (r) {
      if (!(r instanceof ot))
        return !1;
      this.dom || r.transferDOM(this);
    }
    return i && this.setDeco(r ? r.attrs : null), dw(this, e, n, r ? r.children : [], s, o), !0;
  }
  split(e) {
    let n = new ot();
    if (n.breakAfter = this.breakAfter, this.length == 0)
      return n;
    let { i: r, off: i } = this.childPos(e);
    i && (n.append(this.children[r].split(i), 0), this.children[r].merge(i, this.children[r].length, null, !1, 0, 0), r++);
    for (let s = r; s < this.children.length; s++)
      n.append(this.children[s], 0);
    for (; r > 0 && this.children[r - 1].length == 0; )
      this.children[--r].destroy();
    return this.children.length = r, this.markDirty(), this.length = e, n;
  }
  transferDOM(e) {
    !this.dom || (this.markDirty(), e.setDOM(this.dom), e.prevAttrs = this.prevAttrs === void 0 ? this.attrs : this.prevAttrs, this.prevAttrs = void 0, this.dom = null);
  }
  setDeco(e) {
    xd(this.attrs, e) || (this.dom && (this.prevAttrs = this.attrs, this.markDirty()), this.attrs = e);
  }
  append(e, n) {
    bw(this, e, n);
  }
  addLineDeco(e) {
    let n = e.spec.attributes, r = e.spec.class;
    n && (this.attrs = Wu(n, this.attrs || {})), r && (this.attrs = Wu({ class: r }, this.attrs || {}));
  }
  domAtPos(e) {
    return yw(this, e);
  }
  reuseDOM(e) {
    e.nodeName == "DIV" && (this.setDOM(e), this.flags |= 6);
  }
  sync(e, n) {
    var r;
    this.dom ? this.flags & 4 && (aw(this.dom), this.dom.className = "cm-line", this.prevAttrs = this.attrs ? null : void 0) : (this.setDOM(document.createElement("div")), this.dom.className = "cm-line", this.prevAttrs = this.attrs ? null : void 0), this.prevAttrs !== void 0 && (ju(this.dom, this.prevAttrs, this.attrs), this.dom.classList.add("cm-line"), this.prevAttrs = void 0), super.sync(e, n);
    let i = this.dom.lastChild;
    for (; i && ge.get(i) instanceof qn; )
      i = i.lastChild;
    if (!i || !this.length || i.nodeName != "BR" && ((r = ge.get(i)) === null || r === void 0 ? void 0 : r.isEditable) == !1 && (!P.ios || !this.children.some((s) => s instanceof wn))) {
      let s = document.createElement("BR");
      s.cmIgnore = !0, this.dom.appendChild(s);
    }
  }
  measureTextSize() {
    if (this.children.length == 0 || this.length > 20)
      return null;
    let e = 0, n;
    for (let r of this.children) {
      if (!(r instanceof wn) || /[^ -~]/.test(r.text))
        return null;
      let i = so(r.dom);
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
    let r = ww(this, e, n);
    if (!this.children.length && r && this.parent) {
      let { heightOracle: i } = this.parent.view.viewState, s = r.bottom - r.top;
      if (Math.abs(s - i.lineHeight) < 2 && i.textHeight < s) {
        let o = (s - i.textHeight) / 2;
        return { top: r.top + o, bottom: r.bottom - o, left: r.left, right: r.left };
      }
    }
    return r;
  }
  become(e) {
    return !1;
  }
  get type() {
    return Se.Text;
  }
  static find(e, n) {
    for (let r = 0, i = 0; r < e.children.length; r++) {
      let s = e.children[r], o = i + s.length;
      if (o >= n) {
        if (s instanceof ot)
          return s;
        if (o > n)
          break;
      }
      i = o + s.breakAfter;
    }
    return null;
  }
}
class Vr extends ge {
  constructor(e, n, r) {
    super(), this.widget = e, this.length = n, this.type = r, this.breakAfter = 0, this.prevWidget = null;
  }
  merge(e, n, r, i, s, o) {
    return r && (!(r instanceof Vr) || !this.widget.compare(r.widget) || e > 0 && s <= 0 || n < this.length && o <= 0) ? !1 : (this.length = e + (r ? r.length : 0) + (this.length - n), !0);
  }
  domAtPos(e) {
    return e == 0 ? at.before(this.dom) : at.after(this.dom, e == this.length);
  }
  split(e) {
    let n = this.length - e;
    this.length = e;
    let r = new Vr(this.widget, n, this.type);
    return r.breakAfter = this.breakAfter, r;
  }
  get children() {
    return vd;
  }
  sync(e) {
    (!this.dom || !this.widget.updateDOM(this.dom, e)) && (this.dom && this.prevWidget && this.prevWidget.destroy(this.dom), this.prevWidget = null, this.setDOM(this.widget.toDOM(e)), this.dom.contentEditable = "false");
  }
  get overrideDOMText() {
    return this.parent ? this.parent.view.state.doc.slice(this.posAtStart, this.posAtEnd) : ee.empty;
  }
  domBoundsAround() {
    return null;
  }
  become(e) {
    return e instanceof Vr && e.widget.constructor == this.widget.constructor ? (e.widget.compare(this.widget) || this.markDirty(!0), this.dom && !this.prevWidget && (this.prevWidget = this.widget), this.widget = e.widget, this.length = e.length, this.type = e.type, this.breakAfter = e.breakAfter, !0) : !1;
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
class zs {
  constructor(e, n, r, i) {
    this.doc = e, this.pos = n, this.end = r, this.disallowBlockEffectsFor = i, this.content = [], this.curLine = null, this.breakAtStart = 0, this.pendingBuffer = 0, this.bufferMarks = [], this.atCursorPos = !0, this.openStart = -1, this.openEnd = -1, this.text = "", this.textOff = 0, this.cursor = e.iter(), this.skip = n;
  }
  posCovered() {
    if (this.content.length == 0)
      return !this.breakAtStart && this.doc.lineAt(this.pos).from != this.pos;
    let e = this.content[this.content.length - 1];
    return !e.breakAfter && !(e instanceof Vr && e.type == Se.WidgetBefore);
  }
  getLine() {
    return this.curLine || (this.content.push(this.curLine = new ot()), this.atCursorPos = !0), this.curLine;
  }
  flushBuffer(e = this.bufferMarks) {
    this.pendingBuffer && (this.curLine.append(rl(new Yi(-1), e), e.length), this.pendingBuffer = 0);
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
        let { value: s, lineBreak: o, done: l } = this.cursor.next(this.skip);
        if (this.skip = 0, l)
          throw new Error("Ran out of text content when drawing inline views");
        if (o) {
          this.posCovered() || this.getLine(), this.content.length ? this.content[this.content.length - 1].breakAfter = 1 : this.breakAtStart = 1, this.flushBuffer(), this.curLine = null, this.atCursorPos = !0, e--;
          continue;
        } else
          this.text = s, this.textOff = 0;
      }
      let i = Math.min(this.text.length - this.textOff, e, 512);
      this.flushBuffer(n.slice(n.length - r)), this.getLine().append(rl(new wn(this.text.slice(this.textOff, this.textOff + i)), n), r), this.atCursorPos = !0, this.textOff += i, e -= i, r = 0;
    }
  }
  span(e, n, r, i) {
    this.buildText(n - e, r, i), this.pos = n, this.openStart < 0 && (this.openStart = i);
  }
  point(e, n, r, i, s, o) {
    if (this.disallowBlockEffectsFor[o] && r instanceof yr) {
      if (r.block)
        throw new RangeError("Block decorations may not be specified via plugins");
      if (n > this.doc.lineAt(this.pos).to)
        throw new RangeError("Decorations that replace line breaks may not be specified via plugins");
    }
    let l = n - e;
    if (r instanceof yr)
      if (r.block) {
        let { type: c } = r;
        c == Se.WidgetAfter && !this.posCovered() && this.getLine(), this.addBlockWidget(new Vr(r.widget || new zm("div"), l, c));
      } else {
        let c = nr.create(r.widget || new zm("span"), l, l ? 0 : r.startSide), a = this.atCursorPos && !c.isEditable && s <= i.length && (e < n || r.startSide > 0), h = !c.isEditable && (e < n || s > i.length || r.startSide <= 0), u = this.getLine();
        this.pendingBuffer == 2 && !a && !c.isEditable && (this.pendingBuffer = 0), this.flushBuffer(i), a && (u.append(rl(new Yi(1), i), s), s = i.length + Math.max(0, s - i.length)), u.append(rl(c, i), s), this.atCursorPos = h, this.pendingBuffer = h ? e < n || s > i.length ? 1 : 2 : 0, this.pendingBuffer && (this.bufferMarks = i.slice());
      }
    else
      this.doc.lineAt(this.pos).from == this.pos && this.getLine().addLineDeco(r);
    l && (this.textOff + l <= this.text.length ? this.textOff += l : (this.skip += l - (this.text.length - this.textOff), this.text = "", this.textOff = 0), this.pos = n), this.openStart < 0 && (this.openStart = s);
  }
  static build(e, n, r, i, s) {
    let o = new zs(e, n, r, s);
    return o.openEnd = te.spans(i, n, r, o), o.openStart < 0 && (o.openStart = o.openEnd), o.finish(o.openEnd), o;
  }
}
function rl(t, e) {
  for (let n of e)
    t = new qn(n, [t], t.length);
  return t;
}
class zm extends zn {
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
const xw = /* @__PURE__ */ N.define(), kw = /* @__PURE__ */ N.define(), _w = /* @__PURE__ */ N.define(), Sw = /* @__PURE__ */ N.define(), Yu = /* @__PURE__ */ N.define(), Cw = /* @__PURE__ */ N.define(), Aw = /* @__PURE__ */ N.define(), Ew = /* @__PURE__ */ N.define({
  combine: (t) => t.some((e) => e)
}), Dw = /* @__PURE__ */ N.define({
  combine: (t) => t.some((e) => e)
});
class pc {
  constructor(e, n = "nearest", r = "nearest", i = 5, s = 5) {
    this.range = e, this.y = n, this.x = r, this.yMargin = i, this.xMargin = s;
  }
  map(e) {
    return e.empty ? this : new pc(this.range.map(e), this.y, this.x, this.yMargin, this.xMargin);
  }
}
const Vm = /* @__PURE__ */ K.define({ map: (t, e) => t.map(e) });
function Lt(t, e, n) {
  let r = t.facet(Sw);
  r.length ? r[0](e) : window.onerror ? window.onerror(String(e), n, void 0, void 0, e) : n ? console.error(n + ":", e) : console.error(e);
}
const fa = /* @__PURE__ */ N.define({ combine: (t) => t.length ? t[0] : !0 });
let Iae = 0;
const Ls = /* @__PURE__ */ N.define();
class Ae {
  constructor(e, n, r, i) {
    this.id = e, this.create = n, this.domEventHandlers = r, this.extension = i(this);
  }
  static define(e, n) {
    const { eventHandlers: r, provide: i, decorations: s } = n || {};
    return new Ae(Iae++, e, r, (o) => {
      let l = [Ls.of(o)];
      return s && l.push(oo.of((c) => {
        let a = c.plugin(o);
        return a ? s(a) : V.none;
      })), i && l.push(i(o)), l;
    });
  }
  static fromClass(e, n) {
    return Ae.define((r) => new e(r), n);
  }
}
class _h {
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
            if (Lt(n.state, r, "CodeMirror plugin crashed"), this.value.destroy)
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
        Lt(e.state, n, "CodeMirror plugin crashed"), this.deactivate();
      }
    return this;
  }
  destroy(e) {
    var n;
    if (!((n = this.value) === null || n === void 0) && n.destroy)
      try {
        this.value.destroy();
      } catch (r) {
        Lt(e.state, r, "CodeMirror plugin crashed");
      }
  }
  deactivate() {
    this.spec = this.value = null;
  }
}
const Tw = /* @__PURE__ */ N.define(), kd = /* @__PURE__ */ N.define(), oo = /* @__PURE__ */ N.define(), _d = /* @__PURE__ */ N.define(), Mw = /* @__PURE__ */ N.define();
function Um(t, e, n) {
  let r = t.state.facet(Mw);
  if (!r.length)
    return r;
  let i = r.map((o) => o instanceof Function ? o(t) : o), s = [];
  return te.spans(i, e, n, {
    point() {
    },
    span(o, l, c, a) {
      let h = s;
      for (let u = c.length - 1; u >= 0; u--, a--) {
        let f = c[u].spec.bidiIsolate, d;
        if (f != null)
          if (a > 0 && h.length && (d = h[h.length - 1]).to == o && d.direction == f)
            d.to = l, h = d.inner;
          else {
            let p = { from: o, to: l, direction: f, inner: [] };
            h.push(p), h = p.inner;
          }
      }
    }
  }), s;
}
const Ow = /* @__PURE__ */ N.define();
function Lw(t) {
  let e = 0, n = 0, r = 0, i = 0;
  for (let s of t.state.facet(Ow)) {
    let o = s(t);
    o && (o.left != null && (e = Math.max(e, o.left)), o.right != null && (n = Math.max(n, o.right)), o.top != null && (r = Math.max(r, o.top)), o.bottom != null && (i = Math.max(i, o.bottom)));
  }
  return { left: e, right: n, top: r, bottom: i };
}
const Rs = /* @__PURE__ */ N.define();
class Rt {
  constructor(e, n, r, i) {
    this.fromA = e, this.toA = n, this.fromB = r, this.toB = i;
  }
  join(e) {
    return new Rt(Math.min(this.fromA, e.fromA), Math.max(this.toA, e.toA), Math.min(this.fromB, e.fromB), Math.max(this.toB, e.toB));
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
    for (let i = 0, s = 0, o = 0, l = 0; ; i++) {
      let c = i == e.length ? null : e[i], a = o - l, h = c ? c.fromB : 1e9;
      for (; s < n.length && n[s] < h; ) {
        let u = n[s], f = n[s + 1], d = Math.max(l, u), p = Math.min(h, f);
        if (d <= p && new Rt(d + a, p + a, d, p).addToSet(r), f > h)
          break;
        s += 2;
      }
      if (!c)
        return r;
      new Rt(c.fromA, c.toA, c.fromB, c.toB).addToSet(r), o = c.toA, l = c.toB;
    }
  }
}
class gc {
  constructor(e, n, r) {
    this.view = e, this.state = n, this.transactions = r, this.flags = 0, this.startState = e.state, this.changes = Re.empty(this.startState.doc.length);
    for (let s of r)
      this.changes = this.changes.compose(s.changes);
    let i = [];
    this.changes.iterChangedRanges((s, o, l, c) => i.push(new Rt(s, o, l, c))), this.changedRanges = i;
  }
  static create(e, n, r) {
    return new gc(e, n, r);
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
var _e = /* @__PURE__ */ function(t) {
  return t[t.LTR = 0] = "LTR", t[t.RTL = 1] = "RTL", t;
}(_e || (_e = {}));
const lo = _e.LTR, Rw = _e.RTL;
function Iw(t) {
  let e = [];
  for (let n = 0; n < t.length; n++)
    e.push(1 << +t[n]);
  return e;
}
const Nae = /* @__PURE__ */ Iw("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"), Pae = /* @__PURE__ */ Iw("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"), Ku = /* @__PURE__ */ Object.create(null), en = [];
for (let t of ["()", "[]", "{}"]) {
  let e = /* @__PURE__ */ t.charCodeAt(0), n = /* @__PURE__ */ t.charCodeAt(1);
  Ku[e] = n, Ku[n] = -e;
}
function Fae(t) {
  return t <= 247 ? Nae[t] : 1424 <= t && t <= 1524 ? 2 : 1536 <= t && t <= 1785 ? Pae[t - 1536] : 1774 <= t && t <= 2220 ? 4 : 8192 <= t && t <= 8203 ? 256 : 64336 <= t && t <= 65023 ? 4 : t == 8204 ? 256 : 1;
}
const Bae = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;
class rr {
  get dir() {
    return this.level % 2 ? Rw : lo;
  }
  constructor(e, n, r) {
    this.from = e, this.to = n, this.level = r;
  }
  side(e, n) {
    return this.dir == n == e ? this.to : this.from;
  }
  static find(e, n, r, i) {
    let s = -1;
    for (let o = 0; o < e.length; o++) {
      let l = e[o];
      if (l.from <= n && l.to >= n) {
        if (l.level == r)
          return o;
        (s < 0 || (i != 0 ? i < 0 ? l.from < n : l.to > n : e[s].level > l.level)) && (s = o);
      }
    }
    if (s < 0)
      throw new RangeError("Index out of range");
    return s;
  }
}
function Nw(t, e) {
  if (t.length != e.length)
    return !1;
  for (let n = 0; n < t.length; n++) {
    let r = t[n], i = e[n];
    if (r.from != i.from || r.to != i.to || r.direction != i.direction || !Nw(r.inner, i.inner))
      return !1;
  }
  return !0;
}
const ae = [];
function qae(t, e, n, r, i) {
  for (let s = 0; s <= r.length; s++) {
    let o = s ? r[s - 1].to : e, l = s < r.length ? r[s].from : n, c = s ? 256 : i;
    for (let a = o, h = c, u = c; a < l; a++) {
      let f = Fae(t.charCodeAt(a));
      f == 512 ? f = h : f == 8 && u == 4 && (f = 16), ae[a] = f == 4 ? 2 : f, f & 7 && (u = f), h = f;
    }
    for (let a = o, h = c, u = c; a < l; a++) {
      let f = ae[a];
      if (f == 128)
        a < l - 1 && h == ae[a + 1] && h & 24 ? f = ae[a] = h : ae[a] = 256;
      else if (f == 64) {
        let d = a + 1;
        for (; d < l && ae[d] == 64; )
          d++;
        let p = a && h == 8 || d < n && ae[d] == 8 ? u == 1 ? 1 : 8 : 256;
        for (let g = a; g < d; g++)
          ae[g] = p;
        a = d - 1;
      } else
        f == 8 && u == 1 && (ae[a] = 1);
      h = f, f & 7 && (u = f);
    }
  }
}
function $ae(t, e, n, r, i) {
  let s = i == 1 ? 2 : 1;
  for (let o = 0, l = 0, c = 0; o <= r.length; o++) {
    let a = o ? r[o - 1].to : e, h = o < r.length ? r[o].from : n;
    for (let u = a, f, d, p; u < h; u++)
      if (d = Ku[f = t.charCodeAt(u)])
        if (d < 0) {
          for (let g = l - 3; g >= 0; g -= 3)
            if (en[g + 1] == -d) {
              let m = en[g + 2], y = m & 2 ? i : m & 4 ? m & 1 ? s : i : 0;
              y && (ae[u] = ae[en[g]] = y), l = g;
              break;
            }
        } else {
          if (en.length == 189)
            break;
          en[l++] = u, en[l++] = f, en[l++] = c;
        }
      else if ((p = ae[u]) == 2 || p == 1) {
        let g = p == i;
        c = g ? 0 : 1;
        for (let m = l - 3; m >= 0; m -= 3) {
          let y = en[m + 2];
          if (y & 2)
            break;
          if (g)
            en[m + 2] |= 2;
          else {
            if (y & 4)
              break;
            en[m + 2] |= 4;
          }
        }
      }
  }
}
function Hae(t, e, n, r) {
  for (let i = 0, s = r; i <= n.length; i++) {
    let o = i ? n[i - 1].to : t, l = i < n.length ? n[i].from : e;
    for (let c = o; c < l; ) {
      let a = ae[c];
      if (a == 256) {
        let h = c + 1;
        for (; ; )
          if (h == l) {
            if (i == n.length)
              break;
            h = n[i++].to, l = i < n.length ? n[i].from : e;
          } else if (ae[h] == 256)
            h++;
          else
            break;
        let u = s == 1, f = (h < e ? ae[h] : r) == 1, d = u == f ? u ? 1 : 2 : r;
        for (let p = h, g = i, m = g ? n[g - 1].to : t; p > c; )
          p == m && (p = n[--g].from, m = g ? n[g - 1].to : t), ae[--p] = d;
        c = h;
      } else
        s = a, c++;
    }
  }
}
function Ju(t, e, n, r, i, s, o) {
  let l = r % 2 ? 2 : 1;
  if (r % 2 == i % 2)
    for (let c = e, a = 0; c < n; ) {
      let h = !0, u = !1;
      if (a == s.length || c < s[a].from) {
        let g = ae[c];
        g != l && (h = !1, u = g == 16);
      }
      let f = !h && l == 1 ? [] : null, d = h ? r : r + 1, p = c;
      e:
        for (; ; )
          if (a < s.length && p == s[a].from) {
            if (u)
              break e;
            let g = s[a];
            if (!h)
              for (let m = g.to, y = a + 1; ; ) {
                if (m == n)
                  break e;
                if (y < s.length && s[y].from == m)
                  m = s[y++].to;
                else {
                  if (ae[m] == l)
                    break e;
                  break;
                }
              }
            if (a++, f)
              f.push(g);
            else {
              g.from > c && o.push(new rr(c, g.from, d));
              let m = g.direction == lo != !(d % 2);
              Zu(t, m ? r + 1 : r, i, g.inner, g.from, g.to, o), c = g.to;
            }
            p = g.to;
          } else {
            if (p == n || (h ? ae[p] != l : ae[p] == l))
              break;
            p++;
          }
      f ? Ju(t, c, p, r + 1, i, f, o) : c < p && o.push(new rr(c, p, d)), c = p;
    }
  else
    for (let c = n, a = s.length; c > e; ) {
      let h = !0, u = !1;
      if (!a || c > s[a - 1].to) {
        let g = ae[c - 1];
        g != l && (h = !1, u = g == 16);
      }
      let f = !h && l == 1 ? [] : null, d = h ? r : r + 1, p = c;
      e:
        for (; ; )
          if (a && p == s[a - 1].to) {
            if (u)
              break e;
            let g = s[--a];
            if (!h)
              for (let m = g.from, y = a; ; ) {
                if (m == e)
                  break e;
                if (y && s[y - 1].to == m)
                  m = s[--y].from;
                else {
                  if (ae[m - 1] == l)
                    break e;
                  break;
                }
              }
            if (f)
              f.push(g);
            else {
              g.to < c && o.push(new rr(g.to, c, d));
              let m = g.direction == lo != !(d % 2);
              Zu(t, m ? r + 1 : r, i, g.inner, g.from, g.to, o), c = g.from;
            }
            p = g.from;
          } else {
            if (p == e || (h ? ae[p - 1] != l : ae[p - 1] == l))
              break;
            p--;
          }
      f ? Ju(t, p, c, r + 1, i, f, o) : p < c && o.push(new rr(p, c, d)), c = p;
    }
}
function Zu(t, e, n, r, i, s, o) {
  let l = e % 2 ? 2 : 1;
  qae(t, i, s, r, l), $ae(t, i, s, r, l), Hae(i, s, r, l), Ju(t, i, s, e, n, r, o);
}
function zae(t, e, n) {
  if (!t)
    return [new rr(0, 0, e == Rw ? 1 : 0)];
  if (e == lo && !n.length && !Bae.test(t))
    return Pw(t.length);
  if (n.length)
    for (; t.length > ae.length; )
      ae[ae.length] = 256;
  let r = [], i = e == lo ? 0 : 1;
  return Zu(t, i, i, n, 0, t.length, r), r;
}
function Pw(t) {
  return [new rr(0, t, 0)];
}
let Fw = "";
function Vae(t, e, n, r, i) {
  var s;
  let o = r.head - t.from, l = -1;
  if (o == 0) {
    if (!i || !t.length)
      return null;
    e[0].level != n && (o = e[0].side(!1, n), l = 0);
  } else if (o == t.length) {
    if (i)
      return null;
    let f = e[e.length - 1];
    f.level != n && (o = f.side(!0, n), l = e.length - 1);
  }
  l < 0 && (l = rr.find(e, o, (s = r.bidiLevel) !== null && s !== void 0 ? s : -1, r.assoc));
  let c = e[l];
  o == c.side(i, n) && (c = e[l += i ? 1 : -1], o = c.side(!i, n));
  let a = i == (c.dir == n), h = Qe(t.text, o, a);
  if (Fw = t.text.slice(Math.min(o, h), Math.max(o, h)), h != c.side(i, n))
    return C.cursor(h + t.from, a ? -1 : 1, c.level);
  let u = l == (i ? e.length - 1 : 0) ? null : e[l + (i ? 1 : -1)];
  return !u && c.level != n ? C.cursor(i ? t.to : t.from, i ? -1 : 1, n) : u && u.level < c.level ? C.cursor(u.side(!i, n) + t.from, i ? 1 : -1, u.level) : C.cursor(h + t.from, i ? -1 : 1, c.level);
}
class Wm extends ge {
  get length() {
    return this.view.state.doc.length;
  }
  constructor(e) {
    super(), this.view = e, this.decorations = [], this.dynamicDecorationMap = [], this.hasComposition = null, this.markedForComposition = /* @__PURE__ */ new Set(), this.minWidth = 0, this.minWidthFrom = 0, this.minWidthTo = 0, this.impreciseAnchor = null, this.impreciseHead = null, this.forceSelection = !1, this.lastUpdate = Date.now(), this.setDOM(e.contentDOM), this.children = [new ot()], this.children[0].setParent(this), this.updateDeco(), this.updateInner([new Rt(0, 0, 0, e.state.doc.length)], 0, null);
  }
  update(e) {
    let n = e.changedRanges;
    this.minWidth > 0 && n.length && (n.every(({ fromA: l, toA: c }) => c < this.minWidthFrom || l > this.minWidthTo) ? (this.minWidthFrom = e.changes.mapPos(this.minWidthFrom, 1), this.minWidthTo = e.changes.mapPos(this.minWidthTo, 1)) : this.minWidth = this.minWidthFrom = this.minWidthTo = 0);
    let r = this.view.inputState.composing < 0 ? null : Wae(this.view, e.changes);
    if (this.hasComposition) {
      this.markedForComposition.clear();
      let { from: l, to: c } = this.hasComposition;
      n = new Rt(l, c, e.changes.mapPos(l, -1), e.changes.mapPos(c, 1)).addToSet(n.slice());
    }
    this.hasComposition = r ? { from: r.range.fromB, to: r.range.toB } : null, (P.ie || P.chrome) && !r && e && e.state.doc.lines != e.startState.doc.lines && (this.forceSelection = !0);
    let i = this.decorations, s = this.updateDeco(), o = Yae(i, s, e.changes);
    return n = Rt.extendWithRanges(n, o), !(this.flags & 7) && n.length == 0 ? !1 : (this.updateInner(n, e.startState.doc.length, r), e.transactions.length && (this.lastUpdate = Date.now()), !0);
  }
  updateInner(e, n, r) {
    this.view.viewState.mustMeasureContent = !0, this.updateChildren(e, n, r);
    let { observer: i } = this.view;
    i.ignore(() => {
      this.dom.style.height = this.view.viewState.contentHeight + "px", this.dom.style.flexBasis = this.minWidth ? this.minWidth + "px" : "";
      let o = P.chrome || P.ios ? { node: i.selectionRange.focusNode, written: !1 } : void 0;
      this.sync(this.view, o), this.flags &= -8, o && (o.written || i.selectionRange.focusNode != o.node) && (this.forceSelection = !0), this.dom.style.height = "";
    }), this.markedForComposition.forEach((o) => o.flags &= -9);
    let s = [];
    if (this.view.viewport.from || this.view.viewport.to < this.view.state.doc.length)
      for (let o of this.children)
        o instanceof Vr && o.widget instanceof jm && s.push(o.dom);
    i.updateGaps(s);
  }
  updateChildren(e, n, r) {
    let i = r ? r.range.addToSet(e.slice()) : e, s = this.childCursor(n);
    for (let o = i.length - 1; ; o--) {
      let l = o >= 0 ? i[o] : null;
      if (!l)
        break;
      let { fromA: c, toA: a, fromB: h, toB: u } = l, f, d, p, g;
      if (r && r.range.fromB < u && r.range.toB > h) {
        let w = zs.build(this.view.state.doc, h, r.range.fromB, this.decorations, this.dynamicDecorationMap), x = zs.build(this.view.state.doc, r.range.toB, u, this.decorations, this.dynamicDecorationMap);
        d = w.breakAtStart, p = w.openStart, g = x.openEnd;
        let v = this.compositionView(r);
        x.breakAtStart ? v.breakAfter = 1 : x.content.length && v.merge(v.length, v.length, x.content[0], !1, x.openStart, 0) && (v.breakAfter = x.content[0].breakAfter, x.content.shift()), w.content.length && v.merge(0, 0, w.content[w.content.length - 1], !0, 0, w.openEnd) && w.content.pop(), f = w.content.concat(v).concat(x.content);
      } else
        ({ content: f, breakAtStart: d, openStart: p, openEnd: g } = zs.build(this.view.state.doc, h, u, this.decorations, this.dynamicDecorationMap));
      let { i: m, off: y } = s.findPos(a, 1), { i: b, off: _ } = s.findPos(c, -1);
      fw(this, b, _, m, y, f, d, p, g);
    }
    r && this.fixCompositionDOM(r);
  }
  compositionView(e) {
    let n = new wn(e.text.nodeValue);
    n.flags |= 8;
    for (let { deco: i } of e.marks)
      n = new qn(i, [n], n.length);
    let r = new ot();
    return r.append(n, 0), r;
  }
  fixCompositionDOM(e) {
    let n = (s, o) => {
      o.flags |= 8, this.markedForComposition.add(o);
      let l = ge.get(s);
      l != o && (l && (l.dom = null), o.setDOM(s));
    }, r = this.childPos(e.range.fromB, 1), i = this.children[r.i];
    n(e.line, i);
    for (let s = e.marks.length - 1; s >= -1; s--)
      r = i.childPos(r.off, 1), i = i.children[r.i], n(s >= 0 ? e.marks[s].node : e.text, i);
  }
  updateSelection(e = !1, n = !1) {
    (e || !this.view.observer.selectionRange.focusNode) && this.view.observer.readSelectionRange();
    let r = this.view.root.activeElement, i = r == this.dom, s = !i && Bl(this.dom, this.view.observer.selectionRange) && !(r && this.dom.contains(r));
    if (!(i || n || s))
      return;
    let o = this.forceSelection;
    this.forceSelection = !1;
    let l = this.view.state.selection.main, c = this.domAtPos(l.anchor), a = l.empty ? c : this.domAtPos(l.head);
    if (P.gecko && l.empty && !this.hasComposition && Uae(c)) {
      let u = document.createTextNode("");
      this.view.observer.ignore(() => c.node.insertBefore(u, c.node.childNodes[c.offset] || null)), c = a = new at(u, 0), o = !0;
    }
    let h = this.view.observer.selectionRange;
    (o || !h.focusNode || !fc(c.node, c.offset, h.anchorNode, h.anchorOffset) || !fc(a.node, a.offset, h.focusNode, h.focusOffset)) && (this.view.observer.ignore(() => {
      P.android && P.chrome && this.dom.contains(h.focusNode) && Kae(h.focusNode, this.dom) && (this.dom.blur(), this.dom.focus({ preventScroll: !0 }));
      let u = uc(this.view.root);
      if (u)
        if (l.empty) {
          if (P.gecko) {
            let f = jae(c.node, c.offset);
            if (f && f != 3) {
              let d = qw(c.node, c.offset, f == 1 ? 1 : -1);
              d && (c = new at(d, f == 1 ? 0 : d.nodeValue.length));
            }
          }
          u.collapse(c.node, c.offset), l.bidiLevel != null && h.caretBidiLevel != null && (h.caretBidiLevel = l.bidiLevel);
        } else if (u.extend) {
          u.collapse(c.node, c.offset);
          try {
            u.extend(a.node, a.offset);
          } catch {
          }
        } else {
          let f = document.createRange();
          l.anchor > l.head && ([c, a] = [a, c]), f.setEnd(a.node, a.offset), f.setStart(c.node, c.offset), u.removeAllRanges(), u.addRange(f);
        }
      s && this.view.root.activeElement == this.dom && (this.dom.blur(), r && r.focus());
    }), this.view.observer.setSelectionRange(c, a)), this.impreciseAnchor = c.precise ? null : new at(h.anchorNode, h.anchorOffset), this.impreciseHead = a.precise ? null : new at(h.focusNode, h.focusOffset);
  }
  enforceCursorAssoc() {
    if (this.hasComposition)
      return;
    let { view: e } = this, n = e.state.selection.main, r = uc(e.root), { anchorNode: i, anchorOffset: s } = e.observer.selectionRange;
    if (!r || !n.empty || !n.assoc || !r.modify)
      return;
    let o = ot.find(this, n.head);
    if (!o)
      return;
    let l = o.posAtStart;
    if (n.head == l || n.head == l + o.length)
      return;
    let c = this.coordsAt(n.head, -1), a = this.coordsAt(n.head, 1);
    if (!c || !a || c.bottom > a.top)
      return;
    let h = this.domAtPos(n.head + n.assoc);
    r.collapse(h.node, h.offset), r.modify("move", n.assoc < 0 ? "forward" : "backward", "lineboundary"), e.observer.readSelectionRange();
    let u = e.observer.selectionRange;
    e.docView.posFromDOM(u.anchorNode, u.anchorOffset) != n.from && r.collapse(i, s);
  }
  nearest(e) {
    for (let n = e; n; ) {
      let r = ge.get(n);
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
      if (r < i.length || i instanceof ot)
        break;
      n++, r = 0;
    }
    return this.children[n].domAtPos(r);
  }
  coordsAt(e, n) {
    for (let r = this.length, i = this.children.length - 1; ; i--) {
      let s = this.children[i], o = r - s.breakAfter - s.length;
      if (e > o || e == o && s.type != Se.WidgetBefore && s.type != Se.WidgetAfter && (!i || n == 2 || this.children[i - 1].breakAfter || this.children[i - 1].type == Se.WidgetBefore && n > -2))
        return s.coordsAt(e - o, n);
      r = o;
    }
  }
  coordsForChar(e) {
    let { i: n, off: r } = this.childPos(e, 1), i = this.children[n];
    if (!(i instanceof ot))
      return null;
    for (; i.children.length; ) {
      let { i: l, off: c } = i.childPos(r, 1);
      for (; ; l++) {
        if (l == i.children.length)
          return null;
        if ((i = i.children[l]).length)
          break;
      }
      r = c;
    }
    if (!(i instanceof wn))
      return null;
    let s = Qe(i.text, r);
    if (s == r)
      return null;
    let o = Xr(i.dom, r, s).getClientRects();
    return !o.length || o[0].top >= o[0].bottom ? null : o[0];
  }
  measureVisibleLineHeights(e) {
    let n = [], { from: r, to: i } = e, s = this.view.contentDOM.clientWidth, o = s > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1, l = -1, c = this.view.textDirection == _e.LTR;
    for (let a = 0, h = 0; h < this.children.length; h++) {
      let u = this.children[h], f = a + u.length;
      if (f > i)
        break;
      if (a >= r) {
        let d = u.dom.getBoundingClientRect();
        if (n.push(d.height), o) {
          let p = u.dom.lastChild, g = p ? so(p) : [];
          if (g.length) {
            let m = g[g.length - 1], y = c ? m.right - d.left : d.right - m.left;
            y > l && (l = y, this.minWidth = s, this.minWidthFrom = a, this.minWidthTo = f);
          }
        }
      }
      a = f + u.breakAfter;
    }
    return n;
  }
  textDirectionAt(e) {
    let { i: n } = this.childPos(e, 1);
    return getComputedStyle(this.children[n].dom).direction == "rtl" ? _e.RTL : _e.LTR;
  }
  measureTextSize() {
    for (let s of this.children)
      if (s instanceof ot) {
        let o = s.measureTextSize();
        if (o)
          return o;
      }
    let e = document.createElement("div"), n, r, i;
    return e.className = "cm-line", e.style.width = "99999px", e.style.position = "absolute", e.textContent = "abc def ghi jkl mno pqr stu", this.view.observer.ignore(() => {
      this.dom.appendChild(e);
      let s = so(e.firstChild)[0];
      n = e.getBoundingClientRect().height, r = s ? s.width / 27 : 7, i = s ? s.height : n, e.remove();
    }), { lineHeight: n, charWidth: r, textHeight: i };
  }
  childCursor(e = this.length) {
    let n = this.children.length;
    return n && (e -= this.children[--n].length), new uw(this.children, e, n);
  }
  computeBlockGapDeco() {
    let e = [], n = this.view.viewState;
    for (let r = 0, i = 0; ; i++) {
      let s = i == n.viewports.length ? null : n.viewports[i], o = s ? s.from - 1 : this.length;
      if (o > r) {
        let l = n.lineBlockAt(o).bottom - n.lineBlockAt(r).top;
        e.push(V.replace({
          widget: new jm(l),
          block: !0,
          inclusive: !0,
          isBlockGap: !0
        }).range(r, o));
      }
      if (!s)
        break;
      r = s.to + 1;
    }
    return V.set(e);
  }
  updateDeco() {
    let e = this.view.state.facet(oo).map((n, r) => (this.dynamicDecorationMap[r] = typeof n == "function") ? n(this.view) : n);
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
    let s = Lw(this.view), o = {
      left: r.left - s.left,
      top: r.top - s.top,
      right: r.right + s.right,
      bottom: r.bottom + s.bottom
    };
    Sae(this.view.scrollDOM, o, n.head < n.anchor ? -1 : 1, e.x, e.y, e.xMargin, e.yMargin, this.view.textDirection == _e.LTR);
  }
}
function Uae(t) {
  return t.node.nodeType == 1 && t.node.firstChild && (t.offset == 0 || t.node.childNodes[t.offset - 1].contentEditable == "false") && (t.offset == t.node.childNodes.length || t.node.childNodes[t.offset].contentEditable == "false");
}
class jm extends zn {
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
function Bw(t) {
  let e = t.observer.selectionRange, n = e.focusNode && qw(e.focusNode, e.focusOffset, 0);
  if (!n)
    return null;
  let r = ge.get(n), i, s;
  if (r instanceof wn)
    i = r.posAtStart, s = i + r.length;
  else {
    e:
      for (let o = 0, l = n; ; ) {
        for (let a = l.previousSibling, h; a; a = a.previousSibling) {
          if (h = ge.get(a)) {
            i = s = h.posAtEnd + o;
            break e;
          }
          let u = new pw([], t.state);
          if (u.readNode(a), u.text.indexOf(Si) > -1)
            return null;
          o += u.text.length;
        }
        if (l = l.parentNode, !l)
          return null;
        let c = ge.get(l);
        if (c) {
          i = s = c.posAtStart + o;
          break;
        }
      }
  }
  return { from: i, to: s, node: n };
}
function Wae(t, e) {
  let n = Bw(t);
  if (!n)
    return null;
  let { from: r, to: i, node: s } = n, o = e.mapPos(r, -1), l = e.mapPos(i, 1), c = s.nodeValue;
  if (/[\n\r]/.test(c))
    return null;
  if (l - o != c.length) {
    let f = e.mapPos(r, 1), d = e.mapPos(i, -1);
    if (d - f == c.length)
      o = f, l = d;
    else if (t.state.doc.sliceString(l - c.length, l) == c)
      o = l - c.length;
    else if (t.state.doc.sliceString(o, o + c.length) == c)
      l = o + c.length;
    else
      return null;
  }
  let { main: a } = t.state.selection;
  if (t.state.doc.sliceString(o, l) != c || o > a.head || l < a.head)
    return null;
  let h = [], u = new Rt(r, i, o, l);
  for (let f = s.parentNode; ; f = f.parentNode) {
    let d = ge.get(f);
    if (d instanceof qn)
      h.push({ node: f, deco: d.mark });
    else {
      if (d instanceof ot || f.nodeName == "DIV" && f.parentNode == t.contentDOM)
        return { range: u, text: s, marks: h, line: f };
      if (f != t.contentDOM)
        h.push({ node: f, deco: new Mo({
          inclusive: !0,
          attributes: Lae(f),
          tagName: f.tagName.toLowerCase()
        }) });
      else
        return null;
    }
  }
}
function qw(t, e, n) {
  if (n <= 0)
    for (let r = t, i = e; ; ) {
      if (r.nodeType == 3)
        return r;
      if (r.nodeType == 1 && i > 0)
        r = r.childNodes[i - 1], i = mr(r);
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
function jae(t, e) {
  return t.nodeType != 1 ? 0 : (e && t.childNodes[e - 1].contentEditable == "false" ? 1 : 0) | (e < t.childNodes.length && t.childNodes[e].contentEditable == "false" ? 2 : 0);
}
let Gae = class {
  constructor() {
    this.changes = [];
  }
  compareRange(e, n) {
    Gu(e, n, this.changes);
  }
  comparePoint(e, n) {
    Gu(e, n, this.changes);
  }
};
function Yae(t, e, n) {
  let r = new Gae();
  return te.compare(t, e, n, r), r.changes;
}
function Kae(t, e) {
  for (let n = t; n && n != e; n = n.assignedSlot || n.parentNode)
    if (n.nodeType == 1 && n.contentEditable == "false")
      return !0;
  return !1;
}
function Jae(t, e, n = 1) {
  let r = t.charCategorizer(e), i = t.doc.lineAt(e), s = e - i.from;
  if (i.length == 0)
    return C.cursor(e);
  s == 0 ? n = 1 : s == i.length && (n = -1);
  let o = s, l = s;
  n < 0 ? o = Qe(i.text, s, !1) : l = Qe(i.text, s);
  let c = r(i.text.slice(o, l));
  for (; o > 0; ) {
    let a = Qe(i.text, o, !1);
    if (r(i.text.slice(a, o)) != c)
      break;
    o = a;
  }
  for (; l < i.length; ) {
    let a = Qe(i.text, l);
    if (r(i.text.slice(l, a)) != c)
      break;
    l = a;
  }
  return C.range(o + i.from, l + i.from);
}
function Zae(t, e) {
  return e.left > t ? e.left - t : Math.max(0, t - e.right);
}
function Xae(t, e) {
  return e.top > t ? e.top - t : Math.max(0, t - e.bottom);
}
function Sh(t, e) {
  return t.top < e.bottom - 1 && t.bottom > e.top + 1;
}
function Gm(t, e) {
  return e < t.top ? { top: e, left: t.left, right: t.right, bottom: t.bottom } : t;
}
function Ym(t, e) {
  return e > t.bottom ? { top: t.top, left: t.left, right: t.right, bottom: e } : t;
}
function Xu(t, e, n) {
  let r, i, s, o, l = !1, c, a, h, u;
  for (let p = t.firstChild; p; p = p.nextSibling) {
    let g = so(p);
    for (let m = 0; m < g.length; m++) {
      let y = g[m];
      i && Sh(i, y) && (y = Gm(Ym(y, i.bottom), i.top));
      let b = Zae(e, y), _ = Xae(n, y);
      if (b == 0 && _ == 0)
        return p.nodeType == 3 ? Km(p, e, n) : Xu(p, e, n);
      if (!r || o > _ || o == _ && s > b) {
        r = p, i = y, s = b, o = _;
        let w = _ ? n < y.top ? -1 : 1 : b ? e < y.left ? -1 : 1 : 0;
        l = !w || (w > 0 ? m < g.length - 1 : m > 0);
      }
      b == 0 ? n > y.bottom && (!h || h.bottom < y.bottom) ? (c = p, h = y) : n < y.top && (!u || u.top > y.top) && (a = p, u = y) : h && Sh(h, y) ? h = Ym(h, y.bottom) : u && Sh(u, y) && (u = Gm(u, y.top));
    }
  }
  if (h && h.bottom >= n ? (r = c, i = h) : u && u.top <= n && (r = a, i = u), !r)
    return { node: t, offset: 0 };
  let f = Math.max(i.left, Math.min(i.right, e));
  if (r.nodeType == 3)
    return Km(r, f, n);
  if (l && r.contentEditable != "false")
    return Xu(r, f, n);
  let d = Array.prototype.indexOf.call(t.childNodes, r) + (e >= (i.left + i.right) / 2 ? 1 : 0);
  return { node: t, offset: d };
}
function Km(t, e, n) {
  let r = t.nodeValue.length, i = -1, s = 1e9, o = 0;
  for (let l = 0; l < r; l++) {
    let c = Xr(t, l, l + 1).getClientRects();
    for (let a = 0; a < c.length; a++) {
      let h = c[a];
      if (h.top == h.bottom)
        continue;
      o || (o = e - h.left);
      let u = (h.top > n ? h.top - n : n - h.bottom) - 1;
      if (h.left - 1 <= e && h.right + 1 >= e && u < s) {
        let f = e >= (h.left + h.right) / 2, d = f;
        if ((P.chrome || P.gecko) && Xr(t, l).getBoundingClientRect().left == h.right && (d = !f), u <= 0)
          return { node: t, offset: l + (d ? 1 : 0) };
        i = l + (d ? 1 : 0), s = u;
      }
    }
  }
  return { node: t, offset: i > -1 ? i : o > 0 ? t.nodeValue.length : 0 };
}
function $w(t, e, n, r = -1) {
  var i, s;
  let o = t.contentDOM.getBoundingClientRect(), l = o.top + t.viewState.paddingTop, c, { docHeight: a } = t.viewState, { x: h, y: u } = e, f = u - l;
  if (f < 0)
    return 0;
  if (f > a)
    return t.state.doc.length;
  for (let w = t.viewState.heightOracle.textHeight / 2, x = !1; c = t.elementAtHeight(f), c.type != Se.Text; )
    for (; f = r > 0 ? c.bottom + w : c.top - w, !(f >= 0 && f <= a); ) {
      if (x)
        return n ? null : 0;
      x = !0, r = -r;
    }
  u = l + f;
  let d = c.from;
  if (d < t.viewport.from)
    return t.viewport.from == 0 ? 0 : n ? null : Jm(t, o, c, h, u);
  if (d > t.viewport.to)
    return t.viewport.to == t.state.doc.length ? t.state.doc.length : n ? null : Jm(t, o, c, h, u);
  let p = t.dom.ownerDocument, g = t.root.elementFromPoint ? t.root : p, m = g.elementFromPoint(h, u);
  m && !t.contentDOM.contains(m) && (m = null), m || (h = Math.max(o.left + 1, Math.min(o.right - 1, h)), m = g.elementFromPoint(h, u), m && !t.contentDOM.contains(m) && (m = null));
  let y, b = -1;
  if (m && ((i = t.docView.nearest(m)) === null || i === void 0 ? void 0 : i.isEditable) != !1) {
    if (p.caretPositionFromPoint) {
      let w = p.caretPositionFromPoint(h, u);
      w && ({ offsetNode: y, offset: b } = w);
    } else if (p.caretRangeFromPoint) {
      let w = p.caretRangeFromPoint(h, u);
      w && ({ startContainer: y, startOffset: b } = w, (!t.contentDOM.contains(y) || P.safari && Qae(y, b, h) || P.chrome && ehe(y, b, h)) && (y = void 0));
    }
  }
  if (!y || !t.docView.dom.contains(y)) {
    let w = ot.find(t.docView, d);
    if (!w)
      return f > c.top + c.height / 2 ? c.to : c.from;
    ({ node: y, offset: b } = Xu(w.dom, h, u));
  }
  let _ = t.docView.nearest(y);
  if (!_)
    return null;
  if (_.isWidget && ((s = _.dom) === null || s === void 0 ? void 0 : s.nodeType) == 1) {
    let w = _.dom.getBoundingClientRect();
    return e.y < w.top || e.y <= w.bottom && e.x <= (w.left + w.right) / 2 ? _.posAtStart : _.posAtEnd;
  } else
    return _.localPosFromDOM(y, b) + _.posAtStart;
}
function Jm(t, e, n, r, i) {
  let s = Math.round((r - e.left) * t.defaultCharacterWidth);
  if (t.lineWrapping && n.height > t.defaultLineHeight * 1.5) {
    let l = t.viewState.heightOracle.textHeight, c = Math.floor((i - n.top - (t.defaultLineHeight - l) * 0.5) / l);
    s += c * t.viewState.heightOracle.lineLength;
  }
  let o = t.state.sliceDoc(n.from, n.to);
  return n.from + Bu(o, s, t.state.tabSize);
}
function Qae(t, e, n) {
  let r;
  if (t.nodeType != 3 || e != (r = t.nodeValue.length))
    return !1;
  for (let i = t.nextSibling; i; i = i.nextSibling)
    if (i.nodeType != 1 || i.nodeName != "BR")
      return !1;
  return Xr(t, r - 1, r).getBoundingClientRect().left > n;
}
function ehe(t, e, n) {
  if (e != 0)
    return !1;
  for (let i = t; ; ) {
    let s = i.parentNode;
    if (!s || s.nodeType != 1 || s.firstChild != i)
      return !1;
    if (s.classList.contains("cm-line"))
      break;
    i = s;
  }
  let r = t.nodeType == 1 ? t.getBoundingClientRect() : Xr(t, 0, Math.max(t.nodeValue.length, 1)).getBoundingClientRect();
  return n - r.left > 5;
}
function Qu(t, e) {
  let n = t.lineBlockAt(e);
  if (Array.isArray(n.type)) {
    for (let r of n.type)
      if (r.to > e || r.to == e && (r.to == n.to || r.type == Se.Text))
        return r;
  }
  return n;
}
function the(t, e, n, r) {
  let i = Qu(t, e.head), s = !r || i.type != Se.Text || !(t.lineWrapping || i.widgetLineBreaks) ? null : t.coordsAtPos(e.assoc < 0 && e.head > i.from ? e.head - 1 : e.head);
  if (s) {
    let o = t.dom.getBoundingClientRect(), l = t.textDirectionAt(i.from), c = t.posAtCoords({
      x: n == (l == _e.LTR) ? o.right - 1 : o.left + 1,
      y: (s.top + s.bottom) / 2
    });
    if (c != null)
      return C.cursor(c, n ? -1 : 1);
  }
  return C.cursor(n ? i.to : i.from, n ? -1 : 1);
}
function Zm(t, e, n, r) {
  let i = t.state.doc.lineAt(e.head), s = t.bidiSpans(i), o = t.textDirectionAt(i.from);
  for (let l = e, c = null; ; ) {
    let a = Vae(i, s, o, l, n), h = Fw;
    if (!a) {
      if (i.number == (n ? t.state.doc.lines : 1))
        return l;
      h = `
`, i = t.state.doc.line(i.number + (n ? 1 : -1)), s = t.bidiSpans(i), a = C.cursor(n ? i.from : i.to);
    }
    if (c) {
      if (!c(h))
        return l;
    } else {
      if (!r)
        return a;
      c = r(h);
    }
    l = a;
  }
}
function nhe(t, e, n) {
  let r = t.state.charCategorizer(e), i = r(n);
  return (s) => {
    let o = r(s);
    return i == xe.Space && (i = o), i == o;
  };
}
function rhe(t, e, n, r) {
  let i = e.head, s = n ? 1 : -1;
  if (i == (n ? t.state.doc.length : 0))
    return C.cursor(i, e.assoc);
  let o = e.goalColumn, l, c = t.contentDOM.getBoundingClientRect(), a = t.coordsAtPos(i), h = t.documentTop;
  if (a)
    o == null && (o = a.left - c.left), l = s < 0 ? a.top : a.bottom;
  else {
    let d = t.viewState.lineBlockAt(i);
    o == null && (o = Math.min(c.right - c.left, t.defaultCharacterWidth * (i - d.from))), l = (s < 0 ? d.top : d.bottom) + h;
  }
  let u = c.left + o, f = r != null ? r : t.viewState.heightOracle.textHeight >> 1;
  for (let d = 0; ; d += 10) {
    let p = l + (f + d) * s, g = $w(t, { x: u, y: p }, !1, s);
    if (p < c.top || p > c.bottom || (s < 0 ? g < i : g > i))
      return C.cursor(g, e.assoc, void 0, o);
  }
}
function ql(t, e, n) {
  for (; ; ) {
    let r = 0;
    for (let i of t)
      i.between(e - 1, e + 1, (s, o, l) => {
        if (e > s && e < o) {
          let c = r || n || (e - s < o - e ? -1 : 1);
          e = c < 0 ? s : o, r = c;
        }
      });
    if (!r)
      return e;
  }
}
function Ch(t, e, n) {
  let r = ql(t.state.facet(_d).map((i) => i(t)), n.from, e.head > n.from ? -1 : 1);
  return r == n.from ? n : C.cursor(r, r < n.from ? 1 : -1);
}
class ihe {
  setSelectionOrigin(e) {
    this.lastSelectionOrigin = e, this.lastSelectionTime = Date.now();
  }
  constructor(e) {
    this.lastKeyCode = 0, this.lastKeyTime = 0, this.lastTouchTime = 0, this.lastFocusTime = 0, this.lastScrollTop = 0, this.lastScrollLeft = 0, this.chromeScrollHack = -1, this.pendingIOSKey = void 0, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastEscPress = 0, this.lastContextMenu = 0, this.scrollHandlers = [], this.registeredEvents = [], this.customHandlers = [], this.composing = -1, this.compositionFirstChange = null, this.compositionEndedAt = 0, this.compositionPendingKey = !1, this.compositionPendingChange = !1, this.mouseSelection = null;
    let n = (r, i) => {
      this.ignoreDuringComposition(i) || i.type == "keydown" && this.keydown(e, i) || (this.mustFlushObserver(i) && e.observer.forceFlush(), this.runCustomHandlers(i.type, e, i) ? i.preventDefault() : r(e, i));
    };
    for (let r in Le) {
      let i = Le[r];
      e.contentDOM.addEventListener(r, (s) => {
        Xm(e, s) && n(i, s);
      }, ef[r]), this.registeredEvents.push(r);
    }
    e.scrollDOM.addEventListener("mousedown", (r) => {
      if (r.target == e.scrollDOM && r.clientY > e.contentDOM.getBoundingClientRect().bottom && (n(Le.mousedown, r), !r.defaultPrevented && r.button == 2)) {
        let i = e.contentDOM.style.minHeight;
        e.contentDOM.style.minHeight = "100%", setTimeout(() => e.contentDOM.style.minHeight = i, 200);
      }
    }), e.scrollDOM.addEventListener("drop", (r) => {
      r.target == e.scrollDOM && r.clientY > e.contentDOM.getBoundingClientRect().bottom && n(Le.drop, r);
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
    for (let s of n)
      if (i = (r = s.update(e).spec) === null || r === void 0 ? void 0 : r.domEventHandlers) {
        this.customHandlers.push({ plugin: s.value, handlers: i });
        for (let o in i)
          this.registeredEvents.indexOf(o) < 0 && o != "scroll" && (this.registeredEvents.push(o), e.contentDOM.addEventListener(o, (l) => {
            !Xm(e, l) || this.runCustomHandlers(o, e, l) && l.preventDefault();
          }));
      }
  }
  runCustomHandlers(e, n, r) {
    for (let i of this.customHandlers) {
      let s = i.handlers[e];
      if (s)
        try {
          if (s.call(i.plugin, r, n) || r.defaultPrevented)
            return !0;
        } catch (o) {
          Lt(n.state, o);
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
        } catch (s) {
          Lt(e.state, s);
        }
    }
  }
  keydown(e, n) {
    if (this.lastKeyCode = n.keyCode, this.lastKeyTime = Date.now(), n.keyCode == 9 && Date.now() < this.lastEscPress + 2e3)
      return !0;
    if (n.keyCode != 27 && zw.indexOf(n.keyCode) < 0 && (e.inputState.lastEscPress = 0), P.android && P.chrome && !n.synthetic && (n.keyCode == 13 || n.keyCode == 8))
      return e.observer.delayAndroidKey(n.key, n.keyCode), !0;
    let r;
    return P.ios && !n.synthetic && !n.altKey && !n.metaKey && ((r = Hw.find((i) => i.keyCode == n.keyCode)) && !n.ctrlKey || she.indexOf(n.key) > -1 && n.ctrlKey && !n.shiftKey) ? (this.pendingIOSKey = r || n, setTimeout(() => this.flushIOSKey(e), 250), !0) : !1;
  }
  flushIOSKey(e) {
    let n = this.pendingIOSKey;
    return n ? (this.pendingIOSKey = void 0, Ri(e.contentDOM, n.key, n.keyCode)) : !1;
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
const Hw = [
  { key: "Backspace", keyCode: 8, inputType: "deleteContentBackward" },
  { key: "Enter", keyCode: 13, inputType: "insertParagraph" },
  { key: "Enter", keyCode: 13, inputType: "insertLineBreak" },
  { key: "Delete", keyCode: 46, inputType: "deleteContentForward" }
], she = "dthko", zw = [16, 17, 18, 20, 91, 92, 224, 225], il = 6;
function sl(t) {
  return Math.max(0, t) * 0.7 + 8;
}
function ohe(t, e) {
  return Math.max(Math.abs(t.clientX - e.clientX), Math.abs(t.clientY - e.clientY));
}
class lhe {
  constructor(e, n, r, i) {
    this.view = e, this.startEvent = n, this.style = r, this.mustSelect = i, this.scrollSpeed = { x: 0, y: 0 }, this.scrolling = -1, this.lastEvent = n, this.scrollParent = Cae(e.contentDOM), this.atoms = e.state.facet(_d).map((o) => o(e));
    let s = e.contentDOM.ownerDocument;
    s.addEventListener("mousemove", this.move = this.move.bind(this)), s.addEventListener("mouseup", this.up = this.up.bind(this)), this.extend = n.shiftKey, this.multiple = e.state.facet(X.allowMultipleSelections) && che(e, n), this.dragging = hhe(e, n) && jw(n) == 1 ? null : !1;
  }
  start(e) {
    this.dragging === !1 && (e.preventDefault(), this.select(e));
  }
  move(e) {
    var n;
    if (e.buttons == 0)
      return this.destroy();
    if (this.dragging || this.dragging == null && ohe(this.startEvent, e) < 10)
      return;
    this.select(this.lastEvent = e);
    let r = 0, i = 0, s = ((n = this.scrollParent) === null || n === void 0 ? void 0 : n.getBoundingClientRect()) || { left: 0, top: 0, right: this.view.win.innerWidth, bottom: this.view.win.innerHeight }, o = Lw(this.view);
    e.clientX - o.left <= s.left + il ? r = -sl(s.left - e.clientX) : e.clientX + o.right >= s.right - il && (r = sl(e.clientX - s.right)), e.clientY - o.top <= s.top + il ? i = -sl(s.top - e.clientY) : e.clientY + o.bottom >= s.bottom - il && (i = sl(e.clientY - s.bottom)), this.setScrollSpeed(r, i);
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
      let i = e.ranges[r], s = null;
      if (i.empty) {
        let o = ql(this.atoms, i.from, 0);
        o != i.from && (s = C.cursor(o, -1));
      } else {
        let o = ql(this.atoms, i.from, -1), l = ql(this.atoms, i.to, 1);
        (o != i.from || l != i.to) && (s = C.range(i.from == i.anchor ? o : l, i.from == i.head ? o : l));
      }
      s && (n || (n = e.ranges.slice()), n[r] = s);
    }
    return n ? C.create(n, e.mainIndex) : e;
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
function che(t, e) {
  let n = t.state.facet(xw);
  return n.length ? n[0](e) : P.mac ? e.metaKey : e.ctrlKey;
}
function ahe(t, e) {
  let n = t.state.facet(kw);
  return n.length ? n[0](e) : P.mac ? !e.altKey : !e.ctrlKey;
}
function hhe(t, e) {
  let { main: n } = t.state.selection;
  if (n.empty)
    return !1;
  let r = uc(t.root);
  if (!r || r.rangeCount == 0)
    return !0;
  let i = r.getRangeAt(0).getClientRects();
  for (let s = 0; s < i.length; s++) {
    let o = i[s];
    if (o.left <= e.clientX && o.right >= e.clientX && o.top <= e.clientY && o.bottom >= e.clientY)
      return !0;
  }
  return !1;
}
function Xm(t, e) {
  if (!e.bubbles)
    return !0;
  if (e.defaultPrevented)
    return !1;
  for (let n = e.target, r; n != t.contentDOM; n = n.parentNode)
    if (!n || n.nodeType == 11 || (r = ge.get(n)) && r.ignoreEvent(e))
      return !1;
  return !0;
}
const Le = /* @__PURE__ */ Object.create(null), ef = /* @__PURE__ */ Object.create(null), Vw = P.ie && P.ie_version < 15 || P.ios && P.webkit_version < 604;
function uhe(t) {
  let e = t.dom.parentNode;
  if (!e)
    return;
  let n = e.appendChild(document.createElement("textarea"));
  n.style.cssText = "position: fixed; left: -10000px; top: 10px", n.focus(), setTimeout(() => {
    t.focus(), n.remove(), Uw(t, n.value);
  }, 50);
}
function Uw(t, e) {
  let { state: n } = t, r, i = 1, s = n.toText(e), o = s.lines == n.selection.ranges.length;
  if (tf != null && n.selection.ranges.every((c) => c.empty) && tf == s.toString()) {
    let c = -1;
    r = n.changeByRange((a) => {
      let h = n.doc.lineAt(a.from);
      if (h.from == c)
        return { range: a };
      c = h.from;
      let u = n.toText((o ? s.line(i++).text : e) + n.lineBreak);
      return {
        changes: { from: h.from, insert: u },
        range: C.cursor(a.from + u.length)
      };
    });
  } else
    o ? r = n.changeByRange((c) => {
      let a = s.line(i++);
      return {
        changes: { from: c.from, to: c.to, insert: a.text },
        range: C.cursor(c.from + a.length)
      };
    }) : r = n.replaceSelection(s);
  t.dispatch(r, {
    userEvent: "input.paste",
    scrollIntoView: !0
  });
}
Le.keydown = (t, e) => {
  t.inputState.setSelectionOrigin("select"), e.keyCode == 27 && (t.inputState.lastEscPress = Date.now());
};
Le.touchstart = (t, e) => {
  t.inputState.lastTouchTime = Date.now(), t.inputState.setSelectionOrigin("select.pointer");
};
Le.touchmove = (t) => {
  t.inputState.setSelectionOrigin("select.pointer");
};
ef.touchstart = ef.touchmove = { passive: !0 };
Le.mousedown = (t, e) => {
  if (t.observer.flush(), t.inputState.lastTouchTime > Date.now() - 2e3)
    return;
  let n = null;
  for (let r of t.state.facet(_w))
    if (n = r(t, e), n)
      break;
  if (!n && e.button == 0 && (n = phe(t, e)), n) {
    let r = !t.hasFocus;
    t.inputState.startMouseSelection(new lhe(t, e, n, r)), r && t.observer.ignore(() => cw(t.contentDOM)), t.inputState.mouseSelection && t.inputState.mouseSelection.start(e);
  }
};
function Qm(t, e, n, r) {
  if (r == 1)
    return C.cursor(e, n);
  if (r == 2)
    return Jae(t.state, e, n);
  {
    let i = ot.find(t.docView, e), s = t.state.doc.lineAt(i ? i.posAtEnd : e), o = i ? i.posAtStart : s.from, l = i ? i.posAtEnd : s.to;
    return l < t.state.doc.length && l == s.to && l++, C.range(o, l);
  }
}
let Ww = (t, e) => t >= e.top && t <= e.bottom, e0 = (t, e, n) => Ww(e, n) && t >= n.left && t <= n.right;
function fhe(t, e, n, r) {
  let i = ot.find(t.docView, e);
  if (!i)
    return 1;
  let s = e - i.posAtStart;
  if (s == 0)
    return 1;
  if (s == i.length)
    return -1;
  let o = i.coordsAt(s, -1);
  if (o && e0(n, r, o))
    return -1;
  let l = i.coordsAt(s, 1);
  return l && e0(n, r, l) ? 1 : o && Ww(r, o) ? -1 : 1;
}
function t0(t, e) {
  let n = t.posAtCoords({ x: e.clientX, y: e.clientY }, !1);
  return { pos: n, bias: fhe(t, n, e.clientX, e.clientY) };
}
const dhe = P.ie && P.ie_version <= 11;
let n0 = null, r0 = 0, i0 = 0;
function jw(t) {
  if (!dhe)
    return t.detail;
  let e = n0, n = i0;
  return n0 = t, i0 = Date.now(), r0 = !e || n > Date.now() - 400 && Math.abs(e.clientX - t.clientX) < 2 && Math.abs(e.clientY - t.clientY) < 2 ? (r0 + 1) % 3 : 1;
}
function phe(t, e) {
  let n = t0(t, e), r = jw(e), i = t.state.selection;
  return {
    update(s) {
      s.docChanged && (n.pos = s.changes.mapPos(n.pos), i = i.map(s.changes));
    },
    get(s, o, l) {
      let c = t0(t, s), a, h = Qm(t, c.pos, c.bias, r);
      if (n.pos != c.pos && !o) {
        let u = Qm(t, n.pos, n.bias, r), f = Math.min(u.from, h.from), d = Math.max(u.to, h.to);
        h = f < h.from ? C.range(f, d) : C.range(d, f);
      }
      return o ? i.replaceRange(i.main.extend(h.from, h.to)) : l && r == 1 && i.ranges.length > 1 && (a = ghe(i, c.pos)) ? a : l ? i.addRange(h) : C.create([h]);
    }
  };
}
function ghe(t, e) {
  for (let n = 0; n < t.ranges.length; n++) {
    let { from: r, to: i } = t.ranges[n];
    if (r <= e && i >= e)
      return C.create(t.ranges.slice(0, n).concat(t.ranges.slice(n + 1)), t.mainIndex == n ? 0 : t.mainIndex - (t.mainIndex > n ? 1 : 0));
  }
  return null;
}
Le.dragstart = (t, e) => {
  let { selection: { main: n } } = t.state, { mouseSelection: r } = t.inputState;
  r && (r.dragging = n), e.dataTransfer && (e.dataTransfer.setData("Text", t.state.sliceDoc(n.from, n.to)), e.dataTransfer.effectAllowed = "copyMove");
};
function s0(t, e, n, r) {
  if (!n)
    return;
  let i = t.posAtCoords({ x: e.clientX, y: e.clientY }, !1);
  e.preventDefault();
  let { mouseSelection: s } = t.inputState, o = r && s && s.dragging && ahe(t, e) ? { from: s.dragging.from, to: s.dragging.to } : null, l = { from: i, insert: n }, c = t.state.changes(o ? [o, l] : l);
  t.focus(), t.dispatch({
    changes: c,
    selection: { anchor: c.mapPos(i, -1), head: c.mapPos(i, 1) },
    userEvent: o ? "move.drop" : "input.drop"
  });
}
Le.drop = (t, e) => {
  if (!e.dataTransfer)
    return;
  if (t.state.readOnly)
    return e.preventDefault();
  let n = e.dataTransfer.files;
  if (n && n.length) {
    e.preventDefault();
    let r = Array(n.length), i = 0, s = () => {
      ++i == n.length && s0(t, e, r.filter((o) => o != null).join(t.state.lineBreak), !1);
    };
    for (let o = 0; o < n.length; o++) {
      let l = new FileReader();
      l.onerror = s, l.onload = () => {
        /[\x00-\x08\x0e-\x1f]{2}/.test(l.result) || (r[o] = l.result), s();
      }, l.readAsText(n[o]);
    }
  } else
    s0(t, e, e.dataTransfer.getData("Text"), !0);
};
Le.paste = (t, e) => {
  if (t.state.readOnly)
    return e.preventDefault();
  t.observer.flush();
  let n = Vw ? null : e.clipboardData;
  n ? (Uw(t, n.getData("text/plain") || n.getData("text/uri-text")), e.preventDefault()) : uhe(t);
};
function mhe(t, e) {
  let n = t.dom.parentNode;
  if (!n)
    return;
  let r = n.appendChild(document.createElement("textarea"));
  r.style.cssText = "position: fixed; left: -10000px; top: 10px", r.value = e, r.focus(), r.selectionEnd = e.length, r.selectionStart = 0, setTimeout(() => {
    r.remove(), t.focus();
  }, 50);
}
function yhe(t) {
  let e = [], n = [], r = !1;
  for (let i of t.selection.ranges)
    i.empty || (e.push(t.sliceDoc(i.from, i.to)), n.push(i));
  if (!e.length) {
    let i = -1;
    for (let { from: s } of t.selection.ranges) {
      let o = t.doc.lineAt(s);
      o.number > i && (e.push(o.text), n.push({ from: o.from, to: Math.min(t.doc.length, o.to + 1) })), i = o.number;
    }
    r = !0;
  }
  return { text: e.join(t.lineBreak), ranges: n, linewise: r };
}
let tf = null;
Le.copy = Le.cut = (t, e) => {
  let { text: n, ranges: r, linewise: i } = yhe(t.state);
  if (!n && !i)
    return;
  tf = i ? n : null;
  let s = Vw ? null : e.clipboardData;
  s ? (e.preventDefault(), s.clearData(), s.setData("text/plain", n)) : mhe(t, n), e.type == "cut" && !t.state.readOnly && t.dispatch({
    changes: r,
    scrollIntoView: !0,
    userEvent: "delete.cut"
  });
};
const Gw = /* @__PURE__ */ Xt.define();
function Yw(t, e) {
  let n = [];
  for (let r of t.facet(Aw)) {
    let i = r(t, e);
    i && n.push(i);
  }
  return n ? t.update({ effects: n, annotations: Gw.of(!0) }) : null;
}
function Kw(t) {
  setTimeout(() => {
    let e = t.hasFocus;
    if (e != t.inputState.notifiedFocused) {
      let n = Yw(t.state, e);
      n ? t.dispatch(n) : t.update([]);
    }
  }, 10);
}
Le.focus = (t) => {
  t.inputState.lastFocusTime = Date.now(), !t.scrollDOM.scrollTop && (t.inputState.lastScrollTop || t.inputState.lastScrollLeft) && (t.scrollDOM.scrollTop = t.inputState.lastScrollTop, t.scrollDOM.scrollLeft = t.inputState.lastScrollLeft), Kw(t);
};
Le.blur = (t) => {
  t.observer.clearSelectionRange(), Kw(t);
};
Le.compositionstart = Le.compositionupdate = (t) => {
  t.inputState.compositionFirstChange == null && (t.inputState.compositionFirstChange = !0), t.inputState.composing < 0 && (t.inputState.composing = 0);
};
Le.compositionend = (t) => {
  t.inputState.composing = -1, t.inputState.compositionEndedAt = Date.now(), t.inputState.compositionPendingKey = !0, t.inputState.compositionPendingChange = t.observer.pendingRecords().length > 0, t.inputState.compositionFirstChange = null, P.chrome && P.android ? t.observer.flushSoon() : t.inputState.compositionPendingChange ? Promise.resolve().then(() => t.observer.flush()) : setTimeout(() => {
    t.inputState.composing < 0 && t.docView.hasComposition && t.update([]);
  }, 50);
};
Le.contextmenu = (t) => {
  t.inputState.lastContextMenu = Date.now();
};
Le.beforeinput = (t, e) => {
  var n;
  let r;
  if (P.chrome && P.android && (r = Hw.find((i) => i.inputType == e.inputType)) && (t.observer.delayAndroidKey(r.key, r.keyCode), r.key == "Backspace" || r.key == "Delete")) {
    let i = ((n = window.visualViewport) === null || n === void 0 ? void 0 : n.height) || 0;
    setTimeout(() => {
      var s;
      (((s = window.visualViewport) === null || s === void 0 ? void 0 : s.height) || 0) > i + 10 && t.hasFocus && (t.contentDOM.blur(), t.focus());
    }, 100);
  }
};
const o0 = ["pre-wrap", "normal", "pre-line", "break-spaces"];
class bhe {
  constructor(e) {
    this.lineWrapping = e, this.doc = ee.empty, this.heightSamples = {}, this.lineHeight = 14, this.charWidth = 7, this.textHeight = 14, this.lineLength = 30, this.heightChanged = !1;
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
    return o0.indexOf(e) > -1 != this.lineWrapping;
  }
  mustRefreshForHeights(e) {
    let n = !1;
    for (let r = 0; r < e.length; r++) {
      let i = e[r];
      i < 0 ? r++ : this.heightSamples[Math.floor(i * 10)] || (n = !0, this.heightSamples[Math.floor(i * 10)] = !0);
    }
    return n;
  }
  refresh(e, n, r, i, s, o) {
    let l = o0.indexOf(e) > -1, c = Math.round(n) != Math.round(this.lineHeight) || this.lineWrapping != l;
    if (this.lineWrapping = l, this.lineHeight = n, this.charWidth = r, this.textHeight = i, this.lineLength = s, c) {
      this.heightSamples = {};
      for (let a = 0; a < o.length; a++) {
        let h = o[a];
        h < 0 ? a++ : this.heightSamples[Math.floor(h * 10)] = !0;
      }
    }
    return c;
  }
}
class whe {
  constructor(e, n) {
    this.from = e, this.heights = n, this.index = 0;
  }
  get more() {
    return this.index < this.heights.length;
  }
}
class an {
  constructor(e, n, r, i, s) {
    this.from = e, this.length = n, this.top = r, this.height = i, this._content = s;
  }
  get type() {
    return typeof this._content == "number" ? Se.Text : Array.isArray(this._content) ? this._content : this._content.type;
  }
  get to() {
    return this.from + this.length;
  }
  get bottom() {
    return this.top + this.height;
  }
  get widget() {
    return this._content instanceof yr ? this._content.widget : null;
  }
  get widgetLineBreaks() {
    return typeof this._content == "number" ? this._content : 0;
  }
  join(e) {
    let n = (Array.isArray(this._content) ? this._content : [this]).concat(Array.isArray(e._content) ? e._content : [e]);
    return new an(this.from, this.length + e.length, this.top, this.height + e.height, n);
  }
}
var be = /* @__PURE__ */ function(t) {
  return t[t.ByPos = 0] = "ByPos", t[t.ByHeight = 1] = "ByHeight", t[t.ByPosNoHeight = 2] = "ByPosNoHeight", t;
}(be || (be = {}));
const $l = 1e-3;
class ht {
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
    this.height != n && (Math.abs(this.height - n) > $l && (e.heightChanged = !0), this.height = n);
  }
  replace(e, n, r) {
    return ht.of(r);
  }
  decomposeLeft(e, n) {
    n.push(this);
  }
  decomposeRight(e, n) {
    n.push(this);
  }
  applyChanges(e, n, r, i) {
    let s = this, o = r.doc;
    for (let l = i.length - 1; l >= 0; l--) {
      let { fromA: c, toA: a, fromB: h, toB: u } = i[l], f = s.lineAt(c, be.ByPosNoHeight, r.setDoc(n), 0, 0), d = f.to >= a ? f : s.lineAt(a, be.ByPosNoHeight, r, 0, 0);
      for (u += d.to - a, a = d.to; l > 0 && f.from <= i[l - 1].toA; )
        c = i[l - 1].fromA, h = i[l - 1].fromB, l--, c < f.from && (f = s.lineAt(c, be.ByPosNoHeight, r, 0, 0));
      h += f.from - c, c = f.from;
      let p = Sd.build(r.setDoc(o), e, h, u);
      s = s.replace(c, a, p);
    }
    return s.updateHeight(r, 0);
  }
  static empty() {
    return new xt(0, 0);
  }
  static of(e) {
    if (e.length == 1)
      return e[0];
    let n = 0, r = e.length, i = 0, s = 0;
    for (; ; )
      if (n == r)
        if (i > s * 2) {
          let l = e[n - 1];
          l.break ? e.splice(--n, 1, l.left, null, l.right) : e.splice(--n, 1, l.left, l.right), r += 1 + l.break, i -= l.size;
        } else if (s > i * 2) {
          let l = e[r];
          l.break ? e.splice(r, 1, l.left, null, l.right) : e.splice(r, 1, l.left, l.right), r += 2 + l.break, s -= l.size;
        } else
          break;
      else if (i < s) {
        let l = e[n++];
        l && (i += l.size);
      } else {
        let l = e[--r];
        l && (s += l.size);
      }
    let o = 0;
    return e[n - 1] == null ? (o = 1, n--) : e[n] == null && (o = 1, r++), new vhe(ht.of(e.slice(0, n)), o, ht.of(e.slice(r)));
  }
}
ht.prototype.size = 1;
class Jw extends ht {
  constructor(e, n, r) {
    super(e, n), this.deco = r;
  }
  blockAt(e, n, r, i) {
    return new an(i, this.length, r, this.height, this.deco || 0);
  }
  lineAt(e, n, r, i, s) {
    return this.blockAt(0, r, i, s);
  }
  forEachLine(e, n, r, i, s, o) {
    e <= s + this.length && n >= s && o(this.blockAt(0, r, i, s));
  }
  updateHeight(e, n = 0, r = !1, i) {
    return i && i.from <= n && i.more && this.setHeight(e, i.heights[i.index++]), this.outdated = !1, this;
  }
  toString() {
    return `block(${this.length})`;
  }
}
class xt extends Jw {
  constructor(e, n) {
    super(e, n, null), this.collapsed = 0, this.widgetHeight = 0, this.breaks = 0;
  }
  blockAt(e, n, r, i) {
    return new an(i, this.length, r, this.height, this.breaks);
  }
  replace(e, n, r) {
    let i = r[0];
    return r.length == 1 && (i instanceof xt || i instanceof ze && i.flags & 4) && Math.abs(this.length - i.length) < 10 ? (i instanceof ze ? i = new xt(i.length, this.height) : i.height = this.height, this.outdated || (i.outdated = !1), i) : ht.of(r);
  }
  updateHeight(e, n = 0, r = !1, i) {
    return i && i.from <= n && i.more ? this.setHeight(e, i.heights[i.index++]) : (r || this.outdated) && this.setHeight(e, Math.max(this.widgetHeight, e.heightForLine(this.length - this.collapsed)) + this.breaks * e.lineHeight), this.outdated = !1, this;
  }
  toString() {
    return `line(${this.length}${this.collapsed ? -this.collapsed : ""}${this.widgetHeight ? ":" + this.widgetHeight : ""})`;
  }
}
class ze extends ht {
  constructor(e) {
    super(e, 0);
  }
  heightMetrics(e, n) {
    let r = e.doc.lineAt(n).number, i = e.doc.lineAt(n + this.length).number, s = i - r + 1, o, l = 0;
    if (e.lineWrapping) {
      let c = Math.min(this.height, e.lineHeight * s);
      o = c / s, this.length > s + 1 && (l = (this.height - c) / (this.length - s - 1));
    } else
      o = this.height / s;
    return { firstLine: r, lastLine: i, perLine: o, perChar: l };
  }
  blockAt(e, n, r, i) {
    let { firstLine: s, lastLine: o, perLine: l, perChar: c } = this.heightMetrics(n, i);
    if (n.lineWrapping) {
      let a = i + Math.round(Math.max(0, Math.min(1, (e - r) / this.height)) * this.length), h = n.doc.lineAt(a), u = l + h.length * c, f = Math.max(r, e - u / 2);
      return new an(h.from, h.length, f, u, 0);
    } else {
      let a = Math.max(0, Math.min(o - s, Math.floor((e - r) / l))), { from: h, length: u } = n.doc.line(s + a);
      return new an(h, u, r + l * a, l, 0);
    }
  }
  lineAt(e, n, r, i, s) {
    if (n == be.ByHeight)
      return this.blockAt(e, r, i, s);
    if (n == be.ByPosNoHeight) {
      let { from: d, to: p } = r.doc.lineAt(e);
      return new an(d, p - d, 0, 0, 0);
    }
    let { firstLine: o, perLine: l, perChar: c } = this.heightMetrics(r, s), a = r.doc.lineAt(e), h = l + a.length * c, u = a.number - o, f = i + l * u + c * (a.from - s - u);
    return new an(a.from, a.length, Math.max(i, Math.min(f, i + this.height - h)), h, 0);
  }
  forEachLine(e, n, r, i, s, o) {
    e = Math.max(e, s), n = Math.min(n, s + this.length);
    let { firstLine: l, perLine: c, perChar: a } = this.heightMetrics(r, s);
    for (let h = e, u = i; h <= n; ) {
      let f = r.doc.lineAt(h);
      if (h == e) {
        let p = f.number - l;
        u += c * p + a * (e - s - p);
      }
      let d = c + a * f.length;
      o(new an(f.from, f.length, u, d, 0)), u += d, h = f.to + 1;
    }
  }
  replace(e, n, r) {
    let i = this.length - n;
    if (i > 0) {
      let s = r[r.length - 1];
      s instanceof ze ? r[r.length - 1] = new ze(s.length + i) : r.push(null, new ze(i - 1));
    }
    if (e > 0) {
      let s = r[0];
      s instanceof ze ? r[0] = new ze(e + s.length) : r.unshift(new ze(e - 1), null);
    }
    return ht.of(r);
  }
  decomposeLeft(e, n) {
    n.push(new ze(e - 1), null);
  }
  decomposeRight(e, n) {
    n.push(null, new ze(this.length - e - 1));
  }
  updateHeight(e, n = 0, r = !1, i) {
    let s = n + this.length;
    if (i && i.from <= n + this.length && i.more) {
      let o = [], l = Math.max(n, i.from), c = -1;
      for (i.from > n && o.push(new ze(i.from - n - 1).updateHeight(e, n)); l <= s && i.more; ) {
        let h = e.doc.lineAt(l).length;
        o.length && o.push(null);
        let u = i.heights[i.index++];
        c == -1 ? c = u : Math.abs(u - c) >= $l && (c = -2);
        let f = new xt(h, u);
        f.outdated = !1, o.push(f), l += h + 1;
      }
      l <= s && o.push(null, new ze(s - l).updateHeight(e, l));
      let a = ht.of(o);
      return (c < 0 || Math.abs(a.height - this.height) >= $l || Math.abs(c - this.heightMetrics(e, n).perLine) >= $l) && (e.heightChanged = !0), a;
    } else
      (r || this.outdated) && (this.setHeight(e, e.heightForGap(n, n + this.length)), this.outdated = !1);
    return this;
  }
  toString() {
    return `gap(${this.length})`;
  }
}
class vhe extends ht {
  constructor(e, n, r) {
    super(e.length + n + r.length, e.height + r.height, n | (e.outdated || r.outdated ? 2 : 0)), this.left = e, this.right = r, this.size = e.size + r.size;
  }
  get break() {
    return this.flags & 1;
  }
  blockAt(e, n, r, i) {
    let s = r + this.left.height;
    return e < s ? this.left.blockAt(e, n, r, i) : this.right.blockAt(e, n, s, i + this.left.length + this.break);
  }
  lineAt(e, n, r, i, s) {
    let o = i + this.left.height, l = s + this.left.length + this.break, c = n == be.ByHeight ? e < o : e < l, a = c ? this.left.lineAt(e, n, r, i, s) : this.right.lineAt(e, n, r, o, l);
    if (this.break || (c ? a.to < l : a.from > l))
      return a;
    let h = n == be.ByPosNoHeight ? be.ByPosNoHeight : be.ByPos;
    return c ? a.join(this.right.lineAt(l, h, r, o, l)) : this.left.lineAt(l, h, r, i, s).join(a);
  }
  forEachLine(e, n, r, i, s, o) {
    let l = i + this.left.height, c = s + this.left.length + this.break;
    if (this.break)
      e < c && this.left.forEachLine(e, n, r, i, s, o), n >= c && this.right.forEachLine(e, n, r, l, c, o);
    else {
      let a = this.lineAt(c, be.ByPos, r, i, s);
      e < a.from && this.left.forEachLine(e, a.from - 1, r, i, s, o), a.to >= e && a.from <= n && o(a), n > a.to && this.right.forEachLine(a.to + 1, n, r, l, c, o);
    }
  }
  replace(e, n, r) {
    let i = this.left.length + this.break;
    if (n < i)
      return this.balanced(this.left.replace(e, n, r), this.right);
    if (e > this.left.length)
      return this.balanced(this.left, this.right.replace(e - i, n - i, r));
    let s = [];
    e > 0 && this.decomposeLeft(e, s);
    let o = s.length;
    for (let l of r)
      s.push(l);
    if (e > 0 && l0(s, o - 1), n < this.length) {
      let l = s.length;
      this.decomposeRight(n, s), l0(s, l);
    }
    return ht.of(s);
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
    return e.size > 2 * n.size || n.size > 2 * e.size ? ht.of(this.break ? [e, null, n] : [e, n]) : (this.left = e, this.right = n, this.height = e.height + n.height, this.outdated = e.outdated || n.outdated, this.size = e.size + n.size, this.length = e.length + this.break + n.length, this);
  }
  updateHeight(e, n = 0, r = !1, i) {
    let { left: s, right: o } = this, l = n + s.length + this.break, c = null;
    return i && i.from <= n + s.length && i.more ? c = s = s.updateHeight(e, n, r, i) : s.updateHeight(e, n, r), i && i.from <= l + o.length && i.more ? c = o = o.updateHeight(e, l, r, i) : o.updateHeight(e, l, r), c ? this.balanced(s, o) : (this.height = this.left.height + this.right.height, this.outdated = !1, this);
  }
  toString() {
    return this.left + (this.break ? " " : "-") + this.right;
  }
}
function l0(t, e) {
  let n, r;
  t[e] == null && (n = t[e - 1]) instanceof ze && (r = t[e + 1]) instanceof ze && t.splice(e - 1, 3, new ze(n.length + 1 + r.length));
}
const xhe = 5;
class Sd {
  constructor(e, n) {
    this.pos = e, this.oracle = n, this.nodes = [], this.lineStart = -1, this.lineEnd = -1, this.covering = null, this.writtenTo = e;
  }
  get isCovered() {
    return this.covering && this.nodes[this.nodes.length - 1] == this.covering;
  }
  span(e, n) {
    if (this.lineStart > -1) {
      let r = Math.min(n, this.lineEnd), i = this.nodes[this.nodes.length - 1];
      i instanceof xt ? i.length += r - this.pos : (r > this.pos || !this.isCovered) && this.nodes.push(new xt(r - this.pos, -1)), this.writtenTo = r, n > r && (this.nodes.push(null), this.writtenTo++, this.lineStart = -1);
    }
    this.pos = n;
  }
  point(e, n, r) {
    if (e < n || r.heightRelevant) {
      let i = r.widget ? r.widget.estimatedHeight : 0, s = r.widget ? r.widget.lineBreaks : 0;
      i < 0 && (i = this.oracle.lineHeight);
      let o = n - e;
      r.block ? this.addBlock(new Jw(o, i, r)) : (o || s || i >= xhe) && this.addLineDeco(i, s, o);
    } else
      n > e && this.span(e, n);
    this.lineEnd > -1 && this.lineEnd < this.pos && (this.lineEnd = this.oracle.doc.lineAt(this.pos).to);
  }
  enterLine() {
    if (this.lineStart > -1)
      return;
    let { from: e, to: n } = this.oracle.doc.lineAt(this.pos);
    this.lineStart = e, this.lineEnd = n, this.writtenTo < e && ((this.writtenTo < e - 1 || this.nodes[this.nodes.length - 1] == null) && this.nodes.push(this.blankContent(this.writtenTo, e - 1)), this.nodes.push(null)), this.pos > e && this.nodes.push(new xt(this.pos - e, -1)), this.writtenTo = this.pos;
  }
  blankContent(e, n) {
    let r = new ze(n - e);
    return this.oracle.doc.lineAt(e).to == n && (r.flags |= 4), r;
  }
  ensureLine() {
    this.enterLine();
    let e = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
    if (e instanceof xt)
      return e;
    let n = new xt(0, -1);
    return this.nodes.push(n), n;
  }
  addBlock(e) {
    var n;
    this.enterLine();
    let r = (n = e.deco) === null || n === void 0 ? void 0 : n.type;
    r == Se.WidgetAfter && !this.isCovered && this.ensureLine(), this.nodes.push(e), this.writtenTo = this.pos = this.pos + e.length, r != Se.WidgetBefore && (this.covering = e);
  }
  addLineDeco(e, n, r) {
    let i = this.ensureLine();
    i.length += r, i.collapsed += r, i.widgetHeight = Math.max(i.widgetHeight, e), i.breaks += n, this.writtenTo = this.pos = this.pos + r;
  }
  finish(e) {
    let n = this.nodes.length == 0 ? null : this.nodes[this.nodes.length - 1];
    this.lineStart > -1 && !(n instanceof xt) && !this.isCovered ? this.nodes.push(new xt(0, -1)) : (this.writtenTo < this.pos || n == null) && this.nodes.push(this.blankContent(this.writtenTo, this.pos));
    let r = e;
    for (let i of this.nodes)
      i instanceof xt && i.updateHeight(this.oracle, r), r += i ? i.length : 1;
    return this.nodes;
  }
  static build(e, n, r, i) {
    let s = new Sd(r, e);
    return te.spans(n, r, i, s, 0), s.finish(r);
  }
}
function khe(t, e, n) {
  let r = new _he();
  return te.compare(t, e, n, r, 0), r.changes;
}
class _he {
  constructor() {
    this.changes = [];
  }
  compareRange() {
  }
  comparePoint(e, n, r, i) {
    (e < n || r && r.heightRelevant || i && i.heightRelevant) && Gu(e, n, this.changes, 5);
  }
}
function She(t, e) {
  let n = t.getBoundingClientRect(), r = t.ownerDocument, i = r.defaultView || window, s = Math.max(0, n.left), o = Math.min(i.innerWidth, n.right), l = Math.max(0, n.top), c = Math.min(i.innerHeight, n.bottom);
  for (let a = t.parentNode; a && a != r.body; )
    if (a.nodeType == 1) {
      let h = a, u = window.getComputedStyle(h);
      if ((h.scrollHeight > h.clientHeight || h.scrollWidth > h.clientWidth) && u.overflow != "visible") {
        let f = h.getBoundingClientRect();
        s = Math.max(s, f.left), o = Math.min(o, f.right), l = Math.max(l, f.top), c = a == t.parentNode ? f.bottom : Math.min(c, f.bottom);
      }
      a = u.position == "absolute" || u.position == "fixed" ? h.offsetParent : h.parentNode;
    } else if (a.nodeType == 11)
      a = a.host;
    else
      break;
  return {
    left: s - n.left,
    right: Math.max(s, o) - n.left,
    top: l - (n.top + e),
    bottom: Math.max(l, c) - (n.top + e)
  };
}
function Che(t, e) {
  let n = t.getBoundingClientRect();
  return {
    left: 0,
    right: n.right - n.left,
    top: e,
    bottom: n.bottom - (n.top + e)
  };
}
class Ah {
  constructor(e, n, r) {
    this.from = e, this.to = n, this.size = r;
  }
  static same(e, n) {
    if (e.length != n.length)
      return !1;
    for (let r = 0; r < e.length; r++) {
      let i = e[r], s = n[r];
      if (i.from != s.from || i.to != s.to || i.size != s.size)
        return !1;
    }
    return !0;
  }
  draw(e) {
    return V.replace({ widget: new Ahe(this.size, e) }).range(this.from, this.to);
  }
}
class Ahe extends zn {
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
class c0 {
  constructor(e) {
    this.state = e, this.pixelViewport = { left: 0, right: window.innerWidth, top: 0, bottom: 0 }, this.inView = !0, this.paddingTop = 0, this.paddingBottom = 0, this.contentDOMWidth = 0, this.contentDOMHeight = 0, this.editorHeight = 0, this.editorWidth = 0, this.scrollTop = 0, this.scrolledToBottom = !0, this.scrollAnchorPos = 0, this.scrollAnchorHeight = -1, this.scaler = a0, this.scrollTarget = null, this.printing = !1, this.mustMeasureContent = !0, this.defaultTextDirection = _e.LTR, this.visibleRanges = [], this.mustEnforceCursorAssoc = !1;
    let n = e.facet(kd).some((r) => typeof r != "function" && r.class == "cm-lineWrapping");
    this.heightOracle = new bhe(n), this.stateDeco = e.facet(oo).filter((r) => typeof r != "function"), this.heightMap = ht.empty().applyChanges(this.stateDeco, ee.empty, this.heightOracle.setDoc(e.doc), [new Rt(0, 0, 0, e.doc.length)]), this.viewport = this.getViewport(0, null), this.updateViewportLines(), this.updateForViewport(), this.lineGaps = this.ensureLineGaps([]), this.lineGapDeco = V.set(this.lineGaps.map((r) => r.draw(!1))), this.computeVisibleRanges();
  }
  updateForViewport() {
    let e = [this.viewport], { main: n } = this.state.selection;
    for (let r = 0; r <= 1; r++) {
      let i = r ? n.head : n.anchor;
      if (!e.some(({ from: s, to: o }) => i >= s && i <= o)) {
        let { from: s, to: o } = this.lineBlockAt(i);
        e.push(new ol(s, o));
      }
    }
    this.viewports = e.sort((r, i) => r.from - i.from), this.scaler = this.heightMap.height <= 7e6 ? a0 : new The(this.heightOracle, this.heightMap, this.viewports);
  }
  updateViewportLines() {
    this.viewportLines = [], this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.heightOracle.setDoc(this.state.doc), 0, 0, (e) => {
      this.viewportLines.push(this.scaler.scale == 1 ? e : Is(e, this.scaler));
    });
  }
  update(e, n = null) {
    this.state = e.state;
    let r = this.stateDeco;
    this.stateDeco = this.state.facet(oo).filter((h) => typeof h != "function");
    let i = e.changedRanges, s = Rt.extendWithRanges(i, khe(r, this.stateDeco, e ? e.changes : Re.empty(this.state.doc.length))), o = this.heightMap.height, l = this.scrolledToBottom ? null : this.scrollAnchorAt(this.scrollTop);
    this.heightMap = this.heightMap.applyChanges(this.stateDeco, e.startState.doc, this.heightOracle.setDoc(this.state.doc), s), this.heightMap.height != o && (e.flags |= 2), l ? (this.scrollAnchorPos = e.changes.mapPos(l.from, -1), this.scrollAnchorHeight = l.top) : (this.scrollAnchorPos = -1, this.scrollAnchorHeight = this.heightMap.height);
    let c = s.length ? this.mapViewport(this.viewport, e.changes) : this.viewport;
    (n && (n.range.head < c.from || n.range.head > c.to) || !this.viewportIsAppropriate(c)) && (c = this.getViewport(0, n));
    let a = !e.changes.empty || e.flags & 2 || c.from != this.viewport.from || c.to != this.viewport.to;
    this.viewport = c, this.updateForViewport(), a && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 2e3 << 1) && this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, e.changes))), e.flags |= this.computeVisibleRanges(), n && (this.scrollTarget = n), !this.mustEnforceCursorAssoc && e.selectionSet && e.view.lineWrapping && e.state.selection.main.empty && e.state.selection.main.assoc && !e.state.facet(Dw) && (this.mustEnforceCursorAssoc = !0);
  }
  measure(e) {
    let n = e.contentDOM, r = window.getComputedStyle(n), i = this.heightOracle, s = r.whiteSpace;
    this.defaultTextDirection = r.direction == "rtl" ? _e.RTL : _e.LTR;
    let o = this.heightOracle.mustRefreshForWrapping(s), l = n.getBoundingClientRect(), c = o || this.mustMeasureContent || this.contentDOMHeight != l.height;
    this.contentDOMHeight = l.height, this.mustMeasureContent = !1;
    let a = 0, h = 0, u = parseInt(r.paddingTop) || 0, f = parseInt(r.paddingBottom) || 0;
    (this.paddingTop != u || this.paddingBottom != f) && (this.paddingTop = u, this.paddingBottom = f, a |= 10), this.editorWidth != e.scrollDOM.clientWidth && (i.lineWrapping && (c = !0), this.editorWidth = e.scrollDOM.clientWidth, a |= 8), this.scrollTop != e.scrollDOM.scrollTop && (this.scrollAnchorHeight = -1, this.scrollTop = e.scrollDOM.scrollTop), this.scrolledToBottom = hw(e.scrollDOM);
    let d = (this.printing ? Che : She)(n, this.paddingTop), p = d.top - this.pixelViewport.top, g = d.bottom - this.pixelViewport.bottom;
    this.pixelViewport = d;
    let m = this.pixelViewport.bottom > this.pixelViewport.top && this.pixelViewport.right > this.pixelViewport.left;
    if (m != this.inView && (this.inView = m, m && (c = !0)), !this.inView && !this.scrollTarget)
      return 0;
    let y = l.width;
    if ((this.contentDOMWidth != y || this.editorHeight != e.scrollDOM.clientHeight) && (this.contentDOMWidth = l.width, this.editorHeight = e.scrollDOM.clientHeight, a |= 8), c) {
      let _ = e.docView.measureVisibleLineHeights(this.viewport);
      if (i.mustRefreshForHeights(_) && (o = !0), o || i.lineWrapping && Math.abs(y - this.contentDOMWidth) > i.charWidth) {
        let { lineHeight: w, charWidth: x, textHeight: v } = e.docView.measureTextSize();
        o = w > 0 && i.refresh(s, w, x, v, y / x, _), o && (e.docView.minWidth = 0, a |= 8);
      }
      p > 0 && g > 0 ? h = Math.max(p, g) : p < 0 && g < 0 && (h = Math.min(p, g)), i.heightChanged = !1;
      for (let w of this.viewports) {
        let x = w.from == this.viewport.from ? _ : e.docView.measureVisibleLineHeights(w);
        this.heightMap = (o ? ht.empty().applyChanges(this.stateDeco, ee.empty, this.heightOracle, [new Rt(0, 0, 0, e.state.doc.length)]) : this.heightMap).updateHeight(i, 0, o, new whe(w.from, x));
      }
      i.heightChanged && (a |= 2);
    }
    let b = !this.viewportIsAppropriate(this.viewport, h) || this.scrollTarget && (this.scrollTarget.range.head < this.viewport.from || this.scrollTarget.range.head > this.viewport.to);
    return b && (this.viewport = this.getViewport(h, this.scrollTarget)), this.updateForViewport(), (a & 2 || b) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 2e3 << 1) && this.updateLineGaps(this.ensureLineGaps(o ? [] : this.lineGaps, e)), a |= this.computeVisibleRanges(), this.mustEnforceCursorAssoc && (this.mustEnforceCursorAssoc = !1, e.docView.enforceCursorAssoc()), a;
  }
  get visibleTop() {
    return this.scaler.fromDOM(this.pixelViewport.top);
  }
  get visibleBottom() {
    return this.scaler.fromDOM(this.pixelViewport.bottom);
  }
  getViewport(e, n) {
    let r = 0.5 - Math.max(-0.5, Math.min(0.5, e / 1e3 / 2)), i = this.heightMap, s = this.heightOracle, { visibleTop: o, visibleBottom: l } = this, c = new ol(i.lineAt(o - r * 1e3, be.ByHeight, s, 0, 0).from, i.lineAt(l + (1 - r) * 1e3, be.ByHeight, s, 0, 0).to);
    if (n) {
      let { head: a } = n.range;
      if (a < c.from || a > c.to) {
        let h = Math.min(this.editorHeight, this.pixelViewport.bottom - this.pixelViewport.top), u = i.lineAt(a, be.ByPos, s, 0, 0), f;
        n.y == "center" ? f = (u.top + u.bottom) / 2 - h / 2 : n.y == "start" || n.y == "nearest" && a < c.from ? f = u.top : f = u.bottom - h, c = new ol(i.lineAt(f - 1e3 / 2, be.ByHeight, s, 0, 0).from, i.lineAt(f + h + 1e3 / 2, be.ByHeight, s, 0, 0).to);
      }
    }
    return c;
  }
  mapViewport(e, n) {
    let r = n.mapPos(e.from, -1), i = n.mapPos(e.to, 1);
    return new ol(this.heightMap.lineAt(r, be.ByPos, this.heightOracle, 0, 0).from, this.heightMap.lineAt(i, be.ByPos, this.heightOracle, 0, 0).to);
  }
  viewportIsAppropriate({ from: e, to: n }, r = 0) {
    if (!this.inView)
      return !0;
    let { top: i } = this.heightMap.lineAt(e, be.ByPos, this.heightOracle, 0, 0), { bottom: s } = this.heightMap.lineAt(n, be.ByPos, this.heightOracle, 0, 0), { visibleTop: o, visibleBottom: l } = this;
    return (e == 0 || i <= o - Math.max(10, Math.min(-r, 250))) && (n == this.state.doc.length || s >= l + Math.max(10, Math.min(r, 250))) && i > o - 2 * 1e3 && s < l + 2 * 1e3;
  }
  mapLineGaps(e, n) {
    if (!e.length || n.empty)
      return e;
    let r = [];
    for (let i of e)
      n.touchesRange(i.from, i.to) || r.push(new Ah(n.mapPos(i.from), n.mapPos(i.to), i.size));
    return r;
  }
  ensureLineGaps(e, n) {
    let r = this.heightOracle.lineWrapping, i = r ? 1e4 : 2e3, s = i >> 1, o = i << 1;
    if (this.defaultTextDirection != _e.LTR && !r)
      return [];
    let l = [], c = (a, h, u, f) => {
      if (h - a < s)
        return;
      let d = this.state.selection.main, p = [d.from];
      d.empty || p.push(d.to);
      for (let m of p)
        if (m > a && m < h) {
          c(a, m - 10, u, f), c(m + 10, h, u, f);
          return;
        }
      let g = Dhe(e, (m) => m.from >= u.from && m.to <= u.to && Math.abs(m.from - a) < s && Math.abs(m.to - h) < s && !p.some((y) => m.from < y && m.to > y));
      if (!g) {
        if (h < u.to && n && r && n.visibleRanges.some((m) => m.from <= h && m.to >= h)) {
          let m = n.moveToLineBoundary(C.cursor(h), !1, !0).head;
          m > a && (h = m);
        }
        g = new Ah(a, h, this.gapSize(u, a, h, f));
      }
      l.push(g);
    };
    for (let a of this.viewportLines) {
      if (a.length < o)
        continue;
      let h = Ehe(a.from, a.to, this.stateDeco);
      if (h.total < o)
        continue;
      let u = this.scrollTarget ? this.scrollTarget.range.head : null, f, d;
      if (r) {
        let p = i / this.heightOracle.lineLength * this.heightOracle.lineHeight, g, m;
        if (u != null) {
          let y = cl(h, u), b = ((this.visibleBottom - this.visibleTop) / 2 + p) / a.height;
          g = y - b, m = y + b;
        } else
          g = (this.visibleTop - a.top - p) / a.height, m = (this.visibleBottom - a.top + p) / a.height;
        f = ll(h, g), d = ll(h, m);
      } else {
        let p = h.total * this.heightOracle.charWidth, g = i * this.heightOracle.charWidth, m, y;
        if (u != null) {
          let b = cl(h, u), _ = ((this.pixelViewport.right - this.pixelViewport.left) / 2 + g) / p;
          m = b - _, y = b + _;
        } else
          m = (this.pixelViewport.left - g) / p, y = (this.pixelViewport.right + g) / p;
        f = ll(h, m), d = ll(h, y);
      }
      f > a.from && c(a.from, f, a, h), d < a.to && c(d, a.to, a, h);
    }
    return l;
  }
  gapSize(e, n, r, i) {
    let s = cl(i, r) - cl(i, n);
    return this.heightOracle.lineWrapping ? e.height * s : i.total * this.heightOracle.charWidth * s;
  }
  updateLineGaps(e) {
    Ah.same(e, this.lineGaps) || (this.lineGaps = e, this.lineGapDeco = V.set(e.map((n) => n.draw(this.heightOracle.lineWrapping))));
  }
  computeVisibleRanges() {
    let e = this.stateDeco;
    this.lineGaps.length && (e = e.concat(this.lineGapDeco));
    let n = [];
    te.spans(e, this.viewport.from, this.viewport.to, {
      span(i, s) {
        n.push({ from: i, to: s });
      },
      point() {
      }
    }, 20);
    let r = n.length != this.visibleRanges.length || this.visibleRanges.some((i, s) => i.from != n[s].from || i.to != n[s].to);
    return this.visibleRanges = n, r ? 4 : 0;
  }
  lineBlockAt(e) {
    return e >= this.viewport.from && e <= this.viewport.to && this.viewportLines.find((n) => n.from <= e && n.to >= e) || Is(this.heightMap.lineAt(e, be.ByPos, this.heightOracle, 0, 0), this.scaler);
  }
  lineBlockAtHeight(e) {
    return Is(this.heightMap.lineAt(this.scaler.fromDOM(e), be.ByHeight, this.heightOracle, 0, 0), this.scaler);
  }
  scrollAnchorAt(e) {
    let n = this.lineBlockAtHeight(e + 8);
    return n.from >= this.viewport.from || this.viewportLines[0].top - e > 200 ? n : this.viewportLines[0];
  }
  elementAtHeight(e) {
    return Is(this.heightMap.blockAt(this.scaler.fromDOM(e), this.heightOracle, 0, 0), this.scaler);
  }
  get docHeight() {
    return this.scaler.toDOM(this.heightMap.height);
  }
  get contentHeight() {
    return this.docHeight + this.paddingTop + this.paddingBottom;
  }
}
class ol {
  constructor(e, n) {
    this.from = e, this.to = n;
  }
}
function Ehe(t, e, n) {
  let r = [], i = t, s = 0;
  return te.spans(n, t, e, {
    span() {
    },
    point(o, l) {
      o > i && (r.push({ from: i, to: o }), s += o - i), i = l;
    }
  }, 20), i < e && (r.push({ from: i, to: e }), s += e - i), { total: s, ranges: r };
}
function ll({ total: t, ranges: e }, n) {
  if (n <= 0)
    return e[0].from;
  if (n >= 1)
    return e[e.length - 1].to;
  let r = Math.floor(t * n);
  for (let i = 0; ; i++) {
    let { from: s, to: o } = e[i], l = o - s;
    if (r <= l)
      return s + r;
    r -= l;
  }
}
function cl(t, e) {
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
function Dhe(t, e) {
  for (let n of t)
    if (e(n))
      return n;
}
const a0 = {
  toDOM(t) {
    return t;
  },
  fromDOM(t) {
    return t;
  },
  scale: 1
};
class The {
  constructor(e, n, r) {
    let i = 0, s = 0, o = 0;
    this.viewports = r.map(({ from: l, to: c }) => {
      let a = n.lineAt(l, be.ByPos, e, 0, 0).top, h = n.lineAt(c, be.ByPos, e, 0, 0).bottom;
      return i += h - a, { from: l, to: c, top: a, bottom: h, domTop: 0, domBottom: 0 };
    }), this.scale = (7e6 - i) / (n.height - i);
    for (let l of this.viewports)
      l.domTop = o + (l.top - s) * this.scale, o = l.domBottom = l.domTop + (l.bottom - l.top), s = l.bottom;
  }
  toDOM(e) {
    for (let n = 0, r = 0, i = 0; ; n++) {
      let s = n < this.viewports.length ? this.viewports[n] : null;
      if (!s || e < s.top)
        return i + (e - r) * this.scale;
      if (e <= s.bottom)
        return s.domTop + (e - s.top);
      r = s.bottom, i = s.domBottom;
    }
  }
  fromDOM(e) {
    for (let n = 0, r = 0, i = 0; ; n++) {
      let s = n < this.viewports.length ? this.viewports[n] : null;
      if (!s || e < s.domTop)
        return r + (e - i) / this.scale;
      if (e <= s.domBottom)
        return s.top + (e - s.domTop);
      r = s.bottom, i = s.domBottom;
    }
  }
}
function Is(t, e) {
  if (e.scale == 1)
    return t;
  let n = e.toDOM(t.top), r = e.toDOM(t.bottom);
  return new an(t.from, t.length, n, r - n, Array.isArray(t._content) ? t._content.map((i) => Is(i, e)) : t._content);
}
const al = /* @__PURE__ */ N.define({ combine: (t) => t.join(" ") }), nf = /* @__PURE__ */ N.define({ combine: (t) => t.indexOf(!0) > -1 }), rf = /* @__PURE__ */ pr.newName(), Zw = /* @__PURE__ */ pr.newName(), Xw = /* @__PURE__ */ pr.newName(), Qw = { "&light": "." + Zw, "&dark": "." + Xw };
function sf(t, e, n) {
  return new pr(e, {
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
const Mhe = /* @__PURE__ */ sf("." + rf, {
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
}, Qw);
class Ohe {
  constructor(e, n, r, i) {
    this.typeOver = i, this.bounds = null, this.text = "";
    let { impreciseHead: s, impreciseAnchor: o } = e.docView;
    if (e.state.readOnly && n > -1)
      this.newSel = null;
    else if (n > -1 && (this.bounds = e.docView.domBoundsAround(n, r, 0))) {
      let l = s || o ? [] : Ihe(e), c = new pw(l, e.state);
      c.readRange(this.bounds.startDOM, this.bounds.endDOM), this.text = c.text, this.newSel = Nhe(l, this.bounds.from);
    } else {
      let l = e.observer.selectionRange, c = s && s.node == l.focusNode && s.offset == l.focusOffset || !Hu(e.contentDOM, l.focusNode) ? e.state.selection.main.head : e.docView.posFromDOM(l.focusNode, l.focusOffset), a = o && o.node == l.anchorNode && o.offset == l.anchorOffset || !Hu(e.contentDOM, l.anchorNode) ? e.state.selection.main.anchor : e.docView.posFromDOM(l.anchorNode, l.anchorOffset);
      this.newSel = C.single(a, c);
    }
  }
}
function ev(t, e) {
  let n, { newSel: r } = e, i = t.state.selection.main, s = t.inputState.lastKeyTime > Date.now() - 100 ? t.inputState.lastKeyCode : -1;
  if (e.bounds) {
    let { from: o, to: l } = e.bounds, c = i.from, a = null;
    (s === 8 || P.android && e.text.length < l - o) && (c = i.to, a = "end");
    let h = Rhe(t.state.doc.sliceString(o, l, Si), e.text, c - o, a);
    h && (P.chrome && s == 13 && h.toB == h.from + 2 && e.text.slice(h.from, h.toB) == Si + Si && h.toB--, n = {
      from: o + h.from,
      to: o + h.toA,
      insert: ee.of(e.text.slice(h.from, h.toB).split(Si))
    });
  } else
    r && (!t.hasFocus && t.state.facet(fa) || r.main.eq(i)) && (r = null);
  if (!n && !r)
    return !1;
  if (!n && e.typeOver && !i.empty && r && r.main.empty ? n = { from: i.from, to: i.to, insert: t.state.doc.slice(i.from, i.to) } : n && n.from >= i.from && n.to <= i.to && (n.from != i.from || n.to != i.to) && i.to - i.from - (n.to - n.from) <= 4 ? n = {
    from: i.from,
    to: i.to,
    insert: t.state.doc.slice(i.from, n.from).append(n.insert).append(t.state.doc.slice(n.to, i.to))
  } : (P.mac || P.android) && n && n.from == n.to && n.from == i.head - 1 && /^\. ?$/.test(n.insert.toString()) && t.contentDOM.getAttribute("autocorrect") == "off" ? (r && n.insert.length == 2 && (r = C.single(r.main.anchor - 1, r.main.head - 1)), n = { from: i.from, to: i.to, insert: ee.of([" "]) }) : P.chrome && n && n.from == n.to && n.from == i.head && n.insert.toString() == `
 ` && t.lineWrapping && (r && (r = C.single(r.main.anchor - 1, r.main.head - 1)), n = { from: i.from, to: i.to, insert: ee.of([" "]) }), n) {
    if (P.ios && t.inputState.flushIOSKey(t) || P.android && (n.from == i.from && n.to == i.to && n.insert.length == 1 && n.insert.lines == 2 && Ri(t.contentDOM, "Enter", 13) || (n.from == i.from - 1 && n.to == i.to && n.insert.length == 0 || s == 8 && n.insert.length < n.to - n.from) && Ri(t.contentDOM, "Backspace", 8) || n.from == i.from && n.to == i.to + 1 && n.insert.length == 0 && Ri(t.contentDOM, "Delete", 46)))
      return !0;
    let o = n.insert.toString();
    t.inputState.composing >= 0 && t.inputState.composing++;
    let l, c = () => l || (l = Lhe(t, n, r));
    return t.state.facet(Cw).some((a) => a(t, n.from, n.to, o, c)) || t.dispatch(c()), !0;
  } else if (r && !r.main.eq(i)) {
    let o = !1, l = "select";
    return t.inputState.lastSelectionTime > Date.now() - 50 && (t.inputState.lastSelectionOrigin == "select" && (o = !0), l = t.inputState.lastSelectionOrigin), t.dispatch({ selection: r, scrollIntoView: o, userEvent: l }), !0;
  } else
    return !1;
}
function Lhe(t, e, n) {
  let r, i = t.state, s = i.selection.main;
  if (e.from >= s.from && e.to <= s.to && e.to - e.from >= (s.to - s.from) / 3 && (!n || n.main.empty && n.main.from == e.from + e.insert.length) && t.inputState.composing < 0) {
    let l = s.from < e.from ? i.sliceDoc(s.from, e.from) : "", c = s.to > e.to ? i.sliceDoc(e.to, s.to) : "";
    r = i.replaceSelection(t.state.toText(l + e.insert.sliceString(0, void 0, t.state.lineBreak) + c));
  } else {
    let l = i.changes(e), c = n && n.main.to <= l.newLength ? n.main : void 0;
    if (i.selection.ranges.length > 1 && t.inputState.composing >= 0 && e.to <= s.to && e.to >= s.to - 10) {
      let a = t.state.sliceDoc(e.from, e.to), h = Bw(t) || t.state.doc.lineAt(s.head), u = s.to - e.to, f = s.to - s.from;
      r = i.changeByRange((d) => {
        if (d.from == s.from && d.to == s.to)
          return { changes: l, range: c || d.map(l) };
        let p = d.to - u, g = p - a.length;
        if (d.to - d.from != f || t.state.sliceDoc(g, p) != a || h && d.to >= h.from && d.from <= h.to)
          return { range: d };
        let m = i.changes({ from: g, to: p, insert: e.insert }), y = d.to - s.to;
        return {
          changes: m,
          range: c ? C.range(Math.max(0, c.anchor + y), Math.max(0, c.head + y)) : d.map(m)
        };
      });
    } else
      r = {
        changes: l,
        selection: c && i.selection.replaceRange(c)
      };
  }
  let o = "input.type";
  return (t.composing || t.inputState.compositionPendingChange && t.inputState.compositionEndedAt > Date.now() - 50) && (t.inputState.compositionPendingChange = !1, o += ".compose", t.inputState.compositionFirstChange && (o += ".start", t.inputState.compositionFirstChange = !1)), i.update(r, { userEvent: o, scrollIntoView: !0 });
}
function Rhe(t, e, n, r) {
  let i = Math.min(t.length, e.length), s = 0;
  for (; s < i && t.charCodeAt(s) == e.charCodeAt(s); )
    s++;
  if (s == i && t.length == e.length)
    return null;
  let o = t.length, l = e.length;
  for (; o > 0 && l > 0 && t.charCodeAt(o - 1) == e.charCodeAt(l - 1); )
    o--, l--;
  if (r == "end") {
    let c = Math.max(0, s - Math.min(o, l));
    n -= o + c - s;
  }
  if (o < s && t.length < e.length) {
    let c = n <= s && n >= o ? s - n : 0;
    s -= c, l = s + (l - o), o = s;
  } else if (l < s) {
    let c = n <= s && n >= l ? s - n : 0;
    s -= c, o = s + (o - l), l = s;
  }
  return { from: s, toA: o, toB: l };
}
function Ihe(t) {
  let e = [];
  if (t.root.activeElement != t.contentDOM)
    return e;
  let { anchorNode: n, anchorOffset: r, focusNode: i, focusOffset: s } = t.observer.selectionRange;
  return n && (e.push(new Fm(n, r)), (i != n || s != r) && e.push(new Fm(i, s))), e;
}
function Nhe(t, e) {
  if (t.length == 0)
    return null;
  let n = t[0].pos, r = t.length == 2 ? t[1].pos : n;
  return n > -1 && r > -1 ? C.single(n + e, r + e) : null;
}
const Phe = {
  childList: !0,
  characterData: !0,
  subtree: !0,
  attributes: !0,
  characterDataOldValue: !0
}, Eh = P.ie && P.ie_version <= 11;
class Fhe {
  constructor(e) {
    this.view = e, this.active = !1, this.selectionRange = new Aae(), this.selectionChanged = !1, this.delayedFlush = -1, this.resizeTimeout = -1, this.queue = [], this.delayedAndroidKey = null, this.flushingAndroidKey = -1, this.lastChange = 0, this.scrollTargets = [], this.intersection = null, this.resizeScroll = null, this.resizeContent = null, this.intersecting = !1, this.gapIntersection = null, this.gaps = [], this.parentCheck = -1, this.dom = e.contentDOM, this.observer = new MutationObserver((n) => {
      for (let r of n)
        this.queue.push(r);
      (P.ie && P.ie_version <= 11 || P.ios && e.composing) && n.some((r) => r.type == "childList" && r.removedNodes.length || r.type == "characterData" && r.oldValue.length > r.target.nodeValue.length) ? this.flushSoon() : this.flush();
    }), Eh && (this.onCharData = (n) => {
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
    if (r.state.facet(fa) ? r.root.activeElement != this.dom : !Bl(r.dom, i))
      return;
    let s = i.anchorNode && r.docView.nearest(i.anchorNode);
    if (s && s.ignoreEvent(e)) {
      n || (this.selectionChanged = !1);
      return;
    }
    (P.ie && P.ie_version <= 11 || P.android && P.chrome) && !r.state.selection.main.empty && i.focusNode && fc(i.focusNode, i.focusOffset, i.anchorNode, i.anchorOffset) ? this.flushSoon() : this.flush(!1);
  }
  readSelectionRange() {
    let { view: e } = this, n = P.safari && e.root.nodeType == 11 && kae(this.dom.ownerDocument) == this.dom && Bhe(this.view) || uc(e.root);
    if (!n || this.selectionRange.eq(n))
      return !1;
    let r = Bl(this.dom, n);
    return r && !this.selectionChanged && e.inputState.lastFocusTime > Date.now() - 200 && e.inputState.lastTouchTime < Date.now() - 300 && Dae(this.dom, n) ? (this.view.inputState.lastFocusTime = 0, e.docView.updateSelection(), !1) : (this.selectionRange.setRange(n), r && (this.selectionChanged = !0), !0);
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
    this.active || (this.observer.observe(this.dom, Phe), Eh && this.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.active = !0);
  }
  stop() {
    !this.active || (this.active = !1, this.observer.disconnect(), Eh && this.dom.removeEventListener("DOMCharacterDataModified", this.onCharData));
  }
  clear() {
    this.processRecords(), this.queue.length = 0, this.selectionChanged = !1;
  }
  delayAndroidKey(e, n) {
    var r;
    if (!this.delayedAndroidKey) {
      let i = () => {
        let s = this.delayedAndroidKey;
        s && (this.clearDelayedAndroidKey(), this.view.inputState.lastKeyCode = s.keyCode, this.view.inputState.lastKeyTime = Date.now(), !this.flush() && s.force && Ri(this.dom, s.key, s.keyCode));
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
    for (let s of e) {
      let o = this.readMutation(s);
      !o || (o.typeOver && (i = !0), n == -1 ? { from: n, to: r } = o : (n = Math.min(o.from, n), r = Math.max(o.to, r)));
    }
    return { from: n, to: r, typeOver: i };
  }
  readChange() {
    let { from: e, to: n, typeOver: r } = this.processRecords(), i = this.selectionChanged && Bl(this.dom, this.selectionRange);
    return e < 0 && !i ? null : (e > -1 && (this.lastChange = Date.now()), this.view.inputState.lastFocusTime = 0, this.selectionChanged = !1, new Ohe(this.view, e, n, r));
  }
  flush(e = !0) {
    if (this.delayedFlush >= 0 || this.delayedAndroidKey)
      return !1;
    e && this.readSelectionRange();
    let n = this.readChange();
    if (!n)
      return !1;
    let r = this.view.state, i = ev(this.view, n);
    return this.view.state == r && this.view.update([]), i;
  }
  readMutation(e) {
    let n = this.view.docView.nearest(e.target);
    if (!n || n.ignoreMutation(e))
      return null;
    if (n.markDirty(e.type == "attributes"), e.type == "attributes" && (n.flags |= 4), e.type == "childList") {
      let r = h0(n, e.previousSibling || e.target.previousSibling, -1), i = h0(n, e.nextSibling || e.target.nextSibling, 1);
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
    for (let s of this.scrollTargets)
      s.removeEventListener("scroll", this.onScroll);
    this.removeWindowListeners(this.win), clearTimeout(this.parentCheck), clearTimeout(this.resizeTimeout), this.win.cancelAnimationFrame(this.delayedFlush), this.win.cancelAnimationFrame(this.flushingAndroidKey);
  }
}
function h0(t, e, n) {
  for (; e; ) {
    let r = ge.get(e);
    if (r && r.parent == t)
      return r;
    let i = e.parentNode;
    e = i != t.dom ? i : n > 0 ? e.nextSibling : e.previousSibling;
  }
  return null;
}
function Bhe(t) {
  let e = null;
  function n(c) {
    c.preventDefault(), c.stopImmediatePropagation(), e = c.getTargetRanges()[0];
  }
  if (t.contentDOM.addEventListener("beforeinput", n, !0), t.dom.ownerDocument.execCommand("indent"), t.contentDOM.removeEventListener("beforeinput", n, !0), !e)
    return null;
  let r = e.startContainer, i = e.startOffset, s = e.endContainer, o = e.endOffset, l = t.docView.domAtPos(t.state.selection.main.anchor);
  return fc(l.node, l.offset, s, o) && ([r, i, s, o] = [s, o, r, i]), { anchorNode: r, anchorOffset: i, focusNode: s, focusOffset: o };
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
    this.dispatchTransactions = e.dispatchTransactions || n && ((r) => r.forEach((i) => n(i, this))) || ((r) => this.update(r)), this.dispatch = this.dispatch.bind(this), this._root = e.root || Eae(e.parent) || document, this.viewState = new c0(e.state || X.create(e)), this.plugins = this.state.facet(Ls).map((r) => new _h(r));
    for (let r of this.plugins)
      r.update(this);
    this.observer = new Fhe(this), this.inputState = new ihe(this), this.inputState.ensureHandlers(this, this.plugins), this.docView = new Wm(this), this.mountStyles(), this.updateAttrs(), this.updateState = 0, this.requestMeasure(), e.parent && e.parent.appendChild(this.dom);
  }
  dispatch(...e) {
    let n = e.length == 1 && e[0] instanceof Ne ? e : e.length == 1 && Array.isArray(e[0]) ? e[0] : [this.state.update(...e)];
    this.dispatchTransactions(n, this);
  }
  update(e) {
    if (this.updateState != 0)
      throw new Error("Calls to EditorView.update are not allowed while an update is in progress");
    let n = !1, r = !1, i, s = this.state;
    for (let f of e) {
      if (f.startState != s)
        throw new RangeError("Trying to update state with a transaction that doesn't start from the previous state.");
      s = f.state;
    }
    if (this.destroyed) {
      this.viewState.state = s;
      return;
    }
    let o = this.hasFocus, l = 0, c = null;
    e.some((f) => f.annotation(Gw)) ? (this.inputState.notifiedFocused = o, l = 1) : o != this.inputState.notifiedFocused && (this.inputState.notifiedFocused = o, c = Yw(s, o), c || (l = 1));
    let a = this.observer.delayedAndroidKey, h = null;
    if (a ? (this.observer.clearDelayedAndroidKey(), h = this.observer.readChange(), (h && !this.state.doc.eq(s.doc) || !this.state.selection.eq(s.selection)) && (h = null)) : this.observer.clear(), s.facet(X.phrases) != this.state.facet(X.phrases))
      return this.setState(s);
    i = gc.create(this, s, e), i.flags |= l;
    let u = this.viewState.scrollTarget;
    try {
      this.updateState = 2;
      for (let f of e) {
        if (u && (u = u.map(f.changes)), f.scrollIntoView) {
          let { main: d } = f.state.selection;
          u = new pc(d.empty ? d : C.cursor(d.head, d.head > d.anchor ? -1 : 1));
        }
        for (let d of f.effects)
          d.is(Vm) && (u = d.value);
      }
      this.viewState.update(i, u), this.bidiCache = mc.update(this.bidiCache, i.changes), i.empty || (this.updatePlugins(i), this.inputState.update(i)), n = this.docView.update(i), this.state.facet(Rs) != this.styleModules && this.mountStyles(), r = this.updateAttrs(), this.showAnnouncements(e), this.docView.updateSelection(n, e.some((f) => f.isUserEvent("select.pointer")));
    } finally {
      this.updateState = 0;
    }
    if (i.startState.facet(al) != i.state.facet(al) && (this.viewState.mustMeasureContent = !0), (n || r || u || this.viewState.mustEnforceCursorAssoc || this.viewState.mustMeasureContent) && this.requestMeasure(), !i.empty)
      for (let f of this.state.facet(Yu))
        f(i);
    (c || h) && Promise.resolve().then(() => {
      c && this.state == c.startState && this.dispatch(c), h && !ev(this, h) && a.force && Ri(this.contentDOM, a.key, a.keyCode);
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
      this.viewState = new c0(e), this.plugins = e.facet(Ls).map((r) => new _h(r)), this.pluginMap.clear();
      for (let r of this.plugins)
        r.update(this);
      this.docView = new Wm(this), this.inputState.ensureHandlers(this, this.plugins), this.mountStyles(), this.updateAttrs(), this.bidiCache = [];
    } finally {
      this.updateState = 0;
    }
    n && this.focus(), this.requestMeasure();
  }
  updatePlugins(e) {
    let n = e.startState.facet(Ls), r = e.state.facet(Ls);
    if (n != r) {
      let i = [];
      for (let s of r) {
        let o = n.indexOf(s);
        if (o < 0)
          i.push(new _h(s));
        else {
          let l = this.plugins[o];
          l.mustUpdate = e, i.push(l);
        }
      }
      for (let s of this.plugins)
        s.mustUpdate != e && s.destroy(this);
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
    let n = null, r = this.scrollDOM, { scrollTop: i } = r, { scrollAnchorPos: s, scrollAnchorHeight: o } = this.viewState;
    i != this.viewState.scrollTop && (o = -1), this.viewState.scrollAnchorHeight = -1;
    try {
      for (let l = 0; ; l++) {
        if (o < 0)
          if (hw(r))
            s = -1, o = this.viewState.heightMap.height;
          else {
            let d = this.viewState.scrollAnchorAt(i);
            s = d.from, o = d.top;
          }
        this.updateState = 1;
        let c = this.viewState.measure(this);
        if (!c && !this.measureRequests.length && this.viewState.scrollTarget == null)
          break;
        if (l > 5) {
          console.warn(this.measureRequests.length ? "Measure loop restarted more than 5 times" : "Viewport failed to stabilize");
          break;
        }
        let a = [];
        c & 4 || ([this.measureRequests, a] = [a, this.measureRequests]);
        let h = a.map((d) => {
          try {
            return d.read(this);
          } catch (p) {
            return Lt(this.state, p), u0;
          }
        }), u = gc.create(this, this.state, []), f = !1;
        u.flags |= c, n ? n.flags |= c : n = u, this.updateState = 2, u.empty || (this.updatePlugins(u), this.inputState.update(u), this.updateAttrs(), f = this.docView.update(u));
        for (let d = 0; d < a.length; d++)
          if (h[d] != u0)
            try {
              let p = a[d];
              p.write && p.write(h[d], this);
            } catch (p) {
              Lt(this.state, p);
            }
        if (f && this.docView.updateSelection(!0), !u.viewportChanged && this.measureRequests.length == 0) {
          if (this.viewState.editorHeight)
            if (this.viewState.scrollTarget) {
              this.docView.scrollIntoView(this.viewState.scrollTarget), this.viewState.scrollTarget = null;
              continue;
            } else {
              let p = (s < 0 ? this.viewState.heightMap.height : this.viewState.lineBlockAt(s).top) - o;
              if (p > 1 || p < -1) {
                i = r.scrollTop = i + p, o = -1;
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
      for (let l of this.state.facet(Yu))
        l(n);
  }
  get themeClasses() {
    return rf + " " + (this.state.facet(nf) ? Xw : Zw) + " " + this.state.facet(al);
  }
  updateAttrs() {
    let e = f0(this, Tw, {
      class: "cm-editor" + (this.hasFocus ? " cm-focused " : " ") + this.themeClasses
    }), n = {
      spellcheck: "false",
      autocorrect: "off",
      autocapitalize: "off",
      translate: "no",
      contenteditable: this.state.facet(fa) ? "true" : "false",
      class: "cm-content",
      style: `${P.tabSize}: ${this.state.tabSize}`,
      role: "textbox",
      "aria-multiline": "true"
    };
    this.state.readOnly && (n["aria-readonly"] = "true"), f0(this, kd, n);
    let r = this.observer.ignore(() => {
      let i = ju(this.contentDOM, this.contentAttrs, n), s = ju(this.dom, this.editorAttrs, e);
      return i || s;
    });
    return this.editorAttrs = e, this.contentAttrs = n, r;
  }
  showAnnouncements(e) {
    let n = !0;
    for (let r of e)
      for (let i of r.effects)
        if (i.is(I.announce)) {
          n && (this.announceDOM.textContent = ""), n = !1;
          let s = this.announceDOM.appendChild(document.createElement("div"));
          s.textContent = i.value;
        }
  }
  mountStyles() {
    this.styleModules = this.state.facet(Rs);
    let e = this.state.facet(I.cspNonce);
    pr.mount(this.root, this.styleModules.concat(Mhe).reverse(), e ? { nonce: e } : void 0);
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
    return Ch(this, e, Zm(this, e, n, r));
  }
  moveByGroup(e, n) {
    return Ch(this, e, Zm(this, e, n, (r) => nhe(this, e.head, r)));
  }
  moveToLineBoundary(e, n, r = !0) {
    return the(this, e, n, r);
  }
  moveVertically(e, n, r) {
    return Ch(this, e, rhe(this, e, n, r));
  }
  domAtPos(e) {
    return this.docView.domAtPos(e);
  }
  posAtDOM(e, n = 0) {
    return this.docView.posFromDOM(e, n);
  }
  posAtCoords(e, n = !0) {
    return this.readMeasured(), $w(this, e, n);
  }
  coordsAtPos(e, n = 1) {
    this.readMeasured();
    let r = this.docView.coordsAt(e, n);
    if (!r || r.left == r.right)
      return r;
    let i = this.state.doc.lineAt(e), s = this.bidiSpans(i), o = s[rr.find(s, e - i.from, -1, n)];
    return wd(r, o.dir == _e.LTR == n > 0);
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
    return !this.state.facet(Ew) || e < this.viewport.from || e > this.viewport.to ? this.textDirection : (this.readMeasured(), this.docView.textDirectionAt(e));
  }
  get lineWrapping() {
    return this.viewState.heightOracle.lineWrapping;
  }
  bidiSpans(e) {
    if (e.length > qhe)
      return Pw(e.length);
    let n = this.textDirectionAt(e.from), r;
    for (let s of this.bidiCache)
      if (s.from == e.from && s.dir == n && (s.fresh || Nw(s.isolates, r = Um(this, e.from, e.to))))
        return s.order;
    r || (r = Um(this, e.from, e.to));
    let i = zae(e.text, n, r);
    return this.bidiCache.push(new mc(e.from, e.to, n, r, !0, i)), i;
  }
  get hasFocus() {
    var e;
    return (this.dom.ownerDocument.hasFocus() || P.safari && ((e = this.inputState) === null || e === void 0 ? void 0 : e.lastContextMenu) > Date.now() - 3e4) && this.root.activeElement == this.contentDOM;
  }
  focus() {
    this.observer.ignore(() => {
      cw(this.contentDOM), this.docView.updateSelection();
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
    return Vm.of(new pc(typeof e == "number" ? C.cursor(e) : e, n.y, n.x, n.yMargin, n.xMargin));
  }
  static domEventHandlers(e) {
    return Ae.define(() => ({}), { eventHandlers: e });
  }
  static theme(e, n) {
    let r = pr.newName(), i = [al.of(r), Rs.of(sf(`.${r}`, e))];
    return n && n.dark && i.push(nf.of(!0)), i;
  }
  static baseTheme(e) {
    return fs.lowest(Rs.of(sf("." + rf, e, Qw)));
  }
  static findFromDOM(e) {
    var n;
    let r = e.querySelector(".cm-content"), i = r && ge.get(r) || ge.get(e);
    return ((n = i == null ? void 0 : i.rootView) === null || n === void 0 ? void 0 : n.view) || null;
  }
}
I.styleModule = Rs;
I.inputHandler = Cw;
I.focusChangeEffect = Aw;
I.perLineTextDirection = Ew;
I.exceptionSink = Sw;
I.updateListener = Yu;
I.editable = fa;
I.mouseSelectionStyle = _w;
I.dragMovesSelection = kw;
I.clickAddsSelectionRange = xw;
I.decorations = oo;
I.atomicRanges = _d;
I.bidiIsolatedRanges = Mw;
I.scrollMargins = Ow;
I.darkTheme = nf;
I.cspNonce = /* @__PURE__ */ N.define({ combine: (t) => t.length ? t[0] : "" });
I.contentAttributes = kd;
I.editorAttributes = Tw;
I.lineWrapping = /* @__PURE__ */ I.contentAttributes.of({ class: "cm-lineWrapping" });
I.announce = /* @__PURE__ */ K.define();
const qhe = 4096, u0 = {};
class mc {
  constructor(e, n, r, i, s, o) {
    this.from = e, this.to = n, this.dir = r, this.isolates = i, this.fresh = s, this.order = o;
  }
  static update(e, n) {
    if (n.empty && !e.some((s) => s.fresh))
      return e;
    let r = [], i = e.length ? e[e.length - 1].dir : _e.LTR;
    for (let s = Math.max(0, e.length - 10); s < e.length; s++) {
      let o = e[s];
      o.dir == i && !n.touchesRange(o.from, o.to) && r.push(new mc(n.mapPos(o.from, 1), n.mapPos(o.to, -1), o.dir, o.isolates, !1, o.order));
    }
    return r;
  }
}
function f0(t, e, n) {
  for (let r = t.state.facet(e), i = r.length - 1; i >= 0; i--) {
    let s = r[i], o = typeof s == "function" ? s(t) : s;
    o && Wu(o, n);
  }
  return n;
}
const $he = P.mac ? "mac" : P.windows ? "win" : P.linux ? "linux" : "key";
function Hhe(t, e) {
  const n = t.split(/-(?!$)/);
  let r = n[n.length - 1];
  r == "Space" && (r = " ");
  let i, s, o, l;
  for (let c = 0; c < n.length - 1; ++c) {
    const a = n[c];
    if (/^(cmd|meta|m)$/i.test(a))
      l = !0;
    else if (/^a(lt)?$/i.test(a))
      i = !0;
    else if (/^(c|ctrl|control)$/i.test(a))
      s = !0;
    else if (/^s(hift)?$/i.test(a))
      o = !0;
    else if (/^mod$/i.test(a))
      e == "mac" ? l = !0 : s = !0;
    else
      throw new Error("Unrecognized modifier name: " + a);
  }
  return i && (r = "Alt-" + r), s && (r = "Ctrl-" + r), l && (r = "Meta-" + r), o && (r = "Shift-" + r), r;
}
function hl(t, e, n) {
  return e.altKey && (t = "Alt-" + t), e.ctrlKey && (t = "Ctrl-" + t), e.metaKey && (t = "Meta-" + t), n !== !1 && e.shiftKey && (t = "Shift-" + t), t;
}
const zhe = /* @__PURE__ */ fs.default(/* @__PURE__ */ I.domEventHandlers({
  keydown(t, e) {
    return nv(tv(e.state), t, e, "editor");
  }
})), co = /* @__PURE__ */ N.define({ enables: zhe }), d0 = /* @__PURE__ */ new WeakMap();
function tv(t) {
  let e = t.facet(co), n = d0.get(e);
  return n || d0.set(e, n = Whe(e.reduce((r, i) => r.concat(i), []))), n;
}
function Vhe(t, e, n) {
  return nv(tv(t.state), e, t, n);
}
let Xn = null;
const Uhe = 4e3;
function Whe(t, e = $he) {
  let n = /* @__PURE__ */ Object.create(null), r = /* @__PURE__ */ Object.create(null), i = (o, l) => {
    let c = r[o];
    if (c == null)
      r[o] = l;
    else if (c != l)
      throw new Error("Key binding " + o + " is used both as a regular binding and as a multi-stroke prefix");
  }, s = (o, l, c, a, h) => {
    var u, f;
    let d = n[o] || (n[o] = /* @__PURE__ */ Object.create(null)), p = l.split(/ (?!$)/).map((y) => Hhe(y, e));
    for (let y = 1; y < p.length; y++) {
      let b = p.slice(0, y).join(" ");
      i(b, !0), d[b] || (d[b] = {
        preventDefault: !0,
        stopPropagation: !1,
        run: [(_) => {
          let w = Xn = { view: _, prefix: b, scope: o };
          return setTimeout(() => {
            Xn == w && (Xn = null);
          }, Uhe), !0;
        }]
      });
    }
    let g = p.join(" ");
    i(g, !1);
    let m = d[g] || (d[g] = {
      preventDefault: !1,
      stopPropagation: !1,
      run: ((f = (u = d._any) === null || u === void 0 ? void 0 : u.run) === null || f === void 0 ? void 0 : f.slice()) || []
    });
    c && m.run.push(c), a && (m.preventDefault = !0), h && (m.stopPropagation = !0);
  };
  for (let o of t) {
    let l = o.scope ? o.scope.split(" ") : ["editor"];
    if (o.any)
      for (let a of l) {
        let h = n[a] || (n[a] = /* @__PURE__ */ Object.create(null));
        h._any || (h._any = { preventDefault: !1, stopPropagation: !1, run: [] });
        for (let u in h)
          h[u].run.push(o.any);
      }
    let c = o[e] || o.key;
    if (!!c)
      for (let a of l)
        s(a, c, o.run, o.preventDefault, o.stopPropagation), o.shift && s(a, "Shift-" + c, o.shift, o.preventDefault, o.stopPropagation);
  }
  return n;
}
function nv(t, e, n, r) {
  let i = xae(e), s = Ve(i, 0), o = Dt(s) == i.length && i != " ", l = "", c = !1, a = !1, h = !1;
  Xn && Xn.view == n && Xn.scope == r && (l = Xn.prefix + " ", zw.indexOf(e.keyCode) < 0 && (a = !0, Xn = null));
  let u = /* @__PURE__ */ new Set(), f = (m) => {
    if (m) {
      for (let y of m.run)
        if (!u.has(y) && (u.add(y), y(n, e)))
          return m.stopPropagation && (h = !0), !0;
      m.preventDefault && (m.stopPropagation && (h = !0), a = !0);
    }
    return !1;
  }, d = t[r], p, g;
  return d && (f(d[l + hl(i, e, !o)]) ? c = !0 : o && (e.altKey || e.metaKey || e.ctrlKey) && !(P.windows && e.ctrlKey && e.altKey) && (p = gr[e.keyCode]) && p != i ? (f(d[l + hl(p, e, !0)]) || e.shiftKey && (g = io[e.keyCode]) != i && g != p && f(d[l + hl(g, e, !1)])) && (c = !0) : o && e.shiftKey && f(d[l + hl(i, e, !0)]) && (c = !0), !c && f(d._any) && (c = !0)), a && (c = !0), c && h && e.stopPropagation(), c;
}
class Lo {
  constructor(e, n, r, i, s) {
    this.className = e, this.left = n, this.top = r, this.width = i, this.height = s;
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
      let s = rv(e);
      return [new Lo(n, i.left - s.left, i.top - s.top, null, i.bottom - i.top)];
    } else
      return jhe(e, n, r);
  }
}
function rv(t) {
  let e = t.scrollDOM.getBoundingClientRect();
  return { left: (t.textDirection == _e.LTR ? e.left : e.right - t.scrollDOM.clientWidth) - t.scrollDOM.scrollLeft, top: e.top - t.scrollDOM.scrollTop };
}
function p0(t, e, n) {
  let r = C.cursor(e);
  return {
    from: Math.max(n.from, t.moveToLineBoundary(r, !1, !0).from),
    to: Math.min(n.to, t.moveToLineBoundary(r, !0, !0).from),
    type: Se.Text
  };
}
function jhe(t, e, n) {
  if (n.to <= t.viewport.from || n.from >= t.viewport.to)
    return [];
  let r = Math.max(n.from, t.viewport.from), i = Math.min(n.to, t.viewport.to), s = t.textDirection == _e.LTR, o = t.contentDOM, l = o.getBoundingClientRect(), c = rv(t), a = o.querySelector(".cm-line"), h = a && window.getComputedStyle(a), u = l.left + (h ? parseInt(h.paddingLeft) + Math.min(0, parseInt(h.textIndent)) : 0), f = l.right - (h ? parseInt(h.paddingRight) : 0), d = Qu(t, r), p = Qu(t, i), g = d.type == Se.Text ? d : null, m = p.type == Se.Text ? p : null;
  if (g && (t.lineWrapping || d.widgetLineBreaks) && (g = p0(t, r, g)), m && (t.lineWrapping || p.widgetLineBreaks) && (m = p0(t, i, m)), g && m && g.from == m.from)
    return b(_(n.from, n.to, g));
  {
    let x = g ? _(n.from, null, g) : w(d, !1), v = m ? _(null, n.to, m) : w(p, !0), S = [];
    return (g || d).to < (m || p).from - (g && m ? 1 : 0) || d.widgetLineBreaks > 1 && x.bottom + t.defaultLineHeight / 2 < v.top ? S.push(y(u, x.bottom, f, v.top)) : x.bottom < v.top && t.elementAtHeight((x.bottom + v.top) / 2).type == Se.Text && (x.bottom = v.top = (x.bottom + v.top) / 2), b(x).concat(S).concat(b(v));
  }
  function y(x, v, S, R) {
    return new Lo(e, x - c.left, v - c.top - 0.01, S - x, R - v + 0.01);
  }
  function b({ top: x, bottom: v, horizontal: S }) {
    let R = [];
    for (let L = 0; L < S.length; L += 2)
      R.push(y(S[L], x, S[L + 1], v));
    return R;
  }
  function _(x, v, S) {
    let R = 1e9, L = -1e9, D = [];
    function z(A, U, $, me, le) {
      let se = t.coordsAtPos(A, A == S.to ? -2 : 2), ce = t.coordsAtPos($, $ == S.from ? 2 : -2);
      !se || !ce || (R = Math.min(se.top, ce.top, R), L = Math.max(se.bottom, ce.bottom, L), le == _e.LTR ? D.push(s && U ? u : se.left, s && me ? f : ce.right) : D.push(!s && me ? u : ce.left, !s && U ? f : se.right));
    }
    let re = x != null ? x : S.from, J = v != null ? v : S.to;
    for (let A of t.visibleRanges)
      if (A.to > re && A.from < J)
        for (let U = Math.max(A.from, re), $ = Math.min(A.to, J); ; ) {
          let me = t.state.doc.lineAt(U);
          for (let le of t.bidiSpans(me)) {
            let se = le.from + me.from, ce = le.to + me.from;
            if (se >= $)
              break;
            ce > U && z(Math.max(se, U), x == null && se <= re, Math.min(ce, $), v == null && ce >= J, le.dir);
          }
          if (U = me.to + 1, U >= $)
            break;
        }
    return D.length == 0 && z(re, x == null, J, v == null, t.textDirection), { top: R, bottom: L, horizontal: D };
  }
  function w(x, v) {
    let S = l.top + (v ? x.top : x.bottom);
    return { top: S, bottom: S, horizontal: [] };
  }
}
function Ghe(t, e) {
  return t.constructor == e.constructor && t.eq(e);
}
class Yhe {
  constructor(e, n) {
    this.view = e, this.layer = n, this.drawn = [], this.measureReq = { read: this.measure.bind(this), write: this.draw.bind(this) }, this.dom = e.scrollDOM.appendChild(document.createElement("div")), this.dom.classList.add("cm-layer"), n.above && this.dom.classList.add("cm-layer-above"), n.class && this.dom.classList.add(n.class), this.dom.setAttribute("aria-hidden", "true"), this.setOrder(e.state), e.requestMeasure(this.measureReq), n.mount && n.mount(this.dom, e);
  }
  update(e) {
    e.startState.facet(Hl) != e.state.facet(Hl) && this.setOrder(e.state), (this.layer.update(e, this.dom) || e.geometryChanged) && e.view.requestMeasure(this.measureReq);
  }
  setOrder(e) {
    let n = 0, r = e.facet(Hl);
    for (; n < r.length && r[n] != this.layer; )
      n++;
    this.dom.style.zIndex = String((this.layer.above ? 150 : -1) - n);
  }
  measure() {
    return this.layer.markers(this.view);
  }
  draw(e) {
    if (e.length != this.drawn.length || e.some((n, r) => !Ghe(n, this.drawn[r]))) {
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
const Hl = /* @__PURE__ */ N.define();
function iv(t) {
  return [
    Ae.define((e) => new Yhe(e, t)),
    Hl.of(t)
  ];
}
const sv = !P.ios, ao = /* @__PURE__ */ N.define({
  combine(t) {
    return Sn(t, {
      cursorBlinkRate: 1200,
      drawRangeCursor: !0
    }, {
      cursorBlinkRate: (e, n) => Math.min(e, n),
      drawRangeCursor: (e, n) => e || n
    });
  }
});
function Khe(t = {}) {
  return [
    ao.of(t),
    Jhe,
    Zhe,
    Xhe,
    Dw.of(!0)
  ];
}
function ov(t) {
  return t.startState.facet(ao) != t.state.facet(ao);
}
const Jhe = /* @__PURE__ */ iv({
  above: !0,
  markers(t) {
    let { state: e } = t, n = e.facet(ao), r = [];
    for (let i of e.selection.ranges) {
      let s = i == e.selection.main;
      if (i.empty ? !s || sv : n.drawRangeCursor) {
        let o = s ? "cm-cursor cm-cursor-primary" : "cm-cursor cm-cursor-secondary", l = i.empty ? i : C.cursor(i.head, i.head > i.anchor ? -1 : 1);
        for (let c of Lo.forRange(t, o, l))
          r.push(c);
      }
    }
    return r;
  },
  update(t, e) {
    t.transactions.some((r) => r.selection) && (e.style.animationName = e.style.animationName == "cm-blink" ? "cm-blink2" : "cm-blink");
    let n = ov(t);
    return n && g0(t.state, e), t.docChanged || t.selectionSet || n;
  },
  mount(t, e) {
    g0(e.state, t);
  },
  class: "cm-cursorLayer"
});
function g0(t, e) {
  e.style.animationDuration = t.facet(ao).cursorBlinkRate + "ms";
}
const Zhe = /* @__PURE__ */ iv({
  above: !1,
  markers(t) {
    return t.state.selection.ranges.map((e) => e.empty ? [] : Lo.forRange(t, "cm-selectionBackground", e)).reduce((e, n) => e.concat(n));
  },
  update(t, e) {
    return t.docChanged || t.selectionSet || t.viewportChanged || ov(t);
  },
  class: "cm-selectionLayer"
}), lv = {
  ".cm-line": {
    "& ::selection": { backgroundColor: "transparent !important" },
    "&::selection": { backgroundColor: "transparent !important" }
  }
};
sv && (lv[".cm-line"].caretColor = "transparent !important");
const Xhe = /* @__PURE__ */ fs.highest(/* @__PURE__ */ I.theme(lv)), cv = /* @__PURE__ */ K.define({
  map(t, e) {
    return t == null ? null : e.mapPos(t);
  }
}), Ns = /* @__PURE__ */ Ye.define({
  create() {
    return null;
  },
  update(t, e) {
    return t != null && (t = e.changes.mapPos(t)), e.effects.reduce((n, r) => r.is(cv) ? r.value : n, t);
  }
}), Qhe = /* @__PURE__ */ Ae.fromClass(class {
  constructor(t) {
    this.view = t, this.cursor = null, this.measureReq = { read: this.readPos.bind(this), write: this.drawCursor.bind(this) };
  }
  update(t) {
    var e;
    let n = t.state.field(Ns);
    n == null ? this.cursor != null && ((e = this.cursor) === null || e === void 0 || e.remove(), this.cursor = null) : (this.cursor || (this.cursor = this.view.scrollDOM.appendChild(document.createElement("div")), this.cursor.className = "cm-dropCursor"), (t.startState.field(Ns) != n || t.docChanged || t.geometryChanged) && this.view.requestMeasure(this.measureReq));
  }
  readPos() {
    let t = this.view.state.field(Ns), e = t != null && this.view.coordsAtPos(t);
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
    this.view.state.field(Ns) != t && this.view.dispatch({ effects: cv.of(t) });
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
function eue() {
  return [Ns, Qhe];
}
function m0(t, e, n, r, i) {
  e.lastIndex = 0;
  for (let s = t.iterRange(n, r), o = n, l; !s.next().done; o += s.value.length)
    if (!s.lineBreak)
      for (; l = e.exec(s.value); )
        i(o + l.index, l);
}
function tue(t, e) {
  let n = t.visibleRanges;
  if (n.length == 1 && n[0].from == t.viewport.from && n[0].to == t.viewport.to)
    return n;
  let r = [];
  for (let { from: i, to: s } of n)
    i = Math.max(t.state.doc.lineAt(i).from, i - e), s = Math.min(t.state.doc.lineAt(s).to, s + e), r.length && r[r.length - 1].to >= i ? r[r.length - 1].to = s : r.push({ from: i, to: s });
  return r;
}
class nue {
  constructor(e) {
    const { regexp: n, decoration: r, decorate: i, boundary: s, maxLength: o = 1e3 } = e;
    if (!n.global)
      throw new RangeError("The regular expression given to MatchDecorator should have its 'g' flag set");
    if (this.regexp = n, i)
      this.addMatch = (l, c, a, h) => i(h, a, a + l[0].length, l, c);
    else if (typeof r == "function")
      this.addMatch = (l, c, a, h) => {
        let u = r(l, c, a);
        u && h(a, a + l[0].length, u);
      };
    else if (r)
      this.addMatch = (l, c, a, h) => h(a, a + l[0].length, r);
    else
      throw new RangeError("Either 'decorate' or 'decoration' should be provided to MatchDecorator");
    this.boundary = s, this.maxLength = o;
  }
  createDeco(e) {
    let n = new dr(), r = n.add.bind(n);
    for (let { from: i, to: s } of tue(e, this.maxLength))
      m0(e.state.doc, this.regexp, i, s, (o, l) => this.addMatch(l, e, o, r));
    return n.finish();
  }
  updateDeco(e, n) {
    let r = 1e9, i = -1;
    return e.docChanged && e.changes.iterChanges((s, o, l, c) => {
      c > e.view.viewport.from && l < e.view.viewport.to && (r = Math.min(l, r), i = Math.max(c, i));
    }), e.viewportChanged || i - r > 1e3 ? this.createDeco(e.view) : i > -1 ? this.updateRange(e.view, n.map(e.changes), r, i) : n;
  }
  updateRange(e, n, r, i) {
    for (let s of e.visibleRanges) {
      let o = Math.max(s.from, r), l = Math.min(s.to, i);
      if (l > o) {
        let c = e.state.doc.lineAt(o), a = c.to < l ? e.state.doc.lineAt(l) : c, h = Math.max(s.from, c.from), u = Math.min(s.to, a.to);
        if (this.boundary) {
          for (; o > c.from; o--)
            if (this.boundary.test(c.text[o - 1 - c.from])) {
              h = o;
              break;
            }
          for (; l < a.to; l++)
            if (this.boundary.test(a.text[l - a.from])) {
              u = l;
              break;
            }
        }
        let f = [], d, p = (g, m, y) => f.push(y.range(g, m));
        if (c == a)
          for (this.regexp.lastIndex = h - c.from; (d = this.regexp.exec(c.text)) && d.index < u - c.from; )
            this.addMatch(d, e, d.index + c.from, p);
        else
          m0(e.state.doc, this.regexp, h, u, (g, m) => this.addMatch(m, e, g, p));
        n = n.update({ filterFrom: h, filterTo: u, filter: (g, m) => g < h || m > u, add: f });
      }
    }
    return n;
  }
}
const of = /x/.unicode != null ? "gu" : "g", rue = /* @__PURE__ */ new RegExp(`[\0-\b
-\x7F-\x9F\xAD\u061C\u200B\u200E\u200F\u2028\u2029\u202D\u202E\u2066\u2067\u2069\uFEFF\uFFF9-\uFFFC]`, of), iue = {
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
let Dh = null;
function sue() {
  var t;
  if (Dh == null && typeof document < "u" && document.body) {
    let e = document.body.style;
    Dh = ((t = e.tabSize) !== null && t !== void 0 ? t : e.MozTabSize) != null;
  }
  return Dh || !1;
}
const zl = /* @__PURE__ */ N.define({
  combine(t) {
    let e = Sn(t, {
      render: null,
      specialChars: rue,
      addSpecialChars: null
    });
    return (e.replaceTabs = !sue()) && (e.specialChars = new RegExp("	|" + e.specialChars.source, of)), e.addSpecialChars && (e.specialChars = new RegExp(e.specialChars.source + "|" + e.addSpecialChars.source, of)), e;
  }
});
function oue(t = {}) {
  return [zl.of(t), lue()];
}
let y0 = null;
function lue() {
  return y0 || (y0 = Ae.fromClass(class {
    constructor(t) {
      this.view = t, this.decorations = V.none, this.decorationCache = /* @__PURE__ */ Object.create(null), this.decorator = this.makeDecorator(t.state.facet(zl)), this.decorations = this.decorator.createDeco(t);
    }
    makeDecorator(t) {
      return new nue({
        regexp: t.specialChars,
        decoration: (e, n, r) => {
          let { doc: i } = n.state, s = Ve(e[0], 0);
          if (s == 9) {
            let o = i.lineAt(r), l = n.state.tabSize, c = ds(o.text, l, r - o.from);
            return V.replace({ widget: new uue((l - c % l) * this.view.defaultCharacterWidth) });
          }
          return this.decorationCache[s] || (this.decorationCache[s] = V.replace({ widget: new hue(t, s) }));
        },
        boundary: t.replaceTabs ? void 0 : /[^]/
      });
    }
    update(t) {
      let e = t.state.facet(zl);
      t.startState.facet(zl) != e ? (this.decorator = this.makeDecorator(e), this.decorations = this.decorator.createDeco(t.view)) : this.decorations = this.decorator.updateDeco(t, this.decorations);
    }
  }, {
    decorations: (t) => t.decorations
  }));
}
const cue = "\u2022";
function aue(t) {
  return t >= 32 ? cue : t == 10 ? "\u2424" : String.fromCharCode(9216 + t);
}
class hue extends zn {
  constructor(e, n) {
    super(), this.options = e, this.code = n;
  }
  eq(e) {
    return e.code == this.code;
  }
  toDOM(e) {
    let n = aue(this.code), r = e.state.phrase("Control character") + " " + (iue[this.code] || "0x" + this.code.toString(16)), i = this.options.render && this.options.render(this.code, r, n);
    if (i)
      return i;
    let s = document.createElement("span");
    return s.textContent = n, s.title = r, s.setAttribute("aria-label", r), s.className = "cm-specialChar", s;
  }
  ignoreEvent() {
    return !1;
  }
}
class uue extends zn {
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
function fue() {
  return pue;
}
const due = /* @__PURE__ */ V.line({ class: "cm-activeLine" }), pue = /* @__PURE__ */ Ae.fromClass(class {
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
      i.from > e && (n.push(due.range(i.from)), e = i.from);
    }
    return V.set(n);
  }
}, {
  decorations: (t) => t.decorations
}), lf = 2e3;
function gue(t, e, n) {
  let r = Math.min(e.line, n.line), i = Math.max(e.line, n.line), s = [];
  if (e.off > lf || n.off > lf || e.col < 0 || n.col < 0) {
    let o = Math.min(e.off, n.off), l = Math.max(e.off, n.off);
    for (let c = r; c <= i; c++) {
      let a = t.doc.line(c);
      a.length <= l && s.push(C.range(a.from + o, a.to + l));
    }
  } else {
    let o = Math.min(e.col, n.col), l = Math.max(e.col, n.col);
    for (let c = r; c <= i; c++) {
      let a = t.doc.line(c), h = Bu(a.text, o, t.tabSize, !0);
      if (h < 0)
        s.push(C.cursor(a.to));
      else {
        let u = Bu(a.text, l, t.tabSize);
        s.push(C.range(a.from + h, a.from + u));
      }
    }
  }
  return s;
}
function mue(t, e) {
  let n = t.coordsAtPos(t.viewport.from);
  return n ? Math.round(Math.abs((n.left - e) / t.defaultCharacterWidth)) : -1;
}
function b0(t, e) {
  let n = t.posAtCoords({ x: e.clientX, y: e.clientY }, !1), r = t.state.doc.lineAt(n), i = n - r.from, s = i > lf ? -1 : i == r.length ? mue(t, e.clientX) : ds(r.text, t.state.tabSize, n - r.from);
  return { line: r.number, col: s, off: i };
}
function yue(t, e) {
  let n = b0(t, e), r = t.state.selection;
  return n ? {
    update(i) {
      if (i.docChanged) {
        let s = i.changes.mapPos(i.startState.doc.line(n.line).from), o = i.state.doc.lineAt(s);
        n = { line: o.number, col: n.col, off: Math.min(n.off, o.length) }, r = r.map(i.changes);
      }
    },
    get(i, s, o) {
      let l = b0(t, i);
      if (!l)
        return r;
      let c = gue(t.state, n, l);
      return c.length ? o ? C.create(c.concat(r.ranges)) : C.create(c) : r;
    }
  } : null;
}
function bue(t) {
  let e = (t == null ? void 0 : t.eventFilter) || ((n) => n.altKey && n.button == 0);
  return I.mouseSelectionStyle.of((n, r) => e(r) ? yue(n, r) : null);
}
const wue = {
  Alt: [18, (t) => !!t.altKey],
  Control: [17, (t) => !!t.ctrlKey],
  Shift: [16, (t) => !!t.shiftKey],
  Meta: [91, (t) => !!t.metaKey]
}, vue = { style: "cursor: crosshair" };
function xue(t = {}) {
  let [e, n] = wue[t.key || "Alt"], r = Ae.fromClass(class {
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
      var s;
      return !((s = i.plugin(r)) === null || s === void 0) && s.isDown ? vue : null;
    })
  ];
}
const ul = "-10000px";
class av {
  constructor(e, n, r) {
    this.facet = n, this.createTooltipView = r, this.input = e.state.facet(n), this.tooltips = this.input.filter((i) => i), this.tooltipViews = this.tooltips.map(r);
  }
  update(e) {
    var n;
    let r = e.state.facet(this.facet), i = r.filter((o) => o);
    if (r === this.input) {
      for (let o of this.tooltipViews)
        o.update && o.update(e);
      return !1;
    }
    let s = [];
    for (let o = 0; o < i.length; o++) {
      let l = i[o], c = -1;
      if (!!l) {
        for (let a = 0; a < this.tooltips.length; a++) {
          let h = this.tooltips[a];
          h && h.create == l.create && (c = a);
        }
        if (c < 0)
          s[o] = this.createTooltipView(l);
        else {
          let a = s[o] = this.tooltipViews[c];
          a.update && a.update(e);
        }
      }
    }
    for (let o of this.tooltipViews)
      s.indexOf(o) < 0 && (o.dom.remove(), (n = o.destroy) === null || n === void 0 || n.call(o));
    return this.input = r, this.tooltips = i, this.tooltipViews = s, !0;
  }
}
function kue(t) {
  let { win: e } = t;
  return { top: 0, left: 0, bottom: e.innerHeight, right: e.innerWidth };
}
const Th = /* @__PURE__ */ N.define({
  combine: (t) => {
    var e, n, r;
    return {
      position: P.ios ? "absolute" : ((e = t.find((i) => i.position)) === null || e === void 0 ? void 0 : e.position) || "fixed",
      parent: ((n = t.find((i) => i.parent)) === null || n === void 0 ? void 0 : n.parent) || null,
      tooltipSpace: ((r = t.find((i) => i.tooltipSpace)) === null || r === void 0 ? void 0 : r.tooltipSpace) || kue
    };
  }
}), w0 = /* @__PURE__ */ new WeakMap(), hv = /* @__PURE__ */ Ae.fromClass(class {
  constructor(t) {
    this.view = t, this.inView = !0, this.lastTransaction = 0, this.measureTimeout = -1;
    let e = t.state.facet(Th);
    this.position = e.position, this.parent = e.parent, this.classes = t.themeClasses, this.createContainer(), this.measureReq = { read: this.readMeasure.bind(this), write: this.writeMeasure.bind(this), key: this }, this.manager = new av(t, Cd, (n) => this.createTooltip(n)), this.intersectionObserver = typeof IntersectionObserver == "function" ? new IntersectionObserver((n) => {
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
    let n = e || t.geometryChanged, r = t.state.facet(Th);
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
    return e.dom.style.position = this.position, e.dom.style.top = ul, this.container.appendChild(e.dom), e.mount && e.mount(this.view), e;
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
      space: this.view.state.facet(Th).tooltipSpace(this.view)
    };
  }
  writeMeasure(t) {
    var e;
    let { editor: n, space: r } = t, i = [];
    for (let s = 0; s < this.manager.tooltips.length; s++) {
      let o = this.manager.tooltips[s], l = this.manager.tooltipViews[s], { dom: c } = l, a = t.pos[s], h = t.size[s];
      if (!a || a.bottom <= Math.max(n.top, r.top) || a.top >= Math.min(n.bottom, r.bottom) || a.right < Math.max(n.left, r.left) - 0.1 || a.left > Math.min(n.right, r.right) + 0.1) {
        c.style.top = ul;
        continue;
      }
      let u = o.arrow ? l.dom.querySelector(".cm-tooltip-arrow") : null, f = u ? 7 : 0, d = h.right - h.left, p = (e = w0.get(l)) !== null && e !== void 0 ? e : h.bottom - h.top, g = l.offset || Sue, m = this.view.textDirection == _e.LTR, y = h.width > r.right - r.left ? m ? r.left : r.right - h.width : m ? Math.min(a.left - (u ? 14 : 0) + g.x, r.right - d) : Math.max(r.left, a.left - d + (u ? 14 : 0) - g.x), b = !!o.above;
      !o.strictSide && (b ? a.top - (h.bottom - h.top) - g.y < r.top : a.bottom + (h.bottom - h.top) + g.y > r.bottom) && b == r.bottom - a.bottom > a.top - r.top && (b = !b);
      let _ = (b ? a.top - r.top : r.bottom - a.bottom) - f;
      if (_ < p && l.resize !== !1) {
        if (_ < this.view.defaultLineHeight) {
          c.style.top = ul;
          continue;
        }
        w0.set(l, p), c.style.height = (p = _) + "px";
      } else
        c.style.height && (c.style.height = "");
      let w = b ? a.top - p - f - g.y : a.bottom + f + g.y, x = y + d;
      if (l.overlap !== !0)
        for (let v of i)
          v.left < x && v.right > y && v.top < w + p && v.bottom > w && (w = b ? v.top - p - 2 - f : v.bottom + f + 2);
      this.position == "absolute" ? (c.style.top = w - t.parent.top + "px", c.style.left = y - t.parent.left + "px") : (c.style.top = w + "px", c.style.left = y + "px"), u && (u.style.left = `${a.left + (m ? g.x : -g.x) - (y + 14 - 7)}px`), l.overlap !== !0 && i.push({ left: y, top: w, right: x, bottom: w + p }), c.classList.toggle("cm-tooltip-above", b), c.classList.toggle("cm-tooltip-below", !b), l.positioned && l.positioned(t.space);
    }
  }
  maybeMeasure() {
    if (this.manager.tooltips.length && (this.view.inView && this.view.requestMeasure(this.measureReq), this.inView != this.view.inView && (this.inView = this.view.inView, !this.inView)))
      for (let t of this.manager.tooltipViews)
        t.dom.style.top = ul;
  }
}, {
  eventHandlers: {
    scroll() {
      this.maybeMeasure();
    }
  }
}), _ue = /* @__PURE__ */ I.baseTheme({
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
}), Sue = { x: 0, y: 0 }, Cd = /* @__PURE__ */ N.define({
  enables: [hv, _ue]
}), yc = /* @__PURE__ */ N.define();
class Ad {
  static create(e) {
    return new Ad(e);
  }
  constructor(e) {
    this.view = e, this.mounted = !1, this.dom = document.createElement("div"), this.dom.classList.add("cm-tooltip-hover"), this.manager = new av(e, yc, (n) => this.createHostedView(n));
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
const Cue = /* @__PURE__ */ Cd.compute([yc], (t) => {
  let e = t.facet(yc).filter((n) => n);
  return e.length === 0 ? null : {
    pos: Math.min(...e.map((n) => n.pos)),
    end: Math.max(...e.filter((n) => n.end != null).map((n) => n.end)),
    create: Ad.create,
    above: e[0].above,
    arrow: e.some((n) => n.arrow)
  };
});
class Aue {
  constructor(e, n, r, i, s) {
    this.view = e, this.source = n, this.field = r, this.setHover = i, this.hoverTime = s, this.hoverTimeout = -1, this.restartTimeout = -1, this.pending = null, this.lastMove = { x: 0, y: 0, target: e.dom, time: 0 }, this.checkHover = this.checkHover.bind(this), e.dom.addEventListener("mouseleave", this.mouseleave = this.mouseleave.bind(this)), e.dom.addEventListener("mousemove", this.mousemove = this.mousemove.bind(this));
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
    let i, s = 1;
    if (r instanceof nr)
      i = r.posAtStart;
    else {
      if (i = e.posAtCoords(n), i == null)
        return;
      let l = e.coordsAtPos(i);
      if (!l || n.y < l.top || n.y > l.bottom || n.x < l.left - e.defaultCharacterWidth || n.x > l.right + e.defaultCharacterWidth)
        return;
      let c = e.bidiSpans(e.state.doc.lineAt(i)).find((h) => h.from <= i && h.to >= i), a = c && c.dir == _e.RTL ? -1 : 1;
      s = n.x < l.left ? -a : a;
    }
    let o = this.source(e, i, s);
    if (o != null && o.then) {
      let l = this.pending = { pos: i };
      o.then((c) => {
        this.pending == l && (this.pending = null, c && e.dispatch({ effects: this.setHover.of(c) }));
      }, (c) => Lt(e.state, c, "hover tooltip"));
    } else
      o && e.dispatch({ effects: this.setHover.of(o) });
  }
  mousemove(e) {
    var n;
    this.lastMove = { x: e.clientX, y: e.clientY, target: e.target, time: Date.now() }, this.hoverTimeout < 0 && (this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime));
    let r = this.active;
    if (r && !v0(this.lastMove.target) || this.pending) {
      let { pos: i } = r || this.pending, s = (n = r == null ? void 0 : r.end) !== null && n !== void 0 ? n : i;
      (i == s ? this.view.posAtCoords(this.lastMove) != i : !Eue(this.view, i, s, e.clientX, e.clientY, 6)) && (this.view.dispatch({ effects: this.setHover.of(null) }), this.pending = null);
    }
  }
  mouseleave(e) {
    clearTimeout(this.hoverTimeout), this.hoverTimeout = -1, this.active && !v0(e.relatedTarget) && this.view.dispatch({ effects: this.setHover.of(null) });
  }
  destroy() {
    clearTimeout(this.hoverTimeout), this.view.dom.removeEventListener("mouseleave", this.mouseleave), this.view.dom.removeEventListener("mousemove", this.mousemove);
  }
}
function v0(t) {
  for (let e = t; e; e = e.parentNode)
    if (e.nodeType == 1 && e.classList.contains("cm-tooltip"))
      return !0;
  return !1;
}
function Eue(t, e, n, r, i, s) {
  let o = document.createRange(), l = t.domAtPos(e), c = t.domAtPos(n);
  o.setEnd(c.node, c.offset), o.setStart(l.node, l.offset);
  let a = o.getClientRects();
  o.detach();
  for (let h = 0; h < a.length; h++) {
    let u = a[h];
    if (Math.max(u.top - i, i - u.bottom, u.left - r, r - u.right) <= s)
      return !0;
  }
  return !1;
}
function Due(t, e = {}) {
  let n = K.define(), r = Ye.define({
    create() {
      return null;
    },
    update(i, s) {
      if (i && (e.hideOnChange && (s.docChanged || s.selection) || e.hideOn && e.hideOn(s, i)))
        return null;
      if (i && s.docChanged) {
        let o = s.changes.mapPos(i.pos, -1, ct.TrackDel);
        if (o == null)
          return null;
        let l = Object.assign(/* @__PURE__ */ Object.create(null), i);
        l.pos = o, i.end != null && (l.end = s.changes.mapPos(i.end)), i = l;
      }
      for (let o of s.effects)
        o.is(n) && (i = o.value), o.is(Tue) && (i = null);
      return i;
    },
    provide: (i) => yc.from(i)
  });
  return [
    r,
    Ae.define((i) => new Aue(i, t, r, n, e.hoverTime || 300)),
    Cue
  ];
}
function uv(t, e) {
  let n = t.plugin(hv);
  if (!n)
    return null;
  let r = n.manager.tooltips.indexOf(e);
  return r < 0 ? null : n.manager.tooltipViews[r];
}
const Tue = /* @__PURE__ */ K.define(), x0 = /* @__PURE__ */ N.define({
  combine(t) {
    let e, n;
    for (let r of t)
      e = e || r.topContainer, n = n || r.bottomContainer;
    return { topContainer: e, bottomContainer: n };
  }
});
function ho(t, e) {
  let n = t.plugin(fv), r = n ? n.specs.indexOf(e) : -1;
  return r > -1 ? n.panels[r] : null;
}
const fv = /* @__PURE__ */ Ae.fromClass(class {
  constructor(t) {
    this.input = t.state.facet(uo), this.specs = this.input.filter((n) => n), this.panels = this.specs.map((n) => n(t));
    let e = t.state.facet(x0);
    this.top = new fl(t, !0, e.topContainer), this.bottom = new fl(t, !1, e.bottomContainer), this.top.sync(this.panels.filter((n) => n.top)), this.bottom.sync(this.panels.filter((n) => !n.top));
    for (let n of this.panels)
      n.dom.classList.add("cm-panel"), n.mount && n.mount();
  }
  update(t) {
    let e = t.state.facet(x0);
    this.top.container != e.topContainer && (this.top.sync([]), this.top = new fl(t.view, !0, e.topContainer)), this.bottom.container != e.bottomContainer && (this.bottom.sync([]), this.bottom = new fl(t.view, !1, e.bottomContainer)), this.top.syncClasses(), this.bottom.syncClasses();
    let n = t.state.facet(uo);
    if (n != this.input) {
      let r = n.filter((c) => c), i = [], s = [], o = [], l = [];
      for (let c of r) {
        let a = this.specs.indexOf(c), h;
        a < 0 ? (h = c(t.view), l.push(h)) : (h = this.panels[a], h.update && h.update(t)), i.push(h), (h.top ? s : o).push(h);
      }
      this.specs = r, this.panels = i, this.top.sync(s), this.bottom.sync(o);
      for (let c of l)
        c.dom.classList.add("cm-panel"), c.mount && c.mount();
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
class fl {
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
          e = k0(e);
        e = e.nextSibling;
      } else
        this.dom.insertBefore(n.dom, e);
    for (; e; )
      e = k0(e);
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
function k0(t) {
  let e = t.nextSibling;
  return t.remove(), e;
}
const uo = /* @__PURE__ */ N.define({
  enables: fv
});
class $n extends Zr {
  compare(e) {
    return this == e || this.constructor == e.constructor && this.eq(e);
  }
  eq(e) {
    return !1;
  }
  destroy(e) {
  }
}
$n.prototype.elementClass = "";
$n.prototype.toDOM = void 0;
$n.prototype.mapMode = ct.TrackBefore;
$n.prototype.startSide = $n.prototype.endSide = -1;
$n.prototype.point = !0;
const Vl = /* @__PURE__ */ N.define(), Mue = {
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
}, Vs = /* @__PURE__ */ N.define();
function Oue(t) {
  return [dv(), Vs.of(Object.assign(Object.assign({}, Mue), t))];
}
const cf = /* @__PURE__ */ N.define({
  combine: (t) => t.some((e) => e)
});
function dv(t) {
  let e = [
    Lue
  ];
  return t && t.fixed === !1 && e.push(cf.of(!0)), e;
}
const Lue = /* @__PURE__ */ Ae.fromClass(class {
  constructor(t) {
    this.view = t, this.prevViewport = t.viewport, this.dom = document.createElement("div"), this.dom.className = "cm-gutters", this.dom.setAttribute("aria-hidden", "true"), this.dom.style.minHeight = this.view.contentHeight + "px", this.gutters = t.state.facet(Vs).map((e) => new S0(t, e));
    for (let e of this.gutters)
      this.dom.appendChild(e.dom);
    this.fixed = !t.state.facet(cf), this.fixed && (this.dom.style.position = "sticky"), this.syncGutters(!1), t.scrollDOM.insertBefore(this.dom, t.contentDOM);
  }
  update(t) {
    if (this.updateGutters(t)) {
      let e = this.prevViewport, n = t.view.viewport, r = Math.min(e.to, n.to) - Math.max(e.from, n.from);
      this.syncGutters(r < (n.to - n.from) * 0.8);
    }
    t.geometryChanged && (this.dom.style.minHeight = this.view.contentHeight + "px"), this.view.state.facet(cf) != !this.fixed && (this.fixed = !this.fixed, this.dom.style.position = this.fixed ? "sticky" : ""), this.prevViewport = t.view.viewport;
  }
  syncGutters(t) {
    let e = this.dom.nextSibling;
    t && this.dom.remove();
    let n = te.iter(this.view.state.facet(Vl), this.view.viewport.from), r = [], i = this.gutters.map((s) => new Rue(s, this.view.viewport, -this.view.documentPadding.top));
    for (let s of this.view.viewportLineBlocks)
      if (r.length && (r = []), Array.isArray(s.type)) {
        let o = !0;
        for (let l of s.type)
          if (l.type == Se.Text && o) {
            af(n, r, l.from);
            for (let c of i)
              c.line(this.view, l, r);
            o = !1;
          } else if (l.widget)
            for (let c of i)
              c.widget(this.view, l);
      } else if (s.type == Se.Text) {
        af(n, r, s.from);
        for (let o of i)
          o.line(this.view, s, r);
      }
    for (let s of i)
      s.finish();
    t && this.view.scrollDOM.insertBefore(this.dom, e);
  }
  updateGutters(t) {
    let e = t.startState.facet(Vs), n = t.state.facet(Vs), r = t.docChanged || t.heightChanged || t.viewportChanged || !te.eq(t.startState.facet(Vl), t.state.facet(Vl), t.view.viewport.from, t.view.viewport.to);
    if (e == n)
      for (let i of this.gutters)
        i.update(t) && (r = !0);
    else {
      r = !0;
      let i = [];
      for (let s of n) {
        let o = e.indexOf(s);
        o < 0 ? i.push(new S0(this.view, s)) : (this.gutters[o].update(t), i.push(this.gutters[o]));
      }
      for (let s of this.gutters)
        s.dom.remove(), i.indexOf(s) < 0 && s.destroy();
      for (let s of i)
        this.dom.appendChild(s.dom);
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
    return !n || n.gutters.length == 0 || !n.fixed ? null : e.textDirection == _e.LTR ? { left: n.dom.offsetWidth } : { right: n.dom.offsetWidth };
  })
});
function _0(t) {
  return Array.isArray(t) ? t : [t];
}
function af(t, e, n) {
  for (; t.value && t.from <= n; )
    t.from == n && e.push(t.value), t.next();
}
class Rue {
  constructor(e, n, r) {
    this.gutter = e, this.height = r, this.i = 0, this.cursor = te.iter(e.markers, n.from);
  }
  addElement(e, n, r) {
    let { gutter: i } = this, s = n.top - this.height;
    if (this.i == i.elements.length) {
      let o = new pv(e, n.height, s, r);
      i.elements.push(o), i.dom.appendChild(o.dom);
    } else
      i.elements[this.i].update(e, n.height, s, r);
    this.height = n.bottom, this.i++;
  }
  line(e, n, r) {
    let i = [];
    af(this.cursor, i, n.from), r.length && (i = i.concat(r));
    let s = this.gutter.config.lineMarker(e, n, i);
    s && i.unshift(s);
    let o = this.gutter;
    i.length == 0 && !o.config.renderEmptyElements || this.addElement(e, n, i);
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
class S0 {
  constructor(e, n) {
    this.view = e, this.config = n, this.elements = [], this.spacer = null, this.dom = document.createElement("div"), this.dom.className = "cm-gutter" + (this.config.class ? " " + this.config.class : "");
    for (let r in n.domEventHandlers)
      this.dom.addEventListener(r, (i) => {
        let s = i.target, o;
        if (s != this.dom && this.dom.contains(s)) {
          for (; s.parentNode != this.dom; )
            s = s.parentNode;
          let c = s.getBoundingClientRect();
          o = (c.top + c.bottom) / 2;
        } else
          o = i.clientY;
        let l = e.lineBlockAtHeight(o - e.documentTop);
        n.domEventHandlers[r](e, l, i) && i.preventDefault();
      });
    this.markers = _0(n.markers(e)), n.initialSpacer && (this.spacer = new pv(e, 0, 0, [n.initialSpacer(e)]), this.dom.appendChild(this.spacer.dom), this.spacer.dom.style.cssText += "visibility: hidden; pointer-events: none");
  }
  update(e) {
    let n = this.markers;
    if (this.markers = _0(this.config.markers(e.view)), this.spacer && this.config.updateSpacer) {
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
class pv {
  constructor(e, n, r, i) {
    this.height = -1, this.above = 0, this.markers = [], this.dom = document.createElement("div"), this.dom.className = "cm-gutterElement", this.update(e, n, r, i);
  }
  update(e, n, r, i) {
    this.height != n && (this.dom.style.height = (this.height = n) + "px"), this.above != r && (this.dom.style.marginTop = (this.above = r) ? r + "px" : ""), Iue(this.markers, i) || this.setMarkers(e, i);
  }
  setMarkers(e, n) {
    let r = "cm-gutterElement", i = this.dom.firstChild;
    for (let s = 0, o = 0; ; ) {
      let l = o, c = s < n.length ? n[s++] : null, a = !1;
      if (c) {
        let h = c.elementClass;
        h && (r += " " + h);
        for (let u = o; u < this.markers.length; u++)
          if (this.markers[u].compare(c)) {
            l = u, a = !0;
            break;
          }
      } else
        l = this.markers.length;
      for (; o < l; ) {
        let h = this.markers[o++];
        if (h.toDOM) {
          h.destroy(i);
          let u = i.nextSibling;
          i.remove(), i = u;
        }
      }
      if (!c)
        break;
      c.toDOM && (a ? i = i.nextSibling : this.dom.insertBefore(c.toDOM(e), i)), a && o++;
    }
    this.dom.className = r, this.markers = n;
  }
  destroy() {
    this.setMarkers(null, []);
  }
}
function Iue(t, e) {
  if (t.length != e.length)
    return !1;
  for (let n = 0; n < t.length; n++)
    if (!t[n].compare(e[n]))
      return !1;
  return !0;
}
const Nue = /* @__PURE__ */ N.define(), Ci = /* @__PURE__ */ N.define({
  combine(t) {
    return Sn(t, { formatNumber: String, domEventHandlers: {} }, {
      domEventHandlers(e, n) {
        let r = Object.assign({}, e);
        for (let i in n) {
          let s = r[i], o = n[i];
          r[i] = s ? (l, c, a) => s(l, c, a) || o(l, c, a) : o;
        }
        return r;
      }
    });
  }
});
class Mh extends $n {
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
function Oh(t, e) {
  return t.state.facet(Ci).formatNumber(e, t.state);
}
const Pue = /* @__PURE__ */ Vs.compute([Ci], (t) => ({
  class: "cm-lineNumbers",
  renderEmptyElements: !1,
  markers(e) {
    return e.state.facet(Nue);
  },
  lineMarker(e, n, r) {
    return r.some((i) => i.toDOM) ? null : new Mh(Oh(e, e.state.doc.lineAt(n.from).number));
  },
  widgetMarker: () => null,
  lineMarkerChange: (e) => e.startState.facet(Ci) != e.state.facet(Ci),
  initialSpacer(e) {
    return new Mh(Oh(e, C0(e.state.doc.lines)));
  },
  updateSpacer(e, n) {
    let r = Oh(n.view, C0(n.view.state.doc.lines));
    return r == e.number ? e : new Mh(r);
  },
  domEventHandlers: t.facet(Ci).domEventHandlers
}));
function Fue(t = {}) {
  return [
    Ci.of(t),
    dv(),
    Pue
  ];
}
function C0(t) {
  let e = 9;
  for (; e < t; )
    e = e * 10 + 9;
  return e;
}
const Bue = /* @__PURE__ */ new class extends $n {
  constructor() {
    super(...arguments), this.elementClass = "cm-activeLineGutter";
  }
}(), que = /* @__PURE__ */ Vl.compute(["selection"], (t) => {
  let e = [], n = -1;
  for (let r of t.selection.ranges) {
    let i = t.doc.lineAt(r.head).from;
    i > n && (n = i, e.push(Bue.range(i)));
  }
  return te.of(e);
});
function $ue() {
  return que;
}
const Hue = 1024;
let zue = 0;
class Lh {
  constructor(e, n) {
    this.from = e, this.to = n;
  }
}
class Z {
  constructor(e = {}) {
    this.id = zue++, this.perNode = !!e.perNode, this.deserialize = e.deserialize || (() => {
      throw new Error("This node type doesn't define a deserialize function");
    });
  }
  add(e) {
    if (this.perNode)
      throw new RangeError("Can't add per-node props to node types");
    return typeof e != "function" && (e = Bt.match(e)), (n) => {
      let r = e(n);
      return r === void 0 ? null : [this, r];
    };
  }
}
Z.closedBy = new Z({ deserialize: (t) => t.split(" ") });
Z.openedBy = new Z({ deserialize: (t) => t.split(" ") });
Z.group = new Z({ deserialize: (t) => t.split(" ") });
Z.contextHash = new Z({ perNode: !0 });
Z.lookAhead = new Z({ perNode: !0 });
Z.mounted = new Z({ perNode: !0 });
const Vue = /* @__PURE__ */ Object.create(null);
class Bt {
  constructor(e, n, r, i = 0) {
    this.name = e, this.props = n, this.id = r, this.flags = i;
  }
  static define(e) {
    let n = e.props && e.props.length ? /* @__PURE__ */ Object.create(null) : Vue, r = (e.top ? 1 : 0) | (e.skipped ? 2 : 0) | (e.error ? 4 : 0) | (e.name == null ? 8 : 0), i = new Bt(e.name || "", n, e.id, r);
    if (e.props) {
      for (let s of e.props)
        if (Array.isArray(s) || (s = s(i)), s) {
          if (s[0].perNode)
            throw new RangeError("Can't store a per-node prop on a node type");
          n[s[0].id] = s[1];
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
      let n = this.prop(Z.group);
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
      for (let i = r.prop(Z.group), s = -1; s < (i ? i.length : 0); s++) {
        let o = n[s < 0 ? r.name : i[s]];
        if (o)
          return o;
      }
    };
  }
}
Bt.none = new Bt("", /* @__PURE__ */ Object.create(null), 0, 8);
const dl = /* @__PURE__ */ new WeakMap(), A0 = /* @__PURE__ */ new WeakMap();
var We;
(function(t) {
  t[t.ExcludeBuffers = 1] = "ExcludeBuffers", t[t.IncludeAnonymous = 2] = "IncludeAnonymous", t[t.IgnoreMounts = 4] = "IgnoreMounts", t[t.IgnoreOverlays = 8] = "IgnoreOverlays";
})(We || (We = {}));
class et {
  constructor(e, n, r, i, s) {
    if (this.type = e, this.children = n, this.positions = r, this.length = i, this.props = null, s && s.length) {
      this.props = /* @__PURE__ */ Object.create(null);
      for (let [o, l] of s)
        this.props[typeof o == "number" ? o : o.id] = l;
    }
  }
  toString() {
    let e = this.prop(Z.mounted);
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
    return new vc(this.topNode, e);
  }
  cursorAt(e, n = 0, r = 0) {
    let i = dl.get(this) || this.topNode, s = new vc(i);
    return s.moveTo(e, n), dl.set(this, s._tree), s;
  }
  get topNode() {
    return new Nn(this, 0, 0, null);
  }
  resolve(e, n = 0) {
    let r = Ki(dl.get(this) || this.topNode, e, n, !1);
    return dl.set(this, r), r;
  }
  resolveInner(e, n = 0) {
    let r = Ki(A0.get(this) || this.topNode, e, n, !0);
    return A0.set(this, r), r;
  }
  iterate(e) {
    let { enter: n, leave: r, from: i = 0, to: s = this.length } = e, o = e.mode || 0, l = (o & We.IncludeAnonymous) > 0;
    for (let c = this.cursor(o | We.IncludeAnonymous); ; ) {
      let a = !1;
      if (c.from <= s && c.to >= i && (!l && c.type.isAnonymous || n(c) !== !1)) {
        if (c.firstChild())
          continue;
        a = !0;
      }
      for (; a && r && (l || !c.type.isAnonymous) && r(c), !c.nextSibling(); ) {
        if (!c.parent())
          return;
        a = !0;
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
    return this.children.length <= 8 ? this : Td(Bt.none, this.children, this.positions, 0, this.children.length, 0, this.length, (n, r, i) => new et(this.type, n, r, i, this.propValues), e.makeTree || ((n, r, i) => new et(Bt.none, n, r, i)));
  }
  static build(e) {
    return Wue(e);
  }
}
et.empty = new et(Bt.none, [], [], 0);
class Ed {
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
    return new Ed(this.buffer, this.index);
  }
}
class si {
  constructor(e, n, r) {
    this.buffer = e, this.length = n, this.set = r;
  }
  get type() {
    return Bt.none;
  }
  toString() {
    let e = [];
    for (let n = 0; n < this.buffer.length; )
      e.push(this.childString(n)), n = this.buffer[n + 3];
    return e.join(",");
  }
  childString(e) {
    let n = this.buffer[e], r = this.buffer[e + 3], i = this.set.types[n], s = i.name;
    if (/\W/.test(s) && !i.isError && (s = JSON.stringify(s)), e += 4, r == e)
      return s;
    let o = [];
    for (; e < r; )
      o.push(this.childString(e)), e = this.buffer[e + 3];
    return s + "(" + o.join(",") + ")";
  }
  findChild(e, n, r, i, s) {
    let { buffer: o } = this, l = -1;
    for (let c = e; c != n && !(gv(s, i, o[c + 1], o[c + 2]) && (l = c, r > 0)); c = o[c + 3])
      ;
    return l;
  }
  slice(e, n, r) {
    let i = this.buffer, s = new Uint16Array(n - e), o = 0;
    for (let l = e, c = 0; l < n; ) {
      s[c++] = i[l++], s[c++] = i[l++] - r;
      let a = s[c++] = i[l++] - r;
      s[c++] = i[l++] - e, o = Math.max(o, a);
    }
    return new si(s, o, this.set);
  }
}
function gv(t, e, n, r) {
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
function mv(t, e) {
  let n = t.childBefore(e);
  for (; n; ) {
    let r = n.lastChild;
    if (!r || r.to != n.to)
      break;
    r.type.isError && r.from == r.to ? (t = n, n = r.prevSibling) : n = r;
  }
  return t;
}
function Ki(t, e, n, r) {
  for (var i; t.from == t.to || (n < 1 ? t.from >= e : t.from > e) || (n > -1 ? t.to <= e : t.to < e); ) {
    let o = !r && t instanceof Nn && t.index < 0 ? null : t.parent;
    if (!o)
      return t;
    t = o;
  }
  let s = r ? 0 : We.IgnoreOverlays;
  if (r)
    for (let o = t, l = o.parent; l; o = l, l = o.parent)
      o instanceof Nn && o.index < 0 && ((i = l.enter(e, n, s)) === null || i === void 0 ? void 0 : i.from) != o.from && (t = l);
  for (; ; ) {
    let o = t.enter(e, n, s);
    if (!o)
      return t;
    t = o;
  }
}
class Nn {
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
  nextChild(e, n, r, i, s = 0) {
    for (let o = this; ; ) {
      for (let { children: l, positions: c } = o._tree, a = n > 0 ? l.length : -1; e != a; e += n) {
        let h = l[e], u = c[e] + o.from;
        if (!!gv(i, r, u, u + h.length)) {
          if (h instanceof si) {
            if (s & We.ExcludeBuffers)
              continue;
            let f = h.findChild(0, h.buffer.length, n, r - u, i);
            if (f > -1)
              return new ir(new Uue(o, h, e, u), null, f);
          } else if (s & We.IncludeAnonymous || !h.type.isAnonymous || Dd(h)) {
            let f;
            if (!(s & We.IgnoreMounts) && h.props && (f = h.prop(Z.mounted)) && !f.overlay)
              return new Nn(f.tree, u, e, o);
            let d = new Nn(h, u, e, o);
            return s & We.IncludeAnonymous || !d.type.isAnonymous ? d : d.nextChild(n < 0 ? h.children.length - 1 : 0, n, r, i);
          }
        }
      }
      if (s & We.IncludeAnonymous || !o.type.isAnonymous || (o.index >= 0 ? e = o.index + n : e = n < 0 ? -1 : o._parent._tree.children.length, o = o._parent, !o))
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
    if (!(r & We.IgnoreOverlays) && (i = this._tree.prop(Z.mounted)) && i.overlay) {
      let s = e - this.from;
      for (let { from: o, to: l } of i.overlay)
        if ((n > 0 ? o <= s : o < s) && (n < 0 ? l >= s : l > s))
          return new Nn(i.tree, i.overlay[0].from + this.from, -1, this);
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
    return new vc(this, e);
  }
  get tree() {
    return this._tree;
  }
  toTree() {
    return this._tree;
  }
  resolve(e, n = 0) {
    return Ki(this, e, n, !1);
  }
  resolveInner(e, n = 0) {
    return Ki(this, e, n, !0);
  }
  enterUnfinishedNodesBefore(e) {
    return mv(this, e);
  }
  getChild(e, n = null, r = null) {
    let i = bc(this, e, n, r);
    return i.length ? i[0] : null;
  }
  getChildren(e, n = null, r = null) {
    return bc(this, e, n, r);
  }
  toString() {
    return this._tree.toString();
  }
  get node() {
    return this;
  }
  matchContext(e) {
    return wc(this, e);
  }
}
function bc(t, e, n, r) {
  let i = t.cursor(), s = [];
  if (!i.firstChild())
    return s;
  if (n != null) {
    for (; !i.type.is(n); )
      if (!i.nextSibling())
        return s;
  }
  for (; ; ) {
    if (r != null && i.type.is(r))
      return s;
    if (i.type.is(e) && s.push(i.node), !i.nextSibling())
      return r == null ? s : [];
  }
}
function wc(t, e, n = e.length - 1) {
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
class Uue {
  constructor(e, n, r, i) {
    this.parent = e, this.buffer = n, this.index = r, this.start = i;
  }
}
class ir {
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
    let { buffer: i } = this.context, s = i.findChild(this.index + 4, i.buffer[this.index + 3], e, n - this.context.start, r);
    return s < 0 ? null : new ir(this.context, this, s);
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
    if (r & We.ExcludeBuffers)
      return null;
    let { buffer: i } = this.context, s = i.findChild(this.index + 4, i.buffer[this.index + 3], n > 0 ? 1 : -1, e - this.context.start, n);
    return s < 0 ? null : new ir(this.context, this, s);
  }
  get parent() {
    return this._parent || this.context.parent.nextSignificantParent();
  }
  externalSibling(e) {
    return this._parent ? null : this.context.parent.nextChild(this.context.index + e, e, 0, 4);
  }
  get nextSibling() {
    let { buffer: e } = this.context, n = e.buffer[this.index + 3];
    return n < (this._parent ? e.buffer[this._parent.index + 3] : e.buffer.length) ? new ir(this.context, this._parent, n) : this.externalSibling(1);
  }
  get prevSibling() {
    let { buffer: e } = this.context, n = this._parent ? this._parent.index + 4 : 0;
    return this.index == n ? this.externalSibling(-1) : new ir(this.context, this._parent, e.findChild(n, this.index, -1, 0, 4));
  }
  cursor(e = 0) {
    return new vc(this, e);
  }
  get tree() {
    return null;
  }
  toTree() {
    let e = [], n = [], { buffer: r } = this.context, i = this.index + 4, s = r.buffer[this.index + 3];
    if (s > i) {
      let o = r.buffer[this.index + 1];
      e.push(r.slice(i, s, o)), n.push(0);
    }
    return new et(this.type, e, n, this.to - this.from);
  }
  resolve(e, n = 0) {
    return Ki(this, e, n, !1);
  }
  resolveInner(e, n = 0) {
    return Ki(this, e, n, !0);
  }
  enterUnfinishedNodesBefore(e) {
    return mv(this, e);
  }
  toString() {
    return this.context.buffer.childString(this.index);
  }
  getChild(e, n = null, r = null) {
    let i = bc(this, e, n, r);
    return i.length ? i[0] : null;
  }
  getChildren(e, n = null, r = null) {
    return bc(this, e, n, r);
  }
  get node() {
    return this;
  }
  matchContext(e) {
    return wc(this, e);
  }
}
class vc {
  get name() {
    return this.type.name;
  }
  constructor(e, n = 0) {
    if (this.mode = n, this.buffer = null, this.stack = [], this.index = 0, this.bufferNode = null, e instanceof Nn)
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
    return e ? e instanceof Nn ? (this.buffer = null, this.yieldNode(e)) : (this.buffer = e.context, this.yieldBuf(e.index, e.type)) : !1;
  }
  toString() {
    return this.buffer ? this.buffer.buffer.childString(this.index) : this._tree.toString();
  }
  enterChild(e, n, r) {
    if (!this.buffer)
      return this.yield(this._tree.nextChild(e < 0 ? this._tree._tree.children.length - 1 : 0, e, n, r, this.mode));
    let { buffer: i } = this.buffer, s = i.findChild(this.index + 4, i.buffer[this.index + 3], e, n - this.buffer.start, r);
    return s < 0 ? !1 : (this.stack.push(this.index), this.yieldBuf(s));
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
    return this.buffer ? r & We.ExcludeBuffers ? !1 : this.enterChild(1, e, n) : this.yield(this._tree.enter(e, n, r));
  }
  parent() {
    if (!this.buffer)
      return this.yieldNode(this.mode & We.IncludeAnonymous ? this._tree._parent : this._tree.parent);
    if (this.stack.length)
      return this.yieldBuf(this.stack.pop());
    let e = this.mode & We.IncludeAnonymous ? this.buffer.parent : this.buffer.parent.nextSignificantParent();
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
        for (let s = 0; s < this.index; s++)
          if (i.buffer.buffer[s + 3] < this.index)
            return !1;
      ({ index: n, parent: r } = i);
    } else
      ({ index: n, _parent: r } = this._tree);
    for (; r; { index: n, _parent: r } = r)
      if (n > -1)
        for (let s = n + e, o = e < 0 ? -1 : r._tree.children.length; s != o; s += e) {
          let l = r._tree.children[s];
          if (this.mode & We.IncludeAnonymous || l instanceof si || !l.type.isAnonymous || Dd(l))
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
        for (let i = this.index, s = this.stack.length; s >= 0; ) {
          for (let o = e; o; o = o._parent)
            if (o.index == i) {
              if (i == this.index)
                return o;
              n = o, r = s + 1;
              break e;
            }
          i = this.stack[--s];
        }
    }
    for (let i = r; i < this.stack.length; i++)
      n = new ir(this.buffer, n, this.stack[i]);
    return this.bufferNode = new ir(this.buffer, n, this.index);
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
      return wc(this.node, e);
    let { buffer: n } = this.buffer, { types: r } = n.set;
    for (let i = e.length - 1, s = this.stack.length - 1; i >= 0; s--) {
      if (s < 0)
        return wc(this.node, e, i);
      let o = r[n.buffer[this.stack[s]]];
      if (!o.isAnonymous) {
        if (e[i] && e[i] != o.name)
          return !1;
        i--;
      }
    }
    return !0;
  }
}
function Dd(t) {
  return t.children.some((e) => e instanceof si || !e.type.isAnonymous || Dd(e));
}
function Wue(t) {
  var e;
  let { buffer: n, nodeSet: r, maxBufferLength: i = Hue, reused: s = [], minRepeatType: o = r.types.length } = t, l = Array.isArray(n) ? new Ed(n, n.length) : n, c = r.types, a = 0, h = 0;
  function u(w, x, v, S, R) {
    let { id: L, start: D, end: z, size: re } = l, J = h;
    for (; re < 0; )
      if (l.next(), re == -1) {
        let le = s[L];
        v.push(le), S.push(D - w);
        return;
      } else if (re == -3) {
        a = L;
        return;
      } else if (re == -4) {
        h = L;
        return;
      } else
        throw new RangeError(`Unrecognized record size: ${re}`);
    let A = c[L], U, $, me = D - w;
    if (z - D <= i && ($ = g(l.pos - x, R))) {
      let le = new Uint16Array($.size - $.skip), se = l.pos - $.size, ce = le.length;
      for (; l.pos > se; )
        ce = m($.start, le, ce);
      U = new si(le, z - $.start, r), me = $.start - w;
    } else {
      let le = l.pos - re;
      l.next();
      let se = [], ce = [], ve = L >= o ? L : -1, oe = 0, $t = z;
      for (; l.pos > le; )
        ve >= 0 && l.id == ve && l.size >= 0 ? (l.end <= $t - i && (d(se, ce, D, oe, l.end, $t, ve, J), oe = se.length, $t = l.end), l.next()) : u(D, le, se, ce, ve);
      if (ve >= 0 && oe > 0 && oe < se.length && d(se, ce, D, oe, D, $t, ve, J), se.reverse(), ce.reverse(), ve > -1 && oe > 0) {
        let fe = f(A);
        U = Td(A, se, ce, 0, se.length, 0, z - D, fe, fe);
      } else
        U = p(A, se, ce, z - D, J - z);
    }
    v.push(U), S.push(me);
  }
  function f(w) {
    return (x, v, S) => {
      let R = 0, L = x.length - 1, D, z;
      if (L >= 0 && (D = x[L]) instanceof et) {
        if (!L && D.type == w && D.length == S)
          return D;
        (z = D.prop(Z.lookAhead)) && (R = v[L] + D.length + z);
      }
      return p(w, x, v, S, R);
    };
  }
  function d(w, x, v, S, R, L, D, z) {
    let re = [], J = [];
    for (; w.length > S; )
      re.push(w.pop()), J.push(x.pop() + v - R);
    w.push(p(r.types[D], re, J, L - R, z - L)), x.push(R - v);
  }
  function p(w, x, v, S, R = 0, L) {
    if (a) {
      let D = [Z.contextHash, a];
      L = L ? [D].concat(L) : [D];
    }
    if (R > 25) {
      let D = [Z.lookAhead, R];
      L = L ? [D].concat(L) : [D];
    }
    return new et(w, x, v, S, L);
  }
  function g(w, x) {
    let v = l.fork(), S = 0, R = 0, L = 0, D = v.end - i, z = { size: 0, start: 0, skip: 0 };
    e:
      for (let re = v.pos - w; v.pos > re; ) {
        let J = v.size;
        if (v.id == x && J >= 0) {
          z.size = S, z.start = R, z.skip = L, L += 4, S += 4, v.next();
          continue;
        }
        let A = v.pos - J;
        if (J < 0 || A < re || v.start < D)
          break;
        let U = v.id >= o ? 4 : 0, $ = v.start;
        for (v.next(); v.pos > A; ) {
          if (v.size < 0)
            if (v.size == -3)
              U += 4;
            else
              break e;
          else
            v.id >= o && (U += 4);
          v.next();
        }
        R = $, S += J, L += U;
      }
    return (x < 0 || S == w) && (z.size = S, z.start = R, z.skip = L), z.size > 4 ? z : void 0;
  }
  function m(w, x, v) {
    let { id: S, start: R, end: L, size: D } = l;
    if (l.next(), D >= 0 && S < o) {
      let z = v;
      if (D > 4) {
        let re = l.pos - (D - 4);
        for (; l.pos > re; )
          v = m(w, x, v);
      }
      x[--v] = z, x[--v] = L - w, x[--v] = R - w, x[--v] = S;
    } else
      D == -3 ? a = S : D == -4 && (h = S);
    return v;
  }
  let y = [], b = [];
  for (; l.pos > 0; )
    u(t.start || 0, t.bufferStart || 0, y, b, -1);
  let _ = (e = t.length) !== null && e !== void 0 ? e : y.length ? b[0] + y[0].length : 0;
  return new et(c[t.topID], y.reverse(), b.reverse(), _);
}
const E0 = /* @__PURE__ */ new WeakMap();
function Ul(t, e) {
  if (!t.isAnonymous || e instanceof si || e.type != t)
    return 1;
  let n = E0.get(e);
  if (n == null) {
    n = 1;
    for (let r of e.children) {
      if (r.type != t || !(r instanceof et)) {
        n = 1;
        break;
      }
      n += Ul(t, r);
    }
    E0.set(e, n);
  }
  return n;
}
function Td(t, e, n, r, i, s, o, l, c) {
  let a = 0;
  for (let p = r; p < i; p++)
    a += Ul(t, e[p]);
  let h = Math.ceil(a * 1.5 / 8), u = [], f = [];
  function d(p, g, m, y, b) {
    for (let _ = m; _ < y; ) {
      let w = _, x = g[_], v = Ul(t, p[_]);
      for (_++; _ < y; _++) {
        let S = Ul(t, p[_]);
        if (v + S >= h)
          break;
        v += S;
      }
      if (_ == w + 1) {
        if (v > h) {
          let S = p[w];
          d(S.children, S.positions, 0, S.children.length, g[w] + b);
          continue;
        }
        u.push(p[w]);
      } else {
        let S = g[_ - 1] + p[_ - 1].length - x;
        u.push(Td(t, p, g, w, _, x, S, null, c));
      }
      f.push(x + b - s);
    }
  }
  return d(e, n, r, i, 0), (l || c)(u, f, o);
}
class Ur {
  constructor(e, n, r, i, s = !1, o = !1) {
    this.from = e, this.to = n, this.tree = r, this.offset = i, this.open = (s ? 1 : 0) | (o ? 2 : 0);
  }
  get openStart() {
    return (this.open & 1) > 0;
  }
  get openEnd() {
    return (this.open & 2) > 0;
  }
  static addTree(e, n = [], r = !1) {
    let i = [new Ur(0, e.length, e, 0, !1, r)];
    for (let s of n)
      s.to > e.length && i.push(s);
    return i;
  }
  static applyChanges(e, n, r = 128) {
    if (!n.length)
      return e;
    let i = [], s = 1, o = e.length ? e[0] : null;
    for (let l = 0, c = 0, a = 0; ; l++) {
      let h = l < n.length ? n[l] : null, u = h ? h.fromA : 1e9;
      if (u - c >= r)
        for (; o && o.from < u; ) {
          let f = o;
          if (c >= f.from || u <= f.to || a) {
            let d = Math.max(f.from, c) - a, p = Math.min(f.to, u) - a;
            f = d >= p ? null : new Ur(d, p, f.tree, f.offset + a, l > 0, !!h);
          }
          if (f && i.push(f), o.to > u)
            break;
          o = s < e.length ? e[s++] : null;
        }
      if (!h)
        break;
      c = h.toA, a = h.toA - h.toB;
    }
    return i;
  }
}
class jue {
  startParse(e, n, r) {
    return typeof e == "string" && (e = new Gue(e)), r = r ? r.length ? r.map((i) => new Lh(i.from, i.to)) : [new Lh(0, 0)] : [new Lh(0, e.length)], this.createParse(e, n || [], r);
  }
  parse(e, n, r) {
    let i = this.startParse(e, n, r);
    for (; ; ) {
      let s = i.advance();
      if (s)
        return s;
    }
  }
}
class Gue {
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
new Z({ perNode: !0 });
let Yue = 0;
class ln {
  constructor(e, n, r) {
    this.set = e, this.base = n, this.modified = r, this.id = Yue++;
  }
  static define(e) {
    if (e != null && e.base)
      throw new Error("Can not derive from a modified tag");
    let n = new ln([], null, []);
    if (n.set.push(n), e)
      for (let r of e.set)
        n.set.push(r);
    return n;
  }
  static defineModifier() {
    let e = new xc();
    return (n) => n.modified.indexOf(e) > -1 ? n : xc.get(n.base || n, n.modified.concat(e).sort((r, i) => r.id - i.id));
  }
}
let Kue = 0;
class xc {
  constructor() {
    this.instances = [], this.id = Kue++;
  }
  static get(e, n) {
    if (!n.length)
      return e;
    let r = n[0].instances.find((l) => l.base == e && Jue(n, l.modified));
    if (r)
      return r;
    let i = [], s = new ln(i, e, n);
    for (let l of n)
      l.instances.push(s);
    let o = Zue(n);
    for (let l of e.set)
      if (!l.modified.length)
        for (let c of o)
          i.push(xc.get(l, c));
    return s;
  }
}
function Jue(t, e) {
  return t.length == e.length && t.every((n, r) => n == e[r]);
}
function Zue(t) {
  let e = [[]];
  for (let n = 0; n < t.length; n++)
    for (let r = 0, i = e.length; r < i; r++)
      e.push(e[r].concat(t[n]));
  return e.sort((n, r) => r.length - n.length);
}
function Xue(t) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let n in t) {
    let r = t[n];
    Array.isArray(r) || (r = [r]);
    for (let i of n.split(" "))
      if (i) {
        let s = [], o = 2, l = i;
        for (let u = 0; ; ) {
          if (l == "..." && u > 0 && u + 3 == i.length) {
            o = 1;
            break;
          }
          let f = /^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(l);
          if (!f)
            throw new RangeError("Invalid path: " + i);
          if (s.push(f[0] == "*" ? "" : f[0][0] == '"' ? JSON.parse(f[0]) : f[0]), u += f[0].length, u == i.length)
            break;
          let d = i[u++];
          if (u == i.length && d == "!") {
            o = 0;
            break;
          }
          if (d != "/")
            throw new RangeError("Invalid path: " + i);
          l = i.slice(u);
        }
        let c = s.length - 1, a = s[c];
        if (!a)
          throw new RangeError("Invalid path: " + i);
        let h = new kc(r, o, c > 0 ? s.slice(0, c) : null);
        e[a] = h.sort(e[a]);
      }
  }
  return yv.add(e);
}
const yv = new Z();
class kc {
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
kc.empty = new kc([], 2, null);
function bv(t, e) {
  let n = /* @__PURE__ */ Object.create(null);
  for (let s of t)
    if (!Array.isArray(s.tag))
      n[s.tag.id] = s.class;
    else
      for (let o of s.tag)
        n[o.id] = s.class;
  let { scope: r, all: i = null } = e || {};
  return {
    style: (s) => {
      let o = i;
      for (let l of s)
        for (let c of l.set) {
          let a = n[c.id];
          if (a) {
            o = o ? o + " " + a : a;
            break;
          }
        }
      return o;
    },
    scope: r
  };
}
function Que(t, e) {
  let n = null;
  for (let r of t) {
    let i = r.style(e);
    i && (n = n ? n + " " + i : i);
  }
  return n;
}
function efe(t, e, n, r = 0, i = t.length) {
  let s = new tfe(r, Array.isArray(e) ? e : [e], n);
  s.highlightRange(t.cursor(), r, i, "", s.highlighters), s.flush(i);
}
class tfe {
  constructor(e, n, r) {
    this.at = e, this.highlighters = n, this.span = r, this.class = "";
  }
  startSpan(e, n) {
    n != this.class && (this.flush(e), e > this.at && (this.at = e), this.class = n);
  }
  flush(e) {
    e > this.at && this.class && this.span(this.at, e, this.class);
  }
  highlightRange(e, n, r, i, s) {
    let { type: o, from: l, to: c } = e;
    if (l >= r || c <= n)
      return;
    o.isTop && (s = this.highlighters.filter((d) => !d.scope || d.scope(o)));
    let a = i, h = nfe(e) || kc.empty, u = Que(s, h.tags);
    if (u && (a && (a += " "), a += u, h.mode == 1 && (i += (i ? " " : "") + u)), this.startSpan(Math.max(n, l), a), h.opaque)
      return;
    let f = e.tree && e.tree.prop(Z.mounted);
    if (f && f.overlay) {
      let d = e.node.enter(f.overlay[0].from + l, 1), p = this.highlighters.filter((m) => !m.scope || m.scope(f.tree.type)), g = e.firstChild();
      for (let m = 0, y = l; ; m++) {
        let b = m < f.overlay.length ? f.overlay[m] : null, _ = b ? b.from + l : c, w = Math.max(n, y), x = Math.min(r, _);
        if (w < x && g)
          for (; e.from < x && (this.highlightRange(e, w, x, i, s), this.startSpan(Math.min(x, e.to), a), !(e.to >= _ || !e.nextSibling())); )
            ;
        if (!b || _ > r)
          break;
        y = b.to + l, y > n && (this.highlightRange(d.cursor(), Math.max(n, b.from + l), Math.min(r, y), "", p), this.startSpan(Math.min(r, y), a));
      }
      g && e.parent();
    } else if (e.firstChild()) {
      f && (i = "");
      do
        if (!(e.to <= n)) {
          if (e.from >= r)
            break;
          this.highlightRange(e, n, r, i, s), this.startSpan(Math.min(r, e.to), a);
        }
      while (e.nextSibling());
      e.parent();
    }
  }
}
function nfe(t) {
  let e = t.type.prop(yv);
  for (; e && e.context && !t.matchContext(e.context); )
    e = e.next;
  return e || null;
}
const T = ln.define, pl = T(), Kn = T(), D0 = T(Kn), T0 = T(Kn), Jn = T(), gl = T(Jn), Rh = T(Jn), sn = T(), Mr = T(sn), tn = T(), nn = T(), hf = T(), Cs = T(hf), ml = T(), O = {
  comment: pl,
  lineComment: T(pl),
  blockComment: T(pl),
  docComment: T(pl),
  name: Kn,
  variableName: T(Kn),
  typeName: D0,
  tagName: T(D0),
  propertyName: T0,
  attributeName: T(T0),
  className: T(Kn),
  labelName: T(Kn),
  namespace: T(Kn),
  macroName: T(Kn),
  literal: Jn,
  string: gl,
  docString: T(gl),
  character: T(gl),
  attributeValue: T(gl),
  number: Rh,
  integer: T(Rh),
  float: T(Rh),
  bool: T(Jn),
  regexp: T(Jn),
  escape: T(Jn),
  color: T(Jn),
  url: T(Jn),
  keyword: tn,
  self: T(tn),
  null: T(tn),
  atom: T(tn),
  unit: T(tn),
  modifier: T(tn),
  operatorKeyword: T(tn),
  controlKeyword: T(tn),
  definitionKeyword: T(tn),
  moduleKeyword: T(tn),
  operator: nn,
  derefOperator: T(nn),
  arithmeticOperator: T(nn),
  logicOperator: T(nn),
  bitwiseOperator: T(nn),
  compareOperator: T(nn),
  updateOperator: T(nn),
  definitionOperator: T(nn),
  typeOperator: T(nn),
  controlOperator: T(nn),
  punctuation: hf,
  separator: T(hf),
  bracket: Cs,
  angleBracket: T(Cs),
  squareBracket: T(Cs),
  paren: T(Cs),
  brace: T(Cs),
  content: sn,
  heading: Mr,
  heading1: T(Mr),
  heading2: T(Mr),
  heading3: T(Mr),
  heading4: T(Mr),
  heading5: T(Mr),
  heading6: T(Mr),
  contentSeparator: T(sn),
  list: T(sn),
  quote: T(sn),
  emphasis: T(sn),
  strong: T(sn),
  link: T(sn),
  monospace: T(sn),
  strikethrough: T(sn),
  inserted: T(),
  deleted: T(),
  changed: T(),
  invalid: T(),
  meta: ml,
  documentMeta: T(ml),
  annotation: T(ml),
  processingInstruction: T(ml),
  definition: ln.defineModifier(),
  constant: ln.defineModifier(),
  function: ln.defineModifier(),
  standard: ln.defineModifier(),
  local: ln.defineModifier(),
  special: ln.defineModifier()
};
bv([
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
var Ih;
const Ps = /* @__PURE__ */ new Z(), rfe = /* @__PURE__ */ new Z();
class fn {
  constructor(e, n, r = [], i = "") {
    this.data = e, this.name = i, X.prototype.hasOwnProperty("tree") || Object.defineProperty(X.prototype, "tree", { get() {
      return tt(this);
    } }), this.parser = n, this.extension = [
      br.of(this),
      X.languageData.of((s, o, l) => {
        let c = M0(s, o, l), a = c.type.prop(Ps);
        if (!a)
          return [];
        let h = s.facet(a), u = c.type.prop(rfe);
        if (u) {
          let f = c.resolve(o - c.from, l);
          for (let d of u)
            if (d.test(f, s)) {
              let p = s.facet(d.facet);
              return d.type == "replace" ? p : p.concat(h);
            }
        }
        return h;
      })
    ].concat(r);
  }
  isActiveAt(e, n, r = -1) {
    return M0(e, n, r).type.prop(Ps) == this.data;
  }
  findRegions(e) {
    let n = e.facet(br);
    if ((n == null ? void 0 : n.data) == this.data)
      return [{ from: 0, to: e.doc.length }];
    if (!n || !n.allowsNesting)
      return [];
    let r = [], i = (s, o) => {
      if (s.prop(Ps) == this.data) {
        r.push({ from: o, to: o + s.length });
        return;
      }
      let l = s.prop(Z.mounted);
      if (l) {
        if (l.tree.prop(Ps) == this.data) {
          if (l.overlay)
            for (let c of l.overlay)
              r.push({ from: c.from + o, to: c.to + o });
          else
            r.push({ from: o, to: o + s.length });
          return;
        } else if (l.overlay) {
          let c = r.length;
          if (i(l.tree, l.overlay[0].from + o), r.length > c)
            return;
        }
      }
      for (let c = 0; c < s.children.length; c++) {
        let a = s.children[c];
        a instanceof et && i(a, s.positions[c] + o);
      }
    };
    return i(tt(e), 0), r;
  }
  get allowsNesting() {
    return !0;
  }
}
fn.setState = /* @__PURE__ */ K.define();
function M0(t, e, n) {
  let r = t.facet(br), i = tt(t).topNode;
  if (!r || r.allowsNesting)
    for (let s = i; s; s = s.enter(e, n, We.ExcludeBuffers))
      s.type.isTop && (i = s);
  return i;
}
function tt(t) {
  let e = t.field(fn.state, !1);
  return e ? e.tree : et.empty;
}
class ife {
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
let As = null;
class _c {
  constructor(e, n, r = [], i, s, o, l, c) {
    this.parser = e, this.state = n, this.fragments = r, this.tree = i, this.treeLen = s, this.viewport = o, this.skipped = l, this.scheduleOn = c, this.parse = null, this.tempSkipped = [];
  }
  static create(e, n, r) {
    return new _c(e, n, [], et.empty, 0, r, [], null);
  }
  startParse() {
    return this.parser.startParse(new ife(this.state.doc), this.fragments);
  }
  work(e, n) {
    return n != null && n >= this.state.doc.length && (n = void 0), this.tree != et.empty && this.isDone(n != null ? n : this.state.doc.length) ? (this.takeTree(), !0) : this.withContext(() => {
      var r;
      if (typeof e == "number") {
        let i = Date.now() + e;
        e = () => Date.now() > i;
      }
      for (this.parse || (this.parse = this.startParse()), n != null && (this.parse.stoppedAt == null || this.parse.stoppedAt > n) && n < this.state.doc.length && this.parse.stopAt(n); ; ) {
        let i = this.parse.advance();
        if (i)
          if (this.fragments = this.withoutTempSkipped(Ur.addTree(i, this.fragments, this.parse.stoppedAt != null)), this.treeLen = (r = this.parse.stoppedAt) !== null && r !== void 0 ? r : this.state.doc.length, this.tree = i, this.parse = null, this.treeLen < (n != null ? n : this.state.doc.length))
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
    }), this.treeLen = e, this.tree = n, this.fragments = this.withoutTempSkipped(Ur.addTree(this.tree, this.fragments, !0)), this.parse = null);
  }
  withContext(e) {
    let n = As;
    As = this;
    try {
      return e();
    } finally {
      As = n;
    }
  }
  withoutTempSkipped(e) {
    for (let n; n = this.tempSkipped.pop(); )
      e = O0(e, n.from, n.to);
    return e;
  }
  changes(e, n) {
    let { fragments: r, tree: i, treeLen: s, viewport: o, skipped: l } = this;
    if (this.takeTree(), !e.empty) {
      let c = [];
      if (e.iterChangedRanges((a, h, u, f) => c.push({ fromA: a, toA: h, fromB: u, toB: f })), r = Ur.applyChanges(r, c), i = et.empty, s = 0, o = { from: e.mapPos(o.from, -1), to: e.mapPos(o.to, 1) }, this.skipped.length) {
        l = [];
        for (let a of this.skipped) {
          let h = e.mapPos(a.from, 1), u = e.mapPos(a.to, -1);
          h < u && l.push({ from: h, to: u });
        }
      }
    }
    return new _c(this.parser, n, r, i, s, o, l, this.scheduleOn);
  }
  updateViewport(e) {
    if (this.viewport.from == e.from && this.viewport.to == e.to)
      return !1;
    this.viewport = e;
    let n = this.skipped.length;
    for (let r = 0; r < this.skipped.length; r++) {
      let { from: i, to: s } = this.skipped[r];
      i < e.to && s > e.from && (this.fragments = O0(this.fragments, i, s), this.skipped.splice(r--, 1));
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
    return new class extends jue {
      createParse(n, r, i) {
        let s = i[0].from, o = i[i.length - 1].to;
        return {
          parsedPos: s,
          advance() {
            let c = As;
            if (c) {
              for (let a of i)
                c.tempSkipped.push(a);
              e && (c.scheduleOn = c.scheduleOn ? Promise.all([c.scheduleOn, e]) : e);
            }
            return this.parsedPos = o, new et(Bt.none, [], [], o - s);
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
    return As;
  }
}
function O0(t, e, n) {
  return Ur.applyChanges(t, [{ fromA: e, toA: n, fromB: e, toB: n }]);
}
class Ji {
  constructor(e) {
    this.context = e, this.tree = e.tree;
  }
  apply(e) {
    if (!e.docChanged && this.tree == this.context.tree)
      return this;
    let n = this.context.changes(e.changes, e.state), r = this.context.treeLen == e.startState.doc.length ? void 0 : Math.max(e.changes.mapPos(this.context.treeLen), n.viewport.to);
    return n.work(20, r) || n.takeTree(), new Ji(n);
  }
  static init(e) {
    let n = Math.min(3e3, e.doc.length), r = _c.create(e.facet(br).parser, e, { from: 0, to: n });
    return r.work(20, n) || r.takeTree(), new Ji(r);
  }
}
fn.state = /* @__PURE__ */ Ye.define({
  create: Ji.init,
  update(t, e) {
    for (let n of e.effects)
      if (n.is(fn.setState))
        return n.value;
    return e.startState.facet(br) != e.state.facet(br) ? Ji.init(e.state) : t.apply(e);
  }
});
let wv = (t) => {
  let e = setTimeout(() => t(), 500);
  return () => clearTimeout(e);
};
typeof requestIdleCallback < "u" && (wv = (t) => {
  let e = -1, n = setTimeout(() => {
    e = requestIdleCallback(t, { timeout: 500 - 100 });
  }, 100);
  return () => e < 0 ? clearTimeout(n) : cancelIdleCallback(e);
});
const Nh = typeof navigator < "u" && ((Ih = navigator.scheduling) === null || Ih === void 0 ? void 0 : Ih.isInputPending) ? () => navigator.scheduling.isInputPending() : null, sfe = /* @__PURE__ */ Ae.fromClass(class {
  constructor(e) {
    this.view = e, this.working = null, this.workScheduled = 0, this.chunkEnd = -1, this.chunkBudget = -1, this.work = this.work.bind(this), this.scheduleWork();
  }
  update(e) {
    let n = this.view.state.field(fn.state).context;
    (n.updateViewport(e.view.viewport) || this.view.viewport.to > n.treeLen) && this.scheduleWork(), e.docChanged && (this.view.hasFocus && (this.chunkBudget += 50), this.scheduleWork()), this.checkAsyncSchedule(n);
  }
  scheduleWork() {
    if (this.working)
      return;
    let { state: e } = this.view, n = e.field(fn.state);
    (n.tree != n.context.tree || !n.context.isDone(e.doc.length)) && (this.working = wv(this.work));
  }
  work(e) {
    this.working = null;
    let n = Date.now();
    if (this.chunkEnd < n && (this.chunkEnd < 0 || this.view.hasFocus) && (this.chunkEnd = n + 3e4, this.chunkBudget = 3e3), this.chunkBudget <= 0)
      return;
    let { state: r, viewport: { to: i } } = this.view, s = r.field(fn.state);
    if (s.tree == s.context.tree && s.context.isDone(i + 1e5))
      return;
    let o = Date.now() + Math.min(this.chunkBudget, 100, e && !Nh ? Math.max(25, e.timeRemaining() - 5) : 1e9), l = s.context.treeLen < i && r.doc.length > i + 1e3, c = s.context.work(() => Nh && Nh() || Date.now() > o, i + (l ? 0 : 1e5));
    this.chunkBudget -= Date.now() - n, (c || this.chunkBudget <= 0) && (s.context.takeTree(), this.view.dispatch({ effects: fn.setState.of(new Ji(s.context)) })), this.chunkBudget > 0 && !(c && !l) && this.scheduleWork(), this.checkAsyncSchedule(s.context);
  }
  checkAsyncSchedule(e) {
    e.scheduleOn && (this.workScheduled++, e.scheduleOn.then(() => this.scheduleWork()).catch((n) => Lt(this.view.state, n)).then(() => this.workScheduled--), e.scheduleOn = null);
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
}), br = /* @__PURE__ */ N.define({
  combine(t) {
    return t.length ? t[0] : null;
  },
  enables: (t) => [
    fn.state,
    sfe,
    I.contentAttributes.compute([t], (e) => {
      let n = e.facet(t);
      return n && n.name ? { "data-language": n.name } : {};
    })
  ]
}), ofe = /* @__PURE__ */ N.define(), Md = /* @__PURE__ */ N.define({
  combine: (t) => {
    if (!t.length)
      return "  ";
    let e = t[0];
    if (!e || /\S/.test(e) || Array.from(e).some((n) => n != e[0]))
      throw new Error("Invalid indent unit: " + JSON.stringify(t[0]));
    return e;
  }
});
function Sc(t) {
  let e = t.facet(Md);
  return e.charCodeAt(0) == 9 ? t.tabSize * e.length : e.length;
}
function fo(t, e) {
  let n = "", r = t.tabSize, i = t.facet(Md)[0];
  if (i == "	") {
    for (; e >= r; )
      n += "	", e -= r;
    i = " ";
  }
  for (let s = 0; s < e; s++)
    n += i;
  return n;
}
function Od(t, e) {
  t instanceof X && (t = new da(t));
  for (let r of t.state.facet(ofe)) {
    let i = r(t, e);
    if (i !== void 0)
      return i;
  }
  let n = tt(t.state);
  return n.length >= e ? cfe(t, n, e) : null;
}
class da {
  constructor(e, n = {}) {
    this.state = e, this.options = n, this.unit = Sc(e);
  }
  lineAt(e, n = 1) {
    let r = this.state.doc.lineAt(e), { simulateBreak: i, simulateDoubleBreak: s } = this.options;
    return i != null && i >= r.from && i <= r.to ? s && i == e ? { text: "", from: e } : (n < 0 ? i < e : i <= e) ? { text: r.text.slice(i - r.from), from: i } : { text: r.text.slice(0, i - r.from), from: r.from } : r;
  }
  textAfterPos(e, n = 1) {
    if (this.options.simulateDoubleBreak && e == this.options.simulateBreak)
      return "";
    let { text: r, from: i } = this.lineAt(e, n);
    return r.slice(e - i, Math.min(r.length, e + 100 - i));
  }
  column(e, n = 1) {
    let { text: r, from: i } = this.lineAt(e, n), s = this.countColumn(r, e - i), o = this.options.overrideIndentation ? this.options.overrideIndentation(i) : -1;
    return o > -1 && (s += o - this.countColumn(r, r.search(/\S|$/))), s;
  }
  countColumn(e, n = e.length) {
    return ds(e, this.state.tabSize, n);
  }
  lineIndent(e, n = 1) {
    let { text: r, from: i } = this.lineAt(e, n), s = this.options.overrideIndentation;
    if (s) {
      let o = s(i);
      if (o > -1)
        return o;
    }
    return this.countColumn(r, r.search(/\S|$/));
  }
  get simulatedBreak() {
    return this.options.simulateBreak || null;
  }
}
const lfe = /* @__PURE__ */ new Z();
function cfe(t, e, n) {
  return vv(e.resolveInner(n).enterUnfinishedNodesBefore(n), n, t);
}
function afe(t) {
  return t.pos == t.options.simulateBreak && t.options.simulateDoubleBreak;
}
function hfe(t) {
  let e = t.type.prop(lfe);
  if (e)
    return e;
  let n = t.firstChild, r;
  if (n && (r = n.type.prop(Z.closedBy))) {
    let i = t.lastChild, s = i && r.indexOf(i.name) > -1;
    return (o) => pfe(o, !0, 1, void 0, s && !afe(o) ? i.from : void 0);
  }
  return t.parent == null ? ufe : null;
}
function vv(t, e, n) {
  for (; t; t = t.parent) {
    let r = hfe(t);
    if (r)
      return r(Ld.create(n, e, t));
  }
  return null;
}
function ufe() {
  return 0;
}
class Ld extends da {
  constructor(e, n, r) {
    super(e.state, e.options), this.base = e, this.pos = n, this.node = r;
  }
  static create(e, n, r) {
    return new Ld(e, n, r);
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
      if (ffe(r, e))
        break;
      n = this.state.doc.lineAt(r.from);
    }
    return this.lineIndent(n.from);
  }
  continue() {
    let e = this.node.parent;
    return e ? vv(e, this.pos, this.base) : 0;
  }
}
function ffe(t, e) {
  for (let n = e; n; n = n.parent)
    if (t == n)
      return !0;
  return !1;
}
function dfe(t) {
  let e = t.node, n = e.childAfter(e.from), r = e.lastChild;
  if (!n)
    return null;
  let i = t.options.simulateBreak, s = t.state.doc.lineAt(n.from), o = i == null || i <= s.from ? s.to : Math.min(s.to, i);
  for (let l = n.to; ; ) {
    let c = e.childAfter(l);
    if (!c || c == r)
      return null;
    if (!c.type.isSkipped)
      return c.from < o ? n : null;
    l = c.to;
  }
}
function pfe(t, e, n, r, i) {
  let s = t.textAfter, o = s.match(/^\s*/)[0].length, l = r && s.slice(o, o + r.length) == r || i == t.pos + o, c = e ? dfe(t) : null;
  return c ? l ? t.column(c.from) : t.column(c.to) : t.baseIndent + (l ? 0 : t.unit * n);
}
const gfe = 200;
function mfe() {
  return X.transactionFilter.of((t) => {
    if (!t.docChanged || !t.isUserEvent("input.type") && !t.isUserEvent("input.complete"))
      return t;
    let e = t.startState.languageDataAt("indentOnInput", t.startState.selection.main.head);
    if (!e.length)
      return t;
    let n = t.newDoc, { head: r } = t.newSelection.main, i = n.lineAt(r);
    if (r > i.from + gfe)
      return t;
    let s = n.sliceString(i.from, r);
    if (!e.some((a) => a.test(s)))
      return t;
    let { state: o } = t, l = -1, c = [];
    for (let { head: a } of o.selection.ranges) {
      let h = o.doc.lineAt(a);
      if (h.from == l)
        continue;
      l = h.from;
      let u = Od(o, h.from);
      if (u == null)
        continue;
      let f = /^\s*/.exec(h.text)[0], d = fo(o, u);
      f != d && c.push({ from: h.from, to: h.from + f.length, insert: d });
    }
    return c.length ? [t, { changes: c, sequential: !0 }] : t;
  });
}
const yfe = /* @__PURE__ */ N.define(), bfe = /* @__PURE__ */ new Z();
function wfe(t, e, n) {
  let r = tt(t);
  if (r.length < n)
    return null;
  let i = r.resolveInner(n, 1), s = null;
  for (let o = i; o; o = o.parent) {
    if (o.to <= n || o.from > n)
      continue;
    if (s && o.from < e)
      break;
    let l = o.type.prop(bfe);
    if (l && (o.to < r.length - 50 || r.length == t.doc.length || !vfe(o))) {
      let c = l(o, t);
      c && c.from <= n && c.from >= e && c.to > n && (s = c);
    }
  }
  return s;
}
function vfe(t) {
  let e = t.lastChild;
  return e && e.to == t.to && e.type.isError;
}
function Cc(t, e, n) {
  for (let r of t.facet(yfe)) {
    let i = r(t, e, n);
    if (i)
      return i;
  }
  return wfe(t, e, n);
}
function xv(t, e) {
  let n = e.mapPos(t.from, 1), r = e.mapPos(t.to, -1);
  return n >= r ? void 0 : { from: n, to: r };
}
const pa = /* @__PURE__ */ K.define({ map: xv }), Ro = /* @__PURE__ */ K.define({ map: xv });
function kv(t) {
  let e = [];
  for (let { head: n } of t.state.selection.ranges)
    e.some((r) => r.from <= n && r.to >= n) || e.push(t.lineBlockAt(n));
  return e;
}
const Qr = /* @__PURE__ */ Ye.define({
  create() {
    return V.none;
  },
  update(t, e) {
    t = t.map(e.changes);
    for (let n of e.effects)
      if (n.is(pa) && !xfe(t, n.value.from, n.value.to)) {
        let { preparePlaceholder: r } = e.state.facet(Rd), i = r ? V.replace({ widget: new Dfe(r(e.state, n.value)) }) : L0;
        t = t.update({ add: [i.range(n.value.from, n.value.to)] });
      } else
        n.is(Ro) && (t = t.update({
          filter: (r, i) => n.value.from != r || n.value.to != i,
          filterFrom: n.value.from,
          filterTo: n.value.to
        }));
    if (e.selection) {
      let n = !1, { head: r } = e.selection.main;
      t.between(r, r, (i, s) => {
        i < r && s > r && (n = !0);
      }), n && (t = t.update({
        filterFrom: r,
        filterTo: r,
        filter: (i, s) => s <= r || i >= r
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
      e.push(L0.range(r, i));
    }
    return V.set(e, !0);
  }
});
function Ac(t, e, n) {
  var r;
  let i = null;
  return (r = t.field(Qr, !1)) === null || r === void 0 || r.between(e, n, (s, o) => {
    (!i || i.from > s) && (i = { from: s, to: o });
  }), i;
}
function xfe(t, e, n) {
  let r = !1;
  return t.between(e, e, (i, s) => {
    i == e && s == n && (r = !0);
  }), r;
}
function _v(t, e) {
  return t.field(Qr, !1) ? e : e.concat(K.appendConfig.of(Cv()));
}
const kfe = (t) => {
  for (let e of kv(t)) {
    let n = Cc(t.state, e.from, e.to);
    if (n)
      return t.dispatch({ effects: _v(t.state, [pa.of(n), Sv(t, n)]) }), !0;
  }
  return !1;
}, _fe = (t) => {
  if (!t.state.field(Qr, !1))
    return !1;
  let e = [];
  for (let n of kv(t)) {
    let r = Ac(t.state, n.from, n.to);
    r && e.push(Ro.of(r), Sv(t, r, !1));
  }
  return e.length && t.dispatch({ effects: e }), e.length > 0;
};
function Sv(t, e, n = !0) {
  let r = t.state.doc.lineAt(e.from).number, i = t.state.doc.lineAt(e.to).number;
  return I.announce.of(`${t.state.phrase(n ? "Folded lines" : "Unfolded lines")} ${r} ${t.state.phrase("to")} ${i}.`);
}
const Sfe = (t) => {
  let { state: e } = t, n = [];
  for (let r = 0; r < e.doc.length; ) {
    let i = t.lineBlockAt(r), s = Cc(e, i.from, i.to);
    s && n.push(pa.of(s)), r = (s ? t.lineBlockAt(s.to) : i).to + 1;
  }
  return n.length && t.dispatch({ effects: _v(t.state, n) }), !!n.length;
}, Cfe = (t) => {
  let e = t.state.field(Qr, !1);
  if (!e || !e.size)
    return !1;
  let n = [];
  return e.between(0, t.state.doc.length, (r, i) => {
    n.push(Ro.of({ from: r, to: i }));
  }), t.dispatch({ effects: n }), !0;
}, Afe = [
  { key: "Ctrl-Shift-[", mac: "Cmd-Alt-[", run: kfe },
  { key: "Ctrl-Shift-]", mac: "Cmd-Alt-]", run: _fe },
  { key: "Ctrl-Alt-[", run: Sfe },
  { key: "Ctrl-Alt-]", run: Cfe }
], Efe = {
  placeholderDOM: null,
  preparePlaceholder: null,
  placeholderText: "\u2026"
}, Rd = /* @__PURE__ */ N.define({
  combine(t) {
    return Sn(t, Efe);
  }
});
function Cv(t) {
  let e = [Qr, Ofe];
  return t && e.push(Rd.of(t)), e;
}
function Av(t, e) {
  let { state: n } = t, r = n.facet(Rd), i = (o) => {
    let l = t.lineBlockAt(t.posAtDOM(o.target)), c = Ac(t.state, l.from, l.to);
    c && t.dispatch({ effects: Ro.of(c) }), o.preventDefault();
  };
  if (r.placeholderDOM)
    return r.placeholderDOM(t, i, e);
  let s = document.createElement("span");
  return s.textContent = r.placeholderText, s.setAttribute("aria-label", n.phrase("folded code")), s.title = n.phrase("unfold"), s.className = "cm-foldPlaceholder", s.onclick = i, s;
}
const L0 = /* @__PURE__ */ V.replace({ widget: /* @__PURE__ */ new class extends zn {
  toDOM(t) {
    return Av(t, null);
  }
}() });
class Dfe extends zn {
  constructor(e) {
    super(), this.value = e;
  }
  eq(e) {
    return this.value == e.value;
  }
  toDOM(e) {
    return Av(e, this.value);
  }
}
const Tfe = {
  openText: "\u2304",
  closedText: "\u203A",
  markerDOM: null,
  domEventHandlers: {},
  foldingChanged: () => !1
};
class Ph extends $n {
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
function Mfe(t = {}) {
  let e = Object.assign(Object.assign({}, Tfe), t), n = new Ph(e, !0), r = new Ph(e, !1), i = Ae.fromClass(class {
    constructor(o) {
      this.from = o.viewport.from, this.markers = this.buildMarkers(o);
    }
    update(o) {
      (o.docChanged || o.viewportChanged || o.startState.facet(br) != o.state.facet(br) || o.startState.field(Qr, !1) != o.state.field(Qr, !1) || tt(o.startState) != tt(o.state) || e.foldingChanged(o)) && (this.markers = this.buildMarkers(o.view));
    }
    buildMarkers(o) {
      let l = new dr();
      for (let c of o.viewportLineBlocks) {
        let a = Ac(o.state, c.from, c.to) ? r : Cc(o.state, c.from, c.to) ? n : null;
        a && l.add(c.from, c.from, a);
      }
      return l.finish();
    }
  }), { domEventHandlers: s } = e;
  return [
    i,
    Oue({
      class: "cm-foldGutter",
      markers(o) {
        var l;
        return ((l = o.plugin(i)) === null || l === void 0 ? void 0 : l.markers) || te.empty;
      },
      initialSpacer() {
        return new Ph(e, !1);
      },
      domEventHandlers: Object.assign(Object.assign({}, s), { click: (o, l, c) => {
        if (s.click && s.click(o, l, c))
          return !0;
        let a = Ac(o.state, l.from, l.to);
        if (a)
          return o.dispatch({ effects: Ro.of(a) }), !0;
        let h = Cc(o.state, l.from, l.to);
        return h ? (o.dispatch({ effects: pa.of(h) }), !0) : !1;
      } })
    }),
    Cv()
  ];
}
const Ofe = /* @__PURE__ */ I.baseTheme({
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
class ga {
  constructor(e, n) {
    this.specs = e;
    let r;
    function i(l) {
      let c = pr.newName();
      return (r || (r = /* @__PURE__ */ Object.create(null)))["." + c] = l, c;
    }
    const s = typeof n.all == "string" ? n.all : n.all ? i(n.all) : void 0, o = n.scope;
    this.scope = o instanceof fn ? (l) => l.prop(Ps) == o.data : o ? (l) => l == o : void 0, this.style = bv(e.map((l) => ({
      tag: l.tag,
      class: l.class || i(Object.assign({}, l, { tag: null }))
    })), {
      all: s
    }).style, this.module = r ? new pr(r) : null, this.themeType = n.themeType;
  }
  static define(e, n) {
    return new ga(e, n || {});
  }
}
const uf = /* @__PURE__ */ N.define(), Ev = /* @__PURE__ */ N.define({
  combine(t) {
    return t.length ? [t[0]] : null;
  }
});
function Fh(t) {
  let e = t.facet(uf);
  return e.length ? e : t.facet(Ev);
}
function Lfe(t, e) {
  let n = [Ife], r;
  return t instanceof ga && (t.module && n.push(I.styleModule.of(t.module)), r = t.themeType), e != null && e.fallback ? n.push(Ev.of(t)) : r ? n.push(uf.computeN([I.darkTheme], (i) => i.facet(I.darkTheme) == (r == "dark") ? [t] : [])) : n.push(uf.of(t)), n;
}
class Rfe {
  constructor(e) {
    this.markCache = /* @__PURE__ */ Object.create(null), this.tree = tt(e.state), this.decorations = this.buildDeco(e, Fh(e.state));
  }
  update(e) {
    let n = tt(e.state), r = Fh(e.state), i = r != Fh(e.startState);
    n.length < e.view.viewport.to && !i && n.type == this.tree.type ? this.decorations = this.decorations.map(e.changes) : (n != this.tree || e.viewportChanged || i) && (this.tree = n, this.decorations = this.buildDeco(e.view, r));
  }
  buildDeco(e, n) {
    if (!n || !this.tree.length)
      return V.none;
    let r = new dr();
    for (let { from: i, to: s } of e.visibleRanges)
      efe(this.tree, n, (o, l, c) => {
        r.add(o, l, this.markCache[c] || (this.markCache[c] = V.mark({ class: c })));
      }, i, s);
    return r.finish();
  }
}
const Ife = /* @__PURE__ */ fs.high(/* @__PURE__ */ Ae.fromClass(Rfe, {
  decorations: (t) => t.decorations
})), Nfe = /* @__PURE__ */ ga.define([
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
]), Pfe = /* @__PURE__ */ I.baseTheme({
  "&.cm-focused .cm-matchingBracket": { backgroundColor: "#328c8252" },
  "&.cm-focused .cm-nonmatchingBracket": { backgroundColor: "#bb555544" }
}), Dv = 1e4, Tv = "()[]{}", Mv = /* @__PURE__ */ N.define({
  combine(t) {
    return Sn(t, {
      afterCursor: !0,
      brackets: Tv,
      maxScanDistance: Dv,
      renderMatch: qfe
    });
  }
}), Ffe = /* @__PURE__ */ V.mark({ class: "cm-matchingBracket" }), Bfe = /* @__PURE__ */ V.mark({ class: "cm-nonmatchingBracket" });
function qfe(t) {
  let e = [], n = t.matched ? Ffe : Bfe;
  return e.push(n.range(t.start.from, t.start.to)), t.end && e.push(n.range(t.end.from, t.end.to)), e;
}
const $fe = /* @__PURE__ */ Ye.define({
  create() {
    return V.none;
  },
  update(t, e) {
    if (!e.docChanged && !e.selection)
      return t;
    let n = [], r = e.state.facet(Mv);
    for (let i of e.state.selection.ranges) {
      if (!i.empty)
        continue;
      let s = dn(e.state, i.head, -1, r) || i.head > 0 && dn(e.state, i.head - 1, 1, r) || r.afterCursor && (dn(e.state, i.head, 1, r) || i.head < e.state.doc.length && dn(e.state, i.head + 1, -1, r));
      s && (n = n.concat(r.renderMatch(s, e.state)));
    }
    return V.set(n, !0);
  },
  provide: (t) => I.decorations.from(t)
}), Hfe = [
  $fe,
  Pfe
];
function zfe(t = {}) {
  return [Mv.of(t), Hfe];
}
const Vfe = /* @__PURE__ */ new Z();
function ff(t, e, n) {
  let r = t.prop(e < 0 ? Z.openedBy : Z.closedBy);
  if (r)
    return r;
  if (t.name.length == 1) {
    let i = n.indexOf(t.name);
    if (i > -1 && i % 2 == (e < 0 ? 1 : 0))
      return [n[i + e]];
  }
  return null;
}
function df(t) {
  let e = t.type.prop(Vfe);
  return e ? e(t.node) : t;
}
function dn(t, e, n, r = {}) {
  let i = r.maxScanDistance || Dv, s = r.brackets || Tv, o = tt(t), l = o.resolveInner(e, n);
  for (let c = l; c; c = c.parent) {
    let a = ff(c.type, n, s);
    if (a && c.from < c.to) {
      let h = df(c);
      if (h && (n > 0 ? e >= h.from && e < h.to : e > h.from && e <= h.to))
        return Ufe(t, e, n, c, h, a, s);
    }
  }
  return Wfe(t, e, n, o, l.type, i, s);
}
function Ufe(t, e, n, r, i, s, o) {
  let l = r.parent, c = { from: i.from, to: i.to }, a = 0, h = l == null ? void 0 : l.cursor();
  if (h && (n < 0 ? h.childBefore(r.from) : h.childAfter(r.to)))
    do
      if (n < 0 ? h.to <= r.from : h.from >= r.to) {
        if (a == 0 && s.indexOf(h.type.name) > -1 && h.from < h.to) {
          let u = df(h);
          return { start: c, end: u ? { from: u.from, to: u.to } : void 0, matched: !0 };
        } else if (ff(h.type, n, o))
          a++;
        else if (ff(h.type, -n, o)) {
          if (a == 0) {
            let u = df(h);
            return {
              start: c,
              end: u && u.from < u.to ? { from: u.from, to: u.to } : void 0,
              matched: !1
            };
          }
          a--;
        }
      }
    while (n < 0 ? h.prevSibling() : h.nextSibling());
  return { start: c, matched: !1 };
}
function Wfe(t, e, n, r, i, s, o) {
  let l = n < 0 ? t.sliceDoc(e - 1, e) : t.sliceDoc(e, e + 1), c = o.indexOf(l);
  if (c < 0 || c % 2 == 0 != n > 0)
    return null;
  let a = { from: n < 0 ? e - 1 : e, to: n > 0 ? e + 1 : e }, h = t.doc.iterRange(e, n > 0 ? t.doc.length : 0), u = 0;
  for (let f = 0; !h.next().done && f <= s; ) {
    let d = h.value;
    n < 0 && (f += d.length);
    let p = e + f * n;
    for (let g = n > 0 ? 0 : d.length - 1, m = n > 0 ? d.length : -1; g != m; g += n) {
      let y = o.indexOf(d[g]);
      if (!(y < 0 || r.resolveInner(p + g, 1).type != i))
        if (y % 2 == 0 == n > 0)
          u++;
        else {
          if (u == 1)
            return { start: a, end: { from: p + g, to: p + g + 1 }, matched: y >> 1 == c >> 1 };
          u--;
        }
    }
    n > 0 && (f += d.length);
  }
  return h.done ? { start: a, matched: !1 } : null;
}
const jfe = /* @__PURE__ */ Object.create(null), R0 = [Bt.none], I0 = [], Gfe = /* @__PURE__ */ Object.create(null);
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
  Gfe[t] = /* @__PURE__ */ Yfe(jfe, e);
function Bh(t, e) {
  I0.indexOf(t) > -1 || (I0.push(t), console.warn(e));
}
function Yfe(t, e) {
  let n = null;
  for (let s of e.split(".")) {
    let o = t[s] || O[s];
    o ? typeof o == "function" ? n ? n = o(n) : Bh(s, `Modifier ${s} used at start of tag`) : n ? Bh(s, `Tag ${s} used as modifier`) : n = o : Bh(s, `Unknown highlighting tag ${s}`);
  }
  if (!n)
    return 0;
  let r = e.replace(/ /g, "_"), i = Bt.define({
    id: R0.length,
    name: r,
    props: [Xue({ [r]: n })]
  });
  return R0.push(i), i.id;
}
const Kfe = (t) => {
  let { state: e } = t, n = e.doc.lineAt(e.selection.main.from), r = Nd(t.state, n.from);
  return r.line ? Jfe(t) : r.block ? Xfe(t) : !1;
};
function Id(t, e) {
  return ({ state: n, dispatch: r }) => {
    if (n.readOnly)
      return !1;
    let i = t(e, n);
    return i ? (r(n.update(i)), !0) : !1;
  };
}
const Jfe = /* @__PURE__ */ Id(tde, 0), Zfe = /* @__PURE__ */ Id(Ov, 0), Xfe = /* @__PURE__ */ Id((t, e) => Ov(t, e, ede(e)), 0);
function Nd(t, e) {
  let n = t.languageDataAt("commentTokens", e);
  return n.length ? n[0] : {};
}
const Es = 50;
function Qfe(t, { open: e, close: n }, r, i) {
  let s = t.sliceDoc(r - Es, r), o = t.sliceDoc(i, i + Es), l = /\s*$/.exec(s)[0].length, c = /^\s*/.exec(o)[0].length, a = s.length - l;
  if (s.slice(a - e.length, a) == e && o.slice(c, c + n.length) == n)
    return {
      open: { pos: r - l, margin: l && 1 },
      close: { pos: i + c, margin: c && 1 }
    };
  let h, u;
  i - r <= 2 * Es ? h = u = t.sliceDoc(r, i) : (h = t.sliceDoc(r, r + Es), u = t.sliceDoc(i - Es, i));
  let f = /^\s*/.exec(h)[0].length, d = /\s*$/.exec(u)[0].length, p = u.length - d - n.length;
  return h.slice(f, f + e.length) == e && u.slice(p, p + n.length) == n ? {
    open: {
      pos: r + f + e.length,
      margin: /\s/.test(h.charAt(f + e.length)) ? 1 : 0
    },
    close: {
      pos: i - d - n.length,
      margin: /\s/.test(u.charAt(p - 1)) ? 1 : 0
    }
  } : null;
}
function ede(t) {
  let e = [];
  for (let n of t.selection.ranges) {
    let r = t.doc.lineAt(n.from), i = n.to <= r.to ? r : t.doc.lineAt(n.to), s = e.length - 1;
    s >= 0 && e[s].to > r.from ? e[s].to = i.to : e.push({ from: r.from + /^\s*/.exec(r.text)[0].length, to: i.to });
  }
  return e;
}
function Ov(t, e, n = e.selection.ranges) {
  let r = n.map((s) => Nd(e, s.from).block);
  if (!r.every((s) => s))
    return null;
  let i = n.map((s, o) => Qfe(e, r[o], s.from, s.to));
  if (t != 2 && !i.every((s) => s))
    return { changes: e.changes(n.map((s, o) => i[o] ? [] : [{ from: s.from, insert: r[o].open + " " }, { from: s.to, insert: " " + r[o].close }])) };
  if (t != 1 && i.some((s) => s)) {
    let s = [];
    for (let o = 0, l; o < i.length; o++)
      if (l = i[o]) {
        let c = r[o], { open: a, close: h } = l;
        s.push({ from: a.pos - c.open.length, to: a.pos + a.margin }, { from: h.pos - h.margin, to: h.pos + c.close.length });
      }
    return { changes: s };
  }
  return null;
}
function tde(t, e, n = e.selection.ranges) {
  let r = [], i = -1;
  for (let { from: s, to: o } of n) {
    let l = r.length, c = 1e9, a = Nd(e, s).line;
    if (!!a) {
      for (let h = s; h <= o; ) {
        let u = e.doc.lineAt(h);
        if (u.from > i && (s == o || o > u.from)) {
          i = u.from;
          let f = /^\s*/.exec(u.text)[0].length, d = f == u.length, p = u.text.slice(f, f + a.length) == a ? f : -1;
          f < u.text.length && f < c && (c = f), r.push({ line: u, comment: p, token: a, indent: f, empty: d, single: !1 });
        }
        h = u.to + 1;
      }
      if (c < 1e9)
        for (let h = l; h < r.length; h++)
          r[h].indent < r[h].line.text.length && (r[h].indent = c);
      r.length == l + 1 && (r[l].single = !0);
    }
  }
  if (t != 2 && r.some((s) => s.comment < 0 && (!s.empty || s.single))) {
    let s = [];
    for (let { line: l, token: c, indent: a, empty: h, single: u } of r)
      (u || !h) && s.push({ from: l.from + a, insert: c + " " });
    let o = e.changes(s);
    return { changes: o, selection: e.selection.map(o, 1) };
  } else if (t != 1 && r.some((s) => s.comment >= 0)) {
    let s = [];
    for (let { line: o, comment: l, token: c } of r)
      if (l >= 0) {
        let a = o.from + l, h = a + c.length;
        o.text[h - o.from] == " " && h++, s.push({ from: a, to: h });
      }
    return { changes: s };
  }
  return null;
}
const pf = /* @__PURE__ */ Xt.define(), nde = /* @__PURE__ */ Xt.define(), rde = /* @__PURE__ */ N.define(), Lv = /* @__PURE__ */ N.define({
  combine(t) {
    return Sn(t, {
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
function ide(t) {
  let e = 0;
  return t.iterChangedRanges((n, r) => e = r), e;
}
const Rv = /* @__PURE__ */ Ye.define({
  create() {
    return pn.empty;
  },
  update(t, e) {
    let n = e.state.facet(Lv), r = e.annotation(pf);
    if (r) {
      let c = e.docChanged ? C.single(ide(e.changes)) : void 0, a = yt.fromTransaction(e, c), h = r.side, u = h == 0 ? t.undone : t.done;
      return a ? u = Ec(u, u.length, n.minDepth, a) : u = Pv(u, e.startState.selection), new pn(h == 0 ? r.rest : u, h == 0 ? u : r.rest);
    }
    let i = e.annotation(nde);
    if ((i == "full" || i == "before") && (t = t.isolate()), e.annotation(Ne.addToHistory) === !1)
      return e.changes.empty ? t : t.addMapping(e.changes.desc);
    let s = yt.fromTransaction(e), o = e.annotation(Ne.time), l = e.annotation(Ne.userEvent);
    return s ? t = t.addChanges(s, o, l, n, e) : e.selection && (t = t.addSelection(e.startState.selection, o, l, n.newGroupDelay)), (i == "full" || i == "after") && (t = t.isolate()), t;
  },
  toJSON(t) {
    return { done: t.done.map((e) => e.toJSON()), undone: t.undone.map((e) => e.toJSON()) };
  },
  fromJSON(t) {
    return new pn(t.done.map(yt.fromJSON), t.undone.map(yt.fromJSON));
  }
});
function sde(t = {}) {
  return [
    Rv,
    Lv.of(t),
    I.domEventHandlers({
      beforeinput(e, n) {
        let r = e.inputType == "historyUndo" ? Iv : e.inputType == "historyRedo" ? gf : null;
        return r ? (e.preventDefault(), r(n)) : !1;
      }
    })
  ];
}
function ma(t, e) {
  return function({ state: n, dispatch: r }) {
    if (!e && n.readOnly)
      return !1;
    let i = n.field(Rv, !1);
    if (!i)
      return !1;
    let s = i.pop(t, n, e);
    return s ? (r(s), !0) : !1;
  };
}
const Iv = /* @__PURE__ */ ma(0, !1), gf = /* @__PURE__ */ ma(1, !1), ode = /* @__PURE__ */ ma(0, !0), lde = /* @__PURE__ */ ma(1, !0);
class yt {
  constructor(e, n, r, i, s) {
    this.changes = e, this.effects = n, this.mapped = r, this.startSelection = i, this.selectionsAfter = s;
  }
  setSelAfter(e) {
    return new yt(this.changes, this.effects, this.mapped, this.startSelection, e);
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
    return new yt(e.changes && Re.fromJSON(e.changes), [], e.mapped && yn.fromJSON(e.mapped), e.startSelection && C.fromJSON(e.startSelection), e.selectionsAfter.map(C.fromJSON));
  }
  static fromTransaction(e, n) {
    let r = Ot;
    for (let i of e.startState.facet(rde)) {
      let s = i(e);
      s.length && (r = r.concat(s));
    }
    return !r.length && e.changes.empty ? null : new yt(e.changes.invert(e.startState.doc), r, void 0, n || e.startState.selection, Ot);
  }
  static selection(e) {
    return new yt(void 0, Ot, void 0, void 0, e);
  }
}
function Ec(t, e, n, r) {
  let i = e + 1 > n + 20 ? e - n - 1 : 0, s = t.slice(i, e);
  return s.push(r), s;
}
function cde(t, e) {
  let n = [], r = !1;
  return t.iterChangedRanges((i, s) => n.push(i, s)), e.iterChangedRanges((i, s, o, l) => {
    for (let c = 0; c < n.length; ) {
      let a = n[c++], h = n[c++];
      l >= a && o <= h && (r = !0);
    }
  }), r;
}
function ade(t, e) {
  return t.ranges.length == e.ranges.length && t.ranges.filter((n, r) => n.empty != e.ranges[r].empty).length === 0;
}
function Nv(t, e) {
  return t.length ? e.length ? t.concat(e) : t : e;
}
const Ot = [], hde = 200;
function Pv(t, e) {
  if (t.length) {
    let n = t[t.length - 1], r = n.selectionsAfter.slice(Math.max(0, n.selectionsAfter.length - hde));
    return r.length && r[r.length - 1].eq(e) ? t : (r.push(e), Ec(t, t.length - 1, 1e9, n.setSelAfter(r)));
  } else
    return [yt.selection([e])];
}
function ude(t) {
  let e = t[t.length - 1], n = t.slice();
  return n[t.length - 1] = e.setSelAfter(e.selectionsAfter.slice(0, e.selectionsAfter.length - 1)), n;
}
function qh(t, e) {
  if (!t.length)
    return t;
  let n = t.length, r = Ot;
  for (; n; ) {
    let i = fde(t[n - 1], e, r);
    if (i.changes && !i.changes.empty || i.effects.length) {
      let s = t.slice(0, n);
      return s[n - 1] = i, s;
    } else
      e = i.mapped, n--, r = i.selectionsAfter;
  }
  return r.length ? [yt.selection(r)] : Ot;
}
function fde(t, e, n) {
  let r = Nv(t.selectionsAfter.length ? t.selectionsAfter.map((l) => l.map(e)) : Ot, n);
  if (!t.changes)
    return yt.selection(r);
  let i = t.changes.map(e), s = e.mapDesc(t.changes, !0), o = t.mapped ? t.mapped.composeDesc(s) : s;
  return new yt(i, K.mapEffects(t.effects, e), o, t.startSelection.map(s), r);
}
const dde = /^(input\.type|delete)($|\.)/;
class pn {
  constructor(e, n, r = 0, i = void 0) {
    this.done = e, this.undone = n, this.prevTime = r, this.prevUserEvent = i;
  }
  isolate() {
    return this.prevTime ? new pn(this.done, this.undone) : this;
  }
  addChanges(e, n, r, i, s) {
    let o = this.done, l = o[o.length - 1];
    return l && l.changes && !l.changes.empty && e.changes && (!r || dde.test(r)) && (!l.selectionsAfter.length && n - this.prevTime < i.newGroupDelay && i.joinToEvent(s, cde(l.changes, e.changes)) || r == "input.type.compose") ? o = Ec(o, o.length - 1, i.minDepth, new yt(e.changes.compose(l.changes), Nv(e.effects, l.effects), l.mapped, l.startSelection, Ot)) : o = Ec(o, o.length, i.minDepth, e), new pn(o, Ot, n, r);
  }
  addSelection(e, n, r, i) {
    let s = this.done.length ? this.done[this.done.length - 1].selectionsAfter : Ot;
    return s.length > 0 && n - this.prevTime < i && r == this.prevUserEvent && r && /^select($|\.)/.test(r) && ade(s[s.length - 1], e) ? this : new pn(Pv(this.done, e), this.undone, n, r);
  }
  addMapping(e) {
    return new pn(qh(this.done, e), qh(this.undone, e), this.prevTime, this.prevUserEvent);
  }
  pop(e, n, r) {
    let i = e == 0 ? this.done : this.undone;
    if (i.length == 0)
      return null;
    let s = i[i.length - 1];
    if (r && s.selectionsAfter.length)
      return n.update({
        selection: s.selectionsAfter[s.selectionsAfter.length - 1],
        annotations: pf.of({ side: e, rest: ude(i) }),
        userEvent: e == 0 ? "select.undo" : "select.redo",
        scrollIntoView: !0
      });
    if (s.changes) {
      let o = i.length == 1 ? Ot : i.slice(0, i.length - 1);
      return s.mapped && (o = qh(o, s.mapped)), n.update({
        changes: s.changes,
        selection: s.startSelection,
        effects: s.effects,
        annotations: pf.of({ side: e, rest: o }),
        filter: !1,
        userEvent: e == 0 ? "undo" : "redo",
        scrollIntoView: !0
      });
    } else
      return null;
  }
}
pn.empty = /* @__PURE__ */ new pn(Ot, Ot);
const pde = [
  { key: "Mod-z", run: Iv, preventDefault: !0 },
  { key: "Mod-y", mac: "Mod-Shift-z", run: gf, preventDefault: !0 },
  { linux: "Ctrl-Shift-z", run: gf, preventDefault: !0 },
  { key: "Mod-u", run: ode, preventDefault: !0 },
  { key: "Alt-u", mac: "Mod-Shift-u", run: lde, preventDefault: !0 }
];
function ps(t, e) {
  return C.create(t.ranges.map(e), t.mainIndex);
}
function Cn(t, e) {
  return t.update({ selection: e, scrollIntoView: !0, userEvent: "select" });
}
function Qt({ state: t, dispatch: e }, n) {
  let r = ps(t.selection, n);
  return r.eq(t.selection) ? !1 : (e(Cn(t, r)), !0);
}
function ya(t, e) {
  return C.cursor(e ? t.to : t.from);
}
function Fv(t, e) {
  return Qt(t, (n) => n.empty ? t.moveByChar(n, e) : ya(n, e));
}
function rt(t) {
  return t.textDirectionAt(t.state.selection.main.head) == _e.LTR;
}
const Bv = (t) => Fv(t, !rt(t)), qv = (t) => Fv(t, rt(t));
function $v(t, e) {
  return Qt(t, (n) => n.empty ? t.moveByGroup(n, e) : ya(n, e));
}
const gde = (t) => $v(t, !rt(t)), mde = (t) => $v(t, rt(t));
function yde(t, e, n) {
  if (e.type.prop(n))
    return !0;
  let r = e.to - e.from;
  return r && (r > 2 || /[^\s,.;:]/.test(t.sliceDoc(e.from, e.to))) || e.firstChild;
}
function ba(t, e, n) {
  let r = tt(t).resolveInner(e.head), i = n ? Z.closedBy : Z.openedBy;
  for (let c = e.head; ; ) {
    let a = n ? r.childAfter(c) : r.childBefore(c);
    if (!a)
      break;
    yde(t, a, i) ? r = a : c = n ? a.to : a.from;
  }
  let s = r.type.prop(i), o, l;
  return s && (o = n ? dn(t, r.from, 1) : dn(t, r.to, -1)) && o.matched ? l = n ? o.end.to : o.end.from : l = n ? r.to : r.from, C.cursor(l, n ? -1 : 1);
}
const bde = (t) => Qt(t, (e) => ba(t.state, e, !rt(t))), wde = (t) => Qt(t, (e) => ba(t.state, e, rt(t)));
function Hv(t, e) {
  return Qt(t, (n) => {
    if (!n.empty)
      return ya(n, e);
    let r = t.moveVertically(n, e);
    return r.head != n.head ? r : t.moveToLineBoundary(n, e);
  });
}
const zv = (t) => Hv(t, !1), Vv = (t) => Hv(t, !0);
function Uv(t) {
  let e = t.scrollDOM.clientHeight < t.scrollDOM.scrollHeight - 2, n = 0, r = 0, i;
  if (e) {
    for (let s of t.state.facet(I.scrollMargins)) {
      let o = s(t);
      o != null && o.top && (n = Math.max(o == null ? void 0 : o.top, n)), o != null && o.bottom && (r = Math.max(o == null ? void 0 : o.bottom, r));
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
function Wv(t, e) {
  let n = Uv(t), { state: r } = t, i = ps(r.selection, (o) => o.empty ? t.moveVertically(o, e, n.height) : ya(o, e));
  if (i.eq(r.selection))
    return !1;
  let s;
  if (n.selfScroll) {
    let o = t.coordsAtPos(r.selection.main.head), l = t.scrollDOM.getBoundingClientRect(), c = l.top + n.marginTop, a = l.bottom - n.marginBottom;
    o && o.top > c && o.bottom < a && (s = I.scrollIntoView(i.main.head, { y: "start", yMargin: o.top - c }));
  }
  return t.dispatch(Cn(r, i), { effects: s }), !0;
}
const N0 = (t) => Wv(t, !1), mf = (t) => Wv(t, !0);
function _r(t, e, n) {
  let r = t.lineBlockAt(e.head), i = t.moveToLineBoundary(e, n);
  if (i.head == e.head && i.head != (n ? r.to : r.from) && (i = t.moveToLineBoundary(e, n, !1)), !n && i.head == r.from && r.length) {
    let s = /^\s*/.exec(t.state.sliceDoc(r.from, Math.min(r.from + 100, r.to)))[0].length;
    s && e.head != r.from + s && (i = C.cursor(r.from + s));
  }
  return i;
}
const vde = (t) => Qt(t, (e) => _r(t, e, !0)), xde = (t) => Qt(t, (e) => _r(t, e, !1)), kde = (t) => Qt(t, (e) => _r(t, e, !rt(t))), _de = (t) => Qt(t, (e) => _r(t, e, rt(t))), Sde = (t) => Qt(t, (e) => C.cursor(t.lineBlockAt(e.head).from, 1)), Cde = (t) => Qt(t, (e) => C.cursor(t.lineBlockAt(e.head).to, -1));
function Ade(t, e, n) {
  let r = !1, i = ps(t.selection, (s) => {
    let o = dn(t, s.head, -1) || dn(t, s.head, 1) || s.head > 0 && dn(t, s.head - 1, 1) || s.head < t.doc.length && dn(t, s.head + 1, -1);
    if (!o || !o.end)
      return s;
    r = !0;
    let l = o.start.from == s.head ? o.end.to : o.end.from;
    return n ? C.range(s.anchor, l) : C.cursor(l);
  });
  return r ? (e(Cn(t, i)), !0) : !1;
}
const Ede = ({ state: t, dispatch: e }) => Ade(t, e, !1);
function qt(t, e) {
  let n = ps(t.state.selection, (r) => {
    let i = e(r);
    return C.range(r.anchor, i.head, i.goalColumn, i.bidiLevel || void 0);
  });
  return n.eq(t.state.selection) ? !1 : (t.dispatch(Cn(t.state, n)), !0);
}
function jv(t, e) {
  return qt(t, (n) => t.moveByChar(n, e));
}
const Gv = (t) => jv(t, !rt(t)), Yv = (t) => jv(t, rt(t));
function Kv(t, e) {
  return qt(t, (n) => t.moveByGroup(n, e));
}
const Dde = (t) => Kv(t, !rt(t)), Tde = (t) => Kv(t, rt(t)), Mde = (t) => qt(t, (e) => ba(t.state, e, !rt(t))), Ode = (t) => qt(t, (e) => ba(t.state, e, rt(t)));
function Jv(t, e) {
  return qt(t, (n) => t.moveVertically(n, e));
}
const Zv = (t) => Jv(t, !1), Xv = (t) => Jv(t, !0);
function Qv(t, e) {
  return qt(t, (n) => t.moveVertically(n, e, Uv(t).height));
}
const P0 = (t) => Qv(t, !1), F0 = (t) => Qv(t, !0), Lde = (t) => qt(t, (e) => _r(t, e, !0)), Rde = (t) => qt(t, (e) => _r(t, e, !1)), Ide = (t) => qt(t, (e) => _r(t, e, !rt(t))), Nde = (t) => qt(t, (e) => _r(t, e, rt(t))), Pde = (t) => qt(t, (e) => C.cursor(t.lineBlockAt(e.head).from)), Fde = (t) => qt(t, (e) => C.cursor(t.lineBlockAt(e.head).to)), B0 = ({ state: t, dispatch: e }) => (e(Cn(t, { anchor: 0 })), !0), q0 = ({ state: t, dispatch: e }) => (e(Cn(t, { anchor: t.doc.length })), !0), $0 = ({ state: t, dispatch: e }) => (e(Cn(t, { anchor: t.selection.main.anchor, head: 0 })), !0), H0 = ({ state: t, dispatch: e }) => (e(Cn(t, { anchor: t.selection.main.anchor, head: t.doc.length })), !0), Bde = ({ state: t, dispatch: e }) => (e(t.update({ selection: { anchor: 0, head: t.doc.length }, userEvent: "select" })), !0), qde = ({ state: t, dispatch: e }) => {
  let n = va(t).map(({ from: r, to: i }) => C.range(r, Math.min(i + 1, t.doc.length)));
  return e(t.update({ selection: C.create(n), userEvent: "select" })), !0;
}, $de = ({ state: t, dispatch: e }) => {
  let n = ps(t.selection, (r) => {
    var i;
    let s = tt(t).resolveInner(r.head, 1);
    for (; !(s.from < r.from && s.to >= r.to || s.to > r.to && s.from <= r.from || !(!((i = s.parent) === null || i === void 0) && i.parent)); )
      s = s.parent;
    return C.range(s.to, s.from);
  });
  return e(Cn(t, n)), !0;
}, Hde = ({ state: t, dispatch: e }) => {
  let n = t.selection, r = null;
  return n.ranges.length > 1 ? r = C.create([n.main]) : n.main.empty || (r = C.create([C.cursor(n.main.head)])), r ? (e(Cn(t, r)), !0) : !1;
};
function wa(t, e) {
  if (t.state.readOnly)
    return !1;
  let n = "delete.selection", { state: r } = t, i = r.changeByRange((s) => {
    let { from: o, to: l } = s;
    if (o == l) {
      let c = e(o);
      c < o ? (n = "delete.backward", c = yl(t, c, !1)) : c > o && (n = "delete.forward", c = yl(t, c, !0)), o = Math.min(o, c), l = Math.max(l, c);
    } else
      o = yl(t, o, !1), l = yl(t, l, !0);
    return o == l ? { range: s } : { changes: { from: o, to: l }, range: C.cursor(o) };
  });
  return i.changes.empty ? !1 : (t.dispatch(r.update(i, {
    scrollIntoView: !0,
    userEvent: n,
    effects: n == "delete.selection" ? I.announce.of(r.phrase("Selection deleted")) : void 0
  })), !0);
}
function yl(t, e, n) {
  if (t instanceof I)
    for (let r of t.state.facet(I.atomicRanges).map((i) => i(t)))
      r.between(e, e, (i, s) => {
        i < e && s > e && (e = n ? s : i);
      });
  return e;
}
const ex = (t, e) => wa(t, (n) => {
  let { state: r } = t, i = r.doc.lineAt(n), s, o;
  if (!e && n > i.from && n < i.from + 200 && !/[^ \t]/.test(s = i.text.slice(0, n - i.from))) {
    if (s[s.length - 1] == "	")
      return n - 1;
    let l = ds(s, r.tabSize), c = l % Sc(r) || Sc(r);
    for (let a = 0; a < c && s[s.length - 1 - a] == " "; a++)
      n--;
    o = n;
  } else
    o = Qe(i.text, n - i.from, e, e) + i.from, o == n && i.number != (e ? r.doc.lines : 1) && (o += e ? 1 : -1);
  return o;
}), yf = (t) => ex(t, !1), tx = (t) => ex(t, !0), nx = (t, e) => wa(t, (n) => {
  let r = n, { state: i } = t, s = i.doc.lineAt(r), o = i.charCategorizer(r);
  for (let l = null; ; ) {
    if (r == (e ? s.to : s.from)) {
      r == n && s.number != (e ? i.doc.lines : 1) && (r += e ? 1 : -1);
      break;
    }
    let c = Qe(s.text, r - s.from, e) + s.from, a = s.text.slice(Math.min(r, c) - s.from, Math.max(r, c) - s.from), h = o(a);
    if (l != null && h != l)
      break;
    (a != " " || r != n) && (l = h), r = c;
  }
  return r;
}), rx = (t) => nx(t, !1), zde = (t) => nx(t, !0), ix = (t) => wa(t, (e) => {
  let n = t.lineBlockAt(e).to;
  return e < n ? n : Math.min(t.state.doc.length, e + 1);
}), Vde = (t) => wa(t, (e) => {
  let n = t.lineBlockAt(e).from;
  return e > n ? n : Math.max(0, e - 1);
}), Ude = ({ state: t, dispatch: e }) => {
  if (t.readOnly)
    return !1;
  let n = t.changeByRange((r) => ({
    changes: { from: r.from, to: r.to, insert: ee.of(["", ""]) },
    range: C.cursor(r.from)
  }));
  return e(t.update(n, { scrollIntoView: !0, userEvent: "input" })), !0;
}, Wde = ({ state: t, dispatch: e }) => {
  if (t.readOnly)
    return !1;
  let n = t.changeByRange((r) => {
    if (!r.empty || r.from == 0 || r.from == t.doc.length)
      return { range: r };
    let i = r.from, s = t.doc.lineAt(i), o = i == s.from ? i - 1 : Qe(s.text, i - s.from, !1) + s.from, l = i == s.to ? i + 1 : Qe(s.text, i - s.from, !0) + s.from;
    return {
      changes: { from: o, to: l, insert: t.doc.slice(i, l).append(t.doc.slice(o, i)) },
      range: C.cursor(l)
    };
  });
  return n.changes.empty ? !1 : (e(t.update(n, { scrollIntoView: !0, userEvent: "move.character" })), !0);
};
function va(t) {
  let e = [], n = -1;
  for (let r of t.selection.ranges) {
    let i = t.doc.lineAt(r.from), s = t.doc.lineAt(r.to);
    if (!r.empty && r.to == s.from && (s = t.doc.lineAt(r.to - 1)), n >= i.number) {
      let o = e[e.length - 1];
      o.to = s.to, o.ranges.push(r);
    } else
      e.push({ from: i.from, to: s.to, ranges: [r] });
    n = s.number + 1;
  }
  return e;
}
function sx(t, e, n) {
  if (t.readOnly)
    return !1;
  let r = [], i = [];
  for (let s of va(t)) {
    if (n ? s.to == t.doc.length : s.from == 0)
      continue;
    let o = t.doc.lineAt(n ? s.to + 1 : s.from - 1), l = o.length + 1;
    if (n) {
      r.push({ from: s.to, to: o.to }, { from: s.from, insert: o.text + t.lineBreak });
      for (let c of s.ranges)
        i.push(C.range(Math.min(t.doc.length, c.anchor + l), Math.min(t.doc.length, c.head + l)));
    } else {
      r.push({ from: o.from, to: s.from }, { from: s.to, insert: t.lineBreak + o.text });
      for (let c of s.ranges)
        i.push(C.range(c.anchor - l, c.head - l));
    }
  }
  return r.length ? (e(t.update({
    changes: r,
    scrollIntoView: !0,
    selection: C.create(i, t.selection.mainIndex),
    userEvent: "move.line"
  })), !0) : !1;
}
const jde = ({ state: t, dispatch: e }) => sx(t, e, !1), Gde = ({ state: t, dispatch: e }) => sx(t, e, !0);
function ox(t, e, n) {
  if (t.readOnly)
    return !1;
  let r = [];
  for (let i of va(t))
    n ? r.push({ from: i.from, insert: t.doc.slice(i.from, i.to) + t.lineBreak }) : r.push({ from: i.to, insert: t.lineBreak + t.doc.slice(i.from, i.to) });
  return e(t.update({ changes: r, scrollIntoView: !0, userEvent: "input.copyline" })), !0;
}
const Yde = ({ state: t, dispatch: e }) => ox(t, e, !1), Kde = ({ state: t, dispatch: e }) => ox(t, e, !0), Jde = (t) => {
  if (t.state.readOnly)
    return !1;
  let { state: e } = t, n = e.changes(va(e).map(({ from: i, to: s }) => (i > 0 ? i-- : s < e.doc.length && s++, { from: i, to: s }))), r = ps(e.selection, (i) => t.moveVertically(i, !0)).map(n);
  return t.dispatch({ changes: n, selection: r, scrollIntoView: !0, userEvent: "delete.line" }), !0;
};
function Zde(t, e) {
  if (/\(\)|\[\]|\{\}/.test(t.sliceDoc(e - 1, e + 1)))
    return { from: e, to: e };
  let n = tt(t).resolveInner(e), r = n.childBefore(e), i = n.childAfter(e), s;
  return r && i && r.to <= e && i.from >= e && (s = r.type.prop(Z.closedBy)) && s.indexOf(i.name) > -1 && t.doc.lineAt(r.to).from == t.doc.lineAt(i.from).from && !/\S/.test(t.sliceDoc(r.to, i.from)) ? { from: r.to, to: i.from } : null;
}
const Xde = /* @__PURE__ */ lx(!1), Qde = /* @__PURE__ */ lx(!0);
function lx(t) {
  return ({ state: e, dispatch: n }) => {
    if (e.readOnly)
      return !1;
    let r = e.changeByRange((i) => {
      let { from: s, to: o } = i, l = e.doc.lineAt(s), c = !t && s == o && Zde(e, s);
      t && (s = o = (o <= l.to ? l : e.doc.lineAt(o)).to);
      let a = new da(e, { simulateBreak: s, simulateDoubleBreak: !!c }), h = Od(a, s);
      for (h == null && (h = ds(/^\s*/.exec(e.doc.lineAt(s).text)[0], e.tabSize)); o < l.to && /\s/.test(l.text[o - l.from]); )
        o++;
      c ? { from: s, to: o } = c : s > l.from && s < l.from + 100 && !/\S/.test(l.text.slice(0, s)) && (s = l.from);
      let u = ["", fo(e, h)];
      return c && u.push(fo(e, a.lineIndent(l.from, -1))), {
        changes: { from: s, to: o, insert: ee.of(u) },
        range: C.cursor(s + 1 + u[1].length)
      };
    });
    return n(e.update(r, { scrollIntoView: !0, userEvent: "input" })), !0;
  };
}
function Pd(t, e) {
  let n = -1;
  return t.changeByRange((r) => {
    let i = [];
    for (let o = r.from; o <= r.to; ) {
      let l = t.doc.lineAt(o);
      l.number > n && (r.empty || r.to > l.from) && (e(l, i, r), n = l.number), o = l.to + 1;
    }
    let s = t.changes(i);
    return {
      changes: i,
      range: C.range(s.mapPos(r.anchor, 1), s.mapPos(r.head, 1))
    };
  });
}
const epe = ({ state: t, dispatch: e }) => {
  if (t.readOnly)
    return !1;
  let n = /* @__PURE__ */ Object.create(null), r = new da(t, { overrideIndentation: (s) => {
    let o = n[s];
    return o == null ? -1 : o;
  } }), i = Pd(t, (s, o, l) => {
    let c = Od(r, s.from);
    if (c == null)
      return;
    /\S/.test(s.text) || (c = 0);
    let a = /^\s*/.exec(s.text)[0], h = fo(t, c);
    (a != h || l.from < s.from + a.length) && (n[s.from] = c, o.push({ from: s.from, to: s.from + a.length, insert: h }));
  });
  return i.changes.empty || e(t.update(i, { userEvent: "indent" })), !0;
}, cx = ({ state: t, dispatch: e }) => t.readOnly ? !1 : (e(t.update(Pd(t, (n, r) => {
  r.push({ from: n.from, insert: t.facet(Md) });
}), { userEvent: "input.indent" })), !0), ax = ({ state: t, dispatch: e }) => t.readOnly ? !1 : (e(t.update(Pd(t, (n, r) => {
  let i = /^\s*/.exec(n.text)[0];
  if (!i)
    return;
  let s = ds(i, t.tabSize), o = 0, l = fo(t, Math.max(0, s - Sc(t)));
  for (; o < i.length && o < l.length && i.charCodeAt(o) == l.charCodeAt(o); )
    o++;
  r.push({ from: n.from + o, to: n.from + i.length, insert: l.slice(o) });
}), { userEvent: "delete.dedent" })), !0), tpe = [
  { key: "Ctrl-b", run: Bv, shift: Gv, preventDefault: !0 },
  { key: "Ctrl-f", run: qv, shift: Yv },
  { key: "Ctrl-p", run: zv, shift: Zv },
  { key: "Ctrl-n", run: Vv, shift: Xv },
  { key: "Ctrl-a", run: Sde, shift: Pde },
  { key: "Ctrl-e", run: Cde, shift: Fde },
  { key: "Ctrl-d", run: tx },
  { key: "Ctrl-h", run: yf },
  { key: "Ctrl-k", run: ix },
  { key: "Ctrl-Alt-h", run: rx },
  { key: "Ctrl-o", run: Ude },
  { key: "Ctrl-t", run: Wde },
  { key: "Ctrl-v", run: mf }
], npe = /* @__PURE__ */ [
  { key: "ArrowLeft", run: Bv, shift: Gv, preventDefault: !0 },
  { key: "Mod-ArrowLeft", mac: "Alt-ArrowLeft", run: gde, shift: Dde, preventDefault: !0 },
  { mac: "Cmd-ArrowLeft", run: kde, shift: Ide, preventDefault: !0 },
  { key: "ArrowRight", run: qv, shift: Yv, preventDefault: !0 },
  { key: "Mod-ArrowRight", mac: "Alt-ArrowRight", run: mde, shift: Tde, preventDefault: !0 },
  { mac: "Cmd-ArrowRight", run: _de, shift: Nde, preventDefault: !0 },
  { key: "ArrowUp", run: zv, shift: Zv, preventDefault: !0 },
  { mac: "Cmd-ArrowUp", run: B0, shift: $0 },
  { mac: "Ctrl-ArrowUp", run: N0, shift: P0 },
  { key: "ArrowDown", run: Vv, shift: Xv, preventDefault: !0 },
  { mac: "Cmd-ArrowDown", run: q0, shift: H0 },
  { mac: "Ctrl-ArrowDown", run: mf, shift: F0 },
  { key: "PageUp", run: N0, shift: P0 },
  { key: "PageDown", run: mf, shift: F0 },
  { key: "Home", run: xde, shift: Rde, preventDefault: !0 },
  { key: "Mod-Home", run: B0, shift: $0 },
  { key: "End", run: vde, shift: Lde, preventDefault: !0 },
  { key: "Mod-End", run: q0, shift: H0 },
  { key: "Enter", run: Xde },
  { key: "Mod-a", run: Bde },
  { key: "Backspace", run: yf, shift: yf },
  { key: "Delete", run: tx },
  { key: "Mod-Backspace", mac: "Alt-Backspace", run: rx },
  { key: "Mod-Delete", mac: "Alt-Delete", run: zde },
  { mac: "Mod-Backspace", run: Vde },
  { mac: "Mod-Delete", run: ix }
].concat(/* @__PURE__ */ tpe.map((t) => ({ mac: t.key, run: t.run, shift: t.shift }))), rpe = /* @__PURE__ */ [
  { key: "Alt-ArrowLeft", mac: "Ctrl-ArrowLeft", run: bde, shift: Mde },
  { key: "Alt-ArrowRight", mac: "Ctrl-ArrowRight", run: wde, shift: Ode },
  { key: "Alt-ArrowUp", run: jde },
  { key: "Shift-Alt-ArrowUp", run: Yde },
  { key: "Alt-ArrowDown", run: Gde },
  { key: "Shift-Alt-ArrowDown", run: Kde },
  { key: "Escape", run: Hde },
  { key: "Mod-Enter", run: Qde },
  { key: "Alt-l", mac: "Ctrl-l", run: qde },
  { key: "Mod-i", run: $de, preventDefault: !0 },
  { key: "Mod-[", run: ax },
  { key: "Mod-]", run: cx },
  { key: "Mod-Alt-\\", run: epe },
  { key: "Shift-Mod-k", run: Jde },
  { key: "Shift-Mod-\\", run: Ede },
  { key: "Mod-/", run: Kfe },
  { key: "Alt-A", run: Zfe }
].concat(npe), ipe = { key: "Tab", run: cx, shift: ax };
function pe() {
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
    hx(t, arguments[e]);
  return t;
}
function hx(t, e) {
  if (typeof e == "string")
    t.appendChild(document.createTextNode(e));
  else if (e != null)
    if (e.nodeType != null)
      t.appendChild(e);
    else if (Array.isArray(e))
      for (var n = 0; n < e.length; n++)
        hx(t, e[n]);
    else
      throw new RangeError("Unsupported child node: " + e);
}
const z0 = typeof String.prototype.normalize == "function" ? (t) => t.normalize("NFKD") : (t) => t;
class Zi {
  constructor(e, n, r = 0, i = e.length, s, o) {
    this.test = o, this.value = { from: 0, to: 0 }, this.done = !1, this.matches = [], this.buffer = "", this.bufferPos = 0, this.iter = e.iterRange(r, i), this.bufferStart = r, this.normalize = s ? (l) => s(z0(l)) : z0, this.query = this.normalize(n);
  }
  peek() {
    if (this.bufferPos == this.buffer.length) {
      if (this.bufferStart += this.buffer.length, this.iter.next(), this.iter.done)
        return -1;
      this.bufferPos = 0, this.buffer = this.iter.value;
    }
    return Ve(this.buffer, this.bufferPos);
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
      let n = gd(e), r = this.bufferStart + this.bufferPos;
      this.bufferPos += Dt(e);
      let i = this.normalize(n);
      for (let s = 0, o = r; ; s++) {
        let l = i.charCodeAt(s), c = this.match(l, o);
        if (s == i.length - 1) {
          if (c)
            return this.value = c, this;
          break;
        }
        o == r && s < n.length && n.charCodeAt(s) == l && o++;
      }
    }
  }
  match(e, n) {
    let r = null;
    for (let i = 0; i < this.matches.length; i += 2) {
      let s = this.matches[i], o = !1;
      this.query.charCodeAt(s) == e && (s == this.query.length - 1 ? r = { from: this.matches[i + 1], to: n + 1 } : (this.matches[i]++, o = !0)), o || (this.matches.splice(i, 2), i -= 2);
    }
    return this.query.charCodeAt(0) == e && (this.query.length == 1 ? r = { from: n, to: n + 1 } : this.matches.push(1, n)), r && this.test && !this.test(r.from, r.to, this.buffer, this.bufferPos) && (r = null), r;
  }
}
typeof Symbol < "u" && (Zi.prototype[Symbol.iterator] = function() {
  return this;
});
const ux = { from: -1, to: -1, match: /* @__PURE__ */ /.*/.exec("") }, Fd = "gm" + (/x/.unicode == null ? "" : "u");
class fx {
  constructor(e, n, r, i = 0, s = e.length) {
    if (this.text = e, this.to = s, this.curLine = "", this.done = !1, this.value = ux, /\\[sWDnr]|\n|\r|\[\^/.test(n))
      return new dx(e, n, r, i, s);
    this.re = new RegExp(n, Fd + (r != null && r.ignoreCase ? "i" : "")), this.test = r == null ? void 0 : r.test, this.iter = e.iter();
    let o = e.lineAt(i);
    this.curLineStart = o.from, this.matchPos = Dc(e, i), this.getLine(this.curLineStart);
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
        if (this.matchPos = Dc(this.text, i + (r == i ? 1 : 0)), r == this.curLineStart + this.curLine.length && this.nextLine(), (r < i || r > this.value.to) && (!this.test || this.test(r, i, n)))
          return this.value = { from: r, to: i, match: n }, this;
        e = this.matchPos - this.curLineStart;
      } else if (this.curLineStart + this.curLine.length < this.to)
        this.nextLine(), e = 0;
      else
        return this.done = !0, this;
    }
  }
}
const $h = /* @__PURE__ */ new WeakMap();
class Ii {
  constructor(e, n) {
    this.from = e, this.text = n;
  }
  get to() {
    return this.from + this.text.length;
  }
  static get(e, n, r) {
    let i = $h.get(e);
    if (!i || i.from >= r || i.to <= n) {
      let l = new Ii(n, e.sliceString(n, r));
      return $h.set(e, l), l;
    }
    if (i.from == n && i.to == r)
      return i;
    let { text: s, from: o } = i;
    return o > n && (s = e.sliceString(n, o) + s, o = n), i.to < r && (s += e.sliceString(i.to, r)), $h.set(e, new Ii(o, s)), new Ii(n, s.slice(n - o, r - o));
  }
}
class dx {
  constructor(e, n, r, i, s) {
    this.text = e, this.to = s, this.done = !1, this.value = ux, this.matchPos = Dc(e, i), this.re = new RegExp(n, Fd + (r != null && r.ignoreCase ? "i" : "")), this.test = r == null ? void 0 : r.test, this.flat = Ii.get(e, i, this.chunkEnd(i + 5e3));
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
          return this.value = { from: r, to: i, match: n }, this.matchPos = Dc(this.text, i + (r == i ? 1 : 0)), this;
      }
      if (this.flat.to == this.to)
        return this.done = !0, this;
      this.flat = Ii.get(this.text, this.flat.from, this.chunkEnd(this.flat.from + this.flat.text.length * 2));
    }
  }
}
typeof Symbol < "u" && (fx.prototype[Symbol.iterator] = dx.prototype[Symbol.iterator] = function() {
  return this;
});
function spe(t) {
  try {
    return new RegExp(t, Fd), !0;
  } catch {
    return !1;
  }
}
function Dc(t, e) {
  if (e >= t.length)
    return e;
  let n = t.lineAt(e), r;
  for (; e < n.to && (r = n.text.charCodeAt(e - n.from)) >= 56320 && r < 57344; )
    e++;
  return e;
}
function bf(t) {
  let e = pe("input", { class: "cm-textfield", name: "line" }), n = pe("form", {
    class: "cm-gotoLine",
    onkeydown: (i) => {
      i.keyCode == 27 ? (i.preventDefault(), t.dispatch({ effects: Tc.of(!1) }), t.focus()) : i.keyCode == 13 && (i.preventDefault(), r());
    },
    onsubmit: (i) => {
      i.preventDefault(), r();
    }
  }, pe("label", t.state.phrase("Go to line"), ": ", e), " ", pe("button", { class: "cm-button", type: "submit" }, t.state.phrase("go")));
  function r() {
    let i = /^([+-])?(\d+)?(:\d+)?(%)?$/.exec(e.value);
    if (!i)
      return;
    let { state: s } = t, o = s.doc.lineAt(s.selection.main.head), [, l, c, a, h] = i, u = a ? +a.slice(1) : 0, f = c ? +c : o.number;
    if (c && h) {
      let g = f / 100;
      l && (g = g * (l == "-" ? -1 : 1) + o.number / s.doc.lines), f = Math.round(s.doc.lines * g);
    } else
      c && l && (f = f * (l == "-" ? -1 : 1) + o.number);
    let d = s.doc.line(Math.max(1, Math.min(s.doc.lines, f))), p = C.cursor(d.from + Math.max(0, Math.min(u, d.length)));
    t.dispatch({
      effects: [Tc.of(!1), I.scrollIntoView(p.from, { y: "center" })],
      selection: p
    }), t.focus();
  }
  return { dom: n };
}
const Tc = /* @__PURE__ */ K.define(), V0 = /* @__PURE__ */ Ye.define({
  create() {
    return !0;
  },
  update(t, e) {
    for (let n of e.effects)
      n.is(Tc) && (t = n.value);
    return t;
  },
  provide: (t) => uo.from(t, (e) => e ? bf : null)
}), ope = (t) => {
  let e = ho(t, bf);
  if (!e) {
    let n = [Tc.of(!0)];
    t.state.field(V0, !1) == null && n.push(K.appendConfig.of([V0, lpe])), t.dispatch({ effects: n }), e = ho(t, bf);
  }
  return e && e.dom.querySelector("input").focus(), !0;
}, lpe = /* @__PURE__ */ I.baseTheme({
  ".cm-panel.cm-gotoLine": {
    padding: "2px 6px 4px",
    "& label": { fontSize: "80%" }
  }
}), cpe = {
  highlightWordAroundCursor: !1,
  minSelectionLength: 1,
  maxMatches: 100,
  wholeWords: !1
}, px = /* @__PURE__ */ N.define({
  combine(t) {
    return Sn(t, cpe, {
      highlightWordAroundCursor: (e, n) => e || n,
      minSelectionLength: Math.min,
      maxMatches: Math.min
    });
  }
});
function ape(t) {
  let e = [ppe, dpe];
  return t && e.push(px.of(t)), e;
}
const hpe = /* @__PURE__ */ V.mark({ class: "cm-selectionMatch" }), upe = /* @__PURE__ */ V.mark({ class: "cm-selectionMatch cm-selectionMatch-main" });
function U0(t, e, n, r) {
  return (n == 0 || t(e.sliceDoc(n - 1, n)) != xe.Word) && (r == e.doc.length || t(e.sliceDoc(r, r + 1)) != xe.Word);
}
function fpe(t, e, n, r) {
  return t(e.sliceDoc(n, n + 1)) == xe.Word && t(e.sliceDoc(r - 1, r)) == xe.Word;
}
const dpe = /* @__PURE__ */ Ae.fromClass(class {
  constructor(t) {
    this.decorations = this.getDeco(t);
  }
  update(t) {
    (t.selectionSet || t.docChanged || t.viewportChanged) && (this.decorations = this.getDeco(t.view));
  }
  getDeco(t) {
    let e = t.state.facet(px), { state: n } = t, r = n.selection;
    if (r.ranges.length > 1)
      return V.none;
    let i = r.main, s, o = null;
    if (i.empty) {
      if (!e.highlightWordAroundCursor)
        return V.none;
      let c = n.wordAt(i.head);
      if (!c)
        return V.none;
      o = n.charCategorizer(i.head), s = n.sliceDoc(c.from, c.to);
    } else {
      let c = i.to - i.from;
      if (c < e.minSelectionLength || c > 200)
        return V.none;
      if (e.wholeWords) {
        if (s = n.sliceDoc(i.from, i.to), o = n.charCategorizer(i.head), !(U0(o, n, i.from, i.to) && fpe(o, n, i.from, i.to)))
          return V.none;
      } else if (s = n.sliceDoc(i.from, i.to).trim(), !s)
        return V.none;
    }
    let l = [];
    for (let c of t.visibleRanges) {
      let a = new Zi(n.doc, s, c.from, c.to);
      for (; !a.next().done; ) {
        let { from: h, to: u } = a.value;
        if ((!o || U0(o, n, h, u)) && (i.empty && h <= i.from && u >= i.to ? l.push(upe.range(h, u)) : (h >= i.to || u <= i.from) && l.push(hpe.range(h, u)), l.length > e.maxMatches))
          return V.none;
      }
    }
    return V.set(l);
  }
}, {
  decorations: (t) => t.decorations
}), ppe = /* @__PURE__ */ I.baseTheme({
  ".cm-selectionMatch": { backgroundColor: "#99ff7780" },
  ".cm-searchMatch .cm-selectionMatch": { backgroundColor: "transparent" }
}), gpe = ({ state: t, dispatch: e }) => {
  let { selection: n } = t, r = C.create(n.ranges.map((i) => t.wordAt(i.head) || C.cursor(i.head)), n.mainIndex);
  return r.eq(n) ? !1 : (e(t.update({ selection: r })), !0);
};
function mpe(t, e) {
  let { main: n, ranges: r } = t.selection, i = t.wordAt(n.head), s = i && i.from == n.from && i.to == n.to;
  for (let o = !1, l = new Zi(t.doc, e, r[r.length - 1].to); ; )
    if (l.next(), l.done) {
      if (o)
        return null;
      l = new Zi(t.doc, e, 0, Math.max(0, r[r.length - 1].from - 1)), o = !0;
    } else {
      if (o && r.some((c) => c.from == l.value.from))
        continue;
      if (s) {
        let c = t.wordAt(l.value.from);
        if (!c || c.from != l.value.from || c.to != l.value.to)
          continue;
      }
      return l.value;
    }
}
const ype = ({ state: t, dispatch: e }) => {
  let { ranges: n } = t.selection;
  if (n.some((s) => s.from === s.to))
    return gpe({ state: t, dispatch: e });
  let r = t.sliceDoc(n[0].from, n[0].to);
  if (t.selection.ranges.some((s) => t.sliceDoc(s.from, s.to) != r))
    return !1;
  let i = mpe(t, r);
  return i ? (e(t.update({
    selection: t.selection.addRange(C.range(i.from, i.to), !1),
    effects: I.scrollIntoView(i.to)
  })), !0) : !1;
}, gs = /* @__PURE__ */ N.define({
  combine(t) {
    return Sn(t, {
      top: !1,
      caseSensitive: !1,
      literal: !1,
      regexp: !1,
      wholeWord: !1,
      createPanel: (e) => new Tpe(e),
      scrollToMatch: (e) => I.scrollIntoView(e)
    });
  }
});
class gx {
  constructor(e) {
    this.search = e.search, this.caseSensitive = !!e.caseSensitive, this.literal = !!e.literal, this.regexp = !!e.regexp, this.replace = e.replace || "", this.valid = !!this.search && (!this.regexp || spe(this.search)), this.unquoted = this.unquote(this.search), this.wholeWord = !!e.wholeWord;
  }
  unquote(e) {
    return this.literal ? e : e.replace(/\\([nrt\\])/g, (n, r) => r == "n" ? `
` : r == "r" ? "\r" : r == "t" ? "	" : "\\");
  }
  eq(e) {
    return this.search == e.search && this.replace == e.replace && this.caseSensitive == e.caseSensitive && this.regexp == e.regexp && this.wholeWord == e.wholeWord;
  }
  create() {
    return this.regexp ? new xpe(this) : new wpe(this);
  }
  getCursor(e, n = 0, r) {
    let i = e.doc ? e : X.create({ doc: e });
    return r == null && (r = i.doc.length), this.regexp ? vi(this, i, n, r) : wi(this, i, n, r);
  }
}
class mx {
  constructor(e) {
    this.spec = e;
  }
}
function wi(t, e, n, r) {
  return new Zi(e.doc, t.unquoted, n, r, t.caseSensitive ? void 0 : (i) => i.toLowerCase(), t.wholeWord ? bpe(e.doc, e.charCategorizer(e.selection.main.head)) : void 0);
}
function bpe(t, e) {
  return (n, r, i, s) => ((s > n || s + i.length < r) && (s = Math.max(0, n - 2), i = t.sliceString(s, Math.min(t.length, r + 2))), (e(Mc(i, n - s)) != xe.Word || e(Oc(i, n - s)) != xe.Word) && (e(Oc(i, r - s)) != xe.Word || e(Mc(i, r - s)) != xe.Word));
}
class wpe extends mx {
  constructor(e) {
    super(e);
  }
  nextMatch(e, n, r) {
    let i = wi(this.spec, e, r, e.doc.length).nextOverlapping();
    return i.done && (i = wi(this.spec, e, 0, n).nextOverlapping()), i.done ? null : i.value;
  }
  prevMatchInRange(e, n, r) {
    for (let i = r; ; ) {
      let s = Math.max(n, i - 1e4 - this.spec.unquoted.length), o = wi(this.spec, e, s, i), l = null;
      for (; !o.nextOverlapping().done; )
        l = o.value;
      if (l)
        return l;
      if (s == n)
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
    let r = wi(this.spec, e, 0, e.doc.length), i = [];
    for (; !r.next().done; ) {
      if (i.length >= n)
        return null;
      i.push(r.value);
    }
    return i;
  }
  highlight(e, n, r, i) {
    let s = wi(this.spec, e, Math.max(0, n - this.spec.unquoted.length), Math.min(r + this.spec.unquoted.length, e.doc.length));
    for (; !s.next().done; )
      i(s.value.from, s.value.to);
  }
}
function vi(t, e, n, r) {
  return new fx(e.doc, t.search, {
    ignoreCase: !t.caseSensitive,
    test: t.wholeWord ? vpe(e.charCategorizer(e.selection.main.head)) : void 0
  }, n, r);
}
function Mc(t, e) {
  return t.slice(Qe(t, e, !1), e);
}
function Oc(t, e) {
  return t.slice(e, Qe(t, e));
}
function vpe(t) {
  return (e, n, r) => !r[0].length || (t(Mc(r.input, r.index)) != xe.Word || t(Oc(r.input, r.index)) != xe.Word) && (t(Oc(r.input, r.index + r[0].length)) != xe.Word || t(Mc(r.input, r.index + r[0].length)) != xe.Word);
}
class xpe extends mx {
  nextMatch(e, n, r) {
    let i = vi(this.spec, e, r, e.doc.length).next();
    return i.done && (i = vi(this.spec, e, 0, n).next()), i.done ? null : i.value;
  }
  prevMatchInRange(e, n, r) {
    for (let i = 1; ; i++) {
      let s = Math.max(n, r - i * 1e4), o = vi(this.spec, e, s, r), l = null;
      for (; !o.next().done; )
        l = o.value;
      if (l && (s == n || l.from > s + 10))
        return l;
      if (s == n)
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
    let r = vi(this.spec, e, 0, e.doc.length), i = [];
    for (; !r.next().done; ) {
      if (i.length >= n)
        return null;
      i.push(r.value);
    }
    return i;
  }
  highlight(e, n, r, i) {
    let s = vi(this.spec, e, Math.max(0, n - 250), Math.min(r + 250, e.doc.length));
    for (; !s.next().done; )
      i(s.value.from, s.value.to);
  }
}
const po = /* @__PURE__ */ K.define(), Bd = /* @__PURE__ */ K.define(), lr = /* @__PURE__ */ Ye.define({
  create(t) {
    return new Hh(wf(t).create(), null);
  },
  update(t, e) {
    for (let n of e.effects)
      n.is(po) ? t = new Hh(n.value.create(), t.panel) : n.is(Bd) && (t = new Hh(t.query, n.value ? qd : null));
    return t;
  },
  provide: (t) => uo.from(t, (e) => e.panel)
});
class Hh {
  constructor(e, n) {
    this.query = e, this.panel = n;
  }
}
const kpe = /* @__PURE__ */ V.mark({ class: "cm-searchMatch" }), _pe = /* @__PURE__ */ V.mark({ class: "cm-searchMatch cm-searchMatch-selected" }), Spe = /* @__PURE__ */ Ae.fromClass(class {
  constructor(t) {
    this.view = t, this.decorations = this.highlight(t.state.field(lr));
  }
  update(t) {
    let e = t.state.field(lr);
    (e != t.startState.field(lr) || t.docChanged || t.selectionSet || t.viewportChanged) && (this.decorations = this.highlight(e));
  }
  highlight({ query: t, panel: e }) {
    if (!e || !t.spec.valid)
      return V.none;
    let { view: n } = this, r = new dr();
    for (let i = 0, s = n.visibleRanges, o = s.length; i < o; i++) {
      let { from: l, to: c } = s[i];
      for (; i < o - 1 && c > s[i + 1].from - 2 * 250; )
        c = s[++i].to;
      t.highlight(n.state, l, c, (a, h) => {
        let u = n.state.selection.ranges.some((f) => f.from == a && f.to == h);
        r.add(a, h, u ? _pe : kpe);
      });
    }
    return r.finish();
  }
}, {
  decorations: (t) => t.decorations
});
function Io(t) {
  return (e) => {
    let n = e.state.field(lr, !1);
    return n && n.query.spec.valid ? t(e, n) : wx(e);
  };
}
const Lc = /* @__PURE__ */ Io((t, { query: e }) => {
  let { to: n } = t.state.selection.main, r = e.nextMatch(t.state, n, n);
  if (!r)
    return !1;
  let i = C.single(r.from, r.to), s = t.state.facet(gs);
  return t.dispatch({
    selection: i,
    effects: [$d(t, r), s.scrollToMatch(i.main, t)],
    userEvent: "select.search"
  }), bx(t), !0;
}), Rc = /* @__PURE__ */ Io((t, { query: e }) => {
  let { state: n } = t, { from: r } = n.selection.main, i = e.prevMatch(n, r, r);
  if (!i)
    return !1;
  let s = C.single(i.from, i.to), o = t.state.facet(gs);
  return t.dispatch({
    selection: s,
    effects: [$d(t, i), o.scrollToMatch(s.main, t)],
    userEvent: "select.search"
  }), bx(t), !0;
}), Cpe = /* @__PURE__ */ Io((t, { query: e }) => {
  let n = e.matchAll(t.state, 1e3);
  return !n || !n.length ? !1 : (t.dispatch({
    selection: C.create(n.map((r) => C.range(r.from, r.to))),
    userEvent: "select.search.matches"
  }), !0);
}), Ape = ({ state: t, dispatch: e }) => {
  let n = t.selection;
  if (n.ranges.length > 1 || n.main.empty)
    return !1;
  let { from: r, to: i } = n.main, s = [], o = 0;
  for (let l = new Zi(t.doc, t.sliceDoc(r, i)); !l.next().done; ) {
    if (s.length > 1e3)
      return !1;
    l.value.from == r && (o = s.length), s.push(C.range(l.value.from, l.value.to));
  }
  return e(t.update({
    selection: C.create(s, o),
    userEvent: "select.search.matches"
  })), !0;
}, W0 = /* @__PURE__ */ Io((t, { query: e }) => {
  let { state: n } = t, { from: r, to: i } = n.selection.main;
  if (n.readOnly)
    return !1;
  let s = e.nextMatch(n, r, r);
  if (!s)
    return !1;
  let o = [], l, c, a = [];
  if (s.from == r && s.to == i && (c = n.toText(e.getReplacement(s)), o.push({ from: s.from, to: s.to, insert: c }), s = e.nextMatch(n, s.from, s.to), a.push(I.announce.of(n.phrase("replaced match on line $", n.doc.lineAt(r).number) + "."))), s) {
    let h = o.length == 0 || o[0].from >= s.to ? 0 : s.to - s.from - c.length;
    l = C.single(s.from - h, s.to - h), a.push($d(t, s)), a.push(n.facet(gs).scrollToMatch(l.main, t));
  }
  return t.dispatch({
    changes: o,
    selection: l,
    effects: a,
    userEvent: "input.replace"
  }), !0;
}), Epe = /* @__PURE__ */ Io((t, { query: e }) => {
  if (t.state.readOnly)
    return !1;
  let n = e.matchAll(t.state, 1e9).map((i) => {
    let { from: s, to: o } = i;
    return { from: s, to: o, insert: e.getReplacement(i) };
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
function qd(t) {
  return t.state.facet(gs).createPanel(t);
}
function wf(t, e) {
  var n, r, i, s, o;
  let l = t.selection.main, c = l.empty || l.to > l.from + 100 ? "" : t.sliceDoc(l.from, l.to);
  if (e && !c)
    return e;
  let a = t.facet(gs);
  return new gx({
    search: ((n = e == null ? void 0 : e.literal) !== null && n !== void 0 ? n : a.literal) ? c : c.replace(/\n/g, "\\n"),
    caseSensitive: (r = e == null ? void 0 : e.caseSensitive) !== null && r !== void 0 ? r : a.caseSensitive,
    literal: (i = e == null ? void 0 : e.literal) !== null && i !== void 0 ? i : a.literal,
    regexp: (s = e == null ? void 0 : e.regexp) !== null && s !== void 0 ? s : a.regexp,
    wholeWord: (o = e == null ? void 0 : e.wholeWord) !== null && o !== void 0 ? o : a.wholeWord
  });
}
function yx(t) {
  let e = ho(t, qd);
  return e && e.dom.querySelector("[main-field]");
}
function bx(t) {
  let e = yx(t);
  e && e == t.root.activeElement && e.select();
}
const wx = (t) => {
  let e = t.state.field(lr, !1);
  if (e && e.panel) {
    let n = yx(t);
    if (n && n != t.root.activeElement) {
      let r = wf(t.state, e.query.spec);
      r.valid && t.dispatch({ effects: po.of(r) }), n.focus(), n.select();
    }
  } else
    t.dispatch({ effects: [
      Bd.of(!0),
      e ? po.of(wf(t.state, e.query.spec)) : K.appendConfig.of(Ope)
    ] });
  return !0;
}, vx = (t) => {
  let e = t.state.field(lr, !1);
  if (!e || !e.panel)
    return !1;
  let n = ho(t, qd);
  return n && n.dom.contains(t.root.activeElement) && t.focus(), t.dispatch({ effects: Bd.of(!1) }), !0;
}, Dpe = [
  { key: "Mod-f", run: wx, scope: "editor search-panel" },
  { key: "F3", run: Lc, shift: Rc, scope: "editor search-panel", preventDefault: !0 },
  { key: "Mod-g", run: Lc, shift: Rc, scope: "editor search-panel", preventDefault: !0 },
  { key: "Escape", run: vx, scope: "editor search-panel" },
  { key: "Mod-Shift-l", run: Ape },
  { key: "Alt-g", run: ope },
  { key: "Mod-d", run: ype, preventDefault: !0 }
];
class Tpe {
  constructor(e) {
    this.view = e;
    let n = this.query = e.state.field(lr).query.spec;
    this.commit = this.commit.bind(this), this.searchField = pe("input", {
      value: n.search,
      placeholder: wt(e, "Find"),
      "aria-label": wt(e, "Find"),
      class: "cm-textfield",
      name: "search",
      form: "",
      "main-field": "true",
      onchange: this.commit,
      onkeyup: this.commit
    }), this.replaceField = pe("input", {
      value: n.replace,
      placeholder: wt(e, "Replace"),
      "aria-label": wt(e, "Replace"),
      class: "cm-textfield",
      name: "replace",
      form: "",
      onchange: this.commit,
      onkeyup: this.commit
    }), this.caseField = pe("input", {
      type: "checkbox",
      name: "case",
      form: "",
      checked: n.caseSensitive,
      onchange: this.commit
    }), this.reField = pe("input", {
      type: "checkbox",
      name: "re",
      form: "",
      checked: n.regexp,
      onchange: this.commit
    }), this.wordField = pe("input", {
      type: "checkbox",
      name: "word",
      form: "",
      checked: n.wholeWord,
      onchange: this.commit
    });
    function r(i, s, o) {
      return pe("button", { class: "cm-button", name: i, onclick: s, type: "button" }, o);
    }
    this.dom = pe("div", { onkeydown: (i) => this.keydown(i), class: "cm-search" }, [
      this.searchField,
      r("next", () => Lc(e), [wt(e, "next")]),
      r("prev", () => Rc(e), [wt(e, "previous")]),
      r("select", () => Cpe(e), [wt(e, "all")]),
      pe("label", null, [this.caseField, wt(e, "match case")]),
      pe("label", null, [this.reField, wt(e, "regexp")]),
      pe("label", null, [this.wordField, wt(e, "by word")]),
      ...e.state.readOnly ? [] : [
        pe("br"),
        this.replaceField,
        r("replace", () => W0(e), [wt(e, "replace")]),
        r("replaceAll", () => Epe(e), [wt(e, "replace all")])
      ],
      pe("button", {
        name: "close",
        onclick: () => vx(e),
        "aria-label": wt(e, "close"),
        type: "button"
      }, ["\xD7"])
    ]);
  }
  commit() {
    let e = new gx({
      search: this.searchField.value,
      caseSensitive: this.caseField.checked,
      regexp: this.reField.checked,
      wholeWord: this.wordField.checked,
      replace: this.replaceField.value
    });
    e.eq(this.query) || (this.query = e, this.view.dispatch({ effects: po.of(e) }));
  }
  keydown(e) {
    Vhe(this.view, e, "search-panel") ? e.preventDefault() : e.keyCode == 13 && e.target == this.searchField ? (e.preventDefault(), (e.shiftKey ? Rc : Lc)(this.view)) : e.keyCode == 13 && e.target == this.replaceField && (e.preventDefault(), W0(this.view));
  }
  update(e) {
    for (let n of e.transactions)
      for (let r of n.effects)
        r.is(po) && !r.value.eq(this.query) && this.setQuery(r.value);
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
    return this.view.state.facet(gs).top;
  }
}
function wt(t, e) {
  return t.state.phrase(e);
}
const bl = 30, wl = /[\s\.,:;?!]/;
function $d(t, { from: e, to: n }) {
  let r = t.state.doc.lineAt(e), i = t.state.doc.lineAt(n).to, s = Math.max(r.from, e - bl), o = Math.min(i, n + bl), l = t.state.sliceDoc(s, o);
  if (s != r.from) {
    for (let c = 0; c < bl; c++)
      if (!wl.test(l[c + 1]) && wl.test(l[c])) {
        l = l.slice(c);
        break;
      }
  }
  if (o != i) {
    for (let c = l.length - 1; c > l.length - bl; c--)
      if (!wl.test(l[c - 1]) && wl.test(l[c])) {
        l = l.slice(0, c);
        break;
      }
  }
  return I.announce.of(`${t.state.phrase("current match")}. ${l} ${t.state.phrase("on line")} ${r.number}.`);
}
const Mpe = /* @__PURE__ */ I.baseTheme({
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
}), Ope = [
  lr,
  /* @__PURE__ */ fs.low(Spe),
  Mpe
];
class xx {
  constructor(e, n, r) {
    this.state = e, this.pos = n, this.explicit = r, this.abortListeners = [];
  }
  tokenBefore(e) {
    let n = tt(this.state).resolveInner(this.pos, -1);
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
    let n = this.state.doc.lineAt(this.pos), r = Math.max(n.from, this.pos - 250), i = n.text.slice(r - n.from, this.pos - n.from), s = i.search(kx(e, !1));
    return s < 0 ? null : { from: r + s, to: this.pos, text: i.slice(s) };
  }
  get aborted() {
    return this.abortListeners == null;
  }
  addEventListener(e, n) {
    e == "abort" && this.abortListeners && this.abortListeners.push(n);
  }
}
function j0(t) {
  let e = Object.keys(t).join(""), n = /\w/.test(e);
  return n && (e = e.replace(/\w/g, "")), `[${n ? "\\w" : ""}${e.replace(/[^\w\s]/g, "\\$&")}]`;
}
function Lpe(t) {
  let e = /* @__PURE__ */ Object.create(null), n = /* @__PURE__ */ Object.create(null);
  for (let { label: i } of t) {
    e[i[0]] = !0;
    for (let s = 1; s < i.length; s++)
      n[i[s]] = !0;
  }
  let r = j0(e) + j0(n) + "*$";
  return [new RegExp("^" + r), new RegExp(r)];
}
function Rpe(t) {
  let e = t.map((i) => typeof i == "string" ? { label: i } : i), [n, r] = e.every((i) => /^\w+$/.test(i.label)) ? [/\w*$/, /\w+$/] : Lpe(e);
  return (i) => {
    let s = i.matchBefore(r);
    return s || i.explicit ? { from: s ? s.from : i.pos, options: e, validFor: n } : null;
  };
}
class G0 {
  constructor(e, n, r, i) {
    this.completion = e, this.source = n, this.match = r, this.score = i;
  }
}
function cr(t) {
  return t.selection.main.from;
}
function kx(t, e) {
  var n;
  let { source: r } = t, i = e && r[0] != "^", s = r[r.length - 1] != "$";
  return !i && !s ? t : new RegExp(`${i ? "^" : ""}(?:${r})${s ? "$" : ""}`, (n = t.flags) !== null && n !== void 0 ? n : t.ignoreCase ? "i" : "");
}
const Ipe = /* @__PURE__ */ Xt.define();
function Npe(t, e, n, r) {
  let { main: i } = t.selection, s = n - i.from, o = r - i.from;
  return Object.assign(Object.assign({}, t.changeByRange((l) => l != i && n != r && t.sliceDoc(l.from + s, l.from + o) != t.sliceDoc(n, r) ? { range: l } : {
    changes: { from: l.from + s, to: r == i.from ? l.to : l.from + o, insert: e },
    range: C.cursor(l.from + s + e.length)
  })), { userEvent: "input.complete" });
}
const Y0 = /* @__PURE__ */ new WeakMap();
function Ppe(t) {
  if (!Array.isArray(t))
    return t;
  let e = Y0.get(t);
  return e || Y0.set(t, e = Rpe(t)), e;
}
const Hd = /* @__PURE__ */ K.define(), go = /* @__PURE__ */ K.define();
class Fpe {
  constructor(e) {
    this.pattern = e, this.chars = [], this.folded = [], this.any = [], this.precise = [], this.byWord = [], this.score = 0, this.matched = [];
    for (let n = 0; n < e.length; ) {
      let r = Ve(e, n), i = Dt(r);
      this.chars.push(r);
      let s = e.slice(n, n + i), o = s.toUpperCase();
      this.folded.push(Ve(o == s ? s.toLowerCase() : o, 0)), n += i;
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
    let { chars: n, folded: r, any: i, precise: s, byWord: o } = this;
    if (n.length == 1) {
      let b = Ve(e, 0), _ = Dt(b), w = _ == e.length ? 0 : -100;
      if (b != n[0])
        if (b == r[0])
          w += -200;
        else
          return !1;
      return this.ret(w, [0, _]);
    }
    let l = e.indexOf(this.pattern);
    if (l == 0)
      return this.ret(e.length == this.pattern.length ? 0 : -100, [0, this.pattern.length]);
    let c = n.length, a = 0;
    if (l < 0) {
      for (let b = 0, _ = Math.min(e.length, 200); b < _ && a < c; ) {
        let w = Ve(e, b);
        (w == n[a] || w == r[a]) && (i[a++] = b), b += Dt(w);
      }
      if (a < c)
        return !1;
    }
    let h = 0, u = 0, f = !1, d = 0, p = -1, g = -1, m = /[a-z]/.test(e), y = !0;
    for (let b = 0, _ = Math.min(e.length, 200), w = 0; b < _ && u < c; ) {
      let x = Ve(e, b);
      l < 0 && (h < c && x == n[h] && (s[h++] = b), d < c && (x == n[d] || x == r[d] ? (d == 0 && (p = b), g = b + 1, d++) : d = 0));
      let v, S = x < 255 ? x >= 48 && x <= 57 || x >= 97 && x <= 122 ? 2 : x >= 65 && x <= 90 ? 1 : 0 : (v = gd(x)) != v.toLowerCase() ? 1 : v != v.toUpperCase() ? 2 : 0;
      (!b || S == 1 && m || w == 0 && S != 0) && (n[u] == x || r[u] == x && (f = !0) ? o[u++] = b : o.length && (y = !1)), w = S, b += Dt(x);
    }
    return u == c && o[0] == 0 && y ? this.result(-100 + (f ? -200 : 0), o, e) : d == c && p == 0 ? this.ret(-200 - e.length + (g == e.length ? 0 : -100), [0, g]) : l > -1 ? this.ret(-700 - e.length, [l, l + this.pattern.length]) : d == c ? this.ret(-200 + -700 - e.length, [p, g]) : u == c ? this.result(-100 + (f ? -200 : 0) + -700 + (y ? 0 : -1100), o, e) : n.length == 2 ? !1 : this.result((i[0] ? -700 : 0) + -200 + -1100, i, e);
  }
  result(e, n, r) {
    let i = [], s = 0;
    for (let o of n) {
      let l = o + (this.astral ? Dt(Ve(r, o)) : 1);
      s && i[s - 1] == o ? i[s - 1] = l : (i[s++] = o, i[s++] = l);
    }
    return this.ret(e - r.length, i);
  }
}
const bt = /* @__PURE__ */ N.define({
  combine(t) {
    return Sn(t, {
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
      positionInfo: Bpe,
      compareCompletions: (e, n) => e.label.localeCompare(n.label),
      interactionDelay: 75
    }, {
      defaultKeymap: (e, n) => e && n,
      closeOnBlur: (e, n) => e && n,
      icons: (e, n) => e && n,
      tooltipClass: (e, n) => (r) => K0(e(r), n(r)),
      optionClass: (e, n) => (r) => K0(e(r), n(r)),
      addToOptions: (e, n) => e.concat(n)
    });
  }
});
function K0(t, e) {
  return t ? e ? t + " " + e : t : e;
}
function Bpe(t, e, n, r, i) {
  let s = t.textDirection == _e.RTL, o = s, l = !1, c = "top", a, h, u = e.left - i.left, f = i.right - e.right, d = r.right - r.left, p = r.bottom - r.top;
  if (o && u < Math.min(d, f) ? o = !1 : !o && f < Math.min(d, u) && (o = !0), d <= (o ? u : f))
    a = Math.max(i.top, Math.min(n.top, i.bottom - p)) - e.top, h = Math.min(400, o ? u : f);
  else {
    l = !0, h = Math.min(400, (s ? e.right : i.right - e.left) - 30);
    let g = i.bottom - e.bottom;
    g >= p || g > e.top ? a = n.bottom - e.top : (c = "bottom", a = e.bottom - n.top);
  }
  return {
    style: `${c}: ${a}px; max-width: ${h}px`,
    class: "cm-completionInfo-" + (l ? s ? "left-narrow" : "right-narrow" : o ? "left" : "right")
  };
}
function qpe(t) {
  let e = t.addToOptions.slice();
  return t.icons && e.push({
    render(n) {
      let r = document.createElement("div");
      return r.classList.add("cm-completionIcon"), n.type && r.classList.add(...n.type.split(/\s+/g).map((i) => "cm-completionIcon-" + i)), r.setAttribute("aria-hidden", "true"), r;
    },
    position: 20
  }), e.push({
    render(n, r, i) {
      let s = document.createElement("span");
      s.className = "cm-completionLabel";
      let o = n.displayLabel || n.label, l = 0;
      for (let c = 0; c < i.length; ) {
        let a = i[c++], h = i[c++];
        a > l && s.appendChild(document.createTextNode(o.slice(l, a)));
        let u = s.appendChild(document.createElement("span"));
        u.appendChild(document.createTextNode(o.slice(a, h))), u.className = "cm-completionMatchedText", l = h;
      }
      return l < o.length && s.appendChild(document.createTextNode(o.slice(l))), s;
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
function J0(t, e, n) {
  if (t <= n)
    return { from: 0, to: t };
  if (e < 0 && (e = 0), e <= t >> 1) {
    let i = Math.floor(e / n);
    return { from: i * n, to: (i + 1) * n };
  }
  let r = Math.floor((t - e) / n);
  return { from: t - (r + 1) * n, to: t - r * n };
}
class $pe {
  constructor(e, n, r) {
    this.view = e, this.stateField = n, this.applyCompletion = r, this.info = null, this.infoDestroy = null, this.placeInfoReq = {
      read: () => this.measureInfo(),
      write: (c) => this.placeInfo(c),
      key: this
    }, this.space = null, this.currentClass = "";
    let i = e.state.field(n), { options: s, selected: o } = i.open, l = e.state.facet(bt);
    this.optionContent = qpe(l), this.optionClass = l.optionClass, this.tooltipClass = l.tooltipClass, this.range = J0(s.length, o, l.maxRenderedOptions), this.dom = document.createElement("div"), this.dom.className = "cm-tooltip-autocomplete", this.updateTooltipClass(e.state), this.dom.addEventListener("mousedown", (c) => {
      for (let a = c.target, h; a && a != this.dom; a = a.parentNode)
        if (a.nodeName == "LI" && (h = /-(\d+)$/.exec(a.id)) && +h[1] < s.length) {
          this.applyCompletion(e, s[+h[1]]), c.preventDefault();
          return;
        }
    }), this.dom.addEventListener("focusout", (c) => {
      let a = e.state.field(this.stateField, !1);
      a && a.tooltip && e.state.facet(bt).closeOnBlur && c.relatedTarget != e.contentDOM && e.dispatch({ effects: go.of(null) });
    }), this.list = this.dom.appendChild(this.createListBox(s, i.id, this.range)), this.list.addEventListener("scroll", () => {
      this.info && this.view.requestMeasure(this.placeInfoReq);
    });
  }
  mount() {
    this.updateSel();
  }
  update(e) {
    var n, r, i;
    let s = e.state.field(this.stateField), o = e.startState.field(this.stateField);
    this.updateTooltipClass(e.state), s != o && (this.updateSel(), ((n = s.open) === null || n === void 0 ? void 0 : n.disabled) != ((r = o.open) === null || r === void 0 ? void 0 : r.disabled) && this.dom.classList.toggle("cm-tooltip-autocomplete-disabled", !!(!((i = s.open) === null || i === void 0) && i.disabled)));
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
    if ((n.selected > -1 && n.selected < this.range.from || n.selected >= this.range.to) && (this.range = J0(n.options.length, n.selected, this.view.state.facet(bt).maxRenderedOptions), this.list.remove(), this.list = this.dom.appendChild(this.createListBox(n.options, e.id, this.range)), this.list.addEventListener("scroll", () => {
      this.info && this.view.requestMeasure(this.placeInfoReq);
    })), this.updateSelectedOption(n.selected)) {
      this.destroyInfo();
      let { completion: r } = n.options[n.selected], { info: i } = r;
      if (!i)
        return;
      let s = typeof i == "string" ? document.createTextNode(i) : i(r);
      if (!s)
        return;
      "then" in s ? s.then((o) => {
        o && this.view.state.field(this.stateField, !1) == e && this.addInfoPane(o, r);
      }).catch((o) => Lt(this.view.state, o, "completion info")) : this.addInfoPane(s, r);
    }
  }
  addInfoPane(e, n) {
    this.destroyInfo();
    let r = this.info = document.createElement("div");
    if (r.className = "cm-tooltip cm-completionInfo", e.nodeType != null)
      r.appendChild(e), this.infoDestroy = null;
    else {
      let { dom: i, destroy: s } = e;
      r.appendChild(i), this.infoDestroy = s || null;
    }
    this.dom.appendChild(r), this.view.requestMeasure(this.placeInfoReq);
  }
  updateSelectedOption(e) {
    let n = null;
    for (let r = this.list.firstChild, i = this.range.from; r; r = r.nextSibling, i++)
      r.nodeName != "LI" || !r.id ? i-- : i == e ? r.hasAttribute("aria-selected") || (r.setAttribute("aria-selected", "true"), n = r) : r.hasAttribute("aria-selected") && r.removeAttribute("aria-selected");
    return n && zpe(this.list, n), n;
  }
  measureInfo() {
    let e = this.dom.querySelector("[aria-selected]");
    if (!e || !this.info)
      return null;
    let n = this.dom.getBoundingClientRect(), r = this.info.getBoundingClientRect(), i = e.getBoundingClientRect(), s = this.space;
    if (!s) {
      let o = this.dom.ownerDocument.defaultView || window;
      s = { left: 0, top: 0, right: o.innerWidth, bottom: o.innerHeight };
    }
    return i.top > Math.min(s.bottom, n.bottom) - 10 || i.bottom < Math.max(s.top, n.top) + 10 ? null : this.view.state.facet(bt).positionInfo(this.view, n, i, r, s);
  }
  placeInfo(e) {
    this.info && (e ? (e.style && (this.info.style.cssText = e.style), this.info.className = "cm-tooltip cm-completionInfo " + (e.class || "")) : this.info.style.cssText = "top: -1e6px");
  }
  createListBox(e, n, r) {
    const i = document.createElement("ul");
    i.id = n, i.setAttribute("role", "listbox"), i.setAttribute("aria-expanded", "true"), i.setAttribute("aria-label", this.view.state.phrase("Completions"));
    let s = null;
    for (let o = r.from; o < r.to; o++) {
      let { completion: l, match: c } = e[o], { section: a } = l;
      if (a) {
        let f = typeof a == "string" ? a : a.name;
        if (f != s && (o > r.from || r.from == 0))
          if (s = f, typeof a != "string" && a.header)
            i.appendChild(a.header(a));
          else {
            let d = i.appendChild(document.createElement("completion-section"));
            d.textContent = f;
          }
      }
      const h = i.appendChild(document.createElement("li"));
      h.id = n + "-" + o, h.setAttribute("role", "option");
      let u = this.optionClass(l);
      u && (h.className = u);
      for (let f of this.optionContent) {
        let d = f(l, this.view.state, c);
        d && h.appendChild(d);
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
function Hpe(t, e) {
  return (n) => new $pe(n, t, e);
}
function zpe(t, e) {
  let n = t.getBoundingClientRect(), r = e.getBoundingClientRect();
  r.top < n.top ? t.scrollTop -= n.top - r.top : r.bottom > n.bottom && (t.scrollTop += r.bottom - n.bottom);
}
function Z0(t) {
  return (t.boost || 0) * 100 + (t.apply ? 10 : 0) + (t.info ? 5 : 0) + (t.type ? 1 : 0);
}
function Vpe(t, e) {
  let n = [], r = null, i = (c) => {
    n.push(c);
    let { section: a } = c.completion;
    if (a) {
      r || (r = []);
      let h = typeof a == "string" ? a : a.name;
      r.some((u) => u.name == h) || r.push(typeof a == "string" ? { name: h } : a);
    }
  };
  for (let c of t)
    if (c.hasResult()) {
      let a = c.result.getMatch;
      if (c.result.filter === !1)
        for (let h of c.result.options)
          i(new G0(h, c.source, a ? a(h) : [], 1e9 - n.length));
      else {
        let h = new Fpe(e.sliceDoc(c.from, c.to));
        for (let u of c.result.options)
          if (h.match(u.label)) {
            let f = u.displayLabel ? a ? a(u, h.matched) : [] : h.matched;
            i(new G0(u, c.source, f, h.score + (u.boost || 0)));
          }
      }
    }
  if (r) {
    let c = /* @__PURE__ */ Object.create(null), a = 0, h = (u, f) => {
      var d, p;
      return ((d = u.rank) !== null && d !== void 0 ? d : 1e9) - ((p = f.rank) !== null && p !== void 0 ? p : 1e9) || (u.name < f.name ? -1 : 1);
    };
    for (let u of r.sort(h))
      a -= 1e5, c[u.name] = a;
    for (let u of n) {
      let { section: f } = u.completion;
      f && (u.score += c[typeof f == "string" ? f : f.name]);
    }
  }
  let s = [], o = null, l = e.facet(bt).compareCompletions;
  for (let c of n.sort((a, h) => h.score - a.score || l(a.completion, h.completion))) {
    let a = c.completion;
    !o || o.label != a.label || o.detail != a.detail || o.type != null && a.type != null && o.type != a.type || o.apply != a.apply || o.boost != a.boost ? s.push(c) : Z0(c.completion) > Z0(o) && (s[s.length - 1] = c), o = c.completion;
  }
  return s;
}
class Ai {
  constructor(e, n, r, i, s, o) {
    this.options = e, this.attrs = n, this.tooltip = r, this.timestamp = i, this.selected = s, this.disabled = o;
  }
  setSelected(e, n) {
    return e == this.selected || e >= this.options.length ? this : new Ai(this.options, X0(n, e), this.tooltip, this.timestamp, e, this.disabled);
  }
  static build(e, n, r, i, s) {
    let o = Vpe(e, n);
    if (!o.length)
      return i && e.some((c) => c.state == 1) ? new Ai(i.options, i.attrs, i.tooltip, i.timestamp, i.selected, !0) : null;
    let l = n.facet(bt).selectOnOpen ? 0 : -1;
    if (i && i.selected != l && i.selected != -1) {
      let c = i.options[i.selected].completion;
      for (let a = 0; a < o.length; a++)
        if (o[a].completion == c) {
          l = a;
          break;
        }
    }
    return new Ai(o, X0(r, l), {
      pos: e.reduce((c, a) => a.hasResult() ? Math.min(c, a.from) : c, 1e8),
      create: Hpe(_t, Cx),
      above: s.aboveCursor
    }, i ? i.timestamp : Date.now(), l, !1);
  }
  map(e) {
    return new Ai(this.options, this.attrs, Object.assign(Object.assign({}, this.tooltip), { pos: e.mapPos(this.tooltip.pos) }), this.timestamp, this.selected, this.disabled);
  }
}
class Ic {
  constructor(e, n, r) {
    this.active = e, this.id = n, this.open = r;
  }
  static start() {
    return new Ic(jpe, "cm-ac-" + Math.floor(Math.random() * 2e6).toString(36), null);
  }
  update(e) {
    let { state: n } = e, r = n.facet(bt), s = (r.override || n.languageDataAt("autocomplete", cr(n)).map(Ppe)).map((l) => (this.active.find((a) => a.source == l) || new dt(l, this.active.some((a) => a.state != 0) ? 1 : 0)).update(e, r));
    s.length == this.active.length && s.every((l, c) => l == this.active[c]) && (s = this.active);
    let o = this.open;
    o && e.docChanged && (o = o.map(e.changes)), e.selection || s.some((l) => l.hasResult() && e.changes.touchesRange(l.from, l.to)) || !Upe(s, this.active) ? o = Ai.build(s, n, this.id, o, r) : o && o.disabled && !s.some((l) => l.state == 1) && (o = null), !o && s.every((l) => l.state != 1) && s.some((l) => l.hasResult()) && (s = s.map((l) => l.hasResult() ? new dt(l.source, 0) : l));
    for (let l of e.effects)
      l.is(Sx) && (o = o && o.setSelected(l.value, this.id));
    return s == this.active && o == this.open ? this : new Ic(s, this.id, o);
  }
  get tooltip() {
    return this.open ? this.open.tooltip : null;
  }
  get attrs() {
    return this.open ? this.open.attrs : Wpe;
  }
}
function Upe(t, e) {
  if (t == e)
    return !0;
  for (let n = 0, r = 0; ; ) {
    for (; n < t.length && !t[n].hasResult; )
      n++;
    for (; r < e.length && !e[r].hasResult; )
      r++;
    let i = n == t.length, s = r == e.length;
    if (i || s)
      return i == s;
    if (t[n++].result != e[r++].result)
      return !1;
  }
}
const Wpe = {
  "aria-autocomplete": "list"
};
function X0(t, e) {
  let n = {
    "aria-autocomplete": "list",
    "aria-haspopup": "listbox",
    "aria-controls": t
  };
  return e > -1 && (n["aria-activedescendant"] = t + "-" + e), n;
}
const jpe = [];
function vf(t) {
  return t.isUserEvent("input.type") ? "input" : t.isUserEvent("delete.backward") ? "delete" : null;
}
class dt {
  constructor(e, n, r = -1) {
    this.source = e, this.state = n, this.explicitPos = r;
  }
  hasResult() {
    return !1;
  }
  update(e, n) {
    let r = vf(e), i = this;
    r ? i = i.handleUserEvent(e, r, n) : e.docChanged ? i = i.handleChange(e) : e.selection && i.state != 0 && (i = new dt(i.source, 0));
    for (let s of e.effects)
      if (s.is(Hd))
        i = new dt(i.source, 1, s.value ? cr(e.state) : -1);
      else if (s.is(go))
        i = new dt(i.source, 0);
      else if (s.is(_x))
        for (let o of s.value)
          o.source == i.source && (i = o);
    return i;
  }
  handleUserEvent(e, n, r) {
    return n == "delete" || !r.activateOnTyping ? this.map(e.changes) : new dt(this.source, 1);
  }
  handleChange(e) {
    return e.changes.touchesRange(cr(e.startState)) ? new dt(this.source, 0) : this.map(e.changes);
  }
  map(e) {
    return e.empty || this.explicitPos < 0 ? this : new dt(this.source, this.state, e.mapPos(this.explicitPos));
  }
}
class Ni extends dt {
  constructor(e, n, r, i, s) {
    super(e, 2, n), this.result = r, this.from = i, this.to = s;
  }
  hasResult() {
    return !0;
  }
  handleUserEvent(e, n, r) {
    var i;
    let s = e.changes.mapPos(this.from), o = e.changes.mapPos(this.to, 1), l = cr(e.state);
    if ((this.explicitPos < 0 ? l <= s : l < this.from) || l > o || n == "delete" && cr(e.startState) == this.from)
      return new dt(this.source, n == "input" && r.activateOnTyping ? 1 : 0);
    let c = this.explicitPos < 0 ? -1 : e.changes.mapPos(this.explicitPos), a;
    return Gpe(this.result.validFor, e.state, s, o) ? new Ni(this.source, c, this.result, s, o) : this.result.update && (a = this.result.update(this.result, s, o, new xx(e.state, l, c >= 0))) ? new Ni(this.source, c, a, a.from, (i = a.to) !== null && i !== void 0 ? i : cr(e.state)) : new dt(this.source, 1, c);
  }
  handleChange(e) {
    return e.changes.touchesRange(this.from, this.to) ? new dt(this.source, 0) : this.map(e.changes);
  }
  map(e) {
    return e.empty ? this : new Ni(this.source, this.explicitPos < 0 ? -1 : e.mapPos(this.explicitPos), this.result, e.mapPos(this.from), e.mapPos(this.to, 1));
  }
}
function Gpe(t, e, n, r) {
  if (!t)
    return !1;
  let i = e.sliceDoc(n, r);
  return typeof t == "function" ? t(i, n, r, e) : kx(t, !0).test(i);
}
const _x = /* @__PURE__ */ K.define({
  map(t, e) {
    return t.map((n) => n.map(e));
  }
}), Sx = /* @__PURE__ */ K.define(), _t = /* @__PURE__ */ Ye.define({
  create() {
    return Ic.start();
  },
  update(t, e) {
    return t.update(e);
  },
  provide: (t) => [
    Cd.from(t, (e) => e.tooltip),
    I.contentAttributes.from(t, (e) => e.attrs)
  ]
});
function Cx(t, e) {
  const n = e.completion.apply || e.completion.label;
  let r = t.state.field(_t).active.find((i) => i.source == e.source);
  return r instanceof Ni ? (typeof n == "string" ? t.dispatch(Object.assign(Object.assign({}, Npe(t.state, n, r.from, r.to)), { annotations: Ipe.of(e.completion) })) : n(t, e.completion, r.from, r.to), !0) : !1;
}
function vl(t, e = "option") {
  return (n) => {
    let r = n.state.field(_t, !1);
    if (!r || !r.open || r.open.disabled || Date.now() - r.open.timestamp < n.state.facet(bt).interactionDelay)
      return !1;
    let i = 1, s;
    e == "page" && (s = uv(n, r.open.tooltip)) && (i = Math.max(2, Math.floor(s.dom.offsetHeight / s.dom.querySelector("li").offsetHeight) - 1));
    let { length: o } = r.open.options, l = r.open.selected > -1 ? r.open.selected + i * (t ? 1 : -1) : t ? 0 : o - 1;
    return l < 0 ? l = e == "page" ? 0 : o - 1 : l >= o && (l = e == "page" ? o - 1 : 0), n.dispatch({ effects: Sx.of(l) }), !0;
  };
}
const Ype = (t) => {
  let e = t.state.field(_t, !1);
  return t.state.readOnly || !e || !e.open || e.open.selected < 0 || e.open.disabled || Date.now() - e.open.timestamp < t.state.facet(bt).interactionDelay ? !1 : Cx(t, e.open.options[e.open.selected]);
}, Kpe = (t) => t.state.field(_t, !1) ? (t.dispatch({ effects: Hd.of(!0) }), !0) : !1, Jpe = (t) => {
  let e = t.state.field(_t, !1);
  return !e || !e.active.some((n) => n.state != 0) ? !1 : (t.dispatch({ effects: go.of(null) }), !0);
};
class Zpe {
  constructor(e, n) {
    this.active = e, this.context = n, this.time = Date.now(), this.updates = [], this.done = void 0;
  }
}
const Q0 = 50, Xpe = 50, Qpe = 1e3, ege = /* @__PURE__ */ Ae.fromClass(class {
  constructor(t) {
    this.view = t, this.debounceUpdate = -1, this.running = [], this.debounceAccept = -1, this.composing = 0;
    for (let e of t.state.field(_t).active)
      e.state == 1 && this.startQuery(e);
  }
  update(t) {
    let e = t.state.field(_t);
    if (!t.selectionSet && !t.docChanged && t.startState.field(_t) == e)
      return;
    let n = t.transactions.some((r) => (r.selection || r.docChanged) && !vf(r));
    for (let r = 0; r < this.running.length; r++) {
      let i = this.running[r];
      if (n || i.updates.length + t.transactions.length > Xpe && Date.now() - i.time > Qpe) {
        for (let s of i.context.abortListeners)
          try {
            s();
          } catch (o) {
            Lt(this.view.state, o);
          }
        i.context.abortListeners = null, this.running.splice(r--, 1);
      } else
        i.updates.push(...t.transactions);
    }
    if (this.debounceUpdate > -1 && clearTimeout(this.debounceUpdate), this.debounceUpdate = e.active.some((r) => r.state == 1 && !this.running.some((i) => i.active.source == r.source)) ? setTimeout(() => this.startUpdate(), Q0) : -1, this.composing != 0)
      for (let r of t.transactions)
        vf(r) == "input" ? this.composing = 2 : this.composing == 2 && r.selection && (this.composing = 3);
  }
  startUpdate() {
    this.debounceUpdate = -1;
    let { state: t } = this.view, e = t.field(_t);
    for (let n of e.active)
      n.state == 1 && !this.running.some((r) => r.active.source == n.source) && this.startQuery(n);
  }
  startQuery(t) {
    let { state: e } = this.view, n = cr(e), r = new xx(e, n, t.explicitPos == n), i = new Zpe(t, r);
    this.running.push(i), Promise.resolve(t.source(r)).then((s) => {
      i.context.aborted || (i.done = s || null, this.scheduleAccept());
    }, (s) => {
      this.view.dispatch({ effects: go.of(null) }), Lt(this.view.state, s);
    });
  }
  scheduleAccept() {
    this.running.every((t) => t.done !== void 0) ? this.accept() : this.debounceAccept < 0 && (this.debounceAccept = setTimeout(() => this.accept(), Q0));
  }
  accept() {
    var t;
    this.debounceAccept > -1 && clearTimeout(this.debounceAccept), this.debounceAccept = -1;
    let e = [], n = this.view.state.facet(bt);
    for (let r = 0; r < this.running.length; r++) {
      let i = this.running[r];
      if (i.done === void 0)
        continue;
      if (this.running.splice(r--, 1), i.done) {
        let o = new Ni(i.active.source, i.active.explicitPos, i.done, i.done.from, (t = i.done.to) !== null && t !== void 0 ? t : cr(i.updates.length ? i.updates[0].startState : this.view.state));
        for (let l of i.updates)
          o = o.update(l, n);
        if (o.hasResult()) {
          e.push(o);
          continue;
        }
      }
      let s = this.view.state.field(_t).active.find((o) => o.source == i.active.source);
      if (s && s.state == 1)
        if (i.done == null) {
          let o = new dt(i.active.source, 0);
          for (let l of i.updates)
            o = o.update(l, n);
          o.state != 1 && e.push(o);
        } else
          this.startQuery(s);
    }
    e.length && this.view.dispatch({ effects: _x.of(e) });
  }
}, {
  eventHandlers: {
    blur(t) {
      let e = this.view.state.field(_t, !1);
      if (e && e.tooltip && this.view.state.facet(bt).closeOnBlur) {
        let n = e.open && uv(this.view, e.open.tooltip);
        (!n || !n.dom.contains(t.relatedTarget)) && this.view.dispatch({ effects: go.of(null) });
      }
    },
    compositionstart() {
      this.composing = 1;
    },
    compositionend() {
      this.composing == 3 && setTimeout(() => this.view.dispatch({ effects: Hd.of(!1) }), 20), this.composing = 0;
    }
  }
}), tge = /* @__PURE__ */ I.baseTheme({
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
}), mo = {
  brackets: ["(", "[", "{", "'", '"'],
  before: ")]}:;>",
  stringPrefixes: []
}, Br = /* @__PURE__ */ K.define({
  map(t, e) {
    let n = e.mapPos(t, -1, ct.TrackAfter);
    return n == null ? void 0 : n;
  }
}), zd = /* @__PURE__ */ new class extends Zr {
}();
zd.startSide = 1;
zd.endSide = -1;
const Ax = /* @__PURE__ */ Ye.define({
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
      n.is(Br) && (t = t.update({ add: [zd.range(n.value, n.value + 1)] }));
    return t;
  }
});
function nge() {
  return [ige, Ax];
}
const zh = "()[]{}<>";
function Ex(t) {
  for (let e = 0; e < zh.length; e += 2)
    if (zh.charCodeAt(e) == t)
      return zh.charAt(e + 1);
  return gd(t < 128 ? t : t + 1);
}
function Dx(t, e) {
  return t.languageDataAt("closeBrackets", e)[0] || mo;
}
const rge = typeof navigator == "object" && /* @__PURE__ */ /Android\b/.test(navigator.userAgent), ige = /* @__PURE__ */ I.inputHandler.of((t, e, n, r) => {
  if ((rge ? t.composing : t.compositionStarted) || t.state.readOnly)
    return !1;
  let i = t.state.selection.main;
  if (r.length > 2 || r.length == 2 && Dt(Ve(r, 0)) == 1 || e != i.from || n != i.to)
    return !1;
  let s = lge(t.state, r);
  return s ? (t.dispatch(s), !0) : !1;
}), sge = ({ state: t, dispatch: e }) => {
  if (t.readOnly)
    return !1;
  let r = Dx(t, t.selection.main.head).brackets || mo.brackets, i = null, s = t.changeByRange((o) => {
    if (o.empty) {
      let l = cge(t.doc, o.head);
      for (let c of r)
        if (c == l && xa(t.doc, o.head) == Ex(Ve(c, 0)))
          return {
            changes: { from: o.head - c.length, to: o.head + c.length },
            range: C.cursor(o.head - c.length)
          };
    }
    return { range: i = o };
  });
  return i || e(t.update(s, { scrollIntoView: !0, userEvent: "delete.backward" })), !i;
}, oge = [
  { key: "Backspace", run: sge }
];
function lge(t, e) {
  let n = Dx(t, t.selection.main.head), r = n.brackets || mo.brackets;
  for (let i of r) {
    let s = Ex(Ve(i, 0));
    if (e == i)
      return s == i ? uge(t, i, r.indexOf(i + i + i) > -1, n) : age(t, i, s, n.before || mo.before);
    if (e == s && Tx(t, t.selection.main.from))
      return hge(t, i, s);
  }
  return null;
}
function Tx(t, e) {
  let n = !1;
  return t.field(Ax).between(0, t.doc.length, (r) => {
    r == e && (n = !0);
  }), n;
}
function xa(t, e) {
  let n = t.sliceString(e, e + 2);
  return n.slice(0, Dt(Ve(n, 0)));
}
function cge(t, e) {
  let n = t.sliceString(e - 2, e);
  return Dt(Ve(n, 0)) == n.length ? n : n.slice(1);
}
function age(t, e, n, r) {
  let i = null, s = t.changeByRange((o) => {
    if (!o.empty)
      return {
        changes: [{ insert: e, from: o.from }, { insert: n, from: o.to }],
        effects: Br.of(o.to + e.length),
        range: C.range(o.anchor + e.length, o.head + e.length)
      };
    let l = xa(t.doc, o.head);
    return !l || /\s/.test(l) || r.indexOf(l) > -1 ? {
      changes: { insert: e + n, from: o.head },
      effects: Br.of(o.head + e.length),
      range: C.cursor(o.head + e.length)
    } : { range: i = o };
  });
  return i ? null : t.update(s, {
    scrollIntoView: !0,
    userEvent: "input.type"
  });
}
function hge(t, e, n) {
  let r = null, i = t.changeByRange((s) => s.empty && xa(t.doc, s.head) == n ? {
    changes: { from: s.head, to: s.head + n.length, insert: n },
    range: C.cursor(s.head + n.length)
  } : r = { range: s });
  return r ? null : t.update(i, {
    scrollIntoView: !0,
    userEvent: "input.type"
  });
}
function uge(t, e, n, r) {
  let i = r.stringPrefixes || mo.stringPrefixes, s = null, o = t.changeByRange((l) => {
    if (!l.empty)
      return {
        changes: [{ insert: e, from: l.from }, { insert: e, from: l.to }],
        effects: Br.of(l.to + e.length),
        range: C.range(l.anchor + e.length, l.head + e.length)
      };
    let c = l.head, a = xa(t.doc, c), h;
    if (a == e) {
      if (ey(t, c))
        return {
          changes: { insert: e + e, from: c },
          effects: Br.of(c + e.length),
          range: C.cursor(c + e.length)
        };
      if (Tx(t, c)) {
        let f = n && t.sliceDoc(c, c + e.length * 3) == e + e + e ? e + e + e : e;
        return {
          changes: { from: c, to: c + f.length, insert: f },
          range: C.cursor(c + f.length)
        };
      }
    } else {
      if (n && t.sliceDoc(c - 2 * e.length, c) == e + e && (h = ty(t, c - 2 * e.length, i)) > -1 && ey(t, h))
        return {
          changes: { insert: e + e + e + e, from: c },
          effects: Br.of(c + e.length),
          range: C.cursor(c + e.length)
        };
      if (t.charCategorizer(c)(a) != xe.Word && ty(t, c, i) > -1 && !fge(t, c, e, i))
        return {
          changes: { insert: e + e, from: c },
          effects: Br.of(c + e.length),
          range: C.cursor(c + e.length)
        };
    }
    return { range: s = l };
  });
  return s ? null : t.update(o, {
    scrollIntoView: !0,
    userEvent: "input.type"
  });
}
function ey(t, e) {
  let n = tt(t).resolveInner(e + 1);
  return n.parent && n.from == e;
}
function fge(t, e, n, r) {
  let i = tt(t).resolveInner(e, -1), s = r.reduce((o, l) => Math.max(o, l.length), 0);
  for (let o = 0; o < 5; o++) {
    let l = t.sliceDoc(i.from, Math.min(i.to, i.from + n.length + s)), c = l.indexOf(n);
    if (!c || c > -1 && r.indexOf(l.slice(0, c)) > -1) {
      let h = i.firstChild;
      for (; h && h.from == i.from && h.to - h.from > n.length + c; ) {
        if (t.sliceDoc(h.to - n.length, h.to) == n)
          return !1;
        h = h.firstChild;
      }
      return !0;
    }
    let a = i.to == e && i.parent;
    if (!a)
      break;
    i = a;
  }
  return !1;
}
function ty(t, e, n) {
  let r = t.charCategorizer(e);
  if (r(t.sliceDoc(e - 1, e)) != xe.Word)
    return e;
  for (let i of n) {
    let s = e - i.length;
    if (t.sliceDoc(s, e) == i && r(t.sliceDoc(s - 1, s)) != xe.Word)
      return s;
  }
  return -1;
}
function dge(t = {}) {
  return [
    _t,
    bt.of(t),
    ege,
    pge,
    tge
  ];
}
const Mx = [
  { key: "Ctrl-Space", run: Kpe },
  { key: "Escape", run: Jpe },
  { key: "ArrowDown", run: /* @__PURE__ */ vl(!0) },
  { key: "ArrowUp", run: /* @__PURE__ */ vl(!1) },
  { key: "PageDown", run: /* @__PURE__ */ vl(!0, "page") },
  { key: "PageUp", run: /* @__PURE__ */ vl(!1, "page") },
  { key: "Enter", run: Ype }
], pge = /* @__PURE__ */ fs.highest(/* @__PURE__ */ co.computeN([bt], (t) => t.facet(bt).defaultKeymap ? [Mx] : []));
class gge {
  constructor(e, n, r) {
    this.from = e, this.to = n, this.diagnostic = r;
  }
}
class Ir {
  constructor(e, n, r) {
    this.diagnostics = e, this.panel = n, this.selected = r;
  }
  static init(e, n, r) {
    let i = e, s = r.facet(Rx).markerFilter;
    s && (i = s(i));
    let o = V.set(i.map((l) => l.from == l.to || l.from == l.to - 1 && r.doc.lineAt(l.from).to == l.from ? V.widget({
      widget: new Sge(l),
      diagnostic: l
    }).range(l.from) : V.mark({
      attributes: { class: "cm-lintRange cm-lintRange-" + l.severity + (l.markClass ? " " + l.markClass : "") },
      diagnostic: l
    }).range(l.from, l.to)), !0);
    return new Ir(o, n, Xi(o));
  }
}
function Xi(t, e = null, n = 0) {
  let r = null;
  return t.between(n, 1e9, (i, s, { spec: o }) => {
    if (!(e && o.diagnostic != e))
      return r = new gge(i, s, o.diagnostic), !1;
  }), r;
}
function mge(t, e) {
  let n = t.startState.doc.lineAt(e.pos);
  return !!(t.effects.some((r) => r.is(Ox)) || t.changes.touchesRange(n.from, n.to));
}
function yge(t, e) {
  return t.field(Ct, !1) ? e : e.concat(K.appendConfig.of(Ege));
}
const Ox = /* @__PURE__ */ K.define(), Vd = /* @__PURE__ */ K.define(), Lx = /* @__PURE__ */ K.define(), Ct = /* @__PURE__ */ Ye.define({
  create() {
    return new Ir(V.none, null, null);
  },
  update(t, e) {
    if (e.docChanged) {
      let n = t.diagnostics.map(e.changes), r = null;
      if (t.selected) {
        let i = e.changes.mapPos(t.selected.from, 1);
        r = Xi(n, t.selected.diagnostic, i) || Xi(n, null, i);
      }
      t = new Ir(n, t.panel, r);
    }
    for (let n of e.effects)
      n.is(Ox) ? t = Ir.init(n.value, t.panel, e.state) : n.is(Vd) ? t = new Ir(t.diagnostics, n.value ? ka.open : null, t.selected) : n.is(Lx) && (t = new Ir(t.diagnostics, t.panel, n.value));
    return t;
  },
  provide: (t) => [
    uo.from(t, (e) => e.panel),
    I.decorations.from(t, (e) => e.diagnostics)
  ]
}), bge = /* @__PURE__ */ V.mark({ class: "cm-lintRange cm-lintRange-active" });
function wge(t, e, n) {
  let { diagnostics: r } = t.state.field(Ct), i = [], s = 2e8, o = 0;
  r.between(e - (n < 0 ? 1 : 0), e + (n > 0 ? 1 : 0), (c, a, { spec: h }) => {
    e >= c && e <= a && (c == a || (e > c || n > 0) && (e < a || n < 0)) && (i.push(h.diagnostic), s = Math.min(c, s), o = Math.max(a, o));
  });
  let l = t.state.facet(Rx).tooltipFilter;
  return l && (i = l(i)), i.length ? {
    pos: s,
    end: o,
    above: t.state.doc.lineAt(s).to < o,
    create() {
      return { dom: vge(t, i) };
    }
  } : null;
}
function vge(t, e) {
  return pe("ul", { class: "cm-tooltip-lint" }, e.map((n) => Nx(t, n, !1)));
}
const xge = (t) => {
  let e = t.state.field(Ct, !1);
  (!e || !e.panel) && t.dispatch({ effects: yge(t.state, [Vd.of(!0)]) });
  let n = ho(t, ka.open);
  return n && n.dom.querySelector(".cm-panel-lint ul").focus(), !0;
}, ny = (t) => {
  let e = t.state.field(Ct, !1);
  return !e || !e.panel ? !1 : (t.dispatch({ effects: Vd.of(!1) }), !0);
}, kge = (t) => {
  let e = t.state.field(Ct, !1);
  if (!e)
    return !1;
  let n = t.state.selection.main, r = e.diagnostics.iter(n.to + 1);
  return !r.value && (r = e.diagnostics.iter(0), !r.value || r.from == n.from && r.to == n.to) ? !1 : (t.dispatch({ selection: { anchor: r.from, head: r.to }, scrollIntoView: !0 }), !0);
}, _ge = [
  { key: "Mod-Shift-m", run: xge, preventDefault: !0 },
  { key: "F8", run: kge }
], Rx = /* @__PURE__ */ N.define({
  combine(t) {
    return Object.assign({ sources: t.map((e) => e.source) }, Sn(t.map((e) => e.config), {
      delay: 750,
      markerFilter: null,
      tooltipFilter: null,
      needsRefresh: null
    }, {
      needsRefresh: (e, n) => e ? n ? (r) => e(r) || n(r) : e : n
    }));
  }
});
function Ix(t) {
  let e = [];
  if (t)
    e:
      for (let { name: n } of t) {
        for (let r = 0; r < n.length; r++) {
          let i = n[r];
          if (/[a-zA-Z]/.test(i) && !e.some((s) => s.toLowerCase() == i.toLowerCase())) {
            e.push(i);
            continue e;
          }
        }
        e.push("");
      }
  return e;
}
function Nx(t, e, n) {
  var r;
  let i = n ? Ix(e.actions) : [];
  return pe("li", { class: "cm-diagnostic cm-diagnostic-" + e.severity }, pe("span", { class: "cm-diagnosticText" }, e.renderMessage ? e.renderMessage() : e.message), (r = e.actions) === null || r === void 0 ? void 0 : r.map((s, o) => {
    let l = !1, c = (f) => {
      if (f.preventDefault(), l)
        return;
      l = !0;
      let d = Xi(t.state.field(Ct).diagnostics, e);
      d && s.apply(t, d.from, d.to);
    }, { name: a } = s, h = i[o] ? a.indexOf(i[o]) : -1, u = h < 0 ? a : [
      a.slice(0, h),
      pe("u", a.slice(h, h + 1)),
      a.slice(h + 1)
    ];
    return pe("button", {
      type: "button",
      class: "cm-diagnosticAction",
      onclick: c,
      onmousedown: c,
      "aria-label": ` Action: ${a}${h < 0 ? "" : ` (access key "${i[o]})"`}.`
    }, u);
  }), e.source && pe("div", { class: "cm-diagnosticSource" }, e.source));
}
class Sge extends zn {
  constructor(e) {
    super(), this.diagnostic = e;
  }
  eq(e) {
    return e.diagnostic == this.diagnostic;
  }
  toDOM() {
    return pe("span", { class: "cm-lintPoint cm-lintPoint-" + this.diagnostic.severity });
  }
}
class ry {
  constructor(e, n) {
    this.diagnostic = n, this.id = "item_" + Math.floor(Math.random() * 4294967295).toString(16), this.dom = Nx(e, n, !0), this.dom.id = this.id, this.dom.setAttribute("role", "option");
  }
}
class ka {
  constructor(e) {
    this.view = e, this.items = [];
    let n = (i) => {
      if (i.keyCode == 27)
        ny(this.view), this.view.focus();
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
        let { diagnostic: s } = this.items[this.selectedIndex], o = Ix(s.actions);
        for (let l = 0; l < o.length; l++)
          if (o[l].toUpperCase().charCodeAt(0) == i.keyCode) {
            let c = Xi(this.view.state.field(Ct).diagnostics, s);
            c && s.actions[l].apply(e, c.from, c.to);
          }
      } else
        return;
      i.preventDefault();
    }, r = (i) => {
      for (let s = 0; s < this.items.length; s++)
        this.items[s].dom.contains(i.target) && this.moveSelection(s);
    };
    this.list = pe("ul", {
      tabIndex: 0,
      role: "listbox",
      "aria-label": this.view.state.phrase("Diagnostics"),
      onkeydown: n,
      onclick: r
    }), this.dom = pe("div", { class: "cm-panel-lint" }, this.list, pe("button", {
      type: "button",
      name: "close",
      "aria-label": this.view.state.phrase("close"),
      onclick: () => ny(this.view)
    }, "\xD7")), this.update();
  }
  get selectedIndex() {
    let e = this.view.state.field(Ct).selected;
    if (!e)
      return -1;
    for (let n = 0; n < this.items.length; n++)
      if (this.items[n].diagnostic == e.diagnostic)
        return n;
    return -1;
  }
  update() {
    let { diagnostics: e, selected: n } = this.view.state.field(Ct), r = 0, i = !1, s = null;
    for (e.between(0, this.view.state.doc.length, (o, l, { spec: c }) => {
      let a = -1, h;
      for (let u = r; u < this.items.length; u++)
        if (this.items[u].diagnostic == c.diagnostic) {
          a = u;
          break;
        }
      a < 0 ? (h = new ry(this.view, c.diagnostic), this.items.splice(r, 0, h), i = !0) : (h = this.items[a], a > r && (this.items.splice(r, a - r), i = !0)), n && h.diagnostic == n.diagnostic ? h.dom.hasAttribute("aria-selected") || (h.dom.setAttribute("aria-selected", "true"), s = h) : h.dom.hasAttribute("aria-selected") && h.dom.removeAttribute("aria-selected"), r++;
    }); r < this.items.length && !(this.items.length == 1 && this.items[0].diagnostic.from < 0); )
      i = !0, this.items.pop();
    this.items.length == 0 && (this.items.push(new ry(this.view, {
      from: -1,
      to: -1,
      severity: "info",
      message: this.view.state.phrase("No diagnostics")
    })), i = !0), s ? (this.list.setAttribute("aria-activedescendant", s.id), this.view.requestMeasure({
      key: this,
      read: () => ({ sel: s.dom.getBoundingClientRect(), panel: this.list.getBoundingClientRect() }),
      write: ({ sel: o, panel: l }) => {
        o.top < l.top ? this.list.scrollTop -= l.top - o.top : o.bottom > l.bottom && (this.list.scrollTop += o.bottom - l.bottom);
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
    let n = this.view.state.field(Ct), r = Xi(n.diagnostics, this.items[e].diagnostic);
    !r || this.view.dispatch({
      selection: { anchor: r.from, head: r.to },
      scrollIntoView: !0,
      effects: Lx.of(r)
    });
  }
  static open(e) {
    return new ka(e);
  }
}
function Cge(t, e = 'viewBox="0 0 40 40"') {
  return `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${e}>${encodeURIComponent(t)}</svg>')`;
}
function xl(t) {
  return Cge(`<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${t}" fill="none" stroke-width=".7"/>`, 'width="6" height="3"');
}
const Age = /* @__PURE__ */ I.baseTheme({
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
  ".cm-lintRange-error": { backgroundImage: /* @__PURE__ */ xl("#d11") },
  ".cm-lintRange-warning": { backgroundImage: /* @__PURE__ */ xl("orange") },
  ".cm-lintRange-info": { backgroundImage: /* @__PURE__ */ xl("#999") },
  ".cm-lintRange-hint": { backgroundImage: /* @__PURE__ */ xl("#66d") },
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
}), Ege = [
  Ct,
  /* @__PURE__ */ I.decorations.compute([Ct], (t) => {
    let { selected: e, panel: n } = t.field(Ct);
    return !e || !n || e.from == e.to ? V.none : V.set([
      bge.range(e.from, e.to)
    ]);
  }),
  /* @__PURE__ */ Due(wge, { hideOn: mge }),
  Age
], iy = /* @__PURE__ */ (() => [
  Fue(),
  $ue(),
  oue(),
  sde(),
  Mfe(),
  Khe(),
  eue(),
  X.allowMultipleSelections.of(!0),
  mfe(),
  Lfe(Nfe, { fallback: !0 }),
  zfe(),
  nge(),
  dge(),
  bue(),
  xue(),
  fue(),
  ape(),
  co.of([
    ...oge,
    ...rpe,
    ...Dpe,
    ...pde,
    ...Afe,
    ...Mx,
    ..._ge
  ])
])(), jt = () => /* @__PURE__ */ new Map(), xf = (t) => {
  const e = jt();
  return t.forEach((n, r) => {
    e.set(r, n);
  }), e;
}, Vn = (t, e, n) => {
  let r = t.get(e);
  return r === void 0 && t.set(e, r = n()), r;
}, Dge = (t, e) => {
  const n = [];
  for (const [r, i] of t)
    n.push(e(i, r));
  return n;
}, Tge = (t, e) => {
  for (const [n, r] of t)
    if (e(r, n))
      return !0;
  return !1;
}, ei = () => /* @__PURE__ */ new Set(), Vh = (t) => t[t.length - 1], Mge = (t, e) => {
  for (let n = 0; n < e.length; n++)
    t.push(e[n]);
}, wr = Array.from, Oge = (t, e) => {
  for (let n = 0; n < t.length; n++)
    if (e(t[n], n, t))
      return !0;
  return !1;
}, kf = Array.isArray;
class _a {
  constructor() {
    this._observers = jt();
  }
  on(e, n) {
    Vn(this._observers, e, ei).add(n);
  }
  once(e, n) {
    const r = (...i) => {
      this.off(e, r), n(...i);
    };
    this.on(e, r);
  }
  off(e, n) {
    const r = this._observers.get(e);
    r !== void 0 && (r.delete(n), r.size === 0 && this._observers.delete(e));
  }
  emit(e, n) {
    return wr((this._observers.get(e) || jt()).values()).forEach((r) => r(...n));
  }
  destroy() {
    this._observers = jt();
  }
}
const Hn = Math.floor, Wl = Math.abs, Sa = (t, e) => t < e ? t : e, Sr = (t, e) => t > e ? t : e, Lge = Math.pow, Px = (t) => t !== 0 ? t < 0 : 1 / t < 0, Rge = String.fromCharCode, Ige = (t) => t.toLowerCase(), Nge = /^\s*/g, Pge = (t) => t.replace(Nge, ""), Fge = /([A-Z])/g, sy = (t, e) => Pge(t.replace(Fge, (n) => `${e}${Ige(n)}`)), Bge = (t) => {
  const e = unescape(encodeURIComponent(t)), n = e.length, r = new Uint8Array(n);
  for (let i = 0; i < n; i++)
    r[i] = e.codePointAt(i);
  return r;
}, yo = typeof TextEncoder < "u" ? new TextEncoder() : null, qge = (t) => yo.encode(t), $ge = yo ? qge : Bge;
let Us = typeof TextDecoder > "u" ? null : new TextDecoder("utf-8", { fatal: !0, ignoreBOM: !0 });
Us && Us.decode(new Uint8Array()).length === 1 && (Us = null);
const oy = (t) => t === void 0 ? null : t;
class Hge {
  constructor() {
    this.map = /* @__PURE__ */ new Map();
  }
  setItem(e, n) {
    this.map.set(e, n);
  }
  getItem(e) {
    return this.map.get(e);
  }
}
let Fx = new Hge(), Ud = !0;
try {
  typeof localStorage < "u" && (Fx = localStorage, Ud = !1);
} catch {
}
const Bx = Fx, zge = (t) => Ud || addEventListener("storage", t), Vge = (t) => Ud || removeEventListener("storage", t), Uge = Object.assign, Wge = Object.keys, jge = (t, e) => {
  for (const n in t)
    e(t[n], n);
}, Gge = (t, e) => {
  const n = [];
  for (const r in t)
    n.push(e(t[r], r));
  return n;
}, Nc = (t) => Wge(t).length, Yge = (t) => {
  for (const e in t)
    return !1;
  return !0;
}, Kge = (t, e) => {
  for (const n in t)
    if (!e(t[n], n))
      return !1;
  return !0;
}, qx = (t, e) => Object.prototype.hasOwnProperty.call(t, e), Jge = (t, e) => t === e || Nc(t) === Nc(e) && Kge(t, (n, r) => (n !== void 0 || qx(e, r)) && e[r] === n), Wd = (t, e, n = 0) => {
  try {
    for (; n < t.length; n++)
      t[n](...e);
  } finally {
    n < t.length && Wd(t, e, n + 1);
  }
}, Zge = (t) => t, Xge = (t, e) => t === e, Ws = (t, e) => {
  if (t == null || e == null)
    return Xge(t, e);
  if (t.constructor !== e.constructor)
    return !1;
  if (t === e)
    return !0;
  switch (t.constructor) {
    case ArrayBuffer:
      t = new Uint8Array(t), e = new Uint8Array(e);
    case Uint8Array: {
      if (t.byteLength !== e.byteLength)
        return !1;
      for (let n = 0; n < t.length; n++)
        if (t[n] !== e[n])
          return !1;
      break;
    }
    case Set: {
      if (t.size !== e.size)
        return !1;
      for (const n of t)
        if (!e.has(n))
          return !1;
      break;
    }
    case Map: {
      if (t.size !== e.size)
        return !1;
      for (const n of t.keys())
        if (!e.has(n) || !Ws(t.get(n), e.get(n)))
          return !1;
      break;
    }
    case Object:
      if (Nc(t) !== Nc(e))
        return !1;
      for (const n in t)
        if (!qx(t, n) || !Ws(t[n], e[n]))
          return !1;
      break;
    case Array:
      if (t.length !== e.length)
        return !1;
      for (let n = 0; n < t.length; n++)
        if (!Ws(t[n], e[n]))
          return !1;
      break;
    default:
      return !1;
  }
  return !0;
}, Qge = (t, e) => e.includes(t), Qi = typeof process < "u" && process.release && /node|io\.js/.test(process.release.name), $x = typeof window < "u" && typeof document < "u" && !Qi;
typeof navigator < "u" && /Mac/.test(navigator.platform);
let rn;
const eme = () => {
  if (rn === void 0)
    if (Qi) {
      rn = jt();
      const t = process.argv;
      let e = null;
      for (let n = 0; n < t.length; n++) {
        const r = t[n];
        r[0] === "-" ? (e !== null && rn.set(e, ""), e = r) : e !== null && (rn.set(e, r), e = null);
      }
      e !== null && rn.set(e, "");
    } else
      typeof location == "object" ? (rn = jt(), (location.search || "?").slice(1).split("&").forEach((t) => {
        if (t.length !== 0) {
          const [e, n] = t.split("=");
          rn.set(`--${sy(e, "-")}`, n), rn.set(`-${sy(e, "-")}`, n);
        }
      })) : rn = jt();
  return rn;
}, _f = (t) => eme().has(t), Sf = (t) => oy(Qi ? {}[t.toUpperCase()] : Bx.getItem(t)), tme = (t) => _f("--" + t) || Sf(t) !== null;
tme("production");
const ly = Qi && Qge({}.FORCE_COLOR, ["true", "1", "2"]), nme = !_f("no-colors") && (!Qi || process.stdout.isTTY || ly) && (!Qi || _f("color") || ly || Sf("COLORTERM") !== null || (Sf("TERM") || "").includes("color")), cy = 1, ay = 2, Uh = 4, Wh = 8, bo = 32, Pn = 64, At = 128, Ca = 31, Cf = 63, Wr = 127, rme = 2147483647, Hx = Number.MAX_SAFE_INTEGER, ime = Number.isInteger || ((t) => typeof t == "number" && isFinite(t) && Hn(t) === t), vr = (t) => new Error(t), bn = () => {
  throw vr("Method unimplemented");
}, Kt = () => {
  throw vr("Unexpected case");
}, zx = vr("Unexpected end of array"), Vx = vr("Integer out of Range");
class Aa {
  constructor(e) {
    this.arr = e, this.pos = 0;
  }
}
const Cr = (t) => new Aa(t), sme = (t) => t.pos !== t.arr.length, ome = (t, e) => {
  const n = Yd(t.arr.buffer, t.pos + t.arr.byteOffset, e);
  return t.pos += e, n;
}, Je = (t) => ome(t, W(t)), es = (t) => t.arr[t.pos++], W = (t) => {
  let e = 0, n = 1;
  const r = t.arr.length;
  for (; t.pos < r; ) {
    const i = t.arr[t.pos++];
    if (e = e + (i & Wr) * n, n *= 128, i < At)
      return e;
    if (e > Hx)
      throw Vx;
  }
  throw zx;
}, jd = (t) => {
  let e = t.arr[t.pos++], n = e & Cf, r = 64;
  const i = (e & Pn) > 0 ? -1 : 1;
  if ((e & At) === 0)
    return i * n;
  const s = t.arr.length;
  for (; t.pos < s; ) {
    if (e = t.arr[t.pos++], n = n + (e & Wr) * r, r *= 128, e < At)
      return i * n;
    if (n > Hx)
      throw Vx;
  }
  throw zx;
}, lme = (t) => {
  let e = W(t);
  if (e === 0)
    return "";
  {
    let n = String.fromCodePoint(es(t));
    if (--e < 100)
      for (; e--; )
        n += String.fromCodePoint(es(t));
    else
      for (; e > 0; ) {
        const r = e < 1e4 ? e : 1e4, i = t.arr.subarray(t.pos, t.pos + r);
        t.pos += r, n += String.fromCodePoint.apply(null, i), e -= r;
      }
    return decodeURIComponent(escape(n));
  }
}, cme = (t) => Us.decode(Je(t)), ar = Us ? cme : lme, Gd = (t, e) => {
  const n = new DataView(t.arr.buffer, t.arr.byteOffset + t.pos, e);
  return t.pos += e, n;
}, ame = (t) => Gd(t, 4).getFloat32(0, !1), hme = (t) => Gd(t, 8).getFloat64(0, !1), ume = (t) => Gd(t, 8).getBigInt64(0, !1), fme = [
  (t) => {
  },
  (t) => null,
  jd,
  ame,
  hme,
  ume,
  (t) => !1,
  (t) => !0,
  ar,
  (t) => {
    const e = W(t), n = {};
    for (let r = 0; r < e; r++) {
      const i = ar(t);
      n[i] = wo(t);
    }
    return n;
  },
  (t) => {
    const e = W(t), n = [];
    for (let r = 0; r < e; r++)
      n.push(wo(t));
    return n;
  },
  Je
], wo = (t) => fme[127 - es(t)](t);
class hy extends Aa {
  constructor(e, n) {
    super(e), this.reader = n, this.s = null, this.count = 0;
  }
  read() {
    return this.count === 0 && (this.s = this.reader(this), sme(this) ? this.count = W(this) + 1 : this.count = -1), this.count--, this.s;
  }
}
class jl extends Aa {
  constructor(e) {
    super(e), this.s = 0, this.count = 0;
  }
  read() {
    if (this.count === 0) {
      this.s = jd(this);
      const e = Px(this.s);
      this.count = 1, e && (this.s = -this.s, this.count = W(this) + 2);
    }
    return this.count--, this.s;
  }
}
class jh extends Aa {
  constructor(e) {
    super(e), this.s = 0, this.count = 0, this.diff = 0;
  }
  read() {
    if (this.count === 0) {
      const e = jd(this), n = e & 1;
      this.diff = Hn(e / 2), this.count = 1, n && (this.count = W(this) + 2);
    }
    return this.s += this.diff, this.count--, this.s;
  }
}
class dme {
  constructor(e) {
    this.decoder = new jl(e), this.str = ar(this.decoder), this.spos = 0;
  }
  read() {
    const e = this.spos + this.decoder.read(), n = this.str.slice(this.spos, e);
    return this.spos = e, n;
  }
}
const Ux = (t) => new Uint8Array(t), Yd = (t, e, n) => new Uint8Array(t, e, n), pme = (t) => new Uint8Array(t), gme = (t) => {
  let e = "";
  for (let n = 0; n < t.byteLength; n++)
    e += Rge(t[n]);
  return btoa(e);
}, mme = (t) => Buffer.from(t.buffer, t.byteOffset, t.byteLength).toString("base64"), yme = (t) => {
  const e = atob(t), n = Ux(e.length);
  for (let r = 0; r < e.length; r++)
    n[r] = e.charCodeAt(r);
  return n;
}, bme = (t) => {
  const e = Buffer.from(t, "base64");
  return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
}, wme = $x ? gme : mme, vme = $x ? yme : bme, xme = (t) => {
  const e = Ux(t.byteLength);
  return e.set(t), e;
};
class No {
  constructor() {
    this.cpos = 0, this.cbuf = new Uint8Array(100), this.bufs = [];
  }
}
const Ze = () => new No(), Kd = (t) => {
  let e = t.cpos;
  for (let n = 0; n < t.bufs.length; n++)
    e += t.bufs[n].length;
  return e;
}, ke = (t) => {
  const e = new Uint8Array(Kd(t));
  let n = 0;
  for (let r = 0; r < t.bufs.length; r++) {
    const i = t.bufs[r];
    e.set(i, n), n += i.length;
  }
  return e.set(Yd(t.cbuf.buffer, 0, t.cpos), n), e;
}, kme = (t, e) => {
  const n = t.cbuf.length;
  n - t.cpos < e && (t.bufs.push(Yd(t.cbuf.buffer, 0, t.cpos)), t.cbuf = new Uint8Array(Sr(n, e) * 2), t.cpos = 0);
}, qe = (t, e) => {
  const n = t.cbuf.length;
  t.cpos === n && (t.bufs.push(t.cbuf), t.cbuf = new Uint8Array(n * 2), t.cpos = 0), t.cbuf[t.cpos++] = e;
}, Af = qe, H = (t, e) => {
  for (; e > Wr; )
    qe(t, At | Wr & e), e = Hn(e / 128);
  qe(t, Wr & e);
}, Jd = (t, e) => {
  const n = Px(e);
  for (n && (e = -e), qe(t, (e > Cf ? At : 0) | (n ? Pn : 0) | Cf & e), e = Hn(e / 64); e > 0; )
    qe(t, (e > Wr ? At : 0) | Wr & e), e = Hn(e / 128);
}, Ef = new Uint8Array(3e4), _me = Ef.length / 3, Sme = (t, e) => {
  if (e.length < _me) {
    const n = yo.encodeInto(e, Ef).written || 0;
    H(t, n);
    for (let r = 0; r < n; r++)
      qe(t, Ef[r]);
  } else
    Ee(t, $ge(e));
}, Cme = (t, e) => {
  const n = unescape(encodeURIComponent(e)), r = n.length;
  H(t, r);
  for (let i = 0; i < r; i++)
    qe(t, n.codePointAt(i));
}, jr = yo && yo.encodeInto ? Sme : Cme, Ea = (t, e) => {
  const n = t.cbuf.length, r = t.cpos, i = Sa(n - r, e.length), s = e.length - i;
  t.cbuf.set(e.subarray(0, i), r), t.cpos += i, s > 0 && (t.bufs.push(t.cbuf), t.cbuf = new Uint8Array(Sr(n * 2, s)), t.cbuf.set(e.subarray(i)), t.cpos = s);
}, Ee = (t, e) => {
  H(t, e.byteLength), Ea(t, e);
}, Zd = (t, e) => {
  kme(t, e);
  const n = new DataView(t.cbuf.buffer, t.cpos, e);
  return t.cpos += e, n;
}, Ame = (t, e) => Zd(t, 4).setFloat32(0, e, !1), Eme = (t, e) => Zd(t, 8).setFloat64(0, e, !1), Dme = (t, e) => Zd(t, 8).setBigInt64(0, e, !1), uy = new DataView(new ArrayBuffer(4)), Tme = (t) => (uy.setFloat32(0, t), uy.getFloat32(0) === t), vo = (t, e) => {
  switch (typeof e) {
    case "string":
      qe(t, 119), jr(t, e);
      break;
    case "number":
      ime(e) && Wl(e) <= rme ? (qe(t, 125), Jd(t, e)) : Tme(e) ? (qe(t, 124), Ame(t, e)) : (qe(t, 123), Eme(t, e));
      break;
    case "bigint":
      qe(t, 122), Dme(t, e);
      break;
    case "object":
      if (e === null)
        qe(t, 126);
      else if (kf(e)) {
        qe(t, 117), H(t, e.length);
        for (let n = 0; n < e.length; n++)
          vo(t, e[n]);
      } else if (e instanceof Uint8Array)
        qe(t, 116), Ee(t, e);
      else {
        qe(t, 118);
        const n = Object.keys(e);
        H(t, n.length);
        for (let r = 0; r < n.length; r++) {
          const i = n[r];
          jr(t, i), vo(t, e[i]);
        }
      }
      break;
    case "boolean":
      qe(t, e ? 120 : 121);
      break;
    default:
      qe(t, 127);
  }
};
class fy extends No {
  constructor(e) {
    super(), this.w = e, this.s = null, this.count = 0;
  }
  write(e) {
    this.s === e ? this.count++ : (this.count > 0 && H(this, this.count - 1), this.count = 1, this.w(this, e), this.s = e);
  }
}
const dy = (t) => {
  t.count > 0 && (Jd(t.encoder, t.count === 1 ? t.s : -t.s), t.count > 1 && H(t.encoder, t.count - 2));
};
class Gl {
  constructor() {
    this.encoder = new No(), this.s = 0, this.count = 0;
  }
  write(e) {
    this.s === e ? this.count++ : (dy(this), this.count = 1, this.s = e);
  }
  toUint8Array() {
    return dy(this), ke(this.encoder);
  }
}
const py = (t) => {
  if (t.count > 0) {
    const e = t.diff * 2 + (t.count === 1 ? 0 : 1);
    Jd(t.encoder, e), t.count > 1 && H(t.encoder, t.count - 2);
  }
};
class Gh {
  constructor() {
    this.encoder = new No(), this.s = 0, this.count = 0, this.diff = 0;
  }
  write(e) {
    this.diff === e - this.s ? (this.s = e, this.count++) : (py(this), this.count = 1, this.diff = e - this.s, this.s = e);
  }
  toUint8Array() {
    return py(this), ke(this.encoder);
  }
}
class Mme {
  constructor() {
    this.sarr = [], this.s = "", this.lensE = new Gl();
  }
  write(e) {
    this.s += e, this.s.length > 19 && (this.sarr.push(this.s), this.s = ""), this.lensE.write(e.length);
  }
  toUint8Array() {
    const e = new No();
    return this.sarr.push(this.s), this.s = "", jr(e, this.sarr.join("")), Ea(e, this.lensE.toUint8Array()), ke(e);
  }
}
const Ome = crypto.getRandomValues.bind(crypto), Wx = () => Ome(new Uint32Array(1))[0], Lme = [1e7] + -1e3 + -4e3 + -8e3 + -1e11, Rme = () => Lme.replace(
  /[018]/g,
  (t) => (t ^ Wx() & 15 >> t / 4).toString(16)
), xr = Date.now, gy = (t) => new Promise(t);
Promise.all.bind(Promise);
class Ime {
  constructor(e, n) {
    this.left = e, this.right = n;
  }
}
const vt = (t, e) => new Ime(t, e), Nme = (t, e) => t.forEach((n) => e(n.left, n.right)), An = typeof document < "u" ? document : {}, Pme = (t) => An.createElement(t), Fme = () => An.createDocumentFragment(), Bme = (t) => An.createTextNode(t);
typeof DOMParser < "u" && new DOMParser();
const qme = (t, e) => (Nme(e, (n, r) => {
  r === !1 ? t.removeAttribute(n) : r === !0 ? t.setAttribute(n, "") : t.setAttribute(n, r);
}), t), $me = (t) => {
  const e = Fme();
  for (let n = 0; n < t.length; n++)
    jx(e, t[n]);
  return e;
}, Hme = (t, e) => (jx(t, $me(e)), t), Yh = (t, e = [], n = []) => Hme(qme(Pme(t), e), n), kl = Bme, zme = (t) => Dge(t, (e, n) => `${n}:${e};`).join(""), jx = (t, e) => t.appendChild(e);
An.ELEMENT_NODE;
An.TEXT_NODE;
An.CDATA_SECTION_NODE;
An.COMMENT_NODE;
An.DOCUMENT_NODE;
An.DOCUMENT_TYPE_NODE;
An.DOCUMENT_FRAGMENT_NODE;
const Un = Symbol, Gx = Un(), Yx = Un(), Vme = Un(), Ume = Un(), Wme = Un(), Kx = Un(), jme = Un(), Jx = Un(), Gme = Un(), Yme = (t) => {
  const e = [];
  let n = 0;
  for (; n < t.length; n++) {
    const r = t[n];
    r.constructor === String || r.constructor === Number || r.constructor === Object && e.push(JSON.stringify(r));
  }
  return e;
}, Kme = {
  [Gx]: vt("font-weight", "bold"),
  [Yx]: vt("font-weight", "normal"),
  [Vme]: vt("color", "blue"),
  [Wme]: vt("color", "green"),
  [Ume]: vt("color", "grey"),
  [Kx]: vt("color", "red"),
  [jme]: vt("color", "purple"),
  [Jx]: vt("color", "orange"),
  [Gme]: vt("color", "black")
}, Jme = (t) => {
  const e = [], n = [], r = jt();
  let i = [], s = 0;
  for (; s < t.length; s++) {
    const o = t[s], l = Kme[o];
    if (l !== void 0)
      r.set(l.left, l.right);
    else if (o.constructor === String || o.constructor === Number) {
      const c = zme(r);
      s > 0 || c.length > 0 ? (e.push("%c" + o), n.push(c)) : e.push(o);
    } else
      break;
  }
  for (s > 0 && (i = n, i.unshift(e.join(""))); s < t.length; s++) {
    const o = t[s];
    o instanceof Symbol || i.push(o);
  }
  return i;
}, Zme = nme ? Jme : Yme, Xme = (...t) => {
  console.log(...Zme(t)), Qme.forEach((e) => e.print(t));
}, Qme = ei(), Zx = (t) => ({
  [Symbol.iterator]() {
    return this;
  },
  next: t
}), e0e = (t, e) => Zx(() => {
  let n;
  do
    n = t.next();
  while (!n.done && !e(n.value));
  return n;
}), Kh = (t, e) => Zx(() => {
  const { done: n, value: r } = t.next();
  return { done: n, value: n ? void 0 : e(r) };
});
class Xd {
  constructor(e, n) {
    this.clock = e, this.len = n;
  }
}
class ms {
  constructor() {
    this.clients = /* @__PURE__ */ new Map();
  }
}
const ts = (t, e, n) => e.clients.forEach((r, i) => {
  const s = t.doc.store.clients.get(i);
  for (let o = 0; o < r.length; o++) {
    const l = r[o];
    fk(t, s, l.clock, l.len, n);
  }
}), t0e = (t, e) => {
  let n = 0, r = t.length - 1;
  for (; n <= r; ) {
    const i = Hn((n + r) / 2), s = t[i], o = s.clock;
    if (o <= e) {
      if (e < o + s.len)
        return i;
      n = i + 1;
    } else
      r = i - 1;
  }
  return null;
}, Po = (t, e) => {
  const n = t.clients.get(e.client);
  return n !== void 0 && t0e(n, e.clock) !== null;
}, Qd = (t) => {
  t.clients.forEach((e) => {
    e.sort((i, s) => i.clock - s.clock);
    let n, r;
    for (n = 1, r = 1; n < e.length; n++) {
      const i = e[r - 1], s = e[n];
      i.clock + i.len >= s.clock ? i.len = Sr(i.len, s.clock + s.len - i.clock) : (r < n && (e[r] = s), r++);
    }
    e.length = r;
  });
}, Df = (t) => {
  const e = new ms();
  for (let n = 0; n < t.length; n++)
    t[n].clients.forEach((r, i) => {
      if (!e.clients.has(i)) {
        const s = r.slice();
        for (let o = n + 1; o < t.length; o++)
          Mge(s, t[o].clients.get(i) || []);
        e.clients.set(i, s);
      }
    });
  return Qd(e), e;
}, xo = (t, e, n, r) => {
  Vn(t.clients, e, () => []).push(new Xd(n, r));
}, Xx = () => new ms(), n0e = (t) => {
  const e = Xx();
  return t.clients.forEach((n, r) => {
    const i = [];
    for (let s = 0; s < n.length; s++) {
      const o = n[s];
      if (o.deleted) {
        const l = o.id.clock;
        let c = o.length;
        if (s + 1 < n.length)
          for (let a = n[s + 1]; s + 1 < n.length && a.deleted; a = n[++s + 1])
            c += a.length;
        i.push(new Xd(l, c));
      }
    }
    i.length > 0 && e.clients.set(r, i);
  }), e;
}, ys = (t, e) => {
  H(t.restEncoder, e.clients.size), wr(e.clients.entries()).sort((n, r) => r[0] - n[0]).forEach(([n, r]) => {
    t.resetDsCurVal(), H(t.restEncoder, n);
    const i = r.length;
    H(t.restEncoder, i);
    for (let s = 0; s < i; s++) {
      const o = r[s];
      t.writeDsClock(o.clock), t.writeDsLen(o.len);
    }
  });
}, ep = (t) => {
  const e = new ms(), n = W(t.restDecoder);
  for (let r = 0; r < n; r++) {
    t.resetDsCurVal();
    const i = W(t.restDecoder), s = W(t.restDecoder);
    if (s > 0) {
      const o = Vn(e.clients, i, () => []);
      for (let l = 0; l < s; l++)
        o.push(new Xd(t.readDsClock(), t.readDsLen()));
    }
  }
  return e;
}, my = (t, e, n) => {
  const r = new ms(), i = W(t.restDecoder);
  for (let s = 0; s < i; s++) {
    t.resetDsCurVal();
    const o = W(t.restDecoder), l = W(t.restDecoder), c = n.clients.get(o) || [], a = Te(n, o);
    for (let h = 0; h < l; h++) {
      const u = t.readDsClock(), f = u + t.readDsLen();
      if (u < a) {
        a < f && xo(r, o, a, f - a);
        let d = vn(c, u), p = c[d];
        for (!p.deleted && p.id.clock < u && (c.splice(d + 1, 0, Vc(e, p, u - p.id.clock)), d++); d < c.length && (p = c[d++], p.id.clock < f); )
          p.deleted || (f < p.id.clock + p.length && c.splice(d, 0, Vc(e, p, f - p.id.clock)), p.delete(e));
      } else
        xo(r, o, u, f - u);
    }
  }
  if (r.clients.size > 0) {
    const s = new ti();
    return H(s.restEncoder, 0), ys(s, r), s.toUint8Array();
  }
  return null;
}, Qx = Wx;
class bs extends _a {
  constructor({ guid: e = Rme(), collectionid: n = null, gc: r = !0, gcFilter: i = () => !0, meta: s = null, autoLoad: o = !1, shouldLoad: l = !0 } = {}) {
    super(), this.gc = r, this.gcFilter = i, this.clientID = Qx(), this.guid = e, this.collectionid = n, this.share = /* @__PURE__ */ new Map(), this.store = new hk(), this._transaction = null, this._transactionCleanups = [], this.subdocs = /* @__PURE__ */ new Set(), this._item = null, this.shouldLoad = l, this.autoLoad = o, this.meta = s, this.isLoaded = !1, this.isSynced = !1, this.whenLoaded = gy((a) => {
      this.on("load", () => {
        this.isLoaded = !0, a(this);
      });
    });
    const c = () => gy((a) => {
      const h = (u) => {
        (u === void 0 || u === !0) && (this.off("sync", h), a());
      };
      this.on("sync", h);
    });
    this.on("sync", (a) => {
      a === !1 && this.isSynced && (this.whenSynced = c()), this.isSynced = a === void 0 || a === !0, this.isLoaded || this.emit("load", []);
    }), this.whenSynced = c();
  }
  load() {
    const e = this._item;
    e !== null && !this.shouldLoad && he(e.parent.doc, (n) => {
      n.subdocsLoaded.add(this);
    }, null, !0), this.shouldLoad = !0;
  }
  getSubdocs() {
    return this.subdocs;
  }
  getSubdocGuids() {
    return new Set(wr(this.subdocs).map((e) => e.guid));
  }
  transact(e, n = null) {
    return he(this, e, n);
  }
  get(e, n = Ge) {
    const r = Vn(this.share, e, () => {
      const s = new n();
      return s._integrate(this, null), s;
    }), i = r.constructor;
    if (n !== Ge && i !== n)
      if (i === Ge) {
        const s = new n();
        s._map = r._map, r._map.forEach((o) => {
          for (; o !== null; o = o.left)
            o.parent = s;
        }), s._start = r._start;
        for (let o = s._start; o !== null; o = o.right)
          o.parent = s;
        return s._length = r._length, this.share.set(e, s), s._integrate(this, null), s;
      } else
        throw new Error(`Type with the name ${e} has already been defined with a different constructor`);
    return r;
  }
  getArray(e = "") {
    return this.get(e, Fi);
  }
  getText(e = "") {
    return this.get(e, is);
  }
  getMap(e = "") {
    return this.get(e, rs);
  }
  getXmlFragment(e = "") {
    return this.get(e, ni);
  }
  toJSON() {
    const e = {};
    return this.share.forEach((n, r) => {
      e[r] = n.toJSON();
    }), e;
  }
  destroy() {
    wr(this.subdocs).forEach((n) => n.destroy());
    const e = this._item;
    if (e !== null) {
      this._item = null;
      const n = e.content;
      n.doc = new bs({ guid: this.guid, ...n.opts, shouldLoad: !1 }), n.doc._item = e, he(e.parent.doc, (r) => {
        const i = n.doc;
        e.deleted || r.subdocsAdded.add(i), r.subdocsRemoved.add(this);
      }, null, !0);
    }
    this.emit("destroyed", [!0]), this.emit("destroy", [this]), super.destroy();
  }
  on(e, n) {
    super.on(e, n);
  }
  off(e, n) {
    super.off(e, n);
  }
}
class ek {
  constructor(e) {
    this.restDecoder = e;
  }
  resetDsCurVal() {
  }
  readDsClock() {
    return W(this.restDecoder);
  }
  readDsLen() {
    return W(this.restDecoder);
  }
}
class tk extends ek {
  readLeftID() {
    return j(W(this.restDecoder), W(this.restDecoder));
  }
  readRightID() {
    return j(W(this.restDecoder), W(this.restDecoder));
  }
  readClient() {
    return W(this.restDecoder);
  }
  readInfo() {
    return es(this.restDecoder);
  }
  readString() {
    return ar(this.restDecoder);
  }
  readParentInfo() {
    return W(this.restDecoder) === 1;
  }
  readTypeRef() {
    return W(this.restDecoder);
  }
  readLen() {
    return W(this.restDecoder);
  }
  readAny() {
    return wo(this.restDecoder);
  }
  readBuf() {
    return xme(Je(this.restDecoder));
  }
  readJSON() {
    return JSON.parse(ar(this.restDecoder));
  }
  readKey() {
    return ar(this.restDecoder);
  }
}
class r0e {
  constructor(e) {
    this.dsCurrVal = 0, this.restDecoder = e;
  }
  resetDsCurVal() {
    this.dsCurrVal = 0;
  }
  readDsClock() {
    return this.dsCurrVal += W(this.restDecoder), this.dsCurrVal;
  }
  readDsLen() {
    const e = W(this.restDecoder) + 1;
    return this.dsCurrVal += e, e;
  }
}
class ns extends r0e {
  constructor(e) {
    super(e), this.keys = [], W(e), this.keyClockDecoder = new jh(Je(e)), this.clientDecoder = new jl(Je(e)), this.leftClockDecoder = new jh(Je(e)), this.rightClockDecoder = new jh(Je(e)), this.infoDecoder = new hy(Je(e), es), this.stringDecoder = new dme(Je(e)), this.parentInfoDecoder = new hy(Je(e), es), this.typeRefDecoder = new jl(Je(e)), this.lenDecoder = new jl(Je(e));
  }
  readLeftID() {
    return new Pi(this.clientDecoder.read(), this.leftClockDecoder.read());
  }
  readRightID() {
    return new Pi(this.clientDecoder.read(), this.rightClockDecoder.read());
  }
  readClient() {
    return this.clientDecoder.read();
  }
  readInfo() {
    return this.infoDecoder.read();
  }
  readString() {
    return this.stringDecoder.read();
  }
  readParentInfo() {
    return this.parentInfoDecoder.read() === 1;
  }
  readTypeRef() {
    return this.typeRefDecoder.read();
  }
  readLen() {
    return this.lenDecoder.read();
  }
  readAny() {
    return wo(this.restDecoder);
  }
  readBuf() {
    return Je(this.restDecoder);
  }
  readJSON() {
    return wo(this.restDecoder);
  }
  readKey() {
    const e = this.keyClockDecoder.read();
    if (e < this.keys.length)
      return this.keys[e];
    {
      const n = this.stringDecoder.read();
      return this.keys.push(n), n;
    }
  }
}
class nk {
  constructor() {
    this.restEncoder = Ze();
  }
  toUint8Array() {
    return ke(this.restEncoder);
  }
  resetDsCurVal() {
  }
  writeDsClock(e) {
    H(this.restEncoder, e);
  }
  writeDsLen(e) {
    H(this.restEncoder, e);
  }
}
class Fo extends nk {
  writeLeftID(e) {
    H(this.restEncoder, e.client), H(this.restEncoder, e.clock);
  }
  writeRightID(e) {
    H(this.restEncoder, e.client), H(this.restEncoder, e.clock);
  }
  writeClient(e) {
    H(this.restEncoder, e);
  }
  writeInfo(e) {
    Af(this.restEncoder, e);
  }
  writeString(e) {
    jr(this.restEncoder, e);
  }
  writeParentInfo(e) {
    H(this.restEncoder, e ? 1 : 0);
  }
  writeTypeRef(e) {
    H(this.restEncoder, e);
  }
  writeLen(e) {
    H(this.restEncoder, e);
  }
  writeAny(e) {
    vo(this.restEncoder, e);
  }
  writeBuf(e) {
    Ee(this.restEncoder, e);
  }
  writeJSON(e) {
    jr(this.restEncoder, JSON.stringify(e));
  }
  writeKey(e) {
    jr(this.restEncoder, e);
  }
}
class rk {
  constructor() {
    this.restEncoder = Ze(), this.dsCurrVal = 0;
  }
  toUint8Array() {
    return ke(this.restEncoder);
  }
  resetDsCurVal() {
    this.dsCurrVal = 0;
  }
  writeDsClock(e) {
    const n = e - this.dsCurrVal;
    this.dsCurrVal = e, H(this.restEncoder, n);
  }
  writeDsLen(e) {
    e === 0 && Kt(), H(this.restEncoder, e - 1), this.dsCurrVal += e;
  }
}
class ti extends rk {
  constructor() {
    super(), this.keyMap = /* @__PURE__ */ new Map(), this.keyClock = 0, this.keyClockEncoder = new Gh(), this.clientEncoder = new Gl(), this.leftClockEncoder = new Gh(), this.rightClockEncoder = new Gh(), this.infoEncoder = new fy(Af), this.stringEncoder = new Mme(), this.parentInfoEncoder = new fy(Af), this.typeRefEncoder = new Gl(), this.lenEncoder = new Gl();
  }
  toUint8Array() {
    const e = Ze();
    return H(e, 0), Ee(e, this.keyClockEncoder.toUint8Array()), Ee(e, this.clientEncoder.toUint8Array()), Ee(e, this.leftClockEncoder.toUint8Array()), Ee(e, this.rightClockEncoder.toUint8Array()), Ee(e, ke(this.infoEncoder)), Ee(e, this.stringEncoder.toUint8Array()), Ee(e, ke(this.parentInfoEncoder)), Ee(e, this.typeRefEncoder.toUint8Array()), Ee(e, this.lenEncoder.toUint8Array()), Ea(e, ke(this.restEncoder)), ke(e);
  }
  writeLeftID(e) {
    this.clientEncoder.write(e.client), this.leftClockEncoder.write(e.clock);
  }
  writeRightID(e) {
    this.clientEncoder.write(e.client), this.rightClockEncoder.write(e.clock);
  }
  writeClient(e) {
    this.clientEncoder.write(e);
  }
  writeInfo(e) {
    this.infoEncoder.write(e);
  }
  writeString(e) {
    this.stringEncoder.write(e);
  }
  writeParentInfo(e) {
    this.parentInfoEncoder.write(e ? 1 : 0);
  }
  writeTypeRef(e) {
    this.typeRefEncoder.write(e);
  }
  writeLen(e) {
    this.lenEncoder.write(e);
  }
  writeAny(e) {
    vo(this.restEncoder, e);
  }
  writeBuf(e) {
    Ee(this.restEncoder, e);
  }
  writeJSON(e) {
    vo(this.restEncoder, e);
  }
  writeKey(e) {
    const n = this.keyMap.get(e);
    n === void 0 ? (this.keyClockEncoder.write(this.keyClock++), this.stringEncoder.write(e)) : this.keyClockEncoder.write(n);
  }
}
const i0e = (t, e, n, r) => {
  r = Sr(r, e[0].id.clock);
  const i = vn(e, r);
  H(t.restEncoder, e.length - i), t.writeClient(n), H(t.restEncoder, r);
  const s = e[i];
  s.write(t, r - s.id.clock);
  for (let o = i + 1; o < e.length; o++)
    e[o].write(t, 0);
}, tp = (t, e, n) => {
  const r = /* @__PURE__ */ new Map();
  n.forEach((i, s) => {
    Te(e, s) > i && r.set(s, i);
  }), Da(e).forEach((i, s) => {
    n.has(s) || r.set(s, 0);
  }), H(t.restEncoder, r.size), wr(r.entries()).sort((i, s) => s[0] - i[0]).forEach(([i, s]) => {
    i0e(t, e.clients.get(i), i, s);
  });
}, s0e = (t, e) => {
  const n = jt(), r = W(t.restDecoder);
  for (let i = 0; i < r; i++) {
    const s = W(t.restDecoder), o = new Array(s), l = t.readClient();
    let c = W(t.restDecoder);
    n.set(l, { i: 0, refs: o });
    for (let a = 0; a < s; a++) {
      const h = t.readInfo();
      switch (Ca & h) {
        case 0: {
          const u = t.readLen();
          o[a] = new Tt(j(l, c), u), c += u;
          break;
        }
        case 10: {
          const u = W(t.restDecoder);
          o[a] = new Mt(j(l, c), u), c += u;
          break;
        }
        default: {
          const u = (h & (Pn | At)) === 0, f = new ue(
            j(l, c),
            null,
            (h & At) === At ? t.readLeftID() : null,
            null,
            (h & Pn) === Pn ? t.readRightID() : null,
            u ? t.readParentInfo() ? e.get(t.readString()) : t.readLeftID() : null,
            u && (h & bo) === bo ? t.readString() : null,
            Lk(t, h)
          );
          o[a] = f, c += f.length;
        }
      }
    }
  }
  return n;
}, o0e = (t, e, n) => {
  const r = [];
  let i = wr(n.keys()).sort((d, p) => d - p);
  if (i.length === 0)
    return null;
  const s = () => {
    if (i.length === 0)
      return null;
    let d = n.get(i[i.length - 1]);
    for (; d.refs.length === d.i; )
      if (i.pop(), i.length > 0)
        d = n.get(i[i.length - 1]);
      else
        return null;
    return d;
  };
  let o = s();
  if (o === null && r.length === 0)
    return null;
  const l = new hk(), c = /* @__PURE__ */ new Map(), a = (d, p) => {
    const g = c.get(d);
    (g == null || g > p) && c.set(d, p);
  };
  let h = o.refs[o.i++];
  const u = /* @__PURE__ */ new Map(), f = () => {
    for (const d of r) {
      const p = d.id.client, g = n.get(p);
      g ? (g.i--, l.clients.set(p, g.refs.slice(g.i)), n.delete(p), g.i = 0, g.refs = []) : l.clients.set(p, [d]), i = i.filter((m) => m !== p);
    }
    r.length = 0;
  };
  for (; ; ) {
    if (h.constructor !== Mt) {
      const p = Vn(u, h.id.client, () => Te(e, h.id.client)) - h.id.clock;
      if (p < 0)
        r.push(h), a(h.id.client, h.id.clock - 1), f();
      else {
        const g = h.getMissing(t, e);
        if (g !== null) {
          r.push(h);
          const m = n.get(g) || { refs: [], i: 0 };
          if (m.refs.length === m.i)
            a(g, Te(e, g)), f();
          else {
            h = m.refs[m.i++];
            continue;
          }
        } else
          (p === 0 || p < h.length) && (h.integrate(t, p), u.set(h.id.client, h.id.clock + h.length));
      }
    }
    if (r.length > 0)
      h = r.pop();
    else if (o !== null && o.i < o.refs.length)
      h = o.refs[o.i++];
    else {
      if (o = s(), o === null)
        break;
      h = o.refs[o.i++];
    }
  }
  if (l.clients.size > 0) {
    const d = new ti();
    return tp(d, l, /* @__PURE__ */ new Map()), H(d.restEncoder, 0), { missing: c, update: d.toUint8Array() };
  }
  return null;
}, l0e = (t, e) => tp(t, e.doc.store, e.beforeState), c0e = (t, e, n, r = new ns(t)) => he(e, (i) => {
  i.local = !1;
  let s = !1;
  const o = i.doc, l = o.store, c = s0e(r, o), a = o0e(i, l, c), h = l.pendingStructs;
  if (h) {
    for (const [f, d] of h.missing)
      if (d < Te(l, f)) {
        s = !0;
        break;
      }
    if (a) {
      for (const [f, d] of a.missing) {
        const p = h.missing.get(f);
        (p == null || p > d) && h.missing.set(f, d);
      }
      h.update = Fc([h.update, a.update]);
    }
  } else
    l.pendingStructs = a;
  const u = my(r, i, l);
  if (l.pendingDs) {
    const f = new ns(Cr(l.pendingDs));
    W(f.restDecoder);
    const d = my(f, i, l);
    u && d ? l.pendingDs = Fc([u, d]) : l.pendingDs = u || d;
  } else
    l.pendingDs = u;
  if (s) {
    const f = l.pendingStructs.update;
    l.pendingStructs = null, ik(i.doc, f);
  }
}, n, !1), ik = (t, e, n, r = ns) => {
  const i = Cr(e);
  c0e(i, t, n, new r(i));
}, a0e = (t, e, n) => ik(t, e, n, tk), h0e = (t, e, n = /* @__PURE__ */ new Map()) => {
  tp(t, e.store, n), ys(t, n0e(e.store));
}, u0e = (t, e = new Uint8Array([0]), n = new ti()) => {
  const r = sk(e);
  h0e(n, t, r);
  const i = [n.toUint8Array()];
  if (t.store.pendingDs && i.push(t.store.pendingDs), t.store.pendingStructs && i.push(O0e(t.store.pendingStructs.update, e)), i.length > 1) {
    if (n.constructor === Fo)
      return T0e(i.map((s, o) => o === 0 ? s : R0e(s)));
    if (n.constructor === ti)
      return Fc(i);
  }
  return i[0];
}, f0e = (t, e) => u0e(t, e, new Fo()), d0e = (t) => {
  const e = /* @__PURE__ */ new Map(), n = W(t.restDecoder);
  for (let r = 0; r < n; r++) {
    const i = W(t.restDecoder), s = W(t.restDecoder);
    e.set(i, s);
  }
  return e;
}, sk = (t) => d0e(new ek(Cr(t))), ok = (t, e) => (H(t.restEncoder, e.size), wr(e.entries()).sort((n, r) => r[0] - n[0]).forEach(([n, r]) => {
  H(t.restEncoder, n), H(t.restEncoder, r);
}), t), p0e = (t, e) => ok(t, Da(e.store)), g0e = (t, e = new rk()) => (t instanceof Map ? ok(e, t) : p0e(e, t), e.toUint8Array()), m0e = (t) => g0e(t, new nk());
class y0e {
  constructor() {
    this.l = [];
  }
}
const yy = () => new y0e(), by = (t, e) => t.l.push(e), wy = (t, e) => {
  const n = t.l, r = n.length;
  t.l = n.filter((i) => e !== i), r === t.l.length && console.error("[yjs] Tried to remove event handler that doesn't exist.");
}, lk = (t, e, n) => Wd(t.l, [e, n]);
class Pi {
  constructor(e, n) {
    this.client = e, this.clock = n;
  }
}
const Ei = (t, e) => t === e || t !== null && e !== null && t.client === e.client && t.clock === e.clock, j = (t, e) => new Pi(t, e), ck = (t) => {
  for (const [e, n] of t.doc.share.entries())
    if (n === t)
      return e;
  throw Kt();
}, Pc = (t, e) => {
  for (; e !== null; ) {
    if (e.parent === t)
      return !0;
    e = e.parent._item;
  }
  return !1;
};
class ak {
  constructor(e, n, r, i = 0) {
    this.type = e, this.tname = n, this.item = r, this.assoc = i;
  }
}
const vy = (t) => {
  const e = {};
  return t.type && (e.type = t.type), t.tname && (e.tname = t.tname), t.item && (e.item = t.item), t.assoc != null && (e.assoc = t.assoc), e;
}, ko = (t) => new ak(t.type == null ? null : j(t.type.client, t.type.clock), t.tname || null, t.item == null ? null : j(t.item.client, t.item.clock), t.assoc == null ? 0 : t.assoc);
class b0e {
  constructor(e, n, r = 0) {
    this.type = e, this.index = n, this.assoc = r;
  }
}
const w0e = (t, e, n = 0) => new b0e(t, e, n), _l = (t, e, n) => {
  let r = null, i = null;
  return t._item === null ? i = ck(t) : r = j(t._item.id.client, t._item.id.clock), new ak(r, i, e, n);
}, Tf = (t, e, n = 0) => {
  let r = t._start;
  if (n < 0) {
    if (e === 0)
      return _l(t, null, n);
    e--;
  }
  for (; r !== null; ) {
    if (!r.deleted && r.countable) {
      if (r.length > e)
        return _l(t, j(r.id.client, r.id.clock + e), n);
      e -= r.length;
    }
    if (r.right === null && n < 0)
      return _l(t, r.lastId, n);
    r = r.right;
  }
  return _l(t, null, n);
}, Mf = (t, e) => {
  const n = e.store, r = t.item, i = t.type, s = t.tname, o = t.assoc;
  let l = null, c = 0;
  if (r !== null) {
    if (Te(n, r.client) <= r.clock)
      return null;
    const a = If(n, r), h = a.item;
    if (!(h instanceof ue))
      return null;
    if (l = h.parent, l._item === null || !l._item.deleted) {
      c = h.deleted || !h.countable ? 0 : a.diff + (o >= 0 ? 0 : 1);
      let u = h.left;
      for (; u !== null; )
        !u.deleted && u.countable && (c += u.length), u = u.left;
    }
  } else {
    if (s !== null)
      l = e.get(s);
    else if (i !== null) {
      if (Te(n, i.client) <= i.clock)
        return null;
      const { item: a } = If(n, i);
      if (a instanceof ue && a.content instanceof En)
        l = a.content.type;
      else
        return null;
    } else
      throw Kt();
    o >= 0 ? c = l._length : c = 0;
  }
  return w0e(l, c, t.assoc);
}, xy = (t, e) => t === e || t !== null && e !== null && t.tname === e.tname && Ei(t.item, e.item) && Ei(t.type, e.type) && t.assoc === e.assoc;
class v0e {
  constructor(e, n) {
    this.ds = e, this.sv = n;
  }
}
const x0e = (t, e) => new v0e(t, e);
x0e(Xx(), /* @__PURE__ */ new Map());
const Ds = (t, e) => e === void 0 ? !t.deleted : e.sv.has(t.id.client) && (e.sv.get(t.id.client) || 0) > t.id.clock && !Po(e.ds, t.id), Of = (t, e) => {
  const n = Vn(t.meta, Of, ei), r = t.doc.store;
  n.has(e) || (e.sv.forEach((i, s) => {
    i < Te(r, s) && pt(t, j(s, i));
  }), ts(t, e.ds, (i) => {
  }), n.add(e));
};
class hk {
  constructor() {
    this.clients = /* @__PURE__ */ new Map(), this.pendingStructs = null, this.pendingDs = null;
  }
}
const Da = (t) => {
  const e = /* @__PURE__ */ new Map();
  return t.clients.forEach((n, r) => {
    const i = n[n.length - 1];
    e.set(r, i.id.clock + i.length);
  }), e;
}, Te = (t, e) => {
  const n = t.clients.get(e);
  if (n === void 0)
    return 0;
  const r = n[n.length - 1];
  return r.id.clock + r.length;
}, uk = (t, e) => {
  let n = t.clients.get(e.id.client);
  if (n === void 0)
    n = [], t.clients.set(e.id.client, n);
  else {
    const r = n[n.length - 1];
    if (r.id.clock + r.length !== e.id.clock)
      throw Kt();
  }
  n.push(e);
}, vn = (t, e) => {
  let n = 0, r = t.length - 1, i = t[r], s = i.id.clock;
  if (s === e)
    return r;
  let o = Hn(e / (s + i.length - 1) * r);
  for (; n <= r; ) {
    if (i = t[o], s = i.id.clock, s <= e) {
      if (e < s + i.length)
        return o;
      n = o + 1;
    } else
      r = o - 1;
    o = Hn((n + r) / 2);
  }
  throw Kt();
}, k0e = (t, e) => {
  const n = t.clients.get(e.client);
  return n[vn(n, e.clock)];
}, Yl = k0e, Lf = (t, e, n) => {
  const r = vn(e, n), i = e[r];
  return i.id.clock < n && i instanceof ue ? (e.splice(r + 1, 0, Vc(t, i, n - i.id.clock)), r + 1) : r;
}, pt = (t, e) => {
  const n = t.doc.store.clients.get(e.client);
  return n[Lf(t, n, e.clock)];
}, ky = (t, e, n) => {
  const r = e.clients.get(n.client), i = vn(r, n.clock), s = r[i];
  return n.clock !== s.id.clock + s.length - 1 && s.constructor !== Tt && r.splice(i + 1, 0, Vc(t, s, n.clock - s.id.clock + 1)), s;
}, _0e = (t, e, n) => {
  const r = t.clients.get(e.id.client);
  r[vn(r, e.id.clock)] = n;
}, fk = (t, e, n, r, i) => {
  if (r === 0)
    return;
  const s = n + r;
  let o = Lf(t, e, n), l;
  do
    l = e[o++], s < l.id.clock + l.length && Lf(t, e, s), i(l);
  while (o < e.length && e[o].id.clock < s);
};
class S0e {
  constructor(e, n, r) {
    this.doc = e, this.deleteSet = new ms(), this.beforeState = Da(e.store), this.afterState = /* @__PURE__ */ new Map(), this.changed = /* @__PURE__ */ new Map(), this.changedParentTypes = /* @__PURE__ */ new Map(), this._mergeStructs = [], this.origin = n, this.meta = /* @__PURE__ */ new Map(), this.local = r, this.subdocsAdded = /* @__PURE__ */ new Set(), this.subdocsRemoved = /* @__PURE__ */ new Set(), this.subdocsLoaded = /* @__PURE__ */ new Set(), this._needFormattingCleanup = !1;
  }
}
const _y = (t, e) => e.deleteSet.clients.size === 0 && !Tge(e.afterState, (n, r) => e.beforeState.get(r) !== n) ? !1 : (Qd(e.deleteSet), l0e(t, e), ys(t, e.deleteSet), !0), Sy = (t, e, n) => {
  const r = e._item;
  (r === null || r.id.clock < (t.beforeState.get(r.id.client) || 0) && !r.deleted) && Vn(t.changed, e, ei).add(n);
}, Kl = (t, e) => {
  let n = t[e], r = t[e - 1], i = e;
  for (; i > 0; n = r, r = t[--i - 1]) {
    if (r.deleted === n.deleted && r.constructor === n.constructor && r.mergeWith(n)) {
      n instanceof ue && n.parentSub !== null && n.parent._map.get(n.parentSub) === n && n.parent._map.set(n.parentSub, r);
      continue;
    }
    break;
  }
  const s = e - i;
  return s && t.splice(e + 1 - s, s), s;
}, C0e = (t, e, n) => {
  for (const [r, i] of t.clients.entries()) {
    const s = e.clients.get(r);
    for (let o = i.length - 1; o >= 0; o--) {
      const l = i[o], c = l.clock + l.len;
      for (let a = vn(s, l.clock), h = s[a]; a < s.length && h.id.clock < c; h = s[++a]) {
        const u = s[a];
        if (l.clock + l.len <= u.id.clock)
          break;
        u instanceof ue && u.deleted && !u.keep && n(u) && u.gc(e, !1);
      }
    }
  }
}, A0e = (t, e) => {
  t.clients.forEach((n, r) => {
    const i = e.clients.get(r);
    for (let s = n.length - 1; s >= 0; s--) {
      const o = n[s], l = Sa(i.length - 1, 1 + vn(i, o.clock + o.len - 1));
      for (let c = l, a = i[c]; c > 0 && a.id.clock >= o.clock; a = i[c])
        c -= 1 + Kl(i, c);
    }
  });
}, dk = (t, e) => {
  if (e < t.length) {
    const n = t[e], r = n.doc, i = r.store, s = n.deleteSet, o = n._mergeStructs;
    try {
      Qd(s), n.afterState = Da(n.doc.store), r.emit("beforeObserverCalls", [n, r]);
      const l = [];
      n.changed.forEach(
        (c, a) => l.push(() => {
          (a._item === null || !a._item.deleted) && a._callObserver(n, c);
        })
      ), l.push(() => {
        n.changedParentTypes.forEach((c, a) => {
          a._dEH.l.length > 0 && (a._item === null || !a._item.deleted) && (c = c.filter(
            (h) => h.target._item === null || !h.target._item.deleted
          ), c.forEach((h) => {
            h.currentTarget = a, h._path = null;
          }), c.sort((h, u) => h.path.length - u.path.length), lk(a._dEH, c, n));
        });
      }), l.push(() => r.emit("afterTransaction", [n, r])), Wd(l, []), n._needFormattingCleanup && j0e(n);
    } finally {
      r.gc && C0e(s, i, r.gcFilter), A0e(s, i), n.afterState.forEach((h, u) => {
        const f = n.beforeState.get(u) || 0;
        if (f !== h) {
          const d = i.clients.get(u), p = Sr(vn(d, f), 1);
          for (let g = d.length - 1; g >= p; )
            g -= 1 + Kl(d, g);
        }
      });
      for (let h = o.length - 1; h >= 0; h--) {
        const { client: u, clock: f } = o[h].id, d = i.clients.get(u), p = vn(d, f);
        p + 1 < d.length && Kl(d, p + 1) > 1 || p > 0 && Kl(d, p);
      }
      if (!n.local && n.afterState.get(r.clientID) !== n.beforeState.get(r.clientID) && (Xme(Jx, Gx, "[yjs] ", Yx, Kx, "Changed the client-id because another client seems to be using it."), r.clientID = Qx()), r.emit("afterTransactionCleanup", [n, r]), r._observers.has("update")) {
        const h = new Fo();
        _y(h, n) && r.emit("update", [h.toUint8Array(), n.origin, r, n]);
      }
      if (r._observers.has("updateV2")) {
        const h = new ti();
        _y(h, n) && r.emit("updateV2", [h.toUint8Array(), n.origin, r, n]);
      }
      const { subdocsAdded: l, subdocsLoaded: c, subdocsRemoved: a } = n;
      (l.size > 0 || a.size > 0 || c.size > 0) && (l.forEach((h) => {
        h.clientID = r.clientID, h.collectionid == null && (h.collectionid = r.collectionid), r.subdocs.add(h);
      }), a.forEach((h) => r.subdocs.delete(h)), r.emit("subdocs", [{ loaded: c, added: l, removed: a }, r, n]), a.forEach((h) => h.destroy())), t.length <= e + 1 ? (r._transactionCleanups = [], r.emit("afterAllTransactions", [r, t])) : dk(t, e + 1);
    }
  }
}, he = (t, e, n = null, r = !0) => {
  const i = t._transactionCleanups;
  let s = !1, o = null;
  t._transaction === null && (s = !0, t._transaction = new S0e(t, n, r), i.push(t._transaction), i.length === 1 && t.emit("beforeAllTransactions", [t]), t.emit("beforeTransaction", [t._transaction, t]));
  try {
    o = e(t._transaction);
  } finally {
    if (s) {
      const l = t._transaction === i[0];
      t._transaction = null, l && dk(i, 0);
    }
  }
  return o;
};
class E0e {
  constructor(e, n) {
    this.insertions = n, this.deletions = e, this.meta = /* @__PURE__ */ new Map();
  }
}
const Cy = (t, e, n) => {
  ts(t, n.deletions, (r) => {
    r instanceof ue && e.scope.some((i) => Pc(i, r)) && hp(r, !1);
  });
}, Ay = (t, e, n) => {
  let r = null, i = null;
  const s = t.doc, o = t.scope;
  if (he(s, (l) => {
    for (; e.length > 0 && r === null; ) {
      const c = s.store, a = e.pop(), h = /* @__PURE__ */ new Set(), u = [];
      let f = !1;
      ts(l, a.insertions, (d) => {
        if (d instanceof ue) {
          if (d.redone !== null) {
            let { item: p, diff: g } = If(c, d.id);
            g > 0 && (p = pt(l, j(p.id.client, p.id.clock + g))), d = p;
          }
          !d.deleted && o.some((p) => Pc(p, d)) && u.push(d);
        }
      }), ts(l, a.deletions, (d) => {
        d instanceof ue && o.some((p) => Pc(p, d)) && !Po(a.insertions, d.id) && h.add(d);
      }), h.forEach((d) => {
        f = Ok(l, d, h, a.insertions, t.ignoreRemoteMapChanges, t) !== null || f;
      });
      for (let d = u.length - 1; d >= 0; d--) {
        const p = u[d];
        t.deleteFilter(p) && (p.delete(l), f = !0);
      }
      r = f ? a : null;
    }
    l.changed.forEach((c, a) => {
      c.has(null) && a._searchMarker && (a._searchMarker.length = 0);
    }), i = l;
  }, t), r != null) {
    const l = i.changedParentTypes;
    t.emit("stack-item-popped", [{ stackItem: r, type: n, changedParentTypes: l }, t]);
  }
  return r;
};
class np extends _a {
  constructor(e, {
    captureTimeout: n = 500,
    captureTransaction: r = (c) => !0,
    deleteFilter: i = () => !0,
    trackedOrigins: s = /* @__PURE__ */ new Set([null]),
    ignoreRemoteMapChanges: o = !1,
    doc: l = kf(e) ? e[0].doc : e.doc
  } = {}) {
    super(), this.scope = [], this.addToScope(e), this.deleteFilter = i, s.add(this), this.trackedOrigins = s, this.captureTransaction = r, this.undoStack = [], this.redoStack = [], this.undoing = !1, this.redoing = !1, this.doc = l, this.lastChange = 0, this.ignoreRemoteMapChanges = o, this.captureTimeout = n, this.afterTransactionHandler = (c) => {
      if (!this.captureTransaction(c) || !this.scope.some((m) => c.changedParentTypes.has(m)) || !this.trackedOrigins.has(c.origin) && (!c.origin || !this.trackedOrigins.has(c.origin.constructor)))
        return;
      const a = this.undoing, h = this.redoing, u = a ? this.redoStack : this.undoStack;
      a ? this.stopCapturing() : h || this.clear(!1, !0);
      const f = new ms();
      c.afterState.forEach((m, y) => {
        const b = c.beforeState.get(y) || 0, _ = m - b;
        _ > 0 && xo(f, y, b, _);
      });
      const d = xr();
      let p = !1;
      if (this.lastChange > 0 && d - this.lastChange < this.captureTimeout && u.length > 0 && !a && !h) {
        const m = u[u.length - 1];
        m.deletions = Df([m.deletions, c.deleteSet]), m.insertions = Df([m.insertions, f]);
      } else
        u.push(new E0e(c.deleteSet, f)), p = !0;
      !a && !h && (this.lastChange = d), ts(c, c.deleteSet, (m) => {
        m instanceof ue && this.scope.some((y) => Pc(y, m)) && hp(m, !0);
      });
      const g = [{ stackItem: u[u.length - 1], origin: c.origin, type: a ? "redo" : "undo", changedParentTypes: c.changedParentTypes }, this];
      p ? this.emit("stack-item-added", g) : this.emit("stack-item-updated", g);
    }, this.doc.on("afterTransaction", this.afterTransactionHandler), this.doc.on("destroy", () => {
      this.destroy();
    });
  }
  addToScope(e) {
    e = kf(e) ? e : [e], e.forEach((n) => {
      this.scope.every((r) => r !== n) && this.scope.push(n);
    });
  }
  addTrackedOrigin(e) {
    this.trackedOrigins.add(e);
  }
  removeTrackedOrigin(e) {
    this.trackedOrigins.delete(e);
  }
  clear(e = !0, n = !0) {
    (e && this.canUndo() || n && this.canRedo()) && this.doc.transact((r) => {
      e && (this.undoStack.forEach((i) => Cy(r, this, i)), this.undoStack = []), n && (this.redoStack.forEach((i) => Cy(r, this, i)), this.redoStack = []), this.emit("stack-cleared", [{ undoStackCleared: e, redoStackCleared: n }]);
    });
  }
  stopCapturing() {
    this.lastChange = 0;
  }
  undo() {
    this.undoing = !0;
    let e;
    try {
      e = Ay(this, this.undoStack, "undo");
    } finally {
      this.undoing = !1;
    }
    return e;
  }
  redo() {
    this.redoing = !0;
    let e;
    try {
      e = Ay(this, this.redoStack, "redo");
    } finally {
      this.redoing = !1;
    }
    return e;
  }
  canUndo() {
    return this.undoStack.length > 0;
  }
  canRedo() {
    return this.redoStack.length > 0;
  }
  destroy() {
    this.trackedOrigins.delete(this), this.doc.off("afterTransaction", this.afterTransactionHandler), super.destroy();
  }
}
function* D0e(t) {
  const e = W(t.restDecoder);
  for (let n = 0; n < e; n++) {
    const r = W(t.restDecoder), i = t.readClient();
    let s = W(t.restDecoder);
    for (let o = 0; o < r; o++) {
      const l = t.readInfo();
      if (l === 10) {
        const c = W(t.restDecoder);
        yield new Mt(j(i, s), c), s += c;
      } else if ((Ca & l) !== 0) {
        const c = (l & (Pn | At)) === 0, a = new ue(
          j(i, s),
          null,
          (l & At) === At ? t.readLeftID() : null,
          null,
          (l & Pn) === Pn ? t.readRightID() : null,
          c ? t.readParentInfo() ? t.readString() : t.readLeftID() : null,
          c && (l & bo) === bo ? t.readString() : null,
          Lk(t, l)
        );
        yield a, s += a.length;
      } else {
        const c = t.readLen();
        yield new Tt(j(i, s), c), s += c;
      }
    }
  }
}
class rp {
  constructor(e, n) {
    this.gen = D0e(e), this.curr = null, this.done = !1, this.filterSkips = n, this.next();
  }
  next() {
    do
      this.curr = this.gen.next().value || null;
    while (this.filterSkips && this.curr !== null && this.curr.constructor === Mt);
    return this.curr;
  }
}
class ip {
  constructor(e) {
    this.currClient = 0, this.startClock = 0, this.written = 0, this.encoder = e, this.clientStructs = [];
  }
}
const T0e = (t) => Fc(t, tk, Fo), M0e = (t, e) => {
  if (t.constructor === Tt) {
    const { client: n, clock: r } = t.id;
    return new Tt(j(n, r + e), t.length - e);
  } else if (t.constructor === Mt) {
    const { client: n, clock: r } = t.id;
    return new Mt(j(n, r + e), t.length - e);
  } else {
    const n = t, { client: r, clock: i } = n.id;
    return new ue(
      j(r, i + e),
      null,
      j(r, i + e - 1),
      null,
      n.rightOrigin,
      n.parent,
      n.parentSub,
      n.content.splice(e)
    );
  }
}, Fc = (t, e = ns, n = ti) => {
  if (t.length === 1)
    return t[0];
  const r = t.map((h) => new e(Cr(h)));
  let i = r.map((h) => new rp(h, !0)), s = null;
  const o = new n(), l = new ip(o);
  for (; i = i.filter((f) => f.curr !== null), i.sort(
    (f, d) => {
      if (f.curr.id.client === d.curr.id.client) {
        const p = f.curr.id.clock - d.curr.id.clock;
        return p === 0 ? f.curr.constructor === d.curr.constructor ? 0 : f.curr.constructor === Mt ? 1 : -1 : p;
      } else
        return d.curr.id.client - f.curr.id.client;
    }
  ), i.length !== 0; ) {
    const h = i[0], u = h.curr.id.client;
    if (s !== null) {
      let f = h.curr, d = !1;
      for (; f !== null && f.id.clock + f.length <= s.struct.id.clock + s.struct.length && f.id.client >= s.struct.id.client; )
        f = h.next(), d = !0;
      if (f === null || f.id.client !== u || d && f.id.clock > s.struct.id.clock + s.struct.length)
        continue;
      if (u !== s.struct.id.client)
        Qn(l, s.struct, s.offset), s = { struct: f, offset: 0 }, h.next();
      else if (s.struct.id.clock + s.struct.length < f.id.clock)
        if (s.struct.constructor === Mt)
          s.struct.length = f.id.clock + f.length - s.struct.id.clock;
        else {
          Qn(l, s.struct, s.offset);
          const p = f.id.clock - s.struct.id.clock - s.struct.length;
          s = { struct: new Mt(j(u, s.struct.id.clock + s.struct.length), p), offset: 0 };
        }
      else {
        const p = s.struct.id.clock + s.struct.length - f.id.clock;
        p > 0 && (s.struct.constructor === Mt ? s.struct.length -= p : f = M0e(f, p)), s.struct.mergeWith(f) || (Qn(l, s.struct, s.offset), s = { struct: f, offset: 0 }, h.next());
      }
    } else
      s = { struct: h.curr, offset: 0 }, h.next();
    for (let f = h.curr; f !== null && f.id.client === u && f.id.clock === s.struct.id.clock + s.struct.length && f.constructor !== Mt; f = h.next())
      Qn(l, s.struct, s.offset), s = { struct: f, offset: 0 };
  }
  s !== null && (Qn(l, s.struct, s.offset), s = null), sp(l);
  const c = r.map((h) => ep(h)), a = Df(c);
  return ys(o, a), o.toUint8Array();
}, O0e = (t, e, n = ns, r = ti) => {
  const i = sk(e), s = new r(), o = new ip(s), l = new n(Cr(t)), c = new rp(l, !1);
  for (; c.curr; ) {
    const h = c.curr, u = h.id.client, f = i.get(u) || 0;
    if (c.curr.constructor === Mt) {
      c.next();
      continue;
    }
    if (h.id.clock + h.length > f)
      for (Qn(o, h, Sr(f - h.id.clock, 0)), c.next(); c.curr && c.curr.id.client === u; )
        Qn(o, c.curr, 0), c.next();
    else
      for (; c.curr && c.curr.id.client === u && c.curr.id.clock + c.curr.length <= f; )
        c.next();
  }
  sp(o);
  const a = ep(l);
  return ys(s, a), s.toUint8Array();
}, pk = (t) => {
  t.written > 0 && (t.clientStructs.push({ written: t.written, restEncoder: ke(t.encoder.restEncoder) }), t.encoder.restEncoder = Ze(), t.written = 0);
}, Qn = (t, e, n) => {
  t.written > 0 && t.currClient !== e.id.client && pk(t), t.written === 0 && (t.currClient = e.id.client, t.encoder.writeClient(e.id.client), H(t.encoder.restEncoder, e.id.clock + n)), e.write(t.encoder, n), t.written++;
}, sp = (t) => {
  pk(t);
  const e = t.encoder.restEncoder;
  H(e, t.clientStructs.length);
  for (let n = 0; n < t.clientStructs.length; n++) {
    const r = t.clientStructs[n];
    H(e, r.written), Ea(e, r.restEncoder);
  }
}, L0e = (t, e, n, r) => {
  const i = new n(Cr(t)), s = new rp(i, !1), o = new r(), l = new ip(o);
  for (let a = s.curr; a !== null; a = s.next())
    Qn(l, e(a), 0);
  sp(l);
  const c = ep(i);
  return ys(o, c), o.toUint8Array();
}, R0e = (t) => L0e(t, Zge, ns, Fo), Ey = "You must not compute changes after the event-handler fired.";
class Ta {
  constructor(e, n) {
    this.target = e, this.currentTarget = e, this.transaction = n, this._changes = null, this._keys = null, this._delta = null, this._path = null;
  }
  get path() {
    return this._path || (this._path = I0e(this.currentTarget, this.target));
  }
  deletes(e) {
    return Po(this.transaction.deleteSet, e.id);
  }
  get keys() {
    if (this._keys === null) {
      if (this.transaction.doc._transactionCleanups.length === 0)
        throw vr(Ey);
      const e = /* @__PURE__ */ new Map(), n = this.target;
      this.transaction.changed.get(n).forEach((i) => {
        if (i !== null) {
          const s = n._map.get(i);
          let o, l;
          if (this.adds(s)) {
            let c = s.left;
            for (; c !== null && this.adds(c); )
              c = c.left;
            if (this.deletes(s))
              if (c !== null && this.deletes(c))
                o = "delete", l = Vh(c.content.getContent());
              else
                return;
            else
              c !== null && this.deletes(c) ? (o = "update", l = Vh(c.content.getContent())) : (o = "add", l = void 0);
          } else if (this.deletes(s))
            o = "delete", l = Vh(s.content.getContent());
          else
            return;
          e.set(i, { action: o, oldValue: l });
        }
      }), this._keys = e;
    }
    return this._keys;
  }
  get delta() {
    return this.changes.delta;
  }
  adds(e) {
    return e.id.clock >= (this.transaction.beforeState.get(e.id.client) || 0);
  }
  get changes() {
    let e = this._changes;
    if (e === null) {
      if (this.transaction.doc._transactionCleanups.length === 0)
        throw vr(Ey);
      const n = this.target, r = ei(), i = ei(), s = [];
      if (e = {
        added: r,
        deleted: i,
        delta: s,
        keys: this.keys
      }, this.transaction.changed.get(n).has(null)) {
        let l = null;
        const c = () => {
          l && s.push(l);
        };
        for (let a = n._start; a !== null; a = a.right)
          a.deleted ? this.deletes(a) && !this.adds(a) && ((l === null || l.delete === void 0) && (c(), l = { delete: 0 }), l.delete += a.length, i.add(a)) : this.adds(a) ? ((l === null || l.insert === void 0) && (c(), l = { insert: [] }), l.insert = l.insert.concat(a.content.getContent()), r.add(a)) : ((l === null || l.retain === void 0) && (c(), l = { retain: 0 }), l.retain += a.length);
        l !== null && l.retain === void 0 && c();
      }
      this._changes = e;
    }
    return e;
  }
}
const I0e = (t, e) => {
  const n = [];
  for (; e._item !== null && e !== t; ) {
    if (e._item.parentSub !== null)
      n.unshift(e._item.parentSub);
    else {
      let r = 0, i = e._item.parent._start;
      for (; i !== e._item && i !== null; )
        i.deleted || r++, i = i.right;
      n.unshift(r);
    }
    e = e._item.parent;
  }
  return n;
}, gk = 80;
let op = 0;
class N0e {
  constructor(e, n) {
    e.marker = !0, this.p = e, this.index = n, this.timestamp = op++;
  }
}
const P0e = (t) => {
  t.timestamp = op++;
}, mk = (t, e, n) => {
  t.p.marker = !1, t.p = e, e.marker = !0, t.index = n, t.timestamp = op++;
}, F0e = (t, e, n) => {
  if (t.length >= gk) {
    const r = t.reduce((i, s) => i.timestamp < s.timestamp ? i : s);
    return mk(r, e, n), r;
  } else {
    const r = new N0e(e, n);
    return t.push(r), r;
  }
}, Ma = (t, e) => {
  if (t._start === null || e === 0 || t._searchMarker === null)
    return null;
  const n = t._searchMarker.length === 0 ? null : t._searchMarker.reduce((s, o) => Wl(e - s.index) < Wl(e - o.index) ? s : o);
  let r = t._start, i = 0;
  for (n !== null && (r = n.p, i = n.index, P0e(n)); r.right !== null && i < e; ) {
    if (!r.deleted && r.countable) {
      if (e < i + r.length)
        break;
      i += r.length;
    }
    r = r.right;
  }
  for (; r.left !== null && i > e; )
    r = r.left, !r.deleted && r.countable && (i -= r.length);
  for (; r.left !== null && r.left.id.client === r.id.client && r.left.id.clock + r.left.length === r.id.clock; )
    r = r.left, !r.deleted && r.countable && (i -= r.length);
  return n !== null && Wl(n.index - i) < r.parent.length / gk ? (mk(n, r, i), n) : F0e(t._searchMarker, r, i);
}, _o = (t, e, n) => {
  for (let r = t.length - 1; r >= 0; r--) {
    const i = t[r];
    if (n > 0) {
      let s = i.p;
      for (s.marker = !1; s && (s.deleted || !s.countable); )
        s = s.left, s && !s.deleted && s.countable && (i.index -= s.length);
      if (s === null || s.marker === !0) {
        t.splice(r, 1);
        continue;
      }
      i.p = s, s.marker = !0;
    }
    (e < i.index || n > 0 && e === i.index) && (i.index = Sr(e, i.index + n));
  }
}, Oa = (t, e, n) => {
  const r = t, i = e.changedParentTypes;
  for (; Vn(i, t, () => []).push(n), t._item !== null; )
    t = t._item.parent;
  lk(r._eH, n, e);
};
class Ge {
  constructor() {
    this._item = null, this._map = /* @__PURE__ */ new Map(), this._start = null, this.doc = null, this._length = 0, this._eH = yy(), this._dEH = yy(), this._searchMarker = null;
  }
  get parent() {
    return this._item ? this._item.parent : null;
  }
  _integrate(e, n) {
    this.doc = e, this._item = n;
  }
  _copy() {
    throw bn();
  }
  clone() {
    throw bn();
  }
  _write(e) {
  }
  get _first() {
    let e = this._start;
    for (; e !== null && e.deleted; )
      e = e.right;
    return e;
  }
  _callObserver(e, n) {
    !e.local && this._searchMarker && (this._searchMarker.length = 0);
  }
  observe(e) {
    by(this._eH, e);
  }
  observeDeep(e) {
    by(this._dEH, e);
  }
  unobserve(e) {
    wy(this._eH, e);
  }
  unobserveDeep(e) {
    wy(this._dEH, e);
  }
  toJSON() {
  }
}
const yk = (t, e, n) => {
  e < 0 && (e = t._length + e), n < 0 && (n = t._length + n);
  let r = n - e;
  const i = [];
  let s = t._start;
  for (; s !== null && r > 0; ) {
    if (s.countable && !s.deleted) {
      const o = s.content.getContent();
      if (o.length <= e)
        e -= o.length;
      else {
        for (let l = e; l < o.length && r > 0; l++)
          i.push(o[l]), r--;
        e = 0;
      }
    }
    s = s.right;
  }
  return i;
}, bk = (t) => {
  const e = [];
  let n = t._start;
  for (; n !== null; ) {
    if (n.countable && !n.deleted) {
      const r = n.content.getContent();
      for (let i = 0; i < r.length; i++)
        e.push(r[i]);
    }
    n = n.right;
  }
  return e;
}, So = (t, e) => {
  let n = 0, r = t._start;
  for (; r !== null; ) {
    if (r.countable && !r.deleted) {
      const i = r.content.getContent();
      for (let s = 0; s < i.length; s++)
        e(i[s], n++, t);
    }
    r = r.right;
  }
}, wk = (t, e) => {
  const n = [];
  return So(t, (r, i) => {
    n.push(e(r, i, t));
  }), n;
}, B0e = (t) => {
  let e = t._start, n = null, r = 0;
  return {
    [Symbol.iterator]() {
      return this;
    },
    next: () => {
      if (n === null) {
        for (; e !== null && e.deleted; )
          e = e.right;
        if (e === null)
          return {
            done: !0,
            value: void 0
          };
        n = e.content.getContent(), r = 0, e = e.right;
      }
      const i = n[r++];
      return n.length <= r && (n = null), {
        done: !1,
        value: i
      };
    }
  };
}, vk = (t, e) => {
  const n = Ma(t, e);
  let r = t._start;
  for (n !== null && (r = n.p, e -= n.index); r !== null; r = r.right)
    if (!r.deleted && r.countable) {
      if (e < r.length)
        return r.content.getContent()[e];
      e -= r.length;
    }
}, Bc = (t, e, n, r) => {
  let i = n;
  const s = t.doc, o = s.clientID, l = s.store, c = n === null ? e._start : n.right;
  let a = [];
  const h = () => {
    a.length > 0 && (i = new ue(j(o, Te(l, o)), i, i && i.lastId, c, c && c.id, e, null, new ri(a)), i.integrate(t, 0), a = []);
  };
  r.forEach((u) => {
    if (u === null)
      a.push(u);
    else
      switch (u.constructor) {
        case Number:
        case Object:
        case Boolean:
        case Array:
        case String:
          a.push(u);
          break;
        default:
          switch (h(), u.constructor) {
            case Uint8Array:
            case ArrayBuffer:
              i = new ue(j(o, Te(l, o)), i, i && i.lastId, c, c && c.id, e, null, new Bo(new Uint8Array(u))), i.integrate(t, 0);
              break;
            case bs:
              i = new ue(j(o, Te(l, o)), i, i && i.lastId, c, c && c.id, e, null, new qo(u)), i.integrate(t, 0);
              break;
            default:
              if (u instanceof Ge)
                i = new ue(j(o, Te(l, o)), i, i && i.lastId, c, c && c.id, e, null, new En(u)), i.integrate(t, 0);
              else
                throw new Error("Unexpected content type in insert operation");
          }
      }
  }), h();
}, xk = vr("Length exceeded!"), kk = (t, e, n, r) => {
  if (n > e._length)
    throw xk;
  if (n === 0)
    return e._searchMarker && _o(e._searchMarker, n, r.length), Bc(t, e, null, r);
  const i = n, s = Ma(e, n);
  let o = e._start;
  for (s !== null && (o = s.p, n -= s.index, n === 0 && (o = o.prev, n += o && o.countable && !o.deleted ? o.length : 0)); o !== null; o = o.right)
    if (!o.deleted && o.countable) {
      if (n <= o.length) {
        n < o.length && pt(t, j(o.id.client, o.id.clock + n));
        break;
      }
      n -= o.length;
    }
  return e._searchMarker && _o(e._searchMarker, i, r.length), Bc(t, e, o, r);
}, q0e = (t, e, n) => {
  let i = (e._searchMarker || []).reduce((s, o) => o.index > s.index ? o : s, { index: 0, p: e._start }).p;
  if (i)
    for (; i.right; )
      i = i.right;
  return Bc(t, e, i, n);
}, _k = (t, e, n, r) => {
  if (r === 0)
    return;
  const i = n, s = r, o = Ma(e, n);
  let l = e._start;
  for (o !== null && (l = o.p, n -= o.index); l !== null && n > 0; l = l.right)
    !l.deleted && l.countable && (n < l.length && pt(t, j(l.id.client, l.id.clock + n)), n -= l.length);
  for (; r > 0 && l !== null; )
    l.deleted || (r < l.length && pt(t, j(l.id.client, l.id.clock + r)), l.delete(t), r -= l.length), l = l.right;
  if (r > 0)
    throw xk;
  e._searchMarker && _o(e._searchMarker, i, -s + r);
}, qc = (t, e, n) => {
  const r = e._map.get(n);
  r !== void 0 && r.delete(t);
}, lp = (t, e, n, r) => {
  const i = e._map.get(n) || null, s = t.doc, o = s.clientID;
  let l;
  if (r == null)
    l = new ri([r]);
  else
    switch (r.constructor) {
      case Number:
      case Object:
      case Boolean:
      case Array:
      case String:
        l = new ri([r]);
        break;
      case Uint8Array:
        l = new Bo(r);
        break;
      case bs:
        l = new qo(r);
        break;
      default:
        if (r instanceof Ge)
          l = new En(r);
        else
          throw new Error("Unexpected content type");
    }
  new ue(j(o, Te(s.store, o)), i, i && i.lastId, null, null, e, n, l).integrate(t, 0);
}, cp = (t, e) => {
  const n = t._map.get(e);
  return n !== void 0 && !n.deleted ? n.content.getContent()[n.length - 1] : void 0;
}, Sk = (t) => {
  const e = {};
  return t._map.forEach((n, r) => {
    n.deleted || (e[r] = n.content.getContent()[n.length - 1]);
  }), e;
}, Ck = (t, e) => {
  const n = t._map.get(e);
  return n !== void 0 && !n.deleted;
}, Sl = (t) => e0e(t.entries(), (e) => !e[1].deleted);
class $0e extends Ta {
  constructor(e, n) {
    super(e, n), this._transaction = n;
  }
}
class Fi extends Ge {
  constructor() {
    super(), this._prelimContent = [], this._searchMarker = [];
  }
  static from(e) {
    const n = new Fi();
    return n.push(e), n;
  }
  _integrate(e, n) {
    super._integrate(e, n), this.insert(0, this._prelimContent), this._prelimContent = null;
  }
  _copy() {
    return new Fi();
  }
  clone() {
    const e = new Fi();
    return e.insert(0, this.toArray().map(
      (n) => n instanceof Ge ? n.clone() : n
    )), e;
  }
  get length() {
    return this._prelimContent === null ? this._length : this._prelimContent.length;
  }
  _callObserver(e, n) {
    super._callObserver(e, n), Oa(this, e, new $0e(this, e));
  }
  insert(e, n) {
    this.doc !== null ? he(this.doc, (r) => {
      kk(r, this, e, n);
    }) : this._prelimContent.splice(e, 0, ...n);
  }
  push(e) {
    this.doc !== null ? he(this.doc, (n) => {
      q0e(n, this, e);
    }) : this._prelimContent.push(...e);
  }
  unshift(e) {
    this.insert(0, e);
  }
  delete(e, n = 1) {
    this.doc !== null ? he(this.doc, (r) => {
      _k(r, this, e, n);
    }) : this._prelimContent.splice(e, n);
  }
  get(e) {
    return vk(this, e);
  }
  toArray() {
    return bk(this);
  }
  slice(e = 0, n = this.length) {
    return yk(this, e, n);
  }
  toJSON() {
    return this.map((e) => e instanceof Ge ? e.toJSON() : e);
  }
  map(e) {
    return wk(this, e);
  }
  forEach(e) {
    So(this, e);
  }
  [Symbol.iterator]() {
    return B0e(this);
  }
  _write(e) {
    e.writeTypeRef(hye);
  }
}
const H0e = (t) => new Fi();
class z0e extends Ta {
  constructor(e, n, r) {
    super(e, n), this.keysChanged = r;
  }
}
class rs extends Ge {
  constructor(e) {
    super(), this._prelimContent = null, e === void 0 ? this._prelimContent = /* @__PURE__ */ new Map() : this._prelimContent = new Map(e);
  }
  _integrate(e, n) {
    super._integrate(e, n), this._prelimContent.forEach((r, i) => {
      this.set(i, r);
    }), this._prelimContent = null;
  }
  _copy() {
    return new rs();
  }
  clone() {
    const e = new rs();
    return this.forEach((n, r) => {
      e.set(r, n instanceof Ge ? n.clone() : n);
    }), e;
  }
  _callObserver(e, n) {
    Oa(this, e, new z0e(this, e, n));
  }
  toJSON() {
    const e = {};
    return this._map.forEach((n, r) => {
      if (!n.deleted) {
        const i = n.content.getContent()[n.length - 1];
        e[r] = i instanceof Ge ? i.toJSON() : i;
      }
    }), e;
  }
  get size() {
    return [...Sl(this._map)].length;
  }
  keys() {
    return Kh(Sl(this._map), (e) => e[0]);
  }
  values() {
    return Kh(Sl(this._map), (e) => e[1].content.getContent()[e[1].length - 1]);
  }
  entries() {
    return Kh(Sl(this._map), (e) => [e[0], e[1].content.getContent()[e[1].length - 1]]);
  }
  forEach(e) {
    this._map.forEach((n, r) => {
      n.deleted || e(n.content.getContent()[n.length - 1], r, this);
    });
  }
  [Symbol.iterator]() {
    return this.entries();
  }
  delete(e) {
    this.doc !== null ? he(this.doc, (n) => {
      qc(n, this, e);
    }) : this._prelimContent.delete(e);
  }
  set(e, n) {
    return this.doc !== null ? he(this.doc, (r) => {
      lp(r, this, e, n);
    }) : this._prelimContent.set(e, n), n;
  }
  get(e) {
    return cp(this, e);
  }
  has(e) {
    return Ck(this, e);
  }
  clear() {
    this.doc !== null ? he(this.doc, (e) => {
      this.forEach(function(n, r, i) {
        qc(e, i, r);
      });
    }) : this._prelimContent.clear();
  }
  _write(e) {
    e.writeTypeRef(uye);
  }
}
const V0e = (t) => new rs(), sr = (t, e) => t === e || typeof t == "object" && typeof e == "object" && t && e && Jge(t, e);
class Rf {
  constructor(e, n, r, i) {
    this.left = e, this.right = n, this.index = r, this.currentAttributes = i;
  }
  forward() {
    switch (this.right === null && Kt(), this.right.content.constructor) {
      case Pe:
        this.right.deleted || ws(this.currentAttributes, this.right.content);
        break;
      default:
        this.right.deleted || (this.index += this.right.length);
        break;
    }
    this.left = this.right, this.right = this.right.right;
  }
}
const Dy = (t, e, n) => {
  for (; e.right !== null && n > 0; ) {
    switch (e.right.content.constructor) {
      case Pe:
        e.right.deleted || ws(e.currentAttributes, e.right.content);
        break;
      default:
        e.right.deleted || (n < e.right.length && pt(t, j(e.right.id.client, e.right.id.clock + n)), e.index += e.right.length, n -= e.right.length);
        break;
    }
    e.left = e.right, e.right = e.right.right;
  }
  return e;
}, Cl = (t, e, n) => {
  const r = /* @__PURE__ */ new Map(), i = Ma(e, n);
  if (i) {
    const s = new Rf(i.p.left, i.p, i.index, r);
    return Dy(t, s, n - i.index);
  } else {
    const s = new Rf(null, e._start, 0, r);
    return Dy(t, s, n);
  }
}, Ak = (t, e, n, r) => {
  for (; n.right !== null && (n.right.deleted === !0 || n.right.content.constructor === Pe && sr(r.get(n.right.content.key), n.right.content.value)); )
    n.right.deleted || r.delete(n.right.content.key), n.forward();
  const i = t.doc, s = i.clientID;
  r.forEach((o, l) => {
    const c = n.left, a = n.right, h = new ue(j(s, Te(i.store, s)), c, c && c.lastId, a, a && a.id, e, null, new Pe(l, o));
    h.integrate(t, 0), n.right = h, n.forward();
  });
}, ws = (t, e) => {
  const { key: n, value: r } = e;
  r === null ? t.delete(n) : t.set(n, r);
}, Ek = (t, e) => {
  for (; t.right !== null; ) {
    if (!(t.right.deleted || t.right.content.constructor === Pe && sr(e[t.right.content.key] || null, t.right.content.value)))
      break;
    t.forward();
  }
}, Dk = (t, e, n, r) => {
  const i = t.doc, s = i.clientID, o = /* @__PURE__ */ new Map();
  for (const l in r) {
    const c = r[l], a = n.currentAttributes.get(l) || null;
    if (!sr(a, c)) {
      o.set(l, a);
      const { left: h, right: u } = n;
      n.right = new ue(j(s, Te(i.store, s)), h, h && h.lastId, u, u && u.id, e, null, new Pe(l, c)), n.right.integrate(t, 0), n.forward();
    }
  }
  return o;
}, Jh = (t, e, n, r, i) => {
  n.currentAttributes.forEach((f, d) => {
    i[d] === void 0 && (i[d] = null);
  });
  const s = t.doc, o = s.clientID;
  Ek(n, i);
  const l = Dk(t, e, n, i), c = r.constructor === String ? new xn(r) : r instanceof Ge ? new En(r) : new oi(r);
  let { left: a, right: h, index: u } = n;
  e._searchMarker && _o(e._searchMarker, n.index, c.getLength()), h = new ue(j(o, Te(s.store, o)), a, a && a.lastId, h, h && h.id, e, null, c), h.integrate(t, 0), n.right = h, n.index = u, n.forward(), Ak(t, e, n, l);
}, Ty = (t, e, n, r, i) => {
  const s = t.doc, o = s.clientID;
  Ek(n, i);
  const l = Dk(t, e, n, i);
  e:
    for (; n.right !== null && (r > 0 || l.size > 0 && (n.right.deleted || n.right.content.constructor === Pe)); ) {
      if (!n.right.deleted)
        switch (n.right.content.constructor) {
          case Pe: {
            const { key: c, value: a } = n.right.content, h = i[c];
            if (h !== void 0) {
              if (sr(h, a))
                l.delete(c);
              else {
                if (r === 0)
                  break e;
                l.set(c, a);
              }
              n.right.delete(t);
            } else
              n.currentAttributes.set(c, a);
            break;
          }
          default:
            r < n.right.length && pt(t, j(n.right.id.client, n.right.id.clock + r)), r -= n.right.length;
            break;
        }
      n.forward();
    }
  if (r > 0) {
    let c = "";
    for (; r > 0; r--)
      c += `
`;
    n.right = new ue(j(o, Te(s.store, o)), n.left, n.left && n.left.lastId, n.right, n.right && n.right.id, e, null, new xn(c)), n.right.integrate(t, 0), n.forward();
  }
  Ak(t, e, n, l);
}, Tk = (t, e, n, r, i) => {
  let s = e;
  const o = jt();
  for (; s && (!s.countable || s.deleted); ) {
    if (!s.deleted && s.content.constructor === Pe) {
      const a = s.content;
      o.set(a.key, a);
    }
    s = s.right;
  }
  let l = 0, c = !1;
  for (; e !== s; ) {
    if (n === e && (c = !0), !e.deleted) {
      const a = e.content;
      switch (a.constructor) {
        case Pe: {
          const { key: h, value: u } = a, f = r.get(h) || null;
          (o.get(h) !== a || f === u) && (e.delete(t), l++, !c && (i.get(h) || null) === u && f !== u && (f === null ? i.delete(h) : i.set(h, f))), !c && !e.deleted && ws(i, a);
          break;
        }
      }
    }
    e = e.right;
  }
  return l;
}, U0e = (t, e) => {
  for (; e && e.right && (e.right.deleted || !e.right.countable); )
    e = e.right;
  const n = /* @__PURE__ */ new Set();
  for (; e && (e.deleted || !e.countable); ) {
    if (!e.deleted && e.content.constructor === Pe) {
      const r = e.content.key;
      n.has(r) ? e.delete(t) : n.add(r);
    }
    e = e.left;
  }
}, W0e = (t) => {
  let e = 0;
  return he(t.doc, (n) => {
    let r = t._start, i = t._start, s = jt();
    const o = xf(s);
    for (; i; ) {
      if (i.deleted === !1)
        switch (i.content.constructor) {
          case Pe:
            ws(o, i.content);
            break;
          default:
            e += Tk(n, r, i, s, o), s = xf(o), r = i;
            break;
        }
      i = i.right;
    }
  }), e;
}, j0e = (t) => {
  const e = /* @__PURE__ */ new Set(), n = t.doc;
  for (const [r, i] of t.afterState.entries()) {
    const s = t.beforeState.get(r) || 0;
    i !== s && fk(t, n.store.clients.get(r), s, i, (o) => {
      !o.deleted && o.content.constructor === Pe && o.constructor !== Tt && e.add(o.parent);
    });
  }
  he(n, (r) => {
    ts(t, t.deleteSet, (i) => {
      if (i instanceof Tt || !i.parent._hasFormatting || e.has(i.parent))
        return;
      const s = i.parent;
      i.content.constructor === Pe ? e.add(s) : U0e(r, i);
    });
    for (const i of e)
      W0e(i);
  });
}, My = (t, e, n) => {
  const r = n, i = xf(e.currentAttributes), s = e.right;
  for (; n > 0 && e.right !== null; ) {
    if (e.right.deleted === !1)
      switch (e.right.content.constructor) {
        case En:
        case oi:
        case xn:
          n < e.right.length && pt(t, j(e.right.id.client, e.right.id.clock + n)), n -= e.right.length, e.right.delete(t);
          break;
      }
    e.forward();
  }
  s && Tk(t, s, e.right, i, e.currentAttributes);
  const o = (e.left || e.right).parent;
  return o._searchMarker && _o(o._searchMarker, e.index, -r + n), e;
};
class G0e extends Ta {
  constructor(e, n, r) {
    super(e, n), this.childListChanged = !1, this.keysChanged = /* @__PURE__ */ new Set(), r.forEach((i) => {
      i === null ? this.childListChanged = !0 : this.keysChanged.add(i);
    });
  }
  get changes() {
    if (this._changes === null) {
      const e = {
        keys: this.keys,
        delta: this.delta,
        added: /* @__PURE__ */ new Set(),
        deleted: /* @__PURE__ */ new Set()
      };
      this._changes = e;
    }
    return this._changes;
  }
  get delta() {
    if (this._delta === null) {
      const e = this.target.doc, n = [];
      he(e, (r) => {
        const i = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map();
        let o = this.target._start, l = null;
        const c = {};
        let a = "", h = 0, u = 0;
        const f = () => {
          if (l !== null) {
            let d = null;
            switch (l) {
              case "delete":
                u > 0 && (d = { delete: u }), u = 0;
                break;
              case "insert":
                (typeof a == "object" || a.length > 0) && (d = { insert: a }, i.size > 0 && (d.attributes = {}, i.forEach((p, g) => {
                  p !== null && (d.attributes[g] = p);
                }))), a = "";
                break;
              case "retain":
                h > 0 && (d = { retain: h }, Yge(c) || (d.attributes = Uge({}, c))), h = 0;
                break;
            }
            d && n.push(d), l = null;
          }
        };
        for (; o !== null; ) {
          switch (o.content.constructor) {
            case En:
            case oi:
              this.adds(o) ? this.deletes(o) || (f(), l = "insert", a = o.content.getContent()[0], f()) : this.deletes(o) ? (l !== "delete" && (f(), l = "delete"), u += 1) : o.deleted || (l !== "retain" && (f(), l = "retain"), h += 1);
              break;
            case xn:
              this.adds(o) ? this.deletes(o) || (l !== "insert" && (f(), l = "insert"), a += o.content.str) : this.deletes(o) ? (l !== "delete" && (f(), l = "delete"), u += o.length) : o.deleted || (l !== "retain" && (f(), l = "retain"), h += o.length);
              break;
            case Pe: {
              const { key: d, value: p } = o.content;
              if (this.adds(o)) {
                if (!this.deletes(o)) {
                  const g = i.get(d) || null;
                  sr(g, p) ? p !== null && o.delete(r) : (l === "retain" && f(), sr(p, s.get(d) || null) ? delete c[d] : c[d] = p);
                }
              } else if (this.deletes(o)) {
                s.set(d, p);
                const g = i.get(d) || null;
                sr(g, p) || (l === "retain" && f(), c[d] = g);
              } else if (!o.deleted) {
                s.set(d, p);
                const g = c[d];
                g !== void 0 && (sr(g, p) ? g !== null && o.delete(r) : (l === "retain" && f(), p === null ? delete c[d] : c[d] = p));
              }
              o.deleted || (l === "insert" && f(), ws(i, o.content));
              break;
            }
          }
          o = o.right;
        }
        for (f(); n.length > 0; ) {
          const d = n[n.length - 1];
          if (d.retain !== void 0 && d.attributes === void 0)
            n.pop();
          else
            break;
        }
      }), this._delta = n;
    }
    return this._delta;
  }
}
class is extends Ge {
  constructor(e) {
    super(), this._pending = e !== void 0 ? [() => this.insert(0, e)] : [], this._searchMarker = [], this._hasFormatting = !1;
  }
  get length() {
    return this._length;
  }
  _integrate(e, n) {
    super._integrate(e, n);
    try {
      this._pending.forEach((r) => r());
    } catch (r) {
      console.error(r);
    }
    this._pending = null;
  }
  _copy() {
    return new is();
  }
  clone() {
    const e = new is();
    return e.applyDelta(this.toDelta()), e;
  }
  _callObserver(e, n) {
    super._callObserver(e, n);
    const r = new G0e(this, e, n);
    Oa(this, e, r), !e.local && this._hasFormatting && (e._needFormattingCleanup = !0);
  }
  toString() {
    let e = "", n = this._start;
    for (; n !== null; )
      !n.deleted && n.countable && n.content.constructor === xn && (e += n.content.str), n = n.right;
    return e;
  }
  toJSON() {
    return this.toString();
  }
  applyDelta(e, { sanitize: n = !0 } = {}) {
    this.doc !== null ? he(this.doc, (r) => {
      const i = new Rf(null, this._start, 0, /* @__PURE__ */ new Map());
      for (let s = 0; s < e.length; s++) {
        const o = e[s];
        if (o.insert !== void 0) {
          const l = !n && typeof o.insert == "string" && s === e.length - 1 && i.right === null && o.insert.slice(-1) === `
` ? o.insert.slice(0, -1) : o.insert;
          (typeof l != "string" || l.length > 0) && Jh(r, this, i, l, o.attributes || {});
        } else
          o.retain !== void 0 ? Ty(r, this, i, o.retain, o.attributes || {}) : o.delete !== void 0 && My(r, i, o.delete);
      }
    }) : this._pending.push(() => this.applyDelta(e));
  }
  toDelta(e, n, r) {
    const i = [], s = /* @__PURE__ */ new Map(), o = this.doc;
    let l = "", c = this._start;
    function a() {
      if (l.length > 0) {
        const u = {};
        let f = !1;
        s.forEach((p, g) => {
          f = !0, u[g] = p;
        });
        const d = { insert: l };
        f && (d.attributes = u), i.push(d), l = "";
      }
    }
    const h = () => {
      for (; c !== null; ) {
        if (Ds(c, e) || n !== void 0 && Ds(c, n))
          switch (c.content.constructor) {
            case xn: {
              const u = s.get("ychange");
              e !== void 0 && !Ds(c, e) ? (u === void 0 || u.user !== c.id.client || u.type !== "removed") && (a(), s.set("ychange", r ? r("removed", c.id) : { type: "removed" })) : n !== void 0 && !Ds(c, n) ? (u === void 0 || u.user !== c.id.client || u.type !== "added") && (a(), s.set("ychange", r ? r("added", c.id) : { type: "added" })) : u !== void 0 && (a(), s.delete("ychange")), l += c.content.str;
              break;
            }
            case En:
            case oi: {
              a();
              const u = {
                insert: c.content.getContent()[0]
              };
              if (s.size > 0) {
                const f = {};
                u.attributes = f, s.forEach((d, p) => {
                  f[p] = d;
                });
              }
              i.push(u);
              break;
            }
            case Pe:
              Ds(c, e) && (a(), ws(s, c.content));
              break;
          }
        c = c.right;
      }
      a();
    };
    return e || n ? he(o, (u) => {
      e && Of(u, e), n && Of(u, n), h();
    }, "cleanup") : h(), i;
  }
  insert(e, n, r) {
    if (n.length <= 0)
      return;
    const i = this.doc;
    i !== null ? he(i, (s) => {
      const o = Cl(s, this, e);
      r || (r = {}, o.currentAttributes.forEach((l, c) => {
        r[c] = l;
      })), Jh(s, this, o, n, r);
    }) : this._pending.push(() => this.insert(e, n, r));
  }
  insertEmbed(e, n, r = {}) {
    const i = this.doc;
    i !== null ? he(i, (s) => {
      const o = Cl(s, this, e);
      Jh(s, this, o, n, r);
    }) : this._pending.push(() => this.insertEmbed(e, n, r));
  }
  delete(e, n) {
    if (n === 0)
      return;
    const r = this.doc;
    r !== null ? he(r, (i) => {
      My(i, Cl(i, this, e), n);
    }) : this._pending.push(() => this.delete(e, n));
  }
  format(e, n, r) {
    if (n === 0)
      return;
    const i = this.doc;
    i !== null ? he(i, (s) => {
      const o = Cl(s, this, e);
      o.right !== null && Ty(s, this, o, n, r);
    }) : this._pending.push(() => this.format(e, n, r));
  }
  removeAttribute(e) {
    this.doc !== null ? he(this.doc, (n) => {
      qc(n, this, e);
    }) : this._pending.push(() => this.removeAttribute(e));
  }
  setAttribute(e, n) {
    this.doc !== null ? he(this.doc, (r) => {
      lp(r, this, e, n);
    }) : this._pending.push(() => this.setAttribute(e, n));
  }
  getAttribute(e) {
    return cp(this, e);
  }
  getAttributes() {
    return Sk(this);
  }
  _write(e) {
    e.writeTypeRef(fye);
  }
}
const Y0e = (t) => new is();
class Zh {
  constructor(e, n = () => !0) {
    this._filter = n, this._root = e, this._currentNode = e._start, this._firstCall = !0;
  }
  [Symbol.iterator]() {
    return this;
  }
  next() {
    let e = this._currentNode, n = e && e.content && e.content.type;
    if (e !== null && (!this._firstCall || e.deleted || !this._filter(n)))
      do
        if (n = e.content.type, !e.deleted && (n.constructor === Co || n.constructor === ni) && n._start !== null)
          e = n._start;
        else
          for (; e !== null; )
            if (e.right !== null) {
              e = e.right;
              break;
            } else
              e.parent === this._root ? e = null : e = e.parent._item;
      while (e !== null && (e.deleted || !this._filter(e.content.type)));
    return this._firstCall = !1, e === null ? { value: void 0, done: !0 } : (this._currentNode = e, { value: e.content.type, done: !1 });
  }
}
class ni extends Ge {
  constructor() {
    super(), this._prelimContent = [];
  }
  get firstChild() {
    const e = this._first;
    return e ? e.content.getContent()[0] : null;
  }
  _integrate(e, n) {
    super._integrate(e, n), this.insert(0, this._prelimContent), this._prelimContent = null;
  }
  _copy() {
    return new ni();
  }
  clone() {
    const e = new ni();
    return e.insert(0, this.toArray().map((n) => n instanceof Ge ? n.clone() : n)), e;
  }
  get length() {
    return this._prelimContent === null ? this._length : this._prelimContent.length;
  }
  createTreeWalker(e) {
    return new Zh(this, e);
  }
  querySelector(e) {
    e = e.toUpperCase();
    const r = new Zh(this, (i) => i.nodeName && i.nodeName.toUpperCase() === e).next();
    return r.done ? null : r.value;
  }
  querySelectorAll(e) {
    return e = e.toUpperCase(), wr(new Zh(this, (n) => n.nodeName && n.nodeName.toUpperCase() === e));
  }
  _callObserver(e, n) {
    Oa(this, e, new Z0e(this, n, e));
  }
  toString() {
    return wk(this, (e) => e.toString()).join("");
  }
  toJSON() {
    return this.toString();
  }
  toDOM(e = document, n = {}, r) {
    const i = e.createDocumentFragment();
    return r !== void 0 && r._createAssociation(i, this), So(this, (s) => {
      i.insertBefore(s.toDOM(e, n, r), null);
    }), i;
  }
  insert(e, n) {
    this.doc !== null ? he(this.doc, (r) => {
      kk(r, this, e, n);
    }) : this._prelimContent.splice(e, 0, ...n);
  }
  insertAfter(e, n) {
    if (this.doc !== null)
      he(this.doc, (r) => {
        const i = e && e instanceof Ge ? e._item : e;
        Bc(r, this, i, n);
      });
    else {
      const r = this._prelimContent, i = e === null ? 0 : r.findIndex((s) => s === e) + 1;
      if (i === 0 && e !== null)
        throw vr("Reference item not found");
      r.splice(i, 0, ...n);
    }
  }
  delete(e, n = 1) {
    this.doc !== null ? he(this.doc, (r) => {
      _k(r, this, e, n);
    }) : this._prelimContent.splice(e, n);
  }
  toArray() {
    return bk(this);
  }
  push(e) {
    this.insert(this.length, e);
  }
  unshift(e) {
    this.insert(0, e);
  }
  get(e) {
    return vk(this, e);
  }
  slice(e = 0, n = this.length) {
    return yk(this, e, n);
  }
  forEach(e) {
    So(this, e);
  }
  _write(e) {
    e.writeTypeRef(pye);
  }
}
const K0e = (t) => new ni();
class Co extends ni {
  constructor(e = "UNDEFINED") {
    super(), this.nodeName = e, this._prelimAttrs = /* @__PURE__ */ new Map();
  }
  get nextSibling() {
    const e = this._item ? this._item.next : null;
    return e ? e.content.type : null;
  }
  get prevSibling() {
    const e = this._item ? this._item.prev : null;
    return e ? e.content.type : null;
  }
  _integrate(e, n) {
    super._integrate(e, n), this._prelimAttrs.forEach((r, i) => {
      this.setAttribute(i, r);
    }), this._prelimAttrs = null;
  }
  _copy() {
    return new Co(this.nodeName);
  }
  clone() {
    const e = new Co(this.nodeName), n = this.getAttributes();
    return jge(n, (r, i) => {
      typeof r == "string" && e.setAttribute(i, r);
    }), e.insert(0, this.toArray().map((r) => r instanceof Ge ? r.clone() : r)), e;
  }
  toString() {
    const e = this.getAttributes(), n = [], r = [];
    for (const l in e)
      r.push(l);
    r.sort();
    const i = r.length;
    for (let l = 0; l < i; l++) {
      const c = r[l];
      n.push(c + '="' + e[c] + '"');
    }
    const s = this.nodeName.toLocaleLowerCase(), o = n.length > 0 ? " " + n.join(" ") : "";
    return `<${s}${o}>${super.toString()}</${s}>`;
  }
  removeAttribute(e) {
    this.doc !== null ? he(this.doc, (n) => {
      qc(n, this, e);
    }) : this._prelimAttrs.delete(e);
  }
  setAttribute(e, n) {
    this.doc !== null ? he(this.doc, (r) => {
      lp(r, this, e, n);
    }) : this._prelimAttrs.set(e, n);
  }
  getAttribute(e) {
    return cp(this, e);
  }
  hasAttribute(e) {
    return Ck(this, e);
  }
  getAttributes() {
    return Sk(this);
  }
  toDOM(e = document, n = {}, r) {
    const i = e.createElement(this.nodeName), s = this.getAttributes();
    for (const o in s) {
      const l = s[o];
      typeof l == "string" && i.setAttribute(o, l);
    }
    return So(this, (o) => {
      i.appendChild(o.toDOM(e, n, r));
    }), r !== void 0 && r._createAssociation(i, this), i;
  }
  _write(e) {
    e.writeTypeRef(dye), e.writeKey(this.nodeName);
  }
}
const J0e = (t) => new Co(t.readKey());
class Z0e extends Ta {
  constructor(e, n, r) {
    super(e, r), this.childListChanged = !1, this.attributesChanged = /* @__PURE__ */ new Set(), n.forEach((i) => {
      i === null ? this.childListChanged = !0 : this.attributesChanged.add(i);
    });
  }
}
class $c extends rs {
  constructor(e) {
    super(), this.hookName = e;
  }
  _copy() {
    return new $c(this.hookName);
  }
  clone() {
    const e = new $c(this.hookName);
    return this.forEach((n, r) => {
      e.set(r, n);
    }), e;
  }
  toDOM(e = document, n = {}, r) {
    const i = n[this.hookName];
    let s;
    return i !== void 0 ? s = i.createDom(this) : s = document.createElement(this.hookName), s.setAttribute("data-yjs-hook", this.hookName), r !== void 0 && r._createAssociation(s, this), s;
  }
  _write(e) {
    e.writeTypeRef(gye), e.writeKey(this.hookName);
  }
}
const X0e = (t) => new $c(t.readKey());
class Hc extends is {
  get nextSibling() {
    const e = this._item ? this._item.next : null;
    return e ? e.content.type : null;
  }
  get prevSibling() {
    const e = this._item ? this._item.prev : null;
    return e ? e.content.type : null;
  }
  _copy() {
    return new Hc();
  }
  clone() {
    const e = new Hc();
    return e.applyDelta(this.toDelta()), e;
  }
  toDOM(e = document, n, r) {
    const i = e.createTextNode(this.toString());
    return r !== void 0 && r._createAssociation(i, this), i;
  }
  toString() {
    return this.toDelta().map((e) => {
      const n = [];
      for (const i in e.attributes) {
        const s = [];
        for (const o in e.attributes[i])
          s.push({ key: o, value: e.attributes[i][o] });
        s.sort((o, l) => o.key < l.key ? -1 : 1), n.push({ nodeName: i, attrs: s });
      }
      n.sort((i, s) => i.nodeName < s.nodeName ? -1 : 1);
      let r = "";
      for (let i = 0; i < n.length; i++) {
        const s = n[i];
        r += `<${s.nodeName}`;
        for (let o = 0; o < s.attrs.length; o++) {
          const l = s.attrs[o];
          r += ` ${l.key}="${l.value}"`;
        }
        r += ">";
      }
      r += e.insert;
      for (let i = n.length - 1; i >= 0; i--)
        r += `</${n[i].nodeName}>`;
      return r;
    }).join("");
  }
  toJSON() {
    return this.toString();
  }
  _write(e) {
    e.writeTypeRef(mye);
  }
}
const Q0e = (t) => new Hc();
class ap {
  constructor(e, n) {
    this.id = e, this.length = n;
  }
  get deleted() {
    throw bn();
  }
  mergeWith(e) {
    return !1;
  }
  write(e, n, r) {
    throw bn();
  }
  integrate(e, n) {
    throw bn();
  }
}
const eye = 0;
class Tt extends ap {
  get deleted() {
    return !0;
  }
  delete() {
  }
  mergeWith(e) {
    return this.constructor !== e.constructor ? !1 : (this.length += e.length, !0);
  }
  integrate(e, n) {
    n > 0 && (this.id.clock += n, this.length -= n), uk(e.doc.store, this);
  }
  write(e, n) {
    e.writeInfo(eye), e.writeLen(this.length - n);
  }
  getMissing(e, n) {
    return null;
  }
}
class Bo {
  constructor(e) {
    this.content = e;
  }
  getLength() {
    return 1;
  }
  getContent() {
    return [this.content];
  }
  isCountable() {
    return !0;
  }
  copy() {
    return new Bo(this.content);
  }
  splice(e) {
    throw bn();
  }
  mergeWith(e) {
    return !1;
  }
  integrate(e, n) {
  }
  delete(e) {
  }
  gc(e) {
  }
  write(e, n) {
    e.writeBuf(this.content);
  }
  getRef() {
    return 3;
  }
}
const tye = (t) => new Bo(t.readBuf());
class Ao {
  constructor(e) {
    this.len = e;
  }
  getLength() {
    return this.len;
  }
  getContent() {
    return [];
  }
  isCountable() {
    return !1;
  }
  copy() {
    return new Ao(this.len);
  }
  splice(e) {
    const n = new Ao(this.len - e);
    return this.len = e, n;
  }
  mergeWith(e) {
    return this.len += e.len, !0;
  }
  integrate(e, n) {
    xo(e.deleteSet, n.id.client, n.id.clock, this.len), n.markDeleted();
  }
  delete(e) {
  }
  gc(e) {
  }
  write(e, n) {
    e.writeLen(this.len - n);
  }
  getRef() {
    return 1;
  }
}
const nye = (t) => new Ao(t.readLen()), Mk = (t, e) => new bs({ guid: t, ...e, shouldLoad: e.shouldLoad || e.autoLoad || !1 });
class qo {
  constructor(e) {
    e._item && console.error("This document was already integrated as a sub-document. You should create a second instance instead with the same guid."), this.doc = e;
    const n = {};
    this.opts = n, e.gc || (n.gc = !1), e.autoLoad && (n.autoLoad = !0), e.meta !== null && (n.meta = e.meta);
  }
  getLength() {
    return 1;
  }
  getContent() {
    return [this.doc];
  }
  isCountable() {
    return !0;
  }
  copy() {
    return new qo(Mk(this.doc.guid, this.opts));
  }
  splice(e) {
    throw bn();
  }
  mergeWith(e) {
    return !1;
  }
  integrate(e, n) {
    this.doc._item = n, e.subdocsAdded.add(this.doc), this.doc.shouldLoad && e.subdocsLoaded.add(this.doc);
  }
  delete(e) {
    e.subdocsAdded.has(this.doc) ? e.subdocsAdded.delete(this.doc) : e.subdocsRemoved.add(this.doc);
  }
  gc(e) {
  }
  write(e, n) {
    e.writeString(this.doc.guid), e.writeAny(this.opts);
  }
  getRef() {
    return 9;
  }
}
const rye = (t) => new qo(Mk(t.readString(), t.readAny()));
class oi {
  constructor(e) {
    this.embed = e;
  }
  getLength() {
    return 1;
  }
  getContent() {
    return [this.embed];
  }
  isCountable() {
    return !0;
  }
  copy() {
    return new oi(this.embed);
  }
  splice(e) {
    throw bn();
  }
  mergeWith(e) {
    return !1;
  }
  integrate(e, n) {
  }
  delete(e) {
  }
  gc(e) {
  }
  write(e, n) {
    e.writeJSON(this.embed);
  }
  getRef() {
    return 5;
  }
}
const iye = (t) => new oi(t.readJSON());
class Pe {
  constructor(e, n) {
    this.key = e, this.value = n;
  }
  getLength() {
    return 1;
  }
  getContent() {
    return [];
  }
  isCountable() {
    return !1;
  }
  copy() {
    return new Pe(this.key, this.value);
  }
  splice(e) {
    throw bn();
  }
  mergeWith(e) {
    return !1;
  }
  integrate(e, n) {
    const r = n.parent;
    r._searchMarker = null, r._hasFormatting = !0;
  }
  delete(e) {
  }
  gc(e) {
  }
  write(e, n) {
    e.writeKey(this.key), e.writeJSON(this.value);
  }
  getRef() {
    return 6;
  }
}
const sye = (t) => new Pe(t.readKey(), t.readJSON());
class zc {
  constructor(e) {
    this.arr = e;
  }
  getLength() {
    return this.arr.length;
  }
  getContent() {
    return this.arr;
  }
  isCountable() {
    return !0;
  }
  copy() {
    return new zc(this.arr);
  }
  splice(e) {
    const n = new zc(this.arr.slice(e));
    return this.arr = this.arr.slice(0, e), n;
  }
  mergeWith(e) {
    return this.arr = this.arr.concat(e.arr), !0;
  }
  integrate(e, n) {
  }
  delete(e) {
  }
  gc(e) {
  }
  write(e, n) {
    const r = this.arr.length;
    e.writeLen(r - n);
    for (let i = n; i < r; i++) {
      const s = this.arr[i];
      e.writeString(s === void 0 ? "undefined" : JSON.stringify(s));
    }
  }
  getRef() {
    return 2;
  }
}
const oye = (t) => {
  const e = t.readLen(), n = [];
  for (let r = 0; r < e; r++) {
    const i = t.readString();
    i === "undefined" ? n.push(void 0) : n.push(JSON.parse(i));
  }
  return new zc(n);
};
class ri {
  constructor(e) {
    this.arr = e;
  }
  getLength() {
    return this.arr.length;
  }
  getContent() {
    return this.arr;
  }
  isCountable() {
    return !0;
  }
  copy() {
    return new ri(this.arr);
  }
  splice(e) {
    const n = new ri(this.arr.slice(e));
    return this.arr = this.arr.slice(0, e), n;
  }
  mergeWith(e) {
    return this.arr = this.arr.concat(e.arr), !0;
  }
  integrate(e, n) {
  }
  delete(e) {
  }
  gc(e) {
  }
  write(e, n) {
    const r = this.arr.length;
    e.writeLen(r - n);
    for (let i = n; i < r; i++) {
      const s = this.arr[i];
      e.writeAny(s);
    }
  }
  getRef() {
    return 8;
  }
}
const lye = (t) => {
  const e = t.readLen(), n = [];
  for (let r = 0; r < e; r++)
    n.push(t.readAny());
  return new ri(n);
};
class xn {
  constructor(e) {
    this.str = e;
  }
  getLength() {
    return this.str.length;
  }
  getContent() {
    return this.str.split("");
  }
  isCountable() {
    return !0;
  }
  copy() {
    return new xn(this.str);
  }
  splice(e) {
    const n = new xn(this.str.slice(e));
    this.str = this.str.slice(0, e);
    const r = this.str.charCodeAt(e - 1);
    return r >= 55296 && r <= 56319 && (this.str = this.str.slice(0, e - 1) + "\uFFFD", n.str = "\uFFFD" + n.str.slice(1)), n;
  }
  mergeWith(e) {
    return this.str += e.str, !0;
  }
  integrate(e, n) {
  }
  delete(e) {
  }
  gc(e) {
  }
  write(e, n) {
    e.writeString(n === 0 ? this.str : this.str.slice(n));
  }
  getRef() {
    return 4;
  }
}
const cye = (t) => new xn(t.readString()), aye = [
  H0e,
  V0e,
  Y0e,
  J0e,
  K0e,
  X0e,
  Q0e
], hye = 0, uye = 1, fye = 2, dye = 3, pye = 4, gye = 5, mye = 6;
class En {
  constructor(e) {
    this.type = e;
  }
  getLength() {
    return 1;
  }
  getContent() {
    return [this.type];
  }
  isCountable() {
    return !0;
  }
  copy() {
    return new En(this.type._copy());
  }
  splice(e) {
    throw bn();
  }
  mergeWith(e) {
    return !1;
  }
  integrate(e, n) {
    this.type._integrate(e.doc, n);
  }
  delete(e) {
    let n = this.type._start;
    for (; n !== null; )
      n.deleted ? n.id.clock < (e.beforeState.get(n.id.client) || 0) && e._mergeStructs.push(n) : n.delete(e), n = n.right;
    this.type._map.forEach((r) => {
      r.deleted ? r.id.clock < (e.beforeState.get(r.id.client) || 0) && e._mergeStructs.push(r) : r.delete(e);
    }), e.changed.delete(this.type);
  }
  gc(e) {
    let n = this.type._start;
    for (; n !== null; )
      n.gc(e, !0), n = n.right;
    this.type._start = null, this.type._map.forEach((r) => {
      for (; r !== null; )
        r.gc(e, !0), r = r.left;
    }), this.type._map = /* @__PURE__ */ new Map();
  }
  write(e, n) {
    this.type._write(e);
  }
  getRef() {
    return 7;
  }
}
const yye = (t) => new En(aye[t.readTypeRef()](t)), If = (t, e) => {
  let n = e, r = 0, i;
  do
    r > 0 && (n = j(n.client, n.clock + r)), i = Yl(t, n), r = n.clock - i.id.clock, n = i.redone;
  while (n !== null && i instanceof ue);
  return {
    item: i,
    diff: r
  };
}, hp = (t, e) => {
  for (; t !== null && t.keep !== e; )
    t.keep = e, t = t.parent._item;
}, Vc = (t, e, n) => {
  const { client: r, clock: i } = e.id, s = new ue(
    j(r, i + n),
    e,
    j(r, i + n - 1),
    e.right,
    e.rightOrigin,
    e.parent,
    e.parentSub,
    e.content.splice(n)
  );
  return e.deleted && s.markDeleted(), e.keep && (s.keep = !0), e.redone !== null && (s.redone = j(e.redone.client, e.redone.clock + n)), e.right = s, s.right !== null && (s.right.left = s), t._mergeStructs.push(s), s.parentSub !== null && s.right === null && s.parent._map.set(s.parentSub, s), e.length = n, s;
}, Oy = (t, e) => Oge(t, (n) => Po(n.deletions, e)), Ok = (t, e, n, r, i, s) => {
  const o = t.doc, l = o.store, c = o.clientID, a = e.redone;
  if (a !== null)
    return pt(t, a);
  let h = e.parent._item, u = null, f;
  if (h !== null && h.deleted === !0) {
    if (h.redone === null && (!n.has(h) || Ok(t, h, n, r, i, s) === null))
      return null;
    for (; h.redone !== null; )
      h = pt(t, h.redone);
  }
  const d = h === null ? e.parent : h.content.type;
  if (e.parentSub === null) {
    for (u = e.left, f = e; u !== null; ) {
      let y = u;
      for (; y !== null && y.parent._item !== h; )
        y = y.redone === null ? null : pt(t, y.redone);
      if (y !== null && y.parent._item === h) {
        u = y;
        break;
      }
      u = u.left;
    }
    for (; f !== null; ) {
      let y = f;
      for (; y !== null && y.parent._item !== h; )
        y = y.redone === null ? null : pt(t, y.redone);
      if (y !== null && y.parent._item === h) {
        f = y;
        break;
      }
      f = f.right;
    }
  } else if (f = null, e.right && !i) {
    for (u = e; u !== null && u.right !== null && (u.right.redone || Po(r, u.right.id) || Oy(s.undoStack, u.right.id) || Oy(s.redoStack, u.right.id)); )
      for (u = u.right; u.redone; )
        u = pt(t, u.redone);
    if (u && u.right !== null)
      return null;
  } else
    u = d._map.get(e.parentSub) || null;
  const p = Te(l, c), g = j(c, p), m = new ue(
    g,
    u,
    u && u.lastId,
    f,
    f && f.id,
    d,
    e.parentSub,
    e.content.copy()
  );
  return e.redone = g, hp(m, !0), m.integrate(t, 0), m;
};
class ue extends ap {
  constructor(e, n, r, i, s, o, l, c) {
    super(e, c.getLength()), this.origin = r, this.left = n, this.right = i, this.rightOrigin = s, this.parent = o, this.parentSub = l, this.redone = null, this.content = c, this.info = this.content.isCountable() ? ay : 0;
  }
  set marker(e) {
    (this.info & Wh) > 0 !== e && (this.info ^= Wh);
  }
  get marker() {
    return (this.info & Wh) > 0;
  }
  get keep() {
    return (this.info & cy) > 0;
  }
  set keep(e) {
    this.keep !== e && (this.info ^= cy);
  }
  get countable() {
    return (this.info & ay) > 0;
  }
  get deleted() {
    return (this.info & Uh) > 0;
  }
  set deleted(e) {
    this.deleted !== e && (this.info ^= Uh);
  }
  markDeleted() {
    this.info |= Uh;
  }
  getMissing(e, n) {
    if (this.origin && this.origin.client !== this.id.client && this.origin.clock >= Te(n, this.origin.client))
      return this.origin.client;
    if (this.rightOrigin && this.rightOrigin.client !== this.id.client && this.rightOrigin.clock >= Te(n, this.rightOrigin.client))
      return this.rightOrigin.client;
    if (this.parent && this.parent.constructor === Pi && this.id.client !== this.parent.client && this.parent.clock >= Te(n, this.parent.client))
      return this.parent.client;
    if (this.origin && (this.left = ky(e, n, this.origin), this.origin = this.left.lastId), this.rightOrigin && (this.right = pt(e, this.rightOrigin), this.rightOrigin = this.right.id), (this.left && this.left.constructor === Tt || this.right && this.right.constructor === Tt) && (this.parent = null), !this.parent)
      this.left && this.left.constructor === ue && (this.parent = this.left.parent, this.parentSub = this.left.parentSub), this.right && this.right.constructor === ue && (this.parent = this.right.parent, this.parentSub = this.right.parentSub);
    else if (this.parent.constructor === Pi) {
      const r = Yl(n, this.parent);
      r.constructor === Tt ? this.parent = null : this.parent = r.content.type;
    }
    return null;
  }
  integrate(e, n) {
    if (n > 0 && (this.id.clock += n, this.left = ky(e, e.doc.store, j(this.id.client, this.id.clock - 1)), this.origin = this.left.lastId, this.content = this.content.splice(n), this.length -= n), this.parent) {
      if (!this.left && (!this.right || this.right.left !== null) || this.left && this.left.right !== this.right) {
        let r = this.left, i;
        if (r !== null)
          i = r.right;
        else if (this.parentSub !== null)
          for (i = this.parent._map.get(this.parentSub) || null; i !== null && i.left !== null; )
            i = i.left;
        else
          i = this.parent._start;
        const s = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set();
        for (; i !== null && i !== this.right; ) {
          if (o.add(i), s.add(i), Ei(this.origin, i.origin)) {
            if (i.id.client < this.id.client)
              r = i, s.clear();
            else if (Ei(this.rightOrigin, i.rightOrigin))
              break;
          } else if (i.origin !== null && o.has(Yl(e.doc.store, i.origin)))
            s.has(Yl(e.doc.store, i.origin)) || (r = i, s.clear());
          else
            break;
          i = i.right;
        }
        this.left = r;
      }
      if (this.left !== null) {
        const r = this.left.right;
        this.right = r, this.left.right = this;
      } else {
        let r;
        if (this.parentSub !== null)
          for (r = this.parent._map.get(this.parentSub) || null; r !== null && r.left !== null; )
            r = r.left;
        else
          r = this.parent._start, this.parent._start = this;
        this.right = r;
      }
      this.right !== null ? this.right.left = this : this.parentSub !== null && (this.parent._map.set(this.parentSub, this), this.left !== null && this.left.delete(e)), this.parentSub === null && this.countable && !this.deleted && (this.parent._length += this.length), uk(e.doc.store, this), this.content.integrate(e, this), Sy(e, this.parent, this.parentSub), (this.parent._item !== null && this.parent._item.deleted || this.parentSub !== null && this.right !== null) && this.delete(e);
    } else
      new Tt(this.id, this.length).integrate(e, 0);
  }
  get next() {
    let e = this.right;
    for (; e !== null && e.deleted; )
      e = e.right;
    return e;
  }
  get prev() {
    let e = this.left;
    for (; e !== null && e.deleted; )
      e = e.left;
    return e;
  }
  get lastId() {
    return this.length === 1 ? this.id : j(this.id.client, this.id.clock + this.length - 1);
  }
  mergeWith(e) {
    if (this.constructor === e.constructor && Ei(e.origin, this.lastId) && this.right === e && Ei(this.rightOrigin, e.rightOrigin) && this.id.client === e.id.client && this.id.clock + this.length === e.id.clock && this.deleted === e.deleted && this.redone === null && e.redone === null && this.content.constructor === e.content.constructor && this.content.mergeWith(e.content)) {
      const n = this.parent._searchMarker;
      return n && n.forEach((r) => {
        r.p === e && (r.p = this, !this.deleted && this.countable && (r.index -= this.length));
      }), e.keep && (this.keep = !0), this.right = e.right, this.right !== null && (this.right.left = this), this.length += e.length, !0;
    }
    return !1;
  }
  delete(e) {
    if (!this.deleted) {
      const n = this.parent;
      this.countable && this.parentSub === null && (n._length -= this.length), this.markDeleted(), xo(e.deleteSet, this.id.client, this.id.clock, this.length), Sy(e, n, this.parentSub), this.content.delete(e);
    }
  }
  gc(e, n) {
    if (!this.deleted)
      throw Kt();
    this.content.gc(e), n ? _0e(e, this, new Tt(this.id, this.length)) : this.content = new Ao(this.length);
  }
  write(e, n) {
    const r = n > 0 ? j(this.id.client, this.id.clock + n - 1) : this.origin, i = this.rightOrigin, s = this.parentSub, o = this.content.getRef() & Ca | (r === null ? 0 : At) | (i === null ? 0 : Pn) | (s === null ? 0 : bo);
    if (e.writeInfo(o), r !== null && e.writeLeftID(r), i !== null && e.writeRightID(i), r === null && i === null) {
      const l = this.parent;
      if (l._item !== void 0) {
        const c = l._item;
        if (c === null) {
          const a = ck(l);
          e.writeParentInfo(!0), e.writeString(a);
        } else
          e.writeParentInfo(!1), e.writeLeftID(c.id);
      } else
        l.constructor === String ? (e.writeParentInfo(!0), e.writeString(l)) : l.constructor === Pi ? (e.writeParentInfo(!1), e.writeLeftID(l)) : Kt();
      s !== null && e.writeString(s);
    }
    this.content.write(e, n);
  }
}
const Lk = (t, e) => bye[e & Ca](t), bye = [
  () => {
    Kt();
  },
  nye,
  oye,
  tye,
  cye,
  iye,
  sye,
  yye,
  lye,
  rye,
  () => {
    Kt();
  }
], wye = 10;
class Mt extends ap {
  get deleted() {
    return !0;
  }
  delete() {
  }
  mergeWith(e) {
    return this.constructor !== e.constructor ? !1 : (this.length += e.length, !0);
  }
  integrate(e, n) {
    Kt();
  }
  write(e, n) {
    e.writeInfo(wye), H(e.restEncoder, this.length - n);
  }
  getMissing(e, n) {
    return null;
  }
}
const Rk = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : {}, Ik = "__ $YJS$ __";
Rk[Ik] === !0 && console.error("Yjs was already imported. This breaks constructor checks and will lead to issues! - https://github.com/yjs/yjs/issues/438");
Rk[Ik] = !0;
class up {
  constructor(e, n) {
    this.yanchor = e, this.yhead = n;
  }
  toJSON() {
    return {
      yanchor: vy(this.yanchor),
      yhead: vy(this.yhead)
    };
  }
  static fromJSON(e) {
    return new up(ko(e.yanchor), ko(e.yhead));
  }
}
class vye {
  constructor(e, n) {
    this.ytext = e, this.awareness = n, this.undoManager = new np(e);
  }
  toYPos(e, n = 0) {
    return Tf(this.ytext, e, n);
  }
  fromYPos(e) {
    const n = Mf(ko(e), this.ytext.doc);
    if (n == null || n.type !== this.ytext)
      throw new Error("[y-codemirror] The position you want to retrieve was created by a different document");
    return {
      pos: n.index,
      assoc: n.assoc
    };
  }
  toYRange(e) {
    const n = e.assoc, r = this.toYPos(e.anchor, n), i = this.toYPos(e.head, n);
    return new up(r, i);
  }
  fromYRange(e) {
    const n = this.fromYPos(e.yanchor), r = this.fromYPos(e.yhead);
    return n.pos === r.pos ? C.cursor(r.pos, r.assoc) : C.range(n.pos, r.pos);
  }
}
const La = N.define({
  combine(t) {
    return t[t.length - 1];
  }
}), Nf = Xt.define();
class xye {
  constructor(e) {
    this.view = e, this.conf = e.state.facet(La), this._observer = (n, r) => {
      if (r.origin !== this.conf) {
        const i = n.delta, s = [];
        let o = 0;
        for (let l = 0; l < i.length; l++) {
          const c = i[l];
          c.insert != null ? s.push({ from: o, to: o, insert: c.insert }) : c.delete != null ? (s.push({ from: o, to: o + c.delete, insert: "" }), o += c.delete) : o += c.retain;
        }
        e.dispatch({ changes: s, annotations: [Nf.of(this.conf)] });
      }
    }, this._ytext = this.conf.ytext, this._ytext.observe(this._observer);
  }
  update(e) {
    if (!e.docChanged || e.transactions.length > 0 && e.transactions[0].annotation(Nf) === this.conf)
      return;
    const n = this.conf.ytext;
    n.doc.transact(() => {
      let r = 0;
      e.changes.iterChanges((i, s, o, l, c) => {
        const a = c.sliceString(0, c.length, `
`);
        i !== s && n.delete(i + r, s - i), a.length > 0 && n.insert(i + r, a), r += a.length - (s - i);
      });
    }, this.conf);
  }
  destroy() {
    this._ytext.unobserve(this._observer);
  }
}
const kye = Ae.fromClass(xye), _ye = I.baseTheme({
  ".cm-ySelection": {},
  ".cm-yLineSelection": {
    padding: 0,
    margin: "0px 2px 0px 4px"
  },
  ".cm-ySelectionCaret": {
    position: "relative",
    borderLeft: "1px solid black",
    borderRight: "1px solid black",
    marginLeft: "-1px",
    marginRight: "-1px",
    boxSizing: "border-box",
    display: "inline"
  },
  ".cm-ySelectionCaretDot": {
    borderRadius: "50%",
    position: "absolute",
    width: ".4em",
    height: ".4em",
    top: "-.2em",
    left: "-.2em",
    backgroundColor: "inherit",
    transition: "transform .3s ease-in-out",
    boxSizing: "border-box"
  },
  ".cm-ySelectionCaret:hover > .cm-ySelectionCaretDot": {
    transformOrigin: "bottom center",
    transform: "scale(0)"
  },
  ".cm-ySelectionInfo": {
    position: "absolute",
    top: "-1.05em",
    left: "-1px",
    fontSize: ".75em",
    fontFamily: "serif",
    fontStyle: "normal",
    fontWeight: "normal",
    lineHeight: "normal",
    userSelect: "none",
    color: "white",
    paddingLeft: "2px",
    paddingRight: "2px",
    zIndex: 101,
    transition: "opacity .3s ease-in-out",
    backgroundColor: "inherit",
    opacity: 0,
    transitionDelay: "0s",
    whiteSpace: "nowrap"
  },
  ".cm-ySelectionCaret:hover > .cm-ySelectionInfo": {
    opacity: 1,
    transitionDelay: "0s"
  }
}), Sye = Xt.define();
class Cye extends zn {
  constructor(e, n) {
    super(), this.color = e, this.name = n;
  }
  toDOM() {
    return Yh("span", [vt("class", "cm-ySelectionCaret"), vt("style", `background-color: ${this.color}; border-color: ${this.color}`)], [
      kl("\u2060"),
      Yh("div", [
        vt("class", "cm-ySelectionCaretDot")
      ]),
      kl("\u2060"),
      Yh("div", [
        vt("class", "cm-ySelectionInfo")
      ], [
        kl(this.name)
      ]),
      kl("\u2060")
    ]);
  }
  eq(e) {
    return e.color === this.color;
  }
  compare(e) {
    return e.color === this.color;
  }
  updateDOM() {
    return !1;
  }
  get estimatedHeight() {
    return -1;
  }
  ignoreEvent() {
    return !0;
  }
}
class Aye {
  constructor(e) {
    this.conf = e.state.facet(La), this._listener = ({ added: n, updated: r, removed: i }, s, o) => {
      n.concat(r).concat(i).findIndex((c) => c !== this.conf.awareness.doc.clientID) >= 0 && e.dispatch({ annotations: [Sye.of([])] });
    }, this._awareness = this.conf.awareness, this._awareness.on("change", this._listener), this.decorations = te.of([]);
  }
  destroy() {
    this._awareness.off("change", this._listener);
  }
  update(e) {
    const n = this.conf.ytext, r = n.doc, i = this.conf.awareness, s = [], o = this.conf.awareness.getLocalState();
    if (o != null) {
      const l = e.view.hasFocus && e.view.dom.ownerDocument.hasFocus(), c = l ? e.state.selection.main : null, a = o.cursor == null ? null : ko(o.cursor.anchor), h = o.cursor == null ? null : ko(o.cursor.head);
      if (c != null) {
        const u = Tf(n, c.anchor), f = Tf(n, c.head);
        (o.cursor == null || !xy(a, u) || !xy(h, f)) && i.setLocalStateField("cursor", {
          anchor: u,
          head: f
        });
      } else
        o.cursor != null && l && i.setLocalStateField("cursor", null);
    }
    i.getStates().forEach((l, c) => {
      if (c === i.doc.clientID)
        return;
      const a = l.cursor;
      if (a == null || a.anchor == null || a.head == null)
        return;
      const h = Mf(a.anchor, r), u = Mf(a.head, r);
      if (h == null || u == null || h.type !== n || u.type !== n)
        return;
      const { color: f = "#30bced", name: d = "Anonymous" } = l.user || {}, p = l.user && l.user.colorLight || f + "33", g = Sa(h.index, u.index), m = Sr(h.index, u.index), y = e.view.state.doc.lineAt(g), b = e.view.state.doc.lineAt(m);
      if (y.number === b.number)
        s.push({
          from: g,
          to: m,
          value: V.mark({
            attributes: { style: `background-color: ${p}` },
            class: "cm-ySelection"
          })
        });
      else {
        s.push({
          from: g,
          to: y.from + y.length,
          value: V.mark({
            attributes: { style: `background-color: ${p}` },
            class: "cm-ySelection"
          })
        }), s.push({
          from: b.from,
          to: m,
          value: V.mark({
            attributes: { style: `background-color: ${p}` },
            class: "cm-ySelection"
          })
        });
        for (let _ = y.number + 1; _ < b.number; _++) {
          const w = e.view.state.doc.line(_).from;
          s.push({
            from: w,
            to: w,
            value: V.line({
              attributes: { style: `background-color: ${p}`, class: "cm-yLineSelection" }
            })
          });
        }
      }
      s.push({
        from: u.index,
        to: u.index,
        value: V.widget({
          side: u.index - h.index > 0 ? -1 : 1,
          block: !1,
          widget: new Cye(f, d)
        })
      });
    }), this.decorations = V.set(s, !0);
  }
}
const Eye = Ae.fromClass(Aye, {
  decorations: (t) => t.decorations
}), Dye = () => {
  let t = !0;
  return (e, n) => {
    if (t) {
      t = !1;
      try {
        e();
      } finally {
        t = !0;
      }
    } else
      n !== void 0 && n();
  };
};
class Tye {
  constructor(e) {
    this.undoManager = e;
  }
  addTrackedOrigin(e) {
    this.undoManager.addTrackedOrigin(e);
  }
  removeTrackedOrigin(e) {
    this.undoManager.removeTrackedOrigin(e);
  }
  undo() {
    return this.undoManager.undo() != null;
  }
  redo() {
    return this.undoManager.redo() != null;
  }
}
const Ra = N.define({
  combine(t) {
    return t[t.length - 1];
  }
});
class Mye {
  constructor(e) {
    this.view = e, this.conf = e.state.facet(Ra), this._undoManager = this.conf.undoManager, this.syncConf = e.state.facet(La), this._beforeChangeSelection = null, this._mux = Dye(), this._onStackItemAdded = ({ stackItem: n, changedParentTypes: r }) => {
      r.has(this.syncConf.ytext) && this._beforeChangeSelection && !n.meta.has(this) && n.meta.set(this, this._beforeChangeSelection);
    }, this._onStackItemPopped = ({ stackItem: n }) => {
      const r = n.meta.get(this);
      if (r) {
        const i = this.syncConf.fromYRange(r);
        e.dispatch(e.state.update({ selection: i })), this._storeSelection();
      }
    }, this._storeSelection = () => {
      this._beforeChangeSelection = this.syncConf.toYRange(this.view.state.selection.main);
    }, this._undoManager.on("stack-item-added", this._onStackItemAdded), this._undoManager.on("stack-item-popped", this._onStackItemPopped), this._undoManager.addTrackedOrigin(this.syncConf);
  }
  update(e) {
    e.selectionSet && (e.transactions.length === 0 || e.transactions[0].annotation(Nf) !== this.syncConf) && this._storeSelection();
  }
  destroy() {
    this._undoManager.off("stack-item-added", this._onStackItemAdded), this._undoManager.off("stack-item-popped", this._onStackItemPopped), this._undoManager.removeTrackedOrigin(this.syncConf);
  }
}
const Oye = Ae.fromClass(Mye), Lye = ({ state: t, dispatch: e }) => t.facet(Ra).undo() || !0, Rye = ({ state: t, dispatch: e }) => t.facet(Ra).redo() || !0, Iye = (t, e, { undoManager: n = new np(t) } = {}) => {
  const r = new vye(t, e), i = [
    La.of(r),
    kye
  ];
  return e && i.push(
    _ye,
    Eye
  ), n !== !1 && i.push(
    Ra.of(new Tye(n)),
    Oye,
    I.domEventHandlers({
      beforeinput(s, o) {
        return s.inputType === "historyUndo" ? Lye(o) : s.inputType === "historyRedo" ? Rye(o) : !1;
      }
    })
  ), i;
}, Xh = 3e4;
class Nk extends _a {
  constructor(e) {
    super(), this.doc = e, this.clientID = e.clientID, this.states = /* @__PURE__ */ new Map(), this.meta = /* @__PURE__ */ new Map(), this._checkInterval = setInterval(() => {
      const n = xr();
      this.getLocalState() !== null && Xh / 2 <= n - this.meta.get(this.clientID).lastUpdated && this.setLocalState(this.getLocalState());
      const r = [];
      this.meta.forEach((i, s) => {
        s !== this.clientID && Xh <= n - i.lastUpdated && this.states.has(s) && r.push(s);
      }), r.length > 0 && fp(this, r, "timeout");
    }, Hn(Xh / 10)), e.on("destroy", () => {
      this.destroy();
    }), this.setLocalState({});
  }
  destroy() {
    this.emit("destroy", [this]), this.setLocalState(null), super.destroy(), clearInterval(this._checkInterval);
  }
  getLocalState() {
    return this.states.get(this.clientID) || null;
  }
  setLocalState(e) {
    const n = this.clientID, r = this.meta.get(n), i = r === void 0 ? 0 : r.clock + 1, s = this.states.get(n);
    e === null ? this.states.delete(n) : this.states.set(n, e), this.meta.set(n, {
      clock: i,
      lastUpdated: xr()
    });
    const o = [], l = [], c = [], a = [];
    e === null ? a.push(n) : s == null ? e != null && o.push(n) : (l.push(n), Ws(s, e) || c.push(n)), (o.length > 0 || c.length > 0 || a.length > 0) && this.emit("change", [{ added: o, updated: c, removed: a }, "local"]), this.emit("update", [{ added: o, updated: l, removed: a }, "local"]);
  }
  setLocalStateField(e, n) {
    const r = this.getLocalState();
    r !== null && this.setLocalState({
      ...r,
      [e]: n
    });
  }
  getStates() {
    return this.states;
  }
}
const fp = (t, e, n) => {
  const r = [];
  for (let i = 0; i < e.length; i++) {
    const s = e[i];
    if (t.states.has(s)) {
      if (t.states.delete(s), s === t.clientID) {
        const o = t.meta.get(s);
        t.meta.set(s, {
          clock: o.clock + 1,
          lastUpdated: xr()
        });
      }
      r.push(s);
    }
  }
  r.length > 0 && (t.emit("change", [{ added: [], updated: [], removed: r }, n]), t.emit("update", [{ added: [], updated: [], removed: r }, n]));
}, js = (t, e, n = t.states) => {
  const r = e.length, i = Ze();
  H(i, r);
  for (let s = 0; s < r; s++) {
    const o = e[s], l = n.get(o) || null, c = t.meta.get(o).clock;
    H(i, o), H(i, c), jr(i, JSON.stringify(l));
  }
  return ke(i);
}, Nye = (t, e, n) => {
  const r = Cr(e), i = xr(), s = [], o = [], l = [], c = [], a = W(r);
  for (let h = 0; h < a; h++) {
    const u = W(r);
    let f = W(r);
    const d = JSON.parse(ar(r)), p = t.meta.get(u), g = t.states.get(u), m = p === void 0 ? 0 : p.clock;
    (m < f || m === f && d === null && t.states.has(u)) && (d === null ? u === t.clientID && t.getLocalState() != null ? f++ : t.states.delete(u) : t.states.set(u, d), t.meta.set(u, {
      clock: f,
      lastUpdated: i
    }), p === void 0 && d !== null ? s.push(u) : p !== void 0 && d === null ? c.push(u) : d !== null && (Ws(d, g) || l.push(u), o.push(u)));
  }
  (s.length > 0 || l.length > 0 || c.length > 0) && t.emit("change", [{
    added: s,
    updated: l,
    removed: c
  }, n]), (s.length > 0 || o.length > 0 || c.length > 0) && t.emit("update", [{
    added: s,
    updated: o,
    removed: c
  }, n]);
}, Pk = /* @__PURE__ */ new Map();
class Pye {
  constructor(e) {
    this.room = e, this.onmessage = null, this._onChange = (n) => n.key === e && this.onmessage !== null && this.onmessage({ data: vme(n.newValue || "") }), zge(this._onChange);
  }
  postMessage(e) {
    Bx.setItem(this.room, wme(pme(e)));
  }
  close() {
    Vge(this._onChange);
  }
}
const Fye = typeof BroadcastChannel > "u" ? Pye : BroadcastChannel, dp = (t) => Vn(Pk, t, () => {
  const e = ei(), n = new Fye(t);
  return n.onmessage = (r) => e.forEach((i) => i(r.data, "broadcastchannel")), {
    bc: n,
    subs: e
  };
}), Bye = (t, e) => (dp(t).subs.add(e), e), qye = (t, e) => {
  const n = dp(t), r = n.subs.delete(e);
  return r && n.subs.size === 0 && (n.bc.close(), Pk.delete(t)), r;
}, xi = (t, e, n = null) => {
  const r = dp(t);
  r.bc.postMessage(e), r.subs.forEach((i) => i(e, n));
}, Fk = 0, pp = 1, Bk = 2, Pf = (t, e) => {
  H(t, Fk);
  const n = m0e(e);
  Ee(t, n);
}, qk = (t, e, n) => {
  H(t, pp), Ee(t, f0e(e, n));
}, $ye = (t, e, n) => qk(e, n, Je(t)), $k = (t, e, n) => {
  try {
    a0e(e, Je(t), n);
  } catch (r) {
    console.error("Caught error while handling a Yjs update", r);
  }
}, Hye = (t, e) => {
  H(t, Bk), Ee(t, e);
}, zye = $k, Vye = (t, e, n, r) => {
  const i = W(t);
  switch (i) {
    case Fk:
      $ye(t, e, n);
      break;
    case pp:
      $k(t, n, r);
      break;
    case Bk:
      zye(t, n, r);
      break;
    default:
      throw new Error("Unknown message type");
  }
  return i;
}, Uye = 0, Wye = (t, e, n) => {
  switch (W(t)) {
    case Uye:
      n(e, ar(t));
  }
}, jye = (t) => Gge(t, (e, n) => `${encodeURIComponent(n)}=${encodeURIComponent(e)}`).join("&"), qr = 0, Hk = 3, Bi = 1, Gye = 2, $o = [];
$o[qr] = (t, e, n, r, i) => {
  H(t, qr);
  const s = Vye(
    e,
    t,
    n.doc,
    n
  );
  r && s === pp && !n.synced && (n.synced = !0);
};
$o[Hk] = (t, e, n, r, i) => {
  H(t, Bi), Ee(
    t,
    js(
      n.awareness,
      Array.from(n.awareness.getStates().keys())
    )
  );
};
$o[Bi] = (t, e, n, r, i) => {
  Nye(
    n.awareness,
    Je(e),
    n
  );
};
$o[Gye] = (t, e, n, r, i) => {
  Wye(
    e,
    n.doc,
    (s, o) => Yye(n, o)
  );
};
const Ly = 3e4, Yye = (t, e) => console.warn(`Permission denied to access ${t.url}.
${e}`), zk = (t, e, n) => {
  const r = Cr(e), i = Ze(), s = W(r), o = t.messageHandlers[s];
  return o ? o(i, r, t, n, s) : console.error("Unable to compute message"), i;
}, Vk = (t) => {
  if (t.shouldConnect && t.ws === null) {
    const e = new t._WS(t.url);
    e.binaryType = "arraybuffer", t.ws = e, t.wsconnecting = !0, t.wsconnected = !1, t.synced = !1, e.onmessage = (n) => {
      t.wsLastMessageReceived = xr();
      const r = zk(t, new Uint8Array(n.data), !0);
      Kd(r) > 1 && e.send(ke(r));
    }, e.onerror = (n) => {
      t.emit("connection-error", [n, t]);
    }, e.onclose = (n) => {
      t.emit("connection-close", [n, t]), t.ws = null, t.wsconnecting = !1, t.wsconnected ? (t.wsconnected = !1, t.synced = !1, fp(
        t.awareness,
        Array.from(t.awareness.getStates().keys()).filter(
          (r) => r !== t.doc.clientID
        ),
        t
      ), t.emit("status", [{
        status: "disconnected"
      }])) : t.wsUnsuccessfulReconnects++, setTimeout(
        Vk,
        Sa(
          Lge(2, t.wsUnsuccessfulReconnects) * 100,
          t.maxBackoffTime
        ),
        t
      );
    }, e.onopen = () => {
      t.wsLastMessageReceived = xr(), t.wsconnecting = !1, t.wsconnected = !0, t.wsUnsuccessfulReconnects = 0, t.emit("status", [{
        status: "connected"
      }]);
      const n = Ze();
      if (H(n, qr), Pf(n, t.doc), e.send(ke(n)), t.awareness.getLocalState() !== null) {
        const r = Ze();
        H(r, Bi), Ee(
          r,
          js(t.awareness, [
            t.doc.clientID
          ])
        ), e.send(ke(r));
      }
    }, t.emit("status", [{
      status: "connecting"
    }]);
  }
}, Qh = (t, e) => {
  const n = t.ws;
  t.wsconnected && n && n.readyState === n.OPEN && n.send(e), t.bcconnected && xi(t.bcChannel, e, t);
};
class Kye extends _a {
  constructor(e, n, r, {
    connect: i = !0,
    awareness: s = new Nk(r),
    params: o = {},
    WebSocketPolyfill: l = WebSocket,
    resyncInterval: c = -1,
    maxBackoffTime: a = 2500,
    disableBc: h = !1
  } = {}) {
    for (super(); e[e.length - 1] === "/"; )
      e = e.slice(0, e.length - 1);
    const u = jye(o);
    this.maxBackoffTime = a, this.bcChannel = e + "/" + n, this.url = e + "/" + n + (u.length === 0 ? "" : "?" + u), this.roomname = n, this.doc = r, this._WS = l, this.awareness = s, this.wsconnected = !1, this.wsconnecting = !1, this.bcconnected = !1, this.disableBc = h, this.wsUnsuccessfulReconnects = 0, this.messageHandlers = $o.slice(), this._synced = !1, this.ws = null, this.wsLastMessageReceived = 0, this.shouldConnect = i, this._resyncInterval = 0, c > 0 && (this._resyncInterval = setInterval(() => {
      if (this.ws && this.ws.readyState === WebSocket.OPEN) {
        const f = Ze();
        H(f, qr), Pf(f, r), this.ws.send(ke(f));
      }
    }, c)), this._bcSubscriber = (f, d) => {
      if (d !== this) {
        const p = zk(this, new Uint8Array(f), !1);
        Kd(p) > 1 && xi(this.bcChannel, ke(p), this);
      }
    }, this._updateHandler = (f, d) => {
      if (d !== this) {
        const p = Ze();
        H(p, qr), Hye(p, f), Qh(this, ke(p));
      }
    }, this.doc.on("update", this._updateHandler), this._awarenessUpdateHandler = ({ added: f, updated: d, removed: p }, g) => {
      const m = f.concat(d).concat(p), y = Ze();
      H(y, Bi), Ee(
        y,
        js(s, m)
      ), Qh(this, ke(y));
    }, this._unloadHandler = () => {
      fp(
        this.awareness,
        [r.clientID],
        "window unload"
      );
    }, typeof window < "u" ? window.addEventListener("unload", this._unloadHandler) : typeof process < "u" && process.on("exit", this._unloadHandler), s.on("update", this._awarenessUpdateHandler), this._checkInterval = setInterval(() => {
      this.wsconnected && Ly < xr() - this.wsLastMessageReceived && this.ws.close();
    }, Ly / 10), i && this.connect();
  }
  get synced() {
    return this._synced;
  }
  set synced(e) {
    this._synced !== e && (this._synced = e, this.emit("synced", [e]), this.emit("sync", [e]));
  }
  destroy() {
    this._resyncInterval !== 0 && clearInterval(this._resyncInterval), clearInterval(this._checkInterval), this.disconnect(), typeof window < "u" ? window.removeEventListener("unload", this._unloadHandler) : typeof process < "u" && process.off("exit", this._unloadHandler), this.awareness.off("update", this._awarenessUpdateHandler), this.doc.off("update", this._updateHandler), super.destroy();
  }
  connectBc() {
    if (this.disableBc)
      return;
    this.bcconnected || (Bye(this.bcChannel, this._bcSubscriber), this.bcconnected = !0);
    const e = Ze();
    H(e, qr), Pf(e, this.doc), xi(this.bcChannel, ke(e), this);
    const n = Ze();
    H(n, qr), qk(n, this.doc), xi(this.bcChannel, ke(n), this);
    const r = Ze();
    H(r, Hk), xi(
      this.bcChannel,
      ke(r),
      this
    );
    const i = Ze();
    H(i, Bi), Ee(
      i,
      js(this.awareness, [
        this.doc.clientID
      ])
    ), xi(
      this.bcChannel,
      ke(i),
      this
    );
  }
  disconnectBc() {
    const e = Ze();
    H(e, Bi), Ee(
      e,
      js(this.awareness, [
        this.doc.clientID
      ], /* @__PURE__ */ new Map())
    ), Qh(this, ke(e)), this.bcconnected && (qye(this.bcChannel, this._bcSubscriber), this.bcconnected = !1);
  }
  disconnect() {
    this.shouldConnect = !1, this.disconnectBc(), this.ws !== null && this.ws.close();
  }
  connect() {
    this.shouldConnect = !0, !this.wsconnected && this.ws === null && (Vk(this), this.connectBc());
  }
}
function Jye(t) {
  if (!t.enabled)
    return {};
  const e = Rn(() => new bs(), []), [n, r] = st(!1), i = Rn(() => {
    var c;
    const l = new Kye((c = t.wsUrl) != null ? c : "ws://localhost:4444", t.room, e, {
      connect: !0,
      params: {},
      WebSocketPolyfill: WebSocket,
      awareness: new Nk(e),
      maxBackoffTime: 2500
    });
    return l.awareness.setLocalStateField("user", {
      name: t.username,
      color: t.color
    }), l.on("status", ({
      status: a
    }) => {
      a == "connected" && l.on("sync", (h) => {
        !h || (l.firstUser = !0, r(!0));
      });
    }), l;
  }, []), s = Rn(() => e.getText("codemirror"), []), o = Rn(() => new np(s, {
    trackedOrigins: /* @__PURE__ */ new Set([i.doc.clientID, null]),
    ignoreRemoteMapChanges: !0
  }), []);
  return {
    provider: i,
    undoManager: o,
    ytext: s,
    ydoc: e,
    ready: n
  };
}
const Zye = Ce.div.withConfig({
  displayName: "CodeMirror__CodeEditor",
  componentId: "sc-1q0hyc9-0"
})(["border-radius:var(--border-radius);background:var(--gray-200);font-family:monospace;font-size:0.94em;resize:none;border:0;padding:20px;min-height:500px;display:", ';flex:1;border:1px solid var(--gray-400);box-shadow:inset 0px 0px 4px rgba(0,0,0,0.15);@media print{display:none;}.cm-ySelectionInfo{opacity:1 !important;font-size:0.6rem;padding:0.25rem 0.5rem !important;border-top-left-radius:10px;border-top-right-radius:10px;border-bottom-right-radius:10px;font-family:"Lato" !important;font-weight:600 !important;}.cm-widgetBuffer{margin-bottom:0;}.cm-ySelectionCaretDot{display:none;}.cm-yLineSelection{margin:0 2px 0 6px !important;}'], (t) => t.$shown ? "block" : "none"), Xye = Ce.textarea.withConfig({
  displayName: "CodeMirror__HiddenTextArea",
  componentId: "sc-1q0hyc9-1"
})(["display:none;"]), Qye = (t) => {
  const {
    from: e
  } = t.state.selection.main, n = t.state.doc.lineAt(e);
  return {
    line: n.number - 1,
    ch: e - n.from
  };
}, ebe = (t, e) => {
  const {
    line: n,
    ch: r
  } = e, i = t.state.doc.line(n + 1).from + r;
  t.dispatch({
    selection: {
      anchor: i,
      head: i
    },
    scrollIntoView: !0
  });
}, tbe = ({
  text: t,
  setText: e,
  id: n,
  name: r,
  className: i,
  shown: s,
  syncText: o,
  setSyncText: l,
  collaboration: c
}) => {
  const a = qf(null), [h, u] = st(!1), {
    provider: f,
    undoManager: d,
    ytext: p,
    ydoc: g,
    ready: m
  } = Jye(c);
  return Hi(() => {
    c.enabled && (d.on("stack-item-added", (x) => {
      x.stackItem.meta.set("cursor-location", Qye(a.current));
    }), d.on("stack-item-popped", (x) => {
      ebe(a.current, x.stackItem.meta.get("cursor-location"));
    }));
    const y = iy.filter((x, v) => v != 3), b = [c.enabled ? y : iy, co.of([ipe]), I.lineWrapping, I.updateListener.of((x) => {
      x.docChanged && (localStorage.getItem("log") == "true" && console.log("doc changed"), e(w.state.doc.toString()));
    })];
    c.enabled && (b.push(Iye(p, f.awareness, {
      undoManager: d
    })), b.push(co.of([{
      key: "Mod-z",
      run: () => d.undo(),
      preventDefault: !0
    }, {
      key: "Mod-y",
      run: () => d.redo(),
      preventDefault: !0
    }])));
    const _ = X.create({
      doc: c.enabled ? p.toString() : t,
      extensions: b
    }), w = new I({
      state: _,
      parent: document.getElementById(n + "-editor")
    });
    return a.current = w, u(!0), () => {
      c.enabled && (f.disconnect(), g.destroy()), w.destroy();
    };
  }, []), Hi(() => {
    const y = c.enabled && p.toString().length == 0 && f.awareness.getStates().size == 1 && f.firstUser && m;
    p && p.toString().length != 0 && e(p.toString()), y ? (console.log("You are the first user in this document. Initiating..."), a.current.dispatch({
      changes: {
        from: 0,
        to: a.current.state.doc.length,
        insert: t
      }
    })) : o && (console.log("setting text"), a.current.dispatch({
      changes: {
        from: 0,
        to: a.current.state.doc.length,
        insert: t
      }
    }), l(!1));
  }, [o, m, h]), kt`
      <${Zye} $shown="${s}" id="${n}-editor" class=${i}><//>
      <${Xye} value=${t} name=${r} id=${n}><//>
  `;
};
console.log("CodeMirror component loaded");
const nbe = Ce.section`
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
`, rbe = Ce.h3`
  font-family: 'Lato', sans-serif;
  color: var(--gray-900);
`, ibe = Ce.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`, Ry = Ce(aa)`
&& {
  padding: 0 10px;
  margin-top: 0px;

  &:hover {
    background-color: ${(t) => t.$negative ? "var(--red-500)" : "var(--green-400)"} !important;
    border: 1px solid ${(t) => t.$negative ? "var(--red-500)" : "var(--green-400)"} !important;
  }
}`, sbe = ({
  changeDocumentTemplate: t,
  selectedTemplate: e,
  closeModal: n
}) => kt`
    <${nbe}>
        <${rbe}>Are you sure you want to change the current template?<//>
        <${ibe}>
            <${Ry} type="button" onClick=${() => t(e)}>✓ Yes<//>
            <${Ry} $negative type="button" onClick=${n}>x Cancel<//>
        <//>
    <//>
  `;
console.log("Modal functional component loaded");
const obe = Ce.div`
  position: absolute;
  ${(t) => t.$orientation == "left" && Ti(["left:0;"])}
  transform: ${(t) => t.$orientation == "left" ? "translateX(-105%)" : "translate(-50%, 130%)"};
`, lbe = Ce.div`
  position: relative; 
  background: var(--green-400);
  color: #ffffff;
  font-family: 'Lato', sans-serif;
  text-align: left;
  padding: 10px 20px 10px 20px;
  border-radius: var(--border-radius);
  border: solid var(--green-400);
  border-width: 1px 1px 1px 1px;
  max-height: 40px;
  top: calc(100% + 11px);
  ${(t) => t.$orientation == "bottom" && Ti(["left:50%;"])}
  transform: ${(t) => t.$orientation == "left" ? "none" : "translateX(-25%)"};

  &::before {
    content: '';
    position: absolute;
    ${(t) => t.$orientation == "left" ? Ti(["right:0;top:50%;border-top:15px solid transparent;border-bottom:15px solid transparent;border-left:30px solid var(--green-400);"]) : Ti(["left:50%;border-left:15px solid transparent;border-right:15px solid transparent;border-bottom:30px solid var(--green-400);"])}
    transform: ${(t) => t.$orientation == "left" ? "translate(50%, -50%)" : "translate(-50%, -100%)"};
  }
`, Iy = ({
  tooltipOrientation: t,
  errorMessage: e
}) => kt`
    <${obe} $orientation=${t}>
      <${lbe} $orientation=${t}>
          ${e}
      <//>
    <//>`;
console.log("Tooltip component loaded");
const cbe = Ce.div`
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
`, Ny = Ce(aa)`
&& {
  width: 100%!important;
  color: var(--white);
  border: 1px solid var(--gray-900)!important;
  padding: 0 10px 0 10px!important;
  margin-top: 0px;
}`, abe = Ce.div`
  position: relative;
  display: inline-block;
  width: min-content;

  &:hover {
    div {
      display: inline-flex;
      flex-direction: column;
    }
  }
`, hbe = Ce.div`
  display: flex;
  flex-direction: row-reverse;
  border: 1px solid var(--gray-900);
  width: inherit;
`, ube = Ce.div`
  position: absolute;
  display: flex;
  padding-top: 5px;
`, fbe = (t) => {
  const e = ["id", "templatetext"];
  for (const n in t) {
    for (let r of e)
      t[n][r] || (t[n].errorMessage = `Configuration of template ${n} is lacking '${r}'`);
    t[n].errorMessage && console.error(t[n].errorMessage);
  }
  return t;
}, dbe = ({
  setText: t,
  templatelist: e,
  setSyncText: n
}) => {
  const [r, i] = st(""), [s, o] = st({}), [l, c] = st(null), [a, h] = st(!1), [u, f] = st(!1), [d, p] = st({
    error: null,
    message: null
  }), g = (w) => w.ok ? w : Promise.reject(`Invalid HTTP response: ${w.status}`), m = (w) => {
    i(s[w].templatetext), t(s[w].templatetext), n(!0), h(!1);
  }, y = (w) => fetch(w).then(g).then((x) => x.json().catch((v) => {
    console.error(v), p({
      error: v,
      message: "Template configuration is not valid"
    });
  })).catch((x) => {
    console.warn(x), p({
      error: x,
      message: "Template configuration not found"
    });
  }), b = (w) => fetch(w).then(g).then((x) => x.text()).catch((x) => {
    throw console.error(x), new Error("Could not fetch the template");
  }), _ = async (w) => {
    if (!w)
      return {};
    for (const x in w) {
      const v = w[x].templatetext;
      await b(v).then((S) => w[x].templatetext = S).catch((S) => {
        var R, L;
        return (L = (R = w[x]).errorMessage) != null ? L : R.errorMessage = S.message;
      });
    }
    return w;
  };
  return Hi(() => y(e).then(fbe).then(_).then(o), []), d.error ? kt`
        <${Nl} type="button" template=${r} onMouseEnter=${() => f(!0)} onMouseLeave=${() => f(!1)}>
          Templates
        <//>
        <${u && Iy} tooltipOrientation="bottom" errorMessage=${d.message}/>` : Object.keys(s).length == 0 ? kt`
        <${Nl} type="button" template=${r} onMouseEnter=${() => f(!0)} onMouseLeave=${() => f(!1)}>
          Templates
        <//>` : kt`
    ${a && kt`<${sbe} selectedTemplate=${l} closeModal=${() => {
    h(!1), c(!1);
  }} changeDocumentTemplate=${m}/>`}
    <${abe}>
      <${Nl} type="button">Templates<//>
      <${ube}>
        <${cbe}>
        ${Object.keys(s).map((w) => kt`
            ${s[w].errorMessage ? kt`
              <${hbe}>
                <${u === w && Iy} tooltipOrientation="left" errorMessage="${s[w].errorMessage}"/>
                  <${Ny} type="button" onMouseEnter=${() => f(w)} onMouseLeave=${() => f(!1)}>${s[w].id}
                <//>
              <//>
            ` : kt`
              <${Ny} type="button" 
              onClick=${() => {
    h(!0), c(w);
  }}>${s[w].id}
              <//>
            `}
          `)}      
        <//>
      <//>
    <//>
  `;
};
console.log("TemplateManager component loaded");
const pbe = Ce.div.withConfig({
  displayName: "Preview",
  componentId: "sc-1gprrj9-0"
})(['padding:20px;min-height:500px;flex:1;border:1px solid var(--gray-400);border-left:1px solid var(--gray-600);box-shadow:inset 0px 0px 4px var(--gray-600);border-radius:var(--border-radius);font-family:"Lato",sans-serif;vertical-align:top;color:var(--gray-900);word-break:unset;', ` @media print{display:block !important;border:0px !important;box-shadow:none !important;border-radius:0px !important;word-break:unset !important;}p{margin-top:0px;line-height:1.5em;@media print{break-inside:avoid !important;text-align:justify !important;text-justify:inter-word !important;}}a{color:var(--blue-500);@media print{&::after{content:"(" attr(href) ")" !important;}}}h1,h2,h3,h4,h5,h6{font-weight:bold;line-height:1.5;margin:1em 0;}h1{font-size:1.8em;}h2{font-size:1.5em;}h3{font-size:1.25em;}h4{font-size:1.15em;}h5{font-size:1.1em;}h6{font-size:1em;}hr{height:1px;margin:16px 0;background-color:var(--gray-500);border:0 none;}code,pre{border-radius:var(--border-radius);background-color:var(--gray-200);}code{padding:0.2em 0.4em;font-family:"Source Code Pro";}pre{white-space:pre-wrap;padding:16px;}aside{border-radius:var(--border-radius);&.admonition{border:var(--border-2) solid var(--green-500);margin-bottom:1rem;.admonition{margin:0rem 1.4rem 0.9rem 1.4rem;}& > header,p{padding:10px;}& > p{margin-bottom:0;}& > header{color:var(--white);font-weight:bold;background:var(--green-500);}}&[class="admonition"]{.admonition{margin-top:0.9rem;}}&.note,&.important,&.tip,&.hint,&.directive-unhandled,&.warning{border:3px solid var(--blue-400);& > header{background-color:var(--blue-400);display:flex;&::before{padding-right:5px;display:flex;align-items:center;}}}&.warning{border:3px solid var(--orange-500);& > header{background-color:var(--orange-500);&::before{content:url("data:image/svg+xml,%3Csvg style='color: white' xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-exclamation-triangle' viewBox='0 0 16 16'%3E%3Cpath d='M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z' fill='white'%3E%3C/path%3E%3Cpath d='M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z' fill='white'%3E%3C/path%3E%3C/svg%3E%0A");}}}&.tip,&.hint{& > header::before{content:url("data:image/svg+xml,%3Csvg style='color: white' width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7 0V2H8V0H7Z' fill='white'%3E%3C/path%3E%3Cpath d='M3.35355 3.64645L1.85355 2.14645L1.14645 2.85355L2.64645 4.35355L3.35355 3.64645Z' fill='white'%3E%3C/path%3E%3Cpath d='M12.3536 4.35355L13.8536 2.85355L13.1464 2.14645L11.6464 3.64645L12.3536 4.35355Z' fill='white'%3E%3C/path%3E%3Cpath d='M7.49998 3C5.52977 3 3.85938 4.44872 3.58075 6.39913L3.5707 6.46949C3.41148 7.58398 3.73042 8.64543 4.36009 9.45895C4.74345 9.95426 5 10.427 5 10.9013V12.5C5 12.7761 5.22386 13 5.5 13H9.5C9.77614 13 10 12.7761 10 12.5V10.9013C10 10.427 10.2565 9.95423 10.6399 9.45893C11.2696 8.64541 11.5885 7.58397 11.4293 6.4695L11.4192 6.39914C11.1406 4.44873 9.4702 3 7.49998 3Z' fill='white'%3E%3C/path%3E%3Cpath d='M0 8H2V7H0V8Z' fill='white'%3E%3C/path%3E%3Cpath d='M13 8H15V7H13V8Z' fill='white'%3E%3C/path%3E%3Cpath d='M6 15H9V14H6V15Z' fill='white'%3E%3C/path%3E%3C/svg%3E");}}&.note > header::before{content:url("data:image/svg+xml,%3Csvg style='color: white' xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-pencil' viewBox='0 0 16 16'%3E%3Cpath d='M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z' fill='white'%3E%3C/path%3E%3C/svg%3E");}&.important > header::before{content:url("data:image/svg+xml,%3Csvg style='color: white' xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24'%3E%3Cpath d='M18 16v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-5 0h-2v-2h2v2zm0-4h-2V8h2v4zm-1 10c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2z' fill='white'%3E%3C/path%3E%3C/svg%3E");}&.directive-unhandled,&.directive-error{margin-bottom:1em;& > header{padding:10px;color:var(--white);mark{background:transparent;font-weight:bold;color:inherit;}code{background:transparent;font-family:'Lato',sans-serif;font-weight:bold;padding:0;margin-left:.3em;}}pre{background-color:var(--white);margin:0;font-family:'Lato',sans-serif;}}&.directive-unhandled{border:3px solid var(--gray-700);& > header{background-color:var(--gray-700);}}&.directive-error{border:3px solid var(--red-500);& > header{background-color:var(--red-500);}}}sup,sub,numref{line-height:0;}abbr{letter-spacing:0.1em;font-weight:bold;}img{max-width:100%;height:auto;display:block;margin-left:auto;margin-right:auto;}li{margin-bottom:1em;}ul,ol{margin-bottom:2em;list-style:revert;padding-left:40px;padding-top:1em;}blockquote{border-left:5px solid var(--green-500);margin-left:0;margin-top:0;padding-left:0.75rem;}table{border-spacing:0;margin:20px 0 20px 0;}th,td{padding:20px;text-align:left;border-right:1px solid var(--gray-500);border-bottom:1px solid var(--gray-500);}th{background:var(--gray-900);border-top:1px solid var(--gray-500);color:var(--white);&:first-of-type{border-top-left-radius:var(--border-radius);border-left:1px solid var(--gray-500);}&:last-of-type{border-top-right-radius:var(--border-radius);}}td{&:first-of-type{border-left:1px solid var(--gray-500);}p:last-of-type{margin-bottom:0;}}tr{&:nth-child(2n + 2){background:var(--gray-100);}&:last-of-type{td{&:first-of-type{border-bottom-left-radius:var(--border-radius);}&:last-of-type{border-bottom-right-radius:var(--border-radius);}}}}`], (t) => !t.$shown && Ti`
    display: none;
  `), gbe = Ce.div.withConfig({
  displayName: "MystEditor__EditorParent",
  componentId: "sc-f9eyv2-0"
})(["display:flex;flex-flow:row wrap;width:100%;"]), mbe = Ce.div.withConfig({
  displayName: "MystEditor__Topbar",
  componentId: "sc-f9eyv2-1"
})(["z-index:10;position:sticky;top:0;display:", ";width:100%;height:60px;background-color:var(--gray-900);border-bottom:1px solid var(--gray-600);@media print{display:none;}"], (t) => t.$shown ? "flex" : "none"), ybe = Ce.div.withConfig({
  displayName: "MystEditor__TopbarRight",
  componentId: "sc-f9eyv2-2"
})(["width:100%;display:flex;justify-content:flex-end;align-items:center;margin-right:15px;"]), bbe = Ce.div.withConfig({
  displayName: "MystEditor__Separator",
  componentId: "sc-f9eyv2-3"
})(["border-left:1px solid var(--gray-800);height:40px;margin-right:10px;margin-left:10px;"]), wbe = Ce.div.withConfig({
  displayName: "MystEditor__MystWrapper",
  componentId: "sc-f9eyv2-4"
})(["padding:20px;display:flex;flex-flow:row wrap;width:100%;"]), vbe = [{
  label: "Source",
  img: "data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M22 14.3344V15.6663L17 18.1331V16.7394L20.525 15L17 13.2562V11.8669L22 14.3344ZM12 16.7394L8.475 15L12 13.2562V11.8669L7 14.3344V15.6663L12 18.1331V16.7394ZM16.4044 10H15.1056L12.5988 20H13.8944L16.4044 10V10Z' fill='%23FFFFFF'/%3E%3C/svg%3E"
}, {
  label: "Preview",
  img: "data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12.7232 13.5185L13.0717 13.6453C13.364 13.7516 13.6059 13.4674 13.5201 13.2249L13.394 12.8684C13.1324 13.0434 12.905 13.264 12.7232 13.5185ZM5.3783 14.1143L6.20344 14.6793L5.36684 15.2271L5 14.6669L5.3783 14.1143ZM23.4976 14.6793C23.4976 14.6793 20.4337 20 14.8613 20C9.68749 20 6.20344 14.6793 6.20344 14.6793C6.20344 14.6793 9.40718 10 14.8613 10C20.4056 10 23.4976 14.6793 23.4976 14.6793ZM23.4976 14.6793C24.3642 15.1783 24.364 15.1787 24.3638 15.179L24.3633 15.1799L24.3621 15.182L24.3588 15.1875L24.3489 15.2044C24.3407 15.2182 24.3295 15.2369 24.3153 15.2603C24.2867 15.3069 24.246 15.3722 24.1933 15.4533C24.0878 15.6154 23.9336 15.8417 23.7316 16.1109C23.3288 16.6477 22.7301 17.3626 21.9419 18.0794C20.3721 19.5072 17.9836 21 14.8613 21C11.9278 21 9.5357 19.4963 7.93308 18.0917C7.12296 17.3817 6.48766 16.6739 6.05421 16.1433C5.83691 15.8773 5.66881 15.6539 5.55335 15.4945C5.49559 15.4147 5.45088 15.3508 5.41968 15.3054C5.40407 15.2827 5.39183 15.2646 5.38301 15.2514L5.37234 15.2355L5.36894 15.2303L5.36773 15.2285L5.36724 15.2277C5.36703 15.2274 5.36684 15.2271 6.20344 14.6793C5.3783 14.1143 5.37853 14.114 5.37878 14.1137L5.37933 14.1129L5.38065 14.1109L5.38421 14.1058L5.39489 14.0905C5.40361 14.0781 5.41551 14.0614 5.43057 14.0406C5.46067 13.9989 5.50343 13.941 5.55862 13.8692C5.66894 13.7255 5.82936 13.5255 6.03813 13.288C6.45474 12.814 7.06911 12.1846 7.86767 11.5546C9.45985 10.2984 11.8369 9 14.8613 9C17.9286 9 20.3014 10.2965 21.8823 11.558C22.6741 12.1898 23.2783 12.8211 23.6867 13.2969C23.8913 13.5353 24.048 13.7361 24.1557 13.8806C24.2095 13.9528 24.2513 14.0111 24.2806 14.0531C24.2954 14.0741 24.307 14.091 24.3155 14.1036L24.326 14.1192L24.3296 14.1244L24.3309 14.1264L24.3314 14.1273C24.3317 14.1276 24.3319 14.128 23.4976 14.6793ZM23.4976 14.6793L24.3319 14.128L24.6724 14.6432L24.3642 15.1783L23.4976 14.6793ZM15.5108 12.959C16.3818 13.2357 17.0123 14.0453 17.0123 15C17.0123 16.1836 16.0445 17.1429 14.8505 17.1429C13.8785 17.1429 13.0565 16.5071 12.7844 15.6322C12.7222 15.4324 12.6888 15.2201 12.6888 15C12.6888 14.8579 12.7032 14.7193 12.7298 14.585C12.8702 14.6361 13.0104 14.6627 13.147 14.6678C13.8935 14.6961 14.535 14.0861 14.541 13.3486C14.5422 13.2 14.5176 13.0462 14.4628 12.8914C14.5882 12.87 14.7179 12.8571 14.8505 12.8571C15.0808 12.8571 15.3027 12.8929 15.5108 12.959ZM11.2476 15C11.2476 16.9729 12.861 18.5714 14.8505 18.5714C16.8408 18.5714 18.4535 16.9729 18.4535 15C18.4535 13.0279 16.8408 11.4286 14.8505 11.4286C12.861 11.4286 11.2476 13.0279 11.2476 15Z' fill='%23FFFFFF'/%3E%3C/svg%3E%0A"
}, {
  label: "Both",
  img: "data:image/svg+xml,%3Csvg width='22' height='17' viewBox='0 0 22 17' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2.66667 0.666667H10.5338V15.5109H2.66667C1.5621 15.5109 0.666667 14.6154 0.666667 13.5109V2.66667C0.666667 1.5621 1.5621 0.666667 2.66667 0.666667Z' stroke='white' stroke-width='1.33333'/%3E%3Cpath d='M10.8001 0.666667H18.6673C19.7718 0.666667 20.6673 1.5621 20.6673 2.66667V13.5109C20.6673 14.6154 19.7718 15.5109 18.6673 15.5109H10.8001V0.666667Z' stroke='white' stroke-width='1.33333'/%3E%3C/svg%3E%0A"
}], Cbe = ({
  name: t = "myst_editor_textarea",
  id: e = "myst_editor_textarea",
  initialMode: n = "Both",
  initialText: r = "",
  printCallback: i = window.print,
  topbar: s = !0,
  templatelist: o,
  collaboration: l = {}
}) => {
  const [c, a] = st(n), [h, u] = st(r), [f, d] = st(!1);
  return kt`
  <${gbe}>
    <${mbe} $shown=${s}>
      <${ybe}>
        <${Nl} type="button" onClick=${(g) => i(g)}>Export as PDF<//>
        <${dbe} templatelist=${o} setText=${u} setSyncText=${d}/>
        <${bbe} />
        <${tae} buttons=${vbe} clickedId=${2} clickCallback=${(g) => a(g)}/>
      <//>
    <//>
    <${wbe}>
      <${tbe} text=${h} setText=${u} syncText=${f} setSyncText=${d} name=${t} id=${e} shown=${c === "Both" || c === "Source"} collaboration=${l}/>
      <${pbe} $shown=${c === "Both" || c === "Preview"} dangerouslySetInnerHTML=${{
    __html: ((g) => Z2.sanitize(Qce({
      breaks: !0,
      linkify: !0
    }).use(k2).render(g)))(h)
  }}/>
    <//>
  <//>`;
};
export {
  Ys as D,
  kbe as M,
  Cbe as a,
  kt as m
};

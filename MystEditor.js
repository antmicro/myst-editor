var yt = function() {
  return yt = Object.assign || function(e) {
    for (var n, r = 1, i = arguments.length; r < i; r++) {
      n = arguments[r];
      for (var s in n)
        Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s]);
    }
    return e;
  }, yt.apply(this, arguments);
};
function Gi(t, e, n) {
  if (n || arguments.length === 2)
    for (var r = 0, i = e.length, s; r < i; r++)
      (s || !(r in e)) && (s || (s = Array.prototype.slice.call(e, 0, r)), s[r] = e[r]);
  return t.concat(s || Array.prototype.slice.call(e));
}
function X_(t) {
  var e = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return e[n] === void 0 && (e[n] = t(n)), e[n];
  };
}
var Q_ = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, eC = /* @__PURE__ */ X_(
  function(t) {
    return Q_.test(t) || t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && t.charCodeAt(2) < 91;
  }
), Fo, F, wy, Ir, tg, xy, yu, ky, Ii = {}, _y = [], tC = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, oa = Array.isArray;
function Pn(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function Cy(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function Kt(t, e, n) {
  var r, i, s, o = {};
  for (s in e)
    s == "key" ? r = e[s] : s == "ref" ? i = e[s] : o[s] = e[s];
  if (arguments.length > 2 && (o.children = arguments.length > 3 ? Fo.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (s in t.defaultProps)
      o[s] === void 0 && (o[s] = t.defaultProps[s]);
  return Gs(t, o, r, i, null);
}
function Gs(t, e, n, r, i) {
  var s = { type: t, props: e, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++wy : i };
  return i == null && F.vnode != null && F.vnode(s), s;
}
function nC() {
  return { current: null };
}
function zn(t) {
  return t.children;
}
function vn(t, e) {
  this.props = t, this.context = e;
}
function io(t, e) {
  if (e == null)
    return t.__ ? io(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? io(t) : null;
}
function Sy(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return Sy(t);
  }
}
function bu(t) {
  (!t.__d && (t.__d = !0) && Ir.push(t) && !uc.__r++ || tg !== F.debounceRendering) && ((tg = F.debounceRendering) || xy)(uc);
}
function uc() {
  var t, e, n, r, i, s, o, l, c;
  for (Ir.sort(yu); t = Ir.shift(); )
    t.__d && (e = Ir.length, r = void 0, i = void 0, s = void 0, l = (o = (n = t).__v).__e, (c = n.__P) && (r = [], i = [], (s = Pn({}, o)).__v = o.__v + 1, sd(c, o, s, n.__n, c.ownerSVGElement !== void 0, o.__h != null ? [l] : null, r, l == null ? io(o) : l, o.__h, i), Ty(r, o, i), o.__e != l && Sy(o)), Ir.length > e && Ir.sort(yu));
  uc.__r = 0;
}
function Ay(t, e, n, r, i, s, o, l, c, a, h) {
  var u, f, d, p, g, m, y, b, k, v = 0, x = r && r.__k || _y, w = x.length, C = w, I = e.length;
  for (n.__k = [], u = 0; u < I; u++)
    (p = n.__k[u] = (p = e[u]) == null || typeof p == "boolean" || typeof p == "function" ? null : typeof p == "string" || typeof p == "number" || typeof p == "bigint" ? Gs(null, p, null, null, p) : oa(p) ? Gs(zn, { children: p }, null, null, null) : p.__b > 0 ? Gs(p.type, p.props, p.key, p.ref ? p.ref : null, p.__v) : p) != null ? (p.__ = n, p.__b = n.__b + 1, (b = rC(p, x, y = u + v, C)) === -1 ? d = Ii : (d = x[b] || Ii, x[b] = void 0, C--), sd(t, p, d, i, s, o, l, c, a, h), g = p.__e, (f = p.ref) && d.ref != f && (d.ref && od(d.ref, null, p), h.push(f, p.__c || g, p)), g != null && (m == null && (m = g), (k = d === Ii || d.__v === null) ? b == -1 && v-- : b !== y && (b === y + 1 ? v++ : b > y ? C > I - y ? v += b - y : v-- : v = b < y && b == y - 1 ? b - y : 0), y = u + v, typeof p.type != "function" || b === y && d.__k !== p.__k ? typeof p.type == "function" || b === y && !k ? p.__d !== void 0 ? (c = p.__d, p.__d = void 0) : c = g.nextSibling : c = Dy(t, g, c) : c = Ey(p, c, t), typeof n.type == "function" && (n.__d = c))) : (d = x[u]) && d.key == null && d.__e && (d.__e == c && (c = io(d)), vu(d, d, !1), x[u] = null);
  for (n.__e = m, u = w; u--; )
    x[u] != null && (typeof n.type == "function" && x[u].__e != null && x[u].__e == n.__d && (n.__d = x[u].__e.nextSibling), vu(x[u], x[u]));
}
function Ey(t, e, n) {
  for (var r, i = t.__k, s = 0; i && s < i.length; s++)
    (r = i[s]) && (r.__ = t, e = typeof r.type == "function" ? Ey(r, e, n) : Dy(n, r.__e, e));
  return e;
}
function $n(t, e) {
  return e = e || [], t == null || typeof t == "boolean" || (oa(t) ? t.some(function(n) {
    $n(n, e);
  }) : e.push(t)), e;
}
function Dy(t, e, n) {
  return n == null || n.parentNode !== t ? t.insertBefore(e, null) : e == n && e.parentNode != null || t.insertBefore(e, n), e.nextSibling;
}
function rC(t, e, n, r) {
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
function iC(t, e, n, r, i) {
  var s;
  for (s in n)
    s === "children" || s === "key" || s in e || fc(t, s, null, n[s], r);
  for (s in e)
    i && typeof e[s] != "function" || s === "children" || s === "key" || s === "value" || s === "checked" || n[s] === e[s] || fc(t, s, e[s], n[s], r);
}
function ng(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n == null ? "" : n) : t[e] = n == null ? "" : typeof n != "number" || tC.test(e) ? n : n + "px";
}
function fc(t, e, n, r, i) {
  var s;
  e:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof r == "string" && (t.style.cssText = r = ""), r)
          for (e in r)
            n && e in n || ng(t.style, e, "");
        if (n)
          for (e in n)
            r && n[e] === r[e] || ng(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      s = e !== (e = e.replace(/(PointerCapture)$|Capture$/, "$1")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + s] = n, n ? r || t.addEventListener(e, s ? ig : rg, s) : t.removeEventListener(e, s ? ig : rg, s);
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
function rg(t) {
  return this.l[t.type + !1](F.event ? F.event(t) : t);
}
function ig(t) {
  return this.l[t.type + !0](F.event ? F.event(t) : t);
}
function sd(t, e, n, r, i, s, o, l, c, a) {
  var h, u, f, d, p, g, m, y, b, k, v, x, w, C, I, O = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (c = n.__h, l = e.__e = n.__e, e.__h = null, s = [l]), (h = F.__b) && h(e);
  e:
    if (typeof O == "function")
      try {
        if (y = e.props, b = (h = O.contextType) && r[h.__c], k = h ? b ? b.props.value : h.__ : r, n.__c ? m = (u = e.__c = n.__c).__ = u.__E : ("prototype" in O && O.prototype.render ? e.__c = u = new O(y, k) : (e.__c = u = new vn(y, k), u.constructor = O, u.render = oC), b && b.sub(u), u.props = y, u.state || (u.state = {}), u.context = k, u.__n = r, f = u.__d = !0, u.__h = [], u._sb = []), u.__s == null && (u.__s = u.state), O.getDerivedStateFromProps != null && (u.__s == u.state && (u.__s = Pn({}, u.__s)), Pn(u.__s, O.getDerivedStateFromProps(y, u.__s))), d = u.props, p = u.state, u.__v = e, f)
          O.getDerivedStateFromProps == null && u.componentWillMount != null && u.componentWillMount(), u.componentDidMount != null && u.__h.push(u.componentDidMount);
        else {
          if (O.getDerivedStateFromProps == null && y !== d && u.componentWillReceiveProps != null && u.componentWillReceiveProps(y, k), !u.__e && (u.shouldComponentUpdate != null && u.shouldComponentUpdate(y, u.__s, k) === !1 || e.__v === n.__v)) {
            for (e.__v !== n.__v && (u.props = y, u.state = u.__s, u.__d = !1), e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(D) {
              D && (D.__ = e);
            }), v = 0; v < u._sb.length; v++)
              u.__h.push(u._sb[v]);
            u._sb = [], u.__h.length && o.push(u);
            break e;
          }
          u.componentWillUpdate != null && u.componentWillUpdate(y, u.__s, k), u.componentDidUpdate != null && u.__h.push(function() {
            u.componentDidUpdate(d, p, g);
          });
        }
        if (u.context = k, u.props = y, u.__P = t, u.__e = !1, x = F.__r, w = 0, "prototype" in O && O.prototype.render) {
          for (u.state = u.__s, u.__d = !1, x && x(e), h = u.render(u.props, u.state, u.context), C = 0; C < u._sb.length; C++)
            u.__h.push(u._sb[C]);
          u._sb = [];
        } else
          do
            u.__d = !1, x && x(e), h = u.render(u.props, u.state, u.context), u.state = u.__s;
          while (u.__d && ++w < 25);
        u.state = u.__s, u.getChildContext != null && (r = Pn(Pn({}, r), u.getChildContext())), f || u.getSnapshotBeforeUpdate == null || (g = u.getSnapshotBeforeUpdate(d, p)), Ay(t, oa(I = h != null && h.type === zn && h.key == null ? h.props.children : h) ? I : [I], e, n, r, i, s, o, l, c, a), u.base = e.__e, e.__h = null, u.__h.length && o.push(u), m && (u.__E = u.__ = null);
      } catch (D) {
        e.__v = null, (c || s != null) && (e.__e = l, e.__h = !!c, s[s.indexOf(l)] = null), F.__e(D, e, n);
      }
    else
      s == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = sC(n.__e, e, n, r, i, s, o, c, a);
  (h = F.diffed) && h(e);
}
function Ty(t, e, n) {
  for (var r = 0; r < n.length; r++)
    od(n[r], n[++r], n[++r]);
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
function sC(t, e, n, r, i, s, o, l, c) {
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
    if (s = s && Fo.call(t.childNodes), h = (f = n.props || Ii).dangerouslySetInnerHTML, u = d.dangerouslySetInnerHTML, !l) {
      if (s != null)
        for (f = {}, g = 0; g < t.attributes.length; g++)
          f[t.attributes[g].name] = t.attributes[g].value;
      (u || h) && (u && (h && u.__html == h.__html || u.__html === t.innerHTML) || (t.innerHTML = u && u.__html || ""));
    }
    if (iC(t, d, f, i, l), u)
      e.__k = [];
    else if (Ay(t, oa(g = e.props.children) ? g : [g], e, n, r, i && p !== "foreignObject", s, o, s ? s[0] : n.__k && io(n, 0), l, c), s != null)
      for (g = s.length; g--; )
        s[g] != null && Cy(s[g]);
    l || ("value" in d && (g = d.value) !== void 0 && (g !== t.value || p === "progress" && !g || p === "option" && g !== f.value) && fc(t, "value", g, f.value, !1), "checked" in d && (g = d.checked) !== void 0 && g !== t.checked && fc(t, "checked", g, f.checked, !1));
  }
  return t;
}
function od(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (r) {
    F.__e(r, n);
  }
}
function vu(t, e, n) {
  var r, i;
  if (F.unmount && F.unmount(t), (r = t.ref) && (r.current && r.current !== t.__e || od(r, null, e)), (r = t.__c) != null) {
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
      r[i] && vu(r[i], e, n || typeof t.type != "function");
  n || t.__e == null || Cy(t.__e), t.__ = t.__e = t.__d = void 0;
}
function oC(t, e, n) {
  return this.constructor(t, n);
}
function so(t, e, n) {
  var r, i, s, o;
  F.__ && F.__(t, e), i = (r = typeof n == "function") ? null : n && n.__k || e.__k, s = [], o = [], sd(e, t = (!r && n || e).__k = Kt(zn, null, [t]), i || Ii, Ii, e.ownerSVGElement !== void 0, !r && n ? [n] : i ? null : e.firstChild ? Fo.call(e.childNodes) : null, s, !r && n ? n : i ? i.__e : e.firstChild, r, o), Ty(s, t, o);
}
function My(t, e) {
  so(t, e, My);
}
function lC(t, e, n) {
  var r, i, s, o, l = Pn({}, t.props);
  for (s in t.type && t.type.defaultProps && (o = t.type.defaultProps), e)
    s == "key" ? r = e[s] : s == "ref" ? i = e[s] : l[s] = e[s] === void 0 && o !== void 0 ? o[s] : e[s];
  return arguments.length > 2 && (l.children = arguments.length > 3 ? Fo.call(arguments, 2) : n), Gs(t.type, l, r || t.key, i || t.ref, null);
}
function cC(t, e) {
  var n = { __c: e = "__cC" + ky++, __: t, Consumer: function(r, i) {
    return r.children(i);
  }, Provider: function(r) {
    var i, s;
    return this.getChildContext || (i = [], (s = {})[e] = this, this.getChildContext = function() {
      return s;
    }, this.shouldComponentUpdate = function(o) {
      this.props.value !== o.value && i.some(function(l) {
        l.__e = !0, bu(l);
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
Fo = _y.slice, F = { __e: function(t, e, n, r) {
  for (var i, s, o; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((s = i.constructor) && s.getDerivedStateFromError != null && (i.setState(s.getDerivedStateFromError(t)), o = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, r || {}), o = i.__d), o)
          return i.__E = i;
      } catch (l) {
        t = l;
      }
  throw t;
} }, wy = 0, vn.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Pn({}, this.state), typeof t == "function" && (t = t(Pn({}, n), this.props)), t && Pn(n, t), t != null && this.__v && (e && this._sb.push(e), bu(this));
}, vn.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), bu(this));
}, vn.prototype.render = zn, Ir = [], xy = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, yu = function(t, e) {
  return t.__v.__b - e.__v.__b;
}, uc.__r = 0, ky = 0;
var pr, we, sh, sg, Yi = 0, Oy = [], zl = [], og = F.__b, lg = F.__r, cg = F.diffed, ag = F.__c, hg = F.unmount;
function ps(t, e) {
  F.__h && F.__h(we, t, Yi || e), Yi = 0;
  var n = we.__H || (we.__H = { __: [], __h: [] });
  return t >= n.__.length && n.__.push({ __V: zl }), n.__[t];
}
function et(t) {
  return Yi = 1, Ly(Iy, t);
}
function Ly(t, e, n) {
  var r = ps(pr++, 2);
  if (r.t = t, !r.__c && (r.__ = [n ? n(e) : Iy(void 0, e), function(l) {
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
function Zr(t, e) {
  var n = ps(pr++, 3);
  !F.__s && ld(n.__H, e) && (n.__ = t, n.i = e, we.__H.__h.push(n));
}
function la(t, e) {
  var n = ps(pr++, 4);
  !F.__s && ld(n.__H, e) && (n.__ = t, n.i = e, we.__h.push(n));
}
function Ni(t) {
  return Yi = 5, Fn(function() {
    return { current: t };
  }, []);
}
function aC(t, e, n) {
  Yi = 6, la(function() {
    return typeof t == "function" ? (t(e()), function() {
      return t(null);
    }) : t ? (t.current = e(), function() {
      return t.current = null;
    }) : void 0;
  }, n == null ? n : n.concat(t));
}
function Fn(t, e) {
  var n = ps(pr++, 7);
  return ld(n.__H, e) ? (n.__V = t(), n.i = e, n.__h = t, n.__V) : n.__;
}
function hC(t, e) {
  return Yi = 8, Fn(function() {
    return t;
  }, e);
}
function Ry(t) {
  var e = we.context[t.__c], n = ps(pr++, 9);
  return n.c = t, e ? (n.__ == null && (n.__ = !0, e.sub(we)), e.props.value) : t.__;
}
function wu(t, e) {
  F.useDebugValue && F.useDebugValue(e ? e(t) : t);
}
function uC() {
  var t = ps(pr++, 11);
  if (!t.__) {
    for (var e = we.__v; e !== null && !e.__m && e.__ !== null; )
      e = e.__;
    var n = e.__m || (e.__m = [0, 0]);
    t.__ = "P" + n[0] + "-" + n[1]++;
  }
  return t.__;
}
function fC() {
  for (var t; t = Oy.shift(); )
    if (t.__P && t.__H)
      try {
        t.__H.__h.forEach(Vl), t.__H.__h.forEach(xu), t.__H.__h = [];
      } catch (e) {
        t.__H.__h = [], F.__e(e, t.__v);
      }
}
F.__b = function(t) {
  we = null, og && og(t);
}, F.__r = function(t) {
  lg && lg(t), pr = 0;
  var e = (we = t.__c).__H;
  e && (sh === we ? (e.__h = [], we.__h = [], e.__.forEach(function(n) {
    n.__N && (n.__ = n.__N), n.__V = zl, n.__N = n.i = void 0;
  })) : (e.__h.forEach(Vl), e.__h.forEach(xu), e.__h = [], pr = 0)), sh = we;
}, F.diffed = function(t) {
  cg && cg(t);
  var e = t.__c;
  e && e.__H && (e.__H.__h.length && (Oy.push(e) !== 1 && sg === F.requestAnimationFrame || ((sg = F.requestAnimationFrame) || dC)(fC)), e.__H.__.forEach(function(n) {
    n.i && (n.__H = n.i), n.__V !== zl && (n.__ = n.__V), n.i = void 0, n.__V = zl;
  })), sh = we = null;
}, F.__c = function(t, e) {
  e.some(function(n) {
    try {
      n.__h.forEach(Vl), n.__h = n.__h.filter(function(r) {
        return !r.__ || xu(r);
      });
    } catch (r) {
      e.some(function(i) {
        i.__h && (i.__h = []);
      }), e = [], F.__e(r, n.__v);
    }
  }), ag && ag(t, e);
}, F.unmount = function(t) {
  hg && hg(t);
  var e, n = t.__c;
  n && n.__H && (n.__H.__.forEach(function(r) {
    try {
      Vl(r);
    } catch (i) {
      e = i;
    }
  }), n.__H = void 0, e && F.__e(e, n.__v));
};
var ug = typeof requestAnimationFrame == "function";
function dC(t) {
  var e, n = function() {
    clearTimeout(r), ug && cancelAnimationFrame(e), setTimeout(t);
  }, r = setTimeout(n, 100);
  ug && (e = requestAnimationFrame(n));
}
function Vl(t) {
  var e = we, n = t.__c;
  typeof n == "function" && (t.__c = void 0, n()), we = e;
}
function xu(t) {
  var e = we;
  t.__c = t.__(), we = e;
}
function ld(t, e) {
  return !t || t.length !== e.length || e.some(function(n, r) {
    return n !== t[r];
  });
}
function Iy(t, e) {
  return typeof e == "function" ? e(t) : e;
}
function Ny(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function ku(t, e) {
  for (var n in t)
    if (n !== "__source" && !(n in e))
      return !0;
  for (var r in e)
    if (r !== "__source" && t[r] !== e[r])
      return !0;
  return !1;
}
function oh(t, e) {
  return t === e && (t !== 0 || 1 / t == 1 / e) || t != t && e != e;
}
function _u(t) {
  this.props = t;
}
function pC(t, e) {
  function n(i) {
    var s = this.props.ref, o = s == i.ref;
    return !o && s && (s.call ? s(null) : s.current = null), e ? !e(this.props, i) || !o : ku(this.props, i);
  }
  function r(i) {
    return this.shouldComponentUpdate = n, Kt(t, i);
  }
  return r.displayName = "Memo(" + (t.displayName || t.name) + ")", r.prototype.isReactComponent = !0, r.__f = !0, r;
}
(_u.prototype = new vn()).isPureReactComponent = !0, _u.prototype.shouldComponentUpdate = function(t, e) {
  return ku(this.props, t) || ku(this.state, e);
};
var fg = F.__b;
F.__b = function(t) {
  t.type && t.type.__f && t.ref && (t.props.ref = t.ref, t.ref = null), fg && fg(t);
};
var gC = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function mC(t) {
  function e(n) {
    var r = Ny({}, n);
    return delete r.ref, t(r, n.ref || null);
  }
  return e.$$typeof = gC, e.render = e, e.prototype.isReactComponent = e.__f = !0, e.displayName = "ForwardRef(" + (t.displayName || t.name) + ")", e;
}
var dg = function(t, e) {
  return t == null ? null : $n($n(t).map(e));
}, yC = { map: dg, forEach: dg, count: function(t) {
  return t ? $n(t).length : 0;
}, only: function(t) {
  var e = $n(t);
  if (e.length !== 1)
    throw "Children.only";
  return e[0];
}, toArray: $n }, bC = F.__e;
F.__e = function(t, e, n, r) {
  if (t.then) {
    for (var i, s = e; s = s.__; )
      if ((i = s.__c) && i.__c)
        return e.__e == null && (e.__e = n.__e, e.__k = n.__k), i.__c(t, e);
  }
  bC(t, e, n, r);
};
var pg = F.unmount;
function By(t, e, n) {
  return t && (t.__c && t.__c.__H && (t.__c.__H.__.forEach(function(r) {
    typeof r.__c == "function" && r.__c();
  }), t.__c.__H = null), (t = Ny({}, t)).__c != null && (t.__c.__P === n && (t.__c.__P = e), t.__c = null), t.__k = t.__k && t.__k.map(function(r) {
    return By(r, e, n);
  })), t;
}
function Py(t, e, n) {
  return t && (t.__v = null, t.__k = t.__k && t.__k.map(function(r) {
    return Py(r, e, n);
  }), t.__c && t.__c.__P === e && (t.__e && n.insertBefore(t.__e, t.__d), t.__c.__e = !0, t.__c.__P = n)), t;
}
function Ul() {
  this.__u = 0, this.t = null, this.__b = null;
}
function Fy(t) {
  var e = t.__.__c;
  return e && e.__a && e.__a(t);
}
function vC(t) {
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
    return Kt(n, s);
  }
  return i.displayName = "Lazy", i.__f = !0, i;
}
function Fs() {
  this.u = null, this.o = null;
}
F.unmount = function(t) {
  var e = t.__c;
  e && e.__R && e.__R(), e && t.__h === !0 && (t.type = null), pg && pg(t);
}, (Ul.prototype = new vn()).__c = function(t, e) {
  var n = e.__c, r = this;
  r.t == null && (r.t = []), r.t.push(n);
  var i = Fy(r.__v), s = !1, o = function() {
    s || (s = !0, n.__R = null, i ? i(l) : l());
  };
  n.__R = o;
  var l = function() {
    if (!--r.__u) {
      if (r.state.__a) {
        var a = r.state.__a;
        r.__v.__k[0] = Py(a, a.__c.__P, a.__c.__O);
      }
      var h;
      for (r.setState({ __a: r.__b = null }); h = r.t.pop(); )
        h.forceUpdate();
    }
  }, c = e.__h === !0;
  r.__u++ || c || r.setState({ __a: r.__b = r.__v.__k[0] }), t.then(o, o);
}, Ul.prototype.componentWillUnmount = function() {
  this.t = [];
}, Ul.prototype.render = function(t, e) {
  if (this.__b) {
    if (this.__v.__k) {
      var n = document.createElement("div"), r = this.__v.__k[0].__c;
      this.__v.__k[0] = By(this.__b, n, r.__O = r.__P);
    }
    this.__b = null;
  }
  var i = e.__a && Kt(zn, null, t.fallback);
  return i && (i.__h = null), [Kt(zn, null, e.__a ? null : t.children), i];
};
var gg = function(t, e, n) {
  if (++n[1] === n[0] && t.o.delete(e), t.props.revealOrder && (t.props.revealOrder[0] !== "t" || !t.o.size))
    for (n = t.u; n; ) {
      for (; n.length > 3; )
        n.pop()();
      if (n[1] < n[0])
        break;
      t.u = n = n[2];
    }
};
function wC(t) {
  return this.getChildContext = function() {
    return t.context;
  }, t.children;
}
function xC(t) {
  var e = this, n = t.i;
  e.componentWillUnmount = function() {
    so(null, e.l), e.l = null, e.i = null;
  }, e.i && e.i !== n && e.componentWillUnmount(), e.l || (e.i = n, e.l = { nodeType: 1, parentNode: n, childNodes: [], appendChild: function(r) {
    this.childNodes.push(r), e.i.appendChild(r);
  }, insertBefore: function(r, i) {
    this.childNodes.push(r), e.i.appendChild(r);
  }, removeChild: function(r) {
    this.childNodes.splice(this.childNodes.indexOf(r) >>> 1, 1), e.i.removeChild(r);
  } }), so(Kt(wC, { context: e.context }, t.__v), e.l);
}
function kC(t, e) {
  var n = Kt(xC, { __v: t, i: e });
  return n.containerInfo = e, n;
}
(Fs.prototype = new vn()).__a = function(t) {
  var e = this, n = Fy(e.__v), r = e.o.get(t);
  return r[0]++, function(i) {
    var s = function() {
      e.props.revealOrder ? (r.push(i), gg(e, t, r)) : i();
    };
    n ? n(s) : s();
  };
}, Fs.prototype.render = function(t) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var e = $n(t.children);
  t.revealOrder && t.revealOrder[0] === "b" && e.reverse();
  for (var n = e.length; n--; )
    this.o.set(e[n], this.u = [1, 0, this.u]);
  return t.children;
}, Fs.prototype.componentDidUpdate = Fs.prototype.componentDidMount = function() {
  var t = this;
  this.o.forEach(function(e, n) {
    gg(t, n, e);
  });
};
var $y = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, _C = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, CC = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, SC = /[A-Z0-9]/g, AC = typeof document < "u", EC = function(t) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(t);
};
function DC(t, e, n) {
  return e.__k == null && (e.textContent = ""), so(t, e), typeof n == "function" && n(), t ? t.__c : null;
}
function TC(t, e, n) {
  return My(t, e), typeof n == "function" && n(), t ? t.__c : null;
}
vn.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(t) {
  Object.defineProperty(vn.prototype, t, { configurable: !0, get: function() {
    return this["UNSAFE_" + t];
  }, set: function(e) {
    Object.defineProperty(this, t, { configurable: !0, writable: !0, value: e });
  } });
});
var mg = F.event;
function MC() {
}
function OC() {
  return this.cancelBubble;
}
function LC() {
  return this.defaultPrevented;
}
F.event = function(t) {
  return mg && (t = mg(t)), t.persist = MC, t.isPropagationStopped = OC, t.isDefaultPrevented = LC, t.nativeEvent = t;
};
var cd, RC = { enumerable: !1, configurable: !0, get: function() {
  return this.class;
} }, yg = F.vnode;
F.vnode = function(t) {
  typeof t.type == "string" && function(e) {
    var n = e.props, r = e.type, i = {};
    for (var s in n) {
      var o = n[s];
      if (!(s === "value" && "defaultValue" in n && o == null || AC && s === "children" && r === "noscript" || s === "class" || s === "className")) {
        var l = s.toLowerCase();
        s === "defaultValue" && "value" in n && n.value == null ? s = "value" : s === "download" && o === !0 ? o = "" : l === "ondoubleclick" ? s = "ondblclick" : l !== "onchange" || r !== "input" && r !== "textarea" || EC(n.type) ? l === "onfocus" ? s = "onfocusin" : l === "onblur" ? s = "onfocusout" : CC.test(s) ? s = l : r.indexOf("-") === -1 && _C.test(s) ? s = s.replace(SC, "-$&").toLowerCase() : o === null && (o = void 0) : l = s = "oninput", l === "oninput" && i[s = l] && (s = "oninputCapture"), i[s] = o;
      }
    }
    r == "select" && i.multiple && Array.isArray(i.value) && (i.value = $n(n.children).forEach(function(c) {
      c.props.selected = i.value.indexOf(c.props.value) != -1;
    })), r == "select" && i.defaultValue != null && (i.value = $n(n.children).forEach(function(c) {
      c.props.selected = i.multiple ? i.defaultValue.indexOf(c.props.value) != -1 : i.defaultValue == c.props.value;
    })), n.class && !n.className ? (i.class = n.class, Object.defineProperty(i, "className", RC)) : (n.className && !n.class || n.class && n.className) && (i.class = i.className = n.className), e.props = i;
  }(t), t.$$typeof = $y, yg && yg(t);
};
var bg = F.__r;
F.__r = function(t) {
  bg && bg(t), cd = t.__c;
};
var vg = F.diffed;
F.diffed = function(t) {
  vg && vg(t);
  var e = t.props, n = t.__e;
  n != null && t.type === "textarea" && "value" in e && e.value !== n.value && (n.value = e.value == null ? "" : e.value), cd = null;
};
var IC = { ReactCurrentDispatcher: { current: { readContext: function(t) {
  return cd.__n[t.__c].props.value;
} } } };
function NC(t) {
  return Kt.bind(null, t);
}
function ca(t) {
  return !!t && t.$$typeof === $y;
}
function BC(t) {
  return ca(t) && t.type === zn;
}
function PC(t) {
  return ca(t) ? lC.apply(null, arguments) : t;
}
function FC(t) {
  return !!t.__k && (so(null, t), !0);
}
function $C(t) {
  return t && (t.base || t.nodeType === 1 && t) || null;
}
var qC = function(t, e) {
  return t(e);
}, HC = function(t, e) {
  return t(e);
}, zC = zn;
function qy(t) {
  t();
}
function VC(t) {
  return t;
}
function UC() {
  return [!1, qy];
}
var WC = la, jC = ca;
function GC(t, e) {
  var n = e(), r = et({ h: { __: n, v: e } }), i = r[0].h, s = r[1];
  return la(function() {
    i.__ = n, i.v = e, oh(i.__, e()) || s({ h: i });
  }, [t, n, e]), Zr(function() {
    return oh(i.__, i.v()) || s({ h: i }), t(function() {
      oh(i.__, i.v()) || s({ h: i });
    });
  }, [t]), n;
}
var Xr = { useState: et, useId: uC, useReducer: Ly, useEffect: Zr, useLayoutEffect: la, useInsertionEffect: WC, useTransition: UC, useDeferredValue: VC, useSyncExternalStore: GC, startTransition: qy, useRef: Ni, useImperativeHandle: aC, useMemo: Fn, useCallback: hC, useContext: Ry, useDebugValue: wu, version: "17.0.2", Children: yC, render: DC, hydrate: TC, unmountComponentAtNode: FC, createPortal: kC, createElement: Kt, createContext: cC, createFactory: NC, cloneElement: PC, createRef: nC, Fragment: zn, isValidElement: ca, isElement: jC, isFragment: BC, findDOMNode: $C, Component: vn, PureComponent: _u, memo: pC, forwardRef: mC, flushSync: HC, unstable_batchedUpdates: qC, StrictMode: zC, Suspense: Ul, SuspenseList: Fs, lazy: vC, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: IC };
function YC(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function KC(t) {
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
var JC = function(e, n, r, i) {
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
}, be = "-ms-", Ys = "-moz-", ie = "-webkit-", Hy = "comm", aa = "rule", ad = "decl", ZC = "@import", zy = "@keyframes", XC = "@layer", QC = Math.abs, hd = String.fromCharCode, Cu = Object.assign;
function eS(t, e) {
  return ze(t, 0) ^ 45 ? (((e << 2 ^ ze(t, 0)) << 2 ^ ze(t, 1)) << 2 ^ ze(t, 2)) << 2 ^ ze(t, 3) : 0;
}
function Vy(t) {
  return t.trim();
}
function Bn(t, e) {
  return (t = e.exec(t)) ? t[0] : t;
}
function K(t, e, n) {
  return t.replace(e, n);
}
function Wl(t, e) {
  return t.indexOf(e);
}
function ze(t, e) {
  return t.charCodeAt(e) | 0;
}
function Ki(t, e, n) {
  return t.slice(e, n);
}
function an(t) {
  return t.length;
}
function Uy(t) {
  return t.length;
}
function $s(t, e) {
  return e.push(t), t;
}
function tS(t, e) {
  return t.map(e).join("");
}
function wg(t, e) {
  return t.filter(function(n) {
    return !Bn(n, e);
  });
}
var ha = 1, Ji = 1, Wy = 0, Bt = 0, Me = 0, gs = "";
function ua(t, e, n, r, i, s, o, l) {
  return { value: t, root: e, parent: n, type: r, props: i, children: s, line: ha, column: Ji, length: o, return: "", siblings: l };
}
function Zn(t, e) {
  return Cu(ua("", null, null, "", null, null, 0, t.siblings), t, { length: -t.length }, e);
}
function wi(t) {
  for (; t.root; )
    t = Zn(t.root, { children: [t] });
  $s(t, t.siblings);
}
function nS() {
  return Me;
}
function rS() {
  return Me = Bt > 0 ? ze(gs, --Bt) : 0, Ji--, Me === 10 && (Ji = 1, ha--), Me;
}
function Gt() {
  return Me = Bt < Wy ? ze(gs, Bt++) : 0, Ji++, Me === 10 && (Ji = 1, ha++), Me;
}
function Vr() {
  return ze(gs, Bt);
}
function jl() {
  return Bt;
}
function fa(t, e) {
  return Ki(gs, t, e);
}
function Su(t) {
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
function iS(t) {
  return ha = Ji = 1, Wy = an(gs = t), Bt = 0, [];
}
function sS(t) {
  return gs = "", t;
}
function lh(t) {
  return Vy(fa(Bt - 1, Au(t === 91 ? t + 2 : t === 40 ? t + 1 : t)));
}
function oS(t) {
  for (; (Me = Vr()) && Me < 33; )
    Gt();
  return Su(t) > 2 || Su(Me) > 3 ? "" : " ";
}
function lS(t, e) {
  for (; --e && Gt() && !(Me < 48 || Me > 102 || Me > 57 && Me < 65 || Me > 70 && Me < 97); )
    ;
  return fa(t, jl() + (e < 6 && Vr() == 32 && Gt() == 32));
}
function Au(t) {
  for (; Gt(); )
    switch (Me) {
      case t:
        return Bt;
      case 34:
      case 39:
        t !== 34 && t !== 39 && Au(Me);
        break;
      case 40:
        t === 41 && Au(t);
        break;
      case 92:
        Gt();
        break;
    }
  return Bt;
}
function cS(t, e) {
  for (; Gt() && t + Me !== 47 + 10; )
    if (t + Me === 42 + 42 && Vr() === 47)
      break;
  return "/*" + fa(e, Bt - 1) + "*" + hd(t === 47 ? t : Gt());
}
function aS(t) {
  for (; !Su(Vr()); )
    Gt();
  return fa(t, Bt);
}
function hS(t) {
  return sS(Gl("", null, null, null, [""], t = iS(t), 0, [0], t));
}
function Gl(t, e, n, r, i, s, o, l, c) {
  for (var a = 0, h = 0, u = o, f = 0, d = 0, p = 0, g = 1, m = 1, y = 1, b = 0, k = "", v = i, x = s, w = r, C = k; m; )
    switch (p = b, b = Gt()) {
      case 40:
        if (p != 108 && ze(C, u - 1) == 58) {
          Wl(C += K(lh(b), "&", "&\f"), "&\f") != -1 && (y = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        C += lh(b);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        C += oS(p);
        break;
      case 92:
        C += lS(jl() - 1, 7);
        continue;
      case 47:
        switch (Vr()) {
          case 42:
          case 47:
            $s(uS(cS(Gt(), jl()), e, n, c), c);
            break;
          default:
            C += "/";
        }
        break;
      case 123 * g:
        l[a++] = an(C) * y;
      case 125 * g:
      case 59:
      case 0:
        switch (b) {
          case 0:
          case 125:
            m = 0;
          case 59 + h:
            y == -1 && (C = K(C, /\f/g, "")), d > 0 && an(C) - u && $s(d > 32 ? kg(C + ";", r, n, u - 1, c) : kg(K(C, " ", "") + ";", r, n, u - 2, c), c);
            break;
          case 59:
            C += ";";
          default:
            if ($s(w = xg(C, e, n, a, h, i, l, k, v = [], x = [], u, s), s), b === 123)
              if (h === 0)
                Gl(C, e, w, w, v, s, u, l, x);
              else
                switch (f === 99 && ze(C, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Gl(t, w, w, r && $s(xg(t, w, w, 0, 0, i, l, k, i, v = [], u, x), x), i, x, u, l, r ? v : x);
                    break;
                  default:
                    Gl(C, w, w, w, [""], x, 0, l, x);
                }
        }
        a = h = d = 0, g = y = 1, k = C = "", u = o;
        break;
      case 58:
        u = 1 + an(C), d = p;
      default:
        if (g < 1) {
          if (b == 123)
            --g;
          else if (b == 125 && g++ == 0 && rS() == 125)
            continue;
        }
        switch (C += hd(b), b * g) {
          case 38:
            y = h > 0 ? 1 : (C += "\f", -1);
            break;
          case 44:
            l[a++] = (an(C) - 1) * y, y = 1;
            break;
          case 64:
            Vr() === 45 && (C += lh(Gt())), f = Vr(), h = u = an(k = C += aS(jl())), b++;
            break;
          case 45:
            p === 45 && an(C) == 2 && (g = 0);
        }
    }
  return s;
}
function xg(t, e, n, r, i, s, o, l, c, a, h, u) {
  for (var f = i - 1, d = i === 0 ? s : [""], p = Uy(d), g = 0, m = 0, y = 0; g < r; ++g)
    for (var b = 0, k = Ki(t, f + 1, f = QC(m = o[g])), v = t; b < p; ++b)
      (v = Vy(m > 0 ? d[b] + " " + k : K(k, /&\f/g, d[b]))) && (c[y++] = v);
  return ua(t, e, n, i === 0 ? aa : l, c, a, h, u);
}
function uS(t, e, n, r) {
  return ua(t, e, n, Hy, hd(nS()), Ki(t, 2, -2), 0, r);
}
function kg(t, e, n, r, i) {
  return ua(t, e, n, ad, Ki(t, 0, r), Ki(t, r + 1, -1), r, i);
}
function jy(t, e, n) {
  switch (eS(t, e)) {
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
      return Ys + t + t;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return ie + t + Ys + t + be + t + t;
    case 5936:
      switch (ze(t, e + 11)) {
        case 114:
          return ie + t + be + K(t, /[svh]\w+-[tblr]{2}/, "tb") + t;
        case 108:
          return ie + t + be + K(t, /[svh]\w+-[tblr]{2}/, "tb-rl") + t;
        case 45:
          return ie + t + be + K(t, /[svh]\w+-[tblr]{2}/, "lr") + t;
      }
    case 6828:
    case 4268:
    case 2903:
      return ie + t + be + t + t;
    case 6165:
      return ie + t + be + "flex-" + t + t;
    case 5187:
      return ie + t + K(t, /(\w+).+(:[^]+)/, ie + "box-$1$2" + be + "flex-$1$2") + t;
    case 5443:
      return ie + t + be + "flex-item-" + K(t, /flex-|-self/g, "") + (Bn(t, /flex-|baseline/) ? "" : be + "grid-row-" + K(t, /flex-|-self/g, "")) + t;
    case 4675:
      return ie + t + be + "flex-line-pack" + K(t, /align-content|flex-|-self/g, "") + t;
    case 5548:
      return ie + t + be + K(t, "shrink", "negative") + t;
    case 5292:
      return ie + t + be + K(t, "basis", "preferred-size") + t;
    case 6060:
      return ie + "box-" + K(t, "-grow", "") + ie + t + be + K(t, "grow", "positive") + t;
    case 4554:
      return ie + K(t, /([^-])(transform)/g, "$1" + ie + "$2") + t;
    case 6187:
      return K(K(K(t, /(zoom-|grab)/, ie + "$1"), /(image-set)/, ie + "$1"), t, "") + t;
    case 5495:
    case 3959:
      return K(t, /(image-set\([^]*)/, ie + "$1$`$1");
    case 4968:
      return K(K(t, /(.+:)(flex-)?(.*)/, ie + "box-pack:$3" + be + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + ie + t + t;
    case 4200:
      if (!Bn(t, /flex-|baseline/))
        return be + "grid-column-align" + Ki(t, e) + t;
      break;
    case 2592:
    case 3360:
      return be + K(t, "template-", "") + t;
    case 4384:
    case 3616:
      return n && n.some(function(r, i) {
        return e = i, Bn(r.props, /grid-\w+-end/);
      }) ? ~Wl(t + (n = n[e].value), "span") ? t : be + K(t, "-start", "") + t + be + "grid-row-span:" + (~Wl(n, "span") ? Bn(n, /\d+/) : +Bn(n, /\d+/) - +Bn(t, /\d+/)) + ";" : be + K(t, "-start", "") + t;
    case 4896:
    case 4128:
      return n && n.some(function(r) {
        return Bn(r.props, /grid-\w+-start/);
      }) ? t : be + K(K(t, "-end", "-span"), "span ", "") + t;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return K(t, /(.+)-inline(.+)/, ie + "$1$2") + t;
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
      if (an(t) - 1 - e > 6)
        switch (ze(t, e + 1)) {
          case 109:
            if (ze(t, e + 4) !== 45)
              break;
          case 102:
            return K(t, /(.+:)(.+)-([^]+)/, "$1" + ie + "$2-$3$1" + Ys + (ze(t, e + 3) == 108 ? "$3" : "$2-$3")) + t;
          case 115:
            return ~Wl(t, "stretch") ? jy(K(t, "stretch", "fill-available"), e, n) + t : t;
        }
      break;
    case 5152:
    case 5920:
      return K(t, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(r, i, s, o, l, c, a) {
        return be + i + ":" + s + a + (o ? be + i + "-span:" + (l ? c : +c - +s) + a : "") + t;
      });
    case 4949:
      if (ze(t, e + 6) === 121)
        return K(t, ":", ":" + ie) + t;
      break;
    case 6444:
      switch (ze(t, ze(t, 14) === 45 ? 18 : 11)) {
        case 120:
          return K(t, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + ie + (ze(t, 14) === 45 ? "inline-" : "") + "box$3$1" + ie + "$2$3$1" + be + "$2box$3") + t;
        case 100:
          return K(t, ":", ":" + be) + t;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return K(t, "scroll-", "scroll-snap-") + t;
  }
  return t;
}
function dc(t, e) {
  for (var n = "", r = 0; r < t.length; r++)
    n += e(t[r], r, t, e) || "";
  return n;
}
function fS(t, e, n, r) {
  switch (t.type) {
    case XC:
      if (t.children.length)
        break;
    case ZC:
    case ad:
      return t.return = t.return || t.value;
    case Hy:
      return "";
    case zy:
      return t.return = t.value + "{" + dc(t.children, r) + "}";
    case aa:
      if (!an(t.value = t.props.join(",")))
        return "";
  }
  return an(n = dc(t.children, r)) ? t.return = t.value + "{" + n + "}" : "";
}
function dS(t) {
  var e = Uy(t);
  return function(n, r, i, s) {
    for (var o = "", l = 0; l < e; l++)
      o += t[l](n, r, i, s) || "";
    return o;
  };
}
function pS(t) {
  return function(e) {
    e.root || (e = e.return) && t(e);
  };
}
function gS(t, e, n, r) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case ad:
        t.return = jy(t.value, t.length, n);
        return;
      case zy:
        return dc([Zn(t, { value: K(t.value, "@", "@" + ie) })], r);
      case aa:
        if (t.length)
          return tS(n = t.props, function(i) {
            switch (Bn(i, r = /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                wi(Zn(t, { props: [K(i, /:(read-\w+)/, ":" + Ys + "$1")] })), wi(Zn(t, { props: [i] })), Cu(t, { props: wg(n, r) });
                break;
              case "::placeholder":
                wi(Zn(t, { props: [K(i, /:(plac\w+)/, ":" + ie + "input-$1")] })), wi(Zn(t, { props: [K(i, /:(plac\w+)/, ":" + Ys + "$1")] })), wi(Zn(t, { props: [K(i, /:(plac\w+)/, be + "input-$1")] })), wi(Zn(t, { props: [i] })), Cu(t, { props: wg(n, r) });
                break;
            }
            return "";
          });
    }
}
var mS = {
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
}, Qr = typeof process < "u" && {} !== void 0 && ({}.REACT_APP_SC_ATTR || {}.SC_ATTR) || "data-styled", ud = typeof window < "u" && "HTMLElement" in window, yS = Boolean(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && {} !== void 0 && {}.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && {}.REACT_APP_SC_DISABLE_SPEEDY !== "" ? {}.REACT_APP_SC_DISABLE_SPEEDY !== "false" && {}.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && {} !== void 0 && {}.SC_DISABLE_SPEEDY !== void 0 && {}.SC_DISABLE_SPEEDY !== "" ? {}.SC_DISABLE_SPEEDY !== "false" && {}.SC_DISABLE_SPEEDY : {}.NODE_ENV !== "production"), _g = /invalid hook call/i, il = /* @__PURE__ */ new Set(), bS = function(t, e) {
  if ({}.NODE_ENV !== "production") {
    var n = e ? ' with the id of "'.concat(e, '"') : "", r = "The component ".concat(t).concat(n, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, i = console.error;
    try {
      var s = !0;
      console.error = function(o) {
        for (var l = [], c = 1; c < arguments.length; c++)
          l[c - 1] = arguments[c];
        _g.test(o) ? (s = !1, il.delete(r)) : i.apply(void 0, Gi([o], l, !1));
      }, Ni(), s && !il.has(r) && (console.warn(r), il.add(r));
    } catch (o) {
      _g.test(o.message) && il.delete(r);
    } finally {
      console.error = i;
    }
  }
}, da = Object.freeze([]), Zi = Object.freeze({});
function vS(t, e, n) {
  return n === void 0 && (n = Zi), t.theme !== n.theme && t.theme || e || n.theme;
}
var Eu = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), wS = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, xS = /(^-|-$)/g;
function Cg(t) {
  return t.replace(wS, "-").replace(xS, "");
}
var kS = /(a)(d)/gi, Sg = function(t) {
  return String.fromCharCode(t + (t > 25 ? 39 : 97));
};
function Du(t) {
  var e, n = "";
  for (e = Math.abs(t); e > 52; e = e / 52 | 0)
    n = Sg(e % 52) + n;
  return (Sg(e % 52) + n).replace(kS, "$1-$2");
}
var ch, Nr = function(t, e) {
  for (var n = e.length; n; )
    t = 33 * t ^ e.charCodeAt(--n);
  return t;
}, Gy = function(t) {
  return Nr(5381, t);
};
function _S(t) {
  return Du(Gy(t) >>> 0);
}
function Yy(t) {
  return {}.NODE_ENV !== "production" && typeof t == "string" && t || t.displayName || t.name || "Component";
}
function ah(t) {
  return typeof t == "string" && ({}.NODE_ENV === "production" || t.charAt(0) === t.charAt(0).toLowerCase());
}
var Ky = typeof Symbol == "function" && Symbol.for, Jy = Ky ? Symbol.for("react.memo") : 60115, CS = Ky ? Symbol.for("react.forward_ref") : 60112, SS = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, AS = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, Zy = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, ES = ((ch = {})[CS] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, ch[Jy] = Zy, ch);
function Ag(t) {
  return ("type" in (e = t) && e.type.$$typeof) === Jy ? Zy : "$$typeof" in t ? ES[t.$$typeof] : SS;
  var e;
}
var DS = Object.defineProperty, TS = Object.getOwnPropertyNames, Eg = Object.getOwnPropertySymbols, MS = Object.getOwnPropertyDescriptor, OS = Object.getPrototypeOf, Dg = Object.prototype;
function Xy(t, e, n) {
  if (typeof e != "string") {
    if (Dg) {
      var r = OS(e);
      r && r !== Dg && Xy(t, r, n);
    }
    var i = TS(e);
    Eg && (i = i.concat(Eg(e)));
    for (var s = Ag(t), o = Ag(e), l = 0; l < i.length; ++l) {
      var c = i[l];
      if (!(c in AS || n && n[c] || o && c in o || s && c in s)) {
        var a = MS(e, c);
        try {
          DS(t, c, a);
        } catch {
        }
      }
    }
  }
  return t;
}
function Xi(t) {
  return typeof t == "function";
}
function fd(t) {
  return typeof t == "object" && "styledComponentId" in t;
}
function Fr(t, e) {
  return t && e ? "".concat(t, " ").concat(e) : t || e || "";
}
function Tg(t, e) {
  if (t.length === 0)
    return "";
  for (var n = t[0], r = 1; r < t.length; r++)
    n += e ? e + t[r] : t[r];
  return n;
}
function Qi(t) {
  return t !== null && typeof t == "object" && t.constructor.name === Object.name && !("props" in t && t.$$typeof);
}
function Tu(t, e, n) {
  if (n === void 0 && (n = !1), !n && !Qi(t) && !Array.isArray(t))
    return e;
  if (Array.isArray(e))
    for (var r = 0; r < e.length; r++)
      t[r] = Tu(t[r], e[r]);
  else if (Qi(e))
    for (var r in e)
      t[r] = Tu(t[r], e[r]);
  return t;
}
function dd(t, e) {
  Object.defineProperty(t, "toString", { value: e });
}
var LS = {}.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function RS() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  for (var n = t[0], r = [], i = 1, s = t.length; i < s; i += 1)
    r.push(t[i]);
  return r.forEach(function(o) {
    n = n.replace(/%[a-z]/, o);
  }), n;
}
function ms(t) {
  for (var e = [], n = 1; n < arguments.length; n++)
    e[n - 1] = arguments[n];
  return {}.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t, " for more information.").concat(e.length > 0 ? " Args: ".concat(e.join(", ")) : "")) : new Error(RS.apply(void 0, Gi([LS[t]], e, !1)).trim());
}
var IS = function() {
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
          throw ms(16, "".concat(e));
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
}(), Yl = /* @__PURE__ */ new Map(), pc = /* @__PURE__ */ new Map(), hh = 1, sl = function(t) {
  if (Yl.has(t))
    return Yl.get(t);
  for (; pc.has(hh); )
    hh++;
  var e = hh++;
  if ({}.NODE_ENV !== "production" && ((0 | e) < 0 || e > 1073741824))
    throw ms(16, "".concat(e));
  return Yl.set(t, e), pc.set(e, t), e;
}, NS = function(t, e) {
  Yl.set(t, e), pc.set(e, t);
}, BS = "style[".concat(Qr, "][").concat("data-styled-version", '="').concat("6.0.7", '"]'), PS = new RegExp("^".concat(Qr, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), FS = function(t, e, n) {
  for (var r, i = n.split(","), s = 0, o = i.length; s < o; s++)
    (r = i[s]) && t.registerName(e, r);
}, $S = function(t, e) {
  for (var n, r = ((n = e.textContent) !== null && n !== void 0 ? n : "").split(`/*!sc*/
`), i = [], s = 0, o = r.length; s < o; s++) {
    var l = r[s].trim();
    if (l) {
      var c = l.match(PS);
      if (c) {
        var a = 0 | parseInt(c[1], 10), h = c[2];
        a !== 0 && (NS(h, a), FS(t, h, c[3]), t.getTag().insertRules(a, i)), i.length = 0;
      } else
        i.push(l);
    }
  }
};
function qS() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var Qy = function(t) {
  var e = document.head, n = t || e, r = document.createElement("style"), i = function(l) {
    var c = Array.from(l.querySelectorAll("style[".concat(Qr, "]")));
    return c[c.length - 1];
  }(n), s = i !== void 0 ? i.nextSibling : null;
  r.setAttribute(Qr, "active"), r.setAttribute("data-styled-version", "6.0.7");
  var o = qS();
  return o && r.setAttribute("nonce", o), n.insertBefore(r, s), r;
}, HS = function() {
  function t(e) {
    this.element = Qy(e), this.element.appendChild(document.createTextNode("")), this.sheet = function(n) {
      if (n.sheet)
        return n.sheet;
      for (var r = document.styleSheets, i = 0, s = r.length; i < s; i++) {
        var o = r[i];
        if (o.ownerNode === n)
          return o;
      }
      throw ms(17);
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
}(), zS = function() {
  function t(e) {
    this.element = Qy(e), this.nodes = this.element.childNodes, this.length = 0;
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
}(), VS = function() {
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
}(), Mg = ud, US = { isServer: !ud, useCSSOMInjection: !yS }, eb = function() {
  function t(e, n, r) {
    e === void 0 && (e = Zi), n === void 0 && (n = {});
    var i = this;
    this.options = yt(yt({}, US), e), this.gs = n, this.names = new Map(r), this.server = !!e.isServer, !this.server && ud && Mg && (Mg = !1, function(s) {
      for (var o = document.querySelectorAll(BS), l = 0, c = o.length; l < c; l++) {
        var a = o[l];
        a && a.getAttribute(Qr) !== "active" && ($S(s, a), a.parentNode && a.parentNode.removeChild(a));
      }
    }(this)), dd(this, function() {
      return function(s) {
        for (var o = s.getTag(), l = o.length, c = "", a = function(u) {
          var f = function(y) {
            return pc.get(y);
          }(u);
          if (f === void 0)
            return "continue";
          var d = s.names.get(f), p = o.getGroup(u);
          if (d === void 0 || p.length === 0)
            return "continue";
          var g = "".concat(Qr, ".g").concat(u, '[id="').concat(f, '"]'), m = "";
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
    return sl(e);
  }, t.prototype.reconstructWithOptions = function(e, n) {
    return n === void 0 && (n = !0), new t(yt(yt({}, this.options), e), this.gs, n && this.names || void 0);
  }, t.prototype.allocateGSInstance = function(e) {
    return this.gs[e] = (this.gs[e] || 0) + 1;
  }, t.prototype.getTag = function() {
    return this.tag || (this.tag = (e = function(n) {
      var r = n.useCSSOMInjection, i = n.target;
      return n.isServer ? new VS(i) : r ? new HS(i) : new zS(i);
    }(this.options), new IS(e)));
    var e;
  }, t.prototype.hasNameForId = function(e, n) {
    return this.names.has(e) && this.names.get(e).has(n);
  }, t.prototype.registerName = function(e, n) {
    if (sl(e), this.names.has(e))
      this.names.get(e).add(n);
    else {
      var r = /* @__PURE__ */ new Set();
      r.add(n), this.names.set(e, r);
    }
  }, t.prototype.insertRules = function(e, n, r) {
    this.registerName(e, n), this.getTag().insertRules(sl(e), r);
  }, t.prototype.clearNames = function(e) {
    this.names.has(e) && this.names.get(e).clear();
  }, t.prototype.clearRules = function(e) {
    this.getTag().clearGroup(sl(e)), this.clearNames(e);
  }, t.prototype.clearTag = function() {
    this.tag = void 0;
  }, t;
}(), WS = /&/g, jS = /^\s*\/\/.*$/gm;
function tb(t, e) {
  return t.map(function(n) {
    return n.type === "rule" && (n.value = "".concat(e, " ").concat(n.value), n.value = n.value.replaceAll(",", ",".concat(e, " ")), n.props = n.props.map(function(r) {
      return "".concat(e, " ").concat(r);
    })), Array.isArray(n.children) && n.type !== "@keyframes" && (n.children = tb(n.children, e)), n;
  });
}
function nb(t) {
  var e, n, r, i = t === void 0 ? Zi : t, s = i.options, o = s === void 0 ? Zi : s, l = i.plugins, c = l === void 0 ? da : l, a = function(f, d, p) {
    return p === n || p.startsWith(n) && p.endsWith(n) && p.replaceAll(n, "").length > 0 ? ".".concat(e) : f;
  }, h = c.slice();
  h.push(function(f) {
    f.type === aa && f.value.includes("&") && (f.props[0] = f.props[0].replace(WS, n).replace(r, a));
  }), o.prefix && h.push(gS), h.push(fS);
  var u = function(f, d, p, g) {
    d === void 0 && (d = ""), p === void 0 && (p = ""), g === void 0 && (g = "&"), e = g, n = d, r = new RegExp("\\".concat(n, "\\b"), "g");
    var m = f.replace(jS, ""), y = hS(p || d ? "".concat(p, " ").concat(d, " { ").concat(m, " }") : m);
    o.namespace && (y = tb(y, o.namespace));
    var b = [];
    return dc(y, dS(h.concat(pS(function(k) {
      return b.push(k);
    })))), b;
  };
  return u.hash = c.length ? c.reduce(function(f, d) {
    return d.name || ms(15), Nr(f, d.name);
  }, 5381).toString() : "", u;
}
var GS = new eb(), Mu = nb(), pd = Xr.createContext({ shouldForwardProp: void 0, styleSheet: GS, stylis: Mu });
pd.Consumer;
var YS = Xr.createContext(void 0);
function Ou() {
  return Ry(pd);
}
function KS(t) {
  var e = et(t.stylisPlugins), n = e[0], r = e[1], i = Ou().styleSheet, s = Fn(function() {
    var l = i;
    return t.sheet ? l = t.sheet : t.target && (l = l.reconstructWithOptions({ target: t.target }, !1)), t.disableCSSOMInjection && (l = l.reconstructWithOptions({ useCSSOMInjection: !1 })), l;
  }, [t.disableCSSOMInjection, t.sheet, t.target, i]), o = Fn(function() {
    return nb({ options: { namespace: t.namespace, prefix: t.enableVendorPrefixes }, plugins: n });
  }, [t.enableVendorPrefixes, t.namespace, n]);
  return Zr(function() {
    JC(n, t.stylisPlugins) || r(t.stylisPlugins);
  }, [t.stylisPlugins]), Xr.createElement(pd.Provider, { value: { shouldForwardProp: t.shouldForwardProp, styleSheet: s, stylis: o } }, Xr.createElement(YS.Provider, { value: o }, t.children));
}
var Og = function() {
  function t(e, n) {
    var r = this;
    this.inject = function(i, s) {
      s === void 0 && (s = Mu);
      var o = r.name + s.hash;
      i.hasNameForId(r.id, o) || i.insertRules(r.id, o, s(r.rules, o, "@keyframes"));
    }, this.name = e, this.id = "sc-keyframes-".concat(e), this.rules = n, dd(this, function() {
      throw ms(12, String(r.name));
    });
  }
  return t.prototype.getName = function(e) {
    return e === void 0 && (e = Mu), this.name + e.hash;
  }, t;
}(), JS = function(t) {
  return t >= "A" && t <= "Z";
};
function Lg(t) {
  for (var e = "", n = 0; n < t.length; n++) {
    var r = t[n];
    if (n === 1 && r === "-" && t[0] === "-")
      return t;
    JS(r) ? e += "-" + r.toLowerCase() : e += r;
  }
  return e.startsWith("ms-") ? "-" + e : e;
}
var rb = function(t) {
  return t == null || t === !1 || t === "";
}, ib = function(t) {
  var e, n, r = [];
  for (var i in t) {
    var s = t[i];
    t.hasOwnProperty(i) && !rb(s) && (Array.isArray(s) && s.isCss || Xi(s) ? r.push("".concat(Lg(i), ":"), s, ";") : Qi(s) ? r.push.apply(r, Gi(Gi(["".concat(i, " {")], ib(s), !1), ["}"], !1)) : r.push("".concat(Lg(i), ": ").concat((e = i, (n = s) == null || typeof n == "boolean" || n === "" ? "" : typeof n != "number" || n === 0 || e in mS || e.startsWith("--") ? String(n).trim() : "".concat(n, "px")), ";")));
  }
  return r;
};
function Ur(t, e, n, r) {
  if (rb(t))
    return [];
  if (fd(t))
    return [".".concat(t.styledComponentId)];
  if (Xi(t)) {
    if (!Xi(s = t) || s.prototype && s.prototype.isReactComponent || !e)
      return [t];
    var i = t(e);
    return {}.NODE_ENV === "production" || typeof i != "object" || Array.isArray(i) || i instanceof Og || Qi(i) || i === null || console.error("".concat(Yy(t), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), Ur(i, e, n, r);
  }
  var s;
  return t instanceof Og ? n ? (t.inject(n, r), [t.getName(r)]) : [t] : Qi(t) ? ib(t) : Array.isArray(t) ? Array.prototype.concat.apply(da, t.map(function(o) {
    return Ur(o, e, n, r);
  })) : [t.toString()];
}
function ZS(t) {
  for (var e = 0; e < t.length; e += 1) {
    var n = t[e];
    if (Xi(n) && !fd(n))
      return !1;
  }
  return !0;
}
var XS = Gy("6.0.7"), QS = function() {
  function t(e, n, r) {
    this.rules = e, this.staticRulesId = "", this.isStatic = {}.NODE_ENV === "production" && (r === void 0 || r.isStatic) && ZS(e), this.componentId = n, this.baseHash = Nr(XS, n), this.baseStyle = r, eb.registerId(n);
  }
  return t.prototype.generateAndInjectStyles = function(e, n, r) {
    var i = this.baseStyle ? this.baseStyle.generateAndInjectStyles(e, n, r) : "";
    if (this.isStatic && !r.hash)
      if (this.staticRulesId && n.hasNameForId(this.componentId, this.staticRulesId))
        i = Fr(i, this.staticRulesId);
      else {
        var s = Tg(Ur(this.rules, e, n, r)), o = Du(Nr(this.baseHash, s) >>> 0);
        if (!n.hasNameForId(this.componentId, o)) {
          var l = r(s, ".".concat(o), void 0, this.componentId);
          n.insertRules(this.componentId, o, l);
        }
        i = Fr(i, o), this.staticRulesId = o;
      }
    else {
      for (var c = Nr(this.baseHash, r.hash), a = "", h = 0; h < this.rules.length; h++) {
        var u = this.rules[h];
        if (typeof u == "string")
          a += u, {}.NODE_ENV !== "production" && (c = Nr(c, u));
        else if (u) {
          var f = Tg(Ur(u, e, n, r));
          c = Nr(c, f), a += f;
        }
      }
      if (a) {
        var d = Du(c >>> 0);
        n.hasNameForId(this.componentId, d) || n.insertRules(this.componentId, d, r(a, ".".concat(d), void 0, this.componentId)), i = Fr(i, d);
      }
    }
    return i;
  }, t;
}(), sb = Xr.createContext(void 0);
sb.Consumer;
var uh = {}, Rg = /* @__PURE__ */ new Set();
function eA(t, e, n) {
  var r = fd(t), i = t, s = !ah(t), o = e.attrs, l = o === void 0 ? da : o, c = e.componentId, a = c === void 0 ? function(v, x) {
    var w = typeof v != "string" ? "sc" : Cg(v);
    uh[w] = (uh[w] || 0) + 1;
    var C = "".concat(w, "-").concat(_S("6.0.7" + w + uh[w]));
    return x ? "".concat(x, "-").concat(C) : C;
  }(e.displayName, e.parentComponentId) : c, h = e.displayName, u = h === void 0 ? function(v) {
    return ah(v) ? "styled.".concat(v) : "Styled(".concat(Yy(v), ")");
  }(t) : h, f = e.displayName && e.componentId ? "".concat(Cg(e.displayName), "-").concat(e.componentId) : e.componentId || a, d = r && i.attrs ? i.attrs.concat(l).filter(Boolean) : l, p = e.shouldForwardProp;
  if (r && i.shouldForwardProp) {
    var g = i.shouldForwardProp;
    if (e.shouldForwardProp) {
      var m = e.shouldForwardProp;
      p = function(v, x) {
        return g(v, x) && m(v, x);
      };
    } else
      p = g;
  }
  var y = new QS(n, f, r ? i.componentStyle : void 0);
  function b(v, x) {
    return function(w, C, I) {
      var O = w.attrs, D = w.componentStyle, V = w.defaultProps, re = w.foldedComponentIds, J = w.styledComponentId, A = w.target, U = Xr.useContext(sb), H = Ou(), ye = w.shouldForwardProp || H.shouldForwardProp;
      ({}).NODE_ENV !== "production" && wu(J);
      var le = function(fe, Kn, de) {
        for (var Tt, Vt = yt(yt({}, Kn), { className: void 0, theme: de }), di = 0; di < fe.length; di += 1) {
          var Jn = Xi(Tt = fe[di]) ? Tt(Vt) : Tt;
          for (var Ut in Jn)
            Vt[Ut] = Ut === "className" ? Fr(Vt[Ut], Jn[Ut]) : Ut === "style" ? yt(yt({}, Vt[Ut]), Jn[Ut]) : Jn[Ut];
        }
        return Kn.className && (Vt.className = Fr(Vt.className, Kn.className)), Vt;
      }(O, C, vS(C, U, V) || Zi), se = le.as || A, ce = {};
      for (var xe in le)
        le[xe] === void 0 || xe[0] === "$" || xe === "as" || xe === "theme" || (xe === "forwardedAs" ? ce.as = le.forwardedAs : ye && !ye(xe, se) || (ce[xe] = le[xe], ye || {}.NODE_ENV !== "development" || eC(xe) || Rg.has(xe) || !Eu.has(se) || (Rg.add(xe), console.warn('styled-components: it looks like an unknown prop "'.concat(xe, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var oe = function(fe, Kn) {
        var de = Ou(), Tt = fe.generateAndInjectStyles(Kn, de.styleSheet, de.stylis);
        return {}.NODE_ENV !== "production" && wu(Tt), Tt;
      }(D, le);
      ({}).NODE_ENV !== "production" && w.warnTooManyClasses && w.warnTooManyClasses(oe);
      var zt = Fr(re, J);
      return oe && (zt += " " + oe), le.className && (zt += " " + le.className), ce[ah(se) && !Eu.has(se) ? "class" : "className"] = zt, ce.ref = I, Kt(se, ce);
    }(k, v, x);
  }
  ({}).NODE_ENV !== "production" && (b.displayName = u);
  var k = Xr.forwardRef(b);
  return k.attrs = d, k.componentStyle = y, k.shouldForwardProp = p, {}.NODE_ENV !== "production" && (k.displayName = u), k.foldedComponentIds = r ? Fr(i.foldedComponentIds, i.styledComponentId) : "", k.styledComponentId = f, k.target = r ? i.target : t, Object.defineProperty(k, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(v) {
    this._foldedDefaultProps = r ? function(x) {
      for (var w = [], C = 1; C < arguments.length; C++)
        w[C - 1] = arguments[C];
      for (var I = 0, O = w; I < O.length; I++)
        Tu(x, O[I], !0);
      return x;
    }({}, i.defaultProps, v) : v;
  } }), {}.NODE_ENV !== "production" && (bS(u, f), k.warnTooManyClasses = function(v, x) {
    var w = {}, C = !1;
    return function(I) {
      if (!C && (w[I] = !0, Object.keys(w).length >= 200)) {
        var O = x ? ' with the id of "'.concat(x, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(v).concat(O, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), C = !0, w = {};
      }
    };
  }(u, f)), dd(k, function() {
    return ".".concat(k.styledComponentId);
  }), s && Xy(k, t, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), k;
}
function Ig(t, e) {
  for (var n = [t[0]], r = 0, i = e.length; r < i; r += 1)
    n.push(e[r], t[r + 1]);
  return n;
}
var Ng = function(t) {
  return Object.assign(t, { isCss: !0 });
};
function Bi(t) {
  for (var e = [], n = 1; n < arguments.length; n++)
    e[n - 1] = arguments[n];
  if (Xi(t) || Qi(t)) {
    var r = t;
    return Ng(Ur(Ig(da, Gi([r], e, !0))));
  }
  var i = t;
  return e.length === 0 && i.length === 1 && typeof i[0] == "string" ? Ur(i) : Ng(Ur(Ig(i, e)));
}
function Lu(t, e, n) {
  if (n === void 0 && (n = Zi), !e)
    throw ms(1, e);
  var r = function(i) {
    for (var s = [], o = 1; o < arguments.length; o++)
      s[o - 1] = arguments[o];
    return t(e, n, Bi.apply(void 0, Gi([i], s, !1)));
  };
  return r.attrs = function(i) {
    return Lu(t, e, yt(yt({}, n), { attrs: Array.prototype.concat(n.attrs, i).filter(Boolean) }));
  }, r.withConfig = function(i) {
    return Lu(t, e, yt(yt({}, n), i));
  }, r;
}
var ob = function(t) {
  return Lu(eA, t);
}, me = ob;
Eu.forEach(function(t) {
  me[t] = ob(t);
});
({}).NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var ol = "__sc-".concat(Qr, "__");
({}).NODE_ENV !== "production" && {}.NODE_ENV !== "test" && typeof window < "u" && (window[ol] || (window[ol] = 0), window[ol] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[ol] += 1);
var lb = function(t, e, n, r) {
  var i;
  e[0] = 0;
  for (var s = 1; s < e.length; s++) {
    var o = e[s++], l = e[s] ? (e[0] |= o ? 1 : 2, n[e[s++]]) : e[++s];
    o === 3 ? r[0] = l : o === 4 ? r[1] = Object.assign(r[1] || {}, l) : o === 5 ? (r[1] = r[1] || {})[e[++s]] = l : o === 6 ? r[1][e[++s]] += l + "" : o ? (i = t.apply(l, lb(t, l, n, ["", null])), r.push(i), l[0] ? e[0] |= 2 : (e[s - 2] = 0, e[s] = i)) : r.push(l);
  }
  return r;
}, Bg = /* @__PURE__ */ new Map();
function tA(t) {
  var e = Bg.get(this);
  return e || (e = /* @__PURE__ */ new Map(), Bg.set(this, e)), (e = lb(this, e.get(t) || (e.set(t, e = function(n) {
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
var lt = tA.bind(Kt);
class Cr {
  constructor(e) {
    this.state = e;
  }
  run(e) {
    return [];
  }
}
class nA extends Cr {
  run(e) {
    const n = new this.state.Token("code_inline", "code", 0);
    return n.content = e.content, [n];
  }
}
const rA = {
  raw: nA
}, Ru = "math_inline";
class iA extends Cr {
  run(e) {
    const n = new this.state.Token(Ru, "span", 0);
    return n.attrSet("class", "math inline"), n.markup = "$", n.content = e.content, [n];
  }
}
function sA(t, e) {
  var n;
  !(!((n = e == null ? void 0 : e.roles) === null || n === void 0) && n.math) || t.renderer.rules[Ru] || (t.renderer.rules[Ru] = (r, i) => {
    var s, o, l;
    const c = (l = (o = (s = e == null ? void 0 : e.opts) === null || s === void 0 ? void 0 : s.math) === null || o === void 0 ? void 0 : o.renderer) !== null && l !== void 0 ? l : (f) => t.utils.escapeHtml(f), a = r[i], h = a.content.trim(), u = c(h, { displayMode: !1 });
    return `<span class="${a.attrGet("class")}">${u}</span>`;
  });
}
const oA = {
  math: iA
};
function lA(t, e) {
  e.parseRoles && t.inline.ruler.before("backticks", "parse_roles", cA), t.core.ruler.after(e.rolesAfter || "inline", "run_roles", hA(e.roles || {})), t.renderer.rules.role = (n, r) => {
    const i = n[r];
    return `<span class="role-unhandled"><mark>${i.meta.name}</mark><code>${i.content}</code></span>`;
  }, sA(t, e);
}
function cA(t, e) {
  if (t.src.charCodeAt(t.pos - 1) === 92)
    return !1;
  const n = aA.exec(t.src.slice(t.pos));
  if (n == null)
    return !1;
  const [r, i, , s] = n;
  if (t.pos += r.length, !e) {
    const o = t.push("role", "", 0);
    o.meta = { name: i }, o.content = s;
  }
  return !0;
}
let Iu;
try {
  Iu = new RegExp("^\\{([a-zA-Z_\\-+:]{1,36})\\}(`+)(?!`)(.+?)(?<!`)\\2(?!`)");
} catch {
  Iu = /^\{([a-zA-Z_\-+:]{1,36})\}(`+)(?!`)(.+?)\2(?!`)/;
}
const aA = Iu;
function hA(t) {
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
class Pg extends Cr {
  run(e) {
    const n = new this.state.Token("sub_open", "sub", 1);
    n.markup = "~";
    const r = new this.state.Token("text", "", 0);
    r.content = e.content;
    const i = new this.state.Token("sub_close", "sub", -1);
    return i.markup = "~", [n, r, i];
  }
}
class Fg extends Cr {
  run(e) {
    const n = new this.state.Token("sup_open", "sup", 1);
    n.markup = "~";
    const r = new this.state.Token("text", "", 0);
    r.content = e.content;
    const i = new this.state.Token("sup_close", "sup", -1);
    return i.markup = "~", [n, r, i];
  }
}
const uA = /^(.+?)\(([^()]+)\)$/;
class $g extends Cr {
  run(e) {
    var n, r, i, s;
    const o = uA.exec(e.content), l = (r = (n = o == null ? void 0 : o[1]) === null || n === void 0 ? void 0 : n.trim()) !== null && r !== void 0 ? r : e.content.trim(), c = (s = (i = o == null ? void 0 : o[2]) === null || i === void 0 ? void 0 : i.trim()) !== null && s !== void 0 ? s : null, a = new this.state.Token("abbr_open", "abbr", 1);
    c && a.attrSet("title", c);
    const h = new this.state.Token("text", "", 0);
    h.content = l;
    const u = new this.state.Token("abbr_close", "abbr", -1);
    return [a, h, u];
  }
}
const fA = {
  subscript: Pg,
  sub: Pg,
  superscript: Fg,
  sup: Fg,
  abbreviation: $g,
  abbr: $g
};
var oo;
(function(t) {
  t.equation = "eq", t.figure = "fig", t.table = "table", t.code = "code", t.section = "sec";
})(oo || (oo = {}));
function pa(t) {
  var e, n;
  const r = (n = (e = t.env) === null || e === void 0 ? void 0 : e.docutils) !== null && n !== void 0 ? n : {};
  return r.targets || (r.targets = {}), r.references || (r.references = []), r.numbering || (r.numbering = {}), t.env.docutils || (t.env.docutils = r), r;
}
function dA(t) {
  var e, n;
  const r = (n = (e = t.meta) === null || e === void 0 ? void 0 : e.docutils) !== null && n !== void 0 ? n : {};
  return t.meta || (t.meta = {}), t.meta.docutils || (t.meta.docutils = r), r;
}
function pA(t, e) {
  const n = pa(t);
  return n.numbering[e] == null ? n.numbering[e] = 1 : n.numbering[e] += 1, n.numbering[e];
}
function cb(t, e, n, r, i, s = !1) {
  const o = pa(t), l = pA(t, n), c = {
    label: r,
    kind: n,
    number: l,
    title: i
  };
  if (!s) {
    const a = dA(e);
    a.target = c, e.attrSet("id", r), o.targets[r] = c;
  }
  return c;
}
function gd(t, e, n, r) {
  var i;
  e.open.meta = (i = e.open.meta) !== null && i !== void 0 ? i : {}, e.open.meta.kind = n.kind, e.open.meta.label = n.label, e.open.meta.value = n.value, pa(t).references.push(Object.assign({ label: n.label, tokens: e }, r));
}
const ab = /^(.+?)<([^<>]+)>$/;
class gA extends Cr {
  run(e) {
    const n = new this.state.Token("ref_open", "a", 1), r = new this.state.Token("text", "", 0), i = new this.state.Token("ref_close", "a", -1);
    return gd(this.state, { open: n, content: r, close: i }, { kind: "eq", label: e.content }, {
      kind: oo.equation,
      contentFromTarget: (s) => `(${s.number})`
    }), [n, r, i];
  }
}
class mA extends Cr {
  run(e) {
    const n = ab.exec(e.content), [, r, i] = n != null ? n : [], s = r == null ? void 0 : r.trim(), o = new this.state.Token("ref_open", "a", 1), l = new this.state.Token("text", "", 0), c = new this.state.Token("ref_close", "a", -1);
    return gd(this.state, { open: o, content: l, close: c }, { kind: "numref", label: i || e.content, value: s }, {
      contentFromTarget: (a) => n ? s.replace(/%s/g, String(a.number)).replace(/\{number\}/g, String(a.number)) : a.title.trim()
    }), [o, l, c];
  }
}
class yA extends Cr {
  run(e) {
    const n = ab.exec(e.content), [, r, i] = n != null ? n : [], s = r == null ? void 0 : r.trim(), o = new this.state.Token("ref_open", "a", 1), l = new this.state.Token("text", "", 0), c = new this.state.Token("ref_close", "a", -1);
    return gd(this.state, { open: o, content: l, close: c }, { kind: "ref", label: i || e.content, value: s }, {
      contentFromTarget: (a) => s || a.title
    }), [o, l, c];
  }
}
const bA = {
  eq: gA,
  ref: yA,
  numref: mA
}, vA = Object.assign(Object.assign(Object.assign(Object.assign({}, rA), fA), oA), bA);
/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */
function hb(t) {
  return typeof t > "u" || t === null;
}
function wA(t) {
  return typeof t == "object" && t !== null;
}
function xA(t) {
  return Array.isArray(t) ? t : hb(t) ? [] : [t];
}
function kA(t, e) {
  var n, r, i, s;
  if (e)
    for (s = Object.keys(e), n = 0, r = s.length; n < r; n += 1)
      i = s[n], t[i] = e[i];
  return t;
}
function _A(t, e) {
  var n = "", r;
  for (r = 0; r < e; r += 1)
    n += t;
  return n;
}
function CA(t) {
  return t === 0 && Number.NEGATIVE_INFINITY === 1 / t;
}
var SA = hb, AA = wA, EA = xA, DA = _A, TA = CA, MA = kA, Be = {
  isNothing: SA,
  isObject: AA,
  toArray: EA,
  repeat: DA,
  isNegativeZero: TA,
  extend: MA
};
function ub(t, e) {
  var n = "", r = t.reason || "(unknown reason)";
  return t.mark ? (t.mark.name && (n += 'in "' + t.mark.name + '" '), n += "(" + (t.mark.line + 1) + ":" + (t.mark.column + 1) + ")", !e && t.mark.snippet && (n += `

` + t.mark.snippet), r + " " + n) : r;
}
function lo(t, e) {
  Error.call(this), this.name = "YAMLException", this.reason = t, this.mark = e, this.message = ub(this, !1), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack || "";
}
lo.prototype = Object.create(Error.prototype);
lo.prototype.constructor = lo;
lo.prototype.toString = function(e) {
  return this.name + ": " + ub(this, e);
};
var at = lo;
function fh(t, e, n, r, i) {
  var s = "", o = "", l = Math.floor(i / 2) - 1;
  return r - e > l && (s = " ... ", e = r - l + s.length), n - r > l && (o = " ...", n = r + l - o.length), {
    str: s + t.slice(e, n).replace(/\t/g, "\u2192") + o,
    pos: r - e + s.length
  };
}
function dh(t, e) {
  return Be.repeat(" ", e - t.length) + t;
}
function OA(t, e) {
  if (e = Object.create(e || null), !t.buffer)
    return null;
  e.maxLength || (e.maxLength = 79), typeof e.indent != "number" && (e.indent = 1), typeof e.linesBefore != "number" && (e.linesBefore = 3), typeof e.linesAfter != "number" && (e.linesAfter = 2);
  for (var n = /\r?\n|\r|\0/g, r = [0], i = [], s, o = -1; s = n.exec(t.buffer); )
    i.push(s.index), r.push(s.index + s[0].length), t.position <= s.index && o < 0 && (o = r.length - 2);
  o < 0 && (o = r.length - 1);
  var l = "", c, a, h = Math.min(t.line + e.linesAfter, i.length).toString().length, u = e.maxLength - (e.indent + h + 3);
  for (c = 1; c <= e.linesBefore && !(o - c < 0); c++)
    a = fh(
      t.buffer,
      r[o - c],
      i[o - c],
      t.position - (r[o] - r[o - c]),
      u
    ), l = Be.repeat(" ", e.indent) + dh((t.line - c + 1).toString(), h) + " | " + a.str + `
` + l;
  for (a = fh(t.buffer, r[o], i[o], t.position, u), l += Be.repeat(" ", e.indent) + dh((t.line + 1).toString(), h) + " | " + a.str + `
`, l += Be.repeat("-", e.indent + h + 3 + a.pos) + `^
`, c = 1; c <= e.linesAfter && !(o + c >= i.length); c++)
    a = fh(
      t.buffer,
      r[o + c],
      i[o + c],
      t.position - (r[o] - r[o + c]),
      u
    ), l += Be.repeat(" ", e.indent) + dh((t.line + c + 1).toString(), h) + " | " + a.str + `
`;
  return l.replace(/\n$/, "");
}
var LA = OA, RA = [
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
], IA = [
  "scalar",
  "sequence",
  "mapping"
];
function NA(t) {
  var e = {};
  return t !== null && Object.keys(t).forEach(function(n) {
    t[n].forEach(function(r) {
      e[String(r)] = n;
    });
  }), e;
}
function BA(t, e) {
  if (e = e || {}, Object.keys(e).forEach(function(n) {
    if (RA.indexOf(n) === -1)
      throw new at('Unknown option "' + n + '" is met in definition of "' + t + '" YAML type.');
  }), this.options = e, this.tag = t, this.kind = e.kind || null, this.resolve = e.resolve || function() {
    return !0;
  }, this.construct = e.construct || function(n) {
    return n;
  }, this.instanceOf = e.instanceOf || null, this.predicate = e.predicate || null, this.represent = e.represent || null, this.representName = e.representName || null, this.defaultStyle = e.defaultStyle || null, this.multi = e.multi || !1, this.styleAliases = NA(e.styleAliases || null), IA.indexOf(this.kind) === -1)
    throw new at('Unknown kind "' + this.kind + '" is specified for "' + t + '" YAML type.');
}
var Ye = BA;
function qg(t, e) {
  var n = [];
  return t[e].forEach(function(r) {
    var i = n.length;
    n.forEach(function(s, o) {
      s.tag === r.tag && s.kind === r.kind && s.multi === r.multi && (i = o);
    }), n[i] = r;
  }), n;
}
function PA() {
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
function Nu(t) {
  return this.extend(t);
}
Nu.prototype.extend = function(e) {
  var n = [], r = [];
  if (e instanceof Ye)
    r.push(e);
  else if (Array.isArray(e))
    r = r.concat(e);
  else if (e && (Array.isArray(e.implicit) || Array.isArray(e.explicit)))
    e.implicit && (n = n.concat(e.implicit)), e.explicit && (r = r.concat(e.explicit));
  else
    throw new at("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");
  n.forEach(function(s) {
    if (!(s instanceof Ye))
      throw new at("Specified list of YAML types (or a single Type object) contains a non-Type object.");
    if (s.loadKind && s.loadKind !== "scalar")
      throw new at("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");
    if (s.multi)
      throw new at("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.");
  }), r.forEach(function(s) {
    if (!(s instanceof Ye))
      throw new at("Specified list of YAML types (or a single Type object) contains a non-Type object.");
  });
  var i = Object.create(Nu.prototype);
  return i.implicit = (this.implicit || []).concat(n), i.explicit = (this.explicit || []).concat(r), i.compiledImplicit = qg(i, "implicit"), i.compiledExplicit = qg(i, "explicit"), i.compiledTypeMap = PA(i.compiledImplicit, i.compiledExplicit), i;
};
var fb = Nu, db = new Ye("tag:yaml.org,2002:str", {
  kind: "scalar",
  construct: function(t) {
    return t !== null ? t : "";
  }
}), pb = new Ye("tag:yaml.org,2002:seq", {
  kind: "sequence",
  construct: function(t) {
    return t !== null ? t : [];
  }
}), gb = new Ye("tag:yaml.org,2002:map", {
  kind: "mapping",
  construct: function(t) {
    return t !== null ? t : {};
  }
}), mb = new fb({
  explicit: [
    db,
    pb,
    gb
  ]
});
function FA(t) {
  if (t === null)
    return !0;
  var e = t.length;
  return e === 1 && t === "~" || e === 4 && (t === "null" || t === "Null" || t === "NULL");
}
function $A() {
  return null;
}
function qA(t) {
  return t === null;
}
var yb = new Ye("tag:yaml.org,2002:null", {
  kind: "scalar",
  resolve: FA,
  construct: $A,
  predicate: qA,
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
function HA(t) {
  if (t === null)
    return !1;
  var e = t.length;
  return e === 4 && (t === "true" || t === "True" || t === "TRUE") || e === 5 && (t === "false" || t === "False" || t === "FALSE");
}
function zA(t) {
  return t === "true" || t === "True" || t === "TRUE";
}
function VA(t) {
  return Object.prototype.toString.call(t) === "[object Boolean]";
}
var bb = new Ye("tag:yaml.org,2002:bool", {
  kind: "scalar",
  resolve: HA,
  construct: zA,
  predicate: VA,
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
function UA(t) {
  return 48 <= t && t <= 57 || 65 <= t && t <= 70 || 97 <= t && t <= 102;
}
function WA(t) {
  return 48 <= t && t <= 55;
}
function jA(t) {
  return 48 <= t && t <= 57;
}
function GA(t) {
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
          if (!UA(t.charCodeAt(n)))
            return !1;
          r = !0;
        }
      return r && i !== "_";
    }
    if (i === "o") {
      for (n++; n < e; n++)
        if (i = t[n], i !== "_") {
          if (!WA(t.charCodeAt(n)))
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
      if (!jA(t.charCodeAt(n)))
        return !1;
      r = !0;
    }
  return !(!r || i === "_");
}
function YA(t) {
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
function KA(t) {
  return Object.prototype.toString.call(t) === "[object Number]" && t % 1 === 0 && !Be.isNegativeZero(t);
}
var vb = new Ye("tag:yaml.org,2002:int", {
  kind: "scalar",
  resolve: GA,
  construct: YA,
  predicate: KA,
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
}), JA = new RegExp(
  "^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"
);
function ZA(t) {
  return !(t === null || !JA.test(t) || t[t.length - 1] === "_");
}
function XA(t) {
  var e, n;
  return e = t.replace(/_/g, "").toLowerCase(), n = e[0] === "-" ? -1 : 1, "+-".indexOf(e[0]) >= 0 && (e = e.slice(1)), e === ".inf" ? n === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY : e === ".nan" ? NaN : n * parseFloat(e, 10);
}
var QA = /^[-+]?[0-9]+e/;
function eE(t, e) {
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
  else if (Be.isNegativeZero(t))
    return "-0.0";
  return n = t.toString(10), QA.test(n) ? n.replace("e", ".e") : n;
}
function tE(t) {
  return Object.prototype.toString.call(t) === "[object Number]" && (t % 1 !== 0 || Be.isNegativeZero(t));
}
var wb = new Ye("tag:yaml.org,2002:float", {
  kind: "scalar",
  resolve: ZA,
  construct: XA,
  predicate: tE,
  represent: eE,
  defaultStyle: "lowercase"
}), xb = mb.extend({
  implicit: [
    yb,
    bb,
    vb,
    wb
  ]
}), kb = xb, _b = new RegExp(
  "^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"
), Cb = new RegExp(
  "^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$"
);
function nE(t) {
  return t === null ? !1 : _b.exec(t) !== null || Cb.exec(t) !== null;
}
function rE(t) {
  var e, n, r, i, s, o, l, c = 0, a = null, h, u, f;
  if (e = _b.exec(t), e === null && (e = Cb.exec(t)), e === null)
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
function iE(t) {
  return t.toISOString();
}
var Sb = new Ye("tag:yaml.org,2002:timestamp", {
  kind: "scalar",
  resolve: nE,
  construct: rE,
  instanceOf: Date,
  represent: iE
});
function sE(t) {
  return t === "<<" || t === null;
}
var Ab = new Ye("tag:yaml.org,2002:merge", {
  kind: "scalar",
  resolve: sE
}), md = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;
function oE(t) {
  if (t === null)
    return !1;
  var e, n, r = 0, i = t.length, s = md;
  for (n = 0; n < i; n++)
    if (e = s.indexOf(t.charAt(n)), !(e > 64)) {
      if (e < 0)
        return !1;
      r += 6;
    }
  return r % 8 === 0;
}
function lE(t) {
  var e, n, r = t.replace(/[\r\n=]/g, ""), i = r.length, s = md, o = 0, l = [];
  for (e = 0; e < i; e++)
    e % 4 === 0 && e && (l.push(o >> 16 & 255), l.push(o >> 8 & 255), l.push(o & 255)), o = o << 6 | s.indexOf(r.charAt(e));
  return n = i % 4 * 6, n === 0 ? (l.push(o >> 16 & 255), l.push(o >> 8 & 255), l.push(o & 255)) : n === 18 ? (l.push(o >> 10 & 255), l.push(o >> 2 & 255)) : n === 12 && l.push(o >> 4 & 255), new Uint8Array(l);
}
function cE(t) {
  var e = "", n = 0, r, i, s = t.length, o = md;
  for (r = 0; r < s; r++)
    r % 3 === 0 && r && (e += o[n >> 18 & 63], e += o[n >> 12 & 63], e += o[n >> 6 & 63], e += o[n & 63]), n = (n << 8) + t[r];
  return i = s % 3, i === 0 ? (e += o[n >> 18 & 63], e += o[n >> 12 & 63], e += o[n >> 6 & 63], e += o[n & 63]) : i === 2 ? (e += o[n >> 10 & 63], e += o[n >> 4 & 63], e += o[n << 2 & 63], e += o[64]) : i === 1 && (e += o[n >> 2 & 63], e += o[n << 4 & 63], e += o[64], e += o[64]), e;
}
function aE(t) {
  return Object.prototype.toString.call(t) === "[object Uint8Array]";
}
var Eb = new Ye("tag:yaml.org,2002:binary", {
  kind: "scalar",
  resolve: oE,
  construct: lE,
  predicate: aE,
  represent: cE
}), hE = Object.prototype.hasOwnProperty, uE = Object.prototype.toString;
function fE(t) {
  if (t === null)
    return !0;
  var e = [], n, r, i, s, o, l = t;
  for (n = 0, r = l.length; n < r; n += 1) {
    if (i = l[n], o = !1, uE.call(i) !== "[object Object]")
      return !1;
    for (s in i)
      if (hE.call(i, s))
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
function dE(t) {
  return t !== null ? t : [];
}
var Db = new Ye("tag:yaml.org,2002:omap", {
  kind: "sequence",
  resolve: fE,
  construct: dE
}), pE = Object.prototype.toString;
function gE(t) {
  if (t === null)
    return !0;
  var e, n, r, i, s, o = t;
  for (s = new Array(o.length), e = 0, n = o.length; e < n; e += 1) {
    if (r = o[e], pE.call(r) !== "[object Object]" || (i = Object.keys(r), i.length !== 1))
      return !1;
    s[e] = [i[0], r[i[0]]];
  }
  return !0;
}
function mE(t) {
  if (t === null)
    return [];
  var e, n, r, i, s, o = t;
  for (s = new Array(o.length), e = 0, n = o.length; e < n; e += 1)
    r = o[e], i = Object.keys(r), s[e] = [i[0], r[i[0]]];
  return s;
}
var Tb = new Ye("tag:yaml.org,2002:pairs", {
  kind: "sequence",
  resolve: gE,
  construct: mE
}), yE = Object.prototype.hasOwnProperty;
function bE(t) {
  if (t === null)
    return !0;
  var e, n = t;
  for (e in n)
    if (yE.call(n, e) && n[e] !== null)
      return !1;
  return !0;
}
function vE(t) {
  return t !== null ? t : {};
}
var Mb = new Ye("tag:yaml.org,2002:set", {
  kind: "mapping",
  resolve: bE,
  construct: vE
}), yd = kb.extend({
  implicit: [
    Sb,
    Ab
  ],
  explicit: [
    Eb,
    Db,
    Tb,
    Mb
  ]
}), gr = Object.prototype.hasOwnProperty, gc = 1, Ob = 2, Lb = 3, mc = 4, ph = 1, wE = 2, Hg = 3, xE = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, kE = /[\x85\u2028\u2029]/, _E = /[,\[\]\{\}]/, Rb = /^(?:!|!!|![a-z\-]+!)$/i, Ib = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
function zg(t) {
  return Object.prototype.toString.call(t);
}
function wn(t) {
  return t === 10 || t === 13;
}
function Wr(t) {
  return t === 9 || t === 32;
}
function bt(t) {
  return t === 9 || t === 32 || t === 10 || t === 13;
}
function Di(t) {
  return t === 44 || t === 91 || t === 93 || t === 123 || t === 125;
}
function CE(t) {
  var e;
  return 48 <= t && t <= 57 ? t - 48 : (e = t | 32, 97 <= e && e <= 102 ? e - 97 + 10 : -1);
}
function SE(t) {
  return t === 120 ? 2 : t === 117 ? 4 : t === 85 ? 8 : 0;
}
function AE(t) {
  return 48 <= t && t <= 57 ? t - 48 : -1;
}
function Vg(t) {
  return t === 48 ? "\0" : t === 97 ? "\x07" : t === 98 ? "\b" : t === 116 || t === 9 ? "	" : t === 110 ? `
` : t === 118 ? "\v" : t === 102 ? "\f" : t === 114 ? "\r" : t === 101 ? "\x1B" : t === 32 ? " " : t === 34 ? '"' : t === 47 ? "/" : t === 92 ? "\\" : t === 78 ? "\x85" : t === 95 ? "\xA0" : t === 76 ? "\u2028" : t === 80 ? "\u2029" : "";
}
function EE(t) {
  return t <= 65535 ? String.fromCharCode(t) : String.fromCharCode(
    (t - 65536 >> 10) + 55296,
    (t - 65536 & 1023) + 56320
  );
}
var Nb = new Array(256), Bb = new Array(256);
for (var xi = 0; xi < 256; xi++)
  Nb[xi] = Vg(xi) ? 1 : 0, Bb[xi] = Vg(xi);
function DE(t, e) {
  this.input = t, this.filename = e.filename || null, this.schema = e.schema || yd, this.onWarning = e.onWarning || null, this.legacy = e.legacy || !1, this.json = e.json || !1, this.listener = e.listener || null, this.implicitTypes = this.schema.compiledImplicit, this.typeMap = this.schema.compiledTypeMap, this.length = t.length, this.position = 0, this.line = 0, this.lineStart = 0, this.lineIndent = 0, this.firstTabInLine = -1, this.documents = [];
}
function Pb(t, e) {
  var n = {
    name: t.filename,
    buffer: t.input.slice(0, -1),
    position: t.position,
    line: t.line,
    column: t.position - t.lineStart
  };
  return n.snippet = LA(n), new at(e, n);
}
function q(t, e) {
  throw Pb(t, e);
}
function yc(t, e) {
  t.onWarning && t.onWarning.call(null, Pb(t, e));
}
var Ug = {
  YAML: function(e, n, r) {
    var i, s, o;
    e.version !== null && q(e, "duplication of %YAML directive"), r.length !== 1 && q(e, "YAML directive accepts exactly one argument"), i = /^([0-9]+)\.([0-9]+)$/.exec(r[0]), i === null && q(e, "ill-formed argument of the YAML directive"), s = parseInt(i[1], 10), o = parseInt(i[2], 10), s !== 1 && q(e, "unacceptable YAML version of the document"), e.version = r[0], e.checkLineBreaks = o < 2, o !== 1 && o !== 2 && yc(e, "unsupported YAML version of the document");
  },
  TAG: function(e, n, r) {
    var i, s;
    r.length !== 2 && q(e, "TAG directive accepts exactly two arguments"), i = r[0], s = r[1], Rb.test(i) || q(e, "ill-formed tag handle (first argument) of the TAG directive"), gr.call(e.tagMap, i) && q(e, 'there is a previously declared suffix for "' + i + '" tag handle'), Ib.test(s) || q(e, "ill-formed tag prefix (second argument) of the TAG directive");
    try {
      s = decodeURIComponent(s);
    } catch {
      q(e, "tag prefix is malformed: " + s);
    }
    e.tagMap[i] = s;
  }
};
function hr(t, e, n, r) {
  var i, s, o, l;
  if (e < n) {
    if (l = t.input.slice(e, n), r)
      for (i = 0, s = l.length; i < s; i += 1)
        o = l.charCodeAt(i), o === 9 || 32 <= o && o <= 1114111 || q(t, "expected valid JSON character");
    else
      xE.test(l) && q(t, "the stream contains non-printable characters");
    t.result += l;
  }
}
function Wg(t, e, n, r) {
  var i, s, o, l;
  for (Be.isObject(n) || q(t, "cannot merge mappings; the provided source object is unacceptable"), i = Object.keys(n), o = 0, l = i.length; o < l; o += 1)
    s = i[o], gr.call(e, s) || (e[s] = n[s], r[s] = !0);
}
function Ti(t, e, n, r, i, s, o, l, c) {
  var a, h;
  if (Array.isArray(i))
    for (i = Array.prototype.slice.call(i), a = 0, h = i.length; a < h; a += 1)
      Array.isArray(i[a]) && q(t, "nested arrays are not supported inside keys"), typeof i == "object" && zg(i[a]) === "[object Object]" && (i[a] = "[object Object]");
  if (typeof i == "object" && zg(i) === "[object Object]" && (i = "[object Object]"), i = String(i), e === null && (e = {}), r === "tag:yaml.org,2002:merge")
    if (Array.isArray(s))
      for (a = 0, h = s.length; a < h; a += 1)
        Wg(t, e, s[a], n);
    else
      Wg(t, e, s, n);
  else
    !t.json && !gr.call(n, i) && gr.call(e, i) && (t.line = o || t.line, t.lineStart = l || t.lineStart, t.position = c || t.position, q(t, "duplicated mapping key")), i === "__proto__" ? Object.defineProperty(e, i, {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      value: s
    }) : e[i] = s, delete n[i];
  return e;
}
function bd(t) {
  var e;
  e = t.input.charCodeAt(t.position), e === 10 ? t.position++ : e === 13 ? (t.position++, t.input.charCodeAt(t.position) === 10 && t.position++) : q(t, "a line break is expected"), t.line += 1, t.lineStart = t.position, t.firstTabInLine = -1;
}
function Le(t, e, n) {
  for (var r = 0, i = t.input.charCodeAt(t.position); i !== 0; ) {
    for (; Wr(i); )
      i === 9 && t.firstTabInLine === -1 && (t.firstTabInLine = t.position), i = t.input.charCodeAt(++t.position);
    if (e && i === 35)
      do
        i = t.input.charCodeAt(++t.position);
      while (i !== 10 && i !== 13 && i !== 0);
    if (wn(i))
      for (bd(t), i = t.input.charCodeAt(t.position), r++, t.lineIndent = 0; i === 32; )
        t.lineIndent++, i = t.input.charCodeAt(++t.position);
    else
      break;
  }
  return n !== -1 && r !== 0 && t.lineIndent < n && yc(t, "deficient indentation"), r;
}
function ga(t) {
  var e = t.position, n;
  return n = t.input.charCodeAt(e), !!((n === 45 || n === 46) && n === t.input.charCodeAt(e + 1) && n === t.input.charCodeAt(e + 2) && (e += 3, n = t.input.charCodeAt(e), n === 0 || bt(n)));
}
function vd(t, e) {
  e === 1 ? t.result += " " : e > 1 && (t.result += Be.repeat(`
`, e - 1));
}
function TE(t, e, n) {
  var r, i, s, o, l, c, a, h, u = t.kind, f = t.result, d;
  if (d = t.input.charCodeAt(t.position), bt(d) || Di(d) || d === 35 || d === 38 || d === 42 || d === 33 || d === 124 || d === 62 || d === 39 || d === 34 || d === 37 || d === 64 || d === 96 || (d === 63 || d === 45) && (i = t.input.charCodeAt(t.position + 1), bt(i) || n && Di(i)))
    return !1;
  for (t.kind = "scalar", t.result = "", s = o = t.position, l = !1; d !== 0; ) {
    if (d === 58) {
      if (i = t.input.charCodeAt(t.position + 1), bt(i) || n && Di(i))
        break;
    } else if (d === 35) {
      if (r = t.input.charCodeAt(t.position - 1), bt(r))
        break;
    } else {
      if (t.position === t.lineStart && ga(t) || n && Di(d))
        break;
      if (wn(d))
        if (c = t.line, a = t.lineStart, h = t.lineIndent, Le(t, !1, -1), t.lineIndent >= e) {
          l = !0, d = t.input.charCodeAt(t.position);
          continue;
        } else {
          t.position = o, t.line = c, t.lineStart = a, t.lineIndent = h;
          break;
        }
    }
    l && (hr(t, s, o, !1), vd(t, t.line - c), s = o = t.position, l = !1), Wr(d) || (o = t.position + 1), d = t.input.charCodeAt(++t.position);
  }
  return hr(t, s, o, !1), t.result ? !0 : (t.kind = u, t.result = f, !1);
}
function ME(t, e) {
  var n, r, i;
  if (n = t.input.charCodeAt(t.position), n !== 39)
    return !1;
  for (t.kind = "scalar", t.result = "", t.position++, r = i = t.position; (n = t.input.charCodeAt(t.position)) !== 0; )
    if (n === 39)
      if (hr(t, r, t.position, !0), n = t.input.charCodeAt(++t.position), n === 39)
        r = t.position, t.position++, i = t.position;
      else
        return !0;
    else
      wn(n) ? (hr(t, r, i, !0), vd(t, Le(t, !1, e)), r = i = t.position) : t.position === t.lineStart && ga(t) ? q(t, "unexpected end of the document within a single quoted scalar") : (t.position++, i = t.position);
  q(t, "unexpected end of the stream within a single quoted scalar");
}
function OE(t, e) {
  var n, r, i, s, o, l;
  if (l = t.input.charCodeAt(t.position), l !== 34)
    return !1;
  for (t.kind = "scalar", t.result = "", t.position++, n = r = t.position; (l = t.input.charCodeAt(t.position)) !== 0; ) {
    if (l === 34)
      return hr(t, n, t.position, !0), t.position++, !0;
    if (l === 92) {
      if (hr(t, n, t.position, !0), l = t.input.charCodeAt(++t.position), wn(l))
        Le(t, !1, e);
      else if (l < 256 && Nb[l])
        t.result += Bb[l], t.position++;
      else if ((o = SE(l)) > 0) {
        for (i = o, s = 0; i > 0; i--)
          l = t.input.charCodeAt(++t.position), (o = CE(l)) >= 0 ? s = (s << 4) + o : q(t, "expected hexadecimal character");
        t.result += EE(s), t.position++;
      } else
        q(t, "unknown escape sequence");
      n = r = t.position;
    } else
      wn(l) ? (hr(t, n, r, !0), vd(t, Le(t, !1, e)), n = r = t.position) : t.position === t.lineStart && ga(t) ? q(t, "unexpected end of the document within a double quoted scalar") : (t.position++, r = t.position);
  }
  q(t, "unexpected end of the stream within a double quoted scalar");
}
function LE(t, e) {
  var n = !0, r, i, s, o = t.tag, l, c = t.anchor, a, h, u, f, d, p = /* @__PURE__ */ Object.create(null), g, m, y, b;
  if (b = t.input.charCodeAt(t.position), b === 91)
    h = 93, d = !1, l = [];
  else if (b === 123)
    h = 125, d = !0, l = {};
  else
    return !1;
  for (t.anchor !== null && (t.anchorMap[t.anchor] = l), b = t.input.charCodeAt(++t.position); b !== 0; ) {
    if (Le(t, !0, e), b = t.input.charCodeAt(t.position), b === h)
      return t.position++, t.tag = o, t.anchor = c, t.kind = d ? "mapping" : "sequence", t.result = l, !0;
    n ? b === 44 && q(t, "expected the node content, but found ','") : q(t, "missed comma between flow collection entries"), m = g = y = null, u = f = !1, b === 63 && (a = t.input.charCodeAt(t.position + 1), bt(a) && (u = f = !0, t.position++, Le(t, !0, e))), r = t.line, i = t.lineStart, s = t.position, es(t, e, gc, !1, !0), m = t.tag, g = t.result, Le(t, !0, e), b = t.input.charCodeAt(t.position), (f || t.line === r) && b === 58 && (u = !0, b = t.input.charCodeAt(++t.position), Le(t, !0, e), es(t, e, gc, !1, !0), y = t.result), d ? Ti(t, l, p, m, g, y, r, i, s) : u ? l.push(Ti(t, null, p, m, g, y, r, i, s)) : l.push(g), Le(t, !0, e), b = t.input.charCodeAt(t.position), b === 44 ? (n = !0, b = t.input.charCodeAt(++t.position)) : n = !1;
  }
  q(t, "unexpected end of the stream within a flow collection");
}
function RE(t, e) {
  var n, r, i = ph, s = !1, o = !1, l = e, c = 0, a = !1, h, u;
  if (u = t.input.charCodeAt(t.position), u === 124)
    r = !1;
  else if (u === 62)
    r = !0;
  else
    return !1;
  for (t.kind = "scalar", t.result = ""; u !== 0; )
    if (u = t.input.charCodeAt(++t.position), u === 43 || u === 45)
      ph === i ? i = u === 43 ? Hg : wE : q(t, "repeat of a chomping mode identifier");
    else if ((h = AE(u)) >= 0)
      h === 0 ? q(t, "bad explicit indentation width of a block scalar; it cannot be less than one") : o ? q(t, "repeat of an indentation width identifier") : (l = e + h - 1, o = !0);
    else
      break;
  if (Wr(u)) {
    do
      u = t.input.charCodeAt(++t.position);
    while (Wr(u));
    if (u === 35)
      do
        u = t.input.charCodeAt(++t.position);
      while (!wn(u) && u !== 0);
  }
  for (; u !== 0; ) {
    for (bd(t), t.lineIndent = 0, u = t.input.charCodeAt(t.position); (!o || t.lineIndent < l) && u === 32; )
      t.lineIndent++, u = t.input.charCodeAt(++t.position);
    if (!o && t.lineIndent > l && (l = t.lineIndent), wn(u)) {
      c++;
      continue;
    }
    if (t.lineIndent < l) {
      i === Hg ? t.result += Be.repeat(`
`, s ? 1 + c : c) : i === ph && s && (t.result += `
`);
      break;
    }
    for (r ? Wr(u) ? (a = !0, t.result += Be.repeat(`
`, s ? 1 + c : c)) : a ? (a = !1, t.result += Be.repeat(`
`, c + 1)) : c === 0 ? s && (t.result += " ") : t.result += Be.repeat(`
`, c) : t.result += Be.repeat(`
`, s ? 1 + c : c), s = !0, o = !0, c = 0, n = t.position; !wn(u) && u !== 0; )
      u = t.input.charCodeAt(++t.position);
    hr(t, n, t.position, !1);
  }
  return !0;
}
function jg(t, e) {
  var n, r = t.tag, i = t.anchor, s = [], o, l = !1, c;
  if (t.firstTabInLine !== -1)
    return !1;
  for (t.anchor !== null && (t.anchorMap[t.anchor] = s), c = t.input.charCodeAt(t.position); c !== 0 && (t.firstTabInLine !== -1 && (t.position = t.firstTabInLine, q(t, "tab characters must not be used in indentation")), !(c !== 45 || (o = t.input.charCodeAt(t.position + 1), !bt(o)))); ) {
    if (l = !0, t.position++, Le(t, !0, -1) && t.lineIndent <= e) {
      s.push(null), c = t.input.charCodeAt(t.position);
      continue;
    }
    if (n = t.line, es(t, e, Lb, !1, !0), s.push(t.result), Le(t, !0, -1), c = t.input.charCodeAt(t.position), (t.line === n || t.lineIndent > e) && c !== 0)
      q(t, "bad indentation of a sequence entry");
    else if (t.lineIndent < e)
      break;
  }
  return l ? (t.tag = r, t.anchor = i, t.kind = "sequence", t.result = s, !0) : !1;
}
function IE(t, e, n) {
  var r, i, s, o, l, c, a = t.tag, h = t.anchor, u = {}, f = /* @__PURE__ */ Object.create(null), d = null, p = null, g = null, m = !1, y = !1, b;
  if (t.firstTabInLine !== -1)
    return !1;
  for (t.anchor !== null && (t.anchorMap[t.anchor] = u), b = t.input.charCodeAt(t.position); b !== 0; ) {
    if (!m && t.firstTabInLine !== -1 && (t.position = t.firstTabInLine, q(t, "tab characters must not be used in indentation")), r = t.input.charCodeAt(t.position + 1), s = t.line, (b === 63 || b === 58) && bt(r))
      b === 63 ? (m && (Ti(t, u, f, d, p, null, o, l, c), d = p = g = null), y = !0, m = !0, i = !0) : m ? (m = !1, i = !0) : q(t, "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"), t.position += 1, b = r;
    else {
      if (o = t.line, l = t.lineStart, c = t.position, !es(t, n, Ob, !1, !0))
        break;
      if (t.line === s) {
        for (b = t.input.charCodeAt(t.position); Wr(b); )
          b = t.input.charCodeAt(++t.position);
        if (b === 58)
          b = t.input.charCodeAt(++t.position), bt(b) || q(t, "a whitespace character is expected after the key-value separator within a block mapping"), m && (Ti(t, u, f, d, p, null, o, l, c), d = p = g = null), y = !0, m = !1, i = !1, d = t.tag, p = t.result;
        else if (y)
          q(t, "can not read an implicit mapping pair; a colon is missed");
        else
          return t.tag = a, t.anchor = h, !0;
      } else if (y)
        q(t, "can not read a block mapping entry; a multiline key may not be an implicit key");
      else
        return t.tag = a, t.anchor = h, !0;
    }
    if ((t.line === s || t.lineIndent > e) && (m && (o = t.line, l = t.lineStart, c = t.position), es(t, e, mc, !0, i) && (m ? p = t.result : g = t.result), m || (Ti(t, u, f, d, p, g, o, l, c), d = p = g = null), Le(t, !0, -1), b = t.input.charCodeAt(t.position)), (t.line === s || t.lineIndent > e) && b !== 0)
      q(t, "bad indentation of a mapping entry");
    else if (t.lineIndent < e)
      break;
  }
  return m && Ti(t, u, f, d, p, null, o, l, c), y && (t.tag = a, t.anchor = h, t.kind = "mapping", t.result = u), y;
}
function NE(t) {
  var e, n = !1, r = !1, i, s, o;
  if (o = t.input.charCodeAt(t.position), o !== 33)
    return !1;
  if (t.tag !== null && q(t, "duplication of a tag property"), o = t.input.charCodeAt(++t.position), o === 60 ? (n = !0, o = t.input.charCodeAt(++t.position)) : o === 33 ? (r = !0, i = "!!", o = t.input.charCodeAt(++t.position)) : i = "!", e = t.position, n) {
    do
      o = t.input.charCodeAt(++t.position);
    while (o !== 0 && o !== 62);
    t.position < t.length ? (s = t.input.slice(e, t.position), o = t.input.charCodeAt(++t.position)) : q(t, "unexpected end of the stream within a verbatim tag");
  } else {
    for (; o !== 0 && !bt(o); )
      o === 33 && (r ? q(t, "tag suffix cannot contain exclamation marks") : (i = t.input.slice(e - 1, t.position + 1), Rb.test(i) || q(t, "named tag handle cannot contain such characters"), r = !0, e = t.position + 1)), o = t.input.charCodeAt(++t.position);
    s = t.input.slice(e, t.position), _E.test(s) && q(t, "tag suffix cannot contain flow indicator characters");
  }
  s && !Ib.test(s) && q(t, "tag name cannot contain such characters: " + s);
  try {
    s = decodeURIComponent(s);
  } catch {
    q(t, "tag name is malformed: " + s);
  }
  return n ? t.tag = s : gr.call(t.tagMap, i) ? t.tag = t.tagMap[i] + s : i === "!" ? t.tag = "!" + s : i === "!!" ? t.tag = "tag:yaml.org,2002:" + s : q(t, 'undeclared tag handle "' + i + '"'), !0;
}
function BE(t) {
  var e, n;
  if (n = t.input.charCodeAt(t.position), n !== 38)
    return !1;
  for (t.anchor !== null && q(t, "duplication of an anchor property"), n = t.input.charCodeAt(++t.position), e = t.position; n !== 0 && !bt(n) && !Di(n); )
    n = t.input.charCodeAt(++t.position);
  return t.position === e && q(t, "name of an anchor node must contain at least one character"), t.anchor = t.input.slice(e, t.position), !0;
}
function PE(t) {
  var e, n, r;
  if (r = t.input.charCodeAt(t.position), r !== 42)
    return !1;
  for (r = t.input.charCodeAt(++t.position), e = t.position; r !== 0 && !bt(r) && !Di(r); )
    r = t.input.charCodeAt(++t.position);
  return t.position === e && q(t, "name of an alias node must contain at least one character"), n = t.input.slice(e, t.position), gr.call(t.anchorMap, n) || q(t, 'unidentified alias "' + n + '"'), t.result = t.anchorMap[n], Le(t, !0, -1), !0;
}
function es(t, e, n, r, i) {
  var s, o, l, c = 1, a = !1, h = !1, u, f, d, p, g, m;
  if (t.listener !== null && t.listener("open", t), t.tag = null, t.anchor = null, t.kind = null, t.result = null, s = o = l = mc === n || Lb === n, r && Le(t, !0, -1) && (a = !0, t.lineIndent > e ? c = 1 : t.lineIndent === e ? c = 0 : t.lineIndent < e && (c = -1)), c === 1)
    for (; NE(t) || BE(t); )
      Le(t, !0, -1) ? (a = !0, l = s, t.lineIndent > e ? c = 1 : t.lineIndent === e ? c = 0 : t.lineIndent < e && (c = -1)) : l = !1;
  if (l && (l = a || i), (c === 1 || mc === n) && (gc === n || Ob === n ? g = e : g = e + 1, m = t.position - t.lineStart, c === 1 ? l && (jg(t, m) || IE(t, m, g)) || LE(t, g) ? h = !0 : (o && RE(t, g) || ME(t, g) || OE(t, g) ? h = !0 : PE(t) ? (h = !0, (t.tag !== null || t.anchor !== null) && q(t, "alias node should not have any properties")) : TE(t, g, gc === n) && (h = !0, t.tag === null && (t.tag = "?")), t.anchor !== null && (t.anchorMap[t.anchor] = t.result)) : c === 0 && (h = l && jg(t, m))), t.tag === null)
    t.anchor !== null && (t.anchorMap[t.anchor] = t.result);
  else if (t.tag === "?") {
    for (t.result !== null && t.kind !== "scalar" && q(t, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + t.kind + '"'), u = 0, f = t.implicitTypes.length; u < f; u += 1)
      if (p = t.implicitTypes[u], p.resolve(t.result)) {
        t.result = p.construct(t.result), t.tag = p.tag, t.anchor !== null && (t.anchorMap[t.anchor] = t.result);
        break;
      }
  } else if (t.tag !== "!") {
    if (gr.call(t.typeMap[t.kind || "fallback"], t.tag))
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
function FE(t) {
  var e = t.position, n, r, i, s = !1, o;
  for (t.version = null, t.checkLineBreaks = t.legacy, t.tagMap = /* @__PURE__ */ Object.create(null), t.anchorMap = /* @__PURE__ */ Object.create(null); (o = t.input.charCodeAt(t.position)) !== 0 && (Le(t, !0, -1), o = t.input.charCodeAt(t.position), !(t.lineIndent > 0 || o !== 37)); ) {
    for (s = !0, o = t.input.charCodeAt(++t.position), n = t.position; o !== 0 && !bt(o); )
      o = t.input.charCodeAt(++t.position);
    for (r = t.input.slice(n, t.position), i = [], r.length < 1 && q(t, "directive name must not be less than one character in length"); o !== 0; ) {
      for (; Wr(o); )
        o = t.input.charCodeAt(++t.position);
      if (o === 35) {
        do
          o = t.input.charCodeAt(++t.position);
        while (o !== 0 && !wn(o));
        break;
      }
      if (wn(o))
        break;
      for (n = t.position; o !== 0 && !bt(o); )
        o = t.input.charCodeAt(++t.position);
      i.push(t.input.slice(n, t.position));
    }
    o !== 0 && bd(t), gr.call(Ug, r) ? Ug[r](t, r, i) : yc(t, 'unknown document directive "' + r + '"');
  }
  if (Le(t, !0, -1), t.lineIndent === 0 && t.input.charCodeAt(t.position) === 45 && t.input.charCodeAt(t.position + 1) === 45 && t.input.charCodeAt(t.position + 2) === 45 ? (t.position += 3, Le(t, !0, -1)) : s && q(t, "directives end mark is expected"), es(t, t.lineIndent - 1, mc, !1, !0), Le(t, !0, -1), t.checkLineBreaks && kE.test(t.input.slice(e, t.position)) && yc(t, "non-ASCII line breaks are interpreted as content"), t.documents.push(t.result), t.position === t.lineStart && ga(t)) {
    t.input.charCodeAt(t.position) === 46 && (t.position += 3, Le(t, !0, -1));
    return;
  }
  if (t.position < t.length - 1)
    q(t, "end of the stream or a document separator is expected");
  else
    return;
}
function Fb(t, e) {
  t = String(t), e = e || {}, t.length !== 0 && (t.charCodeAt(t.length - 1) !== 10 && t.charCodeAt(t.length - 1) !== 13 && (t += `
`), t.charCodeAt(0) === 65279 && (t = t.slice(1)));
  var n = new DE(t, e), r = t.indexOf("\0");
  for (r !== -1 && (n.position = r, q(n, "null byte is not allowed in input")), n.input += "\0"; n.input.charCodeAt(n.position) === 32; )
    n.lineIndent += 1, n.position += 1;
  for (; n.position < n.length - 1; )
    FE(n);
  return n.documents;
}
function $E(t, e, n) {
  e !== null && typeof e == "object" && typeof n > "u" && (n = e, e = null);
  var r = Fb(t, n);
  if (typeof e != "function")
    return r;
  for (var i = 0, s = r.length; i < s; i += 1)
    e(r[i]);
}
function qE(t, e) {
  var n = Fb(t, e);
  if (n.length !== 0) {
    if (n.length === 1)
      return n[0];
    throw new at("expected a single document in the stream, but found more");
  }
}
var HE = $E, zE = qE, $b = {
  loadAll: HE,
  load: zE
}, qb = Object.prototype.toString, Hb = Object.prototype.hasOwnProperty, wd = 65279, VE = 9, co = 10, UE = 13, WE = 32, jE = 33, GE = 34, Bu = 35, YE = 37, KE = 38, JE = 39, ZE = 42, zb = 44, XE = 45, bc = 58, QE = 61, e2 = 62, t2 = 63, n2 = 64, Vb = 91, Ub = 93, r2 = 96, Wb = 123, i2 = 124, jb = 125, it = {};
it[0] = "\\0";
it[7] = "\\a";
it[8] = "\\b";
it[9] = "\\t";
it[10] = "\\n";
it[11] = "\\v";
it[12] = "\\f";
it[13] = "\\r";
it[27] = "\\e";
it[34] = '\\"';
it[92] = "\\\\";
it[133] = "\\N";
it[160] = "\\_";
it[8232] = "\\L";
it[8233] = "\\P";
var s2 = [
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
], o2 = /^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;
function l2(t, e) {
  var n, r, i, s, o, l, c;
  if (e === null)
    return {};
  for (n = {}, r = Object.keys(e), i = 0, s = r.length; i < s; i += 1)
    o = r[i], l = String(e[o]), o.slice(0, 2) === "!!" && (o = "tag:yaml.org,2002:" + o.slice(2)), c = t.compiledTypeMap.fallback[o], c && Hb.call(c.styleAliases, l) && (l = c.styleAliases[l]), n[o] = l;
  return n;
}
function c2(t) {
  var e, n, r;
  if (e = t.toString(16).toUpperCase(), t <= 255)
    n = "x", r = 2;
  else if (t <= 65535)
    n = "u", r = 4;
  else if (t <= 4294967295)
    n = "U", r = 8;
  else
    throw new at("code point within a string may not be greater than 0xFFFFFFFF");
  return "\\" + n + Be.repeat("0", r - e.length) + e;
}
var a2 = 1, ao = 2;
function h2(t) {
  this.schema = t.schema || yd, this.indent = Math.max(1, t.indent || 2), this.noArrayIndent = t.noArrayIndent || !1, this.skipInvalid = t.skipInvalid || !1, this.flowLevel = Be.isNothing(t.flowLevel) ? -1 : t.flowLevel, this.styleMap = l2(this.schema, t.styles || null), this.sortKeys = t.sortKeys || !1, this.lineWidth = t.lineWidth || 80, this.noRefs = t.noRefs || !1, this.noCompatMode = t.noCompatMode || !1, this.condenseFlow = t.condenseFlow || !1, this.quotingType = t.quotingType === '"' ? ao : a2, this.forceQuotes = t.forceQuotes || !1, this.replacer = typeof t.replacer == "function" ? t.replacer : null, this.implicitTypes = this.schema.compiledImplicit, this.explicitTypes = this.schema.compiledExplicit, this.tag = null, this.result = "", this.duplicates = [], this.usedDuplicates = null;
}
function Gg(t, e) {
  for (var n = Be.repeat(" ", e), r = 0, i = -1, s = "", o, l = t.length; r < l; )
    i = t.indexOf(`
`, r), i === -1 ? (o = t.slice(r), r = l) : (o = t.slice(r, i + 1), r = i + 1), o.length && o !== `
` && (s += n), s += o;
  return s;
}
function Pu(t, e) {
  return `
` + Be.repeat(" ", t.indent * e);
}
function u2(t, e) {
  var n, r, i;
  for (n = 0, r = t.implicitTypes.length; n < r; n += 1)
    if (i = t.implicitTypes[n], i.resolve(e))
      return !0;
  return !1;
}
function vc(t) {
  return t === WE || t === VE;
}
function ho(t) {
  return 32 <= t && t <= 126 || 161 <= t && t <= 55295 && t !== 8232 && t !== 8233 || 57344 <= t && t <= 65533 && t !== wd || 65536 <= t && t <= 1114111;
}
function Yg(t) {
  return ho(t) && t !== wd && t !== UE && t !== co;
}
function Kg(t, e, n) {
  var r = Yg(t), i = r && !vc(t);
  return (n ? r : r && t !== zb && t !== Vb && t !== Ub && t !== Wb && t !== jb) && t !== Bu && !(e === bc && !i) || Yg(e) && !vc(e) && t === Bu || e === bc && i;
}
function f2(t) {
  return ho(t) && t !== wd && !vc(t) && t !== XE && t !== t2 && t !== bc && t !== zb && t !== Vb && t !== Ub && t !== Wb && t !== jb && t !== Bu && t !== KE && t !== ZE && t !== jE && t !== i2 && t !== QE && t !== e2 && t !== JE && t !== GE && t !== YE && t !== n2 && t !== r2;
}
function d2(t) {
  return !vc(t) && t !== bc;
}
function qs(t, e) {
  var n = t.charCodeAt(e), r;
  return n >= 55296 && n <= 56319 && e + 1 < t.length && (r = t.charCodeAt(e + 1), r >= 56320 && r <= 57343) ? (n - 55296) * 1024 + r - 56320 + 65536 : n;
}
function Gb(t) {
  var e = /^\n* /;
  return e.test(t);
}
var Yb = 1, Fu = 2, Kb = 3, Jb = 4, Ci = 5;
function p2(t, e, n, r, i, s, o, l) {
  var c, a = 0, h = null, u = !1, f = !1, d = r !== -1, p = -1, g = f2(qs(t, 0)) && d2(qs(t, t.length - 1));
  if (e || o)
    for (c = 0; c < t.length; a >= 65536 ? c += 2 : c++) {
      if (a = qs(t, c), !ho(a))
        return Ci;
      g = g && Kg(a, h, l), h = a;
    }
  else {
    for (c = 0; c < t.length; a >= 65536 ? c += 2 : c++) {
      if (a = qs(t, c), a === co)
        u = !0, d && (f = f || c - p - 1 > r && t[p + 1] !== " ", p = c);
      else if (!ho(a))
        return Ci;
      g = g && Kg(a, h, l), h = a;
    }
    f = f || d && c - p - 1 > r && t[p + 1] !== " ";
  }
  return !u && !f ? g && !o && !i(t) ? Yb : s === ao ? Ci : Fu : n > 9 && Gb(t) ? Ci : o ? s === ao ? Ci : Fu : f ? Jb : Kb;
}
function g2(t, e, n, r, i) {
  t.dump = function() {
    if (e.length === 0)
      return t.quotingType === ao ? '""' : "''";
    if (!t.noCompatMode && (s2.indexOf(e) !== -1 || o2.test(e)))
      return t.quotingType === ao ? '"' + e + '"' : "'" + e + "'";
    var s = t.indent * Math.max(1, n), o = t.lineWidth === -1 ? -1 : Math.max(Math.min(t.lineWidth, 40), t.lineWidth - s), l = r || t.flowLevel > -1 && n >= t.flowLevel;
    function c(a) {
      return u2(t, a);
    }
    switch (p2(
      e,
      l,
      t.indent,
      o,
      c,
      t.quotingType,
      t.forceQuotes && !r,
      i
    )) {
      case Yb:
        return e;
      case Fu:
        return "'" + e.replace(/'/g, "''") + "'";
      case Kb:
        return "|" + Jg(e, t.indent) + Zg(Gg(e, s));
      case Jb:
        return ">" + Jg(e, t.indent) + Zg(Gg(m2(e, o), s));
      case Ci:
        return '"' + y2(e) + '"';
      default:
        throw new at("impossible error: invalid scalar style");
    }
  }();
}
function Jg(t, e) {
  var n = Gb(t) ? String(e) : "", r = t[t.length - 1] === `
`, i = r && (t[t.length - 2] === `
` || t === `
`), s = i ? "+" : r ? "" : "-";
  return n + s + `
`;
}
function Zg(t) {
  return t[t.length - 1] === `
` ? t.slice(0, -1) : t;
}
function m2(t, e) {
  for (var n = /(\n+)([^\n]*)/g, r = function() {
    var a = t.indexOf(`
`);
    return a = a !== -1 ? a : t.length, n.lastIndex = a, Xg(t.slice(0, a), e);
  }(), i = t[0] === `
` || t[0] === " ", s, o; o = n.exec(t); ) {
    var l = o[1], c = o[2];
    s = c[0] === " ", r += l + (!i && !s && c !== "" ? `
` : "") + Xg(c, e), i = s;
  }
  return r;
}
function Xg(t, e) {
  if (t === "" || t[0] === " ")
    return t;
  for (var n = / [^ ]/g, r, i = 0, s, o = 0, l = 0, c = ""; r = n.exec(t); )
    l = r.index, l - i > e && (s = o > i ? o : l, c += `
` + t.slice(i, s), i = s + 1), o = l;
  return c += `
`, t.length - i > e && o > i ? c += t.slice(i, o) + `
` + t.slice(o + 1) : c += t.slice(i), c.slice(1);
}
function y2(t) {
  for (var e = "", n = 0, r, i = 0; i < t.length; n >= 65536 ? i += 2 : i++)
    n = qs(t, i), r = it[n], !r && ho(n) ? (e += t[i], n >= 65536 && (e += t[i + 1])) : e += r || c2(n);
  return e;
}
function b2(t, e, n) {
  var r = "", i = t.tag, s, o, l;
  for (s = 0, o = n.length; s < o; s += 1)
    l = n[s], t.replacer && (l = t.replacer.call(n, String(s), l)), (Vn(t, e, l, !1, !1) || typeof l > "u" && Vn(t, e, null, !1, !1)) && (r !== "" && (r += "," + (t.condenseFlow ? "" : " ")), r += t.dump);
  t.tag = i, t.dump = "[" + r + "]";
}
function Qg(t, e, n, r) {
  var i = "", s = t.tag, o, l, c;
  for (o = 0, l = n.length; o < l; o += 1)
    c = n[o], t.replacer && (c = t.replacer.call(n, String(o), c)), (Vn(t, e + 1, c, !0, !0, !1, !0) || typeof c > "u" && Vn(t, e + 1, null, !0, !0, !1, !0)) && ((!r || i !== "") && (i += Pu(t, e)), t.dump && co === t.dump.charCodeAt(0) ? i += "-" : i += "- ", i += t.dump);
  t.tag = s, t.dump = i || "[]";
}
function v2(t, e, n) {
  var r = "", i = t.tag, s = Object.keys(n), o, l, c, a, h;
  for (o = 0, l = s.length; o < l; o += 1)
    h = "", r !== "" && (h += ", "), t.condenseFlow && (h += '"'), c = s[o], a = n[c], t.replacer && (a = t.replacer.call(n, c, a)), Vn(t, e, c, !1, !1) && (t.dump.length > 1024 && (h += "? "), h += t.dump + (t.condenseFlow ? '"' : "") + ":" + (t.condenseFlow ? "" : " "), Vn(t, e, a, !1, !1) && (h += t.dump, r += h));
  t.tag = i, t.dump = "{" + r + "}";
}
function w2(t, e, n, r) {
  var i = "", s = t.tag, o = Object.keys(n), l, c, a, h, u, f;
  if (t.sortKeys === !0)
    o.sort();
  else if (typeof t.sortKeys == "function")
    o.sort(t.sortKeys);
  else if (t.sortKeys)
    throw new at("sortKeys must be a boolean or a function");
  for (l = 0, c = o.length; l < c; l += 1)
    f = "", (!r || i !== "") && (f += Pu(t, e)), a = o[l], h = n[a], t.replacer && (h = t.replacer.call(n, a, h)), Vn(t, e + 1, a, !0, !0, !0) && (u = t.tag !== null && t.tag !== "?" || t.dump && t.dump.length > 1024, u && (t.dump && co === t.dump.charCodeAt(0) ? f += "?" : f += "? "), f += t.dump, u && (f += Pu(t, e)), Vn(t, e + 1, h, !0, u) && (t.dump && co === t.dump.charCodeAt(0) ? f += ":" : f += ": ", f += t.dump, i += f));
  t.tag = s, t.dump = i || "{}";
}
function em(t, e, n) {
  var r, i, s, o, l, c;
  for (i = n ? t.explicitTypes : t.implicitTypes, s = 0, o = i.length; s < o; s += 1)
    if (l = i[s], (l.instanceOf || l.predicate) && (!l.instanceOf || typeof e == "object" && e instanceof l.instanceOf) && (!l.predicate || l.predicate(e))) {
      if (n ? l.multi && l.representName ? t.tag = l.representName(e) : t.tag = l.tag : t.tag = "?", l.represent) {
        if (c = t.styleMap[l.tag] || l.defaultStyle, qb.call(l.represent) === "[object Function]")
          r = l.represent(e, c);
        else if (Hb.call(l.represent, c))
          r = l.represent[c](e, c);
        else
          throw new at("!<" + l.tag + '> tag resolver accepts not "' + c + '" style');
        t.dump = r;
      }
      return !0;
    }
  return !1;
}
function Vn(t, e, n, r, i, s, o) {
  t.tag = null, t.dump = n, em(t, n, !1) || em(t, n, !0);
  var l = qb.call(t.dump), c = r, a;
  r && (r = t.flowLevel < 0 || t.flowLevel > e);
  var h = l === "[object Object]" || l === "[object Array]", u, f;
  if (h && (u = t.duplicates.indexOf(n), f = u !== -1), (t.tag !== null && t.tag !== "?" || f || t.indent !== 2 && e > 0) && (i = !1), f && t.usedDuplicates[u])
    t.dump = "*ref_" + u;
  else {
    if (h && f && !t.usedDuplicates[u] && (t.usedDuplicates[u] = !0), l === "[object Object]")
      r && Object.keys(t.dump).length !== 0 ? (w2(t, e, t.dump, i), f && (t.dump = "&ref_" + u + t.dump)) : (v2(t, e, t.dump), f && (t.dump = "&ref_" + u + " " + t.dump));
    else if (l === "[object Array]")
      r && t.dump.length !== 0 ? (t.noArrayIndent && !o && e > 0 ? Qg(t, e - 1, t.dump, i) : Qg(t, e, t.dump, i), f && (t.dump = "&ref_" + u + t.dump)) : (b2(t, e, t.dump), f && (t.dump = "&ref_" + u + " " + t.dump));
    else if (l === "[object String]")
      t.tag !== "?" && g2(t, t.dump, e, s, c);
    else {
      if (l === "[object Undefined]")
        return !1;
      if (t.skipInvalid)
        return !1;
      throw new at("unacceptable kind of an object to dump " + l);
    }
    t.tag !== null && t.tag !== "?" && (a = encodeURI(
      t.tag[0] === "!" ? t.tag.slice(1) : t.tag
    ).replace(/!/g, "%21"), t.tag[0] === "!" ? a = "!" + a : a.slice(0, 18) === "tag:yaml.org,2002:" ? a = "!!" + a.slice(18) : a = "!<" + a + ">", t.dump = a + " " + t.dump);
  }
  return !0;
}
function x2(t, e) {
  var n = [], r = [], i, s;
  for ($u(t, n, r), i = 0, s = r.length; i < s; i += 1)
    e.duplicates.push(n[r[i]]);
  e.usedDuplicates = new Array(s);
}
function $u(t, e, n) {
  var r, i, s;
  if (t !== null && typeof t == "object")
    if (i = e.indexOf(t), i !== -1)
      n.indexOf(i) === -1 && n.push(i);
    else if (e.push(t), Array.isArray(t))
      for (i = 0, s = t.length; i < s; i += 1)
        $u(t[i], e, n);
    else
      for (r = Object.keys(t), i = 0, s = r.length; i < s; i += 1)
        $u(t[r[i]], e, n);
}
function k2(t, e) {
  e = e || {};
  var n = new h2(e);
  n.noRefs || x2(t, n);
  var r = t;
  return n.replacer && (r = n.replacer.call({ "": r }, "", r)), Vn(n, 0, r, !0, !0) ? n.dump + `
` : "";
}
var _2 = k2, C2 = {
  dump: _2
};
function xd(t, e) {
  return function() {
    throw new Error("Function yaml." + t + " is removed in js-yaml 4. Use yaml." + e + " instead, which is now safe by default.");
  };
}
var S2 = Ye, A2 = fb, E2 = mb, D2 = xb, T2 = kb, M2 = yd, O2 = $b.load, L2 = $b.loadAll, R2 = C2.dump, I2 = at, N2 = {
  binary: Eb,
  float: wb,
  map: gb,
  null: yb,
  pairs: Tb,
  set: Mb,
  timestamp: Sb,
  bool: bb,
  int: vb,
  merge: Ab,
  omap: Db,
  seq: pb,
  str: db
}, B2 = xd("safeLoad", "load"), P2 = xd("safeLoadAll", "loadAll"), F2 = xd("safeDump", "dump"), $2 = {
  Type: S2,
  Schema: A2,
  FAILSAFE_SCHEMA: E2,
  JSON_SCHEMA: D2,
  CORE_SCHEMA: T2,
  DEFAULT_SCHEMA: M2,
  load: O2,
  loadAll: L2,
  dump: R2,
  YAMLException: I2,
  types: N2,
  safeLoad: B2,
  safeLoadAll: P2,
  safeDump: F2
};
function q2(t, e, n, r, i, s = !0) {
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
class hi {
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
    return q2(this.state.md, "run_directives", e, this.state.env, n, !0);
  }
}
class ir extends Error {
  constructor() {
    super(...arguments), this.name = "DirectiveParsingError";
  }
}
function H2(t, e) {
  const n = t.meta.arg || "", r = t.content;
  let i = r.trim() ? r.split(/\r?\n/) : [], s = 0, o = {};
  (Object.keys(e.option_spec || {}) || e.rawOptions) && ([i, o, s] = Zb(i, e));
  let l = [];
  if (!e.required_arguments && !e.optional_arguments ? n && (s = 0, i = [n].concat(i)) : l = z2(n, e), i.length && !i[0].trim() && (i.shift(), s++), i.length && !e.has_content)
    throw new ir("Has content but content not allowed");
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
function Zb(t, e) {
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
      const s = $2.load(i.join(`
`));
      if (s !== null && typeof s == "object")
        r = s;
      else
        throw new ir(`not dict: ${s}`);
    } catch (s) {
      throw new ir(`Invalid options YAML: ${s}`);
    }
  if (e.rawOptions)
    return [t, r, n];
  for (const [s, o] of Object.entries(r)) {
    const l = e.option_spec ? e.option_spec[s] : null;
    if (!l)
      throw new ir(`Unknown option: ${s}`);
    let c = o;
    (o === null || o === !1) && (c = "");
    try {
      c = l(`${c || ""}`);
    } catch (a) {
      throw new ir(`Invalid option value: (option: '${s}'; value: ${o})
${a}`);
    }
    r[s] = c;
  }
  return [t, r, n];
}
function z2(t, e) {
  var n;
  let r = t.trim() ? (n = t.trim()) === null || n === void 0 ? void 0 : n.split(/\s+/) : [];
  const i = (e.required_arguments || 0) + (e.optional_arguments || 0);
  if (r.length < (e.required_arguments || 0))
    throw new ir(`${e.required_arguments} argument(s) required, ${r.length} supplied`);
  if (r.length > i)
    if (e.final_argument_whitespace) {
      const s = t.split(/\s+/);
      r = s.splice(0, i - 1), r.push(s.join(" "));
    } else
      throw new ir(`maximum ${i} argument(s) allowed, ${r.length} supplied`);
  return r;
}
function V2(t, e) {
  var n;
  let r = e.directivesAfter || "block";
  (!((n = e.replaceFences) !== null && n !== void 0) || n) && (t.core.ruler.after(r, "fence_to_directive", U2), r = "fence_to_directive"), t.core.ruler.after(r, "run_directives", W2(e.directives || {})), t.renderer.rules.directive = (i, s) => {
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
function U2(t) {
  for (const e of t.tokens)
    if (e.type === "fence" || e.type === "colon_fence") {
      const n = e.info.match(/^\{([^\s}]+)\}\s*(.*)$/);
      n && (e.type = "directive", e.info = n[1], e.meta = { arg: n[2] });
    }
  return !0;
}
function W2(t) {
  function e(n) {
    const r = [];
    for (const i of n.tokens)
      if (i.type === "directive" && i.info in t)
        try {
          const s = new t[i.info](n), o = H2(i, s), [l, c] = Zb(i.content.trim() ? i.content.split(/\r?\n/) : [], s), a = new n.Token("parsed_directive_open", "", 1);
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
function j2(t) {
  return t.toLowerCase().split(/\s+/).join("-").replace(/[^a-z0-9]+/, "-").replace(/^[-0-9]+|-+$/, "");
}
class ei extends Error {
  constructor() {
    super(...arguments), this.name = "OptionSpecError";
  }
}
const mr = (t) => t, qu = (t) => {
  if (!t)
    throw new ei("Argument required but none supplied");
  return t;
}, Hu = (t) => {
  if (t.trim())
    throw new ei(`No argument is allowed: "${t}" supplied`);
  return null;
}, ys = (t) => `${t || ""}`.split(/\s+/).map((e) => j2(e));
function Xb(t) {
  if (!t)
    throw new ei("Value is not set");
  const e = Number.parseFloat(t);
  if (Number.isNaN(e) || !Number.isInteger(e))
    throw new ei(`Value "${t}" is not an integer`);
  return e;
}
function wc(t) {
  const e = Xb(t);
  if (e < 0)
    throw new ei(`Value "${t}" must be positive or zero`);
  return e;
}
const Qb = (t) => t ? wc(t) : null, G2 = (t) => (t = `${t || ""}`.replace(/\s+%$/, ""), wc(t));
function ev(t, e) {
  const r = new RegExp(`^(?<number>[0-9.]+)\\s*(?<units>${e.join("|")})$`).exec(t);
  if (!r || !r.groups)
    throw new ei(`not a positive measure of one of the following units: ${e.join("|")}`);
  return r.groups.number + r.groups.units;
}
const tv = ["em", "ex", "px", "in", "cm", "mm", "pt", "pc"], nv = (t) => ev(t, [...tv, ""]), kd = (t, e = "") => {
  try {
    return ev(t, [...tv, "%"]);
  } catch {
    return nv(t) + e;
  }
}, Y2 = (t, e = "") => t.toLowerCase() === "image" ? "image" : kd(t, e);
function _d(t) {
  return (e) => {
    if (e = e.toLowerCase().trim(), t.includes(e))
      return e;
    throw new ei(`must be in: ${t.join("|")}`);
  };
}
const K2 = (t) => t;
class Xt extends hi {
  constructor() {
    super(...arguments), this.final_argument_whitespace = !0, this.has_content = !0, this.option_spec = {
      class: ys,
      name: mr
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
class J2 extends Xt {
  constructor() {
    super(...arguments), this.required_arguments = 1;
  }
}
class Z2 extends Xt {
  constructor() {
    super(...arguments), this.title = "Attention", this.kind = "attention";
  }
}
class X2 extends Xt {
  constructor() {
    super(...arguments), this.title = "Caution", this.kind = "caution";
  }
}
class Q2 extends Xt {
  constructor() {
    super(...arguments), this.title = "Danger", this.kind = "danger";
  }
}
class eD extends Xt {
  constructor() {
    super(...arguments), this.title = "Error", this.kind = "error";
  }
}
class tD extends Xt {
  constructor() {
    super(...arguments), this.title = "Important", this.kind = "important";
  }
}
class nD extends Xt {
  constructor() {
    super(...arguments), this.title = "Hint", this.kind = "hint";
  }
}
class rD extends Xt {
  constructor() {
    super(...arguments), this.title = "Note", this.kind = "note";
  }
}
class iD extends Xt {
  constructor() {
    super(...arguments), this.title = "See Also", this.kind = "seealso";
  }
}
class sD extends Xt {
  constructor() {
    super(...arguments), this.title = "Tip", this.kind = "tip";
  }
}
class oD extends Xt {
  constructor() {
    super(...arguments), this.title = "Warning", this.kind = "warning";
  }
}
const lD = {
  admonition: J2,
  attention: Z2,
  caution: X2,
  danger: Q2,
  error: eD,
  important: tD,
  hint: nD,
  note: rD,
  seealso: iD,
  tip: sD,
  warning: oD
};
class cD extends hi {
  constructor() {
    super(...arguments), this.required_arguments = 0, this.optional_arguments = 1, this.final_argument_whitespace = !1, this.has_content = !0, this.option_spec = {
      "number-lines": Qb,
      force: Hu,
      name: mr,
      class: ys
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
class aD extends hi {
  constructor() {
    super(...arguments), this.required_arguments = 0, this.optional_arguments = 1, this.final_argument_whitespace = !1, this.has_content = !0, this.option_spec = {
      linenos: Hu,
      "lineno-start": Xb,
      dedent: Qb,
      "emphasize-lines": qu,
      caption: qu,
      force: Hu,
      name: mr,
      class: ys
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
class hD extends hi {
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
const uD = {
  code: cD,
  "code-block": aD,
  "code-cell": hD
}, rv = {
  alt: mr,
  height: nv,
  width: kd,
  scale: G2,
  target: qu,
  class: ys,
  name: mr
};
class iv extends hi {
  constructor() {
    super(...arguments), this.required_arguments = 1, this.optional_arguments = 0, this.final_argument_whitespace = !0, this.option_spec = Object.assign(Object.assign({}, rv), { align: _d(["left", "center", "right", "top", "middle", "bottom"]) });
  }
  create_image(e) {
    const n = K2(e.args[0] || ""), r = this.createToken("image", "img", 0, { map: e.map, block: !0 });
    r.attrSet("src", n), r.attrSet("alt", e.options.alt || "");
    const i = [];
    return e.options.alt && this.state.md.inline.parse(e.options.alt, this.state.md, this.state.env, i), r.children = i, e.options.height && r.attrSet("height", e.options.height), e.options.width && r.attrSet("width", e.options.width), e.options.align && r.attrJoin("class", `align-${e.options.align}`), e.options.class && r.attrJoin("class", e.options.class.join(" ")), r;
  }
  run(e) {
    return [this.create_image(e)];
  }
}
class fD extends iv {
  constructor() {
    super(...arguments), this.option_spec = Object.assign(Object.assign({}, rv), { align: _d(["left", "center", "right"]), figwidth: Y2, figclass: ys }), this.has_content = !0;
  }
  run(e) {
    const n = this.createToken("figure_open", "figure", 1, {
      map: e.map,
      block: !0
    });
    e.options.figclass && n.attrJoin("class", e.options.figclass.join(" ")), e.options.align && n.attrJoin("class", `align-${e.options.align}`), e.options.figwidth && e.options.figwidth !== "image" && n.attrSet("width", e.options.figwidth);
    let r;
    e.options.name && (r = cb(
      this.state,
      n,
      oo.figure,
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
const dD = {
  image: iv,
  figure: fD
};
class Cd {
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
    const n = new Cd(e, !1);
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
class pD extends hi {
  constructor() {
    super(...arguments), this.required_arguments = 0, this.optional_arguments = 1, this.final_argument_whitespace = !0, this.has_content = !0, this.option_spec = {
      "header-rows": wc,
      "stub-columns": wc,
      width: kd,
      widths: mr,
      class: ys,
      name: mr,
      align: _d(["left", "center", "right"])
    };
  }
  run(e) {
    this.assert_has_content(e);
    const n = e.options["header-rows"] || 0, r = this.nestedParse(e.body, e.bodyMap[0]);
    if (r.length < 2 || r[0].type !== "bullet_list_open" || r[r.length - 1].type !== "bullet_list_close")
      throw new ir("Content is not a single bullet list");
    const i = [], s = this.createToken("table_open", "table", 1, { map: e.bodyMap });
    e.options.align && s.attrJoin("class", `align-${e.options.align}`), e.options.class && s.attrJoin("class", e.options.class.join(" ")), i.push(s), e.args.length && e.args[0] && (i.push(this.createToken("table_caption_open", "caption", 1)), i.push(this.createToken("inline", "", 0, {
      map: [e.map[0], e.map[0]],
      content: e.args[0],
      children: []
    })), i.push(this.createToken("table_caption_close", "caption", -1)));
    let o = "th";
    n ? (i.push(this.createToken("thead_open", "thead", 1, { level: 1 })), o = "th") : (i.push(this.createToken("tbody_open", "tbody", 1, { level: 1 })), o = "td");
    let l, c = 0;
    for (const a of new Cd(r.slice(1, -1)).children) {
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
const gD = {
  "list-table": pD
};
class mD extends hi {
  constructor() {
    super(...arguments), this.required_arguments = 0, this.optional_arguments = 0, this.final_argument_whitespace = !1, this.has_content = !0, this.option_spec = {
      label: mr
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
      const r = cb(this.state, n, oo.equation, e.options.label, "");
      n.attrSet("number", `${r.number}`), n.info = e.options.label, n.meta = { label: e.options.label, numbered: !0, number: r.number };
    }
    return [n];
  }
}
const yD = {
  math: mD
}, bD = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, lD), dD), uD), gD), yD);
function vD(t) {
  return (e) => {
    const n = pa(e);
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
function wD(t, e) {
  t.core.ruler.push("docutils_number", vD());
}
const xD = {
  parseRoles: !0,
  replaceFences: !0,
  rolesAfter: "inline",
  directivesAfter: "block",
  directives: bD,
  roles: vA
};
function kD(t, e) {
  const n = Object.assign(Object.assign({}, xD), e);
  t.use(lA, n), t.use(V2, n), t.use(wD, n);
}
/*! @license DOMPurify 2.4.7 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.4.7/LICENSE */
function tr(t) {
  return tr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, tr(t);
}
function zu(t, e) {
  return zu = Object.setPrototypeOf || function(r, i) {
    return r.__proto__ = i, r;
  }, zu(t, e);
}
function _D() {
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
function Kl(t, e, n) {
  return _D() ? Kl = Reflect.construct : Kl = function(i, s, o) {
    var l = [null];
    l.push.apply(l, s);
    var c = Function.bind.apply(i, l), a = new c();
    return o && zu(a, o.prototype), a;
  }, Kl.apply(null, arguments);
}
function jt(t) {
  return CD(t) || SD(t) || AD(t) || ED();
}
function CD(t) {
  if (Array.isArray(t))
    return Vu(t);
}
function SD(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null)
    return Array.from(t);
}
function AD(t, e) {
  if (!!t) {
    if (typeof t == "string")
      return Vu(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    if (n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set")
      return Array.from(t);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Vu(t, e);
  }
}
function Vu(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++)
    r[n] = t[n];
  return r;
}
function ED() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var DD = Object.hasOwnProperty, tm = Object.setPrototypeOf, TD = Object.isFrozen, MD = Object.getPrototypeOf, OD = Object.getOwnPropertyDescriptor, dt = Object.freeze, Jt = Object.seal, LD = Object.create, sv = typeof Reflect < "u" && Reflect, xc = sv.apply, Uu = sv.construct;
xc || (xc = function(e, n, r) {
  return e.apply(n, r);
});
dt || (dt = function(e) {
  return e;
});
Jt || (Jt = function(e) {
  return e;
});
Uu || (Uu = function(e, n) {
  return Kl(e, jt(n));
});
var RD = Pt(Array.prototype.forEach), nm = Pt(Array.prototype.pop), Os = Pt(Array.prototype.push), Jl = Pt(String.prototype.toLowerCase), gh = Pt(String.prototype.toString), ID = Pt(String.prototype.match), Wt = Pt(String.prototype.replace), ND = Pt(String.prototype.indexOf), BD = Pt(String.prototype.trim), ot = Pt(RegExp.prototype.test), mh = PD(TypeError);
function Pt(t) {
  return function(e) {
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
      r[i - 1] = arguments[i];
    return xc(t, e, r);
  };
}
function PD(t) {
  return function() {
    for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
      n[r] = arguments[r];
    return Uu(t, n);
  };
}
function Y(t, e, n) {
  var r;
  n = (r = n) !== null && r !== void 0 ? r : Jl, tm && tm(t, null);
  for (var i = e.length; i--; ) {
    var s = e[i];
    if (typeof s == "string") {
      var o = n(s);
      o !== s && (TD(e) || (e[i] = o), s = o);
    }
    t[s] = !0;
  }
  return t;
}
function Or(t) {
  var e = LD(null), n;
  for (n in t)
    xc(DD, t, [n]) === !0 && (e[n] = t[n]);
  return e;
}
function ll(t, e) {
  for (; t !== null; ) {
    var n = OD(t, e);
    if (n) {
      if (n.get)
        return Pt(n.get);
      if (typeof n.value == "function")
        return Pt(n.value);
    }
    t = MD(t);
  }
  function r(i) {
    return console.warn("fallback value for", i), null;
  }
  return r;
}
var rm = dt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), yh = dt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), bh = dt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), FD = dt(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), vh = dt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]), $D = dt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), im = dt(["#text"]), sm = dt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]), wh = dt(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), om = dt(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), cl = dt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), qD = Jt(/\{\{[\w\W]*|[\w\W]*\}\}/gm), HD = Jt(/<%[\w\W]*|[\w\W]*%>/gm), zD = Jt(/\${[\w\W]*}/gm), VD = Jt(/^data-[\-\w.\u00B7-\uFFFF]/), UD = Jt(/^aria-[\-\w]+$/), WD = Jt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
), jD = Jt(/^(?:\w+script|data):/i), GD = Jt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
), YD = Jt(/^html$/i), KD = function() {
  return typeof window > "u" ? null : window;
}, JD = function(e, n) {
  if (tr(e) !== "object" || typeof e.createPolicy != "function")
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
function ov() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : KD(), e = function(_) {
    return ov(_);
  };
  if (e.version = "2.4.7", e.removed = [], !t || !t.document || t.document.nodeType !== 9)
    return e.isSupported = !1, e;
  var n = t.document, r = t.document, i = t.DocumentFragment, s = t.HTMLTemplateElement, o = t.Node, l = t.Element, c = t.NodeFilter, a = t.NamedNodeMap, h = a === void 0 ? t.NamedNodeMap || t.MozNamedAttrMap : a, u = t.HTMLFormElement, f = t.DOMParser, d = t.trustedTypes, p = l.prototype, g = ll(p, "cloneNode"), m = ll(p, "nextSibling"), y = ll(p, "childNodes"), b = ll(p, "parentNode");
  if (typeof s == "function") {
    var k = r.createElement("template");
    k.content && k.content.ownerDocument && (r = k.content.ownerDocument);
  }
  var v = JD(d, n), x = v ? v.createHTML("") : "", w = r, C = w.implementation, I = w.createNodeIterator, O = w.createDocumentFragment, D = w.getElementsByTagName, V = n.importNode, re = {};
  try {
    re = Or(r).documentMode ? r.documentMode : {};
  } catch {
  }
  var J = {};
  e.isSupported = typeof b == "function" && C && C.createHTMLDocument !== void 0 && re !== 9;
  var A = qD, U = HD, H = zD, ye = VD, le = UD, se = jD, ce = GD, xe = WD, oe = null, zt = Y({}, [].concat(jt(rm), jt(yh), jt(bh), jt(vh), jt(im))), fe = null, Kn = Y({}, [].concat(jt(sm), jt(wh), jt(om), jt(cl))), de = Object.seal(Object.create(null, {
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
  })), Tt = null, Vt = null, di = !0, Jn = !0, Ut = !1, Fp = !0, pi = !1, Tr = !1, Ka = !1, Ja = !1, gi = !1, Xo = !1, Qo = !1, $p = !0, qp = !1, V_ = "user-content-", Za = !0, Ts = !1, mi = {}, yi = null, Hp = Y({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), zp = null, Vp = Y({}, ["audio", "video", "img", "source", "image", "track"]), Xa = null, Up = Y({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), el = "http://www.w3.org/1998/Math/MathML", tl = "http://www.w3.org/2000/svg", Rn = "http://www.w3.org/1999/xhtml", bi = Rn, Qa = !1, eh = null, U_ = Y({}, [el, tl, Rn], gh), Mr, W_ = ["application/xhtml+xml", "text/html"], j_ = "text/html", $e, vi = null, G_ = r.createElement("form"), Wp = function(_) {
    return _ instanceof RegExp || _ instanceof Function;
  }, th = function(_) {
    vi && vi === _ || ((!_ || tr(_) !== "object") && (_ = {}), _ = Or(_), Mr = W_.indexOf(_.PARSER_MEDIA_TYPE) === -1 ? Mr = j_ : Mr = _.PARSER_MEDIA_TYPE, $e = Mr === "application/xhtml+xml" ? gh : Jl, oe = "ALLOWED_TAGS" in _ ? Y({}, _.ALLOWED_TAGS, $e) : zt, fe = "ALLOWED_ATTR" in _ ? Y({}, _.ALLOWED_ATTR, $e) : Kn, eh = "ALLOWED_NAMESPACES" in _ ? Y({}, _.ALLOWED_NAMESPACES, gh) : U_, Xa = "ADD_URI_SAFE_ATTR" in _ ? Y(
      Or(Up),
      _.ADD_URI_SAFE_ATTR,
      $e
    ) : Up, zp = "ADD_DATA_URI_TAGS" in _ ? Y(
      Or(Vp),
      _.ADD_DATA_URI_TAGS,
      $e
    ) : Vp, yi = "FORBID_CONTENTS" in _ ? Y({}, _.FORBID_CONTENTS, $e) : Hp, Tt = "FORBID_TAGS" in _ ? Y({}, _.FORBID_TAGS, $e) : {}, Vt = "FORBID_ATTR" in _ ? Y({}, _.FORBID_ATTR, $e) : {}, mi = "USE_PROFILES" in _ ? _.USE_PROFILES : !1, di = _.ALLOW_ARIA_ATTR !== !1, Jn = _.ALLOW_DATA_ATTR !== !1, Ut = _.ALLOW_UNKNOWN_PROTOCOLS || !1, Fp = _.ALLOW_SELF_CLOSE_IN_ATTR !== !1, pi = _.SAFE_FOR_TEMPLATES || !1, Tr = _.WHOLE_DOCUMENT || !1, gi = _.RETURN_DOM || !1, Xo = _.RETURN_DOM_FRAGMENT || !1, Qo = _.RETURN_TRUSTED_TYPE || !1, Ja = _.FORCE_BODY || !1, $p = _.SANITIZE_DOM !== !1, qp = _.SANITIZE_NAMED_PROPS || !1, Za = _.KEEP_CONTENT !== !1, Ts = _.IN_PLACE || !1, xe = _.ALLOWED_URI_REGEXP || xe, bi = _.NAMESPACE || Rn, de = _.CUSTOM_ELEMENT_HANDLING || {}, _.CUSTOM_ELEMENT_HANDLING && Wp(_.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (de.tagNameCheck = _.CUSTOM_ELEMENT_HANDLING.tagNameCheck), _.CUSTOM_ELEMENT_HANDLING && Wp(_.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (de.attributeNameCheck = _.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), _.CUSTOM_ELEMENT_HANDLING && typeof _.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (de.allowCustomizedBuiltInElements = _.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), pi && (Jn = !1), Xo && (gi = !0), mi && (oe = Y({}, jt(im)), fe = [], mi.html === !0 && (Y(oe, rm), Y(fe, sm)), mi.svg === !0 && (Y(oe, yh), Y(fe, wh), Y(fe, cl)), mi.svgFilters === !0 && (Y(oe, bh), Y(fe, wh), Y(fe, cl)), mi.mathMl === !0 && (Y(oe, vh), Y(fe, om), Y(fe, cl))), _.ADD_TAGS && (oe === zt && (oe = Or(oe)), Y(oe, _.ADD_TAGS, $e)), _.ADD_ATTR && (fe === Kn && (fe = Or(fe)), Y(fe, _.ADD_ATTR, $e)), _.ADD_URI_SAFE_ATTR && Y(Xa, _.ADD_URI_SAFE_ATTR, $e), _.FORBID_CONTENTS && (yi === Hp && (yi = Or(yi)), Y(yi, _.FORBID_CONTENTS, $e)), Za && (oe["#text"] = !0), Tr && Y(oe, ["html", "head", "body"]), oe.table && (Y(oe, ["tbody"]), delete Tt.tbody), dt && dt(_), vi = _);
  }, jp = Y({}, ["mi", "mo", "mn", "ms", "mtext"]), Gp = Y({}, ["foreignobject", "desc", "title", "annotation-xml"]), Y_ = Y({}, ["title", "style", "font", "a", "script"]), nl = Y({}, yh);
  Y(nl, bh), Y(nl, FD);
  var nh = Y({}, vh);
  Y(nh, $D);
  var K_ = function(_) {
    var E = b(_);
    (!E || !E.tagName) && (E = {
      namespaceURI: bi,
      tagName: "template"
    });
    var L = Jl(_.tagName), ee = Jl(E.tagName);
    return eh[_.namespaceURI] ? _.namespaceURI === tl ? E.namespaceURI === Rn ? L === "svg" : E.namespaceURI === el ? L === "svg" && (ee === "annotation-xml" || jp[ee]) : Boolean(nl[L]) : _.namespaceURI === el ? E.namespaceURI === Rn ? L === "math" : E.namespaceURI === tl ? L === "math" && Gp[ee] : Boolean(nh[L]) : _.namespaceURI === Rn ? E.namespaceURI === tl && !Gp[ee] || E.namespaceURI === el && !jp[ee] ? !1 : !nh[L] && (Y_[L] || !nl[L]) : !!(Mr === "application/xhtml+xml" && eh[_.namespaceURI]) : !1;
  }, In = function(_) {
    Os(e.removed, {
      element: _
    });
    try {
      _.parentNode.removeChild(_);
    } catch {
      try {
        _.outerHTML = x;
      } catch {
        _.remove();
      }
    }
  }, rh = function(_, E) {
    try {
      Os(e.removed, {
        attribute: E.getAttributeNode(_),
        from: E
      });
    } catch {
      Os(e.removed, {
        attribute: null,
        from: E
      });
    }
    if (E.removeAttribute(_), _ === "is" && !fe[_])
      if (gi || Xo)
        try {
          In(E);
        } catch {
        }
      else
        try {
          E.setAttribute(_, "");
        } catch {
        }
  }, Yp = function(_) {
    var E, L;
    if (Ja)
      _ = "<remove></remove>" + _;
    else {
      var ee = ID(_, /^[\r\n\t ]+/);
      L = ee && ee[0];
    }
    Mr === "application/xhtml+xml" && bi === Rn && (_ = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + _ + "</body></html>");
    var pt = v ? v.createHTML(_) : _;
    if (bi === Rn)
      try {
        E = new f().parseFromString(pt, Mr);
      } catch {
      }
    if (!E || !E.documentElement) {
      E = C.createDocument(bi, "template", null);
      try {
        E.documentElement.innerHTML = Qa ? x : pt;
      } catch {
      }
    }
    var Je = E.body || E.documentElement;
    return _ && L && Je.insertBefore(r.createTextNode(L), Je.childNodes[0] || null), bi === Rn ? D.call(E, Tr ? "html" : "body")[0] : Tr ? E.documentElement : Je;
  }, Kp = function(_) {
    return I.call(
      _.ownerDocument || _,
      _,
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT,
      null,
      !1
    );
  }, J_ = function(_) {
    return _ instanceof u && (typeof _.nodeName != "string" || typeof _.textContent != "string" || typeof _.removeChild != "function" || !(_.attributes instanceof h) || typeof _.removeAttribute != "function" || typeof _.setAttribute != "function" || typeof _.namespaceURI != "string" || typeof _.insertBefore != "function" || typeof _.hasChildNodes != "function");
  }, Ms = function(_) {
    return tr(o) === "object" ? _ instanceof o : _ && tr(_) === "object" && typeof _.nodeType == "number" && typeof _.nodeName == "string";
  }, Nn = function(_, E, L) {
    !J[_] || RD(J[_], function(ee) {
      ee.call(e, E, L, vi);
    });
  }, Jp = function(_) {
    var E;
    if (Nn("beforeSanitizeElements", _, null), J_(_) || ot(/[\u0080-\uFFFF]/, _.nodeName))
      return In(_), !0;
    var L = $e(_.nodeName);
    if (Nn("uponSanitizeElement", _, {
      tagName: L,
      allowedTags: oe
    }), _.hasChildNodes() && !Ms(_.firstElementChild) && (!Ms(_.content) || !Ms(_.content.firstElementChild)) && ot(/<[/\w]/g, _.innerHTML) && ot(/<[/\w]/g, _.textContent) || L === "select" && ot(/<template/i, _.innerHTML))
      return In(_), !0;
    if (!oe[L] || Tt[L]) {
      if (!Tt[L] && Xp(L) && (de.tagNameCheck instanceof RegExp && ot(de.tagNameCheck, L) || de.tagNameCheck instanceof Function && de.tagNameCheck(L)))
        return !1;
      if (Za && !yi[L]) {
        var ee = b(_) || _.parentNode, pt = y(_) || _.childNodes;
        if (pt && ee)
          for (var Je = pt.length, Ve = Je - 1; Ve >= 0; --Ve)
            ee.insertBefore(g(pt[Ve], !0), m(_));
      }
      return In(_), !0;
    }
    return _ instanceof l && !K_(_) || (L === "noscript" || L === "noembed" || L === "noframes") && ot(/<\/no(script|embed|frames)/i, _.innerHTML) ? (In(_), !0) : (pi && _.nodeType === 3 && (E = _.textContent, E = Wt(E, A, " "), E = Wt(E, U, " "), E = Wt(E, H, " "), _.textContent !== E && (Os(e.removed, {
      element: _.cloneNode()
    }), _.textContent = E)), Nn("afterSanitizeElements", _, null), !1);
  }, Zp = function(_, E, L) {
    if ($p && (E === "id" || E === "name") && (L in r || L in G_))
      return !1;
    if (!(Jn && !Vt[E] && ot(ye, E))) {
      if (!(di && ot(le, E))) {
        if (!fe[E] || Vt[E]) {
          if (!(Xp(_) && (de.tagNameCheck instanceof RegExp && ot(de.tagNameCheck, _) || de.tagNameCheck instanceof Function && de.tagNameCheck(_)) && (de.attributeNameCheck instanceof RegExp && ot(de.attributeNameCheck, E) || de.attributeNameCheck instanceof Function && de.attributeNameCheck(E)) || E === "is" && de.allowCustomizedBuiltInElements && (de.tagNameCheck instanceof RegExp && ot(de.tagNameCheck, L) || de.tagNameCheck instanceof Function && de.tagNameCheck(L))))
            return !1;
        } else if (!Xa[E]) {
          if (!ot(xe, Wt(L, ce, ""))) {
            if (!((E === "src" || E === "xlink:href" || E === "href") && _ !== "script" && ND(L, "data:") === 0 && zp[_])) {
              if (!(Ut && !ot(se, Wt(L, ce, "")))) {
                if (L)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, Xp = function(_) {
    return _.indexOf("-") > 0;
  }, Qp = function(_) {
    var E, L, ee, pt;
    Nn("beforeSanitizeAttributes", _, null);
    var Je = _.attributes;
    if (!!Je) {
      var Ve = {
        attrName: "",
        attrValue: "",
        keepAttr: !0,
        allowedAttributes: fe
      };
      for (pt = Je.length; pt--; ) {
        E = Je[pt];
        var rl = E, qe = rl.name, ih = rl.namespaceURI;
        if (L = qe === "value" ? E.value : BD(E.value), ee = $e(qe), Ve.attrName = ee, Ve.attrValue = L, Ve.keepAttr = !0, Ve.forceKeepAttr = void 0, Nn("uponSanitizeAttribute", _, Ve), L = Ve.attrValue, !Ve.forceKeepAttr && (rh(qe, _), !!Ve.keepAttr)) {
          if (!Fp && ot(/\/>/i, L)) {
            rh(qe, _);
            continue;
          }
          pi && (L = Wt(L, A, " "), L = Wt(L, U, " "), L = Wt(L, H, " "));
          var eg = $e(_.nodeName);
          if (!!Zp(eg, ee, L)) {
            if (qp && (ee === "id" || ee === "name") && (rh(qe, _), L = V_ + L), v && tr(d) === "object" && typeof d.getAttributeType == "function" && !ih)
              switch (d.getAttributeType(eg, ee)) {
                case "TrustedHTML": {
                  L = v.createHTML(L);
                  break;
                }
                case "TrustedScriptURL": {
                  L = v.createScriptURL(L);
                  break;
                }
              }
            try {
              ih ? _.setAttributeNS(ih, qe, L) : _.setAttribute(qe, L), nm(e.removed);
            } catch {
            }
          }
        }
      }
      Nn("afterSanitizeAttributes", _, null);
    }
  }, Z_ = function $(_) {
    var E, L = Kp(_);
    for (Nn("beforeSanitizeShadowDOM", _, null); E = L.nextNode(); )
      Nn("uponSanitizeShadowNode", E, null), !Jp(E) && (E.content instanceof i && $(E.content), Qp(E));
    Nn("afterSanitizeShadowDOM", _, null);
  };
  return e.sanitize = function($) {
    var _ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, E, L, ee, pt, Je;
    if (Qa = !$, Qa && ($ = "<!-->"), typeof $ != "string" && !Ms($))
      if (typeof $.toString == "function") {
        if ($ = $.toString(), typeof $ != "string")
          throw mh("dirty is not a string, aborting");
      } else
        throw mh("toString is not a function");
    if (!e.isSupported) {
      if (tr(t.toStaticHTML) === "object" || typeof t.toStaticHTML == "function") {
        if (typeof $ == "string")
          return t.toStaticHTML($);
        if (Ms($))
          return t.toStaticHTML($.outerHTML);
      }
      return $;
    }
    if (Ka || th(_), e.removed = [], typeof $ == "string" && (Ts = !1), Ts) {
      if ($.nodeName) {
        var Ve = $e($.nodeName);
        if (!oe[Ve] || Tt[Ve])
          throw mh("root node is forbidden and cannot be sanitized in-place");
      }
    } else if ($ instanceof o)
      E = Yp("<!---->"), L = E.ownerDocument.importNode($, !0), L.nodeType === 1 && L.nodeName === "BODY" || L.nodeName === "HTML" ? E = L : E.appendChild(L);
    else {
      if (!gi && !pi && !Tr && $.indexOf("<") === -1)
        return v && Qo ? v.createHTML($) : $;
      if (E = Yp($), !E)
        return gi ? null : Qo ? x : "";
    }
    E && Ja && In(E.firstChild);
    for (var rl = Kp(Ts ? $ : E); ee = rl.nextNode(); )
      ee.nodeType === 3 && ee === pt || Jp(ee) || (ee.content instanceof i && Z_(ee.content), Qp(ee), pt = ee);
    if (pt = null, Ts)
      return $;
    if (gi) {
      if (Xo)
        for (Je = O.call(E.ownerDocument); E.firstChild; )
          Je.appendChild(E.firstChild);
      else
        Je = E;
      return (fe.shadowroot || fe.shadowrootmod) && (Je = V.call(n, Je, !0)), Je;
    }
    var qe = Tr ? E.outerHTML : E.innerHTML;
    return Tr && oe["!doctype"] && E.ownerDocument && E.ownerDocument.doctype && E.ownerDocument.doctype.name && ot(YD, E.ownerDocument.doctype.name) && (qe = "<!DOCTYPE " + E.ownerDocument.doctype.name + `>
` + qe), pi && (qe = Wt(qe, A, " "), qe = Wt(qe, U, " "), qe = Wt(qe, H, " ")), v && Qo ? v.createHTML(qe) : qe;
  }, e.setConfig = function($) {
    th($), Ka = !0;
  }, e.clearConfig = function() {
    vi = null, Ka = !1;
  }, e.isValidAttribute = function($, _, E) {
    vi || th({});
    var L = $e($), ee = $e(_);
    return Zp(L, ee, E);
  }, e.addHook = function($, _) {
    typeof _ == "function" && (J[$] = J[$] || [], Os(J[$], _));
  }, e.removeHook = function($) {
    if (J[$])
      return nm(J[$]);
  }, e.removeHooks = function($) {
    J[$] && (J[$] = []);
  }, e.removeAllHooks = function() {
    J = {};
  }, e;
}
var ZD = ov(), lv = { exports: {} }, ne = {}, Sd = { exports: {} };
const XD = "\xC1", QD = "\xE1", eT = "\u0102", tT = "\u0103", nT = "\u223E", rT = "\u223F", iT = "\u223E\u0333", sT = "\xC2", oT = "\xE2", lT = "\xB4", cT = "\u0410", aT = "\u0430", hT = "\xC6", uT = "\xE6", fT = "\u2061", dT = "\u{1D504}", pT = "\u{1D51E}", gT = "\xC0", mT = "\xE0", yT = "\u2135", bT = "\u2135", vT = "\u0391", wT = "\u03B1", xT = "\u0100", kT = "\u0101", _T = "\u2A3F", CT = "&", ST = "&", AT = "\u2A55", ET = "\u2A53", DT = "\u2227", TT = "\u2A5C", MT = "\u2A58", OT = "\u2A5A", LT = "\u2220", RT = "\u29A4", IT = "\u2220", NT = "\u29A8", BT = "\u29A9", PT = "\u29AA", FT = "\u29AB", $T = "\u29AC", qT = "\u29AD", HT = "\u29AE", zT = "\u29AF", VT = "\u2221", UT = "\u221F", WT = "\u22BE", jT = "\u299D", GT = "\u2222", YT = "\xC5", KT = "\u237C", JT = "\u0104", ZT = "\u0105", XT = "\u{1D538}", QT = "\u{1D552}", eM = "\u2A6F", tM = "\u2248", nM = "\u2A70", rM = "\u224A", iM = "\u224B", sM = "'", oM = "\u2061", lM = "\u2248", cM = "\u224A", aM = "\xC5", hM = "\xE5", uM = "\u{1D49C}", fM = "\u{1D4B6}", dM = "\u2254", pM = "*", gM = "\u2248", mM = "\u224D", yM = "\xC3", bM = "\xE3", vM = "\xC4", wM = "\xE4", xM = "\u2233", kM = "\u2A11", _M = "\u224C", CM = "\u03F6", SM = "\u2035", AM = "\u223D", EM = "\u22CD", DM = "\u2216", TM = "\u2AE7", MM = "\u22BD", OM = "\u2305", LM = "\u2306", RM = "\u2305", IM = "\u23B5", NM = "\u23B6", BM = "\u224C", PM = "\u0411", FM = "\u0431", $M = "\u201E", qM = "\u2235", HM = "\u2235", zM = "\u2235", VM = "\u29B0", UM = "\u03F6", WM = "\u212C", jM = "\u212C", GM = "\u0392", YM = "\u03B2", KM = "\u2136", JM = "\u226C", ZM = "\u{1D505}", XM = "\u{1D51F}", QM = "\u22C2", eO = "\u25EF", tO = "\u22C3", nO = "\u2A00", rO = "\u2A01", iO = "\u2A02", sO = "\u2A06", oO = "\u2605", lO = "\u25BD", cO = "\u25B3", aO = "\u2A04", hO = "\u22C1", uO = "\u22C0", fO = "\u290D", dO = "\u29EB", pO = "\u25AA", gO = "\u25B4", mO = "\u25BE", yO = "\u25C2", bO = "\u25B8", vO = "\u2423", wO = "\u2592", xO = "\u2591", kO = "\u2593", _O = "\u2588", CO = "=\u20E5", SO = "\u2261\u20E5", AO = "\u2AED", EO = "\u2310", DO = "\u{1D539}", TO = "\u{1D553}", MO = "\u22A5", OO = "\u22A5", LO = "\u22C8", RO = "\u29C9", IO = "\u2510", NO = "\u2555", BO = "\u2556", PO = "\u2557", FO = "\u250C", $O = "\u2552", qO = "\u2553", HO = "\u2554", zO = "\u2500", VO = "\u2550", UO = "\u252C", WO = "\u2564", jO = "\u2565", GO = "\u2566", YO = "\u2534", KO = "\u2567", JO = "\u2568", ZO = "\u2569", XO = "\u229F", QO = "\u229E", eL = "\u22A0", tL = "\u2518", nL = "\u255B", rL = "\u255C", iL = "\u255D", sL = "\u2514", oL = "\u2558", lL = "\u2559", cL = "\u255A", aL = "\u2502", hL = "\u2551", uL = "\u253C", fL = "\u256A", dL = "\u256B", pL = "\u256C", gL = "\u2524", mL = "\u2561", yL = "\u2562", bL = "\u2563", vL = "\u251C", wL = "\u255E", xL = "\u255F", kL = "\u2560", _L = "\u2035", CL = "\u02D8", SL = "\u02D8", AL = "\xA6", EL = "\u{1D4B7}", DL = "\u212C", TL = "\u204F", ML = "\u223D", OL = "\u22CD", LL = "\u29C5", RL = "\\", IL = "\u27C8", NL = "\u2022", BL = "\u2022", PL = "\u224E", FL = "\u2AAE", $L = "\u224F", qL = "\u224E", HL = "\u224F", zL = "\u0106", VL = "\u0107", UL = "\u2A44", WL = "\u2A49", jL = "\u2A4B", GL = "\u2229", YL = "\u22D2", KL = "\u2A47", JL = "\u2A40", ZL = "\u2145", XL = "\u2229\uFE00", QL = "\u2041", eR = "\u02C7", tR = "\u212D", nR = "\u2A4D", rR = "\u010C", iR = "\u010D", sR = "\xC7", oR = "\xE7", lR = "\u0108", cR = "\u0109", aR = "\u2230", hR = "\u2A4C", uR = "\u2A50", fR = "\u010A", dR = "\u010B", pR = "\xB8", gR = "\xB8", mR = "\u29B2", yR = "\xA2", bR = "\xB7", vR = "\xB7", wR = "\u{1D520}", xR = "\u212D", kR = "\u0427", _R = "\u0447", CR = "\u2713", SR = "\u2713", AR = "\u03A7", ER = "\u03C7", DR = "\u02C6", TR = "\u2257", MR = "\u21BA", OR = "\u21BB", LR = "\u229B", RR = "\u229A", IR = "\u229D", NR = "\u2299", BR = "\xAE", PR = "\u24C8", FR = "\u2296", $R = "\u2295", qR = "\u2297", HR = "\u25CB", zR = "\u29C3", VR = "\u2257", UR = "\u2A10", WR = "\u2AEF", jR = "\u29C2", GR = "\u2232", YR = "\u201D", KR = "\u2019", JR = "\u2663", ZR = "\u2663", XR = ":", QR = "\u2237", e3 = "\u2A74", t3 = "\u2254", n3 = "\u2254", r3 = ",", i3 = "@", s3 = "\u2201", o3 = "\u2218", l3 = "\u2201", c3 = "\u2102", a3 = "\u2245", h3 = "\u2A6D", u3 = "\u2261", f3 = "\u222E", d3 = "\u222F", p3 = "\u222E", g3 = "\u{1D554}", m3 = "\u2102", y3 = "\u2210", b3 = "\u2210", v3 = "\xA9", w3 = "\xA9", x3 = "\u2117", k3 = "\u2233", _3 = "\u21B5", C3 = "\u2717", S3 = "\u2A2F", A3 = "\u{1D49E}", E3 = "\u{1D4B8}", D3 = "\u2ACF", T3 = "\u2AD1", M3 = "\u2AD0", O3 = "\u2AD2", L3 = "\u22EF", R3 = "\u2938", I3 = "\u2935", N3 = "\u22DE", B3 = "\u22DF", P3 = "\u21B6", F3 = "\u293D", $3 = "\u2A48", q3 = "\u2A46", H3 = "\u224D", z3 = "\u222A", V3 = "\u22D3", U3 = "\u2A4A", W3 = "\u228D", j3 = "\u2A45", G3 = "\u222A\uFE00", Y3 = "\u21B7", K3 = "\u293C", J3 = "\u22DE", Z3 = "\u22DF", X3 = "\u22CE", Q3 = "\u22CF", eI = "\xA4", tI = "\u21B6", nI = "\u21B7", rI = "\u22CE", iI = "\u22CF", sI = "\u2232", oI = "\u2231", lI = "\u232D", cI = "\u2020", aI = "\u2021", hI = "\u2138", uI = "\u2193", fI = "\u21A1", dI = "\u21D3", pI = "\u2010", gI = "\u2AE4", mI = "\u22A3", yI = "\u290F", bI = "\u02DD", vI = "\u010E", wI = "\u010F", xI = "\u0414", kI = "\u0434", _I = "\u2021", CI = "\u21CA", SI = "\u2145", AI = "\u2146", EI = "\u2911", DI = "\u2A77", TI = "\xB0", MI = "\u2207", OI = "\u0394", LI = "\u03B4", RI = "\u29B1", II = "\u297F", NI = "\u{1D507}", BI = "\u{1D521}", PI = "\u2965", FI = "\u21C3", $I = "\u21C2", qI = "\xB4", HI = "\u02D9", zI = "\u02DD", VI = "`", UI = "\u02DC", WI = "\u22C4", jI = "\u22C4", GI = "\u22C4", YI = "\u2666", KI = "\u2666", JI = "\xA8", ZI = "\u2146", XI = "\u03DD", QI = "\u22F2", eN = "\xF7", tN = "\xF7", nN = "\u22C7", rN = "\u22C7", iN = "\u0402", sN = "\u0452", oN = "\u231E", lN = "\u230D", cN = "$", aN = "\u{1D53B}", hN = "\u{1D555}", uN = "\xA8", fN = "\u02D9", dN = "\u20DC", pN = "\u2250", gN = "\u2251", mN = "\u2250", yN = "\u2238", bN = "\u2214", vN = "\u22A1", wN = "\u2306", xN = "\u222F", kN = "\xA8", _N = "\u21D3", CN = "\u21D0", SN = "\u21D4", AN = "\u2AE4", EN = "\u27F8", DN = "\u27FA", TN = "\u27F9", MN = "\u21D2", ON = "\u22A8", LN = "\u21D1", RN = "\u21D5", IN = "\u2225", NN = "\u2913", BN = "\u2193", PN = "\u2193", FN = "\u21D3", $N = "\u21F5", qN = "\u0311", HN = "\u21CA", zN = "\u21C3", VN = "\u21C2", UN = "\u2950", WN = "\u295E", jN = "\u2956", GN = "\u21BD", YN = "\u295F", KN = "\u2957", JN = "\u21C1", ZN = "\u21A7", XN = "\u22A4", QN = "\u2910", eB = "\u231F", tB = "\u230C", nB = "\u{1D49F}", rB = "\u{1D4B9}", iB = "\u0405", sB = "\u0455", oB = "\u29F6", lB = "\u0110", cB = "\u0111", aB = "\u22F1", hB = "\u25BF", uB = "\u25BE", fB = "\u21F5", dB = "\u296F", pB = "\u29A6", gB = "\u040F", mB = "\u045F", yB = "\u27FF", bB = "\xC9", vB = "\xE9", wB = "\u2A6E", xB = "\u011A", kB = "\u011B", _B = "\xCA", CB = "\xEA", SB = "\u2256", AB = "\u2255", EB = "\u042D", DB = "\u044D", TB = "\u2A77", MB = "\u0116", OB = "\u0117", LB = "\u2251", RB = "\u2147", IB = "\u2252", NB = "\u{1D508}", BB = "\u{1D522}", PB = "\u2A9A", FB = "\xC8", $B = "\xE8", qB = "\u2A96", HB = "\u2A98", zB = "\u2A99", VB = "\u2208", UB = "\u23E7", WB = "\u2113", jB = "\u2A95", GB = "\u2A97", YB = "\u0112", KB = "\u0113", JB = "\u2205", ZB = "\u2205", XB = "\u25FB", QB = "\u2205", eP = "\u25AB", tP = "\u2004", nP = "\u2005", rP = "\u2003", iP = "\u014A", sP = "\u014B", oP = "\u2002", lP = "\u0118", cP = "\u0119", aP = "\u{1D53C}", hP = "\u{1D556}", uP = "\u22D5", fP = "\u29E3", dP = "\u2A71", pP = "\u03B5", gP = "\u0395", mP = "\u03B5", yP = "\u03F5", bP = "\u2256", vP = "\u2255", wP = "\u2242", xP = "\u2A96", kP = "\u2A95", _P = "\u2A75", CP = "=", SP = "\u2242", AP = "\u225F", EP = "\u21CC", DP = "\u2261", TP = "\u2A78", MP = "\u29E5", OP = "\u2971", LP = "\u2253", RP = "\u212F", IP = "\u2130", NP = "\u2250", BP = "\u2A73", PP = "\u2242", FP = "\u0397", $P = "\u03B7", qP = "\xD0", HP = "\xF0", zP = "\xCB", VP = "\xEB", UP = "\u20AC", WP = "!", jP = "\u2203", GP = "\u2203", YP = "\u2130", KP = "\u2147", JP = "\u2147", ZP = "\u2252", XP = "\u0424", QP = "\u0444", eF = "\u2640", tF = "\uFB03", nF = "\uFB00", rF = "\uFB04", iF = "\u{1D509}", sF = "\u{1D523}", oF = "\uFB01", lF = "\u25FC", cF = "\u25AA", aF = "fj", hF = "\u266D", uF = "\uFB02", fF = "\u25B1", dF = "\u0192", pF = "\u{1D53D}", gF = "\u{1D557}", mF = "\u2200", yF = "\u2200", bF = "\u22D4", vF = "\u2AD9", wF = "\u2131", xF = "\u2A0D", kF = "\xBD", _F = "\u2153", CF = "\xBC", SF = "\u2155", AF = "\u2159", EF = "\u215B", DF = "\u2154", TF = "\u2156", MF = "\xBE", OF = "\u2157", LF = "\u215C", RF = "\u2158", IF = "\u215A", NF = "\u215D", BF = "\u215E", PF = "\u2044", FF = "\u2322", $F = "\u{1D4BB}", qF = "\u2131", HF = "\u01F5", zF = "\u0393", VF = "\u03B3", UF = "\u03DC", WF = "\u03DD", jF = "\u2A86", GF = "\u011E", YF = "\u011F", KF = "\u0122", JF = "\u011C", ZF = "\u011D", XF = "\u0413", QF = "\u0433", e4 = "\u0120", t4 = "\u0121", n4 = "\u2265", r4 = "\u2267", i4 = "\u2A8C", s4 = "\u22DB", o4 = "\u2265", l4 = "\u2267", c4 = "\u2A7E", a4 = "\u2AA9", h4 = "\u2A7E", u4 = "\u2A80", f4 = "\u2A82", d4 = "\u2A84", p4 = "\u22DB\uFE00", g4 = "\u2A94", m4 = "\u{1D50A}", y4 = "\u{1D524}", b4 = "\u226B", v4 = "\u22D9", w4 = "\u22D9", x4 = "\u2137", k4 = "\u0403", _4 = "\u0453", C4 = "\u2AA5", S4 = "\u2277", A4 = "\u2A92", E4 = "\u2AA4", D4 = "\u2A8A", T4 = "\u2A8A", M4 = "\u2A88", O4 = "\u2269", L4 = "\u2A88", R4 = "\u2269", I4 = "\u22E7", N4 = "\u{1D53E}", B4 = "\u{1D558}", P4 = "`", F4 = "\u2265", $4 = "\u22DB", q4 = "\u2267", H4 = "\u2AA2", z4 = "\u2277", V4 = "\u2A7E", U4 = "\u2273", W4 = "\u{1D4A2}", j4 = "\u210A", G4 = "\u2273", Y4 = "\u2A8E", K4 = "\u2A90", J4 = "\u2AA7", Z4 = "\u2A7A", X4 = ">", Q4 = ">", e5 = "\u226B", t5 = "\u22D7", n5 = "\u2995", r5 = "\u2A7C", i5 = "\u2A86", s5 = "\u2978", o5 = "\u22D7", l5 = "\u22DB", c5 = "\u2A8C", a5 = "\u2277", h5 = "\u2273", u5 = "\u2269\uFE00", f5 = "\u2269\uFE00", d5 = "\u02C7", p5 = "\u200A", g5 = "\xBD", m5 = "\u210B", y5 = "\u042A", b5 = "\u044A", v5 = "\u2948", w5 = "\u2194", x5 = "\u21D4", k5 = "\u21AD", _5 = "^", C5 = "\u210F", S5 = "\u0124", A5 = "\u0125", E5 = "\u2665", D5 = "\u2665", T5 = "\u2026", M5 = "\u22B9", O5 = "\u{1D525}", L5 = "\u210C", R5 = "\u210B", I5 = "\u2925", N5 = "\u2926", B5 = "\u21FF", P5 = "\u223B", F5 = "\u21A9", $5 = "\u21AA", q5 = "\u{1D559}", H5 = "\u210D", z5 = "\u2015", V5 = "\u2500", U5 = "\u{1D4BD}", W5 = "\u210B", j5 = "\u210F", G5 = "\u0126", Y5 = "\u0127", K5 = "\u224E", J5 = "\u224F", Z5 = "\u2043", X5 = "\u2010", Q5 = "\xCD", e6 = "\xED", t6 = "\u2063", n6 = "\xCE", r6 = "\xEE", i6 = "\u0418", s6 = "\u0438", o6 = "\u0130", l6 = "\u0415", c6 = "\u0435", a6 = "\xA1", h6 = "\u21D4", u6 = "\u{1D526}", f6 = "\u2111", d6 = "\xCC", p6 = "\xEC", g6 = "\u2148", m6 = "\u2A0C", y6 = "\u222D", b6 = "\u29DC", v6 = "\u2129", w6 = "\u0132", x6 = "\u0133", k6 = "\u012A", _6 = "\u012B", C6 = "\u2111", S6 = "\u2148", A6 = "\u2110", E6 = "\u2111", D6 = "\u0131", T6 = "\u2111", M6 = "\u22B7", O6 = "\u01B5", L6 = "\u21D2", R6 = "\u2105", I6 = "\u221E", N6 = "\u29DD", B6 = "\u0131", P6 = "\u22BA", F6 = "\u222B", $6 = "\u222C", q6 = "\u2124", H6 = "\u222B", z6 = "\u22BA", V6 = "\u22C2", U6 = "\u2A17", W6 = "\u2A3C", j6 = "\u2063", G6 = "\u2062", Y6 = "\u0401", K6 = "\u0451", J6 = "\u012E", Z6 = "\u012F", X6 = "\u{1D540}", Q6 = "\u{1D55A}", e8 = "\u0399", t8 = "\u03B9", n8 = "\u2A3C", r8 = "\xBF", i8 = "\u{1D4BE}", s8 = "\u2110", o8 = "\u2208", l8 = "\u22F5", c8 = "\u22F9", a8 = "\u22F4", h8 = "\u22F3", u8 = "\u2208", f8 = "\u2062", d8 = "\u0128", p8 = "\u0129", g8 = "\u0406", m8 = "\u0456", y8 = "\xCF", b8 = "\xEF", v8 = "\u0134", w8 = "\u0135", x8 = "\u0419", k8 = "\u0439", _8 = "\u{1D50D}", C8 = "\u{1D527}", S8 = "\u0237", A8 = "\u{1D541}", E8 = "\u{1D55B}", D8 = "\u{1D4A5}", T8 = "\u{1D4BF}", M8 = "\u0408", O8 = "\u0458", L8 = "\u0404", R8 = "\u0454", I8 = "\u039A", N8 = "\u03BA", B8 = "\u03F0", P8 = "\u0136", F8 = "\u0137", $8 = "\u041A", q8 = "\u043A", H8 = "\u{1D50E}", z8 = "\u{1D528}", V8 = "\u0138", U8 = "\u0425", W8 = "\u0445", j8 = "\u040C", G8 = "\u045C", Y8 = "\u{1D542}", K8 = "\u{1D55C}", J8 = "\u{1D4A6}", Z8 = "\u{1D4C0}", X8 = "\u21DA", Q8 = "\u0139", e$ = "\u013A", t$ = "\u29B4", n$ = "\u2112", r$ = "\u039B", i$ = "\u03BB", s$ = "\u27E8", o$ = "\u27EA", l$ = "\u2991", c$ = "\u27E8", a$ = "\u2A85", h$ = "\u2112", u$ = "\xAB", f$ = "\u21E4", d$ = "\u291F", p$ = "\u2190", g$ = "\u219E", m$ = "\u21D0", y$ = "\u291D", b$ = "\u21A9", v$ = "\u21AB", w$ = "\u2939", x$ = "\u2973", k$ = "\u21A2", _$ = "\u2919", C$ = "\u291B", S$ = "\u2AAB", A$ = "\u2AAD", E$ = "\u2AAD\uFE00", D$ = "\u290C", T$ = "\u290E", M$ = "\u2772", O$ = "{", L$ = "[", R$ = "\u298B", I$ = "\u298F", N$ = "\u298D", B$ = "\u013D", P$ = "\u013E", F$ = "\u013B", $$ = "\u013C", q$ = "\u2308", H$ = "{", z$ = "\u041B", V$ = "\u043B", U$ = "\u2936", W$ = "\u201C", j$ = "\u201E", G$ = "\u2967", Y$ = "\u294B", K$ = "\u21B2", J$ = "\u2264", Z$ = "\u2266", X$ = "\u27E8", Q$ = "\u21E4", eq = "\u2190", tq = "\u2190", nq = "\u21D0", rq = "\u21C6", iq = "\u21A2", sq = "\u2308", oq = "\u27E6", lq = "\u2961", cq = "\u2959", aq = "\u21C3", hq = "\u230A", uq = "\u21BD", fq = "\u21BC", dq = "\u21C7", pq = "\u2194", gq = "\u2194", mq = "\u21D4", yq = "\u21C6", bq = "\u21CB", vq = "\u21AD", wq = "\u294E", xq = "\u21A4", kq = "\u22A3", _q = "\u295A", Cq = "\u22CB", Sq = "\u29CF", Aq = "\u22B2", Eq = "\u22B4", Dq = "\u2951", Tq = "\u2960", Mq = "\u2958", Oq = "\u21BF", Lq = "\u2952", Rq = "\u21BC", Iq = "\u2A8B", Nq = "\u22DA", Bq = "\u2264", Pq = "\u2266", Fq = "\u2A7D", $q = "\u2AA8", qq = "\u2A7D", Hq = "\u2A7F", zq = "\u2A81", Vq = "\u2A83", Uq = "\u22DA\uFE00", Wq = "\u2A93", jq = "\u2A85", Gq = "\u22D6", Yq = "\u22DA", Kq = "\u2A8B", Jq = "\u22DA", Zq = "\u2266", Xq = "\u2276", Qq = "\u2276", e9 = "\u2AA1", t9 = "\u2272", n9 = "\u2A7D", r9 = "\u2272", i9 = "\u297C", s9 = "\u230A", o9 = "\u{1D50F}", l9 = "\u{1D529}", c9 = "\u2276", a9 = "\u2A91", h9 = "\u2962", u9 = "\u21BD", f9 = "\u21BC", d9 = "\u296A", p9 = "\u2584", g9 = "\u0409", m9 = "\u0459", y9 = "\u21C7", b9 = "\u226A", v9 = "\u22D8", w9 = "\u231E", x9 = "\u21DA", k9 = "\u296B", _9 = "\u25FA", C9 = "\u013F", S9 = "\u0140", A9 = "\u23B0", E9 = "\u23B0", D9 = "\u2A89", T9 = "\u2A89", M9 = "\u2A87", O9 = "\u2268", L9 = "\u2A87", R9 = "\u2268", I9 = "\u22E6", N9 = "\u27EC", B9 = "\u21FD", P9 = "\u27E6", F9 = "\u27F5", $9 = "\u27F5", q9 = "\u27F8", H9 = "\u27F7", z9 = "\u27F7", V9 = "\u27FA", U9 = "\u27FC", W9 = "\u27F6", j9 = "\u27F6", G9 = "\u27F9", Y9 = "\u21AB", K9 = "\u21AC", J9 = "\u2985", Z9 = "\u{1D543}", X9 = "\u{1D55D}", Q9 = "\u2A2D", eH = "\u2A34", tH = "\u2217", nH = "_", rH = "\u2199", iH = "\u2198", sH = "\u25CA", oH = "\u25CA", lH = "\u29EB", cH = "(", aH = "\u2993", hH = "\u21C6", uH = "\u231F", fH = "\u21CB", dH = "\u296D", pH = "\u200E", gH = "\u22BF", mH = "\u2039", yH = "\u{1D4C1}", bH = "\u2112", vH = "\u21B0", wH = "\u21B0", xH = "\u2272", kH = "\u2A8D", _H = "\u2A8F", CH = "[", SH = "\u2018", AH = "\u201A", EH = "\u0141", DH = "\u0142", TH = "\u2AA6", MH = "\u2A79", OH = "<", LH = "<", RH = "\u226A", IH = "\u22D6", NH = "\u22CB", BH = "\u22C9", PH = "\u2976", FH = "\u2A7B", $H = "\u25C3", qH = "\u22B4", HH = "\u25C2", zH = "\u2996", VH = "\u294A", UH = "\u2966", WH = "\u2268\uFE00", jH = "\u2268\uFE00", GH = "\xAF", YH = "\u2642", KH = "\u2720", JH = "\u2720", ZH = "\u21A6", XH = "\u21A6", QH = "\u21A7", e7 = "\u21A4", t7 = "\u21A5", n7 = "\u25AE", r7 = "\u2A29", i7 = "\u041C", s7 = "\u043C", o7 = "\u2014", l7 = "\u223A", c7 = "\u2221", a7 = "\u205F", h7 = "\u2133", u7 = "\u{1D510}", f7 = "\u{1D52A}", d7 = "\u2127", p7 = "\xB5", g7 = "*", m7 = "\u2AF0", y7 = "\u2223", b7 = "\xB7", v7 = "\u229F", w7 = "\u2212", x7 = "\u2238", k7 = "\u2A2A", _7 = "\u2213", C7 = "\u2ADB", S7 = "\u2026", A7 = "\u2213", E7 = "\u22A7", D7 = "\u{1D544}", T7 = "\u{1D55E}", M7 = "\u2213", O7 = "\u{1D4C2}", L7 = "\u2133", R7 = "\u223E", I7 = "\u039C", N7 = "\u03BC", B7 = "\u22B8", P7 = "\u22B8", F7 = "\u2207", $7 = "\u0143", q7 = "\u0144", H7 = "\u2220\u20D2", z7 = "\u2249", V7 = "\u2A70\u0338", U7 = "\u224B\u0338", W7 = "\u0149", j7 = "\u2249", G7 = "\u266E", Y7 = "\u2115", K7 = "\u266E", J7 = "\xA0", Z7 = "\u224E\u0338", X7 = "\u224F\u0338", Q7 = "\u2A43", ez = "\u0147", tz = "\u0148", nz = "\u0145", rz = "\u0146", iz = "\u2247", sz = "\u2A6D\u0338", oz = "\u2A42", lz = "\u041D", cz = "\u043D", az = "\u2013", hz = "\u2924", uz = "\u2197", fz = "\u21D7", dz = "\u2197", pz = "\u2260", gz = "\u2250\u0338", mz = "\u200B", yz = "\u200B", bz = "\u200B", vz = "\u200B", wz = "\u2262", xz = "\u2928", kz = "\u2242\u0338", _z = "\u226B", Cz = "\u226A", Sz = `
`, Az = "\u2204", Ez = "\u2204", Dz = "\u{1D511}", Tz = "\u{1D52B}", Mz = "\u2267\u0338", Oz = "\u2271", Lz = "\u2271", Rz = "\u2267\u0338", Iz = "\u2A7E\u0338", Nz = "\u2A7E\u0338", Bz = "\u22D9\u0338", Pz = "\u2275", Fz = "\u226B\u20D2", $z = "\u226F", qz = "\u226F", Hz = "\u226B\u0338", zz = "\u21AE", Vz = "\u21CE", Uz = "\u2AF2", Wz = "\u220B", jz = "\u22FC", Gz = "\u22FA", Yz = "\u220B", Kz = "\u040A", Jz = "\u045A", Zz = "\u219A", Xz = "\u21CD", Qz = "\u2025", eV = "\u2266\u0338", tV = "\u2270", nV = "\u219A", rV = "\u21CD", iV = "\u21AE", sV = "\u21CE", oV = "\u2270", lV = "\u2266\u0338", cV = "\u2A7D\u0338", aV = "\u2A7D\u0338", hV = "\u226E", uV = "\u22D8\u0338", fV = "\u2274", dV = "\u226A\u20D2", pV = "\u226E", gV = "\u22EA", mV = "\u22EC", yV = "\u226A\u0338", bV = "\u2224", vV = "\u2060", wV = "\xA0", xV = "\u{1D55F}", kV = "\u2115", _V = "\u2AEC", CV = "\xAC", SV = "\u2262", AV = "\u226D", EV = "\u2226", DV = "\u2209", TV = "\u2260", MV = "\u2242\u0338", OV = "\u2204", LV = "\u226F", RV = "\u2271", IV = "\u2267\u0338", NV = "\u226B\u0338", BV = "\u2279", PV = "\u2A7E\u0338", FV = "\u2275", $V = "\u224E\u0338", qV = "\u224F\u0338", HV = "\u2209", zV = "\u22F5\u0338", VV = "\u22F9\u0338", UV = "\u2209", WV = "\u22F7", jV = "\u22F6", GV = "\u29CF\u0338", YV = "\u22EA", KV = "\u22EC", JV = "\u226E", ZV = "\u2270", XV = "\u2278", QV = "\u226A\u0338", eU = "\u2A7D\u0338", tU = "\u2274", nU = "\u2AA2\u0338", rU = "\u2AA1\u0338", iU = "\u220C", sU = "\u220C", oU = "\u22FE", lU = "\u22FD", cU = "\u2280", aU = "\u2AAF\u0338", hU = "\u22E0", uU = "\u220C", fU = "\u29D0\u0338", dU = "\u22EB", pU = "\u22ED", gU = "\u228F\u0338", mU = "\u22E2", yU = "\u2290\u0338", bU = "\u22E3", vU = "\u2282\u20D2", wU = "\u2288", xU = "\u2281", kU = "\u2AB0\u0338", _U = "\u22E1", CU = "\u227F\u0338", SU = "\u2283\u20D2", AU = "\u2289", EU = "\u2241", DU = "\u2244", TU = "\u2247", MU = "\u2249", OU = "\u2224", LU = "\u2226", RU = "\u2226", IU = "\u2AFD\u20E5", NU = "\u2202\u0338", BU = "\u2A14", PU = "\u2280", FU = "\u22E0", $U = "\u2280", qU = "\u2AAF\u0338", HU = "\u2AAF\u0338", zU = "\u2933\u0338", VU = "\u219B", UU = "\u21CF", WU = "\u219D\u0338", jU = "\u219B", GU = "\u21CF", YU = "\u22EB", KU = "\u22ED", JU = "\u2281", ZU = "\u22E1", XU = "\u2AB0\u0338", QU = "\u{1D4A9}", eW = "\u{1D4C3}", tW = "\u2224", nW = "\u2226", rW = "\u2241", iW = "\u2244", sW = "\u2244", oW = "\u2224", lW = "\u2226", cW = "\u22E2", aW = "\u22E3", hW = "\u2284", uW = "\u2AC5\u0338", fW = "\u2288", dW = "\u2282\u20D2", pW = "\u2288", gW = "\u2AC5\u0338", mW = "\u2281", yW = "\u2AB0\u0338", bW = "\u2285", vW = "\u2AC6\u0338", wW = "\u2289", xW = "\u2283\u20D2", kW = "\u2289", _W = "\u2AC6\u0338", CW = "\u2279", SW = "\xD1", AW = "\xF1", EW = "\u2278", DW = "\u22EA", TW = "\u22EC", MW = "\u22EB", OW = "\u22ED", LW = "\u039D", RW = "\u03BD", IW = "#", NW = "\u2116", BW = "\u2007", PW = "\u224D\u20D2", FW = "\u22AC", $W = "\u22AD", qW = "\u22AE", HW = "\u22AF", zW = "\u2265\u20D2", VW = ">\u20D2", UW = "\u2904", WW = "\u29DE", jW = "\u2902", GW = "\u2264\u20D2", YW = "<\u20D2", KW = "\u22B4\u20D2", JW = "\u2903", ZW = "\u22B5\u20D2", XW = "\u223C\u20D2", QW = "\u2923", ej = "\u2196", tj = "\u21D6", nj = "\u2196", rj = "\u2927", ij = "\xD3", sj = "\xF3", oj = "\u229B", lj = "\xD4", cj = "\xF4", aj = "\u229A", hj = "\u041E", uj = "\u043E", fj = "\u229D", dj = "\u0150", pj = "\u0151", gj = "\u2A38", mj = "\u2299", yj = "\u29BC", bj = "\u0152", vj = "\u0153", wj = "\u29BF", xj = "\u{1D512}", kj = "\u{1D52C}", _j = "\u02DB", Cj = "\xD2", Sj = "\xF2", Aj = "\u29C1", Ej = "\u29B5", Dj = "\u03A9", Tj = "\u222E", Mj = "\u21BA", Oj = "\u29BE", Lj = "\u29BB", Rj = "\u203E", Ij = "\u29C0", Nj = "\u014C", Bj = "\u014D", Pj = "\u03A9", Fj = "\u03C9", $j = "\u039F", qj = "\u03BF", Hj = "\u29B6", zj = "\u2296", Vj = "\u{1D546}", Uj = "\u{1D560}", Wj = "\u29B7", jj = "\u201C", Gj = "\u2018", Yj = "\u29B9", Kj = "\u2295", Jj = "\u21BB", Zj = "\u2A54", Xj = "\u2228", Qj = "\u2A5D", eG = "\u2134", tG = "\u2134", nG = "\xAA", rG = "\xBA", iG = "\u22B6", sG = "\u2A56", oG = "\u2A57", lG = "\u2A5B", cG = "\u24C8", aG = "\u{1D4AA}", hG = "\u2134", uG = "\xD8", fG = "\xF8", dG = "\u2298", pG = "\xD5", gG = "\xF5", mG = "\u2A36", yG = "\u2A37", bG = "\u2297", vG = "\xD6", wG = "\xF6", xG = "\u233D", kG = "\u203E", _G = "\u23DE", CG = "\u23B4", SG = "\u23DC", AG = "\xB6", EG = "\u2225", DG = "\u2225", TG = "\u2AF3", MG = "\u2AFD", OG = "\u2202", LG = "\u2202", RG = "\u041F", IG = "\u043F", NG = "%", BG = ".", PG = "\u2030", FG = "\u22A5", $G = "\u2031", qG = "\u{1D513}", HG = "\u{1D52D}", zG = "\u03A6", VG = "\u03C6", UG = "\u03D5", WG = "\u2133", jG = "\u260E", GG = "\u03A0", YG = "\u03C0", KG = "\u22D4", JG = "\u03D6", ZG = "\u210F", XG = "\u210E", QG = "\u210F", eY = "\u2A23", tY = "\u229E", nY = "\u2A22", rY = "+", iY = "\u2214", sY = "\u2A25", oY = "\u2A72", lY = "\xB1", cY = "\xB1", aY = "\u2A26", hY = "\u2A27", uY = "\xB1", fY = "\u210C", dY = "\u2A15", pY = "\u{1D561}", gY = "\u2119", mY = "\xA3", yY = "\u2AB7", bY = "\u2ABB", vY = "\u227A", wY = "\u227C", xY = "\u2AB7", kY = "\u227A", _Y = "\u227C", CY = "\u227A", SY = "\u2AAF", AY = "\u227C", EY = "\u227E", DY = "\u2AAF", TY = "\u2AB9", MY = "\u2AB5", OY = "\u22E8", LY = "\u2AAF", RY = "\u2AB3", IY = "\u227E", NY = "\u2032", BY = "\u2033", PY = "\u2119", FY = "\u2AB9", $Y = "\u2AB5", qY = "\u22E8", HY = "\u220F", zY = "\u220F", VY = "\u232E", UY = "\u2312", WY = "\u2313", jY = "\u221D", GY = "\u221D", YY = "\u2237", KY = "\u221D", JY = "\u227E", ZY = "\u22B0", XY = "\u{1D4AB}", QY = "\u{1D4C5}", eK = "\u03A8", tK = "\u03C8", nK = "\u2008", rK = "\u{1D514}", iK = "\u{1D52E}", sK = "\u2A0C", oK = "\u{1D562}", lK = "\u211A", cK = "\u2057", aK = "\u{1D4AC}", hK = "\u{1D4C6}", uK = "\u210D", fK = "\u2A16", dK = "?", pK = "\u225F", gK = '"', mK = '"', yK = "\u21DB", bK = "\u223D\u0331", vK = "\u0154", wK = "\u0155", xK = "\u221A", kK = "\u29B3", _K = "\u27E9", CK = "\u27EB", SK = "\u2992", AK = "\u29A5", EK = "\u27E9", DK = "\xBB", TK = "\u2975", MK = "\u21E5", OK = "\u2920", LK = "\u2933", RK = "\u2192", IK = "\u21A0", NK = "\u21D2", BK = "\u291E", PK = "\u21AA", FK = "\u21AC", $K = "\u2945", qK = "\u2974", HK = "\u2916", zK = "\u21A3", VK = "\u219D", UK = "\u291A", WK = "\u291C", jK = "\u2236", GK = "\u211A", YK = "\u290D", KK = "\u290F", JK = "\u2910", ZK = "\u2773", XK = "}", QK = "]", eJ = "\u298C", tJ = "\u298E", nJ = "\u2990", rJ = "\u0158", iJ = "\u0159", sJ = "\u0156", oJ = "\u0157", lJ = "\u2309", cJ = "}", aJ = "\u0420", hJ = "\u0440", uJ = "\u2937", fJ = "\u2969", dJ = "\u201D", pJ = "\u201D", gJ = "\u21B3", mJ = "\u211C", yJ = "\u211B", bJ = "\u211C", vJ = "\u211D", wJ = "\u211C", xJ = "\u25AD", kJ = "\xAE", _J = "\xAE", CJ = "\u220B", SJ = "\u21CB", AJ = "\u296F", EJ = "\u297D", DJ = "\u230B", TJ = "\u{1D52F}", MJ = "\u211C", OJ = "\u2964", LJ = "\u21C1", RJ = "\u21C0", IJ = "\u296C", NJ = "\u03A1", BJ = "\u03C1", PJ = "\u03F1", FJ = "\u27E9", $J = "\u21E5", qJ = "\u2192", HJ = "\u2192", zJ = "\u21D2", VJ = "\u21C4", UJ = "\u21A3", WJ = "\u2309", jJ = "\u27E7", GJ = "\u295D", YJ = "\u2955", KJ = "\u21C2", JJ = "\u230B", ZJ = "\u21C1", XJ = "\u21C0", QJ = "\u21C4", eZ = "\u21CC", tZ = "\u21C9", nZ = "\u219D", rZ = "\u21A6", iZ = "\u22A2", sZ = "\u295B", oZ = "\u22CC", lZ = "\u29D0", cZ = "\u22B3", aZ = "\u22B5", hZ = "\u294F", uZ = "\u295C", fZ = "\u2954", dZ = "\u21BE", pZ = "\u2953", gZ = "\u21C0", mZ = "\u02DA", yZ = "\u2253", bZ = "\u21C4", vZ = "\u21CC", wZ = "\u200F", xZ = "\u23B1", kZ = "\u23B1", _Z = "\u2AEE", CZ = "\u27ED", SZ = "\u21FE", AZ = "\u27E7", EZ = "\u2986", DZ = "\u{1D563}", TZ = "\u211D", MZ = "\u2A2E", OZ = "\u2A35", LZ = "\u2970", RZ = ")", IZ = "\u2994", NZ = "\u2A12", BZ = "\u21C9", PZ = "\u21DB", FZ = "\u203A", $Z = "\u{1D4C7}", qZ = "\u211B", HZ = "\u21B1", zZ = "\u21B1", VZ = "]", UZ = "\u2019", WZ = "\u2019", jZ = "\u22CC", GZ = "\u22CA", YZ = "\u25B9", KZ = "\u22B5", JZ = "\u25B8", ZZ = "\u29CE", XZ = "\u29F4", QZ = "\u2968", eX = "\u211E", tX = "\u015A", nX = "\u015B", rX = "\u201A", iX = "\u2AB8", sX = "\u0160", oX = "\u0161", lX = "\u2ABC", cX = "\u227B", aX = "\u227D", hX = "\u2AB0", uX = "\u2AB4", fX = "\u015E", dX = "\u015F", pX = "\u015C", gX = "\u015D", mX = "\u2ABA", yX = "\u2AB6", bX = "\u22E9", vX = "\u2A13", wX = "\u227F", xX = "\u0421", kX = "\u0441", _X = "\u22A1", CX = "\u22C5", SX = "\u2A66", AX = "\u2925", EX = "\u2198", DX = "\u21D8", TX = "\u2198", MX = "\xA7", OX = ";", LX = "\u2929", RX = "\u2216", IX = "\u2216", NX = "\u2736", BX = "\u{1D516}", PX = "\u{1D530}", FX = "\u2322", $X = "\u266F", qX = "\u0429", HX = "\u0449", zX = "\u0428", VX = "\u0448", UX = "\u2193", WX = "\u2190", jX = "\u2223", GX = "\u2225", YX = "\u2192", KX = "\u2191", JX = "\xAD", ZX = "\u03A3", XX = "\u03C3", QX = "\u03C2", eQ = "\u03C2", tQ = "\u223C", nQ = "\u2A6A", rQ = "\u2243", iQ = "\u2243", sQ = "\u2A9E", oQ = "\u2AA0", lQ = "\u2A9D", cQ = "\u2A9F", aQ = "\u2246", hQ = "\u2A24", uQ = "\u2972", fQ = "\u2190", dQ = "\u2218", pQ = "\u2216", gQ = "\u2A33", mQ = "\u29E4", yQ = "\u2223", bQ = "\u2323", vQ = "\u2AAA", wQ = "\u2AAC", xQ = "\u2AAC\uFE00", kQ = "\u042C", _Q = "\u044C", CQ = "\u233F", SQ = "\u29C4", AQ = "/", EQ = "\u{1D54A}", DQ = "\u{1D564}", TQ = "\u2660", MQ = "\u2660", OQ = "\u2225", LQ = "\u2293", RQ = "\u2293\uFE00", IQ = "\u2294", NQ = "\u2294\uFE00", BQ = "\u221A", PQ = "\u228F", FQ = "\u2291", $Q = "\u228F", qQ = "\u2291", HQ = "\u2290", zQ = "\u2292", VQ = "\u2290", UQ = "\u2292", WQ = "\u25A1", jQ = "\u25A1", GQ = "\u2293", YQ = "\u228F", KQ = "\u2291", JQ = "\u2290", ZQ = "\u2292", XQ = "\u2294", QQ = "\u25AA", eee = "\u25A1", tee = "\u25AA", nee = "\u2192", ree = "\u{1D4AE}", iee = "\u{1D4C8}", see = "\u2216", oee = "\u2323", lee = "\u22C6", cee = "\u22C6", aee = "\u2606", hee = "\u2605", uee = "\u03F5", fee = "\u03D5", dee = "\xAF", pee = "\u2282", gee = "\u22D0", mee = "\u2ABD", yee = "\u2AC5", bee = "\u2286", vee = "\u2AC3", wee = "\u2AC1", xee = "\u2ACB", kee = "\u228A", _ee = "\u2ABF", Cee = "\u2979", See = "\u2282", Aee = "\u22D0", Eee = "\u2286", Dee = "\u2AC5", Tee = "\u2286", Mee = "\u228A", Oee = "\u2ACB", Lee = "\u2AC7", Ree = "\u2AD5", Iee = "\u2AD3", Nee = "\u2AB8", Bee = "\u227B", Pee = "\u227D", Fee = "\u227B", $ee = "\u2AB0", qee = "\u227D", Hee = "\u227F", zee = "\u2AB0", Vee = "\u2ABA", Uee = "\u2AB6", Wee = "\u22E9", jee = "\u227F", Gee = "\u220B", Yee = "\u2211", Kee = "\u2211", Jee = "\u266A", Zee = "\xB9", Xee = "\xB2", Qee = "\xB3", ete = "\u2283", tte = "\u22D1", nte = "\u2ABE", rte = "\u2AD8", ite = "\u2AC6", ste = "\u2287", ote = "\u2AC4", lte = "\u2283", cte = "\u2287", ate = "\u27C9", hte = "\u2AD7", ute = "\u297B", fte = "\u2AC2", dte = "\u2ACC", pte = "\u228B", gte = "\u2AC0", mte = "\u2283", yte = "\u22D1", bte = "\u2287", vte = "\u2AC6", wte = "\u228B", xte = "\u2ACC", kte = "\u2AC8", _te = "\u2AD4", Cte = "\u2AD6", Ste = "\u2926", Ate = "\u2199", Ete = "\u21D9", Dte = "\u2199", Tte = "\u292A", Mte = "\xDF", Ote = "	", Lte = "\u2316", Rte = "\u03A4", Ite = "\u03C4", Nte = "\u23B4", Bte = "\u0164", Pte = "\u0165", Fte = "\u0162", $te = "\u0163", qte = "\u0422", Hte = "\u0442", zte = "\u20DB", Vte = "\u2315", Ute = "\u{1D517}", Wte = "\u{1D531}", jte = "\u2234", Gte = "\u2234", Yte = "\u2234", Kte = "\u0398", Jte = "\u03B8", Zte = "\u03D1", Xte = "\u03D1", Qte = "\u2248", ene = "\u223C", tne = "\u205F\u200A", nne = "\u2009", rne = "\u2009", ine = "\u2248", sne = "\u223C", one = "\xDE", lne = "\xFE", cne = "\u02DC", ane = "\u223C", hne = "\u2243", une = "\u2245", fne = "\u2248", dne = "\u2A31", pne = "\u22A0", gne = "\xD7", mne = "\u2A30", yne = "\u222D", bne = "\u2928", vne = "\u2336", wne = "\u2AF1", xne = "\u22A4", kne = "\u{1D54B}", _ne = "\u{1D565}", Cne = "\u2ADA", Sne = "\u2929", Ane = "\u2034", Ene = "\u2122", Dne = "\u2122", Tne = "\u25B5", Mne = "\u25BF", One = "\u25C3", Lne = "\u22B4", Rne = "\u225C", Ine = "\u25B9", Nne = "\u22B5", Bne = "\u25EC", Pne = "\u225C", Fne = "\u2A3A", $ne = "\u20DB", qne = "\u2A39", Hne = "\u29CD", zne = "\u2A3B", Vne = "\u23E2", Une = "\u{1D4AF}", Wne = "\u{1D4C9}", jne = "\u0426", Gne = "\u0446", Yne = "\u040B", Kne = "\u045B", Jne = "\u0166", Zne = "\u0167", Xne = "\u226C", Qne = "\u219E", ere = "\u21A0", tre = "\xDA", nre = "\xFA", rre = "\u2191", ire = "\u219F", sre = "\u21D1", ore = "\u2949", lre = "\u040E", cre = "\u045E", are = "\u016C", hre = "\u016D", ure = "\xDB", fre = "\xFB", dre = "\u0423", pre = "\u0443", gre = "\u21C5", mre = "\u0170", yre = "\u0171", bre = "\u296E", vre = "\u297E", wre = "\u{1D518}", xre = "\u{1D532}", kre = "\xD9", _re = "\xF9", Cre = "\u2963", Sre = "\u21BF", Are = "\u21BE", Ere = "\u2580", Dre = "\u231C", Tre = "\u231C", Mre = "\u230F", Ore = "\u25F8", Lre = "\u016A", Rre = "\u016B", Ire = "\xA8", Nre = "_", Bre = "\u23DF", Pre = "\u23B5", Fre = "\u23DD", $re = "\u22C3", qre = "\u228E", Hre = "\u0172", zre = "\u0173", Vre = "\u{1D54C}", Ure = "\u{1D566}", Wre = "\u2912", jre = "\u2191", Gre = "\u2191", Yre = "\u21D1", Kre = "\u21C5", Jre = "\u2195", Zre = "\u2195", Xre = "\u21D5", Qre = "\u296E", eie = "\u21BF", tie = "\u21BE", nie = "\u228E", rie = "\u2196", iie = "\u2197", sie = "\u03C5", oie = "\u03D2", lie = "\u03D2", cie = "\u03A5", aie = "\u03C5", hie = "\u21A5", uie = "\u22A5", fie = "\u21C8", die = "\u231D", pie = "\u231D", gie = "\u230E", mie = "\u016E", yie = "\u016F", bie = "\u25F9", vie = "\u{1D4B0}", wie = "\u{1D4CA}", xie = "\u22F0", kie = "\u0168", _ie = "\u0169", Cie = "\u25B5", Sie = "\u25B4", Aie = "\u21C8", Eie = "\xDC", Die = "\xFC", Tie = "\u29A7", Mie = "\u299C", Oie = "\u03F5", Lie = "\u03F0", Rie = "\u2205", Iie = "\u03D5", Nie = "\u03D6", Bie = "\u221D", Pie = "\u2195", Fie = "\u21D5", $ie = "\u03F1", qie = "\u03C2", Hie = "\u228A\uFE00", zie = "\u2ACB\uFE00", Vie = "\u228B\uFE00", Uie = "\u2ACC\uFE00", Wie = "\u03D1", jie = "\u22B2", Gie = "\u22B3", Yie = "\u2AE8", Kie = "\u2AEB", Jie = "\u2AE9", Zie = "\u0412", Xie = "\u0432", Qie = "\u22A2", ese = "\u22A8", tse = "\u22A9", nse = "\u22AB", rse = "\u2AE6", ise = "\u22BB", sse = "\u2228", ose = "\u22C1", lse = "\u225A", cse = "\u22EE", ase = "|", hse = "\u2016", use = "|", fse = "\u2016", dse = "\u2223", pse = "|", gse = "\u2758", mse = "\u2240", yse = "\u200A", bse = "\u{1D519}", vse = "\u{1D533}", wse = "\u22B2", xse = "\u2282\u20D2", kse = "\u2283\u20D2", _se = "\u{1D54D}", Cse = "\u{1D567}", Sse = "\u221D", Ase = "\u22B3", Ese = "\u{1D4B1}", Dse = "\u{1D4CB}", Tse = "\u2ACB\uFE00", Mse = "\u228A\uFE00", Ose = "\u2ACC\uFE00", Lse = "\u228B\uFE00", Rse = "\u22AA", Ise = "\u299A", Nse = "\u0174", Bse = "\u0175", Pse = "\u2A5F", Fse = "\u2227", $se = "\u22C0", qse = "\u2259", Hse = "\u2118", zse = "\u{1D51A}", Vse = "\u{1D534}", Use = "\u{1D54E}", Wse = "\u{1D568}", jse = "\u2118", Gse = "\u2240", Yse = "\u2240", Kse = "\u{1D4B2}", Jse = "\u{1D4CC}", Zse = "\u22C2", Xse = "\u25EF", Qse = "\u22C3", eoe = "\u25BD", toe = "\u{1D51B}", noe = "\u{1D535}", roe = "\u27F7", ioe = "\u27FA", soe = "\u039E", ooe = "\u03BE", loe = "\u27F5", coe = "\u27F8", aoe = "\u27FC", hoe = "\u22FB", uoe = "\u2A00", foe = "\u{1D54F}", doe = "\u{1D569}", poe = "\u2A01", goe = "\u2A02", moe = "\u27F6", yoe = "\u27F9", boe = "\u{1D4B3}", voe = "\u{1D4CD}", woe = "\u2A06", xoe = "\u2A04", koe = "\u25B3", _oe = "\u22C1", Coe = "\u22C0", Soe = "\xDD", Aoe = "\xFD", Eoe = "\u042F", Doe = "\u044F", Toe = "\u0176", Moe = "\u0177", Ooe = "\u042B", Loe = "\u044B", Roe = "\xA5", Ioe = "\u{1D51C}", Noe = "\u{1D536}", Boe = "\u0407", Poe = "\u0457", Foe = "\u{1D550}", $oe = "\u{1D56A}", qoe = "\u{1D4B4}", Hoe = "\u{1D4CE}", zoe = "\u042E", Voe = "\u044E", Uoe = "\xFF", Woe = "\u0178", joe = "\u0179", Goe = "\u017A", Yoe = "\u017D", Koe = "\u017E", Joe = "\u0417", Zoe = "\u0437", Xoe = "\u017B", Qoe = "\u017C", ele = "\u2128", tle = "\u200B", nle = "\u0396", rle = "\u03B6", ile = "\u{1D537}", sle = "\u2128", ole = "\u0416", lle = "\u0436", cle = "\u21DD", ale = "\u{1D56B}", hle = "\u2124", ule = "\u{1D4B5}", fle = "\u{1D4CF}", dle = "\u200D", ple = "\u200C", gle = {
  Aacute: XD,
  aacute: QD,
  Abreve: eT,
  abreve: tT,
  ac: nT,
  acd: rT,
  acE: iT,
  Acirc: sT,
  acirc: oT,
  acute: lT,
  Acy: cT,
  acy: aT,
  AElig: hT,
  aelig: uT,
  af: fT,
  Afr: dT,
  afr: pT,
  Agrave: gT,
  agrave: mT,
  alefsym: yT,
  aleph: bT,
  Alpha: vT,
  alpha: wT,
  Amacr: xT,
  amacr: kT,
  amalg: _T,
  amp: CT,
  AMP: ST,
  andand: AT,
  And: ET,
  and: DT,
  andd: TT,
  andslope: MT,
  andv: OT,
  ang: LT,
  ange: RT,
  angle: IT,
  angmsdaa: NT,
  angmsdab: BT,
  angmsdac: PT,
  angmsdad: FT,
  angmsdae: $T,
  angmsdaf: qT,
  angmsdag: HT,
  angmsdah: zT,
  angmsd: VT,
  angrt: UT,
  angrtvb: WT,
  angrtvbd: jT,
  angsph: GT,
  angst: YT,
  angzarr: KT,
  Aogon: JT,
  aogon: ZT,
  Aopf: XT,
  aopf: QT,
  apacir: eM,
  ap: tM,
  apE: nM,
  ape: rM,
  apid: iM,
  apos: sM,
  ApplyFunction: oM,
  approx: lM,
  approxeq: cM,
  Aring: aM,
  aring: hM,
  Ascr: uM,
  ascr: fM,
  Assign: dM,
  ast: pM,
  asymp: gM,
  asympeq: mM,
  Atilde: yM,
  atilde: bM,
  Auml: vM,
  auml: wM,
  awconint: xM,
  awint: kM,
  backcong: _M,
  backepsilon: CM,
  backprime: SM,
  backsim: AM,
  backsimeq: EM,
  Backslash: DM,
  Barv: TM,
  barvee: MM,
  barwed: OM,
  Barwed: LM,
  barwedge: RM,
  bbrk: IM,
  bbrktbrk: NM,
  bcong: BM,
  Bcy: PM,
  bcy: FM,
  bdquo: $M,
  becaus: qM,
  because: HM,
  Because: zM,
  bemptyv: VM,
  bepsi: UM,
  bernou: WM,
  Bernoullis: jM,
  Beta: GM,
  beta: YM,
  beth: KM,
  between: JM,
  Bfr: ZM,
  bfr: XM,
  bigcap: QM,
  bigcirc: eO,
  bigcup: tO,
  bigodot: nO,
  bigoplus: rO,
  bigotimes: iO,
  bigsqcup: sO,
  bigstar: oO,
  bigtriangledown: lO,
  bigtriangleup: cO,
  biguplus: aO,
  bigvee: hO,
  bigwedge: uO,
  bkarow: fO,
  blacklozenge: dO,
  blacksquare: pO,
  blacktriangle: gO,
  blacktriangledown: mO,
  blacktriangleleft: yO,
  blacktriangleright: bO,
  blank: vO,
  blk12: wO,
  blk14: xO,
  blk34: kO,
  block: _O,
  bne: CO,
  bnequiv: SO,
  bNot: AO,
  bnot: EO,
  Bopf: DO,
  bopf: TO,
  bot: MO,
  bottom: OO,
  bowtie: LO,
  boxbox: RO,
  boxdl: IO,
  boxdL: NO,
  boxDl: BO,
  boxDL: PO,
  boxdr: FO,
  boxdR: $O,
  boxDr: qO,
  boxDR: HO,
  boxh: zO,
  boxH: VO,
  boxhd: UO,
  boxHd: WO,
  boxhD: jO,
  boxHD: GO,
  boxhu: YO,
  boxHu: KO,
  boxhU: JO,
  boxHU: ZO,
  boxminus: XO,
  boxplus: QO,
  boxtimes: eL,
  boxul: tL,
  boxuL: nL,
  boxUl: rL,
  boxUL: iL,
  boxur: sL,
  boxuR: oL,
  boxUr: lL,
  boxUR: cL,
  boxv: aL,
  boxV: hL,
  boxvh: uL,
  boxvH: fL,
  boxVh: dL,
  boxVH: pL,
  boxvl: gL,
  boxvL: mL,
  boxVl: yL,
  boxVL: bL,
  boxvr: vL,
  boxvR: wL,
  boxVr: xL,
  boxVR: kL,
  bprime: _L,
  breve: CL,
  Breve: SL,
  brvbar: AL,
  bscr: EL,
  Bscr: DL,
  bsemi: TL,
  bsim: ML,
  bsime: OL,
  bsolb: LL,
  bsol: RL,
  bsolhsub: IL,
  bull: NL,
  bullet: BL,
  bump: PL,
  bumpE: FL,
  bumpe: $L,
  Bumpeq: qL,
  bumpeq: HL,
  Cacute: zL,
  cacute: VL,
  capand: UL,
  capbrcup: WL,
  capcap: jL,
  cap: GL,
  Cap: YL,
  capcup: KL,
  capdot: JL,
  CapitalDifferentialD: ZL,
  caps: XL,
  caret: QL,
  caron: eR,
  Cayleys: tR,
  ccaps: nR,
  Ccaron: rR,
  ccaron: iR,
  Ccedil: sR,
  ccedil: oR,
  Ccirc: lR,
  ccirc: cR,
  Cconint: aR,
  ccups: hR,
  ccupssm: uR,
  Cdot: fR,
  cdot: dR,
  cedil: pR,
  Cedilla: gR,
  cemptyv: mR,
  cent: yR,
  centerdot: bR,
  CenterDot: vR,
  cfr: wR,
  Cfr: xR,
  CHcy: kR,
  chcy: _R,
  check: CR,
  checkmark: SR,
  Chi: AR,
  chi: ER,
  circ: DR,
  circeq: TR,
  circlearrowleft: MR,
  circlearrowright: OR,
  circledast: LR,
  circledcirc: RR,
  circleddash: IR,
  CircleDot: NR,
  circledR: BR,
  circledS: PR,
  CircleMinus: FR,
  CirclePlus: $R,
  CircleTimes: qR,
  cir: HR,
  cirE: zR,
  cire: VR,
  cirfnint: UR,
  cirmid: WR,
  cirscir: jR,
  ClockwiseContourIntegral: GR,
  CloseCurlyDoubleQuote: YR,
  CloseCurlyQuote: KR,
  clubs: JR,
  clubsuit: ZR,
  colon: XR,
  Colon: QR,
  Colone: e3,
  colone: t3,
  coloneq: n3,
  comma: r3,
  commat: i3,
  comp: s3,
  compfn: o3,
  complement: l3,
  complexes: c3,
  cong: a3,
  congdot: h3,
  Congruent: u3,
  conint: f3,
  Conint: d3,
  ContourIntegral: p3,
  copf: g3,
  Copf: m3,
  coprod: y3,
  Coproduct: b3,
  copy: v3,
  COPY: w3,
  copysr: x3,
  CounterClockwiseContourIntegral: k3,
  crarr: _3,
  cross: C3,
  Cross: S3,
  Cscr: A3,
  cscr: E3,
  csub: D3,
  csube: T3,
  csup: M3,
  csupe: O3,
  ctdot: L3,
  cudarrl: R3,
  cudarrr: I3,
  cuepr: N3,
  cuesc: B3,
  cularr: P3,
  cularrp: F3,
  cupbrcap: $3,
  cupcap: q3,
  CupCap: H3,
  cup: z3,
  Cup: V3,
  cupcup: U3,
  cupdot: W3,
  cupor: j3,
  cups: G3,
  curarr: Y3,
  curarrm: K3,
  curlyeqprec: J3,
  curlyeqsucc: Z3,
  curlyvee: X3,
  curlywedge: Q3,
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
  Dcaron: vI,
  dcaron: wI,
  Dcy: xI,
  dcy: kI,
  ddagger: _I,
  ddarr: CI,
  DD: SI,
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
  dfr: BI,
  dHar: PI,
  dharl: FI,
  dharr: $I,
  DiacriticalAcute: qI,
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
  div: eN,
  divide: tN,
  divideontimes: nN,
  divonx: rN,
  DJcy: iN,
  djcy: sN,
  dlcorn: oN,
  dlcrop: lN,
  dollar: cN,
  Dopf: aN,
  dopf: hN,
  Dot: uN,
  dot: fN,
  DotDot: dN,
  doteq: pN,
  doteqdot: gN,
  DotEqual: mN,
  dotminus: yN,
  dotplus: bN,
  dotsquare: vN,
  doublebarwedge: wN,
  DoubleContourIntegral: xN,
  DoubleDot: kN,
  DoubleDownArrow: _N,
  DoubleLeftArrow: CN,
  DoubleLeftRightArrow: SN,
  DoubleLeftTee: AN,
  DoubleLongLeftArrow: EN,
  DoubleLongLeftRightArrow: DN,
  DoubleLongRightArrow: TN,
  DoubleRightArrow: MN,
  DoubleRightTee: ON,
  DoubleUpArrow: LN,
  DoubleUpDownArrow: RN,
  DoubleVerticalBar: IN,
  DownArrowBar: NN,
  downarrow: BN,
  DownArrow: PN,
  Downarrow: FN,
  DownArrowUpArrow: $N,
  DownBreve: qN,
  downdownarrows: HN,
  downharpoonleft: zN,
  downharpoonright: VN,
  DownLeftRightVector: UN,
  DownLeftTeeVector: WN,
  DownLeftVectorBar: jN,
  DownLeftVector: GN,
  DownRightTeeVector: YN,
  DownRightVectorBar: KN,
  DownRightVector: JN,
  DownTeeArrow: ZN,
  DownTee: XN,
  drbkarow: QN,
  drcorn: eB,
  drcrop: tB,
  Dscr: nB,
  dscr: rB,
  DScy: iB,
  dscy: sB,
  dsol: oB,
  Dstrok: lB,
  dstrok: cB,
  dtdot: aB,
  dtri: hB,
  dtrif: uB,
  duarr: fB,
  duhar: dB,
  dwangle: pB,
  DZcy: gB,
  dzcy: mB,
  dzigrarr: yB,
  Eacute: bB,
  eacute: vB,
  easter: wB,
  Ecaron: xB,
  ecaron: kB,
  Ecirc: _B,
  ecirc: CB,
  ecir: SB,
  ecolon: AB,
  Ecy: EB,
  ecy: DB,
  eDDot: TB,
  Edot: MB,
  edot: OB,
  eDot: LB,
  ee: RB,
  efDot: IB,
  Efr: NB,
  efr: BB,
  eg: PB,
  Egrave: FB,
  egrave: $B,
  egs: qB,
  egsdot: HB,
  el: zB,
  Element: VB,
  elinters: UB,
  ell: WB,
  els: jB,
  elsdot: GB,
  Emacr: YB,
  emacr: KB,
  empty: JB,
  emptyset: ZB,
  EmptySmallSquare: XB,
  emptyv: QB,
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
  eqcolon: vP,
  eqsim: wP,
  eqslantgtr: xP,
  eqslantless: kP,
  Equal: _P,
  equals: CP,
  EqualTilde: SP,
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
  Esim: BP,
  esim: PP,
  Eta: FP,
  eta: $P,
  ETH: qP,
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
  forkv: vF,
  Fouriertrf: wF,
  fpartint: xF,
  frac12: kF,
  frac13: _F,
  frac14: CF,
  frac15: SF,
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
  frac78: BF,
  frasl: PF,
  frown: FF,
  fscr: $F,
  Fscr: qF,
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
  Gdot: e4,
  gdot: t4,
  ge: n4,
  gE: r4,
  gEl: i4,
  gel: s4,
  geq: o4,
  geqq: l4,
  geqslant: c4,
  gescc: a4,
  ges: h4,
  gesdot: u4,
  gesdoto: f4,
  gesdotol: d4,
  gesl: p4,
  gesles: g4,
  Gfr: m4,
  gfr: y4,
  gg: b4,
  Gg: v4,
  ggg: w4,
  gimel: x4,
  GJcy: k4,
  gjcy: _4,
  gla: C4,
  gl: S4,
  glE: A4,
  glj: E4,
  gnap: D4,
  gnapprox: T4,
  gne: M4,
  gnE: O4,
  gneq: L4,
  gneqq: R4,
  gnsim: I4,
  Gopf: N4,
  gopf: B4,
  grave: P4,
  GreaterEqual: F4,
  GreaterEqualLess: $4,
  GreaterFullEqual: q4,
  GreaterGreater: H4,
  GreaterLess: z4,
  GreaterSlantEqual: V4,
  GreaterTilde: U4,
  Gscr: W4,
  gscr: j4,
  gsim: G4,
  gsime: Y4,
  gsiml: K4,
  gtcc: J4,
  gtcir: Z4,
  gt: X4,
  GT: Q4,
  Gt: e5,
  gtdot: t5,
  gtlPar: n5,
  gtquest: r5,
  gtrapprox: i5,
  gtrarr: s5,
  gtrdot: o5,
  gtreqless: l5,
  gtreqqless: c5,
  gtrless: a5,
  gtrsim: h5,
  gvertneqq: u5,
  gvnE: f5,
  Hacek: d5,
  hairsp: p5,
  half: g5,
  hamilt: m5,
  HARDcy: y5,
  hardcy: b5,
  harrcir: v5,
  harr: w5,
  hArr: x5,
  harrw: k5,
  Hat: _5,
  hbar: C5,
  Hcirc: S5,
  hcirc: A5,
  hearts: E5,
  heartsuit: D5,
  hellip: T5,
  hercon: M5,
  hfr: O5,
  Hfr: L5,
  HilbertSpace: R5,
  hksearow: I5,
  hkswarow: N5,
  hoarr: B5,
  homtht: P5,
  hookleftarrow: F5,
  hookrightarrow: $5,
  hopf: q5,
  Hopf: H5,
  horbar: z5,
  HorizontalLine: V5,
  hscr: U5,
  Hscr: W5,
  hslash: j5,
  Hstrok: G5,
  hstrok: Y5,
  HumpDownHump: K5,
  HumpEqual: J5,
  hybull: Z5,
  hyphen: X5,
  Iacute: Q5,
  iacute: e6,
  ic: t6,
  Icirc: n6,
  icirc: r6,
  Icy: i6,
  icy: s6,
  Idot: o6,
  IEcy: l6,
  iecy: c6,
  iexcl: a6,
  iff: h6,
  ifr: u6,
  Ifr: f6,
  Igrave: d6,
  igrave: p6,
  ii: g6,
  iiiint: m6,
  iiint: y6,
  iinfin: b6,
  iiota: v6,
  IJlig: w6,
  ijlig: x6,
  Imacr: k6,
  imacr: _6,
  image: C6,
  ImaginaryI: S6,
  imagline: A6,
  imagpart: E6,
  imath: D6,
  Im: T6,
  imof: M6,
  imped: O6,
  Implies: L6,
  incare: R6,
  in: "\u2208",
  infin: I6,
  infintie: N6,
  inodot: B6,
  intcal: P6,
  int: F6,
  Int: $6,
  integers: q6,
  Integral: H6,
  intercal: z6,
  Intersection: V6,
  intlarhk: U6,
  intprod: W6,
  InvisibleComma: j6,
  InvisibleTimes: G6,
  IOcy: Y6,
  iocy: K6,
  Iogon: J6,
  iogon: Z6,
  Iopf: X6,
  iopf: Q6,
  Iota: e8,
  iota: t8,
  iprod: n8,
  iquest: r8,
  iscr: i8,
  Iscr: s8,
  isin: o8,
  isindot: l8,
  isinE: c8,
  isins: a8,
  isinsv: h8,
  isinv: u8,
  it: f8,
  Itilde: d8,
  itilde: p8,
  Iukcy: g8,
  iukcy: m8,
  Iuml: y8,
  iuml: b8,
  Jcirc: v8,
  jcirc: w8,
  Jcy: x8,
  jcy: k8,
  Jfr: _8,
  jfr: C8,
  jmath: S8,
  Jopf: A8,
  jopf: E8,
  Jscr: D8,
  jscr: T8,
  Jsercy: M8,
  jsercy: O8,
  Jukcy: L8,
  jukcy: R8,
  Kappa: I8,
  kappa: N8,
  kappav: B8,
  Kcedil: P8,
  kcedil: F8,
  Kcy: $8,
  kcy: q8,
  Kfr: H8,
  kfr: z8,
  kgreen: V8,
  KHcy: U8,
  khcy: W8,
  KJcy: j8,
  kjcy: G8,
  Kopf: Y8,
  kopf: K8,
  Kscr: J8,
  kscr: Z8,
  lAarr: X8,
  Lacute: Q8,
  lacute: e$,
  laemptyv: t$,
  lagran: n$,
  Lambda: r$,
  lambda: i$,
  lang: s$,
  Lang: o$,
  langd: l$,
  langle: c$,
  lap: a$,
  Laplacetrf: h$,
  laquo: u$,
  larrb: f$,
  larrbfs: d$,
  larr: p$,
  Larr: g$,
  lArr: m$,
  larrfs: y$,
  larrhk: b$,
  larrlp: v$,
  larrpl: w$,
  larrsim: x$,
  larrtl: k$,
  latail: _$,
  lAtail: C$,
  lat: S$,
  late: A$,
  lates: E$,
  lbarr: D$,
  lBarr: T$,
  lbbrk: M$,
  lbrace: O$,
  lbrack: L$,
  lbrke: R$,
  lbrksld: I$,
  lbrkslu: N$,
  Lcaron: B$,
  lcaron: P$,
  Lcedil: F$,
  lcedil: $$,
  lceil: q$,
  lcub: H$,
  Lcy: z$,
  lcy: V$,
  ldca: U$,
  ldquo: W$,
  ldquor: j$,
  ldrdhar: G$,
  ldrushar: Y$,
  ldsh: K$,
  le: J$,
  lE: Z$,
  LeftAngleBracket: X$,
  LeftArrowBar: Q$,
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
  leftrightsquigarrow: vq,
  LeftRightVector: wq,
  LeftTeeArrow: xq,
  LeftTee: kq,
  LeftTeeVector: _q,
  leftthreetimes: Cq,
  LeftTriangleBar: Sq,
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
  leq: Bq,
  leqq: Pq,
  leqslant: Fq,
  lescc: $q,
  les: qq,
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
  LessLess: e9,
  lesssim: t9,
  LessSlantEqual: n9,
  LessTilde: r9,
  lfisht: i9,
  lfloor: s9,
  Lfr: o9,
  lfr: l9,
  lg: c9,
  lgE: a9,
  lHar: h9,
  lhard: u9,
  lharu: f9,
  lharul: d9,
  lhblk: p9,
  LJcy: g9,
  ljcy: m9,
  llarr: y9,
  ll: b9,
  Ll: v9,
  llcorner: w9,
  Lleftarrow: x9,
  llhard: k9,
  lltri: _9,
  Lmidot: C9,
  lmidot: S9,
  lmoustache: A9,
  lmoust: E9,
  lnap: D9,
  lnapprox: T9,
  lne: M9,
  lnE: O9,
  lneq: L9,
  lneqq: R9,
  lnsim: I9,
  loang: N9,
  loarr: B9,
  lobrk: P9,
  longleftarrow: F9,
  LongLeftArrow: $9,
  Longleftarrow: q9,
  longleftrightarrow: H9,
  LongLeftRightArrow: z9,
  Longleftrightarrow: V9,
  longmapsto: U9,
  longrightarrow: W9,
  LongRightArrow: j9,
  Longrightarrow: G9,
  looparrowleft: Y9,
  looparrowright: K9,
  lopar: J9,
  Lopf: Z9,
  lopf: X9,
  loplus: Q9,
  lotimes: eH,
  lowast: tH,
  lowbar: nH,
  LowerLeftArrow: rH,
  LowerRightArrow: iH,
  loz: sH,
  lozenge: oH,
  lozf: lH,
  lpar: cH,
  lparlt: aH,
  lrarr: hH,
  lrcorner: uH,
  lrhar: fH,
  lrhard: dH,
  lrm: pH,
  lrtri: gH,
  lsaquo: mH,
  lscr: yH,
  Lscr: bH,
  lsh: vH,
  Lsh: wH,
  lsim: xH,
  lsime: kH,
  lsimg: _H,
  lsqb: CH,
  lsquo: SH,
  lsquor: AH,
  Lstrok: EH,
  lstrok: DH,
  ltcc: TH,
  ltcir: MH,
  lt: OH,
  LT: LH,
  Lt: RH,
  ltdot: IH,
  lthree: NH,
  ltimes: BH,
  ltlarr: PH,
  ltquest: FH,
  ltri: $H,
  ltrie: qH,
  ltrif: HH,
  ltrPar: zH,
  lurdshar: VH,
  luruhar: UH,
  lvertneqq: WH,
  lvnE: jH,
  macr: GH,
  male: YH,
  malt: KH,
  maltese: JH,
  Map: "\u2905",
  map: ZH,
  mapsto: XH,
  mapstodown: QH,
  mapstoleft: e7,
  mapstoup: t7,
  marker: n7,
  mcomma: r7,
  Mcy: i7,
  mcy: s7,
  mdash: o7,
  mDDot: l7,
  measuredangle: c7,
  MediumSpace: a7,
  Mellintrf: h7,
  Mfr: u7,
  mfr: f7,
  mho: d7,
  micro: p7,
  midast: g7,
  midcir: m7,
  mid: y7,
  middot: b7,
  minusb: v7,
  minus: w7,
  minusd: x7,
  minusdu: k7,
  MinusPlus: _7,
  mlcp: C7,
  mldr: S7,
  mnplus: A7,
  models: E7,
  Mopf: D7,
  mopf: T7,
  mp: M7,
  mscr: O7,
  Mscr: L7,
  mstpos: R7,
  Mu: I7,
  mu: N7,
  multimap: B7,
  mumap: P7,
  nabla: F7,
  Nacute: $7,
  nacute: q7,
  nang: H7,
  nap: z7,
  napE: V7,
  napid: U7,
  napos: W7,
  napprox: j7,
  natural: G7,
  naturals: Y7,
  natur: K7,
  nbsp: J7,
  nbump: Z7,
  nbumpe: X7,
  ncap: Q7,
  Ncaron: ez,
  ncaron: tz,
  Ncedil: nz,
  ncedil: rz,
  ncong: iz,
  ncongdot: sz,
  ncup: oz,
  Ncy: lz,
  ncy: cz,
  ndash: az,
  nearhk: hz,
  nearr: uz,
  neArr: fz,
  nearrow: dz,
  ne: pz,
  nedot: gz,
  NegativeMediumSpace: mz,
  NegativeThickSpace: yz,
  NegativeThinSpace: bz,
  NegativeVeryThinSpace: vz,
  nequiv: wz,
  nesear: xz,
  nesim: kz,
  NestedGreaterGreater: _z,
  NestedLessLess: Cz,
  NewLine: Sz,
  nexist: Az,
  nexists: Ez,
  Nfr: Dz,
  nfr: Tz,
  ngE: Mz,
  nge: Oz,
  ngeq: Lz,
  ngeqq: Rz,
  ngeqslant: Iz,
  nges: Nz,
  nGg: Bz,
  ngsim: Pz,
  nGt: Fz,
  ngt: $z,
  ngtr: qz,
  nGtv: Hz,
  nharr: zz,
  nhArr: Vz,
  nhpar: Uz,
  ni: Wz,
  nis: jz,
  nisd: Gz,
  niv: Yz,
  NJcy: Kz,
  njcy: Jz,
  nlarr: Zz,
  nlArr: Xz,
  nldr: Qz,
  nlE: eV,
  nle: tV,
  nleftarrow: nV,
  nLeftarrow: rV,
  nleftrightarrow: iV,
  nLeftrightarrow: sV,
  nleq: oV,
  nleqq: lV,
  nleqslant: cV,
  nles: aV,
  nless: hV,
  nLl: uV,
  nlsim: fV,
  nLt: dV,
  nlt: pV,
  nltri: gV,
  nltrie: mV,
  nLtv: yV,
  nmid: bV,
  NoBreak: vV,
  NonBreakingSpace: wV,
  nopf: xV,
  Nopf: kV,
  Not: _V,
  not: CV,
  NotCongruent: SV,
  NotCupCap: AV,
  NotDoubleVerticalBar: EV,
  NotElement: DV,
  NotEqual: TV,
  NotEqualTilde: MV,
  NotExists: OV,
  NotGreater: LV,
  NotGreaterEqual: RV,
  NotGreaterFullEqual: IV,
  NotGreaterGreater: NV,
  NotGreaterLess: BV,
  NotGreaterSlantEqual: PV,
  NotGreaterTilde: FV,
  NotHumpDownHump: $V,
  NotHumpEqual: qV,
  notin: HV,
  notindot: zV,
  notinE: VV,
  notinva: UV,
  notinvb: WV,
  notinvc: jV,
  NotLeftTriangleBar: GV,
  NotLeftTriangle: YV,
  NotLeftTriangleEqual: KV,
  NotLess: JV,
  NotLessEqual: ZV,
  NotLessGreater: XV,
  NotLessLess: QV,
  NotLessSlantEqual: eU,
  NotLessTilde: tU,
  NotNestedGreaterGreater: nU,
  NotNestedLessLess: rU,
  notni: iU,
  notniva: sU,
  notnivb: oU,
  notnivc: lU,
  NotPrecedes: cU,
  NotPrecedesEqual: aU,
  NotPrecedesSlantEqual: hU,
  NotReverseElement: uU,
  NotRightTriangleBar: fU,
  NotRightTriangle: dU,
  NotRightTriangleEqual: pU,
  NotSquareSubset: gU,
  NotSquareSubsetEqual: mU,
  NotSquareSuperset: yU,
  NotSquareSupersetEqual: bU,
  NotSubset: vU,
  NotSubsetEqual: wU,
  NotSucceeds: xU,
  NotSucceedsEqual: kU,
  NotSucceedsSlantEqual: _U,
  NotSucceedsTilde: CU,
  NotSuperset: SU,
  NotSupersetEqual: AU,
  NotTilde: EU,
  NotTildeEqual: DU,
  NotTildeFullEqual: TU,
  NotTildeTilde: MU,
  NotVerticalBar: OU,
  nparallel: LU,
  npar: RU,
  nparsl: IU,
  npart: NU,
  npolint: BU,
  npr: PU,
  nprcue: FU,
  nprec: $U,
  npreceq: qU,
  npre: HU,
  nrarrc: zU,
  nrarr: VU,
  nrArr: UU,
  nrarrw: WU,
  nrightarrow: jU,
  nRightarrow: GU,
  nrtri: YU,
  nrtrie: KU,
  nsc: JU,
  nsccue: ZU,
  nsce: XU,
  Nscr: QU,
  nscr: eW,
  nshortmid: tW,
  nshortparallel: nW,
  nsim: rW,
  nsime: iW,
  nsimeq: sW,
  nsmid: oW,
  nspar: lW,
  nsqsube: cW,
  nsqsupe: aW,
  nsub: hW,
  nsubE: uW,
  nsube: fW,
  nsubset: dW,
  nsubseteq: pW,
  nsubseteqq: gW,
  nsucc: mW,
  nsucceq: yW,
  nsup: bW,
  nsupE: vW,
  nsupe: wW,
  nsupset: xW,
  nsupseteq: kW,
  nsupseteqq: _W,
  ntgl: CW,
  Ntilde: SW,
  ntilde: AW,
  ntlg: EW,
  ntriangleleft: DW,
  ntrianglelefteq: TW,
  ntriangleright: MW,
  ntrianglerighteq: OW,
  Nu: LW,
  nu: RW,
  num: IW,
  numero: NW,
  numsp: BW,
  nvap: PW,
  nvdash: FW,
  nvDash: $W,
  nVdash: qW,
  nVDash: HW,
  nvge: zW,
  nvgt: VW,
  nvHarr: UW,
  nvinfin: WW,
  nvlArr: jW,
  nvle: GW,
  nvlt: YW,
  nvltrie: KW,
  nvrArr: JW,
  nvrtrie: ZW,
  nvsim: XW,
  nwarhk: QW,
  nwarr: ej,
  nwArr: tj,
  nwarrow: nj,
  nwnear: rj,
  Oacute: ij,
  oacute: sj,
  oast: oj,
  Ocirc: lj,
  ocirc: cj,
  ocir: aj,
  Ocy: hj,
  ocy: uj,
  odash: fj,
  Odblac: dj,
  odblac: pj,
  odiv: gj,
  odot: mj,
  odsold: yj,
  OElig: bj,
  oelig: vj,
  ofcir: wj,
  Ofr: xj,
  ofr: kj,
  ogon: _j,
  Ograve: Cj,
  ograve: Sj,
  ogt: Aj,
  ohbar: Ej,
  ohm: Dj,
  oint: Tj,
  olarr: Mj,
  olcir: Oj,
  olcross: Lj,
  oline: Rj,
  olt: Ij,
  Omacr: Nj,
  omacr: Bj,
  Omega: Pj,
  omega: Fj,
  Omicron: $j,
  omicron: qj,
  omid: Hj,
  ominus: zj,
  Oopf: Vj,
  oopf: Uj,
  opar: Wj,
  OpenCurlyDoubleQuote: jj,
  OpenCurlyQuote: Gj,
  operp: Yj,
  oplus: Kj,
  orarr: Jj,
  Or: Zj,
  or: Xj,
  ord: Qj,
  order: eG,
  orderof: tG,
  ordf: nG,
  ordm: rG,
  origof: iG,
  oror: sG,
  orslope: oG,
  orv: lG,
  oS: cG,
  Oscr: aG,
  oscr: hG,
  Oslash: uG,
  oslash: fG,
  osol: dG,
  Otilde: pG,
  otilde: gG,
  otimesas: mG,
  Otimes: yG,
  otimes: bG,
  Ouml: vG,
  ouml: wG,
  ovbar: xG,
  OverBar: kG,
  OverBrace: _G,
  OverBracket: CG,
  OverParenthesis: SG,
  para: AG,
  parallel: EG,
  par: DG,
  parsim: TG,
  parsl: MG,
  part: OG,
  PartialD: LG,
  Pcy: RG,
  pcy: IG,
  percnt: NG,
  period: BG,
  permil: PG,
  perp: FG,
  pertenk: $G,
  Pfr: qG,
  pfr: HG,
  Phi: zG,
  phi: VG,
  phiv: UG,
  phmmat: WG,
  phone: jG,
  Pi: GG,
  pi: YG,
  pitchfork: KG,
  piv: JG,
  planck: ZG,
  planckh: XG,
  plankv: QG,
  plusacir: eY,
  plusb: tY,
  pluscir: nY,
  plus: rY,
  plusdo: iY,
  plusdu: sY,
  pluse: oY,
  PlusMinus: lY,
  plusmn: cY,
  plussim: aY,
  plustwo: hY,
  pm: uY,
  Poincareplane: fY,
  pointint: dY,
  popf: pY,
  Popf: gY,
  pound: mY,
  prap: yY,
  Pr: bY,
  pr: vY,
  prcue: wY,
  precapprox: xY,
  prec: kY,
  preccurlyeq: _Y,
  Precedes: CY,
  PrecedesEqual: SY,
  PrecedesSlantEqual: AY,
  PrecedesTilde: EY,
  preceq: DY,
  precnapprox: TY,
  precneqq: MY,
  precnsim: OY,
  pre: LY,
  prE: RY,
  precsim: IY,
  prime: NY,
  Prime: BY,
  primes: PY,
  prnap: FY,
  prnE: $Y,
  prnsim: qY,
  prod: HY,
  Product: zY,
  profalar: VY,
  profline: UY,
  profsurf: WY,
  prop: jY,
  Proportional: GY,
  Proportion: YY,
  propto: KY,
  prsim: JY,
  prurel: ZY,
  Pscr: XY,
  pscr: QY,
  Psi: eK,
  psi: tK,
  puncsp: nK,
  Qfr: rK,
  qfr: iK,
  qint: sK,
  qopf: oK,
  Qopf: lK,
  qprime: cK,
  Qscr: aK,
  qscr: hK,
  quaternions: uK,
  quatint: fK,
  quest: dK,
  questeq: pK,
  quot: gK,
  QUOT: mK,
  rAarr: yK,
  race: bK,
  Racute: vK,
  racute: wK,
  radic: xK,
  raemptyv: kK,
  rang: _K,
  Rang: CK,
  rangd: SK,
  range: AK,
  rangle: EK,
  raquo: DK,
  rarrap: TK,
  rarrb: MK,
  rarrbfs: OK,
  rarrc: LK,
  rarr: RK,
  Rarr: IK,
  rArr: NK,
  rarrfs: BK,
  rarrhk: PK,
  rarrlp: FK,
  rarrpl: $K,
  rarrsim: qK,
  Rarrtl: HK,
  rarrtl: zK,
  rarrw: VK,
  ratail: UK,
  rAtail: WK,
  ratio: jK,
  rationals: GK,
  rbarr: YK,
  rBarr: KK,
  RBarr: JK,
  rbbrk: ZK,
  rbrace: XK,
  rbrack: QK,
  rbrke: eJ,
  rbrksld: tJ,
  rbrkslu: nJ,
  Rcaron: rJ,
  rcaron: iJ,
  Rcedil: sJ,
  rcedil: oJ,
  rceil: lJ,
  rcub: cJ,
  Rcy: aJ,
  rcy: hJ,
  rdca: uJ,
  rdldhar: fJ,
  rdquo: dJ,
  rdquor: pJ,
  rdsh: gJ,
  real: mJ,
  realine: yJ,
  realpart: bJ,
  reals: vJ,
  Re: wJ,
  rect: xJ,
  reg: kJ,
  REG: _J,
  ReverseElement: CJ,
  ReverseEquilibrium: SJ,
  ReverseUpEquilibrium: AJ,
  rfisht: EJ,
  rfloor: DJ,
  rfr: TJ,
  Rfr: MJ,
  rHar: OJ,
  rhard: LJ,
  rharu: RJ,
  rharul: IJ,
  Rho: NJ,
  rho: BJ,
  rhov: PJ,
  RightAngleBracket: FJ,
  RightArrowBar: $J,
  rightarrow: qJ,
  RightArrow: HJ,
  Rightarrow: zJ,
  RightArrowLeftArrow: VJ,
  rightarrowtail: UJ,
  RightCeiling: WJ,
  RightDoubleBracket: jJ,
  RightDownTeeVector: GJ,
  RightDownVectorBar: YJ,
  RightDownVector: KJ,
  RightFloor: JJ,
  rightharpoondown: ZJ,
  rightharpoonup: XJ,
  rightleftarrows: QJ,
  rightleftharpoons: eZ,
  rightrightarrows: tZ,
  rightsquigarrow: nZ,
  RightTeeArrow: rZ,
  RightTee: iZ,
  RightTeeVector: sZ,
  rightthreetimes: oZ,
  RightTriangleBar: lZ,
  RightTriangle: cZ,
  RightTriangleEqual: aZ,
  RightUpDownVector: hZ,
  RightUpTeeVector: uZ,
  RightUpVectorBar: fZ,
  RightUpVector: dZ,
  RightVectorBar: pZ,
  RightVector: gZ,
  ring: mZ,
  risingdotseq: yZ,
  rlarr: bZ,
  rlhar: vZ,
  rlm: wZ,
  rmoustache: xZ,
  rmoust: kZ,
  rnmid: _Z,
  roang: CZ,
  roarr: SZ,
  robrk: AZ,
  ropar: EZ,
  ropf: DZ,
  Ropf: TZ,
  roplus: MZ,
  rotimes: OZ,
  RoundImplies: LZ,
  rpar: RZ,
  rpargt: IZ,
  rppolint: NZ,
  rrarr: BZ,
  Rrightarrow: PZ,
  rsaquo: FZ,
  rscr: $Z,
  Rscr: qZ,
  rsh: HZ,
  Rsh: zZ,
  rsqb: VZ,
  rsquo: UZ,
  rsquor: WZ,
  rthree: jZ,
  rtimes: GZ,
  rtri: YZ,
  rtrie: KZ,
  rtrif: JZ,
  rtriltri: ZZ,
  RuleDelayed: XZ,
  ruluhar: QZ,
  rx: eX,
  Sacute: tX,
  sacute: nX,
  sbquo: rX,
  scap: iX,
  Scaron: sX,
  scaron: oX,
  Sc: lX,
  sc: cX,
  sccue: aX,
  sce: hX,
  scE: uX,
  Scedil: fX,
  scedil: dX,
  Scirc: pX,
  scirc: gX,
  scnap: mX,
  scnE: yX,
  scnsim: bX,
  scpolint: vX,
  scsim: wX,
  Scy: xX,
  scy: kX,
  sdotb: _X,
  sdot: CX,
  sdote: SX,
  searhk: AX,
  searr: EX,
  seArr: DX,
  searrow: TX,
  sect: MX,
  semi: OX,
  seswar: LX,
  setminus: RX,
  setmn: IX,
  sext: NX,
  Sfr: BX,
  sfr: PX,
  sfrown: FX,
  sharp: $X,
  SHCHcy: qX,
  shchcy: HX,
  SHcy: zX,
  shcy: VX,
  ShortDownArrow: UX,
  ShortLeftArrow: WX,
  shortmid: jX,
  shortparallel: GX,
  ShortRightArrow: YX,
  ShortUpArrow: KX,
  shy: JX,
  Sigma: ZX,
  sigma: XX,
  sigmaf: QX,
  sigmav: eQ,
  sim: tQ,
  simdot: nQ,
  sime: rQ,
  simeq: iQ,
  simg: sQ,
  simgE: oQ,
  siml: lQ,
  simlE: cQ,
  simne: aQ,
  simplus: hQ,
  simrarr: uQ,
  slarr: fQ,
  SmallCircle: dQ,
  smallsetminus: pQ,
  smashp: gQ,
  smeparsl: mQ,
  smid: yQ,
  smile: bQ,
  smt: vQ,
  smte: wQ,
  smtes: xQ,
  SOFTcy: kQ,
  softcy: _Q,
  solbar: CQ,
  solb: SQ,
  sol: AQ,
  Sopf: EQ,
  sopf: DQ,
  spades: TQ,
  spadesuit: MQ,
  spar: OQ,
  sqcap: LQ,
  sqcaps: RQ,
  sqcup: IQ,
  sqcups: NQ,
  Sqrt: BQ,
  sqsub: PQ,
  sqsube: FQ,
  sqsubset: $Q,
  sqsubseteq: qQ,
  sqsup: HQ,
  sqsupe: zQ,
  sqsupset: VQ,
  sqsupseteq: UQ,
  square: WQ,
  Square: jQ,
  SquareIntersection: GQ,
  SquareSubset: YQ,
  SquareSubsetEqual: KQ,
  SquareSuperset: JQ,
  SquareSupersetEqual: ZQ,
  SquareUnion: XQ,
  squarf: QQ,
  squ: eee,
  squf: tee,
  srarr: nee,
  Sscr: ree,
  sscr: iee,
  ssetmn: see,
  ssmile: oee,
  sstarf: lee,
  Star: cee,
  star: aee,
  starf: hee,
  straightepsilon: uee,
  straightphi: fee,
  strns: dee,
  sub: pee,
  Sub: gee,
  subdot: mee,
  subE: yee,
  sube: bee,
  subedot: vee,
  submult: wee,
  subnE: xee,
  subne: kee,
  subplus: _ee,
  subrarr: Cee,
  subset: See,
  Subset: Aee,
  subseteq: Eee,
  subseteqq: Dee,
  SubsetEqual: Tee,
  subsetneq: Mee,
  subsetneqq: Oee,
  subsim: Lee,
  subsub: Ree,
  subsup: Iee,
  succapprox: Nee,
  succ: Bee,
  succcurlyeq: Pee,
  Succeeds: Fee,
  SucceedsEqual: $ee,
  SucceedsSlantEqual: qee,
  SucceedsTilde: Hee,
  succeq: zee,
  succnapprox: Vee,
  succneqq: Uee,
  succnsim: Wee,
  succsim: jee,
  SuchThat: Gee,
  sum: Yee,
  Sum: Kee,
  sung: Jee,
  sup1: Zee,
  sup2: Xee,
  sup3: Qee,
  sup: ete,
  Sup: tte,
  supdot: nte,
  supdsub: rte,
  supE: ite,
  supe: ste,
  supedot: ote,
  Superset: lte,
  SupersetEqual: cte,
  suphsol: ate,
  suphsub: hte,
  suplarr: ute,
  supmult: fte,
  supnE: dte,
  supne: pte,
  supplus: gte,
  supset: mte,
  Supset: yte,
  supseteq: bte,
  supseteqq: vte,
  supsetneq: wte,
  supsetneqq: xte,
  supsim: kte,
  supsub: _te,
  supsup: Cte,
  swarhk: Ste,
  swarr: Ate,
  swArr: Ete,
  swarrow: Dte,
  swnwar: Tte,
  szlig: Mte,
  Tab: Ote,
  target: Lte,
  Tau: Rte,
  tau: Ite,
  tbrk: Nte,
  Tcaron: Bte,
  tcaron: Pte,
  Tcedil: Fte,
  tcedil: $te,
  Tcy: qte,
  tcy: Hte,
  tdot: zte,
  telrec: Vte,
  Tfr: Ute,
  tfr: Wte,
  there4: jte,
  therefore: Gte,
  Therefore: Yte,
  Theta: Kte,
  theta: Jte,
  thetasym: Zte,
  thetav: Xte,
  thickapprox: Qte,
  thicksim: ene,
  ThickSpace: tne,
  ThinSpace: nne,
  thinsp: rne,
  thkap: ine,
  thksim: sne,
  THORN: one,
  thorn: lne,
  tilde: cne,
  Tilde: ane,
  TildeEqual: hne,
  TildeFullEqual: une,
  TildeTilde: fne,
  timesbar: dne,
  timesb: pne,
  times: gne,
  timesd: mne,
  tint: yne,
  toea: bne,
  topbot: vne,
  topcir: wne,
  top: xne,
  Topf: kne,
  topf: _ne,
  topfork: Cne,
  tosa: Sne,
  tprime: Ane,
  trade: Ene,
  TRADE: Dne,
  triangle: Tne,
  triangledown: Mne,
  triangleleft: One,
  trianglelefteq: Lne,
  triangleq: Rne,
  triangleright: Ine,
  trianglerighteq: Nne,
  tridot: Bne,
  trie: Pne,
  triminus: Fne,
  TripleDot: $ne,
  triplus: qne,
  trisb: Hne,
  tritime: zne,
  trpezium: Vne,
  Tscr: Une,
  tscr: Wne,
  TScy: jne,
  tscy: Gne,
  TSHcy: Yne,
  tshcy: Kne,
  Tstrok: Jne,
  tstrok: Zne,
  twixt: Xne,
  twoheadleftarrow: Qne,
  twoheadrightarrow: ere,
  Uacute: tre,
  uacute: nre,
  uarr: rre,
  Uarr: ire,
  uArr: sre,
  Uarrocir: ore,
  Ubrcy: lre,
  ubrcy: cre,
  Ubreve: are,
  ubreve: hre,
  Ucirc: ure,
  ucirc: fre,
  Ucy: dre,
  ucy: pre,
  udarr: gre,
  Udblac: mre,
  udblac: yre,
  udhar: bre,
  ufisht: vre,
  Ufr: wre,
  ufr: xre,
  Ugrave: kre,
  ugrave: _re,
  uHar: Cre,
  uharl: Sre,
  uharr: Are,
  uhblk: Ere,
  ulcorn: Dre,
  ulcorner: Tre,
  ulcrop: Mre,
  ultri: Ore,
  Umacr: Lre,
  umacr: Rre,
  uml: Ire,
  UnderBar: Nre,
  UnderBrace: Bre,
  UnderBracket: Pre,
  UnderParenthesis: Fre,
  Union: $re,
  UnionPlus: qre,
  Uogon: Hre,
  uogon: zre,
  Uopf: Vre,
  uopf: Ure,
  UpArrowBar: Wre,
  uparrow: jre,
  UpArrow: Gre,
  Uparrow: Yre,
  UpArrowDownArrow: Kre,
  updownarrow: Jre,
  UpDownArrow: Zre,
  Updownarrow: Xre,
  UpEquilibrium: Qre,
  upharpoonleft: eie,
  upharpoonright: tie,
  uplus: nie,
  UpperLeftArrow: rie,
  UpperRightArrow: iie,
  upsi: sie,
  Upsi: oie,
  upsih: lie,
  Upsilon: cie,
  upsilon: aie,
  UpTeeArrow: hie,
  UpTee: uie,
  upuparrows: fie,
  urcorn: die,
  urcorner: pie,
  urcrop: gie,
  Uring: mie,
  uring: yie,
  urtri: bie,
  Uscr: vie,
  uscr: wie,
  utdot: xie,
  Utilde: kie,
  utilde: _ie,
  utri: Cie,
  utrif: Sie,
  uuarr: Aie,
  Uuml: Eie,
  uuml: Die,
  uwangle: Tie,
  vangrt: Mie,
  varepsilon: Oie,
  varkappa: Lie,
  varnothing: Rie,
  varphi: Iie,
  varpi: Nie,
  varpropto: Bie,
  varr: Pie,
  vArr: Fie,
  varrho: $ie,
  varsigma: qie,
  varsubsetneq: Hie,
  varsubsetneqq: zie,
  varsupsetneq: Vie,
  varsupsetneqq: Uie,
  vartheta: Wie,
  vartriangleleft: jie,
  vartriangleright: Gie,
  vBar: Yie,
  Vbar: Kie,
  vBarv: Jie,
  Vcy: Zie,
  vcy: Xie,
  vdash: Qie,
  vDash: ese,
  Vdash: tse,
  VDash: nse,
  Vdashl: rse,
  veebar: ise,
  vee: sse,
  Vee: ose,
  veeeq: lse,
  vellip: cse,
  verbar: ase,
  Verbar: hse,
  vert: use,
  Vert: fse,
  VerticalBar: dse,
  VerticalLine: pse,
  VerticalSeparator: gse,
  VerticalTilde: mse,
  VeryThinSpace: yse,
  Vfr: bse,
  vfr: vse,
  vltri: wse,
  vnsub: xse,
  vnsup: kse,
  Vopf: _se,
  vopf: Cse,
  vprop: Sse,
  vrtri: Ase,
  Vscr: Ese,
  vscr: Dse,
  vsubnE: Tse,
  vsubne: Mse,
  vsupnE: Ose,
  vsupne: Lse,
  Vvdash: Rse,
  vzigzag: Ise,
  Wcirc: Nse,
  wcirc: Bse,
  wedbar: Pse,
  wedge: Fse,
  Wedge: $se,
  wedgeq: qse,
  weierp: Hse,
  Wfr: zse,
  wfr: Vse,
  Wopf: Use,
  wopf: Wse,
  wp: jse,
  wr: Gse,
  wreath: Yse,
  Wscr: Kse,
  wscr: Jse,
  xcap: Zse,
  xcirc: Xse,
  xcup: Qse,
  xdtri: eoe,
  Xfr: toe,
  xfr: noe,
  xharr: roe,
  xhArr: ioe,
  Xi: soe,
  xi: ooe,
  xlarr: loe,
  xlArr: coe,
  xmap: aoe,
  xnis: hoe,
  xodot: uoe,
  Xopf: foe,
  xopf: doe,
  xoplus: poe,
  xotime: goe,
  xrarr: moe,
  xrArr: yoe,
  Xscr: boe,
  xscr: voe,
  xsqcup: woe,
  xuplus: xoe,
  xutri: koe,
  xvee: _oe,
  xwedge: Coe,
  Yacute: Soe,
  yacute: Aoe,
  YAcy: Eoe,
  yacy: Doe,
  Ycirc: Toe,
  ycirc: Moe,
  Ycy: Ooe,
  ycy: Loe,
  yen: Roe,
  Yfr: Ioe,
  yfr: Noe,
  YIcy: Boe,
  yicy: Poe,
  Yopf: Foe,
  yopf: $oe,
  Yscr: qoe,
  yscr: Hoe,
  YUcy: zoe,
  yucy: Voe,
  yuml: Uoe,
  Yuml: Woe,
  Zacute: joe,
  zacute: Goe,
  Zcaron: Yoe,
  zcaron: Koe,
  Zcy: Joe,
  zcy: Zoe,
  Zdot: Xoe,
  zdot: Qoe,
  zeetrf: ele,
  ZeroWidthSpace: tle,
  Zeta: nle,
  zeta: rle,
  zfr: ile,
  Zfr: sle,
  ZHcy: ole,
  zhcy: lle,
  zigrarr: cle,
  zopf: ale,
  Zopf: hle,
  Zscr: ule,
  zscr: fle,
  zwj: dle,
  zwnj: ple
};
(function(t) {
  t.exports = gle;
})(Sd);
var Ad = /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4E\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/, bs = {}, lm = {};
function mle(t) {
  var e, n, r = lm[t];
  if (r)
    return r;
  for (r = lm[t] = [], e = 0; e < 128; e++)
    n = String.fromCharCode(e), /^[0-9a-z]$/i.test(n) ? r.push(n) : r.push("%" + ("0" + e.toString(16).toUpperCase()).slice(-2));
  for (e = 0; e < t.length; e++)
    r[t.charCodeAt(e)] = t[e];
  return r;
}
function ma(t, e, n) {
  var r, i, s, o, l, c = "";
  for (typeof e != "string" && (n = e, e = ma.defaultChars), typeof n > "u" && (n = !0), l = mle(e), r = 0, i = t.length; r < i; r++) {
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
ma.defaultChars = ";/?:@&=+$,-_.!~*'()#";
ma.componentChars = "-_.!~*'()";
var yle = ma, cm = {};
function ble(t) {
  var e, n, r = cm[t];
  if (r)
    return r;
  for (r = cm[t] = [], e = 0; e < 128; e++)
    n = String.fromCharCode(e), r.push(n);
  for (e = 0; e < t.length; e++)
    n = t.charCodeAt(e), r[n] = "%" + ("0" + n.toString(16).toUpperCase()).slice(-2);
  return r;
}
function ya(t, e) {
  var n;
  return typeof e != "string" && (e = ya.defaultChars), n = ble(e), t.replace(/(%[a-f0-9]{2})+/gi, function(r) {
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
ya.defaultChars = ";/?:@&=+$,#";
ya.componentChars = "";
var vle = ya, wle = function(e) {
  var n = "";
  return n += e.protocol || "", n += e.slashes ? "//" : "", n += e.auth ? e.auth + "@" : "", e.hostname && e.hostname.indexOf(":") !== -1 ? n += "[" + e.hostname + "]" : n += e.hostname || "", n += e.port ? ":" + e.port : "", n += e.pathname || "", n += e.search || "", n += e.hash || "", n;
};
function kc() {
  this.protocol = null, this.slashes = null, this.auth = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.pathname = null;
}
var xle = /^([a-z0-9.+-]+:)/i, kle = /:[0-9]*$/, _le = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/, Cle = ["<", ">", '"', "`", " ", "\r", `
`, "	"], Sle = ["{", "}", "|", "\\", "^", "`"].concat(Cle), Ale = ["'"].concat(Sle), am = ["%", "/", "?", ";", "#"].concat(Ale), hm = ["/", "?", "#"], Ele = 255, um = /^[+a-z0-9A-Z_-]{0,63}$/, Dle = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, fm = {
  javascript: !0,
  "javascript:": !0
}, dm = {
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
function Tle(t, e) {
  if (t && t instanceof kc)
    return t;
  var n = new kc();
  return n.parse(t, e), n;
}
kc.prototype.parse = function(t, e) {
  var n, r, i, s, o, l = t;
  if (l = l.trim(), !e && t.split("#").length === 1) {
    var c = _le.exec(l);
    if (c)
      return this.pathname = c[1], c[2] && (this.search = c[2]), this;
  }
  var a = xle.exec(l);
  if (a && (a = a[0], i = a.toLowerCase(), this.protocol = a, l = l.substr(a.length)), (e || a || l.match(/^\/\/[^@\/]+@[^@\/]+/)) && (o = l.substr(0, 2) === "//", o && !(a && fm[a]) && (l = l.substr(2), this.slashes = !0)), !fm[a] && (o || a && !dm[a])) {
    var h = -1;
    for (n = 0; n < hm.length; n++)
      s = l.indexOf(hm[n]), s !== -1 && (h === -1 || s < h) && (h = s);
    var u, f;
    for (h === -1 ? f = l.lastIndexOf("@") : f = l.lastIndexOf("@", h), f !== -1 && (u = l.slice(0, f), l = l.slice(f + 1), this.auth = u), h = -1, n = 0; n < am.length; n++)
      s = l.indexOf(am[n]), s !== -1 && (h === -1 || s < h) && (h = s);
    h === -1 && (h = l.length), l[h - 1] === ":" && h--;
    var d = l.slice(0, h);
    l = l.slice(h), this.parseHost(d), this.hostname = this.hostname || "";
    var p = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
    if (!p) {
      var g = this.hostname.split(/\./);
      for (n = 0, r = g.length; n < r; n++) {
        var m = g[n];
        if (!!m && !m.match(um)) {
          for (var y = "", b = 0, k = m.length; b < k; b++)
            m.charCodeAt(b) > 127 ? y += "x" : y += m[b];
          if (!y.match(um)) {
            var v = g.slice(0, n), x = g.slice(n + 1), w = m.match(Dle);
            w && (v.push(w[1]), x.unshift(w[2])), x.length && (l = x.join(".") + l), this.hostname = v.join(".");
            break;
          }
        }
      }
    }
    this.hostname.length > Ele && (this.hostname = ""), p && (this.hostname = this.hostname.substr(1, this.hostname.length - 2));
  }
  var C = l.indexOf("#");
  C !== -1 && (this.hash = l.substr(C), l = l.slice(0, C));
  var I = l.indexOf("?");
  return I !== -1 && (this.search = l.substr(I), l = l.slice(0, I)), l && (this.pathname = l), dm[i] && this.hostname && !this.pathname && (this.pathname = ""), this;
};
kc.prototype.parseHost = function(t) {
  var e = kle.exec(t);
  e && (e = e[0], e !== ":" && (this.port = e.substr(1)), t = t.substr(0, t.length - e.length)), t && (this.hostname = t);
};
var Mle = Tle;
bs.encode = yle;
bs.decode = vle;
bs.format = wle;
bs.parse = Mle;
var Lr = {}, xh, pm;
function cv() {
  return pm || (pm = 1, xh = /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/), xh;
}
var kh, gm;
function av() {
  return gm || (gm = 1, kh = /[\0-\x1F\x7F-\x9F]/), kh;
}
var _h, mm;
function Ole() {
  return mm || (mm = 1, _h = /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/), _h;
}
var Ch, ym;
function hv() {
  return ym || (ym = 1, Ch = /[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/), Ch;
}
var bm;
function Lle() {
  return bm || (bm = 1, Lr.Any = cv(), Lr.Cc = av(), Lr.Cf = Ole(), Lr.P = Ad, Lr.Z = hv()), Lr;
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
    return U.forEach(function(H) {
      if (!!H) {
        if (typeof H != "object")
          throw new TypeError(H + "must be object");
        Object.keys(H).forEach(function(ye) {
          A[ye] = H[ye];
        });
      }
    }), A;
  }
  function o(A, U, H) {
    return [].concat(A.slice(0, U), H, A.slice(U + 1));
  }
  function l(A) {
    return !(A >= 55296 && A <= 57343 || A >= 64976 && A <= 65007 || (A & 65535) === 65535 || (A & 65535) === 65534 || A >= 0 && A <= 8 || A === 11 || A >= 14 && A <= 31 || A >= 127 && A <= 159 || A > 1114111);
  }
  function c(A) {
    if (A > 65535) {
      A -= 65536;
      var U = 55296 + (A >> 10), H = 56320 + (A & 1023);
      return String.fromCharCode(U, H);
    }
    return String.fromCharCode(A);
  }
  var a = /\\([!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~])/g, h = /&([a-z#][a-z0-9]{1,31});/gi, u = new RegExp(a.source + "|" + h.source, "gi"), f = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i, d = Sd.exports;
  function p(A, U) {
    var H = 0;
    return i(d, U) ? d[U] : U.charCodeAt(0) === 35 && f.test(U) && (H = U[1].toLowerCase() === "x" ? parseInt(U.slice(2), 16) : parseInt(U.slice(1), 10), l(H)) ? c(H) : A;
  }
  function g(A) {
    return A.indexOf("\\") < 0 ? A : A.replace(a, "$1");
  }
  function m(A) {
    return A.indexOf("\\") < 0 && A.indexOf("&") < 0 ? A : A.replace(u, function(U, H, ye) {
      return H || p(U, ye);
    });
  }
  var y = /[&<>"]/, b = /[&<>"]/g, k = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;"
  };
  function v(A) {
    return k[A];
  }
  function x(A) {
    return y.test(A) ? A.replace(b, v) : A;
  }
  var w = /[.?*+^$[\]\\(){}|-]/g;
  function C(A) {
    return A.replace(w, "\\$&");
  }
  function I(A) {
    switch (A) {
      case 9:
      case 32:
        return !0;
    }
    return !1;
  }
  function O(A) {
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
  var D = Ad;
  function V(A) {
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
  t.lib = {}, t.lib.mdurl = bs, t.lib.ucmicro = Lle(), t.assign = s, t.isString = n, t.has = i, t.unescapeMd = g, t.unescapeAll = m, t.isValidEntityCode = l, t.fromCodePoint = c, t.escapeHtml = x, t.arrayReplaceAt = o, t.isSpace = I, t.isWhiteSpace = O, t.isMdAsciiPunct = re, t.isPunctChar = V, t.escapeRE = C, t.normalizeReference = J;
})(ne);
var ba = {}, Rle = function(e, n, r) {
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
}, vm = ne.unescapeAll, Ile = function(e, n, r) {
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
        return c.pos = n + 1, c.str = vm(e.slice(l + 1, n)), c.ok = !0, c;
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
  return l === n || s !== 0 || (c.str = vm(e.slice(l, n)), c.lines = o, c.pos = n, c.ok = !0), c;
}, Nle = ne.unescapeAll, Ble = function(e, n, r) {
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
      return c.pos = n + 1, c.lines = o, c.str = Nle(e.slice(l + 1, n)), c.ok = !0, c;
    if (i === 40 && s === 41)
      return c;
    i === 10 ? o++ : i === 92 && n + 1 < r && (n++, e.charCodeAt(n) === 10 && o++), n++;
  }
  return c;
};
ba.parseLinkLabel = Rle;
ba.parseLinkDestination = Ile;
ba.parseLinkTitle = Ble;
var Ple = ne.assign, Fle = ne.unescapeAll, ti = ne.escapeHtml, En = {};
En.code_inline = function(t, e, n, r, i) {
  var s = t[e];
  return "<code" + i.renderAttrs(s) + ">" + ti(t[e].content) + "</code>";
};
En.code_block = function(t, e, n, r, i) {
  var s = t[e];
  return "<pre" + i.renderAttrs(s) + "><code>" + ti(t[e].content) + `</code></pre>
`;
};
En.fence = function(t, e, n, r, i) {
  var s = t[e], o = s.info ? Fle(s.info).trim() : "", l = "", c = "", a, h, u, f, d;
  return o && (u = o.split(/(\s+)/g), l = u[0], c = u.slice(2).join("")), n.highlight ? a = n.highlight(s.content, l, c) || ti(s.content) : a = ti(s.content), a.indexOf("<pre") === 0 ? a + `
` : o ? (h = s.attrIndex("class"), f = s.attrs ? s.attrs.slice() : [], h < 0 ? f.push(["class", n.langPrefix + l]) : (f[h] = f[h].slice(), f[h][1] += " " + n.langPrefix + l), d = {
    attrs: f
  }, "<pre><code" + i.renderAttrs(d) + ">" + a + `</code></pre>
`) : "<pre><code" + i.renderAttrs(s) + ">" + a + `</code></pre>
`;
};
En.image = function(t, e, n, r, i) {
  var s = t[e];
  return s.attrs[s.attrIndex("alt")][1] = i.renderInlineAsText(s.children, n, r), i.renderToken(t, e, n);
};
En.hardbreak = function(t, e, n) {
  return n.xhtmlOut ? `<br />
` : `<br>
`;
};
En.softbreak = function(t, e, n) {
  return n.breaks ? n.xhtmlOut ? `<br />
` : `<br>
` : `
`;
};
En.text = function(t, e) {
  return ti(t[e].content);
};
En.html_block = function(t, e) {
  return t[e].content;
};
En.html_inline = function(t, e) {
  return t[e].content;
};
function vs() {
  this.rules = Ple({}, En);
}
vs.prototype.renderAttrs = function(e) {
  var n, r, i;
  if (!e.attrs)
    return "";
  for (i = "", n = 0, r = e.attrs.length; n < r; n++)
    i += " " + ti(e.attrs[n][0]) + '="' + ti(e.attrs[n][1]) + '"';
  return i;
};
vs.prototype.renderToken = function(e, n, r) {
  var i, s = "", o = !1, l = e[n];
  return l.hidden ? "" : (l.block && l.nesting !== -1 && n && e[n - 1].hidden && (s += `
`), s += (l.nesting === -1 ? "</" : "<") + l.tag, s += this.renderAttrs(l), l.nesting === 0 && r.xhtmlOut && (s += " /"), l.block && (o = !0, l.nesting === 1 && n + 1 < e.length && (i = e[n + 1], (i.type === "inline" || i.hidden || i.nesting === -1 && i.tag === l.tag) && (o = !1))), s += o ? `>
` : ">", s);
};
vs.prototype.renderInline = function(t, e, n) {
  for (var r, i = "", s = this.rules, o = 0, l = t.length; o < l; o++)
    r = t[o].type, typeof s[r] < "u" ? i += s[r](t, o, e, n, this) : i += this.renderToken(t, o, e);
  return i;
};
vs.prototype.renderInlineAsText = function(t, e, n) {
  for (var r = "", i = 0, s = t.length; i < s; i++)
    t[i].type === "text" ? r += t[i].content : t[i].type === "image" ? r += this.renderInlineAsText(t[i].children, e, n) : t[i].type === "softbreak" && (r += `
`);
  return r;
};
vs.prototype.render = function(t, e, n) {
  var r, i, s, o = "", l = this.rules;
  for (r = 0, i = t.length; r < i; r++)
    s = t[r].type, s === "inline" ? o += this.renderInline(t[r].children, e, n) : typeof l[s] < "u" ? o += l[t[r].type](t, r, e, n, this) : o += this.renderToken(t, r, e, n);
  return o;
};
var $le = vs;
function Qt() {
  this.__rules__ = [], this.__cache__ = null;
}
Qt.prototype.__find__ = function(t) {
  for (var e = 0; e < this.__rules__.length; e++)
    if (this.__rules__[e].name === t)
      return e;
  return -1;
};
Qt.prototype.__compile__ = function() {
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
Qt.prototype.at = function(t, e, n) {
  var r = this.__find__(t), i = n || {};
  if (r === -1)
    throw new Error("Parser rule not found: " + t);
  this.__rules__[r].fn = e, this.__rules__[r].alt = i.alt || [], this.__cache__ = null;
};
Qt.prototype.before = function(t, e, n, r) {
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
Qt.prototype.after = function(t, e, n, r) {
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
Qt.prototype.push = function(t, e, n) {
  var r = n || {};
  this.__rules__.push({
    name: t,
    enabled: !0,
    fn: e,
    alt: r.alt || []
  }), this.__cache__ = null;
};
Qt.prototype.enable = function(t, e) {
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
Qt.prototype.enableOnly = function(t, e) {
  Array.isArray(t) || (t = [t]), this.__rules__.forEach(function(n) {
    n.enabled = !1;
  }), this.enable(t, e);
};
Qt.prototype.disable = function(t, e) {
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
Qt.prototype.getRules = function(t) {
  return this.__cache__ === null && this.__compile__(), this.__cache__[t] || [];
};
var Ed = Qt, qle = /\r\n?|\n/g, Hle = /\0/g, zle = function(e) {
  var n;
  n = e.src.replace(qle, `
`), n = n.replace(Hle, "\uFFFD"), e.src = n;
}, Vle = function(e) {
  var n;
  e.inlineMode ? (n = new e.Token("inline", "", 0), n.content = e.src, n.map = [0, 1], n.children = [], e.tokens.push(n)) : e.md.block.parse(e.src, e.md, e.env, e.tokens);
}, Ule = function(e) {
  var n = e.tokens, r, i, s;
  for (i = 0, s = n.length; i < s; i++)
    r = n[i], r.type === "inline" && e.md.inline.parse(r.content, e.md, e.env, r.children);
}, Wle = ne.arrayReplaceAt;
function jle(t) {
  return /^<a[>\s]/i.test(t);
}
function Gle(t) {
  return /^<\/a\s*>/i.test(t);
}
var Yle = function(e) {
  var n, r, i, s, o, l, c, a, h, u, f, d, p, g, m, y, b = e.tokens, k;
  if (!!e.md.options.linkify) {
    for (r = 0, i = b.length; r < i; r++)
      if (!(b[r].type !== "inline" || !e.md.linkify.pretest(b[r].content)))
        for (s = b[r].children, p = 0, n = s.length - 1; n >= 0; n--) {
          if (l = s[n], l.type === "link_close") {
            for (n--; s[n].level !== l.level && s[n].type !== "link_open"; )
              n--;
            continue;
          }
          if (l.type === "html_inline" && (jle(l.content) && p > 0 && p--, Gle(l.content) && p++), !(p > 0) && l.type === "text" && e.md.linkify.test(l.content)) {
            for (h = l.content, k = e.md.linkify.match(h), c = [], d = l.level, f = 0, a = 0; a < k.length; a++)
              g = k[a].url, m = e.md.normalizeLink(g), e.md.validateLink(m) && (y = k[a].text, k[a].schema ? k[a].schema === "mailto:" && !/^mailto:/i.test(y) ? y = e.md.normalizeLinkText("mailto:" + y).replace(/^mailto:/, "") : y = e.md.normalizeLinkText(y) : y = e.md.normalizeLinkText("http://" + y).replace(/^http:\/\//, ""), u = k[a].index, u > f && (o = new e.Token("text", "", 0), o.content = h.slice(f, u), o.level = d, c.push(o)), o = new e.Token("link_open", "a", 1), o.attrs = [["href", m]], o.level = d++, o.markup = "linkify", o.info = "auto", c.push(o), o = new e.Token("text", "", 0), o.content = y, o.level = d, c.push(o), o = new e.Token("link_close", "a", -1), o.level = --d, o.markup = "linkify", o.info = "auto", c.push(o), f = k[a].lastIndex);
            f < h.length && (o = new e.Token("text", "", 0), o.content = h.slice(f), o.level = d, c.push(o)), b[r].children = s = Wle(s, n, c);
          }
        }
  }
}, uv = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/, Kle = /\((c|tm|r|p)\)/i, Jle = /\((c|tm|r|p)\)/ig, Zle = {
  c: "\xA9",
  r: "\xAE",
  p: "\xA7",
  tm: "\u2122"
};
function Xle(t, e) {
  return Zle[e.toLowerCase()];
}
function Qle(t) {
  var e, n, r = 0;
  for (e = t.length - 1; e >= 0; e--)
    n = t[e], n.type === "text" && !r && (n.content = n.content.replace(Jle, Xle)), n.type === "link_open" && n.info === "auto" && r--, n.type === "link_close" && n.info === "auto" && r++;
}
function ece(t) {
  var e, n, r = 0;
  for (e = t.length - 1; e >= 0; e--)
    n = t[e], n.type === "text" && !r && uv.test(n.content) && (n.content = n.content.replace(/\+-/g, "\xB1").replace(/\.{2,}/g, "\u2026").replace(/([?!])…/g, "$1..").replace(/([?!]){4,}/g, "$1$1$1").replace(/,{2,}/g, ",").replace(/(^|[^-])---(?=[^-]|$)/mg, "$1\u2014").replace(/(^|\s)--(?=\s|$)/mg, "$1\u2013").replace(/(^|[^-\s])--(?=[^-\s]|$)/mg, "$1\u2013")), n.type === "link_open" && n.info === "auto" && r--, n.type === "link_close" && n.info === "auto" && r++;
}
var tce = function(e) {
  var n;
  if (!!e.md.options.typographer)
    for (n = e.tokens.length - 1; n >= 0; n--)
      e.tokens[n].type === "inline" && (Kle.test(e.tokens[n].content) && Qle(e.tokens[n].children), uv.test(e.tokens[n].content) && ece(e.tokens[n].children));
}, wm = ne.isWhiteSpace, xm = ne.isPunctChar, km = ne.isMdAsciiPunct, nce = /['"]/, _m = /['"]/g, Cm = "\u2019";
function al(t, e, n) {
  return t.substr(0, e) + n + t.substr(e + 1);
}
function rce(t, e) {
  var n, r, i, s, o, l, c, a, h, u, f, d, p, g, m, y, b, k, v, x, w;
  for (v = [], n = 0; n < t.length; n++) {
    for (r = t[n], c = t[n].level, b = v.length - 1; b >= 0 && !(v[b].level <= c); b--)
      ;
    if (v.length = b + 1, r.type !== "text")
      continue;
    i = r.content, o = 0, l = i.length;
    e:
      for (; o < l && (_m.lastIndex = o, s = _m.exec(i), !!s); ) {
        if (m = y = !0, o = s.index + 1, k = s[0] === "'", h = 32, s.index - 1 >= 0)
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
        if (f = km(h) || xm(String.fromCharCode(h)), d = km(u) || xm(String.fromCharCode(u)), p = wm(h), g = wm(u), g ? m = !1 : d && (p || f || (m = !1)), p ? y = !1 : f && (g || d || (y = !1)), u === 34 && s[0] === '"' && h >= 48 && h <= 57 && (y = m = !1), m && y && (m = f, y = d), !m && !y) {
          k && (r.content = al(r.content, s.index, Cm));
          continue;
        }
        if (y) {
          for (b = v.length - 1; b >= 0 && (a = v[b], !(v[b].level < c)); b--)
            if (a.single === k && v[b].level === c) {
              a = v[b], k ? (x = e.md.options.quotes[2], w = e.md.options.quotes[3]) : (x = e.md.options.quotes[0], w = e.md.options.quotes[1]), r.content = al(r.content, s.index, w), t[a.token].content = al(
                t[a.token].content,
                a.pos,
                x
              ), o += w.length - 1, a.token === n && (o += x.length - 1), i = r.content, l = i.length, v.length = b;
              continue e;
            }
        }
        m ? v.push({
          token: n,
          pos: s.index,
          single: k,
          level: c
        }) : y && k && (r.content = al(r.content, s.index, Cm));
      }
  }
}
var ice = function(e) {
  var n;
  if (!!e.md.options.typographer)
    for (n = e.tokens.length - 1; n >= 0; n--)
      e.tokens[n].type !== "inline" || !nce.test(e.tokens[n].content) || rce(e.tokens[n].children, e);
};
function ws(t, e, n) {
  this.type = t, this.tag = e, this.attrs = null, this.map = null, this.nesting = n, this.level = 0, this.children = null, this.content = "", this.markup = "", this.info = "", this.meta = null, this.block = !1, this.hidden = !1;
}
ws.prototype.attrIndex = function(e) {
  var n, r, i;
  if (!this.attrs)
    return -1;
  for (n = this.attrs, r = 0, i = n.length; r < i; r++)
    if (n[r][0] === e)
      return r;
  return -1;
};
ws.prototype.attrPush = function(e) {
  this.attrs ? this.attrs.push(e) : this.attrs = [e];
};
ws.prototype.attrSet = function(e, n) {
  var r = this.attrIndex(e), i = [e, n];
  r < 0 ? this.attrPush(i) : this.attrs[r] = i;
};
ws.prototype.attrGet = function(e) {
  var n = this.attrIndex(e), r = null;
  return n >= 0 && (r = this.attrs[n][1]), r;
};
ws.prototype.attrJoin = function(e, n) {
  var r = this.attrIndex(e);
  r < 0 ? this.attrPush([e, n]) : this.attrs[r][1] = this.attrs[r][1] + " " + n;
};
var Dd = ws, sce = Dd;
function fv(t, e, n) {
  this.src = t, this.env = n, this.tokens = [], this.inlineMode = !1, this.md = e;
}
fv.prototype.Token = sce;
var oce = fv, lce = Ed, Sh = [
  ["normalize", zle],
  ["block", Vle],
  ["inline", Ule],
  ["linkify", Yle],
  ["replacements", tce],
  ["smartquotes", ice]
];
function Td() {
  this.ruler = new lce();
  for (var t = 0; t < Sh.length; t++)
    this.ruler.push(Sh[t][0], Sh[t][1]);
}
Td.prototype.process = function(t) {
  var e, n, r;
  for (r = this.ruler.getRules(""), e = 0, n = r.length; e < n; e++)
    r[e](t);
};
Td.prototype.State = oce;
var cce = Td, Ah = ne.isSpace;
function Eh(t, e) {
  var n = t.bMarks[e] + t.tShift[e], r = t.eMarks[e];
  return t.src.substr(n, r - n);
}
function Sm(t) {
  var e = [], n = 0, r = t.length, i, s = !1, o = 0, l = "";
  for (i = t.charCodeAt(n); n < r; )
    i === 124 && (s ? (l += t.substring(o, n - 1), o = n) : (e.push(l + t.substring(o, n)), l = "", o = n + 1)), s = i === 92, n++, i = t.charCodeAt(n);
  return e.push(l + t.substring(o)), e;
}
var ace = function(e, n, r, i) {
  var s, o, l, c, a, h, u, f, d, p, g, m, y, b, k, v, x, w;
  if (n + 2 > r || (h = n + 1, e.sCount[h] < e.blkIndent) || e.sCount[h] - e.blkIndent >= 4 || (l = e.bMarks[h] + e.tShift[h], l >= e.eMarks[h]) || (x = e.src.charCodeAt(l++), x !== 124 && x !== 45 && x !== 58) || l >= e.eMarks[h] || (w = e.src.charCodeAt(l++), w !== 124 && w !== 45 && w !== 58 && !Ah(w)) || x === 45 && Ah(w))
    return !1;
  for (; l < e.eMarks[h]; ) {
    if (s = e.src.charCodeAt(l), s !== 124 && s !== 45 && s !== 58 && !Ah(s))
      return !1;
    l++;
  }
  for (o = Eh(e, n + 1), u = o.split("|"), p = [], c = 0; c < u.length; c++) {
    if (g = u[c].trim(), !g) {
      if (c === 0 || c === u.length - 1)
        continue;
      return !1;
    }
    if (!/^:?-+:?$/.test(g))
      return !1;
    g.charCodeAt(g.length - 1) === 58 ? p.push(g.charCodeAt(0) === 58 ? "center" : "right") : g.charCodeAt(0) === 58 ? p.push("left") : p.push("");
  }
  if (o = Eh(e, n).trim(), o.indexOf("|") === -1 || e.sCount[n] - e.blkIndent >= 4 || (u = Sm(o), u.length && u[0] === "" && u.shift(), u.length && u[u.length - 1] === "" && u.pop(), f = u.length, f === 0 || f !== p.length))
    return !1;
  if (i)
    return !0;
  for (b = e.parentType, e.parentType = "table", v = e.md.block.ruler.getRules("blockquote"), d = e.push("table_open", "table", 1), d.map = m = [n, 0], d = e.push("thead_open", "thead", 1), d.map = [n, n + 1], d = e.push("tr_open", "tr", 1), d.map = [n, n + 1], c = 0; c < u.length; c++)
    d = e.push("th_open", "th", 1), p[c] && (d.attrs = [["style", "text-align:" + p[c]]]), d = e.push("inline", "", 0), d.content = u[c].trim(), d.children = [], d = e.push("th_close", "th", -1);
  for (d = e.push("tr_close", "tr", -1), d = e.push("thead_close", "thead", -1), h = n + 2; h < r && !(e.sCount[h] < e.blkIndent); h++) {
    for (k = !1, c = 0, a = v.length; c < a; c++)
      if (v[c](e, h, r, !0)) {
        k = !0;
        break;
      }
    if (k || (o = Eh(e, h).trim(), !o) || e.sCount[h] - e.blkIndent >= 4)
      break;
    for (u = Sm(o), u.length && u[0] === "" && u.shift(), u.length && u[u.length - 1] === "" && u.pop(), h === n + 2 && (d = e.push("tbody_open", "tbody", 1), d.map = y = [n + 2, 0]), d = e.push("tr_open", "tr", 1), d.map = [h, h + 1], c = 0; c < f; c++)
      d = e.push("td_open", "td", 1), p[c] && (d.attrs = [["style", "text-align:" + p[c]]]), d = e.push("inline", "", 0), d.content = u[c] ? u[c].trim() : "", d.children = [], d = e.push("td_close", "td", -1);
    d = e.push("tr_close", "tr", -1);
  }
  return y && (d = e.push("tbody_close", "tbody", -1), y[1] = h), d = e.push("table_close", "table", -1), m[1] = h, e.parentType = b, e.line = h, !0;
}, hce = function(e, n, r) {
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
}, uce = function(e, n, r, i) {
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
}, Am = ne.isSpace, fce = function(e, n, r, i) {
  var s, o, l, c, a, h, u, f, d, p, g, m, y, b, k, v, x, w, C, I, O = e.lineMax, D = e.bMarks[n] + e.tShift[n], V = e.eMarks[n];
  if (e.sCount[n] - e.blkIndent >= 4 || e.src.charCodeAt(D++) !== 62)
    return !1;
  if (i)
    return !0;
  for (c = d = e.sCount[n] + 1, e.src.charCodeAt(D) === 32 ? (D++, c++, d++, s = !1, v = !0) : e.src.charCodeAt(D) === 9 ? (v = !0, (e.bsCount[n] + d) % 4 === 3 ? (D++, c++, d++, s = !1) : s = !0) : v = !1, p = [e.bMarks[n]], e.bMarks[n] = D; D < V && (o = e.src.charCodeAt(D), Am(o)); ) {
    o === 9 ? d += 4 - (d + e.bsCount[n] + (s ? 1 : 0)) % 4 : d++;
    D++;
  }
  for (g = [e.bsCount[n]], e.bsCount[n] = e.sCount[n] + 1 + (v ? 1 : 0), h = D >= V, b = [e.sCount[n]], e.sCount[n] = d - c, k = [e.tShift[n]], e.tShift[n] = D - e.bMarks[n], w = e.md.block.ruler.getRules("blockquote"), y = e.parentType, e.parentType = "blockquote", f = n + 1; f < r && (I = e.sCount[f] < e.blkIndent, D = e.bMarks[f] + e.tShift[f], V = e.eMarks[f], !(D >= V)); f++) {
    if (e.src.charCodeAt(D++) === 62 && !I) {
      for (c = d = e.sCount[f] + 1, e.src.charCodeAt(D) === 32 ? (D++, c++, d++, s = !1, v = !0) : e.src.charCodeAt(D) === 9 ? (v = !0, (e.bsCount[f] + d) % 4 === 3 ? (D++, c++, d++, s = !1) : s = !0) : v = !1, p.push(e.bMarks[f]), e.bMarks[f] = D; D < V && (o = e.src.charCodeAt(D), Am(o)); ) {
        o === 9 ? d += 4 - (d + e.bsCount[f] + (s ? 1 : 0)) % 4 : d++;
        D++;
      }
      h = D >= V, g.push(e.bsCount[f]), e.bsCount[f] = e.sCount[f] + 1 + (v ? 1 : 0), b.push(e.sCount[f]), e.sCount[f] = d - c, k.push(e.tShift[f]), e.tShift[f] = D - e.bMarks[f];
      continue;
    }
    if (h)
      break;
    for (x = !1, l = 0, a = w.length; l < a; l++)
      if (w[l](e, f, r, !0)) {
        x = !0;
        break;
      }
    if (x) {
      e.lineMax = f, e.blkIndent !== 0 && (p.push(e.bMarks[f]), g.push(e.bsCount[f]), k.push(e.tShift[f]), b.push(e.sCount[f]), e.sCount[f] -= e.blkIndent);
      break;
    }
    p.push(e.bMarks[f]), g.push(e.bsCount[f]), k.push(e.tShift[f]), b.push(e.sCount[f]), e.sCount[f] = -1;
  }
  for (m = e.blkIndent, e.blkIndent = 0, C = e.push("blockquote_open", "blockquote", 1), C.markup = ">", C.map = u = [n, 0], e.md.block.tokenize(e, n, f), C = e.push("blockquote_close", "blockquote", -1), C.markup = ">", e.lineMax = O, e.parentType = y, u[1] = e.line, l = 0; l < k.length; l++)
    e.bMarks[l + n] = p[l], e.tShift[l + n] = k[l], e.sCount[l + n] = b[l], e.bsCount[l + n] = g[l];
  return e.blkIndent = m, !0;
}, dce = ne.isSpace, pce = function(e, n, r, i) {
  var s, o, l, c, a = e.bMarks[n] + e.tShift[n], h = e.eMarks[n];
  if (e.sCount[n] - e.blkIndent >= 4 || (s = e.src.charCodeAt(a++), s !== 42 && s !== 45 && s !== 95))
    return !1;
  for (o = 1; a < h; ) {
    if (l = e.src.charCodeAt(a++), l !== s && !dce(l))
      return !1;
    l === s && o++;
  }
  return o < 3 ? !1 : (i || (e.line = n + 1, c = e.push("hr", "hr", 0), c.map = [n, e.line], c.markup = Array(o + 1).join(String.fromCharCode(s))), !0);
}, dv = ne.isSpace;
function Em(t, e) {
  var n, r, i, s;
  return r = t.bMarks[e] + t.tShift[e], i = t.eMarks[e], n = t.src.charCodeAt(r++), n !== 42 && n !== 45 && n !== 43 || r < i && (s = t.src.charCodeAt(r), !dv(s)) ? -1 : r;
}
function Dm(t, e) {
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
  return i < s && (n = t.src.charCodeAt(i), !dv(n)) ? -1 : i;
}
function gce(t, e) {
  var n, r, i = t.level + 2;
  for (n = e + 2, r = t.tokens.length - 2; n < r; n++)
    t.tokens[n].level === i && t.tokens[n].type === "paragraph_open" && (t.tokens[n + 2].hidden = !0, t.tokens[n].hidden = !0, n += 2);
}
var mce = function(e, n, r, i) {
  var s, o, l, c, a, h, u, f, d, p, g, m, y, b, k, v, x, w, C, I, O, D, V, re, J, A, U, H, ye = !1, le = !0;
  if (e.sCount[n] - e.blkIndent >= 4 || e.listIndent >= 0 && e.sCount[n] - e.listIndent >= 4 && e.sCount[n] < e.blkIndent)
    return !1;
  if (i && e.parentType === "paragraph" && e.sCount[n] >= e.blkIndent && (ye = !0), (V = Dm(e, n)) >= 0) {
    if (u = !0, J = e.bMarks[n] + e.tShift[n], y = Number(e.src.slice(J, V - 1)), ye && y !== 1)
      return !1;
  } else if ((V = Em(e, n)) >= 0)
    u = !1;
  else
    return !1;
  if (ye && e.skipSpaces(V) >= e.eMarks[n])
    return !1;
  if (m = e.src.charCodeAt(V - 1), i)
    return !0;
  for (g = e.tokens.length, u ? (H = e.push("ordered_list_open", "ol", 1), y !== 1 && (H.attrs = [["start", y]])) : H = e.push("bullet_list_open", "ul", 1), H.map = p = [n, 0], H.markup = String.fromCharCode(m), k = n, re = !1, U = e.md.block.ruler.getRules("list"), w = e.parentType, e.parentType = "list"; k < r; ) {
    for (D = V, b = e.eMarks[k], h = v = e.sCount[k] + V - (e.bMarks[n] + e.tShift[n]); D < b; ) {
      if (s = e.src.charCodeAt(D), s === 9)
        v += 4 - (v + e.bsCount[k]) % 4;
      else if (s === 32)
        v++;
      else
        break;
      D++;
    }
    if (o = D, o >= b ? a = 1 : a = v - h, a > 4 && (a = 1), c = h + a, H = e.push("list_item_open", "li", 1), H.markup = String.fromCharCode(m), H.map = f = [n, 0], u && (H.info = e.src.slice(J, V - 1)), O = e.tight, I = e.tShift[n], C = e.sCount[n], x = e.listIndent, e.listIndent = e.blkIndent, e.blkIndent = c, e.tight = !0, e.tShift[n] = o - e.bMarks[n], e.sCount[n] = v, o >= b && e.isEmpty(n + 1) ? e.line = Math.min(e.line + 2, r) : e.md.block.tokenize(e, n, r, !0), (!e.tight || re) && (le = !1), re = e.line - n > 1 && e.isEmpty(e.line - 1), e.blkIndent = e.listIndent, e.listIndent = x, e.tShift[n] = I, e.sCount[n] = C, e.tight = O, H = e.push("list_item_close", "li", -1), H.markup = String.fromCharCode(m), k = n = e.line, f[1] = k, o = e.bMarks[n], k >= r || e.sCount[k] < e.blkIndent || e.sCount[n] - e.blkIndent >= 4)
      break;
    for (A = !1, l = 0, d = U.length; l < d; l++)
      if (U[l](e, k, r, !0)) {
        A = !0;
        break;
      }
    if (A)
      break;
    if (u) {
      if (V = Dm(e, k), V < 0)
        break;
      J = e.bMarks[k] + e.tShift[k];
    } else if (V = Em(e, k), V < 0)
      break;
    if (m !== e.src.charCodeAt(V - 1))
      break;
  }
  return u ? H = e.push("ordered_list_close", "ol", -1) : H = e.push("bullet_list_close", "ul", -1), H.markup = String.fromCharCode(m), p[1] = k, e.line = k, e.parentType = w, le && gce(e, g), !0;
}, yce = ne.normalizeReference, hl = ne.isSpace, bce = function(e, n, r, i) {
  var s, o, l, c, a, h, u, f, d, p, g, m, y, b, k, v, x = 0, w = e.bMarks[n] + e.tShift[n], C = e.eMarks[n], I = n + 1;
  if (e.sCount[n] - e.blkIndent >= 4 || e.src.charCodeAt(w) !== 91)
    return !1;
  for (; ++w < C; )
    if (e.src.charCodeAt(w) === 93 && e.src.charCodeAt(w - 1) !== 92) {
      if (w + 1 === C || e.src.charCodeAt(w + 1) !== 58)
        return !1;
      break;
    }
  for (c = e.lineMax, k = e.md.block.ruler.getRules("reference"), p = e.parentType, e.parentType = "reference"; I < c && !e.isEmpty(I); I++)
    if (!(e.sCount[I] - e.blkIndent > 3) && !(e.sCount[I] < 0)) {
      for (b = !1, h = 0, u = k.length; h < u; h++)
        if (k[h](e, I, c, !0)) {
          b = !0;
          break;
        }
      if (b)
        break;
    }
  for (y = e.getLines(n, I, e.blkIndent, !1).trim(), C = y.length, w = 1; w < C; w++) {
    if (s = y.charCodeAt(w), s === 91)
      return !1;
    if (s === 93) {
      d = w;
      break;
    } else
      s === 10 ? x++ : s === 92 && (w++, w < C && y.charCodeAt(w) === 10 && x++);
  }
  if (d < 0 || y.charCodeAt(d + 1) !== 58)
    return !1;
  for (w = d + 2; w < C; w++)
    if (s = y.charCodeAt(w), s === 10)
      x++;
    else if (!hl(s))
      break;
  if (g = e.md.helpers.parseLinkDestination(y, w, C), !g.ok || (a = e.md.normalizeLink(g.str), !e.md.validateLink(a)))
    return !1;
  for (w = g.pos, x += g.lines, o = w, l = x, m = w; w < C; w++)
    if (s = y.charCodeAt(w), s === 10)
      x++;
    else if (!hl(s))
      break;
  for (g = e.md.helpers.parseLinkTitle(y, w, C), w < C && m !== w && g.ok ? (v = g.str, w = g.pos, x += g.lines) : (v = "", w = o, x = l); w < C && (s = y.charCodeAt(w), !!hl(s)); )
    w++;
  if (w < C && y.charCodeAt(w) !== 10 && v)
    for (v = "", w = o, x = l; w < C && (s = y.charCodeAt(w), !!hl(s)); )
      w++;
  return w < C && y.charCodeAt(w) !== 10 || (f = yce(y.slice(1, d)), !f) ? !1 : (i || (typeof e.env.references > "u" && (e.env.references = {}), typeof e.env.references[f] > "u" && (e.env.references[f] = { title: v, href: a }), e.parentType = p, e.line = n + x + 1), !0);
}, vce = [
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
], va = {}, wce = "[a-zA-Z_:][a-zA-Z0-9:._-]*", xce = "[^\"'=<>`\\x00-\\x20]+", kce = "'[^']*'", _ce = '"[^"]*"', Cce = "(?:" + xce + "|" + kce + "|" + _ce + ")", Sce = "(?:\\s+" + wce + "(?:\\s*=\\s*" + Cce + ")?)", pv = "<[A-Za-z][A-Za-z0-9\\-]*" + Sce + "*\\s*\\/?>", gv = "<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>", Ace = "<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->", Ece = "<[?][\\s\\S]*?[?]>", Dce = "<![A-Z]+\\s+[^>]*>", Tce = "<!\\[CDATA\\[[\\s\\S]*?\\]\\]>", Mce = new RegExp("^(?:" + pv + "|" + gv + "|" + Ace + "|" + Ece + "|" + Dce + "|" + Tce + ")"), Oce = new RegExp("^(?:" + pv + "|" + gv + ")");
va.HTML_TAG_RE = Mce;
va.HTML_OPEN_CLOSE_TAG_RE = Oce;
var Lce = vce, Rce = va.HTML_OPEN_CLOSE_TAG_RE, ki = [
  [/^<(script|pre|style|textarea)(?=(\s|>|$))/i, /<\/(script|pre|style|textarea)>/i, !0],
  [/^<!--/, /-->/, !0],
  [/^<\?/, /\?>/, !0],
  [/^<![A-Z]/, />/, !0],
  [/^<!\[CDATA\[/, /\]\]>/, !0],
  [new RegExp("^</?(" + Lce.join("|") + ")(?=(\\s|/?>|$))", "i"), /^$/, !0],
  [new RegExp(Rce.source + "\\s*$"), /^$/, !1]
], Ice = function(e, n, r, i) {
  var s, o, l, c, a = e.bMarks[n] + e.tShift[n], h = e.eMarks[n];
  if (e.sCount[n] - e.blkIndent >= 4 || !e.md.options.html || e.src.charCodeAt(a) !== 60)
    return !1;
  for (c = e.src.slice(a, h), s = 0; s < ki.length && !ki[s][0].test(c); s++)
    ;
  if (s === ki.length)
    return !1;
  if (i)
    return ki[s][2];
  if (o = n + 1, !ki[s][1].test(c)) {
    for (; o < r && !(e.sCount[o] < e.blkIndent); o++)
      if (a = e.bMarks[o] + e.tShift[o], h = e.eMarks[o], c = e.src.slice(a, h), ki[s][1].test(c)) {
        c.length !== 0 && o++;
        break;
      }
  }
  return e.line = o, l = e.push("html_block", "", 0), l.map = [n, o], l.content = e.getLines(n, o, e.blkIndent, !0), !0;
}, Tm = ne.isSpace, Nce = function(e, n, r, i) {
  var s, o, l, c, a = e.bMarks[n] + e.tShift[n], h = e.eMarks[n];
  if (e.sCount[n] - e.blkIndent >= 4 || (s = e.src.charCodeAt(a), s !== 35 || a >= h))
    return !1;
  for (o = 1, s = e.src.charCodeAt(++a); s === 35 && a < h && o <= 6; )
    o++, s = e.src.charCodeAt(++a);
  return o > 6 || a < h && !Tm(s) ? !1 : (i || (h = e.skipSpacesBack(h, a), l = e.skipCharsBack(h, 35, a), l > a && Tm(e.src.charCodeAt(l - 1)) && (h = l), e.line = n + 1, c = e.push("heading_open", "h" + String(o), 1), c.markup = "########".slice(0, o), c.map = [n, e.line], c = e.push("inline", "", 0), c.content = e.src.slice(a, h).trim(), c.map = [n, e.line], c.children = [], c = e.push("heading_close", "h" + String(o), -1), c.markup = "########".slice(0, o)), !0);
}, Bce = function(e, n, r) {
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
}, Pce = function(e, n) {
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
}, mv = Dd, wa = ne.isSpace;
function Dn(t, e, n, r) {
  var i, s, o, l, c, a, h, u;
  for (this.src = t, this.md = e, this.env = n, this.tokens = r, this.bMarks = [], this.eMarks = [], this.tShift = [], this.sCount = [], this.bsCount = [], this.blkIndent = 0, this.line = 0, this.lineMax = 0, this.tight = !1, this.ddIndent = -1, this.listIndent = -1, this.parentType = "root", this.level = 0, this.result = "", s = this.src, u = !1, o = l = a = h = 0, c = s.length; l < c; l++) {
    if (i = s.charCodeAt(l), !u)
      if (wa(i)) {
        a++, i === 9 ? h += 4 - h % 4 : h++;
        continue;
      } else
        u = !0;
    (i === 10 || l === c - 1) && (i !== 10 && l++, this.bMarks.push(o), this.eMarks.push(l), this.tShift.push(a), this.sCount.push(h), this.bsCount.push(0), u = !1, a = 0, h = 0, o = l + 1);
  }
  this.bMarks.push(s.length), this.eMarks.push(s.length), this.tShift.push(0), this.sCount.push(0), this.bsCount.push(0), this.lineMax = this.bMarks.length - 1;
}
Dn.prototype.push = function(t, e, n) {
  var r = new mv(t, e, n);
  return r.block = !0, n < 0 && this.level--, r.level = this.level, n > 0 && this.level++, this.tokens.push(r), r;
};
Dn.prototype.isEmpty = function(e) {
  return this.bMarks[e] + this.tShift[e] >= this.eMarks[e];
};
Dn.prototype.skipEmptyLines = function(e) {
  for (var n = this.lineMax; e < n && !(this.bMarks[e] + this.tShift[e] < this.eMarks[e]); e++)
    ;
  return e;
};
Dn.prototype.skipSpaces = function(e) {
  for (var n, r = this.src.length; e < r && (n = this.src.charCodeAt(e), !!wa(n)); e++)
    ;
  return e;
};
Dn.prototype.skipSpacesBack = function(e, n) {
  if (e <= n)
    return e;
  for (; e > n; )
    if (!wa(this.src.charCodeAt(--e)))
      return e + 1;
  return e;
};
Dn.prototype.skipChars = function(e, n) {
  for (var r = this.src.length; e < r && this.src.charCodeAt(e) === n; e++)
    ;
  return e;
};
Dn.prototype.skipCharsBack = function(e, n, r) {
  if (e <= r)
    return e;
  for (; e > r; )
    if (n !== this.src.charCodeAt(--e))
      return e + 1;
  return e;
};
Dn.prototype.getLines = function(e, n, r, i) {
  var s, o, l, c, a, h, u, f = e;
  if (e >= n)
    return "";
  for (h = new Array(n - e), s = 0; f < n; f++, s++) {
    for (o = 0, u = c = this.bMarks[f], f + 1 < n || i ? a = this.eMarks[f] + 1 : a = this.eMarks[f]; c < a && o < r; ) {
      if (l = this.src.charCodeAt(c), wa(l))
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
Dn.prototype.Token = mv;
var Fce = Dn, $ce = Ed, ul = [
  ["table", ace, ["paragraph", "reference"]],
  ["code", hce],
  ["fence", uce, ["paragraph", "reference", "blockquote", "list"]],
  ["blockquote", fce, ["paragraph", "reference", "blockquote", "list"]],
  ["hr", pce, ["paragraph", "reference", "blockquote", "list"]],
  ["list", mce, ["paragraph", "reference", "blockquote"]],
  ["reference", bce],
  ["html_block", Ice, ["paragraph", "reference", "blockquote"]],
  ["heading", Nce, ["paragraph", "reference", "blockquote"]],
  ["lheading", Bce],
  ["paragraph", Pce]
];
function xa() {
  this.ruler = new $ce();
  for (var t = 0; t < ul.length; t++)
    this.ruler.push(ul[t][0], ul[t][1], { alt: (ul[t][2] || []).slice() });
}
xa.prototype.tokenize = function(t, e, n) {
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
xa.prototype.parse = function(t, e, n, r) {
  var i;
  !t || (i = new this.State(t, e, n, r), this.tokenize(i, i.line, i.lineMax));
};
xa.prototype.State = Fce;
var qce = xa;
function Hce(t) {
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
var zce = function(e, n) {
  for (var r = e.pos; r < e.posMax && !Hce(e.src.charCodeAt(r)); )
    r++;
  return r === e.pos ? !1 : (n || (e.pending += e.src.slice(e.pos, r)), e.pos = r, !0);
}, Vce = ne.isSpace, Uce = function(e, n) {
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
  for (o++; o < i && Vce(e.src.charCodeAt(o)); )
    o++;
  return e.pos = o, !0;
}, Wce = ne.isSpace, Md = [];
for (var Mm = 0; Mm < 256; Mm++)
  Md.push(0);
"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(t) {
  Md[t.charCodeAt(0)] = 1;
});
var jce = function(e, n) {
  var r, i = e.pos, s = e.posMax;
  if (e.src.charCodeAt(i) !== 92)
    return !1;
  if (i++, i < s) {
    if (r = e.src.charCodeAt(i), r < 256 && Md[r] !== 0)
      return n || (e.pending += e.src[i]), e.pos += 2, !0;
    if (r === 10) {
      for (n || e.push("hardbreak", "br", 0), i++; i < s && (r = e.src.charCodeAt(i), !!Wce(r)); )
        i++;
      return e.pos = i, !0;
    }
  }
  return n || (e.pending += "\\"), e.pos++, !0;
}, Gce = function(e, n) {
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
}, ka = {};
ka.tokenize = function(e, n) {
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
function Om(t, e) {
  var n, r, i, s, o, l = [], c = e.length;
  for (n = 0; n < c; n++)
    i = e[n], i.marker === 126 && i.end !== -1 && (s = e[i.end], o = t.tokens[i.token], o.type = "s_open", o.tag = "s", o.nesting = 1, o.markup = "~~", o.content = "", o = t.tokens[s.token], o.type = "s_close", o.tag = "s", o.nesting = -1, o.markup = "~~", o.content = "", t.tokens[s.token - 1].type === "text" && t.tokens[s.token - 1].content === "~" && l.push(s.token - 1));
  for (; l.length; ) {
    for (n = l.pop(), r = n + 1; r < t.tokens.length && t.tokens[r].type === "s_close"; )
      r++;
    r--, n !== r && (o = t.tokens[r], t.tokens[r] = t.tokens[n], t.tokens[n] = o);
  }
}
ka.postProcess = function(e) {
  var n, r = e.tokens_meta, i = e.tokens_meta.length;
  for (Om(e, e.delimiters), n = 0; n < i; n++)
    r[n] && r[n].delimiters && Om(e, r[n].delimiters);
};
var _a = {};
_a.tokenize = function(e, n) {
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
function Lm(t, e) {
  var n, r, i, s, o, l, c = e.length;
  for (n = c - 1; n >= 0; n--)
    r = e[n], !(r.marker !== 95 && r.marker !== 42) && r.end !== -1 && (i = e[r.end], l = n > 0 && e[n - 1].end === r.end + 1 && e[n - 1].marker === r.marker && e[n - 1].token === r.token - 1 && e[r.end + 1].token === i.token + 1, o = String.fromCharCode(r.marker), s = t.tokens[r.token], s.type = l ? "strong_open" : "em_open", s.tag = l ? "strong" : "em", s.nesting = 1, s.markup = l ? o + o : o, s.content = "", s = t.tokens[i.token], s.type = l ? "strong_close" : "em_close", s.tag = l ? "strong" : "em", s.nesting = -1, s.markup = l ? o + o : o, s.content = "", l && (t.tokens[e[n - 1].token].content = "", t.tokens[e[r.end + 1].token].content = "", n--));
}
_a.postProcess = function(e) {
  var n, r = e.tokens_meta, i = e.tokens_meta.length;
  for (Lm(e, e.delimiters), n = 0; n < i; n++)
    r[n] && r[n].delimiters && Lm(e, r[n].delimiters);
};
var Yce = ne.normalizeReference, Dh = ne.isSpace, Kce = function(e, n) {
  var r, i, s, o, l, c, a, h, u, f = "", d = "", p = e.pos, g = e.posMax, m = e.pos, y = !0;
  if (e.src.charCodeAt(e.pos) !== 91 || (l = e.pos + 1, o = e.md.helpers.parseLinkLabel(e, e.pos, !0), o < 0))
    return !1;
  if (c = o + 1, c < g && e.src.charCodeAt(c) === 40) {
    for (y = !1, c++; c < g && (i = e.src.charCodeAt(c), !(!Dh(i) && i !== 10)); c++)
      ;
    if (c >= g)
      return !1;
    if (m = c, a = e.md.helpers.parseLinkDestination(e.src, c, e.posMax), a.ok) {
      for (f = e.md.normalizeLink(a.str), e.md.validateLink(f) ? c = a.pos : f = "", m = c; c < g && (i = e.src.charCodeAt(c), !(!Dh(i) && i !== 10)); c++)
        ;
      if (a = e.md.helpers.parseLinkTitle(e.src, c, e.posMax), c < g && m !== c && a.ok)
        for (d = a.str, c = a.pos; c < g && (i = e.src.charCodeAt(c), !(!Dh(i) && i !== 10)); c++)
          ;
    }
    (c >= g || e.src.charCodeAt(c) !== 41) && (y = !0), c++;
  }
  if (y) {
    if (typeof e.env.references > "u")
      return !1;
    if (c < g && e.src.charCodeAt(c) === 91 ? (m = c + 1, c = e.md.helpers.parseLinkLabel(e, c), c >= 0 ? s = e.src.slice(m, c++) : c = o + 1) : c = o + 1, s || (s = e.src.slice(l, o)), h = e.env.references[Yce(s)], !h)
      return e.pos = p, !1;
    f = h.href, d = h.title;
  }
  return n || (e.pos = l, e.posMax = o, u = e.push("link_open", "a", 1), u.attrs = r = [["href", f]], d && r.push(["title", d]), e.md.inline.tokenize(e), u = e.push("link_close", "a", -1)), e.pos = c, e.posMax = g, !0;
}, Jce = ne.normalizeReference, Th = ne.isSpace, Zce = function(e, n) {
  var r, i, s, o, l, c, a, h, u, f, d, p, g, m = "", y = e.pos, b = e.posMax;
  if (e.src.charCodeAt(e.pos) !== 33 || e.src.charCodeAt(e.pos + 1) !== 91 || (c = e.pos + 2, l = e.md.helpers.parseLinkLabel(e, e.pos + 1, !1), l < 0))
    return !1;
  if (a = l + 1, a < b && e.src.charCodeAt(a) === 40) {
    for (a++; a < b && (i = e.src.charCodeAt(a), !(!Th(i) && i !== 10)); a++)
      ;
    if (a >= b)
      return !1;
    for (g = a, u = e.md.helpers.parseLinkDestination(e.src, a, e.posMax), u.ok && (m = e.md.normalizeLink(u.str), e.md.validateLink(m) ? a = u.pos : m = ""), g = a; a < b && (i = e.src.charCodeAt(a), !(!Th(i) && i !== 10)); a++)
      ;
    if (u = e.md.helpers.parseLinkTitle(e.src, a, e.posMax), a < b && g !== a && u.ok)
      for (f = u.str, a = u.pos; a < b && (i = e.src.charCodeAt(a), !(!Th(i) && i !== 10)); a++)
        ;
    else
      f = "";
    if (a >= b || e.src.charCodeAt(a) !== 41)
      return e.pos = y, !1;
    a++;
  } else {
    if (typeof e.env.references > "u")
      return !1;
    if (a < b && e.src.charCodeAt(a) === 91 ? (g = a + 1, a = e.md.helpers.parseLinkLabel(e, a), a >= 0 ? o = e.src.slice(g, a++) : a = l + 1) : a = l + 1, o || (o = e.src.slice(c, l)), h = e.env.references[Jce(o)], !h)
      return e.pos = y, !1;
    m = h.href, f = h.title;
  }
  return n || (s = e.src.slice(c, l), e.md.inline.parse(
    s,
    e.md,
    e.env,
    p = []
  ), d = e.push("image", "img", 0), d.attrs = r = [["src", m], ["alt", ""]], d.children = p, d.content = s, f && r.push(["title", f])), e.pos = a, e.posMax = b, !0;
}, Xce = /^([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/, Qce = /^([a-zA-Z][a-zA-Z0-9+.\-]{1,31}):([^<>\x00-\x20]*)$/, eae = function(e, n) {
  var r, i, s, o, l, c, a = e.pos;
  if (e.src.charCodeAt(a) !== 60)
    return !1;
  for (l = e.pos, c = e.posMax; ; ) {
    if (++a >= c || (o = e.src.charCodeAt(a), o === 60))
      return !1;
    if (o === 62)
      break;
  }
  return r = e.src.slice(l + 1, a), Qce.test(r) ? (i = e.md.normalizeLink(r), e.md.validateLink(i) ? (n || (s = e.push("link_open", "a", 1), s.attrs = [["href", i]], s.markup = "autolink", s.info = "auto", s = e.push("text", "", 0), s.content = e.md.normalizeLinkText(r), s = e.push("link_close", "a", -1), s.markup = "autolink", s.info = "auto"), e.pos += r.length + 2, !0) : !1) : Xce.test(r) ? (i = e.md.normalizeLink("mailto:" + r), e.md.validateLink(i) ? (n || (s = e.push("link_open", "a", 1), s.attrs = [["href", i]], s.markup = "autolink", s.info = "auto", s = e.push("text", "", 0), s.content = e.md.normalizeLinkText(r), s = e.push("link_close", "a", -1), s.markup = "autolink", s.info = "auto"), e.pos += r.length + 2, !0) : !1) : !1;
}, tae = va.HTML_TAG_RE;
function nae(t) {
  var e = t | 32;
  return e >= 97 && e <= 122;
}
var rae = function(e, n) {
  var r, i, s, o, l = e.pos;
  return !e.md.options.html || (s = e.posMax, e.src.charCodeAt(l) !== 60 || l + 2 >= s) || (r = e.src.charCodeAt(l + 1), r !== 33 && r !== 63 && r !== 47 && !nae(r)) || (i = e.src.slice(l).match(tae), !i) ? !1 : (n || (o = e.push("html_inline", "", 0), o.content = e.src.slice(l, l + i[0].length)), e.pos += i[0].length, !0);
}, Rm = Sd.exports, iae = ne.has, sae = ne.isValidEntityCode, Im = ne.fromCodePoint, oae = /^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i, lae = /^&([a-z][a-z0-9]{1,31});/i, cae = function(e, n) {
  var r, i, s, o = e.pos, l = e.posMax;
  if (e.src.charCodeAt(o) !== 38)
    return !1;
  if (o + 1 < l) {
    if (r = e.src.charCodeAt(o + 1), r === 35) {
      if (s = e.src.slice(o).match(oae), s)
        return n || (i = s[1][0].toLowerCase() === "x" ? parseInt(s[1].slice(1), 16) : parseInt(s[1], 10), e.pending += sae(i) ? Im(i) : Im(65533)), e.pos += s[0].length, !0;
    } else if (s = e.src.slice(o).match(lae), s && iae(Rm, s[1]))
      return n || (e.pending += Rm[s[1]]), e.pos += s[0].length, !0;
  }
  return n || (e.pending += "&"), e.pos++, !0;
};
function Nm(t, e) {
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
var aae = function(e) {
  var n, r = e.tokens_meta, i = e.tokens_meta.length;
  for (Nm(e, e.delimiters), n = 0; n < i; n++)
    r[n] && r[n].delimiters && Nm(e, r[n].delimiters);
}, hae = function(e) {
  var n, r, i = 0, s = e.tokens, o = e.tokens.length;
  for (n = r = 0; n < o; n++)
    s[n].nesting < 0 && i--, s[n].level = i, s[n].nesting > 0 && i++, s[n].type === "text" && n + 1 < o && s[n + 1].type === "text" ? s[n + 1].content = s[n].content + s[n + 1].content : (n !== r && (s[r] = s[n]), r++);
  n !== r && (s.length = r);
}, Od = Dd, Bm = ne.isWhiteSpace, Pm = ne.isPunctChar, Fm = ne.isMdAsciiPunct;
function $o(t, e, n, r) {
  this.src = t, this.env = n, this.md = e, this.tokens = r, this.tokens_meta = Array(r.length), this.pos = 0, this.posMax = this.src.length, this.level = 0, this.pending = "", this.pendingLevel = 0, this.cache = {}, this.delimiters = [], this._prev_delimiters = [], this.backticks = {}, this.backticksScanned = !1;
}
$o.prototype.pushPending = function() {
  var t = new Od("text", "", 0);
  return t.content = this.pending, t.level = this.pendingLevel, this.tokens.push(t), this.pending = "", t;
};
$o.prototype.push = function(t, e, n) {
  this.pending && this.pushPending();
  var r = new Od(t, e, n), i = null;
  return n < 0 && (this.level--, this.delimiters = this._prev_delimiters.pop()), r.level = this.level, n > 0 && (this.level++, this._prev_delimiters.push(this.delimiters), this.delimiters = [], i = { delimiters: this.delimiters }), this.pendingLevel = this.level, this.tokens.push(r), this.tokens_meta.push(i), r;
};
$o.prototype.scanDelims = function(t, e) {
  var n = t, r, i, s, o, l, c, a, h, u, f = !0, d = !0, p = this.posMax, g = this.src.charCodeAt(t);
  for (r = t > 0 ? this.src.charCodeAt(t - 1) : 32; n < p && this.src.charCodeAt(n) === g; )
    n++;
  return s = n - t, i = n < p ? this.src.charCodeAt(n) : 32, a = Fm(r) || Pm(String.fromCharCode(r)), u = Fm(i) || Pm(String.fromCharCode(i)), c = Bm(r), h = Bm(i), h ? f = !1 : u && (c || a || (f = !1)), c ? d = !1 : a && (h || u || (d = !1)), e ? (o = f, l = d) : (o = f && (!d || a), l = d && (!f || u)), {
    can_open: o,
    can_close: l,
    length: s
  };
};
$o.prototype.Token = Od;
var uae = $o, $m = Ed, Mh = [
  ["text", zce],
  ["newline", Uce],
  ["escape", jce],
  ["backticks", Gce],
  ["strikethrough", ka.tokenize],
  ["emphasis", _a.tokenize],
  ["link", Kce],
  ["image", Zce],
  ["autolink", eae],
  ["html_inline", rae],
  ["entity", cae]
], Oh = [
  ["balance_pairs", aae],
  ["strikethrough", ka.postProcess],
  ["emphasis", _a.postProcess],
  ["text_collapse", hae]
];
function qo() {
  var t;
  for (this.ruler = new $m(), t = 0; t < Mh.length; t++)
    this.ruler.push(Mh[t][0], Mh[t][1]);
  for (this.ruler2 = new $m(), t = 0; t < Oh.length; t++)
    this.ruler2.push(Oh[t][0], Oh[t][1]);
}
qo.prototype.skipToken = function(t) {
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
qo.prototype.tokenize = function(t) {
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
qo.prototype.parse = function(t, e, n, r) {
  var i, s, o, l = new this.State(t, e, n, r);
  for (this.tokenize(l), s = this.ruler2.getRules(""), o = s.length, i = 0; i < o; i++)
    s[i](l);
};
qo.prototype.State = uae;
var fae = qo, Lh, qm;
function dae() {
  return qm || (qm = 1, Lh = function(t) {
    var e = {};
    e.src_Any = cv().source, e.src_Cc = av().source, e.src_Z = hv().source, e.src_P = Ad.source, e.src_ZPCc = [e.src_Z, e.src_P, e.src_Cc].join("|"), e.src_ZCc = [e.src_Z, e.src_Cc].join("|");
    var n = "[><\uFF5C]";
    return e.src_pseudo_letter = "(?:(?!" + n + "|" + e.src_ZPCc + ")" + e.src_Any + ")", e.src_ip4 = "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)", e.src_auth = "(?:(?:(?!" + e.src_ZCc + "|[@/\\[\\]()]).)+@)?", e.src_port = "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?", e.src_host_terminator = "(?=$|" + n + "|" + e.src_ZPCc + ")(?!-|_|:\\d|\\.-|\\.(?!$|" + e.src_ZPCc + "))", e.src_path = "(?:[/?#](?:(?!" + e.src_ZCc + "|" + n + `|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!` + e.src_ZCc + "|\\]).)*\\]|\\((?:(?!" + e.src_ZCc + "|[)]).)*\\)|\\{(?:(?!" + e.src_ZCc + '|[}]).)*\\}|\\"(?:(?!' + e.src_ZCc + `|["]).)+\\"|\\'(?:(?!` + e.src_ZCc + "|[']).)+\\'|\\'(?=" + e.src_pseudo_letter + "|[-]).|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!" + e.src_ZCc + "|[.]).|" + (t && t["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") + ",(?!" + e.src_ZCc + ").|;(?!" + e.src_ZCc + ").|\\!+(?!" + e.src_ZCc + "|[!]).|\\?(?!" + e.src_ZCc + "|[?]).)+|\\/)?", e.src_email_name = '[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*', e.src_xn = "xn--[a-z0-9\\-]{1,59}", e.src_domain_root = "(?:" + e.src_xn + "|" + e.src_pseudo_letter + "{1,63})", e.src_domain = "(?:" + e.src_xn + "|(?:" + e.src_pseudo_letter + ")|(?:" + e.src_pseudo_letter + "(?:-|" + e.src_pseudo_letter + "){0,61}" + e.src_pseudo_letter + "))", e.src_host = "(?:(?:(?:(?:" + e.src_domain + ")\\.)*" + e.src_domain + "))", e.tpl_host_fuzzy = "(?:" + e.src_ip4 + "|(?:(?:(?:" + e.src_domain + ")\\.)+(?:%TLDS%)))", e.tpl_host_no_ip_fuzzy = "(?:(?:(?:" + e.src_domain + ")\\.)+(?:%TLDS%))", e.src_host_strict = e.src_host + e.src_host_terminator, e.tpl_host_fuzzy_strict = e.tpl_host_fuzzy + e.src_host_terminator, e.src_host_port_strict = e.src_host + e.src_port + e.src_host_terminator, e.tpl_host_port_fuzzy_strict = e.tpl_host_fuzzy + e.src_port + e.src_host_terminator, e.tpl_host_port_no_ip_fuzzy_strict = e.tpl_host_no_ip_fuzzy + e.src_port + e.src_host_terminator, e.tpl_host_fuzzy_test = "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" + e.src_ZPCc + "|>|$))", e.tpl_email_fuzzy = "(^|" + n + '|"|\\(|' + e.src_ZCc + ")(" + e.src_email_name + "@" + e.tpl_host_fuzzy_strict + ")", e.tpl_link_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|\uFF5C]|" + e.src_ZPCc + "))((?![$+<=>^`|\uFF5C])" + e.tpl_host_port_fuzzy_strict + e.src_path + ")", e.tpl_link_no_ip_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|\uFF5C]|" + e.src_ZPCc + "))((?![$+<=>^`|\uFF5C])" + e.tpl_host_port_no_ip_fuzzy_strict + e.src_path + ")", e;
  }), Lh;
}
function Wu(t) {
  var e = Array.prototype.slice.call(arguments, 1);
  return e.forEach(function(n) {
    !n || Object.keys(n).forEach(function(r) {
      t[r] = n[r];
    });
  }), t;
}
function Ca(t) {
  return Object.prototype.toString.call(t);
}
function pae(t) {
  return Ca(t) === "[object String]";
}
function gae(t) {
  return Ca(t) === "[object Object]";
}
function mae(t) {
  return Ca(t) === "[object RegExp]";
}
function Hm(t) {
  return Ca(t) === "[object Function]";
}
function yae(t) {
  return t.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
}
var yv = {
  fuzzyLink: !0,
  fuzzyEmail: !0,
  fuzzyIP: !1
};
function bae(t) {
  return Object.keys(t || {}).reduce(function(e, n) {
    return e || yv.hasOwnProperty(n);
  }, !1);
}
var vae = {
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
}, wae = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]", xae = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|\u0440\u0444".split("|");
function kae(t) {
  t.__index__ = -1, t.__text_cache__ = "";
}
function _ae(t) {
  return function(e, n) {
    var r = e.slice(n);
    return t.test(r) ? r.match(t)[0].length : 0;
  };
}
function zm() {
  return function(t, e) {
    e.normalize(t);
  };
}
function _c(t) {
  var e = t.re = dae()(t.__opts__), n = t.__tlds__.slice();
  t.onCompile(), t.__tlds_replaced__ || n.push(wae), n.push(e.src_xn), e.src_tlds = n.join("|");
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
      if (t.__compiled__[l] = a, gae(c)) {
        mae(c.validate) ? a.validate = _ae(c.validate) : Hm(c.validate) ? a.validate = c.validate : s(l, c), Hm(c.normalize) ? a.normalize = c.normalize : c.normalize ? s(l, c) : a.normalize = zm();
        return;
      }
      if (pae(c)) {
        i.push(l);
        return;
      }
      s(l, c);
    }
  }), i.forEach(function(l) {
    !t.__compiled__[t.__schemas__[l]] || (t.__compiled__[l].validate = t.__compiled__[t.__schemas__[l]].validate, t.__compiled__[l].normalize = t.__compiled__[t.__schemas__[l]].normalize);
  }), t.__compiled__[""] = { validate: null, normalize: zm() };
  var o = Object.keys(t.__compiled__).filter(function(l) {
    return l.length > 0 && t.__compiled__[l];
  }).map(yae).join("|");
  t.re.schema_test = RegExp("(^|(?!_)(?:[><\uFF5C]|" + e.src_ZPCc + "))(" + o + ")", "i"), t.re.schema_search = RegExp("(^|(?!_)(?:[><\uFF5C]|" + e.src_ZPCc + "))(" + o + ")", "ig"), t.re.pretest = RegExp(
    "(" + t.re.schema_test.source + ")|(" + t.re.host_fuzzy_test.source + ")|@",
    "i"
  ), kae(t);
}
function Cae(t, e) {
  var n = t.__index__, r = t.__last_index__, i = t.__text_cache__.slice(n, r);
  this.schema = t.__schema__.toLowerCase(), this.index = n + e, this.lastIndex = r + e, this.raw = i, this.text = i, this.url = i;
}
function Vm(t, e) {
  var n = new Cae(t, e);
  return t.__compiled__[n.schema].normalize(n, t), n;
}
function Ft(t, e) {
  if (!(this instanceof Ft))
    return new Ft(t, e);
  e || bae(t) && (e = t, t = {}), this.__opts__ = Wu({}, yv, e), this.__index__ = -1, this.__last_index__ = -1, this.__schema__ = "", this.__text_cache__ = "", this.__schemas__ = Wu({}, vae, t), this.__compiled__ = {}, this.__tlds__ = xae, this.__tlds_replaced__ = !1, this.re = {}, _c(this);
}
Ft.prototype.add = function(e, n) {
  return this.__schemas__[e] = n, _c(this), this;
};
Ft.prototype.set = function(e) {
  return this.__opts__ = Wu(this.__opts__, e), this;
};
Ft.prototype.test = function(e) {
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
Ft.prototype.pretest = function(e) {
  return this.re.pretest.test(e);
};
Ft.prototype.testSchemaAt = function(e, n, r) {
  return this.__compiled__[n.toLowerCase()] ? this.__compiled__[n.toLowerCase()].validate(e, r, this) : 0;
};
Ft.prototype.match = function(e) {
  var n = 0, r = [];
  this.__index__ >= 0 && this.__text_cache__ === e && (r.push(Vm(this, n)), n = this.__last_index__);
  for (var i = n ? e.slice(n) : e; this.test(i); )
    r.push(Vm(this, n)), i = i.slice(this.__last_index__), n += this.__last_index__;
  return r.length ? r : null;
};
Ft.prototype.tlds = function(e, n) {
  return e = Array.isArray(e) ? e : [e], n ? (this.__tlds__ = this.__tlds__.concat(e).sort().filter(function(r, i, s) {
    return r !== s[i - 1];
  }).reverse(), _c(this), this) : (this.__tlds__ = e.slice(), this.__tlds_replaced__ = !0, _c(this), this);
};
Ft.prototype.normalize = function(e) {
  e.schema || (e.url = "http://" + e.url), e.schema === "mailto:" && !/^mailto:/i.test(e.url) && (e.url = "mailto:" + e.url);
};
Ft.prototype.onCompile = function() {
};
var Sae = Ft;
const Pi = 2147483647, pn = 36, Ld = 1, uo = 26, Aae = 38, Eae = 700, bv = 72, vv = 128, wv = "-", Dae = /^xn--/, Tae = /[^\0-\x7F]/, Mae = /[\x2E\u3002\uFF0E\uFF61]/g, Oae = {
  overflow: "Overflow: input needs wider integers to process",
  "not-basic": "Illegal input >= 0x80 (not a basic code point)",
  "invalid-input": "Invalid input"
}, Rh = pn - Ld, gn = Math.floor, Ih = String.fromCharCode;
function Xn(t) {
  throw new RangeError(Oae[t]);
}
function Lae(t, e) {
  const n = [];
  let r = t.length;
  for (; r--; )
    n[r] = e(t[r]);
  return n;
}
function xv(t, e) {
  const n = t.split("@");
  let r = "";
  n.length > 1 && (r = n[0] + "@", t = n[1]), t = t.replace(Mae, ".");
  const i = t.split("."), s = Lae(i, e).join(".");
  return r + s;
}
function Rd(t) {
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
const kv = (t) => String.fromCodePoint(...t), Rae = function(t) {
  return t >= 48 && t < 58 ? 26 + (t - 48) : t >= 65 && t < 91 ? t - 65 : t >= 97 && t < 123 ? t - 97 : pn;
}, Um = function(t, e) {
  return t + 22 + 75 * (t < 26) - ((e != 0) << 5);
}, _v = function(t, e, n) {
  let r = 0;
  for (t = n ? gn(t / Eae) : t >> 1, t += gn(t / e); t > Rh * uo >> 1; r += pn)
    t = gn(t / Rh);
  return gn(r + (Rh + 1) * t / (t + Aae));
}, Id = function(t) {
  const e = [], n = t.length;
  let r = 0, i = vv, s = bv, o = t.lastIndexOf(wv);
  o < 0 && (o = 0);
  for (let l = 0; l < o; ++l)
    t.charCodeAt(l) >= 128 && Xn("not-basic"), e.push(t.charCodeAt(l));
  for (let l = o > 0 ? o + 1 : 0; l < n; ) {
    const c = r;
    for (let h = 1, u = pn; ; u += pn) {
      l >= n && Xn("invalid-input");
      const f = Rae(t.charCodeAt(l++));
      f >= pn && Xn("invalid-input"), f > gn((Pi - r) / h) && Xn("overflow"), r += f * h;
      const d = u <= s ? Ld : u >= s + uo ? uo : u - s;
      if (f < d)
        break;
      const p = pn - d;
      h > gn(Pi / p) && Xn("overflow"), h *= p;
    }
    const a = e.length + 1;
    s = _v(r - c, a, c == 0), gn(r / a) > Pi - i && Xn("overflow"), i += gn(r / a), r %= a, e.splice(r++, 0, i);
  }
  return String.fromCodePoint(...e);
}, Nd = function(t) {
  const e = [];
  t = Rd(t);
  const n = t.length;
  let r = vv, i = 0, s = bv;
  for (const c of t)
    c < 128 && e.push(Ih(c));
  const o = e.length;
  let l = o;
  for (o && e.push(wv); l < n; ) {
    let c = Pi;
    for (const h of t)
      h >= r && h < c && (c = h);
    const a = l + 1;
    c - r > gn((Pi - i) / a) && Xn("overflow"), i += (c - r) * a, r = c;
    for (const h of t)
      if (h < r && ++i > Pi && Xn("overflow"), h === r) {
        let u = i;
        for (let f = pn; ; f += pn) {
          const d = f <= s ? Ld : f >= s + uo ? uo : f - s;
          if (u < d)
            break;
          const p = u - d, g = pn - d;
          e.push(
            Ih(Um(d + p % g, 0))
          ), u = gn(p / g);
        }
        e.push(Ih(Um(u, 0))), s = _v(i, a, l === o), i = 0, ++l;
      }
    ++i, ++r;
  }
  return e.join("");
}, Cv = function(t) {
  return xv(t, function(e) {
    return Dae.test(e) ? Id(e.slice(4).toLowerCase()) : e;
  });
}, Sv = function(t) {
  return xv(t, function(e) {
    return Tae.test(e) ? "xn--" + Nd(e) : e;
  });
}, Iae = {
  version: "2.1.0",
  ucs2: {
    decode: Rd,
    encode: kv
  },
  decode: Id,
  encode: Nd,
  toASCII: Sv,
  toUnicode: Cv
}, Nae = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ucs2decode: Rd,
  ucs2encode: kv,
  decode: Id,
  encode: Nd,
  toASCII: Sv,
  toUnicode: Cv,
  default: Iae
}, Symbol.toStringTag, { value: "Module" })), Bae = /* @__PURE__ */ KC(Nae);
var Pae = {
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
}, Fae = {
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
}, $ae = {
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
}, Ks = ne, qae = ba, Hae = $le, zae = cce, Vae = qce, Uae = fae, Wae = Sae, $r = bs, Av = Bae, jae = {
  default: Pae,
  zero: Fae,
  commonmark: $ae
}, Gae = /^(vbscript|javascript|file|data):/, Yae = /^data:image\/(gif|png|jpeg|webp);/;
function Kae(t) {
  var e = t.trim().toLowerCase();
  return Gae.test(e) ? !!Yae.test(e) : !0;
}
var Ev = ["http:", "https:", "mailto:"];
function Jae(t) {
  var e = $r.parse(t, !0);
  if (e.hostname && (!e.protocol || Ev.indexOf(e.protocol) >= 0))
    try {
      e.hostname = Av.toASCII(e.hostname);
    } catch {
    }
  return $r.encode($r.format(e));
}
function Zae(t) {
  var e = $r.parse(t, !0);
  if (e.hostname && (!e.protocol || Ev.indexOf(e.protocol) >= 0))
    try {
      e.hostname = Av.toUnicode(e.hostname);
    } catch {
    }
  return $r.decode($r.format(e), $r.decode.defaultChars + "%");
}
function $t(t, e) {
  if (!(this instanceof $t))
    return new $t(t, e);
  e || Ks.isString(t) || (e = t || {}, t = "default"), this.inline = new Uae(), this.block = new Vae(), this.core = new zae(), this.renderer = new Hae(), this.linkify = new Wae(), this.validateLink = Kae, this.normalizeLink = Jae, this.normalizeLinkText = Zae, this.utils = Ks, this.helpers = Ks.assign({}, qae), this.options = {}, this.configure(t), e && this.set(e);
}
$t.prototype.set = function(t) {
  return Ks.assign(this.options, t), this;
};
$t.prototype.configure = function(t) {
  var e = this, n;
  if (Ks.isString(t) && (n = t, t = jae[n], !t))
    throw new Error('Wrong `markdown-it` preset "' + n + '", check name');
  if (!t)
    throw new Error("Wrong `markdown-it` preset, can't be empty");
  return t.options && e.set(t.options), t.components && Object.keys(t.components).forEach(function(r) {
    t.components[r].rules && e[r].ruler.enableOnly(t.components[r].rules), t.components[r].rules2 && e[r].ruler2.enableOnly(t.components[r].rules2);
  }), this;
};
$t.prototype.enable = function(t, e) {
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
$t.prototype.disable = function(t, e) {
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
$t.prototype.use = function(t) {
  var e = [this].concat(Array.prototype.slice.call(arguments, 1));
  return t.apply(t, e), this;
};
$t.prototype.parse = function(t, e) {
  if (typeof t != "string")
    throw new Error("Input data should be a String");
  var n = new this.core.State(t, this, e);
  return this.core.process(n), n.tokens;
};
$t.prototype.render = function(t, e) {
  return e = e || {}, this.renderer.render(this.parse(t, e), this.options, e);
};
$t.prototype.parseInline = function(t, e) {
  var n = new this.core.State(t, this, e);
  return n.inlineMode = !0, this.core.process(n), n.tokens;
};
$t.prototype.renderInline = function(t, e) {
  return e = e || {}, this.renderer.render(this.parseInline(t, e), this.options, e);
};
var Xae = $t;
(function(t) {
  t.exports = Xae;
})(lv);
const Qae = /* @__PURE__ */ YC(lv.exports), Sa = me.button.withConfig({
  displayName: "Buttons__DefaultButton",
  componentId: "sc-temzhj-0"
})(['cursor:pointer;color:#fff;font-family:"Lato",sans-serif;text-transform:uppercase;font-size:12px;font-weight:bold;border:1px solid var(--gray-800);background-color:var(--gray-800);height:40px;display:flex;justify-content:center;align-items:center;padding:0;transition:0.4s ease;border-radius:var(--border-radius);&:not(:disabled):hover{background-color:var(--green-400);border:1px solid var(--green-400);}']), Js = me(Sa).withConfig({
  displayName: "Buttons__TopbarButton",
  componentId: "sc-temzhj-1"
})(["padding:0px 15px;margin:5px;"]), ehe = me(Sa).withConfig({
  displayName: "ButtonGroup__GroupButton",
  componentId: "sc-retnx5-0"
})(["color:", ";border:", ";background-color:", ";margin:5px;width:40px;"], (t) => t.$active ? "white" : "var(--gray-900)", (t) => t.$active ? "1px solid var(--green-500)" : "1px solid var(--gray-800)", (t) => t.$active ? "var(--green-500)" : "var(--gray-800)"), Wm = ({
  buttons: t,
  initialClickedId: e = 2,
  clickCallback: n,
  highlightActive: r = !0
}) => {
  const [i, s] = et(e);
  return lt`
    ${t.map((o, l) => lt`
      <${ehe} type="button" key=${o.label} name=${o.label} onClick=${() => {
    r && s(l), n(o.label);
  }} $active=${l === i}>
        <img src=${o.img} alt=${o.label} />
      <//>`)}
  `;
};
console.log("ButtonGroup component loaded");
class te {
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
    return this.decompose(0, e, i, 2), r.length && r.decompose(0, r.length, i, 3), this.decompose(n, this.length, i, 1), un.from(i, this.length - (n - e) + r.length);
  }
  append(e) {
    return this.replace(this.length, this.length, e);
  }
  slice(e, n = this.length) {
    let r = [];
    return this.decompose(e, n, r, 0), un.from(r, n - e);
  }
  eq(e) {
    if (e == this)
      return !0;
    if (e.length != this.length || e.lines != this.lines)
      return !1;
    let n = this.scanIdentical(e, 1), r = this.length - this.scanIdentical(e, -1), i = new Zs(this), s = new Zs(e);
    for (let o = n, l = n; ; ) {
      if (i.next(o), s.next(o), o = 0, i.lineBreak != s.lineBreak || i.done != s.done || i.value != s.value)
        return !1;
      if (l += i.value.length, i.done || l >= r)
        return !0;
    }
  }
  iter(e = 1) {
    return new Zs(this, e);
  }
  iterRange(e, n = this.length) {
    return new Dv(this, e, n);
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
    return new Tv(r);
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
    return e.length == 1 && !e[0] ? te.empty : e.length <= 32 ? new De(e) : un.from(De.split(e, []));
  }
}
class De extends te {
  constructor(e, n = the(e)) {
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
        return new nhe(i, l, r, o);
      i = l + 1, r++;
    }
  }
  decompose(e, n, r, i) {
    let s = e <= 0 && n >= this.length ? this : new De(jm(this.text, e, n), Math.min(n, this.length) - Math.max(0, e));
    if (i & 1) {
      let o = r.pop(), l = Zl(s.text, o.text.slice(), 0, s.length);
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
    let i = Zl(this.text, Zl(r.text, jm(this.text, 0, e)), n), s = this.length + r.length - (n - e);
    return i.length <= 32 ? new De(i, s) : un.from(De.split(i, []), s);
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
class un extends te {
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
            return h[i] = c, new un(h, this.length - (n - e) + r.length);
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
    if (!(e instanceof un))
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
      if (d.lines > s && d instanceof un)
        for (let g of d.children)
          u(g);
      else
        d.lines > o && (c > o || !c) ? (f(), l.push(d)) : d instanceof De && c && (p = h[h.length - 1]) instanceof De && d.lines + p.lines <= 32 ? (c += d.lines, a += d.length + 1, h[h.length - 1] = new De(p.text.concat(d.text), p.length + 1 + d.length)) : (c + d.lines > i && f(), c += d.lines, a += d.length + 1, h.push(d));
    }
    function f() {
      c != 0 && (l.push(h.length == 1 ? h[0] : un.from(h, a)), a = -1, c = h.length = 0);
    }
    for (let d of e)
      u(d);
    return f(), l.length == 1 ? l[0] : new un(l, n);
  }
}
te.empty = /* @__PURE__ */ new De([""], 0);
function the(t) {
  let e = -1;
  for (let n of t)
    e += n.length + 1;
  return e;
}
function Zl(t, e, n = 0, r = 1e9) {
  for (let i = 0, s = 0, o = !0; s < t.length && i <= r; s++) {
    let l = t[s], c = i + l.length;
    c >= n && (c > r && (l = l.slice(0, r - i)), i < n && (l = l.slice(n - i)), o ? (e[e.length - 1] += l, o = !1) : e.push(l)), i = c + 1;
  }
  return e;
}
function jm(t, e, n) {
  return Zl(t, [""], e, n);
}
class Zs {
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
class Dv {
  constructor(e, n, r) {
    this.value = "", this.done = !1, this.cursor = new Zs(e, n > r ? -1 : 1), this.pos = n > r ? e.length : 0, this.from = Math.min(n, r), this.to = Math.max(n, r);
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
class Tv {
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
typeof Symbol < "u" && (te.prototype[Symbol.iterator] = function() {
  return this.iter();
}, Zs.prototype[Symbol.iterator] = Dv.prototype[Symbol.iterator] = Tv.prototype[Symbol.iterator] = function() {
  return this;
});
class nhe {
  constructor(e, n, r, i) {
    this.from = e, this.to = n, this.number = r, this.text = i;
  }
  get length() {
    return this.to - this.from;
  }
}
let Fi = /* @__PURE__ */ "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map((t) => t ? parseInt(t, 36) : 1);
for (let t = 1; t < Fi.length; t++)
  Fi[t] += Fi[t - 1];
function rhe(t) {
  for (let e = 1; e < Fi.length; e += 2)
    if (Fi[e] > t)
      return Fi[e - 1] <= t;
  return !1;
}
function Gm(t) {
  return t >= 127462 && t <= 127487;
}
const Ym = 8205;
function tt(t, e, n = !0, r = !0) {
  return (n ? Mv : ihe)(t, e, r);
}
function Mv(t, e, n) {
  if (e == t.length)
    return e;
  e && Ov(t.charCodeAt(e)) && Lv(t.charCodeAt(e - 1)) && e--;
  let r = We(t, e);
  for (e += Mt(r); e < t.length; ) {
    let i = We(t, e);
    if (r == Ym || i == Ym || n && rhe(i))
      e += Mt(i), r = i;
    else if (Gm(i)) {
      let s = 0, o = e - 2;
      for (; o >= 0 && Gm(We(t, o)); )
        s++, o -= 2;
      if (s % 2 == 0)
        break;
      e += 2;
    } else
      break;
  }
  return e;
}
function ihe(t, e, n) {
  for (; e > 0; ) {
    let r = Mv(t, e - 2, n);
    if (r < e)
      return r;
    e--;
  }
  return 0;
}
function Ov(t) {
  return t >= 56320 && t < 57344;
}
function Lv(t) {
  return t >= 55296 && t < 56320;
}
function We(t, e) {
  let n = t.charCodeAt(e);
  if (!Lv(n) || e + 1 == t.length)
    return n;
  let r = t.charCodeAt(e + 1);
  return Ov(r) ? (n - 55296 << 10) + (r - 56320) + 65536 : n;
}
function Bd(t) {
  return t <= 65535 ? String.fromCharCode(t) : (t -= 65536, String.fromCharCode((t >> 10) + 55296, (t & 1023) + 56320));
}
function Mt(t) {
  return t < 65536 ? 1 : 2;
}
const ju = /\r\n?|\n/;
var ht = /* @__PURE__ */ function(t) {
  return t[t.Simple = 0] = "Simple", t[t.TrackDel = 1] = "TrackDel", t[t.TrackBefore = 2] = "TrackBefore", t[t.TrackAfter = 3] = "TrackAfter", t;
}(ht || (ht = {}));
class xn {
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
    Gu(this, e, n);
  }
  get invertedDesc() {
    let e = [];
    for (let n = 0; n < this.sections.length; ) {
      let r = this.sections[n++], i = this.sections[n++];
      i < 0 ? e.push(r, i) : e.push(i, r);
    }
    return new xn(e);
  }
  composeDesc(e) {
    return this.empty ? e : e.empty ? this : Rv(this, e);
  }
  mapDesc(e, n = !1) {
    return e.empty ? this : Yu(this, e, n);
  }
  mapPos(e, n = -1, r = ht.Simple) {
    let i = 0, s = 0;
    for (let o = 0; o < this.sections.length; ) {
      let l = this.sections[o++], c = this.sections[o++], a = i + l;
      if (c < 0) {
        if (a > e)
          return s + (e - i);
        s += l;
      } else {
        if (r != ht.Simple && a >= e && (r == ht.TrackDel && i < e && a > e || r == ht.TrackBefore && i < e || r == ht.TrackAfter && a > e))
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
    return new xn(e);
  }
  static create(e) {
    return new xn(e);
  }
}
class Ne extends xn {
  constructor(e, n) {
    super(e), this.inserted = n;
  }
  apply(e) {
    if (this.length != e.length)
      throw new RangeError("Applying change set to a document with the wrong length");
    return Gu(this, (n, r, i, s, o) => e = e.replace(i, i + (r - n), o), !1), e;
  }
  mapDesc(e, n = !1) {
    return Yu(this, e, n, !0);
  }
  invert(e) {
    let n = this.sections.slice(), r = [];
    for (let i = 0, s = 0; i < n.length; i += 2) {
      let o = n[i], l = n[i + 1];
      if (l >= 0) {
        n[i] = l, n[i + 1] = o;
        let c = i >> 1;
        for (; r.length < c; )
          r.push(te.empty);
        r.push(o ? e.slice(s, s + o) : te.empty);
      }
      s += o;
    }
    return new Ne(n, r);
  }
  compose(e) {
    return this.empty ? e : e.empty ? this : Rv(this, e, !0);
  }
  map(e, n = !1) {
    return e.empty ? this : Yu(this, e, n, !0);
  }
  iterChanges(e, n = !1) {
    Gu(this, e, n);
  }
  get desc() {
    return xn.create(this.sections);
  }
  filter(e) {
    let n = [], r = [], i = [], s = new fo(this);
    e:
      for (let o = 0, l = 0; ; ) {
        let c = o == e.length ? 1e9 : e[o++];
        for (; l < c || l == c && s.len == 0; ) {
          if (s.done)
            break e;
          let h = Math.min(s.len, c - l);
          Qe(i, h, -1);
          let u = s.ins == -1 ? -1 : s.off == 0 ? s.ins : 0;
          Qe(n, h, u), u > 0 && sr(r, n, s.text), s.forward(h), l += h;
        }
        let a = e[o++];
        for (; l < a; ) {
          if (s.done)
            break e;
          let h = Math.min(s.len, a - l);
          Qe(n, h, -1), Qe(i, h, s.ins == -1 ? -1 : s.off == 0 ? s.ins : 0), s.forward(h), l += h;
        }
      }
    return {
      changes: new Ne(n, r),
      filtered: xn.create(i)
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
      o < n && Qe(i, n - o, -1);
      let u = new Ne(i, s);
      l = l ? l.compose(u.map(l)) : u, i = [], s = [], o = 0;
    }
    function a(h) {
      if (Array.isArray(h))
        for (let u of h)
          a(u);
      else if (h instanceof Ne) {
        if (h.length != n)
          throw new RangeError(`Mismatched change set length (got ${h.length}, expected ${n})`);
        c(), l = l ? l.compose(h.map(l)) : h;
      } else {
        let { from: u, to: f = u, insert: d } = h;
        if (u > f || u < 0 || f > n)
          throw new RangeError(`Invalid change range ${u} to ${f} (in doc of length ${n})`);
        let p = d ? typeof d == "string" ? te.of(d.split(r || ju)) : d : te.empty, g = p.length;
        if (u == f && g == 0)
          return;
        u < o && c(), u > o && Qe(i, u - o, -1), Qe(i, f - u, g), sr(s, i, p), o = f;
      }
    }
    return a(e), c(!l), l;
  }
  static empty(e) {
    return new Ne(e ? [e, -1] : [], []);
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
            r.push(te.empty);
          r[i] = te.of(s.slice(1)), n.push(s[0], r[i].length);
        }
      }
    }
    return new Ne(n, r);
  }
  static createSet(e, n) {
    return new Ne(e, n);
  }
}
function Qe(t, e, n, r = !1) {
  if (e == 0 && n <= 0)
    return;
  let i = t.length - 2;
  i >= 0 && n <= 0 && n == t[i + 1] ? t[i] += e : e == 0 && t[i] == 0 ? t[i + 1] += n : r ? (t[i] += e, t[i + 1] += n) : t.push(e, n);
}
function sr(t, e, n) {
  if (n.length == 0)
    return;
  let r = e.length - 2 >> 1;
  if (r < t.length)
    t[t.length - 1] = t[t.length - 1].append(n);
  else {
    for (; t.length < r; )
      t.push(te.empty);
    t.push(n);
  }
}
function Gu(t, e, n) {
  let r = t.inserted;
  for (let i = 0, s = 0, o = 0; o < t.sections.length; ) {
    let l = t.sections[o++], c = t.sections[o++];
    if (c < 0)
      i += l, s += l;
    else {
      let a = i, h = s, u = te.empty;
      for (; a += l, h += c, c && r && (u = u.append(r[o - 2 >> 1])), !(n || o == t.sections.length || t.sections[o + 1] < 0); )
        l = t.sections[o++], c = t.sections[o++];
      e(i, a, s, h, u), i = a, s = h;
    }
  }
}
function Yu(t, e, n, r = !1) {
  let i = [], s = r ? [] : null, o = new fo(t), l = new fo(e);
  for (let c = -1; ; )
    if (o.ins == -1 && l.ins == -1) {
      let a = Math.min(o.len, l.len);
      Qe(i, a, -1), o.forward(a), l.forward(a);
    } else if (l.ins >= 0 && (o.ins < 0 || c == o.i || o.off == 0 && (l.len < o.len || l.len == o.len && !n))) {
      let a = l.len;
      for (Qe(i, l.ins, -1); a; ) {
        let h = Math.min(o.len, a);
        o.ins >= 0 && c < o.i && o.len <= h && (Qe(i, 0, o.ins), s && sr(s, i, o.text), c = o.i), o.forward(h), a -= h;
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
      Qe(i, a, c < o.i ? o.ins : 0), s && c < o.i && sr(s, i, o.text), c = o.i, o.forward(o.len - h);
    } else {
      if (o.done && l.done)
        return s ? Ne.createSet(i, s) : xn.create(i);
      throw new Error("Mismatched change set lengths");
    }
}
function Rv(t, e, n = !1) {
  let r = [], i = n ? [] : null, s = new fo(t), o = new fo(e);
  for (let l = !1; ; ) {
    if (s.done && o.done)
      return i ? Ne.createSet(r, i) : xn.create(r);
    if (s.ins == 0)
      Qe(r, s.len, 0, l), s.next();
    else if (o.len == 0 && !o.done)
      Qe(r, 0, o.ins, l), i && sr(i, r, o.text), o.next();
    else {
      if (s.done || o.done)
        throw new Error("Mismatched change set lengths");
      {
        let c = Math.min(s.len2, o.len), a = r.length;
        if (s.ins == -1) {
          let h = o.ins == -1 ? -1 : o.off ? 0 : o.ins;
          Qe(r, c, h, l), i && h && sr(i, r, o.text);
        } else
          o.ins == -1 ? (Qe(r, s.off ? 0 : s.len, c, l), i && sr(i, r, s.textBit(c))) : (Qe(r, s.off ? 0 : s.len, o.off ? 0 : o.ins, l), i && !o.off && sr(i, r, o.text));
        l = (s.ins > c || o.ins >= 0 && o.len > c) && (l || r.length > a), s.forward2(c), o.forward(c);
      }
    }
  }
}
class fo {
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
    return n >= e.length ? te.empty : e[n];
  }
  textBit(e) {
    let { inserted: n } = this.set, r = this.i - 2 >> 1;
    return r >= n.length && !e ? te.empty : n[r].slice(this.off, e == null ? void 0 : this.off + e);
  }
  forward(e) {
    e == this.len ? this.next() : (this.len -= e, this.off += e);
  }
  forward2(e) {
    this.ins == -1 ? this.forward(e) : e == this.ins ? this.next() : (this.ins -= e, this.off += e);
  }
}
class qr {
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
    return this.empty ? r = i = e.mapPos(this.from, n) : (r = e.mapPos(this.from, 1), i = e.mapPos(this.to, -1)), r == this.from && i == this.to ? this : new qr(r, i, this.flags);
  }
  extend(e, n = e) {
    if (e <= this.anchor && n >= this.anchor)
      return S.range(e, n);
    let r = Math.abs(e - this.anchor) > Math.abs(n - this.anchor) ? e : n;
    return S.range(this.anchor, r);
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
    return S.range(e.anchor, e.head);
  }
  static create(e, n, r) {
    return new qr(e, n, r);
  }
}
class S {
  constructor(e, n) {
    this.ranges = e, this.mainIndex = n;
  }
  map(e, n = -1) {
    return e.empty ? this : S.create(this.ranges.map((r) => r.map(e, n)), this.mainIndex);
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
    return this.ranges.length == 1 ? this : new S([this.main], 0);
  }
  addRange(e, n = !0) {
    return S.create([e].concat(this.ranges), n ? 0 : this.mainIndex + 1);
  }
  replaceRange(e, n = this.mainIndex) {
    let r = this.ranges.slice();
    return r[n] = e, S.create(r, this.mainIndex);
  }
  toJSON() {
    return { ranges: this.ranges.map((e) => e.toJSON()), main: this.mainIndex };
  }
  static fromJSON(e) {
    if (!e || !Array.isArray(e.ranges) || typeof e.main != "number" || e.main >= e.ranges.length)
      throw new RangeError("Invalid JSON representation for EditorSelection");
    return new S(e.ranges.map((n) => qr.fromJSON(n)), e.main);
  }
  static single(e, n = e) {
    return new S([S.range(e, n)], 0);
  }
  static create(e, n = 0) {
    if (e.length == 0)
      throw new RangeError("A selection needs at least one range");
    for (let r = 0, i = 0; i < e.length; i++) {
      let s = e[i];
      if (s.empty ? s.from <= r : s.from < r)
        return S.normalized(e.slice(), n);
      r = s.to;
    }
    return new S(e, n);
  }
  static cursor(e, n = 0, r, i) {
    return qr.create(e, e, (n == 0 ? 0 : n < 0 ? 4 : 8) | (r == null ? 3 : Math.min(2, r)) | (i != null ? i : 33554431) << 5);
  }
  static range(e, n, r, i) {
    let s = (r != null ? r : 33554431) << 5 | (i == null ? 3 : Math.min(2, i));
    return n < e ? qr.create(n, e, 24 | s) : qr.create(e, n, (n > e ? 4 : 0) | s);
  }
  static normalized(e, n = 0) {
    let r = e[n];
    e.sort((i, s) => i.from - s.from), n = e.indexOf(r);
    for (let i = 1; i < e.length; i++) {
      let s = e[i], o = e[i - 1];
      if (s.empty ? s.from <= o.to : s.from < o.to) {
        let l = o.from, c = Math.max(s.to, o.to);
        i <= n && n--, e.splice(--i, 2, s.anchor > s.head ? S.range(c, l) : S.range(l, c));
      }
    }
    return new S(e, n);
  }
}
function Iv(t, e) {
  for (let n of t.ranges)
    if (n.to > e)
      throw new RangeError("Selection points outside of document");
}
let Pd = 0;
class N {
  constructor(e, n, r, i, s) {
    this.combine = e, this.compareInput = n, this.compare = r, this.isStatic = i, this.id = Pd++, this.default = e([]), this.extensions = typeof s == "function" ? s(this) : s;
  }
  static define(e = {}) {
    return new N(e.combine || ((n) => n), e.compareInput || ((n, r) => n === r), e.compare || (e.combine ? (n, r) => n === r : Fd), !!e.static, e.enables);
  }
  of(e) {
    return new Xl([], this, 0, e);
  }
  compute(e, n) {
    if (this.isStatic)
      throw new Error("Can't compute a static facet");
    return new Xl(e, this, 1, n);
  }
  computeN(e, n) {
    if (this.isStatic)
      throw new Error("Can't compute a static facet");
    return new Xl(e, this, 2, n);
  }
  from(e, n) {
    return n || (n = (r) => r), this.compute([e], (r) => n(r.field(e)));
  }
}
function Fd(t, e) {
  return t == e || t.length == e.length && t.every((n, r) => n === e[r]);
}
class Xl {
  constructor(e, n, r, i) {
    this.dependencies = e, this.facet = n, this.type = r, this.value = i, this.id = Pd++;
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
        if (c && f.docChanged || a && (f.docChanged || f.selection) || Ku(u, h)) {
          let d = r(u);
          if (l ? !Km(d, u.values[o], i) : !i(d, u.values[o]))
            return u.values[o] = d, 1;
        }
        return 0;
      },
      reconfigure: (u, f) => {
        let d, p = f.config.address[s];
        if (p != null) {
          let g = Sc(f, p);
          if (this.dependencies.every((m) => m instanceof N ? f.facet(m) === u.facet(m) : m instanceof Ie ? f.field(m, !1) == u.field(m, !1) : !0) || (l ? Km(d = r(u), g, i) : i(d = r(u), g)))
            return u.values[o] = g, 0;
        } else
          d = r(u);
        return u.values[o] = d, 1;
      }
    };
  }
}
function Km(t, e, n) {
  if (t.length != e.length)
    return !1;
  for (let r = 0; r < t.length; r++)
    if (!n(t[r], e[r]))
      return !1;
  return !0;
}
function Ku(t, e) {
  let n = !1;
  for (let r of e)
    Xs(t, r) & 1 && (n = !0);
  return n;
}
function she(t, e, n) {
  let r = n.map((c) => t[c.id]), i = n.map((c) => c.type), s = r.filter((c) => !(c & 1)), o = t[e.id] >> 1;
  function l(c) {
    let a = [];
    for (let h = 0; h < r.length; h++) {
      let u = Sc(c, r[h]);
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
        Xs(c, a);
      return c.values[o] = l(c), 1;
    },
    update(c, a) {
      if (!Ku(c, s))
        return 0;
      let h = l(c);
      return e.compare(h, c.values[o]) ? 0 : (c.values[o] = h, 1);
    },
    reconfigure(c, a) {
      let h = Ku(c, r), u = a.config.facets[e.id], f = a.facet(e);
      if (u && !h && Fd(n, u))
        return c.values[o] = f, 0;
      let d = l(c);
      return e.compare(d, f) ? (c.values[o] = f, 0) : (c.values[o] = d, 1);
    }
  };
}
const Jm = /* @__PURE__ */ N.define({ static: !0 });
class Ie {
  constructor(e, n, r, i, s) {
    this.id = e, this.createF = n, this.updateF = r, this.compareF = i, this.spec = s, this.provides = void 0;
  }
  static define(e) {
    let n = new Ie(Pd++, e.create, e.update, e.compare || ((r, i) => r === i), e);
    return e.provide && (n.provides = e.provide(n)), n;
  }
  create(e) {
    let n = e.facet(Jm).find((r) => r.field == this);
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
    return [this, Jm.of({ field: this, create: e })];
  }
  get extension() {
    return this;
  }
}
const Br = { lowest: 4, low: 3, default: 2, high: 1, highest: 0 };
function Ls(t) {
  return (e) => new Nv(e, t);
}
const Sr = {
  highest: /* @__PURE__ */ Ls(Br.highest),
  high: /* @__PURE__ */ Ls(Br.high),
  default: /* @__PURE__ */ Ls(Br.default),
  low: /* @__PURE__ */ Ls(Br.low),
  lowest: /* @__PURE__ */ Ls(Br.lowest)
};
class Nv {
  constructor(e, n) {
    this.inner = e, this.prec = n;
  }
}
class xs {
  of(e) {
    return new Ju(this, e);
  }
  reconfigure(e) {
    return xs.reconfigure.of({ compartment: this, extension: e });
  }
  get(e) {
    return e.config.compartments.get(this);
  }
}
class Ju {
  constructor(e, n) {
    this.compartment = e, this.inner = n;
  }
}
class Cc {
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
    for (let f of ohe(e, n, o))
      f instanceof Ie ? i.push(f) : (s[f.facet.id] || (s[f.facet.id] = [])).push(f);
    let l = /* @__PURE__ */ Object.create(null), c = [], a = [];
    for (let f of i)
      l[f.id] = a.length << 1, a.push((d) => f.slot(d));
    let h = r == null ? void 0 : r.config.facets;
    for (let f in s) {
      let d = s[f], p = d[0].facet, g = h && h[f] || [];
      if (d.every((m) => m.type == 0))
        if (l[p.id] = c.length << 1 | 1, Fd(g, d))
          c.push(r.facet(p));
        else {
          let m = p.combine(d.map((y) => y.value));
          c.push(r && p.compare(m, r.facet(p)) ? r.facet(p) : m);
        }
      else {
        for (let m of d)
          m.type == 0 ? (l[m.id] = c.length << 1 | 1, c.push(m.value)) : (l[m.id] = a.length << 1, a.push((y) => m.dynamicSlot(y)));
        l[p.id] = a.length << 1, a.push((m) => she(m, p, d));
      }
    }
    let u = a.map((f) => f(l));
    return new Cc(e, o, u, l, c, s);
  }
}
function ohe(t, e, n) {
  let r = [[], [], [], [], []], i = /* @__PURE__ */ new Map();
  function s(o, l) {
    let c = i.get(o);
    if (c != null) {
      if (c <= l)
        return;
      let a = r[c].indexOf(o);
      a > -1 && r[c].splice(a, 1), o instanceof Ju && n.delete(o.compartment);
    }
    if (i.set(o, l), Array.isArray(o))
      for (let a of o)
        s(a, l);
    else if (o instanceof Ju) {
      if (n.has(o.compartment))
        throw new RangeError("Duplicate use of compartment in extensions");
      let a = e.get(o.compartment) || o.inner;
      n.set(o.compartment, a), s(a, l);
    } else if (o instanceof Nv)
      s(o.inner, o.prec);
    else if (o instanceof Ie)
      r[l].push(o), o.provides && s(o.provides, l);
    else if (o instanceof Xl)
      r[l].push(o), o.facet.extensions && s(o.facet.extensions, Br.default);
    else {
      let a = o.extension;
      if (!a)
        throw new Error(`Unrecognized extension value in extension set (${o}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);
      s(a, l);
    }
  }
  return s(t, Br.default), r.reduce((o, l) => o.concat(l));
}
function Xs(t, e) {
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
function Sc(t, e) {
  return e & 1 ? t.config.staticValues[e >> 1] : t.values[e >> 1];
}
const Bv = /* @__PURE__ */ N.define(), Pv = /* @__PURE__ */ N.define({
  combine: (t) => t.some((e) => e),
  static: !0
}), Fv = /* @__PURE__ */ N.define({
  combine: (t) => t.length ? t[0] : void 0,
  static: !0
}), $v = /* @__PURE__ */ N.define(), qv = /* @__PURE__ */ N.define(), Hv = /* @__PURE__ */ N.define(), zv = /* @__PURE__ */ N.define({
  combine: (t) => t.length ? t[0] : !1
});
class en {
  constructor(e, n) {
    this.type = e, this.value = n;
  }
  static define() {
    return new lhe();
  }
}
class lhe {
  of(e) {
    return new en(this, e);
  }
}
class che {
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
    return new che(e.map || ((n) => n));
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
j.reconfigure = /* @__PURE__ */ j.define();
j.appendConfig = /* @__PURE__ */ j.define();
class Pe {
  constructor(e, n, r, i, s, o) {
    this.startState = e, this.changes = n, this.selection = r, this.effects = i, this.annotations = s, this.scrollIntoView = o, this._doc = null, this._state = null, r && Iv(r, n.newLength), s.some((l) => l.type == Pe.time) || (this.annotations = s.concat(Pe.time.of(Date.now())));
  }
  static create(e, n, r, i, s, o) {
    return new Pe(e, n, r, i, s, o);
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
    let n = this.annotation(Pe.userEvent);
    return !!(n && (n == e || n.length > e.length && n.slice(0, e.length) == e && n[e.length] == "."));
  }
}
Pe.time = /* @__PURE__ */ en.define();
Pe.userEvent = /* @__PURE__ */ en.define();
Pe.addToHistory = /* @__PURE__ */ en.define();
Pe.remote = /* @__PURE__ */ en.define();
function ahe(t, e) {
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
function Vv(t, e, n) {
  var r;
  let i, s, o;
  return n ? (i = e.changes, s = Ne.empty(e.changes.length), o = t.changes.compose(e.changes)) : (i = e.changes.map(t.changes), s = t.changes.mapDesc(e.changes, !0), o = t.changes.compose(i)), {
    changes: o,
    selection: e.selection ? e.selection.map(s) : (r = t.selection) === null || r === void 0 ? void 0 : r.map(i),
    effects: j.mapEffects(t.effects, i).concat(j.mapEffects(e.effects, s)),
    annotations: t.annotations.length ? t.annotations.concat(e.annotations) : e.annotations,
    scrollIntoView: t.scrollIntoView || e.scrollIntoView
  };
}
function Zu(t, e, n) {
  let r = e.selection, i = $i(e.annotations);
  return e.userEvent && (i = i.concat(Pe.userEvent.of(e.userEvent))), {
    changes: e.changes instanceof Ne ? e.changes : Ne.of(e.changes || [], n, t.facet(Fv)),
    selection: r && (r instanceof S ? r : S.single(r.anchor, r.head)),
    effects: $i(e.effects),
    annotations: i,
    scrollIntoView: !!e.scrollIntoView
  };
}
function Uv(t, e, n) {
  let r = Zu(t, e.length ? e[0] : {}, t.doc.length);
  e.length && e[0].filter === !1 && (n = !1);
  for (let s = 1; s < e.length; s++) {
    e[s].filter === !1 && (n = !1);
    let o = !!e[s].sequential;
    r = Vv(r, Zu(t, e[s], o ? r.changes.newLength : t.doc.length), o);
  }
  let i = Pe.create(t, r.changes, r.selection, r.effects, r.annotations, r.scrollIntoView);
  return uhe(n ? hhe(i) : i);
}
function hhe(t) {
  let e = t.startState, n = !0;
  for (let i of e.facet($v)) {
    let s = i(t);
    if (s === !1) {
      n = !1;
      break;
    }
    Array.isArray(s) && (n = n === !0 ? s : ahe(n, s));
  }
  if (n !== !0) {
    let i, s;
    if (n === !1)
      s = t.changes.invertedDesc, i = Ne.empty(e.doc.length);
    else {
      let o = t.changes.filter(n);
      i = o.changes, s = o.filtered.mapDesc(o.changes).invertedDesc;
    }
    t = Pe.create(e, i, t.selection && t.selection.map(s), j.mapEffects(t.effects, s), t.annotations, t.scrollIntoView);
  }
  let r = e.facet(qv);
  for (let i = r.length - 1; i >= 0; i--) {
    let s = r[i](t);
    s instanceof Pe ? t = s : Array.isArray(s) && s.length == 1 && s[0] instanceof Pe ? t = s[0] : t = Uv(e, $i(s), !1);
  }
  return t;
}
function uhe(t) {
  let e = t.startState, n = e.facet(Hv), r = t;
  for (let i = n.length - 1; i >= 0; i--) {
    let s = n[i](t);
    s && Object.keys(s).length && (r = Vv(r, Zu(e, s, t.changes.newLength), !0));
  }
  return r == t ? t : Pe.create(e, t.changes, t.selection, r.effects, r.annotations, r.scrollIntoView);
}
const fhe = [];
function $i(t) {
  return t == null ? fhe : Array.isArray(t) ? t : [t];
}
var ke = /* @__PURE__ */ function(t) {
  return t[t.Word = 0] = "Word", t[t.Space = 1] = "Space", t[t.Other = 2] = "Other", t;
}(ke || (ke = {}));
const dhe = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
let Xu;
try {
  Xu = /* @__PURE__ */ new RegExp("[\\p{Alphabetic}\\p{Number}_]", "u");
} catch {
}
function phe(t) {
  if (Xu)
    return Xu.test(t);
  for (let e = 0; e < t.length; e++) {
    let n = t[e];
    if (/\w/.test(n) || n > "\x80" && (n.toUpperCase() != n.toLowerCase() || dhe.test(n)))
      return !0;
  }
  return !1;
}
function ghe(t) {
  return (e) => {
    if (!/\S/.test(e))
      return ke.Space;
    if (phe(e))
      return ke.Word;
    for (let n = 0; n < t.length; n++)
      if (e.indexOf(t[n]) > -1)
        return ke.Word;
    return ke.Other;
  };
}
class Z {
  constructor(e, n, r, i, s, o) {
    this.config = e, this.doc = n, this.selection = r, this.values = i, this.status = e.statusTemplate.slice(), this.computeSlot = s, o && (o._state = this);
    for (let l = 0; l < this.config.dynamicSlots.length; l++)
      Xs(this, l << 1);
    this.computeSlot = null;
  }
  field(e, n = !0) {
    let r = this.config.address[e.id];
    if (r == null) {
      if (n)
        throw new RangeError("Field is not present in this state");
      return;
    }
    return Xs(this, r), Sc(this, r);
  }
  update(...e) {
    return Uv(this, e, !0);
  }
  applyTransaction(e) {
    let n = this.config, { base: r, compartments: i } = n;
    for (let o of e.effects)
      o.is(xs.reconfigure) ? (n && (i = /* @__PURE__ */ new Map(), n.compartments.forEach((l, c) => i.set(c, l)), n = null), i.set(o.value.compartment, o.value.extension)) : o.is(j.reconfigure) ? (n = null, r = o.value) : o.is(j.appendConfig) && (n = null, r = $i(r).concat(o.value));
    let s;
    n ? s = e.startState.values.slice() : (n = Cc.resolve(r, i, this), s = new Z(n, this.doc, this.selection, n.dynamicSlots.map(() => null), (l, c) => c.reconfigure(l, this), null).values), new Z(n, e.newDoc, e.newSelection, s, (o, l) => l.update(o, e), e);
  }
  replaceSelection(e) {
    return typeof e == "string" && (e = this.toText(e)), this.changeByRange((n) => ({
      changes: { from: n.from, to: n.to, insert: e },
      range: S.cursor(n.from + e.length)
    }));
  }
  changeByRange(e) {
    let n = this.selection, r = e(n.ranges[0]), i = this.changes(r.changes), s = [r.range], o = $i(r.effects);
    for (let l = 1; l < n.ranges.length; l++) {
      let c = e(n.ranges[l]), a = this.changes(c.changes), h = a.map(i);
      for (let f = 0; f < l; f++)
        s[f] = s[f].map(h);
      let u = i.mapDesc(a, !0);
      s.push(c.range.map(u)), i = i.compose(h), o = j.mapEffects(o, h).concat(j.mapEffects($i(c.effects), u));
    }
    return {
      changes: i,
      selection: S.create(s, n.mainIndex),
      effects: o
    };
  }
  changes(e = []) {
    return e instanceof Ne ? e : Ne.of(e, this.doc.length, this.facet(Z.lineSeparator));
  }
  toText(e) {
    return te.of(e.split(this.facet(Z.lineSeparator) || ju));
  }
  sliceDoc(e = 0, n = this.doc.length) {
    return this.doc.sliceString(e, n, this.lineBreak);
  }
  facet(e) {
    let n = this.config.address[e.id];
    return n == null ? e.default : (Xs(this, n), Sc(this, n));
  }
  toJSON(e) {
    let n = {
      doc: this.sliceDoc(),
      selection: this.selection.toJSON()
    };
    if (e)
      for (let r in e) {
        let i = e[r];
        i instanceof Ie && this.config.address[i.id] != null && (n[r] = i.spec.toJSON(this.field(e[r]), this));
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
    return Z.create({
      doc: e.doc,
      selection: S.fromJSON(e.selection),
      extensions: n.extensions ? i.concat([n.extensions]) : i
    });
  }
  static create(e = {}) {
    let n = Cc.resolve(e.extensions || [], /* @__PURE__ */ new Map()), r = e.doc instanceof te ? e.doc : te.of((e.doc || "").split(n.staticFacet(Z.lineSeparator) || ju)), i = e.selection ? e.selection instanceof S ? e.selection : S.single(e.selection.anchor, e.selection.head) : S.single(0);
    return Iv(i, r.length), n.staticFacet(Pv) || (i = i.asSingle()), new Z(n, r, i, n.dynamicSlots.map(() => null), (s, o) => o.create(s), null);
  }
  get tabSize() {
    return this.facet(Z.tabSize);
  }
  get lineBreak() {
    return this.facet(Z.lineSeparator) || `
`;
  }
  get readOnly() {
    return this.facet(zv);
  }
  phrase(e, ...n) {
    for (let r of this.facet(Z.phrases))
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
    for (let s of this.facet(Bv))
      for (let o of s(this, n, r))
        Object.prototype.hasOwnProperty.call(o, e) && i.push(o[e]);
    return i;
  }
  charCategorizer(e) {
    return ghe(this.languageDataAt("wordChars", e).join(""));
  }
  wordAt(e) {
    let { text: n, from: r, length: i } = this.doc.lineAt(e), s = this.charCategorizer(e), o = e - r, l = e - r;
    for (; o > 0; ) {
      let c = tt(n, o, !1);
      if (s(n.slice(c, o)) != ke.Word)
        break;
      o = c;
    }
    for (; l < i; ) {
      let c = tt(n, l);
      if (s(n.slice(l, c)) != ke.Word)
        break;
      l = c;
    }
    return o == l ? null : S.range(o + r, l + r);
  }
}
Z.allowMultipleSelections = Pv;
Z.tabSize = /* @__PURE__ */ N.define({
  combine: (t) => t.length ? t[0] : 4
});
Z.lineSeparator = Fv;
Z.readOnly = zv;
Z.phrases = /* @__PURE__ */ N.define({
  compare(t, e) {
    let n = Object.keys(t), r = Object.keys(e);
    return n.length == r.length && n.every((i) => t[i] == e[i]);
  }
});
Z.languageData = Bv;
Z.changeFilter = $v;
Z.transactionFilter = qv;
Z.transactionExtender = Hv;
xs.reconfigure = /* @__PURE__ */ j.define();
function Tn(t, e, n = {}) {
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
class ni {
  eq(e) {
    return this == e;
  }
  range(e, n = e) {
    return po.create(e, n, this);
  }
}
ni.prototype.startSide = ni.prototype.endSide = 0;
ni.prototype.point = !1;
ni.prototype.mapMode = ht.TrackDel;
class po {
  constructor(e, n, r) {
    this.from = e, this.to = n, this.value = r;
  }
  static create(e, n, r) {
    return new po(e, n, r);
  }
}
function Qu(t, e) {
  return t.from - e.from || t.value.startSide - e.value.startSide;
}
class $d {
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
    return { mapped: r.length ? new $d(i, s, r, l) : null, pos: o };
  }
}
class Q {
  constructor(e, n, r, i) {
    this.chunkPos = e, this.chunk = n, this.nextLayer = r, this.maxPoint = i;
  }
  static create(e, n, r, i) {
    return new Q(e, n, r, i);
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
    if (r && (n = n.slice().sort(Qu)), this.isEmpty)
      return n.length ? Q.of(n) : this;
    let l = new Wv(this, null, -1).goto(0), c = 0, a = [], h = new Dt();
    for (; l.value || c < n.length; )
      if (c < n.length && (l.from - n[c].from || l.startSide - n[c].value.startSide) >= 0) {
        let u = n[c++];
        h.addInner(u.from, u.to, u.value) || a.push(u);
      } else
        l.rangeIndex == 1 && l.chunkIndex < this.chunk.length && (c == n.length || this.chunkEnd(l.chunkIndex) < n[c].from) && (!o || i > this.chunkEnd(l.chunkIndex) || s < this.chunkPos[l.chunkIndex]) && h.addChunk(this.chunkPos[l.chunkIndex], this.chunk[l.chunkIndex]) ? l.nextChunk() : ((!o || i > l.to || s < l.from || o(l.from, l.to, l.value)) && (h.addInner(l.from, l.to, l.value) || a.push(po.create(l.from, l.to, l.value))), l.next());
    return h.finishInner(this.nextLayer.isEmpty && !a.length ? Q.empty : this.nextLayer.update({ add: a, filter: o, filterFrom: i, filterTo: s }));
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
    return n.length == 0 ? s : new Q(r, n, s || Q.empty, i);
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
    return go.from([this]).goto(e);
  }
  get isEmpty() {
    return this.nextLayer == this;
  }
  static iter(e, n = 0) {
    return go.from(e).goto(n);
  }
  static compare(e, n, r, i, s = -1) {
    let o = e.filter((u) => u.maxPoint > 0 || !u.isEmpty && u.maxPoint >= s), l = n.filter((u) => u.maxPoint > 0 || !u.isEmpty && u.maxPoint >= s), c = Zm(o, l, r), a = new Rs(o, c, s), h = new Rs(l, c, s);
    r.iterGaps((u, f, d) => Xm(a, u, h, f, d, i)), r.empty && r.length == 0 && Xm(a, 0, h, 0, 0, i);
  }
  static eq(e, n, r = 0, i) {
    i == null && (i = 1e9 - 1);
    let s = e.filter((h) => !h.isEmpty && n.indexOf(h) < 0), o = n.filter((h) => !h.isEmpty && e.indexOf(h) < 0);
    if (s.length != o.length)
      return !1;
    if (!s.length)
      return !0;
    let l = Zm(s, o), c = new Rs(s, l, 0).goto(r), a = new Rs(o, l, 0).goto(r);
    for (; ; ) {
      if (c.to != a.to || !ef(c.active, a.active) || c.point && (!a.point || !c.point.eq(a.point)))
        return !1;
      if (c.to > i)
        return !0;
      c.next(), a.next();
    }
  }
  static spans(e, n, r, i, s = -1) {
    let o = new Rs(e, null, s).goto(n), l = n, c = o.openStart;
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
    let r = new Dt();
    for (let i of e instanceof po ? [e] : n ? mhe(e) : e)
      r.add(i.from, i.to, i.value);
    return r.finish();
  }
}
Q.empty = /* @__PURE__ */ new Q([], [], null, -1);
function mhe(t) {
  if (t.length > 1)
    for (let e = t[0], n = 1; n < t.length; n++) {
      let r = t[n];
      if (Qu(e, r) > 0)
        return t.slice().sort(Qu);
      e = r;
    }
  return t;
}
Q.empty.nextLayer = Q.empty;
class Dt {
  finishChunk(e) {
    this.chunks.push(new $d(this.from, this.to, this.value, this.maxPoint)), this.chunkPos.push(this.chunkStart), this.chunkStart = -1, this.setMaxPoint = Math.max(this.setMaxPoint, this.maxPoint), this.maxPoint = -1, e && (this.from = [], this.to = [], this.value = []);
  }
  constructor() {
    this.chunks = [], this.chunkPos = [], this.chunkStart = -1, this.last = null, this.lastFrom = -1e9, this.lastTo = -1e9, this.from = [], this.to = [], this.value = [], this.maxPoint = -1, this.setMaxPoint = -1, this.nextLayer = null;
  }
  add(e, n, r) {
    this.addInner(e, n, r) || (this.nextLayer || (this.nextLayer = new Dt())).add(e, n, r);
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
    return this.finishInner(Q.empty);
  }
  finishInner(e) {
    if (this.from.length && this.finishChunk(!1), this.chunks.length == 0)
      return e;
    let n = Q.create(this.chunkPos, this.chunks, this.nextLayer ? this.nextLayer.finishInner(e) : e, this.setMaxPoint);
    return this.from = null, n;
  }
}
function Zm(t, e, n) {
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
class Wv {
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
class go {
  constructor(e) {
    this.heap = e;
  }
  static from(e, n = null, r = -1) {
    let i = [];
    for (let s = 0; s < e.length; s++)
      for (let o = e[s]; !o.isEmpty; o = o.nextLayer)
        o.maxPoint >= r && i.push(new Wv(o, n, r, s));
    return i.length == 1 ? i[0] : new go(i);
  }
  get startSide() {
    return this.value ? this.value.startSide : 0;
  }
  goto(e, n = -1e9) {
    for (let r of this.heap)
      r.goto(e, n);
    for (let r = this.heap.length >> 1; r >= 0; r--)
      Nh(this.heap, r);
    return this.next(), this;
  }
  forward(e, n) {
    for (let r of this.heap)
      r.forward(e, n);
    for (let r = this.heap.length >> 1; r >= 0; r--)
      Nh(this.heap, r);
    (this.to - e || this.value.endSide - n) < 0 && this.next();
  }
  next() {
    if (this.heap.length == 0)
      this.from = this.to = 1e9, this.value = null, this.rank = -1;
    else {
      let e = this.heap[0];
      this.from = e.from, this.to = e.to, this.value = e.value, this.rank = e.rank, e.value && e.next(), Nh(this.heap, 0);
    }
  }
}
function Nh(t, e) {
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
class Rs {
  constructor(e, n, r) {
    this.minPoint = r, this.active = [], this.activeTo = [], this.activeRank = [], this.minActive = -1, this.point = null, this.pointFrom = 0, this.pointRank = 0, this.to = -1e9, this.endSide = 0, this.openStart = -1, this.cursor = go.from(e, n, r);
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
    fl(this.active, e), fl(this.activeTo, e), fl(this.activeRank, e), this.minActive = Qm(this.active, this.activeTo);
  }
  addActive(e) {
    let n = 0, { value: r, to: i, rank: s } = this.cursor;
    for (; n < this.activeRank.length && this.activeRank[n] <= s; )
      n++;
    dl(this.active, n, r), dl(this.activeTo, n, i), dl(this.activeRank, n, s), e && dl(e, n, this.cursor.from), this.minActive = Qm(this.active, this.activeTo);
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
        this.removeActive(i), r && fl(r, i);
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
function Xm(t, e, n, r, i, s) {
  t.goto(e), n.goto(r);
  let o = r + i, l = r, c = r - e;
  for (; ; ) {
    let a = t.to + c - n.to || t.endSide - n.endSide, h = a < 0 ? t.to + c : n.to, u = Math.min(h, o);
    if (t.point || n.point ? t.point && n.point && (t.point == n.point || t.point.eq(n.point)) && ef(t.activeForPoint(t.to), n.activeForPoint(n.to)) || s.comparePoint(l, u, t.point, n.point) : u > l && !ef(t.active, n.active) && s.compareRange(l, u, t.active, n.active), h > o)
      break;
    l = h, a <= 0 && t.next(), a >= 0 && n.next();
  }
}
function ef(t, e) {
  if (t.length != e.length)
    return !1;
  for (let n = 0; n < t.length; n++)
    if (t[n] != e[n] && !t[n].eq(e[n]))
      return !1;
  return !0;
}
function fl(t, e) {
  for (let n = e, r = t.length - 1; n < r; n++)
    t[n] = t[n + 1];
  t.pop();
}
function dl(t, e, n) {
  for (let r = t.length - 1; r >= e; r--)
    t[r + 1] = t[r];
  t[e] = n;
}
function Qm(t, e) {
  let n = -1, r = 1e9;
  for (let i = 0; i < e.length; i++)
    (e[i] - r || t[i].endSide - t[n].endSide) < 0 && (n = i, r = e[i]);
  return n;
}
function ks(t, e, n = t.length) {
  let r = 0;
  for (let i = 0; i < n; )
    t.charCodeAt(i) == 9 ? (r += e - r % e, i++) : (r++, i = tt(t, i));
  return r;
}
function tf(t, e, n, r) {
  for (let i = 0, s = 0; ; ) {
    if (s >= e)
      return i;
    if (i == t.length)
      break;
    s += t.charCodeAt(i) == 9 ? n - s % n : 1, i = tt(t, i);
  }
  return r === !0 ? -1 : t.length;
}
const nf = "\u037C", e0 = typeof Symbol > "u" ? "__" + nf : Symbol.for(nf), rf = typeof Symbol > "u" ? "__styleSet" + Math.floor(Math.random() * 1e8) : Symbol("styleSet"), t0 = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : {};
class Un {
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
    let e = t0[e0] || 1;
    return t0[e0] = e + 1, nf + e.toString(36);
  }
  static mount(e, n, r) {
    let i = e[rf], s = r && r.nonce;
    i ? s && i.setNonce(s) : i = new yhe(e, s), i.mount(Array.isArray(n) ? n : [n]);
  }
}
let n0 = /* @__PURE__ */ new Map();
class yhe {
  constructor(e, n) {
    let r = e.ownerDocument || e, i = r.defaultView;
    if (!e.head && e.adoptedStyleSheets && i.CSSStyleSheet) {
      let s = n0.get(r);
      if (s)
        return e.adoptedStyleSheets = [s.sheet, ...e.adoptedStyleSheets], e[rf] = s;
      this.sheet = new i.CSSStyleSheet(), e.adoptedStyleSheets = [this.sheet, ...e.adoptedStyleSheets], n0.set(r, this);
    } else {
      this.styleTag = r.createElement("style"), n && this.styleTag.setAttribute("nonce", n);
      let s = e.head || e;
      s.insertBefore(this.styleTag, s.firstChild);
    }
    this.modules = [], e[rf] = this;
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
var yr = {
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
}, mo = {
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
}, bhe = typeof navigator < "u" && /Mac/.test(navigator.platform), vhe = typeof navigator < "u" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);
for (var je = 0; je < 10; je++)
  yr[48 + je] = yr[96 + je] = String(je);
for (var je = 1; je <= 24; je++)
  yr[je + 111] = "F" + je;
for (var je = 65; je <= 90; je++)
  yr[je] = String.fromCharCode(je + 32), mo[je] = String.fromCharCode(je);
for (var Bh in yr)
  mo.hasOwnProperty(Bh) || (mo[Bh] = yr[Bh]);
function whe(t) {
  var e = bhe && t.metaKey && t.shiftKey && !t.ctrlKey && !t.altKey || vhe && t.shiftKey && t.key && t.key.length == 1 || t.key == "Unidentified", n = !e && t.key || (t.shiftKey ? mo : yr)[t.keyCode] || t.key || "Unidentified";
  return n == "Esc" && (n = "Escape"), n == "Del" && (n = "Delete"), n == "Left" && (n = "ArrowLeft"), n == "Up" && (n = "ArrowUp"), n == "Right" && (n = "ArrowRight"), n == "Down" && (n = "ArrowDown"), n;
}
function Ac(t) {
  let e;
  return t.nodeType == 11 ? e = t.getSelection ? t : t.ownerDocument : e = t, e.getSelection();
}
function sf(t, e) {
  return e ? t == e || t.contains(e.nodeType != 1 ? e.parentNode : e) : !1;
}
function xhe(t) {
  let e = t.activeElement;
  for (; e && e.shadowRoot; )
    e = e.shadowRoot.activeElement;
  return e;
}
function Ql(t, e) {
  if (!e.anchorNode)
    return !1;
  try {
    return sf(t, e.anchorNode);
  } catch {
    return !1;
  }
}
function yo(t) {
  return t.nodeType == 3 ? ri(t, 0, t.nodeValue.length).getClientRects() : t.nodeType == 1 ? t.getClientRects() : [];
}
function Ec(t, e, n, r) {
  return n ? r0(t, e, n, r, -1) || r0(t, e, n, r, 1) : !1;
}
function Dc(t) {
  for (var e = 0; ; e++)
    if (t = t.previousSibling, !t)
      return e;
}
function r0(t, e, n, r, i) {
  for (; ; ) {
    if (t == n && e == r)
      return !0;
    if (e == (i < 0 ? 0 : br(t))) {
      if (t.nodeName == "DIV")
        return !1;
      let s = t.parentNode;
      if (!s || s.nodeType != 1)
        return !1;
      e = Dc(t) + (i < 0 ? 0 : 1), t = s;
    } else if (t.nodeType == 1) {
      if (t = t.childNodes[e + (i < 0 ? -1 : 0)], t.nodeType == 1 && t.contentEditable == "false")
        return !1;
      e = i < 0 ? br(t) : 0;
    } else
      return !1;
  }
}
function br(t) {
  return t.nodeType == 3 ? t.nodeValue.length : t.childNodes.length;
}
function qd(t, e) {
  let n = e ? t.left : t.right;
  return { left: n, right: n, top: t.top, bottom: t.bottom };
}
function khe(t) {
  return {
    left: 0,
    right: t.innerWidth,
    top: 0,
    bottom: t.innerHeight
  };
}
function _he(t, e, n, r, i, s, o, l) {
  let c = t.ownerDocument, a = c.defaultView || window;
  for (let h = t, u = !1; h && !u; )
    if (h.nodeType == 1) {
      let f, d = h == c.body;
      if (d)
        f = khe(a);
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
function Che(t) {
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
class She {
  constructor() {
    this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0;
  }
  eq(e) {
    return this.anchorNode == e.anchorNode && this.anchorOffset == e.anchorOffset && this.focusNode == e.focusNode && this.focusOffset == e.focusOffset;
  }
  setRange(e) {
    let { anchorNode: n, focusNode: r } = e;
    this.set(n, Math.min(e.anchorOffset, n ? br(n) : 0), r, Math.min(e.focusOffset, r ? br(r) : 0));
  }
  set(e, n, r, i) {
    this.anchorNode = e, this.anchorOffset = n, this.focusNode = r, this.focusOffset = i;
  }
}
let _i = null;
function jv(t) {
  if (t.setActive)
    return t.setActive();
  if (_i)
    return t.focus(_i);
  let e = [];
  for (let n = t; n && (e.push(n, n.scrollTop, n.scrollLeft), n != n.ownerDocument); n = n.parentNode)
    ;
  if (t.focus(_i == null ? {
    get preventScroll() {
      return _i = { preventScroll: !0 }, !0;
    }
  } : void 0), !_i) {
    _i = !1;
    for (let n = 0; n < e.length; ) {
      let r = e[n++], i = e[n++], s = e[n++];
      r.scrollTop != i && (r.scrollTop = i), r.scrollLeft != s && (r.scrollLeft = s);
    }
  }
}
let i0;
function ri(t, e, n = e) {
  let r = i0 || (i0 = document.createRange());
  return r.setEnd(t, n), r.setStart(t, e), r;
}
function qi(t, e, n) {
  let r = { key: e, code: e, keyCode: n, which: n, cancelable: !0 }, i = new KeyboardEvent("keydown", r);
  i.synthetic = !0, t.dispatchEvent(i);
  let s = new KeyboardEvent("keyup", r);
  return s.synthetic = !0, t.dispatchEvent(s), i.defaultPrevented || s.defaultPrevented;
}
function Ahe(t) {
  for (; t; ) {
    if (t && (t.nodeType == 9 || t.nodeType == 11 && t.host))
      return t;
    t = t.assignedSlot || t.parentNode;
  }
  return null;
}
function Gv(t) {
  for (; t.attributes.length; )
    t.removeAttributeNode(t.attributes[0]);
}
function Ehe(t, e) {
  let n = e.focusNode, r = e.focusOffset;
  if (!n || e.anchorNode != n || e.anchorOffset != r)
    return !1;
  for (r = Math.min(r, br(n)); ; )
    if (r) {
      if (n.nodeType != 1)
        return !1;
      let i = n.childNodes[r - 1];
      i.contentEditable == "false" ? r-- : (n = i, r = br(n));
    } else {
      if (n == t)
        return !0;
      r = Dc(n), n = n.parentNode;
    }
}
function Yv(t) {
  return t.scrollTop > Math.max(1, t.scrollHeight - t.clientHeight - 4);
}
class ut {
  constructor(e, n, r = !0) {
    this.node = e, this.offset = n, this.precise = r;
  }
  static before(e, n) {
    return new ut(e.parentNode, Dc(e), n);
  }
  static after(e, n) {
    return new ut(e.parentNode, Dc(e) + 1, n);
  }
}
const Hd = [];
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
            s = s0(s);
        else
          r.insertBefore(o.dom, s);
        i = o.dom;
      }
      for (s = i ? i.nextSibling : r.firstChild, s && n && n.node == r && (n.written = !0); s; )
        s = s0(s);
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
      let i = br(e) == 0 ? 0 : n == 0 ? -1 : 1;
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
  replaceChildren(e, n, r = Hd) {
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
    return new Kv(this.children, e, this.children.length);
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
function s0(t) {
  let e = t.nextSibling;
  return t.parentNode.removeChild(t), e;
}
class Kv {
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
function Jv(t, e, n, r, i, s, o, l, c) {
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
function Zv(t, e, n, r, i, s) {
  let o = t.childCursor(), { i: l, off: c } = o.findPos(n, 1), { i: a, off: h } = o.findPos(e, -1), u = e - n;
  for (let f of r)
    u += f.length;
  t.length += u, Jv(t, a, h, l, c, r, 0, i, s);
}
const Mi = "\uFFFF";
class Xv {
  constructor(e, n) {
    this.points = e, this.text = "", this.lineSeparator = n.facet(Z.lineSeparator);
  }
  append(e) {
    this.text += e;
  }
  lineBreak() {
    this.text += Mi;
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
      (l && c ? l.breakAfter : (l ? l.breakAfter : o0(i)) || o0(o) && (i.nodeName != "BR" || i.cmIgnore) && this.text.length > s) && this.lineBreak(), i = o;
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
function o0(t) {
  return t.nodeType == 1 && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(t.nodeName);
}
class l0 {
  constructor(e, n) {
    this.node = e, this.offset = n, this.pos = -1;
  }
}
let St = typeof navigator < "u" ? navigator : { userAgent: "", vendor: "", platform: "" }, of = typeof document < "u" ? document : { documentElement: { style: {} } };
const lf = /* @__PURE__ */ /Edge\/(\d+)/.exec(St.userAgent), Qv = /* @__PURE__ */ /MSIE \d/.test(St.userAgent), cf = /* @__PURE__ */ /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(St.userAgent), Aa = !!(Qv || cf || lf), c0 = !Aa && /* @__PURE__ */ /gecko\/(\d+)/i.test(St.userAgent), Ph = !Aa && /* @__PURE__ */ /Chrome\/(\d+)/.exec(St.userAgent), a0 = "webkitFontSmoothing" in of.documentElement.style, ew = !Aa && /* @__PURE__ */ /Apple Computer/.test(St.vendor), h0 = ew && (/* @__PURE__ */ /Mobile\/\w+/.test(St.userAgent) || St.maxTouchPoints > 2);
var B = {
  mac: h0 || /* @__PURE__ */ /Mac/.test(St.platform),
  windows: /* @__PURE__ */ /Win/.test(St.platform),
  linux: /* @__PURE__ */ /Linux|X11/.test(St.platform),
  ie: Aa,
  ie_version: Qv ? of.documentMode || 6 : cf ? +cf[1] : lf ? +lf[1] : 0,
  gecko: c0,
  gecko_version: c0 ? +(/* @__PURE__ */ /Firefox\/(\d+)/.exec(St.userAgent) || [0, 0])[1] : 0,
  chrome: !!Ph,
  chrome_version: Ph ? +Ph[1] : 0,
  ios: h0,
  android: /* @__PURE__ */ /Android\b/.test(St.userAgent),
  webkit: a0,
  safari: ew,
  webkit_version: a0 ? +(/* @__PURE__ */ /\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1] : 0,
  tabSize: of.documentElement.style.tabSize != null ? "tab-size" : "-moz-tab-size"
};
const Dhe = 256;
class _n extends ge {
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
    return this.flags & 8 || r && (!(r instanceof _n) || this.length - (n - e) + r.length > Dhe || r.flags & 8) ? !1 : (this.text = this.text.slice(0, e) + (r ? r.text : "") + this.text.slice(n), this.markDirty(), !0);
  }
  split(e) {
    let n = new _n(this.text.slice(e));
    return this.text = this.text.slice(0, e), this.markDirty(), n.flags |= this.flags & 8, n;
  }
  localPosFromDOM(e, n) {
    return e == this.dom ? n : n ? this.text.length : 0;
  }
  domAtPos(e) {
    return new ut(this.dom, e);
  }
  domBoundsAround(e, n, r) {
    return { from: r, to: r + this.length, startDOM: this.dom, endDOM: this.dom.nextSibling };
  }
  coordsAt(e, n) {
    return The(this.dom, e, n);
  }
}
class Wn extends ge {
  constructor(e, n = [], r = 0) {
    super(), this.mark = e, this.children = n, this.length = r;
    for (let i of n)
      i.setParent(this);
  }
  setAttrs(e) {
    if (Gv(e), this.mark.class && (e.className = this.mark.class), this.mark.attrs)
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
    return r && (!(r instanceof Wn && r.mark.eq(this.mark)) || e && s <= 0 || n < this.length && o <= 0) ? !1 : (Zv(this, e, n, r ? r.children : [], s - 1, o - 1), this.markDirty(), !0);
  }
  split(e) {
    let n = [], r = 0, i = -1, s = 0;
    for (let l of this.children) {
      let c = r + l.length;
      c > e && n.push(r < e ? l.split(e - r) : l), i < 0 && r >= e && (i = s), r = c, s++;
    }
    let o = this.length - e;
    return this.length = e, i > -1 && (this.children.length = i, this.markDirty()), new Wn(this.mark, n, o);
  }
  domAtPos(e) {
    return tw(this, e);
  }
  coordsAt(e, n) {
    return rw(this, e, n);
  }
}
function The(t, e, n) {
  let r = t.nodeValue.length;
  e > r && (e = r);
  let i = e, s = e, o = 0;
  e == 0 && n < 0 || e == r && n >= 0 ? B.chrome || B.gecko || (e ? (i--, o = 1) : s < r && (s++, o = -1)) : n < 0 ? i-- : s < r && s++;
  let l = ri(t, i, s).getClientRects();
  if (!l.length)
    return null;
  let c = l[(o ? o < 0 : n >= 0) ? 0 : l.length - 1];
  return B.safari && !o && c.width == 0 && (c = Array.prototype.find.call(l, (a) => a.width) || c), o ? qd(c, o < 0) : c || null;
}
class or extends ge {
  static create(e, n, r) {
    return new or(e, n, r);
  }
  constructor(e, n, r) {
    super(), this.widget = e, this.length = n, this.side = r, this.prevWidget = null;
  }
  split(e) {
    let n = or.create(this.widget, this.length - e, this.side);
    return this.length -= e, n;
  }
  sync(e) {
    (!this.dom || !this.widget.updateDOM(this.dom, e)) && (this.dom && this.prevWidget && this.prevWidget.destroy(this.dom), this.prevWidget = null, this.setDOM(this.widget.toDOM(e)), this.dom.contentEditable = "false");
  }
  getSide() {
    return this.side;
  }
  merge(e, n, r, i, s, o) {
    return r && (!(r instanceof or) || !this.widget.compare(r.widget) || e > 0 && s <= 0 || n < this.length && o <= 0) ? !1 : (this.length = e + (r ? r.length : 0) + (this.length - n), !0);
  }
  become(e) {
    return e instanceof or && e.side == this.side && this.widget.constructor == e.widget.constructor ? (this.widget.compare(e.widget) || this.markDirty(!0), this.dom && !this.prevWidget && (this.prevWidget = this.widget), this.widget = e.widget, this.length = e.length, !0) : !1;
  }
  ignoreMutation() {
    return !0;
  }
  ignoreEvent(e) {
    return this.widget.ignoreEvent(e);
  }
  get overrideDOMText() {
    if (this.length == 0)
      return te.empty;
    let e = this;
    for (; e.parent; )
      e = e.parent;
    let { view: n } = e, r = n && n.state.doc, i = this.posAtStart;
    return r ? r.slice(i, i + this.length) : te.empty;
  }
  domAtPos(e) {
    return (this.length ? e == 0 : this.side > 0) ? ut.before(this.dom) : ut.after(this.dom, e == this.length);
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
    return qd(s, !o);
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
class ts extends ge {
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
    return e instanceof ts && e.side == this.side;
  }
  split() {
    return new ts(this.side);
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
    return this.side > 0 ? ut.before(this.dom) : ut.after(this.dom);
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
    return te.empty;
  }
  get isHidden() {
    return !0;
  }
}
_n.prototype.children = or.prototype.children = ts.prototype.children = Hd;
function tw(t, e) {
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
  return new ut(n, 0);
}
function nw(t, e, n) {
  let r, { children: i } = t;
  n > 0 && e instanceof Wn && i.length && (r = i[i.length - 1]) instanceof Wn && r.mark.eq(e.mark) ? nw(r, e.children[0], n - 1) : (i.push(e), e.setParent(t)), t.length += e.length;
}
function rw(t, e, n) {
  let r = null, i = -1, s = null, o = -1;
  function l(a, h) {
    for (let u = 0, f = 0; u < a.children.length && f <= h; u++) {
      let d = a.children[u], p = f + d.length;
      p >= h && (d.children.length ? l(d, h - f) : (!s || s.isHidden && n > 0) && (p > h || f == p && d.getSide() > 0) ? (s = d, o = h - f) : (f < h || f == p && d.getSide() < 0 && !d.isHidden) && (r = d, i = h - f)), f = p;
    }
  }
  l(t, e);
  let c = (n < 0 ? r : s) || r || s;
  return c ? c.coordsAt(Math.max(0, c == r ? i : o), n) : Mhe(t);
}
function Mhe(t) {
  let e = t.dom.lastChild;
  if (!e)
    return t.dom.getBoundingClientRect();
  let n = yo(e);
  return n[n.length - 1] || null;
}
function af(t, e) {
  for (let n in t)
    n == "class" && e.class ? e.class += " " + t.class : n == "style" && e.style ? e.style += ";" + t.style : e[n] = t[n];
  return e;
}
const u0 = /* @__PURE__ */ Object.create(null);
function zd(t, e, n) {
  if (t == e)
    return !0;
  t || (t = u0), e || (e = u0);
  let r = Object.keys(t), i = Object.keys(e);
  if (r.length - (n && r.indexOf(n) > -1 ? 1 : 0) != i.length - (n && i.indexOf(n) > -1 ? 1 : 0))
    return !1;
  for (let s of r)
    if (s != n && (i.indexOf(s) == -1 || t[s] !== e[s]))
      return !1;
  return !0;
}
function hf(t, e, n) {
  let r = !1;
  if (e)
    for (let i in e)
      n && i in n || (r = !0, i == "style" ? t.style.cssText = "" : t.removeAttribute(i));
  if (n)
    for (let i in n)
      e && e[i] == n[i] || (r = !0, i == "style" ? t.style.cssText = n[i] : t.setAttribute(i, n[i]));
  return r;
}
function Ohe(t) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let n = 0; n < t.attributes.length; n++) {
    let r = t.attributes[n];
    e[r.name] = r.value;
  }
  return e;
}
class tn {
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
class P extends ni {
  constructor(e, n, r, i) {
    super(), this.startSide = e, this.endSide = n, this.widget = r, this.spec = i;
  }
  get heightRelevant() {
    return !1;
  }
  static mark(e) {
    return new Ho(e);
  }
  static widget(e) {
    let n = Math.max(-1e4, Math.min(1e4, e.side || 0)), r = !!e.block;
    return n += r && !e.inlineOrder ? n > 0 ? 3e8 : -4e8 : n > 0 ? 1e8 : -1e8, new vr(e, n, n, r, e.widget || null, !1);
  }
  static replace(e) {
    let n = !!e.block, r, i;
    if (e.isBlockGap)
      r = -5e8, i = 4e8;
    else {
      let { start: s, end: o } = iw(e, n);
      r = (s ? n ? -3e8 : -1 : 5e8) - 1, i = (o ? n ? 2e8 : 1 : -6e8) + 1;
    }
    return new vr(e, r, i, n, e.widget || null, !0);
  }
  static line(e) {
    return new zo(e);
  }
  static set(e, n = !1) {
    return Q.of(e, n);
  }
  hasHeight() {
    return this.widget ? this.widget.estimatedHeight > -1 : !1;
  }
}
P.none = Q.empty;
class Ho extends P {
  constructor(e) {
    let { start: n, end: r } = iw(e);
    super(n ? -1 : 5e8, r ? 1 : -6e8, null, e), this.tagName = e.tagName || "span", this.class = e.class || "", this.attrs = e.attributes || null;
  }
  eq(e) {
    var n, r;
    return this == e || e instanceof Ho && this.tagName == e.tagName && (this.class || ((n = this.attrs) === null || n === void 0 ? void 0 : n.class)) == (e.class || ((r = e.attrs) === null || r === void 0 ? void 0 : r.class)) && zd(this.attrs, e.attrs, "class");
  }
  range(e, n = e) {
    if (e >= n)
      throw new RangeError("Mark decorations may not be empty");
    return super.range(e, n);
  }
}
Ho.prototype.point = !1;
class zo extends P {
  constructor(e) {
    super(-2e8, -2e8, null, e);
  }
  eq(e) {
    return e instanceof zo && this.spec.class == e.spec.class && zd(this.spec.attributes, e.spec.attributes);
  }
  range(e, n = e) {
    if (n != e)
      throw new RangeError("Line decoration ranges must be zero-length");
    return super.range(e, n);
  }
}
zo.prototype.mapMode = ht.TrackBefore;
zo.prototype.point = !0;
class vr extends P {
  constructor(e, n, r, i, s, o) {
    super(n, r, s, e), this.block = i, this.isReplace = o, this.mapMode = i ? n <= 0 ? ht.TrackBefore : ht.TrackAfter : ht.TrackDel;
  }
  get type() {
    return this.startSide < this.endSide ? Se.WidgetRange : this.startSide <= 0 ? Se.WidgetBefore : Se.WidgetAfter;
  }
  get heightRelevant() {
    return this.block || !!this.widget && (this.widget.estimatedHeight >= 5 || this.widget.lineBreaks > 0);
  }
  eq(e) {
    return e instanceof vr && Lhe(this.widget, e.widget) && this.block == e.block && this.startSide == e.startSide && this.endSide == e.endSide;
  }
  range(e, n = e) {
    if (this.isReplace && (e > n || e == n && this.startSide > 0 && this.endSide <= 0))
      throw new RangeError("Invalid range for replacement decoration");
    if (!this.isReplace && n != e)
      throw new RangeError("Widget decorations can only have zero-length ranges");
    return super.range(e, n);
  }
}
vr.prototype.point = !0;
function iw(t, e = !1) {
  let { inclusiveStart: n, inclusiveEnd: r } = t;
  return n == null && (n = t.inclusive), r == null && (r = t.inclusive), { start: n != null ? n : e, end: r != null ? r : e };
}
function Lhe(t, e) {
  return t == e || !!(t && e && t.compare(e));
}
function uf(t, e, n, r = 0) {
  let i = n.length - 1;
  i >= 0 && n[i] + r >= t ? n[i] = Math.max(n[i], e) : n.push(t, e);
}
class ct extends ge {
  constructor() {
    super(...arguments), this.children = [], this.length = 0, this.prevAttrs = void 0, this.attrs = null, this.breakAfter = 0;
  }
  merge(e, n, r, i, s, o) {
    if (r) {
      if (!(r instanceof ct))
        return !1;
      this.dom || r.transferDOM(this);
    }
    return i && this.setDeco(r ? r.attrs : null), Zv(this, e, n, r ? r.children : [], s, o), !0;
  }
  split(e) {
    let n = new ct();
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
    zd(this.attrs, e) || (this.dom && (this.prevAttrs = this.attrs, this.markDirty()), this.attrs = e);
  }
  append(e, n) {
    nw(this, e, n);
  }
  addLineDeco(e) {
    let n = e.spec.attributes, r = e.spec.class;
    n && (this.attrs = af(n, this.attrs || {})), r && (this.attrs = af({ class: r }, this.attrs || {}));
  }
  domAtPos(e) {
    return tw(this, e);
  }
  reuseDOM(e) {
    e.nodeName == "DIV" && (this.setDOM(e), this.flags |= 6);
  }
  sync(e, n) {
    var r;
    this.dom ? this.flags & 4 && (Gv(this.dom), this.dom.className = "cm-line", this.prevAttrs = this.attrs ? null : void 0) : (this.setDOM(document.createElement("div")), this.dom.className = "cm-line", this.prevAttrs = this.attrs ? null : void 0), this.prevAttrs !== void 0 && (hf(this.dom, this.prevAttrs, this.attrs), this.dom.classList.add("cm-line"), this.prevAttrs = void 0), super.sync(e, n);
    let i = this.dom.lastChild;
    for (; i && ge.get(i) instanceof Wn; )
      i = i.lastChild;
    if (!i || !this.length || i.nodeName != "BR" && ((r = ge.get(i)) === null || r === void 0 ? void 0 : r.isEditable) == !1 && (!B.ios || !this.children.some((s) => s instanceof _n))) {
      let s = document.createElement("BR");
      s.cmIgnore = !0, this.dom.appendChild(s);
    }
  }
  measureTextSize() {
    if (this.children.length == 0 || this.length > 20)
      return null;
    let e = 0, n;
    for (let r of this.children) {
      if (!(r instanceof _n) || /[^ -~]/.test(r.text))
        return null;
      let i = yo(r.dom);
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
    let r = rw(this, e, n);
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
        if (s instanceof ct)
          return s;
        if (o > n)
          break;
      }
      i = o + s.breakAfter;
    }
    return null;
  }
}
class jr extends ge {
  constructor(e, n, r) {
    super(), this.widget = e, this.length = n, this.type = r, this.breakAfter = 0, this.prevWidget = null;
  }
  merge(e, n, r, i, s, o) {
    return r && (!(r instanceof jr) || !this.widget.compare(r.widget) || e > 0 && s <= 0 || n < this.length && o <= 0) ? !1 : (this.length = e + (r ? r.length : 0) + (this.length - n), !0);
  }
  domAtPos(e) {
    return e == 0 ? ut.before(this.dom) : ut.after(this.dom, e == this.length);
  }
  split(e) {
    let n = this.length - e;
    this.length = e;
    let r = new jr(this.widget, n, this.type);
    return r.breakAfter = this.breakAfter, r;
  }
  get children() {
    return Hd;
  }
  sync(e) {
    (!this.dom || !this.widget.updateDOM(this.dom, e)) && (this.dom && this.prevWidget && this.prevWidget.destroy(this.dom), this.prevWidget = null, this.setDOM(this.widget.toDOM(e)), this.dom.contentEditable = "false");
  }
  get overrideDOMText() {
    return this.parent ? this.parent.view.state.doc.slice(this.posAtStart, this.posAtEnd) : te.empty;
  }
  domBoundsAround() {
    return null;
  }
  become(e) {
    return e instanceof jr && e.widget.constructor == this.widget.constructor ? (e.widget.compare(this.widget) || this.markDirty(!0), this.dom && !this.prevWidget && (this.prevWidget = this.widget), this.widget = e.widget, this.length = e.length, this.type = e.type, this.breakAfter = e.breakAfter, !0) : !1;
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
class Qs {
  constructor(e, n, r, i) {
    this.doc = e, this.pos = n, this.end = r, this.disallowBlockEffectsFor = i, this.content = [], this.curLine = null, this.breakAtStart = 0, this.pendingBuffer = 0, this.bufferMarks = [], this.atCursorPos = !0, this.openStart = -1, this.openEnd = -1, this.text = "", this.textOff = 0, this.cursor = e.iter(), this.skip = n;
  }
  posCovered() {
    if (this.content.length == 0)
      return !this.breakAtStart && this.doc.lineAt(this.pos).from != this.pos;
    let e = this.content[this.content.length - 1];
    return !e.breakAfter && !(e instanceof jr && e.type == Se.WidgetBefore);
  }
  getLine() {
    return this.curLine || (this.content.push(this.curLine = new ct()), this.atCursorPos = !0), this.curLine;
  }
  flushBuffer(e = this.bufferMarks) {
    this.pendingBuffer && (this.curLine.append(pl(new ts(-1), e), e.length), this.pendingBuffer = 0);
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
      this.flushBuffer(n.slice(n.length - r)), this.getLine().append(pl(new _n(this.text.slice(this.textOff, this.textOff + i)), n), r), this.atCursorPos = !0, this.textOff += i, e -= i, r = 0;
    }
  }
  span(e, n, r, i) {
    this.buildText(n - e, r, i), this.pos = n, this.openStart < 0 && (this.openStart = i);
  }
  point(e, n, r, i, s, o) {
    if (this.disallowBlockEffectsFor[o] && r instanceof vr) {
      if (r.block)
        throw new RangeError("Block decorations may not be specified via plugins");
      if (n > this.doc.lineAt(this.pos).to)
        throw new RangeError("Decorations that replace line breaks may not be specified via plugins");
    }
    let l = n - e;
    if (r instanceof vr)
      if (r.block) {
        let { type: c } = r;
        c == Se.WidgetAfter && !this.posCovered() && this.getLine(), this.addBlockWidget(new jr(r.widget || new f0("div"), l, c));
      } else {
        let c = or.create(r.widget || new f0("span"), l, l ? 0 : r.startSide), a = this.atCursorPos && !c.isEditable && s <= i.length && (e < n || r.startSide > 0), h = !c.isEditable && (e < n || s > i.length || r.startSide <= 0), u = this.getLine();
        this.pendingBuffer == 2 && !a && !c.isEditable && (this.pendingBuffer = 0), this.flushBuffer(i), a && (u.append(pl(new ts(1), i), s), s = i.length + Math.max(0, s - i.length)), u.append(pl(c, i), s), this.atCursorPos = h, this.pendingBuffer = h ? e < n || s > i.length ? 1 : 2 : 0, this.pendingBuffer && (this.bufferMarks = i.slice());
      }
    else
      this.doc.lineAt(this.pos).from == this.pos && this.getLine().addLineDeco(r);
    l && (this.textOff + l <= this.text.length ? this.textOff += l : (this.skip += l - (this.text.length - this.textOff), this.text = "", this.textOff = 0), this.pos = n), this.openStart < 0 && (this.openStart = s);
  }
  static build(e, n, r, i, s) {
    let o = new Qs(e, n, r, s);
    return o.openEnd = Q.spans(i, n, r, o), o.openStart < 0 && (o.openStart = o.openEnd), o.finish(o.openEnd), o;
  }
}
function pl(t, e) {
  for (let n of e)
    t = new Wn(n, [t], t.length);
  return t;
}
class f0 extends tn {
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
const sw = /* @__PURE__ */ N.define(), ow = /* @__PURE__ */ N.define(), lw = /* @__PURE__ */ N.define(), cw = /* @__PURE__ */ N.define(), ff = /* @__PURE__ */ N.define(), aw = /* @__PURE__ */ N.define(), hw = /* @__PURE__ */ N.define(), uw = /* @__PURE__ */ N.define({
  combine: (t) => t.some((e) => e)
}), fw = /* @__PURE__ */ N.define({
  combine: (t) => t.some((e) => e)
});
class Tc {
  constructor(e, n = "nearest", r = "nearest", i = 5, s = 5) {
    this.range = e, this.y = n, this.x = r, this.yMargin = i, this.xMargin = s;
  }
  map(e) {
    return e.empty ? this : new Tc(this.range.map(e), this.y, this.x, this.yMargin, this.xMargin);
  }
}
const d0 = /* @__PURE__ */ j.define({ map: (t, e) => t.map(e) });
function It(t, e, n) {
  let r = t.facet(cw);
  r.length ? r[0](e) : window.onerror ? window.onerror(String(e), n, void 0, void 0, e) : n ? console.error(n + ":", e) : console.error(e);
}
const Ea = /* @__PURE__ */ N.define({ combine: (t) => t.length ? t[0] : !0 });
let Rhe = 0;
const Hs = /* @__PURE__ */ N.define();
class Ae {
  constructor(e, n, r, i) {
    this.id = e, this.create = n, this.domEventHandlers = r, this.extension = i(this);
  }
  static define(e, n) {
    const { eventHandlers: r, provide: i, decorations: s } = n || {};
    return new Ae(Rhe++, e, r, (o) => {
      let l = [Hs.of(o)];
      return s && l.push(bo.of((c) => {
        let a = c.plugin(o);
        return a ? s(a) : P.none;
      })), i && l.push(i(o)), l;
    });
  }
  static fromClass(e, n) {
    return Ae.define((r) => new e(r), n);
  }
}
class Fh {
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
            if (It(n.state, r, "CodeMirror plugin crashed"), this.value.destroy)
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
        It(e.state, n, "CodeMirror plugin crashed"), this.deactivate();
      }
    return this;
  }
  destroy(e) {
    var n;
    if (!((n = this.value) === null || n === void 0) && n.destroy)
      try {
        this.value.destroy();
      } catch (r) {
        It(e.state, r, "CodeMirror plugin crashed");
      }
  }
  deactivate() {
    this.spec = this.value = null;
  }
}
const dw = /* @__PURE__ */ N.define(), Vd = /* @__PURE__ */ N.define(), bo = /* @__PURE__ */ N.define(), Ud = /* @__PURE__ */ N.define(), pw = /* @__PURE__ */ N.define();
function p0(t, e, n) {
  let r = t.state.facet(pw);
  if (!r.length)
    return r;
  let i = r.map((o) => o instanceof Function ? o(t) : o), s = [];
  return Q.spans(i, e, n, {
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
const gw = /* @__PURE__ */ N.define();
function mw(t) {
  let e = 0, n = 0, r = 0, i = 0;
  for (let s of t.state.facet(gw)) {
    let o = s(t);
    o && (o.left != null && (e = Math.max(e, o.left)), o.right != null && (n = Math.max(n, o.right)), o.top != null && (r = Math.max(r, o.top)), o.bottom != null && (i = Math.max(i, o.bottom)));
  }
  return { left: e, right: n, top: r, bottom: i };
}
const zs = /* @__PURE__ */ N.define();
class Nt {
  constructor(e, n, r, i) {
    this.fromA = e, this.toA = n, this.fromB = r, this.toB = i;
  }
  join(e) {
    return new Nt(Math.min(this.fromA, e.fromA), Math.max(this.toA, e.toA), Math.min(this.fromB, e.fromB), Math.max(this.toB, e.toB));
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
        if (d <= p && new Nt(d + a, p + a, d, p).addToSet(r), f > h)
          break;
        s += 2;
      }
      if (!c)
        return r;
      new Nt(c.fromA, c.toA, c.fromB, c.toB).addToSet(r), o = c.toA, l = c.toB;
    }
  }
}
class Mc {
  constructor(e, n, r) {
    this.view = e, this.state = n, this.transactions = r, this.flags = 0, this.startState = e.state, this.changes = Ne.empty(this.startState.doc.length);
    for (let s of r)
      this.changes = this.changes.compose(s.changes);
    let i = [];
    this.changes.iterChangedRanges((s, o, l, c) => i.push(new Nt(s, o, l, c))), this.changedRanges = i;
  }
  static create(e, n, r) {
    return new Mc(e, n, r);
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
var Ce = /* @__PURE__ */ function(t) {
  return t[t.LTR = 0] = "LTR", t[t.RTL = 1] = "RTL", t;
}(Ce || (Ce = {}));
const vo = Ce.LTR, yw = Ce.RTL;
function bw(t) {
  let e = [];
  for (let n = 0; n < t.length; n++)
    e.push(1 << +t[n]);
  return e;
}
const Ihe = /* @__PURE__ */ bw("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"), Nhe = /* @__PURE__ */ bw("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"), df = /* @__PURE__ */ Object.create(null), rn = [];
for (let t of ["()", "[]", "{}"]) {
  let e = /* @__PURE__ */ t.charCodeAt(0), n = /* @__PURE__ */ t.charCodeAt(1);
  df[e] = n, df[n] = -e;
}
function Bhe(t) {
  return t <= 247 ? Ihe[t] : 1424 <= t && t <= 1524 ? 2 : 1536 <= t && t <= 1785 ? Nhe[t - 1536] : 1774 <= t && t <= 2220 ? 4 : 8192 <= t && t <= 8203 ? 256 : 64336 <= t && t <= 65023 ? 4 : t == 8204 ? 256 : 1;
}
const Phe = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;
class lr {
  get dir() {
    return this.level % 2 ? yw : vo;
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
function vw(t, e) {
  if (t.length != e.length)
    return !1;
  for (let n = 0; n < t.length; n++) {
    let r = t[n], i = e[n];
    if (r.from != i.from || r.to != i.to || r.direction != i.direction || !vw(r.inner, i.inner))
      return !1;
  }
  return !0;
}
const ae = [];
function Fhe(t, e, n, r, i) {
  for (let s = 0; s <= r.length; s++) {
    let o = s ? r[s - 1].to : e, l = s < r.length ? r[s].from : n, c = s ? 256 : i;
    for (let a = o, h = c, u = c; a < l; a++) {
      let f = Bhe(t.charCodeAt(a));
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
function $he(t, e, n, r, i) {
  let s = i == 1 ? 2 : 1;
  for (let o = 0, l = 0, c = 0; o <= r.length; o++) {
    let a = o ? r[o - 1].to : e, h = o < r.length ? r[o].from : n;
    for (let u = a, f, d, p; u < h; u++)
      if (d = df[f = t.charCodeAt(u)])
        if (d < 0) {
          for (let g = l - 3; g >= 0; g -= 3)
            if (rn[g + 1] == -d) {
              let m = rn[g + 2], y = m & 2 ? i : m & 4 ? m & 1 ? s : i : 0;
              y && (ae[u] = ae[rn[g]] = y), l = g;
              break;
            }
        } else {
          if (rn.length == 189)
            break;
          rn[l++] = u, rn[l++] = f, rn[l++] = c;
        }
      else if ((p = ae[u]) == 2 || p == 1) {
        let g = p == i;
        c = g ? 0 : 1;
        for (let m = l - 3; m >= 0; m -= 3) {
          let y = rn[m + 2];
          if (y & 2)
            break;
          if (g)
            rn[m + 2] |= 2;
          else {
            if (y & 4)
              break;
            rn[m + 2] |= 4;
          }
        }
      }
  }
}
function qhe(t, e, n, r) {
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
function pf(t, e, n, r, i, s, o) {
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
              g.from > c && o.push(new lr(c, g.from, d));
              let m = g.direction == vo != !(d % 2);
              gf(t, m ? r + 1 : r, i, g.inner, g.from, g.to, o), c = g.to;
            }
            p = g.to;
          } else {
            if (p == n || (h ? ae[p] != l : ae[p] == l))
              break;
            p++;
          }
      f ? pf(t, c, p, r + 1, i, f, o) : c < p && o.push(new lr(c, p, d)), c = p;
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
              g.to < c && o.push(new lr(g.to, c, d));
              let m = g.direction == vo != !(d % 2);
              gf(t, m ? r + 1 : r, i, g.inner, g.from, g.to, o), c = g.from;
            }
            p = g.from;
          } else {
            if (p == e || (h ? ae[p - 1] != l : ae[p - 1] == l))
              break;
            p--;
          }
      f ? pf(t, p, c, r + 1, i, f, o) : p < c && o.push(new lr(p, c, d)), c = p;
    }
}
function gf(t, e, n, r, i, s, o) {
  let l = e % 2 ? 2 : 1;
  Fhe(t, i, s, r, l), $he(t, i, s, r, l), qhe(i, s, r, l), pf(t, i, s, e, n, r, o);
}
function Hhe(t, e, n) {
  if (!t)
    return [new lr(0, 0, e == yw ? 1 : 0)];
  if (e == vo && !n.length && !Phe.test(t))
    return ww(t.length);
  if (n.length)
    for (; t.length > ae.length; )
      ae[ae.length] = 256;
  let r = [], i = e == vo ? 0 : 1;
  return gf(t, i, i, n, 0, t.length, r), r;
}
function ww(t) {
  return [new lr(0, t, 0)];
}
let xw = "";
function zhe(t, e, n, r, i) {
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
  l < 0 && (l = lr.find(e, o, (s = r.bidiLevel) !== null && s !== void 0 ? s : -1, r.assoc));
  let c = e[l];
  o == c.side(i, n) && (c = e[l += i ? 1 : -1], o = c.side(!i, n));
  let a = i == (c.dir == n), h = tt(t.text, o, a);
  if (xw = t.text.slice(Math.min(o, h), Math.max(o, h)), h != c.side(i, n))
    return S.cursor(h + t.from, a ? -1 : 1, c.level);
  let u = l == (i ? e.length - 1 : 0) ? null : e[l + (i ? 1 : -1)];
  return !u && c.level != n ? S.cursor(i ? t.to : t.from, i ? -1 : 1, n) : u && u.level < c.level ? S.cursor(u.side(!i, n) + t.from, i ? 1 : -1, u.level) : S.cursor(h + t.from, i ? -1 : 1, c.level);
}
class g0 extends ge {
  get length() {
    return this.view.state.doc.length;
  }
  constructor(e) {
    super(), this.view = e, this.decorations = [], this.dynamicDecorationMap = [], this.hasComposition = null, this.markedForComposition = /* @__PURE__ */ new Set(), this.minWidth = 0, this.minWidthFrom = 0, this.minWidthTo = 0, this.impreciseAnchor = null, this.impreciseHead = null, this.forceSelection = !1, this.lastUpdate = Date.now(), this.setDOM(e.contentDOM), this.children = [new ct()], this.children[0].setParent(this), this.updateDeco(), this.updateInner([new Nt(0, 0, 0, e.state.doc.length)], 0, null);
  }
  update(e) {
    let n = e.changedRanges;
    this.minWidth > 0 && n.length && (n.every(({ fromA: l, toA: c }) => c < this.minWidthFrom || l > this.minWidthTo) ? (this.minWidthFrom = e.changes.mapPos(this.minWidthFrom, 1), this.minWidthTo = e.changes.mapPos(this.minWidthTo, 1)) : this.minWidth = this.minWidthFrom = this.minWidthTo = 0);
    let r = this.view.inputState.composing < 0 ? null : Uhe(this.view, e.changes);
    if (this.hasComposition) {
      this.markedForComposition.clear();
      let { from: l, to: c } = this.hasComposition;
      n = new Nt(l, c, e.changes.mapPos(l, -1), e.changes.mapPos(c, 1)).addToSet(n.slice());
    }
    this.hasComposition = r ? { from: r.range.fromB, to: r.range.toB } : null, (B.ie || B.chrome) && !r && e && e.state.doc.lines != e.startState.doc.lines && (this.forceSelection = !0);
    let i = this.decorations, s = this.updateDeco(), o = Ghe(i, s, e.changes);
    return n = Nt.extendWithRanges(n, o), !(this.flags & 7) && n.length == 0 ? !1 : (this.updateInner(n, e.startState.doc.length, r), e.transactions.length && (this.lastUpdate = Date.now()), !0);
  }
  updateInner(e, n, r) {
    this.view.viewState.mustMeasureContent = !0, this.updateChildren(e, n, r);
    let { observer: i } = this.view;
    i.ignore(() => {
      this.dom.style.height = this.view.viewState.contentHeight + "px", this.dom.style.flexBasis = this.minWidth ? this.minWidth + "px" : "";
      let o = B.chrome || B.ios ? { node: i.selectionRange.focusNode, written: !1 } : void 0;
      this.sync(this.view, o), this.flags &= -8, o && (o.written || i.selectionRange.focusNode != o.node) && (this.forceSelection = !0), this.dom.style.height = "";
    }), this.markedForComposition.forEach((o) => o.flags &= -9);
    let s = [];
    if (this.view.viewport.from || this.view.viewport.to < this.view.state.doc.length)
      for (let o of this.children)
        o instanceof jr && o.widget instanceof m0 && s.push(o.dom);
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
        let v = Qs.build(this.view.state.doc, h, r.range.fromB, this.decorations, this.dynamicDecorationMap), x = Qs.build(this.view.state.doc, r.range.toB, u, this.decorations, this.dynamicDecorationMap);
        d = v.breakAtStart, p = v.openStart, g = x.openEnd;
        let w = this.compositionView(r);
        x.breakAtStart ? w.breakAfter = 1 : x.content.length && w.merge(w.length, w.length, x.content[0], !1, x.openStart, 0) && (w.breakAfter = x.content[0].breakAfter, x.content.shift()), v.content.length && w.merge(0, 0, v.content[v.content.length - 1], !0, 0, v.openEnd) && v.content.pop(), f = v.content.concat(w).concat(x.content);
      } else
        ({ content: f, breakAtStart: d, openStart: p, openEnd: g } = Qs.build(this.view.state.doc, h, u, this.decorations, this.dynamicDecorationMap));
      let { i: m, off: y } = s.findPos(a, 1), { i: b, off: k } = s.findPos(c, -1);
      Jv(this, b, k, m, y, f, d, p, g);
    }
    r && this.fixCompositionDOM(r);
  }
  compositionView(e) {
    let n = new _n(e.text.nodeValue);
    n.flags |= 8;
    for (let { deco: i } of e.marks)
      n = new Wn(i, [n], n.length);
    let r = new ct();
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
    let r = this.view.root.activeElement, i = r == this.dom, s = !i && Ql(this.dom, this.view.observer.selectionRange) && !(r && this.dom.contains(r));
    if (!(i || n || s))
      return;
    let o = this.forceSelection;
    this.forceSelection = !1;
    let l = this.view.state.selection.main, c = this.domAtPos(l.anchor), a = l.empty ? c : this.domAtPos(l.head);
    if (B.gecko && l.empty && !this.hasComposition && Vhe(c)) {
      let u = document.createTextNode("");
      this.view.observer.ignore(() => c.node.insertBefore(u, c.node.childNodes[c.offset] || null)), c = a = new ut(u, 0), o = !0;
    }
    let h = this.view.observer.selectionRange;
    (o || !h.focusNode || !Ec(c.node, c.offset, h.anchorNode, h.anchorOffset) || !Ec(a.node, a.offset, h.focusNode, h.focusOffset)) && (this.view.observer.ignore(() => {
      B.android && B.chrome && this.dom.contains(h.focusNode) && Yhe(h.focusNode, this.dom) && (this.dom.blur(), this.dom.focus({ preventScroll: !0 }));
      let u = Ac(this.view.root);
      if (u)
        if (l.empty) {
          if (B.gecko) {
            let f = Whe(c.node, c.offset);
            if (f && f != 3) {
              let d = _w(c.node, c.offset, f == 1 ? 1 : -1);
              d && (c = new ut(d, f == 1 ? 0 : d.nodeValue.length));
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
    }), this.view.observer.setSelectionRange(c, a)), this.impreciseAnchor = c.precise ? null : new ut(h.anchorNode, h.anchorOffset), this.impreciseHead = a.precise ? null : new ut(h.focusNode, h.focusOffset);
  }
  enforceCursorAssoc() {
    if (this.hasComposition)
      return;
    let { view: e } = this, n = e.state.selection.main, r = Ac(e.root), { anchorNode: i, anchorOffset: s } = e.observer.selectionRange;
    if (!r || !n.empty || !n.assoc || !r.modify)
      return;
    let o = ct.find(this, n.head);
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
      if (r < i.length || i instanceof ct)
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
    if (!(i instanceof ct))
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
    if (!(i instanceof _n))
      return null;
    let s = tt(i.text, r);
    if (s == r)
      return null;
    let o = ri(i.dom, r, s).getClientRects();
    return !o.length || o[0].top >= o[0].bottom ? null : o[0];
  }
  measureVisibleLineHeights(e) {
    let n = [], { from: r, to: i } = e, s = this.view.contentDOM.clientWidth, o = s > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1, l = -1, c = this.view.textDirection == Ce.LTR;
    for (let a = 0, h = 0; h < this.children.length; h++) {
      let u = this.children[h], f = a + u.length;
      if (f > i)
        break;
      if (a >= r) {
        let d = u.dom.getBoundingClientRect();
        if (n.push(d.height), o) {
          let p = u.dom.lastChild, g = p ? yo(p) : [];
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
    return getComputedStyle(this.children[n].dom).direction == "rtl" ? Ce.RTL : Ce.LTR;
  }
  measureTextSize() {
    for (let s of this.children)
      if (s instanceof ct) {
        let o = s.measureTextSize();
        if (o)
          return o;
      }
    let e = document.createElement("div"), n, r, i;
    return e.className = "cm-line", e.style.width = "99999px", e.style.position = "absolute", e.textContent = "abc def ghi jkl mno pqr stu", this.view.observer.ignore(() => {
      this.dom.appendChild(e);
      let s = yo(e.firstChild)[0];
      n = e.getBoundingClientRect().height, r = s ? s.width / 27 : 7, i = s ? s.height : n, e.remove();
    }), { lineHeight: n, charWidth: r, textHeight: i };
  }
  childCursor(e = this.length) {
    let n = this.children.length;
    return n && (e -= this.children[--n].length), new Kv(this.children, e, n);
  }
  computeBlockGapDeco() {
    let e = [], n = this.view.viewState;
    for (let r = 0, i = 0; ; i++) {
      let s = i == n.viewports.length ? null : n.viewports[i], o = s ? s.from - 1 : this.length;
      if (o > r) {
        let l = n.lineBlockAt(o).bottom - n.lineBlockAt(r).top;
        e.push(P.replace({
          widget: new m0(l),
          block: !0,
          inclusive: !0,
          isBlockGap: !0
        }).range(r, o));
      }
      if (!s)
        break;
      r = s.to + 1;
    }
    return P.set(e);
  }
  updateDeco() {
    let e = this.view.state.facet(bo).map((n, r) => (this.dynamicDecorationMap[r] = typeof n == "function") ? n(this.view) : n);
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
    let s = mw(this.view), o = {
      left: r.left - s.left,
      top: r.top - s.top,
      right: r.right + s.right,
      bottom: r.bottom + s.bottom
    };
    _he(this.view.scrollDOM, o, n.head < n.anchor ? -1 : 1, e.x, e.y, e.xMargin, e.yMargin, this.view.textDirection == Ce.LTR);
  }
}
function Vhe(t) {
  return t.node.nodeType == 1 && t.node.firstChild && (t.offset == 0 || t.node.childNodes[t.offset - 1].contentEditable == "false") && (t.offset == t.node.childNodes.length || t.node.childNodes[t.offset].contentEditable == "false");
}
class m0 extends tn {
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
function kw(t) {
  let e = t.observer.selectionRange, n = e.focusNode && _w(e.focusNode, e.focusOffset, 0);
  if (!n)
    return null;
  let r = ge.get(n), i, s;
  if (r instanceof _n)
    i = r.posAtStart, s = i + r.length;
  else {
    e:
      for (let o = 0, l = n; ; ) {
        for (let a = l.previousSibling, h; a; a = a.previousSibling) {
          if (h = ge.get(a)) {
            i = s = h.posAtEnd + o;
            break e;
          }
          let u = new Xv([], t.state);
          if (u.readNode(a), u.text.indexOf(Mi) > -1)
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
function Uhe(t, e) {
  let n = kw(t);
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
  let h = [], u = new Nt(r, i, o, l);
  for (let f = s.parentNode; ; f = f.parentNode) {
    let d = ge.get(f);
    if (d instanceof Wn)
      h.push({ node: f, deco: d.mark });
    else {
      if (d instanceof ct || f.nodeName == "DIV" && f.parentNode == t.contentDOM)
        return { range: u, text: s, marks: h, line: f };
      if (f != t.contentDOM)
        h.push({ node: f, deco: new Ho({
          inclusive: !0,
          attributes: Ohe(f),
          tagName: f.tagName.toLowerCase()
        }) });
      else
        return null;
    }
  }
}
function _w(t, e, n) {
  if (n <= 0)
    for (let r = t, i = e; ; ) {
      if (r.nodeType == 3)
        return r;
      if (r.nodeType == 1 && i > 0)
        r = r.childNodes[i - 1], i = br(r);
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
function Whe(t, e) {
  return t.nodeType != 1 ? 0 : (e && t.childNodes[e - 1].contentEditable == "false" ? 1 : 0) | (e < t.childNodes.length && t.childNodes[e].contentEditable == "false" ? 2 : 0);
}
let jhe = class {
  constructor() {
    this.changes = [];
  }
  compareRange(e, n) {
    uf(e, n, this.changes);
  }
  comparePoint(e, n) {
    uf(e, n, this.changes);
  }
};
function Ghe(t, e, n) {
  let r = new jhe();
  return Q.compare(t, e, n, r), r.changes;
}
function Yhe(t, e) {
  for (let n = t; n && n != e; n = n.assignedSlot || n.parentNode)
    if (n.nodeType == 1 && n.contentEditable == "false")
      return !0;
  return !1;
}
function Khe(t, e, n = 1) {
  let r = t.charCategorizer(e), i = t.doc.lineAt(e), s = e - i.from;
  if (i.length == 0)
    return S.cursor(e);
  s == 0 ? n = 1 : s == i.length && (n = -1);
  let o = s, l = s;
  n < 0 ? o = tt(i.text, s, !1) : l = tt(i.text, s);
  let c = r(i.text.slice(o, l));
  for (; o > 0; ) {
    let a = tt(i.text, o, !1);
    if (r(i.text.slice(a, o)) != c)
      break;
    o = a;
  }
  for (; l < i.length; ) {
    let a = tt(i.text, l);
    if (r(i.text.slice(l, a)) != c)
      break;
    l = a;
  }
  return S.range(o + i.from, l + i.from);
}
function Jhe(t, e) {
  return e.left > t ? e.left - t : Math.max(0, t - e.right);
}
function Zhe(t, e) {
  return e.top > t ? e.top - t : Math.max(0, t - e.bottom);
}
function $h(t, e) {
  return t.top < e.bottom - 1 && t.bottom > e.top + 1;
}
function y0(t, e) {
  return e < t.top ? { top: e, left: t.left, right: t.right, bottom: t.bottom } : t;
}
function b0(t, e) {
  return e > t.bottom ? { top: t.top, left: t.left, right: t.right, bottom: e } : t;
}
function mf(t, e, n) {
  let r, i, s, o, l = !1, c, a, h, u;
  for (let p = t.firstChild; p; p = p.nextSibling) {
    let g = yo(p);
    for (let m = 0; m < g.length; m++) {
      let y = g[m];
      i && $h(i, y) && (y = y0(b0(y, i.bottom), i.top));
      let b = Jhe(e, y), k = Zhe(n, y);
      if (b == 0 && k == 0)
        return p.nodeType == 3 ? v0(p, e, n) : mf(p, e, n);
      if (!r || o > k || o == k && s > b) {
        r = p, i = y, s = b, o = k;
        let v = k ? n < y.top ? -1 : 1 : b ? e < y.left ? -1 : 1 : 0;
        l = !v || (v > 0 ? m < g.length - 1 : m > 0);
      }
      b == 0 ? n > y.bottom && (!h || h.bottom < y.bottom) ? (c = p, h = y) : n < y.top && (!u || u.top > y.top) && (a = p, u = y) : h && $h(h, y) ? h = b0(h, y.bottom) : u && $h(u, y) && (u = y0(u, y.top));
    }
  }
  if (h && h.bottom >= n ? (r = c, i = h) : u && u.top <= n && (r = a, i = u), !r)
    return { node: t, offset: 0 };
  let f = Math.max(i.left, Math.min(i.right, e));
  if (r.nodeType == 3)
    return v0(r, f, n);
  if (l && r.contentEditable != "false")
    return mf(r, f, n);
  let d = Array.prototype.indexOf.call(t.childNodes, r) + (e >= (i.left + i.right) / 2 ? 1 : 0);
  return { node: t, offset: d };
}
function v0(t, e, n) {
  let r = t.nodeValue.length, i = -1, s = 1e9, o = 0;
  for (let l = 0; l < r; l++) {
    let c = ri(t, l, l + 1).getClientRects();
    for (let a = 0; a < c.length; a++) {
      let h = c[a];
      if (h.top == h.bottom)
        continue;
      o || (o = e - h.left);
      let u = (h.top > n ? h.top - n : n - h.bottom) - 1;
      if (h.left - 1 <= e && h.right + 1 >= e && u < s) {
        let f = e >= (h.left + h.right) / 2, d = f;
        if ((B.chrome || B.gecko) && ri(t, l).getBoundingClientRect().left == h.right && (d = !f), u <= 0)
          return { node: t, offset: l + (d ? 1 : 0) };
        i = l + (d ? 1 : 0), s = u;
      }
    }
  }
  return { node: t, offset: i > -1 ? i : o > 0 ? t.nodeValue.length : 0 };
}
function Cw(t, e, n, r = -1) {
  var i, s;
  let o = t.contentDOM.getBoundingClientRect(), l = o.top + t.viewState.paddingTop, c, { docHeight: a } = t.viewState, { x: h, y: u } = e, f = u - l;
  if (f < 0)
    return 0;
  if (f > a)
    return t.state.doc.length;
  for (let v = t.viewState.heightOracle.textHeight / 2, x = !1; c = t.elementAtHeight(f), c.type != Se.Text; )
    for (; f = r > 0 ? c.bottom + v : c.top - v, !(f >= 0 && f <= a); ) {
      if (x)
        return n ? null : 0;
      x = !0, r = -r;
    }
  u = l + f;
  let d = c.from;
  if (d < t.viewport.from)
    return t.viewport.from == 0 ? 0 : n ? null : w0(t, o, c, h, u);
  if (d > t.viewport.to)
    return t.viewport.to == t.state.doc.length ? t.state.doc.length : n ? null : w0(t, o, c, h, u);
  let p = t.dom.ownerDocument, g = t.root.elementFromPoint ? t.root : p, m = g.elementFromPoint(h, u);
  m && !t.contentDOM.contains(m) && (m = null), m || (h = Math.max(o.left + 1, Math.min(o.right - 1, h)), m = g.elementFromPoint(h, u), m && !t.contentDOM.contains(m) && (m = null));
  let y, b = -1;
  if (m && ((i = t.docView.nearest(m)) === null || i === void 0 ? void 0 : i.isEditable) != !1) {
    if (p.caretPositionFromPoint) {
      let v = p.caretPositionFromPoint(h, u);
      v && ({ offsetNode: y, offset: b } = v);
    } else if (p.caretRangeFromPoint) {
      let v = p.caretRangeFromPoint(h, u);
      v && ({ startContainer: y, startOffset: b } = v, (!t.contentDOM.contains(y) || B.safari && Xhe(y, b, h) || B.chrome && Qhe(y, b, h)) && (y = void 0));
    }
  }
  if (!y || !t.docView.dom.contains(y)) {
    let v = ct.find(t.docView, d);
    if (!v)
      return f > c.top + c.height / 2 ? c.to : c.from;
    ({ node: y, offset: b } = mf(v.dom, h, u));
  }
  let k = t.docView.nearest(y);
  if (!k)
    return null;
  if (k.isWidget && ((s = k.dom) === null || s === void 0 ? void 0 : s.nodeType) == 1) {
    let v = k.dom.getBoundingClientRect();
    return e.y < v.top || e.y <= v.bottom && e.x <= (v.left + v.right) / 2 ? k.posAtStart : k.posAtEnd;
  } else
    return k.localPosFromDOM(y, b) + k.posAtStart;
}
function w0(t, e, n, r, i) {
  let s = Math.round((r - e.left) * t.defaultCharacterWidth);
  if (t.lineWrapping && n.height > t.defaultLineHeight * 1.5) {
    let l = t.viewState.heightOracle.textHeight, c = Math.floor((i - n.top - (t.defaultLineHeight - l) * 0.5) / l);
    s += c * t.viewState.heightOracle.lineLength;
  }
  let o = t.state.sliceDoc(n.from, n.to);
  return n.from + tf(o, s, t.state.tabSize);
}
function Xhe(t, e, n) {
  let r;
  if (t.nodeType != 3 || e != (r = t.nodeValue.length))
    return !1;
  for (let i = t.nextSibling; i; i = i.nextSibling)
    if (i.nodeType != 1 || i.nodeName != "BR")
      return !1;
  return ri(t, r - 1, r).getBoundingClientRect().left > n;
}
function Qhe(t, e, n) {
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
  let r = t.nodeType == 1 ? t.getBoundingClientRect() : ri(t, 0, Math.max(t.nodeValue.length, 1)).getBoundingClientRect();
  return n - r.left > 5;
}
function yf(t, e) {
  let n = t.lineBlockAt(e);
  if (Array.isArray(n.type)) {
    for (let r of n.type)
      if (r.to > e || r.to == e && (r.to == n.to || r.type == Se.Text))
        return r;
  }
  return n;
}
function eue(t, e, n, r) {
  let i = yf(t, e.head), s = !r || i.type != Se.Text || !(t.lineWrapping || i.widgetLineBreaks) ? null : t.coordsAtPos(e.assoc < 0 && e.head > i.from ? e.head - 1 : e.head);
  if (s) {
    let o = t.dom.getBoundingClientRect(), l = t.textDirectionAt(i.from), c = t.posAtCoords({
      x: n == (l == Ce.LTR) ? o.right - 1 : o.left + 1,
      y: (s.top + s.bottom) / 2
    });
    if (c != null)
      return S.cursor(c, n ? -1 : 1);
  }
  return S.cursor(n ? i.to : i.from, n ? -1 : 1);
}
function x0(t, e, n, r) {
  let i = t.state.doc.lineAt(e.head), s = t.bidiSpans(i), o = t.textDirectionAt(i.from);
  for (let l = e, c = null; ; ) {
    let a = zhe(i, s, o, l, n), h = xw;
    if (!a) {
      if (i.number == (n ? t.state.doc.lines : 1))
        return l;
      h = `
`, i = t.state.doc.line(i.number + (n ? 1 : -1)), s = t.bidiSpans(i), a = S.cursor(n ? i.from : i.to);
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
function tue(t, e, n) {
  let r = t.state.charCategorizer(e), i = r(n);
  return (s) => {
    let o = r(s);
    return i == ke.Space && (i = o), i == o;
  };
}
function nue(t, e, n, r) {
  let i = e.head, s = n ? 1 : -1;
  if (i == (n ? t.state.doc.length : 0))
    return S.cursor(i, e.assoc);
  let o = e.goalColumn, l, c = t.contentDOM.getBoundingClientRect(), a = t.coordsAtPos(i), h = t.documentTop;
  if (a)
    o == null && (o = a.left - c.left), l = s < 0 ? a.top : a.bottom;
  else {
    let d = t.viewState.lineBlockAt(i);
    o == null && (o = Math.min(c.right - c.left, t.defaultCharacterWidth * (i - d.from))), l = (s < 0 ? d.top : d.bottom) + h;
  }
  let u = c.left + o, f = r != null ? r : t.viewState.heightOracle.textHeight >> 1;
  for (let d = 0; ; d += 10) {
    let p = l + (f + d) * s, g = Cw(t, { x: u, y: p }, !1, s);
    if (p < c.top || p > c.bottom || (s < 0 ? g < i : g > i))
      return S.cursor(g, e.assoc, void 0, o);
  }
}
function ec(t, e, n) {
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
function qh(t, e, n) {
  let r = ec(t.state.facet(Ud).map((i) => i(t)), n.from, e.head > n.from ? -1 : 1);
  return r == n.from ? n : S.cursor(r, r < n.from ? 1 : -1);
}
class rue {
  setSelectionOrigin(e) {
    this.lastSelectionOrigin = e, this.lastSelectionTime = Date.now();
  }
  constructor(e) {
    this.lastKeyCode = 0, this.lastKeyTime = 0, this.lastTouchTime = 0, this.lastFocusTime = 0, this.lastScrollTop = 0, this.lastScrollLeft = 0, this.chromeScrollHack = -1, this.pendingIOSKey = void 0, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastEscPress = 0, this.lastContextMenu = 0, this.scrollHandlers = [], this.registeredEvents = [], this.customHandlers = [], this.composing = -1, this.compositionFirstChange = null, this.compositionEndedAt = 0, this.compositionPendingKey = !1, this.compositionPendingChange = !1, this.mouseSelection = null;
    let n = (r, i) => {
      this.ignoreDuringComposition(i) || i.type == "keydown" && this.keydown(e, i) || (this.mustFlushObserver(i) && e.observer.forceFlush(), this.runCustomHandlers(i.type, e, i) ? i.preventDefault() : r(e, i));
    };
    for (let r in Re) {
      let i = Re[r];
      e.contentDOM.addEventListener(r, (s) => {
        k0(e, s) && n(i, s);
      }, bf[r]), this.registeredEvents.push(r);
    }
    e.scrollDOM.addEventListener("mousedown", (r) => {
      if (r.target == e.scrollDOM && r.clientY > e.contentDOM.getBoundingClientRect().bottom && (n(Re.mousedown, r), !r.defaultPrevented && r.button == 2)) {
        let i = e.contentDOM.style.minHeight;
        e.contentDOM.style.minHeight = "100%", setTimeout(() => e.contentDOM.style.minHeight = i, 200);
      }
    }), e.scrollDOM.addEventListener("drop", (r) => {
      r.target == e.scrollDOM && r.clientY > e.contentDOM.getBoundingClientRect().bottom && n(Re.drop, r);
    }), B.chrome && B.chrome_version == 102 && e.scrollDOM.addEventListener("wheel", () => {
      this.chromeScrollHack < 0 ? e.contentDOM.style.pointerEvents = "none" : window.clearTimeout(this.chromeScrollHack), this.chromeScrollHack = setTimeout(() => {
        this.chromeScrollHack = -1, e.contentDOM.style.pointerEvents = "";
      }, 100);
    }, { passive: !0 }), this.notifiedFocused = e.hasFocus, B.safari && e.contentDOM.addEventListener("input", () => null);
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
            !k0(e, l) || this.runCustomHandlers(o, e, l) && l.preventDefault();
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
          It(n.state, o);
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
          It(e.state, s);
        }
    }
  }
  keydown(e, n) {
    if (this.lastKeyCode = n.keyCode, this.lastKeyTime = Date.now(), n.keyCode == 9 && Date.now() < this.lastEscPress + 2e3)
      return !0;
    if (n.keyCode != 27 && Aw.indexOf(n.keyCode) < 0 && (e.inputState.lastEscPress = 0), B.android && B.chrome && !n.synthetic && (n.keyCode == 13 || n.keyCode == 8))
      return e.observer.delayAndroidKey(n.key, n.keyCode), !0;
    let r;
    return B.ios && !n.synthetic && !n.altKey && !n.metaKey && ((r = Sw.find((i) => i.keyCode == n.keyCode)) && !n.ctrlKey || iue.indexOf(n.key) > -1 && n.ctrlKey && !n.shiftKey) ? (this.pendingIOSKey = r || n, setTimeout(() => this.flushIOSKey(e), 250), !0) : !1;
  }
  flushIOSKey(e) {
    let n = this.pendingIOSKey;
    return n ? (this.pendingIOSKey = void 0, qi(e.contentDOM, n.key, n.keyCode)) : !1;
  }
  ignoreDuringComposition(e) {
    return /^key/.test(e.type) ? this.composing > 0 ? !0 : B.safari && !B.ios && this.compositionPendingKey && Date.now() - this.compositionEndedAt < 100 ? (this.compositionPendingKey = !1, !0) : !1 : !1;
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
const Sw = [
  { key: "Backspace", keyCode: 8, inputType: "deleteContentBackward" },
  { key: "Enter", keyCode: 13, inputType: "insertParagraph" },
  { key: "Enter", keyCode: 13, inputType: "insertLineBreak" },
  { key: "Delete", keyCode: 46, inputType: "deleteContentForward" }
], iue = "dthko", Aw = [16, 17, 18, 20, 91, 92, 224, 225], gl = 6;
function ml(t) {
  return Math.max(0, t) * 0.7 + 8;
}
function sue(t, e) {
  return Math.max(Math.abs(t.clientX - e.clientX), Math.abs(t.clientY - e.clientY));
}
class oue {
  constructor(e, n, r, i) {
    this.view = e, this.startEvent = n, this.style = r, this.mustSelect = i, this.scrollSpeed = { x: 0, y: 0 }, this.scrolling = -1, this.lastEvent = n, this.scrollParent = Che(e.contentDOM), this.atoms = e.state.facet(Ud).map((o) => o(e));
    let s = e.contentDOM.ownerDocument;
    s.addEventListener("mousemove", this.move = this.move.bind(this)), s.addEventListener("mouseup", this.up = this.up.bind(this)), this.extend = n.shiftKey, this.multiple = e.state.facet(Z.allowMultipleSelections) && lue(e, n), this.dragging = aue(e, n) && Mw(n) == 1 ? null : !1;
  }
  start(e) {
    this.dragging === !1 && (e.preventDefault(), this.select(e));
  }
  move(e) {
    var n;
    if (e.buttons == 0)
      return this.destroy();
    if (this.dragging || this.dragging == null && sue(this.startEvent, e) < 10)
      return;
    this.select(this.lastEvent = e);
    let r = 0, i = 0, s = ((n = this.scrollParent) === null || n === void 0 ? void 0 : n.getBoundingClientRect()) || { left: 0, top: 0, right: this.view.win.innerWidth, bottom: this.view.win.innerHeight }, o = mw(this.view);
    e.clientX - o.left <= s.left + gl ? r = -ml(s.left - e.clientX) : e.clientX + o.right >= s.right - gl && (r = ml(e.clientX - s.right)), e.clientY - o.top <= s.top + gl ? i = -ml(s.top - e.clientY) : e.clientY + o.bottom >= s.bottom - gl && (i = ml(e.clientY - s.bottom)), this.setScrollSpeed(r, i);
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
        let o = ec(this.atoms, i.from, 0);
        o != i.from && (s = S.cursor(o, -1));
      } else {
        let o = ec(this.atoms, i.from, -1), l = ec(this.atoms, i.to, 1);
        (o != i.from || l != i.to) && (s = S.range(i.from == i.anchor ? o : l, i.from == i.head ? o : l));
      }
      s && (n || (n = e.ranges.slice()), n[r] = s);
    }
    return n ? S.create(n, e.mainIndex) : e;
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
function lue(t, e) {
  let n = t.state.facet(sw);
  return n.length ? n[0](e) : B.mac ? e.metaKey : e.ctrlKey;
}
function cue(t, e) {
  let n = t.state.facet(ow);
  return n.length ? n[0](e) : B.mac ? !e.altKey : !e.ctrlKey;
}
function aue(t, e) {
  let { main: n } = t.state.selection;
  if (n.empty)
    return !1;
  let r = Ac(t.root);
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
function k0(t, e) {
  if (!e.bubbles)
    return !0;
  if (e.defaultPrevented)
    return !1;
  for (let n = e.target, r; n != t.contentDOM; n = n.parentNode)
    if (!n || n.nodeType == 11 || (r = ge.get(n)) && r.ignoreEvent(e))
      return !1;
  return !0;
}
const Re = /* @__PURE__ */ Object.create(null), bf = /* @__PURE__ */ Object.create(null), Ew = B.ie && B.ie_version < 15 || B.ios && B.webkit_version < 604;
function hue(t) {
  let e = t.dom.parentNode;
  if (!e)
    return;
  let n = e.appendChild(document.createElement("textarea"));
  n.style.cssText = "position: fixed; left: -10000px; top: 10px", n.focus(), setTimeout(() => {
    t.focus(), n.remove(), Dw(t, n.value);
  }, 50);
}
function Dw(t, e) {
  let { state: n } = t, r, i = 1, s = n.toText(e), o = s.lines == n.selection.ranges.length;
  if (vf != null && n.selection.ranges.every((c) => c.empty) && vf == s.toString()) {
    let c = -1;
    r = n.changeByRange((a) => {
      let h = n.doc.lineAt(a.from);
      if (h.from == c)
        return { range: a };
      c = h.from;
      let u = n.toText((o ? s.line(i++).text : e) + n.lineBreak);
      return {
        changes: { from: h.from, insert: u },
        range: S.cursor(a.from + u.length)
      };
    });
  } else
    o ? r = n.changeByRange((c) => {
      let a = s.line(i++);
      return {
        changes: { from: c.from, to: c.to, insert: a.text },
        range: S.cursor(c.from + a.length)
      };
    }) : r = n.replaceSelection(s);
  t.dispatch(r, {
    userEvent: "input.paste",
    scrollIntoView: !0
  });
}
Re.keydown = (t, e) => {
  t.inputState.setSelectionOrigin("select"), e.keyCode == 27 && (t.inputState.lastEscPress = Date.now());
};
Re.touchstart = (t, e) => {
  t.inputState.lastTouchTime = Date.now(), t.inputState.setSelectionOrigin("select.pointer");
};
Re.touchmove = (t) => {
  t.inputState.setSelectionOrigin("select.pointer");
};
bf.touchstart = bf.touchmove = { passive: !0 };
Re.mousedown = (t, e) => {
  if (t.observer.flush(), t.inputState.lastTouchTime > Date.now() - 2e3)
    return;
  let n = null;
  for (let r of t.state.facet(lw))
    if (n = r(t, e), n)
      break;
  if (!n && e.button == 0 && (n = due(t, e)), n) {
    let r = !t.hasFocus;
    t.inputState.startMouseSelection(new oue(t, e, n, r)), r && t.observer.ignore(() => jv(t.contentDOM)), t.inputState.mouseSelection && t.inputState.mouseSelection.start(e);
  }
};
function _0(t, e, n, r) {
  if (r == 1)
    return S.cursor(e, n);
  if (r == 2)
    return Khe(t.state, e, n);
  {
    let i = ct.find(t.docView, e), s = t.state.doc.lineAt(i ? i.posAtEnd : e), o = i ? i.posAtStart : s.from, l = i ? i.posAtEnd : s.to;
    return l < t.state.doc.length && l == s.to && l++, S.range(o, l);
  }
}
let Tw = (t, e) => t >= e.top && t <= e.bottom, C0 = (t, e, n) => Tw(e, n) && t >= n.left && t <= n.right;
function uue(t, e, n, r) {
  let i = ct.find(t.docView, e);
  if (!i)
    return 1;
  let s = e - i.posAtStart;
  if (s == 0)
    return 1;
  if (s == i.length)
    return -1;
  let o = i.coordsAt(s, -1);
  if (o && C0(n, r, o))
    return -1;
  let l = i.coordsAt(s, 1);
  return l && C0(n, r, l) ? 1 : o && Tw(r, o) ? -1 : 1;
}
function S0(t, e) {
  let n = t.posAtCoords({ x: e.clientX, y: e.clientY }, !1);
  return { pos: n, bias: uue(t, n, e.clientX, e.clientY) };
}
const fue = B.ie && B.ie_version <= 11;
let A0 = null, E0 = 0, D0 = 0;
function Mw(t) {
  if (!fue)
    return t.detail;
  let e = A0, n = D0;
  return A0 = t, D0 = Date.now(), E0 = !e || n > Date.now() - 400 && Math.abs(e.clientX - t.clientX) < 2 && Math.abs(e.clientY - t.clientY) < 2 ? (E0 + 1) % 3 : 1;
}
function due(t, e) {
  let n = S0(t, e), r = Mw(e), i = t.state.selection;
  return {
    update(s) {
      s.docChanged && (n.pos = s.changes.mapPos(n.pos), i = i.map(s.changes));
    },
    get(s, o, l) {
      let c = S0(t, s), a, h = _0(t, c.pos, c.bias, r);
      if (n.pos != c.pos && !o) {
        let u = _0(t, n.pos, n.bias, r), f = Math.min(u.from, h.from), d = Math.max(u.to, h.to);
        h = f < h.from ? S.range(f, d) : S.range(d, f);
      }
      return o ? i.replaceRange(i.main.extend(h.from, h.to)) : l && r == 1 && i.ranges.length > 1 && (a = pue(i, c.pos)) ? a : l ? i.addRange(h) : S.create([h]);
    }
  };
}
function pue(t, e) {
  for (let n = 0; n < t.ranges.length; n++) {
    let { from: r, to: i } = t.ranges[n];
    if (r <= e && i >= e)
      return S.create(t.ranges.slice(0, n).concat(t.ranges.slice(n + 1)), t.mainIndex == n ? 0 : t.mainIndex - (t.mainIndex > n ? 1 : 0));
  }
  return null;
}
Re.dragstart = (t, e) => {
  let { selection: { main: n } } = t.state, { mouseSelection: r } = t.inputState;
  r && (r.dragging = n), e.dataTransfer && (e.dataTransfer.setData("Text", t.state.sliceDoc(n.from, n.to)), e.dataTransfer.effectAllowed = "copyMove");
};
function T0(t, e, n, r) {
  if (!n)
    return;
  let i = t.posAtCoords({ x: e.clientX, y: e.clientY }, !1);
  e.preventDefault();
  let { mouseSelection: s } = t.inputState, o = r && s && s.dragging && cue(t, e) ? { from: s.dragging.from, to: s.dragging.to } : null, l = { from: i, insert: n }, c = t.state.changes(o ? [o, l] : l);
  t.focus(), t.dispatch({
    changes: c,
    selection: { anchor: c.mapPos(i, -1), head: c.mapPos(i, 1) },
    userEvent: o ? "move.drop" : "input.drop"
  });
}
Re.drop = (t, e) => {
  if (!e.dataTransfer)
    return;
  if (t.state.readOnly)
    return e.preventDefault();
  let n = e.dataTransfer.files;
  if (n && n.length) {
    e.preventDefault();
    let r = Array(n.length), i = 0, s = () => {
      ++i == n.length && T0(t, e, r.filter((o) => o != null).join(t.state.lineBreak), !1);
    };
    for (let o = 0; o < n.length; o++) {
      let l = new FileReader();
      l.onerror = s, l.onload = () => {
        /[\x00-\x08\x0e-\x1f]{2}/.test(l.result) || (r[o] = l.result), s();
      }, l.readAsText(n[o]);
    }
  } else
    T0(t, e, e.dataTransfer.getData("Text"), !0);
};
Re.paste = (t, e) => {
  if (t.state.readOnly)
    return e.preventDefault();
  t.observer.flush();
  let n = Ew ? null : e.clipboardData;
  n ? (Dw(t, n.getData("text/plain") || n.getData("text/uri-text")), e.preventDefault()) : hue(t);
};
function gue(t, e) {
  let n = t.dom.parentNode;
  if (!n)
    return;
  let r = n.appendChild(document.createElement("textarea"));
  r.style.cssText = "position: fixed; left: -10000px; top: 10px", r.value = e, r.focus(), r.selectionEnd = e.length, r.selectionStart = 0, setTimeout(() => {
    r.remove(), t.focus();
  }, 50);
}
function mue(t) {
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
let vf = null;
Re.copy = Re.cut = (t, e) => {
  let { text: n, ranges: r, linewise: i } = mue(t.state);
  if (!n && !i)
    return;
  vf = i ? n : null;
  let s = Ew ? null : e.clipboardData;
  s ? (e.preventDefault(), s.clearData(), s.setData("text/plain", n)) : gue(t, n), e.type == "cut" && !t.state.readOnly && t.dispatch({
    changes: r,
    scrollIntoView: !0,
    userEvent: "delete.cut"
  });
};
const Ow = /* @__PURE__ */ en.define();
function Lw(t, e) {
  let n = [];
  for (let r of t.facet(hw)) {
    let i = r(t, e);
    i && n.push(i);
  }
  return n ? t.update({ effects: n, annotations: Ow.of(!0) }) : null;
}
function Rw(t) {
  setTimeout(() => {
    let e = t.hasFocus;
    if (e != t.inputState.notifiedFocused) {
      let n = Lw(t.state, e);
      n ? t.dispatch(n) : t.update([]);
    }
  }, 10);
}
Re.focus = (t) => {
  t.inputState.lastFocusTime = Date.now(), !t.scrollDOM.scrollTop && (t.inputState.lastScrollTop || t.inputState.lastScrollLeft) && (t.scrollDOM.scrollTop = t.inputState.lastScrollTop, t.scrollDOM.scrollLeft = t.inputState.lastScrollLeft), Rw(t);
};
Re.blur = (t) => {
  t.observer.clearSelectionRange(), Rw(t);
};
Re.compositionstart = Re.compositionupdate = (t) => {
  t.inputState.compositionFirstChange == null && (t.inputState.compositionFirstChange = !0), t.inputState.composing < 0 && (t.inputState.composing = 0);
};
Re.compositionend = (t) => {
  t.inputState.composing = -1, t.inputState.compositionEndedAt = Date.now(), t.inputState.compositionPendingKey = !0, t.inputState.compositionPendingChange = t.observer.pendingRecords().length > 0, t.inputState.compositionFirstChange = null, B.chrome && B.android ? t.observer.flushSoon() : t.inputState.compositionPendingChange ? Promise.resolve().then(() => t.observer.flush()) : setTimeout(() => {
    t.inputState.composing < 0 && t.docView.hasComposition && t.update([]);
  }, 50);
};
Re.contextmenu = (t) => {
  t.inputState.lastContextMenu = Date.now();
};
Re.beforeinput = (t, e) => {
  var n;
  let r;
  if (B.chrome && B.android && (r = Sw.find((i) => i.inputType == e.inputType)) && (t.observer.delayAndroidKey(r.key, r.keyCode), r.key == "Backspace" || r.key == "Delete")) {
    let i = ((n = window.visualViewport) === null || n === void 0 ? void 0 : n.height) || 0;
    setTimeout(() => {
      var s;
      (((s = window.visualViewport) === null || s === void 0 ? void 0 : s.height) || 0) > i + 10 && t.hasFocus && (t.contentDOM.blur(), t.focus());
    }, 100);
  }
};
const M0 = ["pre-wrap", "normal", "pre-line", "break-spaces"];
class yue {
  constructor(e) {
    this.lineWrapping = e, this.doc = te.empty, this.heightSamples = {}, this.lineHeight = 14, this.charWidth = 7, this.textHeight = 14, this.lineLength = 30, this.heightChanged = !1;
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
    return M0.indexOf(e) > -1 != this.lineWrapping;
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
    let l = M0.indexOf(e) > -1, c = Math.round(n) != Math.round(this.lineHeight) || this.lineWrapping != l;
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
class bue {
  constructor(e, n) {
    this.from = e, this.heights = n, this.index = 0;
  }
  get more() {
    return this.index < this.heights.length;
  }
}
class fn {
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
    return this._content instanceof vr ? this._content.widget : null;
  }
  get widgetLineBreaks() {
    return typeof this._content == "number" ? this._content : 0;
  }
  join(e) {
    let n = (Array.isArray(this._content) ? this._content : [this]).concat(Array.isArray(e._content) ? e._content : [e]);
    return new fn(this.from, this.length + e.length, this.top, this.height + e.height, n);
  }
}
var ve = /* @__PURE__ */ function(t) {
  return t[t.ByPos = 0] = "ByPos", t[t.ByHeight = 1] = "ByHeight", t[t.ByPosNoHeight = 2] = "ByPosNoHeight", t;
}(ve || (ve = {}));
const tc = 1e-3;
class ft {
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
    this.height != n && (Math.abs(this.height - n) > tc && (e.heightChanged = !0), this.height = n);
  }
  replace(e, n, r) {
    return ft.of(r);
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
      let { fromA: c, toA: a, fromB: h, toB: u } = i[l], f = s.lineAt(c, ve.ByPosNoHeight, r.setDoc(n), 0, 0), d = f.to >= a ? f : s.lineAt(a, ve.ByPosNoHeight, r, 0, 0);
      for (u += d.to - a, a = d.to; l > 0 && f.from <= i[l - 1].toA; )
        c = i[l - 1].fromA, h = i[l - 1].fromB, l--, c < f.from && (f = s.lineAt(c, ve.ByPosNoHeight, r, 0, 0));
      h += f.from - c, c = f.from;
      let p = Wd.build(r.setDoc(o), e, h, u);
      s = s.replace(c, a, p);
    }
    return s.updateHeight(r, 0);
  }
  static empty() {
    return new _t(0, 0);
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
    return e[n - 1] == null ? (o = 1, n--) : e[n] == null && (o = 1, r++), new vue(ft.of(e.slice(0, n)), o, ft.of(e.slice(r)));
  }
}
ft.prototype.size = 1;
class Iw extends ft {
  constructor(e, n, r) {
    super(e, n), this.deco = r;
  }
  blockAt(e, n, r, i) {
    return new fn(i, this.length, r, this.height, this.deco || 0);
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
class _t extends Iw {
  constructor(e, n) {
    super(e, n, null), this.collapsed = 0, this.widgetHeight = 0, this.breaks = 0;
  }
  blockAt(e, n, r, i) {
    return new fn(i, this.length, r, this.height, this.breaks);
  }
  replace(e, n, r) {
    let i = r[0];
    return r.length == 1 && (i instanceof _t || i instanceof Ue && i.flags & 4) && Math.abs(this.length - i.length) < 10 ? (i instanceof Ue ? i = new _t(i.length, this.height) : i.height = this.height, this.outdated || (i.outdated = !1), i) : ft.of(r);
  }
  updateHeight(e, n = 0, r = !1, i) {
    return i && i.from <= n && i.more ? this.setHeight(e, i.heights[i.index++]) : (r || this.outdated) && this.setHeight(e, Math.max(this.widgetHeight, e.heightForLine(this.length - this.collapsed)) + this.breaks * e.lineHeight), this.outdated = !1, this;
  }
  toString() {
    return `line(${this.length}${this.collapsed ? -this.collapsed : ""}${this.widgetHeight ? ":" + this.widgetHeight : ""})`;
  }
}
class Ue extends ft {
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
      return new fn(h.from, h.length, f, u, 0);
    } else {
      let a = Math.max(0, Math.min(o - s, Math.floor((e - r) / l))), { from: h, length: u } = n.doc.line(s + a);
      return new fn(h, u, r + l * a, l, 0);
    }
  }
  lineAt(e, n, r, i, s) {
    if (n == ve.ByHeight)
      return this.blockAt(e, r, i, s);
    if (n == ve.ByPosNoHeight) {
      let { from: d, to: p } = r.doc.lineAt(e);
      return new fn(d, p - d, 0, 0, 0);
    }
    let { firstLine: o, perLine: l, perChar: c } = this.heightMetrics(r, s), a = r.doc.lineAt(e), h = l + a.length * c, u = a.number - o, f = i + l * u + c * (a.from - s - u);
    return new fn(a.from, a.length, Math.max(i, Math.min(f, i + this.height - h)), h, 0);
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
      o(new fn(f.from, f.length, u, d, 0)), u += d, h = f.to + 1;
    }
  }
  replace(e, n, r) {
    let i = this.length - n;
    if (i > 0) {
      let s = r[r.length - 1];
      s instanceof Ue ? r[r.length - 1] = new Ue(s.length + i) : r.push(null, new Ue(i - 1));
    }
    if (e > 0) {
      let s = r[0];
      s instanceof Ue ? r[0] = new Ue(e + s.length) : r.unshift(new Ue(e - 1), null);
    }
    return ft.of(r);
  }
  decomposeLeft(e, n) {
    n.push(new Ue(e - 1), null);
  }
  decomposeRight(e, n) {
    n.push(null, new Ue(this.length - e - 1));
  }
  updateHeight(e, n = 0, r = !1, i) {
    let s = n + this.length;
    if (i && i.from <= n + this.length && i.more) {
      let o = [], l = Math.max(n, i.from), c = -1;
      for (i.from > n && o.push(new Ue(i.from - n - 1).updateHeight(e, n)); l <= s && i.more; ) {
        let h = e.doc.lineAt(l).length;
        o.length && o.push(null);
        let u = i.heights[i.index++];
        c == -1 ? c = u : Math.abs(u - c) >= tc && (c = -2);
        let f = new _t(h, u);
        f.outdated = !1, o.push(f), l += h + 1;
      }
      l <= s && o.push(null, new Ue(s - l).updateHeight(e, l));
      let a = ft.of(o);
      return (c < 0 || Math.abs(a.height - this.height) >= tc || Math.abs(c - this.heightMetrics(e, n).perLine) >= tc) && (e.heightChanged = !0), a;
    } else
      (r || this.outdated) && (this.setHeight(e, e.heightForGap(n, n + this.length)), this.outdated = !1);
    return this;
  }
  toString() {
    return `gap(${this.length})`;
  }
}
class vue extends ft {
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
    let o = i + this.left.height, l = s + this.left.length + this.break, c = n == ve.ByHeight ? e < o : e < l, a = c ? this.left.lineAt(e, n, r, i, s) : this.right.lineAt(e, n, r, o, l);
    if (this.break || (c ? a.to < l : a.from > l))
      return a;
    let h = n == ve.ByPosNoHeight ? ve.ByPosNoHeight : ve.ByPos;
    return c ? a.join(this.right.lineAt(l, h, r, o, l)) : this.left.lineAt(l, h, r, i, s).join(a);
  }
  forEachLine(e, n, r, i, s, o) {
    let l = i + this.left.height, c = s + this.left.length + this.break;
    if (this.break)
      e < c && this.left.forEachLine(e, n, r, i, s, o), n >= c && this.right.forEachLine(e, n, r, l, c, o);
    else {
      let a = this.lineAt(c, ve.ByPos, r, i, s);
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
    if (e > 0 && O0(s, o - 1), n < this.length) {
      let l = s.length;
      this.decomposeRight(n, s), O0(s, l);
    }
    return ft.of(s);
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
    return e.size > 2 * n.size || n.size > 2 * e.size ? ft.of(this.break ? [e, null, n] : [e, n]) : (this.left = e, this.right = n, this.height = e.height + n.height, this.outdated = e.outdated || n.outdated, this.size = e.size + n.size, this.length = e.length + this.break + n.length, this);
  }
  updateHeight(e, n = 0, r = !1, i) {
    let { left: s, right: o } = this, l = n + s.length + this.break, c = null;
    return i && i.from <= n + s.length && i.more ? c = s = s.updateHeight(e, n, r, i) : s.updateHeight(e, n, r), i && i.from <= l + o.length && i.more ? c = o = o.updateHeight(e, l, r, i) : o.updateHeight(e, l, r), c ? this.balanced(s, o) : (this.height = this.left.height + this.right.height, this.outdated = !1, this);
  }
  toString() {
    return this.left + (this.break ? " " : "-") + this.right;
  }
}
function O0(t, e) {
  let n, r;
  t[e] == null && (n = t[e - 1]) instanceof Ue && (r = t[e + 1]) instanceof Ue && t.splice(e - 1, 3, new Ue(n.length + 1 + r.length));
}
const wue = 5;
class Wd {
  constructor(e, n) {
    this.pos = e, this.oracle = n, this.nodes = [], this.lineStart = -1, this.lineEnd = -1, this.covering = null, this.writtenTo = e;
  }
  get isCovered() {
    return this.covering && this.nodes[this.nodes.length - 1] == this.covering;
  }
  span(e, n) {
    if (this.lineStart > -1) {
      let r = Math.min(n, this.lineEnd), i = this.nodes[this.nodes.length - 1];
      i instanceof _t ? i.length += r - this.pos : (r > this.pos || !this.isCovered) && this.nodes.push(new _t(r - this.pos, -1)), this.writtenTo = r, n > r && (this.nodes.push(null), this.writtenTo++, this.lineStart = -1);
    }
    this.pos = n;
  }
  point(e, n, r) {
    if (e < n || r.heightRelevant) {
      let i = r.widget ? r.widget.estimatedHeight : 0, s = r.widget ? r.widget.lineBreaks : 0;
      i < 0 && (i = this.oracle.lineHeight);
      let o = n - e;
      r.block ? this.addBlock(new Iw(o, i, r)) : (o || s || i >= wue) && this.addLineDeco(i, s, o);
    } else
      n > e && this.span(e, n);
    this.lineEnd > -1 && this.lineEnd < this.pos && (this.lineEnd = this.oracle.doc.lineAt(this.pos).to);
  }
  enterLine() {
    if (this.lineStart > -1)
      return;
    let { from: e, to: n } = this.oracle.doc.lineAt(this.pos);
    this.lineStart = e, this.lineEnd = n, this.writtenTo < e && ((this.writtenTo < e - 1 || this.nodes[this.nodes.length - 1] == null) && this.nodes.push(this.blankContent(this.writtenTo, e - 1)), this.nodes.push(null)), this.pos > e && this.nodes.push(new _t(this.pos - e, -1)), this.writtenTo = this.pos;
  }
  blankContent(e, n) {
    let r = new Ue(n - e);
    return this.oracle.doc.lineAt(e).to == n && (r.flags |= 4), r;
  }
  ensureLine() {
    this.enterLine();
    let e = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
    if (e instanceof _t)
      return e;
    let n = new _t(0, -1);
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
    this.lineStart > -1 && !(n instanceof _t) && !this.isCovered ? this.nodes.push(new _t(0, -1)) : (this.writtenTo < this.pos || n == null) && this.nodes.push(this.blankContent(this.writtenTo, this.pos));
    let r = e;
    for (let i of this.nodes)
      i instanceof _t && i.updateHeight(this.oracle, r), r += i ? i.length : 1;
    return this.nodes;
  }
  static build(e, n, r, i) {
    let s = new Wd(r, e);
    return Q.spans(n, r, i, s, 0), s.finish(r);
  }
}
function xue(t, e, n) {
  let r = new kue();
  return Q.compare(t, e, n, r, 0), r.changes;
}
class kue {
  constructor() {
    this.changes = [];
  }
  compareRange() {
  }
  comparePoint(e, n, r, i) {
    (e < n || r && r.heightRelevant || i && i.heightRelevant) && uf(e, n, this.changes, 5);
  }
}
function _ue(t, e) {
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
function Cue(t, e) {
  let n = t.getBoundingClientRect();
  return {
    left: 0,
    right: n.right - n.left,
    top: e,
    bottom: n.bottom - (n.top + e)
  };
}
class Hh {
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
    return P.replace({ widget: new Sue(this.size, e) }).range(this.from, this.to);
  }
}
class Sue extends tn {
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
class L0 {
  constructor(e) {
    this.state = e, this.pixelViewport = { left: 0, right: window.innerWidth, top: 0, bottom: 0 }, this.inView = !0, this.paddingTop = 0, this.paddingBottom = 0, this.contentDOMWidth = 0, this.contentDOMHeight = 0, this.editorHeight = 0, this.editorWidth = 0, this.scrollTop = 0, this.scrolledToBottom = !0, this.scrollAnchorPos = 0, this.scrollAnchorHeight = -1, this.scaler = R0, this.scrollTarget = null, this.printing = !1, this.mustMeasureContent = !0, this.defaultTextDirection = Ce.LTR, this.visibleRanges = [], this.mustEnforceCursorAssoc = !1;
    let n = e.facet(Vd).some((r) => typeof r != "function" && r.class == "cm-lineWrapping");
    this.heightOracle = new yue(n), this.stateDeco = e.facet(bo).filter((r) => typeof r != "function"), this.heightMap = ft.empty().applyChanges(this.stateDeco, te.empty, this.heightOracle.setDoc(e.doc), [new Nt(0, 0, 0, e.doc.length)]), this.viewport = this.getViewport(0, null), this.updateViewportLines(), this.updateForViewport(), this.lineGaps = this.ensureLineGaps([]), this.lineGapDeco = P.set(this.lineGaps.map((r) => r.draw(!1))), this.computeVisibleRanges();
  }
  updateForViewport() {
    let e = [this.viewport], { main: n } = this.state.selection;
    for (let r = 0; r <= 1; r++) {
      let i = r ? n.head : n.anchor;
      if (!e.some(({ from: s, to: o }) => i >= s && i <= o)) {
        let { from: s, to: o } = this.lineBlockAt(i);
        e.push(new yl(s, o));
      }
    }
    this.viewports = e.sort((r, i) => r.from - i.from), this.scaler = this.heightMap.height <= 7e6 ? R0 : new Due(this.heightOracle, this.heightMap, this.viewports);
  }
  updateViewportLines() {
    this.viewportLines = [], this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.heightOracle.setDoc(this.state.doc), 0, 0, (e) => {
      this.viewportLines.push(this.scaler.scale == 1 ? e : Vs(e, this.scaler));
    });
  }
  update(e, n = null) {
    this.state = e.state;
    let r = this.stateDeco;
    this.stateDeco = this.state.facet(bo).filter((h) => typeof h != "function");
    let i = e.changedRanges, s = Nt.extendWithRanges(i, xue(r, this.stateDeco, e ? e.changes : Ne.empty(this.state.doc.length))), o = this.heightMap.height, l = this.scrolledToBottom ? null : this.scrollAnchorAt(this.scrollTop);
    this.heightMap = this.heightMap.applyChanges(this.stateDeco, e.startState.doc, this.heightOracle.setDoc(this.state.doc), s), this.heightMap.height != o && (e.flags |= 2), l ? (this.scrollAnchorPos = e.changes.mapPos(l.from, -1), this.scrollAnchorHeight = l.top) : (this.scrollAnchorPos = -1, this.scrollAnchorHeight = this.heightMap.height);
    let c = s.length ? this.mapViewport(this.viewport, e.changes) : this.viewport;
    (n && (n.range.head < c.from || n.range.head > c.to) || !this.viewportIsAppropriate(c)) && (c = this.getViewport(0, n));
    let a = !e.changes.empty || e.flags & 2 || c.from != this.viewport.from || c.to != this.viewport.to;
    this.viewport = c, this.updateForViewport(), a && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 2e3 << 1) && this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, e.changes))), e.flags |= this.computeVisibleRanges(), n && (this.scrollTarget = n), !this.mustEnforceCursorAssoc && e.selectionSet && e.view.lineWrapping && e.state.selection.main.empty && e.state.selection.main.assoc && !e.state.facet(fw) && (this.mustEnforceCursorAssoc = !0);
  }
  measure(e) {
    let n = e.contentDOM, r = window.getComputedStyle(n), i = this.heightOracle, s = r.whiteSpace;
    this.defaultTextDirection = r.direction == "rtl" ? Ce.RTL : Ce.LTR;
    let o = this.heightOracle.mustRefreshForWrapping(s), l = n.getBoundingClientRect(), c = o || this.mustMeasureContent || this.contentDOMHeight != l.height;
    this.contentDOMHeight = l.height, this.mustMeasureContent = !1;
    let a = 0, h = 0, u = parseInt(r.paddingTop) || 0, f = parseInt(r.paddingBottom) || 0;
    (this.paddingTop != u || this.paddingBottom != f) && (this.paddingTop = u, this.paddingBottom = f, a |= 10), this.editorWidth != e.scrollDOM.clientWidth && (i.lineWrapping && (c = !0), this.editorWidth = e.scrollDOM.clientWidth, a |= 8), this.scrollTop != e.scrollDOM.scrollTop && (this.scrollAnchorHeight = -1, this.scrollTop = e.scrollDOM.scrollTop), this.scrolledToBottom = Yv(e.scrollDOM);
    let d = (this.printing ? Cue : _ue)(n, this.paddingTop), p = d.top - this.pixelViewport.top, g = d.bottom - this.pixelViewport.bottom;
    this.pixelViewport = d;
    let m = this.pixelViewport.bottom > this.pixelViewport.top && this.pixelViewport.right > this.pixelViewport.left;
    if (m != this.inView && (this.inView = m, m && (c = !0)), !this.inView && !this.scrollTarget)
      return 0;
    let y = l.width;
    if ((this.contentDOMWidth != y || this.editorHeight != e.scrollDOM.clientHeight) && (this.contentDOMWidth = l.width, this.editorHeight = e.scrollDOM.clientHeight, a |= 8), c) {
      let k = e.docView.measureVisibleLineHeights(this.viewport);
      if (i.mustRefreshForHeights(k) && (o = !0), o || i.lineWrapping && Math.abs(y - this.contentDOMWidth) > i.charWidth) {
        let { lineHeight: v, charWidth: x, textHeight: w } = e.docView.measureTextSize();
        o = v > 0 && i.refresh(s, v, x, w, y / x, k), o && (e.docView.minWidth = 0, a |= 8);
      }
      p > 0 && g > 0 ? h = Math.max(p, g) : p < 0 && g < 0 && (h = Math.min(p, g)), i.heightChanged = !1;
      for (let v of this.viewports) {
        let x = v.from == this.viewport.from ? k : e.docView.measureVisibleLineHeights(v);
        this.heightMap = (o ? ft.empty().applyChanges(this.stateDeco, te.empty, this.heightOracle, [new Nt(0, 0, 0, e.state.doc.length)]) : this.heightMap).updateHeight(i, 0, o, new bue(v.from, x));
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
    let r = 0.5 - Math.max(-0.5, Math.min(0.5, e / 1e3 / 2)), i = this.heightMap, s = this.heightOracle, { visibleTop: o, visibleBottom: l } = this, c = new yl(i.lineAt(o - r * 1e3, ve.ByHeight, s, 0, 0).from, i.lineAt(l + (1 - r) * 1e3, ve.ByHeight, s, 0, 0).to);
    if (n) {
      let { head: a } = n.range;
      if (a < c.from || a > c.to) {
        let h = Math.min(this.editorHeight, this.pixelViewport.bottom - this.pixelViewport.top), u = i.lineAt(a, ve.ByPos, s, 0, 0), f;
        n.y == "center" ? f = (u.top + u.bottom) / 2 - h / 2 : n.y == "start" || n.y == "nearest" && a < c.from ? f = u.top : f = u.bottom - h, c = new yl(i.lineAt(f - 1e3 / 2, ve.ByHeight, s, 0, 0).from, i.lineAt(f + h + 1e3 / 2, ve.ByHeight, s, 0, 0).to);
      }
    }
    return c;
  }
  mapViewport(e, n) {
    let r = n.mapPos(e.from, -1), i = n.mapPos(e.to, 1);
    return new yl(this.heightMap.lineAt(r, ve.ByPos, this.heightOracle, 0, 0).from, this.heightMap.lineAt(i, ve.ByPos, this.heightOracle, 0, 0).to);
  }
  viewportIsAppropriate({ from: e, to: n }, r = 0) {
    if (!this.inView)
      return !0;
    let { top: i } = this.heightMap.lineAt(e, ve.ByPos, this.heightOracle, 0, 0), { bottom: s } = this.heightMap.lineAt(n, ve.ByPos, this.heightOracle, 0, 0), { visibleTop: o, visibleBottom: l } = this;
    return (e == 0 || i <= o - Math.max(10, Math.min(-r, 250))) && (n == this.state.doc.length || s >= l + Math.max(10, Math.min(r, 250))) && i > o - 2 * 1e3 && s < l + 2 * 1e3;
  }
  mapLineGaps(e, n) {
    if (!e.length || n.empty)
      return e;
    let r = [];
    for (let i of e)
      n.touchesRange(i.from, i.to) || r.push(new Hh(n.mapPos(i.from), n.mapPos(i.to), i.size));
    return r;
  }
  ensureLineGaps(e, n) {
    let r = this.heightOracle.lineWrapping, i = r ? 1e4 : 2e3, s = i >> 1, o = i << 1;
    if (this.defaultTextDirection != Ce.LTR && !r)
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
      let g = Eue(e, (m) => m.from >= u.from && m.to <= u.to && Math.abs(m.from - a) < s && Math.abs(m.to - h) < s && !p.some((y) => m.from < y && m.to > y));
      if (!g) {
        if (h < u.to && n && r && n.visibleRanges.some((m) => m.from <= h && m.to >= h)) {
          let m = n.moveToLineBoundary(S.cursor(h), !1, !0).head;
          m > a && (h = m);
        }
        g = new Hh(a, h, this.gapSize(u, a, h, f));
      }
      l.push(g);
    };
    for (let a of this.viewportLines) {
      if (a.length < o)
        continue;
      let h = Aue(a.from, a.to, this.stateDeco);
      if (h.total < o)
        continue;
      let u = this.scrollTarget ? this.scrollTarget.range.head : null, f, d;
      if (r) {
        let p = i / this.heightOracle.lineLength * this.heightOracle.lineHeight, g, m;
        if (u != null) {
          let y = vl(h, u), b = ((this.visibleBottom - this.visibleTop) / 2 + p) / a.height;
          g = y - b, m = y + b;
        } else
          g = (this.visibleTop - a.top - p) / a.height, m = (this.visibleBottom - a.top + p) / a.height;
        f = bl(h, g), d = bl(h, m);
      } else {
        let p = h.total * this.heightOracle.charWidth, g = i * this.heightOracle.charWidth, m, y;
        if (u != null) {
          let b = vl(h, u), k = ((this.pixelViewport.right - this.pixelViewport.left) / 2 + g) / p;
          m = b - k, y = b + k;
        } else
          m = (this.pixelViewport.left - g) / p, y = (this.pixelViewport.right + g) / p;
        f = bl(h, m), d = bl(h, y);
      }
      f > a.from && c(a.from, f, a, h), d < a.to && c(d, a.to, a, h);
    }
    return l;
  }
  gapSize(e, n, r, i) {
    let s = vl(i, r) - vl(i, n);
    return this.heightOracle.lineWrapping ? e.height * s : i.total * this.heightOracle.charWidth * s;
  }
  updateLineGaps(e) {
    Hh.same(e, this.lineGaps) || (this.lineGaps = e, this.lineGapDeco = P.set(e.map((n) => n.draw(this.heightOracle.lineWrapping))));
  }
  computeVisibleRanges() {
    let e = this.stateDeco;
    this.lineGaps.length && (e = e.concat(this.lineGapDeco));
    let n = [];
    Q.spans(e, this.viewport.from, this.viewport.to, {
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
    return e >= this.viewport.from && e <= this.viewport.to && this.viewportLines.find((n) => n.from <= e && n.to >= e) || Vs(this.heightMap.lineAt(e, ve.ByPos, this.heightOracle, 0, 0), this.scaler);
  }
  lineBlockAtHeight(e) {
    return Vs(this.heightMap.lineAt(this.scaler.fromDOM(e), ve.ByHeight, this.heightOracle, 0, 0), this.scaler);
  }
  scrollAnchorAt(e) {
    let n = this.lineBlockAtHeight(e + 8);
    return n.from >= this.viewport.from || this.viewportLines[0].top - e > 200 ? n : this.viewportLines[0];
  }
  elementAtHeight(e) {
    return Vs(this.heightMap.blockAt(this.scaler.fromDOM(e), this.heightOracle, 0, 0), this.scaler);
  }
  get docHeight() {
    return this.scaler.toDOM(this.heightMap.height);
  }
  get contentHeight() {
    return this.docHeight + this.paddingTop + this.paddingBottom;
  }
}
class yl {
  constructor(e, n) {
    this.from = e, this.to = n;
  }
}
function Aue(t, e, n) {
  let r = [], i = t, s = 0;
  return Q.spans(n, t, e, {
    span() {
    },
    point(o, l) {
      o > i && (r.push({ from: i, to: o }), s += o - i), i = l;
    }
  }, 20), i < e && (r.push({ from: i, to: e }), s += e - i), { total: s, ranges: r };
}
function bl({ total: t, ranges: e }, n) {
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
function vl(t, e) {
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
function Eue(t, e) {
  for (let n of t)
    if (e(n))
      return n;
}
const R0 = {
  toDOM(t) {
    return t;
  },
  fromDOM(t) {
    return t;
  },
  scale: 1
};
class Due {
  constructor(e, n, r) {
    let i = 0, s = 0, o = 0;
    this.viewports = r.map(({ from: l, to: c }) => {
      let a = n.lineAt(l, ve.ByPos, e, 0, 0).top, h = n.lineAt(c, ve.ByPos, e, 0, 0).bottom;
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
function Vs(t, e) {
  if (e.scale == 1)
    return t;
  let n = e.toDOM(t.top), r = e.toDOM(t.bottom);
  return new fn(t.from, t.length, n, r - n, Array.isArray(t._content) ? t._content.map((i) => Vs(i, e)) : t._content);
}
const wl = /* @__PURE__ */ N.define({ combine: (t) => t.join(" ") }), wf = /* @__PURE__ */ N.define({ combine: (t) => t.indexOf(!0) > -1 }), xf = /* @__PURE__ */ Un.newName(), Nw = /* @__PURE__ */ Un.newName(), Bw = /* @__PURE__ */ Un.newName(), Pw = { "&light": "." + Nw, "&dark": "." + Bw };
function kf(t, e, n) {
  return new Un(e, {
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
const Tue = /* @__PURE__ */ kf("." + xf, {
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
}, Pw);
class Mue {
  constructor(e, n, r, i) {
    this.typeOver = i, this.bounds = null, this.text = "";
    let { impreciseHead: s, impreciseAnchor: o } = e.docView;
    if (e.state.readOnly && n > -1)
      this.newSel = null;
    else if (n > -1 && (this.bounds = e.docView.domBoundsAround(n, r, 0))) {
      let l = s || o ? [] : Rue(e), c = new Xv(l, e.state);
      c.readRange(this.bounds.startDOM, this.bounds.endDOM), this.text = c.text, this.newSel = Iue(l, this.bounds.from);
    } else {
      let l = e.observer.selectionRange, c = s && s.node == l.focusNode && s.offset == l.focusOffset || !sf(e.contentDOM, l.focusNode) ? e.state.selection.main.head : e.docView.posFromDOM(l.focusNode, l.focusOffset), a = o && o.node == l.anchorNode && o.offset == l.anchorOffset || !sf(e.contentDOM, l.anchorNode) ? e.state.selection.main.anchor : e.docView.posFromDOM(l.anchorNode, l.anchorOffset);
      this.newSel = S.single(a, c);
    }
  }
}
function Fw(t, e) {
  let n, { newSel: r } = e, i = t.state.selection.main, s = t.inputState.lastKeyTime > Date.now() - 100 ? t.inputState.lastKeyCode : -1;
  if (e.bounds) {
    let { from: o, to: l } = e.bounds, c = i.from, a = null;
    (s === 8 || B.android && e.text.length < l - o) && (c = i.to, a = "end");
    let h = Lue(t.state.doc.sliceString(o, l, Mi), e.text, c - o, a);
    h && (B.chrome && s == 13 && h.toB == h.from + 2 && e.text.slice(h.from, h.toB) == Mi + Mi && h.toB--, n = {
      from: o + h.from,
      to: o + h.toA,
      insert: te.of(e.text.slice(h.from, h.toB).split(Mi))
    });
  } else
    r && (!t.hasFocus && t.state.facet(Ea) || r.main.eq(i)) && (r = null);
  if (!n && !r)
    return !1;
  if (!n && e.typeOver && !i.empty && r && r.main.empty ? n = { from: i.from, to: i.to, insert: t.state.doc.slice(i.from, i.to) } : n && n.from >= i.from && n.to <= i.to && (n.from != i.from || n.to != i.to) && i.to - i.from - (n.to - n.from) <= 4 ? n = {
    from: i.from,
    to: i.to,
    insert: t.state.doc.slice(i.from, n.from).append(n.insert).append(t.state.doc.slice(n.to, i.to))
  } : (B.mac || B.android) && n && n.from == n.to && n.from == i.head - 1 && /^\. ?$/.test(n.insert.toString()) && t.contentDOM.getAttribute("autocorrect") == "off" ? (r && n.insert.length == 2 && (r = S.single(r.main.anchor - 1, r.main.head - 1)), n = { from: i.from, to: i.to, insert: te.of([" "]) }) : B.chrome && n && n.from == n.to && n.from == i.head && n.insert.toString() == `
 ` && t.lineWrapping && (r && (r = S.single(r.main.anchor - 1, r.main.head - 1)), n = { from: i.from, to: i.to, insert: te.of([" "]) }), n) {
    if (B.ios && t.inputState.flushIOSKey(t) || B.android && (n.from == i.from && n.to == i.to && n.insert.length == 1 && n.insert.lines == 2 && qi(t.contentDOM, "Enter", 13) || (n.from == i.from - 1 && n.to == i.to && n.insert.length == 0 || s == 8 && n.insert.length < n.to - n.from) && qi(t.contentDOM, "Backspace", 8) || n.from == i.from && n.to == i.to + 1 && n.insert.length == 0 && qi(t.contentDOM, "Delete", 46)))
      return !0;
    let o = n.insert.toString();
    t.inputState.composing >= 0 && t.inputState.composing++;
    let l, c = () => l || (l = Oue(t, n, r));
    return t.state.facet(aw).some((a) => a(t, n.from, n.to, o, c)) || t.dispatch(c()), !0;
  } else if (r && !r.main.eq(i)) {
    let o = !1, l = "select";
    return t.inputState.lastSelectionTime > Date.now() - 50 && (t.inputState.lastSelectionOrigin == "select" && (o = !0), l = t.inputState.lastSelectionOrigin), t.dispatch({ selection: r, scrollIntoView: o, userEvent: l }), !0;
  } else
    return !1;
}
function Oue(t, e, n) {
  let r, i = t.state, s = i.selection.main;
  if (e.from >= s.from && e.to <= s.to && e.to - e.from >= (s.to - s.from) / 3 && (!n || n.main.empty && n.main.from == e.from + e.insert.length) && t.inputState.composing < 0) {
    let l = s.from < e.from ? i.sliceDoc(s.from, e.from) : "", c = s.to > e.to ? i.sliceDoc(e.to, s.to) : "";
    r = i.replaceSelection(t.state.toText(l + e.insert.sliceString(0, void 0, t.state.lineBreak) + c));
  } else {
    let l = i.changes(e), c = n && n.main.to <= l.newLength ? n.main : void 0;
    if (i.selection.ranges.length > 1 && t.inputState.composing >= 0 && e.to <= s.to && e.to >= s.to - 10) {
      let a = t.state.sliceDoc(e.from, e.to), h = kw(t) || t.state.doc.lineAt(s.head), u = s.to - e.to, f = s.to - s.from;
      r = i.changeByRange((d) => {
        if (d.from == s.from && d.to == s.to)
          return { changes: l, range: c || d.map(l) };
        let p = d.to - u, g = p - a.length;
        if (d.to - d.from != f || t.state.sliceDoc(g, p) != a || h && d.to >= h.from && d.from <= h.to)
          return { range: d };
        let m = i.changes({ from: g, to: p, insert: e.insert }), y = d.to - s.to;
        return {
          changes: m,
          range: c ? S.range(Math.max(0, c.anchor + y), Math.max(0, c.head + y)) : d.map(m)
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
function Lue(t, e, n, r) {
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
function Rue(t) {
  let e = [];
  if (t.root.activeElement != t.contentDOM)
    return e;
  let { anchorNode: n, anchorOffset: r, focusNode: i, focusOffset: s } = t.observer.selectionRange;
  return n && (e.push(new l0(n, r)), (i != n || s != r) && e.push(new l0(i, s))), e;
}
function Iue(t, e) {
  if (t.length == 0)
    return null;
  let n = t[0].pos, r = t.length == 2 ? t[1].pos : n;
  return n > -1 && r > -1 ? S.single(n + e, r + e) : null;
}
const Nue = {
  childList: !0,
  characterData: !0,
  subtree: !0,
  attributes: !0,
  characterDataOldValue: !0
}, zh = B.ie && B.ie_version <= 11;
class Bue {
  constructor(e) {
    this.view = e, this.active = !1, this.selectionRange = new She(), this.selectionChanged = !1, this.delayedFlush = -1, this.resizeTimeout = -1, this.queue = [], this.delayedAndroidKey = null, this.flushingAndroidKey = -1, this.lastChange = 0, this.scrollTargets = [], this.intersection = null, this.resizeScroll = null, this.resizeContent = null, this.intersecting = !1, this.gapIntersection = null, this.gaps = [], this.parentCheck = -1, this.dom = e.contentDOM, this.observer = new MutationObserver((n) => {
      for (let r of n)
        this.queue.push(r);
      (B.ie && B.ie_version <= 11 || B.ios && e.composing) && n.some((r) => r.type == "childList" && r.removedNodes.length || r.type == "characterData" && r.oldValue.length > r.target.nodeValue.length) ? this.flushSoon() : this.flush();
    }), zh && (this.onCharData = (n) => {
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
    if (r.state.facet(Ea) ? r.root.activeElement != this.dom : !Ql(r.dom, i))
      return;
    let s = i.anchorNode && r.docView.nearest(i.anchorNode);
    if (s && s.ignoreEvent(e)) {
      n || (this.selectionChanged = !1);
      return;
    }
    (B.ie && B.ie_version <= 11 || B.android && B.chrome) && !r.state.selection.main.empty && i.focusNode && Ec(i.focusNode, i.focusOffset, i.anchorNode, i.anchorOffset) ? this.flushSoon() : this.flush(!1);
  }
  readSelectionRange() {
    let { view: e } = this, n = B.safari && e.root.nodeType == 11 && xhe(this.dom.ownerDocument) == this.dom && Pue(this.view) || Ac(e.root);
    if (!n || this.selectionRange.eq(n))
      return !1;
    let r = Ql(this.dom, n);
    return r && !this.selectionChanged && e.inputState.lastFocusTime > Date.now() - 200 && e.inputState.lastTouchTime < Date.now() - 300 && Ehe(this.dom, n) ? (this.view.inputState.lastFocusTime = 0, e.docView.updateSelection(), !1) : (this.selectionRange.setRange(n), r && (this.selectionChanged = !0), !0);
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
    this.active || (this.observer.observe(this.dom, Nue), zh && this.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.active = !0);
  }
  stop() {
    !this.active || (this.active = !1, this.observer.disconnect(), zh && this.dom.removeEventListener("DOMCharacterDataModified", this.onCharData));
  }
  clear() {
    this.processRecords(), this.queue.length = 0, this.selectionChanged = !1;
  }
  delayAndroidKey(e, n) {
    var r;
    if (!this.delayedAndroidKey) {
      let i = () => {
        let s = this.delayedAndroidKey;
        s && (this.clearDelayedAndroidKey(), this.view.inputState.lastKeyCode = s.keyCode, this.view.inputState.lastKeyTime = Date.now(), !this.flush() && s.force && qi(this.dom, s.key, s.keyCode));
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
    let { from: e, to: n, typeOver: r } = this.processRecords(), i = this.selectionChanged && Ql(this.dom, this.selectionRange);
    return e < 0 && !i ? null : (e > -1 && (this.lastChange = Date.now()), this.view.inputState.lastFocusTime = 0, this.selectionChanged = !1, new Mue(this.view, e, n, r));
  }
  flush(e = !0) {
    if (this.delayedFlush >= 0 || this.delayedAndroidKey)
      return !1;
    e && this.readSelectionRange();
    let n = this.readChange();
    if (!n)
      return !1;
    let r = this.view.state, i = Fw(this.view, n);
    return this.view.state == r && this.view.update([]), i;
  }
  readMutation(e) {
    let n = this.view.docView.nearest(e.target);
    if (!n || n.ignoreMutation(e))
      return null;
    if (n.markDirty(e.type == "attributes"), e.type == "attributes" && (n.flags |= 4), e.type == "childList") {
      let r = I0(n, e.previousSibling || e.target.previousSibling, -1), i = I0(n, e.nextSibling || e.target.nextSibling, 1);
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
function I0(t, e, n) {
  for (; e; ) {
    let r = ge.get(e);
    if (r && r.parent == t)
      return r;
    let i = e.parentNode;
    e = i != t.dom ? i : n > 0 ? e.nextSibling : e.previousSibling;
  }
  return null;
}
function Pue(t) {
  let e = null;
  function n(c) {
    c.preventDefault(), c.stopImmediatePropagation(), e = c.getTargetRanges()[0];
  }
  if (t.contentDOM.addEventListener("beforeinput", n, !0), t.dom.ownerDocument.execCommand("indent"), t.contentDOM.removeEventListener("beforeinput", n, !0), !e)
    return null;
  let r = e.startContainer, i = e.startOffset, s = e.endContainer, o = e.endOffset, l = t.docView.domAtPos(t.state.selection.main.anchor);
  return Ec(l.node, l.offset, s, o) && ([r, i, s, o] = [s, o, r, i]), { anchorNode: r, anchorOffset: i, focusNode: s, focusOffset: o };
}
class M {
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
    this.dispatchTransactions = e.dispatchTransactions || n && ((r) => r.forEach((i) => n(i, this))) || ((r) => this.update(r)), this.dispatch = this.dispatch.bind(this), this._root = e.root || Ahe(e.parent) || document, this.viewState = new L0(e.state || Z.create(e)), this.plugins = this.state.facet(Hs).map((r) => new Fh(r));
    for (let r of this.plugins)
      r.update(this);
    this.observer = new Bue(this), this.inputState = new rue(this), this.inputState.ensureHandlers(this, this.plugins), this.docView = new g0(this), this.mountStyles(), this.updateAttrs(), this.updateState = 0, this.requestMeasure(), e.parent && e.parent.appendChild(this.dom);
  }
  dispatch(...e) {
    let n = e.length == 1 && e[0] instanceof Pe ? e : e.length == 1 && Array.isArray(e[0]) ? e[0] : [this.state.update(...e)];
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
    e.some((f) => f.annotation(Ow)) ? (this.inputState.notifiedFocused = o, l = 1) : o != this.inputState.notifiedFocused && (this.inputState.notifiedFocused = o, c = Lw(s, o), c || (l = 1));
    let a = this.observer.delayedAndroidKey, h = null;
    if (a ? (this.observer.clearDelayedAndroidKey(), h = this.observer.readChange(), (h && !this.state.doc.eq(s.doc) || !this.state.selection.eq(s.selection)) && (h = null)) : this.observer.clear(), s.facet(Z.phrases) != this.state.facet(Z.phrases))
      return this.setState(s);
    i = Mc.create(this, s, e), i.flags |= l;
    let u = this.viewState.scrollTarget;
    try {
      this.updateState = 2;
      for (let f of e) {
        if (u && (u = u.map(f.changes)), f.scrollIntoView) {
          let { main: d } = f.state.selection;
          u = new Tc(d.empty ? d : S.cursor(d.head, d.head > d.anchor ? -1 : 1));
        }
        for (let d of f.effects)
          d.is(d0) && (u = d.value);
      }
      this.viewState.update(i, u), this.bidiCache = Oc.update(this.bidiCache, i.changes), i.empty || (this.updatePlugins(i), this.inputState.update(i)), n = this.docView.update(i), this.state.facet(zs) != this.styleModules && this.mountStyles(), r = this.updateAttrs(), this.showAnnouncements(e), this.docView.updateSelection(n, e.some((f) => f.isUserEvent("select.pointer")));
    } finally {
      this.updateState = 0;
    }
    if (i.startState.facet(wl) != i.state.facet(wl) && (this.viewState.mustMeasureContent = !0), (n || r || u || this.viewState.mustEnforceCursorAssoc || this.viewState.mustMeasureContent) && this.requestMeasure(), !i.empty)
      for (let f of this.state.facet(ff))
        f(i);
    (c || h) && Promise.resolve().then(() => {
      c && this.state == c.startState && this.dispatch(c), h && !Fw(this, h) && a.force && qi(this.contentDOM, a.key, a.keyCode);
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
      this.viewState = new L0(e), this.plugins = e.facet(Hs).map((r) => new Fh(r)), this.pluginMap.clear();
      for (let r of this.plugins)
        r.update(this);
      this.docView = new g0(this), this.inputState.ensureHandlers(this, this.plugins), this.mountStyles(), this.updateAttrs(), this.bidiCache = [];
    } finally {
      this.updateState = 0;
    }
    n && this.focus(), this.requestMeasure();
  }
  updatePlugins(e) {
    let n = e.startState.facet(Hs), r = e.state.facet(Hs);
    if (n != r) {
      let i = [];
      for (let s of r) {
        let o = n.indexOf(s);
        if (o < 0)
          i.push(new Fh(s));
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
          if (Yv(r))
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
            return It(this.state, p), N0;
          }
        }), u = Mc.create(this, this.state, []), f = !1;
        u.flags |= c, n ? n.flags |= c : n = u, this.updateState = 2, u.empty || (this.updatePlugins(u), this.inputState.update(u), this.updateAttrs(), f = this.docView.update(u));
        for (let d = 0; d < a.length; d++)
          if (h[d] != N0)
            try {
              let p = a[d];
              p.write && p.write(h[d], this);
            } catch (p) {
              It(this.state, p);
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
      for (let l of this.state.facet(ff))
        l(n);
  }
  get themeClasses() {
    return xf + " " + (this.state.facet(wf) ? Bw : Nw) + " " + this.state.facet(wl);
  }
  updateAttrs() {
    let e = B0(this, dw, {
      class: "cm-editor" + (this.hasFocus ? " cm-focused " : " ") + this.themeClasses
    }), n = {
      spellcheck: "false",
      autocorrect: "off",
      autocapitalize: "off",
      translate: "no",
      contenteditable: this.state.facet(Ea) ? "true" : "false",
      class: "cm-content",
      style: `${B.tabSize}: ${this.state.tabSize}`,
      role: "textbox",
      "aria-multiline": "true"
    };
    this.state.readOnly && (n["aria-readonly"] = "true"), B0(this, Vd, n);
    let r = this.observer.ignore(() => {
      let i = hf(this.contentDOM, this.contentAttrs, n), s = hf(this.dom, this.editorAttrs, e);
      return i || s;
    });
    return this.editorAttrs = e, this.contentAttrs = n, r;
  }
  showAnnouncements(e) {
    let n = !0;
    for (let r of e)
      for (let i of r.effects)
        if (i.is(M.announce)) {
          n && (this.announceDOM.textContent = ""), n = !1;
          let s = this.announceDOM.appendChild(document.createElement("div"));
          s.textContent = i.value;
        }
  }
  mountStyles() {
    this.styleModules = this.state.facet(zs);
    let e = this.state.facet(M.cspNonce);
    Un.mount(this.root, this.styleModules.concat(Tue).reverse(), e ? { nonce: e } : void 0);
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
    return qh(this, e, x0(this, e, n, r));
  }
  moveByGroup(e, n) {
    return qh(this, e, x0(this, e, n, (r) => tue(this, e.head, r)));
  }
  moveToLineBoundary(e, n, r = !0) {
    return eue(this, e, n, r);
  }
  moveVertically(e, n, r) {
    return qh(this, e, nue(this, e, n, r));
  }
  domAtPos(e) {
    return this.docView.domAtPos(e);
  }
  posAtDOM(e, n = 0) {
    return this.docView.posFromDOM(e, n);
  }
  posAtCoords(e, n = !0) {
    return this.readMeasured(), Cw(this, e, n);
  }
  coordsAtPos(e, n = 1) {
    this.readMeasured();
    let r = this.docView.coordsAt(e, n);
    if (!r || r.left == r.right)
      return r;
    let i = this.state.doc.lineAt(e), s = this.bidiSpans(i), o = s[lr.find(s, e - i.from, -1, n)];
    return qd(r, o.dir == Ce.LTR == n > 0);
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
    return !this.state.facet(uw) || e < this.viewport.from || e > this.viewport.to ? this.textDirection : (this.readMeasured(), this.docView.textDirectionAt(e));
  }
  get lineWrapping() {
    return this.viewState.heightOracle.lineWrapping;
  }
  bidiSpans(e) {
    if (e.length > Fue)
      return ww(e.length);
    let n = this.textDirectionAt(e.from), r;
    for (let s of this.bidiCache)
      if (s.from == e.from && s.dir == n && (s.fresh || vw(s.isolates, r = p0(this, e.from, e.to))))
        return s.order;
    r || (r = p0(this, e.from, e.to));
    let i = Hhe(e.text, n, r);
    return this.bidiCache.push(new Oc(e.from, e.to, n, r, !0, i)), i;
  }
  get hasFocus() {
    var e;
    return (this.dom.ownerDocument.hasFocus() || B.safari && ((e = this.inputState) === null || e === void 0 ? void 0 : e.lastContextMenu) > Date.now() - 3e4) && this.root.activeElement == this.contentDOM;
  }
  focus() {
    this.observer.ignore(() => {
      jv(this.contentDOM), this.docView.updateSelection();
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
    return d0.of(new Tc(typeof e == "number" ? S.cursor(e) : e, n.y, n.x, n.yMargin, n.xMargin));
  }
  static domEventHandlers(e) {
    return Ae.define(() => ({}), { eventHandlers: e });
  }
  static theme(e, n) {
    let r = Un.newName(), i = [wl.of(r), zs.of(kf(`.${r}`, e))];
    return n && n.dark && i.push(wf.of(!0)), i;
  }
  static baseTheme(e) {
    return Sr.lowest(zs.of(kf("." + xf, e, Pw)));
  }
  static findFromDOM(e) {
    var n;
    let r = e.querySelector(".cm-content"), i = r && ge.get(r) || ge.get(e);
    return ((n = i == null ? void 0 : i.rootView) === null || n === void 0 ? void 0 : n.view) || null;
  }
}
M.styleModule = zs;
M.inputHandler = aw;
M.focusChangeEffect = hw;
M.perLineTextDirection = uw;
M.exceptionSink = cw;
M.updateListener = ff;
M.editable = Ea;
M.mouseSelectionStyle = lw;
M.dragMovesSelection = ow;
M.clickAddsSelectionRange = sw;
M.decorations = bo;
M.atomicRanges = Ud;
M.bidiIsolatedRanges = pw;
M.scrollMargins = gw;
M.darkTheme = wf;
M.cspNonce = /* @__PURE__ */ N.define({ combine: (t) => t.length ? t[0] : "" });
M.contentAttributes = Vd;
M.editorAttributes = dw;
M.lineWrapping = /* @__PURE__ */ M.contentAttributes.of({ class: "cm-lineWrapping" });
M.announce = /* @__PURE__ */ j.define();
const Fue = 4096, N0 = {};
class Oc {
  constructor(e, n, r, i, s, o) {
    this.from = e, this.to = n, this.dir = r, this.isolates = i, this.fresh = s, this.order = o;
  }
  static update(e, n) {
    if (n.empty && !e.some((s) => s.fresh))
      return e;
    let r = [], i = e.length ? e[e.length - 1].dir : Ce.LTR;
    for (let s = Math.max(0, e.length - 10); s < e.length; s++) {
      let o = e[s];
      o.dir == i && !n.touchesRange(o.from, o.to) && r.push(new Oc(n.mapPos(o.from, 1), n.mapPos(o.to, -1), o.dir, o.isolates, !1, o.order));
    }
    return r;
  }
}
function B0(t, e, n) {
  for (let r = t.state.facet(e), i = r.length - 1; i >= 0; i--) {
    let s = r[i], o = typeof s == "function" ? s(t) : s;
    o && af(o, n);
  }
  return n;
}
const $ue = B.mac ? "mac" : B.windows ? "win" : B.linux ? "linux" : "key";
function que(t, e) {
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
function xl(t, e, n) {
  return e.altKey && (t = "Alt-" + t), e.ctrlKey && (t = "Ctrl-" + t), e.metaKey && (t = "Meta-" + t), n !== !1 && e.shiftKey && (t = "Shift-" + t), t;
}
const Hue = /* @__PURE__ */ Sr.default(/* @__PURE__ */ M.domEventHandlers({
  keydown(t, e) {
    return qw($w(e.state), t, e, "editor");
  }
})), wo = /* @__PURE__ */ N.define({ enables: Hue }), P0 = /* @__PURE__ */ new WeakMap();
function $w(t) {
  let e = t.facet(wo), n = P0.get(e);
  return n || P0.set(e, n = Uue(e.reduce((r, i) => r.concat(i), []))), n;
}
function zue(t, e, n) {
  return qw($w(t.state), e, t, n);
}
let nr = null;
const Vue = 4e3;
function Uue(t, e = $ue) {
  let n = /* @__PURE__ */ Object.create(null), r = /* @__PURE__ */ Object.create(null), i = (o, l) => {
    let c = r[o];
    if (c == null)
      r[o] = l;
    else if (c != l)
      throw new Error("Key binding " + o + " is used both as a regular binding and as a multi-stroke prefix");
  }, s = (o, l, c, a, h) => {
    var u, f;
    let d = n[o] || (n[o] = /* @__PURE__ */ Object.create(null)), p = l.split(/ (?!$)/).map((y) => que(y, e));
    for (let y = 1; y < p.length; y++) {
      let b = p.slice(0, y).join(" ");
      i(b, !0), d[b] || (d[b] = {
        preventDefault: !0,
        stopPropagation: !1,
        run: [(k) => {
          let v = nr = { view: k, prefix: b, scope: o };
          return setTimeout(() => {
            nr == v && (nr = null);
          }, Vue), !0;
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
function qw(t, e, n, r) {
  let i = whe(e), s = We(i, 0), o = Mt(s) == i.length && i != " ", l = "", c = !1, a = !1, h = !1;
  nr && nr.view == n && nr.scope == r && (l = nr.prefix + " ", Aw.indexOf(e.keyCode) < 0 && (a = !0, nr = null));
  let u = /* @__PURE__ */ new Set(), f = (m) => {
    if (m) {
      for (let y of m.run)
        if (!u.has(y) && (u.add(y), y(n, e)))
          return m.stopPropagation && (h = !0), !0;
      m.preventDefault && (m.stopPropagation && (h = !0), a = !0);
    }
    return !1;
  }, d = t[r], p, g;
  return d && (f(d[l + xl(i, e, !o)]) ? c = !0 : o && (e.altKey || e.metaKey || e.ctrlKey) && !(B.windows && e.ctrlKey && e.altKey) && (p = yr[e.keyCode]) && p != i ? (f(d[l + xl(p, e, !0)]) || e.shiftKey && (g = mo[e.keyCode]) != i && g != p && f(d[l + xl(g, e, !1)])) && (c = !0) : o && e.shiftKey && f(d[l + xl(i, e, !0)]) && (c = !0), !c && f(d._any) && (c = !0)), a && (c = !0), c && h && e.stopPropagation(), c;
}
class Vo {
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
      let s = Hw(e);
      return [new Vo(n, i.left - s.left, i.top - s.top, null, i.bottom - i.top)];
    } else
      return Wue(e, n, r);
  }
}
function Hw(t) {
  let e = t.scrollDOM.getBoundingClientRect();
  return { left: (t.textDirection == Ce.LTR ? e.left : e.right - t.scrollDOM.clientWidth) - t.scrollDOM.scrollLeft, top: e.top - t.scrollDOM.scrollTop };
}
function F0(t, e, n) {
  let r = S.cursor(e);
  return {
    from: Math.max(n.from, t.moveToLineBoundary(r, !1, !0).from),
    to: Math.min(n.to, t.moveToLineBoundary(r, !0, !0).from),
    type: Se.Text
  };
}
function Wue(t, e, n) {
  if (n.to <= t.viewport.from || n.from >= t.viewport.to)
    return [];
  let r = Math.max(n.from, t.viewport.from), i = Math.min(n.to, t.viewport.to), s = t.textDirection == Ce.LTR, o = t.contentDOM, l = o.getBoundingClientRect(), c = Hw(t), a = o.querySelector(".cm-line"), h = a && window.getComputedStyle(a), u = l.left + (h ? parseInt(h.paddingLeft) + Math.min(0, parseInt(h.textIndent)) : 0), f = l.right - (h ? parseInt(h.paddingRight) : 0), d = yf(t, r), p = yf(t, i), g = d.type == Se.Text ? d : null, m = p.type == Se.Text ? p : null;
  if (g && (t.lineWrapping || d.widgetLineBreaks) && (g = F0(t, r, g)), m && (t.lineWrapping || p.widgetLineBreaks) && (m = F0(t, i, m)), g && m && g.from == m.from)
    return b(k(n.from, n.to, g));
  {
    let x = g ? k(n.from, null, g) : v(d, !1), w = m ? k(null, n.to, m) : v(p, !0), C = [];
    return (g || d).to < (m || p).from - (g && m ? 1 : 0) || d.widgetLineBreaks > 1 && x.bottom + t.defaultLineHeight / 2 < w.top ? C.push(y(u, x.bottom, f, w.top)) : x.bottom < w.top && t.elementAtHeight((x.bottom + w.top) / 2).type == Se.Text && (x.bottom = w.top = (x.bottom + w.top) / 2), b(x).concat(C).concat(b(w));
  }
  function y(x, w, C, I) {
    return new Vo(e, x - c.left, w - c.top - 0.01, C - x, I - w + 0.01);
  }
  function b({ top: x, bottom: w, horizontal: C }) {
    let I = [];
    for (let O = 0; O < C.length; O += 2)
      I.push(y(C[O], x, C[O + 1], w));
    return I;
  }
  function k(x, w, C) {
    let I = 1e9, O = -1e9, D = [];
    function V(A, U, H, ye, le) {
      let se = t.coordsAtPos(A, A == C.to ? -2 : 2), ce = t.coordsAtPos(H, H == C.from ? 2 : -2);
      !se || !ce || (I = Math.min(se.top, ce.top, I), O = Math.max(se.bottom, ce.bottom, O), le == Ce.LTR ? D.push(s && U ? u : se.left, s && ye ? f : ce.right) : D.push(!s && ye ? u : ce.left, !s && U ? f : se.right));
    }
    let re = x != null ? x : C.from, J = w != null ? w : C.to;
    for (let A of t.visibleRanges)
      if (A.to > re && A.from < J)
        for (let U = Math.max(A.from, re), H = Math.min(A.to, J); ; ) {
          let ye = t.state.doc.lineAt(U);
          for (let le of t.bidiSpans(ye)) {
            let se = le.from + ye.from, ce = le.to + ye.from;
            if (se >= H)
              break;
            ce > U && V(Math.max(se, U), x == null && se <= re, Math.min(ce, H), w == null && ce >= J, le.dir);
          }
          if (U = ye.to + 1, U >= H)
            break;
        }
    return D.length == 0 && V(re, x == null, J, w == null, t.textDirection), { top: I, bottom: O, horizontal: D };
  }
  function v(x, w) {
    let C = l.top + (w ? x.top : x.bottom);
    return { top: C, bottom: C, horizontal: [] };
  }
}
function jue(t, e) {
  return t.constructor == e.constructor && t.eq(e);
}
class Gue {
  constructor(e, n) {
    this.view = e, this.layer = n, this.drawn = [], this.measureReq = { read: this.measure.bind(this), write: this.draw.bind(this) }, this.dom = e.scrollDOM.appendChild(document.createElement("div")), this.dom.classList.add("cm-layer"), n.above && this.dom.classList.add("cm-layer-above"), n.class && this.dom.classList.add(n.class), this.dom.setAttribute("aria-hidden", "true"), this.setOrder(e.state), e.requestMeasure(this.measureReq), n.mount && n.mount(this.dom, e);
  }
  update(e) {
    e.startState.facet(nc) != e.state.facet(nc) && this.setOrder(e.state), (this.layer.update(e, this.dom) || e.geometryChanged) && e.view.requestMeasure(this.measureReq);
  }
  setOrder(e) {
    let n = 0, r = e.facet(nc);
    for (; n < r.length && r[n] != this.layer; )
      n++;
    this.dom.style.zIndex = String((this.layer.above ? 150 : -1) - n);
  }
  measure() {
    return this.layer.markers(this.view);
  }
  draw(e) {
    if (e.length != this.drawn.length || e.some((n, r) => !jue(n, this.drawn[r]))) {
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
const nc = /* @__PURE__ */ N.define();
function zw(t) {
  return [
    Ae.define((e) => new Gue(e, t)),
    nc.of(t)
  ];
}
const Vw = !B.ios, xo = /* @__PURE__ */ N.define({
  combine(t) {
    return Tn(t, {
      cursorBlinkRate: 1200,
      drawRangeCursor: !0
    }, {
      cursorBlinkRate: (e, n) => Math.min(e, n),
      drawRangeCursor: (e, n) => e || n
    });
  }
});
function Yue(t = {}) {
  return [
    xo.of(t),
    Kue,
    Jue,
    Zue,
    fw.of(!0)
  ];
}
function Uw(t) {
  return t.startState.facet(xo) != t.state.facet(xo);
}
const Kue = /* @__PURE__ */ zw({
  above: !0,
  markers(t) {
    let { state: e } = t, n = e.facet(xo), r = [];
    for (let i of e.selection.ranges) {
      let s = i == e.selection.main;
      if (i.empty ? !s || Vw : n.drawRangeCursor) {
        let o = s ? "cm-cursor cm-cursor-primary" : "cm-cursor cm-cursor-secondary", l = i.empty ? i : S.cursor(i.head, i.head > i.anchor ? -1 : 1);
        for (let c of Vo.forRange(t, o, l))
          r.push(c);
      }
    }
    return r;
  },
  update(t, e) {
    t.transactions.some((r) => r.selection) && (e.style.animationName = e.style.animationName == "cm-blink" ? "cm-blink2" : "cm-blink");
    let n = Uw(t);
    return n && $0(t.state, e), t.docChanged || t.selectionSet || n;
  },
  mount(t, e) {
    $0(e.state, t);
  },
  class: "cm-cursorLayer"
});
function $0(t, e) {
  e.style.animationDuration = t.facet(xo).cursorBlinkRate + "ms";
}
const Jue = /* @__PURE__ */ zw({
  above: !1,
  markers(t) {
    return t.state.selection.ranges.map((e) => e.empty ? [] : Vo.forRange(t, "cm-selectionBackground", e)).reduce((e, n) => e.concat(n));
  },
  update(t, e) {
    return t.docChanged || t.selectionSet || t.viewportChanged || Uw(t);
  },
  class: "cm-selectionLayer"
}), Ww = {
  ".cm-line": {
    "& ::selection": { backgroundColor: "transparent !important" },
    "&::selection": { backgroundColor: "transparent !important" }
  }
};
Vw && (Ww[".cm-line"].caretColor = "transparent !important");
const Zue = /* @__PURE__ */ Sr.highest(/* @__PURE__ */ M.theme(Ww)), jw = /* @__PURE__ */ j.define({
  map(t, e) {
    return t == null ? null : e.mapPos(t);
  }
}), Us = /* @__PURE__ */ Ie.define({
  create() {
    return null;
  },
  update(t, e) {
    return t != null && (t = e.changes.mapPos(t)), e.effects.reduce((n, r) => r.is(jw) ? r.value : n, t);
  }
}), Xue = /* @__PURE__ */ Ae.fromClass(class {
  constructor(t) {
    this.view = t, this.cursor = null, this.measureReq = { read: this.readPos.bind(this), write: this.drawCursor.bind(this) };
  }
  update(t) {
    var e;
    let n = t.state.field(Us);
    n == null ? this.cursor != null && ((e = this.cursor) === null || e === void 0 || e.remove(), this.cursor = null) : (this.cursor || (this.cursor = this.view.scrollDOM.appendChild(document.createElement("div")), this.cursor.className = "cm-dropCursor"), (t.startState.field(Us) != n || t.docChanged || t.geometryChanged) && this.view.requestMeasure(this.measureReq));
  }
  readPos() {
    let t = this.view.state.field(Us), e = t != null && this.view.coordsAtPos(t);
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
    this.view.state.field(Us) != t && this.view.dispatch({ effects: jw.of(t) });
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
function Que() {
  return [Us, Xue];
}
function q0(t, e, n, r, i) {
  e.lastIndex = 0;
  for (let s = t.iterRange(n, r), o = n, l; !s.next().done; o += s.value.length)
    if (!s.lineBreak)
      for (; l = e.exec(s.value); )
        i(o + l.index, l);
}
function efe(t, e) {
  let n = t.visibleRanges;
  if (n.length == 1 && n[0].from == t.viewport.from && n[0].to == t.viewport.to)
    return n;
  let r = [];
  for (let { from: i, to: s } of n)
    i = Math.max(t.state.doc.lineAt(i).from, i - e), s = Math.min(t.state.doc.lineAt(s).to, s + e), r.length && r[r.length - 1].to >= i ? r[r.length - 1].to = s : r.push({ from: i, to: s });
  return r;
}
class tfe {
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
    let n = new Dt(), r = n.add.bind(n);
    for (let { from: i, to: s } of efe(e, this.maxLength))
      q0(e.state.doc, this.regexp, i, s, (o, l) => this.addMatch(l, e, o, r));
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
          q0(e.state.doc, this.regexp, h, u, (g, m) => this.addMatch(m, e, g, p));
        n = n.update({ filterFrom: h, filterTo: u, filter: (g, m) => g < h || m > u, add: f });
      }
    }
    return n;
  }
}
const _f = /x/.unicode != null ? "gu" : "g", nfe = /* @__PURE__ */ new RegExp(`[\0-\b
-\x7F-\x9F\xAD\u061C\u200B\u200E\u200F\u2028\u2029\u202D\u202E\u2066\u2067\u2069\uFEFF\uFFF9-\uFFFC]`, _f), rfe = {
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
let Vh = null;
function ife() {
  var t;
  if (Vh == null && typeof document < "u" && document.body) {
    let e = document.body.style;
    Vh = ((t = e.tabSize) !== null && t !== void 0 ? t : e.MozTabSize) != null;
  }
  return Vh || !1;
}
const rc = /* @__PURE__ */ N.define({
  combine(t) {
    let e = Tn(t, {
      render: null,
      specialChars: nfe,
      addSpecialChars: null
    });
    return (e.replaceTabs = !ife()) && (e.specialChars = new RegExp("	|" + e.specialChars.source, _f)), e.addSpecialChars && (e.specialChars = new RegExp(e.specialChars.source + "|" + e.addSpecialChars.source, _f)), e;
  }
});
function sfe(t = {}) {
  return [rc.of(t), ofe()];
}
let H0 = null;
function ofe() {
  return H0 || (H0 = Ae.fromClass(class {
    constructor(t) {
      this.view = t, this.decorations = P.none, this.decorationCache = /* @__PURE__ */ Object.create(null), this.decorator = this.makeDecorator(t.state.facet(rc)), this.decorations = this.decorator.createDeco(t);
    }
    makeDecorator(t) {
      return new tfe({
        regexp: t.specialChars,
        decoration: (e, n, r) => {
          let { doc: i } = n.state, s = We(e[0], 0);
          if (s == 9) {
            let o = i.lineAt(r), l = n.state.tabSize, c = ks(o.text, l, r - o.from);
            return P.replace({ widget: new hfe((l - c % l) * this.view.defaultCharacterWidth) });
          }
          return this.decorationCache[s] || (this.decorationCache[s] = P.replace({ widget: new afe(t, s) }));
        },
        boundary: t.replaceTabs ? void 0 : /[^]/
      });
    }
    update(t) {
      let e = t.state.facet(rc);
      t.startState.facet(rc) != e ? (this.decorator = this.makeDecorator(e), this.decorations = this.decorator.createDeco(t.view)) : this.decorations = this.decorator.updateDeco(t, this.decorations);
    }
  }, {
    decorations: (t) => t.decorations
  }));
}
const lfe = "\u2022";
function cfe(t) {
  return t >= 32 ? lfe : t == 10 ? "\u2424" : String.fromCharCode(9216 + t);
}
class afe extends tn {
  constructor(e, n) {
    super(), this.options = e, this.code = n;
  }
  eq(e) {
    return e.code == this.code;
  }
  toDOM(e) {
    let n = cfe(this.code), r = e.state.phrase("Control character") + " " + (rfe[this.code] || "0x" + this.code.toString(16)), i = this.options.render && this.options.render(this.code, r, n);
    if (i)
      return i;
    let s = document.createElement("span");
    return s.textContent = n, s.title = r, s.setAttribute("aria-label", r), s.className = "cm-specialChar", s;
  }
  ignoreEvent() {
    return !1;
  }
}
class hfe extends tn {
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
function ufe() {
  return dfe;
}
const ffe = /* @__PURE__ */ P.line({ class: "cm-activeLine" }), dfe = /* @__PURE__ */ Ae.fromClass(class {
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
      i.from > e && (n.push(ffe.range(i.from)), e = i.from);
    }
    return P.set(n);
  }
}, {
  decorations: (t) => t.decorations
}), Cf = 2e3;
function pfe(t, e, n) {
  let r = Math.min(e.line, n.line), i = Math.max(e.line, n.line), s = [];
  if (e.off > Cf || n.off > Cf || e.col < 0 || n.col < 0) {
    let o = Math.min(e.off, n.off), l = Math.max(e.off, n.off);
    for (let c = r; c <= i; c++) {
      let a = t.doc.line(c);
      a.length <= l && s.push(S.range(a.from + o, a.to + l));
    }
  } else {
    let o = Math.min(e.col, n.col), l = Math.max(e.col, n.col);
    for (let c = r; c <= i; c++) {
      let a = t.doc.line(c), h = tf(a.text, o, t.tabSize, !0);
      if (h < 0)
        s.push(S.cursor(a.to));
      else {
        let u = tf(a.text, l, t.tabSize);
        s.push(S.range(a.from + h, a.from + u));
      }
    }
  }
  return s;
}
function gfe(t, e) {
  let n = t.coordsAtPos(t.viewport.from);
  return n ? Math.round(Math.abs((n.left - e) / t.defaultCharacterWidth)) : -1;
}
function z0(t, e) {
  let n = t.posAtCoords({ x: e.clientX, y: e.clientY }, !1), r = t.state.doc.lineAt(n), i = n - r.from, s = i > Cf ? -1 : i == r.length ? gfe(t, e.clientX) : ks(r.text, t.state.tabSize, n - r.from);
  return { line: r.number, col: s, off: i };
}
function mfe(t, e) {
  let n = z0(t, e), r = t.state.selection;
  return n ? {
    update(i) {
      if (i.docChanged) {
        let s = i.changes.mapPos(i.startState.doc.line(n.line).from), o = i.state.doc.lineAt(s);
        n = { line: o.number, col: n.col, off: Math.min(n.off, o.length) }, r = r.map(i.changes);
      }
    },
    get(i, s, o) {
      let l = z0(t, i);
      if (!l)
        return r;
      let c = pfe(t.state, n, l);
      return c.length ? o ? S.create(c.concat(r.ranges)) : S.create(c) : r;
    }
  } : null;
}
function yfe(t) {
  let e = (t == null ? void 0 : t.eventFilter) || ((n) => n.altKey && n.button == 0);
  return M.mouseSelectionStyle.of((n, r) => e(r) ? mfe(n, r) : null);
}
const bfe = {
  Alt: [18, (t) => !!t.altKey],
  Control: [17, (t) => !!t.ctrlKey],
  Shift: [16, (t) => !!t.shiftKey],
  Meta: [91, (t) => !!t.metaKey]
}, vfe = { style: "cursor: crosshair" };
function wfe(t = {}) {
  let [e, n] = bfe[t.key || "Alt"], r = Ae.fromClass(class {
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
    M.contentAttributes.of((i) => {
      var s;
      return !((s = i.plugin(r)) === null || s === void 0) && s.isDown ? vfe : null;
    })
  ];
}
const kl = "-10000px";
class Gw {
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
function xfe(t) {
  let { win: e } = t;
  return { top: 0, left: 0, bottom: e.innerHeight, right: e.innerWidth };
}
const Uh = /* @__PURE__ */ N.define({
  combine: (t) => {
    var e, n, r;
    return {
      position: B.ios ? "absolute" : ((e = t.find((i) => i.position)) === null || e === void 0 ? void 0 : e.position) || "fixed",
      parent: ((n = t.find((i) => i.parent)) === null || n === void 0 ? void 0 : n.parent) || null,
      tooltipSpace: ((r = t.find((i) => i.tooltipSpace)) === null || r === void 0 ? void 0 : r.tooltipSpace) || xfe
    };
  }
}), V0 = /* @__PURE__ */ new WeakMap(), Yw = /* @__PURE__ */ Ae.fromClass(class {
  constructor(t) {
    this.view = t, this.inView = !0, this.lastTransaction = 0, this.measureTimeout = -1;
    let e = t.state.facet(Uh);
    this.position = e.position, this.parent = e.parent, this.classes = t.themeClasses, this.createContainer(), this.measureReq = { read: this.readMeasure.bind(this), write: this.writeMeasure.bind(this), key: this }, this.manager = new Gw(t, jd, (n) => this.createTooltip(n)), this.intersectionObserver = typeof IntersectionObserver == "function" ? new IntersectionObserver((n) => {
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
    let n = e || t.geometryChanged, r = t.state.facet(Uh);
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
    return e.dom.style.position = this.position, e.dom.style.top = kl, this.container.appendChild(e.dom), e.mount && e.mount(this.view), e;
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
      space: this.view.state.facet(Uh).tooltipSpace(this.view)
    };
  }
  writeMeasure(t) {
    var e;
    let { editor: n, space: r } = t, i = [];
    for (let s = 0; s < this.manager.tooltips.length; s++) {
      let o = this.manager.tooltips[s], l = this.manager.tooltipViews[s], { dom: c } = l, a = t.pos[s], h = t.size[s];
      if (!a || a.bottom <= Math.max(n.top, r.top) || a.top >= Math.min(n.bottom, r.bottom) || a.right < Math.max(n.left, r.left) - 0.1 || a.left > Math.min(n.right, r.right) + 0.1) {
        c.style.top = kl;
        continue;
      }
      let u = o.arrow ? l.dom.querySelector(".cm-tooltip-arrow") : null, f = u ? 7 : 0, d = h.right - h.left, p = (e = V0.get(l)) !== null && e !== void 0 ? e : h.bottom - h.top, g = l.offset || _fe, m = this.view.textDirection == Ce.LTR, y = h.width > r.right - r.left ? m ? r.left : r.right - h.width : m ? Math.min(a.left - (u ? 14 : 0) + g.x, r.right - d) : Math.max(r.left, a.left - d + (u ? 14 : 0) - g.x), b = !!o.above;
      !o.strictSide && (b ? a.top - (h.bottom - h.top) - g.y < r.top : a.bottom + (h.bottom - h.top) + g.y > r.bottom) && b == r.bottom - a.bottom > a.top - r.top && (b = !b);
      let k = (b ? a.top - r.top : r.bottom - a.bottom) - f;
      if (k < p && l.resize !== !1) {
        if (k < this.view.defaultLineHeight) {
          c.style.top = kl;
          continue;
        }
        V0.set(l, p), c.style.height = (p = k) + "px";
      } else
        c.style.height && (c.style.height = "");
      let v = b ? a.top - p - f - g.y : a.bottom + f + g.y, x = y + d;
      if (l.overlap !== !0)
        for (let w of i)
          w.left < x && w.right > y && w.top < v + p && w.bottom > v && (v = b ? w.top - p - 2 - f : w.bottom + f + 2);
      this.position == "absolute" ? (c.style.top = v - t.parent.top + "px", c.style.left = y - t.parent.left + "px") : (c.style.top = v + "px", c.style.left = y + "px"), u && (u.style.left = `${a.left + (m ? g.x : -g.x) - (y + 14 - 7)}px`), l.overlap !== !0 && i.push({ left: y, top: v, right: x, bottom: v + p }), c.classList.toggle("cm-tooltip-above", b), c.classList.toggle("cm-tooltip-below", !b), l.positioned && l.positioned(t.space);
    }
  }
  maybeMeasure() {
    if (this.manager.tooltips.length && (this.view.inView && this.view.requestMeasure(this.measureReq), this.inView != this.view.inView && (this.inView = this.view.inView, !this.inView)))
      for (let t of this.manager.tooltipViews)
        t.dom.style.top = kl;
  }
}, {
  eventHandlers: {
    scroll() {
      this.maybeMeasure();
    }
  }
}), kfe = /* @__PURE__ */ M.baseTheme({
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
}), _fe = { x: 0, y: 0 }, jd = /* @__PURE__ */ N.define({
  enables: [Yw, kfe]
}), Lc = /* @__PURE__ */ N.define();
class Gd {
  static create(e) {
    return new Gd(e);
  }
  constructor(e) {
    this.view = e, this.mounted = !1, this.dom = document.createElement("div"), this.dom.classList.add("cm-tooltip-hover"), this.manager = new Gw(e, Lc, (n) => this.createHostedView(n));
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
const Cfe = /* @__PURE__ */ jd.compute([Lc], (t) => {
  let e = t.facet(Lc).filter((n) => n);
  return e.length === 0 ? null : {
    pos: Math.min(...e.map((n) => n.pos)),
    end: Math.max(...e.filter((n) => n.end != null).map((n) => n.end)),
    create: Gd.create,
    above: e[0].above,
    arrow: e.some((n) => n.arrow)
  };
});
class Sfe {
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
    if (r instanceof or)
      i = r.posAtStart;
    else {
      if (i = e.posAtCoords(n), i == null)
        return;
      let l = e.coordsAtPos(i);
      if (!l || n.y < l.top || n.y > l.bottom || n.x < l.left - e.defaultCharacterWidth || n.x > l.right + e.defaultCharacterWidth)
        return;
      let c = e.bidiSpans(e.state.doc.lineAt(i)).find((h) => h.from <= i && h.to >= i), a = c && c.dir == Ce.RTL ? -1 : 1;
      s = n.x < l.left ? -a : a;
    }
    let o = this.source(e, i, s);
    if (o != null && o.then) {
      let l = this.pending = { pos: i };
      o.then((c) => {
        this.pending == l && (this.pending = null, c && e.dispatch({ effects: this.setHover.of(c) }));
      }, (c) => It(e.state, c, "hover tooltip"));
    } else
      o && e.dispatch({ effects: this.setHover.of(o) });
  }
  mousemove(e) {
    var n;
    this.lastMove = { x: e.clientX, y: e.clientY, target: e.target, time: Date.now() }, this.hoverTimeout < 0 && (this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime));
    let r = this.active;
    if (r && !U0(this.lastMove.target) || this.pending) {
      let { pos: i } = r || this.pending, s = (n = r == null ? void 0 : r.end) !== null && n !== void 0 ? n : i;
      (i == s ? this.view.posAtCoords(this.lastMove) != i : !Afe(this.view, i, s, e.clientX, e.clientY, 6)) && (this.view.dispatch({ effects: this.setHover.of(null) }), this.pending = null);
    }
  }
  mouseleave(e) {
    clearTimeout(this.hoverTimeout), this.hoverTimeout = -1, this.active && !U0(e.relatedTarget) && this.view.dispatch({ effects: this.setHover.of(null) });
  }
  destroy() {
    clearTimeout(this.hoverTimeout), this.view.dom.removeEventListener("mouseleave", this.mouseleave), this.view.dom.removeEventListener("mousemove", this.mousemove);
  }
}
function U0(t) {
  for (let e = t; e; e = e.parentNode)
    if (e.nodeType == 1 && e.classList.contains("cm-tooltip"))
      return !0;
  return !1;
}
function Afe(t, e, n, r, i, s) {
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
function Efe(t, e = {}) {
  let n = j.define(), r = Ie.define({
    create() {
      return null;
    },
    update(i, s) {
      if (i && (e.hideOnChange && (s.docChanged || s.selection) || e.hideOn && e.hideOn(s, i)))
        return null;
      if (i && s.docChanged) {
        let o = s.changes.mapPos(i.pos, -1, ht.TrackDel);
        if (o == null)
          return null;
        let l = Object.assign(/* @__PURE__ */ Object.create(null), i);
        l.pos = o, i.end != null && (l.end = s.changes.mapPos(i.end)), i = l;
      }
      for (let o of s.effects)
        o.is(n) && (i = o.value), o.is(Dfe) && (i = null);
      return i;
    },
    provide: (i) => Lc.from(i)
  });
  return [
    r,
    Ae.define((i) => new Sfe(i, t, r, n, e.hoverTime || 300)),
    Cfe
  ];
}
function Kw(t, e) {
  let n = t.plugin(Yw);
  if (!n)
    return null;
  let r = n.manager.tooltips.indexOf(e);
  return r < 0 ? null : n.manager.tooltipViews[r];
}
const Dfe = /* @__PURE__ */ j.define(), W0 = /* @__PURE__ */ N.define({
  combine(t) {
    let e, n;
    for (let r of t)
      e = e || r.topContainer, n = n || r.bottomContainer;
    return { topContainer: e, bottomContainer: n };
  }
});
function ko(t, e) {
  let n = t.plugin(Jw), r = n ? n.specs.indexOf(e) : -1;
  return r > -1 ? n.panels[r] : null;
}
const Jw = /* @__PURE__ */ Ae.fromClass(class {
  constructor(t) {
    this.input = t.state.facet(_o), this.specs = this.input.filter((n) => n), this.panels = this.specs.map((n) => n(t));
    let e = t.state.facet(W0);
    this.top = new _l(t, !0, e.topContainer), this.bottom = new _l(t, !1, e.bottomContainer), this.top.sync(this.panels.filter((n) => n.top)), this.bottom.sync(this.panels.filter((n) => !n.top));
    for (let n of this.panels)
      n.dom.classList.add("cm-panel"), n.mount && n.mount();
  }
  update(t) {
    let e = t.state.facet(W0);
    this.top.container != e.topContainer && (this.top.sync([]), this.top = new _l(t.view, !0, e.topContainer)), this.bottom.container != e.bottomContainer && (this.bottom.sync([]), this.bottom = new _l(t.view, !1, e.bottomContainer)), this.top.syncClasses(), this.bottom.syncClasses();
    let n = t.state.facet(_o);
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
  provide: (t) => M.scrollMargins.of((e) => {
    let n = e.plugin(t);
    return n && { top: n.top.scrollMargin(), bottom: n.bottom.scrollMargin() };
  })
});
class _l {
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
          e = j0(e);
        e = e.nextSibling;
      } else
        this.dom.insertBefore(n.dom, e);
    for (; e; )
      e = j0(e);
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
function j0(t) {
  let e = t.nextSibling;
  return t.remove(), e;
}
const _o = /* @__PURE__ */ N.define({
  enables: Jw
});
class Cn extends ni {
  compare(e) {
    return this == e || this.constructor == e.constructor && this.eq(e);
  }
  eq(e) {
    return !1;
  }
  destroy(e) {
  }
}
Cn.prototype.elementClass = "";
Cn.prototype.toDOM = void 0;
Cn.prototype.mapMode = ht.TrackBefore;
Cn.prototype.startSide = Cn.prototype.endSide = -1;
Cn.prototype.point = !0;
const ic = /* @__PURE__ */ N.define(), Tfe = {
  class: "",
  renderEmptyElements: !1,
  elementStyle: "",
  markers: () => Q.empty,
  lineMarker: () => null,
  widgetMarker: () => null,
  lineMarkerChange: null,
  initialSpacer: null,
  updateSpacer: null,
  domEventHandlers: {}
}, eo = /* @__PURE__ */ N.define();
function Zw(t) {
  return [Xw(), eo.of(Object.assign(Object.assign({}, Tfe), t))];
}
const Sf = /* @__PURE__ */ N.define({
  combine: (t) => t.some((e) => e)
});
function Xw(t) {
  let e = [
    Mfe
  ];
  return t && t.fixed === !1 && e.push(Sf.of(!0)), e;
}
const Mfe = /* @__PURE__ */ Ae.fromClass(class {
  constructor(t) {
    this.view = t, this.prevViewport = t.viewport, this.dom = document.createElement("div"), this.dom.className = "cm-gutters", this.dom.setAttribute("aria-hidden", "true"), this.dom.style.minHeight = this.view.contentHeight + "px", this.gutters = t.state.facet(eo).map((e) => new Y0(t, e));
    for (let e of this.gutters)
      this.dom.appendChild(e.dom);
    this.fixed = !t.state.facet(Sf), this.fixed && (this.dom.style.position = "sticky"), this.syncGutters(!1), t.scrollDOM.insertBefore(this.dom, t.contentDOM);
  }
  update(t) {
    if (this.updateGutters(t)) {
      let e = this.prevViewport, n = t.view.viewport, r = Math.min(e.to, n.to) - Math.max(e.from, n.from);
      this.syncGutters(r < (n.to - n.from) * 0.8);
    }
    t.geometryChanged && (this.dom.style.minHeight = this.view.contentHeight + "px"), this.view.state.facet(Sf) != !this.fixed && (this.fixed = !this.fixed, this.dom.style.position = this.fixed ? "sticky" : ""), this.prevViewport = t.view.viewport;
  }
  syncGutters(t) {
    let e = this.dom.nextSibling;
    t && this.dom.remove();
    let n = Q.iter(this.view.state.facet(ic), this.view.viewport.from), r = [], i = this.gutters.map((s) => new Ofe(s, this.view.viewport, -this.view.documentPadding.top));
    for (let s of this.view.viewportLineBlocks)
      if (r.length && (r = []), Array.isArray(s.type)) {
        let o = !0;
        for (let l of s.type)
          if (l.type == Se.Text && o) {
            Af(n, r, l.from);
            for (let c of i)
              c.line(this.view, l, r);
            o = !1;
          } else if (l.widget)
            for (let c of i)
              c.widget(this.view, l);
      } else if (s.type == Se.Text) {
        Af(n, r, s.from);
        for (let o of i)
          o.line(this.view, s, r);
      }
    for (let s of i)
      s.finish();
    t && this.view.scrollDOM.insertBefore(this.dom, e);
  }
  updateGutters(t) {
    let e = t.startState.facet(eo), n = t.state.facet(eo), r = t.docChanged || t.heightChanged || t.viewportChanged || !Q.eq(t.startState.facet(ic), t.state.facet(ic), t.view.viewport.from, t.view.viewport.to);
    if (e == n)
      for (let i of this.gutters)
        i.update(t) && (r = !0);
    else {
      r = !0;
      let i = [];
      for (let s of n) {
        let o = e.indexOf(s);
        o < 0 ? i.push(new Y0(this.view, s)) : (this.gutters[o].update(t), i.push(this.gutters[o]));
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
  provide: (t) => M.scrollMargins.of((e) => {
    let n = e.plugin(t);
    return !n || n.gutters.length == 0 || !n.fixed ? null : e.textDirection == Ce.LTR ? { left: n.dom.offsetWidth } : { right: n.dom.offsetWidth };
  })
});
function G0(t) {
  return Array.isArray(t) ? t : [t];
}
function Af(t, e, n) {
  for (; t.value && t.from <= n; )
    t.from == n && e.push(t.value), t.next();
}
class Ofe {
  constructor(e, n, r) {
    this.gutter = e, this.height = r, this.i = 0, this.cursor = Q.iter(e.markers, n.from);
  }
  addElement(e, n, r) {
    let { gutter: i } = this, s = n.top - this.height;
    if (this.i == i.elements.length) {
      let o = new Qw(e, n.height, s, r);
      i.elements.push(o), i.dom.appendChild(o.dom);
    } else
      i.elements[this.i].update(e, n.height, s, r);
    this.height = n.bottom, this.i++;
  }
  line(e, n, r) {
    let i = [];
    Af(this.cursor, i, n.from), r.length && (i = i.concat(r));
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
class Y0 {
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
    this.markers = G0(n.markers(e)), n.initialSpacer && (this.spacer = new Qw(e, 0, 0, [n.initialSpacer(e)]), this.dom.appendChild(this.spacer.dom), this.spacer.dom.style.cssText += "visibility: hidden; pointer-events: none");
  }
  update(e) {
    let n = this.markers;
    if (this.markers = G0(this.config.markers(e.view)), this.spacer && this.config.updateSpacer) {
      let i = this.config.updateSpacer(this.spacer.markers[0], e);
      i != this.spacer.markers[0] && this.spacer.update(e.view, 0, 0, [i]);
    }
    let r = e.view.viewport;
    return !Q.eq(this.markers, n, r.from, r.to) || (this.config.lineMarkerChange ? this.config.lineMarkerChange(e) : !1);
  }
  destroy() {
    for (let e of this.elements)
      e.destroy();
  }
}
class Qw {
  constructor(e, n, r, i) {
    this.height = -1, this.above = 0, this.markers = [], this.dom = document.createElement("div"), this.dom.className = "cm-gutterElement", this.update(e, n, r, i);
  }
  update(e, n, r, i) {
    this.height != n && (this.dom.style.height = (this.height = n) + "px"), this.above != r && (this.dom.style.marginTop = (this.above = r) ? r + "px" : ""), Lfe(this.markers, i) || this.setMarkers(e, i);
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
function Lfe(t, e) {
  if (t.length != e.length)
    return !1;
  for (let n = 0; n < t.length; n++)
    if (!t[n].compare(e[n]))
      return !1;
  return !0;
}
const Rfe = /* @__PURE__ */ N.define(), Oi = /* @__PURE__ */ N.define({
  combine(t) {
    return Tn(t, { formatNumber: String, domEventHandlers: {} }, {
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
class Wh extends Cn {
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
function jh(t, e) {
  return t.state.facet(Oi).formatNumber(e, t.state);
}
const Ife = /* @__PURE__ */ eo.compute([Oi], (t) => ({
  class: "cm-lineNumbers",
  renderEmptyElements: !1,
  markers(e) {
    return e.state.facet(Rfe);
  },
  lineMarker(e, n, r) {
    return r.some((i) => i.toDOM) ? null : new Wh(jh(e, e.state.doc.lineAt(n.from).number));
  },
  widgetMarker: () => null,
  lineMarkerChange: (e) => e.startState.facet(Oi) != e.state.facet(Oi),
  initialSpacer(e) {
    return new Wh(jh(e, K0(e.state.doc.lines)));
  },
  updateSpacer(e, n) {
    let r = jh(n.view, K0(n.view.state.doc.lines));
    return r == e.number ? e : new Wh(r);
  },
  domEventHandlers: t.facet(Oi).domEventHandlers
}));
function Nfe(t = {}) {
  return [
    Oi.of(t),
    Xw(),
    Ife
  ];
}
function K0(t) {
  let e = 9;
  for (; e < t; )
    e = e * 10 + 9;
  return e;
}
const Bfe = /* @__PURE__ */ new class extends Cn {
  constructor() {
    super(...arguments), this.elementClass = "cm-activeLineGutter";
  }
}(), Pfe = /* @__PURE__ */ ic.compute(["selection"], (t) => {
  let e = [], n = -1;
  for (let r of t.selection.ranges) {
    let i = t.doc.lineAt(r.head).from;
    i > n && (n = i, e.push(Bfe.range(i)));
  }
  return Q.of(e);
});
function Ffe() {
  return Pfe;
}
const $fe = 1024;
let qfe = 0;
class Gh {
  constructor(e, n) {
    this.from = e, this.to = n;
  }
}
class X {
  constructor(e = {}) {
    this.id = qfe++, this.perNode = !!e.perNode, this.deserialize = e.deserialize || (() => {
      throw new Error("This node type doesn't define a deserialize function");
    });
  }
  add(e) {
    if (this.perNode)
      throw new RangeError("Can't add per-node props to node types");
    return typeof e != "function" && (e = qt.match(e)), (n) => {
      let r = e(n);
      return r === void 0 ? null : [this, r];
    };
  }
}
X.closedBy = new X({ deserialize: (t) => t.split(" ") });
X.openedBy = new X({ deserialize: (t) => t.split(" ") });
X.group = new X({ deserialize: (t) => t.split(" ") });
X.contextHash = new X({ perNode: !0 });
X.lookAhead = new X({ perNode: !0 });
X.mounted = new X({ perNode: !0 });
const Hfe = /* @__PURE__ */ Object.create(null);
class qt {
  constructor(e, n, r, i = 0) {
    this.name = e, this.props = n, this.id = r, this.flags = i;
  }
  static define(e) {
    let n = e.props && e.props.length ? /* @__PURE__ */ Object.create(null) : Hfe, r = (e.top ? 1 : 0) | (e.skipped ? 2 : 0) | (e.error ? 4 : 0) | (e.name == null ? 8 : 0), i = new qt(e.name || "", n, e.id, r);
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
      let n = this.prop(X.group);
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
      for (let i = r.prop(X.group), s = -1; s < (i ? i.length : 0); s++) {
        let o = n[s < 0 ? r.name : i[s]];
        if (o)
          return o;
      }
    };
  }
}
qt.none = new qt("", /* @__PURE__ */ Object.create(null), 0, 8);
const Cl = /* @__PURE__ */ new WeakMap(), J0 = /* @__PURE__ */ new WeakMap();
var Ge;
(function(t) {
  t[t.ExcludeBuffers = 1] = "ExcludeBuffers", t[t.IncludeAnonymous = 2] = "IncludeAnonymous", t[t.IgnoreMounts = 4] = "IgnoreMounts", t[t.IgnoreOverlays = 8] = "IgnoreOverlays";
})(Ge || (Ge = {}));
class nt {
  constructor(e, n, r, i, s) {
    if (this.type = e, this.children = n, this.positions = r, this.length = i, this.props = null, s && s.length) {
      this.props = /* @__PURE__ */ Object.create(null);
      for (let [o, l] of s)
        this.props[typeof o == "number" ? o : o.id] = l;
    }
  }
  toString() {
    let e = this.prop(X.mounted);
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
    return new Nc(this.topNode, e);
  }
  cursorAt(e, n = 0, r = 0) {
    let i = Cl.get(this) || this.topNode, s = new Nc(i);
    return s.moveTo(e, n), Cl.set(this, s._tree), s;
  }
  get topNode() {
    return new qn(this, 0, 0, null);
  }
  resolve(e, n = 0) {
    let r = ns(Cl.get(this) || this.topNode, e, n, !1);
    return Cl.set(this, r), r;
  }
  resolveInner(e, n = 0) {
    let r = ns(J0.get(this) || this.topNode, e, n, !0);
    return J0.set(this, r), r;
  }
  iterate(e) {
    let { enter: n, leave: r, from: i = 0, to: s = this.length } = e, o = e.mode || 0, l = (o & Ge.IncludeAnonymous) > 0;
    for (let c = this.cursor(o | Ge.IncludeAnonymous); ; ) {
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
    return this.children.length <= 8 ? this : Jd(qt.none, this.children, this.positions, 0, this.children.length, 0, this.length, (n, r, i) => new nt(this.type, n, r, i, this.propValues), e.makeTree || ((n, r, i) => new nt(qt.none, n, r, i)));
  }
  static build(e) {
    return Vfe(e);
  }
}
nt.empty = new nt(qt.none, [], [], 0);
class Yd {
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
    return new Yd(this.buffer, this.index);
  }
}
class ui {
  constructor(e, n, r) {
    this.buffer = e, this.length = n, this.set = r;
  }
  get type() {
    return qt.none;
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
    for (let c = e; c != n && !(ex(s, i, o[c + 1], o[c + 2]) && (l = c, r > 0)); c = o[c + 3])
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
    return new ui(s, o, this.set);
  }
}
function ex(t, e, n, r) {
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
function tx(t, e) {
  let n = t.childBefore(e);
  for (; n; ) {
    let r = n.lastChild;
    if (!r || r.to != n.to)
      break;
    r.type.isError && r.from == r.to ? (t = n, n = r.prevSibling) : n = r;
  }
  return t;
}
function ns(t, e, n, r) {
  for (var i; t.from == t.to || (n < 1 ? t.from >= e : t.from > e) || (n > -1 ? t.to <= e : t.to < e); ) {
    let o = !r && t instanceof qn && t.index < 0 ? null : t.parent;
    if (!o)
      return t;
    t = o;
  }
  let s = r ? 0 : Ge.IgnoreOverlays;
  if (r)
    for (let o = t, l = o.parent; l; o = l, l = o.parent)
      o instanceof qn && o.index < 0 && ((i = l.enter(e, n, s)) === null || i === void 0 ? void 0 : i.from) != o.from && (t = l);
  for (; ; ) {
    let o = t.enter(e, n, s);
    if (!o)
      return t;
    t = o;
  }
}
class qn {
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
        if (!!ex(i, r, u, u + h.length)) {
          if (h instanceof ui) {
            if (s & Ge.ExcludeBuffers)
              continue;
            let f = h.findChild(0, h.buffer.length, n, r - u, i);
            if (f > -1)
              return new cr(new zfe(o, h, e, u), null, f);
          } else if (s & Ge.IncludeAnonymous || !h.type.isAnonymous || Kd(h)) {
            let f;
            if (!(s & Ge.IgnoreMounts) && h.props && (f = h.prop(X.mounted)) && !f.overlay)
              return new qn(f.tree, u, e, o);
            let d = new qn(h, u, e, o);
            return s & Ge.IncludeAnonymous || !d.type.isAnonymous ? d : d.nextChild(n < 0 ? h.children.length - 1 : 0, n, r, i);
          }
        }
      }
      if (s & Ge.IncludeAnonymous || !o.type.isAnonymous || (o.index >= 0 ? e = o.index + n : e = n < 0 ? -1 : o._parent._tree.children.length, o = o._parent, !o))
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
    if (!(r & Ge.IgnoreOverlays) && (i = this._tree.prop(X.mounted)) && i.overlay) {
      let s = e - this.from;
      for (let { from: o, to: l } of i.overlay)
        if ((n > 0 ? o <= s : o < s) && (n < 0 ? l >= s : l > s))
          return new qn(i.tree, i.overlay[0].from + this.from, -1, this);
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
    return new Nc(this, e);
  }
  get tree() {
    return this._tree;
  }
  toTree() {
    return this._tree;
  }
  resolve(e, n = 0) {
    return ns(this, e, n, !1);
  }
  resolveInner(e, n = 0) {
    return ns(this, e, n, !0);
  }
  enterUnfinishedNodesBefore(e) {
    return tx(this, e);
  }
  getChild(e, n = null, r = null) {
    let i = Rc(this, e, n, r);
    return i.length ? i[0] : null;
  }
  getChildren(e, n = null, r = null) {
    return Rc(this, e, n, r);
  }
  toString() {
    return this._tree.toString();
  }
  get node() {
    return this;
  }
  matchContext(e) {
    return Ic(this, e);
  }
}
function Rc(t, e, n, r) {
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
function Ic(t, e, n = e.length - 1) {
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
class zfe {
  constructor(e, n, r, i) {
    this.parent = e, this.buffer = n, this.index = r, this.start = i;
  }
}
class cr {
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
    return s < 0 ? null : new cr(this.context, this, s);
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
    if (r & Ge.ExcludeBuffers)
      return null;
    let { buffer: i } = this.context, s = i.findChild(this.index + 4, i.buffer[this.index + 3], n > 0 ? 1 : -1, e - this.context.start, n);
    return s < 0 ? null : new cr(this.context, this, s);
  }
  get parent() {
    return this._parent || this.context.parent.nextSignificantParent();
  }
  externalSibling(e) {
    return this._parent ? null : this.context.parent.nextChild(this.context.index + e, e, 0, 4);
  }
  get nextSibling() {
    let { buffer: e } = this.context, n = e.buffer[this.index + 3];
    return n < (this._parent ? e.buffer[this._parent.index + 3] : e.buffer.length) ? new cr(this.context, this._parent, n) : this.externalSibling(1);
  }
  get prevSibling() {
    let { buffer: e } = this.context, n = this._parent ? this._parent.index + 4 : 0;
    return this.index == n ? this.externalSibling(-1) : new cr(this.context, this._parent, e.findChild(n, this.index, -1, 0, 4));
  }
  cursor(e = 0) {
    return new Nc(this, e);
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
    return new nt(this.type, e, n, this.to - this.from);
  }
  resolve(e, n = 0) {
    return ns(this, e, n, !1);
  }
  resolveInner(e, n = 0) {
    return ns(this, e, n, !0);
  }
  enterUnfinishedNodesBefore(e) {
    return tx(this, e);
  }
  toString() {
    return this.context.buffer.childString(this.index);
  }
  getChild(e, n = null, r = null) {
    let i = Rc(this, e, n, r);
    return i.length ? i[0] : null;
  }
  getChildren(e, n = null, r = null) {
    return Rc(this, e, n, r);
  }
  get node() {
    return this;
  }
  matchContext(e) {
    return Ic(this, e);
  }
}
class Nc {
  get name() {
    return this.type.name;
  }
  constructor(e, n = 0) {
    if (this.mode = n, this.buffer = null, this.stack = [], this.index = 0, this.bufferNode = null, e instanceof qn)
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
    return e ? e instanceof qn ? (this.buffer = null, this.yieldNode(e)) : (this.buffer = e.context, this.yieldBuf(e.index, e.type)) : !1;
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
    return this.buffer ? r & Ge.ExcludeBuffers ? !1 : this.enterChild(1, e, n) : this.yield(this._tree.enter(e, n, r));
  }
  parent() {
    if (!this.buffer)
      return this.yieldNode(this.mode & Ge.IncludeAnonymous ? this._tree._parent : this._tree.parent);
    if (this.stack.length)
      return this.yieldBuf(this.stack.pop());
    let e = this.mode & Ge.IncludeAnonymous ? this.buffer.parent : this.buffer.parent.nextSignificantParent();
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
          if (this.mode & Ge.IncludeAnonymous || l instanceof ui || !l.type.isAnonymous || Kd(l))
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
      n = new cr(this.buffer, n, this.stack[i]);
    return this.bufferNode = new cr(this.buffer, n, this.index);
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
      return Ic(this.node, e);
    let { buffer: n } = this.buffer, { types: r } = n.set;
    for (let i = e.length - 1, s = this.stack.length - 1; i >= 0; s--) {
      if (s < 0)
        return Ic(this.node, e, i);
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
function Kd(t) {
  return t.children.some((e) => e instanceof ui || !e.type.isAnonymous || Kd(e));
}
function Vfe(t) {
  var e;
  let { buffer: n, nodeSet: r, maxBufferLength: i = $fe, reused: s = [], minRepeatType: o = r.types.length } = t, l = Array.isArray(n) ? new Yd(n, n.length) : n, c = r.types, a = 0, h = 0;
  function u(v, x, w, C, I) {
    let { id: O, start: D, end: V, size: re } = l, J = h;
    for (; re < 0; )
      if (l.next(), re == -1) {
        let le = s[O];
        w.push(le), C.push(D - v);
        return;
      } else if (re == -3) {
        a = O;
        return;
      } else if (re == -4) {
        h = O;
        return;
      } else
        throw new RangeError(`Unrecognized record size: ${re}`);
    let A = c[O], U, H, ye = D - v;
    if (V - D <= i && (H = g(l.pos - x, I))) {
      let le = new Uint16Array(H.size - H.skip), se = l.pos - H.size, ce = le.length;
      for (; l.pos > se; )
        ce = m(H.start, le, ce);
      U = new ui(le, V - H.start, r), ye = H.start - v;
    } else {
      let le = l.pos - re;
      l.next();
      let se = [], ce = [], xe = O >= o ? O : -1, oe = 0, zt = V;
      for (; l.pos > le; )
        xe >= 0 && l.id == xe && l.size >= 0 ? (l.end <= zt - i && (d(se, ce, D, oe, l.end, zt, xe, J), oe = se.length, zt = l.end), l.next()) : u(D, le, se, ce, xe);
      if (xe >= 0 && oe > 0 && oe < se.length && d(se, ce, D, oe, D, zt, xe, J), se.reverse(), ce.reverse(), xe > -1 && oe > 0) {
        let fe = f(A);
        U = Jd(A, se, ce, 0, se.length, 0, V - D, fe, fe);
      } else
        U = p(A, se, ce, V - D, J - V);
    }
    w.push(U), C.push(ye);
  }
  function f(v) {
    return (x, w, C) => {
      let I = 0, O = x.length - 1, D, V;
      if (O >= 0 && (D = x[O]) instanceof nt) {
        if (!O && D.type == v && D.length == C)
          return D;
        (V = D.prop(X.lookAhead)) && (I = w[O] + D.length + V);
      }
      return p(v, x, w, C, I);
    };
  }
  function d(v, x, w, C, I, O, D, V) {
    let re = [], J = [];
    for (; v.length > C; )
      re.push(v.pop()), J.push(x.pop() + w - I);
    v.push(p(r.types[D], re, J, O - I, V - O)), x.push(I - w);
  }
  function p(v, x, w, C, I = 0, O) {
    if (a) {
      let D = [X.contextHash, a];
      O = O ? [D].concat(O) : [D];
    }
    if (I > 25) {
      let D = [X.lookAhead, I];
      O = O ? [D].concat(O) : [D];
    }
    return new nt(v, x, w, C, O);
  }
  function g(v, x) {
    let w = l.fork(), C = 0, I = 0, O = 0, D = w.end - i, V = { size: 0, start: 0, skip: 0 };
    e:
      for (let re = w.pos - v; w.pos > re; ) {
        let J = w.size;
        if (w.id == x && J >= 0) {
          V.size = C, V.start = I, V.skip = O, O += 4, C += 4, w.next();
          continue;
        }
        let A = w.pos - J;
        if (J < 0 || A < re || w.start < D)
          break;
        let U = w.id >= o ? 4 : 0, H = w.start;
        for (w.next(); w.pos > A; ) {
          if (w.size < 0)
            if (w.size == -3)
              U += 4;
            else
              break e;
          else
            w.id >= o && (U += 4);
          w.next();
        }
        I = H, C += J, O += U;
      }
    return (x < 0 || C == v) && (V.size = C, V.start = I, V.skip = O), V.size > 4 ? V : void 0;
  }
  function m(v, x, w) {
    let { id: C, start: I, end: O, size: D } = l;
    if (l.next(), D >= 0 && C < o) {
      let V = w;
      if (D > 4) {
        let re = l.pos - (D - 4);
        for (; l.pos > re; )
          w = m(v, x, w);
      }
      x[--w] = V, x[--w] = O - v, x[--w] = I - v, x[--w] = C;
    } else
      D == -3 ? a = C : D == -4 && (h = C);
    return w;
  }
  let y = [], b = [];
  for (; l.pos > 0; )
    u(t.start || 0, t.bufferStart || 0, y, b, -1);
  let k = (e = t.length) !== null && e !== void 0 ? e : y.length ? b[0] + y[0].length : 0;
  return new nt(c[t.topID], y.reverse(), b.reverse(), k);
}
const Z0 = /* @__PURE__ */ new WeakMap();
function sc(t, e) {
  if (!t.isAnonymous || e instanceof ui || e.type != t)
    return 1;
  let n = Z0.get(e);
  if (n == null) {
    n = 1;
    for (let r of e.children) {
      if (r.type != t || !(r instanceof nt)) {
        n = 1;
        break;
      }
      n += sc(t, r);
    }
    Z0.set(e, n);
  }
  return n;
}
function Jd(t, e, n, r, i, s, o, l, c) {
  let a = 0;
  for (let p = r; p < i; p++)
    a += sc(t, e[p]);
  let h = Math.ceil(a * 1.5 / 8), u = [], f = [];
  function d(p, g, m, y, b) {
    for (let k = m; k < y; ) {
      let v = k, x = g[k], w = sc(t, p[k]);
      for (k++; k < y; k++) {
        let C = sc(t, p[k]);
        if (w + C >= h)
          break;
        w += C;
      }
      if (k == v + 1) {
        if (w > h) {
          let C = p[v];
          d(C.children, C.positions, 0, C.children.length, g[v] + b);
          continue;
        }
        u.push(p[v]);
      } else {
        let C = g[k - 1] + p[k - 1].length - x;
        u.push(Jd(t, p, g, v, k, x, C, null, c));
      }
      f.push(x + b - s);
    }
  }
  return d(e, n, r, i, 0), (l || c)(u, f, o);
}
class Gr {
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
    let i = [new Gr(0, e.length, e, 0, !1, r)];
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
            f = d >= p ? null : new Gr(d, p, f.tree, f.offset + a, l > 0, !!h);
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
class Ufe {
  startParse(e, n, r) {
    return typeof e == "string" && (e = new Wfe(e)), r = r ? r.length ? r.map((i) => new Gh(i.from, i.to)) : [new Gh(0, 0)] : [new Gh(0, e.length)], this.createParse(e, n || [], r);
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
class Wfe {
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
new X({ perNode: !0 });
let jfe = 0;
class hn {
  constructor(e, n, r) {
    this.set = e, this.base = n, this.modified = r, this.id = jfe++;
  }
  static define(e) {
    if (e != null && e.base)
      throw new Error("Can not derive from a modified tag");
    let n = new hn([], null, []);
    if (n.set.push(n), e)
      for (let r of e.set)
        n.set.push(r);
    return n;
  }
  static defineModifier() {
    let e = new Bc();
    return (n) => n.modified.indexOf(e) > -1 ? n : Bc.get(n.base || n, n.modified.concat(e).sort((r, i) => r.id - i.id));
  }
}
let Gfe = 0;
class Bc {
  constructor() {
    this.instances = [], this.id = Gfe++;
  }
  static get(e, n) {
    if (!n.length)
      return e;
    let r = n[0].instances.find((l) => l.base == e && Yfe(n, l.modified));
    if (r)
      return r;
    let i = [], s = new hn(i, e, n);
    for (let l of n)
      l.instances.push(s);
    let o = Kfe(n);
    for (let l of e.set)
      if (!l.modified.length)
        for (let c of o)
          i.push(Bc.get(l, c));
    return s;
  }
}
function Yfe(t, e) {
  return t.length == e.length && t.every((n, r) => n == e[r]);
}
function Kfe(t) {
  let e = [[]];
  for (let n = 0; n < t.length; n++)
    for (let r = 0, i = e.length; r < i; r++)
      e.push(e[r].concat(t[n]));
  return e.sort((n, r) => r.length - n.length);
}
function Jfe(t) {
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
        let h = new Pc(r, o, c > 0 ? s.slice(0, c) : null);
        e[a] = h.sort(e[a]);
      }
  }
  return nx.add(e);
}
const nx = new X();
class Pc {
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
Pc.empty = new Pc([], 2, null);
function rx(t, e) {
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
function Zfe(t, e) {
  let n = null;
  for (let r of t) {
    let i = r.style(e);
    i && (n = n ? n + " " + i : i);
  }
  return n;
}
function Xfe(t, e, n, r = 0, i = t.length) {
  let s = new Qfe(r, Array.isArray(e) ? e : [e], n);
  s.highlightRange(t.cursor(), r, i, "", s.highlighters), s.flush(i);
}
class Qfe {
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
    let a = i, h = ede(e) || Pc.empty, u = Zfe(s, h.tags);
    if (u && (a && (a += " "), a += u, h.mode == 1 && (i += (i ? " " : "") + u)), this.startSpan(Math.max(n, l), a), h.opaque)
      return;
    let f = e.tree && e.tree.prop(X.mounted);
    if (f && f.overlay) {
      let d = e.node.enter(f.overlay[0].from + l, 1), p = this.highlighters.filter((m) => !m.scope || m.scope(f.tree.type)), g = e.firstChild();
      for (let m = 0, y = l; ; m++) {
        let b = m < f.overlay.length ? f.overlay[m] : null, k = b ? b.from + l : c, v = Math.max(n, y), x = Math.min(r, k);
        if (v < x && g)
          for (; e.from < x && (this.highlightRange(e, v, x, i, s), this.startSpan(Math.min(x, e.to), a), !(e.to >= k || !e.nextSibling())); )
            ;
        if (!b || k > r)
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
function ede(t) {
  let e = t.type.prop(nx);
  for (; e && e.context && !t.matchContext(e.context); )
    e = e.next;
  return e || null;
}
const T = hn.define, Sl = T(), Qn = T(), X0 = T(Qn), Q0 = T(Qn), er = T(), Al = T(er), Yh = T(er), cn = T(), Rr = T(cn), sn = T(), on = T(), Ef = T(), Is = T(Ef), El = T(), R = {
  comment: Sl,
  lineComment: T(Sl),
  blockComment: T(Sl),
  docComment: T(Sl),
  name: Qn,
  variableName: T(Qn),
  typeName: X0,
  tagName: T(X0),
  propertyName: Q0,
  attributeName: T(Q0),
  className: T(Qn),
  labelName: T(Qn),
  namespace: T(Qn),
  macroName: T(Qn),
  literal: er,
  string: Al,
  docString: T(Al),
  character: T(Al),
  attributeValue: T(Al),
  number: Yh,
  integer: T(Yh),
  float: T(Yh),
  bool: T(er),
  regexp: T(er),
  escape: T(er),
  color: T(er),
  url: T(er),
  keyword: sn,
  self: T(sn),
  null: T(sn),
  atom: T(sn),
  unit: T(sn),
  modifier: T(sn),
  operatorKeyword: T(sn),
  controlKeyword: T(sn),
  definitionKeyword: T(sn),
  moduleKeyword: T(sn),
  operator: on,
  derefOperator: T(on),
  arithmeticOperator: T(on),
  logicOperator: T(on),
  bitwiseOperator: T(on),
  compareOperator: T(on),
  updateOperator: T(on),
  definitionOperator: T(on),
  typeOperator: T(on),
  controlOperator: T(on),
  punctuation: Ef,
  separator: T(Ef),
  bracket: Is,
  angleBracket: T(Is),
  squareBracket: T(Is),
  paren: T(Is),
  brace: T(Is),
  content: cn,
  heading: Rr,
  heading1: T(Rr),
  heading2: T(Rr),
  heading3: T(Rr),
  heading4: T(Rr),
  heading5: T(Rr),
  heading6: T(Rr),
  contentSeparator: T(cn),
  list: T(cn),
  quote: T(cn),
  emphasis: T(cn),
  strong: T(cn),
  link: T(cn),
  monospace: T(cn),
  strikethrough: T(cn),
  inserted: T(),
  deleted: T(),
  changed: T(),
  invalid: T(),
  meta: El,
  documentMeta: T(El),
  annotation: T(El),
  processingInstruction: T(El),
  definition: hn.defineModifier(),
  constant: hn.defineModifier(),
  function: hn.defineModifier(),
  standard: hn.defineModifier(),
  local: hn.defineModifier(),
  special: hn.defineModifier()
};
rx([
  { tag: R.link, class: "tok-link" },
  { tag: R.heading, class: "tok-heading" },
  { tag: R.emphasis, class: "tok-emphasis" },
  { tag: R.strong, class: "tok-strong" },
  { tag: R.keyword, class: "tok-keyword" },
  { tag: R.atom, class: "tok-atom" },
  { tag: R.bool, class: "tok-bool" },
  { tag: R.url, class: "tok-url" },
  { tag: R.labelName, class: "tok-labelName" },
  { tag: R.inserted, class: "tok-inserted" },
  { tag: R.deleted, class: "tok-deleted" },
  { tag: R.literal, class: "tok-literal" },
  { tag: R.string, class: "tok-string" },
  { tag: R.number, class: "tok-number" },
  { tag: [R.regexp, R.escape, R.special(R.string)], class: "tok-string2" },
  { tag: R.variableName, class: "tok-variableName" },
  { tag: R.local(R.variableName), class: "tok-variableName tok-local" },
  { tag: R.definition(R.variableName), class: "tok-variableName tok-definition" },
  { tag: R.special(R.variableName), class: "tok-variableName2" },
  { tag: R.definition(R.propertyName), class: "tok-propertyName tok-definition" },
  { tag: R.typeName, class: "tok-typeName" },
  { tag: R.namespace, class: "tok-namespace" },
  { tag: R.className, class: "tok-className" },
  { tag: R.macroName, class: "tok-macroName" },
  { tag: R.propertyName, class: "tok-propertyName" },
  { tag: R.operator, class: "tok-operator" },
  { tag: R.comment, class: "tok-comment" },
  { tag: R.meta, class: "tok-meta" },
  { tag: R.invalid, class: "tok-invalid" },
  { tag: R.punctuation, class: "tok-punctuation" }
]);
var Kh;
const Ws = /* @__PURE__ */ new X(), tde = /* @__PURE__ */ new X();
class mn {
  constructor(e, n, r = [], i = "") {
    this.data = e, this.name = i, Z.prototype.hasOwnProperty("tree") || Object.defineProperty(Z.prototype, "tree", { get() {
      return rt(this);
    } }), this.parser = n, this.extension = [
      wr.of(this),
      Z.languageData.of((s, o, l) => {
        let c = e1(s, o, l), a = c.type.prop(Ws);
        if (!a)
          return [];
        let h = s.facet(a), u = c.type.prop(tde);
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
    return e1(e, n, r).type.prop(Ws) == this.data;
  }
  findRegions(e) {
    let n = e.facet(wr);
    if ((n == null ? void 0 : n.data) == this.data)
      return [{ from: 0, to: e.doc.length }];
    if (!n || !n.allowsNesting)
      return [];
    let r = [], i = (s, o) => {
      if (s.prop(Ws) == this.data) {
        r.push({ from: o, to: o + s.length });
        return;
      }
      let l = s.prop(X.mounted);
      if (l) {
        if (l.tree.prop(Ws) == this.data) {
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
        a instanceof nt && i(a, s.positions[c] + o);
      }
    };
    return i(rt(e), 0), r;
  }
  get allowsNesting() {
    return !0;
  }
}
mn.setState = /* @__PURE__ */ j.define();
function e1(t, e, n) {
  let r = t.facet(wr), i = rt(t).topNode;
  if (!r || r.allowsNesting)
    for (let s = i; s; s = s.enter(e, n, Ge.ExcludeBuffers))
      s.type.isTop && (i = s);
  return i;
}
function rt(t) {
  let e = t.field(mn.state, !1);
  return e ? e.tree : nt.empty;
}
class nde {
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
let Ns = null;
class Fc {
  constructor(e, n, r = [], i, s, o, l, c) {
    this.parser = e, this.state = n, this.fragments = r, this.tree = i, this.treeLen = s, this.viewport = o, this.skipped = l, this.scheduleOn = c, this.parse = null, this.tempSkipped = [];
  }
  static create(e, n, r) {
    return new Fc(e, n, [], nt.empty, 0, r, [], null);
  }
  startParse() {
    return this.parser.startParse(new nde(this.state.doc), this.fragments);
  }
  work(e, n) {
    return n != null && n >= this.state.doc.length && (n = void 0), this.tree != nt.empty && this.isDone(n != null ? n : this.state.doc.length) ? (this.takeTree(), !0) : this.withContext(() => {
      var r;
      if (typeof e == "number") {
        let i = Date.now() + e;
        e = () => Date.now() > i;
      }
      for (this.parse || (this.parse = this.startParse()), n != null && (this.parse.stoppedAt == null || this.parse.stoppedAt > n) && n < this.state.doc.length && this.parse.stopAt(n); ; ) {
        let i = this.parse.advance();
        if (i)
          if (this.fragments = this.withoutTempSkipped(Gr.addTree(i, this.fragments, this.parse.stoppedAt != null)), this.treeLen = (r = this.parse.stoppedAt) !== null && r !== void 0 ? r : this.state.doc.length, this.tree = i, this.parse = null, this.treeLen < (n != null ? n : this.state.doc.length))
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
    }), this.treeLen = e, this.tree = n, this.fragments = this.withoutTempSkipped(Gr.addTree(this.tree, this.fragments, !0)), this.parse = null);
  }
  withContext(e) {
    let n = Ns;
    Ns = this;
    try {
      return e();
    } finally {
      Ns = n;
    }
  }
  withoutTempSkipped(e) {
    for (let n; n = this.tempSkipped.pop(); )
      e = t1(e, n.from, n.to);
    return e;
  }
  changes(e, n) {
    let { fragments: r, tree: i, treeLen: s, viewport: o, skipped: l } = this;
    if (this.takeTree(), !e.empty) {
      let c = [];
      if (e.iterChangedRanges((a, h, u, f) => c.push({ fromA: a, toA: h, fromB: u, toB: f })), r = Gr.applyChanges(r, c), i = nt.empty, s = 0, o = { from: e.mapPos(o.from, -1), to: e.mapPos(o.to, 1) }, this.skipped.length) {
        l = [];
        for (let a of this.skipped) {
          let h = e.mapPos(a.from, 1), u = e.mapPos(a.to, -1);
          h < u && l.push({ from: h, to: u });
        }
      }
    }
    return new Fc(this.parser, n, r, i, s, o, l, this.scheduleOn);
  }
  updateViewport(e) {
    if (this.viewport.from == e.from && this.viewport.to == e.to)
      return !1;
    this.viewport = e;
    let n = this.skipped.length;
    for (let r = 0; r < this.skipped.length; r++) {
      let { from: i, to: s } = this.skipped[r];
      i < e.to && s > e.from && (this.fragments = t1(this.fragments, i, s), this.skipped.splice(r--, 1));
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
    return new class extends Ufe {
      createParse(n, r, i) {
        let s = i[0].from, o = i[i.length - 1].to;
        return {
          parsedPos: s,
          advance() {
            let c = Ns;
            if (c) {
              for (let a of i)
                c.tempSkipped.push(a);
              e && (c.scheduleOn = c.scheduleOn ? Promise.all([c.scheduleOn, e]) : e);
            }
            return this.parsedPos = o, new nt(qt.none, [], [], o - s);
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
    return Ns;
  }
}
function t1(t, e, n) {
  return Gr.applyChanges(t, [{ fromA: e, toA: n, fromB: e, toB: n }]);
}
class rs {
  constructor(e) {
    this.context = e, this.tree = e.tree;
  }
  apply(e) {
    if (!e.docChanged && this.tree == this.context.tree)
      return this;
    let n = this.context.changes(e.changes, e.state), r = this.context.treeLen == e.startState.doc.length ? void 0 : Math.max(e.changes.mapPos(this.context.treeLen), n.viewport.to);
    return n.work(20, r) || n.takeTree(), new rs(n);
  }
  static init(e) {
    let n = Math.min(3e3, e.doc.length), r = Fc.create(e.facet(wr).parser, e, { from: 0, to: n });
    return r.work(20, n) || r.takeTree(), new rs(r);
  }
}
mn.state = /* @__PURE__ */ Ie.define({
  create: rs.init,
  update(t, e) {
    for (let n of e.effects)
      if (n.is(mn.setState))
        return n.value;
    return e.startState.facet(wr) != e.state.facet(wr) ? rs.init(e.state) : t.apply(e);
  }
});
let ix = (t) => {
  let e = setTimeout(() => t(), 500);
  return () => clearTimeout(e);
};
typeof requestIdleCallback < "u" && (ix = (t) => {
  let e = -1, n = setTimeout(() => {
    e = requestIdleCallback(t, { timeout: 500 - 100 });
  }, 100);
  return () => e < 0 ? clearTimeout(n) : cancelIdleCallback(e);
});
const Jh = typeof navigator < "u" && ((Kh = navigator.scheduling) === null || Kh === void 0 ? void 0 : Kh.isInputPending) ? () => navigator.scheduling.isInputPending() : null, rde = /* @__PURE__ */ Ae.fromClass(class {
  constructor(e) {
    this.view = e, this.working = null, this.workScheduled = 0, this.chunkEnd = -1, this.chunkBudget = -1, this.work = this.work.bind(this), this.scheduleWork();
  }
  update(e) {
    let n = this.view.state.field(mn.state).context;
    (n.updateViewport(e.view.viewport) || this.view.viewport.to > n.treeLen) && this.scheduleWork(), e.docChanged && (this.view.hasFocus && (this.chunkBudget += 50), this.scheduleWork()), this.checkAsyncSchedule(n);
  }
  scheduleWork() {
    if (this.working)
      return;
    let { state: e } = this.view, n = e.field(mn.state);
    (n.tree != n.context.tree || !n.context.isDone(e.doc.length)) && (this.working = ix(this.work));
  }
  work(e) {
    this.working = null;
    let n = Date.now();
    if (this.chunkEnd < n && (this.chunkEnd < 0 || this.view.hasFocus) && (this.chunkEnd = n + 3e4, this.chunkBudget = 3e3), this.chunkBudget <= 0)
      return;
    let { state: r, viewport: { to: i } } = this.view, s = r.field(mn.state);
    if (s.tree == s.context.tree && s.context.isDone(i + 1e5))
      return;
    let o = Date.now() + Math.min(this.chunkBudget, 100, e && !Jh ? Math.max(25, e.timeRemaining() - 5) : 1e9), l = s.context.treeLen < i && r.doc.length > i + 1e3, c = s.context.work(() => Jh && Jh() || Date.now() > o, i + (l ? 0 : 1e5));
    this.chunkBudget -= Date.now() - n, (c || this.chunkBudget <= 0) && (s.context.takeTree(), this.view.dispatch({ effects: mn.setState.of(new rs(s.context)) })), this.chunkBudget > 0 && !(c && !l) && this.scheduleWork(), this.checkAsyncSchedule(s.context);
  }
  checkAsyncSchedule(e) {
    e.scheduleOn && (this.workScheduled++, e.scheduleOn.then(() => this.scheduleWork()).catch((n) => It(this.view.state, n)).then(() => this.workScheduled--), e.scheduleOn = null);
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
}), wr = /* @__PURE__ */ N.define({
  combine(t) {
    return t.length ? t[0] : null;
  },
  enables: (t) => [
    mn.state,
    rde,
    M.contentAttributes.compute([t], (e) => {
      let n = e.facet(t);
      return n && n.name ? { "data-language": n.name } : {};
    })
  ]
}), ide = /* @__PURE__ */ N.define(), Zd = /* @__PURE__ */ N.define({
  combine: (t) => {
    if (!t.length)
      return "  ";
    let e = t[0];
    if (!e || /\S/.test(e) || Array.from(e).some((n) => n != e[0]))
      throw new Error("Invalid indent unit: " + JSON.stringify(t[0]));
    return e;
  }
});
function $c(t) {
  let e = t.facet(Zd);
  return e.charCodeAt(0) == 9 ? t.tabSize * e.length : e.length;
}
function Co(t, e) {
  let n = "", r = t.tabSize, i = t.facet(Zd)[0];
  if (i == "	") {
    for (; e >= r; )
      n += "	", e -= r;
    i = " ";
  }
  for (let s = 0; s < e; s++)
    n += i;
  return n;
}
function Xd(t, e) {
  t instanceof Z && (t = new Da(t));
  for (let r of t.state.facet(ide)) {
    let i = r(t, e);
    if (i !== void 0)
      return i;
  }
  let n = rt(t.state);
  return n.length >= e ? ode(t, n, e) : null;
}
class Da {
  constructor(e, n = {}) {
    this.state = e, this.options = n, this.unit = $c(e);
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
    return ks(e, this.state.tabSize, n);
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
const sde = /* @__PURE__ */ new X();
function ode(t, e, n) {
  return sx(e.resolveInner(n).enterUnfinishedNodesBefore(n), n, t);
}
function lde(t) {
  return t.pos == t.options.simulateBreak && t.options.simulateDoubleBreak;
}
function cde(t) {
  let e = t.type.prop(sde);
  if (e)
    return e;
  let n = t.firstChild, r;
  if (n && (r = n.type.prop(X.closedBy))) {
    let i = t.lastChild, s = i && r.indexOf(i.name) > -1;
    return (o) => fde(o, !0, 1, void 0, s && !lde(o) ? i.from : void 0);
  }
  return t.parent == null ? ade : null;
}
function sx(t, e, n) {
  for (; t; t = t.parent) {
    let r = cde(t);
    if (r)
      return r(Qd.create(n, e, t));
  }
  return null;
}
function ade() {
  return 0;
}
class Qd extends Da {
  constructor(e, n, r) {
    super(e.state, e.options), this.base = e, this.pos = n, this.node = r;
  }
  static create(e, n, r) {
    return new Qd(e, n, r);
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
      if (hde(r, e))
        break;
      n = this.state.doc.lineAt(r.from);
    }
    return this.lineIndent(n.from);
  }
  continue() {
    let e = this.node.parent;
    return e ? sx(e, this.pos, this.base) : 0;
  }
}
function hde(t, e) {
  for (let n = e; n; n = n.parent)
    if (t == n)
      return !0;
  return !1;
}
function ude(t) {
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
function fde(t, e, n, r, i) {
  let s = t.textAfter, o = s.match(/^\s*/)[0].length, l = r && s.slice(o, o + r.length) == r || i == t.pos + o, c = e ? ude(t) : null;
  return c ? l ? t.column(c.from) : t.column(c.to) : t.baseIndent + (l ? 0 : t.unit * n);
}
const dde = 200;
function pde() {
  return Z.transactionFilter.of((t) => {
    if (!t.docChanged || !t.isUserEvent("input.type") && !t.isUserEvent("input.complete"))
      return t;
    let e = t.startState.languageDataAt("indentOnInput", t.startState.selection.main.head);
    if (!e.length)
      return t;
    let n = t.newDoc, { head: r } = t.newSelection.main, i = n.lineAt(r);
    if (r > i.from + dde)
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
      let u = Xd(o, h.from);
      if (u == null)
        continue;
      let f = /^\s*/.exec(h.text)[0], d = Co(o, u);
      f != d && c.push({ from: h.from, to: h.from + f.length, insert: d });
    }
    return c.length ? [t, { changes: c, sequential: !0 }] : t;
  });
}
const gde = /* @__PURE__ */ N.define(), mde = /* @__PURE__ */ new X();
function yde(t, e, n) {
  let r = rt(t);
  if (r.length < n)
    return null;
  let i = r.resolveInner(n, 1), s = null;
  for (let o = i; o; o = o.parent) {
    if (o.to <= n || o.from > n)
      continue;
    if (s && o.from < e)
      break;
    let l = o.type.prop(mde);
    if (l && (o.to < r.length - 50 || r.length == t.doc.length || !bde(o))) {
      let c = l(o, t);
      c && c.from <= n && c.from >= e && c.to > n && (s = c);
    }
  }
  return s;
}
function bde(t) {
  let e = t.lastChild;
  return e && e.to == t.to && e.type.isError;
}
function qc(t, e, n) {
  for (let r of t.facet(gde)) {
    let i = r(t, e, n);
    if (i)
      return i;
  }
  return yde(t, e, n);
}
function ox(t, e) {
  let n = e.mapPos(t.from, 1), r = e.mapPos(t.to, -1);
  return n >= r ? void 0 : { from: n, to: r };
}
const Ta = /* @__PURE__ */ j.define({ map: ox }), Uo = /* @__PURE__ */ j.define({ map: ox });
function lx(t) {
  let e = [];
  for (let { head: n } of t.state.selection.ranges)
    e.some((r) => r.from <= n && r.to >= n) || e.push(t.lineBlockAt(n));
  return e;
}
const ii = /* @__PURE__ */ Ie.define({
  create() {
    return P.none;
  },
  update(t, e) {
    t = t.map(e.changes);
    for (let n of e.effects)
      if (n.is(Ta) && !vde(t, n.value.from, n.value.to)) {
        let { preparePlaceholder: r } = e.state.facet(ep), i = r ? P.replace({ widget: new Ade(r(e.state, n.value)) }) : n1;
        t = t.update({ add: [i.range(n.value.from, n.value.to)] });
      } else
        n.is(Uo) && (t = t.update({
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
  provide: (t) => M.decorations.from(t),
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
      e.push(n1.range(r, i));
    }
    return P.set(e, !0);
  }
});
function Hc(t, e, n) {
  var r;
  let i = null;
  return (r = t.field(ii, !1)) === null || r === void 0 || r.between(e, n, (s, o) => {
    (!i || i.from > s) && (i = { from: s, to: o });
  }), i;
}
function vde(t, e, n) {
  let r = !1;
  return t.between(e, e, (i, s) => {
    i == e && s == n && (r = !0);
  }), r;
}
function cx(t, e) {
  return t.field(ii, !1) ? e : e.concat(j.appendConfig.of(hx()));
}
const wde = (t) => {
  for (let e of lx(t)) {
    let n = qc(t.state, e.from, e.to);
    if (n)
      return t.dispatch({ effects: cx(t.state, [Ta.of(n), ax(t, n)]) }), !0;
  }
  return !1;
}, xde = (t) => {
  if (!t.state.field(ii, !1))
    return !1;
  let e = [];
  for (let n of lx(t)) {
    let r = Hc(t.state, n.from, n.to);
    r && e.push(Uo.of(r), ax(t, r, !1));
  }
  return e.length && t.dispatch({ effects: e }), e.length > 0;
};
function ax(t, e, n = !0) {
  let r = t.state.doc.lineAt(e.from).number, i = t.state.doc.lineAt(e.to).number;
  return M.announce.of(`${t.state.phrase(n ? "Folded lines" : "Unfolded lines")} ${r} ${t.state.phrase("to")} ${i}.`);
}
const kde = (t) => {
  let { state: e } = t, n = [];
  for (let r = 0; r < e.doc.length; ) {
    let i = t.lineBlockAt(r), s = qc(e, i.from, i.to);
    s && n.push(Ta.of(s)), r = (s ? t.lineBlockAt(s.to) : i).to + 1;
  }
  return n.length && t.dispatch({ effects: cx(t.state, n) }), !!n.length;
}, _de = (t) => {
  let e = t.state.field(ii, !1);
  if (!e || !e.size)
    return !1;
  let n = [];
  return e.between(0, t.state.doc.length, (r, i) => {
    n.push(Uo.of({ from: r, to: i }));
  }), t.dispatch({ effects: n }), !0;
}, Cde = [
  { key: "Ctrl-Shift-[", mac: "Cmd-Alt-[", run: wde },
  { key: "Ctrl-Shift-]", mac: "Cmd-Alt-]", run: xde },
  { key: "Ctrl-Alt-[", run: kde },
  { key: "Ctrl-Alt-]", run: _de }
], Sde = {
  placeholderDOM: null,
  preparePlaceholder: null,
  placeholderText: "\u2026"
}, ep = /* @__PURE__ */ N.define({
  combine(t) {
    return Tn(t, Sde);
  }
});
function hx(t) {
  let e = [ii, Tde];
  return t && e.push(ep.of(t)), e;
}
function ux(t, e) {
  let { state: n } = t, r = n.facet(ep), i = (o) => {
    let l = t.lineBlockAt(t.posAtDOM(o.target)), c = Hc(t.state, l.from, l.to);
    c && t.dispatch({ effects: Uo.of(c) }), o.preventDefault();
  };
  if (r.placeholderDOM)
    return r.placeholderDOM(t, i, e);
  let s = document.createElement("span");
  return s.textContent = r.placeholderText, s.setAttribute("aria-label", n.phrase("folded code")), s.title = n.phrase("unfold"), s.className = "cm-foldPlaceholder", s.onclick = i, s;
}
const n1 = /* @__PURE__ */ P.replace({ widget: /* @__PURE__ */ new class extends tn {
  toDOM(t) {
    return ux(t, null);
  }
}() });
class Ade extends tn {
  constructor(e) {
    super(), this.value = e;
  }
  eq(e) {
    return this.value == e.value;
  }
  toDOM(e) {
    return ux(e, this.value);
  }
}
const Ede = {
  openText: "\u2304",
  closedText: "\u203A",
  markerDOM: null,
  domEventHandlers: {},
  foldingChanged: () => !1
};
class Zh extends Cn {
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
function Dde(t = {}) {
  let e = Object.assign(Object.assign({}, Ede), t), n = new Zh(e, !0), r = new Zh(e, !1), i = Ae.fromClass(class {
    constructor(o) {
      this.from = o.viewport.from, this.markers = this.buildMarkers(o);
    }
    update(o) {
      (o.docChanged || o.viewportChanged || o.startState.facet(wr) != o.state.facet(wr) || o.startState.field(ii, !1) != o.state.field(ii, !1) || rt(o.startState) != rt(o.state) || e.foldingChanged(o)) && (this.markers = this.buildMarkers(o.view));
    }
    buildMarkers(o) {
      let l = new Dt();
      for (let c of o.viewportLineBlocks) {
        let a = Hc(o.state, c.from, c.to) ? r : qc(o.state, c.from, c.to) ? n : null;
        a && l.add(c.from, c.from, a);
      }
      return l.finish();
    }
  }), { domEventHandlers: s } = e;
  return [
    i,
    Zw({
      class: "cm-foldGutter",
      markers(o) {
        var l;
        return ((l = o.plugin(i)) === null || l === void 0 ? void 0 : l.markers) || Q.empty;
      },
      initialSpacer() {
        return new Zh(e, !1);
      },
      domEventHandlers: Object.assign(Object.assign({}, s), { click: (o, l, c) => {
        if (s.click && s.click(o, l, c))
          return !0;
        let a = Hc(o.state, l.from, l.to);
        if (a)
          return o.dispatch({ effects: Uo.of(a) }), !0;
        let h = qc(o.state, l.from, l.to);
        return h ? (o.dispatch({ effects: Ta.of(h) }), !0) : !1;
      } })
    }),
    hx()
  ];
}
const Tde = /* @__PURE__ */ M.baseTheme({
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
class Ma {
  constructor(e, n) {
    this.specs = e;
    let r;
    function i(l) {
      let c = Un.newName();
      return (r || (r = /* @__PURE__ */ Object.create(null)))["." + c] = l, c;
    }
    const s = typeof n.all == "string" ? n.all : n.all ? i(n.all) : void 0, o = n.scope;
    this.scope = o instanceof mn ? (l) => l.prop(Ws) == o.data : o ? (l) => l == o : void 0, this.style = rx(e.map((l) => ({
      tag: l.tag,
      class: l.class || i(Object.assign({}, l, { tag: null }))
    })), {
      all: s
    }).style, this.module = r ? new Un(r) : null, this.themeType = n.themeType;
  }
  static define(e, n) {
    return new Ma(e, n || {});
  }
}
const Df = /* @__PURE__ */ N.define(), fx = /* @__PURE__ */ N.define({
  combine(t) {
    return t.length ? [t[0]] : null;
  }
});
function Xh(t) {
  let e = t.facet(Df);
  return e.length ? e : t.facet(fx);
}
function Mde(t, e) {
  let n = [Lde], r;
  return t instanceof Ma && (t.module && n.push(M.styleModule.of(t.module)), r = t.themeType), e != null && e.fallback ? n.push(fx.of(t)) : r ? n.push(Df.computeN([M.darkTheme], (i) => i.facet(M.darkTheme) == (r == "dark") ? [t] : [])) : n.push(Df.of(t)), n;
}
class Ode {
  constructor(e) {
    this.markCache = /* @__PURE__ */ Object.create(null), this.tree = rt(e.state), this.decorations = this.buildDeco(e, Xh(e.state));
  }
  update(e) {
    let n = rt(e.state), r = Xh(e.state), i = r != Xh(e.startState);
    n.length < e.view.viewport.to && !i && n.type == this.tree.type ? this.decorations = this.decorations.map(e.changes) : (n != this.tree || e.viewportChanged || i) && (this.tree = n, this.decorations = this.buildDeco(e.view, r));
  }
  buildDeco(e, n) {
    if (!n || !this.tree.length)
      return P.none;
    let r = new Dt();
    for (let { from: i, to: s } of e.visibleRanges)
      Xfe(this.tree, n, (o, l, c) => {
        r.add(o, l, this.markCache[c] || (this.markCache[c] = P.mark({ class: c })));
      }, i, s);
    return r.finish();
  }
}
const Lde = /* @__PURE__ */ Sr.high(/* @__PURE__ */ Ae.fromClass(Ode, {
  decorations: (t) => t.decorations
})), Rde = /* @__PURE__ */ Ma.define([
  {
    tag: R.meta,
    color: "#404740"
  },
  {
    tag: R.link,
    textDecoration: "underline"
  },
  {
    tag: R.heading,
    textDecoration: "underline",
    fontWeight: "bold"
  },
  {
    tag: R.emphasis,
    fontStyle: "italic"
  },
  {
    tag: R.strong,
    fontWeight: "bold"
  },
  {
    tag: R.strikethrough,
    textDecoration: "line-through"
  },
  {
    tag: R.keyword,
    color: "#708"
  },
  {
    tag: [R.atom, R.bool, R.url, R.contentSeparator, R.labelName],
    color: "#219"
  },
  {
    tag: [R.literal, R.inserted],
    color: "#164"
  },
  {
    tag: [R.string, R.deleted],
    color: "#a11"
  },
  {
    tag: [R.regexp, R.escape, /* @__PURE__ */ R.special(R.string)],
    color: "#e40"
  },
  {
    tag: /* @__PURE__ */ R.definition(R.variableName),
    color: "#00f"
  },
  {
    tag: /* @__PURE__ */ R.local(R.variableName),
    color: "#30a"
  },
  {
    tag: [R.typeName, R.namespace],
    color: "#085"
  },
  {
    tag: R.className,
    color: "#167"
  },
  {
    tag: [/* @__PURE__ */ R.special(R.variableName), R.macroName],
    color: "#256"
  },
  {
    tag: /* @__PURE__ */ R.definition(R.propertyName),
    color: "#00c"
  },
  {
    tag: R.comment,
    color: "#940"
  },
  {
    tag: R.invalid,
    color: "#f00"
  }
]), Ide = /* @__PURE__ */ M.baseTheme({
  "&.cm-focused .cm-matchingBracket": { backgroundColor: "#328c8252" },
  "&.cm-focused .cm-nonmatchingBracket": { backgroundColor: "#bb555544" }
}), dx = 1e4, px = "()[]{}", gx = /* @__PURE__ */ N.define({
  combine(t) {
    return Tn(t, {
      afterCursor: !0,
      brackets: px,
      maxScanDistance: dx,
      renderMatch: Pde
    });
  }
}), Nde = /* @__PURE__ */ P.mark({ class: "cm-matchingBracket" }), Bde = /* @__PURE__ */ P.mark({ class: "cm-nonmatchingBracket" });
function Pde(t) {
  let e = [], n = t.matched ? Nde : Bde;
  return e.push(n.range(t.start.from, t.start.to)), t.end && e.push(n.range(t.end.from, t.end.to)), e;
}
const Fde = /* @__PURE__ */ Ie.define({
  create() {
    return P.none;
  },
  update(t, e) {
    if (!e.docChanged && !e.selection)
      return t;
    let n = [], r = e.state.facet(gx);
    for (let i of e.state.selection.ranges) {
      if (!i.empty)
        continue;
      let s = yn(e.state, i.head, -1, r) || i.head > 0 && yn(e.state, i.head - 1, 1, r) || r.afterCursor && (yn(e.state, i.head, 1, r) || i.head < e.state.doc.length && yn(e.state, i.head + 1, -1, r));
      s && (n = n.concat(r.renderMatch(s, e.state)));
    }
    return P.set(n, !0);
  },
  provide: (t) => M.decorations.from(t)
}), $de = [
  Fde,
  Ide
];
function qde(t = {}) {
  return [gx.of(t), $de];
}
const Hde = /* @__PURE__ */ new X();
function Tf(t, e, n) {
  let r = t.prop(e < 0 ? X.openedBy : X.closedBy);
  if (r)
    return r;
  if (t.name.length == 1) {
    let i = n.indexOf(t.name);
    if (i > -1 && i % 2 == (e < 0 ? 1 : 0))
      return [n[i + e]];
  }
  return null;
}
function Mf(t) {
  let e = t.type.prop(Hde);
  return e ? e(t.node) : t;
}
function yn(t, e, n, r = {}) {
  let i = r.maxScanDistance || dx, s = r.brackets || px, o = rt(t), l = o.resolveInner(e, n);
  for (let c = l; c; c = c.parent) {
    let a = Tf(c.type, n, s);
    if (a && c.from < c.to) {
      let h = Mf(c);
      if (h && (n > 0 ? e >= h.from && e < h.to : e > h.from && e <= h.to))
        return zde(t, e, n, c, h, a, s);
    }
  }
  return Vde(t, e, n, o, l.type, i, s);
}
function zde(t, e, n, r, i, s, o) {
  let l = r.parent, c = { from: i.from, to: i.to }, a = 0, h = l == null ? void 0 : l.cursor();
  if (h && (n < 0 ? h.childBefore(r.from) : h.childAfter(r.to)))
    do
      if (n < 0 ? h.to <= r.from : h.from >= r.to) {
        if (a == 0 && s.indexOf(h.type.name) > -1 && h.from < h.to) {
          let u = Mf(h);
          return { start: c, end: u ? { from: u.from, to: u.to } : void 0, matched: !0 };
        } else if (Tf(h.type, n, o))
          a++;
        else if (Tf(h.type, -n, o)) {
          if (a == 0) {
            let u = Mf(h);
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
function Vde(t, e, n, r, i, s, o) {
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
const Ude = /* @__PURE__ */ Object.create(null), r1 = [qt.none], i1 = [], Wde = /* @__PURE__ */ Object.create(null);
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
  Wde[t] = /* @__PURE__ */ jde(Ude, e);
function Qh(t, e) {
  i1.indexOf(t) > -1 || (i1.push(t), console.warn(e));
}
function jde(t, e) {
  let n = null;
  for (let s of e.split(".")) {
    let o = t[s] || R[s];
    o ? typeof o == "function" ? n ? n = o(n) : Qh(s, `Modifier ${s} used at start of tag`) : n ? Qh(s, `Tag ${s} used as modifier`) : n = o : Qh(s, `Unknown highlighting tag ${s}`);
  }
  if (!n)
    return 0;
  let r = e.replace(/ /g, "_"), i = qt.define({
    id: r1.length,
    name: r,
    props: [Jfe({ [r]: n })]
  });
  return r1.push(i), i.id;
}
const Gde = (t) => {
  let { state: e } = t, n = e.doc.lineAt(e.selection.main.from), r = np(t.state, n.from);
  return r.line ? Yde(t) : r.block ? Jde(t) : !1;
};
function tp(t, e) {
  return ({ state: n, dispatch: r }) => {
    if (n.readOnly)
      return !1;
    let i = t(e, n);
    return i ? (r(n.update(i)), !0) : !1;
  };
}
const Yde = /* @__PURE__ */ tp(Qde, 0), Kde = /* @__PURE__ */ tp(mx, 0), Jde = /* @__PURE__ */ tp((t, e) => mx(t, e, Xde(e)), 0);
function np(t, e) {
  let n = t.languageDataAt("commentTokens", e);
  return n.length ? n[0] : {};
}
const Bs = 50;
function Zde(t, { open: e, close: n }, r, i) {
  let s = t.sliceDoc(r - Bs, r), o = t.sliceDoc(i, i + Bs), l = /\s*$/.exec(s)[0].length, c = /^\s*/.exec(o)[0].length, a = s.length - l;
  if (s.slice(a - e.length, a) == e && o.slice(c, c + n.length) == n)
    return {
      open: { pos: r - l, margin: l && 1 },
      close: { pos: i + c, margin: c && 1 }
    };
  let h, u;
  i - r <= 2 * Bs ? h = u = t.sliceDoc(r, i) : (h = t.sliceDoc(r, r + Bs), u = t.sliceDoc(i - Bs, i));
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
function Xde(t) {
  let e = [];
  for (let n of t.selection.ranges) {
    let r = t.doc.lineAt(n.from), i = n.to <= r.to ? r : t.doc.lineAt(n.to), s = e.length - 1;
    s >= 0 && e[s].to > r.from ? e[s].to = i.to : e.push({ from: r.from + /^\s*/.exec(r.text)[0].length, to: i.to });
  }
  return e;
}
function mx(t, e, n = e.selection.ranges) {
  let r = n.map((s) => np(e, s.from).block);
  if (!r.every((s) => s))
    return null;
  let i = n.map((s, o) => Zde(e, r[o], s.from, s.to));
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
function Qde(t, e, n = e.selection.ranges) {
  let r = [], i = -1;
  for (let { from: s, to: o } of n) {
    let l = r.length, c = 1e9, a = np(e, s).line;
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
const Of = /* @__PURE__ */ en.define(), epe = /* @__PURE__ */ en.define(), tpe = /* @__PURE__ */ N.define(), yx = /* @__PURE__ */ N.define({
  combine(t) {
    return Tn(t, {
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
function npe(t) {
  let e = 0;
  return t.iterChangedRanges((n, r) => e = r), e;
}
const bx = /* @__PURE__ */ Ie.define({
  create() {
    return bn.empty;
  },
  update(t, e) {
    let n = e.state.facet(yx), r = e.annotation(Of);
    if (r) {
      let c = e.docChanged ? S.single(npe(e.changes)) : void 0, a = vt.fromTransaction(e, c), h = r.side, u = h == 0 ? t.undone : t.done;
      return a ? u = zc(u, u.length, n.minDepth, a) : u = xx(u, e.startState.selection), new bn(h == 0 ? r.rest : u, h == 0 ? u : r.rest);
    }
    let i = e.annotation(epe);
    if ((i == "full" || i == "before") && (t = t.isolate()), e.annotation(Pe.addToHistory) === !1)
      return e.changes.empty ? t : t.addMapping(e.changes.desc);
    let s = vt.fromTransaction(e), o = e.annotation(Pe.time), l = e.annotation(Pe.userEvent);
    return s ? t = t.addChanges(s, o, l, n, e) : e.selection && (t = t.addSelection(e.startState.selection, o, l, n.newGroupDelay)), (i == "full" || i == "after") && (t = t.isolate()), t;
  },
  toJSON(t) {
    return { done: t.done.map((e) => e.toJSON()), undone: t.undone.map((e) => e.toJSON()) };
  },
  fromJSON(t) {
    return new bn(t.done.map(vt.fromJSON), t.undone.map(vt.fromJSON));
  }
});
function rpe(t = {}) {
  return [
    bx,
    yx.of(t),
    M.domEventHandlers({
      beforeinput(e, n) {
        let r = e.inputType == "historyUndo" ? vx : e.inputType == "historyRedo" ? Lf : null;
        return r ? (e.preventDefault(), r(n)) : !1;
      }
    })
  ];
}
function Oa(t, e) {
  return function({ state: n, dispatch: r }) {
    if (!e && n.readOnly)
      return !1;
    let i = n.field(bx, !1);
    if (!i)
      return !1;
    let s = i.pop(t, n, e);
    return s ? (r(s), !0) : !1;
  };
}
const vx = /* @__PURE__ */ Oa(0, !1), Lf = /* @__PURE__ */ Oa(1, !1), ipe = /* @__PURE__ */ Oa(0, !0), spe = /* @__PURE__ */ Oa(1, !0);
class vt {
  constructor(e, n, r, i, s) {
    this.changes = e, this.effects = n, this.mapped = r, this.startSelection = i, this.selectionsAfter = s;
  }
  setSelAfter(e) {
    return new vt(this.changes, this.effects, this.mapped, this.startSelection, e);
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
    return new vt(e.changes && Ne.fromJSON(e.changes), [], e.mapped && xn.fromJSON(e.mapped), e.startSelection && S.fromJSON(e.startSelection), e.selectionsAfter.map(S.fromJSON));
  }
  static fromTransaction(e, n) {
    let r = Rt;
    for (let i of e.startState.facet(tpe)) {
      let s = i(e);
      s.length && (r = r.concat(s));
    }
    return !r.length && e.changes.empty ? null : new vt(e.changes.invert(e.startState.doc), r, void 0, n || e.startState.selection, Rt);
  }
  static selection(e) {
    return new vt(void 0, Rt, void 0, void 0, e);
  }
}
function zc(t, e, n, r) {
  let i = e + 1 > n + 20 ? e - n - 1 : 0, s = t.slice(i, e);
  return s.push(r), s;
}
function ope(t, e) {
  let n = [], r = !1;
  return t.iterChangedRanges((i, s) => n.push(i, s)), e.iterChangedRanges((i, s, o, l) => {
    for (let c = 0; c < n.length; ) {
      let a = n[c++], h = n[c++];
      l >= a && o <= h && (r = !0);
    }
  }), r;
}
function lpe(t, e) {
  return t.ranges.length == e.ranges.length && t.ranges.filter((n, r) => n.empty != e.ranges[r].empty).length === 0;
}
function wx(t, e) {
  return t.length ? e.length ? t.concat(e) : t : e;
}
const Rt = [], cpe = 200;
function xx(t, e) {
  if (t.length) {
    let n = t[t.length - 1], r = n.selectionsAfter.slice(Math.max(0, n.selectionsAfter.length - cpe));
    return r.length && r[r.length - 1].eq(e) ? t : (r.push(e), zc(t, t.length - 1, 1e9, n.setSelAfter(r)));
  } else
    return [vt.selection([e])];
}
function ape(t) {
  let e = t[t.length - 1], n = t.slice();
  return n[t.length - 1] = e.setSelAfter(e.selectionsAfter.slice(0, e.selectionsAfter.length - 1)), n;
}
function eu(t, e) {
  if (!t.length)
    return t;
  let n = t.length, r = Rt;
  for (; n; ) {
    let i = hpe(t[n - 1], e, r);
    if (i.changes && !i.changes.empty || i.effects.length) {
      let s = t.slice(0, n);
      return s[n - 1] = i, s;
    } else
      e = i.mapped, n--, r = i.selectionsAfter;
  }
  return r.length ? [vt.selection(r)] : Rt;
}
function hpe(t, e, n) {
  let r = wx(t.selectionsAfter.length ? t.selectionsAfter.map((l) => l.map(e)) : Rt, n);
  if (!t.changes)
    return vt.selection(r);
  let i = t.changes.map(e), s = e.mapDesc(t.changes, !0), o = t.mapped ? t.mapped.composeDesc(s) : s;
  return new vt(i, j.mapEffects(t.effects, e), o, t.startSelection.map(s), r);
}
const upe = /^(input\.type|delete)($|\.)/;
class bn {
  constructor(e, n, r = 0, i = void 0) {
    this.done = e, this.undone = n, this.prevTime = r, this.prevUserEvent = i;
  }
  isolate() {
    return this.prevTime ? new bn(this.done, this.undone) : this;
  }
  addChanges(e, n, r, i, s) {
    let o = this.done, l = o[o.length - 1];
    return l && l.changes && !l.changes.empty && e.changes && (!r || upe.test(r)) && (!l.selectionsAfter.length && n - this.prevTime < i.newGroupDelay && i.joinToEvent(s, ope(l.changes, e.changes)) || r == "input.type.compose") ? o = zc(o, o.length - 1, i.minDepth, new vt(e.changes.compose(l.changes), wx(e.effects, l.effects), l.mapped, l.startSelection, Rt)) : o = zc(o, o.length, i.minDepth, e), new bn(o, Rt, n, r);
  }
  addSelection(e, n, r, i) {
    let s = this.done.length ? this.done[this.done.length - 1].selectionsAfter : Rt;
    return s.length > 0 && n - this.prevTime < i && r == this.prevUserEvent && r && /^select($|\.)/.test(r) && lpe(s[s.length - 1], e) ? this : new bn(xx(this.done, e), this.undone, n, r);
  }
  addMapping(e) {
    return new bn(eu(this.done, e), eu(this.undone, e), this.prevTime, this.prevUserEvent);
  }
  pop(e, n, r) {
    let i = e == 0 ? this.done : this.undone;
    if (i.length == 0)
      return null;
    let s = i[i.length - 1];
    if (r && s.selectionsAfter.length)
      return n.update({
        selection: s.selectionsAfter[s.selectionsAfter.length - 1],
        annotations: Of.of({ side: e, rest: ape(i) }),
        userEvent: e == 0 ? "select.undo" : "select.redo",
        scrollIntoView: !0
      });
    if (s.changes) {
      let o = i.length == 1 ? Rt : i.slice(0, i.length - 1);
      return s.mapped && (o = eu(o, s.mapped)), n.update({
        changes: s.changes,
        selection: s.startSelection,
        effects: s.effects,
        annotations: Of.of({ side: e, rest: o }),
        filter: !1,
        userEvent: e == 0 ? "undo" : "redo",
        scrollIntoView: !0
      });
    } else
      return null;
  }
}
bn.empty = /* @__PURE__ */ new bn(Rt, Rt);
const fpe = [
  { key: "Mod-z", run: vx, preventDefault: !0 },
  { key: "Mod-y", mac: "Mod-Shift-z", run: Lf, preventDefault: !0 },
  { linux: "Ctrl-Shift-z", run: Lf, preventDefault: !0 },
  { key: "Mod-u", run: ipe, preventDefault: !0 },
  { key: "Alt-u", mac: "Mod-Shift-u", run: spe, preventDefault: !0 }
];
function _s(t, e) {
  return S.create(t.ranges.map(e), t.mainIndex);
}
function Mn(t, e) {
  return t.update({ selection: e, scrollIntoView: !0, userEvent: "select" });
}
function nn({ state: t, dispatch: e }, n) {
  let r = _s(t.selection, n);
  return r.eq(t.selection) ? !1 : (e(Mn(t, r)), !0);
}
function La(t, e) {
  return S.cursor(e ? t.to : t.from);
}
function kx(t, e) {
  return nn(t, (n) => n.empty ? t.moveByChar(n, e) : La(n, e));
}
function st(t) {
  return t.textDirectionAt(t.state.selection.main.head) == Ce.LTR;
}
const _x = (t) => kx(t, !st(t)), Cx = (t) => kx(t, st(t));
function Sx(t, e) {
  return nn(t, (n) => n.empty ? t.moveByGroup(n, e) : La(n, e));
}
const dpe = (t) => Sx(t, !st(t)), ppe = (t) => Sx(t, st(t));
function gpe(t, e, n) {
  if (e.type.prop(n))
    return !0;
  let r = e.to - e.from;
  return r && (r > 2 || /[^\s,.;:]/.test(t.sliceDoc(e.from, e.to))) || e.firstChild;
}
function Ra(t, e, n) {
  let r = rt(t).resolveInner(e.head), i = n ? X.closedBy : X.openedBy;
  for (let c = e.head; ; ) {
    let a = n ? r.childAfter(c) : r.childBefore(c);
    if (!a)
      break;
    gpe(t, a, i) ? r = a : c = n ? a.to : a.from;
  }
  let s = r.type.prop(i), o, l;
  return s && (o = n ? yn(t, r.from, 1) : yn(t, r.to, -1)) && o.matched ? l = n ? o.end.to : o.end.from : l = n ? r.to : r.from, S.cursor(l, n ? -1 : 1);
}
const mpe = (t) => nn(t, (e) => Ra(t.state, e, !st(t))), ype = (t) => nn(t, (e) => Ra(t.state, e, st(t)));
function Ax(t, e) {
  return nn(t, (n) => {
    if (!n.empty)
      return La(n, e);
    let r = t.moveVertically(n, e);
    return r.head != n.head ? r : t.moveToLineBoundary(n, e);
  });
}
const Ex = (t) => Ax(t, !1), Dx = (t) => Ax(t, !0);
function Tx(t) {
  let e = t.scrollDOM.clientHeight < t.scrollDOM.scrollHeight - 2, n = 0, r = 0, i;
  if (e) {
    for (let s of t.state.facet(M.scrollMargins)) {
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
function Mx(t, e) {
  let n = Tx(t), { state: r } = t, i = _s(r.selection, (o) => o.empty ? t.moveVertically(o, e, n.height) : La(o, e));
  if (i.eq(r.selection))
    return !1;
  let s;
  if (n.selfScroll) {
    let o = t.coordsAtPos(r.selection.main.head), l = t.scrollDOM.getBoundingClientRect(), c = l.top + n.marginTop, a = l.bottom - n.marginBottom;
    o && o.top > c && o.bottom < a && (s = M.scrollIntoView(i.main.head, { y: "start", yMargin: o.top - c }));
  }
  return t.dispatch(Mn(r, i), { effects: s }), !0;
}
const s1 = (t) => Mx(t, !1), Rf = (t) => Mx(t, !0);
function Ar(t, e, n) {
  let r = t.lineBlockAt(e.head), i = t.moveToLineBoundary(e, n);
  if (i.head == e.head && i.head != (n ? r.to : r.from) && (i = t.moveToLineBoundary(e, n, !1)), !n && i.head == r.from && r.length) {
    let s = /^\s*/.exec(t.state.sliceDoc(r.from, Math.min(r.from + 100, r.to)))[0].length;
    s && e.head != r.from + s && (i = S.cursor(r.from + s));
  }
  return i;
}
const bpe = (t) => nn(t, (e) => Ar(t, e, !0)), vpe = (t) => nn(t, (e) => Ar(t, e, !1)), wpe = (t) => nn(t, (e) => Ar(t, e, !st(t))), xpe = (t) => nn(t, (e) => Ar(t, e, st(t))), kpe = (t) => nn(t, (e) => S.cursor(t.lineBlockAt(e.head).from, 1)), _pe = (t) => nn(t, (e) => S.cursor(t.lineBlockAt(e.head).to, -1));
function Cpe(t, e, n) {
  let r = !1, i = _s(t.selection, (s) => {
    let o = yn(t, s.head, -1) || yn(t, s.head, 1) || s.head > 0 && yn(t, s.head - 1, 1) || s.head < t.doc.length && yn(t, s.head + 1, -1);
    if (!o || !o.end)
      return s;
    r = !0;
    let l = o.start.from == s.head ? o.end.to : o.end.from;
    return n ? S.range(s.anchor, l) : S.cursor(l);
  });
  return r ? (e(Mn(t, i)), !0) : !1;
}
const Spe = ({ state: t, dispatch: e }) => Cpe(t, e, !1);
function Ht(t, e) {
  let n = _s(t.state.selection, (r) => {
    let i = e(r);
    return S.range(r.anchor, i.head, i.goalColumn, i.bidiLevel || void 0);
  });
  return n.eq(t.state.selection) ? !1 : (t.dispatch(Mn(t.state, n)), !0);
}
function Ox(t, e) {
  return Ht(t, (n) => t.moveByChar(n, e));
}
const Lx = (t) => Ox(t, !st(t)), Rx = (t) => Ox(t, st(t));
function Ix(t, e) {
  return Ht(t, (n) => t.moveByGroup(n, e));
}
const Ape = (t) => Ix(t, !st(t)), Epe = (t) => Ix(t, st(t)), Dpe = (t) => Ht(t, (e) => Ra(t.state, e, !st(t))), Tpe = (t) => Ht(t, (e) => Ra(t.state, e, st(t)));
function Nx(t, e) {
  return Ht(t, (n) => t.moveVertically(n, e));
}
const Bx = (t) => Nx(t, !1), Px = (t) => Nx(t, !0);
function Fx(t, e) {
  return Ht(t, (n) => t.moveVertically(n, e, Tx(t).height));
}
const o1 = (t) => Fx(t, !1), l1 = (t) => Fx(t, !0), Mpe = (t) => Ht(t, (e) => Ar(t, e, !0)), Ope = (t) => Ht(t, (e) => Ar(t, e, !1)), Lpe = (t) => Ht(t, (e) => Ar(t, e, !st(t))), Rpe = (t) => Ht(t, (e) => Ar(t, e, st(t))), Ipe = (t) => Ht(t, (e) => S.cursor(t.lineBlockAt(e.head).from)), Npe = (t) => Ht(t, (e) => S.cursor(t.lineBlockAt(e.head).to)), c1 = ({ state: t, dispatch: e }) => (e(Mn(t, { anchor: 0 })), !0), a1 = ({ state: t, dispatch: e }) => (e(Mn(t, { anchor: t.doc.length })), !0), h1 = ({ state: t, dispatch: e }) => (e(Mn(t, { anchor: t.selection.main.anchor, head: 0 })), !0), u1 = ({ state: t, dispatch: e }) => (e(Mn(t, { anchor: t.selection.main.anchor, head: t.doc.length })), !0), Bpe = ({ state: t, dispatch: e }) => (e(t.update({ selection: { anchor: 0, head: t.doc.length }, userEvent: "select" })), !0), Ppe = ({ state: t, dispatch: e }) => {
  let n = Na(t).map(({ from: r, to: i }) => S.range(r, Math.min(i + 1, t.doc.length)));
  return e(t.update({ selection: S.create(n), userEvent: "select" })), !0;
}, Fpe = ({ state: t, dispatch: e }) => {
  let n = _s(t.selection, (r) => {
    var i;
    let s = rt(t).resolveInner(r.head, 1);
    for (; !(s.from < r.from && s.to >= r.to || s.to > r.to && s.from <= r.from || !(!((i = s.parent) === null || i === void 0) && i.parent)); )
      s = s.parent;
    return S.range(s.to, s.from);
  });
  return e(Mn(t, n)), !0;
}, $pe = ({ state: t, dispatch: e }) => {
  let n = t.selection, r = null;
  return n.ranges.length > 1 ? r = S.create([n.main]) : n.main.empty || (r = S.create([S.cursor(n.main.head)])), r ? (e(Mn(t, r)), !0) : !1;
};
function Ia(t, e) {
  if (t.state.readOnly)
    return !1;
  let n = "delete.selection", { state: r } = t, i = r.changeByRange((s) => {
    let { from: o, to: l } = s;
    if (o == l) {
      let c = e(o);
      c < o ? (n = "delete.backward", c = Dl(t, c, !1)) : c > o && (n = "delete.forward", c = Dl(t, c, !0)), o = Math.min(o, c), l = Math.max(l, c);
    } else
      o = Dl(t, o, !1), l = Dl(t, l, !0);
    return o == l ? { range: s } : { changes: { from: o, to: l }, range: S.cursor(o) };
  });
  return i.changes.empty ? !1 : (t.dispatch(r.update(i, {
    scrollIntoView: !0,
    userEvent: n,
    effects: n == "delete.selection" ? M.announce.of(r.phrase("Selection deleted")) : void 0
  })), !0);
}
function Dl(t, e, n) {
  if (t instanceof M)
    for (let r of t.state.facet(M.atomicRanges).map((i) => i(t)))
      r.between(e, e, (i, s) => {
        i < e && s > e && (e = n ? s : i);
      });
  return e;
}
const $x = (t, e) => Ia(t, (n) => {
  let { state: r } = t, i = r.doc.lineAt(n), s, o;
  if (!e && n > i.from && n < i.from + 200 && !/[^ \t]/.test(s = i.text.slice(0, n - i.from))) {
    if (s[s.length - 1] == "	")
      return n - 1;
    let l = ks(s, r.tabSize), c = l % $c(r) || $c(r);
    for (let a = 0; a < c && s[s.length - 1 - a] == " "; a++)
      n--;
    o = n;
  } else
    o = tt(i.text, n - i.from, e, e) + i.from, o == n && i.number != (e ? r.doc.lines : 1) && (o += e ? 1 : -1);
  return o;
}), If = (t) => $x(t, !1), qx = (t) => $x(t, !0), Hx = (t, e) => Ia(t, (n) => {
  let r = n, { state: i } = t, s = i.doc.lineAt(r), o = i.charCategorizer(r);
  for (let l = null; ; ) {
    if (r == (e ? s.to : s.from)) {
      r == n && s.number != (e ? i.doc.lines : 1) && (r += e ? 1 : -1);
      break;
    }
    let c = tt(s.text, r - s.from, e) + s.from, a = s.text.slice(Math.min(r, c) - s.from, Math.max(r, c) - s.from), h = o(a);
    if (l != null && h != l)
      break;
    (a != " " || r != n) && (l = h), r = c;
  }
  return r;
}), zx = (t) => Hx(t, !1), qpe = (t) => Hx(t, !0), Vx = (t) => Ia(t, (e) => {
  let n = t.lineBlockAt(e).to;
  return e < n ? n : Math.min(t.state.doc.length, e + 1);
}), Hpe = (t) => Ia(t, (e) => {
  let n = t.lineBlockAt(e).from;
  return e > n ? n : Math.max(0, e - 1);
}), zpe = ({ state: t, dispatch: e }) => {
  if (t.readOnly)
    return !1;
  let n = t.changeByRange((r) => ({
    changes: { from: r.from, to: r.to, insert: te.of(["", ""]) },
    range: S.cursor(r.from)
  }));
  return e(t.update(n, { scrollIntoView: !0, userEvent: "input" })), !0;
}, Vpe = ({ state: t, dispatch: e }) => {
  if (t.readOnly)
    return !1;
  let n = t.changeByRange((r) => {
    if (!r.empty || r.from == 0 || r.from == t.doc.length)
      return { range: r };
    let i = r.from, s = t.doc.lineAt(i), o = i == s.from ? i - 1 : tt(s.text, i - s.from, !1) + s.from, l = i == s.to ? i + 1 : tt(s.text, i - s.from, !0) + s.from;
    return {
      changes: { from: o, to: l, insert: t.doc.slice(i, l).append(t.doc.slice(o, i)) },
      range: S.cursor(l)
    };
  });
  return n.changes.empty ? !1 : (e(t.update(n, { scrollIntoView: !0, userEvent: "move.character" })), !0);
};
function Na(t) {
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
function Ux(t, e, n) {
  if (t.readOnly)
    return !1;
  let r = [], i = [];
  for (let s of Na(t)) {
    if (n ? s.to == t.doc.length : s.from == 0)
      continue;
    let o = t.doc.lineAt(n ? s.to + 1 : s.from - 1), l = o.length + 1;
    if (n) {
      r.push({ from: s.to, to: o.to }, { from: s.from, insert: o.text + t.lineBreak });
      for (let c of s.ranges)
        i.push(S.range(Math.min(t.doc.length, c.anchor + l), Math.min(t.doc.length, c.head + l)));
    } else {
      r.push({ from: o.from, to: s.from }, { from: s.to, insert: t.lineBreak + o.text });
      for (let c of s.ranges)
        i.push(S.range(c.anchor - l, c.head - l));
    }
  }
  return r.length ? (e(t.update({
    changes: r,
    scrollIntoView: !0,
    selection: S.create(i, t.selection.mainIndex),
    userEvent: "move.line"
  })), !0) : !1;
}
const Upe = ({ state: t, dispatch: e }) => Ux(t, e, !1), Wpe = ({ state: t, dispatch: e }) => Ux(t, e, !0);
function Wx(t, e, n) {
  if (t.readOnly)
    return !1;
  let r = [];
  for (let i of Na(t))
    n ? r.push({ from: i.from, insert: t.doc.slice(i.from, i.to) + t.lineBreak }) : r.push({ from: i.to, insert: t.lineBreak + t.doc.slice(i.from, i.to) });
  return e(t.update({ changes: r, scrollIntoView: !0, userEvent: "input.copyline" })), !0;
}
const jpe = ({ state: t, dispatch: e }) => Wx(t, e, !1), Gpe = ({ state: t, dispatch: e }) => Wx(t, e, !0), Ype = (t) => {
  if (t.state.readOnly)
    return !1;
  let { state: e } = t, n = e.changes(Na(e).map(({ from: i, to: s }) => (i > 0 ? i-- : s < e.doc.length && s++, { from: i, to: s }))), r = _s(e.selection, (i) => t.moveVertically(i, !0)).map(n);
  return t.dispatch({ changes: n, selection: r, scrollIntoView: !0, userEvent: "delete.line" }), !0;
};
function Kpe(t, e) {
  if (/\(\)|\[\]|\{\}/.test(t.sliceDoc(e - 1, e + 1)))
    return { from: e, to: e };
  let n = rt(t).resolveInner(e), r = n.childBefore(e), i = n.childAfter(e), s;
  return r && i && r.to <= e && i.from >= e && (s = r.type.prop(X.closedBy)) && s.indexOf(i.name) > -1 && t.doc.lineAt(r.to).from == t.doc.lineAt(i.from).from && !/\S/.test(t.sliceDoc(r.to, i.from)) ? { from: r.to, to: i.from } : null;
}
const Jpe = /* @__PURE__ */ jx(!1), Zpe = /* @__PURE__ */ jx(!0);
function jx(t) {
  return ({ state: e, dispatch: n }) => {
    if (e.readOnly)
      return !1;
    let r = e.changeByRange((i) => {
      let { from: s, to: o } = i, l = e.doc.lineAt(s), c = !t && s == o && Kpe(e, s);
      t && (s = o = (o <= l.to ? l : e.doc.lineAt(o)).to);
      let a = new Da(e, { simulateBreak: s, simulateDoubleBreak: !!c }), h = Xd(a, s);
      for (h == null && (h = ks(/^\s*/.exec(e.doc.lineAt(s).text)[0], e.tabSize)); o < l.to && /\s/.test(l.text[o - l.from]); )
        o++;
      c ? { from: s, to: o } = c : s > l.from && s < l.from + 100 && !/\S/.test(l.text.slice(0, s)) && (s = l.from);
      let u = ["", Co(e, h)];
      return c && u.push(Co(e, a.lineIndent(l.from, -1))), {
        changes: { from: s, to: o, insert: te.of(u) },
        range: S.cursor(s + 1 + u[1].length)
      };
    });
    return n(e.update(r, { scrollIntoView: !0, userEvent: "input" })), !0;
  };
}
function rp(t, e) {
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
      range: S.range(s.mapPos(r.anchor, 1), s.mapPos(r.head, 1))
    };
  });
}
const Xpe = ({ state: t, dispatch: e }) => {
  if (t.readOnly)
    return !1;
  let n = /* @__PURE__ */ Object.create(null), r = new Da(t, { overrideIndentation: (s) => {
    let o = n[s];
    return o == null ? -1 : o;
  } }), i = rp(t, (s, o, l) => {
    let c = Xd(r, s.from);
    if (c == null)
      return;
    /\S/.test(s.text) || (c = 0);
    let a = /^\s*/.exec(s.text)[0], h = Co(t, c);
    (a != h || l.from < s.from + a.length) && (n[s.from] = c, o.push({ from: s.from, to: s.from + a.length, insert: h }));
  });
  return i.changes.empty || e(t.update(i, { userEvent: "indent" })), !0;
}, Gx = ({ state: t, dispatch: e }) => t.readOnly ? !1 : (e(t.update(rp(t, (n, r) => {
  r.push({ from: n.from, insert: t.facet(Zd) });
}), { userEvent: "input.indent" })), !0), Yx = ({ state: t, dispatch: e }) => t.readOnly ? !1 : (e(t.update(rp(t, (n, r) => {
  let i = /^\s*/.exec(n.text)[0];
  if (!i)
    return;
  let s = ks(i, t.tabSize), o = 0, l = Co(t, Math.max(0, s - $c(t)));
  for (; o < i.length && o < l.length && i.charCodeAt(o) == l.charCodeAt(o); )
    o++;
  r.push({ from: n.from + o, to: n.from + i.length, insert: l.slice(o) });
}), { userEvent: "delete.dedent" })), !0), Qpe = [
  { key: "Ctrl-b", run: _x, shift: Lx, preventDefault: !0 },
  { key: "Ctrl-f", run: Cx, shift: Rx },
  { key: "Ctrl-p", run: Ex, shift: Bx },
  { key: "Ctrl-n", run: Dx, shift: Px },
  { key: "Ctrl-a", run: kpe, shift: Ipe },
  { key: "Ctrl-e", run: _pe, shift: Npe },
  { key: "Ctrl-d", run: qx },
  { key: "Ctrl-h", run: If },
  { key: "Ctrl-k", run: Vx },
  { key: "Ctrl-Alt-h", run: zx },
  { key: "Ctrl-o", run: zpe },
  { key: "Ctrl-t", run: Vpe },
  { key: "Ctrl-v", run: Rf }
], ege = /* @__PURE__ */ [
  { key: "ArrowLeft", run: _x, shift: Lx, preventDefault: !0 },
  { key: "Mod-ArrowLeft", mac: "Alt-ArrowLeft", run: dpe, shift: Ape, preventDefault: !0 },
  { mac: "Cmd-ArrowLeft", run: wpe, shift: Lpe, preventDefault: !0 },
  { key: "ArrowRight", run: Cx, shift: Rx, preventDefault: !0 },
  { key: "Mod-ArrowRight", mac: "Alt-ArrowRight", run: ppe, shift: Epe, preventDefault: !0 },
  { mac: "Cmd-ArrowRight", run: xpe, shift: Rpe, preventDefault: !0 },
  { key: "ArrowUp", run: Ex, shift: Bx, preventDefault: !0 },
  { mac: "Cmd-ArrowUp", run: c1, shift: h1 },
  { mac: "Ctrl-ArrowUp", run: s1, shift: o1 },
  { key: "ArrowDown", run: Dx, shift: Px, preventDefault: !0 },
  { mac: "Cmd-ArrowDown", run: a1, shift: u1 },
  { mac: "Ctrl-ArrowDown", run: Rf, shift: l1 },
  { key: "PageUp", run: s1, shift: o1 },
  { key: "PageDown", run: Rf, shift: l1 },
  { key: "Home", run: vpe, shift: Ope, preventDefault: !0 },
  { key: "Mod-Home", run: c1, shift: h1 },
  { key: "End", run: bpe, shift: Mpe, preventDefault: !0 },
  { key: "Mod-End", run: a1, shift: u1 },
  { key: "Enter", run: Jpe },
  { key: "Mod-a", run: Bpe },
  { key: "Backspace", run: If, shift: If },
  { key: "Delete", run: qx },
  { key: "Mod-Backspace", mac: "Alt-Backspace", run: zx },
  { key: "Mod-Delete", mac: "Alt-Delete", run: qpe },
  { mac: "Mod-Backspace", run: Hpe },
  { mac: "Mod-Delete", run: Vx }
].concat(/* @__PURE__ */ Qpe.map((t) => ({ mac: t.key, run: t.run, shift: t.shift }))), tge = /* @__PURE__ */ [
  { key: "Alt-ArrowLeft", mac: "Ctrl-ArrowLeft", run: mpe, shift: Dpe },
  { key: "Alt-ArrowRight", mac: "Ctrl-ArrowRight", run: ype, shift: Tpe },
  { key: "Alt-ArrowUp", run: Upe },
  { key: "Shift-Alt-ArrowUp", run: jpe },
  { key: "Alt-ArrowDown", run: Wpe },
  { key: "Shift-Alt-ArrowDown", run: Gpe },
  { key: "Escape", run: $pe },
  { key: "Mod-Enter", run: Zpe },
  { key: "Alt-l", mac: "Ctrl-l", run: Ppe },
  { key: "Mod-i", run: Fpe, preventDefault: !0 },
  { key: "Mod-[", run: Yx },
  { key: "Mod-]", run: Gx },
  { key: "Mod-Alt-\\", run: Xpe },
  { key: "Shift-Mod-k", run: Ype },
  { key: "Shift-Mod-\\", run: Spe },
  { key: "Mod-/", run: Gde },
  { key: "Alt-A", run: Kde }
].concat(ege), nge = { key: "Tab", run: Gx, shift: Yx };
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
    Kx(t, arguments[e]);
  return t;
}
function Kx(t, e) {
  if (typeof e == "string")
    t.appendChild(document.createTextNode(e));
  else if (e != null)
    if (e.nodeType != null)
      t.appendChild(e);
    else if (Array.isArray(e))
      for (var n = 0; n < e.length; n++)
        Kx(t, e[n]);
    else
      throw new RangeError("Unsupported child node: " + e);
}
const f1 = typeof String.prototype.normalize == "function" ? (t) => t.normalize("NFKD") : (t) => t;
class is {
  constructor(e, n, r = 0, i = e.length, s, o) {
    this.test = o, this.value = { from: 0, to: 0 }, this.done = !1, this.matches = [], this.buffer = "", this.bufferPos = 0, this.iter = e.iterRange(r, i), this.bufferStart = r, this.normalize = s ? (l) => s(f1(l)) : f1, this.query = this.normalize(n);
  }
  peek() {
    if (this.bufferPos == this.buffer.length) {
      if (this.bufferStart += this.buffer.length, this.iter.next(), this.iter.done)
        return -1;
      this.bufferPos = 0, this.buffer = this.iter.value;
    }
    return We(this.buffer, this.bufferPos);
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
      let n = Bd(e), r = this.bufferStart + this.bufferPos;
      this.bufferPos += Mt(e);
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
typeof Symbol < "u" && (is.prototype[Symbol.iterator] = function() {
  return this;
});
const Jx = { from: -1, to: -1, match: /* @__PURE__ */ /.*/.exec("") }, ip = "gm" + (/x/.unicode == null ? "" : "u");
class Zx {
  constructor(e, n, r, i = 0, s = e.length) {
    if (this.text = e, this.to = s, this.curLine = "", this.done = !1, this.value = Jx, /\\[sWDnr]|\n|\r|\[\^/.test(n))
      return new Xx(e, n, r, i, s);
    this.re = new RegExp(n, ip + (r != null && r.ignoreCase ? "i" : "")), this.test = r == null ? void 0 : r.test, this.iter = e.iter();
    let o = e.lineAt(i);
    this.curLineStart = o.from, this.matchPos = Vc(e, i), this.getLine(this.curLineStart);
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
        if (this.matchPos = Vc(this.text, i + (r == i ? 1 : 0)), r == this.curLineStart + this.curLine.length && this.nextLine(), (r < i || r > this.value.to) && (!this.test || this.test(r, i, n)))
          return this.value = { from: r, to: i, match: n }, this;
        e = this.matchPos - this.curLineStart;
      } else if (this.curLineStart + this.curLine.length < this.to)
        this.nextLine(), e = 0;
      else
        return this.done = !0, this;
    }
  }
}
const tu = /* @__PURE__ */ new WeakMap();
class Hi {
  constructor(e, n) {
    this.from = e, this.text = n;
  }
  get to() {
    return this.from + this.text.length;
  }
  static get(e, n, r) {
    let i = tu.get(e);
    if (!i || i.from >= r || i.to <= n) {
      let l = new Hi(n, e.sliceString(n, r));
      return tu.set(e, l), l;
    }
    if (i.from == n && i.to == r)
      return i;
    let { text: s, from: o } = i;
    return o > n && (s = e.sliceString(n, o) + s, o = n), i.to < r && (s += e.sliceString(i.to, r)), tu.set(e, new Hi(o, s)), new Hi(n, s.slice(n - o, r - o));
  }
}
class Xx {
  constructor(e, n, r, i, s) {
    this.text = e, this.to = s, this.done = !1, this.value = Jx, this.matchPos = Vc(e, i), this.re = new RegExp(n, ip + (r != null && r.ignoreCase ? "i" : "")), this.test = r == null ? void 0 : r.test, this.flat = Hi.get(e, i, this.chunkEnd(i + 5e3));
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
          return this.value = { from: r, to: i, match: n }, this.matchPos = Vc(this.text, i + (r == i ? 1 : 0)), this;
      }
      if (this.flat.to == this.to)
        return this.done = !0, this;
      this.flat = Hi.get(this.text, this.flat.from, this.chunkEnd(this.flat.from + this.flat.text.length * 2));
    }
  }
}
typeof Symbol < "u" && (Zx.prototype[Symbol.iterator] = Xx.prototype[Symbol.iterator] = function() {
  return this;
});
function rge(t) {
  try {
    return new RegExp(t, ip), !0;
  } catch {
    return !1;
  }
}
function Vc(t, e) {
  if (e >= t.length)
    return e;
  let n = t.lineAt(e), r;
  for (; e < n.to && (r = n.text.charCodeAt(e - n.from)) >= 56320 && r < 57344; )
    e++;
  return e;
}
function Nf(t) {
  let e = pe("input", { class: "cm-textfield", name: "line" }), n = pe("form", {
    class: "cm-gotoLine",
    onkeydown: (i) => {
      i.keyCode == 27 ? (i.preventDefault(), t.dispatch({ effects: Uc.of(!1) }), t.focus()) : i.keyCode == 13 && (i.preventDefault(), r());
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
    let d = s.doc.line(Math.max(1, Math.min(s.doc.lines, f))), p = S.cursor(d.from + Math.max(0, Math.min(u, d.length)));
    t.dispatch({
      effects: [Uc.of(!1), M.scrollIntoView(p.from, { y: "center" })],
      selection: p
    }), t.focus();
  }
  return { dom: n };
}
const Uc = /* @__PURE__ */ j.define(), d1 = /* @__PURE__ */ Ie.define({
  create() {
    return !0;
  },
  update(t, e) {
    for (let n of e.effects)
      n.is(Uc) && (t = n.value);
    return t;
  },
  provide: (t) => _o.from(t, (e) => e ? Nf : null)
}), ige = (t) => {
  let e = ko(t, Nf);
  if (!e) {
    let n = [Uc.of(!0)];
    t.state.field(d1, !1) == null && n.push(j.appendConfig.of([d1, sge])), t.dispatch({ effects: n }), e = ko(t, Nf);
  }
  return e && e.dom.querySelector("input").focus(), !0;
}, sge = /* @__PURE__ */ M.baseTheme({
  ".cm-panel.cm-gotoLine": {
    padding: "2px 6px 4px",
    "& label": { fontSize: "80%" }
  }
}), oge = {
  highlightWordAroundCursor: !1,
  minSelectionLength: 1,
  maxMatches: 100,
  wholeWords: !1
}, Qx = /* @__PURE__ */ N.define({
  combine(t) {
    return Tn(t, oge, {
      highlightWordAroundCursor: (e, n) => e || n,
      minSelectionLength: Math.min,
      maxMatches: Math.min
    });
  }
});
function lge(t) {
  let e = [fge, uge];
  return t && e.push(Qx.of(t)), e;
}
const cge = /* @__PURE__ */ P.mark({ class: "cm-selectionMatch" }), age = /* @__PURE__ */ P.mark({ class: "cm-selectionMatch cm-selectionMatch-main" });
function p1(t, e, n, r) {
  return (n == 0 || t(e.sliceDoc(n - 1, n)) != ke.Word) && (r == e.doc.length || t(e.sliceDoc(r, r + 1)) != ke.Word);
}
function hge(t, e, n, r) {
  return t(e.sliceDoc(n, n + 1)) == ke.Word && t(e.sliceDoc(r - 1, r)) == ke.Word;
}
const uge = /* @__PURE__ */ Ae.fromClass(class {
  constructor(t) {
    this.decorations = this.getDeco(t);
  }
  update(t) {
    (t.selectionSet || t.docChanged || t.viewportChanged) && (this.decorations = this.getDeco(t.view));
  }
  getDeco(t) {
    let e = t.state.facet(Qx), { state: n } = t, r = n.selection;
    if (r.ranges.length > 1)
      return P.none;
    let i = r.main, s, o = null;
    if (i.empty) {
      if (!e.highlightWordAroundCursor)
        return P.none;
      let c = n.wordAt(i.head);
      if (!c)
        return P.none;
      o = n.charCategorizer(i.head), s = n.sliceDoc(c.from, c.to);
    } else {
      let c = i.to - i.from;
      if (c < e.minSelectionLength || c > 200)
        return P.none;
      if (e.wholeWords) {
        if (s = n.sliceDoc(i.from, i.to), o = n.charCategorizer(i.head), !(p1(o, n, i.from, i.to) && hge(o, n, i.from, i.to)))
          return P.none;
      } else if (s = n.sliceDoc(i.from, i.to).trim(), !s)
        return P.none;
    }
    let l = [];
    for (let c of t.visibleRanges) {
      let a = new is(n.doc, s, c.from, c.to);
      for (; !a.next().done; ) {
        let { from: h, to: u } = a.value;
        if ((!o || p1(o, n, h, u)) && (i.empty && h <= i.from && u >= i.to ? l.push(age.range(h, u)) : (h >= i.to || u <= i.from) && l.push(cge.range(h, u)), l.length > e.maxMatches))
          return P.none;
      }
    }
    return P.set(l);
  }
}, {
  decorations: (t) => t.decorations
}), fge = /* @__PURE__ */ M.baseTheme({
  ".cm-selectionMatch": { backgroundColor: "#99ff7780" },
  ".cm-searchMatch .cm-selectionMatch": { backgroundColor: "transparent" }
}), dge = ({ state: t, dispatch: e }) => {
  let { selection: n } = t, r = S.create(n.ranges.map((i) => t.wordAt(i.head) || S.cursor(i.head)), n.mainIndex);
  return r.eq(n) ? !1 : (e(t.update({ selection: r })), !0);
};
function pge(t, e) {
  let { main: n, ranges: r } = t.selection, i = t.wordAt(n.head), s = i && i.from == n.from && i.to == n.to;
  for (let o = !1, l = new is(t.doc, e, r[r.length - 1].to); ; )
    if (l.next(), l.done) {
      if (o)
        return null;
      l = new is(t.doc, e, 0, Math.max(0, r[r.length - 1].from - 1)), o = !0;
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
const gge = ({ state: t, dispatch: e }) => {
  let { ranges: n } = t.selection;
  if (n.some((s) => s.from === s.to))
    return dge({ state: t, dispatch: e });
  let r = t.sliceDoc(n[0].from, n[0].to);
  if (t.selection.ranges.some((s) => t.sliceDoc(s.from, s.to) != r))
    return !1;
  let i = pge(t, r);
  return i ? (e(t.update({
    selection: t.selection.addRange(S.range(i.from, i.to), !1),
    effects: M.scrollIntoView(i.to)
  })), !0) : !1;
}, Cs = /* @__PURE__ */ N.define({
  combine(t) {
    return Tn(t, {
      top: !1,
      caseSensitive: !1,
      literal: !1,
      regexp: !1,
      wholeWord: !1,
      createPanel: (e) => new Ege(e),
      scrollToMatch: (e) => M.scrollIntoView(e)
    });
  }
});
class ek {
  constructor(e) {
    this.search = e.search, this.caseSensitive = !!e.caseSensitive, this.literal = !!e.literal, this.regexp = !!e.regexp, this.replace = e.replace || "", this.valid = !!this.search && (!this.regexp || rge(this.search)), this.unquoted = this.unquote(this.search), this.wholeWord = !!e.wholeWord;
  }
  unquote(e) {
    return this.literal ? e : e.replace(/\\([nrt\\])/g, (n, r) => r == "n" ? `
` : r == "r" ? "\r" : r == "t" ? "	" : "\\");
  }
  eq(e) {
    return this.search == e.search && this.replace == e.replace && this.caseSensitive == e.caseSensitive && this.regexp == e.regexp && this.wholeWord == e.wholeWord;
  }
  create() {
    return this.regexp ? new vge(this) : new yge(this);
  }
  getCursor(e, n = 0, r) {
    let i = e.doc ? e : Z.create({ doc: e });
    return r == null && (r = i.doc.length), this.regexp ? Ai(this, i, n, r) : Si(this, i, n, r);
  }
}
class tk {
  constructor(e) {
    this.spec = e;
  }
}
function Si(t, e, n, r) {
  return new is(e.doc, t.unquoted, n, r, t.caseSensitive ? void 0 : (i) => i.toLowerCase(), t.wholeWord ? mge(e.doc, e.charCategorizer(e.selection.main.head)) : void 0);
}
function mge(t, e) {
  return (n, r, i, s) => ((s > n || s + i.length < r) && (s = Math.max(0, n - 2), i = t.sliceString(s, Math.min(t.length, r + 2))), (e(Wc(i, n - s)) != ke.Word || e(jc(i, n - s)) != ke.Word) && (e(jc(i, r - s)) != ke.Word || e(Wc(i, r - s)) != ke.Word));
}
class yge extends tk {
  constructor(e) {
    super(e);
  }
  nextMatch(e, n, r) {
    let i = Si(this.spec, e, r, e.doc.length).nextOverlapping();
    return i.done && (i = Si(this.spec, e, 0, n).nextOverlapping()), i.done ? null : i.value;
  }
  prevMatchInRange(e, n, r) {
    for (let i = r; ; ) {
      let s = Math.max(n, i - 1e4 - this.spec.unquoted.length), o = Si(this.spec, e, s, i), l = null;
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
    let r = Si(this.spec, e, 0, e.doc.length), i = [];
    for (; !r.next().done; ) {
      if (i.length >= n)
        return null;
      i.push(r.value);
    }
    return i;
  }
  highlight(e, n, r, i) {
    let s = Si(this.spec, e, Math.max(0, n - this.spec.unquoted.length), Math.min(r + this.spec.unquoted.length, e.doc.length));
    for (; !s.next().done; )
      i(s.value.from, s.value.to);
  }
}
function Ai(t, e, n, r) {
  return new Zx(e.doc, t.search, {
    ignoreCase: !t.caseSensitive,
    test: t.wholeWord ? bge(e.charCategorizer(e.selection.main.head)) : void 0
  }, n, r);
}
function Wc(t, e) {
  return t.slice(tt(t, e, !1), e);
}
function jc(t, e) {
  return t.slice(e, tt(t, e));
}
function bge(t) {
  return (e, n, r) => !r[0].length || (t(Wc(r.input, r.index)) != ke.Word || t(jc(r.input, r.index)) != ke.Word) && (t(jc(r.input, r.index + r[0].length)) != ke.Word || t(Wc(r.input, r.index + r[0].length)) != ke.Word);
}
class vge extends tk {
  nextMatch(e, n, r) {
    let i = Ai(this.spec, e, r, e.doc.length).next();
    return i.done && (i = Ai(this.spec, e, 0, n).next()), i.done ? null : i.value;
  }
  prevMatchInRange(e, n, r) {
    for (let i = 1; ; i++) {
      let s = Math.max(n, r - i * 1e4), o = Ai(this.spec, e, s, r), l = null;
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
    let r = Ai(this.spec, e, 0, e.doc.length), i = [];
    for (; !r.next().done; ) {
      if (i.length >= n)
        return null;
      i.push(r.value);
    }
    return i;
  }
  highlight(e, n, r, i) {
    let s = Ai(this.spec, e, Math.max(0, n - 250), Math.min(r + 250, e.doc.length));
    for (; !s.next().done; )
      i(s.value.from, s.value.to);
  }
}
const So = /* @__PURE__ */ j.define(), sp = /* @__PURE__ */ j.define(), ur = /* @__PURE__ */ Ie.define({
  create(t) {
    return new nu(Bf(t).create(), null);
  },
  update(t, e) {
    for (let n of e.effects)
      n.is(So) ? t = new nu(n.value.create(), t.panel) : n.is(sp) && (t = new nu(t.query, n.value ? op : null));
    return t;
  },
  provide: (t) => _o.from(t, (e) => e.panel)
});
class nu {
  constructor(e, n) {
    this.query = e, this.panel = n;
  }
}
const wge = /* @__PURE__ */ P.mark({ class: "cm-searchMatch" }), xge = /* @__PURE__ */ P.mark({ class: "cm-searchMatch cm-searchMatch-selected" }), kge = /* @__PURE__ */ Ae.fromClass(class {
  constructor(t) {
    this.view = t, this.decorations = this.highlight(t.state.field(ur));
  }
  update(t) {
    let e = t.state.field(ur);
    (e != t.startState.field(ur) || t.docChanged || t.selectionSet || t.viewportChanged) && (this.decorations = this.highlight(e));
  }
  highlight({ query: t, panel: e }) {
    if (!e || !t.spec.valid)
      return P.none;
    let { view: n } = this, r = new Dt();
    for (let i = 0, s = n.visibleRanges, o = s.length; i < o; i++) {
      let { from: l, to: c } = s[i];
      for (; i < o - 1 && c > s[i + 1].from - 2 * 250; )
        c = s[++i].to;
      t.highlight(n.state, l, c, (a, h) => {
        let u = n.state.selection.ranges.some((f) => f.from == a && f.to == h);
        r.add(a, h, u ? xge : wge);
      });
    }
    return r.finish();
  }
}, {
  decorations: (t) => t.decorations
});
function Wo(t) {
  return (e) => {
    let n = e.state.field(ur, !1);
    return n && n.query.spec.valid ? t(e, n) : ik(e);
  };
}
const Gc = /* @__PURE__ */ Wo((t, { query: e }) => {
  let { to: n } = t.state.selection.main, r = e.nextMatch(t.state, n, n);
  if (!r)
    return !1;
  let i = S.single(r.from, r.to), s = t.state.facet(Cs);
  return t.dispatch({
    selection: i,
    effects: [lp(t, r), s.scrollToMatch(i.main, t)],
    userEvent: "select.search"
  }), rk(t), !0;
}), Yc = /* @__PURE__ */ Wo((t, { query: e }) => {
  let { state: n } = t, { from: r } = n.selection.main, i = e.prevMatch(n, r, r);
  if (!i)
    return !1;
  let s = S.single(i.from, i.to), o = t.state.facet(Cs);
  return t.dispatch({
    selection: s,
    effects: [lp(t, i), o.scrollToMatch(s.main, t)],
    userEvent: "select.search"
  }), rk(t), !0;
}), _ge = /* @__PURE__ */ Wo((t, { query: e }) => {
  let n = e.matchAll(t.state, 1e3);
  return !n || !n.length ? !1 : (t.dispatch({
    selection: S.create(n.map((r) => S.range(r.from, r.to))),
    userEvent: "select.search.matches"
  }), !0);
}), Cge = ({ state: t, dispatch: e }) => {
  let n = t.selection;
  if (n.ranges.length > 1 || n.main.empty)
    return !1;
  let { from: r, to: i } = n.main, s = [], o = 0;
  for (let l = new is(t.doc, t.sliceDoc(r, i)); !l.next().done; ) {
    if (s.length > 1e3)
      return !1;
    l.value.from == r && (o = s.length), s.push(S.range(l.value.from, l.value.to));
  }
  return e(t.update({
    selection: S.create(s, o),
    userEvent: "select.search.matches"
  })), !0;
}, g1 = /* @__PURE__ */ Wo((t, { query: e }) => {
  let { state: n } = t, { from: r, to: i } = n.selection.main;
  if (n.readOnly)
    return !1;
  let s = e.nextMatch(n, r, r);
  if (!s)
    return !1;
  let o = [], l, c, a = [];
  if (s.from == r && s.to == i && (c = n.toText(e.getReplacement(s)), o.push({ from: s.from, to: s.to, insert: c }), s = e.nextMatch(n, s.from, s.to), a.push(M.announce.of(n.phrase("replaced match on line $", n.doc.lineAt(r).number) + "."))), s) {
    let h = o.length == 0 || o[0].from >= s.to ? 0 : s.to - s.from - c.length;
    l = S.single(s.from - h, s.to - h), a.push(lp(t, s)), a.push(n.facet(Cs).scrollToMatch(l.main, t));
  }
  return t.dispatch({
    changes: o,
    selection: l,
    effects: a,
    userEvent: "input.replace"
  }), !0;
}), Sge = /* @__PURE__ */ Wo((t, { query: e }) => {
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
    effects: M.announce.of(r),
    userEvent: "input.replace.all"
  }), !0;
});
function op(t) {
  return t.state.facet(Cs).createPanel(t);
}
function Bf(t, e) {
  var n, r, i, s, o;
  let l = t.selection.main, c = l.empty || l.to > l.from + 100 ? "" : t.sliceDoc(l.from, l.to);
  if (e && !c)
    return e;
  let a = t.facet(Cs);
  return new ek({
    search: ((n = e == null ? void 0 : e.literal) !== null && n !== void 0 ? n : a.literal) ? c : c.replace(/\n/g, "\\n"),
    caseSensitive: (r = e == null ? void 0 : e.caseSensitive) !== null && r !== void 0 ? r : a.caseSensitive,
    literal: (i = e == null ? void 0 : e.literal) !== null && i !== void 0 ? i : a.literal,
    regexp: (s = e == null ? void 0 : e.regexp) !== null && s !== void 0 ? s : a.regexp,
    wholeWord: (o = e == null ? void 0 : e.wholeWord) !== null && o !== void 0 ? o : a.wholeWord
  });
}
function nk(t) {
  let e = ko(t, op);
  return e && e.dom.querySelector("[main-field]");
}
function rk(t) {
  let e = nk(t);
  e && e == t.root.activeElement && e.select();
}
const ik = (t) => {
  let e = t.state.field(ur, !1);
  if (e && e.panel) {
    let n = nk(t);
    if (n && n != t.root.activeElement) {
      let r = Bf(t.state, e.query.spec);
      r.valid && t.dispatch({ effects: So.of(r) }), n.focus(), n.select();
    }
  } else
    t.dispatch({ effects: [
      sp.of(!0),
      e ? So.of(Bf(t.state, e.query.spec)) : j.appendConfig.of(Tge)
    ] });
  return !0;
}, sk = (t) => {
  let e = t.state.field(ur, !1);
  if (!e || !e.panel)
    return !1;
  let n = ko(t, op);
  return n && n.dom.contains(t.root.activeElement) && t.focus(), t.dispatch({ effects: sp.of(!1) }), !0;
}, Age = [
  { key: "Mod-f", run: ik, scope: "editor search-panel" },
  { key: "F3", run: Gc, shift: Yc, scope: "editor search-panel", preventDefault: !0 },
  { key: "Mod-g", run: Gc, shift: Yc, scope: "editor search-panel", preventDefault: !0 },
  { key: "Escape", run: sk, scope: "editor search-panel" },
  { key: "Mod-Shift-l", run: Cge },
  { key: "Alt-g", run: ige },
  { key: "Mod-d", run: gge, preventDefault: !0 }
];
class Ege {
  constructor(e) {
    this.view = e;
    let n = this.query = e.state.field(ur).query.spec;
    this.commit = this.commit.bind(this), this.searchField = pe("input", {
      value: n.search,
      placeholder: xt(e, "Find"),
      "aria-label": xt(e, "Find"),
      class: "cm-textfield",
      name: "search",
      form: "",
      "main-field": "true",
      onchange: this.commit,
      onkeyup: this.commit
    }), this.replaceField = pe("input", {
      value: n.replace,
      placeholder: xt(e, "Replace"),
      "aria-label": xt(e, "Replace"),
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
      r("next", () => Gc(e), [xt(e, "next")]),
      r("prev", () => Yc(e), [xt(e, "previous")]),
      r("select", () => _ge(e), [xt(e, "all")]),
      pe("label", null, [this.caseField, xt(e, "match case")]),
      pe("label", null, [this.reField, xt(e, "regexp")]),
      pe("label", null, [this.wordField, xt(e, "by word")]),
      ...e.state.readOnly ? [] : [
        pe("br"),
        this.replaceField,
        r("replace", () => g1(e), [xt(e, "replace")]),
        r("replaceAll", () => Sge(e), [xt(e, "replace all")])
      ],
      pe("button", {
        name: "close",
        onclick: () => sk(e),
        "aria-label": xt(e, "close"),
        type: "button"
      }, ["\xD7"])
    ]);
  }
  commit() {
    let e = new ek({
      search: this.searchField.value,
      caseSensitive: this.caseField.checked,
      regexp: this.reField.checked,
      wholeWord: this.wordField.checked,
      replace: this.replaceField.value
    });
    e.eq(this.query) || (this.query = e, this.view.dispatch({ effects: So.of(e) }));
  }
  keydown(e) {
    zue(this.view, e, "search-panel") ? e.preventDefault() : e.keyCode == 13 && e.target == this.searchField ? (e.preventDefault(), (e.shiftKey ? Yc : Gc)(this.view)) : e.keyCode == 13 && e.target == this.replaceField && (e.preventDefault(), g1(this.view));
  }
  update(e) {
    for (let n of e.transactions)
      for (let r of n.effects)
        r.is(So) && !r.value.eq(this.query) && this.setQuery(r.value);
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
    return this.view.state.facet(Cs).top;
  }
}
function xt(t, e) {
  return t.state.phrase(e);
}
const Tl = 30, Ml = /[\s\.,:;?!]/;
function lp(t, { from: e, to: n }) {
  let r = t.state.doc.lineAt(e), i = t.state.doc.lineAt(n).to, s = Math.max(r.from, e - Tl), o = Math.min(i, n + Tl), l = t.state.sliceDoc(s, o);
  if (s != r.from) {
    for (let c = 0; c < Tl; c++)
      if (!Ml.test(l[c + 1]) && Ml.test(l[c])) {
        l = l.slice(c);
        break;
      }
  }
  if (o != i) {
    for (let c = l.length - 1; c > l.length - Tl; c--)
      if (!Ml.test(l[c - 1]) && Ml.test(l[c])) {
        l = l.slice(0, c);
        break;
      }
  }
  return M.announce.of(`${t.state.phrase("current match")}. ${l} ${t.state.phrase("on line")} ${r.number}.`);
}
const Dge = /* @__PURE__ */ M.baseTheme({
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
}), Tge = [
  ur,
  /* @__PURE__ */ Sr.low(kge),
  Dge
];
class ok {
  constructor(e, n, r) {
    this.state = e, this.pos = n, this.explicit = r, this.abortListeners = [];
  }
  tokenBefore(e) {
    let n = rt(this.state).resolveInner(this.pos, -1);
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
    let n = this.state.doc.lineAt(this.pos), r = Math.max(n.from, this.pos - 250), i = n.text.slice(r - n.from, this.pos - n.from), s = i.search(lk(e, !1));
    return s < 0 ? null : { from: r + s, to: this.pos, text: i.slice(s) };
  }
  get aborted() {
    return this.abortListeners == null;
  }
  addEventListener(e, n) {
    e == "abort" && this.abortListeners && this.abortListeners.push(n);
  }
}
function m1(t) {
  let e = Object.keys(t).join(""), n = /\w/.test(e);
  return n && (e = e.replace(/\w/g, "")), `[${n ? "\\w" : ""}${e.replace(/[^\w\s]/g, "\\$&")}]`;
}
function Mge(t) {
  let e = /* @__PURE__ */ Object.create(null), n = /* @__PURE__ */ Object.create(null);
  for (let { label: i } of t) {
    e[i[0]] = !0;
    for (let s = 1; s < i.length; s++)
      n[i[s]] = !0;
  }
  let r = m1(e) + m1(n) + "*$";
  return [new RegExp("^" + r), new RegExp(r)];
}
function Oge(t) {
  let e = t.map((i) => typeof i == "string" ? { label: i } : i), [n, r] = e.every((i) => /^\w+$/.test(i.label)) ? [/\w*$/, /\w+$/] : Mge(e);
  return (i) => {
    let s = i.matchBefore(r);
    return s || i.explicit ? { from: s ? s.from : i.pos, options: e, validFor: n } : null;
  };
}
class y1 {
  constructor(e, n, r, i) {
    this.completion = e, this.source = n, this.match = r, this.score = i;
  }
}
function fr(t) {
  return t.selection.main.from;
}
function lk(t, e) {
  var n;
  let { source: r } = t, i = e && r[0] != "^", s = r[r.length - 1] != "$";
  return !i && !s ? t : new RegExp(`${i ? "^" : ""}(?:${r})${s ? "$" : ""}`, (n = t.flags) !== null && n !== void 0 ? n : t.ignoreCase ? "i" : "");
}
const Lge = /* @__PURE__ */ en.define();
function Rge(t, e, n, r) {
  let { main: i } = t.selection, s = n - i.from, o = r - i.from;
  return Object.assign(Object.assign({}, t.changeByRange((l) => l != i && n != r && t.sliceDoc(l.from + s, l.from + o) != t.sliceDoc(n, r) ? { range: l } : {
    changes: { from: l.from + s, to: r == i.from ? l.to : l.from + o, insert: e },
    range: S.cursor(l.from + s + e.length)
  })), { userEvent: "input.complete" });
}
const b1 = /* @__PURE__ */ new WeakMap();
function Ige(t) {
  if (!Array.isArray(t))
    return t;
  let e = b1.get(t);
  return e || b1.set(t, e = Oge(t)), e;
}
const cp = /* @__PURE__ */ j.define(), Ao = /* @__PURE__ */ j.define();
class Nge {
  constructor(e) {
    this.pattern = e, this.chars = [], this.folded = [], this.any = [], this.precise = [], this.byWord = [], this.score = 0, this.matched = [];
    for (let n = 0; n < e.length; ) {
      let r = We(e, n), i = Mt(r);
      this.chars.push(r);
      let s = e.slice(n, n + i), o = s.toUpperCase();
      this.folded.push(We(o == s ? s.toLowerCase() : o, 0)), n += i;
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
      let b = We(e, 0), k = Mt(b), v = k == e.length ? 0 : -100;
      if (b != n[0])
        if (b == r[0])
          v += -200;
        else
          return !1;
      return this.ret(v, [0, k]);
    }
    let l = e.indexOf(this.pattern);
    if (l == 0)
      return this.ret(e.length == this.pattern.length ? 0 : -100, [0, this.pattern.length]);
    let c = n.length, a = 0;
    if (l < 0) {
      for (let b = 0, k = Math.min(e.length, 200); b < k && a < c; ) {
        let v = We(e, b);
        (v == n[a] || v == r[a]) && (i[a++] = b), b += Mt(v);
      }
      if (a < c)
        return !1;
    }
    let h = 0, u = 0, f = !1, d = 0, p = -1, g = -1, m = /[a-z]/.test(e), y = !0;
    for (let b = 0, k = Math.min(e.length, 200), v = 0; b < k && u < c; ) {
      let x = We(e, b);
      l < 0 && (h < c && x == n[h] && (s[h++] = b), d < c && (x == n[d] || x == r[d] ? (d == 0 && (p = b), g = b + 1, d++) : d = 0));
      let w, C = x < 255 ? x >= 48 && x <= 57 || x >= 97 && x <= 122 ? 2 : x >= 65 && x <= 90 ? 1 : 0 : (w = Bd(x)) != w.toLowerCase() ? 1 : w != w.toUpperCase() ? 2 : 0;
      (!b || C == 1 && m || v == 0 && C != 0) && (n[u] == x || r[u] == x && (f = !0) ? o[u++] = b : o.length && (y = !1)), v = C, b += Mt(x);
    }
    return u == c && o[0] == 0 && y ? this.result(-100 + (f ? -200 : 0), o, e) : d == c && p == 0 ? this.ret(-200 - e.length + (g == e.length ? 0 : -100), [0, g]) : l > -1 ? this.ret(-700 - e.length, [l, l + this.pattern.length]) : d == c ? this.ret(-200 + -700 - e.length, [p, g]) : u == c ? this.result(-100 + (f ? -200 : 0) + -700 + (y ? 0 : -1100), o, e) : n.length == 2 ? !1 : this.result((i[0] ? -700 : 0) + -200 + -1100, i, e);
  }
  result(e, n, r) {
    let i = [], s = 0;
    for (let o of n) {
      let l = o + (this.astral ? Mt(We(r, o)) : 1);
      s && i[s - 1] == o ? i[s - 1] = l : (i[s++] = o, i[s++] = l);
    }
    return this.ret(e - r.length, i);
  }
}
const wt = /* @__PURE__ */ N.define({
  combine(t) {
    return Tn(t, {
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
      positionInfo: Bge,
      compareCompletions: (e, n) => e.label.localeCompare(n.label),
      interactionDelay: 75
    }, {
      defaultKeymap: (e, n) => e && n,
      closeOnBlur: (e, n) => e && n,
      icons: (e, n) => e && n,
      tooltipClass: (e, n) => (r) => v1(e(r), n(r)),
      optionClass: (e, n) => (r) => v1(e(r), n(r)),
      addToOptions: (e, n) => e.concat(n)
    });
  }
});
function v1(t, e) {
  return t ? e ? t + " " + e : t : e;
}
function Bge(t, e, n, r, i) {
  let s = t.textDirection == Ce.RTL, o = s, l = !1, c = "top", a, h, u = e.left - i.left, f = i.right - e.right, d = r.right - r.left, p = r.bottom - r.top;
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
function Pge(t) {
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
function w1(t, e, n) {
  if (t <= n)
    return { from: 0, to: t };
  if (e < 0 && (e = 0), e <= t >> 1) {
    let i = Math.floor(e / n);
    return { from: i * n, to: (i + 1) * n };
  }
  let r = Math.floor((t - e) / n);
  return { from: t - (r + 1) * n, to: t - r * n };
}
class Fge {
  constructor(e, n, r) {
    this.view = e, this.stateField = n, this.applyCompletion = r, this.info = null, this.infoDestroy = null, this.placeInfoReq = {
      read: () => this.measureInfo(),
      write: (c) => this.placeInfo(c),
      key: this
    }, this.space = null, this.currentClass = "";
    let i = e.state.field(n), { options: s, selected: o } = i.open, l = e.state.facet(wt);
    this.optionContent = Pge(l), this.optionClass = l.optionClass, this.tooltipClass = l.tooltipClass, this.range = w1(s.length, o, l.maxRenderedOptions), this.dom = document.createElement("div"), this.dom.className = "cm-tooltip-autocomplete", this.updateTooltipClass(e.state), this.dom.addEventListener("mousedown", (c) => {
      for (let a = c.target, h; a && a != this.dom; a = a.parentNode)
        if (a.nodeName == "LI" && (h = /-(\d+)$/.exec(a.id)) && +h[1] < s.length) {
          this.applyCompletion(e, s[+h[1]]), c.preventDefault();
          return;
        }
    }), this.dom.addEventListener("focusout", (c) => {
      let a = e.state.field(this.stateField, !1);
      a && a.tooltip && e.state.facet(wt).closeOnBlur && c.relatedTarget != e.contentDOM && e.dispatch({ effects: Ao.of(null) });
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
    if ((n.selected > -1 && n.selected < this.range.from || n.selected >= this.range.to) && (this.range = w1(n.options.length, n.selected, this.view.state.facet(wt).maxRenderedOptions), this.list.remove(), this.list = this.dom.appendChild(this.createListBox(n.options, e.id, this.range)), this.list.addEventListener("scroll", () => {
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
      }).catch((o) => It(this.view.state, o, "completion info")) : this.addInfoPane(s, r);
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
    return n && qge(this.list, n), n;
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
    return i.top > Math.min(s.bottom, n.bottom) - 10 || i.bottom < Math.max(s.top, n.top) + 10 ? null : this.view.state.facet(wt).positionInfo(this.view, n, i, r, s);
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
function $ge(t, e) {
  return (n) => new Fge(n, t, e);
}
function qge(t, e) {
  let n = t.getBoundingClientRect(), r = e.getBoundingClientRect();
  r.top < n.top ? t.scrollTop -= n.top - r.top : r.bottom > n.bottom && (t.scrollTop += r.bottom - n.bottom);
}
function x1(t) {
  return (t.boost || 0) * 100 + (t.apply ? 10 : 0) + (t.info ? 5 : 0) + (t.type ? 1 : 0);
}
function Hge(t, e) {
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
          i(new y1(h, c.source, a ? a(h) : [], 1e9 - n.length));
      else {
        let h = new Nge(e.sliceDoc(c.from, c.to));
        for (let u of c.result.options)
          if (h.match(u.label)) {
            let f = u.displayLabel ? a ? a(u, h.matched) : [] : h.matched;
            i(new y1(u, c.source, f, h.score + (u.boost || 0)));
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
  let s = [], o = null, l = e.facet(wt).compareCompletions;
  for (let c of n.sort((a, h) => h.score - a.score || l(a.completion, h.completion))) {
    let a = c.completion;
    !o || o.label != a.label || o.detail != a.detail || o.type != null && a.type != null && o.type != a.type || o.apply != a.apply || o.boost != a.boost ? s.push(c) : x1(c.completion) > x1(o) && (s[s.length - 1] = c), o = c.completion;
  }
  return s;
}
class Li {
  constructor(e, n, r, i, s, o) {
    this.options = e, this.attrs = n, this.tooltip = r, this.timestamp = i, this.selected = s, this.disabled = o;
  }
  setSelected(e, n) {
    return e == this.selected || e >= this.options.length ? this : new Li(this.options, k1(n, e), this.tooltip, this.timestamp, e, this.disabled);
  }
  static build(e, n, r, i, s) {
    let o = Hge(e, n);
    if (!o.length)
      return i && e.some((c) => c.state == 1) ? new Li(i.options, i.attrs, i.tooltip, i.timestamp, i.selected, !0) : null;
    let l = n.facet(wt).selectOnOpen ? 0 : -1;
    if (i && i.selected != l && i.selected != -1) {
      let c = i.options[i.selected].completion;
      for (let a = 0; a < o.length; a++)
        if (o[a].completion == c) {
          l = a;
          break;
        }
    }
    return new Li(o, k1(r, l), {
      pos: e.reduce((c, a) => a.hasResult() ? Math.min(c, a.from) : c, 1e8),
      create: $ge(Ct, hk),
      above: s.aboveCursor
    }, i ? i.timestamp : Date.now(), l, !1);
  }
  map(e) {
    return new Li(this.options, this.attrs, Object.assign(Object.assign({}, this.tooltip), { pos: e.mapPos(this.tooltip.pos) }), this.timestamp, this.selected, this.disabled);
  }
}
class Kc {
  constructor(e, n, r) {
    this.active = e, this.id = n, this.open = r;
  }
  static start() {
    return new Kc(Uge, "cm-ac-" + Math.floor(Math.random() * 2e6).toString(36), null);
  }
  update(e) {
    let { state: n } = e, r = n.facet(wt), s = (r.override || n.languageDataAt("autocomplete", fr(n)).map(Ige)).map((l) => (this.active.find((a) => a.source == l) || new gt(l, this.active.some((a) => a.state != 0) ? 1 : 0)).update(e, r));
    s.length == this.active.length && s.every((l, c) => l == this.active[c]) && (s = this.active);
    let o = this.open;
    o && e.docChanged && (o = o.map(e.changes)), e.selection || s.some((l) => l.hasResult() && e.changes.touchesRange(l.from, l.to)) || !zge(s, this.active) ? o = Li.build(s, n, this.id, o, r) : o && o.disabled && !s.some((l) => l.state == 1) && (o = null), !o && s.every((l) => l.state != 1) && s.some((l) => l.hasResult()) && (s = s.map((l) => l.hasResult() ? new gt(l.source, 0) : l));
    for (let l of e.effects)
      l.is(ak) && (o = o && o.setSelected(l.value, this.id));
    return s == this.active && o == this.open ? this : new Kc(s, this.id, o);
  }
  get tooltip() {
    return this.open ? this.open.tooltip : null;
  }
  get attrs() {
    return this.open ? this.open.attrs : Vge;
  }
}
function zge(t, e) {
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
const Vge = {
  "aria-autocomplete": "list"
};
function k1(t, e) {
  let n = {
    "aria-autocomplete": "list",
    "aria-haspopup": "listbox",
    "aria-controls": t
  };
  return e > -1 && (n["aria-activedescendant"] = t + "-" + e), n;
}
const Uge = [];
function Pf(t) {
  return t.isUserEvent("input.type") ? "input" : t.isUserEvent("delete.backward") ? "delete" : null;
}
class gt {
  constructor(e, n, r = -1) {
    this.source = e, this.state = n, this.explicitPos = r;
  }
  hasResult() {
    return !1;
  }
  update(e, n) {
    let r = Pf(e), i = this;
    r ? i = i.handleUserEvent(e, r, n) : e.docChanged ? i = i.handleChange(e) : e.selection && i.state != 0 && (i = new gt(i.source, 0));
    for (let s of e.effects)
      if (s.is(cp))
        i = new gt(i.source, 1, s.value ? fr(e.state) : -1);
      else if (s.is(Ao))
        i = new gt(i.source, 0);
      else if (s.is(ck))
        for (let o of s.value)
          o.source == i.source && (i = o);
    return i;
  }
  handleUserEvent(e, n, r) {
    return n == "delete" || !r.activateOnTyping ? this.map(e.changes) : new gt(this.source, 1);
  }
  handleChange(e) {
    return e.changes.touchesRange(fr(e.startState)) ? new gt(this.source, 0) : this.map(e.changes);
  }
  map(e) {
    return e.empty || this.explicitPos < 0 ? this : new gt(this.source, this.state, e.mapPos(this.explicitPos));
  }
}
class zi extends gt {
  constructor(e, n, r, i, s) {
    super(e, 2, n), this.result = r, this.from = i, this.to = s;
  }
  hasResult() {
    return !0;
  }
  handleUserEvent(e, n, r) {
    var i;
    let s = e.changes.mapPos(this.from), o = e.changes.mapPos(this.to, 1), l = fr(e.state);
    if ((this.explicitPos < 0 ? l <= s : l < this.from) || l > o || n == "delete" && fr(e.startState) == this.from)
      return new gt(this.source, n == "input" && r.activateOnTyping ? 1 : 0);
    let c = this.explicitPos < 0 ? -1 : e.changes.mapPos(this.explicitPos), a;
    return Wge(this.result.validFor, e.state, s, o) ? new zi(this.source, c, this.result, s, o) : this.result.update && (a = this.result.update(this.result, s, o, new ok(e.state, l, c >= 0))) ? new zi(this.source, c, a, a.from, (i = a.to) !== null && i !== void 0 ? i : fr(e.state)) : new gt(this.source, 1, c);
  }
  handleChange(e) {
    return e.changes.touchesRange(this.from, this.to) ? new gt(this.source, 0) : this.map(e.changes);
  }
  map(e) {
    return e.empty ? this : new zi(this.source, this.explicitPos < 0 ? -1 : e.mapPos(this.explicitPos), this.result, e.mapPos(this.from), e.mapPos(this.to, 1));
  }
}
function Wge(t, e, n, r) {
  if (!t)
    return !1;
  let i = e.sliceDoc(n, r);
  return typeof t == "function" ? t(i, n, r, e) : lk(t, !0).test(i);
}
const ck = /* @__PURE__ */ j.define({
  map(t, e) {
    return t.map((n) => n.map(e));
  }
}), ak = /* @__PURE__ */ j.define(), Ct = /* @__PURE__ */ Ie.define({
  create() {
    return Kc.start();
  },
  update(t, e) {
    return t.update(e);
  },
  provide: (t) => [
    jd.from(t, (e) => e.tooltip),
    M.contentAttributes.from(t, (e) => e.attrs)
  ]
});
function hk(t, e) {
  const n = e.completion.apply || e.completion.label;
  let r = t.state.field(Ct).active.find((i) => i.source == e.source);
  return r instanceof zi ? (typeof n == "string" ? t.dispatch(Object.assign(Object.assign({}, Rge(t.state, n, r.from, r.to)), { annotations: Lge.of(e.completion) })) : n(t, e.completion, r.from, r.to), !0) : !1;
}
function Ol(t, e = "option") {
  return (n) => {
    let r = n.state.field(Ct, !1);
    if (!r || !r.open || r.open.disabled || Date.now() - r.open.timestamp < n.state.facet(wt).interactionDelay)
      return !1;
    let i = 1, s;
    e == "page" && (s = Kw(n, r.open.tooltip)) && (i = Math.max(2, Math.floor(s.dom.offsetHeight / s.dom.querySelector("li").offsetHeight) - 1));
    let { length: o } = r.open.options, l = r.open.selected > -1 ? r.open.selected + i * (t ? 1 : -1) : t ? 0 : o - 1;
    return l < 0 ? l = e == "page" ? 0 : o - 1 : l >= o && (l = e == "page" ? o - 1 : 0), n.dispatch({ effects: ak.of(l) }), !0;
  };
}
const jge = (t) => {
  let e = t.state.field(Ct, !1);
  return t.state.readOnly || !e || !e.open || e.open.selected < 0 || e.open.disabled || Date.now() - e.open.timestamp < t.state.facet(wt).interactionDelay ? !1 : hk(t, e.open.options[e.open.selected]);
}, Gge = (t) => t.state.field(Ct, !1) ? (t.dispatch({ effects: cp.of(!0) }), !0) : !1, Yge = (t) => {
  let e = t.state.field(Ct, !1);
  return !e || !e.active.some((n) => n.state != 0) ? !1 : (t.dispatch({ effects: Ao.of(null) }), !0);
};
class Kge {
  constructor(e, n) {
    this.active = e, this.context = n, this.time = Date.now(), this.updates = [], this.done = void 0;
  }
}
const _1 = 50, Jge = 50, Zge = 1e3, Xge = /* @__PURE__ */ Ae.fromClass(class {
  constructor(t) {
    this.view = t, this.debounceUpdate = -1, this.running = [], this.debounceAccept = -1, this.composing = 0;
    for (let e of t.state.field(Ct).active)
      e.state == 1 && this.startQuery(e);
  }
  update(t) {
    let e = t.state.field(Ct);
    if (!t.selectionSet && !t.docChanged && t.startState.field(Ct) == e)
      return;
    let n = t.transactions.some((r) => (r.selection || r.docChanged) && !Pf(r));
    for (let r = 0; r < this.running.length; r++) {
      let i = this.running[r];
      if (n || i.updates.length + t.transactions.length > Jge && Date.now() - i.time > Zge) {
        for (let s of i.context.abortListeners)
          try {
            s();
          } catch (o) {
            It(this.view.state, o);
          }
        i.context.abortListeners = null, this.running.splice(r--, 1);
      } else
        i.updates.push(...t.transactions);
    }
    if (this.debounceUpdate > -1 && clearTimeout(this.debounceUpdate), this.debounceUpdate = e.active.some((r) => r.state == 1 && !this.running.some((i) => i.active.source == r.source)) ? setTimeout(() => this.startUpdate(), _1) : -1, this.composing != 0)
      for (let r of t.transactions)
        Pf(r) == "input" ? this.composing = 2 : this.composing == 2 && r.selection && (this.composing = 3);
  }
  startUpdate() {
    this.debounceUpdate = -1;
    let { state: t } = this.view, e = t.field(Ct);
    for (let n of e.active)
      n.state == 1 && !this.running.some((r) => r.active.source == n.source) && this.startQuery(n);
  }
  startQuery(t) {
    let { state: e } = this.view, n = fr(e), r = new ok(e, n, t.explicitPos == n), i = new Kge(t, r);
    this.running.push(i), Promise.resolve(t.source(r)).then((s) => {
      i.context.aborted || (i.done = s || null, this.scheduleAccept());
    }, (s) => {
      this.view.dispatch({ effects: Ao.of(null) }), It(this.view.state, s);
    });
  }
  scheduleAccept() {
    this.running.every((t) => t.done !== void 0) ? this.accept() : this.debounceAccept < 0 && (this.debounceAccept = setTimeout(() => this.accept(), _1));
  }
  accept() {
    var t;
    this.debounceAccept > -1 && clearTimeout(this.debounceAccept), this.debounceAccept = -1;
    let e = [], n = this.view.state.facet(wt);
    for (let r = 0; r < this.running.length; r++) {
      let i = this.running[r];
      if (i.done === void 0)
        continue;
      if (this.running.splice(r--, 1), i.done) {
        let o = new zi(i.active.source, i.active.explicitPos, i.done, i.done.from, (t = i.done.to) !== null && t !== void 0 ? t : fr(i.updates.length ? i.updates[0].startState : this.view.state));
        for (let l of i.updates)
          o = o.update(l, n);
        if (o.hasResult()) {
          e.push(o);
          continue;
        }
      }
      let s = this.view.state.field(Ct).active.find((o) => o.source == i.active.source);
      if (s && s.state == 1)
        if (i.done == null) {
          let o = new gt(i.active.source, 0);
          for (let l of i.updates)
            o = o.update(l, n);
          o.state != 1 && e.push(o);
        } else
          this.startQuery(s);
    }
    e.length && this.view.dispatch({ effects: ck.of(e) });
  }
}, {
  eventHandlers: {
    blur(t) {
      let e = this.view.state.field(Ct, !1);
      if (e && e.tooltip && this.view.state.facet(wt).closeOnBlur) {
        let n = e.open && Kw(this.view, e.open.tooltip);
        (!n || !n.dom.contains(t.relatedTarget)) && this.view.dispatch({ effects: Ao.of(null) });
      }
    },
    compositionstart() {
      this.composing = 1;
    },
    compositionend() {
      this.composing == 3 && setTimeout(() => this.view.dispatch({ effects: cp.of(!1) }), 20), this.composing = 0;
    }
  }
}), Qge = /* @__PURE__ */ M.baseTheme({
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
}), Eo = {
  brackets: ["(", "[", "{", "'", '"'],
  before: ")]}:;>",
  stringPrefixes: []
}, Hr = /* @__PURE__ */ j.define({
  map(t, e) {
    let n = e.mapPos(t, -1, ht.TrackAfter);
    return n == null ? void 0 : n;
  }
}), ap = /* @__PURE__ */ new class extends ni {
}();
ap.startSide = 1;
ap.endSide = -1;
const uk = /* @__PURE__ */ Ie.define({
  create() {
    return Q.empty;
  },
  update(t, e) {
    if (e.selection) {
      let n = e.state.doc.lineAt(e.selection.main.head).from, r = e.startState.doc.lineAt(e.startState.selection.main.head).from;
      n != e.changes.mapPos(r, -1) && (t = Q.empty);
    }
    t = t.map(e.changes);
    for (let n of e.effects)
      n.is(Hr) && (t = t.update({ add: [ap.range(n.value, n.value + 1)] }));
    return t;
  }
});
function eme() {
  return [nme, uk];
}
const ru = "()[]{}<>";
function fk(t) {
  for (let e = 0; e < ru.length; e += 2)
    if (ru.charCodeAt(e) == t)
      return ru.charAt(e + 1);
  return Bd(t < 128 ? t : t + 1);
}
function dk(t, e) {
  return t.languageDataAt("closeBrackets", e)[0] || Eo;
}
const tme = typeof navigator == "object" && /* @__PURE__ */ /Android\b/.test(navigator.userAgent), nme = /* @__PURE__ */ M.inputHandler.of((t, e, n, r) => {
  if ((tme ? t.composing : t.compositionStarted) || t.state.readOnly)
    return !1;
  let i = t.state.selection.main;
  if (r.length > 2 || r.length == 2 && Mt(We(r, 0)) == 1 || e != i.from || n != i.to)
    return !1;
  let s = sme(t.state, r);
  return s ? (t.dispatch(s), !0) : !1;
}), rme = ({ state: t, dispatch: e }) => {
  if (t.readOnly)
    return !1;
  let r = dk(t, t.selection.main.head).brackets || Eo.brackets, i = null, s = t.changeByRange((o) => {
    if (o.empty) {
      let l = ome(t.doc, o.head);
      for (let c of r)
        if (c == l && Ba(t.doc, o.head) == fk(We(c, 0)))
          return {
            changes: { from: o.head - c.length, to: o.head + c.length },
            range: S.cursor(o.head - c.length)
          };
    }
    return { range: i = o };
  });
  return i || e(t.update(s, { scrollIntoView: !0, userEvent: "delete.backward" })), !i;
}, ime = [
  { key: "Backspace", run: rme }
];
function sme(t, e) {
  let n = dk(t, t.selection.main.head), r = n.brackets || Eo.brackets;
  for (let i of r) {
    let s = fk(We(i, 0));
    if (e == i)
      return s == i ? ame(t, i, r.indexOf(i + i + i) > -1, n) : lme(t, i, s, n.before || Eo.before);
    if (e == s && pk(t, t.selection.main.from))
      return cme(t, i, s);
  }
  return null;
}
function pk(t, e) {
  let n = !1;
  return t.field(uk).between(0, t.doc.length, (r) => {
    r == e && (n = !0);
  }), n;
}
function Ba(t, e) {
  let n = t.sliceString(e, e + 2);
  return n.slice(0, Mt(We(n, 0)));
}
function ome(t, e) {
  let n = t.sliceString(e - 2, e);
  return Mt(We(n, 0)) == n.length ? n : n.slice(1);
}
function lme(t, e, n, r) {
  let i = null, s = t.changeByRange((o) => {
    if (!o.empty)
      return {
        changes: [{ insert: e, from: o.from }, { insert: n, from: o.to }],
        effects: Hr.of(o.to + e.length),
        range: S.range(o.anchor + e.length, o.head + e.length)
      };
    let l = Ba(t.doc, o.head);
    return !l || /\s/.test(l) || r.indexOf(l) > -1 ? {
      changes: { insert: e + n, from: o.head },
      effects: Hr.of(o.head + e.length),
      range: S.cursor(o.head + e.length)
    } : { range: i = o };
  });
  return i ? null : t.update(s, {
    scrollIntoView: !0,
    userEvent: "input.type"
  });
}
function cme(t, e, n) {
  let r = null, i = t.changeByRange((s) => s.empty && Ba(t.doc, s.head) == n ? {
    changes: { from: s.head, to: s.head + n.length, insert: n },
    range: S.cursor(s.head + n.length)
  } : r = { range: s });
  return r ? null : t.update(i, {
    scrollIntoView: !0,
    userEvent: "input.type"
  });
}
function ame(t, e, n, r) {
  let i = r.stringPrefixes || Eo.stringPrefixes, s = null, o = t.changeByRange((l) => {
    if (!l.empty)
      return {
        changes: [{ insert: e, from: l.from }, { insert: e, from: l.to }],
        effects: Hr.of(l.to + e.length),
        range: S.range(l.anchor + e.length, l.head + e.length)
      };
    let c = l.head, a = Ba(t.doc, c), h;
    if (a == e) {
      if (C1(t, c))
        return {
          changes: { insert: e + e, from: c },
          effects: Hr.of(c + e.length),
          range: S.cursor(c + e.length)
        };
      if (pk(t, c)) {
        let f = n && t.sliceDoc(c, c + e.length * 3) == e + e + e ? e + e + e : e;
        return {
          changes: { from: c, to: c + f.length, insert: f },
          range: S.cursor(c + f.length)
        };
      }
    } else {
      if (n && t.sliceDoc(c - 2 * e.length, c) == e + e && (h = S1(t, c - 2 * e.length, i)) > -1 && C1(t, h))
        return {
          changes: { insert: e + e + e + e, from: c },
          effects: Hr.of(c + e.length),
          range: S.cursor(c + e.length)
        };
      if (t.charCategorizer(c)(a) != ke.Word && S1(t, c, i) > -1 && !hme(t, c, e, i))
        return {
          changes: { insert: e + e, from: c },
          effects: Hr.of(c + e.length),
          range: S.cursor(c + e.length)
        };
    }
    return { range: s = l };
  });
  return s ? null : t.update(o, {
    scrollIntoView: !0,
    userEvent: "input.type"
  });
}
function C1(t, e) {
  let n = rt(t).resolveInner(e + 1);
  return n.parent && n.from == e;
}
function hme(t, e, n, r) {
  let i = rt(t).resolveInner(e, -1), s = r.reduce((o, l) => Math.max(o, l.length), 0);
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
function S1(t, e, n) {
  let r = t.charCategorizer(e);
  if (r(t.sliceDoc(e - 1, e)) != ke.Word)
    return e;
  for (let i of n) {
    let s = e - i.length;
    if (t.sliceDoc(s, e) == i && r(t.sliceDoc(s - 1, s)) != ke.Word)
      return s;
  }
  return -1;
}
function ume(t = {}) {
  return [
    Ct,
    wt.of(t),
    Xge,
    fme,
    Qge
  ];
}
const gk = [
  { key: "Ctrl-Space", run: Gge },
  { key: "Escape", run: Yge },
  { key: "ArrowDown", run: /* @__PURE__ */ Ol(!0) },
  { key: "ArrowUp", run: /* @__PURE__ */ Ol(!1) },
  { key: "PageDown", run: /* @__PURE__ */ Ol(!0, "page") },
  { key: "PageUp", run: /* @__PURE__ */ Ol(!1, "page") },
  { key: "Enter", run: jge }
], fme = /* @__PURE__ */ Sr.highest(/* @__PURE__ */ wo.computeN([wt], (t) => t.facet(wt).defaultKeymap ? [gk] : []));
class dme {
  constructor(e, n, r) {
    this.from = e, this.to = n, this.diagnostic = r;
  }
}
class Pr {
  constructor(e, n, r) {
    this.diagnostics = e, this.panel = n, this.selected = r;
  }
  static init(e, n, r) {
    let i = e, s = r.facet(bk).markerFilter;
    s && (i = s(i));
    let o = P.set(i.map((l) => l.from == l.to || l.from == l.to - 1 && r.doc.lineAt(l.from).to == l.from ? P.widget({
      widget: new kme(l),
      diagnostic: l
    }).range(l.from) : P.mark({
      attributes: { class: "cm-lintRange cm-lintRange-" + l.severity + (l.markClass ? " " + l.markClass : "") },
      diagnostic: l
    }).range(l.from, l.to)), !0);
    return new Pr(o, n, ss(o));
  }
}
function ss(t, e = null, n = 0) {
  let r = null;
  return t.between(n, 1e9, (i, s, { spec: o }) => {
    if (!(e && o.diagnostic != e))
      return r = new dme(i, s, o.diagnostic), !1;
  }), r;
}
function pme(t, e) {
  let n = t.startState.doc.lineAt(e.pos);
  return !!(t.effects.some((r) => r.is(mk)) || t.changes.touchesRange(n.from, n.to));
}
function gme(t, e) {
  return t.field(At, !1) ? e : e.concat(j.appendConfig.of(Sme));
}
const mk = /* @__PURE__ */ j.define(), hp = /* @__PURE__ */ j.define(), yk = /* @__PURE__ */ j.define(), At = /* @__PURE__ */ Ie.define({
  create() {
    return new Pr(P.none, null, null);
  },
  update(t, e) {
    if (e.docChanged) {
      let n = t.diagnostics.map(e.changes), r = null;
      if (t.selected) {
        let i = e.changes.mapPos(t.selected.from, 1);
        r = ss(n, t.selected.diagnostic, i) || ss(n, null, i);
      }
      t = new Pr(n, t.panel, r);
    }
    for (let n of e.effects)
      n.is(mk) ? t = Pr.init(n.value, t.panel, e.state) : n.is(hp) ? t = new Pr(t.diagnostics, n.value ? Pa.open : null, t.selected) : n.is(yk) && (t = new Pr(t.diagnostics, t.panel, n.value));
    return t;
  },
  provide: (t) => [
    _o.from(t, (e) => e.panel),
    M.decorations.from(t, (e) => e.diagnostics)
  ]
}), mme = /* @__PURE__ */ P.mark({ class: "cm-lintRange cm-lintRange-active" });
function yme(t, e, n) {
  let { diagnostics: r } = t.state.field(At), i = [], s = 2e8, o = 0;
  r.between(e - (n < 0 ? 1 : 0), e + (n > 0 ? 1 : 0), (c, a, { spec: h }) => {
    e >= c && e <= a && (c == a || (e > c || n > 0) && (e < a || n < 0)) && (i.push(h.diagnostic), s = Math.min(c, s), o = Math.max(a, o));
  });
  let l = t.state.facet(bk).tooltipFilter;
  return l && (i = l(i)), i.length ? {
    pos: s,
    end: o,
    above: t.state.doc.lineAt(s).to < o,
    create() {
      return { dom: bme(t, i) };
    }
  } : null;
}
function bme(t, e) {
  return pe("ul", { class: "cm-tooltip-lint" }, e.map((n) => wk(t, n, !1)));
}
const vme = (t) => {
  let e = t.state.field(At, !1);
  (!e || !e.panel) && t.dispatch({ effects: gme(t.state, [hp.of(!0)]) });
  let n = ko(t, Pa.open);
  return n && n.dom.querySelector(".cm-panel-lint ul").focus(), !0;
}, A1 = (t) => {
  let e = t.state.field(At, !1);
  return !e || !e.panel ? !1 : (t.dispatch({ effects: hp.of(!1) }), !0);
}, wme = (t) => {
  let e = t.state.field(At, !1);
  if (!e)
    return !1;
  let n = t.state.selection.main, r = e.diagnostics.iter(n.to + 1);
  return !r.value && (r = e.diagnostics.iter(0), !r.value || r.from == n.from && r.to == n.to) ? !1 : (t.dispatch({ selection: { anchor: r.from, head: r.to }, scrollIntoView: !0 }), !0);
}, xme = [
  { key: "Mod-Shift-m", run: vme, preventDefault: !0 },
  { key: "F8", run: wme }
], bk = /* @__PURE__ */ N.define({
  combine(t) {
    return Object.assign({ sources: t.map((e) => e.source) }, Tn(t.map((e) => e.config), {
      delay: 750,
      markerFilter: null,
      tooltipFilter: null,
      needsRefresh: null
    }, {
      needsRefresh: (e, n) => e ? n ? (r) => e(r) || n(r) : e : n
    }));
  }
});
function vk(t) {
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
function wk(t, e, n) {
  var r;
  let i = n ? vk(e.actions) : [];
  return pe("li", { class: "cm-diagnostic cm-diagnostic-" + e.severity }, pe("span", { class: "cm-diagnosticText" }, e.renderMessage ? e.renderMessage() : e.message), (r = e.actions) === null || r === void 0 ? void 0 : r.map((s, o) => {
    let l = !1, c = (f) => {
      if (f.preventDefault(), l)
        return;
      l = !0;
      let d = ss(t.state.field(At).diagnostics, e);
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
class kme extends tn {
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
class E1 {
  constructor(e, n) {
    this.diagnostic = n, this.id = "item_" + Math.floor(Math.random() * 4294967295).toString(16), this.dom = wk(e, n, !0), this.dom.id = this.id, this.dom.setAttribute("role", "option");
  }
}
class Pa {
  constructor(e) {
    this.view = e, this.items = [];
    let n = (i) => {
      if (i.keyCode == 27)
        A1(this.view), this.view.focus();
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
        let { diagnostic: s } = this.items[this.selectedIndex], o = vk(s.actions);
        for (let l = 0; l < o.length; l++)
          if (o[l].toUpperCase().charCodeAt(0) == i.keyCode) {
            let c = ss(this.view.state.field(At).diagnostics, s);
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
      onclick: () => A1(this.view)
    }, "\xD7")), this.update();
  }
  get selectedIndex() {
    let e = this.view.state.field(At).selected;
    if (!e)
      return -1;
    for (let n = 0; n < this.items.length; n++)
      if (this.items[n].diagnostic == e.diagnostic)
        return n;
    return -1;
  }
  update() {
    let { diagnostics: e, selected: n } = this.view.state.field(At), r = 0, i = !1, s = null;
    for (e.between(0, this.view.state.doc.length, (o, l, { spec: c }) => {
      let a = -1, h;
      for (let u = r; u < this.items.length; u++)
        if (this.items[u].diagnostic == c.diagnostic) {
          a = u;
          break;
        }
      a < 0 ? (h = new E1(this.view, c.diagnostic), this.items.splice(r, 0, h), i = !0) : (h = this.items[a], a > r && (this.items.splice(r, a - r), i = !0)), n && h.diagnostic == n.diagnostic ? h.dom.hasAttribute("aria-selected") || (h.dom.setAttribute("aria-selected", "true"), s = h) : h.dom.hasAttribute("aria-selected") && h.dom.removeAttribute("aria-selected"), r++;
    }); r < this.items.length && !(this.items.length == 1 && this.items[0].diagnostic.from < 0); )
      i = !0, this.items.pop();
    this.items.length == 0 && (this.items.push(new E1(this.view, {
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
    let n = this.view.state.field(At), r = ss(n.diagnostics, this.items[e].diagnostic);
    !r || this.view.dispatch({
      selection: { anchor: r.from, head: r.to },
      scrollIntoView: !0,
      effects: yk.of(r)
    });
  }
  static open(e) {
    return new Pa(e);
  }
}
function _me(t, e = 'viewBox="0 0 40 40"') {
  return `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${e}>${encodeURIComponent(t)}</svg>')`;
}
function Ll(t) {
  return _me(`<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${t}" fill="none" stroke-width=".7"/>`, 'width="6" height="3"');
}
const Cme = /* @__PURE__ */ M.baseTheme({
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
  ".cm-lintRange-error": { backgroundImage: /* @__PURE__ */ Ll("#d11") },
  ".cm-lintRange-warning": { backgroundImage: /* @__PURE__ */ Ll("orange") },
  ".cm-lintRange-info": { backgroundImage: /* @__PURE__ */ Ll("#999") },
  ".cm-lintRange-hint": { backgroundImage: /* @__PURE__ */ Ll("#66d") },
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
}), Sme = [
  At,
  /* @__PURE__ */ M.decorations.compute([At], (t) => {
    let { selected: e, panel: n } = t.field(At);
    return !e || !n || e.from == e.to ? P.none : P.set([
      mme.range(e.from, e.to)
    ]);
  }),
  /* @__PURE__ */ Efe(yme, { hideOn: pme }),
  Cme
], Ff = /* @__PURE__ */ (() => [
  Nfe(),
  Ffe(),
  sfe(),
  rpe(),
  Dde(),
  Yue(),
  Que(),
  Z.allowMultipleSelections.of(!0),
  pde(),
  Mde(Rde, { fallback: !0 }),
  qde(),
  eme(),
  ume(),
  yfe(),
  wfe(),
  ufe(),
  lge(),
  wo.of([
    ...ime,
    ...tge,
    ...Age,
    ...fpe,
    ...Cde,
    ...gk,
    ...xme
  ])
])(), Yt = () => /* @__PURE__ */ new Map(), $f = (t) => {
  const e = Yt();
  return t.forEach((n, r) => {
    e.set(r, n);
  }), e;
}, Gn = (t, e, n) => {
  let r = t.get(e);
  return r === void 0 && t.set(e, r = n()), r;
}, Ame = (t, e) => {
  const n = [];
  for (const [r, i] of t)
    n.push(e(i, r));
  return n;
}, Eme = (t, e) => {
  for (const [n, r] of t)
    if (e(r, n))
      return !0;
  return !1;
}, si = () => /* @__PURE__ */ new Set(), iu = (t) => t[t.length - 1], Dme = (t, e) => {
  for (let n = 0; n < e.length; n++)
    t.push(e[n]);
}, xr = Array.from, Tme = (t, e) => {
  for (let n = 0; n < t.length; n++)
    if (e(t[n], n, t))
      return !0;
  return !1;
}, qf = Array.isArray;
class Fa {
  constructor() {
    this._observers = Yt();
  }
  on(e, n) {
    Gn(this._observers, e, si).add(n);
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
    return xr((this._observers.get(e) || Yt()).values()).forEach((r) => r(...n));
  }
  destroy() {
    this._observers = Yt();
  }
}
const jn = Math.floor, oc = Math.abs, $a = (t, e) => t < e ? t : e, Er = (t, e) => t > e ? t : e, Mme = Math.pow, xk = (t) => t !== 0 ? t < 0 : 1 / t < 0, Ome = String.fromCharCode, Lme = (t) => t.toLowerCase(), Rme = /^\s*/g, Ime = (t) => t.replace(Rme, ""), Nme = /([A-Z])/g, D1 = (t, e) => Ime(t.replace(Nme, (n) => `${e}${Lme(n)}`)), Bme = (t) => {
  const e = unescape(encodeURIComponent(t)), n = e.length, r = new Uint8Array(n);
  for (let i = 0; i < n; i++)
    r[i] = e.codePointAt(i);
  return r;
}, Do = typeof TextEncoder < "u" ? new TextEncoder() : null, Pme = (t) => Do.encode(t), Fme = Do ? Pme : Bme;
let to = typeof TextDecoder > "u" ? null : new TextDecoder("utf-8", { fatal: !0, ignoreBOM: !0 });
to && to.decode(new Uint8Array()).length === 1 && (to = null);
const T1 = (t) => t === void 0 ? null : t;
class $me {
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
let kk = new $me(), up = !0;
try {
  typeof localStorage < "u" && (kk = localStorage, up = !1);
} catch {
}
const _k = kk, qme = (t) => up || addEventListener("storage", t), Hme = (t) => up || removeEventListener("storage", t), zme = Object.assign, Vme = Object.keys, Ume = (t, e) => {
  for (const n in t)
    e(t[n], n);
}, Wme = (t, e) => {
  const n = [];
  for (const r in t)
    n.push(e(t[r], r));
  return n;
}, Jc = (t) => Vme(t).length, jme = (t) => {
  for (const e in t)
    return !1;
  return !0;
}, Gme = (t, e) => {
  for (const n in t)
    if (!e(t[n], n))
      return !1;
  return !0;
}, Ck = (t, e) => Object.prototype.hasOwnProperty.call(t, e), Yme = (t, e) => t === e || Jc(t) === Jc(e) && Gme(t, (n, r) => (n !== void 0 || Ck(e, r)) && e[r] === n), fp = (t, e, n = 0) => {
  try {
    for (; n < t.length; n++)
      t[n](...e);
  } finally {
    n < t.length && fp(t, e, n + 1);
  }
}, Kme = (t) => t, Jme = (t, e) => t === e, no = (t, e) => {
  if (t == null || e == null)
    return Jme(t, e);
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
        if (!e.has(n) || !no(t.get(n), e.get(n)))
          return !1;
      break;
    }
    case Object:
      if (Jc(t) !== Jc(e))
        return !1;
      for (const n in t)
        if (!Ck(t, n) || !no(t[n], e[n]))
          return !1;
      break;
    case Array:
      if (t.length !== e.length)
        return !1;
      for (let n = 0; n < t.length; n++)
        if (!no(t[n], e[n]))
          return !1;
      break;
    default:
      return !1;
  }
  return !0;
}, Zme = (t, e) => e.includes(t), os = typeof process < "u" && process.release && /node|io\.js/.test(process.release.name), Sk = typeof window < "u" && typeof document < "u" && !os;
typeof navigator < "u" && /Mac/.test(navigator.platform);
let ln;
const Xme = () => {
  if (ln === void 0)
    if (os) {
      ln = Yt();
      const t = process.argv;
      let e = null;
      for (let n = 0; n < t.length; n++) {
        const r = t[n];
        r[0] === "-" ? (e !== null && ln.set(e, ""), e = r) : e !== null && (ln.set(e, r), e = null);
      }
      e !== null && ln.set(e, "");
    } else
      typeof location == "object" ? (ln = Yt(), (location.search || "?").slice(1).split("&").forEach((t) => {
        if (t.length !== 0) {
          const [e, n] = t.split("=");
          ln.set(`--${D1(e, "-")}`, n), ln.set(`-${D1(e, "-")}`, n);
        }
      })) : ln = Yt();
  return ln;
}, Hf = (t) => Xme().has(t), zf = (t) => T1(os ? {}[t.toUpperCase()] : _k.getItem(t)), Qme = (t) => Hf("--" + t) || zf(t) !== null;
Qme("production");
const M1 = os && Zme({}.FORCE_COLOR, ["true", "1", "2"]), e0e = !Hf("no-colors") && (!os || process.stdout.isTTY || M1) && (!os || Hf("color") || M1 || zf("COLORTERM") !== null || (zf("TERM") || "").includes("color")), O1 = 1, L1 = 2, su = 4, ou = 8, To = 32, Hn = 64, Et = 128, qa = 31, Vf = 63, Yr = 127, t0e = 2147483647, Ak = Number.MAX_SAFE_INTEGER, n0e = Number.isInteger || ((t) => typeof t == "number" && isFinite(t) && jn(t) === t), kr = (t) => new Error(t), kn = () => {
  throw kr("Method unimplemented");
}, Zt = () => {
  throw kr("Unexpected case");
}, Ek = kr("Unexpected end of array"), Dk = kr("Integer out of Range");
class Ha {
  constructor(e) {
    this.arr = e, this.pos = 0;
  }
}
const Dr = (t) => new Ha(t), r0e = (t) => t.pos !== t.arr.length, i0e = (t, e) => {
  const n = gp(t.arr.buffer, t.pos + t.arr.byteOffset, e);
  return t.pos += e, n;
}, Ze = (t) => i0e(t, W(t)), ls = (t) => t.arr[t.pos++], W = (t) => {
  let e = 0, n = 1;
  const r = t.arr.length;
  for (; t.pos < r; ) {
    const i = t.arr[t.pos++];
    if (e = e + (i & Yr) * n, n *= 128, i < Et)
      return e;
    if (e > Ak)
      throw Dk;
  }
  throw Ek;
}, dp = (t) => {
  let e = t.arr[t.pos++], n = e & Vf, r = 64;
  const i = (e & Hn) > 0 ? -1 : 1;
  if ((e & Et) === 0)
    return i * n;
  const s = t.arr.length;
  for (; t.pos < s; ) {
    if (e = t.arr[t.pos++], n = n + (e & Yr) * r, r *= 128, e < Et)
      return i * n;
    if (n > Ak)
      throw Dk;
  }
  throw Ek;
}, s0e = (t) => {
  let e = W(t);
  if (e === 0)
    return "";
  {
    let n = String.fromCodePoint(ls(t));
    if (--e < 100)
      for (; e--; )
        n += String.fromCodePoint(ls(t));
    else
      for (; e > 0; ) {
        const r = e < 1e4 ? e : 1e4, i = t.arr.subarray(t.pos, t.pos + r);
        t.pos += r, n += String.fromCodePoint.apply(null, i), e -= r;
      }
    return decodeURIComponent(escape(n));
  }
}, o0e = (t) => to.decode(Ze(t)), dr = to ? o0e : s0e, pp = (t, e) => {
  const n = new DataView(t.arr.buffer, t.arr.byteOffset + t.pos, e);
  return t.pos += e, n;
}, l0e = (t) => pp(t, 4).getFloat32(0, !1), c0e = (t) => pp(t, 8).getFloat64(0, !1), a0e = (t) => pp(t, 8).getBigInt64(0, !1), h0e = [
  (t) => {
  },
  (t) => null,
  dp,
  l0e,
  c0e,
  a0e,
  (t) => !1,
  (t) => !0,
  dr,
  (t) => {
    const e = W(t), n = {};
    for (let r = 0; r < e; r++) {
      const i = dr(t);
      n[i] = Mo(t);
    }
    return n;
  },
  (t) => {
    const e = W(t), n = [];
    for (let r = 0; r < e; r++)
      n.push(Mo(t));
    return n;
  },
  Ze
], Mo = (t) => h0e[127 - ls(t)](t);
class R1 extends Ha {
  constructor(e, n) {
    super(e), this.reader = n, this.s = null, this.count = 0;
  }
  read() {
    return this.count === 0 && (this.s = this.reader(this), r0e(this) ? this.count = W(this) + 1 : this.count = -1), this.count--, this.s;
  }
}
class lc extends Ha {
  constructor(e) {
    super(e), this.s = 0, this.count = 0;
  }
  read() {
    if (this.count === 0) {
      this.s = dp(this);
      const e = xk(this.s);
      this.count = 1, e && (this.s = -this.s, this.count = W(this) + 2);
    }
    return this.count--, this.s;
  }
}
class lu extends Ha {
  constructor(e) {
    super(e), this.s = 0, this.count = 0, this.diff = 0;
  }
  read() {
    if (this.count === 0) {
      const e = dp(this), n = e & 1;
      this.diff = jn(e / 2), this.count = 1, n && (this.count = W(this) + 2);
    }
    return this.s += this.diff, this.count--, this.s;
  }
}
class u0e {
  constructor(e) {
    this.decoder = new lc(e), this.str = dr(this.decoder), this.spos = 0;
  }
  read() {
    const e = this.spos + this.decoder.read(), n = this.str.slice(this.spos, e);
    return this.spos = e, n;
  }
}
const Tk = (t) => new Uint8Array(t), gp = (t, e, n) => new Uint8Array(t, e, n), f0e = (t) => new Uint8Array(t), d0e = (t) => {
  let e = "";
  for (let n = 0; n < t.byteLength; n++)
    e += Ome(t[n]);
  return btoa(e);
}, p0e = (t) => Buffer.from(t.buffer, t.byteOffset, t.byteLength).toString("base64"), g0e = (t) => {
  const e = atob(t), n = Tk(e.length);
  for (let r = 0; r < e.length; r++)
    n[r] = e.charCodeAt(r);
  return n;
}, m0e = (t) => {
  const e = Buffer.from(t, "base64");
  return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
}, y0e = Sk ? d0e : p0e, b0e = Sk ? g0e : m0e, v0e = (t) => {
  const e = Tk(t.byteLength);
  return e.set(t), e;
};
class jo {
  constructor() {
    this.cpos = 0, this.cbuf = new Uint8Array(100), this.bufs = [];
  }
}
const Xe = () => new jo(), mp = (t) => {
  let e = t.cpos;
  for (let n = 0; n < t.bufs.length; n++)
    e += t.bufs[n].length;
  return e;
}, _e = (t) => {
  const e = new Uint8Array(mp(t));
  let n = 0;
  for (let r = 0; r < t.bufs.length; r++) {
    const i = t.bufs[r];
    e.set(i, n), n += i.length;
  }
  return e.set(gp(t.cbuf.buffer, 0, t.cpos), n), e;
}, w0e = (t, e) => {
  const n = t.cbuf.length;
  n - t.cpos < e && (t.bufs.push(gp(t.cbuf.buffer, 0, t.cpos)), t.cbuf = new Uint8Array(Er(n, e) * 2), t.cpos = 0);
}, He = (t, e) => {
  const n = t.cbuf.length;
  t.cpos === n && (t.bufs.push(t.cbuf), t.cbuf = new Uint8Array(n * 2), t.cpos = 0), t.cbuf[t.cpos++] = e;
}, Uf = He, z = (t, e) => {
  for (; e > Yr; )
    He(t, Et | Yr & e), e = jn(e / 128);
  He(t, Yr & e);
}, yp = (t, e) => {
  const n = xk(e);
  for (n && (e = -e), He(t, (e > Vf ? Et : 0) | (n ? Hn : 0) | Vf & e), e = jn(e / 64); e > 0; )
    He(t, (e > Yr ? Et : 0) | Yr & e), e = jn(e / 128);
}, Wf = new Uint8Array(3e4), x0e = Wf.length / 3, k0e = (t, e) => {
  if (e.length < x0e) {
    const n = Do.encodeInto(e, Wf).written || 0;
    z(t, n);
    for (let r = 0; r < n; r++)
      He(t, Wf[r]);
  } else
    Ee(t, Fme(e));
}, _0e = (t, e) => {
  const n = unescape(encodeURIComponent(e)), r = n.length;
  z(t, r);
  for (let i = 0; i < r; i++)
    He(t, n.codePointAt(i));
}, Kr = Do && Do.encodeInto ? k0e : _0e, za = (t, e) => {
  const n = t.cbuf.length, r = t.cpos, i = $a(n - r, e.length), s = e.length - i;
  t.cbuf.set(e.subarray(0, i), r), t.cpos += i, s > 0 && (t.bufs.push(t.cbuf), t.cbuf = new Uint8Array(Er(n * 2, s)), t.cbuf.set(e.subarray(i)), t.cpos = s);
}, Ee = (t, e) => {
  z(t, e.byteLength), za(t, e);
}, bp = (t, e) => {
  w0e(t, e);
  const n = new DataView(t.cbuf.buffer, t.cpos, e);
  return t.cpos += e, n;
}, C0e = (t, e) => bp(t, 4).setFloat32(0, e, !1), S0e = (t, e) => bp(t, 8).setFloat64(0, e, !1), A0e = (t, e) => bp(t, 8).setBigInt64(0, e, !1), I1 = new DataView(new ArrayBuffer(4)), E0e = (t) => (I1.setFloat32(0, t), I1.getFloat32(0) === t), Oo = (t, e) => {
  switch (typeof e) {
    case "string":
      He(t, 119), Kr(t, e);
      break;
    case "number":
      n0e(e) && oc(e) <= t0e ? (He(t, 125), yp(t, e)) : E0e(e) ? (He(t, 124), C0e(t, e)) : (He(t, 123), S0e(t, e));
      break;
    case "bigint":
      He(t, 122), A0e(t, e);
      break;
    case "object":
      if (e === null)
        He(t, 126);
      else if (qf(e)) {
        He(t, 117), z(t, e.length);
        for (let n = 0; n < e.length; n++)
          Oo(t, e[n]);
      } else if (e instanceof Uint8Array)
        He(t, 116), Ee(t, e);
      else {
        He(t, 118);
        const n = Object.keys(e);
        z(t, n.length);
        for (let r = 0; r < n.length; r++) {
          const i = n[r];
          Kr(t, i), Oo(t, e[i]);
        }
      }
      break;
    case "boolean":
      He(t, e ? 120 : 121);
      break;
    default:
      He(t, 127);
  }
};
class N1 extends jo {
  constructor(e) {
    super(), this.w = e, this.s = null, this.count = 0;
  }
  write(e) {
    this.s === e ? this.count++ : (this.count > 0 && z(this, this.count - 1), this.count = 1, this.w(this, e), this.s = e);
  }
}
const B1 = (t) => {
  t.count > 0 && (yp(t.encoder, t.count === 1 ? t.s : -t.s), t.count > 1 && z(t.encoder, t.count - 2));
};
class cc {
  constructor() {
    this.encoder = new jo(), this.s = 0, this.count = 0;
  }
  write(e) {
    this.s === e ? this.count++ : (B1(this), this.count = 1, this.s = e);
  }
  toUint8Array() {
    return B1(this), _e(this.encoder);
  }
}
const P1 = (t) => {
  if (t.count > 0) {
    const e = t.diff * 2 + (t.count === 1 ? 0 : 1);
    yp(t.encoder, e), t.count > 1 && z(t.encoder, t.count - 2);
  }
};
class cu {
  constructor() {
    this.encoder = new jo(), this.s = 0, this.count = 0, this.diff = 0;
  }
  write(e) {
    this.diff === e - this.s ? (this.s = e, this.count++) : (P1(this), this.count = 1, this.diff = e - this.s, this.s = e);
  }
  toUint8Array() {
    return P1(this), _e(this.encoder);
  }
}
class D0e {
  constructor() {
    this.sarr = [], this.s = "", this.lensE = new cc();
  }
  write(e) {
    this.s += e, this.s.length > 19 && (this.sarr.push(this.s), this.s = ""), this.lensE.write(e.length);
  }
  toUint8Array() {
    const e = new jo();
    return this.sarr.push(this.s), this.s = "", Kr(e, this.sarr.join("")), za(e, this.lensE.toUint8Array()), _e(e);
  }
}
const T0e = crypto.getRandomValues.bind(crypto), Mk = () => T0e(new Uint32Array(1))[0], M0e = [1e7] + -1e3 + -4e3 + -8e3 + -1e11, O0e = () => M0e.replace(
  /[018]/g,
  (t) => (t ^ Mk() & 15 >> t / 4).toString(16)
), _r = Date.now, F1 = (t) => new Promise(t);
Promise.all.bind(Promise);
class L0e {
  constructor(e, n) {
    this.left = e, this.right = n;
  }
}
const kt = (t, e) => new L0e(t, e), R0e = (t, e) => t.forEach((n) => e(n.left, n.right)), On = typeof document < "u" ? document : {}, I0e = (t) => On.createElement(t), N0e = () => On.createDocumentFragment(), B0e = (t) => On.createTextNode(t);
typeof DOMParser < "u" && new DOMParser();
const P0e = (t, e) => (R0e(e, (n, r) => {
  r === !1 ? t.removeAttribute(n) : r === !0 ? t.setAttribute(n, "") : t.setAttribute(n, r);
}), t), F0e = (t) => {
  const e = N0e();
  for (let n = 0; n < t.length; n++)
    Ok(e, t[n]);
  return e;
}, $0e = (t, e) => (Ok(t, F0e(e)), t), au = (t, e = [], n = []) => $0e(P0e(I0e(t), e), n), Rl = B0e, q0e = (t) => Ame(t, (e, n) => `${n}:${e};`).join(""), Ok = (t, e) => t.appendChild(e);
On.ELEMENT_NODE;
On.TEXT_NODE;
On.CDATA_SECTION_NODE;
On.COMMENT_NODE;
On.DOCUMENT_NODE;
On.DOCUMENT_TYPE_NODE;
On.DOCUMENT_FRAGMENT_NODE;
const Yn = Symbol, Lk = Yn(), Rk = Yn(), H0e = Yn(), z0e = Yn(), V0e = Yn(), Ik = Yn(), U0e = Yn(), Nk = Yn(), W0e = Yn(), j0e = (t) => {
  const e = [];
  let n = 0;
  for (; n < t.length; n++) {
    const r = t[n];
    r.constructor === String || r.constructor === Number || r.constructor === Object && e.push(JSON.stringify(r));
  }
  return e;
}, G0e = {
  [Lk]: kt("font-weight", "bold"),
  [Rk]: kt("font-weight", "normal"),
  [H0e]: kt("color", "blue"),
  [V0e]: kt("color", "green"),
  [z0e]: kt("color", "grey"),
  [Ik]: kt("color", "red"),
  [U0e]: kt("color", "purple"),
  [Nk]: kt("color", "orange"),
  [W0e]: kt("color", "black")
}, Y0e = (t) => {
  const e = [], n = [], r = Yt();
  let i = [], s = 0;
  for (; s < t.length; s++) {
    const o = t[s], l = G0e[o];
    if (l !== void 0)
      r.set(l.left, l.right);
    else if (o.constructor === String || o.constructor === Number) {
      const c = q0e(r);
      s > 0 || c.length > 0 ? (e.push("%c" + o), n.push(c)) : e.push(o);
    } else
      break;
  }
  for (s > 0 && (i = n, i.unshift(e.join(""))); s < t.length; s++) {
    const o = t[s];
    o instanceof Symbol || i.push(o);
  }
  return i;
}, K0e = e0e ? Y0e : j0e, J0e = (...t) => {
  console.log(...K0e(t)), Z0e.forEach((e) => e.print(t));
}, Z0e = si(), Bk = (t) => ({
  [Symbol.iterator]() {
    return this;
  },
  next: t
}), X0e = (t, e) => Bk(() => {
  let n;
  do
    n = t.next();
  while (!n.done && !e(n.value));
  return n;
}), hu = (t, e) => Bk(() => {
  const { done: n, value: r } = t.next();
  return { done: n, value: n ? void 0 : e(r) };
});
class vp {
  constructor(e, n) {
    this.clock = e, this.len = n;
  }
}
class Ss {
  constructor() {
    this.clients = /* @__PURE__ */ new Map();
  }
}
const cs = (t, e, n) => e.clients.forEach((r, i) => {
  const s = t.doc.store.clients.get(i);
  for (let o = 0; o < r.length; o++) {
    const l = r[o];
    Zk(t, s, l.clock, l.len, n);
  }
}), Q0e = (t, e) => {
  let n = 0, r = t.length - 1;
  for (; n <= r; ) {
    const i = jn((n + r) / 2), s = t[i], o = s.clock;
    if (o <= e) {
      if (e < o + s.len)
        return i;
      n = i + 1;
    } else
      r = i - 1;
  }
  return null;
}, Go = (t, e) => {
  const n = t.clients.get(e.client);
  return n !== void 0 && Q0e(n, e.clock) !== null;
}, wp = (t) => {
  t.clients.forEach((e) => {
    e.sort((i, s) => i.clock - s.clock);
    let n, r;
    for (n = 1, r = 1; n < e.length; n++) {
      const i = e[r - 1], s = e[n];
      i.clock + i.len >= s.clock ? i.len = Er(i.len, s.clock + s.len - i.clock) : (r < n && (e[r] = s), r++);
    }
    e.length = r;
  });
}, jf = (t) => {
  const e = new Ss();
  for (let n = 0; n < t.length; n++)
    t[n].clients.forEach((r, i) => {
      if (!e.clients.has(i)) {
        const s = r.slice();
        for (let o = n + 1; o < t.length; o++)
          Dme(s, t[o].clients.get(i) || []);
        e.clients.set(i, s);
      }
    });
  return wp(e), e;
}, Lo = (t, e, n, r) => {
  Gn(t.clients, e, () => []).push(new vp(n, r));
}, Pk = () => new Ss(), e1e = (t) => {
  const e = Pk();
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
        i.push(new vp(l, c));
      }
    }
    i.length > 0 && e.clients.set(r, i);
  }), e;
}, As = (t, e) => {
  z(t.restEncoder, e.clients.size), xr(e.clients.entries()).sort((n, r) => r[0] - n[0]).forEach(([n, r]) => {
    t.resetDsCurVal(), z(t.restEncoder, n);
    const i = r.length;
    z(t.restEncoder, i);
    for (let s = 0; s < i; s++) {
      const o = r[s];
      t.writeDsClock(o.clock), t.writeDsLen(o.len);
    }
  });
}, xp = (t) => {
  const e = new Ss(), n = W(t.restDecoder);
  for (let r = 0; r < n; r++) {
    t.resetDsCurVal();
    const i = W(t.restDecoder), s = W(t.restDecoder);
    if (s > 0) {
      const o = Gn(e.clients, i, () => []);
      for (let l = 0; l < s; l++)
        o.push(new vp(t.readDsClock(), t.readDsLen()));
    }
  }
  return e;
}, $1 = (t, e, n) => {
  const r = new Ss(), i = W(t.restDecoder);
  for (let s = 0; s < i; s++) {
    t.resetDsCurVal();
    const o = W(t.restDecoder), l = W(t.restDecoder), c = n.clients.get(o) || [], a = Te(n, o);
    for (let h = 0; h < l; h++) {
      const u = t.readDsClock(), f = u + t.readDsLen();
      if (u < a) {
        a < f && Lo(r, o, a, f - a);
        let d = Sn(c, u), p = c[d];
        for (!p.deleted && p.id.clock < u && (c.splice(d + 1, 0, ia(e, p, u - p.id.clock)), d++); d < c.length && (p = c[d++], p.id.clock < f); )
          p.deleted || (f < p.id.clock + p.length && c.splice(d, 0, ia(e, p, f - p.id.clock)), p.delete(e));
      } else
        Lo(r, o, u, f - u);
    }
  }
  if (r.clients.size > 0) {
    const s = new oi();
    return z(s.restEncoder, 0), As(s, r), s.toUint8Array();
  }
  return null;
}, Fk = Mk;
class Es extends Fa {
  constructor({ guid: e = O0e(), collectionid: n = null, gc: r = !0, gcFilter: i = () => !0, meta: s = null, autoLoad: o = !1, shouldLoad: l = !0 } = {}) {
    super(), this.gc = r, this.gcFilter = i, this.clientID = Fk(), this.guid = e, this.collectionid = n, this.share = /* @__PURE__ */ new Map(), this.store = new Kk(), this._transaction = null, this._transactionCleanups = [], this.subdocs = /* @__PURE__ */ new Set(), this._item = null, this.shouldLoad = l, this.autoLoad = o, this.meta = s, this.isLoaded = !1, this.isSynced = !1, this.whenLoaded = F1((a) => {
      this.on("load", () => {
        this.isLoaded = !0, a(this);
      });
    });
    const c = () => F1((a) => {
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
    return new Set(xr(this.subdocs).map((e) => e.guid));
  }
  transact(e, n = null) {
    return he(this, e, n);
  }
  get(e, n = Ke) {
    const r = Gn(this.share, e, () => {
      const s = new n();
      return s._integrate(this, null), s;
    }), i = r.constructor;
    if (n !== Ke && i !== n)
      if (i === Ke) {
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
    return this.get(e, Ui);
  }
  getText(e = "") {
    return this.get(e, us);
  }
  getMap(e = "") {
    return this.get(e, hs);
  }
  getXmlFragment(e = "") {
    return this.get(e, li);
  }
  toJSON() {
    const e = {};
    return this.share.forEach((n, r) => {
      e[r] = n.toJSON();
    }), e;
  }
  destroy() {
    xr(this.subdocs).forEach((n) => n.destroy());
    const e = this._item;
    if (e !== null) {
      this._item = null;
      const n = e.content;
      n.doc = new Es({ guid: this.guid, ...n.opts, shouldLoad: !1 }), n.doc._item = e, he(e.parent.doc, (r) => {
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
class $k {
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
class qk extends $k {
  readLeftID() {
    return G(W(this.restDecoder), W(this.restDecoder));
  }
  readRightID() {
    return G(W(this.restDecoder), W(this.restDecoder));
  }
  readClient() {
    return W(this.restDecoder);
  }
  readInfo() {
    return ls(this.restDecoder);
  }
  readString() {
    return dr(this.restDecoder);
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
    return Mo(this.restDecoder);
  }
  readBuf() {
    return v0e(Ze(this.restDecoder));
  }
  readJSON() {
    return JSON.parse(dr(this.restDecoder));
  }
  readKey() {
    return dr(this.restDecoder);
  }
}
class t1e {
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
class as extends t1e {
  constructor(e) {
    super(e), this.keys = [], W(e), this.keyClockDecoder = new lu(Ze(e)), this.clientDecoder = new lc(Ze(e)), this.leftClockDecoder = new lu(Ze(e)), this.rightClockDecoder = new lu(Ze(e)), this.infoDecoder = new R1(Ze(e), ls), this.stringDecoder = new u0e(Ze(e)), this.parentInfoDecoder = new R1(Ze(e), ls), this.typeRefDecoder = new lc(Ze(e)), this.lenDecoder = new lc(Ze(e));
  }
  readLeftID() {
    return new Vi(this.clientDecoder.read(), this.leftClockDecoder.read());
  }
  readRightID() {
    return new Vi(this.clientDecoder.read(), this.rightClockDecoder.read());
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
    return Mo(this.restDecoder);
  }
  readBuf() {
    return Ze(this.restDecoder);
  }
  readJSON() {
    return Mo(this.restDecoder);
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
class Hk {
  constructor() {
    this.restEncoder = Xe();
  }
  toUint8Array() {
    return _e(this.restEncoder);
  }
  resetDsCurVal() {
  }
  writeDsClock(e) {
    z(this.restEncoder, e);
  }
  writeDsLen(e) {
    z(this.restEncoder, e);
  }
}
class Yo extends Hk {
  writeLeftID(e) {
    z(this.restEncoder, e.client), z(this.restEncoder, e.clock);
  }
  writeRightID(e) {
    z(this.restEncoder, e.client), z(this.restEncoder, e.clock);
  }
  writeClient(e) {
    z(this.restEncoder, e);
  }
  writeInfo(e) {
    Uf(this.restEncoder, e);
  }
  writeString(e) {
    Kr(this.restEncoder, e);
  }
  writeParentInfo(e) {
    z(this.restEncoder, e ? 1 : 0);
  }
  writeTypeRef(e) {
    z(this.restEncoder, e);
  }
  writeLen(e) {
    z(this.restEncoder, e);
  }
  writeAny(e) {
    Oo(this.restEncoder, e);
  }
  writeBuf(e) {
    Ee(this.restEncoder, e);
  }
  writeJSON(e) {
    Kr(this.restEncoder, JSON.stringify(e));
  }
  writeKey(e) {
    Kr(this.restEncoder, e);
  }
}
class zk {
  constructor() {
    this.restEncoder = Xe(), this.dsCurrVal = 0;
  }
  toUint8Array() {
    return _e(this.restEncoder);
  }
  resetDsCurVal() {
    this.dsCurrVal = 0;
  }
  writeDsClock(e) {
    const n = e - this.dsCurrVal;
    this.dsCurrVal = e, z(this.restEncoder, n);
  }
  writeDsLen(e) {
    e === 0 && Zt(), z(this.restEncoder, e - 1), this.dsCurrVal += e;
  }
}
class oi extends zk {
  constructor() {
    super(), this.keyMap = /* @__PURE__ */ new Map(), this.keyClock = 0, this.keyClockEncoder = new cu(), this.clientEncoder = new cc(), this.leftClockEncoder = new cu(), this.rightClockEncoder = new cu(), this.infoEncoder = new N1(Uf), this.stringEncoder = new D0e(), this.parentInfoEncoder = new N1(Uf), this.typeRefEncoder = new cc(), this.lenEncoder = new cc();
  }
  toUint8Array() {
    const e = Xe();
    return z(e, 0), Ee(e, this.keyClockEncoder.toUint8Array()), Ee(e, this.clientEncoder.toUint8Array()), Ee(e, this.leftClockEncoder.toUint8Array()), Ee(e, this.rightClockEncoder.toUint8Array()), Ee(e, _e(this.infoEncoder)), Ee(e, this.stringEncoder.toUint8Array()), Ee(e, _e(this.parentInfoEncoder)), Ee(e, this.typeRefEncoder.toUint8Array()), Ee(e, this.lenEncoder.toUint8Array()), za(e, _e(this.restEncoder)), _e(e);
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
    Oo(this.restEncoder, e);
  }
  writeBuf(e) {
    Ee(this.restEncoder, e);
  }
  writeJSON(e) {
    Oo(this.restEncoder, e);
  }
  writeKey(e) {
    const n = this.keyMap.get(e);
    n === void 0 ? (this.keyClockEncoder.write(this.keyClock++), this.stringEncoder.write(e)) : this.keyClockEncoder.write(n);
  }
}
const n1e = (t, e, n, r) => {
  r = Er(r, e[0].id.clock);
  const i = Sn(e, r);
  z(t.restEncoder, e.length - i), t.writeClient(n), z(t.restEncoder, r);
  const s = e[i];
  s.write(t, r - s.id.clock);
  for (let o = i + 1; o < e.length; o++)
    e[o].write(t, 0);
}, kp = (t, e, n) => {
  const r = /* @__PURE__ */ new Map();
  n.forEach((i, s) => {
    Te(e, s) > i && r.set(s, i);
  }), Va(e).forEach((i, s) => {
    n.has(s) || r.set(s, 0);
  }), z(t.restEncoder, r.size), xr(r.entries()).sort((i, s) => s[0] - i[0]).forEach(([i, s]) => {
    n1e(t, e.clients.get(i), i, s);
  });
}, r1e = (t, e) => {
  const n = Yt(), r = W(t.restDecoder);
  for (let i = 0; i < r; i++) {
    const s = W(t.restDecoder), o = new Array(s), l = t.readClient();
    let c = W(t.restDecoder);
    n.set(l, { i: 0, refs: o });
    for (let a = 0; a < s; a++) {
      const h = t.readInfo();
      switch (qa & h) {
        case 0: {
          const u = t.readLen();
          o[a] = new Ot(G(l, c), u), c += u;
          break;
        }
        case 10: {
          const u = W(t.restDecoder);
          o[a] = new Lt(G(l, c), u), c += u;
          break;
        }
        default: {
          const u = (h & (Hn | Et)) === 0, f = new ue(
            G(l, c),
            null,
            (h & Et) === Et ? t.readLeftID() : null,
            null,
            (h & Hn) === Hn ? t.readRightID() : null,
            u ? t.readParentInfo() ? e.get(t.readString()) : t.readLeftID() : null,
            u && (h & To) === To ? t.readString() : null,
            y_(t, h)
          );
          o[a] = f, c += f.length;
        }
      }
    }
  }
  return n;
}, i1e = (t, e, n) => {
  const r = [];
  let i = xr(n.keys()).sort((d, p) => d - p);
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
  const l = new Kk(), c = /* @__PURE__ */ new Map(), a = (d, p) => {
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
    if (h.constructor !== Lt) {
      const p = Gn(u, h.id.client, () => Te(e, h.id.client)) - h.id.clock;
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
    const d = new oi();
    return kp(d, l, /* @__PURE__ */ new Map()), z(d.restEncoder, 0), { missing: c, update: d.toUint8Array() };
  }
  return null;
}, s1e = (t, e) => kp(t, e.doc.store, e.beforeState), o1e = (t, e, n, r = new as(t)) => he(e, (i) => {
  i.local = !1;
  let s = !1;
  const o = i.doc, l = o.store, c = r1e(r, o), a = i1e(i, l, c), h = l.pendingStructs;
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
      h.update = Xc([h.update, a.update]);
    }
  } else
    l.pendingStructs = a;
  const u = $1(r, i, l);
  if (l.pendingDs) {
    const f = new as(Dr(l.pendingDs));
    W(f.restDecoder);
    const d = $1(f, i, l);
    u && d ? l.pendingDs = Xc([u, d]) : l.pendingDs = u || d;
  } else
    l.pendingDs = u;
  if (s) {
    const f = l.pendingStructs.update;
    l.pendingStructs = null, Vk(i.doc, f);
  }
}, n, !1), Vk = (t, e, n, r = as) => {
  const i = Dr(e);
  o1e(i, t, n, new r(i));
}, l1e = (t, e, n) => Vk(t, e, n, qk), c1e = (t, e, n = /* @__PURE__ */ new Map()) => {
  kp(t, e.store, n), As(t, e1e(e.store));
}, a1e = (t, e = new Uint8Array([0]), n = new oi()) => {
  const r = Uk(e);
  c1e(n, t, r);
  const i = [n.toUint8Array()];
  if (t.store.pendingDs && i.push(t.store.pendingDs), t.store.pendingStructs && i.push(T1e(t.store.pendingStructs.update, e)), i.length > 1) {
    if (n.constructor === Yo)
      return E1e(i.map((s, o) => o === 0 ? s : O1e(s)));
    if (n.constructor === oi)
      return Xc(i);
  }
  return i[0];
}, h1e = (t, e) => a1e(t, e, new Yo()), u1e = (t) => {
  const e = /* @__PURE__ */ new Map(), n = W(t.restDecoder);
  for (let r = 0; r < n; r++) {
    const i = W(t.restDecoder), s = W(t.restDecoder);
    e.set(i, s);
  }
  return e;
}, Uk = (t) => u1e(new $k(Dr(t))), Wk = (t, e) => (z(t.restEncoder, e.size), xr(e.entries()).sort((n, r) => r[0] - n[0]).forEach(([n, r]) => {
  z(t.restEncoder, n), z(t.restEncoder, r);
}), t), f1e = (t, e) => Wk(t, Va(e.store)), d1e = (t, e = new zk()) => (t instanceof Map ? Wk(e, t) : f1e(e, t), e.toUint8Array()), p1e = (t) => d1e(t, new Hk());
class g1e {
  constructor() {
    this.l = [];
  }
}
const q1 = () => new g1e(), H1 = (t, e) => t.l.push(e), z1 = (t, e) => {
  const n = t.l, r = n.length;
  t.l = n.filter((i) => e !== i), r === t.l.length && console.error("[yjs] Tried to remove event handler that doesn't exist.");
}, jk = (t, e, n) => fp(t.l, [e, n]);
class Vi {
  constructor(e, n) {
    this.client = e, this.clock = n;
  }
}
const Ri = (t, e) => t === e || t !== null && e !== null && t.client === e.client && t.clock === e.clock, G = (t, e) => new Vi(t, e), Gk = (t) => {
  for (const [e, n] of t.doc.share.entries())
    if (n === t)
      return e;
  throw Zt();
}, Zc = (t, e) => {
  for (; e !== null; ) {
    if (e.parent === t)
      return !0;
    e = e.parent._item;
  }
  return !1;
};
class Yk {
  constructor(e, n, r, i = 0) {
    this.type = e, this.tname = n, this.item = r, this.assoc = i;
  }
}
const V1 = (t) => {
  const e = {};
  return t.type && (e.type = t.type), t.tname && (e.tname = t.tname), t.item && (e.item = t.item), t.assoc != null && (e.assoc = t.assoc), e;
}, Ro = (t) => new Yk(t.type == null ? null : G(t.type.client, t.type.clock), t.tname || null, t.item == null ? null : G(t.item.client, t.item.clock), t.assoc == null ? 0 : t.assoc);
class m1e {
  constructor(e, n, r = 0) {
    this.type = e, this.index = n, this.assoc = r;
  }
}
const y1e = (t, e, n = 0) => new m1e(t, e, n), Il = (t, e, n) => {
  let r = null, i = null;
  return t._item === null ? i = Gk(t) : r = G(t._item.id.client, t._item.id.clock), new Yk(r, i, e, n);
}, Gf = (t, e, n = 0) => {
  let r = t._start;
  if (n < 0) {
    if (e === 0)
      return Il(t, null, n);
    e--;
  }
  for (; r !== null; ) {
    if (!r.deleted && r.countable) {
      if (r.length > e)
        return Il(t, G(r.id.client, r.id.clock + e), n);
      e -= r.length;
    }
    if (r.right === null && n < 0)
      return Il(t, r.lastId, n);
    r = r.right;
  }
  return Il(t, null, n);
}, Yf = (t, e) => {
  const n = e.store, r = t.item, i = t.type, s = t.tname, o = t.assoc;
  let l = null, c = 0;
  if (r !== null) {
    if (Te(n, r.client) <= r.clock)
      return null;
    const a = Xf(n, r), h = a.item;
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
      const { item: a } = Xf(n, i);
      if (a instanceof ue && a.content instanceof Ln)
        l = a.content.type;
      else
        return null;
    } else
      throw Zt();
    o >= 0 ? c = l._length : c = 0;
  }
  return y1e(l, c, t.assoc);
}, U1 = (t, e) => t === e || t !== null && e !== null && t.tname === e.tname && Ri(t.item, e.item) && Ri(t.type, e.type) && t.assoc === e.assoc;
class b1e {
  constructor(e, n) {
    this.ds = e, this.sv = n;
  }
}
const v1e = (t, e) => new b1e(t, e);
v1e(Pk(), /* @__PURE__ */ new Map());
const Ps = (t, e) => e === void 0 ? !t.deleted : e.sv.has(t.id.client) && (e.sv.get(t.id.client) || 0) > t.id.clock && !Go(e.ds, t.id), Kf = (t, e) => {
  const n = Gn(t.meta, Kf, si), r = t.doc.store;
  n.has(e) || (e.sv.forEach((i, s) => {
    i < Te(r, s) && mt(t, G(s, i));
  }), cs(t, e.ds, (i) => {
  }), n.add(e));
};
class Kk {
  constructor() {
    this.clients = /* @__PURE__ */ new Map(), this.pendingStructs = null, this.pendingDs = null;
  }
}
const Va = (t) => {
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
}, Jk = (t, e) => {
  let n = t.clients.get(e.id.client);
  if (n === void 0)
    n = [], t.clients.set(e.id.client, n);
  else {
    const r = n[n.length - 1];
    if (r.id.clock + r.length !== e.id.clock)
      throw Zt();
  }
  n.push(e);
}, Sn = (t, e) => {
  let n = 0, r = t.length - 1, i = t[r], s = i.id.clock;
  if (s === e)
    return r;
  let o = jn(e / (s + i.length - 1) * r);
  for (; n <= r; ) {
    if (i = t[o], s = i.id.clock, s <= e) {
      if (e < s + i.length)
        return o;
      n = o + 1;
    } else
      r = o - 1;
    o = jn((n + r) / 2);
  }
  throw Zt();
}, w1e = (t, e) => {
  const n = t.clients.get(e.client);
  return n[Sn(n, e.clock)];
}, ac = w1e, Jf = (t, e, n) => {
  const r = Sn(e, n), i = e[r];
  return i.id.clock < n && i instanceof ue ? (e.splice(r + 1, 0, ia(t, i, n - i.id.clock)), r + 1) : r;
}, mt = (t, e) => {
  const n = t.doc.store.clients.get(e.client);
  return n[Jf(t, n, e.clock)];
}, W1 = (t, e, n) => {
  const r = e.clients.get(n.client), i = Sn(r, n.clock), s = r[i];
  return n.clock !== s.id.clock + s.length - 1 && s.constructor !== Ot && r.splice(i + 1, 0, ia(t, s, n.clock - s.id.clock + 1)), s;
}, x1e = (t, e, n) => {
  const r = t.clients.get(e.id.client);
  r[Sn(r, e.id.clock)] = n;
}, Zk = (t, e, n, r, i) => {
  if (r === 0)
    return;
  const s = n + r;
  let o = Jf(t, e, n), l;
  do
    l = e[o++], s < l.id.clock + l.length && Jf(t, e, s), i(l);
  while (o < e.length && e[o].id.clock < s);
};
class k1e {
  constructor(e, n, r) {
    this.doc = e, this.deleteSet = new Ss(), this.beforeState = Va(e.store), this.afterState = /* @__PURE__ */ new Map(), this.changed = /* @__PURE__ */ new Map(), this.changedParentTypes = /* @__PURE__ */ new Map(), this._mergeStructs = [], this.origin = n, this.meta = /* @__PURE__ */ new Map(), this.local = r, this.subdocsAdded = /* @__PURE__ */ new Set(), this.subdocsRemoved = /* @__PURE__ */ new Set(), this.subdocsLoaded = /* @__PURE__ */ new Set(), this._needFormattingCleanup = !1;
  }
}
const j1 = (t, e) => e.deleteSet.clients.size === 0 && !Eme(e.afterState, (n, r) => e.beforeState.get(r) !== n) ? !1 : (wp(e.deleteSet), s1e(t, e), As(t, e.deleteSet), !0), G1 = (t, e, n) => {
  const r = e._item;
  (r === null || r.id.clock < (t.beforeState.get(r.id.client) || 0) && !r.deleted) && Gn(t.changed, e, si).add(n);
}, hc = (t, e) => {
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
}, _1e = (t, e, n) => {
  for (const [r, i] of t.clients.entries()) {
    const s = e.clients.get(r);
    for (let o = i.length - 1; o >= 0; o--) {
      const l = i[o], c = l.clock + l.len;
      for (let a = Sn(s, l.clock), h = s[a]; a < s.length && h.id.clock < c; h = s[++a]) {
        const u = s[a];
        if (l.clock + l.len <= u.id.clock)
          break;
        u instanceof ue && u.deleted && !u.keep && n(u) && u.gc(e, !1);
      }
    }
  }
}, C1e = (t, e) => {
  t.clients.forEach((n, r) => {
    const i = e.clients.get(r);
    for (let s = n.length - 1; s >= 0; s--) {
      const o = n[s], l = $a(i.length - 1, 1 + Sn(i, o.clock + o.len - 1));
      for (let c = l, a = i[c]; c > 0 && a.id.clock >= o.clock; a = i[c])
        c -= 1 + hc(i, c);
    }
  });
}, Xk = (t, e) => {
  if (e < t.length) {
    const n = t[e], r = n.doc, i = r.store, s = n.deleteSet, o = n._mergeStructs;
    try {
      wp(s), n.afterState = Va(n.doc.store), r.emit("beforeObserverCalls", [n, r]);
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
          }), c.sort((h, u) => h.path.length - u.path.length), jk(a._dEH, c, n));
        });
      }), l.push(() => r.emit("afterTransaction", [n, r])), fp(l, []), n._needFormattingCleanup && U1e(n);
    } finally {
      r.gc && _1e(s, i, r.gcFilter), C1e(s, i), n.afterState.forEach((h, u) => {
        const f = n.beforeState.get(u) || 0;
        if (f !== h) {
          const d = i.clients.get(u), p = Er(Sn(d, f), 1);
          for (let g = d.length - 1; g >= p; )
            g -= 1 + hc(d, g);
        }
      });
      for (let h = o.length - 1; h >= 0; h--) {
        const { client: u, clock: f } = o[h].id, d = i.clients.get(u), p = Sn(d, f);
        p + 1 < d.length && hc(d, p + 1) > 1 || p > 0 && hc(d, p);
      }
      if (!n.local && n.afterState.get(r.clientID) !== n.beforeState.get(r.clientID) && (J0e(Nk, Lk, "[yjs] ", Rk, Ik, "Changed the client-id because another client seems to be using it."), r.clientID = Fk()), r.emit("afterTransactionCleanup", [n, r]), r._observers.has("update")) {
        const h = new Yo();
        j1(h, n) && r.emit("update", [h.toUint8Array(), n.origin, r, n]);
      }
      if (r._observers.has("updateV2")) {
        const h = new oi();
        j1(h, n) && r.emit("updateV2", [h.toUint8Array(), n.origin, r, n]);
      }
      const { subdocsAdded: l, subdocsLoaded: c, subdocsRemoved: a } = n;
      (l.size > 0 || a.size > 0 || c.size > 0) && (l.forEach((h) => {
        h.clientID = r.clientID, h.collectionid == null && (h.collectionid = r.collectionid), r.subdocs.add(h);
      }), a.forEach((h) => r.subdocs.delete(h)), r.emit("subdocs", [{ loaded: c, added: l, removed: a }, r, n]), a.forEach((h) => h.destroy())), t.length <= e + 1 ? (r._transactionCleanups = [], r.emit("afterAllTransactions", [r, t])) : Xk(t, e + 1);
    }
  }
}, he = (t, e, n = null, r = !0) => {
  const i = t._transactionCleanups;
  let s = !1, o = null;
  t._transaction === null && (s = !0, t._transaction = new k1e(t, n, r), i.push(t._transaction), i.length === 1 && t.emit("beforeAllTransactions", [t]), t.emit("beforeTransaction", [t._transaction, t]));
  try {
    o = e(t._transaction);
  } finally {
    if (s) {
      const l = t._transaction === i[0];
      t._transaction = null, l && Xk(i, 0);
    }
  }
  return o;
};
class S1e {
  constructor(e, n) {
    this.insertions = n, this.deletions = e, this.meta = /* @__PURE__ */ new Map();
  }
}
const Y1 = (t, e, n) => {
  cs(t, n.deletions, (r) => {
    r instanceof ue && e.scope.some((i) => Zc(i, r)) && Op(r, !1);
  });
}, K1 = (t, e, n) => {
  let r = null, i = null;
  const s = t.doc, o = t.scope;
  if (he(s, (l) => {
    for (; e.length > 0 && r === null; ) {
      const c = s.store, a = e.pop(), h = /* @__PURE__ */ new Set(), u = [];
      let f = !1;
      cs(l, a.insertions, (d) => {
        if (d instanceof ue) {
          if (d.redone !== null) {
            let { item: p, diff: g } = Xf(c, d.id);
            g > 0 && (p = mt(l, G(p.id.client, p.id.clock + g))), d = p;
          }
          !d.deleted && o.some((p) => Zc(p, d)) && u.push(d);
        }
      }), cs(l, a.deletions, (d) => {
        d instanceof ue && o.some((p) => Zc(p, d)) && !Go(a.insertions, d.id) && h.add(d);
      }), h.forEach((d) => {
        f = m_(l, d, h, a.insertions, t.ignoreRemoteMapChanges, t) !== null || f;
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
class _p extends Fa {
  constructor(e, {
    captureTimeout: n = 500,
    captureTransaction: r = (c) => !0,
    deleteFilter: i = () => !0,
    trackedOrigins: s = /* @__PURE__ */ new Set([null]),
    ignoreRemoteMapChanges: o = !1,
    doc: l = qf(e) ? e[0].doc : e.doc
  } = {}) {
    super(), this.scope = [], this.addToScope(e), this.deleteFilter = i, s.add(this), this.trackedOrigins = s, this.captureTransaction = r, this.undoStack = [], this.redoStack = [], this.undoing = !1, this.redoing = !1, this.doc = l, this.lastChange = 0, this.ignoreRemoteMapChanges = o, this.captureTimeout = n, this.afterTransactionHandler = (c) => {
      if (!this.captureTransaction(c) || !this.scope.some((m) => c.changedParentTypes.has(m)) || !this.trackedOrigins.has(c.origin) && (!c.origin || !this.trackedOrigins.has(c.origin.constructor)))
        return;
      const a = this.undoing, h = this.redoing, u = a ? this.redoStack : this.undoStack;
      a ? this.stopCapturing() : h || this.clear(!1, !0);
      const f = new Ss();
      c.afterState.forEach((m, y) => {
        const b = c.beforeState.get(y) || 0, k = m - b;
        k > 0 && Lo(f, y, b, k);
      });
      const d = _r();
      let p = !1;
      if (this.lastChange > 0 && d - this.lastChange < this.captureTimeout && u.length > 0 && !a && !h) {
        const m = u[u.length - 1];
        m.deletions = jf([m.deletions, c.deleteSet]), m.insertions = jf([m.insertions, f]);
      } else
        u.push(new S1e(c.deleteSet, f)), p = !0;
      !a && !h && (this.lastChange = d), cs(c, c.deleteSet, (m) => {
        m instanceof ue && this.scope.some((y) => Zc(y, m)) && Op(m, !0);
      });
      const g = [{ stackItem: u[u.length - 1], origin: c.origin, type: a ? "redo" : "undo", changedParentTypes: c.changedParentTypes }, this];
      p ? this.emit("stack-item-added", g) : this.emit("stack-item-updated", g);
    }, this.doc.on("afterTransaction", this.afterTransactionHandler), this.doc.on("destroy", () => {
      this.destroy();
    });
  }
  addToScope(e) {
    e = qf(e) ? e : [e], e.forEach((n) => {
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
      e && (this.undoStack.forEach((i) => Y1(r, this, i)), this.undoStack = []), n && (this.redoStack.forEach((i) => Y1(r, this, i)), this.redoStack = []), this.emit("stack-cleared", [{ undoStackCleared: e, redoStackCleared: n }]);
    });
  }
  stopCapturing() {
    this.lastChange = 0;
  }
  undo() {
    this.undoing = !0;
    let e;
    try {
      e = K1(this, this.undoStack, "undo");
    } finally {
      this.undoing = !1;
    }
    return e;
  }
  redo() {
    this.redoing = !0;
    let e;
    try {
      e = K1(this, this.redoStack, "redo");
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
function* A1e(t) {
  const e = W(t.restDecoder);
  for (let n = 0; n < e; n++) {
    const r = W(t.restDecoder), i = t.readClient();
    let s = W(t.restDecoder);
    for (let o = 0; o < r; o++) {
      const l = t.readInfo();
      if (l === 10) {
        const c = W(t.restDecoder);
        yield new Lt(G(i, s), c), s += c;
      } else if ((qa & l) !== 0) {
        const c = (l & (Hn | Et)) === 0, a = new ue(
          G(i, s),
          null,
          (l & Et) === Et ? t.readLeftID() : null,
          null,
          (l & Hn) === Hn ? t.readRightID() : null,
          c ? t.readParentInfo() ? t.readString() : t.readLeftID() : null,
          c && (l & To) === To ? t.readString() : null,
          y_(t, l)
        );
        yield a, s += a.length;
      } else {
        const c = t.readLen();
        yield new Ot(G(i, s), c), s += c;
      }
    }
  }
}
class Cp {
  constructor(e, n) {
    this.gen = A1e(e), this.curr = null, this.done = !1, this.filterSkips = n, this.next();
  }
  next() {
    do
      this.curr = this.gen.next().value || null;
    while (this.filterSkips && this.curr !== null && this.curr.constructor === Lt);
    return this.curr;
  }
}
class Sp {
  constructor(e) {
    this.currClient = 0, this.startClock = 0, this.written = 0, this.encoder = e, this.clientStructs = [];
  }
}
const E1e = (t) => Xc(t, qk, Yo), D1e = (t, e) => {
  if (t.constructor === Ot) {
    const { client: n, clock: r } = t.id;
    return new Ot(G(n, r + e), t.length - e);
  } else if (t.constructor === Lt) {
    const { client: n, clock: r } = t.id;
    return new Lt(G(n, r + e), t.length - e);
  } else {
    const n = t, { client: r, clock: i } = n.id;
    return new ue(
      G(r, i + e),
      null,
      G(r, i + e - 1),
      null,
      n.rightOrigin,
      n.parent,
      n.parentSub,
      n.content.splice(e)
    );
  }
}, Xc = (t, e = as, n = oi) => {
  if (t.length === 1)
    return t[0];
  const r = t.map((h) => new e(Dr(h)));
  let i = r.map((h) => new Cp(h, !0)), s = null;
  const o = new n(), l = new Sp(o);
  for (; i = i.filter((f) => f.curr !== null), i.sort(
    (f, d) => {
      if (f.curr.id.client === d.curr.id.client) {
        const p = f.curr.id.clock - d.curr.id.clock;
        return p === 0 ? f.curr.constructor === d.curr.constructor ? 0 : f.curr.constructor === Lt ? 1 : -1 : p;
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
        rr(l, s.struct, s.offset), s = { struct: f, offset: 0 }, h.next();
      else if (s.struct.id.clock + s.struct.length < f.id.clock)
        if (s.struct.constructor === Lt)
          s.struct.length = f.id.clock + f.length - s.struct.id.clock;
        else {
          rr(l, s.struct, s.offset);
          const p = f.id.clock - s.struct.id.clock - s.struct.length;
          s = { struct: new Lt(G(u, s.struct.id.clock + s.struct.length), p), offset: 0 };
        }
      else {
        const p = s.struct.id.clock + s.struct.length - f.id.clock;
        p > 0 && (s.struct.constructor === Lt ? s.struct.length -= p : f = D1e(f, p)), s.struct.mergeWith(f) || (rr(l, s.struct, s.offset), s = { struct: f, offset: 0 }, h.next());
      }
    } else
      s = { struct: h.curr, offset: 0 }, h.next();
    for (let f = h.curr; f !== null && f.id.client === u && f.id.clock === s.struct.id.clock + s.struct.length && f.constructor !== Lt; f = h.next())
      rr(l, s.struct, s.offset), s = { struct: f, offset: 0 };
  }
  s !== null && (rr(l, s.struct, s.offset), s = null), Ap(l);
  const c = r.map((h) => xp(h)), a = jf(c);
  return As(o, a), o.toUint8Array();
}, T1e = (t, e, n = as, r = oi) => {
  const i = Uk(e), s = new r(), o = new Sp(s), l = new n(Dr(t)), c = new Cp(l, !1);
  for (; c.curr; ) {
    const h = c.curr, u = h.id.client, f = i.get(u) || 0;
    if (c.curr.constructor === Lt) {
      c.next();
      continue;
    }
    if (h.id.clock + h.length > f)
      for (rr(o, h, Er(f - h.id.clock, 0)), c.next(); c.curr && c.curr.id.client === u; )
        rr(o, c.curr, 0), c.next();
    else
      for (; c.curr && c.curr.id.client === u && c.curr.id.clock + c.curr.length <= f; )
        c.next();
  }
  Ap(o);
  const a = xp(l);
  return As(s, a), s.toUint8Array();
}, Qk = (t) => {
  t.written > 0 && (t.clientStructs.push({ written: t.written, restEncoder: _e(t.encoder.restEncoder) }), t.encoder.restEncoder = Xe(), t.written = 0);
}, rr = (t, e, n) => {
  t.written > 0 && t.currClient !== e.id.client && Qk(t), t.written === 0 && (t.currClient = e.id.client, t.encoder.writeClient(e.id.client), z(t.encoder.restEncoder, e.id.clock + n)), e.write(t.encoder, n), t.written++;
}, Ap = (t) => {
  Qk(t);
  const e = t.encoder.restEncoder;
  z(e, t.clientStructs.length);
  for (let n = 0; n < t.clientStructs.length; n++) {
    const r = t.clientStructs[n];
    z(e, r.written), za(e, r.restEncoder);
  }
}, M1e = (t, e, n, r) => {
  const i = new n(Dr(t)), s = new Cp(i, !1), o = new r(), l = new Sp(o);
  for (let a = s.curr; a !== null; a = s.next())
    rr(l, e(a), 0);
  Ap(l);
  const c = xp(i);
  return As(o, c), o.toUint8Array();
}, O1e = (t) => M1e(t, Kme, as, Yo), J1 = "You must not compute changes after the event-handler fired.";
class Ua {
  constructor(e, n) {
    this.target = e, this.currentTarget = e, this.transaction = n, this._changes = null, this._keys = null, this._delta = null, this._path = null;
  }
  get path() {
    return this._path || (this._path = L1e(this.currentTarget, this.target));
  }
  deletes(e) {
    return Go(this.transaction.deleteSet, e.id);
  }
  get keys() {
    if (this._keys === null) {
      if (this.transaction.doc._transactionCleanups.length === 0)
        throw kr(J1);
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
                o = "delete", l = iu(c.content.getContent());
              else
                return;
            else
              c !== null && this.deletes(c) ? (o = "update", l = iu(c.content.getContent())) : (o = "add", l = void 0);
          } else if (this.deletes(s))
            o = "delete", l = iu(s.content.getContent());
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
        throw kr(J1);
      const n = this.target, r = si(), i = si(), s = [];
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
const L1e = (t, e) => {
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
}, e_ = 80;
let Ep = 0;
class R1e {
  constructor(e, n) {
    e.marker = !0, this.p = e, this.index = n, this.timestamp = Ep++;
  }
}
const I1e = (t) => {
  t.timestamp = Ep++;
}, t_ = (t, e, n) => {
  t.p.marker = !1, t.p = e, e.marker = !0, t.index = n, t.timestamp = Ep++;
}, N1e = (t, e, n) => {
  if (t.length >= e_) {
    const r = t.reduce((i, s) => i.timestamp < s.timestamp ? i : s);
    return t_(r, e, n), r;
  } else {
    const r = new R1e(e, n);
    return t.push(r), r;
  }
}, Wa = (t, e) => {
  if (t._start === null || e === 0 || t._searchMarker === null)
    return null;
  const n = t._searchMarker.length === 0 ? null : t._searchMarker.reduce((s, o) => oc(e - s.index) < oc(e - o.index) ? s : o);
  let r = t._start, i = 0;
  for (n !== null && (r = n.p, i = n.index, I1e(n)); r.right !== null && i < e; ) {
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
  return n !== null && oc(n.index - i) < r.parent.length / e_ ? (t_(n, r, i), n) : N1e(t._searchMarker, r, i);
}, Io = (t, e, n) => {
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
    (e < i.index || n > 0 && e === i.index) && (i.index = Er(e, i.index + n));
  }
}, ja = (t, e, n) => {
  const r = t, i = e.changedParentTypes;
  for (; Gn(i, t, () => []).push(n), t._item !== null; )
    t = t._item.parent;
  jk(r._eH, n, e);
};
class Ke {
  constructor() {
    this._item = null, this._map = /* @__PURE__ */ new Map(), this._start = null, this.doc = null, this._length = 0, this._eH = q1(), this._dEH = q1(), this._searchMarker = null;
  }
  get parent() {
    return this._item ? this._item.parent : null;
  }
  _integrate(e, n) {
    this.doc = e, this._item = n;
  }
  _copy() {
    throw kn();
  }
  clone() {
    throw kn();
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
    H1(this._eH, e);
  }
  observeDeep(e) {
    H1(this._dEH, e);
  }
  unobserve(e) {
    z1(this._eH, e);
  }
  unobserveDeep(e) {
    z1(this._dEH, e);
  }
  toJSON() {
  }
}
const n_ = (t, e, n) => {
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
}, r_ = (t) => {
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
}, No = (t, e) => {
  let n = 0, r = t._start;
  for (; r !== null; ) {
    if (r.countable && !r.deleted) {
      const i = r.content.getContent();
      for (let s = 0; s < i.length; s++)
        e(i[s], n++, t);
    }
    r = r.right;
  }
}, i_ = (t, e) => {
  const n = [];
  return No(t, (r, i) => {
    n.push(e(r, i, t));
  }), n;
}, B1e = (t) => {
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
}, s_ = (t, e) => {
  const n = Wa(t, e);
  let r = t._start;
  for (n !== null && (r = n.p, e -= n.index); r !== null; r = r.right)
    if (!r.deleted && r.countable) {
      if (e < r.length)
        return r.content.getContent()[e];
      e -= r.length;
    }
}, Qc = (t, e, n, r) => {
  let i = n;
  const s = t.doc, o = s.clientID, l = s.store, c = n === null ? e._start : n.right;
  let a = [];
  const h = () => {
    a.length > 0 && (i = new ue(G(o, Te(l, o)), i, i && i.lastId, c, c && c.id, e, null, new ci(a)), i.integrate(t, 0), a = []);
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
              i = new ue(G(o, Te(l, o)), i, i && i.lastId, c, c && c.id, e, null, new Ko(new Uint8Array(u))), i.integrate(t, 0);
              break;
            case Es:
              i = new ue(G(o, Te(l, o)), i, i && i.lastId, c, c && c.id, e, null, new Jo(u)), i.integrate(t, 0);
              break;
            default:
              if (u instanceof Ke)
                i = new ue(G(o, Te(l, o)), i, i && i.lastId, c, c && c.id, e, null, new Ln(u)), i.integrate(t, 0);
              else
                throw new Error("Unexpected content type in insert operation");
          }
      }
  }), h();
}, o_ = kr("Length exceeded!"), l_ = (t, e, n, r) => {
  if (n > e._length)
    throw o_;
  if (n === 0)
    return e._searchMarker && Io(e._searchMarker, n, r.length), Qc(t, e, null, r);
  const i = n, s = Wa(e, n);
  let o = e._start;
  for (s !== null && (o = s.p, n -= s.index, n === 0 && (o = o.prev, n += o && o.countable && !o.deleted ? o.length : 0)); o !== null; o = o.right)
    if (!o.deleted && o.countable) {
      if (n <= o.length) {
        n < o.length && mt(t, G(o.id.client, o.id.clock + n));
        break;
      }
      n -= o.length;
    }
  return e._searchMarker && Io(e._searchMarker, i, r.length), Qc(t, e, o, r);
}, P1e = (t, e, n) => {
  let i = (e._searchMarker || []).reduce((s, o) => o.index > s.index ? o : s, { index: 0, p: e._start }).p;
  if (i)
    for (; i.right; )
      i = i.right;
  return Qc(t, e, i, n);
}, c_ = (t, e, n, r) => {
  if (r === 0)
    return;
  const i = n, s = r, o = Wa(e, n);
  let l = e._start;
  for (o !== null && (l = o.p, n -= o.index); l !== null && n > 0; l = l.right)
    !l.deleted && l.countable && (n < l.length && mt(t, G(l.id.client, l.id.clock + n)), n -= l.length);
  for (; r > 0 && l !== null; )
    l.deleted || (r < l.length && mt(t, G(l.id.client, l.id.clock + r)), l.delete(t), r -= l.length), l = l.right;
  if (r > 0)
    throw o_;
  e._searchMarker && Io(e._searchMarker, i, -s + r);
}, ea = (t, e, n) => {
  const r = e._map.get(n);
  r !== void 0 && r.delete(t);
}, Dp = (t, e, n, r) => {
  const i = e._map.get(n) || null, s = t.doc, o = s.clientID;
  let l;
  if (r == null)
    l = new ci([r]);
  else
    switch (r.constructor) {
      case Number:
      case Object:
      case Boolean:
      case Array:
      case String:
        l = new ci([r]);
        break;
      case Uint8Array:
        l = new Ko(r);
        break;
      case Es:
        l = new Jo(r);
        break;
      default:
        if (r instanceof Ke)
          l = new Ln(r);
        else
          throw new Error("Unexpected content type");
    }
  new ue(G(o, Te(s.store, o)), i, i && i.lastId, null, null, e, n, l).integrate(t, 0);
}, Tp = (t, e) => {
  const n = t._map.get(e);
  return n !== void 0 && !n.deleted ? n.content.getContent()[n.length - 1] : void 0;
}, a_ = (t) => {
  const e = {};
  return t._map.forEach((n, r) => {
    n.deleted || (e[r] = n.content.getContent()[n.length - 1]);
  }), e;
}, h_ = (t, e) => {
  const n = t._map.get(e);
  return n !== void 0 && !n.deleted;
}, Nl = (t) => X0e(t.entries(), (e) => !e[1].deleted);
class F1e extends Ua {
  constructor(e, n) {
    super(e, n), this._transaction = n;
  }
}
class Ui extends Ke {
  constructor() {
    super(), this._prelimContent = [], this._searchMarker = [];
  }
  static from(e) {
    const n = new Ui();
    return n.push(e), n;
  }
  _integrate(e, n) {
    super._integrate(e, n), this.insert(0, this._prelimContent), this._prelimContent = null;
  }
  _copy() {
    return new Ui();
  }
  clone() {
    const e = new Ui();
    return e.insert(0, this.toArray().map(
      (n) => n instanceof Ke ? n.clone() : n
    )), e;
  }
  get length() {
    return this._prelimContent === null ? this._length : this._prelimContent.length;
  }
  _callObserver(e, n) {
    super._callObserver(e, n), ja(this, e, new F1e(this, e));
  }
  insert(e, n) {
    this.doc !== null ? he(this.doc, (r) => {
      l_(r, this, e, n);
    }) : this._prelimContent.splice(e, 0, ...n);
  }
  push(e) {
    this.doc !== null ? he(this.doc, (n) => {
      P1e(n, this, e);
    }) : this._prelimContent.push(...e);
  }
  unshift(e) {
    this.insert(0, e);
  }
  delete(e, n = 1) {
    this.doc !== null ? he(this.doc, (r) => {
      c_(r, this, e, n);
    }) : this._prelimContent.splice(e, n);
  }
  get(e) {
    return s_(this, e);
  }
  toArray() {
    return r_(this);
  }
  slice(e = 0, n = this.length) {
    return n_(this, e, n);
  }
  toJSON() {
    return this.map((e) => e instanceof Ke ? e.toJSON() : e);
  }
  map(e) {
    return i_(this, e);
  }
  forEach(e) {
    No(this, e);
  }
  [Symbol.iterator]() {
    return B1e(this);
  }
  _write(e) {
    e.writeTypeRef(cye);
  }
}
const $1e = (t) => new Ui();
class q1e extends Ua {
  constructor(e, n, r) {
    super(e, n), this.keysChanged = r;
  }
}
class hs extends Ke {
  constructor(e) {
    super(), this._prelimContent = null, e === void 0 ? this._prelimContent = /* @__PURE__ */ new Map() : this._prelimContent = new Map(e);
  }
  _integrate(e, n) {
    super._integrate(e, n), this._prelimContent.forEach((r, i) => {
      this.set(i, r);
    }), this._prelimContent = null;
  }
  _copy() {
    return new hs();
  }
  clone() {
    const e = new hs();
    return this.forEach((n, r) => {
      e.set(r, n instanceof Ke ? n.clone() : n);
    }), e;
  }
  _callObserver(e, n) {
    ja(this, e, new q1e(this, e, n));
  }
  toJSON() {
    const e = {};
    return this._map.forEach((n, r) => {
      if (!n.deleted) {
        const i = n.content.getContent()[n.length - 1];
        e[r] = i instanceof Ke ? i.toJSON() : i;
      }
    }), e;
  }
  get size() {
    return [...Nl(this._map)].length;
  }
  keys() {
    return hu(Nl(this._map), (e) => e[0]);
  }
  values() {
    return hu(Nl(this._map), (e) => e[1].content.getContent()[e[1].length - 1]);
  }
  entries() {
    return hu(Nl(this._map), (e) => [e[0], e[1].content.getContent()[e[1].length - 1]]);
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
      ea(n, this, e);
    }) : this._prelimContent.delete(e);
  }
  set(e, n) {
    return this.doc !== null ? he(this.doc, (r) => {
      Dp(r, this, e, n);
    }) : this._prelimContent.set(e, n), n;
  }
  get(e) {
    return Tp(this, e);
  }
  has(e) {
    return h_(this, e);
  }
  clear() {
    this.doc !== null ? he(this.doc, (e) => {
      this.forEach(function(n, r, i) {
        ea(e, i, r);
      });
    }) : this._prelimContent.clear();
  }
  _write(e) {
    e.writeTypeRef(aye);
  }
}
const H1e = (t) => new hs(), ar = (t, e) => t === e || typeof t == "object" && typeof e == "object" && t && e && Yme(t, e);
class Zf {
  constructor(e, n, r, i) {
    this.left = e, this.right = n, this.index = r, this.currentAttributes = i;
  }
  forward() {
    switch (this.right === null && Zt(), this.right.content.constructor) {
      case Fe:
        this.right.deleted || Ds(this.currentAttributes, this.right.content);
        break;
      default:
        this.right.deleted || (this.index += this.right.length);
        break;
    }
    this.left = this.right, this.right = this.right.right;
  }
}
const Z1 = (t, e, n) => {
  for (; e.right !== null && n > 0; ) {
    switch (e.right.content.constructor) {
      case Fe:
        e.right.deleted || Ds(e.currentAttributes, e.right.content);
        break;
      default:
        e.right.deleted || (n < e.right.length && mt(t, G(e.right.id.client, e.right.id.clock + n)), e.index += e.right.length, n -= e.right.length);
        break;
    }
    e.left = e.right, e.right = e.right.right;
  }
  return e;
}, Bl = (t, e, n) => {
  const r = /* @__PURE__ */ new Map(), i = Wa(e, n);
  if (i) {
    const s = new Zf(i.p.left, i.p, i.index, r);
    return Z1(t, s, n - i.index);
  } else {
    const s = new Zf(null, e._start, 0, r);
    return Z1(t, s, n);
  }
}, u_ = (t, e, n, r) => {
  for (; n.right !== null && (n.right.deleted === !0 || n.right.content.constructor === Fe && ar(r.get(n.right.content.key), n.right.content.value)); )
    n.right.deleted || r.delete(n.right.content.key), n.forward();
  const i = t.doc, s = i.clientID;
  r.forEach((o, l) => {
    const c = n.left, a = n.right, h = new ue(G(s, Te(i.store, s)), c, c && c.lastId, a, a && a.id, e, null, new Fe(l, o));
    h.integrate(t, 0), n.right = h, n.forward();
  });
}, Ds = (t, e) => {
  const { key: n, value: r } = e;
  r === null ? t.delete(n) : t.set(n, r);
}, f_ = (t, e) => {
  for (; t.right !== null; ) {
    if (!(t.right.deleted || t.right.content.constructor === Fe && ar(e[t.right.content.key] || null, t.right.content.value)))
      break;
    t.forward();
  }
}, d_ = (t, e, n, r) => {
  const i = t.doc, s = i.clientID, o = /* @__PURE__ */ new Map();
  for (const l in r) {
    const c = r[l], a = n.currentAttributes.get(l) || null;
    if (!ar(a, c)) {
      o.set(l, a);
      const { left: h, right: u } = n;
      n.right = new ue(G(s, Te(i.store, s)), h, h && h.lastId, u, u && u.id, e, null, new Fe(l, c)), n.right.integrate(t, 0), n.forward();
    }
  }
  return o;
}, uu = (t, e, n, r, i) => {
  n.currentAttributes.forEach((f, d) => {
    i[d] === void 0 && (i[d] = null);
  });
  const s = t.doc, o = s.clientID;
  f_(n, i);
  const l = d_(t, e, n, i), c = r.constructor === String ? new An(r) : r instanceof Ke ? new Ln(r) : new fi(r);
  let { left: a, right: h, index: u } = n;
  e._searchMarker && Io(e._searchMarker, n.index, c.getLength()), h = new ue(G(o, Te(s.store, o)), a, a && a.lastId, h, h && h.id, e, null, c), h.integrate(t, 0), n.right = h, n.index = u, n.forward(), u_(t, e, n, l);
}, X1 = (t, e, n, r, i) => {
  const s = t.doc, o = s.clientID;
  f_(n, i);
  const l = d_(t, e, n, i);
  e:
    for (; n.right !== null && (r > 0 || l.size > 0 && (n.right.deleted || n.right.content.constructor === Fe)); ) {
      if (!n.right.deleted)
        switch (n.right.content.constructor) {
          case Fe: {
            const { key: c, value: a } = n.right.content, h = i[c];
            if (h !== void 0) {
              if (ar(h, a))
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
            r < n.right.length && mt(t, G(n.right.id.client, n.right.id.clock + r)), r -= n.right.length;
            break;
        }
      n.forward();
    }
  if (r > 0) {
    let c = "";
    for (; r > 0; r--)
      c += `
`;
    n.right = new ue(G(o, Te(s.store, o)), n.left, n.left && n.left.lastId, n.right, n.right && n.right.id, e, null, new An(c)), n.right.integrate(t, 0), n.forward();
  }
  u_(t, e, n, l);
}, p_ = (t, e, n, r, i) => {
  let s = e;
  const o = Yt();
  for (; s && (!s.countable || s.deleted); ) {
    if (!s.deleted && s.content.constructor === Fe) {
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
        case Fe: {
          const { key: h, value: u } = a, f = r.get(h) || null;
          (o.get(h) !== a || f === u) && (e.delete(t), l++, !c && (i.get(h) || null) === u && f !== u && (f === null ? i.delete(h) : i.set(h, f))), !c && !e.deleted && Ds(i, a);
          break;
        }
      }
    }
    e = e.right;
  }
  return l;
}, z1e = (t, e) => {
  for (; e && e.right && (e.right.deleted || !e.right.countable); )
    e = e.right;
  const n = /* @__PURE__ */ new Set();
  for (; e && (e.deleted || !e.countable); ) {
    if (!e.deleted && e.content.constructor === Fe) {
      const r = e.content.key;
      n.has(r) ? e.delete(t) : n.add(r);
    }
    e = e.left;
  }
}, V1e = (t) => {
  let e = 0;
  return he(t.doc, (n) => {
    let r = t._start, i = t._start, s = Yt();
    const o = $f(s);
    for (; i; ) {
      if (i.deleted === !1)
        switch (i.content.constructor) {
          case Fe:
            Ds(o, i.content);
            break;
          default:
            e += p_(n, r, i, s, o), s = $f(o), r = i;
            break;
        }
      i = i.right;
    }
  }), e;
}, U1e = (t) => {
  const e = /* @__PURE__ */ new Set(), n = t.doc;
  for (const [r, i] of t.afterState.entries()) {
    const s = t.beforeState.get(r) || 0;
    i !== s && Zk(t, n.store.clients.get(r), s, i, (o) => {
      !o.deleted && o.content.constructor === Fe && o.constructor !== Ot && e.add(o.parent);
    });
  }
  he(n, (r) => {
    cs(t, t.deleteSet, (i) => {
      if (i instanceof Ot || !i.parent._hasFormatting || e.has(i.parent))
        return;
      const s = i.parent;
      i.content.constructor === Fe ? e.add(s) : z1e(r, i);
    });
    for (const i of e)
      V1e(i);
  });
}, Q1 = (t, e, n) => {
  const r = n, i = $f(e.currentAttributes), s = e.right;
  for (; n > 0 && e.right !== null; ) {
    if (e.right.deleted === !1)
      switch (e.right.content.constructor) {
        case Ln:
        case fi:
        case An:
          n < e.right.length && mt(t, G(e.right.id.client, e.right.id.clock + n)), n -= e.right.length, e.right.delete(t);
          break;
      }
    e.forward();
  }
  s && p_(t, s, e.right, i, e.currentAttributes);
  const o = (e.left || e.right).parent;
  return o._searchMarker && Io(o._searchMarker, e.index, -r + n), e;
};
class W1e extends Ua {
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
                h > 0 && (d = { retain: h }, jme(c) || (d.attributes = zme({}, c))), h = 0;
                break;
            }
            d && n.push(d), l = null;
          }
        };
        for (; o !== null; ) {
          switch (o.content.constructor) {
            case Ln:
            case fi:
              this.adds(o) ? this.deletes(o) || (f(), l = "insert", a = o.content.getContent()[0], f()) : this.deletes(o) ? (l !== "delete" && (f(), l = "delete"), u += 1) : o.deleted || (l !== "retain" && (f(), l = "retain"), h += 1);
              break;
            case An:
              this.adds(o) ? this.deletes(o) || (l !== "insert" && (f(), l = "insert"), a += o.content.str) : this.deletes(o) ? (l !== "delete" && (f(), l = "delete"), u += o.length) : o.deleted || (l !== "retain" && (f(), l = "retain"), h += o.length);
              break;
            case Fe: {
              const { key: d, value: p } = o.content;
              if (this.adds(o)) {
                if (!this.deletes(o)) {
                  const g = i.get(d) || null;
                  ar(g, p) ? p !== null && o.delete(r) : (l === "retain" && f(), ar(p, s.get(d) || null) ? delete c[d] : c[d] = p);
                }
              } else if (this.deletes(o)) {
                s.set(d, p);
                const g = i.get(d) || null;
                ar(g, p) || (l === "retain" && f(), c[d] = g);
              } else if (!o.deleted) {
                s.set(d, p);
                const g = c[d];
                g !== void 0 && (ar(g, p) ? g !== null && o.delete(r) : (l === "retain" && f(), p === null ? delete c[d] : c[d] = p));
              }
              o.deleted || (l === "insert" && f(), Ds(i, o.content));
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
class us extends Ke {
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
    return new us();
  }
  clone() {
    const e = new us();
    return e.applyDelta(this.toDelta()), e;
  }
  _callObserver(e, n) {
    super._callObserver(e, n);
    const r = new W1e(this, e, n);
    ja(this, e, r), !e.local && this._hasFormatting && (e._needFormattingCleanup = !0);
  }
  toString() {
    let e = "", n = this._start;
    for (; n !== null; )
      !n.deleted && n.countable && n.content.constructor === An && (e += n.content.str), n = n.right;
    return e;
  }
  toJSON() {
    return this.toString();
  }
  applyDelta(e, { sanitize: n = !0 } = {}) {
    this.doc !== null ? he(this.doc, (r) => {
      const i = new Zf(null, this._start, 0, /* @__PURE__ */ new Map());
      for (let s = 0; s < e.length; s++) {
        const o = e[s];
        if (o.insert !== void 0) {
          const l = !n && typeof o.insert == "string" && s === e.length - 1 && i.right === null && o.insert.slice(-1) === `
` ? o.insert.slice(0, -1) : o.insert;
          (typeof l != "string" || l.length > 0) && uu(r, this, i, l, o.attributes || {});
        } else
          o.retain !== void 0 ? X1(r, this, i, o.retain, o.attributes || {}) : o.delete !== void 0 && Q1(r, i, o.delete);
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
        if (Ps(c, e) || n !== void 0 && Ps(c, n))
          switch (c.content.constructor) {
            case An: {
              const u = s.get("ychange");
              e !== void 0 && !Ps(c, e) ? (u === void 0 || u.user !== c.id.client || u.type !== "removed") && (a(), s.set("ychange", r ? r("removed", c.id) : { type: "removed" })) : n !== void 0 && !Ps(c, n) ? (u === void 0 || u.user !== c.id.client || u.type !== "added") && (a(), s.set("ychange", r ? r("added", c.id) : { type: "added" })) : u !== void 0 && (a(), s.delete("ychange")), l += c.content.str;
              break;
            }
            case Ln:
            case fi: {
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
            case Fe:
              Ps(c, e) && (a(), Ds(s, c.content));
              break;
          }
        c = c.right;
      }
      a();
    };
    return e || n ? he(o, (u) => {
      e && Kf(u, e), n && Kf(u, n), h();
    }, "cleanup") : h(), i;
  }
  insert(e, n, r) {
    if (n.length <= 0)
      return;
    const i = this.doc;
    i !== null ? he(i, (s) => {
      const o = Bl(s, this, e);
      r || (r = {}, o.currentAttributes.forEach((l, c) => {
        r[c] = l;
      })), uu(s, this, o, n, r);
    }) : this._pending.push(() => this.insert(e, n, r));
  }
  insertEmbed(e, n, r = {}) {
    const i = this.doc;
    i !== null ? he(i, (s) => {
      const o = Bl(s, this, e);
      uu(s, this, o, n, r);
    }) : this._pending.push(() => this.insertEmbed(e, n, r));
  }
  delete(e, n) {
    if (n === 0)
      return;
    const r = this.doc;
    r !== null ? he(r, (i) => {
      Q1(i, Bl(i, this, e), n);
    }) : this._pending.push(() => this.delete(e, n));
  }
  format(e, n, r) {
    if (n === 0)
      return;
    const i = this.doc;
    i !== null ? he(i, (s) => {
      const o = Bl(s, this, e);
      o.right !== null && X1(s, this, o, n, r);
    }) : this._pending.push(() => this.format(e, n, r));
  }
  removeAttribute(e) {
    this.doc !== null ? he(this.doc, (n) => {
      ea(n, this, e);
    }) : this._pending.push(() => this.removeAttribute(e));
  }
  setAttribute(e, n) {
    this.doc !== null ? he(this.doc, (r) => {
      Dp(r, this, e, n);
    }) : this._pending.push(() => this.setAttribute(e, n));
  }
  getAttribute(e) {
    return Tp(this, e);
  }
  getAttributes() {
    return a_(this);
  }
  _write(e) {
    e.writeTypeRef(hye);
  }
}
const j1e = (t) => new us();
class fu {
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
        if (n = e.content.type, !e.deleted && (n.constructor === Bo || n.constructor === li) && n._start !== null)
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
class li extends Ke {
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
    return new li();
  }
  clone() {
    const e = new li();
    return e.insert(0, this.toArray().map((n) => n instanceof Ke ? n.clone() : n)), e;
  }
  get length() {
    return this._prelimContent === null ? this._length : this._prelimContent.length;
  }
  createTreeWalker(e) {
    return new fu(this, e);
  }
  querySelector(e) {
    e = e.toUpperCase();
    const r = new fu(this, (i) => i.nodeName && i.nodeName.toUpperCase() === e).next();
    return r.done ? null : r.value;
  }
  querySelectorAll(e) {
    return e = e.toUpperCase(), xr(new fu(this, (n) => n.nodeName && n.nodeName.toUpperCase() === e));
  }
  _callObserver(e, n) {
    ja(this, e, new K1e(this, n, e));
  }
  toString() {
    return i_(this, (e) => e.toString()).join("");
  }
  toJSON() {
    return this.toString();
  }
  toDOM(e = document, n = {}, r) {
    const i = e.createDocumentFragment();
    return r !== void 0 && r._createAssociation(i, this), No(this, (s) => {
      i.insertBefore(s.toDOM(e, n, r), null);
    }), i;
  }
  insert(e, n) {
    this.doc !== null ? he(this.doc, (r) => {
      l_(r, this, e, n);
    }) : this._prelimContent.splice(e, 0, ...n);
  }
  insertAfter(e, n) {
    if (this.doc !== null)
      he(this.doc, (r) => {
        const i = e && e instanceof Ke ? e._item : e;
        Qc(r, this, i, n);
      });
    else {
      const r = this._prelimContent, i = e === null ? 0 : r.findIndex((s) => s === e) + 1;
      if (i === 0 && e !== null)
        throw kr("Reference item not found");
      r.splice(i, 0, ...n);
    }
  }
  delete(e, n = 1) {
    this.doc !== null ? he(this.doc, (r) => {
      c_(r, this, e, n);
    }) : this._prelimContent.splice(e, n);
  }
  toArray() {
    return r_(this);
  }
  push(e) {
    this.insert(this.length, e);
  }
  unshift(e) {
    this.insert(0, e);
  }
  get(e) {
    return s_(this, e);
  }
  slice(e = 0, n = this.length) {
    return n_(this, e, n);
  }
  forEach(e) {
    No(this, e);
  }
  _write(e) {
    e.writeTypeRef(fye);
  }
}
const G1e = (t) => new li();
class Bo extends li {
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
    return new Bo(this.nodeName);
  }
  clone() {
    const e = new Bo(this.nodeName), n = this.getAttributes();
    return Ume(n, (r, i) => {
      typeof r == "string" && e.setAttribute(i, r);
    }), e.insert(0, this.toArray().map((r) => r instanceof Ke ? r.clone() : r)), e;
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
      ea(n, this, e);
    }) : this._prelimAttrs.delete(e);
  }
  setAttribute(e, n) {
    this.doc !== null ? he(this.doc, (r) => {
      Dp(r, this, e, n);
    }) : this._prelimAttrs.set(e, n);
  }
  getAttribute(e) {
    return Tp(this, e);
  }
  hasAttribute(e) {
    return h_(this, e);
  }
  getAttributes() {
    return a_(this);
  }
  toDOM(e = document, n = {}, r) {
    const i = e.createElement(this.nodeName), s = this.getAttributes();
    for (const o in s) {
      const l = s[o];
      typeof l == "string" && i.setAttribute(o, l);
    }
    return No(this, (o) => {
      i.appendChild(o.toDOM(e, n, r));
    }), r !== void 0 && r._createAssociation(i, this), i;
  }
  _write(e) {
    e.writeTypeRef(uye), e.writeKey(this.nodeName);
  }
}
const Y1e = (t) => new Bo(t.readKey());
class K1e extends Ua {
  constructor(e, n, r) {
    super(e, r), this.childListChanged = !1, this.attributesChanged = /* @__PURE__ */ new Set(), n.forEach((i) => {
      i === null ? this.childListChanged = !0 : this.attributesChanged.add(i);
    });
  }
}
class ta extends hs {
  constructor(e) {
    super(), this.hookName = e;
  }
  _copy() {
    return new ta(this.hookName);
  }
  clone() {
    const e = new ta(this.hookName);
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
    e.writeTypeRef(dye), e.writeKey(this.hookName);
  }
}
const J1e = (t) => new ta(t.readKey());
class na extends us {
  get nextSibling() {
    const e = this._item ? this._item.next : null;
    return e ? e.content.type : null;
  }
  get prevSibling() {
    const e = this._item ? this._item.prev : null;
    return e ? e.content.type : null;
  }
  _copy() {
    return new na();
  }
  clone() {
    const e = new na();
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
    e.writeTypeRef(pye);
  }
}
const Z1e = (t) => new na();
class Mp {
  constructor(e, n) {
    this.id = e, this.length = n;
  }
  get deleted() {
    throw kn();
  }
  mergeWith(e) {
    return !1;
  }
  write(e, n, r) {
    throw kn();
  }
  integrate(e, n) {
    throw kn();
  }
}
const X1e = 0;
class Ot extends Mp {
  get deleted() {
    return !0;
  }
  delete() {
  }
  mergeWith(e) {
    return this.constructor !== e.constructor ? !1 : (this.length += e.length, !0);
  }
  integrate(e, n) {
    n > 0 && (this.id.clock += n, this.length -= n), Jk(e.doc.store, this);
  }
  write(e, n) {
    e.writeInfo(X1e), e.writeLen(this.length - n);
  }
  getMissing(e, n) {
    return null;
  }
}
class Ko {
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
    return new Ko(this.content);
  }
  splice(e) {
    throw kn();
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
const Q1e = (t) => new Ko(t.readBuf());
class Po {
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
    return new Po(this.len);
  }
  splice(e) {
    const n = new Po(this.len - e);
    return this.len = e, n;
  }
  mergeWith(e) {
    return this.len += e.len, !0;
  }
  integrate(e, n) {
    Lo(e.deleteSet, n.id.client, n.id.clock, this.len), n.markDeleted();
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
const eye = (t) => new Po(t.readLen()), g_ = (t, e) => new Es({ guid: t, ...e, shouldLoad: e.shouldLoad || e.autoLoad || !1 });
class Jo {
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
    return new Jo(g_(this.doc.guid, this.opts));
  }
  splice(e) {
    throw kn();
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
const tye = (t) => new Jo(g_(t.readString(), t.readAny()));
class fi {
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
    return new fi(this.embed);
  }
  splice(e) {
    throw kn();
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
const nye = (t) => new fi(t.readJSON());
class Fe {
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
    return new Fe(this.key, this.value);
  }
  splice(e) {
    throw kn();
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
const rye = (t) => new Fe(t.readKey(), t.readJSON());
class ra {
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
    return new ra(this.arr);
  }
  splice(e) {
    const n = new ra(this.arr.slice(e));
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
const iye = (t) => {
  const e = t.readLen(), n = [];
  for (let r = 0; r < e; r++) {
    const i = t.readString();
    i === "undefined" ? n.push(void 0) : n.push(JSON.parse(i));
  }
  return new ra(n);
};
class ci {
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
    return new ci(this.arr);
  }
  splice(e) {
    const n = new ci(this.arr.slice(e));
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
const sye = (t) => {
  const e = t.readLen(), n = [];
  for (let r = 0; r < e; r++)
    n.push(t.readAny());
  return new ci(n);
};
class An {
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
    return new An(this.str);
  }
  splice(e) {
    const n = new An(this.str.slice(e));
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
const oye = (t) => new An(t.readString()), lye = [
  $1e,
  H1e,
  j1e,
  Y1e,
  G1e,
  J1e,
  Z1e
], cye = 0, aye = 1, hye = 2, uye = 3, fye = 4, dye = 5, pye = 6;
class Ln {
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
    return new Ln(this.type._copy());
  }
  splice(e) {
    throw kn();
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
const gye = (t) => new Ln(lye[t.readTypeRef()](t)), Xf = (t, e) => {
  let n = e, r = 0, i;
  do
    r > 0 && (n = G(n.client, n.clock + r)), i = ac(t, n), r = n.clock - i.id.clock, n = i.redone;
  while (n !== null && i instanceof ue);
  return {
    item: i,
    diff: r
  };
}, Op = (t, e) => {
  for (; t !== null && t.keep !== e; )
    t.keep = e, t = t.parent._item;
}, ia = (t, e, n) => {
  const { client: r, clock: i } = e.id, s = new ue(
    G(r, i + n),
    e,
    G(r, i + n - 1),
    e.right,
    e.rightOrigin,
    e.parent,
    e.parentSub,
    e.content.splice(n)
  );
  return e.deleted && s.markDeleted(), e.keep && (s.keep = !0), e.redone !== null && (s.redone = G(e.redone.client, e.redone.clock + n)), e.right = s, s.right !== null && (s.right.left = s), t._mergeStructs.push(s), s.parentSub !== null && s.right === null && s.parent._map.set(s.parentSub, s), e.length = n, s;
}, ey = (t, e) => Tme(t, (n) => Go(n.deletions, e)), m_ = (t, e, n, r, i, s) => {
  const o = t.doc, l = o.store, c = o.clientID, a = e.redone;
  if (a !== null)
    return mt(t, a);
  let h = e.parent._item, u = null, f;
  if (h !== null && h.deleted === !0) {
    if (h.redone === null && (!n.has(h) || m_(t, h, n, r, i, s) === null))
      return null;
    for (; h.redone !== null; )
      h = mt(t, h.redone);
  }
  const d = h === null ? e.parent : h.content.type;
  if (e.parentSub === null) {
    for (u = e.left, f = e; u !== null; ) {
      let y = u;
      for (; y !== null && y.parent._item !== h; )
        y = y.redone === null ? null : mt(t, y.redone);
      if (y !== null && y.parent._item === h) {
        u = y;
        break;
      }
      u = u.left;
    }
    for (; f !== null; ) {
      let y = f;
      for (; y !== null && y.parent._item !== h; )
        y = y.redone === null ? null : mt(t, y.redone);
      if (y !== null && y.parent._item === h) {
        f = y;
        break;
      }
      f = f.right;
    }
  } else if (f = null, e.right && !i) {
    for (u = e; u !== null && u.right !== null && (u.right.redone || Go(r, u.right.id) || ey(s.undoStack, u.right.id) || ey(s.redoStack, u.right.id)); )
      for (u = u.right; u.redone; )
        u = mt(t, u.redone);
    if (u && u.right !== null)
      return null;
  } else
    u = d._map.get(e.parentSub) || null;
  const p = Te(l, c), g = G(c, p), m = new ue(
    g,
    u,
    u && u.lastId,
    f,
    f && f.id,
    d,
    e.parentSub,
    e.content.copy()
  );
  return e.redone = g, Op(m, !0), m.integrate(t, 0), m;
};
class ue extends Mp {
  constructor(e, n, r, i, s, o, l, c) {
    super(e, c.getLength()), this.origin = r, this.left = n, this.right = i, this.rightOrigin = s, this.parent = o, this.parentSub = l, this.redone = null, this.content = c, this.info = this.content.isCountable() ? L1 : 0;
  }
  set marker(e) {
    (this.info & ou) > 0 !== e && (this.info ^= ou);
  }
  get marker() {
    return (this.info & ou) > 0;
  }
  get keep() {
    return (this.info & O1) > 0;
  }
  set keep(e) {
    this.keep !== e && (this.info ^= O1);
  }
  get countable() {
    return (this.info & L1) > 0;
  }
  get deleted() {
    return (this.info & su) > 0;
  }
  set deleted(e) {
    this.deleted !== e && (this.info ^= su);
  }
  markDeleted() {
    this.info |= su;
  }
  getMissing(e, n) {
    if (this.origin && this.origin.client !== this.id.client && this.origin.clock >= Te(n, this.origin.client))
      return this.origin.client;
    if (this.rightOrigin && this.rightOrigin.client !== this.id.client && this.rightOrigin.clock >= Te(n, this.rightOrigin.client))
      return this.rightOrigin.client;
    if (this.parent && this.parent.constructor === Vi && this.id.client !== this.parent.client && this.parent.clock >= Te(n, this.parent.client))
      return this.parent.client;
    if (this.origin && (this.left = W1(e, n, this.origin), this.origin = this.left.lastId), this.rightOrigin && (this.right = mt(e, this.rightOrigin), this.rightOrigin = this.right.id), (this.left && this.left.constructor === Ot || this.right && this.right.constructor === Ot) && (this.parent = null), !this.parent)
      this.left && this.left.constructor === ue && (this.parent = this.left.parent, this.parentSub = this.left.parentSub), this.right && this.right.constructor === ue && (this.parent = this.right.parent, this.parentSub = this.right.parentSub);
    else if (this.parent.constructor === Vi) {
      const r = ac(n, this.parent);
      r.constructor === Ot ? this.parent = null : this.parent = r.content.type;
    }
    return null;
  }
  integrate(e, n) {
    if (n > 0 && (this.id.clock += n, this.left = W1(e, e.doc.store, G(this.id.client, this.id.clock - 1)), this.origin = this.left.lastId, this.content = this.content.splice(n), this.length -= n), this.parent) {
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
          if (o.add(i), s.add(i), Ri(this.origin, i.origin)) {
            if (i.id.client < this.id.client)
              r = i, s.clear();
            else if (Ri(this.rightOrigin, i.rightOrigin))
              break;
          } else if (i.origin !== null && o.has(ac(e.doc.store, i.origin)))
            s.has(ac(e.doc.store, i.origin)) || (r = i, s.clear());
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
      this.right !== null ? this.right.left = this : this.parentSub !== null && (this.parent._map.set(this.parentSub, this), this.left !== null && this.left.delete(e)), this.parentSub === null && this.countable && !this.deleted && (this.parent._length += this.length), Jk(e.doc.store, this), this.content.integrate(e, this), G1(e, this.parent, this.parentSub), (this.parent._item !== null && this.parent._item.deleted || this.parentSub !== null && this.right !== null) && this.delete(e);
    } else
      new Ot(this.id, this.length).integrate(e, 0);
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
    return this.length === 1 ? this.id : G(this.id.client, this.id.clock + this.length - 1);
  }
  mergeWith(e) {
    if (this.constructor === e.constructor && Ri(e.origin, this.lastId) && this.right === e && Ri(this.rightOrigin, e.rightOrigin) && this.id.client === e.id.client && this.id.clock + this.length === e.id.clock && this.deleted === e.deleted && this.redone === null && e.redone === null && this.content.constructor === e.content.constructor && this.content.mergeWith(e.content)) {
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
      this.countable && this.parentSub === null && (n._length -= this.length), this.markDeleted(), Lo(e.deleteSet, this.id.client, this.id.clock, this.length), G1(e, n, this.parentSub), this.content.delete(e);
    }
  }
  gc(e, n) {
    if (!this.deleted)
      throw Zt();
    this.content.gc(e), n ? x1e(e, this, new Ot(this.id, this.length)) : this.content = new Po(this.length);
  }
  write(e, n) {
    const r = n > 0 ? G(this.id.client, this.id.clock + n - 1) : this.origin, i = this.rightOrigin, s = this.parentSub, o = this.content.getRef() & qa | (r === null ? 0 : Et) | (i === null ? 0 : Hn) | (s === null ? 0 : To);
    if (e.writeInfo(o), r !== null && e.writeLeftID(r), i !== null && e.writeRightID(i), r === null && i === null) {
      const l = this.parent;
      if (l._item !== void 0) {
        const c = l._item;
        if (c === null) {
          const a = Gk(l);
          e.writeParentInfo(!0), e.writeString(a);
        } else
          e.writeParentInfo(!1), e.writeLeftID(c.id);
      } else
        l.constructor === String ? (e.writeParentInfo(!0), e.writeString(l)) : l.constructor === Vi ? (e.writeParentInfo(!1), e.writeLeftID(l)) : Zt();
      s !== null && e.writeString(s);
    }
    this.content.write(e, n);
  }
}
const y_ = (t, e) => mye[e & qa](t), mye = [
  () => {
    Zt();
  },
  eye,
  iye,
  Q1e,
  oye,
  nye,
  rye,
  gye,
  sye,
  tye,
  () => {
    Zt();
  }
], yye = 10;
class Lt extends Mp {
  get deleted() {
    return !0;
  }
  delete() {
  }
  mergeWith(e) {
    return this.constructor !== e.constructor ? !1 : (this.length += e.length, !0);
  }
  integrate(e, n) {
    Zt();
  }
  write(e, n) {
    e.writeInfo(yye), z(e.restEncoder, this.length - n);
  }
  getMissing(e, n) {
    return null;
  }
}
const b_ = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : {}, v_ = "__ $YJS$ __";
b_[v_] === !0 && console.error("Yjs was already imported. This breaks constructor checks and will lead to issues! - https://github.com/yjs/yjs/issues/438");
b_[v_] = !0;
class Lp {
  constructor(e, n) {
    this.yanchor = e, this.yhead = n;
  }
  toJSON() {
    return {
      yanchor: V1(this.yanchor),
      yhead: V1(this.yhead)
    };
  }
  static fromJSON(e) {
    return new Lp(Ro(e.yanchor), Ro(e.yhead));
  }
}
class bye {
  constructor(e, n) {
    this.ytext = e, this.awareness = n, this.undoManager = new _p(e);
  }
  toYPos(e, n = 0) {
    return Gf(this.ytext, e, n);
  }
  fromYPos(e) {
    const n = Yf(Ro(e), this.ytext.doc);
    if (n == null || n.type !== this.ytext)
      throw new Error("[y-codemirror] The position you want to retrieve was created by a different document");
    return {
      pos: n.index,
      assoc: n.assoc
    };
  }
  toYRange(e) {
    const n = e.assoc, r = this.toYPos(e.anchor, n), i = this.toYPos(e.head, n);
    return new Lp(r, i);
  }
  fromYRange(e) {
    const n = this.fromYPos(e.yanchor), r = this.fromYPos(e.yhead);
    return n.pos === r.pos ? S.cursor(r.pos, r.assoc) : S.range(n.pos, r.pos);
  }
}
const Ga = N.define({
  combine(t) {
    return t[t.length - 1];
  }
}), Qf = en.define();
class vye {
  constructor(e) {
    this.view = e, this.conf = e.state.facet(Ga), this._observer = (n, r) => {
      if (r.origin !== this.conf) {
        const i = n.delta, s = [];
        let o = 0;
        for (let l = 0; l < i.length; l++) {
          const c = i[l];
          c.insert != null ? s.push({ from: o, to: o, insert: c.insert }) : c.delete != null ? (s.push({ from: o, to: o + c.delete, insert: "" }), o += c.delete) : o += c.retain;
        }
        e.dispatch({ changes: s, annotations: [Qf.of(this.conf)] });
      }
    }, this._ytext = this.conf.ytext, this._ytext.observe(this._observer);
  }
  update(e) {
    if (!e.docChanged || e.transactions.length > 0 && e.transactions[0].annotation(Qf) === this.conf)
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
const wye = Ae.fromClass(vye), xye = M.baseTheme({
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
}), kye = en.define();
class _ye extends tn {
  constructor(e, n) {
    super(), this.color = e, this.name = n;
  }
  toDOM() {
    return au("span", [kt("class", "cm-ySelectionCaret"), kt("style", `background-color: ${this.color}; border-color: ${this.color}`)], [
      Rl("\u2060"),
      au("div", [
        kt("class", "cm-ySelectionCaretDot")
      ]),
      Rl("\u2060"),
      au("div", [
        kt("class", "cm-ySelectionInfo")
      ], [
        Rl(this.name)
      ]),
      Rl("\u2060")
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
class Cye {
  constructor(e) {
    this.conf = e.state.facet(Ga), this._listener = ({ added: n, updated: r, removed: i }, s, o) => {
      n.concat(r).concat(i).findIndex((c) => c !== this.conf.awareness.doc.clientID) >= 0 && e.dispatch({ annotations: [kye.of([])] });
    }, this._awareness = this.conf.awareness, this._awareness.on("change", this._listener), this.decorations = Q.of([]);
  }
  destroy() {
    this._awareness.off("change", this._listener);
  }
  update(e) {
    const n = this.conf.ytext, r = n.doc, i = this.conf.awareness, s = [], o = this.conf.awareness.getLocalState();
    if (o != null) {
      const l = e.view.hasFocus && e.view.dom.ownerDocument.hasFocus(), c = l ? e.state.selection.main : null, a = o.cursor == null ? null : Ro(o.cursor.anchor), h = o.cursor == null ? null : Ro(o.cursor.head);
      if (c != null) {
        const u = Gf(n, c.anchor), f = Gf(n, c.head);
        (o.cursor == null || !U1(a, u) || !U1(h, f)) && i.setLocalStateField("cursor", {
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
      const h = Yf(a.anchor, r), u = Yf(a.head, r);
      if (h == null || u == null || h.type !== n || u.type !== n)
        return;
      const { color: f = "#30bced", name: d = "Anonymous" } = l.user || {}, p = l.user && l.user.colorLight || f + "33", g = $a(h.index, u.index), m = Er(h.index, u.index), y = e.view.state.doc.lineAt(g), b = e.view.state.doc.lineAt(m);
      if (y.number === b.number)
        s.push({
          from: g,
          to: m,
          value: P.mark({
            attributes: { style: `background-color: ${p}` },
            class: "cm-ySelection"
          })
        });
      else {
        s.push({
          from: g,
          to: y.from + y.length,
          value: P.mark({
            attributes: { style: `background-color: ${p}` },
            class: "cm-ySelection"
          })
        }), s.push({
          from: b.from,
          to: m,
          value: P.mark({
            attributes: { style: `background-color: ${p}` },
            class: "cm-ySelection"
          })
        });
        for (let k = y.number + 1; k < b.number; k++) {
          const v = e.view.state.doc.line(k).from;
          s.push({
            from: v,
            to: v,
            value: P.line({
              attributes: { style: `background-color: ${p}`, class: "cm-yLineSelection" }
            })
          });
        }
      }
      s.push({
        from: u.index,
        to: u.index,
        value: P.widget({
          side: u.index - h.index > 0 ? -1 : 1,
          block: !1,
          widget: new _ye(f, d)
        })
      });
    }), this.decorations = P.set(s, !0);
  }
}
const Sye = Ae.fromClass(Cye, {
  decorations: (t) => t.decorations
}), Aye = () => {
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
class Eye {
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
const Ya = N.define({
  combine(t) {
    return t[t.length - 1];
  }
});
class Dye {
  constructor(e) {
    this.view = e, this.conf = e.state.facet(Ya), this._undoManager = this.conf.undoManager, this.syncConf = e.state.facet(Ga), this._beforeChangeSelection = null, this._mux = Aye(), this._onStackItemAdded = ({ stackItem: n, changedParentTypes: r }) => {
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
    e.selectionSet && (e.transactions.length === 0 || e.transactions[0].annotation(Qf) !== this.syncConf) && this._storeSelection();
  }
  destroy() {
    this._undoManager.off("stack-item-added", this._onStackItemAdded), this._undoManager.off("stack-item-popped", this._onStackItemPopped), this._undoManager.removeTrackedOrigin(this.syncConf);
  }
}
const Tye = Ae.fromClass(Dye), Mye = ({ state: t, dispatch: e }) => t.facet(Ya).undo() || !0, Oye = ({ state: t, dispatch: e }) => t.facet(Ya).redo() || !0, Lye = (t, e, { undoManager: n = new _p(t) } = {}) => {
  const r = new bye(t, e), i = [
    Ga.of(r),
    wye
  ];
  return e && i.push(
    xye,
    Sye
  ), n !== !1 && i.push(
    Ya.of(new Eye(n)),
    Tye,
    M.domEventHandlers({
      beforeinput(s, o) {
        return s.inputType === "historyUndo" ? Mye(o) : s.inputType === "historyRedo" ? Oye(o) : !1;
      }
    })
  ), i;
}, du = 3e4;
class w_ extends Fa {
  constructor(e) {
    super(), this.doc = e, this.clientID = e.clientID, this.states = /* @__PURE__ */ new Map(), this.meta = /* @__PURE__ */ new Map(), this._checkInterval = setInterval(() => {
      const n = _r();
      this.getLocalState() !== null && du / 2 <= n - this.meta.get(this.clientID).lastUpdated && this.setLocalState(this.getLocalState());
      const r = [];
      this.meta.forEach((i, s) => {
        s !== this.clientID && du <= n - i.lastUpdated && this.states.has(s) && r.push(s);
      }), r.length > 0 && Rp(this, r, "timeout");
    }, jn(du / 10)), e.on("destroy", () => {
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
      lastUpdated: _r()
    });
    const o = [], l = [], c = [], a = [];
    e === null ? a.push(n) : s == null ? e != null && o.push(n) : (l.push(n), no(s, e) || c.push(n)), (o.length > 0 || c.length > 0 || a.length > 0) && this.emit("change", [{ added: o, updated: c, removed: a }, "local"]), this.emit("update", [{ added: o, updated: l, removed: a }, "local"]);
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
const Rp = (t, e, n) => {
  const r = [];
  for (let i = 0; i < e.length; i++) {
    const s = e[i];
    if (t.states.has(s)) {
      if (t.states.delete(s), s === t.clientID) {
        const o = t.meta.get(s);
        t.meta.set(s, {
          clock: o.clock + 1,
          lastUpdated: _r()
        });
      }
      r.push(s);
    }
  }
  r.length > 0 && (t.emit("change", [{ added: [], updated: [], removed: r }, n]), t.emit("update", [{ added: [], updated: [], removed: r }, n]));
}, ro = (t, e, n = t.states) => {
  const r = e.length, i = Xe();
  z(i, r);
  for (let s = 0; s < r; s++) {
    const o = e[s], l = n.get(o) || null, c = t.meta.get(o).clock;
    z(i, o), z(i, c), Kr(i, JSON.stringify(l));
  }
  return _e(i);
}, Rye = (t, e, n) => {
  const r = Dr(e), i = _r(), s = [], o = [], l = [], c = [], a = W(r);
  for (let h = 0; h < a; h++) {
    const u = W(r);
    let f = W(r);
    const d = JSON.parse(dr(r)), p = t.meta.get(u), g = t.states.get(u), m = p === void 0 ? 0 : p.clock;
    (m < f || m === f && d === null && t.states.has(u)) && (d === null ? u === t.clientID && t.getLocalState() != null ? f++ : t.states.delete(u) : t.states.set(u, d), t.meta.set(u, {
      clock: f,
      lastUpdated: i
    }), p === void 0 && d !== null ? s.push(u) : p !== void 0 && d === null ? c.push(u) : d !== null && (no(d, g) || l.push(u), o.push(u)));
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
}, x_ = /* @__PURE__ */ new Map();
class Iye {
  constructor(e) {
    this.room = e, this.onmessage = null, this._onChange = (n) => n.key === e && this.onmessage !== null && this.onmessage({ data: b0e(n.newValue || "") }), qme(this._onChange);
  }
  postMessage(e) {
    _k.setItem(this.room, y0e(f0e(e)));
  }
  close() {
    Hme(this._onChange);
  }
}
const Nye = typeof BroadcastChannel > "u" ? Iye : BroadcastChannel, Ip = (t) => Gn(x_, t, () => {
  const e = si(), n = new Nye(t);
  return n.onmessage = (r) => e.forEach((i) => i(r.data, "broadcastchannel")), {
    bc: n,
    subs: e
  };
}), Bye = (t, e) => (Ip(t).subs.add(e), e), Pye = (t, e) => {
  const n = Ip(t), r = n.subs.delete(e);
  return r && n.subs.size === 0 && (n.bc.close(), x_.delete(t)), r;
}, Ei = (t, e, n = null) => {
  const r = Ip(t);
  r.bc.postMessage(e), r.subs.forEach((i) => i(e, n));
}, k_ = 0, Np = 1, __ = 2, ed = (t, e) => {
  z(t, k_);
  const n = p1e(e);
  Ee(t, n);
}, C_ = (t, e, n) => {
  z(t, Np), Ee(t, h1e(e, n));
}, Fye = (t, e, n) => C_(e, n, Ze(t)), S_ = (t, e, n) => {
  try {
    l1e(e, Ze(t), n);
  } catch (r) {
    console.error("Caught error while handling a Yjs update", r);
  }
}, $ye = (t, e) => {
  z(t, __), Ee(t, e);
}, qye = S_, Hye = (t, e, n, r) => {
  const i = W(t);
  switch (i) {
    case k_:
      Fye(t, e, n);
      break;
    case Np:
      S_(t, n, r);
      break;
    case __:
      qye(t, n, r);
      break;
    default:
      throw new Error("Unknown message type");
  }
  return i;
}, zye = 0, Vye = (t, e, n) => {
  switch (W(t)) {
    case zye:
      n(e, dr(t));
  }
}, Uye = (t) => Wme(t, (e, n) => `${encodeURIComponent(n)}=${encodeURIComponent(e)}`).join("&"), zr = 0, A_ = 3, Wi = 1, Wye = 2, Zo = [];
Zo[zr] = (t, e, n, r, i) => {
  z(t, zr);
  const s = Hye(
    e,
    t,
    n.doc,
    n
  );
  r && s === Np && !n.synced && (n.synced = !0);
};
Zo[A_] = (t, e, n, r, i) => {
  z(t, Wi), Ee(
    t,
    ro(
      n.awareness,
      Array.from(n.awareness.getStates().keys())
    )
  );
};
Zo[Wi] = (t, e, n, r, i) => {
  Rye(
    n.awareness,
    Ze(e),
    n
  );
};
Zo[Wye] = (t, e, n, r, i) => {
  Vye(
    e,
    n.doc,
    (s, o) => jye(n, o)
  );
};
const ty = 3e4, jye = (t, e) => console.warn(`Permission denied to access ${t.url}.
${e}`), E_ = (t, e, n) => {
  const r = Dr(e), i = Xe(), s = W(r), o = t.messageHandlers[s];
  return o ? o(i, r, t, n, s) : console.error("Unable to compute message"), i;
}, D_ = (t) => {
  if (t.shouldConnect && t.ws === null) {
    const e = new t._WS(t.url);
    e.binaryType = "arraybuffer", t.ws = e, t.wsconnecting = !0, t.wsconnected = !1, t.synced = !1, e.onmessage = (n) => {
      t.wsLastMessageReceived = _r();
      const r = E_(t, new Uint8Array(n.data), !0);
      mp(r) > 1 && e.send(_e(r));
    }, e.onerror = (n) => {
      t.emit("connection-error", [n, t]);
    }, e.onclose = (n) => {
      t.emit("connection-close", [n, t]), t.ws = null, t.wsconnecting = !1, t.wsconnected ? (t.wsconnected = !1, t.synced = !1, Rp(
        t.awareness,
        Array.from(t.awareness.getStates().keys()).filter(
          (r) => r !== t.doc.clientID
        ),
        t
      ), t.emit("status", [{
        status: "disconnected"
      }])) : t.wsUnsuccessfulReconnects++, setTimeout(
        D_,
        $a(
          Mme(2, t.wsUnsuccessfulReconnects) * 100,
          t.maxBackoffTime
        ),
        t
      );
    }, e.onopen = () => {
      t.wsLastMessageReceived = _r(), t.wsconnecting = !1, t.wsconnected = !0, t.wsUnsuccessfulReconnects = 0, t.emit("status", [{
        status: "connected"
      }]);
      const n = Xe();
      if (z(n, zr), ed(n, t.doc), e.send(_e(n)), t.awareness.getLocalState() !== null) {
        const r = Xe();
        z(r, Wi), Ee(
          r,
          ro(t.awareness, [
            t.doc.clientID
          ])
        ), e.send(_e(r));
      }
    }, t.emit("status", [{
      status: "connecting"
    }]);
  }
}, pu = (t, e) => {
  const n = t.ws;
  t.wsconnected && n && n.readyState === n.OPEN && n.send(e), t.bcconnected && Ei(t.bcChannel, e, t);
};
class Gye extends Fa {
  constructor(e, n, r, {
    connect: i = !0,
    awareness: s = new w_(r),
    params: o = {},
    WebSocketPolyfill: l = WebSocket,
    resyncInterval: c = -1,
    maxBackoffTime: a = 2500,
    disableBc: h = !1
  } = {}) {
    for (super(); e[e.length - 1] === "/"; )
      e = e.slice(0, e.length - 1);
    const u = Uye(o);
    this.maxBackoffTime = a, this.bcChannel = e + "/" + n, this.url = e + "/" + n + (u.length === 0 ? "" : "?" + u), this.roomname = n, this.doc = r, this._WS = l, this.awareness = s, this.wsconnected = !1, this.wsconnecting = !1, this.bcconnected = !1, this.disableBc = h, this.wsUnsuccessfulReconnects = 0, this.messageHandlers = Zo.slice(), this._synced = !1, this.ws = null, this.wsLastMessageReceived = 0, this.shouldConnect = i, this._resyncInterval = 0, c > 0 && (this._resyncInterval = setInterval(() => {
      if (this.ws && this.ws.readyState === WebSocket.OPEN) {
        const f = Xe();
        z(f, zr), ed(f, r), this.ws.send(_e(f));
      }
    }, c)), this._bcSubscriber = (f, d) => {
      if (d !== this) {
        const p = E_(this, new Uint8Array(f), !1);
        mp(p) > 1 && Ei(this.bcChannel, _e(p), this);
      }
    }, this._updateHandler = (f, d) => {
      if (d !== this) {
        const p = Xe();
        z(p, zr), $ye(p, f), pu(this, _e(p));
      }
    }, this.doc.on("update", this._updateHandler), this._awarenessUpdateHandler = ({ added: f, updated: d, removed: p }, g) => {
      const m = f.concat(d).concat(p), y = Xe();
      z(y, Wi), Ee(
        y,
        ro(s, m)
      ), pu(this, _e(y));
    }, this._unloadHandler = () => {
      Rp(
        this.awareness,
        [r.clientID],
        "window unload"
      );
    }, typeof window < "u" ? window.addEventListener("unload", this._unloadHandler) : typeof process < "u" && process.on("exit", this._unloadHandler), s.on("update", this._awarenessUpdateHandler), this._checkInterval = setInterval(() => {
      this.wsconnected && ty < _r() - this.wsLastMessageReceived && this.ws.close();
    }, ty / 10), i && this.connect();
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
    const e = Xe();
    z(e, zr), ed(e, this.doc), Ei(this.bcChannel, _e(e), this);
    const n = Xe();
    z(n, zr), C_(n, this.doc), Ei(this.bcChannel, _e(n), this);
    const r = Xe();
    z(r, A_), Ei(
      this.bcChannel,
      _e(r),
      this
    );
    const i = Xe();
    z(i, Wi), Ee(
      i,
      ro(this.awareness, [
        this.doc.clientID
      ])
    ), Ei(
      this.bcChannel,
      _e(i),
      this
    );
  }
  disconnectBc() {
    const e = Xe();
    z(e, Wi), Ee(
      e,
      ro(this.awareness, [
        this.doc.clientID
      ], /* @__PURE__ */ new Map())
    ), pu(this, _e(e)), this.bcconnected && (Pye(this.bcChannel, this._bcSubscriber), this.bcconnected = !1);
  }
  disconnect() {
    this.shouldConnect = !1, this.disconnectBc(), this.ws !== null && this.ws.close();
  }
  connect() {
    this.shouldConnect = !0, !this.wsconnected && this.ws === null && (D_(this), this.connectBc());
  }
}
function Yye(t) {
  if (!t.enabled)
    return {};
  const e = Fn(() => new Es(), []), [n, r] = et(!1), i = Fn(() => {
    var c;
    const l = new Gye((c = t.wsUrl) != null ? c : "ws://localhost:4444", t.room, e, {
      connect: !0,
      params: {},
      WebSocketPolyfill: WebSocket,
      awareness: new w_(e),
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
  }, []), s = Fn(() => e.getText("codemirror"), []), o = Fn(() => new _p(s, {
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
const T_ = me.div.withConfig({
  displayName: "CodeMirror__CodeEditor",
  componentId: "sc-1q0hyc9-0"
})(["border-radius:var(--border-radius);background:var(--gray-200);font-family:monospace;font-size:0.94em;resize:none;border:0;padding:20px;min-height:500px;display:", ';flex:1;border:1px solid var(--gray-400);box-shadow:inset 0px 0px 4px rgba(0,0,0,0.15);@media print{&{display:none;}}.cm-ySelectionInfo{opacity:1 !important;font-size:0.6rem;padding:0.25rem 0.5rem !important;border-top-left-radius:10px;border-top-right-radius:10px;border-bottom-right-radius:10px;font-family:"Lato" !important;font-weight:600 !important;}.cm-widgetBuffer{margin-bottom:0;}.cm-ySelectionCaretDot{display:none;}.cm-yLineSelection{margin:0 2px 0 6px !important;}.cm-editor{outline:0;}'], (t) => t.$shown ? "block" : "none"), Kye = me.textarea.withConfig({
  displayName: "CodeMirror__HiddenTextArea",
  componentId: "sc-1q0hyc9-1"
})(["display:none;"]), Jye = (t) => {
  const {
    from: e
  } = t.state.selection.main, n = t.state.doc.lineAt(e);
  return {
    line: n.number - 1,
    ch: e - n.from
  };
}, Zye = (t, e) => {
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
}, Xye = ({
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
  const a = Ni(null), [h, u] = et(!1), {
    provider: f,
    undoManager: d,
    ytext: p,
    ydoc: g,
    ready: m
  } = Yye(c);
  return Zr(() => {
    c.enabled && (d.on("stack-item-added", (x) => {
      x.stackItem.meta.set("cursor-location", Jye(a.current));
    }), d.on("stack-item-popped", (x) => {
      Zye(a.current, x.stackItem.meta.get("cursor-location"));
    }));
    const y = Ff.filter((x, w) => w != 3), b = [c.enabled ? y : Ff, wo.of([nge]), M.lineWrapping, M.updateListener.of((x) => {
      x.docChanged && (localStorage.getItem("log") == "true" && console.log("doc changed"), e(v.state.doc.toString()));
    })];
    c.enabled && (b.push(Lye(p, f.awareness, {
      undoManager: d
    })), b.push(wo.of([{
      key: "Mod-z",
      run: () => d.undo(),
      preventDefault: !0
    }, {
      key: "Mod-y",
      run: () => d.redo(),
      preventDefault: !0
    }])));
    const k = Z.create({
      doc: c.enabled ? p.toString() : t,
      extensions: b
    }), v = new M({
      state: k,
      parent: document.getElementById(n + "-editor")
    });
    return a.current = v, u(!0), () => {
      c.enabled && (f.disconnect(), g.destroy()), v.destroy();
    };
  }, []), Zr(() => {
    const y = document.querySelectorAll("#myst-css-namespace").length, b = c.enabled && p.toString().length == 0 && f.awareness.getStates().size == y && f.firstUser && m;
    p && p.toString().length != 0 && e(p.toString()), b ? (console.log("You are the first user in this document. Initiating..."), a.current.dispatch({
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
  }, [o, m, h]), lt`
      <${T_} $shown="${s}" id="${n}-editor" class=${i}><//>
      <${Kye} value=${t} name=${r} id=${n}><//>
  `;
};
console.log("CodeMirror component loaded");
const Qye = me.section`
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
`, ebe = me.h3`
  font-family: 'Lato', sans-serif;
  color: var(--gray-900);
`, tbe = me.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`, ny = me(Sa)`
  padding: 0 10px;
  margin-top: 0px;

  &:hover {
    background-color: ${(t) => t.$negative ? "var(--red-500)" : "var(--green-400)"} !important;
    border: 1px solid ${(t) => t.$negative ? "var(--red-500)" : "var(--green-400)"} !important;
  }`, nbe = ({
  changeDocumentTemplate: t,
  selectedTemplate: e,
  closeModal: n
}) => lt`
    <${Qye}>
        <${ebe}>Are you sure you want to change the current template?<//>
        <${tbe}>
            <${ny} type="button" onClick=${() => t(e)}>✓ Yes<//>
            <${ny} $negative type="button" onClick=${n}>x Cancel<//>
        <//>
    <//>
  `;
console.log("Modal functional component loaded");
const rbe = me.div`
  position: absolute;
  ${(t) => t.$orientation == "left" && Bi(["left:0;"])}
  transform: ${(t) => t.$orientation == "left" ? "translateX(-105%)" : "translate(-50%, 130%)"};
`, ibe = me.div`
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
  ${(t) => t.$orientation == "bottom" && Bi(["left:50%;"])}
  transform: ${(t) => t.$orientation == "left" ? "none" : "translateX(-25%)"};

  &::before {
    content: '';
    position: absolute;
    ${(t) => t.$orientation == "left" ? Bi(["right:0;top:50%;border-top:15px solid transparent;border-bottom:15px solid transparent;border-left:30px solid var(--green-400);"]) : Bi(["left:50%;border-left:15px solid transparent;border-right:15px solid transparent;border-bottom:30px solid var(--green-400);"])}
    transform: ${(t) => t.$orientation == "left" ? "translate(50%, -50%)" : "translate(-50%, -100%)"};
  }
`, ry = ({
  tooltipOrientation: t,
  errorMessage: e
}) => lt`
    <${rbe} $orientation=${t}>
      <${ibe} $orientation=${t}>
          ${e}
      <//>
    <//>`;
console.log("Tooltip component loaded");
const sbe = me.div`
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
`, iy = me(Sa)`
  width: 100%!important;
  color: var(--white);
  border: 1px solid var(--gray-900)!important;
  padding: 0 10px 0 10px!important;
  margin-top: 0px;`, obe = me.div`
  position: relative;
  display: inline-block;
  width: min-content;

  &:hover {
    div {
      display: inline-flex;
      flex-direction: column;
    }
  }
`, lbe = me.div`
  display: flex;
  flex-direction: row-reverse;
  border: 1px solid var(--gray-900);
  width: inherit;
`, cbe = me.div`
  position: absolute;
  display: flex;
  padding-top: 5px;
`, abe = (t) => {
  const e = ["id", "templatetext"];
  for (const n in t) {
    for (let r of e)
      t[n][r] || (t[n].errorMessage = `Configuration of template ${n} is lacking '${r}'`);
    t[n].errorMessage && console.error(t[n].errorMessage);
  }
  return t;
}, hbe = ({
  setText: t,
  templatelist: e,
  setSyncText: n
}) => {
  const [r, i] = et(""), [s, o] = et({}), [l, c] = et(null), [a, h] = et(!1), [u, f] = et(!1), [d, p] = et({
    error: null,
    message: null
  }), g = (v) => v.ok ? v : Promise.reject(`Invalid HTTP response: ${v.status}`), m = (v) => {
    i(s[v].templatetext), t(s[v].templatetext), n(!0), h(!1);
  }, y = (v) => fetch(v).then(g).then((x) => x.json().catch((w) => {
    console.error(w), p({
      error: w,
      message: "Template configuration is not valid"
    });
  })).catch((x) => {
    console.warn(x), p({
      error: x,
      message: "Template configuration not found"
    });
  }), b = (v) => fetch(v).then(g).then((x) => x.text()).catch((x) => {
    throw console.error(x), new Error("Could not fetch the template");
  }), k = async (v) => {
    if (!v)
      return {};
    for (const x in v) {
      const w = v[x].templatetext;
      await b(w).then((C) => v[x].templatetext = C).catch((C) => {
        var I, O;
        return (O = (I = v[x]).errorMessage) != null ? O : I.errorMessage = C.message;
      });
    }
    return v;
  };
  return Zr(() => y(e).then(abe).then(k).then(o), []), d.error ? lt`
        <${Js} type="button" template=${r} onMouseEnter=${() => f(!0)} onMouseLeave=${() => f(!1)}>
          Templates
        <//>
        <${u && ry} tooltipOrientation="bottom" errorMessage=${d.message}/>` : Object.keys(s).length == 0 ? lt`
        <${Js} type="button" template=${r} onMouseEnter=${() => f(!0)} onMouseLeave=${() => f(!1)}>
          Templates
        <//>` : lt`
    ${a && lt`<${nbe} selectedTemplate=${l} closeModal=${() => {
    h(!1), c(!1);
  }} changeDocumentTemplate=${m}/>`}
    <${obe}>
      <${Js} type="button">Templates<//>
      <${cbe}>
        <${sbe}>
        ${Object.keys(s).map((v) => lt`
            ${s[v].errorMessage ? lt`
              <${lbe}>
                <${u === v && ry} tooltipOrientation="left" errorMessage="${s[v].errorMessage}"/>
                  <${iy} type="button" onMouseEnter=${() => f(v)} onMouseLeave=${() => f(!1)}>${s[v].id}
                <//>
              <//>
            ` : lt`
              <${iy} type="button" 
              onClick=${() => {
    h(!0), c(v);
  }}>${s[v].id}
              <//>
            `}
          `)}      
        <//>
      <//>
    <//>
  `;
};
console.log("TemplateManager component loaded");
const ube = me.div.withConfig({
  displayName: "Preview",
  componentId: "sc-1gprrj9-0"
})(['background-color:white;padding:20px;min-height:500px;flex:1;border:1px solid var(--gray-400);border-left:1px solid var(--gray-600);box-shadow:inset 0px 0px 4px var(--gray-600);border-radius:var(--border-radius);font-family:"Lato",sans-serif;vertical-align:top;color:var(--gray-900);word-break:unset;', ` @media print{&{display:block !important;border:0px !important;box-shadow:none !important;border-radius:0px !important;word-break:unset !important;}}p{margin-top:0px;line-height:1.5em;display:block;a{display:inline;}@media print{break-inside:avoid !important;text-align:justify !important;text-justify:inter-word !important;}}a{color:var(--blue-500);@media print{&::after{content:"(" attr(href) ")" !important;}}}h1,h2,h3,h4,h5,h6{font-weight:bold;line-height:1.5;margin:1em 0;}h1{font-size:1.8em;}h2{font-size:1.5em;}h3{font-size:1.25em;}h4{font-size:1.15em;}h5{font-size:1.1em;}h6{font-size:1em;}hr{height:1px;margin:16px 0;background-color:var(--gray-500);border:0 none;}code,pre{border-radius:var(--border-radius);background-color:var(--gray-200);}code{padding:0.2em 0.4em;font-family:"Source Code Pro";}pre{white-space:pre-wrap;padding:16px;}aside{border-radius:var(--border-radius);&.admonition{border:var(--border-2) solid var(--green-500);margin-bottom:1rem;.admonition{margin:0rem 1.4rem 0.9rem 1.4rem;}& > header,p{padding:10px;}& > p{margin-bottom:0;}& > header{color:var(--white);font-weight:bold;background:var(--green-500);}}&[class="admonition"]{.admonition{margin-top:0.9rem;}}&.note,&.important,&.tip,&.hint,&.directive-unhandled,&.warning{border:3px solid var(--blue-400);& > header{background-color:var(--blue-400);display:flex;&::before{padding-right:5px;display:flex;align-items:center;}}}&.warning{border:3px solid var(--orange-500);& > header{background-color:var(--orange-500);&::before{content:url("data:image/svg+xml,%3Csvg style='color: white' xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-exclamation-triangle' viewBox='0 0 16 16'%3E%3Cpath d='M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z' fill='white'%3E%3C/path%3E%3Cpath d='M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z' fill='white'%3E%3C/path%3E%3C/svg%3E%0A");}}}&.tip,&.hint{& > header::before{content:url("data:image/svg+xml,%3Csvg style='color: white' width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7 0V2H8V0H7Z' fill='white'%3E%3C/path%3E%3Cpath d='M3.35355 3.64645L1.85355 2.14645L1.14645 2.85355L2.64645 4.35355L3.35355 3.64645Z' fill='white'%3E%3C/path%3E%3Cpath d='M12.3536 4.35355L13.8536 2.85355L13.1464 2.14645L11.6464 3.64645L12.3536 4.35355Z' fill='white'%3E%3C/path%3E%3Cpath d='M7.49998 3C5.52977 3 3.85938 4.44872 3.58075 6.39913L3.5707 6.46949C3.41148 7.58398 3.73042 8.64543 4.36009 9.45895C4.74345 9.95426 5 10.427 5 10.9013V12.5C5 12.7761 5.22386 13 5.5 13H9.5C9.77614 13 10 12.7761 10 12.5V10.9013C10 10.427 10.2565 9.95423 10.6399 9.45893C11.2696 8.64541 11.5885 7.58397 11.4293 6.4695L11.4192 6.39914C11.1406 4.44873 9.4702 3 7.49998 3Z' fill='white'%3E%3C/path%3E%3Cpath d='M0 8H2V7H0V8Z' fill='white'%3E%3C/path%3E%3Cpath d='M13 8H15V7H13V8Z' fill='white'%3E%3C/path%3E%3Cpath d='M6 15H9V14H6V15Z' fill='white'%3E%3C/path%3E%3C/svg%3E");}}&.note > header::before{content:url("data:image/svg+xml,%3Csvg style='color: white' xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-pencil' viewBox='0 0 16 16'%3E%3Cpath d='M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z' fill='white'%3E%3C/path%3E%3C/svg%3E");}&.important > header::before{content:url("data:image/svg+xml,%3Csvg style='color: white' xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24'%3E%3Cpath d='M18 16v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-5 0h-2v-2h2v2zm0-4h-2V8h2v4zm-1 10c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2z' fill='white'%3E%3C/path%3E%3C/svg%3E");}&.directive-unhandled,&.directive-error{margin-bottom:1em;& > header{padding:10px;color:var(--white);mark{background:transparent;font-weight:bold;color:inherit;}code{background:transparent;font-family:'Lato',sans-serif;font-weight:bold;padding:0;margin-left:.3em;}}pre{background-color:var(--white);margin:0;font-family:'Lato',sans-serif;}}&.directive-unhandled{border:3px solid var(--gray-700);& > header{background-color:var(--gray-700);}}&.directive-error{border:3px solid var(--red-500);& > header{background-color:var(--red-500);}}}sup,sub,numref{line-height:0;}abbr{letter-spacing:0.1em;font-weight:bold;}img{max-width:100%;height:auto;display:block;margin-left:auto;margin-right:auto;}li{margin-bottom:1em;}ul,ol{margin-bottom:2em;list-style:revert;padding-left:40px;padding-top:1em;}blockquote{border-left:5px solid var(--green-500);margin-left:0;margin-top:0;padding-left:0.75rem;}table{border-spacing:0;margin:20px 0 20px 0;}th,td{padding:20px;text-align:left;border-right:1px solid var(--gray-500);border-bottom:1px solid var(--gray-500);}th{background:var(--gray-900);border-top:1px solid var(--gray-500);color:var(--white);&:first-of-type{border-top-left-radius:var(--border-radius);border-left:1px solid var(--gray-500);}&:last-of-type{border-top-right-radius:var(--border-radius);}}td{&:first-of-type{border-left:1px solid var(--gray-500);}p:last-of-type{margin-bottom:0;}}tr{&:nth-child(2n + 2){background:var(--gray-100);}&:last-of-type{td{&:first-of-type{border-bottom-left-radius:var(--border-radius);}&:last-of-type{border-bottom-right-radius:var(--border-radius);}}}}`], (t) => !t.$shown && Bi`
    display: none;
  `);
class Oe {
  constructor(e, n, r, i) {
    this.fromA = e, this.toA = n, this.fromB = r, this.toB = i;
  }
  offset(e, n) {
    return new Oe(this.fromA + e, this.toA + e, this.fromB + n, this.toB + n);
  }
}
function ai(t, e, n, r, i, s) {
  if (t == r)
    return [];
  let o = Bp(t, e, n, r, i, s), l = Pp(t, e + o, n, r, i + o, s);
  e += o, n -= l, i += o, s -= l;
  let c = n - e, a = s - i;
  if (!c || !a)
    return [new Oe(e, n, i, s)];
  if (c > a) {
    let u = t.slice(e, n).indexOf(r.slice(i, s));
    if (u > -1)
      return [
        new Oe(e, e + u, i, i),
        new Oe(e + u + a, n, s, s)
      ];
  } else if (a > c) {
    let u = r.slice(i, s).indexOf(t.slice(e, n));
    if (u > -1)
      return [
        new Oe(e, e, i, i + u),
        new Oe(n, n, i + u + c, s)
      ];
  }
  if (c == 1 || a == 1)
    return [new Oe(e, n, i, s)];
  let h = L_(t, e, n, r, i, s);
  if (h) {
    let [u, f, d] = h;
    return ai(t, e, u, r, i, f).concat(ai(t, u + d, n, r, f + d, s));
  }
  return fbe(t, e, n, r, i, s);
}
let td = 1e9;
function fbe(t, e, n, r, i, s) {
  let o = n - e, l = s - i;
  if (Math.min(o, l) > td * 16)
    return sy(t, e, n, r, i, s);
  let c = Math.ceil((o + l) / 2);
  gu.reset(c), mu.reset(c);
  let a = (d, p) => t.charCodeAt(e + d) == r.charCodeAt(i + p), h = (d, p) => t.charCodeAt(n - d - 1) == r.charCodeAt(s - p - 1), u = (o - l) % 2 != 0 ? mu : null, f = u ? null : gu;
  for (let d = 0; d < c; d++) {
    if (d > td)
      return sy(t, e, n, r, i, s);
    let p = gu.advance(d, o, l, c, u, !1, a) || mu.advance(d, o, l, c, f, !0, h);
    if (p)
      return dbe(t, e, n, e + p[0], r, i, s, i + p[1]);
  }
  return [new Oe(e, n, i, s)];
}
class M_ {
  constructor() {
    this.vec = [];
  }
  reset(e) {
    this.len = e << 1;
    for (let n = 0; n < this.len; n++)
      this.vec[n] = -1;
    this.vec[e + 1] = 0, this.start = this.end = 0;
  }
  advance(e, n, r, i, s, o, l) {
    for (let c = -e + this.start; c <= e - this.end; c += 2) {
      let a = i + c, h = c == -e || c != e && this.vec[a - 1] < this.vec[a + 1] ? this.vec[a + 1] : this.vec[a - 1] + 1, u = h - c;
      for (; h < n && u < r && l(h, u); )
        h++, u++;
      if (this.vec[a] = h, h > n)
        this.end += 2;
      else if (u > r)
        this.start += 2;
      else if (s) {
        let f = i + (n - r) - c;
        if (f >= 0 && f < this.len && s.vec[f] != -1)
          if (o) {
            let d = s.vec[f];
            if (d >= n - h)
              return [d, i + d - f];
          } else {
            let d = n - s.vec[f];
            if (h >= d)
              return [h, u];
          }
      }
    }
    return null;
  }
}
const gu = /* @__PURE__ */ new M_(), mu = /* @__PURE__ */ new M_();
function dbe(t, e, n, r, i, s, o, l) {
  let c = !1;
  return !fs(t, r) && ++r == n && (c = !0), !fs(i, l) && ++l == o && (c = !0), c ? [new Oe(e, n, s, o)] : ai(t, e, r, i, s, l).concat(ai(t, r, n, i, l, o));
}
function O_(t, e) {
  let n = 1, r = Math.min(t, e);
  for (; n < r; )
    n = n << 1;
  return n;
}
function Bp(t, e, n, r, i, s) {
  if (e == n || e == s || t.charCodeAt(e) != r.charCodeAt(i))
    return 0;
  let o = O_(n - e, s - i);
  for (let l = e, c = i; ; ) {
    let a = l + o, h = c + o;
    if (a > n || h > s || t.slice(l, a) != r.slice(c, h)) {
      if (o == 1)
        return l - e - (fs(t, l) ? 0 : 1);
      o = o >> 1;
    } else {
      if (a == n || h == s)
        return a - e;
      l = a, c = h;
    }
  }
}
function Pp(t, e, n, r, i, s) {
  if (e == n || i == s || t.charCodeAt(n - 1) != r.charCodeAt(s - 1))
    return 0;
  let o = O_(n - e, s - i);
  for (let l = n, c = s; ; ) {
    let a = l - o, h = c - o;
    if (a < e || h < i || t.slice(a, l) != r.slice(h, c)) {
      if (o == 1)
        return n - l - (fs(t, l) ? 0 : 1);
      o = o >> 1;
    } else {
      if (a == e || h == i)
        return n - a;
      l = a, c = h;
    }
  }
}
function nd(t, e, n, r, i, s, o, l) {
  let c = r.slice(i, s), a = null;
  for (; ; ) {
    for (let h = e + o; ; ) {
      fs(t, h) || h++;
      let u = h + o;
      if (u >= n)
        break;
      fs(t, u) || u--;
      let f = t.slice(h, u), d = -1;
      for (; (d = c.indexOf(f, d + 1)) != -1; ) {
        let p = Bp(t, u, n, r, i + d + f.length, s), g = Pp(t, e, h, r, i, i + d), m = f.length + p + g;
        (!a || a[2] < m) && (a = [h - g, i + d - g, m]);
      }
      h = u;
    }
    if (o = o >> 1, a || l < 0 || o < l)
      return a;
  }
}
function L_(t, e, n, r, i, s) {
  let o = n - e, l = s - i;
  if (o < l) {
    let c = L_(r, i, s, t, e, n);
    return c && [c[1], c[0], c[2]];
  }
  return o < 4 || l * 2 < o ? null : nd(t, e, n, r, i, s, Math.floor(o / 4), -1);
}
function sy(t, e, n, r, i, s) {
  let o = n - e, l = s - i, c;
  if (o < l) {
    let f = nd(r, i, s, t, e, n, Math.floor(o / 6), 50);
    c = f && [f[1], f[0], f[2]];
  } else
    c = nd(t, e, n, r, i, s, Math.floor(l / 6), 50);
  if (!c)
    return [new Oe(e, n, i, s)];
  let [a, h, u] = c;
  return ai(t, e, a, r, i, h).concat(ai(t, a + u, n, r, h + u, s));
}
function R_(t, e) {
  for (let n = 1; n < t.length; n++) {
    let r = t[n - 1], i = t[n];
    r.toA > i.fromA - e && r.toB > i.fromB - e && (t[n - 1] = new Oe(r.fromA, i.toA, r.fromB, i.toB), t.splice(n--, 1));
  }
}
function pbe(t, e, n) {
  for (; ; ) {
    R_(n, 1);
    let r = !1;
    for (let i = 0; i < n.length; i++) {
      let s = n[i], o, l;
      (o = Bp(t, s.fromA, s.toA, e, s.fromB, s.toB)) && (s = n[i] = new Oe(s.fromA + o, s.toA, s.fromB + o, s.toB)), (l = Pp(t, s.fromA, s.toA, e, s.fromB, s.toB)) && (s = n[i] = new Oe(s.fromA, s.toA - l, s.fromB, s.toB - l));
      let c = s.toA - s.fromA, a = s.toB - s.fromB;
      if (c && a)
        continue;
      let h = s.fromA - (i ? n[i - 1].toA : 0), u = (i < n.length - 1 ? n[i + 1].fromA : t.length) - s.toA;
      if (!h || !u)
        continue;
      let f = c ? t.slice(s.fromA, s.toA) : e.slice(s.fromB, s.toB);
      h <= f.length && t.slice(s.fromA - h, s.fromA) == f.slice(f.length - h) ? (n[i] = new Oe(s.fromA - h, s.toA - h, s.fromB - h, s.toB - h), r = !0) : u <= f.length && t.slice(s.toA, s.toA + u) == f.slice(0, u) && (n[i] = new Oe(s.fromA + u, s.toA + u, s.fromB + u, s.toB + u), r = !0);
    }
    if (!r)
      break;
  }
  return n;
}
function gbe(t, e, n) {
  for (let r = 0, i = 0; i < t.length; i++) {
    let s = t[i], o = s.toA - s.fromA, l = s.toB - s.fromB;
    if (o && l || o > 3 || l > 3) {
      let c = i == t.length - 1 ? e.length : t[i + 1].fromA, a = s.fromA - r, h = c - s.toA, u = ly(e, s.fromA, Math.min(a, 5)), f = oy(e, s.toA, Math.min(h, 5)), d = s.fromA - u, p = f - s.toA;
      if (!o || !l) {
        let g = Math.max(o, l), [m, y, b] = o ? [e, s.fromA, s.toA] : [n, s.fromB, s.toB], k, v;
        d && p ? (g > d && e.slice(u, s.fromA) == m.slice(b - d, b) ? (s = t[i] = new Oe(u, u + o, s.fromB - d, s.toB - d), u = s.fromA, f = oy(e, s.toA, Math.min(c - s.toA, 5))) : g > p && e.slice(s.toA, f) == m.slice(y, y + p) && (s = t[i] = new Oe(f - o, f, s.fromB + p, s.toB + p), f = s.toA, u = ly(e, s.fromA, Math.min(s.fromA - r, 5))), d = s.fromA - u, p = f - s.toA) : !d && !p && (v = s.fromA - (k = mbe(e, s.fromA, a))) && e.slice(k, s.fromA) == m.slice(b - v, b) && (s = t[i] = new Oe(k, k + o, s.fromB - v, s.toB - v));
      }
      (d || p) && (s = t[i] = new Oe(s.fromA - d, s.toA + p, s.fromB - d, s.toB + p)), r = s.toA;
    }
  }
  return R_(t, 3), t;
}
let Jr;
try {
  Jr = /* @__PURE__ */ new RegExp("[\\p{Alphabetic}\\p{Number}]", "u");
} catch {
}
function I_(t) {
  return t > 48 && t < 58 || t > 64 && t < 91 || t > 96 && t < 123;
}
function N_(t, e) {
  if (e == t.length)
    return 0;
  let n = t.charCodeAt(e);
  return n < 192 ? I_(n) ? 1 : 0 : Jr ? !P_(n) || e == t.length - 1 ? Jr.test(String.fromCharCode(n)) ? 1 : 0 : Jr.test(t.slice(e, e + 2)) ? 2 : 0 : 0;
}
function B_(t, e) {
  if (!e)
    return 0;
  let n = t.charCodeAt(e - 1);
  return n < 192 ? I_(n) ? 1 : 0 : Jr ? !F_(n) || e == 1 ? Jr.test(String.fromCharCode(n)) ? 1 : 0 : Jr.test(t.slice(e - 2, e)) ? 2 : 0 : 0;
}
function oy(t, e, n) {
  if (e == t.length || !B_(t, e))
    return e;
  for (let r = e, i = e + n; ; ) {
    let s = N_(t, r);
    if (!s)
      return r;
    if (r += s, r > i)
      return e;
  }
}
function ly(t, e, n) {
  if (!e || !N_(t, e))
    return e;
  for (let r = e, i = e - n; ; ) {
    let s = B_(t, r);
    if (!s)
      return r;
    if (r -= s, r < i)
      return e;
  }
}
function mbe(t, e, n) {
  for (let r = e, i = e - n; ; ) {
    let s = r ? t.charCodeAt(r - 1) : 10;
    if (s == 10)
      return r;
    if (r--, r < i || s != 32 && s != 9)
      return e;
  }
}
const P_ = (t) => t >= 55296 && t <= 56319, F_ = (t) => t >= 56320 && t <= 57343;
function fs(t, e) {
  return !e || e == t.length || !P_(t.charCodeAt(e - 1)) || !F_(t.charCodeAt(e));
}
function ybe(t, e, n) {
  var r;
  return td = ((r = n == null ? void 0 : n.scanLimit) !== null && r !== void 0 ? r : 1e9) >> 1, pbe(t, e, ai(t, 0, t.length, e, 0, e.length));
}
function $_(t, e, n) {
  return gbe(ybe(t, e, n), t, e);
}
const q_ = { scanLimit: 500 };
class ji {
  constructor(e, n, r, i, s) {
    this.changes = e, this.fromA = n, this.toA = r, this.fromB = i, this.toB = s;
  }
  offset(e, n) {
    return e || n ? new ji(this.changes, this.fromA + e, this.toA + e, this.fromB + n, this.toB + n) : this;
  }
  get endA() {
    return Math.max(this.fromA, this.toA - 1);
  }
  get endB() {
    return Math.max(this.fromB, this.toB - 1);
  }
  static build(e, n) {
    return H_($_(e.toString(), n.toString(), q_), e, n, 0, 0);
  }
  static updateA(e, n, r, i) {
    return fy(uy(e, i, !0, r.length), e, n, r);
  }
  static updateB(e, n, r, i) {
    return fy(uy(e, i, !1, n.length), e, n, r);
  }
}
function cy(t, e, n, r) {
  let i = n.lineAt(t), s = r.lineAt(e);
  return i.to == t && s.to == e && t < n.length && e < r.length ? [t + 1, e + 1] : [i.from, s.from];
}
function ay(t, e, n, r) {
  let i = n.lineAt(t), s = r.lineAt(e);
  return i.from == t && s.from == e ? [t, e] : [i.to + 1, s.to + 1];
}
function H_(t, e, n, r, i) {
  let s = [];
  for (let o = 0; o < t.length; o++) {
    let l = t[o], [c, a] = cy(l.fromA + r, l.fromB + i, e, n), [h, u] = ay(l.toA + r, l.toB + i, e, n), f = [l.offset(-c + r, -a + i)];
    for (; o < t.length - 1; ) {
      let d = t[o + 1], [p, g] = cy(d.fromA + r, d.fromB + i, e, n);
      if (p > h + 1 && g > u + 1)
        break;
      f.push(d.offset(-c + r, -a + i)), [h, u] = ay(d.toA + r, d.toB + i, e, n), o++;
    }
    s.push(new ji(f, c, Math.max(c, h), a, Math.max(a, u)));
  }
  return s;
}
const Pl = 1e3;
function hy(t, e, n, r) {
  let i = 0, s = t.length;
  for (; ; ) {
    if (i == s) {
      let h = 0, u = 0;
      i && ({ toA: h, toB: u } = t[i - 1]);
      let f = e - (n ? h : u);
      return [h + f, u + f];
    }
    let o = i + s >> 1, l = t[o], [c, a] = n ? [l.fromA, l.toA] : [l.fromB, l.toB];
    if (c > e)
      s = o;
    else if (a <= e)
      i = o + 1;
    else
      return r ? [l.fromA, l.fromB] : [l.toA, l.toB];
  }
}
function uy(t, e, n, r) {
  let i = [];
  return e.iterChangedRanges((s, o, l, c) => {
    let a = 0, h = n ? e.length : r, u = 0, f = n ? r : e.length;
    s > Pl && ([a, u] = hy(t, s - Pl, n, !0)), o < e.length - Pl && ([h, f] = hy(t, o + Pl, n, !1));
    let d = c - l - (o - s), p, [g, m] = n ? [d, 0] : [0, d];
    i.length && (p = i[i.length - 1]).toA >= a ? i[i.length - 1] = {
      fromA: p.fromA,
      fromB: p.fromB,
      toA: h,
      toB: f,
      diffA: p.diffA + g,
      diffB: p.diffB + m
    } : i.push({ fromA: a, toA: h, fromB: u, toB: f, diffA: g, diffB: m });
  }), i;
}
function fy(t, e, n, r) {
  if (!t.length)
    return e;
  let i = 0, s = 0, o = 0, l = [];
  for (let c of t) {
    let a = c.fromA + s, h = c.toA + s + c.diffA, u = c.fromB + o, f = c.toB + o + c.diffB;
    for (; i < e.length; ) {
      let d = e[i];
      if (d.toA + s <= a && d.toB + o <= u)
        l.push(d.offset(s, o));
      else if (d.fromA + s > h)
        break;
      i++;
    }
    for (let d of H_($_(n.sliceString(a, h), r.sliceString(u, f), q_), n, r, a, u))
      l.push(d);
    s += c.diffA, o += c.diffB;
  }
  for (; i < e.length; )
    l.push(e[i++].offset(s, o));
  return l;
}
const rd = /* @__PURE__ */ j.define(), ds = /* @__PURE__ */ Ie.define({
  create(t) {
    return null;
  },
  update(t, e) {
    for (let n of e.effects)
      n.is(rd) && (t = n.value);
    return t;
  }
}), dn = /* @__PURE__ */ N.define({
  combine: (t) => t[0]
}), z_ = /* @__PURE__ */ Ae.fromClass(class {
  constructor(t) {
    ({ deco: this.deco, gutter: this.gutter } = gy(t));
  }
  update(t) {
    (t.docChanged || t.viewportChanged || bbe(t.startState, t.state) || vbe(t.startState, t.state)) && ({ deco: this.deco, gutter: this.gutter } = gy(t.view));
  }
}, {
  decorations: (t) => t.deco
}), Fl = /* @__PURE__ */ Sr.low(/* @__PURE__ */ Zw({
  class: "cm-changeGutter",
  markers: (t) => {
    var e;
    return ((e = t.plugin(z_)) === null || e === void 0 ? void 0 : e.gutter) || Q.empty;
  },
  renderEmptyElements: !1
}));
function bbe(t, e) {
  return t.field(ds, !1) != e.field(ds, !1);
}
function vbe(t, e) {
  return t.facet(dn) != e.facet(dn);
}
const dy = /* @__PURE__ */ P.line({ class: "cm-changedLine" }), wbe = /* @__PURE__ */ P.mark({ class: "cm-changedText" }), py = /* @__PURE__ */ new class extends Cn {
  constructor() {
    super(...arguments), this.elementClass = "cm-changedLineGutter";
  }
}();
function xbe(t, e, n, r, i, s) {
  let o = n ? t.fromA : t.fromB, l = n ? t.toA : t.toB, c = 0;
  if (o != l) {
    i.add(o, o, dy), s && s.add(o, o, py);
    for (let a = e.iterRange(o, l - 1), h = o; !a.next().done; ) {
      if (a.lineBreak) {
        h++, i.add(h, h, dy), s && s.add(h, h, py);
        continue;
      }
      let u = h + a.value.length;
      if (r)
        for (; c < t.changes.length; ) {
          let f = t.changes[c], d = o + (n ? f.fromA : f.fromB), p = o + (n ? f.toA : f.toB), g = Math.max(h, d), m = Math.min(u, p);
          if (g < m && i.add(g, m, wbe), p < u)
            c++;
          else
            break;
        }
      h = u;
    }
  }
}
function gy(t) {
  let e = t.state.field(ds), { side: n, highlightChanges: r, markGutter: i } = t.state.facet(dn), s = n == "a", o = new Dt(), l = i ? new Dt() : null, { from: c, to: a } = t.viewport;
  for (let h of e) {
    if ((s ? h.fromA : h.fromB) >= a)
      break;
    (s ? h.toA : h.toB) > c && xbe(h, t.state.doc, s, r, o, l);
  }
  return { deco: o.finish(), gutter: l && l.finish() };
}
class $l extends tn {
  constructor(e) {
    super(), this.height = e;
  }
  eq(e) {
    return this.height == e.height;
  }
  toDOM() {
    let e = document.createElement("div");
    return e.className = "cm-mergeSpacer", e.style.height = this.height + "px", e;
  }
  updateDOM(e) {
    return e.style.height = this.height + "px", !0;
  }
  get estimatedHeight() {
    return this.height;
  }
  ignoreEvent() {
    return !1;
  }
}
const sa = /* @__PURE__ */ j.define({
  map: (t, e) => t.map(e)
}), js = /* @__PURE__ */ Ie.define({
  create: () => P.none,
  update: (t, e) => {
    for (let n of e.effects)
      if (n.is(sa))
        return n.value;
    return t.map(e.changes);
  },
  provide: (t) => M.decorations.from(t)
}), ql = 1e-4;
function kbe(t, e, n) {
  let r = new Dt(), i = new Dt(), s = t.viewportLineBlocks, o = e.viewportLineBlocks, l = 0, c = 0, a = t.state.field(js).iter(), h = e.state.field(js).iter(), u = 0, f = 0, d = 0, p = 0;
  e:
    for (let b = 0; ; b++) {
      let k = b < n.length ? n[b] : null, [v, x] = k ? [k.fromA, k.fromB] : [t.state.doc.length, e.state.doc.length];
      if (u < v && f < x)
        for (; ; ) {
          if (l == s.length || c == o.length)
            break e;
          let w = s[l], C = o[c];
          for (; a.value && a.from < w.from; )
            d -= a.value.spec.widget.height, a.next();
          for (; h.value && h.from < C.from; )
            p -= h.value.spec.widget.height, h.next();
          if (w.from >= v || C.from >= x)
            break;
          let I = w.from - u, O = C.from - f;
          if (I < 0 || I < O)
            l++;
          else if (O < 0 || O < I)
            c++;
          else {
            let D = w.top + d - (C.top + p);
            D < -ql ? (d -= D, r.add(w.from, w.from, P.widget({
              widget: new $l(-D),
              block: !0,
              side: -1
            }))) : D > ql && (p += D, i.add(C.from, C.from, P.widget({
              widget: new $l(D),
              block: !0,
              side: -1
            }))), l++, c++;
          }
        }
      if (!k)
        break;
      u = k.toA, f = k.toB;
    }
  for (; a.value; )
    d -= a.value.spec.widget.height, a.next();
  for (; h.value; )
    p -= h.value.spec.widget.height, h.next();
  let g = t.contentHeight + d - (e.contentHeight + p);
  g < ql ? r.add(t.state.doc.length, t.state.doc.length, P.widget({
    widget: new $l(-g),
    block: !0,
    side: 1
  })) : g > ql && i.add(e.state.doc.length, e.state.doc.length, P.widget({
    widget: new $l(g),
    block: !0,
    side: 1
  }));
  let m = r.finish(), y = i.finish();
  Q.eq([m], [t.state.field(js)]) || t.dispatch({ effects: sa.of(m) }), Q.eq([y], [e.state.field(js)]) || e.dispatch({ effects: sa.of(y) });
}
const id = /* @__PURE__ */ j.define({
  map: (t, e) => e.mapPos(t)
});
class _be extends tn {
  constructor(e) {
    super(), this.lines = e;
  }
  eq(e) {
    return this.lines == e.lines;
  }
  toDOM(e) {
    let n = document.createElement("div");
    return n.className = "cm-collapsedLines", n.textContent = "\u299A " + e.state.phrase("$ unchanged lines", this.lines) + " \u299A", n.addEventListener("click", (r) => {
      let i = e.posAtDOM(r.target);
      e.dispatch({ effects: id.of(i) });
      let { side: s, sibling: o } = e.state.facet(dn);
      o().dispatch({ effects: id.of(Cbe(i, e.state.field(ds), s == "a")) });
    }), n;
  }
  ignoreEvent(e) {
    return e instanceof MouseEvent;
  }
  get estimatedHeight() {
    return 27;
  }
}
function Cbe(t, e, n) {
  let r = 0, i = 0;
  for (let s = 0; ; s++) {
    let o = s < e.length ? e[s] : null;
    if (!o || (n ? o.fromA : o.fromB) >= t)
      return i + (t - r);
    [r, i] = n ? [o.toA, o.toB] : [o.toB, o.toA];
  }
}
const Sbe = /* @__PURE__ */ Ie.define({
  create(t) {
    return P.none;
  },
  update(t, e) {
    t = t.map(e.changes);
    for (let n of e.effects)
      n.is(id) && (t = t.update({ filter: (r) => r != n.value }));
    return t;
  },
  provide: (t) => M.decorations.from(t)
});
function my({ margin: t = 3, minSize: e = 4 }) {
  return Sbe.init((n) => Abe(n, t, e));
}
function Abe(t, e, n) {
  let r = new Dt(), i = t.facet(dn).side == "a", s = t.field(ds), o = 1;
  for (let l = 0; ; l++) {
    let c = l < s.length ? s[l] : null, a = l ? o + e : 1, h = c ? t.doc.lineAt(i ? c.fromA : c.fromB).number - 1 - e : t.doc.lines, u = h - a + 1;
    if (u >= n && r.add(t.doc.line(a).from, t.doc.line(h).to, P.replace({
      widget: new _be(u),
      block: !0
    })), !c)
      break;
    o = t.doc.lineAt(Math.min(t.doc.length, i ? c.toA : c.toB)).number;
  }
  return r.finish();
}
const Ebe = /* @__PURE__ */ M.styleModule.of(/* @__PURE__ */ new Un({
  ".cm-mergeView": {
    overflowY: "auto"
  },
  ".cm-mergeViewEditors": {
    display: "flex",
    alignItems: "stretch"
  },
  ".cm-mergeViewEditor": {
    flexGrow: 1,
    flexBasis: 0,
    overflow: "hidden"
  },
  ".cm-merge-revert": {
    width: "1.6em",
    flexGrow: 0,
    flexShrink: 0,
    position: "relative"
  },
  ".cm-merge-revert button": {
    position: "absolute",
    display: "block",
    width: "100%",
    boxSizing: "border-box",
    textAlign: "center",
    background: "none",
    border: "none",
    font: "inherit",
    cursor: "pointer"
  }
})), Dbe = /* @__PURE__ */ M.baseTheme({
  "& .cm-scroller, &": {
    height: "auto !important",
    overflowY: "visible !important"
  },
  "&.cm-merge-a .cm-changedLine": {
    backgroundColor: "rgba(160, 128, 100, .08)"
  },
  "&.cm-merge-b .cm-changedLine": {
    backgroundColor: "rgba(100, 160, 128, .08)"
  },
  "&light.cm-merge-a .cm-changedText": {
    background: "linear-gradient(#ee443366, #ee443366) bottom/100% 2px no-repeat"
  },
  "&dark.cm-merge-a .cm-changedText": {
    background: "linear-gradient(#ffaa9966, #ffaa9966) bottom/100% 2px no-repeat"
  },
  "&light.cm-merge-b .cm-changedText": {
    background: "linear-gradient(#22bb2266, #22bb2266) bottom/100% 2px no-repeat"
  },
  "&dark.cm-merge-b .cm-changedText": {
    background: "linear-gradient(#88ff8866, #88ff8866) bottom/100% 2px no-repeat"
  },
  ".cm-collapsedLines": {
    padding: "5px 5px 5px 10px",
    cursor: "pointer"
  },
  "&light .cm-collapsedLines": {
    color: "#444",
    background: "linear-gradient(to bottom, transparent 0, #f3f3f3 30%, #f3f3f3 70%, transparent 100%)"
  },
  "&dark .cm-collapsedLines": {
    color: "#ddd",
    background: "linear-gradient(to bottom, transparent 0, #222 30%, #222 70%, transparent 100%)"
  },
  ".cm-changeGutter": { width: "3px", paddingLeft: "1px" },
  "&light.cm-merge-a .cm-changedLineGutter": { background: "#e43" },
  "&dark.cm-merge-a .cm-changedLineGutter": { background: "#fa9" },
  "&light.cm-merge-b .cm-changedLineGutter": { background: "#2b2" },
  "&dark.cm-merge-b .cm-changedLineGutter": { background: "#8f8" }
}), yy = /* @__PURE__ */ new xs(), Hl = /* @__PURE__ */ new xs();
class Tbe {
  constructor(e) {
    this.revertDOM = null, this.revertToA = !1, this.revertToLeft = !1, this.measuring = -1;
    let n = [
      Sr.low(z_),
      Dbe,
      Ebe,
      js,
      M.updateListener.of((u) => {
        this.measuring < 0 && (u.heightChanged || u.viewportChanged) && !u.transactions.some((f) => f.effects.some((d) => d.is(sa))) && this.measure();
      })
    ], r = [dn.of({
      side: "a",
      sibling: () => this.b,
      highlightChanges: e.highlightChanges !== !1,
      markGutter: e.gutter !== !1
    })];
    e.gutter !== !1 && r.push(Fl);
    let i = Z.create({
      doc: e.a.doc,
      selection: e.a.selection,
      extensions: [
        e.a.extensions || [],
        M.editorAttributes.of({ class: "cm-merge-a" }),
        Hl.of(r),
        n
      ]
    }), s = [dn.of({
      side: "b",
      sibling: () => this.a,
      highlightChanges: e.highlightChanges !== !1,
      markGutter: e.gutter !== !1
    })];
    e.gutter !== !1 && s.push(Fl);
    let o = Z.create({
      doc: e.b.doc,
      selection: e.b.selection,
      extensions: [
        e.b.extensions || [],
        M.editorAttributes.of({ class: "cm-merge-b" }),
        Hl.of(s),
        n
      ]
    });
    this.chunks = ji.build(i.doc, o.doc);
    let l = [
      ds.init(() => this.chunks),
      yy.of(e.collapseUnchanged ? my(e.collapseUnchanged) : [])
    ];
    i = i.update({ effects: j.appendConfig.of(l) }).state, o = o.update({ effects: j.appendConfig.of(l) }).state, this.dom = document.createElement("div"), this.dom.className = "cm-mergeView", this.editorDOM = this.dom.appendChild(document.createElement("div")), this.editorDOM.className = "cm-mergeViewEditors";
    let c = e.orientation || "a-b", a = document.createElement("div");
    a.className = "cm-mergeViewEditor";
    let h = document.createElement("div");
    h.className = "cm-mergeViewEditor", this.editorDOM.appendChild(c == "a-b" ? a : h), this.editorDOM.appendChild(c == "a-b" ? h : a), this.a = new M({
      state: i,
      parent: a,
      root: e.root,
      dispatch: (u) => this.dispatch(u, this.a)
    }), this.b = new M({
      state: o,
      parent: h,
      root: e.root,
      dispatch: (u) => this.dispatch(u, this.b)
    }), this.setupRevertControls(!!e.revertControls, e.revertControls == "b-to-a", e.renderRevertControl), e.parent && e.parent.appendChild(this.dom), this.scheduleMeasure();
  }
  dispatch(e, n) {
    if (e.docChanged) {
      this.chunks = n == this.a ? ji.updateA(this.chunks, e.newDoc, this.b.state.doc, e.changes) : ji.updateB(this.chunks, this.a.state.doc, e.newDoc, e.changes), n.update([e, e.state.update({ effects: rd.of(this.chunks) })]);
      let r = n == this.a ? this.b : this.a;
      r.update([r.state.update({ effects: rd.of(this.chunks) })]), this.scheduleMeasure();
    } else
      n.update([e]);
  }
  reconfigure(e) {
    if ("orientation" in e) {
      let s = e.orientation != "b-a";
      if (s != (this.editorDOM.firstChild == this.a.dom.parentNode)) {
        let o = this.a.dom.parentNode, l = this.b.dom.parentNode;
        o.remove(), l.remove(), this.editorDOM.insertBefore(s ? o : l, this.editorDOM.firstChild), this.editorDOM.appendChild(s ? l : o), this.revertToLeft = !this.revertToLeft, this.revertDOM && (this.revertDOM.textContent = "");
      }
    }
    if ("revertControls" in e || "renderRevertControl" in e) {
      let s = !!this.revertDOM, o = this.revertToA, l = this.renderRevert;
      "revertControls" in e && (s = !!e.revertControls, o = e.revertControls == "b-to-a"), "renderRevertControl" in e && (l = e.renderRevertControl), this.setupRevertControls(s, o, l);
    }
    let n = "highlightChanges" in e, r = "gutter" in e, i = "collapseUnchanged" in e;
    if (n || r || i) {
      let s = [], o = [];
      if (n || r) {
        let l = this.a.state.facet(dn), c = r ? e.gutter !== !1 : l.markGutter, a = n ? e.highlightChanges !== !1 : l.highlightChanges;
        s.push(Hl.reconfigure([
          dn.of({ side: "a", sibling: () => this.b, highlightChanges: a, markGutter: c }),
          c ? Fl : []
        ])), o.push(Hl.reconfigure([
          dn.of({ side: "b", sibling: () => this.a, highlightChanges: a, markGutter: c }),
          c ? Fl : []
        ]));
      }
      if (i) {
        let l = yy.reconfigure(e.collapseUnchanged ? my(e.collapseUnchanged) : []);
        s.push(l), o.push(l);
      }
      this.a.dispatch({ effects: s }), this.b.dispatch({ effects: o });
    }
    this.scheduleMeasure();
  }
  setupRevertControls(e, n, r) {
    this.revertToA = n, this.revertToLeft = this.revertToA == (this.editorDOM.firstChild == this.a.dom.parentNode), this.renderRevert = r, !e && this.revertDOM ? (this.revertDOM.remove(), this.revertDOM = null) : e && !this.revertDOM ? (this.revertDOM = this.editorDOM.insertBefore(document.createElement("div"), this.editorDOM.firstChild.nextSibling), this.revertDOM.addEventListener("mousedown", (i) => this.revertClicked(i)), this.revertDOM.className = "cm-merge-revert") : this.revertDOM && (this.revertDOM.textContent = "");
  }
  scheduleMeasure() {
    if (this.measuring < 0) {
      let e = this.dom.ownerDocument.defaultView || window;
      this.measuring = e.requestAnimationFrame(() => {
        this.measuring = -1, this.measure();
      });
    }
  }
  measure() {
    kbe(this.a, this.b, this.chunks), this.revertDOM && this.updateRevertButtons();
  }
  updateRevertButtons() {
    let e = this.revertDOM, n = e.firstChild, r = this.a.viewport, i = this.b.viewport;
    for (let s = 0; s < this.chunks.length; s++) {
      let o = this.chunks[s];
      if (o.fromA > r.to || o.fromB > i.to)
        break;
      if (o.fromA < r.from || o.fromB < i.from)
        continue;
      let l = this.a.lineBlockAt(o.fromA).top + "px";
      for (; n && +n.dataset.chunk < s; )
        n = by(n);
      n && n.dataset.chunk == String(s) ? (n.style.top != l && (n.style.top = l), n = n.nextSibling) : e.insertBefore(this.renderRevertButton(l, s), n);
    }
    for (; n; )
      n = by(n);
  }
  renderRevertButton(e, n) {
    let r;
    if (this.renderRevert)
      r = this.renderRevert();
    else {
      r = document.createElement("button");
      let i = this.a.state.phrase("Revert this chunk");
      r.setAttribute("aria-label", i), r.setAttribute("title", i), r.textContent = this.revertToLeft ? "\u21DC" : "\u21DD";
    }
    return r.style.top = e, r.setAttribute("data-chunk", String(n)), r;
  }
  revertClicked(e) {
    let n = e.target, r;
    for (; n && n.parentNode != this.revertDOM; )
      n = n.parentNode;
    if (n && (r = this.chunks[n.dataset.chunk])) {
      let [i, s, o, l, c, a] = this.revertToA ? [this.b, this.a, r.fromB, r.toB, r.fromA, r.toA] : [this.a, this.b, r.fromA, r.toA, r.fromB, r.toB], h = i.state.sliceDoc(o, Math.max(o, l - 1));
      o != l && a <= s.state.doc.length && (h += i.state.lineBreak), s.dispatch({
        changes: { from: c, to: Math.min(s.state.doc.length, a), insert: h },
        userEvent: "revert"
      }), e.preventDefault();
    }
  }
  destroy() {
    this.a.destroy(), this.b.destroy(), this.measuring > -1 && (this.dom.ownerDocument.defaultView || window).cancelAnimationFrame(this.measuring), this.dom.remove();
  }
}
function by(t) {
  let e = t.nextSibling;
  return t.remove(), e;
}
const vy = me(T_)`
  width: 50%;
  display: block;
`, Mbe = ({
  old: t,
  current: e
}) => {
  let n = [Ff, M.editable.of(!1), Z.readOnly.of(!0), M.lineWrapping];
  return new Tbe({
    a: {
      doc: t,
      extensions: n
    },
    b: {
      doc: e,
      extensions: n
    },
    orientation: "b-a"
  });
}, Obe = ({
  oldText: t,
  text: e
}) => {
  let n = Ni(null), r = Ni(null), i = Ni(null);
  return Zr(() => {
    if (i.current)
      return !1;
    i.current = Mbe({
      old: t,
      current: e
    }), n.current.appendChild(i.current.b.dom), r.current.appendChild(i.current.a.dom);
  }, []), lt`
  <div style="display:flex; width: 100%">
    <${vy} ref=${n} $shown=${!0}/>
    <${vy} ref=${r} $shown=${!0}/>
  </div>`;
}, Lbe = me.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
`, Rbe = me.div`
  z-index: 10;
  position: sticky;
  top: 0;
  display: ${(t) => t.$shown ? "flex" : "none"};
  width: 100%;
  height: 60px;
  background-color: var(--gray-900);
  border-bottom: 1px solid var(--gray-600);

  @media print {
    & {
      display: none;
    }
  }
`, Ibe = me.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 5px;
`, Nbe = me(Js)`
  pointer-events: none; 
  background-color: green; 
  border: none;
  width: fit-content;
`, Bbe = me.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 15px;
`, Pbe = me.div`
  border-left: 1px solid var(--gray-800);
  height: 40px;
  margin-right: 10px;
  margin-left: 10px;
`, Fbe = me.div`
  padding: 20px;
  display: flex;
  flex-flow: row wrap;
  width: 100%;
`, $be = [{
  label: "Source",
  img: "data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M22 14.3344V15.6663L17 18.1331V16.7394L20.525 15L17 13.2562V11.8669L22 14.3344ZM12 16.7394L8.475 15L12 13.2562V11.8669L7 14.3344V15.6663L12 18.1331V16.7394ZM16.4044 10H15.1056L12.5988 20H13.8944L16.4044 10V10Z' fill='%23FFFFFF'/%3E%3C/svg%3E"
}, {
  label: "Preview",
  img: "data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12.7232 13.5185L13.0717 13.6453C13.364 13.7516 13.6059 13.4674 13.5201 13.2249L13.394 12.8684C13.1324 13.0434 12.905 13.264 12.7232 13.5185ZM5.3783 14.1143L6.20344 14.6793L5.36684 15.2271L5 14.6669L5.3783 14.1143ZM23.4976 14.6793C23.4976 14.6793 20.4337 20 14.8613 20C9.68749 20 6.20344 14.6793 6.20344 14.6793C6.20344 14.6793 9.40718 10 14.8613 10C20.4056 10 23.4976 14.6793 23.4976 14.6793ZM23.4976 14.6793C24.3642 15.1783 24.364 15.1787 24.3638 15.179L24.3633 15.1799L24.3621 15.182L24.3588 15.1875L24.3489 15.2044C24.3407 15.2182 24.3295 15.2369 24.3153 15.2603C24.2867 15.3069 24.246 15.3722 24.1933 15.4533C24.0878 15.6154 23.9336 15.8417 23.7316 16.1109C23.3288 16.6477 22.7301 17.3626 21.9419 18.0794C20.3721 19.5072 17.9836 21 14.8613 21C11.9278 21 9.5357 19.4963 7.93308 18.0917C7.12296 17.3817 6.48766 16.6739 6.05421 16.1433C5.83691 15.8773 5.66881 15.6539 5.55335 15.4945C5.49559 15.4147 5.45088 15.3508 5.41968 15.3054C5.40407 15.2827 5.39183 15.2646 5.38301 15.2514L5.37234 15.2355L5.36894 15.2303L5.36773 15.2285L5.36724 15.2277C5.36703 15.2274 5.36684 15.2271 6.20344 14.6793C5.3783 14.1143 5.37853 14.114 5.37878 14.1137L5.37933 14.1129L5.38065 14.1109L5.38421 14.1058L5.39489 14.0905C5.40361 14.0781 5.41551 14.0614 5.43057 14.0406C5.46067 13.9989 5.50343 13.941 5.55862 13.8692C5.66894 13.7255 5.82936 13.5255 6.03813 13.288C6.45474 12.814 7.06911 12.1846 7.86767 11.5546C9.45985 10.2984 11.8369 9 14.8613 9C17.9286 9 20.3014 10.2965 21.8823 11.558C22.6741 12.1898 23.2783 12.8211 23.6867 13.2969C23.8913 13.5353 24.048 13.7361 24.1557 13.8806C24.2095 13.9528 24.2513 14.0111 24.2806 14.0531C24.2954 14.0741 24.307 14.091 24.3155 14.1036L24.326 14.1192L24.3296 14.1244L24.3309 14.1264L24.3314 14.1273C24.3317 14.1276 24.3319 14.128 23.4976 14.6793ZM23.4976 14.6793L24.3319 14.128L24.6724 14.6432L24.3642 15.1783L23.4976 14.6793ZM15.5108 12.959C16.3818 13.2357 17.0123 14.0453 17.0123 15C17.0123 16.1836 16.0445 17.1429 14.8505 17.1429C13.8785 17.1429 13.0565 16.5071 12.7844 15.6322C12.7222 15.4324 12.6888 15.2201 12.6888 15C12.6888 14.8579 12.7032 14.7193 12.7298 14.585C12.8702 14.6361 13.0104 14.6627 13.147 14.6678C13.8935 14.6961 14.535 14.0861 14.541 13.3486C14.5422 13.2 14.5176 13.0462 14.4628 12.8914C14.5882 12.87 14.7179 12.8571 14.8505 12.8571C15.0808 12.8571 15.3027 12.8929 15.5108 12.959ZM11.2476 15C11.2476 16.9729 12.861 18.5714 14.8505 18.5714C16.8408 18.5714 18.4535 16.9729 18.4535 15C18.4535 13.0279 16.8408 11.4286 14.8505 11.4286C12.861 11.4286 11.2476 13.0279 11.2476 15Z' fill='%23FFFFFF'/%3E%3C/svg%3E%0A"
}, {
  label: "Both",
  img: "data:image/svg+xml,%3Csvg width='22' height='17' viewBox='0 0 22 17' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2.66667 0.666667H10.5338V15.5109H2.66667C1.5621 15.5109 0.666667 14.6154 0.666667 13.5109V2.66667C0.666667 1.5621 1.5621 0.666667 2.66667 0.666667Z' stroke='white' stroke-width='1.33333'/%3E%3Cpath d='M10.8001 0.666667H18.6673C19.7718 0.666667 20.6673 1.5621 20.6673 2.66667V13.5109C20.6673 14.6154 19.7718 15.5109 18.6673 15.5109H10.8001V0.666667Z' stroke='white' stroke-width='1.33333'/%3E%3C/svg%3E%0A"
}, {
  label: "Diff",
  img: "data:image/svg+xml,%3Csvg width='22' height='17' viewBox='-2 0 20 15' fill='white' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4.207 15.061L1 11.854v-.707L4.207 7.94l.707.707-2.353 2.354H15v1H2.56l2.354 2.353-.707.707zm7.586-7L15 4.854v-.707L11.793.94l-.707.707L13.439 4H1v1h12.44l-2.354 2.354.707.707z' stroke='white' stroke-width='0.3'/%3E%3C/svg%3E%0A"
}], qbe = [{
  label: "Copy HTML",
  img: "data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 -3 25 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9 2h7v4h4v10h-3v1h4V4.6L17.4 1H8v5h1zm8 0h.31L20 4.69V5h-3zM5 19h7v1H5zm-2 4h13V10.6L12.4 7H3zm9-15h.31L15 10.69V11h-3zM4 8h7v4h4v10H4zm1 5h9v1H5zm4 3h5v1H5v-1z' fill='%23FFFFFF'/%3E%3C/svg%3E"
}], Hbe = (t) => {
  const e = (n, r, i) => {
    n.type == "rule" && (n.props[0] = n.props[0].split(",").map((s) => `${t} ${s}`).join(","));
  };
  return Object.defineProperty(e, "name", {
    value: `scope-${t}`
  }), e;
};
function zbe(t) {
  function e(n) {
    n.clipboardData.setData("text/html", t), n.clipboardData.setData("text/plain", t), n.preventDefault();
  }
  document.addEventListener("copy", e), document.execCommand("copy"), document.removeEventListener("copy", e);
}
const jbe = ({
  name: t = "myst_editor_textarea",
  id: e = "myst_editor_textarea",
  initialMode: n = "Both",
  initialText: r = "",
  printCallback: i = window.print,
  topbar: s = !0,
  templatelist: o,
  collaboration: l = {}
}) => {
  const [c, a] = et(n), [h, u] = et(r), [f, d] = et(null), [p, g] = et(!1), m = (k) => ZD.sanitize(Qae({
    breaks: !0,
    linkify: !0
  }).use(kD).render(k)), y = (k, v) => {
    d(k), setTimeout(() => d(null), v * 1e3);
  }, b = () => {
    zbe(m(h)), y("copied!", 2);
  };
  return lt`
  <div id="myst-css-namespace">
    <${KS} stylisPlugins=${[Hbe("#myst-css-namespace")]}>
      <${Lbe}>
        <${Rbe} $shown=${s}>
          <${Ibe}> 
            <${Wm} buttons=${qbe} highlightActive=${!1} clickCallback=${() => b()}/>
            ${f && lt`<${Nbe}> ${f} <//>`}
          <//>
          <${Bbe}>
            <${Js} type="button" onClick=${(k) => i(k)}>Export as PDF<//>
            <${hbe} templatelist=${o} setText=${u} setSyncText=${g}/>
            <${Pbe} />
            <${Wm} buttons=${$be} clickedId=${2} clickCallback=${(k) => a(k)}/>
          <//>
        <//>
        <${Fbe}>
          <${Xye} text=${h} setText=${u} syncText=${p} setSyncText=${g} name=${t} id=${e} shown=${c === "Both" || c === "Source"} collaboration=${l}/>
          <${ube} $shown=${c === "Both" || c === "Preview"} dangerouslySetInnerHTML=${{
    __html: m(h)
  }}/>
          <${c == "Diff" && Obe} oldText=${r} text=${h}/>
        <//>
      <//>
    <//>
  </div>`;
};
export {
  jbe as default,
  lt as html,
  so as render
};

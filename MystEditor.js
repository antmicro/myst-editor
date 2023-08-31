var Zo, U, id, kn, Qc, rd, Dl, ni = {}, od = [], P0 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Ia = Array.isArray;
function Zt(n, e) {
  for (var t in e)
    n[t] = e[t];
  return n;
}
function sd(n) {
  var e = n.parentNode;
  e && e.removeChild(n);
}
function ld(n, e, t) {
  var i, r, o, s = {};
  for (o in e)
    o == "key" ? i = e[o] : o == "ref" ? r = e[o] : s[o] = e[o];
  if (arguments.length > 2 && (s.children = arguments.length > 3 ? Zo.call(arguments, 2) : t), typeof n == "function" && n.defaultProps != null)
    for (o in n.defaultProps)
      s[o] === void 0 && (s[o] = n.defaultProps[o]);
  return Yr(n, s, i, r, null);
}
function Yr(n, e, t, i, r) {
  var o = { type: n, props: e, key: t, ref: i, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: r == null ? ++id : r };
  return r == null && U.vnode != null && U.vnode(o), o;
}
function Xo(n) {
  return n.children;
}
function Jr(n, e) {
  this.props = n, this.context = e;
}
function ho(n, e) {
  if (e == null)
    return n.__ ? ho(n.__, n.__.__k.indexOf(n) + 1) : null;
  for (var t; e < n.__k.length; e++)
    if ((t = n.__k[e]) != null && t.__e != null)
      return t.__e;
  return typeof n.type == "function" ? ho(n) : null;
}
function ad(n) {
  var e, t;
  if ((n = n.__) != null && n.__c != null) {
    for (n.__e = n.__c.base = null, e = 0; e < n.__k.length; e++)
      if ((t = n.__k[e]) != null && t.__e != null) {
        n.__e = n.__c.base = t.__e;
        break;
      }
    return ad(n);
  }
}
function eh(n) {
  (!n.__d && (n.__d = !0) && kn.push(n) && !uo.__r++ || Qc !== U.debounceRendering) && ((Qc = U.debounceRendering) || rd)(uo);
}
function uo() {
  var n, e, t, i, r, o, s, l, a;
  for (kn.sort(Dl); n = kn.shift(); )
    n.__d && (e = kn.length, i = void 0, r = void 0, o = void 0, l = (s = (t = n).__v).__e, (a = t.__P) && (i = [], r = [], (o = Zt({}, s)).__v = s.__v + 1, Ba(a, s, o, t.__n, a.ownerSVGElement !== void 0, s.__h != null ? [l] : null, i, l == null ? ho(s) : l, s.__h, r), fd(i, s, r), s.__e != l && ad(s)), kn.length > e && kn.sort(Dl));
  uo.__r = 0;
}
function cd(n, e, t, i, r, o, s, l, a, c, h) {
  var u, f, d, p, m, g, b, y, w, x, _ = 0, k = i && i.__k || od, C = k.length, N = C, L = e.length;
  for (t.__k = [], u = 0; u < L; u++)
    (p = t.__k[u] = (p = e[u]) == null || typeof p == "boolean" || typeof p == "function" ? null : typeof p == "string" || typeof p == "number" || typeof p == "bigint" ? Yr(null, p, null, null, p) : Ia(p) ? Yr(Xo, { children: p }, null, null, null) : p.__b > 0 ? Yr(p.type, p.props, p.key, p.ref ? p.ref : null, p.__v) : p) != null && (p.__ = t, p.__b = t.__b + 1, (y = F0(p, k, b = u + _, N)) === -1 ? d = ni : (d = k[y] || ni, k[y] = void 0, N--), Ba(n, p, d, r, o, s, l, a, c, h), m = p.__e, (f = p.ref) && d.ref != f && (d.ref && Na(d.ref, null, p), h.push(f, p.__c || m, p)), m != null && (g == null && (g = m), x = !(w = d === ni || d.__v === null) && y === b, w ? y == -1 && _-- : y !== b && (y === b + 1 ? (_++, x = !0) : y > b ? N > L - b ? (_ += y - b, x = !0) : _-- : _ = y < b && y == b - 1 ? y - b : 0), b = u + _, x = x || y == u && !w, typeof p.type != "function" || y === b && d.__k !== p.__k ? typeof p.type == "function" || x ? p.__d !== void 0 ? (a = p.__d, p.__d = void 0) : a = m.nextSibling : a = ud(n, m, a) : a = hd(p, a, n), typeof t.type == "function" && (t.__d = a)));
  for (t.__e = g, u = C; u--; )
    k[u] != null && (typeof t.type == "function" && k[u].__e != null && k[u].__e == t.__d && (t.__d = k[u].__e.nextSibling), dd(k[u], k[u]));
}
function hd(n, e, t) {
  for (var i, r = n.__k, o = 0; r && o < r.length; o++)
    (i = r[o]) && (i.__ = n, e = typeof i.type == "function" ? hd(i, e, t) : ud(t, i.__e, e));
  return e;
}
function ud(n, e, t) {
  return t == null || t.parentNode !== n ? n.insertBefore(e, null) : e == t && e.parentNode != null || n.insertBefore(e, t), e.nextSibling;
}
function F0(n, e, t, i) {
  var r = n.key, o = n.type, s = t - 1, l = t + 1, a = e[t];
  if (a === null || a && r == a.key && o === a.type)
    return t;
  if (i > (a != null ? 1 : 0))
    for (; s >= 0 || l < e.length; ) {
      if (s >= 0) {
        if ((a = e[s]) && r == a.key && o === a.type)
          return s;
        s--;
      }
      if (l < e.length) {
        if ((a = e[l]) && r == a.key && o === a.type)
          return l;
        l++;
      }
    }
  return -1;
}
function q0(n, e, t, i, r) {
  var o;
  for (o in t)
    o === "children" || o === "key" || o in e || fo(n, o, null, t[o], i);
  for (o in e)
    r && typeof e[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || t[o] === e[o] || fo(n, o, e[o], t[o], i);
}
function th(n, e, t) {
  e[0] === "-" ? n.setProperty(e, t == null ? "" : t) : n[e] = t == null ? "" : typeof t != "number" || P0.test(e) ? t : t + "px";
}
function fo(n, e, t, i, r) {
  var o;
  e:
    if (e === "style")
      if (typeof t == "string")
        n.style.cssText = t;
      else {
        if (typeof i == "string" && (n.style.cssText = i = ""), i)
          for (e in i)
            t && e in t || th(n.style, e, "");
        if (t)
          for (e in t)
            i && t[e] === i[e] || th(n.style, e, t[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      o = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in n ? e.toLowerCase().slice(2) : e.slice(2), n.l || (n.l = {}), n.l[e + o] = t, t ? i || n.addEventListener(e, o ? ih : nh, o) : n.removeEventListener(e, o ? ih : nh, o);
    else if (e !== "dangerouslySetInnerHTML") {
      if (r)
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e !== "width" && e !== "height" && e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e !== "rowSpan" && e !== "colSpan" && e in n)
        try {
          n[e] = t == null ? "" : t;
          break e;
        } catch {
        }
      typeof t == "function" || (t == null || t === !1 && e[4] !== "-" ? n.removeAttribute(e) : n.setAttribute(e, t));
    }
}
function nh(n) {
  return this.l[n.type + !1](U.event ? U.event(n) : n);
}
function ih(n) {
  return this.l[n.type + !0](U.event ? U.event(n) : n);
}
function Ba(n, e, t, i, r, o, s, l, a, c) {
  var h, u, f, d, p, m, g, b, y, w, x, _, k, C, N, L = e.type;
  if (e.constructor !== void 0)
    return null;
  t.__h != null && (a = t.__h, l = e.__e = t.__e, e.__h = null, o = [l]), (h = U.__b) && h(e);
  try {
    e:
      if (typeof L == "function") {
        if (b = e.props, y = (h = L.contextType) && i[h.__c], w = h ? y ? y.props.value : h.__ : i, t.__c ? g = (u = e.__c = t.__c).__ = u.__E : ("prototype" in L && L.prototype.render ? e.__c = u = new L(b, w) : (e.__c = u = new Jr(b, w), u.constructor = L, u.render = z0), y && y.sub(u), u.props = b, u.state || (u.state = {}), u.context = w, u.__n = i, f = u.__d = !0, u.__h = [], u._sb = []), u.__s == null && (u.__s = u.state), L.getDerivedStateFromProps != null && (u.__s == u.state && (u.__s = Zt({}, u.__s)), Zt(u.__s, L.getDerivedStateFromProps(b, u.__s))), d = u.props, p = u.state, u.__v = e, f)
          L.getDerivedStateFromProps == null && u.componentWillMount != null && u.componentWillMount(), u.componentDidMount != null && u.__h.push(u.componentDidMount);
        else {
          if (L.getDerivedStateFromProps == null && b !== d && u.componentWillReceiveProps != null && u.componentWillReceiveProps(b, w), !u.__e && (u.shouldComponentUpdate != null && u.shouldComponentUpdate(b, u.__s, w) === !1 || e.__v === t.__v)) {
            for (e.__v !== t.__v && (u.props = b, u.state = u.__s, u.__d = !1), e.__e = t.__e, e.__k = t.__k, e.__k.forEach(function(D) {
              D && (D.__ = e);
            }), x = 0; x < u._sb.length; x++)
              u.__h.push(u._sb[x]);
            u._sb = [], u.__h.length && s.push(u);
            break e;
          }
          u.componentWillUpdate != null && u.componentWillUpdate(b, u.__s, w), u.componentDidUpdate != null && u.__h.push(function() {
            u.componentDidUpdate(d, p, m);
          });
        }
        if (u.context = w, u.props = b, u.__P = n, u.__e = !1, _ = U.__r, k = 0, "prototype" in L && L.prototype.render) {
          for (u.state = u.__s, u.__d = !1, _ && _(e), h = u.render(u.props, u.state, u.context), C = 0; C < u._sb.length; C++)
            u.__h.push(u._sb[C]);
          u._sb = [];
        } else
          do
            u.__d = !1, _ && _(e), h = u.render(u.props, u.state, u.context), u.state = u.__s;
          while (u.__d && ++k < 25);
        u.state = u.__s, u.getChildContext != null && (i = Zt(Zt({}, i), u.getChildContext())), f || u.getSnapshotBeforeUpdate == null || (m = u.getSnapshotBeforeUpdate(d, p)), cd(n, Ia(N = h != null && h.type === Xo && h.key == null ? h.props.children : h) ? N : [N], e, t, i, r, o, s, l, a, c), u.base = e.__e, e.__h = null, u.__h.length && s.push(u), g && (u.__E = u.__ = null);
      } else
        o == null && e.__v === t.__v ? (e.__k = t.__k, e.__e = t.__e) : e.__e = H0(t.__e, e, t, i, r, o, s, a, c);
    (h = U.diffed) && h(e);
  } catch (D) {
    e.__v = null, (a || o != null) && (e.__e = l, e.__h = !!a, o[o.indexOf(l)] = null), U.__e(D, e, t);
  }
}
function fd(n, e, t) {
  for (var i = 0; i < t.length; i++)
    Na(t[i], t[++i], t[++i]);
  U.__c && U.__c(e, n), n.some(function(r) {
    try {
      n = r.__h, r.__h = [], n.some(function(o) {
        o.call(r);
      });
    } catch (o) {
      U.__e(o, r.__v);
    }
  });
}
function H0(n, e, t, i, r, o, s, l, a) {
  var c, h, u, f = t.props, d = e.props, p = e.type, m = 0;
  if (p === "svg" && (r = !0), o != null) {
    for (; m < o.length; m++)
      if ((c = o[m]) && "setAttribute" in c == !!p && (p ? c.localName === p : c.nodeType === 3)) {
        n = c, o[m] = null;
        break;
      }
  }
  if (n == null) {
    if (p === null)
      return document.createTextNode(d);
    n = r ? document.createElementNS("http://www.w3.org/2000/svg", p) : document.createElement(p, d.is && d), o = null, l = !1;
  }
  if (p === null)
    f === d || l && n.data === d || (n.data = d);
  else {
    if (o = o && Zo.call(n.childNodes), h = (f = t.props || ni).dangerouslySetInnerHTML, u = d.dangerouslySetInnerHTML, !l) {
      if (o != null)
        for (f = {}, m = 0; m < n.attributes.length; m++)
          f[n.attributes[m].name] = n.attributes[m].value;
      (u || h) && (u && (h && u.__html == h.__html || u.__html === n.innerHTML) || (n.innerHTML = u && u.__html || ""));
    }
    if (q0(n, d, f, r, l), u)
      e.__k = [];
    else if (cd(n, Ia(m = e.props.children) ? m : [m], e, t, i, r && p !== "foreignObject", o, s, o ? o[0] : t.__k && ho(t, 0), l, a), o != null)
      for (m = o.length; m--; )
        o[m] != null && sd(o[m]);
    l || ("value" in d && (m = d.value) !== void 0 && (m !== n.value || p === "progress" && !m || p === "option" && m !== f.value) && fo(n, "value", m, f.value, !1), "checked" in d && (m = d.checked) !== void 0 && m !== n.checked && fo(n, "checked", m, f.checked, !1));
  }
  return n;
}
function Na(n, e, t) {
  try {
    typeof n == "function" ? n(e) : n.current = e;
  } catch (i) {
    U.__e(i, t);
  }
}
function dd(n, e, t) {
  var i, r;
  if (U.unmount && U.unmount(n), (i = n.ref) && (i.current && i.current !== n.__e || Na(i, null, e)), (i = n.__c) != null) {
    if (i.componentWillUnmount)
      try {
        i.componentWillUnmount();
      } catch (o) {
        U.__e(o, e);
      }
    i.base = i.__P = null, n.__c = void 0;
  }
  if (i = n.__k)
    for (r = 0; r < i.length; r++)
      i[r] && dd(i[r], e, t || typeof n.type != "function");
  t || n.__e == null || sd(n.__e), n.__ = n.__e = n.__d = void 0;
}
function z0(n, e, t) {
  return this.constructor(n, t);
}
function wse(n, e, t) {
  var i, r, o, s;
  U.__ && U.__(n, e), r = (i = typeof t == "function") ? null : t && t.__k || e.__k, o = [], s = [], Ba(e, n = (!i && t || e).__k = ld(Xo, null, [n]), r || ni, ni, e.ownerSVGElement !== void 0, !i && t ? [t] : r ? null : e.firstChild ? Zo.call(e.childNodes) : null, o, !i && t ? t : r ? r.__e : e.firstChild, i, s), fd(o, n, s);
}
Zo = od.slice, U = { __e: function(n, e, t, i) {
  for (var r, o, s; e = e.__; )
    if ((r = e.__c) && !r.__)
      try {
        if ((o = r.constructor) && o.getDerivedStateFromError != null && (r.setState(o.getDerivedStateFromError(n)), s = r.__d), r.componentDidCatch != null && (r.componentDidCatch(n, i || {}), s = r.__d), s)
          return r.__E = r;
      } catch (l) {
        n = l;
      }
  throw n;
} }, id = 0, Jr.prototype.setState = function(n, e) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Zt({}, this.state), typeof n == "function" && (n = n(Zt({}, t), this.props)), n && Zt(t, n), n != null && this.__v && (e && this._sb.push(e), eh(this));
}, Jr.prototype.forceUpdate = function(n) {
  this.__v && (this.__e = !0, n && this.__h.push(n), eh(this));
}, Jr.prototype.render = Xo, kn = [], rd = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Dl = function(n, e) {
  return n.__v.__b - e.__v.__b;
}, uo.__r = 0;
var Vi, pe, Ns, rh, po = 0, pd = [], Zr = [], oh = U.__b, sh = U.__r, lh = U.diffed, ah = U.__c, ch = U.unmount;
function Pa(n, e) {
  U.__h && U.__h(pe, n, po || e), po = 0;
  var t = pe.__H || (pe.__H = { __: [], __h: [] });
  return n >= t.__.length && t.__.push({ __V: Zr }), t.__[n];
}
function wt(n) {
  return po = 1, $0(bd, n);
}
function $0(n, e, t) {
  var i = Pa(Vi++, 2);
  if (i.t = n, !i.__c && (i.__ = [t ? t(e) : bd(void 0, e), function(l) {
    var a = i.__N ? i.__N[0] : i.__[0], c = i.t(a, l);
    a !== c && (i.__N = [c, i.__[1]], i.__c.setState({}));
  }], i.__c = pe, !pe.u)) {
    var r = function(l, a, c) {
      if (!i.__c.__H)
        return !0;
      var h = i.__c.__H.__.filter(function(f) {
        return f.__c;
      });
      if (h.every(function(f) {
        return !f.__N;
      }))
        return !o || o.call(this, l, a, c);
      var u = !1;
      return h.forEach(function(f) {
        if (f.__N) {
          var d = f.__[0];
          f.__ = f.__N, f.__N = void 0, d !== f.__[0] && (u = !0);
        }
      }), !(!u && i.__c.props === l) && (!o || o.call(this, l, a, c));
    };
    pe.u = !0;
    var o = pe.shouldComponentUpdate, s = pe.componentWillUpdate;
    pe.componentWillUpdate = function(l, a, c) {
      if (this.__e) {
        var h = o;
        o = void 0, r(l, a, c), o = h;
      }
      s && s.call(this, l, a, c);
    }, pe.shouldComponentUpdate = r;
  }
  return i.__N || i.__;
}
function mo(n, e) {
  var t = Pa(Vi++, 3);
  !U.__s && gd(t.__H, e) && (t.__ = n, t.i = e, pe.__H.__h.push(t));
}
function md(n) {
  return po = 5, V0(function() {
    return { current: n };
  }, []);
}
function V0(n, e) {
  var t = Pa(Vi++, 7);
  return gd(t.__H, e) ? (t.__V = n(), t.i = e, t.__h = n, t.__V) : t.__;
}
function U0() {
  for (var n; n = pd.shift(); )
    if (n.__P && n.__H)
      try {
        n.__H.__h.forEach(Xr), n.__H.__h.forEach(Ml), n.__H.__h = [];
      } catch (e) {
        n.__H.__h = [], U.__e(e, n.__v);
      }
}
U.__b = function(n) {
  pe = null, oh && oh(n);
}, U.__r = function(n) {
  sh && sh(n), Vi = 0;
  var e = (pe = n.__c).__H;
  e && (Ns === pe ? (e.__h = [], pe.__h = [], e.__.forEach(function(t) {
    t.__N && (t.__ = t.__N), t.__V = Zr, t.__N = t.i = void 0;
  })) : (e.__h.forEach(Xr), e.__h.forEach(Ml), e.__h = [], Vi = 0)), Ns = pe;
}, U.diffed = function(n) {
  lh && lh(n);
  var e = n.__c;
  e && e.__H && (e.__H.__h.length && (pd.push(e) !== 1 && rh === U.requestAnimationFrame || ((rh = U.requestAnimationFrame) || W0)(U0)), e.__H.__.forEach(function(t) {
    t.i && (t.__H = t.i), t.__V !== Zr && (t.__ = t.__V), t.i = void 0, t.__V = Zr;
  })), Ns = pe = null;
}, U.__c = function(n, e) {
  e.some(function(t) {
    try {
      t.__h.forEach(Xr), t.__h = t.__h.filter(function(i) {
        return !i.__ || Ml(i);
      });
    } catch (i) {
      e.some(function(r) {
        r.__h && (r.__h = []);
      }), e = [], U.__e(i, t.__v);
    }
  }), ah && ah(n, e);
}, U.unmount = function(n) {
  ch && ch(n);
  var e, t = n.__c;
  t && t.__H && (t.__H.__.forEach(function(i) {
    try {
      Xr(i);
    } catch (r) {
      e = r;
    }
  }), t.__H = void 0, e && U.__e(e, t.__v));
};
var hh = typeof requestAnimationFrame == "function";
function W0(n) {
  var e, t = function() {
    clearTimeout(i), hh && cancelAnimationFrame(e), setTimeout(n);
  }, i = setTimeout(t, 100);
  hh && (e = requestAnimationFrame(t));
}
function Xr(n) {
  var e = pe, t = n.__c;
  typeof t == "function" && (n.__c = void 0, t()), pe = e;
}
function Ml(n) {
  var e = pe;
  n.__c = n.__(), pe = e;
}
function gd(n, e) {
  return !n || n.length !== e.length || e.some(function(t, i) {
    return t !== n[i];
  });
}
function bd(n, e) {
  return typeof e == "function" ? e(n) : e;
}
var yd = function(n, e, t, i) {
  var r;
  e[0] = 0;
  for (var o = 1; o < e.length; o++) {
    var s = e[o++], l = e[o] ? (e[0] |= s ? 1 : 2, t[e[o++]]) : e[++o];
    s === 3 ? i[0] = l : s === 4 ? i[1] = Object.assign(i[1] || {}, l) : s === 5 ? (i[1] = i[1] || {})[e[++o]] = l : s === 6 ? i[1][e[++o]] += l + "" : s ? (r = n.apply(l, yd(n, l, t, ["", null])), i.push(r), l[0] ? e[0] |= 2 : (e[o - 2] = 0, e[o] = r)) : i.push(l);
  }
  return i;
}, uh = /* @__PURE__ */ new Map();
function j0(n) {
  var e = uh.get(this);
  return e || (e = /* @__PURE__ */ new Map(), uh.set(this, e)), (e = yd(this, e.get(n) || (e.set(n, e = function(t) {
    for (var i, r, o = 1, s = "", l = "", a = [0], c = function(f) {
      o === 1 && (f || (s = s.replace(/^\s*\n\s*|\s*\n\s*$/g, ""))) ? a.push(0, f, s) : o === 3 && (f || s) ? (a.push(3, f, s), o = 2) : o === 2 && s === "..." && f ? a.push(4, f, 0) : o === 2 && s && !f ? a.push(5, 0, !0, s) : o >= 5 && ((s || !f && o === 5) && (a.push(o, 0, s, r), o = 6), f && (a.push(o, f, 0, r), o = 6)), s = "";
    }, h = 0; h < t.length; h++) {
      h && (o === 1 && c(), c(h));
      for (var u = 0; u < t[h].length; u++)
        i = t[h][u], o === 1 ? i === "<" ? (c(), a = [a], o = 3) : s += i : o === 4 ? s === "--" && i === ">" ? (o = 1, s = "") : s = i + s[0] : l ? i === l ? l = "" : s += i : i === '"' || i === "'" ? l = i : i === ">" ? (c(), o = 1) : o && (i === "=" ? (o = 5, r = s, s = "") : i === "/" && (o < 5 || t[h][u + 1] === ">") ? (c(), o === 3 && (a = a[0]), o = a, (a = a[0]).push(2, 0, o), o = 0) : i === " " || i === "	" || i === `
` || i === "\r" ? (c(), o = 2) : s += i), o === 3 && s === "!--" && (o = 4, a = a[0]);
    }
    return c(), a;
  }(n)), e), arguments, [])).length > 1 ? e : e[0];
}
var tt = j0.bind(ld);
class dn {
  constructor(e) {
    this.state = e;
  }
  run(e) {
    return [];
  }
}
class G0 extends dn {
  run(e) {
    const t = new this.state.Token("code_inline", "code", 0);
    return t.content = e.content, [t];
  }
}
const K0 = {
  raw: G0
}, Ol = "math_inline";
class Y0 extends dn {
  run(e) {
    const t = new this.state.Token(Ol, "span", 0);
    return t.attrSet("class", "math inline"), t.markup = "$", t.content = e.content, [t];
  }
}
function J0(n, e) {
  var t;
  !(!((t = e == null ? void 0 : e.roles) === null || t === void 0) && t.math) || n.renderer.rules[Ol] || (n.renderer.rules[Ol] = (i, r) => {
    var o, s, l;
    const a = (l = (s = (o = e == null ? void 0 : e.opts) === null || o === void 0 ? void 0 : o.math) === null || s === void 0 ? void 0 : s.renderer) !== null && l !== void 0 ? l : (f) => n.utils.escapeHtml(f), c = i[r], h = c.content.trim(), u = a(h, { displayMode: !1 });
    return `<span class="${c.attrGet("class")}">${u}</span>`;
  });
}
const Z0 = {
  math: Y0
};
function X0(n, e) {
  e.parseRoles && n.inline.ruler.before("backticks", "parse_roles", Q0), n.core.ruler.after(e.rolesAfter || "inline", "run_roles", tb(e.roles || {})), n.renderer.rules.role = (t, i) => {
    const r = t[i];
    return `<span class="role-unhandled"><mark>${r.meta.name}</mark><code>${r.content}</code></span>`;
  }, J0(n, e);
}
function Q0(n, e) {
  if (n.src.charCodeAt(n.pos - 1) === 92)
    return !1;
  const t = eb.exec(n.src.slice(n.pos));
  if (t == null)
    return !1;
  const [i, r, , o] = t;
  if (n.pos += i.length, !e) {
    const s = n.push("role", "", 0);
    s.meta = { name: r }, s.content = o;
  }
  return !0;
}
let Ll;
try {
  Ll = new RegExp("^\\{([a-zA-Z_\\-+:]{1,36})\\}(`+)(?!`)(.+?)(?<!`)\\2(?!`)");
} catch {
  Ll = /^\{([a-zA-Z_\-+:]{1,36})\}(`+)(?!`)(.+?)\2(?!`)/;
}
const eb = Ll;
function tb(n) {
  function e(t) {
    var i;
    for (const r of t.tokens)
      if (r.type === "inline" && r.children) {
        const o = [];
        for (const s of r.children)
          if (s.type === "role" && ((i = s.meta) === null || i === void 0 ? void 0 : i.name) in n)
            try {
              const l = new n[s.meta.name](t), a = new t.Token("parsed_role_open", "", 1);
              a.content = s.content, a.hidden = !0, a.meta = { name: s.meta.name }, a.block = !1;
              const c = [a];
              c.push(...l.run({
                parentMap: r.map,
                content: s.content
              }));
              const h = new t.Token("parsed_role_close", "", -1);
              h.block = !1, h.hidden = !0, c.push(h), o.push(...c);
            } catch (l) {
              const a = new t.Token("role_error", "", 0);
              a.content = s.content, a.info = s.info, a.meta = s.meta, a.map = s.map, a.meta.error_message = l.message, a.meta.error_name = l.name, o.push(a);
            }
          else
            o.push(s);
        r.children = o;
      }
    return !0;
  }
  return e;
}
class fh extends dn {
  run(e) {
    const t = new this.state.Token("sub_open", "sub", 1);
    t.markup = "~";
    const i = new this.state.Token("text", "", 0);
    i.content = e.content;
    const r = new this.state.Token("sub_close", "sub", -1);
    return r.markup = "~", [t, i, r];
  }
}
class dh extends dn {
  run(e) {
    const t = new this.state.Token("sup_open", "sup", 1);
    t.markup = "~";
    const i = new this.state.Token("text", "", 0);
    i.content = e.content;
    const r = new this.state.Token("sup_close", "sup", -1);
    return r.markup = "~", [t, i, r];
  }
}
const nb = /^(.+?)\(([^()]+)\)$/;
class ph extends dn {
  run(e) {
    var t, i, r, o;
    const s = nb.exec(e.content), l = (i = (t = s == null ? void 0 : s[1]) === null || t === void 0 ? void 0 : t.trim()) !== null && i !== void 0 ? i : e.content.trim(), a = (o = (r = s == null ? void 0 : s[2]) === null || r === void 0 ? void 0 : r.trim()) !== null && o !== void 0 ? o : null, c = new this.state.Token("abbr_open", "abbr", 1);
    a && c.attrSet("title", a);
    const h = new this.state.Token("text", "", 0);
    h.content = l;
    const u = new this.state.Token("abbr_close", "abbr", -1);
    return [c, h, u];
  }
}
const ib = {
  subscript: fh,
  sub: fh,
  superscript: dh,
  sup: dh,
  abbreviation: ph,
  abbr: ph
};
var Ui;
(function(n) {
  n.equation = "eq", n.figure = "fig", n.table = "table", n.code = "code", n.section = "sec";
})(Ui || (Ui = {}));
function Qo(n) {
  var e, t;
  const i = (t = (e = n.env) === null || e === void 0 ? void 0 : e.docutils) !== null && t !== void 0 ? t : {};
  return i.targets || (i.targets = {}), i.references || (i.references = []), i.numbering || (i.numbering = {}), n.env.docutils || (n.env.docutils = i), i;
}
function rb(n) {
  var e, t;
  const i = (t = (e = n.meta) === null || e === void 0 ? void 0 : e.docutils) !== null && t !== void 0 ? t : {};
  return n.meta || (n.meta = {}), n.meta.docutils || (n.meta.docutils = i), i;
}
function ob(n, e) {
  const t = Qo(n);
  return t.numbering[e] == null ? t.numbering[e] = 1 : t.numbering[e] += 1, t.numbering[e];
}
function vd(n, e, t, i, r, o = !1) {
  const s = Qo(n), l = ob(n, t), a = {
    label: i,
    kind: t,
    number: l,
    title: r
  };
  if (!o) {
    const c = rb(e);
    c.target = a, e.attrSet("id", i), s.targets[i] = a;
  }
  return a;
}
function Fa(n, e, t, i) {
  var r;
  e.open.meta = (r = e.open.meta) !== null && r !== void 0 ? r : {}, e.open.meta.kind = t.kind, e.open.meta.label = t.label, e.open.meta.value = t.value, Qo(n).references.push(Object.assign({ label: t.label, tokens: e }, i));
}
const xd = /^(.+?)<([^<>]+)>$/;
class sb extends dn {
  run(e) {
    const t = new this.state.Token("ref_open", "a", 1), i = new this.state.Token("text", "", 0), r = new this.state.Token("ref_close", "a", -1);
    return Fa(this.state, { open: t, content: i, close: r }, { kind: "eq", label: e.content }, {
      kind: Ui.equation,
      contentFromTarget: (o) => `(${o.number})`
    }), [t, i, r];
  }
}
class lb extends dn {
  run(e) {
    const t = xd.exec(e.content), [, i, r] = t != null ? t : [], o = i == null ? void 0 : i.trim(), s = new this.state.Token("ref_open", "a", 1), l = new this.state.Token("text", "", 0), a = new this.state.Token("ref_close", "a", -1);
    return Fa(this.state, { open: s, content: l, close: a }, { kind: "numref", label: r || e.content, value: o }, {
      contentFromTarget: (c) => t ? o.replace(/%s/g, String(c.number)).replace(/\{number\}/g, String(c.number)) : c.title.trim()
    }), [s, l, a];
  }
}
class ab extends dn {
  run(e) {
    const t = xd.exec(e.content), [, i, r] = t != null ? t : [], o = i == null ? void 0 : i.trim(), s = new this.state.Token("ref_open", "a", 1), l = new this.state.Token("text", "", 0), a = new this.state.Token("ref_close", "a", -1);
    return Fa(this.state, { open: s, content: l, close: a }, { kind: "ref", label: r || e.content, value: o }, {
      contentFromTarget: (c) => o || c.title
    }), [s, l, a];
  }
}
const cb = {
  eq: sb,
  ref: ab,
  numref: lb
}, hb = Object.assign(Object.assign(Object.assign(Object.assign({}, K0), ib), Z0), cb);
/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */
function kd(n) {
  return typeof n > "u" || n === null;
}
function ub(n) {
  return typeof n == "object" && n !== null;
}
function fb(n) {
  return Array.isArray(n) ? n : kd(n) ? [] : [n];
}
function db(n, e) {
  var t, i, r, o;
  if (e)
    for (o = Object.keys(e), t = 0, i = o.length; t < i; t += 1)
      r = o[t], n[r] = e[r];
  return n;
}
function pb(n, e) {
  var t = "", i;
  for (i = 0; i < e; i += 1)
    t += n;
  return t;
}
function mb(n) {
  return n === 0 && Number.NEGATIVE_INFINITY === 1 / n;
}
var gb = kd, bb = ub, yb = fb, vb = pb, xb = mb, kb = db, ve = {
  isNothing: gb,
  isObject: bb,
  toArray: yb,
  repeat: vb,
  isNegativeZero: xb,
  extend: kb
};
function wd(n, e) {
  var t = "", i = n.reason || "(unknown reason)";
  return n.mark ? (n.mark.name && (t += 'in "' + n.mark.name + '" '), t += "(" + (n.mark.line + 1) + ":" + (n.mark.column + 1) + ")", !e && n.mark.snippet && (t += `

` + n.mark.snippet), i + " " + t) : i;
}
function Wi(n, e) {
  Error.call(this), this.name = "YAMLException", this.reason = n, this.mark = e, this.message = wd(this, !1), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack || "";
}
Wi.prototype = Object.create(Error.prototype);
Wi.prototype.constructor = Wi;
Wi.prototype.toString = function(e) {
  return this.name + ": " + wd(this, e);
};
var He = Wi;
function Ps(n, e, t, i, r) {
  var o = "", s = "", l = Math.floor(r / 2) - 1;
  return i - e > l && (o = " ... ", e = i - l + o.length), t - i > l && (s = " ...", t = i + l - s.length), {
    str: o + n.slice(e, t).replace(/\t/g, "\u2192") + s,
    pos: i - e + o.length
  };
}
function Fs(n, e) {
  return ve.repeat(" ", e - n.length) + n;
}
function wb(n, e) {
  if (e = Object.create(e || null), !n.buffer)
    return null;
  e.maxLength || (e.maxLength = 79), typeof e.indent != "number" && (e.indent = 1), typeof e.linesBefore != "number" && (e.linesBefore = 3), typeof e.linesAfter != "number" && (e.linesAfter = 2);
  for (var t = /\r?\n|\r|\0/g, i = [0], r = [], o, s = -1; o = t.exec(n.buffer); )
    r.push(o.index), i.push(o.index + o[0].length), n.position <= o.index && s < 0 && (s = i.length - 2);
  s < 0 && (s = i.length - 1);
  var l = "", a, c, h = Math.min(n.line + e.linesAfter, r.length).toString().length, u = e.maxLength - (e.indent + h + 3);
  for (a = 1; a <= e.linesBefore && !(s - a < 0); a++)
    c = Ps(
      n.buffer,
      i[s - a],
      r[s - a],
      n.position - (i[s] - i[s - a]),
      u
    ), l = ve.repeat(" ", e.indent) + Fs((n.line - a + 1).toString(), h) + " | " + c.str + `
` + l;
  for (c = Ps(n.buffer, i[s], r[s], n.position, u), l += ve.repeat(" ", e.indent) + Fs((n.line + 1).toString(), h) + " | " + c.str + `
`, l += ve.repeat("-", e.indent + h + 3 + c.pos) + `^
`, a = 1; a <= e.linesAfter && !(s + a >= r.length); a++)
    c = Ps(
      n.buffer,
      i[s + a],
      r[s + a],
      n.position - (i[s] - i[s + a]),
      u
    ), l += ve.repeat(" ", e.indent) + Fs((n.line + a + 1).toString(), h) + " | " + c.str + `
`;
  return l.replace(/\n$/, "");
}
var _b = wb, Ab = [
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
], Cb = [
  "scalar",
  "sequence",
  "mapping"
];
function Sb(n) {
  var e = {};
  return n !== null && Object.keys(n).forEach(function(t) {
    n[t].forEach(function(i) {
      e[String(i)] = t;
    });
  }), e;
}
function Tb(n, e) {
  if (e = e || {}, Object.keys(e).forEach(function(t) {
    if (Ab.indexOf(t) === -1)
      throw new He('Unknown option "' + t + '" is met in definition of "' + n + '" YAML type.');
  }), this.options = e, this.tag = n, this.kind = e.kind || null, this.resolve = e.resolve || function() {
    return !0;
  }, this.construct = e.construct || function(t) {
    return t;
  }, this.instanceOf = e.instanceOf || null, this.predicate = e.predicate || null, this.represent = e.represent || null, this.representName = e.representName || null, this.defaultStyle = e.defaultStyle || null, this.multi = e.multi || !1, this.styleAliases = Sb(e.styleAliases || null), Cb.indexOf(this.kind) === -1)
    throw new He('Unknown kind "' + this.kind + '" is specified for "' + n + '" YAML type.');
}
var De = Tb;
function mh(n, e) {
  var t = [];
  return n[e].forEach(function(i) {
    var r = t.length;
    t.forEach(function(o, s) {
      o.tag === i.tag && o.kind === i.kind && o.multi === i.multi && (r = s);
    }), t[r] = i;
  }), t;
}
function Eb() {
  var n = {
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
  }, e, t;
  function i(r) {
    r.multi ? (n.multi[r.kind].push(r), n.multi.fallback.push(r)) : n[r.kind][r.tag] = n.fallback[r.tag] = r;
  }
  for (e = 0, t = arguments.length; e < t; e += 1)
    arguments[e].forEach(i);
  return n;
}
function Rl(n) {
  return this.extend(n);
}
Rl.prototype.extend = function(e) {
  var t = [], i = [];
  if (e instanceof De)
    i.push(e);
  else if (Array.isArray(e))
    i = i.concat(e);
  else if (e && (Array.isArray(e.implicit) || Array.isArray(e.explicit)))
    e.implicit && (t = t.concat(e.implicit)), e.explicit && (i = i.concat(e.explicit));
  else
    throw new He("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");
  t.forEach(function(o) {
    if (!(o instanceof De))
      throw new He("Specified list of YAML types (or a single Type object) contains a non-Type object.");
    if (o.loadKind && o.loadKind !== "scalar")
      throw new He("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");
    if (o.multi)
      throw new He("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.");
  }), i.forEach(function(o) {
    if (!(o instanceof De))
      throw new He("Specified list of YAML types (or a single Type object) contains a non-Type object.");
  });
  var r = Object.create(Rl.prototype);
  return r.implicit = (this.implicit || []).concat(t), r.explicit = (this.explicit || []).concat(i), r.compiledImplicit = mh(r, "implicit"), r.compiledExplicit = mh(r, "explicit"), r.compiledTypeMap = Eb(r.compiledImplicit, r.compiledExplicit), r;
};
var _d = Rl, Ad = new De("tag:yaml.org,2002:str", {
  kind: "scalar",
  construct: function(n) {
    return n !== null ? n : "";
  }
}), Cd = new De("tag:yaml.org,2002:seq", {
  kind: "sequence",
  construct: function(n) {
    return n !== null ? n : [];
  }
}), Sd = new De("tag:yaml.org,2002:map", {
  kind: "mapping",
  construct: function(n) {
    return n !== null ? n : {};
  }
}), Td = new _d({
  explicit: [
    Ad,
    Cd,
    Sd
  ]
});
function Db(n) {
  if (n === null)
    return !0;
  var e = n.length;
  return e === 1 && n === "~" || e === 4 && (n === "null" || n === "Null" || n === "NULL");
}
function Mb() {
  return null;
}
function Ob(n) {
  return n === null;
}
var Ed = new De("tag:yaml.org,2002:null", {
  kind: "scalar",
  resolve: Db,
  construct: Mb,
  predicate: Ob,
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
function Lb(n) {
  if (n === null)
    return !1;
  var e = n.length;
  return e === 4 && (n === "true" || n === "True" || n === "TRUE") || e === 5 && (n === "false" || n === "False" || n === "FALSE");
}
function Rb(n) {
  return n === "true" || n === "True" || n === "TRUE";
}
function Ib(n) {
  return Object.prototype.toString.call(n) === "[object Boolean]";
}
var Dd = new De("tag:yaml.org,2002:bool", {
  kind: "scalar",
  resolve: Lb,
  construct: Rb,
  predicate: Ib,
  represent: {
    lowercase: function(n) {
      return n ? "true" : "false";
    },
    uppercase: function(n) {
      return n ? "TRUE" : "FALSE";
    },
    camelcase: function(n) {
      return n ? "True" : "False";
    }
  },
  defaultStyle: "lowercase"
});
function Bb(n) {
  return 48 <= n && n <= 57 || 65 <= n && n <= 70 || 97 <= n && n <= 102;
}
function Nb(n) {
  return 48 <= n && n <= 55;
}
function Pb(n) {
  return 48 <= n && n <= 57;
}
function Fb(n) {
  if (n === null)
    return !1;
  var e = n.length, t = 0, i = !1, r;
  if (!e)
    return !1;
  if (r = n[t], (r === "-" || r === "+") && (r = n[++t]), r === "0") {
    if (t + 1 === e)
      return !0;
    if (r = n[++t], r === "b") {
      for (t++; t < e; t++)
        if (r = n[t], r !== "_") {
          if (r !== "0" && r !== "1")
            return !1;
          i = !0;
        }
      return i && r !== "_";
    }
    if (r === "x") {
      for (t++; t < e; t++)
        if (r = n[t], r !== "_") {
          if (!Bb(n.charCodeAt(t)))
            return !1;
          i = !0;
        }
      return i && r !== "_";
    }
    if (r === "o") {
      for (t++; t < e; t++)
        if (r = n[t], r !== "_") {
          if (!Nb(n.charCodeAt(t)))
            return !1;
          i = !0;
        }
      return i && r !== "_";
    }
  }
  if (r === "_")
    return !1;
  for (; t < e; t++)
    if (r = n[t], r !== "_") {
      if (!Pb(n.charCodeAt(t)))
        return !1;
      i = !0;
    }
  return !(!i || r === "_");
}
function qb(n) {
  var e = n, t = 1, i;
  if (e.indexOf("_") !== -1 && (e = e.replace(/_/g, "")), i = e[0], (i === "-" || i === "+") && (i === "-" && (t = -1), e = e.slice(1), i = e[0]), e === "0")
    return 0;
  if (i === "0") {
    if (e[1] === "b")
      return t * parseInt(e.slice(2), 2);
    if (e[1] === "x")
      return t * parseInt(e.slice(2), 16);
    if (e[1] === "o")
      return t * parseInt(e.slice(2), 8);
  }
  return t * parseInt(e, 10);
}
function Hb(n) {
  return Object.prototype.toString.call(n) === "[object Number]" && n % 1 === 0 && !ve.isNegativeZero(n);
}
var Md = new De("tag:yaml.org,2002:int", {
  kind: "scalar",
  resolve: Fb,
  construct: qb,
  predicate: Hb,
  represent: {
    binary: function(n) {
      return n >= 0 ? "0b" + n.toString(2) : "-0b" + n.toString(2).slice(1);
    },
    octal: function(n) {
      return n >= 0 ? "0o" + n.toString(8) : "-0o" + n.toString(8).slice(1);
    },
    decimal: function(n) {
      return n.toString(10);
    },
    hexadecimal: function(n) {
      return n >= 0 ? "0x" + n.toString(16).toUpperCase() : "-0x" + n.toString(16).toUpperCase().slice(1);
    }
  },
  defaultStyle: "decimal",
  styleAliases: {
    binary: [2, "bin"],
    octal: [8, "oct"],
    decimal: [10, "dec"],
    hexadecimal: [16, "hex"]
  }
}), zb = new RegExp(
  "^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"
);
function $b(n) {
  return !(n === null || !zb.test(n) || n[n.length - 1] === "_");
}
function Vb(n) {
  var e, t;
  return e = n.replace(/_/g, "").toLowerCase(), t = e[0] === "-" ? -1 : 1, "+-".indexOf(e[0]) >= 0 && (e = e.slice(1)), e === ".inf" ? t === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY : e === ".nan" ? NaN : t * parseFloat(e, 10);
}
var Ub = /^[-+]?[0-9]+e/;
function Wb(n, e) {
  var t;
  if (isNaN(n))
    switch (e) {
      case "lowercase":
        return ".nan";
      case "uppercase":
        return ".NAN";
      case "camelcase":
        return ".NaN";
    }
  else if (Number.POSITIVE_INFINITY === n)
    switch (e) {
      case "lowercase":
        return ".inf";
      case "uppercase":
        return ".INF";
      case "camelcase":
        return ".Inf";
    }
  else if (Number.NEGATIVE_INFINITY === n)
    switch (e) {
      case "lowercase":
        return "-.inf";
      case "uppercase":
        return "-.INF";
      case "camelcase":
        return "-.Inf";
    }
  else if (ve.isNegativeZero(n))
    return "-0.0";
  return t = n.toString(10), Ub.test(t) ? t.replace("e", ".e") : t;
}
function jb(n) {
  return Object.prototype.toString.call(n) === "[object Number]" && (n % 1 !== 0 || ve.isNegativeZero(n));
}
var Od = new De("tag:yaml.org,2002:float", {
  kind: "scalar",
  resolve: $b,
  construct: Vb,
  predicate: jb,
  represent: Wb,
  defaultStyle: "lowercase"
}), Ld = Td.extend({
  implicit: [
    Ed,
    Dd,
    Md,
    Od
  ]
}), Rd = Ld, Id = new RegExp(
  "^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"
), Bd = new RegExp(
  "^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$"
);
function Gb(n) {
  return n === null ? !1 : Id.exec(n) !== null || Bd.exec(n) !== null;
}
function Kb(n) {
  var e, t, i, r, o, s, l, a = 0, c = null, h, u, f;
  if (e = Id.exec(n), e === null && (e = Bd.exec(n)), e === null)
    throw new Error("Date resolve error");
  if (t = +e[1], i = +e[2] - 1, r = +e[3], !e[4])
    return new Date(Date.UTC(t, i, r));
  if (o = +e[4], s = +e[5], l = +e[6], e[7]) {
    for (a = e[7].slice(0, 3); a.length < 3; )
      a += "0";
    a = +a;
  }
  return e[9] && (h = +e[10], u = +(e[11] || 0), c = (h * 60 + u) * 6e4, e[9] === "-" && (c = -c)), f = new Date(Date.UTC(t, i, r, o, s, l, a)), c && f.setTime(f.getTime() - c), f;
}
function Yb(n) {
  return n.toISOString();
}
var Nd = new De("tag:yaml.org,2002:timestamp", {
  kind: "scalar",
  resolve: Gb,
  construct: Kb,
  instanceOf: Date,
  represent: Yb
});
function Jb(n) {
  return n === "<<" || n === null;
}
var Pd = new De("tag:yaml.org,2002:merge", {
  kind: "scalar",
  resolve: Jb
}), qa = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;
function Zb(n) {
  if (n === null)
    return !1;
  var e, t, i = 0, r = n.length, o = qa;
  for (t = 0; t < r; t++)
    if (e = o.indexOf(n.charAt(t)), !(e > 64)) {
      if (e < 0)
        return !1;
      i += 6;
    }
  return i % 8 === 0;
}
function Xb(n) {
  var e, t, i = n.replace(/[\r\n=]/g, ""), r = i.length, o = qa, s = 0, l = [];
  for (e = 0; e < r; e++)
    e % 4 === 0 && e && (l.push(s >> 16 & 255), l.push(s >> 8 & 255), l.push(s & 255)), s = s << 6 | o.indexOf(i.charAt(e));
  return t = r % 4 * 6, t === 0 ? (l.push(s >> 16 & 255), l.push(s >> 8 & 255), l.push(s & 255)) : t === 18 ? (l.push(s >> 10 & 255), l.push(s >> 2 & 255)) : t === 12 && l.push(s >> 4 & 255), new Uint8Array(l);
}
function Qb(n) {
  var e = "", t = 0, i, r, o = n.length, s = qa;
  for (i = 0; i < o; i++)
    i % 3 === 0 && i && (e += s[t >> 18 & 63], e += s[t >> 12 & 63], e += s[t >> 6 & 63], e += s[t & 63]), t = (t << 8) + n[i];
  return r = o % 3, r === 0 ? (e += s[t >> 18 & 63], e += s[t >> 12 & 63], e += s[t >> 6 & 63], e += s[t & 63]) : r === 2 ? (e += s[t >> 10 & 63], e += s[t >> 4 & 63], e += s[t << 2 & 63], e += s[64]) : r === 1 && (e += s[t >> 2 & 63], e += s[t << 4 & 63], e += s[64], e += s[64]), e;
}
function ey(n) {
  return Object.prototype.toString.call(n) === "[object Uint8Array]";
}
var Fd = new De("tag:yaml.org,2002:binary", {
  kind: "scalar",
  resolve: Zb,
  construct: Xb,
  predicate: ey,
  represent: Qb
}), ty = Object.prototype.hasOwnProperty, ny = Object.prototype.toString;
function iy(n) {
  if (n === null)
    return !0;
  var e = [], t, i, r, o, s, l = n;
  for (t = 0, i = l.length; t < i; t += 1) {
    if (r = l[t], s = !1, ny.call(r) !== "[object Object]")
      return !1;
    for (o in r)
      if (ty.call(r, o))
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
function ry(n) {
  return n !== null ? n : [];
}
var qd = new De("tag:yaml.org,2002:omap", {
  kind: "sequence",
  resolve: iy,
  construct: ry
}), oy = Object.prototype.toString;
function sy(n) {
  if (n === null)
    return !0;
  var e, t, i, r, o, s = n;
  for (o = new Array(s.length), e = 0, t = s.length; e < t; e += 1) {
    if (i = s[e], oy.call(i) !== "[object Object]" || (r = Object.keys(i), r.length !== 1))
      return !1;
    o[e] = [r[0], i[r[0]]];
  }
  return !0;
}
function ly(n) {
  if (n === null)
    return [];
  var e, t, i, r, o, s = n;
  for (o = new Array(s.length), e = 0, t = s.length; e < t; e += 1)
    i = s[e], r = Object.keys(i), o[e] = [r[0], i[r[0]]];
  return o;
}
var Hd = new De("tag:yaml.org,2002:pairs", {
  kind: "sequence",
  resolve: sy,
  construct: ly
}), ay = Object.prototype.hasOwnProperty;
function cy(n) {
  if (n === null)
    return !0;
  var e, t = n;
  for (e in t)
    if (ay.call(t, e) && t[e] !== null)
      return !1;
  return !0;
}
function hy(n) {
  return n !== null ? n : {};
}
var zd = new De("tag:yaml.org,2002:set", {
  kind: "mapping",
  resolve: cy,
  construct: hy
}), Ha = Rd.extend({
  implicit: [
    Nd,
    Pd
  ],
  explicit: [
    Fd,
    qd,
    Hd,
    zd
  ]
}), on = Object.prototype.hasOwnProperty, go = 1, $d = 2, Vd = 3, bo = 4, qs = 1, uy = 2, gh = 3, fy = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, dy = /[\x85\u2028\u2029]/, py = /[,\[\]\{\}]/, Ud = /^(?:!|!!|![a-z\-]+!)$/i, Wd = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
function bh(n) {
  return Object.prototype.toString.call(n);
}
function Ot(n) {
  return n === 10 || n === 13;
}
function En(n) {
  return n === 9 || n === 32;
}
function Ge(n) {
  return n === 9 || n === 32 || n === 10 || n === 13;
}
function Zn(n) {
  return n === 44 || n === 91 || n === 93 || n === 123 || n === 125;
}
function my(n) {
  var e;
  return 48 <= n && n <= 57 ? n - 48 : (e = n | 32, 97 <= e && e <= 102 ? e - 97 + 10 : -1);
}
function gy(n) {
  return n === 120 ? 2 : n === 117 ? 4 : n === 85 ? 8 : 0;
}
function by(n) {
  return 48 <= n && n <= 57 ? n - 48 : -1;
}
function yh(n) {
  return n === 48 ? "\0" : n === 97 ? "\x07" : n === 98 ? "\b" : n === 116 || n === 9 ? "	" : n === 110 ? `
` : n === 118 ? "\v" : n === 102 ? "\f" : n === 114 ? "\r" : n === 101 ? "\x1B" : n === 32 ? " " : n === 34 ? '"' : n === 47 ? "/" : n === 92 ? "\\" : n === 78 ? "\x85" : n === 95 ? "\xA0" : n === 76 ? "\u2028" : n === 80 ? "\u2029" : "";
}
function yy(n) {
  return n <= 65535 ? String.fromCharCode(n) : String.fromCharCode(
    (n - 65536 >> 10) + 55296,
    (n - 65536 & 1023) + 56320
  );
}
var jd = new Array(256), Gd = new Array(256);
for (var Wn = 0; Wn < 256; Wn++)
  jd[Wn] = yh(Wn) ? 1 : 0, Gd[Wn] = yh(Wn);
function vy(n, e) {
  this.input = n, this.filename = e.filename || null, this.schema = e.schema || Ha, this.onWarning = e.onWarning || null, this.legacy = e.legacy || !1, this.json = e.json || !1, this.listener = e.listener || null, this.implicitTypes = this.schema.compiledImplicit, this.typeMap = this.schema.compiledTypeMap, this.length = n.length, this.position = 0, this.line = 0, this.lineStart = 0, this.lineIndent = 0, this.firstTabInLine = -1, this.documents = [];
}
function Kd(n, e) {
  var t = {
    name: n.filename,
    buffer: n.input.slice(0, -1),
    position: n.position,
    line: n.line,
    column: n.position - n.lineStart
  };
  return t.snippet = _b(t), new He(e, t);
}
function F(n, e) {
  throw Kd(n, e);
}
function yo(n, e) {
  n.onWarning && n.onWarning.call(null, Kd(n, e));
}
var vh = {
  YAML: function(e, t, i) {
    var r, o, s;
    e.version !== null && F(e, "duplication of %YAML directive"), i.length !== 1 && F(e, "YAML directive accepts exactly one argument"), r = /^([0-9]+)\.([0-9]+)$/.exec(i[0]), r === null && F(e, "ill-formed argument of the YAML directive"), o = parseInt(r[1], 10), s = parseInt(r[2], 10), o !== 1 && F(e, "unacceptable YAML version of the document"), e.version = i[0], e.checkLineBreaks = s < 2, s !== 1 && s !== 2 && yo(e, "unsupported YAML version of the document");
  },
  TAG: function(e, t, i) {
    var r, o;
    i.length !== 2 && F(e, "TAG directive accepts exactly two arguments"), r = i[0], o = i[1], Ud.test(r) || F(e, "ill-formed tag handle (first argument) of the TAG directive"), on.call(e.tagMap, r) && F(e, 'there is a previously declared suffix for "' + r + '" tag handle'), Wd.test(o) || F(e, "ill-formed tag prefix (second argument) of the TAG directive");
    try {
      o = decodeURIComponent(o);
    } catch {
      F(e, "tag prefix is malformed: " + o);
    }
    e.tagMap[r] = o;
  }
};
function tn(n, e, t, i) {
  var r, o, s, l;
  if (e < t) {
    if (l = n.input.slice(e, t), i)
      for (r = 0, o = l.length; r < o; r += 1)
        s = l.charCodeAt(r), s === 9 || 32 <= s && s <= 1114111 || F(n, "expected valid JSON character");
    else
      fy.test(l) && F(n, "the stream contains non-printable characters");
    n.result += l;
  }
}
function xh(n, e, t, i) {
  var r, o, s, l;
  for (ve.isObject(t) || F(n, "cannot merge mappings; the provided source object is unacceptable"), r = Object.keys(t), s = 0, l = r.length; s < l; s += 1)
    o = r[s], on.call(e, o) || (e[o] = t[o], i[o] = !0);
}
function Xn(n, e, t, i, r, o, s, l, a) {
  var c, h;
  if (Array.isArray(r))
    for (r = Array.prototype.slice.call(r), c = 0, h = r.length; c < h; c += 1)
      Array.isArray(r[c]) && F(n, "nested arrays are not supported inside keys"), typeof r == "object" && bh(r[c]) === "[object Object]" && (r[c] = "[object Object]");
  if (typeof r == "object" && bh(r) === "[object Object]" && (r = "[object Object]"), r = String(r), e === null && (e = {}), i === "tag:yaml.org,2002:merge")
    if (Array.isArray(o))
      for (c = 0, h = o.length; c < h; c += 1)
        xh(n, e, o[c], t);
    else
      xh(n, e, o, t);
  else
    !n.json && !on.call(t, r) && on.call(e, r) && (n.line = s || n.line, n.lineStart = l || n.lineStart, n.position = a || n.position, F(n, "duplicated mapping key")), r === "__proto__" ? Object.defineProperty(e, r, {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      value: o
    }) : e[r] = o, delete t[r];
  return e;
}
function za(n) {
  var e;
  e = n.input.charCodeAt(n.position), e === 10 ? n.position++ : e === 13 ? (n.position++, n.input.charCodeAt(n.position) === 10 && n.position++) : F(n, "a line break is expected"), n.line += 1, n.lineStart = n.position, n.firstTabInLine = -1;
}
function me(n, e, t) {
  for (var i = 0, r = n.input.charCodeAt(n.position); r !== 0; ) {
    for (; En(r); )
      r === 9 && n.firstTabInLine === -1 && (n.firstTabInLine = n.position), r = n.input.charCodeAt(++n.position);
    if (e && r === 35)
      do
        r = n.input.charCodeAt(++n.position);
      while (r !== 10 && r !== 13 && r !== 0);
    if (Ot(r))
      for (za(n), r = n.input.charCodeAt(n.position), i++, n.lineIndent = 0; r === 32; )
        n.lineIndent++, r = n.input.charCodeAt(++n.position);
    else
      break;
  }
  return t !== -1 && i !== 0 && n.lineIndent < t && yo(n, "deficient indentation"), i;
}
function es(n) {
  var e = n.position, t;
  return t = n.input.charCodeAt(e), !!((t === 45 || t === 46) && t === n.input.charCodeAt(e + 1) && t === n.input.charCodeAt(e + 2) && (e += 3, t = n.input.charCodeAt(e), t === 0 || Ge(t)));
}
function $a(n, e) {
  e === 1 ? n.result += " " : e > 1 && (n.result += ve.repeat(`
`, e - 1));
}
function xy(n, e, t) {
  var i, r, o, s, l, a, c, h, u = n.kind, f = n.result, d;
  if (d = n.input.charCodeAt(n.position), Ge(d) || Zn(d) || d === 35 || d === 38 || d === 42 || d === 33 || d === 124 || d === 62 || d === 39 || d === 34 || d === 37 || d === 64 || d === 96 || (d === 63 || d === 45) && (r = n.input.charCodeAt(n.position + 1), Ge(r) || t && Zn(r)))
    return !1;
  for (n.kind = "scalar", n.result = "", o = s = n.position, l = !1; d !== 0; ) {
    if (d === 58) {
      if (r = n.input.charCodeAt(n.position + 1), Ge(r) || t && Zn(r))
        break;
    } else if (d === 35) {
      if (i = n.input.charCodeAt(n.position - 1), Ge(i))
        break;
    } else {
      if (n.position === n.lineStart && es(n) || t && Zn(d))
        break;
      if (Ot(d))
        if (a = n.line, c = n.lineStart, h = n.lineIndent, me(n, !1, -1), n.lineIndent >= e) {
          l = !0, d = n.input.charCodeAt(n.position);
          continue;
        } else {
          n.position = s, n.line = a, n.lineStart = c, n.lineIndent = h;
          break;
        }
    }
    l && (tn(n, o, s, !1), $a(n, n.line - a), o = s = n.position, l = !1), En(d) || (s = n.position + 1), d = n.input.charCodeAt(++n.position);
  }
  return tn(n, o, s, !1), n.result ? !0 : (n.kind = u, n.result = f, !1);
}
function ky(n, e) {
  var t, i, r;
  if (t = n.input.charCodeAt(n.position), t !== 39)
    return !1;
  for (n.kind = "scalar", n.result = "", n.position++, i = r = n.position; (t = n.input.charCodeAt(n.position)) !== 0; )
    if (t === 39)
      if (tn(n, i, n.position, !0), t = n.input.charCodeAt(++n.position), t === 39)
        i = n.position, n.position++, r = n.position;
      else
        return !0;
    else
      Ot(t) ? (tn(n, i, r, !0), $a(n, me(n, !1, e)), i = r = n.position) : n.position === n.lineStart && es(n) ? F(n, "unexpected end of the document within a single quoted scalar") : (n.position++, r = n.position);
  F(n, "unexpected end of the stream within a single quoted scalar");
}
function wy(n, e) {
  var t, i, r, o, s, l;
  if (l = n.input.charCodeAt(n.position), l !== 34)
    return !1;
  for (n.kind = "scalar", n.result = "", n.position++, t = i = n.position; (l = n.input.charCodeAt(n.position)) !== 0; ) {
    if (l === 34)
      return tn(n, t, n.position, !0), n.position++, !0;
    if (l === 92) {
      if (tn(n, t, n.position, !0), l = n.input.charCodeAt(++n.position), Ot(l))
        me(n, !1, e);
      else if (l < 256 && jd[l])
        n.result += Gd[l], n.position++;
      else if ((s = gy(l)) > 0) {
        for (r = s, o = 0; r > 0; r--)
          l = n.input.charCodeAt(++n.position), (s = my(l)) >= 0 ? o = (o << 4) + s : F(n, "expected hexadecimal character");
        n.result += yy(o), n.position++;
      } else
        F(n, "unknown escape sequence");
      t = i = n.position;
    } else
      Ot(l) ? (tn(n, t, i, !0), $a(n, me(n, !1, e)), t = i = n.position) : n.position === n.lineStart && es(n) ? F(n, "unexpected end of the document within a double quoted scalar") : (n.position++, i = n.position);
  }
  F(n, "unexpected end of the stream within a double quoted scalar");
}
function _y(n, e) {
  var t = !0, i, r, o, s = n.tag, l, a = n.anchor, c, h, u, f, d, p = /* @__PURE__ */ Object.create(null), m, g, b, y;
  if (y = n.input.charCodeAt(n.position), y === 91)
    h = 93, d = !1, l = [];
  else if (y === 123)
    h = 125, d = !0, l = {};
  else
    return !1;
  for (n.anchor !== null && (n.anchorMap[n.anchor] = l), y = n.input.charCodeAt(++n.position); y !== 0; ) {
    if (me(n, !0, e), y = n.input.charCodeAt(n.position), y === h)
      return n.position++, n.tag = s, n.anchor = a, n.kind = d ? "mapping" : "sequence", n.result = l, !0;
    t ? y === 44 && F(n, "expected the node content, but found ','") : F(n, "missed comma between flow collection entries"), g = m = b = null, u = f = !1, y === 63 && (c = n.input.charCodeAt(n.position + 1), Ge(c) && (u = f = !0, n.position++, me(n, !0, e))), i = n.line, r = n.lineStart, o = n.position, hi(n, e, go, !1, !0), g = n.tag, m = n.result, me(n, !0, e), y = n.input.charCodeAt(n.position), (f || n.line === i) && y === 58 && (u = !0, y = n.input.charCodeAt(++n.position), me(n, !0, e), hi(n, e, go, !1, !0), b = n.result), d ? Xn(n, l, p, g, m, b, i, r, o) : u ? l.push(Xn(n, null, p, g, m, b, i, r, o)) : l.push(m), me(n, !0, e), y = n.input.charCodeAt(n.position), y === 44 ? (t = !0, y = n.input.charCodeAt(++n.position)) : t = !1;
  }
  F(n, "unexpected end of the stream within a flow collection");
}
function Ay(n, e) {
  var t, i, r = qs, o = !1, s = !1, l = e, a = 0, c = !1, h, u;
  if (u = n.input.charCodeAt(n.position), u === 124)
    i = !1;
  else if (u === 62)
    i = !0;
  else
    return !1;
  for (n.kind = "scalar", n.result = ""; u !== 0; )
    if (u = n.input.charCodeAt(++n.position), u === 43 || u === 45)
      qs === r ? r = u === 43 ? gh : uy : F(n, "repeat of a chomping mode identifier");
    else if ((h = by(u)) >= 0)
      h === 0 ? F(n, "bad explicit indentation width of a block scalar; it cannot be less than one") : s ? F(n, "repeat of an indentation width identifier") : (l = e + h - 1, s = !0);
    else
      break;
  if (En(u)) {
    do
      u = n.input.charCodeAt(++n.position);
    while (En(u));
    if (u === 35)
      do
        u = n.input.charCodeAt(++n.position);
      while (!Ot(u) && u !== 0);
  }
  for (; u !== 0; ) {
    for (za(n), n.lineIndent = 0, u = n.input.charCodeAt(n.position); (!s || n.lineIndent < l) && u === 32; )
      n.lineIndent++, u = n.input.charCodeAt(++n.position);
    if (!s && n.lineIndent > l && (l = n.lineIndent), Ot(u)) {
      a++;
      continue;
    }
    if (n.lineIndent < l) {
      r === gh ? n.result += ve.repeat(`
`, o ? 1 + a : a) : r === qs && o && (n.result += `
`);
      break;
    }
    for (i ? En(u) ? (c = !0, n.result += ve.repeat(`
`, o ? 1 + a : a)) : c ? (c = !1, n.result += ve.repeat(`
`, a + 1)) : a === 0 ? o && (n.result += " ") : n.result += ve.repeat(`
`, a) : n.result += ve.repeat(`
`, o ? 1 + a : a), o = !0, s = !0, a = 0, t = n.position; !Ot(u) && u !== 0; )
      u = n.input.charCodeAt(++n.position);
    tn(n, t, n.position, !1);
  }
  return !0;
}
function kh(n, e) {
  var t, i = n.tag, r = n.anchor, o = [], s, l = !1, a;
  if (n.firstTabInLine !== -1)
    return !1;
  for (n.anchor !== null && (n.anchorMap[n.anchor] = o), a = n.input.charCodeAt(n.position); a !== 0 && (n.firstTabInLine !== -1 && (n.position = n.firstTabInLine, F(n, "tab characters must not be used in indentation")), !(a !== 45 || (s = n.input.charCodeAt(n.position + 1), !Ge(s)))); ) {
    if (l = !0, n.position++, me(n, !0, -1) && n.lineIndent <= e) {
      o.push(null), a = n.input.charCodeAt(n.position);
      continue;
    }
    if (t = n.line, hi(n, e, Vd, !1, !0), o.push(n.result), me(n, !0, -1), a = n.input.charCodeAt(n.position), (n.line === t || n.lineIndent > e) && a !== 0)
      F(n, "bad indentation of a sequence entry");
    else if (n.lineIndent < e)
      break;
  }
  return l ? (n.tag = i, n.anchor = r, n.kind = "sequence", n.result = o, !0) : !1;
}
function Cy(n, e, t) {
  var i, r, o, s, l, a, c = n.tag, h = n.anchor, u = {}, f = /* @__PURE__ */ Object.create(null), d = null, p = null, m = null, g = !1, b = !1, y;
  if (n.firstTabInLine !== -1)
    return !1;
  for (n.anchor !== null && (n.anchorMap[n.anchor] = u), y = n.input.charCodeAt(n.position); y !== 0; ) {
    if (!g && n.firstTabInLine !== -1 && (n.position = n.firstTabInLine, F(n, "tab characters must not be used in indentation")), i = n.input.charCodeAt(n.position + 1), o = n.line, (y === 63 || y === 58) && Ge(i))
      y === 63 ? (g && (Xn(n, u, f, d, p, null, s, l, a), d = p = m = null), b = !0, g = !0, r = !0) : g ? (g = !1, r = !0) : F(n, "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"), n.position += 1, y = i;
    else {
      if (s = n.line, l = n.lineStart, a = n.position, !hi(n, t, $d, !1, !0))
        break;
      if (n.line === o) {
        for (y = n.input.charCodeAt(n.position); En(y); )
          y = n.input.charCodeAt(++n.position);
        if (y === 58)
          y = n.input.charCodeAt(++n.position), Ge(y) || F(n, "a whitespace character is expected after the key-value separator within a block mapping"), g && (Xn(n, u, f, d, p, null, s, l, a), d = p = m = null), b = !0, g = !1, r = !1, d = n.tag, p = n.result;
        else if (b)
          F(n, "can not read an implicit mapping pair; a colon is missed");
        else
          return n.tag = c, n.anchor = h, !0;
      } else if (b)
        F(n, "can not read a block mapping entry; a multiline key may not be an implicit key");
      else
        return n.tag = c, n.anchor = h, !0;
    }
    if ((n.line === o || n.lineIndent > e) && (g && (s = n.line, l = n.lineStart, a = n.position), hi(n, e, bo, !0, r) && (g ? p = n.result : m = n.result), g || (Xn(n, u, f, d, p, m, s, l, a), d = p = m = null), me(n, !0, -1), y = n.input.charCodeAt(n.position)), (n.line === o || n.lineIndent > e) && y !== 0)
      F(n, "bad indentation of a mapping entry");
    else if (n.lineIndent < e)
      break;
  }
  return g && Xn(n, u, f, d, p, null, s, l, a), b && (n.tag = c, n.anchor = h, n.kind = "mapping", n.result = u), b;
}
function Sy(n) {
  var e, t = !1, i = !1, r, o, s;
  if (s = n.input.charCodeAt(n.position), s !== 33)
    return !1;
  if (n.tag !== null && F(n, "duplication of a tag property"), s = n.input.charCodeAt(++n.position), s === 60 ? (t = !0, s = n.input.charCodeAt(++n.position)) : s === 33 ? (i = !0, r = "!!", s = n.input.charCodeAt(++n.position)) : r = "!", e = n.position, t) {
    do
      s = n.input.charCodeAt(++n.position);
    while (s !== 0 && s !== 62);
    n.position < n.length ? (o = n.input.slice(e, n.position), s = n.input.charCodeAt(++n.position)) : F(n, "unexpected end of the stream within a verbatim tag");
  } else {
    for (; s !== 0 && !Ge(s); )
      s === 33 && (i ? F(n, "tag suffix cannot contain exclamation marks") : (r = n.input.slice(e - 1, n.position + 1), Ud.test(r) || F(n, "named tag handle cannot contain such characters"), i = !0, e = n.position + 1)), s = n.input.charCodeAt(++n.position);
    o = n.input.slice(e, n.position), py.test(o) && F(n, "tag suffix cannot contain flow indicator characters");
  }
  o && !Wd.test(o) && F(n, "tag name cannot contain such characters: " + o);
  try {
    o = decodeURIComponent(o);
  } catch {
    F(n, "tag name is malformed: " + o);
  }
  return t ? n.tag = o : on.call(n.tagMap, r) ? n.tag = n.tagMap[r] + o : r === "!" ? n.tag = "!" + o : r === "!!" ? n.tag = "tag:yaml.org,2002:" + o : F(n, 'undeclared tag handle "' + r + '"'), !0;
}
function Ty(n) {
  var e, t;
  if (t = n.input.charCodeAt(n.position), t !== 38)
    return !1;
  for (n.anchor !== null && F(n, "duplication of an anchor property"), t = n.input.charCodeAt(++n.position), e = n.position; t !== 0 && !Ge(t) && !Zn(t); )
    t = n.input.charCodeAt(++n.position);
  return n.position === e && F(n, "name of an anchor node must contain at least one character"), n.anchor = n.input.slice(e, n.position), !0;
}
function Ey(n) {
  var e, t, i;
  if (i = n.input.charCodeAt(n.position), i !== 42)
    return !1;
  for (i = n.input.charCodeAt(++n.position), e = n.position; i !== 0 && !Ge(i) && !Zn(i); )
    i = n.input.charCodeAt(++n.position);
  return n.position === e && F(n, "name of an alias node must contain at least one character"), t = n.input.slice(e, n.position), on.call(n.anchorMap, t) || F(n, 'unidentified alias "' + t + '"'), n.result = n.anchorMap[t], me(n, !0, -1), !0;
}
function hi(n, e, t, i, r) {
  var o, s, l, a = 1, c = !1, h = !1, u, f, d, p, m, g;
  if (n.listener !== null && n.listener("open", n), n.tag = null, n.anchor = null, n.kind = null, n.result = null, o = s = l = bo === t || Vd === t, i && me(n, !0, -1) && (c = !0, n.lineIndent > e ? a = 1 : n.lineIndent === e ? a = 0 : n.lineIndent < e && (a = -1)), a === 1)
    for (; Sy(n) || Ty(n); )
      me(n, !0, -1) ? (c = !0, l = o, n.lineIndent > e ? a = 1 : n.lineIndent === e ? a = 0 : n.lineIndent < e && (a = -1)) : l = !1;
  if (l && (l = c || r), (a === 1 || bo === t) && (go === t || $d === t ? m = e : m = e + 1, g = n.position - n.lineStart, a === 1 ? l && (kh(n, g) || Cy(n, g, m)) || _y(n, m) ? h = !0 : (s && Ay(n, m) || ky(n, m) || wy(n, m) ? h = !0 : Ey(n) ? (h = !0, (n.tag !== null || n.anchor !== null) && F(n, "alias node should not have any properties")) : xy(n, m, go === t) && (h = !0, n.tag === null && (n.tag = "?")), n.anchor !== null && (n.anchorMap[n.anchor] = n.result)) : a === 0 && (h = l && kh(n, g))), n.tag === null)
    n.anchor !== null && (n.anchorMap[n.anchor] = n.result);
  else if (n.tag === "?") {
    for (n.result !== null && n.kind !== "scalar" && F(n, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + n.kind + '"'), u = 0, f = n.implicitTypes.length; u < f; u += 1)
      if (p = n.implicitTypes[u], p.resolve(n.result)) {
        n.result = p.construct(n.result), n.tag = p.tag, n.anchor !== null && (n.anchorMap[n.anchor] = n.result);
        break;
      }
  } else if (n.tag !== "!") {
    if (on.call(n.typeMap[n.kind || "fallback"], n.tag))
      p = n.typeMap[n.kind || "fallback"][n.tag];
    else
      for (p = null, d = n.typeMap.multi[n.kind || "fallback"], u = 0, f = d.length; u < f; u += 1)
        if (n.tag.slice(0, d[u].tag.length) === d[u].tag) {
          p = d[u];
          break;
        }
    p || F(n, "unknown tag !<" + n.tag + ">"), n.result !== null && p.kind !== n.kind && F(n, "unacceptable node kind for !<" + n.tag + '> tag; it should be "' + p.kind + '", not "' + n.kind + '"'), p.resolve(n.result, n.tag) ? (n.result = p.construct(n.result, n.tag), n.anchor !== null && (n.anchorMap[n.anchor] = n.result)) : F(n, "cannot resolve a node with !<" + n.tag + "> explicit tag");
  }
  return n.listener !== null && n.listener("close", n), n.tag !== null || n.anchor !== null || h;
}
function Dy(n) {
  var e = n.position, t, i, r, o = !1, s;
  for (n.version = null, n.checkLineBreaks = n.legacy, n.tagMap = /* @__PURE__ */ Object.create(null), n.anchorMap = /* @__PURE__ */ Object.create(null); (s = n.input.charCodeAt(n.position)) !== 0 && (me(n, !0, -1), s = n.input.charCodeAt(n.position), !(n.lineIndent > 0 || s !== 37)); ) {
    for (o = !0, s = n.input.charCodeAt(++n.position), t = n.position; s !== 0 && !Ge(s); )
      s = n.input.charCodeAt(++n.position);
    for (i = n.input.slice(t, n.position), r = [], i.length < 1 && F(n, "directive name must not be less than one character in length"); s !== 0; ) {
      for (; En(s); )
        s = n.input.charCodeAt(++n.position);
      if (s === 35) {
        do
          s = n.input.charCodeAt(++n.position);
        while (s !== 0 && !Ot(s));
        break;
      }
      if (Ot(s))
        break;
      for (t = n.position; s !== 0 && !Ge(s); )
        s = n.input.charCodeAt(++n.position);
      r.push(n.input.slice(t, n.position));
    }
    s !== 0 && za(n), on.call(vh, i) ? vh[i](n, i, r) : yo(n, 'unknown document directive "' + i + '"');
  }
  if (me(n, !0, -1), n.lineIndent === 0 && n.input.charCodeAt(n.position) === 45 && n.input.charCodeAt(n.position + 1) === 45 && n.input.charCodeAt(n.position + 2) === 45 ? (n.position += 3, me(n, !0, -1)) : o && F(n, "directives end mark is expected"), hi(n, n.lineIndent - 1, bo, !1, !0), me(n, !0, -1), n.checkLineBreaks && dy.test(n.input.slice(e, n.position)) && yo(n, "non-ASCII line breaks are interpreted as content"), n.documents.push(n.result), n.position === n.lineStart && es(n)) {
    n.input.charCodeAt(n.position) === 46 && (n.position += 3, me(n, !0, -1));
    return;
  }
  if (n.position < n.length - 1)
    F(n, "end of the stream or a document separator is expected");
  else
    return;
}
function Yd(n, e) {
  n = String(n), e = e || {}, n.length !== 0 && (n.charCodeAt(n.length - 1) !== 10 && n.charCodeAt(n.length - 1) !== 13 && (n += `
`), n.charCodeAt(0) === 65279 && (n = n.slice(1)));
  var t = new vy(n, e), i = n.indexOf("\0");
  for (i !== -1 && (t.position = i, F(t, "null byte is not allowed in input")), t.input += "\0"; t.input.charCodeAt(t.position) === 32; )
    t.lineIndent += 1, t.position += 1;
  for (; t.position < t.length - 1; )
    Dy(t);
  return t.documents;
}
function My(n, e, t) {
  e !== null && typeof e == "object" && typeof t > "u" && (t = e, e = null);
  var i = Yd(n, t);
  if (typeof e != "function")
    return i;
  for (var r = 0, o = i.length; r < o; r += 1)
    e(i[r]);
}
function Oy(n, e) {
  var t = Yd(n, e);
  if (t.length !== 0) {
    if (t.length === 1)
      return t[0];
    throw new He("expected a single document in the stream, but found more");
  }
}
var Ly = My, Ry = Oy, Jd = {
  loadAll: Ly,
  load: Ry
}, Zd = Object.prototype.toString, Xd = Object.prototype.hasOwnProperty, Va = 65279, Iy = 9, ji = 10, By = 13, Ny = 32, Py = 33, Fy = 34, Il = 35, qy = 37, Hy = 38, zy = 39, $y = 42, Qd = 44, Vy = 45, vo = 58, Uy = 61, Wy = 62, jy = 63, Gy = 64, ep = 91, tp = 93, Ky = 96, np = 123, Yy = 124, ip = 125, Ne = {};
Ne[0] = "\\0";
Ne[7] = "\\a";
Ne[8] = "\\b";
Ne[9] = "\\t";
Ne[10] = "\\n";
Ne[11] = "\\v";
Ne[12] = "\\f";
Ne[13] = "\\r";
Ne[27] = "\\e";
Ne[34] = '\\"';
Ne[92] = "\\\\";
Ne[133] = "\\N";
Ne[160] = "\\_";
Ne[8232] = "\\L";
Ne[8233] = "\\P";
var Jy = [
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
], Zy = /^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;
function Xy(n, e) {
  var t, i, r, o, s, l, a;
  if (e === null)
    return {};
  for (t = {}, i = Object.keys(e), r = 0, o = i.length; r < o; r += 1)
    s = i[r], l = String(e[s]), s.slice(0, 2) === "!!" && (s = "tag:yaml.org,2002:" + s.slice(2)), a = n.compiledTypeMap.fallback[s], a && Xd.call(a.styleAliases, l) && (l = a.styleAliases[l]), t[s] = l;
  return t;
}
function Qy(n) {
  var e, t, i;
  if (e = n.toString(16).toUpperCase(), n <= 255)
    t = "x", i = 2;
  else if (n <= 65535)
    t = "u", i = 4;
  else if (n <= 4294967295)
    t = "U", i = 8;
  else
    throw new He("code point within a string may not be greater than 0xFFFFFFFF");
  return "\\" + t + ve.repeat("0", i - e.length) + e;
}
var ev = 1, Gi = 2;
function tv(n) {
  this.schema = n.schema || Ha, this.indent = Math.max(1, n.indent || 2), this.noArrayIndent = n.noArrayIndent || !1, this.skipInvalid = n.skipInvalid || !1, this.flowLevel = ve.isNothing(n.flowLevel) ? -1 : n.flowLevel, this.styleMap = Xy(this.schema, n.styles || null), this.sortKeys = n.sortKeys || !1, this.lineWidth = n.lineWidth || 80, this.noRefs = n.noRefs || !1, this.noCompatMode = n.noCompatMode || !1, this.condenseFlow = n.condenseFlow || !1, this.quotingType = n.quotingType === '"' ? Gi : ev, this.forceQuotes = n.forceQuotes || !1, this.replacer = typeof n.replacer == "function" ? n.replacer : null, this.implicitTypes = this.schema.compiledImplicit, this.explicitTypes = this.schema.compiledExplicit, this.tag = null, this.result = "", this.duplicates = [], this.usedDuplicates = null;
}
function wh(n, e) {
  for (var t = ve.repeat(" ", e), i = 0, r = -1, o = "", s, l = n.length; i < l; )
    r = n.indexOf(`
`, i), r === -1 ? (s = n.slice(i), i = l) : (s = n.slice(i, r + 1), i = r + 1), s.length && s !== `
` && (o += t), o += s;
  return o;
}
function Bl(n, e) {
  return `
` + ve.repeat(" ", n.indent * e);
}
function nv(n, e) {
  var t, i, r;
  for (t = 0, i = n.implicitTypes.length; t < i; t += 1)
    if (r = n.implicitTypes[t], r.resolve(e))
      return !0;
  return !1;
}
function xo(n) {
  return n === Ny || n === Iy;
}
function Ki(n) {
  return 32 <= n && n <= 126 || 161 <= n && n <= 55295 && n !== 8232 && n !== 8233 || 57344 <= n && n <= 65533 && n !== Va || 65536 <= n && n <= 1114111;
}
function _h(n) {
  return Ki(n) && n !== Va && n !== By && n !== ji;
}
function Ah(n, e, t) {
  var i = _h(n), r = i && !xo(n);
  return (t ? i : i && n !== Qd && n !== ep && n !== tp && n !== np && n !== ip) && n !== Il && !(e === vo && !r) || _h(e) && !xo(e) && n === Il || e === vo && r;
}
function iv(n) {
  return Ki(n) && n !== Va && !xo(n) && n !== Vy && n !== jy && n !== vo && n !== Qd && n !== ep && n !== tp && n !== np && n !== ip && n !== Il && n !== Hy && n !== $y && n !== Py && n !== Yy && n !== Uy && n !== Wy && n !== zy && n !== Fy && n !== qy && n !== Gy && n !== Ky;
}
function rv(n) {
  return !xo(n) && n !== vo;
}
function Li(n, e) {
  var t = n.charCodeAt(e), i;
  return t >= 55296 && t <= 56319 && e + 1 < n.length && (i = n.charCodeAt(e + 1), i >= 56320 && i <= 57343) ? (t - 55296) * 1024 + i - 56320 + 65536 : t;
}
function rp(n) {
  var e = /^\n* /;
  return e.test(n);
}
var op = 1, Nl = 2, sp = 3, lp = 4, Kn = 5;
function ov(n, e, t, i, r, o, s, l) {
  var a, c = 0, h = null, u = !1, f = !1, d = i !== -1, p = -1, m = iv(Li(n, 0)) && rv(Li(n, n.length - 1));
  if (e || s)
    for (a = 0; a < n.length; c >= 65536 ? a += 2 : a++) {
      if (c = Li(n, a), !Ki(c))
        return Kn;
      m = m && Ah(c, h, l), h = c;
    }
  else {
    for (a = 0; a < n.length; c >= 65536 ? a += 2 : a++) {
      if (c = Li(n, a), c === ji)
        u = !0, d && (f = f || a - p - 1 > i && n[p + 1] !== " ", p = a);
      else if (!Ki(c))
        return Kn;
      m = m && Ah(c, h, l), h = c;
    }
    f = f || d && a - p - 1 > i && n[p + 1] !== " ";
  }
  return !u && !f ? m && !s && !r(n) ? op : o === Gi ? Kn : Nl : t > 9 && rp(n) ? Kn : s ? o === Gi ? Kn : Nl : f ? lp : sp;
}
function sv(n, e, t, i, r) {
  n.dump = function() {
    if (e.length === 0)
      return n.quotingType === Gi ? '""' : "''";
    if (!n.noCompatMode && (Jy.indexOf(e) !== -1 || Zy.test(e)))
      return n.quotingType === Gi ? '"' + e + '"' : "'" + e + "'";
    var o = n.indent * Math.max(1, t), s = n.lineWidth === -1 ? -1 : Math.max(Math.min(n.lineWidth, 40), n.lineWidth - o), l = i || n.flowLevel > -1 && t >= n.flowLevel;
    function a(c) {
      return nv(n, c);
    }
    switch (ov(
      e,
      l,
      n.indent,
      s,
      a,
      n.quotingType,
      n.forceQuotes && !i,
      r
    )) {
      case op:
        return e;
      case Nl:
        return "'" + e.replace(/'/g, "''") + "'";
      case sp:
        return "|" + Ch(e, n.indent) + Sh(wh(e, o));
      case lp:
        return ">" + Ch(e, n.indent) + Sh(wh(lv(e, s), o));
      case Kn:
        return '"' + av(e) + '"';
      default:
        throw new He("impossible error: invalid scalar style");
    }
  }();
}
function Ch(n, e) {
  var t = rp(n) ? String(e) : "", i = n[n.length - 1] === `
`, r = i && (n[n.length - 2] === `
` || n === `
`), o = r ? "+" : i ? "" : "-";
  return t + o + `
`;
}
function Sh(n) {
  return n[n.length - 1] === `
` ? n.slice(0, -1) : n;
}
function lv(n, e) {
  for (var t = /(\n+)([^\n]*)/g, i = function() {
    var c = n.indexOf(`
`);
    return c = c !== -1 ? c : n.length, t.lastIndex = c, Th(n.slice(0, c), e);
  }(), r = n[0] === `
` || n[0] === " ", o, s; s = t.exec(n); ) {
    var l = s[1], a = s[2];
    o = a[0] === " ", i += l + (!r && !o && a !== "" ? `
` : "") + Th(a, e), r = o;
  }
  return i;
}
function Th(n, e) {
  if (n === "" || n[0] === " ")
    return n;
  for (var t = / [^ ]/g, i, r = 0, o, s = 0, l = 0, a = ""; i = t.exec(n); )
    l = i.index, l - r > e && (o = s > r ? s : l, a += `
` + n.slice(r, o), r = o + 1), s = l;
  return a += `
`, n.length - r > e && s > r ? a += n.slice(r, s) + `
` + n.slice(s + 1) : a += n.slice(r), a.slice(1);
}
function av(n) {
  for (var e = "", t = 0, i, r = 0; r < n.length; t >= 65536 ? r += 2 : r++)
    t = Li(n, r), i = Ne[t], !i && Ki(t) ? (e += n[r], t >= 65536 && (e += n[r + 1])) : e += i || Qy(t);
  return e;
}
function cv(n, e, t) {
  var i = "", r = n.tag, o, s, l;
  for (o = 0, s = t.length; o < s; o += 1)
    l = t[o], n.replacer && (l = n.replacer.call(t, String(o), l)), ($t(n, e, l, !1, !1) || typeof l > "u" && $t(n, e, null, !1, !1)) && (i !== "" && (i += "," + (n.condenseFlow ? "" : " ")), i += n.dump);
  n.tag = r, n.dump = "[" + i + "]";
}
function Eh(n, e, t, i) {
  var r = "", o = n.tag, s, l, a;
  for (s = 0, l = t.length; s < l; s += 1)
    a = t[s], n.replacer && (a = n.replacer.call(t, String(s), a)), ($t(n, e + 1, a, !0, !0, !1, !0) || typeof a > "u" && $t(n, e + 1, null, !0, !0, !1, !0)) && ((!i || r !== "") && (r += Bl(n, e)), n.dump && ji === n.dump.charCodeAt(0) ? r += "-" : r += "- ", r += n.dump);
  n.tag = o, n.dump = r || "[]";
}
function hv(n, e, t) {
  var i = "", r = n.tag, o = Object.keys(t), s, l, a, c, h;
  for (s = 0, l = o.length; s < l; s += 1)
    h = "", i !== "" && (h += ", "), n.condenseFlow && (h += '"'), a = o[s], c = t[a], n.replacer && (c = n.replacer.call(t, a, c)), $t(n, e, a, !1, !1) && (n.dump.length > 1024 && (h += "? "), h += n.dump + (n.condenseFlow ? '"' : "") + ":" + (n.condenseFlow ? "" : " "), $t(n, e, c, !1, !1) && (h += n.dump, i += h));
  n.tag = r, n.dump = "{" + i + "}";
}
function uv(n, e, t, i) {
  var r = "", o = n.tag, s = Object.keys(t), l, a, c, h, u, f;
  if (n.sortKeys === !0)
    s.sort();
  else if (typeof n.sortKeys == "function")
    s.sort(n.sortKeys);
  else if (n.sortKeys)
    throw new He("sortKeys must be a boolean or a function");
  for (l = 0, a = s.length; l < a; l += 1)
    f = "", (!i || r !== "") && (f += Bl(n, e)), c = s[l], h = t[c], n.replacer && (h = n.replacer.call(t, c, h)), $t(n, e + 1, c, !0, !0, !0) && (u = n.tag !== null && n.tag !== "?" || n.dump && n.dump.length > 1024, u && (n.dump && ji === n.dump.charCodeAt(0) ? f += "?" : f += "? "), f += n.dump, u && (f += Bl(n, e)), $t(n, e + 1, h, !0, u) && (n.dump && ji === n.dump.charCodeAt(0) ? f += ":" : f += ": ", f += n.dump, r += f));
  n.tag = o, n.dump = r || "{}";
}
function Dh(n, e, t) {
  var i, r, o, s, l, a;
  for (r = t ? n.explicitTypes : n.implicitTypes, o = 0, s = r.length; o < s; o += 1)
    if (l = r[o], (l.instanceOf || l.predicate) && (!l.instanceOf || typeof e == "object" && e instanceof l.instanceOf) && (!l.predicate || l.predicate(e))) {
      if (t ? l.multi && l.representName ? n.tag = l.representName(e) : n.tag = l.tag : n.tag = "?", l.represent) {
        if (a = n.styleMap[l.tag] || l.defaultStyle, Zd.call(l.represent) === "[object Function]")
          i = l.represent(e, a);
        else if (Xd.call(l.represent, a))
          i = l.represent[a](e, a);
        else
          throw new He("!<" + l.tag + '> tag resolver accepts not "' + a + '" style');
        n.dump = i;
      }
      return !0;
    }
  return !1;
}
function $t(n, e, t, i, r, o, s) {
  n.tag = null, n.dump = t, Dh(n, t, !1) || Dh(n, t, !0);
  var l = Zd.call(n.dump), a = i, c;
  i && (i = n.flowLevel < 0 || n.flowLevel > e);
  var h = l === "[object Object]" || l === "[object Array]", u, f;
  if (h && (u = n.duplicates.indexOf(t), f = u !== -1), (n.tag !== null && n.tag !== "?" || f || n.indent !== 2 && e > 0) && (r = !1), f && n.usedDuplicates[u])
    n.dump = "*ref_" + u;
  else {
    if (h && f && !n.usedDuplicates[u] && (n.usedDuplicates[u] = !0), l === "[object Object]")
      i && Object.keys(n.dump).length !== 0 ? (uv(n, e, n.dump, r), f && (n.dump = "&ref_" + u + n.dump)) : (hv(n, e, n.dump), f && (n.dump = "&ref_" + u + " " + n.dump));
    else if (l === "[object Array]")
      i && n.dump.length !== 0 ? (n.noArrayIndent && !s && e > 0 ? Eh(n, e - 1, n.dump, r) : Eh(n, e, n.dump, r), f && (n.dump = "&ref_" + u + n.dump)) : (cv(n, e, n.dump), f && (n.dump = "&ref_" + u + " " + n.dump));
    else if (l === "[object String]")
      n.tag !== "?" && sv(n, n.dump, e, o, a);
    else {
      if (l === "[object Undefined]")
        return !1;
      if (n.skipInvalid)
        return !1;
      throw new He("unacceptable kind of an object to dump " + l);
    }
    n.tag !== null && n.tag !== "?" && (c = encodeURI(
      n.tag[0] === "!" ? n.tag.slice(1) : n.tag
    ).replace(/!/g, "%21"), n.tag[0] === "!" ? c = "!" + c : c.slice(0, 18) === "tag:yaml.org,2002:" ? c = "!!" + c.slice(18) : c = "!<" + c + ">", n.dump = c + " " + n.dump);
  }
  return !0;
}
function fv(n, e) {
  var t = [], i = [], r, o;
  for (Pl(n, t, i), r = 0, o = i.length; r < o; r += 1)
    e.duplicates.push(t[i[r]]);
  e.usedDuplicates = new Array(o);
}
function Pl(n, e, t) {
  var i, r, o;
  if (n !== null && typeof n == "object")
    if (r = e.indexOf(n), r !== -1)
      t.indexOf(r) === -1 && t.push(r);
    else if (e.push(n), Array.isArray(n))
      for (r = 0, o = n.length; r < o; r += 1)
        Pl(n[r], e, t);
    else
      for (i = Object.keys(n), r = 0, o = i.length; r < o; r += 1)
        Pl(n[i[r]], e, t);
}
function dv(n, e) {
  e = e || {};
  var t = new tv(e);
  t.noRefs || fv(n, t);
  var i = n;
  return t.replacer && (i = t.replacer.call({ "": i }, "", i)), $t(t, 0, i, !0, !0) ? t.dump + `
` : "";
}
var pv = dv, mv = {
  dump: pv
};
function Ua(n, e) {
  return function() {
    throw new Error("Function yaml." + n + " is removed in js-yaml 4. Use yaml." + e + " instead, which is now safe by default.");
  };
}
var gv = De, bv = _d, yv = Td, vv = Ld, xv = Rd, kv = Ha, wv = Jd.load, _v = Jd.loadAll, Av = mv.dump, Cv = He, Sv = {
  binary: Fd,
  float: Od,
  map: Sd,
  null: Ed,
  pairs: Hd,
  set: zd,
  timestamp: Nd,
  bool: Dd,
  int: Md,
  merge: Pd,
  omap: qd,
  seq: Cd,
  str: Ad
}, Tv = Ua("safeLoad", "load"), Ev = Ua("safeLoadAll", "loadAll"), Dv = Ua("safeDump", "dump"), Mv = {
  Type: gv,
  Schema: bv,
  FAILSAFE_SCHEMA: yv,
  JSON_SCHEMA: vv,
  CORE_SCHEMA: xv,
  DEFAULT_SCHEMA: kv,
  load: wv,
  loadAll: _v,
  dump: Av,
  YAMLException: Cv,
  types: Sv,
  safeLoad: Tv,
  safeLoadAll: Ev,
  safeDump: Dv
};
function Ov(n, e, t, i, r, o = !0) {
  const s = [];
  for (const a of [...n.core.ruler.__rules__].reverse()) {
    if (a.name === e) {
      o || s.push(a.name);
      break;
    }
    a.name && s.push(a.name);
  }
  n.core.ruler.disable(s);
  let l = [];
  try {
    l = n.parse(t, i);
  } finally {
    n.core.ruler.enable(s);
  }
  for (const a of l)
    a.map = a.map !== null ? [a.map[0] + r, a.map[1] + r] : a.map;
  return l;
}
class Nn {
  constructor(e) {
    this.required_arguments = 0, this.optional_arguments = 0, this.final_argument_whitespace = !1, this.has_content = !1, this.option_spec = {}, this.rawOptions = !1, this.state = e;
  }
  run(e) {
    return [];
  }
  assert(e, t) {
    if (!e)
      throw new Error(t);
  }
  assert_has_content(e) {
    if (!e.body)
      throw new Error("Content block expected, but none found.");
  }
  createToken(e, t, i, r) {
    const o = new this.state.Token(e, t, i);
    return (r == null ? void 0 : r.content) !== void 0 && (o.content = r.content), (r == null ? void 0 : r.level) !== void 0 && (o.level = r.level), (r == null ? void 0 : r.map) !== void 0 && (o.map = r.map), (r == null ? void 0 : r.block) !== void 0 && (o.block = r.block), (r == null ? void 0 : r.info) !== void 0 && (o.info = r.info), (r == null ? void 0 : r.meta) !== void 0 && (o.meta = r.meta), (r == null ? void 0 : r.children) !== void 0 && (o.children = r.children), o;
  }
  nestedParse(e, t) {
    return Ov(this.state.md, "run_directives", e, this.state.env, t, !0);
  }
}
class Xt extends Error {
  constructor() {
    super(...arguments), this.name = "DirectiveParsingError";
  }
}
function Lv(n, e) {
  const t = n.meta.arg || "", i = n.content;
  let r = i.trim() ? i.split(/\r?\n/) : [], o = 0, s = {};
  (Object.keys(e.option_spec || {}) || e.rawOptions) && ([r, s, o] = ap(r, e));
  let l = [];
  if (!e.required_arguments && !e.optional_arguments ? t && (o = 0, r = [t].concat(r)) : l = Rv(t, e), r.length && !r[0].trim() && (r.shift(), o++), r.length && !e.has_content)
    throw new Xt("Has content but content not allowed");
  return {
    map: n.map ? n.map : [0, 0],
    args: l,
    options: s,
    body: r.join(`
`),
    bodyMap: n.map ? [
      r.length > 0 ? n.map[0] + o : n.map[1],
      r.length > 0 ? n.map[1] - 1 : n.map[1]
    ] : [0, 0]
  };
}
function ap(n, e) {
  let t = 1, i = {}, r = null;
  if (n.length && n[0].startsWith("---")) {
    t++;
    const o = [];
    r = [];
    let s = !1;
    for (const l of n.slice(1)) {
      if (l.startsWith("---")) {
        t++, s = !0;
        continue;
      }
      s ? o.push(l) : (t++, r.push(l));
    }
    n = o;
  } else if (n.length && n[0].startsWith(":")) {
    const o = [];
    r = [];
    let s = !1;
    for (const l of n) {
      if (!s && !l.startsWith(":")) {
        s = !0, o.push(l);
        continue;
      }
      s ? o.push(l) : (t++, r.push(l.slice(1)));
    }
    n = o;
  }
  if (r !== null)
    try {
      const o = Mv.load(r.join(`
`));
      if (o !== null && typeof o == "object")
        i = o;
      else
        throw new Xt(`not dict: ${o}`);
    } catch (o) {
      throw new Xt(`Invalid options YAML: ${o}`);
    }
  if (e.rawOptions)
    return [n, i, t];
  for (const [o, s] of Object.entries(i)) {
    const l = e.option_spec ? e.option_spec[o] : null;
    if (!l)
      throw new Xt(`Unknown option: ${o}`);
    let a = s;
    (s === null || s === !1) && (a = "");
    try {
      a = l(`${a || ""}`);
    } catch (c) {
      throw new Xt(`Invalid option value: (option: '${o}'; value: ${s})
${c}`);
    }
    i[o] = a;
  }
  return [n, i, t];
}
function Rv(n, e) {
  var t;
  let i = n.trim() ? (t = n.trim()) === null || t === void 0 ? void 0 : t.split(/\s+/) : [];
  const r = (e.required_arguments || 0) + (e.optional_arguments || 0);
  if (i.length < (e.required_arguments || 0))
    throw new Xt(`${e.required_arguments} argument(s) required, ${i.length} supplied`);
  if (i.length > r)
    if (e.final_argument_whitespace) {
      const o = n.split(/\s+/);
      i = o.splice(0, r - 1), i.push(o.join(" "));
    } else
      throw new Xt(`maximum ${r} argument(s) allowed, ${i.length} supplied`);
  return i;
}
function Iv(n, e) {
  var t;
  let i = e.directivesAfter || "block";
  (!((t = e.replaceFences) !== null && t !== void 0) || t) && (n.core.ruler.after(i, "fence_to_directive", Bv), i = "fence_to_directive"), n.core.ruler.after(i, "run_directives", Nv(e.directives || {})), n.renderer.rules.directive = (r, o) => {
    const s = r[o];
    return `<aside class="directive-unhandled">
<header><mark>${s.info}</mark><code> ${s.meta.arg}</code></header>
<pre>${s.content}</pre></aside>
`;
  }, n.renderer.rules.directive_error = (r, o) => {
    const s = r[o];
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
function Bv(n) {
  for (const e of n.tokens)
    if (e.type === "fence" || e.type === "colon_fence") {
      const t = e.info.match(/^\{([^\s}]+)\}\s*(.*)$/);
      t && (e.type = "directive", e.info = t[1], e.meta = { arg: t[2] });
    }
  return !0;
}
function Nv(n) {
  function e(t) {
    const i = [];
    for (const r of t.tokens)
      if (r.type === "directive" && r.info in n)
        try {
          const o = new n[r.info](t), s = Lv(r, o), [l, a] = ap(r.content.trim() ? r.content.split(/\r?\n/) : [], o), c = new t.Token("parsed_directive_open", "", 1);
          c.info = r.info, c.hidden = !0, c.content = l.join(`
`).trim(), c.meta = {
            arg: r.meta.arg,
            opts: a
          };
          const h = [c];
          h.push(...o.run(s));
          const u = new t.Token("parsed_directive_close", "", -1);
          u.hidden = !0, h.push(u), h[1].meta = Object.assign(Object.assign({ directive: !0 }, s.options), h[1].meta), i.push(...h);
        } catch (o) {
          const s = new t.Token("directive_error", "", 0);
          s.content = r.content, s.info = r.info, s.meta = r.meta, s.map = r.map, s.meta.error_message = o.message, s.meta.error_name = o.name, i.push(s);
        }
      else
        i.push(r);
    return t.tokens = i, !0;
  }
  return e;
}
function Pv(n) {
  return n.toLowerCase().split(/\s+/).join("-").replace(/[^a-z0-9]+/, "-").replace(/^[-0-9]+|-+$/, "");
}
class On extends Error {
  constructor() {
    super(...arguments), this.name = "OptionSpecError";
  }
}
const sn = (n) => n, Fl = (n) => {
  if (!n)
    throw new On("Argument required but none supplied");
  return n;
}, ql = (n) => {
  if (n.trim())
    throw new On(`No argument is allowed: "${n}" supplied`);
  return null;
}, gi = (n) => `${n || ""}`.split(/\s+/).map((e) => Pv(e));
function cp(n) {
  if (!n)
    throw new On("Value is not set");
  const e = Number.parseFloat(n);
  if (Number.isNaN(e) || !Number.isInteger(e))
    throw new On(`Value "${n}" is not an integer`);
  return e;
}
function ko(n) {
  const e = cp(n);
  if (e < 0)
    throw new On(`Value "${n}" must be positive or zero`);
  return e;
}
const hp = (n) => n ? ko(n) : null, Fv = (n) => (n = `${n || ""}`.replace(/\s+%$/, ""), ko(n));
function up(n, e) {
  const i = new RegExp(`^(?<number>[0-9.]+)\\s*(?<units>${e.join("|")})$`).exec(n);
  if (!i || !i.groups)
    throw new On(`not a positive measure of one of the following units: ${e.join("|")}`);
  return i.groups.number + i.groups.units;
}
const fp = ["em", "ex", "px", "in", "cm", "mm", "pt", "pc"], dp = (n) => up(n, [...fp, ""]), Wa = (n, e = "") => {
  try {
    return up(n, [...fp, "%"]);
  } catch {
    return dp(n) + e;
  }
}, qv = (n, e = "") => n.toLowerCase() === "image" ? "image" : Wa(n, e);
function ja(n) {
  return (e) => {
    if (e = e.toLowerCase().trim(), n.includes(e))
      return e;
    throw new On(`must be in: ${n.join("|")}`);
  };
}
const Hv = (n) => n;
class mt extends Nn {
  constructor() {
    super(...arguments), this.final_argument_whitespace = !0, this.has_content = !0, this.option_spec = {
      class: gi,
      name: sn
    }, this.title = "", this.kind = "";
  }
  run(e) {
    var t;
    const i = [], r = this.createToken("admonition_open", "aside", 1, {
      map: e.map,
      block: !0,
      meta: { kind: this.kind }
    });
    ((t = e.options.class) === null || t === void 0 ? void 0 : t.length) >= 1 ? (r.attrSet("class", e.options.class.join(" ")), r.attrJoin("class", "admonition")) : r.attrSet("class", "admonition"), this.kind && r.attrJoin("class", this.kind), i.push(r);
    const o = this.createToken("admonition_title_open", "header", 1);
    o.attrSet("class", "admonition-title"), i.push(o);
    const s = e.args[0] || this.title;
    i.push(this.createToken("inline", "", 0, {
      map: [e.map[0], e.map[0]],
      content: s,
      children: []
    })), i.push(this.createToken("admonition_title_close", "header", -1, { block: !0 }));
    const l = this.nestedParse(e.body, e.bodyMap[0]);
    return i.push(...l), i.push(this.createToken("admonition_close", "aside", -1, { block: !0 })), i;
  }
}
class zv extends mt {
  constructor() {
    super(...arguments), this.required_arguments = 1;
  }
}
class $v extends mt {
  constructor() {
    super(...arguments), this.title = "Attention", this.kind = "attention";
  }
}
class Vv extends mt {
  constructor() {
    super(...arguments), this.title = "Caution", this.kind = "caution";
  }
}
class Uv extends mt {
  constructor() {
    super(...arguments), this.title = "Danger", this.kind = "danger";
  }
}
class Wv extends mt {
  constructor() {
    super(...arguments), this.title = "Error", this.kind = "error";
  }
}
class jv extends mt {
  constructor() {
    super(...arguments), this.title = "Important", this.kind = "important";
  }
}
class Gv extends mt {
  constructor() {
    super(...arguments), this.title = "Hint", this.kind = "hint";
  }
}
class Kv extends mt {
  constructor() {
    super(...arguments), this.title = "Note", this.kind = "note";
  }
}
class Yv extends mt {
  constructor() {
    super(...arguments), this.title = "See Also", this.kind = "seealso";
  }
}
class Jv extends mt {
  constructor() {
    super(...arguments), this.title = "Tip", this.kind = "tip";
  }
}
class Zv extends mt {
  constructor() {
    super(...arguments), this.title = "Warning", this.kind = "warning";
  }
}
const Xv = {
  admonition: zv,
  attention: $v,
  caution: Vv,
  danger: Uv,
  error: Wv,
  important: jv,
  hint: Gv,
  note: Kv,
  seealso: Yv,
  tip: Jv,
  warning: Zv
};
class Qv extends Nn {
  constructor() {
    super(...arguments), this.required_arguments = 0, this.optional_arguments = 1, this.final_argument_whitespace = !1, this.has_content = !0, this.option_spec = {
      "number-lines": hp,
      force: ql,
      name: sn,
      class: gi
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
class ex extends Nn {
  constructor() {
    super(...arguments), this.required_arguments = 0, this.optional_arguments = 1, this.final_argument_whitespace = !1, this.has_content = !0, this.option_spec = {
      linenos: ql,
      "lineno-start": cp,
      dedent: hp,
      "emphasize-lines": Fl,
      caption: Fl,
      force: ql,
      name: sn,
      class: gi
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
class tx extends Nn {
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
const nx = {
  code: Qv,
  "code-block": ex,
  "code-cell": tx
}, pp = {
  alt: sn,
  height: dp,
  width: Wa,
  scale: Fv,
  target: Fl,
  class: gi,
  name: sn
};
class mp extends Nn {
  constructor() {
    super(...arguments), this.required_arguments = 1, this.optional_arguments = 0, this.final_argument_whitespace = !0, this.option_spec = Object.assign(Object.assign({}, pp), { align: ja(["left", "center", "right", "top", "middle", "bottom"]) });
  }
  create_image(e) {
    const t = Hv(e.args[0] || ""), i = this.createToken("image", "img", 0, { map: e.map, block: !0 });
    i.attrSet("src", t), i.attrSet("alt", e.options.alt || "");
    const r = [];
    return e.options.alt && this.state.md.inline.parse(e.options.alt, this.state.md, this.state.env, r), i.children = r, e.options.height && i.attrSet("height", e.options.height), e.options.width && i.attrSet("width", e.options.width), e.options.align && i.attrJoin("class", `align-${e.options.align}`), e.options.class && i.attrJoin("class", e.options.class.join(" ")), i;
  }
  run(e) {
    return [this.create_image(e)];
  }
}
class ix extends mp {
  constructor() {
    super(...arguments), this.option_spec = Object.assign(Object.assign({}, pp), { align: ja(["left", "center", "right"]), figwidth: qv, figclass: gi }), this.has_content = !0;
  }
  run(e) {
    const t = this.createToken("figure_open", "figure", 1, {
      map: e.map,
      block: !0
    });
    e.options.figclass && t.attrJoin("class", e.options.figclass.join(" ")), e.options.align && t.attrJoin("class", `align-${e.options.align}`), e.options.figwidth && e.options.figwidth !== "image" && t.attrSet("width", e.options.figwidth);
    let i;
    e.options.name && (i = vd(
      this.state,
      t,
      Ui.figure,
      e.options.name,
      e.body.trim()
    ), t.attrJoin("class", "numbered"));
    const r = this.create_image(e);
    r.map = [e.map[0], e.map[0]];
    let o = [], s = [];
    if (e.body) {
      const [a, ...c] = e.body.split(`

`), h = c.join(`

`), u = e.bodyMap[0], f = this.createToken("figure_caption_open", "figcaption", 1, {
        block: !0
      });
      i && f.attrSet("number", `${i.number}`);
      const d = this.nestedParse(a, u), p = this.createToken("figure_caption_close", "figcaption", -1, {
        block: !0
      });
      if (o = [f, ...d, p], h) {
        const m = u + a.split(`
`).length + 1, g = this.createToken("figure_legend_open", "", 1, {
          block: !0
        }), b = this.nestedParse(h, m), y = this.createToken("figure_legend_close", "", -1, {
          block: !0
        });
        s = [g, ...b, y];
      }
    }
    const l = this.createToken("figure_close", "figure", -1, { block: !0 });
    return [t, r, ...o, ...s, l];
  }
}
const rx = {
  image: mp,
  figure: ix
};
class Ga {
  constructor(e, t = !0) {
    if (this.children = [], this.children = [], t) {
      this._set_children_from_tokens(e);
      return;
    }
    if (e.length === 0)
      throw new Error("Tree creation: Can only create root from empty token sequence.");
    if (e.length === 1) {
      const i = e[0];
      if (i.nesting)
        throw new Error("Unequal nesting level at the start and end of token stream.");
      this.token = i, i.children !== null && i.children.length > 0 && this._set_children_from_tokens(i.children);
    } else
      this.nester_tokens = { opening: e[0], closing: e[e.length - 1] }, this._set_children_from_tokens(e.slice(1, -1));
  }
  _set_children_from_tokens(e) {
    const t = [...e].reverse();
    let i;
    for (; t.length > 0 && (i = t.pop(), !!i); ) {
      if (!i.nesting) {
        this._add_child([i]);
        continue;
      }
      if (i.nesting !== 1)
        throw new Error("Invalid token nesting");
      const r = [i];
      let o = 1;
      for (; t.length > 0 && o !== 0; )
        i = t.pop(), i && (r.push(i), o += i.nesting);
      if (o)
        throw new Error(`unclosed tokens starting: ${r[0]}`);
      this._add_child(r);
    }
  }
  _add_child(e) {
    const t = new Ga(e, !1);
    t.parent = this, this.children.push(t);
  }
  to_tokens() {
    function e(i, r) {
      if (i.type === "root")
        for (const o of i.children)
          e(o, r);
      else if (i.token)
        r.push(i.token);
      else {
        if (!i.nester_tokens)
          throw new Error("No nested token available");
        r.push(i.nester_tokens.opening);
        for (const o of i.children)
          e(o, r);
        r.push(i.nester_tokens.closing);
      }
    }
    const t = [];
    return e(this, t), t;
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
    for (const t of this.children)
      yield* t.walk(!0);
  }
  get type() {
    var e, t, i;
    if (this.is_root)
      return "root";
    if (this.token)
      return this.token.type;
    if (!((e = this.nester_tokens) === null || e === void 0) && e.opening.type.endsWith("_open"))
      return (t = this.nester_tokens) === null || t === void 0 ? void 0 : t.opening.type.slice(0, -5);
    if (this.nester_tokens)
      return (i = this.nester_tokens) === null || i === void 0 ? void 0 : i.opening.type;
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
class ox extends Nn {
  constructor() {
    super(...arguments), this.required_arguments = 0, this.optional_arguments = 1, this.final_argument_whitespace = !0, this.has_content = !0, this.option_spec = {
      "header-rows": ko,
      "stub-columns": ko,
      width: Wa,
      widths: sn,
      class: gi,
      name: sn,
      align: ja(["left", "center", "right"])
    };
  }
  run(e) {
    this.assert_has_content(e);
    const t = e.options["header-rows"] || 0, i = this.nestedParse(e.body, e.bodyMap[0]);
    if (i.length < 2 || i[0].type !== "bullet_list_open" || i[i.length - 1].type !== "bullet_list_close")
      throw new Xt("Content is not a single bullet list");
    const r = [], o = this.createToken("table_open", "table", 1, { map: e.bodyMap });
    e.options.align && o.attrJoin("class", `align-${e.options.align}`), e.options.class && o.attrJoin("class", e.options.class.join(" ")), r.push(o), e.args.length && e.args[0] && (r.push(this.createToken("table_caption_open", "caption", 1)), r.push(this.createToken("inline", "", 0, {
      map: [e.map[0], e.map[0]],
      content: e.args[0],
      children: []
    })), r.push(this.createToken("table_caption_close", "caption", -1)));
    let s = "th";
    t ? (r.push(this.createToken("thead_open", "thead", 1, { level: 1 })), s = "th") : (r.push(this.createToken("tbody_open", "tbody", 1, { level: 1 })), s = "td");
    let l, a = 0;
    for (const c of new Ga(i.slice(1, -1)).children) {
      a += 1, this.assert(c.type === "list_item", `list item ${a} not of type 'list_item': ${c.type}`), this.assert(c.children.length === 1 && c.children[0].type === "bullet_list", `list item ${a} content not a nested bullet list`);
      const h = c.children[0].children;
      l === void 0 ? l = h.length : this.assert(h.length === l, `list item ${a} does not contain the same number of columns as previous items`), t && a === t + 1 && (r.push(this.createToken("thead_close", "thead", -1, { level: 1 })), r.push(this.createToken("tbody_open", "tbody", 1, { level: 1 })), s = "td"), r.push(this.createToken("tr_open", "tr", 1, { map: c.map, level: 2 }));
      for (const u of h)
        r.push(this.createToken(`${s}_open`, s, 1, { map: u.map, level: 3 })), r.push(...u.to_tokens().slice(1, -1)), r.push(this.createToken(`${s}_close`, s, -1, { level: 3 }));
      r.push(this.createToken("tr_close", "tr", -1, { level: 2 }));
    }
    if (t && a < t)
      throw new Error(`Insufficient rows (${a}) for required header rows (${t})`);
    return s === "td" ? r.push(this.createToken("tbody_close", "tbody", -1, { level: 1 })) : r.push(this.createToken("thead_close", "thead", -1, { level: 1 })), r.push(this.createToken("table_close", "table", -1)), r;
  }
}
const sx = {
  "list-table": ox
};
class lx extends Nn {
  constructor() {
    super(...arguments), this.required_arguments = 0, this.optional_arguments = 0, this.final_argument_whitespace = !1, this.has_content = !0, this.option_spec = {
      label: sn
    };
  }
  run(e) {
    this.assert_has_content(e);
    const t = this.createToken("math_block", "div", 0, {
      content: e.body,
      map: e.bodyMap,
      block: !0
    });
    if (t.attrSet("class", "math block"), e.options.label) {
      t.attrSet("id", e.options.label);
      const i = vd(this.state, t, Ui.equation, e.options.label, "");
      t.attrSet("number", `${i.number}`), t.info = e.options.label, t.meta = { label: e.options.label, numbered: !0, number: i.number };
    }
    return [t];
  }
}
const ax = {
  math: lx
}, cx = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Xv), rx), nx), sx), ax);
function hx(n) {
  return (e) => {
    const t = Qo(e);
    return t.references.forEach((i) => {
      const { label: r, tokens: o, contentFromTarget: s } = i, l = (c, h) => (o.open.attrJoin("class", "error"), o.open.tag = o.close.tag = "code", s && h ? o.content.content = s(h) : o.content.content = c, !0), a = t.targets[r];
      if (!a)
        return l(r, {
          kind: i.kind || "",
          label: r,
          title: r,
          number: `"${r}"`
        });
      if (i.kind && a.kind !== i.kind)
        return l(`Reference "${r}" does not match kind "${i.kind}"`);
      o.open.attrSet("href", `#${a.label}`), a.title && o.open.attrSet("title", a.title), s && (o.content.content = s(a).trim());
    }), !0;
  };
}
function ux(n, e) {
  n.core.ruler.push("docutils_number", hx());
}
const fx = {
  parseRoles: !0,
  replaceFences: !0,
  rolesAfter: "inline",
  directivesAfter: "block",
  directives: cx,
  roles: hb
};
function dx(n, e) {
  const t = Object.assign(Object.assign({}, fx), e);
  n.use(X0, t), n.use(Iv, t), n.use(ux, t);
}
/*! @license DOMPurify 2.4.7 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.4.7/LICENSE */
function Yt(n) {
  return Yt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Yt(n);
}
function Hl(n, e) {
  return Hl = Object.setPrototypeOf || function(i, r) {
    return i.__proto__ = r, i;
  }, Hl(n, e);
}
function px() {
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
function Qr(n, e, t) {
  return px() ? Qr = Reflect.construct : Qr = function(r, o, s) {
    var l = [null];
    l.push.apply(l, o);
    var a = Function.bind.apply(r, l), c = new a();
    return s && Hl(c, s.prototype), c;
  }, Qr.apply(null, arguments);
}
function dt(n) {
  return mx(n) || gx(n) || bx(n) || yx();
}
function mx(n) {
  if (Array.isArray(n))
    return zl(n);
}
function gx(n) {
  if (typeof Symbol < "u" && n[Symbol.iterator] != null || n["@@iterator"] != null)
    return Array.from(n);
}
function bx(n, e) {
  if (!!n) {
    if (typeof n == "string")
      return zl(n, e);
    var t = Object.prototype.toString.call(n).slice(8, -1);
    if (t === "Object" && n.constructor && (t = n.constructor.name), t === "Map" || t === "Set")
      return Array.from(n);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return zl(n, e);
  }
}
function zl(n, e) {
  (e == null || e > n.length) && (e = n.length);
  for (var t = 0, i = new Array(e); t < e; t++)
    i[t] = n[t];
  return i;
}
function yx() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var vx = Object.hasOwnProperty, Mh = Object.setPrototypeOf, xx = Object.isFrozen, kx = Object.getPrototypeOf, wx = Object.getOwnPropertyDescriptor, Ue = Object.freeze, pt = Object.seal, _x = Object.create, gp = typeof Reflect < "u" && Reflect, wo = gp.apply, $l = gp.construct;
wo || (wo = function(e, t, i) {
  return e.apply(t, i);
});
Ue || (Ue = function(e) {
  return e;
});
pt || (pt = function(e) {
  return e;
});
$l || ($l = function(e, t) {
  return Qr(e, dt(t));
});
var Ax = st(Array.prototype.forEach), Oh = st(Array.prototype.pop), Si = st(Array.prototype.push), eo = st(String.prototype.toLowerCase), Hs = st(String.prototype.toString), Cx = st(String.prototype.match), ft = st(String.prototype.replace), Sx = st(String.prototype.indexOf), Tx = st(String.prototype.trim), Fe = st(RegExp.prototype.test), zs = Ex(TypeError);
function st(n) {
  return function(e) {
    for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
      i[r - 1] = arguments[r];
    return wo(n, e, i);
  };
}
function Ex(n) {
  return function() {
    for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
      t[i] = arguments[i];
    return $l(n, t);
  };
}
function V(n, e, t) {
  var i;
  t = (i = t) !== null && i !== void 0 ? i : eo, Mh && Mh(n, null);
  for (var r = e.length; r--; ) {
    var o = e[r];
    if (typeof o == "string") {
      var s = t(o);
      s !== o && (xx(e) || (e[r] = s), o = s);
    }
    n[o] = !0;
  }
  return n;
}
function yn(n) {
  var e = _x(null), t;
  for (t in n)
    wo(vx, n, [t]) === !0 && (e[t] = n[t]);
  return e;
}
function _r(n, e) {
  for (; n !== null; ) {
    var t = wx(n, e);
    if (t) {
      if (t.get)
        return st(t.get);
      if (typeof t.value == "function")
        return st(t.value);
    }
    n = kx(n);
  }
  function i(r) {
    return console.warn("fallback value for", r), null;
  }
  return i;
}
var Lh = Ue(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), $s = Ue(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Vs = Ue(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Dx = Ue(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Us = Ue(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]), Mx = Ue(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Rh = Ue(["#text"]), Ih = Ue(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]), Ws = Ue(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Bh = Ue(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Ar = Ue(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Ox = pt(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Lx = pt(/<%[\w\W]*|[\w\W]*%>/gm), Rx = pt(/\${[\w\W]*}/gm), Ix = pt(/^data-[\-\w.\u00B7-\uFFFF]/), Bx = pt(/^aria-[\-\w]+$/), Nx = pt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
), Px = pt(/^(?:\w+script|data):/i), Fx = pt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
), qx = pt(/^html$/i), Hx = function() {
  return typeof window > "u" ? null : window;
}, zx = function(e, t) {
  if (Yt(e) !== "object" || typeof e.createPolicy != "function")
    return null;
  var i = null, r = "data-tt-policy-suffix";
  t.currentScript && t.currentScript.hasAttribute(r) && (i = t.currentScript.getAttribute(r));
  var o = "dompurify" + (i ? "#" + i : "");
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
function bp() {
  var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Hx(), e = function(v) {
    return bp(v);
  };
  if (e.version = "2.4.7", e.removed = [], !n || !n.document || n.document.nodeType !== 9)
    return e.isSupported = !1, e;
  var t = n.document, i = n.document, r = n.DocumentFragment, o = n.HTMLTemplateElement, s = n.Node, l = n.Element, a = n.NodeFilter, c = n.NamedNodeMap, h = c === void 0 ? n.NamedNodeMap || n.MozNamedAttrMap : c, u = n.HTMLFormElement, f = n.DOMParser, d = n.trustedTypes, p = l.prototype, m = _r(p, "cloneNode"), g = _r(p, "nextSibling"), b = _r(p, "childNodes"), y = _r(p, "parentNode");
  if (typeof o == "function") {
    var w = i.createElement("template");
    w.content && w.content.ownerDocument && (i = w.content.ownerDocument);
  }
  var x = zx(d, t), _ = x ? x.createHTML("") : "", k = i, C = k.implementation, N = k.createNodeIterator, L = k.createDocumentFragment, D = k.getElementsByTagName, H = t.importNode, Q = {};
  try {
    Q = yn(i).documentMode ? i.documentMode : {};
  } catch {
  }
  var G = {};
  e.isSupported = typeof y == "function" && C && C.createHTMLDocument !== void 0 && Q !== 9;
  var T = Ox, z = Lx, q = Rx, he = Ix, be = Bx, oe = Px, ce = Fx, ut = Nx, ne = null, mn = V({}, [].concat(dt(Lh), dt($s), dt(Vs), dt(Us), dt(Rh))), ue = null, Rc = V({}, [].concat(dt(Ih), dt(Ws), dt(Bh), dt(Ar))), fe = Object.seal(Object.create(null, {
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
  })), _i = null, As = null, Ic = !0, Cs = !0, Bc = !1, Nc = !0, qn = !1, gn = !1, Ss = !1, Ts = !1, Hn = !1, br = !1, yr = !1, Pc = !0, Fc = !1, E0 = "user-content-", Es = !0, Ai = !1, zn = {}, $n = null, qc = V({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), Hc = null, zc = V({}, ["audio", "video", "img", "source", "image", "track"]), Ds = null, $c = V({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), vr = "http://www.w3.org/1998/Math/MathML", xr = "http://www.w3.org/2000/svg", Ft = "http://www.w3.org/1999/xhtml", Vn = Ft, Ms = !1, Os = null, D0 = V({}, [vr, xr, Ft], Hs), bn, M0 = ["application/xhtml+xml", "text/html"], O0 = "text/html", we, Un = null, L0 = i.createElement("form"), Vc = function(v) {
    return v instanceof RegExp || v instanceof Function;
  }, Ls = function(v) {
    Un && Un === v || ((!v || Yt(v) !== "object") && (v = {}), v = yn(v), bn = M0.indexOf(v.PARSER_MEDIA_TYPE) === -1 ? bn = O0 : bn = v.PARSER_MEDIA_TYPE, we = bn === "application/xhtml+xml" ? Hs : eo, ne = "ALLOWED_TAGS" in v ? V({}, v.ALLOWED_TAGS, we) : mn, ue = "ALLOWED_ATTR" in v ? V({}, v.ALLOWED_ATTR, we) : Rc, Os = "ALLOWED_NAMESPACES" in v ? V({}, v.ALLOWED_NAMESPACES, Hs) : D0, Ds = "ADD_URI_SAFE_ATTR" in v ? V(
      yn($c),
      v.ADD_URI_SAFE_ATTR,
      we
    ) : $c, Hc = "ADD_DATA_URI_TAGS" in v ? V(
      yn(zc),
      v.ADD_DATA_URI_TAGS,
      we
    ) : zc, $n = "FORBID_CONTENTS" in v ? V({}, v.FORBID_CONTENTS, we) : qc, _i = "FORBID_TAGS" in v ? V({}, v.FORBID_TAGS, we) : {}, As = "FORBID_ATTR" in v ? V({}, v.FORBID_ATTR, we) : {}, zn = "USE_PROFILES" in v ? v.USE_PROFILES : !1, Ic = v.ALLOW_ARIA_ATTR !== !1, Cs = v.ALLOW_DATA_ATTR !== !1, Bc = v.ALLOW_UNKNOWN_PROTOCOLS || !1, Nc = v.ALLOW_SELF_CLOSE_IN_ATTR !== !1, qn = v.SAFE_FOR_TEMPLATES || !1, gn = v.WHOLE_DOCUMENT || !1, Hn = v.RETURN_DOM || !1, br = v.RETURN_DOM_FRAGMENT || !1, yr = v.RETURN_TRUSTED_TYPE || !1, Ts = v.FORCE_BODY || !1, Pc = v.SANITIZE_DOM !== !1, Fc = v.SANITIZE_NAMED_PROPS || !1, Es = v.KEEP_CONTENT !== !1, Ai = v.IN_PLACE || !1, ut = v.ALLOWED_URI_REGEXP || ut, Vn = v.NAMESPACE || Ft, fe = v.CUSTOM_ELEMENT_HANDLING || {}, v.CUSTOM_ELEMENT_HANDLING && Vc(v.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (fe.tagNameCheck = v.CUSTOM_ELEMENT_HANDLING.tagNameCheck), v.CUSTOM_ELEMENT_HANDLING && Vc(v.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (fe.attributeNameCheck = v.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), v.CUSTOM_ELEMENT_HANDLING && typeof v.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (fe.allowCustomizedBuiltInElements = v.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), qn && (Cs = !1), br && (Hn = !0), zn && (ne = V({}, dt(Rh)), ue = [], zn.html === !0 && (V(ne, Lh), V(ue, Ih)), zn.svg === !0 && (V(ne, $s), V(ue, Ws), V(ue, Ar)), zn.svgFilters === !0 && (V(ne, Vs), V(ue, Ws), V(ue, Ar)), zn.mathMl === !0 && (V(ne, Us), V(ue, Bh), V(ue, Ar))), v.ADD_TAGS && (ne === mn && (ne = yn(ne)), V(ne, v.ADD_TAGS, we)), v.ADD_ATTR && (ue === Rc && (ue = yn(ue)), V(ue, v.ADD_ATTR, we)), v.ADD_URI_SAFE_ATTR && V(Ds, v.ADD_URI_SAFE_ATTR, we), v.FORBID_CONTENTS && ($n === qc && ($n = yn($n)), V($n, v.FORBID_CONTENTS, we)), Es && (ne["#text"] = !0), gn && V(ne, ["html", "head", "body"]), ne.table && (V(ne, ["tbody"]), delete _i.tbody), Ue && Ue(v), Un = v);
  }, Uc = V({}, ["mi", "mo", "mn", "ms", "mtext"]), Wc = V({}, ["foreignobject", "desc", "title", "annotation-xml"]), R0 = V({}, ["title", "style", "font", "a", "script"]), kr = V({}, $s);
  V(kr, Vs), V(kr, Dx);
  var Rs = V({}, Us);
  V(Rs, Mx);
  var I0 = function(v) {
    var S = y(v);
    (!S || !S.tagName) && (S = {
      namespaceURI: Vn,
      tagName: "template"
    });
    var M = eo(v.tagName), Y = eo(S.tagName);
    return Os[v.namespaceURI] ? v.namespaceURI === xr ? S.namespaceURI === Ft ? M === "svg" : S.namespaceURI === vr ? M === "svg" && (Y === "annotation-xml" || Uc[Y]) : Boolean(kr[M]) : v.namespaceURI === vr ? S.namespaceURI === Ft ? M === "math" : S.namespaceURI === xr ? M === "math" && Wc[Y] : Boolean(Rs[M]) : v.namespaceURI === Ft ? S.namespaceURI === xr && !Wc[Y] || S.namespaceURI === vr && !Uc[Y] ? !1 : !Rs[M] && (R0[M] || !kr[M]) : !!(bn === "application/xhtml+xml" && Os[v.namespaceURI]) : !1;
  }, qt = function(v) {
    Si(e.removed, {
      element: v
    });
    try {
      v.parentNode.removeChild(v);
    } catch {
      try {
        v.outerHTML = _;
      } catch {
        v.remove();
      }
    }
  }, Is = function(v, S) {
    try {
      Si(e.removed, {
        attribute: S.getAttributeNode(v),
        from: S
      });
    } catch {
      Si(e.removed, {
        attribute: null,
        from: S
      });
    }
    if (S.removeAttribute(v), v === "is" && !ue[v])
      if (Hn || br)
        try {
          qt(S);
        } catch {
        }
      else
        try {
          S.setAttribute(v, "");
        } catch {
        }
  }, jc = function(v) {
    var S, M;
    if (Ts)
      v = "<remove></remove>" + v;
    else {
      var Y = Cx(v, /^[\r\n\t ]+/);
      M = Y && Y[0];
    }
    bn === "application/xhtml+xml" && Vn === Ft && (v = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + v + "</body></html>");
    var We = x ? x.createHTML(v) : v;
    if (Vn === Ft)
      try {
        S = new f().parseFromString(We, bn);
      } catch {
      }
    if (!S || !S.documentElement) {
      S = C.createDocument(Vn, "template", null);
      try {
        S.documentElement.innerHTML = Ms ? _ : We;
      } catch {
      }
    }
    var Oe = S.body || S.documentElement;
    return v && M && Oe.insertBefore(i.createTextNode(M), Oe.childNodes[0] || null), Vn === Ft ? D.call(S, gn ? "html" : "body")[0] : gn ? S.documentElement : Oe;
  }, Gc = function(v) {
    return N.call(
      v.ownerDocument || v,
      v,
      a.SHOW_ELEMENT | a.SHOW_COMMENT | a.SHOW_TEXT,
      null,
      !1
    );
  }, B0 = function(v) {
    return v instanceof u && (typeof v.nodeName != "string" || typeof v.textContent != "string" || typeof v.removeChild != "function" || !(v.attributes instanceof h) || typeof v.removeAttribute != "function" || typeof v.setAttribute != "function" || typeof v.namespaceURI != "string" || typeof v.insertBefore != "function" || typeof v.hasChildNodes != "function");
  }, Ci = function(v) {
    return Yt(s) === "object" ? v instanceof s : v && Yt(v) === "object" && typeof v.nodeType == "number" && typeof v.nodeName == "string";
  }, Ht = function(v, S, M) {
    !G[v] || Ax(G[v], function(Y) {
      Y.call(e, S, M, Un);
    });
  }, Kc = function(v) {
    var S;
    if (Ht("beforeSanitizeElements", v, null), B0(v) || Fe(/[\u0080-\uFFFF]/, v.nodeName))
      return qt(v), !0;
    var M = we(v.nodeName);
    if (Ht("uponSanitizeElement", v, {
      tagName: M,
      allowedTags: ne
    }), v.hasChildNodes() && !Ci(v.firstElementChild) && (!Ci(v.content) || !Ci(v.content.firstElementChild)) && Fe(/<[/\w]/g, v.innerHTML) && Fe(/<[/\w]/g, v.textContent) || M === "select" && Fe(/<template/i, v.innerHTML))
      return qt(v), !0;
    if (!ne[M] || _i[M]) {
      if (!_i[M] && Jc(M) && (fe.tagNameCheck instanceof RegExp && Fe(fe.tagNameCheck, M) || fe.tagNameCheck instanceof Function && fe.tagNameCheck(M)))
        return !1;
      if (Es && !$n[M]) {
        var Y = y(v) || v.parentNode, We = b(v) || v.childNodes;
        if (We && Y)
          for (var Oe = We.length, Ae = Oe - 1; Ae >= 0; --Ae)
            Y.insertBefore(m(We[Ae], !0), g(v));
      }
      return qt(v), !0;
    }
    return v instanceof l && !I0(v) || (M === "noscript" || M === "noembed" || M === "noframes") && Fe(/<\/no(script|embed|frames)/i, v.innerHTML) ? (qt(v), !0) : (qn && v.nodeType === 3 && (S = v.textContent, S = ft(S, T, " "), S = ft(S, z, " "), S = ft(S, q, " "), v.textContent !== S && (Si(e.removed, {
      element: v.cloneNode()
    }), v.textContent = S)), Ht("afterSanitizeElements", v, null), !1);
  }, Yc = function(v, S, M) {
    if (Pc && (S === "id" || S === "name") && (M in i || M in L0))
      return !1;
    if (!(Cs && !As[S] && Fe(he, S))) {
      if (!(Ic && Fe(be, S))) {
        if (!ue[S] || As[S]) {
          if (!(Jc(v) && (fe.tagNameCheck instanceof RegExp && Fe(fe.tagNameCheck, v) || fe.tagNameCheck instanceof Function && fe.tagNameCheck(v)) && (fe.attributeNameCheck instanceof RegExp && Fe(fe.attributeNameCheck, S) || fe.attributeNameCheck instanceof Function && fe.attributeNameCheck(S)) || S === "is" && fe.allowCustomizedBuiltInElements && (fe.tagNameCheck instanceof RegExp && Fe(fe.tagNameCheck, M) || fe.tagNameCheck instanceof Function && fe.tagNameCheck(M))))
            return !1;
        } else if (!Ds[S]) {
          if (!Fe(ut, ft(M, ce, ""))) {
            if (!((S === "src" || S === "xlink:href" || S === "href") && v !== "script" && Sx(M, "data:") === 0 && Hc[v])) {
              if (!(Bc && !Fe(oe, ft(M, ce, "")))) {
                if (M)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, Jc = function(v) {
    return v.indexOf("-") > 0;
  }, Zc = function(v) {
    var S, M, Y, We;
    Ht("beforeSanitizeAttributes", v, null);
    var Oe = v.attributes;
    if (!!Oe) {
      var Ae = {
        attrName: "",
        attrValue: "",
        keepAttr: !0,
        allowedAttributes: ue
      };
      for (We = Oe.length; We--; ) {
        S = Oe[We];
        var wr = S, _e = wr.name, Bs = wr.namespaceURI;
        if (M = _e === "value" ? S.value : Tx(S.value), Y = we(_e), Ae.attrName = Y, Ae.attrValue = M, Ae.keepAttr = !0, Ae.forceKeepAttr = void 0, Ht("uponSanitizeAttribute", v, Ae), M = Ae.attrValue, !Ae.forceKeepAttr && (Is(_e, v), !!Ae.keepAttr)) {
          if (!Nc && Fe(/\/>/i, M)) {
            Is(_e, v);
            continue;
          }
          qn && (M = ft(M, T, " "), M = ft(M, z, " "), M = ft(M, q, " "));
          var Xc = we(v.nodeName);
          if (!!Yc(Xc, Y, M)) {
            if (Fc && (Y === "id" || Y === "name") && (Is(_e, v), M = E0 + M), x && Yt(d) === "object" && typeof d.getAttributeType == "function" && !Bs)
              switch (d.getAttributeType(Xc, Y)) {
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
              Bs ? v.setAttributeNS(Bs, _e, M) : v.setAttribute(_e, M), Oh(e.removed);
            } catch {
            }
          }
        }
      }
      Ht("afterSanitizeAttributes", v, null);
    }
  }, N0 = function P(v) {
    var S, M = Gc(v);
    for (Ht("beforeSanitizeShadowDOM", v, null); S = M.nextNode(); )
      Ht("uponSanitizeShadowNode", S, null), !Kc(S) && (S.content instanceof r && P(S.content), Zc(S));
    Ht("afterSanitizeShadowDOM", v, null);
  };
  return e.sanitize = function(P) {
    var v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, S, M, Y, We, Oe;
    if (Ms = !P, Ms && (P = "<!-->"), typeof P != "string" && !Ci(P))
      if (typeof P.toString == "function") {
        if (P = P.toString(), typeof P != "string")
          throw zs("dirty is not a string, aborting");
      } else
        throw zs("toString is not a function");
    if (!e.isSupported) {
      if (Yt(n.toStaticHTML) === "object" || typeof n.toStaticHTML == "function") {
        if (typeof P == "string")
          return n.toStaticHTML(P);
        if (Ci(P))
          return n.toStaticHTML(P.outerHTML);
      }
      return P;
    }
    if (Ss || Ls(v), e.removed = [], typeof P == "string" && (Ai = !1), Ai) {
      if (P.nodeName) {
        var Ae = we(P.nodeName);
        if (!ne[Ae] || _i[Ae])
          throw zs("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (P instanceof s)
      S = jc("<!---->"), M = S.ownerDocument.importNode(P, !0), M.nodeType === 1 && M.nodeName === "BODY" || M.nodeName === "HTML" ? S = M : S.appendChild(M);
    else {
      if (!Hn && !qn && !gn && P.indexOf("<") === -1)
        return x && yr ? x.createHTML(P) : P;
      if (S = jc(P), !S)
        return Hn ? null : yr ? _ : "";
    }
    S && Ts && qt(S.firstChild);
    for (var wr = Gc(Ai ? P : S); Y = wr.nextNode(); )
      Y.nodeType === 3 && Y === We || Kc(Y) || (Y.content instanceof r && N0(Y.content), Zc(Y), We = Y);
    if (We = null, Ai)
      return P;
    if (Hn) {
      if (br)
        for (Oe = L.call(S.ownerDocument); S.firstChild; )
          Oe.appendChild(S.firstChild);
      else
        Oe = S;
      return (ue.shadowroot || ue.shadowrootmod) && (Oe = H.call(t, Oe, !0)), Oe;
    }
    var _e = gn ? S.outerHTML : S.innerHTML;
    return gn && ne["!doctype"] && S.ownerDocument && S.ownerDocument.doctype && S.ownerDocument.doctype.name && Fe(qx, S.ownerDocument.doctype.name) && (_e = "<!DOCTYPE " + S.ownerDocument.doctype.name + `>
` + _e), qn && (_e = ft(_e, T, " "), _e = ft(_e, z, " "), _e = ft(_e, q, " ")), x && yr ? x.createHTML(_e) : _e;
  }, e.setConfig = function(P) {
    Ls(P), Ss = !0;
  }, e.clearConfig = function() {
    Un = null, Ss = !1;
  }, e.isValidAttribute = function(P, v, S) {
    Un || Ls({});
    var M = we(P), Y = we(v);
    return Yc(M, Y, S);
  }, e.addHook = function(P, v) {
    typeof v == "function" && (G[P] = G[P] || [], Si(G[P], v));
  }, e.removeHook = function(P) {
    if (G[P])
      return Oh(G[P]);
  }, e.removeHooks = function(P) {
    G[P] && (G[P] = []);
  }, e.removeAllHooks = function() {
    G = {};
  }, e;
}
var $x = bp();
function Vx(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
function Ux(n) {
  var e = n.default;
  if (typeof e == "function") {
    var t = function() {
      return e.apply(this, arguments);
    };
    t.prototype = e.prototype;
  } else
    t = {};
  return Object.defineProperty(t, "__esModule", { value: !0 }), Object.keys(n).forEach(function(i) {
    var r = Object.getOwnPropertyDescriptor(n, i);
    Object.defineProperty(t, i, r.get ? r : {
      enumerable: !0,
      get: function() {
        return n[i];
      }
    });
  }), t;
}
var yp = { exports: {} }, Z = {}, Ka = { exports: {} };
const Wx = "\xC1", jx = "\xE1", Gx = "\u0102", Kx = "\u0103", Yx = "\u223E", Jx = "\u223F", Zx = "\u223E\u0333", Xx = "\xC2", Qx = "\xE2", e1 = "\xB4", t1 = "\u0410", n1 = "\u0430", i1 = "\xC6", r1 = "\xE6", o1 = "\u2061", s1 = "\u{1D504}", l1 = "\u{1D51E}", a1 = "\xC0", c1 = "\xE0", h1 = "\u2135", u1 = "\u2135", f1 = "\u0391", d1 = "\u03B1", p1 = "\u0100", m1 = "\u0101", g1 = "\u2A3F", b1 = "&", y1 = "&", v1 = "\u2A55", x1 = "\u2A53", k1 = "\u2227", w1 = "\u2A5C", _1 = "\u2A58", A1 = "\u2A5A", C1 = "\u2220", S1 = "\u29A4", T1 = "\u2220", E1 = "\u29A8", D1 = "\u29A9", M1 = "\u29AA", O1 = "\u29AB", L1 = "\u29AC", R1 = "\u29AD", I1 = "\u29AE", B1 = "\u29AF", N1 = "\u2221", P1 = "\u221F", F1 = "\u22BE", q1 = "\u299D", H1 = "\u2222", z1 = "\xC5", $1 = "\u237C", V1 = "\u0104", U1 = "\u0105", W1 = "\u{1D538}", j1 = "\u{1D552}", G1 = "\u2A6F", K1 = "\u2248", Y1 = "\u2A70", J1 = "\u224A", Z1 = "\u224B", X1 = "'", Q1 = "\u2061", ek = "\u2248", tk = "\u224A", nk = "\xC5", ik = "\xE5", rk = "\u{1D49C}", ok = "\u{1D4B6}", sk = "\u2254", lk = "*", ak = "\u2248", ck = "\u224D", hk = "\xC3", uk = "\xE3", fk = "\xC4", dk = "\xE4", pk = "\u2233", mk = "\u2A11", gk = "\u224C", bk = "\u03F6", yk = "\u2035", vk = "\u223D", xk = "\u22CD", kk = "\u2216", wk = "\u2AE7", _k = "\u22BD", Ak = "\u2305", Ck = "\u2306", Sk = "\u2305", Tk = "\u23B5", Ek = "\u23B6", Dk = "\u224C", Mk = "\u0411", Ok = "\u0431", Lk = "\u201E", Rk = "\u2235", Ik = "\u2235", Bk = "\u2235", Nk = "\u29B0", Pk = "\u03F6", Fk = "\u212C", qk = "\u212C", Hk = "\u0392", zk = "\u03B2", $k = "\u2136", Vk = "\u226C", Uk = "\u{1D505}", Wk = "\u{1D51F}", jk = "\u22C2", Gk = "\u25EF", Kk = "\u22C3", Yk = "\u2A00", Jk = "\u2A01", Zk = "\u2A02", Xk = "\u2A06", Qk = "\u2605", ew = "\u25BD", tw = "\u25B3", nw = "\u2A04", iw = "\u22C1", rw = "\u22C0", ow = "\u290D", sw = "\u29EB", lw = "\u25AA", aw = "\u25B4", cw = "\u25BE", hw = "\u25C2", uw = "\u25B8", fw = "\u2423", dw = "\u2592", pw = "\u2591", mw = "\u2593", gw = "\u2588", bw = "=\u20E5", yw = "\u2261\u20E5", vw = "\u2AED", xw = "\u2310", kw = "\u{1D539}", ww = "\u{1D553}", _w = "\u22A5", Aw = "\u22A5", Cw = "\u22C8", Sw = "\u29C9", Tw = "\u2510", Ew = "\u2555", Dw = "\u2556", Mw = "\u2557", Ow = "\u250C", Lw = "\u2552", Rw = "\u2553", Iw = "\u2554", Bw = "\u2500", Nw = "\u2550", Pw = "\u252C", Fw = "\u2564", qw = "\u2565", Hw = "\u2566", zw = "\u2534", $w = "\u2567", Vw = "\u2568", Uw = "\u2569", Ww = "\u229F", jw = "\u229E", Gw = "\u22A0", Kw = "\u2518", Yw = "\u255B", Jw = "\u255C", Zw = "\u255D", Xw = "\u2514", Qw = "\u2558", e_ = "\u2559", t_ = "\u255A", n_ = "\u2502", i_ = "\u2551", r_ = "\u253C", o_ = "\u256A", s_ = "\u256B", l_ = "\u256C", a_ = "\u2524", c_ = "\u2561", h_ = "\u2562", u_ = "\u2563", f_ = "\u251C", d_ = "\u255E", p_ = "\u255F", m_ = "\u2560", g_ = "\u2035", b_ = "\u02D8", y_ = "\u02D8", v_ = "\xA6", x_ = "\u{1D4B7}", k_ = "\u212C", w_ = "\u204F", __ = "\u223D", A_ = "\u22CD", C_ = "\u29C5", S_ = "\\", T_ = "\u27C8", E_ = "\u2022", D_ = "\u2022", M_ = "\u224E", O_ = "\u2AAE", L_ = "\u224F", R_ = "\u224E", I_ = "\u224F", B_ = "\u0106", N_ = "\u0107", P_ = "\u2A44", F_ = "\u2A49", q_ = "\u2A4B", H_ = "\u2229", z_ = "\u22D2", $_ = "\u2A47", V_ = "\u2A40", U_ = "\u2145", W_ = "\u2229\uFE00", j_ = "\u2041", G_ = "\u02C7", K_ = "\u212D", Y_ = "\u2A4D", J_ = "\u010C", Z_ = "\u010D", X_ = "\xC7", Q_ = "\xE7", eA = "\u0108", tA = "\u0109", nA = "\u2230", iA = "\u2A4C", rA = "\u2A50", oA = "\u010A", sA = "\u010B", lA = "\xB8", aA = "\xB8", cA = "\u29B2", hA = "\xA2", uA = "\xB7", fA = "\xB7", dA = "\u{1D520}", pA = "\u212D", mA = "\u0427", gA = "\u0447", bA = "\u2713", yA = "\u2713", vA = "\u03A7", xA = "\u03C7", kA = "\u02C6", wA = "\u2257", _A = "\u21BA", AA = "\u21BB", CA = "\u229B", SA = "\u229A", TA = "\u229D", EA = "\u2299", DA = "\xAE", MA = "\u24C8", OA = "\u2296", LA = "\u2295", RA = "\u2297", IA = "\u25CB", BA = "\u29C3", NA = "\u2257", PA = "\u2A10", FA = "\u2AEF", qA = "\u29C2", HA = "\u2232", zA = "\u201D", $A = "\u2019", VA = "\u2663", UA = "\u2663", WA = ":", jA = "\u2237", GA = "\u2A74", KA = "\u2254", YA = "\u2254", JA = ",", ZA = "@", XA = "\u2201", QA = "\u2218", eC = "\u2201", tC = "\u2102", nC = "\u2245", iC = "\u2A6D", rC = "\u2261", oC = "\u222E", sC = "\u222F", lC = "\u222E", aC = "\u{1D554}", cC = "\u2102", hC = "\u2210", uC = "\u2210", fC = "\xA9", dC = "\xA9", pC = "\u2117", mC = "\u2233", gC = "\u21B5", bC = "\u2717", yC = "\u2A2F", vC = "\u{1D49E}", xC = "\u{1D4B8}", kC = "\u2ACF", wC = "\u2AD1", _C = "\u2AD0", AC = "\u2AD2", CC = "\u22EF", SC = "\u2938", TC = "\u2935", EC = "\u22DE", DC = "\u22DF", MC = "\u21B6", OC = "\u293D", LC = "\u2A48", RC = "\u2A46", IC = "\u224D", BC = "\u222A", NC = "\u22D3", PC = "\u2A4A", FC = "\u228D", qC = "\u2A45", HC = "\u222A\uFE00", zC = "\u21B7", $C = "\u293C", VC = "\u22DE", UC = "\u22DF", WC = "\u22CE", jC = "\u22CF", GC = "\xA4", KC = "\u21B6", YC = "\u21B7", JC = "\u22CE", ZC = "\u22CF", XC = "\u2232", QC = "\u2231", eS = "\u232D", tS = "\u2020", nS = "\u2021", iS = "\u2138", rS = "\u2193", oS = "\u21A1", sS = "\u21D3", lS = "\u2010", aS = "\u2AE4", cS = "\u22A3", hS = "\u290F", uS = "\u02DD", fS = "\u010E", dS = "\u010F", pS = "\u0414", mS = "\u0434", gS = "\u2021", bS = "\u21CA", yS = "\u2145", vS = "\u2146", xS = "\u2911", kS = "\u2A77", wS = "\xB0", _S = "\u2207", AS = "\u0394", CS = "\u03B4", SS = "\u29B1", TS = "\u297F", ES = "\u{1D507}", DS = "\u{1D521}", MS = "\u2965", OS = "\u21C3", LS = "\u21C2", RS = "\xB4", IS = "\u02D9", BS = "\u02DD", NS = "`", PS = "\u02DC", FS = "\u22C4", qS = "\u22C4", HS = "\u22C4", zS = "\u2666", $S = "\u2666", VS = "\xA8", US = "\u2146", WS = "\u03DD", jS = "\u22F2", GS = "\xF7", KS = "\xF7", YS = "\u22C7", JS = "\u22C7", ZS = "\u0402", XS = "\u0452", QS = "\u231E", eT = "\u230D", tT = "$", nT = "\u{1D53B}", iT = "\u{1D555}", rT = "\xA8", oT = "\u02D9", sT = "\u20DC", lT = "\u2250", aT = "\u2251", cT = "\u2250", hT = "\u2238", uT = "\u2214", fT = "\u22A1", dT = "\u2306", pT = "\u222F", mT = "\xA8", gT = "\u21D3", bT = "\u21D0", yT = "\u21D4", vT = "\u2AE4", xT = "\u27F8", kT = "\u27FA", wT = "\u27F9", _T = "\u21D2", AT = "\u22A8", CT = "\u21D1", ST = "\u21D5", TT = "\u2225", ET = "\u2913", DT = "\u2193", MT = "\u2193", OT = "\u21D3", LT = "\u21F5", RT = "\u0311", IT = "\u21CA", BT = "\u21C3", NT = "\u21C2", PT = "\u2950", FT = "\u295E", qT = "\u2956", HT = "\u21BD", zT = "\u295F", $T = "\u2957", VT = "\u21C1", UT = "\u21A7", WT = "\u22A4", jT = "\u2910", GT = "\u231F", KT = "\u230C", YT = "\u{1D49F}", JT = "\u{1D4B9}", ZT = "\u0405", XT = "\u0455", QT = "\u29F6", eE = "\u0110", tE = "\u0111", nE = "\u22F1", iE = "\u25BF", rE = "\u25BE", oE = "\u21F5", sE = "\u296F", lE = "\u29A6", aE = "\u040F", cE = "\u045F", hE = "\u27FF", uE = "\xC9", fE = "\xE9", dE = "\u2A6E", pE = "\u011A", mE = "\u011B", gE = "\xCA", bE = "\xEA", yE = "\u2256", vE = "\u2255", xE = "\u042D", kE = "\u044D", wE = "\u2A77", _E = "\u0116", AE = "\u0117", CE = "\u2251", SE = "\u2147", TE = "\u2252", EE = "\u{1D508}", DE = "\u{1D522}", ME = "\u2A9A", OE = "\xC8", LE = "\xE8", RE = "\u2A96", IE = "\u2A98", BE = "\u2A99", NE = "\u2208", PE = "\u23E7", FE = "\u2113", qE = "\u2A95", HE = "\u2A97", zE = "\u0112", $E = "\u0113", VE = "\u2205", UE = "\u2205", WE = "\u25FB", jE = "\u2205", GE = "\u25AB", KE = "\u2004", YE = "\u2005", JE = "\u2003", ZE = "\u014A", XE = "\u014B", QE = "\u2002", eD = "\u0118", tD = "\u0119", nD = "\u{1D53C}", iD = "\u{1D556}", rD = "\u22D5", oD = "\u29E3", sD = "\u2A71", lD = "\u03B5", aD = "\u0395", cD = "\u03B5", hD = "\u03F5", uD = "\u2256", fD = "\u2255", dD = "\u2242", pD = "\u2A96", mD = "\u2A95", gD = "\u2A75", bD = "=", yD = "\u2242", vD = "\u225F", xD = "\u21CC", kD = "\u2261", wD = "\u2A78", _D = "\u29E5", AD = "\u2971", CD = "\u2253", SD = "\u212F", TD = "\u2130", ED = "\u2250", DD = "\u2A73", MD = "\u2242", OD = "\u0397", LD = "\u03B7", RD = "\xD0", ID = "\xF0", BD = "\xCB", ND = "\xEB", PD = "\u20AC", FD = "!", qD = "\u2203", HD = "\u2203", zD = "\u2130", $D = "\u2147", VD = "\u2147", UD = "\u2252", WD = "\u0424", jD = "\u0444", GD = "\u2640", KD = "\uFB03", YD = "\uFB00", JD = "\uFB04", ZD = "\u{1D509}", XD = "\u{1D523}", QD = "\uFB01", eM = "\u25FC", tM = "\u25AA", nM = "fj", iM = "\u266D", rM = "\uFB02", oM = "\u25B1", sM = "\u0192", lM = "\u{1D53D}", aM = "\u{1D557}", cM = "\u2200", hM = "\u2200", uM = "\u22D4", fM = "\u2AD9", dM = "\u2131", pM = "\u2A0D", mM = "\xBD", gM = "\u2153", bM = "\xBC", yM = "\u2155", vM = "\u2159", xM = "\u215B", kM = "\u2154", wM = "\u2156", _M = "\xBE", AM = "\u2157", CM = "\u215C", SM = "\u2158", TM = "\u215A", EM = "\u215D", DM = "\u215E", MM = "\u2044", OM = "\u2322", LM = "\u{1D4BB}", RM = "\u2131", IM = "\u01F5", BM = "\u0393", NM = "\u03B3", PM = "\u03DC", FM = "\u03DD", qM = "\u2A86", HM = "\u011E", zM = "\u011F", $M = "\u0122", VM = "\u011C", UM = "\u011D", WM = "\u0413", jM = "\u0433", GM = "\u0120", KM = "\u0121", YM = "\u2265", JM = "\u2267", ZM = "\u2A8C", XM = "\u22DB", QM = "\u2265", e2 = "\u2267", t2 = "\u2A7E", n2 = "\u2AA9", i2 = "\u2A7E", r2 = "\u2A80", o2 = "\u2A82", s2 = "\u2A84", l2 = "\u22DB\uFE00", a2 = "\u2A94", c2 = "\u{1D50A}", h2 = "\u{1D524}", u2 = "\u226B", f2 = "\u22D9", d2 = "\u22D9", p2 = "\u2137", m2 = "\u0403", g2 = "\u0453", b2 = "\u2AA5", y2 = "\u2277", v2 = "\u2A92", x2 = "\u2AA4", k2 = "\u2A8A", w2 = "\u2A8A", _2 = "\u2A88", A2 = "\u2269", C2 = "\u2A88", S2 = "\u2269", T2 = "\u22E7", E2 = "\u{1D53E}", D2 = "\u{1D558}", M2 = "`", O2 = "\u2265", L2 = "\u22DB", R2 = "\u2267", I2 = "\u2AA2", B2 = "\u2277", N2 = "\u2A7E", P2 = "\u2273", F2 = "\u{1D4A2}", q2 = "\u210A", H2 = "\u2273", z2 = "\u2A8E", $2 = "\u2A90", V2 = "\u2AA7", U2 = "\u2A7A", W2 = ">", j2 = ">", G2 = "\u226B", K2 = "\u22D7", Y2 = "\u2995", J2 = "\u2A7C", Z2 = "\u2A86", X2 = "\u2978", Q2 = "\u22D7", eO = "\u22DB", tO = "\u2A8C", nO = "\u2277", iO = "\u2273", rO = "\u2269\uFE00", oO = "\u2269\uFE00", sO = "\u02C7", lO = "\u200A", aO = "\xBD", cO = "\u210B", hO = "\u042A", uO = "\u044A", fO = "\u2948", dO = "\u2194", pO = "\u21D4", mO = "\u21AD", gO = "^", bO = "\u210F", yO = "\u0124", vO = "\u0125", xO = "\u2665", kO = "\u2665", wO = "\u2026", _O = "\u22B9", AO = "\u{1D525}", CO = "\u210C", SO = "\u210B", TO = "\u2925", EO = "\u2926", DO = "\u21FF", MO = "\u223B", OO = "\u21A9", LO = "\u21AA", RO = "\u{1D559}", IO = "\u210D", BO = "\u2015", NO = "\u2500", PO = "\u{1D4BD}", FO = "\u210B", qO = "\u210F", HO = "\u0126", zO = "\u0127", $O = "\u224E", VO = "\u224F", UO = "\u2043", WO = "\u2010", jO = "\xCD", GO = "\xED", KO = "\u2063", YO = "\xCE", JO = "\xEE", ZO = "\u0418", XO = "\u0438", QO = "\u0130", eL = "\u0415", tL = "\u0435", nL = "\xA1", iL = "\u21D4", rL = "\u{1D526}", oL = "\u2111", sL = "\xCC", lL = "\xEC", aL = "\u2148", cL = "\u2A0C", hL = "\u222D", uL = "\u29DC", fL = "\u2129", dL = "\u0132", pL = "\u0133", mL = "\u012A", gL = "\u012B", bL = "\u2111", yL = "\u2148", vL = "\u2110", xL = "\u2111", kL = "\u0131", wL = "\u2111", _L = "\u22B7", AL = "\u01B5", CL = "\u21D2", SL = "\u2105", TL = "\u221E", EL = "\u29DD", DL = "\u0131", ML = "\u22BA", OL = "\u222B", LL = "\u222C", RL = "\u2124", IL = "\u222B", BL = "\u22BA", NL = "\u22C2", PL = "\u2A17", FL = "\u2A3C", qL = "\u2063", HL = "\u2062", zL = "\u0401", $L = "\u0451", VL = "\u012E", UL = "\u012F", WL = "\u{1D540}", jL = "\u{1D55A}", GL = "\u0399", KL = "\u03B9", YL = "\u2A3C", JL = "\xBF", ZL = "\u{1D4BE}", XL = "\u2110", QL = "\u2208", eR = "\u22F5", tR = "\u22F9", nR = "\u22F4", iR = "\u22F3", rR = "\u2208", oR = "\u2062", sR = "\u0128", lR = "\u0129", aR = "\u0406", cR = "\u0456", hR = "\xCF", uR = "\xEF", fR = "\u0134", dR = "\u0135", pR = "\u0419", mR = "\u0439", gR = "\u{1D50D}", bR = "\u{1D527}", yR = "\u0237", vR = "\u{1D541}", xR = "\u{1D55B}", kR = "\u{1D4A5}", wR = "\u{1D4BF}", _R = "\u0408", AR = "\u0458", CR = "\u0404", SR = "\u0454", TR = "\u039A", ER = "\u03BA", DR = "\u03F0", MR = "\u0136", OR = "\u0137", LR = "\u041A", RR = "\u043A", IR = "\u{1D50E}", BR = "\u{1D528}", NR = "\u0138", PR = "\u0425", FR = "\u0445", qR = "\u040C", HR = "\u045C", zR = "\u{1D542}", $R = "\u{1D55C}", VR = "\u{1D4A6}", UR = "\u{1D4C0}", WR = "\u21DA", jR = "\u0139", GR = "\u013A", KR = "\u29B4", YR = "\u2112", JR = "\u039B", ZR = "\u03BB", XR = "\u27E8", QR = "\u27EA", eI = "\u2991", tI = "\u27E8", nI = "\u2A85", iI = "\u2112", rI = "\xAB", oI = "\u21E4", sI = "\u291F", lI = "\u2190", aI = "\u219E", cI = "\u21D0", hI = "\u291D", uI = "\u21A9", fI = "\u21AB", dI = "\u2939", pI = "\u2973", mI = "\u21A2", gI = "\u2919", bI = "\u291B", yI = "\u2AAB", vI = "\u2AAD", xI = "\u2AAD\uFE00", kI = "\u290C", wI = "\u290E", _I = "\u2772", AI = "{", CI = "[", SI = "\u298B", TI = "\u298F", EI = "\u298D", DI = "\u013D", MI = "\u013E", OI = "\u013B", LI = "\u013C", RI = "\u2308", II = "{", BI = "\u041B", NI = "\u043B", PI = "\u2936", FI = "\u201C", qI = "\u201E", HI = "\u2967", zI = "\u294B", $I = "\u21B2", VI = "\u2264", UI = "\u2266", WI = "\u27E8", jI = "\u21E4", GI = "\u2190", KI = "\u2190", YI = "\u21D0", JI = "\u21C6", ZI = "\u21A2", XI = "\u2308", QI = "\u27E6", eB = "\u2961", tB = "\u2959", nB = "\u21C3", iB = "\u230A", rB = "\u21BD", oB = "\u21BC", sB = "\u21C7", lB = "\u2194", aB = "\u2194", cB = "\u21D4", hB = "\u21C6", uB = "\u21CB", fB = "\u21AD", dB = "\u294E", pB = "\u21A4", mB = "\u22A3", gB = "\u295A", bB = "\u22CB", yB = "\u29CF", vB = "\u22B2", xB = "\u22B4", kB = "\u2951", wB = "\u2960", _B = "\u2958", AB = "\u21BF", CB = "\u2952", SB = "\u21BC", TB = "\u2A8B", EB = "\u22DA", DB = "\u2264", MB = "\u2266", OB = "\u2A7D", LB = "\u2AA8", RB = "\u2A7D", IB = "\u2A7F", BB = "\u2A81", NB = "\u2A83", PB = "\u22DA\uFE00", FB = "\u2A93", qB = "\u2A85", HB = "\u22D6", zB = "\u22DA", $B = "\u2A8B", VB = "\u22DA", UB = "\u2266", WB = "\u2276", jB = "\u2276", GB = "\u2AA1", KB = "\u2272", YB = "\u2A7D", JB = "\u2272", ZB = "\u297C", XB = "\u230A", QB = "\u{1D50F}", eN = "\u{1D529}", tN = "\u2276", nN = "\u2A91", iN = "\u2962", rN = "\u21BD", oN = "\u21BC", sN = "\u296A", lN = "\u2584", aN = "\u0409", cN = "\u0459", hN = "\u21C7", uN = "\u226A", fN = "\u22D8", dN = "\u231E", pN = "\u21DA", mN = "\u296B", gN = "\u25FA", bN = "\u013F", yN = "\u0140", vN = "\u23B0", xN = "\u23B0", kN = "\u2A89", wN = "\u2A89", _N = "\u2A87", AN = "\u2268", CN = "\u2A87", SN = "\u2268", TN = "\u22E6", EN = "\u27EC", DN = "\u21FD", MN = "\u27E6", ON = "\u27F5", LN = "\u27F5", RN = "\u27F8", IN = "\u27F7", BN = "\u27F7", NN = "\u27FA", PN = "\u27FC", FN = "\u27F6", qN = "\u27F6", HN = "\u27F9", zN = "\u21AB", $N = "\u21AC", VN = "\u2985", UN = "\u{1D543}", WN = "\u{1D55D}", jN = "\u2A2D", GN = "\u2A34", KN = "\u2217", YN = "_", JN = "\u2199", ZN = "\u2198", XN = "\u25CA", QN = "\u25CA", eP = "\u29EB", tP = "(", nP = "\u2993", iP = "\u21C6", rP = "\u231F", oP = "\u21CB", sP = "\u296D", lP = "\u200E", aP = "\u22BF", cP = "\u2039", hP = "\u{1D4C1}", uP = "\u2112", fP = "\u21B0", dP = "\u21B0", pP = "\u2272", mP = "\u2A8D", gP = "\u2A8F", bP = "[", yP = "\u2018", vP = "\u201A", xP = "\u0141", kP = "\u0142", wP = "\u2AA6", _P = "\u2A79", AP = "<", CP = "<", SP = "\u226A", TP = "\u22D6", EP = "\u22CB", DP = "\u22C9", MP = "\u2976", OP = "\u2A7B", LP = "\u25C3", RP = "\u22B4", IP = "\u25C2", BP = "\u2996", NP = "\u294A", PP = "\u2966", FP = "\u2268\uFE00", qP = "\u2268\uFE00", HP = "\xAF", zP = "\u2642", $P = "\u2720", VP = "\u2720", UP = "\u21A6", WP = "\u21A6", jP = "\u21A7", GP = "\u21A4", KP = "\u21A5", YP = "\u25AE", JP = "\u2A29", ZP = "\u041C", XP = "\u043C", QP = "\u2014", eF = "\u223A", tF = "\u2221", nF = "\u205F", iF = "\u2133", rF = "\u{1D510}", oF = "\u{1D52A}", sF = "\u2127", lF = "\xB5", aF = "*", cF = "\u2AF0", hF = "\u2223", uF = "\xB7", fF = "\u229F", dF = "\u2212", pF = "\u2238", mF = "\u2A2A", gF = "\u2213", bF = "\u2ADB", yF = "\u2026", vF = "\u2213", xF = "\u22A7", kF = "\u{1D544}", wF = "\u{1D55E}", _F = "\u2213", AF = "\u{1D4C2}", CF = "\u2133", SF = "\u223E", TF = "\u039C", EF = "\u03BC", DF = "\u22B8", MF = "\u22B8", OF = "\u2207", LF = "\u0143", RF = "\u0144", IF = "\u2220\u20D2", BF = "\u2249", NF = "\u2A70\u0338", PF = "\u224B\u0338", FF = "\u0149", qF = "\u2249", HF = "\u266E", zF = "\u2115", $F = "\u266E", VF = "\xA0", UF = "\u224E\u0338", WF = "\u224F\u0338", jF = "\u2A43", GF = "\u0147", KF = "\u0148", YF = "\u0145", JF = "\u0146", ZF = "\u2247", XF = "\u2A6D\u0338", QF = "\u2A42", eq = "\u041D", tq = "\u043D", nq = "\u2013", iq = "\u2924", rq = "\u2197", oq = "\u21D7", sq = "\u2197", lq = "\u2260", aq = "\u2250\u0338", cq = "\u200B", hq = "\u200B", uq = "\u200B", fq = "\u200B", dq = "\u2262", pq = "\u2928", mq = "\u2242\u0338", gq = "\u226B", bq = "\u226A", yq = `
`, vq = "\u2204", xq = "\u2204", kq = "\u{1D511}", wq = "\u{1D52B}", _q = "\u2267\u0338", Aq = "\u2271", Cq = "\u2271", Sq = "\u2267\u0338", Tq = "\u2A7E\u0338", Eq = "\u2A7E\u0338", Dq = "\u22D9\u0338", Mq = "\u2275", Oq = "\u226B\u20D2", Lq = "\u226F", Rq = "\u226F", Iq = "\u226B\u0338", Bq = "\u21AE", Nq = "\u21CE", Pq = "\u2AF2", Fq = "\u220B", qq = "\u22FC", Hq = "\u22FA", zq = "\u220B", $q = "\u040A", Vq = "\u045A", Uq = "\u219A", Wq = "\u21CD", jq = "\u2025", Gq = "\u2266\u0338", Kq = "\u2270", Yq = "\u219A", Jq = "\u21CD", Zq = "\u21AE", Xq = "\u21CE", Qq = "\u2270", e3 = "\u2266\u0338", t3 = "\u2A7D\u0338", n3 = "\u2A7D\u0338", i3 = "\u226E", r3 = "\u22D8\u0338", o3 = "\u2274", s3 = "\u226A\u20D2", l3 = "\u226E", a3 = "\u22EA", c3 = "\u22EC", h3 = "\u226A\u0338", u3 = "\u2224", f3 = "\u2060", d3 = "\xA0", p3 = "\u{1D55F}", m3 = "\u2115", g3 = "\u2AEC", b3 = "\xAC", y3 = "\u2262", v3 = "\u226D", x3 = "\u2226", k3 = "\u2209", w3 = "\u2260", _3 = "\u2242\u0338", A3 = "\u2204", C3 = "\u226F", S3 = "\u2271", T3 = "\u2267\u0338", E3 = "\u226B\u0338", D3 = "\u2279", M3 = "\u2A7E\u0338", O3 = "\u2275", L3 = "\u224E\u0338", R3 = "\u224F\u0338", I3 = "\u2209", B3 = "\u22F5\u0338", N3 = "\u22F9\u0338", P3 = "\u2209", F3 = "\u22F7", q3 = "\u22F6", H3 = "\u29CF\u0338", z3 = "\u22EA", $3 = "\u22EC", V3 = "\u226E", U3 = "\u2270", W3 = "\u2278", j3 = "\u226A\u0338", G3 = "\u2A7D\u0338", K3 = "\u2274", Y3 = "\u2AA2\u0338", J3 = "\u2AA1\u0338", Z3 = "\u220C", X3 = "\u220C", Q3 = "\u22FE", eH = "\u22FD", tH = "\u2280", nH = "\u2AAF\u0338", iH = "\u22E0", rH = "\u220C", oH = "\u29D0\u0338", sH = "\u22EB", lH = "\u22ED", aH = "\u228F\u0338", cH = "\u22E2", hH = "\u2290\u0338", uH = "\u22E3", fH = "\u2282\u20D2", dH = "\u2288", pH = "\u2281", mH = "\u2AB0\u0338", gH = "\u22E1", bH = "\u227F\u0338", yH = "\u2283\u20D2", vH = "\u2289", xH = "\u2241", kH = "\u2244", wH = "\u2247", _H = "\u2249", AH = "\u2224", CH = "\u2226", SH = "\u2226", TH = "\u2AFD\u20E5", EH = "\u2202\u0338", DH = "\u2A14", MH = "\u2280", OH = "\u22E0", LH = "\u2280", RH = "\u2AAF\u0338", IH = "\u2AAF\u0338", BH = "\u2933\u0338", NH = "\u219B", PH = "\u21CF", FH = "\u219D\u0338", qH = "\u219B", HH = "\u21CF", zH = "\u22EB", $H = "\u22ED", VH = "\u2281", UH = "\u22E1", WH = "\u2AB0\u0338", jH = "\u{1D4A9}", GH = "\u{1D4C3}", KH = "\u2224", YH = "\u2226", JH = "\u2241", ZH = "\u2244", XH = "\u2244", QH = "\u2224", ez = "\u2226", tz = "\u22E2", nz = "\u22E3", iz = "\u2284", rz = "\u2AC5\u0338", oz = "\u2288", sz = "\u2282\u20D2", lz = "\u2288", az = "\u2AC5\u0338", cz = "\u2281", hz = "\u2AB0\u0338", uz = "\u2285", fz = "\u2AC6\u0338", dz = "\u2289", pz = "\u2283\u20D2", mz = "\u2289", gz = "\u2AC6\u0338", bz = "\u2279", yz = "\xD1", vz = "\xF1", xz = "\u2278", kz = "\u22EA", wz = "\u22EC", _z = "\u22EB", Az = "\u22ED", Cz = "\u039D", Sz = "\u03BD", Tz = "#", Ez = "\u2116", Dz = "\u2007", Mz = "\u224D\u20D2", Oz = "\u22AC", Lz = "\u22AD", Rz = "\u22AE", Iz = "\u22AF", Bz = "\u2265\u20D2", Nz = ">\u20D2", Pz = "\u2904", Fz = "\u29DE", qz = "\u2902", Hz = "\u2264\u20D2", zz = "<\u20D2", $z = "\u22B4\u20D2", Vz = "\u2903", Uz = "\u22B5\u20D2", Wz = "\u223C\u20D2", jz = "\u2923", Gz = "\u2196", Kz = "\u21D6", Yz = "\u2196", Jz = "\u2927", Zz = "\xD3", Xz = "\xF3", Qz = "\u229B", e$ = "\xD4", t$ = "\xF4", n$ = "\u229A", i$ = "\u041E", r$ = "\u043E", o$ = "\u229D", s$ = "\u0150", l$ = "\u0151", a$ = "\u2A38", c$ = "\u2299", h$ = "\u29BC", u$ = "\u0152", f$ = "\u0153", d$ = "\u29BF", p$ = "\u{1D512}", m$ = "\u{1D52C}", g$ = "\u02DB", b$ = "\xD2", y$ = "\xF2", v$ = "\u29C1", x$ = "\u29B5", k$ = "\u03A9", w$ = "\u222E", _$ = "\u21BA", A$ = "\u29BE", C$ = "\u29BB", S$ = "\u203E", T$ = "\u29C0", E$ = "\u014C", D$ = "\u014D", M$ = "\u03A9", O$ = "\u03C9", L$ = "\u039F", R$ = "\u03BF", I$ = "\u29B6", B$ = "\u2296", N$ = "\u{1D546}", P$ = "\u{1D560}", F$ = "\u29B7", q$ = "\u201C", H$ = "\u2018", z$ = "\u29B9", $$ = "\u2295", V$ = "\u21BB", U$ = "\u2A54", W$ = "\u2228", j$ = "\u2A5D", G$ = "\u2134", K$ = "\u2134", Y$ = "\xAA", J$ = "\xBA", Z$ = "\u22B6", X$ = "\u2A56", Q$ = "\u2A57", e8 = "\u2A5B", t8 = "\u24C8", n8 = "\u{1D4AA}", i8 = "\u2134", r8 = "\xD8", o8 = "\xF8", s8 = "\u2298", l8 = "\xD5", a8 = "\xF5", c8 = "\u2A36", h8 = "\u2A37", u8 = "\u2297", f8 = "\xD6", d8 = "\xF6", p8 = "\u233D", m8 = "\u203E", g8 = "\u23DE", b8 = "\u23B4", y8 = "\u23DC", v8 = "\xB6", x8 = "\u2225", k8 = "\u2225", w8 = "\u2AF3", _8 = "\u2AFD", A8 = "\u2202", C8 = "\u2202", S8 = "\u041F", T8 = "\u043F", E8 = "%", D8 = ".", M8 = "\u2030", O8 = "\u22A5", L8 = "\u2031", R8 = "\u{1D513}", I8 = "\u{1D52D}", B8 = "\u03A6", N8 = "\u03C6", P8 = "\u03D5", F8 = "\u2133", q8 = "\u260E", H8 = "\u03A0", z8 = "\u03C0", $8 = "\u22D4", V8 = "\u03D6", U8 = "\u210F", W8 = "\u210E", j8 = "\u210F", G8 = "\u2A23", K8 = "\u229E", Y8 = "\u2A22", J8 = "+", Z8 = "\u2214", X8 = "\u2A25", Q8 = "\u2A72", eV = "\xB1", tV = "\xB1", nV = "\u2A26", iV = "\u2A27", rV = "\xB1", oV = "\u210C", sV = "\u2A15", lV = "\u{1D561}", aV = "\u2119", cV = "\xA3", hV = "\u2AB7", uV = "\u2ABB", fV = "\u227A", dV = "\u227C", pV = "\u2AB7", mV = "\u227A", gV = "\u227C", bV = "\u227A", yV = "\u2AAF", vV = "\u227C", xV = "\u227E", kV = "\u2AAF", wV = "\u2AB9", _V = "\u2AB5", AV = "\u22E8", CV = "\u2AAF", SV = "\u2AB3", TV = "\u227E", EV = "\u2032", DV = "\u2033", MV = "\u2119", OV = "\u2AB9", LV = "\u2AB5", RV = "\u22E8", IV = "\u220F", BV = "\u220F", NV = "\u232E", PV = "\u2312", FV = "\u2313", qV = "\u221D", HV = "\u221D", zV = "\u2237", $V = "\u221D", VV = "\u227E", UV = "\u22B0", WV = "\u{1D4AB}", jV = "\u{1D4C5}", GV = "\u03A8", KV = "\u03C8", YV = "\u2008", JV = "\u{1D514}", ZV = "\u{1D52E}", XV = "\u2A0C", QV = "\u{1D562}", e4 = "\u211A", t4 = "\u2057", n4 = "\u{1D4AC}", i4 = "\u{1D4C6}", r4 = "\u210D", o4 = "\u2A16", s4 = "?", l4 = "\u225F", a4 = '"', c4 = '"', h4 = "\u21DB", u4 = "\u223D\u0331", f4 = "\u0154", d4 = "\u0155", p4 = "\u221A", m4 = "\u29B3", g4 = "\u27E9", b4 = "\u27EB", y4 = "\u2992", v4 = "\u29A5", x4 = "\u27E9", k4 = "\xBB", w4 = "\u2975", _4 = "\u21E5", A4 = "\u2920", C4 = "\u2933", S4 = "\u2192", T4 = "\u21A0", E4 = "\u21D2", D4 = "\u291E", M4 = "\u21AA", O4 = "\u21AC", L4 = "\u2945", R4 = "\u2974", I4 = "\u2916", B4 = "\u21A3", N4 = "\u219D", P4 = "\u291A", F4 = "\u291C", q4 = "\u2236", H4 = "\u211A", z4 = "\u290D", $4 = "\u290F", V4 = "\u2910", U4 = "\u2773", W4 = "}", j4 = "]", G4 = "\u298C", K4 = "\u298E", Y4 = "\u2990", J4 = "\u0158", Z4 = "\u0159", X4 = "\u0156", Q4 = "\u0157", e9 = "\u2309", t9 = "}", n9 = "\u0420", i9 = "\u0440", r9 = "\u2937", o9 = "\u2969", s9 = "\u201D", l9 = "\u201D", a9 = "\u21B3", c9 = "\u211C", h9 = "\u211B", u9 = "\u211C", f9 = "\u211D", d9 = "\u211C", p9 = "\u25AD", m9 = "\xAE", g9 = "\xAE", b9 = "\u220B", y9 = "\u21CB", v9 = "\u296F", x9 = "\u297D", k9 = "\u230B", w9 = "\u{1D52F}", _9 = "\u211C", A9 = "\u2964", C9 = "\u21C1", S9 = "\u21C0", T9 = "\u296C", E9 = "\u03A1", D9 = "\u03C1", M9 = "\u03F1", O9 = "\u27E9", L9 = "\u21E5", R9 = "\u2192", I9 = "\u2192", B9 = "\u21D2", N9 = "\u21C4", P9 = "\u21A3", F9 = "\u2309", q9 = "\u27E7", H9 = "\u295D", z9 = "\u2955", $9 = "\u21C2", V9 = "\u230B", U9 = "\u21C1", W9 = "\u21C0", j9 = "\u21C4", G9 = "\u21CC", K9 = "\u21C9", Y9 = "\u219D", J9 = "\u21A6", Z9 = "\u22A2", X9 = "\u295B", Q9 = "\u22CC", e5 = "\u29D0", t5 = "\u22B3", n5 = "\u22B5", i5 = "\u294F", r5 = "\u295C", o5 = "\u2954", s5 = "\u21BE", l5 = "\u2953", a5 = "\u21C0", c5 = "\u02DA", h5 = "\u2253", u5 = "\u21C4", f5 = "\u21CC", d5 = "\u200F", p5 = "\u23B1", m5 = "\u23B1", g5 = "\u2AEE", b5 = "\u27ED", y5 = "\u21FE", v5 = "\u27E7", x5 = "\u2986", k5 = "\u{1D563}", w5 = "\u211D", _5 = "\u2A2E", A5 = "\u2A35", C5 = "\u2970", S5 = ")", T5 = "\u2994", E5 = "\u2A12", D5 = "\u21C9", M5 = "\u21DB", O5 = "\u203A", L5 = "\u{1D4C7}", R5 = "\u211B", I5 = "\u21B1", B5 = "\u21B1", N5 = "]", P5 = "\u2019", F5 = "\u2019", q5 = "\u22CC", H5 = "\u22CA", z5 = "\u25B9", $5 = "\u22B5", V5 = "\u25B8", U5 = "\u29CE", W5 = "\u29F4", j5 = "\u2968", G5 = "\u211E", K5 = "\u015A", Y5 = "\u015B", J5 = "\u201A", Z5 = "\u2AB8", X5 = "\u0160", Q5 = "\u0161", eU = "\u2ABC", tU = "\u227B", nU = "\u227D", iU = "\u2AB0", rU = "\u2AB4", oU = "\u015E", sU = "\u015F", lU = "\u015C", aU = "\u015D", cU = "\u2ABA", hU = "\u2AB6", uU = "\u22E9", fU = "\u2A13", dU = "\u227F", pU = "\u0421", mU = "\u0441", gU = "\u22A1", bU = "\u22C5", yU = "\u2A66", vU = "\u2925", xU = "\u2198", kU = "\u21D8", wU = "\u2198", _U = "\xA7", AU = ";", CU = "\u2929", SU = "\u2216", TU = "\u2216", EU = "\u2736", DU = "\u{1D516}", MU = "\u{1D530}", OU = "\u2322", LU = "\u266F", RU = "\u0429", IU = "\u0449", BU = "\u0428", NU = "\u0448", PU = "\u2193", FU = "\u2190", qU = "\u2223", HU = "\u2225", zU = "\u2192", $U = "\u2191", VU = "\xAD", UU = "\u03A3", WU = "\u03C3", jU = "\u03C2", GU = "\u03C2", KU = "\u223C", YU = "\u2A6A", JU = "\u2243", ZU = "\u2243", XU = "\u2A9E", QU = "\u2AA0", eW = "\u2A9D", tW = "\u2A9F", nW = "\u2246", iW = "\u2A24", rW = "\u2972", oW = "\u2190", sW = "\u2218", lW = "\u2216", aW = "\u2A33", cW = "\u29E4", hW = "\u2223", uW = "\u2323", fW = "\u2AAA", dW = "\u2AAC", pW = "\u2AAC\uFE00", mW = "\u042C", gW = "\u044C", bW = "\u233F", yW = "\u29C4", vW = "/", xW = "\u{1D54A}", kW = "\u{1D564}", wW = "\u2660", _W = "\u2660", AW = "\u2225", CW = "\u2293", SW = "\u2293\uFE00", TW = "\u2294", EW = "\u2294\uFE00", DW = "\u221A", MW = "\u228F", OW = "\u2291", LW = "\u228F", RW = "\u2291", IW = "\u2290", BW = "\u2292", NW = "\u2290", PW = "\u2292", FW = "\u25A1", qW = "\u25A1", HW = "\u2293", zW = "\u228F", $W = "\u2291", VW = "\u2290", UW = "\u2292", WW = "\u2294", jW = "\u25AA", GW = "\u25A1", KW = "\u25AA", YW = "\u2192", JW = "\u{1D4AE}", ZW = "\u{1D4C8}", XW = "\u2216", QW = "\u2323", e6 = "\u22C6", t6 = "\u22C6", n6 = "\u2606", i6 = "\u2605", r6 = "\u03F5", o6 = "\u03D5", s6 = "\xAF", l6 = "\u2282", a6 = "\u22D0", c6 = "\u2ABD", h6 = "\u2AC5", u6 = "\u2286", f6 = "\u2AC3", d6 = "\u2AC1", p6 = "\u2ACB", m6 = "\u228A", g6 = "\u2ABF", b6 = "\u2979", y6 = "\u2282", v6 = "\u22D0", x6 = "\u2286", k6 = "\u2AC5", w6 = "\u2286", _6 = "\u228A", A6 = "\u2ACB", C6 = "\u2AC7", S6 = "\u2AD5", T6 = "\u2AD3", E6 = "\u2AB8", D6 = "\u227B", M6 = "\u227D", O6 = "\u227B", L6 = "\u2AB0", R6 = "\u227D", I6 = "\u227F", B6 = "\u2AB0", N6 = "\u2ABA", P6 = "\u2AB6", F6 = "\u22E9", q6 = "\u227F", H6 = "\u220B", z6 = "\u2211", $6 = "\u2211", V6 = "\u266A", U6 = "\xB9", W6 = "\xB2", j6 = "\xB3", G6 = "\u2283", K6 = "\u22D1", Y6 = "\u2ABE", J6 = "\u2AD8", Z6 = "\u2AC6", X6 = "\u2287", Q6 = "\u2AC4", ej = "\u2283", tj = "\u2287", nj = "\u27C9", ij = "\u2AD7", rj = "\u297B", oj = "\u2AC2", sj = "\u2ACC", lj = "\u228B", aj = "\u2AC0", cj = "\u2283", hj = "\u22D1", uj = "\u2287", fj = "\u2AC6", dj = "\u228B", pj = "\u2ACC", mj = "\u2AC8", gj = "\u2AD4", bj = "\u2AD6", yj = "\u2926", vj = "\u2199", xj = "\u21D9", kj = "\u2199", wj = "\u292A", _j = "\xDF", Aj = "	", Cj = "\u2316", Sj = "\u03A4", Tj = "\u03C4", Ej = "\u23B4", Dj = "\u0164", Mj = "\u0165", Oj = "\u0162", Lj = "\u0163", Rj = "\u0422", Ij = "\u0442", Bj = "\u20DB", Nj = "\u2315", Pj = "\u{1D517}", Fj = "\u{1D531}", qj = "\u2234", Hj = "\u2234", zj = "\u2234", $j = "\u0398", Vj = "\u03B8", Uj = "\u03D1", Wj = "\u03D1", jj = "\u2248", Gj = "\u223C", Kj = "\u205F\u200A", Yj = "\u2009", Jj = "\u2009", Zj = "\u2248", Xj = "\u223C", Qj = "\xDE", e7 = "\xFE", t7 = "\u02DC", n7 = "\u223C", i7 = "\u2243", r7 = "\u2245", o7 = "\u2248", s7 = "\u2A31", l7 = "\u22A0", a7 = "\xD7", c7 = "\u2A30", h7 = "\u222D", u7 = "\u2928", f7 = "\u2336", d7 = "\u2AF1", p7 = "\u22A4", m7 = "\u{1D54B}", g7 = "\u{1D565}", b7 = "\u2ADA", y7 = "\u2929", v7 = "\u2034", x7 = "\u2122", k7 = "\u2122", w7 = "\u25B5", _7 = "\u25BF", A7 = "\u25C3", C7 = "\u22B4", S7 = "\u225C", T7 = "\u25B9", E7 = "\u22B5", D7 = "\u25EC", M7 = "\u225C", O7 = "\u2A3A", L7 = "\u20DB", R7 = "\u2A39", I7 = "\u29CD", B7 = "\u2A3B", N7 = "\u23E2", P7 = "\u{1D4AF}", F7 = "\u{1D4C9}", q7 = "\u0426", H7 = "\u0446", z7 = "\u040B", $7 = "\u045B", V7 = "\u0166", U7 = "\u0167", W7 = "\u226C", j7 = "\u219E", G7 = "\u21A0", K7 = "\xDA", Y7 = "\xFA", J7 = "\u2191", Z7 = "\u219F", X7 = "\u21D1", Q7 = "\u2949", eG = "\u040E", tG = "\u045E", nG = "\u016C", iG = "\u016D", rG = "\xDB", oG = "\xFB", sG = "\u0423", lG = "\u0443", aG = "\u21C5", cG = "\u0170", hG = "\u0171", uG = "\u296E", fG = "\u297E", dG = "\u{1D518}", pG = "\u{1D532}", mG = "\xD9", gG = "\xF9", bG = "\u2963", yG = "\u21BF", vG = "\u21BE", xG = "\u2580", kG = "\u231C", wG = "\u231C", _G = "\u230F", AG = "\u25F8", CG = "\u016A", SG = "\u016B", TG = "\xA8", EG = "_", DG = "\u23DF", MG = "\u23B5", OG = "\u23DD", LG = "\u22C3", RG = "\u228E", IG = "\u0172", BG = "\u0173", NG = "\u{1D54C}", PG = "\u{1D566}", FG = "\u2912", qG = "\u2191", HG = "\u2191", zG = "\u21D1", $G = "\u21C5", VG = "\u2195", UG = "\u2195", WG = "\u21D5", jG = "\u296E", GG = "\u21BF", KG = "\u21BE", YG = "\u228E", JG = "\u2196", ZG = "\u2197", XG = "\u03C5", QG = "\u03D2", eK = "\u03D2", tK = "\u03A5", nK = "\u03C5", iK = "\u21A5", rK = "\u22A5", oK = "\u21C8", sK = "\u231D", lK = "\u231D", aK = "\u230E", cK = "\u016E", hK = "\u016F", uK = "\u25F9", fK = "\u{1D4B0}", dK = "\u{1D4CA}", pK = "\u22F0", mK = "\u0168", gK = "\u0169", bK = "\u25B5", yK = "\u25B4", vK = "\u21C8", xK = "\xDC", kK = "\xFC", wK = "\u29A7", _K = "\u299C", AK = "\u03F5", CK = "\u03F0", SK = "\u2205", TK = "\u03D5", EK = "\u03D6", DK = "\u221D", MK = "\u2195", OK = "\u21D5", LK = "\u03F1", RK = "\u03C2", IK = "\u228A\uFE00", BK = "\u2ACB\uFE00", NK = "\u228B\uFE00", PK = "\u2ACC\uFE00", FK = "\u03D1", qK = "\u22B2", HK = "\u22B3", zK = "\u2AE8", $K = "\u2AEB", VK = "\u2AE9", UK = "\u0412", WK = "\u0432", jK = "\u22A2", GK = "\u22A8", KK = "\u22A9", YK = "\u22AB", JK = "\u2AE6", ZK = "\u22BB", XK = "\u2228", QK = "\u22C1", eY = "\u225A", tY = "\u22EE", nY = "|", iY = "\u2016", rY = "|", oY = "\u2016", sY = "\u2223", lY = "|", aY = "\u2758", cY = "\u2240", hY = "\u200A", uY = "\u{1D519}", fY = "\u{1D533}", dY = "\u22B2", pY = "\u2282\u20D2", mY = "\u2283\u20D2", gY = "\u{1D54D}", bY = "\u{1D567}", yY = "\u221D", vY = "\u22B3", xY = "\u{1D4B1}", kY = "\u{1D4CB}", wY = "\u2ACB\uFE00", _Y = "\u228A\uFE00", AY = "\u2ACC\uFE00", CY = "\u228B\uFE00", SY = "\u22AA", TY = "\u299A", EY = "\u0174", DY = "\u0175", MY = "\u2A5F", OY = "\u2227", LY = "\u22C0", RY = "\u2259", IY = "\u2118", BY = "\u{1D51A}", NY = "\u{1D534}", PY = "\u{1D54E}", FY = "\u{1D568}", qY = "\u2118", HY = "\u2240", zY = "\u2240", $Y = "\u{1D4B2}", VY = "\u{1D4CC}", UY = "\u22C2", WY = "\u25EF", jY = "\u22C3", GY = "\u25BD", KY = "\u{1D51B}", YY = "\u{1D535}", JY = "\u27F7", ZY = "\u27FA", XY = "\u039E", QY = "\u03BE", eJ = "\u27F5", tJ = "\u27F8", nJ = "\u27FC", iJ = "\u22FB", rJ = "\u2A00", oJ = "\u{1D54F}", sJ = "\u{1D569}", lJ = "\u2A01", aJ = "\u2A02", cJ = "\u27F6", hJ = "\u27F9", uJ = "\u{1D4B3}", fJ = "\u{1D4CD}", dJ = "\u2A06", pJ = "\u2A04", mJ = "\u25B3", gJ = "\u22C1", bJ = "\u22C0", yJ = "\xDD", vJ = "\xFD", xJ = "\u042F", kJ = "\u044F", wJ = "\u0176", _J = "\u0177", AJ = "\u042B", CJ = "\u044B", SJ = "\xA5", TJ = "\u{1D51C}", EJ = "\u{1D536}", DJ = "\u0407", MJ = "\u0457", OJ = "\u{1D550}", LJ = "\u{1D56A}", RJ = "\u{1D4B4}", IJ = "\u{1D4CE}", BJ = "\u042E", NJ = "\u044E", PJ = "\xFF", FJ = "\u0178", qJ = "\u0179", HJ = "\u017A", zJ = "\u017D", $J = "\u017E", VJ = "\u0417", UJ = "\u0437", WJ = "\u017B", jJ = "\u017C", GJ = "\u2128", KJ = "\u200B", YJ = "\u0396", JJ = "\u03B6", ZJ = "\u{1D537}", XJ = "\u2128", QJ = "\u0416", eZ = "\u0436", tZ = "\u21DD", nZ = "\u{1D56B}", iZ = "\u2124", rZ = "\u{1D4B5}", oZ = "\u{1D4CF}", sZ = "\u200D", lZ = "\u200C", aZ = {
  Aacute: Wx,
  aacute: jx,
  Abreve: Gx,
  abreve: Kx,
  ac: Yx,
  acd: Jx,
  acE: Zx,
  Acirc: Xx,
  acirc: Qx,
  acute: e1,
  Acy: t1,
  acy: n1,
  AElig: i1,
  aelig: r1,
  af: o1,
  Afr: s1,
  afr: l1,
  Agrave: a1,
  agrave: c1,
  alefsym: h1,
  aleph: u1,
  Alpha: f1,
  alpha: d1,
  Amacr: p1,
  amacr: m1,
  amalg: g1,
  amp: b1,
  AMP: y1,
  andand: v1,
  And: x1,
  and: k1,
  andd: w1,
  andslope: _1,
  andv: A1,
  ang: C1,
  ange: S1,
  angle: T1,
  angmsdaa: E1,
  angmsdab: D1,
  angmsdac: M1,
  angmsdad: O1,
  angmsdae: L1,
  angmsdaf: R1,
  angmsdag: I1,
  angmsdah: B1,
  angmsd: N1,
  angrt: P1,
  angrtvb: F1,
  angrtvbd: q1,
  angsph: H1,
  angst: z1,
  angzarr: $1,
  Aogon: V1,
  aogon: U1,
  Aopf: W1,
  aopf: j1,
  apacir: G1,
  ap: K1,
  apE: Y1,
  ape: J1,
  apid: Z1,
  apos: X1,
  ApplyFunction: Q1,
  approx: ek,
  approxeq: tk,
  Aring: nk,
  aring: ik,
  Ascr: rk,
  ascr: ok,
  Assign: sk,
  ast: lk,
  asymp: ak,
  asympeq: ck,
  Atilde: hk,
  atilde: uk,
  Auml: fk,
  auml: dk,
  awconint: pk,
  awint: mk,
  backcong: gk,
  backepsilon: bk,
  backprime: yk,
  backsim: vk,
  backsimeq: xk,
  Backslash: kk,
  Barv: wk,
  barvee: _k,
  barwed: Ak,
  Barwed: Ck,
  barwedge: Sk,
  bbrk: Tk,
  bbrktbrk: Ek,
  bcong: Dk,
  Bcy: Mk,
  bcy: Ok,
  bdquo: Lk,
  becaus: Rk,
  because: Ik,
  Because: Bk,
  bemptyv: Nk,
  bepsi: Pk,
  bernou: Fk,
  Bernoullis: qk,
  Beta: Hk,
  beta: zk,
  beth: $k,
  between: Vk,
  Bfr: Uk,
  bfr: Wk,
  bigcap: jk,
  bigcirc: Gk,
  bigcup: Kk,
  bigodot: Yk,
  bigoplus: Jk,
  bigotimes: Zk,
  bigsqcup: Xk,
  bigstar: Qk,
  bigtriangledown: ew,
  bigtriangleup: tw,
  biguplus: nw,
  bigvee: iw,
  bigwedge: rw,
  bkarow: ow,
  blacklozenge: sw,
  blacksquare: lw,
  blacktriangle: aw,
  blacktriangledown: cw,
  blacktriangleleft: hw,
  blacktriangleright: uw,
  blank: fw,
  blk12: dw,
  blk14: pw,
  blk34: mw,
  block: gw,
  bne: bw,
  bnequiv: yw,
  bNot: vw,
  bnot: xw,
  Bopf: kw,
  bopf: ww,
  bot: _w,
  bottom: Aw,
  bowtie: Cw,
  boxbox: Sw,
  boxdl: Tw,
  boxdL: Ew,
  boxDl: Dw,
  boxDL: Mw,
  boxdr: Ow,
  boxdR: Lw,
  boxDr: Rw,
  boxDR: Iw,
  boxh: Bw,
  boxH: Nw,
  boxhd: Pw,
  boxHd: Fw,
  boxhD: qw,
  boxHD: Hw,
  boxhu: zw,
  boxHu: $w,
  boxhU: Vw,
  boxHU: Uw,
  boxminus: Ww,
  boxplus: jw,
  boxtimes: Gw,
  boxul: Kw,
  boxuL: Yw,
  boxUl: Jw,
  boxUL: Zw,
  boxur: Xw,
  boxuR: Qw,
  boxUr: e_,
  boxUR: t_,
  boxv: n_,
  boxV: i_,
  boxvh: r_,
  boxvH: o_,
  boxVh: s_,
  boxVH: l_,
  boxvl: a_,
  boxvL: c_,
  boxVl: h_,
  boxVL: u_,
  boxvr: f_,
  boxvR: d_,
  boxVr: p_,
  boxVR: m_,
  bprime: g_,
  breve: b_,
  Breve: y_,
  brvbar: v_,
  bscr: x_,
  Bscr: k_,
  bsemi: w_,
  bsim: __,
  bsime: A_,
  bsolb: C_,
  bsol: S_,
  bsolhsub: T_,
  bull: E_,
  bullet: D_,
  bump: M_,
  bumpE: O_,
  bumpe: L_,
  Bumpeq: R_,
  bumpeq: I_,
  Cacute: B_,
  cacute: N_,
  capand: P_,
  capbrcup: F_,
  capcap: q_,
  cap: H_,
  Cap: z_,
  capcup: $_,
  capdot: V_,
  CapitalDifferentialD: U_,
  caps: W_,
  caret: j_,
  caron: G_,
  Cayleys: K_,
  ccaps: Y_,
  Ccaron: J_,
  ccaron: Z_,
  Ccedil: X_,
  ccedil: Q_,
  Ccirc: eA,
  ccirc: tA,
  Cconint: nA,
  ccups: iA,
  ccupssm: rA,
  Cdot: oA,
  cdot: sA,
  cedil: lA,
  Cedilla: aA,
  cemptyv: cA,
  cent: hA,
  centerdot: uA,
  CenterDot: fA,
  cfr: dA,
  Cfr: pA,
  CHcy: mA,
  chcy: gA,
  check: bA,
  checkmark: yA,
  Chi: vA,
  chi: xA,
  circ: kA,
  circeq: wA,
  circlearrowleft: _A,
  circlearrowright: AA,
  circledast: CA,
  circledcirc: SA,
  circleddash: TA,
  CircleDot: EA,
  circledR: DA,
  circledS: MA,
  CircleMinus: OA,
  CirclePlus: LA,
  CircleTimes: RA,
  cir: IA,
  cirE: BA,
  cire: NA,
  cirfnint: PA,
  cirmid: FA,
  cirscir: qA,
  ClockwiseContourIntegral: HA,
  CloseCurlyDoubleQuote: zA,
  CloseCurlyQuote: $A,
  clubs: VA,
  clubsuit: UA,
  colon: WA,
  Colon: jA,
  Colone: GA,
  colone: KA,
  coloneq: YA,
  comma: JA,
  commat: ZA,
  comp: XA,
  compfn: QA,
  complement: eC,
  complexes: tC,
  cong: nC,
  congdot: iC,
  Congruent: rC,
  conint: oC,
  Conint: sC,
  ContourIntegral: lC,
  copf: aC,
  Copf: cC,
  coprod: hC,
  Coproduct: uC,
  copy: fC,
  COPY: dC,
  copysr: pC,
  CounterClockwiseContourIntegral: mC,
  crarr: gC,
  cross: bC,
  Cross: yC,
  Cscr: vC,
  cscr: xC,
  csub: kC,
  csube: wC,
  csup: _C,
  csupe: AC,
  ctdot: CC,
  cudarrl: SC,
  cudarrr: TC,
  cuepr: EC,
  cuesc: DC,
  cularr: MC,
  cularrp: OC,
  cupbrcap: LC,
  cupcap: RC,
  CupCap: IC,
  cup: BC,
  Cup: NC,
  cupcup: PC,
  cupdot: FC,
  cupor: qC,
  cups: HC,
  curarr: zC,
  curarrm: $C,
  curlyeqprec: VC,
  curlyeqsucc: UC,
  curlyvee: WC,
  curlywedge: jC,
  curren: GC,
  curvearrowleft: KC,
  curvearrowright: YC,
  cuvee: JC,
  cuwed: ZC,
  cwconint: XC,
  cwint: QC,
  cylcty: eS,
  dagger: tS,
  Dagger: nS,
  daleth: iS,
  darr: rS,
  Darr: oS,
  dArr: sS,
  dash: lS,
  Dashv: aS,
  dashv: cS,
  dbkarow: hS,
  dblac: uS,
  Dcaron: fS,
  dcaron: dS,
  Dcy: pS,
  dcy: mS,
  ddagger: gS,
  ddarr: bS,
  DD: yS,
  dd: vS,
  DDotrahd: xS,
  ddotseq: kS,
  deg: wS,
  Del: _S,
  Delta: AS,
  delta: CS,
  demptyv: SS,
  dfisht: TS,
  Dfr: ES,
  dfr: DS,
  dHar: MS,
  dharl: OS,
  dharr: LS,
  DiacriticalAcute: RS,
  DiacriticalDot: IS,
  DiacriticalDoubleAcute: BS,
  DiacriticalGrave: NS,
  DiacriticalTilde: PS,
  diam: FS,
  diamond: qS,
  Diamond: HS,
  diamondsuit: zS,
  diams: $S,
  die: VS,
  DifferentialD: US,
  digamma: WS,
  disin: jS,
  div: GS,
  divide: KS,
  divideontimes: YS,
  divonx: JS,
  DJcy: ZS,
  djcy: XS,
  dlcorn: QS,
  dlcrop: eT,
  dollar: tT,
  Dopf: nT,
  dopf: iT,
  Dot: rT,
  dot: oT,
  DotDot: sT,
  doteq: lT,
  doteqdot: aT,
  DotEqual: cT,
  dotminus: hT,
  dotplus: uT,
  dotsquare: fT,
  doublebarwedge: dT,
  DoubleContourIntegral: pT,
  DoubleDot: mT,
  DoubleDownArrow: gT,
  DoubleLeftArrow: bT,
  DoubleLeftRightArrow: yT,
  DoubleLeftTee: vT,
  DoubleLongLeftArrow: xT,
  DoubleLongLeftRightArrow: kT,
  DoubleLongRightArrow: wT,
  DoubleRightArrow: _T,
  DoubleRightTee: AT,
  DoubleUpArrow: CT,
  DoubleUpDownArrow: ST,
  DoubleVerticalBar: TT,
  DownArrowBar: ET,
  downarrow: DT,
  DownArrow: MT,
  Downarrow: OT,
  DownArrowUpArrow: LT,
  DownBreve: RT,
  downdownarrows: IT,
  downharpoonleft: BT,
  downharpoonright: NT,
  DownLeftRightVector: PT,
  DownLeftTeeVector: FT,
  DownLeftVectorBar: qT,
  DownLeftVector: HT,
  DownRightTeeVector: zT,
  DownRightVectorBar: $T,
  DownRightVector: VT,
  DownTeeArrow: UT,
  DownTee: WT,
  drbkarow: jT,
  drcorn: GT,
  drcrop: KT,
  Dscr: YT,
  dscr: JT,
  DScy: ZT,
  dscy: XT,
  dsol: QT,
  Dstrok: eE,
  dstrok: tE,
  dtdot: nE,
  dtri: iE,
  dtrif: rE,
  duarr: oE,
  duhar: sE,
  dwangle: lE,
  DZcy: aE,
  dzcy: cE,
  dzigrarr: hE,
  Eacute: uE,
  eacute: fE,
  easter: dE,
  Ecaron: pE,
  ecaron: mE,
  Ecirc: gE,
  ecirc: bE,
  ecir: yE,
  ecolon: vE,
  Ecy: xE,
  ecy: kE,
  eDDot: wE,
  Edot: _E,
  edot: AE,
  eDot: CE,
  ee: SE,
  efDot: TE,
  Efr: EE,
  efr: DE,
  eg: ME,
  Egrave: OE,
  egrave: LE,
  egs: RE,
  egsdot: IE,
  el: BE,
  Element: NE,
  elinters: PE,
  ell: FE,
  els: qE,
  elsdot: HE,
  Emacr: zE,
  emacr: $E,
  empty: VE,
  emptyset: UE,
  EmptySmallSquare: WE,
  emptyv: jE,
  EmptyVerySmallSquare: GE,
  emsp13: KE,
  emsp14: YE,
  emsp: JE,
  ENG: ZE,
  eng: XE,
  ensp: QE,
  Eogon: eD,
  eogon: tD,
  Eopf: nD,
  eopf: iD,
  epar: rD,
  eparsl: oD,
  eplus: sD,
  epsi: lD,
  Epsilon: aD,
  epsilon: cD,
  epsiv: hD,
  eqcirc: uD,
  eqcolon: fD,
  eqsim: dD,
  eqslantgtr: pD,
  eqslantless: mD,
  Equal: gD,
  equals: bD,
  EqualTilde: yD,
  equest: vD,
  Equilibrium: xD,
  equiv: kD,
  equivDD: wD,
  eqvparsl: _D,
  erarr: AD,
  erDot: CD,
  escr: SD,
  Escr: TD,
  esdot: ED,
  Esim: DD,
  esim: MD,
  Eta: OD,
  eta: LD,
  ETH: RD,
  eth: ID,
  Euml: BD,
  euml: ND,
  euro: PD,
  excl: FD,
  exist: qD,
  Exists: HD,
  expectation: zD,
  exponentiale: $D,
  ExponentialE: VD,
  fallingdotseq: UD,
  Fcy: WD,
  fcy: jD,
  female: GD,
  ffilig: KD,
  fflig: YD,
  ffllig: JD,
  Ffr: ZD,
  ffr: XD,
  filig: QD,
  FilledSmallSquare: eM,
  FilledVerySmallSquare: tM,
  fjlig: nM,
  flat: iM,
  fllig: rM,
  fltns: oM,
  fnof: sM,
  Fopf: lM,
  fopf: aM,
  forall: cM,
  ForAll: hM,
  fork: uM,
  forkv: fM,
  Fouriertrf: dM,
  fpartint: pM,
  frac12: mM,
  frac13: gM,
  frac14: bM,
  frac15: yM,
  frac16: vM,
  frac18: xM,
  frac23: kM,
  frac25: wM,
  frac34: _M,
  frac35: AM,
  frac38: CM,
  frac45: SM,
  frac56: TM,
  frac58: EM,
  frac78: DM,
  frasl: MM,
  frown: OM,
  fscr: LM,
  Fscr: RM,
  gacute: IM,
  Gamma: BM,
  gamma: NM,
  Gammad: PM,
  gammad: FM,
  gap: qM,
  Gbreve: HM,
  gbreve: zM,
  Gcedil: $M,
  Gcirc: VM,
  gcirc: UM,
  Gcy: WM,
  gcy: jM,
  Gdot: GM,
  gdot: KM,
  ge: YM,
  gE: JM,
  gEl: ZM,
  gel: XM,
  geq: QM,
  geqq: e2,
  geqslant: t2,
  gescc: n2,
  ges: i2,
  gesdot: r2,
  gesdoto: o2,
  gesdotol: s2,
  gesl: l2,
  gesles: a2,
  Gfr: c2,
  gfr: h2,
  gg: u2,
  Gg: f2,
  ggg: d2,
  gimel: p2,
  GJcy: m2,
  gjcy: g2,
  gla: b2,
  gl: y2,
  glE: v2,
  glj: x2,
  gnap: k2,
  gnapprox: w2,
  gne: _2,
  gnE: A2,
  gneq: C2,
  gneqq: S2,
  gnsim: T2,
  Gopf: E2,
  gopf: D2,
  grave: M2,
  GreaterEqual: O2,
  GreaterEqualLess: L2,
  GreaterFullEqual: R2,
  GreaterGreater: I2,
  GreaterLess: B2,
  GreaterSlantEqual: N2,
  GreaterTilde: P2,
  Gscr: F2,
  gscr: q2,
  gsim: H2,
  gsime: z2,
  gsiml: $2,
  gtcc: V2,
  gtcir: U2,
  gt: W2,
  GT: j2,
  Gt: G2,
  gtdot: K2,
  gtlPar: Y2,
  gtquest: J2,
  gtrapprox: Z2,
  gtrarr: X2,
  gtrdot: Q2,
  gtreqless: eO,
  gtreqqless: tO,
  gtrless: nO,
  gtrsim: iO,
  gvertneqq: rO,
  gvnE: oO,
  Hacek: sO,
  hairsp: lO,
  half: aO,
  hamilt: cO,
  HARDcy: hO,
  hardcy: uO,
  harrcir: fO,
  harr: dO,
  hArr: pO,
  harrw: mO,
  Hat: gO,
  hbar: bO,
  Hcirc: yO,
  hcirc: vO,
  hearts: xO,
  heartsuit: kO,
  hellip: wO,
  hercon: _O,
  hfr: AO,
  Hfr: CO,
  HilbertSpace: SO,
  hksearow: TO,
  hkswarow: EO,
  hoarr: DO,
  homtht: MO,
  hookleftarrow: OO,
  hookrightarrow: LO,
  hopf: RO,
  Hopf: IO,
  horbar: BO,
  HorizontalLine: NO,
  hscr: PO,
  Hscr: FO,
  hslash: qO,
  Hstrok: HO,
  hstrok: zO,
  HumpDownHump: $O,
  HumpEqual: VO,
  hybull: UO,
  hyphen: WO,
  Iacute: jO,
  iacute: GO,
  ic: KO,
  Icirc: YO,
  icirc: JO,
  Icy: ZO,
  icy: XO,
  Idot: QO,
  IEcy: eL,
  iecy: tL,
  iexcl: nL,
  iff: iL,
  ifr: rL,
  Ifr: oL,
  Igrave: sL,
  igrave: lL,
  ii: aL,
  iiiint: cL,
  iiint: hL,
  iinfin: uL,
  iiota: fL,
  IJlig: dL,
  ijlig: pL,
  Imacr: mL,
  imacr: gL,
  image: bL,
  ImaginaryI: yL,
  imagline: vL,
  imagpart: xL,
  imath: kL,
  Im: wL,
  imof: _L,
  imped: AL,
  Implies: CL,
  incare: SL,
  in: "\u2208",
  infin: TL,
  infintie: EL,
  inodot: DL,
  intcal: ML,
  int: OL,
  Int: LL,
  integers: RL,
  Integral: IL,
  intercal: BL,
  Intersection: NL,
  intlarhk: PL,
  intprod: FL,
  InvisibleComma: qL,
  InvisibleTimes: HL,
  IOcy: zL,
  iocy: $L,
  Iogon: VL,
  iogon: UL,
  Iopf: WL,
  iopf: jL,
  Iota: GL,
  iota: KL,
  iprod: YL,
  iquest: JL,
  iscr: ZL,
  Iscr: XL,
  isin: QL,
  isindot: eR,
  isinE: tR,
  isins: nR,
  isinsv: iR,
  isinv: rR,
  it: oR,
  Itilde: sR,
  itilde: lR,
  Iukcy: aR,
  iukcy: cR,
  Iuml: hR,
  iuml: uR,
  Jcirc: fR,
  jcirc: dR,
  Jcy: pR,
  jcy: mR,
  Jfr: gR,
  jfr: bR,
  jmath: yR,
  Jopf: vR,
  jopf: xR,
  Jscr: kR,
  jscr: wR,
  Jsercy: _R,
  jsercy: AR,
  Jukcy: CR,
  jukcy: SR,
  Kappa: TR,
  kappa: ER,
  kappav: DR,
  Kcedil: MR,
  kcedil: OR,
  Kcy: LR,
  kcy: RR,
  Kfr: IR,
  kfr: BR,
  kgreen: NR,
  KHcy: PR,
  khcy: FR,
  KJcy: qR,
  kjcy: HR,
  Kopf: zR,
  kopf: $R,
  Kscr: VR,
  kscr: UR,
  lAarr: WR,
  Lacute: jR,
  lacute: GR,
  laemptyv: KR,
  lagran: YR,
  Lambda: JR,
  lambda: ZR,
  lang: XR,
  Lang: QR,
  langd: eI,
  langle: tI,
  lap: nI,
  Laplacetrf: iI,
  laquo: rI,
  larrb: oI,
  larrbfs: sI,
  larr: lI,
  Larr: aI,
  lArr: cI,
  larrfs: hI,
  larrhk: uI,
  larrlp: fI,
  larrpl: dI,
  larrsim: pI,
  larrtl: mI,
  latail: gI,
  lAtail: bI,
  lat: yI,
  late: vI,
  lates: xI,
  lbarr: kI,
  lBarr: wI,
  lbbrk: _I,
  lbrace: AI,
  lbrack: CI,
  lbrke: SI,
  lbrksld: TI,
  lbrkslu: EI,
  Lcaron: DI,
  lcaron: MI,
  Lcedil: OI,
  lcedil: LI,
  lceil: RI,
  lcub: II,
  Lcy: BI,
  lcy: NI,
  ldca: PI,
  ldquo: FI,
  ldquor: qI,
  ldrdhar: HI,
  ldrushar: zI,
  ldsh: $I,
  le: VI,
  lE: UI,
  LeftAngleBracket: WI,
  LeftArrowBar: jI,
  leftarrow: GI,
  LeftArrow: KI,
  Leftarrow: YI,
  LeftArrowRightArrow: JI,
  leftarrowtail: ZI,
  LeftCeiling: XI,
  LeftDoubleBracket: QI,
  LeftDownTeeVector: eB,
  LeftDownVectorBar: tB,
  LeftDownVector: nB,
  LeftFloor: iB,
  leftharpoondown: rB,
  leftharpoonup: oB,
  leftleftarrows: sB,
  leftrightarrow: lB,
  LeftRightArrow: aB,
  Leftrightarrow: cB,
  leftrightarrows: hB,
  leftrightharpoons: uB,
  leftrightsquigarrow: fB,
  LeftRightVector: dB,
  LeftTeeArrow: pB,
  LeftTee: mB,
  LeftTeeVector: gB,
  leftthreetimes: bB,
  LeftTriangleBar: yB,
  LeftTriangle: vB,
  LeftTriangleEqual: xB,
  LeftUpDownVector: kB,
  LeftUpTeeVector: wB,
  LeftUpVectorBar: _B,
  LeftUpVector: AB,
  LeftVectorBar: CB,
  LeftVector: SB,
  lEg: TB,
  leg: EB,
  leq: DB,
  leqq: MB,
  leqslant: OB,
  lescc: LB,
  les: RB,
  lesdot: IB,
  lesdoto: BB,
  lesdotor: NB,
  lesg: PB,
  lesges: FB,
  lessapprox: qB,
  lessdot: HB,
  lesseqgtr: zB,
  lesseqqgtr: $B,
  LessEqualGreater: VB,
  LessFullEqual: UB,
  LessGreater: WB,
  lessgtr: jB,
  LessLess: GB,
  lesssim: KB,
  LessSlantEqual: YB,
  LessTilde: JB,
  lfisht: ZB,
  lfloor: XB,
  Lfr: QB,
  lfr: eN,
  lg: tN,
  lgE: nN,
  lHar: iN,
  lhard: rN,
  lharu: oN,
  lharul: sN,
  lhblk: lN,
  LJcy: aN,
  ljcy: cN,
  llarr: hN,
  ll: uN,
  Ll: fN,
  llcorner: dN,
  Lleftarrow: pN,
  llhard: mN,
  lltri: gN,
  Lmidot: bN,
  lmidot: yN,
  lmoustache: vN,
  lmoust: xN,
  lnap: kN,
  lnapprox: wN,
  lne: _N,
  lnE: AN,
  lneq: CN,
  lneqq: SN,
  lnsim: TN,
  loang: EN,
  loarr: DN,
  lobrk: MN,
  longleftarrow: ON,
  LongLeftArrow: LN,
  Longleftarrow: RN,
  longleftrightarrow: IN,
  LongLeftRightArrow: BN,
  Longleftrightarrow: NN,
  longmapsto: PN,
  longrightarrow: FN,
  LongRightArrow: qN,
  Longrightarrow: HN,
  looparrowleft: zN,
  looparrowright: $N,
  lopar: VN,
  Lopf: UN,
  lopf: WN,
  loplus: jN,
  lotimes: GN,
  lowast: KN,
  lowbar: YN,
  LowerLeftArrow: JN,
  LowerRightArrow: ZN,
  loz: XN,
  lozenge: QN,
  lozf: eP,
  lpar: tP,
  lparlt: nP,
  lrarr: iP,
  lrcorner: rP,
  lrhar: oP,
  lrhard: sP,
  lrm: lP,
  lrtri: aP,
  lsaquo: cP,
  lscr: hP,
  Lscr: uP,
  lsh: fP,
  Lsh: dP,
  lsim: pP,
  lsime: mP,
  lsimg: gP,
  lsqb: bP,
  lsquo: yP,
  lsquor: vP,
  Lstrok: xP,
  lstrok: kP,
  ltcc: wP,
  ltcir: _P,
  lt: AP,
  LT: CP,
  Lt: SP,
  ltdot: TP,
  lthree: EP,
  ltimes: DP,
  ltlarr: MP,
  ltquest: OP,
  ltri: LP,
  ltrie: RP,
  ltrif: IP,
  ltrPar: BP,
  lurdshar: NP,
  luruhar: PP,
  lvertneqq: FP,
  lvnE: qP,
  macr: HP,
  male: zP,
  malt: $P,
  maltese: VP,
  Map: "\u2905",
  map: UP,
  mapsto: WP,
  mapstodown: jP,
  mapstoleft: GP,
  mapstoup: KP,
  marker: YP,
  mcomma: JP,
  Mcy: ZP,
  mcy: XP,
  mdash: QP,
  mDDot: eF,
  measuredangle: tF,
  MediumSpace: nF,
  Mellintrf: iF,
  Mfr: rF,
  mfr: oF,
  mho: sF,
  micro: lF,
  midast: aF,
  midcir: cF,
  mid: hF,
  middot: uF,
  minusb: fF,
  minus: dF,
  minusd: pF,
  minusdu: mF,
  MinusPlus: gF,
  mlcp: bF,
  mldr: yF,
  mnplus: vF,
  models: xF,
  Mopf: kF,
  mopf: wF,
  mp: _F,
  mscr: AF,
  Mscr: CF,
  mstpos: SF,
  Mu: TF,
  mu: EF,
  multimap: DF,
  mumap: MF,
  nabla: OF,
  Nacute: LF,
  nacute: RF,
  nang: IF,
  nap: BF,
  napE: NF,
  napid: PF,
  napos: FF,
  napprox: qF,
  natural: HF,
  naturals: zF,
  natur: $F,
  nbsp: VF,
  nbump: UF,
  nbumpe: WF,
  ncap: jF,
  Ncaron: GF,
  ncaron: KF,
  Ncedil: YF,
  ncedil: JF,
  ncong: ZF,
  ncongdot: XF,
  ncup: QF,
  Ncy: eq,
  ncy: tq,
  ndash: nq,
  nearhk: iq,
  nearr: rq,
  neArr: oq,
  nearrow: sq,
  ne: lq,
  nedot: aq,
  NegativeMediumSpace: cq,
  NegativeThickSpace: hq,
  NegativeThinSpace: uq,
  NegativeVeryThinSpace: fq,
  nequiv: dq,
  nesear: pq,
  nesim: mq,
  NestedGreaterGreater: gq,
  NestedLessLess: bq,
  NewLine: yq,
  nexist: vq,
  nexists: xq,
  Nfr: kq,
  nfr: wq,
  ngE: _q,
  nge: Aq,
  ngeq: Cq,
  ngeqq: Sq,
  ngeqslant: Tq,
  nges: Eq,
  nGg: Dq,
  ngsim: Mq,
  nGt: Oq,
  ngt: Lq,
  ngtr: Rq,
  nGtv: Iq,
  nharr: Bq,
  nhArr: Nq,
  nhpar: Pq,
  ni: Fq,
  nis: qq,
  nisd: Hq,
  niv: zq,
  NJcy: $q,
  njcy: Vq,
  nlarr: Uq,
  nlArr: Wq,
  nldr: jq,
  nlE: Gq,
  nle: Kq,
  nleftarrow: Yq,
  nLeftarrow: Jq,
  nleftrightarrow: Zq,
  nLeftrightarrow: Xq,
  nleq: Qq,
  nleqq: e3,
  nleqslant: t3,
  nles: n3,
  nless: i3,
  nLl: r3,
  nlsim: o3,
  nLt: s3,
  nlt: l3,
  nltri: a3,
  nltrie: c3,
  nLtv: h3,
  nmid: u3,
  NoBreak: f3,
  NonBreakingSpace: d3,
  nopf: p3,
  Nopf: m3,
  Not: g3,
  not: b3,
  NotCongruent: y3,
  NotCupCap: v3,
  NotDoubleVerticalBar: x3,
  NotElement: k3,
  NotEqual: w3,
  NotEqualTilde: _3,
  NotExists: A3,
  NotGreater: C3,
  NotGreaterEqual: S3,
  NotGreaterFullEqual: T3,
  NotGreaterGreater: E3,
  NotGreaterLess: D3,
  NotGreaterSlantEqual: M3,
  NotGreaterTilde: O3,
  NotHumpDownHump: L3,
  NotHumpEqual: R3,
  notin: I3,
  notindot: B3,
  notinE: N3,
  notinva: P3,
  notinvb: F3,
  notinvc: q3,
  NotLeftTriangleBar: H3,
  NotLeftTriangle: z3,
  NotLeftTriangleEqual: $3,
  NotLess: V3,
  NotLessEqual: U3,
  NotLessGreater: W3,
  NotLessLess: j3,
  NotLessSlantEqual: G3,
  NotLessTilde: K3,
  NotNestedGreaterGreater: Y3,
  NotNestedLessLess: J3,
  notni: Z3,
  notniva: X3,
  notnivb: Q3,
  notnivc: eH,
  NotPrecedes: tH,
  NotPrecedesEqual: nH,
  NotPrecedesSlantEqual: iH,
  NotReverseElement: rH,
  NotRightTriangleBar: oH,
  NotRightTriangle: sH,
  NotRightTriangleEqual: lH,
  NotSquareSubset: aH,
  NotSquareSubsetEqual: cH,
  NotSquareSuperset: hH,
  NotSquareSupersetEqual: uH,
  NotSubset: fH,
  NotSubsetEqual: dH,
  NotSucceeds: pH,
  NotSucceedsEqual: mH,
  NotSucceedsSlantEqual: gH,
  NotSucceedsTilde: bH,
  NotSuperset: yH,
  NotSupersetEqual: vH,
  NotTilde: xH,
  NotTildeEqual: kH,
  NotTildeFullEqual: wH,
  NotTildeTilde: _H,
  NotVerticalBar: AH,
  nparallel: CH,
  npar: SH,
  nparsl: TH,
  npart: EH,
  npolint: DH,
  npr: MH,
  nprcue: OH,
  nprec: LH,
  npreceq: RH,
  npre: IH,
  nrarrc: BH,
  nrarr: NH,
  nrArr: PH,
  nrarrw: FH,
  nrightarrow: qH,
  nRightarrow: HH,
  nrtri: zH,
  nrtrie: $H,
  nsc: VH,
  nsccue: UH,
  nsce: WH,
  Nscr: jH,
  nscr: GH,
  nshortmid: KH,
  nshortparallel: YH,
  nsim: JH,
  nsime: ZH,
  nsimeq: XH,
  nsmid: QH,
  nspar: ez,
  nsqsube: tz,
  nsqsupe: nz,
  nsub: iz,
  nsubE: rz,
  nsube: oz,
  nsubset: sz,
  nsubseteq: lz,
  nsubseteqq: az,
  nsucc: cz,
  nsucceq: hz,
  nsup: uz,
  nsupE: fz,
  nsupe: dz,
  nsupset: pz,
  nsupseteq: mz,
  nsupseteqq: gz,
  ntgl: bz,
  Ntilde: yz,
  ntilde: vz,
  ntlg: xz,
  ntriangleleft: kz,
  ntrianglelefteq: wz,
  ntriangleright: _z,
  ntrianglerighteq: Az,
  Nu: Cz,
  nu: Sz,
  num: Tz,
  numero: Ez,
  numsp: Dz,
  nvap: Mz,
  nvdash: Oz,
  nvDash: Lz,
  nVdash: Rz,
  nVDash: Iz,
  nvge: Bz,
  nvgt: Nz,
  nvHarr: Pz,
  nvinfin: Fz,
  nvlArr: qz,
  nvle: Hz,
  nvlt: zz,
  nvltrie: $z,
  nvrArr: Vz,
  nvrtrie: Uz,
  nvsim: Wz,
  nwarhk: jz,
  nwarr: Gz,
  nwArr: Kz,
  nwarrow: Yz,
  nwnear: Jz,
  Oacute: Zz,
  oacute: Xz,
  oast: Qz,
  Ocirc: e$,
  ocirc: t$,
  ocir: n$,
  Ocy: i$,
  ocy: r$,
  odash: o$,
  Odblac: s$,
  odblac: l$,
  odiv: a$,
  odot: c$,
  odsold: h$,
  OElig: u$,
  oelig: f$,
  ofcir: d$,
  Ofr: p$,
  ofr: m$,
  ogon: g$,
  Ograve: b$,
  ograve: y$,
  ogt: v$,
  ohbar: x$,
  ohm: k$,
  oint: w$,
  olarr: _$,
  olcir: A$,
  olcross: C$,
  oline: S$,
  olt: T$,
  Omacr: E$,
  omacr: D$,
  Omega: M$,
  omega: O$,
  Omicron: L$,
  omicron: R$,
  omid: I$,
  ominus: B$,
  Oopf: N$,
  oopf: P$,
  opar: F$,
  OpenCurlyDoubleQuote: q$,
  OpenCurlyQuote: H$,
  operp: z$,
  oplus: $$,
  orarr: V$,
  Or: U$,
  or: W$,
  ord: j$,
  order: G$,
  orderof: K$,
  ordf: Y$,
  ordm: J$,
  origof: Z$,
  oror: X$,
  orslope: Q$,
  orv: e8,
  oS: t8,
  Oscr: n8,
  oscr: i8,
  Oslash: r8,
  oslash: o8,
  osol: s8,
  Otilde: l8,
  otilde: a8,
  otimesas: c8,
  Otimes: h8,
  otimes: u8,
  Ouml: f8,
  ouml: d8,
  ovbar: p8,
  OverBar: m8,
  OverBrace: g8,
  OverBracket: b8,
  OverParenthesis: y8,
  para: v8,
  parallel: x8,
  par: k8,
  parsim: w8,
  parsl: _8,
  part: A8,
  PartialD: C8,
  Pcy: S8,
  pcy: T8,
  percnt: E8,
  period: D8,
  permil: M8,
  perp: O8,
  pertenk: L8,
  Pfr: R8,
  pfr: I8,
  Phi: B8,
  phi: N8,
  phiv: P8,
  phmmat: F8,
  phone: q8,
  Pi: H8,
  pi: z8,
  pitchfork: $8,
  piv: V8,
  planck: U8,
  planckh: W8,
  plankv: j8,
  plusacir: G8,
  plusb: K8,
  pluscir: Y8,
  plus: J8,
  plusdo: Z8,
  plusdu: X8,
  pluse: Q8,
  PlusMinus: eV,
  plusmn: tV,
  plussim: nV,
  plustwo: iV,
  pm: rV,
  Poincareplane: oV,
  pointint: sV,
  popf: lV,
  Popf: aV,
  pound: cV,
  prap: hV,
  Pr: uV,
  pr: fV,
  prcue: dV,
  precapprox: pV,
  prec: mV,
  preccurlyeq: gV,
  Precedes: bV,
  PrecedesEqual: yV,
  PrecedesSlantEqual: vV,
  PrecedesTilde: xV,
  preceq: kV,
  precnapprox: wV,
  precneqq: _V,
  precnsim: AV,
  pre: CV,
  prE: SV,
  precsim: TV,
  prime: EV,
  Prime: DV,
  primes: MV,
  prnap: OV,
  prnE: LV,
  prnsim: RV,
  prod: IV,
  Product: BV,
  profalar: NV,
  profline: PV,
  profsurf: FV,
  prop: qV,
  Proportional: HV,
  Proportion: zV,
  propto: $V,
  prsim: VV,
  prurel: UV,
  Pscr: WV,
  pscr: jV,
  Psi: GV,
  psi: KV,
  puncsp: YV,
  Qfr: JV,
  qfr: ZV,
  qint: XV,
  qopf: QV,
  Qopf: e4,
  qprime: t4,
  Qscr: n4,
  qscr: i4,
  quaternions: r4,
  quatint: o4,
  quest: s4,
  questeq: l4,
  quot: a4,
  QUOT: c4,
  rAarr: h4,
  race: u4,
  Racute: f4,
  racute: d4,
  radic: p4,
  raemptyv: m4,
  rang: g4,
  Rang: b4,
  rangd: y4,
  range: v4,
  rangle: x4,
  raquo: k4,
  rarrap: w4,
  rarrb: _4,
  rarrbfs: A4,
  rarrc: C4,
  rarr: S4,
  Rarr: T4,
  rArr: E4,
  rarrfs: D4,
  rarrhk: M4,
  rarrlp: O4,
  rarrpl: L4,
  rarrsim: R4,
  Rarrtl: I4,
  rarrtl: B4,
  rarrw: N4,
  ratail: P4,
  rAtail: F4,
  ratio: q4,
  rationals: H4,
  rbarr: z4,
  rBarr: $4,
  RBarr: V4,
  rbbrk: U4,
  rbrace: W4,
  rbrack: j4,
  rbrke: G4,
  rbrksld: K4,
  rbrkslu: Y4,
  Rcaron: J4,
  rcaron: Z4,
  Rcedil: X4,
  rcedil: Q4,
  rceil: e9,
  rcub: t9,
  Rcy: n9,
  rcy: i9,
  rdca: r9,
  rdldhar: o9,
  rdquo: s9,
  rdquor: l9,
  rdsh: a9,
  real: c9,
  realine: h9,
  realpart: u9,
  reals: f9,
  Re: d9,
  rect: p9,
  reg: m9,
  REG: g9,
  ReverseElement: b9,
  ReverseEquilibrium: y9,
  ReverseUpEquilibrium: v9,
  rfisht: x9,
  rfloor: k9,
  rfr: w9,
  Rfr: _9,
  rHar: A9,
  rhard: C9,
  rharu: S9,
  rharul: T9,
  Rho: E9,
  rho: D9,
  rhov: M9,
  RightAngleBracket: O9,
  RightArrowBar: L9,
  rightarrow: R9,
  RightArrow: I9,
  Rightarrow: B9,
  RightArrowLeftArrow: N9,
  rightarrowtail: P9,
  RightCeiling: F9,
  RightDoubleBracket: q9,
  RightDownTeeVector: H9,
  RightDownVectorBar: z9,
  RightDownVector: $9,
  RightFloor: V9,
  rightharpoondown: U9,
  rightharpoonup: W9,
  rightleftarrows: j9,
  rightleftharpoons: G9,
  rightrightarrows: K9,
  rightsquigarrow: Y9,
  RightTeeArrow: J9,
  RightTee: Z9,
  RightTeeVector: X9,
  rightthreetimes: Q9,
  RightTriangleBar: e5,
  RightTriangle: t5,
  RightTriangleEqual: n5,
  RightUpDownVector: i5,
  RightUpTeeVector: r5,
  RightUpVectorBar: o5,
  RightUpVector: s5,
  RightVectorBar: l5,
  RightVector: a5,
  ring: c5,
  risingdotseq: h5,
  rlarr: u5,
  rlhar: f5,
  rlm: d5,
  rmoustache: p5,
  rmoust: m5,
  rnmid: g5,
  roang: b5,
  roarr: y5,
  robrk: v5,
  ropar: x5,
  ropf: k5,
  Ropf: w5,
  roplus: _5,
  rotimes: A5,
  RoundImplies: C5,
  rpar: S5,
  rpargt: T5,
  rppolint: E5,
  rrarr: D5,
  Rrightarrow: M5,
  rsaquo: O5,
  rscr: L5,
  Rscr: R5,
  rsh: I5,
  Rsh: B5,
  rsqb: N5,
  rsquo: P5,
  rsquor: F5,
  rthree: q5,
  rtimes: H5,
  rtri: z5,
  rtrie: $5,
  rtrif: V5,
  rtriltri: U5,
  RuleDelayed: W5,
  ruluhar: j5,
  rx: G5,
  Sacute: K5,
  sacute: Y5,
  sbquo: J5,
  scap: Z5,
  Scaron: X5,
  scaron: Q5,
  Sc: eU,
  sc: tU,
  sccue: nU,
  sce: iU,
  scE: rU,
  Scedil: oU,
  scedil: sU,
  Scirc: lU,
  scirc: aU,
  scnap: cU,
  scnE: hU,
  scnsim: uU,
  scpolint: fU,
  scsim: dU,
  Scy: pU,
  scy: mU,
  sdotb: gU,
  sdot: bU,
  sdote: yU,
  searhk: vU,
  searr: xU,
  seArr: kU,
  searrow: wU,
  sect: _U,
  semi: AU,
  seswar: CU,
  setminus: SU,
  setmn: TU,
  sext: EU,
  Sfr: DU,
  sfr: MU,
  sfrown: OU,
  sharp: LU,
  SHCHcy: RU,
  shchcy: IU,
  SHcy: BU,
  shcy: NU,
  ShortDownArrow: PU,
  ShortLeftArrow: FU,
  shortmid: qU,
  shortparallel: HU,
  ShortRightArrow: zU,
  ShortUpArrow: $U,
  shy: VU,
  Sigma: UU,
  sigma: WU,
  sigmaf: jU,
  sigmav: GU,
  sim: KU,
  simdot: YU,
  sime: JU,
  simeq: ZU,
  simg: XU,
  simgE: QU,
  siml: eW,
  simlE: tW,
  simne: nW,
  simplus: iW,
  simrarr: rW,
  slarr: oW,
  SmallCircle: sW,
  smallsetminus: lW,
  smashp: aW,
  smeparsl: cW,
  smid: hW,
  smile: uW,
  smt: fW,
  smte: dW,
  smtes: pW,
  SOFTcy: mW,
  softcy: gW,
  solbar: bW,
  solb: yW,
  sol: vW,
  Sopf: xW,
  sopf: kW,
  spades: wW,
  spadesuit: _W,
  spar: AW,
  sqcap: CW,
  sqcaps: SW,
  sqcup: TW,
  sqcups: EW,
  Sqrt: DW,
  sqsub: MW,
  sqsube: OW,
  sqsubset: LW,
  sqsubseteq: RW,
  sqsup: IW,
  sqsupe: BW,
  sqsupset: NW,
  sqsupseteq: PW,
  square: FW,
  Square: qW,
  SquareIntersection: HW,
  SquareSubset: zW,
  SquareSubsetEqual: $W,
  SquareSuperset: VW,
  SquareSupersetEqual: UW,
  SquareUnion: WW,
  squarf: jW,
  squ: GW,
  squf: KW,
  srarr: YW,
  Sscr: JW,
  sscr: ZW,
  ssetmn: XW,
  ssmile: QW,
  sstarf: e6,
  Star: t6,
  star: n6,
  starf: i6,
  straightepsilon: r6,
  straightphi: o6,
  strns: s6,
  sub: l6,
  Sub: a6,
  subdot: c6,
  subE: h6,
  sube: u6,
  subedot: f6,
  submult: d6,
  subnE: p6,
  subne: m6,
  subplus: g6,
  subrarr: b6,
  subset: y6,
  Subset: v6,
  subseteq: x6,
  subseteqq: k6,
  SubsetEqual: w6,
  subsetneq: _6,
  subsetneqq: A6,
  subsim: C6,
  subsub: S6,
  subsup: T6,
  succapprox: E6,
  succ: D6,
  succcurlyeq: M6,
  Succeeds: O6,
  SucceedsEqual: L6,
  SucceedsSlantEqual: R6,
  SucceedsTilde: I6,
  succeq: B6,
  succnapprox: N6,
  succneqq: P6,
  succnsim: F6,
  succsim: q6,
  SuchThat: H6,
  sum: z6,
  Sum: $6,
  sung: V6,
  sup1: U6,
  sup2: W6,
  sup3: j6,
  sup: G6,
  Sup: K6,
  supdot: Y6,
  supdsub: J6,
  supE: Z6,
  supe: X6,
  supedot: Q6,
  Superset: ej,
  SupersetEqual: tj,
  suphsol: nj,
  suphsub: ij,
  suplarr: rj,
  supmult: oj,
  supnE: sj,
  supne: lj,
  supplus: aj,
  supset: cj,
  Supset: hj,
  supseteq: uj,
  supseteqq: fj,
  supsetneq: dj,
  supsetneqq: pj,
  supsim: mj,
  supsub: gj,
  supsup: bj,
  swarhk: yj,
  swarr: vj,
  swArr: xj,
  swarrow: kj,
  swnwar: wj,
  szlig: _j,
  Tab: Aj,
  target: Cj,
  Tau: Sj,
  tau: Tj,
  tbrk: Ej,
  Tcaron: Dj,
  tcaron: Mj,
  Tcedil: Oj,
  tcedil: Lj,
  Tcy: Rj,
  tcy: Ij,
  tdot: Bj,
  telrec: Nj,
  Tfr: Pj,
  tfr: Fj,
  there4: qj,
  therefore: Hj,
  Therefore: zj,
  Theta: $j,
  theta: Vj,
  thetasym: Uj,
  thetav: Wj,
  thickapprox: jj,
  thicksim: Gj,
  ThickSpace: Kj,
  ThinSpace: Yj,
  thinsp: Jj,
  thkap: Zj,
  thksim: Xj,
  THORN: Qj,
  thorn: e7,
  tilde: t7,
  Tilde: n7,
  TildeEqual: i7,
  TildeFullEqual: r7,
  TildeTilde: o7,
  timesbar: s7,
  timesb: l7,
  times: a7,
  timesd: c7,
  tint: h7,
  toea: u7,
  topbot: f7,
  topcir: d7,
  top: p7,
  Topf: m7,
  topf: g7,
  topfork: b7,
  tosa: y7,
  tprime: v7,
  trade: x7,
  TRADE: k7,
  triangle: w7,
  triangledown: _7,
  triangleleft: A7,
  trianglelefteq: C7,
  triangleq: S7,
  triangleright: T7,
  trianglerighteq: E7,
  tridot: D7,
  trie: M7,
  triminus: O7,
  TripleDot: L7,
  triplus: R7,
  trisb: I7,
  tritime: B7,
  trpezium: N7,
  Tscr: P7,
  tscr: F7,
  TScy: q7,
  tscy: H7,
  TSHcy: z7,
  tshcy: $7,
  Tstrok: V7,
  tstrok: U7,
  twixt: W7,
  twoheadleftarrow: j7,
  twoheadrightarrow: G7,
  Uacute: K7,
  uacute: Y7,
  uarr: J7,
  Uarr: Z7,
  uArr: X7,
  Uarrocir: Q7,
  Ubrcy: eG,
  ubrcy: tG,
  Ubreve: nG,
  ubreve: iG,
  Ucirc: rG,
  ucirc: oG,
  Ucy: sG,
  ucy: lG,
  udarr: aG,
  Udblac: cG,
  udblac: hG,
  udhar: uG,
  ufisht: fG,
  Ufr: dG,
  ufr: pG,
  Ugrave: mG,
  ugrave: gG,
  uHar: bG,
  uharl: yG,
  uharr: vG,
  uhblk: xG,
  ulcorn: kG,
  ulcorner: wG,
  ulcrop: _G,
  ultri: AG,
  Umacr: CG,
  umacr: SG,
  uml: TG,
  UnderBar: EG,
  UnderBrace: DG,
  UnderBracket: MG,
  UnderParenthesis: OG,
  Union: LG,
  UnionPlus: RG,
  Uogon: IG,
  uogon: BG,
  Uopf: NG,
  uopf: PG,
  UpArrowBar: FG,
  uparrow: qG,
  UpArrow: HG,
  Uparrow: zG,
  UpArrowDownArrow: $G,
  updownarrow: VG,
  UpDownArrow: UG,
  Updownarrow: WG,
  UpEquilibrium: jG,
  upharpoonleft: GG,
  upharpoonright: KG,
  uplus: YG,
  UpperLeftArrow: JG,
  UpperRightArrow: ZG,
  upsi: XG,
  Upsi: QG,
  upsih: eK,
  Upsilon: tK,
  upsilon: nK,
  UpTeeArrow: iK,
  UpTee: rK,
  upuparrows: oK,
  urcorn: sK,
  urcorner: lK,
  urcrop: aK,
  Uring: cK,
  uring: hK,
  urtri: uK,
  Uscr: fK,
  uscr: dK,
  utdot: pK,
  Utilde: mK,
  utilde: gK,
  utri: bK,
  utrif: yK,
  uuarr: vK,
  Uuml: xK,
  uuml: kK,
  uwangle: wK,
  vangrt: _K,
  varepsilon: AK,
  varkappa: CK,
  varnothing: SK,
  varphi: TK,
  varpi: EK,
  varpropto: DK,
  varr: MK,
  vArr: OK,
  varrho: LK,
  varsigma: RK,
  varsubsetneq: IK,
  varsubsetneqq: BK,
  varsupsetneq: NK,
  varsupsetneqq: PK,
  vartheta: FK,
  vartriangleleft: qK,
  vartriangleright: HK,
  vBar: zK,
  Vbar: $K,
  vBarv: VK,
  Vcy: UK,
  vcy: WK,
  vdash: jK,
  vDash: GK,
  Vdash: KK,
  VDash: YK,
  Vdashl: JK,
  veebar: ZK,
  vee: XK,
  Vee: QK,
  veeeq: eY,
  vellip: tY,
  verbar: nY,
  Verbar: iY,
  vert: rY,
  Vert: oY,
  VerticalBar: sY,
  VerticalLine: lY,
  VerticalSeparator: aY,
  VerticalTilde: cY,
  VeryThinSpace: hY,
  Vfr: uY,
  vfr: fY,
  vltri: dY,
  vnsub: pY,
  vnsup: mY,
  Vopf: gY,
  vopf: bY,
  vprop: yY,
  vrtri: vY,
  Vscr: xY,
  vscr: kY,
  vsubnE: wY,
  vsubne: _Y,
  vsupnE: AY,
  vsupne: CY,
  Vvdash: SY,
  vzigzag: TY,
  Wcirc: EY,
  wcirc: DY,
  wedbar: MY,
  wedge: OY,
  Wedge: LY,
  wedgeq: RY,
  weierp: IY,
  Wfr: BY,
  wfr: NY,
  Wopf: PY,
  wopf: FY,
  wp: qY,
  wr: HY,
  wreath: zY,
  Wscr: $Y,
  wscr: VY,
  xcap: UY,
  xcirc: WY,
  xcup: jY,
  xdtri: GY,
  Xfr: KY,
  xfr: YY,
  xharr: JY,
  xhArr: ZY,
  Xi: XY,
  xi: QY,
  xlarr: eJ,
  xlArr: tJ,
  xmap: nJ,
  xnis: iJ,
  xodot: rJ,
  Xopf: oJ,
  xopf: sJ,
  xoplus: lJ,
  xotime: aJ,
  xrarr: cJ,
  xrArr: hJ,
  Xscr: uJ,
  xscr: fJ,
  xsqcup: dJ,
  xuplus: pJ,
  xutri: mJ,
  xvee: gJ,
  xwedge: bJ,
  Yacute: yJ,
  yacute: vJ,
  YAcy: xJ,
  yacy: kJ,
  Ycirc: wJ,
  ycirc: _J,
  Ycy: AJ,
  ycy: CJ,
  yen: SJ,
  Yfr: TJ,
  yfr: EJ,
  YIcy: DJ,
  yicy: MJ,
  Yopf: OJ,
  yopf: LJ,
  Yscr: RJ,
  yscr: IJ,
  YUcy: BJ,
  yucy: NJ,
  yuml: PJ,
  Yuml: FJ,
  Zacute: qJ,
  zacute: HJ,
  Zcaron: zJ,
  zcaron: $J,
  Zcy: VJ,
  zcy: UJ,
  Zdot: WJ,
  zdot: jJ,
  zeetrf: GJ,
  ZeroWidthSpace: KJ,
  Zeta: YJ,
  zeta: JJ,
  zfr: ZJ,
  Zfr: XJ,
  ZHcy: QJ,
  zhcy: eZ,
  zigrarr: tZ,
  zopf: nZ,
  Zopf: iZ,
  Zscr: rZ,
  zscr: oZ,
  zwj: sZ,
  zwnj: lZ
};
(function(n) {
  n.exports = aZ;
})(Ka);
var Ya = /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4E\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/, bi = {}, Nh = {};
function cZ(n) {
  var e, t, i = Nh[n];
  if (i)
    return i;
  for (i = Nh[n] = [], e = 0; e < 128; e++)
    t = String.fromCharCode(e), /^[0-9a-z]$/i.test(t) ? i.push(t) : i.push("%" + ("0" + e.toString(16).toUpperCase()).slice(-2));
  for (e = 0; e < n.length; e++)
    i[n.charCodeAt(e)] = n[e];
  return i;
}
function ts(n, e, t) {
  var i, r, o, s, l, a = "";
  for (typeof e != "string" && (t = e, e = ts.defaultChars), typeof t > "u" && (t = !0), l = cZ(e), i = 0, r = n.length; i < r; i++) {
    if (o = n.charCodeAt(i), t && o === 37 && i + 2 < r && /^[0-9a-f]{2}$/i.test(n.slice(i + 1, i + 3))) {
      a += n.slice(i, i + 3), i += 2;
      continue;
    }
    if (o < 128) {
      a += l[o];
      continue;
    }
    if (o >= 55296 && o <= 57343) {
      if (o >= 55296 && o <= 56319 && i + 1 < r && (s = n.charCodeAt(i + 1), s >= 56320 && s <= 57343)) {
        a += encodeURIComponent(n[i] + n[i + 1]), i++;
        continue;
      }
      a += "%EF%BF%BD";
      continue;
    }
    a += encodeURIComponent(n[i]);
  }
  return a;
}
ts.defaultChars = ";/?:@&=+$,-_.!~*'()#";
ts.componentChars = "-_.!~*'()";
var hZ = ts, Ph = {};
function uZ(n) {
  var e, t, i = Ph[n];
  if (i)
    return i;
  for (i = Ph[n] = [], e = 0; e < 128; e++)
    t = String.fromCharCode(e), i.push(t);
  for (e = 0; e < n.length; e++)
    t = n.charCodeAt(e), i[t] = "%" + ("0" + t.toString(16).toUpperCase()).slice(-2);
  return i;
}
function ns(n, e) {
  var t;
  return typeof e != "string" && (e = ns.defaultChars), t = uZ(e), n.replace(/(%[a-f0-9]{2})+/gi, function(i) {
    var r, o, s, l, a, c, h, u = "";
    for (r = 0, o = i.length; r < o; r += 3) {
      if (s = parseInt(i.slice(r + 1, r + 3), 16), s < 128) {
        u += t[s];
        continue;
      }
      if ((s & 224) === 192 && r + 3 < o && (l = parseInt(i.slice(r + 4, r + 6), 16), (l & 192) === 128)) {
        h = s << 6 & 1984 | l & 63, h < 128 ? u += "\uFFFD\uFFFD" : u += String.fromCharCode(h), r += 3;
        continue;
      }
      if ((s & 240) === 224 && r + 6 < o && (l = parseInt(i.slice(r + 4, r + 6), 16), a = parseInt(i.slice(r + 7, r + 9), 16), (l & 192) === 128 && (a & 192) === 128)) {
        h = s << 12 & 61440 | l << 6 & 4032 | a & 63, h < 2048 || h >= 55296 && h <= 57343 ? u += "\uFFFD\uFFFD\uFFFD" : u += String.fromCharCode(h), r += 6;
        continue;
      }
      if ((s & 248) === 240 && r + 9 < o && (l = parseInt(i.slice(r + 4, r + 6), 16), a = parseInt(i.slice(r + 7, r + 9), 16), c = parseInt(i.slice(r + 10, r + 12), 16), (l & 192) === 128 && (a & 192) === 128 && (c & 192) === 128)) {
        h = s << 18 & 1835008 | l << 12 & 258048 | a << 6 & 4032 | c & 63, h < 65536 || h > 1114111 ? u += "\uFFFD\uFFFD\uFFFD\uFFFD" : (h -= 65536, u += String.fromCharCode(55296 + (h >> 10), 56320 + (h & 1023))), r += 9;
        continue;
      }
      u += "\uFFFD";
    }
    return u;
  });
}
ns.defaultChars = ";/?:@&=+$,#";
ns.componentChars = "";
var fZ = ns, dZ = function(e) {
  var t = "";
  return t += e.protocol || "", t += e.slashes ? "//" : "", t += e.auth ? e.auth + "@" : "", e.hostname && e.hostname.indexOf(":") !== -1 ? t += "[" + e.hostname + "]" : t += e.hostname || "", t += e.port ? ":" + e.port : "", t += e.pathname || "", t += e.search || "", t += e.hash || "", t;
};
function _o() {
  this.protocol = null, this.slashes = null, this.auth = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.pathname = null;
}
var pZ = /^([a-z0-9.+-]+:)/i, mZ = /:[0-9]*$/, gZ = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/, bZ = ["<", ">", '"', "`", " ", "\r", `
`, "	"], yZ = ["{", "}", "|", "\\", "^", "`"].concat(bZ), vZ = ["'"].concat(yZ), Fh = ["%", "/", "?", ";", "#"].concat(vZ), qh = ["/", "?", "#"], xZ = 255, Hh = /^[+a-z0-9A-Z_-]{0,63}$/, kZ = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, zh = {
  javascript: !0,
  "javascript:": !0
}, $h = {
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
function wZ(n, e) {
  if (n && n instanceof _o)
    return n;
  var t = new _o();
  return t.parse(n, e), t;
}
_o.prototype.parse = function(n, e) {
  var t, i, r, o, s, l = n;
  if (l = l.trim(), !e && n.split("#").length === 1) {
    var a = gZ.exec(l);
    if (a)
      return this.pathname = a[1], a[2] && (this.search = a[2]), this;
  }
  var c = pZ.exec(l);
  if (c && (c = c[0], r = c.toLowerCase(), this.protocol = c, l = l.substr(c.length)), (e || c || l.match(/^\/\/[^@\/]+@[^@\/]+/)) && (s = l.substr(0, 2) === "//", s && !(c && zh[c]) && (l = l.substr(2), this.slashes = !0)), !zh[c] && (s || c && !$h[c])) {
    var h = -1;
    for (t = 0; t < qh.length; t++)
      o = l.indexOf(qh[t]), o !== -1 && (h === -1 || o < h) && (h = o);
    var u, f;
    for (h === -1 ? f = l.lastIndexOf("@") : f = l.lastIndexOf("@", h), f !== -1 && (u = l.slice(0, f), l = l.slice(f + 1), this.auth = u), h = -1, t = 0; t < Fh.length; t++)
      o = l.indexOf(Fh[t]), o !== -1 && (h === -1 || o < h) && (h = o);
    h === -1 && (h = l.length), l[h - 1] === ":" && h--;
    var d = l.slice(0, h);
    l = l.slice(h), this.parseHost(d), this.hostname = this.hostname || "";
    var p = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
    if (!p) {
      var m = this.hostname.split(/\./);
      for (t = 0, i = m.length; t < i; t++) {
        var g = m[t];
        if (!!g && !g.match(Hh)) {
          for (var b = "", y = 0, w = g.length; y < w; y++)
            g.charCodeAt(y) > 127 ? b += "x" : b += g[y];
          if (!b.match(Hh)) {
            var x = m.slice(0, t), _ = m.slice(t + 1), k = g.match(kZ);
            k && (x.push(k[1]), _.unshift(k[2])), _.length && (l = _.join(".") + l), this.hostname = x.join(".");
            break;
          }
        }
      }
    }
    this.hostname.length > xZ && (this.hostname = ""), p && (this.hostname = this.hostname.substr(1, this.hostname.length - 2));
  }
  var C = l.indexOf("#");
  C !== -1 && (this.hash = l.substr(C), l = l.slice(0, C));
  var N = l.indexOf("?");
  return N !== -1 && (this.search = l.substr(N), l = l.slice(0, N)), l && (this.pathname = l), $h[r] && this.hostname && !this.pathname && (this.pathname = ""), this;
};
_o.prototype.parseHost = function(n) {
  var e = mZ.exec(n);
  e && (e = e[0], e !== ":" && (this.port = e.substr(1)), n = n.substr(0, n.length - e.length)), n && (this.hostname = n);
};
var _Z = wZ;
bi.encode = hZ;
bi.decode = fZ;
bi.format = dZ;
bi.parse = _Z;
var vn = {}, js, Vh;
function vp() {
  return Vh || (Vh = 1, js = /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/), js;
}
var Gs, Uh;
function xp() {
  return Uh || (Uh = 1, Gs = /[\0-\x1F\x7F-\x9F]/), Gs;
}
var Ks, Wh;
function AZ() {
  return Wh || (Wh = 1, Ks = /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/), Ks;
}
var Ys, jh;
function kp() {
  return jh || (jh = 1, Ys = /[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/), Ys;
}
var Gh;
function CZ() {
  return Gh || (Gh = 1, vn.Any = vp(), vn.Cc = xp(), vn.Cf = AZ(), vn.P = Ya, vn.Z = kp()), vn;
}
(function(n) {
  function e(T) {
    return Object.prototype.toString.call(T);
  }
  function t(T) {
    return e(T) === "[object String]";
  }
  var i = Object.prototype.hasOwnProperty;
  function r(T, z) {
    return i.call(T, z);
  }
  function o(T) {
    var z = Array.prototype.slice.call(arguments, 1);
    return z.forEach(function(q) {
      if (!!q) {
        if (typeof q != "object")
          throw new TypeError(q + "must be object");
        Object.keys(q).forEach(function(he) {
          T[he] = q[he];
        });
      }
    }), T;
  }
  function s(T, z, q) {
    return [].concat(T.slice(0, z), q, T.slice(z + 1));
  }
  function l(T) {
    return !(T >= 55296 && T <= 57343 || T >= 64976 && T <= 65007 || (T & 65535) === 65535 || (T & 65535) === 65534 || T >= 0 && T <= 8 || T === 11 || T >= 14 && T <= 31 || T >= 127 && T <= 159 || T > 1114111);
  }
  function a(T) {
    if (T > 65535) {
      T -= 65536;
      var z = 55296 + (T >> 10), q = 56320 + (T & 1023);
      return String.fromCharCode(z, q);
    }
    return String.fromCharCode(T);
  }
  var c = /\\([!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~])/g, h = /&([a-z#][a-z0-9]{1,31});/gi, u = new RegExp(c.source + "|" + h.source, "gi"), f = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i, d = Ka.exports;
  function p(T, z) {
    var q = 0;
    return r(d, z) ? d[z] : z.charCodeAt(0) === 35 && f.test(z) && (q = z[1].toLowerCase() === "x" ? parseInt(z.slice(2), 16) : parseInt(z.slice(1), 10), l(q)) ? a(q) : T;
  }
  function m(T) {
    return T.indexOf("\\") < 0 ? T : T.replace(c, "$1");
  }
  function g(T) {
    return T.indexOf("\\") < 0 && T.indexOf("&") < 0 ? T : T.replace(u, function(z, q, he) {
      return q || p(z, he);
    });
  }
  var b = /[&<>"]/, y = /[&<>"]/g, w = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;"
  };
  function x(T) {
    return w[T];
  }
  function _(T) {
    return b.test(T) ? T.replace(y, x) : T;
  }
  var k = /[.?*+^$[\]\\(){}|-]/g;
  function C(T) {
    return T.replace(k, "\\$&");
  }
  function N(T) {
    switch (T) {
      case 9:
      case 32:
        return !0;
    }
    return !1;
  }
  function L(T) {
    if (T >= 8192 && T <= 8202)
      return !0;
    switch (T) {
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
  var D = Ya;
  function H(T) {
    return D.test(T);
  }
  function Q(T) {
    switch (T) {
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
  function G(T) {
    return T = T.trim().replace(/\s+/g, " "), "\u1E9E".toLowerCase() === "\u1E7E" && (T = T.replace(/ẞ/g, "\xDF")), T.toLowerCase().toUpperCase();
  }
  n.lib = {}, n.lib.mdurl = bi, n.lib.ucmicro = CZ(), n.assign = o, n.isString = t, n.has = r, n.unescapeMd = m, n.unescapeAll = g, n.isValidEntityCode = l, n.fromCodePoint = a, n.escapeHtml = _, n.arrayReplaceAt = s, n.isSpace = N, n.isWhiteSpace = L, n.isMdAsciiPunct = Q, n.isPunctChar = H, n.escapeRE = C, n.normalizeReference = G;
})(Z);
var is = {}, SZ = function(e, t, i) {
  var r, o, s, l, a = -1, c = e.posMax, h = e.pos;
  for (e.pos = t + 1, r = 1; e.pos < c; ) {
    if (s = e.src.charCodeAt(e.pos), s === 93 && (r--, r === 0)) {
      o = !0;
      break;
    }
    if (l = e.pos, e.md.inline.skipToken(e), s === 91) {
      if (l === e.pos - 1)
        r++;
      else if (i)
        return e.pos = h, -1;
    }
  }
  return o && (a = e.pos), e.pos = h, a;
}, Kh = Z.unescapeAll, TZ = function(e, t, i) {
  var r, o, s = 0, l = t, a = {
    ok: !1,
    pos: 0,
    lines: 0,
    str: ""
  };
  if (e.charCodeAt(t) === 60) {
    for (t++; t < i; ) {
      if (r = e.charCodeAt(t), r === 10 || r === 60)
        return a;
      if (r === 62)
        return a.pos = t + 1, a.str = Kh(e.slice(l + 1, t)), a.ok = !0, a;
      if (r === 92 && t + 1 < i) {
        t += 2;
        continue;
      }
      t++;
    }
    return a;
  }
  for (o = 0; t < i && (r = e.charCodeAt(t), !(r === 32 || r < 32 || r === 127)); ) {
    if (r === 92 && t + 1 < i) {
      if (e.charCodeAt(t + 1) === 32)
        break;
      t += 2;
      continue;
    }
    if (r === 40 && (o++, o > 32))
      return a;
    if (r === 41) {
      if (o === 0)
        break;
      o--;
    }
    t++;
  }
  return l === t || o !== 0 || (a.str = Kh(e.slice(l, t)), a.lines = s, a.pos = t, a.ok = !0), a;
}, EZ = Z.unescapeAll, DZ = function(e, t, i) {
  var r, o, s = 0, l = t, a = {
    ok: !1,
    pos: 0,
    lines: 0,
    str: ""
  };
  if (t >= i || (o = e.charCodeAt(t), o !== 34 && o !== 39 && o !== 40))
    return a;
  for (t++, o === 40 && (o = 41); t < i; ) {
    if (r = e.charCodeAt(t), r === o)
      return a.pos = t + 1, a.lines = s, a.str = EZ(e.slice(l + 1, t)), a.ok = !0, a;
    if (r === 40 && o === 41)
      return a;
    r === 10 ? s++ : r === 92 && t + 1 < i && (t++, e.charCodeAt(t) === 10 && s++), t++;
  }
  return a;
};
is.parseLinkLabel = SZ;
is.parseLinkDestination = TZ;
is.parseLinkTitle = DZ;
var MZ = Z.assign, OZ = Z.unescapeAll, Ln = Z.escapeHtml, It = {};
It.code_inline = function(n, e, t, i, r) {
  var o = n[e];
  return "<code" + r.renderAttrs(o) + ">" + Ln(n[e].content) + "</code>";
};
It.code_block = function(n, e, t, i, r) {
  var o = n[e];
  return "<pre" + r.renderAttrs(o) + "><code>" + Ln(n[e].content) + `</code></pre>
`;
};
It.fence = function(n, e, t, i, r) {
  var o = n[e], s = o.info ? OZ(o.info).trim() : "", l = "", a = "", c, h, u, f, d;
  return s && (u = s.split(/(\s+)/g), l = u[0], a = u.slice(2).join("")), t.highlight ? c = t.highlight(o.content, l, a) || Ln(o.content) : c = Ln(o.content), c.indexOf("<pre") === 0 ? c + `
` : s ? (h = o.attrIndex("class"), f = o.attrs ? o.attrs.slice() : [], h < 0 ? f.push(["class", t.langPrefix + l]) : (f[h] = f[h].slice(), f[h][1] += " " + t.langPrefix + l), d = {
    attrs: f
  }, "<pre><code" + r.renderAttrs(d) + ">" + c + `</code></pre>
`) : "<pre><code" + r.renderAttrs(o) + ">" + c + `</code></pre>
`;
};
It.image = function(n, e, t, i, r) {
  var o = n[e];
  return o.attrs[o.attrIndex("alt")][1] = r.renderInlineAsText(o.children, t, i), r.renderToken(n, e, t);
};
It.hardbreak = function(n, e, t) {
  return t.xhtmlOut ? `<br />
` : `<br>
`;
};
It.softbreak = function(n, e, t) {
  return t.breaks ? t.xhtmlOut ? `<br />
` : `<br>
` : `
`;
};
It.text = function(n, e) {
  return Ln(n[e].content);
};
It.html_block = function(n, e) {
  return n[e].content;
};
It.html_inline = function(n, e) {
  return n[e].content;
};
function yi() {
  this.rules = MZ({}, It);
}
yi.prototype.renderAttrs = function(e) {
  var t, i, r;
  if (!e.attrs)
    return "";
  for (r = "", t = 0, i = e.attrs.length; t < i; t++)
    r += " " + Ln(e.attrs[t][0]) + '="' + Ln(e.attrs[t][1]) + '"';
  return r;
};
yi.prototype.renderToken = function(e, t, i) {
  var r, o = "", s = !1, l = e[t];
  return l.hidden ? "" : (l.block && l.nesting !== -1 && t && e[t - 1].hidden && (o += `
`), o += (l.nesting === -1 ? "</" : "<") + l.tag, o += this.renderAttrs(l), l.nesting === 0 && i.xhtmlOut && (o += " /"), l.block && (s = !0, l.nesting === 1 && t + 1 < e.length && (r = e[t + 1], (r.type === "inline" || r.hidden || r.nesting === -1 && r.tag === l.tag) && (s = !1))), o += s ? `>
` : ">", o);
};
yi.prototype.renderInline = function(n, e, t) {
  for (var i, r = "", o = this.rules, s = 0, l = n.length; s < l; s++)
    i = n[s].type, typeof o[i] < "u" ? r += o[i](n, s, e, t, this) : r += this.renderToken(n, s, e);
  return r;
};
yi.prototype.renderInlineAsText = function(n, e, t) {
  for (var i = "", r = 0, o = n.length; r < o; r++)
    n[r].type === "text" ? i += n[r].content : n[r].type === "image" ? i += this.renderInlineAsText(n[r].children, e, t) : n[r].type === "softbreak" && (i += `
`);
  return i;
};
yi.prototype.render = function(n, e, t) {
  var i, r, o, s = "", l = this.rules;
  for (i = 0, r = n.length; i < r; i++)
    o = n[i].type, o === "inline" ? s += this.renderInline(n[i].children, e, t) : typeof l[o] < "u" ? s += l[n[i].type](n, i, e, t, this) : s += this.renderToken(n, i, e, t);
  return s;
};
var LZ = yi;
function gt() {
  this.__rules__ = [], this.__cache__ = null;
}
gt.prototype.__find__ = function(n) {
  for (var e = 0; e < this.__rules__.length; e++)
    if (this.__rules__[e].name === n)
      return e;
  return -1;
};
gt.prototype.__compile__ = function() {
  var n = this, e = [""];
  n.__rules__.forEach(function(t) {
    !t.enabled || t.alt.forEach(function(i) {
      e.indexOf(i) < 0 && e.push(i);
    });
  }), n.__cache__ = {}, e.forEach(function(t) {
    n.__cache__[t] = [], n.__rules__.forEach(function(i) {
      !i.enabled || t && i.alt.indexOf(t) < 0 || n.__cache__[t].push(i.fn);
    });
  });
};
gt.prototype.at = function(n, e, t) {
  var i = this.__find__(n), r = t || {};
  if (i === -1)
    throw new Error("Parser rule not found: " + n);
  this.__rules__[i].fn = e, this.__rules__[i].alt = r.alt || [], this.__cache__ = null;
};
gt.prototype.before = function(n, e, t, i) {
  var r = this.__find__(n), o = i || {};
  if (r === -1)
    throw new Error("Parser rule not found: " + n);
  this.__rules__.splice(r, 0, {
    name: e,
    enabled: !0,
    fn: t,
    alt: o.alt || []
  }), this.__cache__ = null;
};
gt.prototype.after = function(n, e, t, i) {
  var r = this.__find__(n), o = i || {};
  if (r === -1)
    throw new Error("Parser rule not found: " + n);
  this.__rules__.splice(r + 1, 0, {
    name: e,
    enabled: !0,
    fn: t,
    alt: o.alt || []
  }), this.__cache__ = null;
};
gt.prototype.push = function(n, e, t) {
  var i = t || {};
  this.__rules__.push({
    name: n,
    enabled: !0,
    fn: e,
    alt: i.alt || []
  }), this.__cache__ = null;
};
gt.prototype.enable = function(n, e) {
  Array.isArray(n) || (n = [n]);
  var t = [];
  return n.forEach(function(i) {
    var r = this.__find__(i);
    if (r < 0) {
      if (e)
        return;
      throw new Error("Rules manager: invalid rule name " + i);
    }
    this.__rules__[r].enabled = !0, t.push(i);
  }, this), this.__cache__ = null, t;
};
gt.prototype.enableOnly = function(n, e) {
  Array.isArray(n) || (n = [n]), this.__rules__.forEach(function(t) {
    t.enabled = !1;
  }), this.enable(n, e);
};
gt.prototype.disable = function(n, e) {
  Array.isArray(n) || (n = [n]);
  var t = [];
  return n.forEach(function(i) {
    var r = this.__find__(i);
    if (r < 0) {
      if (e)
        return;
      throw new Error("Rules manager: invalid rule name " + i);
    }
    this.__rules__[r].enabled = !1, t.push(i);
  }, this), this.__cache__ = null, t;
};
gt.prototype.getRules = function(n) {
  return this.__cache__ === null && this.__compile__(), this.__cache__[n] || [];
};
var Ja = gt, RZ = /\r\n?|\n/g, IZ = /\0/g, BZ = function(e) {
  var t;
  t = e.src.replace(RZ, `
`), t = t.replace(IZ, "\uFFFD"), e.src = t;
}, NZ = function(e) {
  var t;
  e.inlineMode ? (t = new e.Token("inline", "", 0), t.content = e.src, t.map = [0, 1], t.children = [], e.tokens.push(t)) : e.md.block.parse(e.src, e.md, e.env, e.tokens);
}, PZ = function(e) {
  var t = e.tokens, i, r, o;
  for (r = 0, o = t.length; r < o; r++)
    i = t[r], i.type === "inline" && e.md.inline.parse(i.content, e.md, e.env, i.children);
}, FZ = Z.arrayReplaceAt;
function qZ(n) {
  return /^<a[>\s]/i.test(n);
}
function HZ(n) {
  return /^<\/a\s*>/i.test(n);
}
var zZ = function(e) {
  var t, i, r, o, s, l, a, c, h, u, f, d, p, m, g, b, y = e.tokens, w;
  if (!!e.md.options.linkify) {
    for (i = 0, r = y.length; i < r; i++)
      if (!(y[i].type !== "inline" || !e.md.linkify.pretest(y[i].content)))
        for (o = y[i].children, p = 0, t = o.length - 1; t >= 0; t--) {
          if (l = o[t], l.type === "link_close") {
            for (t--; o[t].level !== l.level && o[t].type !== "link_open"; )
              t--;
            continue;
          }
          if (l.type === "html_inline" && (qZ(l.content) && p > 0 && p--, HZ(l.content) && p++), !(p > 0) && l.type === "text" && e.md.linkify.test(l.content)) {
            for (h = l.content, w = e.md.linkify.match(h), a = [], d = l.level, f = 0, c = 0; c < w.length; c++)
              m = w[c].url, g = e.md.normalizeLink(m), e.md.validateLink(g) && (b = w[c].text, w[c].schema ? w[c].schema === "mailto:" && !/^mailto:/i.test(b) ? b = e.md.normalizeLinkText("mailto:" + b).replace(/^mailto:/, "") : b = e.md.normalizeLinkText(b) : b = e.md.normalizeLinkText("http://" + b).replace(/^http:\/\//, ""), u = w[c].index, u > f && (s = new e.Token("text", "", 0), s.content = h.slice(f, u), s.level = d, a.push(s)), s = new e.Token("link_open", "a", 1), s.attrs = [["href", g]], s.level = d++, s.markup = "linkify", s.info = "auto", a.push(s), s = new e.Token("text", "", 0), s.content = b, s.level = d, a.push(s), s = new e.Token("link_close", "a", -1), s.level = --d, s.markup = "linkify", s.info = "auto", a.push(s), f = w[c].lastIndex);
            f < h.length && (s = new e.Token("text", "", 0), s.content = h.slice(f), s.level = d, a.push(s)), y[i].children = o = FZ(o, t, a);
          }
        }
  }
}, wp = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/, $Z = /\((c|tm|r|p)\)/i, VZ = /\((c|tm|r|p)\)/ig, UZ = {
  c: "\xA9",
  r: "\xAE",
  p: "\xA7",
  tm: "\u2122"
};
function WZ(n, e) {
  return UZ[e.toLowerCase()];
}
function jZ(n) {
  var e, t, i = 0;
  for (e = n.length - 1; e >= 0; e--)
    t = n[e], t.type === "text" && !i && (t.content = t.content.replace(VZ, WZ)), t.type === "link_open" && t.info === "auto" && i--, t.type === "link_close" && t.info === "auto" && i++;
}
function GZ(n) {
  var e, t, i = 0;
  for (e = n.length - 1; e >= 0; e--)
    t = n[e], t.type === "text" && !i && wp.test(t.content) && (t.content = t.content.replace(/\+-/g, "\xB1").replace(/\.{2,}/g, "\u2026").replace(/([?!])…/g, "$1..").replace(/([?!]){4,}/g, "$1$1$1").replace(/,{2,}/g, ",").replace(/(^|[^-])---(?=[^-]|$)/mg, "$1\u2014").replace(/(^|\s)--(?=\s|$)/mg, "$1\u2013").replace(/(^|[^-\s])--(?=[^-\s]|$)/mg, "$1\u2013")), t.type === "link_open" && t.info === "auto" && i--, t.type === "link_close" && t.info === "auto" && i++;
}
var KZ = function(e) {
  var t;
  if (!!e.md.options.typographer)
    for (t = e.tokens.length - 1; t >= 0; t--)
      e.tokens[t].type === "inline" && ($Z.test(e.tokens[t].content) && jZ(e.tokens[t].children), wp.test(e.tokens[t].content) && GZ(e.tokens[t].children));
}, Yh = Z.isWhiteSpace, Jh = Z.isPunctChar, Zh = Z.isMdAsciiPunct, YZ = /['"]/, Xh = /['"]/g, Qh = "\u2019";
function Cr(n, e, t) {
  return n.substr(0, e) + t + n.substr(e + 1);
}
function JZ(n, e) {
  var t, i, r, o, s, l, a, c, h, u, f, d, p, m, g, b, y, w, x, _, k;
  for (x = [], t = 0; t < n.length; t++) {
    for (i = n[t], a = n[t].level, y = x.length - 1; y >= 0 && !(x[y].level <= a); y--)
      ;
    if (x.length = y + 1, i.type !== "text")
      continue;
    r = i.content, s = 0, l = r.length;
    e:
      for (; s < l && (Xh.lastIndex = s, o = Xh.exec(r), !!o); ) {
        if (g = b = !0, s = o.index + 1, w = o[0] === "'", h = 32, o.index - 1 >= 0)
          h = r.charCodeAt(o.index - 1);
        else
          for (y = t - 1; y >= 0 && !(n[y].type === "softbreak" || n[y].type === "hardbreak"); y--)
            if (!!n[y].content) {
              h = n[y].content.charCodeAt(n[y].content.length - 1);
              break;
            }
        if (u = 32, s < l)
          u = r.charCodeAt(s);
        else
          for (y = t + 1; y < n.length && !(n[y].type === "softbreak" || n[y].type === "hardbreak"); y++)
            if (!!n[y].content) {
              u = n[y].content.charCodeAt(0);
              break;
            }
        if (f = Zh(h) || Jh(String.fromCharCode(h)), d = Zh(u) || Jh(String.fromCharCode(u)), p = Yh(h), m = Yh(u), m ? g = !1 : d && (p || f || (g = !1)), p ? b = !1 : f && (m || d || (b = !1)), u === 34 && o[0] === '"' && h >= 48 && h <= 57 && (b = g = !1), g && b && (g = f, b = d), !g && !b) {
          w && (i.content = Cr(i.content, o.index, Qh));
          continue;
        }
        if (b) {
          for (y = x.length - 1; y >= 0 && (c = x[y], !(x[y].level < a)); y--)
            if (c.single === w && x[y].level === a) {
              c = x[y], w ? (_ = e.md.options.quotes[2], k = e.md.options.quotes[3]) : (_ = e.md.options.quotes[0], k = e.md.options.quotes[1]), i.content = Cr(i.content, o.index, k), n[c.token].content = Cr(
                n[c.token].content,
                c.pos,
                _
              ), s += k.length - 1, c.token === t && (s += _.length - 1), r = i.content, l = r.length, x.length = y;
              continue e;
            }
        }
        g ? x.push({
          token: t,
          pos: o.index,
          single: w,
          level: a
        }) : b && w && (i.content = Cr(i.content, o.index, Qh));
      }
  }
}
var ZZ = function(e) {
  var t;
  if (!!e.md.options.typographer)
    for (t = e.tokens.length - 1; t >= 0; t--)
      e.tokens[t].type !== "inline" || !YZ.test(e.tokens[t].content) || JZ(e.tokens[t].children, e);
};
function vi(n, e, t) {
  this.type = n, this.tag = e, this.attrs = null, this.map = null, this.nesting = t, this.level = 0, this.children = null, this.content = "", this.markup = "", this.info = "", this.meta = null, this.block = !1, this.hidden = !1;
}
vi.prototype.attrIndex = function(e) {
  var t, i, r;
  if (!this.attrs)
    return -1;
  for (t = this.attrs, i = 0, r = t.length; i < r; i++)
    if (t[i][0] === e)
      return i;
  return -1;
};
vi.prototype.attrPush = function(e) {
  this.attrs ? this.attrs.push(e) : this.attrs = [e];
};
vi.prototype.attrSet = function(e, t) {
  var i = this.attrIndex(e), r = [e, t];
  i < 0 ? this.attrPush(r) : this.attrs[i] = r;
};
vi.prototype.attrGet = function(e) {
  var t = this.attrIndex(e), i = null;
  return t >= 0 && (i = this.attrs[t][1]), i;
};
vi.prototype.attrJoin = function(e, t) {
  var i = this.attrIndex(e);
  i < 0 ? this.attrPush([e, t]) : this.attrs[i][1] = this.attrs[i][1] + " " + t;
};
var Za = vi, XZ = Za;
function _p(n, e, t) {
  this.src = n, this.env = t, this.tokens = [], this.inlineMode = !1, this.md = e;
}
_p.prototype.Token = XZ;
var QZ = _p, eX = Ja, Js = [
  ["normalize", BZ],
  ["block", NZ],
  ["inline", PZ],
  ["linkify", zZ],
  ["replacements", KZ],
  ["smartquotes", ZZ]
];
function Xa() {
  this.ruler = new eX();
  for (var n = 0; n < Js.length; n++)
    this.ruler.push(Js[n][0], Js[n][1]);
}
Xa.prototype.process = function(n) {
  var e, t, i;
  for (i = this.ruler.getRules(""), e = 0, t = i.length; e < t; e++)
    i[e](n);
};
Xa.prototype.State = QZ;
var tX = Xa, Zs = Z.isSpace;
function Xs(n, e) {
  var t = n.bMarks[e] + n.tShift[e], i = n.eMarks[e];
  return n.src.substr(t, i - t);
}
function eu(n) {
  var e = [], t = 0, i = n.length, r, o = !1, s = 0, l = "";
  for (r = n.charCodeAt(t); t < i; )
    r === 124 && (o ? (l += n.substring(s, t - 1), s = t) : (e.push(l + n.substring(s, t)), l = "", s = t + 1)), o = r === 92, t++, r = n.charCodeAt(t);
  return e.push(l + n.substring(s)), e;
}
var nX = function(e, t, i, r) {
  var o, s, l, a, c, h, u, f, d, p, m, g, b, y, w, x, _, k;
  if (t + 2 > i || (h = t + 1, e.sCount[h] < e.blkIndent) || e.sCount[h] - e.blkIndent >= 4 || (l = e.bMarks[h] + e.tShift[h], l >= e.eMarks[h]) || (_ = e.src.charCodeAt(l++), _ !== 124 && _ !== 45 && _ !== 58) || l >= e.eMarks[h] || (k = e.src.charCodeAt(l++), k !== 124 && k !== 45 && k !== 58 && !Zs(k)) || _ === 45 && Zs(k))
    return !1;
  for (; l < e.eMarks[h]; ) {
    if (o = e.src.charCodeAt(l), o !== 124 && o !== 45 && o !== 58 && !Zs(o))
      return !1;
    l++;
  }
  for (s = Xs(e, t + 1), u = s.split("|"), p = [], a = 0; a < u.length; a++) {
    if (m = u[a].trim(), !m) {
      if (a === 0 || a === u.length - 1)
        continue;
      return !1;
    }
    if (!/^:?-+:?$/.test(m))
      return !1;
    m.charCodeAt(m.length - 1) === 58 ? p.push(m.charCodeAt(0) === 58 ? "center" : "right") : m.charCodeAt(0) === 58 ? p.push("left") : p.push("");
  }
  if (s = Xs(e, t).trim(), s.indexOf("|") === -1 || e.sCount[t] - e.blkIndent >= 4 || (u = eu(s), u.length && u[0] === "" && u.shift(), u.length && u[u.length - 1] === "" && u.pop(), f = u.length, f === 0 || f !== p.length))
    return !1;
  if (r)
    return !0;
  for (y = e.parentType, e.parentType = "table", x = e.md.block.ruler.getRules("blockquote"), d = e.push("table_open", "table", 1), d.map = g = [t, 0], d = e.push("thead_open", "thead", 1), d.map = [t, t + 1], d = e.push("tr_open", "tr", 1), d.map = [t, t + 1], a = 0; a < u.length; a++)
    d = e.push("th_open", "th", 1), p[a] && (d.attrs = [["style", "text-align:" + p[a]]]), d = e.push("inline", "", 0), d.content = u[a].trim(), d.children = [], d = e.push("th_close", "th", -1);
  for (d = e.push("tr_close", "tr", -1), d = e.push("thead_close", "thead", -1), h = t + 2; h < i && !(e.sCount[h] < e.blkIndent); h++) {
    for (w = !1, a = 0, c = x.length; a < c; a++)
      if (x[a](e, h, i, !0)) {
        w = !0;
        break;
      }
    if (w || (s = Xs(e, h).trim(), !s) || e.sCount[h] - e.blkIndent >= 4)
      break;
    for (u = eu(s), u.length && u[0] === "" && u.shift(), u.length && u[u.length - 1] === "" && u.pop(), h === t + 2 && (d = e.push("tbody_open", "tbody", 1), d.map = b = [t + 2, 0]), d = e.push("tr_open", "tr", 1), d.map = [h, h + 1], a = 0; a < f; a++)
      d = e.push("td_open", "td", 1), p[a] && (d.attrs = [["style", "text-align:" + p[a]]]), d = e.push("inline", "", 0), d.content = u[a] ? u[a].trim() : "", d.children = [], d = e.push("td_close", "td", -1);
    d = e.push("tr_close", "tr", -1);
  }
  return b && (d = e.push("tbody_close", "tbody", -1), b[1] = h), d = e.push("table_close", "table", -1), g[1] = h, e.parentType = y, e.line = h, !0;
}, iX = function(e, t, i) {
  var r, o, s;
  if (e.sCount[t] - e.blkIndent < 4)
    return !1;
  for (o = r = t + 1; r < i; ) {
    if (e.isEmpty(r)) {
      r++;
      continue;
    }
    if (e.sCount[r] - e.blkIndent >= 4) {
      r++, o = r;
      continue;
    }
    break;
  }
  return e.line = o, s = e.push("code_block", "code", 0), s.content = e.getLines(t, o, 4 + e.blkIndent, !1) + `
`, s.map = [t, e.line], !0;
}, rX = function(e, t, i, r) {
  var o, s, l, a, c, h, u, f = !1, d = e.bMarks[t] + e.tShift[t], p = e.eMarks[t];
  if (e.sCount[t] - e.blkIndent >= 4 || d + 3 > p || (o = e.src.charCodeAt(d), o !== 126 && o !== 96) || (c = d, d = e.skipChars(d, o), s = d - c, s < 3) || (u = e.src.slice(c, d), l = e.src.slice(d, p), o === 96 && l.indexOf(String.fromCharCode(o)) >= 0))
    return !1;
  if (r)
    return !0;
  for (a = t; a++, !(a >= i || (d = c = e.bMarks[a] + e.tShift[a], p = e.eMarks[a], d < p && e.sCount[a] < e.blkIndent)); )
    if (e.src.charCodeAt(d) === o && !(e.sCount[a] - e.blkIndent >= 4) && (d = e.skipChars(d, o), !(d - c < s) && (d = e.skipSpaces(d), !(d < p)))) {
      f = !0;
      break;
    }
  return s = e.sCount[t], e.line = a + (f ? 1 : 0), h = e.push("fence", "code", 0), h.info = l, h.content = e.getLines(t + 1, a, s, !0), h.markup = u, h.map = [t, e.line], !0;
}, tu = Z.isSpace, oX = function(e, t, i, r) {
  var o, s, l, a, c, h, u, f, d, p, m, g, b, y, w, x, _, k, C, N, L = e.lineMax, D = e.bMarks[t] + e.tShift[t], H = e.eMarks[t];
  if (e.sCount[t] - e.blkIndent >= 4 || e.src.charCodeAt(D++) !== 62)
    return !1;
  if (r)
    return !0;
  for (a = d = e.sCount[t] + 1, e.src.charCodeAt(D) === 32 ? (D++, a++, d++, o = !1, x = !0) : e.src.charCodeAt(D) === 9 ? (x = !0, (e.bsCount[t] + d) % 4 === 3 ? (D++, a++, d++, o = !1) : o = !0) : x = !1, p = [e.bMarks[t]], e.bMarks[t] = D; D < H && (s = e.src.charCodeAt(D), tu(s)); ) {
    s === 9 ? d += 4 - (d + e.bsCount[t] + (o ? 1 : 0)) % 4 : d++;
    D++;
  }
  for (m = [e.bsCount[t]], e.bsCount[t] = e.sCount[t] + 1 + (x ? 1 : 0), h = D >= H, y = [e.sCount[t]], e.sCount[t] = d - a, w = [e.tShift[t]], e.tShift[t] = D - e.bMarks[t], k = e.md.block.ruler.getRules("blockquote"), b = e.parentType, e.parentType = "blockquote", f = t + 1; f < i && (N = e.sCount[f] < e.blkIndent, D = e.bMarks[f] + e.tShift[f], H = e.eMarks[f], !(D >= H)); f++) {
    if (e.src.charCodeAt(D++) === 62 && !N) {
      for (a = d = e.sCount[f] + 1, e.src.charCodeAt(D) === 32 ? (D++, a++, d++, o = !1, x = !0) : e.src.charCodeAt(D) === 9 ? (x = !0, (e.bsCount[f] + d) % 4 === 3 ? (D++, a++, d++, o = !1) : o = !0) : x = !1, p.push(e.bMarks[f]), e.bMarks[f] = D; D < H && (s = e.src.charCodeAt(D), tu(s)); ) {
        s === 9 ? d += 4 - (d + e.bsCount[f] + (o ? 1 : 0)) % 4 : d++;
        D++;
      }
      h = D >= H, m.push(e.bsCount[f]), e.bsCount[f] = e.sCount[f] + 1 + (x ? 1 : 0), y.push(e.sCount[f]), e.sCount[f] = d - a, w.push(e.tShift[f]), e.tShift[f] = D - e.bMarks[f];
      continue;
    }
    if (h)
      break;
    for (_ = !1, l = 0, c = k.length; l < c; l++)
      if (k[l](e, f, i, !0)) {
        _ = !0;
        break;
      }
    if (_) {
      e.lineMax = f, e.blkIndent !== 0 && (p.push(e.bMarks[f]), m.push(e.bsCount[f]), w.push(e.tShift[f]), y.push(e.sCount[f]), e.sCount[f] -= e.blkIndent);
      break;
    }
    p.push(e.bMarks[f]), m.push(e.bsCount[f]), w.push(e.tShift[f]), y.push(e.sCount[f]), e.sCount[f] = -1;
  }
  for (g = e.blkIndent, e.blkIndent = 0, C = e.push("blockquote_open", "blockquote", 1), C.markup = ">", C.map = u = [t, 0], e.md.block.tokenize(e, t, f), C = e.push("blockquote_close", "blockquote", -1), C.markup = ">", e.lineMax = L, e.parentType = b, u[1] = e.line, l = 0; l < w.length; l++)
    e.bMarks[l + t] = p[l], e.tShift[l + t] = w[l], e.sCount[l + t] = y[l], e.bsCount[l + t] = m[l];
  return e.blkIndent = g, !0;
}, sX = Z.isSpace, lX = function(e, t, i, r) {
  var o, s, l, a, c = e.bMarks[t] + e.tShift[t], h = e.eMarks[t];
  if (e.sCount[t] - e.blkIndent >= 4 || (o = e.src.charCodeAt(c++), o !== 42 && o !== 45 && o !== 95))
    return !1;
  for (s = 1; c < h; ) {
    if (l = e.src.charCodeAt(c++), l !== o && !sX(l))
      return !1;
    l === o && s++;
  }
  return s < 3 ? !1 : (r || (e.line = t + 1, a = e.push("hr", "hr", 0), a.map = [t, e.line], a.markup = Array(s + 1).join(String.fromCharCode(o))), !0);
}, Ap = Z.isSpace;
function nu(n, e) {
  var t, i, r, o;
  return i = n.bMarks[e] + n.tShift[e], r = n.eMarks[e], t = n.src.charCodeAt(i++), t !== 42 && t !== 45 && t !== 43 || i < r && (o = n.src.charCodeAt(i), !Ap(o)) ? -1 : i;
}
function iu(n, e) {
  var t, i = n.bMarks[e] + n.tShift[e], r = i, o = n.eMarks[e];
  if (r + 1 >= o || (t = n.src.charCodeAt(r++), t < 48 || t > 57))
    return -1;
  for (; ; ) {
    if (r >= o)
      return -1;
    if (t = n.src.charCodeAt(r++), t >= 48 && t <= 57) {
      if (r - i >= 10)
        return -1;
      continue;
    }
    if (t === 41 || t === 46)
      break;
    return -1;
  }
  return r < o && (t = n.src.charCodeAt(r), !Ap(t)) ? -1 : r;
}
function aX(n, e) {
  var t, i, r = n.level + 2;
  for (t = e + 2, i = n.tokens.length - 2; t < i; t++)
    n.tokens[t].level === r && n.tokens[t].type === "paragraph_open" && (n.tokens[t + 2].hidden = !0, n.tokens[t].hidden = !0, t += 2);
}
var cX = function(e, t, i, r) {
  var o, s, l, a, c, h, u, f, d, p, m, g, b, y, w, x, _, k, C, N, L, D, H, Q, G, T, z, q, he = !1, be = !0;
  if (e.sCount[t] - e.blkIndent >= 4 || e.listIndent >= 0 && e.sCount[t] - e.listIndent >= 4 && e.sCount[t] < e.blkIndent)
    return !1;
  if (r && e.parentType === "paragraph" && e.sCount[t] >= e.blkIndent && (he = !0), (H = iu(e, t)) >= 0) {
    if (u = !0, G = e.bMarks[t] + e.tShift[t], b = Number(e.src.slice(G, H - 1)), he && b !== 1)
      return !1;
  } else if ((H = nu(e, t)) >= 0)
    u = !1;
  else
    return !1;
  if (he && e.skipSpaces(H) >= e.eMarks[t])
    return !1;
  if (g = e.src.charCodeAt(H - 1), r)
    return !0;
  for (m = e.tokens.length, u ? (q = e.push("ordered_list_open", "ol", 1), b !== 1 && (q.attrs = [["start", b]])) : q = e.push("bullet_list_open", "ul", 1), q.map = p = [t, 0], q.markup = String.fromCharCode(g), w = t, Q = !1, z = e.md.block.ruler.getRules("list"), k = e.parentType, e.parentType = "list"; w < i; ) {
    for (D = H, y = e.eMarks[w], h = x = e.sCount[w] + H - (e.bMarks[t] + e.tShift[t]); D < y; ) {
      if (o = e.src.charCodeAt(D), o === 9)
        x += 4 - (x + e.bsCount[w]) % 4;
      else if (o === 32)
        x++;
      else
        break;
      D++;
    }
    if (s = D, s >= y ? c = 1 : c = x - h, c > 4 && (c = 1), a = h + c, q = e.push("list_item_open", "li", 1), q.markup = String.fromCharCode(g), q.map = f = [t, 0], u && (q.info = e.src.slice(G, H - 1)), L = e.tight, N = e.tShift[t], C = e.sCount[t], _ = e.listIndent, e.listIndent = e.blkIndent, e.blkIndent = a, e.tight = !0, e.tShift[t] = s - e.bMarks[t], e.sCount[t] = x, s >= y && e.isEmpty(t + 1) ? e.line = Math.min(e.line + 2, i) : e.md.block.tokenize(e, t, i, !0), (!e.tight || Q) && (be = !1), Q = e.line - t > 1 && e.isEmpty(e.line - 1), e.blkIndent = e.listIndent, e.listIndent = _, e.tShift[t] = N, e.sCount[t] = C, e.tight = L, q = e.push("list_item_close", "li", -1), q.markup = String.fromCharCode(g), w = t = e.line, f[1] = w, s = e.bMarks[t], w >= i || e.sCount[w] < e.blkIndent || e.sCount[t] - e.blkIndent >= 4)
      break;
    for (T = !1, l = 0, d = z.length; l < d; l++)
      if (z[l](e, w, i, !0)) {
        T = !0;
        break;
      }
    if (T)
      break;
    if (u) {
      if (H = iu(e, w), H < 0)
        break;
      G = e.bMarks[w] + e.tShift[w];
    } else if (H = nu(e, w), H < 0)
      break;
    if (g !== e.src.charCodeAt(H - 1))
      break;
  }
  return u ? q = e.push("ordered_list_close", "ol", -1) : q = e.push("bullet_list_close", "ul", -1), q.markup = String.fromCharCode(g), p[1] = w, e.line = w, e.parentType = k, be && aX(e, m), !0;
}, hX = Z.normalizeReference, Sr = Z.isSpace, uX = function(e, t, i, r) {
  var o, s, l, a, c, h, u, f, d, p, m, g, b, y, w, x, _ = 0, k = e.bMarks[t] + e.tShift[t], C = e.eMarks[t], N = t + 1;
  if (e.sCount[t] - e.blkIndent >= 4 || e.src.charCodeAt(k) !== 91)
    return !1;
  for (; ++k < C; )
    if (e.src.charCodeAt(k) === 93 && e.src.charCodeAt(k - 1) !== 92) {
      if (k + 1 === C || e.src.charCodeAt(k + 1) !== 58)
        return !1;
      break;
    }
  for (a = e.lineMax, w = e.md.block.ruler.getRules("reference"), p = e.parentType, e.parentType = "reference"; N < a && !e.isEmpty(N); N++)
    if (!(e.sCount[N] - e.blkIndent > 3) && !(e.sCount[N] < 0)) {
      for (y = !1, h = 0, u = w.length; h < u; h++)
        if (w[h](e, N, a, !0)) {
          y = !0;
          break;
        }
      if (y)
        break;
    }
  for (b = e.getLines(t, N, e.blkIndent, !1).trim(), C = b.length, k = 1; k < C; k++) {
    if (o = b.charCodeAt(k), o === 91)
      return !1;
    if (o === 93) {
      d = k;
      break;
    } else
      o === 10 ? _++ : o === 92 && (k++, k < C && b.charCodeAt(k) === 10 && _++);
  }
  if (d < 0 || b.charCodeAt(d + 1) !== 58)
    return !1;
  for (k = d + 2; k < C; k++)
    if (o = b.charCodeAt(k), o === 10)
      _++;
    else if (!Sr(o))
      break;
  if (m = e.md.helpers.parseLinkDestination(b, k, C), !m.ok || (c = e.md.normalizeLink(m.str), !e.md.validateLink(c)))
    return !1;
  for (k = m.pos, _ += m.lines, s = k, l = _, g = k; k < C; k++)
    if (o = b.charCodeAt(k), o === 10)
      _++;
    else if (!Sr(o))
      break;
  for (m = e.md.helpers.parseLinkTitle(b, k, C), k < C && g !== k && m.ok ? (x = m.str, k = m.pos, _ += m.lines) : (x = "", k = s, _ = l); k < C && (o = b.charCodeAt(k), !!Sr(o)); )
    k++;
  if (k < C && b.charCodeAt(k) !== 10 && x)
    for (x = "", k = s, _ = l; k < C && (o = b.charCodeAt(k), !!Sr(o)); )
      k++;
  return k < C && b.charCodeAt(k) !== 10 || (f = hX(b.slice(1, d)), !f) ? !1 : (r || (typeof e.env.references > "u" && (e.env.references = {}), typeof e.env.references[f] > "u" && (e.env.references[f] = { title: x, href: c }), e.parentType = p, e.line = t + _ + 1), !0);
}, fX = [
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
], rs = {}, dX = "[a-zA-Z_:][a-zA-Z0-9:._-]*", pX = "[^\"'=<>`\\x00-\\x20]+", mX = "'[^']*'", gX = '"[^"]*"', bX = "(?:" + pX + "|" + mX + "|" + gX + ")", yX = "(?:\\s+" + dX + "(?:\\s*=\\s*" + bX + ")?)", Cp = "<[A-Za-z][A-Za-z0-9\\-]*" + yX + "*\\s*\\/?>", Sp = "<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>", vX = "<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->", xX = "<[?][\\s\\S]*?[?]>", kX = "<![A-Z]+\\s+[^>]*>", wX = "<!\\[CDATA\\[[\\s\\S]*?\\]\\]>", _X = new RegExp("^(?:" + Cp + "|" + Sp + "|" + vX + "|" + xX + "|" + kX + "|" + wX + ")"), AX = new RegExp("^(?:" + Cp + "|" + Sp + ")");
rs.HTML_TAG_RE = _X;
rs.HTML_OPEN_CLOSE_TAG_RE = AX;
var CX = fX, SX = rs.HTML_OPEN_CLOSE_TAG_RE, jn = [
  [/^<(script|pre|style|textarea)(?=(\s|>|$))/i, /<\/(script|pre|style|textarea)>/i, !0],
  [/^<!--/, /-->/, !0],
  [/^<\?/, /\?>/, !0],
  [/^<![A-Z]/, />/, !0],
  [/^<!\[CDATA\[/, /\]\]>/, !0],
  [new RegExp("^</?(" + CX.join("|") + ")(?=(\\s|/?>|$))", "i"), /^$/, !0],
  [new RegExp(SX.source + "\\s*$"), /^$/, !1]
], TX = function(e, t, i, r) {
  var o, s, l, a, c = e.bMarks[t] + e.tShift[t], h = e.eMarks[t];
  if (e.sCount[t] - e.blkIndent >= 4 || !e.md.options.html || e.src.charCodeAt(c) !== 60)
    return !1;
  for (a = e.src.slice(c, h), o = 0; o < jn.length && !jn[o][0].test(a); o++)
    ;
  if (o === jn.length)
    return !1;
  if (r)
    return jn[o][2];
  if (s = t + 1, !jn[o][1].test(a)) {
    for (; s < i && !(e.sCount[s] < e.blkIndent); s++)
      if (c = e.bMarks[s] + e.tShift[s], h = e.eMarks[s], a = e.src.slice(c, h), jn[o][1].test(a)) {
        a.length !== 0 && s++;
        break;
      }
  }
  return e.line = s, l = e.push("html_block", "", 0), l.map = [t, s], l.content = e.getLines(t, s, e.blkIndent, !0), !0;
}, ru = Z.isSpace, EX = function(e, t, i, r) {
  var o, s, l, a, c = e.bMarks[t] + e.tShift[t], h = e.eMarks[t];
  if (e.sCount[t] - e.blkIndent >= 4 || (o = e.src.charCodeAt(c), o !== 35 || c >= h))
    return !1;
  for (s = 1, o = e.src.charCodeAt(++c); o === 35 && c < h && s <= 6; )
    s++, o = e.src.charCodeAt(++c);
  return s > 6 || c < h && !ru(o) ? !1 : (r || (h = e.skipSpacesBack(h, c), l = e.skipCharsBack(h, 35, c), l > c && ru(e.src.charCodeAt(l - 1)) && (h = l), e.line = t + 1, a = e.push("heading_open", "h" + String(s), 1), a.markup = "########".slice(0, s), a.map = [t, e.line], a = e.push("inline", "", 0), a.content = e.src.slice(c, h).trim(), a.map = [t, e.line], a.children = [], a = e.push("heading_close", "h" + String(s), -1), a.markup = "########".slice(0, s)), !0);
}, DX = function(e, t, i) {
  var r, o, s, l, a, c, h, u, f, d = t + 1, p, m = e.md.block.ruler.getRules("paragraph");
  if (e.sCount[t] - e.blkIndent >= 4)
    return !1;
  for (p = e.parentType, e.parentType = "paragraph"; d < i && !e.isEmpty(d); d++)
    if (!(e.sCount[d] - e.blkIndent > 3)) {
      if (e.sCount[d] >= e.blkIndent && (c = e.bMarks[d] + e.tShift[d], h = e.eMarks[d], c < h && (f = e.src.charCodeAt(c), (f === 45 || f === 61) && (c = e.skipChars(c, f), c = e.skipSpaces(c), c >= h)))) {
        u = f === 61 ? 1 : 2;
        break;
      }
      if (!(e.sCount[d] < 0)) {
        for (o = !1, s = 0, l = m.length; s < l; s++)
          if (m[s](e, d, i, !0)) {
            o = !0;
            break;
          }
        if (o)
          break;
      }
    }
  return u ? (r = e.getLines(t, d, e.blkIndent, !1).trim(), e.line = d + 1, a = e.push("heading_open", "h" + String(u), 1), a.markup = String.fromCharCode(f), a.map = [t, e.line], a = e.push("inline", "", 0), a.content = r, a.map = [t, e.line - 1], a.children = [], a = e.push("heading_close", "h" + String(u), -1), a.markup = String.fromCharCode(f), e.parentType = p, !0) : !1;
}, MX = function(e, t) {
  var i, r, o, s, l, a, c = t + 1, h = e.md.block.ruler.getRules("paragraph"), u = e.lineMax;
  for (a = e.parentType, e.parentType = "paragraph"; c < u && !e.isEmpty(c); c++)
    if (!(e.sCount[c] - e.blkIndent > 3) && !(e.sCount[c] < 0)) {
      for (r = !1, o = 0, s = h.length; o < s; o++)
        if (h[o](e, c, u, !0)) {
          r = !0;
          break;
        }
      if (r)
        break;
    }
  return i = e.getLines(t, c, e.blkIndent, !1).trim(), e.line = c, l = e.push("paragraph_open", "p", 1), l.map = [t, e.line], l = e.push("inline", "", 0), l.content = i, l.map = [t, e.line], l.children = [], l = e.push("paragraph_close", "p", -1), e.parentType = a, !0;
}, Tp = Za, os = Z.isSpace;
function Bt(n, e, t, i) {
  var r, o, s, l, a, c, h, u;
  for (this.src = n, this.md = e, this.env = t, this.tokens = i, this.bMarks = [], this.eMarks = [], this.tShift = [], this.sCount = [], this.bsCount = [], this.blkIndent = 0, this.line = 0, this.lineMax = 0, this.tight = !1, this.ddIndent = -1, this.listIndent = -1, this.parentType = "root", this.level = 0, this.result = "", o = this.src, u = !1, s = l = c = h = 0, a = o.length; l < a; l++) {
    if (r = o.charCodeAt(l), !u)
      if (os(r)) {
        c++, r === 9 ? h += 4 - h % 4 : h++;
        continue;
      } else
        u = !0;
    (r === 10 || l === a - 1) && (r !== 10 && l++, this.bMarks.push(s), this.eMarks.push(l), this.tShift.push(c), this.sCount.push(h), this.bsCount.push(0), u = !1, c = 0, h = 0, s = l + 1);
  }
  this.bMarks.push(o.length), this.eMarks.push(o.length), this.tShift.push(0), this.sCount.push(0), this.bsCount.push(0), this.lineMax = this.bMarks.length - 1;
}
Bt.prototype.push = function(n, e, t) {
  var i = new Tp(n, e, t);
  return i.block = !0, t < 0 && this.level--, i.level = this.level, t > 0 && this.level++, this.tokens.push(i), i;
};
Bt.prototype.isEmpty = function(e) {
  return this.bMarks[e] + this.tShift[e] >= this.eMarks[e];
};
Bt.prototype.skipEmptyLines = function(e) {
  for (var t = this.lineMax; e < t && !(this.bMarks[e] + this.tShift[e] < this.eMarks[e]); e++)
    ;
  return e;
};
Bt.prototype.skipSpaces = function(e) {
  for (var t, i = this.src.length; e < i && (t = this.src.charCodeAt(e), !!os(t)); e++)
    ;
  return e;
};
Bt.prototype.skipSpacesBack = function(e, t) {
  if (e <= t)
    return e;
  for (; e > t; )
    if (!os(this.src.charCodeAt(--e)))
      return e + 1;
  return e;
};
Bt.prototype.skipChars = function(e, t) {
  for (var i = this.src.length; e < i && this.src.charCodeAt(e) === t; e++)
    ;
  return e;
};
Bt.prototype.skipCharsBack = function(e, t, i) {
  if (e <= i)
    return e;
  for (; e > i; )
    if (t !== this.src.charCodeAt(--e))
      return e + 1;
  return e;
};
Bt.prototype.getLines = function(e, t, i, r) {
  var o, s, l, a, c, h, u, f = e;
  if (e >= t)
    return "";
  for (h = new Array(t - e), o = 0; f < t; f++, o++) {
    for (s = 0, u = a = this.bMarks[f], f + 1 < t || r ? c = this.eMarks[f] + 1 : c = this.eMarks[f]; a < c && s < i; ) {
      if (l = this.src.charCodeAt(a), os(l))
        l === 9 ? s += 4 - (s + this.bsCount[f]) % 4 : s++;
      else if (a - u < this.tShift[f])
        s++;
      else
        break;
      a++;
    }
    s > i ? h[o] = new Array(s - i + 1).join(" ") + this.src.slice(a, c) : h[o] = this.src.slice(a, c);
  }
  return h.join("");
};
Bt.prototype.Token = Tp;
var OX = Bt, LX = Ja, Tr = [
  ["table", nX, ["paragraph", "reference"]],
  ["code", iX],
  ["fence", rX, ["paragraph", "reference", "blockquote", "list"]],
  ["blockquote", oX, ["paragraph", "reference", "blockquote", "list"]],
  ["hr", lX, ["paragraph", "reference", "blockquote", "list"]],
  ["list", cX, ["paragraph", "reference", "blockquote"]],
  ["reference", uX],
  ["html_block", TX, ["paragraph", "reference", "blockquote"]],
  ["heading", EX, ["paragraph", "reference", "blockquote"]],
  ["lheading", DX],
  ["paragraph", MX]
];
function ss() {
  this.ruler = new LX();
  for (var n = 0; n < Tr.length; n++)
    this.ruler.push(Tr[n][0], Tr[n][1], { alt: (Tr[n][2] || []).slice() });
}
ss.prototype.tokenize = function(n, e, t) {
  for (var i, r, o = this.ruler.getRules(""), s = o.length, l = e, a = !1, c = n.md.options.maxNesting; l < t && (n.line = l = n.skipEmptyLines(l), !(l >= t || n.sCount[l] < n.blkIndent)); ) {
    if (n.level >= c) {
      n.line = t;
      break;
    }
    for (r = 0; r < s && (i = o[r](n, l, t, !1), !i); r++)
      ;
    n.tight = !a, n.isEmpty(n.line - 1) && (a = !0), l = n.line, l < t && n.isEmpty(l) && (a = !0, l++, n.line = l);
  }
};
ss.prototype.parse = function(n, e, t, i) {
  var r;
  !n || (r = new this.State(n, e, t, i), this.tokenize(r, r.line, r.lineMax));
};
ss.prototype.State = OX;
var RX = ss;
function IX(n) {
  switch (n) {
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
var BX = function(e, t) {
  for (var i = e.pos; i < e.posMax && !IX(e.src.charCodeAt(i)); )
    i++;
  return i === e.pos ? !1 : (t || (e.pending += e.src.slice(e.pos, i)), e.pos = i, !0);
}, NX = Z.isSpace, PX = function(e, t) {
  var i, r, o, s = e.pos;
  if (e.src.charCodeAt(s) !== 10)
    return !1;
  if (i = e.pending.length - 1, r = e.posMax, !t)
    if (i >= 0 && e.pending.charCodeAt(i) === 32)
      if (i >= 1 && e.pending.charCodeAt(i - 1) === 32) {
        for (o = i - 1; o >= 1 && e.pending.charCodeAt(o - 1) === 32; )
          o--;
        e.pending = e.pending.slice(0, o), e.push("hardbreak", "br", 0);
      } else
        e.pending = e.pending.slice(0, -1), e.push("softbreak", "br", 0);
    else
      e.push("softbreak", "br", 0);
  for (s++; s < r && NX(e.src.charCodeAt(s)); )
    s++;
  return e.pos = s, !0;
}, FX = Z.isSpace, Qa = [];
for (var ou = 0; ou < 256; ou++)
  Qa.push(0);
"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(n) {
  Qa[n.charCodeAt(0)] = 1;
});
var qX = function(e, t) {
  var i, r = e.pos, o = e.posMax;
  if (e.src.charCodeAt(r) !== 92)
    return !1;
  if (r++, r < o) {
    if (i = e.src.charCodeAt(r), i < 256 && Qa[i] !== 0)
      return t || (e.pending += e.src[r]), e.pos += 2, !0;
    if (i === 10) {
      for (t || e.push("hardbreak", "br", 0), r++; r < o && (i = e.src.charCodeAt(r), !!FX(i)); )
        r++;
      return e.pos = r, !0;
    }
  }
  return t || (e.pending += "\\"), e.pos++, !0;
}, HX = function(e, t) {
  var i, r, o, s, l, a, c, h, u = e.pos, f = e.src.charCodeAt(u);
  if (f !== 96)
    return !1;
  for (i = u, u++, r = e.posMax; u < r && e.src.charCodeAt(u) === 96; )
    u++;
  if (o = e.src.slice(i, u), c = o.length, e.backticksScanned && (e.backticks[c] || 0) <= i)
    return t || (e.pending += o), e.pos += c, !0;
  for (l = a = u; (l = e.src.indexOf("`", a)) !== -1; ) {
    for (a = l + 1; a < r && e.src.charCodeAt(a) === 96; )
      a++;
    if (h = a - l, h === c)
      return t || (s = e.push("code_inline", "code", 0), s.markup = o, s.content = e.src.slice(u, l).replace(/\n/g, " ").replace(/^ (.+) $/, "$1")), e.pos = a, !0;
    e.backticks[h] = l;
  }
  return e.backticksScanned = !0, t || (e.pending += o), e.pos += c, !0;
}, ls = {};
ls.tokenize = function(e, t) {
  var i, r, o, s, l, a = e.pos, c = e.src.charCodeAt(a);
  if (t || c !== 126 || (r = e.scanDelims(e.pos, !0), s = r.length, l = String.fromCharCode(c), s < 2))
    return !1;
  for (s % 2 && (o = e.push("text", "", 0), o.content = l, s--), i = 0; i < s; i += 2)
    o = e.push("text", "", 0), o.content = l + l, e.delimiters.push({
      marker: c,
      length: 0,
      token: e.tokens.length - 1,
      end: -1,
      open: r.can_open,
      close: r.can_close
    });
  return e.pos += r.length, !0;
};
function su(n, e) {
  var t, i, r, o, s, l = [], a = e.length;
  for (t = 0; t < a; t++)
    r = e[t], r.marker === 126 && r.end !== -1 && (o = e[r.end], s = n.tokens[r.token], s.type = "s_open", s.tag = "s", s.nesting = 1, s.markup = "~~", s.content = "", s = n.tokens[o.token], s.type = "s_close", s.tag = "s", s.nesting = -1, s.markup = "~~", s.content = "", n.tokens[o.token - 1].type === "text" && n.tokens[o.token - 1].content === "~" && l.push(o.token - 1));
  for (; l.length; ) {
    for (t = l.pop(), i = t + 1; i < n.tokens.length && n.tokens[i].type === "s_close"; )
      i++;
    i--, t !== i && (s = n.tokens[i], n.tokens[i] = n.tokens[t], n.tokens[t] = s);
  }
}
ls.postProcess = function(e) {
  var t, i = e.tokens_meta, r = e.tokens_meta.length;
  for (su(e, e.delimiters), t = 0; t < r; t++)
    i[t] && i[t].delimiters && su(e, i[t].delimiters);
};
var as = {};
as.tokenize = function(e, t) {
  var i, r, o, s = e.pos, l = e.src.charCodeAt(s);
  if (t || l !== 95 && l !== 42)
    return !1;
  for (r = e.scanDelims(e.pos, l === 42), i = 0; i < r.length; i++)
    o = e.push("text", "", 0), o.content = String.fromCharCode(l), e.delimiters.push({
      marker: l,
      length: r.length,
      token: e.tokens.length - 1,
      end: -1,
      open: r.can_open,
      close: r.can_close
    });
  return e.pos += r.length, !0;
};
function lu(n, e) {
  var t, i, r, o, s, l, a = e.length;
  for (t = a - 1; t >= 0; t--)
    i = e[t], !(i.marker !== 95 && i.marker !== 42) && i.end !== -1 && (r = e[i.end], l = t > 0 && e[t - 1].end === i.end + 1 && e[t - 1].marker === i.marker && e[t - 1].token === i.token - 1 && e[i.end + 1].token === r.token + 1, s = String.fromCharCode(i.marker), o = n.tokens[i.token], o.type = l ? "strong_open" : "em_open", o.tag = l ? "strong" : "em", o.nesting = 1, o.markup = l ? s + s : s, o.content = "", o = n.tokens[r.token], o.type = l ? "strong_close" : "em_close", o.tag = l ? "strong" : "em", o.nesting = -1, o.markup = l ? s + s : s, o.content = "", l && (n.tokens[e[t - 1].token].content = "", n.tokens[e[i.end + 1].token].content = "", t--));
}
as.postProcess = function(e) {
  var t, i = e.tokens_meta, r = e.tokens_meta.length;
  for (lu(e, e.delimiters), t = 0; t < r; t++)
    i[t] && i[t].delimiters && lu(e, i[t].delimiters);
};
var zX = Z.normalizeReference, Qs = Z.isSpace, $X = function(e, t) {
  var i, r, o, s, l, a, c, h, u, f = "", d = "", p = e.pos, m = e.posMax, g = e.pos, b = !0;
  if (e.src.charCodeAt(e.pos) !== 91 || (l = e.pos + 1, s = e.md.helpers.parseLinkLabel(e, e.pos, !0), s < 0))
    return !1;
  if (a = s + 1, a < m && e.src.charCodeAt(a) === 40) {
    for (b = !1, a++; a < m && (r = e.src.charCodeAt(a), !(!Qs(r) && r !== 10)); a++)
      ;
    if (a >= m)
      return !1;
    if (g = a, c = e.md.helpers.parseLinkDestination(e.src, a, e.posMax), c.ok) {
      for (f = e.md.normalizeLink(c.str), e.md.validateLink(f) ? a = c.pos : f = "", g = a; a < m && (r = e.src.charCodeAt(a), !(!Qs(r) && r !== 10)); a++)
        ;
      if (c = e.md.helpers.parseLinkTitle(e.src, a, e.posMax), a < m && g !== a && c.ok)
        for (d = c.str, a = c.pos; a < m && (r = e.src.charCodeAt(a), !(!Qs(r) && r !== 10)); a++)
          ;
    }
    (a >= m || e.src.charCodeAt(a) !== 41) && (b = !0), a++;
  }
  if (b) {
    if (typeof e.env.references > "u")
      return !1;
    if (a < m && e.src.charCodeAt(a) === 91 ? (g = a + 1, a = e.md.helpers.parseLinkLabel(e, a), a >= 0 ? o = e.src.slice(g, a++) : a = s + 1) : a = s + 1, o || (o = e.src.slice(l, s)), h = e.env.references[zX(o)], !h)
      return e.pos = p, !1;
    f = h.href, d = h.title;
  }
  return t || (e.pos = l, e.posMax = s, u = e.push("link_open", "a", 1), u.attrs = i = [["href", f]], d && i.push(["title", d]), e.md.inline.tokenize(e), u = e.push("link_close", "a", -1)), e.pos = a, e.posMax = m, !0;
}, VX = Z.normalizeReference, el = Z.isSpace, UX = function(e, t) {
  var i, r, o, s, l, a, c, h, u, f, d, p, m, g = "", b = e.pos, y = e.posMax;
  if (e.src.charCodeAt(e.pos) !== 33 || e.src.charCodeAt(e.pos + 1) !== 91 || (a = e.pos + 2, l = e.md.helpers.parseLinkLabel(e, e.pos + 1, !1), l < 0))
    return !1;
  if (c = l + 1, c < y && e.src.charCodeAt(c) === 40) {
    for (c++; c < y && (r = e.src.charCodeAt(c), !(!el(r) && r !== 10)); c++)
      ;
    if (c >= y)
      return !1;
    for (m = c, u = e.md.helpers.parseLinkDestination(e.src, c, e.posMax), u.ok && (g = e.md.normalizeLink(u.str), e.md.validateLink(g) ? c = u.pos : g = ""), m = c; c < y && (r = e.src.charCodeAt(c), !(!el(r) && r !== 10)); c++)
      ;
    if (u = e.md.helpers.parseLinkTitle(e.src, c, e.posMax), c < y && m !== c && u.ok)
      for (f = u.str, c = u.pos; c < y && (r = e.src.charCodeAt(c), !(!el(r) && r !== 10)); c++)
        ;
    else
      f = "";
    if (c >= y || e.src.charCodeAt(c) !== 41)
      return e.pos = b, !1;
    c++;
  } else {
    if (typeof e.env.references > "u")
      return !1;
    if (c < y && e.src.charCodeAt(c) === 91 ? (m = c + 1, c = e.md.helpers.parseLinkLabel(e, c), c >= 0 ? s = e.src.slice(m, c++) : c = l + 1) : c = l + 1, s || (s = e.src.slice(a, l)), h = e.env.references[VX(s)], !h)
      return e.pos = b, !1;
    g = h.href, f = h.title;
  }
  return t || (o = e.src.slice(a, l), e.md.inline.parse(
    o,
    e.md,
    e.env,
    p = []
  ), d = e.push("image", "img", 0), d.attrs = i = [["src", g], ["alt", ""]], d.children = p, d.content = o, f && i.push(["title", f])), e.pos = c, e.posMax = y, !0;
}, WX = /^([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/, jX = /^([a-zA-Z][a-zA-Z0-9+.\-]{1,31}):([^<>\x00-\x20]*)$/, GX = function(e, t) {
  var i, r, o, s, l, a, c = e.pos;
  if (e.src.charCodeAt(c) !== 60)
    return !1;
  for (l = e.pos, a = e.posMax; ; ) {
    if (++c >= a || (s = e.src.charCodeAt(c), s === 60))
      return !1;
    if (s === 62)
      break;
  }
  return i = e.src.slice(l + 1, c), jX.test(i) ? (r = e.md.normalizeLink(i), e.md.validateLink(r) ? (t || (o = e.push("link_open", "a", 1), o.attrs = [["href", r]], o.markup = "autolink", o.info = "auto", o = e.push("text", "", 0), o.content = e.md.normalizeLinkText(i), o = e.push("link_close", "a", -1), o.markup = "autolink", o.info = "auto"), e.pos += i.length + 2, !0) : !1) : WX.test(i) ? (r = e.md.normalizeLink("mailto:" + i), e.md.validateLink(r) ? (t || (o = e.push("link_open", "a", 1), o.attrs = [["href", r]], o.markup = "autolink", o.info = "auto", o = e.push("text", "", 0), o.content = e.md.normalizeLinkText(i), o = e.push("link_close", "a", -1), o.markup = "autolink", o.info = "auto"), e.pos += i.length + 2, !0) : !1) : !1;
}, KX = rs.HTML_TAG_RE;
function YX(n) {
  var e = n | 32;
  return e >= 97 && e <= 122;
}
var JX = function(e, t) {
  var i, r, o, s, l = e.pos;
  return !e.md.options.html || (o = e.posMax, e.src.charCodeAt(l) !== 60 || l + 2 >= o) || (i = e.src.charCodeAt(l + 1), i !== 33 && i !== 63 && i !== 47 && !YX(i)) || (r = e.src.slice(l).match(KX), !r) ? !1 : (t || (s = e.push("html_inline", "", 0), s.content = e.src.slice(l, l + r[0].length)), e.pos += r[0].length, !0);
}, au = Ka.exports, ZX = Z.has, XX = Z.isValidEntityCode, cu = Z.fromCodePoint, QX = /^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i, eQ = /^&([a-z][a-z0-9]{1,31});/i, tQ = function(e, t) {
  var i, r, o, s = e.pos, l = e.posMax;
  if (e.src.charCodeAt(s) !== 38)
    return !1;
  if (s + 1 < l) {
    if (i = e.src.charCodeAt(s + 1), i === 35) {
      if (o = e.src.slice(s).match(QX), o)
        return t || (r = o[1][0].toLowerCase() === "x" ? parseInt(o[1].slice(1), 16) : parseInt(o[1], 10), e.pending += XX(r) ? cu(r) : cu(65533)), e.pos += o[0].length, !0;
    } else if (o = e.src.slice(s).match(eQ), o && ZX(au, o[1]))
      return t || (e.pending += au[o[1]]), e.pos += o[0].length, !0;
  }
  return t || (e.pending += "&"), e.pos++, !0;
};
function hu(n, e) {
  var t, i, r, o, s, l, a, c, h = {}, u = e.length;
  if (!!u) {
    var f = 0, d = -2, p = [];
    for (t = 0; t < u; t++)
      if (r = e[t], p.push(0), (e[f].marker !== r.marker || d !== r.token - 1) && (f = t), d = r.token, r.length = r.length || 0, !!r.close) {
        for (h.hasOwnProperty(r.marker) || (h[r.marker] = [-1, -1, -1, -1, -1, -1]), s = h[r.marker][(r.open ? 3 : 0) + r.length % 3], i = f - p[f] - 1, l = i; i > s; i -= p[i] + 1)
          if (o = e[i], o.marker === r.marker && o.open && o.end < 0 && (a = !1, (o.close || r.open) && (o.length + r.length) % 3 === 0 && (o.length % 3 !== 0 || r.length % 3 !== 0) && (a = !0), !a)) {
            c = i > 0 && !e[i - 1].open ? p[i - 1] + 1 : 0, p[t] = t - i + c, p[i] = c, r.open = !1, o.end = t, o.close = !1, l = -1, d = -2;
            break;
          }
        l !== -1 && (h[r.marker][(r.open ? 3 : 0) + (r.length || 0) % 3] = l);
      }
  }
}
var nQ = function(e) {
  var t, i = e.tokens_meta, r = e.tokens_meta.length;
  for (hu(e, e.delimiters), t = 0; t < r; t++)
    i[t] && i[t].delimiters && hu(e, i[t].delimiters);
}, iQ = function(e) {
  var t, i, r = 0, o = e.tokens, s = e.tokens.length;
  for (t = i = 0; t < s; t++)
    o[t].nesting < 0 && r--, o[t].level = r, o[t].nesting > 0 && r++, o[t].type === "text" && t + 1 < s && o[t + 1].type === "text" ? o[t + 1].content = o[t].content + o[t + 1].content : (t !== i && (o[i] = o[t]), i++);
  t !== i && (o.length = i);
}, ec = Za, uu = Z.isWhiteSpace, fu = Z.isPunctChar, du = Z.isMdAsciiPunct;
function cr(n, e, t, i) {
  this.src = n, this.env = t, this.md = e, this.tokens = i, this.tokens_meta = Array(i.length), this.pos = 0, this.posMax = this.src.length, this.level = 0, this.pending = "", this.pendingLevel = 0, this.cache = {}, this.delimiters = [], this._prev_delimiters = [], this.backticks = {}, this.backticksScanned = !1;
}
cr.prototype.pushPending = function() {
  var n = new ec("text", "", 0);
  return n.content = this.pending, n.level = this.pendingLevel, this.tokens.push(n), this.pending = "", n;
};
cr.prototype.push = function(n, e, t) {
  this.pending && this.pushPending();
  var i = new ec(n, e, t), r = null;
  return t < 0 && (this.level--, this.delimiters = this._prev_delimiters.pop()), i.level = this.level, t > 0 && (this.level++, this._prev_delimiters.push(this.delimiters), this.delimiters = [], r = { delimiters: this.delimiters }), this.pendingLevel = this.level, this.tokens.push(i), this.tokens_meta.push(r), i;
};
cr.prototype.scanDelims = function(n, e) {
  var t = n, i, r, o, s, l, a, c, h, u, f = !0, d = !0, p = this.posMax, m = this.src.charCodeAt(n);
  for (i = n > 0 ? this.src.charCodeAt(n - 1) : 32; t < p && this.src.charCodeAt(t) === m; )
    t++;
  return o = t - n, r = t < p ? this.src.charCodeAt(t) : 32, c = du(i) || fu(String.fromCharCode(i)), u = du(r) || fu(String.fromCharCode(r)), a = uu(i), h = uu(r), h ? f = !1 : u && (a || c || (f = !1)), a ? d = !1 : c && (h || u || (d = !1)), e ? (s = f, l = d) : (s = f && (!d || c), l = d && (!f || u)), {
    can_open: s,
    can_close: l,
    length: o
  };
};
cr.prototype.Token = ec;
var rQ = cr, pu = Ja, tl = [
  ["text", BX],
  ["newline", PX],
  ["escape", qX],
  ["backticks", HX],
  ["strikethrough", ls.tokenize],
  ["emphasis", as.tokenize],
  ["link", $X],
  ["image", UX],
  ["autolink", GX],
  ["html_inline", JX],
  ["entity", tQ]
], nl = [
  ["balance_pairs", nQ],
  ["strikethrough", ls.postProcess],
  ["emphasis", as.postProcess],
  ["text_collapse", iQ]
];
function hr() {
  var n;
  for (this.ruler = new pu(), n = 0; n < tl.length; n++)
    this.ruler.push(tl[n][0], tl[n][1]);
  for (this.ruler2 = new pu(), n = 0; n < nl.length; n++)
    this.ruler2.push(nl[n][0], nl[n][1]);
}
hr.prototype.skipToken = function(n) {
  var e, t, i = n.pos, r = this.ruler.getRules(""), o = r.length, s = n.md.options.maxNesting, l = n.cache;
  if (typeof l[i] < "u") {
    n.pos = l[i];
    return;
  }
  if (n.level < s)
    for (t = 0; t < o && (n.level++, e = r[t](n, !0), n.level--, !e); t++)
      ;
  else
    n.pos = n.posMax;
  e || n.pos++, l[i] = n.pos;
};
hr.prototype.tokenize = function(n) {
  for (var e, t, i = this.ruler.getRules(""), r = i.length, o = n.posMax, s = n.md.options.maxNesting; n.pos < o; ) {
    if (n.level < s)
      for (t = 0; t < r && (e = i[t](n, !1), !e); t++)
        ;
    if (e) {
      if (n.pos >= o)
        break;
      continue;
    }
    n.pending += n.src[n.pos++];
  }
  n.pending && n.pushPending();
};
hr.prototype.parse = function(n, e, t, i) {
  var r, o, s, l = new this.State(n, e, t, i);
  for (this.tokenize(l), o = this.ruler2.getRules(""), s = o.length, r = 0; r < s; r++)
    o[r](l);
};
hr.prototype.State = rQ;
var oQ = hr, il, mu;
function sQ() {
  return mu || (mu = 1, il = function(n) {
    var e = {};
    e.src_Any = vp().source, e.src_Cc = xp().source, e.src_Z = kp().source, e.src_P = Ya.source, e.src_ZPCc = [e.src_Z, e.src_P, e.src_Cc].join("|"), e.src_ZCc = [e.src_Z, e.src_Cc].join("|");
    var t = "[><\uFF5C]";
    return e.src_pseudo_letter = "(?:(?!" + t + "|" + e.src_ZPCc + ")" + e.src_Any + ")", e.src_ip4 = "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)", e.src_auth = "(?:(?:(?!" + e.src_ZCc + "|[@/\\[\\]()]).)+@)?", e.src_port = "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?", e.src_host_terminator = "(?=$|" + t + "|" + e.src_ZPCc + ")(?!-|_|:\\d|\\.-|\\.(?!$|" + e.src_ZPCc + "))", e.src_path = "(?:[/?#](?:(?!" + e.src_ZCc + "|" + t + `|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!` + e.src_ZCc + "|\\]).)*\\]|\\((?:(?!" + e.src_ZCc + "|[)]).)*\\)|\\{(?:(?!" + e.src_ZCc + '|[}]).)*\\}|\\"(?:(?!' + e.src_ZCc + `|["]).)+\\"|\\'(?:(?!` + e.src_ZCc + "|[']).)+\\'|\\'(?=" + e.src_pseudo_letter + "|[-]).|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!" + e.src_ZCc + "|[.]).|" + (n && n["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") + ",(?!" + e.src_ZCc + ").|;(?!" + e.src_ZCc + ").|\\!+(?!" + e.src_ZCc + "|[!]).|\\?(?!" + e.src_ZCc + "|[?]).)+|\\/)?", e.src_email_name = '[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*', e.src_xn = "xn--[a-z0-9\\-]{1,59}", e.src_domain_root = "(?:" + e.src_xn + "|" + e.src_pseudo_letter + "{1,63})", e.src_domain = "(?:" + e.src_xn + "|(?:" + e.src_pseudo_letter + ")|(?:" + e.src_pseudo_letter + "(?:-|" + e.src_pseudo_letter + "){0,61}" + e.src_pseudo_letter + "))", e.src_host = "(?:(?:(?:(?:" + e.src_domain + ")\\.)*" + e.src_domain + "))", e.tpl_host_fuzzy = "(?:" + e.src_ip4 + "|(?:(?:(?:" + e.src_domain + ")\\.)+(?:%TLDS%)))", e.tpl_host_no_ip_fuzzy = "(?:(?:(?:" + e.src_domain + ")\\.)+(?:%TLDS%))", e.src_host_strict = e.src_host + e.src_host_terminator, e.tpl_host_fuzzy_strict = e.tpl_host_fuzzy + e.src_host_terminator, e.src_host_port_strict = e.src_host + e.src_port + e.src_host_terminator, e.tpl_host_port_fuzzy_strict = e.tpl_host_fuzzy + e.src_port + e.src_host_terminator, e.tpl_host_port_no_ip_fuzzy_strict = e.tpl_host_no_ip_fuzzy + e.src_port + e.src_host_terminator, e.tpl_host_fuzzy_test = "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" + e.src_ZPCc + "|>|$))", e.tpl_email_fuzzy = "(^|" + t + '|"|\\(|' + e.src_ZCc + ")(" + e.src_email_name + "@" + e.tpl_host_fuzzy_strict + ")", e.tpl_link_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|\uFF5C]|" + e.src_ZPCc + "))((?![$+<=>^`|\uFF5C])" + e.tpl_host_port_fuzzy_strict + e.src_path + ")", e.tpl_link_no_ip_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|\uFF5C]|" + e.src_ZPCc + "))((?![$+<=>^`|\uFF5C])" + e.tpl_host_port_no_ip_fuzzy_strict + e.src_path + ")", e;
  }), il;
}
function Vl(n) {
  var e = Array.prototype.slice.call(arguments, 1);
  return e.forEach(function(t) {
    !t || Object.keys(t).forEach(function(i) {
      n[i] = t[i];
    });
  }), n;
}
function cs(n) {
  return Object.prototype.toString.call(n);
}
function lQ(n) {
  return cs(n) === "[object String]";
}
function aQ(n) {
  return cs(n) === "[object Object]";
}
function cQ(n) {
  return cs(n) === "[object RegExp]";
}
function gu(n) {
  return cs(n) === "[object Function]";
}
function hQ(n) {
  return n.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
}
var Ep = {
  fuzzyLink: !0,
  fuzzyEmail: !0,
  fuzzyIP: !1
};
function uQ(n) {
  return Object.keys(n || {}).reduce(function(e, t) {
    return e || Ep.hasOwnProperty(t);
  }, !1);
}
var fQ = {
  "http:": {
    validate: function(n, e, t) {
      var i = n.slice(e);
      return t.re.http || (t.re.http = new RegExp(
        "^\\/\\/" + t.re.src_auth + t.re.src_host_port_strict + t.re.src_path,
        "i"
      )), t.re.http.test(i) ? i.match(t.re.http)[0].length : 0;
    }
  },
  "https:": "http:",
  "ftp:": "http:",
  "//": {
    validate: function(n, e, t) {
      var i = n.slice(e);
      return t.re.no_http || (t.re.no_http = new RegExp(
        "^" + t.re.src_auth + "(?:localhost|(?:(?:" + t.re.src_domain + ")\\.)+" + t.re.src_domain_root + ")" + t.re.src_port + t.re.src_host_terminator + t.re.src_path,
        "i"
      )), t.re.no_http.test(i) ? e >= 3 && n[e - 3] === ":" || e >= 3 && n[e - 3] === "/" ? 0 : i.match(t.re.no_http)[0].length : 0;
    }
  },
  "mailto:": {
    validate: function(n, e, t) {
      var i = n.slice(e);
      return t.re.mailto || (t.re.mailto = new RegExp(
        "^" + t.re.src_email_name + "@" + t.re.src_host_strict,
        "i"
      )), t.re.mailto.test(i) ? i.match(t.re.mailto)[0].length : 0;
    }
  }
}, dQ = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]", pQ = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|\u0440\u0444".split("|");
function mQ(n) {
  n.__index__ = -1, n.__text_cache__ = "";
}
function gQ(n) {
  return function(e, t) {
    var i = e.slice(t);
    return n.test(i) ? i.match(n)[0].length : 0;
  };
}
function bu() {
  return function(n, e) {
    e.normalize(n);
  };
}
function Ao(n) {
  var e = n.re = sQ()(n.__opts__), t = n.__tlds__.slice();
  n.onCompile(), n.__tlds_replaced__ || t.push(dQ), t.push(e.src_xn), e.src_tlds = t.join("|");
  function i(l) {
    return l.replace("%TLDS%", e.src_tlds);
  }
  e.email_fuzzy = RegExp(i(e.tpl_email_fuzzy), "i"), e.link_fuzzy = RegExp(i(e.tpl_link_fuzzy), "i"), e.link_no_ip_fuzzy = RegExp(i(e.tpl_link_no_ip_fuzzy), "i"), e.host_fuzzy_test = RegExp(i(e.tpl_host_fuzzy_test), "i");
  var r = [];
  n.__compiled__ = {};
  function o(l, a) {
    throw new Error('(LinkifyIt) Invalid schema "' + l + '": ' + a);
  }
  Object.keys(n.__schemas__).forEach(function(l) {
    var a = n.__schemas__[l];
    if (a !== null) {
      var c = { validate: null, link: null };
      if (n.__compiled__[l] = c, aQ(a)) {
        cQ(a.validate) ? c.validate = gQ(a.validate) : gu(a.validate) ? c.validate = a.validate : o(l, a), gu(a.normalize) ? c.normalize = a.normalize : a.normalize ? o(l, a) : c.normalize = bu();
        return;
      }
      if (lQ(a)) {
        r.push(l);
        return;
      }
      o(l, a);
    }
  }), r.forEach(function(l) {
    !n.__compiled__[n.__schemas__[l]] || (n.__compiled__[l].validate = n.__compiled__[n.__schemas__[l]].validate, n.__compiled__[l].normalize = n.__compiled__[n.__schemas__[l]].normalize);
  }), n.__compiled__[""] = { validate: null, normalize: bu() };
  var s = Object.keys(n.__compiled__).filter(function(l) {
    return l.length > 0 && n.__compiled__[l];
  }).map(hQ).join("|");
  n.re.schema_test = RegExp("(^|(?!_)(?:[><\uFF5C]|" + e.src_ZPCc + "))(" + s + ")", "i"), n.re.schema_search = RegExp("(^|(?!_)(?:[><\uFF5C]|" + e.src_ZPCc + "))(" + s + ")", "ig"), n.re.pretest = RegExp(
    "(" + n.re.schema_test.source + ")|(" + n.re.host_fuzzy_test.source + ")|@",
    "i"
  ), mQ(n);
}
function bQ(n, e) {
  var t = n.__index__, i = n.__last_index__, r = n.__text_cache__.slice(t, i);
  this.schema = n.__schema__.toLowerCase(), this.index = t + e, this.lastIndex = i + e, this.raw = r, this.text = r, this.url = r;
}
function yu(n, e) {
  var t = new bQ(n, e);
  return n.__compiled__[t.schema].normalize(t, n), t;
}
function lt(n, e) {
  if (!(this instanceof lt))
    return new lt(n, e);
  e || uQ(n) && (e = n, n = {}), this.__opts__ = Vl({}, Ep, e), this.__index__ = -1, this.__last_index__ = -1, this.__schema__ = "", this.__text_cache__ = "", this.__schemas__ = Vl({}, fQ, n), this.__compiled__ = {}, this.__tlds__ = pQ, this.__tlds_replaced__ = !1, this.re = {}, Ao(this);
}
lt.prototype.add = function(e, t) {
  return this.__schemas__[e] = t, Ao(this), this;
};
lt.prototype.set = function(e) {
  return this.__opts__ = Vl(this.__opts__, e), this;
};
lt.prototype.test = function(e) {
  if (this.__text_cache__ = e, this.__index__ = -1, !e.length)
    return !1;
  var t, i, r, o, s, l, a, c, h;
  if (this.re.schema_test.test(e)) {
    for (a = this.re.schema_search, a.lastIndex = 0; (t = a.exec(e)) !== null; )
      if (o = this.testSchemaAt(e, t[2], a.lastIndex), o) {
        this.__schema__ = t[2], this.__index__ = t.index + t[1].length, this.__last_index__ = t.index + t[0].length + o;
        break;
      }
  }
  return this.__opts__.fuzzyLink && this.__compiled__["http:"] && (c = e.search(this.re.host_fuzzy_test), c >= 0 && (this.__index__ < 0 || c < this.__index__) && (i = e.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) !== null && (s = i.index + i[1].length, (this.__index__ < 0 || s < this.__index__) && (this.__schema__ = "", this.__index__ = s, this.__last_index__ = i.index + i[0].length))), this.__opts__.fuzzyEmail && this.__compiled__["mailto:"] && (h = e.indexOf("@"), h >= 0 && (r = e.match(this.re.email_fuzzy)) !== null && (s = r.index + r[1].length, l = r.index + r[0].length, (this.__index__ < 0 || s < this.__index__ || s === this.__index__ && l > this.__last_index__) && (this.__schema__ = "mailto:", this.__index__ = s, this.__last_index__ = l))), this.__index__ >= 0;
};
lt.prototype.pretest = function(e) {
  return this.re.pretest.test(e);
};
lt.prototype.testSchemaAt = function(e, t, i) {
  return this.__compiled__[t.toLowerCase()] ? this.__compiled__[t.toLowerCase()].validate(e, i, this) : 0;
};
lt.prototype.match = function(e) {
  var t = 0, i = [];
  this.__index__ >= 0 && this.__text_cache__ === e && (i.push(yu(this, t)), t = this.__last_index__);
  for (var r = t ? e.slice(t) : e; this.test(r); )
    i.push(yu(this, t)), r = r.slice(this.__last_index__), t += this.__last_index__;
  return i.length ? i : null;
};
lt.prototype.tlds = function(e, t) {
  return e = Array.isArray(e) ? e : [e], t ? (this.__tlds__ = this.__tlds__.concat(e).sort().filter(function(i, r, o) {
    return i !== o[r - 1];
  }).reverse(), Ao(this), this) : (this.__tlds__ = e.slice(), this.__tlds_replaced__ = !0, Ao(this), this);
};
lt.prototype.normalize = function(e) {
  e.schema || (e.url = "http://" + e.url), e.schema === "mailto:" && !/^mailto:/i.test(e.url) && (e.url = "mailto:" + e.url);
};
lt.prototype.onCompile = function() {
};
var yQ = lt;
const ii = 2147483647, St = 36, tc = 1, Yi = 26, vQ = 38, xQ = 700, Dp = 72, Mp = 128, Op = "-", kQ = /^xn--/, wQ = /[^\0-\x7F]/, _Q = /[\x2E\u3002\uFF0E\uFF61]/g, AQ = {
  overflow: "Overflow: input needs wider integers to process",
  "not-basic": "Illegal input >= 0x80 (not a basic code point)",
  "invalid-input": "Invalid input"
}, rl = St - tc, Tt = Math.floor, ol = String.fromCharCode;
function jt(n) {
  throw new RangeError(AQ[n]);
}
function CQ(n, e) {
  const t = [];
  let i = n.length;
  for (; i--; )
    t[i] = e(n[i]);
  return t;
}
function Lp(n, e) {
  const t = n.split("@");
  let i = "";
  t.length > 1 && (i = t[0] + "@", n = t[1]), n = n.replace(_Q, ".");
  const r = n.split("."), o = CQ(r, e).join(".");
  return i + o;
}
function nc(n) {
  const e = [];
  let t = 0;
  const i = n.length;
  for (; t < i; ) {
    const r = n.charCodeAt(t++);
    if (r >= 55296 && r <= 56319 && t < i) {
      const o = n.charCodeAt(t++);
      (o & 64512) == 56320 ? e.push(((r & 1023) << 10) + (o & 1023) + 65536) : (e.push(r), t--);
    } else
      e.push(r);
  }
  return e;
}
const Rp = (n) => String.fromCodePoint(...n), SQ = function(n) {
  return n >= 48 && n < 58 ? 26 + (n - 48) : n >= 65 && n < 91 ? n - 65 : n >= 97 && n < 123 ? n - 97 : St;
}, vu = function(n, e) {
  return n + 22 + 75 * (n < 26) - ((e != 0) << 5);
}, Ip = function(n, e, t) {
  let i = 0;
  for (n = t ? Tt(n / xQ) : n >> 1, n += Tt(n / e); n > rl * Yi >> 1; i += St)
    n = Tt(n / rl);
  return Tt(i + (rl + 1) * n / (n + vQ));
}, ic = function(n) {
  const e = [], t = n.length;
  let i = 0, r = Mp, o = Dp, s = n.lastIndexOf(Op);
  s < 0 && (s = 0);
  for (let l = 0; l < s; ++l)
    n.charCodeAt(l) >= 128 && jt("not-basic"), e.push(n.charCodeAt(l));
  for (let l = s > 0 ? s + 1 : 0; l < t; ) {
    const a = i;
    for (let h = 1, u = St; ; u += St) {
      l >= t && jt("invalid-input");
      const f = SQ(n.charCodeAt(l++));
      f >= St && jt("invalid-input"), f > Tt((ii - i) / h) && jt("overflow"), i += f * h;
      const d = u <= o ? tc : u >= o + Yi ? Yi : u - o;
      if (f < d)
        break;
      const p = St - d;
      h > Tt(ii / p) && jt("overflow"), h *= p;
    }
    const c = e.length + 1;
    o = Ip(i - a, c, a == 0), Tt(i / c) > ii - r && jt("overflow"), r += Tt(i / c), i %= c, e.splice(i++, 0, r);
  }
  return String.fromCodePoint(...e);
}, rc = function(n) {
  const e = [];
  n = nc(n);
  const t = n.length;
  let i = Mp, r = 0, o = Dp;
  for (const a of n)
    a < 128 && e.push(ol(a));
  const s = e.length;
  let l = s;
  for (s && e.push(Op); l < t; ) {
    let a = ii;
    for (const h of n)
      h >= i && h < a && (a = h);
    const c = l + 1;
    a - i > Tt((ii - r) / c) && jt("overflow"), r += (a - i) * c, i = a;
    for (const h of n)
      if (h < i && ++r > ii && jt("overflow"), h === i) {
        let u = r;
        for (let f = St; ; f += St) {
          const d = f <= o ? tc : f >= o + Yi ? Yi : f - o;
          if (u < d)
            break;
          const p = u - d, m = St - d;
          e.push(
            ol(vu(d + p % m, 0))
          ), u = Tt(p / m);
        }
        e.push(ol(vu(u, 0))), o = Ip(r, c, l === s), r = 0, ++l;
      }
    ++r, ++i;
  }
  return e.join("");
}, Bp = function(n) {
  return Lp(n, function(e) {
    return kQ.test(e) ? ic(e.slice(4).toLowerCase()) : e;
  });
}, Np = function(n) {
  return Lp(n, function(e) {
    return wQ.test(e) ? "xn--" + rc(e) : e;
  });
}, TQ = {
  version: "2.1.0",
  ucs2: {
    decode: nc,
    encode: Rp
  },
  decode: ic,
  encode: rc,
  toASCII: Np,
  toUnicode: Bp
}, EQ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ucs2decode: nc,
  ucs2encode: Rp,
  decode: ic,
  encode: rc,
  toASCII: Np,
  toUnicode: Bp,
  default: TQ
}, Symbol.toStringTag, { value: "Module" })), DQ = /* @__PURE__ */ Ux(EQ);
var MQ = {
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
}, OQ = {
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
}, LQ = {
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
}, Fi = Z, RQ = is, IQ = LZ, BQ = tX, NQ = RX, PQ = oQ, FQ = yQ, An = bi, Pp = DQ, qQ = {
  default: MQ,
  zero: OQ,
  commonmark: LQ
}, HQ = /^(vbscript|javascript|file|data):/, zQ = /^data:image\/(gif|png|jpeg|webp);/;
function $Q(n) {
  var e = n.trim().toLowerCase();
  return HQ.test(e) ? !!zQ.test(e) : !0;
}
var Fp = ["http:", "https:", "mailto:"];
function VQ(n) {
  var e = An.parse(n, !0);
  if (e.hostname && (!e.protocol || Fp.indexOf(e.protocol) >= 0))
    try {
      e.hostname = Pp.toASCII(e.hostname);
    } catch {
    }
  return An.encode(An.format(e));
}
function UQ(n) {
  var e = An.parse(n, !0);
  if (e.hostname && (!e.protocol || Fp.indexOf(e.protocol) >= 0))
    try {
      e.hostname = Pp.toUnicode(e.hostname);
    } catch {
    }
  return An.decode(An.format(e), An.decode.defaultChars + "%");
}
function at(n, e) {
  if (!(this instanceof at))
    return new at(n, e);
  e || Fi.isString(n) || (e = n || {}, n = "default"), this.inline = new PQ(), this.block = new NQ(), this.core = new BQ(), this.renderer = new IQ(), this.linkify = new FQ(), this.validateLink = $Q, this.normalizeLink = VQ, this.normalizeLinkText = UQ, this.utils = Fi, this.helpers = Fi.assign({}, RQ), this.options = {}, this.configure(n), e && this.set(e);
}
at.prototype.set = function(n) {
  return Fi.assign(this.options, n), this;
};
at.prototype.configure = function(n) {
  var e = this, t;
  if (Fi.isString(n) && (t = n, n = qQ[t], !n))
    throw new Error('Wrong `markdown-it` preset "' + t + '", check name');
  if (!n)
    throw new Error("Wrong `markdown-it` preset, can't be empty");
  return n.options && e.set(n.options), n.components && Object.keys(n.components).forEach(function(i) {
    n.components[i].rules && e[i].ruler.enableOnly(n.components[i].rules), n.components[i].rules2 && e[i].ruler2.enableOnly(n.components[i].rules2);
  }), this;
};
at.prototype.enable = function(n, e) {
  var t = [];
  Array.isArray(n) || (n = [n]), ["core", "block", "inline"].forEach(function(r) {
    t = t.concat(this[r].ruler.enable(n, !0));
  }, this), t = t.concat(this.inline.ruler2.enable(n, !0));
  var i = n.filter(function(r) {
    return t.indexOf(r) < 0;
  });
  if (i.length && !e)
    throw new Error("MarkdownIt. Failed to enable unknown rule(s): " + i);
  return this;
};
at.prototype.disable = function(n, e) {
  var t = [];
  Array.isArray(n) || (n = [n]), ["core", "block", "inline"].forEach(function(r) {
    t = t.concat(this[r].ruler.disable(n, !0));
  }, this), t = t.concat(this.inline.ruler2.disable(n, !0));
  var i = n.filter(function(r) {
    return t.indexOf(r) < 0;
  });
  if (i.length && !e)
    throw new Error("MarkdownIt. Failed to disable unknown rule(s): " + i);
  return this;
};
at.prototype.use = function(n) {
  var e = [this].concat(Array.prototype.slice.call(arguments, 1));
  return n.apply(n, e), this;
};
at.prototype.parse = function(n, e) {
  if (typeof n != "string")
    throw new Error("Input data should be a String");
  var t = new this.core.State(n, this, e);
  return this.core.process(t), t.tokens;
};
at.prototype.render = function(n, e) {
  return e = e || {}, this.renderer.render(this.parse(n, e), this.options, e);
};
at.prototype.parseInline = function(n, e) {
  var t = new this.core.State(n, this, e);
  return t.inlineMode = !0, this.core.process(t), t.tokens;
};
at.prototype.renderInline = function(n, e) {
  return e = e || {}, this.renderer.render(this.parseInline(n, e), this.options, e);
};
var WQ = at;
(function(n) {
  n.exports = WQ;
})(yp);
const jQ = /* @__PURE__ */ Vx(yp.exports), GQ = ({
  buttons: n,
  initialClickedId: e = 2,
  clickCallback: t
}) => {
  const [i, r] = wt(e);
  return tt`
        ${n.map((o, s) => tt`<button type="button" key=${o} name=${o} onClick=${(l) => {
    r(s), t(l);
  }} class=${s === i ? "customButton active" : "customButton"}>
            </button>`)}
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
  replace(e, t, i) {
    let r = [];
    return this.decompose(0, e, r, 2), i.length && i.decompose(0, i.length, r, 3), this.decompose(t, this.length, r, 1), At.from(r, this.length - (t - e) + i.length);
  }
  append(e) {
    return this.replace(this.length, this.length, e);
  }
  slice(e, t = this.length) {
    let i = [];
    return this.decompose(e, t, i, 0), At.from(i, t - e);
  }
  eq(e) {
    if (e == this)
      return !0;
    if (e.length != this.length || e.lines != this.lines)
      return !1;
    let t = this.scanIdentical(e, 1), i = this.length - this.scanIdentical(e, -1), r = new qi(this), o = new qi(e);
    for (let s = t, l = t; ; ) {
      if (r.next(s), o.next(s), s = 0, r.lineBreak != o.lineBreak || r.done != o.done || r.value != o.value)
        return !1;
      if (l += r.value.length, r.done || l >= i)
        return !0;
    }
  }
  iter(e = 1) {
    return new qi(this, e);
  }
  iterRange(e, t = this.length) {
    return new qp(this, e, t);
  }
  iterLines(e, t) {
    let i;
    if (e == null)
      i = this.iter();
    else {
      t == null && (t = this.lines + 1);
      let r = this.line(e).from;
      i = this.iterRange(r, Math.max(r, t == this.lines + 1 ? this.length : t <= 1 ? 0 : this.line(t - 1).to));
    }
    return new Hp(i);
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
    return e.length == 1 && !e[0] ? J.empty : e.length <= 32 ? new de(e) : At.from(de.split(e, []));
  }
}
class de extends J {
  constructor(e, t = KQ(e)) {
    super(), this.text = e, this.length = t;
  }
  get lines() {
    return this.text.length;
  }
  get children() {
    return null;
  }
  lineInner(e, t, i, r) {
    for (let o = 0; ; o++) {
      let s = this.text[o], l = r + s.length;
      if ((t ? i : l) >= e)
        return new YQ(r, l, i, s);
      r = l + 1, i++;
    }
  }
  decompose(e, t, i, r) {
    let o = e <= 0 && t >= this.length ? this : new de(xu(this.text, e, t), Math.min(t, this.length) - Math.max(0, e));
    if (r & 1) {
      let s = i.pop(), l = to(o.text, s.text.slice(), 0, o.length);
      if (l.length <= 32)
        i.push(new de(l, s.length + o.length));
      else {
        let a = l.length >> 1;
        i.push(new de(l.slice(0, a)), new de(l.slice(a)));
      }
    } else
      i.push(o);
  }
  replace(e, t, i) {
    if (!(i instanceof de))
      return super.replace(e, t, i);
    let r = to(this.text, to(i.text, xu(this.text, 0, e)), t), o = this.length + i.length - (t - e);
    return r.length <= 32 ? new de(r, o) : At.from(de.split(r, []), o);
  }
  sliceString(e, t = this.length, i = `
`) {
    let r = "";
    for (let o = 0, s = 0; o <= t && s < this.text.length; s++) {
      let l = this.text[s], a = o + l.length;
      o > e && s && (r += i), e < a && t > o && (r += l.slice(Math.max(0, e - o), t - o)), o = a + 1;
    }
    return r;
  }
  flatten(e) {
    for (let t of this.text)
      e.push(t);
  }
  scanIdentical() {
    return 0;
  }
  static split(e, t) {
    let i = [], r = -1;
    for (let o of e)
      i.push(o), r += o.length + 1, i.length == 32 && (t.push(new de(i, r)), i = [], r = -1);
    return r > -1 && t.push(new de(i, r)), t;
  }
}
class At extends J {
  constructor(e, t) {
    super(), this.children = e, this.length = t, this.lines = 0;
    for (let i of e)
      this.lines += i.lines;
  }
  lineInner(e, t, i, r) {
    for (let o = 0; ; o++) {
      let s = this.children[o], l = r + s.length, a = i + s.lines - 1;
      if ((t ? a : l) >= e)
        return s.lineInner(e, t, i, r);
      r = l + 1, i = a + 1;
    }
  }
  decompose(e, t, i, r) {
    for (let o = 0, s = 0; s <= t && o < this.children.length; o++) {
      let l = this.children[o], a = s + l.length;
      if (e <= a && t >= s) {
        let c = r & ((s <= e ? 1 : 0) | (a >= t ? 2 : 0));
        s >= e && a <= t && !c ? i.push(l) : l.decompose(e - s, t - s, i, c);
      }
      s = a + 1;
    }
  }
  replace(e, t, i) {
    if (i.lines < this.lines)
      for (let r = 0, o = 0; r < this.children.length; r++) {
        let s = this.children[r], l = o + s.length;
        if (e >= o && t <= l) {
          let a = s.replace(e - o, t - o, i), c = this.lines - s.lines + a.lines;
          if (a.lines < c >> 5 - 1 && a.lines > c >> 5 + 1) {
            let h = this.children.slice();
            return h[r] = a, new At(h, this.length - (t - e) + i.length);
          }
          return super.replace(o, l, a);
        }
        o = l + 1;
      }
    return super.replace(e, t, i);
  }
  sliceString(e, t = this.length, i = `
`) {
    let r = "";
    for (let o = 0, s = 0; o < this.children.length && s <= t; o++) {
      let l = this.children[o], a = s + l.length;
      s > e && o && (r += i), e < a && t > s && (r += l.sliceString(e - s, t - s, i)), s = a + 1;
    }
    return r;
  }
  flatten(e) {
    for (let t of this.children)
      t.flatten(e);
  }
  scanIdentical(e, t) {
    if (!(e instanceof At))
      return 0;
    let i = 0, [r, o, s, l] = t > 0 ? [0, 0, this.children.length, e.children.length] : [this.children.length - 1, e.children.length - 1, -1, -1];
    for (; ; r += t, o += t) {
      if (r == s || o == l)
        return i;
      let a = this.children[r], c = e.children[o];
      if (a != c)
        return i + a.scanIdentical(c, t);
      i += a.length + 1;
    }
  }
  static from(e, t = e.reduce((i, r) => i + r.length + 1, -1)) {
    let i = 0;
    for (let d of e)
      i += d.lines;
    if (i < 32) {
      let d = [];
      for (let p of e)
        p.flatten(d);
      return new de(d, t);
    }
    let r = Math.max(32, i >> 5), o = r << 1, s = r >> 1, l = [], a = 0, c = -1, h = [];
    function u(d) {
      let p;
      if (d.lines > o && d instanceof At)
        for (let m of d.children)
          u(m);
      else
        d.lines > s && (a > s || !a) ? (f(), l.push(d)) : d instanceof de && a && (p = h[h.length - 1]) instanceof de && d.lines + p.lines <= 32 ? (a += d.lines, c += d.length + 1, h[h.length - 1] = new de(p.text.concat(d.text), p.length + 1 + d.length)) : (a + d.lines > r && f(), a += d.lines, c += d.length + 1, h.push(d));
    }
    function f() {
      a != 0 && (l.push(h.length == 1 ? h[0] : At.from(h, c)), c = -1, a = h.length = 0);
    }
    for (let d of e)
      u(d);
    return f(), l.length == 1 ? l[0] : new At(l, t);
  }
}
J.empty = /* @__PURE__ */ new de([""], 0);
function KQ(n) {
  let e = -1;
  for (let t of n)
    e += t.length + 1;
  return e;
}
function to(n, e, t = 0, i = 1e9) {
  for (let r = 0, o = 0, s = !0; o < n.length && r <= i; o++) {
    let l = n[o], a = r + l.length;
    a >= t && (a > i && (l = l.slice(0, i - r)), r < t && (l = l.slice(t - r)), s ? (e[e.length - 1] += l, s = !1) : e.push(l)), r = a + 1;
  }
  return e;
}
function xu(n, e, t) {
  return to(n, [""], e, t);
}
class qi {
  constructor(e, t = 1) {
    this.dir = t, this.done = !1, this.lineBreak = !1, this.value = "", this.nodes = [e], this.offsets = [t > 0 ? 1 : (e instanceof de ? e.text.length : e.children.length) << 1];
  }
  nextInner(e, t) {
    for (this.done = this.lineBreak = !1; ; ) {
      let i = this.nodes.length - 1, r = this.nodes[i], o = this.offsets[i], s = o >> 1, l = r instanceof de ? r.text.length : r.children.length;
      if (s == (t > 0 ? l : 0)) {
        if (i == 0)
          return this.done = !0, this.value = "", this;
        t > 0 && this.offsets[i - 1]++, this.nodes.pop(), this.offsets.pop();
      } else if ((o & 1) == (t > 0 ? 0 : 1)) {
        if (this.offsets[i] += t, e == 0)
          return this.lineBreak = !0, this.value = `
`, this;
        e--;
      } else if (r instanceof de) {
        let a = r.text[s + (t < 0 ? -1 : 0)];
        if (this.offsets[i] += t, a.length > Math.max(0, e))
          return this.value = e == 0 ? a : t > 0 ? a.slice(e) : a.slice(0, a.length - e), this;
        e -= a.length;
      } else {
        let a = r.children[s + (t < 0 ? -1 : 0)];
        e > a.length ? (e -= a.length, this.offsets[i] += t) : (t < 0 && this.offsets[i]--, this.nodes.push(a), this.offsets.push(t > 0 ? 1 : (a instanceof de ? a.text.length : a.children.length) << 1));
      }
    }
  }
  next(e = 0) {
    return e < 0 && (this.nextInner(-e, -this.dir), e = this.value.length), this.nextInner(e, this.dir);
  }
}
class qp {
  constructor(e, t, i) {
    this.value = "", this.done = !1, this.cursor = new qi(e, t > i ? -1 : 1), this.pos = t > i ? e.length : 0, this.from = Math.min(t, i), this.to = Math.max(t, i);
  }
  nextInner(e, t) {
    if (t < 0 ? this.pos <= this.from : this.pos >= this.to)
      return this.value = "", this.done = !0, this;
    e += Math.max(0, t < 0 ? this.pos - this.to : this.from - this.pos);
    let i = t < 0 ? this.pos - this.from : this.to - this.pos;
    e > i && (e = i), i -= e;
    let { value: r } = this.cursor.next(e);
    return this.pos += (r.length + e) * t, this.value = r.length <= i ? r : t < 0 ? r.slice(r.length - i) : r.slice(0, i), this.done = !this.value, this;
  }
  next(e = 0) {
    return e < 0 ? e = Math.max(e, this.from - this.pos) : e > 0 && (e = Math.min(e, this.to - this.pos)), this.nextInner(e, this.cursor.dir);
  }
  get lineBreak() {
    return this.cursor.lineBreak && this.value != "";
  }
}
class Hp {
  constructor(e) {
    this.inner = e, this.afterBreak = !0, this.value = "", this.done = !1;
  }
  next(e = 0) {
    let { done: t, lineBreak: i, value: r } = this.inner.next(e);
    return t ? (this.done = !0, this.value = "") : i ? this.afterBreak ? this.value = "" : (this.afterBreak = !0, this.next()) : (this.value = r, this.afterBreak = !1), this;
  }
  get lineBreak() {
    return !1;
  }
}
typeof Symbol < "u" && (J.prototype[Symbol.iterator] = function() {
  return this.iter();
}, qi.prototype[Symbol.iterator] = qp.prototype[Symbol.iterator] = Hp.prototype[Symbol.iterator] = function() {
  return this;
});
class YQ {
  constructor(e, t, i, r) {
    this.from = e, this.to = t, this.number = i, this.text = r;
  }
  get length() {
    return this.to - this.from;
  }
}
let ri = /* @__PURE__ */ "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map((n) => n ? parseInt(n, 36) : 1);
for (let n = 1; n < ri.length; n++)
  ri[n] += ri[n - 1];
function JQ(n) {
  for (let e = 1; e < ri.length; e += 2)
    if (ri[e] > n)
      return ri[e - 1] <= n;
  return !1;
}
function ku(n) {
  return n >= 127462 && n <= 127487;
}
const wu = 8205;
function Re(n, e, t = !0, i = !0) {
  return (t ? zp : ZQ)(n, e, i);
}
function zp(n, e, t) {
  if (e == n.length)
    return e;
  e && $p(n.charCodeAt(e)) && Vp(n.charCodeAt(e - 1)) && e--;
  let i = Se(n, e);
  for (e += nt(i); e < n.length; ) {
    let r = Se(n, e);
    if (i == wu || r == wu || t && JQ(r))
      e += nt(r), i = r;
    else if (ku(r)) {
      let o = 0, s = e - 2;
      for (; s >= 0 && ku(Se(n, s)); )
        o++, s -= 2;
      if (o % 2 == 0)
        break;
      e += 2;
    } else
      break;
  }
  return e;
}
function ZQ(n, e, t) {
  for (; e > 0; ) {
    let i = zp(n, e - 2, t);
    if (i < e)
      return i;
    e--;
  }
  return 0;
}
function $p(n) {
  return n >= 56320 && n < 57344;
}
function Vp(n) {
  return n >= 55296 && n < 56320;
}
function Se(n, e) {
  let t = n.charCodeAt(e);
  if (!Vp(t) || e + 1 == n.length)
    return t;
  let i = n.charCodeAt(e + 1);
  return $p(i) ? (t - 55296 << 10) + (i - 56320) + 65536 : t;
}
function oc(n) {
  return n <= 65535 ? String.fromCharCode(n) : (n -= 65536, String.fromCharCode((n >> 10) + 55296, (n & 1023) + 56320));
}
function nt(n) {
  return n < 65536 ? 1 : 2;
}
const Ul = /\r\n?|\n/;
var ze = /* @__PURE__ */ function(n) {
  return n[n.Simple = 0] = "Simple", n[n.TrackDel = 1] = "TrackDel", n[n.TrackBefore = 2] = "TrackBefore", n[n.TrackAfter = 3] = "TrackAfter", n;
}(ze || (ze = {}));
class Lt {
  constructor(e) {
    this.sections = e;
  }
  get length() {
    let e = 0;
    for (let t = 0; t < this.sections.length; t += 2)
      e += this.sections[t];
    return e;
  }
  get newLength() {
    let e = 0;
    for (let t = 0; t < this.sections.length; t += 2) {
      let i = this.sections[t + 1];
      e += i < 0 ? this.sections[t] : i;
    }
    return e;
  }
  get empty() {
    return this.sections.length == 0 || this.sections.length == 2 && this.sections[1] < 0;
  }
  iterGaps(e) {
    for (let t = 0, i = 0, r = 0; t < this.sections.length; ) {
      let o = this.sections[t++], s = this.sections[t++];
      s < 0 ? (e(i, r, o), r += o) : r += s, i += o;
    }
  }
  iterChangedRanges(e, t = !1) {
    Wl(this, e, t);
  }
  get invertedDesc() {
    let e = [];
    for (let t = 0; t < this.sections.length; ) {
      let i = this.sections[t++], r = this.sections[t++];
      r < 0 ? e.push(i, r) : e.push(r, i);
    }
    return new Lt(e);
  }
  composeDesc(e) {
    return this.empty ? e : e.empty ? this : Up(this, e);
  }
  mapDesc(e, t = !1) {
    return e.empty ? this : jl(this, e, t);
  }
  mapPos(e, t = -1, i = ze.Simple) {
    let r = 0, o = 0;
    for (let s = 0; s < this.sections.length; ) {
      let l = this.sections[s++], a = this.sections[s++], c = r + l;
      if (a < 0) {
        if (c > e)
          return o + (e - r);
        o += l;
      } else {
        if (i != ze.Simple && c >= e && (i == ze.TrackDel && r < e && c > e || i == ze.TrackBefore && r < e || i == ze.TrackAfter && c > e))
          return null;
        if (c > e || c == e && t < 0 && !l)
          return e == r || t < 0 ? o : o + a;
        o += a;
      }
      r = c;
    }
    if (e > r)
      throw new RangeError(`Position ${e} is out of range for changeset of length ${r}`);
    return o;
  }
  touchesRange(e, t = e) {
    for (let i = 0, r = 0; i < this.sections.length && r <= t; ) {
      let o = this.sections[i++], s = this.sections[i++], l = r + o;
      if (s >= 0 && r <= t && l >= e)
        return r < e && l > t ? "cover" : !0;
      r = l;
    }
    return !1;
  }
  toString() {
    let e = "";
    for (let t = 0; t < this.sections.length; ) {
      let i = this.sections[t++], r = this.sections[t++];
      e += (e ? " " : "") + i + (r >= 0 ? ":" + r : "");
    }
    return e;
  }
  toJSON() {
    return this.sections;
  }
  static fromJSON(e) {
    if (!Array.isArray(e) || e.length % 2 || e.some((t) => typeof t != "number"))
      throw new RangeError("Invalid JSON representation of ChangeDesc");
    return new Lt(e);
  }
  static create(e) {
    return new Lt(e);
  }
}
class ye extends Lt {
  constructor(e, t) {
    super(e), this.inserted = t;
  }
  apply(e) {
    if (this.length != e.length)
      throw new RangeError("Applying change set to a document with the wrong length");
    return Wl(this, (t, i, r, o, s) => e = e.replace(r, r + (i - t), s), !1), e;
  }
  mapDesc(e, t = !1) {
    return jl(this, e, t, !0);
  }
  invert(e) {
    let t = this.sections.slice(), i = [];
    for (let r = 0, o = 0; r < t.length; r += 2) {
      let s = t[r], l = t[r + 1];
      if (l >= 0) {
        t[r] = l, t[r + 1] = s;
        let a = r >> 1;
        for (; i.length < a; )
          i.push(J.empty);
        i.push(s ? e.slice(o, o + s) : J.empty);
      }
      o += s;
    }
    return new ye(t, i);
  }
  compose(e) {
    return this.empty ? e : e.empty ? this : Up(this, e, !0);
  }
  map(e, t = !1) {
    return e.empty ? this : jl(this, e, t, !0);
  }
  iterChanges(e, t = !1) {
    Wl(this, e, t);
  }
  get desc() {
    return Lt.create(this.sections);
  }
  filter(e) {
    let t = [], i = [], r = [], o = new Ji(this);
    e:
      for (let s = 0, l = 0; ; ) {
        let a = s == e.length ? 1e9 : e[s++];
        for (; l < a || l == a && o.len == 0; ) {
          if (o.done)
            break e;
          let h = Math.min(o.len, a - l);
          Le(r, h, -1);
          let u = o.ins == -1 ? -1 : o.off == 0 ? o.ins : 0;
          Le(t, h, u), u > 0 && Qt(i, t, o.text), o.forward(h), l += h;
        }
        let c = e[s++];
        for (; l < c; ) {
          if (o.done)
            break e;
          let h = Math.min(o.len, c - l);
          Le(t, h, -1), Le(r, h, o.ins == -1 ? -1 : o.off == 0 ? o.ins : 0), o.forward(h), l += h;
        }
      }
    return {
      changes: new ye(t, i),
      filtered: Lt.create(r)
    };
  }
  toJSON() {
    let e = [];
    for (let t = 0; t < this.sections.length; t += 2) {
      let i = this.sections[t], r = this.sections[t + 1];
      r < 0 ? e.push(i) : r == 0 ? e.push([i]) : e.push([i].concat(this.inserted[t >> 1].toJSON()));
    }
    return e;
  }
  static of(e, t, i) {
    let r = [], o = [], s = 0, l = null;
    function a(h = !1) {
      if (!h && !r.length)
        return;
      s < t && Le(r, t - s, -1);
      let u = new ye(r, o);
      l = l ? l.compose(u.map(l)) : u, r = [], o = [], s = 0;
    }
    function c(h) {
      if (Array.isArray(h))
        for (let u of h)
          c(u);
      else if (h instanceof ye) {
        if (h.length != t)
          throw new RangeError(`Mismatched change set length (got ${h.length}, expected ${t})`);
        a(), l = l ? l.compose(h.map(l)) : h;
      } else {
        let { from: u, to: f = u, insert: d } = h;
        if (u > f || u < 0 || f > t)
          throw new RangeError(`Invalid change range ${u} to ${f} (in doc of length ${t})`);
        let p = d ? typeof d == "string" ? J.of(d.split(i || Ul)) : d : J.empty, m = p.length;
        if (u == f && m == 0)
          return;
        u < s && a(), u > s && Le(r, u - s, -1), Le(r, f - u, m), Qt(o, r, p), s = f;
      }
    }
    return c(e), a(!l), l;
  }
  static empty(e) {
    return new ye(e ? [e, -1] : [], []);
  }
  static fromJSON(e) {
    if (!Array.isArray(e))
      throw new RangeError("Invalid JSON representation of ChangeSet");
    let t = [], i = [];
    for (let r = 0; r < e.length; r++) {
      let o = e[r];
      if (typeof o == "number")
        t.push(o, -1);
      else {
        if (!Array.isArray(o) || typeof o[0] != "number" || o.some((s, l) => l && typeof s != "string"))
          throw new RangeError("Invalid JSON representation of ChangeSet");
        if (o.length == 1)
          t.push(o[0], 0);
        else {
          for (; i.length < r; )
            i.push(J.empty);
          i[r] = J.of(o.slice(1)), t.push(o[0], i[r].length);
        }
      }
    }
    return new ye(t, i);
  }
  static createSet(e, t) {
    return new ye(e, t);
  }
}
function Le(n, e, t, i = !1) {
  if (e == 0 && t <= 0)
    return;
  let r = n.length - 2;
  r >= 0 && t <= 0 && t == n[r + 1] ? n[r] += e : e == 0 && n[r] == 0 ? n[r + 1] += t : i ? (n[r] += e, n[r + 1] += t) : n.push(e, t);
}
function Qt(n, e, t) {
  if (t.length == 0)
    return;
  let i = e.length - 2 >> 1;
  if (i < n.length)
    n[n.length - 1] = n[n.length - 1].append(t);
  else {
    for (; n.length < i; )
      n.push(J.empty);
    n.push(t);
  }
}
function Wl(n, e, t) {
  let i = n.inserted;
  for (let r = 0, o = 0, s = 0; s < n.sections.length; ) {
    let l = n.sections[s++], a = n.sections[s++];
    if (a < 0)
      r += l, o += l;
    else {
      let c = r, h = o, u = J.empty;
      for (; c += l, h += a, a && i && (u = u.append(i[s - 2 >> 1])), !(t || s == n.sections.length || n.sections[s + 1] < 0); )
        l = n.sections[s++], a = n.sections[s++];
      e(r, c, o, h, u), r = c, o = h;
    }
  }
}
function jl(n, e, t, i = !1) {
  let r = [], o = i ? [] : null, s = new Ji(n), l = new Ji(e);
  for (let a = -1; ; )
    if (s.ins == -1 && l.ins == -1) {
      let c = Math.min(s.len, l.len);
      Le(r, c, -1), s.forward(c), l.forward(c);
    } else if (l.ins >= 0 && (s.ins < 0 || a == s.i || s.off == 0 && (l.len < s.len || l.len == s.len && !t))) {
      let c = l.len;
      for (Le(r, l.ins, -1); c; ) {
        let h = Math.min(s.len, c);
        s.ins >= 0 && a < s.i && s.len <= h && (Le(r, 0, s.ins), o && Qt(o, r, s.text), a = s.i), s.forward(h), c -= h;
      }
      l.next();
    } else if (s.ins >= 0) {
      let c = 0, h = s.len;
      for (; h; )
        if (l.ins == -1) {
          let u = Math.min(h, l.len);
          c += u, h -= u, l.forward(u);
        } else if (l.ins == 0 && l.len < h)
          h -= l.len, l.next();
        else
          break;
      Le(r, c, a < s.i ? s.ins : 0), o && a < s.i && Qt(o, r, s.text), a = s.i, s.forward(s.len - h);
    } else {
      if (s.done && l.done)
        return o ? ye.createSet(r, o) : Lt.create(r);
      throw new Error("Mismatched change set lengths");
    }
}
function Up(n, e, t = !1) {
  let i = [], r = t ? [] : null, o = new Ji(n), s = new Ji(e);
  for (let l = !1; ; ) {
    if (o.done && s.done)
      return r ? ye.createSet(i, r) : Lt.create(i);
    if (o.ins == 0)
      Le(i, o.len, 0, l), o.next();
    else if (s.len == 0 && !s.done)
      Le(i, 0, s.ins, l), r && Qt(r, i, s.text), s.next();
    else {
      if (o.done || s.done)
        throw new Error("Mismatched change set lengths");
      {
        let a = Math.min(o.len2, s.len), c = i.length;
        if (o.ins == -1) {
          let h = s.ins == -1 ? -1 : s.off ? 0 : s.ins;
          Le(i, a, h, l), r && h && Qt(r, i, s.text);
        } else
          s.ins == -1 ? (Le(i, o.off ? 0 : o.len, a, l), r && Qt(r, i, o.textBit(a))) : (Le(i, o.off ? 0 : o.len, s.off ? 0 : s.ins, l), r && !s.off && Qt(r, i, s.text));
        l = (o.ins > a || s.ins >= 0 && s.len > a) && (l || i.length > c), o.forward2(a), s.forward(a);
      }
    }
  }
}
class Ji {
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
    let { inserted: e } = this.set, t = this.i - 2 >> 1;
    return t >= e.length ? J.empty : e[t];
  }
  textBit(e) {
    let { inserted: t } = this.set, i = this.i - 2 >> 1;
    return i >= t.length && !e ? J.empty : t[i].slice(this.off, e == null ? void 0 : this.off + e);
  }
  forward(e) {
    e == this.len ? this.next() : (this.len -= e, this.off += e);
  }
  forward2(e) {
    this.ins == -1 ? this.forward(e) : e == this.ins ? this.next() : (this.ins -= e, this.off += e);
  }
}
class Cn {
  constructor(e, t, i) {
    this.from = e, this.to = t, this.flags = i;
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
  map(e, t = -1) {
    let i, r;
    return this.empty ? i = r = e.mapPos(this.from, t) : (i = e.mapPos(this.from, 1), r = e.mapPos(this.to, -1)), i == this.from && r == this.to ? this : new Cn(i, r, this.flags);
  }
  extend(e, t = e) {
    if (e <= this.anchor && t >= this.anchor)
      return A.range(e, t);
    let i = Math.abs(e - this.anchor) > Math.abs(t - this.anchor) ? e : t;
    return A.range(this.anchor, i);
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
  static create(e, t, i) {
    return new Cn(e, t, i);
  }
}
class A {
  constructor(e, t) {
    this.ranges = e, this.mainIndex = t;
  }
  map(e, t = -1) {
    return e.empty ? this : A.create(this.ranges.map((i) => i.map(e, t)), this.mainIndex);
  }
  eq(e) {
    if (this.ranges.length != e.ranges.length || this.mainIndex != e.mainIndex)
      return !1;
    for (let t = 0; t < this.ranges.length; t++)
      if (!this.ranges[t].eq(e.ranges[t]))
        return !1;
    return !0;
  }
  get main() {
    return this.ranges[this.mainIndex];
  }
  asSingle() {
    return this.ranges.length == 1 ? this : new A([this.main], 0);
  }
  addRange(e, t = !0) {
    return A.create([e].concat(this.ranges), t ? 0 : this.mainIndex + 1);
  }
  replaceRange(e, t = this.mainIndex) {
    let i = this.ranges.slice();
    return i[t] = e, A.create(i, this.mainIndex);
  }
  toJSON() {
    return { ranges: this.ranges.map((e) => e.toJSON()), main: this.mainIndex };
  }
  static fromJSON(e) {
    if (!e || !Array.isArray(e.ranges) || typeof e.main != "number" || e.main >= e.ranges.length)
      throw new RangeError("Invalid JSON representation for EditorSelection");
    return new A(e.ranges.map((t) => Cn.fromJSON(t)), e.main);
  }
  static single(e, t = e) {
    return new A([A.range(e, t)], 0);
  }
  static create(e, t = 0) {
    if (e.length == 0)
      throw new RangeError("A selection needs at least one range");
    for (let i = 0, r = 0; r < e.length; r++) {
      let o = e[r];
      if (o.empty ? o.from <= i : o.from < i)
        return A.normalized(e.slice(), t);
      i = o.to;
    }
    return new A(e, t);
  }
  static cursor(e, t = 0, i, r) {
    return Cn.create(e, e, (t == 0 ? 0 : t < 0 ? 4 : 8) | (i == null ? 3 : Math.min(2, i)) | (r != null ? r : 33554431) << 5);
  }
  static range(e, t, i, r) {
    let o = (i != null ? i : 33554431) << 5 | (r == null ? 3 : Math.min(2, r));
    return t < e ? Cn.create(t, e, 24 | o) : Cn.create(e, t, (t > e ? 4 : 0) | o);
  }
  static normalized(e, t = 0) {
    let i = e[t];
    e.sort((r, o) => r.from - o.from), t = e.indexOf(i);
    for (let r = 1; r < e.length; r++) {
      let o = e[r], s = e[r - 1];
      if (o.empty ? o.from <= s.to : o.from < s.to) {
        let l = s.from, a = Math.max(o.to, s.to);
        r <= t && t--, e.splice(--r, 2, o.anchor > o.head ? A.range(a, l) : A.range(l, a));
      }
    }
    return new A(e, t);
  }
}
function Wp(n, e) {
  for (let t of n.ranges)
    if (t.to > e)
      throw new RangeError("Selection points outside of document");
}
let sc = 0;
class B {
  constructor(e, t, i, r, o) {
    this.combine = e, this.compareInput = t, this.compare = i, this.isStatic = r, this.id = sc++, this.default = e([]), this.extensions = typeof o == "function" ? o(this) : o;
  }
  static define(e = {}) {
    return new B(e.combine || ((t) => t), e.compareInput || ((t, i) => t === i), e.compare || (e.combine ? (t, i) => t === i : lc), !!e.static, e.enables);
  }
  of(e) {
    return new no([], this, 0, e);
  }
  compute(e, t) {
    if (this.isStatic)
      throw new Error("Can't compute a static facet");
    return new no(e, this, 1, t);
  }
  computeN(e, t) {
    if (this.isStatic)
      throw new Error("Can't compute a static facet");
    return new no(e, this, 2, t);
  }
  from(e, t) {
    return t || (t = (i) => i), this.compute([e], (i) => t(i.field(e)));
  }
}
function lc(n, e) {
  return n == e || n.length == e.length && n.every((t, i) => t === e[i]);
}
class no {
  constructor(e, t, i, r) {
    this.dependencies = e, this.facet = t, this.type = i, this.value = r, this.id = sc++;
  }
  dynamicSlot(e) {
    var t;
    let i = this.value, r = this.facet.compareInput, o = this.id, s = e[o] >> 1, l = this.type == 2, a = !1, c = !1, h = [];
    for (let u of this.dependencies)
      u == "doc" ? a = !0 : u == "selection" ? c = !0 : (((t = e[u.id]) !== null && t !== void 0 ? t : 1) & 1) == 0 && h.push(e[u.id]);
    return {
      create(u) {
        return u.values[s] = i(u), 1;
      },
      update(u, f) {
        if (a && f.docChanged || c && (f.docChanged || f.selection) || Gl(u, h)) {
          let d = i(u);
          if (l ? !_u(d, u.values[s], r) : !r(d, u.values[s]))
            return u.values[s] = d, 1;
        }
        return 0;
      },
      reconfigure: (u, f) => {
        let d, p = f.config.address[o];
        if (p != null) {
          let m = So(f, p);
          if (this.dependencies.every((g) => g instanceof B ? f.facet(g) === u.facet(g) : g instanceof Me ? f.field(g, !1) == u.field(g, !1) : !0) || (l ? _u(d = i(u), m, r) : r(d = i(u), m)))
            return u.values[s] = m, 0;
        } else
          d = i(u);
        return u.values[s] = d, 1;
      }
    };
  }
}
function _u(n, e, t) {
  if (n.length != e.length)
    return !1;
  for (let i = 0; i < n.length; i++)
    if (!t(n[i], e[i]))
      return !1;
  return !0;
}
function Gl(n, e) {
  let t = !1;
  for (let i of e)
    Hi(n, i) & 1 && (t = !0);
  return t;
}
function XQ(n, e, t) {
  let i = t.map((a) => n[a.id]), r = t.map((a) => a.type), o = i.filter((a) => !(a & 1)), s = n[e.id] >> 1;
  function l(a) {
    let c = [];
    for (let h = 0; h < i.length; h++) {
      let u = So(a, i[h]);
      if (r[h] == 2)
        for (let f of u)
          c.push(f);
      else
        c.push(u);
    }
    return e.combine(c);
  }
  return {
    create(a) {
      for (let c of i)
        Hi(a, c);
      return a.values[s] = l(a), 1;
    },
    update(a, c) {
      if (!Gl(a, o))
        return 0;
      let h = l(a);
      return e.compare(h, a.values[s]) ? 0 : (a.values[s] = h, 1);
    },
    reconfigure(a, c) {
      let h = Gl(a, i), u = c.config.facets[e.id], f = c.facet(e);
      if (u && !h && lc(t, u))
        return a.values[s] = f, 0;
      let d = l(a);
      return e.compare(d, f) ? (a.values[s] = f, 0) : (a.values[s] = d, 1);
    }
  };
}
const Au = /* @__PURE__ */ B.define({ static: !0 });
class Me {
  constructor(e, t, i, r, o) {
    this.id = e, this.createF = t, this.updateF = i, this.compareF = r, this.spec = o, this.provides = void 0;
  }
  static define(e) {
    let t = new Me(sc++, e.create, e.update, e.compare || ((i, r) => i === r), e);
    return e.provide && (t.provides = e.provide(t)), t;
  }
  create(e) {
    let t = e.facet(Au).find((i) => i.field == this);
    return ((t == null ? void 0 : t.create) || this.createF)(e);
  }
  slot(e) {
    let t = e[this.id] >> 1;
    return {
      create: (i) => (i.values[t] = this.create(i), 1),
      update: (i, r) => {
        let o = i.values[t], s = this.updateF(o, r);
        return this.compareF(o, s) ? 0 : (i.values[t] = s, 1);
      },
      reconfigure: (i, r) => r.config.address[this.id] != null ? (i.values[t] = r.field(this), 0) : (i.values[t] = this.create(i), 1)
    };
  }
  init(e) {
    return [this, Au.of({ field: this, create: e })];
  }
  get extension() {
    return this;
  }
}
const wn = { lowest: 4, low: 3, default: 2, high: 1, highest: 0 };
function Ti(n) {
  return (e) => new jp(e, n);
}
const xi = {
  highest: /* @__PURE__ */ Ti(wn.highest),
  high: /* @__PURE__ */ Ti(wn.high),
  default: /* @__PURE__ */ Ti(wn.default),
  low: /* @__PURE__ */ Ti(wn.low),
  lowest: /* @__PURE__ */ Ti(wn.lowest)
};
class jp {
  constructor(e, t) {
    this.inner = e, this.prec = t;
  }
}
class hs {
  of(e) {
    return new Kl(this, e);
  }
  reconfigure(e) {
    return hs.reconfigure.of({ compartment: this, extension: e });
  }
  get(e) {
    return e.config.compartments.get(this);
  }
}
class Kl {
  constructor(e, t) {
    this.compartment = e, this.inner = t;
  }
}
class Co {
  constructor(e, t, i, r, o, s) {
    for (this.base = e, this.compartments = t, this.dynamicSlots = i, this.address = r, this.staticValues = o, this.facets = s, this.statusTemplate = []; this.statusTemplate.length < i.length; )
      this.statusTemplate.push(0);
  }
  staticFacet(e) {
    let t = this.address[e.id];
    return t == null ? e.default : this.staticValues[t >> 1];
  }
  static resolve(e, t, i) {
    let r = [], o = /* @__PURE__ */ Object.create(null), s = /* @__PURE__ */ new Map();
    for (let f of QQ(e, t, s))
      f instanceof Me ? r.push(f) : (o[f.facet.id] || (o[f.facet.id] = [])).push(f);
    let l = /* @__PURE__ */ Object.create(null), a = [], c = [];
    for (let f of r)
      l[f.id] = c.length << 1, c.push((d) => f.slot(d));
    let h = i == null ? void 0 : i.config.facets;
    for (let f in o) {
      let d = o[f], p = d[0].facet, m = h && h[f] || [];
      if (d.every((g) => g.type == 0))
        if (l[p.id] = a.length << 1 | 1, lc(m, d))
          a.push(i.facet(p));
        else {
          let g = p.combine(d.map((b) => b.value));
          a.push(i && p.compare(g, i.facet(p)) ? i.facet(p) : g);
        }
      else {
        for (let g of d)
          g.type == 0 ? (l[g.id] = a.length << 1 | 1, a.push(g.value)) : (l[g.id] = c.length << 1, c.push((b) => g.dynamicSlot(b)));
        l[p.id] = c.length << 1, c.push((g) => XQ(g, p, d));
      }
    }
    let u = c.map((f) => f(l));
    return new Co(e, s, u, l, a, o);
  }
}
function QQ(n, e, t) {
  let i = [[], [], [], [], []], r = /* @__PURE__ */ new Map();
  function o(s, l) {
    let a = r.get(s);
    if (a != null) {
      if (a <= l)
        return;
      let c = i[a].indexOf(s);
      c > -1 && i[a].splice(c, 1), s instanceof Kl && t.delete(s.compartment);
    }
    if (r.set(s, l), Array.isArray(s))
      for (let c of s)
        o(c, l);
    else if (s instanceof Kl) {
      if (t.has(s.compartment))
        throw new RangeError("Duplicate use of compartment in extensions");
      let c = e.get(s.compartment) || s.inner;
      t.set(s.compartment, c), o(c, l);
    } else if (s instanceof jp)
      o(s.inner, s.prec);
    else if (s instanceof Me)
      i[l].push(s), s.provides && o(s.provides, l);
    else if (s instanceof no)
      i[l].push(s), s.facet.extensions && o(s.facet.extensions, wn.default);
    else {
      let c = s.extension;
      if (!c)
        throw new Error(`Unrecognized extension value in extension set (${s}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);
      o(c, l);
    }
  }
  return o(n, wn.default), i.reduce((s, l) => s.concat(l));
}
function Hi(n, e) {
  if (e & 1)
    return 2;
  let t = e >> 1, i = n.status[t];
  if (i == 4)
    throw new Error("Cyclic dependency between fields and/or facets");
  if (i & 2)
    return i;
  n.status[t] = 4;
  let r = n.computeSlot(n, n.config.dynamicSlots[t]);
  return n.status[t] = 2 | r;
}
function So(n, e) {
  return e & 1 ? n.config.staticValues[e >> 1] : n.values[e >> 1];
}
const Gp = /* @__PURE__ */ B.define(), Kp = /* @__PURE__ */ B.define({
  combine: (n) => n.some((e) => e),
  static: !0
}), Yp = /* @__PURE__ */ B.define({
  combine: (n) => n.length ? n[0] : void 0,
  static: !0
}), Jp = /* @__PURE__ */ B.define(), Zp = /* @__PURE__ */ B.define(), Xp = /* @__PURE__ */ B.define(), Qp = /* @__PURE__ */ B.define({
  combine: (n) => n.length ? n[0] : !1
});
class Wt {
  constructor(e, t) {
    this.type = e, this.value = t;
  }
  static define() {
    return new eee();
  }
}
class eee {
  of(e) {
    return new Wt(this, e);
  }
}
class tee {
  constructor(e) {
    this.map = e;
  }
  of(e) {
    return new W(this, e);
  }
}
class W {
  constructor(e, t) {
    this.type = e, this.value = t;
  }
  map(e) {
    let t = this.type.map(this.value, e);
    return t === void 0 ? void 0 : t == this.value ? this : new W(this.type, t);
  }
  is(e) {
    return this.type == e;
  }
  static define(e = {}) {
    return new tee(e.map || ((t) => t));
  }
  static mapEffects(e, t) {
    if (!e.length)
      return e;
    let i = [];
    for (let r of e) {
      let o = r.map(t);
      o && i.push(o);
    }
    return i;
  }
}
W.reconfigure = /* @__PURE__ */ W.define();
W.appendConfig = /* @__PURE__ */ W.define();
class xe {
  constructor(e, t, i, r, o, s) {
    this.startState = e, this.changes = t, this.selection = i, this.effects = r, this.annotations = o, this.scrollIntoView = s, this._doc = null, this._state = null, i && Wp(i, t.newLength), o.some((l) => l.type == xe.time) || (this.annotations = o.concat(xe.time.of(Date.now())));
  }
  static create(e, t, i, r, o, s) {
    return new xe(e, t, i, r, o, s);
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
    for (let t of this.annotations)
      if (t.type == e)
        return t.value;
  }
  get docChanged() {
    return !this.changes.empty;
  }
  get reconfigured() {
    return this.startState.config != this.state.config;
  }
  isUserEvent(e) {
    let t = this.annotation(xe.userEvent);
    return !!(t && (t == e || t.length > e.length && t.slice(0, e.length) == e && t[e.length] == "."));
  }
}
xe.time = /* @__PURE__ */ Wt.define();
xe.userEvent = /* @__PURE__ */ Wt.define();
xe.addToHistory = /* @__PURE__ */ Wt.define();
xe.remote = /* @__PURE__ */ Wt.define();
function nee(n, e) {
  let t = [];
  for (let i = 0, r = 0; ; ) {
    let o, s;
    if (i < n.length && (r == e.length || e[r] >= n[i]))
      o = n[i++], s = n[i++];
    else if (r < e.length)
      o = e[r++], s = e[r++];
    else
      return t;
    !t.length || t[t.length - 1] < o ? t.push(o, s) : t[t.length - 1] < s && (t[t.length - 1] = s);
  }
}
function em(n, e, t) {
  var i;
  let r, o, s;
  return t ? (r = e.changes, o = ye.empty(e.changes.length), s = n.changes.compose(e.changes)) : (r = e.changes.map(n.changes), o = n.changes.mapDesc(e.changes, !0), s = n.changes.compose(r)), {
    changes: s,
    selection: e.selection ? e.selection.map(o) : (i = n.selection) === null || i === void 0 ? void 0 : i.map(r),
    effects: W.mapEffects(n.effects, r).concat(W.mapEffects(e.effects, o)),
    annotations: n.annotations.length ? n.annotations.concat(e.annotations) : e.annotations,
    scrollIntoView: n.scrollIntoView || e.scrollIntoView
  };
}
function Yl(n, e, t) {
  let i = e.selection, r = oi(e.annotations);
  return e.userEvent && (r = r.concat(xe.userEvent.of(e.userEvent))), {
    changes: e.changes instanceof ye ? e.changes : ye.of(e.changes || [], t, n.facet(Yp)),
    selection: i && (i instanceof A ? i : A.single(i.anchor, i.head)),
    effects: oi(e.effects),
    annotations: r,
    scrollIntoView: !!e.scrollIntoView
  };
}
function tm(n, e, t) {
  let i = Yl(n, e.length ? e[0] : {}, n.doc.length);
  e.length && e[0].filter === !1 && (t = !1);
  for (let o = 1; o < e.length; o++) {
    e[o].filter === !1 && (t = !1);
    let s = !!e[o].sequential;
    i = em(i, Yl(n, e[o], s ? i.changes.newLength : n.doc.length), s);
  }
  let r = xe.create(n, i.changes, i.selection, i.effects, i.annotations, i.scrollIntoView);
  return ree(t ? iee(r) : r);
}
function iee(n) {
  let e = n.startState, t = !0;
  for (let r of e.facet(Jp)) {
    let o = r(n);
    if (o === !1) {
      t = !1;
      break;
    }
    Array.isArray(o) && (t = t === !0 ? o : nee(t, o));
  }
  if (t !== !0) {
    let r, o;
    if (t === !1)
      o = n.changes.invertedDesc, r = ye.empty(e.doc.length);
    else {
      let s = n.changes.filter(t);
      r = s.changes, o = s.filtered.mapDesc(s.changes).invertedDesc;
    }
    n = xe.create(e, r, n.selection && n.selection.map(o), W.mapEffects(n.effects, o), n.annotations, n.scrollIntoView);
  }
  let i = e.facet(Zp);
  for (let r = i.length - 1; r >= 0; r--) {
    let o = i[r](n);
    o instanceof xe ? n = o : Array.isArray(o) && o.length == 1 && o[0] instanceof xe ? n = o[0] : n = tm(e, oi(o), !1);
  }
  return n;
}
function ree(n) {
  let e = n.startState, t = e.facet(Xp), i = n;
  for (let r = t.length - 1; r >= 0; r--) {
    let o = t[r](n);
    o && Object.keys(o).length && (i = em(i, Yl(e, o, n.changes.newLength), !0));
  }
  return i == n ? n : xe.create(e, n.changes, n.selection, i.effects, i.annotations, i.scrollIntoView);
}
const oee = [];
function oi(n) {
  return n == null ? oee : Array.isArray(n) ? n : [n];
}
var re = /* @__PURE__ */ function(n) {
  return n[n.Word = 0] = "Word", n[n.Space = 1] = "Space", n[n.Other = 2] = "Other", n;
}(re || (re = {}));
const see = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
let Jl;
try {
  Jl = /* @__PURE__ */ new RegExp("[\\p{Alphabetic}\\p{Number}_]", "u");
} catch {
}
function lee(n) {
  if (Jl)
    return Jl.test(n);
  for (let e = 0; e < n.length; e++) {
    let t = n[e];
    if (/\w/.test(t) || t > "\x80" && (t.toUpperCase() != t.toLowerCase() || see.test(t)))
      return !0;
  }
  return !1;
}
function aee(n) {
  return (e) => {
    if (!/\S/.test(e))
      return re.Space;
    if (lee(e))
      return re.Word;
    for (let t = 0; t < n.length; t++)
      if (e.indexOf(n[t]) > -1)
        return re.Word;
    return re.Other;
  };
}
class K {
  constructor(e, t, i, r, o, s) {
    this.config = e, this.doc = t, this.selection = i, this.values = r, this.status = e.statusTemplate.slice(), this.computeSlot = o, s && (s._state = this);
    for (let l = 0; l < this.config.dynamicSlots.length; l++)
      Hi(this, l << 1);
    this.computeSlot = null;
  }
  field(e, t = !0) {
    let i = this.config.address[e.id];
    if (i == null) {
      if (t)
        throw new RangeError("Field is not present in this state");
      return;
    }
    return Hi(this, i), So(this, i);
  }
  update(...e) {
    return tm(this, e, !0);
  }
  applyTransaction(e) {
    let t = this.config, { base: i, compartments: r } = t;
    for (let s of e.effects)
      s.is(hs.reconfigure) ? (t && (r = /* @__PURE__ */ new Map(), t.compartments.forEach((l, a) => r.set(a, l)), t = null), r.set(s.value.compartment, s.value.extension)) : s.is(W.reconfigure) ? (t = null, i = s.value) : s.is(W.appendConfig) && (t = null, i = oi(i).concat(s.value));
    let o;
    t ? o = e.startState.values.slice() : (t = Co.resolve(i, r, this), o = new K(t, this.doc, this.selection, t.dynamicSlots.map(() => null), (l, a) => a.reconfigure(l, this), null).values), new K(t, e.newDoc, e.newSelection, o, (s, l) => l.update(s, e), e);
  }
  replaceSelection(e) {
    return typeof e == "string" && (e = this.toText(e)), this.changeByRange((t) => ({
      changes: { from: t.from, to: t.to, insert: e },
      range: A.cursor(t.from + e.length)
    }));
  }
  changeByRange(e) {
    let t = this.selection, i = e(t.ranges[0]), r = this.changes(i.changes), o = [i.range], s = oi(i.effects);
    for (let l = 1; l < t.ranges.length; l++) {
      let a = e(t.ranges[l]), c = this.changes(a.changes), h = c.map(r);
      for (let f = 0; f < l; f++)
        o[f] = o[f].map(h);
      let u = r.mapDesc(c, !0);
      o.push(a.range.map(u)), r = r.compose(h), s = W.mapEffects(s, h).concat(W.mapEffects(oi(a.effects), u));
    }
    return {
      changes: r,
      selection: A.create(o, t.mainIndex),
      effects: s
    };
  }
  changes(e = []) {
    return e instanceof ye ? e : ye.of(e, this.doc.length, this.facet(K.lineSeparator));
  }
  toText(e) {
    return J.of(e.split(this.facet(K.lineSeparator) || Ul));
  }
  sliceDoc(e = 0, t = this.doc.length) {
    return this.doc.sliceString(e, t, this.lineBreak);
  }
  facet(e) {
    let t = this.config.address[e.id];
    return t == null ? e.default : (Hi(this, t), So(this, t));
  }
  toJSON(e) {
    let t = {
      doc: this.sliceDoc(),
      selection: this.selection.toJSON()
    };
    if (e)
      for (let i in e) {
        let r = e[i];
        r instanceof Me && this.config.address[r.id] != null && (t[i] = r.spec.toJSON(this.field(e[i]), this));
      }
    return t;
  }
  static fromJSON(e, t = {}, i) {
    if (!e || typeof e.doc != "string")
      throw new RangeError("Invalid JSON representation for EditorState");
    let r = [];
    if (i) {
      for (let o in i)
        if (Object.prototype.hasOwnProperty.call(e, o)) {
          let s = i[o], l = e[o];
          r.push(s.init((a) => s.spec.fromJSON(l, a)));
        }
    }
    return K.create({
      doc: e.doc,
      selection: A.fromJSON(e.selection),
      extensions: t.extensions ? r.concat([t.extensions]) : r
    });
  }
  static create(e = {}) {
    let t = Co.resolve(e.extensions || [], /* @__PURE__ */ new Map()), i = e.doc instanceof J ? e.doc : J.of((e.doc || "").split(t.staticFacet(K.lineSeparator) || Ul)), r = e.selection ? e.selection instanceof A ? e.selection : A.single(e.selection.anchor, e.selection.head) : A.single(0);
    return Wp(r, i.length), t.staticFacet(Kp) || (r = r.asSingle()), new K(t, i, r, t.dynamicSlots.map(() => null), (o, s) => s.create(o), null);
  }
  get tabSize() {
    return this.facet(K.tabSize);
  }
  get lineBreak() {
    return this.facet(K.lineSeparator) || `
`;
  }
  get readOnly() {
    return this.facet(Qp);
  }
  phrase(e, ...t) {
    for (let i of this.facet(K.phrases))
      if (Object.prototype.hasOwnProperty.call(i, e)) {
        e = i[e];
        break;
      }
    return t.length && (e = e.replace(/\$(\$|\d*)/g, (i, r) => {
      if (r == "$")
        return "$";
      let o = +(r || 1);
      return !o || o > t.length ? i : t[o - 1];
    })), e;
  }
  languageDataAt(e, t, i = -1) {
    let r = [];
    for (let o of this.facet(Gp))
      for (let s of o(this, t, i))
        Object.prototype.hasOwnProperty.call(s, e) && r.push(s[e]);
    return r;
  }
  charCategorizer(e) {
    return aee(this.languageDataAt("wordChars", e).join(""));
  }
  wordAt(e) {
    let { text: t, from: i, length: r } = this.doc.lineAt(e), o = this.charCategorizer(e), s = e - i, l = e - i;
    for (; s > 0; ) {
      let a = Re(t, s, !1);
      if (o(t.slice(a, s)) != re.Word)
        break;
      s = a;
    }
    for (; l < r; ) {
      let a = Re(t, l);
      if (o(t.slice(l, a)) != re.Word)
        break;
      l = a;
    }
    return s == l ? null : A.range(s + i, l + i);
  }
}
K.allowMultipleSelections = Kp;
K.tabSize = /* @__PURE__ */ B.define({
  combine: (n) => n.length ? n[0] : 4
});
K.lineSeparator = Yp;
K.readOnly = Qp;
K.phrases = /* @__PURE__ */ B.define({
  compare(n, e) {
    let t = Object.keys(n), i = Object.keys(e);
    return t.length == i.length && t.every((r) => n[r] == e[r]);
  }
});
K.languageData = Gp;
K.changeFilter = Jp;
K.transactionFilter = Zp;
K.transactionExtender = Xp;
hs.reconfigure = /* @__PURE__ */ W.define();
function Nt(n, e, t = {}) {
  let i = {};
  for (let r of n)
    for (let o of Object.keys(r)) {
      let s = r[o], l = i[o];
      if (l === void 0)
        i[o] = s;
      else if (!(l === s || s === void 0))
        if (Object.hasOwnProperty.call(t, o))
          i[o] = t[o](l, s);
        else
          throw new Error("Config merge conflict for field " + o);
    }
  for (let r in e)
    i[r] === void 0 && (i[r] = e[r]);
  return i;
}
class Rn {
  eq(e) {
    return this == e;
  }
  range(e, t = e) {
    return Zi.create(e, t, this);
  }
}
Rn.prototype.startSide = Rn.prototype.endSide = 0;
Rn.prototype.point = !1;
Rn.prototype.mapMode = ze.TrackDel;
class Zi {
  constructor(e, t, i) {
    this.from = e, this.to = t, this.value = i;
  }
  static create(e, t, i) {
    return new Zi(e, t, i);
  }
}
function Zl(n, e) {
  return n.from - e.from || n.value.startSide - e.value.startSide;
}
class ac {
  constructor(e, t, i, r) {
    this.from = e, this.to = t, this.value = i, this.maxPoint = r;
  }
  get length() {
    return this.to[this.to.length - 1];
  }
  findIndex(e, t, i, r = 0) {
    let o = i ? this.to : this.from;
    for (let s = r, l = o.length; ; ) {
      if (s == l)
        return s;
      let a = s + l >> 1, c = o[a] - e || (i ? this.value[a].endSide : this.value[a].startSide) - t;
      if (a == s)
        return c >= 0 ? s : l;
      c >= 0 ? l = a : s = a + 1;
    }
  }
  between(e, t, i, r) {
    for (let o = this.findIndex(t, -1e9, !0), s = this.findIndex(i, 1e9, !1, o); o < s; o++)
      if (r(this.from[o] + e, this.to[o] + e, this.value[o]) === !1)
        return !1;
  }
  map(e, t) {
    let i = [], r = [], o = [], s = -1, l = -1;
    for (let a = 0; a < this.value.length; a++) {
      let c = this.value[a], h = this.from[a] + e, u = this.to[a] + e, f, d;
      if (h == u) {
        let p = t.mapPos(h, c.startSide, c.mapMode);
        if (p == null || (f = d = p, c.startSide != c.endSide && (d = t.mapPos(h, c.endSide), d < f)))
          continue;
      } else if (f = t.mapPos(h, c.startSide), d = t.mapPos(u, c.endSide), f > d || f == d && c.startSide > 0 && c.endSide <= 0)
        continue;
      (d - f || c.endSide - c.startSide) < 0 || (s < 0 && (s = f), c.point && (l = Math.max(l, d - f)), i.push(c), r.push(f - s), o.push(d - s));
    }
    return { mapped: i.length ? new ac(r, o, i, l) : null, pos: s };
  }
}
class X {
  constructor(e, t, i, r) {
    this.chunkPos = e, this.chunk = t, this.nextLayer = i, this.maxPoint = r;
  }
  static create(e, t, i, r) {
    return new X(e, t, i, r);
  }
  get length() {
    let e = this.chunk.length - 1;
    return e < 0 ? 0 : Math.max(this.chunkEnd(e), this.nextLayer.length);
  }
  get size() {
    if (this.isEmpty)
      return 0;
    let e = this.nextLayer.size;
    for (let t of this.chunk)
      e += t.value.length;
    return e;
  }
  chunkEnd(e) {
    return this.chunkPos[e] + this.chunk[e].length;
  }
  update(e) {
    let { add: t = [], sort: i = !1, filterFrom: r = 0, filterTo: o = this.length } = e, s = e.filter;
    if (t.length == 0 && !s)
      return this;
    if (i && (t = t.slice().sort(Zl)), this.isEmpty)
      return t.length ? X.of(t) : this;
    let l = new nm(this, null, -1).goto(0), a = 0, c = [], h = new ln();
    for (; l.value || a < t.length; )
      if (a < t.length && (l.from - t[a].from || l.startSide - t[a].value.startSide) >= 0) {
        let u = t[a++];
        h.addInner(u.from, u.to, u.value) || c.push(u);
      } else
        l.rangeIndex == 1 && l.chunkIndex < this.chunk.length && (a == t.length || this.chunkEnd(l.chunkIndex) < t[a].from) && (!s || r > this.chunkEnd(l.chunkIndex) || o < this.chunkPos[l.chunkIndex]) && h.addChunk(this.chunkPos[l.chunkIndex], this.chunk[l.chunkIndex]) ? l.nextChunk() : ((!s || r > l.to || o < l.from || s(l.from, l.to, l.value)) && (h.addInner(l.from, l.to, l.value) || c.push(Zi.create(l.from, l.to, l.value))), l.next());
    return h.finishInner(this.nextLayer.isEmpty && !c.length ? X.empty : this.nextLayer.update({ add: c, filter: s, filterFrom: r, filterTo: o }));
  }
  map(e) {
    if (e.empty || this.isEmpty)
      return this;
    let t = [], i = [], r = -1;
    for (let s = 0; s < this.chunk.length; s++) {
      let l = this.chunkPos[s], a = this.chunk[s], c = e.touchesRange(l, l + a.length);
      if (c === !1)
        r = Math.max(r, a.maxPoint), t.push(a), i.push(e.mapPos(l));
      else if (c === !0) {
        let { mapped: h, pos: u } = a.map(l, e);
        h && (r = Math.max(r, h.maxPoint), t.push(h), i.push(u));
      }
    }
    let o = this.nextLayer.map(e);
    return t.length == 0 ? o : new X(i, t, o || X.empty, r);
  }
  between(e, t, i) {
    if (!this.isEmpty) {
      for (let r = 0; r < this.chunk.length; r++) {
        let o = this.chunkPos[r], s = this.chunk[r];
        if (t >= o && e <= o + s.length && s.between(o, e - o, t - o, i) === !1)
          return;
      }
      this.nextLayer.between(e, t, i);
    }
  }
  iter(e = 0) {
    return Xi.from([this]).goto(e);
  }
  get isEmpty() {
    return this.nextLayer == this;
  }
  static iter(e, t = 0) {
    return Xi.from(e).goto(t);
  }
  static compare(e, t, i, r, o = -1) {
    let s = e.filter((u) => u.maxPoint > 0 || !u.isEmpty && u.maxPoint >= o), l = t.filter((u) => u.maxPoint > 0 || !u.isEmpty && u.maxPoint >= o), a = Cu(s, l, i), c = new Ei(s, a, o), h = new Ei(l, a, o);
    i.iterGaps((u, f, d) => Su(c, u, h, f, d, r)), i.empty && i.length == 0 && Su(c, 0, h, 0, 0, r);
  }
  static eq(e, t, i = 0, r) {
    r == null && (r = 1e9 - 1);
    let o = e.filter((h) => !h.isEmpty && t.indexOf(h) < 0), s = t.filter((h) => !h.isEmpty && e.indexOf(h) < 0);
    if (o.length != s.length)
      return !1;
    if (!o.length)
      return !0;
    let l = Cu(o, s), a = new Ei(o, l, 0).goto(i), c = new Ei(s, l, 0).goto(i);
    for (; ; ) {
      if (a.to != c.to || !Xl(a.active, c.active) || a.point && (!c.point || !a.point.eq(c.point)))
        return !1;
      if (a.to > r)
        return !0;
      a.next(), c.next();
    }
  }
  static spans(e, t, i, r, o = -1) {
    let s = new Ei(e, null, o).goto(t), l = t, a = s.openStart;
    for (; ; ) {
      let c = Math.min(s.to, i);
      if (s.point) {
        let h = s.activeForPoint(s.to), u = s.pointFrom < t ? h.length + 1 : Math.min(h.length, a);
        r.point(l, c, s.point, h, u, s.pointRank), a = Math.min(s.openEnd(c), h.length);
      } else
        c > l && (r.span(l, c, s.active, a), a = s.openEnd(c));
      if (s.to > i)
        return a + (s.point && s.to > i ? 1 : 0);
      l = s.to, s.next();
    }
  }
  static of(e, t = !1) {
    let i = new ln();
    for (let r of e instanceof Zi ? [e] : t ? cee(e) : e)
      i.add(r.from, r.to, r.value);
    return i.finish();
  }
}
X.empty = /* @__PURE__ */ new X([], [], null, -1);
function cee(n) {
  if (n.length > 1)
    for (let e = n[0], t = 1; t < n.length; t++) {
      let i = n[t];
      if (Zl(e, i) > 0)
        return n.slice().sort(Zl);
      e = i;
    }
  return n;
}
X.empty.nextLayer = X.empty;
class ln {
  finishChunk(e) {
    this.chunks.push(new ac(this.from, this.to, this.value, this.maxPoint)), this.chunkPos.push(this.chunkStart), this.chunkStart = -1, this.setMaxPoint = Math.max(this.setMaxPoint, this.maxPoint), this.maxPoint = -1, e && (this.from = [], this.to = [], this.value = []);
  }
  constructor() {
    this.chunks = [], this.chunkPos = [], this.chunkStart = -1, this.last = null, this.lastFrom = -1e9, this.lastTo = -1e9, this.from = [], this.to = [], this.value = [], this.maxPoint = -1, this.setMaxPoint = -1, this.nextLayer = null;
  }
  add(e, t, i) {
    this.addInner(e, t, i) || (this.nextLayer || (this.nextLayer = new ln())).add(e, t, i);
  }
  addInner(e, t, i) {
    let r = e - this.lastTo || i.startSide - this.last.endSide;
    if (r <= 0 && (e - this.lastFrom || i.startSide - this.last.startSide) < 0)
      throw new Error("Ranges must be added sorted by `from` position and `startSide`");
    return r < 0 ? !1 : (this.from.length == 250 && this.finishChunk(!0), this.chunkStart < 0 && (this.chunkStart = e), this.from.push(e - this.chunkStart), this.to.push(t - this.chunkStart), this.last = i, this.lastFrom = e, this.lastTo = t, this.value.push(i), i.point && (this.maxPoint = Math.max(this.maxPoint, t - e)), !0);
  }
  addChunk(e, t) {
    if ((e - this.lastTo || t.value[0].startSide - this.last.endSide) < 0)
      return !1;
    this.from.length && this.finishChunk(!0), this.setMaxPoint = Math.max(this.setMaxPoint, t.maxPoint), this.chunks.push(t), this.chunkPos.push(e);
    let i = t.value.length - 1;
    return this.last = t.value[i], this.lastFrom = t.from[i] + e, this.lastTo = t.to[i] + e, !0;
  }
  finish() {
    return this.finishInner(X.empty);
  }
  finishInner(e) {
    if (this.from.length && this.finishChunk(!1), this.chunks.length == 0)
      return e;
    let t = X.create(this.chunkPos, this.chunks, this.nextLayer ? this.nextLayer.finishInner(e) : e, this.setMaxPoint);
    return this.from = null, t;
  }
}
function Cu(n, e, t) {
  let i = /* @__PURE__ */ new Map();
  for (let o of n)
    for (let s = 0; s < o.chunk.length; s++)
      o.chunk[s].maxPoint <= 0 && i.set(o.chunk[s], o.chunkPos[s]);
  let r = /* @__PURE__ */ new Set();
  for (let o of e)
    for (let s = 0; s < o.chunk.length; s++) {
      let l = i.get(o.chunk[s]);
      l != null && (t ? t.mapPos(l) : l) == o.chunkPos[s] && !(t != null && t.touchesRange(l, l + o.chunk[s].length)) && r.add(o.chunk[s]);
    }
  return r;
}
class nm {
  constructor(e, t, i, r = 0) {
    this.layer = e, this.skip = t, this.minPoint = i, this.rank = r;
  }
  get startSide() {
    return this.value ? this.value.startSide : 0;
  }
  get endSide() {
    return this.value ? this.value.endSide : 0;
  }
  goto(e, t = -1e9) {
    return this.chunkIndex = this.rangeIndex = 0, this.gotoInner(e, t, !1), this;
  }
  gotoInner(e, t, i) {
    for (; this.chunkIndex < this.layer.chunk.length; ) {
      let r = this.layer.chunk[this.chunkIndex];
      if (!(this.skip && this.skip.has(r) || this.layer.chunkEnd(this.chunkIndex) < e || r.maxPoint < this.minPoint))
        break;
      this.chunkIndex++, i = !1;
    }
    if (this.chunkIndex < this.layer.chunk.length) {
      let r = this.layer.chunk[this.chunkIndex].findIndex(e - this.layer.chunkPos[this.chunkIndex], t, !0);
      (!i || this.rangeIndex < r) && this.setRangeIndex(r);
    }
    this.next();
  }
  forward(e, t) {
    (this.to - e || this.endSide - t) < 0 && this.gotoInner(e, t, !0);
  }
  next() {
    for (; ; )
      if (this.chunkIndex == this.layer.chunk.length) {
        this.from = this.to = 1e9, this.value = null;
        break;
      } else {
        let e = this.layer.chunkPos[this.chunkIndex], t = this.layer.chunk[this.chunkIndex], i = e + t.from[this.rangeIndex];
        if (this.from = i, this.to = e + t.to[this.rangeIndex], this.value = t.value[this.rangeIndex], this.setRangeIndex(this.rangeIndex + 1), this.minPoint < 0 || this.value.point && this.to - this.from >= this.minPoint)
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
class Xi {
  constructor(e) {
    this.heap = e;
  }
  static from(e, t = null, i = -1) {
    let r = [];
    for (let o = 0; o < e.length; o++)
      for (let s = e[o]; !s.isEmpty; s = s.nextLayer)
        s.maxPoint >= i && r.push(new nm(s, t, i, o));
    return r.length == 1 ? r[0] : new Xi(r);
  }
  get startSide() {
    return this.value ? this.value.startSide : 0;
  }
  goto(e, t = -1e9) {
    for (let i of this.heap)
      i.goto(e, t);
    for (let i = this.heap.length >> 1; i >= 0; i--)
      sl(this.heap, i);
    return this.next(), this;
  }
  forward(e, t) {
    for (let i of this.heap)
      i.forward(e, t);
    for (let i = this.heap.length >> 1; i >= 0; i--)
      sl(this.heap, i);
    (this.to - e || this.value.endSide - t) < 0 && this.next();
  }
  next() {
    if (this.heap.length == 0)
      this.from = this.to = 1e9, this.value = null, this.rank = -1;
    else {
      let e = this.heap[0];
      this.from = e.from, this.to = e.to, this.value = e.value, this.rank = e.rank, e.value && e.next(), sl(this.heap, 0);
    }
  }
}
function sl(n, e) {
  for (let t = n[e]; ; ) {
    let i = (e << 1) + 1;
    if (i >= n.length)
      break;
    let r = n[i];
    if (i + 1 < n.length && r.compare(n[i + 1]) >= 0 && (r = n[i + 1], i++), t.compare(r) < 0)
      break;
    n[i] = t, n[e] = r, e = i;
  }
}
class Ei {
  constructor(e, t, i) {
    this.minPoint = i, this.active = [], this.activeTo = [], this.activeRank = [], this.minActive = -1, this.point = null, this.pointFrom = 0, this.pointRank = 0, this.to = -1e9, this.endSide = 0, this.openStart = -1, this.cursor = Xi.from(e, t, i);
  }
  goto(e, t = -1e9) {
    return this.cursor.goto(e, t), this.active.length = this.activeTo.length = this.activeRank.length = 0, this.minActive = -1, this.to = e, this.endSide = t, this.openStart = -1, this.next(), this;
  }
  forward(e, t) {
    for (; this.minActive > -1 && (this.activeTo[this.minActive] - e || this.active[this.minActive].endSide - t) < 0; )
      this.removeActive(this.minActive);
    this.cursor.forward(e, t);
  }
  removeActive(e) {
    Er(this.active, e), Er(this.activeTo, e), Er(this.activeRank, e), this.minActive = Tu(this.active, this.activeTo);
  }
  addActive(e) {
    let t = 0, { value: i, to: r, rank: o } = this.cursor;
    for (; t < this.activeRank.length && this.activeRank[t] <= o; )
      t++;
    Dr(this.active, t, i), Dr(this.activeTo, t, r), Dr(this.activeRank, t, o), e && Dr(e, t, this.cursor.from), this.minActive = Tu(this.active, this.activeTo);
  }
  next() {
    let e = this.to, t = this.point;
    this.point = null;
    let i = this.openStart < 0 ? [] : null;
    for (; ; ) {
      let r = this.minActive;
      if (r > -1 && (this.activeTo[r] - this.cursor.from || this.active[r].endSide - this.cursor.startSide) < 0) {
        if (this.activeTo[r] > e) {
          this.to = this.activeTo[r], this.endSide = this.active[r].endSide;
          break;
        }
        this.removeActive(r), i && Er(i, r);
      } else if (this.cursor.value)
        if (this.cursor.from > e) {
          this.to = this.cursor.from, this.endSide = this.cursor.startSide;
          break;
        } else {
          let o = this.cursor.value;
          if (!o.point)
            this.addActive(i), this.cursor.next();
          else if (t && this.cursor.to == this.to && this.cursor.from < this.cursor.to)
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
    if (i) {
      this.openStart = 0;
      for (let r = i.length - 1; r >= 0 && i[r] < e; r--)
        this.openStart++;
    }
  }
  activeForPoint(e) {
    if (!this.active.length)
      return this.active;
    let t = [];
    for (let i = this.active.length - 1; i >= 0 && !(this.activeRank[i] < this.pointRank); i--)
      (this.activeTo[i] > e || this.activeTo[i] == e && this.active[i].endSide >= this.point.endSide) && t.push(this.active[i]);
    return t.reverse();
  }
  openEnd(e) {
    let t = 0;
    for (let i = this.activeTo.length - 1; i >= 0 && this.activeTo[i] > e; i--)
      t++;
    return t;
  }
}
function Su(n, e, t, i, r, o) {
  n.goto(e), t.goto(i);
  let s = i + r, l = i, a = i - e;
  for (; ; ) {
    let c = n.to + a - t.to || n.endSide - t.endSide, h = c < 0 ? n.to + a : t.to, u = Math.min(h, s);
    if (n.point || t.point ? n.point && t.point && (n.point == t.point || n.point.eq(t.point)) && Xl(n.activeForPoint(n.to), t.activeForPoint(t.to)) || o.comparePoint(l, u, n.point, t.point) : u > l && !Xl(n.active, t.active) && o.compareRange(l, u, n.active, t.active), h > s)
      break;
    l = h, c <= 0 && n.next(), c >= 0 && t.next();
  }
}
function Xl(n, e) {
  if (n.length != e.length)
    return !1;
  for (let t = 0; t < n.length; t++)
    if (n[t] != e[t] && !n[t].eq(e[t]))
      return !1;
  return !0;
}
function Er(n, e) {
  for (let t = e, i = n.length - 1; t < i; t++)
    n[t] = n[t + 1];
  n.pop();
}
function Dr(n, e, t) {
  for (let i = n.length - 1; i >= e; i--)
    n[i + 1] = n[i];
  n[e] = t;
}
function Tu(n, e) {
  let t = -1, i = 1e9;
  for (let r = 0; r < e.length; r++)
    (e[r] - i || n[r].endSide - n[t].endSide) < 0 && (t = r, i = e[r]);
  return t;
}
function ur(n, e, t = n.length) {
  let i = 0;
  for (let r = 0; r < t; )
    n.charCodeAt(r) == 9 ? (i += e - i % e, r++) : (i++, r = Re(n, r));
  return i;
}
function Ql(n, e, t, i) {
  for (let r = 0, o = 0; ; ) {
    if (o >= e)
      return r;
    if (r == n.length)
      break;
    o += n.charCodeAt(r) == 9 ? t - o % t : 1, r = Re(n, r);
  }
  return i === !0 ? -1 : n.length;
}
const ea = "\u037C", Eu = typeof Symbol > "u" ? "__" + ea : Symbol.for(ea), ta = typeof Symbol > "u" ? "__styleSet" + Math.floor(Math.random() * 1e8) : Symbol("styleSet"), Du = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : {};
class an {
  constructor(e, t) {
    this.rules = [];
    let { finish: i } = t || {};
    function r(s) {
      return /^@/.test(s) ? [s] : s.split(/,\s*/);
    }
    function o(s, l, a, c) {
      let h = [], u = /^@(\w+)\b/.exec(s[0]), f = u && u[1] == "keyframes";
      if (u && l == null)
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
          if (!u)
            throw new RangeError("The value of a property (" + d + ") should be a primitive value.");
          o(r(d), p, h, f);
        } else
          p != null && h.push(d.replace(/_.*/, "").replace(/[A-Z]/g, (m) => "-" + m.toLowerCase()) + ": " + p + ";");
      }
      (h.length || f) && a.push((i && !u && !c ? s.map(i) : s).join(", ") + " {" + h.join(" ") + "}");
    }
    for (let s in e)
      o(r(s), e[s], this.rules);
  }
  getRules() {
    return this.rules.join(`
`);
  }
  static newName() {
    let e = Du[Eu] || 1;
    return Du[Eu] = e + 1, ea + e.toString(36);
  }
  static mount(e, t) {
    (e[ta] || new hee(e)).mount(Array.isArray(t) ? t : [t]);
  }
}
let Mu = /* @__PURE__ */ new Map();
class hee {
  constructor(e) {
    let t = e.ownerDocument || e, i = t.defaultView;
    if (!e.head && e.adoptedStyleSheets && i.CSSStyleSheet) {
      let r = Mu.get(t);
      if (r)
        return e.adoptedStyleSheets = [r.sheet, ...e.adoptedStyleSheets], e[ta] = r;
      this.sheet = new i.CSSStyleSheet(), e.adoptedStyleSheets = [this.sheet, ...e.adoptedStyleSheets], Mu.set(t, this);
    } else {
      this.styleTag = t.createElement("style");
      let r = e.head || e;
      r.insertBefore(this.styleTag, r.firstChild);
    }
    this.modules = [], e[ta] = this;
  }
  mount(e) {
    let t = this.sheet, i = 0, r = 0;
    for (let o = 0; o < e.length; o++) {
      let s = e[o], l = this.modules.indexOf(s);
      if (l < r && l > -1 && (this.modules.splice(l, 1), r--, l = -1), l == -1) {
        if (this.modules.splice(r++, 0, s), t)
          for (let a = 0; a < s.rules.length; a++)
            t.insertRule(s.rules[a], i++);
      } else {
        for (; r < l; )
          i += this.modules[r++].rules.length;
        i += s.rules.length, r++;
      }
    }
    if (!t) {
      let o = "";
      for (let s = 0; s < this.modules.length; s++)
        o += this.modules[s].getRules() + `
`;
      this.styleTag.textContent = o;
    }
  }
}
var cn = {
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
}, Qi = {
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
}, uee = typeof navigator < "u" && /Mac/.test(navigator.platform), fee = typeof navigator < "u" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);
for (var Te = 0; Te < 10; Te++)
  cn[48 + Te] = cn[96 + Te] = String(Te);
for (var Te = 1; Te <= 24; Te++)
  cn[Te + 111] = "F" + Te;
for (var Te = 65; Te <= 90; Te++)
  cn[Te] = String.fromCharCode(Te + 32), Qi[Te] = String.fromCharCode(Te);
for (var ll in cn)
  Qi.hasOwnProperty(ll) || (Qi[ll] = cn[ll]);
function dee(n) {
  var e = uee && n.metaKey && n.shiftKey && !n.ctrlKey && !n.altKey || fee && n.shiftKey && n.key && n.key.length == 1 || n.key == "Unidentified", t = !e && n.key || (n.shiftKey ? Qi : cn)[n.keyCode] || n.key || "Unidentified";
  return t == "Esc" && (t = "Escape"), t == "Del" && (t = "Delete"), t == "Left" && (t = "ArrowLeft"), t == "Up" && (t = "ArrowUp"), t == "Right" && (t = "ArrowRight"), t == "Down" && (t = "ArrowDown"), t;
}
function To(n) {
  let e;
  return n.nodeType == 11 ? e = n.getSelection ? n : n.ownerDocument : e = n, e.getSelection();
}
function na(n, e) {
  return e ? n == e || n.contains(e.nodeType != 1 ? e.parentNode : e) : !1;
}
function pee(n) {
  let e = n.activeElement;
  for (; e && e.shadowRoot; )
    e = e.shadowRoot.activeElement;
  return e;
}
function io(n, e) {
  if (!e.anchorNode)
    return !1;
  try {
    return na(n, e.anchorNode);
  } catch {
    return !1;
  }
}
function er(n) {
  return n.nodeType == 3 ? In(n, 0, n.nodeValue.length).getClientRects() : n.nodeType == 1 ? n.getClientRects() : [];
}
function Eo(n, e, t, i) {
  return t ? Ou(n, e, t, i, -1) || Ou(n, e, t, i, 1) : !1;
}
function Do(n) {
  for (var e = 0; ; e++)
    if (n = n.previousSibling, !n)
      return e;
}
function Ou(n, e, t, i, r) {
  for (; ; ) {
    if (n == t && e == i)
      return !0;
    if (e == (r < 0 ? 0 : hn(n))) {
      if (n.nodeName == "DIV")
        return !1;
      let o = n.parentNode;
      if (!o || o.nodeType != 1)
        return !1;
      e = Do(n) + (r < 0 ? 0 : 1), n = o;
    } else if (n.nodeType == 1) {
      if (n = n.childNodes[e + (r < 0 ? -1 : 0)], n.nodeType == 1 && n.contentEditable == "false")
        return !1;
      e = r < 0 ? hn(n) : 0;
    } else
      return !1;
  }
}
function hn(n) {
  return n.nodeType == 3 ? n.nodeValue.length : n.childNodes.length;
}
function cc(n, e) {
  let t = e ? n.left : n.right;
  return { left: t, right: t, top: n.top, bottom: n.bottom };
}
function mee(n) {
  return {
    left: 0,
    right: n.innerWidth,
    top: 0,
    bottom: n.innerHeight
  };
}
function gee(n, e, t, i, r, o, s, l) {
  let a = n.ownerDocument, c = a.defaultView || window;
  for (let h = n, u = !1; h && !u; )
    if (h.nodeType == 1) {
      let f, d = h == a.body;
      if (d)
        f = mee(c);
      else {
        if (/^(fixed|sticky)$/.test(getComputedStyle(h).position) && (u = !0), h.scrollHeight <= h.clientHeight && h.scrollWidth <= h.clientWidth) {
          h = h.assignedSlot || h.parentNode;
          continue;
        }
        let g = h.getBoundingClientRect();
        f = {
          left: g.left,
          right: g.left + h.clientWidth,
          top: g.top,
          bottom: g.top + h.clientHeight
        };
      }
      let p = 0, m = 0;
      if (r == "nearest")
        e.top < f.top ? (m = -(f.top - e.top + s), t > 0 && e.bottom > f.bottom + m && (m = e.bottom - f.bottom + m + s)) : e.bottom > f.bottom && (m = e.bottom - f.bottom + s, t < 0 && e.top - m < f.top && (m = -(f.top + m - e.top + s)));
      else {
        let g = e.bottom - e.top, b = f.bottom - f.top;
        m = (r == "center" && g <= b ? e.top + g / 2 - b / 2 : r == "start" || r == "center" && t < 0 ? e.top - s : e.bottom - b + s) - f.top;
      }
      if (i == "nearest" ? e.left < f.left ? (p = -(f.left - e.left + o), t > 0 && e.right > f.right + p && (p = e.right - f.right + p + o)) : e.right > f.right && (p = e.right - f.right + o, t < 0 && e.left < f.left + p && (p = -(f.left + p - e.left + o))) : p = (i == "center" ? e.left + (e.right - e.left) / 2 - (f.right - f.left) / 2 : i == "start" == l ? e.left - o : e.right - (f.right - f.left) + o) - f.left, p || m)
        if (d)
          c.scrollBy(p, m);
        else {
          let g = 0, b = 0;
          if (m) {
            let y = h.scrollTop;
            h.scrollTop += m, b = h.scrollTop - y;
          }
          if (p) {
            let y = h.scrollLeft;
            h.scrollLeft += p, g = h.scrollLeft - y;
          }
          e = {
            left: e.left - g,
            top: e.top - b,
            right: e.right - g,
            bottom: e.bottom - b
          }, g && Math.abs(g - p) < 1 && (i = "nearest"), b && Math.abs(b - m) < 1 && (r = "nearest");
        }
      if (d)
        break;
      h = h.assignedSlot || h.parentNode;
    } else if (h.nodeType == 11)
      h = h.host;
    else
      break;
}
function bee(n) {
  let e = n.ownerDocument;
  for (let t = n.parentNode; t && t != e.body; )
    if (t.nodeType == 1) {
      if (t.scrollHeight > t.clientHeight || t.scrollWidth > t.clientWidth)
        return t;
      t = t.assignedSlot || t.parentNode;
    } else if (t.nodeType == 11)
      t = t.host;
    else
      break;
  return null;
}
class yee {
  constructor() {
    this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0;
  }
  eq(e) {
    return this.anchorNode == e.anchorNode && this.anchorOffset == e.anchorOffset && this.focusNode == e.focusNode && this.focusOffset == e.focusOffset;
  }
  setRange(e) {
    let { anchorNode: t, focusNode: i } = e;
    this.set(t, Math.min(e.anchorOffset, t ? hn(t) : 0), i, Math.min(e.focusOffset, i ? hn(i) : 0));
  }
  set(e, t, i, r) {
    this.anchorNode = e, this.anchorOffset = t, this.focusNode = i, this.focusOffset = r;
  }
}
let Gn = null;
function im(n) {
  if (n.setActive)
    return n.setActive();
  if (Gn)
    return n.focus(Gn);
  let e = [];
  for (let t = n; t && (e.push(t, t.scrollTop, t.scrollLeft), t != t.ownerDocument); t = t.parentNode)
    ;
  if (n.focus(Gn == null ? {
    get preventScroll() {
      return Gn = { preventScroll: !0 }, !0;
    }
  } : void 0), !Gn) {
    Gn = !1;
    for (let t = 0; t < e.length; ) {
      let i = e[t++], r = e[t++], o = e[t++];
      i.scrollTop != r && (i.scrollTop = r), i.scrollLeft != o && (i.scrollLeft = o);
    }
  }
}
let Lu;
function In(n, e, t = e) {
  let i = Lu || (Lu = document.createRange());
  return i.setEnd(n, t), i.setStart(n, e), i;
}
function si(n, e, t) {
  let i = { key: e, code: e, keyCode: t, which: t, cancelable: !0 }, r = new KeyboardEvent("keydown", i);
  r.synthetic = !0, n.dispatchEvent(r);
  let o = new KeyboardEvent("keyup", i);
  return o.synthetic = !0, n.dispatchEvent(o), r.defaultPrevented || o.defaultPrevented;
}
function vee(n) {
  for (; n; ) {
    if (n && (n.nodeType == 9 || n.nodeType == 11 && n.host))
      return n;
    n = n.assignedSlot || n.parentNode;
  }
  return null;
}
function rm(n) {
  for (; n.attributes.length; )
    n.removeAttributeNode(n.attributes[0]);
}
function xee(n, e) {
  let t = e.focusNode, i = e.focusOffset;
  if (!t || e.anchorNode != t || e.anchorOffset != i)
    return !1;
  for (i = Math.min(i, hn(t)); ; )
    if (i) {
      if (t.nodeType != 1)
        return !1;
      let r = t.childNodes[i - 1];
      r.contentEditable == "false" ? i-- : (t = r, i = hn(t));
    } else {
      if (t == n)
        return !0;
      i = Do(t), t = t.parentNode;
    }
}
function om(n) {
  return n.scrollTop > Math.max(1, n.scrollHeight - n.clientHeight - 4);
}
class $e {
  constructor(e, t, i = !0) {
    this.node = e, this.offset = t, this.precise = i;
  }
  static before(e, t) {
    return new $e(e.parentNode, Do(e), t);
  }
  static after(e, t) {
    return new $e(e.parentNode, Do(e) + 1, t);
  }
}
const hc = [];
class te {
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
    let t = this.posAtStart;
    for (let i of this.children) {
      if (i == e)
        return t;
      t += i.length + i.breakAfter;
    }
    throw new RangeError("Invalid child in posBefore");
  }
  posAfter(e) {
    return this.posBefore(e) + e.length;
  }
  sync(e, t) {
    if (this.flags & 2) {
      let i = this.dom, r = null, o;
      for (let s of this.children) {
        if (s.flags & 7) {
          if (!s.dom && (o = r ? r.nextSibling : i.firstChild)) {
            let l = te.get(o);
            (!l || !l.parent && l.canReuseDOM(s)) && s.reuseDOM(o);
          }
          s.sync(e, t), s.flags &= -8;
        }
        if (o = r ? r.nextSibling : i.firstChild, t && !t.written && t.node == i && o != s.dom && (t.written = !0), s.dom.parentNode == i)
          for (; o && o != s.dom; )
            o = Ru(o);
        else
          i.insertBefore(s.dom, o);
        r = s.dom;
      }
      for (o = r ? r.nextSibling : i.firstChild, o && t && t.node == i && (t.written = !0); o; )
        o = Ru(o);
    } else if (this.flags & 1)
      for (let i of this.children)
        i.flags & 7 && (i.sync(e, t), i.flags &= -8);
  }
  reuseDOM(e) {
  }
  localPosFromDOM(e, t) {
    let i;
    if (e == this.dom)
      i = this.dom.childNodes[t];
    else {
      let r = hn(e) == 0 ? 0 : t == 0 ? -1 : 1;
      for (; ; ) {
        let o = e.parentNode;
        if (o == this.dom)
          break;
        r == 0 && o.firstChild != o.lastChild && (e == o.firstChild ? r = -1 : r = 1), e = o;
      }
      r < 0 ? i = e : i = e.nextSibling;
    }
    if (i == this.dom.firstChild)
      return 0;
    for (; i && !te.get(i); )
      i = i.nextSibling;
    if (!i)
      return this.length;
    for (let r = 0, o = 0; ; r++) {
      let s = this.children[r];
      if (s.dom == i)
        return o;
      o += s.length + s.breakAfter;
    }
  }
  domBoundsAround(e, t, i = 0) {
    let r = -1, o = -1, s = -1, l = -1;
    for (let a = 0, c = i, h = i; a < this.children.length; a++) {
      let u = this.children[a], f = c + u.length;
      if (c < e && f > t)
        return u.domBoundsAround(e, t, c);
      if (f >= e && r == -1 && (r = a, o = c), c > t && u.dom.parentNode == this.dom) {
        s = a, l = h;
        break;
      }
      h = f, c = f + u.breakAfter;
    }
    return {
      from: o,
      to: l < 0 ? i + this.length : l,
      startDOM: (r ? this.children[r - 1].dom.nextSibling : null) || this.dom.firstChild,
      endDOM: s < this.children.length && s >= 0 ? this.children[s].dom : null
    };
  }
  markDirty(e = !1) {
    this.flags |= 2, this.markParentsDirty(e);
  }
  markParentsDirty(e) {
    for (let t = this.parent; t; t = t.parent) {
      if (e && (t.flags |= 2), t.flags & 1)
        return;
      t.flags |= 1, e = !1;
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
      let t = e.parent;
      if (!t)
        return e;
      e = t;
    }
  }
  replaceChildren(e, t, i = hc) {
    this.markDirty();
    for (let r = e; r < t; r++) {
      let o = this.children[r];
      o.parent == this && o.destroy();
    }
    this.children.splice(e, t - e, ...i);
    for (let r = 0; r < i.length; r++)
      i[r].setParent(this);
  }
  ignoreMutation(e) {
    return !1;
  }
  ignoreEvent(e) {
    return !1;
  }
  childCursor(e = this.length) {
    return new sm(this.children, e, this.children.length);
  }
  childPos(e, t = 1) {
    return this.childCursor().findPos(e, t);
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
  merge(e, t, i, r, o, s) {
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
te.prototype.breakAfter = 0;
function Ru(n) {
  let e = n.nextSibling;
  return n.parentNode.removeChild(n), e;
}
class sm {
  constructor(e, t, i) {
    this.children = e, this.pos = t, this.i = i, this.off = 0;
  }
  findPos(e, t = 1) {
    for (; ; ) {
      if (e > this.pos || e == this.pos && (t > 0 || this.i == 0 || this.children[this.i - 1].breakAfter))
        return this.off = e - this.pos, this;
      let i = this.children[--this.i];
      this.pos -= i.length + i.breakAfter;
    }
  }
}
function lm(n, e, t, i, r, o, s, l, a) {
  let { children: c } = n, h = c.length ? c[e] : null, u = o.length ? o[o.length - 1] : null, f = u ? u.breakAfter : s;
  if (!(e == i && h && !s && !f && o.length < 2 && h.merge(t, r, o.length ? u : null, t == 0, l, a))) {
    if (i < c.length) {
      let d = c[i];
      d && r < d.length ? (e == i && (d = d.split(r), r = 0), !f && u && d.merge(0, r, u, !0, 0, a) ? o[o.length - 1] = d : (r && d.merge(0, r, null, !1, 0, a), o.push(d))) : d != null && d.breakAfter && (u ? u.breakAfter = 1 : s = 1), i++;
    }
    for (h && (h.breakAfter = s, t > 0 && (!s && o.length && h.merge(t, h.length, o[0], !1, l, 0) ? h.breakAfter = o.shift().breakAfter : (t < h.length || h.children.length && h.children[h.children.length - 1].length == 0) && h.merge(t, h.length, null, !1, l, 0), e++)); e < i && o.length; )
      if (c[i - 1].become(o[o.length - 1]))
        i--, o.pop(), a = o.length ? 0 : l;
      else if (c[e].become(o[0]))
        e++, o.shift(), l = o.length ? 0 : a;
      else
        break;
    !o.length && e && i < c.length && !c[e - 1].breakAfter && c[i].merge(0, 0, c[e - 1], !1, l, a) && e--, (e < i || o.length) && n.replaceChildren(e, i, o);
  }
}
function am(n, e, t, i, r, o) {
  let s = n.childCursor(), { i: l, off: a } = s.findPos(t, 1), { i: c, off: h } = s.findPos(e, -1), u = e - t;
  for (let f of i)
    u += f.length;
  n.length += u, lm(n, c, h, l, a, i, 0, r, o);
}
const Qn = "\uFFFF";
class cm {
  constructor(e, t) {
    this.points = e, this.text = "", this.lineSeparator = t.facet(K.lineSeparator);
  }
  append(e) {
    this.text += e;
  }
  lineBreak() {
    this.text += Qn;
  }
  readRange(e, t) {
    if (!e)
      return this;
    let i = e.parentNode;
    for (let r = e; ; ) {
      this.findPointBefore(i, r);
      let o = this.text.length;
      this.readNode(r);
      let s = r.nextSibling;
      if (s == t)
        break;
      let l = te.get(r), a = te.get(s);
      (l && a ? l.breakAfter : (l ? l.breakAfter : Iu(r)) || Iu(s) && (r.nodeName != "BR" || r.cmIgnore) && this.text.length > o) && this.lineBreak(), r = s;
    }
    return this.findPointBefore(i, t), this;
  }
  readTextNode(e) {
    let t = e.nodeValue;
    for (let i of this.points)
      i.node == e && (i.pos = this.text.length + Math.min(i.offset, t.length));
    for (let i = 0, r = this.lineSeparator ? null : /\r\n?|\n/g; ; ) {
      let o = -1, s = 1, l;
      if (this.lineSeparator ? (o = t.indexOf(this.lineSeparator, i), s = this.lineSeparator.length) : (l = r.exec(t)) && (o = l.index, s = l[0].length), this.append(t.slice(i, o < 0 ? t.length : o)), o < 0)
        break;
      if (this.lineBreak(), s > 1)
        for (let a of this.points)
          a.node == e && a.pos > this.text.length && (a.pos -= s - 1);
      i = o + s;
    }
  }
  readNode(e) {
    if (e.cmIgnore)
      return;
    let t = te.get(e), i = t && t.overrideDOMText;
    if (i != null) {
      this.findPointInside(e, i.length);
      for (let r = i.iter(); !r.next().done; )
        r.lineBreak ? this.lineBreak() : this.append(r.value);
    } else
      e.nodeType == 3 ? this.readTextNode(e) : e.nodeName == "BR" ? e.nextSibling && this.lineBreak() : e.nodeType == 1 && this.readRange(e.firstChild, null);
  }
  findPointBefore(e, t) {
    for (let i of this.points)
      i.node == e && e.childNodes[i.offset] == t && (i.pos = this.text.length);
  }
  findPointInside(e, t) {
    for (let i of this.points)
      (e.nodeType == 3 ? i.node == e : e.contains(i.node)) && (i.pos = this.text.length + Math.min(t, i.offset));
  }
}
function Iu(n) {
  return n.nodeType == 1 && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(n.nodeName);
}
class Bu {
  constructor(e, t) {
    this.node = e, this.offset = t, this.pos = -1;
  }
}
let Qe = typeof navigator < "u" ? navigator : { userAgent: "", vendor: "", platform: "" }, ia = typeof document < "u" ? document : { documentElement: { style: {} } };
const ra = /* @__PURE__ */ /Edge\/(\d+)/.exec(Qe.userAgent), hm = /* @__PURE__ */ /MSIE \d/.test(Qe.userAgent), oa = /* @__PURE__ */ /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(Qe.userAgent), us = !!(hm || oa || ra), Nu = !us && /* @__PURE__ */ /gecko\/(\d+)/i.test(Qe.userAgent), al = !us && /* @__PURE__ */ /Chrome\/(\d+)/.exec(Qe.userAgent), Pu = "webkitFontSmoothing" in ia.documentElement.style, um = !us && /* @__PURE__ */ /Apple Computer/.test(Qe.vendor), Fu = um && (/* @__PURE__ */ /Mobile\/\w+/.test(Qe.userAgent) || Qe.maxTouchPoints > 2);
var R = {
  mac: Fu || /* @__PURE__ */ /Mac/.test(Qe.platform),
  windows: /* @__PURE__ */ /Win/.test(Qe.platform),
  linux: /* @__PURE__ */ /Linux|X11/.test(Qe.platform),
  ie: us,
  ie_version: hm ? ia.documentMode || 6 : oa ? +oa[1] : ra ? +ra[1] : 0,
  gecko: Nu,
  gecko_version: Nu ? +(/* @__PURE__ */ /Firefox\/(\d+)/.exec(Qe.userAgent) || [0, 0])[1] : 0,
  chrome: !!al,
  chrome_version: al ? +al[1] : 0,
  ios: Fu,
  android: /* @__PURE__ */ /Android\b/.test(Qe.userAgent),
  webkit: Pu,
  safari: um,
  webkit_version: Pu ? +(/* @__PURE__ */ /\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1] : 0,
  tabSize: ia.documentElement.style.tabSize != null ? "tab-size" : "-moz-tab-size"
};
const kee = 256;
class Rt extends te {
  constructor(e) {
    super(), this.text = e;
  }
  get length() {
    return this.text.length;
  }
  createDOM(e) {
    this.setDOM(e || document.createTextNode(this.text));
  }
  sync(e, t) {
    this.dom || this.createDOM(), this.dom.nodeValue != this.text && (t && t.node == this.dom && (t.written = !0), this.dom.nodeValue = this.text);
  }
  reuseDOM(e) {
    e.nodeType == 3 && this.createDOM(e);
  }
  merge(e, t, i) {
    return this.flags & 8 || i && (!(i instanceof Rt) || this.length - (t - e) + i.length > kee || i.flags & 8) ? !1 : (this.text = this.text.slice(0, e) + (i ? i.text : "") + this.text.slice(t), this.markDirty(), !0);
  }
  split(e) {
    let t = new Rt(this.text.slice(e));
    return this.text = this.text.slice(0, e), this.markDirty(), t.flags |= this.flags & 8, t;
  }
  localPosFromDOM(e, t) {
    return e == this.dom ? t : t ? this.text.length : 0;
  }
  domAtPos(e) {
    return new $e(this.dom, e);
  }
  domBoundsAround(e, t, i) {
    return { from: i, to: i + this.length, startDOM: this.dom, endDOM: this.dom.nextSibling };
  }
  coordsAt(e, t) {
    return wee(this.dom, e, t);
  }
}
class Vt extends te {
  constructor(e, t = [], i = 0) {
    super(), this.mark = e, this.children = t, this.length = i;
    for (let r of t)
      r.setParent(this);
  }
  setAttrs(e) {
    if (rm(e), this.mark.class && (e.className = this.mark.class), this.mark.attrs)
      for (let t in this.mark.attrs)
        e.setAttribute(t, this.mark.attrs[t]);
    return e;
  }
  canReuseDOM(e) {
    return super.canReuseDOM(e) && !((this.flags | e.flags) & 8);
  }
  reuseDOM(e) {
    e.nodeName == this.mark.tagName.toUpperCase() && (this.setDOM(e), this.flags |= 6);
  }
  sync(e, t) {
    this.dom ? this.flags & 4 && this.setAttrs(this.dom) : this.setDOM(this.setAttrs(document.createElement(this.mark.tagName))), super.sync(e, t);
  }
  merge(e, t, i, r, o, s) {
    return i && (!(i instanceof Vt && i.mark.eq(this.mark)) || e && o <= 0 || t < this.length && s <= 0) ? !1 : (am(this, e, t, i ? i.children : [], o - 1, s - 1), this.markDirty(), !0);
  }
  split(e) {
    let t = [], i = 0, r = -1, o = 0;
    for (let l of this.children) {
      let a = i + l.length;
      a > e && t.push(i < e ? l.split(e - i) : l), r < 0 && i >= e && (r = o), i = a, o++;
    }
    let s = this.length - e;
    return this.length = e, r > -1 && (this.children.length = r, this.markDirty()), new Vt(this.mark, t, s);
  }
  domAtPos(e) {
    return fm(this, e);
  }
  coordsAt(e, t) {
    return pm(this, e, t);
  }
}
function wee(n, e, t) {
  let i = n.nodeValue.length;
  e > i && (e = i);
  let r = e, o = e, s = 0;
  e == 0 && t < 0 || e == i && t >= 0 ? R.chrome || R.gecko || (e ? (r--, s = 1) : o < i && (o++, s = -1)) : t < 0 ? r-- : o < i && o++;
  let l = In(n, r, o).getClientRects();
  if (!l.length)
    return null;
  let a = l[(s ? s < 0 : t >= 0) ? 0 : l.length - 1];
  return R.safari && !s && a.width == 0 && (a = Array.prototype.find.call(l, (c) => c.width) || a), s ? cc(a, s < 0) : a || null;
}
class Sn extends te {
  constructor(e, t, i) {
    super(), this.widget = e, this.length = t, this.side = i, this.prevWidget = null;
  }
  static create(e, t, i) {
    return new Sn(e, t, i);
  }
  split(e) {
    let t = Sn.create(this.widget, this.length - e, this.side);
    return this.length -= e, t;
  }
  sync(e) {
    (!this.dom || !this.widget.updateDOM(this.dom, e)) && (this.dom && this.prevWidget && this.prevWidget.destroy(this.dom), this.prevWidget = null, this.setDOM(this.widget.toDOM(e)), this.dom.contentEditable = "false");
  }
  getSide() {
    return this.side;
  }
  merge(e, t, i, r, o, s) {
    return i && (!(i instanceof Sn) || !this.widget.compare(i.widget) || e > 0 && o <= 0 || t < this.length && s <= 0) ? !1 : (this.length = e + (i ? i.length : 0) + (this.length - t), !0);
  }
  become(e) {
    return e instanceof Sn && e.side == this.side && this.widget.constructor == e.widget.constructor ? (this.widget.compare(e.widget) || this.markDirty(!0), this.dom && !this.prevWidget && (this.prevWidget = this.widget), this.widget = e.widget, this.length = e.length, !0) : !1;
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
    let { view: t } = e, i = t && t.state.doc, r = this.posAtStart;
    return i ? i.slice(r, r + this.length) : J.empty;
  }
  domAtPos(e) {
    return (this.length ? e == 0 : this.side > 0) ? $e.before(this.dom) : $e.after(this.dom, e == this.length);
  }
  domBoundsAround() {
    return null;
  }
  coordsAt(e, t) {
    let i = this.widget.coordsAt(this.dom, e, t);
    if (i)
      return i;
    let r = this.dom.getClientRects(), o = null;
    if (!r.length)
      return null;
    let s = this.side ? this.side < 0 : e > 0;
    for (let l = s ? r.length - 1 : 0; o = r[l], !(e > 0 ? l == 0 : l == r.length - 1 || o.top < o.bottom); l += s ? -1 : 1)
      ;
    return cc(o, !s);
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
class ui extends te {
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
    return e instanceof ui && e.side == this.side;
  }
  split() {
    return new ui(this.side);
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
    return this.side > 0 ? $e.before(this.dom) : $e.after(this.dom);
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
Rt.prototype.children = Sn.prototype.children = ui.prototype.children = hc;
function fm(n, e) {
  let t = n.dom, { children: i } = n, r = 0;
  for (let o = 0; r < i.length; r++) {
    let s = i[r], l = o + s.length;
    if (!(l == o && s.getSide() <= 0)) {
      if (e > o && e < l && s.dom.parentNode == t)
        return s.domAtPos(e - o);
      if (e <= o)
        break;
      o = l;
    }
  }
  for (let o = r; o > 0; o--) {
    let s = i[o - 1];
    if (s.dom.parentNode == t)
      return s.domAtPos(s.length);
  }
  for (let o = r; o < i.length; o++) {
    let s = i[o];
    if (s.dom.parentNode == t)
      return s.domAtPos(0);
  }
  return new $e(t, 0);
}
function dm(n, e, t) {
  let i, { children: r } = n;
  t > 0 && e instanceof Vt && r.length && (i = r[r.length - 1]) instanceof Vt && i.mark.eq(e.mark) ? dm(i, e.children[0], t - 1) : (r.push(e), e.setParent(n)), n.length += e.length;
}
function pm(n, e, t) {
  let i = null, r = -1, o = null, s = -1;
  function l(c, h) {
    for (let u = 0, f = 0; u < c.children.length && f <= h; u++) {
      let d = c.children[u], p = f + d.length;
      p >= h && (d.children.length ? l(d, h - f) : (!o || o.isHidden && t > 0) && (p > h || f == p && d.getSide() > 0) ? (o = d, s = h - f) : (f < h || f == p && d.getSide() < 0 && !d.isHidden) && (i = d, r = h - f)), f = p;
    }
  }
  l(n, e);
  let a = (t < 0 ? i : o) || i || o;
  return a ? a.coordsAt(Math.max(0, a == i ? r : s), t) : _ee(n);
}
function _ee(n) {
  let e = n.dom.lastChild;
  if (!e)
    return n.dom.getBoundingClientRect();
  let t = er(e);
  return t[t.length - 1] || null;
}
function sa(n, e) {
  for (let t in n)
    t == "class" && e.class ? e.class += " " + n.class : t == "style" && e.style ? e.style += ";" + n.style : e[t] = n[t];
  return e;
}
const qu = /* @__PURE__ */ Object.create(null);
function uc(n, e, t) {
  if (n == e)
    return !0;
  n || (n = qu), e || (e = qu);
  let i = Object.keys(n), r = Object.keys(e);
  if (i.length - (t && i.indexOf(t) > -1 ? 1 : 0) != r.length - (t && r.indexOf(t) > -1 ? 1 : 0))
    return !1;
  for (let o of i)
    if (o != t && (r.indexOf(o) == -1 || n[o] !== e[o]))
      return !1;
  return !0;
}
function la(n, e, t) {
  let i = null;
  if (e)
    for (let r in e)
      t && r in t || n.removeAttribute(i = r);
  if (t)
    for (let r in t)
      e && e[r] == t[r] || n.setAttribute(i = r, t[r]);
  return !!i;
}
function Aee(n) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let t = 0; t < n.attributes.length; t++) {
    let i = n.attributes[t];
    e[i.name] = i.value;
  }
  return e;
}
class Pn {
  eq(e) {
    return !1;
  }
  updateDOM(e, t) {
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
  coordsAt(e, t, i) {
    return null;
  }
  get isHidden() {
    return !1;
  }
  destroy(e) {
  }
}
var ae = /* @__PURE__ */ function(n) {
  return n[n.Text = 0] = "Text", n[n.WidgetBefore = 1] = "WidgetBefore", n[n.WidgetAfter = 2] = "WidgetAfter", n[n.WidgetRange = 3] = "WidgetRange", n;
}(ae || (ae = {}));
class $ extends Rn {
  constructor(e, t, i, r) {
    super(), this.startSide = e, this.endSide = t, this.widget = i, this.spec = r;
  }
  get heightRelevant() {
    return !1;
  }
  static mark(e) {
    return new fr(e);
  }
  static widget(e) {
    let t = Math.max(-1e4, Math.min(1e4, e.side || 0)), i = !!e.block;
    return t += i && !e.inlineOrder ? t > 0 ? 3e8 : -4e8 : t > 0 ? 1e8 : -1e8, new un(e, t, t, i, e.widget || null, !1);
  }
  static replace(e) {
    let t = !!e.block, i, r;
    if (e.isBlockGap)
      i = -5e8, r = 4e8;
    else {
      let { start: o, end: s } = mm(e, t);
      i = (o ? t ? -3e8 : -1 : 5e8) - 1, r = (s ? t ? 2e8 : 1 : -6e8) + 1;
    }
    return new un(e, i, r, t, e.widget || null, !0);
  }
  static line(e) {
    return new dr(e);
  }
  static set(e, t = !1) {
    return X.of(e, t);
  }
  hasHeight() {
    return this.widget ? this.widget.estimatedHeight > -1 : !1;
  }
}
$.none = X.empty;
class fr extends $ {
  constructor(e) {
    let { start: t, end: i } = mm(e);
    super(t ? -1 : 5e8, i ? 1 : -6e8, null, e), this.tagName = e.tagName || "span", this.class = e.class || "", this.attrs = e.attributes || null;
  }
  eq(e) {
    var t, i;
    return this == e || e instanceof fr && this.tagName == e.tagName && (this.class || ((t = this.attrs) === null || t === void 0 ? void 0 : t.class)) == (e.class || ((i = e.attrs) === null || i === void 0 ? void 0 : i.class)) && uc(this.attrs, e.attrs, "class");
  }
  range(e, t = e) {
    if (e >= t)
      throw new RangeError("Mark decorations may not be empty");
    return super.range(e, t);
  }
}
fr.prototype.point = !1;
class dr extends $ {
  constructor(e) {
    super(-2e8, -2e8, null, e);
  }
  eq(e) {
    return e instanceof dr && this.spec.class == e.spec.class && uc(this.spec.attributes, e.spec.attributes);
  }
  range(e, t = e) {
    if (t != e)
      throw new RangeError("Line decoration ranges must be zero-length");
    return super.range(e, t);
  }
}
dr.prototype.mapMode = ze.TrackBefore;
dr.prototype.point = !0;
class un extends $ {
  constructor(e, t, i, r, o, s) {
    super(t, i, o, e), this.block = r, this.isReplace = s, this.mapMode = r ? t <= 0 ? ze.TrackBefore : ze.TrackAfter : ze.TrackDel;
  }
  get type() {
    return this.startSide < this.endSide ? ae.WidgetRange : this.startSide <= 0 ? ae.WidgetBefore : ae.WidgetAfter;
  }
  get heightRelevant() {
    return this.block || !!this.widget && (this.widget.estimatedHeight >= 5 || this.widget.lineBreaks > 0);
  }
  eq(e) {
    return e instanceof un && Cee(this.widget, e.widget) && this.block == e.block && this.startSide == e.startSide && this.endSide == e.endSide;
  }
  range(e, t = e) {
    if (this.isReplace && (e > t || e == t && this.startSide > 0 && this.endSide <= 0))
      throw new RangeError("Invalid range for replacement decoration");
    if (!this.isReplace && t != e)
      throw new RangeError("Widget decorations can only have zero-length ranges");
    return super.range(e, t);
  }
}
un.prototype.point = !0;
function mm(n, e = !1) {
  let { inclusiveStart: t, inclusiveEnd: i } = n;
  return t == null && (t = n.inclusive), i == null && (i = n.inclusive), { start: t != null ? t : e, end: i != null ? i : e };
}
function Cee(n, e) {
  return n == e || !!(n && e && n.compare(e));
}
function aa(n, e, t, i = 0) {
  let r = t.length - 1;
  r >= 0 && t[r] + i >= n ? t[r] = Math.max(t[r], e) : t.push(n, e);
}
class qe extends te {
  constructor() {
    super(...arguments), this.children = [], this.length = 0, this.prevAttrs = void 0, this.attrs = null, this.breakAfter = 0;
  }
  merge(e, t, i, r, o, s) {
    if (i) {
      if (!(i instanceof qe))
        return !1;
      this.dom || i.transferDOM(this);
    }
    return r && this.setDeco(i ? i.attrs : null), am(this, e, t, i ? i.children : [], o, s), !0;
  }
  split(e) {
    let t = new qe();
    if (t.breakAfter = this.breakAfter, this.length == 0)
      return t;
    let { i, off: r } = this.childPos(e);
    r && (t.append(this.children[i].split(r), 0), this.children[i].merge(r, this.children[i].length, null, !1, 0, 0), i++);
    for (let o = i; o < this.children.length; o++)
      t.append(this.children[o], 0);
    for (; i > 0 && this.children[i - 1].length == 0; )
      this.children[--i].destroy();
    return this.children.length = i, this.markDirty(), this.length = e, t;
  }
  transferDOM(e) {
    !this.dom || (this.markDirty(), e.setDOM(this.dom), e.prevAttrs = this.prevAttrs === void 0 ? this.attrs : this.prevAttrs, this.prevAttrs = void 0, this.dom = null);
  }
  setDeco(e) {
    uc(this.attrs, e) || (this.dom && (this.prevAttrs = this.attrs, this.markDirty()), this.attrs = e);
  }
  append(e, t) {
    dm(this, e, t);
  }
  addLineDeco(e) {
    let t = e.spec.attributes, i = e.spec.class;
    t && (this.attrs = sa(t, this.attrs || {})), i && (this.attrs = sa({ class: i }, this.attrs || {}));
  }
  domAtPos(e) {
    return fm(this, e);
  }
  reuseDOM(e) {
    e.nodeName == "DIV" && (this.setDOM(e), this.flags |= 6);
  }
  sync(e, t) {
    var i;
    this.dom ? this.flags & 4 && (rm(this.dom), this.dom.className = "cm-line", this.prevAttrs = this.attrs ? null : void 0) : (this.setDOM(document.createElement("div")), this.dom.className = "cm-line", this.prevAttrs = this.attrs ? null : void 0), this.prevAttrs !== void 0 && (la(this.dom, this.prevAttrs, this.attrs), this.dom.classList.add("cm-line"), this.prevAttrs = void 0), super.sync(e, t);
    let r = this.dom.lastChild;
    for (; r && te.get(r) instanceof Vt; )
      r = r.lastChild;
    if (!r || !this.length || r.nodeName != "BR" && ((i = te.get(r)) === null || i === void 0 ? void 0 : i.isEditable) == !1 && (!R.ios || !this.children.some((o) => o instanceof Rt))) {
      let o = document.createElement("BR");
      o.cmIgnore = !0, this.dom.appendChild(o);
    }
  }
  measureTextSize() {
    if (this.children.length == 0 || this.length > 20)
      return null;
    let e = 0, t;
    for (let i of this.children) {
      if (!(i instanceof Rt) || /[^ -~]/.test(i.text))
        return null;
      let r = er(i.dom);
      if (r.length != 1)
        return null;
      e += r[0].width, t = r[0].height;
    }
    return e ? {
      lineHeight: this.dom.getBoundingClientRect().height,
      charWidth: e / this.length,
      textHeight: t
    } : null;
  }
  coordsAt(e, t) {
    let i = pm(this, e, t);
    if (!this.children.length && i && this.parent) {
      let { heightOracle: r } = this.parent.view.viewState, o = i.bottom - i.top;
      if (Math.abs(o - r.lineHeight) < 2 && r.textHeight < o) {
        let s = (o - r.textHeight) / 2;
        return { top: i.top + s, bottom: i.bottom - s, left: i.left, right: i.left };
      }
    }
    return i;
  }
  become(e) {
    return !1;
  }
  get type() {
    return ae.Text;
  }
  static find(e, t) {
    for (let i = 0, r = 0; i < e.children.length; i++) {
      let o = e.children[i], s = r + o.length;
      if (s >= t) {
        if (o instanceof qe)
          return o;
        if (s > t)
          break;
      }
      r = s + o.breakAfter;
    }
    return null;
  }
}
class Dn extends te {
  constructor(e, t, i) {
    super(), this.widget = e, this.length = t, this.type = i, this.breakAfter = 0, this.prevWidget = null;
  }
  merge(e, t, i, r, o, s) {
    return i && (!(i instanceof Dn) || !this.widget.compare(i.widget) || e > 0 && o <= 0 || t < this.length && s <= 0) ? !1 : (this.length = e + (i ? i.length : 0) + (this.length - t), !0);
  }
  domAtPos(e) {
    return e == 0 ? $e.before(this.dom) : $e.after(this.dom, e == this.length);
  }
  split(e) {
    let t = this.length - e;
    this.length = e;
    let i = new Dn(this.widget, t, this.type);
    return i.breakAfter = this.breakAfter, i;
  }
  get children() {
    return hc;
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
    return e instanceof Dn && e.widget.constructor == this.widget.constructor ? (e.widget.compare(this.widget) || this.markDirty(!0), this.dom && !this.prevWidget && (this.prevWidget = this.widget), this.widget = e.widget, this.length = e.length, this.type = e.type, this.breakAfter = e.breakAfter, !0) : !1;
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
  coordsAt(e, t) {
    return this.widget.coordsAt(this.dom, e, t);
  }
  destroy() {
    super.destroy(), this.dom && this.widget.destroy(this.dom);
  }
}
class zi {
  constructor(e, t, i, r) {
    this.doc = e, this.pos = t, this.end = i, this.disallowBlockEffectsFor = r, this.content = [], this.curLine = null, this.breakAtStart = 0, this.pendingBuffer = 0, this.bufferMarks = [], this.atCursorPos = !0, this.openStart = -1, this.openEnd = -1, this.text = "", this.textOff = 0, this.cursor = e.iter(), this.skip = t;
  }
  posCovered() {
    if (this.content.length == 0)
      return !this.breakAtStart && this.doc.lineAt(this.pos).from != this.pos;
    let e = this.content[this.content.length - 1];
    return !e.breakAfter && !(e instanceof Dn && e.type == ae.WidgetBefore);
  }
  getLine() {
    return this.curLine || (this.content.push(this.curLine = new qe()), this.atCursorPos = !0), this.curLine;
  }
  flushBuffer(e = this.bufferMarks) {
    this.pendingBuffer && (this.curLine.append(Mr(new ui(-1), e), e.length), this.pendingBuffer = 0);
  }
  addBlockWidget(e) {
    this.flushBuffer(), this.curLine = null, this.content.push(e);
  }
  finish(e) {
    this.pendingBuffer && e <= this.bufferMarks.length ? this.flushBuffer() : this.pendingBuffer = 0, this.posCovered() || this.getLine();
  }
  buildText(e, t, i) {
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
      let r = Math.min(this.text.length - this.textOff, e, 512);
      this.flushBuffer(t.slice(t.length - i)), this.getLine().append(Mr(new Rt(this.text.slice(this.textOff, this.textOff + r)), t), i), this.atCursorPos = !0, this.textOff += r, e -= r, i = 0;
    }
  }
  span(e, t, i, r) {
    this.buildText(t - e, i, r), this.pos = t, this.openStart < 0 && (this.openStart = r);
  }
  point(e, t, i, r, o, s) {
    if (this.disallowBlockEffectsFor[s] && i instanceof un) {
      if (i.block)
        throw new RangeError("Block decorations may not be specified via plugins");
      if (t > this.doc.lineAt(this.pos).to)
        throw new RangeError("Decorations that replace line breaks may not be specified via plugins");
    }
    let l = t - e;
    if (i instanceof un)
      if (i.block) {
        let { type: a } = i;
        a == ae.WidgetAfter && !this.posCovered() && this.getLine(), this.addBlockWidget(new Dn(i.widget || new Hu("div"), l, a));
      } else {
        let a = Sn.create(i.widget || new Hu("span"), l, l ? 0 : i.startSide), c = this.atCursorPos && !a.isEditable && o <= r.length && (e < t || i.startSide > 0), h = !a.isEditable && (e < t || o > r.length || i.startSide <= 0), u = this.getLine();
        this.pendingBuffer == 2 && !c && !a.isEditable && (this.pendingBuffer = 0), this.flushBuffer(r), c && (u.append(Mr(new ui(1), r), o), o = r.length + Math.max(0, o - r.length)), u.append(Mr(a, r), o), this.atCursorPos = h, this.pendingBuffer = h ? e < t || o > r.length ? 1 : 2 : 0, this.pendingBuffer && (this.bufferMarks = r.slice());
      }
    else
      this.doc.lineAt(this.pos).from == this.pos && this.getLine().addLineDeco(i);
    l && (this.textOff + l <= this.text.length ? this.textOff += l : (this.skip += l - (this.text.length - this.textOff), this.text = "", this.textOff = 0), this.pos = t), this.openStart < 0 && (this.openStart = o);
  }
  static build(e, t, i, r, o) {
    let s = new zi(e, t, i, o);
    return s.openEnd = X.spans(r, t, i, s), s.openStart < 0 && (s.openStart = s.openEnd), s.finish(s.openEnd), s;
  }
}
function Mr(n, e) {
  for (let t of e)
    n = new Vt(t, [n], n.length);
  return n;
}
class Hu extends Pn {
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
const gm = /* @__PURE__ */ B.define(), bm = /* @__PURE__ */ B.define(), ym = /* @__PURE__ */ B.define(), vm = /* @__PURE__ */ B.define(), ca = /* @__PURE__ */ B.define(), xm = /* @__PURE__ */ B.define(), km = /* @__PURE__ */ B.define(), wm = /* @__PURE__ */ B.define({
  combine: (n) => n.some((e) => e)
}), _m = /* @__PURE__ */ B.define({
  combine: (n) => n.some((e) => e)
});
class Mo {
  constructor(e, t = "nearest", i = "nearest", r = 5, o = 5) {
    this.range = e, this.y = t, this.x = i, this.yMargin = r, this.xMargin = o;
  }
  map(e) {
    return e.empty ? this : new Mo(this.range.map(e), this.y, this.x, this.yMargin, this.xMargin);
  }
}
const zu = /* @__PURE__ */ W.define({ map: (n, e) => n.map(e) });
function rt(n, e, t) {
  let i = n.facet(vm);
  i.length ? i[0](e) : window.onerror ? window.onerror(String(e), t, void 0, void 0, e) : t ? console.error(t + ":", e) : console.error(e);
}
const fs = /* @__PURE__ */ B.define({ combine: (n) => n.length ? n[0] : !0 });
let See = 0;
const Ri = /* @__PURE__ */ B.define();
class ke {
  constructor(e, t, i, r) {
    this.id = e, this.create = t, this.domEventHandlers = i, this.extension = r(this);
  }
  static define(e, t) {
    const { eventHandlers: i, provide: r, decorations: o } = t || {};
    return new ke(See++, e, i, (s) => {
      let l = [Ri.of(s)];
      return o && l.push(tr.of((a) => {
        let c = a.plugin(s);
        return c ? o(c) : $.none;
      })), r && l.push(r(s)), l;
    });
  }
  static fromClass(e, t) {
    return ke.define((i) => new e(i), t);
  }
}
class cl {
  constructor(e) {
    this.spec = e, this.mustUpdate = null, this.value = null;
  }
  update(e) {
    if (this.value) {
      if (this.mustUpdate) {
        let t = this.mustUpdate;
        if (this.mustUpdate = null, this.value.update)
          try {
            this.value.update(t);
          } catch (i) {
            if (rt(t.state, i, "CodeMirror plugin crashed"), this.value.destroy)
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
      } catch (t) {
        rt(e.state, t, "CodeMirror plugin crashed"), this.deactivate();
      }
    return this;
  }
  destroy(e) {
    var t;
    if (!((t = this.value) === null || t === void 0) && t.destroy)
      try {
        this.value.destroy();
      } catch (i) {
        rt(e.state, i, "CodeMirror plugin crashed");
      }
  }
  deactivate() {
    this.spec = this.value = null;
  }
}
const Am = /* @__PURE__ */ B.define(), fc = /* @__PURE__ */ B.define(), tr = /* @__PURE__ */ B.define(), dc = /* @__PURE__ */ B.define(), Cm = /* @__PURE__ */ B.define();
function Sm(n) {
  let e = 0, t = 0, i = 0, r = 0;
  for (let o of n.state.facet(Cm)) {
    let s = o(n);
    s && (s.left != null && (e = Math.max(e, s.left)), s.right != null && (t = Math.max(t, s.right)), s.top != null && (i = Math.max(i, s.top)), s.bottom != null && (r = Math.max(r, s.bottom)));
  }
  return { left: e, right: t, top: i, bottom: r };
}
const Ii = /* @__PURE__ */ B.define();
class ot {
  constructor(e, t, i, r) {
    this.fromA = e, this.toA = t, this.fromB = i, this.toB = r;
  }
  join(e) {
    return new ot(Math.min(this.fromA, e.fromA), Math.max(this.toA, e.toA), Math.min(this.fromB, e.fromB), Math.max(this.toB, e.toB));
  }
  addToSet(e) {
    let t = e.length, i = this;
    for (; t > 0; t--) {
      let r = e[t - 1];
      if (!(r.fromA > i.toA)) {
        if (r.toA < i.fromA)
          break;
        i = i.join(r), e.splice(t - 1, 1);
      }
    }
    return e.splice(t, 0, i), e;
  }
  static extendWithRanges(e, t) {
    if (t.length == 0)
      return e;
    let i = [];
    for (let r = 0, o = 0, s = 0, l = 0; ; r++) {
      let a = r == e.length ? null : e[r], c = s - l, h = a ? a.fromB : 1e9;
      for (; o < t.length && t[o] < h; ) {
        let u = t[o], f = t[o + 1], d = Math.max(l, u), p = Math.min(h, f);
        if (d <= p && new ot(d + c, p + c, d, p).addToSet(i), f > h)
          break;
        o += 2;
      }
      if (!a)
        return i;
      new ot(a.fromA, a.toA, a.fromB, a.toB).addToSet(i), s = a.toA, l = a.toB;
    }
  }
}
class Oo {
  constructor(e, t, i) {
    this.view = e, this.state = t, this.transactions = i, this.flags = 0, this.startState = e.state, this.changes = ye.empty(this.startState.doc.length);
    for (let o of i)
      this.changes = this.changes.compose(o.changes);
    let r = [];
    this.changes.iterChangedRanges((o, s, l, a) => r.push(new ot(o, s, l, a))), this.changedRanges = r;
  }
  static create(e, t, i) {
    return new Oo(e, t, i);
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
var le = /* @__PURE__ */ function(n) {
  return n[n.LTR = 0] = "LTR", n[n.RTL = 1] = "RTL", n;
}(le || (le = {}));
const ha = le.LTR, Tee = le.RTL;
function Tm(n) {
  let e = [];
  for (let t = 0; t < n.length; t++)
    e.push(1 << +n[t]);
  return e;
}
const Eee = /* @__PURE__ */ Tm("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"), Dee = /* @__PURE__ */ Tm("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"), ua = /* @__PURE__ */ Object.create(null), yt = [];
for (let n of ["()", "[]", "{}"]) {
  let e = /* @__PURE__ */ n.charCodeAt(0), t = /* @__PURE__ */ n.charCodeAt(1);
  ua[e] = t, ua[t] = -e;
}
function Mee(n) {
  return n <= 247 ? Eee[n] : 1424 <= n && n <= 1524 ? 2 : 1536 <= n && n <= 1785 ? Dee[n - 1536] : 1774 <= n && n <= 2220 ? 4 : 8192 <= n && n <= 8203 ? 256 : 64336 <= n && n <= 65023 ? 4 : n == 8204 ? 256 : 1;
}
const Oee = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;
class li {
  constructor(e, t, i) {
    this.from = e, this.to = t, this.level = i;
  }
  get dir() {
    return this.level % 2 ? Tee : ha;
  }
  side(e, t) {
    return this.dir == t == e ? this.to : this.from;
  }
  static find(e, t, i, r) {
    let o = -1;
    for (let s = 0; s < e.length; s++) {
      let l = e[s];
      if (l.from <= t && l.to >= t) {
        if (l.level == i)
          return s;
        (o < 0 || (r != 0 ? r < 0 ? l.from < t : l.to > t : e[o].level > l.level)) && (o = s);
      }
    }
    if (o < 0)
      throw new RangeError("Index out of range");
    return o;
  }
}
const se = [];
function Lee(n, e) {
  let t = n.length, i = e == ha ? 1 : 2, r = e == ha ? 2 : 1;
  if (!n || i == 1 && !Oee.test(n))
    return Em(t);
  for (let s = 0, l = i, a = i; s < t; s++) {
    let c = Mee(n.charCodeAt(s));
    c == 512 ? c = l : c == 8 && a == 4 && (c = 16), se[s] = c == 4 ? 2 : c, c & 7 && (a = c), l = c;
  }
  for (let s = 0, l = i, a = i; s < t; s++) {
    let c = se[s];
    if (c == 128)
      s < t - 1 && l == se[s + 1] && l & 24 ? c = se[s] = l : se[s] = 256;
    else if (c == 64) {
      let h = s + 1;
      for (; h < t && se[h] == 64; )
        h++;
      let u = s && l == 8 || h < t && se[h] == 8 ? a == 1 ? 1 : 8 : 256;
      for (let f = s; f < h; f++)
        se[f] = u;
      s = h - 1;
    } else
      c == 8 && a == 1 && (se[s] = 1);
    l = c, c & 7 && (a = c);
  }
  for (let s = 0, l = 0, a = 0, c, h, u; s < t; s++)
    if (h = ua[c = n.charCodeAt(s)])
      if (h < 0) {
        for (let f = l - 3; f >= 0; f -= 3)
          if (yt[f + 1] == -h) {
            let d = yt[f + 2], p = d & 2 ? i : d & 4 ? d & 1 ? r : i : 0;
            p && (se[s] = se[yt[f]] = p), l = f;
            break;
          }
      } else {
        if (yt.length == 189)
          break;
        yt[l++] = s, yt[l++] = c, yt[l++] = a;
      }
    else if ((u = se[s]) == 2 || u == 1) {
      let f = u == i;
      a = f ? 0 : 1;
      for (let d = l - 3; d >= 0; d -= 3) {
        let p = yt[d + 2];
        if (p & 2)
          break;
        if (f)
          yt[d + 2] |= 2;
        else {
          if (p & 4)
            break;
          yt[d + 2] |= 4;
        }
      }
    }
  for (let s = 0; s < t; s++)
    if (se[s] == 256) {
      let l = s + 1;
      for (; l < t && se[l] == 256; )
        l++;
      let a = (s ? se[s - 1] : i) == 1, c = (l < t ? se[l] : i) == 1, h = a == c ? a ? 1 : 2 : i;
      for (let u = s; u < l; u++)
        se[u] = h;
      s = l - 1;
    }
  let o = [];
  if (i == 1)
    for (let s = 0; s < t; ) {
      let l = s, a = se[s++] != 1;
      for (; s < t && a == (se[s] != 1); )
        s++;
      if (a)
        for (let c = s; c > l; ) {
          let h = c, u = se[--c] != 2;
          for (; c > l && u == (se[c - 1] != 2); )
            c--;
          o.push(new li(c, h, u ? 2 : 1));
        }
      else
        o.push(new li(l, s, 0));
    }
  else
    for (let s = 0; s < t; ) {
      let l = s, a = se[s++] == 2;
      for (; s < t && a == (se[s] == 2); )
        s++;
      o.push(new li(l, s, a ? 1 : 2));
    }
  return o;
}
function Em(n) {
  return [new li(0, n, 0)];
}
let Dm = "";
function Ree(n, e, t, i, r) {
  var o;
  let s = i.head - n.from, l = -1;
  if (s == 0) {
    if (!r || !n.length)
      return null;
    e[0].level != t && (s = e[0].side(!1, t), l = 0);
  } else if (s == n.length) {
    if (r)
      return null;
    let f = e[e.length - 1];
    f.level != t && (s = f.side(!0, t), l = e.length - 1);
  }
  l < 0 && (l = li.find(e, s, (o = i.bidiLevel) !== null && o !== void 0 ? o : -1, i.assoc));
  let a = e[l];
  s == a.side(r, t) && (a = e[l += r ? 1 : -1], s = a.side(!r, t));
  let c = r == (a.dir == t), h = Re(n.text, s, c);
  if (Dm = n.text.slice(Math.min(s, h), Math.max(s, h)), h != a.side(r, t))
    return A.cursor(h + n.from, c ? -1 : 1, a.level);
  let u = l == (r ? e.length - 1 : 0) ? null : e[l + (r ? 1 : -1)];
  return !u && a.level != t ? A.cursor(r ? n.to : n.from, r ? -1 : 1, t) : u && u.level < a.level ? A.cursor(u.side(!r, t) + n.from, r ? 1 : -1, u.level) : A.cursor(h + n.from, r ? -1 : 1, a.level);
}
class $u extends te {
  constructor(e) {
    super(), this.view = e, this.decorations = [], this.dynamicDecorationMap = [], this.hasComposition = null, this.markedForComposition = /* @__PURE__ */ new Set(), this.minWidth = 0, this.minWidthFrom = 0, this.minWidthTo = 0, this.impreciseAnchor = null, this.impreciseHead = null, this.forceSelection = !1, this.lastUpdate = Date.now(), this.setDOM(e.contentDOM), this.children = [new qe()], this.children[0].setParent(this), this.updateDeco(), this.updateInner([new ot(0, 0, 0, e.state.doc.length)], 0, null);
  }
  get length() {
    return this.view.state.doc.length;
  }
  update(e) {
    let t = e.changedRanges;
    this.minWidth > 0 && t.length && (t.every(({ fromA: l, toA: a }) => a < this.minWidthFrom || l > this.minWidthTo) ? (this.minWidthFrom = e.changes.mapPos(this.minWidthFrom, 1), this.minWidthTo = e.changes.mapPos(this.minWidthTo, 1)) : this.minWidth = this.minWidthFrom = this.minWidthTo = 0);
    let i = this.view.inputState.composing < 0 ? null : Bee(this.view, e.changes);
    if (this.hasComposition) {
      this.markedForComposition.clear();
      let { from: l, to: a } = this.hasComposition;
      t = new ot(l, a, e.changes.mapPos(l, -1), e.changes.mapPos(a, 1)).addToSet(t.slice());
    }
    this.hasComposition = i ? { from: i.range.fromB, to: i.range.toB } : null, (R.ie || R.chrome) && !i && e && e.state.doc.lines != e.startState.doc.lines && (this.forceSelection = !0);
    let r = this.decorations, o = this.updateDeco(), s = Fee(r, o, e.changes);
    return t = ot.extendWithRanges(t, s), !(this.flags & 7) && t.length == 0 ? !1 : (this.updateInner(t, e.startState.doc.length, i), e.transactions.length && (this.lastUpdate = Date.now()), !0);
  }
  updateInner(e, t, i) {
    this.view.viewState.mustMeasureContent = !0, this.updateChildren(e, t, i);
    let { observer: r } = this.view;
    r.ignore(() => {
      this.dom.style.height = this.view.viewState.contentHeight + "px", this.dom.style.flexBasis = this.minWidth ? this.minWidth + "px" : "";
      let s = R.chrome || R.ios ? { node: r.selectionRange.focusNode, written: !1 } : void 0;
      this.sync(this.view, s), this.flags &= -8, s && (s.written || r.selectionRange.focusNode != s.node) && (this.forceSelection = !0), this.dom.style.height = "";
    }), this.markedForComposition.forEach((s) => s.flags &= -9);
    let o = [];
    if (this.view.viewport.from || this.view.viewport.to < this.view.state.doc.length)
      for (let s of this.children)
        s instanceof Dn && s.widget instanceof Vu && o.push(s.dom);
    r.updateGaps(o);
  }
  updateChildren(e, t, i) {
    let r = i ? i.range.addToSet(e.slice()) : e, o = this.childCursor(t);
    for (let s = r.length - 1; ; s--) {
      let l = s >= 0 ? r[s] : null;
      if (!l)
        break;
      let { fromA: a, toA: c, fromB: h, toB: u } = l, f, d, p, m;
      if (i && i.range.fromB < u && i.range.toB > h) {
        let x = zi.build(this.view.state.doc, h, i.range.fromB, this.decorations, this.dynamicDecorationMap), _ = zi.build(this.view.state.doc, i.range.toB, u, this.decorations, this.dynamicDecorationMap);
        d = x.breakAtStart, p = x.openStart, m = _.openEnd;
        let k = this.compositionView(i);
        _.breakAtStart ? k.breakAfter = 1 : _.content.length && k.merge(k.length, k.length, _.content[0], !1, _.openStart, 0) && (k.breakAfter = _.content[0].breakAfter, _.content.shift()), x.content.length && k.merge(0, 0, x.content[x.content.length - 1], !0, 0, x.openEnd) && x.content.pop(), f = x.content.concat(k).concat(_.content);
      } else
        ({ content: f, breakAtStart: d, openStart: p, openEnd: m } = zi.build(this.view.state.doc, h, u, this.decorations, this.dynamicDecorationMap));
      let { i: g, off: b } = o.findPos(c, 1), { i: y, off: w } = o.findPos(a, -1);
      lm(this, y, w, g, b, f, d, p, m);
    }
    i && this.fixCompositionDOM(i);
  }
  compositionView(e) {
    let t = new Rt(e.text.nodeValue);
    t.flags |= 8;
    for (let { deco: r } of e.marks)
      t = new Vt(r, [t], t.length);
    let i = new qe();
    return i.append(t, 0), i;
  }
  fixCompositionDOM(e) {
    let t = (o, s) => {
      s.flags |= 8, this.markedForComposition.add(s);
      let l = te.get(o);
      l != s && (l && (l.dom = null), s.setDOM(o));
    }, i = this.childPos(e.range.fromB, 1), r = this.children[i.i];
    t(e.line, r);
    for (let o = e.marks.length - 1; o >= -1; o--)
      i = r.childPos(i.off, 1), r = r.children[i.i], t(o >= 0 ? e.marks[o].node : e.text, r);
  }
  updateSelection(e = !1, t = !1) {
    (e || !this.view.observer.selectionRange.focusNode) && this.view.observer.readSelectionRange();
    let i = this.view.root.activeElement, r = i == this.dom, o = !r && io(this.dom, this.view.observer.selectionRange) && !(i && this.dom.contains(i));
    if (!(r || t || o))
      return;
    let s = this.forceSelection;
    this.forceSelection = !1;
    let l = this.view.state.selection.main, a = this.domAtPos(l.anchor), c = l.empty ? a : this.domAtPos(l.head);
    if (R.gecko && l.empty && !this.hasComposition && Iee(a)) {
      let u = document.createTextNode("");
      this.view.observer.ignore(() => a.node.insertBefore(u, a.node.childNodes[a.offset] || null)), a = c = new $e(u, 0), s = !0;
    }
    let h = this.view.observer.selectionRange;
    (s || !h.focusNode || !Eo(a.node, a.offset, h.anchorNode, h.anchorOffset) || !Eo(c.node, c.offset, h.focusNode, h.focusOffset)) && (this.view.observer.ignore(() => {
      R.android && R.chrome && this.dom.contains(h.focusNode) && qee(h.focusNode, this.dom) && (this.dom.blur(), this.dom.focus({ preventScroll: !0 }));
      let u = To(this.view.root);
      if (u)
        if (l.empty) {
          if (R.gecko) {
            let f = Nee(a.node, a.offset);
            if (f && f != 3) {
              let d = Om(a.node, a.offset, f == 1 ? 1 : -1);
              d && (a = new $e(d, f == 1 ? 0 : d.nodeValue.length));
            }
          }
          u.collapse(a.node, a.offset), l.bidiLevel != null && h.cursorBidiLevel != null && (h.cursorBidiLevel = l.bidiLevel);
        } else if (u.extend) {
          u.collapse(a.node, a.offset);
          try {
            u.extend(c.node, c.offset);
          } catch {
          }
        } else {
          let f = document.createRange();
          l.anchor > l.head && ([a, c] = [c, a]), f.setEnd(c.node, c.offset), f.setStart(a.node, a.offset), u.removeAllRanges(), u.addRange(f);
        }
      o && this.view.root.activeElement == this.dom && (this.dom.blur(), i && i.focus());
    }), this.view.observer.setSelectionRange(a, c)), this.impreciseAnchor = a.precise ? null : new $e(h.anchorNode, h.anchorOffset), this.impreciseHead = c.precise ? null : new $e(h.focusNode, h.focusOffset);
  }
  enforceCursorAssoc() {
    if (this.hasComposition)
      return;
    let { view: e } = this, t = e.state.selection.main, i = To(e.root), { anchorNode: r, anchorOffset: o } = e.observer.selectionRange;
    if (!i || !t.empty || !t.assoc || !i.modify)
      return;
    let s = qe.find(this, t.head);
    if (!s)
      return;
    let l = s.posAtStart;
    if (t.head == l || t.head == l + s.length)
      return;
    let a = this.coordsAt(t.head, -1), c = this.coordsAt(t.head, 1);
    if (!a || !c || a.bottom > c.top)
      return;
    let h = this.domAtPos(t.head + t.assoc);
    i.collapse(h.node, h.offset), i.modify("move", t.assoc < 0 ? "forward" : "backward", "lineboundary"), e.observer.readSelectionRange();
    let u = e.observer.selectionRange;
    e.docView.posFromDOM(u.anchorNode, u.anchorOffset) != t.from && i.collapse(r, o);
  }
  nearest(e) {
    for (let t = e; t; ) {
      let i = te.get(t);
      if (i && i.rootView == this)
        return i;
      t = t.parentNode;
    }
    return null;
  }
  posFromDOM(e, t) {
    let i = this.nearest(e);
    if (!i)
      throw new RangeError("Trying to find position for a DOM position outside of the document");
    return i.localPosFromDOM(e, t) + i.posAtStart;
  }
  domAtPos(e) {
    let { i: t, off: i } = this.childCursor().findPos(e, -1);
    for (; t < this.children.length - 1; ) {
      let r = this.children[t];
      if (i < r.length || r instanceof qe)
        break;
      t++, i = 0;
    }
    return this.children[t].domAtPos(i);
  }
  coordsAt(e, t) {
    for (let i = this.length, r = this.children.length - 1; ; r--) {
      let o = this.children[r], s = i - o.breakAfter - o.length;
      if (e > s || e == s && o.type != ae.WidgetBefore && o.type != ae.WidgetAfter && (!r || t == 2 || this.children[r - 1].breakAfter || this.children[r - 1].type == ae.WidgetBefore && t > -2))
        return o.coordsAt(e - s, t);
      i = s;
    }
  }
  coordsForChar(e) {
    let { i: t, off: i } = this.childPos(e, 1), r = this.children[t];
    if (!(r instanceof qe))
      return null;
    for (; r.children.length; ) {
      let { i: l, off: a } = r.childPos(i, 1);
      for (; ; l++) {
        if (l == r.children.length)
          return null;
        if ((r = r.children[l]).length)
          break;
      }
      i = a;
    }
    if (!(r instanceof Rt))
      return null;
    let o = Re(r.text, i);
    if (o == i)
      return null;
    let s = In(r.dom, i, o).getClientRects();
    return !s.length || s[0].top >= s[0].bottom ? null : s[0];
  }
  measureVisibleLineHeights(e) {
    let t = [], { from: i, to: r } = e, o = this.view.contentDOM.clientWidth, s = o > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1, l = -1, a = this.view.textDirection == le.LTR;
    for (let c = 0, h = 0; h < this.children.length; h++) {
      let u = this.children[h], f = c + u.length;
      if (f > r)
        break;
      if (c >= i) {
        let d = u.dom.getBoundingClientRect();
        if (t.push(d.height), s) {
          let p = u.dom.lastChild, m = p ? er(p) : [];
          if (m.length) {
            let g = m[m.length - 1], b = a ? g.right - d.left : d.right - g.left;
            b > l && (l = b, this.minWidth = o, this.minWidthFrom = c, this.minWidthTo = f);
          }
        }
      }
      c = f + u.breakAfter;
    }
    return t;
  }
  textDirectionAt(e) {
    let { i: t } = this.childPos(e, 1);
    return getComputedStyle(this.children[t].dom).direction == "rtl" ? le.RTL : le.LTR;
  }
  measureTextSize() {
    for (let o of this.children)
      if (o instanceof qe) {
        let s = o.measureTextSize();
        if (s)
          return s;
      }
    let e = document.createElement("div"), t, i, r;
    return e.className = "cm-line", e.style.width = "99999px", e.style.position = "absolute", e.textContent = "abc def ghi jkl mno pqr stu", this.view.observer.ignore(() => {
      this.dom.appendChild(e);
      let o = er(e.firstChild)[0];
      t = e.getBoundingClientRect().height, i = o ? o.width / 27 : 7, r = o ? o.height : t, e.remove();
    }), { lineHeight: t, charWidth: i, textHeight: r };
  }
  childCursor(e = this.length) {
    let t = this.children.length;
    return t && (e -= this.children[--t].length), new sm(this.children, e, t);
  }
  computeBlockGapDeco() {
    let e = [], t = this.view.viewState;
    for (let i = 0, r = 0; ; r++) {
      let o = r == t.viewports.length ? null : t.viewports[r], s = o ? o.from - 1 : this.length;
      if (s > i) {
        let l = t.lineBlockAt(s).bottom - t.lineBlockAt(i).top;
        e.push($.replace({
          widget: new Vu(l),
          block: !0,
          inclusive: !0,
          isBlockGap: !0
        }).range(i, s));
      }
      if (!o)
        break;
      i = o.to + 1;
    }
    return $.set(e);
  }
  updateDeco() {
    let e = this.view.state.facet(tr).map((t, i) => (this.dynamicDecorationMap[i] = typeof t == "function") ? t(this.view) : t);
    for (let t = e.length; t < e.length + 3; t++)
      this.dynamicDecorationMap[t] = !1;
    return this.decorations = [
      ...e,
      this.computeBlockGapDeco(),
      this.view.viewState.lineGapDeco
    ];
  }
  scrollIntoView(e) {
    let { range: t } = e, i = this.coordsAt(t.head, t.empty ? t.assoc : t.head > t.anchor ? -1 : 1), r;
    if (!i)
      return;
    !t.empty && (r = this.coordsAt(t.anchor, t.anchor > t.head ? -1 : 1)) && (i = {
      left: Math.min(i.left, r.left),
      top: Math.min(i.top, r.top),
      right: Math.max(i.right, r.right),
      bottom: Math.max(i.bottom, r.bottom)
    });
    let o = Sm(this.view), s = {
      left: i.left - o.left,
      top: i.top - o.top,
      right: i.right + o.right,
      bottom: i.bottom + o.bottom
    };
    gee(this.view.scrollDOM, s, t.head < t.anchor ? -1 : 1, e.x, e.y, e.xMargin, e.yMargin, this.view.textDirection == le.LTR);
  }
}
function Iee(n) {
  return n.node.nodeType == 1 && n.node.firstChild && (n.offset == 0 || n.node.childNodes[n.offset - 1].contentEditable == "false") && (n.offset == n.node.childNodes.length || n.node.childNodes[n.offset].contentEditable == "false");
}
class Vu extends Pn {
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
function Mm(n) {
  let e = n.observer.selectionRange, t = e.focusNode && Om(e.focusNode, e.focusOffset, 0);
  if (!t)
    return null;
  let i = te.get(t), r, o;
  if (i instanceof Rt)
    r = i.posAtStart, o = r + i.length;
  else {
    e:
      for (let s = 0, l = t; ; ) {
        for (let c = l.previousSibling, h; c; c = c.previousSibling) {
          if (h = te.get(c)) {
            r = o = h.posAtEnd + s;
            break e;
          }
          let u = new cm([], n.state);
          if (u.readNode(c), u.text.indexOf(Qn) > -1)
            return null;
          s += u.text.length;
        }
        if (l = l.parentNode, !l)
          return null;
        let a = te.get(l);
        if (a) {
          r = o = a.posAtStart + s;
          break;
        }
      }
  }
  return { from: r, to: o, node: t };
}
function Bee(n, e) {
  let t = Mm(n);
  if (!t)
    return null;
  let { from: i, to: r, node: o } = t, s = e.mapPos(i, -1), l = e.mapPos(r, 1), a = o.nodeValue;
  if (/[\n\r]/.test(a))
    return null;
  if (l - s != a.length) {
    let f = e.mapPos(i, 1), d = e.mapPos(r, -1);
    if (d - f == a.length)
      s = f, l = d;
    else if (n.state.doc.sliceString(l - a.length, l) == a)
      s = l - a.length;
    else if (n.state.doc.sliceString(s, s + a.length) == a)
      l = s + a.length;
    else
      return null;
  }
  let { main: c } = n.state.selection;
  if (n.state.doc.sliceString(s, l) != a || s > c.head || l < c.head)
    return null;
  let h = [], u = new ot(i, r, s, l);
  for (let f = o.parentNode; ; f = f.parentNode) {
    let d = te.get(f);
    if (d instanceof Vt)
      h.push({ node: f, deco: d.mark });
    else {
      if (d instanceof qe || f.nodeName == "DIV" && f.parentNode == n.contentDOM)
        return { range: u, text: o, marks: h, line: f };
      if (f != n.contentDOM)
        h.push({ node: f, deco: new fr({
          inclusive: !0,
          attributes: Aee(f),
          tagName: f.tagName.toLowerCase()
        }) });
      else
        return null;
    }
  }
}
function Om(n, e, t) {
  if (t <= 0)
    for (let i = n, r = e; ; ) {
      if (i.nodeType == 3)
        return i;
      if (i.nodeType == 1 && r > 0)
        i = i.childNodes[r - 1], r = hn(i);
      else
        break;
    }
  if (t >= 0)
    for (let i = n, r = e; ; ) {
      if (i.nodeType == 3)
        return i;
      if (i.nodeType == 1 && r < i.childNodes.length && t >= 0)
        i = i.childNodes[r], r = 0;
      else
        break;
    }
  return null;
}
function Nee(n, e) {
  return n.nodeType != 1 ? 0 : (e && n.childNodes[e - 1].contentEditable == "false" ? 1 : 0) | (e < n.childNodes.length && n.childNodes[e].contentEditable == "false" ? 2 : 0);
}
class Pee {
  constructor() {
    this.changes = [];
  }
  compareRange(e, t) {
    aa(e, t, this.changes);
  }
  comparePoint(e, t) {
    aa(e, t, this.changes);
  }
}
function Fee(n, e, t) {
  let i = new Pee();
  return X.compare(n, e, t, i), i.changes;
}
function qee(n, e) {
  for (let t = n; t && t != e; t = t.assignedSlot || t.parentNode)
    if (t.nodeType == 1 && t.contentEditable == "false")
      return !0;
  return !1;
}
function Hee(n, e, t = 1) {
  let i = n.charCategorizer(e), r = n.doc.lineAt(e), o = e - r.from;
  if (r.length == 0)
    return A.cursor(e);
  o == 0 ? t = 1 : o == r.length && (t = -1);
  let s = o, l = o;
  t < 0 ? s = Re(r.text, o, !1) : l = Re(r.text, o);
  let a = i(r.text.slice(s, l));
  for (; s > 0; ) {
    let c = Re(r.text, s, !1);
    if (i(r.text.slice(c, s)) != a)
      break;
    s = c;
  }
  for (; l < r.length; ) {
    let c = Re(r.text, l);
    if (i(r.text.slice(l, c)) != a)
      break;
    l = c;
  }
  return A.range(s + r.from, l + r.from);
}
function zee(n, e) {
  return e.left > n ? e.left - n : Math.max(0, n - e.right);
}
function $ee(n, e) {
  return e.top > n ? e.top - n : Math.max(0, n - e.bottom);
}
function hl(n, e) {
  return n.top < e.bottom - 1 && n.bottom > e.top + 1;
}
function Uu(n, e) {
  return e < n.top ? { top: e, left: n.left, right: n.right, bottom: n.bottom } : n;
}
function Wu(n, e) {
  return e > n.bottom ? { top: n.top, left: n.left, right: n.right, bottom: e } : n;
}
function fa(n, e, t) {
  let i, r, o, s, l = !1, a, c, h, u;
  for (let p = n.firstChild; p; p = p.nextSibling) {
    let m = er(p);
    for (let g = 0; g < m.length; g++) {
      let b = m[g];
      r && hl(r, b) && (b = Uu(Wu(b, r.bottom), r.top));
      let y = zee(e, b), w = $ee(t, b);
      if (y == 0 && w == 0)
        return p.nodeType == 3 ? ju(p, e, t) : fa(p, e, t);
      if (!i || s > w || s == w && o > y) {
        i = p, r = b, o = y, s = w;
        let x = w ? t < b.top ? -1 : 1 : y ? e < b.left ? -1 : 1 : 0;
        l = !x || (x > 0 ? g < m.length - 1 : g > 0);
      }
      y == 0 ? t > b.bottom && (!h || h.bottom < b.bottom) ? (a = p, h = b) : t < b.top && (!u || u.top > b.top) && (c = p, u = b) : h && hl(h, b) ? h = Wu(h, b.bottom) : u && hl(u, b) && (u = Uu(u, b.top));
    }
  }
  if (h && h.bottom >= t ? (i = a, r = h) : u && u.top <= t && (i = c, r = u), !i)
    return { node: n, offset: 0 };
  let f = Math.max(r.left, Math.min(r.right, e));
  if (i.nodeType == 3)
    return ju(i, f, t);
  if (l && i.contentEditable != "false")
    return fa(i, f, t);
  let d = Array.prototype.indexOf.call(n.childNodes, i) + (e >= (r.left + r.right) / 2 ? 1 : 0);
  return { node: n, offset: d };
}
function ju(n, e, t) {
  let i = n.nodeValue.length, r = -1, o = 1e9, s = 0;
  for (let l = 0; l < i; l++) {
    let a = In(n, l, l + 1).getClientRects();
    for (let c = 0; c < a.length; c++) {
      let h = a[c];
      if (h.top == h.bottom)
        continue;
      s || (s = e - h.left);
      let u = (h.top > t ? h.top - t : t - h.bottom) - 1;
      if (h.left - 1 <= e && h.right + 1 >= e && u < o) {
        let f = e >= (h.left + h.right) / 2, d = f;
        if ((R.chrome || R.gecko) && In(n, l).getBoundingClientRect().left == h.right && (d = !f), u <= 0)
          return { node: n, offset: l + (d ? 1 : 0) };
        r = l + (d ? 1 : 0), o = u;
      }
    }
  }
  return { node: n, offset: r > -1 ? r : s > 0 ? n.nodeValue.length : 0 };
}
function Lm(n, e, t, i = -1) {
  var r, o;
  let s = n.contentDOM.getBoundingClientRect(), l = s.top + n.viewState.paddingTop, a, { docHeight: c } = n.viewState, { x: h, y: u } = e, f = u - l;
  if (f < 0)
    return 0;
  if (f > c)
    return n.state.doc.length;
  for (let x = n.viewState.heightOracle.textHeight / 2, _ = !1; a = n.elementAtHeight(f), a.type != ae.Text; )
    for (; f = i > 0 ? a.bottom + x : a.top - x, !(f >= 0 && f <= c); ) {
      if (_)
        return t ? null : 0;
      _ = !0, i = -i;
    }
  u = l + f;
  let d = a.from;
  if (d < n.viewport.from)
    return n.viewport.from == 0 ? 0 : t ? null : Gu(n, s, a, h, u);
  if (d > n.viewport.to)
    return n.viewport.to == n.state.doc.length ? n.state.doc.length : t ? null : Gu(n, s, a, h, u);
  let p = n.dom.ownerDocument, m = n.root.elementFromPoint ? n.root : p, g = m.elementFromPoint(h, u);
  g && !n.contentDOM.contains(g) && (g = null), g || (h = Math.max(s.left + 1, Math.min(s.right - 1, h)), g = m.elementFromPoint(h, u), g && !n.contentDOM.contains(g) && (g = null));
  let b, y = -1;
  if (g && ((r = n.docView.nearest(g)) === null || r === void 0 ? void 0 : r.isEditable) != !1) {
    if (p.caretPositionFromPoint) {
      let x = p.caretPositionFromPoint(h, u);
      x && ({ offsetNode: b, offset: y } = x);
    } else if (p.caretRangeFromPoint) {
      let x = p.caretRangeFromPoint(h, u);
      x && ({ startContainer: b, startOffset: y } = x, (!n.contentDOM.contains(b) || R.safari && Vee(b, y, h) || R.chrome && Uee(b, y, h)) && (b = void 0));
    }
  }
  if (!b || !n.docView.dom.contains(b)) {
    let x = qe.find(n.docView, d);
    if (!x)
      return f > a.top + a.height / 2 ? a.to : a.from;
    ({ node: b, offset: y } = fa(x.dom, h, u));
  }
  let w = n.docView.nearest(b);
  if (!w)
    return null;
  if (w.isWidget && ((o = w.dom) === null || o === void 0 ? void 0 : o.nodeType) == 1) {
    let x = w.dom.getBoundingClientRect();
    return e.y < x.top || e.y <= x.bottom && e.x <= (x.left + x.right) / 2 ? w.posAtStart : w.posAtEnd;
  } else
    return w.localPosFromDOM(b, y) + w.posAtStart;
}
function Gu(n, e, t, i, r) {
  let o = Math.round((i - e.left) * n.defaultCharacterWidth);
  if (n.lineWrapping && t.height > n.defaultLineHeight * 1.5) {
    let l = n.viewState.heightOracle.textHeight, a = Math.floor((r - t.top - (n.defaultLineHeight - l) * 0.5) / l);
    o += a * n.viewState.heightOracle.lineLength;
  }
  let s = n.state.sliceDoc(t.from, t.to);
  return t.from + Ql(s, o, n.state.tabSize);
}
function Vee(n, e, t) {
  let i;
  if (n.nodeType != 3 || e != (i = n.nodeValue.length))
    return !1;
  for (let r = n.nextSibling; r; r = r.nextSibling)
    if (r.nodeType != 1 || r.nodeName != "BR")
      return !1;
  return In(n, i - 1, i).getBoundingClientRect().left > t;
}
function Uee(n, e, t) {
  if (e != 0)
    return !1;
  for (let r = n; ; ) {
    let o = r.parentNode;
    if (!o || o.nodeType != 1 || o.firstChild != r)
      return !1;
    if (o.classList.contains("cm-line"))
      break;
    r = o;
  }
  let i = n.nodeType == 1 ? n.getBoundingClientRect() : In(n, 0, Math.max(n.nodeValue.length, 1)).getBoundingClientRect();
  return t - i.left > 5;
}
function da(n, e) {
  let t = n.lineBlockAt(e);
  if (Array.isArray(t.type)) {
    for (let i of t.type)
      if (i.to > e || i.to == e && (i.to == t.to || i.type == ae.Text))
        return i;
  }
  return t;
}
function Wee(n, e, t, i) {
  let r = da(n, e.head), o = !i || r.type != ae.Text || !(n.lineWrapping || r.widgetLineBreaks) ? null : n.coordsAtPos(e.assoc < 0 && e.head > r.from ? e.head - 1 : e.head);
  if (o) {
    let s = n.dom.getBoundingClientRect(), l = n.textDirectionAt(r.from), a = n.posAtCoords({
      x: t == (l == le.LTR) ? s.right - 1 : s.left + 1,
      y: (o.top + o.bottom) / 2
    });
    if (a != null)
      return A.cursor(a, t ? -1 : 1);
  }
  return A.cursor(t ? r.to : r.from, t ? -1 : 1);
}
function Ku(n, e, t, i) {
  let r = n.state.doc.lineAt(e.head), o = n.bidiSpans(r), s = n.textDirectionAt(r.from);
  for (let l = e, a = null; ; ) {
    let c = Ree(r, o, s, l, t), h = Dm;
    if (!c) {
      if (r.number == (t ? n.state.doc.lines : 1))
        return l;
      h = `
`, r = n.state.doc.line(r.number + (t ? 1 : -1)), o = n.bidiSpans(r), c = A.cursor(t ? r.from : r.to);
    }
    if (a) {
      if (!a(h))
        return l;
    } else {
      if (!i)
        return c;
      a = i(h);
    }
    l = c;
  }
}
function jee(n, e, t) {
  let i = n.state.charCategorizer(e), r = i(t);
  return (o) => {
    let s = i(o);
    return r == re.Space && (r = s), r == s;
  };
}
function Gee(n, e, t, i) {
  let r = e.head, o = t ? 1 : -1;
  if (r == (t ? n.state.doc.length : 0))
    return A.cursor(r, e.assoc);
  let s = e.goalColumn, l, a = n.contentDOM.getBoundingClientRect(), c = n.coordsAtPos(r), h = n.documentTop;
  if (c)
    s == null && (s = c.left - a.left), l = o < 0 ? c.top : c.bottom;
  else {
    let d = n.viewState.lineBlockAt(r);
    s == null && (s = Math.min(a.right - a.left, n.defaultCharacterWidth * (r - d.from))), l = (o < 0 ? d.top : d.bottom) + h;
  }
  let u = a.left + s, f = i != null ? i : n.viewState.heightOracle.textHeight >> 1;
  for (let d = 0; ; d += 10) {
    let p = l + (f + d) * o, m = Lm(n, { x: u, y: p }, !1, o);
    if (p < a.top || p > a.bottom || (o < 0 ? m < r : m > r))
      return A.cursor(m, e.assoc, void 0, s);
  }
}
function ro(n, e, t) {
  for (; ; ) {
    let i = 0;
    for (let r of n)
      r.between(e - 1, e + 1, (o, s, l) => {
        if (e > o && e < s) {
          let a = i || t || (e - o < s - e ? -1 : 1);
          e = a < 0 ? o : s, i = a;
        }
      });
    if (!i)
      return e;
  }
}
function ul(n, e, t) {
  let i = ro(n.state.facet(dc).map((r) => r(n)), t.from, e.head > t.from ? -1 : 1);
  return i == t.from ? t : A.cursor(i, i < t.from ? 1 : -1);
}
class Kee {
  constructor(e) {
    this.lastKeyCode = 0, this.lastKeyTime = 0, this.lastTouchTime = 0, this.lastFocusTime = 0, this.lastScrollTop = 0, this.lastScrollLeft = 0, this.chromeScrollHack = -1, this.pendingIOSKey = void 0, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastEscPress = 0, this.lastContextMenu = 0, this.scrollHandlers = [], this.registeredEvents = [], this.customHandlers = [], this.composing = -1, this.compositionFirstChange = null, this.compositionEndedAt = 0, this.compositionPendingKey = !1, this.compositionPendingChange = !1, this.mouseSelection = null;
    let t = (i, r) => {
      this.ignoreDuringComposition(r) || r.type == "keydown" && this.keydown(e, r) || (this.mustFlushObserver(r) && e.observer.forceFlush(), this.runCustomHandlers(r.type, e, r) ? r.preventDefault() : i(e, r));
    };
    for (let i in ge) {
      let r = ge[i];
      e.contentDOM.addEventListener(i, (o) => {
        Yu(e, o) && t(r, o);
      }, pa[i]), this.registeredEvents.push(i);
    }
    e.scrollDOM.addEventListener("mousedown", (i) => {
      if (i.target == e.scrollDOM && i.clientY > e.contentDOM.getBoundingClientRect().bottom && (t(ge.mousedown, i), !i.defaultPrevented && i.button == 2)) {
        let r = e.contentDOM.style.minHeight;
        e.contentDOM.style.minHeight = "100%", setTimeout(() => e.contentDOM.style.minHeight = r, 200);
      }
    }), e.scrollDOM.addEventListener("drop", (i) => {
      i.target == e.scrollDOM && i.clientY > e.contentDOM.getBoundingClientRect().bottom && t(ge.drop, i);
    }), R.chrome && R.chrome_version == 102 && e.scrollDOM.addEventListener("wheel", () => {
      this.chromeScrollHack < 0 ? e.contentDOM.style.pointerEvents = "none" : window.clearTimeout(this.chromeScrollHack), this.chromeScrollHack = setTimeout(() => {
        this.chromeScrollHack = -1, e.contentDOM.style.pointerEvents = "";
      }, 100);
    }, { passive: !0 }), this.notifiedFocused = e.hasFocus, R.safari && e.contentDOM.addEventListener("input", () => null);
  }
  setSelectionOrigin(e) {
    this.lastSelectionOrigin = e, this.lastSelectionTime = Date.now();
  }
  ensureHandlers(e, t) {
    var i;
    let r;
    this.customHandlers = [];
    for (let o of t)
      if (r = (i = o.update(e).spec) === null || i === void 0 ? void 0 : i.domEventHandlers) {
        this.customHandlers.push({ plugin: o.value, handlers: r });
        for (let s in r)
          this.registeredEvents.indexOf(s) < 0 && s != "scroll" && (this.registeredEvents.push(s), e.contentDOM.addEventListener(s, (l) => {
            !Yu(e, l) || this.runCustomHandlers(s, e, l) && l.preventDefault();
          }));
      }
  }
  runCustomHandlers(e, t, i) {
    for (let r of this.customHandlers) {
      let o = r.handlers[e];
      if (o)
        try {
          if (o.call(r.plugin, i, t) || i.defaultPrevented)
            return !0;
        } catch (s) {
          rt(t.state, s);
        }
    }
    return !1;
  }
  runScrollHandlers(e, t) {
    this.lastScrollTop = e.scrollDOM.scrollTop, this.lastScrollLeft = e.scrollDOM.scrollLeft;
    for (let i of this.customHandlers) {
      let r = i.handlers.scroll;
      if (r)
        try {
          r.call(i.plugin, t, e);
        } catch (o) {
          rt(e.state, o);
        }
    }
  }
  keydown(e, t) {
    if (this.lastKeyCode = t.keyCode, this.lastKeyTime = Date.now(), t.keyCode == 9 && Date.now() < this.lastEscPress + 2e3)
      return !0;
    if (t.keyCode != 27 && Im.indexOf(t.keyCode) < 0 && (e.inputState.lastEscPress = 0), R.android && R.chrome && !t.synthetic && (t.keyCode == 13 || t.keyCode == 8))
      return e.observer.delayAndroidKey(t.key, t.keyCode), !0;
    let i;
    return R.ios && !t.synthetic && !t.altKey && !t.metaKey && ((i = Rm.find((r) => r.keyCode == t.keyCode)) && !t.ctrlKey || Yee.indexOf(t.key) > -1 && t.ctrlKey && !t.shiftKey) ? (this.pendingIOSKey = i || t, setTimeout(() => this.flushIOSKey(e), 250), !0) : !1;
  }
  flushIOSKey(e) {
    let t = this.pendingIOSKey;
    return t ? (this.pendingIOSKey = void 0, si(e.contentDOM, t.key, t.keyCode)) : !1;
  }
  ignoreDuringComposition(e) {
    return /^key/.test(e.type) ? this.composing > 0 ? !0 : R.safari && !R.ios && this.compositionPendingKey && Date.now() - this.compositionEndedAt < 100 ? (this.compositionPendingKey = !1, !0) : !1 : !1;
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
const Rm = [
  { key: "Backspace", keyCode: 8, inputType: "deleteContentBackward" },
  { key: "Enter", keyCode: 13, inputType: "insertParagraph" },
  { key: "Enter", keyCode: 13, inputType: "insertLineBreak" },
  { key: "Delete", keyCode: 46, inputType: "deleteContentForward" }
], Yee = "dthko", Im = [16, 17, 18, 20, 91, 92, 224, 225], Or = 6;
function Lr(n) {
  return Math.max(0, n) * 0.7 + 8;
}
function Jee(n, e) {
  return Math.max(Math.abs(n.clientX - e.clientX), Math.abs(n.clientY - e.clientY));
}
class Zee {
  constructor(e, t, i, r) {
    this.view = e, this.startEvent = t, this.style = i, this.mustSelect = r, this.scrollSpeed = { x: 0, y: 0 }, this.scrolling = -1, this.lastEvent = t, this.scrollParent = bee(e.contentDOM), this.atoms = e.state.facet(dc).map((s) => s(e));
    let o = e.contentDOM.ownerDocument;
    o.addEventListener("mousemove", this.move = this.move.bind(this)), o.addEventListener("mouseup", this.up = this.up.bind(this)), this.extend = t.shiftKey, this.multiple = e.state.facet(K.allowMultipleSelections) && Xee(e, t), this.dragging = ete(e, t) && Fm(t) == 1 ? null : !1;
  }
  start(e) {
    this.dragging === !1 && (e.preventDefault(), this.select(e));
  }
  move(e) {
    var t;
    if (e.buttons == 0)
      return this.destroy();
    if (this.dragging || this.dragging == null && Jee(this.startEvent, e) < 10)
      return;
    this.select(this.lastEvent = e);
    let i = 0, r = 0, o = ((t = this.scrollParent) === null || t === void 0 ? void 0 : t.getBoundingClientRect()) || { left: 0, top: 0, right: this.view.win.innerWidth, bottom: this.view.win.innerHeight }, s = Sm(this.view);
    e.clientX - s.left <= o.left + Or ? i = -Lr(o.left - e.clientX) : e.clientX + s.right >= o.right - Or && (i = Lr(e.clientX - o.right)), e.clientY - s.top <= o.top + Or ? r = -Lr(o.top - e.clientY) : e.clientY + s.bottom >= o.bottom - Or && (r = Lr(e.clientY - o.bottom)), this.setScrollSpeed(i, r);
  }
  up(e) {
    this.dragging == null && this.select(this.lastEvent), this.dragging || e.preventDefault(), this.destroy();
  }
  destroy() {
    this.setScrollSpeed(0, 0);
    let e = this.view.contentDOM.ownerDocument;
    e.removeEventListener("mousemove", this.move), e.removeEventListener("mouseup", this.up), this.view.inputState.mouseSelection = null;
  }
  setScrollSpeed(e, t) {
    this.scrollSpeed = { x: e, y: t }, e || t ? this.scrolling < 0 && (this.scrolling = setInterval(() => this.scroll(), 50)) : this.scrolling > -1 && (clearInterval(this.scrolling), this.scrolling = -1);
  }
  scroll() {
    this.scrollParent ? (this.scrollParent.scrollLeft += this.scrollSpeed.x, this.scrollParent.scrollTop += this.scrollSpeed.y) : this.view.win.scrollBy(this.scrollSpeed.x, this.scrollSpeed.y), this.dragging === !1 && this.select(this.lastEvent);
  }
  skipAtoms(e) {
    let t = null;
    for (let i = 0; i < e.ranges.length; i++) {
      let r = e.ranges[i], o = null;
      if (r.empty) {
        let s = ro(this.atoms, r.from, 0);
        s != r.from && (o = A.cursor(s, -1));
      } else {
        let s = ro(this.atoms, r.from, -1), l = ro(this.atoms, r.to, 1);
        (s != r.from || l != r.to) && (o = A.range(r.from == r.anchor ? s : l, r.from == r.head ? s : l));
      }
      o && (t || (t = e.ranges.slice()), t[i] = o);
    }
    return t ? A.create(t, e.mainIndex) : e;
  }
  select(e) {
    let { view: t } = this, i = this.skipAtoms(this.style.get(e, this.extend, this.multiple));
    (this.mustSelect || !i.eq(t.state.selection) || i.main.assoc != t.state.selection.main.assoc && this.dragging === !1) && this.view.dispatch({
      selection: i,
      userEvent: "select.pointer"
    }), this.mustSelect = !1;
  }
  update(e) {
    e.docChanged && this.dragging && (this.dragging = this.dragging.map(e.changes)), this.style.update(e) && setTimeout(() => this.select(this.lastEvent), 20);
  }
}
function Xee(n, e) {
  let t = n.state.facet(gm);
  return t.length ? t[0](e) : R.mac ? e.metaKey : e.ctrlKey;
}
function Qee(n, e) {
  let t = n.state.facet(bm);
  return t.length ? t[0](e) : R.mac ? !e.altKey : !e.ctrlKey;
}
function ete(n, e) {
  let { main: t } = n.state.selection;
  if (t.empty)
    return !1;
  let i = To(n.root);
  if (!i || i.rangeCount == 0)
    return !0;
  let r = i.getRangeAt(0).getClientRects();
  for (let o = 0; o < r.length; o++) {
    let s = r[o];
    if (s.left <= e.clientX && s.right >= e.clientX && s.top <= e.clientY && s.bottom >= e.clientY)
      return !0;
  }
  return !1;
}
function Yu(n, e) {
  if (!e.bubbles)
    return !0;
  if (e.defaultPrevented)
    return !1;
  for (let t = e.target, i; t != n.contentDOM; t = t.parentNode)
    if (!t || t.nodeType == 11 || (i = te.get(t)) && i.ignoreEvent(e))
      return !1;
  return !0;
}
const ge = /* @__PURE__ */ Object.create(null), pa = /* @__PURE__ */ Object.create(null), Bm = R.ie && R.ie_version < 15 || R.ios && R.webkit_version < 604;
function tte(n) {
  let e = n.dom.parentNode;
  if (!e)
    return;
  let t = e.appendChild(document.createElement("textarea"));
  t.style.cssText = "position: fixed; left: -10000px; top: 10px", t.focus(), setTimeout(() => {
    n.focus(), t.remove(), Nm(n, t.value);
  }, 50);
}
function Nm(n, e) {
  let { state: t } = n, i, r = 1, o = t.toText(e), s = o.lines == t.selection.ranges.length;
  if (ma != null && t.selection.ranges.every((a) => a.empty) && ma == o.toString()) {
    let a = -1;
    i = t.changeByRange((c) => {
      let h = t.doc.lineAt(c.from);
      if (h.from == a)
        return { range: c };
      a = h.from;
      let u = t.toText((s ? o.line(r++).text : e) + t.lineBreak);
      return {
        changes: { from: h.from, insert: u },
        range: A.cursor(c.from + u.length)
      };
    });
  } else
    s ? i = t.changeByRange((a) => {
      let c = o.line(r++);
      return {
        changes: { from: a.from, to: a.to, insert: c.text },
        range: A.cursor(a.from + c.length)
      };
    }) : i = t.replaceSelection(o);
  n.dispatch(i, {
    userEvent: "input.paste",
    scrollIntoView: !0
  });
}
ge.keydown = (n, e) => {
  n.inputState.setSelectionOrigin("select"), e.keyCode == 27 && (n.inputState.lastEscPress = Date.now());
};
ge.touchstart = (n, e) => {
  n.inputState.lastTouchTime = Date.now(), n.inputState.setSelectionOrigin("select.pointer");
};
ge.touchmove = (n) => {
  n.inputState.setSelectionOrigin("select.pointer");
};
pa.touchstart = pa.touchmove = { passive: !0 };
ge.mousedown = (n, e) => {
  if (n.observer.flush(), n.inputState.lastTouchTime > Date.now() - 2e3)
    return;
  let t = null;
  for (let i of n.state.facet(ym))
    if (t = i(n, e), t)
      break;
  if (!t && e.button == 0 && (t = rte(n, e)), t) {
    let i = !n.hasFocus;
    n.inputState.startMouseSelection(new Zee(n, e, t, i)), i && n.observer.ignore(() => im(n.contentDOM)), n.inputState.mouseSelection && n.inputState.mouseSelection.start(e);
  }
};
function Ju(n, e, t, i) {
  if (i == 1)
    return A.cursor(e, t);
  if (i == 2)
    return Hee(n.state, e, t);
  {
    let r = qe.find(n.docView, e), o = n.state.doc.lineAt(r ? r.posAtEnd : e), s = r ? r.posAtStart : o.from, l = r ? r.posAtEnd : o.to;
    return l < n.state.doc.length && l == o.to && l++, A.range(s, l);
  }
}
let Pm = (n, e) => n >= e.top && n <= e.bottom, Zu = (n, e, t) => Pm(e, t) && n >= t.left && n <= t.right;
function nte(n, e, t, i) {
  let r = qe.find(n.docView, e);
  if (!r)
    return 1;
  let o = e - r.posAtStart;
  if (o == 0)
    return 1;
  if (o == r.length)
    return -1;
  let s = r.coordsAt(o, -1);
  if (s && Zu(t, i, s))
    return -1;
  let l = r.coordsAt(o, 1);
  return l && Zu(t, i, l) ? 1 : s && Pm(i, s) ? -1 : 1;
}
function Xu(n, e) {
  let t = n.posAtCoords({ x: e.clientX, y: e.clientY }, !1);
  return { pos: t, bias: nte(n, t, e.clientX, e.clientY) };
}
const ite = R.ie && R.ie_version <= 11;
let Qu = null, ef = 0, tf = 0;
function Fm(n) {
  if (!ite)
    return n.detail;
  let e = Qu, t = tf;
  return Qu = n, tf = Date.now(), ef = !e || t > Date.now() - 400 && Math.abs(e.clientX - n.clientX) < 2 && Math.abs(e.clientY - n.clientY) < 2 ? (ef + 1) % 3 : 1;
}
function rte(n, e) {
  let t = Xu(n, e), i = Fm(e), r = n.state.selection;
  return {
    update(o) {
      o.docChanged && (t.pos = o.changes.mapPos(t.pos), r = r.map(o.changes));
    },
    get(o, s, l) {
      let a = Xu(n, o), c, h = Ju(n, a.pos, a.bias, i);
      if (t.pos != a.pos && !s) {
        let u = Ju(n, t.pos, t.bias, i), f = Math.min(u.from, h.from), d = Math.max(u.to, h.to);
        h = f < h.from ? A.range(f, d) : A.range(d, f);
      }
      return s ? r.replaceRange(r.main.extend(h.from, h.to)) : l && i == 1 && r.ranges.length > 1 && (c = ote(r, a.pos)) ? c : l ? r.addRange(h) : A.create([h]);
    }
  };
}
function ote(n, e) {
  for (let t = 0; t < n.ranges.length; t++) {
    let { from: i, to: r } = n.ranges[t];
    if (i <= e && r >= e)
      return A.create(n.ranges.slice(0, t).concat(n.ranges.slice(t + 1)), n.mainIndex == t ? 0 : n.mainIndex - (n.mainIndex > t ? 1 : 0));
  }
  return null;
}
ge.dragstart = (n, e) => {
  let { selection: { main: t } } = n.state, { mouseSelection: i } = n.inputState;
  i && (i.dragging = t), e.dataTransfer && (e.dataTransfer.setData("Text", n.state.sliceDoc(t.from, t.to)), e.dataTransfer.effectAllowed = "copyMove");
};
function nf(n, e, t, i) {
  if (!t)
    return;
  let r = n.posAtCoords({ x: e.clientX, y: e.clientY }, !1);
  e.preventDefault();
  let { mouseSelection: o } = n.inputState, s = i && o && o.dragging && Qee(n, e) ? { from: o.dragging.from, to: o.dragging.to } : null, l = { from: r, insert: t }, a = n.state.changes(s ? [s, l] : l);
  n.focus(), n.dispatch({
    changes: a,
    selection: { anchor: a.mapPos(r, -1), head: a.mapPos(r, 1) },
    userEvent: s ? "move.drop" : "input.drop"
  });
}
ge.drop = (n, e) => {
  if (!e.dataTransfer)
    return;
  if (n.state.readOnly)
    return e.preventDefault();
  let t = e.dataTransfer.files;
  if (t && t.length) {
    e.preventDefault();
    let i = Array(t.length), r = 0, o = () => {
      ++r == t.length && nf(n, e, i.filter((s) => s != null).join(n.state.lineBreak), !1);
    };
    for (let s = 0; s < t.length; s++) {
      let l = new FileReader();
      l.onerror = o, l.onload = () => {
        /[\x00-\x08\x0e-\x1f]{2}/.test(l.result) || (i[s] = l.result), o();
      }, l.readAsText(t[s]);
    }
  } else
    nf(n, e, e.dataTransfer.getData("Text"), !0);
};
ge.paste = (n, e) => {
  if (n.state.readOnly)
    return e.preventDefault();
  n.observer.flush();
  let t = Bm ? null : e.clipboardData;
  t ? (Nm(n, t.getData("text/plain") || t.getData("text/uri-text")), e.preventDefault()) : tte(n);
};
function ste(n, e) {
  let t = n.dom.parentNode;
  if (!t)
    return;
  let i = t.appendChild(document.createElement("textarea"));
  i.style.cssText = "position: fixed; left: -10000px; top: 10px", i.value = e, i.focus(), i.selectionEnd = e.length, i.selectionStart = 0, setTimeout(() => {
    i.remove(), n.focus();
  }, 50);
}
function lte(n) {
  let e = [], t = [], i = !1;
  for (let r of n.selection.ranges)
    r.empty || (e.push(n.sliceDoc(r.from, r.to)), t.push(r));
  if (!e.length) {
    let r = -1;
    for (let { from: o } of n.selection.ranges) {
      let s = n.doc.lineAt(o);
      s.number > r && (e.push(s.text), t.push({ from: s.from, to: Math.min(n.doc.length, s.to + 1) })), r = s.number;
    }
    i = !0;
  }
  return { text: e.join(n.lineBreak), ranges: t, linewise: i };
}
let ma = null;
ge.copy = ge.cut = (n, e) => {
  let { text: t, ranges: i, linewise: r } = lte(n.state);
  if (!t && !r)
    return;
  ma = r ? t : null;
  let o = Bm ? null : e.clipboardData;
  o ? (e.preventDefault(), o.clearData(), o.setData("text/plain", t)) : ste(n, t), e.type == "cut" && !n.state.readOnly && n.dispatch({
    changes: i,
    scrollIntoView: !0,
    userEvent: "delete.cut"
  });
};
const qm = /* @__PURE__ */ Wt.define();
function Hm(n, e) {
  let t = [];
  for (let i of n.facet(km)) {
    let r = i(n, e);
    r && t.push(r);
  }
  return t ? n.update({ effects: t, annotations: qm.of(!0) }) : null;
}
function zm(n) {
  setTimeout(() => {
    let e = n.hasFocus;
    if (e != n.inputState.notifiedFocused) {
      let t = Hm(n.state, e);
      t ? n.dispatch(t) : n.update([]);
    }
  }, 10);
}
ge.focus = (n) => {
  n.inputState.lastFocusTime = Date.now(), !n.scrollDOM.scrollTop && (n.inputState.lastScrollTop || n.inputState.lastScrollLeft) && (n.scrollDOM.scrollTop = n.inputState.lastScrollTop, n.scrollDOM.scrollLeft = n.inputState.lastScrollLeft), zm(n);
};
ge.blur = (n) => {
  n.observer.clearSelectionRange(), zm(n);
};
ge.compositionstart = ge.compositionupdate = (n) => {
  n.inputState.compositionFirstChange == null && (n.inputState.compositionFirstChange = !0), n.inputState.composing < 0 && (n.inputState.composing = 0);
};
ge.compositionend = (n) => {
  n.inputState.composing = -1, n.inputState.compositionEndedAt = Date.now(), n.inputState.compositionPendingKey = !0, n.inputState.compositionPendingChange = n.observer.pendingRecords().length > 0, n.inputState.compositionFirstChange = null, R.chrome && R.android ? n.observer.flushSoon() : n.inputState.compositionPendingChange ? Promise.resolve().then(() => n.observer.flush()) : setTimeout(() => {
    n.inputState.composing < 0 && n.docView.hasComposition && n.update([]);
  }, 50);
};
ge.contextmenu = (n) => {
  n.inputState.lastContextMenu = Date.now();
};
ge.beforeinput = (n, e) => {
  var t;
  let i;
  if (R.chrome && R.android && (i = Rm.find((r) => r.inputType == e.inputType)) && (n.observer.delayAndroidKey(i.key, i.keyCode), i.key == "Backspace" || i.key == "Delete")) {
    let r = ((t = window.visualViewport) === null || t === void 0 ? void 0 : t.height) || 0;
    setTimeout(() => {
      var o;
      (((o = window.visualViewport) === null || o === void 0 ? void 0 : o.height) || 0) > r + 10 && n.hasFocus && (n.contentDOM.blur(), n.focus());
    }, 100);
  }
};
const rf = ["pre-wrap", "normal", "pre-line", "break-spaces"];
class ate {
  constructor(e) {
    this.lineWrapping = e, this.doc = J.empty, this.heightSamples = {}, this.lineHeight = 14, this.charWidth = 7, this.textHeight = 14, this.lineLength = 30, this.heightChanged = !1;
  }
  heightForGap(e, t) {
    let i = this.doc.lineAt(t).number - this.doc.lineAt(e).number + 1;
    return this.lineWrapping && (i += Math.max(0, Math.ceil((t - e - i * this.lineLength * 0.5) / this.lineLength))), this.lineHeight * i;
  }
  heightForLine(e) {
    return this.lineWrapping ? (1 + Math.max(0, Math.ceil((e - this.lineLength) / (this.lineLength - 5)))) * this.lineHeight : this.lineHeight;
  }
  setDoc(e) {
    return this.doc = e, this;
  }
  mustRefreshForWrapping(e) {
    return rf.indexOf(e) > -1 != this.lineWrapping;
  }
  mustRefreshForHeights(e) {
    let t = !1;
    for (let i = 0; i < e.length; i++) {
      let r = e[i];
      r < 0 ? i++ : this.heightSamples[Math.floor(r * 10)] || (t = !0, this.heightSamples[Math.floor(r * 10)] = !0);
    }
    return t;
  }
  refresh(e, t, i, r, o, s) {
    let l = rf.indexOf(e) > -1, a = Math.round(t) != Math.round(this.lineHeight) || this.lineWrapping != l;
    if (this.lineWrapping = l, this.lineHeight = t, this.charWidth = i, this.textHeight = r, this.lineLength = o, a) {
      this.heightSamples = {};
      for (let c = 0; c < s.length; c++) {
        let h = s[c];
        h < 0 ? c++ : this.heightSamples[Math.floor(h * 10)] = !0;
      }
    }
    return a;
  }
}
class cte {
  constructor(e, t) {
    this.from = e, this.heights = t, this.index = 0;
  }
  get more() {
    return this.index < this.heights.length;
  }
}
class Ct {
  constructor(e, t, i, r, o) {
    this.from = e, this.length = t, this.top = i, this.height = r, this._content = o;
  }
  get type() {
    return typeof this._content == "number" ? ae.Text : Array.isArray(this._content) ? this._content : this._content.type;
  }
  get to() {
    return this.from + this.length;
  }
  get bottom() {
    return this.top + this.height;
  }
  get widget() {
    return this._content instanceof un ? this._content.widget : null;
  }
  get widgetLineBreaks() {
    return typeof this._content == "number" ? this._content : 0;
  }
  join(e) {
    let t = (Array.isArray(this._content) ? this._content : [this]).concat(Array.isArray(e._content) ? e._content : [e]);
    return new Ct(this.from, this.length + e.length, this.top, this.height + e.height, t);
  }
}
var ie = /* @__PURE__ */ function(n) {
  return n[n.ByPos = 0] = "ByPos", n[n.ByHeight = 1] = "ByHeight", n[n.ByPosNoHeight = 2] = "ByPosNoHeight", n;
}(ie || (ie = {}));
const oo = 1e-3;
class Ve {
  constructor(e, t, i = 2) {
    this.length = e, this.height = t, this.flags = i;
  }
  get outdated() {
    return (this.flags & 2) > 0;
  }
  set outdated(e) {
    this.flags = (e ? 2 : 0) | this.flags & -3;
  }
  setHeight(e, t) {
    this.height != t && (Math.abs(this.height - t) > oo && (e.heightChanged = !0), this.height = t);
  }
  replace(e, t, i) {
    return Ve.of(i);
  }
  decomposeLeft(e, t) {
    t.push(this);
  }
  decomposeRight(e, t) {
    t.push(this);
  }
  applyChanges(e, t, i, r) {
    let o = this, s = i.doc;
    for (let l = r.length - 1; l >= 0; l--) {
      let { fromA: a, toA: c, fromB: h, toB: u } = r[l], f = o.lineAt(a, ie.ByPosNoHeight, i.setDoc(t), 0, 0), d = f.to >= c ? f : o.lineAt(c, ie.ByPosNoHeight, i, 0, 0);
      for (u += d.to - c, c = d.to; l > 0 && f.from <= r[l - 1].toA; )
        a = r[l - 1].fromA, h = r[l - 1].fromB, l--, a < f.from && (f = o.lineAt(a, ie.ByPosNoHeight, i, 0, 0));
      h += f.from - a, a = f.from;
      let p = pc.build(i.setDoc(s), e, h, u);
      o = o.replace(a, c, p);
    }
    return o.updateHeight(i, 0);
  }
  static empty() {
    return new Ze(0, 0);
  }
  static of(e) {
    if (e.length == 1)
      return e[0];
    let t = 0, i = e.length, r = 0, o = 0;
    for (; ; )
      if (t == i)
        if (r > o * 2) {
          let l = e[t - 1];
          l.break ? e.splice(--t, 1, l.left, null, l.right) : e.splice(--t, 1, l.left, l.right), i += 1 + l.break, r -= l.size;
        } else if (o > r * 2) {
          let l = e[i];
          l.break ? e.splice(i, 1, l.left, null, l.right) : e.splice(i, 1, l.left, l.right), i += 2 + l.break, o -= l.size;
        } else
          break;
      else if (r < o) {
        let l = e[t++];
        l && (r += l.size);
      } else {
        let l = e[--i];
        l && (o += l.size);
      }
    let s = 0;
    return e[t - 1] == null ? (s = 1, t--) : e[t] == null && (s = 1, i++), new hte(Ve.of(e.slice(0, t)), s, Ve.of(e.slice(i)));
  }
}
Ve.prototype.size = 1;
class $m extends Ve {
  constructor(e, t, i) {
    super(e, t), this.deco = i;
  }
  blockAt(e, t, i, r) {
    return new Ct(r, this.length, i, this.height, this.deco || 0);
  }
  lineAt(e, t, i, r, o) {
    return this.blockAt(0, i, r, o);
  }
  forEachLine(e, t, i, r, o, s) {
    e <= o + this.length && t >= o && s(this.blockAt(0, i, r, o));
  }
  updateHeight(e, t = 0, i = !1, r) {
    return r && r.from <= t && r.more && this.setHeight(e, r.heights[r.index++]), this.outdated = !1, this;
  }
  toString() {
    return `block(${this.length})`;
  }
}
class Ze extends $m {
  constructor(e, t) {
    super(e, t, null), this.collapsed = 0, this.widgetHeight = 0, this.breaks = 0;
  }
  blockAt(e, t, i, r) {
    return new Ct(r, this.length, i, this.height, this.breaks);
  }
  replace(e, t, i) {
    let r = i[0];
    return i.length == 1 && (r instanceof Ze || r instanceof Ce && r.flags & 4) && Math.abs(this.length - r.length) < 10 ? (r instanceof Ce ? r = new Ze(r.length, this.height) : r.height = this.height, this.outdated || (r.outdated = !1), r) : Ve.of(i);
  }
  updateHeight(e, t = 0, i = !1, r) {
    return r && r.from <= t && r.more ? this.setHeight(e, r.heights[r.index++]) : (i || this.outdated) && this.setHeight(e, Math.max(this.widgetHeight, e.heightForLine(this.length - this.collapsed)) + this.breaks * e.lineHeight), this.outdated = !1, this;
  }
  toString() {
    return `line(${this.length}${this.collapsed ? -this.collapsed : ""}${this.widgetHeight ? ":" + this.widgetHeight : ""})`;
  }
}
class Ce extends Ve {
  constructor(e) {
    super(e, 0);
  }
  heightMetrics(e, t) {
    let i = e.doc.lineAt(t).number, r = e.doc.lineAt(t + this.length).number, o = r - i + 1, s, l = 0;
    if (e.lineWrapping) {
      let a = Math.min(this.height, e.lineHeight * o);
      s = a / o, this.length > o + 1 && (l = (this.height - a) / (this.length - o - 1));
    } else
      s = this.height / o;
    return { firstLine: i, lastLine: r, perLine: s, perChar: l };
  }
  blockAt(e, t, i, r) {
    let { firstLine: o, lastLine: s, perLine: l, perChar: a } = this.heightMetrics(t, r);
    if (t.lineWrapping) {
      let c = r + Math.round(Math.max(0, Math.min(1, (e - i) / this.height)) * this.length), h = t.doc.lineAt(c), u = l + h.length * a, f = Math.max(i, e - u / 2);
      return new Ct(h.from, h.length, f, u, 0);
    } else {
      let c = Math.max(0, Math.min(s - o, Math.floor((e - i) / l))), { from: h, length: u } = t.doc.line(o + c);
      return new Ct(h, u, i + l * c, l, 0);
    }
  }
  lineAt(e, t, i, r, o) {
    if (t == ie.ByHeight)
      return this.blockAt(e, i, r, o);
    if (t == ie.ByPosNoHeight) {
      let { from: d, to: p } = i.doc.lineAt(e);
      return new Ct(d, p - d, 0, 0, 0);
    }
    let { firstLine: s, perLine: l, perChar: a } = this.heightMetrics(i, o), c = i.doc.lineAt(e), h = l + c.length * a, u = c.number - s, f = r + l * u + a * (c.from - o - u);
    return new Ct(c.from, c.length, Math.max(r, Math.min(f, r + this.height - h)), h, 0);
  }
  forEachLine(e, t, i, r, o, s) {
    e = Math.max(e, o), t = Math.min(t, o + this.length);
    let { firstLine: l, perLine: a, perChar: c } = this.heightMetrics(i, o);
    for (let h = e, u = r; h <= t; ) {
      let f = i.doc.lineAt(h);
      if (h == e) {
        let p = f.number - l;
        u += a * p + c * (e - o - p);
      }
      let d = a + c * f.length;
      s(new Ct(f.from, f.length, u, d, 0)), u += d, h = f.to + 1;
    }
  }
  replace(e, t, i) {
    let r = this.length - t;
    if (r > 0) {
      let o = i[i.length - 1];
      o instanceof Ce ? i[i.length - 1] = new Ce(o.length + r) : i.push(null, new Ce(r - 1));
    }
    if (e > 0) {
      let o = i[0];
      o instanceof Ce ? i[0] = new Ce(e + o.length) : i.unshift(new Ce(e - 1), null);
    }
    return Ve.of(i);
  }
  decomposeLeft(e, t) {
    t.push(new Ce(e - 1), null);
  }
  decomposeRight(e, t) {
    t.push(null, new Ce(this.length - e - 1));
  }
  updateHeight(e, t = 0, i = !1, r) {
    let o = t + this.length;
    if (r && r.from <= t + this.length && r.more) {
      let s = [], l = Math.max(t, r.from), a = -1;
      for (r.from > t && s.push(new Ce(r.from - t - 1).updateHeight(e, t)); l <= o && r.more; ) {
        let h = e.doc.lineAt(l).length;
        s.length && s.push(null);
        let u = r.heights[r.index++];
        a == -1 ? a = u : Math.abs(u - a) >= oo && (a = -2);
        let f = new Ze(h, u);
        f.outdated = !1, s.push(f), l += h + 1;
      }
      l <= o && s.push(null, new Ce(o - l).updateHeight(e, l));
      let c = Ve.of(s);
      return (a < 0 || Math.abs(c.height - this.height) >= oo || Math.abs(a - this.heightMetrics(e, t).perLine) >= oo) && (e.heightChanged = !0), c;
    } else
      (i || this.outdated) && (this.setHeight(e, e.heightForGap(t, t + this.length)), this.outdated = !1);
    return this;
  }
  toString() {
    return `gap(${this.length})`;
  }
}
class hte extends Ve {
  constructor(e, t, i) {
    super(e.length + t + i.length, e.height + i.height, t | (e.outdated || i.outdated ? 2 : 0)), this.left = e, this.right = i, this.size = e.size + i.size;
  }
  get break() {
    return this.flags & 1;
  }
  blockAt(e, t, i, r) {
    let o = i + this.left.height;
    return e < o ? this.left.blockAt(e, t, i, r) : this.right.blockAt(e, t, o, r + this.left.length + this.break);
  }
  lineAt(e, t, i, r, o) {
    let s = r + this.left.height, l = o + this.left.length + this.break, a = t == ie.ByHeight ? e < s : e < l, c = a ? this.left.lineAt(e, t, i, r, o) : this.right.lineAt(e, t, i, s, l);
    if (this.break || (a ? c.to < l : c.from > l))
      return c;
    let h = t == ie.ByPosNoHeight ? ie.ByPosNoHeight : ie.ByPos;
    return a ? c.join(this.right.lineAt(l, h, i, s, l)) : this.left.lineAt(l, h, i, r, o).join(c);
  }
  forEachLine(e, t, i, r, o, s) {
    let l = r + this.left.height, a = o + this.left.length + this.break;
    if (this.break)
      e < a && this.left.forEachLine(e, t, i, r, o, s), t >= a && this.right.forEachLine(e, t, i, l, a, s);
    else {
      let c = this.lineAt(a, ie.ByPos, i, r, o);
      e < c.from && this.left.forEachLine(e, c.from - 1, i, r, o, s), c.to >= e && c.from <= t && s(c), t > c.to && this.right.forEachLine(c.to + 1, t, i, l, a, s);
    }
  }
  replace(e, t, i) {
    let r = this.left.length + this.break;
    if (t < r)
      return this.balanced(this.left.replace(e, t, i), this.right);
    if (e > this.left.length)
      return this.balanced(this.left, this.right.replace(e - r, t - r, i));
    let o = [];
    e > 0 && this.decomposeLeft(e, o);
    let s = o.length;
    for (let l of i)
      o.push(l);
    if (e > 0 && of(o, s - 1), t < this.length) {
      let l = o.length;
      this.decomposeRight(t, o), of(o, l);
    }
    return Ve.of(o);
  }
  decomposeLeft(e, t) {
    let i = this.left.length;
    if (e <= i)
      return this.left.decomposeLeft(e, t);
    t.push(this.left), this.break && (i++, e >= i && t.push(null)), e > i && this.right.decomposeLeft(e - i, t);
  }
  decomposeRight(e, t) {
    let i = this.left.length, r = i + this.break;
    if (e >= r)
      return this.right.decomposeRight(e - r, t);
    e < i && this.left.decomposeRight(e, t), this.break && e < r && t.push(null), t.push(this.right);
  }
  balanced(e, t) {
    return e.size > 2 * t.size || t.size > 2 * e.size ? Ve.of(this.break ? [e, null, t] : [e, t]) : (this.left = e, this.right = t, this.height = e.height + t.height, this.outdated = e.outdated || t.outdated, this.size = e.size + t.size, this.length = e.length + this.break + t.length, this);
  }
  updateHeight(e, t = 0, i = !1, r) {
    let { left: o, right: s } = this, l = t + o.length + this.break, a = null;
    return r && r.from <= t + o.length && r.more ? a = o = o.updateHeight(e, t, i, r) : o.updateHeight(e, t, i), r && r.from <= l + s.length && r.more ? a = s = s.updateHeight(e, l, i, r) : s.updateHeight(e, l, i), a ? this.balanced(o, s) : (this.height = this.left.height + this.right.height, this.outdated = !1, this);
  }
  toString() {
    return this.left + (this.break ? " " : "-") + this.right;
  }
}
function of(n, e) {
  let t, i;
  n[e] == null && (t = n[e - 1]) instanceof Ce && (i = n[e + 1]) instanceof Ce && n.splice(e - 1, 3, new Ce(t.length + 1 + i.length));
}
const ute = 5;
class pc {
  constructor(e, t) {
    this.pos = e, this.oracle = t, this.nodes = [], this.lineStart = -1, this.lineEnd = -1, this.covering = null, this.writtenTo = e;
  }
  get isCovered() {
    return this.covering && this.nodes[this.nodes.length - 1] == this.covering;
  }
  span(e, t) {
    if (this.lineStart > -1) {
      let i = Math.min(t, this.lineEnd), r = this.nodes[this.nodes.length - 1];
      r instanceof Ze ? r.length += i - this.pos : (i > this.pos || !this.isCovered) && this.nodes.push(new Ze(i - this.pos, -1)), this.writtenTo = i, t > i && (this.nodes.push(null), this.writtenTo++, this.lineStart = -1);
    }
    this.pos = t;
  }
  point(e, t, i) {
    if (e < t || i.heightRelevant) {
      let r = i.widget ? i.widget.estimatedHeight : 0, o = i.widget ? i.widget.lineBreaks : 0;
      r < 0 && (r = this.oracle.lineHeight);
      let s = t - e;
      i.block ? this.addBlock(new $m(s, r, i)) : (s || o || r >= ute) && this.addLineDeco(r, o, s);
    } else
      t > e && this.span(e, t);
    this.lineEnd > -1 && this.lineEnd < this.pos && (this.lineEnd = this.oracle.doc.lineAt(this.pos).to);
  }
  enterLine() {
    if (this.lineStart > -1)
      return;
    let { from: e, to: t } = this.oracle.doc.lineAt(this.pos);
    this.lineStart = e, this.lineEnd = t, this.writtenTo < e && ((this.writtenTo < e - 1 || this.nodes[this.nodes.length - 1] == null) && this.nodes.push(this.blankContent(this.writtenTo, e - 1)), this.nodes.push(null)), this.pos > e && this.nodes.push(new Ze(this.pos - e, -1)), this.writtenTo = this.pos;
  }
  blankContent(e, t) {
    let i = new Ce(t - e);
    return this.oracle.doc.lineAt(e).to == t && (i.flags |= 4), i;
  }
  ensureLine() {
    this.enterLine();
    let e = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
    if (e instanceof Ze)
      return e;
    let t = new Ze(0, -1);
    return this.nodes.push(t), t;
  }
  addBlock(e) {
    var t;
    this.enterLine();
    let i = (t = e.deco) === null || t === void 0 ? void 0 : t.type;
    i == ae.WidgetAfter && !this.isCovered && this.ensureLine(), this.nodes.push(e), this.writtenTo = this.pos = this.pos + e.length, i != ae.WidgetBefore && (this.covering = e);
  }
  addLineDeco(e, t, i) {
    let r = this.ensureLine();
    r.length += i, r.collapsed += i, r.widgetHeight = Math.max(r.widgetHeight, e), r.breaks += t, this.writtenTo = this.pos = this.pos + i;
  }
  finish(e) {
    let t = this.nodes.length == 0 ? null : this.nodes[this.nodes.length - 1];
    this.lineStart > -1 && !(t instanceof Ze) && !this.isCovered ? this.nodes.push(new Ze(0, -1)) : (this.writtenTo < this.pos || t == null) && this.nodes.push(this.blankContent(this.writtenTo, this.pos));
    let i = e;
    for (let r of this.nodes)
      r instanceof Ze && r.updateHeight(this.oracle, i), i += r ? r.length : 1;
    return this.nodes;
  }
  static build(e, t, i, r) {
    let o = new pc(i, e);
    return X.spans(t, i, r, o, 0), o.finish(i);
  }
}
function fte(n, e, t) {
  let i = new dte();
  return X.compare(n, e, t, i, 0), i.changes;
}
class dte {
  constructor() {
    this.changes = [];
  }
  compareRange() {
  }
  comparePoint(e, t, i, r) {
    (e < t || i && i.heightRelevant || r && r.heightRelevant) && aa(e, t, this.changes, 5);
  }
}
function pte(n, e) {
  let t = n.getBoundingClientRect(), i = n.ownerDocument, r = i.defaultView || window, o = Math.max(0, t.left), s = Math.min(r.innerWidth, t.right), l = Math.max(0, t.top), a = Math.min(r.innerHeight, t.bottom);
  for (let c = n.parentNode; c && c != i.body; )
    if (c.nodeType == 1) {
      let h = c, u = window.getComputedStyle(h);
      if ((h.scrollHeight > h.clientHeight || h.scrollWidth > h.clientWidth) && u.overflow != "visible") {
        let f = h.getBoundingClientRect();
        o = Math.max(o, f.left), s = Math.min(s, f.right), l = Math.max(l, f.top), a = c == n.parentNode ? f.bottom : Math.min(a, f.bottom);
      }
      c = u.position == "absolute" || u.position == "fixed" ? h.offsetParent : h.parentNode;
    } else if (c.nodeType == 11)
      c = c.host;
    else
      break;
  return {
    left: o - t.left,
    right: Math.max(o, s) - t.left,
    top: l - (t.top + e),
    bottom: Math.max(l, a) - (t.top + e)
  };
}
function mte(n, e) {
  let t = n.getBoundingClientRect();
  return {
    left: 0,
    right: t.right - t.left,
    top: e,
    bottom: t.bottom - (t.top + e)
  };
}
class fl {
  constructor(e, t, i) {
    this.from = e, this.to = t, this.size = i;
  }
  static same(e, t) {
    if (e.length != t.length)
      return !1;
    for (let i = 0; i < e.length; i++) {
      let r = e[i], o = t[i];
      if (r.from != o.from || r.to != o.to || r.size != o.size)
        return !1;
    }
    return !0;
  }
  draw(e) {
    return $.replace({ widget: new gte(this.size, e) }).range(this.from, this.to);
  }
}
class gte extends Pn {
  constructor(e, t) {
    super(), this.size = e, this.vertical = t;
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
class sf {
  constructor(e) {
    this.state = e, this.pixelViewport = { left: 0, right: window.innerWidth, top: 0, bottom: 0 }, this.inView = !0, this.paddingTop = 0, this.paddingBottom = 0, this.contentDOMWidth = 0, this.contentDOMHeight = 0, this.editorHeight = 0, this.editorWidth = 0, this.scrollTop = 0, this.scrolledToBottom = !0, this.scrollAnchorPos = 0, this.scrollAnchorHeight = -1, this.scaler = lf, this.scrollTarget = null, this.printing = !1, this.mustMeasureContent = !0, this.defaultTextDirection = le.LTR, this.visibleRanges = [], this.mustEnforceCursorAssoc = !1;
    let t = e.facet(fc).some((i) => typeof i != "function" && i.class == "cm-lineWrapping");
    this.heightOracle = new ate(t), this.stateDeco = e.facet(tr).filter((i) => typeof i != "function"), this.heightMap = Ve.empty().applyChanges(this.stateDeco, J.empty, this.heightOracle.setDoc(e.doc), [new ot(0, 0, 0, e.doc.length)]), this.viewport = this.getViewport(0, null), this.updateViewportLines(), this.updateForViewport(), this.lineGaps = this.ensureLineGaps([]), this.lineGapDeco = $.set(this.lineGaps.map((i) => i.draw(!1))), this.computeVisibleRanges();
  }
  updateForViewport() {
    let e = [this.viewport], { main: t } = this.state.selection;
    for (let i = 0; i <= 1; i++) {
      let r = i ? t.head : t.anchor;
      if (!e.some(({ from: o, to: s }) => r >= o && r <= s)) {
        let { from: o, to: s } = this.lineBlockAt(r);
        e.push(new Rr(o, s));
      }
    }
    this.viewports = e.sort((i, r) => i.from - r.from), this.scaler = this.heightMap.height <= 7e6 ? lf : new vte(this.heightOracle, this.heightMap, this.viewports);
  }
  updateViewportLines() {
    this.viewportLines = [], this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.heightOracle.setDoc(this.state.doc), 0, 0, (e) => {
      this.viewportLines.push(this.scaler.scale == 1 ? e : Bi(e, this.scaler));
    });
  }
  update(e, t = null) {
    this.state = e.state;
    let i = this.stateDeco;
    this.stateDeco = this.state.facet(tr).filter((h) => typeof h != "function");
    let r = e.changedRanges, o = ot.extendWithRanges(r, fte(i, this.stateDeco, e ? e.changes : ye.empty(this.state.doc.length))), s = this.heightMap.height, l = this.scrolledToBottom ? null : this.scrollAnchorAt(this.scrollTop);
    this.heightMap = this.heightMap.applyChanges(this.stateDeco, e.startState.doc, this.heightOracle.setDoc(this.state.doc), o), this.heightMap.height != s && (e.flags |= 2), l ? (this.scrollAnchorPos = e.changes.mapPos(l.from, -1), this.scrollAnchorHeight = l.top) : (this.scrollAnchorPos = -1, this.scrollAnchorHeight = this.heightMap.height);
    let a = o.length ? this.mapViewport(this.viewport, e.changes) : this.viewport;
    (t && (t.range.head < a.from || t.range.head > a.to) || !this.viewportIsAppropriate(a)) && (a = this.getViewport(0, t));
    let c = !e.changes.empty || e.flags & 2 || a.from != this.viewport.from || a.to != this.viewport.to;
    this.viewport = a, this.updateForViewport(), c && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 2e3 << 1) && this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, e.changes))), e.flags |= this.computeVisibleRanges(), t && (this.scrollTarget = t), !this.mustEnforceCursorAssoc && e.selectionSet && e.view.lineWrapping && e.state.selection.main.empty && e.state.selection.main.assoc && !e.state.facet(_m) && (this.mustEnforceCursorAssoc = !0);
  }
  measure(e) {
    let t = e.contentDOM, i = window.getComputedStyle(t), r = this.heightOracle, o = i.whiteSpace;
    this.defaultTextDirection = i.direction == "rtl" ? le.RTL : le.LTR;
    let s = this.heightOracle.mustRefreshForWrapping(o), l = t.getBoundingClientRect(), a = s || this.mustMeasureContent || this.contentDOMHeight != l.height;
    this.contentDOMHeight = l.height, this.mustMeasureContent = !1;
    let c = 0, h = 0, u = parseInt(i.paddingTop) || 0, f = parseInt(i.paddingBottom) || 0;
    (this.paddingTop != u || this.paddingBottom != f) && (this.paddingTop = u, this.paddingBottom = f, c |= 10), this.editorWidth != e.scrollDOM.clientWidth && (r.lineWrapping && (a = !0), this.editorWidth = e.scrollDOM.clientWidth, c |= 8), this.scrollTop != e.scrollDOM.scrollTop && (this.scrollAnchorHeight = -1, this.scrollTop = e.scrollDOM.scrollTop), this.scrolledToBottom = om(e.scrollDOM);
    let d = (this.printing ? mte : pte)(t, this.paddingTop), p = d.top - this.pixelViewport.top, m = d.bottom - this.pixelViewport.bottom;
    this.pixelViewport = d;
    let g = this.pixelViewport.bottom > this.pixelViewport.top && this.pixelViewport.right > this.pixelViewport.left;
    if (g != this.inView && (this.inView = g, g && (a = !0)), !this.inView && !this.scrollTarget)
      return 0;
    let b = l.width;
    if ((this.contentDOMWidth != b || this.editorHeight != e.scrollDOM.clientHeight) && (this.contentDOMWidth = l.width, this.editorHeight = e.scrollDOM.clientHeight, c |= 8), a) {
      let w = e.docView.measureVisibleLineHeights(this.viewport);
      if (r.mustRefreshForHeights(w) && (s = !0), s || r.lineWrapping && Math.abs(b - this.contentDOMWidth) > r.charWidth) {
        let { lineHeight: x, charWidth: _, textHeight: k } = e.docView.measureTextSize();
        s = x > 0 && r.refresh(o, x, _, k, b / _, w), s && (e.docView.minWidth = 0, c |= 8);
      }
      p > 0 && m > 0 ? h = Math.max(p, m) : p < 0 && m < 0 && (h = Math.min(p, m)), r.heightChanged = !1;
      for (let x of this.viewports) {
        let _ = x.from == this.viewport.from ? w : e.docView.measureVisibleLineHeights(x);
        this.heightMap = (s ? Ve.empty().applyChanges(this.stateDeco, J.empty, this.heightOracle, [new ot(0, 0, 0, e.state.doc.length)]) : this.heightMap).updateHeight(r, 0, s, new cte(x.from, _));
      }
      r.heightChanged && (c |= 2);
    }
    let y = !this.viewportIsAppropriate(this.viewport, h) || this.scrollTarget && (this.scrollTarget.range.head < this.viewport.from || this.scrollTarget.range.head > this.viewport.to);
    return y && (this.viewport = this.getViewport(h, this.scrollTarget)), this.updateForViewport(), (c & 2 || y) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 2e3 << 1) && this.updateLineGaps(this.ensureLineGaps(s ? [] : this.lineGaps, e)), c |= this.computeVisibleRanges(), this.mustEnforceCursorAssoc && (this.mustEnforceCursorAssoc = !1, e.docView.enforceCursorAssoc()), c;
  }
  get visibleTop() {
    return this.scaler.fromDOM(this.pixelViewport.top);
  }
  get visibleBottom() {
    return this.scaler.fromDOM(this.pixelViewport.bottom);
  }
  getViewport(e, t) {
    let i = 0.5 - Math.max(-0.5, Math.min(0.5, e / 1e3 / 2)), r = this.heightMap, o = this.heightOracle, { visibleTop: s, visibleBottom: l } = this, a = new Rr(r.lineAt(s - i * 1e3, ie.ByHeight, o, 0, 0).from, r.lineAt(l + (1 - i) * 1e3, ie.ByHeight, o, 0, 0).to);
    if (t) {
      let { head: c } = t.range;
      if (c < a.from || c > a.to) {
        let h = Math.min(this.editorHeight, this.pixelViewport.bottom - this.pixelViewport.top), u = r.lineAt(c, ie.ByPos, o, 0, 0), f;
        t.y == "center" ? f = (u.top + u.bottom) / 2 - h / 2 : t.y == "start" || t.y == "nearest" && c < a.from ? f = u.top : f = u.bottom - h, a = new Rr(r.lineAt(f - 1e3 / 2, ie.ByHeight, o, 0, 0).from, r.lineAt(f + h + 1e3 / 2, ie.ByHeight, o, 0, 0).to);
      }
    }
    return a;
  }
  mapViewport(e, t) {
    let i = t.mapPos(e.from, -1), r = t.mapPos(e.to, 1);
    return new Rr(this.heightMap.lineAt(i, ie.ByPos, this.heightOracle, 0, 0).from, this.heightMap.lineAt(r, ie.ByPos, this.heightOracle, 0, 0).to);
  }
  viewportIsAppropriate({ from: e, to: t }, i = 0) {
    if (!this.inView)
      return !0;
    let { top: r } = this.heightMap.lineAt(e, ie.ByPos, this.heightOracle, 0, 0), { bottom: o } = this.heightMap.lineAt(t, ie.ByPos, this.heightOracle, 0, 0), { visibleTop: s, visibleBottom: l } = this;
    return (e == 0 || r <= s - Math.max(10, Math.min(-i, 250))) && (t == this.state.doc.length || o >= l + Math.max(10, Math.min(i, 250))) && r > s - 2 * 1e3 && o < l + 2 * 1e3;
  }
  mapLineGaps(e, t) {
    if (!e.length || t.empty)
      return e;
    let i = [];
    for (let r of e)
      t.touchesRange(r.from, r.to) || i.push(new fl(t.mapPos(r.from), t.mapPos(r.to), r.size));
    return i;
  }
  ensureLineGaps(e, t) {
    let i = this.heightOracle.lineWrapping, r = i ? 1e4 : 2e3, o = r >> 1, s = r << 1;
    if (this.defaultTextDirection != le.LTR && !i)
      return [];
    let l = [], a = (c, h, u, f) => {
      if (h - c < o)
        return;
      let d = this.state.selection.main, p = [d.from];
      d.empty || p.push(d.to);
      for (let g of p)
        if (g > c && g < h) {
          a(c, g - 10, u, f), a(g + 10, h, u, f);
          return;
        }
      let m = yte(e, (g) => g.from >= u.from && g.to <= u.to && Math.abs(g.from - c) < o && Math.abs(g.to - h) < o && !p.some((b) => g.from < b && g.to > b));
      if (!m) {
        if (h < u.to && t && i && t.visibleRanges.some((g) => g.from <= h && g.to >= h)) {
          let g = t.moveToLineBoundary(A.cursor(h), !1, !0).head;
          g > c && (h = g);
        }
        m = new fl(c, h, this.gapSize(u, c, h, f));
      }
      l.push(m);
    };
    for (let c of this.viewportLines) {
      if (c.length < s)
        continue;
      let h = bte(c.from, c.to, this.stateDeco);
      if (h.total < s)
        continue;
      let u = this.scrollTarget ? this.scrollTarget.range.head : null, f, d;
      if (i) {
        let p = r / this.heightOracle.lineLength * this.heightOracle.lineHeight, m, g;
        if (u != null) {
          let b = Br(h, u), y = ((this.visibleBottom - this.visibleTop) / 2 + p) / c.height;
          m = b - y, g = b + y;
        } else
          m = (this.visibleTop - c.top - p) / c.height, g = (this.visibleBottom - c.top + p) / c.height;
        f = Ir(h, m), d = Ir(h, g);
      } else {
        let p = h.total * this.heightOracle.charWidth, m = r * this.heightOracle.charWidth, g, b;
        if (u != null) {
          let y = Br(h, u), w = ((this.pixelViewport.right - this.pixelViewport.left) / 2 + m) / p;
          g = y - w, b = y + w;
        } else
          g = (this.pixelViewport.left - m) / p, b = (this.pixelViewport.right + m) / p;
        f = Ir(h, g), d = Ir(h, b);
      }
      f > c.from && a(c.from, f, c, h), d < c.to && a(d, c.to, c, h);
    }
    return l;
  }
  gapSize(e, t, i, r) {
    let o = Br(r, i) - Br(r, t);
    return this.heightOracle.lineWrapping ? e.height * o : r.total * this.heightOracle.charWidth * o;
  }
  updateLineGaps(e) {
    fl.same(e, this.lineGaps) || (this.lineGaps = e, this.lineGapDeco = $.set(e.map((t) => t.draw(this.heightOracle.lineWrapping))));
  }
  computeVisibleRanges() {
    let e = this.stateDeco;
    this.lineGaps.length && (e = e.concat(this.lineGapDeco));
    let t = [];
    X.spans(e, this.viewport.from, this.viewport.to, {
      span(r, o) {
        t.push({ from: r, to: o });
      },
      point() {
      }
    }, 20);
    let i = t.length != this.visibleRanges.length || this.visibleRanges.some((r, o) => r.from != t[o].from || r.to != t[o].to);
    return this.visibleRanges = t, i ? 4 : 0;
  }
  lineBlockAt(e) {
    return e >= this.viewport.from && e <= this.viewport.to && this.viewportLines.find((t) => t.from <= e && t.to >= e) || Bi(this.heightMap.lineAt(e, ie.ByPos, this.heightOracle, 0, 0), this.scaler);
  }
  lineBlockAtHeight(e) {
    return Bi(this.heightMap.lineAt(this.scaler.fromDOM(e), ie.ByHeight, this.heightOracle, 0, 0), this.scaler);
  }
  scrollAnchorAt(e) {
    let t = this.lineBlockAtHeight(e + 8);
    return t.from >= this.viewport.from || this.viewportLines[0].top - e > 200 ? t : this.viewportLines[0];
  }
  elementAtHeight(e) {
    return Bi(this.heightMap.blockAt(this.scaler.fromDOM(e), this.heightOracle, 0, 0), this.scaler);
  }
  get docHeight() {
    return this.scaler.toDOM(this.heightMap.height);
  }
  get contentHeight() {
    return this.docHeight + this.paddingTop + this.paddingBottom;
  }
}
class Rr {
  constructor(e, t) {
    this.from = e, this.to = t;
  }
}
function bte(n, e, t) {
  let i = [], r = n, o = 0;
  return X.spans(t, n, e, {
    span() {
    },
    point(s, l) {
      s > r && (i.push({ from: r, to: s }), o += s - r), r = l;
    }
  }, 20), r < e && (i.push({ from: r, to: e }), o += e - r), { total: o, ranges: i };
}
function Ir({ total: n, ranges: e }, t) {
  if (t <= 0)
    return e[0].from;
  if (t >= 1)
    return e[e.length - 1].to;
  let i = Math.floor(n * t);
  for (let r = 0; ; r++) {
    let { from: o, to: s } = e[r], l = s - o;
    if (i <= l)
      return o + i;
    i -= l;
  }
}
function Br(n, e) {
  let t = 0;
  for (let { from: i, to: r } of n.ranges) {
    if (e <= r) {
      t += e - i;
      break;
    }
    t += r - i;
  }
  return t / n.total;
}
function yte(n, e) {
  for (let t of n)
    if (e(t))
      return t;
}
const lf = {
  toDOM(n) {
    return n;
  },
  fromDOM(n) {
    return n;
  },
  scale: 1
};
class vte {
  constructor(e, t, i) {
    let r = 0, o = 0, s = 0;
    this.viewports = i.map(({ from: l, to: a }) => {
      let c = t.lineAt(l, ie.ByPos, e, 0, 0).top, h = t.lineAt(a, ie.ByPos, e, 0, 0).bottom;
      return r += h - c, { from: l, to: a, top: c, bottom: h, domTop: 0, domBottom: 0 };
    }), this.scale = (7e6 - r) / (t.height - r);
    for (let l of this.viewports)
      l.domTop = s + (l.top - o) * this.scale, s = l.domBottom = l.domTop + (l.bottom - l.top), o = l.bottom;
  }
  toDOM(e) {
    for (let t = 0, i = 0, r = 0; ; t++) {
      let o = t < this.viewports.length ? this.viewports[t] : null;
      if (!o || e < o.top)
        return r + (e - i) * this.scale;
      if (e <= o.bottom)
        return o.domTop + (e - o.top);
      i = o.bottom, r = o.domBottom;
    }
  }
  fromDOM(e) {
    for (let t = 0, i = 0, r = 0; ; t++) {
      let o = t < this.viewports.length ? this.viewports[t] : null;
      if (!o || e < o.domTop)
        return i + (e - r) / this.scale;
      if (e <= o.domBottom)
        return o.top + (e - o.domTop);
      i = o.bottom, r = o.domBottom;
    }
  }
}
function Bi(n, e) {
  if (e.scale == 1)
    return n;
  let t = e.toDOM(n.top), i = e.toDOM(n.bottom);
  return new Ct(n.from, n.length, t, i - t, Array.isArray(n._content) ? n._content.map((r) => Bi(r, e)) : n._content);
}
const Nr = /* @__PURE__ */ B.define({ combine: (n) => n.join(" ") }), ga = /* @__PURE__ */ B.define({ combine: (n) => n.indexOf(!0) > -1 }), ba = /* @__PURE__ */ an.newName(), Vm = /* @__PURE__ */ an.newName(), Um = /* @__PURE__ */ an.newName(), Wm = { "&light": "." + Vm, "&dark": "." + Um };
function ya(n, e, t) {
  return new an(e, {
    finish(i) {
      return /&/.test(i) ? i.replace(/&\w*/, (r) => {
        if (r == "&")
          return n;
        if (!t || !t[r])
          throw new RangeError(`Unsupported selector: ${r}`);
        return t[r];
      }) : n + " " + i;
    }
  });
}
const xte = /* @__PURE__ */ ya("." + ba, {
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
}, Wm);
class kte {
  constructor(e, t, i, r) {
    this.typeOver = r, this.bounds = null, this.text = "";
    let { impreciseHead: o, impreciseAnchor: s } = e.docView;
    if (e.state.readOnly && t > -1)
      this.newSel = null;
    else if (t > -1 && (this.bounds = e.docView.domBoundsAround(t, i, 0))) {
      let l = o || s ? [] : _te(e), a = new cm(l, e.state);
      a.readRange(this.bounds.startDOM, this.bounds.endDOM), this.text = a.text, this.newSel = Ate(l, this.bounds.from);
    } else {
      let l = e.observer.selectionRange, a = o && o.node == l.focusNode && o.offset == l.focusOffset || !na(e.contentDOM, l.focusNode) ? e.state.selection.main.head : e.docView.posFromDOM(l.focusNode, l.focusOffset), c = s && s.node == l.anchorNode && s.offset == l.anchorOffset || !na(e.contentDOM, l.anchorNode) ? e.state.selection.main.anchor : e.docView.posFromDOM(l.anchorNode, l.anchorOffset);
      this.newSel = A.single(c, a);
    }
  }
}
function jm(n, e) {
  let t, { newSel: i } = e, r = n.state.selection.main, o = n.inputState.lastKeyTime > Date.now() - 100 ? n.inputState.lastKeyCode : -1;
  if (e.bounds) {
    let { from: s, to: l } = e.bounds, a = r.from, c = null;
    (o === 8 || R.android && e.text.length < l - s) && (a = r.to, c = "end");
    let h = wte(n.state.doc.sliceString(s, l, Qn), e.text, a - s, c);
    h && (R.chrome && o == 13 && h.toB == h.from + 2 && e.text.slice(h.from, h.toB) == Qn + Qn && h.toB--, t = {
      from: s + h.from,
      to: s + h.toA,
      insert: J.of(e.text.slice(h.from, h.toB).split(Qn))
    });
  } else
    i && (!n.hasFocus && n.state.facet(fs) || i.main.eq(r)) && (i = null);
  if (!t && !i)
    return !1;
  if (!t && e.typeOver && !r.empty && i && i.main.empty ? t = { from: r.from, to: r.to, insert: n.state.doc.slice(r.from, r.to) } : t && t.from >= r.from && t.to <= r.to && (t.from != r.from || t.to != r.to) && r.to - r.from - (t.to - t.from) <= 4 ? t = {
    from: r.from,
    to: r.to,
    insert: n.state.doc.slice(r.from, t.from).append(t.insert).append(n.state.doc.slice(t.to, r.to))
  } : (R.mac || R.android) && t && t.from == t.to && t.from == r.head - 1 && /^\. ?$/.test(t.insert.toString()) && n.contentDOM.getAttribute("autocorrect") == "off" ? (i && t.insert.length == 2 && (i = A.single(i.main.anchor - 1, i.main.head - 1)), t = { from: r.from, to: r.to, insert: J.of([" "]) }) : R.chrome && t && t.from == t.to && t.from == r.head && t.insert.toString() == `
 ` && n.lineWrapping && (i && (i = A.single(i.main.anchor - 1, i.main.head - 1)), t = { from: r.from, to: r.to, insert: J.of([" "]) }), t) {
    let s = n.state;
    if (R.ios && n.inputState.flushIOSKey(n) || R.android && (t.from == r.from && t.to == r.to && t.insert.length == 1 && t.insert.lines == 2 && si(n.contentDOM, "Enter", 13) || (t.from == r.from - 1 && t.to == r.to && t.insert.length == 0 || o == 8 && t.insert.length < t.to - t.from) && si(n.contentDOM, "Backspace", 8) || t.from == r.from && t.to == r.to + 1 && t.insert.length == 0 && si(n.contentDOM, "Delete", 46)))
      return !0;
    let l = t.insert.toString();
    if (n.state.facet(xm).some((h) => h(n, t.from, t.to, l)))
      return !0;
    n.inputState.composing >= 0 && n.inputState.composing++;
    let a;
    if (t.from >= r.from && t.to <= r.to && t.to - t.from >= (r.to - r.from) / 3 && (!i || i.main.empty && i.main.from == t.from + t.insert.length) && n.inputState.composing < 0) {
      let h = r.from < t.from ? s.sliceDoc(r.from, t.from) : "", u = r.to > t.to ? s.sliceDoc(t.to, r.to) : "";
      a = s.replaceSelection(n.state.toText(h + t.insert.sliceString(0, void 0, n.state.lineBreak) + u));
    } else {
      let h = s.changes(t), u = i && i.main.to <= h.newLength ? i.main : void 0;
      if (s.selection.ranges.length > 1 && n.inputState.composing >= 0 && t.to <= r.to && t.to >= r.to - 10) {
        let f = n.state.sliceDoc(t.from, t.to), d = Mm(n) || n.state.doc.lineAt(r.head), p = r.to - t.to, m = r.to - r.from;
        a = s.changeByRange((g) => {
          if (g.from == r.from && g.to == r.to)
            return { changes: h, range: u || g.map(h) };
          let b = g.to - p, y = b - f.length;
          if (g.to - g.from != m || n.state.sliceDoc(y, b) != f || d && g.to >= d.from && g.from <= d.to)
            return { range: g };
          let w = s.changes({ from: y, to: b, insert: t.insert }), x = g.to - r.to;
          return {
            changes: w,
            range: u ? A.range(Math.max(0, u.anchor + x), Math.max(0, u.head + x)) : g.map(w)
          };
        });
      } else
        a = {
          changes: h,
          selection: u && s.selection.replaceRange(u)
        };
    }
    let c = "input.type";
    return (n.composing || n.inputState.compositionPendingChange && n.inputState.compositionEndedAt > Date.now() - 50) && (n.inputState.compositionPendingChange = !1, c += ".compose", n.inputState.compositionFirstChange && (c += ".start", n.inputState.compositionFirstChange = !1)), n.dispatch(a, { scrollIntoView: !0, userEvent: c }), !0;
  } else if (i && !i.main.eq(r)) {
    let s = !1, l = "select";
    return n.inputState.lastSelectionTime > Date.now() - 50 && (n.inputState.lastSelectionOrigin == "select" && (s = !0), l = n.inputState.lastSelectionOrigin), n.dispatch({ selection: i, scrollIntoView: s, userEvent: l }), !0;
  } else
    return !1;
}
function wte(n, e, t, i) {
  let r = Math.min(n.length, e.length), o = 0;
  for (; o < r && n.charCodeAt(o) == e.charCodeAt(o); )
    o++;
  if (o == r && n.length == e.length)
    return null;
  let s = n.length, l = e.length;
  for (; s > 0 && l > 0 && n.charCodeAt(s - 1) == e.charCodeAt(l - 1); )
    s--, l--;
  if (i == "end") {
    let a = Math.max(0, o - Math.min(s, l));
    t -= s + a - o;
  }
  if (s < o && n.length < e.length) {
    let a = t <= o && t >= s ? o - t : 0;
    o -= a, l = o + (l - s), s = o;
  } else if (l < o) {
    let a = t <= o && t >= l ? o - t : 0;
    o -= a, s = o + (s - l), l = o;
  }
  return { from: o, toA: s, toB: l };
}
function _te(n) {
  let e = [];
  if (n.root.activeElement != n.contentDOM)
    return e;
  let { anchorNode: t, anchorOffset: i, focusNode: r, focusOffset: o } = n.observer.selectionRange;
  return t && (e.push(new Bu(t, i)), (r != t || o != i) && e.push(new Bu(r, o))), e;
}
function Ate(n, e) {
  if (n.length == 0)
    return null;
  let t = n[0].pos, i = n.length == 2 ? n[1].pos : t;
  return t > -1 && i > -1 ? A.single(t + e, i + e) : null;
}
const Cte = {
  childList: !0,
  characterData: !0,
  subtree: !0,
  attributes: !0,
  characterDataOldValue: !0
}, dl = R.ie && R.ie_version <= 11;
class Ste {
  constructor(e) {
    this.view = e, this.active = !1, this.selectionRange = new yee(), this.selectionChanged = !1, this.delayedFlush = -1, this.resizeTimeout = -1, this.queue = [], this.delayedAndroidKey = null, this.flushingAndroidKey = -1, this.lastChange = 0, this.scrollTargets = [], this.intersection = null, this.resizeScroll = null, this.resizeContent = null, this.intersecting = !1, this.gapIntersection = null, this.gaps = [], this.parentCheck = -1, this.dom = e.contentDOM, this.observer = new MutationObserver((t) => {
      for (let i of t)
        this.queue.push(i);
      (R.ie && R.ie_version <= 11 || R.ios && e.composing) && t.some((i) => i.type == "childList" && i.removedNodes.length || i.type == "characterData" && i.oldValue.length > i.target.nodeValue.length) ? this.flushSoon() : this.flush();
    }), dl && (this.onCharData = (t) => {
      this.queue.push({
        target: t.target,
        type: "characterData",
        oldValue: t.prevValue
      }), this.flushSoon();
    }), this.onSelectionChange = this.onSelectionChange.bind(this), this.onResize = this.onResize.bind(this), this.onPrint = this.onPrint.bind(this), this.onScroll = this.onScroll.bind(this), typeof ResizeObserver == "function" && (this.resizeScroll = new ResizeObserver(() => {
      var t;
      ((t = this.view.docView) === null || t === void 0 ? void 0 : t.lastUpdate) < Date.now() - 75 && this.onResize();
    }), this.resizeScroll.observe(e.scrollDOM), this.resizeContent = new ResizeObserver(() => this.view.requestMeasure()), this.resizeContent.observe(e.contentDOM)), this.addWindowListeners(this.win = e.win), this.start(), typeof IntersectionObserver == "function" && (this.intersection = new IntersectionObserver((t) => {
      this.parentCheck < 0 && (this.parentCheck = setTimeout(this.listenForScroll.bind(this), 1e3)), t.length > 0 && t[t.length - 1].intersectionRatio > 0 != this.intersecting && (this.intersecting = !this.intersecting, this.intersecting != this.view.inView && this.onScrollChanged(document.createEvent("Event")));
    }, { threshold: [0, 1e-3] }), this.intersection.observe(this.dom), this.gapIntersection = new IntersectionObserver((t) => {
      t.length > 0 && t[t.length - 1].intersectionRatio > 0 && this.onScrollChanged(document.createEvent("Event"));
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
    if (this.gapIntersection && (e.length != this.gaps.length || this.gaps.some((t, i) => t != e[i]))) {
      this.gapIntersection.disconnect();
      for (let t of e)
        this.gapIntersection.observe(t);
      this.gaps = e;
    }
  }
  onSelectionChange(e) {
    let t = this.selectionChanged;
    if (!this.readSelectionRange() || this.delayedAndroidKey)
      return;
    let { view: i } = this, r = this.selectionRange;
    if (i.state.facet(fs) ? i.root.activeElement != this.dom : !io(i.dom, r))
      return;
    let o = r.anchorNode && i.docView.nearest(r.anchorNode);
    if (o && o.ignoreEvent(e)) {
      t || (this.selectionChanged = !1);
      return;
    }
    (R.ie && R.ie_version <= 11 || R.android && R.chrome) && !i.state.selection.main.empty && r.focusNode && Eo(r.focusNode, r.focusOffset, r.anchorNode, r.anchorOffset) ? this.flushSoon() : this.flush(!1);
  }
  readSelectionRange() {
    let { view: e } = this, t = R.safari && e.root.nodeType == 11 && pee(this.dom.ownerDocument) == this.dom && Tte(this.view) || To(e.root);
    if (!t || this.selectionRange.eq(t))
      return !1;
    let i = io(this.dom, t);
    return i && !this.selectionChanged && e.inputState.lastFocusTime > Date.now() - 200 && e.inputState.lastTouchTime < Date.now() - 300 && xee(this.dom, t) ? (this.view.inputState.lastFocusTime = 0, e.docView.updateSelection(), !1) : (this.selectionRange.setRange(t), i && (this.selectionChanged = !0), !0);
  }
  setSelectionRange(e, t) {
    this.selectionRange.set(e.node, e.offset, t.node, t.offset), this.selectionChanged = !1;
  }
  clearSelectionRange() {
    this.selectionRange.set(null, 0, null, 0);
  }
  listenForScroll() {
    this.parentCheck = -1;
    let e = 0, t = null;
    for (let i = this.dom; i; )
      if (i.nodeType == 1)
        !t && e < this.scrollTargets.length && this.scrollTargets[e] == i ? e++ : t || (t = this.scrollTargets.slice(0, e)), t && t.push(i), i = i.assignedSlot || i.parentNode;
      else if (i.nodeType == 11)
        i = i.host;
      else
        break;
    if (e < this.scrollTargets.length && !t && (t = this.scrollTargets.slice(0, e)), t) {
      for (let i of this.scrollTargets)
        i.removeEventListener("scroll", this.onScroll);
      for (let i of this.scrollTargets = t)
        i.addEventListener("scroll", this.onScroll);
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
    this.active || (this.observer.observe(this.dom, Cte), dl && this.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.active = !0);
  }
  stop() {
    !this.active || (this.active = !1, this.observer.disconnect(), dl && this.dom.removeEventListener("DOMCharacterDataModified", this.onCharData));
  }
  clear() {
    this.processRecords(), this.queue.length = 0, this.selectionChanged = !1;
  }
  delayAndroidKey(e, t) {
    var i;
    if (!this.delayedAndroidKey) {
      let r = () => {
        let o = this.delayedAndroidKey;
        o && (this.clearDelayedAndroidKey(), this.view.inputState.lastKeyCode = o.keyCode, this.view.inputState.lastKeyTime = Date.now(), !this.flush() && o.force && si(this.dom, o.key, o.keyCode));
      };
      this.flushingAndroidKey = this.view.win.requestAnimationFrame(r);
    }
    (!this.delayedAndroidKey || e == "Enter") && (this.delayedAndroidKey = {
      key: e,
      keyCode: t,
      force: this.lastChange < Date.now() - 50 || !!(!((i = this.delayedAndroidKey) === null || i === void 0) && i.force)
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
    let t = -1, i = -1, r = !1;
    for (let o of e) {
      let s = this.readMutation(o);
      !s || (s.typeOver && (r = !0), t == -1 ? { from: t, to: i } = s : (t = Math.min(s.from, t), i = Math.max(s.to, i)));
    }
    return { from: t, to: i, typeOver: r };
  }
  readChange() {
    let { from: e, to: t, typeOver: i } = this.processRecords(), r = this.selectionChanged && io(this.dom, this.selectionRange);
    return e < 0 && !r ? null : (e > -1 && (this.lastChange = Date.now()), this.view.inputState.lastFocusTime = 0, this.selectionChanged = !1, new kte(this.view, e, t, i));
  }
  flush(e = !0) {
    if (this.delayedFlush >= 0 || this.delayedAndroidKey)
      return !1;
    e && this.readSelectionRange();
    let t = this.readChange();
    if (!t)
      return !1;
    let i = this.view.state, r = jm(this.view, t);
    return this.view.state == i && this.view.update([]), r;
  }
  readMutation(e) {
    let t = this.view.docView.nearest(e.target);
    if (!t || t.ignoreMutation(e))
      return null;
    if (t.markDirty(e.type == "attributes"), e.type == "attributes" && (t.flags |= 4), e.type == "childList") {
      let i = af(t, e.previousSibling || e.target.previousSibling, -1), r = af(t, e.nextSibling || e.target.nextSibling, 1);
      return {
        from: i ? t.posAfter(i) : t.posAtStart,
        to: r ? t.posBefore(r) : t.posAtEnd,
        typeOver: !1
      };
    } else
      return e.type == "characterData" ? { from: t.posAtStart, to: t.posAtEnd, typeOver: e.target.nodeValue == e.oldValue } : null;
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
    var e, t, i, r;
    this.stop(), (e = this.intersection) === null || e === void 0 || e.disconnect(), (t = this.gapIntersection) === null || t === void 0 || t.disconnect(), (i = this.resizeScroll) === null || i === void 0 || i.disconnect(), (r = this.resizeContent) === null || r === void 0 || r.disconnect();
    for (let o of this.scrollTargets)
      o.removeEventListener("scroll", this.onScroll);
    this.removeWindowListeners(this.win), clearTimeout(this.parentCheck), clearTimeout(this.resizeTimeout), this.win.cancelAnimationFrame(this.delayedFlush), this.win.cancelAnimationFrame(this.flushingAndroidKey);
  }
}
function af(n, e, t) {
  for (; e; ) {
    let i = te.get(e);
    if (i && i.parent == n)
      return i;
    let r = e.parentNode;
    e = r != n.dom ? r : t > 0 ? e.nextSibling : e.previousSibling;
  }
  return null;
}
function Tte(n) {
  let e = null;
  function t(a) {
    a.preventDefault(), a.stopImmediatePropagation(), e = a.getTargetRanges()[0];
  }
  if (n.contentDOM.addEventListener("beforeinput", t, !0), n.dom.ownerDocument.execCommand("indent"), n.contentDOM.removeEventListener("beforeinput", t, !0), !e)
    return null;
  let i = e.startContainer, r = e.startOffset, o = e.endContainer, s = e.endOffset, l = n.docView.domAtPos(n.state.selection.main.anchor);
  return Eo(l.node, l.offset, o, s) && ([i, r, o, s] = [o, s, i, r]), { anchorNode: i, anchorOffset: r, focusNode: o, focusOffset: s };
}
class I {
  constructor(e = {}) {
    this.plugins = [], this.pluginMap = /* @__PURE__ */ new Map(), this.editorAttrs = {}, this.contentAttrs = {}, this.bidiCache = [], this.destroyed = !1, this.updateState = 2, this.measureScheduled = -1, this.measureRequests = [], this.contentDOM = document.createElement("div"), this.scrollDOM = document.createElement("div"), this.scrollDOM.tabIndex = -1, this.scrollDOM.className = "cm-scroller", this.scrollDOM.appendChild(this.contentDOM), this.announceDOM = document.createElement("div"), this.announceDOM.style.cssText = "position: fixed; top: -10000px", this.announceDOM.setAttribute("aria-live", "polite"), this.dom = document.createElement("div"), this.dom.appendChild(this.announceDOM), this.dom.appendChild(this.scrollDOM), this._dispatch = e.dispatch || ((t) => this.update([t])), this.dispatch = this.dispatch.bind(this), this._root = e.root || vee(e.parent) || document, this.viewState = new sf(e.state || K.create(e)), this.plugins = this.state.facet(Ri).map((t) => new cl(t));
    for (let t of this.plugins)
      t.update(this);
    this.observer = new Ste(this), this.inputState = new Kee(this), this.inputState.ensureHandlers(this, this.plugins), this.docView = new $u(this), this.mountStyles(), this.updateAttrs(), this.updateState = 0, this.requestMeasure(), e.parent && e.parent.appendChild(this.dom);
  }
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
  dispatch(...e) {
    let t = e.length == 1 && e[0] instanceof xe ? e[0] : this.state.update(...e);
    this._dispatch(t, this);
  }
  update(e) {
    if (this.updateState != 0)
      throw new Error("Calls to EditorView.update are not allowed while an update is in progress");
    let t = !1, i = !1, r, o = this.state;
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
    e.some((f) => f.annotation(qm)) ? (this.inputState.notifiedFocused = s, l = 1) : s != this.inputState.notifiedFocused && (this.inputState.notifiedFocused = s, a = Hm(o, s), a || (l = 1));
    let c = this.observer.delayedAndroidKey, h = null;
    if (c ? (this.observer.clearDelayedAndroidKey(), h = this.observer.readChange(), (h && !this.state.doc.eq(o.doc) || !this.state.selection.eq(o.selection)) && (h = null)) : this.observer.clear(), o.facet(K.phrases) != this.state.facet(K.phrases))
      return this.setState(o);
    r = Oo.create(this, o, e), r.flags |= l;
    let u = this.viewState.scrollTarget;
    try {
      this.updateState = 2;
      for (let f of e) {
        if (u && (u = u.map(f.changes)), f.scrollIntoView) {
          let { main: d } = f.state.selection;
          u = new Mo(d.empty ? d : A.cursor(d.head, d.head > d.anchor ? -1 : 1));
        }
        for (let d of f.effects)
          d.is(zu) && (u = d.value);
      }
      this.viewState.update(r, u), this.bidiCache = Lo.update(this.bidiCache, r.changes), r.empty || (this.updatePlugins(r), this.inputState.update(r)), t = this.docView.update(r), this.state.facet(Ii) != this.styleModules && this.mountStyles(), i = this.updateAttrs(), this.showAnnouncements(e), this.docView.updateSelection(t, e.some((f) => f.isUserEvent("select.pointer")));
    } finally {
      this.updateState = 0;
    }
    if (r.startState.facet(Nr) != r.state.facet(Nr) && (this.viewState.mustMeasureContent = !0), (t || i || u || this.viewState.mustEnforceCursorAssoc || this.viewState.mustMeasureContent) && this.requestMeasure(), !r.empty)
      for (let f of this.state.facet(ca))
        f(r);
    (a || h) && Promise.resolve().then(() => {
      a && this.state == a.startState && this.dispatch(a), h && !jm(this, h) && c.force && si(this.contentDOM, c.key, c.keyCode);
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
    let t = this.hasFocus;
    try {
      for (let i of this.plugins)
        i.destroy(this);
      this.viewState = new sf(e), this.plugins = e.facet(Ri).map((i) => new cl(i)), this.pluginMap.clear();
      for (let i of this.plugins)
        i.update(this);
      this.docView = new $u(this), this.inputState.ensureHandlers(this, this.plugins), this.mountStyles(), this.updateAttrs(), this.bidiCache = [];
    } finally {
      this.updateState = 0;
    }
    t && this.focus(), this.requestMeasure();
  }
  updatePlugins(e) {
    let t = e.startState.facet(Ri), i = e.state.facet(Ri);
    if (t != i) {
      let r = [];
      for (let o of i) {
        let s = t.indexOf(o);
        if (s < 0)
          r.push(new cl(o));
        else {
          let l = this.plugins[s];
          l.mustUpdate = e, r.push(l);
        }
      }
      for (let o of this.plugins)
        o.mustUpdate != e && o.destroy(this);
      this.plugins = r, this.pluginMap.clear(), this.inputState.ensureHandlers(this, this.plugins);
    } else
      for (let r of this.plugins)
        r.mustUpdate = e;
    for (let r = 0; r < this.plugins.length; r++)
      this.plugins[r].update(this);
  }
  measure(e = !0) {
    if (this.destroyed)
      return;
    this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.measureScheduled = 0, e && this.observer.forceFlush();
    let t = null, i = this.scrollDOM, { scrollTop: r } = i, { scrollAnchorPos: o, scrollAnchorHeight: s } = this.viewState;
    r != this.viewState.scrollTop && (s = -1), this.viewState.scrollAnchorHeight = -1;
    try {
      for (let l = 0; ; l++) {
        if (s < 0)
          if (om(i))
            o = -1, s = this.viewState.heightMap.height;
          else {
            let d = this.viewState.scrollAnchorAt(r);
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
        let h = c.map((d) => {
          try {
            return d.read(this);
          } catch (p) {
            return rt(this.state, p), cf;
          }
        }), u = Oo.create(this, this.state, []), f = !1;
        u.flags |= a, t ? t.flags |= a : t = u, this.updateState = 2, u.empty || (this.updatePlugins(u), this.inputState.update(u), this.updateAttrs(), f = this.docView.update(u));
        for (let d = 0; d < c.length; d++)
          if (h[d] != cf)
            try {
              let p = c[d];
              p.write && p.write(h[d], this);
            } catch (p) {
              rt(this.state, p);
            }
        if (f && this.docView.updateSelection(!0), !u.viewportChanged && this.measureRequests.length == 0) {
          if (this.viewState.editorHeight)
            if (this.viewState.scrollTarget) {
              this.docView.scrollIntoView(this.viewState.scrollTarget), this.viewState.scrollTarget = null;
              continue;
            } else {
              let p = (o < 0 ? this.viewState.heightMap.height : this.viewState.lineBlockAt(o).top) - s;
              if (p > 1 || p < -1) {
                r = i.scrollTop = r + p, s = -1;
                continue;
              }
            }
          break;
        }
      }
    } finally {
      this.updateState = 0, this.measureScheduled = -1;
    }
    if (t && !t.empty)
      for (let l of this.state.facet(ca))
        l(t);
  }
  get themeClasses() {
    return ba + " " + (this.state.facet(ga) ? Um : Vm) + " " + this.state.facet(Nr);
  }
  updateAttrs() {
    let e = hf(this, Am, {
      class: "cm-editor" + (this.hasFocus ? " cm-focused " : " ") + this.themeClasses
    }), t = {
      spellcheck: "false",
      autocorrect: "off",
      autocapitalize: "off",
      translate: "no",
      contenteditable: this.state.facet(fs) ? "true" : "false",
      class: "cm-content",
      style: `${R.tabSize}: ${this.state.tabSize}`,
      role: "textbox",
      "aria-multiline": "true"
    };
    this.state.readOnly && (t["aria-readonly"] = "true"), hf(this, fc, t);
    let i = this.observer.ignore(() => {
      let r = la(this.contentDOM, this.contentAttrs, t), o = la(this.dom, this.editorAttrs, e);
      return r || o;
    });
    return this.editorAttrs = e, this.contentAttrs = t, i;
  }
  showAnnouncements(e) {
    let t = !0;
    for (let i of e)
      for (let r of i.effects)
        if (r.is(I.announce)) {
          t && (this.announceDOM.textContent = ""), t = !1;
          let o = this.announceDOM.appendChild(document.createElement("div"));
          o.textContent = r.value;
        }
  }
  mountStyles() {
    this.styleModules = this.state.facet(Ii), an.mount(this.root, this.styleModules.concat(xte).reverse());
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
        for (let t = 0; t < this.measureRequests.length; t++)
          if (this.measureRequests[t].key === e.key) {
            this.measureRequests[t] = e;
            return;
          }
      }
      this.measureRequests.push(e);
    }
  }
  plugin(e) {
    let t = this.pluginMap.get(e);
    return (t === void 0 || t && t.spec != e) && this.pluginMap.set(e, t = this.plugins.find((i) => i.spec == e) || null), t && t.update(this).value;
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
  moveByChar(e, t, i) {
    return ul(this, e, Ku(this, e, t, i));
  }
  moveByGroup(e, t) {
    return ul(this, e, Ku(this, e, t, (i) => jee(this, e.head, i)));
  }
  moveToLineBoundary(e, t, i = !0) {
    return Wee(this, e, t, i);
  }
  moveVertically(e, t, i) {
    return ul(this, e, Gee(this, e, t, i));
  }
  domAtPos(e) {
    return this.docView.domAtPos(e);
  }
  posAtDOM(e, t = 0) {
    return this.docView.posFromDOM(e, t);
  }
  posAtCoords(e, t = !0) {
    return this.readMeasured(), Lm(this, e, t);
  }
  coordsAtPos(e, t = 1) {
    this.readMeasured();
    let i = this.docView.coordsAt(e, t);
    if (!i || i.left == i.right)
      return i;
    let r = this.state.doc.lineAt(e), o = this.bidiSpans(r), s = o[li.find(o, e - r.from, -1, t)];
    return cc(i, s.dir == le.LTR == t > 0);
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
    return !this.state.facet(wm) || e < this.viewport.from || e > this.viewport.to ? this.textDirection : (this.readMeasured(), this.docView.textDirectionAt(e));
  }
  get lineWrapping() {
    return this.viewState.heightOracle.lineWrapping;
  }
  bidiSpans(e) {
    if (e.length > Ete)
      return Em(e.length);
    let t = this.textDirectionAt(e.from);
    for (let r of this.bidiCache)
      if (r.from == e.from && r.dir == t)
        return r.order;
    let i = Lee(e.text, t);
    return this.bidiCache.push(new Lo(e.from, e.to, t, i)), i;
  }
  get hasFocus() {
    var e;
    return (this.dom.ownerDocument.hasFocus() || R.safari && ((e = this.inputState) === null || e === void 0 ? void 0 : e.lastContextMenu) > Date.now() - 3e4) && this.root.activeElement == this.contentDOM;
  }
  focus() {
    this.observer.ignore(() => {
      im(this.contentDOM), this.docView.updateSelection();
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
  static scrollIntoView(e, t = {}) {
    return zu.of(new Mo(typeof e == "number" ? A.cursor(e) : e, t.y, t.x, t.yMargin, t.xMargin));
  }
  static domEventHandlers(e) {
    return ke.define(() => ({}), { eventHandlers: e });
  }
  static theme(e, t) {
    let i = an.newName(), r = [Nr.of(i), Ii.of(ya(`.${i}`, e))];
    return t && t.dark && r.push(ga.of(!0)), r;
  }
  static baseTheme(e) {
    return xi.lowest(Ii.of(ya("." + ba, e, Wm)));
  }
  static findFromDOM(e) {
    var t;
    let i = e.querySelector(".cm-content"), r = i && te.get(i) || te.get(e);
    return ((t = r == null ? void 0 : r.rootView) === null || t === void 0 ? void 0 : t.view) || null;
  }
}
I.styleModule = Ii;
I.inputHandler = xm;
I.focusChangeEffect = km;
I.perLineTextDirection = wm;
I.exceptionSink = vm;
I.updateListener = ca;
I.editable = fs;
I.mouseSelectionStyle = ym;
I.dragMovesSelection = bm;
I.clickAddsSelectionRange = gm;
I.decorations = tr;
I.atomicRanges = dc;
I.scrollMargins = Cm;
I.darkTheme = ga;
I.contentAttributes = fc;
I.editorAttributes = Am;
I.lineWrapping = /* @__PURE__ */ I.contentAttributes.of({ class: "cm-lineWrapping" });
I.announce = /* @__PURE__ */ W.define();
const Ete = 4096, cf = {};
class Lo {
  constructor(e, t, i, r) {
    this.from = e, this.to = t, this.dir = i, this.order = r;
  }
  static update(e, t) {
    if (t.empty)
      return e;
    let i = [], r = e.length ? e[e.length - 1].dir : le.LTR;
    for (let o = Math.max(0, e.length - 10); o < e.length; o++) {
      let s = e[o];
      s.dir == r && !t.touchesRange(s.from, s.to) && i.push(new Lo(t.mapPos(s.from, 1), t.mapPos(s.to, -1), s.dir, s.order));
    }
    return i;
  }
}
function hf(n, e, t) {
  for (let i = n.state.facet(e), r = i.length - 1; r >= 0; r--) {
    let o = i[r], s = typeof o == "function" ? o(n) : o;
    s && sa(s, t);
  }
  return t;
}
const Dte = R.mac ? "mac" : R.windows ? "win" : R.linux ? "linux" : "key";
function Mte(n, e) {
  const t = n.split(/-(?!$)/);
  let i = t[t.length - 1];
  i == "Space" && (i = " ");
  let r, o, s, l;
  for (let a = 0; a < t.length - 1; ++a) {
    const c = t[a];
    if (/^(cmd|meta|m)$/i.test(c))
      l = !0;
    else if (/^a(lt)?$/i.test(c))
      r = !0;
    else if (/^(c|ctrl|control)$/i.test(c))
      o = !0;
    else if (/^s(hift)?$/i.test(c))
      s = !0;
    else if (/^mod$/i.test(c))
      e == "mac" ? l = !0 : o = !0;
    else
      throw new Error("Unrecognized modifier name: " + c);
  }
  return r && (i = "Alt-" + i), o && (i = "Ctrl-" + i), l && (i = "Meta-" + i), s && (i = "Shift-" + i), i;
}
function Pr(n, e, t) {
  return e.altKey && (n = "Alt-" + n), e.ctrlKey && (n = "Ctrl-" + n), e.metaKey && (n = "Meta-" + n), t !== !1 && e.shiftKey && (n = "Shift-" + n), n;
}
const Ote = /* @__PURE__ */ xi.default(/* @__PURE__ */ I.domEventHandlers({
  keydown(n, e) {
    return Km(Gm(e.state), n, e, "editor");
  }
})), ds = /* @__PURE__ */ B.define({ enables: Ote }), uf = /* @__PURE__ */ new WeakMap();
function Gm(n) {
  let e = n.facet(ds), t = uf.get(e);
  return t || uf.set(e, t = Ite(e.reduce((i, r) => i.concat(r), []))), t;
}
function Lte(n, e, t) {
  return Km(Gm(n.state), e, n, t);
}
let Jt = null;
const Rte = 4e3;
function Ite(n, e = Dte) {
  let t = /* @__PURE__ */ Object.create(null), i = /* @__PURE__ */ Object.create(null), r = (s, l) => {
    let a = i[s];
    if (a == null)
      i[s] = l;
    else if (a != l)
      throw new Error("Key binding " + s + " is used both as a regular binding and as a multi-stroke prefix");
  }, o = (s, l, a, c, h) => {
    var u, f;
    let d = t[s] || (t[s] = /* @__PURE__ */ Object.create(null)), p = l.split(/ (?!$)/).map((b) => Mte(b, e));
    for (let b = 1; b < p.length; b++) {
      let y = p.slice(0, b).join(" ");
      r(y, !0), d[y] || (d[y] = {
        preventDefault: !0,
        stopPropagation: !1,
        run: [(w) => {
          let x = Jt = { view: w, prefix: y, scope: s };
          return setTimeout(() => {
            Jt == x && (Jt = null);
          }, Rte), !0;
        }]
      });
    }
    let m = p.join(" ");
    r(m, !1);
    let g = d[m] || (d[m] = {
      preventDefault: !1,
      stopPropagation: !1,
      run: ((f = (u = d._any) === null || u === void 0 ? void 0 : u.run) === null || f === void 0 ? void 0 : f.slice()) || []
    });
    a && g.run.push(a), c && (g.preventDefault = !0), h && (g.stopPropagation = !0);
  };
  for (let s of n) {
    let l = s.scope ? s.scope.split(" ") : ["editor"];
    if (s.any)
      for (let c of l) {
        let h = t[c] || (t[c] = /* @__PURE__ */ Object.create(null));
        h._any || (h._any = { preventDefault: !1, stopPropagation: !1, run: [] });
        for (let u in h)
          h[u].run.push(s.any);
      }
    let a = s[e] || s.key;
    if (!!a)
      for (let c of l)
        o(c, a, s.run, s.preventDefault, s.stopPropagation), s.shift && o(c, "Shift-" + a, s.shift, s.preventDefault, s.stopPropagation);
  }
  return t;
}
function Km(n, e, t, i) {
  let r = dee(e), o = Se(r, 0), s = nt(o) == r.length && r != " ", l = "", a = !1, c = !1, h = !1;
  Jt && Jt.view == t && Jt.scope == i && (l = Jt.prefix + " ", Im.indexOf(e.keyCode) < 0 && (c = !0, Jt = null));
  let u = /* @__PURE__ */ new Set(), f = (g) => {
    if (g) {
      for (let b of g.run)
        if (!u.has(b) && (u.add(b), b(t, e)))
          return g.stopPropagation && (h = !0), !0;
      g.preventDefault && (g.stopPropagation && (h = !0), c = !0);
    }
    return !1;
  }, d = n[i], p, m;
  return d && (f(d[l + Pr(r, e, !s)]) ? a = !0 : s && (e.altKey || e.metaKey || e.ctrlKey) && !(R.windows && e.ctrlKey && e.altKey) && (p = cn[e.keyCode]) && p != r ? (f(d[l + Pr(p, e, !0)]) || e.shiftKey && (m = Qi[e.keyCode]) != r && m != p && f(d[l + Pr(m, e, !1)])) && (a = !0) : s && e.shiftKey && f(d[l + Pr(r, e, !0)]) && (a = !0), !a && f(d._any) && (a = !0)), c && (a = !0), a && h && e.stopPropagation(), a;
}
class pr {
  constructor(e, t, i, r, o) {
    this.className = e, this.left = t, this.top = i, this.width = r, this.height = o;
  }
  draw() {
    let e = document.createElement("div");
    return e.className = this.className, this.adjust(e), e;
  }
  update(e, t) {
    return t.className != this.className ? !1 : (this.adjust(e), !0);
  }
  adjust(e) {
    e.style.left = this.left + "px", e.style.top = this.top + "px", this.width != null && (e.style.width = this.width + "px"), e.style.height = this.height + "px";
  }
  eq(e) {
    return this.left == e.left && this.top == e.top && this.width == e.width && this.height == e.height && this.className == e.className;
  }
  static forRange(e, t, i) {
    if (i.empty) {
      let r = e.coordsAtPos(i.head, i.assoc || 1);
      if (!r)
        return [];
      let o = Ym(e);
      return [new pr(t, r.left - o.left, r.top - o.top, null, r.bottom - r.top)];
    } else
      return Bte(e, t, i);
  }
}
function Ym(n) {
  let e = n.scrollDOM.getBoundingClientRect();
  return { left: (n.textDirection == le.LTR ? e.left : e.right - n.scrollDOM.clientWidth) - n.scrollDOM.scrollLeft, top: e.top - n.scrollDOM.scrollTop };
}
function ff(n, e, t) {
  let i = A.cursor(e);
  return {
    from: Math.max(t.from, n.moveToLineBoundary(i, !1, !0).from),
    to: Math.min(t.to, n.moveToLineBoundary(i, !0, !0).from),
    type: ae.Text
  };
}
function Bte(n, e, t) {
  if (t.to <= n.viewport.from || t.from >= n.viewport.to)
    return [];
  let i = Math.max(t.from, n.viewport.from), r = Math.min(t.to, n.viewport.to), o = n.textDirection == le.LTR, s = n.contentDOM, l = s.getBoundingClientRect(), a = Ym(n), c = s.querySelector(".cm-line"), h = c && window.getComputedStyle(c), u = l.left + (h ? parseInt(h.paddingLeft) + Math.min(0, parseInt(h.textIndent)) : 0), f = l.right - (h ? parseInt(h.paddingRight) : 0), d = da(n, i), p = da(n, r), m = d.type == ae.Text ? d : null, g = p.type == ae.Text ? p : null;
  if (m && (n.lineWrapping || d.widgetLineBreaks) && (m = ff(n, i, m)), g && (n.lineWrapping || p.widgetLineBreaks) && (g = ff(n, r, g)), m && g && m.from == g.from)
    return y(w(t.from, t.to, m));
  {
    let _ = m ? w(t.from, null, m) : x(d, !1), k = g ? w(null, t.to, g) : x(p, !0), C = [];
    return (m || d).to < (g || p).from - (m && g ? 1 : 0) || d.widgetLineBreaks > 1 && _.bottom + n.defaultLineHeight / 2 < k.top ? C.push(b(u, _.bottom, f, k.top)) : _.bottom < k.top && n.elementAtHeight((_.bottom + k.top) / 2).type == ae.Text && (_.bottom = k.top = (_.bottom + k.top) / 2), y(_).concat(C).concat(y(k));
  }
  function b(_, k, C, N) {
    return new pr(e, _ - a.left, k - a.top - 0.01, C - _, N - k + 0.01);
  }
  function y({ top: _, bottom: k, horizontal: C }) {
    let N = [];
    for (let L = 0; L < C.length; L += 2)
      N.push(b(C[L], _, C[L + 1], k));
    return N;
  }
  function w(_, k, C) {
    let N = 1e9, L = -1e9, D = [];
    function H(T, z, q, he, be) {
      let oe = n.coordsAtPos(T, T == C.to ? -2 : 2), ce = n.coordsAtPos(q, q == C.from ? 2 : -2);
      !oe || !ce || (N = Math.min(oe.top, ce.top, N), L = Math.max(oe.bottom, ce.bottom, L), be == le.LTR ? D.push(o && z ? u : oe.left, o && he ? f : ce.right) : D.push(!o && he ? u : ce.left, !o && z ? f : oe.right));
    }
    let Q = _ != null ? _ : C.from, G = k != null ? k : C.to;
    for (let T of n.visibleRanges)
      if (T.to > Q && T.from < G)
        for (let z = Math.max(T.from, Q), q = Math.min(T.to, G); ; ) {
          let he = n.state.doc.lineAt(z);
          for (let be of n.bidiSpans(he)) {
            let oe = be.from + he.from, ce = be.to + he.from;
            if (oe >= q)
              break;
            ce > z && H(Math.max(oe, z), _ == null && oe <= Q, Math.min(ce, q), k == null && ce >= G, be.dir);
          }
          if (z = he.to + 1, z >= q)
            break;
        }
    return D.length == 0 && H(Q, _ == null, G, k == null, n.textDirection), { top: N, bottom: L, horizontal: D };
  }
  function x(_, k) {
    let C = l.top + (k ? _.top : _.bottom);
    return { top: C, bottom: C, horizontal: [] };
  }
}
function Nte(n, e) {
  return n.constructor == e.constructor && n.eq(e);
}
class Pte {
  constructor(e, t) {
    this.view = e, this.layer = t, this.drawn = [], this.measureReq = { read: this.measure.bind(this), write: this.draw.bind(this) }, this.dom = e.scrollDOM.appendChild(document.createElement("div")), this.dom.classList.add("cm-layer"), t.above && this.dom.classList.add("cm-layer-above"), t.class && this.dom.classList.add(t.class), this.dom.setAttribute("aria-hidden", "true"), this.setOrder(e.state), e.requestMeasure(this.measureReq), t.mount && t.mount(this.dom, e);
  }
  update(e) {
    e.startState.facet(so) != e.state.facet(so) && this.setOrder(e.state), (this.layer.update(e, this.dom) || e.geometryChanged) && e.view.requestMeasure(this.measureReq);
  }
  setOrder(e) {
    let t = 0, i = e.facet(so);
    for (; t < i.length && i[t] != this.layer; )
      t++;
    this.dom.style.zIndex = String((this.layer.above ? 150 : -1) - t);
  }
  measure() {
    return this.layer.markers(this.view);
  }
  draw(e) {
    if (e.length != this.drawn.length || e.some((t, i) => !Nte(t, this.drawn[i]))) {
      let t = this.dom.firstChild, i = 0;
      for (let r of e)
        r.update && t && r.constructor && this.drawn[i].constructor && r.update(t, this.drawn[i]) ? (t = t.nextSibling, i++) : this.dom.insertBefore(r.draw(), t);
      for (; t; ) {
        let r = t.nextSibling;
        t.remove(), t = r;
      }
      this.drawn = e;
    }
  }
  destroy() {
    this.layer.destroy && this.layer.destroy(this.dom, this.view), this.dom.remove();
  }
}
const so = /* @__PURE__ */ B.define();
function Jm(n) {
  return [
    ke.define((e) => new Pte(e, n)),
    so.of(n)
  ];
}
const Zm = !R.ios, nr = /* @__PURE__ */ B.define({
  combine(n) {
    return Nt(n, {
      cursorBlinkRate: 1200,
      drawRangeCursor: !0
    }, {
      cursorBlinkRate: (e, t) => Math.min(e, t),
      drawRangeCursor: (e, t) => e || t
    });
  }
});
function Fte(n = {}) {
  return [
    nr.of(n),
    qte,
    Hte,
    zte,
    _m.of(!0)
  ];
}
function Xm(n) {
  return n.startState.facet(nr) != n.state.facet(nr);
}
const qte = /* @__PURE__ */ Jm({
  above: !0,
  markers(n) {
    let { state: e } = n, t = e.facet(nr), i = [];
    for (let r of e.selection.ranges) {
      let o = r == e.selection.main;
      if (r.empty ? !o || Zm : t.drawRangeCursor) {
        let s = o ? "cm-cursor cm-cursor-primary" : "cm-cursor cm-cursor-secondary", l = r.empty ? r : A.cursor(r.head, r.head > r.anchor ? -1 : 1);
        for (let a of pr.forRange(n, s, l))
          i.push(a);
      }
    }
    return i;
  },
  update(n, e) {
    n.transactions.some((i) => i.selection) && (e.style.animationName = e.style.animationName == "cm-blink" ? "cm-blink2" : "cm-blink");
    let t = Xm(n);
    return t && df(n.state, e), n.docChanged || n.selectionSet || t;
  },
  mount(n, e) {
    df(e.state, n);
  },
  class: "cm-cursorLayer"
});
function df(n, e) {
  e.style.animationDuration = n.facet(nr).cursorBlinkRate + "ms";
}
const Hte = /* @__PURE__ */ Jm({
  above: !1,
  markers(n) {
    return n.state.selection.ranges.map((e) => e.empty ? [] : pr.forRange(n, "cm-selectionBackground", e)).reduce((e, t) => e.concat(t));
  },
  update(n, e) {
    return n.docChanged || n.selectionSet || n.viewportChanged || Xm(n);
  },
  class: "cm-selectionLayer"
}), Qm = {
  ".cm-line": {
    "& ::selection": { backgroundColor: "transparent !important" },
    "&::selection": { backgroundColor: "transparent !important" }
  }
};
Zm && (Qm[".cm-line"].caretColor = "transparent !important");
const zte = /* @__PURE__ */ xi.highest(/* @__PURE__ */ I.theme(Qm)), eg = /* @__PURE__ */ W.define({
  map(n, e) {
    return n == null ? null : e.mapPos(n);
  }
}), Ni = /* @__PURE__ */ Me.define({
  create() {
    return null;
  },
  update(n, e) {
    return n != null && (n = e.changes.mapPos(n)), e.effects.reduce((t, i) => i.is(eg) ? i.value : t, n);
  }
}), $te = /* @__PURE__ */ ke.fromClass(class {
  constructor(n) {
    this.view = n, this.cursor = null, this.measureReq = { read: this.readPos.bind(this), write: this.drawCursor.bind(this) };
  }
  update(n) {
    var e;
    let t = n.state.field(Ni);
    t == null ? this.cursor != null && ((e = this.cursor) === null || e === void 0 || e.remove(), this.cursor = null) : (this.cursor || (this.cursor = this.view.scrollDOM.appendChild(document.createElement("div")), this.cursor.className = "cm-dropCursor"), (n.startState.field(Ni) != t || n.docChanged || n.geometryChanged) && this.view.requestMeasure(this.measureReq));
  }
  readPos() {
    let n = this.view.state.field(Ni), e = n != null && this.view.coordsAtPos(n);
    if (!e)
      return null;
    let t = this.view.scrollDOM.getBoundingClientRect();
    return {
      left: e.left - t.left + this.view.scrollDOM.scrollLeft,
      top: e.top - t.top + this.view.scrollDOM.scrollTop,
      height: e.bottom - e.top
    };
  }
  drawCursor(n) {
    this.cursor && (n ? (this.cursor.style.left = n.left + "px", this.cursor.style.top = n.top + "px", this.cursor.style.height = n.height + "px") : this.cursor.style.left = "-100000px");
  }
  destroy() {
    this.cursor && this.cursor.remove();
  }
  setDropPos(n) {
    this.view.state.field(Ni) != n && this.view.dispatch({ effects: eg.of(n) });
  }
}, {
  eventHandlers: {
    dragover(n) {
      this.setDropPos(this.view.posAtCoords({ x: n.clientX, y: n.clientY }));
    },
    dragleave(n) {
      (n.target == this.view.contentDOM || !this.view.contentDOM.contains(n.relatedTarget)) && this.setDropPos(null);
    },
    dragend() {
      this.setDropPos(null);
    },
    drop() {
      this.setDropPos(null);
    }
  }
});
function Vte() {
  return [Ni, $te];
}
function pf(n, e, t, i, r) {
  e.lastIndex = 0;
  for (let o = n.iterRange(t, i), s = t, l; !o.next().done; s += o.value.length)
    if (!o.lineBreak)
      for (; l = e.exec(o.value); )
        r(s + l.index, l);
}
function Ute(n, e) {
  let t = n.visibleRanges;
  if (t.length == 1 && t[0].from == n.viewport.from && t[0].to == n.viewport.to)
    return t;
  let i = [];
  for (let { from: r, to: o } of t)
    r = Math.max(n.state.doc.lineAt(r).from, r - e), o = Math.min(n.state.doc.lineAt(o).to, o + e), i.length && i[i.length - 1].to >= r ? i[i.length - 1].to = o : i.push({ from: r, to: o });
  return i;
}
class Wte {
  constructor(e) {
    const { regexp: t, decoration: i, decorate: r, boundary: o, maxLength: s = 1e3 } = e;
    if (!t.global)
      throw new RangeError("The regular expression given to MatchDecorator should have its 'g' flag set");
    if (this.regexp = t, r)
      this.addMatch = (l, a, c, h) => r(h, c, c + l[0].length, l, a);
    else if (typeof i == "function")
      this.addMatch = (l, a, c, h) => {
        let u = i(l, a, c);
        u && h(c, c + l[0].length, u);
      };
    else if (i)
      this.addMatch = (l, a, c, h) => h(c, c + l[0].length, i);
    else
      throw new RangeError("Either 'decorate' or 'decoration' should be provided to MatchDecorator");
    this.boundary = o, this.maxLength = s;
  }
  createDeco(e) {
    let t = new ln(), i = t.add.bind(t);
    for (let { from: r, to: o } of Ute(e, this.maxLength))
      pf(e.state.doc, this.regexp, r, o, (s, l) => this.addMatch(l, e, s, i));
    return t.finish();
  }
  updateDeco(e, t) {
    let i = 1e9, r = -1;
    return e.docChanged && e.changes.iterChanges((o, s, l, a) => {
      a > e.view.viewport.from && l < e.view.viewport.to && (i = Math.min(l, i), r = Math.max(a, r));
    }), e.viewportChanged || r - i > 1e3 ? this.createDeco(e.view) : r > -1 ? this.updateRange(e.view, t.map(e.changes), i, r) : t;
  }
  updateRange(e, t, i, r) {
    for (let o of e.visibleRanges) {
      let s = Math.max(o.from, i), l = Math.min(o.to, r);
      if (l > s) {
        let a = e.state.doc.lineAt(s), c = a.to < l ? e.state.doc.lineAt(l) : a, h = Math.max(o.from, a.from), u = Math.min(o.to, c.to);
        if (this.boundary) {
          for (; s > a.from; s--)
            if (this.boundary.test(a.text[s - 1 - a.from])) {
              h = s;
              break;
            }
          for (; l < c.to; l++)
            if (this.boundary.test(c.text[l - c.from])) {
              u = l;
              break;
            }
        }
        let f = [], d, p = (m, g, b) => f.push(b.range(m, g));
        if (a == c)
          for (this.regexp.lastIndex = h - a.from; (d = this.regexp.exec(a.text)) && d.index < u - a.from; )
            this.addMatch(d, e, d.index + a.from, p);
        else
          pf(e.state.doc, this.regexp, h, u, (m, g) => this.addMatch(g, e, m, p));
        t = t.update({ filterFrom: h, filterTo: u, filter: (m, g) => m < h || g > u, add: f });
      }
    }
    return t;
  }
}
const va = /x/.unicode != null ? "gu" : "g", jte = /* @__PURE__ */ new RegExp(`[\0-\b
-\x7F-\x9F\xAD\u061C\u200B\u200E\u200F\u2028\u2029\u202D\u202E\u2066\u2067\u2069\uFEFF\uFFF9-\uFFFC]`, va), Gte = {
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
let pl = null;
function Kte() {
  var n;
  if (pl == null && typeof document < "u" && document.body) {
    let e = document.body.style;
    pl = ((n = e.tabSize) !== null && n !== void 0 ? n : e.MozTabSize) != null;
  }
  return pl || !1;
}
const lo = /* @__PURE__ */ B.define({
  combine(n) {
    let e = Nt(n, {
      render: null,
      specialChars: jte,
      addSpecialChars: null
    });
    return (e.replaceTabs = !Kte()) && (e.specialChars = new RegExp("	|" + e.specialChars.source, va)), e.addSpecialChars && (e.specialChars = new RegExp(e.specialChars.source + "|" + e.addSpecialChars.source, va)), e;
  }
});
function Yte(n = {}) {
  return [lo.of(n), Jte()];
}
let mf = null;
function Jte() {
  return mf || (mf = ke.fromClass(class {
    constructor(n) {
      this.view = n, this.decorations = $.none, this.decorationCache = /* @__PURE__ */ Object.create(null), this.decorator = this.makeDecorator(n.state.facet(lo)), this.decorations = this.decorator.createDeco(n);
    }
    makeDecorator(n) {
      return new Wte({
        regexp: n.specialChars,
        decoration: (e, t, i) => {
          let { doc: r } = t.state, o = Se(e[0], 0);
          if (o == 9) {
            let s = r.lineAt(i), l = t.state.tabSize, a = ur(s.text, l, i - s.from);
            return $.replace({ widget: new ene((l - a % l) * this.view.defaultCharacterWidth) });
          }
          return this.decorationCache[o] || (this.decorationCache[o] = $.replace({ widget: new Qte(n, o) }));
        },
        boundary: n.replaceTabs ? void 0 : /[^]/
      });
    }
    update(n) {
      let e = n.state.facet(lo);
      n.startState.facet(lo) != e ? (this.decorator = this.makeDecorator(e), this.decorations = this.decorator.createDeco(n.view)) : this.decorations = this.decorator.updateDeco(n, this.decorations);
    }
  }, {
    decorations: (n) => n.decorations
  }));
}
const Zte = "\u2022";
function Xte(n) {
  return n >= 32 ? Zte : n == 10 ? "\u2424" : String.fromCharCode(9216 + n);
}
class Qte extends Pn {
  constructor(e, t) {
    super(), this.options = e, this.code = t;
  }
  eq(e) {
    return e.code == this.code;
  }
  toDOM(e) {
    let t = Xte(this.code), i = e.state.phrase("Control character") + " " + (Gte[this.code] || "0x" + this.code.toString(16)), r = this.options.render && this.options.render(this.code, i, t);
    if (r)
      return r;
    let o = document.createElement("span");
    return o.textContent = t, o.title = i, o.setAttribute("aria-label", i), o.className = "cm-specialChar", o;
  }
  ignoreEvent() {
    return !1;
  }
}
class ene extends Pn {
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
function tne() {
  return ine;
}
const nne = /* @__PURE__ */ $.line({ class: "cm-activeLine" }), ine = /* @__PURE__ */ ke.fromClass(class {
  constructor(n) {
    this.decorations = this.getDeco(n);
  }
  update(n) {
    (n.docChanged || n.selectionSet) && (this.decorations = this.getDeco(n.view));
  }
  getDeco(n) {
    let e = -1, t = [];
    for (let i of n.state.selection.ranges) {
      let r = n.lineBlockAt(i.head);
      r.from > e && (t.push(nne.range(r.from)), e = r.from);
    }
    return $.set(t);
  }
}, {
  decorations: (n) => n.decorations
}), xa = 2e3;
function rne(n, e, t) {
  let i = Math.min(e.line, t.line), r = Math.max(e.line, t.line), o = [];
  if (e.off > xa || t.off > xa || e.col < 0 || t.col < 0) {
    let s = Math.min(e.off, t.off), l = Math.max(e.off, t.off);
    for (let a = i; a <= r; a++) {
      let c = n.doc.line(a);
      c.length <= l && o.push(A.range(c.from + s, c.to + l));
    }
  } else {
    let s = Math.min(e.col, t.col), l = Math.max(e.col, t.col);
    for (let a = i; a <= r; a++) {
      let c = n.doc.line(a), h = Ql(c.text, s, n.tabSize, !0);
      if (h < 0)
        o.push(A.cursor(c.to));
      else {
        let u = Ql(c.text, l, n.tabSize);
        o.push(A.range(c.from + h, c.from + u));
      }
    }
  }
  return o;
}
function one(n, e) {
  let t = n.coordsAtPos(n.viewport.from);
  return t ? Math.round(Math.abs((t.left - e) / n.defaultCharacterWidth)) : -1;
}
function gf(n, e) {
  let t = n.posAtCoords({ x: e.clientX, y: e.clientY }, !1), i = n.state.doc.lineAt(t), r = t - i.from, o = r > xa ? -1 : r == i.length ? one(n, e.clientX) : ur(i.text, n.state.tabSize, t - i.from);
  return { line: i.number, col: o, off: r };
}
function sne(n, e) {
  let t = gf(n, e), i = n.state.selection;
  return t ? {
    update(r) {
      if (r.docChanged) {
        let o = r.changes.mapPos(r.startState.doc.line(t.line).from), s = r.state.doc.lineAt(o);
        t = { line: s.number, col: t.col, off: Math.min(t.off, s.length) }, i = i.map(r.changes);
      }
    },
    get(r, o, s) {
      let l = gf(n, r);
      if (!l)
        return i;
      let a = rne(n.state, t, l);
      return a.length ? s ? A.create(a.concat(i.ranges)) : A.create(a) : i;
    }
  } : null;
}
function lne(n) {
  let e = (n == null ? void 0 : n.eventFilter) || ((t) => t.altKey && t.button == 0);
  return I.mouseSelectionStyle.of((t, i) => e(i) ? sne(t, i) : null);
}
const ane = {
  Alt: [18, (n) => !!n.altKey],
  Control: [17, (n) => !!n.ctrlKey],
  Shift: [16, (n) => !!n.shiftKey],
  Meta: [91, (n) => !!n.metaKey]
}, cne = { style: "cursor: crosshair" };
function hne(n = {}) {
  let [e, t] = ane[n.key || "Alt"], i = ke.fromClass(class {
    constructor(r) {
      this.view = r, this.isDown = !1;
    }
    set(r) {
      this.isDown != r && (this.isDown = r, this.view.update([]));
    }
  }, {
    eventHandlers: {
      keydown(r) {
        this.set(r.keyCode == e || t(r));
      },
      keyup(r) {
        (r.keyCode == e || !t(r)) && this.set(!1);
      },
      mousemove(r) {
        this.set(t(r));
      }
    }
  });
  return [
    i,
    I.contentAttributes.of((r) => {
      var o;
      return !((o = r.plugin(i)) === null || o === void 0) && o.isDown ? cne : null;
    })
  ];
}
const Fr = "-10000px";
class tg {
  constructor(e, t, i) {
    this.facet = t, this.createTooltipView = i, this.input = e.state.facet(t), this.tooltips = this.input.filter((r) => r), this.tooltipViews = this.tooltips.map(i);
  }
  update(e) {
    var t;
    let i = e.state.facet(this.facet), r = i.filter((s) => s);
    if (i === this.input) {
      for (let s of this.tooltipViews)
        s.update && s.update(e);
      return !1;
    }
    let o = [];
    for (let s = 0; s < r.length; s++) {
      let l = r[s], a = -1;
      if (!!l) {
        for (let c = 0; c < this.tooltips.length; c++) {
          let h = this.tooltips[c];
          h && h.create == l.create && (a = c);
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
      o.indexOf(s) < 0 && (s.dom.remove(), (t = s.destroy) === null || t === void 0 || t.call(s));
    return this.input = i, this.tooltips = r, this.tooltipViews = o, !0;
  }
}
function une(n) {
  let { win: e } = n;
  return { top: 0, left: 0, bottom: e.innerHeight, right: e.innerWidth };
}
const ml = /* @__PURE__ */ B.define({
  combine: (n) => {
    var e, t, i;
    return {
      position: R.ios ? "absolute" : ((e = n.find((r) => r.position)) === null || e === void 0 ? void 0 : e.position) || "fixed",
      parent: ((t = n.find((r) => r.parent)) === null || t === void 0 ? void 0 : t.parent) || null,
      tooltipSpace: ((i = n.find((r) => r.tooltipSpace)) === null || i === void 0 ? void 0 : i.tooltipSpace) || une
    };
  }
}), bf = /* @__PURE__ */ new WeakMap(), ng = /* @__PURE__ */ ke.fromClass(class {
  constructor(n) {
    this.view = n, this.inView = !0, this.lastTransaction = 0, this.measureTimeout = -1;
    let e = n.state.facet(ml);
    this.position = e.position, this.parent = e.parent, this.classes = n.themeClasses, this.createContainer(), this.measureReq = { read: this.readMeasure.bind(this), write: this.writeMeasure.bind(this), key: this }, this.manager = new tg(n, mc, (t) => this.createTooltip(t)), this.intersectionObserver = typeof IntersectionObserver == "function" ? new IntersectionObserver((t) => {
      Date.now() > this.lastTransaction - 50 && t.length > 0 && t[t.length - 1].intersectionRatio < 1 && this.measureSoon();
    }, { threshold: [1] }) : null, this.observeIntersection(), n.win.addEventListener("resize", this.measureSoon = this.measureSoon.bind(this)), this.maybeMeasure();
  }
  createContainer() {
    this.parent ? (this.container = document.createElement("div"), this.container.style.position = "relative", this.container.className = this.view.themeClasses, this.parent.appendChild(this.container)) : this.container = this.view.dom;
  }
  observeIntersection() {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
      for (let n of this.manager.tooltipViews)
        this.intersectionObserver.observe(n.dom);
    }
  }
  measureSoon() {
    this.measureTimeout < 0 && (this.measureTimeout = setTimeout(() => {
      this.measureTimeout = -1, this.maybeMeasure();
    }, 50));
  }
  update(n) {
    n.transactions.length && (this.lastTransaction = Date.now());
    let e = this.manager.update(n);
    e && this.observeIntersection();
    let t = e || n.geometryChanged, i = n.state.facet(ml);
    if (i.position != this.position) {
      this.position = i.position;
      for (let r of this.manager.tooltipViews)
        r.dom.style.position = this.position;
      t = !0;
    }
    if (i.parent != this.parent) {
      this.parent && this.container.remove(), this.parent = i.parent, this.createContainer();
      for (let r of this.manager.tooltipViews)
        this.container.appendChild(r.dom);
      t = !0;
    } else
      this.parent && this.view.themeClasses != this.classes && (this.classes = this.container.className = this.view.themeClasses);
    t && this.maybeMeasure();
  }
  createTooltip(n) {
    let e = n.create(this.view);
    if (e.dom.classList.add("cm-tooltip"), n.arrow && !e.dom.querySelector(".cm-tooltip > .cm-tooltip-arrow")) {
      let t = document.createElement("div");
      t.className = "cm-tooltip-arrow", e.dom.appendChild(t);
    }
    return e.dom.style.position = this.position, e.dom.style.top = Fr, this.container.appendChild(e.dom), e.mount && e.mount(this.view), e;
  }
  destroy() {
    var n, e;
    this.view.win.removeEventListener("resize", this.measureSoon);
    for (let t of this.manager.tooltipViews)
      t.dom.remove(), (n = t.destroy) === null || n === void 0 || n.call(t);
    (e = this.intersectionObserver) === null || e === void 0 || e.disconnect(), clearTimeout(this.measureTimeout);
  }
  readMeasure() {
    let n = this.view.dom.getBoundingClientRect();
    return {
      editor: n,
      parent: this.parent ? this.container.getBoundingClientRect() : n,
      pos: this.manager.tooltips.map((e, t) => {
        let i = this.manager.tooltipViews[t];
        return i.getCoords ? i.getCoords(e.pos) : this.view.coordsAtPos(e.pos);
      }),
      size: this.manager.tooltipViews.map(({ dom: e }) => e.getBoundingClientRect()),
      space: this.view.state.facet(ml).tooltipSpace(this.view)
    };
  }
  writeMeasure(n) {
    var e;
    let { editor: t, space: i } = n, r = [];
    for (let o = 0; o < this.manager.tooltips.length; o++) {
      let s = this.manager.tooltips[o], l = this.manager.tooltipViews[o], { dom: a } = l, c = n.pos[o], h = n.size[o];
      if (!c || c.bottom <= Math.max(t.top, i.top) || c.top >= Math.min(t.bottom, i.bottom) || c.right < Math.max(t.left, i.left) - 0.1 || c.left > Math.min(t.right, i.right) + 0.1) {
        a.style.top = Fr;
        continue;
      }
      let u = s.arrow ? l.dom.querySelector(".cm-tooltip-arrow") : null, f = u ? 7 : 0, d = h.right - h.left, p = (e = bf.get(l)) !== null && e !== void 0 ? e : h.bottom - h.top, m = l.offset || dne, g = this.view.textDirection == le.LTR, b = h.width > i.right - i.left ? g ? i.left : i.right - h.width : g ? Math.min(c.left - (u ? 14 : 0) + m.x, i.right - d) : Math.max(i.left, c.left - d + (u ? 14 : 0) - m.x), y = !!s.above;
      !s.strictSide && (y ? c.top - (h.bottom - h.top) - m.y < i.top : c.bottom + (h.bottom - h.top) + m.y > i.bottom) && y == i.bottom - c.bottom > c.top - i.top && (y = !y);
      let w = (y ? c.top - i.top : i.bottom - c.bottom) - f;
      if (w < p && l.resize !== !1) {
        if (w < this.view.defaultLineHeight) {
          a.style.top = Fr;
          continue;
        }
        bf.set(l, p), a.style.height = (p = w) + "px";
      } else
        a.style.height && (a.style.height = "");
      let x = y ? c.top - p - f - m.y : c.bottom + f + m.y, _ = b + d;
      if (l.overlap !== !0)
        for (let k of r)
          k.left < _ && k.right > b && k.top < x + p && k.bottom > x && (x = y ? k.top - p - 2 - f : k.bottom + f + 2);
      this.position == "absolute" ? (a.style.top = x - n.parent.top + "px", a.style.left = b - n.parent.left + "px") : (a.style.top = x + "px", a.style.left = b + "px"), u && (u.style.left = `${c.left + (g ? m.x : -m.x) - (b + 14 - 7)}px`), l.overlap !== !0 && r.push({ left: b, top: x, right: _, bottom: x + p }), a.classList.toggle("cm-tooltip-above", y), a.classList.toggle("cm-tooltip-below", !y), l.positioned && l.positioned(n.space);
    }
  }
  maybeMeasure() {
    if (this.manager.tooltips.length && (this.view.inView && this.view.requestMeasure(this.measureReq), this.inView != this.view.inView && (this.inView = this.view.inView, !this.inView)))
      for (let n of this.manager.tooltipViews)
        n.dom.style.top = Fr;
  }
}, {
  eventHandlers: {
    scroll() {
      this.maybeMeasure();
    }
  }
}), fne = /* @__PURE__ */ I.baseTheme({
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
}), dne = { x: 0, y: 0 }, mc = /* @__PURE__ */ B.define({
  enables: [ng, fne]
}), Ro = /* @__PURE__ */ B.define();
class gc {
  constructor(e) {
    this.view = e, this.mounted = !1, this.dom = document.createElement("div"), this.dom.classList.add("cm-tooltip-hover"), this.manager = new tg(e, Ro, (t) => this.createHostedView(t));
  }
  static create(e) {
    return new gc(e);
  }
  createHostedView(e) {
    let t = e.create(this.view);
    return t.dom.classList.add("cm-tooltip-section"), this.dom.appendChild(t.dom), this.mounted && t.mount && t.mount(this.view), t;
  }
  mount(e) {
    for (let t of this.manager.tooltipViews)
      t.mount && t.mount(e);
    this.mounted = !0;
  }
  positioned(e) {
    for (let t of this.manager.tooltipViews)
      t.positioned && t.positioned(e);
  }
  update(e) {
    this.manager.update(e);
  }
  destroy() {
    var e;
    for (let t of this.manager.tooltipViews)
      (e = t.destroy) === null || e === void 0 || e.call(t);
  }
}
const pne = /* @__PURE__ */ mc.compute([Ro], (n) => {
  let e = n.facet(Ro).filter((t) => t);
  return e.length === 0 ? null : {
    pos: Math.min(...e.map((t) => t.pos)),
    end: Math.max(...e.filter((t) => t.end != null).map((t) => t.end)),
    create: gc.create,
    above: e[0].above,
    arrow: e.some((t) => t.arrow)
  };
});
class mne {
  constructor(e, t, i, r, o) {
    this.view = e, this.source = t, this.field = i, this.setHover = r, this.hoverTime = o, this.hoverTimeout = -1, this.restartTimeout = -1, this.pending = null, this.lastMove = { x: 0, y: 0, target: e.dom, time: 0 }, this.checkHover = this.checkHover.bind(this), e.dom.addEventListener("mouseleave", this.mouseleave = this.mouseleave.bind(this)), e.dom.addEventListener("mousemove", this.mousemove = this.mousemove.bind(this));
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
    let { lastMove: e } = this, t = this.view.contentDOM.contains(e.target) ? this.view.posAtCoords(e) : null;
    if (t == null)
      return;
    let i = this.view.coordsAtPos(t);
    if (i == null || e.y < i.top || e.y > i.bottom || e.x < i.left - this.view.defaultCharacterWidth || e.x > i.right + this.view.defaultCharacterWidth)
      return;
    let r = this.view.bidiSpans(this.view.state.doc.lineAt(t)).find((l) => l.from <= t && l.to >= t), o = r && r.dir == le.RTL ? -1 : 1, s = this.source(this.view, t, e.x < i.left ? -o : o);
    if (s != null && s.then) {
      let l = this.pending = { pos: t };
      s.then((a) => {
        this.pending == l && (this.pending = null, a && this.view.dispatch({ effects: this.setHover.of(a) }));
      }, (a) => rt(this.view.state, a, "hover tooltip"));
    } else
      s && this.view.dispatch({ effects: this.setHover.of(s) });
  }
  mousemove(e) {
    var t;
    this.lastMove = { x: e.clientX, y: e.clientY, target: e.target, time: Date.now() }, this.hoverTimeout < 0 && (this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime));
    let i = this.active;
    if (i && !yf(this.lastMove.target) || this.pending) {
      let { pos: r } = i || this.pending, o = (t = i == null ? void 0 : i.end) !== null && t !== void 0 ? t : r;
      (r == o ? this.view.posAtCoords(this.lastMove) != r : !gne(this.view, r, o, e.clientX, e.clientY, 6)) && (this.view.dispatch({ effects: this.setHover.of(null) }), this.pending = null);
    }
  }
  mouseleave(e) {
    clearTimeout(this.hoverTimeout), this.hoverTimeout = -1, this.active && !yf(e.relatedTarget) && this.view.dispatch({ effects: this.setHover.of(null) });
  }
  destroy() {
    clearTimeout(this.hoverTimeout), this.view.dom.removeEventListener("mouseleave", this.mouseleave), this.view.dom.removeEventListener("mousemove", this.mousemove);
  }
}
function yf(n) {
  for (let e = n; e; e = e.parentNode)
    if (e.nodeType == 1 && e.classList.contains("cm-tooltip"))
      return !0;
  return !1;
}
function gne(n, e, t, i, r, o) {
  let s = document.createRange(), l = n.domAtPos(e), a = n.domAtPos(t);
  s.setEnd(a.node, a.offset), s.setStart(l.node, l.offset);
  let c = s.getClientRects();
  s.detach();
  for (let h = 0; h < c.length; h++) {
    let u = c[h];
    if (Math.max(u.top - r, r - u.bottom, u.left - i, i - u.right) <= o)
      return !0;
  }
  return !1;
}
function bne(n, e = {}) {
  let t = W.define(), i = Me.define({
    create() {
      return null;
    },
    update(r, o) {
      if (r && (e.hideOnChange && (o.docChanged || o.selection) || e.hideOn && e.hideOn(o, r)))
        return null;
      if (r && o.docChanged) {
        let s = o.changes.mapPos(r.pos, -1, ze.TrackDel);
        if (s == null)
          return null;
        let l = Object.assign(/* @__PURE__ */ Object.create(null), r);
        l.pos = s, r.end != null && (l.end = o.changes.mapPos(r.end)), r = l;
      }
      for (let s of o.effects)
        s.is(t) && (r = s.value), s.is(yne) && (r = null);
      return r;
    },
    provide: (r) => Ro.from(r)
  });
  return [
    i,
    ke.define((r) => new mne(r, n, i, t, e.hoverTime || 300)),
    pne
  ];
}
function ig(n, e) {
  let t = n.plugin(ng);
  if (!t)
    return null;
  let i = t.manager.tooltips.indexOf(e);
  return i < 0 ? null : t.manager.tooltipViews[i];
}
const yne = /* @__PURE__ */ W.define(), vf = /* @__PURE__ */ B.define({
  combine(n) {
    let e, t;
    for (let i of n)
      e = e || i.topContainer, t = t || i.bottomContainer;
    return { topContainer: e, bottomContainer: t };
  }
});
function ir(n, e) {
  let t = n.plugin(rg), i = t ? t.specs.indexOf(e) : -1;
  return i > -1 ? t.panels[i] : null;
}
const rg = /* @__PURE__ */ ke.fromClass(class {
  constructor(n) {
    this.input = n.state.facet(rr), this.specs = this.input.filter((t) => t), this.panels = this.specs.map((t) => t(n));
    let e = n.state.facet(vf);
    this.top = new qr(n, !0, e.topContainer), this.bottom = new qr(n, !1, e.bottomContainer), this.top.sync(this.panels.filter((t) => t.top)), this.bottom.sync(this.panels.filter((t) => !t.top));
    for (let t of this.panels)
      t.dom.classList.add("cm-panel"), t.mount && t.mount();
  }
  update(n) {
    let e = n.state.facet(vf);
    this.top.container != e.topContainer && (this.top.sync([]), this.top = new qr(n.view, !0, e.topContainer)), this.bottom.container != e.bottomContainer && (this.bottom.sync([]), this.bottom = new qr(n.view, !1, e.bottomContainer)), this.top.syncClasses(), this.bottom.syncClasses();
    let t = n.state.facet(rr);
    if (t != this.input) {
      let i = t.filter((a) => a), r = [], o = [], s = [], l = [];
      for (let a of i) {
        let c = this.specs.indexOf(a), h;
        c < 0 ? (h = a(n.view), l.push(h)) : (h = this.panels[c], h.update && h.update(n)), r.push(h), (h.top ? o : s).push(h);
      }
      this.specs = i, this.panels = r, this.top.sync(o), this.bottom.sync(s);
      for (let a of l)
        a.dom.classList.add("cm-panel"), a.mount && a.mount();
    } else
      for (let i of this.panels)
        i.update && i.update(n);
  }
  destroy() {
    this.top.sync([]), this.bottom.sync([]);
  }
}, {
  provide: (n) => I.scrollMargins.of((e) => {
    let t = e.plugin(n);
    return t && { top: t.top.scrollMargin(), bottom: t.bottom.scrollMargin() };
  })
});
class qr {
  constructor(e, t, i) {
    this.view = e, this.top = t, this.container = i, this.dom = void 0, this.classes = "", this.panels = [], this.syncClasses();
  }
  sync(e) {
    for (let t of this.panels)
      t.destroy && e.indexOf(t) < 0 && t.destroy();
    this.panels = e, this.syncDOM();
  }
  syncDOM() {
    if (this.panels.length == 0) {
      this.dom && (this.dom.remove(), this.dom = void 0);
      return;
    }
    if (!this.dom) {
      this.dom = document.createElement("div"), this.dom.className = this.top ? "cm-panels cm-panels-top" : "cm-panels cm-panels-bottom", this.dom.style[this.top ? "top" : "bottom"] = "0";
      let t = this.container || this.view.dom;
      t.insertBefore(this.dom, this.top ? t.firstChild : null);
    }
    let e = this.dom.firstChild;
    for (let t of this.panels)
      if (t.dom.parentNode == this.dom) {
        for (; e != t.dom; )
          e = xf(e);
        e = e.nextSibling;
      } else
        this.dom.insertBefore(t.dom, e);
    for (; e; )
      e = xf(e);
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
function xf(n) {
  let e = n.nextSibling;
  return n.remove(), e;
}
const rr = /* @__PURE__ */ B.define({
  enables: rg
});
class Ut extends Rn {
  compare(e) {
    return this == e || this.constructor == e.constructor && this.eq(e);
  }
  eq(e) {
    return !1;
  }
  destroy(e) {
  }
}
Ut.prototype.elementClass = "";
Ut.prototype.toDOM = void 0;
Ut.prototype.mapMode = ze.TrackBefore;
Ut.prototype.startSide = Ut.prototype.endSide = -1;
Ut.prototype.point = !0;
const ao = /* @__PURE__ */ B.define(), vne = {
  class: "",
  renderEmptyElements: !1,
  elementStyle: "",
  markers: () => X.empty,
  lineMarker: () => null,
  widgetMarker: () => null,
  lineMarkerChange: null,
  initialSpacer: null,
  updateSpacer: null,
  domEventHandlers: {}
}, $i = /* @__PURE__ */ B.define();
function xne(n) {
  return [og(), $i.of(Object.assign(Object.assign({}, vne), n))];
}
const ka = /* @__PURE__ */ B.define({
  combine: (n) => n.some((e) => e)
});
function og(n) {
  let e = [
    kne
  ];
  return n && n.fixed === !1 && e.push(ka.of(!0)), e;
}
const kne = /* @__PURE__ */ ke.fromClass(class {
  constructor(n) {
    this.view = n, this.prevViewport = n.viewport, this.dom = document.createElement("div"), this.dom.className = "cm-gutters", this.dom.setAttribute("aria-hidden", "true"), this.dom.style.minHeight = this.view.contentHeight + "px", this.gutters = n.state.facet($i).map((e) => new wf(n, e));
    for (let e of this.gutters)
      this.dom.appendChild(e.dom);
    this.fixed = !n.state.facet(ka), this.fixed && (this.dom.style.position = "sticky"), this.syncGutters(!1), n.scrollDOM.insertBefore(this.dom, n.contentDOM);
  }
  update(n) {
    if (this.updateGutters(n)) {
      let e = this.prevViewport, t = n.view.viewport, i = Math.min(e.to, t.to) - Math.max(e.from, t.from);
      this.syncGutters(i < (t.to - t.from) * 0.8);
    }
    n.geometryChanged && (this.dom.style.minHeight = this.view.contentHeight + "px"), this.view.state.facet(ka) != !this.fixed && (this.fixed = !this.fixed, this.dom.style.position = this.fixed ? "sticky" : ""), this.prevViewport = n.view.viewport;
  }
  syncGutters(n) {
    let e = this.dom.nextSibling;
    n && this.dom.remove();
    let t = X.iter(this.view.state.facet(ao), this.view.viewport.from), i = [], r = this.gutters.map((o) => new wne(o, this.view.viewport, -this.view.documentPadding.top));
    for (let o of this.view.viewportLineBlocks)
      if (i.length && (i = []), Array.isArray(o.type)) {
        let s = !0;
        for (let l of o.type)
          if (l.type == ae.Text && s) {
            wa(t, i, l.from);
            for (let a of r)
              a.line(this.view, l, i);
            s = !1;
          } else if (l.widget)
            for (let a of r)
              a.widget(this.view, l);
      } else if (o.type == ae.Text) {
        wa(t, i, o.from);
        for (let s of r)
          s.line(this.view, o, i);
      }
    for (let o of r)
      o.finish();
    n && this.view.scrollDOM.insertBefore(this.dom, e);
  }
  updateGutters(n) {
    let e = n.startState.facet($i), t = n.state.facet($i), i = n.docChanged || n.heightChanged || n.viewportChanged || !X.eq(n.startState.facet(ao), n.state.facet(ao), n.view.viewport.from, n.view.viewport.to);
    if (e == t)
      for (let r of this.gutters)
        r.update(n) && (i = !0);
    else {
      i = !0;
      let r = [];
      for (let o of t) {
        let s = e.indexOf(o);
        s < 0 ? r.push(new wf(this.view, o)) : (this.gutters[s].update(n), r.push(this.gutters[s]));
      }
      for (let o of this.gutters)
        o.dom.remove(), r.indexOf(o) < 0 && o.destroy();
      for (let o of r)
        this.dom.appendChild(o.dom);
      this.gutters = r;
    }
    return i;
  }
  destroy() {
    for (let n of this.gutters)
      n.destroy();
    this.dom.remove();
  }
}, {
  provide: (n) => I.scrollMargins.of((e) => {
    let t = e.plugin(n);
    return !t || t.gutters.length == 0 || !t.fixed ? null : e.textDirection == le.LTR ? { left: t.dom.offsetWidth } : { right: t.dom.offsetWidth };
  })
});
function kf(n) {
  return Array.isArray(n) ? n : [n];
}
function wa(n, e, t) {
  for (; n.value && n.from <= t; )
    n.from == t && e.push(n.value), n.next();
}
class wne {
  constructor(e, t, i) {
    this.gutter = e, this.height = i, this.i = 0, this.cursor = X.iter(e.markers, t.from);
  }
  addElement(e, t, i) {
    let { gutter: r } = this, o = t.top - this.height;
    if (this.i == r.elements.length) {
      let s = new sg(e, t.height, o, i);
      r.elements.push(s), r.dom.appendChild(s.dom);
    } else
      r.elements[this.i].update(e, t.height, o, i);
    this.height = t.bottom, this.i++;
  }
  line(e, t, i) {
    let r = [];
    wa(this.cursor, r, t.from), i.length && (r = r.concat(i));
    let o = this.gutter.config.lineMarker(e, t, r);
    o && r.unshift(o);
    let s = this.gutter;
    r.length == 0 && !s.config.renderEmptyElements || this.addElement(e, t, r);
  }
  widget(e, t) {
    let i = this.gutter.config.widgetMarker(e, t.widget, t);
    i && this.addElement(e, t, [i]);
  }
  finish() {
    let e = this.gutter;
    for (; e.elements.length > this.i; ) {
      let t = e.elements.pop();
      e.dom.removeChild(t.dom), t.destroy();
    }
  }
}
class wf {
  constructor(e, t) {
    this.view = e, this.config = t, this.elements = [], this.spacer = null, this.dom = document.createElement("div"), this.dom.className = "cm-gutter" + (this.config.class ? " " + this.config.class : "");
    for (let i in t.domEventHandlers)
      this.dom.addEventListener(i, (r) => {
        let o = r.target, s;
        if (o != this.dom && this.dom.contains(o)) {
          for (; o.parentNode != this.dom; )
            o = o.parentNode;
          let a = o.getBoundingClientRect();
          s = (a.top + a.bottom) / 2;
        } else
          s = r.clientY;
        let l = e.lineBlockAtHeight(s - e.documentTop);
        t.domEventHandlers[i](e, l, r) && r.preventDefault();
      });
    this.markers = kf(t.markers(e)), t.initialSpacer && (this.spacer = new sg(e, 0, 0, [t.initialSpacer(e)]), this.dom.appendChild(this.spacer.dom), this.spacer.dom.style.cssText += "visibility: hidden; pointer-events: none");
  }
  update(e) {
    let t = this.markers;
    if (this.markers = kf(this.config.markers(e.view)), this.spacer && this.config.updateSpacer) {
      let r = this.config.updateSpacer(this.spacer.markers[0], e);
      r != this.spacer.markers[0] && this.spacer.update(e.view, 0, 0, [r]);
    }
    let i = e.view.viewport;
    return !X.eq(this.markers, t, i.from, i.to) || (this.config.lineMarkerChange ? this.config.lineMarkerChange(e) : !1);
  }
  destroy() {
    for (let e of this.elements)
      e.destroy();
  }
}
class sg {
  constructor(e, t, i, r) {
    this.height = -1, this.above = 0, this.markers = [], this.dom = document.createElement("div"), this.dom.className = "cm-gutterElement", this.update(e, t, i, r);
  }
  update(e, t, i, r) {
    this.height != t && (this.dom.style.height = (this.height = t) + "px"), this.above != i && (this.dom.style.marginTop = (this.above = i) ? i + "px" : ""), _ne(this.markers, r) || this.setMarkers(e, r);
  }
  setMarkers(e, t) {
    let i = "cm-gutterElement", r = this.dom.firstChild;
    for (let o = 0, s = 0; ; ) {
      let l = s, a = o < t.length ? t[o++] : null, c = !1;
      if (a) {
        let h = a.elementClass;
        h && (i += " " + h);
        for (let u = s; u < this.markers.length; u++)
          if (this.markers[u].compare(a)) {
            l = u, c = !0;
            break;
          }
      } else
        l = this.markers.length;
      for (; s < l; ) {
        let h = this.markers[s++];
        if (h.toDOM) {
          h.destroy(r);
          let u = r.nextSibling;
          r.remove(), r = u;
        }
      }
      if (!a)
        break;
      a.toDOM && (c ? r = r.nextSibling : this.dom.insertBefore(a.toDOM(e), r)), c && s++;
    }
    this.dom.className = i, this.markers = t;
  }
  destroy() {
    this.setMarkers(null, []);
  }
}
function _ne(n, e) {
  if (n.length != e.length)
    return !1;
  for (let t = 0; t < n.length; t++)
    if (!n[t].compare(e[t]))
      return !1;
  return !0;
}
const Ane = /* @__PURE__ */ B.define(), ei = /* @__PURE__ */ B.define({
  combine(n) {
    return Nt(n, { formatNumber: String, domEventHandlers: {} }, {
      domEventHandlers(e, t) {
        let i = Object.assign({}, e);
        for (let r in t) {
          let o = i[r], s = t[r];
          i[r] = o ? (l, a, c) => o(l, a, c) || s(l, a, c) : s;
        }
        return i;
      }
    });
  }
});
class gl extends Ut {
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
function bl(n, e) {
  return n.state.facet(ei).formatNumber(e, n.state);
}
const Cne = /* @__PURE__ */ $i.compute([ei], (n) => ({
  class: "cm-lineNumbers",
  renderEmptyElements: !1,
  markers(e) {
    return e.state.facet(Ane);
  },
  lineMarker(e, t, i) {
    return i.some((r) => r.toDOM) ? null : new gl(bl(e, e.state.doc.lineAt(t.from).number));
  },
  widgetMarker: () => null,
  lineMarkerChange: (e) => e.startState.facet(ei) != e.state.facet(ei),
  initialSpacer(e) {
    return new gl(bl(e, _f(e.state.doc.lines)));
  },
  updateSpacer(e, t) {
    let i = bl(t.view, _f(t.view.state.doc.lines));
    return i == e.number ? e : new gl(i);
  },
  domEventHandlers: n.facet(ei).domEventHandlers
}));
function Sne(n = {}) {
  return [
    ei.of(n),
    og(),
    Cne
  ];
}
function _f(n) {
  let e = 9;
  for (; e < n; )
    e = e * 10 + 9;
  return e;
}
const Tne = /* @__PURE__ */ new class extends Ut {
  constructor() {
    super(...arguments), this.elementClass = "cm-activeLineGutter";
  }
}(), Ene = /* @__PURE__ */ ao.compute(["selection"], (n) => {
  let e = [], t = -1;
  for (let i of n.selection.ranges) {
    let r = n.doc.lineAt(i.head).from;
    r > t && (t = r, e.push(Tne.range(r)));
  }
  return X.of(e);
});
function Dne() {
  return Ene;
}
const Mne = 1024;
let One = 0;
class yl {
  constructor(e, t) {
    this.from = e, this.to = t;
  }
}
class j {
  constructor(e = {}) {
    this.id = One++, this.perNode = !!e.perNode, this.deserialize = e.deserialize || (() => {
      throw new Error("This node type doesn't define a deserialize function");
    });
  }
  add(e) {
    if (this.perNode)
      throw new RangeError("Can't add per-node props to node types");
    return typeof e != "function" && (e = ct.match(e)), (t) => {
      let i = e(t);
      return i === void 0 ? null : [this, i];
    };
  }
}
j.closedBy = new j({ deserialize: (n) => n.split(" ") });
j.openedBy = new j({ deserialize: (n) => n.split(" ") });
j.group = new j({ deserialize: (n) => n.split(" ") });
j.contextHash = new j({ perNode: !0 });
j.lookAhead = new j({ perNode: !0 });
j.mounted = new j({ perNode: !0 });
const Lne = /* @__PURE__ */ Object.create(null);
class ct {
  constructor(e, t, i, r = 0) {
    this.name = e, this.props = t, this.id = i, this.flags = r;
  }
  static define(e) {
    let t = e.props && e.props.length ? /* @__PURE__ */ Object.create(null) : Lne, i = (e.top ? 1 : 0) | (e.skipped ? 2 : 0) | (e.error ? 4 : 0) | (e.name == null ? 8 : 0), r = new ct(e.name || "", t, e.id, i);
    if (e.props) {
      for (let o of e.props)
        if (Array.isArray(o) || (o = o(r)), o) {
          if (o[0].perNode)
            throw new RangeError("Can't store a per-node prop on a node type");
          t[o[0].id] = o[1];
        }
    }
    return r;
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
      let t = this.prop(j.group);
      return t ? t.indexOf(e) > -1 : !1;
    }
    return this.id == e;
  }
  static match(e) {
    let t = /* @__PURE__ */ Object.create(null);
    for (let i in e)
      for (let r of i.split(" "))
        t[r] = e[i];
    return (i) => {
      for (let r = i.prop(j.group), o = -1; o < (r ? r.length : 0); o++) {
        let s = t[o < 0 ? i.name : r[o]];
        if (s)
          return s;
      }
    };
  }
}
ct.none = new ct("", /* @__PURE__ */ Object.create(null), 0, 8);
const Hr = /* @__PURE__ */ new WeakMap(), Af = /* @__PURE__ */ new WeakMap();
var Ee;
(function(n) {
  n[n.ExcludeBuffers = 1] = "ExcludeBuffers", n[n.IncludeAnonymous = 2] = "IncludeAnonymous", n[n.IgnoreMounts = 4] = "IgnoreMounts", n[n.IgnoreOverlays = 8] = "IgnoreOverlays";
})(Ee || (Ee = {}));
class Ie {
  constructor(e, t, i, r, o) {
    if (this.type = e, this.children = t, this.positions = i, this.length = r, this.props = null, o && o.length) {
      this.props = /* @__PURE__ */ Object.create(null);
      for (let [s, l] of o)
        this.props[typeof s == "number" ? s : s.id] = l;
    }
  }
  toString() {
    let e = this.prop(j.mounted);
    if (e && !e.overlay)
      return e.tree.toString();
    let t = "";
    for (let i of this.children) {
      let r = i.toString();
      r && (t && (t += ","), t += r);
    }
    return this.type.name ? (/\W/.test(this.type.name) && !this.type.isError ? JSON.stringify(this.type.name) : this.type.name) + (t.length ? "(" + t + ")" : "") : t;
  }
  cursor(e = 0) {
    return new No(this.topNode, e);
  }
  cursorAt(e, t = 0, i = 0) {
    let r = Hr.get(this) || this.topNode, o = new No(r);
    return o.moveTo(e, t), Hr.set(this, o._tree), o;
  }
  get topNode() {
    return new zt(this, 0, 0, null);
  }
  resolve(e, t = 0) {
    let i = fi(Hr.get(this) || this.topNode, e, t, !1);
    return Hr.set(this, i), i;
  }
  resolveInner(e, t = 0) {
    let i = fi(Af.get(this) || this.topNode, e, t, !0);
    return Af.set(this, i), i;
  }
  iterate(e) {
    let { enter: t, leave: i, from: r = 0, to: o = this.length } = e, s = e.mode || 0, l = (s & Ee.IncludeAnonymous) > 0;
    for (let a = this.cursor(s | Ee.IncludeAnonymous); ; ) {
      let c = !1;
      if (a.from <= o && a.to >= r && (!l && a.type.isAnonymous || t(a) !== !1)) {
        if (a.firstChild())
          continue;
        c = !0;
      }
      for (; c && i && (l || !a.type.isAnonymous) && i(a), !a.nextSibling(); ) {
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
      for (let t in this.props)
        e.push([+t, this.props[t]]);
    return e;
  }
  balance(e = {}) {
    return this.children.length <= 8 ? this : vc(ct.none, this.children, this.positions, 0, this.children.length, 0, this.length, (t, i, r) => new Ie(this.type, t, i, r, this.propValues), e.makeTree || ((t, i, r) => new Ie(ct.none, t, i, r)));
  }
  static build(e) {
    return Ine(e);
  }
}
Ie.empty = new Ie(ct.none, [], [], 0);
class bc {
  constructor(e, t) {
    this.buffer = e, this.index = t;
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
    return new bc(this.buffer, this.index);
  }
}
class Fn {
  constructor(e, t, i) {
    this.buffer = e, this.length = t, this.set = i;
  }
  get type() {
    return ct.none;
  }
  toString() {
    let e = [];
    for (let t = 0; t < this.buffer.length; )
      e.push(this.childString(t)), t = this.buffer[t + 3];
    return e.join(",");
  }
  childString(e) {
    let t = this.buffer[e], i = this.buffer[e + 3], r = this.set.types[t], o = r.name;
    if (/\W/.test(o) && !r.isError && (o = JSON.stringify(o)), e += 4, i == e)
      return o;
    let s = [];
    for (; e < i; )
      s.push(this.childString(e)), e = this.buffer[e + 3];
    return o + "(" + s.join(",") + ")";
  }
  findChild(e, t, i, r, o) {
    let { buffer: s } = this, l = -1;
    for (let a = e; a != t && !(lg(o, r, s[a + 1], s[a + 2]) && (l = a, i > 0)); a = s[a + 3])
      ;
    return l;
  }
  slice(e, t, i) {
    let r = this.buffer, o = new Uint16Array(t - e), s = 0;
    for (let l = e, a = 0; l < t; ) {
      o[a++] = r[l++], o[a++] = r[l++] - i;
      let c = o[a++] = r[l++] - i;
      o[a++] = r[l++] - e, s = Math.max(s, c);
    }
    return new Fn(o, s, this.set);
  }
}
function lg(n, e, t, i) {
  switch (n) {
    case -2:
      return t < e;
    case -1:
      return i >= e && t < e;
    case 0:
      return t < e && i > e;
    case 1:
      return t <= e && i > e;
    case 2:
      return i > e;
    case 4:
      return !0;
  }
}
function ag(n, e) {
  let t = n.childBefore(e);
  for (; t; ) {
    let i = t.lastChild;
    if (!i || i.to != t.to)
      break;
    i.type.isError && i.from == i.to ? (n = t, t = i.prevSibling) : t = i;
  }
  return n;
}
function fi(n, e, t, i) {
  for (var r; n.from == n.to || (t < 1 ? n.from >= e : n.from > e) || (t > -1 ? n.to <= e : n.to < e); ) {
    let s = !i && n instanceof zt && n.index < 0 ? null : n.parent;
    if (!s)
      return n;
    n = s;
  }
  let o = i ? 0 : Ee.IgnoreOverlays;
  if (i)
    for (let s = n, l = s.parent; l; s = l, l = s.parent)
      s instanceof zt && s.index < 0 && ((r = l.enter(e, t, o)) === null || r === void 0 ? void 0 : r.from) != s.from && (n = l);
  for (; ; ) {
    let s = n.enter(e, t, o);
    if (!s)
      return n;
    n = s;
  }
}
class zt {
  constructor(e, t, i, r) {
    this._tree = e, this.from = t, this.index = i, this._parent = r;
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
  nextChild(e, t, i, r, o = 0) {
    for (let s = this; ; ) {
      for (let { children: l, positions: a } = s._tree, c = t > 0 ? l.length : -1; e != c; e += t) {
        let h = l[e], u = a[e] + s.from;
        if (!!lg(r, i, u, u + h.length)) {
          if (h instanceof Fn) {
            if (o & Ee.ExcludeBuffers)
              continue;
            let f = h.findChild(0, h.buffer.length, t, i - u, r);
            if (f > -1)
              return new en(new Rne(s, h, e, u), null, f);
          } else if (o & Ee.IncludeAnonymous || !h.type.isAnonymous || yc(h)) {
            let f;
            if (!(o & Ee.IgnoreMounts) && h.props && (f = h.prop(j.mounted)) && !f.overlay)
              return new zt(f.tree, u, e, s);
            let d = new zt(h, u, e, s);
            return o & Ee.IncludeAnonymous || !d.type.isAnonymous ? d : d.nextChild(t < 0 ? h.children.length - 1 : 0, t, i, r);
          }
        }
      }
      if (o & Ee.IncludeAnonymous || !s.type.isAnonymous || (s.index >= 0 ? e = s.index + t : e = t < 0 ? -1 : s._parent._tree.children.length, s = s._parent, !s))
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
  enter(e, t, i = 0) {
    let r;
    if (!(i & Ee.IgnoreOverlays) && (r = this._tree.prop(j.mounted)) && r.overlay) {
      let o = e - this.from;
      for (let { from: s, to: l } of r.overlay)
        if ((t > 0 ? s <= o : s < o) && (t < 0 ? l >= o : l > o))
          return new zt(r.tree, r.overlay[0].from + this.from, -1, this);
    }
    return this.nextChild(0, 1, e, t, i);
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
    return new No(this, e);
  }
  get tree() {
    return this._tree;
  }
  toTree() {
    return this._tree;
  }
  resolve(e, t = 0) {
    return fi(this, e, t, !1);
  }
  resolveInner(e, t = 0) {
    return fi(this, e, t, !0);
  }
  enterUnfinishedNodesBefore(e) {
    return ag(this, e);
  }
  getChild(e, t = null, i = null) {
    let r = Io(this, e, t, i);
    return r.length ? r[0] : null;
  }
  getChildren(e, t = null, i = null) {
    return Io(this, e, t, i);
  }
  toString() {
    return this._tree.toString();
  }
  get node() {
    return this;
  }
  matchContext(e) {
    return Bo(this, e);
  }
}
function Io(n, e, t, i) {
  let r = n.cursor(), o = [];
  if (!r.firstChild())
    return o;
  if (t != null) {
    for (; !r.type.is(t); )
      if (!r.nextSibling())
        return o;
  }
  for (; ; ) {
    if (i != null && r.type.is(i))
      return o;
    if (r.type.is(e) && o.push(r.node), !r.nextSibling())
      return i == null ? o : [];
  }
}
function Bo(n, e, t = e.length - 1) {
  for (let i = n.parent; t >= 0; i = i.parent) {
    if (!i)
      return !1;
    if (!i.type.isAnonymous) {
      if (e[t] && e[t] != i.name)
        return !1;
      t--;
    }
  }
  return !0;
}
class Rne {
  constructor(e, t, i, r) {
    this.parent = e, this.buffer = t, this.index = i, this.start = r;
  }
}
class en {
  get name() {
    return this.type.name;
  }
  get from() {
    return this.context.start + this.context.buffer.buffer[this.index + 1];
  }
  get to() {
    return this.context.start + this.context.buffer.buffer[this.index + 2];
  }
  constructor(e, t, i) {
    this.context = e, this._parent = t, this.index = i, this.type = e.buffer.set.types[e.buffer.buffer[i]];
  }
  child(e, t, i) {
    let { buffer: r } = this.context, o = r.findChild(this.index + 4, r.buffer[this.index + 3], e, t - this.context.start, i);
    return o < 0 ? null : new en(this.context, this, o);
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
  enter(e, t, i = 0) {
    if (i & Ee.ExcludeBuffers)
      return null;
    let { buffer: r } = this.context, o = r.findChild(this.index + 4, r.buffer[this.index + 3], t > 0 ? 1 : -1, e - this.context.start, t);
    return o < 0 ? null : new en(this.context, this, o);
  }
  get parent() {
    return this._parent || this.context.parent.nextSignificantParent();
  }
  externalSibling(e) {
    return this._parent ? null : this.context.parent.nextChild(this.context.index + e, e, 0, 4);
  }
  get nextSibling() {
    let { buffer: e } = this.context, t = e.buffer[this.index + 3];
    return t < (this._parent ? e.buffer[this._parent.index + 3] : e.buffer.length) ? new en(this.context, this._parent, t) : this.externalSibling(1);
  }
  get prevSibling() {
    let { buffer: e } = this.context, t = this._parent ? this._parent.index + 4 : 0;
    return this.index == t ? this.externalSibling(-1) : new en(this.context, this._parent, e.findChild(t, this.index, -1, 0, 4));
  }
  cursor(e = 0) {
    return new No(this, e);
  }
  get tree() {
    return null;
  }
  toTree() {
    let e = [], t = [], { buffer: i } = this.context, r = this.index + 4, o = i.buffer[this.index + 3];
    if (o > r) {
      let s = i.buffer[this.index + 1];
      e.push(i.slice(r, o, s)), t.push(0);
    }
    return new Ie(this.type, e, t, this.to - this.from);
  }
  resolve(e, t = 0) {
    return fi(this, e, t, !1);
  }
  resolveInner(e, t = 0) {
    return fi(this, e, t, !0);
  }
  enterUnfinishedNodesBefore(e) {
    return ag(this, e);
  }
  toString() {
    return this.context.buffer.childString(this.index);
  }
  getChild(e, t = null, i = null) {
    let r = Io(this, e, t, i);
    return r.length ? r[0] : null;
  }
  getChildren(e, t = null, i = null) {
    return Io(this, e, t, i);
  }
  get node() {
    return this;
  }
  matchContext(e) {
    return Bo(this, e);
  }
}
class No {
  get name() {
    return this.type.name;
  }
  constructor(e, t = 0) {
    if (this.mode = t, this.buffer = null, this.stack = [], this.index = 0, this.bufferNode = null, e instanceof zt)
      this.yieldNode(e);
    else {
      this._tree = e.context.parent, this.buffer = e.context;
      for (let i = e._parent; i; i = i._parent)
        this.stack.unshift(i.index);
      this.bufferNode = e, this.yieldBuf(e.index);
    }
  }
  yieldNode(e) {
    return e ? (this._tree = e, this.type = e.type, this.from = e.from, this.to = e.to, !0) : !1;
  }
  yieldBuf(e, t) {
    this.index = e;
    let { start: i, buffer: r } = this.buffer;
    return this.type = t || r.set.types[r.buffer[e]], this.from = i + r.buffer[e + 1], this.to = i + r.buffer[e + 2], !0;
  }
  yield(e) {
    return e ? e instanceof zt ? (this.buffer = null, this.yieldNode(e)) : (this.buffer = e.context, this.yieldBuf(e.index, e.type)) : !1;
  }
  toString() {
    return this.buffer ? this.buffer.buffer.childString(this.index) : this._tree.toString();
  }
  enterChild(e, t, i) {
    if (!this.buffer)
      return this.yield(this._tree.nextChild(e < 0 ? this._tree._tree.children.length - 1 : 0, e, t, i, this.mode));
    let { buffer: r } = this.buffer, o = r.findChild(this.index + 4, r.buffer[this.index + 3], e, t - this.buffer.start, i);
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
  enter(e, t, i = this.mode) {
    return this.buffer ? i & Ee.ExcludeBuffers ? !1 : this.enterChild(1, e, t) : this.yield(this._tree.enter(e, t, i));
  }
  parent() {
    if (!this.buffer)
      return this.yieldNode(this.mode & Ee.IncludeAnonymous ? this._tree._parent : this._tree.parent);
    if (this.stack.length)
      return this.yieldBuf(this.stack.pop());
    let e = this.mode & Ee.IncludeAnonymous ? this.buffer.parent : this.buffer.parent.nextSignificantParent();
    return this.buffer = null, this.yieldNode(e);
  }
  sibling(e) {
    if (!this.buffer)
      return this._tree._parent ? this.yield(this._tree.index < 0 ? null : this._tree._parent.nextChild(this._tree.index + e, e, 0, 4, this.mode)) : !1;
    let { buffer: t } = this.buffer, i = this.stack.length - 1;
    if (e < 0) {
      let r = i < 0 ? 0 : this.stack[i] + 4;
      if (this.index != r)
        return this.yieldBuf(t.findChild(r, this.index, -1, 0, 4));
    } else {
      let r = t.buffer[this.index + 3];
      if (r < (i < 0 ? t.buffer.length : t.buffer[this.stack[i] + 3]))
        return this.yieldBuf(r);
    }
    return i < 0 ? this.yield(this.buffer.parent.nextChild(this.buffer.index + e, e, 0, 4, this.mode)) : !1;
  }
  nextSibling() {
    return this.sibling(1);
  }
  prevSibling() {
    return this.sibling(-1);
  }
  atLastNode(e) {
    let t, i, { buffer: r } = this;
    if (r) {
      if (e > 0) {
        if (this.index < r.buffer.buffer.length)
          return !1;
      } else
        for (let o = 0; o < this.index; o++)
          if (r.buffer.buffer[o + 3] < this.index)
            return !1;
      ({ index: t, parent: i } = r);
    } else
      ({ index: t, _parent: i } = this._tree);
    for (; i; { index: t, _parent: i } = i)
      if (t > -1)
        for (let o = t + e, s = e < 0 ? -1 : i._tree.children.length; o != s; o += e) {
          let l = i._tree.children[o];
          if (this.mode & Ee.IncludeAnonymous || l instanceof Fn || !l.type.isAnonymous || yc(l))
            return !1;
        }
    return !0;
  }
  move(e, t) {
    if (t && this.enterChild(e, 0, 4))
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
  moveTo(e, t = 0) {
    for (; (this.from == this.to || (t < 1 ? this.from >= e : this.from > e) || (t > -1 ? this.to <= e : this.to < e)) && this.parent(); )
      ;
    for (; this.enterChild(1, e, t); )
      ;
    return this;
  }
  get node() {
    if (!this.buffer)
      return this._tree;
    let e = this.bufferNode, t = null, i = 0;
    if (e && e.context == this.buffer) {
      e:
        for (let r = this.index, o = this.stack.length; o >= 0; ) {
          for (let s = e; s; s = s._parent)
            if (s.index == r) {
              if (r == this.index)
                return s;
              t = s, i = o + 1;
              break e;
            }
          r = this.stack[--o];
        }
    }
    for (let r = i; r < this.stack.length; r++)
      t = new en(this.buffer, t, this.stack[r]);
    return this.bufferNode = new en(this.buffer, t, this.index);
  }
  get tree() {
    return this.buffer ? null : this._tree._tree;
  }
  iterate(e, t) {
    for (let i = 0; ; ) {
      let r = !1;
      if (this.type.isAnonymous || e(this) !== !1) {
        if (this.firstChild()) {
          i++;
          continue;
        }
        this.type.isAnonymous || (r = !0);
      }
      for (; r && t && t(this), r = this.type.isAnonymous, !this.nextSibling(); ) {
        if (!i)
          return;
        this.parent(), i--, r = !0;
      }
    }
  }
  matchContext(e) {
    if (!this.buffer)
      return Bo(this.node, e);
    let { buffer: t } = this.buffer, { types: i } = t.set;
    for (let r = e.length - 1, o = this.stack.length - 1; r >= 0; o--) {
      if (o < 0)
        return Bo(this.node, e, r);
      let s = i[t.buffer[this.stack[o]]];
      if (!s.isAnonymous) {
        if (e[r] && e[r] != s.name)
          return !1;
        r--;
      }
    }
    return !0;
  }
}
function yc(n) {
  return n.children.some((e) => e instanceof Fn || !e.type.isAnonymous || yc(e));
}
function Ine(n) {
  var e;
  let { buffer: t, nodeSet: i, maxBufferLength: r = Mne, reused: o = [], minRepeatType: s = i.types.length } = n, l = Array.isArray(t) ? new bc(t, t.length) : t, a = i.types, c = 0, h = 0;
  function u(x, _, k, C, N) {
    let { id: L, start: D, end: H, size: Q } = l, G = h;
    for (; Q < 0; )
      if (l.next(), Q == -1) {
        let be = o[L];
        k.push(be), C.push(D - x);
        return;
      } else if (Q == -3) {
        c = L;
        return;
      } else if (Q == -4) {
        h = L;
        return;
      } else
        throw new RangeError(`Unrecognized record size: ${Q}`);
    let T = a[L], z, q, he = D - x;
    if (H - D <= r && (q = m(l.pos - _, N))) {
      let be = new Uint16Array(q.size - q.skip), oe = l.pos - q.size, ce = be.length;
      for (; l.pos > oe; )
        ce = g(q.start, be, ce);
      z = new Fn(be, H - q.start, i), he = q.start - x;
    } else {
      let be = l.pos - Q;
      l.next();
      let oe = [], ce = [], ut = L >= s ? L : -1, ne = 0, mn = H;
      for (; l.pos > be; )
        ut >= 0 && l.id == ut && l.size >= 0 ? (l.end <= mn - r && (d(oe, ce, D, ne, l.end, mn, ut, G), ne = oe.length, mn = l.end), l.next()) : u(D, be, oe, ce, ut);
      if (ut >= 0 && ne > 0 && ne < oe.length && d(oe, ce, D, ne, D, mn, ut, G), oe.reverse(), ce.reverse(), ut > -1 && ne > 0) {
        let ue = f(T);
        z = vc(T, oe, ce, 0, oe.length, 0, H - D, ue, ue);
      } else
        z = p(T, oe, ce, H - D, G - H);
    }
    k.push(z), C.push(he);
  }
  function f(x) {
    return (_, k, C) => {
      let N = 0, L = _.length - 1, D, H;
      if (L >= 0 && (D = _[L]) instanceof Ie) {
        if (!L && D.type == x && D.length == C)
          return D;
        (H = D.prop(j.lookAhead)) && (N = k[L] + D.length + H);
      }
      return p(x, _, k, C, N);
    };
  }
  function d(x, _, k, C, N, L, D, H) {
    let Q = [], G = [];
    for (; x.length > C; )
      Q.push(x.pop()), G.push(_.pop() + k - N);
    x.push(p(i.types[D], Q, G, L - N, H - L)), _.push(N - k);
  }
  function p(x, _, k, C, N = 0, L) {
    if (c) {
      let D = [j.contextHash, c];
      L = L ? [D].concat(L) : [D];
    }
    if (N > 25) {
      let D = [j.lookAhead, N];
      L = L ? [D].concat(L) : [D];
    }
    return new Ie(x, _, k, C, L);
  }
  function m(x, _) {
    let k = l.fork(), C = 0, N = 0, L = 0, D = k.end - r, H = { size: 0, start: 0, skip: 0 };
    e:
      for (let Q = k.pos - x; k.pos > Q; ) {
        let G = k.size;
        if (k.id == _ && G >= 0) {
          H.size = C, H.start = N, H.skip = L, L += 4, C += 4, k.next();
          continue;
        }
        let T = k.pos - G;
        if (G < 0 || T < Q || k.start < D)
          break;
        let z = k.id >= s ? 4 : 0, q = k.start;
        for (k.next(); k.pos > T; ) {
          if (k.size < 0)
            if (k.size == -3)
              z += 4;
            else
              break e;
          else
            k.id >= s && (z += 4);
          k.next();
        }
        N = q, C += G, L += z;
      }
    return (_ < 0 || C == x) && (H.size = C, H.start = N, H.skip = L), H.size > 4 ? H : void 0;
  }
  function g(x, _, k) {
    let { id: C, start: N, end: L, size: D } = l;
    if (l.next(), D >= 0 && C < s) {
      let H = k;
      if (D > 4) {
        let Q = l.pos - (D - 4);
        for (; l.pos > Q; )
          k = g(x, _, k);
      }
      _[--k] = H, _[--k] = L - x, _[--k] = N - x, _[--k] = C;
    } else
      D == -3 ? c = C : D == -4 && (h = C);
    return k;
  }
  let b = [], y = [];
  for (; l.pos > 0; )
    u(n.start || 0, n.bufferStart || 0, b, y, -1);
  let w = (e = n.length) !== null && e !== void 0 ? e : b.length ? y[0] + b[0].length : 0;
  return new Ie(a[n.topID], b.reverse(), y.reverse(), w);
}
const Cf = /* @__PURE__ */ new WeakMap();
function co(n, e) {
  if (!n.isAnonymous || e instanceof Fn || e.type != n)
    return 1;
  let t = Cf.get(e);
  if (t == null) {
    t = 1;
    for (let i of e.children) {
      if (i.type != n || !(i instanceof Ie)) {
        t = 1;
        break;
      }
      t += co(n, i);
    }
    Cf.set(e, t);
  }
  return t;
}
function vc(n, e, t, i, r, o, s, l, a) {
  let c = 0;
  for (let p = i; p < r; p++)
    c += co(n, e[p]);
  let h = Math.ceil(c * 1.5 / 8), u = [], f = [];
  function d(p, m, g, b, y) {
    for (let w = g; w < b; ) {
      let x = w, _ = m[w], k = co(n, p[w]);
      for (w++; w < b; w++) {
        let C = co(n, p[w]);
        if (k + C >= h)
          break;
        k += C;
      }
      if (w == x + 1) {
        if (k > h) {
          let C = p[x];
          d(C.children, C.positions, 0, C.children.length, m[x] + y);
          continue;
        }
        u.push(p[x]);
      } else {
        let C = m[w - 1] + p[w - 1].length - _;
        u.push(vc(n, p, m, x, w, _, C, null, a));
      }
      f.push(_ + y - o);
    }
  }
  return d(e, t, i, r, 0), (l || a)(u, f, s);
}
class Mn {
  constructor(e, t, i, r, o = !1, s = !1) {
    this.from = e, this.to = t, this.tree = i, this.offset = r, this.open = (o ? 1 : 0) | (s ? 2 : 0);
  }
  get openStart() {
    return (this.open & 1) > 0;
  }
  get openEnd() {
    return (this.open & 2) > 0;
  }
  static addTree(e, t = [], i = !1) {
    let r = [new Mn(0, e.length, e, 0, !1, i)];
    for (let o of t)
      o.to > e.length && r.push(o);
    return r;
  }
  static applyChanges(e, t, i = 128) {
    if (!t.length)
      return e;
    let r = [], o = 1, s = e.length ? e[0] : null;
    for (let l = 0, a = 0, c = 0; ; l++) {
      let h = l < t.length ? t[l] : null, u = h ? h.fromA : 1e9;
      if (u - a >= i)
        for (; s && s.from < u; ) {
          let f = s;
          if (a >= f.from || u <= f.to || c) {
            let d = Math.max(f.from, a) - c, p = Math.min(f.to, u) - c;
            f = d >= p ? null : new Mn(d, p, f.tree, f.offset + c, l > 0, !!h);
          }
          if (f && r.push(f), s.to > u)
            break;
          s = o < e.length ? e[o++] : null;
        }
      if (!h)
        break;
      a = h.toA, c = h.toA - h.toB;
    }
    return r;
  }
}
class Bne {
  startParse(e, t, i) {
    return typeof e == "string" && (e = new Nne(e)), i = i ? i.length ? i.map((r) => new yl(r.from, r.to)) : [new yl(0, 0)] : [new yl(0, e.length)], this.createParse(e, t || [], i);
  }
  parse(e, t, i) {
    let r = this.startParse(e, t, i);
    for (; ; ) {
      let o = r.advance();
      if (o)
        return o;
    }
  }
}
class Nne {
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
  read(e, t) {
    return this.string.slice(e, t);
  }
}
new j({ perNode: !0 });
let Pne = 0;
class _t {
  constructor(e, t, i) {
    this.set = e, this.base = t, this.modified = i, this.id = Pne++;
  }
  static define(e) {
    if (e != null && e.base)
      throw new Error("Can not derive from a modified tag");
    let t = new _t([], null, []);
    if (t.set.push(t), e)
      for (let i of e.set)
        t.set.push(i);
    return t;
  }
  static defineModifier() {
    let e = new Po();
    return (t) => t.modified.indexOf(e) > -1 ? t : Po.get(t.base || t, t.modified.concat(e).sort((i, r) => i.id - r.id));
  }
}
let Fne = 0;
class Po {
  constructor() {
    this.instances = [], this.id = Fne++;
  }
  static get(e, t) {
    if (!t.length)
      return e;
    let i = t[0].instances.find((l) => l.base == e && qne(t, l.modified));
    if (i)
      return i;
    let r = [], o = new _t(r, e, t);
    for (let l of t)
      l.instances.push(o);
    let s = Hne(t);
    for (let l of e.set)
      if (!l.modified.length)
        for (let a of s)
          r.push(Po.get(l, a));
    return o;
  }
}
function qne(n, e) {
  return n.length == e.length && n.every((t, i) => t == e[i]);
}
function Hne(n) {
  let e = [[]];
  for (let t = 0; t < n.length; t++)
    for (let i = 0, r = e.length; i < r; i++)
      e.push(e[i].concat(n[t]));
  return e.sort((t, i) => i.length - t.length);
}
function zne(n) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let t in n) {
    let i = n[t];
    Array.isArray(i) || (i = [i]);
    for (let r of t.split(" "))
      if (r) {
        let o = [], s = 2, l = r;
        for (let u = 0; ; ) {
          if (l == "..." && u > 0 && u + 3 == r.length) {
            s = 1;
            break;
          }
          let f = /^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(l);
          if (!f)
            throw new RangeError("Invalid path: " + r);
          if (o.push(f[0] == "*" ? "" : f[0][0] == '"' ? JSON.parse(f[0]) : f[0]), u += f[0].length, u == r.length)
            break;
          let d = r[u++];
          if (u == r.length && d == "!") {
            s = 0;
            break;
          }
          if (d != "/")
            throw new RangeError("Invalid path: " + r);
          l = r.slice(u);
        }
        let a = o.length - 1, c = o[a];
        if (!c)
          throw new RangeError("Invalid path: " + r);
        let h = new Fo(i, s, a > 0 ? o.slice(0, a) : null);
        e[c] = h.sort(e[c]);
      }
  }
  return cg.add(e);
}
const cg = new j();
class Fo {
  constructor(e, t, i, r) {
    this.tags = e, this.mode = t, this.context = i, this.next = r;
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
Fo.empty = new Fo([], 2, null);
function hg(n, e) {
  let t = /* @__PURE__ */ Object.create(null);
  for (let o of n)
    if (!Array.isArray(o.tag))
      t[o.tag.id] = o.class;
    else
      for (let s of o.tag)
        t[s.id] = o.class;
  let { scope: i, all: r = null } = e || {};
  return {
    style: (o) => {
      let s = r;
      for (let l of o)
        for (let a of l.set) {
          let c = t[a.id];
          if (c) {
            s = s ? s + " " + c : c;
            break;
          }
        }
      return s;
    },
    scope: i
  };
}
function $ne(n, e) {
  let t = null;
  for (let i of n) {
    let r = i.style(e);
    r && (t = t ? t + " " + r : r);
  }
  return t;
}
function Vne(n, e, t, i = 0, r = n.length) {
  let o = new Une(i, Array.isArray(e) ? e : [e], t);
  o.highlightRange(n.cursor(), i, r, "", o.highlighters), o.flush(r);
}
class Une {
  constructor(e, t, i) {
    this.at = e, this.highlighters = t, this.span = i, this.class = "";
  }
  startSpan(e, t) {
    t != this.class && (this.flush(e), e > this.at && (this.at = e), this.class = t);
  }
  flush(e) {
    e > this.at && this.class && this.span(this.at, e, this.class);
  }
  highlightRange(e, t, i, r, o) {
    let { type: s, from: l, to: a } = e;
    if (l >= i || a <= t)
      return;
    s.isTop && (o = this.highlighters.filter((d) => !d.scope || d.scope(s)));
    let c = r, h = Wne(e) || Fo.empty, u = $ne(o, h.tags);
    if (u && (c && (c += " "), c += u, h.mode == 1 && (r += (r ? " " : "") + u)), this.startSpan(Math.max(t, l), c), h.opaque)
      return;
    let f = e.tree && e.tree.prop(j.mounted);
    if (f && f.overlay) {
      let d = e.node.enter(f.overlay[0].from + l, 1), p = this.highlighters.filter((g) => !g.scope || g.scope(f.tree.type)), m = e.firstChild();
      for (let g = 0, b = l; ; g++) {
        let y = g < f.overlay.length ? f.overlay[g] : null, w = y ? y.from + l : a, x = Math.max(t, b), _ = Math.min(i, w);
        if (x < _ && m)
          for (; e.from < _ && (this.highlightRange(e, x, _, r, o), this.startSpan(Math.min(_, e.to), c), !(e.to >= w || !e.nextSibling())); )
            ;
        if (!y || w > i)
          break;
        b = y.to + l, b > t && (this.highlightRange(d.cursor(), Math.max(t, y.from + l), Math.min(i, b), "", p), this.startSpan(Math.min(i, b), c));
      }
      m && e.parent();
    } else if (e.firstChild()) {
      f && (r = "");
      do
        if (!(e.to <= t)) {
          if (e.from >= i)
            break;
          this.highlightRange(e, t, i, r, o), this.startSpan(Math.min(i, e.to), c);
        }
      while (e.nextSibling());
      e.parent();
    }
  }
}
function Wne(n) {
  let e = n.type.prop(cg);
  for (; e && e.context && !n.matchContext(e.context); )
    e = e.next;
  return e || null;
}
const E = _t.define, zr = E(), Gt = E(), Sf = E(Gt), Tf = E(Gt), Kt = E(), $r = E(Kt), vl = E(Kt), kt = E(), xn = E(kt), vt = E(), xt = E(), _a = E(), Di = E(_a), Vr = E(), O = {
  comment: zr,
  lineComment: E(zr),
  blockComment: E(zr),
  docComment: E(zr),
  name: Gt,
  variableName: E(Gt),
  typeName: Sf,
  tagName: E(Sf),
  propertyName: Tf,
  attributeName: E(Tf),
  className: E(Gt),
  labelName: E(Gt),
  namespace: E(Gt),
  macroName: E(Gt),
  literal: Kt,
  string: $r,
  docString: E($r),
  character: E($r),
  attributeValue: E($r),
  number: vl,
  integer: E(vl),
  float: E(vl),
  bool: E(Kt),
  regexp: E(Kt),
  escape: E(Kt),
  color: E(Kt),
  url: E(Kt),
  keyword: vt,
  self: E(vt),
  null: E(vt),
  atom: E(vt),
  unit: E(vt),
  modifier: E(vt),
  operatorKeyword: E(vt),
  controlKeyword: E(vt),
  definitionKeyword: E(vt),
  moduleKeyword: E(vt),
  operator: xt,
  derefOperator: E(xt),
  arithmeticOperator: E(xt),
  logicOperator: E(xt),
  bitwiseOperator: E(xt),
  compareOperator: E(xt),
  updateOperator: E(xt),
  definitionOperator: E(xt),
  typeOperator: E(xt),
  controlOperator: E(xt),
  punctuation: _a,
  separator: E(_a),
  bracket: Di,
  angleBracket: E(Di),
  squareBracket: E(Di),
  paren: E(Di),
  brace: E(Di),
  content: kt,
  heading: xn,
  heading1: E(xn),
  heading2: E(xn),
  heading3: E(xn),
  heading4: E(xn),
  heading5: E(xn),
  heading6: E(xn),
  contentSeparator: E(kt),
  list: E(kt),
  quote: E(kt),
  emphasis: E(kt),
  strong: E(kt),
  link: E(kt),
  monospace: E(kt),
  strikethrough: E(kt),
  inserted: E(),
  deleted: E(),
  changed: E(),
  invalid: E(),
  meta: Vr,
  documentMeta: E(Vr),
  annotation: E(Vr),
  processingInstruction: E(Vr),
  definition: _t.defineModifier(),
  constant: _t.defineModifier(),
  function: _t.defineModifier(),
  standard: _t.defineModifier(),
  local: _t.defineModifier(),
  special: _t.defineModifier()
};
hg([
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
var xl;
const Pi = /* @__PURE__ */ new j(), jne = /* @__PURE__ */ new j();
class Et {
  constructor(e, t, i = [], r = "") {
    this.data = e, this.name = r, K.prototype.hasOwnProperty("tree") || Object.defineProperty(K.prototype, "tree", { get() {
      return Be(this);
    } }), this.parser = t, this.extension = [
      fn.of(this),
      K.languageData.of((o, s, l) => {
        let a = Ef(o, s, l), c = a.type.prop(Pi);
        if (!c)
          return [];
        let h = o.facet(c), u = a.type.prop(jne);
        if (u) {
          let f = a.resolve(s - a.from, l);
          for (let d of u)
            if (d.test(f, o)) {
              let p = o.facet(d.facet);
              return d.type == "replace" ? p : p.concat(h);
            }
        }
        return h;
      })
    ].concat(i);
  }
  isActiveAt(e, t, i = -1) {
    return Ef(e, t, i).type.prop(Pi) == this.data;
  }
  findRegions(e) {
    let t = e.facet(fn);
    if ((t == null ? void 0 : t.data) == this.data)
      return [{ from: 0, to: e.doc.length }];
    if (!t || !t.allowsNesting)
      return [];
    let i = [], r = (o, s) => {
      if (o.prop(Pi) == this.data) {
        i.push({ from: s, to: s + o.length });
        return;
      }
      let l = o.prop(j.mounted);
      if (l) {
        if (l.tree.prop(Pi) == this.data) {
          if (l.overlay)
            for (let a of l.overlay)
              i.push({ from: a.from + s, to: a.to + s });
          else
            i.push({ from: s, to: s + o.length });
          return;
        } else if (l.overlay) {
          let a = i.length;
          if (r(l.tree, l.overlay[0].from + s), i.length > a)
            return;
        }
      }
      for (let a = 0; a < o.children.length; a++) {
        let c = o.children[a];
        c instanceof Ie && r(c, o.positions[a] + s);
      }
    };
    return r(Be(e), 0), i;
  }
  get allowsNesting() {
    return !0;
  }
}
Et.setState = /* @__PURE__ */ W.define();
function Ef(n, e, t) {
  let i = n.facet(fn), r = Be(n).topNode;
  if (!i || i.allowsNesting)
    for (let o = r; o; o = o.enter(e, t, Ee.ExcludeBuffers))
      o.type.isTop && (r = o);
  return r;
}
function Be(n) {
  let e = n.field(Et.state, !1);
  return e ? e.tree : Ie.empty;
}
class Gne {
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
  read(e, t) {
    let i = this.cursorPos - this.string.length;
    return e < i || t >= this.cursorPos ? this.doc.sliceString(e, t) : this.string.slice(e - i, t - i);
  }
}
let Mi = null;
class qo {
  constructor(e, t, i = [], r, o, s, l, a) {
    this.parser = e, this.state = t, this.fragments = i, this.tree = r, this.treeLen = o, this.viewport = s, this.skipped = l, this.scheduleOn = a, this.parse = null, this.tempSkipped = [];
  }
  static create(e, t, i) {
    return new qo(e, t, [], Ie.empty, 0, i, [], null);
  }
  startParse() {
    return this.parser.startParse(new Gne(this.state.doc), this.fragments);
  }
  work(e, t) {
    return t != null && t >= this.state.doc.length && (t = void 0), this.tree != Ie.empty && this.isDone(t != null ? t : this.state.doc.length) ? (this.takeTree(), !0) : this.withContext(() => {
      var i;
      if (typeof e == "number") {
        let r = Date.now() + e;
        e = () => Date.now() > r;
      }
      for (this.parse || (this.parse = this.startParse()), t != null && (this.parse.stoppedAt == null || this.parse.stoppedAt > t) && t < this.state.doc.length && this.parse.stopAt(t); ; ) {
        let r = this.parse.advance();
        if (r)
          if (this.fragments = this.withoutTempSkipped(Mn.addTree(r, this.fragments, this.parse.stoppedAt != null)), this.treeLen = (i = this.parse.stoppedAt) !== null && i !== void 0 ? i : this.state.doc.length, this.tree = r, this.parse = null, this.treeLen < (t != null ? t : this.state.doc.length))
            this.parse = this.startParse();
          else
            return !0;
        if (e())
          return !1;
      }
    });
  }
  takeTree() {
    let e, t;
    this.parse && (e = this.parse.parsedPos) >= this.treeLen && ((this.parse.stoppedAt == null || this.parse.stoppedAt > e) && this.parse.stopAt(e), this.withContext(() => {
      for (; !(t = this.parse.advance()); )
        ;
    }), this.treeLen = e, this.tree = t, this.fragments = this.withoutTempSkipped(Mn.addTree(this.tree, this.fragments, !0)), this.parse = null);
  }
  withContext(e) {
    let t = Mi;
    Mi = this;
    try {
      return e();
    } finally {
      Mi = t;
    }
  }
  withoutTempSkipped(e) {
    for (let t; t = this.tempSkipped.pop(); )
      e = Df(e, t.from, t.to);
    return e;
  }
  changes(e, t) {
    let { fragments: i, tree: r, treeLen: o, viewport: s, skipped: l } = this;
    if (this.takeTree(), !e.empty) {
      let a = [];
      if (e.iterChangedRanges((c, h, u, f) => a.push({ fromA: c, toA: h, fromB: u, toB: f })), i = Mn.applyChanges(i, a), r = Ie.empty, o = 0, s = { from: e.mapPos(s.from, -1), to: e.mapPos(s.to, 1) }, this.skipped.length) {
        l = [];
        for (let c of this.skipped) {
          let h = e.mapPos(c.from, 1), u = e.mapPos(c.to, -1);
          h < u && l.push({ from: h, to: u });
        }
      }
    }
    return new qo(this.parser, t, i, r, o, s, l, this.scheduleOn);
  }
  updateViewport(e) {
    if (this.viewport.from == e.from && this.viewport.to == e.to)
      return !1;
    this.viewport = e;
    let t = this.skipped.length;
    for (let i = 0; i < this.skipped.length; i++) {
      let { from: r, to: o } = this.skipped[i];
      r < e.to && o > e.from && (this.fragments = Df(this.fragments, r, o), this.skipped.splice(i--, 1));
    }
    return this.skipped.length >= t ? !1 : (this.reset(), !0);
  }
  reset() {
    this.parse && (this.takeTree(), this.parse = null);
  }
  skipUntilInView(e, t) {
    this.skipped.push({ from: e, to: t });
  }
  static getSkippingParser(e) {
    return new class extends Bne {
      createParse(t, i, r) {
        let o = r[0].from, s = r[r.length - 1].to;
        return {
          parsedPos: o,
          advance() {
            let a = Mi;
            if (a) {
              for (let c of r)
                a.tempSkipped.push(c);
              e && (a.scheduleOn = a.scheduleOn ? Promise.all([a.scheduleOn, e]) : e);
            }
            return this.parsedPos = s, new Ie(ct.none, [], [], s - o);
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
    let t = this.fragments;
    return this.treeLen >= e && t.length && t[0].from == 0 && t[0].to >= e;
  }
  static get() {
    return Mi;
  }
}
function Df(n, e, t) {
  return Mn.applyChanges(n, [{ fromA: e, toA: t, fromB: e, toB: t }]);
}
class di {
  constructor(e) {
    this.context = e, this.tree = e.tree;
  }
  apply(e) {
    if (!e.docChanged && this.tree == this.context.tree)
      return this;
    let t = this.context.changes(e.changes, e.state), i = this.context.treeLen == e.startState.doc.length ? void 0 : Math.max(e.changes.mapPos(this.context.treeLen), t.viewport.to);
    return t.work(20, i) || t.takeTree(), new di(t);
  }
  static init(e) {
    let t = Math.min(3e3, e.doc.length), i = qo.create(e.facet(fn).parser, e, { from: 0, to: t });
    return i.work(20, t) || i.takeTree(), new di(i);
  }
}
Et.state = /* @__PURE__ */ Me.define({
  create: di.init,
  update(n, e) {
    for (let t of e.effects)
      if (t.is(Et.setState))
        return t.value;
    return e.startState.facet(fn) != e.state.facet(fn) ? di.init(e.state) : n.apply(e);
  }
});
let ug = (n) => {
  let e = setTimeout(() => n(), 500);
  return () => clearTimeout(e);
};
typeof requestIdleCallback < "u" && (ug = (n) => {
  let e = -1, t = setTimeout(() => {
    e = requestIdleCallback(n, { timeout: 500 - 100 });
  }, 100);
  return () => e < 0 ? clearTimeout(t) : cancelIdleCallback(e);
});
const kl = typeof navigator < "u" && ((xl = navigator.scheduling) === null || xl === void 0 ? void 0 : xl.isInputPending) ? () => navigator.scheduling.isInputPending() : null, Kne = /* @__PURE__ */ ke.fromClass(class {
  constructor(e) {
    this.view = e, this.working = null, this.workScheduled = 0, this.chunkEnd = -1, this.chunkBudget = -1, this.work = this.work.bind(this), this.scheduleWork();
  }
  update(e) {
    let t = this.view.state.field(Et.state).context;
    (t.updateViewport(e.view.viewport) || this.view.viewport.to > t.treeLen) && this.scheduleWork(), e.docChanged && (this.view.hasFocus && (this.chunkBudget += 50), this.scheduleWork()), this.checkAsyncSchedule(t);
  }
  scheduleWork() {
    if (this.working)
      return;
    let { state: e } = this.view, t = e.field(Et.state);
    (t.tree != t.context.tree || !t.context.isDone(e.doc.length)) && (this.working = ug(this.work));
  }
  work(e) {
    this.working = null;
    let t = Date.now();
    if (this.chunkEnd < t && (this.chunkEnd < 0 || this.view.hasFocus) && (this.chunkEnd = t + 3e4, this.chunkBudget = 3e3), this.chunkBudget <= 0)
      return;
    let { state: i, viewport: { to: r } } = this.view, o = i.field(Et.state);
    if (o.tree == o.context.tree && o.context.isDone(r + 1e5))
      return;
    let s = Date.now() + Math.min(this.chunkBudget, 100, e && !kl ? Math.max(25, e.timeRemaining() - 5) : 1e9), l = o.context.treeLen < r && i.doc.length > r + 1e3, a = o.context.work(() => kl && kl() || Date.now() > s, r + (l ? 0 : 1e5));
    this.chunkBudget -= Date.now() - t, (a || this.chunkBudget <= 0) && (o.context.takeTree(), this.view.dispatch({ effects: Et.setState.of(new di(o.context)) })), this.chunkBudget > 0 && !(a && !l) && this.scheduleWork(), this.checkAsyncSchedule(o.context);
  }
  checkAsyncSchedule(e) {
    e.scheduleOn && (this.workScheduled++, e.scheduleOn.then(() => this.scheduleWork()).catch((t) => rt(this.view.state, t)).then(() => this.workScheduled--), e.scheduleOn = null);
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
}), fn = /* @__PURE__ */ B.define({
  combine(n) {
    return n.length ? n[0] : null;
  },
  enables: (n) => [
    Et.state,
    Kne,
    I.contentAttributes.compute([n], (e) => {
      let t = e.facet(n);
      return t && t.name ? { "data-language": t.name } : {};
    })
  ]
}), Yne = /* @__PURE__ */ B.define(), xc = /* @__PURE__ */ B.define({
  combine: (n) => {
    if (!n.length)
      return "  ";
    let e = n[0];
    if (!e || /\S/.test(e) || Array.from(e).some((t) => t != e[0]))
      throw new Error("Invalid indent unit: " + JSON.stringify(n[0]));
    return e;
  }
});
function Ho(n) {
  let e = n.facet(xc);
  return e.charCodeAt(0) == 9 ? n.tabSize * e.length : e.length;
}
function or(n, e) {
  let t = "", i = n.tabSize, r = n.facet(xc)[0];
  if (r == "	") {
    for (; e >= i; )
      t += "	", e -= i;
    r = " ";
  }
  for (let o = 0; o < e; o++)
    t += r;
  return t;
}
function kc(n, e) {
  n instanceof K && (n = new ps(n));
  for (let i of n.state.facet(Yne)) {
    let r = i(n, e);
    if (r !== void 0)
      return r;
  }
  let t = Be(n.state);
  return t ? Zne(n, t, e) : null;
}
class ps {
  constructor(e, t = {}) {
    this.state = e, this.options = t, this.unit = Ho(e);
  }
  lineAt(e, t = 1) {
    let i = this.state.doc.lineAt(e), { simulateBreak: r, simulateDoubleBreak: o } = this.options;
    return r != null && r >= i.from && r <= i.to ? o && r == e ? { text: "", from: e } : (t < 0 ? r < e : r <= e) ? { text: i.text.slice(r - i.from), from: r } : { text: i.text.slice(0, r - i.from), from: i.from } : i;
  }
  textAfterPos(e, t = 1) {
    if (this.options.simulateDoubleBreak && e == this.options.simulateBreak)
      return "";
    let { text: i, from: r } = this.lineAt(e, t);
    return i.slice(e - r, Math.min(i.length, e + 100 - r));
  }
  column(e, t = 1) {
    let { text: i, from: r } = this.lineAt(e, t), o = this.countColumn(i, e - r), s = this.options.overrideIndentation ? this.options.overrideIndentation(r) : -1;
    return s > -1 && (o += s - this.countColumn(i, i.search(/\S|$/))), o;
  }
  countColumn(e, t = e.length) {
    return ur(e, this.state.tabSize, t);
  }
  lineIndent(e, t = 1) {
    let { text: i, from: r } = this.lineAt(e, t), o = this.options.overrideIndentation;
    if (o) {
      let s = o(r);
      if (s > -1)
        return s;
    }
    return this.countColumn(i, i.search(/\S|$/));
  }
  get simulatedBreak() {
    return this.options.simulateBreak || null;
  }
}
const Jne = /* @__PURE__ */ new j();
function Zne(n, e, t) {
  return fg(e.resolveInner(t).enterUnfinishedNodesBefore(t), t, n);
}
function Xne(n) {
  return n.pos == n.options.simulateBreak && n.options.simulateDoubleBreak;
}
function Qne(n) {
  let e = n.type.prop(Jne);
  if (e)
    return e;
  let t = n.firstChild, i;
  if (t && (i = t.type.prop(j.closedBy))) {
    let r = n.lastChild, o = r && i.indexOf(r.name) > -1;
    return (s) => iie(s, !0, 1, void 0, o && !Xne(s) ? r.from : void 0);
  }
  return n.parent == null ? eie : null;
}
function fg(n, e, t) {
  for (; n; n = n.parent) {
    let i = Qne(n);
    if (i)
      return i(wc.create(t, e, n));
  }
  return null;
}
function eie() {
  return 0;
}
class wc extends ps {
  constructor(e, t, i) {
    super(e.state, e.options), this.base = e, this.pos = t, this.node = i;
  }
  static create(e, t, i) {
    return new wc(e, t, i);
  }
  get textAfter() {
    return this.textAfterPos(this.pos);
  }
  get baseIndent() {
    return this.baseIndentFor(this.node);
  }
  baseIndentFor(e) {
    let t = this.state.doc.lineAt(e.from);
    for (; ; ) {
      let i = e.resolve(t.from);
      for (; i.parent && i.parent.from == i.from; )
        i = i.parent;
      if (tie(i, e))
        break;
      t = this.state.doc.lineAt(i.from);
    }
    return this.lineIndent(t.from);
  }
  continue() {
    let e = this.node.parent;
    return e ? fg(e, this.pos, this.base) : 0;
  }
}
function tie(n, e) {
  for (let t = e; t; t = t.parent)
    if (n == t)
      return !0;
  return !1;
}
function nie(n) {
  let e = n.node, t = e.childAfter(e.from), i = e.lastChild;
  if (!t)
    return null;
  let r = n.options.simulateBreak, o = n.state.doc.lineAt(t.from), s = r == null || r <= o.from ? o.to : Math.min(o.to, r);
  for (let l = t.to; ; ) {
    let a = e.childAfter(l);
    if (!a || a == i)
      return null;
    if (!a.type.isSkipped)
      return a.from < s ? t : null;
    l = a.to;
  }
}
function iie(n, e, t, i, r) {
  let o = n.textAfter, s = o.match(/^\s*/)[0].length, l = i && o.slice(s, s + i.length) == i || r == n.pos + s, a = e ? nie(n) : null;
  return a ? l ? n.column(a.from) : n.column(a.to) : n.baseIndent + (l ? 0 : n.unit * t);
}
const rie = 200;
function oie() {
  return K.transactionFilter.of((n) => {
    if (!n.docChanged || !n.isUserEvent("input.type") && !n.isUserEvent("input.complete"))
      return n;
    let e = n.startState.languageDataAt("indentOnInput", n.startState.selection.main.head);
    if (!e.length)
      return n;
    let t = n.newDoc, { head: i } = n.newSelection.main, r = t.lineAt(i);
    if (i > r.from + rie)
      return n;
    let o = t.sliceString(r.from, i);
    if (!e.some((c) => c.test(o)))
      return n;
    let { state: s } = n, l = -1, a = [];
    for (let { head: c } of s.selection.ranges) {
      let h = s.doc.lineAt(c);
      if (h.from == l)
        continue;
      l = h.from;
      let u = kc(s, h.from);
      if (u == null)
        continue;
      let f = /^\s*/.exec(h.text)[0], d = or(s, u);
      f != d && a.push({ from: h.from, to: h.from + f.length, insert: d });
    }
    return a.length ? [n, { changes: a, sequential: !0 }] : n;
  });
}
const sie = /* @__PURE__ */ B.define(), lie = /* @__PURE__ */ new j();
function aie(n, e, t) {
  let i = Be(n);
  if (i.length < t)
    return null;
  let r = i.resolveInner(t, 1), o = null;
  for (let s = r; s; s = s.parent) {
    if (s.to <= t || s.from > t)
      continue;
    if (o && s.from < e)
      break;
    let l = s.type.prop(lie);
    if (l && (s.to < i.length - 50 || i.length == n.doc.length || !cie(s))) {
      let a = l(s, n);
      a && a.from <= t && a.from >= e && a.to > t && (o = a);
    }
  }
  return o;
}
function cie(n) {
  let e = n.lastChild;
  return e && e.to == n.to && e.type.isError;
}
function zo(n, e, t) {
  for (let i of n.facet(sie)) {
    let r = i(n, e, t);
    if (r)
      return r;
  }
  return aie(n, e, t);
}
function dg(n, e) {
  let t = e.mapPos(n.from, 1), i = e.mapPos(n.to, -1);
  return t >= i ? void 0 : { from: t, to: i };
}
const ms = /* @__PURE__ */ W.define({ map: dg }), mr = /* @__PURE__ */ W.define({ map: dg });
function pg(n) {
  let e = [];
  for (let { head: t } of n.state.selection.ranges)
    e.some((i) => i.from <= t && i.to >= t) || e.push(n.lineBlockAt(t));
  return e;
}
const Bn = /* @__PURE__ */ Me.define({
  create() {
    return $.none;
  },
  update(n, e) {
    n = n.map(e.changes);
    for (let t of e.effects)
      t.is(ms) && !hie(n, t.value.from, t.value.to) ? n = n.update({ add: [Mf.range(t.value.from, t.value.to)] }) : t.is(mr) && (n = n.update({
        filter: (i, r) => t.value.from != i || t.value.to != r,
        filterFrom: t.value.from,
        filterTo: t.value.to
      }));
    if (e.selection) {
      let t = !1, { head: i } = e.selection.main;
      n.between(i, i, (r, o) => {
        r < i && o > i && (t = !0);
      }), t && (n = n.update({
        filterFrom: i,
        filterTo: i,
        filter: (r, o) => o <= i || r >= i
      }));
    }
    return n;
  },
  provide: (n) => I.decorations.from(n),
  toJSON(n, e) {
    let t = [];
    return n.between(0, e.doc.length, (i, r) => {
      t.push(i, r);
    }), t;
  },
  fromJSON(n) {
    if (!Array.isArray(n) || n.length % 2)
      throw new RangeError("Invalid JSON for fold state");
    let e = [];
    for (let t = 0; t < n.length; ) {
      let i = n[t++], r = n[t++];
      if (typeof i != "number" || typeof r != "number")
        throw new RangeError("Invalid JSON for fold state");
      e.push(Mf.range(i, r));
    }
    return $.set(e, !0);
  }
});
function $o(n, e, t) {
  var i;
  let r = null;
  return (i = n.field(Bn, !1)) === null || i === void 0 || i.between(e, t, (o, s) => {
    (!r || r.from > o) && (r = { from: o, to: s });
  }), r;
}
function hie(n, e, t) {
  let i = !1;
  return n.between(e, e, (r, o) => {
    r == e && o == t && (i = !0);
  }), i;
}
function mg(n, e) {
  return n.field(Bn, !1) ? e : e.concat(W.appendConfig.of(yg()));
}
const uie = (n) => {
  for (let e of pg(n)) {
    let t = zo(n.state, e.from, e.to);
    if (t)
      return n.dispatch({ effects: mg(n.state, [ms.of(t), gg(n, t)]) }), !0;
  }
  return !1;
}, fie = (n) => {
  if (!n.state.field(Bn, !1))
    return !1;
  let e = [];
  for (let t of pg(n)) {
    let i = $o(n.state, t.from, t.to);
    i && e.push(mr.of(i), gg(n, i, !1));
  }
  return e.length && n.dispatch({ effects: e }), e.length > 0;
};
function gg(n, e, t = !0) {
  let i = n.state.doc.lineAt(e.from).number, r = n.state.doc.lineAt(e.to).number;
  return I.announce.of(`${n.state.phrase(t ? "Folded lines" : "Unfolded lines")} ${i} ${n.state.phrase("to")} ${r}.`);
}
const die = (n) => {
  let { state: e } = n, t = [];
  for (let i = 0; i < e.doc.length; ) {
    let r = n.lineBlockAt(i), o = zo(e, r.from, r.to);
    o && t.push(ms.of(o)), i = (o ? n.lineBlockAt(o.to) : r).to + 1;
  }
  return t.length && n.dispatch({ effects: mg(n.state, t) }), !!t.length;
}, pie = (n) => {
  let e = n.state.field(Bn, !1);
  if (!e || !e.size)
    return !1;
  let t = [];
  return e.between(0, n.state.doc.length, (i, r) => {
    t.push(mr.of({ from: i, to: r }));
  }), n.dispatch({ effects: t }), !0;
}, mie = [
  { key: "Ctrl-Shift-[", mac: "Cmd-Alt-[", run: uie },
  { key: "Ctrl-Shift-]", mac: "Cmd-Alt-]", run: fie },
  { key: "Ctrl-Alt-[", run: die },
  { key: "Ctrl-Alt-]", run: pie }
], gie = {
  placeholderDOM: null,
  placeholderText: "\u2026"
}, bg = /* @__PURE__ */ B.define({
  combine(n) {
    return Nt(n, gie);
  }
});
function yg(n) {
  let e = [Bn, vie];
  return n && e.push(bg.of(n)), e;
}
const Mf = /* @__PURE__ */ $.replace({ widget: /* @__PURE__ */ new class extends Pn {
  toDOM(n) {
    let { state: e } = n, t = e.facet(bg), i = (o) => {
      let s = n.lineBlockAt(n.posAtDOM(o.target)), l = $o(n.state, s.from, s.to);
      l && n.dispatch({ effects: mr.of(l) }), o.preventDefault();
    };
    if (t.placeholderDOM)
      return t.placeholderDOM(n, i);
    let r = document.createElement("span");
    return r.textContent = t.placeholderText, r.setAttribute("aria-label", e.phrase("folded code")), r.title = e.phrase("unfold"), r.className = "cm-foldPlaceholder", r.onclick = i, r;
  }
}() }), bie = {
  openText: "\u2304",
  closedText: "\u203A",
  markerDOM: null,
  domEventHandlers: {},
  foldingChanged: () => !1
};
class wl extends Ut {
  constructor(e, t) {
    super(), this.config = e, this.open = t;
  }
  eq(e) {
    return this.config == e.config && this.open == e.open;
  }
  toDOM(e) {
    if (this.config.markerDOM)
      return this.config.markerDOM(this.open);
    let t = document.createElement("span");
    return t.textContent = this.open ? this.config.openText : this.config.closedText, t.title = e.state.phrase(this.open ? "Fold line" : "Unfold line"), t;
  }
}
function yie(n = {}) {
  let e = Object.assign(Object.assign({}, bie), n), t = new wl(e, !0), i = new wl(e, !1), r = ke.fromClass(class {
    constructor(s) {
      this.from = s.viewport.from, this.markers = this.buildMarkers(s);
    }
    update(s) {
      (s.docChanged || s.viewportChanged || s.startState.facet(fn) != s.state.facet(fn) || s.startState.field(Bn, !1) != s.state.field(Bn, !1) || Be(s.startState) != Be(s.state) || e.foldingChanged(s)) && (this.markers = this.buildMarkers(s.view));
    }
    buildMarkers(s) {
      let l = new ln();
      for (let a of s.viewportLineBlocks) {
        let c = $o(s.state, a.from, a.to) ? i : zo(s.state, a.from, a.to) ? t : null;
        c && l.add(a.from, a.from, c);
      }
      return l.finish();
    }
  }), { domEventHandlers: o } = e;
  return [
    r,
    xne({
      class: "cm-foldGutter",
      markers(s) {
        var l;
        return ((l = s.plugin(r)) === null || l === void 0 ? void 0 : l.markers) || X.empty;
      },
      initialSpacer() {
        return new wl(e, !1);
      },
      domEventHandlers: Object.assign(Object.assign({}, o), { click: (s, l, a) => {
        if (o.click && o.click(s, l, a))
          return !0;
        let c = $o(s.state, l.from, l.to);
        if (c)
          return s.dispatch({ effects: mr.of(c) }), !0;
        let h = zo(s.state, l.from, l.to);
        return h ? (s.dispatch({ effects: ms.of(h) }), !0) : !1;
      } })
    }),
    yg()
  ];
}
const vie = /* @__PURE__ */ I.baseTheme({
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
class gs {
  constructor(e, t) {
    this.specs = e;
    let i;
    function r(l) {
      let a = an.newName();
      return (i || (i = /* @__PURE__ */ Object.create(null)))["." + a] = l, a;
    }
    const o = typeof t.all == "string" ? t.all : t.all ? r(t.all) : void 0, s = t.scope;
    this.scope = s instanceof Et ? (l) => l.prop(Pi) == s.data : s ? (l) => l == s : void 0, this.style = hg(e.map((l) => ({
      tag: l.tag,
      class: l.class || r(Object.assign({}, l, { tag: null }))
    })), {
      all: o
    }).style, this.module = i ? new an(i) : null, this.themeType = t.themeType;
  }
  static define(e, t) {
    return new gs(e, t || {});
  }
}
const Aa = /* @__PURE__ */ B.define(), vg = /* @__PURE__ */ B.define({
  combine(n) {
    return n.length ? [n[0]] : null;
  }
});
function _l(n) {
  let e = n.facet(Aa);
  return e.length ? e : n.facet(vg);
}
function xie(n, e) {
  let t = [wie], i;
  return n instanceof gs && (n.module && t.push(I.styleModule.of(n.module)), i = n.themeType), e != null && e.fallback ? t.push(vg.of(n)) : i ? t.push(Aa.computeN([I.darkTheme], (r) => r.facet(I.darkTheme) == (i == "dark") ? [n] : [])) : t.push(Aa.of(n)), t;
}
class kie {
  constructor(e) {
    this.markCache = /* @__PURE__ */ Object.create(null), this.tree = Be(e.state), this.decorations = this.buildDeco(e, _l(e.state));
  }
  update(e) {
    let t = Be(e.state), i = _l(e.state), r = i != _l(e.startState);
    t.length < e.view.viewport.to && !r && t.type == this.tree.type ? this.decorations = this.decorations.map(e.changes) : (t != this.tree || e.viewportChanged || r) && (this.tree = t, this.decorations = this.buildDeco(e.view, i));
  }
  buildDeco(e, t) {
    if (!t || !this.tree.length)
      return $.none;
    let i = new ln();
    for (let { from: r, to: o } of e.visibleRanges)
      Vne(this.tree, t, (s, l, a) => {
        i.add(s, l, this.markCache[a] || (this.markCache[a] = $.mark({ class: a })));
      }, r, o);
    return i.finish();
  }
}
const wie = /* @__PURE__ */ xi.high(/* @__PURE__ */ ke.fromClass(kie, {
  decorations: (n) => n.decorations
})), _ie = /* @__PURE__ */ gs.define([
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
]), Aie = /* @__PURE__ */ I.baseTheme({
  "&.cm-focused .cm-matchingBracket": { backgroundColor: "#328c8252" },
  "&.cm-focused .cm-nonmatchingBracket": { backgroundColor: "#bb555544" }
}), xg = 1e4, kg = "()[]{}", wg = /* @__PURE__ */ B.define({
  combine(n) {
    return Nt(n, {
      afterCursor: !0,
      brackets: kg,
      maxScanDistance: xg,
      renderMatch: Tie
    });
  }
}), Cie = /* @__PURE__ */ $.mark({ class: "cm-matchingBracket" }), Sie = /* @__PURE__ */ $.mark({ class: "cm-nonmatchingBracket" });
function Tie(n) {
  let e = [], t = n.matched ? Cie : Sie;
  return e.push(t.range(n.start.from, n.start.to)), n.end && e.push(t.range(n.end.from, n.end.to)), e;
}
const Eie = /* @__PURE__ */ Me.define({
  create() {
    return $.none;
  },
  update(n, e) {
    if (!e.docChanged && !e.selection)
      return n;
    let t = [], i = e.state.facet(wg);
    for (let r of e.state.selection.ranges) {
      if (!r.empty)
        continue;
      let o = Dt(e.state, r.head, -1, i) || r.head > 0 && Dt(e.state, r.head - 1, 1, i) || i.afterCursor && (Dt(e.state, r.head, 1, i) || r.head < e.state.doc.length && Dt(e.state, r.head + 1, -1, i));
      o && (t = t.concat(i.renderMatch(o, e.state)));
    }
    return $.set(t, !0);
  },
  provide: (n) => I.decorations.from(n)
}), Die = [
  Eie,
  Aie
];
function Mie(n = {}) {
  return [wg.of(n), Die];
}
const Oie = /* @__PURE__ */ new j();
function Ca(n, e, t) {
  let i = n.prop(e < 0 ? j.openedBy : j.closedBy);
  if (i)
    return i;
  if (n.name.length == 1) {
    let r = t.indexOf(n.name);
    if (r > -1 && r % 2 == (e < 0 ? 1 : 0))
      return [t[r + e]];
  }
  return null;
}
function Sa(n) {
  let e = n.type.prop(Oie);
  return e ? e(n.node) : n;
}
function Dt(n, e, t, i = {}) {
  let r = i.maxScanDistance || xg, o = i.brackets || kg, s = Be(n), l = s.resolveInner(e, t);
  for (let a = l; a; a = a.parent) {
    let c = Ca(a.type, t, o);
    if (c && a.from < a.to) {
      let h = Sa(a);
      if (h && (t > 0 ? e >= h.from && e < h.to : e > h.from && e <= h.to))
        return Lie(n, e, t, a, h, c, o);
    }
  }
  return Rie(n, e, t, s, l.type, r, o);
}
function Lie(n, e, t, i, r, o, s) {
  let l = i.parent, a = { from: r.from, to: r.to }, c = 0, h = l == null ? void 0 : l.cursor();
  if (h && (t < 0 ? h.childBefore(i.from) : h.childAfter(i.to)))
    do
      if (t < 0 ? h.to <= i.from : h.from >= i.to) {
        if (c == 0 && o.indexOf(h.type.name) > -1 && h.from < h.to) {
          let u = Sa(h);
          return { start: a, end: u ? { from: u.from, to: u.to } : void 0, matched: !0 };
        } else if (Ca(h.type, t, s))
          c++;
        else if (Ca(h.type, -t, s)) {
          if (c == 0) {
            let u = Sa(h);
            return {
              start: a,
              end: u && u.from < u.to ? { from: u.from, to: u.to } : void 0,
              matched: !1
            };
          }
          c--;
        }
      }
    while (t < 0 ? h.prevSibling() : h.nextSibling());
  return { start: a, matched: !1 };
}
function Rie(n, e, t, i, r, o, s) {
  let l = t < 0 ? n.sliceDoc(e - 1, e) : n.sliceDoc(e, e + 1), a = s.indexOf(l);
  if (a < 0 || a % 2 == 0 != t > 0)
    return null;
  let c = { from: t < 0 ? e - 1 : e, to: t > 0 ? e + 1 : e }, h = n.doc.iterRange(e, t > 0 ? n.doc.length : 0), u = 0;
  for (let f = 0; !h.next().done && f <= o; ) {
    let d = h.value;
    t < 0 && (f += d.length);
    let p = e + f * t;
    for (let m = t > 0 ? 0 : d.length - 1, g = t > 0 ? d.length : -1; m != g; m += t) {
      let b = s.indexOf(d[m]);
      if (!(b < 0 || i.resolveInner(p + m, 1).type != r))
        if (b % 2 == 0 == t > 0)
          u++;
        else {
          if (u == 1)
            return { start: c, end: { from: p + m, to: p + m + 1 }, matched: b >> 1 == a >> 1 };
          u--;
        }
    }
    t > 0 && (f += d.length);
  }
  return h.done ? { start: c, matched: !1 } : null;
}
const Iie = /* @__PURE__ */ Object.create(null), Of = [ct.none], Lf = [], Bie = /* @__PURE__ */ Object.create(null);
for (let [n, e] of [
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
  Bie[n] = /* @__PURE__ */ Nie(Iie, e);
function Al(n, e) {
  Lf.indexOf(n) > -1 || (Lf.push(n), console.warn(e));
}
function Nie(n, e) {
  let t = null;
  for (let o of e.split(".")) {
    let s = n[o] || O[o];
    s ? typeof s == "function" ? t ? t = s(t) : Al(o, `Modifier ${o} used at start of tag`) : t ? Al(o, `Tag ${o} used as modifier`) : t = s : Al(o, `Unknown highlighting tag ${o}`);
  }
  if (!t)
    return 0;
  let i = e.replace(/ /g, "_"), r = ct.define({
    id: Of.length,
    name: i,
    props: [zne({ [i]: t })]
  });
  return Of.push(r), r.id;
}
const Pie = (n) => {
  let { state: e } = n, t = e.doc.lineAt(e.selection.main.from), i = Ac(n.state, t.from);
  return i.line ? Fie(n) : i.block ? Hie(n) : !1;
};
function _c(n, e) {
  return ({ state: t, dispatch: i }) => {
    if (t.readOnly)
      return !1;
    let r = n(e, t);
    return r ? (i(t.update(r)), !0) : !1;
  };
}
const Fie = /* @__PURE__ */ _c(Vie, 0), qie = /* @__PURE__ */ _c(_g, 0), Hie = /* @__PURE__ */ _c((n, e) => _g(n, e, $ie(e)), 0);
function Ac(n, e) {
  let t = n.languageDataAt("commentTokens", e);
  return t.length ? t[0] : {};
}
const Oi = 50;
function zie(n, { open: e, close: t }, i, r) {
  let o = n.sliceDoc(i - Oi, i), s = n.sliceDoc(r, r + Oi), l = /\s*$/.exec(o)[0].length, a = /^\s*/.exec(s)[0].length, c = o.length - l;
  if (o.slice(c - e.length, c) == e && s.slice(a, a + t.length) == t)
    return {
      open: { pos: i - l, margin: l && 1 },
      close: { pos: r + a, margin: a && 1 }
    };
  let h, u;
  r - i <= 2 * Oi ? h = u = n.sliceDoc(i, r) : (h = n.sliceDoc(i, i + Oi), u = n.sliceDoc(r - Oi, r));
  let f = /^\s*/.exec(h)[0].length, d = /\s*$/.exec(u)[0].length, p = u.length - d - t.length;
  return h.slice(f, f + e.length) == e && u.slice(p, p + t.length) == t ? {
    open: {
      pos: i + f + e.length,
      margin: /\s/.test(h.charAt(f + e.length)) ? 1 : 0
    },
    close: {
      pos: r - d - t.length,
      margin: /\s/.test(u.charAt(p - 1)) ? 1 : 0
    }
  } : null;
}
function $ie(n) {
  let e = [];
  for (let t of n.selection.ranges) {
    let i = n.doc.lineAt(t.from), r = t.to <= i.to ? i : n.doc.lineAt(t.to), o = e.length - 1;
    o >= 0 && e[o].to > i.from ? e[o].to = r.to : e.push({ from: i.from + /^\s*/.exec(i.text)[0].length, to: r.to });
  }
  return e;
}
function _g(n, e, t = e.selection.ranges) {
  let i = t.map((o) => Ac(e, o.from).block);
  if (!i.every((o) => o))
    return null;
  let r = t.map((o, s) => zie(e, i[s], o.from, o.to));
  if (n != 2 && !r.every((o) => o))
    return { changes: e.changes(t.map((o, s) => r[s] ? [] : [{ from: o.from, insert: i[s].open + " " }, { from: o.to, insert: " " + i[s].close }])) };
  if (n != 1 && r.some((o) => o)) {
    let o = [];
    for (let s = 0, l; s < r.length; s++)
      if (l = r[s]) {
        let a = i[s], { open: c, close: h } = l;
        o.push({ from: c.pos - a.open.length, to: c.pos + c.margin }, { from: h.pos - h.margin, to: h.pos + a.close.length });
      }
    return { changes: o };
  }
  return null;
}
function Vie(n, e, t = e.selection.ranges) {
  let i = [], r = -1;
  for (let { from: o, to: s } of t) {
    let l = i.length, a = 1e9, c = Ac(e, o).line;
    if (!!c) {
      for (let h = o; h <= s; ) {
        let u = e.doc.lineAt(h);
        if (u.from > r && (o == s || s > u.from)) {
          r = u.from;
          let f = /^\s*/.exec(u.text)[0].length, d = f == u.length, p = u.text.slice(f, f + c.length) == c ? f : -1;
          f < u.text.length && f < a && (a = f), i.push({ line: u, comment: p, token: c, indent: f, empty: d, single: !1 });
        }
        h = u.to + 1;
      }
      if (a < 1e9)
        for (let h = l; h < i.length; h++)
          i[h].indent < i[h].line.text.length && (i[h].indent = a);
      i.length == l + 1 && (i[l].single = !0);
    }
  }
  if (n != 2 && i.some((o) => o.comment < 0 && (!o.empty || o.single))) {
    let o = [];
    for (let { line: l, token: a, indent: c, empty: h, single: u } of i)
      (u || !h) && o.push({ from: l.from + c, insert: a + " " });
    let s = e.changes(o);
    return { changes: s, selection: e.selection.map(s, 1) };
  } else if (n != 1 && i.some((o) => o.comment >= 0)) {
    let o = [];
    for (let { line: s, comment: l, token: a } of i)
      if (l >= 0) {
        let c = s.from + l, h = c + a.length;
        s.text[h - s.from] == " " && h++, o.push({ from: c, to: h });
      }
    return { changes: o };
  }
  return null;
}
const Ta = /* @__PURE__ */ Wt.define(), Uie = /* @__PURE__ */ Wt.define(), Wie = /* @__PURE__ */ B.define(), Ag = /* @__PURE__ */ B.define({
  combine(n) {
    return Nt(n, {
      minDepth: 100,
      newGroupDelay: 500,
      joinToEvent: (e, t) => t
    }, {
      minDepth: Math.max,
      newGroupDelay: Math.min,
      joinToEvent: (e, t) => (i, r) => e(i, r) || t(i, r)
    });
  }
});
function jie(n) {
  let e = 0;
  return n.iterChangedRanges((t, i) => e = i), e;
}
const Cg = /* @__PURE__ */ Me.define({
  create() {
    return Mt.empty;
  },
  update(n, e) {
    let t = e.state.facet(Ag), i = e.annotation(Ta);
    if (i) {
      let a = e.docChanged ? A.single(jie(e.changes)) : void 0, c = Ke.fromTransaction(e, a), h = i.side, u = h == 0 ? n.undone : n.done;
      return c ? u = Vo(u, u.length, t.minDepth, c) : u = Eg(u, e.startState.selection), new Mt(h == 0 ? i.rest : u, h == 0 ? u : i.rest);
    }
    let r = e.annotation(Uie);
    if ((r == "full" || r == "before") && (n = n.isolate()), e.annotation(xe.addToHistory) === !1)
      return e.changes.empty ? n : n.addMapping(e.changes.desc);
    let o = Ke.fromTransaction(e), s = e.annotation(xe.time), l = e.annotation(xe.userEvent);
    return o ? n = n.addChanges(o, s, l, t, e) : e.selection && (n = n.addSelection(e.startState.selection, s, l, t.newGroupDelay)), (r == "full" || r == "after") && (n = n.isolate()), n;
  },
  toJSON(n) {
    return { done: n.done.map((e) => e.toJSON()), undone: n.undone.map((e) => e.toJSON()) };
  },
  fromJSON(n) {
    return new Mt(n.done.map(Ke.fromJSON), n.undone.map(Ke.fromJSON));
  }
});
function Gie(n = {}) {
  return [
    Cg,
    Ag.of(n),
    I.domEventHandlers({
      beforeinput(e, t) {
        let i = e.inputType == "historyUndo" ? Sg : e.inputType == "historyRedo" ? Ea : null;
        return i ? (e.preventDefault(), i(t)) : !1;
      }
    })
  ];
}
function bs(n, e) {
  return function({ state: t, dispatch: i }) {
    if (!e && t.readOnly)
      return !1;
    let r = t.field(Cg, !1);
    if (!r)
      return !1;
    let o = r.pop(n, t, e);
    return o ? (i(o), !0) : !1;
  };
}
const Sg = /* @__PURE__ */ bs(0, !1), Ea = /* @__PURE__ */ bs(1, !1), Kie = /* @__PURE__ */ bs(0, !0), Yie = /* @__PURE__ */ bs(1, !0);
class Ke {
  constructor(e, t, i, r, o) {
    this.changes = e, this.effects = t, this.mapped = i, this.startSelection = r, this.selectionsAfter = o;
  }
  setSelAfter(e) {
    return new Ke(this.changes, this.effects, this.mapped, this.startSelection, e);
  }
  toJSON() {
    var e, t, i;
    return {
      changes: (e = this.changes) === null || e === void 0 ? void 0 : e.toJSON(),
      mapped: (t = this.mapped) === null || t === void 0 ? void 0 : t.toJSON(),
      startSelection: (i = this.startSelection) === null || i === void 0 ? void 0 : i.toJSON(),
      selectionsAfter: this.selectionsAfter.map((r) => r.toJSON())
    };
  }
  static fromJSON(e) {
    return new Ke(e.changes && ye.fromJSON(e.changes), [], e.mapped && Lt.fromJSON(e.mapped), e.startSelection && A.fromJSON(e.startSelection), e.selectionsAfter.map(A.fromJSON));
  }
  static fromTransaction(e, t) {
    let i = it;
    for (let r of e.startState.facet(Wie)) {
      let o = r(e);
      o.length && (i = i.concat(o));
    }
    return !i.length && e.changes.empty ? null : new Ke(e.changes.invert(e.startState.doc), i, void 0, t || e.startState.selection, it);
  }
  static selection(e) {
    return new Ke(void 0, it, void 0, void 0, e);
  }
}
function Vo(n, e, t, i) {
  let r = e + 1 > t + 20 ? e - t - 1 : 0, o = n.slice(r, e);
  return o.push(i), o;
}
function Jie(n, e) {
  let t = [], i = !1;
  return n.iterChangedRanges((r, o) => t.push(r, o)), e.iterChangedRanges((r, o, s, l) => {
    for (let a = 0; a < t.length; ) {
      let c = t[a++], h = t[a++];
      l >= c && s <= h && (i = !0);
    }
  }), i;
}
function Zie(n, e) {
  return n.ranges.length == e.ranges.length && n.ranges.filter((t, i) => t.empty != e.ranges[i].empty).length === 0;
}
function Tg(n, e) {
  return n.length ? e.length ? n.concat(e) : n : e;
}
const it = [], Xie = 200;
function Eg(n, e) {
  if (n.length) {
    let t = n[n.length - 1], i = t.selectionsAfter.slice(Math.max(0, t.selectionsAfter.length - Xie));
    return i.length && i[i.length - 1].eq(e) ? n : (i.push(e), Vo(n, n.length - 1, 1e9, t.setSelAfter(i)));
  } else
    return [Ke.selection([e])];
}
function Qie(n) {
  let e = n[n.length - 1], t = n.slice();
  return t[n.length - 1] = e.setSelAfter(e.selectionsAfter.slice(0, e.selectionsAfter.length - 1)), t;
}
function Cl(n, e) {
  if (!n.length)
    return n;
  let t = n.length, i = it;
  for (; t; ) {
    let r = ere(n[t - 1], e, i);
    if (r.changes && !r.changes.empty || r.effects.length) {
      let o = n.slice(0, t);
      return o[t - 1] = r, o;
    } else
      e = r.mapped, t--, i = r.selectionsAfter;
  }
  return i.length ? [Ke.selection(i)] : it;
}
function ere(n, e, t) {
  let i = Tg(n.selectionsAfter.length ? n.selectionsAfter.map((l) => l.map(e)) : it, t);
  if (!n.changes)
    return Ke.selection(i);
  let r = n.changes.map(e), o = e.mapDesc(n.changes, !0), s = n.mapped ? n.mapped.composeDesc(o) : o;
  return new Ke(r, W.mapEffects(n.effects, e), s, n.startSelection.map(o), i);
}
const tre = /^(input\.type|delete)($|\.)/;
class Mt {
  constructor(e, t, i = 0, r = void 0) {
    this.done = e, this.undone = t, this.prevTime = i, this.prevUserEvent = r;
  }
  isolate() {
    return this.prevTime ? new Mt(this.done, this.undone) : this;
  }
  addChanges(e, t, i, r, o) {
    let s = this.done, l = s[s.length - 1];
    return l && l.changes && !l.changes.empty && e.changes && (!i || tre.test(i)) && (!l.selectionsAfter.length && t - this.prevTime < r.newGroupDelay && r.joinToEvent(o, Jie(l.changes, e.changes)) || i == "input.type.compose") ? s = Vo(s, s.length - 1, r.minDepth, new Ke(e.changes.compose(l.changes), Tg(e.effects, l.effects), l.mapped, l.startSelection, it)) : s = Vo(s, s.length, r.minDepth, e), new Mt(s, it, t, i);
  }
  addSelection(e, t, i, r) {
    let o = this.done.length ? this.done[this.done.length - 1].selectionsAfter : it;
    return o.length > 0 && t - this.prevTime < r && i == this.prevUserEvent && i && /^select($|\.)/.test(i) && Zie(o[o.length - 1], e) ? this : new Mt(Eg(this.done, e), this.undone, t, i);
  }
  addMapping(e) {
    return new Mt(Cl(this.done, e), Cl(this.undone, e), this.prevTime, this.prevUserEvent);
  }
  pop(e, t, i) {
    let r = e == 0 ? this.done : this.undone;
    if (r.length == 0)
      return null;
    let o = r[r.length - 1];
    if (i && o.selectionsAfter.length)
      return t.update({
        selection: o.selectionsAfter[o.selectionsAfter.length - 1],
        annotations: Ta.of({ side: e, rest: Qie(r) }),
        userEvent: e == 0 ? "select.undo" : "select.redo",
        scrollIntoView: !0
      });
    if (o.changes) {
      let s = r.length == 1 ? it : r.slice(0, r.length - 1);
      return o.mapped && (s = Cl(s, o.mapped)), t.update({
        changes: o.changes,
        selection: o.startSelection,
        effects: o.effects,
        annotations: Ta.of({ side: e, rest: s }),
        filter: !1,
        userEvent: e == 0 ? "undo" : "redo",
        scrollIntoView: !0
      });
    } else
      return null;
  }
}
Mt.empty = /* @__PURE__ */ new Mt(it, it);
const nre = [
  { key: "Mod-z", run: Sg, preventDefault: !0 },
  { key: "Mod-y", mac: "Mod-Shift-z", run: Ea, preventDefault: !0 },
  { linux: "Ctrl-Shift-z", run: Ea, preventDefault: !0 },
  { key: "Mod-u", run: Kie, preventDefault: !0 },
  { key: "Alt-u", mac: "Mod-Shift-u", run: Yie, preventDefault: !0 }
];
function ki(n, e) {
  return A.create(n.ranges.map(e), n.mainIndex);
}
function Pt(n, e) {
  return n.update({ selection: e, scrollIntoView: !0, userEvent: "select" });
}
function bt({ state: n, dispatch: e }, t) {
  let i = ki(n.selection, t);
  return i.eq(n.selection) ? !1 : (e(Pt(n, i)), !0);
}
function ys(n, e) {
  return A.cursor(e ? n.to : n.from);
}
function Dg(n, e) {
  return bt(n, (t) => t.empty ? n.moveByChar(t, e) : ys(t, e));
}
function Pe(n) {
  return n.textDirectionAt(n.state.selection.main.head) == le.LTR;
}
const Mg = (n) => Dg(n, !Pe(n)), Og = (n) => Dg(n, Pe(n));
function Lg(n, e) {
  return bt(n, (t) => t.empty ? n.moveByGroup(t, e) : ys(t, e));
}
const ire = (n) => Lg(n, !Pe(n)), rre = (n) => Lg(n, Pe(n));
function ore(n, e, t) {
  if (e.type.prop(t))
    return !0;
  let i = e.to - e.from;
  return i && (i > 2 || /[^\s,.;:]/.test(n.sliceDoc(e.from, e.to))) || e.firstChild;
}
function vs(n, e, t) {
  let i = Be(n).resolveInner(e.head), r = t ? j.closedBy : j.openedBy;
  for (let a = e.head; ; ) {
    let c = t ? i.childAfter(a) : i.childBefore(a);
    if (!c)
      break;
    ore(n, c, r) ? i = c : a = t ? c.to : c.from;
  }
  let o = i.type.prop(r), s, l;
  return o && (s = t ? Dt(n, i.from, 1) : Dt(n, i.to, -1)) && s.matched ? l = t ? s.end.to : s.end.from : l = t ? i.to : i.from, A.cursor(l, t ? -1 : 1);
}
const sre = (n) => bt(n, (e) => vs(n.state, e, !Pe(n))), lre = (n) => bt(n, (e) => vs(n.state, e, Pe(n)));
function Rg(n, e) {
  return bt(n, (t) => {
    if (!t.empty)
      return ys(t, e);
    let i = n.moveVertically(t, e);
    return i.head != t.head ? i : n.moveToLineBoundary(t, e);
  });
}
const Ig = (n) => Rg(n, !1), Bg = (n) => Rg(n, !0);
function Ng(n) {
  let e = n.scrollDOM.clientHeight < n.scrollDOM.scrollHeight - 2, t = 0, i = 0, r;
  if (e) {
    for (let o of n.state.facet(I.scrollMargins)) {
      let s = o(n);
      s != null && s.top && (t = Math.max(s == null ? void 0 : s.top, t)), s != null && s.bottom && (i = Math.max(s == null ? void 0 : s.bottom, i));
    }
    r = n.scrollDOM.clientHeight - t - i;
  } else
    r = (n.dom.ownerDocument.defaultView || window).innerHeight;
  return {
    marginTop: t,
    marginBottom: i,
    selfScroll: e,
    height: Math.max(n.defaultLineHeight, r - 5)
  };
}
function Pg(n, e) {
  let t = Ng(n), { state: i } = n, r = ki(i.selection, (s) => s.empty ? n.moveVertically(s, e, t.height) : ys(s, e));
  if (r.eq(i.selection))
    return !1;
  let o;
  if (t.selfScroll) {
    let s = n.coordsAtPos(i.selection.main.head), l = n.scrollDOM.getBoundingClientRect(), a = l.top + t.marginTop, c = l.bottom - t.marginBottom;
    s && s.top > a && s.bottom < c && (o = I.scrollIntoView(r.main.head, { y: "start", yMargin: s.top - a }));
  }
  return n.dispatch(Pt(i, r), { effects: o }), !0;
}
const Rf = (n) => Pg(n, !1), Da = (n) => Pg(n, !0);
function pn(n, e, t) {
  let i = n.lineBlockAt(e.head), r = n.moveToLineBoundary(e, t);
  if (r.head == e.head && r.head != (t ? i.to : i.from) && (r = n.moveToLineBoundary(e, t, !1)), !t && r.head == i.from && i.length) {
    let o = /^\s*/.exec(n.state.sliceDoc(i.from, Math.min(i.from + 100, i.to)))[0].length;
    o && e.head != i.from + o && (r = A.cursor(i.from + o));
  }
  return r;
}
const are = (n) => bt(n, (e) => pn(n, e, !0)), cre = (n) => bt(n, (e) => pn(n, e, !1)), hre = (n) => bt(n, (e) => pn(n, e, !Pe(n))), ure = (n) => bt(n, (e) => pn(n, e, Pe(n))), fre = (n) => bt(n, (e) => A.cursor(n.lineBlockAt(e.head).from, 1)), dre = (n) => bt(n, (e) => A.cursor(n.lineBlockAt(e.head).to, -1));
function pre(n, e, t) {
  let i = !1, r = ki(n.selection, (o) => {
    let s = Dt(n, o.head, -1) || Dt(n, o.head, 1) || o.head > 0 && Dt(n, o.head - 1, 1) || o.head < n.doc.length && Dt(n, o.head + 1, -1);
    if (!s || !s.end)
      return o;
    i = !0;
    let l = s.start.from == o.head ? s.end.to : s.end.from;
    return t ? A.range(o.anchor, l) : A.cursor(l);
  });
  return i ? (e(Pt(n, r)), !0) : !1;
}
const mre = ({ state: n, dispatch: e }) => pre(n, e, !1);
function ht(n, e) {
  let t = ki(n.state.selection, (i) => {
    let r = e(i);
    return A.range(i.anchor, r.head, r.goalColumn, r.bidiLevel || void 0);
  });
  return t.eq(n.state.selection) ? !1 : (n.dispatch(Pt(n.state, t)), !0);
}
function Fg(n, e) {
  return ht(n, (t) => n.moveByChar(t, e));
}
const qg = (n) => Fg(n, !Pe(n)), Hg = (n) => Fg(n, Pe(n));
function zg(n, e) {
  return ht(n, (t) => n.moveByGroup(t, e));
}
const gre = (n) => zg(n, !Pe(n)), bre = (n) => zg(n, Pe(n)), yre = (n) => ht(n, (e) => vs(n.state, e, !Pe(n))), vre = (n) => ht(n, (e) => vs(n.state, e, Pe(n)));
function $g(n, e) {
  return ht(n, (t) => n.moveVertically(t, e));
}
const Vg = (n) => $g(n, !1), Ug = (n) => $g(n, !0);
function Wg(n, e) {
  return ht(n, (t) => n.moveVertically(t, e, Ng(n).height));
}
const If = (n) => Wg(n, !1), Bf = (n) => Wg(n, !0), xre = (n) => ht(n, (e) => pn(n, e, !0)), kre = (n) => ht(n, (e) => pn(n, e, !1)), wre = (n) => ht(n, (e) => pn(n, e, !Pe(n))), _re = (n) => ht(n, (e) => pn(n, e, Pe(n))), Are = (n) => ht(n, (e) => A.cursor(n.lineBlockAt(e.head).from)), Cre = (n) => ht(n, (e) => A.cursor(n.lineBlockAt(e.head).to)), Nf = ({ state: n, dispatch: e }) => (e(Pt(n, { anchor: 0 })), !0), Pf = ({ state: n, dispatch: e }) => (e(Pt(n, { anchor: n.doc.length })), !0), Ff = ({ state: n, dispatch: e }) => (e(Pt(n, { anchor: n.selection.main.anchor, head: 0 })), !0), qf = ({ state: n, dispatch: e }) => (e(Pt(n, { anchor: n.selection.main.anchor, head: n.doc.length })), !0), Sre = ({ state: n, dispatch: e }) => (e(n.update({ selection: { anchor: 0, head: n.doc.length }, userEvent: "select" })), !0), Tre = ({ state: n, dispatch: e }) => {
  let t = ks(n).map(({ from: i, to: r }) => A.range(i, Math.min(r + 1, n.doc.length)));
  return e(n.update({ selection: A.create(t), userEvent: "select" })), !0;
}, Ere = ({ state: n, dispatch: e }) => {
  let t = ki(n.selection, (i) => {
    var r;
    let o = Be(n).resolveInner(i.head, 1);
    for (; !(o.from < i.from && o.to >= i.to || o.to > i.to && o.from <= i.from || !(!((r = o.parent) === null || r === void 0) && r.parent)); )
      o = o.parent;
    return A.range(o.to, o.from);
  });
  return e(Pt(n, t)), !0;
}, Dre = ({ state: n, dispatch: e }) => {
  let t = n.selection, i = null;
  return t.ranges.length > 1 ? i = A.create([t.main]) : t.main.empty || (i = A.create([A.cursor(t.main.head)])), i ? (e(Pt(n, i)), !0) : !1;
};
function xs(n, e) {
  if (n.state.readOnly)
    return !1;
  let t = "delete.selection", { state: i } = n, r = i.changeByRange((o) => {
    let { from: s, to: l } = o;
    if (s == l) {
      let a = e(s);
      a < s ? (t = "delete.backward", a = Ur(n, a, !1)) : a > s && (t = "delete.forward", a = Ur(n, a, !0)), s = Math.min(s, a), l = Math.max(l, a);
    } else
      s = Ur(n, s, !1), l = Ur(n, l, !0);
    return s == l ? { range: o } : { changes: { from: s, to: l }, range: A.cursor(s) };
  });
  return r.changes.empty ? !1 : (n.dispatch(i.update(r, {
    scrollIntoView: !0,
    userEvent: t,
    effects: t == "delete.selection" ? I.announce.of(i.phrase("Selection deleted")) : void 0
  })), !0);
}
function Ur(n, e, t) {
  if (n instanceof I)
    for (let i of n.state.facet(I.atomicRanges).map((r) => r(n)))
      i.between(e, e, (r, o) => {
        r < e && o > e && (e = t ? o : r);
      });
  return e;
}
const jg = (n, e) => xs(n, (t) => {
  let { state: i } = n, r = i.doc.lineAt(t), o, s;
  if (!e && t > r.from && t < r.from + 200 && !/[^ \t]/.test(o = r.text.slice(0, t - r.from))) {
    if (o[o.length - 1] == "	")
      return t - 1;
    let l = ur(o, i.tabSize), a = l % Ho(i) || Ho(i);
    for (let c = 0; c < a && o[o.length - 1 - c] == " "; c++)
      t--;
    s = t;
  } else
    s = Re(r.text, t - r.from, e, e) + r.from, s == t && r.number != (e ? i.doc.lines : 1) && (s += e ? 1 : -1);
  return s;
}), Ma = (n) => jg(n, !1), Gg = (n) => jg(n, !0), Kg = (n, e) => xs(n, (t) => {
  let i = t, { state: r } = n, o = r.doc.lineAt(i), s = r.charCategorizer(i);
  for (let l = null; ; ) {
    if (i == (e ? o.to : o.from)) {
      i == t && o.number != (e ? r.doc.lines : 1) && (i += e ? 1 : -1);
      break;
    }
    let a = Re(o.text, i - o.from, e) + o.from, c = o.text.slice(Math.min(i, a) - o.from, Math.max(i, a) - o.from), h = s(c);
    if (l != null && h != l)
      break;
    (c != " " || i != t) && (l = h), i = a;
  }
  return i;
}), Yg = (n) => Kg(n, !1), Mre = (n) => Kg(n, !0), Jg = (n) => xs(n, (e) => {
  let t = n.lineBlockAt(e).to;
  return e < t ? t : Math.min(n.state.doc.length, e + 1);
}), Ore = (n) => xs(n, (e) => {
  let t = n.lineBlockAt(e).from;
  return e > t ? t : Math.max(0, e - 1);
}), Lre = ({ state: n, dispatch: e }) => {
  if (n.readOnly)
    return !1;
  let t = n.changeByRange((i) => ({
    changes: { from: i.from, to: i.to, insert: J.of(["", ""]) },
    range: A.cursor(i.from)
  }));
  return e(n.update(t, { scrollIntoView: !0, userEvent: "input" })), !0;
}, Rre = ({ state: n, dispatch: e }) => {
  if (n.readOnly)
    return !1;
  let t = n.changeByRange((i) => {
    if (!i.empty || i.from == 0 || i.from == n.doc.length)
      return { range: i };
    let r = i.from, o = n.doc.lineAt(r), s = r == o.from ? r - 1 : Re(o.text, r - o.from, !1) + o.from, l = r == o.to ? r + 1 : Re(o.text, r - o.from, !0) + o.from;
    return {
      changes: { from: s, to: l, insert: n.doc.slice(r, l).append(n.doc.slice(s, r)) },
      range: A.cursor(l)
    };
  });
  return t.changes.empty ? !1 : (e(n.update(t, { scrollIntoView: !0, userEvent: "move.character" })), !0);
};
function ks(n) {
  let e = [], t = -1;
  for (let i of n.selection.ranges) {
    let r = n.doc.lineAt(i.from), o = n.doc.lineAt(i.to);
    if (!i.empty && i.to == o.from && (o = n.doc.lineAt(i.to - 1)), t >= r.number) {
      let s = e[e.length - 1];
      s.to = o.to, s.ranges.push(i);
    } else
      e.push({ from: r.from, to: o.to, ranges: [i] });
    t = o.number + 1;
  }
  return e;
}
function Zg(n, e, t) {
  if (n.readOnly)
    return !1;
  let i = [], r = [];
  for (let o of ks(n)) {
    if (t ? o.to == n.doc.length : o.from == 0)
      continue;
    let s = n.doc.lineAt(t ? o.to + 1 : o.from - 1), l = s.length + 1;
    if (t) {
      i.push({ from: o.to, to: s.to }, { from: o.from, insert: s.text + n.lineBreak });
      for (let a of o.ranges)
        r.push(A.range(Math.min(n.doc.length, a.anchor + l), Math.min(n.doc.length, a.head + l)));
    } else {
      i.push({ from: s.from, to: o.from }, { from: o.to, insert: n.lineBreak + s.text });
      for (let a of o.ranges)
        r.push(A.range(a.anchor - l, a.head - l));
    }
  }
  return i.length ? (e(n.update({
    changes: i,
    scrollIntoView: !0,
    selection: A.create(r, n.selection.mainIndex),
    userEvent: "move.line"
  })), !0) : !1;
}
const Ire = ({ state: n, dispatch: e }) => Zg(n, e, !1), Bre = ({ state: n, dispatch: e }) => Zg(n, e, !0);
function Xg(n, e, t) {
  if (n.readOnly)
    return !1;
  let i = [];
  for (let r of ks(n))
    t ? i.push({ from: r.from, insert: n.doc.slice(r.from, r.to) + n.lineBreak }) : i.push({ from: r.to, insert: n.lineBreak + n.doc.slice(r.from, r.to) });
  return e(n.update({ changes: i, scrollIntoView: !0, userEvent: "input.copyline" })), !0;
}
const Nre = ({ state: n, dispatch: e }) => Xg(n, e, !1), Pre = ({ state: n, dispatch: e }) => Xg(n, e, !0), Fre = (n) => {
  if (n.state.readOnly)
    return !1;
  let { state: e } = n, t = e.changes(ks(e).map(({ from: r, to: o }) => (r > 0 ? r-- : o < e.doc.length && o++, { from: r, to: o }))), i = ki(e.selection, (r) => n.moveVertically(r, !0)).map(t);
  return n.dispatch({ changes: t, selection: i, scrollIntoView: !0, userEvent: "delete.line" }), !0;
};
function qre(n, e) {
  if (/\(\)|\[\]|\{\}/.test(n.sliceDoc(e - 1, e + 1)))
    return { from: e, to: e };
  let t = Be(n).resolveInner(e), i = t.childBefore(e), r = t.childAfter(e), o;
  return i && r && i.to <= e && r.from >= e && (o = i.type.prop(j.closedBy)) && o.indexOf(r.name) > -1 && n.doc.lineAt(i.to).from == n.doc.lineAt(r.from).from ? { from: i.to, to: r.from } : null;
}
const Hre = /* @__PURE__ */ Qg(!1), zre = /* @__PURE__ */ Qg(!0);
function Qg(n) {
  return ({ state: e, dispatch: t }) => {
    if (e.readOnly)
      return !1;
    let i = e.changeByRange((r) => {
      let { from: o, to: s } = r, l = e.doc.lineAt(o), a = !n && o == s && qre(e, o);
      n && (o = s = (s <= l.to ? l : e.doc.lineAt(s)).to);
      let c = new ps(e, { simulateBreak: o, simulateDoubleBreak: !!a }), h = kc(c, o);
      for (h == null && (h = /^\s*/.exec(e.doc.lineAt(o).text)[0].length); s < l.to && /\s/.test(l.text[s - l.from]); )
        s++;
      a ? { from: o, to: s } = a : o > l.from && o < l.from + 100 && !/\S/.test(l.text.slice(0, o)) && (o = l.from);
      let u = ["", or(e, h)];
      return a && u.push(or(e, c.lineIndent(l.from, -1))), {
        changes: { from: o, to: s, insert: J.of(u) },
        range: A.cursor(o + 1 + u[1].length)
      };
    });
    return t(e.update(i, { scrollIntoView: !0, userEvent: "input" })), !0;
  };
}
function Cc(n, e) {
  let t = -1;
  return n.changeByRange((i) => {
    let r = [];
    for (let s = i.from; s <= i.to; ) {
      let l = n.doc.lineAt(s);
      l.number > t && (i.empty || i.to > l.from) && (e(l, r, i), t = l.number), s = l.to + 1;
    }
    let o = n.changes(r);
    return {
      changes: r,
      range: A.range(o.mapPos(i.anchor, 1), o.mapPos(i.head, 1))
    };
  });
}
const $re = ({ state: n, dispatch: e }) => {
  if (n.readOnly)
    return !1;
  let t = /* @__PURE__ */ Object.create(null), i = new ps(n, { overrideIndentation: (o) => {
    let s = t[o];
    return s == null ? -1 : s;
  } }), r = Cc(n, (o, s, l) => {
    let a = kc(i, o.from);
    if (a == null)
      return;
    /\S/.test(o.text) || (a = 0);
    let c = /^\s*/.exec(o.text)[0], h = or(n, a);
    (c != h || l.from < o.from + c.length) && (t[o.from] = a, s.push({ from: o.from, to: o.from + c.length, insert: h }));
  });
  return r.changes.empty || e(n.update(r, { userEvent: "indent" })), !0;
}, e0 = ({ state: n, dispatch: e }) => n.readOnly ? !1 : (e(n.update(Cc(n, (t, i) => {
  i.push({ from: t.from, insert: n.facet(xc) });
}), { userEvent: "input.indent" })), !0), t0 = ({ state: n, dispatch: e }) => n.readOnly ? !1 : (e(n.update(Cc(n, (t, i) => {
  let r = /^\s*/.exec(t.text)[0];
  if (!r)
    return;
  let o = ur(r, n.tabSize), s = 0, l = or(n, Math.max(0, o - Ho(n)));
  for (; s < r.length && s < l.length && r.charCodeAt(s) == l.charCodeAt(s); )
    s++;
  i.push({ from: t.from + s, to: t.from + r.length, insert: l.slice(s) });
}), { userEvent: "delete.dedent" })), !0), Vre = [
  { key: "Ctrl-b", run: Mg, shift: qg, preventDefault: !0 },
  { key: "Ctrl-f", run: Og, shift: Hg },
  { key: "Ctrl-p", run: Ig, shift: Vg },
  { key: "Ctrl-n", run: Bg, shift: Ug },
  { key: "Ctrl-a", run: fre, shift: Are },
  { key: "Ctrl-e", run: dre, shift: Cre },
  { key: "Ctrl-d", run: Gg },
  { key: "Ctrl-h", run: Ma },
  { key: "Ctrl-k", run: Jg },
  { key: "Ctrl-Alt-h", run: Yg },
  { key: "Ctrl-o", run: Lre },
  { key: "Ctrl-t", run: Rre },
  { key: "Ctrl-v", run: Da }
], Ure = /* @__PURE__ */ [
  { key: "ArrowLeft", run: Mg, shift: qg, preventDefault: !0 },
  { key: "Mod-ArrowLeft", mac: "Alt-ArrowLeft", run: ire, shift: gre, preventDefault: !0 },
  { mac: "Cmd-ArrowLeft", run: hre, shift: wre, preventDefault: !0 },
  { key: "ArrowRight", run: Og, shift: Hg, preventDefault: !0 },
  { key: "Mod-ArrowRight", mac: "Alt-ArrowRight", run: rre, shift: bre, preventDefault: !0 },
  { mac: "Cmd-ArrowRight", run: ure, shift: _re, preventDefault: !0 },
  { key: "ArrowUp", run: Ig, shift: Vg, preventDefault: !0 },
  { mac: "Cmd-ArrowUp", run: Nf, shift: Ff },
  { mac: "Ctrl-ArrowUp", run: Rf, shift: If },
  { key: "ArrowDown", run: Bg, shift: Ug, preventDefault: !0 },
  { mac: "Cmd-ArrowDown", run: Pf, shift: qf },
  { mac: "Ctrl-ArrowDown", run: Da, shift: Bf },
  { key: "PageUp", run: Rf, shift: If },
  { key: "PageDown", run: Da, shift: Bf },
  { key: "Home", run: cre, shift: kre, preventDefault: !0 },
  { key: "Mod-Home", run: Nf, shift: Ff },
  { key: "End", run: are, shift: xre, preventDefault: !0 },
  { key: "Mod-End", run: Pf, shift: qf },
  { key: "Enter", run: Hre },
  { key: "Mod-a", run: Sre },
  { key: "Backspace", run: Ma, shift: Ma },
  { key: "Delete", run: Gg },
  { key: "Mod-Backspace", mac: "Alt-Backspace", run: Yg },
  { key: "Mod-Delete", mac: "Alt-Delete", run: Mre },
  { mac: "Mod-Backspace", run: Ore },
  { mac: "Mod-Delete", run: Jg }
].concat(/* @__PURE__ */ Vre.map((n) => ({ mac: n.key, run: n.run, shift: n.shift }))), Wre = /* @__PURE__ */ [
  { key: "Alt-ArrowLeft", mac: "Ctrl-ArrowLeft", run: sre, shift: yre },
  { key: "Alt-ArrowRight", mac: "Ctrl-ArrowRight", run: lre, shift: vre },
  { key: "Alt-ArrowUp", run: Ire },
  { key: "Shift-Alt-ArrowUp", run: Nre },
  { key: "Alt-ArrowDown", run: Bre },
  { key: "Shift-Alt-ArrowDown", run: Pre },
  { key: "Escape", run: Dre },
  { key: "Mod-Enter", run: zre },
  { key: "Alt-l", mac: "Ctrl-l", run: Tre },
  { key: "Mod-i", run: Ere, preventDefault: !0 },
  { key: "Mod-[", run: t0 },
  { key: "Mod-]", run: e0 },
  { key: "Mod-Alt-\\", run: $re },
  { key: "Shift-Mod-k", run: Fre },
  { key: "Shift-Mod-\\", run: mre },
  { key: "Mod-/", run: Pie },
  { key: "Alt-A", run: qie }
].concat(Ure), jre = { key: "Tab", run: e0, shift: t0 };
function ee() {
  var n = arguments[0];
  typeof n == "string" && (n = document.createElement(n));
  var e = 1, t = arguments[1];
  if (t && typeof t == "object" && t.nodeType == null && !Array.isArray(t)) {
    for (var i in t)
      if (Object.prototype.hasOwnProperty.call(t, i)) {
        var r = t[i];
        typeof r == "string" ? n.setAttribute(i, r) : r != null && (n[i] = r);
      }
    e++;
  }
  for (; e < arguments.length; e++)
    n0(n, arguments[e]);
  return n;
}
function n0(n, e) {
  if (typeof e == "string")
    n.appendChild(document.createTextNode(e));
  else if (e != null)
    if (e.nodeType != null)
      n.appendChild(e);
    else if (Array.isArray(e))
      for (var t = 0; t < e.length; t++)
        n0(n, e[t]);
    else
      throw new RangeError("Unsupported child node: " + e);
}
const Hf = typeof String.prototype.normalize == "function" ? (n) => n.normalize("NFKD") : (n) => n;
class pi {
  constructor(e, t, i = 0, r = e.length, o, s) {
    this.test = s, this.value = { from: 0, to: 0 }, this.done = !1, this.matches = [], this.buffer = "", this.bufferPos = 0, this.iter = e.iterRange(i, r), this.bufferStart = i, this.normalize = o ? (l) => o(Hf(l)) : Hf, this.query = this.normalize(t);
  }
  peek() {
    if (this.bufferPos == this.buffer.length) {
      if (this.bufferStart += this.buffer.length, this.iter.next(), this.iter.done)
        return -1;
      this.bufferPos = 0, this.buffer = this.iter.value;
    }
    return Se(this.buffer, this.bufferPos);
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
      let t = oc(e), i = this.bufferStart + this.bufferPos;
      this.bufferPos += nt(e);
      let r = this.normalize(t);
      for (let o = 0, s = i; ; o++) {
        let l = r.charCodeAt(o), a = this.match(l, s);
        if (o == r.length - 1) {
          if (a)
            return this.value = a, this;
          break;
        }
        s == i && o < t.length && t.charCodeAt(o) == l && s++;
      }
    }
  }
  match(e, t) {
    let i = null;
    for (let r = 0; r < this.matches.length; r += 2) {
      let o = this.matches[r], s = !1;
      this.query.charCodeAt(o) == e && (o == this.query.length - 1 ? i = { from: this.matches[r + 1], to: t + 1 } : (this.matches[r]++, s = !0)), s || (this.matches.splice(r, 2), r -= 2);
    }
    return this.query.charCodeAt(0) == e && (this.query.length == 1 ? i = { from: t, to: t + 1 } : this.matches.push(1, t)), i && this.test && !this.test(i.from, i.to, this.buffer, this.bufferPos) && (i = null), i;
  }
}
typeof Symbol < "u" && (pi.prototype[Symbol.iterator] = function() {
  return this;
});
const i0 = { from: -1, to: -1, match: /* @__PURE__ */ /.*/.exec("") }, Sc = "gm" + (/x/.unicode == null ? "" : "u");
class r0 {
  constructor(e, t, i, r = 0, o = e.length) {
    if (this.text = e, this.to = o, this.curLine = "", this.done = !1, this.value = i0, /\\[sWDnr]|\n|\r|\[\^/.test(t))
      return new o0(e, t, i, r, o);
    this.re = new RegExp(t, Sc + (i != null && i.ignoreCase ? "i" : "")), this.test = i == null ? void 0 : i.test, this.iter = e.iter();
    let s = e.lineAt(r);
    this.curLineStart = s.from, this.matchPos = Uo(e, r), this.getLine(this.curLineStart);
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
      let t = this.matchPos <= this.to && this.re.exec(this.curLine);
      if (t) {
        let i = this.curLineStart + t.index, r = i + t[0].length;
        if (this.matchPos = Uo(this.text, r + (i == r ? 1 : 0)), i == this.curLineStart + this.curLine.length && this.nextLine(), (i < r || i > this.value.to) && (!this.test || this.test(i, r, t)))
          return this.value = { from: i, to: r, match: t }, this;
        e = this.matchPos - this.curLineStart;
      } else if (this.curLineStart + this.curLine.length < this.to)
        this.nextLine(), e = 0;
      else
        return this.done = !0, this;
    }
  }
}
const Sl = /* @__PURE__ */ new WeakMap();
class ai {
  constructor(e, t) {
    this.from = e, this.text = t;
  }
  get to() {
    return this.from + this.text.length;
  }
  static get(e, t, i) {
    let r = Sl.get(e);
    if (!r || r.from >= i || r.to <= t) {
      let l = new ai(t, e.sliceString(t, i));
      return Sl.set(e, l), l;
    }
    if (r.from == t && r.to == i)
      return r;
    let { text: o, from: s } = r;
    return s > t && (o = e.sliceString(t, s) + o, s = t), r.to < i && (o += e.sliceString(r.to, i)), Sl.set(e, new ai(s, o)), new ai(t, o.slice(t - s, i - s));
  }
}
class o0 {
  constructor(e, t, i, r, o) {
    this.text = e, this.to = o, this.done = !1, this.value = i0, this.matchPos = Uo(e, r), this.re = new RegExp(t, Sc + (i != null && i.ignoreCase ? "i" : "")), this.test = i == null ? void 0 : i.test, this.flat = ai.get(e, r, this.chunkEnd(r + 5e3));
  }
  chunkEnd(e) {
    return e >= this.to ? this.to : this.text.lineAt(e).to;
  }
  next() {
    for (; ; ) {
      let e = this.re.lastIndex = this.matchPos - this.flat.from, t = this.re.exec(this.flat.text);
      if (t && !t[0] && t.index == e && (this.re.lastIndex = e + 1, t = this.re.exec(this.flat.text)), t) {
        let i = this.flat.from + t.index, r = i + t[0].length;
        if ((this.flat.to >= this.to || t.index + t[0].length <= this.flat.text.length - 10) && (!this.test || this.test(i, r, t)))
          return this.value = { from: i, to: r, match: t }, this.matchPos = Uo(this.text, r + (i == r ? 1 : 0)), this;
      }
      if (this.flat.to == this.to)
        return this.done = !0, this;
      this.flat = ai.get(this.text, this.flat.from, this.chunkEnd(this.flat.from + this.flat.text.length * 2));
    }
  }
}
typeof Symbol < "u" && (r0.prototype[Symbol.iterator] = o0.prototype[Symbol.iterator] = function() {
  return this;
});
function Gre(n) {
  try {
    return new RegExp(n, Sc), !0;
  } catch {
    return !1;
  }
}
function Uo(n, e) {
  if (e >= n.length)
    return e;
  let t = n.lineAt(e), i;
  for (; e < t.to && (i = t.text.charCodeAt(e - t.from)) >= 56320 && i < 57344; )
    e++;
  return e;
}
function Oa(n) {
  let e = ee("input", { class: "cm-textfield", name: "line" }), t = ee("form", {
    class: "cm-gotoLine",
    onkeydown: (r) => {
      r.keyCode == 27 ? (r.preventDefault(), n.dispatch({ effects: Wo.of(!1) }), n.focus()) : r.keyCode == 13 && (r.preventDefault(), i());
    },
    onsubmit: (r) => {
      r.preventDefault(), i();
    }
  }, ee("label", n.state.phrase("Go to line"), ": ", e), " ", ee("button", { class: "cm-button", type: "submit" }, n.state.phrase("go")));
  function i() {
    let r = /^([+-])?(\d+)?(:\d+)?(%)?$/.exec(e.value);
    if (!r)
      return;
    let { state: o } = n, s = o.doc.lineAt(o.selection.main.head), [, l, a, c, h] = r, u = c ? +c.slice(1) : 0, f = a ? +a : s.number;
    if (a && h) {
      let m = f / 100;
      l && (m = m * (l == "-" ? -1 : 1) + s.number / o.doc.lines), f = Math.round(o.doc.lines * m);
    } else
      a && l && (f = f * (l == "-" ? -1 : 1) + s.number);
    let d = o.doc.line(Math.max(1, Math.min(o.doc.lines, f))), p = A.cursor(d.from + Math.max(0, Math.min(u, d.length)));
    n.dispatch({
      effects: [Wo.of(!1), I.scrollIntoView(p.from, { y: "center" })],
      selection: p
    }), n.focus();
  }
  return { dom: t };
}
const Wo = /* @__PURE__ */ W.define(), zf = /* @__PURE__ */ Me.define({
  create() {
    return !0;
  },
  update(n, e) {
    for (let t of e.effects)
      t.is(Wo) && (n = t.value);
    return n;
  },
  provide: (n) => rr.from(n, (e) => e ? Oa : null)
}), Kre = (n) => {
  let e = ir(n, Oa);
  if (!e) {
    let t = [Wo.of(!0)];
    n.state.field(zf, !1) == null && t.push(W.appendConfig.of([zf, Yre])), n.dispatch({ effects: t }), e = ir(n, Oa);
  }
  return e && e.dom.querySelector("input").focus(), !0;
}, Yre = /* @__PURE__ */ I.baseTheme({
  ".cm-panel.cm-gotoLine": {
    padding: "2px 6px 4px",
    "& label": { fontSize: "80%" }
  }
}), Jre = {
  highlightWordAroundCursor: !1,
  minSelectionLength: 1,
  maxMatches: 100,
  wholeWords: !1
}, s0 = /* @__PURE__ */ B.define({
  combine(n) {
    return Nt(n, Jre, {
      highlightWordAroundCursor: (e, t) => e || t,
      minSelectionLength: Math.min,
      maxMatches: Math.min
    });
  }
});
function Zre(n) {
  let e = [noe, toe];
  return n && e.push(s0.of(n)), e;
}
const Xre = /* @__PURE__ */ $.mark({ class: "cm-selectionMatch" }), Qre = /* @__PURE__ */ $.mark({ class: "cm-selectionMatch cm-selectionMatch-main" });
function $f(n, e, t, i) {
  return (t == 0 || n(e.sliceDoc(t - 1, t)) != re.Word) && (i == e.doc.length || n(e.sliceDoc(i, i + 1)) != re.Word);
}
function eoe(n, e, t, i) {
  return n(e.sliceDoc(t, t + 1)) == re.Word && n(e.sliceDoc(i - 1, i)) == re.Word;
}
const toe = /* @__PURE__ */ ke.fromClass(class {
  constructor(n) {
    this.decorations = this.getDeco(n);
  }
  update(n) {
    (n.selectionSet || n.docChanged || n.viewportChanged) && (this.decorations = this.getDeco(n.view));
  }
  getDeco(n) {
    let e = n.state.facet(s0), { state: t } = n, i = t.selection;
    if (i.ranges.length > 1)
      return $.none;
    let r = i.main, o, s = null;
    if (r.empty) {
      if (!e.highlightWordAroundCursor)
        return $.none;
      let a = t.wordAt(r.head);
      if (!a)
        return $.none;
      s = t.charCategorizer(r.head), o = t.sliceDoc(a.from, a.to);
    } else {
      let a = r.to - r.from;
      if (a < e.minSelectionLength || a > 200)
        return $.none;
      if (e.wholeWords) {
        if (o = t.sliceDoc(r.from, r.to), s = t.charCategorizer(r.head), !($f(s, t, r.from, r.to) && eoe(s, t, r.from, r.to)))
          return $.none;
      } else if (o = t.sliceDoc(r.from, r.to).trim(), !o)
        return $.none;
    }
    let l = [];
    for (let a of n.visibleRanges) {
      let c = new pi(t.doc, o, a.from, a.to);
      for (; !c.next().done; ) {
        let { from: h, to: u } = c.value;
        if ((!s || $f(s, t, h, u)) && (r.empty && h <= r.from && u >= r.to ? l.push(Qre.range(h, u)) : (h >= r.to || u <= r.from) && l.push(Xre.range(h, u)), l.length > e.maxMatches))
          return $.none;
      }
    }
    return $.set(l);
  }
}, {
  decorations: (n) => n.decorations
}), noe = /* @__PURE__ */ I.baseTheme({
  ".cm-selectionMatch": { backgroundColor: "#99ff7780" },
  ".cm-searchMatch .cm-selectionMatch": { backgroundColor: "transparent" }
}), ioe = ({ state: n, dispatch: e }) => {
  let { selection: t } = n, i = A.create(t.ranges.map((r) => n.wordAt(r.head) || A.cursor(r.head)), t.mainIndex);
  return i.eq(t) ? !1 : (e(n.update({ selection: i })), !0);
};
function roe(n, e) {
  let { main: t, ranges: i } = n.selection, r = n.wordAt(t.head), o = r && r.from == t.from && r.to == t.to;
  for (let s = !1, l = new pi(n.doc, e, i[i.length - 1].to); ; )
    if (l.next(), l.done) {
      if (s)
        return null;
      l = new pi(n.doc, e, 0, Math.max(0, i[i.length - 1].from - 1)), s = !0;
    } else {
      if (s && i.some((a) => a.from == l.value.from))
        continue;
      if (o) {
        let a = n.wordAt(l.value.from);
        if (!a || a.from != l.value.from || a.to != l.value.to)
          continue;
      }
      return l.value;
    }
}
const ooe = ({ state: n, dispatch: e }) => {
  let { ranges: t } = n.selection;
  if (t.some((o) => o.from === o.to))
    return ioe({ state: n, dispatch: e });
  let i = n.sliceDoc(t[0].from, t[0].to);
  if (n.selection.ranges.some((o) => n.sliceDoc(o.from, o.to) != i))
    return !1;
  let r = roe(n, i);
  return r ? (e(n.update({
    selection: n.selection.addRange(A.range(r.from, r.to), !1),
    effects: I.scrollIntoView(r.to)
  })), !0) : !1;
}, wi = /* @__PURE__ */ B.define({
  combine(n) {
    return Nt(n, {
      top: !1,
      caseSensitive: !1,
      literal: !1,
      regexp: !1,
      wholeWord: !1,
      createPanel: (e) => new boe(e),
      scrollToMatch: (e) => I.scrollIntoView(e)
    });
  }
});
class l0 {
  constructor(e) {
    this.search = e.search, this.caseSensitive = !!e.caseSensitive, this.literal = !!e.literal, this.regexp = !!e.regexp, this.replace = e.replace || "", this.valid = !!this.search && (!this.regexp || Gre(this.search)), this.unquoted = this.unquote(this.search), this.wholeWord = !!e.wholeWord;
  }
  unquote(e) {
    return this.literal ? e : e.replace(/\\([nrt\\])/g, (t, i) => i == "n" ? `
` : i == "r" ? "\r" : i == "t" ? "	" : "\\");
  }
  eq(e) {
    return this.search == e.search && this.replace == e.replace && this.caseSensitive == e.caseSensitive && this.regexp == e.regexp && this.wholeWord == e.wholeWord;
  }
  create() {
    return this.regexp ? new coe(this) : new loe(this);
  }
  getCursor(e, t = 0, i) {
    let r = e.doc ? e : K.create({ doc: e });
    return i == null && (i = r.doc.length), this.regexp ? Jn(this, r, t, i) : Yn(this, r, t, i);
  }
}
class a0 {
  constructor(e) {
    this.spec = e;
  }
}
function Yn(n, e, t, i) {
  return new pi(e.doc, n.unquoted, t, i, n.caseSensitive ? void 0 : (r) => r.toLowerCase(), n.wholeWord ? soe(e.doc, e.charCategorizer(e.selection.main.head)) : void 0);
}
function soe(n, e) {
  return (t, i, r, o) => ((o > t || o + r.length < i) && (o = Math.max(0, t - 2), r = n.sliceString(o, Math.min(n.length, i + 2))), (e(jo(r, t - o)) != re.Word || e(Go(r, t - o)) != re.Word) && (e(Go(r, i - o)) != re.Word || e(jo(r, i - o)) != re.Word));
}
class loe extends a0 {
  constructor(e) {
    super(e);
  }
  nextMatch(e, t, i) {
    let r = Yn(this.spec, e, i, e.doc.length).nextOverlapping();
    return r.done && (r = Yn(this.spec, e, 0, t).nextOverlapping()), r.done ? null : r.value;
  }
  prevMatchInRange(e, t, i) {
    for (let r = i; ; ) {
      let o = Math.max(t, r - 1e4 - this.spec.unquoted.length), s = Yn(this.spec, e, o, r), l = null;
      for (; !s.nextOverlapping().done; )
        l = s.value;
      if (l)
        return l;
      if (o == t)
        return null;
      r -= 1e4;
    }
  }
  prevMatch(e, t, i) {
    return this.prevMatchInRange(e, 0, t) || this.prevMatchInRange(e, i, e.doc.length);
  }
  getReplacement(e) {
    return this.spec.unquote(this.spec.replace);
  }
  matchAll(e, t) {
    let i = Yn(this.spec, e, 0, e.doc.length), r = [];
    for (; !i.next().done; ) {
      if (r.length >= t)
        return null;
      r.push(i.value);
    }
    return r;
  }
  highlight(e, t, i, r) {
    let o = Yn(this.spec, e, Math.max(0, t - this.spec.unquoted.length), Math.min(i + this.spec.unquoted.length, e.doc.length));
    for (; !o.next().done; )
      r(o.value.from, o.value.to);
  }
}
function Jn(n, e, t, i) {
  return new r0(e.doc, n.search, {
    ignoreCase: !n.caseSensitive,
    test: n.wholeWord ? aoe(e.charCategorizer(e.selection.main.head)) : void 0
  }, t, i);
}
function jo(n, e) {
  return n.slice(Re(n, e, !1), e);
}
function Go(n, e) {
  return n.slice(e, Re(n, e));
}
function aoe(n) {
  return (e, t, i) => !i[0].length || (n(jo(i.input, i.index)) != re.Word || n(Go(i.input, i.index)) != re.Word) && (n(Go(i.input, i.index + i[0].length)) != re.Word || n(jo(i.input, i.index + i[0].length)) != re.Word);
}
class coe extends a0 {
  nextMatch(e, t, i) {
    let r = Jn(this.spec, e, i, e.doc.length).next();
    return r.done && (r = Jn(this.spec, e, 0, t).next()), r.done ? null : r.value;
  }
  prevMatchInRange(e, t, i) {
    for (let r = 1; ; r++) {
      let o = Math.max(t, i - r * 1e4), s = Jn(this.spec, e, o, i), l = null;
      for (; !s.next().done; )
        l = s.value;
      if (l && (o == t || l.from > o + 10))
        return l;
      if (o == t)
        return null;
    }
  }
  prevMatch(e, t, i) {
    return this.prevMatchInRange(e, 0, t) || this.prevMatchInRange(e, i, e.doc.length);
  }
  getReplacement(e) {
    return this.spec.unquote(this.spec.replace.replace(/\$([$&\d+])/g, (t, i) => i == "$" ? "$" : i == "&" ? e.match[0] : i != "0" && +i < e.match.length ? e.match[i] : t));
  }
  matchAll(e, t) {
    let i = Jn(this.spec, e, 0, e.doc.length), r = [];
    for (; !i.next().done; ) {
      if (r.length >= t)
        return null;
      r.push(i.value);
    }
    return r;
  }
  highlight(e, t, i, r) {
    let o = Jn(this.spec, e, Math.max(0, t - 250), Math.min(i + 250, e.doc.length));
    for (; !o.next().done; )
      r(o.value.from, o.value.to);
  }
}
const sr = /* @__PURE__ */ W.define(), Tc = /* @__PURE__ */ W.define(), nn = /* @__PURE__ */ Me.define({
  create(n) {
    return new Tl(La(n).create(), null);
  },
  update(n, e) {
    for (let t of e.effects)
      t.is(sr) ? n = new Tl(t.value.create(), n.panel) : t.is(Tc) && (n = new Tl(n.query, t.value ? Ec : null));
    return n;
  },
  provide: (n) => rr.from(n, (e) => e.panel)
});
class Tl {
  constructor(e, t) {
    this.query = e, this.panel = t;
  }
}
const hoe = /* @__PURE__ */ $.mark({ class: "cm-searchMatch" }), uoe = /* @__PURE__ */ $.mark({ class: "cm-searchMatch cm-searchMatch-selected" }), foe = /* @__PURE__ */ ke.fromClass(class {
  constructor(n) {
    this.view = n, this.decorations = this.highlight(n.state.field(nn));
  }
  update(n) {
    let e = n.state.field(nn);
    (e != n.startState.field(nn) || n.docChanged || n.selectionSet || n.viewportChanged) && (this.decorations = this.highlight(e));
  }
  highlight({ query: n, panel: e }) {
    if (!e || !n.spec.valid)
      return $.none;
    let { view: t } = this, i = new ln();
    for (let r = 0, o = t.visibleRanges, s = o.length; r < s; r++) {
      let { from: l, to: a } = o[r];
      for (; r < s - 1 && a > o[r + 1].from - 2 * 250; )
        a = o[++r].to;
      n.highlight(t.state, l, a, (c, h) => {
        let u = t.state.selection.ranges.some((f) => f.from == c && f.to == h);
        i.add(c, h, u ? uoe : hoe);
      });
    }
    return i.finish();
  }
}, {
  decorations: (n) => n.decorations
});
function gr(n) {
  return (e) => {
    let t = e.state.field(nn, !1);
    return t && t.query.spec.valid ? n(e, t) : u0(e);
  };
}
const Ko = /* @__PURE__ */ gr((n, { query: e }) => {
  let { to: t } = n.state.selection.main, i = e.nextMatch(n.state, t, t);
  if (!i)
    return !1;
  let r = A.single(i.from, i.to), o = n.state.facet(wi);
  return n.dispatch({
    selection: r,
    effects: [Dc(n, i), o.scrollToMatch(r.main, n)],
    userEvent: "select.search"
  }), h0(n), !0;
}), Yo = /* @__PURE__ */ gr((n, { query: e }) => {
  let { state: t } = n, { from: i } = t.selection.main, r = e.prevMatch(t, i, i);
  if (!r)
    return !1;
  let o = A.single(r.from, r.to), s = n.state.facet(wi);
  return n.dispatch({
    selection: o,
    effects: [Dc(n, r), s.scrollToMatch(o.main, n)],
    userEvent: "select.search"
  }), h0(n), !0;
}), doe = /* @__PURE__ */ gr((n, { query: e }) => {
  let t = e.matchAll(n.state, 1e3);
  return !t || !t.length ? !1 : (n.dispatch({
    selection: A.create(t.map((i) => A.range(i.from, i.to))),
    userEvent: "select.search.matches"
  }), !0);
}), poe = ({ state: n, dispatch: e }) => {
  let t = n.selection;
  if (t.ranges.length > 1 || t.main.empty)
    return !1;
  let { from: i, to: r } = t.main, o = [], s = 0;
  for (let l = new pi(n.doc, n.sliceDoc(i, r)); !l.next().done; ) {
    if (o.length > 1e3)
      return !1;
    l.value.from == i && (s = o.length), o.push(A.range(l.value.from, l.value.to));
  }
  return e(n.update({
    selection: A.create(o, s),
    userEvent: "select.search.matches"
  })), !0;
}, Vf = /* @__PURE__ */ gr((n, { query: e }) => {
  let { state: t } = n, { from: i, to: r } = t.selection.main;
  if (t.readOnly)
    return !1;
  let o = e.nextMatch(t, i, i);
  if (!o)
    return !1;
  let s = [], l, a, c = [];
  if (o.from == i && o.to == r && (a = t.toText(e.getReplacement(o)), s.push({ from: o.from, to: o.to, insert: a }), o = e.nextMatch(t, o.from, o.to), c.push(I.announce.of(t.phrase("replaced match on line $", t.doc.lineAt(i).number) + "."))), o) {
    let h = s.length == 0 || s[0].from >= o.to ? 0 : o.to - o.from - a.length;
    l = A.single(o.from - h, o.to - h), c.push(Dc(n, o)), c.push(t.facet(wi).scrollToMatch(l.main, n));
  }
  return n.dispatch({
    changes: s,
    selection: l,
    effects: c,
    userEvent: "input.replace"
  }), !0;
}), moe = /* @__PURE__ */ gr((n, { query: e }) => {
  if (n.state.readOnly)
    return !1;
  let t = e.matchAll(n.state, 1e9).map((r) => {
    let { from: o, to: s } = r;
    return { from: o, to: s, insert: e.getReplacement(r) };
  });
  if (!t.length)
    return !1;
  let i = n.state.phrase("replaced $ matches", t.length) + ".";
  return n.dispatch({
    changes: t,
    effects: I.announce.of(i),
    userEvent: "input.replace.all"
  }), !0;
});
function Ec(n) {
  return n.state.facet(wi).createPanel(n);
}
function La(n, e) {
  var t, i, r, o, s;
  let l = n.selection.main, a = l.empty || l.to > l.from + 100 ? "" : n.sliceDoc(l.from, l.to);
  if (e && !a)
    return e;
  let c = n.facet(wi);
  return new l0({
    search: ((t = e == null ? void 0 : e.literal) !== null && t !== void 0 ? t : c.literal) ? a : a.replace(/\n/g, "\\n"),
    caseSensitive: (i = e == null ? void 0 : e.caseSensitive) !== null && i !== void 0 ? i : c.caseSensitive,
    literal: (r = e == null ? void 0 : e.literal) !== null && r !== void 0 ? r : c.literal,
    regexp: (o = e == null ? void 0 : e.regexp) !== null && o !== void 0 ? o : c.regexp,
    wholeWord: (s = e == null ? void 0 : e.wholeWord) !== null && s !== void 0 ? s : c.wholeWord
  });
}
function c0(n) {
  let e = ir(n, Ec);
  return e && e.dom.querySelector("[main-field]");
}
function h0(n) {
  let e = c0(n);
  e && e == n.root.activeElement && e.select();
}
const u0 = (n) => {
  let e = n.state.field(nn, !1);
  if (e && e.panel) {
    let t = c0(n);
    if (t && t != n.root.activeElement) {
      let i = La(n.state, e.query.spec);
      i.valid && n.dispatch({ effects: sr.of(i) }), t.focus(), t.select();
    }
  } else
    n.dispatch({ effects: [
      Tc.of(!0),
      e ? sr.of(La(n.state, e.query.spec)) : W.appendConfig.of(voe)
    ] });
  return !0;
}, f0 = (n) => {
  let e = n.state.field(nn, !1);
  if (!e || !e.panel)
    return !1;
  let t = ir(n, Ec);
  return t && t.dom.contains(n.root.activeElement) && n.focus(), n.dispatch({ effects: Tc.of(!1) }), !0;
}, goe = [
  { key: "Mod-f", run: u0, scope: "editor search-panel" },
  { key: "F3", run: Ko, shift: Yo, scope: "editor search-panel", preventDefault: !0 },
  { key: "Mod-g", run: Ko, shift: Yo, scope: "editor search-panel", preventDefault: !0 },
  { key: "Escape", run: f0, scope: "editor search-panel" },
  { key: "Mod-Shift-l", run: poe },
  { key: "Alt-g", run: Kre },
  { key: "Mod-d", run: ooe, preventDefault: !0 }
];
class boe {
  constructor(e) {
    this.view = e;
    let t = this.query = e.state.field(nn).query.spec;
    this.commit = this.commit.bind(this), this.searchField = ee("input", {
      value: t.search,
      placeholder: Je(e, "Find"),
      "aria-label": Je(e, "Find"),
      class: "cm-textfield",
      name: "search",
      form: "",
      "main-field": "true",
      onchange: this.commit,
      onkeyup: this.commit
    }), this.replaceField = ee("input", {
      value: t.replace,
      placeholder: Je(e, "Replace"),
      "aria-label": Je(e, "Replace"),
      class: "cm-textfield",
      name: "replace",
      form: "",
      onchange: this.commit,
      onkeyup: this.commit
    }), this.caseField = ee("input", {
      type: "checkbox",
      name: "case",
      form: "",
      checked: t.caseSensitive,
      onchange: this.commit
    }), this.reField = ee("input", {
      type: "checkbox",
      name: "re",
      form: "",
      checked: t.regexp,
      onchange: this.commit
    }), this.wordField = ee("input", {
      type: "checkbox",
      name: "word",
      form: "",
      checked: t.wholeWord,
      onchange: this.commit
    });
    function i(r, o, s) {
      return ee("button", { class: "cm-button", name: r, onclick: o, type: "button" }, s);
    }
    this.dom = ee("div", { onkeydown: (r) => this.keydown(r), class: "cm-search" }, [
      this.searchField,
      i("next", () => Ko(e), [Je(e, "next")]),
      i("prev", () => Yo(e), [Je(e, "previous")]),
      i("select", () => doe(e), [Je(e, "all")]),
      ee("label", null, [this.caseField, Je(e, "match case")]),
      ee("label", null, [this.reField, Je(e, "regexp")]),
      ee("label", null, [this.wordField, Je(e, "by word")]),
      ...e.state.readOnly ? [] : [
        ee("br"),
        this.replaceField,
        i("replace", () => Vf(e), [Je(e, "replace")]),
        i("replaceAll", () => moe(e), [Je(e, "replace all")])
      ],
      ee("button", {
        name: "close",
        onclick: () => f0(e),
        "aria-label": Je(e, "close"),
        type: "button"
      }, ["\xD7"])
    ]);
  }
  commit() {
    let e = new l0({
      search: this.searchField.value,
      caseSensitive: this.caseField.checked,
      regexp: this.reField.checked,
      wholeWord: this.wordField.checked,
      replace: this.replaceField.value
    });
    e.eq(this.query) || (this.query = e, this.view.dispatch({ effects: sr.of(e) }));
  }
  keydown(e) {
    Lte(this.view, e, "search-panel") ? e.preventDefault() : e.keyCode == 13 && e.target == this.searchField ? (e.preventDefault(), (e.shiftKey ? Yo : Ko)(this.view)) : e.keyCode == 13 && e.target == this.replaceField && (e.preventDefault(), Vf(this.view));
  }
  update(e) {
    for (let t of e.transactions)
      for (let i of t.effects)
        i.is(sr) && !i.value.eq(this.query) && this.setQuery(i.value);
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
    return this.view.state.facet(wi).top;
  }
}
function Je(n, e) {
  return n.state.phrase(e);
}
const Wr = 30, jr = /[\s\.,:;?!]/;
function Dc(n, { from: e, to: t }) {
  let i = n.state.doc.lineAt(e), r = n.state.doc.lineAt(t).to, o = Math.max(i.from, e - Wr), s = Math.min(r, t + Wr), l = n.state.sliceDoc(o, s);
  if (o != i.from) {
    for (let a = 0; a < Wr; a++)
      if (!jr.test(l[a + 1]) && jr.test(l[a])) {
        l = l.slice(a);
        break;
      }
  }
  if (s != r) {
    for (let a = l.length - 1; a > l.length - Wr; a--)
      if (!jr.test(l[a - 1]) && jr.test(l[a])) {
        l = l.slice(0, a);
        break;
      }
  }
  return I.announce.of(`${n.state.phrase("current match")}. ${l} ${n.state.phrase("on line")} ${i.number}.`);
}
const yoe = /* @__PURE__ */ I.baseTheme({
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
}), voe = [
  nn,
  /* @__PURE__ */ xi.lowest(foe),
  yoe
];
class d0 {
  constructor(e, t, i) {
    this.state = e, this.pos = t, this.explicit = i, this.abortListeners = [];
  }
  tokenBefore(e) {
    let t = Be(this.state).resolveInner(this.pos, -1);
    for (; t && e.indexOf(t.name) < 0; )
      t = t.parent;
    return t ? {
      from: t.from,
      to: this.pos,
      text: this.state.sliceDoc(t.from, this.pos),
      type: t.type
    } : null;
  }
  matchBefore(e) {
    let t = this.state.doc.lineAt(this.pos), i = Math.max(t.from, this.pos - 250), r = t.text.slice(i - t.from, this.pos - t.from), o = r.search(p0(e, !1));
    return o < 0 ? null : { from: i + o, to: this.pos, text: r.slice(o) };
  }
  get aborted() {
    return this.abortListeners == null;
  }
  addEventListener(e, t) {
    e == "abort" && this.abortListeners && this.abortListeners.push(t);
  }
}
function Uf(n) {
  let e = Object.keys(n).join(""), t = /\w/.test(e);
  return t && (e = e.replace(/\w/g, "")), `[${t ? "\\w" : ""}${e.replace(/[^\w\s]/g, "\\$&")}]`;
}
function xoe(n) {
  let e = /* @__PURE__ */ Object.create(null), t = /* @__PURE__ */ Object.create(null);
  for (let { label: r } of n) {
    e[r[0]] = !0;
    for (let o = 1; o < r.length; o++)
      t[r[o]] = !0;
  }
  let i = Uf(e) + Uf(t) + "*$";
  return [new RegExp("^" + i), new RegExp(i)];
}
function koe(n) {
  let e = n.map((r) => typeof r == "string" ? { label: r } : r), [t, i] = e.every((r) => /^\w+$/.test(r.label)) ? [/\w*$/, /\w+$/] : xoe(e);
  return (r) => {
    let o = r.matchBefore(i);
    return o || r.explicit ? { from: o ? o.from : r.pos, options: e, validFor: t } : null;
  };
}
class Wf {
  constructor(e, t, i, r) {
    this.completion = e, this.source = t, this.match = i, this.score = r;
  }
}
function rn(n) {
  return n.selection.main.from;
}
function p0(n, e) {
  var t;
  let { source: i } = n, r = e && i[0] != "^", o = i[i.length - 1] != "$";
  return !r && !o ? n : new RegExp(`${r ? "^" : ""}(?:${i})${o ? "$" : ""}`, (t = n.flags) !== null && t !== void 0 ? t : n.ignoreCase ? "i" : "");
}
const woe = /* @__PURE__ */ Wt.define();
function _oe(n, e, t, i) {
  let { main: r } = n.selection, o = t - r.from, s = i - r.from;
  return Object.assign(Object.assign({}, n.changeByRange((l) => l != r && t != i && n.sliceDoc(l.from + o, l.from + s) != n.sliceDoc(t, i) ? { range: l } : {
    changes: { from: l.from + o, to: i == r.from ? l.to : l.from + s, insert: e },
    range: A.cursor(l.from + o + e.length)
  })), { userEvent: "input.complete" });
}
const jf = /* @__PURE__ */ new WeakMap();
function Aoe(n) {
  if (!Array.isArray(n))
    return n;
  let e = jf.get(n);
  return e || jf.set(n, e = koe(n)), e;
}
const Mc = /* @__PURE__ */ W.define(), lr = /* @__PURE__ */ W.define();
class Coe {
  constructor(e) {
    this.pattern = e, this.chars = [], this.folded = [], this.any = [], this.precise = [], this.byWord = [], this.score = 0, this.matched = [];
    for (let t = 0; t < e.length; ) {
      let i = Se(e, t), r = nt(i);
      this.chars.push(i);
      let o = e.slice(t, t + r), s = o.toUpperCase();
      this.folded.push(Se(s == o ? o.toLowerCase() : s, 0)), t += r;
    }
    this.astral = e.length != this.chars.length;
  }
  ret(e, t) {
    return this.score = e, this.matched = t, !0;
  }
  match(e) {
    if (this.pattern.length == 0)
      return this.ret(-100, []);
    if (e.length < this.pattern.length)
      return !1;
    let { chars: t, folded: i, any: r, precise: o, byWord: s } = this;
    if (t.length == 1) {
      let y = Se(e, 0), w = nt(y), x = w == e.length ? 0 : -100;
      if (y != t[0])
        if (y == i[0])
          x += -200;
        else
          return !1;
      return this.ret(x, [0, w]);
    }
    let l = e.indexOf(this.pattern);
    if (l == 0)
      return this.ret(e.length == this.pattern.length ? 0 : -100, [0, this.pattern.length]);
    let a = t.length, c = 0;
    if (l < 0) {
      for (let y = 0, w = Math.min(e.length, 200); y < w && c < a; ) {
        let x = Se(e, y);
        (x == t[c] || x == i[c]) && (r[c++] = y), y += nt(x);
      }
      if (c < a)
        return !1;
    }
    let h = 0, u = 0, f = !1, d = 0, p = -1, m = -1, g = /[a-z]/.test(e), b = !0;
    for (let y = 0, w = Math.min(e.length, 200), x = 0; y < w && u < a; ) {
      let _ = Se(e, y);
      l < 0 && (h < a && _ == t[h] && (o[h++] = y), d < a && (_ == t[d] || _ == i[d] ? (d == 0 && (p = y), m = y + 1, d++) : d = 0));
      let k, C = _ < 255 ? _ >= 48 && _ <= 57 || _ >= 97 && _ <= 122 ? 2 : _ >= 65 && _ <= 90 ? 1 : 0 : (k = oc(_)) != k.toLowerCase() ? 1 : k != k.toUpperCase() ? 2 : 0;
      (!y || C == 1 && g || x == 0 && C != 0) && (t[u] == _ || i[u] == _ && (f = !0) ? s[u++] = y : s.length && (b = !1)), x = C, y += nt(_);
    }
    return u == a && s[0] == 0 && b ? this.result(-100 + (f ? -200 : 0), s, e) : d == a && p == 0 ? this.ret(-200 - e.length + (m == e.length ? 0 : -100), [0, m]) : l > -1 ? this.ret(-700 - e.length, [l, l + this.pattern.length]) : d == a ? this.ret(-200 + -700 - e.length, [p, m]) : u == a ? this.result(-100 + (f ? -200 : 0) + -700 + (b ? 0 : -1100), s, e) : t.length == 2 ? !1 : this.result((r[0] ? -700 : 0) + -200 + -1100, r, e);
  }
  result(e, t, i) {
    let r = [], o = 0;
    for (let s of t) {
      let l = s + (this.astral ? nt(Se(i, s)) : 1);
      o && r[o - 1] == s ? r[o - 1] = l : (r[o++] = s, r[o++] = l);
    }
    return this.ret(e - i.length, r);
  }
}
const Ye = /* @__PURE__ */ B.define({
  combine(n) {
    return Nt(n, {
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
      positionInfo: Soe,
      compareCompletions: (e, t) => e.label.localeCompare(t.label),
      interactionDelay: 75
    }, {
      defaultKeymap: (e, t) => e && t,
      closeOnBlur: (e, t) => e && t,
      icons: (e, t) => e && t,
      tooltipClass: (e, t) => (i) => Gf(e(i), t(i)),
      optionClass: (e, t) => (i) => Gf(e(i), t(i)),
      addToOptions: (e, t) => e.concat(t)
    });
  }
});
function Gf(n, e) {
  return n ? e ? n + " " + e : n : e;
}
function Soe(n, e, t, i, r) {
  let o = n.textDirection == le.RTL, s = o, l = !1, a = "top", c, h, u = e.left - r.left, f = r.right - e.right, d = i.right - i.left, p = i.bottom - i.top;
  if (s && u < Math.min(d, f) ? s = !1 : !s && f < Math.min(d, u) && (s = !0), d <= (s ? u : f))
    c = Math.max(r.top, Math.min(t.top, r.bottom - p)) - e.top, h = Math.min(400, s ? u : f);
  else {
    l = !0, h = Math.min(400, (o ? e.right : r.right - e.left) - 30);
    let m = r.bottom - e.bottom;
    m >= p || m > e.top ? c = t.bottom - e.top : (a = "bottom", c = e.bottom - t.top);
  }
  return {
    style: `${a}: ${c}px; max-width: ${h}px`,
    class: "cm-completionInfo-" + (l ? o ? "left-narrow" : "right-narrow" : s ? "left" : "right")
  };
}
function Toe(n) {
  let e = n.addToOptions.slice();
  return n.icons && e.push({
    render(t) {
      let i = document.createElement("div");
      return i.classList.add("cm-completionIcon"), t.type && i.classList.add(...t.type.split(/\s+/g).map((r) => "cm-completionIcon-" + r)), i.setAttribute("aria-hidden", "true"), i;
    },
    position: 20
  }), e.push({
    render(t, i, r) {
      let o = document.createElement("span");
      o.className = "cm-completionLabel";
      let s = t.displayLabel || t.label, l = 0;
      for (let a = 0; a < r.length; ) {
        let c = r[a++], h = r[a++];
        c > l && o.appendChild(document.createTextNode(s.slice(l, c)));
        let u = o.appendChild(document.createElement("span"));
        u.appendChild(document.createTextNode(s.slice(c, h))), u.className = "cm-completionMatchedText", l = h;
      }
      return l < s.length && o.appendChild(document.createTextNode(s.slice(l))), o;
    },
    position: 50
  }, {
    render(t) {
      if (!t.detail)
        return null;
      let i = document.createElement("span");
      return i.className = "cm-completionDetail", i.textContent = t.detail, i;
    },
    position: 80
  }), e.sort((t, i) => t.position - i.position).map((t) => t.render);
}
function Kf(n, e, t) {
  if (n <= t)
    return { from: 0, to: n };
  if (e < 0 && (e = 0), e <= n >> 1) {
    let r = Math.floor(e / t);
    return { from: r * t, to: (r + 1) * t };
  }
  let i = Math.floor((n - e) / t);
  return { from: n - (i + 1) * t, to: n - i * t };
}
class Eoe {
  constructor(e, t, i) {
    this.view = e, this.stateField = t, this.applyCompletion = i, this.info = null, this.infoDestroy = null, this.placeInfoReq = {
      read: () => this.measureInfo(),
      write: (a) => this.placeInfo(a),
      key: this
    }, this.space = null, this.currentClass = "";
    let r = e.state.field(t), { options: o, selected: s } = r.open, l = e.state.facet(Ye);
    this.optionContent = Toe(l), this.optionClass = l.optionClass, this.tooltipClass = l.tooltipClass, this.range = Kf(o.length, s, l.maxRenderedOptions), this.dom = document.createElement("div"), this.dom.className = "cm-tooltip-autocomplete", this.updateTooltipClass(e.state), this.dom.addEventListener("mousedown", (a) => {
      for (let c = a.target, h; c && c != this.dom; c = c.parentNode)
        if (c.nodeName == "LI" && (h = /-(\d+)$/.exec(c.id)) && +h[1] < o.length) {
          this.applyCompletion(e, o[+h[1]]), a.preventDefault();
          return;
        }
    }), this.dom.addEventListener("focusout", (a) => {
      let c = e.state.field(this.stateField, !1);
      c && c.tooltip && e.state.facet(Ye).closeOnBlur && a.relatedTarget != e.contentDOM && e.dispatch({ effects: lr.of(null) });
    }), this.list = this.dom.appendChild(this.createListBox(o, r.id, this.range)), this.list.addEventListener("scroll", () => {
      this.info && this.view.requestMeasure(this.placeInfoReq);
    });
  }
  mount() {
    this.updateSel();
  }
  update(e) {
    var t, i, r;
    let o = e.state.field(this.stateField), s = e.startState.field(this.stateField);
    this.updateTooltipClass(e.state), o != s && (this.updateSel(), ((t = o.open) === null || t === void 0 ? void 0 : t.disabled) != ((i = s.open) === null || i === void 0 ? void 0 : i.disabled) && this.dom.classList.toggle("cm-tooltip-autocomplete-disabled", !!(!((r = o.open) === null || r === void 0) && r.disabled)));
  }
  updateTooltipClass(e) {
    let t = this.tooltipClass(e);
    if (t != this.currentClass) {
      for (let i of this.currentClass.split(" "))
        i && this.dom.classList.remove(i);
      for (let i of t.split(" "))
        i && this.dom.classList.add(i);
      this.currentClass = t;
    }
  }
  positioned(e) {
    this.space = e, this.info && this.view.requestMeasure(this.placeInfoReq);
  }
  updateSel() {
    let e = this.view.state.field(this.stateField), t = e.open;
    if ((t.selected > -1 && t.selected < this.range.from || t.selected >= this.range.to) && (this.range = Kf(t.options.length, t.selected, this.view.state.facet(Ye).maxRenderedOptions), this.list.remove(), this.list = this.dom.appendChild(this.createListBox(t.options, e.id, this.range)), this.list.addEventListener("scroll", () => {
      this.info && this.view.requestMeasure(this.placeInfoReq);
    })), this.updateSelectedOption(t.selected)) {
      this.destroyInfo();
      let { completion: i } = t.options[t.selected], { info: r } = i;
      if (!r)
        return;
      let o = typeof r == "string" ? document.createTextNode(r) : r(i);
      if (!o)
        return;
      "then" in o ? o.then((s) => {
        s && this.view.state.field(this.stateField, !1) == e && this.addInfoPane(s, i);
      }).catch((s) => rt(this.view.state, s, "completion info")) : this.addInfoPane(o, i);
    }
  }
  addInfoPane(e, t) {
    this.destroyInfo();
    let i = this.info = document.createElement("div");
    if (i.className = "cm-tooltip cm-completionInfo", e.nodeType != null)
      i.appendChild(e), this.infoDestroy = null;
    else {
      let { dom: r, destroy: o } = e;
      i.appendChild(r), this.infoDestroy = o || null;
    }
    this.dom.appendChild(i), this.view.requestMeasure(this.placeInfoReq);
  }
  updateSelectedOption(e) {
    let t = null;
    for (let i = this.list.firstChild, r = this.range.from; i; i = i.nextSibling, r++)
      i.nodeName != "LI" || !i.id ? r-- : r == e ? i.hasAttribute("aria-selected") || (i.setAttribute("aria-selected", "true"), t = i) : i.hasAttribute("aria-selected") && i.removeAttribute("aria-selected");
    return t && Moe(this.list, t), t;
  }
  measureInfo() {
    let e = this.dom.querySelector("[aria-selected]");
    if (!e || !this.info)
      return null;
    let t = this.dom.getBoundingClientRect(), i = this.info.getBoundingClientRect(), r = e.getBoundingClientRect(), o = this.space;
    if (!o) {
      let s = this.dom.ownerDocument.defaultView || window;
      o = { left: 0, top: 0, right: s.innerWidth, bottom: s.innerHeight };
    }
    return r.top > Math.min(o.bottom, t.bottom) - 10 || r.bottom < Math.max(o.top, t.top) + 10 ? null : this.view.state.facet(Ye).positionInfo(this.view, t, r, i, o);
  }
  placeInfo(e) {
    this.info && (e ? (e.style && (this.info.style.cssText = e.style), this.info.className = "cm-tooltip cm-completionInfo " + (e.class || "")) : this.info.style.cssText = "top: -1e6px");
  }
  createListBox(e, t, i) {
    const r = document.createElement("ul");
    r.id = t, r.setAttribute("role", "listbox"), r.setAttribute("aria-expanded", "true"), r.setAttribute("aria-label", this.view.state.phrase("Completions"));
    let o = null;
    for (let s = i.from; s < i.to; s++) {
      let { completion: l, match: a } = e[s], { section: c } = l;
      if (c) {
        let f = typeof c == "string" ? c : c.name;
        if (f != o && (s > i.from || i.from == 0))
          if (o = f, typeof c != "string" && c.header)
            r.appendChild(c.header(c));
          else {
            let d = r.appendChild(document.createElement("completion-section"));
            d.textContent = f;
          }
      }
      const h = r.appendChild(document.createElement("li"));
      h.id = t + "-" + s, h.setAttribute("role", "option");
      let u = this.optionClass(l);
      u && (h.className = u);
      for (let f of this.optionContent) {
        let d = f(l, this.view.state, a);
        d && h.appendChild(d);
      }
    }
    return i.from && r.classList.add("cm-completionListIncompleteTop"), i.to < e.length && r.classList.add("cm-completionListIncompleteBottom"), r;
  }
  destroyInfo() {
    this.info && (this.infoDestroy && this.infoDestroy(), this.info.remove(), this.info = null);
  }
  destroy() {
    this.destroyInfo();
  }
}
function Doe(n, e) {
  return (t) => new Eoe(t, n, e);
}
function Moe(n, e) {
  let t = n.getBoundingClientRect(), i = e.getBoundingClientRect();
  i.top < t.top ? n.scrollTop -= t.top - i.top : i.bottom > t.bottom && (n.scrollTop += i.bottom - t.bottom);
}
function Yf(n) {
  return (n.boost || 0) * 100 + (n.apply ? 10 : 0) + (n.info ? 5 : 0) + (n.type ? 1 : 0);
}
function Ooe(n, e) {
  let t = [], i = null, r = (a) => {
    t.push(a);
    let { section: c } = a.completion;
    if (c) {
      i || (i = []);
      let h = typeof c == "string" ? c : c.name;
      i.some((u) => u.name == h) || i.push(typeof c == "string" ? { name: h } : c);
    }
  };
  for (let a of n)
    if (a.hasResult()) {
      let c = a.result.getMatch;
      if (a.result.filter === !1)
        for (let h of a.result.options)
          r(new Wf(h, a.source, c ? c(h) : [], 1e9 - t.length));
      else {
        let h = new Coe(e.sliceDoc(a.from, a.to));
        for (let u of a.result.options)
          if (h.match(u.label)) {
            let f = u.displayLabel ? c ? c(u, h.matched) : [] : h.matched;
            r(new Wf(u, a.source, f, h.score + (u.boost || 0)));
          }
      }
    }
  if (i) {
    let a = /* @__PURE__ */ Object.create(null), c = 0, h = (u, f) => {
      var d, p;
      return ((d = u.rank) !== null && d !== void 0 ? d : 1e9) - ((p = f.rank) !== null && p !== void 0 ? p : 1e9) || (u.name < f.name ? -1 : 1);
    };
    for (let u of i.sort(h))
      c -= 1e5, a[u.name] = c;
    for (let u of t) {
      let { section: f } = u.completion;
      f && (u.score += a[typeof f == "string" ? f : f.name]);
    }
  }
  let o = [], s = null, l = e.facet(Ye).compareCompletions;
  for (let a of t.sort((c, h) => h.score - c.score || l(c.completion, h.completion))) {
    let c = a.completion;
    !s || s.label != c.label || s.detail != c.detail || s.type != null && c.type != null && s.type != c.type || s.apply != c.apply || s.boost != c.boost ? o.push(a) : Yf(a.completion) > Yf(s) && (o[o.length - 1] = a), s = a.completion;
  }
  return o;
}
class ti {
  constructor(e, t, i, r, o, s) {
    this.options = e, this.attrs = t, this.tooltip = i, this.timestamp = r, this.selected = o, this.disabled = s;
  }
  setSelected(e, t) {
    return e == this.selected || e >= this.options.length ? this : new ti(this.options, Jf(t, e), this.tooltip, this.timestamp, e, this.disabled);
  }
  static build(e, t, i, r, o) {
    let s = Ooe(e, t);
    if (!s.length)
      return r && e.some((a) => a.state == 1) ? new ti(r.options, r.attrs, r.tooltip, r.timestamp, r.selected, !0) : null;
    let l = t.facet(Ye).selectOnOpen ? 0 : -1;
    if (r && r.selected != l && r.selected != -1) {
      let a = r.options[r.selected].completion;
      for (let c = 0; c < s.length; c++)
        if (s[c].completion == a) {
          l = c;
          break;
        }
    }
    return new ti(s, Jf(i, l), {
      pos: e.reduce((a, c) => c.hasResult() ? Math.min(a, c.from) : a, 1e8),
      create: Doe(Xe, b0),
      above: o.aboveCursor
    }, r ? r.timestamp : Date.now(), l, !1);
  }
  map(e) {
    return new ti(this.options, this.attrs, Object.assign(Object.assign({}, this.tooltip), { pos: e.mapPos(this.tooltip.pos) }), this.timestamp, this.selected, this.disabled);
  }
}
class Jo {
  constructor(e, t, i) {
    this.active = e, this.id = t, this.open = i;
  }
  static start() {
    return new Jo(Ioe, "cm-ac-" + Math.floor(Math.random() * 2e6).toString(36), null);
  }
  update(e) {
    let { state: t } = e, i = t.facet(Ye), o = (i.override || t.languageDataAt("autocomplete", rn(t)).map(Aoe)).map((l) => (this.active.find((c) => c.source == l) || new je(l, this.active.some((c) => c.state != 0) ? 1 : 0)).update(e, i));
    o.length == this.active.length && o.every((l, a) => l == this.active[a]) && (o = this.active);
    let s = this.open;
    s && e.docChanged && (s = s.map(e.changes)), e.selection || o.some((l) => l.hasResult() && e.changes.touchesRange(l.from, l.to)) || !Loe(o, this.active) ? s = ti.build(o, t, this.id, s, i) : s && s.disabled && !o.some((l) => l.state == 1) && (s = null), !s && o.every((l) => l.state != 1) && o.some((l) => l.hasResult()) && (o = o.map((l) => l.hasResult() ? new je(l.source, 0) : l));
    for (let l of e.effects)
      l.is(g0) && (s = s && s.setSelected(l.value, this.id));
    return o == this.active && s == this.open ? this : new Jo(o, this.id, s);
  }
  get tooltip() {
    return this.open ? this.open.tooltip : null;
  }
  get attrs() {
    return this.open ? this.open.attrs : Roe;
  }
}
function Loe(n, e) {
  if (n == e)
    return !0;
  for (let t = 0, i = 0; ; ) {
    for (; t < n.length && !n[t].hasResult; )
      t++;
    for (; i < e.length && !e[i].hasResult; )
      i++;
    let r = t == n.length, o = i == e.length;
    if (r || o)
      return r == o;
    if (n[t++].result != e[i++].result)
      return !1;
  }
}
const Roe = {
  "aria-autocomplete": "list"
};
function Jf(n, e) {
  let t = {
    "aria-autocomplete": "list",
    "aria-haspopup": "listbox",
    "aria-controls": n
  };
  return e > -1 && (t["aria-activedescendant"] = n + "-" + e), t;
}
const Ioe = [];
function Ra(n) {
  return n.isUserEvent("input.type") ? "input" : n.isUserEvent("delete.backward") ? "delete" : null;
}
class je {
  constructor(e, t, i = -1) {
    this.source = e, this.state = t, this.explicitPos = i;
  }
  hasResult() {
    return !1;
  }
  update(e, t) {
    let i = Ra(e), r = this;
    i ? r = r.handleUserEvent(e, i, t) : e.docChanged ? r = r.handleChange(e) : e.selection && r.state != 0 && (r = new je(r.source, 0));
    for (let o of e.effects)
      if (o.is(Mc))
        r = new je(r.source, 1, o.value ? rn(e.state) : -1);
      else if (o.is(lr))
        r = new je(r.source, 0);
      else if (o.is(m0))
        for (let s of o.value)
          s.source == r.source && (r = s);
    return r;
  }
  handleUserEvent(e, t, i) {
    return t == "delete" || !i.activateOnTyping ? this.map(e.changes) : new je(this.source, 1);
  }
  handleChange(e) {
    return e.changes.touchesRange(rn(e.startState)) ? new je(this.source, 0) : this.map(e.changes);
  }
  map(e) {
    return e.empty || this.explicitPos < 0 ? this : new je(this.source, this.state, e.mapPos(this.explicitPos));
  }
}
class ci extends je {
  constructor(e, t, i, r, o) {
    super(e, 2, t), this.result = i, this.from = r, this.to = o;
  }
  hasResult() {
    return !0;
  }
  handleUserEvent(e, t, i) {
    var r;
    let o = e.changes.mapPos(this.from), s = e.changes.mapPos(this.to, 1), l = rn(e.state);
    if ((this.explicitPos < 0 ? l <= o : l < this.from) || l > s || t == "delete" && rn(e.startState) == this.from)
      return new je(this.source, t == "input" && i.activateOnTyping ? 1 : 0);
    let a = this.explicitPos < 0 ? -1 : e.changes.mapPos(this.explicitPos), c;
    return Boe(this.result.validFor, e.state, o, s) ? new ci(this.source, a, this.result, o, s) : this.result.update && (c = this.result.update(this.result, o, s, new d0(e.state, l, a >= 0))) ? new ci(this.source, a, c, c.from, (r = c.to) !== null && r !== void 0 ? r : rn(e.state)) : new je(this.source, 1, a);
  }
  handleChange(e) {
    return e.changes.touchesRange(this.from, this.to) ? new je(this.source, 0) : this.map(e.changes);
  }
  map(e) {
    return e.empty ? this : new ci(this.source, this.explicitPos < 0 ? -1 : e.mapPos(this.explicitPos), this.result, e.mapPos(this.from), e.mapPos(this.to, 1));
  }
}
function Boe(n, e, t, i) {
  if (!n)
    return !1;
  let r = e.sliceDoc(t, i);
  return typeof n == "function" ? n(r, t, i, e) : p0(n, !0).test(r);
}
const m0 = /* @__PURE__ */ W.define({
  map(n, e) {
    return n.map((t) => t.map(e));
  }
}), g0 = /* @__PURE__ */ W.define(), Xe = /* @__PURE__ */ Me.define({
  create() {
    return Jo.start();
  },
  update(n, e) {
    return n.update(e);
  },
  provide: (n) => [
    mc.from(n, (e) => e.tooltip),
    I.contentAttributes.from(n, (e) => e.attrs)
  ]
});
function b0(n, e) {
  const t = e.completion.apply || e.completion.label;
  let i = n.state.field(Xe).active.find((r) => r.source == e.source);
  return i instanceof ci ? (typeof t == "string" ? n.dispatch(Object.assign(Object.assign({}, _oe(n.state, t, i.from, i.to)), { annotations: woe.of(e.completion) })) : t(n, e.completion, i.from, i.to), !0) : !1;
}
function Gr(n, e = "option") {
  return (t) => {
    let i = t.state.field(Xe, !1);
    if (!i || !i.open || i.open.disabled || Date.now() - i.open.timestamp < t.state.facet(Ye).interactionDelay)
      return !1;
    let r = 1, o;
    e == "page" && (o = ig(t, i.open.tooltip)) && (r = Math.max(2, Math.floor(o.dom.offsetHeight / o.dom.querySelector("li").offsetHeight) - 1));
    let { length: s } = i.open.options, l = i.open.selected > -1 ? i.open.selected + r * (n ? 1 : -1) : n ? 0 : s - 1;
    return l < 0 ? l = e == "page" ? 0 : s - 1 : l >= s && (l = e == "page" ? s - 1 : 0), t.dispatch({ effects: g0.of(l) }), !0;
  };
}
const Noe = (n) => {
  let e = n.state.field(Xe, !1);
  return n.state.readOnly || !e || !e.open || e.open.selected < 0 || e.open.disabled || Date.now() - e.open.timestamp < n.state.facet(Ye).interactionDelay ? !1 : b0(n, e.open.options[e.open.selected]);
}, Poe = (n) => n.state.field(Xe, !1) ? (n.dispatch({ effects: Mc.of(!0) }), !0) : !1, Foe = (n) => {
  let e = n.state.field(Xe, !1);
  return !e || !e.active.some((t) => t.state != 0) ? !1 : (n.dispatch({ effects: lr.of(null) }), !0);
};
class qoe {
  constructor(e, t) {
    this.active = e, this.context = t, this.time = Date.now(), this.updates = [], this.done = void 0;
  }
}
const Zf = 50, Hoe = 50, zoe = 1e3, $oe = /* @__PURE__ */ ke.fromClass(class {
  constructor(n) {
    this.view = n, this.debounceUpdate = -1, this.running = [], this.debounceAccept = -1, this.composing = 0;
    for (let e of n.state.field(Xe).active)
      e.state == 1 && this.startQuery(e);
  }
  update(n) {
    let e = n.state.field(Xe);
    if (!n.selectionSet && !n.docChanged && n.startState.field(Xe) == e)
      return;
    let t = n.transactions.some((i) => (i.selection || i.docChanged) && !Ra(i));
    for (let i = 0; i < this.running.length; i++) {
      let r = this.running[i];
      if (t || r.updates.length + n.transactions.length > Hoe && Date.now() - r.time > zoe) {
        for (let o of r.context.abortListeners)
          try {
            o();
          } catch (s) {
            rt(this.view.state, s);
          }
        r.context.abortListeners = null, this.running.splice(i--, 1);
      } else
        r.updates.push(...n.transactions);
    }
    if (this.debounceUpdate > -1 && clearTimeout(this.debounceUpdate), this.debounceUpdate = e.active.some((i) => i.state == 1 && !this.running.some((r) => r.active.source == i.source)) ? setTimeout(() => this.startUpdate(), Zf) : -1, this.composing != 0)
      for (let i of n.transactions)
        Ra(i) == "input" ? this.composing = 2 : this.composing == 2 && i.selection && (this.composing = 3);
  }
  startUpdate() {
    this.debounceUpdate = -1;
    let { state: n } = this.view, e = n.field(Xe);
    for (let t of e.active)
      t.state == 1 && !this.running.some((i) => i.active.source == t.source) && this.startQuery(t);
  }
  startQuery(n) {
    let { state: e } = this.view, t = rn(e), i = new d0(e, t, n.explicitPos == t), r = new qoe(n, i);
    this.running.push(r), Promise.resolve(n.source(i)).then((o) => {
      r.context.aborted || (r.done = o || null, this.scheduleAccept());
    }, (o) => {
      this.view.dispatch({ effects: lr.of(null) }), rt(this.view.state, o);
    });
  }
  scheduleAccept() {
    this.running.every((n) => n.done !== void 0) ? this.accept() : this.debounceAccept < 0 && (this.debounceAccept = setTimeout(() => this.accept(), Zf));
  }
  accept() {
    var n;
    this.debounceAccept > -1 && clearTimeout(this.debounceAccept), this.debounceAccept = -1;
    let e = [], t = this.view.state.facet(Ye);
    for (let i = 0; i < this.running.length; i++) {
      let r = this.running[i];
      if (r.done === void 0)
        continue;
      if (this.running.splice(i--, 1), r.done) {
        let s = new ci(r.active.source, r.active.explicitPos, r.done, r.done.from, (n = r.done.to) !== null && n !== void 0 ? n : rn(r.updates.length ? r.updates[0].startState : this.view.state));
        for (let l of r.updates)
          s = s.update(l, t);
        if (s.hasResult()) {
          e.push(s);
          continue;
        }
      }
      let o = this.view.state.field(Xe).active.find((s) => s.source == r.active.source);
      if (o && o.state == 1)
        if (r.done == null) {
          let s = new je(r.active.source, 0);
          for (let l of r.updates)
            s = s.update(l, t);
          s.state != 1 && e.push(s);
        } else
          this.startQuery(o);
    }
    e.length && this.view.dispatch({ effects: m0.of(e) });
  }
}, {
  eventHandlers: {
    blur(n) {
      let e = this.view.state.field(Xe, !1);
      if (e && e.tooltip && this.view.state.facet(Ye).closeOnBlur) {
        let t = e.open && ig(this.view, e.open.tooltip);
        (!t || !t.dom.contains(n.relatedTarget)) && this.view.dispatch({ effects: lr.of(null) });
      }
    },
    compositionstart() {
      this.composing = 1;
    },
    compositionend() {
      this.composing == 3 && setTimeout(() => this.view.dispatch({ effects: Mc.of(!1) }), 20), this.composing = 0;
    }
  }
}), Voe = /* @__PURE__ */ I.baseTheme({
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
}), ar = {
  brackets: ["(", "[", "{", "'", '"'],
  before: ")]}:;>",
  stringPrefixes: []
}, Tn = /* @__PURE__ */ W.define({
  map(n, e) {
    let t = e.mapPos(n, -1, ze.TrackAfter);
    return t == null ? void 0 : t;
  }
}), Oc = /* @__PURE__ */ new class extends Rn {
}();
Oc.startSide = 1;
Oc.endSide = -1;
const y0 = /* @__PURE__ */ Me.define({
  create() {
    return X.empty;
  },
  update(n, e) {
    if (e.selection) {
      let t = e.state.doc.lineAt(e.selection.main.head).from, i = e.startState.doc.lineAt(e.startState.selection.main.head).from;
      t != e.changes.mapPos(i, -1) && (n = X.empty);
    }
    n = n.map(e.changes);
    for (let t of e.effects)
      t.is(Tn) && (n = n.update({ add: [Oc.range(t.value, t.value + 1)] }));
    return n;
  }
});
function Uoe() {
  return [joe, y0];
}
const El = "()[]{}<>";
function v0(n) {
  for (let e = 0; e < El.length; e += 2)
    if (El.charCodeAt(e) == n)
      return El.charAt(e + 1);
  return oc(n < 128 ? n : n + 1);
}
function x0(n, e) {
  return n.languageDataAt("closeBrackets", e)[0] || ar;
}
const Woe = typeof navigator == "object" && /* @__PURE__ */ /Android\b/.test(navigator.userAgent), joe = /* @__PURE__ */ I.inputHandler.of((n, e, t, i) => {
  if ((Woe ? n.composing : n.compositionStarted) || n.state.readOnly)
    return !1;
  let r = n.state.selection.main;
  if (i.length > 2 || i.length == 2 && nt(Se(i, 0)) == 1 || e != r.from || t != r.to)
    return !1;
  let o = Yoe(n.state, i);
  return o ? (n.dispatch(o), !0) : !1;
}), Goe = ({ state: n, dispatch: e }) => {
  if (n.readOnly)
    return !1;
  let i = x0(n, n.selection.main.head).brackets || ar.brackets, r = null, o = n.changeByRange((s) => {
    if (s.empty) {
      let l = Joe(n.doc, s.head);
      for (let a of i)
        if (a == l && ws(n.doc, s.head) == v0(Se(a, 0)))
          return {
            changes: { from: s.head - a.length, to: s.head + a.length },
            range: A.cursor(s.head - a.length)
          };
    }
    return { range: r = s };
  });
  return r || e(n.update(o, { scrollIntoView: !0, userEvent: "delete.backward" })), !r;
}, Koe = [
  { key: "Backspace", run: Goe }
];
function Yoe(n, e) {
  let t = x0(n, n.selection.main.head), i = t.brackets || ar.brackets;
  for (let r of i) {
    let o = v0(Se(r, 0));
    if (e == r)
      return o == r ? Qoe(n, r, i.indexOf(r + r + r) > -1, t) : Zoe(n, r, o, t.before || ar.before);
    if (e == o && k0(n, n.selection.main.from))
      return Xoe(n, r, o);
  }
  return null;
}
function k0(n, e) {
  let t = !1;
  return n.field(y0).between(0, n.doc.length, (i) => {
    i == e && (t = !0);
  }), t;
}
function ws(n, e) {
  let t = n.sliceString(e, e + 2);
  return t.slice(0, nt(Se(t, 0)));
}
function Joe(n, e) {
  let t = n.sliceString(e - 2, e);
  return nt(Se(t, 0)) == t.length ? t : t.slice(1);
}
function Zoe(n, e, t, i) {
  let r = null, o = n.changeByRange((s) => {
    if (!s.empty)
      return {
        changes: [{ insert: e, from: s.from }, { insert: t, from: s.to }],
        effects: Tn.of(s.to + e.length),
        range: A.range(s.anchor + e.length, s.head + e.length)
      };
    let l = ws(n.doc, s.head);
    return !l || /\s/.test(l) || i.indexOf(l) > -1 ? {
      changes: { insert: e + t, from: s.head },
      effects: Tn.of(s.head + e.length),
      range: A.cursor(s.head + e.length)
    } : { range: r = s };
  });
  return r ? null : n.update(o, {
    scrollIntoView: !0,
    userEvent: "input.type"
  });
}
function Xoe(n, e, t) {
  let i = null, r = n.changeByRange((o) => o.empty && ws(n.doc, o.head) == t ? {
    changes: { from: o.head, to: o.head + t.length, insert: t },
    range: A.cursor(o.head + t.length)
  } : i = { range: o });
  return i ? null : n.update(r, {
    scrollIntoView: !0,
    userEvent: "input.type"
  });
}
function Qoe(n, e, t, i) {
  let r = i.stringPrefixes || ar.stringPrefixes, o = null, s = n.changeByRange((l) => {
    if (!l.empty)
      return {
        changes: [{ insert: e, from: l.from }, { insert: e, from: l.to }],
        effects: Tn.of(l.to + e.length),
        range: A.range(l.anchor + e.length, l.head + e.length)
      };
    let a = l.head, c = ws(n.doc, a), h;
    if (c == e) {
      if (Xf(n, a))
        return {
          changes: { insert: e + e, from: a },
          effects: Tn.of(a + e.length),
          range: A.cursor(a + e.length)
        };
      if (k0(n, a)) {
        let f = t && n.sliceDoc(a, a + e.length * 3) == e + e + e ? e + e + e : e;
        return {
          changes: { from: a, to: a + f.length, insert: f },
          range: A.cursor(a + f.length)
        };
      }
    } else {
      if (t && n.sliceDoc(a - 2 * e.length, a) == e + e && (h = Qf(n, a - 2 * e.length, r)) > -1 && Xf(n, h))
        return {
          changes: { insert: e + e + e + e, from: a },
          effects: Tn.of(a + e.length),
          range: A.cursor(a + e.length)
        };
      if (n.charCategorizer(a)(c) != re.Word && Qf(n, a, r) > -1 && !ese(n, a, e, r))
        return {
          changes: { insert: e + e, from: a },
          effects: Tn.of(a + e.length),
          range: A.cursor(a + e.length)
        };
    }
    return { range: o = l };
  });
  return o ? null : n.update(s, {
    scrollIntoView: !0,
    userEvent: "input.type"
  });
}
function Xf(n, e) {
  let t = Be(n).resolveInner(e + 1);
  return t.parent && t.from == e;
}
function ese(n, e, t, i) {
  let r = Be(n).resolveInner(e, -1), o = i.reduce((s, l) => Math.max(s, l.length), 0);
  for (let s = 0; s < 5; s++) {
    let l = n.sliceDoc(r.from, Math.min(r.to, r.from + t.length + o)), a = l.indexOf(t);
    if (!a || a > -1 && i.indexOf(l.slice(0, a)) > -1) {
      let h = r.firstChild;
      for (; h && h.from == r.from && h.to - h.from > t.length + a; ) {
        if (n.sliceDoc(h.to - t.length, h.to) == t)
          return !1;
        h = h.firstChild;
      }
      return !0;
    }
    let c = r.to == e && r.parent;
    if (!c)
      break;
    r = c;
  }
  return !1;
}
function Qf(n, e, t) {
  let i = n.charCategorizer(e);
  if (i(n.sliceDoc(e - 1, e)) != re.Word)
    return e;
  for (let r of t) {
    let o = e - r.length;
    if (n.sliceDoc(o, e) == r && i(n.sliceDoc(o - 1, o)) != re.Word)
      return o;
  }
  return -1;
}
function tse(n = {}) {
  return [
    Xe,
    Ye.of(n),
    $oe,
    nse,
    Voe
  ];
}
const w0 = [
  { key: "Ctrl-Space", run: Poe },
  { key: "Escape", run: Foe },
  { key: "ArrowDown", run: /* @__PURE__ */ Gr(!0) },
  { key: "ArrowUp", run: /* @__PURE__ */ Gr(!1) },
  { key: "PageDown", run: /* @__PURE__ */ Gr(!0, "page") },
  { key: "PageUp", run: /* @__PURE__ */ Gr(!1, "page") },
  { key: "Enter", run: Noe }
], nse = /* @__PURE__ */ xi.highest(/* @__PURE__ */ ds.computeN([Ye], (n) => n.facet(Ye).defaultKeymap ? [w0] : []));
class ise {
  constructor(e, t, i) {
    this.from = e, this.to = t, this.diagnostic = i;
  }
}
class _n {
  constructor(e, t, i) {
    this.diagnostics = e, this.panel = t, this.selected = i;
  }
  static init(e, t, i) {
    let r = e, o = i.facet(C0).markerFilter;
    o && (r = o(r));
    let s = $.set(r.map((l) => l.from == l.to || l.from == l.to - 1 && i.doc.lineAt(l.from).to == l.from ? $.widget({
      widget: new fse(l),
      diagnostic: l
    }).range(l.from) : $.mark({
      attributes: { class: "cm-lintRange cm-lintRange-" + l.severity + (l.markClass ? " " + l.markClass : "") },
      diagnostic: l
    }).range(l.from, l.to)), !0);
    return new _n(s, t, mi(s));
  }
}
function mi(n, e = null, t = 0) {
  let i = null;
  return n.between(t, 1e9, (r, o, { spec: s }) => {
    if (!(e && s.diagnostic != e))
      return i = new ise(r, o, s.diagnostic), !1;
  }), i;
}
function rse(n, e) {
  let t = n.startState.doc.lineAt(e.pos);
  return !!(n.effects.some((i) => i.is(_0)) || n.changes.touchesRange(t.from, t.to));
}
function ose(n, e) {
  return n.field(et, !1) ? e : e.concat(W.appendConfig.of(mse));
}
const _0 = /* @__PURE__ */ W.define(), Lc = /* @__PURE__ */ W.define(), A0 = /* @__PURE__ */ W.define(), et = /* @__PURE__ */ Me.define({
  create() {
    return new _n($.none, null, null);
  },
  update(n, e) {
    if (e.docChanged) {
      let t = n.diagnostics.map(e.changes), i = null;
      if (n.selected) {
        let r = e.changes.mapPos(n.selected.from, 1);
        i = mi(t, n.selected.diagnostic, r) || mi(t, null, r);
      }
      n = new _n(t, n.panel, i);
    }
    for (let t of e.effects)
      t.is(_0) ? n = _n.init(t.value, n.panel, e.state) : t.is(Lc) ? n = new _n(n.diagnostics, t.value ? _s.open : null, n.selected) : t.is(A0) && (n = new _n(n.diagnostics, n.panel, t.value));
    return n;
  },
  provide: (n) => [
    rr.from(n, (e) => e.panel),
    I.decorations.from(n, (e) => e.diagnostics)
  ]
}), sse = /* @__PURE__ */ $.mark({ class: "cm-lintRange cm-lintRange-active" });
function lse(n, e, t) {
  let { diagnostics: i } = n.state.field(et), r = [], o = 2e8, s = 0;
  i.between(e - (t < 0 ? 1 : 0), e + (t > 0 ? 1 : 0), (a, c, { spec: h }) => {
    e >= a && e <= c && (a == c || (e > a || t > 0) && (e < c || t < 0)) && (r.push(h.diagnostic), o = Math.min(a, o), s = Math.max(c, s));
  });
  let l = n.state.facet(C0).tooltipFilter;
  return l && (r = l(r)), r.length ? {
    pos: o,
    end: s,
    above: n.state.doc.lineAt(o).to < s,
    create() {
      return { dom: ase(n, r) };
    }
  } : null;
}
function ase(n, e) {
  return ee("ul", { class: "cm-tooltip-lint" }, e.map((t) => T0(n, t, !1)));
}
const cse = (n) => {
  let e = n.state.field(et, !1);
  (!e || !e.panel) && n.dispatch({ effects: ose(n.state, [Lc.of(!0)]) });
  let t = ir(n, _s.open);
  return t && t.dom.querySelector(".cm-panel-lint ul").focus(), !0;
}, ed = (n) => {
  let e = n.state.field(et, !1);
  return !e || !e.panel ? !1 : (n.dispatch({ effects: Lc.of(!1) }), !0);
}, hse = (n) => {
  let e = n.state.field(et, !1);
  if (!e)
    return !1;
  let t = n.state.selection.main, i = e.diagnostics.iter(t.to + 1);
  return !i.value && (i = e.diagnostics.iter(0), !i.value || i.from == t.from && i.to == t.to) ? !1 : (n.dispatch({ selection: { anchor: i.from, head: i.to }, scrollIntoView: !0 }), !0);
}, use = [
  { key: "Mod-Shift-m", run: cse, preventDefault: !0 },
  { key: "F8", run: hse }
], C0 = /* @__PURE__ */ B.define({
  combine(n) {
    return Object.assign({ sources: n.map((e) => e.source) }, Nt(n.map((e) => e.config), {
      delay: 750,
      markerFilter: null,
      tooltipFilter: null,
      needsRefresh: null
    }, {
      needsRefresh: (e, t) => e ? t ? (i) => e(i) || t(i) : e : t
    }));
  }
});
function S0(n) {
  let e = [];
  if (n)
    e:
      for (let { name: t } of n) {
        for (let i = 0; i < t.length; i++) {
          let r = t[i];
          if (/[a-zA-Z]/.test(r) && !e.some((o) => o.toLowerCase() == r.toLowerCase())) {
            e.push(r);
            continue e;
          }
        }
        e.push("");
      }
  return e;
}
function T0(n, e, t) {
  var i;
  let r = t ? S0(e.actions) : [];
  return ee("li", { class: "cm-diagnostic cm-diagnostic-" + e.severity }, ee("span", { class: "cm-diagnosticText" }, e.renderMessage ? e.renderMessage() : e.message), (i = e.actions) === null || i === void 0 ? void 0 : i.map((o, s) => {
    let l = !1, a = (f) => {
      if (f.preventDefault(), l)
        return;
      l = !0;
      let d = mi(n.state.field(et).diagnostics, e);
      d && o.apply(n, d.from, d.to);
    }, { name: c } = o, h = r[s] ? c.indexOf(r[s]) : -1, u = h < 0 ? c : [
      c.slice(0, h),
      ee("u", c.slice(h, h + 1)),
      c.slice(h + 1)
    ];
    return ee("button", {
      type: "button",
      class: "cm-diagnosticAction",
      onclick: a,
      onmousedown: a,
      "aria-label": ` Action: ${c}${h < 0 ? "" : ` (access key "${r[s]})"`}.`
    }, u);
  }), e.source && ee("div", { class: "cm-diagnosticSource" }, e.source));
}
class fse extends Pn {
  constructor(e) {
    super(), this.diagnostic = e;
  }
  eq(e) {
    return e.diagnostic == this.diagnostic;
  }
  toDOM() {
    return ee("span", { class: "cm-lintPoint cm-lintPoint-" + this.diagnostic.severity });
  }
}
class td {
  constructor(e, t) {
    this.diagnostic = t, this.id = "item_" + Math.floor(Math.random() * 4294967295).toString(16), this.dom = T0(e, t, !0), this.dom.id = this.id, this.dom.setAttribute("role", "option");
  }
}
class _s {
  constructor(e) {
    this.view = e, this.items = [];
    let t = (r) => {
      if (r.keyCode == 27)
        ed(this.view), this.view.focus();
      else if (r.keyCode == 38 || r.keyCode == 33)
        this.moveSelection((this.selectedIndex - 1 + this.items.length) % this.items.length);
      else if (r.keyCode == 40 || r.keyCode == 34)
        this.moveSelection((this.selectedIndex + 1) % this.items.length);
      else if (r.keyCode == 36)
        this.moveSelection(0);
      else if (r.keyCode == 35)
        this.moveSelection(this.items.length - 1);
      else if (r.keyCode == 13)
        this.view.focus();
      else if (r.keyCode >= 65 && r.keyCode <= 90 && this.selectedIndex >= 0) {
        let { diagnostic: o } = this.items[this.selectedIndex], s = S0(o.actions);
        for (let l = 0; l < s.length; l++)
          if (s[l].toUpperCase().charCodeAt(0) == r.keyCode) {
            let a = mi(this.view.state.field(et).diagnostics, o);
            a && o.actions[l].apply(e, a.from, a.to);
          }
      } else
        return;
      r.preventDefault();
    }, i = (r) => {
      for (let o = 0; o < this.items.length; o++)
        this.items[o].dom.contains(r.target) && this.moveSelection(o);
    };
    this.list = ee("ul", {
      tabIndex: 0,
      role: "listbox",
      "aria-label": this.view.state.phrase("Diagnostics"),
      onkeydown: t,
      onclick: i
    }), this.dom = ee("div", { class: "cm-panel-lint" }, this.list, ee("button", {
      type: "button",
      name: "close",
      "aria-label": this.view.state.phrase("close"),
      onclick: () => ed(this.view)
    }, "\xD7")), this.update();
  }
  get selectedIndex() {
    let e = this.view.state.field(et).selected;
    if (!e)
      return -1;
    for (let t = 0; t < this.items.length; t++)
      if (this.items[t].diagnostic == e.diagnostic)
        return t;
    return -1;
  }
  update() {
    let { diagnostics: e, selected: t } = this.view.state.field(et), i = 0, r = !1, o = null;
    for (e.between(0, this.view.state.doc.length, (s, l, { spec: a }) => {
      let c = -1, h;
      for (let u = i; u < this.items.length; u++)
        if (this.items[u].diagnostic == a.diagnostic) {
          c = u;
          break;
        }
      c < 0 ? (h = new td(this.view, a.diagnostic), this.items.splice(i, 0, h), r = !0) : (h = this.items[c], c > i && (this.items.splice(i, c - i), r = !0)), t && h.diagnostic == t.diagnostic ? h.dom.hasAttribute("aria-selected") || (h.dom.setAttribute("aria-selected", "true"), o = h) : h.dom.hasAttribute("aria-selected") && h.dom.removeAttribute("aria-selected"), i++;
    }); i < this.items.length && !(this.items.length == 1 && this.items[0].diagnostic.from < 0); )
      r = !0, this.items.pop();
    this.items.length == 0 && (this.items.push(new td(this.view, {
      from: -1,
      to: -1,
      severity: "info",
      message: this.view.state.phrase("No diagnostics")
    })), r = !0), o ? (this.list.setAttribute("aria-activedescendant", o.id), this.view.requestMeasure({
      key: this,
      read: () => ({ sel: o.dom.getBoundingClientRect(), panel: this.list.getBoundingClientRect() }),
      write: ({ sel: s, panel: l }) => {
        s.top < l.top ? this.list.scrollTop -= l.top - s.top : s.bottom > l.bottom && (this.list.scrollTop += s.bottom - l.bottom);
      }
    })) : this.selectedIndex < 0 && this.list.removeAttribute("aria-activedescendant"), r && this.sync();
  }
  sync() {
    let e = this.list.firstChild;
    function t() {
      let i = e;
      e = i.nextSibling, i.remove();
    }
    for (let i of this.items)
      if (i.dom.parentNode == this.list) {
        for (; e != i.dom; )
          t();
        e = i.dom.nextSibling;
      } else
        this.list.insertBefore(i.dom, e);
    for (; e; )
      t();
  }
  moveSelection(e) {
    if (this.selectedIndex < 0)
      return;
    let t = this.view.state.field(et), i = mi(t.diagnostics, this.items[e].diagnostic);
    !i || this.view.dispatch({
      selection: { anchor: i.from, head: i.to },
      scrollIntoView: !0,
      effects: A0.of(i)
    });
  }
  static open(e) {
    return new _s(e);
  }
}
function dse(n, e = 'viewBox="0 0 40 40"') {
  return `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${e}>${encodeURIComponent(n)}</svg>')`;
}
function Kr(n) {
  return dse(`<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${n}" fill="none" stroke-width=".7"/>`, 'width="6" height="3"');
}
const pse = /* @__PURE__ */ I.baseTheme({
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
  ".cm-lintRange-error": { backgroundImage: /* @__PURE__ */ Kr("#d11") },
  ".cm-lintRange-warning": { backgroundImage: /* @__PURE__ */ Kr("orange") },
  ".cm-lintRange-info": { backgroundImage: /* @__PURE__ */ Kr("#999") },
  ".cm-lintRange-hint": { backgroundImage: /* @__PURE__ */ Kr("#66d") },
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
}), mse = [
  et,
  /* @__PURE__ */ I.decorations.compute([et], (n) => {
    let { selected: e, panel: t } = n.field(et);
    return !e || !t || e.from == e.to ? $.none : $.set([
      sse.range(e.from, e.to)
    ]);
  }),
  /* @__PURE__ */ bne(lse, { hideOn: rse }),
  pse
], gse = /* @__PURE__ */ (() => [
  Sne(),
  Dne(),
  Yte(),
  Gie(),
  yie(),
  Fte(),
  Vte(),
  K.allowMultipleSelections.of(!0),
  oie(),
  xie(_ie, { fallback: !0 }),
  Mie(),
  Uoe(),
  tse(),
  lne(),
  hne(),
  tne(),
  Zre(),
  ds.of([
    ...Koe,
    ...Wre,
    ...goe,
    ...nre,
    ...mie,
    ...w0,
    ...use
  ])
])(), bse = (n) => {
  const e = md();
  return mo(() => {
    e.current = n;
  }, [n]), e.current;
}, yse = ({
  value: n,
  setText: e,
  id: t,
  name: i,
  className: r,
  templateState: o
}) => {
  const s = md(null), l = bse(o), a = (c, h) => document.getElementById(h).value = c;
  return mo(() => {
    const c = K.create({
      doc: n,
      extensions: [gse, ds.of([jre]), I.lineWrapping, I.updateListener.of((u) => {
        u.docChanged && e(h.state.doc.toString());
      })]
    }), h = new I({
      state: c,
      parent: document.getElementById("editor")
    });
    return s.current = h, () => {
      h.destroy();
    };
  }, []), mo(() => {
    o && (!l || l.timestamp !== o.timestamp) && (s.current.dispatch({
      changes: {
        from: 0,
        to: s.current.state.doc.length,
        insert: o.template
      }
    }), e(o.template), a(o.template, t));
  }, [o]), tt`
    <div id="editor" class=${r}></div>
    <textarea value=${n} name=${i} id=${t} class="hidden"></textarea>
  `;
};
console.log("CodeMirror component loaded");
const vse = ({
  changeDocumentTemplate: n,
  selectedTemplate: e,
  closeModal: t
}) => tt`
    <section class="modal">
        <h3 class="modal-text">Are you sure you want to change the current template?</h3>
        <div class="flex-container">
            <button type="button" class="modal-button" onClick=${() => n(e)}>✓ Yes</button>
            <button type="button" class="modal-close-button" onClick=${t}>x Cancel</button>
        </div>
    </section>
  `;
console.log("Modal functional component loaded");
const nd = ({
  tooltipOrientation: n,
  errorMessage: e
}) => tt`
              <div class="tooltip-box${`-${n}`}">
                <div class="tooltip${`-${n}`}">
                    ${e}
                </div>
              </div>`;
console.log("Tooltip component loaded");
const xse = ({
  setDocumentTemplate: n,
  templatelist: e
}) => {
  const [t, i] = wt(""), [r, o] = wt({}), [s, l] = wt(null), [a, c] = wt(!1), [h, u] = wt(!1), [f, d] = wt({
    fetchError: !1,
    errorText: "",
    templateError: []
  }), p = (w, x) => {
    throw d({
      ...f,
      fetchError: !0,
      errorText: x
    }), new Error(x);
  }, m = (w) => {
    i(r[w].templatetext), n(r[w].templatetext), c(!1);
  }, g = async (w) => {
    try {
      const x = await fetch(w);
      if (!x.ok)
        throw new Error(`HTTP error! Status: ${x.status}`);
      return await x.json();
    } catch (x) {
      p(x, "Unable to download template config.");
    }
  }, b = async (w) => {
    try {
      const x = await fetch(w);
      if (!x.ok)
        throw new Error("Encountered error while fetching the template");
      return await x.text();
    } catch {
      return d({
        ...f,
        templateError: [...f.templateError, w]
      }), null;
    }
  }, y = async (w) => {
    const _ = Object.entries(w).map(async ([k, C]) => {
      const N = k, L = {
        ...C,
        templatetext: C.templatetext ? await b(C.templatetext) : void 0
      };
      return [N, L];
    });
    return Object.fromEntries(await Promise.all(_));
  };
  return mo(async () => {
    const w = await g(e), x = await y(w);
    o(x);
  }, []), f.fetchError ? tt`
      <button type="button" template=${t} id="customButton_templates" class="disabled" onMouseEnter=${() => u(!0)} onMouseLeave=${() => u(!1)}>
        Templates
      </button>
      <${nd} tooltipOrientation="bottom" showTooltip=${h} errorMessage=${f.errorText}/>` : tt`
    ${a && tt`<${vse} selectedTemplate=${s} closeModal=${() => {
    c(!1), l(!1);
  }} changeDocumentTemplate=${m}/>`}
    <div class="dropdown">
      <button type="button" template=${t} id="customButton_templates">Templates</button>
      <div class="templates-list">
      <div className="template-dropdown-content">
      ${Object.keys(r).map((w) => tt`
            ${r[w].templatetext == null ? tt`
              <div class="button-tooltip-flex">
              <${nd} tooltipOrientation="left" showTooltip=${h === w} errorMessage="Failed to fetch template"/>
              <button type="button" class="template-name-button disabled" onMouseEnter=${() => u(w)} onMouseLeave=${() => u(!1)}>${r[w].id}
              </button>
              </div>` : tt`
              <button type="button" class="template-name-button" 
              onClick=${() => {
    c(!0), l(w);
  }}>${r[w].id}
              </button>`}`)}      
      </div>
      </div>
    </div>
  `;
};
console.log("TemplateManager component loaded");
const Ase = ({
  name: n = "myst_editor_textarea",
  id: e = "myst_editor_textarea",
  initialMode: t = "Both",
  initialText: i = "",
  printCallback: r = window.print,
  topbar: o = !0,
  templatelist: s
}) => {
  const [l, a] = wt(t), [c, h] = wt(i), [u, f] = wt(null);
  return tt`
  <div class="myst_editor_parent">
    <div class="myst_top_bar ${o ? "shown" : "hidden"}">
      <div class="myst_top_bar-right">
        <button type="button" onClick=${(m) => r(m)} id="customButton_print">Export as PDF</button>
        <${xse} templatelist=${s} templateState=${u} setDocumentTemplate=${(m) => {
    f({
      template: m,
      timestamp: Date.now()
    });
  }}/>
        <div class="vl"></div>
        <${GQ} buttons=${["Source", "Preview", "Both"]} clickedId=${2} clickCallback=${(m) => a(m.target.name)}/>
      </div>
    </div>
  <div class="myst_wrapper">
    <${yse} setText=${h} name=${n} id=${e} className="myst_content ${l === "Both" || l === "Source" ? "shown" : "hidden"}" templateState=${u} value=${c}/>
    <div class="myst_rendered ${l === "Both" || l === "Preview" ? "shown" : "hidden"}" dangerouslySetInnerHTML=${{
    __html: ((m) => $x.sanitize(jQ().use(dx).render(m)))(c)
  }}/>
  </div>
</div>`;
};
export {
  Ase as default,
  tt as html,
  wse as render
};

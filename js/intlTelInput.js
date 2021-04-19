
if (function(t, e) {
  "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
      if (!t.document) throw new Error("jQuery requires a window with a document");
      return e(t)
  } : e(t)
}("undefined" != typeof window ? window : this, function(t, e) {
  var i = [],
      n = i.slice,
      s = i.concat,
      o = i.push,
      a = i.indexOf,
      r = {},
      l = r.toString,
      c = r.hasOwnProperty,
      h = {},
      u = t.document,
      d = "2.1.1",
      p = function(t, e) {
          return new p.fn.init(t, e)
      },
      f = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      m = /^-ms-/,
      g = /-([\da-z])/gi,
      v = function(t, e) {
          return e.toUpperCase()
      };

  function y(t) {
      var e = t.length,
          i = p.type(t);
      return "function" !== i && !p.isWindow(t) && (!(1 !== t.nodeType || !e) || ("array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t))
  }
  p.fn = p.prototype = {
      jquery: d,
      constructor: p,
      selector: "",
      length: 0,
      toArray: function() {
          return n.call(this)
      },
      get: function(t) {
          return null != t ? 0 > t ? this[t + this.length] : this[t] : n.call(this)
      },
      pushStack: function(t) {
          var e = p.merge(this.constructor(), t);
          return e.prevObject = this, e.context = this.context, e
      },
      each: function(t, e) {
          return p.each(this, t, e)
      },
      map: function(t) {
          return this.pushStack(p.map(this, function(e, i) {
              return t.call(e, i, e)
          }))
      },
      slice: function() {
          return this.pushStack(n.apply(this, arguments))
      },
      first: function() {
          return this.eq(0)
      },
      last: function() {
          return this.eq(-1)
      },
      eq: function(t) {
          var e = this.length,
              i = +t + (0 > t ? e : 0);
          return this.pushStack(i >= 0 && e > i ? [this[i]] : [])
      },
      end: function() {
          return this.prevObject || this.constructor(null)
      },
      push: o,
      sort: i.sort,
      splice: i.splice
  }, p.extend = p.fn.extend = function() {
      var t, e, i, n, s, o, a = arguments[0] || {},
          r = 1,
          l = arguments.length,
          c = !1;
      for ("boolean" == typeof a && (c = a, a = arguments[r] || {}, r++), "object" == typeof a || p.isFunction(a) || (a = {}), r === l && (a = this, r--); l > r; r++)
          if (null != (t = arguments[r]))
              for (e in t) i = a[e], a !== (n = t[e]) && (c && n && (p.isPlainObject(n) || (s = p.isArray(n))) ? (s ? (s = !1, o = i && p.isArray(i) ? i : []) : o = i && p.isPlainObject(i) ? i : {}, a[e] = p.extend(c, o, n)) : void 0 !== n && (a[e] = n));
      return a
  }, p.extend({
      expando: "jQuery" + (d + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function(t) {
          throw new Error(t)
      },
      noop: function() {},
      isFunction: function(t) {
          return "function" === p.type(t)
      },
      isArray: Array.isArray,
      isWindow: function(t) {
          return null != t && t === t.window
      },
      isNumeric: function(t) {
          return !p.isArray(t) && t - parseFloat(t) >= 0
      },
      isPlainObject: function(t) {
          return "object" === p.type(t) && !t.nodeType && !p.isWindow(t) && !(t.constructor && !c.call(t.constructor.prototype, "isPrototypeOf"))
      },
      isEmptyObject: function(t) {
          var e;
          for (e in t) return !1;
          return !0
      },
      type: function(t) {
          return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? r[l.call(t)] || "object" : typeof t
      },
      globalEval: function(t) {
          var e, i = eval;
          (t = p.trim(t)) && (1 === t.indexOf("use strict") ? ((e = u.createElement("script")).text = t, u.head.appendChild(e).parentNode.removeChild(e)) : i(t))
      },
      camelCase: function(t) {
          return t.replace(m, "ms-").replace(g, v)
      },
      nodeName: function(t, e) {
          return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
      },
      each: function(t, e, i) {
          var n = 0,
              s = t.length,
              o = y(t);
          if (i) {
              if (o)
                  for (; s > n && !1 !== e.apply(t[n], i); n++);
              else
                  for (n in t)
                      if (!1 === e.apply(t[n], i)) break
          } else if (o)
              for (; s > n && !1 !== e.call(t[n], n, t[n]); n++);
          else
              for (n in t)
                  if (!1 === e.call(t[n], n, t[n])) break; return t
      },
      trim: function(t) {
          return null == t ? "" : (t + "").replace(f, "")
      },
      makeArray: function(t, e) {
          var i = e || [];
          return null != t && (y(Object(t)) ? p.merge(i, "string" == typeof t ? [t] : t) : o.call(i, t)), i
      },
      inArray: function(t, e, i) {
          return null == e ? -1 : a.call(e, t, i)
      },
      merge: function(t, e) {
          for (var i = +e.length, n = 0, s = t.length; i > n; n++) t[s++] = e[n];
          return t.length = s, t
      },
      grep: function(t, e, i) {
          for (var n = [], s = 0, o = t.length, a = !i; o > s; s++) !e(t[s], s) !== a && n.push(t[s]);
          return n
      },
      map: function(t, e, i) {
          var n, o = 0,
              a = t.length,
              r = [];
          if (y(t))
              for (; a > o; o++) null != (n = e(t[o], o, i)) && r.push(n);
          else
              for (o in t) null != (n = e(t[o], o, i)) && r.push(n);
          return s.apply([], r)
      },
      guid: 1,
      proxy: function(t, e) {
          var i, s, o;
          return "string" == typeof e && (i = t[e], e = t, t = i), p.isFunction(t) ? (s = n.call(arguments, 2), (o = function() {
              return t.apply(e || this, s.concat(n.call(arguments)))
          }).guid = t.guid = t.guid || p.guid++, o) : void 0
      },
      now: Date.now,
      support: h
  }), p.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
      r["[object " + e + "]"] = e.toLowerCase()
  });
  var b = function(t) {
      var e, i, n, s, o, a, r, l, c, h, u, d, p, f, m, g, v, y, b, _ = "sizzle" + -new Date,
          w = t.document,
          x = 0,
          C = 0,
          k = ot(),
          S = ot(),
          T = ot(),
          D = function(t, e) {
              return t === e && (u = !0), 0
          },
          M = "undefined",
          I = 1 << 31,
          P = {}.hasOwnProperty,
          $ = [],
          E = $.pop,
          A = $.push,
          F = $.push,
          O = $.slice,
          N = $.indexOf || function(t) {
              for (var e = 0, i = this.length; i > e; e++)
                  if (this[e] === t) return e;
              return -1
          },
          L = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
          H = "[\\x20\\t\\r\\n\\f]",
          z = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
          R = z.replace("w", "w#"),
          W = "\\[" + H + "*(" + z + ")(?:" + H + "*([*^$|!~]?=)" + H + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + H + "*\\]",
          j = ":(" + z + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
          B = new RegExp("^" + H + "+|((?:^|[^\\\\])(?:\\\\.)*)" + H + "+$", "g"),
          Y = new RegExp("^" + H + "*," + H + "*"),
          q = new RegExp("^" + H + "*([>+~]|" + H + ")" + H + "*"),
          U = new RegExp("=" + H + "*([^\\]'\"]*?)" + H + "*\\]", "g"),
          V = new RegExp(j),
          X = new RegExp("^" + R + "$"),
          G = {
              ID: new RegExp("^#(" + z + ")"),
              CLASS: new RegExp("^\\.(" + z + ")"),
              TAG: new RegExp("^(" + z.replace("w", "w*") + ")"),
              ATTR: new RegExp("^" + W),
              PSEUDO: new RegExp("^" + j),
              CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + H + "*(even|odd|(([+-]|)(\\d*)n|)" + H + "*(?:([+-]|)" + H + "*(\\d+)|))" + H + "*\\)|)", "i"),
              bool: new RegExp("^(?:" + L + ")$", "i"),
              needsContext: new RegExp("^" + H + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + H + "*((?:-\\d)?\\d*)" + H + "*\\)|)(?=[^-]|$)", "i")
          },
          K = /^(?:input|select|textarea|button)$/i,
          Q = /^h\d$/i,
          Z = /^[^{]+\{\s*\[native \w/,
          J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
          tt = /[+~]/,
          et = /'|\\/g,
          it = new RegExp("\\\\([\\da-f]{1,6}" + H + "?|(" + H + ")|.)", "ig"),
          nt = function(t, e, i) {
              var n = "0x" + e - 65536;
              return n != n || i ? e : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
          };
      try {
          F.apply($ = O.call(w.childNodes), w.childNodes), $[w.childNodes.length].nodeType
      } catch (t) {
          F = {
              apply: $.length ? function(t, e) {
                  A.apply(t, O.call(e))
              } : function(t, e) {
                  for (var i = t.length, n = 0; t[i++] = e[n++];);
                  t.length = i - 1
              }
          }
      }

      function st(t, e, n, s) {
          var o, r, c, h, u, f, v, y, x, C;
          if ((e ? e.ownerDocument || e : w) !== p && d(e), n = n || [], !t || "string" != typeof t) return n;
          if (1 !== (h = (e = e || p).nodeType) && 9 !== h) return [];
          if (m && !s) {
              if (o = J.exec(t))
                  if (c = o[1]) {
                      if (9 === h) {
                          if (!(r = e.getElementById(c)) || !r.parentNode) return n;
                          if (r.id === c) return n.push(r), n
                      } else if (e.ownerDocument && (r = e.ownerDocument.getElementById(c)) && b(e, r) && r.id === c) return n.push(r), n
                  } else {
                      if (o[2]) return F.apply(n, e.getElementsByTagName(t)), n;
                      if ((c = o[3]) && i.getElementsByClassName && e.getElementsByClassName) return F.apply(n, e.getElementsByClassName(c)), n
                  }
              if (i.qsa && (!g || !g.test(t))) {
                  if (y = v = _, x = e, C = 9 === h && t, 1 === h && "object" !== e.nodeName.toLowerCase()) {
                      for (f = a(t), (v = e.getAttribute("id")) ? y = v.replace(et, "\\$&") : e.setAttribute("id", y), y = "[id='" + y + "'] ", u = f.length; u--;) f[u] = y + mt(f[u]);
                      x = tt.test(t) && pt(e.parentNode) || e, C = f.join(",")
                  }
                  if (C) try {
                      return F.apply(n, x.querySelectorAll(C)), n
                  } catch (t) {} finally {
                      v || e.removeAttribute("id")
                  }
              }
          }
          return l(t.replace(B, "$1"), e, n, s)
      }

      function ot() {
          var t = [];
          return function e(i, s) {
              return t.push(i + " ") > n.cacheLength && delete e[t.shift()], e[i + " "] = s
          }
      }

      function at(t) {
          return t[_] = !0, t
      }

      function rt(t) {
          var e = p.createElement("div");
          try {
              return !!t(e)
          } catch (t) {
              return !1
          } finally {
              e.parentNode && e.parentNode.removeChild(e), e = null
          }
      }

      function lt(t, e) {
          for (var i = t.split("|"), s = t.length; s--;) n.attrHandle[i[s]] = e
      }

      function ct(t, e) {
          var i = e && t,
              n = i && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || I) - (~t.sourceIndex || I);
          if (n) return n;
          if (i)
              for (; i = i.nextSibling;)
                  if (i === e) return -1;
          return t ? 1 : -1
      }

      function ht(t) {
          return function(e) {
              return "input" === e.nodeName.toLowerCase() && e.type === t
          }
      }

      function ut(t) {
          return function(e) {
              var i = e.nodeName.toLowerCase();
              return ("input" === i || "button" === i) && e.type === t
          }
      }

      function dt(t) {
          return at(function(e) {
              return e = +e, at(function(i, n) {
                  for (var s, o = t([], i.length, e), a = o.length; a--;) i[s = o[a]] && (i[s] = !(n[s] = i[s]))
              })
          })
      }

      function pt(t) {
          return t && typeof t.getElementsByTagName !== M && t
      }
      for (e in i = st.support = {}, o = st.isXML = function(t) {
              var e = t && (t.ownerDocument || t).documentElement;
              return !!e && "HTML" !== e.nodeName
          }, d = st.setDocument = function(t) {
              var e, s = t ? t.ownerDocument || t : w,
                  a = s.defaultView;
              return s !== p && 9 === s.nodeType && s.documentElement ? (p = s, f = s.documentElement, m = !o(s), a && a !== a.top && (a.addEventListener ? a.addEventListener("unload", function() {
                  d()
              }, !1) : a.attachEvent && a.attachEvent("onunload", function() {
                  d()
              })), i.attributes = rt(function(t) {
                  return t.className = "i", !t.getAttribute("className")
              }), i.getElementsByTagName = rt(function(t) {
                  return t.appendChild(s.createComment("")), !t.getElementsByTagName("*").length
              }), i.getElementsByClassName = Z.test(s.getElementsByClassName) && rt(function(t) {
                  return t.innerHTML = "<div class='a'></div><div class='a i'></div>", t.firstChild.className = "i", 2 === t.getElementsByClassName("i").length
              }), i.getById = rt(function(t) {
                  return f.appendChild(t).id = _, !s.getElementsByName || !s.getElementsByName(_).length
              }), i.getById ? (n.find.ID = function(t, e) {
                  if (typeof e.getElementById !== M && m) {
                      var i = e.getElementById(t);
                      return i && i.parentNode ? [i] : []
                  }
              }, n.filter.ID = function(t) {
                  var e = t.replace(it, nt);
                  return function(t) {
                      return t.getAttribute("id") === e
                  }
              }) : (delete n.find.ID, n.filter.ID = function(t) {
                  var e = t.replace(it, nt);
                  return function(t) {
                      var i = typeof t.getAttributeNode !== M && t.getAttributeNode("id");
                      return i && i.value === e
                  }
              }), n.find.TAG = i.getElementsByTagName ? function(t, e) {
                  return typeof e.getElementsByTagName !== M ? e.getElementsByTagName(t) : void 0
              } : function(t, e) {
                  var i, n = [],
                      s = 0,
                      o = e.getElementsByTagName(t);
                  if ("*" === t) {
                      for (; i = o[s++];) 1 === i.nodeType && n.push(i);
                      return n
                  }
                  return o
              }, n.find.CLASS = i.getElementsByClassName && function(t, e) {
                  return typeof e.getElementsByClassName !== M && m ? e.getElementsByClassName(t) : void 0
              }, v = [], g = [], (i.qsa = Z.test(s.querySelectorAll)) && (rt(function(t) {
                  t.innerHTML = "<select msallowclip=''><option selected=''></option></select>", t.querySelectorAll("[msallowclip^='']").length && g.push("[*^$]=" + H + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || g.push("\\[" + H + "*(?:value|" + L + ")"), t.querySelectorAll(":checked").length || g.push(":checked")
              }), rt(function(t) {
                  var e = s.createElement("input");
                  e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && g.push("name" + H + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || g.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), g.push(",.*:")
              })), (i.matchesSelector = Z.test(y = f.matches || f.webkitMatchesSelector || f.mozMatchesSelector || f.oMatchesSelector || f.msMatchesSelector)) && rt(function(t) {
                  i.disconnectedMatch = y.call(t, "div"), y.call(t, "[s!='']:x"), v.push("!=", j)
              }), g = g.length && new RegExp(g.join("|")), v = v.length && new RegExp(v.join("|")), e = Z.test(f.compareDocumentPosition), b = e || Z.test(f.contains) ? function(t, e) {
                  var i = 9 === t.nodeType ? t.documentElement : t,
                      n = e && e.parentNode;
                  return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
              } : function(t, e) {
                  if (e)
                      for (; e = e.parentNode;)
                          if (e === t) return !0;
                  return !1
              }, D = e ? function(t, e) {
                  if (t === e) return u = !0, 0;
                  var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                  return n || (1 & (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !i.sortDetached && e.compareDocumentPosition(t) === n ? t === s || t.ownerDocument === w && b(w, t) ? -1 : e === s || e.ownerDocument === w && b(w, e) ? 1 : h ? N.call(h, t) - N.call(h, e) : 0 : 4 & n ? -1 : 1)
              } : function(t, e) {
                  if (t === e) return u = !0, 0;
                  var i, n = 0,
                      o = t.parentNode,
                      a = e.parentNode,
                      r = [t],
                      l = [e];
                  if (!o || !a) return t === s ? -1 : e === s ? 1 : o ? -1 : a ? 1 : h ? N.call(h, t) - N.call(h, e) : 0;
                  if (o === a) return ct(t, e);
                  for (i = t; i = i.parentNode;) r.unshift(i);
                  for (i = e; i = i.parentNode;) l.unshift(i);
                  for (; r[n] === l[n];) n++;
                  return n ? ct(r[n], l[n]) : r[n] === w ? -1 : l[n] === w ? 1 : 0
              }, s) : p
          }, st.matches = function(t, e) {
              return st(t, null, null, e)
          }, st.matchesSelector = function(t, e) {
              if ((t.ownerDocument || t) !== p && d(t), e = e.replace(U, "='$1']"), !(!i.matchesSelector || !m || v && v.test(e) || g && g.test(e))) try {
                  var n = y.call(t, e);
                  if (n || i.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n
              } catch (t) {}
              return st(e, p, null, [t]).length > 0
          }, st.contains = function(t, e) {
              return (t.ownerDocument || t) !== p && d(t), b(t, e)
          }, st.attr = function(t, e) {
              (t.ownerDocument || t) !== p && d(t);
              var s = n.attrHandle[e.toLowerCase()],
                  o = s && P.call(n.attrHandle, e.toLowerCase()) ? s(t, e, !m) : void 0;
              return void 0 !== o ? o : i.attributes || !m ? t.getAttribute(e) : (o = t.getAttributeNode(e)) && o.specified ? o.value : null
          }, st.error = function(t) {
              throw new Error("Syntax error, unrecognized expression: " + t)
          }, st.uniqueSort = function(t) {
              var e, n = [],
                  s = 0,
                  o = 0;
              if (u = !i.detectDuplicates, h = !i.sortStable && t.slice(0), t.sort(D), u) {
                  for (; e = t[o++];) e === t[o] && (s = n.push(o));
                  for (; s--;) t.splice(n[s], 1)
              }
              return h = null, t
          }, s = st.getText = function(t) {
              var e, i = "",
                  n = 0,
                  o = t.nodeType;
              if (o) {
                  if (1 === o || 9 === o || 11 === o) {
                      if ("string" == typeof t.textContent) return t.textContent;
                      for (t = t.firstChild; t; t = t.nextSibling) i += s(t)
                  } else if (3 === o || 4 === o) return t.nodeValue
              } else
                  for (; e = t[n++];) i += s(e);
              return i
          }, (n = st.selectors = {
              cacheLength: 50,
              createPseudo: at,
              match: G,
              attrHandle: {},
              find: {},
              relative: {
                  ">": {
                      dir: "parentNode",
                      first: !0
                  },
                  " ": {
                      dir: "parentNode"
                  },
                  "+": {
                      dir: "previousSibling",
                      first: !0
                  },
                  "~": {
                      dir: "previousSibling"
                  }
              },
              preFilter: {
                  ATTR: function(t) {
                      return t[1] = t[1].replace(it, nt), t[3] = (t[3] || t[4] || t[5] || "").replace(it, nt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                  },
                  CHILD: function(t) {
                      return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || st.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && st.error(t[0]), t
                  },
                  PSEUDO: function(t) {
                      var e, i = !t[6] && t[2];
                      return G.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && V.test(i) && (e = a(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
                  }
              },
              filter: {
                  TAG: function(t) {
                      var e = t.replace(it, nt).toLowerCase();
                      return "*" === t ? function() {
                          return !0
                      } : function(t) {
                          return t.nodeName && t.nodeName.toLowerCase() === e
                      }
                  },
                  CLASS: function(t) {
                      var e = k[t + " "];
                      return e || (e = new RegExp("(^|" + H + ")" + t + "(" + H + "|$)")) && k(t, function(t) {
                          return e.test("string" == typeof t.className && t.className || typeof t.getAttribute !== M && t.getAttribute("class") || "")
                      })
                  },
                  ATTR: function(t, e, i) {
                      return function(n) {
                          var s = st.attr(n, t);
                          return null == s ? "!=" === e : !e || (s += "", "=" === e ? s === i : "!=" === e ? s !== i : "^=" === e ? i && 0 === s.indexOf(i) : "*=" === e ? i && s.indexOf(i) > -1 : "$=" === e ? i && s.slice(-i.length) === i : "~=" === e ? (" " + s + " ").indexOf(i) > -1 : "|=" === e && (s === i || s.slice(0, i.length + 1) === i + "-"))
                      }
                  },
                  CHILD: function(t, e, i, n, s) {
                      var o = "nth" !== t.slice(0, 3),
                          a = "last" !== t.slice(-4),
                          r = "of-type" === e;
                      return 1 === n && 0 === s ? function(t) {
                          return !!t.parentNode
                      } : function(e, i, l) {
                          var c, h, u, d, p, f, m = o !== a ? "nextSibling" : "previousSibling",
                              g = e.parentNode,
                              v = r && e.nodeName.toLowerCase(),
                              y = !l && !r;
                          if (g) {
                              if (o) {
                                  for (; m;) {
                                      for (u = e; u = u[m];)
                                          if (r ? u.nodeName.toLowerCase() === v : 1 === u.nodeType) return !1;
                                      f = m = "only" === t && !f && "nextSibling"
                                  }
                                  return !0
                              }
                              if (f = [a ? g.firstChild : g.lastChild], a && y) {
                                  for (p = (c = (h = g[_] || (g[_] = {}))[t] || [])[0] === x && c[1], d = c[0] === x && c[2], u = p && g.childNodes[p]; u = ++p && u && u[m] || (d = p = 0) || f.pop();)
                                      if (1 === u.nodeType && ++d && u === e) {
                                          h[t] = [x, p, d];
                                          break
                                      }
                              } else if (y && (c = (e[_] || (e[_] = {}))[t]) && c[0] === x) d = c[1];
                              else
                                  for (;
                                      (u = ++p && u && u[m] || (d = p = 0) || f.pop()) && ((r ? u.nodeName.toLowerCase() !== v : 1 !== u.nodeType) || !++d || (y && ((u[_] || (u[_] = {}))[t] = [x, d]), u !== e)););
                              return (d -= s) === n || d % n == 0 && d / n >= 0
                          }
                      }
                  },
                  PSEUDO: function(t, e) {
                      var i, s = n.pseudos[t] || n.setFilters[t.toLowerCase()] || st.error("unsupported pseudo: " + t);
                      return s[_] ? s(e) : s.length > 1 ? (i = [t, t, "", e], n.setFilters.hasOwnProperty(t.toLowerCase()) ? at(function(t, i) {
                          for (var n, o = s(t, e), a = o.length; a--;) t[n = N.call(t, o[a])] = !(i[n] = o[a])
                      }) : function(t) {
                          return s(t, 0, i)
                      }) : s
                  }
              },
              pseudos: {
                  not: at(function(t) {
                      var e = [],
                          i = [],
                          n = r(t.replace(B, "$1"));
                      return n[_] ? at(function(t, e, i, s) {
                          for (var o, a = n(t, null, s, []), r = t.length; r--;)(o = a[r]) && (t[r] = !(e[r] = o))
                      }) : function(t, s, o) {
                          return e[0] = t, n(e, null, o, i), !i.pop()
                      }
                  }),
                  has: at(function(t) {
                      return function(e) {
                          return st(t, e).length > 0
                      }
                  }),
                  contains: at(function(t) {
                      return function(e) {
                          return (e.textContent || e.innerText || s(e)).indexOf(t) > -1
                      }
                  }),
                  lang: at(function(t) {
                      return X.test(t || "") || st.error("unsupported lang: " + t), t = t.replace(it, nt).toLowerCase(),
                          function(e) {
                              var i;
                              do {
                                  if (i = m ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (i = i.toLowerCase()) === t || 0 === i.indexOf(t + "-")
                              } while ((e = e.parentNode) && 1 === e.nodeType);
                              return !1
                          }
                  }),
                  target: function(e) {
                      var i = t.location && t.location.hash;
                      return i && i.slice(1) === e.id
                  },
                  root: function(t) {
                      return t === f
                  },
                  focus: function(t) {
                      return t === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                  },
                  enabled: function(t) {
                      return !1 === t.disabled
                  },
                  disabled: function(t) {
                      return !0 === t.disabled
                  },
                  checked: function(t) {
                      var e = t.nodeName.toLowerCase();
                      return "input" === e && !!t.checked || "option" === e && !!t.selected
                  },
                  selected: function(t) {
                      return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                  },
                  empty: function(t) {
                      for (t = t.firstChild; t; t = t.nextSibling)
                          if (t.nodeType < 6) return !1;
                      return !0
                  },
                  parent: function(t) {
                      return !n.pseudos.empty(t)
                  },
                  header: function(t) {
                      return Q.test(t.nodeName)
                  },
                  input: function(t) {
                      return K.test(t.nodeName)
                  },
                  button: function(t) {
                      var e = t.nodeName.toLowerCase();
                      return "input" === e && "button" === t.type || "button" === e
                  },
                  text: function(t) {
                      var e;
                      return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                  },
                  first: dt(function() {
                      return [0]
                  }),
                  last: dt(function(t, e) {
                      return [e - 1]
                  }),
                  eq: dt(function(t, e, i) {
                      return [0 > i ? i + e : i]
                  }),
                  even: dt(function(t, e) {
                      for (var i = 0; e > i; i += 2) t.push(i);
                      return t
                  }),
                  odd: dt(function(t, e) {
                      for (var i = 1; e > i; i += 2) t.push(i);
                      return t
                  }),
                  lt: dt(function(t, e, i) {
                      for (var n = 0 > i ? i + e : i; --n >= 0;) t.push(n);
                      return t
                  }),
                  gt: dt(function(t, e, i) {
                      for (var n = 0 > i ? i + e : i; ++n < e;) t.push(n);
                      return t
                  })
              }
          }).pseudos.nth = n.pseudos.eq, {
              radio: !0,
              checkbox: !0,
              file: !0,
              password: !0,
              image: !0
          }) n.pseudos[e] = ht(e);
      for (e in {
              submit: !0,
              reset: !0
          }) n.pseudos[e] = ut(e);

      function ft() {}

      function mt(t) {
          for (var e = 0, i = t.length, n = ""; i > e; e++) n += t[e].value;
          return n
      }

      function gt(t, e, i) {
          var n = e.dir,
              s = i && "parentNode" === n,
              o = C++;
          return e.first ? function(e, i, o) {
              for (; e = e[n];)
                  if (1 === e.nodeType || s) return t(e, i, o)
          } : function(e, i, a) {
              var r, l, c = [x, o];
              if (a) {
                  for (; e = e[n];)
                      if ((1 === e.nodeType || s) && t(e, i, a)) return !0
              } else
                  for (; e = e[n];)
                      if (1 === e.nodeType || s) {
                          if ((r = (l = e[_] || (e[_] = {}))[n]) && r[0] === x && r[1] === o) return c[2] = r[2];
                          if (l[n] = c, c[2] = t(e, i, a)) return !0
                      }
          }
      }

      function vt(t) {
          return t.length > 1 ? function(e, i, n) {
              for (var s = t.length; s--;)
                  if (!t[s](e, i, n)) return !1;
              return !0
          } : t[0]
      }

      function yt(t, e, i, n, s) {
          for (var o, a = [], r = 0, l = t.length, c = null != e; l > r; r++)(o = t[r]) && (!i || i(o, n, s)) && (a.push(o), c && e.push(r));
          return a
      }

      function bt(t, e, i, n, s, o) {
          return n && !n[_] && (n = bt(n)), s && !s[_] && (s = bt(s, o)), at(function(o, a, r, l) {
              var c, h, u, d = [],
                  p = [],
                  f = a.length,
                  m = o || function(t, e, i) {
                      for (var n = 0, s = e.length; s > n; n++) st(t, e[n], i);
                      return i
                  }(e || "*", r.nodeType ? [r] : r, []),
                  g = !t || !o && e ? m : yt(m, d, t, r, l),
                  v = i ? s || (o ? t : f || n) ? [] : a : g;
              if (i && i(g, v, r, l), n)
                  for (c = yt(v, p), n(c, [], r, l), h = c.length; h--;)(u = c[h]) && (v[p[h]] = !(g[p[h]] = u));
              if (o) {
                  if (s || t) {
                      if (s) {
                          for (c = [], h = v.length; h--;)(u = v[h]) && c.push(g[h] = u);
                          s(null, v = [], c, l)
                      }
                      for (h = v.length; h--;)(u = v[h]) && (c = s ? N.call(o, u) : d[h]) > -1 && (o[c] = !(a[c] = u))
                  }
              } else v = yt(v === a ? v.splice(f, v.length) : v), s ? s(null, a, v, l) : F.apply(a, v)
          })
      }

      function _t(t) {
          for (var e, i, s, o = t.length, a = n.relative[t[0].type], r = a || n.relative[" "], l = a ? 1 : 0, h = gt(function(t) {
                  return t === e
              }, r, !0), u = gt(function(t) {
                  return N.call(e, t) > -1
              }, r, !0), d = [function(t, i, n) {
                  return !a && (n || i !== c) || ((e = i).nodeType ? h(t, i, n) : u(t, i, n))
              }]; o > l; l++)
              if (i = n.relative[t[l].type]) d = [gt(vt(d), i)];
              else {
                  if ((i = n.filter[t[l].type].apply(null, t[l].matches))[_]) {
                      for (s = ++l; o > s && !n.relative[t[s].type]; s++);
                      return bt(l > 1 && vt(d), l > 1 && mt(t.slice(0, l - 1).concat({
                          value: " " === t[l - 2].type ? "*" : ""
                      })).replace(B, "$1"), i, s > l && _t(t.slice(l, s)), o > s && _t(t = t.slice(s)), o > s && mt(t))
                  }
                  d.push(i)
              }
          return vt(d)
      }

      function wt(t, e) {
          var i = e.length > 0,
              s = t.length > 0,
              o = function(o, a, r, l, h) {
                  var u, d, f, m = 0,
                      g = "0",
                      v = o && [],
                      y = [],
                      b = c,
                      _ = o || s && n.find.TAG("*", h),
                      w = x += null == b ? 1 : Math.random() || .1,
                      C = _.length;
                  for (h && (c = a !== p && a); g !== C && null != (u = _[g]); g++) {
                      if (s && u) {
                          for (d = 0; f = t[d++];)
                              if (f(u, a, r)) {
                                  l.push(u);
                                  break
                              }
                          h && (x = w)
                      }
                      i && ((u = !f && u) && m--, o && v.push(u))
                  }
                  if (m += g, i && g !== m) {
                      for (d = 0; f = e[d++];) f(v, y, a, r);
                      if (o) {
                          if (m > 0)
                              for (; g--;) v[g] || y[g] || (y[g] = E.call(l));
                          y = yt(y)
                      }
                      F.apply(l, y), h && !o && y.length > 0 && m + e.length > 1 && st.uniqueSort(l)
                  }
                  return h && (x = w, c = b), v
              };
          return i ? at(o) : o
      }
      return ft.prototype = n.filters = n.pseudos, n.setFilters = new ft, a = st.tokenize = function(t, e) {
          var i, s, o, a, r, l, c, h = S[t + " "];
          if (h) return e ? 0 : h.slice(0);
          for (r = t, l = [], c = n.preFilter; r;) {
              for (a in (!i || (s = Y.exec(r))) && (s && (r = r.slice(s[0].length) || r), l.push(o = [])), i = !1, (s = q.exec(r)) && (i = s.shift(), o.push({
                      value: i,
                      type: s[0].replace(B, " ")
                  }), r = r.slice(i.length)), n.filter) !(s = G[a].exec(r)) || c[a] && !(s = c[a](s)) || (i = s.shift(), o.push({
                  value: i,
                  type: a,
                  matches: s
              }), r = r.slice(i.length));
              if (!i) break
          }
          return e ? r.length : r ? st.error(t) : S(t, l).slice(0)
      }, r = st.compile = function(t, e) {
          var i, n = [],
              s = [],
              o = T[t + " "];
          if (!o) {
              for (e || (e = a(t)), i = e.length; i--;)(o = _t(e[i]))[_] ? n.push(o) : s.push(o);
              (o = T(t, wt(s, n))).selector = t
          }
          return o
      }, l = st.select = function(t, e, s, o) {
          var l, c, h, u, d, p = "function" == typeof t && t,
              f = !o && a(t = p.selector || t);
          if (s = s || [], 1 === f.length) {
              if ((c = f[0] = f[0].slice(0)).length > 2 && "ID" === (h = c[0]).type && i.getById && 9 === e.nodeType && m && n.relative[c[1].type]) {
                  if (!(e = (n.find.ID(h.matches[0].replace(it, nt), e) || [])[0])) return s;
                  p && (e = e.parentNode), t = t.slice(c.shift().value.length)
              }
              for (l = G.needsContext.test(t) ? 0 : c.length; l-- && (h = c[l], !n.relative[u = h.type]);)
                  if ((d = n.find[u]) && (o = d(h.matches[0].replace(it, nt), tt.test(c[0].type) && pt(e.parentNode) || e))) {
                      if (c.splice(l, 1), !(t = o.length && mt(c))) return F.apply(s, o), s;
                      break
                  }
          }
          return (p || r(t, f))(o, e, !m, s, tt.test(t) && pt(e.parentNode) || e), s
      }, i.sortStable = _.split("").sort(D).join("") === _, i.detectDuplicates = !!u, d(), i.sortDetached = rt(function(t) {
          return 1 & t.compareDocumentPosition(p.createElement("div"))
      }), rt(function(t) {
          return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
      }) || lt("type|href|height|width", function(t, e, i) {
          return i ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
      }), i.attributes && rt(function(t) {
          return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
      }) || lt("value", function(t, e, i) {
          return i || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
      }), rt(function(t) {
          return null == t.getAttribute("disabled")
      }) || lt(L, function(t, e, i) {
          var n;
          return i ? void 0 : !0 === t[e] ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
      }), st
  }(t);
  p.find = b, p.expr = b.selectors, p.expr[":"] = p.expr.pseudos, p.unique = b.uniqueSort, p.text = b.getText, p.isXMLDoc = b.isXML, p.contains = b.contains;
  var _ = p.expr.match.needsContext,
      w = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
      x = /^.[^:#\[\.,]*$/;

  function C(t, e, i) {
      if (p.isFunction(e)) return p.grep(t, function(t, n) {
          return !!e.call(t, n, t) !== i
      });
      if (e.nodeType) return p.grep(t, function(t) {
          return t === e !== i
      });
      if ("string" == typeof e) {
          if (x.test(e)) return p.filter(e, t, i);
          e = p.filter(e, t)
      }
      return p.grep(t, function(t) {
          return a.call(e, t) >= 0 !== i
      })
  }
  p.filter = function(t, e, i) {
      var n = e[0];
      return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? p.find.matchesSelector(n, t) ? [n] : [] : p.find.matches(t, p.grep(e, function(t) {
          return 1 === t.nodeType
      }))
  }, p.fn.extend({
      find: function(t) {
          var e, i = this.length,
              n = [],
              s = this;
          if ("string" != typeof t) return this.pushStack(p(t).filter(function() {
              for (e = 0; i > e; e++)
                  if (p.contains(s[e], this)) return !0
          }));
          for (e = 0; i > e; e++) p.find(t, s[e], n);
          return (n = this.pushStack(i > 1 ? p.unique(n) : n)).selector = this.selector ? this.selector + " " + t : t, n
      },
      filter: function(t) {
          return this.pushStack(C(this, t || [], !1))
      },
      not: function(t) {
          return this.pushStack(C(this, t || [], !0))
      },
      is: function(t) {
          return !!C(this, "string" == typeof t && _.test(t) ? p(t) : t || [], !1).length
      }
  });
  var k, S = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
  (p.fn.init = function(t, e) {
      var i, n;
      if (!t) return this;
      if ("string" == typeof t) {
          if (!(i = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : S.exec(t)) || !i[1] && e) return !e || e.jquery ? (e || k).find(t) : this.constructor(e).find(t);
          if (i[1]) {
              if (e = e instanceof p ? e[0] : e, p.merge(this, p.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : u, !0)), w.test(i[1]) && p.isPlainObject(e))
                  for (i in e) p.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
              return this
          }
          return (n = u.getElementById(i[2])) && n.parentNode && (this.length = 1, this[0] = n), this.context = u, this.selector = t, this
      }
      return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : p.isFunction(t) ? void 0 !== k.ready ? k.ready(t) : t(p) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), p.makeArray(t, this))
  }).prototype = p.fn, k = p(u);
  var T = /^(?:parents|prev(?:Until|All))/,
      D = {
          children: !0,
          contents: !0,
          next: !0,
          prev: !0
      };

  function M(t, e) {
      for (;
          (t = t[e]) && 1 !== t.nodeType;);
      return t
  }
  p.extend({
      dir: function(t, e, i) {
          for (var n = [], s = void 0 !== i;
              (t = t[e]) && 9 !== t.nodeType;)
              if (1 === t.nodeType) {
                  if (s && p(t).is(i)) break;
                  n.push(t)
              }
          return n
      },
      sibling: function(t, e) {
          for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
          return i
      }
  }), p.fn.extend({
      has: function(t) {
          var e = p(t, this),
              i = e.length;
          return this.filter(function() {
              for (var t = 0; i > t; t++)
                  if (p.contains(this, e[t])) return !0
          })
      },
      closest: function(t, e) {
          for (var i, n = 0, s = this.length, o = [], a = _.test(t) || "string" != typeof t ? p(t, e || this.context) : 0; s > n; n++)
              for (i = this[n]; i && i !== e; i = i.parentNode)
                  if (i.nodeType < 11 && (a ? a.index(i) > -1 : 1 === i.nodeType && p.find.matchesSelector(i, t))) {
                      o.push(i);
                      break
                  }
          return this.pushStack(o.length > 1 ? p.unique(o) : o)
      },
      index: function(t) {
          return t ? "string" == typeof t ? a.call(p(t), this[0]) : a.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
      },
      add: function(t, e) {
          return this.pushStack(p.unique(p.merge(this.get(), p(t, e))))
      },
      addBack: function(t) {
          return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
      }
  }), p.each({
      parent: function(t) {
          var e = t.parentNode;
          return e && 11 !== e.nodeType ? e : null
      },
      parents: function(t) {
          return p.dir(t, "parentNode")
      },
      parentsUntil: function(t, e, i) {
          return p.dir(t, "parentNode", i)
      },
      next: function(t) {
          return M(t, "nextSibling")
      },
      prev: function(t) {
          return M(t, "previousSibling")
      },
      nextAll: function(t) {
          return p.dir(t, "nextSibling")
      },
      prevAll: function(t) {
          return p.dir(t, "previousSibling")
      },
      nextUntil: function(t, e, i) {
          return p.dir(t, "nextSibling", i)
      },
      prevUntil: function(t, e, i) {
          return p.dir(t, "previousSibling", i)
      },
      siblings: function(t) {
          return p.sibling((t.parentNode || {}).firstChild, t)
      },
      children: function(t) {
          return p.sibling(t.firstChild)
      },
      contents: function(t) {
          return t.contentDocument || p.merge([], t.childNodes)
      }
  }, function(t, e) {
      p.fn[t] = function(i, n) {
          var s = p.map(this, e, i);
          return "Until" !== t.slice(-5) && (n = i), n && "string" == typeof n && (s = p.filter(n, s)), this.length > 1 && (D[t] || p.unique(s), T.test(t) && s.reverse()), this.pushStack(s)
      }
  });
  var I, P = /\S+/g,
      $ = {};

  function E() {
      u.removeEventListener("DOMContentLoaded", E, !1), t.removeEventListener("load", E, !1), p.ready()
  }
  p.Callbacks = function(t) {
      t = "string" == typeof t ? $[t] || function(t) {
          var e = $[t] = {};
          return p.each(t.match(P) || [], function(t, i) {
              e[i] = !0
          }), e
      }(t) : p.extend({}, t);
      var e, i, n, s, o, a, r = [],
          l = !t.once && [],
          c = function(u) {
              for (e = t.memory && u, i = !0, a = s || 0, s = 0, o = r.length, n = !0; r && o > a; a++)
                  if (!1 === r[a].apply(u[0], u[1]) && t.stopOnFalse) {
                      e = !1;
                      break
                  }
              n = !1, r && (l ? l.length && c(l.shift()) : e ? r = [] : h.disable())
          },
          h = {
              add: function() {
                  if (r) {
                      var i = r.length;
                      ! function e(i) {
                          p.each(i, function(i, n) {
                              var s = p.type(n);
                              "function" === s ? t.unique && h.has(n) || r.push(n) : n && n.length && "string" !== s && e(n)
                          })
                      }(arguments), n ? o = r.length : e && (s = i, c(e))
                  }
                  return this
              },
              remove: function() {
                  return r && p.each(arguments, function(t, e) {
                      for (var i;
                          (i = p.inArray(e, r, i)) > -1;) r.splice(i, 1), n && (o >= i && o--, a >= i && a--)
                  }), this
              },
              has: function(t) {
                  return t ? p.inArray(t, r) > -1 : !(!r || !r.length)
              },
              empty: function() {
                  return r = [], o = 0, this
              },
              disable: function() {
                  return r = l = e = void 0, this
              },
              disabled: function() {
                  return !r
              },
              lock: function() {
                  return l = void 0, e || h.disable(), this
              },
              locked: function() {
                  return !l
              },
              fireWith: function(t, e) {
                  return !r || i && !l || (e = [t, (e = e || []).slice ? e.slice() : e], n ? l.push(e) : c(e)), this
              },
              fire: function() {
                  return h.fireWith(this, arguments), this
              },
              fired: function() {
                  return !!i
              }
          };
      return h
  }, p.extend({
      Deferred: function(t) {
          var e = [
                  ["resolve", "done", p.Callbacks("once memory"), "resolved"],
                  ["reject", "fail", p.Callbacks("once memory"), "rejected"],
                  ["notify", "progress", p.Callbacks("memory")]
              ],
              i = "pending",
              n = {
                  state: function() {
                      return i
                  },
                  always: function() {
                      return s.done(arguments).fail(arguments), this
                  },
                  then: function() {
                      var t = arguments;
                      return p.Deferred(function(i) {
                          p.each(e, function(e, o) {
                              var a = p.isFunction(t[e]) && t[e];
                              s[o[1]](function() {
                                  var t = a && a.apply(this, arguments);
                                  t && p.isFunction(t.promise) ? t.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[o[0] + "With"](this === n ? i.promise() : this, a ? [t] : arguments)
                              })
                          }), t = null
                      }).promise()
                  },
                  promise: function(t) {
                      return null != t ? p.extend(t, n) : n
                  }
              },
              s = {};
          return n.pipe = n.then, p.each(e, function(t, o) {
              var a = o[2],
                  r = o[3];
              n[o[1]] = a.add, r && a.add(function() {
                  i = r
              }, e[1 ^ t][2].disable, e[2][2].lock), s[o[0]] = function() {
                  return s[o[0] + "With"](this === s ? n : this, arguments), this
              }, s[o[0] + "With"] = a.fireWith
          }), n.promise(s), t && t.call(s, s), s
      },
      when: function(t) {
          var e, i, s, o = 0,
              a = n.call(arguments),
              r = a.length,
              l = 1 !== r || t && p.isFunction(t.promise) ? r : 0,
              c = 1 === l ? t : p.Deferred(),
              h = function(t, i, s) {
                  return function(o) {
                      i[t] = this, s[t] = arguments.length > 1 ? n.call(arguments) : o, s === e ? c.notifyWith(i, s) : --l || c.resolveWith(i, s)
                  }
              };
          if (r > 1)
              for (e = new Array(r), i = new Array(r), s = new Array(r); r > o; o++) a[o] && p.isFunction(a[o].promise) ? a[o].promise().done(h(o, s, a)).fail(c.reject).progress(h(o, i, e)) : --l;
          return l || c.resolveWith(s, a), c.promise()
      }
  }), p.fn.ready = function(t) {
      return p.ready.promise().done(t), this
  }, p.extend({
      isReady: !1,
      readyWait: 1,
      holdReady: function(t) {
          t ? p.readyWait++ : p.ready(!0)
      },
      ready: function(t) {
          (!0 === t ? --p.readyWait : p.isReady) || (p.isReady = !0, !0 !== t && --p.readyWait > 0 || (I.resolveWith(u, [p]), p.fn.triggerHandler && (p(u).triggerHandler("ready"), p(u).off("ready"))))
      }
  }), p.ready.promise = function(e) {
      return I || (I = p.Deferred(), "complete" === u.readyState ? setTimeout(p.ready) : (u.addEventListener("DOMContentLoaded", E, !1), t.addEventListener("load", E, !1))), I.promise(e)
  }, p.ready.promise();
  var A = p.access = function(t, e, i, n, s, o, a) {
      var r = 0,
          l = t.length,
          c = null == i;
      if ("object" === p.type(i))
          for (r in s = !0, i) p.access(t, e, r, i[r], !0, o, a);
      else if (void 0 !== n && (s = !0, p.isFunction(n) || (a = !0), c && (a ? (e.call(t, n), e = null) : (c = e, e = function(t, e, i) {
              return c.call(p(t), i)
          })), e))
          for (; l > r; r++) e(t[r], i, a ? n : n.call(t[r], r, e(t[r], i)));
      return s ? t : c ? e.call(t) : l ? e(t[0], i) : o
  };

  function F() {
      Object.defineProperty(this.cache = {}, 0, {
          get: function() {
              return {}
          }
      }), this.expando = p.expando + Math.random()
  }
  p.acceptData = function(t) {
      return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
  }, F.uid = 1, F.accepts = p.acceptData, F.prototype = {
      key: function(t) {
          if (!F.accepts(t)) return 0;
          var e = {},
              i = t[this.expando];
          if (!i) {
              i = F.uid++;
              try {
                  e[this.expando] = {
                      value: i
                  }, Object.defineProperties(t, e)
              } catch (n) {
                  e[this.expando] = i, p.extend(t, e)
              }
          }
          return this.cache[i] || (this.cache[i] = {}), i
      },
      set: function(t, e, i) {
          var n, s = this.key(t),
              o = this.cache[s];
          if ("string" == typeof e) o[e] = i;
          else if (p.isEmptyObject(o)) p.extend(this.cache[s], e);
          else
              for (n in e) o[n] = e[n];
          return o
      },
      get: function(t, e) {
          var i = this.cache[this.key(t)];
          return void 0 === e ? i : i[e]
      },
      access: function(t, e, i) {
          var n;
          return void 0 === e || e && "string" == typeof e && void 0 === i ? void 0 !== (n = this.get(t, e)) ? n : this.get(t, p.camelCase(e)) : (this.set(t, e, i), void 0 !== i ? i : e)
      },
      remove: function(t, e) {
          var i, n, s, o = this.key(t),
              a = this.cache[o];
          if (void 0 === e) this.cache[o] = {};
          else {
              p.isArray(e) ? n = e.concat(e.map(p.camelCase)) : (s = p.camelCase(e), e in a ? n = [e, s] : n = (n = s) in a ? [n] : n.match(P) || []), i = n.length;
              for (; i--;) delete a[n[i]]
          }
      },
      hasData: function(t) {
          return !p.isEmptyObject(this.cache[t[this.expando]] || {})
      },
      discard: function(t) {
          t[this.expando] && delete this.cache[t[this.expando]]
      }
  };
  var O = new F,
      N = new F,
      L = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      H = /([A-Z])/g;

  function z(t, e, i) {
      var n;
      if (void 0 === i && 1 === t.nodeType)
          if (n = "data-" + e.replace(H, "-$1").toLowerCase(), "string" == typeof(i = t.getAttribute(n))) {
              try {
                  i = "true" === i || "false" !== i && ("null" === i ? null : +i + "" === i ? +i : L.test(i) ? p.parseJSON(i) : i)
              } catch (t) {}
              N.set(t, e, i)
          } else i = void 0;
      return i
  }
  p.extend({
      hasData: function(t) {
          return N.hasData(t) || O.hasData(t)
      },
      data: function(t, e, i) {
          return N.access(t, e, i)
      },
      removeData: function(t, e) {
          N.remove(t, e)
      },
      _data: function(t, e, i) {
          return O.access(t, e, i)
      },
      _removeData: function(t, e) {
          O.remove(t, e)
      }
  }), p.fn.extend({
      data: function(t, e) {
          var i, n, s, o = this[0],
              a = o && o.attributes;
          if (void 0 === t) {
              if (this.length && (s = N.get(o), 1 === o.nodeType && !O.get(o, "hasDataAttrs"))) {
                  for (i = a.length; i--;) a[i] && (0 === (n = a[i].name).indexOf("data-") && (n = p.camelCase(n.slice(5)), z(o, n, s[n])));
                  O.set(o, "hasDataAttrs", !0)
              }
              return s
          }
          return "object" == typeof t ? this.each(function() {
              N.set(this, t)
          }) : A(this, function(e) {
              var i, n = p.camelCase(t);
              if (o && void 0 === e) {
                  if (void 0 !== (i = N.get(o, t))) return i;
                  if (void 0 !== (i = N.get(o, n))) return i;
                  if (void 0 !== (i = z(o, n, void 0))) return i
              } else this.each(function() {
                  var i = N.get(this, n);
                  N.set(this, n, e), -1 !== t.indexOf("-") && void 0 !== i && N.set(this, t, e)
              })
          }, null, e, arguments.length > 1, null, !0)
      },
      removeData: function(t) {
          return this.each(function() {
              N.remove(this, t)
          })
      }
  }), p.extend({
      queue: function(t, e, i) {
          var n;
          return t ? (e = (e || "fx") + "queue", n = O.get(t, e), i && (!n || p.isArray(i) ? n = O.access(t, e, p.makeArray(i)) : n.push(i)), n || []) : void 0
      },
      dequeue: function(t, e) {
          e = e || "fx";
          var i = p.queue(t, e),
              n = i.length,
              s = i.shift(),
              o = p._queueHooks(t, e);
          "inprogress" === s && (s = i.shift(), n--), s && ("fx" === e && i.unshift("inprogress"), delete o.stop, s.call(t, function() {
              p.dequeue(t, e)
          }, o)), !n && o && o.empty.fire()
      },
      _queueHooks: function(t, e) {
          var i = e + "queueHooks";
          return O.get(t, i) || O.access(t, i, {
              empty: p.Callbacks("once memory").add(function() {
                  O.remove(t, [e + "queue", i])
              })
          })
      }
  }), p.fn.extend({
      queue: function(t, e) {
          var i = 2;
          return "string" != typeof t && (e = t, t = "fx", i--), arguments.length < i ? p.queue(this[0], t) : void 0 === e ? this : this.each(function() {
              var i = p.queue(this, t, e);
              p._queueHooks(this, t), "fx" === t && "inprogress" !== i[0] && p.dequeue(this, t)
          })
      },
      dequeue: function(t) {
          return this.each(function() {
              p.dequeue(this, t)
          })
      },
      clearQueue: function(t) {
          return this.queue(t || "fx", [])
      },
      promise: function(t, e) {
          var i, n = 1,
              s = p.Deferred(),
              o = this,
              a = this.length,
              r = function() {
                  --n || s.resolveWith(o, [o])
              };
          for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; a--;)(i = O.get(o[a], t + "queueHooks")) && i.empty && (n++, i.empty.add(r));
          return r(), s.promise(e)
      }
  });
  var R = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      W = ["Top", "Right", "Bottom", "Left"],
      j = function(t, e) {
          return t = e || t, "none" === p.css(t, "display") || !p.contains(t.ownerDocument, t)
      },
      B = /^(?:checkbox|radio)$/i;
  ! function() {
      var t = u.createDocumentFragment().appendChild(u.createElement("div")),
          e = u.createElement("input");
      e.setAttribute("type", "radio"), e.setAttribute("checked", "checked"), e.setAttribute("name", "t"), t.appendChild(e), h.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", h.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
  }();
  var Y = "undefined";
  h.focusinBubbles = "onfocusin" in t;
  var q = /^key/,
      U = /^(?:mouse|pointer|contextmenu)|click/,
      V = /^(?:focusinfocus|focusoutblur)$/,
      X = /^([^.]*)(?:\.(.+)|)$/;

  function G() {
      return !0
  }

  function K() {
      return !1
  }

  function Q() {
      try {
          return u.activeElement
      } catch (t) {}
  }
  p.event = {
      global: {},
      add: function(t, e, i, n, s) {
          var o, a, r, l, c, h, u, d, f, m, g, v = O.get(t);
          if (v)
              for (i.handler && (i = (o = i).handler, s = o.selector), i.guid || (i.guid = p.guid++), (l = v.events) || (l = v.events = {}), (a = v.handle) || (a = v.handle = function(e) {
                      return typeof p !== Y && p.event.triggered !== e.type ? p.event.dispatch.apply(t, arguments) : void 0
                  }), c = (e = (e || "").match(P) || [""]).length; c--;) f = g = (r = X.exec(e[c]) || [])[1], m = (r[2] || "").split(".").sort(), f && (u = p.event.special[f] || {}, f = (s ? u.delegateType : u.bindType) || f, u = p.event.special[f] || {}, h = p.extend({
                  type: f,
                  origType: g,
                  data: n,
                  handler: i,
                  guid: i.guid,
                  selector: s,
                  needsContext: s && p.expr.match.needsContext.test(s),
                  namespace: m.join(".")
              }, o), (d = l[f]) || ((d = l[f] = []).delegateCount = 0, u.setup && !1 !== u.setup.call(t, n, m, a) || t.addEventListener && t.addEventListener(f, a, !1)), u.add && (u.add.call(t, h), h.handler.guid || (h.handler.guid = i.guid)), s ? d.splice(d.delegateCount++, 0, h) : d.push(h), p.event.global[f] = !0)
      },
      remove: function(t, e, i, n, s) {
          var o, a, r, l, c, h, u, d, f, m, g, v = O.hasData(t) && O.get(t);
          if (v && (l = v.events)) {
              for (c = (e = (e || "").match(P) || [""]).length; c--;)
                  if (f = g = (r = X.exec(e[c]) || [])[1], m = (r[2] || "").split(".").sort(), f) {
                      for (u = p.event.special[f] || {}, d = l[f = (n ? u.delegateType : u.bindType) || f] || [], r = r[2] && new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = d.length; o--;) h = d[o], !s && g !== h.origType || i && i.guid !== h.guid || r && !r.test(h.namespace) || n && n !== h.selector && ("**" !== n || !h.selector) || (d.splice(o, 1), h.selector && d.delegateCount--, u.remove && u.remove.call(t, h));
                      a && !d.length && (u.teardown && !1 !== u.teardown.call(t, m, v.handle) || p.removeEvent(t, f, v.handle), delete l[f])
                  } else
                      for (f in l) p.event.remove(t, f + e[c], i, n, !0);
              p.isEmptyObject(l) && (delete v.handle, O.remove(t, "events"))
          }
      },
      trigger: function(e, i, n, s) {
          var o, a, r, l, h, d, f, m = [n || u],
              g = c.call(e, "type") ? e.type : e,
              v = c.call(e, "namespace") ? e.namespace.split(".") : [];
          if (a = r = n = n || u, 3 !== n.nodeType && 8 !== n.nodeType && !V.test(g + p.event.triggered) && (g.indexOf(".") >= 0 && (v = g.split("."), g = v.shift(), v.sort()), h = g.indexOf(":") < 0 && "on" + g, (e = e[p.expando] ? e : new p.Event(g, "object" == typeof e && e)).isTrigger = s ? 2 : 3, e.namespace = v.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), i = null == i ? [e] : p.makeArray(i, [e]), f = p.event.special[g] || {}, s || !f.trigger || !1 !== f.trigger.apply(n, i))) {
              if (!s && !f.noBubble && !p.isWindow(n)) {
                  for (l = f.delegateType || g, V.test(l + g) || (a = a.parentNode); a; a = a.parentNode) m.push(a), r = a;
                  r === (n.ownerDocument || u) && m.push(r.defaultView || r.parentWindow || t)
              }
              for (o = 0;
                  (a = m[o++]) && !e.isPropagationStopped();) e.type = o > 1 ? l : f.bindType || g, (d = (O.get(a, "events") || {})[e.type] && O.get(a, "handle")) && d.apply(a, i), (d = h && a[h]) && d.apply && p.acceptData(a) && (e.result = d.apply(a, i), !1 === e.result && e.preventDefault());
              return e.type = g, s || e.isDefaultPrevented() || f._default && !1 !== f._default.apply(m.pop(), i) || !p.acceptData(n) || h && p.isFunction(n[g]) && !p.isWindow(n) && ((r = n[h]) && (n[h] = null), p.event.triggered = g, n[g](), p.event.triggered = void 0, r && (n[h] = r)), e.result
          }
      },
      dispatch: function(t) {
          t = p.event.fix(t);
          var e, i, s, o, a, r = [],
              l = n.call(arguments),
              c = (O.get(this, "events") || {})[t.type] || [],
              h = p.event.special[t.type] || {};
          if (l[0] = t, t.delegateTarget = this, !h.preDispatch || !1 !== h.preDispatch.call(this, t)) {
              for (r = p.event.handlers.call(this, t, c), e = 0;
                  (o = r[e++]) && !t.isPropagationStopped();)
                  for (t.currentTarget = o.elem, i = 0;
                      (a = o.handlers[i++]) && !t.isImmediatePropagationStopped();)(!t.namespace_re || t.namespace_re.test(a.namespace)) && (t.handleObj = a, t.data = a.data, void 0 !== (s = ((p.event.special[a.origType] || {}).handle || a.handler).apply(o.elem, l)) && !1 === (t.result = s) && (t.preventDefault(), t.stopPropagation()));
              return h.postDispatch && h.postDispatch.call(this, t), t.result
          }
      },
      handlers: function(t, e) {
          var i, n, s, o, a = [],
              r = e.delegateCount,
              l = t.target;
          if (r && l.nodeType && (!t.button || "click" !== t.type))
              for (; l !== this; l = l.parentNode || this)
                  if (!0 !== l.disabled || "click" !== t.type) {
                      for (n = [], i = 0; r > i; i++) void 0 === n[s = (o = e[i]).selector + " "] && (n[s] = o.needsContext ? p(s, this).index(l) >= 0 : p.find(s, this, null, [l]).length), n[s] && n.push(o);
                      n.length && a.push({
                          elem: l,
                          handlers: n
                      })
                  }
          return r < e.length && a.push({
              elem: this,
              handlers: e.slice(r)
          }), a
      },
      props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
      fixHooks: {},
      keyHooks: {
          props: "char charCode key keyCode".split(" "),
          filter: function(t, e) {
              return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
          }
      },
      mouseHooks: {
          props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
          filter: function(t, e) {
              var i, n, s, o = e.button;
              return null == t.pageX && null != e.clientX && (n = (i = t.target.ownerDocument || u).documentElement, s = i.body, t.pageX = e.clientX + (n && n.scrollLeft || s && s.scrollLeft || 0) - (n && n.clientLeft || s && s.clientLeft || 0), t.pageY = e.clientY + (n && n.scrollTop || s && s.scrollTop || 0) - (n && n.clientTop || s && s.clientTop || 0)), t.which || void 0 === o || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), t
          }
      },
      fix: function(t) {
          if (t[p.expando]) return t;
          var e, i, n, s = t.type,
              o = t,
              a = this.fixHooks[s];
          for (a || (this.fixHooks[s] = a = U.test(s) ? this.mouseHooks : q.test(s) ? this.keyHooks : {}), n = a.props ? this.props.concat(a.props) : this.props, t = new p.Event(o), e = n.length; e--;) t[i = n[e]] = o[i];
          return t.target || (t.target = u), 3 === t.target.nodeType && (t.target = t.target.parentNode), a.filter ? a.filter(t, o) : t
      },
      special: {
          load: {
              noBubble: !0
          },
          focus: {
              trigger: function() {
                  return this !== Q() && this.focus ? (this.focus(), !1) : void 0
              },
              delegateType: "focusin"
          },
          blur: {
              trigger: function() {
                  return this === Q() && this.blur ? (this.blur(), !1) : void 0
              },
              delegateType: "focusout"
          },
          click: {
              trigger: function() {
                  return "checkbox" === this.type && this.click && p.nodeName(this, "input") ? (this.click(), !1) : void 0
              },
              _default: function(t) {
                  return p.nodeName(t.target, "a")
              }
          },
          beforeunload: {
              postDispatch: function(t) {
                  void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
              }
          }
      },
      simulate: function(t, e, i, n) {
          var s = p.extend(new p.Event, i, {
              type: t,
              isSimulated: !0,
              originalEvent: {}
          });
          n ? p.event.trigger(s, null, e) : p.event.dispatch.call(e, s), s.isDefaultPrevented() && i.preventDefault()
      }
  }, p.removeEvent = function(t, e, i) {
      t.removeEventListener && t.removeEventListener(e, i, !1)
  }, p.Event = function(t, e) {
      return this instanceof p.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? G : K) : this.type = t, e && p.extend(this, e), this.timeStamp = t && t.timeStamp || p.now(), void(this[p.expando] = !0)) : new p.Event(t, e)
  }, p.Event.prototype = {
      isDefaultPrevented: K,
      isPropagationStopped: K,
      isImmediatePropagationStopped: K,
      preventDefault: function() {
          var t = this.originalEvent;
          this.isDefaultPrevented = G, t && t.preventDefault && t.preventDefault()
      },
      stopPropagation: function() {
          var t = this.originalEvent;
          this.isPropagationStopped = G, t && t.stopPropagation && t.stopPropagation()
      },
      stopImmediatePropagation: function() {
          var t = this.originalEvent;
          this.isImmediatePropagationStopped = G, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
      }
  }, p.each({
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      pointerenter: "pointerover",
      pointerleave: "pointerout"
  }, function(t, e) {
      p.event.special[t] = {
          delegateType: e,
          bindType: e,
          handle: function(t) {
              var i, n = t.relatedTarget,
                  s = t.handleObj;
              return (!n || n !== this && !p.contains(this, n)) && (t.type = s.origType, i = s.handler.apply(this, arguments), t.type = e), i
          }
      }
  }), h.focusinBubbles || p.each({
      focus: "focusin",
      blur: "focusout"
  }, function(t, e) {
      var i = function(t) {
          p.event.simulate(e, t.target, p.event.fix(t), !0)
      };
      p.event.special[e] = {
          setup: function() {
              var n = this.ownerDocument || this,
                  s = O.access(n, e);
              s || n.addEventListener(t, i, !0), O.access(n, e, (s || 0) + 1)
          },
          teardown: function() {
              var n = this.ownerDocument || this,
                  s = O.access(n, e) - 1;
              s ? O.access(n, e, s) : (n.removeEventListener(t, i, !0), O.remove(n, e))
          }
      }
  }), p.fn.extend({
      on: function(t, e, i, n, s) {
          var o, a;
          if ("object" == typeof t) {
              for (a in "string" != typeof e && (i = i || e, e = void 0), t) this.on(a, e, i, t[a], s);
              return this
          }
          if (null == i && null == n ? (n = e, i = e = void 0) : null == n && ("string" == typeof e ? (n = i, i = void 0) : (n = i, i = e, e = void 0)), !1 === n) n = K;
          else if (!n) return this;
          return 1 === s && (o = n, (n = function(t) {
              return p().off(t), o.apply(this, arguments)
          }).guid = o.guid || (o.guid = p.guid++)), this.each(function() {
              p.event.add(this, t, n, i, e)
          })
      },
      one: function(t, e, i, n) {
          return this.on(t, e, i, n, 1)
      },
      off: function(t, e, i) {
          var n, s;
          if (t && t.preventDefault && t.handleObj) return n = t.handleObj, p(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
          if ("object" == typeof t) {
              for (s in t) this.off(s, e, t[s]);
              return this
          }
          return (!1 === e || "function" == typeof e) && (i = e, e = void 0), !1 === i && (i = K), this.each(function() {
              p.event.remove(this, t, i, e)
          })
      },
      trigger: function(t, e) {
          return this.each(function() {
              p.event.trigger(t, e, this)
          })
      },
      triggerHandler: function(t, e) {
          var i = this[0];
          return i ? p.event.trigger(t, e, i, !0) : void 0
      }
  });
  var Z = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
      J = /<([\w:]+)/,
      tt = /<|&#?\w+;/,
      et = /<(?:script|style|link)/i,
      it = /checked\s*(?:[^=]|=\s*.checked.)/i,
      nt = /^$|\/(?:java|ecma)script/i,
      st = /^true\/(.*)/,
      ot = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
      at = {
          option: [1, "<select multiple='multiple'>", "</select>"],
          thead: [1, "<table>", "</table>"],
          col: [2, "<table><colgroup>", "</colgroup></table>"],
          tr: [2, "<table><tbody>", "</tbody></table>"],
          td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
          _default: [0, "", ""]
      };

  function rt(t, e) {
      return p.nodeName(t, "table") && p.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
  }

  function lt(t) {
      return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
  }

  function ct(t) {
      var e = st.exec(t.type);
      return e ? t.type = e[1] : t.removeAttribute("type"), t
  }

  function ht(t, e) {
      for (var i = 0, n = t.length; n > i; i++) O.set(t[i], "globalEval", !e || O.get(e[i], "globalEval"))
  }

  function ut(t, e) {
      var i, n, s, o, a, r, l, c;
      if (1 === e.nodeType) {
          if (O.hasData(t) && (o = O.access(t), a = O.set(e, o), c = o.events))
              for (s in delete a.handle, a.events = {}, c)
                  for (i = 0, n = c[s].length; n > i; i++) p.event.add(e, s, c[s][i]);
          N.hasData(t) && (r = N.access(t), l = p.extend({}, r), N.set(e, l))
      }
  }

  function dt(t, e) {
      var i = t.getElementsByTagName ? t.getElementsByTagName(e || "*") : t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
      return void 0 === e || e && p.nodeName(t, e) ? p.merge([t], i) : i
  }

  function pt(t, e) {
      var i = e.nodeName.toLowerCase();
      "input" === i && B.test(t.type) ? e.checked = t.checked : ("input" === i || "textarea" === i) && (e.defaultValue = t.defaultValue)
  }
  at.optgroup = at.option, at.tbody = at.tfoot = at.colgroup = at.caption = at.thead, at.th = at.td, p.extend({
      clone: function(t, e, i) {
          var n, s, o, a, r = t.cloneNode(!0),
              l = p.contains(t.ownerDocument, t);
          if (!(h.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || p.isXMLDoc(t)))
              for (a = dt(r), n = 0, s = (o = dt(t)).length; s > n; n++) pt(o[n], a[n]);
          if (e)
              if (i)
                  for (o = o || dt(t), a = a || dt(r), n = 0, s = o.length; s > n; n++) ut(o[n], a[n]);
              else ut(t, r);
          return (a = dt(r, "script")).length > 0 && ht(a, !l && dt(t, "script")), r
      },
      buildFragment: function(t, e, i, n) {
          for (var s, o, a, r, l, c, h = e.createDocumentFragment(), u = [], d = 0, f = t.length; f > d; d++)
              if ((s = t[d]) || 0 === s)
                  if ("object" === p.type(s)) p.merge(u, s.nodeType ? [s] : s);
                  else if (tt.test(s)) {
              for (o = o || h.appendChild(e.createElement("div")), a = (J.exec(s) || ["", ""])[1].toLowerCase(), r = at[a] || at._default, o.innerHTML = r[1] + s.replace(Z, "<$1></$2>") + r[2], c = r[0]; c--;) o = o.lastChild;
              p.merge(u, o.childNodes), (o = h.firstChild).textContent = ""
          } else u.push(e.createTextNode(s));
          for (h.textContent = "", d = 0; s = u[d++];)
              if ((!n || -1 === p.inArray(s, n)) && (l = p.contains(s.ownerDocument, s), o = dt(h.appendChild(s), "script"), l && ht(o), i))
                  for (c = 0; s = o[c++];) nt.test(s.type || "") && i.push(s);
          return h
      },
      cleanData: function(t) {
          for (var e, i, n, s, o = p.event.special, a = 0; void 0 !== (i = t[a]); a++) {
              if (p.acceptData(i) && ((s = i[O.expando]) && (e = O.cache[s]))) {
                  if (e.events)
                      for (n in e.events) o[n] ? p.event.remove(i, n) : p.removeEvent(i, n, e.handle);
                  O.cache[s] && delete O.cache[s]
              }
              delete N.cache[i[N.expando]]
          }
      }
  }), p.fn.extend({
      text: function(t) {
          return A(this, function(t) {
              return void 0 === t ? p.text(this) : this.empty().each(function() {
                  (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = t)
              })
          }, null, t, arguments.length)
      },
      append: function() {
          return this.domManip(arguments, function(t) {
              1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || rt(this, t).appendChild(t)
          })
      },
      prepend: function() {
          return this.domManip(arguments, function(t) {
              if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                  var e = rt(this, t);
                  e.insertBefore(t, e.firstChild)
              }
          })
      },
      before: function() {
          return this.domManip(arguments, function(t) {
              this.parentNode && this.parentNode.insertBefore(t, this)
          })
      },
      after: function() {
          return this.domManip(arguments, function(t) {
              this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
          })
      },
      remove: function(t, e) {
          for (var i, n = t ? p.filter(t, this) : this, s = 0; null != (i = n[s]); s++) e || 1 !== i.nodeType || p.cleanData(dt(i)), i.parentNode && (e && p.contains(i.ownerDocument, i) && ht(dt(i, "script")), i.parentNode.removeChild(i));
          return this
      },
      empty: function() {
          for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (p.cleanData(dt(t, !1)), t.textContent = "");
          return this
      },
      clone: function(t, e) {
          return t = null != t && t, e = null == e ? t : e, this.map(function() {
              return p.clone(this, t, e)
          })
      },
      html: function(t) {
          return A(this, function(t) {
              var e = this[0] || {},
                  i = 0,
                  n = this.length;
              if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
              if ("string" == typeof t && !et.test(t) && !at[(J.exec(t) || ["", ""])[1].toLowerCase()]) {
                  t = t.replace(Z, "<$1></$2>");
                  try {
                      for (; n > i; i++) 1 === (e = this[i] || {}).nodeType && (p.cleanData(dt(e, !1)), e.innerHTML = t);
                      e = 0
                  } catch (t) {}
              }
              e && this.empty().append(t)
          }, null, t, arguments.length)
      },
      replaceWith: function() {
          var t = arguments[0];
          return this.domManip(arguments, function(e) {
              t = this.parentNode, p.cleanData(dt(this)), t && t.replaceChild(e, this)
          }), t && (t.length || t.nodeType) ? this : this.remove()
      },
      detach: function(t) {
          return this.remove(t, !0)
      },
      domManip: function(t, e) {
          t = s.apply([], t);
          var i, n, o, a, r, l, c = 0,
              u = this.length,
              d = this,
              f = u - 1,
              m = t[0],
              g = p.isFunction(m);
          if (g || u > 1 && "string" == typeof m && !h.checkClone && it.test(m)) return this.each(function(i) {
              var n = d.eq(i);
              g && (t[0] = m.call(this, i, n.html())), n.domManip(t, e)
          });
          if (u && (n = (i = p.buildFragment(t, this[0].ownerDocument, !1, this)).firstChild, 1 === i.childNodes.length && (i = n), n)) {
              for (a = (o = p.map(dt(i, "script"), lt)).length; u > c; c++) r = i, c !== f && (r = p.clone(r, !0, !0), a && p.merge(o, dt(r, "script"))), e.call(this[c], r, c);
              if (a)
                  for (l = o[o.length - 1].ownerDocument, p.map(o, ct), c = 0; a > c; c++) r = o[c], nt.test(r.type || "") && !O.access(r, "globalEval") && p.contains(l, r) && (r.src ? p._evalUrl && p._evalUrl(r.src) : p.globalEval(r.textContent.replace(ot, "")))
          }
          return this
      }
  }), p.each({
      appendTo: "append",
      prependTo: "prepend",
      insertBefore: "before",
      insertAfter: "after",
      replaceAll: "replaceWith"
  }, function(t, e) {
      p.fn[t] = function(t) {
          for (var i, n = [], s = p(t), a = s.length - 1, r = 0; a >= r; r++) i = r === a ? this : this.clone(!0), p(s[r])[e](i), o.apply(n, i.get());
          return this.pushStack(n)
      }
  });
  var ft, mt = {};

  function gt(e, i) {
      var n, s = p(i.createElement(e)).appendTo(i.body),
          o = t.getDefaultComputedStyle && (n = t.getDefaultComputedStyle(s[0])) ? n.display : p.css(s[0], "display");
      return s.detach(), o
  }

  function vt(t) {
      var e = u,
          i = mt[t];
      return i || ("none" !== (i = gt(t, e)) && i || ((e = (ft = (ft || p("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement))[0].contentDocument).write(), e.close(), i = gt(t, e), ft.detach()), mt[t] = i), i
  }
  var yt = /^margin/,
      bt = new RegExp("^(" + R + ")(?!px)[a-z%]+$", "i"),
      _t = function(t) {
          return t.ownerDocument.defaultView.getComputedStyle(t, null)
      };

  function wt(t, e, i) {
      var n, s, o, a, r = t.style;
      return (i = i || _t(t)) && (a = i.getPropertyValue(e) || i[e]), i && ("" !== a || p.contains(t.ownerDocument, t) || (a = p.style(t, e)), bt.test(a) && yt.test(e) && (n = r.width, s = r.minWidth, o = r.maxWidth, r.minWidth = r.maxWidth = r.width = a, a = i.width, r.width = n, r.minWidth = s, r.maxWidth = o)), void 0 !== a ? a + "" : a
  }

  function xt(t, e) {
      return {
          get: function() {
              return t() ? void delete this.get : (this.get = e).apply(this, arguments)
          }
      }
  }! function() {
      var e, i, n = u.documentElement,
          s = u.createElement("div"),
          o = u.createElement("div");
      if (o.style) {
          function a() {
              o.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", o.innerHTML = "", n.appendChild(s);
              var a = t.getComputedStyle(o, null);
              e = "1%" !== a.top, i = "4px" === a.width, n.removeChild(s)
          }
          o.style.backgroundClip = "content-box", o.cloneNode(!0).style.backgroundClip = "", h.clearCloneStyle = "content-box" === o.style.backgroundClip, s.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", s.appendChild(o), t.getComputedStyle && p.extend(h, {
              pixelPosition: function() {
                  return a(), e
              },
              boxSizingReliable: function() {
                  return null == i && a(), i
              },
              reliableMarginRight: function() {
                  var e, i = o.appendChild(u.createElement("div"));
                  return i.style.cssText = o.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", o.style.width = "1px", n.appendChild(s), e = !parseFloat(t.getComputedStyle(i, null).marginRight), n.removeChild(s), e
              }
          })
      }
  }(), p.swap = function(t, e, i, n) {
      var s, o, a = {};
      for (o in e) a[o] = t.style[o], t.style[o] = e[o];
      for (o in s = i.apply(t, n || []), e) t.style[o] = a[o];
      return s
  };
  var Ct = /^(none|table(?!-c[ea]).+)/,
      kt = new RegExp("^(" + R + ")(.*)$", "i"),
      St = new RegExp("^([+-])=(" + R + ")", "i"),
      Tt = {
          position: "absolute",
          visibility: "hidden",
          display: "block"
      },
      Dt = {
          letterSpacing: "0",
          fontWeight: "400"
      },
      Mt = ["Webkit", "O", "Moz", "ms"];

  function It(t, e) {
      if (e in t) return e;
      for (var i = e[0].toUpperCase() + e.slice(1), n = e, s = Mt.length; s--;)
          if ((e = Mt[s] + i) in t) return e;
      return n
  }

  function Pt(t, e, i) {
      var n = kt.exec(e);
      return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : e
  }

  function $t(t, e, i, n, s) {
      for (var o = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0, a = 0; 4 > o; o += 2) "margin" === i && (a += p.css(t, i + W[o], !0, s)), n ? ("content" === i && (a -= p.css(t, "padding" + W[o], !0, s)), "margin" !== i && (a -= p.css(t, "border" + W[o] + "Width", !0, s))) : (a += p.css(t, "padding" + W[o], !0, s), "padding" !== i && (a += p.css(t, "border" + W[o] + "Width", !0, s)));
      return a
  }

  function Et(t, e, i) {
      var n = !0,
          s = "width" === e ? t.offsetWidth : t.offsetHeight,
          o = _t(t),
          a = "border-box" === p.css(t, "boxSizing", !1, o);
      if (0 >= s || null == s) {
          if ((0 > (s = wt(t, e, o)) || null == s) && (s = t.style[e]), bt.test(s)) return s;
          n = a && (h.boxSizingReliable() || s === t.style[e]), s = parseFloat(s) || 0
      }
      return s + $t(t, e, i || (a ? "border" : "content"), n, o) + "px"
  }

  function At(t, e) {
      for (var i, n, s, o = [], a = 0, r = t.length; r > a; a++)(n = t[a]).style && (o[a] = O.get(n, "olddisplay"), i = n.style.display, e ? (o[a] || "none" !== i || (n.style.display = ""), "" === n.style.display && j(n) && (o[a] = O.access(n, "olddisplay", vt(n.nodeName)))) : (s = j(n), "none" === i && s || O.set(n, "olddisplay", s ? i : p.css(n, "display"))));
      for (a = 0; r > a; a++)(n = t[a]).style && (e && "none" !== n.style.display && "" !== n.style.display || (n.style.display = e ? o[a] || "" : "none"));
      return t
  }

  function Ft(t, e, i, n, s) {
      return new Ft.prototype.init(t, e, i, n, s)
  }
  p.extend({
      cssHooks: {
          opacity: {
              get: function(t, e) {
                  if (e) {
                      var i = wt(t, "opacity");
                      return "" === i ? "1" : i
                  }
              }
          }
      },
      cssNumber: {
          columnCount: !0,
          fillOpacity: !0,
          flexGrow: !0,
          flexShrink: !0,
          fontWeight: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0
      },
      cssProps: {
          float: "cssFloat"
      },
      style: function(t, e, i, n) {
          if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
              var s, o, a, r = p.camelCase(e),
                  l = t.style;
              return e = p.cssProps[r] || (p.cssProps[r] = It(l, r)), a = p.cssHooks[e] || p.cssHooks[r], void 0 === i ? a && "get" in a && void 0 !== (s = a.get(t, !1, n)) ? s : l[e] : ("string" === (o = typeof i) && (s = St.exec(i)) && (i = (s[1] + 1) * s[2] + parseFloat(p.css(t, e)), o = "number"), void(null != i && i == i && ("number" !== o || p.cssNumber[r] || (i += "px"), h.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (l[e] = "inherit"), a && "set" in a && void 0 === (i = a.set(t, i, n)) || (l[e] = i))))
          }
      },
      css: function(t, e, i, n) {
          var s, o, a, r = p.camelCase(e);
          return e = p.cssProps[r] || (p.cssProps[r] = It(t.style, r)), (a = p.cssHooks[e] || p.cssHooks[r]) && "get" in a && (s = a.get(t, !0, i)), void 0 === s && (s = wt(t, e, n)), "normal" === s && e in Dt && (s = Dt[e]), "" === i || i ? (o = parseFloat(s), !0 === i || p.isNumeric(o) ? o || 0 : s) : s
      }
  }), p.each(["height", "width"], function(t, e) {
      p.cssHooks[e] = {
          get: function(t, i, n) {
              return i ? Ct.test(p.css(t, "display")) && 0 === t.offsetWidth ? p.swap(t, Tt, function() {
                  return Et(t, e, n)
              }) : Et(t, e, n) : void 0
          },
          set: function(t, i, n) {
              var s = n && _t(t);
              return Pt(0, i, n ? $t(t, e, n, "border-box" === p.css(t, "boxSizing", !1, s), s) : 0)
          }
      }
  }), p.cssHooks.marginRight = xt(h.reliableMarginRight, function(t, e) {
      return e ? p.swap(t, {
          display: "inline-block"
      }, wt, [t, "marginRight"]) : void 0
  }), p.each({
      margin: "",
      padding: "",
      border: "Width"
  }, function(t, e) {
      p.cssHooks[t + e] = {
          expand: function(i) {
              for (var n = 0, s = {}, o = "string" == typeof i ? i.split(" ") : [i]; 4 > n; n++) s[t + W[n] + e] = o[n] || o[n - 2] || o[0];
              return s
          }
      }, yt.test(t) || (p.cssHooks[t + e].set = Pt)
  }), p.fn.extend({
      css: function(t, e) {
          return A(this, function(t, e, i) {
              var n, s, o = {},
                  a = 0;
              if (p.isArray(e)) {
                  for (n = _t(t), s = e.length; s > a; a++) o[e[a]] = p.css(t, e[a], !1, n);
                  return o
              }
              return void 0 !== i ? p.style(t, e, i) : p.css(t, e)
          }, t, e, arguments.length > 1)
      },
      show: function() {
          return At(this, !0)
      },
      hide: function() {
          return At(this)
      },
      toggle: function(t) {
          return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
              j(this) ? p(this).show() : p(this).hide()
          })
      }
  }), p.Tween = Ft, Ft.prototype = {
      constructor: Ft,
      init: function(t, e, i, n, s, o) {
          this.elem = t, this.prop = i, this.easing = s || "swing", this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = o || (p.cssNumber[i] ? "" : "px")
      },
      cur: function() {
          var t = Ft.propHooks[this.prop];
          return t && t.get ? t.get(this) : Ft.propHooks._default.get(this)
      },
      run: function(t) {
          var e, i = Ft.propHooks[this.prop];
          return this.pos = e = this.options.duration ? p.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : Ft.propHooks._default.set(this), this
      }
  }, Ft.prototype.init.prototype = Ft.prototype, Ft.propHooks = {
      _default: {
          get: function(t) {
              var e;
              return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = p.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0 : t.elem[t.prop]
          },
          set: function(t) {
              p.fx.step[t.prop] ? p.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[p.cssProps[t.prop]] || p.cssHooks[t.prop]) ? p.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
          }
      }
  }, Ft.propHooks.scrollTop = Ft.propHooks.scrollLeft = {
      set: function(t) {
          t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
      }
  }, p.easing = {
      linear: function(t) {
          return t
      },
      swing: function(t) {
          return .5 - Math.cos(t * Math.PI) / 2
      }
  }, p.fx = Ft.prototype.init, p.fx.step = {};
  var Ot, Nt, Lt = /^(?:toggle|show|hide)$/,
      Ht = new RegExp("^(?:([+-])=|)(" + R + ")([a-z%]*)$", "i"),
      zt = /queueHooks$/,
      Rt = [function(t, e, i) {
          var n, s, o, a, r, l, c, h = this,
              u = {},
              d = t.style,
              f = t.nodeType && j(t),
              m = O.get(t, "fxshow");
          for (n in i.queue || (null == (r = p._queueHooks(t, "fx")).unqueued && (r.unqueued = 0, l = r.empty.fire, r.empty.fire = function() {
                  r.unqueued || l()
              }), r.unqueued++, h.always(function() {
                  h.always(function() {
                      r.unqueued--, p.queue(t, "fx").length || r.empty.fire()
                  })
              })), 1 === t.nodeType && ("height" in e || "width" in e) && (i.overflow = [d.overflow, d.overflowX, d.overflowY], c = p.css(t, "display"), "inline" === ("none" === c ? O.get(t, "olddisplay") || vt(t.nodeName) : c) && "none" === p.css(t, "float") && (d.display = "inline-block")), i.overflow && (d.overflow = "hidden", h.always(function() {
                  d.overflow = i.overflow[0], d.overflowX = i.overflow[1], d.overflowY = i.overflow[2]
              })), e)
              if (s = e[n], Lt.exec(s)) {
                  if (delete e[n], o = o || "toggle" === s, s === (f ? "hide" : "show")) {
                      if ("show" !== s || !m || void 0 === m[n]) continue;
                      f = !0
                  }
                  u[n] = m && m[n] || p.style(t, n)
              } else c = void 0;
          if (p.isEmptyObject(u)) "inline" === ("none" === c ? vt(t.nodeName) : c) && (d.display = c);
          else
              for (n in m ? "hidden" in m && (f = m.hidden) : m = O.access(t, "fxshow", {}), o && (m.hidden = !f), f ? p(t).show() : h.done(function() {
                      p(t).hide()
                  }), h.done(function() {
                      var e;
                      for (e in O.remove(t, "fxshow"), u) p.style(t, e, u[e])
                  }), u) a = Yt(f ? m[n] : 0, n, h), n in m || (m[n] = a.start, f && (a.end = a.start, a.start = "width" === n || "height" === n ? 1 : 0))
      }],
      Wt = {
          "*": [function(t, e) {
              var i = this.createTween(t, e),
                  n = i.cur(),
                  s = Ht.exec(e),
                  o = s && s[3] || (p.cssNumber[t] ? "" : "px"),
                  a = (p.cssNumber[t] || "px" !== o && +n) && Ht.exec(p.css(i.elem, t)),
                  r = 1,
                  l = 20;
              if (a && a[3] !== o) {
                  o = o || a[3], s = s || [], a = +n || 1;
                  do {
                      a /= r = r || ".5", p.style(i.elem, t, a + o)
                  } while (r !== (r = i.cur() / n) && 1 !== r && --l)
              }
              return s && (a = i.start = +a || +n || 0, i.unit = o, i.end = s[1] ? a + (s[1] + 1) * s[2] : +s[2]), i
          }]
      };

  function jt() {
      return setTimeout(function() {
          Ot = void 0
      }), Ot = p.now()
  }

  function Bt(t, e) {
      var i, n = 0,
          s = {
              height: t
          };
      for (e = e ? 1 : 0; 4 > n; n += 2 - e) s["margin" + (i = W[n])] = s["padding" + i] = t;
      return e && (s.opacity = s.width = t), s
  }

  function Yt(t, e, i) {
      for (var n, s = (Wt[e] || []).concat(Wt["*"]), o = 0, a = s.length; a > o; o++)
          if (n = s[o].call(i, e, t)) return n
  }

  function qt(t, e, i) {
      var n, s, o = 0,
          a = Rt.length,
          r = p.Deferred().always(function() {
              delete l.elem
          }),
          l = function() {
              if (s) return !1;
              for (var e = Ot || jt(), i = Math.max(0, c.startTime + c.duration - e), n = 1 - (i / c.duration || 0), o = 0, a = c.tweens.length; a > o; o++) c.tweens[o].run(n);
              return r.notifyWith(t, [c, n, i]), 1 > n && a ? i : (r.resolveWith(t, [c]), !1)
          },
          c = r.promise({
              elem: t,
              props: p.extend({}, e),
              opts: p.extend(!0, {
                  specialEasing: {}
              }, i),
              originalProperties: e,
              originalOptions: i,
              startTime: Ot || jt(),
              duration: i.duration,
              tweens: [],
              createTween: function(e, i) {
                  var n = p.Tween(t, c.opts, e, i, c.opts.specialEasing[e] || c.opts.easing);
                  return c.tweens.push(n), n
              },
              stop: function(e) {
                  var i = 0,
                      n = e ? c.tweens.length : 0;
                  if (s) return this;
                  for (s = !0; n > i; i++) c.tweens[i].run(1);
                  return e ? r.resolveWith(t, [c, e]) : r.rejectWith(t, [c, e]), this
              }
          }),
          h = c.props;
      for (function(t, e) {
              var i, n, s, o, a;
              for (i in t)
                  if (s = e[n = p.camelCase(i)], o = t[i], p.isArray(o) && (s = o[1], o = t[i] = o[0]), i !== n && (t[n] = o, delete t[i]), (a = p.cssHooks[n]) && "expand" in a)
                      for (i in o = a.expand(o), delete t[n], o) i in t || (t[i] = o[i], e[i] = s);
                  else e[n] = s
          }(h, c.opts.specialEasing); a > o; o++)
          if (n = Rt[o].call(c, t, h, c.opts)) return n;
      return p.map(h, Yt, c), p.isFunction(c.opts.start) && c.opts.start.call(t, c), p.fx.timer(p.extend(l, {
          elem: t,
          anim: c,
          queue: c.opts.queue
      })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
  }
  p.Animation = p.extend(qt, {
          tweener: function(t, e) {
              p.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
              for (var i, n = 0, s = t.length; s > n; n++) i = t[n], Wt[i] = Wt[i] || [], Wt[i].unshift(e)
          },
          prefilter: function(t, e) {
              e ? Rt.unshift(t) : Rt.push(t)
          }
      }), p.speed = function(t, e, i) {
          var n = t && "object" == typeof t ? p.extend({}, t) : {
              complete: i || !i && e || p.isFunction(t) && t,
              duration: t,
              easing: i && e || e && !p.isFunction(e) && e
          };
          return n.duration = p.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in p.fx.speeds ? p.fx.speeds[n.duration] : p.fx.speeds._default, (null == n.queue || !0 === n.queue) && (n.queue = "fx"), n.old = n.complete, n.complete = function() {
              p.isFunction(n.old) && n.old.call(this), n.queue && p.dequeue(this, n.queue)
          }, n
      }, p.fn.extend({
          fadeTo: function(t, e, i, n) {
              return this.filter(j).css("opacity", 0).show().end().animate({
                  opacity: e
              }, t, i, n)
          },
          animate: function(t, e, i, n) {
              var s = p.isEmptyObject(t),
                  o = p.speed(e, i, n),
                  a = function() {
                      var e = qt(this, p.extend({}, t), o);
                      (s || O.get(this, "finish")) && e.stop(!0)
                  };
              return a.finish = a, s || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
          },
          stop: function(t, e, i) {
              var n = function(t) {
                  var e = t.stop;
                  delete t.stop, e(i)
              };
              return "string" != typeof t && (i = e, e = t, t = void 0), e && !1 !== t && this.queue(t || "fx", []), this.each(function() {
                  var e = !0,
                      s = null != t && t + "queueHooks",
                      o = p.timers,
                      a = O.get(this);
                  if (s) a[s] && a[s].stop && n(a[s]);
                  else
                      for (s in a) a[s] && a[s].stop && zt.test(s) && n(a[s]);
                  for (s = o.length; s--;) o[s].elem !== this || null != t && o[s].queue !== t || (o[s].anim.stop(i), e = !1, o.splice(s, 1));
                  (e || !i) && p.dequeue(this, t)
              })
          },
          finish: function(t) {
              return !1 !== t && (t = t || "fx"), this.each(function() {
                  var e, i = O.get(this),
                      n = i[t + "queue"],
                      s = i[t + "queueHooks"],
                      o = p.timers,
                      a = n ? n.length : 0;
                  for (i.finish = !0, p.queue(this, t, []), s && s.stop && s.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                  for (e = 0; a > e; e++) n[e] && n[e].finish && n[e].finish.call(this);
                  delete i.finish
              })
          }
      }), p.each(["toggle", "show", "hide"], function(t, e) {
          var i = p.fn[e];
          p.fn[e] = function(t, n, s) {
              return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(Bt(e, !0), t, n, s)
          }
      }), p.each({
          slideDown: Bt("show"),
          slideUp: Bt("hide"),
          slideToggle: Bt("toggle"),
          fadeIn: {
              opacity: "show"
          },
          fadeOut: {
              opacity: "hide"
          },
          fadeToggle: {
              opacity: "toggle"
          }
      }, function(t, e) {
          p.fn[t] = function(t, i, n) {
              return this.animate(e, t, i, n)
          }
      }), p.timers = [], p.fx.tick = function() {
          var t, e = 0,
              i = p.timers;
          for (Ot = p.now(); e < i.length; e++)(t = i[e])() || i[e] !== t || i.splice(e--, 1);
          i.length || p.fx.stop(), Ot = void 0
      }, p.fx.timer = function(t) {
          p.timers.push(t), t() ? p.fx.start() : p.timers.pop()
      }, p.fx.interval = 13, p.fx.start = function() {
          Nt || (Nt = setInterval(p.fx.tick, p.fx.interval))
      }, p.fx.stop = function() {
          clearInterval(Nt), Nt = null
      }, p.fx.speeds = {
          slow: 600,
          fast: 200,
          _default: 400
      }, p.fn.delay = function(t, e) {
          return t = p.fx && p.fx.speeds[t] || t, e = e || "fx", this.queue(e, function(e, i) {
              var n = setTimeout(e, t);
              i.stop = function() {
                  clearTimeout(n)
              }
          })
      },
      function() {
          var t = u.createElement("input"),
              e = u.createElement("select"),
              i = e.appendChild(u.createElement("option"));
          t.type = "checkbox", h.checkOn = "" !== t.value, h.optSelected = i.selected, e.disabled = !0, h.optDisabled = !i.disabled, (t = u.createElement("input")).value = "t", t.type = "radio", h.radioValue = "t" === t.value
      }();
  var Ut, Vt = p.expr.attrHandle;
  p.fn.extend({
      attr: function(t, e) {
          return A(this, p.attr, t, e, arguments.length > 1)
      },
      removeAttr: function(t) {
          return this.each(function() {
              p.removeAttr(this, t)
          })
      }
  }), p.extend({
      attr: function(t, e, i) {
          var n, s, o = t.nodeType;
          if (t && 3 !== o && 8 !== o && 2 !== o) return typeof t.getAttribute === Y ? p.prop(t, e, i) : (1 === o && p.isXMLDoc(t) || (e = e.toLowerCase(), n = p.attrHooks[e] || (p.expr.match.bool.test(e) ? Ut : void 0)), void 0 === i ? n && "get" in n && null !== (s = n.get(t, e)) ? s : null == (s = p.find.attr(t, e)) ? void 0 : s : null !== i ? n && "set" in n && void 0 !== (s = n.set(t, i, e)) ? s : (t.setAttribute(e, i + ""), i) : void p.removeAttr(t, e))
      },
      removeAttr: function(t, e) {
          var i, n, s = 0,
              o = e && e.match(P);
          if (o && 1 === t.nodeType)
              for (; i = o[s++];) n = p.propFix[i] || i, p.expr.match.bool.test(i) && (t[n] = !1), t.removeAttribute(i)
      },
      attrHooks: {
          type: {
              set: function(t, e) {
                  if (!h.radioValue && "radio" === e && p.nodeName(t, "input")) {
                      var i = t.value;
                      return t.setAttribute("type", e), i && (t.value = i), e
                  }
              }
          }
      }
  }), Ut = {
      set: function(t, e, i) {
          return !1 === e ? p.removeAttr(t, i) : t.setAttribute(i, i), i
      }
  }, p.each(p.expr.match.bool.source.match(/\w+/g), function(t, e) {
      var i = Vt[e] || p.find.attr;
      Vt[e] = function(t, e, n) {
          var s, o;
          return n || (o = Vt[e], Vt[e] = s, s = null != i(t, e, n) ? e.toLowerCase() : null, Vt[e] = o), s
      }
  });
  var Xt = /^(?:input|select|textarea|button)$/i;
  p.fn.extend({
      prop: function(t, e) {
          return A(this, p.prop, t, e, arguments.length > 1)
      },
      removeProp: function(t) {
          return this.each(function() {
              delete this[p.propFix[t] || t]
          })
      }
  }), p.extend({
      propFix: {
          for: "htmlFor",
          class: "className"
      },
      prop: function(t, e, i) {
          var n, s, o = t.nodeType;
          if (t && 3 !== o && 8 !== o && 2 !== o) return (1 !== o || !p.isXMLDoc(t)) && (e = p.propFix[e] || e, s = p.propHooks[e]), void 0 !== i ? s && "set" in s && void 0 !== (n = s.set(t, i, e)) ? n : t[e] = i : s && "get" in s && null !== (n = s.get(t, e)) ? n : t[e]
      },
      propHooks: {
          tabIndex: {
              get: function(t) {
                  return t.hasAttribute("tabindex") || Xt.test(t.nodeName) || t.href ? t.tabIndex : -1
              }
          }
      }
  }), h.optSelected || (p.propHooks.selected = {
      get: function(t) {
          var e = t.parentNode;
          return e && e.parentNode && e.parentNode.selectedIndex, null
      }
  }), p.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
      p.propFix[this.toLowerCase()] = this
  });
  var Gt = /[\t\r\n\f]/g;
  p.fn.extend({
      addClass: function(t) {
          var e, i, n, s, o, a, r = "string" == typeof t && t,
              l = 0,
              c = this.length;
          if (p.isFunction(t)) return this.each(function(e) {
              p(this).addClass(t.call(this, e, this.className))
          });
          if (r)
              for (e = (t || "").match(P) || []; c > l; l++)
                  if (n = 1 === (i = this[l]).nodeType && (i.className ? (" " + i.className + " ").replace(Gt, " ") : " ")) {
                      for (o = 0; s = e[o++];) n.indexOf(" " + s + " ") < 0 && (n += s + " ");
                      a = p.trim(n), i.className !== a && (i.className = a)
                  }
          return this
      },
      removeClass: function(t) {
          var e, i, n, s, o, a, r = 0 === arguments.length || "string" == typeof t && t,
              l = 0,
              c = this.length;
          if (p.isFunction(t)) return this.each(function(e) {
              p(this).removeClass(t.call(this, e, this.className))
          });
          if (r)
              for (e = (t || "").match(P) || []; c > l; l++)
                  if (n = 1 === (i = this[l]).nodeType && (i.className ? (" " + i.className + " ").replace(Gt, " ") : "")) {
                      for (o = 0; s = e[o++];)
                          for (; n.indexOf(" " + s + " ") >= 0;) n = n.replace(" " + s + " ", " ");
                      a = t ? p.trim(n) : "", i.className !== a && (i.className = a)
                  }
          return this
      },
      toggleClass: function(t, e) {
          var i = typeof t;
          return "boolean" == typeof e && "string" === i ? e ? this.addClass(t) : this.removeClass(t) : this.each(p.isFunction(t) ? function(i) {
              p(this).toggleClass(t.call(this, i, this.className, e), e)
          } : function() {
              if ("string" === i)
                  for (var e, n = 0, s = p(this), o = t.match(P) || []; e = o[n++];) s.hasClass(e) ? s.removeClass(e) : s.addClass(e);
              else(i === Y || "boolean" === i) && (this.className && O.set(this, "__className__", this.className), this.className = this.className || !1 === t ? "" : O.get(this, "__className__") || "")
          })
      },
      hasClass: function(t) {
          for (var e = " " + t + " ", i = 0, n = this.length; n > i; i++)
              if (1 === this[i].nodeType && (" " + this[i].className + " ").replace(Gt, " ").indexOf(e) >= 0) return !0;
          return !1
      }
  });
  var Kt = /\r/g;
  p.fn.extend({
      val: function(t) {
          var e, i, n, s = this[0];
          return arguments.length ? (n = p.isFunction(t), this.each(function(i) {
              var s;
              1 === this.nodeType && (null == (s = n ? t.call(this, i, p(this).val()) : t) ? s = "" : "number" == typeof s ? s += "" : p.isArray(s) && (s = p.map(s, function(t) {
                  return null == t ? "" : t + ""
              })), (e = p.valHooks[this.type] || p.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, s, "value") || (this.value = s))
          })) : s ? (e = p.valHooks[s.type] || p.valHooks[s.nodeName.toLowerCase()]) && "get" in e && void 0 !== (i = e.get(s, "value")) ? i : "string" == typeof(i = s.value) ? i.replace(Kt, "") : null == i ? "" : i : void 0
      }
  }), p.extend({
      valHooks: {
          option: {
              get: function(t) {
                  var e = p.find.attr(t, "value");
                  return null != e ? e : p.trim(p.text(t))
              }
          },
          select: {
              get: function(t) {
                  for (var e, i, n = t.options, s = t.selectedIndex, o = "select-one" === t.type || 0 > s, a = o ? null : [], r = o ? s + 1 : n.length, l = 0 > s ? r : o ? s : 0; r > l; l++)
                      if (!(!(i = n[l]).selected && l !== s || (h.optDisabled ? i.disabled : null !== i.getAttribute("disabled")) || i.parentNode.disabled && p.nodeName(i.parentNode, "optgroup"))) {
                          if (e = p(i).val(), o) return e;
                          a.push(e)
                      }
                  return a
              },
              set: function(t, e) {
                  for (var i, n, s = t.options, o = p.makeArray(e), a = s.length; a--;)((n = s[a]).selected = p.inArray(n.value, o) >= 0) && (i = !0);
                  return i || (t.selectedIndex = -1), o
              }
          }
      }
  }), p.each(["radio", "checkbox"], function() {
      p.valHooks[this] = {
          set: function(t, e) {
              return p.isArray(e) ? t.checked = p.inArray(p(t).val(), e) >= 0 : void 0
          }
      }, h.checkOn || (p.valHooks[this].get = function(t) {
          return null === t.getAttribute("value") ? "on" : t.value
      })
  }), p.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
      p.fn[e] = function(t, i) {
          return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e)
      }
  }), p.fn.extend({
      hover: function(t, e) {
          return this.mouseenter(t).mouseleave(e || t)
      },
      bind: function(t, e, i) {
          return this.on(t, null, e, i)
      },
      unbind: function(t, e) {
          return this.off(t, null, e)
      },
      delegate: function(t, e, i, n) {
          return this.on(e, t, i, n)
      },
      undelegate: function(t, e, i) {
          return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
      }
  });
  var Qt = p.now(),
      Zt = /\?/;
  p.parseJSON = function(t) {
      return JSON.parse(t + "")
  }, p.parseXML = function(t) {
      var e;
      if (!t || "string" != typeof t) return null;
      try {
          e = (new DOMParser).parseFromString(t, "text/xml")
      } catch (t) {
          e = void 0
      }
      return (!e || e.getElementsByTagName("parsererror").length) && p.error("Invalid XML: " + t), e
  };
  var Jt, te, ee = /#.*$/,
      ie = /([?&])_=[^&]*/,
      ne = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      se = /^(?:GET|HEAD)$/,
      oe = /^\/\//,
      ae = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
      re = {},
      le = {},
      ce = "*/".concat("*");
  try {
      te = location.href
  } catch (t) {
      (te = u.createElement("a")).href = "", te = te.href
  }

  function he(t) {
      return function(e, i) {
          "string" != typeof e && (i = e, e = "*");
          var n, s = 0,
              o = e.toLowerCase().match(P) || [];
          if (p.isFunction(i))
              for (; n = o[s++];) "+" === n[0] ? (n = n.slice(1) || "*", (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i)
      }
  }

  function ue(t, e, i, n) {
      var s = {},
          o = t === le;

      function a(r) {
          var l;
          return s[r] = !0, p.each(t[r] || [], function(t, r) {
              var c = r(e, i, n);
              return "string" != typeof c || o || s[c] ? o ? !(l = c) : void 0 : (e.dataTypes.unshift(c), a(c), !1)
          }), l
      }
      return a(e.dataTypes[0]) || !s["*"] && a("*")
  }

  function de(t, e) {
      var i, n, s = p.ajaxSettings.flatOptions || {};
      for (i in e) void 0 !== e[i] && ((s[i] ? t : n || (n = {}))[i] = e[i]);
      return n && p.extend(!0, t, n), t
  }
  Jt = ae.exec(te.toLowerCase()) || [], p.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
          url: te,
          type: "GET",
          isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Jt[1]),
          global: !0,
          processData: !0,
          async: !0,
          contentType: "application/x-www-form-urlencoded; charset=UTF-8",
          accepts: {
              "*": ce,
              text: "text/plain",
              html: "text/html",
              xml: "application/xml, text/xml",
              json: "application/json, text/javascript"
          },
          contents: {
              xml: /xml/,
              html: /html/,
              json: /json/
          },
          responseFields: {
              xml: "responseXML",
              text: "responseText",
              json: "responseJSON"
          },
          converters: {
              "* text": String,
              "text html": !0,
              "text json": p.parseJSON,
              "text xml": p.parseXML
          },
          flatOptions: {
              url: !0,
              context: !0
          }
      },
      ajaxSetup: function(t, e) {
          return e ? de(de(t, p.ajaxSettings), e) : de(p.ajaxSettings, t)
      },
      ajaxPrefilter: he(re),
      ajaxTransport: he(le),
      ajax: function(t, e) {
          "object" == typeof t && (e = t, t = void 0), e = e || {};
          var i, n, s, o, a, r, l, c, h = p.ajaxSetup({}, e),
              u = h.context || h,
              d = h.context && (u.nodeType || u.jquery) ? p(u) : p.event,
              f = p.Deferred(),
              m = p.Callbacks("once memory"),
              g = h.statusCode || {},
              v = {},
              y = {},
              b = 0,
              _ = "canceled",
              w = {
                  readyState: 0,
                  getResponseHeader: function(t) {
                      var e;
                      if (2 === b) {
                          if (!o)
                              for (o = {}; e = ne.exec(s);) o[e[1].toLowerCase()] = e[2];
                          e = o[t.toLowerCase()]
                      }
                      return null == e ? null : e
                  },
                  getAllResponseHeaders: function() {
                      return 2 === b ? s : null
                  },
                  setRequestHeader: function(t, e) {
                      var i = t.toLowerCase();
                      return b || (t = y[i] = y[i] || t, v[t] = e), this
                  },
                  overrideMimeType: function(t) {
                      return b || (h.mimeType = t), this
                  },
                  statusCode: function(t) {
                      var e;
                      if (t)
                          if (2 > b)
                              for (e in t) g[e] = [g[e], t[e]];
                          else w.always(t[w.status]);
                      return this
                  },
                  abort: function(t) {
                      var e = t || _;
                      return i && i.abort(e), x(0, e), this
                  }
              };
          if (f.promise(w).complete = m.add, w.success = w.done, w.error = w.fail, h.url = ((t || h.url || te) + "").replace(ee, "").replace(oe, Jt[1] + "//"), h.type = e.method || e.type || h.method || h.type, h.dataTypes = p.trim(h.dataType || "*").toLowerCase().match(P) || [""], null == h.crossDomain && (r = ae.exec(h.url.toLowerCase()), h.crossDomain = !(!r || r[1] === Jt[1] && r[2] === Jt[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (Jt[3] || ("http:" === Jt[1] ? "80" : "443")))), h.data && h.processData && "string" != typeof h.data && (h.data = p.param(h.data, h.traditional)), ue(re, h, e, w), 2 === b) return w;
          for (c in (l = h.global) && 0 == p.active++ && p.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !se.test(h.type), n = h.url, h.hasContent || (h.data && (n = h.url += (Zt.test(n) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (h.url = ie.test(n) ? n.replace(ie, "$1_=" + Qt++) : n + (Zt.test(n) ? "&" : "?") + "_=" + Qt++)), h.ifModified && (p.lastModified[n] && w.setRequestHeader("If-Modified-Since", p.lastModified[n]), p.etag[n] && w.setRequestHeader("If-None-Match", p.etag[n])), (h.data && h.hasContent && !1 !== h.contentType || e.contentType) && w.setRequestHeader("Content-Type", h.contentType), w.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + ce + "; q=0.01" : "") : h.accepts["*"]), h.headers) w.setRequestHeader(c, h.headers[c]);
          if (h.beforeSend && (!1 === h.beforeSend.call(u, w, h) || 2 === b)) return w.abort();
          for (c in _ = "abort", {
                  success: 1,
                  error: 1,
                  complete: 1
              }) w[c](h[c]);
          if (i = ue(le, h, e, w)) {
              w.readyState = 1, l && d.trigger("ajaxSend", [w, h]), h.async && h.timeout > 0 && (a = setTimeout(function() {
                  w.abort("timeout")
              }, h.timeout));
              try {
                  b = 1, i.send(v, x)
              } catch (t) {
                  if (!(2 > b)) throw t;
                  x(-1, t)
              }
          } else x(-1, "No Transport");

          function x(t, e, o, r) {
              var c, v, y, _, x, C = e;
              2 !== b && (b = 2, a && clearTimeout(a), i = void 0, s = r || "", w.readyState = t > 0 ? 4 : 0, c = t >= 200 && 300 > t || 304 === t, o && (_ = function(t, e, i) {
                  for (var n, s, o, a, r = t.contents, l = t.dataTypes;
                      "*" === l[0];) l.shift(), void 0 === n && (n = t.mimeType || e.getResponseHeader("Content-Type"));
                  if (n)
                      for (s in r)
                          if (r[s] && r[s].test(n)) {
                              l.unshift(s);
                              break
                          }
                  if (l[0] in i) o = l[0];
                  else {
                      for (s in i) {
                          if (!l[0] || t.converters[s + " " + l[0]]) {
                              o = s;
                              break
                          }
                          a || (a = s)
                      }
                      o = o || a
                  }
                  return o ? (o !== l[0] && l.unshift(o), i[o]) : void 0
              }(h, w, o)), _ = function(t, e, i, n) {
                  var s, o, a, r, l, c = {},
                      h = t.dataTypes.slice();
                  if (h[1])
                      for (a in t.converters) c[a.toLowerCase()] = t.converters[a];
                  for (o = h.shift(); o;)
                      if (t.responseFields[o] && (i[t.responseFields[o]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = h.shift())
                          if ("*" === o) o = l;
                          else if ("*" !== l && l !== o) {
                      if (!(a = c[l + " " + o] || c["* " + o]))
                          for (s in c)
                              if ((r = s.split(" "))[1] === o && (a = c[l + " " + r[0]] || c["* " + r[0]])) {
                                  !0 === a ? a = c[s] : !0 !== c[s] && (o = r[0], h.unshift(r[1]));
                                  break
                              }
                      if (!0 !== a)
                          if (a && t.throws) e = a(e);
                          else try {
                              e = a(e)
                          } catch (t) {
                              return {
                                  state: "parsererror",
                                  error: a ? t : "No conversion from " + l + " to " + o
                              }
                          }
                  }
                  return {
                      state: "success",
                      data: e
                  }
              }(h, _, w, c), c ? (h.ifModified && ((x = w.getResponseHeader("Last-Modified")) && (p.lastModified[n] = x), (x = w.getResponseHeader("etag")) && (p.etag[n] = x)), 204 === t || "HEAD" === h.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = _.state, v = _.data, c = !(y = _.error))) : (y = C, (t || !C) && (C = "error", 0 > t && (t = 0))), w.status = t, w.statusText = (e || C) + "", c ? f.resolveWith(u, [v, C, w]) : f.rejectWith(u, [w, C, y]), w.statusCode(g), g = void 0, l && d.trigger(c ? "ajaxSuccess" : "ajaxError", [w, h, c ? v : y]), m.fireWith(u, [w, C]), l && (d.trigger("ajaxComplete", [w, h]), --p.active || p.event.trigger("ajaxStop")))
          }
          return w
      },
      getJSON: function(t, e, i) {
          return p.get(t, e, i, "json")
      },
      getScript: function(t, e) {
          return p.get(t, void 0, e, "script")
      }
  }), p.each(["get", "post"], function(t, e) {
      p[e] = function(t, i, n, s) {
          return p.isFunction(i) && (s = s || n, n = i, i = void 0), p.ajax({
              url: t,
              type: e,
              dataType: s,
              data: i,
              success: n
          })
      }
  }), p.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
      p.fn[e] = function(t) {
          return this.on(e, t)
      }
  }), p._evalUrl = function(t) {
      return p.ajax({
          url: t,
          type: "GET",
          dataType: "script",
          async: !1,
          global: !1,
          throws: !0
      })
  }, p.fn.extend({
      wrapAll: function(t) {
          var e;
          return p.isFunction(t) ? this.each(function(e) {
              p(this).wrapAll(t.call(this, e))
          }) : (this[0] && (e = p(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
              for (var t = this; t.firstElementChild;) t = t.firstElementChild;
              return t
          }).append(this)), this)
      },
      wrapInner: function(t) {
          return this.each(p.isFunction(t) ? function(e) {
              p(this).wrapInner(t.call(this, e))
          } : function() {
              var e = p(this),
                  i = e.contents();
              i.length ? i.wrapAll(t) : e.append(t)
          })
      },
      wrap: function(t) {
          var e = p.isFunction(t);
          return this.each(function(i) {
              p(this).wrapAll(e ? t.call(this, i) : t)
          })
      },
      unwrap: function() {
          return this.parent().each(function() {
              p.nodeName(this, "body") || p(this).replaceWith(this.childNodes)
          }).end()
      }
  }), p.expr.filters.hidden = function(t) {
      return t.offsetWidth <= 0 && t.offsetHeight <= 0
  }, p.expr.filters.visible = function(t) {
      return !p.expr.filters.hidden(t)
  };
  var pe = /%20/g,
      fe = /\[\]$/,
      me = /\r?\n/g,
      ge = /^(?:submit|button|image|reset|file)$/i,
      ve = /^(?:input|select|textarea|keygen)/i;

  function ye(t, e, i, n) {
      var s;
      if (p.isArray(e)) p.each(e, function(e, s) {
          i || fe.test(t) ? n(t, s) : ye(t + "[" + ("object" == typeof s ? e : "") + "]", s, i, n)
      });
      else if (i || "object" !== p.type(e)) n(t, e);
      else
          for (s in e) ye(t + "[" + s + "]", e[s], i, n)
  }
  p.param = function(t, e) {
      var i, n = [],
          s = function(t, e) {
              e = p.isFunction(e) ? e() : null == e ? "" : e, n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
          };
      if (void 0 === e && (e = p.ajaxSettings && p.ajaxSettings.traditional), p.isArray(t) || t.jquery && !p.isPlainObject(t)) p.each(t, function() {
          s(this.name, this.value)
      });
      else
          for (i in t) ye(i, t[i], e, s);
      return n.join("&").replace(pe, "+")
  }, p.fn.extend({
      serialize: function() {
          return p.param(this.serializeArray())
      },
      serializeArray: function() {
          return this.map(function() {
              var t = p.prop(this, "elements");
              return t ? p.makeArray(t) : this
          }).filter(function() {
              var t = this.type;
              return this.name && !p(this).is(":disabled") && ve.test(this.nodeName) && !ge.test(t) && (this.checked || !B.test(t))
          }).map(function(t, e) {
              var i = p(this).val();
              return null == i ? null : p.isArray(i) ? p.map(i, function(t) {
                  return {
                      name: e.name,
                      value: t.replace(me, "\r\n")
                  }
              }) : {
                  name: e.name,
                  value: i.replace(me, "\r\n")
              }
          }).get()
      }
  }), p.ajaxSettings.xhr = function() {
      try {
          return new XMLHttpRequest
      } catch (t) {}
  };
  var be = 0,
      _e = {},
      we = {
          0: 200,
          1223: 204
      },
      xe = p.ajaxSettings.xhr();
  t.ActiveXObject && p(t).on("unload", function() {
      for (var t in _e) _e[t]()
  }), h.cors = !!xe && "withCredentials" in xe, h.ajax = xe = !!xe, p.ajaxTransport(function(t) {
      var e;
      return h.cors || xe && !t.crossDomain ? {
          send: function(i, n) {
              var s, o = t.xhr(),
                  a = ++be;
              if (o.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                  for (s in t.xhrFields) o[s] = t.xhrFields[s];
              for (s in t.mimeType && o.overrideMimeType && o.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"), i) o.setRequestHeader(s, i[s]);
              e = function(t) {
                  return function() {
                      e && (delete _e[a], e = o.onload = o.onerror = null, "abort" === t ? o.abort() : "error" === t ? n(o.status, o.statusText) : n(we[o.status] || o.status, o.statusText, "string" == typeof o.responseText ? {
                          text: o.responseText
                      } : void 0, o.getAllResponseHeaders()))
                  }
              }, o.onload = e(), o.onerror = e("error"), e = _e[a] = e("abort");
              try {
                  o.send(t.hasContent && t.data || null)
              } catch (t) {
                  if (e) throw t
              }
          },
          abort: function() {
              e && e()
          }
      } : void 0
  }), p.ajaxSetup({
      accepts: {
          script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
      },
      contents: {
          script: /(?:java|ecma)script/
      },
      converters: {
          "text script": function(t) {
              return p.globalEval(t), t
          }
      }
  }), p.ajaxPrefilter("script", function(t) {
      void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
  }), p.ajaxTransport("script", function(t) {
      var e, i;
      if (t.crossDomain) return {
          send: function(n, s) {
              e = p("<script>").prop({
                  async: !0,
                  charset: t.scriptCharset,
                  src: t.url
              }).on("load error", i = function(t) {
                  e.remove(), i = null, t && s("error" === t.type ? 404 : 200, t.type)
              }), u.head.appendChild(e[0])
          },
          abort: function() {
              i && i()
          }
      }
  });
  var Ce = [],
      ke = /(=)\?(?=&|$)|\?\?/;
  p.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function() {
          var t = Ce.pop() || p.expando + "_" + Qt++;
          return this[t] = !0, t
      }
  }), p.ajaxPrefilter("json jsonp", function(e, i, n) {
      var s, o, a, r = !1 !== e.jsonp && (ke.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && ke.test(e.data) && "data");
      return r || "jsonp" === e.dataTypes[0] ? (s = e.jsonpCallback = p.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, r ? e[r] = e[r].replace(ke, "$1" + s) : !1 !== e.jsonp && (e.url += (Zt.test(e.url) ? "&" : "?") + e.jsonp + "=" + s), e.converters["script json"] = function() {
          return a || p.error(s + " was not called"), a[0]
      }, e.dataTypes[0] = "json", o = t[s], t[s] = function() {
          a = arguments
      }, n.always(function() {
          t[s] = o, e[s] && (e.jsonpCallback = i.jsonpCallback, Ce.push(s)), a && p.isFunction(o) && o(a[0]), a = o = void 0
      }), "script") : void 0
  }), p.parseHTML = function(t, e, i) {
      if (!t || "string" != typeof t) return null;
      "boolean" == typeof e && (i = e, e = !1), e = e || u;
      var n = w.exec(t),
          s = !i && [];
      return n ? [e.createElement(n[1])] : (n = p.buildFragment([t], e, s), s && s.length && p(s).remove(), p.merge([], n.childNodes))
  };
  var Se = p.fn.load;
  p.fn.load = function(t, e, i) {
      if ("string" != typeof t && Se) return Se.apply(this, arguments);
      var n, s, o, a = this,
          r = t.indexOf(" ");
      return r >= 0 && (n = p.trim(t.slice(r)), t = t.slice(0, r)), p.isFunction(e) ? (i = e, e = void 0) : e && "object" == typeof e && (s = "POST"), a.length > 0 && p.ajax({
          url: t,
          type: s,
          dataType: "html",
          data: e
      }).done(function(t) {
          o = arguments, a.html(n ? p("<div>").append(p.parseHTML(t)).find(n) : t)
      }).complete(i && function(t, e) {
          a.each(i, o || [t.responseText, e, t])
      }), this
  }, p.expr.filters.animated = function(t) {
      return p.grep(p.timers, function(e) {
          return t === e.elem
      }).length
  };
  var Te = t.document.documentElement;

  function De(t) {
      return p.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
  }
  p.offset = {
      setOffset: function(t, e, i) {
          var n, s, o, a, r, l, c = p.css(t, "position"),
              h = p(t),
              u = {};
          "static" === c && (t.style.position = "relative"), r = h.offset(), o = p.css(t, "top"), l = p.css(t, "left"), ("absolute" === c || "fixed" === c) && (o + l).indexOf("auto") > -1 ? (a = (n = h.position()).top, s = n.left) : (a = parseFloat(o) || 0, s = parseFloat(l) || 0), p.isFunction(e) && (e = e.call(t, i, r)), null != e.top && (u.top = e.top - r.top + a), null != e.left && (u.left = e.left - r.left + s), "using" in e ? e.using.call(t, u) : h.css(u)
      }
  }, p.fn.extend({
      offset: function(t) {
          if (arguments.length) return void 0 === t ? this : this.each(function(e) {
              p.offset.setOffset(this, t, e)
          });
          var e, i, n = this[0],
              s = {
                  top: 0,
                  left: 0
              },
              o = n && n.ownerDocument;
          return o ? (e = o.documentElement, p.contains(e, n) ? (typeof n.getBoundingClientRect !== Y && (s = n.getBoundingClientRect()), i = De(o), {
              top: s.top + i.pageYOffset - e.clientTop,
              left: s.left + i.pageXOffset - e.clientLeft
          }) : s) : void 0
      },
      position: function() {
          if (this[0]) {
              var t, e, i = this[0],
                  n = {
                      top: 0,
                      left: 0
                  };
              return "fixed" === p.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), p.nodeName(t[0], "html") || (n = t.offset()), n.top += p.css(t[0], "borderTopWidth", !0), n.left += p.css(t[0], "borderLeftWidth", !0)), {
                  top: e.top - n.top - p.css(i, "marginTop", !0),
                  left: e.left - n.left - p.css(i, "marginLeft", !0)
              }
          }
      },
      offsetParent: function() {
          return this.map(function() {
              for (var t = this.offsetParent || Te; t && !p.nodeName(t, "html") && "static" === p.css(t, "position");) t = t.offsetParent;
              return t || Te
          })
      }
  }), p.each({
      scrollLeft: "pageXOffset",
      scrollTop: "pageYOffset"
  }, function(e, i) {
      var n = "pageYOffset" === i;
      p.fn[e] = function(s) {
          return A(this, function(e, s, o) {
              var a = De(e);
              return void 0 === o ? a ? a[i] : e[s] : void(a ? a.scrollTo(n ? t.pageXOffset : o, n ? o : t.pageYOffset) : e[s] = o)
          }, e, s, arguments.length, null)
      }
  }), p.each(["top", "left"], function(t, e) {
      p.cssHooks[e] = xt(h.pixelPosition, function(t, i) {
          return i ? (i = wt(t, e), bt.test(i) ? p(t).position()[e] + "px" : i) : void 0
      })
  }), p.each({
      Height: "height",
      Width: "width"
  }, function(t, e) {
      p.each({
          padding: "inner" + t,
          content: e,
          "": "outer" + t
      }, function(i, n) {
          p.fn[n] = function(n, s) {
              var o = arguments.length && (i || "boolean" != typeof n),
                  a = i || (!0 === n || !0 === s ? "margin" : "border");
              return A(this, function(e, i, n) {
                  var s;
                  return p.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (s = e.documentElement, Math.max(e.body["scroll" + t], s["scroll" + t], e.body["offset" + t], s["offset" + t], s["client" + t])) : void 0 === n ? p.css(e, i, a) : p.style(e, i, n, a)
              }, e, o ? n : void 0, o, null)
          }
      })
  }), p.fn.size = function() {
      return this.length
  }, p.fn.andSelf = p.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
      return p
  });
  var Me = t.jQuery,
      Ie = t.$;
  return p.noConflict = function(e) {
      return t.$ === p && (t.$ = Ie), e && t.jQuery === p && (t.jQuery = Me), p
  }, typeof e === Y && (t.jQuery = t.$ = p), p
}), function(t, e) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.moment = e()
}(this, function() {
  "use strict";

  function t() {
      return Kt.apply(null, arguments)
  }

  function e(t) {
      return t instanceof Array || "[object Array]" === Object.prototype.toString.call(t)
  }

  function i(t) {
      return null != t && "[object Object]" === Object.prototype.toString.call(t)
  }

  function n(t) {
      return void 0 === t
  }

  function s(t) {
      return "number" == typeof t || "[object Number]" === Object.prototype.toString.call(t)
  }

  function o(t) {
      return t instanceof Date || "[object Date]" === Object.prototype.toString.call(t)
  }

  function a(t, e) {
      var i, n = [];
      for (i = 0; i < t.length; ++i) n.push(e(t[i], i));
      return n
  }

  function r(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e)
  }

  function l(t, e) {
      for (var i in e) r(e, i) && (t[i] = e[i]);
      return r(e, "toString") && (t.toString = e.toString), r(e, "valueOf") && (t.valueOf = e.valueOf), t
  }

  function c(t, e, i, n) {
      return yt(t, e, i, n, !0).utc()
  }

  function h(t) {
      return null == t._pf && (t._pf = {
          empty: !1,
          unusedTokens: [],
          unusedInput: [],
          overflow: -2,
          charsLeftOver: 0,
          nullInput: !1,
          invalidMonth: null,
          invalidFormat: !1,
          userInvalidated: !1,
          iso: !1,
          parsedDateParts: [],
          meridiem: null,
          rfc2822: !1,
          weekdayMismatch: !1
      }), t._pf
  }

  function u(t) {
      if (null == t._isValid) {
          var e = h(t),
              i = Qt.call(e.parsedDateParts, function(t) {
                  return null != t
              }),
              n = !isNaN(t._d.getTime()) && e.overflow < 0 && !e.empty && !e.invalidMonth && !e.invalidWeekday && !e.nullInput && !e.invalidFormat && !e.userInvalidated && (!e.meridiem || e.meridiem && i);
          if (t._strict && (n = n && 0 === e.charsLeftOver && 0 === e.unusedTokens.length && void 0 === e.bigHour), null != Object.isFrozen && Object.isFrozen(t)) return n;
          t._isValid = n
      }
      return t._isValid
  }

  function d(t) {
      var e = c(NaN);
      return null != t ? l(h(e), t) : h(e).userInvalidated = !0, e
  }

  function p(t, e) {
      var i, s, o;
      if (n(e._isAMomentObject) || (t._isAMomentObject = e._isAMomentObject), n(e._i) || (t._i = e._i), n(e._f) || (t._f = e._f), n(e._l) || (t._l = e._l), n(e._strict) || (t._strict = e._strict), n(e._tzm) || (t._tzm = e._tzm), n(e._isUTC) || (t._isUTC = e._isUTC), n(e._offset) || (t._offset = e._offset), n(e._pf) || (t._pf = h(e)), n(e._locale) || (t._locale = e._locale), Zt.length > 0)
          for (i = 0; i < Zt.length; i++) n(o = e[s = Zt[i]]) || (t[s] = o);
      return t
  }

  function f(e) {
      p(this, e), this._d = new Date(null != e._d ? e._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === Jt && (Jt = !0, t.updateOffset(this), Jt = !1)
  }

  function m(t) {
      return t instanceof f || null != t && null != t._isAMomentObject
  }

  function g(t) {
      return t < 0 ? Math.ceil(t) || 0 : Math.floor(t)
  }

  function v(t) {
      var e = +t,
          i = 0;
      return 0 !== e && isFinite(e) && (i = g(e)), i
  }

  function y(t, e, i) {
      var n, s = Math.min(t.length, e.length),
          o = Math.abs(t.length - e.length),
          a = 0;
      for (n = 0; n < s; n++)(i && t[n] !== e[n] || !i && v(t[n]) !== v(e[n])) && a++;
      return a + o
  }

  function b(e) {
      !1 === t.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e)
  }

  function _(e, i) {
      var n = !0;
      return l(function() {
          if (null != t.deprecationHandler && t.deprecationHandler(null, e), n) {
              for (var s, o = [], a = 0; a < arguments.length; a++) {
                  if (s = "", "object" == typeof arguments[a]) {
                      for (var r in s += "\n[" + a + "] ", arguments[0]) s += r + ": " + arguments[0][r] + ", ";
                      s = s.slice(0, -2)
                  } else s = arguments[a];
                  o.push(s)
              }
              b(e + "\nArguments: " + Array.prototype.slice.call(o).join("") + "\n" + (new Error).stack), n = !1
          }
          return i.apply(this, arguments)
      }, i)
  }

  function w(e, i) {
      null != t.deprecationHandler && t.deprecationHandler(e, i), te[e] || (b(i), te[e] = !0)
  }

  function x(t) {
      return t instanceof Function || "[object Function]" === Object.prototype.toString.call(t)
  }

  function C(t, e) {
      var n, s = l({}, t);
      for (n in e) r(e, n) && (i(t[n]) && i(e[n]) ? (s[n] = {}, l(s[n], t[n]), l(s[n], e[n])) : null != e[n] ? s[n] = e[n] : delete s[n]);
      for (n in t) r(t, n) && !r(e, n) && i(t[n]) && (s[n] = l({}, s[n]));
      return s
  }

  function k(t) {
      null != t && this.set(t)
  }

  function S(t, e) {
      var i = t.toLowerCase();
      ie[i] = ie[i + "s"] = ie[e] = t
  }

  function T(t) {
      return "string" == typeof t ? ie[t] || ie[t.toLowerCase()] : void 0
  }

  function D(t) {
      var e, i, n = {};
      for (i in t) r(t, i) && ((e = T(i)) && (n[e] = t[i]));
      return n
  }

  function M(t, e) {
      ne[t] = e
  }

  function I(e, i) {
      return function(n) {
          return null != n ? ($(this, e, n), t.updateOffset(this, i), this) : P(this, e)
      }
  }

  function P(t, e) {
      return t.isValid() ? t._d["get" + (t._isUTC ? "UTC" : "") + e]() : NaN
  }

  function $(t, e, i) {
      t.isValid() && t._d["set" + (t._isUTC ? "UTC" : "") + e](i)
  }

  function E(t, e, i) {
      var n = "" + Math.abs(t),
          s = e - n.length;
      return (t >= 0 ? i ? "+" : "" : "-") + Math.pow(10, Math.max(0, s)).toString().substr(1) + n
  }

  function A(t, e, i, n) {
      var s = n;
      "string" == typeof n && (s = function() {
          return this[n]()
      }), t && (re[t] = s), e && (re[e[0]] = function() {
          return E(s.apply(this, arguments), e[1], e[2])
      }), i && (re[i] = function() {
          return this.localeData().ordinal(s.apply(this, arguments), t)
      })
  }

  function F(t) {
      return t.match(/\[[\s\S]/) ? t.replace(/^\[|\]$/g, "") : t.replace(/\\/g, "")
  }

  function O(t, e) {
      return t.isValid() ? (e = N(e, t.localeData()), ae[e] = ae[e] || function(t) {
          var e, i, n = t.match(se);
          for (e = 0, i = n.length; e < i; e++) re[n[e]] ? n[e] = re[n[e]] : n[e] = F(n[e]);
          return function(e) {
              var s, o = "";
              for (s = 0; s < i; s++) o += x(n[s]) ? n[s].call(e, t) : n[s];
              return o
          }
      }(e), ae[e](t)) : t.localeData().invalidDate()
  }

  function N(t, e) {
      function i(t) {
          return e.longDateFormat(t) || t
      }
      var n = 5;
      for (oe.lastIndex = 0; n >= 0 && oe.test(t);) t = t.replace(oe, i), oe.lastIndex = 0, n -= 1;
      return t
  }

  function L(t, e, i) {
      ke[t] = x(e) ? e : function(t, n) {
          return t && i ? i : e
      }
  }

  function H(t, e) {
      return r(ke, t) ? ke[t](e._strict, e._locale) : new RegExp(function(t) {
          return z(t.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(t, e, i, n, s) {
              return e || i || n || s
          }))
      }(t))
  }

  function z(t) {
      return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
  }

  function R(t, e) {
      var i, n = e;
      for ("string" == typeof t && (t = [t]), s(e) && (n = function(t, i) {
              i[e] = v(t)
          }), i = 0; i < t.length; i++) Se[t[i]] = n
  }

  function W(t, e) {
      R(t, function(t, i, n, s) {
          n._w = n._w || {}, e(t, n._w, n, s)
      })
  }

  function j(t, e, i) {
      null != e && r(Se, t) && Se[t](e, i._a, i, t)
  }

  function B(t, e) {
      return new Date(Date.UTC(t, e + 1, 0)).getUTCDate()
  }

  function Y(t, e) {
      var i;
      if (!t.isValid()) return t;
      if ("string" == typeof e)
          if (/^\d+$/.test(e)) e = v(e);
          else if (!s(e = t.localeData().monthsParse(e))) return t;
      return i = Math.min(t.date(), B(t.year(), e)), t._d["set" + (t._isUTC ? "UTC" : "") + "Month"](e, i), t
  }

  function q(e) {
      return null != e ? (Y(this, e), t.updateOffset(this, !0), this) : P(this, "Month")
  }

  function U() {
      function t(t, e) {
          return e.length - t.length
      }
      var e, i, n = [],
          s = [],
          o = [];
      for (e = 0; e < 12; e++) i = c([2e3, e]), n.push(this.monthsShort(i, "")), s.push(this.months(i, "")), o.push(this.months(i, "")), o.push(this.monthsShort(i, ""));
      for (n.sort(t), s.sort(t), o.sort(t), e = 0; e < 12; e++) n[e] = z(n[e]), s[e] = z(s[e]);
      for (e = 0; e < 24; e++) o[e] = z(o[e]);
      this._monthsRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + n.join("|") + ")", "i")
  }

  function V(t) {
      return X(t) ? 366 : 365
  }

  function X(t) {
      return t % 4 == 0 && t % 100 != 0 || t % 400 == 0
  }

  function G(t) {
      var e = new Date(Date.UTC.apply(null, arguments));
      return t < 100 && t >= 0 && isFinite(e.getUTCFullYear()) && e.setUTCFullYear(t), e
  }

  function K(t, e, i) {
      var n = 7 + e - i;
      return -((7 + G(t, 0, n).getUTCDay() - e) % 7) + n - 1
  }

  function Q(t, e, i, n, s) {
      var o, a, r = 1 + 7 * (e - 1) + (7 + i - n) % 7 + K(t, n, s);
      return r <= 0 ? a = V(o = t - 1) + r : r > V(t) ? (o = t + 1, a = r - V(t)) : (o = t, a = r), {
          year: o,
          dayOfYear: a
      }
  }

  function Z(t, e, i) {
      var n, s, o = K(t.year(), e, i),
          a = Math.floor((t.dayOfYear() - o - 1) / 7) + 1;
      return a < 1 ? n = a + J(s = t.year() - 1, e, i) : a > J(t.year(), e, i) ? (n = a - J(t.year(), e, i), s = t.year() + 1) : (s = t.year(), n = a), {
          week: n,
          year: s
      }
  }

  function J(t, e, i) {
      var n = K(t, e, i),
          s = K(t + 1, e, i);
      return (V(t) - n + s) / 7
  }

  function tt() {
      function t(t, e) {
          return e.length - t.length
      }
      var e, i, n, s, o, a = [],
          r = [],
          l = [],
          h = [];
      for (e = 0; e < 7; e++) i = c([2e3, 1]).day(e), n = this.weekdaysMin(i, ""), s = this.weekdaysShort(i, ""), o = this.weekdays(i, ""), a.push(n), r.push(s), l.push(o), h.push(n), h.push(s), h.push(o);
      for (a.sort(t), r.sort(t), l.sort(t), h.sort(t), e = 0; e < 7; e++) r[e] = z(r[e]), l[e] = z(l[e]), h[e] = z(h[e]);
      this._weekdaysRegex = new RegExp("^(" + h.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + l.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + a.join("|") + ")", "i")
  }

  function et() {
      return this.hours() % 12 || 12
  }

  function it(t, e) {
      A(t, 0, 0, function() {
          return this.localeData().meridiem(this.hours(), this.minutes(), e)
      })
  }

  function nt(t, e) {
      return e._meridiemParse
  }

  function st(t) {
      return t ? t.toLowerCase().replace("_", "-") : t
  }

  function ot(t) {
      var e = null;
      if (!Qe[t] && "undefined" != typeof module && module && module.exports) try {
          e = Xe._abbr, require("./locale/" + t), at(e)
      } catch (t) {}
      return Qe[t]
  }

  function at(t, e) {
      var i;
      return t && ((i = n(e) ? lt(t) : rt(t, e)) && (Xe = i)), Xe._abbr
  }

  function rt(t, e) {
      if (null !== e) {
          var i = Ke;
          if (e.abbr = t, null != Qe[t]) w("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), i = Qe[t]._config;
          else if (null != e.parentLocale) {
              if (null == Qe[e.parentLocale]) return Ze[e.parentLocale] || (Ze[e.parentLocale] = []), Ze[e.parentLocale].push({
                  name: t,
                  config: e
              }), null;
              i = Qe[e.parentLocale]._config
          }
          return Qe[t] = new k(C(i, e)), Ze[t] && Ze[t].forEach(function(t) {
              rt(t.name, t.config)
          }), at(t), Qe[t]
      }
      return delete Qe[t], null
  }

  function lt(t) {
      var i;
      if (t && t._locale && t._locale._abbr && (t = t._locale._abbr), !t) return Xe;
      if (!e(t)) {
          if (i = ot(t)) return i;
          t = [t]
      }
      return function(t) {
          for (var e, i, n, s, o = 0; o < t.length;) {
              for (e = (s = st(t[o]).split("-")).length, i = (i = st(t[o + 1])) ? i.split("-") : null; e > 0;) {
                  if (n = ot(s.slice(0, e).join("-"))) return n;
                  if (i && i.length >= e && y(s, i, !0) >= e - 1) break;
                  e--
              }
              o++
          }
          return null
      }(t)
  }

  function ct(t) {
      var e, i = t._a;
      return i && -2 === h(t).overflow && (e = i[De] < 0 || i[De] > 11 ? De : i[Me] < 1 || i[Me] > B(i[Te], i[De]) ? Me : i[Ie] < 0 || i[Ie] > 24 || 24 === i[Ie] && (0 !== i[Pe] || 0 !== i[$e] || 0 !== i[Ee]) ? Ie : i[Pe] < 0 || i[Pe] > 59 ? Pe : i[$e] < 0 || i[$e] > 59 ? $e : i[Ee] < 0 || i[Ee] > 999 ? Ee : -1, h(t)._overflowDayOfYear && (e < Te || e > Me) && (e = Me), h(t)._overflowWeeks && -1 === e && (e = Ae), h(t)._overflowWeekday && -1 === e && (e = Fe), h(t).overflow = e), t
  }

  function ht(t) {
      var e, i, n, s, o, a, r = t._i,
          l = Je.exec(r) || ti.exec(r);
      if (l) {
          for (h(t).iso = !0, e = 0, i = ii.length; e < i; e++)
              if (ii[e][1].exec(l[1])) {
                  s = ii[e][0], n = !1 !== ii[e][2];
                  break
              }
          if (null == s) return void(t._isValid = !1);
          if (l[3]) {
              for (e = 0, i = ni.length; e < i; e++)
                  if (ni[e][1].exec(l[3])) {
                      o = (l[2] || " ") + ni[e][0];
                      break
                  }
              if (null == o) return void(t._isValid = !1)
          }
          if (!n && null != o) return void(t._isValid = !1);
          if (l[4]) {
              if (!ei.exec(l[4])) return void(t._isValid = !1);
              a = "Z"
          }
          t._f = s + (o || "") + (a || ""), mt(t)
      } else t._isValid = !1
  }

  function ut(t) {
      var e, i, n, s, o, a, r, l = {
          " GMT": " +0000",
          " EDT": " -0400",
          " EST": " -0500",
          " CDT": " -0500",
          " CST": " -0600",
          " MDT": " -0600",
          " MST": " -0700",
          " PDT": " -0700",
          " PST": " -0800"
      };
      if (e = t._i.replace(/\([^\)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s|\s$/g, ""), i = oi.exec(e)) {
          if (n = i[1] ? "ddd" + (5 === i[1].length ? ", " : " ") : "", s = "D MMM " + (i[2].length > 10 ? "YYYY " : "YY "), o = "HH:mm" + (i[4] ? ":ss" : ""), i[1]) {
              var c = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][new Date(i[2]).getDay()];
              if (i[1].substr(0, 3) !== c) return h(t).weekdayMismatch = !0, void(t._isValid = !1)
          }
          switch (i[5].length) {
              case 2:
                  0 === r ? a = " +0000" : a = ((r = "YXWVUTSRQPONZABCDEFGHIKLM".indexOf(i[5][1].toUpperCase()) - 12) < 0 ? " -" : " +") + ("" + r).replace(/^-?/, "0").match(/..$/)[0] + "00";
                  break;
              case 4:
                  a = l[i[5]];
                  break;
              default:
                  a = l[" GMT"]
          }
          i[5] = a, t._i = i.splice(1).join(""), " ZZ", t._f = n + s + o + " ZZ", mt(t), h(t).rfc2822 = !0
      } else t._isValid = !1
  }

  function dt(t, e, i) {
      return null != t ? t : null != e ? e : i
  }

  function pt(e) {
      var i = new Date(t.now());
      return e._useUTC ? [i.getUTCFullYear(), i.getUTCMonth(), i.getUTCDate()] : [i.getFullYear(), i.getMonth(), i.getDate()]
  }

  function ft(t) {
      var e, i, n, s, o = [];
      if (!t._d) {
          for (n = pt(t), t._w && null == t._a[Me] && null == t._a[De] && function(t) {
                  var e, i, n, s, o, a, r, l;
                  if (null != (e = t._w).GG || null != e.W || null != e.E) o = 1, a = 4, i = dt(e.GG, t._a[Te], Z(bt(), 1, 4).year), n = dt(e.W, 1), ((s = dt(e.E, 1)) < 1 || s > 7) && (l = !0);
                  else {
                      o = t._locale._week.dow, a = t._locale._week.doy;
                      var c = Z(bt(), o, a);
                      i = dt(e.gg, t._a[Te], c.year), n = dt(e.w, c.week), null != e.d ? ((s = e.d) < 0 || s > 6) && (l = !0) : null != e.e ? (s = e.e + o, (e.e < 0 || e.e > 6) && (l = !0)) : s = o
                  }
                  n < 1 || n > J(i, o, a) ? h(t)._overflowWeeks = !0 : null != l ? h(t)._overflowWeekday = !0 : (r = Q(i, n, s, o, a), t._a[Te] = r.year, t._dayOfYear = r.dayOfYear)
              }(t), null != t._dayOfYear && (s = dt(t._a[Te], n[Te]), (t._dayOfYear > V(s) || 0 === t._dayOfYear) && (h(t)._overflowDayOfYear = !0), i = G(s, 0, t._dayOfYear), t._a[De] = i.getUTCMonth(), t._a[Me] = i.getUTCDate()), e = 0; e < 3 && null == t._a[e]; ++e) t._a[e] = o[e] = n[e];
          for (; e < 7; e++) t._a[e] = o[e] = null == t._a[e] ? 2 === e ? 1 : 0 : t._a[e];
          24 === t._a[Ie] && 0 === t._a[Pe] && 0 === t._a[$e] && 0 === t._a[Ee] && (t._nextDay = !0, t._a[Ie] = 0), t._d = (t._useUTC ? G : function(t, e, i, n, s, o, a) {
              var r = new Date(t, e, i, n, s, o, a);
              return t < 100 && t >= 0 && isFinite(r.getFullYear()) && r.setFullYear(t), r
          }).apply(null, o), null != t._tzm && t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm), t._nextDay && (t._a[Ie] = 24)
      }
  }

  function mt(e) {
      if (e._f !== t.ISO_8601)
          if (e._f !== t.RFC_2822) {
              e._a = [], h(e).empty = !0;
              var i, n, s, o, a, r = "" + e._i,
                  l = r.length,
                  c = 0;
              for (s = N(e._f, e._locale).match(se) || [], i = 0; i < s.length; i++) o = s[i], (n = (r.match(H(o, e)) || [])[0]) && ((a = r.substr(0, r.indexOf(n))).length > 0 && h(e).unusedInput.push(a), r = r.slice(r.indexOf(n) + n.length), c += n.length), re[o] ? (n ? h(e).empty = !1 : h(e).unusedTokens.push(o), j(o, n, e)) : e._strict && !n && h(e).unusedTokens.push(o);
              h(e).charsLeftOver = l - c, r.length > 0 && h(e).unusedInput.push(r), e._a[Ie] <= 12 && !0 === h(e).bigHour && e._a[Ie] > 0 && (h(e).bigHour = void 0), h(e).parsedDateParts = e._a.slice(0), h(e).meridiem = e._meridiem, e._a[Ie] = function(t, e, i) {
                  var n;
                  return null == i ? e : null != t.meridiemHour ? t.meridiemHour(e, i) : null != t.isPM ? ((n = t.isPM(i)) && e < 12 && (e += 12), n || 12 !== e || (e = 0), e) : e
              }(e._locale, e._a[Ie], e._meridiem), ft(e), ct(e)
          } else ut(e);
      else ht(e)
  }

  function gt(t) {
      var i = t._i,
          n = t._f;
      return t._locale = t._locale || lt(t._l), null === i || void 0 === n && "" === i ? d({
          nullInput: !0
      }) : ("string" == typeof i && (t._i = i = t._locale.preparse(i)), m(i) ? new f(ct(i)) : (o(i) ? t._d = i : e(n) ? function(t) {
          var e, i, n, s, o;
          if (0 === t._f.length) return h(t).invalidFormat = !0, void(t._d = new Date(NaN));
          for (s = 0; s < t._f.length; s++) o = 0, e = p({}, t), null != t._useUTC && (e._useUTC = t._useUTC), e._f = t._f[s], mt(e), u(e) && (o += h(e).charsLeftOver, o += 10 * h(e).unusedTokens.length, h(e).score = o, (null == n || o < n) && (n = o, i = e));
          l(t, i || e)
      }(t) : n ? mt(t) : vt(t), u(t) || (t._d = null), t))
  }

  function vt(r) {
      var l = r._i;
      n(l) ? r._d = new Date(t.now()) : o(l) ? r._d = new Date(l.valueOf()) : "string" == typeof l ? function(e) {
          var i = si.exec(e._i);
          null !== i ? e._d = new Date(+i[1]) : (ht(e), !1 === e._isValid && (delete e._isValid, ut(e), !1 === e._isValid && (delete e._isValid, t.createFromInputFallback(e))))
      }(r) : e(l) ? (r._a = a(l.slice(0), function(t) {
          return parseInt(t, 10)
      }), ft(r)) : i(l) ? function(t) {
          if (!t._d) {
              var e = D(t._i);
              t._a = a([e.year, e.month, e.day || e.date, e.hour, e.minute, e.second, e.millisecond], function(t) {
                  return t && parseInt(t, 10)
              }), ft(t)
          }
      }(r) : s(l) ? r._d = new Date(l) : t.createFromInputFallback(r)
  }

  function yt(t, n, s, o, a) {
      var r = {};
      return !0 !== s && !1 !== s || (o = s, s = void 0), (i(t) && function(t) {
              var e;
              for (e in t) return !1;
              return !0
          }(t) || e(t) && 0 === t.length) && (t = void 0), r._isAMomentObject = !0, r._useUTC = r._isUTC = a, r._l = s, r._i = t, r._f = n, r._strict = o,
          function(t) {
              var e = new f(ct(gt(t)));
              return e._nextDay && (e.add(1, "d"), e._nextDay = void 0), e
          }(r)
  }

  function bt(t, e, i, n) {
      return yt(t, e, i, n, !1)
  }

  function _t(t, i) {
      var n, s;
      if (1 === i.length && e(i[0]) && (i = i[0]), !i.length) return bt();
      for (n = i[0], s = 1; s < i.length; ++s) i[s].isValid() && !i[s][t](n) || (n = i[s]);
      return n
  }

  function wt(t) {
      var e = D(t),
          i = e.year || 0,
          n = e.quarter || 0,
          s = e.month || 0,
          o = e.week || 0,
          a = e.day || 0,
          r = e.hour || 0,
          l = e.minute || 0,
          c = e.second || 0,
          h = e.millisecond || 0;
      this._isValid = function(t) {
          for (var e in t)
              if (-1 === li.indexOf(e) || null != t[e] && isNaN(t[e])) return !1;
          for (var i = !1, n = 0; n < li.length; ++n)
              if (t[li[n]]) {
                  if (i) return !1;
                  parseFloat(t[li[n]]) !== v(t[li[n]]) && (i = !0)
              }
          return !0
      }(e), this._milliseconds = +h + 1e3 * c + 6e4 * l + 1e3 * r * 60 * 60, this._days = +a + 7 * o, this._months = +s + 3 * n + 12 * i, this._data = {}, this._locale = lt(), this._bubble()
  }

  function xt(t) {
      return t instanceof wt
  }

  function Ct(t) {
      return t < 0 ? -1 * Math.round(-1 * t) : Math.round(t)
  }

  function kt(t, e) {
      A(t, 0, 0, function() {
          var t = this.utcOffset(),
              i = "+";
          return t < 0 && (t = -t, i = "-"), i + E(~~(t / 60), 2) + e + E(~~t % 60, 2)
      })
  }

  function St(t, e) {
      var i = (e || "").match(t);
      if (null === i) return null;
      var n = ((i[i.length - 1] || []) + "").match(ci) || ["-", 0, 0],
          s = 60 * n[1] + v(n[2]);
      return 0 === s ? 0 : "+" === n[0] ? s : -s
  }

  function Tt(e, i) {
      var n, s;
      return i._isUTC ? (n = i.clone(), s = (m(e) || o(e) ? e.valueOf() : bt(e).valueOf()) - n.valueOf(), n._d.setTime(n._d.valueOf() + s), t.updateOffset(n, !1), n) : bt(e).local()
  }

  function Dt(t) {
      return 15 * -Math.round(t._d.getTimezoneOffset() / 15)
  }

  function Mt() {
      return !!this.isValid() && this._isUTC && 0 === this._offset
  }

  function It(t, e) {
      var i, n, o, a = t,
          l = null;
      return xt(t) ? a = {
          ms: t._milliseconds,
          d: t._days,
          M: t._months
      } : s(t) ? (a = {}, e ? a[e] = t : a.milliseconds = t) : (l = hi.exec(t)) ? (i = "-" === l[1] ? -1 : 1, a = {
          y: 0,
          d: v(l[Me]) * i,
          h: v(l[Ie]) * i,
          m: v(l[Pe]) * i,
          s: v(l[$e]) * i,
          ms: v(Ct(1e3 * l[Ee])) * i
      }) : (l = ui.exec(t)) ? (i = "-" === l[1] ? -1 : 1, a = {
          y: Pt(l[2], i),
          M: Pt(l[3], i),
          w: Pt(l[4], i),
          d: Pt(l[5], i),
          h: Pt(l[6], i),
          m: Pt(l[7], i),
          s: Pt(l[8], i)
      }) : null == a ? a = {} : "object" == typeof a && ("from" in a || "to" in a) && (o = function(t, e) {
          var i;
          return t.isValid() && e.isValid() ? (e = Tt(e, t), t.isBefore(e) ? i = $t(t, e) : ((i = $t(e, t)).milliseconds = -i.milliseconds, i.months = -i.months), i) : {
              milliseconds: 0,
              months: 0
          }
      }(bt(a.from), bt(a.to)), (a = {}).ms = o.milliseconds, a.M = o.months), n = new wt(a), xt(t) && r(t, "_locale") && (n._locale = t._locale), n
  }

  function Pt(t, e) {
      var i = t && parseFloat(t.replace(",", "."));
      return (isNaN(i) ? 0 : i) * e
  }

  function $t(t, e) {
      var i = {
          milliseconds: 0,
          months: 0
      };
      return i.months = e.month() - t.month() + 12 * (e.year() - t.year()), t.clone().add(i.months, "M").isAfter(e) && --i.months, i.milliseconds = +e - +t.clone().add(i.months, "M"), i
  }

  function Et(t, e) {
      return function(i, n) {
          var s;
          return null === n || isNaN(+n) || (w(e, "moment()." + e + "(period, number) is deprecated. Please use moment()." + e + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), s = i, i = n, n = s), At(this, It(i = "string" == typeof i ? +i : i, n), t), this
      }
  }

  function At(e, i, n, s) {
      var o = i._milliseconds,
          a = Ct(i._days),
          r = Ct(i._months);
      e.isValid() && (s = null == s || s, o && e._d.setTime(e._d.valueOf() + o * n), a && $(e, "Date", P(e, "Date") + a * n), r && Y(e, P(e, "Month") + r * n), s && t.updateOffset(e, a || r))
  }

  function Ft(t) {
      var e;
      return void 0 === t ? this._locale._abbr : (null != (e = lt(t)) && (this._locale = e), this)
  }

  function Ot() {
      return this._locale
  }

  function Nt(t, e) {
      A(0, [t, t.length], 0, e)
  }

  function Lt(t, e, i, n, s) {
      var o;
      return null == t ? Z(this, n, s).year : (e > (o = J(t, n, s)) && (e = o), function(t, e, i, n, s) {
          var o = Q(t, e, i, n, s),
              a = G(o.year, 0, o.dayOfYear);
          return this.year(a.getUTCFullYear()), this.month(a.getUTCMonth()), this.date(a.getUTCDate()), this
      }.call(this, t, e, i, n, s))
  }

  function Ht(t, e) {
      e[Ee] = v(1e3 * ("0." + t))
  }

  function zt(t) {
      return t
  }

  function Rt(t, e, i, n) {
      var s = lt(),
          o = c().set(n, e);
      return s[i](o, t)
  }

  function Wt(t, e, i) {
      if (s(t) && (e = t, t = void 0), t = t || "", null != e) return Rt(t, e, i, "month");
      var n, o = [];
      for (n = 0; n < 12; n++) o[n] = Rt(t, n, i, "month");
      return o
  }

  function jt(t, e, i, n) {
      "boolean" == typeof t ? (s(e) && (i = e, e = void 0), e = e || "") : (i = e = t, t = !1, s(e) && (i = e, e = void 0), e = e || "");
      var o = lt(),
          a = t ? o._week.dow : 0;
      if (null != i) return Rt(e, (i + a) % 7, n, "day");
      var r, l = [];
      for (r = 0; r < 7; r++) l[r] = Rt(e, (r + a) % 7, n, "day");
      return l
  }

  function Bt(t, e, i, n) {
      var s = It(e, i);
      return t._milliseconds += n * s._milliseconds, t._days += n * s._days, t._months += n * s._months, t._bubble()
  }

  function Yt(t) {
      return t < 0 ? Math.floor(t) : Math.ceil(t)
  }

  function qt(t) {
      return 4800 * t / 146097
  }

  function Ut(t) {
      return 146097 * t / 4800
  }

  function Vt(t) {
      return function() {
          return this.as(t)
      }
  }

  function Xt(t) {
      return function() {
          return this.isValid() ? this._data[t] : NaN
      }
  }

  function Gt() {
      if (!this.isValid()) return this.localeData().invalidDate();
      var t, e, i = Ri(this._milliseconds) / 1e3,
          n = Ri(this._days),
          s = Ri(this._months);
      t = g(i / 60), e = g(t / 60), i %= 60, t %= 60;
      var o = g(s / 12),
          a = s %= 12,
          r = n,
          l = e,
          c = t,
          h = i,
          u = this.asSeconds();
      return u ? (u < 0 ? "-" : "") + "P" + (o ? o + "Y" : "") + (a ? a + "M" : "") + (r ? r + "D" : "") + (l || c || h ? "T" : "") + (l ? l + "H" : "") + (c ? c + "M" : "") + (h ? h + "S" : "") : "P0D"
  }
  var Kt, Qt = Array.prototype.some ? Array.prototype.some : function(t) {
          for (var e = Object(this), i = e.length >>> 0, n = 0; n < i; n++)
              if (n in e && t.call(this, e[n], n, e)) return !0;
          return !1
      },
      Zt = t.momentProperties = [],
      Jt = !1,
      te = {};
  t.suppressDeprecationWarnings = !1, t.deprecationHandler = null;
  var ee = Object.keys ? Object.keys : function(t) {
          var e, i = [];
          for (e in t) r(t, e) && i.push(e);
          return i
      },
      ie = {},
      ne = {},
      se = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
      oe = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
      ae = {},
      re = {},
      le = /\d/,
      ce = /\d\d/,
      he = /\d{3}/,
      ue = /\d{4}/,
      de = /[+-]?\d{6}/,
      pe = /\d\d?/,
      fe = /\d\d\d\d?/,
      me = /\d\d\d\d\d\d?/,
      ge = /\d{1,3}/,
      ve = /\d{1,4}/,
      ye = /[+-]?\d{1,6}/,
      be = /\d+/,
      _e = /[+-]?\d+/,
      we = /Z|[+-]\d\d:?\d\d/gi,
      xe = /Z|[+-]\d\d(?::?\d\d)?/gi,
      Ce = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
      ke = {},
      Se = {},
      Te = 0,
      De = 1,
      Me = 2,
      Ie = 3,
      Pe = 4,
      $e = 5,
      Ee = 6,
      Ae = 7,
      Fe = 8,
      Oe = Array.prototype.indexOf ? Array.prototype.indexOf : function(t) {
          var e;
          for (e = 0; e < this.length; ++e)
              if (this[e] === t) return e;
          return -1
      };
  A("M", ["MM", 2], "Mo", function() {
      return this.month() + 1
  }), A("MMM", 0, 0, function(t) {
      return this.localeData().monthsShort(this, t)
  }), A("MMMM", 0, 0, function(t) {
      return this.localeData().months(this, t)
  }), S("month", "M"), M("month", 8), L("M", pe), L("MM", pe, ce), L("MMM", function(t, e) {
      return e.monthsShortRegex(t)
  }), L("MMMM", function(t, e) {
      return e.monthsRegex(t)
  }), R(["M", "MM"], function(t, e) {
      e[De] = v(t) - 1
  }), R(["MMM", "MMMM"], function(t, e, i, n) {
      var s = i._locale.monthsParse(t, n, i._strict);
      null != s ? e[De] = s : h(i).invalidMonth = t
  });
  var Ne = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
      Le = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
      He = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
      ze = Ce,
      Re = Ce;
  A("Y", 0, 0, function() {
      var t = this.year();
      return t <= 9999 ? "" + t : "+" + t
  }), A(0, ["YY", 2], 0, function() {
      return this.year() % 100
  }), A(0, ["YYYY", 4], 0, "year"), A(0, ["YYYYY", 5], 0, "year"), A(0, ["YYYYYY", 6, !0], 0, "year"), S("year", "y"), M("year", 1), L("Y", _e), L("YY", pe, ce), L("YYYY", ve, ue), L("YYYYY", ye, de), L("YYYYYY", ye, de), R(["YYYYY", "YYYYYY"], Te), R("YYYY", function(e, i) {
      i[Te] = 2 === e.length ? t.parseTwoDigitYear(e) : v(e)
  }), R("YY", function(e, i) {
      i[Te] = t.parseTwoDigitYear(e)
  }), R("Y", function(t, e) {
      e[Te] = parseInt(t, 10)
  }), t.parseTwoDigitYear = function(t) {
      return v(t) + (v(t) > 68 ? 1900 : 2e3)
  };
  var We = I("FullYear", !0);
  A("w", ["ww", 2], "wo", "week"), A("W", ["WW", 2], "Wo", "isoWeek"), S("week", "w"), S("isoWeek", "W"), M("week", 5), M("isoWeek", 5), L("w", pe), L("ww", pe, ce), L("W", pe), L("WW", pe, ce), W(["w", "ww", "W", "WW"], function(t, e, i, n) {
      e[n.substr(0, 1)] = v(t)
  });
  A("d", 0, "do", "day"), A("dd", 0, 0, function(t) {
      return this.localeData().weekdaysMin(this, t)
  }), A("ddd", 0, 0, function(t) {
      return this.localeData().weekdaysShort(this, t)
  }), A("dddd", 0, 0, function(t) {
      return this.localeData().weekdays(this, t)
  }), A("e", 0, 0, "weekday"), A("E", 0, 0, "isoWeekday"), S("day", "d"), S("weekday", "e"), S("isoWeekday", "E"), M("day", 11), M("weekday", 11), M("isoWeekday", 11), L("d", pe), L("e", pe), L("E", pe), L("dd", function(t, e) {
      return e.weekdaysMinRegex(t)
  }), L("ddd", function(t, e) {
      return e.weekdaysShortRegex(t)
  }), L("dddd", function(t, e) {
      return e.weekdaysRegex(t)
  }), W(["dd", "ddd", "dddd"], function(t, e, i, n) {
      var s = i._locale.weekdaysParse(t, n, i._strict);
      null != s ? e.d = s : h(i).invalidWeekday = t
  }), W(["d", "e", "E"], function(t, e, i, n) {
      e[n] = v(t)
  });
  var je = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
      Be = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
      Ye = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
      qe = Ce,
      Ue = Ce,
      Ve = Ce;
  A("H", ["HH", 2], 0, "hour"), A("h", ["hh", 2], 0, et), A("k", ["kk", 2], 0, function() {
      return this.hours() || 24
  }), A("hmm", 0, 0, function() {
      return "" + et.apply(this) + E(this.minutes(), 2)
  }), A("hmmss", 0, 0, function() {
      return "" + et.apply(this) + E(this.minutes(), 2) + E(this.seconds(), 2)
  }), A("Hmm", 0, 0, function() {
      return "" + this.hours() + E(this.minutes(), 2)
  }), A("Hmmss", 0, 0, function() {
      return "" + this.hours() + E(this.minutes(), 2) + E(this.seconds(), 2)
  }), it("a", !0), it("A", !1), S("hour", "h"), M("hour", 13), L("a", nt), L("A", nt), L("H", pe), L("h", pe), L("k", pe), L("HH", pe, ce), L("hh", pe, ce), L("kk", pe, ce), L("hmm", fe), L("hmmss", me), L("Hmm", fe), L("Hmmss", me), R(["H", "HH"], Ie), R(["k", "kk"], function(t, e, i) {
      var n = v(t);
      e[Ie] = 24 === n ? 0 : n
  }), R(["a", "A"], function(t, e, i) {
      i._isPm = i._locale.isPM(t), i._meridiem = t
  }), R(["h", "hh"], function(t, e, i) {
      e[Ie] = v(t), h(i).bigHour = !0
  }), R("hmm", function(t, e, i) {
      var n = t.length - 2;
      e[Ie] = v(t.substr(0, n)), e[Pe] = v(t.substr(n)), h(i).bigHour = !0
  }), R("hmmss", function(t, e, i) {
      var n = t.length - 4,
          s = t.length - 2;
      e[Ie] = v(t.substr(0, n)), e[Pe] = v(t.substr(n, 2)), e[$e] = v(t.substr(s)), h(i).bigHour = !0
  }), R("Hmm", function(t, e, i) {
      var n = t.length - 2;
      e[Ie] = v(t.substr(0, n)), e[Pe] = v(t.substr(n))
  }), R("Hmmss", function(t, e, i) {
      var n = t.length - 4,
          s = t.length - 2;
      e[Ie] = v(t.substr(0, n)), e[Pe] = v(t.substr(n, 2)), e[$e] = v(t.substr(s))
  });
  var Xe, Ge = I("Hours", !0),
      Ke = {
          calendar: {
              sameDay: "[Today at] LT",
              nextDay: "[Tomorrow at] LT",
              nextWeek: "dddd [at] LT",
              lastDay: "[Yesterday at] LT",
              lastWeek: "[Last] dddd [at] LT",
              sameElse: "L"
          },
          longDateFormat: {
              LTS: "h:mm:ss A",
              LT: "h:mm A",
              L: "MM/DD/YYYY",
              LL: "MMMM D, YYYY",
              LLL: "MMMM D, YYYY h:mm A",
              LLLL: "dddd, MMMM D, YYYY h:mm A"
          },
          invalidDate: "Invalid date",
          ordinal: "%d",
          dayOfMonthOrdinalParse: /\d{1,2}/,
          relativeTime: {
              future: "in %s",
              past: "%s ago",
              s: "a few seconds",
              ss: "%d seconds",
              m: "a minute",
              mm: "%d minutes",
              h: "an hour",
              hh: "%d hours",
              d: "a day",
              dd: "%d days",
              M: "a month",
              MM: "%d months",
              y: "a year",
              yy: "%d years"
          },
          months: Le,
          monthsShort: He,
          week: {
              dow: 0,
              doy: 6
          },
          weekdays: je,
          weekdaysMin: Ye,
          weekdaysShort: Be,
          meridiemParse: /[ap]\.?m?\.?/i
      },
      Qe = {},
      Ze = {},
      Je = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
      ti = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
      ei = /Z|[+-]\d\d(?::?\d\d)?/,
      ii = [
          ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
          ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
          ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
          ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
          ["YYYY-DDD", /\d{4}-\d{3}/],
          ["YYYY-MM", /\d{4}-\d\d/, !1],
          ["YYYYYYMMDD", /[+-]\d{10}/],
          ["YYYYMMDD", /\d{8}/],
          ["GGGG[W]WWE", /\d{4}W\d{3}/],
          ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
          ["YYYYDDD", /\d{7}/]
      ],
      ni = [
          ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
          ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
          ["HH:mm:ss", /\d\d:\d\d:\d\d/],
          ["HH:mm", /\d\d:\d\d/],
          ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
          ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
          ["HHmmss", /\d\d\d\d\d\d/],
          ["HHmm", /\d\d\d\d/],
          ["HH", /\d\d/]
      ],
      si = /^\/?Date\((\-?\d+)/i,
      oi = /^((?:Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d?\d\s(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(?:\d\d)?\d\d\s)(\d\d:\d\d)(\:\d\d)?(\s(?:UT|GMT|[ECMP][SD]T|[A-IK-Za-ik-z]|[+-]\d{4}))$/;
  t.createFromInputFallback = _("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(t) {
      t._d = new Date(t._i + (t._useUTC ? " UTC" : ""))
  }), t.ISO_8601 = function() {}, t.RFC_2822 = function() {};
  var ai = _("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
          var t = bt.apply(null, arguments);
          return this.isValid() && t.isValid() ? t < this ? this : t : d()
      }),
      ri = _("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
          var t = bt.apply(null, arguments);
          return this.isValid() && t.isValid() ? t > this ? this : t : d()
      }),
      li = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];
  kt("Z", ":"), kt("ZZ", ""), L("Z", xe), L("ZZ", xe), R(["Z", "ZZ"], function(t, e, i) {
      i._useUTC = !0, i._tzm = St(xe, t)
  });
  var ci = /([\+\-]|\d\d)/gi;
  t.updateOffset = function() {};
  var hi = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
      ui = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;
  It.fn = wt.prototype, It.invalid = function() {
      return It(NaN)
  };
  var di = Et(1, "add"),
      pi = Et(-1, "subtract");
  t.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", t.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
  var fi = _("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(t) {
      return void 0 === t ? this.localeData() : this.locale(t)
  });
  A(0, ["gg", 2], 0, function() {
      return this.weekYear() % 100
  }), A(0, ["GG", 2], 0, function() {
      return this.isoWeekYear() % 100
  }), Nt("gggg", "weekYear"), Nt("ggggg", "weekYear"), Nt("GGGG", "isoWeekYear"), Nt("GGGGG", "isoWeekYear"), S("weekYear", "gg"), S("isoWeekYear", "GG"), M("weekYear", 1), M("isoWeekYear", 1), L("G", _e), L("g", _e), L("GG", pe, ce), L("gg", pe, ce), L("GGGG", ve, ue), L("gggg", ve, ue), L("GGGGG", ye, de), L("ggggg", ye, de), W(["gggg", "ggggg", "GGGG", "GGGGG"], function(t, e, i, n) {
      e[n.substr(0, 2)] = v(t)
  }), W(["gg", "GG"], function(e, i, n, s) {
      i[s] = t.parseTwoDigitYear(e)
  }), A("Q", 0, "Qo", "quarter"), S("quarter", "Q"), M("quarter", 7), L("Q", le), R("Q", function(t, e) {
      e[De] = 3 * (v(t) - 1)
  }), A("D", ["DD", 2], "Do", "date"), S("date", "D"), M("date", 9), L("D", pe), L("DD", pe, ce), L("Do", function(t, e) {
      return t ? e._dayOfMonthOrdinalParse || e._ordinalParse : e._dayOfMonthOrdinalParseLenient
  }), R(["D", "DD"], Me), R("Do", function(t, e) {
      e[Me] = v(t.match(pe)[0])
  });
  var mi = I("Date", !0);
  A("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), S("dayOfYear", "DDD"), M("dayOfYear", 4), L("DDD", ge), L("DDDD", he), R(["DDD", "DDDD"], function(t, e, i) {
      i._dayOfYear = v(t)
  }), A("m", ["mm", 2], 0, "minute"), S("minute", "m"), M("minute", 14), L("m", pe), L("mm", pe, ce), R(["m", "mm"], Pe);
  var gi = I("Minutes", !1);
  A("s", ["ss", 2], 0, "second"), S("second", "s"), M("second", 15), L("s", pe), L("ss", pe, ce), R(["s", "ss"], $e);
  var vi, yi = I("Seconds", !1);
  for (A("S", 0, 0, function() {
          return ~~(this.millisecond() / 100)
      }), A(0, ["SS", 2], 0, function() {
          return ~~(this.millisecond() / 10)
      }), A(0, ["SSS", 3], 0, "millisecond"), A(0, ["SSSS", 4], 0, function() {
          return 10 * this.millisecond()
      }), A(0, ["SSSSS", 5], 0, function() {
          return 100 * this.millisecond()
      }), A(0, ["SSSSSS", 6], 0, function() {
          return 1e3 * this.millisecond()
      }), A(0, ["SSSSSSS", 7], 0, function() {
          return 1e4 * this.millisecond()
      }), A(0, ["SSSSSSSS", 8], 0, function() {
          return 1e5 * this.millisecond()
      }), A(0, ["SSSSSSSSS", 9], 0, function() {
          return 1e6 * this.millisecond()
      }), S("millisecond", "ms"), M("millisecond", 16), L("S", ge, le), L("SS", ge, ce), L("SSS", ge, he), vi = "SSSS"; vi.length <= 9; vi += "S") L(vi, be);
  for (vi = "S"; vi.length <= 9; vi += "S") R(vi, Ht);
  var bi = I("Milliseconds", !1);
  A("z", 0, 0, "zoneAbbr"), A("zz", 0, 0, "zoneName");
  var _i = f.prototype;
  _i.add = di, _i.calendar = function(e, i) {
      var n = e || bt(),
          s = Tt(n, this).startOf("day"),
          o = t.calendarFormat(this, s) || "sameElse",
          a = i && (x(i[o]) ? i[o].call(this, n) : i[o]);
      return this.format(a || this.localeData().calendar(o, this, bt(n)))
  }, _i.clone = function() {
      return new f(this)
  }, _i.diff = function(t, e, i) {
      var n, s, o, a;
      return this.isValid() && (n = Tt(t, this)).isValid() ? (s = 6e4 * (n.utcOffset() - this.utcOffset()), "year" === (e = T(e)) || "month" === e || "quarter" === e ? (a = function(t, e) {
          var i, n, s = 12 * (e.year() - t.year()) + (e.month() - t.month()),
              o = t.clone().add(s, "months");
          return e - o < 0 ? (i = t.clone().add(s - 1, "months"), n = (e - o) / (o - i)) : (i = t.clone().add(s + 1, "months"), n = (e - o) / (i - o)), -(s + n) || 0
      }(this, n), "quarter" === e ? a /= 3 : "year" === e && (a /= 12)) : (o = this - n, a = "second" === e ? o / 1e3 : "minute" === e ? o / 6e4 : "hour" === e ? o / 36e5 : "day" === e ? (o - s) / 864e5 : "week" === e ? (o - s) / 6048e5 : o), i ? a : g(a)) : NaN
  }, _i.endOf = function(t) {
      return void 0 === (t = T(t)) || "millisecond" === t ? this : ("date" === t && (t = "day"), this.startOf(t).add(1, "isoWeek" === t ? "week" : t).subtract(1, "ms"))
  }, _i.format = function(e) {
      e || (e = this.isUtc() ? t.defaultFormatUtc : t.defaultFormat);
      var i = O(this, e);
      return this.localeData().postformat(i)
  }, _i.from = function(t, e) {
      return this.isValid() && (m(t) && t.isValid() || bt(t).isValid()) ? It({
          to: this,
          from: t
      }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate()
  }, _i.fromNow = function(t) {
      return this.from(bt(), t)
  }, _i.to = function(t, e) {
      return this.isValid() && (m(t) && t.isValid() || bt(t).isValid()) ? It({
          from: this,
          to: t
      }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate()
  }, _i.toNow = function(t) {
      return this.to(bt(), t)
  }, _i.get = function(t) {
      return x(this[t = T(t)]) ? this[t]() : this
  }, _i.invalidAt = function() {
      return h(this).overflow
  }, _i.isAfter = function(t, e) {
      var i = m(t) ? t : bt(t);
      return !(!this.isValid() || !i.isValid()) && ("millisecond" === (e = T(n(e) ? "millisecond" : e)) ? this.valueOf() > i.valueOf() : i.valueOf() < this.clone().startOf(e).valueOf())
  }, _i.isBefore = function(t, e) {
      var i = m(t) ? t : bt(t);
      return !(!this.isValid() || !i.isValid()) && ("millisecond" === (e = T(n(e) ? "millisecond" : e)) ? this.valueOf() < i.valueOf() : this.clone().endOf(e).valueOf() < i.valueOf())
  }, _i.isBetween = function(t, e, i, n) {
      return ("(" === (n = n || "()")[0] ? this.isAfter(t, i) : !this.isBefore(t, i)) && (")" === n[1] ? this.isBefore(e, i) : !this.isAfter(e, i))
  }, _i.isSame = function(t, e) {
      var i, n = m(t) ? t : bt(t);
      return !(!this.isValid() || !n.isValid()) && ("millisecond" === (e = T(e || "millisecond")) ? this.valueOf() === n.valueOf() : (i = n.valueOf(), this.clone().startOf(e).valueOf() <= i && i <= this.clone().endOf(e).valueOf()))
  }, _i.isSameOrAfter = function(t, e) {
      return this.isSame(t, e) || this.isAfter(t, e)
  }, _i.isSameOrBefore = function(t, e) {
      return this.isSame(t, e) || this.isBefore(t, e)
  }, _i.isValid = function() {
      return u(this)
  }, _i.lang = fi, _i.locale = Ft, _i.localeData = Ot, _i.max = ri, _i.min = ai, _i.parsingFlags = function() {
      return l({}, h(this))
  }, _i.set = function(t, e) {
      if ("object" == typeof t)
          for (var i = function(t) {
                  var e = [];
                  for (var i in t) e.push({
                      unit: i,
                      priority: ne[i]
                  });
                  return e.sort(function(t, e) {
                      return t.priority - e.priority
                  }), e
              }(t = D(t)), n = 0; n < i.length; n++) this[i[n].unit](t[i[n].unit]);
      else if (x(this[t = T(t)])) return this[t](e);
      return this
  }, _i.startOf = function(t) {
      switch (t = T(t)) {
          case "year":
              this.month(0);
          case "quarter":
          case "month":
              this.date(1);
          case "week":
          case "isoWeek":
          case "day":
          case "date":
              this.hours(0);
          case "hour":
              this.minutes(0);
          case "minute":
              this.seconds(0);
          case "second":
              this.milliseconds(0)
      }
      return "week" === t && this.weekday(0), "isoWeek" === t && this.isoWeekday(1), "quarter" === t && this.month(3 * Math.floor(this.month() / 3)), this
  }, _i.subtract = pi, _i.toArray = function() {
      var t = this;
      return [t.year(), t.month(), t.date(), t.hour(), t.minute(), t.second(), t.millisecond()]
  }, _i.toObject = function() {
      var t = this;
      return {
          years: t.year(),
          months: t.month(),
          date: t.date(),
          hours: t.hours(),
          minutes: t.minutes(),
          seconds: t.seconds(),
          milliseconds: t.milliseconds()
      }
  }, _i.toDate = function() {
      return new Date(this.valueOf())
  }, _i.toISOString = function() {
      if (!this.isValid()) return null;
      var t = this.clone().utc();
      return t.year() < 0 || t.year() > 9999 ? O(t, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : x(Date.prototype.toISOString) ? this.toDate().toISOString() : O(t, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
  }, _i.inspect = function() {
      if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
      var t = "moment",
          e = "";
      this.isLocal() || (t = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", e = "Z");
      var i = "[" + t + '("]',
          n = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
          s = e + '[")]';
      return this.format(i + n + "-MM-DD[T]HH:mm:ss.SSS" + s)
  }, _i.toJSON = function() {
      return this.isValid() ? this.toISOString() : null
  }, _i.toString = function() {
      return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
  }, _i.unix = function() {
      return Math.floor(this.valueOf() / 1e3)
  }, _i.valueOf = function() {
      return this._d.valueOf() - 6e4 * (this._offset || 0)
  }, _i.creationData = function() {
      return {
          input: this._i,
          format: this._f,
          locale: this._locale,
          isUTC: this._isUTC,
          strict: this._strict
      }
  }, _i.year = We, _i.isLeapYear = function() {
      return X(this.year())
  }, _i.weekYear = function(t) {
      return Lt.call(this, t, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
  }, _i.isoWeekYear = function(t) {
      return Lt.call(this, t, this.isoWeek(), this.isoWeekday(), 1, 4)
  }, _i.quarter = _i.quarters = function(t) {
      return null == t ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (t - 1) + this.month() % 3)
  }, _i.month = q, _i.daysInMonth = function() {
      return B(this.year(), this.month())
  }, _i.week = _i.weeks = function(t) {
      var e = this.localeData().week(this);
      return null == t ? e : this.add(7 * (t - e), "d")
  }, _i.isoWeek = _i.isoWeeks = function(t) {
      var e = Z(this, 1, 4).week;
      return null == t ? e : this.add(7 * (t - e), "d")
  }, _i.weeksInYear = function() {
      var t = this.localeData()._week;
      return J(this.year(), t.dow, t.doy)
  }, _i.isoWeeksInYear = function() {
      return J(this.year(), 1, 4)
  }, _i.date = mi, _i.day = _i.days = function(t) {
      if (!this.isValid()) return null != t ? this : NaN;
      var e = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
      return null != t ? (t = function(t, e) {
          return "string" != typeof t ? t : isNaN(t) ? "number" == typeof(t = e.weekdaysParse(t)) ? t : null : parseInt(t, 10)
      }(t, this.localeData()), this.add(t - e, "d")) : e
  }, _i.weekday = function(t) {
      if (!this.isValid()) return null != t ? this : NaN;
      var e = (this.day() + 7 - this.localeData()._week.dow) % 7;
      return null == t ? e : this.add(t - e, "d")
  }, _i.isoWeekday = function(t) {
      if (!this.isValid()) return null != t ? this : NaN;
      if (null != t) {
          var e = function(t, e) {
              return "string" == typeof t ? e.weekdaysParse(t) % 7 || 7 : isNaN(t) ? null : t
          }(t, this.localeData());
          return this.day(this.day() % 7 ? e : e - 7)
      }
      return this.day() || 7
  }, _i.dayOfYear = function(t) {
      var e = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
      return null == t ? e : this.add(t - e, "d")
  }, _i.hour = _i.hours = Ge, _i.minute = _i.minutes = gi, _i.second = _i.seconds = yi, _i.millisecond = _i.milliseconds = bi, _i.utcOffset = function(e, i, n) {
      var s, o = this._offset || 0;
      if (!this.isValid()) return null != e ? this : NaN;
      if (null != e) {
          if ("string" == typeof e) {
              if (null === (e = St(xe, e))) return this
          } else Math.abs(e) < 16 && !n && (e *= 60);
          return !this._isUTC && i && (s = Dt(this)), this._offset = e, this._isUTC = !0, null != s && this.add(s, "m"), o !== e && (!i || this._changeInProgress ? At(this, It(e - o, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, t.updateOffset(this, !0), this._changeInProgress = null)), this
      }
      return this._isUTC ? o : Dt(this)
  }, _i.utc = function(t) {
      return this.utcOffset(0, t)
  }, _i.local = function(t) {
      return this._isUTC && (this.utcOffset(0, t), this._isUTC = !1, t && this.subtract(Dt(this), "m")), this
  }, _i.parseZone = function() {
      if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
      else if ("string" == typeof this._i) {
          var t = St(we, this._i);
          null != t ? this.utcOffset(t) : this.utcOffset(0, !0)
      }
      return this
  }, _i.hasAlignedHourOffset = function(t) {
      return !!this.isValid() && (t = t ? bt(t).utcOffset() : 0, (this.utcOffset() - t) % 60 == 0)
  }, _i.isDST = function() {
      return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
  }, _i.isLocal = function() {
      return !!this.isValid() && !this._isUTC
  }, _i.isUtcOffset = function() {
      return !!this.isValid() && this._isUTC
  }, _i.isUtc = Mt, _i.isUTC = Mt, _i.zoneAbbr = function() {
      return this._isUTC ? "UTC" : ""
  }, _i.zoneName = function() {
      return this._isUTC ? "Coordinated Universal Time" : ""
  }, _i.dates = _("dates accessor is deprecated. Use date instead.", mi), _i.months = _("months accessor is deprecated. Use month instead", q), _i.years = _("years accessor is deprecated. Use year instead", We), _i.zone = _("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", function(t, e) {
      return null != t ? ("string" != typeof t && (t = -t), this.utcOffset(t, e), this) : -this.utcOffset()
  }), _i.isDSTShifted = _("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", function() {
      if (!n(this._isDSTShifted)) return this._isDSTShifted;
      var t = {};
      if (p(t, this), (t = gt(t))._a) {
          var e = t._isUTC ? c(t._a) : bt(t._a);
          this._isDSTShifted = this.isValid() && y(t._a, e.toArray()) > 0
      } else this._isDSTShifted = !1;
      return this._isDSTShifted
  });
  var wi = k.prototype;
  wi.calendar = function(t, e, i) {
      var n = this._calendar[t] || this._calendar.sameElse;
      return x(n) ? n.call(e, i) : n
  }, wi.longDateFormat = function(t) {
      var e = this._longDateFormat[t],
          i = this._longDateFormat[t.toUpperCase()];
      return e || !i ? e : (this._longDateFormat[t] = i.replace(/MMMM|MM|DD|dddd/g, function(t) {
          return t.slice(1)
      }), this._longDateFormat[t])
  }, wi.invalidDate = function() {
      return this._invalidDate
  }, wi.ordinal = function(t) {
      return this._ordinal.replace("%d", t)
  }, wi.preparse = zt, wi.postformat = zt, wi.relativeTime = function(t, e, i, n) {
      var s = this._relativeTime[i];
      return x(s) ? s(t, e, i, n) : s.replace(/%d/i, t)
  }, wi.pastFuture = function(t, e) {
      var i = this._relativeTime[t > 0 ? "future" : "past"];
      return x(i) ? i(e) : i.replace(/%s/i, e)
  }, wi.set = function(t) {
      var e, i;
      for (i in t) x(e = t[i]) ? this[i] = e : this["_" + i] = e;
      this._config = t, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
  }, wi.months = function(t, i) {
      return t ? e(this._months) ? this._months[t.month()] : this._months[(this._months.isFormat || Ne).test(i) ? "format" : "standalone"][t.month()] : e(this._months) ? this._months : this._months.standalone
  }, wi.monthsShort = function(t, i) {
      return t ? e(this._monthsShort) ? this._monthsShort[t.month()] : this._monthsShort[Ne.test(i) ? "format" : "standalone"][t.month()] : e(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
  }, wi.monthsParse = function(t, e, i) {
      var n, s, o;
      if (this._monthsParseExact) return function(t, e, i) {
          var n, s, o, a = t.toLocaleLowerCase();
          if (!this._monthsParse)
              for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], n = 0; n < 12; ++n) o = c([2e3, n]), this._shortMonthsParse[n] = this.monthsShort(o, "").toLocaleLowerCase(), this._longMonthsParse[n] = this.months(o, "").toLocaleLowerCase();
          return i ? "MMM" === e ? -1 !== (s = Oe.call(this._shortMonthsParse, a)) ? s : null : -1 !== (s = Oe.call(this._longMonthsParse, a)) ? s : null : "MMM" === e ? -1 !== (s = Oe.call(this._shortMonthsParse, a)) ? s : -1 !== (s = Oe.call(this._longMonthsParse, a)) ? s : null : -1 !== (s = Oe.call(this._longMonthsParse, a)) ? s : -1 !== (s = Oe.call(this._shortMonthsParse, a)) ? s : null
      }.call(this, t, e, i);
      for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), n = 0; n < 12; n++) {
          if (s = c([2e3, n]), i && !this._longMonthsParse[n] && (this._longMonthsParse[n] = new RegExp("^" + this.months(s, "").replace(".", "") + "$", "i"), this._shortMonthsParse[n] = new RegExp("^" + this.monthsShort(s, "").replace(".", "") + "$", "i")), i || this._monthsParse[n] || (o = "^" + this.months(s, "") + "|^" + this.monthsShort(s, ""), this._monthsParse[n] = new RegExp(o.replace(".", ""), "i")), i && "MMMM" === e && this._longMonthsParse[n].test(t)) return n;
          if (i && "MMM" === e && this._shortMonthsParse[n].test(t)) return n;
          if (!i && this._monthsParse[n].test(t)) return n
      }
  }, wi.monthsRegex = function(t) {
      return this._monthsParseExact ? (r(this, "_monthsRegex") || U.call(this), t ? this._monthsStrictRegex : this._monthsRegex) : (r(this, "_monthsRegex") || (this._monthsRegex = Re), this._monthsStrictRegex && t ? this._monthsStrictRegex : this._monthsRegex)
  }, wi.monthsShortRegex = function(t) {
      return this._monthsParseExact ? (r(this, "_monthsRegex") || U.call(this), t ? this._monthsShortStrictRegex : this._monthsShortRegex) : (r(this, "_monthsShortRegex") || (this._monthsShortRegex = ze), this._monthsShortStrictRegex && t ? this._monthsShortStrictRegex : this._monthsShortRegex)
  }, wi.week = function(t) {
      return Z(t, this._week.dow, this._week.doy).week
  }, wi.firstDayOfYear = function() {
      return this._week.doy
  }, wi.firstDayOfWeek = function() {
      return this._week.dow
  }, wi.weekdays = function(t, i) {
      return t ? e(this._weekdays) ? this._weekdays[t.day()] : this._weekdays[this._weekdays.isFormat.test(i) ? "format" : "standalone"][t.day()] : e(this._weekdays) ? this._weekdays : this._weekdays.standalone
  }, wi.weekdaysMin = function(t) {
      return t ? this._weekdaysMin[t.day()] : this._weekdaysMin
  }, wi.weekdaysShort = function(t) {
      return t ? this._weekdaysShort[t.day()] : this._weekdaysShort
  }, wi.weekdaysParse = function(t, e, i) {
      var n, s, o;
      if (this._weekdaysParseExact) return function(t, e, i) {
          var n, s, o, a = t.toLocaleLowerCase();
          if (!this._weekdaysParse)
              for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], n = 0; n < 7; ++n) o = c([2e3, 1]).day(n), this._minWeekdaysParse[n] = this.weekdaysMin(o, "").toLocaleLowerCase(), this._shortWeekdaysParse[n] = this.weekdaysShort(o, "").toLocaleLowerCase(), this._weekdaysParse[n] = this.weekdays(o, "").toLocaleLowerCase();
          return i ? "dddd" === e ? -1 !== (s = Oe.call(this._weekdaysParse, a)) ? s : null : "ddd" === e ? -1 !== (s = Oe.call(this._shortWeekdaysParse, a)) ? s : null : -1 !== (s = Oe.call(this._minWeekdaysParse, a)) ? s : null : "dddd" === e ? -1 !== (s = Oe.call(this._weekdaysParse, a)) ? s : -1 !== (s = Oe.call(this._shortWeekdaysParse, a)) ? s : -1 !== (s = Oe.call(this._minWeekdaysParse, a)) ? s : null : "ddd" === e ? -1 !== (s = Oe.call(this._shortWeekdaysParse, a)) ? s : -1 !== (s = Oe.call(this._weekdaysParse, a)) ? s : -1 !== (s = Oe.call(this._minWeekdaysParse, a)) ? s : null : -1 !== (s = Oe.call(this._minWeekdaysParse, a)) ? s : -1 !== (s = Oe.call(this._weekdaysParse, a)) ? s : -1 !== (s = Oe.call(this._shortWeekdaysParse, a)) ? s : null
      }.call(this, t, e, i);
      for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), n = 0; n < 7; n++) {
          if (s = c([2e3, 1]).day(n), i && !this._fullWeekdaysParse[n] && (this._fullWeekdaysParse[n] = new RegExp("^" + this.weekdays(s, "").replace(".", ".?") + "$", "i"), this._shortWeekdaysParse[n] = new RegExp("^" + this.weekdaysShort(s, "").replace(".", ".?") + "$", "i"), this._minWeekdaysParse[n] = new RegExp("^" + this.weekdaysMin(s, "").replace(".", ".?") + "$", "i")), this._weekdaysParse[n] || (o = "^" + this.weekdays(s, "") + "|^" + this.weekdaysShort(s, "") + "|^" + this.weekdaysMin(s, ""), this._weekdaysParse[n] = new RegExp(o.replace(".", ""), "i")), i && "dddd" === e && this._fullWeekdaysParse[n].test(t)) return n;
          if (i && "ddd" === e && this._shortWeekdaysParse[n].test(t)) return n;
          if (i && "dd" === e && this._minWeekdaysParse[n].test(t)) return n;
          if (!i && this._weekdaysParse[n].test(t)) return n
      }
  }, wi.weekdaysRegex = function(t) {
      return this._weekdaysParseExact ? (r(this, "_weekdaysRegex") || tt.call(this), t ? this._weekdaysStrictRegex : this._weekdaysRegex) : (r(this, "_weekdaysRegex") || (this._weekdaysRegex = qe), this._weekdaysStrictRegex && t ? this._weekdaysStrictRegex : this._weekdaysRegex)
  }, wi.weekdaysShortRegex = function(t) {
      return this._weekdaysParseExact ? (r(this, "_weekdaysRegex") || tt.call(this), t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (r(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Ue), this._weekdaysShortStrictRegex && t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
  }, wi.weekdaysMinRegex = function(t) {
      return this._weekdaysParseExact ? (r(this, "_weekdaysRegex") || tt.call(this), t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (r(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Ve), this._weekdaysMinStrictRegex && t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
  }, wi.isPM = function(t) {
      return "p" === (t + "").toLowerCase().charAt(0)
  }, wi.meridiem = function(t, e, i) {
      return t > 11 ? i ? "pm" : "PM" : i ? "am" : "AM"
  }, at("en", {
      dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
      ordinal: function(t) {
          var e = t % 10;
          return t + (1 === v(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th")
      }
  }), t.lang = _("moment.lang is deprecated. Use moment.locale instead.", at), t.langData = _("moment.langData is deprecated. Use moment.localeData instead.", lt);
  var xi = Math.abs,
      Ci = Vt("ms"),
      ki = Vt("s"),
      Si = Vt("m"),
      Ti = Vt("h"),
      Di = Vt("d"),
      Mi = Vt("w"),
      Ii = Vt("M"),
      Pi = Vt("y"),
      $i = Xt("milliseconds"),
      Ei = Xt("seconds"),
      Ai = Xt("minutes"),
      Fi = Xt("hours"),
      Oi = Xt("days"),
      Ni = Xt("months"),
      Li = Xt("years"),
      Hi = Math.round,
      zi = {
          ss: 44,
          s: 45,
          m: 45,
          h: 22,
          d: 26,
          M: 11
      },
      Ri = Math.abs,
      Wi = wt.prototype;
  return Wi.isValid = function() {
          return this._isValid
      }, Wi.abs = function() {
          var t = this._data;
          return this._milliseconds = xi(this._milliseconds), this._days = xi(this._days), this._months = xi(this._months), t.milliseconds = xi(t.milliseconds), t.seconds = xi(t.seconds), t.minutes = xi(t.minutes), t.hours = xi(t.hours), t.months = xi(t.months), t.years = xi(t.years), this
      }, Wi.add = function(t, e) {
          return Bt(this, t, e, 1)
      }, Wi.subtract = function(t, e) {
          return Bt(this, t, e, -1)
      }, Wi.as = function(t) {
          if (!this.isValid()) return NaN;
          var e, i, n = this._milliseconds;
          if ("month" === (t = T(t)) || "year" === t) return e = this._days + n / 864e5, i = this._months + qt(e), "month" === t ? i : i / 12;
          switch (e = this._days + Math.round(Ut(this._months)), t) {
              case "week":
                  return e / 7 + n / 6048e5;
              case "day":
                  return e + n / 864e5;
              case "hour":
                  return 24 * e + n / 36e5;
              case "minute":
                  return 1440 * e + n / 6e4;
              case "second":
                  return 86400 * e + n / 1e3;
              case "millisecond":
                  return Math.floor(864e5 * e) + n;
              default:
                  throw new Error("Unknown unit " + t)
          }
      }, Wi.asMilliseconds = Ci, Wi.asSeconds = ki, Wi.asMinutes = Si, Wi.asHours = Ti, Wi.asDays = Di, Wi.asWeeks = Mi, Wi.asMonths = Ii, Wi.asYears = Pi, Wi.valueOf = function() {
          return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * v(this._months / 12) : NaN
      }, Wi._bubble = function() {
          var t, e, i, n, s, o = this._milliseconds,
              a = this._days,
              r = this._months,
              l = this._data;
          return o >= 0 && a >= 0 && r >= 0 || o <= 0 && a <= 0 && r <= 0 || (o += 864e5 * Yt(Ut(r) + a), a = 0, r = 0), l.milliseconds = o % 1e3, t = g(o / 1e3), l.seconds = t % 60, e = g(t / 60), l.minutes = e % 60, i = g(e / 60), l.hours = i % 24, a += g(i / 24), r += s = g(qt(a)), a -= Yt(Ut(s)), n = g(r / 12), r %= 12, l.days = a, l.months = r, l.years = n, this
      }, Wi.get = function(t) {
          return t = T(t), this.isValid() ? this[t + "s"]() : NaN
      }, Wi.milliseconds = $i, Wi.seconds = Ei, Wi.minutes = Ai, Wi.hours = Fi, Wi.days = Oi, Wi.weeks = function() {
          return g(this.days() / 7)
      }, Wi.months = Ni, Wi.years = Li, Wi.humanize = function(t) {
          if (!this.isValid()) return this.localeData().invalidDate();
          var e = this.localeData(),
              i = function(t, e, i) {
                  var n = It(t).abs(),
                      s = Hi(n.as("s")),
                      o = Hi(n.as("m")),
                      a = Hi(n.as("h")),
                      r = Hi(n.as("d")),
                      l = Hi(n.as("M")),
                      c = Hi(n.as("y")),
                      h = s <= zi.ss && ["s", s] || s < zi.s && ["ss", s] || o <= 1 && ["m"] || o < zi.m && ["mm", o] || a <= 1 && ["h"] || a < zi.h && ["hh", a] || r <= 1 && ["d"] || r < zi.d && ["dd", r] || l <= 1 && ["M"] || l < zi.M && ["MM", l] || c <= 1 && ["y"] || ["yy", c];
                  return h[2] = e, h[3] = +t > 0, h[4] = i,
                      function(t, e, i, n, s) {
                          return s.relativeTime(e || 1, !!i, t, n)
                      }.apply(null, h)
              }(this, !t, e);
          return t && (i = e.pastFuture(+this, i)), e.postformat(i)
      }, Wi.toISOString = Gt, Wi.toString = Gt, Wi.toJSON = Gt, Wi.locale = Ft, Wi.localeData = Ot, Wi.toIsoString = _("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Gt), Wi.lang = fi, A("X", 0, 0, "unix"), A("x", 0, 0, "valueOf"), L("x", _e), L("X", /[+-]?\d+(\.\d{1,3})?/), R("X", function(t, e, i) {
          i._d = new Date(1e3 * parseFloat(t, 10))
      }), R("x", function(t, e, i) {
          i._d = new Date(v(t))
      }), t.version = "2.18.1",
      function(t) {
          Kt = t
      }(bt), t.fn = _i, t.min = function() {
          return _t("isBefore", [].slice.call(arguments, 0))
      }, t.max = function() {
          return _t("isAfter", [].slice.call(arguments, 0))
      }, t.now = function() {
          return Date.now ? Date.now() : +new Date
      }, t.utc = c, t.unix = function(t) {
          return bt(1e3 * t)
      }, t.months = function(t, e) {
          return Wt(t, e, "months")
      }, t.isDate = o, t.locale = at, t.invalid = d, t.duration = It, t.isMoment = m, t.weekdays = function(t, e, i) {
          return jt(t, e, i, "weekdays")
      }, t.parseZone = function() {
          return bt.apply(null, arguments).parseZone()
      }, t.localeData = lt, t.isDuration = xt, t.monthsShort = function(t, e) {
          return Wt(t, e, "monthsShort")
      }, t.weekdaysMin = function(t, e, i) {
          return jt(t, e, i, "weekdaysMin")
      }, t.defineLocale = rt, t.updateLocale = function(t, e) {
          if (null != e) {
              var i, n = Ke;
              null != Qe[t] && (n = Qe[t]._config), (i = new k(e = C(n, e))).parentLocale = Qe[t], Qe[t] = i, at(t)
          } else null != Qe[t] && (null != Qe[t].parentLocale ? Qe[t] = Qe[t].parentLocale : null != Qe[t] && delete Qe[t]);
          return Qe[t]
      }, t.locales = function() {
          return ee(Qe)
      }, t.weekdaysShort = function(t, e, i) {
          return jt(t, e, i, "weekdaysShort")
      }, t.normalizeUnits = T, t.relativeTimeRounding = function(t) {
          return void 0 === t ? Hi : "function" == typeof t && (Hi = t, !0)
      }, t.relativeTimeThreshold = function(t, e) {
          return void 0 !== zi[t] && (void 0 === e ? zi[t] : (zi[t] = e, "s" === t && (zi.ss = e - 1), !0))
      }, t.calendarFormat = function(t, e) {
          var i = t.diff(e, "days", !0);
          return i < -6 ? "sameElse" : i < -1 ? "lastWeek" : i < 0 ? "lastDay" : i < 1 ? "sameDay" : i < 2 ? "nextDay" : i < 7 ? "nextWeek" : "sameElse"
      }, t.prototype = _i, t
}), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");

function numbersonly(t, e, i) {
var n, s;
if (window.event) n = window.event.keyCode;
else {
  if (!e) return !0;
  n = e.which
}
return s = String.fromCharCode(n), null == n || 0 == n || 8 == n || 9 == n || 13 == n || 27 == n || ("0123456789".indexOf(s) > -1 || !(!i || "." != s) && (t.form.elements[i].focus(), !1))
}

function varchk(t, e) {
for (var i = ["cn", "em", "pc", "code", "pn", "pt", "apc", "acode", "apn", "apt", "pdt", "sub", "pwd", "cpwd", "ctry", "topic", "date", "cl"], n = 0; n < i.length; n++) {
  var s = $(t + ' .jform [name="' + i[n] + '"]').attr("name") == i[n],
      o = new Date,
      a = o.getDate(),
      r = o.getMonth() + 1 + "/" + a + "/" + o.getFullYear();
  s || ("date" == i[n] ? $(t + " .jform").append('<input type="hidden" name="' + i[n] + '" value="' + r + '" />') : "cl" == i[n] ? $(t + " .jform").append('<input type="hidden" name="' + i[n] + '" value="' + e + '" />') : $(t + " .jform").append('<input type="hidden" name="' + i[n] + '" value="1" />'))
}
}

function lazzyload() {
var t, e, i;
$("img[data-src]").each(function() {
  if (0, i = $(this), e = $(window).scrollTop() + $(window).height(), t = $(this).offset().top, e >= t && 0 != t && !i.hasClass("imgadded")) {
      var n = i.attr("data-src");
      i.attr("src", n), i.addClass("imgadded"), i.load(function() {
          $(this).hide().fadeIn(300, "", function() {
              $(this).removeAttr("style")
          })
      })
  }
}), $("a[data-href]").each(function() {
  if (0, i = $(this), e = $(window).scrollTop() + $(window).height(), t = $(this).offset().top, e >= t && 0 != t && !i.hasClass("imgadded")) {
      var n = i.attr("data-href");
      i.attr("href", n), i.addClass("imgadded"), i.load(function() {
          $(this).hide().fadeIn(300, "", function() {
              $(this).removeAttr("style")
          })
      })
  }
}), $("[data-img]").each(function() {
  if (0, i = $(this), e = $(window).scrollTop() + $(window).height(), t = $(this).offset().top, e >= t && !i.hasClass("bgadded")) {
      var n = i.attr("data-img");
      i.css("background-image", n), i.addClass("bgadded")
  }
})
}! function(t) {
"use strict";
var e = jQuery.fn.jquery.split(" ")[0].split(".");
if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || e[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
}(),
function(t) {
"use strict";
t.fn.emulateTransitionEnd = function(e) {
  var i = !1,
      n = this;
  t(this).one("bsTransitionEnd", function() {
      i = !0
  });
  return setTimeout(function() {
      i || t(n).trigger(t.support.transition.end)
  }, e), this
}, t(function() {
  t.support.transition = function() {
      var t = document.createElement("bootstrap"),
          e = {
              WebkitTransition: "webkitTransitionEnd",
              MozTransition: "transitionend",
              OTransition: "oTransitionEnd otransitionend",
              transition: "transitionend"
          };
      for (var i in e)
          if (void 0 !== t.style[i]) return {
              end: e[i]
          };
      return !1
  }(), t.support.transition && (t.event.special.bsTransitionEnd = {
      bindType: t.support.transition.end,
      delegateType: t.support.transition.end,
      handle: function(e) {
          if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
      }
  })
})
}(jQuery),
function(t) {
"use strict";
var e = '[data-dismiss="alert"]',
  i = function(i) {
      t(i).on("click", e, this.close)
  };
i.VERSION = "3.3.7", i.TRANSITION_DURATION = 150, i.prototype.close = function(e) {
  function n() {
      a.detach().trigger("closed.bs.alert").remove()
  }
  var s = t(this),
      o = s.attr("data-target");
  o || (o = (o = s.attr("href")) && o.replace(/.*(?=#[^\s]*$)/, ""));
  var a = t("#" === o ? [] : o);
  e && e.preventDefault(), a.length || (a = s.closest(".alert")), a.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (a.removeClass("in"), t.support.transition && a.hasClass("fade") ? a.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n())
};
var n = t.fn.alert;
t.fn.alert = function(e) {
  return this.each(function() {
      var n = t(this),
          s = n.data("bs.alert");
      s || n.data("bs.alert", s = new i(this)), "string" == typeof e && s[e].call(n)
  })
}, t.fn.alert.Constructor = i, t.fn.alert.noConflict = function() {
  return t.fn.alert = n, this
}, t(document).on("click.bs.alert.data-api", e, i.prototype.close)
}(jQuery),
function(t) {
"use strict";

function e(e) {
  return this.each(function() {
      var n = t(this),
          s = n.data("bs.button"),
          o = "object" == typeof e && e;
      s || n.data("bs.button", s = new i(this, o)), "toggle" == e ? s.toggle() : e && s.setState(e)
  })
}
var i = function(e, n) {
  this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, n), this.isLoading = !1
};
i.VERSION = "3.3.7", i.DEFAULTS = {
  loadingText: "loading..."
}, i.prototype.setState = function(e) {
  var i = "disabled",
      n = this.$element,
      s = n.is("input") ? "val" : "html",
      o = n.data();
  e += "Text", null == o.resetText && n.data("resetText", n[s]()), setTimeout(t.proxy(function() {
      n[s](null == o[e] ? this.options[e] : o[e]), "loadingText" == e ? (this.isLoading = !0, n.addClass(i).attr(i, i).prop(i, !0)) : this.isLoading && (this.isLoading = !1, n.removeClass(i).removeAttr(i).prop(i, !1))
  }, this), 0)
}, i.prototype.toggle = function() {
  var t = !0,
      e = this.$element.closest('[data-toggle="buttons"]');
  if (e.length) {
      var i = this.$element.find("input");
      "radio" == i.prop("type") ? (i.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == i.prop("type") && (i.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), i.prop("checked", this.$element.hasClass("active")), t && i.trigger("change")
  } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
};
var n = t.fn.button;
t.fn.button = e, t.fn.button.Constructor = i, t.fn.button.noConflict = function() {
  return t.fn.button = n, this
}, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(i) {
  var n = t(i.target).closest(".btn");
  e.call(n, "toggle"), t(i.target).is('input[type="radio"], input[type="checkbox"]') || (i.preventDefault(), n.is("input,button") ? n.trigger("focus") : n.find("input:visible,button:visible").first().trigger("focus"))
}).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(e) {
  t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
})
}(jQuery),
function(t) {
"use strict";

function e(e) {
  return this.each(function() {
      var n = t(this),
          s = n.data("bs.carousel"),
          o = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e),
          a = "string" == typeof e ? e : o.slide;
      s || n.data("bs.carousel", s = new i(this, o)), "number" == typeof e ? s.to(e) : a ? s[a]() : o.interval && s.pause().cycle()
  })
}
var i = function(e, i) {
  this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = i, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
};
i.VERSION = "3.3.7", i.TRANSITION_DURATION = 600, i.DEFAULTS = {
  interval: 5e3,
  pause: "hover",
  wrap: !0,
  keyboard: !0
}, i.prototype.keydown = function(t) {
  if (!/input|textarea/i.test(t.target.tagName)) {
      switch (t.which) {
          case 37:
              this.prev();
              break;
          case 39:
              this.next();
              break;
          default:
              return
      }
      t.preventDefault()
  }
}, i.prototype.cycle = function(e) {
  return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
}, i.prototype.getItemIndex = function(t) {
  return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
}, i.prototype.getItemForDirection = function(t, e) {
  var i = this.getItemIndex(e);
  if (("prev" == t && 0 === i || "next" == t && i == this.$items.length - 1) && !this.options.wrap) return e;
  var n = (i + ("prev" == t ? -1 : 1)) % this.$items.length;
  return this.$items.eq(n)
}, i.prototype.to = function(t) {
  var e = this,
      i = this.getItemIndex(this.$active = this.$element.find(".item.active"));
  if (!(t > this.$items.length - 1 || t < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function() {
      e.to(t)
  }) : i == t ? this.pause().cycle() : this.slide(t > i ? "next" : "prev", this.$items.eq(t))
}, i.prototype.pause = function(e) {
  return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
}, i.prototype.next = function() {
  if (!this.sliding) return this.slide("next")
}, i.prototype.prev = function() {
  if (!this.sliding) return this.slide("prev")
}, i.prototype.slide = function(e, n) {
  var s = this.$element.find(".item.active"),
      o = n || this.getItemForDirection(e, s),
      a = this.interval,
      r = "next" == e ? "left" : "right",
      l = this;
  if (o.hasClass("active")) return this.sliding = !1;
  var c = o[0],
      h = t.Event("slide.bs.carousel", {
          relatedTarget: c,
          direction: r
      });
  if (this.$element.trigger(h), !h.isDefaultPrevented()) {
      if (this.sliding = !0, a && this.pause(), this.$indicators.length) {
          this.$indicators.find(".active").removeClass("active");
          var u = t(this.$indicators.children()[this.getItemIndex(o)]);
          u && u.addClass("active")
      }
      var d = t.Event("slid.bs.carousel", {
          relatedTarget: c,
          direction: r
      });
      return t.support.transition && this.$element.hasClass("slide") ? (o.addClass(e), o[0].offsetWidth, s.addClass(r), o.addClass(r), s.one("bsTransitionEnd", function() {
          o.removeClass([e, r].join(" ")).addClass("active"), s.removeClass(["active", r].join(" ")), l.sliding = !1, setTimeout(function() {
              l.$element.trigger(d)
          }, 0)
      }).emulateTransitionEnd(i.TRANSITION_DURATION)) : (s.removeClass("active"), o.addClass("active"), this.sliding = !1, this.$element.trigger(d)), a && this.cycle(), this
  }
};
var n = t.fn.carousel;
t.fn.carousel = e, t.fn.carousel.Constructor = i, t.fn.carousel.noConflict = function() {
  return t.fn.carousel = n, this
};
var s = function(i) {
  var n, s = t(this),
      o = t(s.attr("data-target") || (n = s.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, ""));
  if (o.hasClass("carousel")) {
      var a = t.extend({}, o.data(), s.data()),
          r = s.attr("data-slide-to");
      r && (a.interval = !1), e.call(o, a), r && o.data("bs.carousel").to(r), i.preventDefault()
  }
};
t(document).on("click.bs.carousel.data-api", "[data-slide]", s).on("click.bs.carousel.data-api", "[data-slide-to]", s), t(window).on("load", function() {
  t('[data-ride="carousel"]').each(function() {
      var i = t(this);
      e.call(i, i.data())
  })
})
}(jQuery),
function(t) {
"use strict";

function e(e) {
  var i, n = e.attr("data-target") || (i = e.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "");
  return t(n)
}

function i(e) {
  return this.each(function() {
      var i = t(this),
          s = i.data("bs.collapse"),
          o = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e);
      !s && o.toggle && /show|hide/.test(e) && (o.toggle = !1), s || i.data("bs.collapse", s = new n(this, o)), "string" == typeof e && s[e]()
  })
}
var n = function(e, i) {
  this.$element = t(e), this.options = t.extend({}, n.DEFAULTS, i), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
};
n.VERSION = "3.3.7", n.TRANSITION_DURATION = 350, n.DEFAULTS = {
  toggle: !0
}, n.prototype.dimension = function() {
  return this.$element.hasClass("width") ? "width" : "height"
}, n.prototype.show = function() {
  if (!this.transitioning && !this.$element.hasClass("in")) {
      var e, s = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
      if (!(s && s.length && (e = s.data("bs.collapse"), e && e.transitioning))) {
          var o = t.Event("show.bs.collapse");
          if (this.$element.trigger(o), !o.isDefaultPrevented()) {
              s && s.length && (i.call(s, "hide"), e || s.data("bs.collapse", null));
              var a = this.dimension();
              this.$element.removeClass("collapse").addClass("collapsing")[a](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
              var r = function() {
                  this.$element.removeClass("collapsing").addClass("collapse in")[a](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
              };
              if (!t.support.transition) return r.call(this);
              var l = t.camelCase(["scroll", a].join("-"));
              this.$element.one("bsTransitionEnd", t.proxy(r, this)).emulateTransitionEnd(n.TRANSITION_DURATION)[a](this.$element[0][l])
          }
      }
  }
}, n.prototype.hide = function() {
  if (!this.transitioning && this.$element.hasClass("in")) {
      var e = t.Event("hide.bs.collapse");
      if (this.$element.trigger(e), !e.isDefaultPrevented()) {
          var i = this.dimension();
          this.$element[i](this.$element[i]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
          var s = function() {
              this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
          };
          return t.support.transition ? void this.$element[i](0).one("bsTransitionEnd", t.proxy(s, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : s.call(this)
      }
  }
}, n.prototype.toggle = function() {
  this[this.$element.hasClass("in") ? "hide" : "show"]()
}, n.prototype.getParent = function() {
  return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function(i, n) {
      var s = t(n);
      this.addAriaAndCollapsedClass(e(s), s)
  }, this)).end()
}, n.prototype.addAriaAndCollapsedClass = function(t, e) {
  var i = t.hasClass("in");
  t.attr("aria-expanded", i), e.toggleClass("collapsed", !i).attr("aria-expanded", i)
};
var s = t.fn.collapse;
t.fn.collapse = i, t.fn.collapse.Constructor = n, t.fn.collapse.noConflict = function() {
  return t.fn.collapse = s, this
}, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(n) {
  var s = t(this);
  s.attr("data-target") || n.preventDefault();
  var o = e(s),
      a = o.data("bs.collapse") ? "toggle" : s.data();
  i.call(o, a)
})
}(jQuery),
function(t) {
"use strict";

function e(e) {
  var i = e.attr("data-target");
  i || (i = (i = e.attr("href")) && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, ""));
  var n = i && t(i);
  return n && n.length ? n : e.parent()
}

function i(i) {
  i && 3 === i.which || (t(n).remove(), t(s).each(function() {
      var n = t(this),
          s = e(n),
          o = {
              relatedTarget: this
          };
      s.hasClass("open") && (i && "click" == i.type && /input|textarea/i.test(i.target.tagName) && t.contains(s[0], i.target) || (s.trigger(i = t.Event("hide.bs.dropdown", o)), i.isDefaultPrevented() || (n.attr("aria-expanded", "false"), s.removeClass("open").trigger(t.Event("hidden.bs.dropdown", o)))))
  }))
}
var n = ".dropdown-backdrop",
  s = '[data-toggle="dropdown"]',
  o = function(e) {
      t(e).on("click.bs.dropdown", this.toggle)
  };
o.VERSION = "3.3.7", o.prototype.toggle = function(n) {
  var s = t(this);
  if (!s.is(".disabled, :disabled")) {
      var o = e(s),
          a = o.hasClass("open");
      if (i(), !a) {
          "ontouchstart" in document.documentElement && !o.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", i);
          var r = {
              relatedTarget: this
          };
          if (o.trigger(n = t.Event("show.bs.dropdown", r)), n.isDefaultPrevented()) return;
          s.trigger("focus").attr("aria-expanded", "true"), o.toggleClass("open").trigger(t.Event("shown.bs.dropdown", r))
      }
      return !1
  }
}, o.prototype.keydown = function(i) {
  if (/(38|40|27|32)/.test(i.which) && !/input|textarea/i.test(i.target.tagName)) {
      var n = t(this);
      if (i.preventDefault(), i.stopPropagation(), !n.is(".disabled, :disabled")) {
          var o = e(n),
              a = o.hasClass("open");
          if (!a && 27 != i.which || a && 27 == i.which) return 27 == i.which && o.find(s).trigger("focus"), n.trigger("click");
          var r = o.find(".dropdown-menu li:not(.disabled):visible a");
          if (r.length) {
              var l = r.index(i.target);
              38 == i.which && l > 0 && l--, 40 == i.which && l < r.length - 1 && l++, ~l || (l = 0), r.eq(l).trigger("focus")
          }
      }
  }
};
var a = t.fn.dropdown;
t.fn.dropdown = function(e) {
  return this.each(function() {
      var i = t(this),
          n = i.data("bs.dropdown");
      n || i.data("bs.dropdown", n = new o(this)), "string" == typeof e && n[e].call(i)
  })
}, t.fn.dropdown.Constructor = o, t.fn.dropdown.noConflict = function() {
  return t.fn.dropdown = a, this
}, t(document).on("click.bs.dropdown.data-api", i).on("click.bs.dropdown.data-api", ".dropdown form", function(t) {
  t.stopPropagation()
}).on("click.bs.dropdown.data-api", s, o.prototype.toggle).on("keydown.bs.dropdown.data-api", s, o.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", o.prototype.keydown)
}(jQuery),
function(t) {
"use strict";

function e(e, n) {
  return this.each(function() {
      var s = t(this),
          o = s.data("bs.modal"),
          a = t.extend({}, i.DEFAULTS, s.data(), "object" == typeof e && e);
      o || s.data("bs.modal", o = new i(this, a)), "string" == typeof e ? o[e](n) : a.show && o.show(n)
  })
}
var i = function(e, i) {
  this.options = i, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function() {
      this.$element.trigger("loaded.bs.modal")
  }, this))
};
i.VERSION = "3.3.7", i.TRANSITION_DURATION = 300, i.BACKDROP_TRANSITION_DURATION = 150, i.DEFAULTS = {
  backdrop: !0,
  keyboard: !0,
  show: !0
}, i.prototype.toggle = function(t) {
  return this.isShown ? this.hide() : this.show(t)
}, i.prototype.show = function(e) {
  var n = this,
      s = t.Event("show.bs.modal", {
          relatedTarget: e
      });
  this.$element.trigger(s), this.isShown || s.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
      n.$element.one("mouseup.dismiss.bs.modal", function(e) {
          t(e.target).is(n.$element) && (n.ignoreBackdropClick = !0)
      })
  }), this.backdrop(function() {
      var s = t.support.transition && n.$element.hasClass("fade");
      n.$element.parent().length || n.$element.appendTo(n.$body), n.$element.show().scrollTop(0), n.adjustDialog(), s && n.$element[0].offsetWidth, n.$element.addClass("in"), n.enforceFocus();
      var o = t.Event("shown.bs.modal", {
          relatedTarget: e
      });
      s ? n.$dialog.one("bsTransitionEnd", function() {
          n.$element.trigger("focus").trigger(o)
      }).emulateTransitionEnd(i.TRANSITION_DURATION) : n.$element.trigger("focus").trigger(o)
  }))
}, i.prototype.hide = function(e) {
  e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : this.hideModal())
}, i.prototype.enforceFocus = function() {
  t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function(t) {
      document === t.target || this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
  }, this))
}, i.prototype.escape = function() {
  this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function(t) {
      27 == t.which && this.hide()
  }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
}, i.prototype.resize = function() {
  this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
}, i.prototype.hideModal = function() {
  var t = this;
  this.$element.hide(), this.backdrop(function() {
      t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
  })
}, i.prototype.removeBackdrop = function() {
  this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
}, i.prototype.backdrop = function(e) {
  var n = this,
      s = this.$element.hasClass("fade") ? "fade" : "";
  if (this.isShown && this.options.backdrop) {
      var o = t.support.transition && s;
      if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + s).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function(t) {
              return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
          }, this)), o && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
      o ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : e()
  } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass("in");
      var a = function() {
          n.removeBackdrop(), e && e()
      };
      t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", a).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : a()
  } else e && e()
}, i.prototype.handleUpdate = function() {
  this.adjustDialog()
}, i.prototype.adjustDialog = function() {
  var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
  this.$element.css({
      paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
      paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
  })
}, i.prototype.resetAdjustments = function() {
  this.$element.css({
      paddingLeft: "",
      paddingRight: ""
  })
}, i.prototype.checkScrollbar = function() {
  var t = window.innerWidth;
  if (!t) {
      var e = document.documentElement.getBoundingClientRect();
      t = e.right - Math.abs(e.left)
  }
  this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
}, i.prototype.setScrollbar = function() {
  var t = parseInt(this.$body.css("padding-right") || 0, 10);
  this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
}, i.prototype.resetScrollbar = function() {
  this.$body.css("padding-right", this.originalBodyPad)
}, i.prototype.measureScrollbar = function() {
  var t = document.createElement("div");
  t.className = "modal-scrollbar-measure", this.$body.append(t);
  var e = t.offsetWidth - t.clientWidth;
  return this.$body[0].removeChild(t), e
};
var n = t.fn.modal;
t.fn.modal = e, t.fn.modal.Constructor = i, t.fn.modal.noConflict = function() {
  return t.fn.modal = n, this
}, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(i) {
  var n = t(this),
      s = n.attr("href"),
      o = t(n.attr("data-target") || s && s.replace(/.*(?=#[^\s]+$)/, "")),
      a = o.data("bs.modal") ? "toggle" : t.extend({
          remote: !/#/.test(s) && s
      }, o.data(), n.data());
  n.is("a") && i.preventDefault(), o.one("show.bs.modal", function(t) {
      t.isDefaultPrevented() || o.one("hidden.bs.modal", function() {
          n.is(":visible") && n.trigger("focus")
      })
  }), e.call(o, a, this)
})
}(jQuery),
function(t) {
"use strict";
var e = function(t, e) {
  this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e)
};
e.VERSION = "3.3.7", e.TRANSITION_DURATION = 150, e.DEFAULTS = {
  animation: !0,
  placement: "top",
  selector: !1,
  template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
  trigger: "hover focus",
  title: "",
  delay: 0,
  html: !1,
  container: !1,
  viewport: {
      selector: "body",
      padding: 0
  }
}, e.prototype.init = function(e, i, n) {
  if (this.enabled = !0, this.type = e, this.$element = t(i), this.options = this.getOptions(n), this.$viewport = this.options.viewport && t(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
          click: !1,
          hover: !1,
          focus: !1
      }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
  for (var s = this.options.trigger.split(" "), o = s.length; o--;) {
      var a = s[o];
      if ("click" == a) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
      else if ("manual" != a) {
          var r = "hover" == a ? "mouseenter" : "focusin",
              l = "hover" == a ? "mouseleave" : "focusout";
          this.$element.on(r + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
      }
  }
  this.options.selector ? this._options = t.extend({}, this.options, {
      trigger: "manual",
      selector: ""
  }) : this.fixTitle()
}, e.prototype.getDefaults = function() {
  return e.DEFAULTS
}, e.prototype.getOptions = function(e) {
  return (e = t.extend({}, this.getDefaults(), this.$element.data(), e)).delay && "number" == typeof e.delay && (e.delay = {
      show: e.delay,
      hide: e.delay
  }), e
}, e.prototype.getDelegateOptions = function() {
  var e = {},
      i = this.getDefaults();
  return this._options && t.each(this._options, function(t, n) {
      i[t] != n && (e[t] = n)
  }), e
}, e.prototype.enter = function(e) {
  var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
  return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusin" == e.type ? "focus" : "hover"] = !0), i.tip().hasClass("in") || "in" == i.hoverState ? void(i.hoverState = "in") : (clearTimeout(i.timeout), i.hoverState = "in", i.options.delay && i.options.delay.show ? void(i.timeout = setTimeout(function() {
      "in" == i.hoverState && i.show()
  }, i.options.delay.show)) : i.show())
}, e.prototype.isInStateTrue = function() {
  for (var t in this.inState)
      if (this.inState[t]) return !0;
  return !1
}, e.prototype.leave = function(e) {
  var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
  if (i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusout" == e.type ? "focus" : "hover"] = !1), !i.isInStateTrue()) return clearTimeout(i.timeout), i.hoverState = "out", i.options.delay && i.options.delay.hide ? void(i.timeout = setTimeout(function() {
      "out" == i.hoverState && i.hide()
  }, i.options.delay.hide)) : i.hide()
}, e.prototype.show = function() {
  var i = t.Event("show.bs." + this.type);
  if (this.hasContent() && this.enabled) {
      this.$element.trigger(i);
      var n = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
      if (i.isDefaultPrevented() || !n) return;
      var s = this,
          o = this.tip(),
          a = this.getUID(this.type);
      this.setContent(), o.attr("id", a), this.$element.attr("aria-describedby", a), this.options.animation && o.addClass("fade");
      var r = "function" == typeof this.options.placement ? this.options.placement.call(this, o[0], this.$element[0]) : this.options.placement,
          l = /\s?auto?\s?/i,
          c = l.test(r);
      c && (r = r.replace(l, "") || "top"), o.detach().css({
          top: 0,
          left: 0,
          display: "block"
      }).addClass(r).data("bs." + this.type, this), this.options.container ? o.appendTo(this.options.container) : o.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
      var h = this.getPosition(),
          u = o[0].offsetWidth,
          d = o[0].offsetHeight;
      if (c) {
          var p = r,
              f = this.getPosition(this.$viewport);
          r = "bottom" == r && h.bottom + d > f.bottom ? "top" : "top" == r && h.top - d < f.top ? "bottom" : "right" == r && h.right + u > f.width ? "left" : "left" == r && h.left - u < f.left ? "right" : r, o.removeClass(p).addClass(r)
      }
      var m = this.getCalculatedOffset(r, h, u, d);
      this.applyPlacement(m, r);
      var g = function() {
          var t = s.hoverState;
          s.$element.trigger("shown.bs." + s.type), s.hoverState = null, "out" == t && s.leave(s)
      };
      t.support.transition && this.$tip.hasClass("fade") ? o.one("bsTransitionEnd", g).emulateTransitionEnd(e.TRANSITION_DURATION) : g()
  }
}, e.prototype.applyPlacement = function(e, i) {
  var n = this.tip(),
      s = n[0].offsetWidth,
      o = n[0].offsetHeight,
      a = parseInt(n.css("margin-top"), 10),
      r = parseInt(n.css("margin-left"), 10);
  isNaN(a) && (a = 0), isNaN(r) && (r = 0), e.top += a, e.left += r, t.offset.setOffset(n[0], t.extend({
      using: function(t) {
          n.css({
              top: Math.round(t.top),
              left: Math.round(t.left)
          })
      }
  }, e), 0), n.addClass("in");
  var l = n[0].offsetWidth,
      c = n[0].offsetHeight;
  "top" == i && c != o && (e.top = e.top + o - c);
  var h = this.getViewportAdjustedDelta(i, e, l, c);
  h.left ? e.left += h.left : e.top += h.top;
  var u = /top|bottom/.test(i),
      d = u ? 2 * h.left - s + l : 2 * h.top - o + c,
      p = u ? "offsetWidth" : "offsetHeight";
  n.offset(e), this.replaceArrow(d, n[0][p], u)
}, e.prototype.replaceArrow = function(t, e, i) {
  this.arrow().css(i ? "left" : "top", 50 * (1 - t / e) + "%").css(i ? "top" : "left", "")
}, e.prototype.setContent = function() {
  var t = this.tip(),
      e = this.getTitle();
  t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
}, e.prototype.hide = function(i) {
  function n() {
      "in" != s.hoverState && o.detach(), s.$element && s.$element.removeAttr("aria-describedby").trigger("hidden.bs." + s.type), i && i()
  }
  var s = this,
      o = t(this.$tip),
      a = t.Event("hide.bs." + this.type);
  if (this.$element.trigger(a), !a.isDefaultPrevented()) return o.removeClass("in"), t.support.transition && o.hasClass("fade") ? o.one("bsTransitionEnd", n).emulateTransitionEnd(e.TRANSITION_DURATION) : n(), this.hoverState = null, this
}, e.prototype.fixTitle = function() {
  var t = this.$element;
  (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
}, e.prototype.hasContent = function() {
  return this.getTitle()
}, e.prototype.getPosition = function(e) {
  var i = (e = e || this.$element)[0],
      n = "BODY" == i.tagName,
      s = i.getBoundingClientRect();
  null == s.width && (s = t.extend({}, s, {
      width: s.right - s.left,
      height: s.bottom - s.top
  }));
  var o = window.SVGElement && i instanceof window.SVGElement,
      a = n ? {
          top: 0,
          left: 0
      } : o ? null : e.offset(),
      r = {
          scroll: n ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
      },
      l = n ? {
          width: t(window).width(),
          height: t(window).height()
      } : null;
  return t.extend({}, s, r, l, a)
}, e.prototype.getCalculatedOffset = function(t, e, i, n) {
  return "bottom" == t ? {
      top: e.top + e.height,
      left: e.left + e.width / 2 - i / 2
  } : "top" == t ? {
      top: e.top - n,
      left: e.left + e.width / 2 - i / 2
  } : "left" == t ? {
      top: e.top + e.height / 2 - n / 2,
      left: e.left - i
  } : {
      top: e.top + e.height / 2 - n / 2,
      left: e.left + e.width
  }
}, e.prototype.getViewportAdjustedDelta = function(t, e, i, n) {
  var s = {
      top: 0,
      left: 0
  };
  if (!this.$viewport) return s;
  var o = this.options.viewport && this.options.viewport.padding || 0,
      a = this.getPosition(this.$viewport);
  if (/right|left/.test(t)) {
      var r = e.top - o - a.scroll,
          l = e.top + o - a.scroll + n;
      r < a.top ? s.top = a.top - r : l > a.top + a.height && (s.top = a.top + a.height - l)
  } else {
      var c = e.left - o,
          h = e.left + o + i;
      c < a.left ? s.left = a.left - c : h > a.right && (s.left = a.left + a.width - h)
  }
  return s
}, e.prototype.getTitle = function() {
  var t = this.$element,
      e = this.options;
  return t.attr("data-original-title") || ("function" == typeof e.title ? e.title.call(t[0]) : e.title)
}, e.prototype.getUID = function(t) {
  do {
      t += ~~(1e6 * Math.random())
  } while (document.getElementById(t));
  return t
}, e.prototype.tip = function() {
  if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
  return this.$tip
}, e.prototype.arrow = function() {
  return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
}, e.prototype.enable = function() {
  this.enabled = !0
}, e.prototype.disable = function() {
  this.enabled = !1
}, e.prototype.toggleEnabled = function() {
  this.enabled = !this.enabled
}, e.prototype.toggle = function(e) {
  var i = this;
  e && ((i = t(e.currentTarget).data("bs." + this.type)) || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i))), e ? (i.inState.click = !i.inState.click, i.isInStateTrue() ? i.enter(i) : i.leave(i)) : i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
}, e.prototype.destroy = function() {
  var t = this;
  clearTimeout(this.timeout), this.hide(function() {
      t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null, t.$element = null
  })
};
var i = t.fn.tooltip;
t.fn.tooltip = function(i) {
  return this.each(function() {
      var n = t(this),
          s = n.data("bs.tooltip"),
          o = "object" == typeof i && i;
      !s && /destroy|hide/.test(i) || (s || n.data("bs.tooltip", s = new e(this, o)), "string" == typeof i && s[i]())
  })
}, t.fn.tooltip.Constructor = e, t.fn.tooltip.noConflict = function() {
  return t.fn.tooltip = i, this
}
}(jQuery),
function(t) {
"use strict";
var e = function(t, e) {
  this.init("popover", t, e)
};
if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
e.VERSION = "3.3.7", e.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
  placement: "right",
  trigger: "click",
  content: "",
  template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
}), e.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), e.prototype.constructor = e, e.prototype.getDefaults = function() {
  return e.DEFAULTS
}, e.prototype.setContent = function() {
  var t = this.tip(),
      e = this.getTitle(),
      i = this.getContent();
  t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof i ? "html" : "append" : "text"](i), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
}, e.prototype.hasContent = function() {
  return this.getTitle() || this.getContent()
}, e.prototype.getContent = function() {
  var t = this.$element,
      e = this.options;
  return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
}, e.prototype.arrow = function() {
  return this.$arrow = this.$arrow || this.tip().find(".arrow")
};
var i = t.fn.popover;
t.fn.popover = function(i) {
  return this.each(function() {
      var n = t(this),
          s = n.data("bs.popover"),
          o = "object" == typeof i && i;
      !s && /destroy|hide/.test(i) || (s || n.data("bs.popover", s = new e(this, o)), "string" == typeof i && s[i]())
  })
}, t.fn.popover.Constructor = e, t.fn.popover.noConflict = function() {
  return t.fn.popover = i, this
}
}(jQuery),
function(t) {
"use strict";

function e(i, n) {
  this.$body = t(document.body), this.$scrollElement = t(t(i).is(document.body) ? window : i), this.options = t.extend({}, e.DEFAULTS, n), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process()
}

function i(i) {
  return this.each(function() {
      var n = t(this),
          s = n.data("bs.scrollspy"),
          o = "object" == typeof i && i;
      s || n.data("bs.scrollspy", s = new e(this, o)), "string" == typeof i && s[i]()
  })
}
e.VERSION = "3.3.7", e.DEFAULTS = {
  offset: 10
}, e.prototype.getScrollHeight = function() {
  return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
}, e.prototype.refresh = function() {
  var e = this,
      i = "offset",
      n = 0;
  this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (i = "position", n = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
      var e = t(this),
          s = e.data("target") || e.attr("href"),
          o = /^#./.test(s) && t(s);
      return o && o.length && o.is(":visible") && [
          [o[i]().top + n, s]
      ] || null
  }).sort(function(t, e) {
      return t[0] - e[0]
  }).each(function() {
      e.offsets.push(this[0]), e.targets.push(this[1])
  })
}, e.prototype.process = function() {
  var t, e = this.$scrollElement.scrollTop() + this.options.offset,
      i = this.getScrollHeight(),
      n = this.options.offset + i - this.$scrollElement.height(),
      s = this.offsets,
      o = this.targets,
      a = this.activeTarget;
  if (this.scrollHeight != i && this.refresh(), e >= n) return a != (t = o[o.length - 1]) && this.activate(t);
  if (a && e < s[0]) return this.activeTarget = null, this.clear();
  for (t = s.length; t--;) a != o[t] && e >= s[t] && (void 0 === s[t + 1] || e < s[t + 1]) && this.activate(o[t])
}, e.prototype.activate = function(e) {
  this.activeTarget = e, this.clear();
  var i = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
      n = t(i).parents("li").addClass("active");
  n.parent(".dropdown-menu").length && (n = n.closest("li.dropdown").addClass("active")), n.trigger("activate.bs.scrollspy")
}, e.prototype.clear = function() {
  t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
};
var n = t.fn.scrollspy;
t.fn.scrollspy = i, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function() {
  return t.fn.scrollspy = n, this
}, t(window).on("load.bs.scrollspy.data-api", function() {
  t('[data-spy="scroll"]').each(function() {
      var e = t(this);
      i.call(e, e.data())
  })
})
}(jQuery),
function(t) {
"use strict";

function e(e) {
  return this.each(function() {
      var n = t(this),
          s = n.data("bs.tab");
      s || n.data("bs.tab", s = new i(this)), "string" == typeof e && s[e]()
  })
}
var i = function(e) {
  this.element = t(e)
};
i.VERSION = "3.3.7", i.TRANSITION_DURATION = 150, i.prototype.show = function() {
  var e = this.element,
      i = e.closest("ul:not(.dropdown-menu)"),
      n = e.data("target");
  if (n || (n = (n = e.attr("href")) && n.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
      var s = i.find(".active:last a"),
          o = t.Event("hide.bs.tab", {
              relatedTarget: e[0]
          }),
          a = t.Event("show.bs.tab", {
              relatedTarget: s[0]
          });
      if (s.trigger(o), e.trigger(a), !a.isDefaultPrevented() && !o.isDefaultPrevented()) {
          var r = t(n);
          this.activate(e.closest("li"), i), this.activate(r, r.parent(), function() {
              s.trigger({
                  type: "hidden.bs.tab",
                  relatedTarget: e[0]
              }), e.trigger({
                  type: "shown.bs.tab",
                  relatedTarget: s[0]
              })
          })
      }
  }
}, i.prototype.activate = function(e, n, s) {
  function o() {
      a.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), r ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), s && s()
  }
  var a = n.find("> .active"),
      r = s && t.support.transition && (a.length && a.hasClass("fade") || !!n.find("> .fade").length);
  a.length && r ? a.one("bsTransitionEnd", o).emulateTransitionEnd(i.TRANSITION_DURATION) : o(), a.removeClass("in")
};
var n = t.fn.tab;
t.fn.tab = e, t.fn.tab.Constructor = i, t.fn.tab.noConflict = function() {
  return t.fn.tab = n, this
};
var s = function(i) {
  i.preventDefault(), e.call(t(this), "show")
};
t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', s).on("click.bs.tab.data-api", '[data-toggle="pill"]', s)
}(jQuery),
function(t) {
"use strict";

function e(e) {
  return this.each(function() {
      var n = t(this),
          s = n.data("bs.affix"),
          o = "object" == typeof e && e;
      s || n.data("bs.affix", s = new i(this, o)), "string" == typeof e && s[e]()
  })
}
var i = function(e, n) {
  this.options = t.extend({}, i.DEFAULTS, n), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
};
i.VERSION = "3.3.7", i.RESET = "affix affix-top affix-bottom", i.DEFAULTS = {
  offset: 0,
  target: window
}, i.prototype.getState = function(t, e, i, n) {
  var s = this.$target.scrollTop(),
      o = this.$element.offset(),
      a = this.$target.height();
  if (null != i && "top" == this.affixed) return s < i && "top";
  if ("bottom" == this.affixed) return null != i ? !(s + this.unpin <= o.top) && "bottom" : !(s + a <= t - n) && "bottom";
  var r = null == this.affixed,
      l = r ? s : o.top;
  return null != i && s <= i ? "top" : null != n && l + (r ? a : e) >= t - n && "bottom"
}, i.prototype.getPinnedOffset = function() {
  if (this.pinnedOffset) return this.pinnedOffset;
  this.$element.removeClass(i.RESET).addClass("affix");
  var t = this.$target.scrollTop(),
      e = this.$element.offset();
  return this.pinnedOffset = e.top - t
}, i.prototype.checkPositionWithEventLoop = function() {
  setTimeout(t.proxy(this.checkPosition, this), 1)
}, i.prototype.checkPosition = function() {
  if (this.$element.is(":visible")) {
      var e = this.$element.height(),
          n = this.options.offset,
          s = n.top,
          o = n.bottom,
          a = Math.max(t(document).height(), t(document.body).height());
      "object" != typeof n && (o = s = n), "function" == typeof s && (s = n.top(this.$element)), "function" == typeof o && (o = n.bottom(this.$element));
      var r = this.getState(a, e, s, o);
      if (this.affixed != r) {
          null != this.unpin && this.$element.css("top", "");
          var l = "affix" + (r ? "-" + r : ""),
              c = t.Event(l + ".bs.affix");
          if (this.$element.trigger(c), c.isDefaultPrevented()) return;
          this.affixed = r, this.unpin = "bottom" == r ? this.getPinnedOffset() : null, this.$element.removeClass(i.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
      }
      "bottom" == r && this.$element.offset({
          top: a - e - o
      })
  }
};
var n = t.fn.affix;
t.fn.affix = e, t.fn.affix.Constructor = i, t.fn.affix.noConflict = function() {
  return t.fn.affix = n, this
}, t(window).on("load", function() {
  t('[data-spy="affix"]').each(function() {
      var i = t(this),
          n = i.data();
      n.offset = n.offset || {}, null != n.offsetBottom && (n.offset.bottom = n.offsetBottom), null != n.offsetTop && (n.offset.top = n.offsetTop), e.call(i, n)
  })
})
}(jQuery),
function(t) {
"function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
}(function(t) {
function e() {
  this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
      closeText: "Done",
      prevText: "Prev",
      nextText: "Next",
      currentText: "Today",
      monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
      weekHeader: "Wk",
      dateFormat: "mm/dd/yy",
      firstDay: 0,
      isRTL: !1,
      showMonthAfterYear: !1,
      yearSuffix: ""
  }, this._defaults = {
      showOn: "focus",
      showAnim: "fadeIn",
      showOptions: {},
      defaultDate: null,
      appendText: "",
      buttonText: "...",
      buttonImage: "",
      buttonImageOnly: !1,
      hideIfNoPrevNext: !1,
      navigationAsDateFormat: !1,
      gotoCurrent: !1,
      changeMonth: !1,
      changeYear: !1,
      yearRange: "c-10:c+10",
      showOtherMonths: !1,
      selectOtherMonths: !1,
      showWeek: !1,
      calculateWeek: this.iso8601Week,
      shortYearCutoff: "+10",
      minDate: null,
      maxDate: null,
      duration: "fast",
      beforeShowDay: null,
      beforeShow: null,
      onSelect: null,
      onChangeMonthYear: null,
      onClose: null,
      numberOfMonths: 1,
      showCurrentAtPos: 0,
      stepMonths: 1,
      stepBigMonths: 12,
      altField: "",
      altFormat: "",
      constrainInput: !0,
      showButtonPanel: !1,
      autoSize: !1,
      disabled: !1
  }, t.extend(this._defaults, this.regional[""]), this.regional.en = t.extend(!0, {}, this.regional[""]), this.regional["en-US"] = t.extend(!0, {}, this.regional.en), this.dpDiv = i(t("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
}

function i(e) {
  var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
  return e.on("mouseout", i, function() {
      t(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).removeClass("ui-datepicker-next-hover")
  }).on("mouseover", i, n)
}

function n() {
  t.datepicker._isDisabledDatepicker(d.inline ? d.dpDiv.parent()[0] : d.input[0]) || (t(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), t(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).addClass("ui-datepicker-next-hover"))
}

function s(e, i) {
  for (var n in t.extend(e, i), i) null == i[n] && (e[n] = i[n]);
  return e
}

function o(t) {
  return function() {
      var e = this.element.val();
      t.apply(this, arguments), this._refresh(), e !== this.element.val() && this._trigger("change")
  }
}
t.ui = t.ui || {}, t.ui.version = "1.12.1";
var a = 0,
  r = Array.prototype.slice;
t.cleanData = function(e) {
      return function(i) {
          var n, s, o;
          for (o = 0; null != (s = i[o]); o++) try {
              (n = t._data(s, "events")) && n.remove && t(s).triggerHandler("remove")
          } catch (t) {}
          e(i)
      }
  }(t.cleanData), t.widget = function(e, i, n) {
      var s, o, a, r = {},
          l = e.split(".")[0],
          c = l + "-" + (e = e.split(".")[1]);
      return n || (n = i, i = t.Widget), t.isArray(n) && (n = t.extend.apply(null, [{}].concat(n))), t.expr[":"][c.toLowerCase()] = function(e) {
          return !!t.data(e, c)
      }, t[l] = t[l] || {}, s = t[l][e], o = t[l][e] = function(t, e) {
          return this._createWidget ? void(arguments.length && this._createWidget(t, e)) : new o(t, e)
      }, t.extend(o, s, {
          version: n.version,
          _proto: t.extend({}, n),
          _childConstructors: []
      }), (a = new i).options = t.widget.extend({}, a.options), t.each(n, function(e, n) {
          return t.isFunction(n) ? void(r[e] = function() {
              function t() {
                  return i.prototype[e].apply(this, arguments)
              }

              function s(t) {
                  return i.prototype[e].apply(this, t)
              }
              return function() {
                  var e, i = this._super,
                      o = this._superApply;
                  return this._super = t, this._superApply = s, e = n.apply(this, arguments), this._super = i, this._superApply = o, e
              }
          }()) : void(r[e] = n)
      }), o.prototype = t.widget.extend(a, {
          widgetEventPrefix: s && a.widgetEventPrefix || e
      }, r, {
          constructor: o,
          namespace: l,
          widgetName: e,
          widgetFullName: c
      }), s ? (t.each(s._childConstructors, function(e, i) {
          var n = i.prototype;
          t.widget(n.namespace + "." + n.widgetName, o, i._proto)
      }), delete s._childConstructors) : i._childConstructors.push(o), t.widget.bridge(e, o), o
  }, t.widget.extend = function(e) {
      for (var i, n, s = r.call(arguments, 1), o = 0, a = s.length; a > o; o++)
          for (i in s[o]) n = s[o][i], s[o].hasOwnProperty(i) && void 0 !== n && (e[i] = t.isPlainObject(n) ? t.isPlainObject(e[i]) ? t.widget.extend({}, e[i], n) : t.widget.extend({}, n) : n);
      return e
  }, t.widget.bridge = function(e, i) {
      var n = i.prototype.widgetFullName || e;
      t.fn[e] = function(s) {
          var o = "string" == typeof s,
              a = r.call(arguments, 1),
              l = this;
          return o ? this.length || "instance" !== s ? this.each(function() {
              var i, o = t.data(this, n);
              return "instance" === s ? (l = o, !1) : o ? t.isFunction(o[s]) && "_" !== s.charAt(0) ? (i = o[s].apply(o, a)) !== o && void 0 !== i ? (l = i && i.jquery ? l.pushStack(i.get()) : i, !1) : void 0 : t.error("no such method '" + s + "' for " + e + " widget instance") : t.error("cannot call methods on " + e + " prior to initialization; attempted to call method '" + s + "'")
          }) : l = void 0 : (a.length && (s = t.widget.extend.apply(null, [s].concat(a))), this.each(function() {
              var e = t.data(this, n);
              e ? (e.option(s || {}), e._init && e._init()) : t.data(this, n, new i(s, this))
          })), l
      }
  }, t.Widget = function() {}, t.Widget._childConstructors = [], t.Widget.prototype = {
      widgetName: "widget",
      widgetEventPrefix: "",
      defaultElement: "<div>",
      options: {
          classes: {},
          disabled: !1,
          create: null
      },
      _createWidget: function(e, i) {
          i = t(i || this.defaultElement || this)[0], this.element = t(i), this.uuid = a++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = t(), this.hoverable = t(), this.focusable = t(), this.classesElementLookup = {}, i !== this && (t.data(i, this.widgetFullName, this), this._on(!0, this.element, {
              remove: function(t) {
                  t.target === i && this.destroy()
              }
          }), this.document = t(i.style ? i.ownerDocument : i.document || i), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e), this._create(), this.options.disabled && this._setOptionDisabled(this.options.disabled), this._trigger("create", null, this._getCreateEventData()), this._init()
      },
      _getCreateOptions: function() {
          return {}
      },
      _getCreateEventData: t.noop,
      _create: t.noop,
      _init: t.noop,
      destroy: function() {
          var e = this;
          this._destroy(), t.each(this.classesElementLookup, function(t, i) {
              e._removeClass(i, t)
          }), this.element.off(this.eventNamespace).removeData(this.widgetFullName), this.widget().off(this.eventNamespace).removeAttr("aria-disabled"), this.bindings.off(this.eventNamespace)
      },
      _destroy: t.noop,
      widget: function() {
          return this.element
      },
      option: function(e, i) {
          var n, s, o, a = e;
          if (0 === arguments.length) return t.widget.extend({}, this.options);
          if ("string" == typeof e)
              if (a = {}, n = e.split("."), e = n.shift(), n.length) {
                  for (s = a[e] = t.widget.extend({}, this.options[e]), o = 0; n.length - 1 > o; o++) s[n[o]] = s[n[o]] || {}, s = s[n[o]];
                  if (e = n.pop(), 1 === arguments.length) return void 0 === s[e] ? null : s[e];
                  s[e] = i
              } else {
                  if (1 === arguments.length) return void 0 === this.options[e] ? null : this.options[e];
                  a[e] = i
              }
          return this._setOptions(a), this
      },
      _setOptions: function(t) {
          var e;
          for (e in t) this._setOption(e, t[e]);
          return this
      },
      _setOption: function(t, e) {
          return "classes" === t && this._setOptionClasses(e), this.options[t] = e, "disabled" === t && this._setOptionDisabled(e), this
      },
      _setOptionClasses: function(e) {
          var i, n, s;
          for (i in e) s = this.classesElementLookup[i], e[i] !== this.options.classes[i] && s && s.length && (n = t(s.get()), this._removeClass(s, i), n.addClass(this._classes({
              element: n,
              keys: i,
              classes: e,
              add: !0
          })))
      },
      _setOptionDisabled: function(t) {
          this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!t), t && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus"))
      },
      enable: function() {
          return this._setOptions({
              disabled: !1
          })
      },
      disable: function() {
          return this._setOptions({
              disabled: !0
          })
      },
      _classes: function(e) {
          function i(i, o) {
              var a, r;
              for (r = 0; i.length > r; r++) a = s.classesElementLookup[i[r]] || t(), a = e.add ? t(t.unique(a.get().concat(e.element.get()))) : t(a.not(e.element).get()), s.classesElementLookup[i[r]] = a, n.push(i[r]), o && e.classes[i[r]] && n.push(e.classes[i[r]])
          }
          var n = [],
              s = this;
          return e = t.extend({
              element: this.element,
              classes: this.options.classes || {}
          }, e), this._on(e.element, {
              remove: "_untrackClassesElement"
          }), e.keys && i(e.keys.match(/\S+/g) || [], !0), e.extra && i(e.extra.match(/\S+/g) || []), n.join(" ")
      },
      _untrackClassesElement: function(e) {
          var i = this;
          t.each(i.classesElementLookup, function(n, s) {
              -1 !== t.inArray(e.target, s) && (i.classesElementLookup[n] = t(s.not(e.target).get()))
          })
      },
      _removeClass: function(t, e, i) {
          return this._toggleClass(t, e, i, !1)
      },
      _addClass: function(t, e, i) {
          return this._toggleClass(t, e, i, !0)
      },
      _toggleClass: function(t, e, i, n) {
          n = "boolean" == typeof n ? n : i;
          var s = "string" == typeof t || null === t,
              o = {
                  extra: s ? e : i,
                  keys: s ? t : e,
                  element: s ? this.element : t,
                  add: n
              };
          return o.element.toggleClass(this._classes(o), n), this
      },
      _on: function(e, i, n) {
          var s, o = this;
          "boolean" != typeof e && (n = i, i = e, e = !1), n ? (i = s = t(i), this.bindings = this.bindings.add(i)) : (n = i, i = this.element, s = this.widget()), t.each(n, function(n, a) {
              function r() {
                  return e || !0 !== o.options.disabled && !t(this).hasClass("ui-state-disabled") ? ("string" == typeof a ? o[a] : a).apply(o, arguments) : void 0
              }
              "string" != typeof a && (r.guid = a.guid = a.guid || r.guid || t.guid++);
              var l = n.match(/^([\w:-]*)\s*(.*)$/),
                  c = l[1] + o.eventNamespace,
                  h = l[2];
              h ? s.on(c, h, r) : i.on(c, r)
          })
      },
      _off: function(e, i) {
          i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.off(i).off(i), this.bindings = t(this.bindings.not(e).get()), this.focusable = t(this.focusable.not(e).get()), this.hoverable = t(this.hoverable.not(e).get())
      },
      _delay: function(t, e) {
          var i = this;
          return setTimeout(function() {
              return ("string" == typeof t ? i[t] : t).apply(i, arguments)
          }, e || 0)
      },
      _hoverable: function(e) {
          this.hoverable = this.hoverable.add(e), this._on(e, {
              mouseenter: function(e) {
                  this._addClass(t(e.currentTarget), null, "ui-state-hover")
              },
              mouseleave: function(e) {
                  this._removeClass(t(e.currentTarget), null, "ui-state-hover")
              }
          })
      },
      _focusable: function(e) {
          this.focusable = this.focusable.add(e), this._on(e, {
              focusin: function(e) {
                  this._addClass(t(e.currentTarget), null, "ui-state-focus")
              },
              focusout: function(e) {
                  this._removeClass(t(e.currentTarget), null, "ui-state-focus")
              }
          })
      },
      _trigger: function(e, i, n) {
          var s, o, a = this.options[e];
          if (n = n || {}, (i = t.Event(i)).type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), i.target = this.element[0], o = i.originalEvent)
              for (s in o) s in i || (i[s] = o[s]);
          return this.element.trigger(i, n), !(t.isFunction(a) && !1 === a.apply(this.element[0], [i].concat(n)) || i.isDefaultPrevented())
      }
  }, t.each({
      show: "fadeIn",
      hide: "fadeOut"
  }, function(e, i) {
      t.Widget.prototype["_" + e] = function(n, s, o) {
          "string" == typeof s && (s = {
              effect: s
          });
          var a, r = s ? !0 === s || "number" == typeof s ? i : s.effect || i : e;
          "number" == typeof(s = s || {}) && (s = {
              duration: s
          }), a = !t.isEmptyObject(s), s.complete = o, s.delay && n.delay(s.delay), a && t.effects && t.effects.effect[r] ? n[e](s) : r !== e && n[r] ? n[r](s.duration, s.easing, o) : n.queue(function(i) {
              t(this)[e](), o && o.call(n[0]), i()
          })
      }
  }), t.widget,
  function() {
      function e(t, e, i) {
          return [parseFloat(t[0]) * (h.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (h.test(t[1]) ? i / 100 : 1)]
      }

      function i(e, i) {
          return parseInt(t.css(e, i), 10) || 0
      }
      var n, s = Math.max,
          o = Math.abs,
          a = /left|center|right/,
          r = /top|center|bottom/,
          l = /[\+\-]\d+(\.[\d]+)?%?/,
          c = /^\w+/,
          h = /%$/,
          u = t.fn.position;
      t.position = {
          scrollbarWidth: function() {
              if (void 0 !== n) return n;
              var e, i, s = t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                  o = s.children()[0];
              return t("body").append(s), e = o.offsetWidth, s.css("overflow", "scroll"), e === (i = o.offsetWidth) && (i = s[0].clientWidth), s.remove(), n = e - i
          },
          getScrollInfo: function(e) {
              var i = e.isWindow || e.isDocument ? "" : e.element.css("overflow-x"),
                  n = e.isWindow || e.isDocument ? "" : e.element.css("overflow-y"),
                  s = "scroll" === i || "auto" === i && e.width < e.element[0].scrollWidth;
              return {
                  width: "scroll" === n || "auto" === n && e.height < e.element[0].scrollHeight ? t.position.scrollbarWidth() : 0,
                  height: s ? t.position.scrollbarWidth() : 0
              }
          },
          getWithinInfo: function(e) {
              var i = t(e || window),
                  n = t.isWindow(i[0]),
                  s = !!i[0] && 9 === i[0].nodeType;
              return {
                  element: i,
                  isWindow: n,
                  isDocument: s,
                  offset: !n && !s ? t(e).offset() : {
                      left: 0,
                      top: 0
                  },
                  scrollLeft: i.scrollLeft(),
                  scrollTop: i.scrollTop(),
                  width: i.outerWidth(),
                  height: i.outerHeight()
              }
          }
      }, t.fn.position = function(n) {
          if (!n || !n.of) return u.apply(this, arguments);
          n = t.extend({}, n);
          var h, d, p, f, m, g, v = t(n.of),
              y = t.position.getWithinInfo(n.within),
              b = t.position.getScrollInfo(y),
              _ = (n.collision || "flip").split(" "),
              w = {};
          return g = function(e) {
              var i = e[0];
              return 9 === i.nodeType ? {
                  width: e.width(),
                  height: e.height(),
                  offset: {
                      top: 0,
                      left: 0
                  }
              } : t.isWindow(i) ? {
                  width: e.width(),
                  height: e.height(),
                  offset: {
                      top: e.scrollTop(),
                      left: e.scrollLeft()
                  }
              } : i.preventDefault ? {
                  width: 0,
                  height: 0,
                  offset: {
                      top: i.pageY,
                      left: i.pageX
                  }
              } : {
                  width: e.outerWidth(),
                  height: e.outerHeight(),
                  offset: e.offset()
              }
          }(v), v[0].preventDefault && (n.at = "left top"), d = g.width, p = g.height, f = g.offset, m = t.extend({}, f), t.each(["my", "at"], function() {
              var t, e, i = (n[this] || "").split(" ");
              1 === i.length && (i = a.test(i[0]) ? i.concat(["center"]) : r.test(i[0]) ? ["center"].concat(i) : ["center", "center"]), i[0] = a.test(i[0]) ? i[0] : "center", i[1] = r.test(i[1]) ? i[1] : "center", t = l.exec(i[0]), e = l.exec(i[1]), w[this] = [t ? t[0] : 0, e ? e[0] : 0], n[this] = [c.exec(i[0])[0], c.exec(i[1])[0]]
          }), 1 === _.length && (_[1] = _[0]), "right" === n.at[0] ? m.left += d : "center" === n.at[0] && (m.left += d / 2), "bottom" === n.at[1] ? m.top += p : "center" === n.at[1] && (m.top += p / 2), h = e(w.at, d, p), m.left += h[0], m.top += h[1], this.each(function() {
              var a, r, l = t(this),
                  c = l.outerWidth(),
                  u = l.outerHeight(),
                  g = i(this, "marginLeft"),
                  x = i(this, "marginTop"),
                  C = c + g + i(this, "marginRight") + b.width,
                  k = u + x + i(this, "marginBottom") + b.height,
                  S = t.extend({}, m),
                  T = e(w.my, l.outerWidth(), l.outerHeight());
              "right" === n.my[0] ? S.left -= c : "center" === n.my[0] && (S.left -= c / 2), "bottom" === n.my[1] ? S.top -= u : "center" === n.my[1] && (S.top -= u / 2), S.left += T[0], S.top += T[1], a = {
                  marginLeft: g,
                  marginTop: x
              }, t.each(["left", "top"], function(e, i) {
                  t.ui.position[_[e]] && t.ui.position[_[e]][i](S, {
                      targetWidth: d,
                      targetHeight: p,
                      elemWidth: c,
                      elemHeight: u,
                      collisionPosition: a,
                      collisionWidth: C,
                      collisionHeight: k,
                      offset: [h[0] + T[0], h[1] + T[1]],
                      my: n.my,
                      at: n.at,
                      within: y,
                      elem: l
                  })
              }), n.using && (r = function(t) {
                  var e = f.left - S.left,
                      i = e + d - c,
                      a = f.top - S.top,
                      r = a + p - u,
                      h = {
                          target: {
                              element: v,
                              left: f.left,
                              top: f.top,
                              width: d,
                              height: p
                          },
                          element: {
                              element: l,
                              left: S.left,
                              top: S.top,
                              width: c,
                              height: u
                          },
                          horizontal: 0 > i ? "left" : e > 0 ? "right" : "center",
                          vertical: 0 > r ? "top" : a > 0 ? "bottom" : "middle"
                      };
                  c > d && d > o(e + i) && (h.horizontal = "center"), u > p && p > o(a + r) && (h.vertical = "middle"), h.important = s(o(e), o(i)) > s(o(a), o(r)) ? "horizontal" : "vertical", n.using.call(this, t, h)
              }), l.offset(t.extend(S, {
                  using: r
              }))
          })
      }, t.ui.position = {
          fit: {
              left: function(t, e) {
                  var i, n = e.within,
                      o = n.isWindow ? n.scrollLeft : n.offset.left,
                      a = n.width,
                      r = t.left - e.collisionPosition.marginLeft,
                      l = o - r,
                      c = r + e.collisionWidth - a - o;
                  e.collisionWidth > a ? l > 0 && 0 >= c ? (i = t.left + l + e.collisionWidth - a - o, t.left += l - i) : t.left = c > 0 && 0 >= l ? o : l > c ? o + a - e.collisionWidth : o : l > 0 ? t.left += l : c > 0 ? t.left -= c : t.left = s(t.left - r, t.left)
              },
              top: function(t, e) {
                  var i, n = e.within,
                      o = n.isWindow ? n.scrollTop : n.offset.top,
                      a = e.within.height,
                      r = t.top - e.collisionPosition.marginTop,
                      l = o - r,
                      c = r + e.collisionHeight - a - o;
                  e.collisionHeight > a ? l > 0 && 0 >= c ? (i = t.top + l + e.collisionHeight - a - o, t.top += l - i) : t.top = c > 0 && 0 >= l ? o : l > c ? o + a - e.collisionHeight : o : l > 0 ? t.top += l : c > 0 ? t.top -= c : t.top = s(t.top - r, t.top)
              }
          },
          flip: {
              left: function(t, e) {
                  var i, n, s = e.within,
                      a = s.offset.left + s.scrollLeft,
                      r = s.width,
                      l = s.isWindow ? s.scrollLeft : s.offset.left,
                      c = t.left - e.collisionPosition.marginLeft,
                      h = c - l,
                      u = c + e.collisionWidth - r - l,
                      d = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0,
                      p = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0,
                      f = -2 * e.offset[0];
                  0 > h ? (0 > (i = t.left + d + p + f + e.collisionWidth - r - a) || o(h) > i) && (t.left += d + p + f) : u > 0 && (((n = t.left - e.collisionPosition.marginLeft + d + p + f - l) > 0 || u > o(n)) && (t.left += d + p + f))
              },
              top: function(t, e) {
                  var i, n, s = e.within,
                      a = s.offset.top + s.scrollTop,
                      r = s.height,
                      l = s.isWindow ? s.scrollTop : s.offset.top,
                      c = t.top - e.collisionPosition.marginTop,
                      h = c - l,
                      u = c + e.collisionHeight - r - l,
                      d = "top" === e.my[1] ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0,
                      p = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0,
                      f = -2 * e.offset[1];
                  0 > h ? (0 > (n = t.top + d + p + f + e.collisionHeight - r - a) || o(h) > n) && (t.top += d + p + f) : u > 0 && (((i = t.top - e.collisionPosition.marginTop + d + p + f - l) > 0 || u > o(i)) && (t.top += d + p + f))
              }
          },
          flipfit: {
              left: function() {
                  t.ui.position.flip.left.apply(this, arguments), t.ui.position.fit.left.apply(this, arguments)
              },
              top: function() {
                  t.ui.position.flip.top.apply(this, arguments), t.ui.position.fit.top.apply(this, arguments)
              }
          }
      }
  }(), t.ui.position, t.extend(t.expr[":"], {
      data: t.expr.createPseudo ? t.expr.createPseudo(function(e) {
          return function(i) {
              return !!t.data(i, e)
          }
      }) : function(e, i, n) {
          return !!t.data(e, n[3])
      }
  }), t.fn.extend({
      disableSelection: function() {
          var t = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
          return function() {
              return this.on(t + ".ui-disableSelection", function(t) {
                  t.preventDefault()
              })
          }
      }(),
      enableSelection: function() {
          return this.off(".ui-disableSelection")
      }
  });
var l = "ui-effects-",
  c = "ui-effects-style",
  h = "ui-effects-animated",
  u = t;
t.effects = {
      effect: {}
  },
  function(t, e) {
      function i(t, e, i) {
          var n = h[e.type] || {};
          return null == t ? i || !e.def ? null : e.def : (t = n.floor ? ~~t : parseFloat(t), isNaN(t) ? e.def : n.mod ? (t + n.mod) % n.mod : 0 > t ? 0 : t > n.max ? n.max : t)
      }

      function n(i) {
          var n = l(),
              s = n._rgba = [];
          return i = i.toLowerCase(), p(r, function(t, o) {
              var a, r = o.re.exec(i),
                  l = r && o.parse(r),
                  h = o.space || "rgba";
              return l ? (a = n[h](l), n[c[h].cache] = a[c[h].cache], s = n._rgba = a._rgba, !1) : e
          }), s.length ? ("0,0,0,0" === s.join() && t.extend(s, o.transparent), n) : o[i]
      }

      function s(t, e, i) {
          return 1 > 6 * (i = (i + 1) % 1) ? t + 6 * (e - t) * i : 1 > 2 * i ? e : 2 > 3 * i ? t + 6 * (e - t) * (2 / 3 - i) : t
      }
      var o, a = /^([\-+])=\s*(\d+\.?\d*)/,
          r = [{
              re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
              parse: function(t) {
                  return [t[1], t[2], t[3], t[4]]
              }
          }, {
              re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
              parse: function(t) {
                  return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]]
              }
          }, {
              re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
              parse: function(t) {
                  return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)]
              }
          }, {
              re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
              parse: function(t) {
                  return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)]
              }
          }, {
              re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
              space: "hsla",
              parse: function(t) {
                  return [t[1], t[2] / 100, t[3] / 100, t[4]]
              }
          }],
          l = t.Color = function(e, i, n, s) {
              return new t.Color.fn.parse(e, i, n, s)
          },
          c = {
              rgba: {
                  props: {
                      red: {
                          idx: 0,
                          type: "byte"
                      },
                      green: {
                          idx: 1,
                          type: "byte"
                      },
                      blue: {
                          idx: 2,
                          type: "byte"
                      }
                  }
              },
              hsla: {
                  props: {
                      hue: {
                          idx: 0,
                          type: "degrees"
                      },
                      saturation: {
                          idx: 1,
                          type: "percent"
                      },
                      lightness: {
                          idx: 2,
                          type: "percent"
                      }
                  }
              }
          },
          h = {
              byte: {
                  floor: !0,
                  max: 255
              },
              percent: {
                  max: 1
              },
              degrees: {
                  mod: 360,
                  floor: !0
              }
          },
          u = l.support = {},
          d = t("<p>")[0],
          p = t.each;
      d.style.cssText = "background-color:rgba(1,1,1,.5)", u.rgba = d.style.backgroundColor.indexOf("rgba") > -1, p(c, function(t, e) {
          e.cache = "_" + t, e.props.alpha = {
              idx: 3,
              type: "percent",
              def: 1
          }
      }), l.fn = t.extend(l.prototype, {
          parse: function(s, a, r, h) {
              if (s === e) return this._rgba = [null, null, null, null], this;
              (s.jquery || s.nodeType) && (s = t(s).css(a), a = e);
              var u = this,
                  d = t.type(s),
                  f = this._rgba = [];
              return a !== e && (s = [s, a, r, h], d = "array"), "string" === d ? this.parse(n(s) || o._default) : "array" === d ? (p(c.rgba.props, function(t, e) {
                  f[e.idx] = i(s[e.idx], e)
              }), this) : "object" === d ? (p(c, s instanceof l ? function(t, e) {
                  s[e.cache] && (u[e.cache] = s[e.cache].slice())
              } : function(e, n) {
                  var o = n.cache;
                  p(n.props, function(t, e) {
                      if (!u[o] && n.to) {
                          if ("alpha" === t || null == s[t]) return;
                          u[o] = n.to(u._rgba)
                      }
                      u[o][e.idx] = i(s[t], e, !0)
                  }), u[o] && 0 > t.inArray(null, u[o].slice(0, 3)) && (u[o][3] = 1, n.from && (u._rgba = n.from(u[o])))
              }), this) : e
          },
          is: function(t) {
              var i = l(t),
                  n = !0,
                  s = this;
              return p(c, function(t, o) {
                  var a, r = i[o.cache];
                  return r && (a = s[o.cache] || o.to && o.to(s._rgba) || [], p(o.props, function(t, i) {
                      return null != r[i.idx] ? n = r[i.idx] === a[i.idx] : e
                  })), n
              }), n
          },
          _space: function() {
              var t = [],
                  e = this;
              return p(c, function(i, n) {
                  e[n.cache] && t.push(i)
              }), t.pop()
          },
          transition: function(t, e) {
              var n = l(t),
                  s = n._space(),
                  o = c[s],
                  a = 0 === this.alpha() ? l("transparent") : this,
                  r = a[o.cache] || o.to(a._rgba),
                  u = r.slice();
              return n = n[o.cache], p(o.props, function(t, s) {
                  var o = s.idx,
                      a = r[o],
                      l = n[o],
                      c = h[s.type] || {};
                  null !== l && (null === a ? u[o] = l : (c.mod && (l - a > c.mod / 2 ? a += c.mod : a - l > c.mod / 2 && (a -= c.mod)), u[o] = i((l - a) * e + a, s)))
              }), this[s](u)
          },
          blend: function(e) {
              if (1 === this._rgba[3]) return this;
              var i = this._rgba.slice(),
                  n = i.pop(),
                  s = l(e)._rgba;
              return l(t.map(i, function(t, e) {
                  return (1 - n) * s[e] + n * t
              }))
          },
          toRgbaString: function() {
              var e = "rgba(",
                  i = t.map(this._rgba, function(t, e) {
                      return null == t ? e > 2 ? 1 : 0 : t
                  });
              return 1 === i[3] && (i.pop(), e = "rgb("), e + i.join() + ")"
          },
          toHslaString: function() {
              var e = "hsla(",
                  i = t.map(this.hsla(), function(t, e) {
                      return null == t && (t = e > 2 ? 1 : 0), e && 3 > e && (t = Math.round(100 * t) + "%"), t
                  });
              return 1 === i[3] && (i.pop(), e = "hsl("), e + i.join() + ")"
          },
          toHexString: function(e) {
              var i = this._rgba.slice(),
                  n = i.pop();
              return e && i.push(~~(255 * n)), "#" + t.map(i, function(t) {
                  return 1 === (t = (t || 0).toString(16)).length ? "0" + t : t
              }).join("")
          },
          toString: function() {
              return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
          }
      }), l.fn.parse.prototype = l.fn, c.hsla.to = function(t) {
          if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
          var e, i, n = t[0] / 255,
              s = t[1] / 255,
              o = t[2] / 255,
              a = t[3],
              r = Math.max(n, s, o),
              l = Math.min(n, s, o),
              c = r - l,
              h = r + l,
              u = .5 * h;
          return e = l === r ? 0 : n === r ? 60 * (s - o) / c + 360 : s === r ? 60 * (o - n) / c + 120 : 60 * (n - s) / c + 240, i = 0 === c ? 0 : .5 >= u ? c / h : c / (2 - h), [Math.round(e) % 360, i, u, null == a ? 1 : a]
      }, c.hsla.from = function(t) {
          if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
          var e = t[0] / 360,
              i = t[1],
              n = t[2],
              o = t[3],
              a = .5 >= n ? n * (1 + i) : n + i - n * i,
              r = 2 * n - a;
          return [Math.round(255 * s(r, a, e + 1 / 3)), Math.round(255 * s(r, a, e)), Math.round(255 * s(r, a, e - 1 / 3)), o]
      }, p(c, function(n, s) {
          var o = s.props,
              r = s.cache,
              c = s.to,
              h = s.from;
          l.fn[n] = function(n) {
              if (c && !this[r] && (this[r] = c(this._rgba)), n === e) return this[r].slice();
              var s, a = t.type(n),
                  u = "array" === a || "object" === a ? n : arguments,
                  d = this[r].slice();
              return p(o, function(t, e) {
                  var n = u["object" === a ? t : e.idx];
                  null == n && (n = d[e.idx]), d[e.idx] = i(n, e)
              }), h ? ((s = l(h(d)))[r] = d, s) : l(d)
          }, p(o, function(e, i) {
              l.fn[e] || (l.fn[e] = function(s) {
                  var o, r = t.type(s),
                      l = "alpha" === e ? this._hsla ? "hsla" : "rgba" : n,
                      c = this[l](),
                      h = c[i.idx];
                  return "undefined" === r ? h : ("function" === r && (s = s.call(this, h), r = t.type(s)), null == s && i.empty ? this : ("string" === r && ((o = a.exec(s)) && (s = h + parseFloat(o[2]) * ("+" === o[1] ? 1 : -1))), c[i.idx] = s, this[l](c)))
              })
          })
      }), l.hook = function(e) {
          var i = e.split(" ");
          p(i, function(e, i) {
              t.cssHooks[i] = {
                  set: function(e, s) {
                      var o, a, r = "";
                      if ("transparent" !== s && ("string" !== t.type(s) || (o = n(s)))) {
                          if (s = l(o || s), !u.rgba && 1 !== s._rgba[3]) {
                              for (a = "backgroundColor" === i ? e.parentNode : e;
                                  ("" === r || "transparent" === r) && a && a.style;) try {
                                  r = t.css(a, "backgroundColor"), a = a.parentNode
                              } catch (t) {}
                              s = s.blend(r && "transparent" !== r ? r : "_default")
                          }
                          s = s.toRgbaString()
                      }
                      try {
                          e.style[i] = s
                      } catch (t) {}
                  }
              }, t.fx.step[i] = function(e) {
                  e.colorInit || (e.start = l(e.elem, i), e.end = l(e.end), e.colorInit = !0), t.cssHooks[i].set(e.elem, e.start.transition(e.end, e.pos))
              }
          })
      }, l.hook("backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor"), t.cssHooks.borderColor = {
          expand: function(t) {
              var e = {};
              return p(["Top", "Right", "Bottom", "Left"], function(i, n) {
                  e["border" + n + "Color"] = t
              }), e
          }
      }, o = t.Color.names = {
          aqua: "#00ffff",
          black: "#000000",
          blue: "#0000ff",
          fuchsia: "#ff00ff",
          gray: "#808080",
          green: "#008000",
          lime: "#00ff00",
          maroon: "#800000",
          navy: "#000080",
          olive: "#808000",
          purple: "#800080",
          red: "#ff0000",
          silver: "#c0c0c0",
          teal: "#008080",
          white: "#ffffff",
          yellow: "#ffff00",
          transparent: [null, null, null, 0],
          _default: "#ffffff"
      }
  }(u),
  function() {
      function e(e) {
          var i, n, s = e.ownerDocument.defaultView ? e.ownerDocument.defaultView.getComputedStyle(e, null) : e.currentStyle,
              o = {};
          if (s && s.length && s[0] && s[s[0]])
              for (n = s.length; n--;) "string" == typeof s[i = s[n]] && (o[t.camelCase(i)] = s[i]);
          else
              for (i in s) "string" == typeof s[i] && (o[i] = s[i]);
          return o
      }

      function i(e, i) {
          var n, o, a = {};
          for (n in i) o = i[n], e[n] !== o && (s[n] || (t.fx.step[n] || !isNaN(parseFloat(o))) && (a[n] = o));
          return a
      }
      var n = ["add", "remove", "toggle"],
          s = {
              border: 1,
              borderBottom: 1,
              borderColor: 1,
              borderLeft: 1,
              borderRight: 1,
              borderTop: 1,
              borderWidth: 1,
              margin: 1,
              padding: 1
          };
      t.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(e, i) {
          t.fx.step[i] = function(t) {
              ("none" !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (u.style(t.elem, i, t.end), t.setAttr = !0)
          }
      }), t.fn.addBack || (t.fn.addBack = function(t) {
          return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
      }), t.effects.animateClass = function(s, o, a, r) {
          var l = t.speed(o, a, r);
          return this.queue(function() {
              var o, a = t(this),
                  r = a.attr("class") || "",
                  c = l.children ? a.find("*").addBack() : a;
              c = c.map(function() {
                  return {
                      el: t(this),
                      start: e(this)
                  }
              }), (o = function() {
                  t.each(n, function(t, e) {
                      s[e] && a[e + "Class"](s[e])
                  })
              })(), c = c.map(function() {
                  return this.end = e(this.el[0]), this.diff = i(this.start, this.end), this
              }), a.attr("class", r), c = c.map(function() {
                  var e = this,
                      i = t.Deferred(),
                      n = t.extend({}, l, {
                          queue: !1,
                          complete: function() {
                              i.resolve(e)
                          }
                      });
                  return this.el.animate(this.diff, n), i.promise()
              }), t.when.apply(t, c.get()).done(function() {
                  o(), t.each(arguments, function() {
                      var e = this.el;
                      t.each(this.diff, function(t) {
                          e.css(t, "")
                      })
                  }), l.complete.call(a[0])
              })
          })
      }, t.fn.extend({
          addClass: function(e) {
              return function(i, n, s, o) {
                  return n ? t.effects.animateClass.call(this, {
                      add: i
                  }, n, s, o) : e.apply(this, arguments)
              }
          }(t.fn.addClass),
          removeClass: function(e) {
              return function(i, n, s, o) {
                  return arguments.length > 1 ? t.effects.animateClass.call(this, {
                      remove: i
                  }, n, s, o) : e.apply(this, arguments)
              }
          }(t.fn.removeClass),
          toggleClass: function(e) {
              return function(i, n, s, o, a) {
                  return "boolean" == typeof n || void 0 === n ? s ? t.effects.animateClass.call(this, n ? {
                      add: i
                  } : {
                      remove: i
                  }, s, o, a) : e.apply(this, arguments) : t.effects.animateClass.call(this, {
                      toggle: i
                  }, n, s, o)
              }
          }(t.fn.toggleClass),
          switchClass: function(e, i, n, s, o) {
              return t.effects.animateClass.call(this, {
                  add: i,
                  remove: e
              }, n, s, o)
          }
      })
  }(),
  function() {
      function e(e, i, n, s) {
          return t.isPlainObject(e) && (i = e, e = e.effect), e = {
              effect: e
          }, null == i && (i = {}), t.isFunction(i) && (s = i, n = null, i = {}), ("number" == typeof i || t.fx.speeds[i]) && (s = n, n = i, i = {}), t.isFunction(n) && (s = n, n = null), i && t.extend(e, i), n = n || i.duration, e.duration = t.fx.off ? 0 : "number" == typeof n ? n : n in t.fx.speeds ? t.fx.speeds[n] : t.fx.speeds._default, e.complete = s || i.complete, e
      }

      function i(e) {
          return !(e && "number" != typeof e && !t.fx.speeds[e]) || ("string" == typeof e && !t.effects.effect[e] || (!!t.isFunction(e) || "object" == typeof e && !e.effect))
      }

      function n(t, e) {
          var i = e.outerWidth(),
              n = e.outerHeight(),
              s = /^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/.exec(t) || ["", 0, i, n, 0];
          return {
              top: parseFloat(s[1]) || 0,
              right: "auto" === s[2] ? i : parseFloat(s[2]),
              bottom: "auto" === s[3] ? n : parseFloat(s[3]),
              left: parseFloat(s[4]) || 0
          }
      }
      t.expr && t.expr.filters && t.expr.filters.animated && (t.expr.filters.animated = function(e) {
          return function(i) {
              return !!t(i).data(h) || e(i)
          }
      }(t.expr.filters.animated)), !1 !== t.uiBackCompat && t.extend(t.effects, {
          save: function(t, e) {
              for (var i = 0, n = e.length; n > i; i++) null !== e[i] && t.data(l + e[i], t[0].style[e[i]])
          },
          restore: function(t, e) {
              for (var i, n = 0, s = e.length; s > n; n++) null !== e[n] && (i = t.data(l + e[n]), t.css(e[n], i))
          },
          setMode: function(t, e) {
              return "toggle" === e && (e = t.is(":hidden") ? "show" : "hide"), e
          },
          createWrapper: function(e) {
              if (e.parent().is(".ui-effects-wrapper")) return e.parent();
              var i = {
                      width: e.outerWidth(!0),
                      height: e.outerHeight(!0),
                      float: e.css("float")
                  },
                  n = t("<div></div>").addClass("ui-effects-wrapper").css({
                      fontSize: "100%",
                      background: "transparent",
                      border: "none",
                      margin: 0,
                      padding: 0
                  }),
                  s = {
                      width: e.width(),
                      height: e.height()
                  },
                  o = document.activeElement;
              try {
                  o.id
              } catch (t) {
                  o = document.body
              }
              return e.wrap(n), (e[0] === o || t.contains(e[0], o)) && t(o).trigger("focus"), n = e.parent(), "static" === e.css("position") ? (n.css({
                  position: "relative"
              }), e.css({
                  position: "relative"
              })) : (t.extend(i, {
                  position: e.css("position"),
                  zIndex: e.css("z-index")
              }), t.each(["top", "left", "bottom", "right"], function(t, n) {
                  i[n] = e.css(n), isNaN(parseInt(i[n], 10)) && (i[n] = "auto")
              }), e.css({
                  position: "relative",
                  top: 0,
                  left: 0,
                  right: "auto",
                  bottom: "auto"
              })), e.css(s), n.css(i).show()
          },
          removeWrapper: function(e) {
              var i = document.activeElement;
              return e.parent().is(".ui-effects-wrapper") && (e.parent().replaceWith(e), (e[0] === i || t.contains(e[0], i)) && t(i).trigger("focus")), e
          }
      }), t.extend(t.effects, {
          version: "1.12.1",
          define: function(e, i, n) {
              return n || (n = i, i = "effect"), t.effects.effect[e] = n, t.effects.effect[e].mode = i, n
          },
          scaledDimensions: function(t, e, i) {
              if (0 === e) return {
                  height: 0,
                  width: 0,
                  outerHeight: 0,
                  outerWidth: 0
              };
              var n = "horizontal" !== i ? (e || 100) / 100 : 1,
                  s = "vertical" !== i ? (e || 100) / 100 : 1;
              return {
                  height: t.height() * s,
                  width: t.width() * n,
                  outerHeight: t.outerHeight() * s,
                  outerWidth: t.outerWidth() * n
              }
          },
          clipToBox: function(t) {
              return {
                  width: t.clip.right - t.clip.left,
                  height: t.clip.bottom - t.clip.top,
                  left: t.clip.left,
                  top: t.clip.top
              }
          },
          unshift: function(t, e, i) {
              var n = t.queue();
              e > 1 && n.splice.apply(n, [1, 0].concat(n.splice(e, i))), t.dequeue()
          },
          saveStyle: function(t) {
              t.data(c, t[0].style.cssText)
          },
          restoreStyle: function(t) {
              t[0].style.cssText = t.data(c) || "", t.removeData(c)
          },
          mode: function(t, e) {
              var i = t.is(":hidden");
              return "toggle" === e && (e = i ? "show" : "hide"), (i ? "hide" === e : "show" === e) && (e = "none"), e
          },
          getBaseline: function(t, e) {
              var i, n;
              switch (t[0]) {
                  case "top":
                      i = 0;
                      break;
                  case "middle":
                      i = .5;
                      break;
                  case "bottom":
                      i = 1;
                      break;
                  default:
                      i = t[0] / e.height
              }
              switch (t[1]) {
                  case "left":
                      n = 0;
                      break;
                  case "center":
                      n = .5;
                      break;
                  case "right":
                      n = 1;
                      break;
                  default:
                      n = t[1] / e.width
              }
              return {
                  x: n,
                  y: i
              }
          },
          createPlaceholder: function(e) {
              var i, n = e.css("position"),
                  s = e.position();
              return e.css({
                  marginTop: e.css("marginTop"),
                  marginBottom: e.css("marginBottom"),
                  marginLeft: e.css("marginLeft"),
                  marginRight: e.css("marginRight")
              }).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()), /^(static|relative)/.test(n) && (n = "absolute", i = t("<" + e[0].nodeName + ">").insertAfter(e).css({
                  display: /^(inline|ruby)/.test(e.css("display")) ? "inline-block" : "block",
                  visibility: "hidden",
                  marginTop: e.css("marginTop"),
                  marginBottom: e.css("marginBottom"),
                  marginLeft: e.css("marginLeft"),
                  marginRight: e.css("marginRight"),
                  float: e.css("float")
              }).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).addClass("ui-effects-placeholder"), e.data(l + "placeholder", i)), e.css({
                  position: n,
                  left: s.left,
                  top: s.top
              }), i
          },
          removePlaceholder: function(t) {
              var e = l + "placeholder",
                  i = t.data(e);
              i && (i.remove(), t.removeData(e))
          },
          cleanUp: function(e) {
              t.effects.restoreStyle(e), t.effects.removePlaceholder(e)
          },
          setTransition: function(e, i, n, s) {
              return s = s || {}, t.each(i, function(t, i) {
                  var o = e.cssUnit(i);
                  o[0] > 0 && (s[i] = o[0] * n + o[1])
              }), s
          }
      }), t.fn.extend({
          effect: function() {
              function i(e) {
                  function i() {
                      t.isFunction(l) && l.call(a[0]), t.isFunction(e) && e()
                  }
                  var a = t(this);
                  n.mode = u.shift(), !1 === t.uiBackCompat || o ? "none" === n.mode ? (a[c](), i()) : s.call(a[0], n, function() {
                      a.removeData(h), t.effects.cleanUp(a), "hide" === n.mode && a.hide(), i()
                  }) : (a.is(":hidden") ? "hide" === c : "show" === c) ? (a[c](), i()) : s.call(a[0], n, i)
              }
              var n = e.apply(this, arguments),
                  s = t.effects.effect[n.effect],
                  o = s.mode,
                  a = n.queue,
                  r = a || "fx",
                  l = n.complete,
                  c = n.mode,
                  u = [],
                  d = function(e) {
                      var i = t(this),
                          n = t.effects.mode(i, c) || o;
                      i.data(h, !0), u.push(n), o && ("show" === n || n === o && "hide" === n) && i.show(), o && "none" === n || t.effects.saveStyle(i), t.isFunction(e) && e()
                  };
              return t.fx.off || !s ? c ? this[c](n.duration, l) : this.each(function() {
                  l && l.call(this)
              }) : !1 === a ? this.each(d).each(i) : this.queue(r, d).queue(r, i)
          },
          show: function(t) {
              return function(n) {
                  if (i(n)) return t.apply(this, arguments);
                  var s = e.apply(this, arguments);
                  return s.mode = "show", this.effect.call(this, s)
              }
          }(t.fn.show),
          hide: function(t) {
              return function(n) {
                  if (i(n)) return t.apply(this, arguments);
                  var s = e.apply(this, arguments);
                  return s.mode = "hide", this.effect.call(this, s)
              }
          }(t.fn.hide),
          toggle: function(t) {
              return function(n) {
                  if (i(n) || "boolean" == typeof n) return t.apply(this, arguments);
                  var s = e.apply(this, arguments);
                  return s.mode = "toggle", this.effect.call(this, s)
              }
          }(t.fn.toggle),
          cssUnit: function(e) {
              var i = this.css(e),
                  n = [];
              return t.each(["em", "px", "%", "pt"], function(t, e) {
                  i.indexOf(e) > 0 && (n = [parseFloat(i), e])
              }), n
          },
          cssClip: function(t) {
              return t ? this.css("clip", "rect(" + t.top + "px " + t.right + "px " + t.bottom + "px " + t.left + "px)") : n(this.css("clip"), this)
          },
          transfer: function(e, i) {
              var n = t(this),
                  s = t(e.to),
                  o = "fixed" === s.css("position"),
                  a = t("body"),
                  r = o ? a.scrollTop() : 0,
                  l = o ? a.scrollLeft() : 0,
                  c = s.offset(),
                  h = {
                      top: c.top - r,
                      left: c.left - l,
                      height: s.innerHeight(),
                      width: s.innerWidth()
                  },
                  u = n.offset(),
                  d = t("<div class='ui-effects-transfer'></div>").appendTo("body").addClass(e.className).css({
                      top: u.top - r,
                      left: u.left - l,
                      height: n.innerHeight(),
                      width: n.innerWidth(),
                      position: o ? "fixed" : "absolute"
                  }).animate(h, e.duration, e.easing, function() {
                      d.remove(), t.isFunction(i) && i()
                  })
          }
      }), t.fx.step.clip = function(e) {
          e.clipInit || (e.start = t(e.elem).cssClip(), "string" == typeof e.end && (e.end = n(e.end, e.elem)), e.clipInit = !0), t(e.elem).cssClip({
              top: e.pos * (e.end.top - e.start.top) + e.start.top,
              right: e.pos * (e.end.right - e.start.right) + e.start.right,
              bottom: e.pos * (e.end.bottom - e.start.bottom) + e.start.bottom,
              left: e.pos * (e.end.left - e.start.left) + e.start.left
          })
      }
  }(),
  function() {
      var e = {};
      t.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(t, i) {
          e[i] = function(e) {
              return Math.pow(e, t + 2)
          }
      }), t.extend(e, {
          Sine: function(t) {
              return 1 - Math.cos(t * Math.PI / 2)
          },
          Circ: function(t) {
              return 1 - Math.sqrt(1 - t * t)
          },
          Elastic: function(t) {
              return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15)
          },
          Back: function(t) {
              return t * t * (3 * t - 2)
          },
          Bounce: function(t) {
              for (var e, i = 4;
                  ((e = Math.pow(2, --i)) - 1) / 11 > t;);
              return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
          }
      }), t.each(e, function(e, i) {
          t.easing["easeIn" + e] = i, t.easing["easeOut" + e] = function(t) {
              return 1 - i(1 - t)
          }, t.easing["easeInOut" + e] = function(t) {
              return .5 > t ? i(2 * t) / 2 : 1 - i(-2 * t + 2) / 2
          }
      })
  }();
t.effects;
t.effects.define("blind", "hide", function(e, i) {
  var n = {
          up: ["bottom", "top"],
          vertical: ["bottom", "top"],
          down: ["top", "bottom"],
          left: ["right", "left"],
          horizontal: ["right", "left"],
          right: ["left", "right"]
      },
      s = t(this),
      o = e.direction || "up",
      a = s.cssClip(),
      r = {
          clip: t.extend({}, a)
      },
      l = t.effects.createPlaceholder(s);
  r.clip[n[o][0]] = r.clip[n[o][1]], "show" === e.mode && (s.cssClip(r.clip), l && l.css(t.effects.clipToBox(r)), r.clip = a), l && l.animate(t.effects.clipToBox(r), e.duration, e.easing), s.animate(r, {
      queue: !1,
      duration: e.duration,
      easing: e.easing,
      complete: i
  })
}), t.effects.define("bounce", function(e, i) {
  var n, s, o, a = t(this),
      r = e.mode,
      l = "hide" === r,
      c = "show" === r,
      h = e.direction || "up",
      u = e.distance,
      d = e.times || 5,
      p = 2 * d + (c || l ? 1 : 0),
      f = e.duration / p,
      m = e.easing,
      g = "up" === h || "down" === h ? "top" : "left",
      v = "up" === h || "left" === h,
      y = 0,
      b = a.queue().length;
  for (t.effects.createPlaceholder(a), o = a.css(g), u || (u = a["top" === g ? "outerHeight" : "outerWidth"]() / 3), c && ((s = {
          opacity: 1
      })[g] = o, a.css("opacity", 0).css(g, v ? 2 * -u : 2 * u).animate(s, f, m)), l && (u /= Math.pow(2, d - 1)), (s = {})[g] = o; d > y; y++)(n = {})[g] = (v ? "-=" : "+=") + u, a.animate(n, f, m).animate(s, f, m), u = l ? 2 * u : u / 2;
  l && ((n = {
      opacity: 0
  })[g] = (v ? "-=" : "+=") + u, a.animate(n, f, m)), a.queue(i), t.effects.unshift(a, b, p + 1)
}), t.effects.define("clip", "hide", function(e, i) {
  var n, s = {},
      o = t(this),
      a = e.direction || "vertical",
      r = "both" === a,
      l = r || "horizontal" === a,
      c = r || "vertical" === a;
  n = o.cssClip(), s.clip = {
      top: c ? (n.bottom - n.top) / 2 : n.top,
      right: l ? (n.right - n.left) / 2 : n.right,
      bottom: c ? (n.bottom - n.top) / 2 : n.bottom,
      left: l ? (n.right - n.left) / 2 : n.left
  }, t.effects.createPlaceholder(o), "show" === e.mode && (o.cssClip(s.clip), s.clip = n), o.animate(s, {
      queue: !1,
      duration: e.duration,
      easing: e.easing,
      complete: i
  })
}), t.effects.define("drop", "hide", function(e, i) {
  var n, s = t(this),
      o = "show" === e.mode,
      a = e.direction || "left",
      r = "up" === a || "down" === a ? "top" : "left",
      l = "up" === a || "left" === a ? "-=" : "+=",
      c = "+=" === l ? "-=" : "+=",
      h = {
          opacity: 0
      };
  t.effects.createPlaceholder(s), n = e.distance || s["top" === r ? "outerHeight" : "outerWidth"](!0) / 2, h[r] = l + n, o && (s.css(h), h[r] = c + n, h.opacity = 1), s.animate(h, {
      queue: !1,
      duration: e.duration,
      easing: e.easing,
      complete: i
  })
}), t.effects.define("explode", "hide", function(e, i) {
  function n() {
      v.push(this), v.length === h * u && (d.css({
          visibility: "visible"
      }), t(v).remove(), i())
  }
  var s, o, a, r, l, c, h = e.pieces ? Math.round(Math.sqrt(e.pieces)) : 3,
      u = h,
      d = t(this),
      p = "show" === e.mode,
      f = d.show().css("visibility", "hidden").offset(),
      m = Math.ceil(d.outerWidth() / u),
      g = Math.ceil(d.outerHeight() / h),
      v = [];
  for (s = 0; h > s; s++)
      for (r = f.top + s * g, c = s - (h - 1) / 2, o = 0; u > o; o++) a = f.left + o * m, l = o - (u - 1) / 2, d.clone().appendTo("body").wrap("<div></div>").css({
          position: "absolute",
          visibility: "visible",
          left: -o * m,
          top: -s * g
      }).parent().addClass("ui-effects-explode").css({
          position: "absolute",
          overflow: "hidden",
          width: m,
          height: g,
          left: a + (p ? l * m : 0),
          top: r + (p ? c * g : 0),
          opacity: p ? 0 : 1
      }).animate({
          left: a + (p ? 0 : l * m),
          top: r + (p ? 0 : c * g),
          opacity: p ? 1 : 0
      }, e.duration || 500, e.easing, n)
}), t.effects.define("fade", "toggle", function(e, i) {
  var n = "show" === e.mode;
  t(this).css("opacity", n ? 0 : 1).animate({
      opacity: n ? 1 : 0
  }, {
      queue: !1,
      duration: e.duration,
      easing: e.easing,
      complete: i
  })
}), t.effects.define("fold", "hide", function(e, i) {
  var n = t(this),
      s = e.mode,
      o = "show" === s,
      a = "hide" === s,
      r = e.size || 15,
      l = /([0-9]+)%/.exec(r),
      c = !!e.horizFirst ? ["right", "bottom"] : ["bottom", "right"],
      h = e.duration / 2,
      u = t.effects.createPlaceholder(n),
      d = n.cssClip(),
      p = {
          clip: t.extend({}, d)
      },
      f = {
          clip: t.extend({}, d)
      },
      m = [d[c[0]], d[c[1]]],
      g = n.queue().length;
  l && (r = parseInt(l[1], 10) / 100 * m[a ? 0 : 1]), p.clip[c[0]] = r, f.clip[c[0]] = r, f.clip[c[1]] = 0, o && (n.cssClip(f.clip), u && u.css(t.effects.clipToBox(f)), f.clip = d), n.queue(function(i) {
      u && u.animate(t.effects.clipToBox(p), h, e.easing).animate(t.effects.clipToBox(f), h, e.easing), i()
  }).animate(p, h, e.easing).animate(f, h, e.easing).queue(i), t.effects.unshift(n, g, 4)
}), t.effects.define("highlight", "show", function(e, i) {
  var n = t(this),
      s = {
          backgroundColor: n.css("backgroundColor")
      };
  "hide" === e.mode && (s.opacity = 0), t.effects.saveStyle(n), n.css({
      backgroundImage: "none",
      backgroundColor: e.color || "#ffff99"
  }).animate(s, {
      queue: !1,
      duration: e.duration,
      easing: e.easing,
      complete: i
  })
}), t.effects.define("size", function(e, i) {
  var n, s, o, a = t(this),
      r = ["fontSize"],
      l = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
      c = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
      h = e.mode,
      u = "effect" !== h,
      d = e.scale || "both",
      p = e.origin || ["middle", "center"],
      f = a.css("position"),
      m = a.position(),
      g = t.effects.scaledDimensions(a),
      v = e.from || g,
      y = e.to || t.effects.scaledDimensions(a, 0);
  t.effects.createPlaceholder(a), "show" === h && (o = v, v = y, y = o), s = {
      from: {
          y: v.height / g.height,
          x: v.width / g.width
      },
      to: {
          y: y.height / g.height,
          x: y.width / g.width
      }
  }, ("box" === d || "both" === d) && (s.from.y !== s.to.y && (v = t.effects.setTransition(a, l, s.from.y, v), y = t.effects.setTransition(a, l, s.to.y, y)), s.from.x !== s.to.x && (v = t.effects.setTransition(a, c, s.from.x, v), y = t.effects.setTransition(a, c, s.to.x, y))), ("content" === d || "both" === d) && s.from.y !== s.to.y && (v = t.effects.setTransition(a, r, s.from.y, v), y = t.effects.setTransition(a, r, s.to.y, y)), p && (n = t.effects.getBaseline(p, g), v.top = (g.outerHeight - v.outerHeight) * n.y + m.top, v.left = (g.outerWidth - v.outerWidth) * n.x + m.left, y.top = (g.outerHeight - y.outerHeight) * n.y + m.top, y.left = (g.outerWidth - y.outerWidth) * n.x + m.left), a.css(v), ("content" === d || "both" === d) && (l = l.concat(["marginTop", "marginBottom"]).concat(r), c = c.concat(["marginLeft", "marginRight"]), a.find("*[width]").each(function() {
      var i = t(this),
          n = t.effects.scaledDimensions(i),
          o = {
              height: n.height * s.from.y,
              width: n.width * s.from.x,
              outerHeight: n.outerHeight * s.from.y,
              outerWidth: n.outerWidth * s.from.x
          },
          a = {
              height: n.height * s.to.y,
              width: n.width * s.to.x,
              outerHeight: n.height * s.to.y,
              outerWidth: n.width * s.to.x
          };
      s.from.y !== s.to.y && (o = t.effects.setTransition(i, l, s.from.y, o), a = t.effects.setTransition(i, l, s.to.y, a)), s.from.x !== s.to.x && (o = t.effects.setTransition(i, c, s.from.x, o), a = t.effects.setTransition(i, c, s.to.x, a)), u && t.effects.saveStyle(i), i.css(o), i.animate(a, e.duration, e.easing, function() {
          u && t.effects.restoreStyle(i)
      })
  })), a.animate(y, {
      queue: !1,
      duration: e.duration,
      easing: e.easing,
      complete: function() {
          var e = a.offset();
          0 === y.opacity && a.css("opacity", v.opacity), u || (a.css("position", "static" === f ? "relative" : f).offset(e), t.effects.saveStyle(a)), i()
      }
  })
}), t.effects.define("scale", function(e, i) {
  var n = t(this),
      s = e.mode,
      o = parseInt(e.percent, 10) || (0 === parseInt(e.percent, 10) ? 0 : "effect" !== s ? 0 : 100),
      a = t.extend(!0, {
          from: t.effects.scaledDimensions(n),
          to: t.effects.scaledDimensions(n, o, e.direction || "both"),
          origin: e.origin || ["middle", "center"]
      }, e);
  e.fade && (a.from.opacity = 1, a.to.opacity = 0), t.effects.effect.size.call(this, a, i)
}), t.effects.define("puff", "hide", function(e, i) {
  var n = t.extend(!0, {}, e, {
      fade: !0,
      percent: parseInt(e.percent, 10) || 150
  });
  t.effects.effect.scale.call(this, n, i)
}), t.effects.define("pulsate", "show", function(e, i) {
  var n = t(this),
      s = e.mode,
      o = "show" === s,
      a = o || "hide" === s,
      r = 2 * (e.times || 5) + (a ? 1 : 0),
      l = e.duration / r,
      c = 0,
      h = 1,
      u = n.queue().length;
  for ((o || !n.is(":visible")) && (n.css("opacity", 0).show(), c = 1); r > h; h++) n.animate({
      opacity: c
  }, l, e.easing), c = 1 - c;
  n.animate({
      opacity: c
  }, l, e.easing), n.queue(i), t.effects.unshift(n, u, r + 1)
}), t.effects.define("shake", function(e, i) {
  var n = 1,
      s = t(this),
      o = e.direction || "left",
      a = e.distance || 20,
      r = e.times || 3,
      l = 2 * r + 1,
      c = Math.round(e.duration / l),
      h = "up" === o || "down" === o ? "top" : "left",
      u = "up" === o || "left" === o,
      d = {},
      p = {},
      f = {},
      m = s.queue().length;
  for (t.effects.createPlaceholder(s), d[h] = (u ? "-=" : "+=") + a, p[h] = (u ? "+=" : "-=") + 2 * a, f[h] = (u ? "-=" : "+=") + 2 * a, s.animate(d, c, e.easing); r > n; n++) s.animate(p, c, e.easing).animate(f, c, e.easing);
  s.animate(p, c, e.easing).animate(d, c / 2, e.easing).queue(i), t.effects.unshift(s, m, l + 1)
}), t.effects.define("slide", "show", function(e, i) {
  var n, s, o = t(this),
      a = {
          up: ["bottom", "top"],
          down: ["top", "bottom"],
          left: ["right", "left"],
          right: ["left", "right"]
      },
      r = e.mode,
      l = e.direction || "left",
      c = "up" === l || "down" === l ? "top" : "left",
      h = "up" === l || "left" === l,
      u = e.distance || o["top" === c ? "outerHeight" : "outerWidth"](!0),
      d = {};
  t.effects.createPlaceholder(o), n = o.cssClip(), s = o.position()[c], d[c] = (h ? -1 : 1) * u + s, d.clip = o.cssClip(), d.clip[a[l][1]] = d.clip[a[l][0]], "show" === r && (o.cssClip(d.clip), o.css(c, d[c]), d.clip = n, d[c] = s), o.animate(d, {
      queue: !1,
      duration: e.duration,
      easing: e.easing,
      complete: i
  })
}), !1 !== t.uiBackCompat && t.effects.define("transfer", function(e, i) {
  t(this).transfer(e, i)
}), t.ui.focusable = function(e, i) {
  var n, s, o, a, r, l = e.nodeName.toLowerCase();
  return "area" === l ? (s = (n = e.parentNode).name, !(!e.href || !s || "map" !== n.nodeName.toLowerCase()) && ((o = t("img[usemap='#" + s + "']")).length > 0 && o.is(":visible"))) : (/^(input|select|textarea|button|object)$/.test(l) ? (a = !e.disabled) && ((r = t(e).closest("fieldset")[0]) && (a = !r.disabled)) : a = "a" === l && e.href || i, a && t(e).is(":visible") && function(t) {
      for (var e = t.css("visibility");
          "inherit" === e;) e = (t = t.parent()).css("visibility");
      return "hidden" !== e
  }(t(e)))
}, t.extend(t.expr[":"], {
  focusable: function(e) {
      return t.ui.focusable(e, null != t.attr(e, "tabindex"))
  }
}), t.ui.focusable, t.fn.form = function() {
  return "string" == typeof this[0].form ? this.closest("form") : t(this[0].form)
}, t.ui.formResetMixin = {
  _formResetHandler: function() {
      var e = t(this);
      setTimeout(function() {
          var i = e.data("ui-form-reset-instances");
          t.each(i, function() {
              this.refresh()
          })
      })
  },
  _bindFormResetHandler: function() {
      if (this.form = this.element.form(), this.form.length) {
          var t = this.form.data("ui-form-reset-instances") || [];
          t.length || this.form.on("reset.ui-form-reset", this._formResetHandler), t.push(this), this.form.data("ui-form-reset-instances", t)
      }
  },
  _unbindFormResetHandler: function() {
      if (this.form.length) {
          var e = this.form.data("ui-form-reset-instances");
          e.splice(t.inArray(this, e), 1), e.length ? this.form.data("ui-form-reset-instances", e) : this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset")
      }
  }
}, "1.7" === t.fn.jquery.substring(0, 3) && (t.each(["Width", "Height"], function(e, i) {
  function n(e, i, n, o) {
      return t.each(s, function() {
          i -= parseFloat(t.css(e, "padding" + this)) || 0, n && (i -= parseFloat(t.css(e, "border" + this + "Width")) || 0), o && (i -= parseFloat(t.css(e, "margin" + this)) || 0)
      }), i
  }
  var s = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
      o = i.toLowerCase(),
      a = {
          innerWidth: t.fn.innerWidth,
          innerHeight: t.fn.innerHeight,
          outerWidth: t.fn.outerWidth,
          outerHeight: t.fn.outerHeight
      };
  t.fn["inner" + i] = function(e) {
      return void 0 === e ? a["inner" + i].call(this) : this.each(function() {
          t(this).css(o, n(this, e) + "px")
      })
  }, t.fn["outer" + i] = function(e, s) {
      return "number" != typeof e ? a["outer" + i].call(this, e) : this.each(function() {
          t(this).css(o, n(this, e, !0, s) + "px")
      })
  }
}), t.fn.addBack = function(t) {
  return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
}), t.ui.keyCode = {
  BACKSPACE: 8,
  COMMA: 188,
  DELETE: 46,
  DOWN: 40,
  END: 35,
  ENTER: 13,
  ESCAPE: 27,
  HOME: 36,
  LEFT: 37,
  PAGE_DOWN: 34,
  PAGE_UP: 33,
  PERIOD: 190,
  RIGHT: 39,
  SPACE: 32,
  TAB: 9,
  UP: 38
}, t.ui.escapeSelector = function() {
  var t = /([!"#$%&'()*+,.\/:;<=>?@[\]^`{|}~])/g;
  return function(e) {
      return e.replace(t, "\\$1")
  }
}(), t.fn.labels = function() {
  var e, i, n, s, o;
  return this[0].labels && this[0].labels.length ? this.pushStack(this[0].labels) : (s = this.eq(0).parents("label"), (n = this.attr("id")) && (o = (e = this.eq(0).parents().last()).add(e.length ? e.siblings() : this.siblings()), i = "label[for='" + t.ui.escapeSelector(n) + "']", s = s.add(o.find(i).addBack(i))), this.pushStack(s))
}, t.fn.scrollParent = function(e) {
  var i = this.css("position"),
      n = "absolute" === i,
      s = e ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
      o = this.parents().filter(function() {
          var e = t(this);
          return (!n || "static" !== e.css("position")) && s.test(e.css("overflow") + e.css("overflow-y") + e.css("overflow-x"))
      }).eq(0);
  return "fixed" !== i && o.length ? o : t(this[0].ownerDocument || document)
}, t.extend(t.expr[":"], {
  tabbable: function(e) {
      var i = t.attr(e, "tabindex"),
          n = null != i;
      return (!n || i >= 0) && t.ui.focusable(e, n)
  }
}), t.fn.extend({
  uniqueId: function() {
      var t = 0;
      return function() {
          return this.each(function() {
              this.id || (this.id = "ui-id-" + ++t)
          })
      }
  }(),
  removeUniqueId: function() {
      return this.each(function() {
          /^ui-id-\d+$/.test(this.id) && t(this).removeAttr("id")
      })
  }
}), t.widget("ui.accordion", {
  version: "1.12.1",
  options: {
      active: 0,
      animate: {},
      classes: {
          "ui-accordion-header": "ui-corner-top",
          "ui-accordion-header-collapsed": "ui-corner-all",
          "ui-accordion-content": "ui-corner-bottom"
      },
      collapsible: !1,
      event: "click",
      header: "> li > :first-child, > :not(li):even",
      heightStyle: "auto",
      icons: {
          activeHeader: "ui-icon-triangle-1-s",
          header: "ui-icon-triangle-1-e"
      },
      activate: null,
      beforeActivate: null
  },
  hideProps: {
      borderTopWidth: "hide",
      borderBottomWidth: "hide",
      paddingTop: "hide",
      paddingBottom: "hide",
      height: "hide"
  },
  showProps: {
      borderTopWidth: "show",
      borderBottomWidth: "show",
      paddingTop: "show",
      paddingBottom: "show",
      height: "show"
  },
  _create: function() {
      var e = this.options;
      this.prevShow = this.prevHide = t(), this._addClass("ui-accordion", "ui-widget ui-helper-reset"), this.element.attr("role", "tablist"), e.collapsible || !1 !== e.active && null != e.active || (e.active = 0), this._processPanels(), 0 > e.active && (e.active += this.headers.length), this._refresh()
  },
  _getCreateEventData: function() {
      return {
          header: this.active,
          panel: this.active.length ? this.active.next() : t()
      }
  },
  _createIcons: function() {
      var e, i, n = this.options.icons;
      n && (e = t("<span>"), this._addClass(e, "ui-accordion-header-icon", "ui-icon " + n.header), e.prependTo(this.headers), i = this.active.children(".ui-accordion-header-icon"), this._removeClass(i, n.header)._addClass(i, null, n.activeHeader)._addClass(this.headers, "ui-accordion-icons"))
  },
  _destroyIcons: function() {
      this._removeClass(this.headers, "ui-accordion-icons"), this.headers.children(".ui-accordion-header-icon").remove()
  },
  _destroy: function() {
      var t;
      this.element.removeAttr("role"), this.headers.removeAttr("role aria-expanded aria-selected aria-controls tabIndex").removeUniqueId(), this._destroyIcons(), t = this.headers.next().css("display", "").removeAttr("role aria-hidden aria-labelledby").removeUniqueId(), "content" !== this.options.heightStyle && t.css("height", "")
  },
  _setOption: function(t, e) {
      return "active" === t ? void this._activate(e) : ("event" === t && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(e)), this._super(t, e), "collapsible" !== t || e || !1 !== this.options.active || this._activate(0), void("icons" === t && (this._destroyIcons(), e && this._createIcons())))
  },
  _setOptionDisabled: function(t) {
      this._super(t), this.element.attr("aria-disabled", t), this._toggleClass(null, "ui-state-disabled", !!t), this._toggleClass(this.headers.add(this.headers.next()), null, "ui-state-disabled", !!t)
  },
  _keydown: function(e) {
      if (!e.altKey && !e.ctrlKey) {
          var i = t.ui.keyCode,
              n = this.headers.length,
              s = this.headers.index(e.target),
              o = !1;
          switch (e.keyCode) {
              case i.RIGHT:
              case i.DOWN:
                  o = this.headers[(s + 1) % n];
                  break;
              case i.LEFT:
              case i.UP:
                  o = this.headers[(s - 1 + n) % n];
                  break;
              case i.SPACE:
              case i.ENTER:
                  this._eventHandler(e);
                  break;
              case i.HOME:
                  o = this.headers[0];
                  break;
              case i.END:
                  o = this.headers[n - 1]
          }
          o && (t(e.target).attr("tabIndex", -1), t(o).attr("tabIndex", 0), t(o).trigger("focus"), e.preventDefault())
      }
  },
  _panelKeyDown: function(e) {
      e.keyCode === t.ui.keyCode.UP && e.ctrlKey && t(e.currentTarget).prev().trigger("focus")
  },
  refresh: function() {
      var e = this.options;
      this._processPanels(), !1 === e.active && !0 === e.collapsible || !this.headers.length ? (e.active = !1, this.active = t()) : !1 === e.active ? this._activate(0) : this.active.length && !t.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (e.active = !1, this.active = t()) : this._activate(Math.max(0, e.active - 1)) : e.active = this.headers.index(this.active), this._destroyIcons(), this._refresh()
  },
  _processPanels: function() {
      var t = this.headers,
          e = this.panels;
      this.headers = this.element.find(this.options.header), this._addClass(this.headers, "ui-accordion-header ui-accordion-header-collapsed", "ui-state-default"), this.panels = this.headers.next().filter(":not(.ui-accordion-content-active)").hide(), this._addClass(this.panels, "ui-accordion-content", "ui-helper-reset ui-widget-content"), e && (this._off(t.not(this.headers)), this._off(e.not(this.panels)))
  },
  _refresh: function() {
      var e, i = this.options,
          n = i.heightStyle,
          s = this.element.parent();
      this.active = this._findActive(i.active), this._addClass(this.active, "ui-accordion-header-active", "ui-state-active")._removeClass(this.active, "ui-accordion-header-collapsed"), this._addClass(this.active.next(), "ui-accordion-content-active"), this.active.next().show(), this.headers.attr("role", "tab").each(function() {
          var e = t(this),
              i = e.uniqueId().attr("id"),
              n = e.next(),
              s = n.uniqueId().attr("id");
          e.attr("aria-controls", s), n.attr("aria-labelledby", i)
      }).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({
          "aria-selected": "false",
          "aria-expanded": "false",
          tabIndex: -1
      }).next().attr({
          "aria-hidden": "true"
      }).hide(), this.active.length ? this.active.attr({
          "aria-selected": "true",
          "aria-expanded": "true",
          tabIndex: 0
      }).next().attr({
          "aria-hidden": "false"
      }) : this.headers.eq(0).attr("tabIndex", 0), this._createIcons(), this._setupEvents(i.event), "fill" === n ? (e = s.height(), this.element.siblings(":visible").each(function() {
          var i = t(this),
              n = i.css("position");
          "absolute" !== n && "fixed" !== n && (e -= i.outerHeight(!0))
      }), this.headers.each(function() {
          e -= t(this).outerHeight(!0)
      }), this.headers.next().each(function() {
          t(this).height(Math.max(0, e - t(this).innerHeight() + t(this).height()))
      }).css("overflow", "auto")) : "auto" === n && (e = 0, this.headers.next().each(function() {
          var i = t(this).is(":visible");
          i || t(this).show(), e = Math.max(e, t(this).css("height", "").height()), i || t(this).hide()
      }).height(e))
  },
  _activate: function(e) {
      var i = this._findActive(e)[0];
      i !== this.active[0] && (i = i || this.active[0], this._eventHandler({
          target: i,
          currentTarget: i,
          preventDefault: t.noop
      }))
  },
  _findActive: function(e) {
      return "number" == typeof e ? this.headers.eq(e) : t()
  },
  _setupEvents: function(e) {
      var i = {
          keydown: "_keydown"
      };
      e && t.each(e.split(" "), function(t, e) {
          i[e] = "_eventHandler"
      }), this._off(this.headers.add(this.headers.next())), this._on(this.headers, i), this._on(this.headers.next(), {
          keydown: "_panelKeyDown"
      }), this._hoverable(this.headers), this._focusable(this.headers)
  },
  _eventHandler: function(e) {
      var i, n, s = this.options,
          o = this.active,
          a = t(e.currentTarget),
          r = a[0] === o[0],
          l = r && s.collapsible,
          c = l ? t() : a.next(),
          h = o.next(),
          u = {
              oldHeader: o,
              oldPanel: h,
              newHeader: l ? t() : a,
              newPanel: c
          };
      e.preventDefault(), r && !s.collapsible || !1 === this._trigger("beforeActivate", e, u) || (s.active = !l && this.headers.index(a), this.active = r ? t() : a, this._toggle(u), this._removeClass(o, "ui-accordion-header-active", "ui-state-active"), s.icons && (i = o.children(".ui-accordion-header-icon"), this._removeClass(i, null, s.icons.activeHeader)._addClass(i, null, s.icons.header)), r || (this._removeClass(a, "ui-accordion-header-collapsed")._addClass(a, "ui-accordion-header-active", "ui-state-active"), s.icons && (n = a.children(".ui-accordion-header-icon"), this._removeClass(n, null, s.icons.header)._addClass(n, null, s.icons.activeHeader)), this._addClass(a.next(), "ui-accordion-content-active")))
  },
  _toggle: function(e) {
      var i = e.newPanel,
          n = this.prevShow.length ? this.prevShow : e.oldPanel;
      this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = i, this.prevHide = n, this.options.animate ? this._animate(i, n, e) : (n.hide(), i.show(), this._toggleComplete(e)), n.attr({
          "aria-hidden": "true"
      }), n.prev().attr({
          "aria-selected": "false",
          "aria-expanded": "false"
      }), i.length && n.length ? n.prev().attr({
          tabIndex: -1,
          "aria-expanded": "false"
      }) : i.length && this.headers.filter(function() {
          return 0 === parseInt(t(this).attr("tabIndex"), 10)
      }).attr("tabIndex", -1), i.attr("aria-hidden", "false").prev().attr({
          "aria-selected": "true",
          "aria-expanded": "true",
          tabIndex: 0
      })
  },
  _animate: function(t, e, i) {
      var n, s, o, a = this,
          r = 0,
          l = t.css("box-sizing"),
          c = t.length && (!e.length || t.index() < e.index()),
          h = this.options.animate || {},
          u = c && h.down || h,
          d = function() {
              a._toggleComplete(i)
          };
      return "number" == typeof u && (o = u), "string" == typeof u && (s = u), s = s || u.easing || h.easing, o = o || u.duration || h.duration, e.length ? t.length ? (n = t.show().outerHeight(), e.animate(this.hideProps, {
          duration: o,
          easing: s,
          step: function(t, e) {
              e.now = Math.round(t)
          }
      }), void t.hide().animate(this.showProps, {
          duration: o,
          easing: s,
          complete: d,
          step: function(t, i) {
              i.now = Math.round(t), "height" !== i.prop ? "content-box" === l && (r += i.now) : "content" !== a.options.heightStyle && (i.now = Math.round(n - e.outerHeight() - r), r = 0)
          }
      })) : e.animate(this.hideProps, o, s, d) : t.animate(this.showProps, o, s, d)
  },
  _toggleComplete: function(t) {
      var e = t.oldPanel,
          i = e.prev();
      this._removeClass(e, "ui-accordion-content-active"), this._removeClass(i, "ui-accordion-header-active")._addClass(i, "ui-accordion-header-collapsed"), e.length && (e.parent()[0].className = e.parent()[0].className), this._trigger("activate", null, t)
  }
}), t.ui.safeActiveElement = function(t) {
  var e;
  try {
      e = t.activeElement
  } catch (i) {
      e = t.body
  }
  return e || (e = t.body), e.nodeName || (e = t.body), e
}, t.widget("ui.menu", {
  version: "1.12.1",
  defaultElement: "<ul>",
  delay: 300,
  options: {
      icons: {
          submenu: "ui-icon-caret-1-e"
      },
      items: "> *",
      menus: "ul",
      position: {
          my: "left top",
          at: "right top"
      },
      role: "menu",
      blur: null,
      focus: null,
      select: null
  },
  _create: function() {
      this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().attr({
          role: this.options.role,
          tabIndex: 0
      }), this._addClass("ui-menu", "ui-widget ui-widget-content"), this._on({
          "mousedown .ui-menu-item": function(t) {
              t.preventDefault()
          },
          "click .ui-menu-item": function(e) {
              var i = t(e.target),
                  n = t(t.ui.safeActiveElement(this.document[0]));
              !this.mouseHandled && i.not(".ui-state-disabled").length && (this.select(e), e.isPropagationStopped() || (this.mouseHandled = !0), i.has(".ui-menu").length ? this.expand(e) : !this.element.is(":focus") && n.closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
          },
          "mouseenter .ui-menu-item": function(e) {
              if (!this.previousFilter) {
                  var i = t(e.target).closest(".ui-menu-item"),
                      n = t(e.currentTarget);
                  i[0] === n[0] && (this._removeClass(n.siblings().children(".ui-state-active"), null, "ui-state-active"), this.focus(e, n))
              }
          },
          mouseleave: "collapseAll",
          "mouseleave .ui-menu": "collapseAll",
          focus: function(t, e) {
              var i = this.active || this.element.find(this.options.items).eq(0);
              e || this.focus(t, i)
          },
          blur: function(e) {
              this._delay(function() {
                  !t.contains(this.element[0], t.ui.safeActiveElement(this.document[0])) && this.collapseAll(e)
              })
          },
          keydown: "_keydown"
      }), this.refresh(), this._on(this.document, {
          click: function(t) {
              this._closeOnDocumentClick(t) && this.collapseAll(t), this.mouseHandled = !1
          }
      })
  },
  _destroy: function() {
      var e = this.element.find(".ui-menu-item").removeAttr("role aria-disabled").children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");
      this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show(), e.children().each(function() {
          var e = t(this);
          e.data("ui-menu-submenu-caret") && e.remove()
      })
  },
  _keydown: function(e) {
      var i, n, s, o, a = !0;
      switch (e.keyCode) {
          case t.ui.keyCode.PAGE_UP:
              this.previousPage(e);
              break;
          case t.ui.keyCode.PAGE_DOWN:
              this.nextPage(e);
              break;
          case t.ui.keyCode.HOME:
              this._move("first", "first", e);
              break;
          case t.ui.keyCode.END:
              this._move("last", "last", e);
              break;
          case t.ui.keyCode.UP:
              this.previous(e);
              break;
          case t.ui.keyCode.DOWN:
              this.next(e);
              break;
          case t.ui.keyCode.LEFT:
              this.collapse(e);
              break;
          case t.ui.keyCode.RIGHT:
              this.active && !this.active.is(".ui-state-disabled") && this.expand(e);
              break;
          case t.ui.keyCode.ENTER:
          case t.ui.keyCode.SPACE:
              this._activate(e);
              break;
          case t.ui.keyCode.ESCAPE:
              this.collapse(e);
              break;
          default:
              a = !1, n = this.previousFilter || "", o = !1, s = e.keyCode >= 96 && 105 >= e.keyCode ? "" + (e.keyCode - 96) : String.fromCharCode(e.keyCode), clearTimeout(this.filterTimer), s === n ? o = !0 : s = n + s, i = this._filterMenuItems(s), (i = o && -1 !== i.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : i).length || (s = String.fromCharCode(e.keyCode), i = this._filterMenuItems(s)), i.length ? (this.focus(e, i), this.previousFilter = s, this.filterTimer = this._delay(function() {
                  delete this.previousFilter
              }, 1e3)) : delete this.previousFilter
      }
      a && e.preventDefault()
  },
  _activate: function(t) {
      this.active && !this.active.is(".ui-state-disabled") && (this.active.children("[aria-haspopup='true']").length ? this.expand(t) : this.select(t))
  },
  refresh: function() {
      var e, i, n, s, o = this,
          a = this.options.icons.submenu,
          r = this.element.find(this.options.menus);
      this._toggleClass("ui-menu-icons", null, !!this.element.find(".ui-icon").length), i = r.filter(":not(.ui-menu)").hide().attr({
          role: this.options.role,
          "aria-hidden": "true",
          "aria-expanded": "false"
      }).each(function() {
          var e = t(this),
              i = e.prev(),
              n = t("<span>").data("ui-menu-submenu-caret", !0);
          o._addClass(n, "ui-menu-icon", "ui-icon " + a), i.attr("aria-haspopup", "true").prepend(n), e.attr("aria-labelledby", i.attr("id"))
      }), this._addClass(i, "ui-menu", "ui-widget ui-widget-content ui-front"), (e = r.add(this.element).find(this.options.items)).not(".ui-menu-item").each(function() {
          var e = t(this);
          o._isDivider(e) && o._addClass(e, "ui-menu-divider", "ui-widget-content")
      }), s = (n = e.not(".ui-menu-item, .ui-menu-divider")).children().not(".ui-menu").uniqueId().attr({
          tabIndex: -1,
          role: this._itemRole()
      }), this._addClass(n, "ui-menu-item")._addClass(s, "ui-menu-item-wrapper"), e.filter(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !t.contains(this.element[0], this.active[0]) && this.blur()
  },
  _itemRole: function() {
      return {
          menu: "menuitem",
          listbox: "option"
      }[this.options.role]
  },
  _setOption: function(t, e) {
      if ("icons" === t) {
          var i = this.element.find(".ui-menu-icon");
          this._removeClass(i, null, this.options.icons.submenu)._addClass(i, null, e.submenu)
      }
      this._super(t, e)
  },
  _setOptionDisabled: function(t) {
      this._super(t), this.element.attr("aria-disabled", t + ""), this._toggleClass(null, "ui-state-disabled", !!t)
  },
  focus: function(t, e) {
      var i, n, s;
      this.blur(t, t && "focus" === t.type), this._scrollIntoView(e), this.active = e.first(), n = this.active.children(".ui-menu-item-wrapper"), this._addClass(n, null, "ui-state-active"), this.options.role && this.element.attr("aria-activedescendant", n.attr("id")), s = this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper"), this._addClass(s, null, "ui-state-active"), t && "keydown" === t.type ? this._close() : this.timer = this._delay(function() {
          this._close()
      }, this.delay), (i = e.children(".ui-menu")).length && t && /^mouse/.test(t.type) && this._startOpening(i), this.activeMenu = e.parent(), this._trigger("focus", t, {
          item: e
      })
  },
  _scrollIntoView: function(e) {
      var i, n, s, o, a, r;
      this._hasScroll() && (i = parseFloat(t.css(this.activeMenu[0], "borderTopWidth")) || 0, n = parseFloat(t.css(this.activeMenu[0], "paddingTop")) || 0, s = e.offset().top - this.activeMenu.offset().top - i - n, o = this.activeMenu.scrollTop(), a = this.activeMenu.height(), r = e.outerHeight(), 0 > s ? this.activeMenu.scrollTop(o + s) : s + r > a && this.activeMenu.scrollTop(o + s - a + r))
  },
  blur: function(t, e) {
      e || clearTimeout(this.timer), this.active && (this._removeClass(this.active.children(".ui-menu-item-wrapper"), null, "ui-state-active"), this._trigger("blur", t, {
          item: this.active
      }), this.active = null)
  },
  _startOpening: function(t) {
      clearTimeout(this.timer), "true" === t.attr("aria-hidden") && (this.timer = this._delay(function() {
          this._close(), this._open(t)
      }, this.delay))
  },
  _open: function(e) {
      var i = t.extend({
          of: this.active
      }, this.options.position);
      clearTimeout(this.timer), this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden", "true"), e.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i)
  },
  collapseAll: function(e, i) {
      clearTimeout(this.timer), this.timer = this._delay(function() {
          var n = i ? this.element : t(e && e.target).closest(this.element.find(".ui-menu"));
          n.length || (n = this.element), this._close(n), this.blur(e), this._removeClass(n.find(".ui-state-active"), null, "ui-state-active"), this.activeMenu = n
      }, this.delay)
  },
  _close: function(t) {
      t || (t = this.active ? this.active.parent() : this.element), t.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false")
  },
  _closeOnDocumentClick: function(e) {
      return !t(e.target).closest(".ui-menu").length
  },
  _isDivider: function(t) {
      return !/[^\-\u2014\u2013\s]/.test(t.text())
  },
  collapse: function(t) {
      var e = this.active && this.active.parent().closest(".ui-menu-item", this.element);
      e && e.length && (this._close(), this.focus(t, e))
  },
  expand: function(t) {
      var e = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
      e && e.length && (this._open(e.parent()), this._delay(function() {
          this.focus(t, e)
      }))
  },
  next: function(t) {
      this._move("next", "first", t)
  },
  previous: function(t) {
      this._move("prev", "last", t)
  },
  isFirstItem: function() {
      return this.active && !this.active.prevAll(".ui-menu-item").length
  },
  isLastItem: function() {
      return this.active && !this.active.nextAll(".ui-menu-item").length
  },
  _move: function(t, e, i) {
      var n;
      this.active && (n = "first" === t || "last" === t ? this.active["first" === t ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[t + "All"](".ui-menu-item").eq(0)), n && n.length && this.active || (n = this.activeMenu.find(this.options.items)[e]()), this.focus(i, n)
  },
  nextPage: function(e) {
      var i, n, s;
      return this.active ? void(this.isLastItem() || (this._hasScroll() ? (n = this.active.offset().top, s = this.element.height(), this.active.nextAll(".ui-menu-item").each(function() {
          return 0 > (i = t(this)).offset().top - n - s
      }), this.focus(e, i)) : this.focus(e, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]()))) : void this.next(e)
  },
  previousPage: function(e) {
      var i, n, s;
      return this.active ? void(this.isFirstItem() || (this._hasScroll() ? (n = this.active.offset().top, s = this.element.height(), this.active.prevAll(".ui-menu-item").each(function() {
          return (i = t(this)).offset().top - n + s > 0
      }), this.focus(e, i)) : this.focus(e, this.activeMenu.find(this.options.items).first()))) : void this.next(e)
  },
  _hasScroll: function() {
      return this.element.outerHeight() < this.element.prop("scrollHeight")
  },
  select: function(e) {
      this.active = this.active || t(e.target).closest(".ui-menu-item");
      var i = {
          item: this.active
      };
      this.active.has(".ui-menu").length || this.collapseAll(e, !0), this._trigger("select", e, i)
  },
  _filterMenuItems: function(e) {
      var i = e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"),
          n = RegExp("^" + i, "i");
      return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function() {
          return n.test(t.trim(t(this).children(".ui-menu-item-wrapper").text()))
      })
  }
}), t.widget("ui.autocomplete", {
  version: "1.12.1",
  defaultElement: "<input>",
  options: {
      appendTo: null,
      autoFocus: !1,
      delay: 300,
      minLength: 1,
      position: {
          my: "left top",
          at: "left bottom",
          collision: "none"
      },
      source: null,
      change: null,
      close: null,
      focus: null,
      open: null,
      response: null,
      search: null,
      select: null
  },
  requestIndex: 0,
  pending: 0,
  _create: function() {
      var e, i, n, s = this.element[0].nodeName.toLowerCase(),
          o = "textarea" === s,
          a = "input" === s;
      this.isMultiLine = o || !a && this._isContentEditable(this.element), this.valueMethod = this.element[o || a ? "val" : "text"], this.isNewMenu = !0, this._addClass("ui-autocomplete-input"), this.element.attr("autocomplete", "off"), this._on(this.element, {
          keydown: function(s) {
              if (this.element.prop("readOnly")) return e = !0, n = !0, void(i = !0);
              e = !1, n = !1, i = !1;
              var o = t.ui.keyCode;
              switch (s.keyCode) {
                  case o.PAGE_UP:
                      e = !0, this._move("previousPage", s);
                      break;
                  case o.PAGE_DOWN:
                      e = !0, this._move("nextPage", s);
                      break;
                  case o.UP:
                      e = !0, this._keyEvent("previous", s);
                      break;
                  case o.DOWN:
                      e = !0, this._keyEvent("next", s);
                      break;
                  case o.ENTER:
                      this.menu.active && (e = !0, s.preventDefault(), this.menu.select(s));
                      break;
                  case o.TAB:
                      this.menu.active && this.menu.select(s);
                      break;
                  case o.ESCAPE:
                      this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term), this.close(s), s.preventDefault());
                      break;
                  default:
                      i = !0, this._searchTimeout(s)
              }
          },
          keypress: function(n) {
              if (e) return e = !1, void((!this.isMultiLine || this.menu.element.is(":visible")) && n.preventDefault());
              if (!i) {
                  var s = t.ui.keyCode;
                  switch (n.keyCode) {
                      case s.PAGE_UP:
                          this._move("previousPage", n);
                          break;
                      case s.PAGE_DOWN:
                          this._move("nextPage", n);
                          break;
                      case s.UP:
                          this._keyEvent("previous", n);
                          break;
                      case s.DOWN:
                          this._keyEvent("next", n)
                  }
              }
          },
          input: function(t) {
              return n ? (n = !1, void t.preventDefault()) : void this._searchTimeout(t)
          },
          focus: function() {
              this.selectedItem = null, this.previous = this._value()
          },
          blur: function(t) {
              return this.cancelBlur ? void delete this.cancelBlur : (clearTimeout(this.searching), this.close(t), void this._change(t))
          }
      }), this._initSource(), this.menu = t("<ul>").appendTo(this._appendTo()).menu({
          role: null
      }).hide().menu("instance"), this._addClass(this.menu.element, "ui-autocomplete", "ui-front"), this._on(this.menu.element, {
          mousedown: function(e) {
              e.preventDefault(), this.cancelBlur = !0, this._delay(function() {
                  delete this.cancelBlur, this.element[0] !== t.ui.safeActiveElement(this.document[0]) && this.element.trigger("focus")
              })
          },
          menufocus: function(e, i) {
              var n, s;
              return this.isNewMenu && (this.isNewMenu = !1, e.originalEvent && /^mouse/.test(e.originalEvent.type)) ? (this.menu.blur(), void this.document.one("mousemove", function() {
                  t(e.target).trigger(e.originalEvent)
              })) : (s = i.item.data("ui-autocomplete-item"), !1 !== this._trigger("focus", e, {
                  item: s
              }) && e.originalEvent && /^key/.test(e.originalEvent.type) && this._value(s.value), void((n = i.item.attr("aria-label") || s.value) && t.trim(n).length && (this.liveRegion.children().hide(), t("<div>").text(n).appendTo(this.liveRegion))))
          },
          menuselect: function(e, i) {
              var n = i.item.data("ui-autocomplete-item"),
                  s = this.previous;
              this.element[0] !== t.ui.safeActiveElement(this.document[0]) && (this.element.trigger("focus"), this.previous = s, this._delay(function() {
                  this.previous = s, this.selectedItem = n
              })), !1 !== this._trigger("select", e, {
                  item: n
              }) && this._value(n.value), this.term = this._value(), this.close(e), this.selectedItem = n
          }
      }), this.liveRegion = t("<div>", {
          role: "status",
          "aria-live": "assertive",
          "aria-relevant": "additions"
      }).appendTo(this.document[0].body), this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"), this._on(this.window, {
          beforeunload: function() {
              this.element.removeAttr("autocomplete")
          }
      })
  },
  _destroy: function() {
      clearTimeout(this.searching), this.element.removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove()
  },
  _setOption: function(t, e) {
      this._super(t, e), "source" === t && this._initSource(), "appendTo" === t && this.menu.element.appendTo(this._appendTo()), "disabled" === t && e && this.xhr && this.xhr.abort()
  },
  _isEventTargetInWidget: function(e) {
      var i = this.menu.element[0];
      return e.target === this.element[0] || e.target === i || t.contains(i, e.target)
  },
  _closeOnClickOutside: function(t) {
      this._isEventTargetInWidget(t) || this.close()
  },
  _appendTo: function() {
      var e = this.options.appendTo;
      return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)), e && e[0] || (e = this.element.closest(".ui-front, dialog")), e.length || (e = this.document[0].body), e
  },
  _initSource: function() {
      var e, i, n = this;
      t.isArray(this.options.source) ? (e = this.options.source, this.source = function(i, n) {
          n(t.ui.autocomplete.filter(e, i.term))
      }) : "string" == typeof this.options.source ? (i = this.options.source, this.source = function(e, s) {
          n.xhr && n.xhr.abort(), n.xhr = t.ajax({
              url: i,
              data: e,
              dataType: "json",
              success: function(t) {
                  s(t)
              },
              error: function() {
                  s([])
              }
          })
      }) : this.source = this.options.source
  },
  _searchTimeout: function(t) {
      clearTimeout(this.searching), this.searching = this._delay(function() {
          var e = this.term === this._value(),
              i = this.menu.element.is(":visible"),
              n = t.altKey || t.ctrlKey || t.metaKey || t.shiftKey;
          (!e || e && !i && !n) && (this.selectedItem = null, this.search(null, t))
      }, this.options.delay)
  },
  search: function(t, e) {
      return t = null != t ? t : this._value(), this.term = this._value(), t.length < this.options.minLength ? this.close(e) : !1 !== this._trigger("search", e) ? this._search(t) : void 0
  },
  _search: function(t) {
      this.pending++, this._addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({
          term: t
      }, this._response())
  },
  _response: function() {
      var e = ++this.requestIndex;
      return t.proxy(function(t) {
          e === this.requestIndex && this.__response(t), this.pending--, this.pending || this._removeClass("ui-autocomplete-loading")
      }, this)
  },
  __response: function(t) {
      t && (t = this._normalize(t)), this._trigger("response", null, {
          content: t
      }), !this.options.disabled && t && t.length && !this.cancelSearch ? (this._suggest(t), this._trigger("open")) : this._close()
  },
  close: function(t) {
      this.cancelSearch = !0, this._close(t)
  },
  _close: function(t) {
      this._off(this.document, "mousedown"), this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", t))
  },
  _change: function(t) {
      this.previous !== this._value() && this._trigger("change", t, {
          item: this.selectedItem
      })
  },
  _normalize: function(e) {
      return e.length && e[0].label && e[0].value ? e : t.map(e, function(e) {
          return "string" == typeof e ? {
              label: e,
              value: e
          } : t.extend({}, e, {
              label: e.label || e.value,
              value: e.value || e.label
          })
      })
  },
  _suggest: function(e) {
      var i = this.menu.element.empty();
      this._renderMenu(i, e), this.isNewMenu = !0, this.menu.refresh(), i.show(), this._resizeMenu(), i.position(t.extend({
          of: this.element
      }, this.options.position)), this.options.autoFocus && this.menu.next(), this._on(this.document, {
          mousedown: "_closeOnClickOutside"
      })
  },
  _resizeMenu: function() {
      var t = this.menu.element;
      t.outerWidth(Math.max(t.width("").outerWidth() + 1, this.element.outerWidth()))
  },
  _renderMenu: function(e, i) {
      var n = this;
      t.each(i, function(t, i) {
          n._renderItemData(e, i)
      })
  },
  _renderItemData: function(t, e) {
      return this._renderItem(t, e).data("ui-autocomplete-item", e)
  },
  _renderItem: function(e, i) {
      return t("<li>").append(t("<div>").text(i.label)).appendTo(e)
  },
  _move: function(t, e) {
      return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(t) || this.menu.isLastItem() && /^next/.test(t) ? (this.isMultiLine || this._value(this.term), void this.menu.blur()) : void this.menu[t](e) : void this.search(null, e)
  },
  widget: function() {
      return this.menu.element
  },
  _value: function() {
      return this.valueMethod.apply(this.element, arguments)
  },
  _keyEvent: function(t, e) {
      (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(t, e), e.preventDefault())
  },
  _isContentEditable: function(t) {
      if (!t.length) return !1;
      var e = t.prop("contentEditable");
      return "inherit" === e ? this._isContentEditable(t.parent()) : "true" === e
  }
}), t.extend(t.ui.autocomplete, {
  escapeRegex: function(t) {
      return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
  },
  filter: function(e, i) {
      var n = RegExp(t.ui.autocomplete.escapeRegex(i), "i");
      return t.grep(e, function(t) {
          return n.test(t.label || t.value || t)
      })
  }
}), t.widget("ui.autocomplete", t.ui.autocomplete, {
  options: {
      messages: {
          noResults: "No search results.",
          results: function(t) {
              return t + (t > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
          }
      }
  },
  __response: function(e) {
      var i;
      this._superApply(arguments), this.options.disabled || this.cancelSearch || (i = e && e.length ? this.options.messages.results(e.length) : this.options.messages.noResults, this.liveRegion.children().hide(), t("<div>").text(i).appendTo(this.liveRegion))
  }
}), t.ui.autocomplete;
var d, p = /ui-corner-([a-z]){2,6}/g;
t.widget("ui.controlgroup", {
  version: "1.12.1",
  defaultElement: "<div>",
  options: {
      direction: "horizontal",
      disabled: null,
      onlyVisible: !0,
      items: {
          button: "input[type=button], input[type=submit], input[type=reset], button, a",
          controlgroupLabel: ".ui-controlgroup-label",
          checkboxradio: "input[type='checkbox'], input[type='radio']",
          selectmenu: "select",
          spinner: ".ui-spinner-input"
      }
  },
  _create: function() {
      this._enhance()
  },
  _enhance: function() {
      this.element.attr("role", "toolbar"), this.refresh()
  },
  _destroy: function() {
      this._callChildMethod("destroy"), this.childWidgets.removeData("ui-controlgroup-data"), this.element.removeAttr("role"), this.options.items.controlgroupLabel && this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap()
  },
  _initWidgets: function() {
      var e = this,
          i = [];
      t.each(this.options.items, function(n, s) {
          var o, a = {};
          return s ? "controlgroupLabel" === n ? ((o = e.element.find(s)).each(function() {
              var e = t(this);
              e.children(".ui-controlgroup-label-contents").length || e.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>")
          }), e._addClass(o, null, "ui-widget ui-widget-content ui-state-default"), void(i = i.concat(o.get()))) : void(t.fn[n] && (a = e["_" + n + "Options"] ? e["_" + n + "Options"]("middle") : {
              classes: {}
          }, e.element.find(s).each(function() {
              var s = t(this),
                  o = s[n]("instance"),
                  r = t.widget.extend({}, a);
              if ("button" !== n || !s.parent(".ui-spinner").length) {
                  o || (o = s[n]()[n]("instance")), o && (r.classes = e._resolveClassesValues(r.classes, o)), s[n](r);
                  var l = s[n]("widget");
                  t.data(l[0], "ui-controlgroup-data", o || s[n]("instance")), i.push(l[0])
              }
          }))) : void 0
      }), this.childWidgets = t(t.unique(i)), this._addClass(this.childWidgets, "ui-controlgroup-item")
  },
  _callChildMethod: function(e) {
      this.childWidgets.each(function() {
          var i = t(this).data("ui-controlgroup-data");
          i && i[e] && i[e]()
      })
  },
  _updateCornerClass: function(t, e) {
      var i = this._buildSimpleOptions(e, "label").classes.label;
      this._removeClass(t, null, "ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all"), this._addClass(t, null, i)
  },
  _buildSimpleOptions: function(t, e) {
      var i = "vertical" === this.options.direction,
          n = {
              classes: {}
          };
      return n.classes[e] = {
          middle: "",
          first: "ui-corner-" + (i ? "top" : "left"),
          last: "ui-corner-" + (i ? "bottom" : "right"),
          only: "ui-corner-all"
      }[t], n
  },
  _spinnerOptions: function(t) {
      var e = this._buildSimpleOptions(t, "ui-spinner");
      return e.classes["ui-spinner-up"] = "", e.classes["ui-spinner-down"] = "", e
  },
  _buttonOptions: function(t) {
      return this._buildSimpleOptions(t, "ui-button")
  },
  _checkboxradioOptions: function(t) {
      return this._buildSimpleOptions(t, "ui-checkboxradio-label")
  },
  _selectmenuOptions: function(t) {
      var e = "vertical" === this.options.direction;
      return {
          width: !!e && "auto",
          classes: {
              middle: {
                  "ui-selectmenu-button-open": "",
                  "ui-selectmenu-button-closed": ""
              },
              first: {
                  "ui-selectmenu-button-open": "ui-corner-" + (e ? "top" : "tl"),
                  "ui-selectmenu-button-closed": "ui-corner-" + (e ? "top" : "left")
              },
              last: {
                  "ui-selectmenu-button-open": e ? "" : "ui-corner-tr",
                  "ui-selectmenu-button-closed": "ui-corner-" + (e ? "bottom" : "right")
              },
              only: {
                  "ui-selectmenu-button-open": "ui-corner-top",
                  "ui-selectmenu-button-closed": "ui-corner-all"
              }
          }[t]
      }
  },
  _resolveClassesValues: function(e, i) {
      var n = {};
      return t.each(e, function(s) {
          var o = i.options.classes[s] || "";
          o = t.trim(o.replace(p, "")), n[s] = (o + " " + e[s]).replace(/\s+/g, " ")
      }), n
  },
  _setOption: function(t, e) {
      return "direction" === t && this._removeClass("ui-controlgroup-" + this.options.direction), this._super(t, e), "disabled" === t ? void this._callChildMethod(e ? "disable" : "enable") : void this.refresh()
  },
  refresh: function() {
      var e, i = this;
      this._addClass("ui-controlgroup ui-controlgroup-" + this.options.direction), "horizontal" === this.options.direction && this._addClass(null, "ui-helper-clearfix"), this._initWidgets(), e = this.childWidgets, this.options.onlyVisible && (e = e.filter(":visible")), e.length && (t.each(["first", "last"], function(t, n) {
          var s = e[n]().data("ui-controlgroup-data");
          if (s && i["_" + s.widgetName + "Options"]) {
              var o = i["_" + s.widgetName + "Options"](1 === e.length ? "only" : n);
              o.classes = i._resolveClassesValues(o.classes, s), s.element[s.widgetName](o)
          } else i._updateCornerClass(e[n](), n)
      }), this._callChildMethod("refresh"))
  }
}), t.widget("ui.checkboxradio", [t.ui.formResetMixin, {
  version: "1.12.1",
  options: {
      disabled: null,
      label: null,
      icon: !0,
      classes: {
          "ui-checkboxradio-label": "ui-corner-all",
          "ui-checkboxradio-icon": "ui-corner-all"
      }
  },
  _getCreateOptions: function() {
      var e, i, n = this,
          s = this._super() || {};
      return this._readType(), i = this.element.labels(), this.label = t(i[i.length - 1]), this.label.length || t.error("No label found for checkboxradio widget"), this.originalLabel = "", this.label.contents().not(this.element[0]).each(function() {
          n.originalLabel += 3 === this.nodeType ? t(this).text() : this.outerHTML
      }), this.originalLabel && (s.label = this.originalLabel), null != (e = this.element[0].disabled) && (s.disabled = e), s
  },
  _create: function() {
      var t = this.element[0].checked;
      this._bindFormResetHandler(), null == this.options.disabled && (this.options.disabled = this.element[0].disabled), this._setOption("disabled", this.options.disabled), this._addClass("ui-checkboxradio", "ui-helper-hidden-accessible"), this._addClass(this.label, "ui-checkboxradio-label", "ui-button ui-widget"), "radio" === this.type && this._addClass(this.label, "ui-checkboxradio-radio-label"), this.options.label && this.options.label !== this.originalLabel ? this._updateLabel() : this.originalLabel && (this.options.label = this.originalLabel), this._enhance(), t && (this._addClass(this.label, "ui-checkboxradio-checked", "ui-state-active"), this.icon && this._addClass(this.icon, null, "ui-state-hover")), this._on({
          change: "_toggleClasses",
          focus: function() {
              this._addClass(this.label, null, "ui-state-focus ui-visual-focus")
          },
          blur: function() {
              this._removeClass(this.label, null, "ui-state-focus ui-visual-focus")
          }
      })
  },
  _readType: function() {
      var e = this.element[0].nodeName.toLowerCase();
      this.type = this.element[0].type, "input" === e && /radio|checkbox/.test(this.type) || t.error("Can't create checkboxradio on element.nodeName=" + e + " and element.type=" + this.type)
  },
  _enhance: function() {
      this._updateIcon(this.element[0].checked)
  },
  widget: function() {
      return this.label
  },
  _getRadioGroup: function() {
      var e = this.element[0].name,
          i = "input[name='" + t.ui.escapeSelector(e) + "']";
      return e ? (this.form.length ? t(this.form[0].elements).filter(i) : t(i).filter(function() {
          return 0 === t(this).form().length
      })).not(this.element) : t([])
  },
  _toggleClasses: function() {
      var e = this.element[0].checked;
      this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", e), this.options.icon && "checkbox" === this.type && this._toggleClass(this.icon, null, "ui-icon-check ui-state-checked", e)._toggleClass(this.icon, null, "ui-icon-blank", !e), "radio" === this.type && this._getRadioGroup().each(function() {
          var e = t(this).checkboxradio("instance");
          e && e._removeClass(e.label, "ui-checkboxradio-checked", "ui-state-active")
      })
  },
  _destroy: function() {
      this._unbindFormResetHandler(), this.icon && (this.icon.remove(), this.iconSpace.remove())
  },
  _setOption: function(t, e) {
      return "label" !== t || e ? (this._super(t, e), "disabled" === t ? (this._toggleClass(this.label, null, "ui-state-disabled", e), void(this.element[0].disabled = e)) : void this.refresh()) : void 0
  },
  _updateIcon: function(e) {
      var i = "ui-icon ui-icon-background ";
      this.options.icon ? (this.icon || (this.icon = t("<span>"), this.iconSpace = t("<span> </span>"), this._addClass(this.iconSpace, "ui-checkboxradio-icon-space")), "checkbox" === this.type ? (i += e ? "ui-icon-check ui-state-checked" : "ui-icon-blank", this._removeClass(this.icon, null, e ? "ui-icon-blank" : "ui-icon-check")) : i += "ui-icon-blank", this._addClass(this.icon, "ui-checkboxradio-icon", i), e || this._removeClass(this.icon, null, "ui-icon-check ui-state-checked"), this.icon.prependTo(this.label).after(this.iconSpace)) : void 0 !== this.icon && (this.icon.remove(), this.iconSpace.remove(), delete this.icon)
  },
  _updateLabel: function() {
      var t = this.label.contents().not(this.element[0]);
      this.icon && (t = t.not(this.icon[0])), this.iconSpace && (t = t.not(this.iconSpace[0])), t.remove(), this.label.append(this.options.label)
  },
  refresh: function() {
      var t = this.element[0].checked,
          e = this.element[0].disabled;
      this._updateIcon(t), this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", t), null !== this.options.label && this._updateLabel(), e !== this.options.disabled && this._setOptions({
          disabled: e
      })
  }
}]), t.ui.checkboxradio, t.widget("ui.button", {
  version: "1.12.1",
  defaultElement: "<button>",
  options: {
      classes: {
          "ui-button": "ui-corner-all"
      },
      disabled: null,
      icon: null,
      iconPosition: "beginning",
      label: null,
      showLabel: !0
  },
  _getCreateOptions: function() {
      var t, e = this._super() || {};
      return this.isInput = this.element.is("input"), null != (t = this.element[0].disabled) && (e.disabled = t), this.originalLabel = this.isInput ? this.element.val() : this.element.html(), this.originalLabel && (e.label = this.originalLabel), e
  },
  _create: function() {
      !this.option.showLabel & !this.options.icon && (this.options.showLabel = !0), null == this.options.disabled && (this.options.disabled = this.element[0].disabled || !1), this.hasTitle = !!this.element.attr("title"), this.options.label && this.options.label !== this.originalLabel && (this.isInput ? this.element.val(this.options.label) : this.element.html(this.options.label)), this._addClass("ui-button", "ui-widget"), this._setOption("disabled", this.options.disabled), this._enhance(), this.element.is("a") && this._on({
          keyup: function(e) {
              e.keyCode === t.ui.keyCode.SPACE && (e.preventDefault(), this.element[0].click ? this.element[0].click() : this.element.trigger("click"))
          }
      })
  },
  _enhance: function() {
      this.element.is("button") || this.element.attr("role", "button"), this.options.icon && (this._updateIcon("icon", this.options.icon), this._updateTooltip())
  },
  _updateTooltip: function() {
      this.title = this.element.attr("title"), this.options.showLabel || this.title || this.element.attr("title", this.options.label)
  },
  _updateIcon: function(e, i) {
      var n = "iconPosition" !== e,
          s = n ? this.options.iconPosition : i,
          o = "top" === s || "bottom" === s;
      this.icon ? n && this._removeClass(this.icon, null, this.options.icon) : (this.icon = t("<span>"), this._addClass(this.icon, "ui-button-icon", "ui-icon"), this.options.showLabel || this._addClass("ui-button-icon-only")), n && this._addClass(this.icon, null, i), this._attachIcon(s), o ? (this._addClass(this.icon, null, "ui-widget-icon-block"), this.iconSpace && this.iconSpace.remove()) : (this.iconSpace || (this.iconSpace = t("<span> </span>"), this._addClass(this.iconSpace, "ui-button-icon-space")), this._removeClass(this.icon, null, "ui-wiget-icon-block"), this._attachIconSpace(s))
  },
  _destroy: function() {
      this.element.removeAttr("role"), this.icon && this.icon.remove(), this.iconSpace && this.iconSpace.remove(), this.hasTitle || this.element.removeAttr("title")
  },
  _attachIconSpace: function(t) {
      this.icon[/^(?:end|bottom)/.test(t) ? "before" : "after"](this.iconSpace)
  },
  _attachIcon: function(t) {
      this.element[/^(?:end|bottom)/.test(t) ? "append" : "prepend"](this.icon)
  },
  _setOptions: function(t) {
      var e = void 0 === t.showLabel ? this.options.showLabel : t.showLabel,
          i = void 0 === t.icon ? this.options.icon : t.icon;
      e || i || (t.showLabel = !0), this._super(t)
  },
  _setOption: function(t, e) {
      "icon" === t && (e ? this._updateIcon(t, e) : this.icon && (this.icon.remove(), this.iconSpace && this.iconSpace.remove())), "iconPosition" === t && this._updateIcon(t, e), "showLabel" === t && (this._toggleClass("ui-button-icon-only", null, !e), this._updateTooltip()), "label" === t && (this.isInput ? this.element.val(e) : (this.element.html(e), this.icon && (this._attachIcon(this.options.iconPosition), this._attachIconSpace(this.options.iconPosition)))), this._super(t, e), "disabled" === t && (this._toggleClass(null, "ui-state-disabled", e), this.element[0].disabled = e, e && this.element.blur())
  },
  refresh: function() {
      var t = this.element.is("input, button") ? this.element[0].disabled : this.element.hasClass("ui-button-disabled");
      t !== this.options.disabled && this._setOptions({
          disabled: t
      }), this._updateTooltip()
  }
}), !1 !== t.uiBackCompat && (t.widget("ui.button", t.ui.button, {
  options: {
      text: !0,
      icons: {
          primary: null,
          secondary: null
      }
  },
  _create: function() {
      this.options.showLabel && !this.options.text && (this.options.showLabel = this.options.text), !this.options.showLabel && this.options.text && (this.options.text = this.options.showLabel), this.options.icon || !this.options.icons.primary && !this.options.icons.secondary ? this.options.icon && (this.options.icons.primary = this.options.icon) : this.options.icons.primary ? this.options.icon = this.options.icons.primary : (this.options.icon = this.options.icons.secondary, this.options.iconPosition = "end"), this._super()
  },
  _setOption: function(t, e) {
      return "text" === t ? void this._super("showLabel", e) : ("showLabel" === t && (this.options.text = e), "icon" === t && (this.options.icons.primary = e), "icons" === t && (e.primary ? (this._super("icon", e.primary), this._super("iconPosition", "beginning")) : e.secondary && (this._super("icon", e.secondary), this._super("iconPosition", "end"))), void this._superApply(arguments))
  }
}), t.fn.button = function(e) {
  return function() {
      return !this.length || this.length && "INPUT" !== this[0].tagName || this.length && "INPUT" === this[0].tagName && "checkbox" !== this.attr("type") && "radio" !== this.attr("type") ? e.apply(this, arguments) : (t.ui.checkboxradio || t.error("Checkboxradio widget missing"), 0 === arguments.length ? this.checkboxradio({
          icon: !1
      }) : this.checkboxradio.apply(this, arguments))
  }
}(t.fn.button), t.fn.buttonset = function() {
  return t.ui.controlgroup || t.error("Controlgroup widget missing"), "option" === arguments[0] && "items" === arguments[1] && arguments[2] ? this.controlgroup.apply(this, [arguments[0], "items.button", arguments[2]]) : "option" === arguments[0] && "items" === arguments[1] ? this.controlgroup.apply(this, [arguments[0], "items.button"]) : ("object" == typeof arguments[0] && arguments[0].items && (arguments[0].items = {
      button: arguments[0].items
  }), this.controlgroup.apply(this, arguments))
}), t.ui.button, t.extend(t.ui, {
  datepicker: {
      version: "1.12.1"
  }
}), t.extend(e.prototype, {
  markerClassName: "hasDatepicker",
  maxRows: 4,
  _widgetDatepicker: function() {
      return this.dpDiv
  },
  setDefaults: function(t) {
      return s(this._defaults, t || {}), this
  },
  _attachDatepicker: function(e, i) {
      var n, s, o;
      s = "div" === (n = e.nodeName.toLowerCase()) || "span" === n, e.id || (this.uuid += 1, e.id = "dp" + this.uuid), (o = this._newInst(t(e), s)).settings = t.extend({}, i || {}), "input" === n ? this._connectDatepicker(e, o) : s && this._inlineDatepicker(e, o)
  },
  _newInst: function(e, n) {
      return {
          id: e[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1"),
          input: e,
          selectedDay: 0,
          selectedMonth: 0,
          selectedYear: 0,
          drawMonth: 0,
          drawYear: 0,
          inline: n,
          dpDiv: n ? i(t("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
      }
  },
  _connectDatepicker: function(e, i) {
      var n = t(e);
      i.append = t([]), i.trigger = t([]), n.hasClass(this.markerClassName) || (this._attachments(n, i), n.addClass(this.markerClassName).on("keydown", this._doKeyDown).on("keypress", this._doKeyPress).on("keyup", this._doKeyUp), this._autoSize(i), t.data(e, "datepicker", i), i.settings.disabled && this._disableDatepicker(e))
  },
  _attachments: function(e, i) {
      var n, s, o, a = this._get(i, "appendText"),
          r = this._get(i, "isRTL");
      i.append && i.append.remove(), a && (i.append = t("<span class='" + this._appendClass + "'>" + a + "</span>"), e[r ? "before" : "after"](i.append)), e.off("focus", this._showDatepicker), i.trigger && i.trigger.remove(), ("focus" === (n = this._get(i, "showOn")) || "both" === n) && e.on("focus", this._showDatepicker), ("button" === n || "both" === n) && (s = this._get(i, "buttonText"), o = this._get(i, "buttonImage"), i.trigger = t(this._get(i, "buttonImageOnly") ? t("<img/>").addClass(this._triggerClass).attr({
          src: o,
          alt: s,
          title: s
      }) : t("<button type='button'></button>").addClass(this._triggerClass).html(o ? t("<img/>").attr({
          src: o,
          alt: s,
          title: s
      }) : s)), e[r ? "before" : "after"](i.trigger), i.trigger.on("click", function() {
          return t.datepicker._datepickerShowing && t.datepicker._lastInput === e[0] ? t.datepicker._hideDatepicker() : t.datepicker._datepickerShowing && t.datepicker._lastInput !== e[0] ? (t.datepicker._hideDatepicker(), t.datepicker._showDatepicker(e[0])) : t.datepicker._showDatepicker(e[0]), !1
      }))
  },
  _autoSize: function(t) {
      if (this._get(t, "autoSize") && !t.inline) {
          var e, i, n, s, o = new Date(2009, 11, 20),
              a = this._get(t, "dateFormat");
          a.match(/[DM]/) && (e = function(t) {
              for (i = 0, n = 0, s = 0; t.length > s; s++) t[s].length > i && (i = t[s].length, n = s);
              return n
          }, o.setMonth(e(this._get(t, a.match(/MM/) ? "monthNames" : "monthNamesShort"))), o.setDate(e(this._get(t, a.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - o.getDay())), t.input.attr("size", this._formatDate(t, o).length)
      }
  },
  _inlineDatepicker: function(e, i) {
      var n = t(e);
      n.hasClass(this.markerClassName) || (n.addClass(this.markerClassName).append(i.dpDiv), t.data(e, "datepicker", i), this._setDate(i, this._getDefaultDate(i), !0), this._updateDatepicker(i), this._updateAlternate(i), i.settings.disabled && this._disableDatepicker(e), i.dpDiv.css("display", "block"))
  },
  _dialogDatepicker: function(e, i, n, o, a) {
      var r, l, c, h, u, d = this._dialogInst;
      return d || (this.uuid += 1, r = "dp" + this.uuid, this._dialogInput = t("<input type='text' id='" + r + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.on("keydown", this._doKeyDown), t("body").append(this._dialogInput), (d = this._dialogInst = this._newInst(this._dialogInput, !1)).settings = {}, t.data(this._dialogInput[0], "datepicker", d)), s(d.settings, o || {}), i = i && i.constructor === Date ? this._formatDate(d, i) : i, this._dialogInput.val(i), this._pos = a ? a.length ? a : [a.pageX, a.pageY] : null, this._pos || (l = document.documentElement.clientWidth, c = document.documentElement.clientHeight, h = document.documentElement.scrollLeft || document.body.scrollLeft, u = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [l / 2 - 100 + h, c / 2 - 150 + u]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), d.settings.onSelect = n, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), t.blockUI && t.blockUI(this.dpDiv), t.data(this._dialogInput[0], "datepicker", d), this
  },
  _destroyDatepicker: function(e) {
      var i, n = t(e),
          s = t.data(e, "datepicker");
      n.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), t.removeData(e, "datepicker"), "input" === i ? (s.append.remove(), s.trigger.remove(), n.removeClass(this.markerClassName).off("focus", this._showDatepicker).off("keydown", this._doKeyDown).off("keypress", this._doKeyPress).off("keyup", this._doKeyUp)) : ("div" === i || "span" === i) && n.removeClass(this.markerClassName).empty(), d === s && (d = null))
  },
  _enableDatepicker: function(e) {
      var i, n, s = t(e),
          o = t.data(e, "datepicker");
      s.hasClass(this.markerClassName) && ("input" === (i = e.nodeName.toLowerCase()) ? (e.disabled = !1, o.trigger.filter("button").each(function() {
          this.disabled = !1
      }).end().filter("img").css({
          opacity: "1.0",
          cursor: ""
      })) : ("div" === i || "span" === i) && ((n = s.children("." + this._inlineClass)).children().removeClass("ui-state-disabled"), n.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = t.map(this._disabledInputs, function(t) {
          return t === e ? null : t
      }))
  },
  _disableDatepicker: function(e) {
      var i, n, s = t(e),
          o = t.data(e, "datepicker");
      s.hasClass(this.markerClassName) && ("input" === (i = e.nodeName.toLowerCase()) ? (e.disabled = !0, o.trigger.filter("button").each(function() {
          this.disabled = !0
      }).end().filter("img").css({
          opacity: "0.5",
          cursor: "default"
      })) : ("div" === i || "span" === i) && ((n = s.children("." + this._inlineClass)).children().addClass("ui-state-disabled"), n.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = t.map(this._disabledInputs, function(t) {
          return t === e ? null : t
      }), this._disabledInputs[this._disabledInputs.length] = e)
  },
  _isDisabledDatepicker: function(t) {
      if (!t) return !1;
      for (var e = 0; this._disabledInputs.length > e; e++)
          if (this._disabledInputs[e] === t) return !0;
      return !1
  },
  _getInst: function(e) {
      try {
          return t.data(e, "datepicker")
      } catch (t) {
          throw "Missing instance data for this datepicker"
      }
  },
  _optionDatepicker: function(e, i, n) {
      var o, a, r, l, c = this._getInst(e);
      return 2 === arguments.length && "string" == typeof i ? "defaults" === i ? t.extend({}, t.datepicker._defaults) : c ? "all" === i ? t.extend({}, c.settings) : this._get(c, i) : null : (o = i || {}, "string" == typeof i && ((o = {})[i] = n), void(c && (this._curInst === c && this._hideDatepicker(), a = this._getDateDatepicker(e, !0), r = this._getMinMaxDate(c, "min"), l = this._getMinMaxDate(c, "max"), s(c.settings, o), null !== r && void 0 !== o.dateFormat && void 0 === o.minDate && (c.settings.minDate = this._formatDate(c, r)), null !== l && void 0 !== o.dateFormat && void 0 === o.maxDate && (c.settings.maxDate = this._formatDate(c, l)), "disabled" in o && (o.disabled ? this._disableDatepicker(e) : this._enableDatepicker(e)), this._attachments(t(e), c), this._autoSize(c), this._setDate(c, a), this._updateAlternate(c), this._updateDatepicker(c))))
  },
  _changeDatepicker: function(t, e, i) {
      this._optionDatepicker(t, e, i)
  },
  _refreshDatepicker: function(t) {
      var e = this._getInst(t);
      e && this._updateDatepicker(e)
  },
  _setDateDatepicker: function(t, e) {
      var i = this._getInst(t);
      i && (this._setDate(i, e), this._updateDatepicker(i), this._updateAlternate(i))
  },
  _getDateDatepicker: function(t, e) {
      var i = this._getInst(t);
      return i && !i.inline && this._setDateFromField(i, e), i ? this._getDate(i) : null
  },
  _doKeyDown: function(e) {
      var i, n, s, o = t.datepicker._getInst(e.target),
          a = !0,
          r = o.dpDiv.is(".ui-datepicker-rtl");
      if (o._keyEvent = !0, t.datepicker._datepickerShowing) switch (e.keyCode) {
          case 9:
              t.datepicker._hideDatepicker(), a = !1;
              break;
          case 13:
              return (s = t("td." + t.datepicker._dayOverClass + ":not(." + t.datepicker._currentClass + ")", o.dpDiv))[0] && t.datepicker._selectDay(e.target, o.selectedMonth, o.selectedYear, s[0]), (i = t.datepicker._get(o, "onSelect")) ? (n = t.datepicker._formatDate(o), i.apply(o.input ? o.input[0] : null, [n, o])) : t.datepicker._hideDatepicker(), !1;
          case 27:
              t.datepicker._hideDatepicker();
              break;
          case 33:
              t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(o, "stepBigMonths") : -t.datepicker._get(o, "stepMonths"), "M");
              break;
          case 34:
              t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(o, "stepBigMonths") : +t.datepicker._get(o, "stepMonths"), "M");
              break;
          case 35:
              (e.ctrlKey || e.metaKey) && t.datepicker._clearDate(e.target), a = e.ctrlKey || e.metaKey;
              break;
          case 36:
              (e.ctrlKey || e.metaKey) && t.datepicker._gotoToday(e.target), a = e.ctrlKey || e.metaKey;
              break;
          case 37:
              (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, r ? 1 : -1, "D"), a = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(o, "stepBigMonths") : -t.datepicker._get(o, "stepMonths"), "M");
              break;
          case 38:
              (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, -7, "D"), a = e.ctrlKey || e.metaKey;
              break;
          case 39:
              (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, r ? -1 : 1, "D"), a = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(o, "stepBigMonths") : +t.datepicker._get(o, "stepMonths"), "M");
              break;
          case 40:
              (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, 7, "D"), a = e.ctrlKey || e.metaKey;
              break;
          default:
              a = !1
      } else 36 === e.keyCode && e.ctrlKey ? t.datepicker._showDatepicker(this) : a = !1;
      a && (e.preventDefault(), e.stopPropagation())
  },
  _doKeyPress: function(e) {
      var i, n, s = t.datepicker._getInst(e.target);
      return t.datepicker._get(s, "constrainInput") ? (i = t.datepicker._possibleChars(t.datepicker._get(s, "dateFormat")), n = String.fromCharCode(null == e.charCode ? e.keyCode : e.charCode), e.ctrlKey || e.metaKey || " " > n || !i || i.indexOf(n) > -1) : void 0
  },
  _doKeyUp: function(e) {
      var i = t.datepicker._getInst(e.target);
      if (i.input.val() !== i.lastVal) try {
          t.datepicker.parseDate(t.datepicker._get(i, "dateFormat"), i.input ? i.input.val() : null, t.datepicker._getFormatConfig(i)) && (t.datepicker._setDateFromField(i), t.datepicker._updateAlternate(i), t.datepicker._updateDatepicker(i))
      } catch (t) {}
      return !0
  },
  _showDatepicker: function(e) {
      var i, n, o, a, r, l, c;
      ("input" !== (e = e.target || e).nodeName.toLowerCase() && (e = t("input", e.parentNode)[0]), t.datepicker._isDisabledDatepicker(e) || t.datepicker._lastInput === e) || (i = t.datepicker._getInst(e), t.datepicker._curInst && t.datepicker._curInst !== i && (t.datepicker._curInst.dpDiv.stop(!0, !0), i && t.datepicker._datepickerShowing && t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])), !1 !== (o = (n = t.datepicker._get(i, "beforeShow")) ? n.apply(e, [e, i]) : {}) && (s(i.settings, o), i.lastVal = null, t.datepicker._lastInput = e, t.datepicker._setDateFromField(i), t.datepicker._inDialog && (e.value = ""), t.datepicker._pos || (t.datepicker._pos = t.datepicker._findPos(e), t.datepicker._pos[1] += e.offsetHeight), a = !1, t(e).parents().each(function() {
          return !(a |= "fixed" === t(this).css("position"))
      }), r = {
          left: t.datepicker._pos[0],
          top: t.datepicker._pos[1]
      }, t.datepicker._pos = null, i.dpDiv.empty(), i.dpDiv.css({
          position: "absolute",
          display: "block",
          top: "-1000px"
      }), t.datepicker._updateDatepicker(i), r = t.datepicker._checkOffset(i, r, a), i.dpDiv.css({
          position: t.datepicker._inDialog && t.blockUI ? "static" : a ? "fixed" : "absolute",
          display: "none",
          left: r.left + "px",
          top: r.top + "px"
      }), i.inline || (l = t.datepicker._get(i, "showAnim"), c = t.datepicker._get(i, "duration"), i.dpDiv.css("z-index", function(t) {
          for (var e, i; t.length && t[0] !== document;) {
              if (("absolute" === (e = t.css("position")) || "relative" === e || "fixed" === e) && (i = parseInt(t.css("zIndex"), 10), !isNaN(i) && 0 !== i)) return i;
              t = t.parent()
          }
          return 0
      }(t(e)) + 1), t.datepicker._datepickerShowing = !0, t.effects && t.effects.effect[l] ? i.dpDiv.show(l, t.datepicker._get(i, "showOptions"), c) : i.dpDiv[l || "show"](l ? c : null), t.datepicker._shouldFocusInput(i) && i.input.trigger("focus"), t.datepicker._curInst = i)))
  },
  _updateDatepicker: function(e) {
      this.maxRows = 4, d = e, e.dpDiv.empty().append(this._generateHTML(e)), this._attachHandlers(e);
      var i, s = this._getNumberOfMonths(e),
          o = s[1],
          a = e.dpDiv.find("." + this._dayOverClass + " a");
      a.length > 0 && n.apply(a.get(0)), e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), o > 1 && e.dpDiv.addClass("ui-datepicker-multi-" + o).css("width", 17 * o + "em"), e.dpDiv[(1 !== s[0] || 1 !== s[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), e.dpDiv[(this._get(e, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), e === t.datepicker._curInst && t.datepicker._datepickerShowing && t.datepicker._shouldFocusInput(e) && e.input.trigger("focus"), e.yearshtml && (i = e.yearshtml, setTimeout(function() {
          i === e.yearshtml && e.yearshtml && e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml), i = e.yearshtml = null
      }, 0))
  },
  _shouldFocusInput: function(t) {
      return t.input && t.input.is(":visible") && !t.input.is(":disabled") && !t.input.is(":focus")
  },
  _checkOffset: function(e, i, n) {
      var s = e.dpDiv.outerWidth(),
          o = e.dpDiv.outerHeight(),
          a = e.input ? e.input.outerWidth() : 0,
          r = e.input ? e.input.outerHeight() : 0,
          l = document.documentElement.clientWidth + (n ? 0 : t(document).scrollLeft()),
          c = document.documentElement.clientHeight + (n ? 0 : t(document).scrollTop());
      return i.left -= this._get(e, "isRTL") ? s - a : 0, i.left -= n && i.left === e.input.offset().left ? t(document).scrollLeft() : 0, i.top -= n && i.top === e.input.offset().top + r ? t(document).scrollTop() : 0, i.left -= Math.min(i.left, i.left + s > l && l > s ? Math.abs(i.left + s - l) : 0), i.top -= Math.min(i.top, i.top + o > c && c > o ? Math.abs(o + r) : 0), i
  },
  _findPos: function(e) {
      for (var i, n = this._getInst(e), s = this._get(n, "isRTL"); e && ("hidden" === e.type || 1 !== e.nodeType || t.expr.filters.hidden(e));) e = e[s ? "previousSibling" : "nextSibling"];
      return [(i = t(e).offset()).left, i.top]
  },
  _hideDatepicker: function(e) {
      var i, n, s, o, a = this._curInst;
      !a || e && a !== t.data(e, "datepicker") || this._datepickerShowing && (i = this._get(a, "showAnim"), n = this._get(a, "duration"), s = function() {
          t.datepicker._tidyDialog(a)
      }, t.effects && (t.effects.effect[i] || t.effects[i]) ? a.dpDiv.hide(i, t.datepicker._get(a, "showOptions"), n, s) : a.dpDiv["slideDown" === i ? "slideUp" : "fadeIn" === i ? "fadeOut" : "hide"](i ? n : null, s), i || s(), this._datepickerShowing = !1, (o = this._get(a, "onClose")) && o.apply(a.input ? a.input[0] : null, [a.input ? a.input.val() : "", a]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
          position: "absolute",
          left: "0",
          top: "-100px"
      }), t.blockUI && (t.unblockUI(), t("body").append(this.dpDiv))), this._inDialog = !1)
  },
  _tidyDialog: function(t) {
      t.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar")
  },
  _checkExternalClick: function(e) {
      if (t.datepicker._curInst) {
          var i = t(e.target),
              n = t.datepicker._getInst(i[0]);
          (i[0].id !== t.datepicker._mainDivId && 0 === i.parents("#" + t.datepicker._mainDivId).length && !i.hasClass(t.datepicker.markerClassName) && !i.closest("." + t.datepicker._triggerClass).length && t.datepicker._datepickerShowing && (!t.datepicker._inDialog || !t.blockUI) || i.hasClass(t.datepicker.markerClassName) && t.datepicker._curInst !== n) && t.datepicker._hideDatepicker()
      }
  },
  _adjustDate: function(e, i, n) {
      var s = t(e),
          o = this._getInst(s[0]);
      this._isDisabledDatepicker(s[0]) || (this._adjustInstDate(o, i + ("M" === n ? this._get(o, "showCurrentAtPos") : 0), n), this._updateDatepicker(o))
  },
  _gotoToday: function(e) {
      var i, n = t(e),
          s = this._getInst(n[0]);
      this._get(s, "gotoCurrent") && s.currentDay ? (s.selectedDay = s.currentDay, s.drawMonth = s.selectedMonth = s.currentMonth, s.drawYear = s.selectedYear = s.currentYear) : (i = new Date, s.selectedDay = i.getDate(), s.drawMonth = s.selectedMonth = i.getMonth(), s.drawYear = s.selectedYear = i.getFullYear()), this._notifyChange(s), this._adjustDate(n)
  },
  _selectMonthYear: function(e, i, n) {
      var s = t(e),
          o = this._getInst(s[0]);
      o["selected" + ("M" === n ? "Month" : "Year")] = o["draw" + ("M" === n ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10), this._notifyChange(o), this._adjustDate(s)
  },
  _selectDay: function(e, i, n, s) {
      var o, a = t(e);
      t(s).hasClass(this._unselectableClass) || this._isDisabledDatepicker(a[0]) || ((o = this._getInst(a[0])).selectedDay = o.currentDay = t("a", s).html(), o.selectedMonth = o.currentMonth = i, o.selectedYear = o.currentYear = n, this._selectDate(e, this._formatDate(o, o.currentDay, o.currentMonth, o.currentYear)))
  },
  _clearDate: function(e) {
      var i = t(e);
      this._selectDate(i, "")
  },
  _selectDate: function(e, i) {
      var n, s = t(e),
          o = this._getInst(s[0]);
      i = null != i ? i : this._formatDate(o), o.input && o.input.val(i), this._updateAlternate(o), (n = this._get(o, "onSelect")) ? n.apply(o.input ? o.input[0] : null, [i, o]) : o.input && o.input.trigger("change"), o.inline ? this._updateDatepicker(o) : (this._hideDatepicker(), this._lastInput = o.input[0], "object" != typeof o.input[0] && o.input.trigger("focus"), this._lastInput = null)
  },
  _updateAlternate: function(e) {
      var i, n, s, o = this._get(e, "altField");
      o && (i = this._get(e, "altFormat") || this._get(e, "dateFormat"), n = this._getDate(e), s = this.formatDate(i, n, this._getFormatConfig(e)), t(o).val(s))
  },
  noWeekends: function(t) {
      var e = t.getDay();
      return [e > 0 && 6 > e, ""]
  },
  iso8601Week: function(t) {
      var e, i = new Date(t.getTime());
      return i.setDate(i.getDate() + 4 - (i.getDay() || 7)), e = i.getTime(), i.setMonth(0), i.setDate(1), Math.floor(Math.round((e - i) / 864e5) / 7) + 1
  },
  parseDate: function(e, i, n) {
      if (null == e || null == i) throw "Invalid arguments";
      if ("" === (i = "object" == typeof i ? "" + i : i + "")) return null;
      var s, o, a, r, l = 0,
          c = (n ? n.shortYearCutoff : null) || this._defaults.shortYearCutoff,
          h = "string" != typeof c ? c : (new Date).getFullYear() % 100 + parseInt(c, 10),
          u = (n ? n.dayNamesShort : null) || this._defaults.dayNamesShort,
          d = (n ? n.dayNames : null) || this._defaults.dayNames,
          p = (n ? n.monthNamesShort : null) || this._defaults.monthNamesShort,
          f = (n ? n.monthNames : null) || this._defaults.monthNames,
          m = -1,
          g = -1,
          v = -1,
          y = -1,
          b = !1,
          _ = function(t) {
              var i = e.length > s + 1 && e.charAt(s + 1) === t;
              return i && s++, i
          },
          w = function(t) {
              var e = _(t),
                  n = "@" === t ? 14 : "!" === t ? 20 : "y" === t && e ? 4 : "o" === t ? 3 : 2,
                  s = RegExp("^\\d{" + ("y" === t ? n : 1) + "," + n + "}"),
                  o = i.substring(l).match(s);
              if (!o) throw "Missing number at position " + l;
              return l += o[0].length, parseInt(o[0], 10)
          },
          x = function(e, n, s) {
              var o = -1,
                  a = t.map(_(e) ? s : n, function(t, e) {
                      return [
                          [e, t]
                      ]
                  }).sort(function(t, e) {
                      return -(t[1].length - e[1].length)
                  });
              if (t.each(a, function(t, e) {
                      var n = e[1];
                      return i.substr(l, n.length).toLowerCase() === n.toLowerCase() ? (o = e[0], l += n.length, !1) : void 0
                  }), -1 !== o) return o + 1;
              throw "Unknown name at position " + l
          },
          C = function() {
              if (i.charAt(l) !== e.charAt(s)) throw "Unexpected literal at position " + l;
              l++
          };
      for (s = 0; e.length > s; s++)
          if (b) "'" !== e.charAt(s) || _("'") ? C() : b = !1;
          else switch (e.charAt(s)) {
              case "d":
                  v = w("d");
                  break;
              case "D":
                  x("D", u, d);
                  break;
              case "o":
                  y = w("o");
                  break;
              case "m":
                  g = w("m");
                  break;
              case "M":
                  g = x("M", p, f);
                  break;
              case "y":
                  m = w("y");
                  break;
              case "@":
                  m = (r = new Date(w("@"))).getFullYear(), g = r.getMonth() + 1, v = r.getDate();
                  break;
              case "!":
                  m = (r = new Date((w("!") - this._ticksTo1970) / 1e4)).getFullYear(), g = r.getMonth() + 1, v = r.getDate();
                  break;
              case "'":
                  _("'") ? C() : b = !0;
                  break;
              default:
                  C()
          }
          if (i.length > l && (a = i.substr(l), !/^\s+/.test(a))) throw "Extra/unparsed characters found in date: " + a;
      if (-1 === m ? m = (new Date).getFullYear() : 100 > m && (m += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (h >= m ? 0 : -100)), y > -1)
          for (g = 1, v = y; !((o = this._getDaysInMonth(m, g - 1)) >= v);) g++, v -= o;
      if ((r = this._daylightSavingAdjust(new Date(m, g - 1, v))).getFullYear() !== m || r.getMonth() + 1 !== g || r.getDate() !== v) throw "Invalid date";
      return r
  },
  ATOM: "yy-mm-dd",
  COOKIE: "D, dd M yy",
  ISO_8601: "yy-mm-dd",
  RFC_822: "D, d M y",
  RFC_850: "DD, dd-M-y",
  RFC_1036: "D, d M y",
  RFC_1123: "D, d M yy",
  RFC_2822: "D, d M yy",
  RSS: "D, d M y",
  TICKS: "!",
  TIMESTAMP: "@",
  W3C: "yy-mm-dd",
  _ticksTo1970: 864e9 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
  formatDate: function(t, e, i) {
      if (!e) return "";
      var n, s = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
          o = (i ? i.dayNames : null) || this._defaults.dayNames,
          a = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
          r = (i ? i.monthNames : null) || this._defaults.monthNames,
          l = function(e) {
              var i = t.length > n + 1 && t.charAt(n + 1) === e;
              return i && n++, i
          },
          c = function(t, e, i) {
              var n = "" + e;
              if (l(t))
                  for (; i > n.length;) n = "0" + n;
              return n
          },
          h = function(t, e, i, n) {
              return l(t) ? n[e] : i[e]
          },
          u = "",
          d = !1;
      if (e)
          for (n = 0; t.length > n; n++)
              if (d) "'" !== t.charAt(n) || l("'") ? u += t.charAt(n) : d = !1;
              else switch (t.charAt(n)) {
                  case "d":
                      u += c("d", e.getDate(), 2);
                      break;
                  case "D":
                      u += h("D", e.getDay(), s, o);
                      break;
                  case "o":
                      u += c("o", Math.round((new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime() - new Date(e.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                      break;
                  case "m":
                      u += c("m", e.getMonth() + 1, 2);
                      break;
                  case "M":
                      u += h("M", e.getMonth(), a, r);
                      break;
                  case "y":
                      u += l("y") ? e.getFullYear() : (10 > e.getFullYear() % 100 ? "0" : "") + e.getFullYear() % 100;
                      break;
                  case "@":
                      u += e.getTime();
                      break;
                  case "!":
                      u += 1e4 * e.getTime() + this._ticksTo1970;
                      break;
                  case "'":
                      l("'") ? u += "'" : d = !0;
                      break;
                  default:
                      u += t.charAt(n)
              }
              return u
  },
  _possibleChars: function(t) {
      var e, i = "",
          n = !1,
          s = function(i) {
              var n = t.length > e + 1 && t.charAt(e + 1) === i;
              return n && e++, n
          };
      for (e = 0; t.length > e; e++)
          if (n) "'" !== t.charAt(e) || s("'") ? i += t.charAt(e) : n = !1;
          else switch (t.charAt(e)) {
              case "d":
              case "m":
              case "y":
              case "@":
                  i += "0123456789";
                  break;
              case "D":
              case "M":
                  return null;
              case "'":
                  s("'") ? i += "'" : n = !0;
                  break;
              default:
                  i += t.charAt(e)
          }
          return i
  },
  _get: function(t, e) {
      return void 0 !== t.settings[e] ? t.settings[e] : this._defaults[e]
  },
  _setDateFromField: function(t, e) {
      if (t.input.val() !== t.lastVal) {
          var i = this._get(t, "dateFormat"),
              n = t.lastVal = t.input ? t.input.val() : null,
              s = this._getDefaultDate(t),
              o = s,
              a = this._getFormatConfig(t);
          try {
              o = this.parseDate(i, n, a) || s
          } catch (t) {
              n = e ? "" : n
          }
          t.selectedDay = o.getDate(), t.drawMonth = t.selectedMonth = o.getMonth(), t.drawYear = t.selectedYear = o.getFullYear(), t.currentDay = n ? o.getDate() : 0, t.currentMonth = n ? o.getMonth() : 0, t.currentYear = n ? o.getFullYear() : 0, this._adjustInstDate(t)
      }
  },
  _getDefaultDate: function(t) {
      return this._restrictMinMax(t, this._determineDate(t, this._get(t, "defaultDate"), new Date))
  },
  _determineDate: function(e, i, n) {
      var s = null == i || "" === i ? n : "string" == typeof i ? function(i) {
          try {
              return t.datepicker.parseDate(t.datepicker._get(e, "dateFormat"), i, t.datepicker._getFormatConfig(e))
          } catch (t) {}
          for (var n = (i.toLowerCase().match(/^c/) ? t.datepicker._getDate(e) : null) || new Date, s = n.getFullYear(), o = n.getMonth(), a = n.getDate(), r = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, l = r.exec(i); l;) {
              switch (l[2] || "d") {
                  case "d":
                  case "D":
                      a += parseInt(l[1], 10);
                      break;
                  case "w":
                  case "W":
                      a += 7 * parseInt(l[1], 10);
                      break;
                  case "m":
                  case "M":
                      o += parseInt(l[1], 10), a = Math.min(a, t.datepicker._getDaysInMonth(s, o));
                      break;
                  case "y":
                  case "Y":
                      s += parseInt(l[1], 10), a = Math.min(a, t.datepicker._getDaysInMonth(s, o))
              }
              l = r.exec(i)
          }
          return new Date(s, o, a)
      }(i) : "number" == typeof i ? isNaN(i) ? n : function(t) {
          var e = new Date;
          return e.setDate(e.getDate() + t), e
      }(i) : new Date(i.getTime());
      return (s = s && "Invalid Date" == "" + s ? n : s) && (s.setHours(0), s.setMinutes(0), s.setSeconds(0), s.setMilliseconds(0)), this._daylightSavingAdjust(s)
  },
  _daylightSavingAdjust: function(t) {
      return t ? (t.setHours(t.getHours() > 12 ? t.getHours() + 2 : 0), t) : null
  },
  _setDate: function(t, e, i) {
      var n = !e,
          s = t.selectedMonth,
          o = t.selectedYear,
          a = this._restrictMinMax(t, this._determineDate(t, e, new Date));
      t.selectedDay = t.currentDay = a.getDate(), t.drawMonth = t.selectedMonth = t.currentMonth = a.getMonth(), t.drawYear = t.selectedYear = t.currentYear = a.getFullYear(), s === t.selectedMonth && o === t.selectedYear || i || this._notifyChange(t), this._adjustInstDate(t), t.input && t.input.val(n ? "" : this._formatDate(t))
  },
  _getDate: function(t) {
      return !t.currentYear || t.input && "" === t.input.val() ? null : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay))
  },
  _attachHandlers: function(e) {
      var i = this._get(e, "stepMonths"),
          n = "#" + e.id.replace(/\\\\/g, "\\");
      e.dpDiv.find("[data-handler]").map(function() {
          var e = {
              prev: function() {
                  t.datepicker._adjustDate(n, -i, "M")
              },
              next: function() {
                  t.datepicker._adjustDate(n, +i, "M")
              },
              hide: function() {
                  t.datepicker._hideDatepicker()
              },
              today: function() {
                  t.datepicker._gotoToday(n)
              },
              selectDay: function() {
                  return t.datepicker._selectDay(n, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
              },
              selectMonth: function() {
                  return t.datepicker._selectMonthYear(n, this, "M"), !1
              },
              selectYear: function() {
                  return t.datepicker._selectMonthYear(n, this, "Y"), !1
              }
          };
          t(this).on(this.getAttribute("data-event"), e[this.getAttribute("data-handler")])
      })
  },
  _generateHTML: function(t) {
      var e, i, n, s, o, a, r, l, c, h, u, d, p, f, m, g, v, y, b, _, w, x, C, k, S, T, D, M, I, P, $, E, A, F, O, N, L, H, z, R = new Date,
          W = this._daylightSavingAdjust(new Date(R.getFullYear(), R.getMonth(), R.getDate())),
          j = this._get(t, "isRTL"),
          B = this._get(t, "showButtonPanel"),
          Y = this._get(t, "hideIfNoPrevNext"),
          q = this._get(t, "navigationAsDateFormat"),
          U = this._getNumberOfMonths(t),
          V = this._get(t, "showCurrentAtPos"),
          X = this._get(t, "stepMonths"),
          G = 1 !== U[0] || 1 !== U[1],
          K = this._daylightSavingAdjust(t.currentDay ? new Date(t.currentYear, t.currentMonth, t.currentDay) : new Date(9999, 9, 9)),
          Q = this._getMinMaxDate(t, "min"),
          Z = this._getMinMaxDate(t, "max"),
          J = t.drawMonth - V,
          tt = t.drawYear;
      if (0 > J && (J += 12, tt--), Z)
          for (e = this._daylightSavingAdjust(new Date(Z.getFullYear(), Z.getMonth() - U[0] * U[1] + 1, Z.getDate())), e = Q && Q > e ? Q : e; this._daylightSavingAdjust(new Date(tt, J, 1)) > e;) 0 > --J && (J = 11, tt--);
      for (t.drawMonth = J, t.drawYear = tt, i = this._get(t, "prevText"), i = q ? this.formatDate(i, this._daylightSavingAdjust(new Date(tt, J - X, 1)), this._getFormatConfig(t)) : i, n = this._canAdjustMonth(t, -1, tt, J) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (j ? "e" : "w") + "'>" + i + "</span></a>" : Y ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (j ? "e" : "w") + "'>" + i + "</span></a>", s = this._get(t, "nextText"), s = q ? this.formatDate(s, this._daylightSavingAdjust(new Date(tt, J + X, 1)), this._getFormatConfig(t)) : s, o = this._canAdjustMonth(t, 1, tt, J) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (j ? "w" : "e") + "'>" + s + "</span></a>" : Y ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (j ? "w" : "e") + "'>" + s + "</span></a>", a = this._get(t, "currentText"), r = this._get(t, "gotoCurrent") && t.currentDay ? K : W, a = q ? this.formatDate(a, r, this._getFormatConfig(t)) : a, l = t.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(t, "closeText") + "</button>", c = B ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (j ? l : "") + (this._isInRange(t, r) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + a + "</button>" : "") + (j ? "" : l) + "</div>" : "", h = parseInt(this._get(t, "firstDay"), 10), h = isNaN(h) ? 0 : h, u = this._get(t, "showWeek"), d = this._get(t, "dayNames"), p = this._get(t, "dayNamesMin"), f = this._get(t, "monthNames"), m = this._get(t, "monthNamesShort"), g = this._get(t, "beforeShowDay"), v = this._get(t, "showOtherMonths"), y = this._get(t, "selectOtherMonths"), b = this._getDefaultDate(t), _ = "", x = 0; U[0] > x; x++) {
          for (C = "", this.maxRows = 4, k = 0; U[1] > k; k++) {
              if (S = this._daylightSavingAdjust(new Date(tt, J, t.selectedDay)), T = " ui-corner-all", D = "", G) {
                  if (D += "<div class='ui-datepicker-group", U[1] > 1) switch (k) {
                      case 0:
                          D += " ui-datepicker-group-first", T = " ui-corner-" + (j ? "right" : "left");
                          break;
                      case U[1] - 1:
                          D += " ui-datepicker-group-last", T = " ui-corner-" + (j ? "left" : "right");
                          break;
                      default:
                          D += " ui-datepicker-group-middle", T = ""
                  }
                  D += "'>"
              }
              for (D += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + T + "'>" + (/all|left/.test(T) && 0 === x ? j ? o : n : "") + (/all|right/.test(T) && 0 === x ? j ? n : o : "") + this._generateMonthYearHeader(t, J, tt, Q, Z, x > 0 || k > 0, f, m) + "</div><table class='ui-datepicker-calendar'><thead><tr>", M = u ? "<th class='ui-datepicker-week-col'>" + this._get(t, "weekHeader") + "</th>" : "", w = 0; 7 > w; w++) M += "<th scope='col'" + ((w + h + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + d[I = (w + h) % 7] + "'>" + p[I] + "</span></th>";
              for (D += M + "</tr></thead><tbody>", P = this._getDaysInMonth(tt, J), tt === t.selectedYear && J === t.selectedMonth && (t.selectedDay = Math.min(t.selectedDay, P)), $ = (this._getFirstDayOfMonth(tt, J) - h + 7) % 7, E = Math.ceil(($ + P) / 7), A = G && this.maxRows > E ? this.maxRows : E, this.maxRows = A, F = this._daylightSavingAdjust(new Date(tt, J, 1 - $)), O = 0; A > O; O++) {
                  for (D += "<tr>", N = u ? "<td class='ui-datepicker-week-col'>" + this._get(t, "calculateWeek")(F) + "</td>" : "", w = 0; 7 > w; w++) L = g ? g.apply(t.input ? t.input[0] : null, [F]) : [!0, ""], z = (H = F.getMonth() !== J) && !y || !L[0] || Q && Q > F || Z && F > Z, N += "<td class='" + ((w + h + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (H ? " ui-datepicker-other-month" : "") + (F.getTime() === S.getTime() && J === t.selectedMonth && t._keyEvent || b.getTime() === F.getTime() && b.getTime() === S.getTime() ? " " + this._dayOverClass : "") + (z ? " " + this._unselectableClass + " ui-state-disabled" : "") + (H && !v ? "" : " " + L[1] + (F.getTime() === K.getTime() ? " " + this._currentClass : "") + (F.getTime() === W.getTime() ? " ui-datepicker-today" : "")) + "'" + (H && !v || !L[2] ? "" : " title='" + L[2].replace(/'/g, "&#39;") + "'") + (z ? "" : " data-handler='selectDay' data-event='click' data-month='" + F.getMonth() + "' data-year='" + F.getFullYear() + "'") + ">" + (H && !v ? "&#xa0;" : z ? "<span class='ui-state-default'>" + F.getDate() + "</span>" : "<a class='ui-state-default" + (F.getTime() === W.getTime() ? " ui-state-highlight" : "") + (F.getTime() === K.getTime() ? " ui-state-active" : "") + (H ? " ui-priority-secondary" : "") + "' href='#'>" + F.getDate() + "</a>") + "</td>", F.setDate(F.getDate() + 1), F = this._daylightSavingAdjust(F);
                  D += N + "</tr>"
              }++J > 11 && (J = 0, tt++), C += D += "</tbody></table>" + (G ? "</div>" + (U[0] > 0 && k === U[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : "")
          }
          _ += C
      }
      return _ += c, t._keyEvent = !1, _
  },
  _generateMonthYearHeader: function(t, e, i, n, s, o, a, r) {
      var l, c, h, u, d, p, f, m, g = this._get(t, "changeMonth"),
          v = this._get(t, "changeYear"),
          y = this._get(t, "showMonthAfterYear"),
          b = "<div class='ui-datepicker-title'>",
          _ = "";
      if (o || !g) _ += "<span class='ui-datepicker-month'>" + a[e] + "</span>";
      else {
          for (l = n && n.getFullYear() === i, c = s && s.getFullYear() === i, _ += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", h = 0; 12 > h; h++)(!l || h >= n.getMonth()) && (!c || s.getMonth() >= h) && (_ += "<option value='" + h + "'" + (h === e ? " selected='selected'" : "") + ">" + r[h] + "</option>");
          _ += "</select>"
      }
      if (y || (b += _ + (!o && g && v ? "" : "&#xa0;")), !t.yearshtml)
          if (t.yearshtml = "", o || !v) b += "<span class='ui-datepicker-year'>" + i + "</span>";
          else {
              for (u = this._get(t, "yearRange").split(":"), d = (new Date).getFullYear(), f = (p = function(t) {
                      var e = t.match(/c[+\-].*/) ? i + parseInt(t.substring(1), 10) : t.match(/[+\-].*/) ? d + parseInt(t, 10) : parseInt(t, 10);
                      return isNaN(e) ? d : e
                  })(u[0]), m = Math.max(f, p(u[1] || "")), f = n ? Math.max(f, n.getFullYear()) : f, m = s ? Math.min(m, s.getFullYear()) : m, t.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; m >= f; f++) t.yearshtml += "<option value='" + f + "'" + (f === i ? " selected='selected'" : "") + ">" + f + "</option>";
              t.yearshtml += "</select>", b += t.yearshtml, t.yearshtml = null
          }
      return b += this._get(t, "yearSuffix"), y && (b += (!o && g && v ? "" : "&#xa0;") + _), b + "</div>"
  },
  _adjustInstDate: function(t, e, i) {
      var n = t.selectedYear + ("Y" === i ? e : 0),
          s = t.selectedMonth + ("M" === i ? e : 0),
          o = Math.min(t.selectedDay, this._getDaysInMonth(n, s)) + ("D" === i ? e : 0),
          a = this._restrictMinMax(t, this._daylightSavingAdjust(new Date(n, s, o)));
      t.selectedDay = a.getDate(), t.drawMonth = t.selectedMonth = a.getMonth(), t.drawYear = t.selectedYear = a.getFullYear(), ("M" === i || "Y" === i) && this._notifyChange(t)
  },
  _restrictMinMax: function(t, e) {
      var i = this._getMinMaxDate(t, "min"),
          n = this._getMinMaxDate(t, "max"),
          s = i && i > e ? i : e;
      return n && s > n ? n : s
  },
  _notifyChange: function(t) {
      var e = this._get(t, "onChangeMonthYear");
      e && e.apply(t.input ? t.input[0] : null, [t.selectedYear, t.selectedMonth + 1, t])
  },
  _getNumberOfMonths: function(t) {
      var e = this._get(t, "numberOfMonths");
      return null == e ? [1, 1] : "number" == typeof e ? [1, e] : e
  },
  _getMinMaxDate: function(t, e) {
      return this._determineDate(t, this._get(t, e + "Date"), null)
  },
  _getDaysInMonth: function(t, e) {
      return 32 - this._daylightSavingAdjust(new Date(t, e, 32)).getDate()
  },
  _getFirstDayOfMonth: function(t, e) {
      return new Date(t, e, 1).getDay()
  },
  _canAdjustMonth: function(t, e, i, n) {
      var s = this._getNumberOfMonths(t),
          o = this._daylightSavingAdjust(new Date(i, n + (0 > e ? e : s[0] * s[1]), 1));
      return 0 > e && o.setDate(this._getDaysInMonth(o.getFullYear(), o.getMonth())), this._isInRange(t, o)
  },
  _isInRange: function(t, e) {
      var i, n, s = this._getMinMaxDate(t, "min"),
          o = this._getMinMaxDate(t, "max"),
          a = null,
          r = null,
          l = this._get(t, "yearRange");
      return l && (i = l.split(":"), n = (new Date).getFullYear(), a = parseInt(i[0], 10), r = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (a += n), i[1].match(/[+\-].*/) && (r += n)), (!s || e.getTime() >= s.getTime()) && (!o || e.getTime() <= o.getTime()) && (!a || e.getFullYear() >= a) && (!r || r >= e.getFullYear())
  },
  _getFormatConfig: function(t) {
      var e = this._get(t, "shortYearCutoff");
      return {
          shortYearCutoff: e = "string" != typeof e ? e : (new Date).getFullYear() % 100 + parseInt(e, 10),
          dayNamesShort: this._get(t, "dayNamesShort"),
          dayNames: this._get(t, "dayNames"),
          monthNamesShort: this._get(t, "monthNamesShort"),
          monthNames: this._get(t, "monthNames")
      }
  },
  _formatDate: function(t, e, i, n) {
      e || (t.currentDay = t.selectedDay, t.currentMonth = t.selectedMonth, t.currentYear = t.selectedYear);
      var s = e ? "object" == typeof e ? e : this._daylightSavingAdjust(new Date(n, i, e)) : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
      return this.formatDate(this._get(t, "dateFormat"), s, this._getFormatConfig(t))
  }
}), t.fn.datepicker = function(e) {
  if (!this.length) return this;
  t.datepicker.initialized || (t(document).on("mousedown", t.datepicker._checkExternalClick), t.datepicker.initialized = !0), 0 === t("#" + t.datepicker._mainDivId).length && t("body").append(t.datepicker.dpDiv);
  var i = Array.prototype.slice.call(arguments, 1);
  return "string" != typeof e || "isDisabled" !== e && "getDate" !== e && "widget" !== e ? "option" === e && 2 === arguments.length && "string" == typeof arguments[1] ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i)) : this.each(function() {
      "string" == typeof e ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this].concat(i)) : t.datepicker._attachDatepicker(this, e)
  }) : t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i))
}, t.datepicker = new e, t.datepicker.initialized = !1, t.datepicker.uuid = (new Date).getTime(), t.datepicker.version = "1.12.1", t.datepicker, t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
var f = !1;
t(document).on("mouseup", function() {
  f = !1
}), t.widget("ui.mouse", {
  version: "1.12.1",
  options: {
      cancel: "input, textarea, button, select, option",
      distance: 1,
      delay: 0
  },
  _mouseInit: function() {
      var e = this;
      this.element.on("mousedown." + this.widgetName, function(t) {
          return e._mouseDown(t)
      }).on("click." + this.widgetName, function(i) {
          return !0 === t.data(i.target, e.widgetName + ".preventClickEvent") ? (t.removeData(i.target, e.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : void 0
      }), this.started = !1
  },
  _mouseDestroy: function() {
      this.element.off("." + this.widgetName), this._mouseMoveDelegate && this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate)
  },
  _mouseDown: function(e) {
      if (!f) {
          this._mouseMoved = !1, this._mouseStarted && this._mouseUp(e), this._mouseDownEvent = e;
          var i = this,
              n = 1 === e.which,
              s = !("string" != typeof this.options.cancel || !e.target.nodeName) && t(e.target).closest(this.options.cancel).length;
          return !(n && !s && this._mouseCapture(e)) || (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
              i.mouseDelayMet = !0
          }, this.options.delay)), this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = !1 !== this._mouseStart(e), !this._mouseStarted) ? (e.preventDefault(), !0) : (!0 === t.data(e.target, this.widgetName + ".preventClickEvent") && t.removeData(e.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(t) {
              return i._mouseMove(t)
          }, this._mouseUpDelegate = function(t) {
              return i._mouseUp(t)
          }, this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate), e.preventDefault(), f = !0, !0))
      }
  },
  _mouseMove: function(e) {
      if (this._mouseMoved) {
          if (t.ui.ie && (!document.documentMode || 9 > document.documentMode) && !e.button) return this._mouseUp(e);
          if (!e.which)
              if (e.originalEvent.altKey || e.originalEvent.ctrlKey || e.originalEvent.metaKey || e.originalEvent.shiftKey) this.ignoreMissingWhich = !0;
              else if (!this.ignoreMissingWhich) return this._mouseUp(e)
      }
      return (e.which || e.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(e), e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = !1 !== this._mouseStart(this._mouseDownEvent, e), this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted)
  },
  _mouseUp: function(e) {
      this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, e.target === this._mouseDownEvent.target && t.data(e.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(e)), this._mouseDelayTimer && (clearTimeout(this._mouseDelayTimer), delete this._mouseDelayTimer), this.ignoreMissingWhich = !1, f = !1, e.preventDefault()
  },
  _mouseDistanceMet: function(t) {
      return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance
  },
  _mouseDelayMet: function() {
      return this.mouseDelayMet
  },
  _mouseStart: function() {},
  _mouseDrag: function() {},
  _mouseStop: function() {},
  _mouseCapture: function() {
      return !0
  }
}), t.ui.plugin = {
  add: function(e, i, n) {
      var s, o = t.ui[e].prototype;
      for (s in n) o.plugins[s] = o.plugins[s] || [], o.plugins[s].push([i, n[s]])
  },
  call: function(t, e, i, n) {
      var s, o = t.plugins[e];
      if (o && (n || t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType))
          for (s = 0; o.length > s; s++) t.options[o[s][0]] && o[s][1].apply(t.element, i)
  }
}, t.ui.safeBlur = function(e) {
  e && "body" !== e.nodeName.toLowerCase() && t(e).trigger("blur")
}, t.widget("ui.draggable", t.ui.mouse, {
  version: "1.12.1",
  widgetEventPrefix: "drag",
  options: {
      addClasses: !0,
      appendTo: "parent",
      axis: !1,
      connectToSortable: !1,
      containment: !1,
      cursor: "auto",
      cursorAt: !1,
      grid: !1,
      handle: !1,
      helper: "original",
      iframeFix: !1,
      opacity: !1,
      refreshPositions: !1,
      revert: !1,
      revertDuration: 500,
      scope: "default",
      scroll: !0,
      scrollSensitivity: 20,
      scrollSpeed: 20,
      snap: !1,
      snapMode: "both",
      snapTolerance: 20,
      stack: !1,
      zIndex: !1,
      drag: null,
      start: null,
      stop: null
  },
  _create: function() {
      "original" === this.options.helper && this._setPositionRelative(), this.options.addClasses && this._addClass("ui-draggable"), this._setHandleClassName(), this._mouseInit()
  },
  _setOption: function(t, e) {
      this._super(t, e), "handle" === t && (this._removeHandleClassName(), this._setHandleClassName())
  },
  _destroy: function() {
      return (this.helper || this.element).is(".ui-draggable-dragging") ? void(this.destroyOnClear = !0) : (this._removeHandleClassName(), void this._mouseDestroy())
  },
  _mouseCapture: function(e) {
      var i = this.options;
      return !(this.helper || i.disabled || t(e.target).closest(".ui-resizable-handle").length > 0) && (this.handle = this._getHandle(e), !!this.handle && (this._blurActiveElement(e), this._blockFrames(!0 === i.iframeFix ? "iframe" : i.iframeFix), !0))
  },
  _blockFrames: function(e) {
      this.iframeBlocks = this.document.find(e).map(function() {
          var e = t(this);
          return t("<div>").css("position", "absolute").appendTo(e.parent()).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).offset(e.offset())[0]
      })
  },
  _unblockFrames: function() {
      this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
  },
  _blurActiveElement: function(e) {
      var i = t.ui.safeActiveElement(this.document[0]);
      t(e.target).closest(i).length || t.ui.safeBlur(i)
  },
  _mouseStart: function(e) {
      var i = this.options;
      return this.helper = this._createHelper(e), this._addClass(this.helper, "ui-draggable-dragging"), this._cacheHelperProportions(), t.ui.ddmanager && (t.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(!0), this.offsetParent = this.helper.offsetParent(), this.hasFixedAncestor = this.helper.parents().filter(function() {
          return "fixed" === t(this).css("position")
      }).length > 0, this.positionAbs = this.element.offset(), this._refreshOffsets(e), this.originalPosition = this.position = this._generatePosition(e, !1), this.originalPageX = e.pageX, this.originalPageY = e.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), this._setContainment(), !1 === this._trigger("start", e) ? (this._clear(), !1) : (this._cacheHelperProportions(), t.ui.ddmanager && !i.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this._mouseDrag(e, !0), t.ui.ddmanager && t.ui.ddmanager.dragStart(this, e), !0)
  },
  _refreshOffsets: function(t) {
      this.offset = {
          top: this.positionAbs.top - this.margins.top,
          left: this.positionAbs.left - this.margins.left,
          scroll: !1,
          parent: this._getParentOffset(),
          relative: this._getRelativeOffset()
      }, this.offset.click = {
          left: t.pageX - this.offset.left,
          top: t.pageY - this.offset.top
      }
  },
  _mouseDrag: function(e, i) {
      if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(e, !0), this.positionAbs = this._convertPositionTo("absolute"), !i) {
          var n = this._uiHash();
          if (!1 === this._trigger("drag", e, n)) return this._mouseUp(new t.Event("mouseup", e)), !1;
          this.position = n.position
      }
      return this.helper[0].style.left = this.position.left + "px", this.helper[0].style.top = this.position.top + "px", t.ui.ddmanager && t.ui.ddmanager.drag(this, e), !1
  },
  _mouseStop: function(e) {
      var i = this,
          n = !1;
      return t.ui.ddmanager && !this.options.dropBehaviour && (n = t.ui.ddmanager.drop(this, e)), this.dropped && (n = this.dropped, this.dropped = !1), "invalid" === this.options.revert && !n || "valid" === this.options.revert && n || !0 === this.options.revert || t.isFunction(this.options.revert) && this.options.revert.call(this.element, n) ? t(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
          !1 !== i._trigger("stop", e) && i._clear()
      }) : !1 !== this._trigger("stop", e) && this._clear(), !1
  },
  _mouseUp: function(e) {
      return this._unblockFrames(), t.ui.ddmanager && t.ui.ddmanager.dragStop(this, e), this.handleElement.is(e.target) && this.element.trigger("focus"), t.ui.mouse.prototype._mouseUp.call(this, e)
  },
  cancel: function() {
      return this.helper.is(".ui-draggable-dragging") ? this._mouseUp(new t.Event("mouseup", {
          target: this.element[0]
      })) : this._clear(), this
  },
  _getHandle: function(e) {
      return !this.options.handle || !!t(e.target).closest(this.element.find(this.options.handle)).length
  },
  _setHandleClassName: function() {
      this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element, this._addClass(this.handleElement, "ui-draggable-handle")
  },
  _removeHandleClassName: function() {
      this._removeClass(this.handleElement, "ui-draggable-handle")
  },
  _createHelper: function(e) {
      var i = this.options,
          n = t.isFunction(i.helper),
          s = n ? t(i.helper.apply(this.element[0], [e])) : "clone" === i.helper ? this.element.clone().removeAttr("id") : this.element;
      return s.parents("body").length || s.appendTo("parent" === i.appendTo ? this.element[0].parentNode : i.appendTo), n && s[0] === this.element[0] && this._setPositionRelative(), s[0] === this.element[0] || /(fixed|absolute)/.test(s.css("position")) || s.css("position", "absolute"), s
  },
  _setPositionRelative: function() {
      /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative")
  },
  _adjustOffsetFromHelper: function(e) {
      "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
          left: +e[0],
          top: +e[1] || 0
      }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
  },
  _isRootNode: function(t) {
      return /(html|body)/i.test(t.tagName) || t === this.document[0]
  },
  _getParentOffset: function() {
      var e = this.offsetParent.offset(),
          i = this.document[0];
      return "absolute" === this.cssPosition && this.scrollParent[0] !== i && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), this._isRootNode(this.offsetParent[0]) && (e = {
          top: 0,
          left: 0
      }), {
          top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
          left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
      }
  },
  _getRelativeOffset: function() {
      if ("relative" !== this.cssPosition) return {
          top: 0,
          left: 0
      };
      var t = this.element.position(),
          e = this._isRootNode(this.scrollParent[0]);
      return {
          top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + (e ? 0 : this.scrollParent.scrollTop()),
          left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + (e ? 0 : this.scrollParent.scrollLeft())
      }
  },
  _cacheMargins: function() {
      this.margins = {
          left: parseInt(this.element.css("marginLeft"), 10) || 0,
          top: parseInt(this.element.css("marginTop"), 10) || 0,
          right: parseInt(this.element.css("marginRight"), 10) || 0,
          bottom: parseInt(this.element.css("marginBottom"), 10) || 0
      }
  },
  _cacheHelperProportions: function() {
      this.helperProportions = {
          width: this.helper.outerWidth(),
          height: this.helper.outerHeight()
      }
  },
  _setContainment: function() {
      var e, i, n, s = this.options,
          o = this.document[0];
      return this.relativeContainer = null, s.containment ? "window" === s.containment ? void(this.containment = [t(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, t(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, t(window).scrollLeft() + t(window).width() - this.helperProportions.width - this.margins.left, t(window).scrollTop() + (t(window).height() || o.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : "document" === s.containment ? void(this.containment = [0, 0, t(o).width() - this.helperProportions.width - this.margins.left, (t(o).height() || o.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : s.containment.constructor === Array ? void(this.containment = s.containment) : ("parent" === s.containment && (s.containment = this.helper[0].parentNode), void((n = (i = t(s.containment))[0]) && (e = /(scroll|auto)/.test(i.css("overflow")), this.containment = [(parseInt(i.css("borderLeftWidth"), 10) || 0) + (parseInt(i.css("paddingLeft"), 10) || 0), (parseInt(i.css("borderTopWidth"), 10) || 0) + (parseInt(i.css("paddingTop"), 10) || 0), (e ? Math.max(n.scrollWidth, n.offsetWidth) : n.offsetWidth) - (parseInt(i.css("borderRightWidth"), 10) || 0) - (parseInt(i.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (e ? Math.max(n.scrollHeight, n.offsetHeight) : n.offsetHeight) - (parseInt(i.css("borderBottomWidth"), 10) || 0) - (parseInt(i.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relativeContainer = i))) : void(this.containment = null)
  },
  _convertPositionTo: function(t, e) {
      e || (e = this.position);
      var i = "absolute" === t ? 1 : -1,
          n = this._isRootNode(this.scrollParent[0]);
      return {
          top: e.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.offset.scroll.top : n ? 0 : this.offset.scroll.top) * i,
          left: e.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.offset.scroll.left : n ? 0 : this.offset.scroll.left) * i
      }
  },
  _generatePosition: function(t, e) {
      var i, n, s, o, a = this.options,
          r = this._isRootNode(this.scrollParent[0]),
          l = t.pageX,
          c = t.pageY;
      return r && this.offset.scroll || (this.offset.scroll = {
          top: this.scrollParent.scrollTop(),
          left: this.scrollParent.scrollLeft()
      }), e && (this.containment && (this.relativeContainer ? (n = this.relativeContainer.offset(), i = [this.containment[0] + n.left, this.containment[1] + n.top, this.containment[2] + n.left, this.containment[3] + n.top]) : i = this.containment, t.pageX - this.offset.click.left < i[0] && (l = i[0] + this.offset.click.left), t.pageY - this.offset.click.top < i[1] && (c = i[1] + this.offset.click.top), t.pageX - this.offset.click.left > i[2] && (l = i[2] + this.offset.click.left), t.pageY - this.offset.click.top > i[3] && (c = i[3] + this.offset.click.top)), a.grid && (s = a.grid[1] ? this.originalPageY + Math.round((c - this.originalPageY) / a.grid[1]) * a.grid[1] : this.originalPageY, c = i ? s - this.offset.click.top >= i[1] || s - this.offset.click.top > i[3] ? s : s - this.offset.click.top >= i[1] ? s - a.grid[1] : s + a.grid[1] : s, o = a.grid[0] ? this.originalPageX + Math.round((l - this.originalPageX) / a.grid[0]) * a.grid[0] : this.originalPageX, l = i ? o - this.offset.click.left >= i[0] || o - this.offset.click.left > i[2] ? o : o - this.offset.click.left >= i[0] ? o - a.grid[0] : o + a.grid[0] : o), "y" === a.axis && (l = this.originalPageX), "x" === a.axis && (c = this.originalPageY)), {
          top: c - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : r ? 0 : this.offset.scroll.top),
          left: l - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : r ? 0 : this.offset.scroll.left)
      }
  },
  _clear: function() {
      this._removeClass(this.helper, "ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1, this.destroyOnClear && this.destroy()
  },
  _trigger: function(e, i, n) {
      return n = n || this._uiHash(), t.ui.plugin.call(this, e, [i, n, this], !0), /^(drag|start|stop)/.test(e) && (this.positionAbs = this._convertPositionTo("absolute"), n.offset = this.positionAbs), t.Widget.prototype._trigger.call(this, e, i, n)
  },
  plugins: {},
  _uiHash: function() {
      return {
          helper: this.helper,
          position: this.position,
          originalPosition: this.originalPosition,
          offset: this.positionAbs
      }
  }
}), t.ui.plugin.add("draggable", "connectToSortable", {
  start: function(e, i, n) {
      var s = t.extend({}, i, {
          item: n.element
      });
      n.sortables = [], t(n.options.connectToSortable).each(function() {
          var i = t(this).sortable("instance");
          i && !i.options.disabled && (n.sortables.push(i), i.refreshPositions(), i._trigger("activate", e, s))
      })
  },
  stop: function(e, i, n) {
      var s = t.extend({}, i, {
          item: n.element
      });
      n.cancelHelperRemoval = !1, t.each(n.sortables, function() {
          var t = this;
          t.isOver ? (t.isOver = 0, n.cancelHelperRemoval = !0, t.cancelHelperRemoval = !1, t._storedCSS = {
              position: t.placeholder.css("position"),
              top: t.placeholder.css("top"),
              left: t.placeholder.css("left")
          }, t._mouseStop(e), t.options.helper = t.options._helper) : (t.cancelHelperRemoval = !0, t._trigger("deactivate", e, s))
      })
  },
  drag: function(e, i, n) {
      t.each(n.sortables, function() {
          var s = !1,
              o = this;
          o.positionAbs = n.positionAbs, o.helperProportions = n.helperProportions, o.offset.click = n.offset.click, o._intersectsWith(o.containerCache) && (s = !0, t.each(n.sortables, function() {
              return this.positionAbs = n.positionAbs, this.helperProportions = n.helperProportions, this.offset.click = n.offset.click, this !== o && this._intersectsWith(this.containerCache) && t.contains(o.element[0], this.element[0]) && (s = !1), s
          })), s ? (o.isOver || (o.isOver = 1, n._parent = i.helper.parent(), o.currentItem = i.helper.appendTo(o.element).data("ui-sortable-item", !0), o.options._helper = o.options.helper, o.options.helper = function() {
              return i.helper[0]
          }, e.target = o.currentItem[0], o._mouseCapture(e, !0), o._mouseStart(e, !0, !0), o.offset.click.top = n.offset.click.top, o.offset.click.left = n.offset.click.left, o.offset.parent.left -= n.offset.parent.left - o.offset.parent.left, o.offset.parent.top -= n.offset.parent.top - o.offset.parent.top, n._trigger("toSortable", e), n.dropped = o.element, t.each(n.sortables, function() {
              this.refreshPositions()
          }), n.currentItem = n.element, o.fromOutside = n), o.currentItem && (o._mouseDrag(e), i.position = o.position)) : o.isOver && (o.isOver = 0, o.cancelHelperRemoval = !0, o.options._revert = o.options.revert, o.options.revert = !1, o._trigger("out", e, o._uiHash(o)), o._mouseStop(e, !0), o.options.revert = o.options._revert, o.options.helper = o.options._helper, o.placeholder && o.placeholder.remove(), i.helper.appendTo(n._parent), n._refreshOffsets(e), i.position = n._generatePosition(e, !0), n._trigger("fromSortable", e), n.dropped = !1, t.each(n.sortables, function() {
              this.refreshPositions()
          }))
      })
  }
}), t.ui.plugin.add("draggable", "cursor", {
  start: function(e, i, n) {
      var s = t("body"),
          o = n.options;
      s.css("cursor") && (o._cursor = s.css("cursor")), s.css("cursor", o.cursor)
  },
  stop: function(e, i, n) {
      var s = n.options;
      s._cursor && t("body").css("cursor", s._cursor)
  }
}), t.ui.plugin.add("draggable", "opacity", {
  start: function(e, i, n) {
      var s = t(i.helper),
          o = n.options;
      s.css("opacity") && (o._opacity = s.css("opacity")), s.css("opacity", o.opacity)
  },
  stop: function(e, i, n) {
      var s = n.options;
      s._opacity && t(i.helper).css("opacity", s._opacity)
  }
}), t.ui.plugin.add("draggable", "scroll", {
  start: function(t, e, i) {
      i.scrollParentNotHidden || (i.scrollParentNotHidden = i.helper.scrollParent(!1)), i.scrollParentNotHidden[0] !== i.document[0] && "HTML" !== i.scrollParentNotHidden[0].tagName && (i.overflowOffset = i.scrollParentNotHidden.offset())
  },
  drag: function(e, i, n) {
      var s = n.options,
          o = !1,
          a = n.scrollParentNotHidden[0],
          r = n.document[0];
      a !== r && "HTML" !== a.tagName ? (s.axis && "x" === s.axis || (n.overflowOffset.top + a.offsetHeight - e.pageY < s.scrollSensitivity ? a.scrollTop = o = a.scrollTop + s.scrollSpeed : e.pageY - n.overflowOffset.top < s.scrollSensitivity && (a.scrollTop = o = a.scrollTop - s.scrollSpeed)), s.axis && "y" === s.axis || (n.overflowOffset.left + a.offsetWidth - e.pageX < s.scrollSensitivity ? a.scrollLeft = o = a.scrollLeft + s.scrollSpeed : e.pageX - n.overflowOffset.left < s.scrollSensitivity && (a.scrollLeft = o = a.scrollLeft - s.scrollSpeed))) : (s.axis && "x" === s.axis || (e.pageY - t(r).scrollTop() < s.scrollSensitivity ? o = t(r).scrollTop(t(r).scrollTop() - s.scrollSpeed) : t(window).height() - (e.pageY - t(r).scrollTop()) < s.scrollSensitivity && (o = t(r).scrollTop(t(r).scrollTop() + s.scrollSpeed))), s.axis && "y" === s.axis || (e.pageX - t(r).scrollLeft() < s.scrollSensitivity ? o = t(r).scrollLeft(t(r).scrollLeft() - s.scrollSpeed) : t(window).width() - (e.pageX - t(r).scrollLeft()) < s.scrollSensitivity && (o = t(r).scrollLeft(t(r).scrollLeft() + s.scrollSpeed)))), !1 !== o && t.ui.ddmanager && !s.dropBehaviour && t.ui.ddmanager.prepareOffsets(n, e)
  }
}), t.ui.plugin.add("draggable", "snap", {
  start: function(e, i, n) {
      var s = n.options;
      n.snapElements = [], t(s.snap.constructor !== String ? s.snap.items || ":data(ui-draggable)" : s.snap).each(function() {
          var e = t(this),
              i = e.offset();
          this !== n.element[0] && n.snapElements.push({
              item: this,
              width: e.outerWidth(),
              height: e.outerHeight(),
              top: i.top,
              left: i.left
          })
      })
  },
  drag: function(e, i, n) {
      var s, o, a, r, l, c, h, u, d, p, f = n.options,
          m = f.snapTolerance,
          g = i.offset.left,
          v = g + n.helperProportions.width,
          y = i.offset.top,
          b = y + n.helperProportions.height;
      for (d = n.snapElements.length - 1; d >= 0; d--) c = (l = n.snapElements[d].left - n.margins.left) + n.snapElements[d].width, u = (h = n.snapElements[d].top - n.margins.top) + n.snapElements[d].height, l - m > v || g > c + m || h - m > b || y > u + m || !t.contains(n.snapElements[d].item.ownerDocument, n.snapElements[d].item) ? (n.snapElements[d].snapping && n.options.snap.release && n.options.snap.release.call(n.element, e, t.extend(n._uiHash(), {
          snapItem: n.snapElements[d].item
      })), n.snapElements[d].snapping = !1) : ("inner" !== f.snapMode && (s = m >= Math.abs(h - b), o = m >= Math.abs(u - y), a = m >= Math.abs(l - v), r = m >= Math.abs(c - g), s && (i.position.top = n._convertPositionTo("relative", {
          top: h - n.helperProportions.height,
          left: 0
      }).top), o && (i.position.top = n._convertPositionTo("relative", {
          top: u,
          left: 0
      }).top), a && (i.position.left = n._convertPositionTo("relative", {
          top: 0,
          left: l - n.helperProportions.width
      }).left), r && (i.position.left = n._convertPositionTo("relative", {
          top: 0,
          left: c
      }).left)), p = s || o || a || r, "outer" !== f.snapMode && (s = m >= Math.abs(h - y), o = m >= Math.abs(u - b), a = m >= Math.abs(l - g), r = m >= Math.abs(c - v), s && (i.position.top = n._convertPositionTo("relative", {
          top: h,
          left: 0
      }).top), o && (i.position.top = n._convertPositionTo("relative", {
          top: u - n.helperProportions.height,
          left: 0
      }).top), a && (i.position.left = n._convertPositionTo("relative", {
          top: 0,
          left: l
      }).left), r && (i.position.left = n._convertPositionTo("relative", {
          top: 0,
          left: c - n.helperProportions.width
      }).left)), !n.snapElements[d].snapping && (s || o || a || r || p) && n.options.snap.snap && n.options.snap.snap.call(n.element, e, t.extend(n._uiHash(), {
          snapItem: n.snapElements[d].item
      })), n.snapElements[d].snapping = s || o || a || r || p)
  }
}), t.ui.plugin.add("draggable", "stack", {
  start: function(e, i, n) {
      var s, o = n.options,
          a = t.makeArray(t(o.stack)).sort(function(e, i) {
              return (parseInt(t(e).css("zIndex"), 10) || 0) - (parseInt(t(i).css("zIndex"), 10) || 0)
          });
      a.length && (s = parseInt(t(a[0]).css("zIndex"), 10) || 0, t(a).each(function(e) {
          t(this).css("zIndex", s + e)
      }), this.css("zIndex", s + a.length))
  }
}), t.ui.plugin.add("draggable", "zIndex", {
  start: function(e, i, n) {
      var s = t(i.helper),
          o = n.options;
      s.css("zIndex") && (o._zIndex = s.css("zIndex")), s.css("zIndex", o.zIndex)
  },
  stop: function(e, i, n) {
      var s = n.options;
      s._zIndex && t(i.helper).css("zIndex", s._zIndex)
  }
}), t.ui.draggable, t.widget("ui.resizable", t.ui.mouse, {
  version: "1.12.1",
  widgetEventPrefix: "resize",
  options: {
      alsoResize: !1,
      animate: !1,
      animateDuration: "slow",
      animateEasing: "swing",
      aspectRatio: !1,
      autoHide: !1,
      classes: {
          "ui-resizable-se": "ui-icon ui-icon-gripsmall-diagonal-se"
      },
      containment: !1,
      ghost: !1,
      grid: !1,
      handles: "e,s,se",
      helper: !1,
      maxHeight: null,
      maxWidth: null,
      minHeight: 10,
      minWidth: 10,
      zIndex: 90,
      resize: null,
      start: null,
      stop: null
  },
  _num: function(t) {
      return parseFloat(t) || 0
  },
  _isNumber: function(t) {
      return !isNaN(parseFloat(t))
  },
  _hasScroll: function(e, i) {
      if ("hidden" === t(e).css("overflow")) return !1;
      var n = i && "left" === i ? "scrollLeft" : "scrollTop",
          s = !1;
      return e[n] > 0 || (e[n] = 1, s = e[n] > 0, e[n] = 0, s)
  },
  _create: function() {
      var e, i = this.options,
          n = this;
      this._addClass("ui-resizable"), t.extend(this, {
          _aspectRatio: !!i.aspectRatio,
          aspectRatio: i.aspectRatio,
          originalElement: this.element,
          _proportionallyResizeElements: [],
          _helper: i.helper || i.ghost || i.animate ? i.helper || "ui-resizable-helper" : null
      }), this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i) && (this.element.wrap(t("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
          position: this.element.css("position"),
          width: this.element.outerWidth(),
          height: this.element.outerHeight(),
          top: this.element.css("top"),
          left: this.element.css("left")
      })), this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")), this.elementIsWrapper = !0, e = {
          marginTop: this.originalElement.css("marginTop"),
          marginRight: this.originalElement.css("marginRight"),
          marginBottom: this.originalElement.css("marginBottom"),
          marginLeft: this.originalElement.css("marginLeft")
      }, this.element.css(e), this.originalElement.css("margin", 0), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
          position: "static",
          zoom: 1,
          display: "block"
      })), this.originalElement.css(e), this._proportionallyResize()), this._setupHandles(), i.autoHide && t(this.element).on("mouseenter", function() {
          i.disabled || (n._removeClass("ui-resizable-autohide"), n._handles.show())
      }).on("mouseleave", function() {
          i.disabled || n.resizing || (n._addClass("ui-resizable-autohide"), n._handles.hide())
      }), this._mouseInit()
  },
  _destroy: function() {
      this._mouseDestroy();
      var e, i = function(e) {
          t(e).removeData("resizable").removeData("ui-resizable").off(".resizable").find(".ui-resizable-handle").remove()
      };
      return this.elementIsWrapper && (i(this.element), e = this.element, this.originalElement.css({
          position: e.css("position"),
          width: e.outerWidth(),
          height: e.outerHeight(),
          top: e.css("top"),
          left: e.css("left")
      }).insertAfter(e), e.remove()), this.originalElement.css("resize", this.originalResizeStyle), i(this.originalElement), this
  },
  _setOption: function(t, e) {
      switch (this._super(t, e), t) {
          case "handles":
              this._removeHandles(), this._setupHandles()
      }
  },
  _setupHandles: function() {
      var e, i, n, s, o, a = this.options,
          r = this;
      if (this.handles = a.handles || (t(".ui-resizable-handle", this.element).length ? {
              n: ".ui-resizable-n",
              e: ".ui-resizable-e",
              s: ".ui-resizable-s",
              w: ".ui-resizable-w",
              se: ".ui-resizable-se",
              sw: ".ui-resizable-sw",
              ne: ".ui-resizable-ne",
              nw: ".ui-resizable-nw"
          } : "e,s,se"), this._handles = t(), this.handles.constructor === String)
          for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), n = this.handles.split(","), this.handles = {}, i = 0; n.length > i; i++) s = "ui-resizable-" + (e = t.trim(n[i])), o = t("<div>"), this._addClass(o, "ui-resizable-handle " + s), o.css({
              zIndex: a.zIndex
          }), this.handles[e] = ".ui-resizable-" + e, this.element.append(o);
      this._renderAxis = function(e) {
          var i, n, s, o;
          for (i in e = e || this.element, this.handles) this.handles[i].constructor === String ? this.handles[i] = this.element.children(this.handles[i]).first().show() : (this.handles[i].jquery || this.handles[i].nodeType) && (this.handles[i] = t(this.handles[i]), this._on(this.handles[i], {
              mousedown: r._mouseDown
          })), this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i) && (n = t(this.handles[i], this.element), o = /sw|ne|nw|se|n|s/.test(i) ? n.outerHeight() : n.outerWidth(), s = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""), e.css(s, o), this._proportionallyResize()), this._handles = this._handles.add(this.handles[i])
      }, this._renderAxis(this.element), this._handles = this._handles.add(this.element.find(".ui-resizable-handle")), this._handles.disableSelection(), this._handles.on("mouseover", function() {
          r.resizing || (this.className && (o = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), r.axis = o && o[1] ? o[1] : "se")
      }), a.autoHide && (this._handles.hide(), this._addClass("ui-resizable-autohide"))
  },
  _removeHandles: function() {
      this._handles.remove()
  },
  _mouseCapture: function(e) {
      var i, n, s = !1;
      for (i in this.handles)((n = t(this.handles[i])[0]) === e.target || t.contains(n, e.target)) && (s = !0);
      return !this.options.disabled && s
  },
  _mouseStart: function(e) {
      var i, n, s, o = this.options,
          a = this.element;
      return this.resizing = !0, this._renderProxy(), i = this._num(this.helper.css("left")), n = this._num(this.helper.css("top")), o.containment && (i += t(o.containment).scrollLeft() || 0, n += t(o.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
          left: i,
          top: n
      }, this.size = this._helper ? {
          width: this.helper.width(),
          height: this.helper.height()
      } : {
          width: a.width(),
          height: a.height()
      }, this.originalSize = this._helper ? {
          width: a.outerWidth(),
          height: a.outerHeight()
      } : {
          width: a.width(),
          height: a.height()
      }, this.sizeDiff = {
          width: a.outerWidth() - a.width(),
          height: a.outerHeight() - a.height()
      }, this.originalPosition = {
          left: i,
          top: n
      }, this.originalMousePosition = {
          left: e.pageX,
          top: e.pageY
      }, this.aspectRatio = "number" == typeof o.aspectRatio ? o.aspectRatio : this.originalSize.width / this.originalSize.height || 1, s = t(".ui-resizable-" + this.axis).css("cursor"), t("body").css("cursor", "auto" === s ? this.axis + "-resize" : s), this._addClass("ui-resizable-resizing"), this._propagate("start", e), !0
  },
  _mouseDrag: function(e) {
      var i, n, s = this.originalMousePosition,
          o = this.axis,
          a = e.pageX - s.left || 0,
          r = e.pageY - s.top || 0,
          l = this._change[o];
      return this._updatePrevProperties(), !!l && (i = l.apply(this, [e, a, r]), this._updateVirtualBoundaries(e.shiftKey), (this._aspectRatio || e.shiftKey) && (i = this._updateRatio(i, e)), i = this._respectSize(i, e), this._updateCache(i), this._propagate("resize", e), n = this._applyChanges(), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), t.isEmptyObject(n) || (this._updatePrevProperties(), this._trigger("resize", e, this.ui()), this._applyChanges()), !1)
  },
  _mouseStop: function(e) {
      this.resizing = !1;
      var i, n, s, o, a, r, l, c = this.options,
          h = this;
      return this._helper && (s = (n = (i = this._proportionallyResizeElements).length && /textarea/i.test(i[0].nodeName)) && this._hasScroll(i[0], "left") ? 0 : h.sizeDiff.height, o = n ? 0 : h.sizeDiff.width, a = {
          width: h.helper.width() - o,
          height: h.helper.height() - s
      }, r = parseFloat(h.element.css("left")) + (h.position.left - h.originalPosition.left) || null, l = parseFloat(h.element.css("top")) + (h.position.top - h.originalPosition.top) || null, c.animate || this.element.css(t.extend(a, {
          top: l,
          left: r
      })), h.helper.height(h.size.height), h.helper.width(h.size.width), this._helper && !c.animate && this._proportionallyResize()), t("body").css("cursor", "auto"), this._removeClass("ui-resizable-resizing"), this._propagate("stop", e), this._helper && this.helper.remove(), !1
  },
  _updatePrevProperties: function() {
      this.prevPosition = {
          top: this.position.top,
          left: this.position.left
      }, this.prevSize = {
          width: this.size.width,
          height: this.size.height
      }
  },
  _applyChanges: function() {
      var t = {};
      return this.position.top !== this.prevPosition.top && (t.top = this.position.top + "px"), this.position.left !== this.prevPosition.left && (t.left = this.position.left + "px"), this.size.width !== this.prevSize.width && (t.width = this.size.width + "px"), this.size.height !== this.prevSize.height && (t.height = this.size.height + "px"), this.helper.css(t), t
  },
  _updateVirtualBoundaries: function(t) {
      var e, i, n, s, o, a = this.options;
      o = {
          minWidth: this._isNumber(a.minWidth) ? a.minWidth : 0,
          maxWidth: this._isNumber(a.maxWidth) ? a.maxWidth : 1 / 0,
          minHeight: this._isNumber(a.minHeight) ? a.minHeight : 0,
          maxHeight: this._isNumber(a.maxHeight) ? a.maxHeight : 1 / 0
      }, (this._aspectRatio || t) && (e = o.minHeight * this.aspectRatio, n = o.minWidth / this.aspectRatio, i = o.maxHeight * this.aspectRatio, s = o.maxWidth / this.aspectRatio, e > o.minWidth && (o.minWidth = e), n > o.minHeight && (o.minHeight = n), o.maxWidth > i && (o.maxWidth = i), o.maxHeight > s && (o.maxHeight = s)), this._vBoundaries = o
  },
  _updateCache: function(t) {
      this.offset = this.helper.offset(), this._isNumber(t.left) && (this.position.left = t.left), this._isNumber(t.top) && (this.position.top = t.top), this._isNumber(t.height) && (this.size.height = t.height), this._isNumber(t.width) && (this.size.width = t.width)
  },
  _updateRatio: function(t) {
      var e = this.position,
          i = this.size,
          n = this.axis;
      return this._isNumber(t.height) ? t.width = t.height * this.aspectRatio : this._isNumber(t.width) && (t.height = t.width / this.aspectRatio), "sw" === n && (t.left = e.left + (i.width - t.width), t.top = null), "nw" === n && (t.top = e.top + (i.height - t.height), t.left = e.left + (i.width - t.width)), t
  },
  _respectSize: function(t) {
      var e = this._vBoundaries,
          i = this.axis,
          n = this._isNumber(t.width) && e.maxWidth && e.maxWidth < t.width,
          s = this._isNumber(t.height) && e.maxHeight && e.maxHeight < t.height,
          o = this._isNumber(t.width) && e.minWidth && e.minWidth > t.width,
          a = this._isNumber(t.height) && e.minHeight && e.minHeight > t.height,
          r = this.originalPosition.left + this.originalSize.width,
          l = this.originalPosition.top + this.originalSize.height,
          c = /sw|nw|w/.test(i),
          h = /nw|ne|n/.test(i);
      return o && (t.width = e.minWidth), a && (t.height = e.minHeight), n && (t.width = e.maxWidth), s && (t.height = e.maxHeight), o && c && (t.left = r - e.minWidth), n && c && (t.left = r - e.maxWidth), a && h && (t.top = l - e.minHeight), s && h && (t.top = l - e.maxHeight), t.width || t.height || t.left || !t.top ? t.width || t.height || t.top || !t.left || (t.left = null) : t.top = null, t
  },
  _getPaddingPlusBorderDimensions: function(t) {
      for (var e = 0, i = [], n = [t.css("borderTopWidth"), t.css("borderRightWidth"), t.css("borderBottomWidth"), t.css("borderLeftWidth")], s = [t.css("paddingTop"), t.css("paddingRight"), t.css("paddingBottom"), t.css("paddingLeft")]; 4 > e; e++) i[e] = parseFloat(n[e]) || 0, i[e] += parseFloat(s[e]) || 0;
      return {
          height: i[0] + i[2],
          width: i[1] + i[3]
      }
  },
  _proportionallyResize: function() {
      if (this._proportionallyResizeElements.length)
          for (var t, e = 0, i = this.helper || this.element; this._proportionallyResizeElements.length > e; e++) t = this._proportionallyResizeElements[e], this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(t)), t.css({
              height: i.height() - this.outerDimensions.height || 0,
              width: i.width() - this.outerDimensions.width || 0
          })
  },
  _renderProxy: function() {
      var e = this.element,
          i = this.options;
      this.elementOffset = e.offset(), this._helper ? (this.helper = this.helper || t("<div style='overflow:hidden;'></div>"), this._addClass(this.helper, this._helper), this.helper.css({
          width: this.element.outerWidth(),
          height: this.element.outerHeight(),
          position: "absolute",
          left: this.elementOffset.left + "px",
          top: this.elementOffset.top + "px",
          zIndex: ++i.zIndex
      }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
  },
  _change: {
      e: function(t, e) {
          return {
              width: this.originalSize.width + e
          }
      },
      w: function(t, e) {
          var i = this.originalSize;
          return {
              left: this.originalPosition.left + e,
              width: i.width - e
          }
      },
      n: function(t, e, i) {
          var n = this.originalSize;
          return {
              top: this.originalPosition.top + i,
              height: n.height - i
          }
      },
      s: function(t, e, i) {
          return {
              height: this.originalSize.height + i
          }
      },
      se: function(e, i, n) {
          return t.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [e, i, n]))
      },
      sw: function(e, i, n) {
          return t.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [e, i, n]))
      },
      ne: function(e, i, n) {
          return t.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [e, i, n]))
      },
      nw: function(e, i, n) {
          return t.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [e, i, n]))
      }
  },
  _propagate: function(e, i) {
      t.ui.plugin.call(this, e, [i, this.ui()]), "resize" !== e && this._trigger(e, i, this.ui())
  },
  plugins: {},
  ui: function() {
      return {
          originalElement: this.originalElement,
          element: this.element,
          helper: this.helper,
          position: this.position,
          size: this.size,
          originalSize: this.originalSize,
          originalPosition: this.originalPosition
      }
  }
}), t.ui.plugin.add("resizable", "animate", {
  stop: function(e) {
      var i = t(this).resizable("instance"),
          n = i.options,
          s = i._proportionallyResizeElements,
          o = s.length && /textarea/i.test(s[0].nodeName),
          a = o && i._hasScroll(s[0], "left") ? 0 : i.sizeDiff.height,
          r = o ? 0 : i.sizeDiff.width,
          l = {
              width: i.size.width - r,
              height: i.size.height - a
          },
          c = parseFloat(i.element.css("left")) + (i.position.left - i.originalPosition.left) || null,
          h = parseFloat(i.element.css("top")) + (i.position.top - i.originalPosition.top) || null;
      i.element.animate(t.extend(l, h && c ? {
          top: h,
          left: c
      } : {}), {
          duration: n.animateDuration,
          easing: n.animateEasing,
          step: function() {
              var n = {
                  width: parseFloat(i.element.css("width")),
                  height: parseFloat(i.element.css("height")),
                  top: parseFloat(i.element.css("top")),
                  left: parseFloat(i.element.css("left"))
              };
              s && s.length && t(s[0]).css({
                  width: n.width,
                  height: n.height
              }), i._updateCache(n), i._propagate("resize", e)
          }
      })
  }
}), t.ui.plugin.add("resizable", "containment", {
  start: function() {
      var e, i, n, s, o, a, r, l = t(this).resizable("instance"),
          c = l.options,
          h = l.element,
          u = c.containment,
          d = u instanceof t ? u.get(0) : /parent/.test(u) ? h.parent().get(0) : u;
      d && (l.containerElement = t(d), /document/.test(u) || u === document ? (l.containerOffset = {
          left: 0,
          top: 0
      }, l.containerPosition = {
          left: 0,
          top: 0
      }, l.parentData = {
          element: t(document),
          left: 0,
          top: 0,
          width: t(document).width(),
          height: t(document).height() || document.body.parentNode.scrollHeight
      }) : (e = t(d), i = [], t(["Top", "Right", "Left", "Bottom"]).each(function(t, n) {
          i[t] = l._num(e.css("padding" + n))
      }), l.containerOffset = e.offset(), l.containerPosition = e.position(), l.containerSize = {
          height: e.innerHeight() - i[3],
          width: e.innerWidth() - i[1]
      }, n = l.containerOffset, s = l.containerSize.height, o = l.containerSize.width, a = l._hasScroll(d, "left") ? d.scrollWidth : o, r = l._hasScroll(d) ? d.scrollHeight : s, l.parentData = {
          element: d,
          left: n.left,
          top: n.top,
          width: a,
          height: r
      }))
  },
  resize: function(e) {
      var i, n, s, o, a = t(this).resizable("instance"),
          r = a.options,
          l = a.containerOffset,
          c = a.position,
          h = a._aspectRatio || e.shiftKey,
          u = {
              top: 0,
              left: 0
          },
          d = a.containerElement,
          p = !0;
      d[0] !== document && /static/.test(d.css("position")) && (u = l), c.left < (a._helper ? l.left : 0) && (a.size.width = a.size.width + (a._helper ? a.position.left - l.left : a.position.left - u.left), h && (a.size.height = a.size.width / a.aspectRatio, p = !1), a.position.left = r.helper ? l.left : 0), c.top < (a._helper ? l.top : 0) && (a.size.height = a.size.height + (a._helper ? a.position.top - l.top : a.position.top), h && (a.size.width = a.size.height * a.aspectRatio, p = !1), a.position.top = a._helper ? l.top : 0), s = a.containerElement.get(0) === a.element.parent().get(0), o = /relative|absolute/.test(a.containerElement.css("position")), s && o ? (a.offset.left = a.parentData.left + a.position.left, a.offset.top = a.parentData.top + a.position.top) : (a.offset.left = a.element.offset().left, a.offset.top = a.element.offset().top), i = Math.abs(a.sizeDiff.width + (a._helper ? a.offset.left - u.left : a.offset.left - l.left)), n = Math.abs(a.sizeDiff.height + (a._helper ? a.offset.top - u.top : a.offset.top - l.top)), i + a.size.width >= a.parentData.width && (a.size.width = a.parentData.width - i, h && (a.size.height = a.size.width / a.aspectRatio, p = !1)), n + a.size.height >= a.parentData.height && (a.size.height = a.parentData.height - n, h && (a.size.width = a.size.height * a.aspectRatio, p = !1)), p || (a.position.left = a.prevPosition.left, a.position.top = a.prevPosition.top, a.size.width = a.prevSize.width, a.size.height = a.prevSize.height)
  },
  stop: function() {
      var e = t(this).resizable("instance"),
          i = e.options,
          n = e.containerOffset,
          s = e.containerPosition,
          o = e.containerElement,
          a = t(e.helper),
          r = a.offset(),
          l = a.outerWidth() - e.sizeDiff.width,
          c = a.outerHeight() - e.sizeDiff.height;
      e._helper && !i.animate && /relative/.test(o.css("position")) && t(this).css({
          left: r.left - s.left - n.left,
          width: l,
          height: c
      }), e._helper && !i.animate && /static/.test(o.css("position")) && t(this).css({
          left: r.left - s.left - n.left,
          width: l,
          height: c
      })
  }
}), t.ui.plugin.add("resizable", "alsoResize", {
  start: function() {
      var e = t(this).resizable("instance").options;
      t(e.alsoResize).each(function() {
          var e = t(this);
          e.data("ui-resizable-alsoresize", {
              width: parseFloat(e.width()),
              height: parseFloat(e.height()),
              left: parseFloat(e.css("left")),
              top: parseFloat(e.css("top"))
          })
      })
  },
  resize: function(e, i) {
      var n = t(this).resizable("instance"),
          s = n.options,
          o = n.originalSize,
          a = n.originalPosition,
          r = {
              height: n.size.height - o.height || 0,
              width: n.size.width - o.width || 0,
              top: n.position.top - a.top || 0,
              left: n.position.left - a.left || 0
          };
      t(s.alsoResize).each(function() {
          var e = t(this),
              n = t(this).data("ui-resizable-alsoresize"),
              s = {},
              o = e.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
          t.each(o, function(t, e) {
              var i = (n[e] || 0) + (r[e] || 0);
              i && i >= 0 && (s[e] = i || null)
          }), e.css(s)
      })
  },
  stop: function() {
      t(this).removeData("ui-resizable-alsoresize")
  }
}), t.ui.plugin.add("resizable", "ghost", {
  start: function() {
      var e = t(this).resizable("instance"),
          i = e.size;
      e.ghost = e.originalElement.clone(), e.ghost.css({
          opacity: .25,
          display: "block",
          position: "relative",
          height: i.height,
          width: i.width,
          margin: 0,
          left: 0,
          top: 0
      }), e._addClass(e.ghost, "ui-resizable-ghost"), !1 !== t.uiBackCompat && "string" == typeof e.options.ghost && e.ghost.addClass(this.options.ghost), e.ghost.appendTo(e.helper)
  },
  resize: function() {
      var e = t(this).resizable("instance");
      e.ghost && e.ghost.css({
          position: "relative",
          height: e.size.height,
          width: e.size.width
      })
  },
  stop: function() {
      var e = t(this).resizable("instance");
      e.ghost && e.helper && e.helper.get(0).removeChild(e.ghost.get(0))
  }
}), t.ui.plugin.add("resizable", "grid", {
  resize: function() {
      var e, i = t(this).resizable("instance"),
          n = i.options,
          s = i.size,
          o = i.originalSize,
          a = i.originalPosition,
          r = i.axis,
          l = "number" == typeof n.grid ? [n.grid, n.grid] : n.grid,
          c = l[0] || 1,
          h = l[1] || 1,
          u = Math.round((s.width - o.width) / c) * c,
          d = Math.round((s.height - o.height) / h) * h,
          p = o.width + u,
          f = o.height + d,
          m = n.maxWidth && p > n.maxWidth,
          g = n.maxHeight && f > n.maxHeight,
          v = n.minWidth && n.minWidth > p,
          y = n.minHeight && n.minHeight > f;
      n.grid = l, v && (p += c), y && (f += h), m && (p -= c), g && (f -= h), /^(se|s|e)$/.test(r) ? (i.size.width = p, i.size.height = f) : /^(ne)$/.test(r) ? (i.size.width = p, i.size.height = f, i.position.top = a.top - d) : /^(sw)$/.test(r) ? (i.size.width = p, i.size.height = f, i.position.left = a.left - u) : ((0 >= f - h || 0 >= p - c) && (e = i._getPaddingPlusBorderDimensions(this)), f - h > 0 ? (i.size.height = f, i.position.top = a.top - d) : (f = h - e.height, i.size.height = f, i.position.top = a.top + o.height - f), p - c > 0 ? (i.size.width = p, i.position.left = a.left - u) : (p = c - e.width, i.size.width = p, i.position.left = a.left + o.width - p))
  }
}), t.ui.resizable, t.widget("ui.dialog", {
  version: "1.12.1",
  options: {
      appendTo: "body",
      autoOpen: !0,
      buttons: [],
      classes: {
          "ui-dialog": "ui-corner-all",
          "ui-dialog-titlebar": "ui-corner-all"
      },
      closeOnEscape: !0,
      closeText: "Close",
      draggable: !0,
      hide: null,
      height: "auto",
      maxHeight: null,
      maxWidth: null,
      minHeight: 150,
      minWidth: 150,
      modal: !1,
      position: {
          my: "center",
          at: "center",
          of: window,
          collision: "fit",
          using: function(e) {
              var i = t(this).css(e).offset().top;
              0 > i && t(this).css("top", e.top - i)
          }
      },
      resizable: !0,
      show: null,
      title: null,
      width: 300,
      beforeClose: null,
      close: null,
      drag: null,
      dragStart: null,
      dragStop: null,
      focus: null,
      open: null,
      resize: null,
      resizeStart: null,
      resizeStop: null
  },
  sizeRelatedOptions: {
      buttons: !0,
      height: !0,
      maxHeight: !0,
      maxWidth: !0,
      minHeight: !0,
      minWidth: !0,
      width: !0
  },
  resizableRelatedOptions: {
      maxHeight: !0,
      maxWidth: !0,
      minHeight: !0,
      minWidth: !0
  },
  _create: function() {
      this.originalCss = {
          display: this.element[0].style.display,
          width: this.element[0].style.width,
          minHeight: this.element[0].style.minHeight,
          maxHeight: this.element[0].style.maxHeight,
          height: this.element[0].style.height
      }, this.originalPosition = {
          parent: this.element.parent(),
          index: this.element.parent().children().index(this.element)
      }, this.originalTitle = this.element.attr("title"), null == this.options.title && null != this.originalTitle && (this.options.title = this.originalTitle), this.options.disabled && (this.options.disabled = !1), this._createWrapper(), this.element.show().removeAttr("title").appendTo(this.uiDialog), this._addClass("ui-dialog-content", "ui-widget-content"), this._createTitlebar(), this._createButtonPane(), this.options.draggable && t.fn.draggable && this._makeDraggable(), this.options.resizable && t.fn.resizable && this._makeResizable(), this._isOpen = !1, this._trackFocus()
  },
  _init: function() {
      this.options.autoOpen && this.open()
  },
  _appendTo: function() {
      var e = this.options.appendTo;
      return e && (e.jquery || e.nodeType) ? t(e) : this.document.find(e || "body").eq(0)
  },
  _destroy: function() {
      var t, e = this.originalPosition;
      this._untrackInstance(), this._destroyOverlay(), this.element.removeUniqueId().css(this.originalCss).detach(), this.uiDialog.remove(), this.originalTitle && this.element.attr("title", this.originalTitle), (t = e.parent.children().eq(e.index)).length && t[0] !== this.element[0] ? t.before(this.element) : e.parent.append(this.element)
  },
  widget: function() {
      return this.uiDialog
  },
  disable: t.noop,
  enable: t.noop,
  close: function(e) {
      var i = this;
      this._isOpen && !1 !== this._trigger("beforeClose", e) && (this._isOpen = !1, this._focusedElement = null, this._destroyOverlay(), this._untrackInstance(), this.opener.filter(":focusable").trigger("focus").length || t.ui.safeBlur(t.ui.safeActiveElement(this.document[0])), this._hide(this.uiDialog, this.options.hide, function() {
          i._trigger("close", e)
      }))
  },
  isOpen: function() {
      return this._isOpen
  },
  moveToTop: function() {
      this._moveToTop()
  },
  _moveToTop: function(e, i) {
      var n = !1,
          s = this.uiDialog.siblings(".ui-front:visible").map(function() {
              return +t(this).css("z-index")
          }).get(),
          o = Math.max.apply(null, s);
      return o >= +this.uiDialog.css("z-index") && (this.uiDialog.css("z-index", o + 1), n = !0), n && !i && this._trigger("focus", e), n
  },
  open: function() {
      var e = this;
      return this._isOpen ? void(this._moveToTop() && this._focusTabbable()) : (this._isOpen = !0, this.opener = t(t.ui.safeActiveElement(this.document[0])), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this.overlay && this.overlay.css("z-index", this.uiDialog.css("z-index") - 1), this._show(this.uiDialog, this.options.show, function() {
          e._focusTabbable(), e._trigger("focus")
      }), this._makeFocusTarget(), void this._trigger("open"))
  },
  _focusTabbable: function() {
      var t = this._focusedElement;
      t || (t = this.element.find("[autofocus]")), t.length || (t = this.element.find(":tabbable")), t.length || (t = this.uiDialogButtonPane.find(":tabbable")), t.length || (t = this.uiDialogTitlebarClose.filter(":tabbable")), t.length || (t = this.uiDialog), t.eq(0).trigger("focus")
  },
  _keepFocus: function(e) {
      function i() {
          var e = t.ui.safeActiveElement(this.document[0]);
          this.uiDialog[0] === e || t.contains(this.uiDialog[0], e) || this._focusTabbable()
      }
      e.preventDefault(), i.call(this), this._delay(i)
  },
  _createWrapper: function() {
      this.uiDialog = t("<div>").hide().attr({
          tabIndex: -1,
          role: "dialog"
      }).appendTo(this._appendTo()), this._addClass(this.uiDialog, "ui-dialog", "ui-widget ui-widget-content ui-front"), this._on(this.uiDialog, {
          keydown: function(e) {
              if (this.options.closeOnEscape && !e.isDefaultPrevented() && e.keyCode && e.keyCode === t.ui.keyCode.ESCAPE) return e.preventDefault(), void this.close(e);
              if (e.keyCode === t.ui.keyCode.TAB && !e.isDefaultPrevented()) {
                  var i = this.uiDialog.find(":tabbable"),
                      n = i.filter(":first"),
                      s = i.filter(":last");
                  e.target !== s[0] && e.target !== this.uiDialog[0] || e.shiftKey ? e.target !== n[0] && e.target !== this.uiDialog[0] || !e.shiftKey || (this._delay(function() {
                      s.trigger("focus")
                  }), e.preventDefault()) : (this._delay(function() {
                      n.trigger("focus")
                  }), e.preventDefault())
              }
          },
          mousedown: function(t) {
              this._moveToTop(t) && this._focusTabbable()
          }
      }), this.element.find("[aria-describedby]").length || this.uiDialog.attr({
          "aria-describedby": this.element.uniqueId().attr("id")
      })
  },
  _createTitlebar: function() {
      var e;
      this.uiDialogTitlebar = t("<div>"), this._addClass(this.uiDialogTitlebar, "ui-dialog-titlebar", "ui-widget-header ui-helper-clearfix"), this._on(this.uiDialogTitlebar, {
          mousedown: function(e) {
              t(e.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.trigger("focus")
          }
      }), this.uiDialogTitlebarClose = t("<button type='button'></button>").button({
          label: t("<a>").text(this.options.closeText).html(),
          icon: "ui-icon-closethick",
          showLabel: !1
      }).appendTo(this.uiDialogTitlebar), this._addClass(this.uiDialogTitlebarClose, "ui-dialog-titlebar-close"), this._on(this.uiDialogTitlebarClose, {
          click: function(t) {
              t.preventDefault(), this.close(t)
          }
      }), e = t("<span>").uniqueId().prependTo(this.uiDialogTitlebar), this._addClass(e, "ui-dialog-title"), this._title(e), this.uiDialogTitlebar.prependTo(this.uiDialog), this.uiDialog.attr({
          "aria-labelledby": e.attr("id")
      })
  },
  _title: function(t) {
      this.options.title ? t.text(this.options.title) : t.html("&#160;")
  },
  _createButtonPane: function() {
      this.uiDialogButtonPane = t("<div>"), this._addClass(this.uiDialogButtonPane, "ui-dialog-buttonpane", "ui-widget-content ui-helper-clearfix"), this.uiButtonSet = t("<div>").appendTo(this.uiDialogButtonPane), this._addClass(this.uiButtonSet, "ui-dialog-buttonset"), this._createButtons()
  },
  _createButtons: function() {
      var e = this,
          i = this.options.buttons;
      return this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), t.isEmptyObject(i) || t.isArray(i) && !i.length ? void this._removeClass(this.uiDialog, "ui-dialog-buttons") : (t.each(i, function(i, n) {
          var s, o;
          n = t.isFunction(n) ? {
              click: n,
              text: i
          } : n, n = t.extend({
              type: "button"
          }, n), s = n.click, o = {
              icon: n.icon,
              iconPosition: n.iconPosition,
              showLabel: n.showLabel,
              icons: n.icons,
              text: n.text
          }, delete n.click, delete n.icon, delete n.iconPosition, delete n.showLabel, delete n.icons, "boolean" == typeof n.text && delete n.text, t("<button></button>", n).button(o).appendTo(e.uiButtonSet).on("click", function() {
              s.apply(e.element[0], arguments)
          })
      }), this._addClass(this.uiDialog, "ui-dialog-buttons"), void this.uiDialogButtonPane.appendTo(this.uiDialog))
  },
  _makeDraggable: function() {
      function e(t) {
          return {
              position: t.position,
              offset: t.offset
          }
      }
      var i = this,
          n = this.options;
      this.uiDialog.draggable({
          cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
          handle: ".ui-dialog-titlebar",
          containment: "document",
          start: function(n, s) {
              i._addClass(t(this), "ui-dialog-dragging"), i._blockFrames(), i._trigger("dragStart", n, e(s))
          },
          drag: function(t, n) {
              i._trigger("drag", t, e(n))
          },
          stop: function(s, o) {
              var a = o.offset.left - i.document.scrollLeft(),
                  r = o.offset.top - i.document.scrollTop();
              n.position = {
                  my: "left top",
                  at: "left" + (a >= 0 ? "+" : "") + a + " top" + (r >= 0 ? "+" : "") + r,
                  of: i.window
              }, i._removeClass(t(this), "ui-dialog-dragging"), i._unblockFrames(), i._trigger("dragStop", s, e(o))
          }
      })
  },
  _makeResizable: function() {
      function e(t) {
          return {
              originalPosition: t.originalPosition,
              originalSize: t.originalSize,
              position: t.position,
              size: t.size
          }
      }
      var i = this,
          n = this.options,
          s = n.resizable,
          o = this.uiDialog.css("position"),
          a = "string" == typeof s ? s : "n,e,s,w,se,sw,ne,nw";
      this.uiDialog.resizable({
          cancel: ".ui-dialog-content",
          containment: "document",
          alsoResize: this.element,
          maxWidth: n.maxWidth,
          maxHeight: n.maxHeight,
          minWidth: n.minWidth,
          minHeight: this._minHeight(),
          handles: a,
          start: function(n, s) {
              i._addClass(t(this), "ui-dialog-resizing"), i._blockFrames(), i._trigger("resizeStart", n, e(s))
          },
          resize: function(t, n) {
              i._trigger("resize", t, e(n))
          },
          stop: function(s, o) {
              var a = i.uiDialog.offset(),
                  r = a.left - i.document.scrollLeft(),
                  l = a.top - i.document.scrollTop();
              n.height = i.uiDialog.height(), n.width = i.uiDialog.width(), n.position = {
                  my: "left top",
                  at: "left" + (r >= 0 ? "+" : "") + r + " top" + (l >= 0 ? "+" : "") + l,
                  of: i.window
              }, i._removeClass(t(this), "ui-dialog-resizing"), i._unblockFrames(), i._trigger("resizeStop", s, e(o))
          }
      }).css("position", o)
  },
  _trackFocus: function() {
      this._on(this.widget(), {
          focusin: function(e) {
              this._makeFocusTarget(), this._focusedElement = t(e.target)
          }
      })
  },
  _makeFocusTarget: function() {
      this._untrackInstance(), this._trackingInstances().unshift(this)
  },
  _untrackInstance: function() {
      var e = this._trackingInstances(),
          i = t.inArray(this, e); - 1 !== i && e.splice(i, 1)
  },
  _trackingInstances: function() {
      var t = this.document.data("ui-dialog-instances");
      return t || (t = [], this.document.data("ui-dialog-instances", t)), t
  },
  _minHeight: function() {
      var t = this.options;
      return "auto" === t.height ? t.minHeight : Math.min(t.minHeight, t.height)
  },
  _position: function() {
      var t = this.uiDialog.is(":visible");
      t || this.uiDialog.show(), this.uiDialog.position(this.options.position), t || this.uiDialog.hide()
  },
  _setOptions: function(e) {
      var i = this,
          n = !1,
          s = {};
      t.each(e, function(t, e) {
          i._setOption(t, e), t in i.sizeRelatedOptions && (n = !0), t in i.resizableRelatedOptions && (s[t] = e)
      }), n && (this._size(), this._position()), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", s)
  },
  _setOption: function(e, i) {
      var n, s, o = this.uiDialog;
      "disabled" !== e && (this._super(e, i), "appendTo" === e && this.uiDialog.appendTo(this._appendTo()), "buttons" === e && this._createButtons(), "closeText" === e && this.uiDialogTitlebarClose.button({
          label: t("<a>").text("" + this.options.closeText).html()
      }), "draggable" === e && ((n = o.is(":data(ui-draggable)")) && !i && o.draggable("destroy"), !n && i && this._makeDraggable()), "position" === e && this._position(), "resizable" === e && ((s = o.is(":data(ui-resizable)")) && !i && o.resizable("destroy"), s && "string" == typeof i && o.resizable("option", "handles", i), s || !1 === i || this._makeResizable()), "title" === e && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
  },
  _size: function() {
      var t, e, i, n = this.options;
      this.element.show().css({
          width: "auto",
          minHeight: 0,
          maxHeight: "none",
          height: 0
      }), n.minWidth > n.width && (n.width = n.minWidth), t = this.uiDialog.css({
          height: "auto",
          width: n.width
      }).outerHeight(), e = Math.max(0, n.minHeight - t), i = "number" == typeof n.maxHeight ? Math.max(0, n.maxHeight - t) : "none", "auto" === n.height ? this.element.css({
          minHeight: e,
          maxHeight: i,
          height: "auto"
      }) : this.element.height(Math.max(0, n.height - t)), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
  },
  _blockFrames: function() {
      this.iframeBlocks = this.document.find("iframe").map(function() {
          var e = t(this);
          return t("<div>").css({
              position: "absolute",
              width: e.outerWidth(),
              height: e.outerHeight()
          }).appendTo(e.parent()).offset(e.offset())[0]
      })
  },
  _unblockFrames: function() {
      this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
  },
  _allowInteraction: function(e) {
      return !!t(e.target).closest(".ui-dialog").length || !!t(e.target).closest(".ui-datepicker").length
  },
  _createOverlay: function() {
      if (this.options.modal) {
          var e = !0;
          this._delay(function() {
              e = !1
          }), this.document.data("ui-dialog-overlays") || this._on(this.document, {
              focusin: function(t) {
                  e || this._allowInteraction(t) || (t.preventDefault(), this._trackingInstances()[0]._focusTabbable())
              }
          }), this.overlay = t("<div>").appendTo(this._appendTo()), this._addClass(this.overlay, null, "ui-widget-overlay ui-front"), this._on(this.overlay, {
              mousedown: "_keepFocus"
          }), this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1)
      }
  },
  _destroyOverlay: function() {
      if (this.options.modal && this.overlay) {
          var t = this.document.data("ui-dialog-overlays") - 1;
          t ? this.document.data("ui-dialog-overlays", t) : (this._off(this.document, "focusin"), this.document.removeData("ui-dialog-overlays")), this.overlay.remove(), this.overlay = null
      }
  }
}), !1 !== t.uiBackCompat && t.widget("ui.dialog", t.ui.dialog, {
  options: {
      dialogClass: ""
  },
  _createWrapper: function() {
      this._super(), this.uiDialog.addClass(this.options.dialogClass)
  },
  _setOption: function(t, e) {
      "dialogClass" === t && this.uiDialog.removeClass(this.options.dialogClass).addClass(e), this._superApply(arguments)
  }
}), t.ui.dialog, t.widget("ui.droppable", {
  version: "1.12.1",
  widgetEventPrefix: "drop",
  options: {
      accept: "*",
      addClasses: !0,
      greedy: !1,
      scope: "default",
      tolerance: "intersect",
      activate: null,
      deactivate: null,
      drop: null,
      out: null,
      over: null
  },
  _create: function() {
      var e, i = this.options,
          n = i.accept;
      this.isover = !1, this.isout = !0, this.accept = t.isFunction(n) ? n : function(t) {
          return t.is(n)
      }, this.proportions = function() {
          return arguments.length ? void(e = arguments[0]) : e || (e = {
              width: this.element[0].offsetWidth,
              height: this.element[0].offsetHeight
          })
      }, this._addToManager(i.scope), i.addClasses && this._addClass("ui-droppable")
  },
  _addToManager: function(e) {
      t.ui.ddmanager.droppables[e] = t.ui.ddmanager.droppables[e] || [], t.ui.ddmanager.droppables[e].push(this)
  },
  _splice: function(t) {
      for (var e = 0; t.length > e; e++) t[e] === this && t.splice(e, 1)
  },
  _destroy: function() {
      var e = t.ui.ddmanager.droppables[this.options.scope];
      this._splice(e)
  },
  _setOption: function(e, i) {
      if ("accept" === e) this.accept = t.isFunction(i) ? i : function(t) {
          return t.is(i)
      };
      else if ("scope" === e) {
          var n = t.ui.ddmanager.droppables[this.options.scope];
          this._splice(n), this._addToManager(i)
      }
      this._super(e, i)
  },
  _activate: function(e) {
      var i = t.ui.ddmanager.current;
      this._addActiveClass(), i && this._trigger("activate", e, this.ui(i))
  },
  _deactivate: function(e) {
      var i = t.ui.ddmanager.current;
      this._removeActiveClass(), i && this._trigger("deactivate", e, this.ui(i))
  },
  _over: function(e) {
      var i = t.ui.ddmanager.current;
      i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this._addHoverClass(), this._trigger("over", e, this.ui(i)))
  },
  _out: function(e) {
      var i = t.ui.ddmanager.current;
      i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this._removeHoverClass(), this._trigger("out", e, this.ui(i)))
  },
  _drop: function(e, i) {
      var n = i || t.ui.ddmanager.current,
          s = !1;
      return !(!n || (n.currentItem || n.element)[0] === this.element[0]) && (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function() {
          var i = t(this).droppable("instance");
          return i.options.greedy && !i.options.disabled && i.options.scope === n.options.scope && i.accept.call(i.element[0], n.currentItem || n.element) && m(n, t.extend(i, {
              offset: i.element.offset()
          }), i.options.tolerance, e) ? (s = !0, !1) : void 0
      }), !s && (!!this.accept.call(this.element[0], n.currentItem || n.element) && (this._removeActiveClass(), this._removeHoverClass(), this._trigger("drop", e, this.ui(n)), this.element)))
  },
  ui: function(t) {
      return {
          draggable: t.currentItem || t.element,
          helper: t.helper,
          position: t.position,
          offset: t.positionAbs
      }
  },
  _addHoverClass: function() {
      this._addClass("ui-droppable-hover")
  },
  _removeHoverClass: function() {
      this._removeClass("ui-droppable-hover")
  },
  _addActiveClass: function() {
      this._addClass("ui-droppable-active")
  },
  _removeActiveClass: function() {
      this._removeClass("ui-droppable-active")
  }
});
var m = t.ui.intersect = function() {
  function t(t, e, i) {
      return t >= e && e + i > t
  }
  return function(e, i, n, s) {
      if (!i.offset) return !1;
      var o = (e.positionAbs || e.position.absolute).left + e.margins.left,
          a = (e.positionAbs || e.position.absolute).top + e.margins.top,
          r = o + e.helperProportions.width,
          l = a + e.helperProportions.height,
          c = i.offset.left,
          h = i.offset.top,
          u = c + i.proportions().width,
          d = h + i.proportions().height;
      switch (n) {
          case "fit":
              return o >= c && u >= r && a >= h && d >= l;
          case "intersect":
              return o + e.helperProportions.width / 2 > c && u > r - e.helperProportions.width / 2 && a + e.helperProportions.height / 2 > h && d > l - e.helperProportions.height / 2;
          case "pointer":
              return t(s.pageY, h, i.proportions().height) && t(s.pageX, c, i.proportions().width);
          case "touch":
              return (a >= h && d >= a || l >= h && d >= l || h > a && l > d) && (o >= c && u >= o || r >= c && u >= r || c > o && r > u);
          default:
              return !1
      }
  }
}();
t.ui.ddmanager = {
  current: null,
  droppables: {
      default: []
  },
  prepareOffsets: function(e, i) {
      var n, s, o = t.ui.ddmanager.droppables[e.options.scope] || [],
          a = i ? i.type : null,
          r = (e.currentItem || e.element).find(":data(ui-droppable)").addBack();
      t: for (n = 0; o.length > n; n++)
          if (!(o[n].options.disabled || e && !o[n].accept.call(o[n].element[0], e.currentItem || e.element))) {
              for (s = 0; r.length > s; s++)
                  if (r[s] === o[n].element[0]) {
                      o[n].proportions().height = 0;
                      continue t
                  }
              o[n].visible = "none" !== o[n].element.css("display"), o[n].visible && ("mousedown" === a && o[n]._activate.call(o[n], i), o[n].offset = o[n].element.offset(), o[n].proportions({
                  width: o[n].element[0].offsetWidth,
                  height: o[n].element[0].offsetHeight
              }))
          }
  },
  drop: function(e, i) {
      var n = !1;
      return t.each((t.ui.ddmanager.droppables[e.options.scope] || []).slice(), function() {
          this.options && (!this.options.disabled && this.visible && m(e, this, this.options.tolerance, i) && (n = this._drop.call(this, i) || n), !this.options.disabled && this.visible && this.accept.call(this.element[0], e.currentItem || e.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, i)))
      }), n
  },
  dragStart: function(e, i) {
      e.element.parentsUntil("body").on("scroll.droppable", function() {
          e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i)
      })
  },
  drag: function(e, i) {
      e.options.refreshPositions && t.ui.ddmanager.prepareOffsets(e, i), t.each(t.ui.ddmanager.droppables[e.options.scope] || [], function() {
          if (!this.options.disabled && !this.greedyChild && this.visible) {
              var n, s, o, a = m(e, this, this.options.tolerance, i),
                  r = !a && this.isover ? "isout" : a && !this.isover ? "isover" : null;
              r && (this.options.greedy && (s = this.options.scope, (o = this.element.parents(":data(ui-droppable)").filter(function() {
                  return t(this).droppable("instance").options.scope === s
              })).length && ((n = t(o[0]).droppable("instance")).greedyChild = "isover" === r)), n && "isover" === r && (n.isover = !1, n.isout = !0, n._out.call(n, i)), this[r] = !0, this["isout" === r ? "isover" : "isout"] = !1, this["isover" === r ? "_over" : "_out"].call(this, i), n && "isout" === r && (n.isout = !1, n.isover = !0, n._over.call(n, i)))
          }
      })
  },
  dragStop: function(e, i) {
      e.element.parentsUntil("body").off("scroll.droppable"), e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i)
  }
}, !1 !== t.uiBackCompat && t.widget("ui.droppable", t.ui.droppable, {
  options: {
      hoverClass: !1,
      activeClass: !1
  },
  _addActiveClass: function() {
      this._super(), this.options.activeClass && this.element.addClass(this.options.activeClass)
  },
  _removeActiveClass: function() {
      this._super(), this.options.activeClass && this.element.removeClass(this.options.activeClass)
  },
  _addHoverClass: function() {
      this._super(), this.options.hoverClass && this.element.addClass(this.options.hoverClass)
  },
  _removeHoverClass: function() {
      this._super(), this.options.hoverClass && this.element.removeClass(this.options.hoverClass)
  }
}), t.ui.droppable, t.widget("ui.progressbar", {
  version: "1.12.1",
  options: {
      classes: {
          "ui-progressbar": "ui-corner-all",
          "ui-progressbar-value": "ui-corner-left",
          "ui-progressbar-complete": "ui-corner-right"
      },
      max: 100,
      value: 0,
      change: null,
      complete: null
  },
  min: 0,
  _create: function() {
      this.oldValue = this.options.value = this._constrainedValue(), this.element.attr({
          role: "progressbar",
          "aria-valuemin": this.min
      }), this._addClass("ui-progressbar", "ui-widget ui-widget-content"), this.valueDiv = t("<div>").appendTo(this.element), this._addClass(this.valueDiv, "ui-progressbar-value", "ui-widget-header"), this._refreshValue()
  },
  _destroy: function() {
      this.element.removeAttr("role aria-valuemin aria-valuemax aria-valuenow"), this.valueDiv.remove()
  },
  value: function(t) {
      return void 0 === t ? this.options.value : (this.options.value = this._constrainedValue(t), void this._refreshValue())
  },
  _constrainedValue: function(t) {
      return void 0 === t && (t = this.options.value), this.indeterminate = !1 === t, "number" != typeof t && (t = 0), !this.indeterminate && Math.min(this.options.max, Math.max(this.min, t))
  },
  _setOptions: function(t) {
      var e = t.value;
      delete t.value, this._super(t), this.options.value = this._constrainedValue(e), this._refreshValue()
  },
  _setOption: function(t, e) {
      "max" === t && (e = Math.max(this.min, e)), this._super(t, e)
  },
  _setOptionDisabled: function(t) {
      this._super(t), this.element.attr("aria-disabled", t), this._toggleClass(null, "ui-state-disabled", !!t)
  },
  _percentage: function() {
      return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min)
  },
  _refreshValue: function() {
      var e = this.options.value,
          i = this._percentage();
      this.valueDiv.toggle(this.indeterminate || e > this.min).width(i.toFixed(0) + "%"), this._toggleClass(this.valueDiv, "ui-progressbar-complete", null, e === this.options.max)._toggleClass("ui-progressbar-indeterminate", null, this.indeterminate), this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || (this.overlayDiv = t("<div>").appendTo(this.valueDiv), this._addClass(this.overlayDiv, "ui-progressbar-overlay"))) : (this.element.attr({
          "aria-valuemax": this.options.max,
          "aria-valuenow": e
      }), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null)), this.oldValue !== e && (this.oldValue = e, this._trigger("change")), e === this.options.max && this._trigger("complete")
  }
}), t.widget("ui.selectable", t.ui.mouse, {
  version: "1.12.1",
  options: {
      appendTo: "body",
      autoRefresh: !0,
      distance: 0,
      filter: "*",
      tolerance: "touch",
      selected: null,
      selecting: null,
      start: null,
      stop: null,
      unselected: null,
      unselecting: null
  },
  _create: function() {
      var e = this;
      this._addClass("ui-selectable"), this.dragged = !1, this.refresh = function() {
          e.elementPos = t(e.element[0]).offset(), e.selectees = t(e.options.filter, e.element[0]), e._addClass(e.selectees, "ui-selectee"), e.selectees.each(function() {
              var i = t(this),
                  n = i.offset(),
                  s = {
                      left: n.left - e.elementPos.left,
                      top: n.top - e.elementPos.top
                  };
              t.data(this, "selectable-item", {
                  element: this,
                  $element: i,
                  left: s.left,
                  top: s.top,
                  right: s.left + i.outerWidth(),
                  bottom: s.top + i.outerHeight(),
                  startselected: !1,
                  selected: i.hasClass("ui-selected"),
                  selecting: i.hasClass("ui-selecting"),
                  unselecting: i.hasClass("ui-unselecting")
              })
          })
      }, this.refresh(), this._mouseInit(), this.helper = t("<div>"), this._addClass(this.helper, "ui-selectable-helper")
  },
  _destroy: function() {
      this.selectees.removeData("selectable-item"), this._mouseDestroy()
  },
  _mouseStart: function(e) {
      var i = this,
          n = this.options;
      this.opos = [e.pageX, e.pageY], this.elementPos = t(this.element[0]).offset(), this.options.disabled || (this.selectees = t(n.filter, this.element[0]), this._trigger("start", e), t(n.appendTo).append(this.helper), this.helper.css({
          left: e.pageX,
          top: e.pageY,
          width: 0,
          height: 0
      }), n.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function() {
          var n = t.data(this, "selectable-item");
          n.startselected = !0, e.metaKey || e.ctrlKey || (i._removeClass(n.$element, "ui-selected"), n.selected = !1, i._addClass(n.$element, "ui-unselecting"), n.unselecting = !0, i._trigger("unselecting", e, {
              unselecting: n.element
          }))
      }), t(e.target).parents().addBack().each(function() {
          var n, s = t.data(this, "selectable-item");
          return s ? (n = !e.metaKey && !e.ctrlKey || !s.$element.hasClass("ui-selected"), i._removeClass(s.$element, n ? "ui-unselecting" : "ui-selected")._addClass(s.$element, n ? "ui-selecting" : "ui-unselecting"), s.unselecting = !n, s.selecting = n, s.selected = n, n ? i._trigger("selecting", e, {
              selecting: s.element
          }) : i._trigger("unselecting", e, {
              unselecting: s.element
          }), !1) : void 0
      }))
  },
  _mouseDrag: function(e) {
      if (this.dragged = !0, !this.options.disabled) {
          var i, n = this,
              s = this.options,
              o = this.opos[0],
              a = this.opos[1],
              r = e.pageX,
              l = e.pageY;
          return o > r && (i = r, r = o, o = i), a > l && (i = l, l = a, a = i), this.helper.css({
              left: o,
              top: a,
              width: r - o,
              height: l - a
          }), this.selectees.each(function() {
              var i = t.data(this, "selectable-item"),
                  c = !1,
                  h = {};
              i && i.element !== n.element[0] && (h.left = i.left + n.elementPos.left, h.right = i.right + n.elementPos.left, h.top = i.top + n.elementPos.top, h.bottom = i.bottom + n.elementPos.top, "touch" === s.tolerance ? c = !(h.left > r || o > h.right || h.top > l || a > h.bottom) : "fit" === s.tolerance && (c = h.left > o && r > h.right && h.top > a && l > h.bottom), c ? (i.selected && (n._removeClass(i.$element, "ui-selected"), i.selected = !1), i.unselecting && (n._removeClass(i.$element, "ui-unselecting"), i.unselecting = !1), i.selecting || (n._addClass(i.$element, "ui-selecting"), i.selecting = !0, n._trigger("selecting", e, {
                  selecting: i.element
              }))) : (i.selecting && ((e.metaKey || e.ctrlKey) && i.startselected ? (n._removeClass(i.$element, "ui-selecting"), i.selecting = !1, n._addClass(i.$element, "ui-selected"), i.selected = !0) : (n._removeClass(i.$element, "ui-selecting"), i.selecting = !1, i.startselected && (n._addClass(i.$element, "ui-unselecting"), i.unselecting = !0), n._trigger("unselecting", e, {
                  unselecting: i.element
              }))), i.selected && (e.metaKey || e.ctrlKey || i.startselected || (n._removeClass(i.$element, "ui-selected"), i.selected = !1, n._addClass(i.$element, "ui-unselecting"), i.unselecting = !0, n._trigger("unselecting", e, {
                  unselecting: i.element
              })))))
          }), !1
      }
  },
  _mouseStop: function(e) {
      var i = this;
      return this.dragged = !1, t(".ui-unselecting", this.element[0]).each(function() {
          var n = t.data(this, "selectable-item");
          i._removeClass(n.$element, "ui-unselecting"), n.unselecting = !1, n.startselected = !1, i._trigger("unselected", e, {
              unselected: n.element
          })
      }), t(".ui-selecting", this.element[0]).each(function() {
          var n = t.data(this, "selectable-item");
          i._removeClass(n.$element, "ui-selecting")._addClass(n.$element, "ui-selected"), n.selecting = !1, n.selected = !0, n.startselected = !0, i._trigger("selected", e, {
              selected: n.element
          })
      }), this._trigger("stop", e), this.helper.remove(), !1
  }
}), t.widget("ui.selectmenu", [t.ui.formResetMixin, {
  version: "1.12.1",
  defaultElement: "<select>",
  options: {
      appendTo: null,
      classes: {
          "ui-selectmenu-button-open": "ui-corner-top",
          "ui-selectmenu-button-closed": "ui-corner-all"
      },
      disabled: null,
      icons: {
          button: "ui-icon-triangle-1-s"
      },
      position: {
          my: "left top",
          at: "left bottom",
          collision: "none"
      },
      width: !1,
      change: null,
      close: null,
      focus: null,
      open: null,
      select: null
  },
  _create: function() {
      var e = this.element.uniqueId().attr("id");
      this.ids = {
          element: e,
          button: e + "-button",
          menu: e + "-menu"
      }, this._drawButton(), this._drawMenu(), this._bindFormResetHandler(), this._rendered = !1, this.menuItems = t()
  },
  _drawButton: function() {
      var e, i = this,
          n = this._parseOption(this.element.find("option:selected"), this.element[0].selectedIndex);
      this.labels = this.element.labels().attr("for", this.ids.button), this._on(this.labels, {
          click: function(t) {
              this.button.focus(), t.preventDefault()
          }
      }), this.element.hide(), this.button = t("<span>", {
          tabindex: this.options.disabled ? -1 : 0,
          id: this.ids.button,
          role: "combobox",
          "aria-expanded": "false",
          "aria-autocomplete": "list",
          "aria-owns": this.ids.menu,
          "aria-haspopup": "true",
          title: this.element.attr("title")
      }).insertAfter(this.element), this._addClass(this.button, "ui-selectmenu-button ui-selectmenu-button-closed", "ui-button ui-widget"), e = t("<span>").appendTo(this.button), this._addClass(e, "ui-selectmenu-icon", "ui-icon " + this.options.icons.button), this.buttonItem = this._renderButtonItem(n).appendTo(this.button), !1 !== this.options.width && this._resizeButton(), this._on(this.button, this._buttonEvents), this.button.one("focusin", function() {
          i._rendered || i._refreshMenu()
      })
  },
  _drawMenu: function() {
      var e = this;
      this.menu = t("<ul>", {
          "aria-hidden": "true",
          "aria-labelledby": this.ids.button,
          id: this.ids.menu
      }), this.menuWrap = t("<div>").append(this.menu), this._addClass(this.menuWrap, "ui-selectmenu-menu", "ui-front"), this.menuWrap.appendTo(this._appendTo()), this.menuInstance = this.menu.menu({
          classes: {
              "ui-menu": "ui-corner-bottom"
          },
          role: "listbox",
          select: function(t, i) {
              t.preventDefault(), e._setSelection(), e._select(i.item.data("ui-selectmenu-item"), t)
          },
          focus: function(t, i) {
              var n = i.item.data("ui-selectmenu-item");
              null != e.focusIndex && n.index !== e.focusIndex && (e._trigger("focus", t, {
                  item: n
              }), e.isOpen || e._select(n, t)), e.focusIndex = n.index, e.button.attr("aria-activedescendant", e.menuItems.eq(n.index).attr("id"))
          }
      }).menu("instance"), this.menuInstance._off(this.menu, "mouseleave"), this.menuInstance._closeOnDocumentClick = function() {
          return !1
      }, this.menuInstance._isDivider = function() {
          return !1
      }
  },
  refresh: function() {
      this._refreshMenu(), this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(this._getSelectedItem().data("ui-selectmenu-item") || {})), null === this.options.width && this._resizeButton()
  },
  _refreshMenu: function() {
      var t, e = this.element.find("option");
      this.menu.empty(), this._parseOptions(e), this._renderMenu(this.menu, this.items), this.menuInstance.refresh(), this.menuItems = this.menu.find("li").not(".ui-selectmenu-optgroup").find(".ui-menu-item-wrapper"), this._rendered = !0, e.length && (t = this._getSelectedItem(), this.menuInstance.focus(null, t), this._setAria(t.data("ui-selectmenu-item")), this._setOption("disabled", this.element.prop("disabled")))
  },
  open: function(t) {
      this.options.disabled || (this._rendered ? (this._removeClass(this.menu.find(".ui-state-active"), null, "ui-state-active"), this.menuInstance.focus(null, this._getSelectedItem())) : this._refreshMenu(), this.menuItems.length && (this.isOpen = !0, this._toggleAttr(), this._resizeMenu(), this._position(), this._on(this.document, this._documentClick), this._trigger("open", t)))
  },
  _position: function() {
      this.menuWrap.position(t.extend({
          of: this.button
      }, this.options.position))
  },
  close: function(t) {
      this.isOpen && (this.isOpen = !1, this._toggleAttr(), this.range = null, this._off(this.document), this._trigger("close", t))
  },
  widget: function() {
      return this.button
  },
  menuWidget: function() {
      return this.menu
  },
  _renderButtonItem: function(e) {
      var i = t("<span>");
      return this._setText(i, e.label), this._addClass(i, "ui-selectmenu-text"), i
  },
  _renderMenu: function(e, i) {
      var n = this,
          s = "";
      t.each(i, function(i, o) {
          var a;
          o.optgroup !== s && (a = t("<li>", {
              text: o.optgroup
          }), n._addClass(a, "ui-selectmenu-optgroup", "ui-menu-divider" + (o.element.parent("optgroup").prop("disabled") ? " ui-state-disabled" : "")), a.appendTo(e), s = o.optgroup), n._renderItemData(e, o)
      })
  },
  _renderItemData: function(t, e) {
      return this._renderItem(t, e).data("ui-selectmenu-item", e)
  },
  _renderItem: function(e, i) {
      var n = t("<li>"),
          s = t("<div>", {
              title: i.element.attr("title")
          });
      return i.disabled && this._addClass(n, null, "ui-state-disabled"), this._setText(s, i.label), n.append(s).appendTo(e)
  },
  _setText: function(t, e) {
      e ? t.text(e) : t.html("&#160;")
  },
  _move: function(t, e) {
      var i, n, s = ".ui-menu-item";
      this.isOpen ? i = this.menuItems.eq(this.focusIndex).parent("li") : (i = this.menuItems.eq(this.element[0].selectedIndex).parent("li"), s += ":not(.ui-state-disabled)"), (n = "first" === t || "last" === t ? i["first" === t ? "prevAll" : "nextAll"](s).eq(-1) : i[t + "All"](s).eq(0)).length && this.menuInstance.focus(e, n)
  },
  _getSelectedItem: function() {
      return this.menuItems.eq(this.element[0].selectedIndex).parent("li")
  },
  _toggle: function(t) {
      this[this.isOpen ? "close" : "open"](t)
  },
  _setSelection: function() {
      var t;
      this.range && (window.getSelection ? ((t = window.getSelection()).removeAllRanges(), t.addRange(this.range)) : this.range.select(), this.button.focus())
  },
  _documentClick: {
      mousedown: function(e) {
          this.isOpen && (t(e.target).closest(".ui-selectmenu-menu, #" + t.ui.escapeSelector(this.ids.button)).length || this.close(e))
      }
  },
  _buttonEvents: {
      mousedown: function() {
          var t;
          window.getSelection ? (t = window.getSelection()).rangeCount && (this.range = t.getRangeAt(0)) : this.range = document.selection.createRange()
      },
      click: function(t) {
          this._setSelection(), this._toggle(t)
      },
      keydown: function(e) {
          var i = !0;
          switch (e.keyCode) {
              case t.ui.keyCode.TAB:
              case t.ui.keyCode.ESCAPE:
                  this.close(e), i = !1;
                  break;
              case t.ui.keyCode.ENTER:
                  this.isOpen && this._selectFocusedItem(e);
                  break;
              case t.ui.keyCode.UP:
                  e.altKey ? this._toggle(e) : this._move("prev", e);
                  break;
              case t.ui.keyCode.DOWN:
                  e.altKey ? this._toggle(e) : this._move("next", e);
                  break;
              case t.ui.keyCode.SPACE:
                  this.isOpen ? this._selectFocusedItem(e) : this._toggle(e);
                  break;
              case t.ui.keyCode.LEFT:
                  this._move("prev", e);
                  break;
              case t.ui.keyCode.RIGHT:
                  this._move("next", e);
                  break;
              case t.ui.keyCode.HOME:
              case t.ui.keyCode.PAGE_UP:
                  this._move("first", e);
                  break;
              case t.ui.keyCode.END:
              case t.ui.keyCode.PAGE_DOWN:
                  this._move("last", e);
                  break;
              default:
                  this.menu.trigger(e), i = !1
          }
          i && e.preventDefault()
      }
  },
  _selectFocusedItem: function(t) {
      var e = this.menuItems.eq(this.focusIndex).parent("li");
      e.hasClass("ui-state-disabled") || this._select(e.data("ui-selectmenu-item"), t)
  },
  _select: function(t, e) {
      var i = this.element[0].selectedIndex;
      this.element[0].selectedIndex = t.index, this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(t)), this._setAria(t), this._trigger("select", e, {
          item: t
      }), t.index !== i && this._trigger("change", e, {
          item: t
      }), this.close(e)
  },
  _setAria: function(t) {
      var e = this.menuItems.eq(t.index).attr("id");
      this.button.attr({
          "aria-labelledby": e,
          "aria-activedescendant": e
      }), this.menu.attr("aria-activedescendant", e)
  },
  _setOption: function(t, e) {
      if ("icons" === t) {
          var i = this.button.find("span.ui-icon");
          this._removeClass(i, null, this.options.icons.button)._addClass(i, null, e.button)
      }
      this._super(t, e), "appendTo" === t && this.menuWrap.appendTo(this._appendTo()), "width" === t && this._resizeButton()
  },
  _setOptionDisabled: function(t) {
      this._super(t), this.menuInstance.option("disabled", t), this.button.attr("aria-disabled", t), this._toggleClass(this.button, null, "ui-state-disabled", t), this.element.prop("disabled", t), t ? (this.button.attr("tabindex", -1), this.close()) : this.button.attr("tabindex", 0)
  },
  _appendTo: function() {
      var e = this.options.appendTo;
      return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)), e && e[0] || (e = this.element.closest(".ui-front, dialog")), e.length || (e = this.document[0].body), e
  },
  _toggleAttr: function() {
      this.button.attr("aria-expanded", this.isOpen), this._removeClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "closed" : "open"))._addClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "open" : "closed"))._toggleClass(this.menuWrap, "ui-selectmenu-open", null, this.isOpen), this.menu.attr("aria-hidden", !this.isOpen)
  },
  _resizeButton: function() {
      var t = this.options.width;
      return !1 === t ? void this.button.css("width", "") : (null === t && (t = this.element.show().outerWidth(), this.element.hide()), void this.button.outerWidth(t))
  },
  _resizeMenu: function() {
      this.menu.outerWidth(Math.max(this.button.outerWidth(), this.menu.width("").outerWidth() + 1))
  },
  _getCreateOptions: function() {
      var t = this._super();
      return t.disabled = this.element.prop("disabled"), t
  },
  _parseOptions: function(e) {
      var i = this,
          n = [];
      e.each(function(e, s) {
          n.push(i._parseOption(t(s), e))
      }), this.items = n
  },
  _parseOption: function(t, e) {
      var i = t.parent("optgroup");
      return {
          element: t,
          index: e,
          value: t.val(),
          label: t.text(),
          optgroup: i.attr("label") || "",
          disabled: i.prop("disabled") || t.prop("disabled")
      }
  },
  _destroy: function() {
      this._unbindFormResetHandler(), this.menuWrap.remove(), this.button.remove(), this.element.show(), this.element.removeUniqueId(), this.labels.attr("for", this.ids.element)
  }
}]), t.widget("ui.slider", t.ui.mouse, {
  version: "1.12.1",
  widgetEventPrefix: "slide",
  options: {
      animate: !1,
      classes: {
          "ui-slider": "ui-corner-all",
          "ui-slider-handle": "ui-corner-all",
          "ui-slider-range": "ui-corner-all ui-widget-header"
      },
      distance: 0,
      max: 100,
      min: 0,
      orientation: "horizontal",
      range: !1,
      step: 1,
      value: 0,
      values: null,
      change: null,
      slide: null,
      start: null,
      stop: null
  },
  numPages: 5,
  _create: function() {
      this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this._calculateNewMax(), this._addClass("ui-slider ui-slider-" + this.orientation, "ui-widget ui-widget-content"), this._refresh(), this._animateOff = !1
  },
  _refresh: function() {
      this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue()
  },
  _createHandles: function() {
      var e, i, n = this.options,
          s = this.element.find(".ui-slider-handle"),
          o = [];
      for (i = n.values && n.values.length || 1, s.length > i && (s.slice(i).remove(), s = s.slice(0, i)), e = s.length; i > e; e++) o.push("<span tabindex='0'></span>");
      this.handles = s.add(t(o.join("")).appendTo(this.element)), this._addClass(this.handles, "ui-slider-handle", "ui-state-default"), this.handle = this.handles.eq(0), this.handles.each(function(e) {
          t(this).data("ui-slider-handle-index", e).attr("tabIndex", 0)
      })
  },
  _createRange: function() {
      var e = this.options;
      e.range ? (!0 === e.range && (e.values ? e.values.length && 2 !== e.values.length ? e.values = [e.values[0], e.values[0]] : t.isArray(e.values) && (e.values = e.values.slice(0)) : e.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? (this._removeClass(this.range, "ui-slider-range-min ui-slider-range-max"), this.range.css({
          left: "",
          bottom: ""
      })) : (this.range = t("<div>").appendTo(this.element), this._addClass(this.range, "ui-slider-range")), ("min" === e.range || "max" === e.range) && this._addClass(this.range, "ui-slider-range-" + e.range)) : (this.range && this.range.remove(), this.range = null)
  },
  _setupEvents: function() {
      this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), this._focusable(this.handles)
  },
  _destroy: function() {
      this.handles.remove(), this.range && this.range.remove(), this._mouseDestroy()
  },
  _mouseCapture: function(e) {
      var i, n, s, o, a, r, l, c = this,
          h = this.options;
      return !h.disabled && (this.elementSize = {
          width: this.element.outerWidth(),
          height: this.element.outerHeight()
      }, this.elementOffset = this.element.offset(), i = {
          x: e.pageX,
          y: e.pageY
      }, n = this._normValueFromMouse(i), s = this._valueMax() - this._valueMin() + 1, this.handles.each(function(e) {
          var i = Math.abs(n - c.values(e));
          (s > i || s === i && (e === c._lastChangedValue || c.values(e) === h.min)) && (s = i, o = t(this), a = e)
      }), !1 !== this._start(e, a) && (this._mouseSliding = !0, this._handleIndex = a, this._addClass(o, null, "ui-state-active"), o.trigger("focus"), r = o.offset(), l = !t(e.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = l ? {
          left: 0,
          top: 0
      } : {
          left: e.pageX - r.left - o.width() / 2,
          top: e.pageY - r.top - o.height() / 2 - (parseInt(o.css("borderTopWidth"), 10) || 0) - (parseInt(o.css("borderBottomWidth"), 10) || 0) + (parseInt(o.css("marginTop"), 10) || 0)
      }, this.handles.hasClass("ui-state-hover") || this._slide(e, a, n), this._animateOff = !0, !0))
  },
  _mouseStart: function() {
      return !0
  },
  _mouseDrag: function(t) {
      var e = {
              x: t.pageX,
              y: t.pageY
          },
          i = this._normValueFromMouse(e);
      return this._slide(t, this._handleIndex, i), !1
  },
  _mouseStop: function(t) {
      return this._removeClass(this.handles, null, "ui-state-active"), this._mouseSliding = !1, this._stop(t, this._handleIndex), this._change(t, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
  },
  _detectOrientation: function() {
      this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
  },
  _normValueFromMouse: function(t) {
      var e, i, n, s, o;
      return "horizontal" === this.orientation ? (e = this.elementSize.width, i = t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e = this.elementSize.height, i = t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), (n = i / e) > 1 && (n = 1), 0 > n && (n = 0), "vertical" === this.orientation && (n = 1 - n), s = this._valueMax() - this._valueMin(), o = this._valueMin() + n * s, this._trimAlignValue(o)
  },
  _uiHash: function(t, e, i) {
      var n = {
          handle: this.handles[t],
          handleIndex: t,
          value: void 0 !== e ? e : this.value()
      };
      return this._hasMultipleValues() && (n.value = void 0 !== e ? e : this.values(t), n.values = i || this.values()), n
  },
  _hasMultipleValues: function() {
      return this.options.values && this.options.values.length
  },
  _start: function(t, e) {
      return this._trigger("start", t, this._uiHash(e))
  },
  _slide: function(t, e, i) {
      var n, s = this.value(),
          o = this.values();
      this._hasMultipleValues() && (n = this.values(e ? 0 : 1), s = this.values(e), 2 === this.options.values.length && !0 === this.options.range && (i = 0 === e ? Math.min(n, i) : Math.max(n, i)), o[e] = i), i !== s && (!1 !== this._trigger("slide", t, this._uiHash(e, i, o)) && (this._hasMultipleValues() ? this.values(e, i) : this.value(i)))
  },
  _stop: function(t, e) {
      this._trigger("stop", t, this._uiHash(e))
  },
  _change: function(t, e) {
      this._keySliding || this._mouseSliding || (this._lastChangedValue = e, this._trigger("change", t, this._uiHash(e)))
  },
  value: function(t) {
      return arguments.length ? (this.options.value = this._trimAlignValue(t), this._refreshValue(), void this._change(null, 0)) : this._value()
  },
  values: function(e, i) {
      var n, s, o;
      if (arguments.length > 1) return this.options.values[e] = this._trimAlignValue(i), this._refreshValue(), void this._change(null, e);
      if (!arguments.length) return this._values();
      if (!t.isArray(arguments[0])) return this._hasMultipleValues() ? this._values(e) : this.value();
      for (n = this.options.values, s = arguments[0], o = 0; n.length > o; o += 1) n[o] = this._trimAlignValue(s[o]), this._change(null, o);
      this._refreshValue()
  },
  _setOption: function(e, i) {
      var n, s = 0;
      switch ("range" === e && !0 === this.options.range && ("min" === i ? (this.options.value = this._values(0), this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), t.isArray(this.options.values) && (s = this.options.values.length), this._super(e, i), e) {
          case "orientation":
              this._detectOrientation(), this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-" + this.orientation), this._refreshValue(), this.options.range && this._refreshRange(i), this.handles.css("horizontal" === i ? "bottom" : "left", "");
              break;
          case "value":
              this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
              break;
          case "values":
              for (this._animateOff = !0, this._refreshValue(), n = s - 1; n >= 0; n--) this._change(null, n);
              this._animateOff = !1;
              break;
          case "step":
          case "min":
          case "max":
              this._animateOff = !0, this._calculateNewMax(), this._refreshValue(), this._animateOff = !1;
              break;
          case "range":
              this._animateOff = !0, this._refresh(), this._animateOff = !1
      }
  },
  _setOptionDisabled: function(t) {
      this._super(t), this._toggleClass(null, "ui-state-disabled", !!t)
  },
  _value: function() {
      var t = this.options.value;
      return this._trimAlignValue(t)
  },
  _values: function(t) {
      var e, i, n;
      if (arguments.length) return e = this.options.values[t], this._trimAlignValue(e);
      if (this._hasMultipleValues()) {
          for (i = this.options.values.slice(), n = 0; i.length > n; n += 1) i[n] = this._trimAlignValue(i[n]);
          return i
      }
      return []
  },
  _trimAlignValue: function(t) {
      if (this._valueMin() >= t) return this._valueMin();
      if (t >= this._valueMax()) return this._valueMax();
      var e = this.options.step > 0 ? this.options.step : 1,
          i = (t - this._valueMin()) % e,
          n = t - i;
      return 2 * Math.abs(i) >= e && (n += i > 0 ? e : -e), parseFloat(n.toFixed(5))
  },
  _calculateNewMax: function() {
      var t = this.options.max,
          e = this._valueMin(),
          i = this.options.step;
      (t = Math.round((t - e) / i) * i + e) > this.options.max && (t -= i), this.max = parseFloat(t.toFixed(this._precision()))
  },
  _precision: function() {
      var t = this._precisionOf(this.options.step);
      return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t
  },
  _precisionOf: function(t) {
      var e = "" + t,
          i = e.indexOf(".");
      return -1 === i ? 0 : e.length - i - 1
  },
  _valueMin: function() {
      return this.options.min
  },
  _valueMax: function() {
      return this.max
  },
  _refreshRange: function(t) {
      "vertical" === t && this.range.css({
          width: "",
          left: ""
      }), "horizontal" === t && this.range.css({
          height: "",
          bottom: ""
      })
  },
  _refreshValue: function() {
      var e, i, n, s, o, a = this.options.range,
          r = this.options,
          l = this,
          c = !this._animateOff && r.animate,
          h = {};
      this._hasMultipleValues() ? this.handles.each(function(n) {
          i = (l.values(n) - l._valueMin()) / (l._valueMax() - l._valueMin()) * 100, h["horizontal" === l.orientation ? "left" : "bottom"] = i + "%", t(this).stop(1, 1)[c ? "animate" : "css"](h, r.animate), !0 === l.options.range && ("horizontal" === l.orientation ? (0 === n && l.range.stop(1, 1)[c ? "animate" : "css"]({
              left: i + "%"
          }, r.animate), 1 === n && l.range[c ? "animate" : "css"]({
              width: i - e + "%"
          }, {
              queue: !1,
              duration: r.animate
          })) : (0 === n && l.range.stop(1, 1)[c ? "animate" : "css"]({
              bottom: i + "%"
          }, r.animate), 1 === n && l.range[c ? "animate" : "css"]({
              height: i - e + "%"
          }, {
              queue: !1,
              duration: r.animate
          }))), e = i
      }) : (n = this.value(), s = this._valueMin(), o = this._valueMax(), i = o !== s ? (n - s) / (o - s) * 100 : 0, h["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[c ? "animate" : "css"](h, r.animate), "min" === a && "horizontal" === this.orientation && this.range.stop(1, 1)[c ? "animate" : "css"]({
          width: i + "%"
      }, r.animate), "max" === a && "horizontal" === this.orientation && this.range.stop(1, 1)[c ? "animate" : "css"]({
          width: 100 - i + "%"
      }, r.animate), "min" === a && "vertical" === this.orientation && this.range.stop(1, 1)[c ? "animate" : "css"]({
          height: i + "%"
      }, r.animate), "max" === a && "vertical" === this.orientation && this.range.stop(1, 1)[c ? "animate" : "css"]({
          height: 100 - i + "%"
      }, r.animate))
  },
  _handleEvents: {
      keydown: function(e) {
          var i, n, s, o = t(e.target).data("ui-slider-handle-index");
          switch (e.keyCode) {
              case t.ui.keyCode.HOME:
              case t.ui.keyCode.END:
              case t.ui.keyCode.PAGE_UP:
              case t.ui.keyCode.PAGE_DOWN:
              case t.ui.keyCode.UP:
              case t.ui.keyCode.RIGHT:
              case t.ui.keyCode.DOWN:
              case t.ui.keyCode.LEFT:
                  if (e.preventDefault(), !this._keySliding && (this._keySliding = !0, this._addClass(t(e.target), null, "ui-state-active"), !1 === this._start(e, o))) return
          }
          switch (s = this.options.step, i = n = this._hasMultipleValues() ? this.values(o) : this.value(), e.keyCode) {
              case t.ui.keyCode.HOME:
                  n = this._valueMin();
                  break;
              case t.ui.keyCode.END:
                  n = this._valueMax();
                  break;
              case t.ui.keyCode.PAGE_UP:
                  n = this._trimAlignValue(i + (this._valueMax() - this._valueMin()) / this.numPages);
                  break;
              case t.ui.keyCode.PAGE_DOWN:
                  n = this._trimAlignValue(i - (this._valueMax() - this._valueMin()) / this.numPages);
                  break;
              case t.ui.keyCode.UP:
              case t.ui.keyCode.RIGHT:
                  if (i === this._valueMax()) return;
                  n = this._trimAlignValue(i + s);
                  break;
              case t.ui.keyCode.DOWN:
              case t.ui.keyCode.LEFT:
                  if (i === this._valueMin()) return;
                  n = this._trimAlignValue(i - s)
          }
          this._slide(e, o, n)
      },
      keyup: function(e) {
          var i = t(e.target).data("ui-slider-handle-index");
          this._keySliding && (this._keySliding = !1, this._stop(e, i), this._change(e, i), this._removeClass(t(e.target), null, "ui-state-active"))
      }
  }
}), t.widget("ui.sortable", t.ui.mouse, {
  version: "1.12.1",
  widgetEventPrefix: "sort",
  ready: !1,
  options: {
      appendTo: "parent",
      axis: !1,
      connectWith: !1,
      containment: !1,
      cursor: "auto",
      cursorAt: !1,
      dropOnEmpty: !0,
      forcePlaceholderSize: !1,
      forceHelperSize: !1,
      grid: !1,
      handle: !1,
      helper: "original",
      items: "> *",
      opacity: !1,
      placeholder: !1,
      revert: !1,
      scroll: !0,
      scrollSensitivity: 20,
      scrollSpeed: 20,
      scope: "default",
      tolerance: "intersect",
      zIndex: 1e3,
      activate: null,
      beforeStop: null,
      change: null,
      deactivate: null,
      out: null,
      over: null,
      receive: null,
      remove: null,
      sort: null,
      start: null,
      stop: null,
      update: null
  },
  _isOverAxis: function(t, e, i) {
      return t >= e && e + i > t
  },
  _isFloating: function(t) {
      return /left|right/.test(t.css("float")) || /inline|table-cell/.test(t.css("display"))
  },
  _create: function() {
      this.containerCache = {}, this._addClass("ui-sortable"), this.refresh(), this.offset = this.element.offset(), this._mouseInit(), this._setHandleClassName(), this.ready = !0
  },
  _setOption: function(t, e) {
      this._super(t, e), "handle" === t && this._setHandleClassName()
  },
  _setHandleClassName: function() {
      var e = this;
      this._removeClass(this.element.find(".ui-sortable-handle"), "ui-sortable-handle"), t.each(this.items, function() {
          e._addClass(this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item, "ui-sortable-handle")
      })
  },
  _destroy: function() {
      this._mouseDestroy();
      for (var t = this.items.length - 1; t >= 0; t--) this.items[t].item.removeData(this.widgetName + "-item");
      return this
  },
  _mouseCapture: function(e, i) {
      var n = null,
          s = !1,
          o = this;
      return !this.reverting && (!this.options.disabled && "static" !== this.options.type && (this._refreshItems(e), t(e.target).parents().each(function() {
          return t.data(this, o.widgetName + "-item") === o ? (n = t(this), !1) : void 0
      }), t.data(e.target, o.widgetName + "-item") === o && (n = t(e.target)), !!n && (!(this.options.handle && !i && (t(this.options.handle, n).find("*").addBack().each(function() {
          this === e.target && (s = !0)
      }), !s)) && (this.currentItem = n, this._removeCurrentsFromItems(), !0))))
  },
  _mouseStart: function(e, i, n) {
      var s, o, a = this.options;
      if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(e), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
              top: this.offset.top - this.margins.top,
              left: this.offset.left - this.margins.left
          }, t.extend(this.offset, {
              click: {
                  left: e.pageX - this.offset.left,
                  top: e.pageY - this.offset.top
              },
              parent: this._getParentOffset(),
              relative: this._getRelativeOffset()
          }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, a.cursorAt && this._adjustOffsetFromHelper(a.cursorAt), this.domPosition = {
              prev: this.currentItem.prev()[0],
              parent: this.currentItem.parent()[0]
          }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), a.containment && this._setContainment(), a.cursor && "auto" !== a.cursor && (o = this.document.find("body"), this.storedCursor = o.css("cursor"), o.css("cursor", a.cursor), this.storedStylesheet = t("<style>*{ cursor: " + a.cursor + " !important; }</style>").appendTo(o)), a.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", a.opacity)), a.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", a.zIndex)), this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", e, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !n)
          for (s = this.containers.length - 1; s >= 0; s--) this.containers[s]._trigger("activate", e, this._uiHash(this));
      return t.ui.ddmanager && (t.ui.ddmanager.current = this), t.ui.ddmanager && !a.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this.dragging = !0, this._addClass(this.helper, "ui-sortable-helper"), this._mouseDrag(e), !0
  },
  _mouseDrag: function(e) {
      var i, n, s, o, a = this.options,
          r = !1;
      for (this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - e.pageY < a.scrollSensitivity ? this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop + a.scrollSpeed : e.pageY - this.overflowOffset.top < a.scrollSensitivity && (this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop - a.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - e.pageX < a.scrollSensitivity ? this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft + a.scrollSpeed : e.pageX - this.overflowOffset.left < a.scrollSensitivity && (this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft - a.scrollSpeed)) : (e.pageY - this.document.scrollTop() < a.scrollSensitivity ? r = this.document.scrollTop(this.document.scrollTop() - a.scrollSpeed) : this.window.height() - (e.pageY - this.document.scrollTop()) < a.scrollSensitivity && (r = this.document.scrollTop(this.document.scrollTop() + a.scrollSpeed)), e.pageX - this.document.scrollLeft() < a.scrollSensitivity ? r = this.document.scrollLeft(this.document.scrollLeft() - a.scrollSpeed) : this.window.width() - (e.pageX - this.document.scrollLeft()) < a.scrollSensitivity && (r = this.document.scrollLeft(this.document.scrollLeft() + a.scrollSpeed))), !1 !== r && t.ui.ddmanager && !a.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), i = this.items.length - 1; i >= 0; i--)
          if (s = (n = this.items[i]).item[0], (o = this._intersectsWithPointer(n)) && n.instance === this.currentContainer && s !== this.currentItem[0] && this.placeholder[1 === o ? "next" : "prev"]()[0] !== s && !t.contains(this.placeholder[0], s) && ("semi-dynamic" !== this.options.type || !t.contains(this.element[0], s))) {
              if (this.direction = 1 === o ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(n)) break;
              this._rearrange(e, n), this._trigger("change", e, this._uiHash());
              break
          }
      return this._contactContainers(e), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), this._trigger("sort", e, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
  },
  _mouseStop: function(e, i) {
      if (e) {
          if (t.ui.ddmanager && !this.options.dropBehaviour && t.ui.ddmanager.drop(this, e), this.options.revert) {
              var n = this,
                  s = this.placeholder.offset(),
                  o = this.options.axis,
                  a = {};
              o && "x" !== o || (a.left = s.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft)), o && "y" !== o || (a.top = s.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, t(this.helper).animate(a, parseInt(this.options.revert, 10) || 500, function() {
                  n._clear(e)
              })
          } else this._clear(e, i);
          return !1
      }
  },
  cancel: function() {
      if (this.dragging) {
          this._mouseUp(new t.Event("mouseup", {
              target: null
          })), "original" === this.options.helper ? (this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, "ui-sortable-helper")) : this.currentItem.show();
          for (var e = this.containers.length - 1; e >= 0; e--) this.containers[e]._trigger("deactivate", null, this._uiHash(this)), this.containers[e].containerCache.over && (this.containers[e]._trigger("out", null, this._uiHash(this)), this.containers[e].containerCache.over = 0)
      }
      return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), t.extend(this, {
          helper: null,
          dragging: !1,
          reverting: !1,
          _noFinalSort: null
      }), this.domPosition.prev ? t(this.domPosition.prev).after(this.currentItem) : t(this.domPosition.parent).prepend(this.currentItem)), this
  },
  serialize: function(e) {
      var i = this._getItemsAsjQuery(e && e.connected),
          n = [];
      return e = e || {}, t(i).each(function() {
          var i = (t(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[\-=_](.+)/);
          i && n.push((e.key || i[1] + "[]") + "=" + (e.key && e.expression ? i[1] : i[2]))
      }), !n.length && e.key && n.push(e.key + "="), n.join("&")
  },
  toArray: function(e) {
      var i = this._getItemsAsjQuery(e && e.connected),
          n = [];
      return e = e || {}, i.each(function() {
          n.push(t(e.item || this).attr(e.attribute || "id") || "")
      }), n
  },
  _intersectsWith: function(t) {
      var e = this.positionAbs.left,
          i = e + this.helperProportions.width,
          n = this.positionAbs.top,
          s = n + this.helperProportions.height,
          o = t.left,
          a = o + t.width,
          r = t.top,
          l = r + t.height,
          c = this.offset.click.top,
          h = this.offset.click.left,
          u = "x" === this.options.axis || n + c > r && l > n + c,
          d = "y" === this.options.axis || e + h > o && a > e + h,
          p = u && d;
      return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"] ? p : e + this.helperProportions.width / 2 > o && a > i - this.helperProportions.width / 2 && n + this.helperProportions.height / 2 > r && l > s - this.helperProportions.height / 2
  },
  _intersectsWithPointer: function(t) {
      var e, i, n = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top, t.height),
          s = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left, t.width);
      return !!(n && s) && (e = this._getDragVerticalDirection(), i = this._getDragHorizontalDirection(), this.floating ? "right" === i || "down" === e ? 2 : 1 : e && ("down" === e ? 2 : 1))
  },
  _intersectsWithSides: function(t) {
      var e = this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height),
          i = this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width),
          n = this._getDragVerticalDirection(),
          s = this._getDragHorizontalDirection();
      return this.floating && s ? "right" === s && i || "left" === s && !i : n && ("down" === n && e || "up" === n && !e)
  },
  _getDragVerticalDirection: function() {
      var t = this.positionAbs.top - this.lastPositionAbs.top;
      return 0 !== t && (t > 0 ? "down" : "up")
  },
  _getDragHorizontalDirection: function() {
      var t = this.positionAbs.left - this.lastPositionAbs.left;
      return 0 !== t && (t > 0 ? "right" : "left")
  },
  refresh: function(t) {
      return this._refreshItems(t), this._setHandleClassName(), this.refreshPositions(), this
  },
  _connectWith: function() {
      var t = this.options;
      return t.connectWith.constructor === String ? [t.connectWith] : t.connectWith
  },
  _getItemsAsjQuery: function(e) {
      function i() {
          r.push(this)
      }
      var n, s, o, a, r = [],
          l = [],
          c = this._connectWith();
      if (c && e)
          for (n = c.length - 1; n >= 0; n--)
              for (s = (o = t(c[n], this.document[0])).length - 1; s >= 0; s--)(a = t.data(o[s], this.widgetFullName)) && a !== this && !a.options.disabled && l.push([t.isFunction(a.options.items) ? a.options.items.call(a.element) : t(a.options.items, a.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), a]);
      for (l.push([t.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
              options: this.options,
              item: this.currentItem
          }) : t(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), n = l.length - 1; n >= 0; n--) l[n][0].each(i);
      return t(r)
  },
  _removeCurrentsFromItems: function() {
      var e = this.currentItem.find(":data(" + this.widgetName + "-item)");
      this.items = t.grep(this.items, function(t) {
          for (var i = 0; e.length > i; i++)
              if (e[i] === t.item[0]) return !1;
          return !0
      })
  },
  _refreshItems: function(e) {
      this.items = [], this.containers = [this];
      var i, n, s, o, a, r, l, c, h = this.items,
          u = [
              [t.isFunction(this.options.items) ? this.options.items.call(this.element[0], e, {
                  item: this.currentItem
              }) : t(this.options.items, this.element), this]
          ],
          d = this._connectWith();
      if (d && this.ready)
          for (i = d.length - 1; i >= 0; i--)
              for (n = (s = t(d[i], this.document[0])).length - 1; n >= 0; n--)(o = t.data(s[n], this.widgetFullName)) && o !== this && !o.options.disabled && (u.push([t.isFunction(o.options.items) ? o.options.items.call(o.element[0], e, {
                  item: this.currentItem
              }) : t(o.options.items, o.element), o]), this.containers.push(o));
      for (i = u.length - 1; i >= 0; i--)
          for (a = u[i][1], n = 0, c = (r = u[i][0]).length; c > n; n++)(l = t(r[n])).data(this.widgetName + "-item", a), h.push({
              item: l,
              instance: a,
              width: 0,
              height: 0,
              left: 0,
              top: 0
          })
  },
  refreshPositions: function(e) {
      var i, n, s, o;
      for (this.floating = !!this.items.length && ("x" === this.options.axis || this._isFloating(this.items[0].item)), this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset()), i = this.items.length - 1; i >= 0; i--)(n = this.items[i]).instance !== this.currentContainer && this.currentContainer && n.item[0] !== this.currentItem[0] || (s = this.options.toleranceElement ? t(this.options.toleranceElement, n.item) : n.item, e || (n.width = s.outerWidth(), n.height = s.outerHeight()), o = s.offset(), n.left = o.left, n.top = o.top);
      if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
      else
          for (i = this.containers.length - 1; i >= 0; i--) o = this.containers[i].element.offset(), this.containers[i].containerCache.left = o.left, this.containers[i].containerCache.top = o.top, this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
      return this
  },
  _createPlaceholder: function(e) {
      var i, n = (e = e || this).options;
      n.placeholder && n.placeholder.constructor !== String || (i = n.placeholder, n.placeholder = {
          element: function() {
              var n = e.currentItem[0].nodeName.toLowerCase(),
                  s = t("<" + n + ">", e.document[0]);
              return e._addClass(s, "ui-sortable-placeholder", i || e.currentItem[0].className)._removeClass(s, "ui-sortable-helper"), "tbody" === n ? e._createTrPlaceholder(e.currentItem.find("tr").eq(0), t("<tr>", e.document[0]).appendTo(s)) : "tr" === n ? e._createTrPlaceholder(e.currentItem, s) : "img" === n && s.attr("src", e.currentItem.attr("src")), i || s.css("visibility", "hidden"), s
          },
          update: function(t, s) {
              (!i || n.forcePlaceholderSize) && (s.height() || s.height(e.currentItem.innerHeight() - parseInt(e.currentItem.css("paddingTop") || 0, 10) - parseInt(e.currentItem.css("paddingBottom") || 0, 10)), s.width() || s.width(e.currentItem.innerWidth() - parseInt(e.currentItem.css("paddingLeft") || 0, 10) - parseInt(e.currentItem.css("paddingRight") || 0, 10)))
          }
      }), e.placeholder = t(n.placeholder.element.call(e.element, e.currentItem)), e.currentItem.after(e.placeholder), n.placeholder.update(e, e.placeholder)
  },
  _createTrPlaceholder: function(e, i) {
      var n = this;
      e.children().each(function() {
          t("<td>&#160;</td>", n.document[0]).attr("colspan", t(this).attr("colspan") || 1).appendTo(i)
      })
  },
  _contactContainers: function(e) {
      var i, n, s, o, a, r, l, c, h, u, d = null,
          p = null;
      for (i = this.containers.length - 1; i >= 0; i--)
          if (!t.contains(this.currentItem[0], this.containers[i].element[0]))
              if (this._intersectsWith(this.containers[i].containerCache)) {
                  if (d && t.contains(this.containers[i].element[0], d.element[0])) continue;
                  d = this.containers[i], p = i
              } else this.containers[i].containerCache.over && (this.containers[i]._trigger("out", e, this._uiHash(this)), this.containers[i].containerCache.over = 0);
      if (d)
          if (1 === this.containers.length) this.containers[p].containerCache.over || (this.containers[p]._trigger("over", e, this._uiHash(this)), this.containers[p].containerCache.over = 1);
          else {
              for (s = 1e4, o = null, a = (h = d.floating || this._isFloating(this.currentItem)) ? "left" : "top", r = h ? "width" : "height", u = h ? "pageX" : "pageY", n = this.items.length - 1; n >= 0; n--) t.contains(this.containers[p].element[0], this.items[n].item[0]) && this.items[n].item[0] !== this.currentItem[0] && (l = this.items[n].item.offset()[a], c = !1, e[u] - l > this.items[n][r] / 2 && (c = !0), s > Math.abs(e[u] - l) && (s = Math.abs(e[u] - l), o = this.items[n], this.direction = c ? "up" : "down"));
              if (!o && !this.options.dropOnEmpty) return;
              if (this.currentContainer === this.containers[p]) return void(this.currentContainer.containerCache.over || (this.containers[p]._trigger("over", e, this._uiHash()), this.currentContainer.containerCache.over = 1));
              o ? this._rearrange(e, o, null, !0) : this._rearrange(e, null, this.containers[p].element, !0), this._trigger("change", e, this._uiHash()), this.containers[p]._trigger("change", e, this._uiHash(this)), this.currentContainer = this.containers[p], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[p]._trigger("over", e, this._uiHash(this)), this.containers[p].containerCache.over = 1
          }
  },
  _createHelper: function(e) {
      var i = this.options,
          n = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e, this.currentItem])) : "clone" === i.helper ? this.currentItem.clone() : this.currentItem;
      return n.parents("body").length || t("parent" !== i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(n[0]), n[0] === this.currentItem[0] && (this._storedCSS = {
          width: this.currentItem[0].style.width,
          height: this.currentItem[0].style.height,
          position: this.currentItem.css("position"),
          top: this.currentItem.css("top"),
          left: this.currentItem.css("left")
      }), (!n[0].style.width || i.forceHelperSize) && n.width(this.currentItem.width()), (!n[0].style.height || i.forceHelperSize) && n.height(this.currentItem.height()), n
  },
  _adjustOffsetFromHelper: function(e) {
      "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
          left: +e[0],
          top: +e[1] || 0
      }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
  },
  _getParentOffset: function() {
      this.offsetParent = this.helper.offsetParent();
      var e = this.offsetParent.offset();
      return "absolute" === this.cssPosition && this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === this.document[0].body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = {
          top: 0,
          left: 0
      }), {
          top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
          left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
      }
  },
  _getRelativeOffset: function() {
      if ("relative" === this.cssPosition) {
          var t = this.currentItem.position();
          return {
              top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
              left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
          }
      }
      return {
          top: 0,
          left: 0
      }
  },
  _cacheMargins: function() {
      this.margins = {
          left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
          top: parseInt(this.currentItem.css("marginTop"), 10) || 0
      }
  },
  _cacheHelperProportions: function() {
      this.helperProportions = {
          width: this.helper.outerWidth(),
          height: this.helper.outerHeight()
      }
  },
  _setContainment: function() {
      var e, i, n, s = this.options;
      "parent" === s.containment && (s.containment = this.helper[0].parentNode), ("document" === s.containment || "window" === s.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, "document" === s.containment ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left, ("document" === s.containment ? this.document.height() || document.body.parentNode.scrollHeight : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(s.containment) || (e = t(s.containment)[0], i = t(s.containment).offset(), n = "hidden" !== t(e).css("overflow"), this.containment = [i.left + (parseInt(t(e).css("borderLeftWidth"), 10) || 0) + (parseInt(t(e).css("paddingLeft"), 10) || 0) - this.margins.left, i.top + (parseInt(t(e).css("borderTopWidth"), 10) || 0) + (parseInt(t(e).css("paddingTop"), 10) || 0) - this.margins.top, i.left + (n ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) - (parseInt(t(e).css("borderLeftWidth"), 10) || 0) - (parseInt(t(e).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, i.top + (n ? Math.max(e.scrollHeight, e.offsetHeight) : e.offsetHeight) - (parseInt(t(e).css("borderTopWidth"), 10) || 0) - (parseInt(t(e).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
  },
  _convertPositionTo: function(e, i) {
      i || (i = this.position);
      var n = "absolute" === e ? 1 : -1,
          s = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
          o = /(html|body)/i.test(s[0].tagName);
      return {
          top: i.top + this.offset.relative.top * n + this.offset.parent.top * n - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : o ? 0 : s.scrollTop()) * n,
          left: i.left + this.offset.relative.left * n + this.offset.parent.left * n - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : o ? 0 : s.scrollLeft()) * n
      }
  },
  _generatePosition: function(e) {
      var i, n, s = this.options,
          o = e.pageX,
          a = e.pageY,
          r = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
          l = /(html|body)/i.test(r[0].tagName);
      return "relative" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (e.pageX - this.offset.click.left < this.containment[0] && (o = this.containment[0] + this.offset.click.left), e.pageY - this.offset.click.top < this.containment[1] && (a = this.containment[1] + this.offset.click.top), e.pageX - this.offset.click.left > this.containment[2] && (o = this.containment[2] + this.offset.click.left), e.pageY - this.offset.click.top > this.containment[3] && (a = this.containment[3] + this.offset.click.top)), s.grid && (i = this.originalPageY + Math.round((a - this.originalPageY) / s.grid[1]) * s.grid[1], a = this.containment ? i - this.offset.click.top >= this.containment[1] && i - this.offset.click.top <= this.containment[3] ? i : i - this.offset.click.top >= this.containment[1] ? i - s.grid[1] : i + s.grid[1] : i, n = this.originalPageX + Math.round((o - this.originalPageX) / s.grid[0]) * s.grid[0], o = this.containment ? n - this.offset.click.left >= this.containment[0] && n - this.offset.click.left <= this.containment[2] ? n : n - this.offset.click.left >= this.containment[0] ? n - s.grid[0] : n + s.grid[0] : n)), {
          top: a - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : l ? 0 : r.scrollTop()),
          left: o - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : l ? 0 : r.scrollLeft())
      }
  },
  _rearrange: function(t, e, i, n) {
      i ? i[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? e.item[0] : e.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
      var s = this.counter;
      this._delay(function() {
          s === this.counter && this.refreshPositions(!n)
      })
  },
  _clear: function(t, e) {
      function i(t, e, i) {
          return function(n) {
              i._trigger(t, n, e._uiHash(e))
          }
      }
      this.reverting = !1;
      var n, s = [];
      if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
          for (n in this._storedCSS)("auto" === this._storedCSS[n] || "static" === this._storedCSS[n]) && (this._storedCSS[n] = "");
          this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, "ui-sortable-helper")
      } else this.currentItem.show();
      for (this.fromOutside && !e && s.push(function(t) {
              this._trigger("receive", t, this._uiHash(this.fromOutside))
          }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || e || s.push(function(t) {
              this._trigger("update", t, this._uiHash())
          }), this !== this.currentContainer && (e || (s.push(function(t) {
              this._trigger("remove", t, this._uiHash())
          }), s.push(function(t) {
              return function(e) {
                  t._trigger("receive", e, this._uiHash(this))
              }
          }.call(this, this.currentContainer)), s.push(function(t) {
              return function(e) {
                  t._trigger("update", e, this._uiHash(this))
              }
          }.call(this, this.currentContainer)))), n = this.containers.length - 1; n >= 0; n--) e || s.push(i("deactivate", this, this.containers[n])), this.containers[n].containerCache.over && (s.push(i("out", this, this.containers[n])), this.containers[n].containerCache.over = 0);
      if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, e || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null), !e) {
          for (n = 0; s.length > n; n++) s[n].call(this, t);
          this._trigger("stop", t, this._uiHash())
      }
      return this.fromOutside = !1, !this.cancelHelperRemoval
  },
  _trigger: function() {
      !1 === t.Widget.prototype._trigger.apply(this, arguments) && this.cancel()
  },
  _uiHash: function(e) {
      var i = e || this;
      return {
          helper: i.helper,
          placeholder: i.placeholder || t([]),
          position: i.position,
          originalPosition: i.originalPosition,
          offset: i.positionAbs,
          item: i.currentItem,
          sender: e ? e.element : null
      }
  }
}), t.widget("ui.spinner", {
  version: "1.12.1",
  defaultElement: "<input>",
  widgetEventPrefix: "spin",
  options: {
      classes: {
          "ui-spinner": "ui-corner-all",
          "ui-spinner-down": "ui-corner-br",
          "ui-spinner-up": "ui-corner-tr"
      },
      culture: null,
      icons: {
          down: "ui-icon-triangle-1-s",
          up: "ui-icon-triangle-1-n"
      },
      incremental: !0,
      max: null,
      min: null,
      numberFormat: null,
      page: 10,
      step: 1,
      change: null,
      spin: null,
      start: null,
      stop: null
  },
  _create: function() {
      this._setOption("max", this.options.max), this._setOption("min", this.options.min), this._setOption("step", this.options.step), "" !== this.value() && this._value(this.element.val(), !0), this._draw(), this._on(this._events), this._refresh(), this._on(this.window, {
          beforeunload: function() {
              this.element.removeAttr("autocomplete")
          }
      })
  },
  _getCreateOptions: function() {
      var e = this._super(),
          i = this.element;
      return t.each(["min", "max", "step"], function(t, n) {
          var s = i.attr(n);
          null != s && s.length && (e[n] = s)
      }), e
  },
  _events: {
      keydown: function(t) {
          this._start(t) && this._keydown(t) && t.preventDefault()
      },
      keyup: "_stop",
      focus: function() {
          this.previous = this.element.val()
      },
      blur: function(t) {
          return this.cancelBlur ? void delete this.cancelBlur : (this._stop(), this._refresh(), void(this.previous !== this.element.val() && this._trigger("change", t)))
      },
      mousewheel: function(t, e) {
          if (e) {
              if (!this.spinning && !this._start(t)) return !1;
              this._spin((e > 0 ? 1 : -1) * this.options.step, t), clearTimeout(this.mousewheelTimer), this.mousewheelTimer = this._delay(function() {
                  this.spinning && this._stop(t)
              }, 100), t.preventDefault()
          }
      },
      "mousedown .ui-spinner-button": function(e) {
          function i() {
              this.element[0] === t.ui.safeActiveElement(this.document[0]) || (this.element.trigger("focus"), this.previous = n, this._delay(function() {
                  this.previous = n
              }))
          }
          var n;
          n = this.element[0] === t.ui.safeActiveElement(this.document[0]) ? this.previous : this.element.val(), e.preventDefault(), i.call(this), this.cancelBlur = !0, this._delay(function() {
              delete this.cancelBlur, i.call(this)
          }), !1 !== this._start(e) && this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e)
      },
      "mouseup .ui-spinner-button": "_stop",
      "mouseenter .ui-spinner-button": function(e) {
          return t(e.currentTarget).hasClass("ui-state-active") ? !1 !== this._start(e) && void this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e) : void 0
      },
      "mouseleave .ui-spinner-button": "_stop"
  },
  _enhance: function() {
      this.uiSpinner = this.element.attr("autocomplete", "off").wrap("<span>").parent().append("<a></a><a></a>")
  },
  _draw: function() {
      this._enhance(), this._addClass(this.uiSpinner, "ui-spinner", "ui-widget ui-widget-content"), this._addClass("ui-spinner-input"), this.element.attr("role", "spinbutton"), this.buttons = this.uiSpinner.children("a").attr("tabIndex", -1).attr("aria-hidden", !0).button({
          classes: {
              "ui-button": ""
          }
      }), this._removeClass(this.buttons, "ui-corner-all"), this._addClass(this.buttons.first(), "ui-spinner-button ui-spinner-up"), this._addClass(this.buttons.last(), "ui-spinner-button ui-spinner-down"), this.buttons.first().button({
          icon: this.options.icons.up,
          showLabel: !1
      }), this.buttons.last().button({
          icon: this.options.icons.down,
          showLabel: !1
      }), this.buttons.height() > Math.ceil(.5 * this.uiSpinner.height()) && this.uiSpinner.height() > 0 && this.uiSpinner.height(this.uiSpinner.height())
  },
  _keydown: function(e) {
      var i = this.options,
          n = t.ui.keyCode;
      switch (e.keyCode) {
          case n.UP:
              return this._repeat(null, 1, e), !0;
          case n.DOWN:
              return this._repeat(null, -1, e), !0;
          case n.PAGE_UP:
              return this._repeat(null, i.page, e), !0;
          case n.PAGE_DOWN:
              return this._repeat(null, -i.page, e), !0
      }
      return !1
  },
  _start: function(t) {
      return !(!this.spinning && !1 === this._trigger("start", t)) && (this.counter || (this.counter = 1), this.spinning = !0, !0)
  },
  _repeat: function(t, e, i) {
      t = t || 500, clearTimeout(this.timer), this.timer = this._delay(function() {
          this._repeat(40, e, i)
      }, t), this._spin(e * this.options.step, i)
  },
  _spin: function(t, e) {
      var i = this.value() || 0;
      this.counter || (this.counter = 1), i = this._adjustValue(i + t * this._increment(this.counter)), this.spinning && !1 === this._trigger("spin", e, {
          value: i
      }) || (this._value(i), this.counter++)
  },
  _increment: function(e) {
      var i = this.options.incremental;
      return i ? t.isFunction(i) ? i(e) : Math.floor(e * e * e / 5e4 - e * e / 500 + 17 * e / 200 + 1) : 1
  },
  _precision: function() {
      var t = this._precisionOf(this.options.step);
      return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t
  },
  _precisionOf: function(t) {
      var e = "" + t,
          i = e.indexOf(".");
      return -1 === i ? 0 : e.length - i - 1
  },
  _adjustValue: function(t) {
      var e, i, n = this.options;
      return i = t - (e = null !== n.min ? n.min : 0), t = e + (i = Math.round(i / n.step) * n.step), t = parseFloat(t.toFixed(this._precision())), null !== n.max && t > n.max ? n.max : null !== n.min && n.min > t ? n.min : t
  },
  _stop: function(t) {
      this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", t))
  },
  _setOption: function(t, e) {
      var i, n, s;
      return "culture" === t || "numberFormat" === t ? (i = this._parse(this.element.val()), this.options[t] = e, void this.element.val(this._format(i))) : (("max" === t || "min" === t || "step" === t) && "string" == typeof e && (e = this._parse(e)), "icons" === t && (n = this.buttons.first().find(".ui-icon"), this._removeClass(n, null, this.options.icons.up), this._addClass(n, null, e.up), s = this.buttons.last().find(".ui-icon"), this._removeClass(s, null, this.options.icons.down), this._addClass(s, null, e.down)), void this._super(t, e))
  },
  _setOptionDisabled: function(t) {
      this._super(t), this._toggleClass(this.uiSpinner, null, "ui-state-disabled", !!t), this.element.prop("disabled", !!t), this.buttons.button(t ? "disable" : "enable")
  },
  _setOptions: o(function(t) {
      this._super(t)
  }),
  _parse: function(t) {
      return "string" == typeof t && "" !== t && (t = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(t, 10, this.options.culture) : +t), "" === t || isNaN(t) ? null : t
  },
  _format: function(t) {
      return "" === t ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(t, this.options.numberFormat, this.options.culture) : t
  },
  _refresh: function() {
      this.element.attr({
          "aria-valuemin": this.options.min,
          "aria-valuemax": this.options.max,
          "aria-valuenow": this._parse(this.element.val())
      })
  },
  isValid: function() {
      var t = this.value();
      return null !== t && t === this._adjustValue(t)
  },
  _value: function(t, e) {
      var i;
      "" !== t && (null !== (i = this._parse(t)) && (e || (i = this._adjustValue(i)), t = this._format(i))), this.element.val(t), this._refresh()
  },
  _destroy: function() {
      this.element.prop("disabled", !1).removeAttr("autocomplete role aria-valuemin aria-valuemax aria-valuenow"), this.uiSpinner.replaceWith(this.element)
  },
  stepUp: o(function(t) {
      this._stepUp(t)
  }),
  _stepUp: function(t) {
      this._start() && (this._spin((t || 1) * this.options.step), this._stop())
  },
  stepDown: o(function(t) {
      this._stepDown(t)
  }),
  _stepDown: function(t) {
      this._start() && (this._spin((t || 1) * -this.options.step), this._stop())
  },
  pageUp: o(function(t) {
      this._stepUp((t || 1) * this.options.page)
  }),
  pageDown: o(function(t) {
      this._stepDown((t || 1) * this.options.page)
  }),
  value: function(t) {
      return arguments.length ? void o(this._value).call(this, t) : this._parse(this.element.val())
  },
  widget: function() {
      return this.uiSpinner
  }
}), !1 !== t.uiBackCompat && t.widget("ui.spinner", t.ui.spinner, {
  _enhance: function() {
      this.uiSpinner = this.element.attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml())
  },
  _uiSpinnerHtml: function() {
      return "<span>"
  },
  _buttonHtml: function() {
      return "<a></a><a></a>"
  }
}), t.ui.spinner, t.widget("ui.tabs", {
  version: "1.12.1",
  delay: 300,
  options: {
      active: null,
      classes: {
          "ui-tabs": "ui-corner-all",
          "ui-tabs-nav": "ui-corner-all",
          "ui-tabs-panel": "ui-corner-bottom",
          "ui-tabs-tab": "ui-corner-top"
      },
      collapsible: !1,
      event: "click",
      heightStyle: "content",
      hide: null,
      show: null,
      activate: null,
      beforeActivate: null,
      beforeLoad: null,
      load: null
  },
  _isLocal: function() {
      var t = /#.*$/;
      return function(e) {
          var i, n;
          i = e.href.replace(t, ""), n = location.href.replace(t, "");
          try {
              i = decodeURIComponent(i)
          } catch (t) {}
          try {
              n = decodeURIComponent(n)
          } catch (t) {}
          return e.hash.length > 1 && i === n
      }
  }(),
  _create: function() {
      var e = this,
          i = this.options;
      this.running = !1, this._addClass("ui-tabs", "ui-widget ui-widget-content"), this._toggleClass("ui-tabs-collapsible", null, i.collapsible), this._processTabs(), i.active = this._initialActive(), t.isArray(i.disabled) && (i.disabled = t.unique(i.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"), function(t) {
          return e.tabs.index(t)
      }))).sort()), this.active = !1 !== this.options.active && this.anchors.length ? this._findActive(i.active) : t(), this._refresh(), this.active.length && this.load(i.active)
  },
  _initialActive: function() {
      var e = this.options.active,
          i = this.options.collapsible,
          n = location.hash.substring(1);
      return null === e && (n && this.tabs.each(function(i, s) {
          return t(s).attr("aria-controls") === n ? (e = i, !1) : void 0
      }), null === e && (e = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === e || -1 === e) && (e = !!this.tabs.length && 0)), !1 !== e && (-1 === (e = this.tabs.index(this.tabs.eq(e))) && (e = !i && 0)), !i && !1 === e && this.anchors.length && (e = 0), e
  },
  _getCreateEventData: function() {
      return {
          tab: this.active,
          panel: this.active.length ? this._getPanelForTab(this.active) : t()
      }
  },
  _tabKeydown: function(e) {
      var i = t(t.ui.safeActiveElement(this.document[0])).closest("li"),
          n = this.tabs.index(i),
          s = !0;
      if (!this._handlePageNav(e)) {
          switch (e.keyCode) {
              case t.ui.keyCode.RIGHT:
              case t.ui.keyCode.DOWN:
                  n++;
                  break;
              case t.ui.keyCode.UP:
              case t.ui.keyCode.LEFT:
                  s = !1, n--;
                  break;
              case t.ui.keyCode.END:
                  n = this.anchors.length - 1;
                  break;
              case t.ui.keyCode.HOME:
                  n = 0;
                  break;
              case t.ui.keyCode.SPACE:
                  return e.preventDefault(), clearTimeout(this.activating), void this._activate(n);
              case t.ui.keyCode.ENTER:
                  return e.preventDefault(), clearTimeout(this.activating), void this._activate(n !== this.options.active && n);
              default:
                  return
          }
          e.preventDefault(), clearTimeout(this.activating), n = this._focusNextTab(n, s), e.ctrlKey || e.metaKey || (i.attr("aria-selected", "false"), this.tabs.eq(n).attr("aria-selected", "true"), this.activating = this._delay(function() {
              this.option("active", n)
          }, this.delay))
      }
  },
  _panelKeydown: function(e) {
      this._handlePageNav(e) || e.ctrlKey && e.keyCode === t.ui.keyCode.UP && (e.preventDefault(), this.active.trigger("focus"))
  },
  _handlePageNav: function(e) {
      return e.altKey && e.keyCode === t.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : e.altKey && e.keyCode === t.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : void 0
  },
  _findNextTab: function(e, i) {
      for (var n = this.tabs.length - 1; - 1 !== t.inArray((e > n && (e = 0), 0 > e && (e = n), e), this.options.disabled);) e = i ? e + 1 : e - 1;
      return e
  },
  _focusNextTab: function(t, e) {
      return t = this._findNextTab(t, e), this.tabs.eq(t).trigger("focus"), t
  },
  _setOption: function(t, e) {
      return "active" === t ? void this._activate(e) : (this._super(t, e), "collapsible" === t && (this._toggleClass("ui-tabs-collapsible", null, e), e || !1 !== this.options.active || this._activate(0)), "event" === t && this._setupEvents(e), void("heightStyle" === t && this._setupHeightStyle(e)))
  },
  _sanitizeSelector: function(t) {
      return t ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
  },
  refresh: function() {
      var e = this.options,
          i = this.tablist.children(":has(a[href])");
      e.disabled = t.map(i.filter(".ui-state-disabled"), function(t) {
          return i.index(t)
      }), this._processTabs(), !1 !== e.active && this.anchors.length ? this.active.length && !t.contains(this.tablist[0], this.active[0]) ? this.tabs.length === e.disabled.length ? (e.active = !1, this.active = t()) : this._activate(this._findNextTab(Math.max(0, e.active - 1), !1)) : e.active = this.tabs.index(this.active) : (e.active = !1, this.active = t()), this._refresh()
  },
  _refresh: function() {
      this._setOptionDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({
          "aria-selected": "false",
          "aria-expanded": "false",
          tabIndex: -1
      }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({
          "aria-hidden": "true"
      }), this.active.length ? (this.active.attr({
          "aria-selected": "true",
          "aria-expanded": "true",
          tabIndex: 0
      }), this._addClass(this.active, "ui-tabs-active", "ui-state-active"), this._getPanelForTab(this.active).show().attr({
          "aria-hidden": "false"
      })) : this.tabs.eq(0).attr("tabIndex", 0)
  },
  _processTabs: function() {
      var e = this,
          i = this.tabs,
          n = this.anchors,
          s = this.panels;
      this.tablist = this._getList().attr("role", "tablist"), this._addClass(this.tablist, "ui-tabs-nav", "ui-helper-reset ui-helper-clearfix ui-widget-header"), this.tablist.on("mousedown" + this.eventNamespace, "> li", function(e) {
          t(this).is(".ui-state-disabled") && e.preventDefault()
      }).on("focus" + this.eventNamespace, ".ui-tabs-anchor", function() {
          t(this).closest("li").is(".ui-state-disabled") && this.blur()
      }), this.tabs = this.tablist.find("> li:has(a[href])").attr({
          role: "tab",
          tabIndex: -1
      }), this._addClass(this.tabs, "ui-tabs-tab", "ui-state-default"), this.anchors = this.tabs.map(function() {
          return t("a", this)[0]
      }).attr({
          role: "presentation",
          tabIndex: -1
      }), this._addClass(this.anchors, "ui-tabs-anchor"), this.panels = t(), this.anchors.each(function(i, n) {
          var s, o, a, r = t(n).uniqueId().attr("id"),
              l = t(n).closest("li"),
              c = l.attr("aria-controls");
          e._isLocal(n) ? (a = (s = n.hash).substring(1), o = e.element.find(e._sanitizeSelector(s))) : (s = "#" + (a = l.attr("aria-controls") || t({}).uniqueId()[0].id), (o = e.element.find(s)).length || (o = e._createPanel(a)).insertAfter(e.panels[i - 1] || e.tablist), o.attr("aria-live", "polite")), o.length && (e.panels = e.panels.add(o)), c && l.data("ui-tabs-aria-controls", c), l.attr({
              "aria-controls": a,
              "aria-labelledby": r
          }), o.attr("aria-labelledby", r)
      }), this.panels.attr("role", "tabpanel"), this._addClass(this.panels, "ui-tabs-panel", "ui-widget-content"), i && (this._off(i.not(this.tabs)), this._off(n.not(this.anchors)), this._off(s.not(this.panels)))
  },
  _getList: function() {
      return this.tablist || this.element.find("ol, ul").eq(0)
  },
  _createPanel: function(e) {
      return t("<div>").attr("id", e).data("ui-tabs-destroy", !0)
  },
  _setOptionDisabled: function(e) {
      var i, n, s;
      for (t.isArray(e) && (e.length ? e.length === this.anchors.length && (e = !0) : e = !1), s = 0; n = this.tabs[s]; s++) i = t(n), !0 === e || -1 !== t.inArray(s, e) ? (i.attr("aria-disabled", "true"), this._addClass(i, null, "ui-state-disabled")) : (i.removeAttr("aria-disabled"), this._removeClass(i, null, "ui-state-disabled"));
      this.options.disabled = e, this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !0 === e)
  },
  _setupEvents: function(e) {
      var i = {};
      e && t.each(e.split(" "), function(t, e) {
          i[e] = "_eventHandler"
      }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(!0, this.anchors, {
          click: function(t) {
              t.preventDefault()
          }
      }), this._on(this.anchors, i), this._on(this.tabs, {
          keydown: "_tabKeydown"
      }), this._on(this.panels, {
          keydown: "_panelKeydown"
      }), this._focusable(this.tabs), this._hoverable(this.tabs)
  },
  _setupHeightStyle: function(e) {
      var i, n = this.element.parent();
      "fill" === e ? (i = n.height(), i -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function() {
          var e = t(this),
              n = e.css("position");
          "absolute" !== n && "fixed" !== n && (i -= e.outerHeight(!0))
      }), this.element.children().not(this.panels).each(function() {
          i -= t(this).outerHeight(!0)
      }), this.panels.each(function() {
          t(this).height(Math.max(0, i - t(this).innerHeight() + t(this).height()))
      }).css("overflow", "auto")) : "auto" === e && (i = 0, this.panels.each(function() {
          i = Math.max(i, t(this).height("").height())
      }).height(i))
  },
  _eventHandler: function(e) {
      var i = this.options,
          n = this.active,
          s = t(e.currentTarget).closest("li"),
          o = s[0] === n[0],
          a = o && i.collapsible,
          r = a ? t() : this._getPanelForTab(s),
          l = n.length ? this._getPanelForTab(n) : t(),
          c = {
              oldTab: n,
              oldPanel: l,
              newTab: a ? t() : s,
              newPanel: r
          };
      e.preventDefault(), s.hasClass("ui-state-disabled") || s.hasClass("ui-tabs-loading") || this.running || o && !i.collapsible || !1 === this._trigger("beforeActivate", e, c) || (i.active = !a && this.tabs.index(s), this.active = o ? t() : s, this.xhr && this.xhr.abort(), l.length || r.length || t.error("jQuery UI Tabs: Mismatching fragment identifier."), r.length && this.load(this.tabs.index(s), e), this._toggle(e, c))
  },
  _toggle: function(e, i) {
      function n() {
          o.running = !1, o._trigger("activate", e, i)
      }

      function s() {
          o._addClass(i.newTab.closest("li"), "ui-tabs-active", "ui-state-active"), a.length && o.options.show ? o._show(a, o.options.show, n) : (a.show(), n())
      }
      var o = this,
          a = i.newPanel,
          r = i.oldPanel;
      this.running = !0, r.length && this.options.hide ? this._hide(r, this.options.hide, function() {
          o._removeClass(i.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), s()
      }) : (this._removeClass(i.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), r.hide(), s()), r.attr("aria-hidden", "true"), i.oldTab.attr({
          "aria-selected": "false",
          "aria-expanded": "false"
      }), a.length && r.length ? i.oldTab.attr("tabIndex", -1) : a.length && this.tabs.filter(function() {
          return 0 === t(this).attr("tabIndex")
      }).attr("tabIndex", -1), a.attr("aria-hidden", "false"), i.newTab.attr({
          "aria-selected": "true",
          "aria-expanded": "true",
          tabIndex: 0
      })
  },
  _activate: function(e) {
      var i, n = this._findActive(e);
      n[0] !== this.active[0] && (n.length || (n = this.active), i = n.find(".ui-tabs-anchor")[0], this._eventHandler({
          target: i,
          currentTarget: i,
          preventDefault: t.noop
      }))
  },
  _findActive: function(e) {
      return !1 === e ? t() : this.tabs.eq(e)
  },
  _getIndex: function(e) {
      return "string" == typeof e && (e = this.anchors.index(this.anchors.filter("[href$='" + t.ui.escapeSelector(e) + "']"))), e
  },
  _destroy: function() {
      this.xhr && this.xhr.abort(), this.tablist.removeAttr("role").off(this.eventNamespace), this.anchors.removeAttr("role tabIndex").removeUniqueId(), this.tabs.add(this.panels).each(function() {
          t.data(this, "ui-tabs-destroy") ? t(this).remove() : t(this).removeAttr("role tabIndex aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded")
      }), this.tabs.each(function() {
          var e = t(this),
              i = e.data("ui-tabs-aria-controls");
          i ? e.attr("aria-controls", i).removeData("ui-tabs-aria-controls") : e.removeAttr("aria-controls")
      }), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "")
  },
  enable: function(e) {
      var i = this.options.disabled;
      !1 !== i && (void 0 === e ? i = !1 : (e = this._getIndex(e), i = t.isArray(i) ? t.map(i, function(t) {
          return t !== e ? t : null
      }) : t.map(this.tabs, function(t, i) {
          return i !== e ? i : null
      })), this._setOptionDisabled(i))
  },
  disable: function(e) {
      var i = this.options.disabled;
      if (!0 !== i) {
          if (void 0 === e) i = !0;
          else {
              if (e = this._getIndex(e), -1 !== t.inArray(e, i)) return;
              i = t.isArray(i) ? t.merge([e], i).sort() : [e]
          }
          this._setOptionDisabled(i)
      }
  },
  load: function(e, i) {
      e = this._getIndex(e);
      var n = this,
          s = this.tabs.eq(e),
          o = s.find(".ui-tabs-anchor"),
          a = this._getPanelForTab(s),
          r = {
              tab: s,
              panel: a
          },
          l = function(t, e) {
              "abort" === e && n.panels.stop(!1, !0), n._removeClass(s, "ui-tabs-loading"), a.removeAttr("aria-busy"), t === n.xhr && delete n.xhr
          };
      this._isLocal(o[0]) || (this.xhr = t.ajax(this._ajaxSettings(o, i, r)), this.xhr && "canceled" !== this.xhr.statusText && (this._addClass(s, "ui-tabs-loading"), a.attr("aria-busy", "true"), this.xhr.done(function(t, e, s) {
          setTimeout(function() {
              a.html(t), n._trigger("load", i, r), l(s, e)
          }, 1)
      }).fail(function(t, e) {
          setTimeout(function() {
              l(t, e)
          }, 1)
      })))
  },
  _ajaxSettings: function(e, i, n) {
      var s = this;
      return {
          url: e.attr("href").replace(/#.*$/, ""),
          beforeSend: function(e, o) {
              return s._trigger("beforeLoad", i, t.extend({
                  jqXHR: e,
                  ajaxSettings: o
              }, n))
          }
      }
  },
  _getPanelForTab: function(e) {
      var i = t(e).attr("aria-controls");
      return this.element.find(this._sanitizeSelector("#" + i))
  }
}), !1 !== t.uiBackCompat && t.widget("ui.tabs", t.ui.tabs, {
  _processTabs: function() {
      this._superApply(arguments), this._addClass(this.tabs, "ui-tab")
  }
}), t.ui.tabs, t.widget("ui.tooltip", {
  version: "1.12.1",
  options: {
      classes: {
          "ui-tooltip": "ui-corner-all ui-widget-shadow"
      },
      content: function() {
          var e = t(this).attr("title") || "";
          return t("<a>").text(e).html()
      },
      hide: !0,
      items: "[title]:not([disabled])",
      position: {
          my: "left top+15",
          at: "left bottom",
          collision: "flipfit flip"
      },
      show: !0,
      track: !1,
      close: null,
      open: null
  },
  _addDescribedBy: function(e, i) {
      var n = (e.attr("aria-describedby") || "").split(/\s+/);
      n.push(i), e.data("ui-tooltip-id", i).attr("aria-describedby", t.trim(n.join(" ")))
  },
  _removeDescribedBy: function(e) {
      var i = e.data("ui-tooltip-id"),
          n = (e.attr("aria-describedby") || "").split(/\s+/),
          s = t.inArray(i, n); - 1 !== s && n.splice(s, 1), e.removeData("ui-tooltip-id"), (n = t.trim(n.join(" "))) ? e.attr("aria-describedby", n) : e.removeAttr("aria-describedby")
  },
  _create: function() {
      this._on({
          mouseover: "open",
          focusin: "open"
      }), this.tooltips = {}, this.parents = {}, this.liveRegion = t("<div>").attr({
          role: "log",
          "aria-live": "assertive",
          "aria-relevant": "additions"
      }).appendTo(this.document[0].body), this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"), this.disabledTitles = t([])
  },
  _setOption: function(e, i) {
      var n = this;
      this._super(e, i), "content" === e && t.each(this.tooltips, function(t, e) {
          n._updateContent(e.element)
      })
  },
  _setOptionDisabled: function(t) {
      this[t ? "_disable" : "_enable"]()
  },
  _disable: function() {
      var e = this;
      t.each(this.tooltips, function(i, n) {
          var s = t.Event("blur");
          s.target = s.currentTarget = n.element[0], e.close(s, !0)
      }), this.disabledTitles = this.disabledTitles.add(this.element.find(this.options.items).addBack().filter(function() {
          var e = t(this);
          return e.is("[title]") ? e.data("ui-tooltip-title", e.attr("title")).removeAttr("title") : void 0
      }))
  },
  _enable: function() {
      this.disabledTitles.each(function() {
          var e = t(this);
          e.data("ui-tooltip-title") && e.attr("title", e.data("ui-tooltip-title"))
      }), this.disabledTitles = t([])
  },
  open: function(e) {
      var i = this,
          n = t(e ? e.target : this.element).closest(this.options.items);
      n.length && !n.data("ui-tooltip-id") && (n.attr("title") && n.data("ui-tooltip-title", n.attr("title")), n.data("ui-tooltip-open", !0), e && "mouseover" === e.type && n.parents().each(function() {
          var e, n = t(this);
          n.data("ui-tooltip-open") && ((e = t.Event("blur")).target = e.currentTarget = this, i.close(e, !0)), n.attr("title") && (n.uniqueId(), i.parents[this.id] = {
              element: this,
              title: n.attr("title")
          }, n.attr("title", ""))
      }), this._registerCloseHandlers(e, n), this._updateContent(n, e))
  },
  _updateContent: function(t, e) {
      var i, n = this.options.content,
          s = this,
          o = e ? e.type : null;
      return "string" == typeof n || n.nodeType || n.jquery ? this._open(e, t, n) : void((i = n.call(t[0], function(i) {
          s._delay(function() {
              t.data("ui-tooltip-open") && (e && (e.type = o), this._open(e, t, i))
          })
      })) && this._open(e, t, i))
  },
  _open: function(e, i, n) {
      function s(t) {
          c.of = t, a.is(":hidden") || a.position(c)
      }
      var o, a, r, l, c = t.extend({}, this.options.position);
      if (n) {
          if (o = this._find(i)) return void o.tooltip.find(".ui-tooltip-content").html(n);
          i.is("[title]") && (e && "mouseover" === e.type ? i.attr("title", "") : i.removeAttr("title")), o = this._tooltip(i), a = o.tooltip, this._addDescribedBy(i, a.attr("id")), a.find(".ui-tooltip-content").html(n), this.liveRegion.children().hide(), (l = t("<div>").html(a.find(".ui-tooltip-content").html())).removeAttr("name").find("[name]").removeAttr("name"), l.removeAttr("id").find("[id]").removeAttr("id"), l.appendTo(this.liveRegion), this.options.track && e && /^mouse/.test(e.type) ? (this._on(this.document, {
              mousemove: s
          }), s(e)) : a.position(t.extend({
              of: i
          }, this.options.position)), a.hide(), this._show(a, this.options.show), this.options.track && this.options.show && this.options.show.delay && (r = this.delayedShow = setInterval(function() {
              a.is(":visible") && (s(c.of), clearInterval(r))
          }, t.fx.interval)), this._trigger("open", e, {
              tooltip: a
          })
      }
  },
  _registerCloseHandlers: function(e, i) {
      var n = {
          keyup: function(e) {
              if (e.keyCode === t.ui.keyCode.ESCAPE) {
                  var n = t.Event(e);
                  n.currentTarget = i[0], this.close(n, !0)
              }
          }
      };
      i[0] !== this.element[0] && (n.remove = function() {
          this._removeTooltip(this._find(i).tooltip)
      }), e && "mouseover" !== e.type || (n.mouseleave = "close"), e && "focusin" !== e.type || (n.focusout = "close"), this._on(!0, i, n)
  },
  close: function(e) {
      var i, n = this,
          s = t(e ? e.currentTarget : this.element),
          o = this._find(s);
      return o ? (i = o.tooltip, void(o.closing || (clearInterval(this.delayedShow), s.data("ui-tooltip-title") && !s.attr("title") && s.attr("title", s.data("ui-tooltip-title")), this._removeDescribedBy(s), o.hiding = !0, i.stop(!0), this._hide(i, this.options.hide, function() {
          n._removeTooltip(t(this))
      }), s.removeData("ui-tooltip-open"), this._off(s, "mouseleave focusout keyup"), s[0] !== this.element[0] && this._off(s, "remove"), this._off(this.document, "mousemove"), e && "mouseleave" === e.type && t.each(this.parents, function(e, i) {
          t(i.element).attr("title", i.title), delete n.parents[e]
      }), o.closing = !0, this._trigger("close", e, {
          tooltip: i
      }), o.hiding || (o.closing = !1)))) : void s.removeData("ui-tooltip-open")
  },
  _tooltip: function(e) {
      var i = t("<div>").attr("role", "tooltip"),
          n = t("<div>").appendTo(i),
          s = i.uniqueId().attr("id");
      return this._addClass(n, "ui-tooltip-content"), this._addClass(i, "ui-tooltip", "ui-widget ui-widget-content"), i.appendTo(this._appendTo(e)), this.tooltips[s] = {
          element: e,
          tooltip: i
      }
  },
  _find: function(t) {
      var e = t.data("ui-tooltip-id");
      return e ? this.tooltips[e] : null
  },
  _removeTooltip: function(t) {
      t.remove(), delete this.tooltips[t.attr("id")]
  },
  _appendTo: function(t) {
      var e = t.closest(".ui-front, dialog");
      return e.length || (e = this.document[0].body), e
  },
  _destroy: function() {
      var e = this;
      t.each(this.tooltips, function(i, n) {
          var s = t.Event("blur"),
              o = n.element;
          s.target = s.currentTarget = o[0], e.close(s, !0), t("#" + i).remove(), o.data("ui-tooltip-title") && (o.attr("title") || o.attr("title", o.data("ui-tooltip-title")), o.removeData("ui-tooltip-title"))
      }), this.liveRegion.remove()
  }
}), !1 !== t.uiBackCompat && t.widget("ui.tooltip", t.ui.tooltip, {
  options: {
      tooltipClass: null
  },
  _tooltip: function() {
      var t = this._superApply(arguments);
      return this.options.tooltipClass && t.tooltip.addClass(this.options.tooltipClass), t
  }
}), t.ui.tooltip
}), void 0 === jQuery.migrateMute && (jQuery.migrateMute = !0),
function(t, e, i) {
  function n(i) {
      var n = e.console;
      o[i] || (o[i] = !0, t.migrateWarnings.push(i), n && n.warn && !t.migrateMute && (n.warn("JQMIGRATE: " + i), t.migrateTrace && n.trace && n.trace()))
  }

  function s(e, s, o, a) {
      if (Object.defineProperty) try {
          return Object.defineProperty(e, s, {
              configurable: !0,
              enumerable: !0,
              get: function() {
                  return n(a), o
              },
              set: function(t) {
                  n(a), o = t
              }
          }), i
      } catch (t) {}
      t._definePropertyBroken = !0, e[s] = o
  }
  var o = {};
  t.migrateWarnings = [], !t.migrateMute && e.console && e.console.log && e.console.log("JQMIGRATE: Logging is active"), t.migrateTrace === i && (t.migrateTrace = !0), t.migrateReset = function() {
      o = {}, t.migrateWarnings.length = 0
  }, "BackCompat" === document.compatMode && n("jQuery is not compatible with Quirks Mode");
  var a = t("<input/>", {
          size: 1
      }).attr("size") && t.attrFn,
      r = t.attr,
      l = t.attrHooks.value && t.attrHooks.value.get || function() {
          return null
      },
      c = t.attrHooks.value && t.attrHooks.value.set || function() {
          return i
      },
      h = /^(?:input|button)$/i,
      u = /^[238]$/,
      d = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
      p = /^(?:checked|selected)$/i;
  s(t, "attrFn", a || {}, "jQuery.attrFn is deprecated"), t.attr = function(e, s, o, l) {
      var c = s.toLowerCase(),
          f = e && e.nodeType;
      return l && (4 > r.length && n("jQuery.fn.attr( props, pass ) is deprecated"), e && !u.test(f) && (a ? s in a : t.isFunction(t.fn[s]))) ? t(e)[s](o) : ("type" === s && o !== i && h.test(e.nodeName) && e.parentNode && n("Can't change the 'type' of an input or button in IE 6/7/8"), !t.attrHooks[c] && d.test(c) && (t.attrHooks[c] = {
          get: function(e, n) {
              var s, o = t.prop(e, n);
              return !0 === o || "boolean" != typeof o && (s = e.getAttributeNode(n)) && !1 !== s.nodeValue ? n.toLowerCase() : i
          },
          set: function(e, i, n) {
              var s;
              return !1 === i ? t.removeAttr(e, n) : ((s = t.propFix[n] || n) in e && (e[s] = !0), e.setAttribute(n, n.toLowerCase())), n
          }
      }, p.test(c) && n("jQuery.fn.attr('" + c + "') may use property instead of attribute")), r.call(t, e, s, o))
  }, t.attrHooks.value = {
      get: function(t, e) {
          var i = (t.nodeName || "").toLowerCase();
          return "button" === i ? l.apply(this, arguments) : ("input" !== i && "option" !== i && n("jQuery.fn.attr('value') no longer gets properties"), e in t ? t.value : null)
      },
      set: function(t, e) {
          var s = (t.nodeName || "").toLowerCase();
          return "button" === s ? c.apply(this, arguments) : ("input" !== s && "option" !== s && n("jQuery.fn.attr('value', val) no longer sets properties"), t.value = e, i)
      }
  };
  var f, m, g = t.fn.init,
      v = t.parseJSON,
      y = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
  t.fn.init = function(e, i, s) {
      var o;
      return e && "string" == typeof e && !t.isPlainObject(i) && (o = y.exec(t.trim(e))) && o[0] && ("<" !== e.charAt(0) && n("$(html) HTML strings must start with '<' character"), o[3] && n("$(html) HTML text after last tag is ignored"), "#" === o[0].charAt(0) && (n("HTML string cannot start with a '#' character"), t.error("JQMIGRATE: Invalid selector string (XSS)")), i && i.context && (i = i.context), t.parseHTML) ? g.call(this, t.parseHTML(o[2], i, !0), i, s) : g.apply(this, arguments)
  }, t.fn.init.prototype = t.fn, t.parseJSON = function(t) {
      return t || null === t ? v.apply(this, arguments) : (n("jQuery.parseJSON requires a valid JSON string"), null)
  }, t.uaMatch = function(t) {
      t = t.toLowerCase();
      var e = /(chrome)[ \/]([\w.]+)/.exec(t) || /(webkit)[ \/]([\w.]+)/.exec(t) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(t) || /(msie) ([\w.]+)/.exec(t) || 0 > t.indexOf("compatible") && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t) || [];
      return {
          browser: e[1] || "",
          version: e[2] || "0"
      }
  }, t.browser || (m = {}, (f = t.uaMatch(navigator.userAgent)).browser && (m[f.browser] = !0, m.version = f.version), m.chrome ? m.webkit = !0 : m.webkit && (m.safari = !0), t.browser = m), s(t, "browser", t.browser, "jQuery.browser is deprecated"), t.sub = function() {
      function e(t, i) {
          return new e.fn.init(t, i)
      }
      t.extend(!0, e, this), e.superclass = this, e.fn = e.prototype = this(), e.fn.constructor = e, e.sub = this.sub, e.fn.init = function(n, s) {
          return s && s instanceof t && !(s instanceof e) && (s = e(s)), t.fn.init.call(this, n, s, i)
      }, e.fn.init.prototype = e.fn;
      var i = e(document);
      return n("jQuery.sub() is deprecated"), e
  }, t.ajaxSetup({
      converters: {
          "text json": t.parseJSON
      }
  });
  var b = t.fn.data;
  t.fn.data = function(e) {
      var s, o, a = this[0];
      return !a || "events" !== e || 1 !== arguments.length || (s = t.data(a, e), o = t._data(a, e), s !== i && s !== o || o === i) ? b.apply(this, arguments) : (n("Use of jQuery.fn.data('events') is deprecated"), o)
  };
  var _ = /\/(java|ecma)script/i,
      w = t.fn.andSelf || t.fn.addBack;
  t.fn.andSelf = function() {
      return n("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"), w.apply(this, arguments)
  }, t.clean || (t.clean = function(e, s, o, a) {
      s = (s = !(s = s || document).nodeType && s[0] || s).ownerDocument || s, n("jQuery.clean() is deprecated");
      var r, l, c, h, u = [];
      if (t.merge(u, t.buildFragment(e, s).childNodes), o)
          for (c = function(t) {
                  return !t.type || _.test(t.type) ? a ? a.push(t.parentNode ? t.parentNode.removeChild(t) : t) : o.appendChild(t) : i
              }, r = 0; null != (l = u[r]); r++) t.nodeName(l, "script") && c(l) || (o.appendChild(l), l.getElementsByTagName !== i && (h = t.grep(t.merge([], l.getElementsByTagName("script")), c), u.splice.apply(u, [r + 1, 0].concat(h)), r += h.length));
      return u
  });
  var x = t.event.add,
      C = t.event.remove,
      k = t.event.trigger,
      S = t.fn.toggle,
      T = t.fn.live,
      D = t.fn.die,
      M = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",
      I = RegExp("\\b(?:" + M + ")\\b"),
      P = /(?:^|\s)hover(\.\S+|)\b/,
      $ = function(e) {
          return "string" != typeof e || t.event.special.hover ? e : (P.test(e) && n("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"), e && e.replace(P, "mouseenter$1 mouseleave$1"))
      };
  t.event.props && "attrChange" !== t.event.props[0] && t.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement"), t.event.dispatch && s(t.event, "handle", t.event.dispatch, "jQuery.event.handle is undocumented and deprecated"), t.event.add = function(t, e, i, s, o) {
      t !== document && I.test(e) && n("AJAX events should be attached to document: " + e), x.call(this, t, $(e || ""), i, s, o)
  }, t.event.remove = function(t, e, i, n, s) {
      C.call(this, t, $(e) || "", i, n, s)
  }, t.fn.error = function() {
      var t = Array.prototype.slice.call(arguments, 0);
      return n("jQuery.fn.error() is deprecated"), t.splice(0, 0, "error"), arguments.length ? this.bind.apply(this, t) : (this.triggerHandler.apply(this, t), this)
  }, t.fn.toggle = function(e, i) {
      if (!t.isFunction(e) || !t.isFunction(i)) return S.apply(this, arguments);
      n("jQuery.fn.toggle(handler, handler...) is deprecated");
      var s = arguments,
          o = e.guid || t.guid++,
          a = 0,
          r = function(i) {
              var n = (t._data(this, "lastToggle" + e.guid) || 0) % a;
              return t._data(this, "lastToggle" + e.guid, n + 1), i.preventDefault(), s[n].apply(this, arguments) || !1
          };
      for (r.guid = o; s.length > a;) s[a++].guid = o;
      return this.click(r)
  }, t.fn.live = function(e, i, s) {
      return n("jQuery.fn.live() is deprecated"), T ? T.apply(this, arguments) : (t(this.context).on(e, this.selector, i, s), this)
  }, t.fn.die = function(e, i) {
      return n("jQuery.fn.die() is deprecated"), D ? D.apply(this, arguments) : (t(this.context).off(e, this.selector || "**", i), this)
  }, t.event.trigger = function(t, e, i, s) {
      return i || I.test(t) || n("Global events are undocumented and deprecated"), k.call(this, t, e, i || document, s)
  }, t.each(M.split("|"), function(e, i) {
      t.event.special[i] = {
          setup: function() {
              var e = this;
              return e !== document && (t.event.add(document, i + "." + t.guid, function() {
                  t.event.trigger(i, null, e, !0)
              }), t._data(this, i, t.guid++)), !1
          },
          teardown: function() {
              return this !== document && t.event.remove(document, i + "." + t._data(this, i)), !1
          }
      }
  })
}(jQuery, window),
function(t) {
  t.extend(t.fn, {
      validate: function(e) {
          if (this.length) {
              var i = t.data(this[0], "validator");
              return i || (this.attr("novalidate", "novalidate"), i = new t.validator(e, this[0]), t.data(this[0], "validator", i), i.settings.onsubmit && (this.validateDelegate(":submit", "click", function(e) {
                  i.settings.submitHandler && (i.submitButton = e.target), t(e.target).hasClass("cancel") && (i.cancelSubmit = !0)
              }), this.submit(function(e) {
                  function n() {
                      var n;
                      return !i.settings.submitHandler || (i.submitButton && (n = t("<input type='hidden'/>").attr("name", i.submitButton.name).val(i.submitButton.value).appendTo(i.currentForm)), i.settings.submitHandler.call(i, i.currentForm, e), i.submitButton && n.remove(), !1)
                  }
                  return i.settings.debug && e.preventDefault(), i.cancelSubmit ? (i.cancelSubmit = !1, n()) : i.form() ? i.pendingRequest ? (i.formSubmitted = !0, !1) : n() : (i.focusInvalid(), !1)
              })), i)
          }
          e && e.debug && window.console && console.warn("nothing selected, can't validate, returning nothing")
      },
      valid: function() {
          if (t(this[0]).is("form")) return this.validate().form();
          var e = !0,
              i = t(this[0].form).validate();
          return this.each(function() {
              e &= i.element(this)
          }), e
      },
      removeAttrs: function(e) {
          var i = {},
              n = this;
          return t.each(e.split(/\s/), function(t, e) {
              i[e] = n.attr(e), n.removeAttr(e)
          }), i
      },
      rules: function(e, i) {
          var n = this[0];
          if (e) {
              var s = t.data(n.form, "validator").settings,
                  o = s.rules,
                  a = t.validator.staticRules(n);
              switch (e) {
                  case "add":
                      t.extend(a, t.validator.normalizeRule(i)), o[n.name] = a, i.messages && (s.messages[n.name] = t.extend(s.messages[n.name], i.messages));
                      break;
                  case "remove":
                      if (!i) return delete o[n.name], a;
                      var r = {};
                      return t.each(i.split(/\s/), function(t, e) {
                          r[e] = a[e], delete a[e]
                      }), r
              }
          }
          var l = t.validator.normalizeRules(t.extend({}, t.validator.metadataRules(n), t.validator.classRules(n), t.validator.attributeRules(n), t.validator.staticRules(n)), n);
          if (l.required) {
              var c = l.required;
              delete l.required, l = t.extend({
                  required: c
              }, l)
          }
          return l
      }
  }), t.extend(t.expr[":"], {
      blank: function(e) {
          return !t.trim("" + e.value)
      },
      filled: function(e) {
          return !!t.trim("" + e.value)
      },
      unchecked: function(t) {
          return !t.checked
      }
  }), t.validator = function(e, i) {
      this.settings = t.extend(!0, {}, t.validator.defaults, e), this.currentForm = i, this.init()
  }, t.validator.format = function(e, i) {
      return 1 === arguments.length ? function() {
          var i = t.makeArray(arguments);
          return i.unshift(e), t.validator.format.apply(this, i)
      } : (arguments.length > 2 && i.constructor !== Array && (i = t.makeArray(arguments).slice(1)), i.constructor !== Array && (i = [i]), t.each(i, function(t, i) {
          e = e.replace(new RegExp("\\{" + t + "\\}", "g"), i)
      }), e)
  }, t.extend(t.validator, {
      defaults: {
          messages: {},
          groups: {},
          rules: {},
          errorClass: "error",
          validClass: "valid",
          errorElement: "label",
          focusInvalid: !0,
          errorContainer: t([]),
          errorLabelContainer: t([]),
          onsubmit: !0,
          ignore: ":hidden",
          ignoreTitle: !1,
          onfocusin: function(t, e) {
              this.lastActive = t, this.settings.focusCleanup && !this.blockFocusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, t, this.settings.errorClass, this.settings.validClass), this.addWrapper(this.errorsFor(t)).hide())
          },
          onfocusout: function(t, e) {
              !this.checkable(t) && (t.name in this.submitted || !this.optional(t)) && this.element(t)
          },
          onkeyup: function(t, e) {
              9 === e.which && "" === this.elementValue(t) || (t.name in this.submitted || t === this.lastActive) && this.element(t)
          },
          onclick: function(t, e) {
              t.name in this.submitted ? this.element(t) : t.parentNode.name in this.submitted && this.element(t.parentNode)
          },
          highlight: function(e, i, n) {
              "radio" === e.type ? this.findByName(e.name).addClass(i).removeClass(n) : t(e).addClass(i).removeClass(n)
          },
          unhighlight: function(e, i, n) {
              "radio" === e.type ? this.findByName(e.name).removeClass(i).addClass(n) : t(e).removeClass(i).addClass(n)
          }
      },
      setDefaults: function(e) {
          t.extend(t.validator.defaults, e)
      },
      messages: {
          required: "This field is required.",
          remote: "Please fix this field.",
          email: "Please enter a valid email address.",
          url: "Please enter a valid URL.",
          date: "Please enter a valid date.",
          dateISO: "Please enter a valid date (ISO).",
          number: "Please enter a valid number.",
          digits: "Please enter only digits.",
          creditcard: "Please enter a valid credit card number.",
          equalTo: "Please enter the same value again.",
          maxlength: t.validator.format("Please enter no more than {0} characters."),
          minlength: t.validator.format("Please enter at least {0} characters."),
          rangelength: t.validator.format("Please enter a value between {0} and {1} characters long."),
          range: t.validator.format("Please enter a value between {0} and {1}."),
          max: t.validator.format("Please enter a value less than or equal to {0}."),
          min: t.validator.format("Please enter a value greater than or equal to {0}.")
      },
      autoCreateRanges: !1,
      prototype: {
          init: function() {
              function e(e) {
                  var i = t.data(this[0].form, "validator"),
                      n = "on" + e.type.replace(/^validate/, "");
                  i.settings[n] && i.settings[n].call(i, this[0], e)
              }
              this.labelContainer = t(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || t(this.currentForm), this.containers = t(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
              var i = this.groups = {};
              t.each(this.settings.groups, function(e, n) {
                  t.each(n.split(/\s/), function(t, n) {
                      i[n] = e
                  })
              });
              var n = this.settings.rules;
              t.each(n, function(e, i) {
                  n[e] = t.validator.normalizeRule(i)
              }), t(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ", "focusin focusout keyup", e).validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", e), this.settings.invalidHandler && t(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler)
          },
          form: function() {
              return this.checkForm(), t.extend(this.submitted, this.errorMap), this.invalid = t.extend({}, this.errorMap), this.valid() || t(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
          },
          checkForm: function() {
              this.prepareForm();
              for (var t = 0, e = this.currentElements = this.elements(); e[t]; t++) this.check(e[t]);
              return this.valid()
          },
          element: function(e) {
              e = this.validationTargetFor(this.clean(e)), this.lastElement = e, this.prepareElement(e), this.currentElements = t(e);
              var i = !1 !== this.check(e);
              return i ? delete this.invalid[e.name] : this.invalid[e.name] = !0, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), i
          },
          showErrors: function(e) {
              if (e) {
                  for (var i in t.extend(this.errorMap, e), this.errorList = [], e) this.errorList.push({
                      message: e[i],
                      element: this.findByName(i)[0]
                  });
                  this.successList = t.grep(this.successList, function(t) {
                      return !(t.name in e)
                  })
              }
              this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
          },
          resetForm: function() {
              t.fn.resetForm && t(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null, this.prepareForm(), this.hideErrors(), this.elements().removeClass(this.settings.errorClass).removeData("previousValue")
          },
          numberOfInvalids: function() {
              return this.objectLength(this.invalid)
          },
          objectLength: function(t) {
              var e = 0;
              for (var i in t) e++;
              return e
          },
          hideErrors: function() {
              this.addWrapper(this.toHide).hide()
          },
          valid: function() {
              return 0 === this.size()
          },
          size: function() {
              return this.errorList.length
          },
          focusInvalid: function() {
              if (this.settings.focusInvalid) try {
                  t(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
              } catch (t) {}
          },
          findLastActive: function() {
              var e = this.lastActive;
              return e && 1 === t.grep(this.errorList, function(t) {
                  return t.element.name === e.name
              }).length && e
          },
          elements: function() {
              var e = this,
                  i = {};
              return t(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function() {
                  return !this.name && e.settings.debug && window.console && console.error("%o has no name assigned", this), !(this.name in i || !e.objectLength(t(this).rules())) && (i[this.name] = !0, !0)
              })
          },
          clean: function(e) {
              return t(e)[0]
          },
          errors: function() {
              var e = this.settings.errorClass.replace(" ", ".");
              return t(this.settings.errorElement + "." + e, this.errorContext)
          },
          reset: function() {
              this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = t([]), this.toHide = t([]), this.currentElements = t([])
          },
          prepareForm: function() {
              this.reset(), this.toHide = this.errors().add(this.containers)
          },
          prepareElement: function(t) {
              this.reset(), this.toHide = this.errorsFor(t)
          },
          elementValue: function(e) {
              var i = t(e).attr("type"),
                  n = t(e).val();
              return "radio" === i || "checkbox" === i ? t('input[name="' + t(e).attr("name") + '"]:checked').val() : "string" == typeof n ? n.replace(/\r/g, "") : n
          },
          check: function(e) {
              e = this.validationTargetFor(this.clean(e));
              var i, n = t(e).rules(),
                  s = !1,
                  o = this.elementValue(e);
              for (var a in n) {
                  var r = {
                      method: a,
                      parameters: n[a]
                  };
                  try {
                      if ("dependency-mismatch" === (i = t.validator.methods[a].call(this, o, e, r.parameters))) {
                          s = !0;
                          continue
                      }
                      if (s = !1, "pending" === i) return void(this.toHide = this.toHide.not(this.errorsFor(e)));
                      if (!i) return this.formatAndAdd(e, r), !1
                  } catch (t) {
                      throw this.settings.debug && window.console && console.log("exception occured when checking element " + e.id + ", check the '" + r.method + "' method", t), t
                  }
              }
              if (!s) return this.objectLength(n) && this.successList.push(e), !0
          },
          customMetaMessage: function(e, i) {
              if (t.metadata) {
                  var n = this.settings.meta ? t(e).metadata()[this.settings.meta] : t(e).metadata();
                  return n && n.messages && n.messages[i]
              }
          },
          customDataMessage: function(e, i) {
              return t(e).data("msg-" + i.toLowerCase()) || e.attributes && t(e).attr("data-msg-" + i.toLowerCase())
          },
          customMessage: function(t, e) {
              var i = this.settings.messages[t];
              return i && (i.constructor === String ? i : i[e])
          },
          findDefined: function() {
              for (var t = 0; t < arguments.length; t++)
                  if (void 0 !== arguments[t]) return arguments[t]
          },
          defaultMessage: function(e, i) {
              return this.findDefined(this.customMessage(e.name, i), this.customDataMessage(e, i), this.customMetaMessage(e, i), !this.settings.ignoreTitle && e.title || void 0, t.validator.messages[i], "<strong>Warning: No message defined for " + e.name + "</strong>")
          },
          formatAndAdd: function(e, i) {
              var n = this.defaultMessage(e, i.method),
                  s = /\$?\{(\d+)\}/g;
              "function" == typeof n ? n = n.call(this, i.parameters, e) : s.test(n) && (n = t.validator.format(n.replace(s, "{$1}"), i.parameters)), this.errorList.push({
                  message: n,
                  element: e
              }), this.errorMap[e.name] = n, this.submitted[e.name] = n
          },
          addWrapper: function(t) {
              return this.settings.wrapper && (t = t.add(t.parent(this.settings.wrapper))), t
          },
          defaultShowErrors: function() {
              var t, e;
              for (t = 0; this.errorList[t]; t++) {
                  var i = this.errorList[t];
                  this.settings.highlight && this.settings.highlight.call(this, i.element, this.settings.errorClass, this.settings.validClass), this.showLabel(i.element, i.message)
              }
              if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
                  for (t = 0; this.successList[t]; t++) this.showLabel(this.successList[t]);
              if (this.settings.unhighlight)
                  for (t = 0, e = this.validElements(); e[t]; t++) this.settings.unhighlight.call(this, e[t], this.settings.errorClass, this.settings.validClass);
              this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
          },
          validElements: function() {
              return this.currentElements.not(this.invalidElements())
          },
          invalidElements: function() {
              return t(this.errorList).map(function() {
                  return this.element
              })
          },
          showLabel: function(e, i) {
              var n = this.errorsFor(e);
              n.length ? (n.removeClass(this.settings.validClass).addClass(this.settings.errorClass), n.attr("generated") && n.html(i)) : (n = t("<" + this.settings.errorElement + "/>").attr({
                  for: this.idOrName(e),
                  generated: !0
              }).addClass(this.settings.errorClass).html(i || ""), this.settings.wrapper && (n = n.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.append(n).length || (this.settings.errorPlacement ? this.settings.errorPlacement(n, t(e)) : n.insertAfter(e))), !i && this.settings.success && (n.text(""), "string" == typeof this.settings.success ? n.addClass(this.settings.success) : this.settings.success(n, e)), this.toShow = this.toShow.add(n)
          },
          errorsFor: function(e) {
              var i = this.idOrName(e);
              return this.errors().filter(function() {
                  return t(this).attr("for") === i
              })
          },
          idOrName: function(t) {
              return this.groups[t.name] || (this.checkable(t) ? t.name : t.id || t.name)
          },
          validationTargetFor: function(t) {
              return this.checkable(t) && (t = this.findByName(t.name).not(this.settings.ignore)[0]), t
          },
          checkable: function(t) {
              return /radio|checkbox/i.test(t.type)
          },
          findByName: function(e) {
              return t(this.currentForm).find('[name="' + e + '"]')
          },
          getLength: function(e, i) {
              switch (i.nodeName.toLowerCase()) {
                  case "select":
                      return t("option:selected", i).length;
                  case "input":
                      if (this.checkable(i)) return this.findByName(i.name).filter(":checked").length
              }
              return e.length
          },
          depend: function(t, e) {
              return !this.dependTypes[typeof t] || this.dependTypes[typeof t](t, e)
          },
          dependTypes: {
              boolean: function(t, e) {
                  return t
              },
              string: function(e, i) {
                  return !!t(e, i.form).length
              },
              function: function(t, e) {
                  return t(e)
              }
          },
          optional: function(e) {
              var i = this.elementValue(e);
              return !t.validator.methods.required.call(this, i, e) && "dependency-mismatch"
          },
          startRequest: function(t) {
              this.pending[t.name] || (this.pendingRequest++, this.pending[t.name] = !0)
          },
          stopRequest: function(e, i) {
              this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[e.name], i && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (t(this.currentForm).submit(), this.formSubmitted = !1) : !i && 0 === this.pendingRequest && this.formSubmitted && (t(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
          },
          previousValue: function(e) {
              return t.data(e, "previousValue") || t.data(e, "previousValue", {
                  old: null,
                  valid: !0,
                  message: this.defaultMessage(e, "remote")
              })
          }
      },
      classRuleSettings: {
          required: {
              required: !0
          },
          email: {
              email: !0
          },
          url: {
              url: !0
          },
          date: {
              date: !0
          },
          dateISO: {
              dateISO: !0
          },
          number: {
              number: !0
          },
          digits: {
              digits: !0
          },
          creditcard: {
              creditcard: !0
          }
      },
      addClassRules: function(e, i) {
          e.constructor === String ? this.classRuleSettings[e] = i : t.extend(this.classRuleSettings, e)
      },
      classRules: function(e) {
          var i = {},
              n = t(e).attr("class");
          return n && t.each(n.split(" "), function() {
              this in t.validator.classRuleSettings && t.extend(i, t.validator.classRuleSettings[this])
          }), i
      },
      attributeRules: function(e) {
          var i = {},
              n = t(e);
          for (var s in t.validator.methods) {
              var o;
              "required" === s ? ("" === (o = n.get(0).getAttribute(s)) && (o = !0), o = !!o) : o = n.attr(s), o ? i[s] = o : n[0].getAttribute("type") === s && (i[s] = !0)
          }
          return i.maxlength && /-1|2147483647|524288/.test(i.maxlength) && delete i.maxlength, i
      },
      metadataRules: function(e) {
          if (!t.metadata) return {};
          var i = t.data(e.form, "validator").settings.meta;
          return i ? t(e).metadata()[i] : t(e).metadata()
      },
      staticRules: function(e) {
          var i = {},
              n = t.data(e.form, "validator");
          return n.settings.rules && (i = t.validator.normalizeRule(n.settings.rules[e.name]) || {}), i
      },
      normalizeRules: function(e, i) {
          return t.each(e, function(n, s) {
              if (!1 !== s) {
                  if (s.param || s.depends) {
                      var o = !0;
                      switch (typeof s.depends) {
                          case "string":
                              o = !!t(s.depends, i.form).length;
                              break;
                          case "function":
                              o = s.depends.call(i, i)
                      }
                      o ? e[n] = void 0 === s.param || s.param : delete e[n]
                  }
              } else delete e[n]
          }), t.each(e, function(n, s) {
              e[n] = t.isFunction(s) ? s(i) : s
          }), t.each(["minlength", "maxlength", "min", "max"], function() {
              e[this] && (e[this] = Number(e[this]))
          }), t.each(["rangelength", "range"], function() {
              e[this] && (e[this] = [Number(e[this][0]), Number(e[this][1])])
          }), t.validator.autoCreateRanges && (e.min && e.max && (e.range = [e.min, e.max], delete e.min, delete e.max), e.minlength && e.maxlength && (e.rangelength = [e.minlength, e.maxlength], delete e.minlength, delete e.maxlength)), e.messages && delete e.messages, e
      },
      normalizeRule: function(e) {
          if ("string" == typeof e) {
              var i = {};
              t.each(e.split(/\s/), function() {
                  i[this] = !0
              }), e = i
          }
          return e
      },
      addMethod: function(e, i, n) {
          t.validator.methods[e] = i, t.validator.messages[e] = void 0 !== n ? n : t.validator.messages[e], i.length < 3 && t.validator.addClassRules(e, t.validator.normalizeRule(e))
      },
      methods: {
          required: function(e, i, n) {
              if (!this.depend(n, i)) return "dependency-mismatch";
              if ("select" === i.nodeName.toLowerCase()) {
                  var s = t(i).val();
                  return s && s.length > 0
              }
              return this.checkable(i) ? this.getLength(e, i) > 0 : t.trim(e).length > 0
          },
          remote: function(e, i, n) {
              if (this.optional(i)) return "dependency-mismatch";
              var s = this.previousValue(i);
              if (this.settings.messages[i.name] || (this.settings.messages[i.name] = {}), s.originalMessage = this.settings.messages[i.name].remote, this.settings.messages[i.name].remote = s.message, n = "string" == typeof n && {
                      url: n
                  } || n, this.pending[i.name]) return "pending";
              if (s.old === e) return s.valid;
              s.old = e;
              var o = this;
              this.startRequest(i);
              var a = {};
              return a[i.name] = e, t.ajax(t.extend(!0, {
                  url: n,
                  mode: "abort",
                  port: "validate" + i.name,
                  dataType: "json",
                  data: a,
                  success: function(n) {
                      o.settings.messages[i.name].remote = s.originalMessage;
                      var a = !0 === n || "true" === n;
                      if (a) {
                          var r = o.formSubmitted;
                          o.prepareElement(i), o.formSubmitted = r, o.successList.push(i), delete o.invalid[i.name], o.showErrors()
                      } else {
                          var l = {},
                              c = n || o.defaultMessage(i, "remote");
                          l[i.name] = s.message = t.isFunction(c) ? c(e) : c, o.invalid[i.name] = !0, o.showErrors(l)
                      }
                      s.valid = a, o.stopRequest(i, a)
                  }
              }, n)), "pending"
          },
          minlength: function(e, i, n) {
              var s = t.isArray(e) ? e.length : this.getLength(t.trim(e), i);
              return this.optional(i) || s >= n
          },
          maxlength: function(e, i, n) {
              var s = t.isArray(e) ? e.length : this.getLength(t.trim(e), i);
              return this.optional(i) || s <= n
          },
          rangelength: function(e, i, n) {
              var s = t.isArray(e) ? e.length : this.getLength(t.trim(e), i);
              return this.optional(i) || s >= n[0] && s <= n[1]
          },
          min: function(t, e, i) {
              return this.optional(e) || t >= i
          },
          max: function(t, e, i) {
              return this.optional(e) || t <= i
          },
          range: function(t, e, i) {
              return this.optional(e) || t >= i[0] && t <= i[1]
          },
          email: function(t, e) {
              return this.optional(e) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(t)
          },
          url: function(t, e) {
              return this.optional(e) || /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(t)
          },
          date: function(t, e) {
              return this.optional(e) || !/Invalid|NaN/.test(new Date(t))
          },
          dateISO: function(t, e) {
              return this.optional(e) || /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(t)
          },
          number: function(t, e) {
              return this.optional(e) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t)
          },
          digits: function(t, e) {
              return this.optional(e) || /^\d+$/.test(t)
          },
          creditcard: function(t, e) {
              if (this.optional(e)) return "dependency-mismatch";
              if (/[^0-9 \-]+/.test(t)) return !1;
              for (var i = 0, n = 0, s = !1, o = (t = t.replace(/\D/g, "")).length - 1; o >= 0; o--) {
                  var a = t.charAt(o);
                  n = parseInt(a, 10), s && (n *= 2) > 9 && (n -= 9), i += n, s = !s
              }
              return i % 10 == 0
          },
          equalTo: function(e, i, n) {
              var s = t(n);
              return this.settings.onfocusout && s.unbind(".validate-equalTo").bind("blur.validate-equalTo", function() {
                  t(i).valid()
              }), e === s.val()
          }
      }
  }), t.format = t.validator.format
}(jQuery),
function(t) {
  var e = {};
  if (t.ajaxPrefilter) t.ajaxPrefilter(function(t, i, n) {
      var s = t.port;
      "abort" === t.mode && (e[s] && e[s].abort(), e[s] = n)
  });
  else {
      var i = t.ajax;
      t.ajax = function(n) {
          var s = ("mode" in n ? n : t.ajaxSettings).mode,
              o = ("port" in n ? n : t.ajaxSettings).port;
          return "abort" === s ? (e[o] && e[o].abort(), e[o] = i.apply(this, arguments)) : i.apply(this, arguments)
      }
  }
}(jQuery),
function(t) {
  !jQuery.event.special.focusin && !jQuery.event.special.focusout && document.addEventListener && t.each({
      focus: "focusin",
      blur: "focusout"
  }, function(e, i) {
      function n(e) {
          return (e = t.event.fix(e)).type = i, t.event.handle.call(this, e)
      }
      t.event.special[i] = {
          setup: function() {
              this.addEventListener(e, n, !0)
          },
          teardown: function() {
              this.removeEventListener(e, n, !0)
          },
          handler: function(e) {
              var n = arguments;
              return n[0] = t.event.fix(e), n[0].type = i, t.event.handle.apply(this, n)
          }
      }
  }), t.extend(t.fn, {
      validateDelegate: function(e, i, n) {
          return this.bind(i, function(i) {
              var s = t(i.target);
              if (s.is(e)) return n.apply(s, arguments)
          })
      }
  })
}(jQuery),
function(t) {
  "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? module.exports = t : t(jQuery)
}(function(t) {
  function e(e) {
      var a = e || window.event,
          r = l.call(arguments, 1),
          c = 0,
          u = 0,
          d = 0,
          p = 0,
          f = 0,
          m = 0;
      if ((e = t.event.fix(a)).type = "mousewheel", "detail" in a && (d = -1 * a.detail), "wheelDelta" in a && (d = a.wheelDelta), "wheelDeltaY" in a && (d = a.wheelDeltaY), "wheelDeltaX" in a && (u = -1 * a.wheelDeltaX), "axis" in a && a.axis === a.HORIZONTAL_AXIS && (u = -1 * d, d = 0), c = 0 === d ? u : d, "deltaY" in a && (c = d = -1 * a.deltaY), "deltaX" in a && (u = a.deltaX, 0 === d && (c = -1 * u)), 0 !== d || 0 !== u) {
          if (1 === a.deltaMode) {
              var g = t.data(this, "mousewheel-line-height");
              c *= g, d *= g, u *= g
          } else if (2 === a.deltaMode) {
              var v = t.data(this, "mousewheel-page-height");
              c *= v, d *= v, u *= v
          }
          if (p = Math.max(Math.abs(d), Math.abs(u)), (!o || o > p) && (o = p, n(a, p) && (o /= 40)), n(a, p) && (c /= 40, u /= 40, d /= 40), c = Math[c >= 1 ? "floor" : "ceil"](c / o), u = Math[u >= 1 ? "floor" : "ceil"](u / o), d = Math[d >= 1 ? "floor" : "ceil"](d / o), h.settings.normalizeOffset && this.getBoundingClientRect) {
              var y = this.getBoundingClientRect();
              f = e.clientX - y.left, m = e.clientY - y.top
          }
          return e.deltaX = u, e.deltaY = d, e.deltaFactor = o, e.offsetX = f, e.offsetY = m, e.deltaMode = 0, r.unshift(e, c, u, d), s && clearTimeout(s), s = setTimeout(i, 200), (t.event.dispatch || t.event.handle).apply(this, r)
      }
  }

  function i() {
      o = null
  }

  function n(t, e) {
      return h.settings.adjustOldDeltas && "mousewheel" === t.type && e % 120 == 0
  }
  var s, o, a = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
      r = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
      l = Array.prototype.slice;
  if (t.event.fixHooks)
      for (var c = a.length; c;) t.event.fixHooks[a[--c]] = t.event.mouseHooks;
  var h = t.event.special.mousewheel = {
      version: "3.1.12",
      setup: function() {
          if (this.addEventListener)
              for (var i = r.length; i;) this.addEventListener(r[--i], e, !1);
          else this.onmousewheel = e;
          t.data(this, "mousewheel-line-height", h.getLineHeight(this)), t.data(this, "mousewheel-page-height", h.getPageHeight(this))
      },
      teardown: function() {
          if (this.removeEventListener)
              for (var i = r.length; i;) this.removeEventListener(r[--i], e, !1);
          else this.onmousewheel = null;
          t.removeData(this, "mousewheel-line-height"), t.removeData(this, "mousewheel-page-height")
      },
      getLineHeight: function(e) {
          var i = t(e),
              n = i["offsetParent" in t.fn ? "offsetParent" : "parent"]();
          return n.length || (n = t("body")), parseInt(n.css("fontSize"), 10) || parseInt(i.css("fontSize"), 10) || 16
      },
      getPageHeight: function(e) {
          return t(e).height()
      },
      settings: {
          adjustOldDeltas: !0,
          normalizeOffset: !0
      }
  };
  t.fn.extend({
      mousewheel: function(t) {
          return t ? this.bind("mousewheel", t) : this.trigger("mousewheel")
      },
      unmousewheel: function(t) {
          return this.unbind("mousewheel", t)
      }
  })
}),
function(t) {
  "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? module.exports = t : t(jQuery)
}(function(t) {
  function e(e) {
      var a = e || window.event,
          r = l.call(arguments, 1),
          c = 0,
          u = 0,
          d = 0,
          p = 0,
          f = 0,
          m = 0;
      if ((e = t.event.fix(a)).type = "mousewheel", "detail" in a && (d = -1 * a.detail), "wheelDelta" in a && (d = a.wheelDelta), "wheelDeltaY" in a && (d = a.wheelDeltaY), "wheelDeltaX" in a && (u = -1 * a.wheelDeltaX), "axis" in a && a.axis === a.HORIZONTAL_AXIS && (u = -1 * d, d = 0), c = 0 === d ? u : d, "deltaY" in a && (c = d = -1 * a.deltaY), "deltaX" in a && (u = a.deltaX, 0 === d && (c = -1 * u)), 0 !== d || 0 !== u) {
          if (1 === a.deltaMode) {
              var g = t.data(this, "mousewheel-line-height");
              c *= g, d *= g, u *= g
          } else if (2 === a.deltaMode) {
              var v = t.data(this, "mousewheel-page-height");
              c *= v, d *= v, u *= v
          }
          if (p = Math.max(Math.abs(d), Math.abs(u)), (!o || o > p) && (o = p, n(a, p) && (o /= 40)), n(a, p) && (c /= 40, u /= 40, d /= 40), c = Math[c >= 1 ? "floor" : "ceil"](c / o), u = Math[u >= 1 ? "floor" : "ceil"](u / o), d = Math[d >= 1 ? "floor" : "ceil"](d / o), h.settings.normalizeOffset && this.getBoundingClientRect) {
              var y = this.getBoundingClientRect();
              f = e.clientX - y.left, m = e.clientY - y.top
          }
          return e.deltaX = u, e.deltaY = d, e.deltaFactor = o, e.offsetX = f, e.offsetY = m, e.deltaMode = 0, r.unshift(e, c, u, d), s && clearTimeout(s), s = setTimeout(i, 200), (t.event.dispatch || t.event.handle).apply(this, r)
      }
  }

  function i() {
      o = null
  }

  function n(t, e) {
      return h.settings.adjustOldDeltas && "mousewheel" === t.type && e % 120 == 0
  }
  var s, o, a = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
      r = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
      l = Array.prototype.slice;
  if (t.event.fixHooks)
      for (var c = a.length; c;) t.event.fixHooks[a[--c]] = t.event.mouseHooks;
  var h = t.event.special.mousewheel = {
      version: "3.1.12",
      setup: function() {
          if (this.addEventListener)
              for (var i = r.length; i;) this.addEventListener(r[--i], e, !1);
          else this.onmousewheel = e;
          t.data(this, "mousewheel-line-height", h.getLineHeight(this)), t.data(this, "mousewheel-page-height", h.getPageHeight(this))
      },
      teardown: function() {
          if (this.removeEventListener)
              for (var i = r.length; i;) this.removeEventListener(r[--i], e, !1);
          else this.onmousewheel = null;
          t.removeData(this, "mousewheel-line-height"), t.removeData(this, "mousewheel-page-height")
      },
      getLineHeight: function(e) {
          var i = t(e),
              n = i["offsetParent" in t.fn ? "offsetParent" : "parent"]();
          return n.length || (n = t("body")), parseInt(n.css("fontSize"), 10) || parseInt(i.css("fontSize"), 10) || 16
      },
      getPageHeight: function(e) {
          return t(e).height()
      },
      settings: {
          adjustOldDeltas: !0,
          normalizeOffset: !0
      }
  };
  t.fn.extend({
      mousewheel: function(t) {
          return t ? this.bind("mousewheel", t) : this.trigger("mousewheel")
      },
      unmousewheel: function(t) {
          return this.unbind("mousewheel", t)
      }
  })
}),
function(t) {
  "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof module && module.exports ? module.exports = t : t(jQuery, window, document)
}(function(t) {
  var e, i, n;
  e = "function" == typeof define && define.amd, i = "undefined" != typeof module && module.exports, n = "https:" == document.location.protocol ? "https:" : "http:", e || (i ? require("jquery-mousewheel")(t) : t.event.special.mousewheel || t("head").append(decodeURI("%3Cscript src=" + n + "//cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js%3E%3C/script%3E"))),
      function() {
          var e, i = "mCustomScrollbar",
              n = "mCS",
              s = ".mCustomScrollbar",
              o = {
                  setTop: 0,
                  setLeft: 0,
                  axis: "y",
                  scrollbarPosition: "inside",
                  scrollInertia: 950,
                  autoDraggerLength: !0,
                  alwaysShowScrollbar: 0,
                  snapOffset: 0,
                  mouseWheel: {
                      enable: !0,
                      scrollAmount: "auto",
                      axis: "y",
                      deltaFactor: "auto",
                      disableOver: ["select", "option", "keygen", "datalist", "textarea"]
                  },
                  scrollButtons: {
                      scrollType: "stepless",
                      scrollAmount: "auto"
                  },
                  keyboard: {
                      enable: !0,
                      scrollType: "stepless",
                      scrollAmount: "auto"
                  },
                  contentTouchScroll: 25,
                  documentTouchScroll: !0,
                  advanced: {
                      autoScrollOnFocus: "input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",
                      updateOnContentResize: !0,
                      updateOnImageLoad: "auto",
                      autoUpdateTimeout: 60
                  },
                  theme: "light",
                  callbacks: {
                      onTotalScrollOffset: 0,
                      onTotalScrollBackOffset: 0,
                      alwaysTriggerOffsets: !0
                  }
              },
              a = 0,
              r = {},
              l = window.attachEvent && !window.addEventListener ? 1 : 0,
              c = !1,
              h = ["mCSB_dragger_onDrag", "mCSB_scrollTools_onDrag", "mCS_img_loaded", "mCS_disabled", "mCS_destroyed", "mCS_no_scrollbar", "mCS-autoHide", "mCS-dir-rtl", "mCS_no_scrollbar_y", "mCS_no_scrollbar_x", "mCS_y_hidden", "mCS_x_hidden", "mCSB_draggerContainer", "mCSB_buttonUp", "mCSB_buttonDown", "mCSB_buttonLeft", "mCSB_buttonRight"],
              u = {
                  init: function(e) {
                      var e = t.extend(!0, {}, o, e),
                          i = d.call(this);
                      if (e.live) {
                          var l = e.liveSelector || this.selector || s,
                              c = t(l);
                          if ("off" === e.live) return void f(l);
                          r[l] = setTimeout(function() {
                              c.mCustomScrollbar(e), "once" === e.live && c.length && f(l)
                          }, 500)
                      } else f(l);
                      return e.setWidth = e.set_width ? e.set_width : e.setWidth, e.setHeight = e.set_height ? e.set_height : e.setHeight, e.axis = e.horizontalScroll ? "x" : m(e.axis), e.scrollInertia = e.scrollInertia > 0 && e.scrollInertia < 17 ? 17 : e.scrollInertia, "object" != typeof e.mouseWheel && 1 == e.mouseWheel && (e.mouseWheel = {
                          enable: !0,
                          scrollAmount: "auto",
                          axis: "y",
                          preventDefault: !1,
                          deltaFactor: "auto",
                          normalizeDelta: !1,
                          invert: !1
                      }), e.mouseWheel.scrollAmount = e.mouseWheelPixels ? e.mouseWheelPixels : e.mouseWheel.scrollAmount, e.mouseWheel.normalizeDelta = e.advanced.normalizeMouseWheelDelta ? e.advanced.normalizeMouseWheelDelta : e.mouseWheel.normalizeDelta, e.scrollButtons.scrollType = g(e.scrollButtons.scrollType), p(e), t(i).each(function() {
                          var i = t(this);
                          if (!i.data(n)) {
                              i.data(n, {
                                  idx: ++a,
                                  opt: e,
                                  scrollRatio: {
                                      y: null,
                                      x: null
                                  },
                                  overflowed: null,
                                  contentReset: {
                                      y: null,
                                      x: null
                                  },
                                  bindEvents: !1,
                                  tweenRunning: !1,
                                  sequential: {},
                                  langDir: i.css("direction"),
                                  cbOffsets: null,
                                  trigger: null,
                                  poll: {
                                      size: {
                                          o: 0,
                                          n: 0
                                      },
                                      img: {
                                          o: 0,
                                          n: 0
                                      },
                                      change: {
                                          o: 0,
                                          n: 0
                                      }
                                  }
                              });
                              var s = i.data(n),
                                  o = s.opt,
                                  r = i.data("mcs-axis"),
                                  l = i.data("mcs-scrollbar-position"),
                                  c = i.data("mcs-theme");
                              r && (o.axis = r), l && (o.scrollbarPosition = l), c && (o.theme = c, p(o)), v.call(this), s && o.callbacks.onCreate && "function" == typeof o.callbacks.onCreate && o.callbacks.onCreate.call(this), t("#mCSB_" + s.idx + "_container img:not(." + h[2] + ")").addClass(h[2]), u.update.call(null, i)
                          }
                      })
                  },
                  update: function(e, i) {
                      var s = e || d.call(this);
                      return t(s).each(function() {
                          var e = t(this);
                          if (e.data(n)) {
                              var s = e.data(n),
                                  o = s.opt,
                                  a = t("#mCSB_" + s.idx + "_container"),
                                  r = t("#mCSB_" + s.idx),
                                  l = [t("#mCSB_" + s.idx + "_dragger_vertical"), t("#mCSB_" + s.idx + "_dragger_horizontal")];
                              if (!a.length) return;
                              s.tweenRunning && V(e), i && s && o.callbacks.onBeforeUpdate && "function" == typeof o.callbacks.onBeforeUpdate && o.callbacks.onBeforeUpdate.call(this), e.hasClass(h[3]) && e.removeClass(h[3]), e.hasClass(h[4]) && e.removeClass(h[4]), r.css("max-height", "none"), r.height() !== e.height() && r.css("max-height", e.height()), b.call(this), "y" === o.axis || o.advanced.autoExpandHorizontalScroll || a.css("width", y(a)), s.overflowed = k.call(this), M.call(this), o.autoDraggerLength && w.call(this), x.call(this), T.call(this);
                              var c = [Math.abs(a[0].offsetTop), Math.abs(a[0].offsetLeft)];
                              "x" !== o.axis && (s.overflowed[0] ? l[0].height() > l[0].parent().height() ? S.call(this) : (X(e, c[0].toString(), {
                                  dir: "y",
                                  dur: 0,
                                  overwrite: "none"
                              }), s.contentReset.y = null) : (S.call(this), "y" === o.axis ? D.call(this) : "yx" === o.axis && s.overflowed[1] && X(e, c[1].toString(), {
                                  dir: "x",
                                  dur: 0,
                                  overwrite: "none"
                              }))), "y" !== o.axis && (s.overflowed[1] ? l[1].width() > l[1].parent().width() ? S.call(this) : (X(e, c[1].toString(), {
                                  dir: "x",
                                  dur: 0,
                                  overwrite: "none"
                              }), s.contentReset.x = null) : (S.call(this), "x" === o.axis ? D.call(this) : "yx" === o.axis && s.overflowed[0] && X(e, c[0].toString(), {
                                  dir: "y",
                                  dur: 0,
                                  overwrite: "none"
                              }))), i && s && (2 === i && o.callbacks.onImageLoad && "function" == typeof o.callbacks.onImageLoad ? o.callbacks.onImageLoad.call(this) : 3 === i && o.callbacks.onSelectorChange && "function" == typeof o.callbacks.onSelectorChange ? o.callbacks.onSelectorChange.call(this) : o.callbacks.onUpdate && "function" == typeof o.callbacks.onUpdate && o.callbacks.onUpdate.call(this)), U.call(this)
                          }
                      })
                  },
                  scrollTo: function(e, i) {
                      if (void 0 !== e && null != e) {
                          var s = d.call(this);
                          return t(s).each(function() {
                              var s = t(this);
                              if (s.data(n)) {
                                  var o = s.data(n),
                                      a = o.opt,
                                      r = {
                                          trigger: "external",
                                          scrollInertia: a.scrollInertia,
                                          scrollEasing: "mcsEaseInOut",
                                          moveDragger: !1,
                                          timeout: 60,
                                          callbacks: !0,
                                          onStart: !0,
                                          onUpdate: !0,
                                          onComplete: !0
                                      },
                                      l = t.extend(!0, {}, r, i),
                                      c = Y.call(this, e),
                                      h = l.scrollInertia > 0 && l.scrollInertia < 17 ? 17 : l.scrollInertia;
                                  c[0] = q.call(this, c[0], "y"), c[1] = q.call(this, c[1], "x"), l.moveDragger && (c[0] *= o.scrollRatio.y, c[1] *= o.scrollRatio.x), l.dur = nt() ? 0 : h, setTimeout(function() {
                                      null !== c[0] && void 0 !== c[0] && "x" !== a.axis && o.overflowed[0] && (l.dir = "y", l.overwrite = "all", X(s, c[0].toString(), l)), null !== c[1] && void 0 !== c[1] && "y" !== a.axis && o.overflowed[1] && (l.dir = "x", l.overwrite = "none", X(s, c[1].toString(), l))
                                  }, l.timeout)
                              }
                          })
                      }
                  },
                  stop: function() {
                      var e = d.call(this);
                      return t(e).each(function() {
                          var e = t(this);
                          e.data(n) && V(e)
                      })
                  },
                  disable: function(e) {
                      var i = d.call(this);
                      return t(i).each(function() {
                          var i = t(this);
                          i.data(n) && (i.data(n), U.call(this, "remove"), D.call(this), e && S.call(this), M.call(this, !0), i.addClass(h[3]))
                      })
                  },
                  destroy: function() {
                      var e = d.call(this);
                      return t(e).each(function() {
                          var s = t(this);
                          if (s.data(n)) {
                              var o = s.data(n),
                                  a = o.opt,
                                  r = t("#mCSB_" + o.idx),
                                  l = t("#mCSB_" + o.idx + "_container"),
                                  c = t(".mCSB_" + o.idx + "_scrollbar");
                              a.live && f(a.liveSelector || t(e).selector), U.call(this, "remove"), D.call(this), S.call(this), s.removeData(n), Z(this, "mcs"), c.remove(), l.find("img." + h[2]).removeClass(h[2]), r.replaceWith(l.contents()), s.removeClass(i + " _" + n + "_" + o.idx + " " + h[6] + " " + h[7] + " " + h[5] + " " + h[3]).addClass(h[4])
                          }
                      })
                  }
              },
              d = function() {
                  return "object" != typeof t(this) || t(this).length < 1 ? s : this
              },
              p = function(e) {
                  e.autoDraggerLength = !(t.inArray(e.theme, ["rounded", "rounded-dark", "rounded-dots", "rounded-dots-dark"]) > -1) && e.autoDraggerLength, e.autoExpandScrollbar = !(t.inArray(e.theme, ["rounded-dots", "rounded-dots-dark", "3d", "3d-dark", "3d-thick", "3d-thick-dark", "inset", "inset-dark", "inset-2", "inset-2-dark", "inset-3", "inset-3-dark"]) > -1) && e.autoExpandScrollbar, e.scrollButtons.enable = !(t.inArray(e.theme, ["minimal", "minimal-dark"]) > -1) && e.scrollButtons.enable, e.autoHideScrollbar = t.inArray(e.theme, ["minimal", "minimal-dark"]) > -1 || e.autoHideScrollbar, e.scrollbarPosition = t.inArray(e.theme, ["minimal", "minimal-dark"]) > -1 ? "outside" : e.scrollbarPosition
              },
              f = function(t) {
                  r[t] && (clearTimeout(r[t]), Z(r, t))
              },
              m = function(t) {
                  return "yx" === t || "xy" === t || "auto" === t ? "yx" : "x" === t || "horizontal" === t ? "x" : "y"
              },
              g = function(t) {
                  return "stepped" === t || "pixels" === t || "step" === t || "click" === t ? "stepped" : "stepless"
              },
              v = function() {
                  var e = t(this),
                      s = e.data(n),
                      o = s.opt,
                      a = o.autoExpandScrollbar ? " " + h[1] + "_expand" : "",
                      r = ["<div id='mCSB_" + s.idx + "_scrollbar_vertical' class='mCSB_scrollTools mCSB_" + s.idx + "_scrollbar mCS-" + o.theme + " mCSB_scrollTools_vertical" + a + "'><div class='" + h[12] + "'><div id='mCSB_" + s.idx + "_dragger_vertical' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>", "<div id='mCSB_" + s.idx + "_scrollbar_horizontal' class='mCSB_scrollTools mCSB_" + s.idx + "_scrollbar mCS-" + o.theme + " mCSB_scrollTools_horizontal" + a + "'><div class='" + h[12] + "'><div id='mCSB_" + s.idx + "_dragger_horizontal' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"],
                      l = "yx" === o.axis ? "mCSB_vertical_horizontal" : "x" === o.axis ? "mCSB_horizontal" : "mCSB_vertical",
                      c = "yx" === o.axis ? r[0] + r[1] : "x" === o.axis ? r[1] : r[0],
                      u = "yx" === o.axis ? "<div id='mCSB_" + s.idx + "_container_wrapper' class='mCSB_container_wrapper' />" : "",
                      d = o.autoHideScrollbar ? " " + h[6] : "",
                      p = "x" !== o.axis && "rtl" === s.langDir ? " " + h[7] : "";
                  o.setWidth && e.css("width", o.setWidth), o.setHeight && e.css("height", o.setHeight), o.setLeft = "y" !== o.axis && "rtl" === s.langDir ? "989999px" : o.setLeft, e.addClass(i + " _" + n + "_" + s.idx + d + p).wrapInner("<div id='mCSB_" + s.idx + "' class='mCustomScrollBox mCS-" + o.theme + " " + l + "'><div id='mCSB_" + s.idx + "_container' class='mCSB_container' style='position:relative; top:" + o.setTop + "; left:" + o.setLeft + ";' dir='" + s.langDir + "' /></div>");
                  var f = t("#mCSB_" + s.idx),
                      m = t("#mCSB_" + s.idx + "_container");
                  "y" === o.axis || o.advanced.autoExpandHorizontalScroll || m.css("width", y(m)), "outside" === o.scrollbarPosition ? ("static" === e.css("position") && e.css("position", "relative"), e.css("overflow", "visible"), f.addClass("mCSB_outside").after(c)) : (f.addClass("mCSB_inside").append(c), m.wrap(u)), _.call(this);
                  var g = [t("#mCSB_" + s.idx + "_dragger_vertical"), t("#mCSB_" + s.idx + "_dragger_horizontal")];
                  g[0].css("min-height", g[0].height()), g[1].css("min-width", g[1].width())
              },
              y = function(e) {
                  var i = [e[0].scrollWidth, Math.max.apply(Math, e.children().map(function() {
                          return t(this).outerWidth(!0)
                      }).get())],
                      n = e.parent().width();
                  return i[0] > n ? i[0] : i[1] > n ? i[1] : "100%"
              },
              b = function() {
                  var e = t(this),
                      i = e.data(n),
                      s = i.opt,
                      o = t("#mCSB_" + i.idx + "_container");
                  if (s.advanced.autoExpandHorizontalScroll && "y" !== s.axis) {
                      o.css({
                          width: "auto",
                          "min-width": 0,
                          "overflow-x": "scroll"
                      });
                      var a = Math.ceil(o[0].scrollWidth);
                      3 === s.advanced.autoExpandHorizontalScroll || 2 !== s.advanced.autoExpandHorizontalScroll && a > o.parent().width() ? o.css({
                          width: a,
                          "min-width": "100%",
                          "overflow-x": "inherit"
                      }) : o.css({
                          "overflow-x": "inherit",
                          position: "absolute"
                      }).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({
                          width: Math.ceil(o[0].getBoundingClientRect().right + .4) - Math.floor(o[0].getBoundingClientRect().left),
                          "min-width": "100%",
                          position: "relative"
                      }).unwrap()
                  }
              },
              _ = function() {
                  var e = t(this),
                      i = e.data(n),
                      s = i.opt,
                      o = t(".mCSB_" + i.idx + "_scrollbar:first"),
                      a = et(s.scrollButtons.tabindex) ? "tabindex='" + s.scrollButtons.tabindex + "'" : "",
                      r = ["<a href='#' class='" + h[13] + "' " + a + " />", "<a href='#' class='" + h[14] + "' " + a + " />", "<a href='#' class='" + h[15] + "' " + a + " />", "<a href='#' class='" + h[16] + "' " + a + " />"],
                      l = ["x" === s.axis ? r[2] : r[0], "x" === s.axis ? r[3] : r[1], r[2], r[3]];
                  s.scrollButtons.enable && o.prepend(l[0]).append(l[1]).next(".mCSB_scrollTools").prepend(l[2]).append(l[3])
              },
              w = function() {
                  var e = t(this),
                      i = e.data(n),
                      s = t("#mCSB_" + i.idx),
                      o = t("#mCSB_" + i.idx + "_container"),
                      a = [t("#mCSB_" + i.idx + "_dragger_vertical"), t("#mCSB_" + i.idx + "_dragger_horizontal")],
                      r = [s.height() / o.outerHeight(!1), s.width() / o.outerWidth(!1)],
                      c = [parseInt(a[0].css("min-height")), Math.round(r[0] * a[0].parent().height()), parseInt(a[1].css("min-width")), Math.round(r[1] * a[1].parent().width())],
                      h = l && c[1] < c[0] ? c[0] : c[1],
                      u = l && c[3] < c[2] ? c[2] : c[3];
                  a[0].css({
                      height: h,
                      "max-height": a[0].parent().height() - 10
                  }).find(".mCSB_dragger_bar").css({
                      "line-height": c[0] + "px"
                  }), a[1].css({
                      width: u,
                      "max-width": a[1].parent().width() - 10
                  })
              },
              x = function() {
                  var e = t(this),
                      i = e.data(n),
                      s = t("#mCSB_" + i.idx),
                      o = t("#mCSB_" + i.idx + "_container"),
                      a = [t("#mCSB_" + i.idx + "_dragger_vertical"), t("#mCSB_" + i.idx + "_dragger_horizontal")],
                      r = [o.outerHeight(!1) - s.height(), o.outerWidth(!1) - s.width()],
                      l = [r[0] / (a[0].parent().height() - a[0].height()), r[1] / (a[1].parent().width() - a[1].width())];
                  i.scrollRatio = {
                      y: l[0],
                      x: l[1]
                  }
              },
              C = function(t, e, i) {
                  var n = i ? h[0] + "_expanded" : "",
                      s = t.closest(".mCSB_scrollTools");
                  "active" === e ? (t.toggleClass(h[0] + " " + n), s.toggleClass(h[1]), t[0]._draggable = t[0]._draggable ? 0 : 1) : t[0]._draggable || ("hide" === e ? (t.removeClass(h[0]), s.removeClass(h[1])) : (t.addClass(h[0]), s.addClass(h[1])))
              },
              k = function() {
                  var e = t(this),
                      i = e.data(n),
                      s = t("#mCSB_" + i.idx),
                      o = t("#mCSB_" + i.idx + "_container"),
                      a = null == i.overflowed ? o.height() : o.outerHeight(!1),
                      r = null == i.overflowed ? o.width() : o.outerWidth(!1),
                      l = o[0].scrollHeight,
                      c = o[0].scrollWidth;
                  return l > a && (a = l), c > r && (r = c), [a > s.height(), r > s.width()]
              },
              S = function() {
                  var e = t(this),
                      i = e.data(n),
                      s = i.opt,
                      o = t("#mCSB_" + i.idx),
                      a = t("#mCSB_" + i.idx + "_container"),
                      r = [t("#mCSB_" + i.idx + "_dragger_vertical"), t("#mCSB_" + i.idx + "_dragger_horizontal")];
                  if (V(e), ("x" !== s.axis && !i.overflowed[0] || "y" === s.axis && i.overflowed[0]) && (r[0].add(a).css("top", 0), X(e, "_resetY")), "y" !== s.axis && !i.overflowed[1] || "x" === s.axis && i.overflowed[1]) {
                      var l = dx = 0;
                      "rtl" === i.langDir && (l = o.width() - a.outerWidth(!1), dx = Math.abs(l / i.scrollRatio.x)), a.css("left", l), r[1].css("left", dx), X(e, "_resetX")
                  }
              },
              T = function() {
                  var e, i = t(this),
                      s = i.data(n),
                      o = s.opt;
                  s.bindEvents || (P.call(this), o.contentTouchScroll && $.call(this), E.call(this), o.mouseWheel.enable && function n() {
                      e = setTimeout(function() {
                          t.event.special.mousewheel ? (clearTimeout(e), A.call(i[0])) : n()
                      }, 100)
                  }(), H.call(this), R.call(this), o.advanced.autoScrollOnFocus && z.call(this), o.scrollButtons.enable && W.call(this), o.keyboard.enable && j.call(this), s.bindEvents = !0)
              },
              D = function() {
                  var e = t(this),
                      i = e.data(n),
                      s = i.opt,
                      o = n + "_" + i.idx,
                      a = ".mCSB_" + i.idx + "_scrollbar",
                      r = t("#mCSB_" + i.idx + ",#mCSB_" + i.idx + "_container,#mCSB_" + i.idx + "_container_wrapper," + a + " ." + h[12] + ",#mCSB_" + i.idx + "_dragger_vertical,#mCSB_" + i.idx + "_dragger_horizontal," + a + ">a"),
                      l = t("#mCSB_" + i.idx + "_container");
                  s.advanced.releaseDraggableSelectors && r.add(t(s.advanced.releaseDraggableSelectors)), s.advanced.extraDraggableSelectors && r.add(t(s.advanced.extraDraggableSelectors)), i.bindEvents && (t(document).add(t(!O() || top.document)).unbind("." + o), r.each(function() {
                      t(this).unbind("." + o)
                  }), clearTimeout(e[0]._focusTimeout), Z(e[0], "_focusTimeout"), clearTimeout(i.sequential.step), Z(i.sequential, "step"), clearTimeout(l[0].onCompleteTimeout), Z(l[0], "onCompleteTimeout"), i.bindEvents = !1)
              },
              M = function(e) {
                  var i = t(this),
                      s = i.data(n),
                      o = s.opt,
                      a = t("#mCSB_" + s.idx + "_container_wrapper"),
                      r = a.length ? a : t("#mCSB_" + s.idx + "_container"),
                      l = [t("#mCSB_" + s.idx + "_scrollbar_vertical"), t("#mCSB_" + s.idx + "_scrollbar_horizontal")],
                      c = [l[0].find(".mCSB_dragger"), l[1].find(".mCSB_dragger")];
                  "x" !== o.axis && (s.overflowed[0] && !e ? (l[0].add(c[0]).add(l[0].children("a")).css("display", "block"), r.removeClass(h[8] + " " + h[10])) : (o.alwaysShowScrollbar ? (2 !== o.alwaysShowScrollbar && c[0].css("display", "none"), r.removeClass(h[10])) : (l[0].css("display", "none"), r.addClass(h[10])), r.addClass(h[8]))), "y" !== o.axis && (s.overflowed[1] && !e ? (l[1].add(c[1]).add(l[1].children("a")).css("display", "block"), r.removeClass(h[9] + " " + h[11])) : (o.alwaysShowScrollbar ? (2 !== o.alwaysShowScrollbar && c[1].css("display", "none"), r.removeClass(h[11])) : (l[1].css("display", "none"), r.addClass(h[11])), r.addClass(h[9]))), s.overflowed[0] || s.overflowed[1] ? i.removeClass(h[5]) : i.addClass(h[5])
              },
              I = function(e) {
                  var i = e.type,
                      n = e.target.ownerDocument !== document && null !== frameElement ? [t(frameElement).offset().top, t(frameElement).offset().left] : null,
                      s = O() && e.target.ownerDocument !== top.document && null !== frameElement ? [t(e.view.frameElement).offset().top, t(e.view.frameElement).offset().left] : [0, 0];
                  switch (i) {
                      case "pointerdown":
                      case "MSPointerDown":
                      case "pointermove":
                      case "MSPointerMove":
                      case "pointerup":
                      case "MSPointerUp":
                          return n ? [e.originalEvent.pageY - n[0] + s[0], e.originalEvent.pageX - n[1] + s[1], !1] : [e.originalEvent.pageY, e.originalEvent.pageX, !1];
                      case "touchstart":
                      case "touchmove":
                      case "touchend":
                          var o = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0],
                              a = e.originalEvent.touches.length || e.originalEvent.changedTouches.length;
                          return e.target.ownerDocument !== document ? [o.screenY, o.screenX, a > 1] : [o.pageY, o.pageX, a > 1];
                      default:
                          return n ? [e.pageY - n[0] + s[0], e.pageX - n[1] + s[1], !1] : [e.pageY, e.pageX, !1]
                  }
              },
              P = function() {
                  function e(t, e, n, s) {
                      if (p[0].idleTimer = h.scrollInertia < 233 ? 250 : 0, i.attr("id") === d[1]) var o = "x",
                          l = (i[0].offsetLeft - e + s) * r.scrollRatio.x;
                      else var o = "y",
                          l = (i[0].offsetTop - t + n) * r.scrollRatio.y;
                      X(a, l.toString(), {
                          dir: o,
                          drag: !0
                      })
                  }
                  var i, s, o, a = t(this),
                      r = a.data(n),
                      h = r.opt,
                      u = n + "_" + r.idx,
                      d = ["mCSB_" + r.idx + "_dragger_vertical", "mCSB_" + r.idx + "_dragger_horizontal"],
                      p = t("#mCSB_" + r.idx + "_container"),
                      f = t("#" + d[0] + ",#" + d[1]),
                      m = h.advanced.releaseDraggableSelectors ? f.add(t(h.advanced.releaseDraggableSelectors)) : f,
                      g = h.advanced.extraDraggableSelectors ? t(!O() || top.document).add(t(h.advanced.extraDraggableSelectors)) : t(!O() || top.document);
                  f.bind("contextmenu." + u, function(t) {
                      t.preventDefault()
                  }).bind("mousedown." + u + " touchstart." + u + " pointerdown." + u + " MSPointerDown." + u, function(e) {
                      if (e.stopImmediatePropagation(), e.preventDefault(), J(e)) {
                          c = !0, l && (document.onselectstart = function() {
                              return !1
                          }), N.call(p, !1), V(a);
                          var n = (i = t(this)).offset(),
                              r = I(e)[0] - n.top,
                              u = I(e)[1] - n.left,
                              d = i.height() + n.top,
                              f = i.width() + n.left;
                          d > r && r > 0 && f > u && u > 0 && (s = r, o = u), C(i, "active", h.autoExpandScrollbar)
                      }
                  }).bind("touchmove." + u, function(t) {
                      t.stopImmediatePropagation(), t.preventDefault();
                      var n = i.offset(),
                          a = I(t)[0] - n.top,
                          r = I(t)[1] - n.left;
                      e(s, o, a, r)
                  }), t(document).add(g).bind("mousemove." + u + " pointermove." + u + " MSPointerMove." + u, function(t) {
                      if (i) {
                          var n = i.offset(),
                              a = I(t)[0] - n.top,
                              r = I(t)[1] - n.left;
                          if (s === a && o === r) return;
                          e(s, o, a, r)
                      }
                  }).add(m).bind("mouseup." + u + " touchend." + u + " pointerup." + u + " MSPointerUp." + u, function() {
                      i && (C(i, "active", h.autoExpandScrollbar), i = null), c = !1, l && (document.onselectstart = null), N.call(p, !0)
                  })
              },
              $ = function() {
                  function i(t) {
                      if (!tt(t) || c || I(t)[2]) e = 0;
                      else {
                          e = 1, x = 0, C = 0, h = 1, k.removeClass("mCS_touch_action");
                          var i = P.offset();
                          u = I(t)[0] - i.top, d = I(t)[1] - i.left, L = [I(t)[0], I(t)[1]]
                      }
                  }

                  function s(t) {
                      if (tt(t) && !c && !I(t)[2] && (T.documentTouchScroll || t.preventDefault(), t.stopImmediatePropagation(), (!C || x) && h)) {
                          g = K();
                          var e = M.offset(),
                              i = I(t)[0] - e.top,
                              n = I(t)[1] - e.left,
                              s = "mcsLinearOut";
                          if (E.push(i), A.push(n), L[2] = Math.abs(I(t)[0] - L[0]), L[3] = Math.abs(I(t)[1] - L[1]), S.overflowed[0]) var o = $[0].parent().height() - $[0].height(),
                              a = u - i > 0 && i - u > -o * S.scrollRatio.y && (2 * L[3] < L[2] || "yx" === T.axis);
                          if (S.overflowed[1]) var r = $[1].parent().width() - $[1].width(),
                              p = d - n > 0 && n - d > -r * S.scrollRatio.x && (2 * L[2] < L[3] || "yx" === T.axis);
                          a || p ? (R || t.preventDefault(), x = 1) : (C = 1, k.addClass("mCS_touch_action")), R && t.preventDefault(), _ = "yx" === T.axis ? [u - i, d - n] : "x" === T.axis ? [null, d - n] : [u - i, null], P[0].idleTimer = 250, S.overflowed[0] && l(_[0], F, s, "y", "all", !0), S.overflowed[1] && l(_[1], F, s, "x", N, !0)
                      }
                  }

                  function o(t) {
                      if (!tt(t) || c || I(t)[2]) e = 0;
                      else {
                          e = 1, t.stopImmediatePropagation(), V(k), m = K();
                          var i = M.offset();
                          p = I(t)[0] - i.top, f = I(t)[1] - i.left, E = [], A = []
                      }
                  }

                  function a(t) {
                      if (tt(t) && !c && !I(t)[2]) {
                          h = 0, t.stopImmediatePropagation(), x = 0, C = 0, v = K();
                          var e = M.offset(),
                              i = I(t)[0] - e.top,
                              n = I(t)[1] - e.left;
                          if (!(v - g > 30)) {
                              var s = "mcsEaseOut",
                                  o = 2.5 > (b = 1e3 / (v - m)),
                                  a = o ? [E[E.length - 2], A[A.length - 2]] : [0, 0];
                              y = o ? [i - a[0], n - a[1]] : [i - p, n - f];
                              var u = [Math.abs(y[0]), Math.abs(y[1])];
                              b = o ? [Math.abs(y[0] / 4), Math.abs(y[1] / 4)] : [b, b];
                              var d = [Math.abs(P[0].offsetTop) - y[0] * r(u[0] / b[0], b[0]), Math.abs(P[0].offsetLeft) - y[1] * r(u[1] / b[1], b[1])];
                              _ = "yx" === T.axis ? [d[0], d[1]] : "x" === T.axis ? [null, d[1]] : [d[0], null], w = [4 * u[0] + T.scrollInertia, 4 * u[1] + T.scrollInertia];
                              var k = parseInt(T.contentTouchScroll) || 0;
                              _[0] = u[0] > k ? _[0] : 0, _[1] = u[1] > k ? _[1] : 0, S.overflowed[0] && l(_[0], w[0], s, "y", N, !1), S.overflowed[1] && l(_[1], w[1], s, "x", N, !1)
                          }
                      }
                  }

                  function r(t, e) {
                      var i = [1.5 * e, 2 * e, e / 1.5, e / 2];
                      return t > 90 ? e > 4 ? i[0] : i[3] : t > 60 ? e > 3 ? i[3] : i[2] : t > 30 ? e > 8 ? i[1] : e > 6 ? i[0] : e > 4 ? e : i[2] : e > 8 ? e : i[3]
                  }

                  function l(t, e, i, n, s, o) {
                      t && X(k, t.toString(), {
                          dur: e,
                          scrollEasing: i,
                          dir: n,
                          overwrite: s,
                          drag: o
                      })
                  }
                  var h, u, d, p, f, m, g, v, y, b, _, w, x, C, k = t(this),
                      S = k.data(n),
                      T = S.opt,
                      D = n + "_" + S.idx,
                      M = t("#mCSB_" + S.idx),
                      P = t("#mCSB_" + S.idx + "_container"),
                      $ = [t("#mCSB_" + S.idx + "_dragger_vertical"), t("#mCSB_" + S.idx + "_dragger_horizontal")],
                      E = [],
                      A = [],
                      F = 0,
                      N = "yx" === T.axis ? "none" : "all",
                      L = [],
                      H = P.find("iframe"),
                      z = ["touchstart." + D + " pointerdown." + D + " MSPointerDown." + D, "touchmove." + D + " pointermove." + D + " MSPointerMove." + D, "touchend." + D + " pointerup." + D + " MSPointerUp." + D],
                      R = void 0 !== document.body.style.touchAction && "" !== document.body.style.touchAction;
                  P.bind(z[0], function(t) {
                      i(t)
                  }).bind(z[1], function(t) {
                      s(t)
                  }), M.bind(z[0], function(t) {
                      o(t)
                  }).bind(z[2], function(t) {
                      a(t)
                  }), H.length && H.each(function() {
                      t(this).bind("load", function() {
                          O(this) && t(this.contentDocument || this.contentWindow.document).bind(z[0], function(t) {
                              i(t), o(t)
                          }).bind(z[1], function(t) {
                              s(t)
                          }).bind(z[2], function(t) {
                              a(t)
                          })
                      })
                  })
              },
              E = function() {
                  function i(t, e, i) {
                      l.type = i && s ? "stepped" : "stepless", l.scrollAmount = 10, B(o, t, e, "mcsLinearOut", i ? 60 : null)
                  }
                  var s, o = t(this),
                      a = o.data(n),
                      r = a.opt,
                      l = a.sequential,
                      h = n + "_" + a.idx,
                      u = t("#mCSB_" + a.idx + "_container"),
                      d = u.parent();
                  u.bind("mousedown." + h, function() {
                      e || s || (s = 1, c = !0)
                  }).add(document).bind("mousemove." + h, function(t) {
                      if (!e && s && (window.getSelection ? window.getSelection().toString() : document.selection && "Control" != document.selection.type && document.selection.createRange().text)) {
                          var n = u.offset(),
                              o = I(t)[0] - n.top + u[0].offsetTop,
                              c = I(t)[1] - n.left + u[0].offsetLeft;
                          o > 0 && o < d.height() && c > 0 && c < d.width() ? l.step && i("off", null, "stepped") : ("x" !== r.axis && a.overflowed[0] && (0 > o ? i("on", 38) : o > d.height() && i("on", 40)), "y" !== r.axis && a.overflowed[1] && (0 > c ? i("on", 37) : c > d.width() && i("on", 39)))
                      }
                  }).bind("mouseup." + h + " dragend." + h, function() {
                      e || (s && (s = 0, i("off", null)), c = !1)
                  })
              },
              A = function() {
                  function e(e, n) {
                      if (V(i), !L(i, e.target)) {
                          var a = "auto" !== o.mouseWheel.deltaFactor ? parseInt(o.mouseWheel.deltaFactor) : l && e.deltaFactor < 100 ? 100 : e.deltaFactor || 100,
                              h = o.scrollInertia;
                          if ("x" === o.axis || "x" === o.mouseWheel.axis) var u = "x",
                              d = [Math.round(a * s.scrollRatio.x), parseInt(o.mouseWheel.scrollAmount)],
                              p = "auto" !== o.mouseWheel.scrollAmount ? d[1] : d[0] >= r.width() ? .9 * r.width() : d[0],
                              f = Math.abs(t("#mCSB_" + s.idx + "_container")[0].offsetLeft),
                              m = c[1][0].offsetLeft,
                              g = c[1].parent().width() - c[1].width(),
                              v = "y" === o.mouseWheel.axis ? e.deltaY || n : e.deltaX;
                          else var u = "y",
                              d = [Math.round(a * s.scrollRatio.y), parseInt(o.mouseWheel.scrollAmount)],
                              p = "auto" !== o.mouseWheel.scrollAmount ? d[1] : d[0] >= r.height() ? .9 * r.height() : d[0],
                              f = Math.abs(t("#mCSB_" + s.idx + "_container")[0].offsetTop),
                              m = c[0][0].offsetTop,
                              g = c[0].parent().height() - c[0].height(),
                              v = e.deltaY || n;
                          "y" === u && !s.overflowed[0] || "x" === u && !s.overflowed[1] || ((o.mouseWheel.invert || e.webkitDirectionInvertedFromDevice) && (v = -v), o.mouseWheel.normalizeDelta && (v = 0 > v ? -1 : 1), (v > 0 && 0 !== m || 0 > v && m !== g || o.mouseWheel.preventDefault) && (e.stopImmediatePropagation(), e.preventDefault()), e.deltaFactor < 5 && !o.mouseWheel.normalizeDelta && (p = e.deltaFactor, h = 17), X(i, (f - v * p).toString(), {
                              dir: u,
                              dur: h
                          }))
                      }
                  }
                  if (t(this).data(n)) {
                      var i = t(this),
                          s = i.data(n),
                          o = s.opt,
                          a = n + "_" + s.idx,
                          r = t("#mCSB_" + s.idx),
                          c = [t("#mCSB_" + s.idx + "_dragger_vertical"), t("#mCSB_" + s.idx + "_dragger_horizontal")],
                          h = t("#mCSB_" + s.idx + "_container").find("iframe");
                      h.length && h.each(function() {
                          t(this).bind("load", function() {
                              O(this) && t(this.contentDocument || this.contentWindow.document).bind("mousewheel." + a, function(t, i) {
                                  e(t, i)
                              })
                          })
                      }), r.bind("mousewheel." + a, function(t, i) {
                          e(t, i)
                      })
                  }
              },
              F = new Object,
              O = function(e) {
                  var i = !1,
                      n = !1,
                      s = null;
                  if (void 0 === e ? n = "#empty" : void 0 !== t(e).attr("id") && (n = t(e).attr("id")), !1 !== n && void 0 !== F[n]) return F[n];
                  if (e) {
                      try {
                          var o = e.contentDocument || e.contentWindow.document;
                          s = o.body.innerHTML
                      } catch (t) {}
                      i = null !== s
                  } else {
                      try {
                          var o = top.document;
                          s = o.body.innerHTML
                      } catch (t) {}
                      i = null !== s
                  }
                  return !1 !== n && (F[n] = i), i
              },
              N = function(t) {
                  var e = this.find("iframe");
                  if (e.length) {
                      var i = t ? "auto" : "none";
                      e.css("pointer-events", i)
                  }
              },
              L = function(e, i) {
                  var s = i.nodeName.toLowerCase(),
                      o = e.data(n).opt.mouseWheel.disableOver;
                  return t.inArray(s, o) > -1 && !(t.inArray(s, ["select", "textarea"]) > -1 && !t(i).is(":focus"))
              },
              H = function() {
                  var e, i = t(this),
                      s = i.data(n),
                      o = n + "_" + s.idx,
                      a = t("#mCSB_" + s.idx + "_container"),
                      r = a.parent(),
                      l = t(".mCSB_" + s.idx + "_scrollbar ." + h[12]);
                  l.bind("mousedown." + o + " touchstart." + o + " pointerdown." + o + " MSPointerDown." + o, function(i) {
                      c = !0, t(i.target).hasClass("mCSB_dragger") || (e = 1)
                  }).bind("touchend." + o + " pointerup." + o + " MSPointerUp." + o, function() {
                      c = !1
                  }).bind("click." + o, function(n) {
                      if (e && (e = 0, t(n.target).hasClass(h[12]) || t(n.target).hasClass("mCSB_draggerRail"))) {
                          V(i);
                          var o = t(this),
                              l = o.find(".mCSB_dragger");
                          if (o.parent(".mCSB_scrollTools_horizontal").length > 0) {
                              if (!s.overflowed[1]) return;
                              var c = "x",
                                  u = n.pageX > l.offset().left ? -1 : 1,
                                  d = Math.abs(a[0].offsetLeft) - u * (.9 * r.width())
                          } else {
                              if (!s.overflowed[0]) return;
                              var c = "y",
                                  u = n.pageY > l.offset().top ? -1 : 1,
                                  d = Math.abs(a[0].offsetTop) - u * (.9 * r.height())
                          }
                          X(i, d.toString(), {
                              dir: c,
                              scrollEasing: "mcsEaseInOut"
                          })
                      }
                  })
              },
              z = function() {
                  var e = t(this),
                      i = e.data(n),
                      s = i.opt,
                      o = n + "_" + i.idx,
                      a = t("#mCSB_" + i.idx + "_container"),
                      r = a.parent();
                  a.bind("focusin." + o, function() {
                      var i = t(document.activeElement),
                          n = a.find(".mCustomScrollBox").length;
                      i.is(s.advanced.autoScrollOnFocus) && (V(e), clearTimeout(e[0]._focusTimeout), e[0]._focusTimer = n ? 17 * n : 0, e[0]._focusTimeout = setTimeout(function() {
                          var t = [it(i)[0], it(i)[1]],
                              n = [a[0].offsetTop, a[0].offsetLeft],
                              o = [n[0] + t[0] >= 0 && n[0] + t[0] < r.height() - i.outerHeight(!1), n[1] + t[1] >= 0 && n[0] + t[1] < r.width() - i.outerWidth(!1)],
                              l = "yx" !== s.axis || o[0] || o[1] ? "all" : "none";
                          "x" === s.axis || o[0] || X(e, t[0].toString(), {
                              dir: "y",
                              scrollEasing: "mcsEaseInOut",
                              overwrite: l,
                              dur: 0
                          }), "y" === s.axis || o[1] || X(e, t[1].toString(), {
                              dir: "x",
                              scrollEasing: "mcsEaseInOut",
                              overwrite: l,
                              dur: 0
                          })
                      }, e[0]._focusTimer))
                  })
              },
              R = function() {
                  var e = t(this),
                      i = e.data(n),
                      s = n + "_" + i.idx,
                      o = t("#mCSB_" + i.idx + "_container").parent();
                  o.bind("scroll." + s, function() {
                      0 === o.scrollTop() && 0 === o.scrollLeft() || t(".mCSB_" + i.idx + "_scrollbar").css("visibility", "hidden")
                  })
              },
              W = function() {
                  var e = t(this),
                      i = e.data(n),
                      s = i.opt,
                      o = i.sequential,
                      a = n + "_" + i.idx,
                      r = ".mCSB_" + i.idx + "_scrollbar",
                      l = t(r + ">a");
                  l.bind("contextmenu." + a, function(t) {
                      t.preventDefault()
                  }).bind("mousedown." + a + " touchstart." + a + " pointerdown." + a + " MSPointerDown." + a + " mouseup." + a + " touchend." + a + " pointerup." + a + " MSPointerUp." + a + " mouseout." + a + " pointerout." + a + " MSPointerOut." + a + " click." + a, function(n) {
                      function a(t, i) {
                          o.scrollAmount = s.scrollButtons.scrollAmount, B(e, t, i)
                      }
                      if (n.preventDefault(), J(n)) {
                          var r = t(this).attr("class");
                          switch (o.type = s.scrollButtons.scrollType, n.type) {
                              case "mousedown":
                              case "touchstart":
                              case "pointerdown":
                              case "MSPointerDown":
                                  if ("stepped" === o.type) return;
                                  c = !0, i.tweenRunning = !1, a("on", r);
                                  break;
                              case "mouseup":
                              case "touchend":
                              case "pointerup":
                              case "MSPointerUp":
                              case "mouseout":
                              case "pointerout":
                              case "MSPointerOut":
                                  if ("stepped" === o.type) return;
                                  c = !1, o.dir && a("off", r);
                                  break;
                              case "click":
                                  if ("stepped" !== o.type || i.tweenRunning) return;
                                  a("on", r)
                          }
                      }
                  })
              },
              j = function() {
                  function e(e) {
                      function n(t, e) {
                          a.type = o.keyboard.scrollType, a.scrollAmount = o.keyboard.scrollAmount, "stepped" === a.type && s.tweenRunning || B(i, t, e)
                      }
                      switch (e.type) {
                          case "blur":
                              s.tweenRunning && a.dir && n("off", null);
                              break;
                          case "keydown":
                          case "keyup":
                              var r = e.keyCode ? e.keyCode : e.which,
                                  l = "on";
                              if ("x" !== o.axis && (38 === r || 40 === r) || "y" !== o.axis && (37 === r || 39 === r)) {
                                  if ((38 === r || 40 === r) && !s.overflowed[0] || (37 === r || 39 === r) && !s.overflowed[1]) return;
                                  "keyup" === e.type && (l = "off"), t(document.activeElement).is(u) || (e.preventDefault(), e.stopImmediatePropagation(), n(l, r))
                              } else if (33 === r || 34 === r) {
                                  if ((s.overflowed[0] || s.overflowed[1]) && (e.preventDefault(), e.stopImmediatePropagation()), "keyup" === e.type) {
                                      V(i);
                                      var d = 34 === r ? -1 : 1;
                                      if ("x" === o.axis || "yx" === o.axis && s.overflowed[1] && !s.overflowed[0]) var p = "x",
                                          f = Math.abs(c[0].offsetLeft) - d * (.9 * h.width());
                                      else var p = "y",
                                          f = Math.abs(c[0].offsetTop) - d * (.9 * h.height());
                                      X(i, f.toString(), {
                                          dir: p,
                                          scrollEasing: "mcsEaseInOut"
                                      })
                                  }
                              } else if ((35 === r || 36 === r) && !t(document.activeElement).is(u) && ((s.overflowed[0] || s.overflowed[1]) && (e.preventDefault(), e.stopImmediatePropagation()), "keyup" === e.type)) {
                                  if ("x" === o.axis || "yx" === o.axis && s.overflowed[1] && !s.overflowed[0]) var p = "x",
                                      f = 35 === r ? Math.abs(h.width() - c.outerWidth(!1)) : 0;
                                  else var p = "y",
                                      f = 35 === r ? Math.abs(h.height() - c.outerHeight(!1)) : 0;
                                  X(i, f.toString(), {
                                      dir: p,
                                      scrollEasing: "mcsEaseInOut"
                                  })
                              }
                      }
                  }
                  var i = t(this),
                      s = i.data(n),
                      o = s.opt,
                      a = s.sequential,
                      r = n + "_" + s.idx,
                      l = t("#mCSB_" + s.idx),
                      c = t("#mCSB_" + s.idx + "_container"),
                      h = c.parent(),
                      u = "input,textarea,select,datalist,keygen,[contenteditable='true']",
                      d = c.find("iframe"),
                      p = ["blur." + r + " keydown." + r + " keyup." + r];
                  d.length && d.each(function() {
                      t(this).bind("load", function() {
                          O(this) && t(this.contentDocument || this.contentWindow.document).bind(p[0], function(t) {
                              e(t)
                          })
                      })
                  }), l.attr("tabindex", "0").bind(p[0], function(t) {
                      e(t)
                  })
              },
              B = function(e, i, s, o, a) {
                  function r(t) {
                      c.snapAmount && (u.scrollAmount = c.snapAmount instanceof Array ? "x" === u.dir[0] ? c.snapAmount[1] : c.snapAmount[0] : c.snapAmount);
                      var i = "stepped" !== u.type,
                          n = a || (t ? i ? f / 1.5 : m : 1e3 / 60),
                          s = t ? i ? 7.5 : 40 : 2.5,
                          h = [Math.abs(d[0].offsetTop), Math.abs(d[0].offsetLeft)],
                          p = [l.scrollRatio.y > 10 ? 10 : l.scrollRatio.y, l.scrollRatio.x > 10 ? 10 : l.scrollRatio.x],
                          g = "x" === u.dir[0] ? h[1] + u.dir[1] * (p[1] * s) : h[0] + u.dir[1] * (p[0] * s),
                          v = "x" === u.dir[0] ? h[1] + u.dir[1] * parseInt(u.scrollAmount) : h[0] + u.dir[1] * parseInt(u.scrollAmount),
                          y = "auto" !== u.scrollAmount ? v : g,
                          b = o || (t ? i ? "mcsLinearOut" : "mcsEaseInOut" : "mcsLinear"),
                          _ = !!t;
                      return t && 17 > n && (y = "x" === u.dir[0] ? h[1] : h[0]), X(e, y.toString(), {
                          dir: u.dir[0],
                          scrollEasing: b,
                          dur: n,
                          onComplete: _
                      }), t ? void(u.dir = !1) : (clearTimeout(u.step), void(u.step = setTimeout(function() {
                          r()
                      }, n)))
                  }
                  var l = e.data(n),
                      c = l.opt,
                      u = l.sequential,
                      d = t("#mCSB_" + l.idx + "_container"),
                      p = "stepped" === u.type,
                      f = c.scrollInertia < 26 ? 26 : c.scrollInertia,
                      m = c.scrollInertia < 1 ? 17 : c.scrollInertia;
                  switch (i) {
                      case "on":
                          if (u.dir = [s === h[16] || s === h[15] || 39 === s || 37 === s ? "x" : "y", s === h[13] || s === h[15] || 38 === s || 37 === s ? -1 : 1], V(e), et(s) && "stepped" === u.type) return;
                          r(p);
                          break;
                      case "off":
                          clearTimeout(u.step), Z(u, "step"), V(e), (p || l.tweenRunning && u.dir) && r(!0)
                  }
              },
              Y = function(e) {
                  var i = t(this).data(n).opt,
                      s = [];
                  return "function" == typeof e && (e = e()), e instanceof Array ? s = e.length > 1 ? [e[0], e[1]] : "x" === i.axis ? [null, e[0]] : [e[0], null] : (s[0] = e.y ? e.y : e.x || "x" === i.axis ? null : e, s[1] = e.x ? e.x : e.y || "y" === i.axis ? null : e), "function" == typeof s[0] && (s[0] = s[0]()), "function" == typeof s[1] && (s[1] = s[1]()), s
              },
              q = function(e, i) {
                  if (null != e && void 0 !== e) {
                      var s = t(this),
                          o = s.data(n),
                          a = o.opt,
                          r = t("#mCSB_" + o.idx + "_container"),
                          l = r.parent(),
                          c = typeof e;
                      i || (i = "x" === a.axis ? "x" : "y");
                      var h = "x" === i ? r.outerWidth(!1) - l.width() : r.outerHeight(!1) - l.height(),
                          d = "x" === i ? r[0].offsetLeft : r[0].offsetTop,
                          p = "x" === i ? "left" : "top";
                      switch (c) {
                          case "function":
                              return e();
                          case "object":
                              var f = e.jquery ? e : t(e);
                              if (!f.length) return;
                              return "x" === i ? it(f)[1] : it(f)[0];
                          case "string":
                          case "number":
                              if (et(e)) return Math.abs(e);
                              if (-1 !== e.indexOf("%")) return Math.abs(h * parseInt(e) / 100);
                              if (-1 !== e.indexOf("-=")) return Math.abs(d - parseInt(e.split("-=")[1]));
                              if (-1 !== e.indexOf("+=")) {
                                  var m = d + parseInt(e.split("+=")[1]);
                                  return m >= 0 ? 0 : Math.abs(m)
                              }
                              if (-1 !== e.indexOf("px") && et(e.split("px")[0])) return Math.abs(e.split("px")[0]);
                              if ("top" === e || "left" === e) return 0;
                              if ("bottom" === e) return Math.abs(l.height() - r.outerHeight(!1));
                              if ("right" === e) return Math.abs(l.width() - r.outerWidth(!1));
                              if ("first" === e || "last" === e) {
                                  var f = r.find(":" + e);
                                  return "x" === i ? it(f)[1] : it(f)[0]
                              }
                              return t(e).length ? "x" === i ? it(t(e))[1] : it(t(e))[0] : (r.css(p, e), void u.update.call(null, s[0]))
                      }
                  }
              },
              U = function(e) {
                  function i(t) {
                      clearTimeout(r[0].autoUpdate), u.update.call(null, s[0], t)
                  }
                  var s = t(this),
                      o = s.data(n),
                      a = o.opt,
                      r = t("#mCSB_" + o.idx + "_container");
                  return e ? (clearTimeout(r[0].autoUpdate), void Z(r[0], "autoUpdate")) : void
                  function e() {
                      return clearTimeout(r[0].autoUpdate), 0 === s.parents("html").length ? void(s = null) : void(r[0].autoUpdate = setTimeout(function() {
                          return a.advanced.updateOnSelectorChange && (o.poll.change.n = function() {
                              !0 === a.advanced.updateOnSelectorChange && (a.advanced.updateOnSelectorChange = "*");
                              var t = 0,
                                  e = r.find(a.advanced.updateOnSelectorChange);
                              return a.advanced.updateOnSelectorChange && e.length > 0 && e.each(function() {
                                  t += this.offsetHeight + this.offsetWidth
                              }), t
                          }(), o.poll.change.n !== o.poll.change.o) ? (o.poll.change.o = o.poll.change.n, void i(3)) : a.advanced.updateOnContentResize && (o.poll.size.n = s[0].scrollHeight + s[0].scrollWidth + r[0].offsetHeight + s[0].offsetHeight + s[0].offsetWidth, o.poll.size.n !== o.poll.size.o) ? (o.poll.size.o = o.poll.size.n, void i(1)) : !a.advanced.updateOnImageLoad || "auto" === a.advanced.updateOnImageLoad && "y" === a.axis || (o.poll.img.n = r.find("img").length, o.poll.img.n === o.poll.img.o) ? void((a.advanced.updateOnSelectorChange || a.advanced.updateOnContentResize || a.advanced.updateOnImageLoad) && e()) : (o.poll.img.o = o.poll.img.n, void r.find("img").each(function() {
                              ! function(e) {
                                  if (t(e).hasClass(h[2])) i();
                                  else {
                                      var n = new Image;
                                      n.onload = function(t, e) {
                                          return function() {
                                              return e.apply(t, arguments)
                                          }
                                      }(n, function() {
                                          this.onload = null, t(e).addClass(h[2]), i(2)
                                      }), n.src = e.src
                                  }
                              }(this)
                          }))
                      }, a.advanced.autoUpdateTimeout))
                  }()
              },
              V = function(e) {
                  var i = e.data(n),
                      s = t("#mCSB_" + i.idx + "_container,#mCSB_" + i.idx + "_container_wrapper,#mCSB_" + i.idx + "_dragger_vertical,#mCSB_" + i.idx + "_dragger_horizontal");
                  s.each(function() {
                      Q.call(this)
                  })
              },
              X = function(e, i, s) {
                  function o(t) {
                      return r && l.callbacks[t] && "function" == typeof l.callbacks[t]
                  }

                  function a() {
                      var t = [d[0].offsetTop, d[0].offsetLeft],
                          i = [v[0].offsetTop, v[0].offsetLeft],
                          n = [d.outerHeight(!1), d.outerWidth(!1)],
                          o = [u.height(), u.width()];
                      e[0].mcs = {
                          content: d,
                          top: t[0],
                          left: t[1],
                          draggerTop: i[0],
                          draggerLeft: i[1],
                          topPct: Math.round(100 * Math.abs(t[0]) / (Math.abs(n[0]) - o[0])),
                          leftPct: Math.round(100 * Math.abs(t[1]) / (Math.abs(n[1]) - o[1])),
                          direction: s.dir
                      }
                  }
                  var r = e.data(n),
                      l = r.opt,
                      c = {
                          trigger: "internal",
                          dir: "y",
                          scrollEasing: "mcsEaseOut",
                          drag: !1,
                          dur: l.scrollInertia,
                          overwrite: "all",
                          callbacks: !0,
                          onStart: !0,
                          onUpdate: !0,
                          onComplete: !0
                      },
                      s = t.extend(c, s),
                      h = [s.dur, s.drag ? 0 : s.dur],
                      u = t("#mCSB_" + r.idx),
                      d = t("#mCSB_" + r.idx + "_container"),
                      p = d.parent(),
                      f = l.callbacks.onTotalScrollOffset ? Y.call(e, l.callbacks.onTotalScrollOffset) : [0, 0],
                      m = l.callbacks.onTotalScrollBackOffset ? Y.call(e, l.callbacks.onTotalScrollBackOffset) : [0, 0];
                  if (r.trigger = s.trigger, 0 === p.scrollTop() && 0 === p.scrollLeft() || (t(".mCSB_" + r.idx + "_scrollbar").css("visibility", "visible"), p.scrollTop(0).scrollLeft(0)), "_resetY" !== i || r.contentReset.y || (o("onOverflowYNone") && l.callbacks.onOverflowYNone.call(e[0]), r.contentReset.y = 1), "_resetX" !== i || r.contentReset.x || (o("onOverflowXNone") && l.callbacks.onOverflowXNone.call(e[0]), r.contentReset.x = 1), "_resetY" !== i && "_resetX" !== i) {
                      if (!r.contentReset.y && e[0].mcs || !r.overflowed[0] || (o("onOverflowY") && l.callbacks.onOverflowY.call(e[0]), r.contentReset.x = null), !r.contentReset.x && e[0].mcs || !r.overflowed[1] || (o("onOverflowX") && l.callbacks.onOverflowX.call(e[0]), r.contentReset.x = null), l.snapAmount) {
                          var g = l.snapAmount instanceof Array ? "x" === s.dir ? l.snapAmount[1] : l.snapAmount[0] : l.snapAmount;
                          i = function(t, e, i) {
                              return Math.round(t / e) * e - i
                          }(i, g, l.snapOffset)
                      }
                      switch (s.dir) {
                          case "x":
                              var v = t("#mCSB_" + r.idx + "_dragger_horizontal"),
                                  y = "left",
                                  b = d[0].offsetLeft,
                                  _ = [u.width() - d.outerWidth(!1), v.parent().width() - v.width()],
                                  w = [i, 0 === i ? 0 : i / r.scrollRatio.x],
                                  x = f[1],
                                  k = m[1],
                                  S = x > 0 ? x / r.scrollRatio.x : 0,
                                  T = k > 0 ? k / r.scrollRatio.x : 0;
                              break;
                          case "y":
                              var v = t("#mCSB_" + r.idx + "_dragger_vertical"),
                                  y = "top",
                                  b = d[0].offsetTop,
                                  _ = [u.height() - d.outerHeight(!1), v.parent().height() - v.height()],
                                  w = [i, 0 === i ? 0 : i / r.scrollRatio.y],
                                  x = f[0],
                                  k = m[0],
                                  S = x > 0 ? x / r.scrollRatio.y : 0,
                                  T = k > 0 ? k / r.scrollRatio.y : 0
                      }
                      w[1] < 0 || 0 === w[0] && 0 === w[1] ? w = [0, 0] : w[1] >= _[1] ? w = [_[0], _[1]] : w[0] = -w[0], e[0].mcs || (a(), o("onInit") && l.callbacks.onInit.call(e[0])), clearTimeout(d[0].onCompleteTimeout), G(v[0], y, Math.round(w[1]), h[1], s.scrollEasing), !r.tweenRunning && (0 === b && w[0] >= 0 || b === _[0] && w[0] <= _[0]) || G(d[0], y, Math.round(w[0]), h[0], s.scrollEasing, s.overwrite, {
                          onStart: function() {
                              s.callbacks && s.onStart && !r.tweenRunning && (o("onScrollStart") && (a(), l.callbacks.onScrollStart.call(e[0])), r.tweenRunning = !0, C(v), r.cbOffsets = [l.callbacks.alwaysTriggerOffsets || b >= _[0] + x, l.callbacks.alwaysTriggerOffsets || -k >= b])
                          },
                          onUpdate: function() {
                              s.callbacks && s.onUpdate && o("whileScrolling") && (a(), l.callbacks.whileScrolling.call(e[0]))
                          },
                          onComplete: function() {
                              if (s.callbacks && s.onComplete) {
                                  "yx" === l.axis && clearTimeout(d[0].onCompleteTimeout);
                                  var t = d[0].idleTimer || 0;
                                  d[0].onCompleteTimeout = setTimeout(function() {
                                      o("onScroll") && (a(), l.callbacks.onScroll.call(e[0])), o("onTotalScroll") && w[1] >= _[1] - S && r.cbOffsets[0] && (a(), l.callbacks.onTotalScroll.call(e[0])), o("onTotalScrollBack") && w[1] <= T && r.cbOffsets[1] && (a(), l.callbacks.onTotalScrollBack.call(e[0])), r.tweenRunning = !1, d[0].idleTimer = 0, C(v, "hide")
                                  }, t)
                              }
                          }
                      })
                  }
              },
              G = function(t, e, i, n, s, o, a) {
                  function r() {
                      y.stop || (m || u.call(), m = K() - f, l(), m >= y.time && (y.time = m > y.time ? m + c - (m - y.time) : m + c - 1, y.time < m + 1 && (y.time = m + 1)), y.time < n ? y.id = h(r) : p.call())
                  }

                  function l() {
                      n > 0 ? (y.currVal = function(t, e, i, n, s) {
                          switch (s) {
                              case "linear":
                              case "mcsLinear":
                                  return i * t / n + e;
                              case "mcsLinearOut":
                                  return t /= n, t--, i * Math.sqrt(1 - t * t) + e;
                              case "easeInOutSmooth":
                                  return 1 > (t /= n / 2) ? i / 2 * t * t + e : -i / 2 * (--t * (t - 2) - 1) + e;
                              case "easeInOutStrong":
                                  return 1 > (t /= n / 2) ? i / 2 * Math.pow(2, 10 * (t - 1)) + e : (t--, i / 2 * (2 - Math.pow(2, -10 * t)) + e);
                              case "easeInOut":
                              case "mcsEaseInOut":
                                  return 1 > (t /= n / 2) ? i / 2 * t * t * t + e : i / 2 * ((t -= 2) * t * t + 2) + e;
                              case "easeOutSmooth":
                                  return t /= n, -i * (--t * t * t * t - 1) + e;
                              case "easeOutStrong":
                                  return i * (1 - Math.pow(2, -10 * t / n)) + e;
                              case "easeOut":
                              case "mcsEaseOut":
                              default:
                                  var o = (t /= n) * t,
                                      a = o * t;
                                  return e + i * (.499999999999997 * a * o + -2.5 * o * o + 5.5 * a + -6.5 * o + 4 * t)
                          }
                      }(y.time, g, b, n, s), v[e] = Math.round(y.currVal) + "px") : v[e] = i + "px", d.call()
                  }
                  t._mTween || (t._mTween = {
                      top: {},
                      left: {}
                  });
                  var c, h, a = a || {},
                      u = a.onStart || function() {},
                      d = a.onUpdate || function() {},
                      p = a.onComplete || function() {},
                      f = K(),
                      m = 0,
                      g = t.offsetTop,
                      v = t.style,
                      y = t._mTween[e];
                  "left" === e && (g = t.offsetLeft);
                  var b = i - g;
                  y.stop = 0, "none" !== o && null != y.id && (window.requestAnimationFrame ? window.cancelAnimationFrame(y.id) : clearTimeout(y.id), y.id = null), c = 1e3 / 60, y.time = m + c, h = window.requestAnimationFrame ? window.requestAnimationFrame : function(t) {
                      return l(), setTimeout(t, .01)
                  }, y.id = h(r)
              },
              K = function() {
                  return window.performance && window.performance.now ? window.performance.now() : window.performance && window.performance.webkitNow ? window.performance.webkitNow() : Date.now ? Date.now() : (new Date).getTime()
              },
              Q = function() {
                  var t = this;
                  t._mTween || (t._mTween = {
                      top: {},
                      left: {}
                  });
                  for (var e = ["top", "left"], i = 0; i < e.length; i++) {
                      var n = e[i];
                      t._mTween[n].id && (window.requestAnimationFrame ? window.cancelAnimationFrame(t._mTween[n].id) : clearTimeout(t._mTween[n].id), t._mTween[n].id = null, t._mTween[n].stop = 1)
                  }
              },
              Z = function(t, e) {
                  try {
                      delete t[e]
                  } catch (i) {
                      t[e] = null
                  }
              },
              J = function(t) {
                  return !(t.which && 1 !== t.which)
              },
              tt = function(t) {
                  var e = t.originalEvent.pointerType;
                  return !(e && "touch" !== e && 2 !== e)
              },
              et = function(t) {
                  return !isNaN(parseFloat(t)) && isFinite(t)
              },
              it = function(t) {
                  var e = t.parents(".mCSB_container");
                  return [t.offset().top - e.offset().top, t.offset().left - e.offset().left]
              },
              nt = function() {
                  var t = function() {
                      var t = ["webkit", "moz", "ms", "o"];
                      if ("hidden" in document) return "hidden";
                      for (var e = 0; e < t.length; e++)
                          if (t[e] + "Hidden" in document) return t[e] + "Hidden";
                      return null
                  }();
                  return !!t && document[t]
              };
          t.fn[i] = function(e) {
              return u[e] ? u[e].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof e && e ? void t.error("Method " + e + " does not exist") : u.init.apply(this, arguments)
          }, t[i] = function(e) {
              return u[e] ? u[e].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof e && e ? void t.error("Method " + e + " does not exist") : u.init.apply(this, arguments)
          }, t[i].defaults = o, window[i] = !0, t(window).bind("load", function() {
              t(s)[i](), t.extend(t.expr[":"], {
                  mcsInView: t.expr[":"].mcsInView || function(e) {
                      var i, n, s = t(e),
                          o = s.parents(".mCSB_container");
                      if (o.length) return i = o.parent(), (n = [o[0].offsetTop, o[0].offsetLeft])[0] + it(s)[0] >= 0 && n[0] + it(s)[0] < i.height() - s.outerHeight(!1) && n[1] + it(s)[1] >= 0 && n[1] + it(s)[1] < i.width() - s.outerWidth(!1)
                  },
                  mcsInSight: t.expr[":"].mcsInSight || function(e, i, n) {
                      var s, o, a, r, l = t(e),
                          c = l.parents(".mCSB_container"),
                          h = "exact" === n[3] ? [
                              [1, 0],
                              [1, 0]
                          ] : [
                              [.9, .1],
                              [.6, .4]
                          ];
                      if (c.length) return s = [l.outerHeight(!1), l.outerWidth(!1)], a = [c[0].offsetTop + it(l)[0], c[0].offsetLeft + it(l)[1]], o = [c.parent()[0].offsetHeight, c.parent()[0].offsetWidth], a[0] - o[0] * (r = [s[0] < o[0] ? h[0] : h[1], s[1] < o[1] ? h[0] : h[1]])[0][0] < 0 && a[0] + s[0] - o[0] * r[0][1] >= 0 && a[1] - o[1] * r[1][0] < 0 && a[1] + s[1] - o[1] * r[1][1] >= 0
                  },
                  mcsOverflow: t.expr[":"].mcsOverflow || function(e) {
                      var i = t(e).data(n);
                      if (i) return i.overflowed[0] || i.overflowed[1]
                  }
              })
          })
      }()
}),
function(t) {
  "use strict";
  "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
}(function(t) {
  "use strict";
  var e = window.Slick || {};
  (e = function() {
      var e = 0;
      return function(i, n) {
          var s, o = this;
          o.defaults = {
              accessibility: !0,
              adaptiveHeight: !1,
              appendArrows: t(i),
              appendDots: t(i),
              arrows: !0,
              asNavFor: null,
              prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
              nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
              autoplay: !1,
              autoplaySpeed: 3e3,
              centerMode: !1,
              centerPadding: "50px",
              cssEase: "ease",
              customPaging: function(e, i) {
                  return t('<button type="button" data-role="none" role="button" tabindex="0" />').text(i + 1)
              },
              dots: !1,
              dotsClass: "slick-dots",
              draggable: !0,
              easing: "linear",
              edgeFriction: .35,
              fade: !1,
              focusOnSelect: !1,
              infinite: !0,
              initialSlide: 0,
              lazyLoad: "ondemand",
              mobileFirst: !1,
              pauseOnHover: !0,
              pauseOnFocus: !0,
              pauseOnDotsHover: !1,
              respondTo: "window",
              responsive: null,
              rows: 1,
              rtl: !1,
              slide: "",
              slidesPerRow: 1,
              slidesToShow: 1,
              slidesToScroll: 1,
              speed: 500,
              swipe: !0,
              swipeToSlide: !1,
              touchMove: !0,
              touchThreshold: 5,
              useCSS: !0,
              useTransform: !0,
              variableWidth: !1,
              vertical: !1,
              verticalSwiping: !1,
              waitForAnimate: !0,
              zIndex: 1e3
          }, o.initials = {
              animating: !1,
              dragging: !1,
              autoPlayTimer: null,
              currentDirection: 0,
              currentLeft: null,
              currentSlide: 0,
              direction: 1,
              $dots: null,
              listWidth: null,
              listHeight: null,
              loadIndex: 0,
              $nextArrow: null,
              $prevArrow: null,
              slideCount: null,
              slideWidth: null,
              $slideTrack: null,
              $slides: null,
              sliding: !1,
              slideOffset: 0,
              swipeLeft: null,
              $list: null,
              touchObject: {},
              transformsEnabled: !1,
              unslicked: !1
          }, t.extend(o, o.initials), o.activeBreakpoint = null, o.animType = null, o.animProp = null, o.breakpoints = [], o.breakpointSettings = [], o.cssTransitions = !1, o.focussed = !1, o.interrupted = !1, o.hidden = "hidden", o.paused = !0, o.positionProp = null, o.respondTo = null, o.rowCount = 1, o.shouldClick = !0, o.$slider = t(i), o.$slidesCache = null, o.transformType = null, o.transitionType = null, o.visibilityChange = "visibilitychange", o.windowWidth = 0, o.windowTimer = null, s = t(i).data("slick") || {}, o.options = t.extend({}, o.defaults, n, s), o.currentSlide = o.options.initialSlide, o.originalSettings = o.options, void 0 !== document.mozHidden ? (o.hidden = "mozHidden", o.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (o.hidden = "webkitHidden", o.visibilityChange = "webkitvisibilitychange"), o.autoPlay = t.proxy(o.autoPlay, o), o.autoPlayClear = t.proxy(o.autoPlayClear, o), o.autoPlayIterator = t.proxy(o.autoPlayIterator, o), o.changeSlide = t.proxy(o.changeSlide, o), o.clickHandler = t.proxy(o.clickHandler, o), o.selectHandler = t.proxy(o.selectHandler, o), o.setPosition = t.proxy(o.setPosition, o), o.swipeHandler = t.proxy(o.swipeHandler, o), o.dragHandler = t.proxy(o.dragHandler, o), o.keyHandler = t.proxy(o.keyHandler, o), o.instanceUid = e++, o.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, o.registerBreakpoints(), o.init(!0)
      }
  }()).prototype.activateADA = function() {
      this.$slideTrack.find(".slick-active").attr({
          "aria-hidden": "false"
      }).find("a, input, button, select").attr({
          tabindex: "0"
      })
  }, e.prototype.addSlide = e.prototype.slickAdd = function(e, i, n) {
      var s = this;
      if ("boolean" == typeof i) n = i, i = null;
      else if (0 > i || i >= s.slideCount) return !1;
      s.unload(), "number" == typeof i ? 0 === i && 0 === s.$slides.length ? t(e).appendTo(s.$slideTrack) : n ? t(e).insertBefore(s.$slides.eq(i)) : t(e).insertAfter(s.$slides.eq(i)) : !0 === n ? t(e).prependTo(s.$slideTrack) : t(e).appendTo(s.$slideTrack), s.$slides = s.$slideTrack.children(this.options.slide), s.$slideTrack.children(this.options.slide).detach(), s.$slideTrack.append(s.$slides), s.$slides.each(function(e, i) {
          t(i).attr("data-slick-index", e)
      }), s.$slidesCache = s.$slides, s.reinit()
  }, e.prototype.animateHeight = function() {
      var t = this;
      if (1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical) {
          var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
          t.$list.animate({
              height: e
          }, t.options.speed)
      }
  }, e.prototype.animateSlide = function(e, i) {
      var n = {},
          s = this;
      s.animateHeight(), !0 === s.options.rtl && !1 === s.options.vertical && (e = -e), !1 === s.transformsEnabled ? !1 === s.options.vertical ? s.$slideTrack.animate({
          left: e
      }, s.options.speed, s.options.easing, i) : s.$slideTrack.animate({
          top: e
      }, s.options.speed, s.options.easing, i) : !1 === s.cssTransitions ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft), t({
          animStart: s.currentLeft
      }).animate({
          animStart: e
      }, {
          duration: s.options.speed,
          easing: s.options.easing,
          step: function(t) {
              t = Math.ceil(t), !1 === s.options.vertical ? (n[s.animType] = "translate(" + t + "px, 0px)", s.$slideTrack.css(n)) : (n[s.animType] = "translate(0px," + t + "px)", s.$slideTrack.css(n))
          },
          complete: function() {
              i && i.call()
          }
      })) : (s.applyTransition(), e = Math.ceil(e), !1 === s.options.vertical ? n[s.animType] = "translate3d(" + e + "px, 0px, 0px)" : n[s.animType] = "translate3d(0px," + e + "px, 0px)", s.$slideTrack.css(n), i && setTimeout(function() {
          s.disableTransition(), i.call()
      }, s.options.speed))
  }, e.prototype.getNavTarget = function() {
      var e = this.options.asNavFor;
      return e && null !== e && (e = t(e).not(this.$slider)), e
  }, e.prototype.asNavFor = function(e) {
      var i = this.getNavTarget();
      null !== i && "object" == typeof i && i.each(function() {
          var i = t(this).slick("getSlick");
          i.unslicked || i.slideHandler(e, !0)
      })
  }, e.prototype.applyTransition = function(t) {
      var e = this,
          i = {};
      !1 === e.options.fade ? i[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : i[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, !1 === e.options.fade ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i)
  }, e.prototype.autoPlay = function() {
      var t = this;
      t.autoPlayClear(), t.slideCount > t.options.slidesToShow && (t.autoPlayTimer = setInterval(t.autoPlayIterator, t.options.autoplaySpeed))
  }, e.prototype.autoPlayClear = function() {
      this.autoPlayTimer && clearInterval(this.autoPlayTimer)
  }, e.prototype.autoPlayIterator = function() {
      var t = this,
          e = t.currentSlide + t.options.slidesToScroll;
      t.paused || t.interrupted || t.focussed || (!1 === t.options.infinite && (1 === t.direction && t.currentSlide + 1 === t.slideCount - 1 ? t.direction = 0 : 0 === t.direction && (e = t.currentSlide - t.options.slidesToScroll, t.currentSlide - 1 == 0 && (t.direction = 1))), t.slideHandler(e))
  }, e.prototype.buildArrows = function() {
      var e = this;
      !0 === e.options.arrows && (e.$prevArrow = t(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = t(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
          "aria-disabled": "true",
          tabindex: "-1"
      }))
  }, e.prototype.buildDots = function() {
      var e, i, n = this;
      if (!0 === n.options.dots && n.slideCount > n.options.slidesToShow) {
          for (n.$slider.addClass("slick-dotted"), i = t("<ul />").addClass(n.options.dotsClass), e = 0; e <= n.getDotCount(); e += 1) i.append(t("<li />").append(n.options.customPaging.call(this, n, e)));
          n.$dots = i.appendTo(n.options.appendDots), n.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
      }
  }, e.prototype.buildOut = function() {
      var e = this;
      e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function(e, i) {
          t(i).attr("data-slick-index", e).data("originalStyling", t(i).attr("style") || "")
      }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? t('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), (!0 === e.options.centerMode || !0 === e.options.swipeToSlide) && (e.options.slidesToScroll = 1), t("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), !0 === e.options.draggable && e.$list.addClass("draggable")
  }, e.prototype.buildRows = function() {
      var t, e, i, n, s, o, a, r = this;
      if (n = document.createDocumentFragment(), o = r.$slider.children(), r.options.rows > 1) {
          for (a = r.options.slidesPerRow * r.options.rows, s = Math.ceil(o.length / a), t = 0; s > t; t++) {
              var l = document.createElement("div");
              for (e = 0; e < r.options.rows; e++) {
                  var c = document.createElement("div");
                  for (i = 0; i < r.options.slidesPerRow; i++) {
                      var h = t * a + (e * r.options.slidesPerRow + i);
                      o.get(h) && c.appendChild(o.get(h))
                  }
                  l.appendChild(c)
              }
              n.appendChild(l)
          }
          r.$slider.empty().append(n), r.$slider.children().children().children().css({
              width: 100 / r.options.slidesPerRow + "%",
              display: "inline-block"
          })
      }
  }, e.prototype.checkResponsive = function(e, i) {
      var n, s, o, a = this,
          r = !1,
          l = a.$slider.width(),
          c = window.innerWidth || t(window).width();
      if ("window" === a.respondTo ? o = c : "slider" === a.respondTo ? o = l : "min" === a.respondTo && (o = Math.min(c, l)), a.options.responsive && a.options.responsive.length && null !== a.options.responsive) {
          for (n in s = null, a.breakpoints) a.breakpoints.hasOwnProperty(n) && (!1 === a.originalSettings.mobileFirst ? o < a.breakpoints[n] && (s = a.breakpoints[n]) : o > a.breakpoints[n] && (s = a.breakpoints[n]));
          null !== s ? null !== a.activeBreakpoint ? (s !== a.activeBreakpoint || i) && (a.activeBreakpoint = s, "unslick" === a.breakpointSettings[s] ? a.unslick(s) : (a.options = t.extend({}, a.originalSettings, a.breakpointSettings[s]), !0 === e && (a.currentSlide = a.options.initialSlide), a.refresh(e)), r = s) : (a.activeBreakpoint = s, "unslick" === a.breakpointSettings[s] ? a.unslick(s) : (a.options = t.extend({}, a.originalSettings, a.breakpointSettings[s]), !0 === e && (a.currentSlide = a.options.initialSlide), a.refresh(e)), r = s) : null !== a.activeBreakpoint && (a.activeBreakpoint = null, a.options = a.originalSettings, !0 === e && (a.currentSlide = a.options.initialSlide), a.refresh(e), r = s), e || !1 === r || a.$slider.trigger("breakpoint", [a, r])
      }
  }, e.prototype.changeSlide = function(e, i) {
      var n, s, o = this,
          a = t(e.currentTarget);
      switch (a.is("a") && e.preventDefault(), a.is("li") || (a = a.closest("li")), n = o.slideCount % o.options.slidesToScroll != 0 ? 0 : (o.slideCount - o.currentSlide) % o.options.slidesToScroll, e.data.message) {
          case "previous":
              s = 0 === n ? o.options.slidesToScroll : o.options.slidesToShow - n, o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide - s, !1, i);
              break;
          case "next":
              s = 0 === n ? o.options.slidesToScroll : n, o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide + s, !1, i);
              break;
          case "index":
              var r = 0 === e.data.index ? 0 : e.data.index || a.index() * o.options.slidesToScroll;
              o.slideHandler(o.checkNavigable(r), !1, i), a.children().trigger("focus");
              break;
          default:
              return
      }
  }, e.prototype.checkNavigable = function(t) {
      var e, i;
      if (i = 0, t > (e = this.getNavigableIndexes())[e.length - 1]) t = e[e.length - 1];
      else
          for (var n in e) {
              if (t < e[n]) {
                  t = i;
                  break
              }
              i = e[n]
          }
      return t
  }, e.prototype.cleanUpEvents = function() {
      var e = this;
      e.options.dots && null !== e.$dots && t("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", t.proxy(e.interrupt, e, !0)).off("mouseleave.slick", t.proxy(e.interrupt, e, !1)), e.$slider.off("focus.slick blur.slick"), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide)), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), t(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && t(e.$slideTrack).children().off("click.slick", e.selectHandler), t(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), t(window).off("resize.slick.slick-" + e.instanceUid, e.resize), t("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), t(window).off("load.slick.slick-" + e.instanceUid, e.setPosition), t(document).off("ready.slick.slick-" + e.instanceUid, e.setPosition)
  }, e.prototype.cleanUpSlideEvents = function() {
      var e = this;
      e.$list.off("mouseenter.slick", t.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", t.proxy(e.interrupt, e, !1))
  }, e.prototype.cleanUpRows = function() {
      var t, e = this;
      e.options.rows > 1 && ((t = e.$slides.children().children()).removeAttr("style"), e.$slider.empty().append(t))
  }, e.prototype.clickHandler = function(t) {
      !1 === this.shouldClick && (t.stopImmediatePropagation(), t.stopPropagation(), t.preventDefault())
  }, e.prototype.destroy = function(e) {
      var i = this;
      i.autoPlayClear(), i.touchObject = {}, i.cleanUpEvents(), t(".slick-cloned", i.$slider).detach(), i.$dots && i.$dots.remove(), i.$prevArrow && i.$prevArrow.length && (i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove()), i.$nextArrow && i.$nextArrow.length && (i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove()), i.$slides && (i.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
          t(this).attr("style", t(this).data("originalStyling"))
      }), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.detach(), i.$list.detach(), i.$slider.append(i.$slides)), i.cleanUpRows(), i.$slider.removeClass("slick-slider"), i.$slider.removeClass("slick-initialized"), i.$slider.removeClass("slick-dotted"), i.unslicked = !0, e || i.$slider.trigger("destroy", [i])
  }, e.prototype.disableTransition = function(t) {
      var e = this,
          i = {};
      i[e.transitionType] = "", !1 === e.options.fade ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i)
  }, e.prototype.fadeSlide = function(t, e) {
      var i = this;
      !1 === i.cssTransitions ? (i.$slides.eq(t).css({
          zIndex: i.options.zIndex
      }), i.$slides.eq(t).animate({
          opacity: 1
      }, i.options.speed, i.options.easing, e)) : (i.applyTransition(t), i.$slides.eq(t).css({
          opacity: 1,
          zIndex: i.options.zIndex
      }), e && setTimeout(function() {
          i.disableTransition(t), e.call()
      }, i.options.speed))
  }, e.prototype.fadeSlideOut = function(t) {
      var e = this;
      !1 === e.cssTransitions ? e.$slides.eq(t).animate({
          opacity: 0,
          zIndex: e.options.zIndex - 2
      }, e.options.speed, e.options.easing) : (e.applyTransition(t), e.$slides.eq(t).css({
          opacity: 0,
          zIndex: e.options.zIndex - 2
      }))
  }, e.prototype.filterSlides = e.prototype.slickFilter = function(t) {
      var e = this;
      null !== t && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(t).appendTo(e.$slideTrack), e.reinit())
  }, e.prototype.focusHandler = function() {
      var e = this;
      e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function(i) {
          i.stopImmediatePropagation();
          var n = t(this);
          setTimeout(function() {
              e.options.pauseOnFocus && (e.focussed = n.is(":focus"), e.autoPlay())
          }, 0)
      })
  }, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function() {
      return this.currentSlide
  }, e.prototype.getDotCount = function() {
      var t = this,
          e = 0,
          i = 0,
          n = 0;
      if (!0 === t.options.infinite)
          for (; e < t.slideCount;) ++n, e = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
      else if (!0 === t.options.centerMode) n = t.slideCount;
      else if (t.options.asNavFor)
          for (; e < t.slideCount;) ++n, e = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
      else n = 1 + Math.ceil((t.slideCount - t.options.slidesToShow) / t.options.slidesToScroll);
      return n - 1
  }, e.prototype.getLeft = function(t) {
      var e, i, n, s = this,
          o = 0;
      return s.slideOffset = 0, i = s.$slides.first().outerHeight(!0), !0 === s.options.infinite ? (s.slideCount > s.options.slidesToShow && (s.slideOffset = s.slideWidth * s.options.slidesToShow * -1, o = i * s.options.slidesToShow * -1), s.slideCount % s.options.slidesToScroll != 0 && t + s.options.slidesToScroll > s.slideCount && s.slideCount > s.options.slidesToShow && (t > s.slideCount ? (s.slideOffset = (s.options.slidesToShow - (t - s.slideCount)) * s.slideWidth * -1, o = (s.options.slidesToShow - (t - s.slideCount)) * i * -1) : (s.slideOffset = s.slideCount % s.options.slidesToScroll * s.slideWidth * -1, o = s.slideCount % s.options.slidesToScroll * i * -1))) : t + s.options.slidesToShow > s.slideCount && (s.slideOffset = (t + s.options.slidesToShow - s.slideCount) * s.slideWidth, o = (t + s.options.slidesToShow - s.slideCount) * i), s.slideCount <= s.options.slidesToShow && (s.slideOffset = 0, o = 0), !0 === s.options.centerMode && !0 === s.options.infinite ? s.slideOffset += s.slideWidth * Math.floor(s.options.slidesToShow / 2) - s.slideWidth : !0 === s.options.centerMode && (s.slideOffset = 0, s.slideOffset += s.slideWidth * Math.floor(s.options.slidesToShow / 2)), e = !1 === s.options.vertical ? t * s.slideWidth * -1 + s.slideOffset : t * i * -1 + o, !0 === s.options.variableWidth && (n = s.slideCount <= s.options.slidesToShow || !1 === s.options.infinite ? s.$slideTrack.children(".slick-slide").eq(t) : s.$slideTrack.children(".slick-slide").eq(t + s.options.slidesToShow), e = !0 === s.options.rtl ? n[0] ? -1 * (s.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, !0 === s.options.centerMode && (n = s.slideCount <= s.options.slidesToShow || !1 === s.options.infinite ? s.$slideTrack.children(".slick-slide").eq(t) : s.$slideTrack.children(".slick-slide").eq(t + s.options.slidesToShow + 1), e = !0 === s.options.rtl ? n[0] ? -1 * (s.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, e += (s.$list.width() - n.outerWidth()) / 2)), e
  }, e.prototype.getOption = e.prototype.slickGetOption = function(t) {
      return this.options[t]
  }, e.prototype.getNavigableIndexes = function() {
      var t, e = this,
          i = 0,
          n = 0,
          s = [];
      for (!1 === e.options.infinite ? t = e.slideCount : (i = -1 * e.options.slidesToScroll, n = -1 * e.options.slidesToScroll, t = 2 * e.slideCount); t > i;) s.push(i), i = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
      return s
  }, e.prototype.getSlick = function() {
      return this
  }, e.prototype.getSlideCount = function() {
      var e, i, n = this;
      return i = !0 === n.options.centerMode ? n.slideWidth * Math.floor(n.options.slidesToShow / 2) : 0, !0 === n.options.swipeToSlide ? (n.$slideTrack.find(".slick-slide").each(function(s, o) {
          return o.offsetLeft - i + t(o).outerWidth() / 2 > -1 * n.swipeLeft ? (e = o, !1) : void 0
      }), Math.abs(t(e).attr("data-slick-index") - n.currentSlide) || 1) : n.options.slidesToScroll
  }, e.prototype.goTo = e.prototype.slickGoTo = function(t, e) {
      this.changeSlide({
          data: {
              message: "index",
              index: parseInt(t)
          }
      }, e)
  }, e.prototype.init = function(e) {
      var i = this;
      t(i.$slider).hasClass("slick-initialized") || (t(i.$slider).addClass("slick-initialized"), i.buildRows(), i.buildOut(), i.setProps(), i.startLoad(), i.loadSlider(), i.initializeEvents(), i.updateArrows(), i.updateDots(), i.checkResponsive(!0), i.focusHandler()), e && i.$slider.trigger("init", [i]), !0 === i.options.accessibility && i.initADA(), i.options.autoplay && (i.paused = !1, i.autoPlay())
  }, e.prototype.initADA = function() {
      var e = this;
      e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
          "aria-hidden": "true",
          tabindex: "-1"
      }).find("a, input, button, select").attr({
          tabindex: "-1"
      }), e.$slideTrack.attr("role", "listbox"), e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(i) {
          t(this).attr({
              role: "option",
              "aria-describedby": "slick-slide" + e.instanceUid + i
          })
      }), null !== e.$dots && e.$dots.attr("role", "tablist").find("li").each(function(i) {
          t(this).attr({
              role: "presentation",
              "aria-selected": "false",
              "aria-controls": "navigation" + e.instanceUid + i,
              id: "slick-slide" + e.instanceUid + i
          })
      }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), e.activateADA()
  }, e.prototype.initArrowEvents = function() {
      var t = this;
      !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.off("click.slick").on("click.slick", {
          message: "previous"
      }, t.changeSlide), t.$nextArrow.off("click.slick").on("click.slick", {
          message: "next"
      }, t.changeSlide))
  }, e.prototype.initDotEvents = function() {
      var e = this;
      !0 === e.options.dots && e.slideCount > e.options.slidesToShow && t("li", e.$dots).on("click.slick", {
          message: "index"
      }, e.changeSlide), !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && t("li", e.$dots).on("mouseenter.slick", t.proxy(e.interrupt, e, !0)).on("mouseleave.slick", t.proxy(e.interrupt, e, !1))
  }, e.prototype.initSlideEvents = function() {
      var e = this;
      e.options.pauseOnHover && (e.$list.on("mouseenter.slick", t.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", t.proxy(e.interrupt, e, !1)))
  }, e.prototype.initializeEvents = function() {
      var e = this;
      e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {
          action: "start"
      }, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {
          action: "move"
      }, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {
          action: "end"
      }, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {
          action: "end"
      }, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), t(document).on(e.visibilityChange, t.proxy(e.visibility, e)), !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && t(e.$slideTrack).children().on("click.slick", e.selectHandler), t(window).on("orientationchange.slick.slick-" + e.instanceUid, t.proxy(e.orientationChange, e)), t(window).on("resize.slick.slick-" + e.instanceUid, t.proxy(e.resize, e)), t("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), t(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), t(document).on("ready.slick.slick-" + e.instanceUid, e.setPosition)
  }, e.prototype.initUI = function() {
      var t = this;
      !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.show(), t.$nextArrow.show()), !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.show()
  }, e.prototype.keyHandler = function(t) {
      var e = this;
      t.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === t.keyCode && !0 === e.options.accessibility ? e.changeSlide({
          data: {
              message: !0 === e.options.rtl ? "next" : "previous"
          }
      }) : 39 === t.keyCode && !0 === e.options.accessibility && e.changeSlide({
          data: {
              message: !0 === e.options.rtl ? "previous" : "next"
          }
      }))
  }, e.prototype.lazyLoad = function() {
      function e(e) {
          t("img[data-lazy]", e).each(function() {
              var e = t(this),
                  i = t(this).attr("data-lazy"),
                  n = document.createElement("img");
              n.onload = function() {
                  e.animate({
                      opacity: 0
                  }, 100, function() {
                      e.attr("src", i).animate({
                          opacity: 1
                      }, 200, function() {
                          e.removeAttr("data-lazy").removeClass("slick-loading")
                      }), s.$slider.trigger("lazyLoaded", [s, e, i])
                  })
              }, n.onerror = function() {
                  e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), s.$slider.trigger("lazyLoadError", [s, e, i])
              }, n.src = i
          })
      }
      var i, n, s = this;
      !0 === s.options.centerMode ? !0 === s.options.infinite ? n = (i = s.currentSlide + (s.options.slidesToShow / 2 + 1)) + s.options.slidesToShow + 2 : (i = Math.max(0, s.currentSlide - (s.options.slidesToShow / 2 + 1)), n = s.options.slidesToShow / 2 + 1 + 2 + s.currentSlide) : (i = s.options.infinite ? s.options.slidesToShow + s.currentSlide : s.currentSlide, n = Math.ceil(i + s.options.slidesToShow), !0 === s.options.fade && (i > 0 && i--, n <= s.slideCount && n++)), e(s.$slider.find(".slick-slide").slice(i, n)), s.slideCount <= s.options.slidesToShow ? e(s.$slider.find(".slick-slide")) : s.currentSlide >= s.slideCount - s.options.slidesToShow ? e(s.$slider.find(".slick-cloned").slice(0, s.options.slidesToShow)) : 0 === s.currentSlide && e(s.$slider.find(".slick-cloned").slice(-1 * s.options.slidesToShow))
  }, e.prototype.loadSlider = function() {
      var t = this;
      t.setPosition(), t.$slideTrack.css({
          opacity: 1
      }), t.$slider.removeClass("slick-loading"), t.initUI(), "progressive" === t.options.lazyLoad && t.progressiveLazyLoad()
  }, e.prototype.next = e.prototype.slickNext = function() {
      this.changeSlide({
          data: {
              message: "next"
          }
      })
  }, e.prototype.orientationChange = function() {
      this.checkResponsive(), this.setPosition()
  }, e.prototype.pause = e.prototype.slickPause = function() {
      this.autoPlayClear(), this.paused = !0
  }, e.prototype.play = e.prototype.slickPlay = function() {
      var t = this;
      t.autoPlay(), t.options.autoplay = !0, t.paused = !1, t.focussed = !1, t.interrupted = !1
  }, e.prototype.postSlide = function(t) {
      var e = this;
      e.unslicked || (e.$slider.trigger("afterChange", [e, t]), e.animating = !1, e.setPosition(), e.swipeLeft = null, e.options.autoplay && e.autoPlay(), !0 === e.options.accessibility && e.initADA())
  }, e.prototype.prev = e.prototype.slickPrev = function() {
      this.changeSlide({
          data: {
              message: "previous"
          }
      })
  }, e.prototype.preventDefault = function(t) {
      t.preventDefault()
  }, e.prototype.progressiveLazyLoad = function(e) {
      e = e || 1;
      var i, n, s, o = this,
          a = t("img[data-lazy]", o.$slider);
      a.length ? (i = a.first(), n = i.attr("data-lazy"), (s = document.createElement("img")).onload = function() {
          i.attr("src", n).removeAttr("data-lazy").removeClass("slick-loading"), !0 === o.options.adaptiveHeight && o.setPosition(), o.$slider.trigger("lazyLoaded", [o, i, n]), o.progressiveLazyLoad()
      }, s.onerror = function() {
          3 > e ? setTimeout(function() {
              o.progressiveLazyLoad(e + 1)
          }, 500) : (i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), o.$slider.trigger("lazyLoadError", [o, i, n]), o.progressiveLazyLoad())
      }, s.src = n) : o.$slider.trigger("allImagesLoaded", [o])
  }, e.prototype.refresh = function(e) {
      var i, n, s = this;
      n = s.slideCount - s.options.slidesToShow, !s.options.infinite && s.currentSlide > n && (s.currentSlide = n), s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0), i = s.currentSlide, s.destroy(!0), t.extend(s, s.initials, {
          currentSlide: i
      }), s.init(), e || s.changeSlide({
          data: {
              message: "index",
              index: i
          }
      }, !1)
  }, e.prototype.registerBreakpoints = function() {
      var e, i, n, s = this,
          o = s.options.responsive || null;
      if ("array" === t.type(o) && o.length) {
          for (e in s.respondTo = s.options.respondTo || "window", o)
              if (n = s.breakpoints.length - 1, i = o[e].breakpoint, o.hasOwnProperty(e)) {
                  for (; n >= 0;) s.breakpoints[n] && s.breakpoints[n] === i && s.breakpoints.splice(n, 1), n--;
                  s.breakpoints.push(i), s.breakpointSettings[i] = o[e].settings
              }
          s.breakpoints.sort(function(t, e) {
              return s.options.mobileFirst ? t - e : e - t
          })
      }
  }, e.prototype.reinit = function() {
      var e = this;
      e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), !0 === e.options.focusOnSelect && t(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e])
  }, e.prototype.resize = function() {
      var e = this;
      t(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function() {
          e.windowWidth = t(window).width(), e.checkResponsive(), e.unslicked || e.setPosition()
      }, 50))
  }, e.prototype.removeSlide = e.prototype.slickRemove = function(t, e, i) {
      var n = this;
      return "boolean" == typeof t ? t = !0 === (e = t) ? 0 : n.slideCount - 1 : t = !0 === e ? --t : t, !(n.slideCount < 1 || 0 > t || t > n.slideCount - 1) && (n.unload(), !0 === i ? n.$slideTrack.children().remove() : n.$slideTrack.children(this.options.slide).eq(t).remove(), n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.append(n.$slides), n.$slidesCache = n.$slides, void n.reinit())
  }, e.prototype.setCSS = function(t) {
      var e, i, n = this,
          s = {};
      !0 === n.options.rtl && (t = -t), e = "left" == n.positionProp ? Math.ceil(t) + "px" : "0px", i = "top" == n.positionProp ? Math.ceil(t) + "px" : "0px", s[n.positionProp] = t, !1 === n.transformsEnabled ? n.$slideTrack.css(s) : (s = {}, !1 === n.cssTransitions ? (s[n.animType] = "translate(" + e + ", " + i + ")", n.$slideTrack.css(s)) : (s[n.animType] = "translate3d(" + e + ", " + i + ", 0px)", n.$slideTrack.css(s)))
  }, e.prototype.setDimensions = function() {
      var t = this;
      !1 === t.options.vertical ? !0 === t.options.centerMode && t.$list.css({
          padding: "0px " + t.options.centerPadding
      }) : (t.$list.height(t.$slides.first().outerHeight(!0) * t.options.slidesToShow), !0 === t.options.centerMode && t.$list.css({
          padding: t.options.centerPadding + " 0px"
      })), t.listWidth = t.$list.width(), t.listHeight = t.$list.height(), !1 === t.options.vertical && !1 === t.options.variableWidth ? (t.slideWidth = Math.ceil(t.listWidth / t.options.slidesToShow), t.$slideTrack.width(Math.ceil(t.slideWidth * t.$slideTrack.children(".slick-slide").length))) : !0 === t.options.variableWidth ? t.$slideTrack.width(5e3 * t.slideCount) : (t.slideWidth = Math.ceil(t.listWidth), t.$slideTrack.height(Math.ceil(t.$slides.first().outerHeight(!0) * t.$slideTrack.children(".slick-slide").length)));
      var e = t.$slides.first().outerWidth(!0) - t.$slides.first().width();
      !1 === t.options.variableWidth && t.$slideTrack.children(".slick-slide").width(t.slideWidth - e)
  }, e.prototype.setFade = function() {
      var e, i = this;
      i.$slides.each(function(n, s) {
          e = i.slideWidth * n * -1, !0 === i.options.rtl ? t(s).css({
              position: "relative",
              right: e,
              top: 0,
              zIndex: i.options.zIndex - 2,
              opacity: 0
          }) : t(s).css({
              position: "relative",
              left: e,
              top: 0,
              zIndex: i.options.zIndex - 2,
              opacity: 0
          })
      }), i.$slides.eq(i.currentSlide).css({
          zIndex: i.options.zIndex - 1,
          opacity: 1
      })
  }, e.prototype.setHeight = function() {
      var t = this;
      if (1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical) {
          var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
          t.$list.css("height", e)
      }
  }, e.prototype.setOption = e.prototype.slickSetOption = function() {
      var e, i, n, s, o, a = this,
          r = !1;
      if ("object" === t.type(arguments[0]) ? (n = arguments[0], r = arguments[1], o = "multiple") : "string" === t.type(arguments[0]) && (n = arguments[0], s = arguments[1], r = arguments[2], "responsive" === arguments[0] && "array" === t.type(arguments[1]) ? o = "responsive" : void 0 !== arguments[1] && (o = "single")), "single" === o) a.options[n] = s;
      else if ("multiple" === o) t.each(n, function(t, e) {
          a.options[t] = e
      });
      else if ("responsive" === o)
          for (i in s)
              if ("array" !== t.type(a.options.responsive)) a.options.responsive = [s[i]];
              else {
                  for (e = a.options.responsive.length - 1; e >= 0;) a.options.responsive[e].breakpoint === s[i].breakpoint && a.options.responsive.splice(e, 1), e--;
                  a.options.responsive.push(s[i])
              }
      r && (a.unload(), a.reinit())
  }, e.prototype.setPosition = function() {
      var t = this;
      t.setDimensions(), t.setHeight(), !1 === t.options.fade ? t.setCSS(t.getLeft(t.currentSlide)) : t.setFade(), t.$slider.trigger("setPosition", [t])
  }, e.prototype.setProps = function() {
      var t = this,
          e = document.body.style;
      t.positionProp = !0 === t.options.vertical ? "top" : "left", "top" === t.positionProp ? t.$slider.addClass("slick-vertical") : t.$slider.removeClass("slick-vertical"), (void 0 !== e.WebkitTransition || void 0 !== e.MozTransition || void 0 !== e.msTransition) && !0 === t.options.useCSS && (t.cssTransitions = !0), t.options.fade && ("number" == typeof t.options.zIndex ? t.options.zIndex < 3 && (t.options.zIndex = 3) : t.options.zIndex = t.defaults.zIndex), void 0 !== e.OTransform && (t.animType = "OTransform", t.transformType = "-o-transform", t.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.MozTransform && (t.animType = "MozTransform", t.transformType = "-moz-transform", t.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (t.animType = !1)), void 0 !== e.webkitTransform && (t.animType = "webkitTransform", t.transformType = "-webkit-transform", t.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.msTransform && (t.animType = "msTransform", t.transformType = "-ms-transform", t.transitionType = "msTransition", void 0 === e.msTransform && (t.animType = !1)), void 0 !== e.transform && !1 !== t.animType && (t.animType = "transform", t.transformType = "transform", t.transitionType = "transition"), t.transformsEnabled = t.options.useTransform && null !== t.animType && !1 !== t.animType
  }, e.prototype.setSlideClasses = function(t) {
      var e, i, n, s, o = this;
      i = o.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), o.$slides.eq(t).addClass("slick-current"), !0 === o.options.centerMode ? (e = Math.floor(o.options.slidesToShow / 2), !0 === o.options.infinite && (t >= e && t <= o.slideCount - 1 - e ? o.$slides.slice(t - e, t + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (n = o.options.slidesToShow + t, i.slice(n - e + 1, n + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === t ? i.eq(i.length - 1 - o.options.slidesToShow).addClass("slick-center") : t === o.slideCount - 1 && i.eq(o.options.slidesToShow).addClass("slick-center")), o.$slides.eq(t).addClass("slick-center")) : t >= 0 && t <= o.slideCount - o.options.slidesToShow ? o.$slides.slice(t, t + o.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= o.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (s = o.slideCount % o.options.slidesToShow, n = !0 === o.options.infinite ? o.options.slidesToShow + t : t, o.options.slidesToShow == o.options.slidesToScroll && o.slideCount - t < o.options.slidesToShow ? i.slice(n - (o.options.slidesToShow - s), n + s).addClass("slick-active").attr("aria-hidden", "false") : i.slice(n, n + o.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === o.options.lazyLoad && o.lazyLoad()
  }, e.prototype.setupInfinite = function() {
      var e, i, n, s = this;
      if (!0 === s.options.fade && (s.options.centerMode = !1), !0 === s.options.infinite && !1 === s.options.fade && (i = null, s.slideCount > s.options.slidesToShow)) {
          for (n = !0 === s.options.centerMode ? s.options.slidesToShow + 1 : s.options.slidesToShow, e = s.slideCount; e > s.slideCount - n; e -= 1) i = e - 1, t(s.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i - s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");
          for (e = 0; n > e; e += 1) i = e, t(s.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i + s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");
          s.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
              t(this).attr("id", "")
          })
      }
  }, e.prototype.interrupt = function(t) {
      t || this.autoPlay(), this.interrupted = t
  }, e.prototype.selectHandler = function(e) {
      var i = this,
          n = t(e.target).is(".slick-slide") ? t(e.target) : t(e.target).parents(".slick-slide"),
          s = parseInt(n.attr("data-slick-index"));
      return s || (s = 0), i.slideCount <= i.options.slidesToShow ? (i.setSlideClasses(s), void i.asNavFor(s)) : void i.slideHandler(s)
  }, e.prototype.slideHandler = function(t, e, i) {
      var n, s, o, a, r, l = null,
          c = this;
      return e = e || !1, !0 === c.animating && !0 === c.options.waitForAnimate || !0 === c.options.fade && c.currentSlide === t || c.slideCount <= c.options.slidesToShow ? void 0 : (!1 === e && c.asNavFor(t), n = t, l = c.getLeft(n), a = c.getLeft(c.currentSlide), c.currentLeft = null === c.swipeLeft ? a : c.swipeLeft, !1 === c.options.infinite && !1 === c.options.centerMode && (0 > t || t > c.getDotCount() * c.options.slidesToScroll) ? void(!1 === c.options.fade && (n = c.currentSlide, !0 !== i ? c.animateSlide(a, function() {
          c.postSlide(n)
      }) : c.postSlide(n))) : !1 === c.options.infinite && !0 === c.options.centerMode && (0 > t || t > c.slideCount - c.options.slidesToScroll) ? void(!1 === c.options.fade && (n = c.currentSlide, !0 !== i ? c.animateSlide(a, function() {
          c.postSlide(n)
      }) : c.postSlide(n))) : (c.options.autoplay && clearInterval(c.autoPlayTimer), s = 0 > n ? c.slideCount % c.options.slidesToScroll != 0 ? c.slideCount - c.slideCount % c.options.slidesToScroll : c.slideCount + n : n >= c.slideCount ? c.slideCount % c.options.slidesToScroll != 0 ? 0 : n - c.slideCount : n, c.animating = !0, c.$slider.trigger("beforeChange", [c, c.currentSlide, s]), o = c.currentSlide, c.currentSlide = s, c.setSlideClasses(c.currentSlide), c.options.asNavFor && ((r = (r = c.getNavTarget()).slick("getSlick")).slideCount <= r.options.slidesToShow && r.setSlideClasses(c.currentSlide)), c.updateDots(), c.updateArrows(), !0 === c.options.fade ? (!0 !== i ? (c.fadeSlideOut(o), c.fadeSlide(s, function() {
          c.postSlide(s)
      })) : c.postSlide(s), void c.animateHeight()) : void(!0 !== i ? c.animateSlide(l, function() {
          c.postSlide(s)
      }) : c.postSlide(s))))
  }, e.prototype.startLoad = function() {
      var t = this;
      !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.hide(), t.$nextArrow.hide()), !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.hide(), t.$slider.addClass("slick-loading")
  }, e.prototype.swipeDirection = function() {
      var t, e, i, n, s = this;
      return t = s.touchObject.startX - s.touchObject.curX, e = s.touchObject.startY - s.touchObject.curY, i = Math.atan2(e, t), 0 > (n = Math.round(180 * i / Math.PI)) && (n = 360 - Math.abs(n)), 45 >= n && n >= 0 ? !1 === s.options.rtl ? "left" : "right" : 360 >= n && n >= 315 ? !1 === s.options.rtl ? "left" : "right" : n >= 135 && 225 >= n ? !1 === s.options.rtl ? "right" : "left" : !0 === s.options.verticalSwiping ? n >= 35 && 135 >= n ? "down" : "up" : "vertical"
  }, e.prototype.swipeEnd = function(t) {
      var e, i, n = this;
      if (n.dragging = !1, n.interrupted = !1, n.shouldClick = !(n.touchObject.swipeLength > 10), void 0 === n.touchObject.curX) return !1;
      if (!0 === n.touchObject.edgeHit && n.$slider.trigger("edge", [n, n.swipeDirection()]), n.touchObject.swipeLength >= n.touchObject.minSwipe) {
          switch (i = n.swipeDirection()) {
              case "left":
              case "down":
                  e = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide + n.getSlideCount()) : n.currentSlide + n.getSlideCount(), n.currentDirection = 0;
                  break;
              case "right":
              case "up":
                  e = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide - n.getSlideCount()) : n.currentSlide - n.getSlideCount(), n.currentDirection = 1
          }
          "vertical" != i && (n.slideHandler(e), n.touchObject = {}, n.$slider.trigger("swipe", [n, i]))
      } else n.touchObject.startX !== n.touchObject.curX && (n.slideHandler(n.currentSlide), n.touchObject = {})
  }, e.prototype.swipeHandler = function(t) {
      var e = this;
      if (!(!1 === e.options.swipe || "ontouchend" in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== t.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = t.originalEvent && void 0 !== t.originalEvent.touches ? t.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), t.data.action) {
          case "start":
              e.swipeStart(t);
              break;
          case "move":
              e.swipeMove(t);
              break;
          case "end":
              e.swipeEnd(t)
      }
  }, e.prototype.swipeMove = function(t) {
      var e, i, n, s, o, a = this;
      return o = void 0 !== t.originalEvent ? t.originalEvent.touches : null, !(!a.dragging || o && 1 !== o.length) && (e = a.getLeft(a.currentSlide), a.touchObject.curX = void 0 !== o ? o[0].pageX : t.clientX, a.touchObject.curY = void 0 !== o ? o[0].pageY : t.clientY, a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))), !0 === a.options.verticalSwiping && (a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2)))), "vertical" !== (i = a.swipeDirection()) ? (void 0 !== t.originalEvent && a.touchObject.swipeLength > 4 && t.preventDefault(), s = (!1 === a.options.rtl ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1), !0 === a.options.verticalSwiping && (s = a.touchObject.curY > a.touchObject.startY ? 1 : -1), n = a.touchObject.swipeLength, a.touchObject.edgeHit = !1, !1 === a.options.infinite && (0 === a.currentSlide && "right" === i || a.currentSlide >= a.getDotCount() && "left" === i) && (n = a.touchObject.swipeLength * a.options.edgeFriction, a.touchObject.edgeHit = !0), !1 === a.options.vertical ? a.swipeLeft = e + n * s : a.swipeLeft = e + n * (a.$list.height() / a.listWidth) * s, !0 === a.options.verticalSwiping && (a.swipeLeft = e + n * s), !0 !== a.options.fade && !1 !== a.options.touchMove && (!0 === a.animating ? (a.swipeLeft = null, !1) : void a.setCSS(a.swipeLeft))) : void 0)
  }, e.prototype.swipeStart = function(t) {
      var e, i = this;
      return i.interrupted = !0, 1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow ? (i.touchObject = {}, !1) : (void 0 !== t.originalEvent && void 0 !== t.originalEvent.touches && (e = t.originalEvent.touches[0]), i.touchObject.startX = i.touchObject.curX = void 0 !== e ? e.pageX : t.clientX, i.touchObject.startY = i.touchObject.curY = void 0 !== e ? e.pageY : t.clientY, void(i.dragging = !0))
  }, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function() {
      var t = this;
      null !== t.$slidesCache && (t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.appendTo(t.$slideTrack), t.reinit())
  }, e.prototype.unload = function() {
      var e = this;
      t(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
  }, e.prototype.unslick = function(t) {
      var e = this;
      e.$slider.trigger("unslick", [e, t]), e.destroy()
  }, e.prototype.updateArrows = function() {
      var t = this;
      Math.floor(t.options.slidesToShow / 2), !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && !t.options.infinite && (t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === t.currentSlide ? (t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - t.options.slidesToShow && !1 === t.options.centerMode ? (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - 1 && !0 === t.options.centerMode && (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
  }, e.prototype.updateDots = function() {
      var t = this;
      null !== t.$dots && (t.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), t.$dots.find("li").eq(Math.floor(t.currentSlide / t.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
  }, e.prototype.visibility = function() {
      var t = this;
      t.options.autoplay && (document[t.hidden] ? t.interrupted = !0 : t.interrupted = !1)
  }, t.fn.slick = function() {
      var t, i, n = this,
          s = arguments[0],
          o = Array.prototype.slice.call(arguments, 1),
          a = n.length;
      for (t = 0; a > t; t++)
          if ("object" == typeof s || void 0 === s ? n[t].slick = new e(n[t], s) : i = n[t].slick[s].apply(n[t].slick, o), void 0 !== i) return i;
      return n
  }
}),
function(t, e, i, n) {
  "use strict";

  function s(t) {
      var e = t.currentTarget,
          n = t.data ? t.data.options : {},
          s = n.selector ? i(n.selector) : t.data ? t.data.items : [],
          o = i(e).attr("data-fancybox") || "",
          a = 0,
          r = i.fancybox.getInstance();
      t.preventDefault(), t.stopPropagation(), r && r.current.opts.$orig.is(e) || (o ? (a = (s = s.length ? s.filter('[data-fancybox="' + o + '"]') : i('[data-fancybox="' + o + '"]')).index(e)) < 0 && (a = 0) : s = [e], i.fancybox.open(s, n, a))
  }
  if (i) {
      if (i.fn.fancybox) return void i.error("fancyBox already initialized");
      var o = {
              loop: !1,
              margin: [44, 0],
              gutter: 50,
              keyboard: !0,
              arrows: !0,
              infobar: !1,
              toolbar: !0,
              buttons: ["slideShow", "fullScreen", "thumbs", "close"],
              idleTime: 4,
              smallBtn: "auto",
              protect: !1,
              modal: !1,
              image: {
                  preload: "auto"
              },
              ajax: {
                  settings: {
                      data: {
                          fancybox: !0
                      }
                  }
              },
              iframe: {
                  tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen allowtransparency="true" src=""></iframe>',
                  preload: !0,
                  css: {},
                  attr: {
                      scrolling: "auto"
                  }
              },
              animationEffect: "zoom",
              animationDuration: 366,
              zoomOpacity: "auto",
              transitionEffect: "fade",
              transitionDuration: 366,
              slideClass: "",
              baseClass: "",
              baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><button data-fancybox-prev title="{{PREV}}" class="fancybox-button fancybox-button--left"></button><div class="fancybox-infobar__body"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><button data-fancybox-next title="{{NEXT}}" class="fancybox-button fancybox-button--right"></button></div><div class="fancybox-toolbar">{{BUTTONS}}</div><div class="fancybox-navigation"><button data-fancybox-prev title="{{PREV}}" class="fancybox-arrow fancybox-arrow--left" /><button data-fancybox-next title="{{NEXT}}" class="fancybox-arrow fancybox-arrow--right" /></div><div class="fancybox-stage"></div><div class="fancybox-caption-wrap"><div class="fancybox-caption"></div></div></div></div>',
              spinnerTpl: '<div class="fancybox-loading"></div>',
              errorTpl: '<div class="fancybox-error"><p>{{ERROR}}<p></div>',
              btnTpl: {
                  slideShow: '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"></button>',
                  fullScreen: '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fullscreen" title="{{FULL_SCREEN}}"></button>',
                  thumbs: '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"></button>',
                  close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"></button>',
                  smallBtn: '<button data-fancybox-close class="fancybox-close-small" title="{{CLOSE}}"></button>'
              },
              parentEl: "body",
              autoFocus: !0,
              backFocus: !0,
              trapFocus: !0,
              fullScreen: {
                  autoStart: !1
              },
              touch: {
                  vertical: !0,
                  momentum: !0
              },
              hash: null,
              media: {},
              slideShow: {
                  autoStart: !1,
                  speed: 4e3
              },
              thumbs: {
                  autoStart: !1,
                  hideOnClose: !0
              },
              onInit: i.noop,
              beforeLoad: i.noop,
              afterLoad: i.noop,
              beforeShow: i.noop,
              afterShow: i.noop,
              beforeClose: i.noop,
              afterClose: i.noop,
              onActivate: i.noop,
              onDeactivate: i.noop,
              clickContent: function(t, e) {
                  return "image" === t.type && "zoom"
              },
              clickSlide: "close",
              clickOutside: "close",
              dblclickContent: !1,
              dblclickSlide: !1,
              dblclickOutside: !1,
              mobile: {
                  clickContent: function(t, e) {
                      return "image" === t.type && "toggleControls"
                  },
                  clickSlide: function(t, e) {
                      return "image" === t.type ? "toggleControls" : "close"
                  },
                  dblclickContent: function(t, e) {
                      return "image" === t.type && "zoom"
                  },
                  dblclickSlide: function(t, e) {
                      return "image" === t.type && "zoom"
                  }
              },
              lang: "en",
              i18n: {
                  en: {
                      CLOSE: "Close",
                      NEXT: "Next",
                      PREV: "Previous",
                      ERROR: "The requested content cannot be loaded. <br/> Please try again later.",
                      PLAY_START: "Start slideshow",
                      PLAY_STOP: "Pause slideshow",
                      FULL_SCREEN: "Full screen",
                      THUMBS: "Thumbnails"
                  },
                  de: {
                      CLOSE: "Schliessen",
                      NEXT: "Weiter",
                      PREV: "ZurÃ¼ck",
                      ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es spÃ¤ter nochmal.",
                      PLAY_START: "Diaschau starten",
                      PLAY_STOP: "Diaschau beenden",
                      FULL_SCREEN: "Vollbild",
                      THUMBS: "Vorschaubilder"
                  }
              }
          },
          a = i(t),
          r = i(e),
          l = 0,
          c = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || function(e) {
              return t.setTimeout(e, 1e3 / 60)
          },
          h = function() {
              var t, i = e.createElement("fakeelement"),
                  s = {
                      transition: "transitionend",
                      OTransition: "oTransitionEnd",
                      MozTransition: "transitionend",
                      WebkitTransition: "webkitTransitionEnd"
                  };
              for (t in s)
                  if (i.style[t] !== n) return s[t]
          }(),
          u = function(t) {
              return t && t.length && t[0].offsetHeight
          },
          d = function(t, n, s) {
              var a = this;
              a.opts = i.extend(!0, {
                  index: s
              }, o, n || {}), n && i.isArray(n.buttons) && (a.opts.buttons = n.buttons), a.id = a.opts.id || ++l, a.group = [], a.currIndex = parseInt(a.opts.index, 10) || 0, a.prevIndex = null, a.prevPos = null, a.currPos = 0, a.firstRun = null, a.createGroup(t), a.group.length && (a.$lastFocus = i(e.activeElement).blur(), a.slides = {}, a.init(t))
          };
      i.extend(d.prototype, {
          init: function() {
              var t, e, n, s = this,
                  o = s.group[s.currIndex].opts;
              s.scrollTop = r.scrollTop(), s.scrollLeft = r.scrollLeft(), i.fancybox.getInstance() || i.fancybox.isMobile || "hidden" === i("body").css("overflow") || (t = i("body").width(), i("html").addClass("fancybox-enabled"), (t = i("body").width() - t) > 1 && i("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar, .fancybox-enabled body { margin-right: ' + t + "px; }</style>")), n = "", i.each(o.buttons, function(t, e) {
                  n += o.btnTpl[e] || ""
              }), e = i(s.translate(s, o.baseTpl.replace("{{BUTTONS}}", n))).addClass("fancybox-is-hidden").attr("id", "fancybox-container-" + s.id).addClass(o.baseClass).data("FancyBox", s).prependTo(o.parentEl), s.$refs = {
                  container: e
              }, ["bg", "inner", "infobar", "toolbar", "stage", "caption"].forEach(function(t) {
                  s.$refs[t] = e.find(".fancybox-" + t)
              }), (!o.arrows || s.group.length < 2) && e.find(".fancybox-navigation").remove(), o.infobar || s.$refs.infobar.remove(), o.toolbar || s.$refs.toolbar.remove(), s.trigger("onInit"), s.activate(), s.jumpTo(s.currIndex)
          },
          translate: function(t, e) {
              var i = t.opts.i18n[t.opts.lang];
              return e.replace(/\{\{(\w+)\}\}/g, function(t, e) {
                  var s = i[e];
                  return s === n ? t : s
              })
          },
          createGroup: function(t) {
              var e = this,
                  s = i.makeArray(t);
              i.each(s, function(t, s) {
                  var o, a, r, l, c = {},
                      h = {},
                      u = [];
                  i.isPlainObject(s) ? (c = s, h = s.opts || s) : "object" === i.type(s) && i(s).length ? (o = i(s), u = o.data(), h = "options" in u ? u.options : {}, h = "object" === i.type(h) ? h : {}, c.src = "src" in u ? u.src : h.src || o.attr("href"), ["width", "height", "thumb", "type", "filter"].forEach(function(t) {
                      t in u && (h[t] = u[t])
                  }), "srcset" in u && (h.image = {
                      srcset: u.srcset
                  }), h.$orig = o, c.type || c.src || (c.type = "inline", c.src = s)) : c = {
                      type: "html",
                      src: s + ""
                  }, c.opts = i.extend(!0, {}, e.opts, h), i.fancybox.isMobile && (c.opts = i.extend(!0, {}, c.opts, c.opts.mobile)), a = c.type || c.opts.type, r = c.src || "", !a && r && (r.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? a = "image" : r.match(/\.(pdf)((\?|#).*)?$/i) ? a = "pdf" : "#" === r.charAt(0) && (a = "inline")), c.type = a, c.index = e.group.length, c.opts.$orig && !c.opts.$orig.length && delete c.opts.$orig, !c.opts.$thumb && c.opts.$orig && (c.opts.$thumb = c.opts.$orig.find("img:first")), c.opts.$thumb && !c.opts.$thumb.length && delete c.opts.$thumb, "function" === i.type(c.opts.caption) ? c.opts.caption = c.opts.caption.apply(s, [e, c]) : "caption" in u && (c.opts.caption = u.caption), c.opts.caption = c.opts.caption === n ? "" : c.opts.caption + "", "ajax" === a && ((l = r.split(/\s+/, 2)).length > 1 && (c.src = l.shift(), c.opts.filter = l.shift())), "auto" == c.opts.smallBtn && (i.inArray(a, ["html", "inline", "ajax"]) > -1 ? (c.opts.toolbar = !1, c.opts.smallBtn = !0) : c.opts.smallBtn = !1), "pdf" === a && (c.type = "iframe", c.opts.iframe.preload = !1), c.opts.modal && (c.opts = i.extend(!0, c.opts, {
                      infobar: 0,
                      toolbar: 0,
                      smallBtn: 0,
                      keyboard: 0,
                      slideShow: 0,
                      fullScreen: 0,
                      thumbs: 0,
                      touch: 0,
                      clickContent: !1,
                      clickSlide: !1,
                      clickOutside: !1,
                      dblclickContent: !1,
                      dblclickSlide: !1,
                      dblclickOutside: !1
                  })), e.group.push(c)
              })
          },
          addEvents: function() {
              var n = this;
              n.removeEvents(), n.$refs.container.on("click.fb-close", "[data-fancybox-close]", function(t) {
                  t.stopPropagation(), t.preventDefault(), n.close(t)
              }).on("click.fb-prev touchend.fb-prev", "[data-fancybox-prev]", function(t) {
                  t.stopPropagation(), t.preventDefault(), n.previous()
              }).on("click.fb-next touchend.fb-next", "[data-fancybox-next]", function(t) {
                  t.stopPropagation(), t.preventDefault(), n.next()
              }), a.on("orientationchange.fb resize.fb", function(t) {
                  t && t.originalEvent && "resize" === t.originalEvent.type ? c(function() {
                      n.update()
                  }) : (n.$refs.stage.hide(), setTimeout(function() {
                      n.$refs.stage.show(), n.update()
                  }, 500))
              }), r.on("focusin.fb", function(t) {
                  var s = i.fancybox ? i.fancybox.getInstance() : null;
                  s.isClosing || !s.current || !s.current.opts.trapFocus || i(t.target).hasClass("fancybox-container") || i(t.target).is(e) || s && "fixed" !== i(t.target).css("position") && !s.$refs.container.has(t.target).length && (t.stopPropagation(), s.focus(), a.scrollTop(n.scrollTop).scrollLeft(n.scrollLeft))
              }), r.on("keydown.fb", function(t) {
                  var e = n.current,
                      s = t.keyCode || t.which;
                  if (e && e.opts.keyboard && !i(t.target).is("input") && !i(t.target).is("textarea")) return 8 === s || 27 === s ? (t.preventDefault(), void n.close(t)) : 37 === s || 38 === s ? (t.preventDefault(), void n.previous()) : 39 === s || 40 === s ? (t.preventDefault(), void n.next()) : void n.trigger("afterKeydown", t, s)
              }), n.group[n.currIndex].opts.idleTime && (n.idleSecondsCounter = 0, r.on("mousemove.fb-idle mouseenter.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle", function() {
                  n.idleSecondsCounter = 0, n.isIdle && n.showControls(), n.isIdle = !1
              }), n.idleInterval = t.setInterval(function() {
                  n.idleSecondsCounter++, n.idleSecondsCounter >= n.group[n.currIndex].opts.idleTime && (n.isIdle = !0, n.idleSecondsCounter = 0, n.hideControls())
              }, 1e3))
          },
          removeEvents: function() {
              var e = this;
              a.off("orientationchange.fb resize.fb"), r.off("focusin.fb keydown.fb .fb-idle"), this.$refs.container.off(".fb-close .fb-prev .fb-next"), e.idleInterval && (t.clearInterval(e.idleInterval), e.idleInterval = null)
          },
          previous: function(t) {
              return this.jumpTo(this.currPos - 1, t)
          },
          next: function(t) {
              return this.jumpTo(this.currPos + 1, t)
          },
          jumpTo: function(t, e, s) {
              var o, a, r, l, c, h, d, p = this,
                  f = p.group.length;
              if (!(p.isSliding || p.isClosing || p.isAnimating && p.firstRun)) {
                  if (t = parseInt(t, 10), !(a = p.current ? p.current.opts.loop : p.opts.loop) && (t < 0 || t >= f)) return !1;
                  if (o = p.firstRun = null === p.firstRun, !(f < 2 && !o && p.isSliding)) {
                      if (l = p.current, p.prevIndex = p.currIndex, p.prevPos = p.currPos, r = p.createSlide(t), f > 1 && ((a || r.index > 0) && p.createSlide(t - 1), (a || r.index < f - 1) && p.createSlide(t + 1)), p.current = r, p.currIndex = r.index, p.currPos = r.pos, p.trigger("beforeShow", o), p.updateControls(), h = i.fancybox.getTranslate(r.$slide), r.isMoved = (0 !== h.left || 0 !== h.top) && !r.$slide.hasClass("fancybox-animated"), r.forcedDuration = n, i.isNumeric(e) ? r.forcedDuration = e : e = r.opts[o ? "animationDuration" : "transitionDuration"], e = parseInt(e, 10), o) return r.opts.animationEffect && e && p.$refs.container.css("transition-duration", e + "ms"), p.$refs.container.removeClass("fancybox-is-hidden"), u(p.$refs.container), p.$refs.container.addClass("fancybox-is-open"), r.$slide.addClass("fancybox-slide--current"), p.loadSlide(r), void p.preload();
                      i.each(p.slides, function(t, e) {
                          i.fancybox.stop(e.$slide)
                      }), r.$slide.removeClass("fancybox-slide--next fancybox-slide--previous").addClass("fancybox-slide--current"), r.isMoved ? (c = Math.round(r.$slide.width()), i.each(p.slides, function(t, n) {
                          var s = n.pos - r.pos;
                          i.fancybox.animate(n.$slide, {
                              top: 0,
                              left: s * c + s * n.opts.gutter
                          }, e, function() {
                              n.$slide.removeAttr("style").removeClass("fancybox-slide--next fancybox-slide--previous"), n.pos === p.currPos && (r.isMoved = !1, p.complete())
                          })
                      })) : p.$refs.stage.children().removeAttr("style"), r.isLoaded ? p.revealContent(r) : p.loadSlide(r), p.preload(), l.pos !== r.pos && (d = "fancybox-slide--" + (l.pos > r.pos ? "next" : "previous"), l.$slide.removeClass("fancybox-slide--complete fancybox-slide--current fancybox-slide--next fancybox-slide--previous"), l.isComplete = !1, e && (r.isMoved || r.opts.transitionEffect) && (r.isMoved ? l.$slide.addClass(d) : (d = "fancybox-animated " + d + " fancybox-fx-" + r.opts.transitionEffect, i.fancybox.animate(l.$slide, d, e, function() {
                          l.$slide.removeClass(d).removeAttr("style")
                      }))))
                  }
              }
          },
          createSlide: function(t) {
              var e, n, s = this;
              return n = (n = t % s.group.length) < 0 ? s.group.length + n : n, !s.slides[t] && s.group[n] && (e = i('<div class="fancybox-slide"></div>').appendTo(s.$refs.stage), s.slides[t] = i.extend(!0, {}, s.group[n], {
                  pos: t,
                  $slide: e,
                  isLoaded: !1
              }), s.updateSlide(s.slides[t])), s.slides[t]
          },
          scaleToActual: function(t, e, s) {
              var o, a, r, l, c, h = this,
                  u = h.current,
                  d = u.$content,
                  p = parseInt(u.$slide.width(), 10),
                  f = parseInt(u.$slide.height(), 10),
                  m = u.width,
                  g = u.height;
              "image" != u.type || u.hasError || !d || h.isAnimating || (i.fancybox.stop(d), h.isAnimating = !0, t = t === n ? .5 * p : t, e = e === n ? .5 * f : e, l = m / (o = i.fancybox.getTranslate(d)).width, c = g / o.height, a = .5 * p - .5 * m, r = .5 * f - .5 * g, m > p && ((a = o.left * l - (t * l - t)) > 0 && (a = 0), a < p - m && (a = p - m)), g > f && ((r = o.top * c - (e * c - e)) > 0 && (r = 0), r < f - g && (r = f - g)), h.updateCursor(m, g), i.fancybox.animate(d, {
                  top: r,
                  left: a,
                  scaleX: l,
                  scaleY: c
              }, s || 330, function() {
                  h.isAnimating = !1
              }), h.SlideShow && h.SlideShow.isActive && h.SlideShow.stop())
          },
          scaleToFit: function(t) {
              var e, n = this,
                  s = n.current,
                  o = s.$content;
              "image" != s.type || s.hasError || !o || n.isAnimating || (i.fancybox.stop(o), n.isAnimating = !0, e = n.getFitPos(s), n.updateCursor(e.width, e.height), i.fancybox.animate(o, {
                  top: e.top,
                  left: e.left,
                  scaleX: e.width / o.width(),
                  scaleY: e.height / o.height()
              }, t || 330, function() {
                  n.isAnimating = !1
              }))
          },
          getFitPos: function(t) {
              var e, n, s, o, r, l = t.$content,
                  c = t.width,
                  h = t.height,
                  u = t.opts.margin;
              return !(!l || !l.length || !c && !h) && ("number" === i.type(u) && (u = [u, u]), 2 == u.length && (u = [u[0], u[1], u[0], u[1]]), a.width() < 800 && (u = [0, 0, 0, 0]), e = parseInt(this.$refs.stage.width(), 10) - (u[1] + u[3]), n = parseInt(this.$refs.stage.height(), 10) - (u[0] + u[2]), s = Math.min(1, e / c, n / h), o = Math.floor(s * c), r = Math.floor(s * h), {
                  top: Math.floor(.5 * (n - r)) + u[0],
                  left: Math.floor(.5 * (e - o)) + u[3],
                  width: o,
                  height: r
              })
          },
          update: function() {
              var t = this;
              i.each(t.slides, function(e, i) {
                  t.updateSlide(i)
              })
          },
          updateSlide: function(t) {
              var e = this,
                  n = t.$content;
              n && (t.width || t.height) && (i.fancybox.stop(n), i.fancybox.setTranslate(n, e.getFitPos(t)), t.pos === e.currPos && e.updateCursor()), t.$slide.trigger("refresh"), e.trigger("onUpdate", t)
          },
          updateCursor: function(t, e) {
              var i = this,
                  s = i.$refs.container.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-drag fancybox-can-zoomOut");
              i.current && !i.isClosing && (i.isZoomable() ? (s.addClass("fancybox-is-zoomable"), (t !== n && e !== n ? t < i.current.width && e < i.current.height : i.isScaledDown()) ? s.addClass("fancybox-can-zoomIn") : i.current.opts.touch ? s.addClass("fancybox-can-drag") : s.addClass("fancybox-can-zoomOut")) : i.current.opts.touch && s.addClass("fancybox-can-drag"))
          },
          isZoomable: function() {
              var t, e = this,
                  n = e.current;
              if (n && !e.isClosing) return !!("image" === n.type && n.isLoaded && !n.hasError && ("zoom" === n.opts.clickContent || i.isFunction(n.opts.clickContent) && "zoom" === n.opts.clickContent(n)) && (t = e.getFitPos(n), n.width > t.width || n.height > t.height))
          },
          isScaledDown: function() {
              var t = this.current,
                  e = t.$content,
                  n = !1;
              return e && (n = (n = i.fancybox.getTranslate(e)).width < t.width || n.height < t.height), n
          },
          canPan: function() {
              var t = this.current,
                  e = t.$content,
                  i = !1;
              return e && (i = this.getFitPos(t), i = Math.abs(e.width() - i.width) > 1 || Math.abs(e.height() - i.height) > 1), i
          },
          loadSlide: function(t) {
              var e, n, s, o = this;
              if (!t.isLoading && !t.isLoaded) {
                  switch (t.isLoading = !0, o.trigger("beforeLoad", t), e = t.type, (n = t.$slide).off("refresh").trigger("onReset").addClass("fancybox-slide--" + (e || "unknown")).addClass(t.opts.slideClass), e) {
                      case "image":
                          o.setImage(t);
                          break;
                      case "iframe":
                          o.setIframe(t);
                          break;
                      case "html":
                          o.setContent(t, t.src || t.content);
                          break;
                      case "inline":
                          i(t.src).length ? o.setContent(t, i(t.src)) : o.setError(t);
                          break;
                      case "ajax":
                          o.showLoading(t), s = i.ajax(i.extend({}, t.opts.ajax.settings, {
                              url: t.src,
                              success: function(e, i) {
                                  "success" === i && o.setContent(t, e)
                              },
                              error: function(e, i) {
                                  e && "abort" !== i && o.setError(t)
                              }
                          })), n.one("onReset", function() {
                              s.abort()
                          });
                          break;
                      default:
                          o.setError(t)
                  }
                  return !0
              }
          },
          setImage: function(e) {
              var n, s, o, a, r = this,
                  l = e.opts.image.srcset;
              if (l) {
                  o = t.devicePixelRatio || 1, a = t.innerWidth * o, (s = l.split(",").map(function(t) {
                      var e = {};
                      return t.trim().split(/\s+/).forEach(function(t, i) {
                          var n = parseInt(t.substring(0, t.length - 1), 10);
                          return 0 === i ? e.url = t : void(n && (e.value = n, e.postfix = t[t.length - 1]))
                      }), e
                  })).sort(function(t, e) {
                      return t.value - e.value
                  });
                  for (var c = 0; c < s.length; c++) {
                      var h = s[c];
                      if ("w" === h.postfix && h.value >= a || "x" === h.postfix && h.value >= o) {
                          n = h;
                          break
                      }
                  }!n && s.length && (n = s[s.length - 1]), n && (e.src = n.url, e.width && e.height && "w" == n.postfix && (e.height = e.width / e.height * n.value, e.width = n.value))
              }
              e.$content = i('<div class="fancybox-image-wrap"></div>').addClass("fancybox-is-hidden").appendTo(e.$slide), !1 !== e.opts.preload && e.opts.width && e.opts.height && (e.opts.thumb || e.opts.$thumb) ? (e.width = e.opts.width, e.height = e.opts.height, e.$ghost = i("<img />").one("error", function() {
                  i(this).remove(), e.$ghost = null, r.setBigImage(e)
              }).one("load", function() {
                  r.afterLoad(e), r.setBigImage(e)
              }).addClass("fancybox-image").appendTo(e.$content).attr("src", e.opts.thumb || e.opts.$thumb.attr("src"))) : r.setBigImage(e)
          },
          setBigImage: function(t) {
              var e = this,
                  n = i("<img />");
              t.$image = n.one("error", function() {
                  e.setError(t)
              }).one("load", function() {
                  clearTimeout(t.timouts), t.timouts = null, e.isClosing || (t.width = this.naturalWidth, t.height = this.naturalHeight, t.opts.image.srcset && n.attr("sizes", "100vw").attr("srcset", t.opts.image.srcset), e.hideLoading(t), t.$ghost ? t.timouts = setTimeout(function() {
                      t.timouts = null, t.$ghost.hide()
                  }, Math.min(300, Math.max(1e3, t.height / 1600))) : e.afterLoad(t))
              }).addClass("fancybox-image").attr("src", t.src).appendTo(t.$content), n[0].complete ? n.trigger("load") : n[0].error ? n.trigger("error") : t.timouts = setTimeout(function() {
                  n[0].complete || t.hasError || e.showLoading(t)
              }, 100)
          },
          setIframe: function(t) {
              var e, s = this,
                  o = t.opts.iframe,
                  a = t.$slide;
              t.$content = i('<div class="fancybox-content' + (o.preload ? " fancybox-is-hidden" : "") + '"></div>').css(o.css).appendTo(a), e = i(o.tpl.replace(/\{rnd\}/g, (new Date).getTime())).attr(o.attr).appendTo(t.$content), o.preload ? (s.showLoading(t), e.on("load.fb error.fb", function(e) {
                  this.isReady = 1, t.$slide.trigger("refresh"), s.afterLoad(t)
              }), a.on("refresh.fb", function() {
                  var i, s, a, r, l = t.$content;
                  if (1 === e[0].isReady) {
                      try {
                          i = e.contents().find("body")
                      } catch (t) {}
                      i && i.length && (o.css.width === n || o.css.height === n) && (s = e[0].contentWindow.document.documentElement.scrollWidth, a = Math.ceil(i.outerWidth(!0) + (l.width() - s)), r = Math.ceil(i.outerHeight(!0)), l.css({
                          width: o.css.width === n ? a + (l.outerWidth() - l.innerWidth()) : o.css.width,
                          height: o.css.height === n ? r + (l.outerHeight() - l.innerHeight()) : o.css.height
                      })), l.removeClass("fancybox-is-hidden")
                  }
              })) : this.afterLoad(t), e.attr("src", t.src), !0 === t.opts.smallBtn && t.$content.prepend(s.translate(t, t.opts.btnTpl.smallBtn)), a.one("onReset", function() {
                  try {
                      i(this).find("iframe").hide().attr("src", "//about:blank")
                  } catch (t) {}
                  i(this).empty(), t.isLoaded = !1
              })
          },
          setContent: function(t, e) {
              var n = this;
              n.isClosing || (n.hideLoading(t), t.$slide.empty(), function(t) {
                  return t && t.hasOwnProperty && t instanceof i
              }(e) && e.parent().length ? (e.parent(".fancybox-slide--inline").trigger("onReset"), t.$placeholder = i("<div></div>").hide().insertAfter(e), e.css("display", "inline-block")) : t.hasError || ("string" === i.type(e) && (3 === (e = i("<div>").append(i.trim(e)).contents())[0].nodeType && (e = i("<div>").html(e))), t.opts.filter && (e = i("<div>").html(e).find(t.opts.filter))), t.$slide.one("onReset", function() {
                  t.$placeholder && (t.$placeholder.after(e.hide()).remove(), t.$placeholder = null), t.$smallBtn && (t.$smallBtn.remove(), t.$smallBtn = null), t.hasError || (i(this).empty(), t.isLoaded = !1)
              }), t.$content = i(e).appendTo(t.$slide), t.opts.smallBtn && !t.$smallBtn && (t.$smallBtn = i(n.translate(t, t.opts.btnTpl.smallBtn)).appendTo(t.$content)), this.afterLoad(t))
          },
          setError: function(t) {
              t.hasError = !0, t.$slide.removeClass("fancybox-slide--" + t.type), this.setContent(t, this.translate(t, t.opts.errorTpl))
          },
          showLoading: function(t) {
              (t = t || this.current) && !t.$spinner && (t.$spinner = i(this.opts.spinnerTpl).appendTo(t.$slide))
          },
          hideLoading: function(t) {
              (t = t || this.current) && t.$spinner && (t.$spinner.remove(), delete t.$spinner)
          },
          afterLoad: function(t) {
              var e = this;
              e.isClosing || (t.isLoading = !1, t.isLoaded = !0, e.trigger("afterLoad", t), e.hideLoading(t), t.opts.protect && t.$content && !t.hasError && (t.$content.on("contextmenu.fb", function(t) {
                  return 2 == t.button && t.preventDefault(), !0
              }), "image" === t.type && i('<div class="fancybox-spaceball"></div>').appendTo(t.$content)), e.revealContent(t))
          },
          revealContent: function(t) {
              var e, s, o, a, r, l = this,
                  c = t.$slide,
                  h = !1;
              return e = t.opts[l.firstRun ? "animationEffect" : "transitionEffect"], o = t.opts[l.firstRun ? "animationDuration" : "transitionDuration"], o = parseInt(t.forcedDuration === n ? o : t.forcedDuration, 10), !t.isMoved && t.pos === l.currPos && o || (e = !1), "zoom" !== e || t.pos === l.currPos && o && "image" === t.type && !t.hasError && (h = l.getThumbPos(t)) || (e = "fade"), "zoom" === e ? ((r = l.getFitPos(t)).scaleX = r.width / h.width, r.scaleY = r.height / h.height, delete r.width, delete r.height, "auto" == (a = t.opts.zoomOpacity) && (a = Math.abs(t.width / t.height - h.width / h.height) > .1), a && (h.opacity = .1, r.opacity = 1), i.fancybox.setTranslate(t.$content.removeClass("fancybox-is-hidden"), h), u(t.$content), void i.fancybox.animate(t.$content, r, o, function() {
                  l.complete()
              })) : (l.updateSlide(t), e ? (i.fancybox.stop(c), s = "fancybox-animated fancybox-slide--" + (t.pos > l.prevPos ? "next" : "previous") + " fancybox-fx-" + e, c.removeAttr("style").removeClass("fancybox-slide--current fancybox-slide--next fancybox-slide--previous").addClass(s), t.$content.removeClass("fancybox-is-hidden"), u(c), void i.fancybox.animate(c, "fancybox-slide--current", o, function(e) {
                  c.removeClass(s).removeAttr("style"), t.pos === l.currPos && l.complete()
              }, !0)) : (u(c), t.$content.removeClass("fancybox-is-hidden"), void(t.pos === l.currPos && l.complete())))
          },
          getThumbPos: function(n) {
              var s, o = !1,
                  a = n.opts.$thumb,
                  r = a ? a.offset() : 0;
              return r && a[0].ownerDocument === e && function(e) {
                  for (var n = e[0], s = n.getBoundingClientRect(), o = []; null !== n.parentElement;) "hidden" !== i(n.parentElement).css("overflow") && "auto" !== i(n.parentElement).css("overflow") || o.push(n.parentElement.getBoundingClientRect()), n = n.parentElement;
                  return o.every(function(t) {
                      var e = Math.min(s.right, t.right) - Math.max(s.left, t.left),
                          i = Math.min(s.bottom, t.bottom) - Math.max(s.top, t.top);
                      return e > 0 && i > 0
                  }) && s.bottom > 0 && s.right > 0 && s.left < i(t).width() && s.top < i(t).height()
              }(a) && (s = this.$refs.stage.offset(), o = {
                  top: r.top - s.top + parseFloat(a.css("border-top-width") || 0),
                  left: r.left - s.left + parseFloat(a.css("border-left-width") || 0),
                  width: a.width(),
                  height: a.height(),
                  scaleX: 1,
                  scaleY: 1
              }), o
          },
          complete: function() {
              var t = this,
                  n = t.current,
                  s = {};
              n.isMoved || !n.isLoaded || n.isComplete || (n.isComplete = !0, n.$slide.siblings().trigger("onReset"), u(n.$slide), n.$slide.addClass("fancybox-slide--complete"), i.each(t.slides, function(e, n) {
                  n.pos >= t.currPos - 1 && n.pos <= t.currPos + 1 ? s[n.pos] = n : n && (i.fancybox.stop(n.$slide), n.$slide.unbind().remove())
              }), t.slides = s, t.updateCursor(), t.trigger("afterShow"), (i(e.activeElement).is("[disabled]") || n.opts.autoFocus && "image" != n.type && "iframe" !== n.type) && t.focus())
          },
          preload: function() {
              var t, e, i = this;
              i.group.length < 2 || (t = i.slides[i.currPos + 1], e = i.slides[i.currPos - 1], t && "image" === t.type && i.loadSlide(t), e && "image" === e.type && i.loadSlide(e))
          },
          focus: function() {
              var t, e = this.current;
              this.isClosing || (t = (t = e && e.isComplete ? e.$slide.find("button,:input,[tabindex],a").filter(":not([disabled]):visible:first") : null) && t.length ? t : this.$refs.container).focus()
          },
          activate: function() {
              var t = this;
              i(".fancybox-container").each(function() {
                  var e = i(this).data("FancyBox");
                  e && e.uid !== t.uid && !e.isClosing && e.trigger("onDeactivate")
              }), t.current && (t.$refs.container.index() > 0 && t.$refs.container.prependTo(e.body), t.updateControls()), t.trigger("onActivate"), t.addEvents()
          },
          close: function(t, e) {
              var n, s, o, a, r, l, u = this,
                  d = u.current,
                  p = function() {
                      u.cleanUp(t)
                  };
              return !(u.isClosing || (u.isClosing = !0, !1 === u.trigger("beforeClose", t) ? (u.isClosing = !1, c(function() {
                  u.update()
              }), 1) : (u.removeEvents(), d.timouts && clearTimeout(d.timouts), o = d.$content, n = d.opts.animationEffect, s = i.isNumeric(e) ? e : n ? d.opts.animationDuration : 0, d.$slide.off(h).removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"), d.$slide.siblings().trigger("onReset").remove(), s && u.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing"), u.hideLoading(d), u.hideControls(), u.updateCursor(), "zoom" !== n || !0 !== t && o && s && "image" === d.type && !d.hasError && (l = u.getThumbPos(d)) || (n = "fade"), "zoom" === n ? (i.fancybox.stop(o), r = i.fancybox.getTranslate(o), r.width = r.width * r.scaleX, r.height = r.height * r.scaleY, a = d.opts.zoomOpacity, "auto" == a && (a = Math.abs(d.width / d.height - l.width / l.height) > .1), a && (l.opacity = 0), r.scaleX = r.width / l.width, r.scaleY = r.height / l.height, r.width = l.width, r.height = l.height, i.fancybox.setTranslate(d.$content, r), i.fancybox.animate(d.$content, l, s, p), 0) : (n && s ? !0 === t ? setTimeout(p, s) : i.fancybox.animate(d.$slide.removeClass("fancybox-slide--current"), "fancybox-animated fancybox-slide--previous fancybox-fx-" + n, s, p) : p(), 0))))
          },
          cleanUp: function(t) {
              var e, n = this;
              n.current.$slide.trigger("onReset"), n.$refs.container.empty().remove(), n.trigger("afterClose", t), n.$lastFocus && n.current.opts.backFocus && n.$lastFocus.focus(), n.current = null, (e = i.fancybox.getInstance()) ? e.activate() : (a.scrollTop(n.scrollTop).scrollLeft(n.scrollLeft), i("html").removeClass("fancybox-enabled"), i("#fancybox-style-noscroll").remove())
          },
          trigger: function(t, e) {
              var n, s = Array.prototype.slice.call(arguments, 1),
                  o = this,
                  a = e && e.opts ? e : o.current;
              return a ? s.unshift(a) : a = o, s.unshift(o), i.isFunction(a.opts[t]) && (n = a.opts[t].apply(a, s)), !1 === n ? n : void("afterClose" === t ? r.trigger(t + ".fb", s) : o.$refs.container.trigger(t + ".fb", s))
          },
          updateControls: function(t) {
              var e = this,
                  n = e.current,
                  s = n.index,
                  o = n.opts,
                  a = o.caption,
                  r = e.$refs.caption;
              n.$slide.trigger("refresh"), e.$caption = a && a.length ? r.html(a) : null, e.isHiddenControls || e.showControls(), i("[data-fancybox-count]").html(e.group.length), i("[data-fancybox-index]").html(s + 1), i("[data-fancybox-prev]").prop("disabled", !o.loop && s <= 0), i("[data-fancybox-next]").prop("disabled", !o.loop && s >= e.group.length - 1)
          },
          hideControls: function() {
              this.isHiddenControls = !0, this.$refs.container.removeClass("fancybox-show-infobar fancybox-show-toolbar fancybox-show-caption fancybox-show-nav")
          },
          showControls: function() {
              var t = this,
                  e = t.current ? t.current.opts : t.opts,
                  i = t.$refs.container;
              t.isHiddenControls = !1, t.idleSecondsCounter = 0, i.toggleClass("fancybox-show-toolbar", !(!e.toolbar || !e.buttons)).toggleClass("fancybox-show-infobar", !!(e.infobar && t.group.length > 1)).toggleClass("fancybox-show-nav", !!(e.arrows && t.group.length > 1)).toggleClass("fancybox-is-modal", !!e.modal), t.$caption ? i.addClass("fancybox-show-caption ") : i.removeClass("fancybox-show-caption")
          },
          toggleControls: function() {
              this.isHiddenControls ? this.showControls() : this.hideControls()
          }
      }), i.fancybox = {
          version: "3.1.24",
          defaults: o,
          getInstance: function(t) {
              var e = i('.fancybox-container:not(".fancybox-is-closing"):first').data("FancyBox"),
                  n = Array.prototype.slice.call(arguments, 1);
              return e instanceof d && ("string" === i.type(t) ? e[t].apply(e, n) : "function" === i.type(t) && t.apply(e, n), e)
          },
          open: function(t, e, i) {
              return new d(t, e, i)
          },
          close: function(t) {
              var e = this.getInstance();
              e && (e.close(), !0 === t && this.close())
          },
          destroy: function() {
              this.close(!0), r.off("click.fb-start")
          },
          isMobile: e.createTouch !== n && /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent),
          use3d: function() {
              var i = e.createElement("div");
              return t.getComputedStyle && t.getComputedStyle(i).getPropertyValue("transform") && !(e.documentMode && e.documentMode < 11)
          }(),
          getTranslate: function(t) {
              var e;
              if (!t || !t.length) return !1;
              if ((e = t.eq(0).css("transform")) && -1 !== e.indexOf("matrix") ? e = (e = (e = e.split("(")[1]).split(")")[0]).split(",") : e = [], e.length) e = (e = e.length > 10 ? [e[13], e[12], e[0], e[5]] : [e[5], e[4], e[0], e[3]]).map(parseFloat);
              else {
                  e = [0, 0, 1, 1];
                  var i = /\.*translate\((.*)px,(.*)px\)/i.exec(t.eq(0).attr("style"));
                  i && (e[0] = parseFloat(i[2]), e[1] = parseFloat(i[1]))
              }
              return {
                  top: e[0],
                  left: e[1],
                  scaleX: e[2],
                  scaleY: e[3],
                  opacity: parseFloat(t.css("opacity")),
                  width: t.width(),
                  height: t.height()
              }
          },
          setTranslate: function(t, e) {
              var i = "",
                  s = {};
              if (t && e) return e.left === n && e.top === n || (i = (e.left === n ? t.position().left : e.left) + "px, " + (e.top === n ? t.position().top : e.top) + "px", i = this.use3d ? "translate3d(" + i + ", 0px)" : "translate(" + i + ")"), e.scaleX !== n && e.scaleY !== n && (i = (i.length ? i + " " : "") + "scale(" + e.scaleX + ", " + e.scaleY + ")"), i.length && (s.transform = i), e.opacity !== n && (s.opacity = e.opacity), e.width !== n && (s.width = e.width), e.height !== n && (s.height = e.height), t.css(s)
          },
          animate: function(t, e, s, o, a) {
              var r = h || "transitionend";
              i.isFunction(s) && (o = s, s = null), i.isPlainObject(e) || t.removeAttr("style"), t.on(r, function(s) {
                  (!s || !s.originalEvent || t.is(s.originalEvent.target) && "z-index" != s.originalEvent.propertyName) && (t.off(r), i.isPlainObject(e) ? e.scaleX !== n && e.scaleY !== n && (t.css("transition-duration", "0ms"), e.width = Math.round(t.width() * e.scaleX), e.height = Math.round(t.height() * e.scaleY), e.scaleX = 1, e.scaleY = 1, i.fancybox.setTranslate(t, e)) : !0 !== a && t.removeClass(e), i.isFunction(o) && o(s))
              }), i.isNumeric(s) && t.css("transition-duration", s + "ms"), i.isPlainObject(e) ? i.fancybox.setTranslate(t, e) : t.addClass(e), t.data("timer", setTimeout(function() {
                  t.trigger("transitionend")
              }, s + 16))
          },
          stop: function(t) {
              clearTimeout(t.data("timer")), t.off(h)
          }
      }, i.fn.fancybox = function(t) {
          var e;
          return (e = (t = t || {}).selector || !1) ? i("body").off("click.fb-start", e).on("click.fb-start", e, {
              options: t
          }, s) : this.off("click.fb-start").on("click.fb-start", {
              items: this,
              options: t
          }, s), this
      }, r.on("click.fb-start", "[data-fancybox]", s)
  }
}(window, document, window.jQuery),
function(t) {
  "use strict";
  var e = function(e, i, n) {
          if (e) return n = n || "", "object" === t.type(n) && (n = t.param(n, !0)), t.each(i, function(t, i) {
              e = e.replace("$" + t, i || "")
          }), n.length && (e += (e.indexOf("?") > 0 ? "&" : "?") + n), e
      },
      i = {
          youtube: {
              matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
              params: {
                  autoplay: 1,
                  autohide: 1,
                  fs: 1,
                  rel: 0,
                  hd: 1,
                  wmode: "transparent",
                  enablejsapi: 1,
                  html5: 1
              },
              paramPlace: 8,
              type: "iframe",
              url: "//www.youtube.com/embed/$4",
              thumb: "//img.youtube.com/vi/$4/hqdefault.jpg"
          },
          vimeo: {
              matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
              params: {
                  autoplay: 1,
                  hd: 1,
                  show_title: 1,
                  show_byline: 1,
                  show_portrait: 0,
                  fullscreen: 1,
                  api: 1
              },
              paramPlace: 3,
              type: "iframe",
              url: "//player.vimeo.com/video/$2"
          },
          metacafe: {
              matcher: /metacafe.com\/watch\/(\d+)\/(.*)?/,
              type: "iframe",
              url: "//www.metacafe.com/embed/$1/?ap=1"
          },
          dailymotion: {
              matcher: /dailymotion.com\/video\/(.*)\/?(.*)/,
              params: {
                  additionalInfos: 0,
                  autoStart: 1
              },
              type: "iframe",
              url: "//www.dailymotion.com/embed/video/$1"
          },
          vine: {
              matcher: /vine.co\/v\/([a-zA-Z0-9\?\=\-]+)/,
              type: "iframe",
              url: "//vine.co/v/$1/embed/simple"
          },
          instagram: {
              matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
              type: "image",
              url: "//$1/p/$2/media/?size=l"
          },
          gmap_place: {
              matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
              type: "iframe",
              url: function(t) {
                  return "//maps.google." + t[2] + "/?ll=" + (t[9] ? t[9] + "&z=" + Math.floor(t[10]) + (t[12] ? t[12].replace(/^\//, "&") : "") : t[12]) + "&output=" + (t[12] && t[12].indexOf("layer=c") > 0 ? "svembed" : "embed")
              }
          },
          gmap_search: {
              matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
              type: "iframe",
              url: function(t) {
                  return "//maps.google." + t[2] + "/maps?q=" + t[5].replace("query=", "q=").replace("api=1", "") + "&output=embed"
              }
          }
      };
  t(document).on("onInit.fb", function(n, s) {
      t.each(s.group, function(n, s) {
          var o, a, r, l, c, h, u, d = s.src || "",
              p = !1;
          s.type || (o = t.extend(!0, {}, i, s.opts.media), t.each(o, function(i, n) {
              if (r = d.match(n.matcher), h = {}, u = i, r) {
                  if (p = n.type, n.paramPlace && r[n.paramPlace]) {
                      "?" == (c = r[n.paramPlace])[0] && (c = c.substring(1)), c = c.split("&");
                      for (var o = 0; o < c.length; ++o) {
                          var f = c[o].split("=", 2);
                          2 == f.length && (h[f[0]] = decodeURIComponent(f[1].replace(/\+/g, " ")))
                      }
                  }
                  return l = t.extend(!0, {}, n.params, s.opts[i], h), d = "function" === t.type(n.url) ? n.url.call(this, r, l, s) : e(n.url, r, l), a = "function" === t.type(n.thumb) ? n.thumb.call(this, r, l, s) : e(n.thumb, r), "vimeo" === u && (d = d.replace("&%23", "#")), !1
              }
          }), p ? (s.src = d, s.type = p, s.opts.thumb || s.opts.$thumb && s.opts.$thumb.length || (s.opts.thumb = a), "iframe" === p && (t.extend(!0, s.opts, {
              iframe: {
                  preload: !1,
                  attr: {
                      scrolling: "no"
                  }
              }
          }), s.contentProvider = u, s.opts.slideClass += " fancybox-slide--" + ("gmap_place" == u || "gmap_search" == u ? "map" : "video"))) : s.type = "image")
      })
  })
}(window.jQuery),
function(t, e, i) {
  "use strict";
  var n = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || function(e) {
          return t.setTimeout(e, 1e3 / 60)
      },
      s = t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.mozCancelAnimationFrame || t.oCancelAnimationFrame || function(e) {
          t.clearTimeout(e)
      },
      o = function(e) {
          var i = [];
          for (var n in e = (e = e.originalEvent || e || t.e).touches && e.touches.length ? e.touches : e.changedTouches && e.changedTouches.length ? e.changedTouches : [e]) e[n].pageX ? i.push({
              x: e[n].pageX,
              y: e[n].pageY
          }) : e[n].clientX && i.push({
              x: e[n].clientX,
              y: e[n].clientY
          });
          return i
      },
      a = function(t, e, i) {
          return e && t ? "x" === i ? t.x - e.x : "y" === i ? t.y - e.y : Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2)) : 0
      },
      r = function(t) {
          if (t.is("a,button,input,select,textarea") || i.isFunction(t.get(0).onclick)) return !0;
          for (var e = 0, n = t[0].attributes, s = n.length; e < s; e++)
              if ("data-fancybox-" === n[e].nodeName.substr(0, 14)) return !0;
          return !1
      },
      l = function(e) {
          var i = t.getComputedStyle(e)["overflow-y"],
              n = t.getComputedStyle(e)["overflow-x"],
              s = ("scroll" === i || "auto" === i) && e.scrollHeight > e.clientHeight,
              o = ("scroll" === n || "auto" === n) && e.scrollWidth > e.clientWidth;
          return s || o
      },
      c = function(t) {
          for (var e = !1; !(e = l(t.get(0))) && ((t = t.parent()).length && !t.hasClass("fancybox-stage") && !t.is("body")););
          return e
      },
      h = function(t) {
          var e = this;
          e.instance = t, e.$bg = t.$refs.bg, e.$stage = t.$refs.stage, e.$container = t.$refs.container, e.destroy(), e.$container.on("touchstart.fb.touch mousedown.fb.touch", i.proxy(e, "ontouchstart"))
      };
  h.prototype.destroy = function() {
      this.$container.off(".fb.touch")
  }, h.prototype.ontouchstart = function(n) {
      var s = this,
          l = i(n.target),
          h = s.instance,
          u = h.current,
          d = u.$content,
          p = "touchstart" == n.type;
      if (p && s.$container.off("mousedown.fb.touch"), !u || s.instance.isAnimating || s.instance.isClosing) return n.stopPropagation(), void n.preventDefault();
      if ((!n.originalEvent || 2 != n.originalEvent.button) && l.length && !r(l) && !r(l.parent()) && !(n.originalEvent.clientX > l[0].clientWidth + l.offset().left) && (s.startPoints = o(n), s.startPoints && !(s.startPoints.length > 1 && h.isSliding))) {
          if (s.$target = l, s.$content = d, s.canTap = !0, i(e).off(".fb.touch"), i(e).on(p ? "touchend.fb.touch touchcancel.fb.touch" : "mouseup.fb.touch mouseleave.fb.touch", i.proxy(s, "ontouchend")), i(e).on(p ? "touchmove.fb.touch" : "mousemove.fb.touch", i.proxy(s, "ontouchmove")), n.stopPropagation(), !h.current.opts.touch && !h.canPan() || !l.is(s.$stage) && !s.$stage.find(l).length) return void(l.is("img") && n.preventDefault());
          i.fancybox.isMobile && (c(s.$target) || c(s.$target.parent())) || n.preventDefault(), s.canvasWidth = Math.round(u.$slide[0].clientWidth), s.canvasHeight = Math.round(u.$slide[0].clientHeight), s.startTime = (new Date).getTime(), s.distanceX = s.distanceY = s.distance = 0, s.isPanning = !1, s.isSwiping = !1, s.isZooming = !1, s.sliderStartPos = s.sliderLastPos || {
              top: 0,
              left: 0
          }, s.contentStartPos = i.fancybox.getTranslate(s.$content), s.contentLastPos = null, 1 !== s.startPoints.length || s.isZooming || (s.canTap = !h.isSliding, "image" === u.type && (s.contentStartPos.width > s.canvasWidth + 1 || s.contentStartPos.height > s.canvasHeight + 1) ? (i.fancybox.stop(s.$content), s.$content.css("transition-duration", "0ms"), s.isPanning = !0) : s.isSwiping = !0, s.$container.addClass("fancybox-controls--isGrabbing")), 2 !== s.startPoints.length || h.isAnimating || u.hasError || "image" !== u.type || !u.isLoaded && !u.$ghost || (s.isZooming = !0, s.isSwiping = !1, s.isPanning = !1, i.fancybox.stop(s.$content), s.$content.css("transition-duration", "0ms"), s.centerPointStartX = .5 * (s.startPoints[0].x + s.startPoints[1].x) - i(t).scrollLeft(), s.centerPointStartY = .5 * (s.startPoints[0].y + s.startPoints[1].y) - i(t).scrollTop(), s.percentageOfImageAtPinchPointX = (s.centerPointStartX - s.contentStartPos.left) / s.contentStartPos.width, s.percentageOfImageAtPinchPointY = (s.centerPointStartY - s.contentStartPos.top) / s.contentStartPos.height, s.startDistanceBetweenFingers = a(s.startPoints[0], s.startPoints[1]))
      }
  }, h.prototype.ontouchmove = function(t) {
      var e = this;
      if (e.newPoints = o(t), i.fancybox.isMobile && (c(e.$target) || c(e.$target.parent()))) return t.stopPropagation(), void(e.canTap = !1);
      if ((e.instance.current.opts.touch || e.instance.canPan()) && e.newPoints && e.newPoints.length && (e.distanceX = a(e.newPoints[0], e.startPoints[0], "x"), e.distanceY = a(e.newPoints[0], e.startPoints[0], "y"), e.distance = a(e.newPoints[0], e.startPoints[0]), e.distance > 0)) {
          if (!e.$target.is(e.$stage) && !e.$stage.find(e.$target).length) return;
          t.stopPropagation(), t.preventDefault(), e.isSwiping ? e.onSwipe() : e.isPanning ? e.onPan() : e.isZooming && e.onZoom()
      }
  }, h.prototype.onSwipe = function() {
      var e, o = this,
          a = o.isSwiping,
          r = o.sliderStartPos.left || 0;
      !0 === a ? Math.abs(o.distance) > 10 && (o.canTap = !1, o.instance.group.length < 2 && o.instance.opts.touch.vertical ? o.isSwiping = "y" : o.instance.isSliding || !1 === o.instance.opts.touch.vertical || "auto" === o.instance.opts.touch.vertical && i(t).width() > 800 ? o.isSwiping = "x" : (e = Math.abs(180 * Math.atan2(o.distanceY, o.distanceX) / Math.PI), o.isSwiping = e > 45 && e < 135 ? "y" : "x"), o.instance.isSliding = o.isSwiping, o.startPoints = o.newPoints, i.each(o.instance.slides, function(t, e) {
          i.fancybox.stop(e.$slide), e.$slide.css("transition-duration", "0ms"), e.inTransition = !1, e.pos === o.instance.current.pos && (o.sliderStartPos.left = i.fancybox.getTranslate(e.$slide).left)
      }), o.instance.SlideShow && o.instance.SlideShow.isActive && o.instance.SlideShow.stop()) : ("x" == a && (o.distanceX > 0 && (o.instance.group.length < 2 || 0 === o.instance.current.index && !o.instance.current.opts.loop) ? r += Math.pow(o.distanceX, .8) : o.distanceX < 0 && (o.instance.group.length < 2 || o.instance.current.index === o.instance.group.length - 1 && !o.instance.current.opts.loop) ? r -= Math.pow(-o.distanceX, .8) : r += o.distanceX), o.sliderLastPos = {
          top: "x" == a ? 0 : o.sliderStartPos.top + o.distanceY,
          left: r
      }, o.requestId && (s(o.requestId), o.requestId = null), o.requestId = n(function() {
          o.sliderLastPos && (i.each(o.instance.slides, function(t, e) {
              var n = e.pos - o.instance.currPos;
              i.fancybox.setTranslate(e.$slide, {
                  top: o.sliderLastPos.top,
                  left: o.sliderLastPos.left + n * o.canvasWidth + n * e.opts.gutter
              })
          }), o.$container.addClass("fancybox-is-sliding"))
      }))
  }, h.prototype.onPan = function() {
      var t, e, o, a = this;
      a.canTap = !1, t = a.contentStartPos.width > a.canvasWidth ? a.contentStartPos.left + a.distanceX : a.contentStartPos.left, e = a.contentStartPos.top + a.distanceY, (o = a.limitMovement(t, e, a.contentStartPos.width, a.contentStartPos.height)).scaleX = a.contentStartPos.scaleX, o.scaleY = a.contentStartPos.scaleY, a.contentLastPos = o, a.requestId && (s(a.requestId), a.requestId = null), a.requestId = n(function() {
          i.fancybox.setTranslate(a.$content, a.contentLastPos)
      })
  }, h.prototype.limitMovement = function(t, e, i, n) {
      var s, o, a, r, l = this,
          c = l.canvasWidth,
          h = l.canvasHeight,
          u = l.contentStartPos.left,
          d = l.contentStartPos.top,
          p = l.distanceX,
          f = l.distanceY;
      return s = Math.max(0, .5 * c - .5 * i), o = Math.max(0, .5 * h - .5 * n), a = Math.min(c - i, .5 * c - .5 * i), r = Math.min(h - n, .5 * h - .5 * n), i > c && (p > 0 && t > s && (t = s - 1 + Math.pow(-s + u + p, .8) || 0), p < 0 && t < a && (t = a + 1 - Math.pow(a - u - p, .8) || 0)), n > h && (f > 0 && e > o && (e = o - 1 + Math.pow(-o + d + f, .8) || 0), f < 0 && e < r && (e = r + 1 - Math.pow(r - d - f, .8) || 0)), {
          top: e,
          left: t
      }
  }, h.prototype.limitPosition = function(t, e, i, n) {
      var s = this.canvasWidth,
          o = this.canvasHeight;
      return i > s ? t = (t = t > 0 ? 0 : t) < s - i ? s - i : t : t = Math.max(0, s / 2 - i / 2), n > o ? e = (e = e > 0 ? 0 : e) < o - n ? o - n : e : e = Math.max(0, o / 2 - n / 2), {
          top: e,
          left: t
      }
  }, h.prototype.onZoom = function() {
      var e = this,
          o = e.contentStartPos.width,
          r = e.contentStartPos.height,
          l = e.contentStartPos.left,
          c = e.contentStartPos.top,
          h = a(e.newPoints[0], e.newPoints[1]) / e.startDistanceBetweenFingers,
          u = Math.floor(o * h),
          d = Math.floor(r * h),
          p = (o - u) * e.percentageOfImageAtPinchPointX,
          f = (r - d) * e.percentageOfImageAtPinchPointY,
          m = (e.newPoints[0].x + e.newPoints[1].x) / 2 - i(t).scrollLeft(),
          g = (e.newPoints[0].y + e.newPoints[1].y) / 2 - i(t).scrollTop(),
          v = m - e.centerPointStartX,
          y = {
              top: c + (f + (g - e.centerPointStartY)),
              left: l + (p + v),
              scaleX: e.contentStartPos.scaleX * h,
              scaleY: e.contentStartPos.scaleY * h
          };
      e.canTap = !1, e.newWidth = u, e.newHeight = d, e.contentLastPos = y, e.requestId && (s(e.requestId), e.requestId = null), e.requestId = n(function() {
          i.fancybox.setTranslate(e.$content, e.contentLastPos)
      })
  }, h.prototype.ontouchend = function(t) {
      var n = this,
          a = Math.max((new Date).getTime() - n.startTime, 1),
          r = n.isSwiping,
          l = n.isPanning,
          c = n.isZooming;
      return n.endPoints = o(t), n.$container.removeClass("fancybox-controls--isGrabbing"), i(e).off(".fb.touch"), n.requestId && (s(n.requestId), n.requestId = null), n.isSwiping = !1, n.isPanning = !1, n.isZooming = !1, n.canTap ? n.onTap(t) : (n.speed = 366, n.velocityX = n.distanceX / a * .5, n.velocityY = n.distanceY / a * .5, n.speedX = Math.max(.5 * n.speed, Math.min(1.5 * n.speed, 1 / Math.abs(n.velocityX) * n.speed)), void(l ? n.endPanning() : c ? n.endZooming() : n.endSwiping(r)))
  }, h.prototype.endSwiping = function(t) {
      var e = this,
          n = !1;
      e.instance.isSliding = !1, e.sliderLastPos = null, "y" == t && Math.abs(e.distanceY) > 50 ? (i.fancybox.animate(e.instance.current.$slide, {
          top: e.sliderStartPos.top + e.distanceY + 150 * e.velocityY,
          opacity: 0
      }, 150), n = e.instance.close(!0, 300)) : "x" == t && e.distanceX > 50 && e.instance.group.length > 1 ? n = e.instance.previous(e.speedX) : "x" == t && e.distanceX < -50 && e.instance.group.length > 1 && (n = e.instance.next(e.speedX)), !1 !== n || "x" != t && "y" != t || e.instance.jumpTo(e.instance.current.index, 150), e.$container.removeClass("fancybox-is-sliding")
  }, h.prototype.endPanning = function() {
      var t, e, n, s = this;
      s.contentLastPos && (!1 === s.instance.current.opts.touch.momentum ? (t = s.contentLastPos.left, e = s.contentLastPos.top) : (t = s.contentLastPos.left + s.velocityX * s.speed, e = s.contentLastPos.top + s.velocityY * s.speed), (n = s.limitPosition(t, e, s.contentStartPos.width, s.contentStartPos.height)).width = s.contentStartPos.width, n.height = s.contentStartPos.height, i.fancybox.animate(s.$content, n, 330))
  }, h.prototype.endZooming = function() {
      var t, e, n, s, o = this,
          a = o.instance.current,
          r = o.newWidth,
          l = o.newHeight;
      o.contentLastPos && (t = o.contentLastPos.left, s = {
          top: e = o.contentLastPos.top,
          left: t,
          width: r,
          height: l,
          scaleX: 1,
          scaleY: 1
      }, i.fancybox.setTranslate(o.$content, s), r < o.canvasWidth && l < o.canvasHeight ? o.instance.scaleToFit(150) : r > a.width || l > a.height ? o.instance.scaleToActual(o.centerPointStartX, o.centerPointStartY, 150) : (n = o.limitPosition(t, e, r, l), i.fancybox.setTranslate(o.content, i.fancybox.getTranslate(o.$content)), i.fancybox.animate(o.$content, n, 150)))
  }, h.prototype.onTap = function(t) {
      var e, n = this,
          s = i(t.target),
          a = n.instance,
          r = a.current,
          l = t && o(t) || n.startPoints,
          c = l[0] ? l[0].x - n.$stage.offset().left : 0,
          h = l[0] ? l[0].y - n.$stage.offset().top : 0,
          u = function(e) {
              var s = r.opts[e];
              if (i.isFunction(s) && (s = s.apply(a, [r, t])), s) switch (s) {
                  case "close":
                      a.close(n.startEvent);
                      break;
                  case "toggleControls":
                      a.toggleControls(!0);
                      break;
                  case "next":
                      a.next();
                      break;
                  case "nextOrClose":
                      a.group.length > 1 ? a.next() : a.close(n.startEvent);
                      break;
                  case "zoom":
                      "image" == r.type && (r.isLoaded || r.$ghost) && (a.canPan() ? a.scaleToFit() : a.isScaledDown() ? a.scaleToActual(c, h) : a.group.length < 2 && a.close(n.startEvent))
              }
          };
      if (!(t.originalEvent && 2 == t.originalEvent.button || a.isSliding || c > s[0].clientWidth + s.offset().left)) {
          if (s.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container")) e = "Outside";
          else if (s.is(".fancybox-slide")) e = "Slide";
          else {
              if (!a.current.$content || !a.current.$content.has(t.target).length) return;
              e = "Content"
          }
          if (n.tapped) {
              if (clearTimeout(n.tapped), n.tapped = null, Math.abs(c - n.tapX) > 50 || Math.abs(h - n.tapY) > 50 || a.isSliding) return this;
              u("dblclick" + e)
          } else n.tapX = c, n.tapY = h, r.opts["dblclick" + e] && r.opts["dblclick" + e] !== r.opts["click" + e] ? n.tapped = setTimeout(function() {
              n.tapped = null, u("click" + e)
          }, 300) : u("click" + e);
          return this
      }
  }, i(e).on("onActivate.fb", function(t, e) {
      e && !e.Guestures && (e.Guestures = new h(e))
  }), i(e).on("beforeClose.fb", function(t, e) {
      e && e.Guestures && e.Guestures.destroy()
  })
}(window, document, window.jQuery),
function(t, e) {
  "use strict";
  var i = function(t) {
      this.instance = t, this.init()
  };
  e.extend(i.prototype, {
      timer: null,
      isActive: !1,
      $button: null,
      speed: 3e3,
      init: function() {
          var t = this;
          t.$button = t.instance.$refs.toolbar.find("[data-fancybox-play]").on("click", function() {
              t.toggle()
          }), (t.instance.group.length < 2 || !t.instance.group[t.instance.currIndex].opts.slideShow) && t.$button.hide()
      },
      set: function() {
          var t = this;
          t.instance && t.instance.current && (t.instance.current.opts.loop || t.instance.currIndex < t.instance.group.length - 1) ? t.timer = setTimeout(function() {
              t.instance.next()
          }, t.instance.current.opts.slideShow.speed || t.speed) : (t.stop(), t.instance.idleSecondsCounter = 0, t.instance.showControls())
      },
      clear: function() {
          clearTimeout(this.timer), this.timer = null
      },
      start: function() {
          var t = this,
              e = t.instance.current;
          t.instance && e && (e.opts.loop || e.index < t.instance.group.length - 1) && (t.isActive = !0, t.$button.attr("title", e.opts.i18n[e.opts.lang].PLAY_STOP).addClass("fancybox-button--pause"), e.isComplete && t.set())
      },
      stop: function() {
          var t = this,
              e = t.instance.current;
          t.clear(), t.$button.attr("title", e.opts.i18n[e.opts.lang].PLAY_START).removeClass("fancybox-button--pause"), t.isActive = !1
      },
      toggle: function() {
          var t = this;
          t.isActive ? t.stop() : t.start()
      }
  }), e(t).on({
      "onInit.fb": function(t, e) {
          e && !e.SlideShow && (e.SlideShow = new i(e))
      },
      "beforeShow.fb": function(t, e, i, n) {
          var s = e && e.SlideShow;
          n ? s && i.opts.slideShow.autoStart && s.start() : s && s.isActive && s.clear()
      },
      "afterShow.fb": function(t, e, i) {
          var n = e && e.SlideShow;
          n && n.isActive && n.set()
      },
      "afterKeydown.fb": function(i, n, s, o, a) {
          var r = n && n.SlideShow;
          !r || !s.opts.slideShow || 80 !== a && 32 !== a || e(t.activeElement).is("button,a,input") || (o.preventDefault(), r.toggle())
      },
      "beforeClose.fb onDeactivate.fb": function(t, e) {
          var i = e && e.SlideShow;
          i && i.stop()
      }
  }), e(t).on("visibilitychange", function() {
      var i = e.fancybox.getInstance(),
          n = i && i.SlideShow;
      n && n.isActive && (t.hidden ? n.clear() : n.set())
  })
}(document, window.jQuery),
function(t, e) {
  "use strict";
  var i = function() {
      var e, i, n, s = [
              ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
              ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
              ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
              ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
              ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
          ],
          o = {};
      for (i = 0; i < s.length; i++)
          if ((e = s[i]) && e[1] in t) {
              for (n = 0; n < e.length; n++) o[s[0][n]] = e[n];
              return o
          }
      return !1
  }();
  if (i) {
      var n = {
          request: function(e) {
              (e = e || t.documentElement)[i.requestFullscreen](e.ALLOW_KEYBOARD_INPUT)
          },
          exit: function() {
              t[i.exitFullscreen]()
          },
          toggle: function(e) {
              e = e || t.documentElement, this.isFullscreen() ? this.exit() : this.request(e)
          },
          isFullscreen: function() {
              return Boolean(t[i.fullscreenElement])
          },
          enabled: function() {
              return Boolean(t[i.fullscreenEnabled])
          }
      };
      e(t).on({
          "onInit.fb": function(t, e) {
              var i, s = e.$refs.toolbar.find("[data-fancybox-fullscreen]");
              e && !e.FullScreen && e.group[e.currIndex].opts.fullScreen ? ((i = e.$refs.container).on("click.fb-fullscreen", "[data-fancybox-fullscreen]", function(t) {
                  t.stopPropagation(), t.preventDefault(), n.toggle(i[0])
              }), e.opts.fullScreen && !0 === e.opts.fullScreen.autoStart && n.request(i[0]), e.FullScreen = n) : s.hide()
          },
          "afterKeydown.fb": function(t, e, i, n, s) {
              e && e.FullScreen && 70 === s && (n.preventDefault(), e.FullScreen.toggle(e.$refs.container[0]))
          },
          "beforeClose.fb": function(t) {
              t && t.FullScreen && n.exit()
          }
      }), e(t).on(i.fullscreenchange, function() {
          var t = e.fancybox.getInstance();
          t.current && "image" === t.current.type && t.isAnimating && (t.current.$content.css("transition", "none"), t.isAnimating = !1, t.update(!0, !0, 0))
      })
  } else e.fancybox.defaults.btnTpl.fullScreen = !1
}(document, window.jQuery),
function(t, e) {
  "use strict";
  var i = function(t) {
      this.instance = t, this.init()
  };
  e.extend(i.prototype, {
      $button: null,
      $grid: null,
      $list: null,
      isVisible: !1,
      init: function() {
          var t = this,
              e = t.instance.group[0],
              i = t.instance.group[1];
          t.$button = t.instance.$refs.toolbar.find("[data-fancybox-thumbs]"), t.instance.group.length > 1 && t.instance.group[t.instance.currIndex].opts.thumbs && ("image" == e.type || e.opts.thumb || e.opts.$thumb) && ("image" == i.type || i.opts.thumb || i.opts.$thumb) ? (t.$button.on("click", function() {
              t.toggle()
          }), t.isActive = !0) : (t.$button.hide(), t.isActive = !1)
      },
      create: function() {
          var t, i, n = this.instance;
          this.$grid = e('<div class="fancybox-thumbs"></div>').appendTo(n.$refs.container), t = "<ul>", e.each(n.group, function(e, n) {
              (i = n.opts.thumb || (n.opts.$thumb ? n.opts.$thumb.attr("src") : null)) || "image" !== n.type || (i = n.src), i && i.length && (t += '<li data-index="' + e + '"  tabindex="0" class="fancybox-thumbs-loading"><img data-src="' + i + '" /></li>')
          }), t += "</ul>", this.$list = e(t).appendTo(this.$grid).on("click", "li", function() {
              n.jumpTo(e(this).data("index"))
          }), this.$list.find("img").hide().one("load", function() {
              var t, i, n, s, o = e(this).parent().removeClass("fancybox-thumbs-loading"),
                  a = o.outerWidth(),
                  r = o.outerHeight();
              t = this.naturalWidth || this.width, s = (i = this.naturalHeight || this.height) / r, (n = t / a) >= 1 && s >= 1 && (n > s ? (t /= s, i = r) : (t = a, i /= n)), e(this).css({
                  width: Math.floor(t),
                  height: Math.floor(i),
                  "margin-top": Math.min(0, Math.floor(.3 * r - .3 * i)),
                  "margin-left": Math.min(0, Math.floor(.5 * a - .5 * t))
              }).show()
          }).each(function() {
              this.src = e(this).data("src")
          })
      },
      focus: function() {
          this.instance.current && this.$list.children().removeClass("fancybox-thumbs-active").filter('[data-index="' + this.instance.current.index + '"]').addClass("fancybox-thumbs-active").focus()
      },
      close: function() {
          this.$grid.hide()
      },
      update: function() {
          this.instance.$refs.container.toggleClass("fancybox-show-thumbs", this.isVisible), this.isVisible ? (this.$grid || this.create(), this.instance.trigger("onThumbsShow"), this.focus()) : this.$grid && this.instance.trigger("onThumbsHide"), this.instance.update()
      },
      hide: function() {
          this.isVisible = !1, this.update()
      },
      show: function() {
          this.isVisible = !0, this.update()
      },
      toggle: function() {
          this.isVisible = !this.isVisible, this.update()
      }
  }), e(t).on({
      "onInit.fb": function(t, e) {
          e && !e.Thumbs && (e.Thumbs = new i(e))
      },
      "beforeShow.fb": function(t, e, i, n) {
          var s = e && e.Thumbs;
          if (s && s.isActive) {
              if (i.modal) return s.$button.hide(), void s.hide();
              n && !0 === e.opts.thumbs.autoStart && s.show(), s.isVisible && s.focus()
          }
      },
      "afterKeydown.fb": function(t, e, i, n, s) {
          var o = e && e.Thumbs;
          o && o.isActive && 71 === s && (n.preventDefault(), o.toggle())
      },
      "beforeClose.fb": function(t, e) {
          var i = e && e.Thumbs;
          i && i.isVisible && !1 !== e.opts.thumbs.hideOnClose && i.close()
      }
  })
}(document, window.jQuery),
function(t, e, i) {
  "use strict";

  function n() {
      var t = e.location.hash.substr(1),
          i = t.split("-"),
          n = i.length > 1 && /^\+?\d+$/.test(i[i.length - 1]) && parseInt(i.pop(-1), 10) || 1;
      return n < 1 && (n = 1), {
          hash: t,
          index: n,
          gallery: i.join("-")
      }
  }

  function s(t) {
      var e;
      "" !== t.gallery && ((e = i("[data-fancybox='" + i.escapeSelector(t.gallery) + "']").eq(t.index - 1)).length || (e = i("#" + i.escapeSelector(t.gallery))), e.length && (a = !1, e.trigger("click")))
  }

  function o(t) {
      var e;
      return !!t && ((e = t.current ? t.current.opts : t.opts).$orig ? e.$orig.data("fancybox") : e.hash || "")
  }
  i.escapeSelector || (i.escapeSelector = function(t) {
      return (t + "").replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g, function(t, e) {
          return e ? "\0" === t ? "ï¿½" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
      })
  });
  var a = !0,
      r = null,
      l = null;
  i(function() {
      setTimeout(function() {
          !1 !== i.fancybox.defaults.hash && (i(t).on({
              "onInit.fb": function(t, e) {
                  var i, s;
                  !1 !== e.group[e.currIndex].opts.hash && (i = n(), (s = o(e)) && i.gallery && s == i.gallery && (e.currIndex = i.index - 1))
              },
              "beforeShow.fb": function(i, n, s) {
                  var c;
                  !1 !== s.opts.hash && ((c = o(n)) && "" !== c && (e.location.hash.indexOf(c) < 0 && (n.opts.origHash = e.location.hash), r = c + (n.group.length > 1 ? "-" + (s.index + 1) : ""), "replaceState" in e.history ? (l && clearTimeout(l), l = setTimeout(function() {
                      e.history[a ? "pushState" : "replaceState"]({}, t.title, e.location.pathname + e.location.search + "#" + r), l = null, a = !1
                  }, 300)) : e.location.hash = r))
              },
              "beforeClose.fb": function(n, s, a) {
                  var c, h;
                  l && clearTimeout(l), !1 !== a.opts.hash && (c = o(s), h = s && s.opts.origHash ? s.opts.origHash : "", c && "" !== c && ("replaceState" in history ? e.history.replaceState({}, t.title, e.location.pathname + e.location.search + h) : (e.location.hash = h, i(e).scrollTop(s.scrollTop).scrollLeft(s.scrollLeft))), r = null)
              }
          }), i(e).on("hashchange.fb", function() {
              var t = n();
              i.fancybox.getInstance() ? !r || r === t.gallery + "-" + t.index || 1 === t.index && r == t.gallery || (r = null, i.fancybox.close(), a = !0) : "" !== t.gallery && s(t)
          }), s(n()))
      }, 50)
  })
}(document, window, window.jQuery), $(function() {
  $("li:first-child").addClass("first"), $("li:last-child").addClass("last"), $("tr:nth-child(odd)").addClass("alter"), $('[href="#"]').attr("href", "javascript:;"), now = new Date, thecopyrightYear = now.getYear(), thecopyrightYear < 1900 && (thecopyrightYear += 1900), $("#cur-date").html(thecopyrightYear)
}), $(".jform").each(function() {
  var t = $(this).parent().attr("id"),
      e = $(this).attr("data-role");
  $(this).hasClass("steptwo") || varchk("#" + t, e)
}), $(".jform select.countrylist.multi").fadeTo(0, 0), $("body").delegate("select[name=pc]", "change", function() {
  var t = $(this).parents(".jform").parent().attr("id"),
      e = $(this).children("option:selected").val(),
      i = $(this).children("option:selected").attr("data-name"),
      n = $(this).children("option:selected").attr("data-abbr");
  $("#" + t + " .jform input.cphonecode").val(n + " +" + e), $("#" + t + " .jform input[name=ctry]").val(i), $("#" + t + " .jform input[name=code]").val(e)
}), $("body").delegate(".dob select", "change", function() {
  var t = $(this).parents("form").parents("div").attr("id"),
      e = $("#" + t + " form").find('select[name="month"]').val() + "/" + $("#" + t + " form").find('select[name="day"]').val() + "/" + $("#" + t + " form").find('select[name="year"]').val();
  $("#" + t + " form").find('input[name="param_Date-Of-Birth"]').val(e)
}), $('[name="cn"],[name="msg"]').each(function() {
  $(this).attr({
      minlength: "2"
  })
}), $('[name="cn"],[name="em"]').each(function() {
  $(this).attr("maxlength", "60")
}), $('[name="msg"]').each(function() {
  $(this).attr("maxlength", "1000")
}), $('[name="pn"],[name="apn"]').each(function() {
  $(this).attr({
      minlength: "7",
      maxlength: "11"
  })
}), $(".SelectCountry.code").each(function() {
  $(this).attr({
      id: "code"
  })
}), $(".SelectCountry.acode").each(function() {
  $(this).attr({
      id: "acode"
  })
}), $('[name="cpwd"]').each(function() {
  $(this).attr("equalto", "#" + $(this).parents("form").find('[name="pwd"]').attr("id"))
}), $('[name="phone"], [name="apn"]').each(function() {
  "text" == $(this).attr("type") && $(this).attr("onkeypress", "return numbersonly(this, event)")
}), $('input[type="password"]').keypress(function(t) {
  if (32 === t.which) return !1
}), $(".validate").each(function() {
  var t = $(this).parent().attr("id");
  $.browser.msie && $.browser.version <= 9 ? ($('[type=text]:not("[name=code]"),[type=password]').addClass("placeholder"), $("#code, #acode, .knob").removeClass("placeholder"), jQuery.validator.addMethod("alphanumeric", function(t, e) {
      return this.optional(e) || /^[A-Za-z-.\s\']+$/i.test(t)
  }, "Letters, numbers, and underscores only please"), $("#" + t + " .validate").validate({
      ignore: [],
      invalidHandler: function(t, e) {
          setTimeout(function() {
              $(".placeholder").each(function() {
                  $(this).hasClass("error") ? $(this).parent().children(".phtxt").addClass("error") : $(this).parent().children(".phtxt").removeClass("error")
              })
          }, 500)
      }
  })) : $("#" + t + " .validate").validate()
}), $(window).scroll(function() {
  lazzyload()
}),
function(t) {
  "function" == typeof define && define.amd ? define(["jquery"], function(e) {
      t(e, window, document)
  }) : "object" == typeof module && module.exports ? module.exports = t(require("jquery"), window, document) : t(jQuery, window, document)
}(function(t, e, i, n) {
  "use strict";
  var s = "intlTelInput",
      o = 1,
      a = {
          allowDropdown: !0,
          autoHideDialCode: !0,
          autoPlaceholder: "polite",
          customPlaceholder: null,
          dropdownContainer: "",
          excludeCountries: [],
          formatOnDisplay: !0,
          geoIpLookup: null,
          initialCountry: "",
          nationalMode: !0,
          onlyCountries: [],
          placeholderNumberType: "MOBILE",
          preferredCountries: ["us", "gb", "ca"],
          separateDialCode: !1,
          utilsScript: ""
      },
      r = 38,
      l = 40,
      c = 13,
      h = 27,
      u = 43,
      d = 65,
      p = 90,
      f = 32,
      m = 9,
      g = ["800", "822", "833", "844", "855", "866", "877", "880", "881", "882", "883", "884", "885", "886", "887", "888", "889"];

  function v(e, i) {
      this.telInput = t(e), this.options = t.extend({}, a, i), this.ns = "." + s + o++, this.isGoodBrowser = Boolean(e.setSelectionRange), this.hadInitialPlaceholder = Boolean(t(e).attr("placeholder"))
  }
  t(e).on("load", function() {
      t.fn[s].windowLoaded = !0
  }), v.prototype = {
      _init: function() {
          return this.options.nationalMode && (this.options.autoHideDialCode = !1), this.options.separateDialCode && (this.options.autoHideDialCode = this.options.nationalMode = !1), this.isMobile = /Android.+Mobile|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), this.isMobile && (t("body").addClass("iti-mobile"), this.options.dropdownContainer || (this.options.dropdownContainer = "body")), this.autoCountryDeferred = new t.Deferred, this.utilsScriptDeferred = new t.Deferred, this._processCountryData(), this._generateMarkup(), this._setInitialState(), this._initListeners(), this._initRequests(), [this.autoCountryDeferred, this.utilsScriptDeferred]
      },
      _processCountryData: function() {
          this._processAllCountries(), this._processCountryCodes(), this._processPreferredCountries()
      },
      _addCountryCode: function(t, e, i) {
          e in this.countryCodes || (this.countryCodes[e] = []);
          var n = i || 0;
          this.countryCodes[e][n] = t
      },
      _filterCountries: function(e, i) {
          var n;
          for (n = 0; n < e.length; n++) e[n] = e[n].toLowerCase();
          for (this.countries = [], n = 0; n < y.length; n++) i(t.inArray(y[n].iso2, e)) && this.countries.push(y[n])
      },
      _processAllCountries: function() {
          this.options.onlyCountries.length ? this._filterCountries(this.options.onlyCountries, function(t) {
              return t > -1
          }) : this.options.excludeCountries.length ? this._filterCountries(this.options.excludeCountries, function(t) {
              return -1 == t
          }) : this.countries = y
      },
      _processCountryCodes: function() {
          this.countryCodes = {};
          for (var t = 0; t < this.countries.length; t++) {
              var e = this.countries[t];
              if (this._addCountryCode(e.iso2, e.dialCode, e.priority), e.areaCodes)
                  for (var i = 0; i < e.areaCodes.length; i++) this._addCountryCode(e.iso2, e.dialCode + e.areaCodes[i])
          }
      },
      _processPreferredCountries: function() {
          this.preferredCountries = [];
          for (var t = 0; t < this.options.preferredCountries.length; t++) {
              var e = this.options.preferredCountries[t].toLowerCase(),
                  i = this._getCountryData(e, !1, !0);
              i && this.preferredCountries.push(i)
          }
      },
      _generateMarkup: function() {
          this.telInput.attr("autocomplete", "off");
          var e = "intl-tel-input";
          this.options.allowDropdown && (e += " allow-dropdown"), this.options.separateDialCode && (e += " separate-dial-code"), this.telInput.wrap(t("<div>", {
              class: e
          })), this.flagsContainer = t("<div>", {
              class: "flag-container"
          }).insertBefore(this.telInput);
          var i = t("<div>", {
              class: "selected-flag"
          });
          i.appendTo(this.flagsContainer), this.selectedFlagInner = t("<div>", {
              class: "iti-flag"
          }).appendTo(i), this.options.separateDialCode && (this.selectedDialCode = t("<div>", {
              class: "selected-dial-code"
          }).appendTo(i)), this.options.allowDropdown ? (i.attr("tabindex", "0"), t("<div>", {
              class: "iti-arrow"
          }).appendTo(i), this.countryList = t("<ul>", {
              class: "country-list hide"
          }), this.preferredCountries.length && (this._appendListItems(this.preferredCountries, "preferred"), t("<li>", {
              class: "divider"
          }).appendTo(this.countryList)), this._appendListItems(this.countries, ""), this.countryListItems = this.countryList.children(".country"), this.options.dropdownContainer ? this.dropdown = t("<div>", {
              class: "intl-tel-input iti-container"
          }).append(this.countryList) : this.countryList.appendTo(this.flagsContainer)) : this.countryListItems = t()
      },
      _appendListItems: function(t, e) {
          for (var i = "", n = 0; n < t.length; n++) {
              var s = t[n];
              i += "<li class='country " + e + "' data-dial-code='" + s.dialCode + "' data-country-code='" + s.iso2 + "'>", i += "<div class='flag-box'><div class='iti-flag " + s.iso2 + "'></div></div>", i += "<span class='country-name'>" + s.name + "</span>", i += "<span class='dial-code'>+" + s.dialCode + "</span>", i += "</li>"
          }
          this.countryList.append(i)
      },
      _setInitialState: function() {
          var t = this.telInput.val();
          this._getDialCode(t) && !this._isRegionlessNanp(t) ? this._updateFlagFromNumber(t) : "auto" !== this.options.initialCountry && (this.options.initialCountry ? this._setFlag(this.options.initialCountry.toLowerCase()) : (this.defaultCountry = this.preferredCountries.length ? this.preferredCountries[0].iso2 : this.countries[0].iso2, t || this._setFlag(this.defaultCountry)), t || this.options.nationalMode || this.options.autoHideDialCode || this.options.separateDialCode || this.telInput.val("+" + this.selectedCountryData.dialCode)), t && this._updateValFromNumber(t)
      },
      _initListeners: function() {
          this._initKeyListeners(), this.options.autoHideDialCode && this._initFocusListeners(), this.options.allowDropdown && this._initDropdownListeners()
      },
      _initDropdownListeners: function() {
          var t = this,
              e = this.telInput.closest("label");
          e.length && e.on("click" + this.ns, function(e) {
              t.countryList.hasClass("hide") ? t.telInput.focus() : e.preventDefault()
          }), this.selectedFlagInner.parent().on("click" + this.ns, function(e) {
              !t.countryList.hasClass("hide") || t.telInput.prop("disabled") || t.telInput.prop("readonly") || t._showDropdown()
          }), this.flagsContainer.on("keydown" + t.ns, function(e) {
              !t.countryList.hasClass("hide") || e.which != r && e.which != l && e.which != f && e.which != c || (e.preventDefault(), e.stopPropagation(), t._showDropdown()), e.which == m && t._closeDropdown()
          })
      },
      _initRequests: function() {
          var i = this;
          this.options.utilsScript ? t.fn[s].windowLoaded ? t.fn[s].loadUtils(this.options.utilsScript, this.utilsScriptDeferred) : t(e).on("load", function() {
              t.fn[s].loadUtils(i.options.utilsScript, i.utilsScriptDeferred)
          }) : this.utilsScriptDeferred.resolve(), "auto" === this.options.initialCountry ? this._loadAutoCountry() : this.autoCountryDeferred.resolve()
      },
      _loadAutoCountry: function() {
          t.fn[s].autoCountry ? this.handleAutoCountry() : t.fn[s].startedLoadingAutoCountry || (t.fn[s].startedLoadingAutoCountry = !0, "function" == typeof this.options.geoIpLookup && this.options.geoIpLookup(function(e) {
              t.fn[s].autoCountry = e.toLowerCase(), setTimeout(function() {
                  t(".intl-tel-input input").intlTelInput("handleAutoCountry")
              })
          }))
      },
      _initKeyListeners: function() {
          var t = this;
          this.telInput.on("keyup" + this.ns, function() {
              t._updateFlagFromNumber(t.telInput.val()) && t._triggerCountryChange()
          }), this.telInput.on("cut" + this.ns + " paste" + this.ns, function() {
              setTimeout(function() {
                  t._updateFlagFromNumber(t.telInput.val()) && t._triggerCountryChange()
              })
          })
      },
      _cap: function(t) {
          var e = this.telInput.attr("maxlength");
          return e && t.length > e ? t.substr(0, e) : t
      },
      _initFocusListeners: function() {
          var e = this;
          this.telInput.on("mousedown" + this.ns, function(t) {
              e.telInput.is(":focus") || e.telInput.val() || (t.preventDefault(), e.telInput.focus())
          }), this.telInput.on("focus" + this.ns, function(t) {
              e.telInput.val() || e.telInput.prop("readonly") || !e.selectedCountryData.dialCode || (e.telInput.val("+" + e.selectedCountryData.dialCode), e.telInput.one("keypress.plus" + e.ns, function(t) {
                  t.which == u && e.telInput.val("")
              }), setTimeout(function() {
                  var t = e.telInput[0];
                  if (e.isGoodBrowser) {
                      var i = e.telInput.val().length;
                      t.setSelectionRange(i, i)
                  }
              }))
          });
          var i = this.telInput.prop("form");
          i && t(i).on("submit" + this.ns, function() {
              e._removeEmptyDialCode()
          }), this.telInput.on("blur" + this.ns, function() {
              e._removeEmptyDialCode()
          })
      },
      _removeEmptyDialCode: function() {
          var t = this.telInput.val();
          if ("+" == t.charAt(0)) {
              var e = this._getNumeric(t);
              e && this.selectedCountryData.dialCode != e || this.telInput.val("")
          }
          this.telInput.off("keypress.plus" + this.ns)
      },
      _getNumeric: function(t) {
          return t.replace(/\D/g, "")
      },
      _showDropdown: function() {
          this._setDropdownPosition();
          var t = this.countryList.children(".active");
          t.length && (this._highlightListItem(t), this._scrollTo(t)), this._bindDropdownListeners(), this.selectedFlagInner.children(".iti-arrow").addClass("up")
      },
      _setDropdownPosition: function() {
          var i = this;
          if (this.options.dropdownContainer && this.dropdown.appendTo(this.options.dropdownContainer), this.dropdownHeight = this.countryList.removeClass("hide").outerHeight(), !this.isMobile) {
              var n = this.telInput.offset(),
                  s = n.top,
                  o = t(e).scrollTop(),
                  a = s + this.telInput.outerHeight() + this.dropdownHeight < o + t(e).height(),
                  r = s - this.dropdownHeight > o;
              if (this.countryList.toggleClass("dropup", !a && r), this.options.dropdownContainer) {
                  var l = !a && r ? 0 : this.telInput.innerHeight();
                  this.dropdown.css({
                      top: s + l,
                      left: n.left
                  }), t(e).on("scroll" + this.ns, function() {
                      i._closeDropdown()
                  })
              }
          }
      },
      _bindDropdownListeners: function() {
          var e = this;
          this.countryList.on("mouseover" + this.ns, ".country", function(i) {
              e._highlightListItem(t(this))
          }), this.countryList.on("click" + this.ns, ".country", function(i) {
              e._selectListItem(t(this))
          });
          var n = !0;
          t("html").on("click" + this.ns, function(t) {
              n || e._closeDropdown(), n = !1
          });
          var s = "",
              o = null;
          t(i).on("keydown" + this.ns, function(t) {
              t.preventDefault(), t.which == r || t.which == l ? e._handleUpDownKey(t.which) : t.which == c ? e._handleEnterKey() : t.which == h ? e._closeDropdown() : (t.which >= d && t.which <= p || t.which == f) && (o && clearTimeout(o), s += String.fromCharCode(t.which), e._searchForCountry(s), o = setTimeout(function() {
                  s = ""
              }, 1e3))
          })
      },
      _handleUpDownKey: function(t) {
          var e = this.countryList.children(".highlight").first(),
              i = t == r ? e.prev() : e.next();
          i.length && (i.hasClass("divider") && (i = t == r ? i.prev() : i.next()), this._highlightListItem(i), this._scrollTo(i))
      },
      _handleEnterKey: function() {
          var t = this.countryList.children(".highlight").first();
          t.length && this._selectListItem(t)
      },
      _searchForCountry: function(t) {
          for (var e = 0; e < this.countries.length; e++)
              if (this._startsWith(this.countries[e].name, t)) {
                  var i = this.countryList.children("[data-country-code=" + this.countries[e].iso2 + "]").not(".preferred");
                  this._highlightListItem(i), this._scrollTo(i, !0);
                  break
              }
      },
      _startsWith: function(t, e) {
          return t.substr(0, e.length).toUpperCase() == e
      },
      _updateValFromNumber: function(t) {
          if (this.options.formatOnDisplay && e.intlTelInputUtils && this.selectedCountryData) {
              var i = this.options.separateDialCode || !this.options.nationalMode && "+" == t.charAt(0) ? intlTelInputUtils.numberFormat.INTERNATIONAL : intlTelInputUtils.numberFormat.NATIONAL;
              t = intlTelInputUtils.formatNumber(t, this.selectedCountryData.iso2, i)
          }
          t = this._beforeSetNumber(t), this.telInput.val(t)
      },
      _updateFlagFromNumber: function(e) {
          e && this.options.nationalMode && this.selectedCountryData && "1" == this.selectedCountryData.dialCode && "+" != e.charAt(0) && ("1" != e.charAt(0) && (e = "1" + e), e = "+" + e);
          var i = this._getDialCode(e),
              n = null,
              s = this._getNumeric(e);
          if (i) {
              var o = this.countryCodes[this._getNumeric(i)],
                  a = this.selectedCountryData && t.inArray(this.selectedCountryData.iso2, o) > -1,
                  r = "+1" == i && s.length >= 4;
              if ((!(this.selectedCountryData && "1" == this.selectedCountryData.dialCode) || !this._isRegionlessNanp(s)) && (!a || r))
                  for (var l = 0; l < o.length; l++)
                      if (o[l]) {
                          n = o[l];
                          break
                      }
          } else "+" == e.charAt(0) && s.length ? n = "" : e && "+" != e || (n = this.defaultCountry);
          return null !== n && this._setFlag(n)
      },
      _isRegionlessNanp: function(e) {
          var i = this._getNumeric(e);
          if ("1" == i.charAt(0)) {
              var n = i.substr(1, 3);
              return t.inArray(n, g) > -1
          }
          return !1
      },
      _highlightListItem: function(t) {
          this.countryListItems.removeClass("highlight"), t.addClass("highlight")
      },
      _getCountryData: function(t, e, i) {
          for (var n = e ? y : this.countries, s = 0; s < n.length; s++)
              if (n[s].iso2 == t) return n[s];
          if (i) return null;
          throw new Error("No country data for '" + t + "'")
      },
      _setFlag: function(e) {
          var i = this.selectedCountryData && this.selectedCountryData.iso2 ? this.selectedCountryData : {};
          this.selectedCountryData = e ? this._getCountryData(e, !1, !1) : {}, this.selectedCountryData.iso2 && (this.defaultCountry = this.selectedCountryData.iso2), this.selectedFlagInner.attr("class", "iti-flag " + e);
          var n = e ? this.selectedCountryData.name + ": +" + this.selectedCountryData.dialCode : "Unknown",
              s = n.toUpperCase().split(":")[0];
          t('input[name="ctry"]').val(s);
          var o = n.split(":")[1];
          if (t('input[name="pc"]').val(o), this.selectedFlagInner.parent().attr("title", n), this.options.separateDialCode) {
              var a = this.selectedCountryData.dialCode ? "+" + this.selectedCountryData.dialCode : "",
                  r = this.telInput.parent();
              i.dialCode && r.removeClass("iti-sdc-" + (i.dialCode.length + 1)), a && r.addClass("iti-sdc-" + a.length), this.selectedDialCode.text(a)
          }
          return this._updatePlaceholder(), this.countryListItems.removeClass("active"), e && this.countryListItems.find(".iti-flag." + e).first().closest(".country").addClass("active"), i.iso2 !== e
      },
      _updatePlaceholder: function() {
          var t = "aggressive" === this.options.autoPlaceholder || !this.hadInitialPlaceholder && (!0 === this.options.autoPlaceholder || "polite" === this.options.autoPlaceholder);
          if (e.intlTelInputUtils && t && this.selectedCountryData) {
              var i = intlTelInputUtils.numberType[this.options.placeholderNumberType],
                  n = this.selectedCountryData.iso2 ? intlTelInputUtils.getExampleNumber(this.selectedCountryData.iso2, this.options.nationalMode, i) : "";
              n = this._beforeSetNumber(n), "function" == typeof this.options.customPlaceholder && (n = this.options.customPlaceholder(n, this.selectedCountryData)), this.telInput.attr("placeholder", n)
          }
      },
      _selectListItem: function(t) {
          var e = this._setFlag(t.attr("data-country-code"));
          if (this._closeDropdown(), this._updateDialCode(t.attr("data-dial-code"), !0), this.telInput.focus(), this.isGoodBrowser) {
              var i = this.telInput.val().length;
              this.telInput[0].setSelectionRange(i, i)
          }
          e && this._triggerCountryChange()
      },
      _closeDropdown: function() {
          this.countryList.addClass("hide"), this.selectedFlagInner.children(".iti-arrow").removeClass("up"), t(i).off(this.ns), t("html").off(this.ns), this.countryList.off(this.ns), this.options.dropdownContainer && (this.isMobile || t(e).off("scroll" + this.ns), this.dropdown.detach())
      },
      _scrollTo: function(t, e) {
          var i = this.countryList,
              n = i.height(),
              s = i.offset().top,
              o = s + n,
              a = t.outerHeight(),
              r = t.offset().top,
              l = r + a,
              c = r - s + i.scrollTop(),
              h = n / 2 - a / 2;
          if (r < s) e && (c -= h), i.scrollTop(c);
          else if (l > o) {
              e && (c += h);
              var u = n - a;
              i.scrollTop(c - u)
          }
      },
      _updateDialCode: function(t, e) {
          var i, n = this.telInput.val();
          if (t = "+" + t, "+" == n.charAt(0)) {
              var s = this._getDialCode(n);
              i = s ? n.replace(s, t) : t
          } else {
              if (this.options.nationalMode || this.options.separateDialCode) return;
              if (n) i = t + n;
              else {
                  if (!e && this.options.autoHideDialCode) return;
                  i = t
              }
          }
          this.telInput.val(i)
      },
      _getDialCode: function(e) {
          var i = "";
          if ("+" == e.charAt(0))
              for (var n = "", s = 0; s < e.length; s++) {
                  var o = e.charAt(s);
                  if (t.isNumeric(o) && (n += o, this.countryCodes[n] && (i = e.substr(0, s + 1)), 4 == n.length)) break
              }
          return i
      },
      _getFullNumber: function() {
          var e = t.trim(this.telInput.val()),
              i = this.selectedCountryData.dialCode,
              n = this._getNumeric(e),
              s = "1" == n.charAt(0) ? n : "1" + n;
          return (this.options.separateDialCode ? "+" + i : "+" != e.charAt(0) && "1" != e.charAt(0) && i && "1" == i.charAt(0) && 4 == i.length && i != s.substr(0, 4) ? i.substr(1) : "") + e
      },
      _beforeSetNumber: function(t) {
          if (this.options.separateDialCode) {
              var e = this._getDialCode(t);
              if (e) {
                  null !== this.selectedCountryData.areaCodes && (e = "+" + this.selectedCountryData.dialCode);
                  var i = " " === t[e.length] || "-" === t[e.length] ? e.length + 1 : e.length;
                  t = t.substr(i)
              }
          }
          return this._cap(t)
      },
      _triggerCountryChange: function() {
          this.telInput.trigger("countrychange", this.selectedCountryData)
      },
      handleAutoCountry: function() {
          "auto" === this.options.initialCountry && (this.defaultCountry = t.fn[s].autoCountry, this.telInput.val() || this.setCountry(this.defaultCountry), this.autoCountryDeferred.resolve())
      },
      handleUtils: function() {
          e.intlTelInputUtils && (this.telInput.val() && this._updateValFromNumber(this.telInput.val()), this._updatePlaceholder()), this.utilsScriptDeferred.resolve()
      },
      destroy: function() {
          if (this.allowDropdown && (this._closeDropdown(), this.selectedFlagInner.parent().off(this.ns), this.telInput.closest("label").off(this.ns)), this.options.autoHideDialCode) {
              var e = this.telInput.prop("form");
              e && t(e).off(this.ns)
          }
          this.telInput.off(this.ns), this.telInput.parent().before(this.telInput).remove()
      },
      getExtension: function() {
          return e.intlTelInputUtils ? intlTelInputUtils.getExtension(this._getFullNumber(), this.selectedCountryData.iso2) : ""
      },
      getNumber: function(t) {
          return e.intlTelInputUtils ? intlTelInputUtils.formatNumber(this._getFullNumber(), this.selectedCountryData.iso2, t) : ""
      },
      getNumberType: function() {
          return e.intlTelInputUtils ? intlTelInputUtils.getNumberType(this._getFullNumber(), this.selectedCountryData.iso2) : -99
      },
      getSelectedCountryData: function() {
          return this.selectedCountryData || {}
      },
      getValidationError: function() {
          return e.intlTelInputUtils ? intlTelInputUtils.getValidationError(this._getFullNumber(), this.selectedCountryData.iso2) : -99
      },
      isValidNumber: function() {
          var i = t.trim(this._getFullNumber()),
              n = this.options.nationalMode ? this.selectedCountryData.iso2 : "";
          return e.intlTelInputUtils ? intlTelInputUtils.isValidNumber(i, n) : null
      },
      setCountry: function(t) {
          t = t.toLowerCase(), this.selectedFlagInner.hasClass(t) || (this._setFlag(t), this._updateDialCode(this.selectedCountryData.dialCode, !1), this._triggerCountryChange())
      },
      setNumber: function(t) {
          var e = this._updateFlagFromNumber(t);
          this._updateValFromNumber(t), e && this._triggerCountryChange()
      }
  }, t.fn[s] = function(e) {
      var i, o = arguments;
      if (e === n || "object" == typeof e) {
          var a = [];
          return this.each(function() {
              if (!t.data(this, "plugin_" + s)) {
                  var i = new v(this, e),
                      n = i._init();
                  a.push(n[0]), a.push(n[1]), t.data(this, "plugin_" + s, i)
              }
          }), t.when.apply(null, a)
      }
      if ("string" == typeof e && "_" !== e[0]) return this.each(function() {
          var n = t.data(this, "plugin_" + s);
          n instanceof v && "function" == typeof n[e] && (i = n[e].apply(n, Array.prototype.slice.call(o, 1))), "destroy" === e && t.data(this, "plugin_" + s, null)
      }), i !== n ? i : this
  }, t.fn[s].getCountryData = function() {
      return y
  }, t.fn[s].loadUtils = function(e, i) {
      t.fn[s].loadedUtilsScript ? i && i.resolve() : (t.fn[s].loadedUtilsScript = !0, t.ajax({
          type: "GET",
          url: e,
          complete: function() {
              t(".intl-tel-input input").intlTelInput("handleUtils")
          },
          dataType: "script",
          cache: !0
      }))
  }, t.fn[s].version = "11.0.0", t.fn[s].defaults = a;
  for (var y = [
          ["Afghanistan", "af", "93"],
          ["Aland Islands", "ax", "358", 1],
          ["Albania ", "al", "355"],
          ["Algeria", "dz", "213"],
          ["American Samoa", "as", "1684"],
          ["Angola", "ao", "244"],
          ["Anguilla", "ai", "1264"],
          ["Antigua and Barbuda", "ag", "1268"],
          ["Argentina", "ar", "54"],
          ["Armenia ", "am", "374"],
          ["Aruba", "aw", "297"],
          ["Australia", "au", "61", 0],
          ["Austria ", "at", "43"],
          ["Azerbaijan", "az", "994"],
          ["Bahamas", "bs", "1242"],
          ["Bahrain", "bh", "973"],
          ["Bangladesh", "bd", "880"],
          ["Barbados", "bb", "1246"],
          ["Belarus", "by", "375"],
          ["Belgium", "be", "32"],
          ["Belize", "bz", "501"],
          ["Benin", "bj", "229"],
          ["Bermuda", "bm", "1441"],
          ["Bhutan ", "bt", "975"],
          ["Bolivia", "bo", "591"],
          ["Bosnia and Herzegovina ", "ba", "387"],
          ["Botswana", "bw", "267"],
          ["Brazil", "br", "55"],
          ["British Indian Ocean Territory", "io", "246"],
          ["British Virgin Islands", "vg", "1284"],
          ["Brunei", "bn", "673"],
          ["Bulgaria ", "bg", "359"],
          ["Burkina Faso", "bf", "226"],
          ["Burundi", "bi", "257"],
          ["Cambodia ", "kh", "855"],
          ["Cameroon ", "cm", "237"],
          ["Canada", "ca", "1", 1, ["204", "226", "236", "249", "250", "289", "306", "343", "365", "387", "403", "416", "418", "431", "437", "438", "450", "506", "514", "519", "548", "579", "581", "587", "604", "613", "639", "647", "672", "705", "709", "742", "778", "780", "782", "807", "819", "825", "867", "873", "902", "905"]],
          ["Cape Verde", "cv", "238"],
          ["Caribbean Netherlands", "bq", "599", 1],
          ["Cayman Islands", "ky", "1345"],
          ["Central African Republic", "cf", "236"],
          ["Chad", "td", "235"],
          ["Chile", "cl", "56"],
          ["China", "cn", "86"],
          ["Christmas Island", "cx", "61", 2],
          ["Cocos", "cc", "61", 1],
          ["Colombia", "co", "57"],
          ["Comoros ", "km", "269"],
          ["Congo", "cg", "242"],
          ["Cook Islands", "ck", "682"],
          ["Costa Rica", "cr", "506"],
          ["Cote d'Ivoire", "ci", "225"],
          ["Croatia", "hr", "385"],
          ["Cuba", "cu", "53"],
          ["Curacao", "cw", "599", 0],
          ["Cyprus", "cy", "357"],
          ["Czech Republic", "cz", "420"],
          ["Denmark", "dk", "45"],
          ["Djibouti", "dj", "253"],
          ["Dominica", "dm", "1767"],
          ["Dominican Republic", "do", "1", 2, ["809", "829", "849"]],
          ["DR Congo", "cd", "243"],
          ["Ecuador", "ec", "593"],
          ["Egypt", "eg", "20"],
          ["El Salvador", "sv", "503"],
          ["Equatorial Guinea", "gq", "240"],
          ["Eritrea", "er", "291"],
          ["Estonia (Eesti)", "ee", "372"],
          ["Ethiopia", "et", "251"],
          ["Falkland Islands", "fk", "500"],
          ["Faroe Islands", "fo", "298"],
          ["Fiji", "fj", "679"],
          ["Finland", "fi", "358", 0],
          ["France", "fr", "33"],
          ["French Guiana ", "gf", "594"],
          ["French Polynesia", "pf", "689"],
          ["Gabon", "ga", "241"],
          ["Gambia", "gm", "220"],
          ["Georgia", "ge", "995"],
          ["Germany", "de", "49"],
          ["Ghana", "gh", "233"],
          ["Gibraltar", "gi", "350"],
          ["Greece", "gr", "30"],
          ["Greenland", "gl", "299"],
          ["Grenada", "gd", "1473"],
          ["Guadeloupe", "gp", "590", 0],
          ["Guam", "gu", "1671"],
          ["Guatemala", "gt", "502"],
          ["Guernsey", "gg", "44", 1],
          ["Guinea", "gn", "224"],
          ["Guinea-Bissau", "gw", "245"],
          ["Guyana", "gy", "592"],
          ["Haiti", "ht", "509"],
          ["Honduras", "hn", "504"],
          ["Hong Kong", "hk", "852"],
          ["Hungary", "hu", "36"],
          ["Iceland", "is", "354"],
          ["India", "in", "91"],
          ["Indonesia", "id", "62"],
          ["Iran ", "ir", "98"],
          ["Iraq ", "iq", "964"],
          ["Ireland", "ie", "353"],
          ["Isle of Man", "im", "44", 2],
          ["Israel", "il", "972"],
          ["Italy", "it", "39", 0],
          ["Jamaica", "jm", "1876"],
          ["Japan ", "jp", "81"],
          ["Jersey", "je", "44", 3],
          ["Jordan ", "jo", "962"],
          ["Kazakhstan", "kz", "7", 1],
          ["Kenya", "ke", "254"],
          ["Kiribati", "ki", "686"],
          ["Kosovo", "xk", "383"],
          ["Kuwait", "kw", "965"],
          ["Kyrgyzstan ", "kg", "996"],
          ["Laos", "la", "856"],
          ["Latvia", "lv", "371"],
          ["Lebanon", "lb", "961"],
          ["Lesotho", "ls", "266"],
          ["Liberia", "lr", "231"],
          ["Libya", "ly", "218"],
          ["Liechtenstein", "li", "423"],
          ["Lithuania", "lt", "370"],
          ["Luxembourg", "lu", "352"],
          ["Macau", "mo", "853"],
          ["Macedonia", "mk", "389"],
          ["Madagascar", "mg", "261"],
          ["Malawi", "mw", "265"],
          ["Malaysia", "my", "60"],
          ["Maldives", "mv", "960"],
          ["Mali", "ml", "223"],
          ["Malta", "mt", "356"],
          ["Marshall Islands", "mh", "692"],
          ["Martinique", "mq", "596"],
          ["Mauritania", "mr", "222"],
          ["Mauritius", "mu", "230"],
          ["Mayotte", "yt", "262", 1],
          ["Mexico", "mx", "52"],
          ["Micronesia", "fm", "691"],
          ["Moldova", "md", "373"],
          ["Monaco", "mc", "377"],
          ["Mongolia", "mn", "976"],
          ["Montenegro", "me", "382"],
          ["Montserrat", "ms", "1664"],
          ["Morocco", "ma", "212", 0],
          ["Mozambique", "mz", "258"],
          ["Myanmar", "mm", "95"],
          ["Namibia", "na", "264"],
          ["Nauru", "nr", "674"],
          ["Nepal", "np", "977"],
          ["Netherlands", "nl", "31"],
          ["New Caledonia", "nc", "687"],
          ["New Zealand", "nz", "64"],
          ["Nicaragua", "ni", "505"],
          ["Niger", "ne", "227"],
          ["Nigeria", "ng", "234"],
          ["Niue", "nu", "683"],
          ["Norfolk Island", "nf", "672"],
          ["North Korea", "kp", "850"],
          ["Northern Mariana Islands", "mp", "1670"],
          ["Norway", "no", "47", 0],
          ["Oman", "om", "968"],
          ["Pakistan ", "pk", "92"],
          ["Palau", "pw", "680"],
          ["Palestine", "ps", "970"],
          ["Panama", "pa", "507"],
          ["Papua New Guinea", "pg", "675"],
          ["Paraguay", "py", "595"],
          ["Peru", "pe", "51"],
          ["Philippines", "ph", "63"],
          ["Poland ", "pl", "48"],
          ["Portugal", "pt", "351"],
          ["Puerto Rico", "pr", "1", 3, ["787", "939"]],
          ["Qatar", "qa", "974"],
          ["Reunion", "re", "262", 0],
          ["Romania ", "ro", "40"],
          ["Russia", "ru", "7", 0],
          ["Rwanda", "rw", "250"],
          ["Saint Barthelemy", "bl", "590", 1],
          ["Saint Helena", "sh", "290"],
          ["Saint Kitts and Nevis", "kn", "1869"],
          ["Saint Lucia", "lc", "1758"],
          ["Saint Martin", "mf", "590", 2],
          ["Saint Pierre and Miquelon", "pm", "508"],
          ["Saint Vincent and the Grenadines", "vc", "1784"],
          ["Samoa", "ws", "685"],
          ["San Marino", "sm", "378"],
          ["Sao Tome and Principe", "st", "239"],
          ["Saudi Arabia", "sa", "966"],
          ["Senegal", "sn", "221"],
          ["Serbia", "rs", "381"],
          ["Seychelles", "sc", "248"],
          ["Sierra Leone", "sl", "232"],
          ["Singapore", "sg", "65"],
          ["Sint Maarten", "sx", "1721"],
          ["Slovakia", "sk", "421"],
          ["Slovenia", "si", "386"],
          ["Solomon Islands", "sb", "677"],
          ["Somalia", "so", "252"],
          ["South Africa", "za", "27"],
          ["South Korea", "kr", "82"],
          ["South Sudan", "ss", "211"],
          ["Spain ", "es", "34"],
          ["Sri Lanka ", "lk", "94"],
          ["Sudan", "sd", "249"],
          ["Suriname", "sr", "597"],
          ["Svalbard and Jan Mayen", "sj", "47", 1],
          ["Swaziland", "sz", "268"],
          ["Sweden", "se", "46"],
          ["Switzerland", "ch", "41"],
          ["Syria ", "sy", "963"],
          ["Taiwan", "tw", "886"],
          ["Tajikistan", "tj", "992"],
          ["Tanzania", "tz", "255"],
          ["Thailand", "th", "66"],
          ["Timor-Leste", "tl", "670"],
          ["Togo", "tg", "228"],
          ["Tokelau", "tk", "690"],
          ["Tonga", "to", "676"],
          ["Trinidad and Tobago", "tt", "1868"],
          ["Tunisia", "tn", "216"],
          ["Turkey (Northern Cyprus)", "tr", "90"],
          ["Turkmenistan", "tm", "993"],
          ["Turks and Caicos Islands", "tc", "1649"],
          ["Tuvalu", "tv", "688"],
          ["U.S. Virgin Islands", "vi", "1340"],
          ["Uganda", "ug", "256"],
          ["Ukraine", "ua", "380"],
          ["United Arab Emirates", "ae", "971"],
          ["United Kingdom", "gb", "44", 0],
          ["United States", "us", "1", 0],
          ["Uruguay", "uy", "598"],
          ["Uzbekistan", "uz", "998"],
          ["Vanuatu", "vu", "678"],
          ["Vatican City", "va", "39", 1],
          ["Venezuela", "ve", "58"],
          ["Vietnam", "vn", "84"],
          ["Wallis and Futuna", "wf", "681"],
          ["Western Sahara", "eh", "212", 1],
          ["Yemen", "ye", "967"],
          ["Zambia", "zm", "260"],
          ["Zimbabwe", "zw", "263"]
      ], b = 0; b < y.length; b++) {
      var _ = y[b];
      y[b] = {
          name: _[0],
          iso2: _[1],
          dialCode: _[2],
          priority: _[3] || 0,
          areaCodes: _[4] || null
      }
  }
}), $("input[name=phone]").intlTelInput({
  geoIpLookup: function(t) {
      $.get("https://ipinfo.io", function() {}, "jsonp").always(function(e) {
          var i = e && e.country ? e.country : "";
          t(i)
      })
  },
  initialCountry: "auto",
  nationalMode: !0,
  separateDialCode: !0
}), $("body").delegate(".country", "click", function() {
  $('input[name="pc"]').val($(this).find(".dial-code").text());
  var t = $(".selected-flag").attr("title").toUpperCase().split(":", 1)[0];
  $('input[name="ctry"]').val(t)
});
var countryData = $.fn.intlTelInput.getCountryData(),
telInput = $("#phone"),
addressDropdown = $("#address-country");
telInput.intlTelInput({
utilsScript: "/assets/js/utils.js"
}), $.each(countryData, function(t, e) {
addressDropdown.append($("<option></option>").attr("value", e.iso2).text(e.name))
});
var initialCountry = telInput.intlTelInput("getSelectedCountryData").iso2;

function CountryFunction() {
var t, e, i;
for (t = document.getElementById("CountryInput").value.toUpperCase(), e = document.getElementById("CountryUL").getElementsByTagName("li"), i = 0; i < e.length; i++) e[i].getElementsByTagName("a")[0].innerHTML.toUpperCase().indexOf(t) > -1 ? e[i].style.display = "" : e[i].style.display = "none"
}
addressDropdown.val(initialCountry), telInput.on("countrychange", function(t, e) {
  addressDropdown.val(e.iso2)
}), addressDropdown.change(function() {
  telInput.intlTelInput("setCountry", $(this).val())
}), $(window).load(function() {
  var t = $(".selected-dial-code").text();
  $(".jform").each(function() {
      var e = $(this).parent().attr("id");
      $("#" + e + 'input[name="pc"]').val(t)
  })
}),
function(t) {
  t.fn.jPushMenu = function(e) {
      var i = t.extend({}, t.fn.jPushMenu.defaultOptions, e);
      t("body").addClass(i.pushBodyClass), t(this).addClass("jPushMenuBtn"), t(this).click(function(e) {
          e.stopPropagation();
          var n = "",
              s = "";
          t(this).is("." + i.showLeftClass) ? (n = ".cbp-spmenu-left", s = "toright") : t(this).is("." + i.showRightClass) ? (n = ".cbp-spmenu-right", s = "toleft") : t(this).is("." + i.showTopClass) ? n = ".cbp-spmenu-top" : t(this).is("." + i.showBottomClass) && (n = ".cbp-spmenu-bottom"), "" != n && (t(this).toggleClass(i.activeClass), t(n).toggleClass(i.menuOpenClass), t(this).is("." + i.pushBodyClass) && "" != s && t("body").toggleClass(i.pushBodyClass + "-" + s), t(".jPushMenuBtn").not(t(this)).toggleClass("disabled"))
      });
      var n = function(e) {
          t(".jPushMenuBtn,body,.cbp-spmenu").removeClass("disabled " + e.activeClass + " " + e.menuOpenClass + " " + e.pushBodyClass + "-toleft " + e.pushBodyClass + "-toright")
      };
      i.closeOnClickOutside && t(".container").click(function() {
          n(i)
      }), i.closeOnClickLink && t(".cbp-spmenu a").on("click", function() {})
  }, t.fn.jPushMenu.defaultOptions = {
      pushBodyClass: "push-body",
      showLeftClass: "menu-left",
      showRightClass: "menu-right",
      showTopClass: "menu-top",
      showBottomClass: "menu-bottom",
      activeClass: "menu-active",
      menuOpenClass: "menu-open",
      closeOnClickOutside: !0,
      closeOnClickLink: !0
  }
}(jQuery), $(".countryinput").intlTelInput({
  autoHideDialCode: !1,
  geoIpLookup: function(t) {
      $.get("https://ipinfo.io", function() {}, "jsonp").always(function(e) {
          var i = e && e.country ? e.country : "";
          t(i), $(".countryinput").val($(".country.active").find(".country-name").text())
      })
  },
  initialCountry: "auto",
  nationalMode: !0,
  separateDialCode: !1,
  utilsScript: "/website-assets/js/utils.js"
}), $("body").delegate(".country", "click", function() {
  $(".countryinput").val($(this).find(".country-name").text())
});






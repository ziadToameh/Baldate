(function (r, n) {
    function zb(a) { var b = ya[a] = {}; c.each(a.split(G), function (a, c) { b[c] = !0 }); return b } function za(a, b, d) { if (d === n && 1 === a.nodeType) if (d = "data-" + b.replace(Ab, "-$1").toLowerCase(), d = a.getAttribute(d), "string" === typeof d) { try { d = "true" === d ? !0 : "false" === d ? !1 : "null" === d ? null : +d + "" === d ? +d : Bb.test(d) ? c.parseJSON(d) : d } catch (e) { } c.data(a, b, d) } else d = n; return d } function ma(a) { for (var b in a) if (("data" !== b || !c.isEmptyObject(a[b])) && "toJSON" !== b) return !1; return !0 } function N() { return !1 } function aa() { return !0 }
    function Y(a) { return !a || !a.parentNode || 11 === a.parentNode.nodeType } function Aa(a, b) { do a = a[b]; while (a && 1 !== a.nodeType); return a } function Ba(a, b, d) { b = b || 0; if (c.isFunction(b)) return c.grep(a, function (a, c) { return !!b.call(a, c, a) === d }); if (b.nodeType) return c.grep(a, function (a, c) { return a === b === d }); if ("string" === typeof b) { var e = c.grep(a, function (a) { return 1 === a.nodeType }); if (Cb.test(b)) return c.filter(b, e, !d); b = c.filter(b, e) } return c.grep(a, function (a, e) { return 0 <= c.inArray(a, b) === d }) } function Ca(a) {
        var b =
        Da.split("|"); a = a.createDocumentFragment(); if (a.createElement) for (; b.length;) a.createElement(b.pop()); return a
    } function Db(a, b) { return a.getElementsByTagName(b)[0] || a.appendChild(a.ownerDocument.createElement(b)) } function Ea(a, b) { if (1 === b.nodeType && c.hasData(a)) { var d, e, f; e = c._data(a); var g = c._data(b, e), h = e.events; if (h) for (d in delete g.handle, g.events = {}, h) for (e = 0, f = h[d].length; e < f; e++) c.event.add(b, d, h[d][e]); g.data && (g.data = c.extend({}, g.data)) } } function Fa(a, b) {
        var d; 1 === b.nodeType && (b.clearAttributes &&
        b.clearAttributes(), b.mergeAttributes && b.mergeAttributes(a), d = b.nodeName.toLowerCase(), "object" === d ? (b.parentNode && (b.outerHTML = a.outerHTML), c.support.html5Clone && a.innerHTML && !c.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === d && Ga.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === d ? b.selected = a.defaultSelected : "input" === d || "textarea" === d ? b.defaultValue = a.defaultValue : "script" === d && b.text !== a.text && (b.text = a.text), b.removeAttribute(c.expando))
    }
    function ba(a) { return "undefined" !== typeof a.getElementsByTagName ? a.getElementsByTagName("*") : "undefined" !== typeof a.querySelectorAll ? a.querySelectorAll("*") : [] } function Ha(a) { Ga.test(a.type) && (a.defaultChecked = a.checked) } function Ia(a, b) { if (b in a) return b; for (var d = b.charAt(0).toUpperCase() + b.slice(1), c = b, f = Ja.length; f--;) if (b = Ja[f] + d, b in a) return b; return c } function R(a, b) { a = b || a; return "none" === c.css(a, "display") || !c.contains(a.ownerDocument, a) } function Ka(a, b) {
        for (var d, e, f = [], g = 0, h = a.length; g <
        h; g++) d = a[g], d.style && (f[g] = c._data(d, "olddisplay"), b ? (f[g] || "none" !== d.style.display || (d.style.display = ""), "" === d.style.display && R(d) && (f[g] = c._data(d, "olddisplay", La(d.nodeName)))) : (e = v(d, "display"), f[g] || "none" === e || c._data(d, "olddisplay", e))); for (g = 0; g < h; g++) d = a[g], !d.style || b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"); return a
    } function Ma(a, b, d) { return (a = Eb.exec(b)) ? Math.max(0, a[1] - (d || 0)) + (a[2] || "px") : b } function Na(a, b, d, e) {
        b = d === (e ? "border" : "content") ?
        4 : "width" === b ? 1 : 0; for (var f = 0; 4 > b; b += 2) "margin" === d && (f += c.css(a, d + C[b], !0)), e ? ("content" === d && (f -= parseFloat(v(a, "padding" + C[b])) || 0), "margin" !== d && (f -= parseFloat(v(a, "border" + C[b] + "Width")) || 0)) : (f += parseFloat(v(a, "padding" + C[b])) || 0, "padding" !== d && (f += parseFloat(v(a, "border" + C[b] + "Width")) || 0)); return f
    } function Oa(a, b, d) {
        var e = "width" === b ? a.offsetWidth : a.offsetHeight, f = !0, g = c.support.boxSizing && "border-box" === c.css(a, "boxSizing"); if (0 >= e || null == e) {
            e = v(a, b); if (0 > e || null == e) e = a.style[b]; if (ca.test(e)) return e;
            f = g && (c.support.boxSizingReliable || e === a.style[b]); e = parseFloat(e) || 0
        } return e + Na(a, b, d || (g ? "border" : "content"), f) + "px"
    } function La(a) {
        if (na[a]) return na[a]; var b = c("<" + a + ">").appendTo(q.body), d = b.css("display"); b.remove(); if ("none" === d || "" === d) F = q.body.appendChild(F || c.extend(q.createElement("iframe"), { frameBorder: 0, width: 0, height: 0 })), U && F.createElement || (U = (F.contentWindow || F.contentDocument).document, U.write("<!doctype html><html><body>"), U.close()), b = U.body.appendChild(U.createElement(a)), d =
        v(b, "display"), q.body.removeChild(F); return na[a] = d
    } function oa(a, b, d, e) { var f; if (c.isArray(b)) c.each(b, function (b, c) { d || Fb.test(a) ? e(a, c) : oa(a + "[" + ("object" === typeof c ? b : "") + "]", c, d, e) }); else if (d || "object" !== c.type(b)) e(a, b); else for (f in b) oa(a + "[" + f + "]", b[f], d, e) } function Pa(a) { return function (b, d) { "string" !== typeof b && (d = b, b = "*"); var e, f, g = b.toLowerCase().split(G), h = 0, k = g.length; if (c.isFunction(d)) for (; h < k; h++) e = g[h], (f = /^\+/.test(e)) && (e = e.substr(1) || "*"), e = a[e] = a[e] || [], e[f ? "unshift" : "push"](d) } }
    function da(a, b, d, c, f, g) { f = f || b.dataTypes[0]; g = g || {}; g[f] = !0; var h; f = a[f]; for (var k = 0, l = f ? f.length : 0, m = a === pa; k < l && (m || !h) ; k++) h = f[k](b, d, c), "string" === typeof h && (!m || g[h] ? h = n : (b.dataTypes.unshift(h), h = da(a, b, d, c, h, g))); !m && h || g["*"] || (h = da(a, b, d, c, "*", g)); return h } function Qa(a, b) { var d, e, f = c.ajaxSettings.flatOptions || {}; for (d in b) b[d] !== n && ((f[d] ? a : e || (e = {}))[d] = b[d]); e && c.extend(!0, a, e) } function Ra() { try { return new r.XMLHttpRequest } catch (a) { } } function Sa() {
        setTimeout(function () { V = n }, 0); return V =
        c.now()
    } function Gb(a, b) { c.each(b, function (b, c) { for (var f = (S[b] || []).concat(S["*"]), g = 0, h = f.length; g < h && !f[g].call(a, b, c) ; g++); }) } function Ta(a, b, d) {
        var e = 0, f = Z.length, g = c.Deferred().always(function () { delete h.elem }), h = function () { for (var b = V || Sa(), b = Math.max(0, k.startTime + k.duration - b), d = 1 - (b / k.duration || 0), c = 0, e = k.tweens.length; c < e; c++) k.tweens[c].run(d); g.notifyWith(a, [k, d, b]); if (1 > d && e) return b; g.resolveWith(a, [k]); return !1 }, k = g.promise({
            elem: a, props: c.extend({}, b), opts: c.extend(!0, { specialEasing: {} },
            d), originalProperties: b, originalOptions: d, startTime: V || Sa(), duration: d.duration, tweens: [], createTween: function (b, d, e) { b = c.Tween(a, k.opts, b, d, k.opts.specialEasing[b] || k.opts.easing); k.tweens.push(b); return b }, stop: function (b) { for (var d = 0, c = b ? k.tweens.length : 0; d < c; d++) k.tweens[d].run(1); b ? g.resolveWith(a, [k, b]) : g.rejectWith(a, [k, b]); return this }
        }); d = k.props; for (Hb(d, k.opts.specialEasing) ; e < f; e++) if (b = Z[e].call(k, a, d, k.opts)) return b; Gb(k, d); c.isFunction(k.opts.start) && k.opts.start.call(a, k); c.fx.timer(c.extend(h,
        { anim: k, queue: k.opts.queue, elem: a })); return k.progress(k.opts.progress).done(k.opts.done, k.opts.complete).fail(k.opts.fail).always(k.opts.always)
    } function Hb(a, b) { var d, e, f, g, h; for (d in a) if (e = c.camelCase(d), f = b[e], g = a[d], c.isArray(g) && (f = g[1], g = a[d] = g[0]), d !== e && (a[e] = g, delete a[d]), (h = c.cssHooks[e]) && "expand" in h) for (d in g = h.expand(g), delete a[e], g) d in a || (a[d] = g[d], b[d] = f); else b[e] = f } function B(a, b, d, c, f) { return new B.prototype.init(a, b, d, c, f) } function ea(a, b) {
        var d, c = { height: a }, f = 0; for (b = b ?
        1 : 0; 4 > f; f += 2 - b) d = C[f], c["margin" + d] = c["padding" + d] = a; b && (c.opacity = c.width = a); return c
    } function Ua(a) { return c.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1 } var Va, fa, q = r.document, Ib = r.location, Jb = r.navigator, Kb = r.jQuery, Lb = r.$, Wa = Array.prototype.push, w = Array.prototype.slice, Xa = Array.prototype.indexOf, Mb = Object.prototype.toString, qa = Object.prototype.hasOwnProperty, ra = String.prototype.trim, c = function (a, b) { return new c.fn.init(a, b, Va) }, ha = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
    Nb = /\S/, G = /\s+/, Ob = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, Pb = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/, Ya = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, Qb = /^[\],:{}\s]*$/, Rb = /(?:^|:|,)(?:\s*\[)+/g, Sb = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, Tb = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g, Ub = /^-ms-/, Vb = /-([\da-z])/gi, Wb = function (a, b) { return (b + "").toUpperCase() }, ia = function () {
        q.addEventListener ? (q.removeEventListener("DOMContentLoaded", ia, !1), c.ready()) : "complete" === q.readyState && (q.detachEvent("onreadystatechange",
        ia), c.ready())
    }, Za = {}; c.fn = c.prototype = {
        constructor: c, init: function (a, b, d) {
            var e; if (!a) return this; if (a.nodeType) return this.context = this[0] = a, this.length = 1, this; if ("string" === typeof a) {
                e = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && 3 <= a.length ? [null, a, null] : Pb.exec(a); if (!e || !e[1] && b) return !b || b.jquery ? (b || d).find(a) : this.constructor(b).find(a); if (e[1]) return a = (b = b instanceof c ? b[0] : b) && b.nodeType ? b.ownerDocument || b : q, a = c.parseHTML(e[1], a, !0), Ya.test(e[1]) && c.isPlainObject(b) && this.attr.call(a,
                b, !0), c.merge(this, a); if ((b = q.getElementById(e[2])) && b.parentNode) { if (b.id !== e[2]) return d.find(a); this.length = 1; this[0] = b } this.context = q; this.selector = a; return this
            } if (c.isFunction(a)) return d.ready(a); a.selector !== n && (this.selector = a.selector, this.context = a.context); return c.makeArray(a, this)
        }, selector: "", jquery: "1.8.3", length: 0, size: function () { return this.length }, toArray: function () { return w.call(this) }, get: function (a) { return null == a ? this.toArray() : 0 > a ? this[this.length + a] : this[a] }, pushStack: function (a,
        b, d) { a = c.merge(this.constructor(), a); a.prevObject = this; a.context = this.context; "find" === b ? a.selector = this.selector + (this.selector ? " " : "") + d : b && (a.selector = this.selector + "." + b + "(" + d + ")"); return a }, each: function (a, b) { return c.each(this, a, b) }, ready: function (a) { c.ready.promise().done(a); return this }, eq: function (a) { a = +a; return -1 === a ? this.slice(a) : this.slice(a, a + 1) }, first: function () { return this.eq(0) }, last: function () { return this.eq(-1) }, slice: function () {
            return this.pushStack(w.apply(this, arguments), "slice",
            w.call(arguments).join(","))
        }, map: function (a) { return this.pushStack(c.map(this, function (b, d) { return a.call(b, d, b) })) }, end: function () { return this.prevObject || this.constructor(null) }, push: Wa, sort: [].sort, splice: [].splice
    }; c.fn.init.prototype = c.fn; c.extend = c.fn.extend = function () {
        var a, b, d, e, f, g = arguments[0] || {}, h = 1, k = arguments.length, l = !1; "boolean" === typeof g && (l = g, g = arguments[1] || {}, h = 2); "object" === typeof g || c.isFunction(g) || (g = {}); k === h && (g = this, --h); for (; h < k; h++) if (null != (a = arguments[h])) for (b in a) d =
        g[b], e = a[b], g !== e && (l && e && (c.isPlainObject(e) || (f = c.isArray(e))) ? (f ? (f = !1, d = d && c.isArray(d) ? d : []) : d = d && c.isPlainObject(d) ? d : {}, g[b] = c.extend(l, d, e)) : e !== n && (g[b] = e)); return g
    }; c.extend({
        noConflict: function (a) { r.$ === c && (r.$ = Lb); a && r.jQuery === c && (r.jQuery = Kb); return c }, isReady: !1, readyWait: 1, holdReady: function (a) { a ? c.readyWait++ : c.ready(!0) }, ready: function (a) {
            if (!0 === a ? !--c.readyWait : !c.isReady) {
                if (!q.body) return setTimeout(c.ready, 1); c.isReady = !0; !0 !== a && 0 < --c.readyWait || (fa.resolveWith(q, [c]), c.fn.trigger &&
                c(q).trigger("ready").off("ready"))
            }
        }, isFunction: function (a) { return "function" === c.type(a) }, isArray: Array.isArray || function (a) { return "array" === c.type(a) }, isWindow: function (a) { return null != a && a == a.window }, isNumeric: function (a) { return !isNaN(parseFloat(a)) && isFinite(a) }, type: function (a) { return null == a ? String(a) : Za[Mb.call(a)] || "object" }, isPlainObject: function (a) {
            if (!a || "object" !== c.type(a) || a.nodeType || c.isWindow(a)) return !1; try {
                if (a.constructor && !qa.call(a, "constructor") && !qa.call(a.constructor.prototype,
                "isPrototypeOf")) return !1
            } catch (b) { return !1 } for (var d in a); return d === n || qa.call(a, d)
        }, isEmptyObject: function (a) { for (var b in a) return !1; return !0 }, error: function (a) { throw Error(a); }, parseHTML: function (a, b, d) { var e; if (!a || "string" !== typeof a) return null; "boolean" === typeof b && (d = b, b = 0); b = b || q; if (e = Ya.exec(a)) return [b.createElement(e[1])]; e = c.buildFragment([a], b, d ? null : []); return c.merge([], (e.cacheable ? c.clone(e.fragment) : e.fragment).childNodes) }, parseJSON: function (a) {
            if (!a || "string" !== typeof a) return null;
            a = c.trim(a); if (r.JSON && r.JSON.parse) return r.JSON.parse(a); if (Qb.test(a.replace(Sb, "@").replace(Tb, "]").replace(Rb, ""))) return (new Function("return " + a))(); c.error("Invalid JSON: " + a)
        }, parseXML: function (a) {
            var b, d; if (!a || "string" !== typeof a) return null; try { r.DOMParser ? (d = new DOMParser, b = d.parseFromString(a, "text/xml")) : (b = new ActiveXObject("Microsoft.XMLDOM"), b.async = "false", b.loadXML(a)) } catch (e) { b = n } b && b.documentElement && !b.getElementsByTagName("parsererror").length || c.error("Invalid XML: " + a);
            return b
        }, noop: function () { }, globalEval: function (a) { a && Nb.test(a) && (r.execScript || function (a) { r.eval.call(r, a) })(a) }, camelCase: function (a) { return a.replace(Ub, "ms-").replace(Vb, Wb) }, nodeName: function (a, b) { return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase() }, each: function (a, b, d) {
            var e, f = 0, g = a.length, h = g === n || c.isFunction(a); if (d) if (h) for (e in a) { if (!1 === b.apply(a[e], d)) break } else for (; f < g && !1 !== b.apply(a[f++], d) ;); else if (h) for (e in a) { if (!1 === b.call(a[e], e, a[e])) break } else for (; f < g && !1 !==
            b.call(a[f], f, a[f++]) ;); return a
        }, trim: ra && !ra.call("\ufeff\u00a0") ? function (a) { return null == a ? "" : ra.call(a) } : function (a) { return null == a ? "" : (a + "").replace(Ob, "") }, makeArray: function (a, b) { var d, e = b || []; null != a && (d = c.type(a), null == a.length || "string" === d || "function" === d || "regexp" === d || c.isWindow(a) ? Wa.call(e, a) : c.merge(e, a)); return e }, inArray: function (a, b, d) { var c; if (b) { if (Xa) return Xa.call(b, a, d); c = b.length; for (d = d ? 0 > d ? Math.max(0, c + d) : d : 0; d < c; d++) if (d in b && b[d] === a) return d } return -1 }, merge: function (a,
        b) { var d = b.length, c = a.length, f = 0; if ("number" === typeof d) for (; f < d; f++) a[c++] = b[f]; else for (; b[f] !== n;) a[c++] = b[f++]; a.length = c; return a }, grep: function (a, b, d) { var c, f = [], g = 0, h = a.length; for (d = !!d; g < h; g++) c = !!b(a[g], g), d !== c && f.push(a[g]); return f }, map: function (a, b, d) {
            var e, f, g = [], h = 0, k = a.length; if (a instanceof c || k !== n && "number" === typeof k && (0 < k && a[0] && a[k - 1] || 0 === k || c.isArray(a))) for (; h < k; h++) e = b(a[h], h, d), null != e && (g[g.length] = e); else for (f in a) e = b(a[f], f, d), null != e && (g[g.length] = e); return g.concat.apply([],
            g)
        }, guid: 1, proxy: function (a, b) { var d, e; "string" === typeof b && (d = a[b], b = a, a = d); if (!c.isFunction(a)) return n; e = w.call(arguments, 2); d = function () { return a.apply(b, e.concat(w.call(arguments))) }; d.guid = a.guid = a.guid || c.guid++; return d }, access: function (a, b, d, e, f, g, h) {
            var k, l = null == d, m = 0, s = a.length; if (d && "object" === typeof d) { for (m in d) c.access(a, b, m, d[m], 1, g, e); f = 1 } else if (e !== n) {
                k = h === n && c.isFunction(e); l && (k ? (k = b, b = function (a, b, d) { return k.call(c(a), d) }) : (b.call(a, e), b = null)); if (b) for (; m < s; m++) b(a[m], d,
                k ? e.call(a[m], m, b(a[m], d)) : e, h); f = 1
            } return f ? a : l ? b.call(a) : s ? b(a[0], d) : g
        }, now: function () { return (new Date).getTime() }
    }); c.ready.promise = function (a) {
        if (!fa) if (fa = c.Deferred(), "complete" === q.readyState) setTimeout(c.ready, 1); else if (q.addEventListener) q.addEventListener("DOMContentLoaded", ia, !1), r.addEventListener("load", c.ready, !1); else {
            q.attachEvent("onreadystatechange", ia); r.attachEvent("onload", c.ready); var b = !1; try { b = null == r.frameElement && q.documentElement } catch (d) { } b && b.doScroll && function f() {
                if (!c.isReady) {
                    try { b.doScroll("left") } catch (a) {
                        return setTimeout(f,
                        50)
                    } c.ready()
                }
            }()
        } return fa.promise(a)
    }; c.each("Boolean Number String Function Array Date RegExp Object".split(" "), function (a, b) { Za["[object " + b + "]"] = b.toLowerCase() }); Va = c(q); var ya = {}; c.Callbacks = function (a) {
        a = "string" === typeof a ? ya[a] || zb(a) : c.extend({}, a); var b, d, e, f, g, h, k = [], l = !a.once && [], m = function (c) { b = a.memory && c; d = !0; h = f || 0; f = 0; g = k.length; for (e = !0; k && h < g; h++) if (!1 === k[h].apply(c[0], c[1]) && a.stopOnFalse) { b = !1; break } e = !1; k && (l ? l.length && m(l.shift()) : b ? k = [] : s.disable()) }, s = {
            add: function () {
                if (k) {
                    var d =
                    k.length; (function Xb(b) { c.each(b, function (b, d) { var e = c.type(d); "function" === e ? a.unique && s.has(d) || k.push(d) : d && d.length && "string" !== e && Xb(d) }) })(arguments); e ? g = k.length : b && (f = d, m(b))
                } return this
            }, remove: function () { k && c.each(arguments, function (a, b) { for (var d; -1 < (d = c.inArray(b, k, d)) ;) k.splice(d, 1), e && (d <= g && g--, d <= h && h--) }); return this }, has: function (a) { return -1 < c.inArray(a, k) }, empty: function () { k = []; return this }, disable: function () { k = l = b = n; return this }, disabled: function () { return !k }, lock: function () {
                l =
                n; b || s.disable(); return this
            }, locked: function () { return !l }, fireWith: function (a, b) { b = b || []; b = [a, b.slice ? b.slice() : b]; !k || d && !l || (e ? l.push(b) : m(b)); return this }, fire: function () { s.fireWith(this, arguments); return this }, fired: function () { return !!d }
        }; return s
    }; c.extend({
        Deferred: function (a) {
            var b = [["resolve", "done", c.Callbacks("once memory"), "resolved"], ["reject", "fail", c.Callbacks("once memory"), "rejected"], ["notify", "progress", c.Callbacks("memory")]], d = "pending", e = {
                state: function () { return d }, always: function () {
                    f.done(arguments).fail(arguments);
                    return this
                }, then: function () { var a = arguments; return c.Deferred(function (d) { c.each(b, function (b, e) { var m = e[0], s = a[b]; f[e[1]](c.isFunction(s) ? function () { var a = s.apply(this, arguments); if (a && c.isFunction(a.promise)) a.promise().done(d.resolve).fail(d.reject).progress(d.notify); else d[m + "With"](this === f ? d : this, [a]) } : d[m]) }); a = null }).promise() }, promise: function (a) { return null != a ? c.extend(a, e) : e }
            }, f = {}; e.pipe = e.then; c.each(b, function (a, c) {
                var k = c[2], l = c[3]; e[c[1]] = k.add; l && k.add(function () { d = l }, b[a ^ 1][2].disable,
                b[2][2].lock); f[c[0]] = k.fire; f[c[0] + "With"] = k.fireWith
            }); e.promise(f); a && a.call(f, f); return f
        }, when: function (a) {
            var b = 0, d = w.call(arguments), e = d.length, f = 1 !== e || a && c.isFunction(a.promise) ? e : 0, g = 1 === f ? a : c.Deferred(), h = function (a, b, d) { return function (c) { b[a] = this; d[a] = 1 < arguments.length ? w.call(arguments) : c; d === k ? g.notifyWith(b, d) : --f || g.resolveWith(b, d) } }, k, l, m; if (1 < e) for (k = Array(e), l = Array(e), m = Array(e) ; b < e; b++) d[b] && c.isFunction(d[b].promise) ? d[b].promise().done(h(b, m, d)).fail(g.reject).progress(h(b,
            l, k)) : --f; f || g.resolveWith(m, d); return g.promise()
        }
    }); c.support = function () {
        var a, b, d, e, f, g, h, k = q.createElement("div"); k.setAttribute("className", "t"); k.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"; b = k.getElementsByTagName("*"); d = k.getElementsByTagName("a")[0]; if (!b || !d || !b.length) return {}; e = q.createElement("select"); f = e.appendChild(q.createElement("option")); b = k.getElementsByTagName("input")[0]; d.style.cssText = "top:1px;float:left;opacity:.5"; a = {
            leadingWhitespace: 3 ===
            k.firstChild.nodeType, tbody: !k.getElementsByTagName("tbody").length, htmlSerialize: !!k.getElementsByTagName("link").length, style: /top/.test(d.getAttribute("style")), hrefNormalized: "/a" === d.getAttribute("href"), opacity: /^0.5/.test(d.style.opacity), cssFloat: !!d.style.cssFloat, checkOn: "on" === b.value, optSelected: f.selected, getSetAttribute: "t" !== k.className, enctype: !!q.createElement("form").enctype, html5Clone: "<:nav></:nav>" !== q.createElement("nav").cloneNode(!0).outerHTML, boxModel: "CSS1Compat" === q.compatMode,
            submitBubbles: !0, changeBubbles: !0, focusinBubbles: !1, deleteExpando: !0, noCloneEvent: !0, inlineBlockNeedsLayout: !1, shrinkWrapBlocks: !1, reliableMarginRight: !0, boxSizingReliable: !0, pixelPosition: !1
        }; b.checked = !0; a.noCloneChecked = b.cloneNode(!0).checked; e.disabled = !0; a.optDisabled = !f.disabled; try { delete k.test } catch (l) { a.deleteExpando = !1 } !k.addEventListener && k.attachEvent && k.fireEvent && (k.attachEvent("onclick", d = function () { a.noCloneEvent = !1 }), k.cloneNode(!0).fireEvent("onclick"), k.detachEvent("onclick",
        d)); b = q.createElement("input"); b.value = "t"; b.setAttribute("type", "radio"); a.radioValue = "t" === b.value; b.setAttribute("checked", "checked"); b.setAttribute("name", "t"); k.appendChild(b); d = q.createDocumentFragment(); d.appendChild(k.lastChild); a.checkClone = d.cloneNode(!0).cloneNode(!0).lastChild.checked; a.appendChecked = b.checked; d.removeChild(b); d.appendChild(k); if (k.attachEvent) for (g in { submit: !0, change: !0, focusin: !0 }) b = "on" + g, h = b in k, h || (k.setAttribute(b, "return;"), h = "function" === typeof k[b]), a[g + "Bubbles"] =
        h; c(function () {
            var b, d, c, e = q.getElementsByTagName("body")[0]; e && (b = q.createElement("div"), b.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px", e.insertBefore(b, e.firstChild), d = q.createElement("div"), b.appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", c = d.getElementsByTagName("td"), c[0].style.cssText = "padding:0;margin:0;border:0;display:none", h = 0 === c[0].offsetHeight, c[0].style.display = "", c[1].style.display = "none", a.reliableHiddenOffsets =
            h && 0 === c[0].offsetHeight, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", a.boxSizing = 4 === d.offsetWidth, a.doesNotIncludeMarginInBodyOffset = 1 !== e.offsetTop, r.getComputedStyle && (a.pixelPosition = "1%" !== (r.getComputedStyle(d, null) || {}).top, a.boxSizingReliable = "4px" === (r.getComputedStyle(d, null) || { width: "4px" }).width, c = q.createElement("div"), c.style.cssText =
            d.style.cssText = "padding:0;margin:0;border:0;display:block;overflow:hidden;", c.style.marginRight = c.style.width = "0", d.style.width = "1px", d.appendChild(c), a.reliableMarginRight = !parseFloat((r.getComputedStyle(c, null) || {}).marginRight)), "undefined" !== typeof d.style.zoom && (d.innerHTML = "", d.style.cssText = "padding:0;margin:0;border:0;display:block;overflow:hidden;width:1px;padding:1px;display:inline;zoom:1", a.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = "block", d.style.overflow = "visible", d.innerHTML =
            "<div></div>", d.firstChild.style.width = "5px", a.shrinkWrapBlocks = 3 !== d.offsetWidth, b.style.zoom = 1), e.removeChild(b))
        }); d.removeChild(k); b = d = e = f = b = d = k = null; return a
    }(); var Bb = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, Ab = /([A-Z])/g; c.extend({
        cache: {}, deletedIds: [], uuid: 0, expando: "jQuery" + (c.fn.jquery + Math.random()).replace(/\D/g, ""), noData: { embed: !0, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000", applet: !0 }, hasData: function (a) { a = a.nodeType ? c.cache[a[c.expando]] : a[c.expando]; return !!a && !ma(a) }, data: function (a,
        b, d, e) { if (c.acceptData(a)) { var f = c.expando, g = "string" === typeof b, h = a.nodeType, k = h ? c.cache : a, l = h ? a[f] : a[f] && f; if (l && k[l] && (e || k[l].data) || !g || d !== n) { l || (h ? a[f] = l = c.deletedIds.pop() || c.guid++ : l = f); k[l] || (k[l] = {}, h || (k[l].toJSON = c.noop)); if ("object" === typeof b || "function" === typeof b) e ? k[l] = c.extend(k[l], b) : k[l].data = c.extend(k[l].data, b); a = k[l]; e || (a.data || (a.data = {}), a = a.data); d !== n && (a[c.camelCase(b)] = d); g ? (d = a[b], null == d && (d = a[c.camelCase(b)])) : d = a; return d } } }, removeData: function (a, b, d) {
            if (c.acceptData(a)) {
                var e,
                f, g, h = a.nodeType, k = h ? c.cache : a, l = h ? a[c.expando] : c.expando; if (k[l]) { if (b && (e = d ? k[l] : k[l].data)) { c.isArray(b) || (b in e ? b = [b] : (b = c.camelCase(b), b = b in e ? [b] : b.split(" "))); f = 0; for (g = b.length; f < g; f++) delete e[b[f]]; if (!(d ? ma : c.isEmptyObject)(e)) return } if (!d && (delete k[l].data, !ma(k[l]))) return; h ? c.cleanData([a], !0) : c.support.deleteExpando || k != k.window ? delete k[l] : k[l] = null }
            }
        }, _data: function (a, b, d) { return c.data(a, b, d, !0) }, acceptData: function (a) {
            var b = a.nodeName && c.noData[a.nodeName.toLowerCase()]; return !b ||
            !0 !== b && a.getAttribute("classid") === b
        }
    }); c.fn.extend({
        data: function (a, b) {
            var d, e, f, g, h, k = this[0], l = 0, m = null; if (a === n) { if (this.length && (m = c.data(k), 1 === k.nodeType && !c._data(k, "parsedAttrs"))) { f = k.attributes; for (h = f.length; l < h; l++) g = f[l].name, g.indexOf("data-") || (g = c.camelCase(g.substring(5)), za(k, g, m[g])); c._data(k, "parsedAttrs", !0) } return m } if ("object" === typeof a) return this.each(function () { c.data(this, a) }); d = a.split(".", 2); d[1] = d[1] ? "." + d[1] : ""; e = d[1] + "!"; return c.access(this, function (b) {
                if (b ===
                n) return m = this.triggerHandler("getData" + e, [d[0]]), m === n && k && (m = c.data(k, a), m = za(k, a, m)), m === n && d[1] ? this.data(d[0]) : m; d[1] = b; this.each(function () { var f = c(this); f.triggerHandler("setData" + e, d); c.data(this, a, b); f.triggerHandler("changeData" + e, d) })
            }, null, b, 1 < arguments.length, null, !1)
        }, removeData: function (a) { return this.each(function () { c.removeData(this, a) }) }
    }); c.extend({
        queue: function (a, b, d) {
            var e; if (a) return b = (b || "fx") + "queue", e = c._data(a, b), d && (!e || c.isArray(d) ? e = c._data(a, b, c.makeArray(d)) : e.push(d)),
            e || []
        }, dequeue: function (a, b) { b = b || "fx"; var d = c.queue(a, b), e = d.length, f = d.shift(), g = c._queueHooks(a, b), h = function () { c.dequeue(a, b) }; "inprogress" === f && (f = d.shift(), e--); f && ("fx" === b && d.unshift("inprogress"), delete g.stop, f.call(a, h, g)); !e && g && g.empty.fire() }, _queueHooks: function (a, b) { var d = b + "queueHooks"; return c._data(a, d) || c._data(a, d, { empty: c.Callbacks("once memory").add(function () { c.removeData(a, b + "queue", !0); c.removeData(a, d, !0) }) }) }
    }); c.fn.extend({
        queue: function (a, b) {
            var d = 2; "string" !== typeof a &&
            (b = a, a = "fx", d--); return arguments.length < d ? c.queue(this[0], a) : b === n ? this : this.each(function () { var d = c.queue(this, a, b); c._queueHooks(this, a); "fx" === a && "inprogress" !== d[0] && c.dequeue(this, a) })
        }, dequeue: function (a) { return this.each(function () { c.dequeue(this, a) }) }, delay: function (a, b) { a = c.fx ? c.fx.speeds[a] || a : a; return this.queue(b || "fx", function (b, c) { var f = setTimeout(b, a); c.stop = function () { clearTimeout(f) } }) }, clearQueue: function (a) { return this.queue(a || "fx", []) }, promise: function (a, b) {
            var d, e = 1, f = c.Deferred(),
            g = this, h = this.length, k = function () { --e || f.resolveWith(g, [g]) }; "string" !== typeof a && (b = a, a = n); for (a = a || "fx"; h--;) (d = c._data(g[h], a + "queueHooks")) && d.empty && (e++, d.empty.add(k)); k(); return f.promise(b)
        }
    }); var x, $a, ab, bb = /[\t\r\n]/g, Yb = /\r/g, Zb = /^(?:button|input)$/i, $b = /^(?:button|input|object|select|textarea)$/i, ac = /^a(?:rea|)$/i, cb = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i, db = c.support.getSetAttribute; c.fn.extend({
        attr: function (a,
        b) { return c.access(this, c.attr, a, b, 1 < arguments.length) }, removeAttr: function (a) { return this.each(function () { c.removeAttr(this, a) }) }, prop: function (a, b) { return c.access(this, c.prop, a, b, 1 < arguments.length) }, removeProp: function (a) { a = c.propFix[a] || a; return this.each(function () { try { this[a] = n, delete this[a] } catch (b) { } }) }, addClass: function (a) {
            var b, d, e, f, g, h, k; if (c.isFunction(a)) return this.each(function (b) { c(this).addClass(a.call(this, b, this.className)) }); if (a && "string" === typeof a) for (b = a.split(G), d = 0, e =
            this.length; d < e; d++) if (f = this[d], 1 === f.nodeType) if (f.className || 1 !== b.length) { g = " " + f.className + " "; h = 0; for (k = b.length; h < k; h++) 0 > g.indexOf(" " + b[h] + " ") && (g += b[h] + " "); f.className = c.trim(g) } else f.className = a; return this
        }, removeClass: function (a) {
            var b, d, e, f, g, h, k; if (c.isFunction(a)) return this.each(function (b) { c(this).removeClass(a.call(this, b, this.className)) }); if (a && "string" === typeof a || a === n) for (b = (a || "").split(G), h = 0, k = this.length; h < k; h++) if (e = this[h], 1 === e.nodeType && e.className) {
                d = (" " + e.className +
                " ").replace(bb, " "); f = 0; for (g = b.length; f < g; f++) for (; 0 <= d.indexOf(" " + b[f] + " ") ;) d = d.replace(" " + b[f] + " ", " "); e.className = a ? c.trim(d) : ""
            } return this
        }, toggleClass: function (a, b) {
            var d = typeof a, e = "boolean" === typeof b; return c.isFunction(a) ? this.each(function (d) { c(this).toggleClass(a.call(this, d, this.className, b), b) }) : this.each(function () {
                if ("string" === d) for (var f, g = 0, h = c(this), k = b, l = a.split(G) ; f = l[g++];) k = e ? k : !h.hasClass(f), h[k ? "addClass" : "removeClass"](f); else if ("undefined" === d || "boolean" === d) this.className &&
                c._data(this, "__className__", this.className), this.className = this.className || !1 === a ? "" : c._data(this, "__className__") || ""
            })
        }, hasClass: function (a) { a = " " + a + " "; for (var b = 0, d = this.length; b < d; b++) if (1 === this[b].nodeType && 0 <= (" " + this[b].className + " ").replace(bb, " ").indexOf(a)) return !0; return !1 }, val: function (a) {
            var b, d, e, f = this[0]; if (arguments.length) return e = c.isFunction(a), this.each(function (d) {
                var f = c(this); 1 === this.nodeType && (d = e ? a.call(this, d, f.val()) : a, null == d ? d = "" : "number" === typeof d ? d += "" : c.isArray(d) &&
                (d = c.map(d, function (a) { return null == a ? "" : a + "" })), b = c.valHooks[this.type] || c.valHooks[this.nodeName.toLowerCase()], b && "set" in b && b.set(this, d, "value") !== n || (this.value = d))
            }); if (f) { if ((b = c.valHooks[f.type] || c.valHooks[f.nodeName.toLowerCase()]) && "get" in b && (d = b.get(f, "value")) !== n) return d; d = f.value; return "string" === typeof d ? d.replace(Yb, "") : null == d ? "" : d }
        }
    }); c.extend({
        valHooks: {
            option: { get: function (a) { var b = a.attributes.value; return !b || b.specified ? a.value : a.text } }, select: {
                get: function (a) {
                    for (var b,
                    d = a.options, e = a.selectedIndex, f = (a = "select-one" === a.type || 0 > e) ? null : [], g = a ? e + 1 : d.length, h = 0 > e ? g : a ? e : 0; h < g; h++) if (b = d[h], !(!b.selected && h !== e || (c.support.optDisabled ? b.disabled : null !== b.getAttribute("disabled")) || b.parentNode.disabled && c.nodeName(b.parentNode, "optgroup"))) { b = c(b).val(); if (a) return b; f.push(b) } return f
                }, set: function (a, b) { var d = c.makeArray(b); c(a).find("option").each(function () { this.selected = 0 <= c.inArray(c(this).val(), d) }); d.length || (a.selectedIndex = -1); return d }
            }
        }, attrFn: {}, attr: function (a,
        b, d, e) { var f, g, h = a.nodeType; if (a && 3 !== h && 8 !== h && 2 !== h) { if (e && c.isFunction(c.fn[b])) return c(a)[b](d); if ("undefined" === typeof a.getAttribute) return c.prop(a, b, d); if (e = 1 !== h || !c.isXMLDoc(a)) b = b.toLowerCase(), g = c.attrHooks[b] || (cb.test(b) ? $a : x); if (d !== n) if (null === d) c.removeAttr(a, b); else { if (g && "set" in g && e && (f = g.set(a, d, b)) !== n) return f; a.setAttribute(b, d + ""); return d } else { if (g && "get" in g && e && null !== (f = g.get(a, b))) return f; f = a.getAttribute(b); return null === f ? n : f } } }, removeAttr: function (a, b) {
            var d, e, f,
            g, h = 0; if (b && 1 === a.nodeType) for (e = b.split(G) ; h < e.length; h++) if (f = e[h]) d = c.propFix[f] || f, (g = cb.test(f)) || c.attr(a, f, ""), a.removeAttribute(db ? f : d), g && d in a && (a[d] = !1)
        }, attrHooks: {
            type: { set: function (a, b) { if (Zb.test(a.nodeName) && a.parentNode) c.error("type property can't be changed"); else if (!c.support.radioValue && "radio" === b && c.nodeName(a, "input")) { var d = a.value; a.setAttribute("type", b); d && (a.value = d); return b } } }, value: {
                get: function (a, b) { return x && c.nodeName(a, "button") ? x.get(a, b) : b in a ? a.value : null },
                set: function (a, b, d) { if (x && c.nodeName(a, "button")) return x.set(a, b, d); a.value = b }
            }
        }, propFix: { tabindex: "tabIndex", readonly: "readOnly", "for": "htmlFor", "class": "className", maxlength: "maxLength", cellspacing: "cellSpacing", cellpadding: "cellPadding", rowspan: "rowSpan", colspan: "colSpan", usemap: "useMap", frameborder: "frameBorder", contenteditable: "contentEditable" }, prop: function (a, b, d) {
            var e, f, g; g = a.nodeType; if (a && 3 !== g && 8 !== g && 2 !== g) {
                if (g = 1 !== g || !c.isXMLDoc(a)) b = c.propFix[b] || b, f = c.propHooks[b]; return d !== n ? f &&
                "set" in f && (e = f.set(a, d, b)) !== n ? e : a[b] = d : f && "get" in f && null !== (e = f.get(a, b)) ? e : a[b]
            }
        }, propHooks: { tabIndex: { get: function (a) { var b = a.getAttributeNode("tabindex"); return b && b.specified ? parseInt(b.value, 10) : $b.test(a.nodeName) || ac.test(a.nodeName) && a.href ? 0 : n } } }
    }); $a = {
        get: function (a, b) { var d, e = c.prop(a, b); return !0 === e || "boolean" !== typeof e && (d = a.getAttributeNode(b)) && !1 !== d.nodeValue ? b.toLowerCase() : n }, set: function (a, b, d) {
            !1 === b ? c.removeAttr(a, d) : (b = c.propFix[d] || d, b in a && (a[b] = !0), a.setAttribute(d,
            d.toLowerCase())); return d
        }
    }; db || (ab = { name: !0, id: !0, coords: !0 }, x = c.valHooks.button = { get: function (a, b) { var d; return (d = a.getAttributeNode(b)) && (ab[b] ? "" !== d.value : d.specified) ? d.value : n }, set: function (a, b, d) { var c = a.getAttributeNode(d); c || (c = q.createAttribute(d), a.setAttributeNode(c)); return c.value = b + "" } }, c.each(["width", "height"], function (a, b) { c.attrHooks[b] = c.extend(c.attrHooks[b], { set: function (a, c) { if ("" === c) return a.setAttribute(b, "auto"), c } }) }), c.attrHooks.contenteditable = {
        get: x.get, set: function (a,
        b, d) { "" === b && (b = "false"); x.set(a, b, d) }
    }); c.support.hrefNormalized || c.each(["href", "src", "width", "height"], function (a, b) { c.attrHooks[b] = c.extend(c.attrHooks[b], { get: function (a) { a = a.getAttribute(b, 2); return null === a ? n : a } }) }); c.support.style || (c.attrHooks.style = { get: function (a) { return a.style.cssText.toLowerCase() || n }, set: function (a, b) { return a.style.cssText = b + "" } }); c.support.optSelected || (c.propHooks.selected = c.extend(c.propHooks.selected, {
        get: function (a) {
            if (a = a.parentNode) a.selectedIndex, a.parentNode &&
            a.parentNode.selectedIndex; return null
        }
    })); c.support.enctype || (c.propFix.enctype = "encoding"); c.support.checkOn || c.each(["radio", "checkbox"], function () { c.valHooks[this] = { get: function (a) { return null === a.getAttribute("value") ? "on" : a.value } } }); c.each(["radio", "checkbox"], function () { c.valHooks[this] = c.extend(c.valHooks[this], { set: function (a, b) { if (c.isArray(b)) return a.checked = 0 <= c.inArray(c(a).val(), b) } }) }); var sa = /^(?:textarea|input|select)$/i, eb = /^([^\.]*|)(?:\.(.+)|)$/, bc = /(?:^|\s)hover(\.\S+|)\b/,
    cc = /^key/, dc = /^(?:mouse|contextmenu)|click/, fb = /^(?:focusinfocus|focusoutblur)$/, gb = function (a) { return c.event.special.hover ? a : a.replace(bc, "mouseenter$1 mouseleave$1") }; c.event = {
        add: function (a, b, d, e, f) {
            var g, h, k, l, m, s, p, q, r; if (3 !== a.nodeType && 8 !== a.nodeType && b && d && (g = c._data(a))) {
                d.handler && (p = d, d = p.handler, f = p.selector); d.guid || (d.guid = c.guid++); k = g.events; k || (g.events = k = {}); h = g.handle; h || (g.handle = h = function (a) {
                    return "undefined" === typeof c || a && c.event.triggered === a.type ? n : c.event.dispatch.apply(h.elem,
                    arguments)
                }, h.elem = a); b = c.trim(gb(b)).split(" "); for (g = 0; g < b.length; g++) l = eb.exec(b[g]) || [], m = l[1], s = (l[2] || "").split(".").sort(), r = c.event.special[m] || {}, m = (f ? r.delegateType : r.bindType) || m, r = c.event.special[m] || {}, l = c.extend({ type: m, origType: l[1], data: e, handler: d, guid: d.guid, selector: f, needsContext: f && c.expr.match.needsContext.test(f), namespace: s.join(".") }, p), q = k[m], q || (q = k[m] = [], q.delegateCount = 0, r.setup && !1 !== r.setup.call(a, e, s, h) || (a.addEventListener ? a.addEventListener(m, h, !1) : a.attachEvent &&
                a.attachEvent("on" + m, h))), r.add && (r.add.call(a, l), l.handler.guid || (l.handler.guid = d.guid)), f ? q.splice(q.delegateCount++, 0, l) : q.push(l), c.event.global[m] = !0; a = null
            }
        }, global: {}, remove: function (a, b, d, e, f) {
            var g, h, k, l, m, s, p, n, q, r, v = c.hasData(a) && c._data(a); if (v && (p = v.events)) {
                b = c.trim(gb(b || "")).split(" "); for (g = 0; g < b.length; g++) if (h = eb.exec(b[g]) || [], k = l = h[1], h = h[2], k) {
                    n = c.event.special[k] || {}; k = (e ? n.delegateType : n.bindType) || k; q = p[k] || []; m = q.length; h = h ? new RegExp("(^|\\.)" + h.split(".").sort().join("\\.(?:.*\\.|)") +
                    "(\\.|$)") : null; for (s = 0; s < q.length; s++) r = q[s], !f && l !== r.origType || d && d.guid !== r.guid || h && !h.test(r.namespace) || e && e !== r.selector && ("**" !== e || !r.selector) || (q.splice(s--, 1), r.selector && q.delegateCount--, n.remove && n.remove.call(a, r)); 0 === q.length && m !== q.length && (n.teardown && !1 !== n.teardown.call(a, h, v.handle) || c.removeEvent(a, k, v.handle), delete p[k])
                } else for (k in p) c.event.remove(a, k + b[g], d, e, !0); c.isEmptyObject(p) && (delete v.handle, c.removeData(a, "events", !0))
            }
        }, customEvent: {
            getData: !0, setData: !0,
            changeData: !0
        }, trigger: function (a, b, d, e) {
            if (!d || 3 !== d.nodeType && 8 !== d.nodeType) {
                var f, g, h, k, l, m, s = a.type || a; h = []; if (!fb.test(s + c.event.triggered) && (0 <= s.indexOf("!") && (s = s.slice(0, -1), f = !0), 0 <= s.indexOf(".") && (h = s.split("."), s = h.shift(), h.sort()), d && !c.event.customEvent[s] || c.event.global[s])) if (a = "object" === typeof a ? a[c.expando] ? a : new c.Event(s, a) : new c.Event(s), a.type = s, a.isTrigger = !0, a.exclusive = f, a.namespace = h.join("."), a.namespace_re = a.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") :
                null, h = 0 > s.indexOf(":") ? "on" + s : "", d) {
                    if (a.result = n, a.target || (a.target = d), b = null != b ? c.makeArray(b) : [], b.unshift(a), k = c.event.special[s] || {}, !k.trigger || !1 !== k.trigger.apply(d, b)) {
                        m = [[d, k.bindType || s]]; if (!e && !k.noBubble && !c.isWindow(d)) { l = k.delegateType || s; f = fb.test(l + s) ? d : d.parentNode; for (g = d; f; f = f.parentNode) m.push([f, l]), g = f; g === (d.ownerDocument || q) && m.push([g.defaultView || g.parentWindow || r, l]) } for (g = 0; g < m.length && !a.isPropagationStopped() ; g++) f = m[g][0], a.type = m[g][1], (l = (c._data(f, "events") ||
                        {})[a.type] && c._data(f, "handle")) && l.apply(f, b), (l = h && f[h]) && c.acceptData(f) && l.apply && !1 === l.apply(f, b) && a.preventDefault(); a.type = s; e || a.isDefaultPrevented() || k._default && !1 !== k._default.apply(d.ownerDocument, b) || "click" === s && c.nodeName(d, "a") || !c.acceptData(d) || !h || !d[s] || ("focus" === s || "blur" === s) && 0 === a.target.offsetWidth || c.isWindow(d) || ((g = d[h]) && (d[h] = null), c.event.triggered = s, d[s](), c.event.triggered = n, g && (d[h] = g)); return a.result
                    }
                } else for (g in d = c.cache, d) d[g].events && d[g].events[s] && c.event.trigger(a,
                b, d[g].handle.elem, !0)
            }
        }, dispatch: function (a) {
            a = c.event.fix(a || r.event); var b, d, e, f, g, h, k = (c._data(this, "events") || {})[a.type] || [], l = k.delegateCount, m = w.call(arguments), s = !a.exclusive && !a.namespace, p = c.event.special[a.type] || {}, q = []; m[0] = a; a.delegateTarget = this; if (!p.preDispatch || !1 !== p.preDispatch.call(this, a)) {
                if (l && (!a.button || "click" !== a.type)) for (d = a.target; d != this; d = d.parentNode || this) if (!0 !== d.disabled || "click" !== a.type) {
                    f = {}; g = []; for (b = 0; b < l; b++) e = k[b], h = e.selector, f[h] === n && (f[h] = e.needsContext ?
                    0 <= c(h, this).index(d) : c.find(h, this, null, [d]).length), f[h] && g.push(e); g.length && q.push({ elem: d, matches: g })
                } k.length > l && q.push({ elem: this, matches: k.slice(l) }); for (b = 0; b < q.length && !a.isPropagationStopped() ; b++) for (f = q[b], a.currentTarget = f.elem, d = 0; d < f.matches.length && !a.isImmediatePropagationStopped() ; d++) if (e = f.matches[d], s || !a.namespace && !e.namespace || a.namespace_re && a.namespace_re.test(e.namespace)) a.data = e.data, a.handleObj = e, e = ((c.event.special[e.origType] || {}).handle || e.handler).apply(f.elem, m),
                e !== n && (a.result = e, !1 === e && (a.preventDefault(), a.stopPropagation())); p.postDispatch && p.postDispatch.call(this, a); return a.result
            }
        }, props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: { props: ["char", "charCode", "key", "keyCode"], filter: function (a, b) { null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode); return a } }, mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (a, b) { var d, c, f = b.button, g = b.fromElement; null == a.pageX && null != b.clientX && (d = a.target.ownerDocument || q, c = d.documentElement, d = d.body, a.pageX = b.clientX + (c && c.scrollLeft || d && d.scrollLeft || 0) - (c && c.clientLeft || d && d.clientLeft || 0), a.pageY = b.clientY + (c && c.scrollTop || d && d.scrollTop || 0) - (c && c.clientTop || d && d.clientTop || 0)); !a.relatedTarget && g && (a.relatedTarget = g === a.target ? b.toElement : g); a.which || f === n || (a.which = f & 1 ? 1 : f & 2 ? 3 : f & 4 ? 2 : 0); return a }
        }, fix: function (a) {
            if (a[c.expando]) return a; var b,
            d, e = a, f = c.event.fixHooks[a.type] || {}, g = f.props ? this.props.concat(f.props) : this.props; a = c.Event(e); for (b = g.length; b;) d = g[--b], a[d] = e[d]; a.target || (a.target = e.srcElement || q); 3 === a.target.nodeType && (a.target = a.target.parentNode); a.metaKey = !!a.metaKey; return f.filter ? f.filter(a, e) : a
        }, special: {
            load: { noBubble: !0 }, focus: { delegateType: "focusin" }, blur: { delegateType: "focusout" }, beforeunload: {
                setup: function (a, b, d) { c.isWindow(this) && (this.onbeforeunload = d) }, teardown: function (a, b) {
                    this.onbeforeunload === b && (this.onbeforeunload =
                    null)
                }
            }
        }, simulate: function (a, b, d, e) { a = c.extend(new c.Event, d, { type: a, isSimulated: !0, originalEvent: {} }); e ? c.event.trigger(a, null, b) : c.event.dispatch.call(b, a); a.isDefaultPrevented() && d.preventDefault() }
    }; c.event.handle = c.event.dispatch; c.removeEvent = q.removeEventListener ? function (a, b, d) { a.removeEventListener && a.removeEventListener(b, d, !1) } : function (a, b, d) { b = "on" + b; a.detachEvent && ("undefined" === typeof a[b] && (a[b] = null), a.detachEvent(b, d)) }; c.Event = function (a, b) {
        if (!(this instanceof c.Event)) return new c.Event(a,
        b); a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || !1 === a.returnValue || a.getPreventDefault && a.getPreventDefault() ? aa : N) : this.type = a; b && c.extend(this, b); this.timeStamp = a && a.timeStamp || c.now(); this[c.expando] = !0
    }; c.Event.prototype = {
        preventDefault: function () { this.isDefaultPrevented = aa; var a = this.originalEvent; a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1) }, stopPropagation: function () {
            this.isPropagationStopped = aa; var a = this.originalEvent; a && (a.stopPropagation &&
            a.stopPropagation(), a.cancelBubble = !0)
        }, stopImmediatePropagation: function () { this.isImmediatePropagationStopped = aa; this.stopPropagation() }, isDefaultPrevented: N, isPropagationStopped: N, isImmediatePropagationStopped: N
    }; c.each({ mouseenter: "mouseover", mouseleave: "mouseout" }, function (a, b) { c.event.special[a] = { delegateType: b, bindType: b, handle: function (a) { var e, f = a.relatedTarget, g = a.handleObj; if (!f || f !== this && !c.contains(this, f)) a.type = g.origType, e = g.handler.apply(this, arguments), a.type = b; return e } } }); c.support.submitBubbles ||
    (c.event.special.submit = {
        setup: function () { if (c.nodeName(this, "form")) return !1; c.event.add(this, "click._submit keypress._submit", function (a) { a = a.target; (a = c.nodeName(a, "input") || c.nodeName(a, "button") ? a.form : n) && !c._data(a, "_submit_attached") && (c.event.add(a, "submit._submit", function (a) { a._submit_bubble = !0 }), c._data(a, "_submit_attached", !0)) }) }, postDispatch: function (a) { a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && c.event.simulate("submit", this.parentNode, a, !0)) }, teardown: function () {
            if (c.nodeName(this,
            "form")) return !1; c.event.remove(this, "._submit")
        }
    }); c.support.changeBubbles || (c.event.special.change = {
        setup: function () {
            if (sa.test(this.nodeName)) { if ("checkbox" === this.type || "radio" === this.type) c.event.add(this, "propertychange._change", function (a) { "checked" === a.originalEvent.propertyName && (this._just_changed = !0) }), c.event.add(this, "click._change", function (a) { this._just_changed && !a.isTrigger && (this._just_changed = !1); c.event.simulate("change", this, a, !0) }); return !1 } c.event.add(this, "beforeactivate._change",
            function (a) { a = a.target; sa.test(a.nodeName) && !c._data(a, "_change_attached") && (c.event.add(a, "change._change", function (a) { !this.parentNode || a.isSimulated || a.isTrigger || c.event.simulate("change", this.parentNode, a, !0) }), c._data(a, "_change_attached", !0)) })
        }, handle: function (a) { var b = a.target; if (this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type) return a.handleObj.handler.apply(this, arguments) }, teardown: function () { c.event.remove(this, "._change"); return !sa.test(this.nodeName) }
    });
    c.support.focusinBubbles || c.each({ focus: "focusin", blur: "focusout" }, function (a, b) { var d = 0, e = function (a) { c.event.simulate(b, a.target, c.event.fix(a), !0) }; c.event.special[b] = { setup: function () { 0 === d++ && q.addEventListener(a, e, !0) }, teardown: function () { 0 === --d && q.removeEventListener(a, e, !0) } } }); c.fn.extend({
        on: function (a, b, d, e, f) {
            var g, h; if ("object" === typeof a) { "string" !== typeof b && (d = d || b, b = n); for (h in a) this.on(h, b, d, a[h], f); return this } null == d && null == e ? (e = b, d = b = n) : null == e && ("string" === typeof b ? (e = d, d =
            n) : (e = d, d = b, b = n)); if (!1 === e) e = N; else if (!e) return this; 1 === f && (g = e, e = function (a) { c().off(a); return g.apply(this, arguments) }, e.guid = g.guid || (g.guid = c.guid++)); return this.each(function () { c.event.add(this, a, e, d, b) })
        }, one: function (a, b, d, c) { return this.on(a, b, d, c, 1) }, off: function (a, b, d) {
            var e; if (a && a.preventDefault && a.handleObj) return e = a.handleObj, c(a.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace : e.origType, e.selector, e.handler), this; if ("object" === typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this
            } if (!1 === b || "function" === typeof b) d = b, b = n; !1 === d && (d = N); return this.each(function () { c.event.remove(this, a, d, b) })
        }, bind: function (a, b, d) { return this.on(a, null, b, d) }, unbind: function (a, b) { return this.off(a, null, b) }, live: function (a, b, d) { c(this.context).on(a, this.selector, b, d); return this }, die: function (a, b) { c(this.context).off(a, this.selector || "**", b); return this }, delegate: function (a, b, d, c) { return this.on(b, a, d, c) }, undelegate: function (a, b, d) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b,
            a || "**", d)
        }, trigger: function (a, b) { return this.each(function () { c.event.trigger(a, b, this) }) }, triggerHandler: function (a, b) { if (this[0]) return c.event.trigger(a, b, this[0], !0) }, toggle: function (a) { var b = arguments, d = a.guid || c.guid++, e = 0, f = function (d) { var f = (c._data(this, "lastToggle" + a.guid) || 0) % e; c._data(this, "lastToggle" + a.guid, f + 1); d.preventDefault(); return b[f].apply(this, arguments) || !1 }; for (f.guid = d; e < b.length;) b[e++].guid = d; return this.click(f) }, hover: function (a, b) {
            return this.mouseenter(a).mouseleave(b ||
            a)
        }
    }); c.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) { c.fn[b] = function (a, c) { null == c && (c = a, a = null); return 0 < arguments.length ? this.on(b, null, a, c) : this.trigger(b) }; cc.test(b) && (c.event.fixHooks[b] = c.event.keyHooks); dc.test(b) && (c.event.fixHooks[b] = c.event.mouseHooks) }); (function (a, b) {
        function d(a, b, d, c) {
            d = d || []; b = b ||
            O; var e, f, g, h, k = b.nodeType; if (!a || "string" !== typeof a) return d; if (1 !== k && 9 !== k) return []; g = w(b); if (!g && !c && (e = Y.exec(a))) if (h = e[1]) if (9 === k) if ((f = b.getElementById(h)) && f.parentNode) { if (f.id === h) return d.push(f), d } else return d; else { if (b.ownerDocument && (f = b.ownerDocument.getElementById(h)) && t(b, f) && f.id === h) return d.push(f), d } else { if (e[2]) return y.apply(d, D.call(b.getElementsByTagName(a), 0)), d; if ((h = e[3]) && Z && b.getElementsByClassName) return y.apply(d, D.call(b.getElementsByClassName(h), 0)), d } return r(a.replace(F,
            "$1"), b, d, c, g)
        } function e(a) { return function (b) { return "input" === b.nodeName.toLowerCase() && b.type === a } } function f(a) { return function (b) { var d = b.nodeName.toLowerCase(); return ("input" === d || "button" === d) && b.type === a } } function g(a) { return K(function (b) { b = +b; return K(function (d, c) { for (var e, f = a([], d.length, b), g = f.length; g--;) d[e = f[g]] && (d[e] = !(c[e] = d[e])) }) }) } function h(a, b, d) { if (a === b) return d; for (a = a.nextSibling; a;) { if (a === b) return -1; a = a.nextSibling } return 1 } function k(a, b) {
            var c, e, f, g, h, k, l; if (h = H[A][a +
            " "]) return b ? 0 : h.slice(0); h = a; k = []; for (l = u.preFilter; h;) { if (!c || (e = U.exec(h))) e && (h = h.slice(e[0].length) || h), k.push(f = []); c = !1; if (e = V.exec(h)) f.push(c = new jb(e.shift())), h = h.slice(c.length), c.type = e[0].replace(F, " "); for (g in u.filter) !(e = R[g].exec(h)) || l[g] && !(e = l[g](e)) || (f.push(c = new jb(e.shift())), h = h.slice(c.length), c.type = g, c.matches = e); if (!c) break } return b ? h.length : h ? d.error(a) : H(a, k).slice(0)
        } function l(a, b, d) {
            var c = b.dir, e = d && "parentNode" === b.dir, f = I++; return b.first ? function (b, d, f) {
                for (; b =
                b[c];) if (e || 1 === b.nodeType) return a(b, d, f)
            } : function (b, d, g) { if (!g) for (var h, k = ga + " " + f + " ", hb = k + B; b = b[c];) { if (e || 1 === b.nodeType) { if ((h = b[A]) === hb) return b.sizset; if ("string" === typeof h && 0 === h.indexOf(k)) { if (b.sizset) return b } else { b[A] = hb; if (a(b, d, g)) return b.sizset = !0, b; b.sizset = !1 } } } else for (; b = b[c];) if ((e || 1 === b.nodeType) && a(b, d, g)) return b }
        } function m(a) { return 1 < a.length ? function (b, d, c) { for (var e = a.length; e--;) if (!a[e](b, d, c)) return !1; return !0 } : a[0] } function s(a, b, d, c, e) {
            for (var f, g = [], h = 0, k =
            a.length, l = null != b; h < k; h++) if (f = a[h]) if (!d || d(f, c, e)) g.push(f), l && b.push(h); return g
        } function p(a, b, c, e, f, g) {
            e && !e[A] && (e = p(e)); f && !f[A] && (f = p(f, g)); return K(function (g, h, k, l) {
                var m, p, n = [], q = [], ib = h.length, r; if (!(r = g)) { r = b || "*"; for (var t = k.nodeType ? [k] : k, M = [], u = 0, T = t.length; u < T; u++) d(r, t[u], M); r = M } r = !a || !g && b ? r : s(r, n, a, k, l); t = c ? f || (g ? a : ib || e) ? [] : h : r; c && c(r, t, k, l); if (e) for (m = s(t, q), e(m, [], k, l), k = m.length; k--;) if (p = m[k]) t[q[k]] = !(r[q[k]] = p); if (g) {
                    if (f || a) {
                        if (f) {
                            m = []; for (k = t.length; k--;) (p = t[k]) && m.push(r[k] =
                            p); f(null, t = [], m, l)
                        } for (k = t.length; k--;) (p = t[k]) && -1 < (m = f ? C.call(g, p) : n[k]) && (g[m] = !(h[m] = p))
                    }
                } else t = s(t === h ? t.splice(ib, t.length) : t), f ? f(null, h, t, l) : y.apply(h, t)
            })
        } function n(a) {
            var b, d, c, e = a.length, f = u.relative[a[0].type]; d = f || u.relative[" "]; for (var g = f ? 1 : 0, h = l(function (a) { return a === b }, d, !0), k = l(function (a) { return -1 < C.call(b, a) }, d, !0), s = [function (a, d, c) { return !f && (c || d !== ja) || ((b = d).nodeType ? h(a, d, c) : k(a, d, c)) }]; g < e; g++) if (d = u.relative[a[g].type]) s = [l(m(s), d)]; else {
                d = u.filter[a[g].type].apply(null,
                a[g].matches); if (d[A]) { for (c = ++g; c < e && !u.relative[a[c].type]; c++); return p(1 < g && m(s), 1 < g && a.slice(0, g - 1).join("").replace(F, "$1"), d, g < c && n(a.slice(g, c)), c < e && n(a = a.slice(c)), c < e && a.join("")) } s.push(d)
            } return m(s)
        } function q(a, b) {
            var c = 0 < b.length, e = 0 < a.length, f = function (g, h, k, l, m) {
                var p, n, q = [], r = 0, t = "0", M = g && [], T = null != m, L = ja, v = g || e && u.find.TAG("*", m && h.parentNode || h), A = ga += null == L ? 1 : Math.E; T && (ja = h !== O && h, B = f.el); for (; null != (m = v[t]) ; t++) {
                    if (e && m) {
                        for (p = 0; n = a[p]; p++) if (n(m, h, k)) { l.push(m); break } T &&
                        (ga = A, B = ++f.el)
                    } c && ((m = !n && m) && r--, g && M.push(m))
                } r += t; if (c && t !== r) { for (p = 0; n = b[p]; p++) n(M, q, h, k); if (g) { if (0 < r) for (; t--;) M[t] || q[t] || (q[t] = ec.call(l)); q = s(q) } y.apply(l, q); T && !g && 0 < q.length && 1 < r + b.length && d.uniqueSort(l) } T && (ga = A, ja = L); return M
            }; f.el = 0; return c ? K(f) : f
        } function r(a, b, d, c, e) {
            var f, g, h, l, m = k(a); if (!c && 1 === m.length) {
                g = m[0] = m[0].slice(0); if (2 < g.length && "ID" === (h = g[0]).type && 9 === b.nodeType && !e && u.relative[g[1].type]) { b = u.find.ID(h.matches[0].replace($, ""), b, e)[0]; if (!b) return d; a = a.slice(g.shift().length) } for (f =
                R.POS.test(a) ? -1 : g.length - 1; 0 <= f; f--) { h = g[f]; if (u.relative[l = h.type]) break; if (l = u.find[l]) if (c = l(h.matches[0].replace($, ""), S.test(g[0].type) && b.parentNode || b, e)) { g.splice(f, 1); a = c.length && g.join(""); if (!a) return y.apply(d, D.call(c, 0)), d; break } }
            } x(a, m)(c, b, e, d, S.test(a)); return d
        } function v() { } var B, z, u, J, w, t, x, G, M, ja, T = !0, A = ("sizcache" + Math.random()).replace(".", ""), jb = String, O = a.document, L = O.documentElement, ga = 0, I = 0, ec = [].pop, y = [].push, D = [].slice, C = [].indexOf || function (a) {
            for (var b = 0, d = this.length; b <
            d; b++) if (this[b] === a) return b; return -1
        }, K = function (a, b) { a[A] = null == b || b; return a }, E = function () { var a = {}, b = []; return K(function (d, c) { b.push(d) > u.cacheLength && delete a[b.shift()]; return a[d + " "] = c }, a) }, P = E(), H = E(), Q = E(), E = "\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[-\\w]|[^\\x00-\\xa0])+)[\\x20\\t\\r\\n\\f]*(?:([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+".replace("w", "w#") + ")|)|)[\\x20\\t\\r\\n\\f]*\\]", N = ":((?:\\\\.|[-\\w]|[^\\x00-\\xa0])+)(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" +
        E + ")|[^:]|\\\\.)*|.*))\\)|)", F = RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$", "g"), U = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/, V = /^[\x20\t\r\n\f]*([\x20\t\r\n\f>+~])[\x20\t\r\n\f]*/, X = new RegExp(N), Y = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/, S = /[\x20\t\r\n\f]*[+~]/, aa = /h\d/i, ba = /input|select|textarea|button/i, $ = /\\(?!\\)/g, R = {
            ID: /^#((?:\\.|[-\w]|[^\x00-\xa0])+)/, CLASS: /^\.((?:\\.|[-\w]|[^\x00-\xa0])+)/, NAME: /^\[name=['"]?((?:\\.|[-\w]|[^\x00-\xa0])+)['"]?\]/, TAG: new RegExp("^(" +
            "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+".replace("w", "w*") + ")"), ATTR: new RegExp("^" + E), PSEUDO: new RegExp("^" + N), POS: /:(even|odd|eq|gt|lt|nth|first|last)(?:\([\x20\t\r\n\f]*((?:-\d)?\d*)[\x20\t\r\n\f]*\)|)(?=[^-]|$)/i, CHILD: RegExp("^:(only|nth|first|last)-child(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)", "i"), needsContext: RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)",
            "i")
        }, W = function (a) { var b = O.createElement("div"); try { return a(b) } catch (d) { return !1 } finally { } }, E = W(function (a) { a.appendChild(O.createComment("")); return !a.getElementsByTagName("*").length }), ca = W(function (a) { a.innerHTML = "<a href='#'></a>"; return a.firstChild && "undefined" !== typeof a.firstChild.getAttribute && "#" === a.firstChild.getAttribute("href") }), da = W(function (a) { a.innerHTML = "<select></select>"; a = typeof a.lastChild.getAttribute("multiple"); return "boolean" !== a && "string" !== a }), Z = W(function (a) {
            a.innerHTML =
            "<div class='hidden e'></div><div class='hidden'></div>"; if (!a.getElementsByClassName || !a.getElementsByClassName("e").length) return !1; a.lastChild.className = "e"; return 2 === a.getElementsByClassName("e").length
        }), ea = W(function (a) { a.id = A + 0; a.innerHTML = "<a name='" + A + "'></a><div name='" + A + "'></div>"; L.insertBefore(a, L.firstChild); var b = O.getElementsByName && O.getElementsByName(A).length === 2 + O.getElementsByName(A + 0).length; z = !O.getElementById(A); L.removeChild(a); return b }); try { D.call(L.childNodes, 0)[0].nodeType } catch (fa) {
            D =
            function (a) { for (var b, d = []; b = this[a]; a++) d.push(b); return d }
        } d.matches = function (a, b) { return d(a, null, null, b) }; d.matchesSelector = function (a, b) { return 0 < d(b, null, null, [a]).length }; J = d.getText = function (a) { var b, d = "", c = 0; if (b = a.nodeType) if (1 === b || 9 === b || 11 === b) { if ("string" === typeof a.textContent) return a.textContent; for (a = a.firstChild; a; a = a.nextSibling) d += J(a) } else { if (3 === b || 4 === b) return a.nodeValue } else for (; b = a[c]; c++) d += J(b); return d }; w = d.isXML = function (a) {
            return (a = a && (a.ownerDocument || a).documentElement) ?
            "HTML" !== a.nodeName : !1
        }; t = d.contains = L.contains ? function (a, b) { var d = 9 === a.nodeType ? a.documentElement : a, c = b && b.parentNode; return a === c || !!(c && 1 === c.nodeType && d.contains && d.contains(c)) } : L.compareDocumentPosition ? function (a, b) { return b && !!(a.compareDocumentPosition(b) & 16) } : function (a, b) { for (; b = b.parentNode;) if (b === a) return !0; return !1 }; d.attr = function (a, b) {
            var d, c = w(a); c || (b = b.toLowerCase()); return (d = u.attrHandle[b]) ? d(a) : c || da ? a.getAttribute(b) : (d = a.getAttributeNode(b)) ? "boolean" === typeof a[b] ? a[b] ?
                b : null : d.specified ? d.value : null : null
        }; u = d.selectors = {
            cacheLength: 50, createPseudo: K, match: R, attrHandle: ca ? {} : { href: function (a) { return a.getAttribute("href", 2) }, type: function (a) { return a.getAttribute("type") } }, find: {
                ID: z ? function (a, b, d) { if ("undefined" !== typeof b.getElementById && !d) return (a = b.getElementById(a)) && a.parentNode ? [a] : [] } : function (a, d, c) {
                    if ("undefined" !== typeof d.getElementById && !c) return (d = d.getElementById(a)) ? d.id === a || "undefined" !== typeof d.getAttributeNode && d.getAttributeNode("id").value ===
                    a ? [d] : b : []
                }, TAG: E ? function (a, b) { if ("undefined" !== typeof b.getElementsByTagName) return b.getElementsByTagName(a) } : function (a, b) { var d = b.getElementsByTagName(a); if ("*" === a) { for (var c, e = [], f = 0; c = d[f]; f++) 1 === c.nodeType && e.push(c); return e } return d }, NAME: ea && function (a, b) { if ("undefined" !== typeof b.getElementsByName) return b.getElementsByName(name) }, CLASS: Z && function (a, b, d) { if ("undefined" !== typeof b.getElementsByClassName && !d) return b.getElementsByClassName(a) }
            }, relative: {
                ">": { dir: "parentNode", first: !0 },
                " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" }
            }, preFilter: {
                ATTR: function (a) { a[1] = a[1].replace($, ""); a[3] = (a[4] || a[5] || "").replace($, ""); "~=" === a[2] && (a[3] = " " + a[3] + " "); return a.slice(0, 4) }, CHILD: function (a) { a[1] = a[1].toLowerCase(); "nth" === a[1] ? (a[2] || d.error(a[0]), a[3] = +(a[3] ? a[4] + (a[5] || 1) : 2 * ("even" === a[2] || "odd" === a[2])), a[4] = +(a[6] + a[7] || "odd" === a[2])) : a[2] && d.error(a[0]); return a }, PSEUDO: function (a) {
                    var b, d; if (R.CHILD.test(a[0])) return null; if (a[3]) a[2] =
                    a[3]; else if (b = a[4]) X.test(b) && (d = k(b, !0)) && (d = b.indexOf(")", b.length - d) - b.length) && (b = b.slice(0, d), a[0] = a[0].slice(0, d)), a[2] = b; return a.slice(0, 3)
                }
            }, filter: {
                ID: z ? function (a) { a = a.replace($, ""); return function (b) { return b.getAttribute("id") === a } } : function (a) { a = a.replace($, ""); return function (b) { return (b = "undefined" !== typeof b.getAttributeNode && b.getAttributeNode("id")) && b.value === a } }, TAG: function (a) {
                    if ("*" === a) return function () { return !0 }; a = a.replace($, "").toLowerCase(); return function (b) {
                        return b.nodeName &&
                        b.nodeName.toLowerCase() === a
                    }
                }, CLASS: function (a) { var b = P[A][a + " "]; return b || (b = new RegExp("(^|[\\x20\\t\\r\\n\\f])" + a + "([\\x20\\t\\r\\n\\f]|$)")) && P(a, function (a) { return b.test(a.className || "undefined" !== typeof a.getAttribute && a.getAttribute("class") || "") }) }, ATTR: function (a, b, c) {
                    return function (e, f) {
                        var g = d.attr(e, a); if (null == g) return "!=" === b; if (!b) return !0; g += ""; return "=" === b ? g === c : "!=" === b ? g !== c : "^=" === b ? c && 0 === g.indexOf(c) : "*=" === b ? c && -1 < g.indexOf(c) : "$=" === b ? c && g.substr(g.length - c.length) ===
                            c : "~=" === b ? -1 < (" " + g + " ").indexOf(c) : "|=" === b ? g === c || g.substr(0, c.length + 1) === c + "-" : !1
                    }
                }, CHILD: function (a, b, d, c) { return "nth" === a ? function (a) { var b, e; b = a.parentNode; if (1 === d && 0 === c) return !0; if (b) for (e = 0, b = b.firstChild; b && (1 !== b.nodeType || (e++, a !== b)) ; b = b.nextSibling); e -= c; return e === d || 0 === e % d && 0 <= e / d } : function (b) { var d = b; switch (a) { case "only": case "first": for (; d = d.previousSibling;) if (1 === d.nodeType) return !1; if ("first" === a) return !0; d = b; case "last": for (; d = d.nextSibling;) if (1 === d.nodeType) return !1; return !0 } } },
                PSEUDO: function (a, b) { var c, e = u.pseudos[a] || u.setFilters[a.toLowerCase()] || d.error("unsupported pseudo: " + a); return e[A] ? e(b) : 1 < e.length ? (c = [a, a, "", b], u.setFilters.hasOwnProperty(a.toLowerCase()) ? K(function (a, d) { for (var c, f = e(a, b), g = f.length; g--;) c = C.call(a, f[g]), a[c] = !(d[c] = f[g]) }) : function (a) { return e(a, 0, c) }) : e }
            }, pseudos: {
                not: K(function (a) {
                    var b = [], d = [], c = x(a.replace(F, "$1")); return c[A] ? K(function (a, b, d, e) { e = c(a, null, e, []); for (var f = a.length; f--;) if (d = e[f]) a[f] = !(b[f] = d) }) : function (a, e, f) {
                        b[0] =
                        a; c(b, null, f, d); return !d.pop()
                    }
                }), has: K(function (a) { return function (b) { return 0 < d(a, b).length } }), contains: K(function (a) { return function (b) { return -1 < (b.textContent || b.innerText || J(b)).indexOf(a) } }), enabled: function (a) { return !1 === a.disabled }, disabled: function (a) { return !0 === a.disabled }, checked: function (a) { var b = a.nodeName.toLowerCase(); return "input" === b && !!a.checked || "option" === b && !!a.selected }, selected: function (a) { a.parentNode && a.parentNode.selectedIndex; return !0 === a.selected }, parent: function (a) { return !u.pseudos.empty(a) },
                empty: function (a) { var b; for (a = a.firstChild; a;) { if ("@" < a.nodeName || 3 === (b = a.nodeType) || 4 === b) return !1; a = a.nextSibling } return !0 }, header: function (a) { return aa.test(a.nodeName) }, text: function (a) { var b, d; return "input" === a.nodeName.toLowerCase() && "text" === (b = a.type) && (null == (d = a.getAttribute("type")) || d.toLowerCase() === b) }, radio: e("radio"), checkbox: e("checkbox"), file: e("file"), password: e("password"), image: e("image"), submit: f("submit"), reset: f("reset"), button: function (a) {
                    var b = a.nodeName.toLowerCase(); return "input" ===
                    b && "button" === a.type || "button" === b
                }, input: function (a) { return ba.test(a.nodeName) }, focus: function (a) { var b = a.ownerDocument; return a === b.activeElement && (!b.hasFocus || b.hasFocus()) && !!(a.type || a.href || ~a.tabIndex) }, active: function (a) { return a === a.ownerDocument.activeElement }, first: g(function () { return [0] }), last: g(function (a, b) { return [b - 1] }), eq: g(function (a, b, d) { return [0 > d ? d + b : d] }), even: g(function (a, b) { for (var d = 0; d < b; d += 2) a.push(d); return a }), odd: g(function (a, b) { for (var d = 1; d < b; d += 2) a.push(d); return a }),
                lt: g(function (a, b, d) { for (b = 0 > d ? d + b : d; 0 <= --b;) a.push(b); return a }), gt: g(function (a, b, d) { for (d = 0 > d ? d + b : d; ++d < b;) a.push(d); return a })
            }
        }; G = L.compareDocumentPosition ? function (a, b) { return a === b ? (M = !0, 0) : (a.compareDocumentPosition && b.compareDocumentPosition ? a.compareDocumentPosition(b) & 4 : a.compareDocumentPosition) ? -1 : 1 } : function (a, b) {
            if (a === b) return M = !0, 0; if (a.sourceIndex && b.sourceIndex) return a.sourceIndex - b.sourceIndex; var d, c, e = [], f = []; d = a.parentNode; c = b.parentNode; var g = d; if (d === c) return h(a, b); if (!d) return -1;
            if (!c) return 1; for (; g;) e.unshift(g), g = g.parentNode; for (g = c; g;) f.unshift(g), g = g.parentNode; d = e.length; c = f.length; for (g = 0; g < d && g < c; g++) if (e[g] !== f[g]) return h(e[g], f[g]); return g === d ? h(a, f[g], -1) : h(e[g], b, 1)
        };[0, 0].sort(G); T = !M; d.uniqueSort = function (a) { var b, d = [], c = 1, e = 0; M = T; a.sort(G); if (M) { for (; b = a[c]; c++) b === a[c - 1] && (e = d.push(c)); for (; e--;) a.splice(d[e], 1) } return a }; d.error = function (a) { throw Error("Syntax error, unrecognized expression: " + a); }; x = d.compile = function (a, b) {
            var d, c = [], e = [], f = Q[A][a + " "];
            if (!f) { b || (b = k(a)); for (d = b.length; d--;) f = n(b[d]), f[A] ? c.push(f) : e.push(f); f = Q(a, q(e, c)) } return f
        }; O.querySelectorAll && function () {
            var a, b = r, c = /'|\\/g, e = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g, f = [":focus"], g = [":active"], h = L.matchesSelector || L.mozMatchesSelector || L.webkitMatchesSelector || L.oMatchesSelector || L.msMatchesSelector; W(function (a) {
                a.innerHTML = "<select><option selected=''></option></select>"; a.querySelectorAll("[selected]").length || f.push("\\[[\\x20\\t\\r\\n\\f]*(?:checked|disabled|ismap|multiple|readonly|selected|value)");
                a.querySelectorAll(":checked").length || f.push(":checked")
            }); W(function (a) { a.innerHTML = "<p test=''></p>"; a.querySelectorAll("[test^='']").length && f.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:\"\"|'')"); a.innerHTML = "<input type='hidden'/>"; a.querySelectorAll(":enabled").length || f.push(":enabled", ":disabled") }); f = new RegExp(f.join("|")); r = function (a, d, e, g, h) {
                if (!g && !h && !f.test(a)) {
                    var l, m, p = !0, n = A; m = d; l = 9 === d.nodeType && a; if (1 === d.nodeType && "object" !== d.nodeName.toLowerCase()) {
                        l = k(a); (p = d.getAttribute("id")) ?
                        n = p.replace(c, "\\$&") : d.setAttribute("id", n); n = "[id='" + n + "'] "; for (m = l.length; m--;) l[m] = n + l[m].join(""); m = S.test(a) && d.parentNode || d; l = l.join(",")
                    } if (l) try { return y.apply(e, D.call(m.querySelectorAll(l), 0)), e } catch (s) { } finally { p || d.removeAttribute("id") }
                } return b(a, d, e, g, h)
            }; h && (W(function (b) { a = h.call(b, "div"); try { h.call(b, "[test!='']:sizzle"), g.push("!=", N) } catch (d) { } }), g = new RegExp(g.join("|")), d.matchesSelector = function (b, c) {
                c = c.replace(e, "='$1']"); if (!w(b) && !g.test(c) && !f.test(c)) try {
                    var k = h.call(b,
                    c); if (k || a || b.document && 11 !== b.document.nodeType) return k
                } catch (l) { } return 0 < d(c, null, null, [b]).length
            })
        }(); u.pseudos.nth = u.pseudos.eq; u.filters = v.prototype = u.pseudos; u.setFilters = new v; d.attr = c.attr; c.find = d; c.expr = d.selectors; c.expr[":"] = c.expr.pseudos; c.unique = d.uniqueSort; c.text = d.getText; c.isXMLDoc = d.isXML; c.contains = d.contains
    })(r); var fc = /Until$/, gc = /^(?:parents|prev(?:Until|All))/, Cb = /^.[^:#\[\.,]*$/, kb = c.expr.match.needsContext, hc = { children: !0, contents: !0, next: !0, prev: !0 }; c.fn.extend({
        find: function (a) {
            var b,
            d, e, f, g, h, k = this; if ("string" !== typeof a) return c(a).filter(function () { b = 0; for (d = k.length; b < d; b++) if (c.contains(k[b], this)) return !0 }); h = this.pushStack("", "find", a); b = 0; for (d = this.length; b < d; b++) if (e = h.length, c.find(a, this[b], h), 0 < b) for (f = e; f < h.length; f++) for (g = 0; g < e; g++) if (h[g] === h[f]) { h.splice(f--, 1); break } return h
        }, has: function (a) { var b, d = c(a, this), e = d.length; return this.filter(function () { for (b = 0; b < e; b++) if (c.contains(this, d[b])) return !0 }) }, not: function (a) {
            return this.pushStack(Ba(this, a, !1), "not",
            a)
        }, filter: function (a) { return this.pushStack(Ba(this, a, !0), "filter", a) }, is: function (a) { return !!a && ("string" === typeof a ? kb.test(a) ? 0 <= c(a, this.context).index(this[0]) : 0 < c.filter(a, this).length : 0 < this.filter(a).length) }, closest: function (a, b) {
            for (var d, e = 0, f = this.length, g = [], h = kb.test(a) || "string" !== typeof a ? c(a, b || this.context) : 0; e < f; e++) for (d = this[e]; d && d.ownerDocument && d !== b && 11 !== d.nodeType;) { if (h ? -1 < h.index(d) : c.find.matchesSelector(d, a)) { g.push(d); break } d = d.parentNode } g = 1 < g.length ? c.unique(g) :
            g; return this.pushStack(g, "closest", a)
        }, index: function (a) { return a ? "string" === typeof a ? c.inArray(this[0], c(a)) : c.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1 }, add: function (a, b) { var d = "string" === typeof a ? c(a, b) : c.makeArray(a && a.nodeType ? [a] : a), e = c.merge(this.get(), d); return this.pushStack(Y(d[0]) || Y(e[0]) ? e : c.unique(e)) }, addBack: function (a) { return this.add(null == a ? this.prevObject : this.prevObject.filter(a)) }
    }); c.fn.andSelf = c.fn.addBack; c.each({
        parent: function (a) {
            return (a =
            a.parentNode) && 11 !== a.nodeType ? a : null
        }, parents: function (a) { return c.dir(a, "parentNode") }, parentsUntil: function (a, b, d) { return c.dir(a, "parentNode", d) }, next: function (a) { return Aa(a, "nextSibling") }, prev: function (a) { return Aa(a, "previousSibling") }, nextAll: function (a) { return c.dir(a, "nextSibling") }, prevAll: function (a) { return c.dir(a, "previousSibling") }, nextUntil: function (a, b, d) { return c.dir(a, "nextSibling", d) }, prevUntil: function (a, b, d) { return c.dir(a, "previousSibling", d) }, siblings: function (a) {
            return c.sibling((a.parentNode ||
            {}).firstChild, a)
        }, children: function (a) { return c.sibling(a.firstChild) }, contents: function (a) { return c.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : c.merge([], a.childNodes) }
    }, function (a, b) { c.fn[a] = function (d, e) { var f = c.map(this, b, d); fc.test(a) || (e = d); e && "string" === typeof e && (f = c.filter(e, f)); f = 1 < this.length && !hc[a] ? c.unique(f) : f; 1 < this.length && gc.test(a) && (f = f.reverse()); return this.pushStack(f, a, w.call(arguments).join(",")) } }); c.extend({
        filter: function (a, b, d) {
            d && (a = ":not(" + a + ")");
            return 1 === b.length ? c.find.matchesSelector(b[0], a) ? [b[0]] : [] : c.find.matches(a, b)
        }, dir: function (a, b, d) { var e = []; for (a = a[b]; a && 9 !== a.nodeType && (d === n || 1 !== a.nodeType || !c(a).is(d)) ;) 1 === a.nodeType && e.push(a), a = a[b]; return e }, sibling: function (a, b) { for (var d = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && d.push(a); return d }
    }); var Da = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", ic = / jQuery\d+="(?:null|\d+)"/g,
    ta = /^\s+/, lb = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, mb = /<([\w:]+)/, jc = /<tbody/i, kc = /<|&#?\w+;/, lc = /<(?:script|style|link)/i, mc = /<(?:script|object|embed|option|style)/i, ua = new RegExp("<(?:" + Da + ")[\\s/>]", "i"), Ga = /^(?:checkbox|radio)$/, nb = /checked\s*(?:[^=]|=\s*.checked.)/i, nc = /\/(java|ecma)script/i, oc = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g, z = {
        option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], area: [1, "<map>", "</map>"], _default: [0, "", ""]
    }, ob = Ca(q), va = ob.appendChild(q.createElement("div")); z.optgroup = z.option; z.tbody = z.tfoot = z.colgroup = z.caption = z.thead; z.th = z.td; c.support.htmlSerialize || (z._default = [1, "X<div>", "</div>"]); c.fn.extend({
        text: function (a) {
            return c.access(this, function (a) {
                return a === n ? c.text(this) : this.empty().append((this[0] &&
                this[0].ownerDocument || q).createTextNode(a))
            }, null, a, arguments.length)
        }, wrapAll: function (a) { if (c.isFunction(a)) return this.each(function (b) { c(this).wrapAll(a.call(this, b)) }); if (this[0]) { var b = c(a, this[0].ownerDocument).eq(0).clone(!0); this[0].parentNode && b.insertBefore(this[0]); b.map(function () { for (var a = this; a.firstChild && 1 === a.firstChild.nodeType;) a = a.firstChild; return a }).append(this) } return this }, wrapInner: function (a) {
            return c.isFunction(a) ? this.each(function (b) {
                c(this).wrapInner(a.call(this,
                b))
            }) : this.each(function () { var b = c(this), d = b.contents(); d.length ? d.wrapAll(a) : b.append(a) })
        }, wrap: function (a) { var b = c.isFunction(a); return this.each(function (d) { c(this).wrapAll(b ? a.call(this, d) : a) }) }, unwrap: function () { return this.parent().each(function () { c.nodeName(this, "body") || c(this).replaceWith(this.childNodes) }).end() }, append: function () { return this.domManip(arguments, !0, function (a) { 1 !== this.nodeType && 11 !== this.nodeType || this.appendChild(a) }) }, prepend: function () {
            return this.domManip(arguments,
            !0, function (a) { 1 !== this.nodeType && 11 !== this.nodeType || this.insertBefore(a, this.firstChild) })
        }, before: function () { if (!Y(this[0])) return this.domManip(arguments, !1, function (a) { this.parentNode.insertBefore(a, this) }); if (arguments.length) { var a = c.clean(arguments); return this.pushStack(c.merge(a, this), "before", this.selector) } }, after: function () {
            if (!Y(this[0])) return this.domManip(arguments, !1, function (a) { this.parentNode.insertBefore(a, this.nextSibling) }); if (arguments.length) {
                var a = c.clean(arguments); return this.pushStack(c.merge(this,
                a), "after", this.selector)
            }
        }, remove: function (a, b) { for (var d, e = 0; null != (d = this[e]) ; e++) if (!a || c.filter(a, [d]).length) b || 1 !== d.nodeType || (c.cleanData(d.getElementsByTagName("*")), c.cleanData([d])), d.parentNode && d.parentNode.removeChild(d); return this }, empty: function () { for (var a, b = 0; null != (a = this[b]) ; b++) for (1 === a.nodeType && c.cleanData(a.getElementsByTagName("*")) ; a.firstChild;) a.removeChild(a.firstChild); return this }, clone: function (a, b) {
            a = null == a ? !1 : a; b = null == b ? a : b; return this.map(function () {
                return c.clone(this,
                a, b)
            })
        }, html: function (a) { return c.access(this, function (a) { var d = this[0] || {}, e = 0, f = this.length; if (a === n) return 1 === d.nodeType ? d.innerHTML.replace(ic, "") : n; if (!("string" !== typeof a || lc.test(a) || !c.support.htmlSerialize && ua.test(a) || !c.support.leadingWhitespace && ta.test(a) || z[(mb.exec(a) || ["", ""])[1].toLowerCase()])) { a = a.replace(lb, "<$1></$2>"); try { for (; e < f; e++) d = this[e] || {}, 1 === d.nodeType && (c.cleanData(d.getElementsByTagName("*")), d.innerHTML = a); d = 0 } catch (g) { } } d && this.empty().append(a) }, null, a, arguments.length) },
        replaceWith: function (a) { if (!Y(this[0])) { if (c.isFunction(a)) return this.each(function (b) { var d = c(this), e = d.html(); d.replaceWith(a.call(this, b, e)) }); "string" !== typeof a && (a = c(a).detach()); return this.each(function () { var b = this.nextSibling, d = this.parentNode; c(this).remove(); b ? c(b).before(a) : c(d).append(a) }) } return this.length ? this.pushStack(c(c.isFunction(a) ? a() : a), "replaceWith", a) : this }, detach: function (a) { return this.remove(a, !0) }, domManip: function (a, b, d) {
            a = [].concat.apply([], a); var e, f, g, h = 0, k = a[0],
            l = [], m = this.length; if (!c.support.checkClone && 1 < m && "string" === typeof k && nb.test(k)) return this.each(function () { c(this).domManip(a, b, d) }); if (c.isFunction(k)) return this.each(function (e) { var f = c(this); a[0] = k.call(this, e, b ? f.html() : n); f.domManip(a, b, d) }); if (this[0]) {
                e = c.buildFragment(a, this, l); g = e.fragment; f = g.firstChild; 1 === g.childNodes.length && (g = f); if (f) for (b = b && c.nodeName(f, "tr"), e = e.cacheable || m - 1; h < m; h++) d.call(b && c.nodeName(this[h], "table") ? Db(this[h], "tbody") : this[h], h === e ? g : c.clone(g, !0, !0));
                g = f = null; l.length && c.each(l, function (a, b) { b.src ? c.ajax ? c.ajax({ url: b.src, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0 }) : c.error("no ajax") : c.globalEval((b.text || b.textContent || b.innerHTML || "").replace(oc, "")); b.parentNode && b.parentNode.removeChild(b) })
            } return this
        }
    }); c.buildFragment = function (a, b, d) {
        var e, f, g, h = a[0]; b = b || q; b = !b.nodeType && b[0] || b; b = b.ownerDocument || b; !(1 === a.length && "string" === typeof h && 512 > h.length && b === q && "<" === h.charAt(0)) || mc.test(h) || !c.support.checkClone && nb.test(h) ||
        !c.support.html5Clone && ua.test(h) || (f = !0, e = c.fragments[h], g = e !== n); e || (e = b.createDocumentFragment(), c.clean(a, b, e, d), f && (c.fragments[h] = g && e)); return { fragment: e, cacheable: f }
    }; c.fragments = {}; c.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (a, b) {
        c.fn[a] = function (d) {
            var e, f = 0, g = []; d = c(d); var h = d.length; e = 1 === this.length && this[0].parentNode; if ((null == e || e && 11 === e.nodeType && 1 === e.childNodes.length) && 1 === h) return d[b](this[0]), this;
            for (; f < h; f++) e = (0 < f ? this.clone(!0) : this).get(), c(d[f])[b](e), g = g.concat(e); return this.pushStack(g, a, d.selector)
        }
    }); c.extend({
        clone: function (a, b, d) {
            var e, f, g, h; c.support.html5Clone || c.isXMLDoc(a) || !ua.test("<" + a.nodeName + ">") ? h = a.cloneNode(!0) : (va.innerHTML = a.outerHTML, va.removeChild(h = va.firstChild)); if (!(c.support.noCloneEvent && c.support.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || c.isXMLDoc(a))) for (Fa(a, h), e = ba(a), f = ba(h), g = 0; e[g]; ++g) f[g] && Fa(e[g], f[g]); if (b && (Ea(a, h), d)) for (e = ba(a), f = ba(h),
            g = 0; e[g]; ++g) Ea(e[g], f[g]); return h
        }, clean: function (a, b, d, e) {
            var f, g, h, k, l, m, n = b === q && ob, p = []; b && "undefined" !== typeof b.createDocumentFragment || (b = q); for (f = 0; null != (h = a[f]) ; f++) if ("number" === typeof h && (h += ""), h) {
                if ("string" === typeof h) if (kc.test(h)) {
                    n = n || Ca(b); m = b.createElement("div"); n.appendChild(m); h = h.replace(lb, "<$1></$2>"); g = (mb.exec(h) || ["", ""])[1].toLowerCase(); k = z[g] || z._default; l = k[0]; for (m.innerHTML = k[1] + h + k[2]; l--;) m = m.lastChild; if (!c.support.tbody) for (l = jc.test(h), k = "table" !== g || l ? "<table>" !==
                    k[1] || l ? [] : m.childNodes : m.firstChild && m.firstChild.childNodes, g = k.length - 1; 0 <= g; --g) c.nodeName(k[g], "tbody") && !k[g].childNodes.length && k[g].parentNode.removeChild(k[g]); !c.support.leadingWhitespace && ta.test(h) && m.insertBefore(b.createTextNode(ta.exec(h)[0]), m.firstChild); h = m.childNodes; m.parentNode.removeChild(m)
                } else h = b.createTextNode(h); h.nodeType ? p.push(h) : c.merge(p, h)
            } m && (h = m = n = null); if (!c.support.appendChecked) for (f = 0; null != (h = p[f]) ; f++) c.nodeName(h, "input") ? Ha(h) : "undefined" !== typeof h.getElementsByTagName &&
            c.grep(h.getElementsByTagName("input"), Ha); if (d) for (a = function (a) { if (!a.type || nc.test(a.type)) return e ? e.push(a.parentNode ? a.parentNode.removeChild(a) : a) : d.appendChild(a) }, f = 0; null != (h = p[f]) ; f++) c.nodeName(h, "script") && a(h) || (d.appendChild(h), "undefined" !== typeof h.getElementsByTagName && (h = c.grep(c.merge([], h.getElementsByTagName("script")), a), p.splice.apply(p, [f + 1, 0].concat(h)), f += h.length)); return p
        }, cleanData: function (a, b) {
            for (var d, e, f, g, h = 0, k = c.expando, l = c.cache, m = c.support.deleteExpando, n = c.event.special; null !=
            (f = a[h]) ; h++) if (b || c.acceptData(f)) if (d = (e = f[k]) && l[e]) { if (d.events) for (g in d.events) n[g] ? c.event.remove(f, g) : c.removeEvent(f, g, d.handle); l[e] && (delete l[e], m ? delete f[k] : f.removeAttribute ? f.removeAttribute(k) : f[k] = null, c.deletedIds.push(e)) }
        }
    }); (function () {
        var a, b; c.uaMatch = function (a) {
            a = a.toLowerCase(); a = /(chrome)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || 0 > a.indexOf("compatible") && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a) ||
            []; return { browser: a[1] || "", version: a[2] || "0" }
        }; a = c.uaMatch(Jb.userAgent); b = {}; a.browser && (b[a.browser] = !0, b.version = a.version); b.chrome ? b.webkit = !0 : b.webkit && (b.safari = !0); c.browser = b; c.sub = function () { function a(b, c) { return new a.fn.init(b, c) } c.extend(!0, a, this); a.superclass = this; a.fn = a.prototype = this(); a.fn.constructor = a; a.sub = this.sub; a.fn.init = function (f, g) { g && g instanceof c && !(g instanceof a) && (g = a(g)); return c.fn.init.call(this, f, g, b) }; a.fn.init.prototype = a.fn; var b = a(q); return a }
    })(); var v,
    F, U, wa = /alpha\([^)]*\)/i, pc = /opacity=([^)]*)/, qc = /^(top|right|bottom|left)$/, rc = /^(none|table(?!-c[ea]).+)/, pb = /^margin/, Eb = new RegExp("^(" + ha + ")(.*)$", "i"), ca = new RegExp("^(" + ha + ")(?!px)[a-z%]+$", "i"), sc = new RegExp("^([-+])=(" + ha + ")", "i"), na = { BODY: "block" }, tc = { position: "absolute", visibility: "hidden", display: "block" }, qb = { letterSpacing: 0, fontWeight: 400 }, C = ["Top", "Right", "Bottom", "Left"], Ja = ["Webkit", "O", "Moz", "ms"], uc = c.fn.toggle; c.fn.extend({
        css: function (a, b) {
            return c.access(this, function (a, b, f) {
                return f !==
                n ? c.style(a, b, f) : c.css(a, b)
            }, a, b, 1 < arguments.length)
        }, show: function () { return Ka(this, !0) }, hide: function () { return Ka(this) }, toggle: function (a, b) { var d = "boolean" === typeof a; return c.isFunction(a) && c.isFunction(b) ? uc.apply(this, arguments) : this.each(function () { (d ? a : R(this)) ? c(this).show() : c(this).hide() }) }
    }); c.extend({
        cssHooks: { opacity: { get: function (a, b) { if (b) { var d = v(a, "opacity"); return "" === d ? "1" : d } } } }, cssNumber: { fillOpacity: !0, fontWeight: !0, lineHeight: !0, opacity: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
        cssProps: { "float": c.support.cssFloat ? "cssFloat" : "styleFloat" }, style: function (a, b, d, e) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var f, g, h, k = c.camelCase(b), l = a.style; b = c.cssProps[k] || (c.cssProps[k] = Ia(l, k)); h = c.cssHooks[b] || c.cssHooks[k]; if (d !== n) { if (g = typeof d, "string" === g && (f = sc.exec(d)) && (d = (f[1] + 1) * f[2] + parseFloat(c.css(a, b)), g = "number"), !(null == d || "number" === g && isNaN(d) || ("number" !== g || c.cssNumber[k] || (d += "px"), h && "set" in h && (d = h.set(a, d, e)) === n))) try { l[b] = d } catch (m) { } } else return h && "get" in
                h && (f = h.get(a, !1, e)) !== n ? f : l[b]
            }
        }, css: function (a, b, d, e) { var f, g; g = c.camelCase(b); b = c.cssProps[g] || (c.cssProps[g] = Ia(a.style, g)); (g = c.cssHooks[b] || c.cssHooks[g]) && "get" in g && (f = g.get(a, !0, e)); f === n && (f = v(a, b)); "normal" === f && b in qb && (f = qb[b]); return d || e !== n ? (a = parseFloat(f), d || c.isNumeric(a) ? a || 0 : f) : f }, swap: function (a, b, d) { var c, f = {}; for (c in b) f[c] = a.style[c], a.style[c] = b[c]; d = d.call(a); for (c in b) a.style[c] = f[c]; return d }
    }); r.getComputedStyle ? v = function (a, b) {
        var d, e, f, g, h = r.getComputedStyle(a, null),
        k = a.style; h && (d = h.getPropertyValue(b) || h[b], "" !== d || c.contains(a.ownerDocument, a) || (d = c.style(a, b)), ca.test(d) && pb.test(b) && (e = k.width, f = k.minWidth, g = k.maxWidth, k.minWidth = k.maxWidth = k.width = d, d = h.width, k.width = e, k.minWidth = f, k.maxWidth = g)); return d
    } : q.documentElement.currentStyle && (v = function (a, b) {
        var d, c, f = a.currentStyle && a.currentStyle[b], g = a.style; null == f && g && g[b] && (f = g[b]); if (ca.test(f) && !qc.test(b)) {
            d = g.left; if (c = a.runtimeStyle && a.runtimeStyle.left) a.runtimeStyle.left = a.currentStyle.left; g.left =
            "fontSize" === b ? "1em" : f; f = g.pixelLeft + "px"; g.left = d; c && (a.runtimeStyle.left = c)
        } return "" === f ? "auto" : f
    }); c.each(["height", "width"], function (a, b) { c.cssHooks[b] = { get: function (a, e, f) { if (e) return 0 === a.offsetWidth && rc.test(v(a, "display")) ? c.swap(a, tc, function () { return Oa(a, b, f) }) : Oa(a, b, f) }, set: function (a, e, f) { return Ma(a, e, f ? Na(a, b, f, c.support.boxSizing && "border-box" === c.css(a, "boxSizing")) : 0) } } }); c.support.opacity || (c.cssHooks.opacity = {
        get: function (a, b) {
            return pc.test((b && a.currentStyle ? a.currentStyle.filter :
            a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
        }, set: function (a, b) { var d = a.style, e = a.currentStyle, f = c.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "", g = e && e.filter || d.filter || ""; d.zoom = 1; if (1 <= b && "" === c.trim(g.replace(wa, "")) && d.removeAttribute && (d.removeAttribute("filter"), e && !e.filter)) return; d.filter = wa.test(g) ? g.replace(wa, f) : g + " " + f }
    }); c(function () {
        c.support.reliableMarginRight || (c.cssHooks.marginRight = {
            get: function (a, b) {
                return c.swap(a, { display: "inline-block" }, function () {
                    if (b) return v(a,
                    "marginRight")
                })
            }
        }); !c.support.pixelPosition && c.fn.position && c.each(["top", "left"], function (a, b) { c.cssHooks[b] = { get: function (a, e) { if (e) { var f = v(a, b); return ca.test(f) ? c(a).position()[b] + "px" : f } } } })
    }); c.expr && c.expr.filters && (c.expr.filters.hidden = function (a) { return 0 === a.offsetWidth && 0 === a.offsetHeight || !c.support.reliableHiddenOffsets && "none" === (a.style && a.style.display || v(a, "display")) }, c.expr.filters.visible = function (a) { return !c.expr.filters.hidden(a) }); c.each({ margin: "", padding: "", border: "Width" },
    function (a, b) { c.cssHooks[a + b] = { expand: function (c) { var e = "string" === typeof c ? c.split(" ") : [c], f = {}; for (c = 0; 4 > c; c++) f[a + C[c] + b] = e[c] || e[c - 2] || e[0]; return f } }; pb.test(a) || (c.cssHooks[a + b].set = Ma) }); var vc = /%20/g, Fb = /\[\]$/, rb = /\r?\n/g, wc = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i, xc = /^(?:select|textarea)/i; c.fn.extend({
        serialize: function () { return c.param(this.serializeArray()) }, serializeArray: function () {
            return this.map(function () {
                return this.elements ?
                c.makeArray(this.elements) : this
            }).filter(function () { return this.name && !this.disabled && (this.checked || xc.test(this.nodeName) || wc.test(this.type)) }).map(function (a, b) { var d = c(this).val(); return null == d ? null : c.isArray(d) ? c.map(d, function (a, c) { return { name: b.name, value: a.replace(rb, "\r\n") } }) : { name: b.name, value: d.replace(rb, "\r\n") } }).get()
        }
    }); c.param = function (a, b) {
        var d, e = [], f = function (a, b) { b = c.isFunction(b) ? b() : null == b ? "" : b; e[e.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b) }; b === n && (b = c.ajaxSettings &&
        c.ajaxSettings.traditional); if (c.isArray(a) || a.jquery && !c.isPlainObject(a)) c.each(a, function () { f(this.name, this.value) }); else for (d in a) oa(d, a[d], b, f); return e.join("&").replace(vc, "+")
    }; var P, Q, yc = /#.*$/, zc = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, Ac = /^(?:GET|HEAD)$/, Bc = /^\/\//, sb = /\?/, Cc = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, Dc = /([?&])_=[^&]*/, tb = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, ub = c.fn.load, pa = {}, vb = {}, wb = ["*/"] + ["*"]; try { Q = Ib.href } catch (Kc) {
        Q = q.createElement("a"), Q.href =
        "", Q = Q.href
    } P = tb.exec(Q.toLowerCase()) || []; c.fn.load = function (a, b, d) { if ("string" !== typeof a && ub) return ub.apply(this, arguments); if (!this.length) return this; var e, f, g, h = this, k = a.indexOf(" "); 0 <= k && (e = a.slice(k, a.length), a = a.slice(0, k)); c.isFunction(b) ? (d = b, b = n) : b && "object" === typeof b && (f = "POST"); c.ajax({ url: a, type: f, dataType: "html", data: b, complete: function (a, b) { d && h.each(d, g || [a.responseText, b, a]) } }).done(function (a) { g = arguments; h.html(e ? c("<div>").append(a.replace(Cc, "")).find(e) : a) }); return this };
    c.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (a, b) { c.fn[b] = function (a) { return this.on(b, a) } }); c.each(["get", "post"], function (a, b) { c[b] = function (a, e, f, g) { c.isFunction(e) && (g = g || f, f = e, e = n); return c.ajax({ type: b, url: a, data: e, success: f, dataType: g }) } }); c.extend({
        getScript: function (a, b) { return c.get(a, n, b, "script") }, getJSON: function (a, b, d) { return c.get(a, b, d, "json") }, ajaxSetup: function (a, b) { b ? Qa(a, c.ajaxSettings) : (b = a, a = c.ajaxSettings); Qa(a, b); return a }, ajaxSettings: {
            url: Q,
            isLocal: /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/.test(P[1]), global: !0, type: "GET", contentType: "application/x-www-form-urlencoded; charset=UTF-8", processData: !0, async: !0, accepts: { xml: "application/xml, text/xml", html: "text/html", text: "text/plain", json: "application/json, text/javascript", "*": wb }, contents: { xml: /xml/, html: /html/, json: /json/ }, responseFields: { xml: "responseXML", text: "responseText" }, converters: { "* text": r.String, "text html": !0, "text json": c.parseJSON, "text xml": c.parseXML },
            flatOptions: { context: !0, url: !0 }
        }, ajaxPrefilter: Pa(pa), ajaxTransport: Pa(vb), ajax: function (a, b) {
            function d(a, b, d, g) {
                var l, s, u, w, I = b; if (2 !== J) {
                    J = 2; k && clearTimeout(k); h = n; f = g || ""; t.readyState = 0 < a ? 4 : 0; if (d) {
                        w = p; g = t; var x, y, D, C, K = w.contents, E = w.dataTypes, F = w.responseFields; for (y in F) y in d && (g[F[y]] = d[y]); for (; "*" === E[0];) E.shift(), x === n && (x = w.mimeType || g.getResponseHeader("content-type")); if (x) for (y in K) if (K[y] && K[y].test(x)) { E.unshift(y); break } if (E[0] in d) D = E[0]; else {
                            for (y in d) {
                                if (!E[0] || w.converters[y +
                                " " + E[0]]) { D = y; break } C || (C = y)
                            } D = D || C
                        } D ? (D !== E[0] && E.unshift(D), w = d[D]) : w = void 0
                    } if (200 <= a && 300 > a || 304 === a) if (p.ifModified && ((d = t.getResponseHeader("Last-Modified")) && (c.lastModified[e] = d), (d = t.getResponseHeader("Etag")) && (c.etag[e] = d)), 304 === a) I = "notmodified", l = !0; else {
                            a: {
                                s = p; u = w; var H, G, I = s.dataTypes.slice(); x = I[0]; y = {}; D = 0; s.dataFilter && (u = s.dataFilter(u, s.dataType)); if (I[1]) for (H in s.converters) y[H.toLowerCase()] = s.converters[H]; for (; d = I[++D];) if ("*" !== d) {
                                    if ("*" !== x && x !== d) {
                                        H = y[x + " " + d] || y["* " +
                                        d]; if (!H) for (G in y) if (l = G.split(" "), l[1] === d && (H = y[x + " " + l[0]] || y["* " + l[0]])) { !0 === H ? H = y[G] : !0 !== y[G] && (d = l[0], I.splice(D--, 0, d)); break } if (!0 !== H) if (H && s["throws"]) u = H(u); else try { u = H(u) } catch (N) { l = { state: "parsererror", error: H ? N : "No conversion from " + x + " to " + d }; break a }
                                    } x = d
                                } l = { state: "success", data: u }
                            } I = l.state; s = l.data; u = l.error; l = !u
                    } else if (u = I, !I || a) I = "error", 0 > a && (a = 0); t.status = a; t.statusText = (b || I) + ""; l ? v.resolveWith(q, [s, I, t]) : v.rejectWith(q, [t, I, u]); t.statusCode(z); z = n; m && r.trigger("ajax" +
                    (l ? "Success" : "Error"), [t, p, l ? s : u]); B.fireWith(q, [t, I]); m && (r.trigger("ajaxComplete", [t, p]), --c.active || c.event.trigger("ajaxStop"))
                }
            } "object" === typeof a && (b = a, a = n); b = b || {}; var e, f, g, h, k, l, m, s, p = c.ajaxSetup({}, b), q = p.context || p, r = q !== p && (q.nodeType || q instanceof c) ? c(q) : c.event, v = c.Deferred(), B = c.Callbacks("once memory"), z = p.statusCode || {}, w = {}, u = {}, J = 0, x = "canceled", t = {
                readyState: 0, setRequestHeader: function (a, b) { if (!J) { var c = a.toLowerCase(); a = u[c] = u[c] || a; w[a] = b } return this }, getAllResponseHeaders: function () {
                    return 2 ===
                    J ? f : null
                }, getResponseHeader: function (a) { var b; if (2 === J) { if (!g) for (g = {}; b = zc.exec(f) ;) g[b[1].toLowerCase()] = b[2]; b = g[a.toLowerCase()] } return b === n ? null : b }, overrideMimeType: function (a) { J || (p.mimeType = a); return this }, abort: function (a) { a = a || x; h && h.abort(a); d(0, a); return this }
            }; v.promise(t); t.success = t.done; t.error = t.fail; t.complete = B.add; t.statusCode = function (a) { if (a) { var b; if (2 > J) for (b in a) z[b] = [z[b], a[b]]; else b = a[t.status], t.always(b) } return this }; p.url = ((a || p.url) + "").replace(yc, "").replace(Bc, P[1] +
            "//"); p.dataTypes = c.trim(p.dataType || "*").toLowerCase().split(G); null == p.crossDomain && (l = tb.exec(p.url.toLowerCase()), p.crossDomain = !(!l || l[1] === P[1] && l[2] === P[2] && (l[3] || ("http:" === l[1] ? 80 : 443)) == (P[3] || ("http:" === P[1] ? 80 : 443)))); p.data && p.processData && "string" !== typeof p.data && (p.data = c.param(p.data, p.traditional)); da(pa, p, b, t); if (2 === J) return t; m = p.global; p.type = p.type.toUpperCase(); p.hasContent = !Ac.test(p.type); m && 0 === c.active++ && c.event.trigger("ajaxStart"); if (!p.hasContent && (p.data && (p.url +=
            (sb.test(p.url) ? "&" : "?") + p.data, delete p.data), e = p.url, !1 === p.cache)) { l = c.now(); var C = p.url.replace(Dc, "$1_=" + l); p.url = C + (C === p.url ? (sb.test(p.url) ? "&" : "?") + "_=" + l : "") } (p.data && p.hasContent && !1 !== p.contentType || b.contentType) && t.setRequestHeader("Content-Type", p.contentType); p.ifModified && (e = e || p.url, c.lastModified[e] && t.setRequestHeader("If-Modified-Since", c.lastModified[e]), c.etag[e] && t.setRequestHeader("If-None-Match", c.etag[e])); t.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ?
            p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + wb + "; q=0.01" : "") : p.accepts["*"]); for (s in p.headers) t.setRequestHeader(s, p.headers[s]); if (p.beforeSend && (!1 === p.beforeSend.call(q, t, p) || 2 === J)) return t.abort(); x = "abort"; for (s in { success: 1, error: 1, complete: 1 }) t[s](p[s]); if (h = da(vb, p, b, t)) { t.readyState = 1; m && r.trigger("ajaxSend", [t, p]); p.async && 0 < p.timeout && (k = setTimeout(function () { t.abort("timeout") }, p.timeout)); try { J = 1, h.send(w, d) } catch (F) { if (2 > J) d(-1, F); else throw F; } } else d(-1, "No Transport");
            return t
        }, active: 0, lastModified: {}, etag: {}
    }); var xb = [], Ec = /\?/, ka = /(=)\?(?=&|$)|\?\?/, Fc = c.now(); c.ajaxSetup({ jsonp: "callback", jsonpCallback: function () { var a = xb.pop() || c.expando + "_" + Fc++; this[a] = !0; return a } }); c.ajaxPrefilter("json jsonp", function (a, b, d) {
        var e, f, g, h = a.data, k = a.url, l = !1 !== a.jsonp, m = l && ka.test(k), s = l && !m && "string" === typeof h && !(a.contentType || "").indexOf("application/x-www-form-urlencoded") && ka.test(h); if ("jsonp" === a.dataTypes[0] || m || s) return e = a.jsonpCallback = c.isFunction(a.jsonpCallback) ?
        a.jsonpCallback() : a.jsonpCallback, f = r[e], m ? a.url = k.replace(ka, "$1" + e) : s ? a.data = h.replace(ka, "$1" + e) : l && (a.url += (Ec.test(k) ? "&" : "?") + a.jsonp + "=" + e), a.converters["script json"] = function () { g || c.error(e + " was not called"); return g[0] }, a.dataTypes[0] = "json", r[e] = function () { g = arguments }, d.always(function () { r[e] = f; a[e] && (a.jsonpCallback = b.jsonpCallback, xb.push(e)); g && c.isFunction(f) && f(g[0]); g = f = n }), "script"
    }); c.ajaxSetup({
        accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },
        contents: { script: /javascript|ecmascript/ }, converters: { "text script": function (a) { c.globalEval(a); return a } }
    }); c.ajaxPrefilter("script", function (a) { a.cache === n && (a.cache = !1); a.crossDomain && (a.type = "GET", a.global = !1) }); c.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
            var b, c = q.head || q.getElementsByTagName("head")[0] || q.documentElement; return {
                send: function (e, f) {
                    b = q.createElement("script"); b.async = "async"; a.scriptCharset && (b.charset = a.scriptCharset); b.src = a.url; b.onload = b.onreadystatechange = function (a,
                    e) { if (e || !b.readyState || /loaded|complete/.test(b.readyState)) b.onload = b.onreadystatechange = null, c && b.parentNode && c.removeChild(b), b = n, e || f(200, "success") }; c.insertBefore(b, c.firstChild)
                }, abort: function () { if (b) b.onload(0, 1) }
            }
        }
    }); var X, xa = r.ActiveXObject ? function () { for (var a in X) X[a](0, 1) } : !1, Gc = 0; c.ajaxSettings.xhr = r.ActiveXObject ? function () { var a; if (!(a = !this.isLocal && Ra())) a: { try { a = new r.ActiveXObject("Microsoft.XMLHTTP"); break a } catch (b) { } a = void 0 } return a } : Ra; (function (a) {
        c.extend(c.support, {
            ajax: !!a,
            cors: !!a && "withCredentials" in a
        })
    })(c.ajaxSettings.xhr()); c.support.ajax && c.ajaxTransport(function (a) {
        if (!a.crossDomain || c.support.cors) {
            var b; return {
                send: function (d, e) {
                    var f, g, h = a.xhr(); a.username ? h.open(a.type, a.url, a.async, a.username, a.password) : h.open(a.type, a.url, a.async); if (a.xhrFields) for (g in a.xhrFields) h[g] = a.xhrFields[g]; a.mimeType && h.overrideMimeType && h.overrideMimeType(a.mimeType); a.crossDomain || d["X-Requested-With"] || (d["X-Requested-With"] = "XMLHttpRequest"); try {
                        for (g in d) h.setRequestHeader(g,
                        d[g])
                    } catch (k) { } h.send(a.hasContent && a.data || null); b = function (d, g) { var k, p, q, r, v; try { if (b && (g || 4 === h.readyState)) if (b = n, f && (h.onreadystatechange = c.noop, xa && delete X[f]), g) 4 !== h.readyState && h.abort(); else { k = h.status; q = h.getAllResponseHeaders(); r = {}; (v = h.responseXML) && v.documentElement && (r.xml = v); try { r.text = h.responseText } catch (w) { } try { p = h.statusText } catch (x) { p = "" } k || !a.isLocal || a.crossDomain ? 1223 === k && (k = 204) : k = r.text ? 200 : 404 } } catch (z) { g || e(-1, z) } r && e(k, p, r, q) }; a.async ? 4 === h.readyState ? setTimeout(b,
                    0) : (f = ++Gc, xa && (X || (X = {}, c(r).unload(xa)), X[f] = b), h.onreadystatechange = b) : b()
                }, abort: function () { b && b(0, 1) }
            }
        }
    }); var V, la, Hc = /^(?:toggle|show|hide)$/, Ic = new RegExp("^(?:([-+])=|)(" + ha + ")([a-z%]*)$", "i"), Jc = /queueHooks$/, Z = [function (a, b, d) {
        var e, f, g, h, k, l, m = this, n = a.style, p = {}, q = [], r = a.nodeType && R(a); d.queue || (k = c._queueHooks(a, "fx"), null == k.unqueued && (k.unqueued = 0, l = k.empty.fire, k.empty.fire = function () { k.unqueued || l() }), k.unqueued++, m.always(function () {
            m.always(function () {
                k.unqueued--; c.queue(a, "fx").length ||
                k.empty.fire()
            })
        })); 1 === a.nodeType && ("height" in b || "width" in b) && (d.overflow = [n.overflow, n.overflowX, n.overflowY], "inline" === c.css(a, "display") && "none" === c.css(a, "float") && (c.support.inlineBlockNeedsLayout && "inline" !== La(a.nodeName) ? n.zoom = 1 : n.display = "inline-block")); d.overflow && (n.overflow = "hidden", c.support.shrinkWrapBlocks || m.done(function () { n.overflow = d.overflow[0]; n.overflowX = d.overflow[1]; n.overflowY = d.overflow[2] })); for (e in b) g = b[e], Hc.exec(g) && (delete b[e], f = f || "toggle" === g, g !== (r ? "hide" :
        "show") && q.push(e)); if (b = q.length) for (g = c._data(a, "fxshow") || c._data(a, "fxshow", {}), ("hidden" in g) && (r = g.hidden), f && (g.hidden = !r), r ? c(a).show() : m.done(function () { c(a).hide() }), m.done(function () { var b; c.removeData(a, "fxshow", !0); for (b in p) c.style(a, b, p[b]) }), e = 0; e < b; e++) f = q[e], h = m.createTween(f, r ? g[f] : 0), p[f] = g[f] || c.style(a, f), f in g || (g[f] = h.start, r && (h.end = h.start, h.start = "width" === f || "height" === f ? 1 : 0))
    }], S = {
        "*": [function (a, b) {
            var d, e, f = this.createTween(a, b), g = Ic.exec(b), h = f.cur(), k = +h || 0, l = 1,
            m = 20; if (g) { d = +g[2]; e = g[3] || (c.cssNumber[a] ? "" : "px"); if ("px" !== e && k) { k = c.css(f.elem, a, !0) || d || 1; do l = l || ".5", k /= l, c.style(f.elem, a, k + e); while (l !== (l = f.cur() / h) && 1 !== l && --m) } f.unit = e; f.start = k; f.end = g[1] ? k + (g[1] + 1) * d : d } return f
        }]
    }; c.Animation = c.extend(Ta, { tweener: function (a, b) { c.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" "); for (var d, e = 0, f = a.length; e < f; e++) d = a[e], S[d] = S[d] || [], S[d].unshift(b) }, prefilter: function (a, b) { b ? Z.unshift(a) : Z.push(a) } }); c.Tween = B; B.prototype = {
        constructor: B, init: function (a, b, d,
        e, f, g) { this.elem = a; this.prop = d; this.easing = f || "swing"; this.options = b; this.start = this.now = this.cur(); this.end = e; this.unit = g || (c.cssNumber[d] ? "" : "px") }, cur: function () { var a = B.propHooks[this.prop]; return a && a.get ? a.get(this) : B.propHooks._default.get(this) }, run: function (a) {
            var b, d = B.propHooks[this.prop]; this.pos = this.options.duration ? b = c.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : b = a; this.now = (this.end - this.start) * b + this.start; this.options.step && this.options.step.call(this.elem,
            this.now, this); d && d.set ? d.set(this) : B.propHooks._default.set(this); return this
        }
    }; B.prototype.init.prototype = B.prototype; B.propHooks = { _default: { get: function (a) { return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (a = c.css(a.elem, a.prop, !1, "")) && "auto" !== a ? a : 0 : a.elem[a.prop] }, set: function (a) { if (c.fx.step[a.prop]) c.fx.step[a.prop](a); else a.elem.style && (null != a.elem.style[c.cssProps[a.prop]] || c.cssHooks[a.prop]) ? c.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now } } }; B.propHooks.scrollTop =
    B.propHooks.scrollLeft = { set: function (a) { a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now) } }; c.each(["toggle", "show", "hide"], function (a, b) { var d = c.fn[b]; c.fn[b] = function (e, f, g) { return null == e || "boolean" === typeof e || !a && c.isFunction(e) && c.isFunction(f) ? d.apply(this, arguments) : this.animate(ea(b, !0), e, f, g) } }); c.fn.extend({
        fadeTo: function (a, b, c, e) { return this.filter(R).css("opacity", 0).show().end().animate({ opacity: b }, a, c, e) }, animate: function (a, b, d, e) {
            var f = c.isEmptyObject(a), g = c.speed(b, d, e);
            b = function () { var b = Ta(this, c.extend({}, a), g); f && b.stop(!0) }; return f || !1 === g.queue ? this.each(b) : this.queue(g.queue, b)
        }, stop: function (a, b, d) {
            var e = function (a) { var b = a.stop; delete a.stop; b(d) }; "string" !== typeof a && (d = b, b = a, a = n); b && !1 !== a && this.queue(a || "fx", []); return this.each(function () {
                var b = !0, g = null != a && a + "queueHooks", h = c.timers, k = c._data(this); if (g) k[g] && k[g].stop && e(k[g]); else for (g in k) k[g] && k[g].stop && Jc.test(g) && e(k[g]); for (g = h.length; g--;) h[g].elem !== this || null != a && h[g].queue !== a || (h[g].anim.stop(d),
                b = !1, h.splice(g, 1)); !b && d || c.dequeue(this, a)
            })
        }
    }); c.each({ slideDown: ea("show"), slideUp: ea("hide"), slideToggle: ea("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (a, b) { c.fn[a] = function (a, c, f) { return this.animate(b, a, c, f) } }); c.speed = function (a, b, d) {
        var e = a && "object" === typeof a ? c.extend({}, a) : { complete: d || !d && b || c.isFunction(a) && a, duration: a, easing: d && b || b && !c.isFunction(b) && b }; e.duration = c.fx.off ? 0 : "number" === typeof e.duration ? e.duration : e.duration in
        c.fx.speeds ? c.fx.speeds[e.duration] : c.fx.speeds._default; if (null == e.queue || !0 === e.queue) e.queue = "fx"; e.old = e.complete; e.complete = function () { c.isFunction(e.old) && e.old.call(this); e.queue && c.dequeue(this, e.queue) }; return e
    }; c.easing = { linear: function (a) { return a }, swing: function (a) { return .5 - Math.cos(a * Math.PI) / 2 } }; c.timers = []; c.fx = B.prototype.init; c.fx.tick = function () { var a, b = c.timers, d = 0; for (V = c.now() ; d < b.length; d++) a = b[d], a() || b[d] !== a || b.splice(d--, 1); b.length || c.fx.stop(); V = n }; c.fx.timer = function (a) {
        a() &&
        c.timers.push(a) && !la && (la = setInterval(c.fx.tick, c.fx.interval))
    }; c.fx.interval = 13; c.fx.stop = function () { clearInterval(la); la = null }; c.fx.speeds = { slow: 600, fast: 200, _default: 400 }; c.fx.step = {}; c.expr && c.expr.filters && (c.expr.filters.animated = function (a) { return c.grep(c.timers, function (b) { return a === b.elem }).length }); var yb = /^(?:body|html)$/i; c.fn.offset = function (a) {
        if (arguments.length) return a === n ? this : this.each(function (b) { c.offset.setOffset(this, a, b) }); var b, d, e, f, g, h = { top: 0, left: 0 }; if (e = (f = this[0]) &&
        f.ownerDocument) { if ((d = e.body) === f) return c.offset.bodyOffset(f); b = e.documentElement; if (!c.contains(b, f)) return h; "undefined" !== typeof f.getBoundingClientRect && (h = f.getBoundingClientRect()); e = Ua(e); f = b.clientTop || d.clientTop || 0; d = b.clientLeft || d.clientLeft || 0; g = e.pageYOffset || b.scrollTop; b = e.pageXOffset || b.scrollLeft; return { top: h.top + g - f, left: h.left + b - d } }
    }; c.offset = {
        bodyOffset: function (a) {
            var b = a.offsetTop, d = a.offsetLeft; c.support.doesNotIncludeMarginInBodyOffset && (b += parseFloat(c.css(a, "marginTop")) ||
            0, d += parseFloat(c.css(a, "marginLeft")) || 0); return { top: b, left: d }
        }, setOffset: function (a, b, d) {
            var e = c.css(a, "position"); "static" === e && (a.style.position = "relative"); var f = c(a), g = f.offset(), h = c.css(a, "top"), k = c.css(a, "left"), l = {}, m = {}; ("absolute" === e || "fixed" === e) && -1 < c.inArray("auto", [h, k]) ? (m = f.position(), e = m.top, k = m.left) : (e = parseFloat(h) || 0, k = parseFloat(k) || 0); c.isFunction(b) && (b = b.call(a, d, g)); null != b.top && (l.top = b.top - g.top + e); null != b.left && (l.left = b.left - g.left + k); "using" in b ? b.using.call(a, l) :
            f.css(l)
        }
    }; c.fn.extend({
        position: function () { if (this[0]) { var a = this[0], b = this.offsetParent(), d = this.offset(), e = yb.test(b[0].nodeName) ? { top: 0, left: 0 } : b.offset(); d.top -= parseFloat(c.css(a, "marginTop")) || 0; d.left -= parseFloat(c.css(a, "marginLeft")) || 0; e.top += parseFloat(c.css(b[0], "borderTopWidth")) || 0; e.left += parseFloat(c.css(b[0], "borderLeftWidth")) || 0; return { top: d.top - e.top, left: d.left - e.left } } }, offsetParent: function () {
            return this.map(function () {
                for (var a = this.offsetParent || q.body; a && !yb.test(a.nodeName) &&
                "static" === c.css(a, "position") ;) a = a.offsetParent; return a || q.body
            })
        }
    }); c.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (a, b) { var d = /Y/.test(b); c.fn[a] = function (e) { return c.access(this, function (a, e, h) { var k = Ua(a); if (h === n) return k ? b in k ? k[b] : k.document.documentElement[e] : a[e]; k ? k.scrollTo(d ? c(k).scrollLeft() : h, d ? h : c(k).scrollTop()) : a[e] = h }, a, e, arguments.length, null) } }); c.each({ Height: "height", Width: "width" }, function (a, b) {
        c.each({ padding: "inner" + a, content: b, "": "outer" + a }, function (d,
        e) { c.fn[e] = function (e, g) { var h = arguments.length && (d || "boolean" !== typeof e), k = d || (!0 === e || !0 === g ? "margin" : "border"); return c.access(this, function (b, d, e) { return c.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (d = b.documentElement, Math.max(b.body["scroll" + a], d["scroll" + a], b.body["offset" + a], d["offset" + a], d["client" + a])) : e === n ? c.css(b, d, e, k) : c.style(b, d, e, k) }, b, h ? e : n, h, null) } })
    }); r.jQuery = r.$ = c; "function" === typeof define && define.amd && define.amd.jQuery && define("jquery", [], function () { return c })
})(window);
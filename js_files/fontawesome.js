/*! For license information please see fontawesome.js.LICENSE.txt */
(()=>{
    "use strict";
    var t = {};
    function n(t) {
        return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        ,
        n(t)
    }
    function e(t, n) {
        for (var e = 0; e < n.length; e++) {
            var a = n[e];
            a.enumerable = a.enumerable || !1,
            a.configurable = !0,
            "value"in a && (a.writable = !0),
            Object.defineProperty(t, a.key, a)
        }
    }
    function a(t, n, e) {
        return n in t ? Object.defineProperty(t, n, {
            value: e,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[n] = e,
        t
    }
    function r(t) {
        for (var n = 1; n < arguments.length; n++) {
            var e = null != arguments[n] ? arguments[n] : {}
              , r = Object.keys(e);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(e).filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }
            )))),
            r.forEach((function(n) {
                a(t, n, e[n])
            }
            ))
        }
        return t
    }
    function i(t, n) {
        return function(t) {
            if (Array.isArray(t))
                return t
        }(t) || function(t, n) {
            var e = []
              , a = !0
              , r = !1
              , i = void 0;
            try {
                for (var o, c = t[Symbol.iterator](); !(a = (o = c.next()).done) && (e.push(o.value),
                !n || e.length !== n); a = !0)
                    ;
            } catch (t) {
                r = !0,
                i = t
            } finally {
                try {
                    a || null == c.return || c.return()
                } finally {
                    if (r)
                        throw i
                }
            }
            return e
        }(t, n) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }()
    }
    t.g = function() {
        if ("object" == typeof globalThis)
            return globalThis;
        try {
            return this || new Function("return this")()
        } catch (t) {
            if ("object" == typeof window)
                return window
        }
    }();
    var o = function() {}
      , c = {}
      , s = {}
      , f = null
      , l = {
        mark: o,
        measure: o
    };
    try {
        "undefined" != typeof window && (c = window),
        "undefined" != typeof document && (s = document),
        "undefined" != typeof MutationObserver && (f = MutationObserver),
        "undefined" != typeof performance && (l = performance)
    } catch (t) {}
    var u = (c.navigator || {}).userAgent
      , m = void 0 === u ? "" : u
      , d = c
      , p = s
      , h = f
      , g = l
      , v = (d.document,
    !!p.documentElement && !!p.head && "function" == typeof p.addEventListener && "function" == typeof p.createElement)
      , b = ~m.indexOf("MSIE") || ~m.indexOf("Trident/")
      , y = "svg-inline--fa"
      , w = "data-fa-i2svg"
      , x = "data-fa-pseudo-element"
      , k = "fontawesome-i2svg"
      , _ = ["HTML", "HEAD", "STYLE", "SCRIPT"]
      , z = function() {
        try {
            return !0
        } catch (t) {
            return !1
        }
    }()
      , M = {
        fas: "solid",
        far: "regular",
        fal: "light",
        fad: "duotone",
        fab: "brands",
        fak: "kit",
        fa: "solid"
    }
      , A = {
        solid: "fas",
        regular: "far",
        light: "fal",
        duotone: "fad",
        brands: "fab",
        kit: "fak"
    }
      , N = "fa-layers-text"
      , C = /Font Awesome ([5 ]*)(Solid|Regular|Light|Duotone|Brands|Free|Pro|Kit).*/i
      , O = {
        900: "fas",
        400: "far",
        normal: "far",
        300: "fal"
    }
      , E = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      , S = E.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20])
      , L = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"]
      , P = {
        GROUP: "group",
        SWAP_OPACITY: "swap-opacity",
        PRIMARY: "primary",
        SECONDARY: "secondary"
    }
      , T = ["xs", "sm", "lg", "fw", "ul", "li", "border", "pull-left", "pull-right", "spin", "pulse", "rotate-90", "rotate-180", "rotate-270", "flip-horizontal", "flip-vertical", "flip-both", "stack", "stack-1x", "stack-2x", "inverse", "layers", "layers-text", "layers-counter", P.GROUP, P.SWAP_OPACITY, P.PRIMARY, P.SECONDARY].concat(E.map((function(t) {
        return "".concat(t, "x")
    }
    ))).concat(S.map((function(t) {
        return "w-".concat(t)
    }
    )))
      , I = d.FontAwesomeConfig || {};
    if (p && "function" == typeof p.querySelector) {
        [["data-family-prefix", "familyPrefix"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]].forEach((function(t) {
            var n = i(t, 2)
              , e = n[0]
              , a = n[1]
              , r = function(t) {
                return "" === t || "false" !== t && ("true" === t || t)
            }(function(t) {
                var n = p.querySelector("script[" + t + "]");
                if (n)
                    return n.getAttribute(t)
            }(e));
            null != r && (I[a] = r)
        }
        ))
    }
    var j = r({}, {
        familyPrefix: "fa",
        replacementClass: y,
        autoReplaceSvg: !0,
        autoAddCss: !0,
        autoA11y: !0,
        searchPseudoElements: !1,
        observeMutations: !0,
        mutateApproach: "async",
        keepOriginalSource: !0,
        measurePerformance: !1,
        showMissingIcons: !0
    }, I);
    j.autoReplaceSvg || (j.observeMutations = !1);
    var R = r({}, j);
    d.FontAwesomeConfig = R;
    var H = d || {};
    H.___FONT_AWESOME___ || (H.___FONT_AWESOME___ = {}),
    H.___FONT_AWESOME___.styles || (H.___FONT_AWESOME___.styles = {}),
    H.___FONT_AWESOME___.hooks || (H.___FONT_AWESOME___.hooks = {}),
    H.___FONT_AWESOME___.shims || (H.___FONT_AWESOME___.shims = []);
    var F = H.___FONT_AWESOME___
      , V = []
      , D = !1;
    function Y(t) {
        v && (D ? setTimeout(t, 0) : V.push(t))
    }
    v && ((D = (p.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(p.readyState)) || p.addEventListener("DOMContentLoaded", (function t() {
        p.removeEventListener("DOMContentLoaded", t),
        D = 1,
        V.map((function(t) {
            return t()
        }
        ))
    }
    )));
    var W, X = "pending", B = "settled", U = "fulfilled", q = "rejected", G = function() {}, K = void 0 !== t.g && void 0 !== t.g.process && "function" == typeof t.g.process.emit, J = "undefined" == typeof setImmediate ? setTimeout : setImmediate, Q = [];
    function Z() {
        for (var t = 0; t < Q.length; t++)
            Q[t][0](Q[t][1]);
        Q = [],
        W = !1
    }
    function $(t, n) {
        Q.push([t, n]),
        W || (W = !0,
        J(Z, 0))
    }
    function tt(t) {
        var n = t.owner
          , e = n._state
          , a = n._data
          , r = t[e]
          , i = t.then;
        if ("function" == typeof r) {
            e = U;
            try {
                a = r(a)
            } catch (t) {
                rt(i, t)
            }
        }
        nt(i, a) || (e === U && et(i, a),
        e === q && rt(i, a))
    }
    function nt(t, e) {
        var a;
        try {
            if (t === e)
                throw new TypeError("A promises callback cannot return that same promise.");
            if (e && ("function" == typeof e || "object" === n(e))) {
                var r = e.then;
                if ("function" == typeof r)
                    return r.call(e, (function(n) {
                        a || (a = !0,
                        e === n ? at(t, n) : et(t, n))
                    }
                    ), (function(n) {
                        a || (a = !0,
                        rt(t, n))
                    }
                    )),
                    !0
            }
        } catch (n) {
            return a || rt(t, n),
            !0
        }
        return !1
    }
    function et(t, n) {
        t !== n && nt(t, n) || at(t, n)
    }
    function at(t, n) {
        t._state === X && (t._state = B,
        t._data = n,
        $(ot, t))
    }
    function rt(t, n) {
        t._state === X && (t._state = B,
        t._data = n,
        $(ct, t))
    }
    function it(t) {
        t._then = t._then.forEach(tt)
    }
    function ot(t) {
        t._state = U,
        it(t)
    }
    function ct(n) {
        n._state = q,
        it(n),
        !n._handled && K && t.g.process.emit("unhandledRejection", n._data, n)
    }
    function st(n) {
        t.g.process.emit("rejectionHandled", n)
    }
    function ft(t) {
        if ("function" != typeof t)
            throw new TypeError("Promise resolver " + t + " is not a function");
        if (this instanceof ft == !1)
            throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
        this._then = [],
        function(t, n) {
            function e(t) {
                rt(n, t)
            }
            try {
                t((function(t) {
                    et(n, t)
                }
                ), e)
            } catch (t) {
                e(t)
            }
        }(t, this)
    }
    ft.prototype = {
        constructor: ft,
        _state: X,
        _then: null,
        _data: void 0,
        _handled: !1,
        then: function(t, n) {
            var e = {
                owner: this,
                then: new this.constructor(G),
                fulfilled: t,
                rejected: n
            };
            return !n && !t || this._handled || (this._handled = !0,
            this._state === q && K && $(st, this)),
            this._state === U || this._state === q ? $(tt, e) : this._then.push(e),
            e.then
        },
        catch: function(t) {
            return this.then(null, t)
        }
    },
    ft.all = function(t) {
        if (!Array.isArray(t))
            throw new TypeError("You must pass an array to Promise.all().");
        return new ft((function(n, e) {
            var a = []
              , r = 0;
            function i(t) {
                return r++,
                function(e) {
                    a[t] = e,
                    --r || n(a)
                }
            }
            for (var o, c = 0; c < t.length; c++)
                (o = t[c]) && "function" == typeof o.then ? o.then(i(c), e) : a[c] = o;
            r || n(a)
        }
        ))
    }
    ,
    ft.race = function(t) {
        if (!Array.isArray(t))
            throw new TypeError("You must pass an array to Promise.race().");
        return new ft((function(n, e) {
            for (var a, r = 0; r < t.length; r++)
                (a = t[r]) && "function" == typeof a.then ? a.then(n, e) : n(a)
        }
        ))
    }
    ,
    ft.resolve = function(t) {
        return t && "object" === n(t) && t.constructor === ft ? t : new ft((function(n) {
            n(t)
        }
        ))
    }
    ,
    ft.reject = function(t) {
        return new ft((function(n, e) {
            e(t)
        }
        ))
    }
    ;
    var lt = "function" == typeof Promise ? Promise : ft
      , ut = 16
      , mt = {
        size: 16,
        x: 0,
        y: 0,
        rotate: 0,
        flipX: !1,
        flipY: !1
    };
    function dt(t) {
        if (t && v) {
            var n = p.createElement("style");
            n.setAttribute("type", "text/css"),
            n.innerHTML = t;
            for (var e = p.head.childNodes, a = null, r = e.length - 1; r > -1; r--) {
                var i = e[r]
                  , o = (i.tagName || "").toUpperCase();
                ["STYLE", "LINK"].indexOf(o) > -1 && (a = i)
            }
            return p.head.insertBefore(n, a),
            t
        }
    }
    function pt() {
        for (var t = 12, n = ""; t-- > 0; )
            n += "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[62 * Math.random() | 0];
        return n
    }
    function ht(t) {
        for (var n = [], e = (t || []).length >>> 0; e--; )
            n[e] = t[e];
        return n
    }
    function gt(t) {
        return t.classList ? ht(t.classList) : (t.getAttribute("class") || "").split(" ").filter((function(t) {
            return t
        }
        ))
    }
    function vt(t, n) {
        var e, a = n.split("-"), r = a[0], i = a.slice(1).join("-");
        return r !== t || "" === i || (e = i,
        ~T.indexOf(e)) ? null : i
    }
    function bt(t) {
        return "".concat(t).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }
    function yt(t) {
        return Object.keys(t || {}).reduce((function(n, e) {
            return n + "".concat(e, ": ").concat(t[e], ";")
        }
        ), "")
    }
    function wt(t) {
        return t.size !== mt.size || t.x !== mt.x || t.y !== mt.y || t.rotate !== mt.rotate || t.flipX || t.flipY
    }
    function xt(t) {
        var n = t.transform
          , e = t.containerWidth
          , a = t.iconWidth
          , r = {
            transform: "translate(".concat(e / 2, " 256)")
        }
          , i = "translate(".concat(32 * n.x, ", ").concat(32 * n.y, ") ")
          , o = "scale(".concat(n.size / 16 * (n.flipX ? -1 : 1), ", ").concat(n.size / 16 * (n.flipY ? -1 : 1), ") ")
          , c = "rotate(".concat(n.rotate, " 0 0)");
        return {
            outer: r,
            inner: {
                transform: "".concat(i, " ").concat(o, " ").concat(c)
            },
            path: {
                transform: "translate(".concat(a / 2 * -1, " -256)")
            }
        }
    }
    var kt = {
        x: 0,
        y: 0,
        width: "100%",
        height: "100%"
    };
    function _t(t) {
        var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return t.attributes && (t.attributes.fill || n) && (t.attributes.fill = "black"),
        t
    }
    function zt(t) {
        var n = t.icons
          , e = n.main
          , a = n.mask
          , i = t.prefix
          , o = t.iconName
          , c = t.transform
          , s = t.symbol
          , f = t.title
          , l = t.maskId
          , u = t.titleId
          , m = t.extra
          , d = t.watchable
          , p = void 0 !== d && d
          , h = a.found ? a : e
          , g = h.width
          , v = h.height
          , b = "fak" === i
          , y = b ? "" : "fa-w-".concat(Math.ceil(g / v * 16))
          , x = [R.replacementClass, o ? "".concat(R.familyPrefix, "-").concat(o) : "", y].filter((function(t) {
            return -1 === m.classes.indexOf(t)
        }
        )).filter((function(t) {
            return "" !== t || !!t
        }
        )).concat(m.classes).join(" ")
          , k = {
            children: [],
            attributes: r({}, m.attributes, {
                "data-prefix": i,
                "data-icon": o,
                class: x,
                role: m.attributes.role || "img",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 ".concat(g, " ").concat(v)
            })
        }
          , _ = b && !~m.classes.indexOf("fa-fw") ? {
            width: "".concat(g / v * 16 * .0625, "em")
        } : {};
        p && (k.attributes[w] = ""),
        f && k.children.push({
            tag: "title",
            attributes: {
                id: k.attributes["aria-labelledby"] || "title-".concat(u || pt())
            },
            children: [f]
        });
        var z = r({}, k, {
            prefix: i,
            iconName: o,
            main: e,
            mask: a,
            maskId: l,
            transform: c,
            symbol: s,
            styles: r({}, _, m.styles)
        })
          , M = a.found && e.found ? function(t) {
            var n, e = t.children, a = t.attributes, i = t.main, o = t.mask, c = t.maskId, s = t.transform, f = i.width, l = i.icon, u = o.width, m = o.icon, d = xt({
                transform: s,
                containerWidth: u,
                iconWidth: f
            }), p = {
                tag: "rect",
                attributes: r({}, kt, {
                    fill: "white"
                })
            }, h = l.children ? {
                children: l.children.map(_t)
            } : {}, g = {
                tag: "g",
                attributes: r({}, d.inner),
                children: [_t(r({
                    tag: l.tag,
                    attributes: r({}, l.attributes, d.path)
                }, h))]
            }, v = {
                tag: "g",
                attributes: r({}, d.outer),
                children: [g]
            }, b = "mask-".concat(c || pt()), y = "clip-".concat(c || pt()), w = {
                tag: "mask",
                attributes: r({}, kt, {
                    id: b,
                    maskUnits: "userSpaceOnUse",
                    maskContentUnits: "userSpaceOnUse"
                }),
                children: [p, v]
            }, x = {
                tag: "defs",
                children: [{
                    tag: "clipPath",
                    attributes: {
                        id: y
                    },
                    children: (n = m,
                    "g" === n.tag ? n.children : [n])
                }, w]
            };
            return e.push(x, {
                tag: "rect",
                attributes: r({
                    fill: "currentColor",
                    "clip-path": "url(#".concat(y, ")"),
                    mask: "url(#".concat(b, ")")
                }, kt)
            }),
            {
                children: e,
                attributes: a
            }
        }(z) : function(t) {
            var n = t.children
              , e = t.attributes
              , a = t.main
              , i = t.transform
              , o = yt(t.styles);
            if (o.length > 0 && (e.style = o),
            wt(i)) {
                var c = xt({
                    transform: i,
                    containerWidth: a.width,
                    iconWidth: a.width
                });
                n.push({
                    tag: "g",
                    attributes: r({}, c.outer),
                    children: [{
                        tag: "g",
                        attributes: r({}, c.inner),
                        children: [{
                            tag: a.icon.tag,
                            children: a.icon.children,
                            attributes: r({}, a.icon.attributes, c.path)
                        }]
                    }]
                })
            } else
                n.push(a.icon);
            return {
                children: n,
                attributes: e
            }
        }(z)
          , A = M.children
          , N = M.attributes;
        return z.children = A,
        z.attributes = N,
        s ? function(t) {
            var n = t.prefix
              , e = t.iconName
              , a = t.children
              , i = t.attributes
              , o = t.symbol;
            return [{
                tag: "svg",
                attributes: {
                    style: "display: none;"
                },
                children: [{
                    tag: "symbol",
                    attributes: r({}, i, {
                        id: !0 === o ? "".concat(n, "-").concat(R.familyPrefix, "-").concat(e) : o
                    }),
                    children: a
                }]
            }]
        }(z) : function(t) {
            var n = t.children
              , e = t.main
              , a = t.mask
              , i = t.attributes
              , o = t.styles
              , c = t.transform;
            if (wt(c) && e.found && !a.found) {
                var s = {
                    x: e.width / e.height / 2,
                    y: .5
                };
                i.style = yt(r({}, o, {
                    "transform-origin": "".concat(s.x + c.x / 16, "em ").concat(s.y + c.y / 16, "em")
                }))
            }
            return [{
                tag: "svg",
                attributes: i,
                children: n
            }]
        }(z)
    }
    function Mt(t) {
        var n = t.content
          , e = t.width
          , a = t.height
          , i = t.transform
          , o = t.title
          , c = t.extra
          , s = t.watchable
          , f = void 0 !== s && s
          , l = r({}, c.attributes, o ? {
            title: o
        } : {}, {
            class: c.classes.join(" ")
        });
        f && (l[w] = "");
        var u = r({}, c.styles);
        wt(i) && (u.transform = function(t) {
            var n = t.transform
              , e = t.width
              , a = void 0 === e ? 16 : e
              , r = t.height
              , i = void 0 === r ? 16 : r
              , o = t.startCentered
              , c = void 0 !== o && o
              , s = "";
            return s += c && b ? "translate(".concat(n.x / ut - a / 2, "em, ").concat(n.y / ut - i / 2, "em) ") : c ? "translate(calc(-50% + ".concat(n.x / ut, "em), calc(-50% + ").concat(n.y / ut, "em)) ") : "translate(".concat(n.x / ut, "em, ").concat(n.y / ut, "em) "),
            s += "scale(".concat(n.size / ut * (n.flipX ? -1 : 1), ", ").concat(n.size / ut * (n.flipY ? -1 : 1), ") "),
            s + "rotate(".concat(n.rotate, "deg) ")
        }({
            transform: i,
            startCentered: !0,
            width: e,
            height: a
        }),
        u["-webkit-transform"] = u.transform);
        var m = yt(u);
        m.length > 0 && (l.style = m);
        var d = [];
        return d.push({
            tag: "span",
            attributes: l,
            children: [n]
        }),
        o && d.push({
            tag: "span",
            attributes: {
                class: "sr-only"
            },
            children: [o]
        }),
        d
    }
    var At = function() {}
      , Nt = R.measurePerformance && g && g.mark && g.measure ? g : {
        mark: At,
        measure: At
    }
      , Ct = 'FA "5.15.4"'
      , Ot = function(t) {
        Nt.mark("".concat(Ct, " ").concat(t, " ends")),
        Nt.measure("".concat(Ct, " ").concat(t), "".concat(Ct, " ").concat(t, " begins"), "".concat(Ct, " ").concat(t, " ends"))
    }
      , Et = function(t) {
        return Nt.mark("".concat(Ct, " ").concat(t, " begins")),
        function() {
            return Ot(t)
        }
    }
      , St = function(t, n, e, a) {
        var r, i, o, c = Object.keys(t), s = c.length, f = void 0 !== a ? function(t, n) {
            return function(e, a, r, i) {
                return t.call(n, e, a, r, i)
            }
        }(n, a) : n;
        for (void 0 === e ? (r = 1,
        o = t[c[0]]) : (r = 0,
        o = e); r < s; r++)
            o = f(o, t[i = c[r]], i, t);
        return o
    };
    function Lt(t) {
        for (var n = "", e = 0; e < t.length; e++) {
            n += ("000" + t.charCodeAt(e).toString(16)).slice(-4)
        }
        return n
    }
    function Pt(t, n) {
        var e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
          , a = e.skipHooks
          , i = void 0 !== a && a
          , o = Object.keys(n).reduce((function(t, e) {
            var a = n[e];
            return !!a.icon ? t[a.iconName] = a.icon : t[e] = a,
            t
        }
        ), {});
        "function" != typeof F.hooks.addPack || i ? F.styles[t] = r({}, F.styles[t] || {}, o) : F.hooks.addPack(t, o),
        "fas" === t && Pt("fa", n)
    }
    var Tt = F.styles
      , It = F.shims
      , jt = {}
      , Rt = {}
      , Ht = {}
      , Ft = function() {
        var t = function(t) {
            return St(Tt, (function(n, e, a) {
                return n[a] = St(e, t, {}),
                n
            }
            ), {})
        };
        jt = t((function(t, n, e) {
            return n[3] && (t[n[3]] = e),
            t
        }
        )),
        Rt = t((function(t, n, e) {
            var a = n[2];
            return t[e] = e,
            a.forEach((function(n) {
                t[n] = e
            }
            )),
            t
        }
        ));
        var n = "far"in Tt;
        Ht = St(It, (function(t, e) {
            var a = e[0]
              , r = e[1]
              , i = e[2];
            return "far" !== r || n || (r = "fas"),
            t[a] = {
                prefix: r,
                iconName: i
            },
            t
        }
        ), {})
    };
    function Vt(t, n) {
        return (jt[t] || {})[n]
    }
    Ft();
    var Dt = F.styles;
    function Yt(t) {
        return t.reduce((function(t, n) {
            var e = vt(R.familyPrefix, n);
            if (Dt[n])
                t.prefix = n;
            else if (R.autoFetchSvg && Object.keys(M).indexOf(n) > -1)
                t.prefix = n;
            else if (e) {
                var a = "fa" === t.prefix ? Ht[e] || {
                    prefix: null,
                    iconName: null
                } : {};
                t.iconName = a.iconName || e,
                t.prefix = a.prefix || t.prefix
            } else
                n !== R.replacementClass && 0 !== n.indexOf("fa-w-") && t.rest.push(n);
            return t
        }
        ), {
            prefix: null,
            iconName: null,
            rest: []
        })
    }
    function Wt(t, n, e) {
        if (t && t[n] && t[n][e])
            return {
                prefix: n,
                iconName: e,
                icon: t[n][e]
            }
    }
    function Xt(t) {
        var n = t.tag
          , e = t.attributes
          , a = void 0 === e ? {} : e
          , r = t.children
          , i = void 0 === r ? [] : r;
        return "string" == typeof t ? bt(t) : "<".concat(n, " ").concat(function(t) {
            return Object.keys(t || {}).reduce((function(n, e) {
                return n + "".concat(e, '="').concat(bt(t[e]), '" ')
            }
            ), "").trim()
        }(a), ">").concat(i.map(Xt).join(""), "</").concat(n, ">")
    }
    var Bt = function() {};
    function Ut(t) {
        return "string" == typeof (t.getAttribute ? t.getAttribute(w) : null)
    }
    var qt = {
        replace: function(t) {
            var n = t[0]
              , e = t[1].map((function(t) {
                return Xt(t)
            }
            )).join("\n");
            if (n.parentNode && n.outerHTML)
                n.outerHTML = e + (R.keepOriginalSource && "svg" !== n.tagName.toLowerCase() ? "\x3c!-- ".concat(n.outerHTML, " Font Awesome fontawesome.com --\x3e") : "");
            else if (n.parentNode) {
                var a = document.createElement("span");
                n.parentNode.replaceChild(a, n),
                a.outerHTML = e
            }
        },
        nest: function(t) {
            var n = t[0]
              , e = t[1];
            if (~gt(n).indexOf(R.replacementClass))
                return qt.replace(t);
            var a = new RegExp("".concat(R.familyPrefix, "-.*"));
            delete e[0].attributes.style,
            delete e[0].attributes.id;
            var r = e[0].attributes.class.split(" ").reduce((function(t, n) {
                return n === R.replacementClass || n.match(a) ? t.toSvg.push(n) : t.toNode.push(n),
                t
            }
            ), {
                toNode: [],
                toSvg: []
            });
            e[0].attributes.class = r.toSvg.join(" ");
            var i = e.map((function(t) {
                return Xt(t)
            }
            )).join("\n");
            n.setAttribute("class", r.toNode.join(" ")),
            n.setAttribute(w, ""),
            n.innerHTML = i
        }
    };
    function Gt(t) {
        t()
    }
    function Kt(t, n) {
        var e = "function" == typeof n ? n : Bt;
        if (0 === t.length)
            e();
        else {
            var a = Gt;
            "async" === R.mutateApproach && (a = d.requestAnimationFrame || Gt),
            a((function() {
                var n = !0 === R.autoReplaceSvg ? qt.replace : qt[R.autoReplaceSvg] || qt.replace
                  , a = Et("mutate");
                t.map(n),
                a(),
                e()
            }
            ))
        }
    }
    var Jt = !1;
    function Qt() {
        Jt = !1
    }
    var Zt = null;
    function $t(t) {
        if (h && R.observeMutations) {
            var n = t.treeCallback
              , e = t.nodeCallback
              , a = t.pseudoElementsCallback
              , r = t.observeMutationsRoot
              , i = void 0 === r ? p : r;
            Zt = new h((function(t) {
                Jt || ht(t).forEach((function(t) {
                    if ("childList" === t.type && t.addedNodes.length > 0 && !Ut(t.addedNodes[0]) && (R.searchPseudoElements && a(t.target),
                    n(t.target)),
                    "attributes" === t.type && t.target.parentNode && R.searchPseudoElements && a(t.target.parentNode),
                    "attributes" === t.type && Ut(t.target) && ~L.indexOf(t.attributeName))
                        if ("class" === t.attributeName) {
                            var r = Yt(gt(t.target))
                              , i = r.prefix
                              , o = r.iconName;
                            i && t.target.setAttribute("data-prefix", i),
                            o && t.target.setAttribute("data-icon", o)
                        } else
                            e(t.target)
                }
                ))
            }
            )),
            v && Zt.observe(i, {
                childList: !0,
                attributes: !0,
                characterData: !0,
                subtree: !0
            })
        }
    }
    function tn(t) {
        var n = t.getAttribute("data-prefix")
          , e = t.getAttribute("data-icon")
          , a = void 0 !== t.innerText ? t.innerText.trim() : ""
          , r = Yt(gt(t));
        return n && e && (r.prefix = n,
        r.iconName = e),
        r.prefix && a.length > 1 ? r.iconName = function(t, n) {
            return (Rt[t] || {})[n]
        }(r.prefix, t.innerText) : r.prefix && 1 === a.length && (r.iconName = Vt(r.prefix, Lt(t.innerText))),
        r
    }
    var nn = function(t) {
        var n = {
            size: 16,
            x: 0,
            y: 0,
            flipX: !1,
            flipY: !1,
            rotate: 0
        };
        return t ? t.toLowerCase().split(" ").reduce((function(t, n) {
            var e = n.toLowerCase().split("-")
              , a = e[0]
              , r = e.slice(1).join("-");
            if (a && "h" === r)
                return t.flipX = !0,
                t;
            if (a && "v" === r)
                return t.flipY = !0,
                t;
            if (r = parseFloat(r),
            isNaN(r))
                return t;
            switch (a) {
            case "grow":
                t.size = t.size + r;
                break;
            case "shrink":
                t.size = t.size - r;
                break;
            case "left":
                t.x = t.x - r;
                break;
            case "right":
                t.x = t.x + r;
                break;
            case "up":
                t.y = t.y - r;
                break;
            case "down":
                t.y = t.y + r;
                break;
            case "rotate":
                t.rotate = t.rotate + r
            }
            return t
        }
        ), n) : n
    };
    function en(t) {
        var n = tn(t)
          , e = n.iconName
          , a = n.prefix
          , r = n.rest
          , i = function(t) {
            var n = t.getAttribute("style")
              , e = [];
            return n && (e = n.split(";").reduce((function(t, n) {
                var e = n.split(":")
                  , a = e[0]
                  , r = e.slice(1);
                return a && r.length > 0 && (t[a] = r.join(":").trim()),
                t
            }
            ), {})),
            e
        }(t)
          , o = function(t) {
            return nn(t.getAttribute("data-fa-transform"))
        }(t)
          , c = function(t) {
            var n = t.getAttribute("data-fa-symbol");
            return null !== n && ("" === n || n)
        }(t)
          , s = function(t) {
            var n = ht(t.attributes).reduce((function(t, n) {
                return "class" !== t.name && "style" !== t.name && (t[n.name] = n.value),
                t
            }
            ), {})
              , e = t.getAttribute("title")
              , a = t.getAttribute("data-fa-title-id");
            return R.autoA11y && (e ? n["aria-labelledby"] = "".concat(R.replacementClass, "-title-").concat(a || pt()) : (n["aria-hidden"] = "true",
            n.focusable = "false")),
            n
        }(t)
          , f = function(t) {
            var n = t.getAttribute("data-fa-mask");
            return n ? Yt(n.split(" ").map((function(t) {
                return t.trim()
            }
            ))) : {
                prefix: null,
                iconName: null,
                rest: []
            }
        }(t);
        return {
            iconName: e,
            title: t.getAttribute("title"),
            titleId: t.getAttribute("data-fa-title-id"),
            prefix: a,
            transform: o,
            symbol: c,
            mask: f,
            maskId: t.getAttribute("data-fa-mask-id"),
            extra: {
                classes: r,
                styles: i,
                attributes: s
            }
        }
    }
    function an(t) {
        this.name = "MissingIcon",
        this.message = t || "Icon unavailable",
        this.stack = (new Error).stack
    }
    an.prototype = Object.create(Error.prototype),
    an.prototype.constructor = an;
    var rn = {
        fill: "currentColor"
    }
      , on = {
        attributeType: "XML",
        repeatCount: "indefinite",
        dur: "2s"
    }
      , cn = {
        tag: "path",
        attributes: r({}, rn, {
            d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        })
    }
      , sn = r({}, on, {
        attributeName: "opacity"
    })
      , fn = {
        tag: "g",
        children: [cn, {
            tag: "circle",
            attributes: r({}, rn, {
                cx: "256",
                cy: "364",
                r: "28"
            }),
            children: [{
                tag: "animate",
                attributes: r({}, on, {
                    attributeName: "r",
                    values: "28;14;28;28;14;28;"
                })
            }, {
                tag: "animate",
                attributes: r({}, sn, {
                    values: "1;0;1;1;0;1;"
                })
            }]
        }, {
            tag: "path",
            attributes: r({}, rn, {
                opacity: "1",
                d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
            }),
            children: [{
                tag: "animate",
                attributes: r({}, sn, {
                    values: "1;0;0;0;0;1;"
                })
            }]
        }, {
            tag: "path",
            attributes: r({}, rn, {
                opacity: "0",
                d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
            }),
            children: [{
                tag: "animate",
                attributes: r({}, sn, {
                    values: "0;0;1;1;0;0;"
                })
            }]
        }]
    }
      , ln = F.styles;
    function un(t) {
        var n = t[0]
          , e = t[1]
          , a = i(t.slice(4), 1)[0];
        return {
            found: !0,
            width: n,
            height: e,
            icon: Array.isArray(a) ? {
                tag: "g",
                attributes: {
                    class: "".concat(R.familyPrefix, "-").concat(P.GROUP)
                },
                children: [{
                    tag: "path",
                    attributes: {
                        class: "".concat(R.familyPrefix, "-").concat(P.SECONDARY),
                        fill: "currentColor",
                        d: a[0]
                    }
                }, {
                    tag: "path",
                    attributes: {
                        class: "".concat(R.familyPrefix, "-").concat(P.PRIMARY),
                        fill: "currentColor",
                        d: a[1]
                    }
                }]
            } : {
                tag: "path",
                attributes: {
                    fill: "currentColor",
                    d: a
                }
            }
        }
    }
    function mn(t, n) {
        return new lt((function(e, a) {
            var r = {
                found: !1,
                width: 512,
                height: 512,
                icon: fn
            };
            if (t && n && ln[n] && ln[n][t])
                return e(un(ln[n][t]));
            t && n && !R.showMissingIcons ? a(new an("Icon is missing for prefix ".concat(n, " with icon name ").concat(t))) : e(r)
        }
        ))
    }
    var dn = F.styles;
    function pn(t) {
        var n = en(t);
        return ~n.extra.classes.indexOf(N) ? function(t, n) {
            var e = n.title
              , a = n.transform
              , r = n.extra
              , i = null
              , o = null;
            if (b) {
                var c = parseInt(getComputedStyle(t).fontSize, 10)
                  , s = t.getBoundingClientRect();
                i = s.width / c,
                o = s.height / c
            }
            return R.autoA11y && !e && (r.attributes["aria-hidden"] = "true"),
            lt.resolve([t, Mt({
                content: t.innerHTML,
                width: i,
                height: o,
                transform: a,
                title: e,
                extra: r,
                watchable: !0
            })])
        }(t, n) : function(t, n) {
            var e = n.iconName
              , a = n.title
              , r = n.titleId
              , o = n.prefix
              , c = n.transform
              , s = n.symbol
              , f = n.mask
              , l = n.maskId
              , u = n.extra;
            return new lt((function(n, m) {
                lt.all([mn(e, o), mn(f.iconName, f.prefix)]).then((function(f) {
                    var m = i(f, 2)
                      , d = m[0]
                      , p = m[1];
                    n([t, zt({
                        icons: {
                            main: d,
                            mask: p
                        },
                        prefix: o,
                        iconName: e,
                        transform: c,
                        symbol: s,
                        mask: p,
                        maskId: l,
                        title: a,
                        titleId: r,
                        extra: u,
                        watchable: !0
                    })])
                }
                ))
            }
            ))
        }(t, n)
    }
    function hn(t) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (v) {
            var e = p.documentElement.classList
              , a = function(t) {
                return e.add("".concat(k, "-").concat(t))
            }
              , r = function(t) {
                return e.remove("".concat(k, "-").concat(t))
            }
              , i = R.autoFetchSvg ? Object.keys(M) : Object.keys(dn)
              , o = [".".concat(N, ":not([").concat(w, "])")].concat(i.map((function(t) {
                return ".".concat(t, ":not([").concat(w, "])")
            }
            ))).join(", ");
            if (0 !== o.length) {
                var c = [];
                try {
                    c = ht(t.querySelectorAll(o))
                } catch (t) {}
                if (c.length > 0) {
                    a("pending"),
                    r("complete");
                    var s = Et("onTree")
                      , f = c.reduce((function(t, n) {
                        try {
                            var e = pn(n);
                            e && t.push(e)
                        } catch (t) {
                            z || t instanceof an && console.error(t)
                        }
                        return t
                    }
                    ), []);
                    return new lt((function(t, e) {
                        lt.all(f).then((function(e) {
                            Kt(e, (function() {
                                a("active"),
                                a("complete"),
                                r("pending"),
                                "function" == typeof n && n(),
                                s(),
                                t()
                            }
                            ))
                        }
                        )).catch((function() {
                            s(),
                            e()
                        }
                        ))
                    }
                    ))
                }
            }
        }
    }
    function gn(t) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        pn(t).then((function(t) {
            t && Kt([t], n)
        }
        ))
    }
    function vn(t, n) {
        var e = "".concat("data-fa-pseudo-element-pending").concat(n.replace(":", "-"));
        return new lt((function(a, i) {
            if (null !== t.getAttribute(e))
                return a();
            var o = ht(t.children).filter((function(t) {
                return t.getAttribute(x) === n
            }
            ))[0]
              , c = d.getComputedStyle(t, n)
              , s = c.getPropertyValue("font-family").match(C)
              , f = c.getPropertyValue("font-weight")
              , l = c.getPropertyValue("content");
            if (o && !s)
                return t.removeChild(o),
                a();
            if (s && "none" !== l && "" !== l) {
                var u = c.getPropertyValue("content")
                  , m = ~["Solid", "Regular", "Light", "Duotone", "Brands", "Kit"].indexOf(s[2]) ? A[s[2].toLowerCase()] : O[f]
                  , h = Lt(3 === u.length ? u.substr(1, 1) : u)
                  , g = Vt(m, h)
                  , v = g;
                if (!g || o && o.getAttribute("data-prefix") === m && o.getAttribute("data-icon") === v)
                    a();
                else {
                    t.setAttribute(e, v),
                    o && t.removeChild(o);
                    var b = {
                        iconName: null,
                        title: null,
                        titleId: null,
                        prefix: null,
                        transform: mt,
                        symbol: !1,
                        mask: null,
                        maskId: null,
                        extra: {
                            classes: [],
                            styles: {},
                            attributes: {}
                        }
                    }
                      , y = b.extra;
                    y.attributes[x] = n,
                    mn(g, m).then((function(i) {
                        var o = zt(r({}, b, {
                            icons: {
                                main: i,
                                mask: {
                                    prefix: null,
                                    iconName: null,
                                    rest: []
                                }
                            },
                            prefix: m,
                            iconName: v,
                            extra: y,
                            watchable: !0
                        }))
                          , c = p.createElement("svg");
                        ":before" === n ? t.insertBefore(c, t.firstChild) : t.appendChild(c),
                        c.outerHTML = o.map((function(t) {
                            return Xt(t)
                        }
                        )).join("\n"),
                        t.removeAttribute(e),
                        a()
                    }
                    )).catch(i)
                }
            } else
                a()
        }
        ))
    }
    function bn(t) {
        return lt.all([vn(t, ":before"), vn(t, ":after")])
    }
    function yn(t) {
        return !(t.parentNode === document.head || ~_.indexOf(t.tagName.toUpperCase()) || t.getAttribute(x) || t.parentNode && "svg" === t.parentNode.tagName)
    }
    function wn(t) {
        if (v)
            return new lt((function(n, e) {
                var a = ht(t.querySelectorAll("*")).filter(yn).map(bn)
                  , r = Et("searchPseudoElements");
                Jt = !0,
                lt.all(a).then((function() {
                    r(),
                    Qt(),
                    n()
                }
                )).catch((function() {
                    r(),
                    Qt(),
                    e()
                }
                ))
            }
            ))
    }
    function xn() {
        var t = "fa"
          , n = y
          , e = R.familyPrefix
          , a = R.replacementClass
          , r = 'svg:not(:root).svg-inline--fa {\n  overflow: visible;\n}\n\n.svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.225em;\n}\n.svg-inline--fa.fa-w-1 {\n  width: 0.0625em;\n}\n.svg-inline--fa.fa-w-2 {\n  width: 0.125em;\n}\n.svg-inline--fa.fa-w-3 {\n  width: 0.1875em;\n}\n.svg-inline--fa.fa-w-4 {\n  width: 0.25em;\n}\n.svg-inline--fa.fa-w-5 {\n  width: 0.3125em;\n}\n.svg-inline--fa.fa-w-6 {\n  width: 0.375em;\n}\n.svg-inline--fa.fa-w-7 {\n  width: 0.4375em;\n}\n.svg-inline--fa.fa-w-8 {\n  width: 0.5em;\n}\n.svg-inline--fa.fa-w-9 {\n  width: 0.5625em;\n}\n.svg-inline--fa.fa-w-10 {\n  width: 0.625em;\n}\n.svg-inline--fa.fa-w-11 {\n  width: 0.6875em;\n}\n.svg-inline--fa.fa-w-12 {\n  width: 0.75em;\n}\n.svg-inline--fa.fa-w-13 {\n  width: 0.8125em;\n}\n.svg-inline--fa.fa-w-14 {\n  width: 0.875em;\n}\n.svg-inline--fa.fa-w-15 {\n  width: 0.9375em;\n}\n.svg-inline--fa.fa-w-16 {\n  width: 1em;\n}\n.svg-inline--fa.fa-w-17 {\n  width: 1.0625em;\n}\n.svg-inline--fa.fa-w-18 {\n  width: 1.125em;\n}\n.svg-inline--fa.fa-w-19 {\n  width: 1.1875em;\n}\n.svg-inline--fa.fa-w-20 {\n  width: 1.25em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-border {\n  height: 1.5em;\n}\n.svg-inline--fa.fa-li {\n  width: 2em;\n}\n.svg-inline--fa.fa-fw {\n  width: 1.25em;\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: #ff253a;\n  border-radius: 1em;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  height: 1.5em;\n  line-height: 1;\n  max-width: 5em;\n  min-width: 1.5em;\n  overflow: hidden;\n  padding: 0.25em;\n  right: 0;\n  text-overflow: ellipsis;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: 0;\n  right: 0;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: 0;\n  left: 0;\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  right: 0;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: 0;\n  right: auto;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-lg {\n  font-size: 1.3333333333em;\n  line-height: 0.75em;\n  vertical-align: -0.0667em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit;\n}\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: 0.1em;\n  padding: 0.2em 0.25em 0.15em;\n}\n\n.fa-pull-left {\n  float: left;\n}\n\n.fa-pull-right {\n  float: right;\n}\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: 0.3em;\n}\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: 0.3em;\n}\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear;\n}\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8);\n}\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical,\n:root .fa-flip-both {\n  -webkit-filter: none;\n          filter: none;\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: #fff;\n}\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse {\n  color: #fff;\n}';
        if (e !== t || a !== n) {
            var i = new RegExp("\\.".concat(t, "\\-"),"g")
              , o = new RegExp("\\--".concat(t, "\\-"),"g")
              , c = new RegExp("\\.".concat(n),"g");
            r = r.replace(i, ".".concat(e, "-")).replace(o, "--".concat(e, "-")).replace(c, ".".concat(a))
        }
        return r
    }
    var kn = function() {
        function t() {
            !function(t, n) {
                if (!(t instanceof n))
                    throw new TypeError("Cannot call a class as a function")
            }(this, t),
            this.definitions = {}
        }
        var n, a, i;
        return n = t,
        a = [{
            key: "add",
            value: function() {
                for (var t = this, n = arguments.length, e = new Array(n), a = 0; a < n; a++)
                    e[a] = arguments[a];
                var i = e.reduce(this._pullDefinitions, {});
                Object.keys(i).forEach((function(n) {
                    t.definitions[n] = r({}, t.definitions[n] || {}, i[n]),
                    Pt(n, i[n]),
                    Ft()
                }
                ))
            }
        }, {
            key: "reset",
            value: function() {
                this.definitions = {}
            }
        }, {
            key: "_pullDefinitions",
            value: function(t, n) {
                var e = n.prefix && n.iconName && n.icon ? {
                    0: n
                } : n;
                return Object.keys(e).map((function(n) {
                    var a = e[n]
                      , r = a.prefix
                      , i = a.iconName
                      , o = a.icon;
                    t[r] || (t[r] = {}),
                    t[r][i] = o
                }
                )),
                t
            }
        }],
        a && e(n.prototype, a),
        i && e(n, i),
        t
    }();
    function _n() {
        R.autoAddCss && !Cn && (dt(xn()),
        Cn = !0)
    }
    function zn(t, n) {
        return Object.defineProperty(t, "abstract", {
            get: n
        }),
        Object.defineProperty(t, "html", {
            get: function() {
                return t.abstract.map((function(t) {
                    return Xt(t)
                }
                ))
            }
        }),
        Object.defineProperty(t, "node", {
            get: function() {
                if (v) {
                    var n = p.createElement("div");
                    return n.innerHTML = t.html,
                    n.children
                }
            }
        }),
        t
    }
    function Mn(t) {
        var n = t.prefix
          , e = void 0 === n ? "fa" : n
          , a = t.iconName;
        if (a)
            return Wt(Nn.definitions, e, a) || Wt(F.styles, e, a)
    }
    var An, Nn = new kn, Cn = !1, On = {
        i2svg: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            if (v) {
                _n();
                var n = t.node
                  , e = void 0 === n ? p : n
                  , a = t.callback
                  , r = void 0 === a ? function() {}
                : a;
                return R.searchPseudoElements && wn(e),
                hn(e, r)
            }
            return lt.reject("Operation requires a DOM of some kind.")
        },
        css: xn,
        insertCss: function() {
            Cn || (dt(xn()),
            Cn = !0)
        },
        watch: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , n = t.autoReplaceSvgRoot
              , e = t.observeMutationsRoot;
            !1 === R.autoReplaceSvg && (R.autoReplaceSvg = !0),
            R.observeMutations = !0,
            Y((function() {
                Sn({
                    autoReplaceSvgRoot: n
                }),
                $t({
                    treeCallback: hn,
                    nodeCallback: gn,
                    pseudoElementsCallback: wn,
                    observeMutationsRoot: e
                })
            }
            ))
        }
    }, En = (An = function(t) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
          , e = n.transform
          , a = void 0 === e ? mt : e
          , i = n.symbol
          , o = void 0 !== i && i
          , c = n.mask
          , s = void 0 === c ? null : c
          , f = n.maskId
          , l = void 0 === f ? null : f
          , u = n.title
          , m = void 0 === u ? null : u
          , d = n.titleId
          , p = void 0 === d ? null : d
          , h = n.classes
          , g = void 0 === h ? [] : h
          , v = n.attributes
          , b = void 0 === v ? {} : v
          , y = n.styles
          , w = void 0 === y ? {} : y;
        if (t) {
            var x = t.prefix
              , k = t.iconName
              , _ = t.icon;
            return zn(r({
                type: "icon"
            }, t), (function() {
                return _n(),
                R.autoA11y && (m ? b["aria-labelledby"] = "".concat(R.replacementClass, "-title-").concat(p || pt()) : (b["aria-hidden"] = "true",
                b.focusable = "false")),
                zt({
                    icons: {
                        main: un(_),
                        mask: s ? un(s.icon) : {
                            found: !1,
                            width: null,
                            height: null,
                            icon: {}
                        }
                    },
                    prefix: x,
                    iconName: k,
                    transform: r({}, mt, a),
                    symbol: o,
                    title: m,
                    maskId: l,
                    titleId: p,
                    extra: {
                        attributes: b,
                        styles: w,
                        classes: g
                    }
                })
            }
            ))
        }
    }
    ,
    On), Sn = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          , n = t.autoReplaceSvgRoot
          , e = void 0 === n ? p : n;
        (Object.keys(F.styles).length > 0 || R.autoFetchSvg) && v && R.autoReplaceSvg && En.i2svg({
            node: e
        })
    }, Ln = {
        prefix: "fas",
        iconName: "bars",
        icon: [448, 512, [], "f0c9", "M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"]
    }, Pn = {
        prefix: "fas",
        iconName: "chevron-down",
        icon: [448, 512, [], "f078", "M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"]
    }, Tn = {
        prefix: "fas",
        iconName: "chevron-up",
        icon: [448, 512, [], "f077", "M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"]
    }, In = {
        prefix: "fas",
        iconName: "envelope-open-text",
        icon: [512, 512, [], "f658", "M176 216h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16zm-16 80c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v16zm96 121.13c-16.42 0-32.84-5.06-46.86-15.19L0 250.86V464c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V250.86L302.86 401.94c-14.02 10.12-30.44 15.19-46.86 15.19zm237.61-254.18c-8.85-6.94-17.24-13.47-29.61-22.81V96c0-26.51-21.49-48-48-48h-77.55c-3.04-2.2-5.87-4.26-9.04-6.56C312.6 29.17 279.2-.35 256 0c-23.2-.35-56.59 29.17-73.41 41.44-3.17 2.3-6 4.36-9.04 6.56H96c-26.51 0-48 21.49-48 48v44.14c-12.37 9.33-20.76 15.87-29.61 22.81A47.995 47.995 0 0 0 0 200.72v10.65l96 69.35V96h320v184.72l96-69.35v-10.65c0-14.74-6.78-28.67-18.39-37.77z"]
    }, jn = {
        prefix: "fas",
        iconName: "map-marker-alt",
        icon: [384, 512, [], "f3c5", "M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"]
    }, Rn = {
        prefix: "fas",
        iconName: "phone",
        icon: [512, 512, [], "f095", "M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"]
    }, Hn = {
        prefix: "fas",
        iconName: "times",
        icon: [352, 512, [], "f00d", "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"]
    }, Fn = {
        prefix: "fab",
        iconName: "github",
        icon: [496, 512, [], "f09b", "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]
    }, Vn = {
        prefix: "fab",
        iconName: "linkedin",
        icon: [448, 512, [], "f08c", "M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]
    }, Dn = {
        prefix: "fab",
        iconName: "stack-overflow",
        icon: [384, 512, [], "f16c", "M290.7 311L95 269.7 86.8 309l195.7 41zm51-87L188.2 95.7l-25.5 30.8 153.5 128.3zm-31.2 39.7L129.2 179l-16.7 36.5L293.7 300zM262 32l-32 24 119.3 160.3 32-24zm20.5 328h-200v39.7h200zm39.7 80H42.7V320h-40v160h359.5V320h-40z"]
    };
    Nn.add(Ln, Hn, Pn, Tn, jn, Fn, Dn, Vn, In, Rn),
    On.watch()
}
)();

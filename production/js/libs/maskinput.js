!function (a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : jQuery)
}(function (a) {
    var C, p = navigator.userAgent, G = /iphone/i.test(p), H = /chrome/i.test(p), D = /android/i.test(p);
    a.mask = {
        definitions: {9: "[0-9]", a: "[A-Za-z]", "*": "[A-Za-z0-9]"},
        autoclear: !0,
        dataName: "rawMaskFn",
        placeholder: "_"
    };
    a.fn.extend({
        caret: function (a, e) {
            var f;
            if (0 !== this.length && !this.is(":hidden")) return "number" == typeof a ? (e = "number" == typeof e ? e : a, this.each(function () {
                this.setSelectionRange ?
                    this.setSelectionRange(a, e) : this.createTextRange && (f = this.createTextRange(), f.collapse(!0), f.moveEnd("character", e), f.moveStart("character", a), f.select())
            })) : (this[0].setSelectionRange ? (a = this[0].selectionStart, e = this[0].selectionEnd) : document.selection && document.selection.createRange && (f = document.selection.createRange(), a = 0 - f.duplicate().moveStart("character", -1E5), e = a + f.text.length), {
                begin: a,
                end: e
            })
        }, unmask: function () {
            return this.trigger("unmask")
        }, mask: function (y, e) {
            var f, g, v, m, p, k, z;
            if (!y && 0 <
                this.length) {
                var q = a(this[0]);
                return (q = q.data(a.mask.dataName)) ? q() : void 0
            }
            return e = a.extend({
                autoclear: a.mask.autoclear,
                placeholder: a.mask.placeholder,
                completed: null
            }, e), f = a.mask.definitions, g = [], v = k = y.length, m = null, a.each(y.split(""), function (a, e) {
                "?" == e ? (k--, v = a) : f[e] ? (g.push(new RegExp(f[e])), null === m && (m = g.length - 1), v > a && (p = g.length - 1)) : g.push(null)
            }), this.trigger("unmask").each(function () {
                function q() {
                    if (e.completed) {
                        for (var c = m; p >= c; c++) if (g[c] && h[c] === r(c)) return;
                        e.completed.call(d)
                    }
                }

                function r(c) {
                    return e.placeholder.charAt(c <
                    e.placeholder.length ? c : 0)
                }

                function t(c) {
                    for (; ++c < k && !g[c];) ;
                    return c
                }

                function E(c, b) {
                    var n;
                    if (!(0 > c)) {
                        var a = c;
                        for (n = t(b); k > a; a++) if (g[a]) {
                            if (!(k > n && g[a].test(h[n]))) break;
                            h[a] = h[n];
                            h[n] = r(n);
                            n = t(n)
                        }
                        x();
                        d.caret(Math.max(m, c))
                    }
                }

                function I(c) {
                    var b, n;
                    var a = c;
                    for (c = r(c); k > a; a++) if (g[a]) {
                        if (b = t(a), n = h[a], h[a] = c, !(k > b && g[b].test(n))) break;
                        c = n
                    }
                }

                function J() {
                    var c = d.val(), b = d.caret();
                    if (z && z.length && z.length > c.length) {
                        for (u(!0); 0 < b.begin && !g[b.begin - 1];) b.begin--;
                        if (0 === b.begin) for (; b.begin < m && !g[b.begin];) b.begin++
                    } else for (u(!0); b.begin <
                    k && !g[b.begin];) b.begin++;
                    d.caret(b.begin, b.begin);
                    q()
                }

                function F() {
                    u();
                    d.val() != B && d.change()
                }

                function A(c, b) {
                    var a;
                    for (a = c; b > a && k > a; a++) g[a] && (h[a] = r(a))
                }

                function x() {
                    d.val(h.join(""))
                }

                function u(c) {
                    var b, a, w, f = d.val(), l = -1;
                    for (w = b = 0; k > b; b++) if (g[b]) {
                        for (h[b] = r(b); w++ < f.length;) if (a = f.charAt(w - 1), g[b].test(a)) {
                            h[b] = a;
                            l = b;
                            break
                        }
                        if (w > f.length) {
                            A(b + 1, k);
                            break
                        }
                    } else h[b] === f.charAt(w) && w++, v > b && (l = b);
                    return c ? x() : v > l + 1 ? e.autoclear || h.join("") === K ? (d.val() && d.val(""), A(0, k)) : x() : (x(), d.val(d.val().substring(0,
                        l + 1))), v ? b : m
                }

                var d = a(this), h = a.map(y.split(""), function (a, b) {
                    return "?" != a ? f[a] ? r(b) : a : void 0
                }), K = h.join(""), B = d.val();
                d.data(a.mask.dataName, function () {
                    return a.map(h, function (a, b) {
                        return g[b] && a != r(b) ? a : null
                    }).join("")
                });
                d.one("unmask", function () {
                    d.off(".mask").removeData(a.mask.dataName)
                }).on("focus.mask", function () {
                    if (!d.prop("readonly")) {
                        clearTimeout(C);
                        B = d.val();
                        var a = u();
                        C = setTimeout(function () {
                            d.get(0) === document.activeElement && (x(), a == y.replace("?", "").length ? d.caret(0, a) : d.caret(a))
                        }, 10)
                    }
                }).on("blur.mask",
                    F).on("keydown.mask", function (a) {
                    if (!d.prop("readonly")) {
                        var b = a.which || a.keyCode;
                        z = d.val();
                        if (8 === b || 46 === b || G && 127 === b) {
                            var c = d.caret();
                            var e = c.begin;
                            c = c.end;
                            if (0 === c - e) {
                                if (46 !== b) for (; 0 <= --e && !g[e];) ; else e = c = t(e - 1);
                                c = 46 === b ? t(c) : c
                            }
                            A(e, c);
                            E(e, c - 1);
                            a.preventDefault()
                        } else 13 === b ? F.call(this, a) : 27 === b && (d.val(B), d.caret(0, u()), a.preventDefault())
                    }
                }).on("keypress.mask", function (c) {
                    if (!d.prop("readonly")) {
                        var b, e, f, m = c.which || c.keyCode, l = d.caret();
                        if (!(c.ctrlKey || c.altKey || c.metaKey || 32 > m) && m && 13 !==
                            m) {
                            if (0 !== l.end - l.begin && (A(l.begin, l.end), E(l.begin, l.end - 1)), b = t(l.begin - 1), k > b && (e = String.fromCharCode(m), g[b].test(e))) (I(b), h[b] = e, x(), f = t(b), D) ? setTimeout(function () {
                                a.proxy(a.fn.caret, d, f)()
                            }, 0) : d.caret(f), l.begin <= p && q();
                            c.preventDefault()
                        }
                    }
                }).on("input.mask paste.mask", function () {
                    d.prop("readonly") || setTimeout(function () {
                        var a = u(!0);
                        d.caret(a);
                        q()
                    }, 0)
                });
                H && D && d.off("input.mask").on("input.mask", J);
                u()
            })
        }
    })
});
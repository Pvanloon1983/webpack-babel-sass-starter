!(function(e) {
  var n = {};
  function t(r) {
    if (n[r]) return n[r].exports;
    var o = (n[r] = { i: r, l: !1, exports: {} });
    return e[r].call(o.exports, o, o.exports, t), (o.l = !0), o.exports;
  }
  (t.m = e),
    (t.c = n),
    (t.d = function(e, n, r) {
      t.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: r });
    }),
    (t.r = function(e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (t.t = function(e, n) {
      if ((1 & n && (e = t(e)), 8 & n)) return e;
      if (4 & n && 'object' == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (t.r(r),
        Object.defineProperty(r, 'default', { enumerable: !0, value: e }),
        2 & n && 'string' != typeof e)
      )
        for (var o in e)
          t.d(
            r,
            o,
            function(n) {
              return e[n];
            }.bind(null, o)
          );
      return r;
    }),
    (t.n = function(e) {
      var n =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return t.d(n, 'a', n), n;
    }),
    (t.o = function(e, n) {
      return Object.prototype.hasOwnProperty.call(e, n);
    }),
    (t.p = ''),
    t((t.s = 5));
})([
  function(e, n, t) {
    var r = t(1),
      o = t(2);
    'string' == typeof (o = o.__esModule ? o.default : o) &&
      (o = [[e.i, o, '']]);
    var i = { insert: 'head', singleton: !1 },
      a = (r(e.i, o, i), o.locals ? o.locals : {});
    e.exports = a;
  },
  function(e, n, t) {
    'use strict';
    var r,
      o = function() {
        return (
          void 0 === r &&
            (r = Boolean(window && document && document.all && !window.atob)),
          r
        );
      },
      i = (function() {
        var e = {};
        return function(n) {
          if (void 0 === e[n]) {
            var t = document.querySelector(n);
            if (
              window.HTMLIFrameElement &&
              t instanceof window.HTMLIFrameElement
            )
              try {
                t = t.contentDocument.head;
              } catch (e) {
                t = null;
              }
            e[n] = t;
          }
          return e[n];
        };
      })(),
      a = {};
    function c(e, n, t) {
      for (var r = 0; r < n.length; r++) {
        var o = { css: n[r][1], media: n[r][2], sourceMap: n[r][3] };
        a[e][r] ? a[e][r](o) : a[e].push(h(o, t));
      }
    }
    function l(e) {
      var n = document.createElement('style'),
        r = e.attributes || {};
      if (void 0 === r.nonce) {
        var o = t.nc;
        o && (r.nonce = o);
      }
      if (
        (Object.keys(r).forEach(function(e) {
          n.setAttribute(e, r[e]);
        }),
        'function' == typeof e.insert)
      )
        e.insert(n);
      else {
        var a = i(e.insert || 'head');
        if (!a)
          throw new Error(
            "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
          );
        a.appendChild(n);
      }
      return n;
    }
    var u,
      s =
        ((u = []),
        function(e, n) {
          return (u[e] = n), u.filter(Boolean).join('\n');
        });
    function f(e, n, t, r) {
      var o = t ? '' : r.css;
      if (e.styleSheet) e.styleSheet.cssText = s(n, o);
      else {
        var i = document.createTextNode(o),
          a = e.childNodes;
        a[n] && e.removeChild(a[n]),
          a.length ? e.insertBefore(i, a[n]) : e.appendChild(i);
      }
    }
    function d(e, n, t) {
      var r = t.css,
        o = t.media,
        i = t.sourceMap;
      if (
        (o ? e.setAttribute('media', o) : e.removeAttribute('media'),
        i &&
          btoa &&
          (r += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
            btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
            ' */'
          )),
        e.styleSheet)
      )
        e.styleSheet.cssText = r;
      else {
        for (; e.firstChild; ) e.removeChild(e.firstChild);
        e.appendChild(document.createTextNode(r));
      }
    }
    var p = null,
      m = 0;
    function h(e, n) {
      var t, r, o;
      if (n.singleton) {
        var i = m++;
        (t = p || (p = l(n))),
          (r = f.bind(null, t, i, !1)),
          (o = f.bind(null, t, i, !0));
      } else
        (t = l(n)),
          (r = d.bind(null, t, n)),
          (o = function() {
            !(function(e) {
              if (null === e.parentNode) return !1;
              e.parentNode.removeChild(e);
            })(t);
          });
      return (
        r(e),
        function(n) {
          if (n) {
            if (
              n.css === e.css &&
              n.media === e.media &&
              n.sourceMap === e.sourceMap
            )
              return;
            r((e = n));
          } else o();
        }
      );
    }
    e.exports = function(e, n, t) {
      return (
        (t = t || {}).singleton ||
          'boolean' == typeof t.singleton ||
          (t.singleton = o()),
        (e = t.base ? e + t.base : e),
        (n = n || []),
        a[e] || (a[e] = []),
        c(e, n, t),
        function(n) {
          if (
            ((n = n || []),
            '[object Array]' === Object.prototype.toString.call(n))
          ) {
            a[e] || (a[e] = []), c(e, n, t);
            for (var r = n.length; r < a[e].length; r++) a[e][r]();
            (a[e].length = n.length), 0 === a[e].length && delete a[e];
          }
        }
      );
    };
  },
  function(e, n, t) {
    (n = t(3)(!1)).push([
      e.i,
      '#div {\n  background: orange; }\n  #div h1 {\n    color: white; }\n',
      ''
    ]),
      (e.exports = n);
  },
  function(e, n, t) {
    'use strict';
    e.exports = function(e) {
      var n = [];
      return (
        (n.toString = function() {
          return this.map(function(n) {
            var t = (function(e, n) {
              var t = e[1] || '',
                r = e[3];
              if (!r) return t;
              if (n && 'function' == typeof btoa) {
                var o =
                    ((a = r),
                    (c = btoa(unescape(encodeURIComponent(JSON.stringify(a))))),
                    (l = 'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(
                      c
                    )),
                    '/*# '.concat(l, ' */')),
                  i = r.sources.map(function(e) {
                    return '/*# sourceURL='
                      .concat(r.sourceRoot)
                      .concat(e, ' */');
                  });
                return [t]
                  .concat(i)
                  .concat([o])
                  .join('\n');
              }
              var a, c, l;
              return [t].join('\n');
            })(n, e);
            return n[2] ? '@media '.concat(n[2], ' {').concat(t, '}') : t;
          }).join('');
        }),
        (n.i = function(e, t) {
          'string' == typeof e && (e = [[null, e, '']]);
          for (var r = 0; r < e.length; r++) {
            var o = [].concat(e[r]);
            t &&
              (o[2] ? (o[2] = ''.concat(t, ' and ').concat(o[2])) : (o[2] = t)),
              n.push(o);
          }
        }),
        n
      );
    };
  },
  function(e, n) {
    e.exports =
      '<!DOCTYPE html>\r\n<html lang="en">\r\n  <head>\r\n    <meta charset="UTF-8" />\r\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\r\n    <meta http-equiv="X-UA-Compatible" content="ie=edge" />\r\n    <link rel="stylesheet" href="./assets/css/main.css" />\r\n    <title>Babel Starter</title>\r\n  </head>\r\n  <body>\r\n    <div id="div">\r\n      <h1>Hello From Sass!!</h1>\r\n    </div>\r\n\r\n    <img src="./img/bg.jpg" alt="" width="200px" height="200px" />\r\n    <img src="./img/bg.jpg" alt="" width="200px" height="200px" />\r\n    <img src="./img/cartoon.png" alt="" width="200px" height="200px" />\r\n\r\n    <script src="./assets/js/bundle.js"></script>\r\n  </body>\r\n</html>\r\n';
  },
  function(e, n, t) {
    'use strict';
    t.r(n), console.log('dom file');
    var r = document.querySelector('body'),
      o = [
        { name: 'Mario', premium: !0 },
        { name: 'luigi', premium: !1 },
        { name: 'yoshi', premium: !0 },
        { name: 'toad', premium: !0 }
      ];
    function i(e, n) {
      for (var t = 0; t < n.length; t++) {
        var r = n[t];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    var a,
      c,
      l = new ((function() {
        function e() {
          !(function(e, n) {
            if (!(e instanceof n))
              throw new TypeError('Cannot call a class as a function');
          })(this, e),
            (this.name = 'MyName');
        }
        var n, t, r;
        return (
          (n = e),
          (t = [
            {
              key: 'sayHello',
              value: function() {
                return 'Exported from class.js: '.concat(this.name);
              }
            }
          ]) && i(n.prototype, t),
          r && i(n, r),
          e
        );
      })())();
    t(0), t(4);
    console.log('index filee'),
      (a = 'Hi There!!!!!!'),
      ((c = document.createElement('h1')).textContent = a),
      r.appendChild(c),
      (r.style.background = 'peachpuff'),
      console.log('mario@ninja.com');
    var u = o.filter(function(e) {
      return e.premium;
    });
    console.log(o, u), console.log(l.sayHello());
  }
]);

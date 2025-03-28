(function () {
  const s = document.createElement("link").relList;
  if (s && s.supports && s.supports("modulepreload")) return;
  for (const f of document.querySelectorAll('link[rel="modulepreload"]')) p(f);
  new MutationObserver((f) => {
    for (const h of f)
      if (h.type === "childList")
        for (const k of h.addedNodes)
          k.tagName === "LINK" && k.rel === "modulepreload" && p(k);
  }).observe(document, { childList: !0, subtree: !0 });
  function a(f) {
    const h = {};
    return (
      f.integrity && (h.integrity = f.integrity),
      f.referrerPolicy && (h.referrerPolicy = f.referrerPolicy),
      f.crossOrigin === "use-credentials"
        ? (h.credentials = "include")
        : f.crossOrigin === "anonymous"
        ? (h.credentials = "omit")
        : (h.credentials = "same-origin"),
      h
    );
  }
  function p(f) {
    if (f.ep) return;
    f.ep = !0;
    const h = a(f);
    fetch(f.href, h);
  }
})();
var Qi = { exports: {} },
  _r = {},
  Ki = { exports: {} },
  ee = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var rc;
function Id() {
  if (rc) return ee;
  rc = 1;
  var i = Symbol.for("react.element"),
    s = Symbol.for("react.portal"),
    a = Symbol.for("react.fragment"),
    p = Symbol.for("react.strict_mode"),
    f = Symbol.for("react.profiler"),
    h = Symbol.for("react.provider"),
    k = Symbol.for("react.context"),
    C = Symbol.for("react.forward_ref"),
    w = Symbol.for("react.suspense"),
    S = Symbol.for("react.memo"),
    j = Symbol.for("react.lazy"),
    I = Symbol.iterator;
  function N(y) {
    return y === null || typeof y != "object"
      ? null
      : ((y = (I && y[I]) || y["@@iterator"]),
        typeof y == "function" ? y : null);
  }
  var U = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    z = Object.assign,
    M = {};
  function D(y, _, b) {
    (this.props = y),
      (this.context = _),
      (this.refs = M),
      (this.updater = b || U);
  }
  (D.prototype.isReactComponent = {}),
    (D.prototype.setState = function (y, _) {
      if (typeof y != "object" && typeof y != "function" && y != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, y, _, "setState");
    }),
    (D.prototype.forceUpdate = function (y) {
      this.updater.enqueueForceUpdate(this, y, "forceUpdate");
    });
  function O() {}
  O.prototype = D.prototype;
  function B(y, _, b) {
    (this.props = y),
      (this.context = _),
      (this.refs = M),
      (this.updater = b || U);
  }
  var W = (B.prototype = new O());
  (W.constructor = B), z(W, D.prototype), (W.isPureReactComponent = !0);
  var q = Array.isArray,
    ne = Object.prototype.hasOwnProperty,
    oe = { current: null },
    ae = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ge(y, _, b) {
    var te,
      le = {},
      ue = null,
      de = null;
    if (_ != null)
      for (te in (_.ref !== void 0 && (de = _.ref),
      _.key !== void 0 && (ue = "" + _.key),
      _))
        ne.call(_, te) && !ae.hasOwnProperty(te) && (le[te] = _[te]);
    var ce = arguments.length - 2;
    if (ce === 1) le.children = b;
    else if (1 < ce) {
      for (var ye = Array(ce), Ze = 0; Ze < ce; Ze++)
        ye[Ze] = arguments[Ze + 2];
      le.children = ye;
    }
    if (y && y.defaultProps)
      for (te in ((ce = y.defaultProps), ce))
        le[te] === void 0 && (le[te] = ce[te]);
    return {
      $$typeof: i,
      type: y,
      key: ue,
      ref: de,
      props: le,
      _owner: oe.current,
    };
  }
  function se(y, _) {
    return {
      $$typeof: i,
      type: y.type,
      key: _,
      ref: y.ref,
      props: y.props,
      _owner: y._owner,
    };
  }
  function ke(y) {
    return typeof y == "object" && y !== null && y.$$typeof === i;
  }
  function Xe(y) {
    var _ = { "=": "=0", ":": "=2" };
    return (
      "$" +
      y.replace(/[=:]/g, function (b) {
        return _[b];
      })
    );
  }
  var nt = /\/+/g;
  function Oe(y, _) {
    return typeof y == "object" && y !== null && y.key != null
      ? Xe("" + y.key)
      : _.toString(36);
  }
  function Je(y, _, b, te, le) {
    var ue = typeof y;
    (ue === "undefined" || ue === "boolean") && (y = null);
    var de = !1;
    if (y === null) de = !0;
    else
      switch (ue) {
        case "string":
        case "number":
          de = !0;
          break;
        case "object":
          switch (y.$$typeof) {
            case i:
            case s:
              de = !0;
          }
      }
    if (de)
      return (
        (de = y),
        (le = le(de)),
        (y = te === "" ? "." + Oe(de, 0) : te),
        q(le)
          ? ((b = ""),
            y != null && (b = y.replace(nt, "$&/") + "/"),
            Je(le, _, b, "", function (Ze) {
              return Ze;
            }))
          : le != null &&
            (ke(le) &&
              (le = se(
                le,
                b +
                  (!le.key || (de && de.key === le.key)
                    ? ""
                    : ("" + le.key).replace(nt, "$&/") + "/") +
                  y
              )),
            _.push(le)),
        1
      );
    if (((de = 0), (te = te === "" ? "." : te + ":"), q(y)))
      for (var ce = 0; ce < y.length; ce++) {
        ue = y[ce];
        var ye = te + Oe(ue, ce);
        de += Je(ue, _, b, ye, le);
      }
    else if (((ye = N(y)), typeof ye == "function"))
      for (y = ye.call(y), ce = 0; !(ue = y.next()).done; )
        (ue = ue.value), (ye = te + Oe(ue, ce++)), (de += Je(ue, _, b, ye, le));
    else if (ue === "object")
      throw (
        ((_ = String(y)),
        Error(
          "Objects are not valid as a React child (found: " +
            (_ === "[object Object]"
              ? "object with keys {" + Object.keys(y).join(", ") + "}"
              : _) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    return de;
  }
  function yt(y, _, b) {
    if (y == null) return y;
    var te = [],
      le = 0;
    return (
      Je(y, te, "", "", function (ue) {
        return _.call(b, ue, le++);
      }),
      te
    );
  }
  function He(y) {
    if (y._status === -1) {
      var _ = y._result;
      (_ = _()),
        _.then(
          function (b) {
            (y._status === 0 || y._status === -1) &&
              ((y._status = 1), (y._result = b));
          },
          function (b) {
            (y._status === 0 || y._status === -1) &&
              ((y._status = 2), (y._result = b));
          }
        ),
        y._status === -1 && ((y._status = 0), (y._result = _));
    }
    if (y._status === 1) return y._result.default;
    throw y._result;
  }
  var Ee = { current: null },
    $ = { transition: null },
    J = {
      ReactCurrentDispatcher: Ee,
      ReactCurrentBatchConfig: $,
      ReactCurrentOwner: oe,
    };
  function V() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (ee.Children = {
      map: yt,
      forEach: function (y, _, b) {
        yt(
          y,
          function () {
            _.apply(this, arguments);
          },
          b
        );
      },
      count: function (y) {
        var _ = 0;
        return (
          yt(y, function () {
            _++;
          }),
          _
        );
      },
      toArray: function (y) {
        return (
          yt(y, function (_) {
            return _;
          }) || []
        );
      },
      only: function (y) {
        if (!ke(y))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return y;
      },
    }),
    (ee.Component = D),
    (ee.Fragment = a),
    (ee.Profiler = f),
    (ee.PureComponent = B),
    (ee.StrictMode = p),
    (ee.Suspense = w),
    (ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = J),
    (ee.act = V),
    (ee.cloneElement = function (y, _, b) {
      if (y == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            y +
            "."
        );
      var te = z({}, y.props),
        le = y.key,
        ue = y.ref,
        de = y._owner;
      if (_ != null) {
        if (
          (_.ref !== void 0 && ((ue = _.ref), (de = oe.current)),
          _.key !== void 0 && (le = "" + _.key),
          y.type && y.type.defaultProps)
        )
          var ce = y.type.defaultProps;
        for (ye in _)
          ne.call(_, ye) &&
            !ae.hasOwnProperty(ye) &&
            (te[ye] = _[ye] === void 0 && ce !== void 0 ? ce[ye] : _[ye]);
      }
      var ye = arguments.length - 2;
      if (ye === 1) te.children = b;
      else if (1 < ye) {
        ce = Array(ye);
        for (var Ze = 0; Ze < ye; Ze++) ce[Ze] = arguments[Ze + 2];
        te.children = ce;
      }
      return {
        $$typeof: i,
        type: y.type,
        key: le,
        ref: ue,
        props: te,
        _owner: de,
      };
    }),
    (ee.createContext = function (y) {
      return (
        (y = {
          $$typeof: k,
          _currentValue: y,
          _currentValue2: y,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (y.Provider = { $$typeof: h, _context: y }),
        (y.Consumer = y)
      );
    }),
    (ee.createElement = ge),
    (ee.createFactory = function (y) {
      var _ = ge.bind(null, y);
      return (_.type = y), _;
    }),
    (ee.createRef = function () {
      return { current: null };
    }),
    (ee.forwardRef = function (y) {
      return { $$typeof: C, render: y };
    }),
    (ee.isValidElement = ke),
    (ee.lazy = function (y) {
      return { $$typeof: j, _payload: { _status: -1, _result: y }, _init: He };
    }),
    (ee.memo = function (y, _) {
      return { $$typeof: S, type: y, compare: _ === void 0 ? null : _ };
    }),
    (ee.startTransition = function (y) {
      var _ = $.transition;
      $.transition = {};
      try {
        y();
      } finally {
        $.transition = _;
      }
    }),
    (ee.unstable_act = V),
    (ee.useCallback = function (y, _) {
      return Ee.current.useCallback(y, _);
    }),
    (ee.useContext = function (y) {
      return Ee.current.useContext(y);
    }),
    (ee.useDebugValue = function () {}),
    (ee.useDeferredValue = function (y) {
      return Ee.current.useDeferredValue(y);
    }),
    (ee.useEffect = function (y, _) {
      return Ee.current.useEffect(y, _);
    }),
    (ee.useId = function () {
      return Ee.current.useId();
    }),
    (ee.useImperativeHandle = function (y, _, b) {
      return Ee.current.useImperativeHandle(y, _, b);
    }),
    (ee.useInsertionEffect = function (y, _) {
      return Ee.current.useInsertionEffect(y, _);
    }),
    (ee.useLayoutEffect = function (y, _) {
      return Ee.current.useLayoutEffect(y, _);
    }),
    (ee.useMemo = function (y, _) {
      return Ee.current.useMemo(y, _);
    }),
    (ee.useReducer = function (y, _, b) {
      return Ee.current.useReducer(y, _, b);
    }),
    (ee.useRef = function (y) {
      return Ee.current.useRef(y);
    }),
    (ee.useState = function (y) {
      return Ee.current.useState(y);
    }),
    (ee.useSyncExternalStore = function (y, _, b) {
      return Ee.current.useSyncExternalStore(y, _, b);
    }),
    (ee.useTransition = function () {
      return Ee.current.useTransition();
    }),
    (ee.version = "18.3.1"),
    ee
  );
}
var lc;
function to() {
  return lc || ((lc = 1), (Ki.exports = Id())), Ki.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var uc;
function Od() {
  if (uc) return _r;
  uc = 1;
  var i = to(),
    s = Symbol.for("react.element"),
    a = Symbol.for("react.fragment"),
    p = Object.prototype.hasOwnProperty,
    f = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    h = { key: !0, ref: !0, __self: !0, __source: !0 };
  function k(C, w, S) {
    var j,
      I = {},
      N = null,
      U = null;
    S !== void 0 && (N = "" + S),
      w.key !== void 0 && (N = "" + w.key),
      w.ref !== void 0 && (U = w.ref);
    for (j in w) p.call(w, j) && !h.hasOwnProperty(j) && (I[j] = w[j]);
    if (C && C.defaultProps)
      for (j in ((w = C.defaultProps), w)) I[j] === void 0 && (I[j] = w[j]);
    return {
      $$typeof: s,
      type: C,
      key: N,
      ref: U,
      props: I,
      _owner: f.current,
    };
  }
  return (_r.Fragment = a), (_r.jsx = k), (_r.jsxs = k), _r;
}
var ic;
function Fd() {
  return ic || ((ic = 1), (Qi.exports = Od())), Qi.exports;
}
var F = Fd(),
  E = to(),
  Ql = {},
  Yi = { exports: {} },
  Ge = {},
  Gi = { exports: {} },
  Xi = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var oc;
function Md() {
  return (
    oc ||
      ((oc = 1),
      (function (i) {
        function s($, J) {
          var V = $.length;
          $.push(J);
          e: for (; 0 < V; ) {
            var y = (V - 1) >>> 1,
              _ = $[y];
            if (0 < f(_, J)) ($[y] = J), ($[V] = _), (V = y);
            else break e;
          }
        }
        function a($) {
          return $.length === 0 ? null : $[0];
        }
        function p($) {
          if ($.length === 0) return null;
          var J = $[0],
            V = $.pop();
          if (V !== J) {
            $[0] = V;
            e: for (var y = 0, _ = $.length, b = _ >>> 1; y < b; ) {
              var te = 2 * (y + 1) - 1,
                le = $[te],
                ue = te + 1,
                de = $[ue];
              if (0 > f(le, V))
                ue < _ && 0 > f(de, le)
                  ? (($[y] = de), ($[ue] = V), (y = ue))
                  : (($[y] = le), ($[te] = V), (y = te));
              else if (ue < _ && 0 > f(de, V))
                ($[y] = de), ($[ue] = V), (y = ue);
              else break e;
            }
          }
          return J;
        }
        function f($, J) {
          var V = $.sortIndex - J.sortIndex;
          return V !== 0 ? V : $.id - J.id;
        }
        if (
          typeof performance == "object" &&
          typeof performance.now == "function"
        ) {
          var h = performance;
          i.unstable_now = function () {
            return h.now();
          };
        } else {
          var k = Date,
            C = k.now();
          i.unstable_now = function () {
            return k.now() - C;
          };
        }
        var w = [],
          S = [],
          j = 1,
          I = null,
          N = 3,
          U = !1,
          z = !1,
          M = !1,
          D = typeof setTimeout == "function" ? setTimeout : null,
          O = typeof clearTimeout == "function" ? clearTimeout : null,
          B = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function W($) {
          for (var J = a(S); J !== null; ) {
            if (J.callback === null) p(S);
            else if (J.startTime <= $)
              p(S), (J.sortIndex = J.expirationTime), s(w, J);
            else break;
            J = a(S);
          }
        }
        function q($) {
          if (((M = !1), W($), !z))
            if (a(w) !== null) (z = !0), He(ne);
            else {
              var J = a(S);
              J !== null && Ee(q, J.startTime - $);
            }
        }
        function ne($, J) {
          (z = !1), M && ((M = !1), O(ge), (ge = -1)), (U = !0);
          var V = N;
          try {
            for (
              W(J), I = a(w);
              I !== null && (!(I.expirationTime > J) || ($ && !Xe()));

            ) {
              var y = I.callback;
              if (typeof y == "function") {
                (I.callback = null), (N = I.priorityLevel);
                var _ = y(I.expirationTime <= J);
                (J = i.unstable_now()),
                  typeof _ == "function"
                    ? (I.callback = _)
                    : I === a(w) && p(w),
                  W(J);
              } else p(w);
              I = a(w);
            }
            if (I !== null) var b = !0;
            else {
              var te = a(S);
              te !== null && Ee(q, te.startTime - J), (b = !1);
            }
            return b;
          } finally {
            (I = null), (N = V), (U = !1);
          }
        }
        var oe = !1,
          ae = null,
          ge = -1,
          se = 5,
          ke = -1;
        function Xe() {
          return !(i.unstable_now() - ke < se);
        }
        function nt() {
          if (ae !== null) {
            var $ = i.unstable_now();
            ke = $;
            var J = !0;
            try {
              J = ae(!0, $);
            } finally {
              J ? Oe() : ((oe = !1), (ae = null));
            }
          } else oe = !1;
        }
        var Oe;
        if (typeof B == "function")
          Oe = function () {
            B(nt);
          };
        else if (typeof MessageChannel < "u") {
          var Je = new MessageChannel(),
            yt = Je.port2;
          (Je.port1.onmessage = nt),
            (Oe = function () {
              yt.postMessage(null);
            });
        } else
          Oe = function () {
            D(nt, 0);
          };
        function He($) {
          (ae = $), oe || ((oe = !0), Oe());
        }
        function Ee($, J) {
          ge = D(function () {
            $(i.unstable_now());
          }, J);
        }
        (i.unstable_IdlePriority = 5),
          (i.unstable_ImmediatePriority = 1),
          (i.unstable_LowPriority = 4),
          (i.unstable_NormalPriority = 3),
          (i.unstable_Profiling = null),
          (i.unstable_UserBlockingPriority = 2),
          (i.unstable_cancelCallback = function ($) {
            $.callback = null;
          }),
          (i.unstable_continueExecution = function () {
            z || U || ((z = !0), He(ne));
          }),
          (i.unstable_forceFrameRate = function ($) {
            0 > $ || 125 < $
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (se = 0 < $ ? Math.floor(1e3 / $) : 5);
          }),
          (i.unstable_getCurrentPriorityLevel = function () {
            return N;
          }),
          (i.unstable_getFirstCallbackNode = function () {
            return a(w);
          }),
          (i.unstable_next = function ($) {
            switch (N) {
              case 1:
              case 2:
              case 3:
                var J = 3;
                break;
              default:
                J = N;
            }
            var V = N;
            N = J;
            try {
              return $();
            } finally {
              N = V;
            }
          }),
          (i.unstable_pauseExecution = function () {}),
          (i.unstable_requestPaint = function () {}),
          (i.unstable_runWithPriority = function ($, J) {
            switch ($) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                $ = 3;
            }
            var V = N;
            N = $;
            try {
              return J();
            } finally {
              N = V;
            }
          }),
          (i.unstable_scheduleCallback = function ($, J, V) {
            var y = i.unstable_now();
            switch (
              (typeof V == "object" && V !== null
                ? ((V = V.delay),
                  (V = typeof V == "number" && 0 < V ? y + V : y))
                : (V = y),
              $)
            ) {
              case 1:
                var _ = -1;
                break;
              case 2:
                _ = 250;
                break;
              case 5:
                _ = 1073741823;
                break;
              case 4:
                _ = 1e4;
                break;
              default:
                _ = 5e3;
            }
            return (
              (_ = V + _),
              ($ = {
                id: j++,
                callback: J,
                priorityLevel: $,
                startTime: V,
                expirationTime: _,
                sortIndex: -1,
              }),
              V > y
                ? (($.sortIndex = V),
                  s(S, $),
                  a(w) === null &&
                    $ === a(S) &&
                    (M ? (O(ge), (ge = -1)) : (M = !0), Ee(q, V - y)))
                : (($.sortIndex = _), s(w, $), z || U || ((z = !0), He(ne))),
              $
            );
          }),
          (i.unstable_shouldYield = Xe),
          (i.unstable_wrapCallback = function ($) {
            var J = N;
            return function () {
              var V = N;
              N = J;
              try {
                return $.apply(this, arguments);
              } finally {
                N = V;
              }
            };
          });
      })(Xi)),
    Xi
  );
}
var ac;
function Ud() {
  return ac || ((ac = 1), (Gi.exports = Md())), Gi.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var sc;
function $d() {
  if (sc) return Ge;
  sc = 1;
  var i = to(),
    s = Ud();
  function a(e) {
    for (
      var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        n = 1;
      n < arguments.length;
      n++
    )
      t += "&args[]=" + encodeURIComponent(arguments[n]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var p = new Set(),
    f = {};
  function h(e, t) {
    k(e, t), k(e + "Capture", t);
  }
  function k(e, t) {
    for (f[e] = t, e = 0; e < t.length; e++) p.add(t[e]);
  }
  var C = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    w = Object.prototype.hasOwnProperty,
    S =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    j = {},
    I = {};
  function N(e) {
    return w.call(I, e)
      ? !0
      : w.call(j, e)
      ? !1
      : S.test(e)
      ? (I[e] = !0)
      : ((j[e] = !0), !1);
  }
  function U(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return r
          ? !1
          : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function z(e, t, n, r) {
    if (t === null || typeof t > "u" || U(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null)
      switch (n.type) {
        case 3:
          return !t;
        case 4:
          return t === !1;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
    return !1;
  }
  function M(e, t, n, r, l, u, o) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = r),
      (this.attributeNamespace = l),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = u),
      (this.removeEmptyString = o);
  }
  var D = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      D[e] = new M(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      D[t] = new M(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (
      e
    ) {
      D[e] = new M(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      D[e] = new M(e, 2, !1, e, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        D[e] = new M(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      D[e] = new M(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      D[e] = new M(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      D[e] = new M(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      D[e] = new M(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
  var O = /[\-:]([a-z])/g;
  function B(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(O, B);
      D[t] = new M(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(O, B);
        D[t] = new M(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(O, B);
      D[t] = new M(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      D[e] = new M(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (D.xlinkHref = new M(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      D[e] = new M(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
  function W(e, t, n, r) {
    var l = D.hasOwnProperty(t) ? D[t] : null;
    (l !== null
      ? l.type !== 0
      : r ||
        !(2 < t.length) ||
        (t[0] !== "o" && t[0] !== "O") ||
        (t[1] !== "n" && t[1] !== "N")) &&
      (z(t, n, l, r) && (n = null),
      r || l === null
        ? N(t) &&
          (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
        : l.mustUseProperty
        ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
        : ((t = l.attributeName),
          (r = l.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((l = l.type),
              (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var q = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    ne = Symbol.for("react.element"),
    oe = Symbol.for("react.portal"),
    ae = Symbol.for("react.fragment"),
    ge = Symbol.for("react.strict_mode"),
    se = Symbol.for("react.profiler"),
    ke = Symbol.for("react.provider"),
    Xe = Symbol.for("react.context"),
    nt = Symbol.for("react.forward_ref"),
    Oe = Symbol.for("react.suspense"),
    Je = Symbol.for("react.suspense_list"),
    yt = Symbol.for("react.memo"),
    He = Symbol.for("react.lazy"),
    Ee = Symbol.for("react.offscreen"),
    $ = Symbol.iterator;
  function J(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = ($ && e[$]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var V = Object.assign,
    y;
  function _(e) {
    if (y === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        y = (t && t[1]) || "";
      }
    return (
      `
` +
      y +
      e
    );
  }
  var b = !1;
  function te(e, t) {
    if (!e || b) return "";
    b = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (
          ((t = function () {
            throw Error();
          }),
          Object.defineProperty(t.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, []);
          } catch (x) {
            var r = x;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (x) {
            r = x;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (x) {
          r = x;
        }
        e();
      }
    } catch (x) {
      if (x && r && typeof x.stack == "string") {
        for (
          var l = x.stack.split(`
`),
            u = r.stack.split(`
`),
            o = l.length - 1,
            c = u.length - 1;
          1 <= o && 0 <= c && l[o] !== u[c];

        )
          c--;
        for (; 1 <= o && 0 <= c; o--, c--)
          if (l[o] !== u[c]) {
            if (o !== 1 || c !== 1)
              do
                if ((o--, c--, 0 > c || l[o] !== u[c])) {
                  var d =
                    `
` + l[o].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      d.includes("<anonymous>") &&
                      (d = d.replace("<anonymous>", e.displayName)),
                    d
                  );
                }
              while (1 <= o && 0 <= c);
            break;
          }
      }
    } finally {
      (b = !1), (Error.prepareStackTrace = n);
    }
    return (e = e ? e.displayName || e.name : "") ? _(e) : "";
  }
  function le(e) {
    switch (e.tag) {
      case 5:
        return _(e.type);
      case 16:
        return _("Lazy");
      case 13:
        return _("Suspense");
      case 19:
        return _("SuspenseList");
      case 0:
      case 2:
      case 15:
        return (e = te(e.type, !1)), e;
      case 11:
        return (e = te(e.type.render, !1)), e;
      case 1:
        return (e = te(e.type, !0)), e;
      default:
        return "";
    }
  }
  function ue(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case ae:
        return "Fragment";
      case oe:
        return "Portal";
      case se:
        return "Profiler";
      case ge:
        return "StrictMode";
      case Oe:
        return "Suspense";
      case Je:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Xe:
          return (e.displayName || "Context") + ".Consumer";
        case ke:
          return (e._context.displayName || "Context") + ".Provider";
        case nt:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case yt:
          return (
            (t = e.displayName || null), t !== null ? t : ue(e.type) || "Memo"
          );
        case He:
          (t = e._payload), (e = e._init);
          try {
            return ue(e(t));
          } catch {}
      }
    return null;
  }
  function de(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (e = t.render),
          (e = e.displayName || e.name || ""),
          t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return ue(t);
      case 8:
        return t === ge ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function ce(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function ye(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function Ze(e) {
    var t = ye(e) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      r = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var l = n.get,
        u = n.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return l.call(this);
          },
          set: function (o) {
            (r = "" + o), u.call(this, o);
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return r;
          },
          setValue: function (o) {
            r = "" + o;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function Or(e) {
    e._valueTracker || (e._valueTracker = Ze(e));
  }
  function ao(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = "";
    return (
      e && (r = ye(e) ? (e.checked ? "true" : "false") : e.value),
      (e = r),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function Fr(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function ql(e, t) {
    var n = t.checked;
    return V({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function so(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
      r = t.checked != null ? t.checked : t.defaultChecked;
    (n = ce(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          t.type === "checkbox" || t.type === "radio"
            ? t.checked != null
            : t.value != null,
      });
  }
  function co(e, t) {
    (t = t.checked), t != null && W(e, "checked", t, !1);
  }
  function bl(e, t) {
    co(e, t);
    var n = ce(t.value),
      r = t.type;
    if (n != null)
      r === "number"
        ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
        : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value")
      ? eu(e, t.type, n)
      : t.hasOwnProperty("defaultValue") && eu(e, t.type, ce(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked);
  }
  function fo(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (
        !(
          (r !== "submit" && r !== "reset") ||
          (t.value !== void 0 && t.value !== null)
        )
      )
        return;
      (t = "" + e._wrapperState.initialValue),
        n || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (n = e.name),
      n !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      n !== "" && (e.name = n);
  }
  function eu(e, t, n) {
    (t !== "number" || Fr(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var Hn = Array.isArray;
  function hn(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++)
        (l = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== l && (e[n].selected = l),
          l && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + ce(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          (e[l].selected = !0), r && (e[l].defaultSelected = !0);
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function tu(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(a(91));
    return V({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function po(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(a(92));
        if (Hn(n)) {
          if (1 < n.length) throw Error(a(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), (n = t);
    }
    e._wrapperState = { initialValue: ce(n) };
  }
  function mo(e, t) {
    var n = ce(t.value),
      r = ce(t.defaultValue);
    n != null &&
      ((n = "" + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = "" + r);
  }
  function ho(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== "" &&
      t !== null &&
      (e.value = t);
  }
  function yo(e) {
    switch (e) {
      case ".webp":
        return "http://www.w3.org/2000/.webp";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function nu(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? yo(t)
      : e === "http://www.w3.org/2000/.webp" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
  }
  var Mr,
    vo = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (t, n, r, l) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, n, r, l);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== "http://www.w3.org/2000/.webp" || "innerHTML" in e)
        e.innerHTML = t;
      else {
        for (
          Mr = Mr || document.createElement("div"),
            Mr.innerHTML = "<.webp>" + t.valueOf().toString() + "</.webp>",
            t = Mr.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function Wn(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Vn = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    Uc = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Vn).forEach(function (e) {
    Uc.forEach(function (t) {
      (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Vn[t] = Vn[e]);
    });
  });
  function go(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : n || typeof t != "number" || t === 0 || (Vn.hasOwnProperty(e) && Vn[e])
      ? ("" + t).trim()
      : t + "px";
  }
  function wo(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0,
          l = go(n, t[n], r);
        n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
      }
  }
  var $c = V(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    }
  );
  function ru(e, t) {
    if (t) {
      if ($c[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(a(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(a(60));
        if (
          typeof t.dangerouslySetInnerHTML != "object" ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(a(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(a(62));
    }
  }
  function lu(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var uu = null;
  function iu(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var ou = null,
    yn = null,
    vn = null;
  function xo(e) {
    if ((e = dr(e))) {
      if (typeof ou != "function") throw Error(a(280));
      var t = e.stateNode;
      t && ((t = il(t)), ou(e.stateNode, e.type, t));
    }
  }
  function So(e) {
    yn ? (vn ? vn.push(e) : (vn = [e])) : (yn = e);
  }
  function ko() {
    if (yn) {
      var e = yn,
        t = vn;
      if (((vn = yn = null), xo(e), t)) for (e = 0; e < t.length; e++) xo(t[e]);
    }
  }
  function Eo(e, t) {
    return e(t);
  }
  function Co() {}
  var au = !1;
  function No(e, t, n) {
    if (au) return e(t, n);
    au = !0;
    try {
      return Eo(e, t, n);
    } finally {
      (au = !1), (yn !== null || vn !== null) && (Co(), ko());
    }
  }
  function Qn(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = il(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (r = !r.disabled) ||
          ((e = e.type),
          (r = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !r);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(a(231, t, typeof n));
    return n;
  }
  var su = !1;
  if (C)
    try {
      var Kn = {};
      Object.defineProperty(Kn, "passive", {
        get: function () {
          su = !0;
        },
      }),
        window.addEventListener("test", Kn, Kn),
        window.removeEventListener("test", Kn, Kn);
    } catch {
      su = !1;
    }
  function Ac(e, t, n, r, l, u, o, c, d) {
    var x = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, x);
    } catch (R) {
      this.onError(R);
    }
  }
  var Yn = !1,
    Ur = null,
    $r = !1,
    cu = null,
    Bc = {
      onError: function (e) {
        (Yn = !0), (Ur = e);
      },
    };
  function Hc(e, t, n, r, l, u, o, c, d) {
    (Yn = !1), (Ur = null), Ac.apply(Bc, arguments);
  }
  function Wc(e, t, n, r, l, u, o, c, d) {
    if ((Hc.apply(this, arguments), Yn)) {
      if (Yn) {
        var x = Ur;
        (Yn = !1), (Ur = null);
      } else throw Error(a(198));
      $r || (($r = !0), (cu = x));
    }
  }
  function en(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function Po(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function _o(e) {
    if (en(e) !== e) throw Error(a(188));
  }
  function Vc(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = en(e)), t === null)) throw Error(a(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var l = n.return;
      if (l === null) break;
      var u = l.alternate;
      if (u === null) {
        if (((r = l.return), r !== null)) {
          n = r;
          continue;
        }
        break;
      }
      if (l.child === u.child) {
        for (u = l.child; u; ) {
          if (u === n) return _o(l), e;
          if (u === r) return _o(l), t;
          u = u.sibling;
        }
        throw Error(a(188));
      }
      if (n.return !== r.return) (n = l), (r = u);
      else {
        for (var o = !1, c = l.child; c; ) {
          if (c === n) {
            (o = !0), (n = l), (r = u);
            break;
          }
          if (c === r) {
            (o = !0), (r = l), (n = u);
            break;
          }
          c = c.sibling;
        }
        if (!o) {
          for (c = u.child; c; ) {
            if (c === n) {
              (o = !0), (n = u), (r = l);
              break;
            }
            if (c === r) {
              (o = !0), (r = u), (n = l);
              break;
            }
            c = c.sibling;
          }
          if (!o) throw Error(a(189));
        }
      }
      if (n.alternate !== r) throw Error(a(190));
    }
    if (n.tag !== 3) throw Error(a(188));
    return n.stateNode.current === n ? e : t;
  }
  function Ro(e) {
    return (e = Vc(e)), e !== null ? Lo(e) : null;
  }
  function Lo(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = Lo(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var zo = s.unstable_scheduleCallback,
    To = s.unstable_cancelCallback,
    Qc = s.unstable_shouldYield,
    Kc = s.unstable_requestPaint,
    Ne = s.unstable_now,
    Yc = s.unstable_getCurrentPriorityLevel,
    fu = s.unstable_ImmediatePriority,
    jo = s.unstable_UserBlockingPriority,
    Ar = s.unstable_NormalPriority,
    Gc = s.unstable_LowPriority,
    Do = s.unstable_IdlePriority,
    Br = null,
    vt = null;
  function Xc(e) {
    if (vt && typeof vt.onCommitFiberRoot == "function")
      try {
        vt.onCommitFiberRoot(Br, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var st = Math.clz32 ? Math.clz32 : qc,
    Jc = Math.log,
    Zc = Math.LN2;
  function qc(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((Jc(e) / Zc) | 0)) | 0;
  }
  var Hr = 64,
    Wr = 4194304;
  function Gn(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function Vr(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
      l = e.suspendedLanes,
      u = e.pingedLanes,
      o = n & 268435455;
    if (o !== 0) {
      var c = o & ~l;
      c !== 0 ? (r = Gn(c)) : ((u &= o), u !== 0 && (r = Gn(u)));
    } else (o = n & ~l), o !== 0 ? (r = Gn(o)) : u !== 0 && (r = Gn(u));
    if (r === 0) return 0;
    if (
      t !== 0 &&
      t !== r &&
      !(t & l) &&
      ((l = r & -r), (u = t & -t), l >= u || (l === 16 && (u & 4194240) !== 0))
    )
      return t;
    if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= r; 0 < t; )
        (n = 31 - st(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
    return r;
  }
  function bc(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function ef(e, t) {
    for (
      var n = e.suspendedLanes,
        r = e.pingedLanes,
        l = e.expirationTimes,
        u = e.pendingLanes;
      0 < u;

    ) {
      var o = 31 - st(u),
        c = 1 << o,
        d = l[o];
      d === -1
        ? (!(c & n) || c & r) && (l[o] = bc(c, t))
        : d <= t && (e.expiredLanes |= c),
        (u &= ~c);
    }
  }
  function du(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function Io() {
    var e = Hr;
    return (Hr <<= 1), !(Hr & 4194240) && (Hr = 64), e;
  }
  function pu(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Xn(e, t, n) {
    (e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - st(t)),
      (e[t] = n);
  }
  function tf(e, t) {
    var n = e.pendingLanes & ~t;
    (e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements);
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - st(n),
        u = 1 << l;
      (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~u);
    }
  }
  function mu(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var r = 31 - st(n),
        l = 1 << r;
      (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
    }
  }
  var fe = 0;
  function Oo(e) {
    return (
      (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
    );
  }
  var Fo,
    hu,
    Mo,
    Uo,
    $o,
    yu = !1,
    Qr = [],
    It = null,
    Ot = null,
    Ft = null,
    Jn = new Map(),
    Zn = new Map(),
    Mt = [],
    nf =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " "
      );
  function Ao(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        It = null;
        break;
      case "dragenter":
      case "dragleave":
        Ot = null;
        break;
      case "mouseover":
      case "mouseout":
        Ft = null;
        break;
      case "pointerover":
      case "pointerout":
        Jn.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Zn.delete(t.pointerId);
    }
  }
  function qn(e, t, n, r, l, u) {
    return e === null || e.nativeEvent !== u
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: u,
          targetContainers: [l],
        }),
        t !== null && ((t = dr(t)), t !== null && hu(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        l !== null && t.indexOf(l) === -1 && t.push(l),
        e);
  }
  function rf(e, t, n, r, l) {
    switch (t) {
      case "focusin":
        return (It = qn(It, e, t, n, r, l)), !0;
      case "dragenter":
        return (Ot = qn(Ot, e, t, n, r, l)), !0;
      case "mouseover":
        return (Ft = qn(Ft, e, t, n, r, l)), !0;
      case "pointerover":
        var u = l.pointerId;
        return Jn.set(u, qn(Jn.get(u) || null, e, t, n, r, l)), !0;
      case "gotpointercapture":
        return (
          (u = l.pointerId), Zn.set(u, qn(Zn.get(u) || null, e, t, n, r, l)), !0
        );
    }
    return !1;
  }
  function Bo(e) {
    var t = tn(e.target);
    if (t !== null) {
      var n = en(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = Po(n)), t !== null)) {
            (e.blockedOn = t),
              $o(e.priority, function () {
                Mo(n);
              });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Kr(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = gu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        (uu = r), n.target.dispatchEvent(r), (uu = null);
      } else return (t = dr(n)), t !== null && hu(t), (e.blockedOn = n), !1;
      t.shift();
    }
    return !0;
  }
  function Ho(e, t, n) {
    Kr(e) && n.delete(t);
  }
  function lf() {
    (yu = !1),
      It !== null && Kr(It) && (It = null),
      Ot !== null && Kr(Ot) && (Ot = null),
      Ft !== null && Kr(Ft) && (Ft = null),
      Jn.forEach(Ho),
      Zn.forEach(Ho);
  }
  function bn(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      yu ||
        ((yu = !0),
        s.unstable_scheduleCallback(s.unstable_NormalPriority, lf)));
  }
  function er(e) {
    function t(l) {
      return bn(l, e);
    }
    if (0 < Qr.length) {
      bn(Qr[0], e);
      for (var n = 1; n < Qr.length; n++) {
        var r = Qr[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      It !== null && bn(It, e),
        Ot !== null && bn(Ot, e),
        Ft !== null && bn(Ft, e),
        Jn.forEach(t),
        Zn.forEach(t),
        n = 0;
      n < Mt.length;
      n++
    )
      (r = Mt[n]), r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Mt.length && ((n = Mt[0]), n.blockedOn === null); )
      Bo(n), n.blockedOn === null && Mt.shift();
  }
  var gn = q.ReactCurrentBatchConfig,
    Yr = !0;
  function uf(e, t, n, r) {
    var l = fe,
      u = gn.transition;
    gn.transition = null;
    try {
      (fe = 1), vu(e, t, n, r);
    } finally {
      (fe = l), (gn.transition = u);
    }
  }
  function of(e, t, n, r) {
    var l = fe,
      u = gn.transition;
    gn.transition = null;
    try {
      (fe = 4), vu(e, t, n, r);
    } finally {
      (fe = l), (gn.transition = u);
    }
  }
  function vu(e, t, n, r) {
    if (Yr) {
      var l = gu(e, t, n, r);
      if (l === null) Ou(e, t, r, Gr, n), Ao(e, r);
      else if (rf(l, e, t, n, r)) r.stopPropagation();
      else if ((Ao(e, r), t & 4 && -1 < nf.indexOf(e))) {
        for (; l !== null; ) {
          var u = dr(l);
          if (
            (u !== null && Fo(u),
            (u = gu(e, t, n, r)),
            u === null && Ou(e, t, r, Gr, n),
            u === l)
          )
            break;
          l = u;
        }
        l !== null && r.stopPropagation();
      } else Ou(e, t, r, null, n);
    }
  }
  var Gr = null;
  function gu(e, t, n, r) {
    if (((Gr = null), (e = iu(r)), (e = tn(e)), e !== null))
      if (((t = en(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = Po(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return (Gr = e), null;
  }
  function Wo(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (Yc()) {
          case fu:
            return 1;
          case jo:
            return 4;
          case Ar:
          case Gc:
            return 16;
          case Do:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Ut = null,
    wu = null,
    Xr = null;
  function Vo() {
    if (Xr) return Xr;
    var e,
      t = wu,
      n = t.length,
      r,
      l = "value" in Ut ? Ut.value : Ut.textContent,
      u = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var o = n - e;
    for (r = 1; r <= o && t[n - r] === l[u - r]; r++);
    return (Xr = l.slice(e, 1 < r ? 1 - r : void 0));
  }
  function Jr(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Zr() {
    return !0;
  }
  function Qo() {
    return !1;
  }
  function qe(e) {
    function t(n, r, l, u, o) {
      (this._reactName = n),
        (this._targetInst = l),
        (this.type = r),
        (this.nativeEvent = u),
        (this.target = o),
        (this.currentTarget = null);
      for (var c in e)
        e.hasOwnProperty(c) && ((n = e[c]), (this[c] = n ? n(u) : u[c]));
      return (
        (this.isDefaultPrevented = (
          u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1
        )
          ? Zr
          : Qo),
        (this.isPropagationStopped = Qo),
        this
      );
    }
    return (
      V(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = Zr));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = Zr));
        },
        persist: function () {},
        isPersistent: Zr,
      }),
      t
    );
  }
  var wn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    xu = qe(wn),
    tr = V({}, wn, { view: 0, detail: 0 }),
    af = qe(tr),
    Su,
    ku,
    nr,
    qr = V({}, tr, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Cu,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== nr &&
              (nr && e.type === "mousemove"
                ? ((Su = e.screenX - nr.screenX), (ku = e.screenY - nr.screenY))
                : (ku = Su = 0),
              (nr = e)),
            Su);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : ku;
      },
    }),
    Ko = qe(qr),
    sf = V({}, qr, { dataTransfer: 0 }),
    cf = qe(sf),
    ff = V({}, tr, { relatedTarget: 0 }),
    Eu = qe(ff),
    df = V({}, wn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    pf = qe(df),
    mf = V({}, wn, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    hf = qe(mf),
    yf = V({}, wn, { data: 0 }),
    Yo = qe(yf),
    vf = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    gf = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
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
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    wf = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function xf(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = wf[e])
      ? !!t[e]
      : !1;
  }
  function Cu() {
    return xf;
  }
  var Sf = V({}, tr, {
      key: function (e) {
        if (e.key) {
          var t = vf[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Jr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
          ? gf[e.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Cu,
      charCode: function (e) {
        return e.type === "keypress" ? Jr(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Jr(e)
          : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
      },
    }),
    kf = qe(Sf),
    Ef = V({}, qr, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Go = qe(Ef),
    Cf = V({}, tr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Cu,
    }),
    Nf = qe(Cf),
    Pf = V({}, wn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    _f = qe(Pf),
    Rf = V({}, qr, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
          ? -e.wheelDeltaX
          : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
          ? -e.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Lf = qe(Rf),
    zf = [9, 13, 27, 32],
    Nu = C && "CompositionEvent" in window,
    rr = null;
  C && "documentMode" in document && (rr = document.documentMode);
  var Tf = C && "TextEvent" in window && !rr,
    Xo = C && (!Nu || (rr && 8 < rr && 11 >= rr)),
    Jo = " ",
    Zo = !1;
  function qo(e, t) {
    switch (e) {
      case "keyup":
        return zf.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function bo(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var xn = !1;
  function jf(e, t) {
    switch (e) {
      case "compositionend":
        return bo(t);
      case "keypress":
        return t.which !== 32 ? null : ((Zo = !0), Jo);
      case "textInput":
        return (e = t.data), e === Jo && Zo ? null : e;
      default:
        return null;
    }
  }
  function Df(e, t) {
    if (xn)
      return e === "compositionend" || (!Nu && qo(e, t))
        ? ((e = Vo()), (Xr = wu = Ut = null), (xn = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Xo && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var If = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function ea(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!If[e.type] : t === "textarea";
  }
  function ta(e, t, n, r) {
    So(r),
      (t = rl(t, "onChange")),
      0 < t.length &&
        ((n = new xu("onChange", "change", null, n, r)),
        e.push({ event: n, listeners: t }));
  }
  var lr = null,
    ur = null;
  function Of(e) {
    wa(e, 0);
  }
  function br(e) {
    var t = Nn(e);
    if (ao(t)) return e;
  }
  function Ff(e, t) {
    if (e === "change") return t;
  }
  var na = !1;
  if (C) {
    var Pu;
    if (C) {
      var _u = "oninput" in document;
      if (!_u) {
        var ra = document.createElement("div");
        ra.setAttribute("oninput", "return;"),
          (_u = typeof ra.oninput == "function");
      }
      Pu = _u;
    } else Pu = !1;
    na = Pu && (!document.documentMode || 9 < document.documentMode);
  }
  function la() {
    lr && (lr.detachEvent("onpropertychange", ua), (ur = lr = null));
  }
  function ua(e) {
    if (e.propertyName === "value" && br(ur)) {
      var t = [];
      ta(t, ur, e, iu(e)), No(Of, t);
    }
  }
  function Mf(e, t, n) {
    e === "focusin"
      ? (la(), (lr = t), (ur = n), lr.attachEvent("onpropertychange", ua))
      : e === "focusout" && la();
  }
  function Uf(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return br(ur);
  }
  function $f(e, t) {
    if (e === "click") return br(t);
  }
  function Af(e, t) {
    if (e === "input" || e === "change") return br(t);
  }
  function Bf(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var ct = typeof Object.is == "function" ? Object.is : Bf;
  function ir(e, t) {
    if (ct(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!w.call(t, l) || !ct(e[l], t[l])) return !1;
    }
    return !0;
  }
  function ia(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function oa(e, t) {
    var n = ia(e);
    e = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (((r = e + n.textContent.length), e <= t && r >= t))
          return { node: n, offset: t - e };
        e = r;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = ia(n);
    }
  }
  function aa(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? aa(e, t.parentNode)
        : "contains" in e
        ? e.contains(t)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function sa() {
    for (var e = window, t = Fr(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Fr(e.document);
    }
    return t;
  }
  function Ru(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  function Hf(e) {
    var t = sa(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (
      t !== n &&
      n &&
      n.ownerDocument &&
      aa(n.ownerDocument.documentElement, n)
    ) {
      if (r !== null && Ru(n)) {
        if (
          ((t = r.start),
          (e = r.end),
          e === void 0 && (e = t),
          "selectionStart" in n)
        )
          (n.selectionStart = t),
            (n.selectionEnd = Math.min(e, n.value.length));
        else if (
          ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var l = n.textContent.length,
            u = Math.min(r.start, l);
          (r = r.end === void 0 ? u : Math.min(r.end, l)),
            !e.extend && u > r && ((l = r), (r = u), (u = l)),
            (l = oa(n, u));
          var o = oa(n, r);
          l &&
            o &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== l.node ||
              e.anchorOffset !== l.offset ||
              e.focusNode !== o.node ||
              e.focusOffset !== o.offset) &&
            ((t = t.createRange()),
            t.setStart(l.node, l.offset),
            e.removeAllRanges(),
            u > r
              ? (e.addRange(t), e.extend(o.node, o.offset))
              : (t.setEnd(o.node, o.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; (e = e.parentNode); )
        e.nodeType === 1 &&
          t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
        (e = t[n]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top);
    }
  }
  var Wf = C && "documentMode" in document && 11 >= document.documentMode,
    Sn = null,
    Lu = null,
    or = null,
    zu = !1;
  function ca(e, t, n) {
    var r =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    zu ||
      Sn == null ||
      Sn !== Fr(r) ||
      ((r = Sn),
      "selectionStart" in r && Ru(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = (
            (r.ownerDocument && r.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (or && ir(or, r)) ||
        ((or = r),
        (r = rl(Lu, "onSelect")),
        0 < r.length &&
          ((t = new xu("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = Sn))));
  }
  function el(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var kn = {
      animationend: el("Animation", "AnimationEnd"),
      animationiteration: el("Animation", "AnimationIteration"),
      animationstart: el("Animation", "AnimationStart"),
      transitionend: el("Transition", "TransitionEnd"),
    },
    Tu = {},
    fa = {};
  C &&
    ((fa = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete kn.animationend.animation,
      delete kn.animationiteration.animation,
      delete kn.animationstart.animation),
    "TransitionEvent" in window || delete kn.transitionend.transition);
  function tl(e) {
    if (Tu[e]) return Tu[e];
    if (!kn[e]) return e;
    var t = kn[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in fa) return (Tu[e] = t[n]);
    return e;
  }
  var da = tl("animationend"),
    pa = tl("animationiteration"),
    ma = tl("animationstart"),
    ha = tl("transitionend"),
    ya = new Map(),
    va =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  function $t(e, t) {
    ya.set(e, t), h(t, [e]);
  }
  for (var ju = 0; ju < va.length; ju++) {
    var Du = va[ju],
      Vf = Du.toLowerCase(),
      Qf = Du[0].toUpperCase() + Du.slice(1);
    $t(Vf, "on" + Qf);
  }
  $t(da, "onAnimationEnd"),
    $t(pa, "onAnimationIteration"),
    $t(ma, "onAnimationStart"),
    $t("dblclick", "onDoubleClick"),
    $t("focusin", "onFocus"),
    $t("focusout", "onBlur"),
    $t(ha, "onTransitionEnd"),
    k("onMouseEnter", ["mouseout", "mouseover"]),
    k("onMouseLeave", ["mouseout", "mouseover"]),
    k("onPointerEnter", ["pointerout", "pointerover"]),
    k("onPointerLeave", ["pointerout", "pointerover"]),
    h(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    h(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    h("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    h(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    h(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    h(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var ar =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    Kf = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(ar)
    );
  function ga(e, t, n) {
    var r = e.type || "unknown-event";
    (e.currentTarget = n), Wc(r, t, void 0, e), (e.currentTarget = null);
  }
  function wa(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        l = r.event;
      r = r.listeners;
      e: {
        var u = void 0;
        if (t)
          for (var o = r.length - 1; 0 <= o; o--) {
            var c = r[o],
              d = c.instance,
              x = c.currentTarget;
            if (((c = c.listener), d !== u && l.isPropagationStopped()))
              break e;
            ga(l, c, x), (u = d);
          }
        else
          for (o = 0; o < r.length; o++) {
            if (
              ((c = r[o]),
              (d = c.instance),
              (x = c.currentTarget),
              (c = c.listener),
              d !== u && l.isPropagationStopped())
            )
              break e;
            ga(l, c, x), (u = d);
          }
      }
    }
    if ($r) throw ((e = cu), ($r = !1), (cu = null), e);
  }
  function me(e, t) {
    var n = t[Bu];
    n === void 0 && (n = t[Bu] = new Set());
    var r = e + "__bubble";
    n.has(r) || (xa(t, e, 2, !1), n.add(r));
  }
  function Iu(e, t, n) {
    var r = 0;
    t && (r |= 4), xa(n, e, r, t);
  }
  var nl = "_reactListening" + Math.random().toString(36).slice(2);
  function sr(e) {
    if (!e[nl]) {
      (e[nl] = !0),
        p.forEach(function (n) {
          n !== "selectionchange" && (Kf.has(n) || Iu(n, !1, e), Iu(n, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[nl] || ((t[nl] = !0), Iu("selectionchange", !1, t));
    }
  }
  function xa(e, t, n, r) {
    switch (Wo(t)) {
      case 1:
        var l = uf;
        break;
      case 4:
        l = of;
        break;
      default:
        l = vu;
    }
    (n = l.bind(null, t, n, e)),
      (l = void 0),
      !su ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (l = !0),
      r
        ? l !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: l })
          : e.addEventListener(t, n, !0)
        : l !== void 0
        ? e.addEventListener(t, n, { passive: l })
        : e.addEventListener(t, n, !1);
  }
  function Ou(e, t, n, r, l) {
    var u = r;
    if (!(t & 1) && !(t & 2) && r !== null)
      e: for (;;) {
        if (r === null) return;
        var o = r.tag;
        if (o === 3 || o === 4) {
          var c = r.stateNode.containerInfo;
          if (c === l || (c.nodeType === 8 && c.parentNode === l)) break;
          if (o === 4)
            for (o = r.return; o !== null; ) {
              var d = o.tag;
              if (
                (d === 3 || d === 4) &&
                ((d = o.stateNode.containerInfo),
                d === l || (d.nodeType === 8 && d.parentNode === l))
              )
                return;
              o = o.return;
            }
          for (; c !== null; ) {
            if (((o = tn(c)), o === null)) return;
            if (((d = o.tag), d === 5 || d === 6)) {
              r = u = o;
              continue e;
            }
            c = c.parentNode;
          }
        }
        r = r.return;
      }
    No(function () {
      var x = u,
        R = iu(n),
        L = [];
      e: {
        var P = ya.get(e);
        if (P !== void 0) {
          var A = xu,
            Q = e;
          switch (e) {
            case "keypress":
              if (Jr(n) === 0) break e;
            case "keydown":
            case "keyup":
              A = kf;
              break;
            case "focusin":
              (Q = "focus"), (A = Eu);
              break;
            case "focusout":
              (Q = "blur"), (A = Eu);
              break;
            case "beforeblur":
            case "afterblur":
              A = Eu;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              A = Ko;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              A = cf;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              A = Nf;
              break;
            case da:
            case pa:
            case ma:
              A = pf;
              break;
            case ha:
              A = _f;
              break;
            case "scroll":
              A = af;
              break;
            case "wheel":
              A = Lf;
              break;
            case "copy":
            case "cut":
            case "paste":
              A = hf;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              A = Go;
          }
          var K = (t & 4) !== 0,
            Pe = !K && e === "scroll",
            v = K ? (P !== null ? P + "Capture" : null) : P;
          K = [];
          for (var m = x, g; m !== null; ) {
            g = m;
            var T = g.stateNode;
            if (
              (g.tag === 5 &&
                T !== null &&
                ((g = T),
                v !== null &&
                  ((T = Qn(m, v)), T != null && K.push(cr(m, T, g)))),
              Pe)
            )
              break;
            m = m.return;
          }
          0 < K.length &&
            ((P = new A(P, Q, null, n, R)), L.push({ event: P, listeners: K }));
        }
      }
      if (!(t & 7)) {
        e: {
          if (
            ((P = e === "mouseover" || e === "pointerover"),
            (A = e === "mouseout" || e === "pointerout"),
            P &&
              n !== uu &&
              (Q = n.relatedTarget || n.fromElement) &&
              (tn(Q) || Q[Ct]))
          )
            break e;
          if (
            (A || P) &&
            ((P =
              R.window === R
                ? R
                : (P = R.ownerDocument)
                ? P.defaultView || P.parentWindow
                : window),
            A
              ? ((Q = n.relatedTarget || n.toElement),
                (A = x),
                (Q = Q ? tn(Q) : null),
                Q !== null &&
                  ((Pe = en(Q)), Q !== Pe || (Q.tag !== 5 && Q.tag !== 6)) &&
                  (Q = null))
              : ((A = null), (Q = x)),
            A !== Q)
          ) {
            if (
              ((K = Ko),
              (T = "onMouseLeave"),
              (v = "onMouseEnter"),
              (m = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((K = Go),
                (T = "onPointerLeave"),
                (v = "onPointerEnter"),
                (m = "pointer")),
              (Pe = A == null ? P : Nn(A)),
              (g = Q == null ? P : Nn(Q)),
              (P = new K(T, m + "leave", A, n, R)),
              (P.target = Pe),
              (P.relatedTarget = g),
              (T = null),
              tn(R) === x &&
                ((K = new K(v, m + "enter", Q, n, R)),
                (K.target = g),
                (K.relatedTarget = Pe),
                (T = K)),
              (Pe = T),
              A && Q)
            )
              t: {
                for (K = A, v = Q, m = 0, g = K; g; g = En(g)) m++;
                for (g = 0, T = v; T; T = En(T)) g++;
                for (; 0 < m - g; ) (K = En(K)), m--;
                for (; 0 < g - m; ) (v = En(v)), g--;
                for (; m--; ) {
                  if (K === v || (v !== null && K === v.alternate)) break t;
                  (K = En(K)), (v = En(v));
                }
                K = null;
              }
            else K = null;
            A !== null && Sa(L, P, A, K, !1),
              Q !== null && Pe !== null && Sa(L, Pe, Q, K, !0);
          }
        }
        e: {
          if (
            ((P = x ? Nn(x) : window),
            (A = P.nodeName && P.nodeName.toLowerCase()),
            A === "select" || (A === "input" && P.type === "file"))
          )
            var Y = Ff;
          else if (ea(P))
            if (na) Y = Af;
            else {
              Y = Uf;
              var G = Mf;
            }
          else
            (A = P.nodeName) &&
              A.toLowerCase() === "input" &&
              (P.type === "checkbox" || P.type === "radio") &&
              (Y = $f);
          if (Y && (Y = Y(e, x))) {
            ta(L, Y, n, R);
            break e;
          }
          G && G(e, P, x),
            e === "focusout" &&
              (G = P._wrapperState) &&
              G.controlled &&
              P.type === "number" &&
              eu(P, "number", P.value);
        }
        switch (((G = x ? Nn(x) : window), e)) {
          case "focusin":
            (ea(G) || G.contentEditable === "true") &&
              ((Sn = G), (Lu = x), (or = null));
            break;
          case "focusout":
            or = Lu = Sn = null;
            break;
          case "mousedown":
            zu = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (zu = !1), ca(L, n, R);
            break;
          case "selectionchange":
            if (Wf) break;
          case "keydown":
          case "keyup":
            ca(L, n, R);
        }
        var X;
        if (Nu)
          e: {
            switch (e) {
              case "compositionstart":
                var Z = "onCompositionStart";
                break e;
              case "compositionend":
                Z = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Z = "onCompositionUpdate";
                break e;
            }
            Z = void 0;
          }
        else
          xn
            ? qo(e, n) && (Z = "onCompositionEnd")
            : e === "keydown" &&
              n.keyCode === 229 &&
              (Z = "onCompositionStart");
        Z &&
          (Xo &&
            n.locale !== "ko" &&
            (xn || Z !== "onCompositionStart"
              ? Z === "onCompositionEnd" && xn && (X = Vo())
              : ((Ut = R),
                (wu = "value" in Ut ? Ut.value : Ut.textContent),
                (xn = !0))),
          (G = rl(x, Z)),
          0 < G.length &&
            ((Z = new Yo(Z, e, null, n, R)),
            L.push({ event: Z, listeners: G }),
            X ? (Z.data = X) : ((X = bo(n)), X !== null && (Z.data = X)))),
          (X = Tf ? jf(e, n) : Df(e, n)) &&
            ((x = rl(x, "onBeforeInput")),
            0 < x.length &&
              ((R = new Yo("onBeforeInput", "beforeinput", null, n, R)),
              L.push({ event: R, listeners: x }),
              (R.data = X)));
      }
      wa(L, t);
    });
  }
  function cr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function rl(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var l = e,
        u = l.stateNode;
      l.tag === 5 &&
        u !== null &&
        ((l = u),
        (u = Qn(e, n)),
        u != null && r.unshift(cr(e, u, l)),
        (u = Qn(e, t)),
        u != null && r.push(cr(e, u, l))),
        (e = e.return);
    }
    return r;
  }
  function En(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Sa(e, t, n, r, l) {
    for (var u = t._reactName, o = []; n !== null && n !== r; ) {
      var c = n,
        d = c.alternate,
        x = c.stateNode;
      if (d !== null && d === r) break;
      c.tag === 5 &&
        x !== null &&
        ((c = x),
        l
          ? ((d = Qn(n, u)), d != null && o.unshift(cr(n, d, c)))
          : l || ((d = Qn(n, u)), d != null && o.push(cr(n, d, c)))),
        (n = n.return);
    }
    o.length !== 0 && e.push({ event: t, listeners: o });
  }
  var Yf = /\r\n?/g,
    Gf = /\u0000|\uFFFD/g;
  function ka(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        Yf,
        `
`
      )
      .replace(Gf, "");
  }
  function ll(e, t, n) {
    if (((t = ka(t)), ka(e) !== t && n)) throw Error(a(425));
  }
  function ul() {}
  var Fu = null,
    Mu = null;
  function Uu(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var $u = typeof setTimeout == "function" ? setTimeout : void 0,
    Xf = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Ea = typeof Promise == "function" ? Promise : void 0,
    Jf =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Ea < "u"
        ? function (e) {
            return Ea.resolve(null).then(e).catch(Zf);
          }
        : $u;
  function Zf(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Au(e, t) {
    var n = t,
      r = 0;
    do {
      var l = n.nextSibling;
      if ((e.removeChild(n), l && l.nodeType === 8))
        if (((n = l.data), n === "/$")) {
          if (r === 0) {
            e.removeChild(l), er(t);
            return;
          }
          r--;
        } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
      n = l;
    } while (n);
    er(t);
  }
  function At(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function Ca(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0) return e;
          t--;
        } else n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var Cn = Math.random().toString(36).slice(2),
    gt = "__reactFiber$" + Cn,
    fr = "__reactProps$" + Cn,
    Ct = "__reactContainer$" + Cn,
    Bu = "__reactEvents$" + Cn,
    qf = "__reactListeners$" + Cn,
    bf = "__reactHandles$" + Cn;
  function tn(e) {
    var t = e[gt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[Ct] || n[gt])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = Ca(e); e !== null; ) {
            if ((n = e[gt])) return n;
            e = Ca(e);
          }
        return t;
      }
      (e = n), (n = e.parentNode);
    }
    return null;
  }
  function dr(e) {
    return (
      (e = e[gt] || e[Ct]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function Nn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(a(33));
  }
  function il(e) {
    return e[fr] || null;
  }
  var Hu = [],
    Pn = -1;
  function Bt(e) {
    return { current: e };
  }
  function he(e) {
    0 > Pn || ((e.current = Hu[Pn]), (Hu[Pn] = null), Pn--);
  }
  function pe(e, t) {
    Pn++, (Hu[Pn] = e.current), (e.current = t);
  }
  var Ht = {},
    Fe = Bt(Ht),
    We = Bt(!1),
    nn = Ht;
  function _n(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Ht;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
      return r.__reactInternalMemoizedMaskedChildContext;
    var l = {},
      u;
    for (u in n) l[u] = t[u];
    return (
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = l)),
      l
    );
  }
  function Ve(e) {
    return (e = e.childContextTypes), e != null;
  }
  function ol() {
    he(We), he(Fe);
  }
  function Na(e, t, n) {
    if (Fe.current !== Ht) throw Error(a(168));
    pe(Fe, t), pe(We, n);
  }
  function Pa(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
      return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(a(108, de(e) || "Unknown", l));
    return V({}, n, r);
  }
  function al(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        Ht),
      (nn = Fe.current),
      pe(Fe, e),
      pe(We, We.current),
      !0
    );
  }
  function _a(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(a(169));
    n
      ? ((e = Pa(e, t, nn)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        he(We),
        he(Fe),
        pe(Fe, e))
      : he(We),
      pe(We, n);
  }
  var Nt = null,
    sl = !1,
    Wu = !1;
  function Ra(e) {
    Nt === null ? (Nt = [e]) : Nt.push(e);
  }
  function ed(e) {
    (sl = !0), Ra(e);
  }
  function Wt() {
    if (!Wu && Nt !== null) {
      Wu = !0;
      var e = 0,
        t = fe;
      try {
        var n = Nt;
        for (fe = 1; e < n.length; e++) {
          var r = n[e];
          do r = r(!0);
          while (r !== null);
        }
        (Nt = null), (sl = !1);
      } catch (l) {
        throw (Nt !== null && (Nt = Nt.slice(e + 1)), zo(fu, Wt), l);
      } finally {
        (fe = t), (Wu = !1);
      }
    }
    return null;
  }
  var Rn = [],
    Ln = 0,
    cl = null,
    fl = 0,
    rt = [],
    lt = 0,
    rn = null,
    Pt = 1,
    _t = "";
  function ln(e, t) {
    (Rn[Ln++] = fl), (Rn[Ln++] = cl), (cl = e), (fl = t);
  }
  function La(e, t, n) {
    (rt[lt++] = Pt), (rt[lt++] = _t), (rt[lt++] = rn), (rn = e);
    var r = Pt;
    e = _t;
    var l = 32 - st(r) - 1;
    (r &= ~(1 << l)), (n += 1);
    var u = 32 - st(t) + l;
    if (30 < u) {
      var o = l - (l % 5);
      (u = (r & ((1 << o) - 1)).toString(32)),
        (r >>= o),
        (l -= o),
        (Pt = (1 << (32 - st(t) + l)) | (n << l) | r),
        (_t = u + e);
    } else (Pt = (1 << u) | (n << l) | r), (_t = e);
  }
  function Vu(e) {
    e.return !== null && (ln(e, 1), La(e, 1, 0));
  }
  function Qu(e) {
    for (; e === cl; )
      (cl = Rn[--Ln]), (Rn[Ln] = null), (fl = Rn[--Ln]), (Rn[Ln] = null);
    for (; e === rn; )
      (rn = rt[--lt]),
        (rt[lt] = null),
        (_t = rt[--lt]),
        (rt[lt] = null),
        (Pt = rt[--lt]),
        (rt[lt] = null);
  }
  var be = null,
    et = null,
    ve = !1,
    ft = null;
  function za(e, t) {
    var n = at(5, null, null, 0);
    (n.elementType = "DELETED"),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
  }
  function Ta(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t =
            t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (be = e), (et = At(t.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (be = e), (et = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = rn !== null ? { id: Pt, overflow: _t } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824,
              }),
              (n = at(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (be = e),
              (et = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function Ku(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Yu(e) {
    if (ve) {
      var t = et;
      if (t) {
        var n = t;
        if (!Ta(e, t)) {
          if (Ku(e)) throw Error(a(418));
          t = At(n.nextSibling);
          var r = be;
          t && Ta(e, t)
            ? za(r, n)
            : ((e.flags = (e.flags & -4097) | 2), (ve = !1), (be = e));
        }
      } else {
        if (Ku(e)) throw Error(a(418));
        (e.flags = (e.flags & -4097) | 2), (ve = !1), (be = e);
      }
    }
  }
  function ja(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return;
    be = e;
  }
  function dl(e) {
    if (e !== be) return !1;
    if (!ve) return ja(e), (ve = !0), !1;
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== "head" && t !== "body" && !Uu(e.type, e.memoizedProps))),
      t && (t = et))
    ) {
      if (Ku(e)) throw (Da(), Error(a(418)));
      for (; t; ) za(e, t), (t = At(t.nextSibling));
    }
    if ((ja(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(a(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                et = At(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        et = null;
      }
    } else et = be ? At(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Da() {
    for (var e = et; e; ) e = At(e.nextSibling);
  }
  function zn() {
    (et = be = null), (ve = !1);
  }
  function Gu(e) {
    ft === null ? (ft = [e]) : ft.push(e);
  }
  var td = q.ReactCurrentBatchConfig;
  function pr(e, t, n) {
    if (
      ((e = n.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (n._owner) {
        if (((n = n._owner), n)) {
          if (n.tag !== 1) throw Error(a(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(a(147, e));
        var l = r,
          u = "" + e;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == "function" &&
          t.ref._stringRef === u
          ? t.ref
          : ((t = function (o) {
              var c = l.refs;
              o === null ? delete c[u] : (c[u] = o);
            }),
            (t._stringRef = u),
            t);
      }
      if (typeof e != "string") throw Error(a(284));
      if (!n._owner) throw Error(a(290, e));
    }
    return e;
  }
  function pl(e, t) {
    throw (
      ((e = Object.prototype.toString.call(t)),
      Error(
        a(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e
        )
      ))
    );
  }
  function Ia(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Oa(e) {
    function t(v, m) {
      if (e) {
        var g = v.deletions;
        g === null ? ((v.deletions = [m]), (v.flags |= 16)) : g.push(m);
      }
    }
    function n(v, m) {
      if (!e) return null;
      for (; m !== null; ) t(v, m), (m = m.sibling);
      return null;
    }
    function r(v, m) {
      for (v = new Map(); m !== null; )
        m.key !== null ? v.set(m.key, m) : v.set(m.index, m), (m = m.sibling);
      return v;
    }
    function l(v, m) {
      return (v = Zt(v, m)), (v.index = 0), (v.sibling = null), v;
    }
    function u(v, m, g) {
      return (
        (v.index = g),
        e
          ? ((g = v.alternate),
            g !== null
              ? ((g = g.index), g < m ? ((v.flags |= 2), m) : g)
              : ((v.flags |= 2), m))
          : ((v.flags |= 1048576), m)
      );
    }
    function o(v) {
      return e && v.alternate === null && (v.flags |= 2), v;
    }
    function c(v, m, g, T) {
      return m === null || m.tag !== 6
        ? ((m = $i(g, v.mode, T)), (m.return = v), m)
        : ((m = l(m, g)), (m.return = v), m);
    }
    function d(v, m, g, T) {
      var Y = g.type;
      return Y === ae
        ? R(v, m, g.props.children, T, g.key)
        : m !== null &&
          (m.elementType === Y ||
            (typeof Y == "object" &&
              Y !== null &&
              Y.$$typeof === He &&
              Ia(Y) === m.type))
        ? ((T = l(m, g.props)), (T.ref = pr(v, m, g)), (T.return = v), T)
        : ((T = Ml(g.type, g.key, g.props, null, v.mode, T)),
          (T.ref = pr(v, m, g)),
          (T.return = v),
          T);
    }
    function x(v, m, g, T) {
      return m === null ||
        m.tag !== 4 ||
        m.stateNode.containerInfo !== g.containerInfo ||
        m.stateNode.implementation !== g.implementation
        ? ((m = Ai(g, v.mode, T)), (m.return = v), m)
        : ((m = l(m, g.children || [])), (m.return = v), m);
    }
    function R(v, m, g, T, Y) {
      return m === null || m.tag !== 7
        ? ((m = pn(g, v.mode, T, Y)), (m.return = v), m)
        : ((m = l(m, g)), (m.return = v), m);
    }
    function L(v, m, g) {
      if ((typeof m == "string" && m !== "") || typeof m == "number")
        return (m = $i("" + m, v.mode, g)), (m.return = v), m;
      if (typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case ne:
            return (
              (g = Ml(m.type, m.key, m.props, null, v.mode, g)),
              (g.ref = pr(v, null, m)),
              (g.return = v),
              g
            );
          case oe:
            return (m = Ai(m, v.mode, g)), (m.return = v), m;
          case He:
            var T = m._init;
            return L(v, T(m._payload), g);
        }
        if (Hn(m) || J(m))
          return (m = pn(m, v.mode, g, null)), (m.return = v), m;
        pl(v, m);
      }
      return null;
    }
    function P(v, m, g, T) {
      var Y = m !== null ? m.key : null;
      if ((typeof g == "string" && g !== "") || typeof g == "number")
        return Y !== null ? null : c(v, m, "" + g, T);
      if (typeof g == "object" && g !== null) {
        switch (g.$$typeof) {
          case ne:
            return g.key === Y ? d(v, m, g, T) : null;
          case oe:
            return g.key === Y ? x(v, m, g, T) : null;
          case He:
            return (Y = g._init), P(v, m, Y(g._payload), T);
        }
        if (Hn(g) || J(g)) return Y !== null ? null : R(v, m, g, T, null);
        pl(v, g);
      }
      return null;
    }
    function A(v, m, g, T, Y) {
      if ((typeof T == "string" && T !== "") || typeof T == "number")
        return (v = v.get(g) || null), c(m, v, "" + T, Y);
      if (typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case ne:
            return (
              (v = v.get(T.key === null ? g : T.key) || null), d(m, v, T, Y)
            );
          case oe:
            return (
              (v = v.get(T.key === null ? g : T.key) || null), x(m, v, T, Y)
            );
          case He:
            var G = T._init;
            return A(v, m, g, G(T._payload), Y);
        }
        if (Hn(T) || J(T)) return (v = v.get(g) || null), R(m, v, T, Y, null);
        pl(m, T);
      }
      return null;
    }
    function Q(v, m, g, T) {
      for (
        var Y = null, G = null, X = m, Z = (m = 0), je = null;
        X !== null && Z < g.length;
        Z++
      ) {
        X.index > Z ? ((je = X), (X = null)) : (je = X.sibling);
        var ie = P(v, X, g[Z], T);
        if (ie === null) {
          X === null && (X = je);
          break;
        }
        e && X && ie.alternate === null && t(v, X),
          (m = u(ie, m, Z)),
          G === null ? (Y = ie) : (G.sibling = ie),
          (G = ie),
          (X = je);
      }
      if (Z === g.length) return n(v, X), ve && ln(v, Z), Y;
      if (X === null) {
        for (; Z < g.length; Z++)
          (X = L(v, g[Z], T)),
            X !== null &&
              ((m = u(X, m, Z)),
              G === null ? (Y = X) : (G.sibling = X),
              (G = X));
        return ve && ln(v, Z), Y;
      }
      for (X = r(v, X); Z < g.length; Z++)
        (je = A(X, v, Z, g[Z], T)),
          je !== null &&
            (e &&
              je.alternate !== null &&
              X.delete(je.key === null ? Z : je.key),
            (m = u(je, m, Z)),
            G === null ? (Y = je) : (G.sibling = je),
            (G = je));
      return (
        e &&
          X.forEach(function (qt) {
            return t(v, qt);
          }),
        ve && ln(v, Z),
        Y
      );
    }
    function K(v, m, g, T) {
      var Y = J(g);
      if (typeof Y != "function") throw Error(a(150));
      if (((g = Y.call(g)), g == null)) throw Error(a(151));
      for (
        var G = (Y = null), X = m, Z = (m = 0), je = null, ie = g.next();
        X !== null && !ie.done;
        Z++, ie = g.next()
      ) {
        X.index > Z ? ((je = X), (X = null)) : (je = X.sibling);
        var qt = P(v, X, ie.value, T);
        if (qt === null) {
          X === null && (X = je);
          break;
        }
        e && X && qt.alternate === null && t(v, X),
          (m = u(qt, m, Z)),
          G === null ? (Y = qt) : (G.sibling = qt),
          (G = qt),
          (X = je);
      }
      if (ie.done) return n(v, X), ve && ln(v, Z), Y;
      if (X === null) {
        for (; !ie.done; Z++, ie = g.next())
          (ie = L(v, ie.value, T)),
            ie !== null &&
              ((m = u(ie, m, Z)),
              G === null ? (Y = ie) : (G.sibling = ie),
              (G = ie));
        return ve && ln(v, Z), Y;
      }
      for (X = r(v, X); !ie.done; Z++, ie = g.next())
        (ie = A(X, v, Z, ie.value, T)),
          ie !== null &&
            (e &&
              ie.alternate !== null &&
              X.delete(ie.key === null ? Z : ie.key),
            (m = u(ie, m, Z)),
            G === null ? (Y = ie) : (G.sibling = ie),
            (G = ie));
      return (
        e &&
          X.forEach(function (Dd) {
            return t(v, Dd);
          }),
        ve && ln(v, Z),
        Y
      );
    }
    function Pe(v, m, g, T) {
      if (
        (typeof g == "object" &&
          g !== null &&
          g.type === ae &&
          g.key === null &&
          (g = g.props.children),
        typeof g == "object" && g !== null)
      ) {
        switch (g.$$typeof) {
          case ne:
            e: {
              for (var Y = g.key, G = m; G !== null; ) {
                if (G.key === Y) {
                  if (((Y = g.type), Y === ae)) {
                    if (G.tag === 7) {
                      n(v, G.sibling),
                        (m = l(G, g.props.children)),
                        (m.return = v),
                        (v = m);
                      break e;
                    }
                  } else if (
                    G.elementType === Y ||
                    (typeof Y == "object" &&
                      Y !== null &&
                      Y.$$typeof === He &&
                      Ia(Y) === G.type)
                  ) {
                    n(v, G.sibling),
                      (m = l(G, g.props)),
                      (m.ref = pr(v, G, g)),
                      (m.return = v),
                      (v = m);
                    break e;
                  }
                  n(v, G);
                  break;
                } else t(v, G);
                G = G.sibling;
              }
              g.type === ae
                ? ((m = pn(g.props.children, v.mode, T, g.key)),
                  (m.return = v),
                  (v = m))
                : ((T = Ml(g.type, g.key, g.props, null, v.mode, T)),
                  (T.ref = pr(v, m, g)),
                  (T.return = v),
                  (v = T));
            }
            return o(v);
          case oe:
            e: {
              for (G = g.key; m !== null; ) {
                if (m.key === G)
                  if (
                    m.tag === 4 &&
                    m.stateNode.containerInfo === g.containerInfo &&
                    m.stateNode.implementation === g.implementation
                  ) {
                    n(v, m.sibling),
                      (m = l(m, g.children || [])),
                      (m.return = v),
                      (v = m);
                    break e;
                  } else {
                    n(v, m);
                    break;
                  }
                else t(v, m);
                m = m.sibling;
              }
              (m = Ai(g, v.mode, T)), (m.return = v), (v = m);
            }
            return o(v);
          case He:
            return (G = g._init), Pe(v, m, G(g._payload), T);
        }
        if (Hn(g)) return Q(v, m, g, T);
        if (J(g)) return K(v, m, g, T);
        pl(v, g);
      }
      return (typeof g == "string" && g !== "") || typeof g == "number"
        ? ((g = "" + g),
          m !== null && m.tag === 6
            ? (n(v, m.sibling), (m = l(m, g)), (m.return = v), (v = m))
            : (n(v, m), (m = $i(g, v.mode, T)), (m.return = v), (v = m)),
          o(v))
        : n(v, m);
    }
    return Pe;
  }
  var Tn = Oa(!0),
    Fa = Oa(!1),
    ml = Bt(null),
    hl = null,
    jn = null,
    Xu = null;
  function Ju() {
    Xu = jn = hl = null;
  }
  function Zu(e) {
    var t = ml.current;
    he(ml), (e._currentValue = t);
  }
  function qu(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
          : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function Dn(e, t) {
    (hl = e),
      (Xu = jn = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        (e.lanes & t && (Qe = !0), (e.firstContext = null));
  }
  function ut(e) {
    var t = e._currentValue;
    if (Xu !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), jn === null)) {
        if (hl === null) throw Error(a(308));
        (jn = e), (hl.dependencies = { lanes: 0, firstContext: e });
      } else jn = jn.next = e;
    return t;
  }
  var un = null;
  function bu(e) {
    un === null ? (un = [e]) : un.push(e);
  }
  function Ma(e, t, n, r) {
    var l = t.interleaved;
    return (
      l === null ? ((n.next = n), bu(t)) : ((n.next = l.next), (l.next = n)),
      (t.interleaved = n),
      Rt(e, r)
    );
  }
  function Rt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
      (e.childLanes |= t),
        (n = e.alternate),
        n !== null && (n.childLanes |= t),
        (n = e),
        (e = e.return);
    return n.tag === 3 ? n.stateNode : null;
  }
  var Vt = !1;
  function ei(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function Ua(e, t) {
    (e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        });
  }
  function Lt(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function Qt(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), re & 2)) {
      var l = r.pending;
      return (
        l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
        (r.pending = t),
        Rt(e, n)
      );
    }
    return (
      (l = r.interleaved),
      l === null ? ((t.next = t), bu(r)) : ((t.next = l.next), (l.next = t)),
      (r.interleaved = t),
      Rt(e, n)
    );
  }
  function yl(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
    ) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), mu(e, n);
    }
  }
  function $a(e, t) {
    var n = e.updateQueue,
      r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
      var l = null,
        u = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var o = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null,
          };
          u === null ? (l = u = o) : (u = u.next = o), (n = n.next);
        } while (n !== null);
        u === null ? (l = u = t) : (u = u.next = t);
      } else l = u = t;
      (n = {
        baseState: r.baseState,
        firstBaseUpdate: l,
        lastBaseUpdate: u,
        shared: r.shared,
        effects: r.effects,
      }),
        (e.updateQueue = n);
      return;
    }
    (e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t);
  }
  function vl(e, t, n, r) {
    var l = e.updateQueue;
    Vt = !1;
    var u = l.firstBaseUpdate,
      o = l.lastBaseUpdate,
      c = l.shared.pending;
    if (c !== null) {
      l.shared.pending = null;
      var d = c,
        x = d.next;
      (d.next = null), o === null ? (u = x) : (o.next = x), (o = d);
      var R = e.alternate;
      R !== null &&
        ((R = R.updateQueue),
        (c = R.lastBaseUpdate),
        c !== o &&
          (c === null ? (R.firstBaseUpdate = x) : (c.next = x),
          (R.lastBaseUpdate = d)));
    }
    if (u !== null) {
      var L = l.baseState;
      (o = 0), (R = x = d = null), (c = u);
      do {
        var P = c.lane,
          A = c.eventTime;
        if ((r & P) === P) {
          R !== null &&
            (R = R.next =
              {
                eventTime: A,
                lane: 0,
                tag: c.tag,
                payload: c.payload,
                callback: c.callback,
                next: null,
              });
          e: {
            var Q = e,
              K = c;
            switch (((P = t), (A = n), K.tag)) {
              case 1:
                if (((Q = K.payload), typeof Q == "function")) {
                  L = Q.call(A, L, P);
                  break e;
                }
                L = Q;
                break e;
              case 3:
                Q.flags = (Q.flags & -65537) | 128;
              case 0:
                if (
                  ((Q = K.payload),
                  (P = typeof Q == "function" ? Q.call(A, L, P) : Q),
                  P == null)
                )
                  break e;
                L = V({}, L, P);
                break e;
              case 2:
                Vt = !0;
            }
          }
          c.callback !== null &&
            c.lane !== 0 &&
            ((e.flags |= 64),
            (P = l.effects),
            P === null ? (l.effects = [c]) : P.push(c));
        } else
          (A = {
            eventTime: A,
            lane: P,
            tag: c.tag,
            payload: c.payload,
            callback: c.callback,
            next: null,
          }),
            R === null ? ((x = R = A), (d = L)) : (R = R.next = A),
            (o |= P);
        if (((c = c.next), c === null)) {
          if (((c = l.shared.pending), c === null)) break;
          (P = c),
            (c = P.next),
            (P.next = null),
            (l.lastBaseUpdate = P),
            (l.shared.pending = null);
        }
      } while (!0);
      if (
        (R === null && (d = L),
        (l.baseState = d),
        (l.firstBaseUpdate = x),
        (l.lastBaseUpdate = R),
        (t = l.shared.interleaved),
        t !== null)
      ) {
        l = t;
        do (o |= l.lane), (l = l.next);
        while (l !== t);
      } else u === null && (l.shared.lanes = 0);
      (sn |= o), (e.lanes = o), (e.memoizedState = L);
    }
  }
  function Aa(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var r = e[t],
          l = r.callback;
        if (l !== null) {
          if (((r.callback = null), (r = n), typeof l != "function"))
            throw Error(a(191, l));
          l.call(r);
        }
      }
  }
  var mr = {},
    wt = Bt(mr),
    hr = Bt(mr),
    yr = Bt(mr);
  function on(e) {
    if (e === mr) throw Error(a(174));
    return e;
  }
  function ti(e, t) {
    switch ((pe(yr, t), pe(hr, e), pe(wt, mr), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : nu(null, "");
        break;
      default:
        (e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = nu(t, e));
    }
    he(wt), pe(wt, t);
  }
  function In() {
    he(wt), he(hr), he(yr);
  }
  function Ba(e) {
    on(yr.current);
    var t = on(wt.current),
      n = nu(t, e.type);
    t !== n && (pe(hr, e), pe(wt, n));
  }
  function ni(e) {
    hr.current === e && (he(wt), he(hr));
  }
  var we = Bt(0);
  function gl(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (
          n !== null &&
          ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if (t.flags & 128) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  var ri = [];
  function li() {
    for (var e = 0; e < ri.length; e++)
      ri[e]._workInProgressVersionPrimary = null;
    ri.length = 0;
  }
  var wl = q.ReactCurrentDispatcher,
    ui = q.ReactCurrentBatchConfig,
    an = 0,
    xe = null,
    Re = null,
    ze = null,
    xl = !1,
    vr = !1,
    gr = 0,
    nd = 0;
  function Me() {
    throw Error(a(321));
  }
  function ii(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!ct(e[n], t[n])) return !1;
    return !0;
  }
  function oi(e, t, n, r, l, u) {
    if (
      ((an = u),
      (xe = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (wl.current = e === null || e.memoizedState === null ? id : od),
      (e = n(r, l)),
      vr)
    ) {
      u = 0;
      do {
        if (((vr = !1), (gr = 0), 25 <= u)) throw Error(a(301));
        (u += 1),
          (ze = Re = null),
          (t.updateQueue = null),
          (wl.current = ad),
          (e = n(r, l));
      } while (vr);
    }
    if (
      ((wl.current = El),
      (t = Re !== null && Re.next !== null),
      (an = 0),
      (ze = Re = xe = null),
      (xl = !1),
      t)
    )
      throw Error(a(300));
    return e;
  }
  function ai() {
    var e = gr !== 0;
    return (gr = 0), e;
  }
  function xt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return ze === null ? (xe.memoizedState = ze = e) : (ze = ze.next = e), ze;
  }
  function it() {
    if (Re === null) {
      var e = xe.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Re.next;
    var t = ze === null ? xe.memoizedState : ze.next;
    if (t !== null) (ze = t), (Re = e);
    else {
      if (e === null) throw Error(a(310));
      (Re = e),
        (e = {
          memoizedState: Re.memoizedState,
          baseState: Re.baseState,
          baseQueue: Re.baseQueue,
          queue: Re.queue,
          next: null,
        }),
        ze === null ? (xe.memoizedState = ze = e) : (ze = ze.next = e);
    }
    return ze;
  }
  function wr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function si(e) {
    var t = it(),
      n = t.queue;
    if (n === null) throw Error(a(311));
    n.lastRenderedReducer = e;
    var r = Re,
      l = r.baseQueue,
      u = n.pending;
    if (u !== null) {
      if (l !== null) {
        var o = l.next;
        (l.next = u.next), (u.next = o);
      }
      (r.baseQueue = l = u), (n.pending = null);
    }
    if (l !== null) {
      (u = l.next), (r = r.baseState);
      var c = (o = null),
        d = null,
        x = u;
      do {
        var R = x.lane;
        if ((an & R) === R)
          d !== null &&
            (d = d.next =
              {
                lane: 0,
                action: x.action,
                hasEagerState: x.hasEagerState,
                eagerState: x.eagerState,
                next: null,
              }),
            (r = x.hasEagerState ? x.eagerState : e(r, x.action));
        else {
          var L = {
            lane: R,
            action: x.action,
            hasEagerState: x.hasEagerState,
            eagerState: x.eagerState,
            next: null,
          };
          d === null ? ((c = d = L), (o = r)) : (d = d.next = L),
            (xe.lanes |= R),
            (sn |= R);
        }
        x = x.next;
      } while (x !== null && x !== u);
      d === null ? (o = r) : (d.next = c),
        ct(r, t.memoizedState) || (Qe = !0),
        (t.memoizedState = r),
        (t.baseState = o),
        (t.baseQueue = d),
        (n.lastRenderedState = r);
    }
    if (((e = n.interleaved), e !== null)) {
      l = e;
      do (u = l.lane), (xe.lanes |= u), (sn |= u), (l = l.next);
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function ci(e) {
    var t = it(),
      n = t.queue;
    if (n === null) throw Error(a(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
      l = n.pending,
      u = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var o = (l = l.next);
      do (u = e(u, o.action)), (o = o.next);
      while (o !== l);
      ct(u, t.memoizedState) || (Qe = !0),
        (t.memoizedState = u),
        t.baseQueue === null && (t.baseState = u),
        (n.lastRenderedState = u);
    }
    return [u, r];
  }
  function Ha() {}
  function Wa(e, t) {
    var n = xe,
      r = it(),
      l = t(),
      u = !ct(r.memoizedState, l);
    if (
      (u && ((r.memoizedState = l), (Qe = !0)),
      (r = r.queue),
      fi(Ka.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || u || (ze !== null && ze.memoizedState.tag & 1))
    ) {
      if (
        ((n.flags |= 2048),
        xr(9, Qa.bind(null, n, r, l, t), void 0, null),
        Te === null)
      )
        throw Error(a(349));
      an & 30 || Va(n, t, l);
    }
    return l;
  }
  function Va(e, t, n) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = xe.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (xe.updateQueue = t),
          (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
  }
  function Qa(e, t, n, r) {
    (t.value = n), (t.getSnapshot = r), Ya(t) && Ga(e);
  }
  function Ka(e, t, n) {
    return n(function () {
      Ya(t) && Ga(e);
    });
  }
  function Ya(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !ct(e, n);
    } catch {
      return !0;
    }
  }
  function Ga(e) {
    var t = Rt(e, 1);
    t !== null && ht(t, e, 1, -1);
  }
  function Xa(e) {
    var t = xt();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: wr,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = ud.bind(null, xe, e)),
      [t.memoizedState, e]
    );
  }
  function xr(e, t, n, r) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
      (t = xe.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (xe.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((n = t.lastEffect),
          n === null
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
      e
    );
  }
  function Ja() {
    return it().memoizedState;
  }
  function Sl(e, t, n, r) {
    var l = xt();
    (xe.flags |= e),
      (l.memoizedState = xr(1 | t, n, void 0, r === void 0 ? null : r));
  }
  function kl(e, t, n, r) {
    var l = it();
    r = r === void 0 ? null : r;
    var u = void 0;
    if (Re !== null) {
      var o = Re.memoizedState;
      if (((u = o.destroy), r !== null && ii(r, o.deps))) {
        l.memoizedState = xr(t, n, u, r);
        return;
      }
    }
    (xe.flags |= e), (l.memoizedState = xr(1 | t, n, u, r));
  }
  function Za(e, t) {
    return Sl(8390656, 8, e, t);
  }
  function fi(e, t) {
    return kl(2048, 8, e, t);
  }
  function qa(e, t) {
    return kl(4, 2, e, t);
  }
  function ba(e, t) {
    return kl(4, 4, e, t);
  }
  function es(e, t) {
    if (typeof t == "function")
      return (
        (e = e()),
        t(e),
        function () {
          t(null);
        }
      );
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function ts(e, t, n) {
    return (
      (n = n != null ? n.concat([e]) : null), kl(4, 4, es.bind(null, t, e), n)
    );
  }
  function di() {}
  function ns(e, t) {
    var n = it();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && ii(t, r[1])
      ? r[0]
      : ((n.memoizedState = [e, t]), e);
  }
  function rs(e, t) {
    var n = it();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && ii(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function ls(e, t, n) {
    return an & 21
      ? (ct(n, t) ||
          ((n = Io()), (xe.lanes |= n), (sn |= n), (e.baseState = !0)),
        t)
      : (e.baseState && ((e.baseState = !1), (Qe = !0)), (e.memoizedState = n));
  }
  function rd(e, t) {
    var n = fe;
    (fe = n !== 0 && 4 > n ? n : 4), e(!0);
    var r = ui.transition;
    ui.transition = {};
    try {
      e(!1), t();
    } finally {
      (fe = n), (ui.transition = r);
    }
  }
  function us() {
    return it().memoizedState;
  }
  function ld(e, t, n) {
    var r = Xt(e);
    if (
      ((n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      is(e))
    )
      os(t, n);
    else if (((n = Ma(e, t, n, r)), n !== null)) {
      var l = Be();
      ht(n, e, r, l), as(n, t, r);
    }
  }
  function ud(e, t, n) {
    var r = Xt(e),
      l = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (is(e)) os(t, l);
    else {
      var u = e.alternate;
      if (
        e.lanes === 0 &&
        (u === null || u.lanes === 0) &&
        ((u = t.lastRenderedReducer), u !== null)
      )
        try {
          var o = t.lastRenderedState,
            c = u(o, n);
          if (((l.hasEagerState = !0), (l.eagerState = c), ct(c, o))) {
            var d = t.interleaved;
            d === null
              ? ((l.next = l), bu(t))
              : ((l.next = d.next), (d.next = l)),
              (t.interleaved = l);
            return;
          }
        } catch {
        } finally {
        }
      (n = Ma(e, t, l, r)),
        n !== null && ((l = Be()), ht(n, e, r, l), as(n, t, r));
    }
  }
  function is(e) {
    var t = e.alternate;
    return e === xe || (t !== null && t === xe);
  }
  function os(e, t) {
    vr = xl = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t);
  }
  function as(e, t, n) {
    if (n & 4194240) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), mu(e, n);
    }
  }
  var El = {
      readContext: ut,
      useCallback: Me,
      useContext: Me,
      useEffect: Me,
      useImperativeHandle: Me,
      useInsertionEffect: Me,
      useLayoutEffect: Me,
      useMemo: Me,
      useReducer: Me,
      useRef: Me,
      useState: Me,
      useDebugValue: Me,
      useDeferredValue: Me,
      useTransition: Me,
      useMutableSource: Me,
      useSyncExternalStore: Me,
      useId: Me,
      unstable_isNewReconciler: !1,
    },
    id = {
      readContext: ut,
      useCallback: function (e, t) {
        return (xt().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: ut,
      useEffect: Za,
      useImperativeHandle: function (e, t, n) {
        return (
          (n = n != null ? n.concat([e]) : null),
          Sl(4194308, 4, es.bind(null, t, e), n)
        );
      },
      useLayoutEffect: function (e, t) {
        return Sl(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return Sl(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = xt();
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (n.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, n) {
        var r = xt();
        return (
          (t = n !== void 0 ? n(t) : t),
          (r.memoizedState = r.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (r.queue = e),
          (e = e.dispatch = ld.bind(null, xe, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = xt();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: Xa,
      useDebugValue: di,
      useDeferredValue: function (e) {
        return (xt().memoizedState = e);
      },
      useTransition: function () {
        var e = Xa(!1),
          t = e[0];
        return (e = rd.bind(null, e[1])), (xt().memoizedState = e), [t, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = xe,
          l = xt();
        if (ve) {
          if (n === void 0) throw Error(a(407));
          n = n();
        } else {
          if (((n = t()), Te === null)) throw Error(a(349));
          an & 30 || Va(r, t, n);
        }
        l.memoizedState = n;
        var u = { value: n, getSnapshot: t };
        return (
          (l.queue = u),
          Za(Ka.bind(null, r, u, e), [e]),
          (r.flags |= 2048),
          xr(9, Qa.bind(null, r, u, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = xt(),
          t = Te.identifierPrefix;
        if (ve) {
          var n = _t,
            r = Pt;
          (n = (r & ~(1 << (32 - st(r) - 1))).toString(32) + n),
            (t = ":" + t + "R" + n),
            (n = gr++),
            0 < n && (t += "H" + n.toString(32)),
            (t += ":");
        } else (n = nd++), (t = ":" + t + "r" + n.toString(32) + ":");
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    od = {
      readContext: ut,
      useCallback: ns,
      useContext: ut,
      useEffect: fi,
      useImperativeHandle: ts,
      useInsertionEffect: qa,
      useLayoutEffect: ba,
      useMemo: rs,
      useReducer: si,
      useRef: Ja,
      useState: function () {
        return si(wr);
      },
      useDebugValue: di,
      useDeferredValue: function (e) {
        var t = it();
        return ls(t, Re.memoizedState, e);
      },
      useTransition: function () {
        var e = si(wr)[0],
          t = it().memoizedState;
        return [e, t];
      },
      useMutableSource: Ha,
      useSyncExternalStore: Wa,
      useId: us,
      unstable_isNewReconciler: !1,
    },
    ad = {
      readContext: ut,
      useCallback: ns,
      useContext: ut,
      useEffect: fi,
      useImperativeHandle: ts,
      useInsertionEffect: qa,
      useLayoutEffect: ba,
      useMemo: rs,
      useReducer: ci,
      useRef: Ja,
      useState: function () {
        return ci(wr);
      },
      useDebugValue: di,
      useDeferredValue: function (e) {
        var t = it();
        return Re === null ? (t.memoizedState = e) : ls(t, Re.memoizedState, e);
      },
      useTransition: function () {
        var e = ci(wr)[0],
          t = it().memoizedState;
        return [e, t];
      },
      useMutableSource: Ha,
      useSyncExternalStore: Wa,
      useId: us,
      unstable_isNewReconciler: !1,
    };
  function dt(e, t) {
    if (e && e.defaultProps) {
      (t = V({}, t)), (e = e.defaultProps);
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function pi(e, t, n, r) {
    (t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : V({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Cl = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? en(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = Be(),
        l = Xt(e),
        u = Lt(r, l);
      (u.payload = t),
        n != null && (u.callback = n),
        (t = Qt(e, u, l)),
        t !== null && (ht(t, e, l, r), yl(t, e, l));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = Be(),
        l = Xt(e),
        u = Lt(r, l);
      (u.tag = 1),
        (u.payload = t),
        n != null && (u.callback = n),
        (t = Qt(e, u, l)),
        t !== null && (ht(t, e, l, r), yl(t, e, l));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = Be(),
        r = Xt(e),
        l = Lt(n, r);
      (l.tag = 2),
        t != null && (l.callback = t),
        (t = Qt(e, l, r)),
        t !== null && (ht(t, e, r, n), yl(t, e, r));
    },
  };
  function ss(e, t, n, r, l, u, o) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(r, u, o)
        : t.prototype && t.prototype.isPureReactComponent
        ? !ir(n, r) || !ir(l, u)
        : !0
    );
  }
  function cs(e, t, n) {
    var r = !1,
      l = Ht,
      u = t.contextType;
    return (
      typeof u == "object" && u !== null
        ? (u = ut(u))
        : ((l = Ve(t) ? nn : Fe.current),
          (r = t.contextTypes),
          (u = (r = r != null) ? _n(e, l) : Ht)),
      (t = new t(n, u)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = Cl),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = l),
        (e.__reactInternalMemoizedMaskedChildContext = u)),
      t
    );
  }
  function fs(e, t, n, r) {
    (e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && Cl.enqueueReplaceState(t, t.state, null);
  }
  function mi(e, t, n, r) {
    var l = e.stateNode;
    (l.props = n), (l.state = e.memoizedState), (l.refs = {}), ei(e);
    var u = t.contextType;
    typeof u == "object" && u !== null
      ? (l.context = ut(u))
      : ((u = Ve(t) ? nn : Fe.current), (l.context = _n(e, u))),
      (l.state = e.memoizedState),
      (u = t.getDerivedStateFromProps),
      typeof u == "function" && (pi(e, t, u, n), (l.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function" ||
        (typeof l.UNSAFE_componentWillMount != "function" &&
          typeof l.componentWillMount != "function") ||
        ((t = l.state),
        typeof l.componentWillMount == "function" && l.componentWillMount(),
        typeof l.UNSAFE_componentWillMount == "function" &&
          l.UNSAFE_componentWillMount(),
        t !== l.state && Cl.enqueueReplaceState(l, l.state, null),
        vl(e, n, l, r),
        (l.state = e.memoizedState)),
      typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function On(e, t) {
    try {
      var n = "",
        r = t;
      do (n += le(r)), (r = r.return);
      while (r);
      var l = n;
    } catch (u) {
      l =
        `
Error generating stack: ` +
        u.message +
        `
` +
        u.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
  }
  function hi(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function yi(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var sd = typeof WeakMap == "function" ? WeakMap : Map;
  function ds(e, t, n) {
    (n = Lt(-1, n)), (n.tag = 3), (n.payload = { element: null });
    var r = t.value;
    return (
      (n.callback = function () {
        Tl || ((Tl = !0), (Ti = r)), yi(e, t);
      }),
      n
    );
  }
  function ps(e, t, n) {
    (n = Lt(-1, n)), (n.tag = 3);
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var l = t.value;
      (n.payload = function () {
        return r(l);
      }),
        (n.callback = function () {
          yi(e, t);
        });
    }
    var u = e.stateNode;
    return (
      u !== null &&
        typeof u.componentDidCatch == "function" &&
        (n.callback = function () {
          yi(e, t),
            typeof r != "function" &&
              (Yt === null ? (Yt = new Set([this])) : Yt.add(this));
          var o = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: o !== null ? o : "",
          });
        }),
      n
    );
  }
  function ms(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new sd();
      var l = new Set();
      r.set(t, l);
    } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
    l.has(n) || (l.add(n), (e = Ed.bind(null, e, t, n)), t.then(e, e));
  }
  function hs(e) {
    do {
      var t;
      if (
        ((t = e.tag === 13) &&
          ((t = e.memoizedState),
          (t = t !== null ? t.dehydrated !== null : !0)),
        t)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function ys(e, t, n, r, l) {
    return e.mode & 1
      ? ((e.flags |= 65536), (e.lanes = l), e)
      : (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            n.tag === 1 &&
              (n.alternate === null
                ? (n.tag = 17)
                : ((t = Lt(-1, 1)), (t.tag = 2), Qt(n, t, 1))),
            (n.lanes |= 1)),
        e);
  }
  var cd = q.ReactCurrentOwner,
    Qe = !1;
  function Ae(e, t, n, r) {
    t.child = e === null ? Fa(t, null, n, r) : Tn(t, e.child, n, r);
  }
  function vs(e, t, n, r, l) {
    n = n.render;
    var u = t.ref;
    return (
      Dn(t, l),
      (r = oi(e, t, n, r, u, l)),
      (n = ai()),
      e !== null && !Qe
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~l),
          zt(e, t, l))
        : (ve && n && Vu(t), (t.flags |= 1), Ae(e, t, r, l), t.child)
    );
  }
  function gs(e, t, n, r, l) {
    if (e === null) {
      var u = n.type;
      return typeof u == "function" &&
        !Ui(u) &&
        u.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = u), ws(e, t, u, r, l))
        : ((e = Ml(n.type, null, r, t, t.mode, l)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((u = e.child), !(e.lanes & l))) {
      var o = u.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : ir), n(o, r) && e.ref === t.ref)
      )
        return zt(e, t, l);
    }
    return (
      (t.flags |= 1),
      (e = Zt(u, r)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function ws(e, t, n, r, l) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (ir(u, r) && e.ref === t.ref)
        if (((Qe = !1), (t.pendingProps = r = u), (e.lanes & l) !== 0))
          e.flags & 131072 && (Qe = !0);
        else return (t.lanes = e.lanes), zt(e, t, l);
    }
    return vi(e, t, n, r, l);
  }
  function xs(e, t, n) {
    var r = t.pendingProps,
      l = r.children,
      u = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
      if (!(t.mode & 1))
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          pe(Mn, tt),
          (tt |= n);
      else {
        if (!(n & 1073741824))
          return (
            (e = u !== null ? u.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            pe(Mn, tt),
            (tt |= e),
            null
          );
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (r = u !== null ? u.baseLanes : n),
          pe(Mn, tt),
          (tt |= r);
      }
    else
      u !== null ? ((r = u.baseLanes | n), (t.memoizedState = null)) : (r = n),
        pe(Mn, tt),
        (tt |= r);
    return Ae(e, t, l, n), t.child;
  }
  function Ss(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function vi(e, t, n, r, l) {
    var u = Ve(n) ? nn : Fe.current;
    return (
      (u = _n(t, u)),
      Dn(t, l),
      (n = oi(e, t, n, r, u, l)),
      (r = ai()),
      e !== null && !Qe
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~l),
          zt(e, t, l))
        : (ve && r && Vu(t), (t.flags |= 1), Ae(e, t, n, l), t.child)
    );
  }
  function ks(e, t, n, r, l) {
    if (Ve(n)) {
      var u = !0;
      al(t);
    } else u = !1;
    if ((Dn(t, l), t.stateNode === null))
      Pl(e, t), cs(t, n, r), mi(t, n, r, l), (r = !0);
    else if (e === null) {
      var o = t.stateNode,
        c = t.memoizedProps;
      o.props = c;
      var d = o.context,
        x = n.contextType;
      typeof x == "object" && x !== null
        ? (x = ut(x))
        : ((x = Ve(n) ? nn : Fe.current), (x = _n(t, x)));
      var R = n.getDerivedStateFromProps,
        L =
          typeof R == "function" ||
          typeof o.getSnapshotBeforeUpdate == "function";
      L ||
        (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
          typeof o.componentWillReceiveProps != "function") ||
        ((c !== r || d !== x) && fs(t, o, r, x)),
        (Vt = !1);
      var P = t.memoizedState;
      (o.state = P),
        vl(t, r, o, l),
        (d = t.memoizedState),
        c !== r || P !== d || We.current || Vt
          ? (typeof R == "function" && (pi(t, n, R, r), (d = t.memoizedState)),
            (c = Vt || ss(t, n, c, r, P, d, x))
              ? (L ||
                  (typeof o.UNSAFE_componentWillMount != "function" &&
                    typeof o.componentWillMount != "function") ||
                  (typeof o.componentWillMount == "function" &&
                    o.componentWillMount(),
                  typeof o.UNSAFE_componentWillMount == "function" &&
                    o.UNSAFE_componentWillMount()),
                typeof o.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof o.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = r),
                (t.memoizedState = d)),
            (o.props = r),
            (o.state = d),
            (o.context = x),
            (r = c))
          : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
            (r = !1));
    } else {
      (o = t.stateNode),
        Ua(e, t),
        (c = t.memoizedProps),
        (x = t.type === t.elementType ? c : dt(t.type, c)),
        (o.props = x),
        (L = t.pendingProps),
        (P = o.context),
        (d = n.contextType),
        typeof d == "object" && d !== null
          ? (d = ut(d))
          : ((d = Ve(n) ? nn : Fe.current), (d = _n(t, d)));
      var A = n.getDerivedStateFromProps;
      (R =
        typeof A == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function") ||
        (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
          typeof o.componentWillReceiveProps != "function") ||
        ((c !== L || P !== d) && fs(t, o, r, d)),
        (Vt = !1),
        (P = t.memoizedState),
        (o.state = P),
        vl(t, r, o, l);
      var Q = t.memoizedState;
      c !== L || P !== Q || We.current || Vt
        ? (typeof A == "function" && (pi(t, n, A, r), (Q = t.memoizedState)),
          (x = Vt || ss(t, n, x, r, P, Q, d) || !1)
            ? (R ||
                (typeof o.UNSAFE_componentWillUpdate != "function" &&
                  typeof o.componentWillUpdate != "function") ||
                (typeof o.componentWillUpdate == "function" &&
                  o.componentWillUpdate(r, Q, d),
                typeof o.UNSAFE_componentWillUpdate == "function" &&
                  o.UNSAFE_componentWillUpdate(r, Q, d)),
              typeof o.componentDidUpdate == "function" && (t.flags |= 4),
              typeof o.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof o.componentDidUpdate != "function" ||
                (c === e.memoizedProps && P === e.memoizedState) ||
                (t.flags |= 4),
              typeof o.getSnapshotBeforeUpdate != "function" ||
                (c === e.memoizedProps && P === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = Q)),
          (o.props = r),
          (o.state = Q),
          (o.context = d),
          (r = x))
        : (typeof o.componentDidUpdate != "function" ||
            (c === e.memoizedProps && P === e.memoizedState) ||
            (t.flags |= 4),
          typeof o.getSnapshotBeforeUpdate != "function" ||
            (c === e.memoizedProps && P === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return gi(e, t, n, r, u, l);
  }
  function gi(e, t, n, r, l, u) {
    Ss(e, t);
    var o = (t.flags & 128) !== 0;
    if (!r && !o) return l && _a(t, n, !1), zt(e, t, u);
    (r = t.stateNode), (cd.current = t);
    var c =
      o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && o
        ? ((t.child = Tn(t, e.child, null, u)), (t.child = Tn(t, null, c, u)))
        : Ae(e, t, c, u),
      (t.memoizedState = r.state),
      l && _a(t, n, !0),
      t.child
    );
  }
  function Es(e) {
    var t = e.stateNode;
    t.pendingContext
      ? Na(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && Na(e, t.context, !1),
      ti(e, t.containerInfo);
  }
  function Cs(e, t, n, r, l) {
    return zn(), Gu(l), (t.flags |= 256), Ae(e, t, n, r), t.child;
  }
  var wi = { dehydrated: null, treeContext: null, retryLane: 0 };
  function xi(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Ns(e, t, n) {
    var r = t.pendingProps,
      l = we.current,
      u = !1,
      o = (t.flags & 128) !== 0,
      c;
    if (
      ((c = o) ||
        (c = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
      c
        ? ((u = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (l |= 1),
      pe(we, l & 1),
      e === null)
    )
      return (
        Yu(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? (t.mode & 1
              ? e.data === "$!"
                ? (t.lanes = 8)
                : (t.lanes = 1073741824)
              : (t.lanes = 1),
            null)
          : ((o = r.children),
            (e = r.fallback),
            u
              ? ((r = t.mode),
                (u = t.child),
                (o = { mode: "hidden", children: o }),
                !(r & 1) && u !== null
                  ? ((u.childLanes = 0), (u.pendingProps = o))
                  : (u = Ul(o, r, 0, null)),
                (e = pn(e, r, n, null)),
                (u.return = t),
                (e.return = t),
                (u.sibling = e),
                (t.child = u),
                (t.child.memoizedState = xi(n)),
                (t.memoizedState = wi),
                e)
              : Si(t, o))
      );
    if (((l = e.memoizedState), l !== null && ((c = l.dehydrated), c !== null)))
      return fd(e, t, o, r, c, l, n);
    if (u) {
      (u = r.fallback), (o = t.mode), (l = e.child), (c = l.sibling);
      var d = { mode: "hidden", children: r.children };
      return (
        !(o & 1) && t.child !== l
          ? ((r = t.child),
            (r.childLanes = 0),
            (r.pendingProps = d),
            (t.deletions = null))
          : ((r = Zt(l, d)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
        c !== null ? (u = Zt(c, u)) : ((u = pn(u, o, n, null)), (u.flags |= 2)),
        (u.return = t),
        (r.return = t),
        (r.sibling = u),
        (t.child = r),
        (r = u),
        (u = t.child),
        (o = e.child.memoizedState),
        (o =
          o === null
            ? xi(n)
            : {
                baseLanes: o.baseLanes | n,
                cachePool: null,
                transitions: o.transitions,
              }),
        (u.memoizedState = o),
        (u.childLanes = e.childLanes & ~n),
        (t.memoizedState = wi),
        r
      );
    }
    return (
      (u = e.child),
      (e = u.sibling),
      (r = Zt(u, { mode: "visible", children: r.children })),
      !(t.mode & 1) && (r.lanes = n),
      (r.return = t),
      (r.sibling = null),
      e !== null &&
        ((n = t.deletions),
        n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
      (t.child = r),
      (t.memoizedState = null),
      r
    );
  }
  function Si(e, t) {
    return (
      (t = Ul({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function Nl(e, t, n, r) {
    return (
      r !== null && Gu(r),
      Tn(t, e.child, null, n),
      (e = Si(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function fd(e, t, n, r, l, u, o) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = hi(Error(a(422)))), Nl(e, t, o, r))
        : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((u = r.fallback),
          (l = t.mode),
          (r = Ul({ mode: "visible", children: r.children }, l, 0, null)),
          (u = pn(u, l, o, null)),
          (u.flags |= 2),
          (r.return = t),
          (u.return = t),
          (r.sibling = u),
          (t.child = r),
          t.mode & 1 && Tn(t, e.child, null, o),
          (t.child.memoizedState = xi(o)),
          (t.memoizedState = wi),
          u);
    if (!(t.mode & 1)) return Nl(e, t, o, null);
    if (l.data === "$!") {
      if (((r = l.nextSibling && l.nextSibling.dataset), r)) var c = r.dgst;
      return (
        (r = c), (u = Error(a(419))), (r = hi(u, r, void 0)), Nl(e, t, o, r)
      );
    }
    if (((c = (o & e.childLanes) !== 0), Qe || c)) {
      if (((r = Te), r !== null)) {
        switch (o & -o) {
          case 4:
            l = 2;
            break;
          case 16:
            l = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            l = 32;
            break;
          case 536870912:
            l = 268435456;
            break;
          default:
            l = 0;
        }
        (l = l & (r.suspendedLanes | o) ? 0 : l),
          l !== 0 &&
            l !== u.retryLane &&
            ((u.retryLane = l), Rt(e, l), ht(r, e, l, -1));
      }
      return Mi(), (r = hi(Error(a(421)))), Nl(e, t, o, r);
    }
    return l.data === "$?"
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = Cd.bind(null, e)),
        (l._reactRetry = t),
        null)
      : ((e = u.treeContext),
        (et = At(l.nextSibling)),
        (be = t),
        (ve = !0),
        (ft = null),
        e !== null &&
          ((rt[lt++] = Pt),
          (rt[lt++] = _t),
          (rt[lt++] = rn),
          (Pt = e.id),
          (_t = e.overflow),
          (rn = t)),
        (t = Si(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function Ps(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), qu(e.return, t, n);
  }
  function ki(e, t, n, r, l) {
    var u = e.memoizedState;
    u === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: n,
          tailMode: l,
        })
      : ((u.isBackwards = t),
        (u.rendering = null),
        (u.renderingStartTime = 0),
        (u.last = r),
        (u.tail = n),
        (u.tailMode = l));
  }
  function _s(e, t, n) {
    var r = t.pendingProps,
      l = r.revealOrder,
      u = r.tail;
    if ((Ae(e, t, r.children, n), (r = we.current), r & 2))
      (r = (r & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && e.flags & 128)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Ps(e, n, t);
          else if (e.tag === 19) Ps(e, n, t);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      r &= 1;
    }
    if ((pe(we, r), !(t.mode & 1))) t.memoizedState = null;
    else
      switch (l) {
        case "forwards":
          for (n = t.child, l = null; n !== null; )
            (e = n.alternate),
              e !== null && gl(e) === null && (l = n),
              (n = n.sibling);
          (n = l),
            n === null
              ? ((l = t.child), (t.child = null))
              : ((l = n.sibling), (n.sibling = null)),
            ki(t, !1, l, n, u);
          break;
        case "backwards":
          for (n = null, l = t.child, t.child = null; l !== null; ) {
            if (((e = l.alternate), e !== null && gl(e) === null)) {
              t.child = l;
              break;
            }
            (e = l.sibling), (l.sibling = n), (n = l), (l = e);
          }
          ki(t, !0, n, null, u);
          break;
        case "together":
          ki(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function Pl(e, t) {
    !(t.mode & 1) &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function zt(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (sn |= t.lanes),
      !(n & t.childLanes))
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(a(153));
    if (t.child !== null) {
      for (
        e = t.child, n = Zt(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (n = n.sibling = Zt(e, e.pendingProps)),
          (n.return = t);
      n.sibling = null;
    }
    return t.child;
  }
  function dd(e, t, n) {
    switch (t.tag) {
      case 3:
        Es(t), zn();
        break;
      case 5:
        Ba(t);
        break;
      case 1:
        Ve(t.type) && al(t);
        break;
      case 4:
        ti(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          l = t.memoizedProps.value;
        pe(ml, r._currentValue), (r._currentValue = l);
        break;
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (pe(we, we.current & 1), (t.flags |= 128), null)
            : n & t.child.childLanes
            ? Ns(e, t, n)
            : (pe(we, we.current & 1),
              (e = zt(e, t, n)),
              e !== null ? e.sibling : null);
        pe(we, we.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
          if (r) return _s(e, t, n);
          t.flags |= 128;
        }
        if (
          ((l = t.memoizedState),
          l !== null &&
            ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          pe(we, we.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), xs(e, t, n);
    }
    return zt(e, t, n);
  }
  var Rs, Ei, Ls, zs;
  (Rs = function (e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        (n.child.return = n), (n = n.child);
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
  }),
    (Ei = function () {}),
    (Ls = function (e, t, n, r) {
      var l = e.memoizedProps;
      if (l !== r) {
        (e = t.stateNode), on(wt.current);
        var u = null;
        switch (n) {
          case "input":
            (l = ql(e, l)), (r = ql(e, r)), (u = []);
            break;
          case "select":
            (l = V({}, l, { value: void 0 })),
              (r = V({}, r, { value: void 0 })),
              (u = []);
            break;
          case "textarea":
            (l = tu(e, l)), (r = tu(e, r)), (u = []);
            break;
          default:
            typeof l.onClick != "function" &&
              typeof r.onClick == "function" &&
              (e.onclick = ul);
        }
        ru(n, r);
        var o;
        n = null;
        for (x in l)
          if (!r.hasOwnProperty(x) && l.hasOwnProperty(x) && l[x] != null)
            if (x === "style") {
              var c = l[x];
              for (o in c) c.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
            } else
              x !== "dangerouslySetInnerHTML" &&
                x !== "children" &&
                x !== "suppressContentEditableWarning" &&
                x !== "suppressHydrationWarning" &&
                x !== "autoFocus" &&
                (f.hasOwnProperty(x)
                  ? u || (u = [])
                  : (u = u || []).push(x, null));
        for (x in r) {
          var d = r[x];
          if (
            ((c = l != null ? l[x] : void 0),
            r.hasOwnProperty(x) && d !== c && (d != null || c != null))
          )
            if (x === "style")
              if (c) {
                for (o in c)
                  !c.hasOwnProperty(o) ||
                    (d && d.hasOwnProperty(o)) ||
                    (n || (n = {}), (n[o] = ""));
                for (o in d)
                  d.hasOwnProperty(o) &&
                    c[o] !== d[o] &&
                    (n || (n = {}), (n[o] = d[o]));
              } else n || (u || (u = []), u.push(x, n)), (n = d);
            else
              x === "dangerouslySetInnerHTML"
                ? ((d = d ? d.__html : void 0),
                  (c = c ? c.__html : void 0),
                  d != null && c !== d && (u = u || []).push(x, d))
                : x === "children"
                ? (typeof d != "string" && typeof d != "number") ||
                  (u = u || []).push(x, "" + d)
                : x !== "suppressContentEditableWarning" &&
                  x !== "suppressHydrationWarning" &&
                  (f.hasOwnProperty(x)
                    ? (d != null && x === "onScroll" && me("scroll", e),
                      u || c === d || (u = []))
                    : (u = u || []).push(x, d));
        }
        n && (u = u || []).push("style", n);
        var x = u;
        (t.updateQueue = x) && (t.flags |= 4);
      }
    }),
    (zs = function (e, t, n, r) {
      n !== r && (t.flags |= 4);
    });
  function Sr(e, t) {
    if (!ve)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            t.alternate !== null && (n = t), (t = t.sibling);
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = e.tail;
          for (var r = null; n !== null; )
            n.alternate !== null && (r = n), (n = n.sibling);
          r === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (r.sibling = null);
      }
  }
  function Ue(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      r = 0;
    if (t)
      for (var l = e.child; l !== null; )
        (n |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags & 14680064),
          (r |= l.flags & 14680064),
          (l.return = e),
          (l = l.sibling);
    else
      for (l = e.child; l !== null; )
        (n |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags),
          (r |= l.flags),
          (l.return = e),
          (l = l.sibling);
    return (e.subtreeFlags |= r), (e.childLanes = n), t;
  }
  function pd(e, t, n) {
    var r = t.pendingProps;
    switch ((Qu(t), t.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Ue(t), null;
      case 1:
        return Ve(t.type) && ol(), Ue(t), null;
      case 3:
        return (
          (r = t.stateNode),
          In(),
          he(We),
          he(Fe),
          li(),
          r.pendingContext &&
            ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (dl(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                ((t.flags |= 1024), ft !== null && (Ii(ft), (ft = null)))),
          Ei(e, t),
          Ue(t),
          null
        );
      case 5:
        ni(t);
        var l = on(yr.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          Ls(e, t, n, r, l),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(a(166));
            return Ue(t), null;
          }
          if (((e = on(wt.current)), dl(t))) {
            (r = t.stateNode), (n = t.type);
            var u = t.memoizedProps;
            switch (((r[gt] = t), (r[fr] = u), (e = (t.mode & 1) !== 0), n)) {
              case "dialog":
                me("cancel", r), me("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                me("load", r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < ar.length; l++) me(ar[l], r);
                break;
              case "source":
                me("error", r);
                break;
              case "img":
              case "image":
              case "link":
                me("error", r), me("load", r);
                break;
              case "details":
                me("toggle", r);
                break;
              case "input":
                so(r, u), me("invalid", r);
                break;
              case "select":
                (r._wrapperState = { wasMultiple: !!u.multiple }),
                  me("invalid", r);
                break;
              case "textarea":
                po(r, u), me("invalid", r);
            }
            ru(n, u), (l = null);
            for (var o in u)
              if (u.hasOwnProperty(o)) {
                var c = u[o];
                o === "children"
                  ? typeof c == "string"
                    ? r.textContent !== c &&
                      (u.suppressHydrationWarning !== !0 &&
                        ll(r.textContent, c, e),
                      (l = ["children", c]))
                    : typeof c == "number" &&
                      r.textContent !== "" + c &&
                      (u.suppressHydrationWarning !== !0 &&
                        ll(r.textContent, c, e),
                      (l = ["children", "" + c]))
                  : f.hasOwnProperty(o) &&
                    c != null &&
                    o === "onScroll" &&
                    me("scroll", r);
              }
            switch (n) {
              case "input":
                Or(r), fo(r, u, !0);
                break;
              case "textarea":
                Or(r), ho(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof u.onClick == "function" && (r.onclick = ul);
            }
            (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
          } else {
            (o = l.nodeType === 9 ? l : l.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = yo(n)),
              e === "http://www.w3.org/1999/xhtml"
                ? n === "script"
                  ? ((e = o.createElement("div")),
                    (e.innerHTML = "<script></script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof r.is == "string"
                  ? (e = o.createElement(n, { is: r.is }))
                  : ((e = o.createElement(n)),
                    n === "select" &&
                      ((o = e),
                      r.multiple
                        ? (o.multiple = !0)
                        : r.size && (o.size = r.size)))
                : (e = o.createElementNS(e, n)),
              (e[gt] = t),
              (e[fr] = r),
              Rs(e, t, !1, !1),
              (t.stateNode = e);
            e: {
              switch (((o = lu(n, r)), n)) {
                case "dialog":
                  me("cancel", e), me("close", e), (l = r);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  me("load", e), (l = r);
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < ar.length; l++) me(ar[l], e);
                  l = r;
                  break;
                case "source":
                  me("error", e), (l = r);
                  break;
                case "img":
                case "image":
                case "link":
                  me("error", e), me("load", e), (l = r);
                  break;
                case "details":
                  me("toggle", e), (l = r);
                  break;
                case "input":
                  so(e, r), (l = ql(e, r)), me("invalid", e);
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  (e._wrapperState = { wasMultiple: !!r.multiple }),
                    (l = V({}, r, { value: void 0 })),
                    me("invalid", e);
                  break;
                case "textarea":
                  po(e, r), (l = tu(e, r)), me("invalid", e);
                  break;
                default:
                  l = r;
              }
              ru(n, l), (c = l);
              for (u in c)
                if (c.hasOwnProperty(u)) {
                  var d = c[u];
                  u === "style"
                    ? wo(e, d)
                    : u === "dangerouslySetInnerHTML"
                    ? ((d = d ? d.__html : void 0), d != null && vo(e, d))
                    : u === "children"
                    ? typeof d == "string"
                      ? (n !== "textarea" || d !== "") && Wn(e, d)
                      : typeof d == "number" && Wn(e, "" + d)
                    : u !== "suppressContentEditableWarning" &&
                      u !== "suppressHydrationWarning" &&
                      u !== "autoFocus" &&
                      (f.hasOwnProperty(u)
                        ? d != null && u === "onScroll" && me("scroll", e)
                        : d != null && W(e, u, d, o));
                }
              switch (n) {
                case "input":
                  Or(e), fo(e, r, !1);
                  break;
                case "textarea":
                  Or(e), ho(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + ce(r.value));
                  break;
                case "select":
                  (e.multiple = !!r.multiple),
                    (u = r.value),
                    u != null
                      ? hn(e, !!r.multiple, u, !1)
                      : r.defaultValue != null &&
                        hn(e, !!r.multiple, r.defaultValue, !0);
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = ul);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r = !!r.autoFocus;
                  break e;
                case "img":
                  r = !0;
                  break e;
                default:
                  r = !1;
              }
            }
            r && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return Ue(t), null;
      case 6:
        if (e && t.stateNode != null) zs(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(a(166));
          if (((n = on(yr.current)), on(wt.current), dl(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[gt] = t),
              (u = r.nodeValue !== n) && ((e = be), e !== null))
            )
              switch (e.tag) {
                case 3:
                  ll(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    ll(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            u && (t.flags |= 4);
          } else
            (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
              (r[gt] = t),
              (t.stateNode = r);
        }
        return Ue(t), null;
      case 13:
        if (
          (he(we),
          (r = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (ve && et !== null && t.mode & 1 && !(t.flags & 128))
            Da(), zn(), (t.flags |= 98560), (u = !1);
          else if (((u = dl(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!u) throw Error(a(318));
              if (
                ((u = t.memoizedState),
                (u = u !== null ? u.dehydrated : null),
                !u)
              )
                throw Error(a(317));
              u[gt] = t;
            } else
              zn(),
                !(t.flags & 128) && (t.memoizedState = null),
                (t.flags |= 4);
            Ue(t), (u = !1);
          } else ft !== null && (Ii(ft), (ft = null)), (u = !0);
          if (!u) return t.flags & 65536 ? t : null;
        }
        return t.flags & 128
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              t.mode & 1 &&
                (e === null || we.current & 1 ? Le === 0 && (Le = 3) : Mi())),
            t.updateQueue !== null && (t.flags |= 4),
            Ue(t),
            null);
      case 4:
        return (
          In(),
          Ei(e, t),
          e === null && sr(t.stateNode.containerInfo),
          Ue(t),
          null
        );
      case 10:
        return Zu(t.type._context), Ue(t), null;
      case 17:
        return Ve(t.type) && ol(), Ue(t), null;
      case 19:
        if ((he(we), (u = t.memoizedState), u === null)) return Ue(t), null;
        if (((r = (t.flags & 128) !== 0), (o = u.rendering), o === null))
          if (r) Sr(u, !1);
          else {
            if (Le !== 0 || (e !== null && e.flags & 128))
              for (e = t.child; e !== null; ) {
                if (((o = gl(e)), o !== null)) {
                  for (
                    t.flags |= 128,
                      Sr(u, !1),
                      r = o.updateQueue,
                      r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      r = n,
                      n = t.child;
                    n !== null;

                  )
                    (u = n),
                      (e = r),
                      (u.flags &= 14680066),
                      (o = u.alternate),
                      o === null
                        ? ((u.childLanes = 0),
                          (u.lanes = e),
                          (u.child = null),
                          (u.subtreeFlags = 0),
                          (u.memoizedProps = null),
                          (u.memoizedState = null),
                          (u.updateQueue = null),
                          (u.dependencies = null),
                          (u.stateNode = null))
                        : ((u.childLanes = o.childLanes),
                          (u.lanes = o.lanes),
                          (u.child = o.child),
                          (u.subtreeFlags = 0),
                          (u.deletions = null),
                          (u.memoizedProps = o.memoizedProps),
                          (u.memoizedState = o.memoizedState),
                          (u.updateQueue = o.updateQueue),
                          (u.type = o.type),
                          (e = o.dependencies),
                          (u.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (n = n.sibling);
                  return pe(we, (we.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            u.tail !== null &&
              Ne() > Un &&
              ((t.flags |= 128), (r = !0), Sr(u, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = gl(o)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                Sr(u, !0),
                u.tail === null &&
                  u.tailMode === "hidden" &&
                  !o.alternate &&
                  !ve)
              )
                return Ue(t), null;
            } else
              2 * Ne() - u.renderingStartTime > Un &&
                n !== 1073741824 &&
                ((t.flags |= 128), (r = !0), Sr(u, !1), (t.lanes = 4194304));
          u.isBackwards
            ? ((o.sibling = t.child), (t.child = o))
            : ((n = u.last),
              n !== null ? (n.sibling = o) : (t.child = o),
              (u.last = o));
        }
        return u.tail !== null
          ? ((t = u.tail),
            (u.rendering = t),
            (u.tail = t.sibling),
            (u.renderingStartTime = Ne()),
            (t.sibling = null),
            (n = we.current),
            pe(we, r ? (n & 1) | 2 : n & 1),
            t)
          : (Ue(t), null);
      case 22:
      case 23:
        return (
          Fi(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && t.mode & 1
            ? tt & 1073741824 &&
              (Ue(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Ue(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(a(156, t.tag));
  }
  function md(e, t) {
    switch ((Qu(t), t.tag)) {
      case 1:
        return (
          Ve(t.type) && ol(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          In(),
          he(We),
          he(Fe),
          li(),
          (e = t.flags),
          e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return ni(t), null;
      case 13:
        if (
          (he(we), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(a(340));
          zn();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return he(we), null;
      case 4:
        return In(), null;
      case 10:
        return Zu(t.type._context), null;
      case 22:
      case 23:
        return Fi(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var _l = !1,
    $e = !1,
    hd = typeof WeakSet == "function" ? WeakSet : Set,
    H = null;
  function Fn(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == "function")
        try {
          n(null);
        } catch (r) {
          Ce(e, t, r);
        }
      else n.current = null;
  }
  function Ci(e, t, n) {
    try {
      n();
    } catch (r) {
      Ce(e, t, r);
    }
  }
  var Ts = !1;
  function yd(e, t) {
    if (((Fu = Yr), (e = sa()), Ru(e))) {
      if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var r = n.getSelection && n.getSelection();
          if (r && r.rangeCount !== 0) {
            n = r.anchorNode;
            var l = r.anchorOffset,
              u = r.focusNode;
            r = r.focusOffset;
            try {
              n.nodeType, u.nodeType;
            } catch {
              n = null;
              break e;
            }
            var o = 0,
              c = -1,
              d = -1,
              x = 0,
              R = 0,
              L = e,
              P = null;
            t: for (;;) {
              for (
                var A;
                L !== n || (l !== 0 && L.nodeType !== 3) || (c = o + l),
                  L !== u || (r !== 0 && L.nodeType !== 3) || (d = o + r),
                  L.nodeType === 3 && (o += L.nodeValue.length),
                  (A = L.firstChild) !== null;

              )
                (P = L), (L = A);
              for (;;) {
                if (L === e) break t;
                if (
                  (P === n && ++x === l && (c = o),
                  P === u && ++R === r && (d = o),
                  (A = L.nextSibling) !== null)
                )
                  break;
                (L = P), (P = L.parentNode);
              }
              L = A;
            }
            n = c === -1 || d === -1 ? null : { start: c, end: d };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      Mu = { focusedElem: e, selectionRange: n }, Yr = !1, H = t;
      H !== null;

    )
      if (((t = H), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        (e.return = t), (H = e);
      else
        for (; H !== null; ) {
          t = H;
          try {
            var Q = t.alternate;
            if (t.flags & 1024)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (Q !== null) {
                    var K = Q.memoizedProps,
                      Pe = Q.memoizedState,
                      v = t.stateNode,
                      m = v.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? K : dt(t.type, K),
                        Pe
                      );
                    v.__reactInternalSnapshotBeforeUpdate = m;
                  }
                  break;
                case 3:
                  var g = t.stateNode.containerInfo;
                  g.nodeType === 1
                    ? (g.textContent = "")
                    : g.nodeType === 9 &&
                      g.documentElement &&
                      g.removeChild(g.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(a(163));
              }
          } catch (T) {
            Ce(t, t.return, T);
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (H = e);
            break;
          }
          H = t.return;
        }
    return (Q = Ts), (Ts = !1), Q;
  }
  function kr(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var l = (r = r.next);
      do {
        if ((l.tag & e) === e) {
          var u = l.destroy;
          (l.destroy = void 0), u !== void 0 && Ci(t, n, u);
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function Rl(e, t) {
    if (
      ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
    ) {
      var n = (t = t.next);
      do {
        if ((n.tag & e) === e) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function Ni(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n;
      }
      typeof t == "function" ? t(e) : (t.current = e);
    }
  }
  function js(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), js(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[gt],
          delete t[fr],
          delete t[Bu],
          delete t[qf],
          delete t[bf])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function Ds(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Is(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Ds(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Pi(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode),
        t
          ? n.nodeType === 8
            ? n.parentNode.insertBefore(e, t)
            : n.insertBefore(e, t)
          : (n.nodeType === 8
              ? ((t = n.parentNode), t.insertBefore(e, n))
              : ((t = n), t.appendChild(e)),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = ul));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (Pi(e, t, n), e = e.sibling; e !== null; )
        Pi(e, t, n), (e = e.sibling);
  }
  function _i(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && ((e = e.child), e !== null))
      for (_i(e, t, n), e = e.sibling; e !== null; )
        _i(e, t, n), (e = e.sibling);
  }
  var De = null,
    pt = !1;
  function Kt(e, t, n) {
    for (n = n.child; n !== null; ) Os(e, t, n), (n = n.sibling);
  }
  function Os(e, t, n) {
    if (vt && typeof vt.onCommitFiberUnmount == "function")
      try {
        vt.onCommitFiberUnmount(Br, n);
      } catch {}
    switch (n.tag) {
      case 5:
        $e || Fn(n, t);
      case 6:
        var r = De,
          l = pt;
        (De = null),
          Kt(e, t, n),
          (De = r),
          (pt = l),
          De !== null &&
            (pt
              ? ((e = De),
                (n = n.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(n)
                  : e.removeChild(n))
              : De.removeChild(n.stateNode));
        break;
      case 18:
        De !== null &&
          (pt
            ? ((e = De),
              (n = n.stateNode),
              e.nodeType === 8
                ? Au(e.parentNode, n)
                : e.nodeType === 1 && Au(e, n),
              er(e))
            : Au(De, n.stateNode));
        break;
      case 4:
        (r = De),
          (l = pt),
          (De = n.stateNode.containerInfo),
          (pt = !0),
          Kt(e, t, n),
          (De = r),
          (pt = l);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !$e &&
          ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
        ) {
          l = r = r.next;
          do {
            var u = l,
              o = u.destroy;
            (u = u.tag),
              o !== void 0 && (u & 2 || u & 4) && Ci(n, t, o),
              (l = l.next);
          } while (l !== r);
        }
        Kt(e, t, n);
        break;
      case 1:
        if (
          !$e &&
          (Fn(n, t),
          (r = n.stateNode),
          typeof r.componentWillUnmount == "function")
        )
          try {
            (r.props = n.memoizedProps),
              (r.state = n.memoizedState),
              r.componentWillUnmount();
          } catch (c) {
            Ce(n, t, c);
          }
        Kt(e, t, n);
        break;
      case 21:
        Kt(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? (($e = (r = $e) || n.memoizedState !== null), Kt(e, t, n), ($e = r))
          : Kt(e, t, n);
        break;
      default:
        Kt(e, t, n);
    }
  }
  function Fs(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new hd()),
        t.forEach(function (r) {
          var l = Nd.bind(null, e, r);
          n.has(r) || (n.add(r), r.then(l, l));
        });
    }
  }
  function mt(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var r = 0; r < n.length; r++) {
        var l = n[r];
        try {
          var u = e,
            o = t,
            c = o;
          e: for (; c !== null; ) {
            switch (c.tag) {
              case 5:
                (De = c.stateNode), (pt = !1);
                break e;
              case 3:
                (De = c.stateNode.containerInfo), (pt = !0);
                break e;
              case 4:
                (De = c.stateNode.containerInfo), (pt = !0);
                break e;
            }
            c = c.return;
          }
          if (De === null) throw Error(a(160));
          Os(u, o, l), (De = null), (pt = !1);
          var d = l.alternate;
          d !== null && (d.return = null), (l.return = null);
        } catch (x) {
          Ce(l, t, x);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) Ms(t, e), (t = t.sibling);
  }
  function Ms(e, t) {
    var n = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((mt(t, e), St(e), r & 4)) {
          try {
            kr(3, e, e.return), Rl(3, e);
          } catch (K) {
            Ce(e, e.return, K);
          }
          try {
            kr(5, e, e.return);
          } catch (K) {
            Ce(e, e.return, K);
          }
        }
        break;
      case 1:
        mt(t, e), St(e), r & 512 && n !== null && Fn(n, n.return);
        break;
      case 5:
        if (
          (mt(t, e),
          St(e),
          r & 512 && n !== null && Fn(n, n.return),
          e.flags & 32)
        ) {
          var l = e.stateNode;
          try {
            Wn(l, "");
          } catch (K) {
            Ce(e, e.return, K);
          }
        }
        if (r & 4 && ((l = e.stateNode), l != null)) {
          var u = e.memoizedProps,
            o = n !== null ? n.memoizedProps : u,
            c = e.type,
            d = e.updateQueue;
          if (((e.updateQueue = null), d !== null))
            try {
              c === "input" && u.type === "radio" && u.name != null && co(l, u),
                lu(c, o);
              var x = lu(c, u);
              for (o = 0; o < d.length; o += 2) {
                var R = d[o],
                  L = d[o + 1];
                R === "style"
                  ? wo(l, L)
                  : R === "dangerouslySetInnerHTML"
                  ? vo(l, L)
                  : R === "children"
                  ? Wn(l, L)
                  : W(l, R, L, x);
              }
              switch (c) {
                case "input":
                  bl(l, u);
                  break;
                case "textarea":
                  mo(l, u);
                  break;
                case "select":
                  var P = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!u.multiple;
                  var A = u.value;
                  A != null
                    ? hn(l, !!u.multiple, A, !1)
                    : P !== !!u.multiple &&
                      (u.defaultValue != null
                        ? hn(l, !!u.multiple, u.defaultValue, !0)
                        : hn(l, !!u.multiple, u.multiple ? [] : "", !1));
              }
              l[fr] = u;
            } catch (K) {
              Ce(e, e.return, K);
            }
        }
        break;
      case 6:
        if ((mt(t, e), St(e), r & 4)) {
          if (e.stateNode === null) throw Error(a(162));
          (l = e.stateNode), (u = e.memoizedProps);
          try {
            l.nodeValue = u;
          } catch (K) {
            Ce(e, e.return, K);
          }
        }
        break;
      case 3:
        if (
          (mt(t, e), St(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            er(t.containerInfo);
          } catch (K) {
            Ce(e, e.return, K);
          }
        break;
      case 4:
        mt(t, e), St(e);
        break;
      case 13:
        mt(t, e),
          St(e),
          (l = e.child),
          l.flags & 8192 &&
            ((u = l.memoizedState !== null),
            (l.stateNode.isHidden = u),
            !u ||
              (l.alternate !== null && l.alternate.memoizedState !== null) ||
              (zi = Ne())),
          r & 4 && Fs(e);
        break;
      case 22:
        if (
          ((R = n !== null && n.memoizedState !== null),
          e.mode & 1 ? (($e = (x = $e) || R), mt(t, e), ($e = x)) : mt(t, e),
          St(e),
          r & 8192)
        ) {
          if (
            ((x = e.memoizedState !== null),
            (e.stateNode.isHidden = x) && !R && e.mode & 1)
          )
            for (H = e, R = e.child; R !== null; ) {
              for (L = H = R; H !== null; ) {
                switch (((P = H), (A = P.child), P.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    kr(4, P, P.return);
                    break;
                  case 1:
                    Fn(P, P.return);
                    var Q = P.stateNode;
                    if (typeof Q.componentWillUnmount == "function") {
                      (r = P), (n = P.return);
                      try {
                        (t = r),
                          (Q.props = t.memoizedProps),
                          (Q.state = t.memoizedState),
                          Q.componentWillUnmount();
                      } catch (K) {
                        Ce(r, n, K);
                      }
                    }
                    break;
                  case 5:
                    Fn(P, P.return);
                    break;
                  case 22:
                    if (P.memoizedState !== null) {
                      As(L);
                      continue;
                    }
                }
                A !== null ? ((A.return = P), (H = A)) : As(L);
              }
              R = R.sibling;
            }
          e: for (R = null, L = e; ; ) {
            if (L.tag === 5) {
              if (R === null) {
                R = L;
                try {
                  (l = L.stateNode),
                    x
                      ? ((u = l.style),
                        typeof u.setProperty == "function"
                          ? u.setProperty("display", "none", "important")
                          : (u.display = "none"))
                      : ((c = L.stateNode),
                        (d = L.memoizedProps.style),
                        (o =
                          d != null && d.hasOwnProperty("display")
                            ? d.display
                            : null),
                        (c.style.display = go("display", o)));
                } catch (K) {
                  Ce(e, e.return, K);
                }
              }
            } else if (L.tag === 6) {
              if (R === null)
                try {
                  L.stateNode.nodeValue = x ? "" : L.memoizedProps;
                } catch (K) {
                  Ce(e, e.return, K);
                }
            } else if (
              ((L.tag !== 22 && L.tag !== 23) ||
                L.memoizedState === null ||
                L === e) &&
              L.child !== null
            ) {
              (L.child.return = L), (L = L.child);
              continue;
            }
            if (L === e) break e;
            for (; L.sibling === null; ) {
              if (L.return === null || L.return === e) break e;
              R === L && (R = null), (L = L.return);
            }
            R === L && (R = null),
              (L.sibling.return = L.return),
              (L = L.sibling);
          }
        }
        break;
      case 19:
        mt(t, e), St(e), r & 4 && Fs(e);
        break;
      case 21:
        break;
      default:
        mt(t, e), St(e);
    }
  }
  function St(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (Ds(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(a(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && (Wn(l, ""), (r.flags &= -33));
            var u = Is(e);
            _i(e, u, l);
            break;
          case 3:
          case 4:
            var o = r.stateNode.containerInfo,
              c = Is(e);
            Pi(e, c, o);
            break;
          default:
            throw Error(a(161));
        }
      } catch (d) {
        Ce(e, e.return, d);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function vd(e, t, n) {
    (H = e), Us(e);
  }
  function Us(e, t, n) {
    for (var r = (e.mode & 1) !== 0; H !== null; ) {
      var l = H,
        u = l.child;
      if (l.tag === 22 && r) {
        var o = l.memoizedState !== null || _l;
        if (!o) {
          var c = l.alternate,
            d = (c !== null && c.memoizedState !== null) || $e;
          c = _l;
          var x = $e;
          if (((_l = o), ($e = d) && !x))
            for (H = l; H !== null; )
              (o = H),
                (d = o.child),
                o.tag === 22 && o.memoizedState !== null
                  ? Bs(l)
                  : d !== null
                  ? ((d.return = o), (H = d))
                  : Bs(l);
          for (; u !== null; ) (H = u), Us(u), (u = u.sibling);
          (H = l), (_l = c), ($e = x);
        }
        $s(e);
      } else
        l.subtreeFlags & 8772 && u !== null ? ((u.return = l), (H = u)) : $s(e);
    }
  }
  function $s(e) {
    for (; H !== null; ) {
      var t = H;
      if (t.flags & 8772) {
        var n = t.alternate;
        try {
          if (t.flags & 8772)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                $e || Rl(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !$e)
                  if (n === null) r.componentDidMount();
                  else {
                    var l =
                      t.elementType === t.type
                        ? n.memoizedProps
                        : dt(t.type, n.memoizedProps);
                    r.componentDidUpdate(
                      l,
                      n.memoizedState,
                      r.__reactInternalSnapshotBeforeUpdate
                    );
                  }
                var u = t.updateQueue;
                u !== null && Aa(t, u, r);
                break;
              case 3:
                var o = t.updateQueue;
                if (o !== null) {
                  if (((n = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        n = t.child.stateNode;
                        break;
                      case 1:
                        n = t.child.stateNode;
                    }
                  Aa(t, o, n);
                }
                break;
              case 5:
                var c = t.stateNode;
                if (n === null && t.flags & 4) {
                  n = c;
                  var d = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      d.autoFocus && n.focus();
                      break;
                    case "img":
                      d.src && (n.src = d.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (t.memoizedState === null) {
                  var x = t.alternate;
                  if (x !== null) {
                    var R = x.memoizedState;
                    if (R !== null) {
                      var L = R.dehydrated;
                      L !== null && er(L);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(a(163));
            }
          $e || (t.flags & 512 && Ni(t));
        } catch (P) {
          Ce(t, t.return, P);
        }
      }
      if (t === e) {
        H = null;
        break;
      }
      if (((n = t.sibling), n !== null)) {
        (n.return = t.return), (H = n);
        break;
      }
      H = t.return;
    }
  }
  function As(e) {
    for (; H !== null; ) {
      var t = H;
      if (t === e) {
        H = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        (n.return = t.return), (H = n);
        break;
      }
      H = t.return;
    }
  }
  function Bs(e) {
    for (; H !== null; ) {
      var t = H;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              Rl(4, t);
            } catch (d) {
              Ce(t, n, d);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var l = t.return;
              try {
                r.componentDidMount();
              } catch (d) {
                Ce(t, l, d);
              }
            }
            var u = t.return;
            try {
              Ni(t);
            } catch (d) {
              Ce(t, u, d);
            }
            break;
          case 5:
            var o = t.return;
            try {
              Ni(t);
            } catch (d) {
              Ce(t, o, d);
            }
        }
      } catch (d) {
        Ce(t, t.return, d);
      }
      if (t === e) {
        H = null;
        break;
      }
      var c = t.sibling;
      if (c !== null) {
        (c.return = t.return), (H = c);
        break;
      }
      H = t.return;
    }
  }
  var gd = Math.ceil,
    Ll = q.ReactCurrentDispatcher,
    Ri = q.ReactCurrentOwner,
    ot = q.ReactCurrentBatchConfig,
    re = 0,
    Te = null,
    _e = null,
    Ie = 0,
    tt = 0,
    Mn = Bt(0),
    Le = 0,
    Er = null,
    sn = 0,
    zl = 0,
    Li = 0,
    Cr = null,
    Ke = null,
    zi = 0,
    Un = 1 / 0,
    Tt = null,
    Tl = !1,
    Ti = null,
    Yt = null,
    jl = !1,
    Gt = null,
    Dl = 0,
    Nr = 0,
    ji = null,
    Il = -1,
    Ol = 0;
  function Be() {
    return re & 6 ? Ne() : Il !== -1 ? Il : (Il = Ne());
  }
  function Xt(e) {
    return e.mode & 1
      ? re & 2 && Ie !== 0
        ? Ie & -Ie
        : td.transition !== null
        ? (Ol === 0 && (Ol = Io()), Ol)
        : ((e = fe),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Wo(e.type))),
          e)
      : 1;
  }
  function ht(e, t, n, r) {
    if (50 < Nr) throw ((Nr = 0), (ji = null), Error(a(185)));
    Xn(e, n, r),
      (!(re & 2) || e !== Te) &&
        (e === Te && (!(re & 2) && (zl |= n), Le === 4 && Jt(e, Ie)),
        Ye(e, r),
        n === 1 &&
          re === 0 &&
          !(t.mode & 1) &&
          ((Un = Ne() + 500), sl && Wt()));
  }
  function Ye(e, t) {
    var n = e.callbackNode;
    ef(e, t);
    var r = Vr(e, e === Te ? Ie : 0);
    if (r === 0)
      n !== null && To(n), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && To(n), t === 1))
        e.tag === 0 ? ed(Ws.bind(null, e)) : Ra(Ws.bind(null, e)),
          Jf(function () {
            !(re & 6) && Wt();
          }),
          (n = null);
      else {
        switch (Oo(r)) {
          case 1:
            n = fu;
            break;
          case 4:
            n = jo;
            break;
          case 16:
            n = Ar;
            break;
          case 536870912:
            n = Do;
            break;
          default:
            n = Ar;
        }
        n = Zs(n, Hs.bind(null, e));
      }
      (e.callbackPriority = t), (e.callbackNode = n);
    }
  }
  function Hs(e, t) {
    if (((Il = -1), (Ol = 0), re & 6)) throw Error(a(327));
    var n = e.callbackNode;
    if ($n() && e.callbackNode !== n) return null;
    var r = Vr(e, e === Te ? Ie : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = Fl(e, r);
    else {
      t = r;
      var l = re;
      re |= 2;
      var u = Qs();
      (Te !== e || Ie !== t) && ((Tt = null), (Un = Ne() + 500), fn(e, t));
      do
        try {
          Sd();
          break;
        } catch (c) {
          Vs(e, c);
        }
      while (!0);
      Ju(),
        (Ll.current = u),
        (re = l),
        _e !== null ? (t = 0) : ((Te = null), (Ie = 0), (t = Le));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((l = du(e)), l !== 0 && ((r = l), (t = Di(e, l)))),
        t === 1)
      )
        throw ((n = Er), fn(e, 0), Jt(e, r), Ye(e, Ne()), n);
      if (t === 6) Jt(e, r);
      else {
        if (
          ((l = e.current.alternate),
          !(r & 30) &&
            !wd(l) &&
            ((t = Fl(e, r)),
            t === 2 && ((u = du(e)), u !== 0 && ((r = u), (t = Di(e, u)))),
            t === 1))
        )
          throw ((n = Er), fn(e, 0), Jt(e, r), Ye(e, Ne()), n);
        switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(a(345));
          case 2:
            dn(e, Ke, Tt);
            break;
          case 3:
            if (
              (Jt(e, r),
              (r & 130023424) === r && ((t = zi + 500 - Ne()), 10 < t))
            ) {
              if (Vr(e, 0) !== 0) break;
              if (((l = e.suspendedLanes), (l & r) !== r)) {
                Be(), (e.pingedLanes |= e.suspendedLanes & l);
                break;
              }
              e.timeoutHandle = $u(dn.bind(null, e, Ke, Tt), t);
              break;
            }
            dn(e, Ke, Tt);
            break;
          case 4:
            if ((Jt(e, r), (r & 4194240) === r)) break;
            for (t = e.eventTimes, l = -1; 0 < r; ) {
              var o = 31 - st(r);
              (u = 1 << o), (o = t[o]), o > l && (l = o), (r &= ~u);
            }
            if (
              ((r = l),
              (r = Ne() - r),
              (r =
                (120 > r
                  ? 120
                  : 480 > r
                  ? 480
                  : 1080 > r
                  ? 1080
                  : 1920 > r
                  ? 1920
                  : 3e3 > r
                  ? 3e3
                  : 4320 > r
                  ? 4320
                  : 1960 * gd(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = $u(dn.bind(null, e, Ke, Tt), r);
              break;
            }
            dn(e, Ke, Tt);
            break;
          case 5:
            dn(e, Ke, Tt);
            break;
          default:
            throw Error(a(329));
        }
      }
    }
    return Ye(e, Ne()), e.callbackNode === n ? Hs.bind(null, e) : null;
  }
  function Di(e, t) {
    var n = Cr;
    return (
      e.current.memoizedState.isDehydrated && (fn(e, t).flags |= 256),
      (e = Fl(e, t)),
      e !== 2 && ((t = Ke), (Ke = n), t !== null && Ii(t)),
      e
    );
  }
  function Ii(e) {
    Ke === null ? (Ke = e) : Ke.push.apply(Ke, e);
  }
  function wd(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && ((n = n.stores), n !== null))
          for (var r = 0; r < n.length; r++) {
            var l = n[r],
              u = l.getSnapshot;
            l = l.value;
            try {
              if (!ct(u(), l)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
        (n.return = t), (t = n);
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function Jt(e, t) {
    for (
      t &= ~Li,
        t &= ~zl,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;

    ) {
      var n = 31 - st(t),
        r = 1 << n;
      (e[n] = -1), (t &= ~r);
    }
  }
  function Ws(e) {
    if (re & 6) throw Error(a(327));
    $n();
    var t = Vr(e, 0);
    if (!(t & 1)) return Ye(e, Ne()), null;
    var n = Fl(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = du(e);
      r !== 0 && ((t = r), (n = Di(e, r)));
    }
    if (n === 1) throw ((n = Er), fn(e, 0), Jt(e, t), Ye(e, Ne()), n);
    if (n === 6) throw Error(a(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      dn(e, Ke, Tt),
      Ye(e, Ne()),
      null
    );
  }
  function Oi(e, t) {
    var n = re;
    re |= 1;
    try {
      return e(t);
    } finally {
      (re = n), re === 0 && ((Un = Ne() + 500), sl && Wt());
    }
  }
  function cn(e) {
    Gt !== null && Gt.tag === 0 && !(re & 6) && $n();
    var t = re;
    re |= 1;
    var n = ot.transition,
      r = fe;
    try {
      if (((ot.transition = null), (fe = 1), e)) return e();
    } finally {
      (fe = r), (ot.transition = n), (re = t), !(re & 6) && Wt();
    }
  }
  function Fi() {
    (tt = Mn.current), he(Mn);
  }
  function fn(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), Xf(n)), _e !== null))
      for (n = _e.return; n !== null; ) {
        var r = n;
        switch ((Qu(r), r.tag)) {
          case 1:
            (r = r.type.childContextTypes), r != null && ol();
            break;
          case 3:
            In(), he(We), he(Fe), li();
            break;
          case 5:
            ni(r);
            break;
          case 4:
            In();
            break;
          case 13:
            he(we);
            break;
          case 19:
            he(we);
            break;
          case 10:
            Zu(r.type._context);
            break;
          case 22:
          case 23:
            Fi();
        }
        n = n.return;
      }
    if (
      ((Te = e),
      (_e = e = Zt(e.current, null)),
      (Ie = tt = t),
      (Le = 0),
      (Er = null),
      (Li = zl = sn = 0),
      (Ke = Cr = null),
      un !== null)
    ) {
      for (t = 0; t < un.length; t++)
        if (((n = un[t]), (r = n.interleaved), r !== null)) {
          n.interleaved = null;
          var l = r.next,
            u = n.pending;
          if (u !== null) {
            var o = u.next;
            (u.next = l), (r.next = o);
          }
          n.pending = r;
        }
      un = null;
    }
    return e;
  }
  function Vs(e, t) {
    do {
      var n = _e;
      try {
        if ((Ju(), (wl.current = El), xl)) {
          for (var r = xe.memoizedState; r !== null; ) {
            var l = r.queue;
            l !== null && (l.pending = null), (r = r.next);
          }
          xl = !1;
        }
        if (
          ((an = 0),
          (ze = Re = xe = null),
          (vr = !1),
          (gr = 0),
          (Ri.current = null),
          n === null || n.return === null)
        ) {
          (Le = 1), (Er = t), (_e = null);
          break;
        }
        e: {
          var u = e,
            o = n.return,
            c = n,
            d = t;
          if (
            ((t = Ie),
            (c.flags |= 32768),
            d !== null && typeof d == "object" && typeof d.then == "function")
          ) {
            var x = d,
              R = c,
              L = R.tag;
            if (!(R.mode & 1) && (L === 0 || L === 11 || L === 15)) {
              var P = R.alternate;
              P
                ? ((R.updateQueue = P.updateQueue),
                  (R.memoizedState = P.memoizedState),
                  (R.lanes = P.lanes))
                : ((R.updateQueue = null), (R.memoizedState = null));
            }
            var A = hs(o);
            if (A !== null) {
              (A.flags &= -257),
                ys(A, o, c, u, t),
                A.mode & 1 && ms(u, x, t),
                (t = A),
                (d = x);
              var Q = t.updateQueue;
              if (Q === null) {
                var K = new Set();
                K.add(d), (t.updateQueue = K);
              } else Q.add(d);
              break e;
            } else {
              if (!(t & 1)) {
                ms(u, x, t), Mi();
                break e;
              }
              d = Error(a(426));
            }
          } else if (ve && c.mode & 1) {
            var Pe = hs(o);
            if (Pe !== null) {
              !(Pe.flags & 65536) && (Pe.flags |= 256),
                ys(Pe, o, c, u, t),
                Gu(On(d, c));
              break e;
            }
          }
          (u = d = On(d, c)),
            Le !== 4 && (Le = 2),
            Cr === null ? (Cr = [u]) : Cr.push(u),
            (u = o);
          do {
            switch (u.tag) {
              case 3:
                (u.flags |= 65536), (t &= -t), (u.lanes |= t);
                var v = ds(u, d, t);
                $a(u, v);
                break e;
              case 1:
                c = d;
                var m = u.type,
                  g = u.stateNode;
                if (
                  !(u.flags & 128) &&
                  (typeof m.getDerivedStateFromError == "function" ||
                    (g !== null &&
                      typeof g.componentDidCatch == "function" &&
                      (Yt === null || !Yt.has(g))))
                ) {
                  (u.flags |= 65536), (t &= -t), (u.lanes |= t);
                  var T = ps(u, c, t);
                  $a(u, T);
                  break e;
                }
            }
            u = u.return;
          } while (u !== null);
        }
        Ys(n);
      } catch (Y) {
        (t = Y), _e === n && n !== null && (_e = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Qs() {
    var e = Ll.current;
    return (Ll.current = El), e === null ? El : e;
  }
  function Mi() {
    (Le === 0 || Le === 3 || Le === 2) && (Le = 4),
      Te === null || (!(sn & 268435455) && !(zl & 268435455)) || Jt(Te, Ie);
  }
  function Fl(e, t) {
    var n = re;
    re |= 2;
    var r = Qs();
    (Te !== e || Ie !== t) && ((Tt = null), fn(e, t));
    do
      try {
        xd();
        break;
      } catch (l) {
        Vs(e, l);
      }
    while (!0);
    if ((Ju(), (re = n), (Ll.current = r), _e !== null)) throw Error(a(261));
    return (Te = null), (Ie = 0), Le;
  }
  function xd() {
    for (; _e !== null; ) Ks(_e);
  }
  function Sd() {
    for (; _e !== null && !Qc(); ) Ks(_e);
  }
  function Ks(e) {
    var t = Js(e.alternate, e, tt);
    (e.memoizedProps = e.pendingProps),
      t === null ? Ys(e) : (_e = t),
      (Ri.current = null);
  }
  function Ys(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), t.flags & 32768)) {
        if (((n = md(n, t)), n !== null)) {
          (n.flags &= 32767), (_e = n);
          return;
        }
        if (e !== null)
          (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        else {
          (Le = 6), (_e = null);
          return;
        }
      } else if (((n = pd(n, t, tt)), n !== null)) {
        _e = n;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        _e = t;
        return;
      }
      _e = t = e;
    } while (t !== null);
    Le === 0 && (Le = 5);
  }
  function dn(e, t, n) {
    var r = fe,
      l = ot.transition;
    try {
      (ot.transition = null), (fe = 1), kd(e, t, n, r);
    } finally {
      (ot.transition = l), (fe = r);
    }
    return null;
  }
  function kd(e, t, n, r) {
    do $n();
    while (Gt !== null);
    if (re & 6) throw Error(a(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
      throw Error(a(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var u = n.lanes | n.childLanes;
    if (
      (tf(e, u),
      e === Te && ((_e = Te = null), (Ie = 0)),
      (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
        jl ||
        ((jl = !0),
        Zs(Ar, function () {
          return $n(), null;
        })),
      (u = (n.flags & 15990) !== 0),
      n.subtreeFlags & 15990 || u)
    ) {
      (u = ot.transition), (ot.transition = null);
      var o = fe;
      fe = 1;
      var c = re;
      (re |= 4),
        (Ri.current = null),
        yd(e, n),
        Ms(n, e),
        Hf(Mu),
        (Yr = !!Fu),
        (Mu = Fu = null),
        (e.current = n),
        vd(n),
        Kc(),
        (re = c),
        (fe = o),
        (ot.transition = u);
    } else e.current = n;
    if (
      (jl && ((jl = !1), (Gt = e), (Dl = l)),
      (u = e.pendingLanes),
      u === 0 && (Yt = null),
      Xc(n.stateNode),
      Ye(e, Ne()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
    if (Tl) throw ((Tl = !1), (e = Ti), (Ti = null), e);
    return (
      Dl & 1 && e.tag !== 0 && $n(),
      (u = e.pendingLanes),
      u & 1 ? (e === ji ? Nr++ : ((Nr = 0), (ji = e))) : (Nr = 0),
      Wt(),
      null
    );
  }
  function $n() {
    if (Gt !== null) {
      var e = Oo(Dl),
        t = ot.transition,
        n = fe;
      try {
        if (((ot.transition = null), (fe = 16 > e ? 16 : e), Gt === null))
          var r = !1;
        else {
          if (((e = Gt), (Gt = null), (Dl = 0), re & 6)) throw Error(a(331));
          var l = re;
          for (re |= 4, H = e.current; H !== null; ) {
            var u = H,
              o = u.child;
            if (H.flags & 16) {
              var c = u.deletions;
              if (c !== null) {
                for (var d = 0; d < c.length; d++) {
                  var x = c[d];
                  for (H = x; H !== null; ) {
                    var R = H;
                    switch (R.tag) {
                      case 0:
                      case 11:
                      case 15:
                        kr(8, R, u);
                    }
                    var L = R.child;
                    if (L !== null) (L.return = R), (H = L);
                    else
                      for (; H !== null; ) {
                        R = H;
                        var P = R.sibling,
                          A = R.return;
                        if ((js(R), R === x)) {
                          H = null;
                          break;
                        }
                        if (P !== null) {
                          (P.return = A), (H = P);
                          break;
                        }
                        H = A;
                      }
                  }
                }
                var Q = u.alternate;
                if (Q !== null) {
                  var K = Q.child;
                  if (K !== null) {
                    Q.child = null;
                    do {
                      var Pe = K.sibling;
                      (K.sibling = null), (K = Pe);
                    } while (K !== null);
                  }
                }
                H = u;
              }
            }
            if (u.subtreeFlags & 2064 && o !== null) (o.return = u), (H = o);
            else
              e: for (; H !== null; ) {
                if (((u = H), u.flags & 2048))
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      kr(9, u, u.return);
                  }
                var v = u.sibling;
                if (v !== null) {
                  (v.return = u.return), (H = v);
                  break e;
                }
                H = u.return;
              }
          }
          var m = e.current;
          for (H = m; H !== null; ) {
            o = H;
            var g = o.child;
            if (o.subtreeFlags & 2064 && g !== null) (g.return = o), (H = g);
            else
              e: for (o = m; H !== null; ) {
                if (((c = H), c.flags & 2048))
                  try {
                    switch (c.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Rl(9, c);
                    }
                  } catch (Y) {
                    Ce(c, c.return, Y);
                  }
                if (c === o) {
                  H = null;
                  break e;
                }
                var T = c.sibling;
                if (T !== null) {
                  (T.return = c.return), (H = T);
                  break e;
                }
                H = c.return;
              }
          }
          if (
            ((re = l),
            Wt(),
            vt && typeof vt.onPostCommitFiberRoot == "function")
          )
            try {
              vt.onPostCommitFiberRoot(Br, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        (fe = n), (ot.transition = t);
      }
    }
    return !1;
  }
  function Gs(e, t, n) {
    (t = On(n, t)),
      (t = ds(e, t, 1)),
      (e = Qt(e, t, 1)),
      (t = Be()),
      e !== null && (Xn(e, 1, t), Ye(e, t));
  }
  function Ce(e, t, n) {
    if (e.tag === 3) Gs(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Gs(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof r.componentDidCatch == "function" &&
              (Yt === null || !Yt.has(r)))
          ) {
            (e = On(n, e)),
              (e = ps(t, e, 1)),
              (t = Qt(t, e, 1)),
              (e = Be()),
              t !== null && (Xn(t, 1, e), Ye(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function Ed(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
      (t = Be()),
      (e.pingedLanes |= e.suspendedLanes & n),
      Te === e &&
        (Ie & n) === n &&
        (Le === 4 || (Le === 3 && (Ie & 130023424) === Ie && 500 > Ne() - zi)
          ? fn(e, 0)
          : (Li |= n)),
      Ye(e, t);
  }
  function Xs(e, t) {
    t === 0 &&
      (e.mode & 1
        ? ((t = Wr), (Wr <<= 1), !(Wr & 130023424) && (Wr = 4194304))
        : (t = 1));
    var n = Be();
    (e = Rt(e, t)), e !== null && (Xn(e, t, n), Ye(e, n));
  }
  function Cd(e) {
    var t = e.memoizedState,
      n = 0;
    t !== null && (n = t.retryLane), Xs(e, n);
  }
  function Nd(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode,
          l = e.memoizedState;
        l !== null && (n = l.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(a(314));
    }
    r !== null && r.delete(t), Xs(e, n);
  }
  var Js;
  Js = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || We.current) Qe = !0;
      else {
        if (!(e.lanes & n) && !(t.flags & 128)) return (Qe = !1), dd(e, t, n);
        Qe = !!(e.flags & 131072);
      }
    else (Qe = !1), ve && t.flags & 1048576 && La(t, fl, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        Pl(e, t), (e = t.pendingProps);
        var l = _n(t, Fe.current);
        Dn(t, n), (l = oi(null, t, r, e, l, n));
        var u = ai();
        return (
          (t.flags |= 1),
          typeof l == "object" &&
          l !== null &&
          typeof l.render == "function" &&
          l.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              Ve(r) ? ((u = !0), al(t)) : (u = !1),
              (t.memoizedState =
                l.state !== null && l.state !== void 0 ? l.state : null),
              ei(t),
              (l.updater = Cl),
              (t.stateNode = l),
              (l._reactInternals = t),
              mi(t, r, e, n),
              (t = gi(null, t, r, !0, u, n)))
            : ((t.tag = 0), ve && u && Vu(t), Ae(null, t, l, n), (t = t.child)),
          t
        );
      case 16:
        r = t.elementType;
        e: {
          switch (
            (Pl(e, t),
            (e = t.pendingProps),
            (l = r._init),
            (r = l(r._payload)),
            (t.type = r),
            (l = t.tag = _d(r)),
            (e = dt(r, e)),
            l)
          ) {
            case 0:
              t = vi(null, t, r, e, n);
              break e;
            case 1:
              t = ks(null, t, r, e, n);
              break e;
            case 11:
              t = vs(null, t, r, e, n);
              break e;
            case 14:
              t = gs(null, t, r, dt(r.type, e), n);
              break e;
          }
          throw Error(a(306, r, ""));
        }
        return t;
      case 0:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : dt(r, l)),
          vi(e, t, r, l, n)
        );
      case 1:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : dt(r, l)),
          ks(e, t, r, l, n)
        );
      case 3:
        e: {
          if ((Es(t), e === null)) throw Error(a(387));
          (r = t.pendingProps),
            (u = t.memoizedState),
            (l = u.element),
            Ua(e, t),
            vl(t, r, null, n);
          var o = t.memoizedState;
          if (((r = o.element), u.isDehydrated))
            if (
              ((u = {
                element: r,
                isDehydrated: !1,
                cache: o.cache,
                pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                transitions: o.transitions,
              }),
              (t.updateQueue.baseState = u),
              (t.memoizedState = u),
              t.flags & 256)
            ) {
              (l = On(Error(a(423)), t)), (t = Cs(e, t, r, n, l));
              break e;
            } else if (r !== l) {
              (l = On(Error(a(424)), t)), (t = Cs(e, t, r, n, l));
              break e;
            } else
              for (
                et = At(t.stateNode.containerInfo.firstChild),
                  be = t,
                  ve = !0,
                  ft = null,
                  n = Fa(t, null, r, n),
                  t.child = n;
                n;

              )
                (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
          else {
            if ((zn(), r === l)) {
              t = zt(e, t, n);
              break e;
            }
            Ae(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          Ba(t),
          e === null && Yu(t),
          (r = t.type),
          (l = t.pendingProps),
          (u = e !== null ? e.memoizedProps : null),
          (o = l.children),
          Uu(r, l) ? (o = null) : u !== null && Uu(r, u) && (t.flags |= 32),
          Ss(e, t),
          Ae(e, t, o, n),
          t.child
        );
      case 6:
        return e === null && Yu(t), null;
      case 13:
        return Ns(e, t, n);
      case 4:
        return (
          ti(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = Tn(t, null, r, n)) : Ae(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : dt(r, l)),
          vs(e, t, r, l, n)
        );
      case 7:
        return Ae(e, t, t.pendingProps, n), t.child;
      case 8:
        return Ae(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return Ae(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (
            ((r = t.type._context),
            (l = t.pendingProps),
            (u = t.memoizedProps),
            (o = l.value),
            pe(ml, r._currentValue),
            (r._currentValue = o),
            u !== null)
          )
            if (ct(u.value, o)) {
              if (u.children === l.children && !We.current) {
                t = zt(e, t, n);
                break e;
              }
            } else
              for (u = t.child, u !== null && (u.return = t); u !== null; ) {
                var c = u.dependencies;
                if (c !== null) {
                  o = u.child;
                  for (var d = c.firstContext; d !== null; ) {
                    if (d.context === r) {
                      if (u.tag === 1) {
                        (d = Lt(-1, n & -n)), (d.tag = 2);
                        var x = u.updateQueue;
                        if (x !== null) {
                          x = x.shared;
                          var R = x.pending;
                          R === null
                            ? (d.next = d)
                            : ((d.next = R.next), (R.next = d)),
                            (x.pending = d);
                        }
                      }
                      (u.lanes |= n),
                        (d = u.alternate),
                        d !== null && (d.lanes |= n),
                        qu(u.return, n, t),
                        (c.lanes |= n);
                      break;
                    }
                    d = d.next;
                  }
                } else if (u.tag === 10) o = u.type === t.type ? null : u.child;
                else if (u.tag === 18) {
                  if (((o = u.return), o === null)) throw Error(a(341));
                  (o.lanes |= n),
                    (c = o.alternate),
                    c !== null && (c.lanes |= n),
                    qu(o, n, t),
                    (o = u.sibling);
                } else o = u.child;
                if (o !== null) o.return = u;
                else
                  for (o = u; o !== null; ) {
                    if (o === t) {
                      o = null;
                      break;
                    }
                    if (((u = o.sibling), u !== null)) {
                      (u.return = o.return), (o = u);
                      break;
                    }
                    o = o.return;
                  }
                u = o;
              }
          Ae(e, t, l.children, n), (t = t.child);
        }
        return t;
      case 9:
        return (
          (l = t.type),
          (r = t.pendingProps.children),
          Dn(t, n),
          (l = ut(l)),
          (r = r(l)),
          (t.flags |= 1),
          Ae(e, t, r, n),
          t.child
        );
      case 14:
        return (
          (r = t.type),
          (l = dt(r, t.pendingProps)),
          (l = dt(r.type, l)),
          gs(e, t, r, l, n)
        );
      case 15:
        return ws(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : dt(r, l)),
          Pl(e, t),
          (t.tag = 1),
          Ve(r) ? ((e = !0), al(t)) : (e = !1),
          Dn(t, n),
          cs(t, r, l),
          mi(t, r, l, n),
          gi(null, t, r, !0, e, n)
        );
      case 19:
        return _s(e, t, n);
      case 22:
        return xs(e, t, n);
    }
    throw Error(a(156, t.tag));
  };
  function Zs(e, t) {
    return zo(e, t);
  }
  function Pd(e, t, n, r) {
    (this.tag = e),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = r),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function at(e, t, n, r) {
    return new Pd(e, t, n, r);
  }
  function Ui(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function _d(e) {
    if (typeof e == "function") return Ui(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === nt)) return 11;
      if (e === yt) return 14;
    }
    return 2;
  }
  function Zt(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = at(e.tag, t, e.key, e.mode)),
          (n.elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = e.flags & 14680064),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      n
    );
  }
  function Ml(e, t, n, r, l, u) {
    var o = 2;
    if (((r = e), typeof e == "function")) Ui(e) && (o = 1);
    else if (typeof e == "string") o = 5;
    else
      e: switch (e) {
        case ae:
          return pn(n.children, l, u, t);
        case ge:
          (o = 8), (l |= 8);
          break;
        case se:
          return (
            (e = at(12, n, t, l | 2)), (e.elementType = se), (e.lanes = u), e
          );
        case Oe:
          return (e = at(13, n, t, l)), (e.elementType = Oe), (e.lanes = u), e;
        case Je:
          return (e = at(19, n, t, l)), (e.elementType = Je), (e.lanes = u), e;
        case Ee:
          return Ul(n, l, u, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case ke:
                o = 10;
                break e;
              case Xe:
                o = 9;
                break e;
              case nt:
                o = 11;
                break e;
              case yt:
                o = 14;
                break e;
              case He:
                (o = 16), (r = null);
                break e;
            }
          throw Error(a(130, e == null ? e : typeof e, ""));
      }
    return (
      (t = at(o, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = u), t
    );
  }
  function pn(e, t, n, r) {
    return (e = at(7, e, r, t)), (e.lanes = n), e;
  }
  function Ul(e, t, n, r) {
    return (
      (e = at(22, e, r, t)),
      (e.elementType = Ee),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function $i(e, t, n) {
    return (e = at(6, e, null, t)), (e.lanes = n), e;
  }
  function Ai(e, t, n) {
    return (
      (t = at(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function Rd(e, t, n, r, l) {
    (this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = pu(0)),
      (this.expirationTimes = pu(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = pu(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = l),
      (this.mutableSourceEagerHydrationData = null);
  }
  function Bi(e, t, n, r, l, u, o, c, d) {
    return (
      (e = new Rd(e, t, n, c, d)),
      t === 1 ? ((t = 1), u === !0 && (t |= 8)) : (t = 0),
      (u = at(3, null, null, t)),
      (e.current = u),
      (u.stateNode = e),
      (u.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      ei(u),
      e
    );
  }
  function Ld(e, t, n) {
    var r =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: oe,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function qs(e) {
    if (!e) return Ht;
    e = e._reactInternals;
    e: {
      if (en(e) !== e || e.tag !== 1) throw Error(a(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (Ve(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(a(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (Ve(n)) return Pa(e, n, t);
    }
    return t;
  }
  function bs(e, t, n, r, l, u, o, c, d) {
    return (
      (e = Bi(n, r, !0, e, l, u, o, c, d)),
      (e.context = qs(null)),
      (n = e.current),
      (r = Be()),
      (l = Xt(n)),
      (u = Lt(r, l)),
      (u.callback = t ?? null),
      Qt(n, u, l),
      (e.current.lanes = l),
      Xn(e, l, r),
      Ye(e, r),
      e
    );
  }
  function $l(e, t, n, r) {
    var l = t.current,
      u = Be(),
      o = Xt(l);
    return (
      (n = qs(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = Lt(u, o)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = Qt(l, t, o)),
      e !== null && (ht(e, l, o, u), yl(e, l, o)),
      o
    );
  }
  function Al(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function ec(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Hi(e, t) {
    ec(e, t), (e = e.alternate) && ec(e, t);
  }
  var tc =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function Wi(e) {
    this._internalRoot = e;
  }
  (Bl.prototype.render = Wi.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(a(409));
      $l(e, t, null, null);
    }),
    (Bl.prototype.unmount = Wi.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          cn(function () {
            $l(null, e, null, null);
          }),
            (t[Ct] = null);
        }
      });
  function Bl(e) {
    this._internalRoot = e;
  }
  Bl.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Uo();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Mt.length && t !== 0 && t < Mt[n].priority; n++);
      Mt.splice(n, 0, e), n === 0 && Bo(e);
    }
  };
  function Vi(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function Hl(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function nc() {}
  function zd(e, t, n, r, l) {
    if (l) {
      if (typeof r == "function") {
        var u = r;
        r = function () {
          var x = Al(o);
          u.call(x);
        };
      }
      var o = bs(t, r, e, 0, null, !1, !1, "", nc);
      return (
        (e._reactRootContainer = o),
        (e[Ct] = o.current),
        sr(e.nodeType === 8 ? e.parentNode : e),
        cn(),
        o
      );
    }
    for (; (l = e.lastChild); ) e.removeChild(l);
    if (typeof r == "function") {
      var c = r;
      r = function () {
        var x = Al(d);
        c.call(x);
      };
    }
    var d = Bi(e, 0, !1, null, null, !1, !1, "", nc);
    return (
      (e._reactRootContainer = d),
      (e[Ct] = d.current),
      sr(e.nodeType === 8 ? e.parentNode : e),
      cn(function () {
        $l(t, d, n, r);
      }),
      d
    );
  }
  function Wl(e, t, n, r, l) {
    var u = n._reactRootContainer;
    if (u) {
      var o = u;
      if (typeof l == "function") {
        var c = l;
        l = function () {
          var d = Al(o);
          c.call(d);
        };
      }
      $l(t, o, e, l);
    } else o = zd(n, t, e, l, r);
    return Al(o);
  }
  (Fo = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Gn(t.pendingLanes);
          n !== 0 &&
            (mu(t, n | 1), Ye(t, Ne()), !(re & 6) && ((Un = Ne() + 500), Wt()));
        }
        break;
      case 13:
        cn(function () {
          var r = Rt(e, 1);
          if (r !== null) {
            var l = Be();
            ht(r, e, 1, l);
          }
        }),
          Hi(e, 1);
    }
  }),
    (hu = function (e) {
      if (e.tag === 13) {
        var t = Rt(e, 134217728);
        if (t !== null) {
          var n = Be();
          ht(t, e, 134217728, n);
        }
        Hi(e, 134217728);
      }
    }),
    (Mo = function (e) {
      if (e.tag === 13) {
        var t = Xt(e),
          n = Rt(e, t);
        if (n !== null) {
          var r = Be();
          ht(n, e, t, r);
        }
        Hi(e, t);
      }
    }),
    (Uo = function () {
      return fe;
    }),
    ($o = function (e, t) {
      var n = fe;
      try {
        return (fe = e), t();
      } finally {
        fe = n;
      }
    }),
    (ou = function (e, t, n) {
      switch (t) {
        case "input":
          if ((bl(e, n), (t = n.name), n.type === "radio" && t != null)) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
              ),
                t = 0;
              t < n.length;
              t++
            ) {
              var r = n[t];
              if (r !== e && r.form === e.form) {
                var l = il(r);
                if (!l) throw Error(a(90));
                ao(r), bl(r, l);
              }
            }
          }
          break;
        case "textarea":
          mo(e, n);
          break;
        case "select":
          (t = n.value), t != null && hn(e, !!n.multiple, t, !1);
      }
    }),
    (Eo = Oi),
    (Co = cn);
  var Td = { usingClientEntryPoint: !1, Events: [dr, Nn, il, So, ko, Oi] },
    Pr = {
      findFiberByHostInstance: tn,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    jd = {
      bundleType: Pr.bundleType,
      version: Pr.version,
      rendererPackageName: Pr.rendererPackageName,
      rendererConfig: Pr.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: q.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = Ro(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: Pr.findFiberByHostInstance,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Vl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Vl.isDisabled && Vl.supportsFiber)
      try {
        (Br = Vl.inject(jd)), (vt = Vl);
      } catch {}
  }
  return (
    (Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Td),
    (Ge.createPortal = function (e, t) {
      var n =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Vi(t)) throw Error(a(200));
      return Ld(e, t, null, n);
    }),
    (Ge.createRoot = function (e, t) {
      if (!Vi(e)) throw Error(a(299));
      var n = !1,
        r = "",
        l = tc;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
        (t = Bi(e, 1, !1, null, null, n, !1, r, l)),
        (e[Ct] = t.current),
        sr(e.nodeType === 8 ? e.parentNode : e),
        new Wi(t)
      );
    }),
    (Ge.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(a(188))
          : ((e = Object.keys(e).join(",")), Error(a(268, e)));
      return (e = Ro(t)), (e = e === null ? null : e.stateNode), e;
    }),
    (Ge.flushSync = function (e) {
      return cn(e);
    }),
    (Ge.hydrate = function (e, t, n) {
      if (!Hl(t)) throw Error(a(200));
      return Wl(null, e, t, !0, n);
    }),
    (Ge.hydrateRoot = function (e, t, n) {
      if (!Vi(e)) throw Error(a(405));
      var r = (n != null && n.hydratedSources) || null,
        l = !1,
        u = "",
        o = tc;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (u = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
        (t = bs(t, null, e, 1, n ?? null, l, !1, u, o)),
        (e[Ct] = t.current),
        sr(e),
        r)
      )
        for (e = 0; e < r.length; e++)
          (n = r[e]),
            (l = n._getVersion),
            (l = l(n._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [n, l])
              : t.mutableSourceEagerHydrationData.push(n, l);
      return new Bl(t);
    }),
    (Ge.render = function (e, t, n) {
      if (!Hl(t)) throw Error(a(200));
      return Wl(null, e, t, !1, n);
    }),
    (Ge.unmountComponentAtNode = function (e) {
      if (!Hl(e)) throw Error(a(40));
      return e._reactRootContainer
        ? (cn(function () {
            Wl(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[Ct] = null);
            });
          }),
          !0)
        : !1;
    }),
    (Ge.unstable_batchedUpdates = Oi),
    (Ge.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!Hl(n)) throw Error(a(200));
      if (e == null || e._reactInternals === void 0) throw Error(a(38));
      return Wl(e, t, n, !1, r);
    }),
    (Ge.version = "18.3.1-next-f1338f8080-20240426"),
    Ge
  );
}
var cc;
function Ad() {
  if (cc) return Yi.exports;
  cc = 1;
  function i() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (s) {
        console.error(s);
      }
  }
  return i(), (Yi.exports = $d()), Yi.exports;
}
var fc;
function Bd() {
  if (fc) return Ql;
  fc = 1;
  var i = Ad();
  return (Ql.createRoot = i.createRoot), (Ql.hydrateRoot = i.hydrateRoot), Ql;
}
var Hd = Bd(),
  Rr = {},
  dc;
function Wd() {
  if (dc) return Rr;
  (dc = 1),
    Object.defineProperty(Rr, "__esModule", { value: !0 }),
    (Rr.parse = k),
    (Rr.serialize = S);
  const i = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
    s = /^[\u0021-\u003A\u003C-\u007E]*$/,
    a =
      /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
    p = /^[\u0020-\u003A\u003D-\u007E]*$/,
    f = Object.prototype.toString,
    h = (() => {
      const N = function () {};
      return (N.prototype = Object.create(null)), N;
    })();
  function k(N, U) {
    const z = new h(),
      M = N.length;
    if (M < 2) return z;
    const D = (U == null ? void 0 : U.decode) || j;
    let O = 0;
    do {
      const B = N.indexOf("=", O);
      if (B === -1) break;
      const W = N.indexOf(";", O),
        q = W === -1 ? M : W;
      if (B > q) {
        O = N.lastIndexOf(";", B - 1) + 1;
        continue;
      }
      const ne = C(N, O, B),
        oe = w(N, B, ne),
        ae = N.slice(ne, oe);
      if (z[ae] === void 0) {
        let ge = C(N, B + 1, q),
          se = w(N, q, ge);
        const ke = D(N.slice(ge, se));
        z[ae] = ke;
      }
      O = q + 1;
    } while (O < M);
    return z;
  }
  function C(N, U, z) {
    do {
      const M = N.charCodeAt(U);
      if (M !== 32 && M !== 9) return U;
    } while (++U < z);
    return z;
  }
  function w(N, U, z) {
    for (; U > z; ) {
      const M = N.charCodeAt(--U);
      if (M !== 32 && M !== 9) return U + 1;
    }
    return z;
  }
  function S(N, U, z) {
    const M = (z == null ? void 0 : z.encode) || encodeURIComponent;
    if (!i.test(N)) throw new TypeError(`argument name is invalid: ${N}`);
    const D = M(U);
    if (!s.test(D)) throw new TypeError(`argument val is invalid: ${U}`);
    let O = N + "=" + D;
    if (!z) return O;
    if (z.maxAge !== void 0) {
      if (!Number.isInteger(z.maxAge))
        throw new TypeError(`option maxAge is invalid: ${z.maxAge}`);
      O += "; Max-Age=" + z.maxAge;
    }
    if (z.domain) {
      if (!a.test(z.domain))
        throw new TypeError(`option domain is invalid: ${z.domain}`);
      O += "; Domain=" + z.domain;
    }
    if (z.path) {
      if (!p.test(z.path))
        throw new TypeError(`option path is invalid: ${z.path}`);
      O += "; Path=" + z.path;
    }
    if (z.expires) {
      if (!I(z.expires) || !Number.isFinite(z.expires.valueOf()))
        throw new TypeError(`option expires is invalid: ${z.expires}`);
      O += "; Expires=" + z.expires.toUTCString();
    }
    if (
      (z.httpOnly && (O += "; HttpOnly"),
      z.secure && (O += "; Secure"),
      z.partitioned && (O += "; Partitioned"),
      z.priority)
    )
      switch (
        typeof z.priority == "string" ? z.priority.toLowerCase() : void 0
      ) {
        case "low":
          O += "; Priority=Low";
          break;
        case "medium":
          O += "; Priority=Medium";
          break;
        case "high":
          O += "; Priority=High";
          break;
        default:
          throw new TypeError(`option priority is invalid: ${z.priority}`);
      }
    if (z.sameSite)
      switch (
        typeof z.sameSite == "string" ? z.sameSite.toLowerCase() : z.sameSite
      ) {
        case !0:
        case "strict":
          O += "; SameSite=Strict";
          break;
        case "lax":
          O += "; SameSite=Lax";
          break;
        case "none":
          O += "; SameSite=None";
          break;
        default:
          throw new TypeError(`option sameSite is invalid: ${z.sameSite}`);
      }
    return O;
  }
  function j(N) {
    if (N.indexOf("%") === -1) return N;
    try {
      return decodeURIComponent(N);
    } catch {
      return N;
    }
  }
  function I(N) {
    return f.call(N) === "[object Date]";
  }
  return Rr;
}
Wd();
/**
 * react-router v7.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var pc = "popstate";
function Vd(i = {}) {
  function s(p, f) {
    let { pathname: h, search: k, hash: C } = p.location;
    return qi(
      "",
      { pathname: h, search: k, hash: C },
      (f.state && f.state.usr) || null,
      (f.state && f.state.key) || "default"
    );
  }
  function a(p, f) {
    return typeof f == "string" ? f : Tr(f);
  }
  return Kd(s, a, null, i);
}
function Se(i, s) {
  if (i === !1 || i === null || typeof i > "u") throw new Error(s);
}
function kt(i, s) {
  if (!i) {
    typeof console < "u" && console.warn(s);
    try {
      throw new Error(s);
    } catch {}
  }
}
function Qd() {
  return Math.random().toString(36).substring(2, 10);
}
function mc(i, s) {
  return { usr: i.state, key: i.key, idx: s };
}
function qi(i, s, a = null, p) {
  return {
    pathname: typeof i == "string" ? i : i.pathname,
    search: "",
    hash: "",
    ...(typeof s == "string" ? An(s) : s),
    state: a,
    key: (s && s.key) || p || Qd(),
  };
}
function Tr({ pathname: i = "/", search: s = "", hash: a = "" }) {
  return (
    s && s !== "?" && (i += s.charAt(0) === "?" ? s : "?" + s),
    a && a !== "#" && (i += a.charAt(0) === "#" ? a : "#" + a),
    i
  );
}
function An(i) {
  let s = {};
  if (i) {
    let a = i.indexOf("#");
    a >= 0 && ((s.hash = i.substring(a)), (i = i.substring(0, a)));
    let p = i.indexOf("?");
    p >= 0 && ((s.search = i.substring(p)), (i = i.substring(0, p))),
      i && (s.pathname = i);
  }
  return s;
}
function Kd(i, s, a, p = {}) {
  let { window: f = document.defaultView, v5Compat: h = !1 } = p,
    k = f.history,
    C = "POP",
    w = null,
    S = j();
  S == null && ((S = 0), k.replaceState({ ...k.state, idx: S }, ""));
  function j() {
    return (k.state || { idx: null }).idx;
  }
  function I() {
    C = "POP";
    let D = j(),
      O = D == null ? null : D - S;
    (S = D), w && w({ action: C, location: M.location, delta: O });
  }
  function N(D, O) {
    C = "PUSH";
    let B = qi(M.location, D, O);
    S = j() + 1;
    let W = mc(B, S),
      q = M.createHref(B);
    try {
      k.pushState(W, "", q);
    } catch (ne) {
      if (ne instanceof DOMException && ne.name === "DataCloneError") throw ne;
      f.location.assign(q);
    }
    h && w && w({ action: C, location: M.location, delta: 1 });
  }
  function U(D, O) {
    C = "REPLACE";
    let B = qi(M.location, D, O);
    S = j();
    let W = mc(B, S),
      q = M.createHref(B);
    k.replaceState(W, "", q),
      h && w && w({ action: C, location: M.location, delta: 0 });
  }
  function z(D) {
    let O = f.location.origin !== "null" ? f.location.origin : f.location.href,
      B = typeof D == "string" ? D : Tr(D);
    return (
      (B = B.replace(/ $/, "%20")),
      Se(
        O,
        `No window.location.(origin|href) available to create URL for href: ${B}`
      ),
      new URL(B, O)
    );
  }
  let M = {
    get action() {
      return C;
    },
    get location() {
      return i(f, k);
    },
    listen(D) {
      if (w) throw new Error("A history only accepts one active listener");
      return (
        f.addEventListener(pc, I),
        (w = D),
        () => {
          f.removeEventListener(pc, I), (w = null);
        }
      );
    },
    createHref(D) {
      return s(f, D);
    },
    createURL: z,
    encodeLocation(D) {
      let O = z(D);
      return { pathname: O.pathname, search: O.search, hash: O.hash };
    },
    push: N,
    replace: U,
    go(D) {
      return k.go(D);
    },
  };
  return M;
}
function gc(i, s, a = "/") {
  return Yd(i, s, a, !1);
}
function Yd(i, s, a, p) {
  let f = typeof s == "string" ? An(s) : s,
    h = bt(f.pathname || "/", a);
  if (h == null) return null;
  let k = wc(i);
  Gd(k);
  let C = null;
  for (let w = 0; C == null && w < k.length; ++w) {
    let S = up(h);
    C = rp(k[w], S, p);
  }
  return C;
}
function wc(i, s = [], a = [], p = "") {
  let f = (h, k, C) => {
    let w = {
      relativePath: C === void 0 ? h.path || "" : C,
      caseSensitive: h.caseSensitive === !0,
      childrenIndex: k,
      route: h,
    };
    w.relativePath.startsWith("/") &&
      (Se(
        w.relativePath.startsWith(p),
        `Absolute route path "${w.relativePath}" nested under path "${p}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
      (w.relativePath = w.relativePath.slice(p.length)));
    let S = jt([p, w.relativePath]),
      j = a.concat(w);
    h.children &&
      h.children.length > 0 &&
      (Se(
        h.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${S}".`
      ),
      wc(h.children, s, j, S)),
      !(h.path == null && !h.index) &&
        s.push({ path: S, score: tp(S, h.index), routesMeta: j });
  };
  return (
    i.forEach((h, k) => {
      var C;
      if (h.path === "" || !((C = h.path) != null && C.includes("?"))) f(h, k);
      else for (let w of xc(h.path)) f(h, k, w);
    }),
    s
  );
}
function xc(i) {
  let s = i.split("/");
  if (s.length === 0) return [];
  let [a, ...p] = s,
    f = a.endsWith("?"),
    h = a.replace(/\?$/, "");
  if (p.length === 0) return f ? [h, ""] : [h];
  let k = xc(p.join("/")),
    C = [];
  return (
    C.push(...k.map((w) => (w === "" ? h : [h, w].join("/")))),
    f && C.push(...k),
    C.map((w) => (i.startsWith("/") && w === "" ? "/" : w))
  );
}
function Gd(i) {
  i.sort((s, a) =>
    s.score !== a.score
      ? a.score - s.score
      : np(
          s.routesMeta.map((p) => p.childrenIndex),
          a.routesMeta.map((p) => p.childrenIndex)
        )
  );
}
var Xd = /^:[\w-]+$/,
  Jd = 3,
  Zd = 2,
  qd = 1,
  bd = 10,
  ep = -2,
  hc = (i) => i === "*";
function tp(i, s) {
  let a = i.split("/"),
    p = a.length;
  return (
    a.some(hc) && (p += ep),
    s && (p += Zd),
    a
      .filter((f) => !hc(f))
      .reduce((f, h) => f + (Xd.test(h) ? Jd : h === "" ? qd : bd), p)
  );
}
function np(i, s) {
  return i.length === s.length && i.slice(0, -1).every((p, f) => p === s[f])
    ? i[i.length - 1] - s[s.length - 1]
    : 0;
}
function rp(i, s, a = !1) {
  let { routesMeta: p } = i,
    f = {},
    h = "/",
    k = [];
  for (let C = 0; C < p.length; ++C) {
    let w = p[C],
      S = C === p.length - 1,
      j = h === "/" ? s : s.slice(h.length) || "/",
      I = Xl(
        { path: w.relativePath, caseSensitive: w.caseSensitive, end: S },
        j
      ),
      N = w.route;
    if (
      (!I &&
        S &&
        a &&
        !p[p.length - 1].route.index &&
        (I = Xl(
          { path: w.relativePath, caseSensitive: w.caseSensitive, end: !1 },
          j
        )),
      !I)
    )
      return null;
    Object.assign(f, I.params),
      k.push({
        params: f,
        pathname: jt([h, I.pathname]),
        pathnameBase: sp(jt([h, I.pathnameBase])),
        route: N,
      }),
      I.pathnameBase !== "/" && (h = jt([h, I.pathnameBase]));
  }
  return k;
}
function Xl(i, s) {
  typeof i == "string" && (i = { path: i, caseSensitive: !1, end: !0 });
  let [a, p] = lp(i.path, i.caseSensitive, i.end),
    f = s.match(a);
  if (!f) return null;
  let h = f[0],
    k = h.replace(/(.)\/+$/, "$1"),
    C = f.slice(1);
  return {
    params: p.reduce((S, { paramName: j, isOptional: I }, N) => {
      if (j === "*") {
        let z = C[N] || "";
        k = h.slice(0, h.length - z.length).replace(/(.)\/+$/, "$1");
      }
      const U = C[N];
      return (
        I && !U ? (S[j] = void 0) : (S[j] = (U || "").replace(/%2F/g, "/")), S
      );
    }, {}),
    pathname: h,
    pathnameBase: k,
    pattern: i,
  };
}
function lp(i, s = !1, a = !0) {
  kt(
    i === "*" || !i.endsWith("*") || i.endsWith("/*"),
    `Route path "${i}" will be treated as if it were "${i.replace(
      /\*$/,
      "/*"
    )}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(
      /\*$/,
      "/*"
    )}".`
  );
  let p = [],
    f =
      "^" +
      i
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (k, C, w) => (
            p.push({ paramName: C, isOptional: w != null }),
            w ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    i.endsWith("*")
      ? (p.push({ paramName: "*" }),
        (f += i === "*" || i === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : a
      ? (f += "\\/*$")
      : i !== "" && i !== "/" && (f += "(?:(?=\\/|$))"),
    [new RegExp(f, s ? void 0 : "i"), p]
  );
}
function up(i) {
  try {
    return i
      .split("/")
      .map((s) => decodeURIComponent(s).replace(/\//g, "%2F"))
      .join("/");
  } catch (s) {
    return (
      kt(
        !1,
        `The URL path "${i}" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (${s}).`
      ),
      i
    );
  }
}
function bt(i, s) {
  if (s === "/") return i;
  if (!i.toLowerCase().startsWith(s.toLowerCase())) return null;
  let a = s.endsWith("/") ? s.length - 1 : s.length,
    p = i.charAt(a);
  return p && p !== "/" ? null : i.slice(a) || "/";
}
function ip(i, s = "/") {
  let {
    pathname: a,
    search: p = "",
    hash: f = "",
  } = typeof i == "string" ? An(i) : i;
  return {
    pathname: a ? (a.startsWith("/") ? a : op(a, s)) : s,
    search: cp(p),
    hash: fp(f),
  };
}
function op(i, s) {
  let a = s.replace(/\/+$/, "").split("/");
  return (
    i.split("/").forEach((f) => {
      f === ".." ? a.length > 1 && a.pop() : f !== "." && a.push(f);
    }),
    a.length > 1 ? a.join("/") : "/"
  );
}
function Ji(i, s, a, p) {
  return `Cannot include a '${i}' character in a manually specified \`to.${s}\` field [${JSON.stringify(
    p
  )}].  Please separate it out to the \`to.${a}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function ap(i) {
  return i.filter(
    (s, a) => a === 0 || (s.route.path && s.route.path.length > 0)
  );
}
function Sc(i) {
  let s = ap(i);
  return s.map((a, p) => (p === s.length - 1 ? a.pathname : a.pathnameBase));
}
function kc(i, s, a, p = !1) {
  let f;
  typeof i == "string"
    ? (f = An(i))
    : ((f = { ...i }),
      Se(
        !f.pathname || !f.pathname.includes("?"),
        Ji("?", "pathname", "search", f)
      ),
      Se(
        !f.pathname || !f.pathname.includes("#"),
        Ji("#", "pathname", "hash", f)
      ),
      Se(!f.search || !f.search.includes("#"), Ji("#", "search", "hash", f)));
  let h = i === "" || f.pathname === "",
    k = h ? "/" : f.pathname,
    C;
  if (k == null) C = a;
  else {
    let I = s.length - 1;
    if (!p && k.startsWith("..")) {
      let N = k.split("/");
      for (; N[0] === ".."; ) N.shift(), (I -= 1);
      f.pathname = N.join("/");
    }
    C = I >= 0 ? s[I] : "/";
  }
  let w = ip(f, C),
    S = k && k !== "/" && k.endsWith("/"),
    j = (h || k === ".") && a.endsWith("/");
  return !w.pathname.endsWith("/") && (S || j) && (w.pathname += "/"), w;
}
var jt = (i) => i.join("/").replace(/\/\/+/g, "/"),
  sp = (i) => i.replace(/\/+$/, "").replace(/^\/*/, "/"),
  cp = (i) => (!i || i === "?" ? "" : i.startsWith("?") ? i : "?" + i),
  fp = (i) => (!i || i === "#" ? "" : i.startsWith("#") ? i : "#" + i);
function dp(i) {
  return (
    i != null &&
    typeof i.status == "number" &&
    typeof i.statusText == "string" &&
    typeof i.internal == "boolean" &&
    "data" in i
  );
}
var Ec = ["POST", "PUT", "PATCH", "DELETE"];
new Set(Ec);
var pp = ["GET", ...Ec];
new Set(pp);
var Bn = E.createContext(null);
Bn.displayName = "DataRouter";
var Jl = E.createContext(null);
Jl.displayName = "DataRouterState";
var Cc = E.createContext({ isTransitioning: !1 });
Cc.displayName = "ViewTransition";
var mp = E.createContext(new Map());
mp.displayName = "Fetchers";
var hp = E.createContext(null);
hp.displayName = "Await";
var Et = E.createContext(null);
Et.displayName = "Navigation";
var jr = E.createContext(null);
jr.displayName = "Location";
var Dt = E.createContext({ outlet: null, matches: [], isDataRoute: !1 });
Dt.displayName = "Route";
var no = E.createContext(null);
no.displayName = "RouteError";
function yp(i, { relative: s } = {}) {
  Se(
    Dr(),
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: a, navigator: p } = E.useContext(Et),
    { hash: f, pathname: h, search: k } = Ir(i, { relative: s }),
    C = h;
  return (
    a !== "/" && (C = h === "/" ? a : jt([a, h])),
    p.createHref({ pathname: C, search: k, hash: f })
  );
}
function Dr() {
  return E.useContext(jr) != null;
}
function mn() {
  return (
    Se(
      Dr(),
      "useLocation() may be used only in the context of a <Router> component."
    ),
    E.useContext(jr).location
  );
}
var Nc =
  "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Pc(i) {
  E.useContext(Et).static || E.useLayoutEffect(i);
}
function _c() {
  let { isDataRoute: i } = E.useContext(Dt);
  return i ? Lp() : vp();
}
function vp() {
  Se(
    Dr(),
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let i = E.useContext(Bn),
    { basename: s, navigator: a } = E.useContext(Et),
    { matches: p } = E.useContext(Dt),
    { pathname: f } = mn(),
    h = JSON.stringify(Sc(p)),
    k = E.useRef(!1);
  return (
    Pc(() => {
      k.current = !0;
    }),
    E.useCallback(
      (w, S = {}) => {
        if ((kt(k.current, Nc), !k.current)) return;
        if (typeof w == "number") {
          a.go(w);
          return;
        }
        let j = kc(w, JSON.parse(h), f, S.relative === "path");
        i == null &&
          s !== "/" &&
          (j.pathname = j.pathname === "/" ? s : jt([s, j.pathname])),
          (S.replace ? a.replace : a.push)(j, S.state, S);
      },
      [s, a, h, f, i]
    )
  );
}
E.createContext(null);
function Ir(i, { relative: s } = {}) {
  let { matches: a } = E.useContext(Dt),
    { pathname: p } = mn(),
    f = JSON.stringify(Sc(a));
  return E.useMemo(() => kc(i, JSON.parse(f), p, s === "path"), [i, f, p, s]);
}
function gp(i, s) {
  return Rc(i, s);
}
function Rc(i, s, a, p) {
  var O;
  Se(
    Dr(),
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: f } = E.useContext(Et),
    { matches: h } = E.useContext(Dt),
    k = h[h.length - 1],
    C = k ? k.params : {},
    w = k ? k.pathname : "/",
    S = k ? k.pathnameBase : "/",
    j = k && k.route;
  {
    let B = (j && j.path) || "";
    Lc(
      w,
      !j || B.endsWith("*") || B.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${w}" (under <Route path="${B}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${B}"> to <Route path="${
        B === "/" ? "*" : `${B}/*`
      }">.`
    );
  }
  let I = mn(),
    N;
  if (s) {
    let B = typeof s == "string" ? An(s) : s;
    Se(
      S === "/" || ((O = B.pathname) == null ? void 0 : O.startsWith(S)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${S}" but pathname "${B.pathname}" was given in the \`location\` prop.`
    ),
      (N = B);
  } else N = I;
  let U = N.pathname || "/",
    z = U;
  if (S !== "/") {
    let B = S.replace(/^\//, "").split("/");
    z = "/" + U.replace(/^\//, "").split("/").slice(B.length).join("/");
  }
  let M = gc(i, { pathname: z });
  kt(
    j || M != null,
    `No routes matched location "${N.pathname}${N.search}${N.hash}" `
  ),
    kt(
      M == null ||
        M[M.length - 1].route.element !== void 0 ||
        M[M.length - 1].route.Component !== void 0 ||
        M[M.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${N.pathname}${N.search}${N.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    );
  let D = Ep(
    M &&
      M.map((B) =>
        Object.assign({}, B, {
          params: Object.assign({}, C, B.params),
          pathname: jt([
            S,
            f.encodeLocation
              ? f.encodeLocation(B.pathname).pathname
              : B.pathname,
          ]),
          pathnameBase:
            B.pathnameBase === "/"
              ? S
              : jt([
                  S,
                  f.encodeLocation
                    ? f.encodeLocation(B.pathnameBase).pathname
                    : B.pathnameBase,
                ]),
        })
      ),
    h,
    a,
    p
  );
  return s && D
    ? E.createElement(
        jr.Provider,
        {
          value: {
            location: {
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default",
              ...N,
            },
            navigationType: "POP",
          },
        },
        D
      )
    : D;
}
function wp() {
  let i = Rp(),
    s = dp(i)
      ? `${i.status} ${i.statusText}`
      : i instanceof Error
      ? i.message
      : JSON.stringify(i),
    a = i instanceof Error ? i.stack : null,
    p = "rgba(200,200,200, 0.5)",
    f = { padding: "0.5rem", backgroundColor: p },
    h = { padding: "2px 4px", backgroundColor: p },
    k = null;
  return (
    console.error("Error handled by React Router default ErrorBoundary:", i),
    (k = E.createElement(
      E.Fragment,
      null,
      E.createElement("p", null, "💿 Hey developer 👋"),
      E.createElement(
        "p",
        null,
        "You can provide a way better UX than this when your app throws errors by providing your own ",
        E.createElement("code", { style: h }, "ErrorBoundary"),
        " or",
        " ",
        E.createElement("code", { style: h }, "errorElement"),
        " prop on your route."
      )
    )),
    E.createElement(
      E.Fragment,
      null,
      E.createElement("h2", null, "Unexpected Application Error!"),
      E.createElement("h3", { style: { fontStyle: "italic" } }, s),
      a ? E.createElement("pre", { style: f }, a) : null,
      k
    )
  );
}
var xp = E.createElement(wp, null),
  Sp = class extends E.Component {
    constructor(i) {
      super(i),
        (this.state = {
          location: i.location,
          revalidation: i.revalidation,
          error: i.error,
        });
    }
    static getDerivedStateFromError(i) {
      return { error: i };
    }
    static getDerivedStateFromProps(i, s) {
      return s.location !== i.location ||
        (s.revalidation !== "idle" && i.revalidation === "idle")
        ? { error: i.error, location: i.location, revalidation: i.revalidation }
        : {
            error: i.error !== void 0 ? i.error : s.error,
            location: s.location,
            revalidation: i.revalidation || s.revalidation,
          };
    }
    componentDidCatch(i, s) {
      console.error(
        "React Router caught the following error during render",
        i,
        s
      );
    }
    render() {
      return this.state.error !== void 0
        ? E.createElement(
            Dt.Provider,
            { value: this.props.routeContext },
            E.createElement(no.Provider, {
              value: this.state.error,
              children: this.props.component,
            })
          )
        : this.props.children;
    }
  };
function kp({ routeContext: i, match: s, children: a }) {
  let p = E.useContext(Bn);
  return (
    p &&
      p.static &&
      p.staticContext &&
      (s.route.errorElement || s.route.ErrorBoundary) &&
      (p.staticContext._deepestRenderedBoundaryId = s.route.id),
    E.createElement(Dt.Provider, { value: i }, a)
  );
}
function Ep(i, s = [], a = null, p = null) {
  if (i == null) {
    if (!a) return null;
    if (a.errors) i = a.matches;
    else if (s.length === 0 && !a.initialized && a.matches.length > 0)
      i = a.matches;
    else return null;
  }
  let f = i,
    h = a == null ? void 0 : a.errors;
  if (h != null) {
    let w = f.findIndex(
      (S) => S.route.id && (h == null ? void 0 : h[S.route.id]) !== void 0
    );
    Se(
      w >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        h
      ).join(",")}`
    ),
      (f = f.slice(0, Math.min(f.length, w + 1)));
  }
  let k = !1,
    C = -1;
  if (a)
    for (let w = 0; w < f.length; w++) {
      let S = f[w];
      if (
        ((S.route.HydrateFallback || S.route.hydrateFallbackElement) && (C = w),
        S.route.id)
      ) {
        let { loaderData: j, errors: I } = a,
          N =
            S.route.loader &&
            !j.hasOwnProperty(S.route.id) &&
            (!I || I[S.route.id] === void 0);
        if (S.route.lazy || N) {
          (k = !0), C >= 0 ? (f = f.slice(0, C + 1)) : (f = [f[0]]);
          break;
        }
      }
    }
  return f.reduceRight((w, S, j) => {
    let I,
      N = !1,
      U = null,
      z = null;
    a &&
      ((I = h && S.route.id ? h[S.route.id] : void 0),
      (U = S.route.errorElement || xp),
      k &&
        (C < 0 && j === 0
          ? (Lc(
              "route-fallback",
              !1,
              "No `HydrateFallback` element provided to render during initial hydration"
            ),
            (N = !0),
            (z = null))
          : C === j &&
            ((N = !0), (z = S.route.hydrateFallbackElement || null))));
    let M = s.concat(f.slice(0, j + 1)),
      D = () => {
        let O;
        return (
          I
            ? (O = U)
            : N
            ? (O = z)
            : S.route.Component
            ? (O = E.createElement(S.route.Component, null))
            : S.route.element
            ? (O = S.route.element)
            : (O = w),
          E.createElement(kp, {
            match: S,
            routeContext: { outlet: w, matches: M, isDataRoute: a != null },
            children: O,
          })
        );
      };
    return a && (S.route.ErrorBoundary || S.route.errorElement || j === 0)
      ? E.createElement(Sp, {
          location: a.location,
          revalidation: a.revalidation,
          component: U,
          error: I,
          children: D(),
          routeContext: { outlet: null, matches: M, isDataRoute: !0 },
        })
      : D();
  }, null);
}
function ro(i) {
  return `${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Cp(i) {
  let s = E.useContext(Bn);
  return Se(s, ro(i)), s;
}
function Np(i) {
  let s = E.useContext(Jl);
  return Se(s, ro(i)), s;
}
function Pp(i) {
  let s = E.useContext(Dt);
  return Se(s, ro(i)), s;
}
function lo(i) {
  let s = Pp(i),
    a = s.matches[s.matches.length - 1];
  return (
    Se(
      a.route.id,
      `${i} can only be used on routes that contain a unique "id"`
    ),
    a.route.id
  );
}
function _p() {
  return lo("useRouteId");
}
function Rp() {
  var p;
  let i = E.useContext(no),
    s = Np("useRouteError"),
    a = lo("useRouteError");
  return i !== void 0 ? i : (p = s.errors) == null ? void 0 : p[a];
}
function Lp() {
  let { router: i } = Cp("useNavigate"),
    s = lo("useNavigate"),
    a = E.useRef(!1);
  return (
    Pc(() => {
      a.current = !0;
    }),
    E.useCallback(
      async (f, h = {}) => {
        kt(a.current, Nc),
          a.current &&
            (typeof f == "number"
              ? i.navigate(f)
              : await i.navigate(f, { fromRouteId: s, ...h }));
      },
      [i, s]
    )
  );
}
var yc = {};
function Lc(i, s, a) {
  !s && !yc[i] && ((yc[i] = !0), kt(!1, a));
}
E.memo(zp);
function zp({ routes: i, future: s, state: a }) {
  return Rc(i, void 0, a, s);
}
function bi(i) {
  Se(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
  );
}
function Tp({
  basename: i = "/",
  children: s = null,
  location: a,
  navigationType: p = "POP",
  navigator: f,
  static: h = !1,
}) {
  Se(
    !Dr(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let k = i.replace(/^\/*/, "/"),
    C = E.useMemo(
      () => ({ basename: k, navigator: f, static: h, future: {} }),
      [k, f, h]
    );
  typeof a == "string" && (a = An(a));
  let {
      pathname: w = "/",
      search: S = "",
      hash: j = "",
      state: I = null,
      key: N = "default",
    } = a,
    U = E.useMemo(() => {
      let z = bt(w, k);
      return z == null
        ? null
        : {
            location: { pathname: z, search: S, hash: j, state: I, key: N },
            navigationType: p,
          };
    }, [k, w, S, j, I, N, p]);
  return (
    kt(
      U != null,
      `<Router basename="${k}"> is not able to match the URL "${w}${S}${j}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    U == null
      ? null
      : E.createElement(
          Et.Provider,
          { value: C },
          E.createElement(jr.Provider, { children: s, value: U })
        )
  );
}
function jp({ children: i, location: s }) {
  return gp(eo(i), s);
}
function eo(i, s = []) {
  let a = [];
  return (
    E.Children.forEach(i, (p, f) => {
      if (!E.isValidElement(p)) return;
      let h = [...s, f];
      if (p.type === E.Fragment) {
        a.push.apply(a, eo(p.props.children, h));
        return;
      }
      Se(
        p.type === bi,
        `[${
          typeof p.type == "string" ? p.type : p.type.name
        }] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
      ),
        Se(
          !p.props.index || !p.props.children,
          "An index route cannot have child routes."
        );
      let k = {
        id: p.props.id || h.join("-"),
        caseSensitive: p.props.caseSensitive,
        element: p.props.element,
        Component: p.props.Component,
        index: p.props.index,
        path: p.props.path,
        loader: p.props.loader,
        action: p.props.action,
        hydrateFallbackElement: p.props.hydrateFallbackElement,
        HydrateFallback: p.props.HydrateFallback,
        errorElement: p.props.errorElement,
        ErrorBoundary: p.props.ErrorBoundary,
        hasErrorBoundary:
          p.props.hasErrorBoundary === !0 ||
          p.props.ErrorBoundary != null ||
          p.props.errorElement != null,
        shouldRevalidate: p.props.shouldRevalidate,
        handle: p.props.handle,
        lazy: p.props.lazy,
      };
      p.props.children && (k.children = eo(p.props.children, h)), a.push(k);
    }),
    a
  );
}
var Yl = "get",
  Gl = "application/x-www-form-urlencoded";
function Zl(i) {
  return i != null && typeof i.tagName == "string";
}
function Dp(i) {
  return Zl(i) && i.tagName.toLowerCase() === "button";
}
function Ip(i) {
  return Zl(i) && i.tagName.toLowerCase() === "form";
}
function Op(i) {
  return Zl(i) && i.tagName.toLowerCase() === "input";
}
function Fp(i) {
  return !!(i.metaKey || i.altKey || i.ctrlKey || i.shiftKey);
}
function Mp(i, s) {
  return i.button === 0 && (!s || s === "_self") && !Fp(i);
}
var Kl = null;
function Up() {
  if (Kl === null)
    try {
      new FormData(document.createElement("form"), 0), (Kl = !1);
    } catch {
      Kl = !0;
    }
  return Kl;
}
var $p = new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain",
]);
function Zi(i) {
  return i != null && !$p.has(i)
    ? (kt(
        !1,
        `"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Gl}"`
      ),
      null)
    : i;
}
function Ap(i, s) {
  let a, p, f, h, k;
  if (Ip(i)) {
    let C = i.getAttribute("action");
    (p = C ? bt(C, s) : null),
      (a = i.getAttribute("method") || Yl),
      (f = Zi(i.getAttribute("enctype")) || Gl),
      (h = new FormData(i));
  } else if (Dp(i) || (Op(i) && (i.type === "submit" || i.type === "image"))) {
    let C = i.form;
    if (C == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let w = i.getAttribute("formaction") || C.getAttribute("action");
    if (
      ((p = w ? bt(w, s) : null),
      (a = i.getAttribute("formmethod") || C.getAttribute("method") || Yl),
      (f =
        Zi(i.getAttribute("formenctype")) ||
        Zi(C.getAttribute("enctype")) ||
        Gl),
      (h = new FormData(C, i)),
      !Up())
    ) {
      let { name: S, type: j, value: I } = i;
      if (j === "image") {
        let N = S ? `${S}.` : "";
        h.append(`${N}x`, "0"), h.append(`${N}y`, "0");
      } else S && h.append(S, I);
    }
  } else {
    if (Zl(i))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    (a = Yl), (p = null), (f = Gl), (k = i);
  }
  return (
    h && f === "text/plain" && ((k = h), (h = void 0)),
    { action: p, method: a.toLowerCase(), encType: f, formData: h, body: k }
  );
}
function uo(i, s) {
  if (i === !1 || i === null || typeof i > "u") throw new Error(s);
}
async function Bp(i, s) {
  if (i.id in s) return s[i.id];
  try {
    let a = await import(i.module);
    return (s[i.id] = a), a;
  } catch (a) {
    return (
      console.error(
        `Error loading route module \`${i.module}\`, reloading page...`
      ),
      console.error(a),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function Hp(i) {
  return i == null
    ? !1
    : i.href == null
    ? i.rel === "preload" &&
      typeof i.imageSrcSet == "string" &&
      typeof i.imageSizes == "string"
    : typeof i.rel == "string" && typeof i.href == "string";
}
async function Wp(i, s, a) {
  let p = await Promise.all(
    i.map(async (f) => {
      let h = s.routes[f.route.id];
      if (h) {
        let k = await Bp(h, a);
        return k.links ? k.links() : [];
      }
      return [];
    })
  );
  return Yp(
    p
      .flat(1)
      .filter(Hp)
      .filter((f) => f.rel === "stylesheet" || f.rel === "preload")
      .map((f) =>
        f.rel === "stylesheet"
          ? { ...f, rel: "prefetch", as: "style" }
          : { ...f, rel: "prefetch" }
      )
  );
}
function vc(i, s, a, p, f, h) {
  let k = (w, S) => (a[S] ? w.route.id !== a[S].route.id : !0),
    C = (w, S) => {
      var j;
      return (
        a[S].pathname !== w.pathname ||
        (((j = a[S].route.path) == null ? void 0 : j.endsWith("*")) &&
          a[S].params["*"] !== w.params["*"])
      );
    };
  return h === "assets"
    ? s.filter((w, S) => k(w, S) || C(w, S))
    : h === "data"
    ? s.filter((w, S) => {
        var I;
        let j = p.routes[w.route.id];
        if (!j || !j.hasLoader) return !1;
        if (k(w, S) || C(w, S)) return !0;
        if (w.route.shouldRevalidate) {
          let N = w.route.shouldRevalidate({
            currentUrl: new URL(f.pathname + f.search + f.hash, window.origin),
            currentParams: ((I = a[0]) == null ? void 0 : I.params) || {},
            nextUrl: new URL(i, window.origin),
            nextParams: w.params,
            defaultShouldRevalidate: !0,
          });
          if (typeof N == "boolean") return N;
        }
        return !0;
      })
    : [];
}
function Vp(i, s) {
  return Qp(
    i
      .map((a) => {
        let p = s.routes[a.route.id];
        if (!p) return [];
        let f = [p.module];
        return p.imports && (f = f.concat(p.imports)), f;
      })
      .flat(1)
  );
}
function Qp(i) {
  return [...new Set(i)];
}
function Kp(i) {
  let s = {},
    a = Object.keys(i).sort();
  for (let p of a) s[p] = i[p];
  return s;
}
function Yp(i, s) {
  let a = new Set();
  return (
    new Set(s),
    i.reduce((p, f) => {
      let h = JSON.stringify(Kp(f));
      return a.has(h) || (a.add(h), p.push({ key: h, link: f })), p;
    }, [])
  );
}
function Gp(i) {
  let s =
    typeof i == "string"
      ? new URL(
          i,
          typeof window > "u" ? "server://singlefetch/" : window.location.origin
        )
      : i;
  return (
    s.pathname === "/"
      ? (s.pathname = "_root.data")
      : (s.pathname = `${s.pathname.replace(/\/$/, "")}.data`),
    s
  );
}
function Xp() {
  let i = E.useContext(Bn);
  return (
    uo(
      i,
      "You must render this element inside a <DataRouterContext.Provider> element"
    ),
    i
  );
}
function Jp() {
  let i = E.useContext(Jl);
  return (
    uo(
      i,
      "You must render this element inside a <DataRouterStateContext.Provider> element"
    ),
    i
  );
}
var io = E.createContext(void 0);
io.displayName = "FrameworkContext";
function zc() {
  let i = E.useContext(io);
  return (
    uo(i, "You must render this element inside a <HydratedRouter> element"), i
  );
}
function Zp(i, s) {
  let a = E.useContext(io),
    [p, f] = E.useState(!1),
    [h, k] = E.useState(!1),
    {
      onFocus: C,
      onBlur: w,
      onMouseEnter: S,
      onMouseLeave: j,
      onTouchStart: I,
    } = s,
    N = E.useRef(null);
  E.useEffect(() => {
    if ((i === "render" && k(!0), i === "viewport")) {
      let M = (O) => {
          O.forEach((B) => {
            k(B.isIntersecting);
          });
        },
        D = new IntersectionObserver(M, { threshold: 0.5 });
      return (
        N.current && D.observe(N.current),
        () => {
          D.disconnect();
        }
      );
    }
  }, [i]),
    E.useEffect(() => {
      if (p) {
        let M = setTimeout(() => {
          k(!0);
        }, 100);
        return () => {
          clearTimeout(M);
        };
      }
    }, [p]);
  let U = () => {
      f(!0);
    },
    z = () => {
      f(!1), k(!1);
    };
  return a
    ? i !== "intent"
      ? [h, N, {}]
      : [
          h,
          N,
          {
            onFocus: Lr(C, U),
            onBlur: Lr(w, z),
            onMouseEnter: Lr(S, U),
            onMouseLeave: Lr(j, z),
            onTouchStart: Lr(I, U),
          },
        ]
    : [!1, N, {}];
}
function Lr(i, s) {
  return (a) => {
    i && i(a), a.defaultPrevented || s(a);
  };
}
function qp({ page: i, ...s }) {
  let { router: a } = Xp(),
    p = E.useMemo(() => gc(a.routes, i, a.basename), [a.routes, i, a.basename]);
  return p ? E.createElement(em, { page: i, matches: p, ...s }) : null;
}
function bp(i) {
  let { manifest: s, routeModules: a } = zc(),
    [p, f] = E.useState([]);
  return (
    E.useEffect(() => {
      let h = !1;
      return (
        Wp(i, s, a).then((k) => {
          h || f(k);
        }),
        () => {
          h = !0;
        }
      );
    }, [i, s, a]),
    p
  );
}
function em({ page: i, matches: s, ...a }) {
  let p = mn(),
    { manifest: f, routeModules: h } = zc(),
    { loaderData: k, matches: C } = Jp(),
    w = E.useMemo(() => vc(i, s, C, f, p, "data"), [i, s, C, f, p]),
    S = E.useMemo(() => vc(i, s, C, f, p, "assets"), [i, s, C, f, p]),
    j = E.useMemo(() => {
      if (i === p.pathname + p.search + p.hash) return [];
      let U = new Set(),
        z = !1;
      if (
        (s.forEach((D) => {
          var B;
          let O = f.routes[D.route.id];
          !O ||
            !O.hasLoader ||
            ((!w.some((W) => W.route.id === D.route.id) &&
              D.route.id in k &&
              (B = h[D.route.id]) != null &&
              B.shouldRevalidate) ||
            O.hasClientLoader
              ? (z = !0)
              : U.add(D.route.id));
        }),
        U.size === 0)
      )
        return [];
      let M = Gp(i);
      return (
        z &&
          U.size > 0 &&
          M.searchParams.set(
            "_routes",
            s
              .filter((D) => U.has(D.route.id))
              .map((D) => D.route.id)
              .join(",")
          ),
        [M.pathname + M.search]
      );
    }, [k, p, f, w, s, i, h]),
    I = E.useMemo(() => Vp(S, f), [S, f]),
    N = bp(S);
  return E.createElement(
    E.Fragment,
    null,
    j.map((U) =>
      E.createElement("link", {
        key: U,
        rel: "prefetch",
        as: "fetch",
        href: U,
        ...a,
      })
    ),
    I.map((U) =>
      E.createElement("link", { key: U, rel: "modulepreload", href: U, ...a })
    ),
    N.map(({ key: U, link: z }) => E.createElement("link", { key: U, ...z }))
  );
}
function tm(...i) {
  return (s) => {
    i.forEach((a) => {
      typeof a == "function" ? a(s) : a != null && (a.current = s);
    });
  };
}
var Tc =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
try {
  Tc && (window.__reactRouterVersion = "7.1.1");
} catch {}
function nm({ basename: i, children: s, window: a }) {
  let p = E.useRef();
  p.current == null && (p.current = Vd({ window: a, v5Compat: !0 }));
  let f = p.current,
    [h, k] = E.useState({ action: f.action, location: f.location }),
    C = E.useCallback(
      (w) => {
        E.startTransition(() => k(w));
      },
      [k]
    );
  return (
    E.useLayoutEffect(() => f.listen(C), [f, C]),
    E.createElement(Tp, {
      basename: i,
      children: s,
      location: h.location,
      navigationType: h.action,
      navigator: f,
    })
  );
}
var jc = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Dc = E.forwardRef(function (
    {
      onClick: s,
      discover: a = "render",
      prefetch: p = "none",
      relative: f,
      reloadDocument: h,
      replace: k,
      state: C,
      target: w,
      to: S,
      preventScrollReset: j,
      viewTransition: I,
      ...N
    },
    U
  ) {
    let { basename: z } = E.useContext(Et),
      M = typeof S == "string" && jc.test(S),
      D,
      O = !1;
    if (typeof S == "string" && M && ((D = S), Tc))
      try {
        let se = new URL(window.location.href),
          ke = S.startsWith("//") ? new URL(se.protocol + S) : new URL(S),
          Xe = bt(ke.pathname, z);
        ke.origin === se.origin && Xe != null
          ? (S = Xe + ke.search + ke.hash)
          : (O = !0);
      } catch {
        kt(
          !1,
          `<Link to="${S}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    let B = yp(S, { relative: f }),
      [W, q, ne] = Zp(p, N),
      oe = im(S, {
        replace: k,
        state: C,
        target: w,
        preventScrollReset: j,
        relative: f,
        viewTransition: I,
      });
    function ae(se) {
      s && s(se), se.defaultPrevented || oe(se);
    }
    let ge = E.createElement("a", {
      ...N,
      ...ne,
      href: D || B,
      onClick: O || h ? s : ae,
      ref: tm(U, q),
      target: w,
      "data-discover": !M && a === "render" ? "true" : void 0,
    });
    return W && !M
      ? E.createElement(E.Fragment, null, ge, E.createElement(qp, { page: B }))
      : ge;
  });
Dc.displayName = "Link";
var rm = E.forwardRef(function (
  {
    "aria-current": s = "page",
    caseSensitive: a = !1,
    className: p = "",
    end: f = !1,
    style: h,
    to: k,
    viewTransition: C,
    children: w,
    ...S
  },
  j
) {
  let I = Ir(k, { relative: S.relative }),
    N = mn(),
    U = E.useContext(Jl),
    { navigator: z, basename: M } = E.useContext(Et),
    D = U != null && fm(I) && C === !0,
    O = z.encodeLocation ? z.encodeLocation(I).pathname : I.pathname,
    B = N.pathname,
    W =
      U && U.navigation && U.navigation.location
        ? U.navigation.location.pathname
        : null;
  a ||
    ((B = B.toLowerCase()),
    (W = W ? W.toLowerCase() : null),
    (O = O.toLowerCase())),
    W && M && (W = bt(W, M) || W);
  const q = O !== "/" && O.endsWith("/") ? O.length - 1 : O.length;
  let ne = B === O || (!f && B.startsWith(O) && B.charAt(q) === "/"),
    oe =
      W != null &&
      (W === O || (!f && W.startsWith(O) && W.charAt(O.length) === "/")),
    ae = { isActive: ne, isPending: oe, isTransitioning: D },
    ge = ne ? s : void 0,
    se;
  typeof p == "function"
    ? (se = p(ae))
    : (se = [
        p,
        ne ? "active" : null,
        oe ? "pending" : null,
        D ? "transitioning" : null,
      ]
        .filter(Boolean)
        .join(" "));
  let ke = typeof h == "function" ? h(ae) : h;
  return E.createElement(
    Dc,
    {
      ...S,
      "aria-current": ge,
      className: se,
      ref: j,
      style: ke,
      to: k,
      viewTransition: C,
    },
    typeof w == "function" ? w(ae) : w
  );
});
rm.displayName = "NavLink";
var lm = E.forwardRef(
  (
    {
      discover: i = "render",
      fetcherKey: s,
      navigate: a,
      reloadDocument: p,
      replace: f,
      state: h,
      method: k = Yl,
      action: C,
      onSubmit: w,
      relative: S,
      preventScrollReset: j,
      viewTransition: I,
      ...N
    },
    U
  ) => {
    let z = sm(),
      M = cm(C, { relative: S }),
      D = k.toLowerCase() === "get" ? "get" : "post",
      O = typeof C == "string" && jc.test(C),
      B = (W) => {
        if ((w && w(W), W.defaultPrevented)) return;
        W.preventDefault();
        let q = W.nativeEvent.submitter,
          ne = (q == null ? void 0 : q.getAttribute("formmethod")) || k;
        z(q || W.currentTarget, {
          fetcherKey: s,
          method: ne,
          navigate: a,
          replace: f,
          state: h,
          relative: S,
          preventScrollReset: j,
          viewTransition: I,
        });
      };
    return E.createElement("form", {
      ref: U,
      method: D,
      action: M,
      onSubmit: p ? w : B,
      ...N,
      "data-discover": !O && i === "render" ? "true" : void 0,
    });
  }
);
lm.displayName = "Form";
function um(i) {
  return `${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Ic(i) {
  let s = E.useContext(Bn);
  return Se(s, um(i)), s;
}
function im(
  i,
  {
    target: s,
    replace: a,
    state: p,
    preventScrollReset: f,
    relative: h,
    viewTransition: k,
  } = {}
) {
  let C = _c(),
    w = mn(),
    S = Ir(i, { relative: h });
  return E.useCallback(
    (j) => {
      if (Mp(j, s)) {
        j.preventDefault();
        let I = a !== void 0 ? a : Tr(w) === Tr(S);
        C(i, {
          replace: I,
          state: p,
          preventScrollReset: f,
          relative: h,
          viewTransition: k,
        });
      }
    },
    [w, C, S, a, p, s, i, f, h, k]
  );
}
var om = 0,
  am = () => `__${String(++om)}__`;
function sm() {
  let { router: i } = Ic("useSubmit"),
    { basename: s } = E.useContext(Et),
    a = _p();
  return E.useCallback(
    async (p, f = {}) => {
      let { action: h, method: k, encType: C, formData: w, body: S } = Ap(p, s);
      if (f.navigate === !1) {
        let j = f.fetcherKey || am();
        await i.fetch(j, a, f.action || h, {
          preventScrollReset: f.preventScrollReset,
          formData: w,
          body: S,
          formMethod: f.method || k,
          formEncType: f.encType || C,
          flushSync: f.flushSync,
        });
      } else
        await i.navigate(f.action || h, {
          preventScrollReset: f.preventScrollReset,
          formData: w,
          body: S,
          formMethod: f.method || k,
          formEncType: f.encType || C,
          replace: f.replace,
          state: f.state,
          fromRouteId: a,
          flushSync: f.flushSync,
          viewTransition: f.viewTransition,
        });
    },
    [i, s, a]
  );
}
function cm(i, { relative: s } = {}) {
  let { basename: a } = E.useContext(Et),
    p = E.useContext(Dt);
  Se(p, "useFormAction must be used inside a RouteContext");
  let [f] = p.matches.slice(-1),
    h = { ...Ir(i || ".", { relative: s }) },
    k = mn();
  if (i == null) {
    h.search = k.search;
    let C = new URLSearchParams(h.search),
      w = C.getAll("index");
    if (w.some((j) => j === "")) {
      C.delete("index"),
        w.filter((I) => I).forEach((I) => C.append("index", I));
      let j = C.toString();
      h.search = j ? `?${j}` : "";
    }
  }
  return (
    (!i || i === ".") &&
      f.route.index &&
      (h.search = h.search ? h.search.replace(/^\?/, "?index&") : "?index"),
    a !== "/" && (h.pathname = h.pathname === "/" ? a : jt([a, h.pathname])),
    Tr(h)
  );
}
function fm(i, s = {}) {
  let a = E.useContext(Cc);
  Se(
    a != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: p } = Ic("useViewTransitionState"),
    f = Ir(i, { relative: s.relative });
  if (!a.isTransitioning) return !1;
  let h = bt(a.currentLocation.pathname, p) || a.currentLocation.pathname,
    k = bt(a.nextLocation.pathname, p) || a.nextLocation.pathname;
  return Xl(f.pathname, k) != null || Xl(f.pathname, h) != null;
}
new TextEncoder();
/**
 * @license lucide-react v0.471.1 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const dm = (i) => i.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  Oc = (...i) =>
    i
      .filter((s, a, p) => !!s && s.trim() !== "" && p.indexOf(s) === a)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.471.1 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var pm = {
  xmlns: "http://www.w3.org/2000/.webp",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.471.1 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const mm = E.forwardRef(
  (
    {
      color: i = "currentColor",
      size: s = 24,
      strokeWidth: a = 2,
      absoluteStrokeWidth: p,
      className: f = "",
      children: h,
      iconNode: k,
      ...C
    },
    w
  ) =>
    E.createElement(
      ".webp",
      {
        ref: w,
        ...pm,
        width: s,
        height: s,
        stroke: i,
        strokeWidth: p ? (Number(a) * 24) / Number(s) : a,
        className: Oc("lucide", f),
        ...C,
      },
      [
        ...k.map(([S, j]) => E.createElement(S, j)),
        ...(Array.isArray(h) ? h : [h]),
      ]
    )
);
/**
 * @license lucide-react v0.471.1 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const oo = (i, s) => {
  const a = E.forwardRef(({ className: p, ...f }, h) =>
    E.createElement(mm, {
      ref: h,
      iconNode: s,
      className: Oc(`lucide-${dm(i)}`, p),
      ...f,
    })
  );
  return (a.displayName = `${i}`), a;
};
/**
 * @license lucide-react v0.471.1 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const hm = [
    ["path", { d: "M12 13v8", key: "1l5pq0" }],
    [
      "path",
      {
        d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",
        key: "1pljnt",
      },
    ],
    ["path", { d: "m8 17 4-4 4 4", key: "1quai1" }],
  ],
  ym = oo("CloudUpload", hm);
/**
 * @license lucide-react v0.471.1 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const vm = [
    [
      "path",
      {
        d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
        key: "tonef",
      },
    ],
    ["path", { d: "M9 18c-4.51 2-5-2-7-2", key: "9comsn" }],
  ],
  gm = oo("Github", vm);
/**
 * @license lucide-react v0.471.1 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const wm = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "M12 16v-4", key: "1dtifu" }],
    ["path", { d: "M12 8h.01", key: "e9boi3" }],
  ],
  zr = oo("Info", wm),
  Fc = E.createContext({
    userData: { fullName: "", email: "", github: "", photo: null },
    setUserData: () => {},
  }),
  xm = ({ children: i }) => {
    const [s, a] = E.useState({
      fullName: "",
      email: "",
      github: "",
      photo: null,
    });
    return F.jsx(Fc.Provider, {
      value: { userData: s, setUserData: a },
      children: i,
    });
  },
  Mc = () => E.useContext(Fc);
function Sm() {
  const { setUserData: i } = Mc(),
    s = _c(),
    [a, p] = E.useState(null),
    [f, h] = E.useState(""),
    [k, C] = E.useState(""),
    [w, S] = E.useState(""),
    [j, I] = E.useState(""),
    [N, U] = E.useState({ fullName: "", email: "", github: "", photo: "" }),
    z = async (W) => {
      var ne;
      console.log(j);
      const q = (ne = W.target.files) == null ? void 0 : ne[0];
      if (q)
        if (!["image/jpeg", "image/png"].includes(q.type))
          I("Invalid file type. Please upload a JPG or PNG file.");
        else {
          const oe = await M(q);
          oe.size > 5e5
            ? I("File size is too large after compression.")
            : (I(""), p(oe));
        }
    },
    M = (W) =>
      new Promise((q) => {
        const ne = new FileReader();
        ne.readAsDataURL(W),
          (ne.onload = (oe) => {
            var ge;
            const ae = new Image();
            (ae.src = (ge = oe.target) == null ? void 0 : ge.result),
              (ae.onload = () => {
                const se = document.createElement("canvas"),
                  ke = se.getContext("2d"),
                  Xe = 800,
                  nt = Xe / ae.width;
                (se.width = Xe),
                  (se.height = ae.height * nt),
                  ke == null || ke.drawImage(ae, 0, 0, se.width, se.height),
                  se.toBlob(
                    (Oe) => {
                      if (Oe) {
                        const Je = new File([Oe], W.name, {
                          type: W.type,
                          lastModified: Date.now(),
                        });
                        q(Je);
                      }
                    },
                    W.type,
                    0.7
                  );
              });
          });
      }),
    D = () => {
      p(null), I("");
    },
    O = () => {
      const W = { fullName: "", email: "", github: "", photo: "" };
      return (
        f || (W.fullName = "Please enter a valid full name."),
        k
          ? /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(k) ||
            (W.email = "Please enter a valid email address format.")
          : (W.email = "Please enter a valid email address."),
        w
          ? /^@[a-zA-Z0-9_-]+$/.test(w) ||
            (W.github =
              "GitHub username must start with '@' and contain no spaces.")
          : (W.github = "Please enter a valid Github Username."),
        a || (W.photo = "Please upload an avatar."),
        U(W),
        Object.values(W).every((oe) => oe === "")
      );
    },
    B = (W) => {
      W.preventDefault(),
        O() &&
          (i({ fullName: f, email: k, github: w, photo: a }),
          s("/ticket"),
          console.log({ fullName: f, email: k, github: w, photo: a }),
          alert("Form submitted successfully!"));
    };
  return F.jsxs("main", {
    className:
      "flex flex-col text-white justify-center items-center h-screen text-sm text-center p-4",
    children: [
      F.jsx("div", {
        children: F.jsx("img", {
          src: "/images/logo-full.webp",
          alt: "logo coding conf",
          className: "mb-6 text-3xl font-bold",
        }),
      }),
      F.jsxs("h1", {
        className: "text-4xl font-bold",
        children: [
          "Your Journey to Coding Conf",
          F.jsx("br", {}),
          " 2025 Starts Here!",
        ],
      }),
      F.jsxs("div", {
        className: "max-w-md w-full",
        children: [
          F.jsx("p", {
            className: "my-5",
            children:
              "Secure your spot at next year's biggest coding conference.",
          }),
          F.jsxs("form", {
            onSubmit: B,
            className: "space-y-4",
            children: [
              F.jsxs("div", {
                children: [
                  F.jsx("label", {
                    className: "block text-left text-sm mb-2",
                    children: "Upload Avatar",
                  }),
                  F.jsxs("div", {
                    className: `${
                      N.photo ? "border-red-500" : "border-gray-300"
                    } flex flex-col border-2 border-dashed p-4 rounded-md`,
                    children: [
                      a
                        ? F.jsxs("div", {
                            className: "relative flex flex-col",
                            children: [
                              F.jsx("img", {
                                src: URL.createObjectURL(a),
                                alt: "Uploaded Avatar",
                                className:
                                  "mb-3 w-16 h-16 mx-auto object-cover rounded-md",
                              }),
                              F.jsxs("div", {
                                className: "flex gap-2 mx-auto",
                                children: [
                                  F.jsx("p", {
                                    onClick: D,
                                    className:
                                      "cursor-pointer  px-2 py-1 opacity-35   bg-slate-600 text-white rounded-sm  hover:underline hover:opacity-100 transition-opacity duration-300",
                                    children: "Remove image",
                                  }),
                                  F.jsx("p", {
                                    onClick: D,
                                    className:
                                      "cursor-pointer px-2 py-1 opacity-35 hover:underline  bg-slate-600   rounded-sm   hover:opacity-100 transition-opacity duration-300",
                                    children: "Change image",
                                  }),
                                ],
                              }),
                            ],
                          })
                        : F.jsxs("label", {
                            htmlFor: "file-upload",
                            className:
                              "flex flex-col items-center justify-center cursor-pointer",
                            children: [
                              F.jsx("p", {
                                className:
                                  "relative mb-3 text-white flex items-center gap-2 overflow-hidden p-3 rounded-md backdrop-blur-md hover:backdrop-blur-lg transition-all duration-300 border border-gray-500 hover:border-[#f57564] focus:outline-none focus:ring-2 focus:ring-[#f57564] focus:ring-opacity-50",
                                children: F.jsx(ym, {
                                  className: "text-xl text-[#f57564]",
                                }),
                              }),
                              F.jsx("p", {
                                className: `ml-1 text-md ${
                                  N.photo && "text-red-500"
                                }`,
                                children: "Drag and drop or click to upload",
                              }),
                            ],
                          }),
                      F.jsx("input", {
                        type: "file",
                        id: "file-upload",
                        accept: "image/png, image/jpeg",
                        onChange: z,
                        className: "hidden",
                      }),
                    ],
                  }),
                  N.photo
                    ? F.jsxs("div", {
                        className: "flex items-center mt-1",
                        children: [
                          F.jsx(zr, { className: "w-4 text-red-500" }),
                          F.jsx("p", {
                            className: "ml-1 text-xs text-red-500",
                            children: N.photo,
                          }),
                        ],
                      })
                    : F.jsxs("div", {
                        className: "flex items-center mt-1",
                        children: [
                          F.jsx(zr, { className: "w-4  " }),
                          F.jsxs("p", {
                            className: "ml-1 text-xs  ",
                            children: [
                              "Upload your photo (JPG or PNG, max size: 500KB).",
                              " ",
                            ],
                          }),
                        ],
                      }),
                ],
              }),
              F.jsxs("div", {
                children: [
                  F.jsx("label", {
                    className: "block text-left text-sm mb-2",
                    children: "Full Name",
                  }),
                  F.jsx("input", {
                    type: "text",
                    value: f,
                    onChange: (W) => h(W.target.value),
                    className: `${
                      N.fullName ? "border-red-500" : "border-gray-300"
                    } w-full px-3 py-2 text-sm border rounded-md backdrop-blur-md bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f57564]`,
                    placeholder: "Enter your full name",
                  }),
                  N.fullName &&
                    F.jsxs("div", {
                      className: "flex items-center mt-1",
                      children: [
                        F.jsx(zr, { className: "w-4 text-red-500" }),
                        F.jsx("p", {
                          className: "ml-1 text-xs text-red-500",
                          children: N.fullName,
                        }),
                      ],
                    }),
                ],
              }),
              F.jsxs("div", {
                children: [
                  F.jsx("label", {
                    className: "block text-left text-sm mb-2",
                    children: "Email Address",
                  }),
                  F.jsx("input", {
                    type: "email",
                    value: k,
                    onChange: (W) => C(W.target.value),
                    className: `${
                      N.email ? "border-red-500" : "border-gray-300"
                    } w-full px-3 py-2 text-sm border rounded-md backdrop-blur-md bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f57564]`,
                    placeholder: "example@email.com",
                  }),
                  N.email &&
                    F.jsxs("div", {
                      className: "flex items-center mt-1",
                      children: [
                        F.jsx(zr, { className: "w-4 text-red-500" }),
                        F.jsx("p", {
                          className: "ml-1 text-xs text-red-500",
                          children: N.email,
                        }),
                      ],
                    }),
                ],
              }),
              F.jsxs("div", {
                children: [
                  F.jsx("label", {
                    className: "block text-left text-sm mb-2",
                    children: "GitHub Username",
                  }),
                  F.jsx("input", {
                    type: "text",
                    value: w,
                    onChange: (W) => S(W.target.value),
                    className: `${
                      N.github ? "border-red-500" : "border-gray-300"
                    } w-full px-3 py-2 text-sm border rounded-md backdrop-blur-md bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f57564]`,
                    placeholder: "@yourusername",
                  }),
                  N.github &&
                    F.jsxs("div", {
                      className: "flex items-center mt-1",
                      children: [
                        F.jsx(zr, { className: "w-4 text-red-500" }),
                        F.jsx("p", {
                          className: "ml-1 text-xs text-red-500",
                          children: N.github,
                        }),
                      ],
                    }),
                ],
              }),
              F.jsx("button", {
                type: "submit",
                className:
                  "w-full py-2 text-sm bg-[#f57564] text-black font-bold rounded-md",
                children: "Generate My Ticket",
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function km() {
  const { userData: i } = Mc(),
    s = i.photo ? URL.createObjectURL(i.photo) : null;
  return (
    console.log(i),
    F.jsxs("main", {
      className:
        "flex flex-col text-white justify-center items-center h-screen text-sm text-center p-4",
      children: [
        F.jsx("a", {
          href: "/",
          children: F.jsx("img", {
            src: "/images/logo-full.webp",
            alt: "logo coding conf",
            className: "mb-6 text-3xl font-bold",
          }),
        }),
        F.jsxs("h1", {
          className: "text-4xl font-bold",
          children: [
            "Congrats,",
            F.jsx("span", {
              className:
                "bg-gradient-to-r from-red-500 to-white bg-clip-text text-transparent",
              children: i.fullName,
            }),
            "!",
            F.jsx("br", {}),
            " Your ticket is ready.",
          ],
        }),
        F.jsxs("p", {
          className: "mt-5",
          children: [
            "We've emailed your ticket to",
            F.jsx("br", {}),
            " ",
            i.email,
            " and will send updates in",
            F.jsx("br", {}),
            " the run-up to the event.",
          ],
        }),
        F.jsx("div", {
          className: "flex items-center mt-8",
          children: F.jsxs("div", {
            className: "relative w-96",
            children: [
              F.jsx("img", {
                src: "/images/pattern-ticket.webp",
                alt: "ticket user",
                className: "w-full",
              }),
              F.jsxs("div", {
                className:
                  "absolute mt-2 top-2/4 left-1/4 ml-10 transform -translate-x-1/2 -translate-y-1/2 text-center",
                children: [
                  F.jsx("img", {
                    src: "/images/logo-full.webp",
                    alt: "logo coding conf",
                    className: "text-3xl font-bold",
                  }),
                  F.jsx("p", {
                    className: " ml-8 mt-2 text-slate-400",
                    children: "Jan 31, 2025 / Austin, TX",
                  }),
                  F.jsxs("div", {
                    className: "flex items-start my-5",
                    children: [
                      s
                        ? F.jsx("img", {
                            src: s,
                            alt: "User Avatar",
                            className: "w-16 h-16 object-cover rounded-md",
                          })
                        : F.jsx("img", {
                            src: "/images/image-avatar.jpg",
                            alt: "Uploaded Avatar",
                            className: "w-16 h-16 object-cover rounded-md",
                          }),
                      F.jsxs("div", {
                        className: "flex flex-col ml-2",
                        children: [
                          F.jsx("h2", {
                            className: "text-xl text-left w-40 truncate",
                            children: i.fullName,
                          }),
                          F.jsxs("div", {
                            className: "flex items-center",
                            children: [
                              F.jsx(gm, { className: "w-5" }),
                              F.jsx("p", {
                                className:
                                  "text-base ml-1 text-slate-400   truncate",
                                children: i.github,
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    })
  );
}
const Em = () =>
  F.jsxs(jp, {
    children: [
      F.jsx(bi, { path: "/", element: F.jsx(Sm, {}) }),
      F.jsx(bi, { path: "/ticket", element: F.jsx(km, {}) }),
    ],
  });
Hd.createRoot(document.getElementById("root")).render(
  F.jsx(xm, {
    children: F.jsx(E.StrictMode, {
      children: F.jsx(nm, { children: F.jsx(Em, {}) }),
    }),
  })
);

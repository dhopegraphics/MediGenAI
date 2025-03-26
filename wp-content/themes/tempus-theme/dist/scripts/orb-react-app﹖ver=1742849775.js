function w_(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
!(function () {
  const e = document.createElement("link").relList;
  if (!(e && e.supports && e.supports("modulepreload"))) {
    for (const e of document.querySelectorAll('link[rel="modulepreload"]'))
      t(e);
    new MutationObserver((e) => {
      for (const n of e)
        if ("childList" === n.type)
          for (const e of n.addedNodes)
            "LINK" === e.tagName && "modulepreload" === e.rel && t(e);
    }).observe(document, { childList: !0, subtree: !0 });
  }
  function t(e) {
    if (e.ep) return;
    e.ep = !0;
    const t = (function (e) {
      const t = {};
      return (
        e.integrity && (t.integrity = e.integrity),
        e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
        "use-credentials" === e.crossOrigin
          ? (t.credentials = "include")
          : "anonymous" === e.crossOrigin
          ? (t.credentials = "omit")
          : (t.credentials = "same-origin"),
        t
      );
    })(e);
    fetch(e.href, t);
  }
})();
var Lp = { exports: {} },
  dl = {},
  bp = { exports: {} },
  Fe = {},
  yo = Symbol.for("react.element"),
  A_ = Symbol.for("react.portal"),
  C_ = Symbol.for("react.fragment"),
  R_ = Symbol.for("react.strict_mode"),
  P_ = Symbol.for("react.profiler"),
  L_ = Symbol.for("react.provider"),
  b_ = Symbol.for("react.context"),
  D_ = Symbol.for("react.forward_ref"),
  U_ = Symbol.for("react.suspense"),
  I_ = Symbol.for("react.memo"),
  N_ = Symbol.for("react.lazy"),
  Td = Symbol.iterator;
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function F_(e) {
  return null === e || "object" != typeof e
    ? null
    : "function" == typeof (e = (Td && e[Td]) || e["@@iterator"])
    ? e
    : null;
}
var Dp = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Up = Object.assign,
  Ip = {};
function Es(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Ip),
    (this.updater = n || Dp);
}
function Np() {}
function ff(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Ip),
    (this.updater = n || Dp);
}
(Es.prototype.isReactComponent = {}),
  (Es.prototype.setState = function (e, t) {
    if ("object" != typeof e && "function" != typeof e && null != e)
      throw Error(
        "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, e, t, "setState");
  }),
  (Es.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate");
  }),
  (Np.prototype = Es.prototype);
var df = (ff.prototype = new Np());
(df.constructor = ff), Up(df, Es.prototype), (df.isPureReactComponent = !0);
var wd = Array.isArray,
  Fp = Object.prototype.hasOwnProperty,
  hf = { current: null },
  Op = { key: !0, ref: !0, __self: !0, __source: !0 };
function zp(e, t, n) {
  var r,
    i = {},
    a = null,
    o = null;
  if (null != t)
    for (r in (void 0 !== t.ref && (o = t.ref),
    void 0 !== t.key && (a = "" + t.key),
    t))
      Fp.call(t, r) && !Op.hasOwnProperty(r) && (i[r] = t[r]);
  var s = arguments.length - 2;
  if (1 === s) i.children = n;
  else if (1 < s) {
    for (var l = Array(s), c = 0; c < s; c++) l[c] = arguments[c + 2];
    i.children = l;
  }
  if (e && e.defaultProps)
    for (r in (s = e.defaultProps)) void 0 === i[r] && (i[r] = s[r]);
  return {
    $$typeof: yo,
    type: e,
    key: a,
    ref: o,
    props: i,
    _owner: hf.current,
  };
}
function O_(e, t) {
  return {
    $$typeof: yo,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function pf(e) {
  return "object" == typeof e && null !== e && e.$$typeof === yo;
}
function z_(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (e) {
      return t[e];
    })
  );
}
var Ad = /\/+/g;
function Ol(e, t) {
  return "object" == typeof e && null !== e && null != e.key
    ? z_("" + e.key)
    : t.toString(36);
}
function va(e, t, n, r, i) {
  var a = typeof e;
  ("undefined" === a || "boolean" === a) && (e = null);
  var o = !1;
  if (null === e) o = !0;
  else
    switch (a) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case yo:
          case A_:
            o = !0;
        }
    }
  if (o)
    return (
      (i = i((o = e))),
      (e = "" === r ? "." + Ol(o, 0) : r),
      wd(i)
        ? ((n = ""),
          null != e && (n = e.replace(Ad, "$&/") + "/"),
          va(i, t, n, "", function (e) {
            return e;
          }))
        : null != i &&
          (pf(i) &&
            (i = O_(
              i,
              n +
                (!i.key || (o && o.key === i.key)
                  ? ""
                  : ("" + i.key).replace(Ad, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((o = 0), (r = "" === r ? "." : r + ":"), wd(e)))
    for (var s = 0; s < e.length; s++) {
      var l = r + Ol((a = e[s]), s);
      o += va(a, t, n, l, i);
    }
  else if ("function" == typeof (l = F_(e)))
    for (e = l.call(e), s = 0; !(a = e.next()).done; )
      o += va((a = a.value), t, n, (l = r + Ol(a, s++)), i);
  else if ("object" === a)
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          ("[object Object]" === t
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function Do(e, t, n) {
  if (null == e) return e;
  var r = [],
    i = 0;
  return (
    va(e, r, "", "", function (e) {
      return t.call(n, e, i++);
    }),
    r
  );
}
function k_(e) {
  if (-1 === e._status) {
    var t = e._result;
    (t = t()).then(
      function (t) {
        (0 === e._status || -1 === e._status) &&
          ((e._status = 1), (e._result = t));
      },
      function (t) {
        (0 === e._status || -1 === e._status) &&
          ((e._status = 2), (e._result = t));
      }
    ),
      -1 === e._status && ((e._status = 0), (e._result = t));
  }
  if (1 === e._status) return e._result.default;
  throw e._result;
}
var Ht = { current: null },
  xa = { transition: null },
  B_ = {
    ReactCurrentDispatcher: Ht,
    ReactCurrentBatchConfig: xa,
    ReactCurrentOwner: hf,
  };
function kp() {
  throw Error("act(...) is not supported in production builds of React.");
}
(Fe.Children = {
  map: Do,
  forEach: function (e, t, n) {
    Do(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Do(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Do(e, function (e) {
        return e;
      }) || []
    );
  },
  only: function (e) {
    if (!pf(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
}),
  (Fe.Component = Es),
  (Fe.Fragment = C_),
  (Fe.Profiler = P_),
  (Fe.PureComponent = ff),
  (Fe.StrictMode = R_),
  (Fe.Suspense = U_),
  (Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = B_),
  (Fe.act = kp),
  (Fe.cloneElement = function (e, t, n) {
    if (null == e)
      throw Error(
        "React.cloneElement(...): The argument must be a React element, but you passed " +
          e +
          "."
      );
    var r = Up({}, e.props),
      i = e.key,
      a = e.ref,
      o = e._owner;
    if (null != t) {
      if (
        (void 0 !== t.ref && ((a = t.ref), (o = hf.current)),
        void 0 !== t.key && (i = "" + t.key),
        e.type && e.type.defaultProps)
      )
        var s = e.type.defaultProps;
      for (l in t)
        Fp.call(t, l) &&
          !Op.hasOwnProperty(l) &&
          (r[l] = void 0 === t[l] && void 0 !== s ? s[l] : t[l]);
    }
    var l = arguments.length - 2;
    if (1 === l) r.children = n;
    else if (1 < l) {
      s = Array(l);
      for (var c = 0; c < l; c++) s[c] = arguments[c + 2];
      r.children = s;
    }
    return { $$typeof: yo, type: e.type, key: i, ref: a, props: r, _owner: o };
  }),
  (Fe.createContext = function (e) {
    return (
      ((e = {
        $$typeof: b_,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null,
      }).Provider = { $$typeof: L_, _context: e }),
      (e.Consumer = e)
    );
  }),
  (Fe.createElement = zp),
  (Fe.createFactory = function (e) {
    var t = zp.bind(null, e);
    return (t.type = e), t;
  }),
  (Fe.createRef = function () {
    return { current: null };
  }),
  (Fe.forwardRef = function (e) {
    return { $$typeof: D_, render: e };
  }),
  (Fe.isValidElement = pf),
  (Fe.lazy = function (e) {
    return { $$typeof: N_, _payload: { _status: -1, _result: e }, _init: k_ };
  }),
  (Fe.memo = function (e, t) {
    return { $$typeof: I_, type: e, compare: void 0 === t ? null : t };
  }),
  (Fe.startTransition = function (e) {
    var t = xa.transition;
    xa.transition = {};
    try {
      e();
    } finally {
      xa.transition = t;
    }
  }),
  (Fe.unstable_act = kp),
  (Fe.useCallback = function (e, t) {
    return Ht.current.useCallback(e, t);
  }),
  (Fe.useContext = function (e) {
    return Ht.current.useContext(e);
  }),
  (Fe.useDebugValue = function () {}),
  (Fe.useDeferredValue = function (e) {
    return Ht.current.useDeferredValue(e);
  }),
  (Fe.useEffect = function (e, t) {
    return Ht.current.useEffect(e, t);
  }),
  (Fe.useId = function () {
    return Ht.current.useId();
  }),
  (Fe.useImperativeHandle = function (e, t, n) {
    return Ht.current.useImperativeHandle(e, t, n);
  }),
  (Fe.useInsertionEffect = function (e, t) {
    return Ht.current.useInsertionEffect(e, t);
  }),
  (Fe.useLayoutEffect = function (e, t) {
    return Ht.current.useLayoutEffect(e, t);
  }),
  (Fe.useMemo = function (e, t) {
    return Ht.current.useMemo(e, t);
  }),
  (Fe.useReducer = function (e, t, n) {
    return Ht.current.useReducer(e, t, n);
  }),
  (Fe.useRef = function (e) {
    return Ht.current.useRef(e);
  }),
  (Fe.useState = function (e) {
    return Ht.current.useState(e);
  }),
  (Fe.useSyncExternalStore = function (e, t, n) {
    return Ht.current.useSyncExternalStore(e, t, n);
  }),
  (Fe.useTransition = function () {
    return Ht.current.useTransition();
  }),
  (Fe.version = "18.3.1"),
  (bp.exports = Fe);
var ts = bp.exports;
const H_ = w_(ts);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var V_ = ts,
  G_ = Symbol.for("react.element"),
  W_ = Symbol.for("react.fragment"),
  X_ = Object.prototype.hasOwnProperty,
  Y_ = V_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  q_ = { key: !0, ref: !0, __self: !0, __source: !0 };
function Bp(e, t, n) {
  var r,
    i = {},
    a = null,
    o = null;
  for (r in (void 0 !== n && (a = "" + n),
  void 0 !== t.key && (a = "" + t.key),
  void 0 !== t.ref && (o = t.ref),
  t))
    X_.call(t, r) && !q_.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in (t = e.defaultProps)) void 0 === i[r] && (i[r] = t[r]);
  return {
    $$typeof: G_,
    type: e,
    key: a,
    ref: o,
    props: i,
    _owner: Y_.current,
  };
}
(dl.Fragment = W_), (dl.jsx = Bp), (dl.jsxs = Bp), (Lp.exports = dl);
var fr = Lp.exports,
  Ou = {},
  Hp = { exports: {} },
  ln = {},
  Vp = { exports: {} },
  Gp = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ !(function (e) {
  function t(e, t) {
    var n = e.length;
    e.push(t);
    e: for (; 0 < n; ) {
      var r = (n - 1) >>> 1,
        a = e[r];
      if (!(0 < i(a, t))) break e;
      (e[r] = t), (e[n] = a), (n = r);
    }
  }
  function n(e) {
    return 0 === e.length ? null : e[0];
  }
  function r(e) {
    if (0 === e.length) return null;
    var t = e[0],
      n = e.pop();
    if (n !== t) {
      e[0] = n;
      e: for (var r = 0, a = e.length, o = a >>> 1; r < o; ) {
        var s = 2 * (r + 1) - 1,
          l = e[s],
          c = s + 1,
          u = e[c];
        if (0 > i(l, n))
          c < a && 0 > i(u, l)
            ? ((e[r] = u), (e[c] = n), (r = c))
            : ((e[r] = l), (e[s] = n), (r = s));
        else {
          if (!(c < a && 0 > i(u, n))) break e;
          (e[r] = u), (e[c] = n), (r = c);
        }
      }
    }
    return t;
  }
  function i(e, t) {
    var n = e.sortIndex - t.sortIndex;
    return 0 !== n ? n : e.id - t.id;
  }
  if ("object" == typeof performance && "function" == typeof performance.now) {
    var a = performance;
    e.unstable_now = function () {
      return a.now();
    };
  } else {
    var o = Date,
      s = o.now();
    e.unstable_now = function () {
      return o.now() - s;
    };
  }
  var l = [],
    c = [],
    u = 1,
    d = null,
    h = 3,
    f = !1,
    p = !1,
    m = !1,
    g = "function" == typeof setTimeout ? setTimeout : null,
    v = "function" == typeof clearTimeout ? clearTimeout : null,
    _ = typeof setImmediate < "u" ? setImmediate : null;
  function x(e) {
    for (var i = n(c); null !== i; ) {
      if (null === i.callback) r(c);
      else {
        if (!(i.startTime <= e)) break;
        r(c), (i.sortIndex = i.expirationTime), t(l, i);
      }
      i = n(c);
    }
  }
  function y(e) {
    if (((m = !1), x(e), !p))
      if (null !== n(l)) (p = !0), U(S);
      else {
        var t = n(c);
        null !== t && D(y, t.startTime - e);
      }
  }
  function S(t, i) {
    (p = !1), m && ((m = !1), v(T), (T = -1)), (f = !0);
    var a = h;
    try {
      for (
        x(i), d = n(l);
        null !== d && (!(d.expirationTime > i) || (t && !R()));

      ) {
        var o = d.callback;
        if ("function" == typeof o) {
          (d.callback = null), (h = d.priorityLevel);
          var s = o(d.expirationTime <= i);
          (i = e.unstable_now()),
            "function" == typeof s ? (d.callback = s) : d === n(l) && r(l),
            x(i);
        } else r(l);
        d = n(l);
      }
      if (null !== d) var u = !0;
      else {
        var g = n(c);
        null !== g && D(y, g.startTime - i), (u = !1);
      }
      return u;
    } finally {
      (d = null), (h = a), (f = !1);
    }
  }
  typeof navigator < "u" &&
    void 0 !== navigator.scheduling &&
    void 0 !== navigator.scheduling.isInputPending &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  var M,
    E = !1,
    b = null,
    T = -1,
    w = 5,
    A = -1;
  function R() {
    return !(e.unstable_now() - A < w);
  }
  function C() {
    if (null !== b) {
      var t = e.unstable_now();
      A = t;
      var n = !0;
      try {
        n = b(!0, t);
      } finally {
        n ? M() : ((E = !1), (b = null));
      }
    } else E = !1;
  }
  if ("function" == typeof _)
    M = function () {
      _(C);
    };
  else if (typeof MessageChannel < "u") {
    var P = new MessageChannel(),
      L = P.port2;
    (P.port1.onmessage = C),
      (M = function () {
        L.postMessage(null);
      });
  } else
    M = function () {
      g(C, 0);
    };
  function U(e) {
    (b = e), E || ((E = !0), M());
  }
  function D(t, n) {
    T = g(function () {
      t(e.unstable_now());
    }, n);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (e) {
      e.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      p || f || ((p = !0), U(S));
    }),
    (e.unstable_forceFrameRate = function (e) {
      0 > e || 125 < e
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (w = 0 < e ? Math.floor(1e3 / e) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (e) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var t = 3;
          break;
        default:
          t = h;
      }
      var n = h;
      h = t;
      try {
        return e();
      } finally {
        h = n;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (e, t) {
      switch (e) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          e = 3;
      }
      var n = h;
      h = e;
      try {
        return t();
      } finally {
        h = n;
      }
    }),
    (e.unstable_scheduleCallback = function (r, i, a) {
      var o = e.unstable_now();
      switch (
        ("object" == typeof a && null !== a
          ? (a = "number" == typeof (a = a.delay) && 0 < a ? o + a : o)
          : (a = o),
        r)
      ) {
        case 1:
          var s = -1;
          break;
        case 2:
          s = 250;
          break;
        case 5:
          s = 1073741823;
          break;
        case 4:
          s = 1e4;
          break;
        default:
          s = 5e3;
      }
      return (
        (r = {
          id: u++,
          callback: i,
          priorityLevel: r,
          startTime: a,
          expirationTime: (s = a + s),
          sortIndex: -1,
        }),
        a > o
          ? ((r.sortIndex = a),
            t(c, r),
            null === n(l) &&
              r === n(c) &&
              (m ? (v(T), (T = -1)) : (m = !0), D(y, a - o)))
          : ((r.sortIndex = s), t(l, r), p || f || ((p = !0), U(S))),
        r
      );
    }),
    (e.unstable_shouldYield = R),
    (e.unstable_wrapCallback = function (e) {
      var t = h;
      return function () {
        var n = h;
        h = t;
        try {
          return e.apply(this, arguments);
        } finally {
          h = n;
        }
      };
    });
})(Gp),
  (Vp.exports = Gp);
var $_ = Vp.exports,
  j_ = ts,
  an = $_;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function J(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
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
var Wp = new Set(),
  to = {};
function Sr(e, t) {
  fs(e, t), fs(e + "Capture", t);
}
function fs(e, t) {
  for (to[e] = t, e = 0; e < t.length; e++) Wp.add(t[e]);
}
var oi = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  zu = Object.prototype.hasOwnProperty,
  K_ =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Cd = {},
  Rd = {};
function Z_(e) {
  return (
    !!zu.call(Rd, e) ||
    (!zu.call(Cd, e) && (K_.test(e) ? (Rd[e] = !0) : ((Cd[e] = !0), !1)))
  );
}
function Q_(e, t, n, r) {
  if (null !== n && 0 === n.type) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return (
        !r &&
        (null !== n
          ? !n.acceptsBooleans
          : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e)
      );
    default:
      return !1;
  }
}
function J_(e, t, n, r) {
  if (null === t || typeof t > "u" || Q_(e, t, n, r)) return !0;
  if (r) return !1;
  if (null !== n)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return !1 === t;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Vt(e, t, n, r, i, a, o) {
  (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = a),
    (this.removeEmptyString = o);
}
var bt = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    bt[e] = new Vt(e, 0, !1, e, null, !1, !1);
  }),
  [
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
  ].forEach(function (e) {
    var t = e[0];
    bt[t] = new Vt(t, 1, !1, e[1], null, !1, !1);
  }),
  ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
    bt[e] = new Vt(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }),
  [
    "autoReverse",
    "externalResourcesRequired",
    "focusable",
    "preserveAlpha",
  ].forEach(function (e) {
    bt[e] = new Vt(e, 2, !1, e, null, !1, !1);
  }),
  "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
    .split(" ")
    .forEach(function (e) {
      bt[e] = new Vt(e, 3, !1, e.toLowerCase(), null, !1, !1);
    }),
  ["checked", "multiple", "muted", "selected"].forEach(function (e) {
    bt[e] = new Vt(e, 3, !0, e, null, !1, !1);
  }),
  ["capture", "download"].forEach(function (e) {
    bt[e] = new Vt(e, 4, !1, e, null, !1, !1);
  }),
  ["cols", "rows", "size", "span"].forEach(function (e) {
    bt[e] = new Vt(e, 6, !1, e, null, !1, !1);
  }),
  ["rowSpan", "start"].forEach(function (e) {
    bt[e] = new Vt(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
var mf = /[\-:]([a-z])/g;
function gf(e) {
  return e[1].toUpperCase();
}
function _f(e, t, n, r) {
  var i = bt.hasOwnProperty(t) ? bt[t] : null;
  (null !== i
    ? 0 !== i.type
    : r ||
      !(2 < t.length) ||
      ("o" !== t[0] && "O" !== t[0]) ||
      ("n" !== t[1] && "N" !== t[1])) &&
    (J_(t, n, i, r) && (n = null),
    r || null === i
      ? Z_(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = null === n ? 3 !== i.type && "" : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        null === n
          ? e.removeAttribute(t)
          : ((n = 3 === (i = i.type) || (4 === i && !0 === n) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(mf, gf);
    bt[t] = new Vt(t, 1, !1, e, null, !1, !1);
  }),
  "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(mf, gf);
      bt[t] = new Vt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
    }),
  ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
    var t = e.replace(mf, gf);
    bt[t] = new Vt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }),
  ["tabIndex", "crossOrigin"].forEach(function (e) {
    bt[e] = new Vt(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }),
  (bt.xlinkHref = new Vt(
    "xlinkHref",
    1,
    !1,
    "xlink:href",
    "http://www.w3.org/1999/xlink",
    !0,
    !1
  )),
  ["src", "href", "action", "formAction"].forEach(function (e) {
    bt[e] = new Vt(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
var hi = j_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Uo = Symbol.for("react.element"),
  Vr = Symbol.for("react.portal"),
  Gr = Symbol.for("react.fragment"),
  vf = Symbol.for("react.strict_mode"),
  ku = Symbol.for("react.profiler"),
  Xp = Symbol.for("react.provider"),
  Yp = Symbol.for("react.context"),
  xf = Symbol.for("react.forward_ref"),
  Bu = Symbol.for("react.suspense"),
  Hu = Symbol.for("react.suspense_list"),
  yf = Symbol.for("react.memo"),
  Mi = Symbol.for("react.lazy"),
  qp = Symbol.for("react.offscreen"),
  Pd = Symbol.iterator;
function Rs(e) {
  return null === e || "object" != typeof e
    ? null
    : "function" == typeof (e = (Pd && e[Pd]) || e["@@iterator"])
    ? e
    : null;
}
var zl,
  at = Object.assign;
function Hs(e) {
  if (void 0 === zl)
    try {
      throw Error();
    } catch (e) {
      var t = e.stack.trim().match(/\n( *(at )?)/);
      zl = (t && t[1]) || "";
    }
  return "\n" + zl + e;
}
var kl = !1;
function Bl(e, t) {
  if (!e || kl) return "";
  kl = !0;
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
        "object" == typeof Reflect && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (e) {
          var r = e;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (e) {
          r = e;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (e) {
        r = e;
      }
      e();
    }
  } catch (t) {
    if (t && r && "string" == typeof t.stack) {
      for (
        var i = t.stack.split("\n"),
          a = r.stack.split("\n"),
          o = i.length - 1,
          s = a.length - 1;
        1 <= o && 0 <= s && i[o] !== a[s];

      )
        s--;
      for (; 1 <= o && 0 <= s; o--, s--)
        if (i[o] !== a[s]) {
          if (1 !== o || 1 !== s)
            do {
              if ((o--, 0 > --s || i[o] !== a[s])) {
                var l = "\n" + i[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            } while (1 <= o && 0 <= s);
          break;
        }
    }
  } finally {
    (kl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Hs(e) : "";
}
function ev(e) {
  switch (e.tag) {
    case 5:
      return Hs(e.type);
    case 16:
      return Hs("Lazy");
    case 13:
      return Hs("Suspense");
    case 19:
      return Hs("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Bl(e.type, !1));
    case 11:
      return (e = Bl(e.type.render, !1));
    case 1:
      return (e = Bl(e.type, !0));
    default:
      return "";
  }
}
function Vu(e) {
  if (null == e) return null;
  if ("function" == typeof e) return e.displayName || e.name || null;
  if ("string" == typeof e) return e;
  switch (e) {
    case Gr:
      return "Fragment";
    case Vr:
      return "Portal";
    case ku:
      return "Profiler";
    case vf:
      return "StrictMode";
    case Bu:
      return "Suspense";
    case Hu:
      return "SuspenseList";
  }
  if ("object" == typeof e)
    switch (e.$$typeof) {
      case Yp:
        return (e.displayName || "Context") + ".Consumer";
      case Xp:
        return (e._context.displayName || "Context") + ".Provider";
      case xf:
        var t = e.render;
        return (
          (e = e.displayName) ||
            (e =
              "" !== (e = t.displayName || t.name || "")
                ? "ForwardRef(" + e + ")"
                : "ForwardRef"),
          e
        );
      case yf:
        return null !== (t = e.displayName || null) ? t : Vu(e.type) || "Memo";
      case Mi:
        (t = e._payload), (e = e._init);
        try {
          return Vu(e(t));
        } catch {}
    }
  return null;
}
function tv(e) {
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
        (e = (e = t.render).displayName || e.name || ""),
        t.displayName || ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
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
      return Vu(t);
    case 8:
      return t === vf ? "StrictMode" : "Mode";
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
      if ("function" == typeof t) return t.displayName || t.name || null;
      if ("string" == typeof t) return t;
  }
  return null;
}
function ki(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
    case "object":
      return e;
    default:
      return "";
  }
}
function $p(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    "input" === e.toLowerCase() &&
    ("checkbox" === t || "radio" === t)
  );
}
function nv(e) {
  var t = $p(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    "function" == typeof n.get &&
    "function" == typeof n.set
  ) {
    var i = n.get,
      a = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (e) {
          (r = "" + e), a.call(this, e);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (e) {
          r = "" + e;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Io(e) {
  e._valueTracker || (e._valueTracker = nv(e));
}
function jp(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = $p(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r) !== n && (t.setValue(e), !0)
  );
}
function Fa(e) {
  if (typeof (e = e || (typeof document < "u" ? document : void 0)) > "u")
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Gu(e, t) {
  var n = t.checked;
  return at({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Ld(e, t) {
  var n = null == t.defaultValue ? "" : t.defaultValue,
    r = null != t.checked ? t.checked : t.defaultChecked;
  (n = ki(null != t.value ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        "checkbox" === t.type || "radio" === t.type
          ? null != t.checked
          : null != t.value,
    });
}
function Kp(e, t) {
  null != (t = t.checked) && _f(e, "checked", t, !1);
}
function Wu(e, t) {
  Kp(e, t);
  var n = ki(t.value),
    r = t.type;
  if (null != n)
    "number" === r
      ? ((0 === n && "" === e.value) || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if ("submit" === r || "reset" === r)
    return void e.removeAttribute("value");
  t.hasOwnProperty("value")
    ? Xu(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Xu(e, t.type, ki(t.defaultValue)),
    null == t.checked &&
      null != t.defaultChecked &&
      (e.defaultChecked = !!t.defaultChecked);
}
function bd(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        ("submit" !== r && "reset" !== r) ||
        (void 0 !== t.value && null !== t.value)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  "" !== (n = e.name) && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    "" !== n && (e.name = n);
}
function Xu(e, t, n) {
  ("number" !== t || Fa(e.ownerDocument) !== e) &&
    (null == n
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Vs = Array.isArray;
function ns(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + ki(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n)
        return (e[i].selected = !0), void (r && (e[i].defaultSelected = !0));
      null !== t || e[i].disabled || (t = e[i]);
    }
    null !== t && (t.selected = !0);
  }
}
function Yu(e, t) {
  if (null != t.dangerouslySetInnerHTML) throw Error(J(91));
  return at({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Dd(e, t) {
  var n = t.value;
  if (null == n) {
    if (((n = t.children), (t = t.defaultValue), null != n)) {
      if (null != t) throw Error(J(92));
      if (Vs(n)) {
        if (1 < n.length) throw Error(J(93));
        n = n[0];
      }
      t = n;
    }
    null == t && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: ki(n) };
}
function Zp(e, t) {
  var n = ki(t.value),
    r = ki(t.defaultValue);
  null != n &&
    ((n = "" + n) !== e.value && (e.value = n),
    null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)),
    null != r && (e.defaultValue = "" + r);
}
function Ud(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && "" !== t && null !== t && (e.value = t);
}
function Qp(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function qu(e, t) {
  return null == e || "http://www.w3.org/1999/xhtml" === e
    ? Qp(t)
    : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var No,
  Jp = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n);
          });
        }
      : e;
  })(function (e, t) {
    if ("http://www.w3.org/2000/svg" !== e.namespaceURI || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        (No = No || document.createElement("div")).innerHTML =
          "<svg>" + t.valueOf().toString() + "</svg>",
          t = No.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function no(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && 3 === n.nodeType)
      return void (n.nodeValue = t);
  }
  e.textContent = t;
}
var Ys = {
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
  iv = ["Webkit", "ms", "Moz", "O"];
function em(e, t, n) {
  return null == t || "boolean" == typeof t || "" === t
    ? ""
    : n || "number" != typeof t || 0 === t || (Ys.hasOwnProperty(e) && Ys[e])
    ? ("" + t).trim()
    : t + "px";
}
function tm(e, t) {
  for (var n in ((e = e.style), t))
    if (t.hasOwnProperty(n)) {
      var r = 0 === n.indexOf("--"),
        i = em(n, t[n], r);
      "float" === n && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
Object.keys(Ys).forEach(function (e) {
  iv.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Ys[t] = Ys[e]);
  });
});
var rv = at(
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
function $u(e, t) {
  if (t) {
    if (rv[e] && (null != t.children || null != t.dangerouslySetInnerHTML))
      throw Error(J(137, e));
    if (null != t.dangerouslySetInnerHTML) {
      if (null != t.children) throw Error(J(60));
      if (
        "object" != typeof t.dangerouslySetInnerHTML ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(J(61));
    }
    if (null != t.style && "object" != typeof t.style) throw Error(J(62));
  }
}
function ju(e, t) {
  if (-1 === e.indexOf("-")) return "string" == typeof t.is;
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
var Ku = null;
function Sf(e) {
  return (
    (e = e.target || e.srcElement || window).correspondingUseElement &&
      (e = e.correspondingUseElement),
    3 === e.nodeType ? e.parentNode : e
  );
}
var Zu = null,
  is = null,
  rs = null;
function Id(e) {
  if ((e = Eo(e))) {
    if ("function" != typeof Zu) throw Error(J(280));
    var t = e.stateNode;
    t && ((t = _l(t)), Zu(e.stateNode, e.type, t));
  }
}
function nm(e) {
  is ? (rs ? rs.push(e) : (rs = [e])) : (is = e);
}
function im() {
  if (is) {
    var e = is,
      t = rs;
    if (((rs = is = null), Id(e), t)) for (e = 0; e < t.length; e++) Id(t[e]);
  }
}
function rm(e, t) {
  return e(t);
}
function sm() {}
var Hl = !1;
function om(e, t, n) {
  if (Hl) return e(t, n);
  Hl = !0;
  try {
    return rm(e, t, n);
  } finally {
    (Hl = !1), (null !== is || null !== rs) && (sm(), im());
  }
}
function io(e, t) {
  var n = e.stateNode;
  if (null === n) return null;
  var r = _l(n);
  if (null === r) return null;
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
        (r = !(
          "button" === (e = e.type) ||
          "input" === e ||
          "select" === e ||
          "textarea" === e
        )),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && "function" != typeof n) throw Error(J(231, t, typeof n));
  return n;
}
var Qu = !1;
if (oi)
  try {
    var Ps = {};
    Object.defineProperty(Ps, "passive", {
      get: function () {
        Qu = !0;
      },
    }),
      window.addEventListener("test", Ps, Ps),
      window.removeEventListener("test", Ps, Ps);
  } catch {
    Qu = !1;
  }
function sv(e, t, n, r, i, a, o, s, l) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (e) {
    this.onError(e);
  }
}
var qs = !1,
  Oa = null,
  za = !1,
  Ju = null,
  ov = {
    onError: function (e) {
      (qs = !0), (Oa = e);
    },
  };
function av(e, t, n, r, i, a, o, s, l) {
  (qs = !1), (Oa = null), sv.apply(ov, arguments);
}
function lv(e, t, n, r, i, a, o, s, l) {
  if ((av.apply(this, arguments), qs)) {
    if (!qs) throw Error(J(198));
    var c = Oa;
    (qs = !1), (Oa = null), za || ((za = !0), (Ju = c));
  }
}
function Mr(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do {
      4098 & (t = e).flags && (n = t.return), (e = t.return);
    } while (e);
  }
  return 3 === t.tag ? n : null;
}
function am(e) {
  if (13 === e.tag) {
    var t = e.memoizedState;
    if (
      (null === t && null !== (e = e.alternate) && (t = e.memoizedState),
      null !== t)
    )
      return t.dehydrated;
  }
  return null;
}
function Nd(e) {
  if (Mr(e) !== e) throw Error(J(188));
}
function uv(e) {
  var t = e.alternate;
  if (!t) {
    if (null === (t = Mr(e))) throw Error(J(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (null === i) break;
    var a = i.alternate;
    if (null === a) {
      if (null !== (r = i.return)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === a.child) {
      for (a = i.child; a; ) {
        if (a === n) return Nd(i), e;
        if (a === r) return Nd(i), t;
        a = a.sibling;
      }
      throw Error(J(188));
    }
    if (n.return !== r.return) (n = i), (r = a);
    else {
      for (var o = !1, s = i.child; s; ) {
        if (s === n) {
          (o = !0), (n = i), (r = a);
          break;
        }
        if (s === r) {
          (o = !0), (r = i), (n = a);
          break;
        }
        s = s.sibling;
      }
      if (!o) {
        for (s = a.child; s; ) {
          if (s === n) {
            (o = !0), (n = a), (r = i);
            break;
          }
          if (s === r) {
            (o = !0), (r = a), (n = i);
            break;
          }
          s = s.sibling;
        }
        if (!o) throw Error(J(189));
      }
    }
    if (n.alternate !== r) throw Error(J(190));
  }
  if (3 !== n.tag) throw Error(J(188));
  return n.stateNode.current === n ? e : t;
}
function lm(e) {
  return null !== (e = uv(e)) ? um(e) : null;
}
function um(e) {
  if (5 === e.tag || 6 === e.tag) return e;
  for (e = e.child; null !== e; ) {
    var t = um(e);
    if (null !== t) return t;
    e = e.sibling;
  }
  return null;
}
var cm = an.unstable_scheduleCallback,
  Fd = an.unstable_cancelCallback,
  cv = an.unstable_shouldYield,
  fv = an.unstable_requestPaint,
  dt = an.unstable_now,
  dv = an.unstable_getCurrentPriorityLevel,
  Mf = an.unstable_ImmediatePriority,
  fm = an.unstable_UserBlockingPriority,
  ka = an.unstable_NormalPriority,
  hv = an.unstable_LowPriority,
  dm = an.unstable_IdlePriority,
  hl = null,
  Hn = null;
function pv(e) {
  if (Hn && "function" == typeof Hn.onCommitFiberRoot)
    try {
      Hn.onCommitFiberRoot(hl, e, void 0, !(128 & ~e.current.flags));
    } catch {}
}
var Ln = Math.clz32 ? Math.clz32 : _v,
  mv = Math.log,
  gv = Math.LN2;
function _v(e) {
  return 0 === (e >>>= 0) ? 32 : (31 - ((mv(e) / gv) | 0)) | 0;
}
var Fo = 64,
  Oo = 4194304;
function Gs(e) {
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
      return 4194240 & e;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return 130023424 & e;
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
function Ba(e, t) {
  var n = e.pendingLanes;
  if (0 === n) return 0;
  var r = 0,
    i = e.suspendedLanes,
    a = e.pingedLanes,
    o = 268435455 & n;
  if (0 !== o) {
    var s = o & ~i;
    0 !== s ? (r = Gs(s)) : 0 !== (a &= o) && (r = Gs(a));
  } else 0 !== (o = n & ~i) ? (r = Gs(o)) : 0 !== a && (r = Gs(a));
  if (0 === r) return 0;
  if (
    0 !== t &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r) >= (a = t & -t) || (16 === i && 4194240 & a))
  )
    return t;
  if ((4 & r && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
    for (e = e.entanglements, t &= r; 0 < t; )
      (i = 1 << (n = 31 - Ln(t))), (r |= e[n]), (t &= ~i);
  return r;
}
function vv(e, t) {
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
    default:
      return -1;
  }
}
function xv(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      a = e.pendingLanes;
    0 < a;

  ) {
    var o = 31 - Ln(a),
      s = 1 << o,
      l = i[o];
    -1 === l
      ? (!(s & n) || s & r) && (i[o] = vv(s, t))
      : l <= t && (e.expiredLanes |= s),
      (a &= ~s);
  }
}
function ec(e) {
  return 0 !== (e = -1073741825 & e.pendingLanes)
    ? e
    : 1073741824 & e
    ? 1073741824
    : 0;
}
function hm() {
  var e = Fo;
  return !(4194240 & (Fo <<= 1)) && (Fo = 64), e;
}
function Vl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function So(e, t, n) {
  (e.pendingLanes |= t),
    536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    ((e = e.eventTimes)[(t = 31 - Ln(t))] = n);
}
function yv(e, t) {
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
    var i = 31 - Ln(n),
      a = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~a);
  }
}
function Ef(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Ln(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var je = 0;
function pm(e) {
  return 1 < (e &= -e) ? (4 < e ? (268435455 & e ? 16 : 536870912) : 4) : 1;
}
var mm,
  Tf,
  gm,
  _m,
  vm,
  tc = !1,
  zo = [],
  Pi = null,
  Li = null,
  bi = null,
  ro = new Map(),
  so = new Map(),
  Ti = [],
  Sv =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Od(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Pi = null;
      break;
    case "dragenter":
    case "dragleave":
      Li = null;
      break;
    case "mouseover":
    case "mouseout":
      bi = null;
      break;
    case "pointerover":
    case "pointerout":
      ro.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      so.delete(t.pointerId);
  }
}
function Ls(e, t, n, r, i, a) {
  return null === e || e.nativeEvent !== a
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: a,
        targetContainers: [i],
      }),
      null !== t && null !== (t = Eo(t)) && Tf(t),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      null !== i && -1 === t.indexOf(i) && t.push(i),
      e);
}
function Mv(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (Pi = Ls(Pi, e, t, n, r, i)), !0;
    case "dragenter":
      return (Li = Ls(Li, e, t, n, r, i)), !0;
    case "mouseover":
      return (bi = Ls(bi, e, t, n, r, i)), !0;
    case "pointerover":
      var a = i.pointerId;
      return ro.set(a, Ls(ro.get(a) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (a = i.pointerId), so.set(a, Ls(so.get(a) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function xm(e) {
  var t = or(e.target);
  if (null !== t) {
    var n = Mr(t);
    if (null !== n)
      if (13 === (t = n.tag)) {
        if (null !== (t = am(n)))
          return (
            (e.blockedOn = t),
            void vm(e.priority, function () {
              gm(n);
            })
          );
      } else if (3 === t && n.stateNode.current.memoizedState.isDehydrated)
        return void (e.blockedOn =
          3 === n.tag ? n.stateNode.containerInfo : null);
  }
  e.blockedOn = null;
}
function ya(e) {
  if (null !== e.blockedOn) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = nc(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (null !== n) return null !== (t = Eo(n)) && Tf(t), (e.blockedOn = n), !1;
    var r = new (n = e.nativeEvent).constructor(n.type, n);
    (Ku = r), n.target.dispatchEvent(r), (Ku = null), t.shift();
  }
  return !0;
}
function zd(e, t, n) {
  ya(e) && n.delete(t);
}
function Ev() {
  (tc = !1),
    null !== Pi && ya(Pi) && (Pi = null),
    null !== Li && ya(Li) && (Li = null),
    null !== bi && ya(bi) && (bi = null),
    ro.forEach(zd),
    so.forEach(zd);
}
function bs(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    tc ||
      ((tc = !0),
      an.unstable_scheduleCallback(an.unstable_NormalPriority, Ev)));
}
function oo(e) {
  function t(t) {
    return bs(t, e);
  }
  if (0 < zo.length) {
    bs(zo[0], e);
    for (var n = 1; n < zo.length; n++) {
      var r = zo[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    null !== Pi && bs(Pi, e),
      null !== Li && bs(Li, e),
      null !== bi && bs(bi, e),
      ro.forEach(t),
      so.forEach(t),
      n = 0;
    n < Ti.length;
    n++
  )
    (r = Ti[n]).blockedOn === e && (r.blockedOn = null);
  for (; 0 < Ti.length && null === (n = Ti[0]).blockedOn; )
    xm(n), null === n.blockedOn && Ti.shift();
}
var ss = hi.ReactCurrentBatchConfig,
  Ha = !0;
function Tv(e, t, n, r) {
  var i = je,
    a = ss.transition;
  ss.transition = null;
  try {
    (je = 1), wf(e, t, n, r);
  } finally {
    (je = i), (ss.transition = a);
  }
}
function wv(e, t, n, r) {
  var i = je,
    a = ss.transition;
  ss.transition = null;
  try {
    (je = 4), wf(e, t, n, r);
  } finally {
    (je = i), (ss.transition = a);
  }
}
function wf(e, t, n, r) {
  if (Ha) {
    var i = nc(e, t, n, r);
    if (null === i) Ql(e, t, r, Va, n), Od(e, r);
    else if (Mv(i, e, t, n, r)) r.stopPropagation();
    else if ((Od(e, r), 4 & t && -1 < Sv.indexOf(e))) {
      for (; null !== i; ) {
        var a = Eo(i);
        if (
          (null !== a && mm(a),
          null === (a = nc(e, t, n, r)) && Ql(e, t, r, Va, n),
          a === i)
        )
          break;
        i = a;
      }
      null !== i && r.stopPropagation();
    } else Ql(e, t, r, null, n);
  }
}
var Va = null;
function nc(e, t, n, r) {
  if (((Va = null), null !== (e = or((e = Sf(r))))))
    if (null === (t = Mr(e))) e = null;
    else if (13 === (n = t.tag)) {
      if (null !== (e = am(t))) return e;
      e = null;
    } else if (3 === n) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return 3 === t.tag ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Va = e), null;
}
function ym(e) {
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
      switch (dv()) {
        case Mf:
          return 1;
        case fm:
          return 4;
        case ka:
        case hv:
          return 16;
        case dm:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Ci = null,
  Af = null,
  Sa = null;
function Sm() {
  if (Sa) return Sa;
  var e,
    t,
    n = Af,
    r = n.length,
    i = "value" in Ci ? Ci.value : Ci.textContent,
    a = i.length;
  for (e = 0; e < r && n[e] === i[e]; e++);
  var o = r - e;
  for (t = 1; t <= o && n[r - t] === i[a - t]; t++);
  return (Sa = i.slice(e, 1 < t ? 1 - t : void 0));
}
function Ma(e) {
  var t = e.keyCode;
  return (
    "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : (e = t),
    10 === e && (e = 13),
    32 <= e || 13 === e ? e : 0
  );
}
function ko() {
  return !0;
}
function kd() {
  return !1;
}
function un(e) {
  function t(t, n, r, i, a) {
    for (var o in ((this._reactName = t),
    (this._targetInst = r),
    (this.type = n),
    (this.nativeEvent = i),
    (this.target = a),
    (this.currentTarget = null),
    e))
      e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(i) : i[o]));
    return (
      (this.isDefaultPrevented = (
        null != i.defaultPrevented ? i.defaultPrevented : !1 === i.returnValue
      )
        ? ko
        : kd),
      (this.isPropagationStopped = kd),
      this
    );
  }
  return (
    at(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var e = this.nativeEvent;
        e &&
          (e.preventDefault
            ? e.preventDefault()
            : "unknown" != typeof e.returnValue && (e.returnValue = !1),
          (this.isDefaultPrevented = ko));
      },
      stopPropagation: function () {
        var e = this.nativeEvent;
        e &&
          (e.stopPropagation
            ? e.stopPropagation()
            : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0),
          (this.isPropagationStopped = ko));
      },
      persist: function () {},
      isPersistent: ko,
    }),
    t
  );
}
var Gl,
  Wl,
  Ds,
  Ts = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Cf = un(Ts),
  Mo = at({}, Ts, { view: 0, detail: 0 }),
  Av = un(Mo),
  pl = at({}, Mo, {
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
    getModifierState: Rf,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return void 0 === e.relatedTarget
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Ds &&
            (Ds && "mousemove" === e.type
              ? ((Gl = e.screenX - Ds.screenX), (Wl = e.screenY - Ds.screenY))
              : (Wl = Gl = 0),
            (Ds = e)),
          Gl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Wl;
    },
  }),
  Bd = un(pl),
  Cv = at({}, pl, { dataTransfer: 0 }),
  Rv = un(Cv),
  Pv = at({}, Mo, { relatedTarget: 0 }),
  Xl = un(Pv),
  Lv = at({}, Ts, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  bv = un(Lv),
  Dv = at({}, Ts, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Uv = un(Dv),
  Iv = at({}, Ts, { data: 0 }),
  Hd = un(Iv),
  Nv = {
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
  Fv = {
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
  Ov = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function zv(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : !!(e = Ov[e]) && !!t[e];
}
function Rf() {
  return zv;
}
var kv = at({}, Mo, {
    key: function (e) {
      if (e.key) {
        var t = Nv[e.key] || e.key;
        if ("Unidentified" !== t) return t;
      }
      return "keypress" === e.type
        ? 13 === (e = Ma(e))
          ? "Enter"
          : String.fromCharCode(e)
        : "keydown" === e.type || "keyup" === e.type
        ? Fv[e.keyCode] || "Unidentified"
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
    getModifierState: Rf,
    charCode: function (e) {
      return "keypress" === e.type ? Ma(e) : 0;
    },
    keyCode: function (e) {
      return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
    },
    which: function (e) {
      return "keypress" === e.type
        ? Ma(e)
        : "keydown" === e.type || "keyup" === e.type
        ? e.keyCode
        : 0;
    },
  }),
  Bv = un(kv),
  Hv = at({}, pl, {
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
  Vd = un(Hv),
  Vv = at({}, Mo, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Rf,
  }),
  Gv = un(Vv),
  Wv = at({}, Ts, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Xv = un(Wv),
  Yv = at({}, pl, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
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
  qv = un(Yv),
  $v = [9, 13, 27, 32],
  Pf = oi && "CompositionEvent" in window,
  $s = null;
oi && "documentMode" in document && ($s = document.documentMode);
var jv = oi && "TextEvent" in window && !$s,
  Mm = oi && (!Pf || ($s && 8 < $s && 11 >= $s)),
  Gd = " ",
  Wd = !1;
function Em(e, t) {
  switch (e) {
    case "keyup":
      return -1 !== $v.indexOf(t.keyCode);
    case "keydown":
      return 229 !== t.keyCode;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Tm(e) {
  return "object" == typeof (e = e.detail) && "data" in e ? e.data : null;
}
var Wr = !1;
function Kv(e, t) {
  switch (e) {
    case "compositionend":
      return Tm(t);
    case "keypress":
      return 32 !== t.which ? null : ((Wd = !0), Gd);
    case "textInput":
      return (e = t.data) === Gd && Wd ? null : e;
    default:
      return null;
  }
}
function Zv(e, t) {
  if (Wr)
    return "compositionend" === e || (!Pf && Em(e, t))
      ? ((e = Sm()), (Sa = Af = Ci = null), (Wr = !1), e)
      : null;
  switch (e) {
    case "paste":
    default:
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Mm && "ko" !== t.locale ? null : t.data;
  }
}
var Qv = {
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
function Xd(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return "input" === t ? !!Qv[e.type] : "textarea" === t;
}
function wm(e, t, n, r) {
  nm(r),
    0 < (t = Ga(t, "onChange")).length &&
      ((n = new Cf("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var js = null,
  ao = null;
function Jv(e) {
  Fm(e, 0);
}
function ml(e) {
  if (jp(qr(e))) return e;
}
function e0(e, t) {
  if ("change" === e) return t;
}
var Am = !1;
if (oi) {
  var Yl;
  if (oi) {
    var ql = "oninput" in document;
    if (!ql) {
      var Yd = document.createElement("div");
      Yd.setAttribute("oninput", "return;"),
        (ql = "function" == typeof Yd.oninput);
    }
    Yl = ql;
  } else Yl = !1;
  Am = Yl && (!document.documentMode || 9 < document.documentMode);
}
function qd() {
  js && (js.detachEvent("onpropertychange", Cm), (ao = js = null));
}
function Cm(e) {
  if ("value" === e.propertyName && ml(ao)) {
    var t = [];
    wm(t, ao, e, Sf(e)), om(Jv, t);
  }
}
function t0(e, t, n) {
  "focusin" === e
    ? (qd(), (ao = n), (js = t).attachEvent("onpropertychange", Cm))
    : "focusout" === e && qd();
}
function n0(e) {
  if ("selectionchange" === e || "keyup" === e || "keydown" === e)
    return ml(ao);
}
function i0(e, t) {
  if ("click" === e) return ml(t);
}
function r0(e, t) {
  if ("input" === e || "change" === e) return ml(t);
}
function s0(e, t) {
  return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
}
var Dn = "function" == typeof Object.is ? Object.is : s0;
function lo(e, t) {
  if (Dn(e, t)) return !0;
  if ("object" != typeof e || null === e || "object" != typeof t || null === t)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!zu.call(t, i) || !Dn(e[i], t[i])) return !1;
  }
  return !0;
}
function $d(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function jd(e, t) {
  var n,
    r = $d(e);
  for (e = 0; r; ) {
    if (3 === r.nodeType) {
      if (((n = e + r.textContent.length), e <= t && n >= t))
        return { node: r, offset: t - e };
      e = n;
    }
    e: {
      for (; r; ) {
        if (r.nextSibling) {
          r = r.nextSibling;
          break e;
        }
        r = r.parentNode;
      }
      r = void 0;
    }
    r = $d(r);
  }
}
function Rm(e, t) {
  return (
    !(!e || !t) &&
    (e === t ||
      ((!e || 3 !== e.nodeType) &&
        (t && 3 === t.nodeType
          ? Rm(e, t.parentNode)
          : "contains" in e
          ? e.contains(t)
          : !!e.compareDocumentPosition &&
            !!(16 & e.compareDocumentPosition(t)))))
  );
}
function Pm() {
  for (var e = window, t = Fa(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = "string" == typeof t.contentWindow.location.href;
    } catch {
      n = !1;
    }
    if (!n) break;
    t = Fa((e = t.contentWindow).document);
  }
  return t;
}
function Lf(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    (("input" === t &&
      ("text" === e.type ||
        "search" === e.type ||
        "tel" === e.type ||
        "url" === e.type ||
        "password" === e.type)) ||
      "textarea" === t ||
      "true" === e.contentEditable)
  );
}
function o0(e) {
  var t = Pm(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Rm(n.ownerDocument.documentElement, n)
  ) {
    if (null !== r && Lf(n))
      if (
        ((t = r.start),
        void 0 === (e = r.end) && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        (e = ((t = n.ownerDocument || document) && t.defaultView) || window)
          .getSelection
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          a = Math.min(r.start, i);
        (r = void 0 === r.end ? a : Math.min(r.end, i)),
          !e.extend && a > r && ((i = r), (r = a), (a = i)),
          (i = jd(n, a));
        var o = jd(n, r);
        i &&
          o &&
          (1 !== e.rangeCount ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()).setStart(i.node, i.offset),
          e.removeAllRanges(),
          a > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    for (t = [], e = n; (e = e.parentNode); )
      1 === e.nodeType &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for ("function" == typeof n.focus && n.focus(), n = 0; n < t.length; n++)
      ((e = t[n]).element.scrollLeft = e.left), (e.element.scrollTop = e.top);
  }
}
var a0 = oi && "documentMode" in document && 11 >= document.documentMode,
  Xr = null,
  ic = null,
  Ks = null,
  rc = !1;
function Kd(e, t, n) {
  var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
  rc ||
    null == Xr ||
    Xr !== Fa(r) ||
    ("selectionStart" in (r = Xr) && Lf(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : (r = {
          anchorNode: (r = (
            (r.ownerDocument && r.ownerDocument.defaultView) ||
            window
          ).getSelection()).anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        }),
    (Ks && lo(Ks, r)) ||
      ((Ks = r),
      0 < (r = Ga(ic, "onSelect")).length &&
        ((t = new Cf("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Xr))));
}
function Bo(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Yr = {
    animationend: Bo("Animation", "AnimationEnd"),
    animationiteration: Bo("Animation", "AnimationIteration"),
    animationstart: Bo("Animation", "AnimationStart"),
    transitionend: Bo("Transition", "TransitionEnd"),
  },
  $l = {},
  Lm = {};
function gl(e) {
  if ($l[e]) return $l[e];
  if (!Yr[e]) return e;
  var t,
    n = Yr[e];
  for (t in n) if (n.hasOwnProperty(t) && t in Lm) return ($l[e] = n[t]);
  return e;
}
oi &&
  ((Lm = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Yr.animationend.animation,
    delete Yr.animationiteration.animation,
    delete Yr.animationstart.animation),
  "TransitionEvent" in window || delete Yr.transitionend.transition);
var bm = gl("animationend"),
  Dm = gl("animationiteration"),
  Um = gl("animationstart"),
  Im = gl("transitionend"),
  Nm = new Map(),
  Zd =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Vi(e, t) {
  Nm.set(e, t), Sr(t, [e]);
}
for (var jl = 0; jl < Zd.length; jl++) {
  var Kl = Zd[jl],
    l0 = Kl.toLowerCase(),
    u0 = Kl[0].toUpperCase() + Kl.slice(1);
  Vi(l0, "on" + u0);
}
Vi(bm, "onAnimationEnd"),
  Vi(Dm, "onAnimationIteration"),
  Vi(Um, "onAnimationStart"),
  Vi("dblclick", "onDoubleClick"),
  Vi("focusin", "onFocus"),
  Vi("focusout", "onBlur"),
  Vi(Im, "onTransitionEnd"),
  fs("onMouseEnter", ["mouseout", "mouseover"]),
  fs("onMouseLeave", ["mouseout", "mouseover"]),
  fs("onPointerEnter", ["pointerout", "pointerover"]),
  fs("onPointerLeave", ["pointerout", "pointerover"]),
  Sr(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(
      " "
    )
  ),
  Sr(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ),
  Sr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
  Sr(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ),
  Sr(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ),
  Sr(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
var Ws =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  c0 = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ws));
function Qd(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), lv(r, t, void 0, e), (e.currentTarget = null);
}
function Fm(e, t) {
  t = !!(4 & t);
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var a = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var s = r[o],
            l = s.instance,
            c = s.currentTarget;
          if (((s = s.listener), l !== a && i.isPropagationStopped())) break e;
          Qd(i, s, c), (a = l);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((l = (s = r[o]).instance),
            (c = s.currentTarget),
            (s = s.listener),
            l !== a && i.isPropagationStopped())
          )
            break e;
          Qd(i, s, c), (a = l);
        }
    }
  }
  if (za) throw ((e = Ju), (za = !1), (Ju = null), e);
}
function Je(e, t) {
  var n = t[uc];
  void 0 === n && (n = t[uc] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Om(t, e, 2, !1), n.add(r));
}
function Zl(e, t, n) {
  var r = 0;
  t && (r |= 4), Om(n, e, r, t);
}
var Ho = "_reactListening" + Math.random().toString(36).slice(2);
function uo(e) {
  if (!e[Ho]) {
    (e[Ho] = !0),
      Wp.forEach(function (t) {
        "selectionchange" !== t && (c0.has(t) || Zl(t, !1, e), Zl(t, !0, e));
      });
    var t = 9 === e.nodeType ? e : e.ownerDocument;
    null === t || t[Ho] || ((t[Ho] = !0), Zl("selectionchange", !1, t));
  }
}
function Om(e, t, n, r) {
  switch (ym(t)) {
    case 1:
      var i = Tv;
      break;
    case 4:
      i = wv;
      break;
    default:
      i = wf;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !Qu ||
      ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
      (i = !0),
    r
      ? void 0 !== i
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : void 0 !== i
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function Ql(e, t, n, r, i) {
  var a = r;
  if (!(1 & t || 2 & t || null === r))
    e: for (;;) {
      if (null === r) return;
      var o = r.tag;
      if (3 === o || 4 === o) {
        var s = r.stateNode.containerInfo;
        if (s === i || (8 === s.nodeType && s.parentNode === i)) break;
        if (4 === o)
          for (o = r.return; null !== o; ) {
            var l = o.tag;
            if (
              (3 === l || 4 === l) &&
              ((l = o.stateNode.containerInfo) === i ||
                (8 === l.nodeType && l.parentNode === i))
            )
              return;
            o = o.return;
          }
        for (; null !== s; ) {
          if (null === (o = or(s))) return;
          if (5 === (l = o.tag) || 6 === l) {
            r = a = o;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
  om(function () {
    var r = a,
      i = Sf(n),
      o = [];
    e: {
      var s = Nm.get(e);
      if (void 0 !== s) {
        var l = Cf,
          c = e;
        switch (e) {
          case "keypress":
            if (0 === Ma(n)) break e;
          case "keydown":
          case "keyup":
            l = Bv;
            break;
          case "focusin":
            (c = "focus"), (l = Xl);
            break;
          case "focusout":
            (c = "blur"), (l = Xl);
            break;
          case "beforeblur":
          case "afterblur":
            l = Xl;
            break;
          case "click":
            if (2 === n.button) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            l = Bd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            l = Rv;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            l = Gv;
            break;
          case bm:
          case Dm:
          case Um:
            l = bv;
            break;
          case Im:
            l = Xv;
            break;
          case "scroll":
            l = Av;
            break;
          case "wheel":
            l = qv;
            break;
          case "copy":
          case "cut":
          case "paste":
            l = Uv;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            l = Vd;
        }
        var u = !!(4 & t),
          d = !u && "scroll" === e,
          h = u ? (null !== s ? s + "Capture" : null) : s;
        u = [];
        for (var f, p = r; null !== p; ) {
          var m = (f = p).stateNode;
          if (
            (5 === f.tag &&
              null !== m &&
              ((f = m),
              null !== h && null != (m = io(p, h)) && u.push(co(p, m, f))),
            d)
          )
            break;
          p = p.return;
        }
        0 < u.length &&
          ((s = new l(s, c, null, n, i)), o.push({ event: s, listeners: u }));
      }
    }
    if (!(7 & t)) {
      if (
        ((l = "mouseout" === e || "pointerout" === e),
        (!(s = "mouseover" === e || "pointerover" === e) ||
          n === Ku ||
          !(c = n.relatedTarget || n.fromElement) ||
          (!or(c) && !c[ai])) &&
          (l || s) &&
          ((s =
            i.window === i
              ? i
              : (s = i.ownerDocument)
              ? s.defaultView || s.parentWindow
              : window),
          l
            ? ((l = r),
              null !==
                (c = (c = n.relatedTarget || n.toElement) ? or(c) : null) &&
                (c !== (d = Mr(c)) || (5 !== c.tag && 6 !== c.tag)) &&
                (c = null))
            : ((l = null), (c = r)),
          l !== c))
      ) {
        if (
          ((u = Bd),
          (m = "onMouseLeave"),
          (h = "onMouseEnter"),
          (p = "mouse"),
          ("pointerout" === e || "pointerover" === e) &&
            ((u = Vd),
            (m = "onPointerLeave"),
            (h = "onPointerEnter"),
            (p = "pointer")),
          (d = null == l ? s : qr(l)),
          (f = null == c ? s : qr(c)),
          ((s = new u(m, p + "leave", l, n, i)).target = d),
          (s.relatedTarget = f),
          (m = null),
          or(i) === r &&
            (((u = new u(h, p + "enter", c, n, i)).target = f),
            (u.relatedTarget = d),
            (m = u)),
          (d = m),
          l && c)
        )
          e: {
            for (h = c, p = 0, f = u = l; f; f = Tr(f)) p++;
            for (f = 0, m = h; m; m = Tr(m)) f++;
            for (; 0 < p - f; ) (u = Tr(u)), p--;
            for (; 0 < f - p; ) (h = Tr(h)), f--;
            for (; p--; ) {
              if (u === h || (null !== h && u === h.alternate)) break e;
              (u = Tr(u)), (h = Tr(h));
            }
            u = null;
          }
        else u = null;
        null !== l && Jd(o, s, l, u, !1),
          null !== c && null !== d && Jd(o, d, c, u, !0);
      }
      if (
        "select" ===
          (l = (s = r ? qr(r) : window).nodeName && s.nodeName.toLowerCase()) ||
        ("input" === l && "file" === s.type)
      )
        var g = e0;
      else if (Xd(s))
        if (Am) g = r0;
        else {
          g = n0;
          var v = t0;
        }
      else
        (l = s.nodeName) &&
          "input" === l.toLowerCase() &&
          ("checkbox" === s.type || "radio" === s.type) &&
          (g = i0);
      switch (
        (g && (g = g(e, r))
          ? wm(o, g, n, i)
          : (v && v(e, s, r),
            "focusout" === e &&
              (v = s._wrapperState) &&
              v.controlled &&
              "number" === s.type &&
              Xu(s, "number", s.value)),
        (v = r ? qr(r) : window),
        e)
      ) {
        case "focusin":
          (Xd(v) || "true" === v.contentEditable) &&
            ((Xr = v), (ic = r), (Ks = null));
          break;
        case "focusout":
          Ks = ic = Xr = null;
          break;
        case "mousedown":
          rc = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (rc = !1), Kd(o, n, i);
          break;
        case "selectionchange":
          if (a0) break;
        case "keydown":
        case "keyup":
          Kd(o, n, i);
      }
      var _;
      if (Pf)
        e: {
          switch (e) {
            case "compositionstart":
              var x = "onCompositionStart";
              break e;
            case "compositionend":
              x = "onCompositionEnd";
              break e;
            case "compositionupdate":
              x = "onCompositionUpdate";
              break e;
          }
          x = void 0;
        }
      else
        Wr
          ? Em(e, n) && (x = "onCompositionEnd")
          : "keydown" === e && 229 === n.keyCode && (x = "onCompositionStart");
      x &&
        (Mm &&
          "ko" !== n.locale &&
          (Wr || "onCompositionStart" !== x
            ? "onCompositionEnd" === x && Wr && (_ = Sm())
            : ((Af = "value" in (Ci = i) ? Ci.value : Ci.textContent),
              (Wr = !0))),
        0 < (v = Ga(r, x)).length &&
          ((x = new Hd(x, e, null, n, i)),
          o.push({ event: x, listeners: v }),
          _ ? (x.data = _) : null !== (_ = Tm(n)) && (x.data = _))),
        (_ = jv ? Kv(e, n) : Zv(e, n)) &&
          0 < (r = Ga(r, "onBeforeInput")).length &&
          ((i = new Hd("onBeforeInput", "beforeinput", null, n, i)),
          o.push({ event: i, listeners: r }),
          (i.data = _));
    }
    Fm(o, t);
  });
}
function co(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Ga(e, t) {
  for (var n = t + "Capture", r = []; null !== e; ) {
    var i = e,
      a = i.stateNode;
    5 === i.tag &&
      null !== a &&
      ((i = a),
      null != (a = io(e, n)) && r.unshift(co(e, a, i)),
      null != (a = io(e, t)) && r.push(co(e, a, i))),
      (e = e.return);
  }
  return r;
}
function Tr(e) {
  if (null === e) return null;
  do {
    e = e.return;
  } while (e && 5 !== e.tag);
  return e || null;
}
function Jd(e, t, n, r, i) {
  for (var a = t._reactName, o = []; null !== n && n !== r; ) {
    var s = n,
      l = s.alternate,
      c = s.stateNode;
    if (null !== l && l === r) break;
    5 === s.tag &&
      null !== c &&
      ((s = c),
      i
        ? null != (l = io(n, a)) && o.unshift(co(n, l, s))
        : i || (null != (l = io(n, a)) && o.push(co(n, l, s)))),
      (n = n.return);
  }
  0 !== o.length && e.push({ event: t, listeners: o });
}
var f0 = /\r\n?/g,
  d0 = /\u0000|\uFFFD/g;
function eh(e) {
  return ("string" == typeof e ? e : "" + e).replace(f0, "\n").replace(d0, "");
}
function Vo(e, t, n) {
  if (((t = eh(t)), eh(e) !== t && n)) throw Error(J(425));
}
function Wa() {}
var sc = null,
  oc = null;
function ac(e, t) {
  return (
    "textarea" === e ||
    "noscript" === e ||
    "string" == typeof t.children ||
    "number" == typeof t.children ||
    ("object" == typeof t.dangerouslySetInnerHTML &&
      null !== t.dangerouslySetInnerHTML &&
      null != t.dangerouslySetInnerHTML.__html)
  );
}
var lc = "function" == typeof setTimeout ? setTimeout : void 0,
  h0 = "function" == typeof clearTimeout ? clearTimeout : void 0,
  th = "function" == typeof Promise ? Promise : void 0,
  p0 =
    "function" == typeof queueMicrotask
      ? queueMicrotask
      : typeof th < "u"
      ? function (e) {
          return th.resolve(null).then(e).catch(m0);
        }
      : lc;
function m0(e) {
  setTimeout(function () {
    throw e;
  });
}
function Jl(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && 8 === i.nodeType))
      if ("/$" === (n = i.data)) {
        if (0 === r) return e.removeChild(i), void oo(t);
        r--;
      } else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
    n = i;
  } while (n);
  oo(t);
}
function Di(e) {
  for (; null != e; e = e.nextSibling) {
    var t = e.nodeType;
    if (1 === t || 3 === t) break;
    if (8 === t) {
      if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
      if ("/$" === t) return null;
    }
  }
  return e;
}
function nh(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (8 === e.nodeType) {
      var n = e.data;
      if ("$" === n || "$!" === n || "$?" === n) {
        if (0 === t) return e;
        t--;
      } else "/$" === n && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var ws = Math.random().toString(36).slice(2),
  zn = "__reactFiber$" + ws,
  fo = "__reactProps$" + ws,
  ai = "__reactContainer$" + ws,
  uc = "__reactEvents$" + ws,
  g0 = "__reactListeners$" + ws,
  _0 = "__reactHandles$" + ws;
function or(e) {
  var t = e[zn];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[ai] || n[zn])) {
      if (
        ((n = t.alternate),
        null !== t.child || (null !== n && null !== n.child))
      )
        for (e = nh(e); null !== e; ) {
          if ((n = e[zn])) return n;
          e = nh(e);
        }
      return t;
    }
    n = (e = n).parentNode;
  }
  return null;
}
function Eo(e) {
  return !(e = e[zn] || e[ai]) ||
    (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
    ? null
    : e;
}
function qr(e) {
  if (5 === e.tag || 6 === e.tag) return e.stateNode;
  throw Error(J(33));
}
function _l(e) {
  return e[fo] || null;
}
var cc = [],
  $r = -1;
function Gi(e) {
  return { current: e };
}
function tt(e) {
  0 > $r || ((e.current = cc[$r]), (cc[$r] = null), $r--);
}
function Qe(e, t) {
  $r++, (cc[$r] = e.current), (e.current = t);
}
var Bi = {},
  Ot = Gi(Bi),
  qt = Gi(!1),
  pr = Bi;
function ds(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Bi;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i,
    a = {};
  for (i in n) a[i] = t[i];
  return (
    r &&
      (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = a)),
    a
  );
}
function $t(e) {
  return null != (e = e.childContextTypes);
}
function Xa() {
  tt(qt), tt(Ot);
}
function ih(e, t, n) {
  if (Ot.current !== Bi) throw Error(J(168));
  Qe(Ot, t), Qe(qt, n);
}
function zm(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), "function" != typeof r.getChildContext))
    return n;
  for (var i in (r = r.getChildContext()))
    if (!(i in t)) throw Error(J(108, tv(e) || "Unknown", i));
  return at({}, n, r);
}
function Ya(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Bi),
    (pr = Ot.current),
    Qe(Ot, e),
    Qe(qt, qt.current),
    !0
  );
}
function rh(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(J(169));
  n
    ? ((e = zm(e, t, pr)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      tt(qt),
      tt(Ot),
      Qe(Ot, e))
    : tt(qt),
    Qe(qt, n);
}
var Jn = null,
  vl = !1,
  eu = !1;
function km(e) {
  null === Jn ? (Jn = [e]) : Jn.push(e);
}
function v0(e) {
  (vl = !0), km(e);
}
function Wi() {
  if (!eu && null !== Jn) {
    eu = !0;
    var e = 0,
      t = je;
    try {
      var n = Jn;
      for (je = 1; e < n.length; e++) {
        var r = n[e];
        do {
          r = r(!0);
        } while (null !== r);
      }
      (Jn = null), (vl = !1);
    } catch (t) {
      throw (null !== Jn && (Jn = Jn.slice(e + 1)), cm(Mf, Wi), t);
    } finally {
      (je = t), (eu = !1);
    }
  }
  return null;
}
var jr = [],
  Kr = 0,
  qa = null,
  $a = 0,
  dn = [],
  hn = 0,
  mr = null,
  ti = 1,
  ni = "";
function er(e, t) {
  (jr[Kr++] = $a), (jr[Kr++] = qa), (qa = e), ($a = t);
}
function Bm(e, t, n) {
  (dn[hn++] = ti), (dn[hn++] = ni), (dn[hn++] = mr), (mr = e);
  var r = ti;
  e = ni;
  var i = 32 - Ln(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var a = 32 - Ln(t) + i;
  if (30 < a) {
    var o = i - (i % 5);
    (a = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (i -= o),
      (ti = (1 << (32 - Ln(t) + i)) | (n << i) | r),
      (ni = a + e);
  } else (ti = (1 << a) | (n << i) | r), (ni = e);
}
function bf(e) {
  null !== e.return && (er(e, 1), Bm(e, 1, 0));
}
function Df(e) {
  for (; e === qa; )
    (qa = jr[--Kr]), (jr[Kr] = null), ($a = jr[--Kr]), (jr[Kr] = null);
  for (; e === mr; )
    (mr = dn[--hn]),
      (dn[hn] = null),
      (ni = dn[--hn]),
      (dn[hn] = null),
      (ti = dn[--hn]),
      (dn[hn] = null);
}
var sn = null,
  rn = null,
  nt = !1,
  Cn = null;
function Hm(e, t) {
  var n = mn(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    null === (t = e.deletions)
      ? ((e.deletions = [n]), (e.flags |= 16))
      : t.push(n);
}
function sh(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        null !==
          (t =
            1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t) && ((e.stateNode = t), (sn = e), (rn = Di(t.firstChild)), !0)
      );
    case 6:
      return (
        null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
        ((e.stateNode = t), (sn = e), (rn = null), !0)
      );
    case 13:
      return (
        null !== (t = 8 !== t.nodeType ? null : t) &&
        ((n = null !== mr ? { id: ti, overflow: ni } : null),
        (e.memoizedState = {
          dehydrated: t,
          treeContext: n,
          retryLane: 1073741824,
        }),
        ((n = mn(18, null, null, 0)).stateNode = t),
        (n.return = e),
        (e.child = n),
        (sn = e),
        (rn = null),
        !0)
      );
    default:
      return !1;
  }
}
function fc(e) {
  return !(!(1 & e.mode) || 128 & e.flags);
}
function dc(e) {
  if (nt) {
    var t = rn;
    if (t) {
      var n = t;
      if (!sh(e, t)) {
        if (fc(e)) throw Error(J(418));
        t = Di(n.nextSibling);
        var r = sn;
        t && sh(e, t)
          ? Hm(r, n)
          : ((e.flags = (-4097 & e.flags) | 2), (nt = !1), (sn = e));
      }
    } else {
      if (fc(e)) throw Error(J(418));
      (e.flags = (-4097 & e.flags) | 2), (nt = !1), (sn = e);
    }
  }
}
function oh(e) {
  for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag; )
    e = e.return;
  sn = e;
}
function Go(e) {
  if (e !== sn) return !1;
  if (!nt) return oh(e), (nt = !0), !1;
  var t;
  if (
    ((t = 3 !== e.tag) &&
      !(t = 5 !== e.tag) &&
      (t =
        "head" !== (t = e.type) &&
        "body" !== t &&
        !ac(e.type, e.memoizedProps)),
    t && (t = rn))
  ) {
    if (fc(e)) throw (Vm(), Error(J(418)));
    for (; t; ) Hm(e, t), (t = Di(t.nextSibling));
  }
  if ((oh(e), 13 === e.tag)) {
    if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
      throw Error(J(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (8 === e.nodeType) {
          var n = e.data;
          if ("/$" === n) {
            if (0 === t) {
              rn = Di(e.nextSibling);
              break e;
            }
            t--;
          } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
        }
        e = e.nextSibling;
      }
      rn = null;
    }
  } else rn = sn ? Di(e.stateNode.nextSibling) : null;
  return !0;
}
function Vm() {
  for (var e = rn; e; ) e = Di(e.nextSibling);
}
function hs() {
  (rn = sn = null), (nt = !1);
}
function Uf(e) {
  null === Cn ? (Cn = [e]) : Cn.push(e);
}
var x0 = hi.ReactCurrentBatchConfig;
function Us(e, t, n) {
  if (null !== (e = n.ref) && "function" != typeof e && "object" != typeof e) {
    if (n._owner) {
      if ((n = n._owner)) {
        if (1 !== n.tag) throw Error(J(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(J(147, e));
      var i = r,
        a = "" + e;
      return null !== t &&
        null !== t.ref &&
        "function" == typeof t.ref &&
        t.ref._stringRef === a
        ? t.ref
        : (((t = function (e) {
            var t = i.refs;
            null === e ? delete t[a] : (t[a] = e);
          })._stringRef = a),
          t);
    }
    if ("string" != typeof e) throw Error(J(284));
    if (!n._owner) throw Error(J(290, e));
  }
  return e;
}
function Wo(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      J(
        31,
        "[object Object]" === e
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function ah(e) {
  return (0, e._init)(e._payload);
}
function Gm(e) {
  function t(t, n) {
    if (e) {
      var r = t.deletions;
      null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
    }
  }
  function n(n, r) {
    if (!e) return null;
    for (; null !== r; ) t(n, r), (r = r.sibling);
    return null;
  }
  function r(e, t) {
    for (e = new Map(); null !== t; )
      null !== t.key ? e.set(t.key, t) : e.set(t.index, t), (t = t.sibling);
    return e;
  }
  function i(e, t) {
    return ((e = Fi(e, t)).index = 0), (e.sibling = null), e;
  }
  function a(t, n, r) {
    return (
      (t.index = r),
      e
        ? null !== (r = t.alternate)
          ? (r = r.index) < n
            ? ((t.flags |= 2), n)
            : r
          : ((t.flags |= 2), n)
        : ((t.flags |= 1048576), n)
    );
  }
  function o(t) {
    return e && null === t.alternate && (t.flags |= 2), t;
  }
  function s(e, t, n, r) {
    return null === t || 6 !== t.tag
      ? (((t = au(n, e.mode, r)).return = e), t)
      : (((t = i(t, n)).return = e), t);
  }
  function l(e, t, n, r) {
    var a = n.type;
    return a === Gr
      ? u(e, t, n.props.children, r, n.key)
      : null !== t &&
        (t.elementType === a ||
          ("object" == typeof a &&
            null !== a &&
            a.$$typeof === Mi &&
            ah(a) === t.type))
      ? (((r = i(t, n.props)).ref = Us(e, t, n)), (r.return = e), r)
      : (((r = Pa(n.type, n.key, n.props, null, e.mode, r)).ref = Us(e, t, n)),
        (r.return = e),
        r);
  }
  function c(e, t, n, r) {
    return null === t ||
      4 !== t.tag ||
      t.stateNode.containerInfo !== n.containerInfo ||
      t.stateNode.implementation !== n.implementation
      ? (((t = lu(n, e.mode, r)).return = e), t)
      : (((t = i(t, n.children || [])).return = e), t);
  }
  function u(e, t, n, r, a) {
    return null === t || 7 !== t.tag
      ? (((t = hr(n, e.mode, r, a)).return = e), t)
      : (((t = i(t, n)).return = e), t);
  }
  function d(e, t, n) {
    if (("string" == typeof t && "" !== t) || "number" == typeof t)
      return ((t = au("" + t, e.mode, n)).return = e), t;
    if ("object" == typeof t && null !== t) {
      switch (t.$$typeof) {
        case Uo:
          return (
            ((n = Pa(t.type, t.key, t.props, null, e.mode, n)).ref = Us(
              e,
              null,
              t
            )),
            (n.return = e),
            n
          );
        case Vr:
          return ((t = lu(t, e.mode, n)).return = e), t;
        case Mi:
          return d(e, (0, t._init)(t._payload), n);
      }
      if (Vs(t) || Rs(t)) return ((t = hr(t, e.mode, n, null)).return = e), t;
      Wo(e, t);
    }
    return null;
  }
  function h(e, t, n, r) {
    var i = null !== t ? t.key : null;
    if (("string" == typeof n && "" !== n) || "number" == typeof n)
      return null !== i ? null : s(e, t, "" + n, r);
    if ("object" == typeof n && null !== n) {
      switch (n.$$typeof) {
        case Uo:
          return n.key === i ? l(e, t, n, r) : null;
        case Vr:
          return n.key === i ? c(e, t, n, r) : null;
        case Mi:
          return h(e, t, (i = n._init)(n._payload), r);
      }
      if (Vs(n) || Rs(n)) return null !== i ? null : u(e, t, n, r, null);
      Wo(e, n);
    }
    return null;
  }
  function f(e, t, n, r, i) {
    if (("string" == typeof r && "" !== r) || "number" == typeof r)
      return s(t, (e = e.get(n) || null), "" + r, i);
    if ("object" == typeof r && null !== r) {
      switch (r.$$typeof) {
        case Uo:
          return l(t, (e = e.get(null === r.key ? n : r.key) || null), r, i);
        case Vr:
          return c(t, (e = e.get(null === r.key ? n : r.key) || null), r, i);
        case Mi:
          return f(e, t, n, (0, r._init)(r._payload), i);
      }
      if (Vs(r) || Rs(r)) return u(t, (e = e.get(n) || null), r, i, null);
      Wo(t, r);
    }
    return null;
  }
  return function s(l, c, u, p) {
    if (
      ("object" == typeof u &&
        null !== u &&
        u.type === Gr &&
        null === u.key &&
        (u = u.props.children),
      "object" == typeof u && null !== u)
    ) {
      switch (u.$$typeof) {
        case Uo:
          e: {
            for (var m = u.key, g = c; null !== g; ) {
              if (g.key === m) {
                if ((m = u.type) === Gr) {
                  if (7 === g.tag) {
                    n(l, g.sibling),
                      ((c = i(g, u.props.children)).return = l),
                      (l = c);
                    break e;
                  }
                } else if (
                  g.elementType === m ||
                  ("object" == typeof m &&
                    null !== m &&
                    m.$$typeof === Mi &&
                    ah(m) === g.type)
                ) {
                  n(l, g.sibling),
                    ((c = i(g, u.props)).ref = Us(l, g, u)),
                    (c.return = l),
                    (l = c);
                  break e;
                }
                n(l, g);
                break;
              }
              t(l, g), (g = g.sibling);
            }
            u.type === Gr
              ? (((c = hr(u.props.children, l.mode, p, u.key)).return = l),
                (l = c))
              : (((p = Pa(u.type, u.key, u.props, null, l.mode, p)).ref = Us(
                  l,
                  c,
                  u
                )),
                (p.return = l),
                (l = p));
          }
          return o(l);
        case Vr:
          e: {
            for (g = u.key; null !== c; ) {
              if (c.key === g) {
                if (
                  4 === c.tag &&
                  c.stateNode.containerInfo === u.containerInfo &&
                  c.stateNode.implementation === u.implementation
                ) {
                  n(l, c.sibling),
                    ((c = i(c, u.children || [])).return = l),
                    (l = c);
                  break e;
                }
                n(l, c);
                break;
              }
              t(l, c), (c = c.sibling);
            }
            ((c = lu(u, l.mode, p)).return = l), (l = c);
          }
          return o(l);
        case Mi:
          return s(l, c, (g = u._init)(u._payload), p);
      }
      if (Vs(u))
        return (function (i, o, s, l) {
          for (
            var c = null, u = null, p = o, m = (o = 0), g = null;
            null !== p && m < s.length;
            m++
          ) {
            p.index > m ? ((g = p), (p = null)) : (g = p.sibling);
            var v = h(i, p, s[m], l);
            if (null === v) {
              null === p && (p = g);
              break;
            }
            e && p && null === v.alternate && t(i, p),
              (o = a(v, o, m)),
              null === u ? (c = v) : (u.sibling = v),
              (u = v),
              (p = g);
          }
          if (m === s.length) return n(i, p), nt && er(i, m), c;
          if (null === p) {
            for (; m < s.length; m++)
              null !== (p = d(i, s[m], l)) &&
                ((o = a(p, o, m)),
                null === u ? (c = p) : (u.sibling = p),
                (u = p));
            return nt && er(i, m), c;
          }
          for (p = r(i, p); m < s.length; m++)
            null !== (g = f(p, i, m, s[m], l)) &&
              (e &&
                null !== g.alternate &&
                p.delete(null === g.key ? m : g.key),
              (o = a(g, o, m)),
              null === u ? (c = g) : (u.sibling = g),
              (u = g));
          return (
            e &&
              p.forEach(function (e) {
                return t(i, e);
              }),
            nt && er(i, m),
            c
          );
        })(l, c, u, p);
      if (Rs(u))
        return (function (i, o, s, l) {
          var c = Rs(s);
          if ("function" != typeof c) throw Error(J(150));
          if (null == (s = c.call(s))) throw Error(J(151));
          for (
            var u = (c = null), p = o, m = (o = 0), g = null, v = s.next();
            null !== p && !v.done;
            m++, v = s.next()
          ) {
            p.index > m ? ((g = p), (p = null)) : (g = p.sibling);
            var _ = h(i, p, v.value, l);
            if (null === _) {
              null === p && (p = g);
              break;
            }
            e && p && null === _.alternate && t(i, p),
              (o = a(_, o, m)),
              null === u ? (c = _) : (u.sibling = _),
              (u = _),
              (p = g);
          }
          if (v.done) return n(i, p), nt && er(i, m), c;
          if (null === p) {
            for (; !v.done; m++, v = s.next())
              null !== (v = d(i, v.value, l)) &&
                ((o = a(v, o, m)),
                null === u ? (c = v) : (u.sibling = v),
                (u = v));
            return nt && er(i, m), c;
          }
          for (p = r(i, p); !v.done; m++, v = s.next())
            null !== (v = f(p, i, m, v.value, l)) &&
              (e &&
                null !== v.alternate &&
                p.delete(null === v.key ? m : v.key),
              (o = a(v, o, m)),
              null === u ? (c = v) : (u.sibling = v),
              (u = v));
          return (
            e &&
              p.forEach(function (e) {
                return t(i, e);
              }),
            nt && er(i, m),
            c
          );
        })(l, c, u, p);
      Wo(l, u);
    }
    return ("string" == typeof u && "" !== u) || "number" == typeof u
      ? ((u = "" + u),
        null !== c && 6 === c.tag
          ? (n(l, c.sibling), ((c = i(c, u)).return = l), (l = c))
          : (n(l, c), ((c = au(u, l.mode, p)).return = l), (l = c)),
        o(l))
      : n(l, c);
  };
}
var ps = Gm(!0),
  Wm = Gm(!1),
  ja = Gi(null),
  Ka = null,
  Zr = null,
  If = null;
function Nf() {
  If = Zr = Ka = null;
}
function Ff(e) {
  var t = ja.current;
  tt(ja), (e._currentValue = t);
}
function hc(e, t, n) {
  for (; null !== e; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
        : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function os(e, t) {
  (Ka = e),
    (If = Zr = null),
    null !== (e = e.dependencies) &&
      null !== e.firstContext &&
      (e.lanes & t && (Yt = !0), (e.firstContext = null));
}
function vn(e) {
  var t = e._currentValue;
  if (If !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), null === Zr)) {
      if (null === Ka) throw Error(J(308));
      (Zr = e), (Ka.dependencies = { lanes: 0, firstContext: e });
    } else Zr = Zr.next = e;
  return t;
}
var ar = null;
function Of(e) {
  null === ar ? (ar = [e]) : ar.push(e);
}
function Xm(e, t, n, r) {
  var i = t.interleaved;
  return (
    null === i ? ((n.next = n), Of(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    li(e, r)
  );
}
function li(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
    (e.childLanes |= t),
      null !== (n = e.alternate) && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return 3 === n.tag ? n.stateNode : null;
}
var Ei = !1;
function zf(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Ym(e, t) {
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
function si(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Ui(e, t, n) {
  var r = e.updateQueue;
  if (null === r) return null;
  if (((r = r.shared), 2 & He)) {
    var i = r.pending;
    return (
      null === i ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      li(e, n)
    );
  }
  return (
    null === (i = r.interleaved)
      ? ((t.next = t), Of(r))
      : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    li(e, n)
  );
}
function Ea(e, t, n) {
  if (null !== (t = t.updateQueue) && ((t = t.shared), 4194240 & n)) {
    var r = t.lanes;
    (n |= r &= e.pendingLanes), (t.lanes = n), Ef(e, n);
  }
}
function lh(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (null !== r && n === (r = r.updateQueue)) {
    var i = null,
      a = null;
    if (null !== (n = n.firstBaseUpdate)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        null === a ? (i = a = o) : (a = a.next = o), (n = n.next);
      } while (null !== n);
      null === a ? (i = a = t) : (a = a.next = t);
    } else i = a = t;
    return (
      (n = {
        baseState: r.baseState,
        firstBaseUpdate: i,
        lastBaseUpdate: a,
        shared: r.shared,
        effects: r.effects,
      }),
      void (e.updateQueue = n)
    );
  }
  null === (e = n.lastBaseUpdate) ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Za(e, t, n, r) {
  var i = e.updateQueue;
  Ei = !1;
  var a = i.firstBaseUpdate,
    o = i.lastBaseUpdate,
    s = i.shared.pending;
  if (null !== s) {
    i.shared.pending = null;
    var l = s,
      c = l.next;
    (l.next = null), null === o ? (a = c) : (o.next = c), (o = l);
    var u = e.alternate;
    null !== u &&
      (s = (u = u.updateQueue).lastBaseUpdate) !== o &&
      (null === s ? (u.firstBaseUpdate = c) : (s.next = c),
      (u.lastBaseUpdate = l));
  }
  if (null !== a) {
    var d = i.baseState;
    for (o = 0, u = c = l = null, s = a; ; ) {
      var h = s.lane,
        f = s.eventTime;
      if ((r & h) === h) {
        null !== u &&
          (u = u.next =
            {
              eventTime: f,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            });
        e: {
          var p = e,
            m = s;
          switch (((h = t), (f = n), m.tag)) {
            case 1:
              if ("function" == typeof (p = m.payload)) {
                d = p.call(f, d, h);
                break e;
              }
              d = p;
              break e;
            case 3:
              p.flags = (-65537 & p.flags) | 128;
            case 0:
              if (
                null ==
                (h = "function" == typeof (p = m.payload) ? p.call(f, d, h) : p)
              )
                break e;
              d = at({}, d, h);
              break e;
            case 2:
              Ei = !0;
          }
        }
        null !== s.callback &&
          0 !== s.lane &&
          ((e.flags |= 64),
          null === (h = i.effects) ? (i.effects = [s]) : h.push(s));
      } else
        (f = {
          eventTime: f,
          lane: h,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          null === u ? ((c = u = f), (l = d)) : (u = u.next = f),
          (o |= h);
      if (null === (s = s.next)) {
        if (null === (s = i.shared.pending)) break;
        (s = (h = s).next),
          (h.next = null),
          (i.lastBaseUpdate = h),
          (i.shared.pending = null);
      }
    }
    if (
      (null === u && (l = d),
      (i.baseState = l),
      (i.firstBaseUpdate = c),
      (i.lastBaseUpdate = u),
      null !== (t = i.shared.interleaved))
    ) {
      i = t;
      do {
        (o |= i.lane), (i = i.next);
      } while (i !== t);
    } else null === a && (i.shared.lanes = 0);
    (_r |= o), (e.lanes = o), (e.memoizedState = d);
  }
}
function uh(e, t, n) {
  if (((e = t.effects), (t.effects = null), null !== e))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (null !== i) {
        if (((r.callback = null), (r = n), "function" != typeof i))
          throw Error(J(191, i));
        i.call(r);
      }
    }
}
var To = {},
  Vn = Gi(To),
  ho = Gi(To),
  po = Gi(To);
function lr(e) {
  if (e === To) throw Error(J(174));
  return e;
}
function kf(e, t) {
  switch ((Qe(po, t), Qe(ho, e), Qe(Vn, To), (e = t.nodeType))) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : qu(null, "");
      break;
    default:
      t = qu(
        (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
        (e = e.tagName)
      );
  }
  tt(Vn), Qe(Vn, t);
}
function ms() {
  tt(Vn), tt(ho), tt(po);
}
function qm(e) {
  lr(po.current);
  var t = lr(Vn.current),
    n = qu(t, e.type);
  t !== n && (Qe(ho, e), Qe(Vn, n));
}
function Bf(e) {
  ho.current === e && (tt(Vn), tt(ho));
}
var rt = Gi(0);
function Qa(e) {
  for (var t = e; null !== t; ) {
    if (13 === t.tag) {
      var n = t.memoizedState;
      if (
        null !== n &&
        (null === (n = n.dehydrated) || "$?" === n.data || "$!" === n.data)
      )
        return t;
    } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
      if (128 & t.flags) return t;
    } else if (null !== t.child) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; null === t.sibling; ) {
      if (null === t.return || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var tu = [];
function Hf() {
  for (var e = 0; e < tu.length; e++)
    tu[e]._workInProgressVersionPrimary = null;
  tu.length = 0;
}
var Ta = hi.ReactCurrentDispatcher,
  nu = hi.ReactCurrentBatchConfig,
  gr = 0,
  ot = null,
  xt = null,
  wt = null,
  Ja = !1,
  Zs = !1,
  mo = 0,
  y0 = 0;
function Dt() {
  throw Error(J(321));
}
function Vf(e, t) {
  if (null === t) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Dn(e[n], t[n])) return !1;
  return !0;
}
function Gf(e, t, n, r, i, a) {
  if (
    ((gr = a),
    (ot = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Ta.current = null === e || null === e.memoizedState ? T0 : w0),
    (e = n(r, i)),
    Zs)
  ) {
    a = 0;
    do {
      if (((Zs = !1), (mo = 0), 25 <= a)) throw Error(J(301));
      (a += 1),
        (wt = xt = null),
        (t.updateQueue = null),
        (Ta.current = A0),
        (e = n(r, i));
    } while (Zs);
  }
  if (
    ((Ta.current = el),
    (t = null !== xt && null !== xt.next),
    (gr = 0),
    (wt = xt = ot = null),
    (Ja = !1),
    t)
  )
    throw Error(J(300));
  return e;
}
function Wf() {
  var e = 0 !== mo;
  return (mo = 0), e;
}
function Nn() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return null === wt ? (ot.memoizedState = wt = e) : (wt = wt.next = e), wt;
}
function xn() {
  if (null === xt) {
    var e = ot.alternate;
    e = null !== e ? e.memoizedState : null;
  } else e = xt.next;
  var t = null === wt ? ot.memoizedState : wt.next;
  if (null !== t) (wt = t), (xt = e);
  else {
    if (null === e) throw Error(J(310));
    (e = {
      memoizedState: (xt = e).memoizedState,
      baseState: xt.baseState,
      baseQueue: xt.baseQueue,
      queue: xt.queue,
      next: null,
    }),
      null === wt ? (ot.memoizedState = wt = e) : (wt = wt.next = e);
  }
  return wt;
}
function go(e, t) {
  return "function" == typeof t ? t(e) : t;
}
function iu(e) {
  var t = xn(),
    n = t.queue;
  if (null === n) throw Error(J(311));
  n.lastRenderedReducer = e;
  var r = xt,
    i = r.baseQueue,
    a = n.pending;
  if (null !== a) {
    if (null !== i) {
      var o = i.next;
      (i.next = a.next), (a.next = o);
    }
    (r.baseQueue = i = a), (n.pending = null);
  }
  if (null !== i) {
    (a = i.next), (r = r.baseState);
    var s = (o = null),
      l = null,
      c = a;
    do {
      var u = c.lane;
      if ((gr & u) === u)
        null !== l &&
          (l = l.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var d = {
          lane: u,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        null === l ? ((s = l = d), (o = r)) : (l = l.next = d),
          (ot.lanes |= u),
          (_r |= u);
      }
      c = c.next;
    } while (null !== c && c !== a);
    null === l ? (o = r) : (l.next = s),
      Dn(r, t.memoizedState) || (Yt = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = l),
      (n.lastRenderedState = r);
  }
  if (null !== (e = n.interleaved)) {
    i = e;
    do {
      (a = i.lane), (ot.lanes |= a), (_r |= a), (i = i.next);
    } while (i !== e);
  } else null === i && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ru(e) {
  var t = xn(),
    n = t.queue;
  if (null === n) throw Error(J(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    a = t.memoizedState;
  if (null !== i) {
    n.pending = null;
    var o = (i = i.next);
    do {
      (a = e(a, o.action)), (o = o.next);
    } while (o !== i);
    Dn(a, t.memoizedState) || (Yt = !0),
      (t.memoizedState = a),
      null === t.baseQueue && (t.baseState = a),
      (n.lastRenderedState = a);
  }
  return [a, r];
}
function $m() {}
function jm(e, t) {
  var n = ot,
    r = xn(),
    i = t(),
    a = !Dn(r.memoizedState, i);
  if (
    (a && ((r.memoizedState = i), (Yt = !0)),
    (r = r.queue),
    Xf(Qm.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || a || (null !== wt && 1 & wt.memoizedState.tag))
  ) {
    if (
      ((n.flags |= 2048),
      _o(9, Zm.bind(null, n, r, i, t), void 0, null),
      null === At)
    )
      throw Error(J(349));
    30 & gr || Km(n, t, i);
  }
  return i;
}
function Km(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    null === (t = ot.updateQueue)
      ? ((t = { lastEffect: null, stores: null }),
        (ot.updateQueue = t),
        (t.stores = [e]))
      : null === (n = t.stores)
      ? (t.stores = [e])
      : n.push(e);
}
function Zm(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Jm(t) && eg(e);
}
function Qm(e, t, n) {
  return n(function () {
    Jm(t) && eg(e);
  });
}
function Jm(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Dn(e, n);
  } catch {
    return !0;
  }
}
function eg(e) {
  var t = li(e, 1);
  null !== t && bn(t, e, 1, -1);
}
function ch(e) {
  var t = Nn();
  return (
    "function" == typeof e && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: go,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = E0.bind(null, ot, e)),
    [t.memoizedState, e]
  );
}
function _o(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    null === (t = ot.updateQueue)
      ? ((t = { lastEffect: null, stores: null }),
        (ot.updateQueue = t),
        (t.lastEffect = e.next = e))
      : null === (n = t.lastEffect)
      ? (t.lastEffect = e.next = e)
      : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
    e
  );
}
function tg() {
  return xn().memoizedState;
}
function wa(e, t, n, r) {
  var i = Nn();
  (ot.flags |= e),
    (i.memoizedState = _o(1 | t, n, void 0, void 0 === r ? null : r));
}
function xl(e, t, n, r) {
  var i = xn();
  r = void 0 === r ? null : r;
  var a = void 0;
  if (null !== xt) {
    var o = xt.memoizedState;
    if (((a = o.destroy), null !== r && Vf(r, o.deps)))
      return void (i.memoizedState = _o(t, n, a, r));
  }
  (ot.flags |= e), (i.memoizedState = _o(1 | t, n, a, r));
}
function fh(e, t) {
  return wa(8390656, 8, e, t);
}
function Xf(e, t) {
  return xl(2048, 8, e, t);
}
function ng(e, t) {
  return xl(4, 2, e, t);
}
function ig(e, t) {
  return xl(4, 4, e, t);
}
function rg(e, t) {
  return "function" == typeof t
    ? ((e = e()),
      t(e),
      function () {
        t(null);
      })
    : null != t
    ? ((e = e()),
      (t.current = e),
      function () {
        t.current = null;
      })
    : void 0;
}
function sg(e, t, n) {
  return (
    (n = null != n ? n.concat([e]) : null), xl(4, 4, rg.bind(null, t, e), n)
  );
}
function Yf() {}
function og(e, t) {
  var n = xn();
  t = void 0 === t ? null : t;
  var r = n.memoizedState;
  return null !== r && null !== t && Vf(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function ag(e, t) {
  var n = xn();
  t = void 0 === t ? null : t;
  var r = n.memoizedState;
  return null !== r && null !== t && Vf(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function lg(e, t, n) {
  return 21 & gr
    ? (Dn(n, t) || ((n = hm()), (ot.lanes |= n), (_r |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Yt = !0)), (e.memoizedState = n));
}
function S0(e, t) {
  var n = je;
  (je = 0 !== n && 4 > n ? n : 4), e(!0);
  var r = nu.transition;
  nu.transition = {};
  try {
    e(!1), t();
  } finally {
    (je = n), (nu.transition = r);
  }
}
function ug() {
  return xn().memoizedState;
}
function M0(e, t, n) {
  var r = Ni(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    cg(e))
  )
    fg(t, n);
  else if (null !== (n = Xm(e, t, n, r))) {
    bn(n, e, r, Bt()), dg(n, t, r);
  }
}
function E0(e, t, n) {
  var r = Ni(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (cg(e)) fg(t, i);
  else {
    var a = e.alternate;
    if (
      0 === e.lanes &&
      (null === a || 0 === a.lanes) &&
      null !== (a = t.lastRenderedReducer)
    )
      try {
        var o = t.lastRenderedState,
          s = a(o, n);
        if (((i.hasEagerState = !0), (i.eagerState = s), Dn(s, o))) {
          var l = t.interleaved;
          return (
            null === l
              ? ((i.next = i), Of(t))
              : ((i.next = l.next), (l.next = i)),
            void (t.interleaved = i)
          );
        }
      } catch {}
    null !== (n = Xm(e, t, i, r)) && (bn(n, e, r, (i = Bt())), dg(n, t, r));
  }
}
function cg(e) {
  var t = e.alternate;
  return e === ot || (null !== t && t === ot);
}
function fg(e, t) {
  Zs = Ja = !0;
  var n = e.pending;
  null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function dg(e, t, n) {
  if (4194240 & n) {
    var r = t.lanes;
    (n |= r &= e.pendingLanes), (t.lanes = n), Ef(e, n);
  }
}
var el = {
    readContext: vn,
    useCallback: Dt,
    useContext: Dt,
    useEffect: Dt,
    useImperativeHandle: Dt,
    useInsertionEffect: Dt,
    useLayoutEffect: Dt,
    useMemo: Dt,
    useReducer: Dt,
    useRef: Dt,
    useState: Dt,
    useDebugValue: Dt,
    useDeferredValue: Dt,
    useTransition: Dt,
    useMutableSource: Dt,
    useSyncExternalStore: Dt,
    useId: Dt,
    unstable_isNewReconciler: !1,
  },
  T0 = {
    readContext: vn,
    useCallback: function (e, t) {
      return (Nn().memoizedState = [e, void 0 === t ? null : t]), e;
    },
    useContext: vn,
    useEffect: fh,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = null != n ? n.concat([e]) : null),
        wa(4194308, 4, rg.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return wa(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return wa(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Nn();
      return (
        (t = void 0 === t ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Nn();
      return (
        (t = void 0 !== n ? n(t) : t),
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
        (e = e.dispatch = M0.bind(null, ot, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      return (e = { current: e }), (Nn().memoizedState = e);
    },
    useState: ch,
    useDebugValue: Yf,
    useDeferredValue: function (e) {
      return (Nn().memoizedState = e);
    },
    useTransition: function () {
      var e = ch(!1),
        t = e[0];
      return (e = S0.bind(null, e[1])), (Nn().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ot,
        i = Nn();
      if (nt) {
        if (void 0 === n) throw Error(J(407));
        n = n();
      } else {
        if (((n = t()), null === At)) throw Error(J(349));
        30 & gr || Km(r, t, n);
      }
      i.memoizedState = n;
      var a = { value: n, getSnapshot: t };
      return (
        (i.queue = a),
        fh(Qm.bind(null, r, a, e), [e]),
        (r.flags |= 2048),
        _o(9, Zm.bind(null, r, a, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Nn(),
        t = At.identifierPrefix;
      if (nt) {
        var n = ni;
        (t =
          ":" +
          t +
          "R" +
          (n = (ti & ~(1 << (32 - Ln(ti) - 1))).toString(32) + n)),
          0 < (n = mo++) && (t += "H" + n.toString(32)),
          (t += ":");
      } else t = ":" + t + "r" + (n = y0++).toString(32) + ":";
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  w0 = {
    readContext: vn,
    useCallback: og,
    useContext: vn,
    useEffect: Xf,
    useImperativeHandle: sg,
    useInsertionEffect: ng,
    useLayoutEffect: ig,
    useMemo: ag,
    useReducer: iu,
    useRef: tg,
    useState: function () {
      return iu(go);
    },
    useDebugValue: Yf,
    useDeferredValue: function (e) {
      return lg(xn(), xt.memoizedState, e);
    },
    useTransition: function () {
      return [iu(go)[0], xn().memoizedState];
    },
    useMutableSource: $m,
    useSyncExternalStore: jm,
    useId: ug,
    unstable_isNewReconciler: !1,
  },
  A0 = {
    readContext: vn,
    useCallback: og,
    useContext: vn,
    useEffect: Xf,
    useImperativeHandle: sg,
    useInsertionEffect: ng,
    useLayoutEffect: ig,
    useMemo: ag,
    useReducer: ru,
    useRef: tg,
    useState: function () {
      return ru(go);
    },
    useDebugValue: Yf,
    useDeferredValue: function (e) {
      var t = xn();
      return null === xt ? (t.memoizedState = e) : lg(t, xt.memoizedState, e);
    },
    useTransition: function () {
      return [ru(go)[0], xn().memoizedState];
    },
    useMutableSource: $m,
    useSyncExternalStore: jm,
    useId: ug,
    unstable_isNewReconciler: !1,
  };
function wn(e, t) {
  if (e && e.defaultProps) {
    for (var n in ((t = at({}, t)), (e = e.defaultProps)))
      void 0 === t[n] && (t[n] = e[n]);
    return t;
  }
  return t;
}
function pc(e, t, n, r) {
  (n = null == (n = n(r, (t = e.memoizedState))) ? t : at({}, t, n)),
    (e.memoizedState = n),
    0 === e.lanes && (e.updateQueue.baseState = n);
}
var yl = {
  isMounted: function (e) {
    return !!(e = e._reactInternals) && Mr(e) === e;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Bt(),
      i = Ni(e),
      a = si(r, i);
    (a.payload = t),
      null != n && (a.callback = n),
      null !== (t = Ui(e, a, i)) && (bn(t, e, i, r), Ea(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Bt(),
      i = Ni(e),
      a = si(r, i);
    (a.tag = 1),
      (a.payload = t),
      null != n && (a.callback = n),
      null !== (t = Ui(e, a, i)) && (bn(t, e, i, r), Ea(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Bt(),
      r = Ni(e),
      i = si(n, r);
    (i.tag = 2),
      null != t && (i.callback = t),
      null !== (t = Ui(e, i, r)) && (bn(t, e, r, n), Ea(t, e, r));
  },
};
function dh(e, t, n, r, i, a, o) {
  return "function" == typeof (e = e.stateNode).shouldComponentUpdate
    ? e.shouldComponentUpdate(r, a, o)
    : !t.prototype ||
        !t.prototype.isPureReactComponent ||
        !lo(n, r) ||
        !lo(i, a);
}
function hg(e, t, n) {
  var r = !1,
    i = Bi,
    a = t.contextType;
  return (
    "object" == typeof a && null !== a
      ? (a = vn(a))
      : ((i = $t(t) ? pr : Ot.current),
        (a = (r = null != (r = t.contextTypes)) ? ds(e, i) : Bi)),
    (t = new t(n, a)),
    (e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null),
    (t.updater = yl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = a)),
    t
  );
}
function hh(e, t, n, r) {
  (e = t.state),
    "function" == typeof t.componentWillReceiveProps &&
      t.componentWillReceiveProps(n, r),
    "function" == typeof t.UNSAFE_componentWillReceiveProps &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && yl.enqueueReplaceState(t, t.state, null);
}
function mc(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = {}), zf(e);
  var a = t.contextType;
  "object" == typeof a && null !== a
    ? (i.context = vn(a))
    : ((a = $t(t) ? pr : Ot.current), (i.context = ds(e, a))),
    (i.state = e.memoizedState),
    "function" == typeof (a = t.getDerivedStateFromProps) &&
      (pc(e, t, a, n), (i.state = e.memoizedState)),
    "function" == typeof t.getDerivedStateFromProps ||
      "function" == typeof i.getSnapshotBeforeUpdate ||
      ("function" != typeof i.UNSAFE_componentWillMount &&
        "function" != typeof i.componentWillMount) ||
      ((t = i.state),
      "function" == typeof i.componentWillMount && i.componentWillMount(),
      "function" == typeof i.UNSAFE_componentWillMount &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && yl.enqueueReplaceState(i, i.state, null),
      Za(e, n, i, r),
      (i.state = e.memoizedState)),
    "function" == typeof i.componentDidMount && (e.flags |= 4194308);
}
function gs(e, t) {
  try {
    var n = "",
      r = t;
    do {
      (n += ev(r)), (r = r.return);
    } while (r);
    var i = n;
  } catch (e) {
    i = "\nError generating stack: " + e.message + "\n" + e.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function su(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function gc(e, t) {
  try {
    console.error(t.value);
  } catch (e) {
    setTimeout(function () {
      throw e;
    });
  }
}
var C0 = "function" == typeof WeakMap ? WeakMap : Map;
function pg(e, t, n) {
  ((n = si(-1, n)).tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      nl || ((nl = !0), (Ac = r)), gc(e, t);
    }),
    n
  );
}
function mg(e, t, n) {
  (n = si(-1, n)).tag = 3;
  var r = e.type.getDerivedStateFromError;
  if ("function" == typeof r) {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        gc(e, t);
      });
  }
  var a = e.stateNode;
  return (
    null !== a &&
      "function" == typeof a.componentDidCatch &&
      (n.callback = function () {
        gc(e, t),
          "function" != typeof r &&
            (null === Ii ? (Ii = new Set([this])) : Ii.add(this));
        var n = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: null !== n ? n : "",
        });
      }),
    n
  );
}
function ph(e, t, n) {
  var r = e.pingCache;
  if (null === r) {
    r = e.pingCache = new C0();
    var i = new Set();
    r.set(t, i);
  } else void 0 === (i = r.get(t)) && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = H0.bind(null, e, t, n)), t.then(e, e));
}
function mh(e) {
  do {
    var t;
    if (
      ((t = 13 === e.tag) &&
        (t = null === (t = e.memoizedState) || null !== t.dehydrated),
      t)
    )
      return e;
    e = e.return;
  } while (null !== e);
  return null;
}
function gh(e, t, n, r, i) {
  return 1 & e.mode
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          1 === n.tag &&
            (null === n.alternate
              ? (n.tag = 17)
              : (((t = si(-1, 1)).tag = 2), Ui(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var R0 = hi.ReactCurrentOwner,
  Yt = !1;
function kt(e, t, n, r) {
  t.child = null === e ? Wm(t, null, n, r) : ps(t, e.child, n, r);
}
function _h(e, t, n, r, i) {
  n = n.render;
  var a = t.ref;
  return (
    os(t, i),
    (r = Gf(e, t, n, r, a, i)),
    (n = Wf()),
    null === e || Yt
      ? (nt && n && bf(t), (t.flags |= 1), kt(e, t, r, i), t.child)
      : ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        ui(e, t, i))
  );
}
function vh(e, t, n, r, i) {
  if (null === e) {
    var a = n.type;
    return "function" != typeof a ||
      ed(a) ||
      void 0 !== a.defaultProps ||
      null !== n.compare ||
      void 0 !== n.defaultProps
      ? (((e = Pa(n.type, null, r, t, t.mode, i)).ref = t.ref),
        (e.return = t),
        (t.child = e))
      : ((t.tag = 15), (t.type = a), gg(e, t, a, r, i));
  }
  if (((a = e.child), !(e.lanes & i))) {
    var o = a.memoizedProps;
    if ((n = null !== (n = n.compare) ? n : lo)(o, r) && e.ref === t.ref)
      return ui(e, t, i);
  }
  return (
    (t.flags |= 1), ((e = Fi(a, r)).ref = t.ref), (e.return = t), (t.child = e)
  );
}
function gg(e, t, n, r, i) {
  if (null !== e) {
    var a = e.memoizedProps;
    if (lo(a, r) && e.ref === t.ref) {
      if (((Yt = !1), (t.pendingProps = r = a), !(e.lanes & i)))
        return (t.lanes = e.lanes), ui(e, t, i);
      131072 & e.flags && (Yt = !0);
    }
  }
  return _c(e, t, n, r, i);
}
function _g(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    a = null !== e ? e.memoizedState : null;
  if ("hidden" === r.mode)
    if (1 & t.mode) {
      if (!(1073741824 & n))
        return (
          (e = null !== a ? a.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          Qe(Jr, nn),
          (nn |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = null !== a ? a.baseLanes : n),
        Qe(Jr, nn),
        (nn |= r);
    } else
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        Qe(Jr, nn),
        (nn |= n);
  else
    null !== a ? ((r = a.baseLanes | n), (t.memoizedState = null)) : (r = n),
      Qe(Jr, nn),
      (nn |= r);
  return kt(e, t, i, n), t.child;
}
function vg(e, t) {
  var n = t.ref;
  ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function _c(e, t, n, r, i) {
  var a = $t(n) ? pr : Ot.current;
  return (
    (a = ds(t, a)),
    os(t, i),
    (n = Gf(e, t, n, r, a, i)),
    (r = Wf()),
    null === e || Yt
      ? (nt && r && bf(t), (t.flags |= 1), kt(e, t, n, i), t.child)
      : ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        ui(e, t, i))
  );
}
function xh(e, t, n, r, i) {
  if ($t(n)) {
    var a = !0;
    Ya(t);
  } else a = !1;
  if ((os(t, i), null === t.stateNode))
    Aa(e, t), hg(t, n, r), mc(t, n, r, i), (r = !0);
  else if (null === e) {
    var o = t.stateNode,
      s = t.memoizedProps;
    o.props = s;
    var l = o.context,
      c = n.contextType;
    "object" == typeof c && null !== c
      ? (c = vn(c))
      : (c = ds(t, (c = $t(n) ? pr : Ot.current)));
    var u = n.getDerivedStateFromProps,
      d =
        "function" == typeof u ||
        "function" == typeof o.getSnapshotBeforeUpdate;
    d ||
      ("function" != typeof o.UNSAFE_componentWillReceiveProps &&
        "function" != typeof o.componentWillReceiveProps) ||
      ((s !== r || l !== c) && hh(t, o, r, c)),
      (Ei = !1);
    var h = t.memoizedState;
    (o.state = h),
      Za(t, r, o, i),
      (l = t.memoizedState),
      s !== r || h !== l || qt.current || Ei
        ? ("function" == typeof u && (pc(t, n, u, r), (l = t.memoizedState)),
          (s = Ei || dh(t, n, s, r, h, l, c))
            ? (d ||
                ("function" != typeof o.UNSAFE_componentWillMount &&
                  "function" != typeof o.componentWillMount) ||
                ("function" == typeof o.componentWillMount &&
                  o.componentWillMount(),
                "function" == typeof o.UNSAFE_componentWillMount &&
                  o.UNSAFE_componentWillMount()),
              "function" == typeof o.componentDidMount && (t.flags |= 4194308))
            : ("function" == typeof o.componentDidMount && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (o.props = r),
          (o.state = l),
          (o.context = c),
          (r = s))
        : ("function" == typeof o.componentDidMount && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      Ym(e, t),
      (s = t.memoizedProps),
      (c = t.type === t.elementType ? s : wn(t.type, s)),
      (o.props = c),
      (d = t.pendingProps),
      (h = o.context),
      "object" == typeof (l = n.contextType) && null !== l
        ? (l = vn(l))
        : (l = ds(t, (l = $t(n) ? pr : Ot.current)));
    var f = n.getDerivedStateFromProps;
    (u =
      "function" == typeof f ||
      "function" == typeof o.getSnapshotBeforeUpdate) ||
      ("function" != typeof o.UNSAFE_componentWillReceiveProps &&
        "function" != typeof o.componentWillReceiveProps) ||
      ((s !== d || h !== l) && hh(t, o, r, l)),
      (Ei = !1),
      (h = t.memoizedState),
      (o.state = h),
      Za(t, r, o, i);
    var p = t.memoizedState;
    s !== d || h !== p || qt.current || Ei
      ? ("function" == typeof f && (pc(t, n, f, r), (p = t.memoizedState)),
        (c = Ei || dh(t, n, c, r, h, p, l) || !1)
          ? (u ||
              ("function" != typeof o.UNSAFE_componentWillUpdate &&
                "function" != typeof o.componentWillUpdate) ||
              ("function" == typeof o.componentWillUpdate &&
                o.componentWillUpdate(r, p, l),
              "function" == typeof o.UNSAFE_componentWillUpdate &&
                o.UNSAFE_componentWillUpdate(r, p, l)),
            "function" == typeof o.componentDidUpdate && (t.flags |= 4),
            "function" == typeof o.getSnapshotBeforeUpdate && (t.flags |= 1024))
          : ("function" != typeof o.componentDidUpdate ||
              (s === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 4),
            "function" != typeof o.getSnapshotBeforeUpdate ||
              (s === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = p)),
        (o.props = r),
        (o.state = p),
        (o.context = l),
        (r = c))
      : ("function" != typeof o.componentDidUpdate ||
          (s === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 4),
        "function" != typeof o.getSnapshotBeforeUpdate ||
          (s === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return vc(e, t, n, r, a, i);
}
function vc(e, t, n, r, i, a) {
  vg(e, t);
  var o = !!(128 & t.flags);
  if (!r && !o) return i && rh(t, n, !1), ui(e, t, a);
  (r = t.stateNode), (R0.current = t);
  var s =
    o && "function" != typeof n.getDerivedStateFromError ? null : r.render();
  return (
    (t.flags |= 1),
    null !== e && o
      ? ((t.child = ps(t, e.child, null, a)), (t.child = ps(t, null, s, a)))
      : kt(e, t, s, a),
    (t.memoizedState = r.state),
    i && rh(t, n, !0),
    t.child
  );
}
function xg(e) {
  var t = e.stateNode;
  t.pendingContext
    ? ih(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && ih(e, t.context, !1),
    kf(e, t.containerInfo);
}
function yh(e, t, n, r, i) {
  return hs(), Uf(i), (t.flags |= 256), kt(e, t, n, r), t.child;
}
var Mg,
  Sc,
  Eg,
  Tg,
  xc = { dehydrated: null, treeContext: null, retryLane: 0 };
function yc(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function yg(e, t, n) {
  var r,
    i = t.pendingProps,
    a = rt.current,
    o = !1,
    s = !!(128 & t.flags);
  if (
    ((r = s) || (r = (null === e || null !== e.memoizedState) && !!(2 & a)),
    r
      ? ((o = !0), (t.flags &= -129))
      : (null === e || null !== e.memoizedState) && (a |= 1),
    Qe(rt, 1 & a),
    null === e)
  )
    return (
      dc(t),
      null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
        ? (1 & t.mode
            ? "$!" === e.data
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = i.children),
          (e = i.fallback),
          o
            ? ((i = t.mode),
              (o = t.child),
              (s = { mode: "hidden", children: s }),
              1 & i || null === o
                ? (o = El(s, i, 0, null))
                : ((o.childLanes = 0), (o.pendingProps = s)),
              (e = hr(e, i, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = yc(n)),
              (t.memoizedState = xc),
              e)
            : qf(t, s))
    );
  if (null !== (a = e.memoizedState) && null !== (r = a.dehydrated))
    return P0(e, t, s, i, r, a, n);
  if (o) {
    (o = i.fallback), (s = t.mode), (r = (a = e.child).sibling);
    var l = { mode: "hidden", children: i.children };
    return (
      1 & s || t.child === a
        ? ((i = Fi(a, l)).subtreeFlags = 14680064 & a.subtreeFlags)
        : (((i = t.child).childLanes = 0),
          (i.pendingProps = l),
          (t.deletions = null)),
      null !== r ? (o = Fi(r, o)) : ((o = hr(o, s, n, null)).flags |= 2),
      (o.return = t),
      (i.return = t),
      (i.sibling = o),
      (t.child = i),
      (i = o),
      (o = t.child),
      (s =
        null === (s = e.child.memoizedState)
          ? yc(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (o.memoizedState = s),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = xc),
      i
    );
  }
  return (
    (e = (o = e.child).sibling),
    (i = Fi(o, { mode: "visible", children: i.children })),
    !(1 & t.mode) && (i.lanes = n),
    (i.return = t),
    (i.sibling = null),
    null !== e &&
      (null === (n = t.deletions)
        ? ((t.deletions = [e]), (t.flags |= 16))
        : n.push(e)),
    (t.child = i),
    (t.memoizedState = null),
    i
  );
}
function qf(e, t) {
  return (
    ((t = El({ mode: "visible", children: t }, e.mode, 0, null)).return = e),
    (e.child = t)
  );
}
function Xo(e, t, n, r) {
  return (
    null !== r && Uf(r),
    ps(t, e.child, null, n),
    ((e = qf(t, t.pendingProps.children)).flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function P0(e, t, n, r, i, a, o) {
  if (n)
    return 256 & t.flags
      ? ((t.flags &= -257), Xo(e, t, o, (r = su(Error(J(422))))))
      : null !== t.memoizedState
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((a = r.fallback),
        (i = t.mode),
        (r = El({ mode: "visible", children: r.children }, i, 0, null)),
        ((a = hr(a, i, o, null)).flags |= 2),
        (r.return = t),
        (a.return = t),
        (r.sibling = a),
        (t.child = r),
        1 & t.mode && ps(t, e.child, null, o),
        (t.child.memoizedState = yc(o)),
        (t.memoizedState = xc),
        a);
  if (!(1 & t.mode)) return Xo(e, t, o, null);
  if ("$!" === i.data) {
    if ((r = i.nextSibling && i.nextSibling.dataset)) var s = r.dgst;
    return (r = s), Xo(e, t, o, (r = su((a = Error(J(419))), r, void 0)));
  }
  if (((s = !!(o & e.childLanes)), Yt || s)) {
    if (null !== (r = At)) {
      switch (o & -o) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
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
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      0 !== (i = i & (r.suspendedLanes | o) ? 0 : i) &&
        i !== a.retryLane &&
        ((a.retryLane = i), li(e, i), bn(r, e, i, -1));
    }
    return Jf(), Xo(e, t, o, (r = su(Error(J(421)))));
  }
  return "$?" === i.data
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = V0.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = a.treeContext),
      (rn = Di(i.nextSibling)),
      (sn = t),
      (nt = !0),
      (Cn = null),
      null !== e &&
        ((dn[hn++] = ti),
        (dn[hn++] = ni),
        (dn[hn++] = mr),
        (ti = e.id),
        (ni = e.overflow),
        (mr = t)),
      ((t = qf(t, r.children)).flags |= 4096),
      t);
}
function Sh(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  null !== r && (r.lanes |= t), hc(e.return, t, n);
}
function ou(e, t, n, r, i) {
  var a = e.memoizedState;
  null === a
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((a.isBackwards = t),
      (a.rendering = null),
      (a.renderingStartTime = 0),
      (a.last = r),
      (a.tail = n),
      (a.tailMode = i));
}
function Sg(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    a = r.tail;
  if ((kt(e, t, r.children, n), 2 & (r = rt.current)))
    (r = (1 & r) | 2), (t.flags |= 128);
  else {
    if (null !== e && 128 & e.flags)
      e: for (e = t.child; null !== e; ) {
        if (13 === e.tag) null !== e.memoizedState && Sh(e, n, t);
        else if (19 === e.tag) Sh(e, n, t);
        else if (null !== e.child) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; null === e.sibling; ) {
          if (null === e.return || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((Qe(rt, r), 1 & t.mode))
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; null !== n; )
          null !== (e = n.alternate) && null === Qa(e) && (i = n),
            (n = n.sibling);
        null === (n = i)
          ? ((i = t.child), (t.child = null))
          : ((i = n.sibling), (n.sibling = null)),
          ou(t, !1, i, n, a);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; null !== i; ) {
          if (null !== (e = i.alternate) && null === Qa(e)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        ou(t, !0, n, null, a);
        break;
      case "together":
        ou(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  else t.memoizedState = null;
  return t.child;
}
function Aa(e, t) {
  !(1 & t.mode) &&
    null !== e &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function ui(e, t, n) {
  if (
    (null !== e && (t.dependencies = e.dependencies),
    (_r |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (null !== e && t.child !== e.child) throw Error(J(153));
  if (null !== t.child) {
    for (
      n = Fi((e = t.child), e.pendingProps), t.child = n, n.return = t;
      null !== e.sibling;

    )
      (e = e.sibling), ((n = n.sibling = Fi(e, e.pendingProps)).return = t);
    n.sibling = null;
  }
  return t.child;
}
function L0(e, t, n) {
  switch (t.tag) {
    case 3:
      xg(t), hs();
      break;
    case 5:
      qm(t);
      break;
    case 1:
      $t(t.type) && Ya(t);
      break;
    case 4:
      kf(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      Qe(ja, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (null !== (r = t.memoizedState))
        return null !== r.dehydrated
          ? (Qe(rt, 1 & rt.current), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? yg(e, t, n)
          : (Qe(rt, 1 & rt.current),
            null !== (e = ui(e, t, n)) ? e.sibling : null);
      Qe(rt, 1 & rt.current);
      break;
    case 19:
      if (((r = !!(n & t.childLanes)), 128 & e.flags)) {
        if (r) return Sg(e, t, n);
        t.flags |= 128;
      }
      if (
        (null !== (i = t.memoizedState) &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        Qe(rt, rt.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), _g(e, t, n);
  }
  return ui(e, t, n);
}
function Is(e, t) {
  if (!nt)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; null !== t; )
          null !== t.alternate && (n = t), (t = t.sibling);
        null === n ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; null !== n; )
          null !== n.alternate && (r = n), (n = n.sibling);
        null === r
          ? t || null === e.tail
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Ut(e) {
  var t = null !== e.alternate && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; null !== i; )
      (n |= i.lanes | i.childLanes),
        (r |= 14680064 & i.subtreeFlags),
        (r |= 14680064 & i.flags),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; null !== i; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function b0(e, t, n) {
  var r = t.pendingProps;
  switch ((Df(t), t.tag)) {
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
      return Ut(t), null;
    case 1:
    case 17:
      return $t(t.type) && Xa(), Ut(t), null;
    case 3:
      return (
        (r = t.stateNode),
        ms(),
        tt(qt),
        tt(Ot),
        Hf(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (null === e || null === e.child) &&
          (Go(t)
            ? (t.flags |= 4)
            : null === e ||
              (e.memoizedState.isDehydrated && !(256 & t.flags)) ||
              ((t.flags |= 1024), null !== Cn && (Pc(Cn), (Cn = null)))),
        Sc(e, t),
        Ut(t),
        null
      );
    case 5:
      Bf(t);
      var i = lr(po.current);
      if (((n = t.type), null !== e && null != t.stateNode))
        Eg(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (null === t.stateNode) throw Error(J(166));
          return Ut(t), null;
        }
        if (((e = lr(Vn.current)), Go(t))) {
          (r = t.stateNode), (n = t.type);
          var a = t.memoizedProps;
          switch (((r[zn] = t), (r[fo] = a), (e = !!(1 & t.mode)), n)) {
            case "dialog":
              Je("cancel", r), Je("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              Je("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < Ws.length; i++) Je(Ws[i], r);
              break;
            case "source":
              Je("error", r);
              break;
            case "img":
            case "image":
            case "link":
              Je("error", r), Je("load", r);
              break;
            case "details":
              Je("toggle", r);
              break;
            case "input":
              Ld(r, a), Je("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!a.multiple }),
                Je("invalid", r);
              break;
            case "textarea":
              Dd(r, a), Je("invalid", r);
          }
          for (var o in ($u(n, a), (i = null), a))
            if (a.hasOwnProperty(o)) {
              var s = a[o];
              "children" === o
                ? "string" == typeof s
                  ? r.textContent !== s &&
                    (!0 !== a.suppressHydrationWarning &&
                      Vo(r.textContent, s, e),
                    (i = ["children", s]))
                  : "number" == typeof s &&
                    r.textContent !== "" + s &&
                    (!0 !== a.suppressHydrationWarning &&
                      Vo(r.textContent, s, e),
                    (i = ["children", "" + s]))
                : to.hasOwnProperty(o) &&
                  null != s &&
                  "onScroll" === o &&
                  Je("scroll", r);
            }
          switch (n) {
            case "input":
              Io(r), bd(r, a, !0);
              break;
            case "textarea":
              Io(r), Ud(r);
              break;
            case "select":
            case "option":
              break;
            default:
              "function" == typeof a.onClick && (r.onclick = Wa);
          }
          (r = i), (t.updateQueue = r), null !== r && (t.flags |= 4);
        } else {
          (o = 9 === i.nodeType ? i : i.ownerDocument),
            "http://www.w3.org/1999/xhtml" === e && (e = Qp(n)),
            "http://www.w3.org/1999/xhtml" === e
              ? "script" === n
                ? (((e = o.createElement("div")).innerHTML =
                    "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : "string" == typeof r.is
                ? (e = o.createElement(n, { is: r.is }))
                : ((e = o.createElement(n)),
                  "select" === n &&
                    ((o = e),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[zn] = t),
            (e[fo] = r),
            Mg(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = ju(n, r)), n)) {
              case "dialog":
                Je("cancel", e), Je("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                Je("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < Ws.length; i++) Je(Ws[i], e);
                i = r;
                break;
              case "source":
                Je("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                Je("error", e), Je("load", e), (i = r);
                break;
              case "details":
                Je("toggle", e), (i = r);
                break;
              case "input":
                Ld(e, r), (i = Gu(e, r)), Je("invalid", e);
                break;
              case "option":
              default:
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = at({}, r, { value: void 0 })),
                  Je("invalid", e);
                break;
              case "textarea":
                Dd(e, r), (i = Yu(e, r)), Je("invalid", e);
            }
            for (a in ($u(n, i), (s = i)))
              if (s.hasOwnProperty(a)) {
                var l = s[a];
                "style" === a
                  ? tm(e, l)
                  : "dangerouslySetInnerHTML" === a
                  ? null != (l = l ? l.__html : void 0) && Jp(e, l)
                  : "children" === a
                  ? "string" == typeof l
                    ? ("textarea" !== n || "" !== l) && no(e, l)
                    : "number" == typeof l && no(e, "" + l)
                  : "suppressContentEditableWarning" !== a &&
                    "suppressHydrationWarning" !== a &&
                    "autoFocus" !== a &&
                    (to.hasOwnProperty(a)
                      ? null != l && "onScroll" === a && Je("scroll", e)
                      : null != l && _f(e, a, l, o));
              }
            switch (n) {
              case "input":
                Io(e), bd(e, r, !1);
                break;
              case "textarea":
                Io(e), Ud(e);
                break;
              case "option":
                null != r.value && e.setAttribute("value", "" + ki(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  null != (a = r.value)
                    ? ns(e, !!r.multiple, a, !1)
                    : null != r.defaultValue &&
                      ns(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                "function" == typeof i.onClick && (e.onclick = Wa);
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
        null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Ut(t), null;
    case 6:
      if (e && null != t.stateNode) Tg(e, t, e.memoizedProps, r);
      else {
        if ("string" != typeof r && null === t.stateNode) throw Error(J(166));
        if (((n = lr(po.current)), lr(Vn.current), Go(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[zn] = t),
            (a = r.nodeValue !== n) && null !== (e = sn))
          )
            switch (e.tag) {
              case 3:
                Vo(r.nodeValue, n, !!(1 & e.mode));
                break;
              case 5:
                !0 !== e.memoizedProps.suppressHydrationWarning &&
                  Vo(r.nodeValue, n, !!(1 & e.mode));
            }
          a && (t.flags |= 4);
        } else
          ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[
            zn
          ] = t),
            (t.stateNode = r);
      }
      return Ut(t), null;
    case 13:
      if (
        (tt(rt),
        (r = t.memoizedState),
        null === e ||
          (null !== e.memoizedState && null !== e.memoizedState.dehydrated))
      ) {
        if (nt && null !== rn && 1 & t.mode && !(128 & t.flags))
          Vm(), hs(), (t.flags |= 98560), (a = !1);
        else if (((a = Go(t)), null !== r && null !== r.dehydrated)) {
          if (null === e) {
            if (!a) throw Error(J(318));
            if (!(a = null !== (a = t.memoizedState) ? a.dehydrated : null))
              throw Error(J(317));
            a[zn] = t;
          } else
            hs(), !(128 & t.flags) && (t.memoizedState = null), (t.flags |= 4);
          Ut(t), (a = !1);
        } else null !== Cn && (Pc(Cn), (Cn = null)), (a = !0);
        if (!a) return 65536 & t.flags ? t : null;
      }
      return 128 & t.flags
        ? ((t.lanes = n), t)
        : ((r = null !== r) !== (null !== e && null !== e.memoizedState) &&
            r &&
            ((t.child.flags |= 8192),
            1 & t.mode &&
              (null === e || 1 & rt.current ? 0 === yt && (yt = 3) : Jf())),
          null !== t.updateQueue && (t.flags |= 4),
          Ut(t),
          null);
    case 4:
      return (
        ms(), Sc(e, t), null === e && uo(t.stateNode.containerInfo), Ut(t), null
      );
    case 10:
      return Ff(t.type._context), Ut(t), null;
    case 19:
      if ((tt(rt), null === (a = t.memoizedState))) return Ut(t), null;
      if (((r = !!(128 & t.flags)), null === (o = a.rendering)))
        if (r) Is(a, !1);
        else {
          if (0 !== yt || (null !== e && 128 & e.flags))
            for (e = t.child; null !== e; ) {
              if (null !== (o = Qa(e))) {
                for (
                  t.flags |= 128,
                    Is(a, !1),
                    null !== (r = o.updateQueue) &&
                      ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  null !== n;

                )
                  (e = r),
                    ((a = n).flags &= 14680066),
                    null === (o = a.alternate)
                      ? ((a.childLanes = 0),
                        (a.lanes = e),
                        (a.child = null),
                        (a.subtreeFlags = 0),
                        (a.memoizedProps = null),
                        (a.memoizedState = null),
                        (a.updateQueue = null),
                        (a.dependencies = null),
                        (a.stateNode = null))
                      : ((a.childLanes = o.childLanes),
                        (a.lanes = o.lanes),
                        (a.child = o.child),
                        (a.subtreeFlags = 0),
                        (a.deletions = null),
                        (a.memoizedProps = o.memoizedProps),
                        (a.memoizedState = o.memoizedState),
                        (a.updateQueue = o.updateQueue),
                        (a.type = o.type),
                        (e = o.dependencies),
                        (a.dependencies =
                          null === e
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return Qe(rt, (1 & rt.current) | 2), t.child;
              }
              e = e.sibling;
            }
          null !== a.tail &&
            dt() > _s &&
            ((t.flags |= 128), (r = !0), Is(a, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (null !== (e = Qa(o))) {
            if (
              ((t.flags |= 128),
              (r = !0),
              null !== (n = e.updateQueue) &&
                ((t.updateQueue = n), (t.flags |= 4)),
              Is(a, !0),
              null === a.tail && "hidden" === a.tailMode && !o.alternate && !nt)
            )
              return Ut(t), null;
          } else
            2 * dt() - a.renderingStartTime > _s &&
              1073741824 !== n &&
              ((t.flags |= 128), (r = !0), Is(a, !1), (t.lanes = 4194304));
        a.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : (null !== (n = a.last) ? (n.sibling = o) : (t.child = o),
            (a.last = o));
      }
      return null !== a.tail
        ? ((t = a.tail),
          (a.rendering = t),
          (a.tail = t.sibling),
          (a.renderingStartTime = dt()),
          (t.sibling = null),
          (n = rt.current),
          Qe(rt, r ? (1 & n) | 2 : 1 & n),
          t)
        : (Ut(t), null);
    case 22:
    case 23:
      return (
        Qf(),
        (r = null !== t.memoizedState),
        null !== e && (null !== e.memoizedState) !== r && (t.flags |= 8192),
        r && 1 & t.mode
          ? 1073741824 & nn && (Ut(t), 6 & t.subtreeFlags && (t.flags |= 8192))
          : Ut(t),
        null
      );
    case 24:
    case 25:
      return null;
  }
  throw Error(J(156, t.tag));
}
function D0(e, t) {
  switch ((Df(t), t.tag)) {
    case 1:
      return (
        $t(t.type) && Xa(),
        65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null
      );
    case 3:
      return (
        ms(),
        tt(qt),
        tt(Ot),
        Hf(),
        65536 & (e = t.flags) && !(128 & e)
          ? ((t.flags = (-65537 & e) | 128), t)
          : null
      );
    case 5:
      return Bf(t), null;
    case 13:
      if ((tt(rt), null !== (e = t.memoizedState) && null !== e.dehydrated)) {
        if (null === t.alternate) throw Error(J(340));
        hs();
      }
      return 65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null;
    case 19:
      return tt(rt), null;
    case 4:
      return ms(), null;
    case 10:
      return Ff(t.type._context), null;
    case 22:
    case 23:
      return Qf(), null;
    default:
      return null;
  }
}
(Mg = function (e, t) {
  for (var n = t.child; null !== n; ) {
    if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
    else if (4 !== n.tag && null !== n.child) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; null === n.sibling; ) {
      if (null === n.return || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
}),
  (Sc = function () {}),
  (Eg = function (e, t, n, r) {
    var i = e.memoizedProps;
    if (i !== r) {
      (e = t.stateNode), lr(Vn.current);
      var a,
        o = null;
      switch (n) {
        case "input":
          (i = Gu(e, i)), (r = Gu(e, r)), (o = []);
          break;
        case "select":
          (i = at({}, i, { value: void 0 })),
            (r = at({}, r, { value: void 0 })),
            (o = []);
          break;
        case "textarea":
          (i = Yu(e, i)), (r = Yu(e, r)), (o = []);
          break;
        default:
          "function" != typeof i.onClick &&
            "function" == typeof r.onClick &&
            (e.onclick = Wa);
      }
      for (c in ($u(n, r), (n = null), i))
        if (!r.hasOwnProperty(c) && i.hasOwnProperty(c) && null != i[c])
          if ("style" === c) {
            var s = i[c];
            for (a in s) s.hasOwnProperty(a) && (n || (n = {}), (n[a] = ""));
          } else
            "dangerouslySetInnerHTML" !== c &&
              "children" !== c &&
              "suppressContentEditableWarning" !== c &&
              "suppressHydrationWarning" !== c &&
              "autoFocus" !== c &&
              (to.hasOwnProperty(c)
                ? o || (o = [])
                : (o = o || []).push(c, null));
      for (c in r) {
        var l = r[c];
        if (
          ((s = null != i ? i[c] : void 0),
          r.hasOwnProperty(c) && l !== s && (null != l || null != s))
        )
          if ("style" === c)
            if (s) {
              for (a in s)
                !s.hasOwnProperty(a) ||
                  (l && l.hasOwnProperty(a)) ||
                  (n || (n = {}), (n[a] = ""));
              for (a in l)
                l.hasOwnProperty(a) &&
                  s[a] !== l[a] &&
                  (n || (n = {}), (n[a] = l[a]));
            } else n || (o || (o = []), o.push(c, n)), (n = l);
          else
            "dangerouslySetInnerHTML" === c
              ? ((l = l ? l.__html : void 0),
                (s = s ? s.__html : void 0),
                null != l && s !== l && (o = o || []).push(c, l))
              : "children" === c
              ? ("string" != typeof l && "number" != typeof l) ||
                (o = o || []).push(c, "" + l)
              : "suppressContentEditableWarning" !== c &&
                "suppressHydrationWarning" !== c &&
                (to.hasOwnProperty(c)
                  ? (null != l && "onScroll" === c && Je("scroll", e),
                    o || s === l || (o = []))
                  : (o = o || []).push(c, l));
      }
      n && (o = o || []).push("style", n);
      var c = o;
      (t.updateQueue = c) && (t.flags |= 4);
    }
  }),
  (Tg = function (e, t, n, r) {
    n !== r && (t.flags |= 4);
  });
var Yo = !1,
  Ft = !1,
  U0 = "function" == typeof WeakSet ? WeakSet : Set,
  de = null;
function Qr(e, t) {
  var n = e.ref;
  if (null !== n)
    if ("function" == typeof n)
      try {
        n(null);
      } catch (n) {
        ft(e, t, n);
      }
    else n.current = null;
}
function Mc(e, t, n) {
  try {
    n();
  } catch (n) {
    ft(e, t, n);
  }
}
var Mh = !1;
function I0(e, t) {
  if (((sc = Ha), Lf((e = Pm())))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        var r =
          (n = ((n = e.ownerDocument) && n.defaultView) || window)
            .getSelection && n.getSelection();
        if (r && 0 !== r.rangeCount) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            a = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, a.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            s = -1,
            l = -1,
            c = 0,
            u = 0,
            d = e,
            h = null;
          t: for (;;) {
            for (
              var f;
              d !== n || (0 !== i && 3 !== d.nodeType) || (s = o + i),
                d !== a || (0 !== r && 3 !== d.nodeType) || (l = o + r),
                3 === d.nodeType && (o += d.nodeValue.length),
                null !== (f = d.firstChild);

            )
              (h = d), (d = f);
            for (;;) {
              if (d === e) break t;
              if (
                (h === n && ++c === i && (s = o),
                h === a && ++u === r && (l = o),
                null !== (f = d.nextSibling))
              )
                break;
              h = (d = h).parentNode;
            }
            d = f;
          }
          n = -1 === s || -1 === l ? null : { start: s, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (
    oc = { focusedElem: e, selectionRange: n }, Ha = !1, de = t;
    null !== de;

  )
    if (((e = (t = de).child), 1028 & t.subtreeFlags && null !== e))
      (e.return = t), (de = e);
    else
      for (; null !== de; ) {
        t = de;
        try {
          var p = t.alternate;
          if (1024 & t.flags)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              case 1:
                if (null !== p) {
                  var m = p.memoizedProps,
                    g = p.memoizedState,
                    v = t.stateNode,
                    _ = v.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? m : wn(t.type, m),
                      g
                    );
                  v.__reactInternalSnapshotBeforeUpdate = _;
                }
                break;
              case 3:
                var x = t.stateNode.containerInfo;
                1 === x.nodeType
                  ? (x.textContent = "")
                  : 9 === x.nodeType &&
                    x.documentElement &&
                    x.removeChild(x.documentElement);
                break;
              default:
                throw Error(J(163));
            }
        } catch (e) {
          ft(t, t.return, e);
        }
        if (null !== (e = t.sibling)) {
          (e.return = t.return), (de = e);
          break;
        }
        de = t.return;
      }
  return (p = Mh), (Mh = !1), p;
}
function Qs(e, t, n) {
  var r = t.updateQueue;
  if (null !== (r = null !== r ? r.lastEffect : null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var a = i.destroy;
        (i.destroy = void 0), void 0 !== a && Mc(t, n, a);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Sl(e, t) {
  if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
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
function Ec(e) {
  var t = e.ref;
  if (null !== t) {
    var n = e.stateNode;
    e.tag, (e = n), "function" == typeof t ? t(e) : (t.current = e);
  }
}
function wg(e) {
  var t = e.alternate;
  null !== t && ((e.alternate = null), wg(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    5 === e.tag &&
      null !== (t = e.stateNode) &&
      (delete t[zn], delete t[fo], delete t[uc], delete t[g0], delete t[_0]),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Ag(e) {
  return 5 === e.tag || 3 === e.tag || 4 === e.tag;
}
function Eh(e) {
  e: for (;;) {
    for (; null === e.sibling; ) {
      if (null === e.return || Ag(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

    ) {
      if (2 & e.flags || null === e.child || 4 === e.tag) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(2 & e.flags)) return e.stateNode;
  }
}
function Tc(e, t, n) {
  var r = e.tag;
  if (5 === r || 6 === r)
    (e = e.stateNode),
      t
        ? 8 === n.nodeType
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (8 === n.nodeType
            ? (t = n.parentNode).insertBefore(e, n)
            : (t = n).appendChild(e),
          null != (n = n._reactRootContainer) ||
            null !== t.onclick ||
            (t.onclick = Wa));
  else if (4 !== r && null !== (e = e.child))
    for (Tc(e, t, n), e = e.sibling; null !== e; ) Tc(e, t, n), (e = e.sibling);
}
function wc(e, t, n) {
  var r = e.tag;
  if (5 === r || 6 === r)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (4 !== r && null !== (e = e.child))
    for (wc(e, t, n), e = e.sibling; null !== e; ) wc(e, t, n), (e = e.sibling);
}
var Pt = null,
  An = !1;
function mi(e, t, n) {
  for (n = n.child; null !== n; ) Cg(e, t, n), (n = n.sibling);
}
function Cg(e, t, n) {
  if (Hn && "function" == typeof Hn.onCommitFiberUnmount)
    try {
      Hn.onCommitFiberUnmount(hl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Ft || Qr(n, t);
    case 6:
      var r = Pt,
        i = An;
      (Pt = null),
        mi(e, t, n),
        (An = i),
        null !== (Pt = r) &&
          (An
            ? ((e = Pt),
              (n = n.stateNode),
              8 === e.nodeType ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Pt.removeChild(n.stateNode));
      break;
    case 18:
      null !== Pt &&
        (An
          ? ((e = Pt),
            (n = n.stateNode),
            8 === e.nodeType
              ? Jl(e.parentNode, n)
              : 1 === e.nodeType && Jl(e, n),
            oo(e))
          : Jl(Pt, n.stateNode));
      break;
    case 4:
      (r = Pt),
        (i = An),
        (Pt = n.stateNode.containerInfo),
        (An = !0),
        mi(e, t, n),
        (Pt = r),
        (An = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Ft && null !== (r = n.updateQueue) && null !== (r = r.lastEffect)) {
        i = r = r.next;
        do {
          var a = i,
            o = a.destroy;
          (a = a.tag),
            void 0 !== o && (2 & a || 4 & a) && Mc(n, t, o),
            (i = i.next);
        } while (i !== r);
      }
      mi(e, t, n);
      break;
    case 1:
      if (
        !Ft &&
        (Qr(n, t), "function" == typeof (r = n.stateNode).componentWillUnmount)
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (e) {
          ft(n, t, e);
        }
      mi(e, t, n);
      break;
    case 21:
      mi(e, t, n);
      break;
    case 22:
      1 & n.mode
        ? ((Ft = (r = Ft) || null !== n.memoizedState), mi(e, t, n), (Ft = r))
        : mi(e, t, n);
      break;
    default:
      mi(e, t, n);
  }
}
function Th(e) {
  var t = e.updateQueue;
  if (null !== t) {
    e.updateQueue = null;
    var n = e.stateNode;
    null === n && (n = e.stateNode = new U0()),
      t.forEach(function (t) {
        var r = G0.bind(null, e, t);
        n.has(t) || (n.add(t), t.then(r, r));
      });
  }
}
function Sn(e, t) {
  var n = t.deletions;
  if (null !== n)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var a = e,
          o = t,
          s = o;
        e: for (; null !== s; ) {
          switch (s.tag) {
            case 5:
              (Pt = s.stateNode), (An = !1);
              break e;
            case 3:
            case 4:
              (Pt = s.stateNode.containerInfo), (An = !0);
              break e;
          }
          s = s.return;
        }
        if (null === Pt) throw Error(J(160));
        Cg(a, o, i), (Pt = null), (An = !1);
        var l = i.alternate;
        null !== l && (l.return = null), (i.return = null);
      } catch (e) {
        ft(i, t, e);
      }
    }
  if (12854 & t.subtreeFlags)
    for (t = t.child; null !== t; ) Rg(t, e), (t = t.sibling);
}
function Rg(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Sn(t, e), In(e), 4 & r)) {
        try {
          Qs(3, e, e.return), Sl(3, e);
        } catch (t) {
          ft(e, e.return, t);
        }
        try {
          Qs(5, e, e.return);
        } catch (t) {
          ft(e, e.return, t);
        }
      }
      break;
    case 1:
      Sn(t, e), In(e), 512 & r && null !== n && Qr(n, n.return);
      break;
    case 5:
      if (
        (Sn(t, e),
        In(e),
        512 & r && null !== n && Qr(n, n.return),
        32 & e.flags)
      ) {
        var i = e.stateNode;
        try {
          no(i, "");
        } catch (t) {
          ft(e, e.return, t);
        }
      }
      if (4 & r && null != (i = e.stateNode)) {
        var a = e.memoizedProps,
          o = null !== n ? n.memoizedProps : a,
          s = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), null !== l))
          try {
            "input" === s && "radio" === a.type && null != a.name && Kp(i, a),
              ju(s, o);
            var c = ju(s, a);
            for (o = 0; o < l.length; o += 2) {
              var u = l[o],
                d = l[o + 1];
              "style" === u
                ? tm(i, d)
                : "dangerouslySetInnerHTML" === u
                ? Jp(i, d)
                : "children" === u
                ? no(i, d)
                : _f(i, u, d, c);
            }
            switch (s) {
              case "input":
                Wu(i, a);
                break;
              case "textarea":
                Zp(i, a);
                break;
              case "select":
                var h = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!a.multiple;
                var f = a.value;
                null != f
                  ? ns(i, !!a.multiple, f, !1)
                  : h !== !!a.multiple &&
                    (null != a.defaultValue
                      ? ns(i, !!a.multiple, a.defaultValue, !0)
                      : ns(i, !!a.multiple, a.multiple ? [] : "", !1));
            }
            i[fo] = a;
          } catch (t) {
            ft(e, e.return, t);
          }
      }
      break;
    case 6:
      if ((Sn(t, e), In(e), 4 & r)) {
        if (null === e.stateNode) throw Error(J(162));
        (i = e.stateNode), (a = e.memoizedProps);
        try {
          i.nodeValue = a;
        } catch (t) {
          ft(e, e.return, t);
        }
      }
      break;
    case 3:
      if (
        (Sn(t, e), In(e), 4 & r && null !== n && n.memoizedState.isDehydrated)
      )
        try {
          oo(t.containerInfo);
        } catch (t) {
          ft(e, e.return, t);
        }
      break;
    case 4:
    default:
      Sn(t, e), In(e);
      break;
    case 13:
      Sn(t, e),
        In(e),
        8192 & (i = e.child).flags &&
          ((a = null !== i.memoizedState),
          (i.stateNode.isHidden = a),
          !a ||
            (null !== i.alternate && null !== i.alternate.memoizedState) ||
            (Kf = dt())),
        4 & r && Th(e);
      break;
    case 22:
      if (
        ((u = null !== n && null !== n.memoizedState),
        1 & e.mode ? ((Ft = (c = Ft) || u), Sn(t, e), (Ft = c)) : Sn(t, e),
        In(e),
        8192 & r)
      ) {
        if (
          ((c = null !== e.memoizedState),
          (e.stateNode.isHidden = c) && !u && 1 & e.mode)
        )
          for (de = e, u = e.child; null !== u; ) {
            for (d = de = u; null !== de; ) {
              switch (((f = (h = de).child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Qs(4, h, h.return);
                  break;
                case 1:
                  Qr(h, h.return);
                  var p = h.stateNode;
                  if ("function" == typeof p.componentWillUnmount) {
                    (r = h), (n = h.return);
                    try {
                      (t = r),
                        (p.props = t.memoizedProps),
                        (p.state = t.memoizedState),
                        p.componentWillUnmount();
                    } catch (e) {
                      ft(r, n, e);
                    }
                  }
                  break;
                case 5:
                  Qr(h, h.return);
                  break;
                case 22:
                  if (null !== h.memoizedState) {
                    Ah(d);
                    continue;
                  }
              }
              null !== f ? ((f.return = h), (de = f)) : Ah(d);
            }
            u = u.sibling;
          }
        e: for (u = null, d = e; ; ) {
          if (5 === d.tag) {
            if (null === u) {
              u = d;
              try {
                (i = d.stateNode),
                  c
                    ? "function" == typeof (a = i.style).setProperty
                      ? a.setProperty("display", "none", "important")
                      : (a.display = "none")
                    : ((s = d.stateNode),
                      (o =
                        null != (l = d.memoizedProps.style) &&
                        l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (s.style.display = em("display", o)));
              } catch (t) {
                ft(e, e.return, t);
              }
            }
          } else if (6 === d.tag) {
            if (null === u)
              try {
                d.stateNode.nodeValue = c ? "" : d.memoizedProps;
              } catch (t) {
                ft(e, e.return, t);
              }
          } else if (
            ((22 !== d.tag && 23 !== d.tag) ||
              null === d.memoizedState ||
              d === e) &&
            null !== d.child
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; null === d.sibling; ) {
            if (null === d.return || d.return === e) break e;
            u === d && (u = null), (d = d.return);
          }
          u === d && (u = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      Sn(t, e), In(e), 4 & r && Th(e);
    case 21:
  }
}
function In(e) {
  var t = e.flags;
  if (2 & t) {
    try {
      e: {
        for (var n = e.return; null !== n; ) {
          if (Ag(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(J(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          32 & r.flags && (no(i, ""), (r.flags &= -33)), wc(e, Eh(e), i);
          break;
        case 3:
        case 4:
          var a = r.stateNode.containerInfo;
          Tc(e, Eh(e), a);
          break;
        default:
          throw Error(J(161));
      }
    } catch (t) {
      ft(e, e.return, t);
    }
    e.flags &= -3;
  }
  4096 & t && (e.flags &= -4097);
}
function N0(e, t, n) {
  (de = e), Pg(e);
}
function Pg(e, t, n) {
  for (var r = !!(1 & e.mode); null !== de; ) {
    var i = de,
      a = i.child;
    if (22 === i.tag && r) {
      var o = null !== i.memoizedState || Yo;
      if (!o) {
        var s = i.alternate,
          l = (null !== s && null !== s.memoizedState) || Ft;
        s = Yo;
        var c = Ft;
        if (((Yo = o), (Ft = l) && !c))
          for (de = i; null !== de; )
            (l = (o = de).child),
              22 === o.tag && null !== o.memoizedState
                ? Ch(i)
                : null !== l
                ? ((l.return = o), (de = l))
                : Ch(i);
        for (; null !== a; ) (de = a), Pg(a), (a = a.sibling);
        (de = i), (Yo = s), (Ft = c);
      }
      wh(e);
    } else
      8772 & i.subtreeFlags && null !== a ? ((a.return = i), (de = a)) : wh(e);
  }
}
function wh(e) {
  for (; null !== de; ) {
    var t = de;
    if (8772 & t.flags) {
      var n = t.alternate;
      try {
        if (8772 & t.flags)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ft || Sl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (4 & t.flags && !Ft)
                if (null === n) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : wn(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var a = t.updateQueue;
              null !== a && uh(t, a, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (null !== o) {
                if (((n = null), null !== t.child))
                  switch (t.child.tag) {
                    case 5:
                    case 1:
                      n = t.child.stateNode;
                  }
                uh(t, o, n);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (null === n && 4 & t.flags) {
                n = s;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
            case 4:
            case 12:
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            case 13:
              if (null === t.memoizedState) {
                var c = t.alternate;
                if (null !== c) {
                  var u = c.memoizedState;
                  if (null !== u) {
                    var d = u.dehydrated;
                    null !== d && oo(d);
                  }
                }
              }
              break;
            default:
              throw Error(J(163));
          }
        Ft || (512 & t.flags && Ec(t));
      } catch (e) {
        ft(t, t.return, e);
      }
    }
    if (t === e) {
      de = null;
      break;
    }
    if (null !== (n = t.sibling)) {
      (n.return = t.return), (de = n);
      break;
    }
    de = t.return;
  }
}
function Ah(e) {
  for (; null !== de; ) {
    var t = de;
    if (t === e) {
      de = null;
      break;
    }
    var n = t.sibling;
    if (null !== n) {
      (n.return = t.return), (de = n);
      break;
    }
    de = t.return;
  }
}
function Ch(e) {
  for (; null !== de; ) {
    var t = de;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Sl(4, t);
          } catch (e) {
            ft(t, n, e);
          }
          break;
        case 1:
          var r = t.stateNode;
          if ("function" == typeof r.componentDidMount) {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (e) {
              ft(t, i, e);
            }
          }
          var a = t.return;
          try {
            Ec(t);
          } catch (e) {
            ft(t, a, e);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Ec(t);
          } catch (e) {
            ft(t, o, e);
          }
      }
    } catch (e) {
      ft(t, t.return, e);
    }
    if (t === e) {
      de = null;
      break;
    }
    var s = t.sibling;
    if (null !== s) {
      (s.return = t.return), (de = s);
      break;
    }
    de = t.return;
  }
}
var Fg,
  F0 = Math.ceil,
  tl = hi.ReactCurrentDispatcher,
  $f = hi.ReactCurrentOwner,
  _n = hi.ReactCurrentBatchConfig,
  He = 0,
  At = null,
  vt = null,
  Lt = 0,
  nn = 0,
  Jr = Gi(0),
  yt = 0,
  vo = null,
  _r = 0,
  Ml = 0,
  jf = 0,
  Js = null,
  Wt = null,
  Kf = 0,
  _s = 1 / 0,
  Qn = null,
  nl = !1,
  Ac = null,
  Ii = null,
  qo = !1,
  Ri = null,
  il = 0,
  eo = 0,
  Cc = null,
  Ca = -1,
  Ra = 0;
function Bt() {
  return 6 & He ? dt() : -1 !== Ca ? Ca : (Ca = dt());
}
function Ni(e) {
  return 1 & e.mode
    ? 2 & He && 0 !== Lt
      ? Lt & -Lt
      : null !== x0.transition
      ? (0 === Ra && (Ra = hm()), Ra)
      : (0 !== (e = je) ||
          (e = void 0 === (e = window.event) ? 16 : ym(e.type)),
        e)
    : 1;
}
function bn(e, t, n, r) {
  if (50 < eo) throw ((eo = 0), (Cc = null), Error(J(185)));
  So(e, n, r),
    (!(2 & He) || e !== At) &&
      (e === At && (!(2 & He) && (Ml |= n), 4 === yt && wi(e, Lt)),
      jt(e, r),
      1 === n && 0 === He && !(1 & t.mode) && ((_s = dt() + 500), vl && Wi()));
}
function jt(e, t) {
  var n = e.callbackNode;
  xv(e, t);
  var r = Ba(e, e === At ? Lt : 0);
  if (0 === r)
    null !== n && Fd(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((null != n && Fd(n), 1 === t))
      0 === e.tag ? v0(Rh.bind(null, e)) : km(Rh.bind(null, e)),
        p0(function () {
          !(6 & He) && Wi();
        }),
        (n = null);
    else {
      switch (pm(r)) {
        case 1:
          n = Mf;
          break;
        case 4:
          n = fm;
          break;
        case 16:
        default:
          n = ka;
          break;
        case 536870912:
          n = dm;
      }
      n = Og(n, Lg.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Lg(e, t) {
  if (((Ca = -1), (Ra = 0), 6 & He)) throw Error(J(327));
  var n = e.callbackNode;
  if (as() && e.callbackNode !== n) return null;
  var r = Ba(e, e === At ? Lt : 0);
  if (0 === r) return null;
  if (30 & r || r & e.expiredLanes || t) t = rl(e, r);
  else {
    t = r;
    var i = He;
    He |= 2;
    var a = Dg();
    for (
      (At !== e || Lt !== t) && ((Qn = null), (_s = dt() + 500), dr(e, t));
      ;

    )
      try {
        k0();
        break;
      } catch (t) {
        bg(e, t);
      }
    Nf(),
      (tl.current = a),
      (He = i),
      null !== vt ? (t = 0) : ((At = null), (Lt = 0), (t = yt));
  }
  if (0 !== t) {
    if ((2 === t && 0 !== (i = ec(e)) && ((r = i), (t = Rc(e, i))), 1 === t))
      throw ((n = vo), dr(e, 0), wi(e, r), jt(e, dt()), n);
    if (6 === t) wi(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(
          30 & r ||
          O0(i) ||
          ((t = rl(e, r)),
          2 === t && ((a = ec(e)), 0 !== a && ((r = a), (t = Rc(e, a)))),
          1 !== t)
        ))
      )
        throw ((n = vo), dr(e, 0), wi(e, r), jt(e, dt()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(J(345));
        case 2:
        case 5:
          tr(e, Wt, Qn);
          break;
        case 3:
          if ((wi(e, r), (130023424 & r) === r && 10 < (t = Kf + 500 - dt()))) {
            if (0 !== Ba(e, 0)) break;
            if (((i = e.suspendedLanes) & r) !== r) {
              Bt(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = lc(tr.bind(null, e, Wt, Qn), t);
            break;
          }
          tr(e, Wt, Qn);
          break;
        case 4:
          if ((wi(e, r), (4194240 & r) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var o = 31 - Ln(r);
            (a = 1 << o), (o = t[o]) > i && (i = o), (r &= ~a);
          }
          if (
            ((r = i),
            10 <
              (r =
                (120 > (r = dt() - r)
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
                  : 1960 * F0(r / 1960)) - r))
          ) {
            e.timeoutHandle = lc(tr.bind(null, e, Wt, Qn), r);
            break;
          }
          tr(e, Wt, Qn);
          break;
        default:
          throw Error(J(329));
      }
    }
  }
  return jt(e, dt()), e.callbackNode === n ? Lg.bind(null, e) : null;
}
function Rc(e, t) {
  var n = Js;
  return (
    e.current.memoizedState.isDehydrated && (dr(e, t).flags |= 256),
    2 !== (e = rl(e, t)) && ((t = Wt), (Wt = n), null !== t && Pc(t)),
    e
  );
}
function Pc(e) {
  null === Wt ? (Wt = e) : Wt.push.apply(Wt, e);
}
function O0(e) {
  for (var t = e; ; ) {
    if (16384 & t.flags) {
      var n = t.updateQueue;
      if (null !== n && null !== (n = n.stores))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            a = i.getSnapshot;
          i = i.value;
          try {
            if (!Dn(a(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; null === t.sibling; ) {
        if (null === t.return || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function wi(e, t) {
  for (
    t &= ~jf,
      t &= ~Ml,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Ln(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Rh(e) {
  if (6 & He) throw Error(J(327));
  as();
  var t = Ba(e, 0);
  if (!(1 & t)) return jt(e, dt()), null;
  var n = rl(e, t);
  if (0 !== e.tag && 2 === n) {
    var r = ec(e);
    0 !== r && ((t = r), (n = Rc(e, r)));
  }
  if (1 === n) throw ((n = vo), dr(e, 0), wi(e, t), jt(e, dt()), n);
  if (6 === n) throw Error(J(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    tr(e, Wt, Qn),
    jt(e, dt()),
    null
  );
}
function Zf(e, t) {
  var n = He;
  He |= 1;
  try {
    return e(t);
  } finally {
    0 === (He = n) && ((_s = dt() + 500), vl && Wi());
  }
}
function vr(e) {
  null !== Ri && 0 === Ri.tag && !(6 & He) && as();
  var t = He;
  He |= 1;
  var n = _n.transition,
    r = je;
  try {
    if (((_n.transition = null), (je = 1), e)) return e();
  } finally {
    (je = r), (_n.transition = n), !(6 & (He = t)) && Wi();
  }
}
function Qf() {
  (nn = Jr.current), tt(Jr);
}
function dr(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((-1 !== n && ((e.timeoutHandle = -1), h0(n)), null !== vt))
    for (n = vt.return; null !== n; ) {
      var r = n;
      switch ((Df(r), r.tag)) {
        case 1:
          null != (r = r.type.childContextTypes) && Xa();
          break;
        case 3:
          ms(), tt(qt), tt(Ot), Hf();
          break;
        case 5:
          Bf(r);
          break;
        case 4:
          ms();
          break;
        case 13:
        case 19:
          tt(rt);
          break;
        case 10:
          Ff(r.type._context);
          break;
        case 22:
        case 23:
          Qf();
      }
      n = n.return;
    }
  if (
    ((At = e),
    (vt = e = Fi(e.current, null)),
    (Lt = nn = t),
    (yt = 0),
    (vo = null),
    (jf = Ml = _r = 0),
    (Wt = Js = null),
    null !== ar)
  ) {
    for (t = 0; t < ar.length; t++)
      if (null !== (r = (n = ar[t]).interleaved)) {
        n.interleaved = null;
        var i = r.next,
          a = n.pending;
        if (null !== a) {
          var o = a.next;
          (a.next = i), (r.next = o);
        }
        n.pending = r;
      }
    ar = null;
  }
  return e;
}
function bg(e, t) {
  for (;;) {
    var n = vt;
    try {
      if ((Nf(), (Ta.current = el), Ja)) {
        for (var r = ot.memoizedState; null !== r; ) {
          var i = r.queue;
          null !== i && (i.pending = null), (r = r.next);
        }
        Ja = !1;
      }
      if (
        ((gr = 0),
        (wt = xt = ot = null),
        (Zs = !1),
        (mo = 0),
        ($f.current = null),
        null === n || null === n.return)
      ) {
        (yt = 1), (vo = t), (vt = null);
        break;
      }
      e: {
        var a = e,
          o = n.return,
          s = n,
          l = t;
        if (
          ((t = Lt),
          (s.flags |= 32768),
          null !== l && "object" == typeof l && "function" == typeof l.then)
        ) {
          var c = l,
            u = s,
            d = u.tag;
          if (!(1 & u.mode || (0 !== d && 11 !== d && 15 !== d))) {
            var h = u.alternate;
            h
              ? ((u.updateQueue = h.updateQueue),
                (u.memoizedState = h.memoizedState),
                (u.lanes = h.lanes))
              : ((u.updateQueue = null), (u.memoizedState = null));
          }
          var f = mh(o);
          if (null !== f) {
            (f.flags &= -257),
              gh(f, o, s, a, t),
              1 & f.mode && ph(a, c, t),
              (l = c);
            var p = (t = f).updateQueue;
            if (null === p) {
              var m = new Set();
              m.add(l), (t.updateQueue = m);
            } else p.add(l);
            break e;
          }
          if (!(1 & t)) {
            ph(a, c, t), Jf();
            break e;
          }
          l = Error(J(426));
        } else if (nt && 1 & s.mode) {
          var g = mh(o);
          if (null !== g) {
            !(65536 & g.flags) && (g.flags |= 256),
              gh(g, o, s, a, t),
              Uf(gs(l, s));
            break e;
          }
        }
        (a = l = gs(l, s)),
          4 !== yt && (yt = 2),
          null === Js ? (Js = [a]) : Js.push(a),
          (a = o);
        do {
          switch (a.tag) {
            case 3:
              (a.flags |= 65536), (t &= -t), (a.lanes |= t), lh(a, pg(a, l, t));
              break e;
            case 1:
              s = l;
              var v = a.type,
                _ = a.stateNode;
              if (
                !(
                  128 & a.flags ||
                  ("function" != typeof v.getDerivedStateFromError &&
                    (null === _ ||
                      "function" != typeof _.componentDidCatch ||
                      (null !== Ii && Ii.has(_))))
                )
              ) {
                (a.flags |= 65536),
                  (t &= -t),
                  (a.lanes |= t),
                  lh(a, mg(a, s, t));
                break e;
              }
          }
          a = a.return;
        } while (null !== a);
      }
      Ig(n);
    } catch (e) {
      (t = e), vt === n && null !== n && (vt = n = n.return);
      continue;
    }
    break;
  }
}
function Dg() {
  var e = tl.current;
  return (tl.current = el), null === e ? el : e;
}
function Jf() {
  (0 === yt || 3 === yt || 2 === yt) && (yt = 4),
    null === At || (!(268435455 & _r) && !(268435455 & Ml)) || wi(At, Lt);
}
function rl(e, t) {
  var n = He;
  He |= 2;
  var r = Dg();
  for ((At !== e || Lt !== t) && ((Qn = null), dr(e, t)); ; )
    try {
      z0();
      break;
    } catch (t) {
      bg(e, t);
    }
  if ((Nf(), (He = n), (tl.current = r), null !== vt)) throw Error(J(261));
  return (At = null), (Lt = 0), yt;
}
function z0() {
  for (; null !== vt; ) Ug(vt);
}
function k0() {
  for (; null !== vt && !cv(); ) Ug(vt);
}
function Ug(e) {
  var t = Fg(e.alternate, e, nn);
  (e.memoizedProps = e.pendingProps),
    null === t ? Ig(e) : (vt = t),
    ($f.current = null);
}
function Ig(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), 32768 & t.flags)) {
      if (null !== (n = D0(n, t))) return (n.flags &= 32767), void (vt = n);
      if (null === e) return (yt = 6), void (vt = null);
      (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
    } else if (null !== (n = b0(n, t, nn))) return void (vt = n);
    if (null !== (t = t.sibling)) return void (vt = t);
    vt = t = e;
  } while (null !== t);
  0 === yt && (yt = 5);
}
function tr(e, t, n) {
  var r = je,
    i = _n.transition;
  try {
    (_n.transition = null), (je = 1), B0(e, t, n, r);
  } finally {
    (_n.transition = i), (je = r);
  }
  return null;
}
function B0(e, t, n, r) {
  do {
    as();
  } while (null !== Ri);
  if (6 & He) throw Error(J(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (null === n) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(J(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var a = n.lanes | n.childLanes;
  if (
    (yv(e, a),
    e === At && ((vt = At = null), (Lt = 0)),
    (!(2064 & n.subtreeFlags) && !(2064 & n.flags)) ||
      qo ||
      ((qo = !0),
      Og(ka, function () {
        return as(), null;
      })),
    (a = !!(15990 & n.flags)),
    15990 & n.subtreeFlags || a)
  ) {
    (a = _n.transition), (_n.transition = null);
    var o = je;
    je = 1;
    var s = He;
    (He |= 4),
      ($f.current = null),
      I0(e, n),
      Rg(n, e),
      o0(oc),
      (Ha = !!sc),
      (oc = sc = null),
      (e.current = n),
      N0(n),
      fv(),
      (He = s),
      (je = o),
      (_n.transition = a);
  } else e.current = n;
  if (
    (qo && ((qo = !1), (Ri = e), (il = i)),
    0 === (a = e.pendingLanes) && (Ii = null),
    pv(n.stateNode),
    jt(e, dt()),
    null !== t)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      r((i = t[n]).value, { componentStack: i.stack, digest: i.digest });
  if (nl) throw ((nl = !1), (e = Ac), (Ac = null), e);
  return (
    1 & il && 0 !== e.tag && as(),
    1 & (a = e.pendingLanes)
      ? e === Cc
        ? eo++
        : ((eo = 0), (Cc = e))
      : (eo = 0),
    Wi(),
    null
  );
}
function as() {
  if (null !== Ri) {
    var e = pm(il),
      t = _n.transition,
      n = je;
    try {
      if (((_n.transition = null), (je = 16 > e ? 16 : e), null === Ri))
        var r = !1;
      else {
        if (((e = Ri), (Ri = null), (il = 0), 6 & He)) throw Error(J(331));
        var i = He;
        for (He |= 4, de = e.current; null !== de; ) {
          var a = de,
            o = a.child;
          if (16 & de.flags) {
            var s = a.deletions;
            if (null !== s) {
              for (var l = 0; l < s.length; l++) {
                var c = s[l];
                for (de = c; null !== de; ) {
                  var u = de;
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Qs(8, u, a);
                  }
                  var d = u.child;
                  if (null !== d) (d.return = u), (de = d);
                  else
                    for (; null !== de; ) {
                      var h = (u = de).sibling,
                        f = u.return;
                      if ((wg(u), u === c)) {
                        de = null;
                        break;
                      }
                      if (null !== h) {
                        (h.return = f), (de = h);
                        break;
                      }
                      de = f;
                    }
                }
              }
              var p = a.alternate;
              if (null !== p) {
                var m = p.child;
                if (null !== m) {
                  p.child = null;
                  do {
                    var g = m.sibling;
                    (m.sibling = null), (m = g);
                  } while (null !== m);
                }
              }
              de = a;
            }
          }
          if (2064 & a.subtreeFlags && null !== o) (o.return = a), (de = o);
          else
            e: for (; null !== de; ) {
              if (2048 & (a = de).flags)
                switch (a.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Qs(9, a, a.return);
                }
              var v = a.sibling;
              if (null !== v) {
                (v.return = a.return), (de = v);
                break e;
              }
              de = a.return;
            }
        }
        var _ = e.current;
        for (de = _; null !== de; ) {
          var x = (o = de).child;
          if (2064 & o.subtreeFlags && null !== x) (x.return = o), (de = x);
          else
            e: for (o = _; null !== de; ) {
              if (2048 & (s = de).flags)
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Sl(9, s);
                  }
                } catch (e) {
                  ft(s, s.return, e);
                }
              if (s === o) {
                de = null;
                break e;
              }
              var y = s.sibling;
              if (null !== y) {
                (y.return = s.return), (de = y);
                break e;
              }
              de = s.return;
            }
        }
        if (
          ((He = i), Wi(), Hn && "function" == typeof Hn.onPostCommitFiberRoot)
        )
          try {
            Hn.onPostCommitFiberRoot(hl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (je = n), (_n.transition = t);
    }
  }
  return !1;
}
function Ph(e, t, n) {
  (e = Ui(e, (t = pg(e, (t = gs(n, t)), 1)), 1)),
    (t = Bt()),
    null !== e && (So(e, 1, t), jt(e, t));
}
function ft(e, t, n) {
  if (3 === e.tag) Ph(e, e, n);
  else
    for (; null !== t; ) {
      if (3 === t.tag) {
        Ph(t, e, n);
        break;
      }
      if (1 === t.tag) {
        var r = t.stateNode;
        if (
          "function" == typeof t.type.getDerivedStateFromError ||
          ("function" == typeof r.componentDidCatch &&
            (null === Ii || !Ii.has(r)))
        ) {
          (t = Ui(t, (e = mg(t, (e = gs(n, e)), 1)), 1)),
            (e = Bt()),
            null !== t && (So(t, 1, e), jt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function H0(e, t, n) {
  var r = e.pingCache;
  null !== r && r.delete(t),
    (t = Bt()),
    (e.pingedLanes |= e.suspendedLanes & n),
    At === e &&
      (Lt & n) === n &&
      (4 === yt || (3 === yt && (130023424 & Lt) === Lt && 500 > dt() - Kf)
        ? dr(e, 0)
        : (jf |= n)),
    jt(e, t);
}
function Ng(e, t) {
  0 === t &&
    (1 & e.mode
      ? ((t = Oo), !(130023424 & (Oo <<= 1)) && (Oo = 4194304))
      : (t = 1));
  var n = Bt();
  null !== (e = li(e, t)) && (So(e, t, n), jt(e, n));
}
function V0(e) {
  var t = e.memoizedState,
    n = 0;
  null !== t && (n = t.retryLane), Ng(e, n);
}
function G0(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      null !== i && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(J(314));
  }
  null !== r && r.delete(t), Ng(e, n);
}
function Og(e, t) {
  return cm(e, t);
}
function W0(e, t, n, r) {
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
function mn(e, t, n, r) {
  return new W0(e, t, n, r);
}
function ed(e) {
  return !(!(e = e.prototype) || !e.isReactComponent);
}
function X0(e) {
  if ("function" == typeof e) return ed(e) ? 1 : 0;
  if (null != e) {
    if ((e = e.$$typeof) === xf) return 11;
    if (e === yf) return 14;
  }
  return 2;
}
function Fi(e, t) {
  var n = e.alternate;
  return (
    null === n
      ? (((n = mn(e.tag, t, e.key, e.mode)).elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = 14680064 & e.flags),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      null === t ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Pa(e, t, n, r, i, a) {
  var o = 2;
  if (((r = e), "function" == typeof e)) ed(e) && (o = 1);
  else if ("string" == typeof e) o = 5;
  else
    e: switch (e) {
      case Gr:
        return hr(n.children, i, a, t);
      case vf:
        (o = 8), (i |= 8);
        break;
      case ku:
        return ((e = mn(12, n, t, 2 | i)).elementType = ku), (e.lanes = a), e;
      case Bu:
        return ((e = mn(13, n, t, i)).elementType = Bu), (e.lanes = a), e;
      case Hu:
        return ((e = mn(19, n, t, i)).elementType = Hu), (e.lanes = a), e;
      case qp:
        return El(n, i, a, t);
      default:
        if ("object" == typeof e && null !== e)
          switch (e.$$typeof) {
            case Xp:
              o = 10;
              break e;
            case Yp:
              o = 9;
              break e;
            case xf:
              o = 11;
              break e;
            case yf:
              o = 14;
              break e;
            case Mi:
              (o = 16), (r = null);
              break e;
          }
        throw Error(J(130, null == e ? e : typeof e, ""));
    }
  return ((t = mn(o, n, t, i)).elementType = e), (t.type = r), (t.lanes = a), t;
}
function hr(e, t, n, r) {
  return ((e = mn(7, e, r, t)).lanes = n), e;
}
function El(e, t, n, r) {
  return (
    ((e = mn(22, e, r, t)).elementType = qp),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function au(e, t, n) {
  return ((e = mn(6, e, null, t)).lanes = n), e;
}
function lu(e, t, n) {
  return (
    ((t = mn(4, null !== e.children ? e.children : [], e.key, t)).lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Y0(e, t, n, r, i) {
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
    (this.eventTimes = Vl(0)),
    (this.expirationTimes = Vl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Vl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function td(e, t, n, r, i, a, o, s, l) {
  return (
    (e = new Y0(e, t, n, s, l)),
    1 === t ? ((t = 1), !0 === a && (t |= 8)) : (t = 0),
    (a = mn(3, null, null, t)),
    (e.current = a),
    (a.stateNode = e),
    (a.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    zf(a),
    e
  );
}
function q0(e, t, n) {
  var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
  return {
    $$typeof: Vr,
    key: null == r ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function zg(e) {
  if (!e) return Bi;
  e: {
    if (Mr((e = e._reactInternals)) !== e || 1 !== e.tag) throw Error(J(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if ($t(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (null !== t);
    throw Error(J(171));
  }
  if (1 === e.tag) {
    var n = e.type;
    if ($t(n)) return zm(e, n, t);
  }
  return t;
}
function kg(e, t, n, r, i, a, o, s, l) {
  return (
    ((e = td(n, r, !0, e, i, a, o, s, l)).context = zg(null)),
    (n = e.current),
    ((a = si((r = Bt()), (i = Ni(n)))).callback = t ?? null),
    Ui(n, a, i),
    (e.current.lanes = i),
    So(e, i, r),
    jt(e, r),
    e
  );
}
function Tl(e, t, n, r) {
  var i = t.current,
    a = Bt(),
    o = Ni(i);
  return (
    (n = zg(n)),
    null === t.context ? (t.context = n) : (t.pendingContext = n),
    ((t = si(a, o)).payload = { element: e }),
    null !== (r = void 0 === r ? null : r) && (t.callback = r),
    null !== (e = Ui(i, t, o)) && (bn(e, i, o, a), Ea(e, i, o)),
    o
  );
}
function sl(e) {
  return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null;
}
function Lh(e, t) {
  if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
    var n = e.retryLane;
    e.retryLane = 0 !== n && n < t ? n : t;
  }
}
function nd(e, t) {
  Lh(e, t), (e = e.alternate) && Lh(e, t);
}
function $0() {
  return null;
}
Fg = function (e, t, n) {
  if (null !== e)
    if (e.memoizedProps !== t.pendingProps || qt.current) Yt = !0;
    else {
      if (!(e.lanes & n || 128 & t.flags)) return (Yt = !1), L0(e, t, n);
      Yt = !!(131072 & e.flags);
    }
  else (Yt = !1), nt && 1048576 & t.flags && Bm(t, $a, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Aa(e, t), (e = t.pendingProps);
      var i = ds(t, Ot.current);
      os(t, n), (i = Gf(null, t, r, e, i, n));
      var a = Wf();
      return (
        (t.flags |= 1),
        "object" == typeof i &&
        null !== i &&
        "function" == typeof i.render &&
        void 0 === i.$$typeof
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            $t(r) ? ((a = !0), Ya(t)) : (a = !1),
            (t.memoizedState =
              null !== i.state && void 0 !== i.state ? i.state : null),
            zf(t),
            (i.updater = yl),
            (t.stateNode = i),
            (i._reactInternals = t),
            mc(t, r, e, n),
            (t = vc(null, t, r, !0, a, n)))
          : ((t.tag = 0), nt && a && bf(t), kt(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Aa(e, t),
          (e = t.pendingProps),
          (r = (i = r._init)(r._payload)),
          (t.type = r),
          (i = t.tag = X0(r)),
          (e = wn(r, e)),
          i)
        ) {
          case 0:
            t = _c(null, t, r, e, n);
            break e;
          case 1:
            t = xh(null, t, r, e, n);
            break e;
          case 11:
            t = _h(null, t, r, e, n);
            break e;
          case 14:
            t = vh(null, t, r, wn(r.type, e), n);
            break e;
        }
        throw Error(J(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        _c(e, t, r, (i = t.elementType === r ? i : wn(r, i)), n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        xh(e, t, r, (i = t.elementType === r ? i : wn(r, i)), n)
      );
    case 3:
      e: {
        if ((xg(t), null === e)) throw Error(J(387));
        (r = t.pendingProps),
          (i = (a = t.memoizedState).element),
          Ym(e, t),
          Za(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), a.isDehydrated)) {
          if (
            ((a = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = a),
            (t.memoizedState = a),
            256 & t.flags)
          ) {
            t = yh(e, t, r, n, (i = gs(Error(J(423)), t)));
            break e;
          }
          if (r !== i) {
            t = yh(e, t, r, n, (i = gs(Error(J(424)), t)));
            break e;
          }
          for (
            rn = Di(t.stateNode.containerInfo.firstChild),
              sn = t,
              nt = !0,
              Cn = null,
              n = Wm(t, null, r, n),
              t.child = n;
            n;

          )
            (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
        } else {
          if ((hs(), r === i)) {
            t = ui(e, t, n);
            break e;
          }
          kt(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        qm(t),
        null === e && dc(t),
        (r = t.type),
        (i = t.pendingProps),
        (a = null !== e ? e.memoizedProps : null),
        (o = i.children),
        ac(r, i) ? (o = null) : null !== a && ac(r, a) && (t.flags |= 32),
        vg(e, t),
        kt(e, t, o, n),
        t.child
      );
    case 6:
      return null === e && dc(t), null;
    case 13:
      return yg(e, t, n);
    case 4:
      return (
        kf(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        null === e ? (t.child = ps(t, null, r, n)) : kt(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        _h(e, t, r, (i = t.elementType === r ? i : wn(r, i)), n)
      );
    case 7:
      return kt(e, t, t.pendingProps, n), t.child;
    case 8:
    case 12:
      return kt(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (a = t.memoizedProps),
          (o = i.value),
          Qe(ja, r._currentValue),
          (r._currentValue = o),
          null !== a)
        )
          if (Dn(a.value, o)) {
            if (a.children === i.children && !qt.current) {
              t = ui(e, t, n);
              break e;
            }
          } else
            for (null !== (a = t.child) && (a.return = t); null !== a; ) {
              var s = a.dependencies;
              if (null !== s) {
                o = a.child;
                for (var l = s.firstContext; null !== l; ) {
                  if (l.context === r) {
                    if (1 === a.tag) {
                      (l = si(-1, n & -n)).tag = 2;
                      var c = a.updateQueue;
                      if (null !== c) {
                        var u = (c = c.shared).pending;
                        null === u
                          ? (l.next = l)
                          : ((l.next = u.next), (u.next = l)),
                          (c.pending = l);
                      }
                    }
                    (a.lanes |= n),
                      null !== (l = a.alternate) && (l.lanes |= n),
                      hc(a.return, n, t),
                      (s.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (10 === a.tag) o = a.type === t.type ? null : a.child;
              else if (18 === a.tag) {
                if (null === (o = a.return)) throw Error(J(341));
                (o.lanes |= n),
                  null !== (s = o.alternate) && (s.lanes |= n),
                  hc(o, n, t),
                  (o = a.sibling);
              } else o = a.child;
              if (null !== o) o.return = a;
              else
                for (o = a; null !== o; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (null !== (a = o.sibling)) {
                    (a.return = o.return), (o = a);
                    break;
                  }
                  o = o.return;
                }
              a = o;
            }
        kt(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        os(t, n),
        (r = r((i = vn(i)))),
        (t.flags |= 1),
        kt(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (i = wn((r = t.type), t.pendingProps)),
        vh(e, t, r, (i = wn(r.type, i)), n)
      );
    case 15:
      return gg(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : wn(r, i)),
        Aa(e, t),
        (t.tag = 1),
        $t(r) ? ((e = !0), Ya(t)) : (e = !1),
        os(t, n),
        hg(t, r, i),
        mc(t, r, i, n),
        vc(null, t, r, !0, e, n)
      );
    case 19:
      return Sg(e, t, n);
    case 22:
      return _g(e, t, n);
  }
  throw Error(J(156, t.tag));
};
var Bg =
  "function" == typeof reportError
    ? reportError
    : function (e) {
        console.error(e);
      };
function id(e) {
  this._internalRoot = e;
}
function wl(e) {
  this._internalRoot = e;
}
function rd(e) {
  return !(!e || (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType));
}
function Al(e) {
  return !(
    !e ||
    (1 !== e.nodeType &&
      9 !== e.nodeType &&
      11 !== e.nodeType &&
      (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue))
  );
}
function bh() {}
function j0(e, t, n, r, i) {
  if (i) {
    if ("function" == typeof r) {
      var a = r;
      r = function () {
        var e = sl(o);
        a.call(e);
      };
    }
    var o = kg(t, r, e, 0, null, !1, !1, "", bh);
    return (
      (e._reactRootContainer = o),
      (e[ai] = o.current),
      uo(8 === e.nodeType ? e.parentNode : e),
      vr(),
      o
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if ("function" == typeof r) {
    var s = r;
    r = function () {
      var e = sl(l);
      s.call(e);
    };
  }
  var l = td(e, 0, !1, null, null, !1, !1, "", bh);
  return (
    (e._reactRootContainer = l),
    (e[ai] = l.current),
    uo(8 === e.nodeType ? e.parentNode : e),
    vr(function () {
      Tl(t, l, n, r);
    }),
    l
  );
}
function Cl(e, t, n, r, i) {
  var a = n._reactRootContainer;
  if (a) {
    var o = a;
    if ("function" == typeof i) {
      var s = i;
      i = function () {
        var e = sl(o);
        s.call(e);
      };
    }
    Tl(t, o, e, i);
  } else o = j0(n, t, e, i, r);
  return sl(o);
}
(wl.prototype.render = id.prototype.render =
  function (e) {
    var t = this._internalRoot;
    if (null === t) throw Error(J(409));
    Tl(e, t, null, null);
  }),
  (wl.prototype.unmount = id.prototype.unmount =
    function () {
      var e = this._internalRoot;
      if (null !== e) {
        this._internalRoot = null;
        var t = e.containerInfo;
        vr(function () {
          Tl(null, e, null, null);
        }),
          (t[ai] = null);
      }
    }),
  (wl.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = _m();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Ti.length && 0 !== t && t < Ti[n].priority; n++);
      Ti.splice(n, 0, e), 0 === n && xm(e);
    }
  }),
  (mm = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Gs(t.pendingLanes);
          0 !== n &&
            (Ef(t, 1 | n), jt(t, dt()), !(6 & He) && ((_s = dt() + 500), Wi()));
        }
        break;
      case 13:
        vr(function () {
          var t = li(e, 1);
          if (null !== t) {
            var n = Bt();
            bn(t, e, 1, n);
          }
        }),
          nd(e, 1);
    }
  }),
  (Tf = function (e) {
    if (13 === e.tag) {
      var t = li(e, 134217728);
      if (null !== t) bn(t, e, 134217728, Bt());
      nd(e, 134217728);
    }
  }),
  (gm = function (e) {
    if (13 === e.tag) {
      var t = Ni(e),
        n = li(e, t);
      if (null !== n) bn(n, e, t, Bt());
      nd(e, t);
    }
  }),
  (_m = function () {
    return je;
  }),
  (vm = function (e, t) {
    var n = je;
    try {
      return (je = e), t();
    } finally {
      je = n;
    }
  }),
  (Zu = function (e, t, n) {
    switch (t) {
      case "input":
        if ((Wu(e, n), (t = n.name), "radio" === n.type && null != t)) {
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
              var i = _l(r);
              if (!i) throw Error(J(90));
              jp(r), Wu(r, i);
            }
          }
        }
        break;
      case "textarea":
        Zp(e, n);
        break;
      case "select":
        null != (t = n.value) && ns(e, !!n.multiple, t, !1);
    }
  }),
  (rm = Zf),
  (sm = vr);
var K0 = { usingClientEntryPoint: !1, Events: [Eo, qr, _l, nm, im, Zf] },
  Ns = {
    findFiberByHostInstance: or,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Z0 = {
    bundleType: Ns.bundleType,
    version: Ns.version,
    rendererPackageName: Ns.rendererPackageName,
    rendererConfig: Ns.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: hi.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return null === (e = lm(e)) ? null : e.stateNode;
    },
    findFiberByHostInstance: Ns.findFiberByHostInstance || $0,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var $o = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!$o.isDisabled && $o.supportsFiber)
    try {
      (hl = $o.inject(Z0)), (Hn = $o);
    } catch {}
}
function Hg() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      "function" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Hg);
    } catch (e) {
      console.error(e);
    }
}
(ln.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = K0),
  (ln.createPortal = function (e, t) {
    var n =
      2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
    if (!rd(t)) throw Error(J(200));
    return q0(e, t, null, n);
  }),
  (ln.createRoot = function (e, t) {
    if (!rd(e)) throw Error(J(299));
    var n = !1,
      r = "",
      i = Bg;
    return (
      null != t &&
        (!0 === t.unstable_strictMode && (n = !0),
        void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
        void 0 !== t.onRecoverableError && (i = t.onRecoverableError)),
      (t = td(e, 1, !1, null, null, n, !1, r, i)),
      (e[ai] = t.current),
      uo(8 === e.nodeType ? e.parentNode : e),
      new id(t)
    );
  }),
  (ln.findDOMNode = function (e) {
    if (null == e) return null;
    if (1 === e.nodeType) return e;
    var t = e._reactInternals;
    if (void 0 === t)
      throw "function" == typeof e.render
        ? Error(J(188))
        : ((e = Object.keys(e).join(",")), Error(J(268, e)));
    return (e = null === (e = lm(t)) ? null : e.stateNode);
  }),
  (ln.flushSync = function (e) {
    return vr(e);
  }),
  (ln.hydrate = function (e, t, n) {
    if (!Al(t)) throw Error(J(200));
    return Cl(null, e, t, !0, n);
  }),
  (ln.hydrateRoot = function (e, t, n) {
    if (!rd(e)) throw Error(J(405));
    var r = (null != n && n.hydratedSources) || null,
      i = !1,
      a = "",
      o = Bg;
    if (
      (null != n &&
        (!0 === n.unstable_strictMode && (i = !0),
        void 0 !== n.identifierPrefix && (a = n.identifierPrefix),
        void 0 !== n.onRecoverableError && (o = n.onRecoverableError)),
      (t = kg(t, null, e, 1, n ?? null, i, !1, a, o)),
      (e[ai] = t.current),
      uo(e),
      r)
    )
      for (e = 0; e < r.length; e++)
        (i = (i = (n = r[e])._getVersion)(n._source)),
          null == t.mutableSourceEagerHydrationData
            ? (t.mutableSourceEagerHydrationData = [n, i])
            : t.mutableSourceEagerHydrationData.push(n, i);
    return new wl(t);
  }),
  (ln.render = function (e, t, n) {
    if (!Al(t)) throw Error(J(200));
    return Cl(null, e, t, !1, n);
  }),
  (ln.unmountComponentAtNode = function (e) {
    if (!Al(e)) throw Error(J(40));
    return (
      !!e._reactRootContainer &&
      (vr(function () {
        Cl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[ai] = null);
        });
      }),
      !0)
    );
  }),
  (ln.unstable_batchedUpdates = Zf),
  (ln.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
    if (!Al(n)) throw Error(J(200));
    if (null == e || void 0 === e._reactInternals) throw Error(J(38));
    return Cl(e, t, n, !1, r);
  }),
  (ln.version = "18.3.1-next-f1338f8080-20240426"),
  Hg(),
  (Hp.exports = ln);
var Q0 = Hp.exports,
  Dh = Q0;
(Ou.createRoot = Dh.createRoot), (Ou.hydrateRoot = Dh.hydrateRoot);
/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const sd = "166",
  J0 = 0,
  Uh = 1,
  ex = 2,
  Vg = 1,
  tx = 2,
  Zn = 3,
  Hi = 0,
  Kt = 1,
  ei = 2,
  Oi = 0,
  ls = 1,
  Ih = 2,
  Nh = 3,
  Fh = 4,
  nx = 5,
  rr = 100,
  ix = 101,
  rx = 102,
  sx = 103,
  ox = 104,
  ax = 200,
  lx = 201,
  ux = 202,
  cx = 203,
  Lc = 204,
  bc = 205,
  fx = 206,
  dx = 207,
  hx = 208,
  px = 209,
  mx = 210,
  gx = 211,
  _x = 212,
  vx = 213,
  xx = 214,
  yx = 0,
  Sx = 1,
  Mx = 2,
  ol = 3,
  Ex = 4,
  Tx = 5,
  wx = 6,
  Ax = 7,
  Gg = 0,
  Cx = 1,
  Rx = 2,
  zi = 0,
  Px = 1,
  Lx = 2,
  bx = 3,
  Dx = 4,
  Ux = 5,
  Ix = 6,
  Nx = 7,
  Wg = 300,
  vs = 301,
  xs = 302,
  Dc = 303,
  Uc = 304,
  Rl = 306,
  Ic = 1e3,
  ur = 1001,
  Nc = 1002,
  gn = 1003,
  Fx = 1004,
  jo = 1005,
  Rn = 1006,
  uu = 1007,
  cr = 1008,
  ci = 1009,
  Xg = 1010,
  Yg = 1011,
  xo = 1012,
  od = 1013,
  xr = 1014,
  ii = 1015,
  wo = 1016,
  ad = 1017,
  ld = 1018,
  ys = 1020,
  qg = 35902,
  $g = 1021,
  jg = 1022,
  Pn = 1023,
  Kg = 1024,
  Zg = 1025,
  us = 1026,
  Ss = 1027,
  Qg = 1028,
  ud = 1029,
  Jg = 1030,
  cd = 1031,
  fd = 1033,
  La = 33776,
  ba = 33777,
  Da = 33778,
  Ua = 33779,
  Fc = 35840,
  Oc = 35841,
  zc = 35842,
  kc = 35843,
  Bc = 36196,
  Hc = 37492,
  Vc = 37496,
  Gc = 37808,
  Wc = 37809,
  Xc = 37810,
  Yc = 37811,
  qc = 37812,
  $c = 37813,
  jc = 37814,
  Kc = 37815,
  Zc = 37816,
  Qc = 37817,
  Jc = 37818,
  ef = 37819,
  tf = 37820,
  nf = 37821,
  Ia = 36492,
  rf = 36494,
  sf = 36495,
  e_ = 36283,
  of = 36284,
  af = 36285,
  lf = 36286,
  Ox = 3200,
  zx = 3201,
  kx = 0,
  Bx = 1,
  Ai = "",
  Fn = "srgb",
  Xi = "srgb-linear",
  dd = "display-p3",
  Pl = "display-p3-linear",
  al = "linear",
  et = "srgb",
  ll = "rec709",
  ul = "p3",
  wr = 7680,
  Oh = 519,
  Hx = 512,
  Vx = 513,
  Gx = 514,
  t_ = 515,
  Wx = 516,
  Xx = 517,
  Yx = 518,
  qx = 519,
  zh = 35044,
  kh = "300 es",
  ri = 2e3,
  cl = 2001;
class As {
  addEventListener(e, t) {
    void 0 === this._listeners && (this._listeners = {});
    const n = this._listeners;
    void 0 === n[e] && (n[e] = []), -1 === n[e].indexOf(t) && n[e].push(t);
  }
  hasEventListener(e, t) {
    if (void 0 === this._listeners) return !1;
    const n = this._listeners;
    return void 0 !== n[e] && -1 !== n[e].indexOf(t);
  }
  removeEventListener(e, t) {
    if (void 0 === this._listeners) return;
    const n = this._listeners[e];
    if (void 0 !== n) {
      const e = n.indexOf(t);
      -1 !== e && n.splice(e, 1);
    }
  }
  dispatchEvent(e) {
    if (void 0 === this._listeners) return;
    const t = this._listeners[e.type];
    if (void 0 !== t) {
      e.target = this;
      const n = t.slice(0);
      for (let t = 0, r = n.length; t < r; t++) n[t].call(this, e);
      e.target = null;
    }
  }
}
const It = [
    "00",
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "0a",
    "0b",
    "0c",
    "0d",
    "0e",
    "0f",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "1a",
    "1b",
    "1c",
    "1d",
    "1e",
    "1f",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "2a",
    "2b",
    "2c",
    "2d",
    "2e",
    "2f",
    "30",
    "31",
    "32",
    "33",
    "34",
    "35",
    "36",
    "37",
    "38",
    "39",
    "3a",
    "3b",
    "3c",
    "3d",
    "3e",
    "3f",
    "40",
    "41",
    "42",
    "43",
    "44",
    "45",
    "46",
    "47",
    "48",
    "49",
    "4a",
    "4b",
    "4c",
    "4d",
    "4e",
    "4f",
    "50",
    "51",
    "52",
    "53",
    "54",
    "55",
    "56",
    "57",
    "58",
    "59",
    "5a",
    "5b",
    "5c",
    "5d",
    "5e",
    "5f",
    "60",
    "61",
    "62",
    "63",
    "64",
    "65",
    "66",
    "67",
    "68",
    "69",
    "6a",
    "6b",
    "6c",
    "6d",
    "6e",
    "6f",
    "70",
    "71",
    "72",
    "73",
    "74",
    "75",
    "76",
    "77",
    "78",
    "79",
    "7a",
    "7b",
    "7c",
    "7d",
    "7e",
    "7f",
    "80",
    "81",
    "82",
    "83",
    "84",
    "85",
    "86",
    "87",
    "88",
    "89",
    "8a",
    "8b",
    "8c",
    "8d",
    "8e",
    "8f",
    "90",
    "91",
    "92",
    "93",
    "94",
    "95",
    "96",
    "97",
    "98",
    "99",
    "9a",
    "9b",
    "9c",
    "9d",
    "9e",
    "9f",
    "a0",
    "a1",
    "a2",
    "a3",
    "a4",
    "a5",
    "a6",
    "a7",
    "a8",
    "a9",
    "aa",
    "ab",
    "ac",
    "ad",
    "ae",
    "af",
    "b0",
    "b1",
    "b2",
    "b3",
    "b4",
    "b5",
    "b6",
    "b7",
    "b8",
    "b9",
    "ba",
    "bb",
    "bc",
    "bd",
    "be",
    "bf",
    "c0",
    "c1",
    "c2",
    "c3",
    "c4",
    "c5",
    "c6",
    "c7",
    "c8",
    "c9",
    "ca",
    "cb",
    "cc",
    "cd",
    "ce",
    "cf",
    "d0",
    "d1",
    "d2",
    "d3",
    "d4",
    "d5",
    "d6",
    "d7",
    "d8",
    "d9",
    "da",
    "db",
    "dc",
    "dd",
    "de",
    "df",
    "e0",
    "e1",
    "e2",
    "e3",
    "e4",
    "e5",
    "e6",
    "e7",
    "e8",
    "e9",
    "ea",
    "eb",
    "ec",
    "ed",
    "ee",
    "ef",
    "f0",
    "f1",
    "f2",
    "f3",
    "f4",
    "f5",
    "f6",
    "f7",
    "f8",
    "f9",
    "fa",
    "fb",
    "fc",
    "fd",
    "fe",
    "ff",
  ],
  cu = Math.PI / 180,
  uf = 180 / Math.PI;
function Ao() {
  const e = (4294967295 * Math.random()) | 0,
    t = (4294967295 * Math.random()) | 0,
    n = (4294967295 * Math.random()) | 0,
    r = (4294967295 * Math.random()) | 0;
  return (
    It[255 & e] +
    It[(e >> 8) & 255] +
    It[(e >> 16) & 255] +
    It[(e >> 24) & 255] +
    "-" +
    It[255 & t] +
    It[(t >> 8) & 255] +
    "-" +
    It[((t >> 16) & 15) | 64] +
    It[(t >> 24) & 255] +
    "-" +
    It[(63 & n) | 128] +
    It[(n >> 8) & 255] +
    "-" +
    It[(n >> 16) & 255] +
    It[(n >> 24) & 255] +
    It[255 & r] +
    It[(r >> 8) & 255] +
    It[(r >> 16) & 255] +
    It[(r >> 24) & 255]
  ).toLowerCase();
}
function Xt(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function $x(e, t) {
  return ((e % t) + t) % t;
}
function fu(e, t, n) {
  return (1 - n) * e + n * t;
}
function Fs(e, t) {
  switch (t.constructor) {
    case Float32Array:
      return e;
    case Uint32Array:
      return e / 4294967295;
    case Uint16Array:
      return e / 65535;
    case Uint8Array:
      return e / 255;
    case Int32Array:
      return Math.max(e / 2147483647, -1);
    case Int16Array:
      return Math.max(e / 32767, -1);
    case Int8Array:
      return Math.max(e / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function Gt(e, t) {
  switch (t.constructor) {
    case Float32Array:
      return e;
    case Uint32Array:
      return Math.round(4294967295 * e);
    case Uint16Array:
      return Math.round(65535 * e);
    case Uint8Array:
      return Math.round(255 * e);
    case Int32Array:
      return Math.round(2147483647 * e);
    case Int16Array:
      return Math.round(32767 * e);
    case Int8Array:
      return Math.round(127 * e);
    default:
      throw new Error("Invalid component type.");
  }
}
class Ve {
  constructor(e = 0, t = 0) {
    (Ve.prototype.isVector2 = !0), (this.x = e), (this.y = t);
  }
  get width() {
    return this.x;
  }
  set width(e) {
    this.x = e;
  }
  get height() {
    return this.y;
  }
  set height(e) {
    this.y = e;
  }
  set(e, t) {
    return (this.x = e), (this.y = t), this;
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(e) {
    return (this.x = e.x), (this.y = e.y), this;
  }
  add(e) {
    return (this.x += e.x), (this.y += e.y), this;
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), this;
  }
  addVectors(e, t) {
    return (this.x = e.x + t.x), (this.y = e.y + t.y), this;
  }
  addScaledVector(e, t) {
    return (this.x += e.x * t), (this.y += e.y * t), this;
  }
  sub(e) {
    return (this.x -= e.x), (this.y -= e.y), this;
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), this;
  }
  subVectors(e, t) {
    return (this.x = e.x - t.x), (this.y = e.y - t.y), this;
  }
  multiply(e) {
    return (this.x *= e.x), (this.y *= e.y), this;
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), this;
  }
  divide(e) {
    return (this.x /= e.x), (this.y /= e.y), this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  applyMatrix3(e) {
    const t = this.x,
      n = this.y,
      r = e.elements;
    return (
      (this.x = r[0] * t + r[3] * n + r[6]),
      (this.y = r[1] * t + r[4] * n + r[7]),
      this
    );
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)), (this.y = Math.min(this.y, e.y)), this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)), (this.y = Math.max(this.y, e.y)), this
    );
  }
  clamp(e, t) {
    return (
      (this.x = Math.max(e.x, Math.min(t.x, this.x))),
      (this.y = Math.max(e.y, Math.min(t.y, this.y))),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = Math.max(e, Math.min(t, this.x))),
      (this.y = Math.max(e, Math.min(t, this.y))),
      this
    );
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(
      Math.max(e, Math.min(t, n))
    );
  }
  floor() {
    return (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this;
  }
  ceil() {
    return (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this;
  }
  round() {
    return (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this;
  }
  roundToZero() {
    return (this.x = Math.trunc(this.x)), (this.y = Math.trunc(this.y)), this;
  }
  negate() {
    return (this.x = -this.x), (this.y = -this.y), this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  cross(e) {
    return this.x * e.y - this.y * e.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (0 === t) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(Xt(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x,
      n = this.y - e.y;
    return t * t + n * n;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (this.x += (e.x - this.x) * t), (this.y += (e.y - this.y) * t), this;
  }
  lerpVectors(e, t, n) {
    return (
      (this.x = e.x + (t.x - e.x) * n), (this.y = e.y + (t.y - e.y) * n), this
    );
  }
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  fromArray(e, t = 0) {
    return (this.x = e[t]), (this.y = e[t + 1]), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this.x), (e[t + 1] = this.y), e;
  }
  fromBufferAttribute(e, t) {
    return (this.x = e.getX(t)), (this.y = e.getY(t)), this;
  }
  rotateAround(e, t) {
    const n = Math.cos(t),
      r = Math.sin(t),
      i = this.x - e.x,
      a = this.y - e.y;
    return (this.x = i * n - a * r + e.x), (this.y = i * r + a * n + e.y), this;
  }
  random() {
    return (this.x = Math.random()), (this.y = Math.random()), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class Ue {
  constructor(e, t, n, r, i, a, o, s, l) {
    (Ue.prototype.isMatrix3 = !0),
      (this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1]),
      void 0 !== e && this.set(e, t, n, r, i, a, o, s, l);
  }
  set(e, t, n, r, i, a, o, s, l) {
    const c = this.elements;
    return (
      (c[0] = e),
      (c[1] = r),
      (c[2] = o),
      (c[3] = t),
      (c[4] = i),
      (c[5] = s),
      (c[6] = n),
      (c[7] = a),
      (c[8] = l),
      this
    );
  }
  identity() {
    return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
  }
  copy(e) {
    const t = this.elements,
      n = e.elements;
    return (
      (t[0] = n[0]),
      (t[1] = n[1]),
      (t[2] = n[2]),
      (t[3] = n[3]),
      (t[4] = n[4]),
      (t[5] = n[5]),
      (t[6] = n[6]),
      (t[7] = n[7]),
      (t[8] = n[8]),
      this
    );
  }
  extractBasis(e, t, n) {
    return (
      e.setFromMatrix3Column(this, 0),
      t.setFromMatrix3Column(this, 1),
      n.setFromMatrix3Column(this, 2),
      this
    );
  }
  setFromMatrix4(e) {
    const t = e.elements;
    return (
      this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]), this
    );
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements,
      r = t.elements,
      i = this.elements,
      a = n[0],
      o = n[3],
      s = n[6],
      l = n[1],
      c = n[4],
      u = n[7],
      d = n[2],
      h = n[5],
      f = n[8],
      p = r[0],
      m = r[3],
      g = r[6],
      v = r[1],
      _ = r[4],
      x = r[7],
      y = r[2],
      S = r[5],
      M = r[8];
    return (
      (i[0] = a * p + o * v + s * y),
      (i[3] = a * m + o * _ + s * S),
      (i[6] = a * g + o * x + s * M),
      (i[1] = l * p + c * v + u * y),
      (i[4] = l * m + c * _ + u * S),
      (i[7] = l * g + c * x + u * M),
      (i[2] = d * p + h * v + f * y),
      (i[5] = d * m + h * _ + f * S),
      (i[8] = d * g + h * x + f * M),
      this
    );
  }
  multiplyScalar(e) {
    const t = this.elements;
    return (
      (t[0] *= e),
      (t[3] *= e),
      (t[6] *= e),
      (t[1] *= e),
      (t[4] *= e),
      (t[7] *= e),
      (t[2] *= e),
      (t[5] *= e),
      (t[8] *= e),
      this
    );
  }
  determinant() {
    const e = this.elements,
      t = e[0],
      n = e[1],
      r = e[2],
      i = e[3],
      a = e[4],
      o = e[5],
      s = e[6],
      l = e[7],
      c = e[8];
    return (
      t * a * c - t * o * l - n * i * c + n * o * s + r * i * l - r * a * s
    );
  }
  invert() {
    const e = this.elements,
      t = e[0],
      n = e[1],
      r = e[2],
      i = e[3],
      a = e[4],
      o = e[5],
      s = e[6],
      l = e[7],
      c = e[8],
      u = c * a - o * l,
      d = o * s - c * i,
      h = l * i - a * s,
      f = t * u + n * d + r * h;
    if (0 === f) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const p = 1 / f;
    return (
      (e[0] = u * p),
      (e[1] = (r * l - c * n) * p),
      (e[2] = (o * n - r * a) * p),
      (e[3] = d * p),
      (e[4] = (c * t - r * s) * p),
      (e[5] = (r * i - o * t) * p),
      (e[6] = h * p),
      (e[7] = (n * s - l * t) * p),
      (e[8] = (a * t - n * i) * p),
      this
    );
  }
  transpose() {
    let e;
    const t = this.elements;
    return (
      (e = t[1]),
      (t[1] = t[3]),
      (t[3] = e),
      (e = t[2]),
      (t[2] = t[6]),
      (t[6] = e),
      (e = t[5]),
      (t[5] = t[7]),
      (t[7] = e),
      this
    );
  }
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  transposeIntoArray(e) {
    const t = this.elements;
    return (
      (e[0] = t[0]),
      (e[1] = t[3]),
      (e[2] = t[6]),
      (e[3] = t[1]),
      (e[4] = t[4]),
      (e[5] = t[7]),
      (e[6] = t[2]),
      (e[7] = t[5]),
      (e[8] = t[8]),
      this
    );
  }
  setUvTransform(e, t, n, r, i, a, o) {
    const s = Math.cos(i),
      l = Math.sin(i);
    return (
      this.set(
        n * s,
        n * l,
        -n * (s * a + l * o) + a + e,
        -r * l,
        r * s,
        -r * (-l * a + s * o) + o + t,
        0,
        0,
        1
      ),
      this
    );
  }
  scale(e, t) {
    return this.premultiply(du.makeScale(e, t)), this;
  }
  rotate(e) {
    return this.premultiply(du.makeRotation(-e)), this;
  }
  translate(e, t) {
    return this.premultiply(du.makeTranslation(e, t)), this;
  }
  makeTranslation(e, t) {
    return (
      e.isVector2
        ? this.set(1, 0, e.x, 0, 1, e.y, 0, 0, 1)
        : this.set(1, 0, e, 0, 1, t, 0, 0, 1),
      this
    );
  }
  makeRotation(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return this.set(t, -n, 0, n, t, 0, 0, 0, 1), this;
  }
  makeScale(e, t) {
    return this.set(e, 0, 0, 0, t, 0, 0, 0, 1), this;
  }
  equals(e) {
    const t = this.elements,
      n = e.elements;
    for (let e = 0; e < 9; e++) if (t[e] !== n[e]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 9; n++) this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return (
      (e[t] = n[0]),
      (e[t + 1] = n[1]),
      (e[t + 2] = n[2]),
      (e[t + 3] = n[3]),
      (e[t + 4] = n[4]),
      (e[t + 5] = n[5]),
      (e[t + 6] = n[6]),
      (e[t + 7] = n[7]),
      (e[t + 8] = n[8]),
      e
    );
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const du = new Ue();
function n_(e) {
  for (let t = e.length - 1; t >= 0; --t) if (e[t] >= 65535) return !0;
  return !1;
}
function fl(e) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", e);
}
function jx() {
  const e = fl("canvas");
  return (e.style.display = "block"), e;
}
const Bh = {};
function i_(e) {
  e in Bh || ((Bh[e] = !0), console.warn(e));
}
function Kx(e, t, n) {
  return new Promise(function (r, i) {
    setTimeout(function a() {
      switch (e.clientWaitSync(t, e.SYNC_FLUSH_COMMANDS_BIT, 0)) {
        case e.WAIT_FAILED:
          i();
          break;
        case e.TIMEOUT_EXPIRED:
          setTimeout(a, n);
          break;
        default:
          r();
      }
    }, n);
  });
}
const Hh = new Ue().set(
    0.8224621,
    0.177538,
    0,
    0.0331941,
    0.9668058,
    0,
    0.0170827,
    0.0723974,
    0.9105199
  ),
  Vh = new Ue().set(
    1.2249401,
    -0.2249404,
    0,
    -0.0420569,
    1.0420571,
    0,
    -0.0196376,
    -0.0786361,
    1.0982735
  ),
  Ko = {
    [Xi]: {
      transfer: al,
      primaries: ll,
      toReference: (e) => e,
      fromReference: (e) => e,
    },
    [Fn]: {
      transfer: et,
      primaries: ll,
      toReference: (e) => e.convertSRGBToLinear(),
      fromReference: (e) => e.convertLinearToSRGB(),
    },
    [Pl]: {
      transfer: al,
      primaries: ul,
      toReference: (e) => e.applyMatrix3(Vh),
      fromReference: (e) => e.applyMatrix3(Hh),
    },
    [dd]: {
      transfer: et,
      primaries: ul,
      toReference: (e) => e.convertSRGBToLinear().applyMatrix3(Vh),
      fromReference: (e) => e.applyMatrix3(Hh).convertLinearToSRGB(),
    },
  },
  Zx = new Set([Xi, Pl]),
  $e = {
    enabled: !0,
    _workingColorSpace: Xi,
    get workingColorSpace() {
      return this._workingColorSpace;
    },
    set workingColorSpace(e) {
      if (!Zx.has(e))
        throw new Error(`Unsupported working color space, "${e}".`);
      this._workingColorSpace = e;
    },
    convert: function (e, t, n) {
      if (!1 === this.enabled || t === n || !t || !n) return e;
      const r = Ko[t].toReference;
      return (0, Ko[n].fromReference)(r(e));
    },
    fromWorkingColorSpace: function (e, t) {
      return this.convert(e, this._workingColorSpace, t);
    },
    toWorkingColorSpace: function (e, t) {
      return this.convert(e, t, this._workingColorSpace);
    },
    getPrimaries: function (e) {
      return Ko[e].primaries;
    },
    getTransfer: function (e) {
      return "" === e ? al : Ko[e].transfer;
    },
  };
function cs(e) {
  return e < 0.04045
    ? 0.0773993808 * e
    : Math.pow(0.9478672986 * e + 0.0521327014, 2.4);
}
function hu(e) {
  return e < 0.0031308 ? 12.92 * e : 1.055 * Math.pow(e, 0.41666) - 0.055;
}
let Ar;
class Qx {
  static getDataURL(e) {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u") return e.src;
    let t;
    if (e instanceof HTMLCanvasElement) t = e;
    else {
      void 0 === Ar && (Ar = fl("canvas")),
        (Ar.width = e.width),
        (Ar.height = e.height);
      const n = Ar.getContext("2d");
      e instanceof ImageData
        ? n.putImageData(e, 0, 0)
        : n.drawImage(e, 0, 0, e.width, e.height),
        (t = Ar);
    }
    return t.width > 2048 || t.height > 2048
      ? (console.warn(
          "THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",
          e
        ),
        t.toDataURL("image/jpeg", 0.6))
      : t.toDataURL("image/png");
  }
  static sRGBToLinear(e) {
    if (
      (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement) ||
      (typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement) ||
      (typeof ImageBitmap < "u" && e instanceof ImageBitmap)
    ) {
      const t = fl("canvas");
      (t.width = e.width), (t.height = e.height);
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const r = n.getImageData(0, 0, e.width, e.height),
        i = r.data;
      for (let e = 0; e < i.length; e++) i[e] = 255 * cs(i[e] / 255);
      return n.putImageData(r, 0, 0), t;
    }
    if (e.data) {
      const t = e.data.slice(0);
      for (let e = 0; e < t.length; e++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray
          ? (t[e] = Math.floor(255 * cs(t[e] / 255)))
          : (t[e] = cs(t[e]));
      return { data: t, width: e.width, height: e.height };
    }
    return (
      console.warn(
        "THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."
      ),
      e
    );
  }
}
let Jx = 0;
class r_ {
  constructor(e = null) {
    (this.isSource = !0),
      Object.defineProperty(this, "id", { value: Jx++ }),
      (this.uuid = Ao()),
      (this.data = e),
      (this.dataReady = !0),
      (this.version = 0);
  }
  set needsUpdate(e) {
    !0 === e && this.version++;
  }
  toJSON(e) {
    const t = void 0 === e || "string" == typeof e;
    if (!t && void 0 !== e.images[this.uuid]) return e.images[this.uuid];
    const n = { uuid: this.uuid, url: "" },
      r = this.data;
    if (null !== r) {
      let e;
      if (Array.isArray(r)) {
        e = [];
        for (let t = 0, n = r.length; t < n; t++)
          r[t].isDataTexture ? e.push(pu(r[t].image)) : e.push(pu(r[t]));
      } else e = pu(r);
      n.url = e;
    }
    return t || (e.images[this.uuid] = n), n;
  }
}
function pu(e) {
  return (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement) ||
    (typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement) ||
    (typeof ImageBitmap < "u" && e instanceof ImageBitmap)
    ? Qx.getDataURL(e)
    : e.data
    ? {
        data: Array.from(e.data),
        width: e.width,
        height: e.height,
        type: e.data.constructor.name,
      }
    : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let ey = 0;
class Zt extends As {
  constructor(
    e = Zt.DEFAULT_IMAGE,
    t = Zt.DEFAULT_MAPPING,
    n = ur,
    r = ur,
    i = Rn,
    a = cr,
    o = Pn,
    s = ci,
    l = Zt.DEFAULT_ANISOTROPY,
    c = ""
  ) {
    super(),
      (this.isTexture = !0),
      Object.defineProperty(this, "id", { value: ey++ }),
      (this.uuid = Ao()),
      (this.name = ""),
      (this.source = new r_(e)),
      (this.mipmaps = []),
      (this.mapping = t),
      (this.channel = 0),
      (this.wrapS = n),
      (this.wrapT = r),
      (this.magFilter = i),
      (this.minFilter = a),
      (this.anisotropy = l),
      (this.format = o),
      (this.internalFormat = null),
      (this.type = s),
      (this.offset = new Ve(0, 0)),
      (this.repeat = new Ve(1, 1)),
      (this.center = new Ve(0, 0)),
      (this.rotation = 0),
      (this.matrixAutoUpdate = !0),
      (this.matrix = new Ue()),
      (this.generateMipmaps = !0),
      (this.premultiplyAlpha = !1),
      (this.flipY = !0),
      (this.unpackAlignment = 4),
      (this.colorSpace = c),
      (this.userData = {}),
      (this.version = 0),
      (this.onUpdate = null),
      (this.isRenderTargetTexture = !1),
      (this.pmremVersion = 0);
  }
  get image() {
    return this.source.data;
  }
  set image(e = null) {
    this.source.data = e;
  }
  updateMatrix() {
    this.matrix.setUvTransform(
      this.offset.x,
      this.offset.y,
      this.repeat.x,
      this.repeat.y,
      this.rotation,
      this.center.x,
      this.center.y
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return (
      (this.name = e.name),
      (this.source = e.source),
      (this.mipmaps = e.mipmaps.slice(0)),
      (this.mapping = e.mapping),
      (this.channel = e.channel),
      (this.wrapS = e.wrapS),
      (this.wrapT = e.wrapT),
      (this.magFilter = e.magFilter),
      (this.minFilter = e.minFilter),
      (this.anisotropy = e.anisotropy),
      (this.format = e.format),
      (this.internalFormat = e.internalFormat),
      (this.type = e.type),
      this.offset.copy(e.offset),
      this.repeat.copy(e.repeat),
      this.center.copy(e.center),
      (this.rotation = e.rotation),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      this.matrix.copy(e.matrix),
      (this.generateMipmaps = e.generateMipmaps),
      (this.premultiplyAlpha = e.premultiplyAlpha),
      (this.flipY = e.flipY),
      (this.unpackAlignment = e.unpackAlignment),
      (this.colorSpace = e.colorSpace),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      (this.needsUpdate = !0),
      this
    );
  }
  toJSON(e) {
    const t = void 0 === e || "string" == typeof e;
    if (!t && void 0 !== e.textures[this.uuid]) return e.textures[this.uuid];
    const n = {
      metadata: { version: 4.6, type: "Texture", generator: "Texture.toJSON" },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(e).uuid,
      mapping: this.mapping,
      channel: this.channel,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      internalFormat: this.internalFormat,
      type: this.type,
      colorSpace: this.colorSpace,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      generateMipmaps: this.generateMipmaps,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment,
    };
    return (
      Object.keys(this.userData).length > 0 && (n.userData = this.userData),
      t || (e.textures[this.uuid] = n),
      n
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(e) {
    if (this.mapping !== Wg) return e;
    if ((e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1))
      switch (this.wrapS) {
        case Ic:
          e.x = e.x - Math.floor(e.x);
          break;
        case ur:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case Nc:
          1 === Math.abs(Math.floor(e.x) % 2)
            ? (e.x = Math.ceil(e.x) - e.x)
            : (e.x = e.x - Math.floor(e.x));
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case Ic:
          e.y = e.y - Math.floor(e.y);
          break;
        case ur:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case Nc:
          1 === Math.abs(Math.floor(e.y) % 2)
            ? (e.y = Math.ceil(e.y) - e.y)
            : (e.y = e.y - Math.floor(e.y));
      }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  set needsUpdate(e) {
    !0 === e && (this.version++, (this.source.needsUpdate = !0));
  }
  set needsPMREMUpdate(e) {
    !0 === e && this.pmremVersion++;
  }
}
(Zt.DEFAULT_IMAGE = null),
  (Zt.DEFAULT_MAPPING = Wg),
  (Zt.DEFAULT_ANISOTROPY = 1);
class st {
  constructor(e = 0, t = 0, n = 0, r = 1) {
    (st.prototype.isVector4 = !0),
      (this.x = e),
      (this.y = t),
      (this.z = n),
      (this.w = r);
  }
  get width() {
    return this.z;
  }
  set width(e) {
    this.z = e;
  }
  get height() {
    return this.w;
  }
  set height(e) {
    this.w = e;
  }
  set(e, t, n, r) {
    return (this.x = e), (this.y = t), (this.z = n), (this.w = r), this;
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), (this.z = e), (this.w = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setZ(e) {
    return (this.z = e), this;
  }
  setW(e) {
    return (this.w = e), this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      case 3:
        this.w = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(e) {
    return (
      (this.x = e.x),
      (this.y = e.y),
      (this.z = e.z),
      (this.w = void 0 !== e.w ? e.w : 1),
      this
    );
  }
  add(e) {
    return (
      (this.x += e.x), (this.y += e.y), (this.z += e.z), (this.w += e.w), this
    );
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), (this.z += e), (this.w += e), this;
  }
  addVectors(e, t) {
    return (
      (this.x = e.x + t.x),
      (this.y = e.y + t.y),
      (this.z = e.z + t.z),
      (this.w = e.w + t.w),
      this
    );
  }
  addScaledVector(e, t) {
    return (
      (this.x += e.x * t),
      (this.y += e.y * t),
      (this.z += e.z * t),
      (this.w += e.w * t),
      this
    );
  }
  sub(e) {
    return (
      (this.x -= e.x), (this.y -= e.y), (this.z -= e.z), (this.w -= e.w), this
    );
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), (this.z -= e), (this.w -= e), this;
  }
  subVectors(e, t) {
    return (
      (this.x = e.x - t.x),
      (this.y = e.y - t.y),
      (this.z = e.z - t.z),
      (this.w = e.w - t.w),
      this
    );
  }
  multiply(e) {
    return (
      (this.x *= e.x), (this.y *= e.y), (this.z *= e.z), (this.w *= e.w), this
    );
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), (this.z *= e), (this.w *= e), this;
  }
  applyMatrix4(e) {
    const t = this.x,
      n = this.y,
      r = this.z,
      i = this.w,
      a = e.elements;
    return (
      (this.x = a[0] * t + a[4] * n + a[8] * r + a[12] * i),
      (this.y = a[1] * t + a[5] * n + a[9] * r + a[13] * i),
      (this.z = a[2] * t + a[6] * n + a[10] * r + a[14] * i),
      (this.w = a[3] * t + a[7] * n + a[11] * r + a[15] * i),
      this
    );
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  setAxisAngleFromQuaternion(e) {
    this.w = 2 * Math.acos(e.w);
    const t = Math.sqrt(1 - e.w * e.w);
    return (
      t < 1e-4
        ? ((this.x = 1), (this.y = 0), (this.z = 0))
        : ((this.x = e.x / t), (this.y = e.y / t), (this.z = e.z / t)),
      this
    );
  }
  setAxisAngleFromRotationMatrix(e) {
    let t, n, r, i;
    const a = e.elements,
      o = a[0],
      s = a[4],
      l = a[8],
      c = a[1],
      u = a[5],
      d = a[9],
      h = a[2],
      f = a[6],
      p = a[10];
    if (
      Math.abs(s - c) < 0.01 &&
      Math.abs(l - h) < 0.01 &&
      Math.abs(d - f) < 0.01
    ) {
      if (
        Math.abs(s + c) < 0.1 &&
        Math.abs(l + h) < 0.1 &&
        Math.abs(d + f) < 0.1 &&
        Math.abs(o + u + p - 3) < 0.1
      )
        return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const e = (o + 1) / 2,
        a = (u + 1) / 2,
        m = (p + 1) / 2,
        g = (s + c) / 4,
        v = (l + h) / 4,
        _ = (d + f) / 4;
      return (
        e > a && e > m
          ? e < 0.01
            ? ((n = 0), (r = 0.707106781), (i = 0.707106781))
            : ((n = Math.sqrt(e)), (r = g / n), (i = v / n))
          : a > m
          ? a < 0.01
            ? ((n = 0.707106781), (r = 0), (i = 0.707106781))
            : ((r = Math.sqrt(a)), (n = g / r), (i = _ / r))
          : m < 0.01
          ? ((n = 0.707106781), (r = 0.707106781), (i = 0))
          : ((i = Math.sqrt(m)), (n = v / i), (r = _ / i)),
        this.set(n, r, i, t),
        this
      );
    }
    let m = Math.sqrt(
      (f - d) * (f - d) + (l - h) * (l - h) + (c - s) * (c - s)
    );
    return (
      Math.abs(m) < 0.001 && (m = 1),
      (this.x = (f - d) / m),
      (this.y = (l - h) / m),
      (this.z = (c - s) / m),
      (this.w = Math.acos((o + u + p - 1) / 2)),
      this
    );
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return (
      (this.x = t[12]),
      (this.y = t[13]),
      (this.z = t[14]),
      (this.w = t[15]),
      this
    );
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)),
      (this.y = Math.min(this.y, e.y)),
      (this.z = Math.min(this.z, e.z)),
      (this.w = Math.min(this.w, e.w)),
      this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)),
      (this.y = Math.max(this.y, e.y)),
      (this.z = Math.max(this.z, e.z)),
      (this.w = Math.max(this.w, e.w)),
      this
    );
  }
  clamp(e, t) {
    return (
      (this.x = Math.max(e.x, Math.min(t.x, this.x))),
      (this.y = Math.max(e.y, Math.min(t.y, this.y))),
      (this.z = Math.max(e.z, Math.min(t.z, this.z))),
      (this.w = Math.max(e.w, Math.min(t.w, this.w))),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = Math.max(e, Math.min(t, this.x))),
      (this.y = Math.max(e, Math.min(t, this.y))),
      (this.z = Math.max(e, Math.min(t, this.z))),
      (this.w = Math.max(e, Math.min(t, this.w))),
      this
    );
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(
      Math.max(e, Math.min(t, n))
    );
  }
  floor() {
    return (
      (this.x = Math.floor(this.x)),
      (this.y = Math.floor(this.y)),
      (this.z = Math.floor(this.z)),
      (this.w = Math.floor(this.w)),
      this
    );
  }
  ceil() {
    return (
      (this.x = Math.ceil(this.x)),
      (this.y = Math.ceil(this.y)),
      (this.z = Math.ceil(this.z)),
      (this.w = Math.ceil(this.w)),
      this
    );
  }
  round() {
    return (
      (this.x = Math.round(this.x)),
      (this.y = Math.round(this.y)),
      (this.z = Math.round(this.z)),
      (this.w = Math.round(this.w)),
      this
    );
  }
  roundToZero() {
    return (
      (this.x = Math.trunc(this.x)),
      (this.y = Math.trunc(this.y)),
      (this.z = Math.trunc(this.z)),
      (this.w = Math.trunc(this.w)),
      this
    );
  }
  negate() {
    return (
      (this.x = -this.x),
      (this.y = -this.y),
      (this.z = -this.z),
      (this.w = -this.w),
      this
    );
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
  }
  lengthSq() {
    return (
      this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    );
  }
  length() {
    return Math.sqrt(
      this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    );
  }
  manhattanLength() {
    return (
      Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
    );
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (
      (this.x += (e.x - this.x) * t),
      (this.y += (e.y - this.y) * t),
      (this.z += (e.z - this.z) * t),
      (this.w += (e.w - this.w) * t),
      this
    );
  }
  lerpVectors(e, t, n) {
    return (
      (this.x = e.x + (t.x - e.x) * n),
      (this.y = e.y + (t.y - e.y) * n),
      (this.z = e.z + (t.z - e.z) * n),
      (this.w = e.w + (t.w - e.w) * n),
      this
    );
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  }
  fromArray(e, t = 0) {
    return (
      (this.x = e[t]),
      (this.y = e[t + 1]),
      (this.z = e[t + 2]),
      (this.w = e[t + 3]),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this.x),
      (e[t + 1] = this.y),
      (e[t + 2] = this.z),
      (e[t + 3] = this.w),
      e
    );
  }
  fromBufferAttribute(e, t) {
    return (
      (this.x = e.getX(t)),
      (this.y = e.getY(t)),
      (this.z = e.getZ(t)),
      (this.w = e.getW(t)),
      this
    );
  }
  random() {
    return (
      (this.x = Math.random()),
      (this.y = Math.random()),
      (this.z = Math.random()),
      (this.w = Math.random()),
      this
    );
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class ty extends As {
  constructor(e = 1, t = 1, n = {}) {
    super(),
      (this.isRenderTarget = !0),
      (this.width = e),
      (this.height = t),
      (this.depth = 1),
      (this.scissor = new st(0, 0, e, t)),
      (this.scissorTest = !1),
      (this.viewport = new st(0, 0, e, t));
    const r = { width: e, height: t, depth: 1 };
    n = Object.assign(
      {
        generateMipmaps: !1,
        internalFormat: null,
        minFilter: Rn,
        depthBuffer: !0,
        stencilBuffer: !1,
        resolveDepthBuffer: !0,
        resolveStencilBuffer: !0,
        depthTexture: null,
        samples: 0,
        count: 1,
      },
      n
    );
    const i = new Zt(
      r,
      n.mapping,
      n.wrapS,
      n.wrapT,
      n.magFilter,
      n.minFilter,
      n.format,
      n.type,
      n.anisotropy,
      n.colorSpace
    );
    (i.flipY = !1),
      (i.generateMipmaps = n.generateMipmaps),
      (i.internalFormat = n.internalFormat),
      (this.textures = []);
    const a = n.count;
    for (let e = 0; e < a; e++)
      (this.textures[e] = i.clone()),
        (this.textures[e].isRenderTargetTexture = !0);
    (this.depthBuffer = n.depthBuffer),
      (this.stencilBuffer = n.stencilBuffer),
      (this.resolveDepthBuffer = n.resolveDepthBuffer),
      (this.resolveStencilBuffer = n.resolveStencilBuffer),
      (this.depthTexture = n.depthTexture),
      (this.samples = n.samples);
  }
  get texture() {
    return this.textures[0];
  }
  set texture(e) {
    this.textures[0] = e;
  }
  setSize(e, t, n = 1) {
    if (this.width !== e || this.height !== t || this.depth !== n) {
      (this.width = e), (this.height = t), (this.depth = n);
      for (let r = 0, i = this.textures.length; r < i; r++)
        (this.textures[r].image.width = e),
          (this.textures[r].image.height = t),
          (this.textures[r].image.depth = n);
      this.dispose();
    }
    this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    (this.width = e.width),
      (this.height = e.height),
      (this.depth = e.depth),
      this.scissor.copy(e.scissor),
      (this.scissorTest = e.scissorTest),
      this.viewport.copy(e.viewport),
      (this.textures.length = 0);
    for (let t = 0, n = e.textures.length; t < n; t++)
      (this.textures[t] = e.textures[t].clone()),
        (this.textures[t].isRenderTargetTexture = !0);
    const t = Object.assign({}, e.texture.image);
    return (
      (this.texture.source = new r_(t)),
      (this.depthBuffer = e.depthBuffer),
      (this.stencilBuffer = e.stencilBuffer),
      (this.resolveDepthBuffer = e.resolveDepthBuffer),
      (this.resolveStencilBuffer = e.resolveStencilBuffer),
      null !== e.depthTexture && (this.depthTexture = e.depthTexture.clone()),
      (this.samples = e.samples),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class yr extends ty {
  constructor(e = 1, t = 1, n = {}) {
    super(e, t, n), (this.isWebGLRenderTarget = !0);
  }
}
class s_ extends Zt {
  constructor(e = null, t = 1, n = 1, r = 1) {
    super(null),
      (this.isDataArrayTexture = !0),
      (this.image = { data: e, width: t, height: n, depth: r }),
      (this.magFilter = gn),
      (this.minFilter = gn),
      (this.wrapR = ur),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1),
      (this.layerUpdates = new Set());
  }
  addLayerUpdate(e) {
    this.layerUpdates.add(e);
  }
  clearLayerUpdates() {
    this.layerUpdates.clear();
  }
}
class ny extends Zt {
  constructor(e = null, t = 1, n = 1, r = 1) {
    super(null),
      (this.isData3DTexture = !0),
      (this.image = { data: e, width: t, height: n, depth: r }),
      (this.magFilter = gn),
      (this.minFilter = gn),
      (this.wrapR = ur),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1);
  }
}
class Co {
  constructor(e = 0, t = 0, n = 0, r = 1) {
    (this.isQuaternion = !0),
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._w = r);
  }
  static slerpFlat(e, t, n, r, i, a, o) {
    let s = n[r + 0],
      l = n[r + 1],
      c = n[r + 2],
      u = n[r + 3];
    const d = i[a + 0],
      h = i[a + 1],
      f = i[a + 2],
      p = i[a + 3];
    if (0 === o)
      return (
        (e[t + 0] = s), (e[t + 1] = l), (e[t + 2] = c), void (e[t + 3] = u)
      );
    if (1 === o)
      return (
        (e[t + 0] = d), (e[t + 1] = h), (e[t + 2] = f), void (e[t + 3] = p)
      );
    if (u !== p || s !== d || l !== h || c !== f) {
      let e = 1 - o;
      const t = s * d + l * h + c * f + u * p,
        n = t >= 0 ? 1 : -1,
        r = 1 - t * t;
      if (r > Number.EPSILON) {
        const i = Math.sqrt(r),
          a = Math.atan2(i, t * n);
        (e = Math.sin(e * a) / i), (o = Math.sin(o * a) / i);
      }
      const i = o * n;
      if (
        ((s = s * e + d * i),
        (l = l * e + h * i),
        (c = c * e + f * i),
        (u = u * e + p * i),
        e === 1 - o)
      ) {
        const e = 1 / Math.sqrt(s * s + l * l + c * c + u * u);
        (s *= e), (l *= e), (c *= e), (u *= e);
      }
    }
    (e[t] = s), (e[t + 1] = l), (e[t + 2] = c), (e[t + 3] = u);
  }
  static multiplyQuaternionsFlat(e, t, n, r, i, a) {
    const o = n[r],
      s = n[r + 1],
      l = n[r + 2],
      c = n[r + 3],
      u = i[a],
      d = i[a + 1],
      h = i[a + 2],
      f = i[a + 3];
    return (
      (e[t] = o * f + c * u + s * h - l * d),
      (e[t + 1] = s * f + c * d + l * u - o * h),
      (e[t + 2] = l * f + c * h + o * d - s * u),
      (e[t + 3] = c * f - o * u - s * d - l * h),
      e
    );
  }
  get x() {
    return this._x;
  }
  set x(e) {
    (this._x = e), this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    (this._y = e), this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    (this._z = e), this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(e) {
    (this._w = e), this._onChangeCallback();
  }
  set(e, t, n, r) {
    return (
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._w = r),
      this._onChangeCallback(),
      this
    );
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(e) {
    return (
      (this._x = e.x),
      (this._y = e.y),
      (this._z = e.z),
      (this._w = e.w),
      this._onChangeCallback(),
      this
    );
  }
  setFromEuler(e, t = !0) {
    const n = e._x,
      r = e._y,
      i = e._z,
      a = e._order,
      o = Math.cos,
      s = Math.sin,
      l = o(n / 2),
      c = o(r / 2),
      u = o(i / 2),
      d = s(n / 2),
      h = s(r / 2),
      f = s(i / 2);
    switch (a) {
      case "XYZ":
        (this._x = d * c * u + l * h * f),
          (this._y = l * h * u - d * c * f),
          (this._z = l * c * f + d * h * u),
          (this._w = l * c * u - d * h * f);
        break;
      case "YXZ":
        (this._x = d * c * u + l * h * f),
          (this._y = l * h * u - d * c * f),
          (this._z = l * c * f - d * h * u),
          (this._w = l * c * u + d * h * f);
        break;
      case "ZXY":
        (this._x = d * c * u - l * h * f),
          (this._y = l * h * u + d * c * f),
          (this._z = l * c * f + d * h * u),
          (this._w = l * c * u - d * h * f);
        break;
      case "ZYX":
        (this._x = d * c * u - l * h * f),
          (this._y = l * h * u + d * c * f),
          (this._z = l * c * f - d * h * u),
          (this._w = l * c * u + d * h * f);
        break;
      case "YZX":
        (this._x = d * c * u + l * h * f),
          (this._y = l * h * u + d * c * f),
          (this._z = l * c * f - d * h * u),
          (this._w = l * c * u - d * h * f);
        break;
      case "XZY":
        (this._x = d * c * u - l * h * f),
          (this._y = l * h * u - d * c * f),
          (this._z = l * c * f + d * h * u),
          (this._w = l * c * u + d * h * f);
        break;
      default:
        console.warn(
          "THREE.Quaternion: .setFromEuler() encountered an unknown order: " + a
        );
    }
    return !0 === t && this._onChangeCallback(), this;
  }
  setFromAxisAngle(e, t) {
    const n = t / 2,
      r = Math.sin(n);
    return (
      (this._x = e.x * r),
      (this._y = e.y * r),
      (this._z = e.z * r),
      (this._w = Math.cos(n)),
      this._onChangeCallback(),
      this
    );
  }
  setFromRotationMatrix(e) {
    const t = e.elements,
      n = t[0],
      r = t[4],
      i = t[8],
      a = t[1],
      o = t[5],
      s = t[9],
      l = t[2],
      c = t[6],
      u = t[10],
      d = n + o + u;
    if (d > 0) {
      const e = 0.5 / Math.sqrt(d + 1);
      (this._w = 0.25 / e),
        (this._x = (c - s) * e),
        (this._y = (i - l) * e),
        (this._z = (a - r) * e);
    } else if (n > o && n > u) {
      const e = 2 * Math.sqrt(1 + n - o - u);
      (this._w = (c - s) / e),
        (this._x = 0.25 * e),
        (this._y = (r + a) / e),
        (this._z = (i + l) / e);
    } else if (o > u) {
      const e = 2 * Math.sqrt(1 + o - n - u);
      (this._w = (i - l) / e),
        (this._x = (r + a) / e),
        (this._y = 0.25 * e),
        (this._z = (s + c) / e);
    } else {
      const e = 2 * Math.sqrt(1 + u - n - o);
      (this._w = (a - r) / e),
        (this._x = (i + l) / e),
        (this._y = (s + c) / e),
        (this._z = 0.25 * e);
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, t) {
    let n = e.dot(t) + 1;
    return (
      n < Number.EPSILON
        ? ((n = 0),
          Math.abs(e.x) > Math.abs(e.z)
            ? ((this._x = -e.y), (this._y = e.x), (this._z = 0), (this._w = n))
            : ((this._x = 0), (this._y = -e.z), (this._z = e.y), (this._w = n)))
        : ((this._x = e.y * t.z - e.z * t.y),
          (this._y = e.z * t.x - e.x * t.z),
          (this._z = e.x * t.y - e.y * t.x),
          (this._w = n)),
      this.normalize()
    );
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(Xt(this.dot(e), -1, 1)));
  }
  rotateTowards(e, t) {
    const n = this.angleTo(e);
    if (0 === n) return this;
    const r = Math.min(1, t / n);
    return this.slerp(e, r), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return (
      (this._x *= -1),
      (this._y *= -1),
      (this._z *= -1),
      this._onChangeCallback(),
      this
    );
  }
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  lengthSq() {
    return (
      this._x * this._x +
      this._y * this._y +
      this._z * this._z +
      this._w * this._w
    );
  }
  length() {
    return Math.sqrt(
      this._x * this._x +
        this._y * this._y +
        this._z * this._z +
        this._w * this._w
    );
  }
  normalize() {
    let e = this.length();
    return (
      0 === e
        ? ((this._x = 0), (this._y = 0), (this._z = 0), (this._w = 1))
        : ((e = 1 / e),
          (this._x = this._x * e),
          (this._y = this._y * e),
          (this._z = this._z * e),
          (this._w = this._w * e)),
      this._onChangeCallback(),
      this
    );
  }
  multiply(e) {
    return this.multiplyQuaternions(this, e);
  }
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  multiplyQuaternions(e, t) {
    const n = e._x,
      r = e._y,
      i = e._z,
      a = e._w,
      o = t._x,
      s = t._y,
      l = t._z,
      c = t._w;
    return (
      (this._x = n * c + a * o + r * l - i * s),
      (this._y = r * c + a * s + i * o - n * l),
      (this._z = i * c + a * l + n * s - r * o),
      (this._w = a * c - n * o - r * s - i * l),
      this._onChangeCallback(),
      this
    );
  }
  slerp(e, t) {
    if (0 === t) return this;
    if (1 === t) return this.copy(e);
    const n = this._x,
      r = this._y,
      i = this._z,
      a = this._w;
    let o = a * e._w + n * e._x + r * e._y + i * e._z;
    if (
      (o < 0
        ? ((this._w = -e._w),
          (this._x = -e._x),
          (this._y = -e._y),
          (this._z = -e._z),
          (o = -o))
        : this.copy(e),
      o >= 1)
    )
      return (this._w = a), (this._x = n), (this._y = r), (this._z = i), this;
    const s = 1 - o * o;
    if (s <= Number.EPSILON) {
      const e = 1 - t;
      return (
        (this._w = e * a + t * this._w),
        (this._x = e * n + t * this._x),
        (this._y = e * r + t * this._y),
        (this._z = e * i + t * this._z),
        this.normalize(),
        this
      );
    }
    const l = Math.sqrt(s),
      c = Math.atan2(l, o),
      u = Math.sin((1 - t) * c) / l,
      d = Math.sin(t * c) / l;
    return (
      (this._w = a * u + this._w * d),
      (this._x = n * u + this._x * d),
      (this._y = r * u + this._y * d),
      (this._z = i * u + this._z * d),
      this._onChangeCallback(),
      this
    );
  }
  slerpQuaternions(e, t, n) {
    return this.copy(e).slerp(t, n);
  }
  random() {
    const e = 2 * Math.PI * Math.random(),
      t = 2 * Math.PI * Math.random(),
      n = Math.random(),
      r = Math.sqrt(1 - n),
      i = Math.sqrt(n);
    return this.set(
      r * Math.sin(e),
      r * Math.cos(e),
      i * Math.sin(t),
      i * Math.cos(t)
    );
  }
  equals(e) {
    return (
      e._x === this._x &&
      e._y === this._y &&
      e._z === this._z &&
      e._w === this._w
    );
  }
  fromArray(e, t = 0) {
    return (
      (this._x = e[t]),
      (this._y = e[t + 1]),
      (this._z = e[t + 2]),
      (this._w = e[t + 3]),
      this._onChangeCallback(),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this._x),
      (e[t + 1] = this._y),
      (e[t + 2] = this._z),
      (e[t + 3] = this._w),
      e
    );
  }
  fromBufferAttribute(e, t) {
    return (
      (this._x = e.getX(t)),
      (this._y = e.getY(t)),
      (this._z = e.getZ(t)),
      (this._w = e.getW(t)),
      this._onChangeCallback(),
      this
    );
  }
  toJSON() {
    return this.toArray();
  }
  _onChange(e) {
    return (this._onChangeCallback = e), this;
  }
  _onChangeCallback() {}
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class F {
  constructor(e = 0, t = 0, n = 0) {
    (F.prototype.isVector3 = !0), (this.x = e), (this.y = t), (this.z = n);
  }
  set(e, t, n) {
    return (
      void 0 === n && (n = this.z),
      (this.x = e),
      (this.y = t),
      (this.z = n),
      this
    );
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), (this.z = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setZ(e) {
    return (this.z = e), this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(e) {
    return (this.x = e.x), (this.y = e.y), (this.z = e.z), this;
  }
  add(e) {
    return (this.x += e.x), (this.y += e.y), (this.z += e.z), this;
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), (this.z += e), this;
  }
  addVectors(e, t) {
    return (
      (this.x = e.x + t.x), (this.y = e.y + t.y), (this.z = e.z + t.z), this
    );
  }
  addScaledVector(e, t) {
    return (this.x += e.x * t), (this.y += e.y * t), (this.z += e.z * t), this;
  }
  sub(e) {
    return (this.x -= e.x), (this.y -= e.y), (this.z -= e.z), this;
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), (this.z -= e), this;
  }
  subVectors(e, t) {
    return (
      (this.x = e.x - t.x), (this.y = e.y - t.y), (this.z = e.z - t.z), this
    );
  }
  multiply(e) {
    return (this.x *= e.x), (this.y *= e.y), (this.z *= e.z), this;
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), (this.z *= e), this;
  }
  multiplyVectors(e, t) {
    return (
      (this.x = e.x * t.x), (this.y = e.y * t.y), (this.z = e.z * t.z), this
    );
  }
  applyEuler(e) {
    return this.applyQuaternion(Gh.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(Gh.setFromAxisAngle(e, t));
  }
  applyMatrix3(e) {
    const t = this.x,
      n = this.y,
      r = this.z,
      i = e.elements;
    return (
      (this.x = i[0] * t + i[3] * n + i[6] * r),
      (this.y = i[1] * t + i[4] * n + i[7] * r),
      (this.z = i[2] * t + i[5] * n + i[8] * r),
      this
    );
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  applyMatrix4(e) {
    const t = this.x,
      n = this.y,
      r = this.z,
      i = e.elements,
      a = 1 / (i[3] * t + i[7] * n + i[11] * r + i[15]);
    return (
      (this.x = (i[0] * t + i[4] * n + i[8] * r + i[12]) * a),
      (this.y = (i[1] * t + i[5] * n + i[9] * r + i[13]) * a),
      (this.z = (i[2] * t + i[6] * n + i[10] * r + i[14]) * a),
      this
    );
  }
  applyQuaternion(e) {
    const t = this.x,
      n = this.y,
      r = this.z,
      i = e.x,
      a = e.y,
      o = e.z,
      s = e.w,
      l = 2 * (a * r - o * n),
      c = 2 * (o * t - i * r),
      u = 2 * (i * n - a * t);
    return (
      (this.x = t + s * l + a * u - o * c),
      (this.y = n + s * c + o * l - i * u),
      (this.z = r + s * u + i * c - a * l),
      this
    );
  }
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(
      e.projectionMatrix
    );
  }
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(
      e.matrixWorld
    );
  }
  transformDirection(e) {
    const t = this.x,
      n = this.y,
      r = this.z,
      i = e.elements;
    return (
      (this.x = i[0] * t + i[4] * n + i[8] * r),
      (this.y = i[1] * t + i[5] * n + i[9] * r),
      (this.z = i[2] * t + i[6] * n + i[10] * r),
      this.normalize()
    );
  }
  divide(e) {
    return (this.x /= e.x), (this.y /= e.y), (this.z /= e.z), this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)),
      (this.y = Math.min(this.y, e.y)),
      (this.z = Math.min(this.z, e.z)),
      this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)),
      (this.y = Math.max(this.y, e.y)),
      (this.z = Math.max(this.z, e.z)),
      this
    );
  }
  clamp(e, t) {
    return (
      (this.x = Math.max(e.x, Math.min(t.x, this.x))),
      (this.y = Math.max(e.y, Math.min(t.y, this.y))),
      (this.z = Math.max(e.z, Math.min(t.z, this.z))),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = Math.max(e, Math.min(t, this.x))),
      (this.y = Math.max(e, Math.min(t, this.y))),
      (this.z = Math.max(e, Math.min(t, this.z))),
      this
    );
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(
      Math.max(e, Math.min(t, n))
    );
  }
  floor() {
    return (
      (this.x = Math.floor(this.x)),
      (this.y = Math.floor(this.y)),
      (this.z = Math.floor(this.z)),
      this
    );
  }
  ceil() {
    return (
      (this.x = Math.ceil(this.x)),
      (this.y = Math.ceil(this.y)),
      (this.z = Math.ceil(this.z)),
      this
    );
  }
  round() {
    return (
      (this.x = Math.round(this.x)),
      (this.y = Math.round(this.y)),
      (this.z = Math.round(this.z)),
      this
    );
  }
  roundToZero() {
    return (
      (this.x = Math.trunc(this.x)),
      (this.y = Math.trunc(this.y)),
      (this.z = Math.trunc(this.z)),
      this
    );
  }
  negate() {
    return (this.x = -this.x), (this.y = -this.y), (this.z = -this.z), this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (
      (this.x += (e.x - this.x) * t),
      (this.y += (e.y - this.y) * t),
      (this.z += (e.z - this.z) * t),
      this
    );
  }
  lerpVectors(e, t, n) {
    return (
      (this.x = e.x + (t.x - e.x) * n),
      (this.y = e.y + (t.y - e.y) * n),
      (this.z = e.z + (t.z - e.z) * n),
      this
    );
  }
  cross(e) {
    return this.crossVectors(this, e);
  }
  crossVectors(e, t) {
    const n = e.x,
      r = e.y,
      i = e.z,
      a = t.x,
      o = t.y,
      s = t.z;
    return (
      (this.x = r * s - i * o),
      (this.y = i * a - n * s),
      (this.z = n * o - r * a),
      this
    );
  }
  projectOnVector(e) {
    const t = e.lengthSq();
    if (0 === t) return this.set(0, 0, 0);
    const n = e.dot(this) / t;
    return this.copy(e).multiplyScalar(n);
  }
  projectOnPlane(e) {
    return mu.copy(this).projectOnVector(e), this.sub(mu);
  }
  reflect(e) {
    return this.sub(mu.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (0 === t) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(Xt(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x,
      n = this.y - e.y,
      r = this.z - e.z;
    return t * t + n * n + r * r;
  }
  manhattanDistanceTo(e) {
    return (
      Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z)
    );
  }
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  setFromSphericalCoords(e, t, n) {
    const r = Math.sin(t) * e;
    return (
      (this.x = r * Math.sin(n)),
      (this.y = Math.cos(t) * e),
      (this.z = r * Math.cos(n)),
      this
    );
  }
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  setFromCylindricalCoords(e, t, n) {
    return (
      (this.x = e * Math.sin(t)), (this.y = n), (this.z = e * Math.cos(t)), this
    );
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return (this.x = t[12]), (this.y = t[13]), (this.z = t[14]), this;
  }
  setFromMatrixScale(e) {
    const t = this.setFromMatrixColumn(e, 0).length(),
      n = this.setFromMatrixColumn(e, 1).length(),
      r = this.setFromMatrixColumn(e, 2).length();
    return (this.x = t), (this.y = n), (this.z = r), this;
  }
  setFromMatrixColumn(e, t) {
    return this.fromArray(e.elements, 4 * t);
  }
  setFromMatrix3Column(e, t) {
    return this.fromArray(e.elements, 3 * t);
  }
  setFromEuler(e) {
    return (this.x = e._x), (this.y = e._y), (this.z = e._z), this;
  }
  setFromColor(e) {
    return (this.x = e.r), (this.y = e.g), (this.z = e.b), this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  }
  fromArray(e, t = 0) {
    return (this.x = e[t]), (this.y = e[t + 1]), (this.z = e[t + 2]), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this.x), (e[t + 1] = this.y), (e[t + 2] = this.z), e;
  }
  fromBufferAttribute(e, t) {
    return (
      (this.x = e.getX(t)), (this.y = e.getY(t)), (this.z = e.getZ(t)), this
    );
  }
  random() {
    return (
      (this.x = Math.random()),
      (this.y = Math.random()),
      (this.z = Math.random()),
      this
    );
  }
  randomDirection() {
    const e = Math.random() * Math.PI * 2,
      t = 2 * Math.random() - 1,
      n = Math.sqrt(1 - t * t);
    return (
      (this.x = n * Math.cos(e)), (this.y = t), (this.z = n * Math.sin(e)), this
    );
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const mu = new F(),
  Gh = new Co();
class Ro {
  constructor(
    e = new F(1 / 0, 1 / 0, 1 / 0),
    t = new F(-1 / 0, -1 / 0, -1 / 0)
  ) {
    (this.isBox3 = !0), (this.min = e), (this.max = t);
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t += 3)
      this.expandByPoint(Mn.fromArray(e, t));
    return this;
  }
  setFromBufferAttribute(e) {
    this.makeEmpty();
    for (let t = 0, n = e.count; t < n; t++)
      this.expandByPoint(Mn.fromBufferAttribute(e, t));
    return this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++) this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const n = Mn.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
  }
  setFromObject(e, t = !1) {
    return this.makeEmpty(), this.expandByObject(e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  makeEmpty() {
    return (
      (this.min.x = this.min.y = this.min.z = 1 / 0),
      (this.max.x = this.max.y = this.max.z = -1 / 0),
      this
    );
  }
  isEmpty() {
    return (
      this.max.x < this.min.x ||
      this.max.y < this.min.y ||
      this.max.z < this.min.z
    );
  }
  getCenter(e) {
    return this.isEmpty()
      ? e.set(0, 0, 0)
      : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
  }
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  }
  expandByObject(e, t = !1) {
    e.updateWorldMatrix(!1, !1);
    const n = e.geometry;
    if (void 0 !== n) {
      const r = n.getAttribute("position");
      if (!0 === t && void 0 !== r && !0 !== e.isInstancedMesh)
        for (let t = 0, n = r.count; t < n; t++)
          !0 === e.isMesh
            ? e.getVertexPosition(t, Mn)
            : Mn.fromBufferAttribute(r, t),
            Mn.applyMatrix4(e.matrixWorld),
            this.expandByPoint(Mn);
      else
        void 0 !== e.boundingBox
          ? (null === e.boundingBox && e.computeBoundingBox(),
            Zo.copy(e.boundingBox))
          : (null === n.boundingBox && n.computeBoundingBox(),
            Zo.copy(n.boundingBox)),
          Zo.applyMatrix4(e.matrixWorld),
          this.union(Zo);
    }
    const r = e.children;
    for (let e = 0, n = r.length; e < n; e++) this.expandByObject(r[e], t);
    return this;
  }
  containsPoint(e) {
    return !(
      e.x < this.min.x ||
      e.x > this.max.x ||
      e.y < this.min.y ||
      e.y > this.max.y ||
      e.z < this.min.z ||
      e.z > this.max.z
    );
  }
  containsBox(e) {
    return (
      this.min.x <= e.min.x &&
      e.max.x <= this.max.x &&
      this.min.y <= e.min.y &&
      e.max.y <= this.max.y &&
      this.min.z <= e.min.z &&
      e.max.z <= this.max.z
    );
  }
  getParameter(e, t) {
    return t.set(
      (e.x - this.min.x) / (this.max.x - this.min.x),
      (e.y - this.min.y) / (this.max.y - this.min.y),
      (e.z - this.min.z) / (this.max.z - this.min.z)
    );
  }
  intersectsBox(e) {
    return !(
      e.max.x < this.min.x ||
      e.min.x > this.max.x ||
      e.max.y < this.min.y ||
      e.min.y > this.max.y ||
      e.max.z < this.min.z ||
      e.min.z > this.max.z
    );
  }
  intersectsSphere(e) {
    return (
      this.clampPoint(e.center, Mn),
      Mn.distanceToSquared(e.center) <= e.radius * e.radius
    );
  }
  intersectsPlane(e) {
    let t, n;
    return (
      e.normal.x > 0
        ? ((t = e.normal.x * this.min.x), (n = e.normal.x * this.max.x))
        : ((t = e.normal.x * this.max.x), (n = e.normal.x * this.min.x)),
      e.normal.y > 0
        ? ((t += e.normal.y * this.min.y), (n += e.normal.y * this.max.y))
        : ((t += e.normal.y * this.max.y), (n += e.normal.y * this.min.y)),
      e.normal.z > 0
        ? ((t += e.normal.z * this.min.z), (n += e.normal.z * this.max.z))
        : ((t += e.normal.z * this.max.z), (n += e.normal.z * this.min.z)),
      t <= -e.constant && n >= -e.constant
    );
  }
  intersectsTriangle(e) {
    if (this.isEmpty()) return !1;
    this.getCenter(Os),
      Qo.subVectors(this.max, Os),
      Cr.subVectors(e.a, Os),
      Rr.subVectors(e.b, Os),
      Pr.subVectors(e.c, Os),
      gi.subVectors(Rr, Cr),
      _i.subVectors(Pr, Rr),
      $i.subVectors(Cr, Pr);
    let t = [
      0,
      -gi.z,
      gi.y,
      0,
      -_i.z,
      _i.y,
      0,
      -$i.z,
      $i.y,
      gi.z,
      0,
      -gi.x,
      _i.z,
      0,
      -_i.x,
      $i.z,
      0,
      -$i.x,
      -gi.y,
      gi.x,
      0,
      -_i.y,
      _i.x,
      0,
      -$i.y,
      $i.x,
      0,
    ];
    return (
      !(
        !gu(t, Cr, Rr, Pr, Qo) ||
        ((t = [1, 0, 0, 0, 1, 0, 0, 0, 1]), !gu(t, Cr, Rr, Pr, Qo))
      ) &&
      (Jo.crossVectors(gi, _i), (t = [Jo.x, Jo.y, Jo.z]), gu(t, Cr, Rr, Pr, Qo))
    );
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return this.clampPoint(e, Mn).distanceTo(e);
  }
  getBoundingSphere(e) {
    return (
      this.isEmpty()
        ? e.makeEmpty()
        : (this.getCenter(e.center),
          (e.radius = 0.5 * this.getSize(Mn).length())),
      e
    );
  }
  intersect(e) {
    return (
      this.min.max(e.min),
      this.max.min(e.max),
      this.isEmpty() && this.makeEmpty(),
      this
    );
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return (
      this.isEmpty() ||
        (Yn[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e),
        Yn[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e),
        Yn[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e),
        Yn[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e),
        Yn[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e),
        Yn[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e),
        Yn[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e),
        Yn[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e),
        this.setFromPoints(Yn)),
      this
    );
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
const Yn = [
    new F(),
    new F(),
    new F(),
    new F(),
    new F(),
    new F(),
    new F(),
    new F(),
  ],
  Mn = new F(),
  Zo = new Ro(),
  Cr = new F(),
  Rr = new F(),
  Pr = new F(),
  gi = new F(),
  _i = new F(),
  $i = new F(),
  Os = new F(),
  Qo = new F(),
  Jo = new F(),
  ji = new F();
function gu(e, t, n, r, i) {
  for (let a = 0, o = e.length - 3; a <= o; a += 3) {
    ji.fromArray(e, a);
    const o =
        i.x * Math.abs(ji.x) + i.y * Math.abs(ji.y) + i.z * Math.abs(ji.z),
      s = t.dot(ji),
      l = n.dot(ji),
      c = r.dot(ji);
    if (Math.max(-Math.max(s, l, c), Math.min(s, l, c)) > o) return !1;
  }
  return !0;
}
const iy = new Ro(),
  zs = new F(),
  _u = new F();
class hd {
  constructor(e = new F(), t = -1) {
    (this.isSphere = !0), (this.center = e), (this.radius = t);
  }
  set(e, t) {
    return this.center.copy(e), (this.radius = t), this;
  }
  setFromPoints(e, t) {
    const n = this.center;
    void 0 !== t ? n.copy(t) : iy.setFromPoints(e).getCenter(n);
    let r = 0;
    for (let t = 0, i = e.length; t < i; t++)
      r = Math.max(r, n.distanceToSquared(e[t]));
    return (this.radius = Math.sqrt(r)), this;
  }
  copy(e) {
    return this.center.copy(e.center), (this.radius = e.radius), this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), (this.radius = -1), this;
  }
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(e) {
    const t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  }
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(e, t) {
    const n = this.center.distanceToSquared(e);
    return (
      t.copy(e),
      n > this.radius * this.radius &&
        (t.sub(this.center).normalize(),
        t.multiplyScalar(this.radius).add(this.center)),
      t
    );
  }
  getBoundingBox(e) {
    return this.isEmpty()
      ? (e.makeEmpty(), e)
      : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
  }
  applyMatrix4(e) {
    return (
      this.center.applyMatrix4(e),
      (this.radius = this.radius * e.getMaxScaleOnAxis()),
      this
    );
  }
  translate(e) {
    return this.center.add(e), this;
  }
  expandByPoint(e) {
    if (this.isEmpty()) return this.center.copy(e), (this.radius = 0), this;
    zs.subVectors(e, this.center);
    const t = zs.lengthSq();
    if (t > this.radius * this.radius) {
      const e = Math.sqrt(t),
        n = 0.5 * (e - this.radius);
      this.center.addScaledVector(zs, n / e), (this.radius += n);
    }
    return this;
  }
  union(e) {
    return e.isEmpty()
      ? this
      : this.isEmpty()
      ? (this.copy(e), this)
      : (!0 === this.center.equals(e.center)
          ? (this.radius = Math.max(this.radius, e.radius))
          : (_u.subVectors(e.center, this.center).setLength(e.radius),
            this.expandByPoint(zs.copy(e.center).add(_u)),
            this.expandByPoint(zs.copy(e.center).sub(_u))),
        this);
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const qn = new F(),
  vu = new F(),
  ea = new F(),
  vi = new F(),
  xu = new F(),
  ta = new F(),
  yu = new F();
class ry {
  constructor(e = new F(), t = new F(0, 0, -1)) {
    (this.origin = e), (this.direction = t);
  }
  set(e, t) {
    return this.origin.copy(e), this.direction.copy(t), this;
  }
  copy(e) {
    return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
  }
  at(e, t) {
    return t.copy(this.origin).addScaledVector(this.direction, e);
  }
  lookAt(e) {
    return this.direction.copy(e).sub(this.origin).normalize(), this;
  }
  recast(e) {
    return this.origin.copy(this.at(e, qn)), this;
  }
  closestPointToPoint(e, t) {
    t.subVectors(e, this.origin);
    const n = t.dot(this.direction);
    return n < 0
      ? t.copy(this.origin)
      : t.copy(this.origin).addScaledVector(this.direction, n);
  }
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  distanceSqToPoint(e) {
    const t = qn.subVectors(e, this.origin).dot(this.direction);
    return t < 0
      ? this.origin.distanceToSquared(e)
      : (qn.copy(this.origin).addScaledVector(this.direction, t),
        qn.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, n, r) {
    vu.copy(e).add(t).multiplyScalar(0.5),
      ea.copy(t).sub(e).normalize(),
      vi.copy(this.origin).sub(vu);
    const i = 0.5 * e.distanceTo(t),
      a = -this.direction.dot(ea),
      o = vi.dot(this.direction),
      s = -vi.dot(ea),
      l = vi.lengthSq(),
      c = Math.abs(1 - a * a);
    let u, d, h, f;
    if (c > 0)
      if (((u = a * s - o), (d = a * o - s), (f = i * c), u >= 0))
        if (d >= -f)
          if (d <= f) {
            const e = 1 / c;
            (u *= e),
              (d *= e),
              (h = u * (u + a * d + 2 * o) + d * (a * u + d + 2 * s) + l);
          } else
            (d = i),
              (u = Math.max(0, -(a * d + o))),
              (h = -u * u + d * (d + 2 * s) + l);
        else
          (d = -i),
            (u = Math.max(0, -(a * d + o))),
            (h = -u * u + d * (d + 2 * s) + l);
      else
        d <= -f
          ? ((u = Math.max(0, -(-a * i + o))),
            (d = u > 0 ? -i : Math.min(Math.max(-i, -s), i)),
            (h = -u * u + d * (d + 2 * s) + l))
          : d <= f
          ? ((u = 0),
            (d = Math.min(Math.max(-i, -s), i)),
            (h = d * (d + 2 * s) + l))
          : ((u = Math.max(0, -(a * i + o))),
            (d = u > 0 ? i : Math.min(Math.max(-i, -s), i)),
            (h = -u * u + d * (d + 2 * s) + l));
    else
      (d = a > 0 ? -i : i),
        (u = Math.max(0, -(a * d + o))),
        (h = -u * u + d * (d + 2 * s) + l);
    return (
      n && n.copy(this.origin).addScaledVector(this.direction, u),
      r && r.copy(vu).addScaledVector(ea, d),
      h
    );
  }
  intersectSphere(e, t) {
    qn.subVectors(e.center, this.origin);
    const n = qn.dot(this.direction),
      r = qn.dot(qn) - n * n,
      i = e.radius * e.radius;
    if (r > i) return null;
    const a = Math.sqrt(i - r),
      o = n - a,
      s = n + a;
    return s < 0 ? null : o < 0 ? this.at(s, t) : this.at(o, t);
  }
  intersectsSphere(e) {
    return this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  distanceToPlane(e) {
    const t = e.normal.dot(this.direction);
    if (0 === t) return 0 === e.distanceToPoint(this.origin) ? 0 : null;
    const n = -(this.origin.dot(e.normal) + e.constant) / t;
    return n >= 0 ? n : null;
  }
  intersectPlane(e, t) {
    const n = this.distanceToPlane(e);
    return null === n ? null : this.at(n, t);
  }
  intersectsPlane(e) {
    const t = e.distanceToPoint(this.origin);
    return 0 === t || e.normal.dot(this.direction) * t < 0;
  }
  intersectBox(e, t) {
    let n, r, i, a, o, s;
    const l = 1 / this.direction.x,
      c = 1 / this.direction.y,
      u = 1 / this.direction.z,
      d = this.origin;
    return (
      l >= 0
        ? ((n = (e.min.x - d.x) * l), (r = (e.max.x - d.x) * l))
        : ((n = (e.max.x - d.x) * l), (r = (e.min.x - d.x) * l)),
      c >= 0
        ? ((i = (e.min.y - d.y) * c), (a = (e.max.y - d.y) * c))
        : ((i = (e.max.y - d.y) * c), (a = (e.min.y - d.y) * c)),
      n > a ||
      i > r ||
      ((i > n || isNaN(n)) && (n = i),
      (a < r || isNaN(r)) && (r = a),
      u >= 0
        ? ((o = (e.min.z - d.z) * u), (s = (e.max.z - d.z) * u))
        : ((o = (e.max.z - d.z) * u), (s = (e.min.z - d.z) * u)),
      n > s || o > r) ||
      ((o > n || n != n) && (n = o), (s < r || r != r) && (r = s), r < 0)
        ? null
        : this.at(n >= 0 ? n : r, t)
    );
  }
  intersectsBox(e) {
    return null !== this.intersectBox(e, qn);
  }
  intersectTriangle(e, t, n, r, i) {
    xu.subVectors(t, e), ta.subVectors(n, e), yu.crossVectors(xu, ta);
    let a,
      o = this.direction.dot(yu);
    if (o > 0) {
      if (r) return null;
      a = 1;
    } else {
      if (!(o < 0)) return null;
      (a = -1), (o = -o);
    }
    vi.subVectors(this.origin, e);
    const s = a * this.direction.dot(ta.crossVectors(vi, ta));
    if (s < 0) return null;
    const l = a * this.direction.dot(xu.cross(vi));
    if (l < 0 || s + l > o) return null;
    const c = -a * vi.dot(yu);
    return c < 0 ? null : this.at(c / o, i);
  }
  applyMatrix4(e) {
    return (
      this.origin.applyMatrix4(e), this.direction.transformDirection(e), this
    );
  }
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class St {
  constructor(e, t, n, r, i, a, o, s, l, c, u, d, h, f, p, m) {
    (St.prototype.isMatrix4 = !0),
      (this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]),
      void 0 !== e && this.set(e, t, n, r, i, a, o, s, l, c, u, d, h, f, p, m);
  }
  set(e, t, n, r, i, a, o, s, l, c, u, d, h, f, p, m) {
    const g = this.elements;
    return (
      (g[0] = e),
      (g[4] = t),
      (g[8] = n),
      (g[12] = r),
      (g[1] = i),
      (g[5] = a),
      (g[9] = o),
      (g[13] = s),
      (g[2] = l),
      (g[6] = c),
      (g[10] = u),
      (g[14] = d),
      (g[3] = h),
      (g[7] = f),
      (g[11] = p),
      (g[15] = m),
      this
    );
  }
  identity() {
    return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  clone() {
    return new St().fromArray(this.elements);
  }
  copy(e) {
    const t = this.elements,
      n = e.elements;
    return (
      (t[0] = n[0]),
      (t[1] = n[1]),
      (t[2] = n[2]),
      (t[3] = n[3]),
      (t[4] = n[4]),
      (t[5] = n[5]),
      (t[6] = n[6]),
      (t[7] = n[7]),
      (t[8] = n[8]),
      (t[9] = n[9]),
      (t[10] = n[10]),
      (t[11] = n[11]),
      (t[12] = n[12]),
      (t[13] = n[13]),
      (t[14] = n[14]),
      (t[15] = n[15]),
      this
    );
  }
  copyPosition(e) {
    const t = this.elements,
      n = e.elements;
    return (t[12] = n[12]), (t[13] = n[13]), (t[14] = n[14]), this;
  }
  setFromMatrix3(e) {
    const t = e.elements;
    return (
      this.set(
        t[0],
        t[3],
        t[6],
        0,
        t[1],
        t[4],
        t[7],
        0,
        t[2],
        t[5],
        t[8],
        0,
        0,
        0,
        0,
        1
      ),
      this
    );
  }
  extractBasis(e, t, n) {
    return (
      e.setFromMatrixColumn(this, 0),
      t.setFromMatrixColumn(this, 1),
      n.setFromMatrixColumn(this, 2),
      this
    );
  }
  makeBasis(e, t, n) {
    return (
      this.set(
        e.x,
        t.x,
        n.x,
        0,
        e.y,
        t.y,
        n.y,
        0,
        e.z,
        t.z,
        n.z,
        0,
        0,
        0,
        0,
        1
      ),
      this
    );
  }
  extractRotation(e) {
    const t = this.elements,
      n = e.elements,
      r = 1 / Lr.setFromMatrixColumn(e, 0).length(),
      i = 1 / Lr.setFromMatrixColumn(e, 1).length(),
      a = 1 / Lr.setFromMatrixColumn(e, 2).length();
    return (
      (t[0] = n[0] * r),
      (t[1] = n[1] * r),
      (t[2] = n[2] * r),
      (t[3] = 0),
      (t[4] = n[4] * i),
      (t[5] = n[5] * i),
      (t[6] = n[6] * i),
      (t[7] = 0),
      (t[8] = n[8] * a),
      (t[9] = n[9] * a),
      (t[10] = n[10] * a),
      (t[11] = 0),
      (t[12] = 0),
      (t[13] = 0),
      (t[14] = 0),
      (t[15] = 1),
      this
    );
  }
  makeRotationFromEuler(e) {
    const t = this.elements,
      n = e.x,
      r = e.y,
      i = e.z,
      a = Math.cos(n),
      o = Math.sin(n),
      s = Math.cos(r),
      l = Math.sin(r),
      c = Math.cos(i),
      u = Math.sin(i);
    if ("XYZ" === e.order) {
      const e = a * c,
        n = a * u,
        r = o * c,
        i = o * u;
      (t[0] = s * c),
        (t[4] = -s * u),
        (t[8] = l),
        (t[1] = n + r * l),
        (t[5] = e - i * l),
        (t[9] = -o * s),
        (t[2] = i - e * l),
        (t[6] = r + n * l),
        (t[10] = a * s);
    } else if ("YXZ" === e.order) {
      const e = s * c,
        n = s * u,
        r = l * c,
        i = l * u;
      (t[0] = e + i * o),
        (t[4] = r * o - n),
        (t[8] = a * l),
        (t[1] = a * u),
        (t[5] = a * c),
        (t[9] = -o),
        (t[2] = n * o - r),
        (t[6] = i + e * o),
        (t[10] = a * s);
    } else if ("ZXY" === e.order) {
      const e = s * c,
        n = s * u,
        r = l * c,
        i = l * u;
      (t[0] = e - i * o),
        (t[4] = -a * u),
        (t[8] = r + n * o),
        (t[1] = n + r * o),
        (t[5] = a * c),
        (t[9] = i - e * o),
        (t[2] = -a * l),
        (t[6] = o),
        (t[10] = a * s);
    } else if ("ZYX" === e.order) {
      const e = a * c,
        n = a * u,
        r = o * c,
        i = o * u;
      (t[0] = s * c),
        (t[4] = r * l - n),
        (t[8] = e * l + i),
        (t[1] = s * u),
        (t[5] = i * l + e),
        (t[9] = n * l - r),
        (t[2] = -l),
        (t[6] = o * s),
        (t[10] = a * s);
    } else if ("YZX" === e.order) {
      const e = a * s,
        n = a * l,
        r = o * s,
        i = o * l;
      (t[0] = s * c),
        (t[4] = i - e * u),
        (t[8] = r * u + n),
        (t[1] = u),
        (t[5] = a * c),
        (t[9] = -o * c),
        (t[2] = -l * c),
        (t[6] = n * u + r),
        (t[10] = e - i * u);
    } else if ("XZY" === e.order) {
      const e = a * s,
        n = a * l,
        r = o * s,
        i = o * l;
      (t[0] = s * c),
        (t[4] = -u),
        (t[8] = l * c),
        (t[1] = e * u + i),
        (t[5] = a * c),
        (t[9] = n * u - r),
        (t[2] = r * u - n),
        (t[6] = o * c),
        (t[10] = i * u + e);
    }
    return (
      (t[3] = 0),
      (t[7] = 0),
      (t[11] = 0),
      (t[12] = 0),
      (t[13] = 0),
      (t[14] = 0),
      (t[15] = 1),
      this
    );
  }
  makeRotationFromQuaternion(e) {
    return this.compose(sy, e, oy);
  }
  lookAt(e, t, n) {
    const r = this.elements;
    return (
      en.subVectors(e, t),
      0 === en.lengthSq() && (en.z = 1),
      en.normalize(),
      xi.crossVectors(n, en),
      0 === xi.lengthSq() &&
        (1 === Math.abs(n.z) ? (en.x += 1e-4) : (en.z += 1e-4),
        en.normalize(),
        xi.crossVectors(n, en)),
      xi.normalize(),
      na.crossVectors(en, xi),
      (r[0] = xi.x),
      (r[4] = na.x),
      (r[8] = en.x),
      (r[1] = xi.y),
      (r[5] = na.y),
      (r[9] = en.y),
      (r[2] = xi.z),
      (r[6] = na.z),
      (r[10] = en.z),
      this
    );
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements,
      r = t.elements,
      i = this.elements,
      a = n[0],
      o = n[4],
      s = n[8],
      l = n[12],
      c = n[1],
      u = n[5],
      d = n[9],
      h = n[13],
      f = n[2],
      p = n[6],
      m = n[10],
      g = n[14],
      v = n[3],
      _ = n[7],
      x = n[11],
      y = n[15],
      S = r[0],
      M = r[4],
      E = r[8],
      b = r[12],
      T = r[1],
      w = r[5],
      A = r[9],
      R = r[13],
      C = r[2],
      P = r[6],
      L = r[10],
      U = r[14],
      D = r[3],
      N = r[7],
      I = r[11],
      F = r[15];
    return (
      (i[0] = a * S + o * T + s * C + l * D),
      (i[4] = a * M + o * w + s * P + l * N),
      (i[8] = a * E + o * A + s * L + l * I),
      (i[12] = a * b + o * R + s * U + l * F),
      (i[1] = c * S + u * T + d * C + h * D),
      (i[5] = c * M + u * w + d * P + h * N),
      (i[9] = c * E + u * A + d * L + h * I),
      (i[13] = c * b + u * R + d * U + h * F),
      (i[2] = f * S + p * T + m * C + g * D),
      (i[6] = f * M + p * w + m * P + g * N),
      (i[10] = f * E + p * A + m * L + g * I),
      (i[14] = f * b + p * R + m * U + g * F),
      (i[3] = v * S + _ * T + x * C + y * D),
      (i[7] = v * M + _ * w + x * P + y * N),
      (i[11] = v * E + _ * A + x * L + y * I),
      (i[15] = v * b + _ * R + x * U + y * F),
      this
    );
  }
  multiplyScalar(e) {
    const t = this.elements;
    return (
      (t[0] *= e),
      (t[4] *= e),
      (t[8] *= e),
      (t[12] *= e),
      (t[1] *= e),
      (t[5] *= e),
      (t[9] *= e),
      (t[13] *= e),
      (t[2] *= e),
      (t[6] *= e),
      (t[10] *= e),
      (t[14] *= e),
      (t[3] *= e),
      (t[7] *= e),
      (t[11] *= e),
      (t[15] *= e),
      this
    );
  }
  determinant() {
    const e = this.elements,
      t = e[0],
      n = e[4],
      r = e[8],
      i = e[12],
      a = e[1],
      o = e[5],
      s = e[9],
      l = e[13],
      c = e[2],
      u = e[6],
      d = e[10],
      h = e[14];
    return (
      e[3] *
        (+i * s * u -
          r * l * u -
          i * o * d +
          n * l * d +
          r * o * h -
          n * s * h) +
      e[7] *
        (+t * s * h -
          t * l * d +
          i * a * d -
          r * a * h +
          r * l * c -
          i * s * c) +
      e[11] *
        (+t * l * u -
          t * o * h -
          i * a * u +
          n * a * h +
          i * o * c -
          n * l * c) +
      e[15] *
        (-r * o * c - t * s * u + t * o * d + r * a * u - n * a * d + n * s * c)
    );
  }
  transpose() {
    const e = this.elements;
    let t;
    return (
      (t = e[1]),
      (e[1] = e[4]),
      (e[4] = t),
      (t = e[2]),
      (e[2] = e[8]),
      (e[8] = t),
      (t = e[6]),
      (e[6] = e[9]),
      (e[9] = t),
      (t = e[3]),
      (e[3] = e[12]),
      (e[12] = t),
      (t = e[7]),
      (e[7] = e[13]),
      (e[13] = t),
      (t = e[11]),
      (e[11] = e[14]),
      (e[14] = t),
      this
    );
  }
  setPosition(e, t, n) {
    const r = this.elements;
    return (
      e.isVector3
        ? ((r[12] = e.x), (r[13] = e.y), (r[14] = e.z))
        : ((r[12] = e), (r[13] = t), (r[14] = n)),
      this
    );
  }
  invert() {
    const e = this.elements,
      t = e[0],
      n = e[1],
      r = e[2],
      i = e[3],
      a = e[4],
      o = e[5],
      s = e[6],
      l = e[7],
      c = e[8],
      u = e[9],
      d = e[10],
      h = e[11],
      f = e[12],
      p = e[13],
      m = e[14],
      g = e[15],
      v = u * m * l - p * d * l + p * s * h - o * m * h - u * s * g + o * d * g,
      _ = f * d * l - c * m * l - f * s * h + a * m * h + c * s * g - a * d * g,
      x = c * p * l - f * u * l + f * o * h - a * p * h - c * o * g + a * u * g,
      y = f * u * s - c * p * s - f * o * d + a * p * d + c * o * m - a * u * m,
      S = t * v + n * _ + r * x + i * y;
    if (0 === S)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const M = 1 / S;
    return (
      (e[0] = v * M),
      (e[1] =
        (p * d * i -
          u * m * i -
          p * r * h +
          n * m * h +
          u * r * g -
          n * d * g) *
        M),
      (e[2] =
        (o * m * i -
          p * s * i +
          p * r * l -
          n * m * l -
          o * r * g +
          n * s * g) *
        M),
      (e[3] =
        (u * s * i -
          o * d * i -
          u * r * l +
          n * d * l +
          o * r * h -
          n * s * h) *
        M),
      (e[4] = _ * M),
      (e[5] =
        (c * m * i -
          f * d * i +
          f * r * h -
          t * m * h -
          c * r * g +
          t * d * g) *
        M),
      (e[6] =
        (f * s * i -
          a * m * i -
          f * r * l +
          t * m * l +
          a * r * g -
          t * s * g) *
        M),
      (e[7] =
        (a * d * i -
          c * s * i +
          c * r * l -
          t * d * l -
          a * r * h +
          t * s * h) *
        M),
      (e[8] = x * M),
      (e[9] =
        (f * u * i -
          c * p * i -
          f * n * h +
          t * p * h +
          c * n * g -
          t * u * g) *
        M),
      (e[10] =
        (a * p * i -
          f * o * i +
          f * n * l -
          t * p * l -
          a * n * g +
          t * o * g) *
        M),
      (e[11] =
        (c * o * i -
          a * u * i -
          c * n * l +
          t * u * l +
          a * n * h -
          t * o * h) *
        M),
      (e[12] = y * M),
      (e[13] =
        (c * p * r -
          f * u * r +
          f * n * d -
          t * p * d -
          c * n * m +
          t * u * m) *
        M),
      (e[14] =
        (f * o * r -
          a * p * r -
          f * n * s +
          t * p * s +
          a * n * m -
          t * o * m) *
        M),
      (e[15] =
        (a * u * r -
          c * o * r +
          c * n * s -
          t * u * s -
          a * n * d +
          t * o * d) *
        M),
      this
    );
  }
  scale(e) {
    const t = this.elements,
      n = e.x,
      r = e.y,
      i = e.z;
    return (
      (t[0] *= n),
      (t[4] *= r),
      (t[8] *= i),
      (t[1] *= n),
      (t[5] *= r),
      (t[9] *= i),
      (t[2] *= n),
      (t[6] *= r),
      (t[10] *= i),
      (t[3] *= n),
      (t[7] *= r),
      (t[11] *= i),
      this
    );
  }
  getMaxScaleOnAxis() {
    const e = this.elements,
      t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2],
      n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6],
      r = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, n, r));
  }
  makeTranslation(e, t, n) {
    return (
      e.isVector3
        ? this.set(1, 0, 0, e.x, 0, 1, 0, e.y, 0, 0, 1, e.z, 0, 0, 0, 1)
        : this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1),
      this
    );
  }
  makeRotationX(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1), this;
  }
  makeRotationY(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1), this;
  }
  makeRotationZ(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  makeRotationAxis(e, t) {
    const n = Math.cos(t),
      r = Math.sin(t),
      i = 1 - n,
      a = e.x,
      o = e.y,
      s = e.z,
      l = i * a,
      c = i * o;
    return (
      this.set(
        l * a + n,
        l * o - r * s,
        l * s + r * o,
        0,
        l * o + r * s,
        c * o + n,
        c * s - r * a,
        0,
        l * s - r * o,
        c * s + r * a,
        i * s * s + n,
        0,
        0,
        0,
        0,
        1
      ),
      this
    );
  }
  makeScale(e, t, n) {
    return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this;
  }
  makeShear(e, t, n, r, i, a) {
    return this.set(1, n, i, 0, e, 1, a, 0, t, r, 1, 0, 0, 0, 0, 1), this;
  }
  compose(e, t, n) {
    const r = this.elements,
      i = t._x,
      a = t._y,
      o = t._z,
      s = t._w,
      l = i + i,
      c = a + a,
      u = o + o,
      d = i * l,
      h = i * c,
      f = i * u,
      p = a * c,
      m = a * u,
      g = o * u,
      v = s * l,
      _ = s * c,
      x = s * u,
      y = n.x,
      S = n.y,
      M = n.z;
    return (
      (r[0] = (1 - (p + g)) * y),
      (r[1] = (h + x) * y),
      (r[2] = (f - _) * y),
      (r[3] = 0),
      (r[4] = (h - x) * S),
      (r[5] = (1 - (d + g)) * S),
      (r[6] = (m + v) * S),
      (r[7] = 0),
      (r[8] = (f + _) * M),
      (r[9] = (m - v) * M),
      (r[10] = (1 - (d + p)) * M),
      (r[11] = 0),
      (r[12] = e.x),
      (r[13] = e.y),
      (r[14] = e.z),
      (r[15] = 1),
      this
    );
  }
  decompose(e, t, n) {
    const r = this.elements;
    let i = Lr.set(r[0], r[1], r[2]).length();
    const a = Lr.set(r[4], r[5], r[6]).length(),
      o = Lr.set(r[8], r[9], r[10]).length();
    this.determinant() < 0 && (i = -i),
      (e.x = r[12]),
      (e.y = r[13]),
      (e.z = r[14]),
      En.copy(this);
    const s = 1 / i,
      l = 1 / a,
      c = 1 / o;
    return (
      (En.elements[0] *= s),
      (En.elements[1] *= s),
      (En.elements[2] *= s),
      (En.elements[4] *= l),
      (En.elements[5] *= l),
      (En.elements[6] *= l),
      (En.elements[8] *= c),
      (En.elements[9] *= c),
      (En.elements[10] *= c),
      t.setFromRotationMatrix(En),
      (n.x = i),
      (n.y = a),
      (n.z = o),
      this
    );
  }
  makePerspective(e, t, n, r, i, a, o = ri) {
    const s = this.elements,
      l = (2 * i) / (t - e),
      c = (2 * i) / (n - r),
      u = (t + e) / (t - e),
      d = (n + r) / (n - r);
    let h, f;
    if (o === ri) (h = -(a + i) / (a - i)), (f = (-2 * a * i) / (a - i));
    else {
      if (o !== cl)
        throw new Error(
          "THREE.Matrix4.makePerspective(): Invalid coordinate system: " + o
        );
      (h = -a / (a - i)), (f = (-a * i) / (a - i));
    }
    return (
      (s[0] = l),
      (s[4] = 0),
      (s[8] = u),
      (s[12] = 0),
      (s[1] = 0),
      (s[5] = c),
      (s[9] = d),
      (s[13] = 0),
      (s[2] = 0),
      (s[6] = 0),
      (s[10] = h),
      (s[14] = f),
      (s[3] = 0),
      (s[7] = 0),
      (s[11] = -1),
      (s[15] = 0),
      this
    );
  }
  makeOrthographic(e, t, n, r, i, a, o = ri) {
    const s = this.elements,
      l = 1 / (t - e),
      c = 1 / (n - r),
      u = 1 / (a - i),
      d = (t + e) * l,
      h = (n + r) * c;
    let f, p;
    if (o === ri) (f = (a + i) * u), (p = -2 * u);
    else {
      if (o !== cl)
        throw new Error(
          "THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + o
        );
      (f = i * u), (p = -1 * u);
    }
    return (
      (s[0] = 2 * l),
      (s[4] = 0),
      (s[8] = 0),
      (s[12] = -d),
      (s[1] = 0),
      (s[5] = 2 * c),
      (s[9] = 0),
      (s[13] = -h),
      (s[2] = 0),
      (s[6] = 0),
      (s[10] = p),
      (s[14] = -f),
      (s[3] = 0),
      (s[7] = 0),
      (s[11] = 0),
      (s[15] = 1),
      this
    );
  }
  equals(e) {
    const t = this.elements,
      n = e.elements;
    for (let e = 0; e < 16; e++) if (t[e] !== n[e]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 16; n++) this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return (
      (e[t] = n[0]),
      (e[t + 1] = n[1]),
      (e[t + 2] = n[2]),
      (e[t + 3] = n[3]),
      (e[t + 4] = n[4]),
      (e[t + 5] = n[5]),
      (e[t + 6] = n[6]),
      (e[t + 7] = n[7]),
      (e[t + 8] = n[8]),
      (e[t + 9] = n[9]),
      (e[t + 10] = n[10]),
      (e[t + 11] = n[11]),
      (e[t + 12] = n[12]),
      (e[t + 13] = n[13]),
      (e[t + 14] = n[14]),
      (e[t + 15] = n[15]),
      e
    );
  }
}
const Lr = new F(),
  En = new St(),
  sy = new F(0, 0, 0),
  oy = new F(1, 1, 1),
  xi = new F(),
  na = new F(),
  en = new F(),
  Wh = new St(),
  Xh = new Co();
class fi {
  constructor(e = 0, t = 0, n = 0, r = fi.DEFAULT_ORDER) {
    (this.isEuler = !0),
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._order = r);
  }
  get x() {
    return this._x;
  }
  set x(e) {
    (this._x = e), this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    (this._y = e), this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    (this._z = e), this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(e) {
    (this._order = e), this._onChangeCallback();
  }
  set(e, t, n, r = this._order) {
    return (
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._order = r),
      this._onChangeCallback(),
      this
    );
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(e) {
    return (
      (this._x = e._x),
      (this._y = e._y),
      (this._z = e._z),
      (this._order = e._order),
      this._onChangeCallback(),
      this
    );
  }
  setFromRotationMatrix(e, t = this._order, n = !0) {
    const r = e.elements,
      i = r[0],
      a = r[4],
      o = r[8],
      s = r[1],
      l = r[5],
      c = r[9],
      u = r[2],
      d = r[6],
      h = r[10];
    switch (t) {
      case "XYZ":
        (this._y = Math.asin(Xt(o, -1, 1))),
          Math.abs(o) < 0.9999999
            ? ((this._x = Math.atan2(-c, h)), (this._z = Math.atan2(-a, i)))
            : ((this._x = Math.atan2(d, l)), (this._z = 0));
        break;
      case "YXZ":
        (this._x = Math.asin(-Xt(c, -1, 1))),
          Math.abs(c) < 0.9999999
            ? ((this._y = Math.atan2(o, h)), (this._z = Math.atan2(s, l)))
            : ((this._y = Math.atan2(-u, i)), (this._z = 0));
        break;
      case "ZXY":
        (this._x = Math.asin(Xt(d, -1, 1))),
          Math.abs(d) < 0.9999999
            ? ((this._y = Math.atan2(-u, h)), (this._z = Math.atan2(-a, l)))
            : ((this._y = 0), (this._z = Math.atan2(s, i)));
        break;
      case "ZYX":
        (this._y = Math.asin(-Xt(u, -1, 1))),
          Math.abs(u) < 0.9999999
            ? ((this._x = Math.atan2(d, h)), (this._z = Math.atan2(s, i)))
            : ((this._x = 0), (this._z = Math.atan2(-a, l)));
        break;
      case "YZX":
        (this._z = Math.asin(Xt(s, -1, 1))),
          Math.abs(s) < 0.9999999
            ? ((this._x = Math.atan2(-c, l)), (this._y = Math.atan2(-u, i)))
            : ((this._x = 0), (this._y = Math.atan2(o, h)));
        break;
      case "XZY":
        (this._z = Math.asin(-Xt(a, -1, 1))),
          Math.abs(a) < 0.9999999
            ? ((this._x = Math.atan2(d, l)), (this._y = Math.atan2(o, i)))
            : ((this._x = Math.atan2(-c, h)), (this._y = 0));
        break;
      default:
        console.warn(
          "THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " +
            t
        );
    }
    return (this._order = t), !0 === n && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, t, n) {
    return (
      Wh.makeRotationFromQuaternion(e), this.setFromRotationMatrix(Wh, t, n)
    );
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return Xh.setFromEuler(this), this.setFromQuaternion(Xh, e);
  }
  equals(e) {
    return (
      e._x === this._x &&
      e._y === this._y &&
      e._z === this._z &&
      e._order === this._order
    );
  }
  fromArray(e) {
    return (
      (this._x = e[0]),
      (this._y = e[1]),
      (this._z = e[2]),
      void 0 !== e[3] && (this._order = e[3]),
      this._onChangeCallback(),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this._x),
      (e[t + 1] = this._y),
      (e[t + 2] = this._z),
      (e[t + 3] = this._order),
      e
    );
  }
  _onChange(e) {
    return (this._onChangeCallback = e), this;
  }
  _onChangeCallback() {}
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
}
fi.DEFAULT_ORDER = "XYZ";
class o_ {
  constructor() {
    this.mask = 1;
  }
  set(e) {
    this.mask = (1 << e) >>> 0;
  }
  enable(e) {
    this.mask |= 1 << e;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(e) {
    this.mask ^= 1 << e;
  }
  disable(e) {
    this.mask &= ~(1 << e);
  }
  disableAll() {
    this.mask = 0;
  }
  test(e) {
    return !!(this.mask & e.mask);
  }
  isEnabled(e) {
    return !!(this.mask & (1 << e));
  }
}
let ay = 0;
const Yh = new F(),
  br = new Co(),
  $n = new St(),
  ia = new F(),
  ks = new F(),
  ly = new F(),
  uy = new Co(),
  qh = new F(1, 0, 0),
  $h = new F(0, 1, 0),
  jh = new F(0, 0, 1),
  Kh = { type: "added" },
  cy = { type: "removed" },
  Dr = { type: "childadded", child: null },
  Su = { type: "childremoved", child: null };
class on extends As {
  constructor() {
    super(),
      (this.isObject3D = !0),
      Object.defineProperty(this, "id", { value: ay++ }),
      (this.uuid = Ao()),
      (this.name = ""),
      (this.type = "Object3D"),
      (this.parent = null),
      (this.children = []),
      (this.up = on.DEFAULT_UP.clone());
    const e = new F(),
      t = new fi(),
      n = new Co(),
      r = new F(1, 1, 1);
    t._onChange(function () {
      n.setFromEuler(t, !1);
    }),
      n._onChange(function () {
        t.setFromQuaternion(n, void 0, !1);
      }),
      Object.defineProperties(this, {
        position: { configurable: !0, enumerable: !0, value: e },
        rotation: { configurable: !0, enumerable: !0, value: t },
        quaternion: { configurable: !0, enumerable: !0, value: n },
        scale: { configurable: !0, enumerable: !0, value: r },
        modelViewMatrix: { value: new St() },
        normalMatrix: { value: new Ue() },
      }),
      (this.matrix = new St()),
      (this.matrixWorld = new St()),
      (this.matrixAutoUpdate = on.DEFAULT_MATRIX_AUTO_UPDATE),
      (this.matrixWorldAutoUpdate = on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE),
      (this.matrixWorldNeedsUpdate = !1),
      (this.layers = new o_()),
      (this.visible = !0),
      (this.castShadow = !1),
      (this.receiveShadow = !1),
      (this.frustumCulled = !0),
      (this.renderOrder = 0),
      (this.animations = []),
      (this.userData = {});
  }
  onBeforeShadow() {}
  onAfterShadow() {}
  onBeforeRender() {}
  onAfterRender() {}
  applyMatrix4(e) {
    this.matrixAutoUpdate && this.updateMatrix(),
      this.matrix.premultiply(e),
      this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(e) {
    return this.quaternion.premultiply(e), this;
  }
  setRotationFromAxisAngle(e, t) {
    this.quaternion.setFromAxisAngle(e, t);
  }
  setRotationFromEuler(e) {
    this.quaternion.setFromEuler(e, !0);
  }
  setRotationFromMatrix(e) {
    this.quaternion.setFromRotationMatrix(e);
  }
  setRotationFromQuaternion(e) {
    this.quaternion.copy(e);
  }
  rotateOnAxis(e, t) {
    return br.setFromAxisAngle(e, t), this.quaternion.multiply(br), this;
  }
  rotateOnWorldAxis(e, t) {
    return br.setFromAxisAngle(e, t), this.quaternion.premultiply(br), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(qh, e);
  }
  rotateY(e) {
    return this.rotateOnAxis($h, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(jh, e);
  }
  translateOnAxis(e, t) {
    return (
      Yh.copy(e).applyQuaternion(this.quaternion),
      this.position.add(Yh.multiplyScalar(t)),
      this
    );
  }
  translateX(e) {
    return this.translateOnAxis(qh, e);
  }
  translateY(e) {
    return this.translateOnAxis($h, e);
  }
  translateZ(e) {
    return this.translateOnAxis(jh, e);
  }
  localToWorld(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return (
      this.updateWorldMatrix(!0, !1),
      e.applyMatrix4($n.copy(this.matrixWorld).invert())
    );
  }
  lookAt(e, t, n) {
    e.isVector3 ? ia.copy(e) : ia.set(e, t, n);
    const r = this.parent;
    this.updateWorldMatrix(!0, !1),
      ks.setFromMatrixPosition(this.matrixWorld),
      this.isCamera || this.isLight
        ? $n.lookAt(ks, ia, this.up)
        : $n.lookAt(ia, ks, this.up),
      this.quaternion.setFromRotationMatrix($n),
      r &&
        ($n.extractRotation(r.matrixWorld),
        br.setFromRotationMatrix($n),
        this.quaternion.premultiply(br.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let e = 0; e < arguments.length; e++) this.add(arguments[e]);
      return this;
    }
    return e === this
      ? (console.error(
          "THREE.Object3D.add: object can't be added as a child of itself.",
          e
        ),
        this)
      : (e && e.isObject3D
          ? (e.removeFromParent(),
            (e.parent = this),
            this.children.push(e),
            e.dispatchEvent(Kh),
            (Dr.child = e),
            this.dispatchEvent(Dr),
            (Dr.child = null))
          : console.error(
              "THREE.Object3D.add: object not an instance of THREE.Object3D.",
              e
            ),
        this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let e = 0; e < arguments.length; e++) this.remove(arguments[e]);
      return this;
    }
    const t = this.children.indexOf(e);
    return (
      -1 !== t &&
        ((e.parent = null),
        this.children.splice(t, 1),
        e.dispatchEvent(cy),
        (Su.child = e),
        this.dispatchEvent(Su),
        (Su.child = null)),
      this
    );
  }
  removeFromParent() {
    const e = this.parent;
    return null !== e && e.remove(this), this;
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(e) {
    return (
      this.updateWorldMatrix(!0, !1),
      $n.copy(this.matrixWorld).invert(),
      null !== e.parent &&
        (e.parent.updateWorldMatrix(!0, !1), $n.multiply(e.parent.matrixWorld)),
      e.applyMatrix4($n),
      e.removeFromParent(),
      (e.parent = this),
      this.children.push(e),
      e.updateWorldMatrix(!1, !0),
      e.dispatchEvent(Kh),
      (Dr.child = e),
      this.dispatchEvent(Dr),
      (Dr.child = null),
      this
    );
  }
  getObjectById(e) {
    return this.getObjectByProperty("id", e);
  }
  getObjectByName(e) {
    return this.getObjectByProperty("name", e);
  }
  getObjectByProperty(e, t) {
    if (this[e] === t) return this;
    for (let n = 0, r = this.children.length; n < r; n++) {
      const r = this.children[n].getObjectByProperty(e, t);
      if (void 0 !== r) return r;
    }
  }
  getObjectsByProperty(e, t, n = []) {
    this[e] === t && n.push(this);
    const r = this.children;
    for (let i = 0, a = r.length; i < a; i++)
      r[i].getObjectsByProperty(e, t, n);
    return n;
  }
  getWorldPosition(e) {
    return (
      this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld)
    );
  }
  getWorldQuaternion(e) {
    return (
      this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(ks, e, ly), e
    );
  }
  getWorldScale(e) {
    return (
      this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(ks, uy, e), e
    );
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize();
  }
  raycast() {}
  traverse(e) {
    e(this);
    const t = this.children;
    for (let n = 0, r = t.length; n < r; n++) t[n].traverse(e);
  }
  traverseVisible(e) {
    if (!1 === this.visible) return;
    e(this);
    const t = this.children;
    for (let n = 0, r = t.length; n < r; n++) t[n].traverseVisible(e);
  }
  traverseAncestors(e) {
    const t = this.parent;
    null !== t && (e(t), t.traverseAncestors(e));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale),
      (this.matrixWorldNeedsUpdate = !0);
  }
  updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(),
      (this.matrixWorldNeedsUpdate || e) &&
        (!0 === this.matrixWorldAutoUpdate &&
          (null === this.parent
            ? this.matrixWorld.copy(this.matrix)
            : this.matrixWorld.multiplyMatrices(
                this.parent.matrixWorld,
                this.matrix
              )),
        (this.matrixWorldNeedsUpdate = !1),
        (e = !0));
    const t = this.children;
    for (let n = 0, r = t.length; n < r; n++) t[n].updateMatrixWorld(e);
  }
  updateWorldMatrix(e, t) {
    const n = this.parent;
    if (
      (!0 === e && null !== n && n.updateWorldMatrix(!0, !1),
      this.matrixAutoUpdate && this.updateMatrix(),
      !0 === this.matrixWorldAutoUpdate &&
        (null === this.parent
          ? this.matrixWorld.copy(this.matrix)
          : this.matrixWorld.multiplyMatrices(
              this.parent.matrixWorld,
              this.matrix
            )),
      !0 === t)
    ) {
      const e = this.children;
      for (let t = 0, n = e.length; t < n; t++) e[t].updateWorldMatrix(!1, !0);
    }
  }
  toJSON(e) {
    const t = void 0 === e || "string" == typeof e,
      n = {};
    t &&
      ((e = {
        geometries: {},
        materials: {},
        textures: {},
        images: {},
        shapes: {},
        skeletons: {},
        animations: {},
        nodes: {},
      }),
      (n.metadata = {
        version: 4.6,
        type: "Object",
        generator: "Object3D.toJSON",
      }));
    const r = {};
    function i(t, n) {
      return void 0 === t[n.uuid] && (t[n.uuid] = n.toJSON(e)), n.uuid;
    }
    if (
      ((r.uuid = this.uuid),
      (r.type = this.type),
      "" !== this.name && (r.name = this.name),
      !0 === this.castShadow && (r.castShadow = !0),
      !0 === this.receiveShadow && (r.receiveShadow = !0),
      !1 === this.visible && (r.visible = !1),
      !1 === this.frustumCulled && (r.frustumCulled = !1),
      0 !== this.renderOrder && (r.renderOrder = this.renderOrder),
      Object.keys(this.userData).length > 0 && (r.userData = this.userData),
      (r.layers = this.layers.mask),
      (r.matrix = this.matrix.toArray()),
      (r.up = this.up.toArray()),
      !1 === this.matrixAutoUpdate && (r.matrixAutoUpdate = !1),
      this.isInstancedMesh &&
        ((r.type = "InstancedMesh"),
        (r.count = this.count),
        (r.instanceMatrix = this.instanceMatrix.toJSON()),
        null !== this.instanceColor &&
          (r.instanceColor = this.instanceColor.toJSON())),
      this.isBatchedMesh &&
        ((r.type = "BatchedMesh"),
        (r.perObjectFrustumCulled = this.perObjectFrustumCulled),
        (r.sortObjects = this.sortObjects),
        (r.drawRanges = this._drawRanges),
        (r.reservedRanges = this._reservedRanges),
        (r.visibility = this._visibility),
        (r.active = this._active),
        (r.bounds = this._bounds.map((e) => ({
          boxInitialized: e.boxInitialized,
          boxMin: e.box.min.toArray(),
          boxMax: e.box.max.toArray(),
          sphereInitialized: e.sphereInitialized,
          sphereRadius: e.sphere.radius,
          sphereCenter: e.sphere.center.toArray(),
        }))),
        (r.maxInstanceCount = this._maxInstanceCount),
        (r.maxVertexCount = this._maxVertexCount),
        (r.maxIndexCount = this._maxIndexCount),
        (r.geometryInitialized = this._geometryInitialized),
        (r.geometryCount = this._geometryCount),
        (r.matricesTexture = this._matricesTexture.toJSON(e)),
        null !== this._colorsTexture &&
          (r.colorsTexture = this._colorsTexture.toJSON(e)),
        null !== this.boundingSphere &&
          (r.boundingSphere = {
            center: r.boundingSphere.center.toArray(),
            radius: r.boundingSphere.radius,
          }),
        null !== this.boundingBox &&
          (r.boundingBox = {
            min: r.boundingBox.min.toArray(),
            max: r.boundingBox.max.toArray(),
          })),
      this.isScene)
    )
      this.background &&
        (this.background.isColor
          ? (r.background = this.background.toJSON())
          : this.background.isTexture &&
            (r.background = this.background.toJSON(e).uuid)),
        this.environment &&
          this.environment.isTexture &&
          !0 !== this.environment.isRenderTargetTexture &&
          (r.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      r.geometry = i(e.geometries, this.geometry);
      const t = this.geometry.parameters;
      if (void 0 !== t && void 0 !== t.shapes) {
        const n = t.shapes;
        if (Array.isArray(n))
          for (let t = 0, r = n.length; t < r; t++) {
            const r = n[t];
            i(e.shapes, r);
          }
        else i(e.shapes, n);
      }
    }
    if (
      (this.isSkinnedMesh &&
        ((r.bindMode = this.bindMode),
        (r.bindMatrix = this.bindMatrix.toArray()),
        void 0 !== this.skeleton &&
          (i(e.skeletons, this.skeleton), (r.skeleton = this.skeleton.uuid))),
      void 0 !== this.material)
    )
      if (Array.isArray(this.material)) {
        const t = [];
        for (let n = 0, r = this.material.length; n < r; n++)
          t.push(i(e.materials, this.material[n]));
        r.material = t;
      } else r.material = i(e.materials, this.material);
    if (this.children.length > 0) {
      r.children = [];
      for (let t = 0; t < this.children.length; t++)
        r.children.push(this.children[t].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      r.animations = [];
      for (let t = 0; t < this.animations.length; t++) {
        const n = this.animations[t];
        r.animations.push(i(e.animations, n));
      }
    }
    if (t) {
      const t = a(e.geometries),
        r = a(e.materials),
        i = a(e.textures),
        o = a(e.images),
        s = a(e.shapes),
        l = a(e.skeletons),
        c = a(e.animations),
        u = a(e.nodes);
      t.length > 0 && (n.geometries = t),
        r.length > 0 && (n.materials = r),
        i.length > 0 && (n.textures = i),
        o.length > 0 && (n.images = o),
        s.length > 0 && (n.shapes = s),
        l.length > 0 && (n.skeletons = l),
        c.length > 0 && (n.animations = c),
        u.length > 0 && (n.nodes = u);
    }
    return (n.object = r), n;
    function a(e) {
      const t = [];
      for (const n in e) {
        const r = e[n];
        delete r.metadata, t.push(r);
      }
      return t;
    }
  }
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  copy(e, t = !0) {
    if (
      ((this.name = e.name),
      this.up.copy(e.up),
      this.position.copy(e.position),
      (this.rotation.order = e.rotation.order),
      this.quaternion.copy(e.quaternion),
      this.scale.copy(e.scale),
      this.matrix.copy(e.matrix),
      this.matrixWorld.copy(e.matrixWorld),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      (this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate),
      (this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate),
      (this.layers.mask = e.layers.mask),
      (this.visible = e.visible),
      (this.castShadow = e.castShadow),
      (this.receiveShadow = e.receiveShadow),
      (this.frustumCulled = e.frustumCulled),
      (this.renderOrder = e.renderOrder),
      (this.animations = e.animations.slice()),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      !0 === t)
    )
      for (let t = 0; t < e.children.length; t++) {
        const n = e.children[t];
        this.add(n.clone());
      }
    return this;
  }
}
(on.DEFAULT_UP = new F(0, 1, 0)),
  (on.DEFAULT_MATRIX_AUTO_UPDATE = !0),
  (on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0);
const Tn = new F(),
  jn = new F(),
  Mu = new F(),
  Kn = new F(),
  Ur = new F(),
  Ir = new F(),
  Zh = new F(),
  Eu = new F(),
  Tu = new F(),
  wu = new F();
class kn {
  constructor(e = new F(), t = new F(), n = new F()) {
    (this.a = e), (this.b = t), (this.c = n);
  }
  static getNormal(e, t, n, r) {
    r.subVectors(n, t), Tn.subVectors(e, t), r.cross(Tn);
    const i = r.lengthSq();
    return i > 0 ? r.multiplyScalar(1 / Math.sqrt(i)) : r.set(0, 0, 0);
  }
  static getBarycoord(e, t, n, r, i) {
    Tn.subVectors(r, t), jn.subVectors(n, t), Mu.subVectors(e, t);
    const a = Tn.dot(Tn),
      o = Tn.dot(jn),
      s = Tn.dot(Mu),
      l = jn.dot(jn),
      c = jn.dot(Mu),
      u = a * l - o * o;
    if (0 === u) return i.set(0, 0, 0), null;
    const d = 1 / u,
      h = (l * s - o * c) * d,
      f = (a * c - o * s) * d;
    return i.set(1 - h - f, f, h);
  }
  static containsPoint(e, t, n, r) {
    return (
      null !== this.getBarycoord(e, t, n, r, Kn) &&
      Kn.x >= 0 &&
      Kn.y >= 0 &&
      Kn.x + Kn.y <= 1
    );
  }
  static getInterpolation(e, t, n, r, i, a, o, s) {
    return null === this.getBarycoord(e, t, n, r, Kn)
      ? ((s.x = 0),
        (s.y = 0),
        "z" in s && (s.z = 0),
        "w" in s && (s.w = 0),
        null)
      : (s.setScalar(0),
        s.addScaledVector(i, Kn.x),
        s.addScaledVector(a, Kn.y),
        s.addScaledVector(o, Kn.z),
        s);
  }
  static isFrontFacing(e, t, n, r) {
    return Tn.subVectors(n, t), jn.subVectors(e, t), Tn.cross(jn).dot(r) < 0;
  }
  set(e, t, n) {
    return this.a.copy(e), this.b.copy(t), this.c.copy(n), this;
  }
  setFromPointsAndIndices(e, t, n, r) {
    return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[r]), this;
  }
  setFromAttributeAndIndices(e, t, n, r) {
    return (
      this.a.fromBufferAttribute(e, t),
      this.b.fromBufferAttribute(e, n),
      this.c.fromBufferAttribute(e, r),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
  }
  getArea() {
    return (
      Tn.subVectors(this.c, this.b),
      jn.subVectors(this.a, this.b),
      0.5 * Tn.cross(jn).length()
    );
  }
  getMidpoint(e) {
    return e
      .addVectors(this.a, this.b)
      .add(this.c)
      .multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return kn.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return kn.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getInterpolation(e, t, n, r, i) {
    return kn.getInterpolation(e, this.a, this.b, this.c, t, n, r, i);
  }
  containsPoint(e) {
    return kn.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return kn.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    const n = this.a,
      r = this.b,
      i = this.c;
    let a, o;
    Ur.subVectors(r, n), Ir.subVectors(i, n), Eu.subVectors(e, n);
    const s = Ur.dot(Eu),
      l = Ir.dot(Eu);
    if (s <= 0 && l <= 0) return t.copy(n);
    Tu.subVectors(e, r);
    const c = Ur.dot(Tu),
      u = Ir.dot(Tu);
    if (c >= 0 && u <= c) return t.copy(r);
    const d = s * u - c * l;
    if (d <= 0 && s >= 0 && c <= 0)
      return (a = s / (s - c)), t.copy(n).addScaledVector(Ur, a);
    wu.subVectors(e, i);
    const h = Ur.dot(wu),
      f = Ir.dot(wu);
    if (f >= 0 && h <= f) return t.copy(i);
    const p = h * l - s * f;
    if (p <= 0 && l >= 0 && f <= 0)
      return (o = l / (l - f)), t.copy(n).addScaledVector(Ir, o);
    const m = c * f - h * u;
    if (m <= 0 && u - c >= 0 && h - f >= 0)
      return (
        Zh.subVectors(i, r),
        (o = (u - c) / (u - c + (h - f))),
        t.copy(r).addScaledVector(Zh, o)
      );
    const g = 1 / (m + p + d);
    return (
      (a = p * g),
      (o = d * g),
      t.copy(n).addScaledVector(Ur, a).addScaledVector(Ir, o)
    );
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
const a_ = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074,
  },
  yi = { h: 0, s: 0, l: 0 },
  ra = { h: 0, s: 0, l: 0 };
function Au(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + 6 * (t - e) * n
      : n < 0.5
      ? t
      : n < 2 / 3
      ? e + 6 * (t - e) * (2 / 3 - n)
      : e
  );
}
class Ze {
  constructor(e, t, n) {
    return (
      (this.isColor = !0),
      (this.r = 1),
      (this.g = 1),
      (this.b = 1),
      this.set(e, t, n)
    );
  }
  set(e, t, n) {
    if (void 0 === t && void 0 === n) {
      const t = e;
      t && t.isColor
        ? this.copy(t)
        : "number" == typeof t
        ? this.setHex(t)
        : "string" == typeof t && this.setStyle(t);
    } else this.setRGB(e, t, n);
    return this;
  }
  setScalar(e) {
    return (this.r = e), (this.g = e), (this.b = e), this;
  }
  setHex(e, t = Fn) {
    return (
      (e = Math.floor(e)),
      (this.r = ((e >> 16) & 255) / 255),
      (this.g = ((e >> 8) & 255) / 255),
      (this.b = (255 & e) / 255),
      $e.toWorkingColorSpace(this, t),
      this
    );
  }
  setRGB(e, t, n, r = $e.workingColorSpace) {
    return (
      (this.r = e),
      (this.g = t),
      (this.b = n),
      $e.toWorkingColorSpace(this, r),
      this
    );
  }
  setHSL(e, t, n, r = $e.workingColorSpace) {
    if (((e = $x(e, 1)), (t = Xt(t, 0, 1)), (n = Xt(n, 0, 1)), 0 === t))
      this.r = this.g = this.b = n;
    else {
      const r = n <= 0.5 ? n * (1 + t) : n + t - n * t,
        i = 2 * n - r;
      (this.r = Au(i, r, e + 1 / 3)),
        (this.g = Au(i, r, e)),
        (this.b = Au(i, r, e - 1 / 3));
    }
    return $e.toWorkingColorSpace(this, r), this;
  }
  setStyle(e, t = Fn) {
    function n(t) {
      void 0 !== t &&
        parseFloat(t) < 1 &&
        console.warn(
          "THREE.Color: Alpha component of " + e + " will be ignored."
        );
    }
    let r;
    if ((r = /^(\w+)\(([^\)]*)\)/.exec(e))) {
      let i;
      const a = r[1],
        o = r[2];
      switch (a) {
        case "rgb":
        case "rgba":
          if (
            (i =
              /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                o
              ))
          )
            return (
              n(i[4]),
              this.setRGB(
                Math.min(255, parseInt(i[1], 10)) / 255,
                Math.min(255, parseInt(i[2], 10)) / 255,
                Math.min(255, parseInt(i[3], 10)) / 255,
                t
              )
            );
          if (
            (i =
              /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                o
              ))
          )
            return (
              n(i[4]),
              this.setRGB(
                Math.min(100, parseInt(i[1], 10)) / 100,
                Math.min(100, parseInt(i[2], 10)) / 100,
                Math.min(100, parseInt(i[3], 10)) / 100,
                t
              )
            );
          break;
        case "hsl":
        case "hsla":
          if (
            (i =
              /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                o
              ))
          )
            return (
              n(i[4]),
              this.setHSL(
                parseFloat(i[1]) / 360,
                parseFloat(i[2]) / 100,
                parseFloat(i[3]) / 100,
                t
              )
            );
          break;
        default:
          console.warn("THREE.Color: Unknown color model " + e);
      }
    } else if ((r = /^\#([A-Fa-f\d]+)$/.exec(e))) {
      const n = r[1],
        i = n.length;
      if (3 === i)
        return this.setRGB(
          parseInt(n.charAt(0), 16) / 15,
          parseInt(n.charAt(1), 16) / 15,
          parseInt(n.charAt(2), 16) / 15,
          t
        );
      if (6 === i) return this.setHex(parseInt(n, 16), t);
      console.warn("THREE.Color: Invalid hex color " + e);
    } else if (e && e.length > 0) return this.setColorName(e, t);
    return this;
  }
  setColorName(e, t = Fn) {
    const n = a_[e.toLowerCase()];
    return (
      void 0 !== n
        ? this.setHex(n, t)
        : console.warn("THREE.Color: Unknown color " + e),
      this
    );
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return (this.r = e.r), (this.g = e.g), (this.b = e.b), this;
  }
  copySRGBToLinear(e) {
    return (this.r = cs(e.r)), (this.g = cs(e.g)), (this.b = cs(e.b)), this;
  }
  copyLinearToSRGB(e) {
    return (this.r = hu(e.r)), (this.g = hu(e.g)), (this.b = hu(e.b)), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = Fn) {
    return (
      $e.fromWorkingColorSpace(Nt.copy(this), e),
      65536 * Math.round(Xt(255 * Nt.r, 0, 255)) +
        256 * Math.round(Xt(255 * Nt.g, 0, 255)) +
        Math.round(Xt(255 * Nt.b, 0, 255))
    );
  }
  getHexString(e = Fn) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = $e.workingColorSpace) {
    $e.fromWorkingColorSpace(Nt.copy(this), t);
    const n = Nt.r,
      r = Nt.g,
      i = Nt.b,
      a = Math.max(n, r, i),
      o = Math.min(n, r, i);
    let s, l;
    const c = (o + a) / 2;
    if (o === a) (s = 0), (l = 0);
    else {
      const e = a - o;
      switch (((l = c <= 0.5 ? e / (a + o) : e / (2 - a - o)), a)) {
        case n:
          s = (r - i) / e + (r < i ? 6 : 0);
          break;
        case r:
          s = (i - n) / e + 2;
          break;
        case i:
          s = (n - r) / e + 4;
      }
      s /= 6;
    }
    return (e.h = s), (e.s = l), (e.l = c), e;
  }
  getRGB(e, t = $e.workingColorSpace) {
    return (
      $e.fromWorkingColorSpace(Nt.copy(this), t),
      (e.r = Nt.r),
      (e.g = Nt.g),
      (e.b = Nt.b),
      e
    );
  }
  getStyle(e = Fn) {
    $e.fromWorkingColorSpace(Nt.copy(this), e);
    const t = Nt.r,
      n = Nt.g,
      r = Nt.b;
    return e !== Fn
      ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`
      : `rgb(${Math.round(255 * t)},${Math.round(255 * n)},${Math.round(
          255 * r
        )})`;
  }
  offsetHSL(e, t, n) {
    return this.getHSL(yi), this.setHSL(yi.h + e, yi.s + t, yi.l + n);
  }
  add(e) {
    return (this.r += e.r), (this.g += e.g), (this.b += e.b), this;
  }
  addColors(e, t) {
    return (
      (this.r = e.r + t.r), (this.g = e.g + t.g), (this.b = e.b + t.b), this
    );
  }
  addScalar(e) {
    return (this.r += e), (this.g += e), (this.b += e), this;
  }
  sub(e) {
    return (
      (this.r = Math.max(0, this.r - e.r)),
      (this.g = Math.max(0, this.g - e.g)),
      (this.b = Math.max(0, this.b - e.b)),
      this
    );
  }
  multiply(e) {
    return (this.r *= e.r), (this.g *= e.g), (this.b *= e.b), this;
  }
  multiplyScalar(e) {
    return (this.r *= e), (this.g *= e), (this.b *= e), this;
  }
  lerp(e, t) {
    return (
      (this.r += (e.r - this.r) * t),
      (this.g += (e.g - this.g) * t),
      (this.b += (e.b - this.b) * t),
      this
    );
  }
  lerpColors(e, t, n) {
    return (
      (this.r = e.r + (t.r - e.r) * n),
      (this.g = e.g + (t.g - e.g) * n),
      (this.b = e.b + (t.b - e.b) * n),
      this
    );
  }
  lerpHSL(e, t) {
    this.getHSL(yi), e.getHSL(ra);
    const n = fu(yi.h, ra.h, t),
      r = fu(yi.s, ra.s, t),
      i = fu(yi.l, ra.l, t);
    return this.setHSL(n, r, i), this;
  }
  setFromVector3(e) {
    return (this.r = e.x), (this.g = e.y), (this.b = e.z), this;
  }
  applyMatrix3(e) {
    const t = this.r,
      n = this.g,
      r = this.b,
      i = e.elements;
    return (
      (this.r = i[0] * t + i[3] * n + i[6] * r),
      (this.g = i[1] * t + i[4] * n + i[7] * r),
      (this.b = i[2] * t + i[5] * n + i[8] * r),
      this
    );
  }
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  fromArray(e, t = 0) {
    return (this.r = e[t]), (this.g = e[t + 1]), (this.b = e[t + 2]), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this.r), (e[t + 1] = this.g), (e[t + 2] = this.b), e;
  }
  fromBufferAttribute(e, t) {
    return (
      (this.r = e.getX(t)), (this.g = e.getY(t)), (this.b = e.getZ(t)), this
    );
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
const Nt = new Ze();
Ze.NAMES = a_;
let fy = 0;
class Ll extends As {
  constructor() {
    super(),
      (this.isMaterial = !0),
      Object.defineProperty(this, "id", { value: fy++ }),
      (this.uuid = Ao()),
      (this.name = ""),
      (this.type = "Material"),
      (this.blending = 1),
      (this.side = Hi),
      (this.vertexColors = !1),
      (this.opacity = 1),
      (this.transparent = !1),
      (this.alphaHash = !1),
      (this.blendSrc = Lc),
      (this.blendDst = bc),
      (this.blendEquation = rr),
      (this.blendSrcAlpha = null),
      (this.blendDstAlpha = null),
      (this.blendEquationAlpha = null),
      (this.blendColor = new Ze(0, 0, 0)),
      (this.blendAlpha = 0),
      (this.depthFunc = 3),
      (this.depthTest = !0),
      (this.depthWrite = !0),
      (this.stencilWriteMask = 255),
      (this.stencilFunc = Oh),
      (this.stencilRef = 0),
      (this.stencilFuncMask = 255),
      (this.stencilFail = wr),
      (this.stencilZFail = wr),
      (this.stencilZPass = wr),
      (this.stencilWrite = !1),
      (this.clippingPlanes = null),
      (this.clipIntersection = !1),
      (this.clipShadows = !1),
      (this.shadowSide = null),
      (this.colorWrite = !0),
      (this.precision = null),
      (this.polygonOffset = !1),
      (this.polygonOffsetFactor = 0),
      (this.polygonOffsetUnits = 0),
      (this.dithering = !1),
      (this.alphaToCoverage = !1),
      (this.premultipliedAlpha = !1),
      (this.forceSinglePass = !1),
      (this.visible = !0),
      (this.toneMapped = !0),
      (this.userData = {}),
      (this.version = 0),
      (this._alphaTest = 0);
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(e) {
    this._alphaTest > 0 != e > 0 && this.version++, (this._alphaTest = e);
  }
  onBeforeCompile() {}
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(e) {
    if (void 0 !== e)
      for (const t in e) {
        const n = e[t];
        if (void 0 === n) {
          console.warn(
            `THREE.Material: parameter '${t}' has value of undefined.`
          );
          continue;
        }
        const r = this[t];
        void 0 !== r
          ? r && r.isColor
            ? r.set(n)
            : r && r.isVector3 && n && n.isVector3
            ? r.copy(n)
            : (this[t] = n)
          : console.warn(
              `THREE.Material: '${t}' is not a property of THREE.${this.type}.`
            );
      }
  }
  toJSON(e) {
    const t = void 0 === e || "string" == typeof e;
    t && (e = { textures: {}, images: {} });
    const n = {
      metadata: {
        version: 4.6,
        type: "Material",
        generator: "Material.toJSON",
      },
    };
    function r(e) {
      const t = [];
      for (const n in e) {
        const r = e[n];
        delete r.metadata, t.push(r);
      }
      return t;
    }
    if (
      ((n.uuid = this.uuid),
      (n.type = this.type),
      "" !== this.name && (n.name = this.name),
      this.color && this.color.isColor && (n.color = this.color.getHex()),
      void 0 !== this.roughness && (n.roughness = this.roughness),
      void 0 !== this.metalness && (n.metalness = this.metalness),
      void 0 !== this.sheen && (n.sheen = this.sheen),
      this.sheenColor &&
        this.sheenColor.isColor &&
        (n.sheenColor = this.sheenColor.getHex()),
      void 0 !== this.sheenRoughness &&
        (n.sheenRoughness = this.sheenRoughness),
      this.emissive &&
        this.emissive.isColor &&
        (n.emissive = this.emissive.getHex()),
      void 0 !== this.emissiveIntensity &&
        1 !== this.emissiveIntensity &&
        (n.emissiveIntensity = this.emissiveIntensity),
      this.specular &&
        this.specular.isColor &&
        (n.specular = this.specular.getHex()),
      void 0 !== this.specularIntensity &&
        (n.specularIntensity = this.specularIntensity),
      this.specularColor &&
        this.specularColor.isColor &&
        (n.specularColor = this.specularColor.getHex()),
      void 0 !== this.shininess && (n.shininess = this.shininess),
      void 0 !== this.clearcoat && (n.clearcoat = this.clearcoat),
      void 0 !== this.clearcoatRoughness &&
        (n.clearcoatRoughness = this.clearcoatRoughness),
      this.clearcoatMap &&
        this.clearcoatMap.isTexture &&
        (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid),
      this.clearcoatRoughnessMap &&
        this.clearcoatRoughnessMap.isTexture &&
        (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid),
      this.clearcoatNormalMap &&
        this.clearcoatNormalMap.isTexture &&
        ((n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid),
        (n.clearcoatNormalScale = this.clearcoatNormalScale.toArray())),
      void 0 !== this.dispersion && (n.dispersion = this.dispersion),
      void 0 !== this.iridescence && (n.iridescence = this.iridescence),
      void 0 !== this.iridescenceIOR &&
        (n.iridescenceIOR = this.iridescenceIOR),
      void 0 !== this.iridescenceThicknessRange &&
        (n.iridescenceThicknessRange = this.iridescenceThicknessRange),
      this.iridescenceMap &&
        this.iridescenceMap.isTexture &&
        (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid),
      this.iridescenceThicknessMap &&
        this.iridescenceThicknessMap.isTexture &&
        (n.iridescenceThicknessMap =
          this.iridescenceThicknessMap.toJSON(e).uuid),
      void 0 !== this.anisotropy && (n.anisotropy = this.anisotropy),
      void 0 !== this.anisotropyRotation &&
        (n.anisotropyRotation = this.anisotropyRotation),
      this.anisotropyMap &&
        this.anisotropyMap.isTexture &&
        (n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid),
      this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid),
      this.matcap &&
        this.matcap.isTexture &&
        (n.matcap = this.matcap.toJSON(e).uuid),
      this.alphaMap &&
        this.alphaMap.isTexture &&
        (n.alphaMap = this.alphaMap.toJSON(e).uuid),
      this.lightMap &&
        this.lightMap.isTexture &&
        ((n.lightMap = this.lightMap.toJSON(e).uuid),
        (n.lightMapIntensity = this.lightMapIntensity)),
      this.aoMap &&
        this.aoMap.isTexture &&
        ((n.aoMap = this.aoMap.toJSON(e).uuid),
        (n.aoMapIntensity = this.aoMapIntensity)),
      this.bumpMap &&
        this.bumpMap.isTexture &&
        ((n.bumpMap = this.bumpMap.toJSON(e).uuid),
        (n.bumpScale = this.bumpScale)),
      this.normalMap &&
        this.normalMap.isTexture &&
        ((n.normalMap = this.normalMap.toJSON(e).uuid),
        (n.normalMapType = this.normalMapType),
        (n.normalScale = this.normalScale.toArray())),
      this.displacementMap &&
        this.displacementMap.isTexture &&
        ((n.displacementMap = this.displacementMap.toJSON(e).uuid),
        (n.displacementScale = this.displacementScale),
        (n.displacementBias = this.displacementBias)),
      this.roughnessMap &&
        this.roughnessMap.isTexture &&
        (n.roughnessMap = this.roughnessMap.toJSON(e).uuid),
      this.metalnessMap &&
        this.metalnessMap.isTexture &&
        (n.metalnessMap = this.metalnessMap.toJSON(e).uuid),
      this.emissiveMap &&
        this.emissiveMap.isTexture &&
        (n.emissiveMap = this.emissiveMap.toJSON(e).uuid),
      this.specularMap &&
        this.specularMap.isTexture &&
        (n.specularMap = this.specularMap.toJSON(e).uuid),
      this.specularIntensityMap &&
        this.specularIntensityMap.isTexture &&
        (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid),
      this.specularColorMap &&
        this.specularColorMap.isTexture &&
        (n.specularColorMap = this.specularColorMap.toJSON(e).uuid),
      this.envMap &&
        this.envMap.isTexture &&
        ((n.envMap = this.envMap.toJSON(e).uuid),
        void 0 !== this.combine && (n.combine = this.combine)),
      void 0 !== this.envMapRotation &&
        (n.envMapRotation = this.envMapRotation.toArray()),
      void 0 !== this.envMapIntensity &&
        (n.envMapIntensity = this.envMapIntensity),
      void 0 !== this.reflectivity && (n.reflectivity = this.reflectivity),
      void 0 !== this.refractionRatio &&
        (n.refractionRatio = this.refractionRatio),
      this.gradientMap &&
        this.gradientMap.isTexture &&
        (n.gradientMap = this.gradientMap.toJSON(e).uuid),
      void 0 !== this.transmission && (n.transmission = this.transmission),
      this.transmissionMap &&
        this.transmissionMap.isTexture &&
        (n.transmissionMap = this.transmissionMap.toJSON(e).uuid),
      void 0 !== this.thickness && (n.thickness = this.thickness),
      this.thicknessMap &&
        this.thicknessMap.isTexture &&
        (n.thicknessMap = this.thicknessMap.toJSON(e).uuid),
      void 0 !== this.attenuationDistance &&
        this.attenuationDistance !== 1 / 0 &&
        (n.attenuationDistance = this.attenuationDistance),
      void 0 !== this.attenuationColor &&
        (n.attenuationColor = this.attenuationColor.getHex()),
      void 0 !== this.size && (n.size = this.size),
      null !== this.shadowSide && (n.shadowSide = this.shadowSide),
      void 0 !== this.sizeAttenuation &&
        (n.sizeAttenuation = this.sizeAttenuation),
      1 !== this.blending && (n.blending = this.blending),
      this.side !== Hi && (n.side = this.side),
      !0 === this.vertexColors && (n.vertexColors = !0),
      this.opacity < 1 && (n.opacity = this.opacity),
      !0 === this.transparent && (n.transparent = !0),
      this.blendSrc !== Lc && (n.blendSrc = this.blendSrc),
      this.blendDst !== bc && (n.blendDst = this.blendDst),
      this.blendEquation !== rr && (n.blendEquation = this.blendEquation),
      null !== this.blendSrcAlpha && (n.blendSrcAlpha = this.blendSrcAlpha),
      null !== this.blendDstAlpha && (n.blendDstAlpha = this.blendDstAlpha),
      null !== this.blendEquationAlpha &&
        (n.blendEquationAlpha = this.blendEquationAlpha),
      this.blendColor &&
        this.blendColor.isColor &&
        (n.blendColor = this.blendColor.getHex()),
      0 !== this.blendAlpha && (n.blendAlpha = this.blendAlpha),
      3 !== this.depthFunc && (n.depthFunc = this.depthFunc),
      !1 === this.depthTest && (n.depthTest = this.depthTest),
      !1 === this.depthWrite && (n.depthWrite = this.depthWrite),
      !1 === this.colorWrite && (n.colorWrite = this.colorWrite),
      255 !== this.stencilWriteMask &&
        (n.stencilWriteMask = this.stencilWriteMask),
      this.stencilFunc !== Oh && (n.stencilFunc = this.stencilFunc),
      0 !== this.stencilRef && (n.stencilRef = this.stencilRef),
      255 !== this.stencilFuncMask &&
        (n.stencilFuncMask = this.stencilFuncMask),
      this.stencilFail !== wr && (n.stencilFail = this.stencilFail),
      this.stencilZFail !== wr && (n.stencilZFail = this.stencilZFail),
      this.stencilZPass !== wr && (n.stencilZPass = this.stencilZPass),
      !0 === this.stencilWrite && (n.stencilWrite = this.stencilWrite),
      void 0 !== this.rotation &&
        0 !== this.rotation &&
        (n.rotation = this.rotation),
      !0 === this.polygonOffset && (n.polygonOffset = !0),
      0 !== this.polygonOffsetFactor &&
        (n.polygonOffsetFactor = this.polygonOffsetFactor),
      0 !== this.polygonOffsetUnits &&
        (n.polygonOffsetUnits = this.polygonOffsetUnits),
      void 0 !== this.linewidth &&
        1 !== this.linewidth &&
        (n.linewidth = this.linewidth),
      void 0 !== this.dashSize && (n.dashSize = this.dashSize),
      void 0 !== this.gapSize && (n.gapSize = this.gapSize),
      void 0 !== this.scale && (n.scale = this.scale),
      !0 === this.dithering && (n.dithering = !0),
      this.alphaTest > 0 && (n.alphaTest = this.alphaTest),
      !0 === this.alphaHash && (n.alphaHash = !0),
      !0 === this.alphaToCoverage && (n.alphaToCoverage = !0),
      !0 === this.premultipliedAlpha && (n.premultipliedAlpha = !0),
      !0 === this.forceSinglePass && (n.forceSinglePass = !0),
      !0 === this.wireframe && (n.wireframe = !0),
      this.wireframeLinewidth > 1 &&
        (n.wireframeLinewidth = this.wireframeLinewidth),
      "round" !== this.wireframeLinecap &&
        (n.wireframeLinecap = this.wireframeLinecap),
      "round" !== this.wireframeLinejoin &&
        (n.wireframeLinejoin = this.wireframeLinejoin),
      !0 === this.flatShading && (n.flatShading = !0),
      !1 === this.visible && (n.visible = !1),
      !1 === this.toneMapped && (n.toneMapped = !1),
      !1 === this.fog && (n.fog = !1),
      Object.keys(this.userData).length > 0 && (n.userData = this.userData),
      t)
    ) {
      const t = r(e.textures),
        i = r(e.images);
      t.length > 0 && (n.textures = t), i.length > 0 && (n.images = i);
    }
    return n;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    (this.name = e.name),
      (this.blending = e.blending),
      (this.side = e.side),
      (this.vertexColors = e.vertexColors),
      (this.opacity = e.opacity),
      (this.transparent = e.transparent),
      (this.blendSrc = e.blendSrc),
      (this.blendDst = e.blendDst),
      (this.blendEquation = e.blendEquation),
      (this.blendSrcAlpha = e.blendSrcAlpha),
      (this.blendDstAlpha = e.blendDstAlpha),
      (this.blendEquationAlpha = e.blendEquationAlpha),
      this.blendColor.copy(e.blendColor),
      (this.blendAlpha = e.blendAlpha),
      (this.depthFunc = e.depthFunc),
      (this.depthTest = e.depthTest),
      (this.depthWrite = e.depthWrite),
      (this.stencilWriteMask = e.stencilWriteMask),
      (this.stencilFunc = e.stencilFunc),
      (this.stencilRef = e.stencilRef),
      (this.stencilFuncMask = e.stencilFuncMask),
      (this.stencilFail = e.stencilFail),
      (this.stencilZFail = e.stencilZFail),
      (this.stencilZPass = e.stencilZPass),
      (this.stencilWrite = e.stencilWrite);
    const t = e.clippingPlanes;
    let n = null;
    if (null !== t) {
      const e = t.length;
      n = new Array(e);
      for (let r = 0; r !== e; ++r) n[r] = t[r].clone();
    }
    return (
      (this.clippingPlanes = n),
      (this.clipIntersection = e.clipIntersection),
      (this.clipShadows = e.clipShadows),
      (this.shadowSide = e.shadowSide),
      (this.colorWrite = e.colorWrite),
      (this.precision = e.precision),
      (this.polygonOffset = e.polygonOffset),
      (this.polygonOffsetFactor = e.polygonOffsetFactor),
      (this.polygonOffsetUnits = e.polygonOffsetUnits),
      (this.dithering = e.dithering),
      (this.alphaTest = e.alphaTest),
      (this.alphaHash = e.alphaHash),
      (this.alphaToCoverage = e.alphaToCoverage),
      (this.premultipliedAlpha = e.premultipliedAlpha),
      (this.forceSinglePass = e.forceSinglePass),
      (this.visible = e.visible),
      (this.toneMapped = e.toneMapped),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(e) {
    !0 === e && this.version++;
  }
  onBuild() {
    console.warn("Material: onBuild() has been removed.");
  }
  onBeforeRender() {
    console.warn("Material: onBeforeRender() has been removed.");
  }
}
class l_ extends Ll {
  constructor(e) {
    super(),
      (this.isMeshBasicMaterial = !0),
      (this.type = "MeshBasicMaterial"),
      (this.color = new Ze(16777215)),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.specularMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.envMapRotation = new fi()),
      (this.combine = Gg),
      (this.reflectivity = 1),
      (this.refractionRatio = 0.98),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = "round"),
      (this.wireframeLinejoin = "round"),
      (this.fog = !0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.map = e.map),
      (this.lightMap = e.lightMap),
      (this.lightMapIntensity = e.lightMapIntensity),
      (this.aoMap = e.aoMap),
      (this.aoMapIntensity = e.aoMapIntensity),
      (this.specularMap = e.specularMap),
      (this.alphaMap = e.alphaMap),
      (this.envMap = e.envMap),
      this.envMapRotation.copy(e.envMapRotation),
      (this.combine = e.combine),
      (this.reflectivity = e.reflectivity),
      (this.refractionRatio = e.refractionRatio),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.wireframeLinecap = e.wireframeLinecap),
      (this.wireframeLinejoin = e.wireframeLinejoin),
      (this.fog = e.fog),
      this
    );
  }
}
const _t = new F(),
  sa = new Ve();
class Gn {
  constructor(e, t, n = !1) {
    if (Array.isArray(e))
      throw new TypeError(
        "THREE.BufferAttribute: array should be a Typed Array."
      );
    (this.isBufferAttribute = !0),
      (this.name = ""),
      (this.array = e),
      (this.itemSize = t),
      (this.count = void 0 !== e ? e.length / t : 0),
      (this.normalized = n),
      (this.usage = zh),
      (this._updateRange = { offset: 0, count: -1 }),
      (this.updateRanges = []),
      (this.gpuType = ii),
      (this.version = 0);
  }
  onUploadCallback() {}
  set needsUpdate(e) {
    !0 === e && this.version++;
  }
  get updateRange() {
    return (
      i_(
        "THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."
      ),
      this._updateRange
    );
  }
  setUsage(e) {
    return (this.usage = e), this;
  }
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(e) {
    return (
      (this.name = e.name),
      (this.array = new e.array.constructor(e.array)),
      (this.itemSize = e.itemSize),
      (this.count = e.count),
      (this.normalized = e.normalized),
      (this.usage = e.usage),
      (this.gpuType = e.gpuType),
      this
    );
  }
  copyAt(e, t, n) {
    (e *= this.itemSize), (n *= t.itemSize);
    for (let r = 0, i = this.itemSize; r < i; r++)
      this.array[e + r] = t.array[n + r];
    return this;
  }
  copyArray(e) {
    return this.array.set(e), this;
  }
  applyMatrix3(e) {
    if (2 === this.itemSize)
      for (let t = 0, n = this.count; t < n; t++)
        sa.fromBufferAttribute(this, t),
          sa.applyMatrix3(e),
          this.setXY(t, sa.x, sa.y);
    else if (3 === this.itemSize)
      for (let t = 0, n = this.count; t < n; t++)
        _t.fromBufferAttribute(this, t),
          _t.applyMatrix3(e),
          this.setXYZ(t, _t.x, _t.y, _t.z);
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.count; t < n; t++)
      _t.fromBufferAttribute(this, t),
        _t.applyMatrix4(e),
        this.setXYZ(t, _t.x, _t.y, _t.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      _t.fromBufferAttribute(this, t),
        _t.applyNormalMatrix(e),
        this.setXYZ(t, _t.x, _t.y, _t.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      _t.fromBufferAttribute(this, t),
        _t.transformDirection(e),
        this.setXYZ(t, _t.x, _t.y, _t.z);
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  getComponent(e, t) {
    let n = this.array[e * this.itemSize + t];
    return this.normalized && (n = Fs(n, this.array)), n;
  }
  setComponent(e, t, n) {
    return (
      this.normalized && (n = Gt(n, this.array)),
      (this.array[e * this.itemSize + t] = n),
      this
    );
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = Fs(t, this.array)), t;
  }
  setX(e, t) {
    return (
      this.normalized && (t = Gt(t, this.array)),
      (this.array[e * this.itemSize] = t),
      this
    );
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = Fs(t, this.array)), t;
  }
  setY(e, t) {
    return (
      this.normalized && (t = Gt(t, this.array)),
      (this.array[e * this.itemSize + 1] = t),
      this
    );
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = Fs(t, this.array)), t;
  }
  setZ(e, t) {
    return (
      this.normalized && (t = Gt(t, this.array)),
      (this.array[e * this.itemSize + 2] = t),
      this
    );
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = Fs(t, this.array)), t;
  }
  setW(e, t) {
    return (
      this.normalized && (t = Gt(t, this.array)),
      (this.array[e * this.itemSize + 3] = t),
      this
    );
  }
  setXY(e, t, n) {
    return (
      (e *= this.itemSize),
      this.normalized && ((t = Gt(t, this.array)), (n = Gt(n, this.array))),
      (this.array[e + 0] = t),
      (this.array[e + 1] = n),
      this
    );
  }
  setXYZ(e, t, n, r) {
    return (
      (e *= this.itemSize),
      this.normalized &&
        ((t = Gt(t, this.array)),
        (n = Gt(n, this.array)),
        (r = Gt(r, this.array))),
      (this.array[e + 0] = t),
      (this.array[e + 1] = n),
      (this.array[e + 2] = r),
      this
    );
  }
  setXYZW(e, t, n, r, i) {
    return (
      (e *= this.itemSize),
      this.normalized &&
        ((t = Gt(t, this.array)),
        (n = Gt(n, this.array)),
        (r = Gt(r, this.array)),
        (i = Gt(i, this.array))),
      (this.array[e + 0] = t),
      (this.array[e + 1] = n),
      (this.array[e + 2] = r),
      (this.array[e + 3] = i),
      this
    );
  }
  onUpload(e) {
    return (this.onUploadCallback = e), this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const e = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized,
    };
    return (
      "" !== this.name && (e.name = this.name),
      this.usage !== zh && (e.usage = this.usage),
      e
    );
  }
}
class u_ extends Gn {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
class c_ extends Gn {
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class Wn extends Gn {
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}
let dy = 0;
const fn = new St(),
  Cu = new on(),
  Nr = new F(),
  tn = new Ro(),
  Bs = new Ro(),
  Tt = new F();
class Yi extends As {
  constructor() {
    super(),
      (this.isBufferGeometry = !0),
      Object.defineProperty(this, "id", { value: dy++ }),
      (this.uuid = Ao()),
      (this.name = ""),
      (this.type = "BufferGeometry"),
      (this.index = null),
      (this.attributes = {}),
      (this.morphAttributes = {}),
      (this.morphTargetsRelative = !1),
      (this.groups = []),
      (this.boundingBox = null),
      (this.boundingSphere = null),
      (this.drawRange = { start: 0, count: 1 / 0 }),
      (this.userData = {});
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return (
      Array.isArray(e)
        ? (this.index = new (n_(e) ? c_ : u_)(e, 1))
        : (this.index = e),
      this
    );
  }
  getAttribute(e) {
    return this.attributes[e];
  }
  setAttribute(e, t) {
    return (this.attributes[e] = t), this;
  }
  deleteAttribute(e) {
    return delete this.attributes[e], this;
  }
  hasAttribute(e) {
    return void 0 !== this.attributes[e];
  }
  addGroup(e, t, n = 0) {
    this.groups.push({ start: e, count: t, materialIndex: n });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(e, t) {
    (this.drawRange.start = e), (this.drawRange.count = t);
  }
  applyMatrix4(e) {
    const t = this.attributes.position;
    void 0 !== t && (t.applyMatrix4(e), (t.needsUpdate = !0));
    const n = this.attributes.normal;
    if (void 0 !== n) {
      const t = new Ue().getNormalMatrix(e);
      n.applyNormalMatrix(t), (n.needsUpdate = !0);
    }
    const r = this.attributes.tangent;
    return (
      void 0 !== r && (r.transformDirection(e), (r.needsUpdate = !0)),
      null !== this.boundingBox && this.computeBoundingBox(),
      null !== this.boundingSphere && this.computeBoundingSphere(),
      this
    );
  }
  applyQuaternion(e) {
    return fn.makeRotationFromQuaternion(e), this.applyMatrix4(fn), this;
  }
  rotateX(e) {
    return fn.makeRotationX(e), this.applyMatrix4(fn), this;
  }
  rotateY(e) {
    return fn.makeRotationY(e), this.applyMatrix4(fn), this;
  }
  rotateZ(e) {
    return fn.makeRotationZ(e), this.applyMatrix4(fn), this;
  }
  translate(e, t, n) {
    return fn.makeTranslation(e, t, n), this.applyMatrix4(fn), this;
  }
  scale(e, t, n) {
    return fn.makeScale(e, t, n), this.applyMatrix4(fn), this;
  }
  lookAt(e) {
    return Cu.lookAt(e), Cu.updateMatrix(), this.applyMatrix4(Cu.matrix), this;
  }
  center() {
    return (
      this.computeBoundingBox(),
      this.boundingBox.getCenter(Nr).negate(),
      this.translate(Nr.x, Nr.y, Nr.z),
      this
    );
  }
  setFromPoints(e) {
    const t = [];
    for (let n = 0, r = e.length; n < r; n++) {
      const r = e[n];
      t.push(r.x, r.y, r.z || 0);
    }
    return this.setAttribute("position", new Wn(t, 3)), this;
  }
  computeBoundingBox() {
    null === this.boundingBox && (this.boundingBox = new Ro());
    const e = this.attributes.position,
      t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute)
      return (
        console.error(
          "THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",
          this
        ),
        void this.boundingBox.set(
          new F(-1 / 0, -1 / 0, -1 / 0),
          new F(1 / 0, 1 / 0, 1 / 0)
        )
      );
    if (void 0 !== e) {
      if ((this.boundingBox.setFromBufferAttribute(e), t))
        for (let e = 0, n = t.length; e < n; e++) {
          const n = t[e];
          tn.setFromBufferAttribute(n),
            this.morphTargetsRelative
              ? (Tt.addVectors(this.boundingBox.min, tn.min),
                this.boundingBox.expandByPoint(Tt),
                Tt.addVectors(this.boundingBox.max, tn.max),
                this.boundingBox.expandByPoint(Tt))
              : (this.boundingBox.expandByPoint(tn.min),
                this.boundingBox.expandByPoint(tn.max));
        }
    } else this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) ||
      isNaN(this.boundingBox.min.y) ||
      isNaN(this.boundingBox.min.z)) &&
      console.error(
        'THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',
        this
      );
  }
  computeBoundingSphere() {
    null === this.boundingSphere && (this.boundingSphere = new hd());
    const e = this.attributes.position,
      t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute)
      return (
        console.error(
          "THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",
          this
        ),
        void this.boundingSphere.set(new F(), 1 / 0)
      );
    if (e) {
      const n = this.boundingSphere.center;
      if ((tn.setFromBufferAttribute(e), t))
        for (let e = 0, n = t.length; e < n; e++) {
          const n = t[e];
          Bs.setFromBufferAttribute(n),
            this.morphTargetsRelative
              ? (Tt.addVectors(tn.min, Bs.min),
                tn.expandByPoint(Tt),
                Tt.addVectors(tn.max, Bs.max),
                tn.expandByPoint(Tt))
              : (tn.expandByPoint(Bs.min), tn.expandByPoint(Bs.max));
        }
      tn.getCenter(n);
      let r = 0;
      for (let t = 0, i = e.count; t < i; t++)
        Tt.fromBufferAttribute(e, t),
          (r = Math.max(r, n.distanceToSquared(Tt)));
      if (t)
        for (let i = 0, a = t.length; i < a; i++) {
          const a = t[i],
            o = this.morphTargetsRelative;
          for (let t = 0, i = a.count; t < i; t++)
            Tt.fromBufferAttribute(a, t),
              o && (Nr.fromBufferAttribute(e, t), Tt.add(Nr)),
              (r = Math.max(r, n.distanceToSquared(Tt)));
        }
      (this.boundingSphere.radius = Math.sqrt(r)),
        isNaN(this.boundingSphere.radius) &&
          console.error(
            'THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',
            this
          );
    }
  }
  computeTangents() {
    const e = this.index,
      t = this.attributes;
    if (
      null === e ||
      void 0 === t.position ||
      void 0 === t.normal ||
      void 0 === t.uv
    )
      return void console.error(
        "THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)"
      );
    const n = t.position,
      r = t.normal,
      i = t.uv;
    !1 === this.hasAttribute("tangent") &&
      this.setAttribute("tangent", new Gn(new Float32Array(4 * n.count), 4));
    const a = this.getAttribute("tangent"),
      o = [],
      s = [];
    for (let e = 0; e < n.count; e++) (o[e] = new F()), (s[e] = new F());
    const l = new F(),
      c = new F(),
      u = new F(),
      d = new Ve(),
      h = new Ve(),
      f = new Ve(),
      p = new F(),
      m = new F();
    function g(e, t, r) {
      l.fromBufferAttribute(n, e),
        c.fromBufferAttribute(n, t),
        u.fromBufferAttribute(n, r),
        d.fromBufferAttribute(i, e),
        h.fromBufferAttribute(i, t),
        f.fromBufferAttribute(i, r),
        c.sub(l),
        u.sub(l),
        h.sub(d),
        f.sub(d);
      const a = 1 / (h.x * f.y - f.x * h.y);
      isFinite(a) &&
        (p
          .copy(c)
          .multiplyScalar(f.y)
          .addScaledVector(u, -h.y)
          .multiplyScalar(a),
        m
          .copy(u)
          .multiplyScalar(h.x)
          .addScaledVector(c, -f.x)
          .multiplyScalar(a),
        o[e].add(p),
        o[t].add(p),
        o[r].add(p),
        s[e].add(m),
        s[t].add(m),
        s[r].add(m));
    }
    let v = this.groups;
    0 === v.length && (v = [{ start: 0, count: e.count }]);
    for (let t = 0, n = v.length; t < n; ++t) {
      const n = v[t],
        r = n.start;
      for (let t = r, i = r + n.count; t < i; t += 3)
        g(e.getX(t + 0), e.getX(t + 1), e.getX(t + 2));
    }
    const _ = new F(),
      x = new F(),
      y = new F(),
      S = new F();
    function M(e) {
      y.fromBufferAttribute(r, e), S.copy(y);
      const t = o[e];
      _.copy(t),
        _.sub(y.multiplyScalar(y.dot(t))).normalize(),
        x.crossVectors(S, t);
      const n = x.dot(s[e]) < 0 ? -1 : 1;
      a.setXYZW(e, _.x, _.y, _.z, n);
    }
    for (let t = 0, n = v.length; t < n; ++t) {
      const n = v[t],
        r = n.start;
      for (let t = r, i = r + n.count; t < i; t += 3)
        M(e.getX(t + 0)), M(e.getX(t + 1)), M(e.getX(t + 2));
    }
  }
  computeVertexNormals() {
    const e = this.index,
      t = this.getAttribute("position");
    if (void 0 !== t) {
      let n = this.getAttribute("normal");
      if (void 0 === n)
        (n = new Gn(new Float32Array(3 * t.count), 3)),
          this.setAttribute("normal", n);
      else for (let e = 0, t = n.count; e < t; e++) n.setXYZ(e, 0, 0, 0);
      const r = new F(),
        i = new F(),
        a = new F(),
        o = new F(),
        s = new F(),
        l = new F(),
        c = new F(),
        u = new F();
      if (e)
        for (let d = 0, h = e.count; d < h; d += 3) {
          const h = e.getX(d + 0),
            f = e.getX(d + 1),
            p = e.getX(d + 2);
          r.fromBufferAttribute(t, h),
            i.fromBufferAttribute(t, f),
            a.fromBufferAttribute(t, p),
            c.subVectors(a, i),
            u.subVectors(r, i),
            c.cross(u),
            o.fromBufferAttribute(n, h),
            s.fromBufferAttribute(n, f),
            l.fromBufferAttribute(n, p),
            o.add(c),
            s.add(c),
            l.add(c),
            n.setXYZ(h, o.x, o.y, o.z),
            n.setXYZ(f, s.x, s.y, s.z),
            n.setXYZ(p, l.x, l.y, l.z);
        }
      else
        for (let e = 0, o = t.count; e < o; e += 3)
          r.fromBufferAttribute(t, e + 0),
            i.fromBufferAttribute(t, e + 1),
            a.fromBufferAttribute(t, e + 2),
            c.subVectors(a, i),
            u.subVectors(r, i),
            c.cross(u),
            n.setXYZ(e + 0, c.x, c.y, c.z),
            n.setXYZ(e + 1, c.x, c.y, c.z),
            n.setXYZ(e + 2, c.x, c.y, c.z);
      this.normalizeNormals(), (n.needsUpdate = !0);
    }
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, n = e.count; t < n; t++)
      Tt.fromBufferAttribute(e, t),
        Tt.normalize(),
        e.setXYZ(t, Tt.x, Tt.y, Tt.z);
  }
  toNonIndexed() {
    function e(e, t) {
      const n = e.array,
        r = e.itemSize,
        i = e.normalized,
        a = new n.constructor(t.length * r);
      let o = 0,
        s = 0;
      for (let i = 0, l = t.length; i < l; i++) {
        o = e.isInterleavedBufferAttribute
          ? t[i] * e.data.stride + e.offset
          : t[i] * r;
        for (let e = 0; e < r; e++) a[s++] = n[o++];
      }
      return new Gn(a, r, i);
    }
    if (null === this.index)
      return (
        console.warn(
          "THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."
        ),
        this
      );
    const t = new Yi(),
      n = this.index.array,
      r = this.attributes;
    for (const i in r) {
      const a = e(r[i], n);
      t.setAttribute(i, a);
    }
    const i = this.morphAttributes;
    for (const r in i) {
      const a = [],
        o = i[r];
      for (let t = 0, r = o.length; t < r; t++) {
        const r = e(o[t], n);
        a.push(r);
      }
      t.morphAttributes[r] = a;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const a = this.groups;
    for (let e = 0, n = a.length; e < n; e++) {
      const n = a[e];
      t.addGroup(n.start, n.count, n.materialIndex);
    }
    return t;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.6,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON",
      },
    };
    if (
      ((e.uuid = this.uuid),
      (e.type = this.type),
      "" !== this.name && (e.name = this.name),
      Object.keys(this.userData).length > 0 && (e.userData = this.userData),
      void 0 !== this.parameters)
    ) {
      const t = this.parameters;
      for (const n in t) void 0 !== t[n] && (e[n] = t[n]);
      return e;
    }
    e.data = { attributes: {} };
    const t = this.index;
    null !== t &&
      (e.data.index = {
        type: t.array.constructor.name,
        array: Array.prototype.slice.call(t.array),
      });
    const n = this.attributes;
    for (const t in n) {
      const r = n[t];
      e.data.attributes[t] = r.toJSON(e.data);
    }
    const r = {};
    let i = !1;
    for (const t in this.morphAttributes) {
      const n = this.morphAttributes[t],
        a = [];
      for (let t = 0, r = n.length; t < r; t++) {
        const r = n[t];
        a.push(r.toJSON(e.data));
      }
      a.length > 0 && ((r[t] = a), (i = !0));
    }
    i &&
      ((e.data.morphAttributes = r),
      (e.data.morphTargetsRelative = this.morphTargetsRelative));
    const a = this.groups;
    a.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(a)));
    const o = this.boundingSphere;
    return (
      null !== o &&
        (e.data.boundingSphere = {
          center: o.center.toArray(),
          radius: o.radius,
        }),
      e
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    (this.index = null),
      (this.attributes = {}),
      (this.morphAttributes = {}),
      (this.groups = []),
      (this.boundingBox = null),
      (this.boundingSphere = null);
    const t = {};
    this.name = e.name;
    const n = e.index;
    null !== n && this.setIndex(n.clone(t));
    const r = e.attributes;
    for (const e in r) {
      const n = r[e];
      this.setAttribute(e, n.clone(t));
    }
    const i = e.morphAttributes;
    for (const e in i) {
      const n = [],
        r = i[e];
      for (let e = 0, i = r.length; e < i; e++) n.push(r[e].clone(t));
      this.morphAttributes[e] = n;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const a = e.groups;
    for (let e = 0, t = a.length; e < t; e++) {
      const t = a[e];
      this.addGroup(t.start, t.count, t.materialIndex);
    }
    const o = e.boundingBox;
    null !== o && (this.boundingBox = o.clone());
    const s = e.boundingSphere;
    return (
      null !== s && (this.boundingSphere = s.clone()),
      (this.drawRange.start = e.drawRange.start),
      (this.drawRange.count = e.drawRange.count),
      (this.userData = e.userData),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const Qh = new St(),
  Ki = new ry(),
  oa = new hd(),
  Jh = new F(),
  Fr = new F(),
  Or = new F(),
  zr = new F(),
  Ru = new F(),
  aa = new F(),
  la = new Ve(),
  ua = new Ve(),
  ca = new Ve(),
  ep = new F(),
  tp = new F(),
  np = new F(),
  fa = new F(),
  da = new F();
class Bn extends on {
  constructor(e = new Yi(), t = new l_()) {
    super(),
      (this.isMesh = !0),
      (this.type = "Mesh"),
      (this.geometry = e),
      (this.material = t),
      this.updateMorphTargets();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      void 0 !== e.morphTargetInfluences &&
        (this.morphTargetInfluences = e.morphTargetInfluences.slice()),
      void 0 !== e.morphTargetDictionary &&
        (this.morphTargetDictionary = Object.assign(
          {},
          e.morphTargetDictionary
        )),
      (this.material = Array.isArray(e.material)
        ? e.material.slice()
        : e.material),
      (this.geometry = e.geometry),
      this
    );
  }
  updateMorphTargets() {
    const e = this.geometry.morphAttributes,
      t = Object.keys(e);
    if (t.length > 0) {
      const n = e[t[0]];
      if (void 0 !== n) {
        (this.morphTargetInfluences = []), (this.morphTargetDictionary = {});
        for (let e = 0, t = n.length; e < t; e++) {
          const t = n[e].name || String(e);
          this.morphTargetInfluences.push(0),
            (this.morphTargetDictionary[t] = e);
        }
      }
    }
  }
  getVertexPosition(e, t) {
    const n = this.geometry,
      r = n.attributes.position,
      i = n.morphAttributes.position,
      a = n.morphTargetsRelative;
    t.fromBufferAttribute(r, e);
    const o = this.morphTargetInfluences;
    if (i && o) {
      aa.set(0, 0, 0);
      for (let n = 0, r = i.length; n < r; n++) {
        const r = o[n],
          s = i[n];
        0 !== r &&
          (Ru.fromBufferAttribute(s, e),
          a ? aa.addScaledVector(Ru, r) : aa.addScaledVector(Ru.sub(t), r));
      }
      t.add(aa);
    }
    return t;
  }
  raycast(e, t) {
    const n = this.geometry,
      r = this.material,
      i = this.matrixWorld;
    void 0 !== r &&
      (null === n.boundingSphere && n.computeBoundingSphere(),
      oa.copy(n.boundingSphere),
      oa.applyMatrix4(i),
      Ki.copy(e.ray).recast(e.near),
      (!1 !== oa.containsPoint(Ki.origin) ||
        !(
          null === Ki.intersectSphere(oa, Jh) ||
          Ki.origin.distanceToSquared(Jh) > (e.far - e.near) ** 2
        )) &&
        (Qh.copy(i).invert(),
        Ki.copy(e.ray).applyMatrix4(Qh),
        (null === n.boundingBox || !1 !== Ki.intersectsBox(n.boundingBox)) &&
          this._computeIntersections(e, t, Ki)));
  }
  _computeIntersections(e, t, n) {
    let r;
    const i = this.geometry,
      a = this.material,
      o = i.index,
      s = i.attributes.position,
      l = i.attributes.uv,
      c = i.attributes.uv1,
      u = i.attributes.normal,
      d = i.groups,
      h = i.drawRange;
    if (null !== o)
      if (Array.isArray(a))
        for (let i = 0, s = d.length; i < s; i++) {
          const s = d[i],
            f = a[s.materialIndex];
          for (
            let i = Math.max(s.start, h.start),
              a = Math.min(
                o.count,
                Math.min(s.start + s.count, h.start + h.count)
              );
            i < a;
            i += 3
          ) {
            (r = ha(
              this,
              f,
              e,
              n,
              l,
              c,
              u,
              o.getX(i),
              o.getX(i + 1),
              o.getX(i + 2)
            )),
              r &&
                ((r.faceIndex = Math.floor(i / 3)),
                (r.face.materialIndex = s.materialIndex),
                t.push(r));
          }
        }
      else {
        for (
          let i = Math.max(0, h.start),
            s = Math.min(o.count, h.start + h.count);
          i < s;
          i += 3
        ) {
          (r = ha(
            this,
            a,
            e,
            n,
            l,
            c,
            u,
            o.getX(i),
            o.getX(i + 1),
            o.getX(i + 2)
          )),
            r && ((r.faceIndex = Math.floor(i / 3)), t.push(r));
        }
      }
    else if (void 0 !== s)
      if (Array.isArray(a))
        for (let i = 0, o = d.length; i < o; i++) {
          const o = d[i],
            f = a[o.materialIndex];
          for (
            let i = Math.max(o.start, h.start),
              a = Math.min(
                s.count,
                Math.min(o.start + o.count, h.start + h.count)
              );
            i < a;
            i += 3
          ) {
            (r = ha(this, f, e, n, l, c, u, i, i + 1, i + 2)),
              r &&
                ((r.faceIndex = Math.floor(i / 3)),
                (r.face.materialIndex = o.materialIndex),
                t.push(r));
          }
        }
      else {
        for (
          let i = Math.max(0, h.start),
            o = Math.min(s.count, h.start + h.count);
          i < o;
          i += 3
        ) {
          (r = ha(this, a, e, n, l, c, u, i, i + 1, i + 2)),
            r && ((r.faceIndex = Math.floor(i / 3)), t.push(r));
        }
      }
  }
}
function hy(e, t, n, r, i, a, o, s) {
  let l;
  if (
    ((l =
      t.side === Kt
        ? r.intersectTriangle(o, a, i, !0, s)
        : r.intersectTriangle(i, a, o, t.side === Hi, s)),
    null === l)
  )
    return null;
  da.copy(s), da.applyMatrix4(e.matrixWorld);
  const c = n.ray.origin.distanceTo(da);
  return c < n.near || c > n.far
    ? null
    : { distance: c, point: da.clone(), object: e };
}
function ha(e, t, n, r, i, a, o, s, l, c) {
  e.getVertexPosition(s, Fr),
    e.getVertexPosition(l, Or),
    e.getVertexPosition(c, zr);
  const u = hy(e, t, n, r, Fr, Or, zr, fa);
  if (u) {
    i &&
      (la.fromBufferAttribute(i, s),
      ua.fromBufferAttribute(i, l),
      ca.fromBufferAttribute(i, c),
      (u.uv = kn.getInterpolation(fa, Fr, Or, zr, la, ua, ca, new Ve()))),
      a &&
        (la.fromBufferAttribute(a, s),
        ua.fromBufferAttribute(a, l),
        ca.fromBufferAttribute(a, c),
        (u.uv1 = kn.getInterpolation(fa, Fr, Or, zr, la, ua, ca, new Ve()))),
      o &&
        (ep.fromBufferAttribute(o, s),
        tp.fromBufferAttribute(o, l),
        np.fromBufferAttribute(o, c),
        (u.normal = kn.getInterpolation(fa, Fr, Or, zr, ep, tp, np, new F())),
        u.normal.dot(r.direction) > 0 && u.normal.multiplyScalar(-1));
    const e = { a: s, b: l, c: c, normal: new F(), materialIndex: 0 };
    kn.getNormal(Fr, Or, zr, e.normal), (u.face = e);
  }
  return u;
}
class Po extends Yi {
  constructor(e = 1, t = 1, n = 1, r = 1, i = 1, a = 1) {
    super(),
      (this.type = "BoxGeometry"),
      (this.parameters = {
        width: e,
        height: t,
        depth: n,
        widthSegments: r,
        heightSegments: i,
        depthSegments: a,
      });
    const o = this;
    (r = Math.floor(r)), (i = Math.floor(i)), (a = Math.floor(a));
    const s = [],
      l = [],
      c = [],
      u = [];
    let d = 0,
      h = 0;
    function f(e, t, n, r, i, a, f, p, m, g, v) {
      const _ = a / m,
        x = f / g,
        y = a / 2,
        S = f / 2,
        M = p / 2,
        E = m + 1,
        b = g + 1;
      let T = 0,
        w = 0;
      const A = new F();
      for (let a = 0; a < b; a++) {
        const o = a * x - S;
        for (let s = 0; s < E; s++) {
          const d = s * _ - y;
          (A[e] = d * r),
            (A[t] = o * i),
            (A[n] = M),
            l.push(A.x, A.y, A.z),
            (A[e] = 0),
            (A[t] = 0),
            (A[n] = p > 0 ? 1 : -1),
            c.push(A.x, A.y, A.z),
            u.push(s / m),
            u.push(1 - a / g),
            (T += 1);
        }
      }
      for (let e = 0; e < g; e++)
        for (let t = 0; t < m; t++) {
          const n = d + t + E * e,
            r = d + t + E * (e + 1),
            i = d + (t + 1) + E * (e + 1),
            a = d + (t + 1) + E * e;
          s.push(n, r, a), s.push(r, i, a), (w += 6);
        }
      o.addGroup(h, w, v), (h += w), (d += T);
    }
    f("z", "y", "x", -1, -1, n, t, e, a, i, 0),
      f("z", "y", "x", 1, -1, n, t, -e, a, i, 1),
      f("x", "z", "y", 1, 1, e, n, t, r, a, 2),
      f("x", "z", "y", 1, -1, e, n, -t, r, a, 3),
      f("x", "y", "z", 1, -1, e, t, n, r, i, 4),
      f("x", "y", "z", -1, -1, e, t, -n, r, i, 5),
      this.setIndex(s),
      this.setAttribute("position", new Wn(l, 3)),
      this.setAttribute("normal", new Wn(c, 3)),
      this.setAttribute("uv", new Wn(u, 2));
  }
  copy(e) {
    return (
      super.copy(e), (this.parameters = Object.assign({}, e.parameters)), this
    );
  }
  static fromJSON(e) {
    return new Po(
      e.width,
      e.height,
      e.depth,
      e.widthSegments,
      e.heightSegments,
      e.depthSegments
    );
  }
}
function Ms(e) {
  const t = {};
  for (const n in e) {
    t[n] = {};
    for (const r in e[n]) {
      const i = e[n][r];
      i &&
      (i.isColor ||
        i.isMatrix3 ||
        i.isMatrix4 ||
        i.isVector2 ||
        i.isVector3 ||
        i.isVector4 ||
        i.isTexture ||
        i.isQuaternion)
        ? i.isRenderTargetTexture
          ? (console.warn(
              "UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."
            ),
            (t[n][r] = null))
          : (t[n][r] = i.clone())
        : Array.isArray(i)
        ? (t[n][r] = i.slice())
        : (t[n][r] = i);
    }
  }
  return t;
}
function zt(e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = Ms(e[n]);
    for (const e in r) t[e] = r[e];
  }
  return t;
}
function py(e) {
  const t = [];
  for (let n = 0; n < e.length; n++) t.push(e[n].clone());
  return t;
}
function f_(e) {
  const t = e.getRenderTarget();
  return null === t
    ? e.outputColorSpace
    : !0 === t.isXRRenderTarget
    ? t.texture.colorSpace
    : $e.workingColorSpace;
}
const my = { clone: Ms, merge: zt };
var gy =
    "void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",
  _y = "void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}";
class di extends Ll {
  constructor(e) {
    super(),
      (this.isShaderMaterial = !0),
      (this.type = "ShaderMaterial"),
      (this.defines = {}),
      (this.uniforms = {}),
      (this.uniformsGroups = []),
      (this.vertexShader = gy),
      (this.fragmentShader = _y),
      (this.linewidth = 1),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.fog = !1),
      (this.lights = !1),
      (this.clipping = !1),
      (this.forceSinglePass = !0),
      (this.extensions = { clipCullDistance: !1, multiDraw: !1 }),
      (this.defaultAttributeValues = {
        color: [1, 1, 1],
        uv: [0, 0],
        uv1: [0, 0],
      }),
      (this.index0AttributeName = void 0),
      (this.uniformsNeedUpdate = !1),
      (this.glslVersion = null),
      void 0 !== e && this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.fragmentShader = e.fragmentShader),
      (this.vertexShader = e.vertexShader),
      (this.uniforms = Ms(e.uniforms)),
      (this.uniformsGroups = py(e.uniformsGroups)),
      (this.defines = Object.assign({}, e.defines)),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.fog = e.fog),
      (this.lights = e.lights),
      (this.clipping = e.clipping),
      (this.extensions = Object.assign({}, e.extensions)),
      (this.glslVersion = e.glslVersion),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    (t.glslVersion = this.glslVersion), (t.uniforms = {});
    for (const n in this.uniforms) {
      const r = this.uniforms[n].value;
      r && r.isTexture
        ? (t.uniforms[n] = { type: "t", value: r.toJSON(e).uuid })
        : r && r.isColor
        ? (t.uniforms[n] = { type: "c", value: r.getHex() })
        : r && r.isVector2
        ? (t.uniforms[n] = { type: "v2", value: r.toArray() })
        : r && r.isVector3
        ? (t.uniforms[n] = { type: "v3", value: r.toArray() })
        : r && r.isVector4
        ? (t.uniforms[n] = { type: "v4", value: r.toArray() })
        : r && r.isMatrix3
        ? (t.uniforms[n] = { type: "m3", value: r.toArray() })
        : r && r.isMatrix4
        ? (t.uniforms[n] = { type: "m4", value: r.toArray() })
        : (t.uniforms[n] = { value: r });
    }
    Object.keys(this.defines).length > 0 && (t.defines = this.defines),
      (t.vertexShader = this.vertexShader),
      (t.fragmentShader = this.fragmentShader),
      (t.lights = this.lights),
      (t.clipping = this.clipping);
    const n = {};
    for (const e in this.extensions) !0 === this.extensions[e] && (n[e] = !0);
    return Object.keys(n).length > 0 && (t.extensions = n), t;
  }
}
class d_ extends on {
  constructor() {
    super(),
      (this.isCamera = !0),
      (this.type = "Camera"),
      (this.matrixWorldInverse = new St()),
      (this.projectionMatrix = new St()),
      (this.projectionMatrixInverse = new St()),
      (this.coordinateSystem = ri);
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      this.matrixWorldInverse.copy(e.matrixWorldInverse),
      this.projectionMatrix.copy(e.projectionMatrix),
      this.projectionMatrixInverse.copy(e.projectionMatrixInverse),
      (this.coordinateSystem = e.coordinateSystem),
      this
    );
  }
  getWorldDirection(e) {
    return super.getWorldDirection(e).negate();
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e),
      this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(e, t) {
    super.updateWorldMatrix(e, t),
      this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Si = new F(),
  ip = new Ve(),
  rp = new Ve();
class pn extends d_ {
  constructor(e = 50, t = 1, n = 0.1, r = 2e3) {
    super(),
      (this.isPerspectiveCamera = !0),
      (this.type = "PerspectiveCamera"),
      (this.fov = e),
      (this.zoom = 1),
      (this.near = n),
      (this.far = r),
      (this.focus = 10),
      (this.aspect = t),
      (this.view = null),
      (this.filmGauge = 35),
      (this.filmOffset = 0),
      this.updateProjectionMatrix();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.fov = e.fov),
      (this.zoom = e.zoom),
      (this.near = e.near),
      (this.far = e.far),
      (this.focus = e.focus),
      (this.aspect = e.aspect),
      (this.view = null === e.view ? null : Object.assign({}, e.view)),
      (this.filmGauge = e.filmGauge),
      (this.filmOffset = e.filmOffset),
      this
    );
  }
  setFocalLength(e) {
    const t = (0.5 * this.getFilmHeight()) / e;
    (this.fov = 2 * uf * Math.atan(t)), this.updateProjectionMatrix();
  }
  getFocalLength() {
    const e = Math.tan(0.5 * cu * this.fov);
    return (0.5 * this.getFilmHeight()) / e;
  }
  getEffectiveFOV() {
    return 2 * uf * Math.atan(Math.tan(0.5 * cu * this.fov) / this.zoom);
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  getViewBounds(e, t, n) {
    Si.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse),
      t.set(Si.x, Si.y).multiplyScalar(-e / Si.z),
      Si.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse),
      n.set(Si.x, Si.y).multiplyScalar(-e / Si.z);
  }
  getViewSize(e, t) {
    return this.getViewBounds(e, ip, rp), t.subVectors(rp, ip);
  }
  setViewOffset(e, t, n, r, i, a) {
    (this.aspect = e / t),
      null === this.view &&
        (this.view = {
          enabled: !0,
          fullWidth: 1,
          fullHeight: 1,
          offsetX: 0,
          offsetY: 0,
          width: 1,
          height: 1,
        }),
      (this.view.enabled = !0),
      (this.view.fullWidth = e),
      (this.view.fullHeight = t),
      (this.view.offsetX = n),
      (this.view.offsetY = r),
      (this.view.width = i),
      (this.view.height = a),
      this.updateProjectionMatrix();
  }
  clearViewOffset() {
    null !== this.view && (this.view.enabled = !1),
      this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = this.near;
    let t = (e * Math.tan(0.5 * cu * this.fov)) / this.zoom,
      n = 2 * t,
      r = this.aspect * n,
      i = -0.5 * r;
    const a = this.view;
    if (null !== this.view && this.view.enabled) {
      const e = a.fullWidth,
        o = a.fullHeight;
      (i += (a.offsetX * r) / e),
        (t -= (a.offsetY * n) / o),
        (r *= a.width / e),
        (n *= a.height / o);
    }
    const o = this.filmOffset;
    0 !== o && (i += (e * o) / this.getFilmWidth()),
      this.projectionMatrix.makePerspective(
        i,
        i + r,
        t,
        t - n,
        e,
        this.far,
        this.coordinateSystem
      ),
      this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.object.fov = this.fov),
      (t.object.zoom = this.zoom),
      (t.object.near = this.near),
      (t.object.far = this.far),
      (t.object.focus = this.focus),
      (t.object.aspect = this.aspect),
      null !== this.view && (t.object.view = Object.assign({}, this.view)),
      (t.object.filmGauge = this.filmGauge),
      (t.object.filmOffset = this.filmOffset),
      t
    );
  }
}
const kr = -90,
  Br = 1;
class vy extends on {
  constructor(e, t, n) {
    super(),
      (this.type = "CubeCamera"),
      (this.renderTarget = n),
      (this.coordinateSystem = null),
      (this.activeMipmapLevel = 0);
    const r = new pn(kr, 1, e, t);
    (r.layers = this.layers), this.add(r);
    const i = new pn(kr, 1, e, t);
    (i.layers = this.layers), this.add(i);
    const a = new pn(kr, 1, e, t);
    (a.layers = this.layers), this.add(a);
    const o = new pn(kr, 1, e, t);
    (o.layers = this.layers), this.add(o);
    const s = new pn(kr, 1, e, t);
    (s.layers = this.layers), this.add(s);
    const l = new pn(kr, 1, e, t);
    (l.layers = this.layers), this.add(l);
  }
  updateCoordinateSystem() {
    const e = this.coordinateSystem,
      t = this.children.concat(),
      [n, r, i, a, o, s] = t;
    for (const e of t) this.remove(e);
    if (e === ri)
      n.up.set(0, 1, 0),
        n.lookAt(1, 0, 0),
        r.up.set(0, 1, 0),
        r.lookAt(-1, 0, 0),
        i.up.set(0, 0, -1),
        i.lookAt(0, 1, 0),
        a.up.set(0, 0, 1),
        a.lookAt(0, -1, 0),
        o.up.set(0, 1, 0),
        o.lookAt(0, 0, 1),
        s.up.set(0, 1, 0),
        s.lookAt(0, 0, -1);
    else {
      if (e !== cl)
        throw new Error(
          "THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " +
            e
        );
      n.up.set(0, -1, 0),
        n.lookAt(-1, 0, 0),
        r.up.set(0, -1, 0),
        r.lookAt(1, 0, 0),
        i.up.set(0, 0, 1),
        i.lookAt(0, 1, 0),
        a.up.set(0, 0, -1),
        a.lookAt(0, -1, 0),
        o.up.set(0, -1, 0),
        o.lookAt(0, 0, 1),
        s.up.set(0, -1, 0),
        s.lookAt(0, 0, -1);
    }
    for (const e of t) this.add(e), e.updateMatrixWorld();
  }
  update(e, t) {
    null === this.parent && this.updateMatrixWorld();
    const { renderTarget: n, activeMipmapLevel: r } = this;
    this.coordinateSystem !== e.coordinateSystem &&
      ((this.coordinateSystem = e.coordinateSystem),
      this.updateCoordinateSystem());
    const [i, a, o, s, l, c] = this.children,
      u = e.getRenderTarget(),
      d = e.getActiveCubeFace(),
      h = e.getActiveMipmapLevel(),
      f = e.xr.enabled;
    e.xr.enabled = !1;
    const p = n.texture.generateMipmaps;
    (n.texture.generateMipmaps = !1),
      e.setRenderTarget(n, 0, r),
      e.render(t, i),
      e.setRenderTarget(n, 1, r),
      e.render(t, a),
      e.setRenderTarget(n, 2, r),
      e.render(t, o),
      e.setRenderTarget(n, 3, r),
      e.render(t, s),
      e.setRenderTarget(n, 4, r),
      e.render(t, l),
      (n.texture.generateMipmaps = p),
      e.setRenderTarget(n, 5, r),
      e.render(t, c),
      e.setRenderTarget(u, d, h),
      (e.xr.enabled = f),
      (n.texture.needsPMREMUpdate = !0);
  }
}
class h_ extends Zt {
  constructor(e, t, n, r, i, a, o, s, l, c) {
    super(
      (e = void 0 !== e ? e : []),
      (t = void 0 !== t ? t : vs),
      n,
      r,
      i,
      a,
      o,
      s,
      l,
      c
    ),
      (this.isCubeTexture = !0),
      (this.flipY = !1);
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class xy extends yr {
  constructor(e = 1, t = {}) {
    super(e, e, t), (this.isWebGLCubeRenderTarget = !0);
    const n = { width: e, height: e, depth: 1 },
      r = [n, n, n, n, n, n];
    (this.texture = new h_(
      r,
      t.mapping,
      t.wrapS,
      t.wrapT,
      t.magFilter,
      t.minFilter,
      t.format,
      t.type,
      t.anisotropy,
      t.colorSpace
    )),
      (this.texture.isRenderTargetTexture = !0),
      (this.texture.generateMipmaps =
        void 0 !== t.generateMipmaps && t.generateMipmaps),
      (this.texture.minFilter = void 0 !== t.minFilter ? t.minFilter : Rn);
  }
  fromEquirectangularTexture(e, t) {
    (this.texture.type = t.type),
      (this.texture.colorSpace = t.colorSpace),
      (this.texture.generateMipmaps = t.generateMipmaps),
      (this.texture.minFilter = t.minFilter),
      (this.texture.magFilter = t.magFilter);
    const n = {
        uniforms: { tEquirect: { value: null } },
        vertexShader:
          "\n\n\t\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\t\tvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\n\t\t\t\t\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n\n\t\t\t\t}\n\n\t\t\t\tvoid main() {\n\n\t\t\t\t\tvWorldDirection = transformDirection( position, modelMatrix );\n\n\t\t\t\t\t#include <begin_vertex>\n\t\t\t\t\t#include <project_vertex>\n\n\t\t\t\t}\n\t\t\t",
        fragmentShader:
          "\n\n\t\t\t\tuniform sampler2D tEquirect;\n\n\t\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\t\t#include <common>\n\n\t\t\t\tvoid main() {\n\n\t\t\t\t\tvec3 direction = normalize( vWorldDirection );\n\n\t\t\t\t\tvec2 sampleUV = equirectUv( direction );\n\n\t\t\t\t\tgl_FragColor = texture2D( tEquirect, sampleUV );\n\n\t\t\t\t}\n\t\t\t",
      },
      r = new Po(5, 5, 5),
      i = new di({
        name: "CubemapFromEquirect",
        uniforms: Ms(n.uniforms),
        vertexShader: n.vertexShader,
        fragmentShader: n.fragmentShader,
        side: Kt,
        blending: 0,
      });
    i.uniforms.tEquirect.value = t;
    const a = new Bn(r, i),
      o = t.minFilter;
    return (
      t.minFilter === cr && (t.minFilter = Rn),
      new vy(1, 10, this).update(e, a),
      (t.minFilter = o),
      a.geometry.dispose(),
      a.material.dispose(),
      this
    );
  }
  clear(e, t, n, r) {
    const i = e.getRenderTarget();
    for (let i = 0; i < 6; i++) e.setRenderTarget(this, i), e.clear(t, n, r);
    e.setRenderTarget(i);
  }
}
const Pu = new F(),
  yy = new F(),
  Sy = new Ue();
class nr {
  constructor(e = new F(1, 0, 0), t = 0) {
    (this.isPlane = !0), (this.normal = e), (this.constant = t);
  }
  set(e, t) {
    return this.normal.copy(e), (this.constant = t), this;
  }
  setComponents(e, t, n, r) {
    return this.normal.set(e, t, n), (this.constant = r), this;
  }
  setFromNormalAndCoplanarPoint(e, t) {
    return this.normal.copy(e), (this.constant = -t.dot(this.normal)), this;
  }
  setFromCoplanarPoints(e, t, n) {
    const r = Pu.subVectors(n, t).cross(yy.subVectors(e, t)).normalize();
    return this.setFromNormalAndCoplanarPoint(r, e), this;
  }
  copy(e) {
    return this.normal.copy(e.normal), (this.constant = e.constant), this;
  }
  normalize() {
    const e = 1 / this.normal.length();
    return this.normal.multiplyScalar(e), (this.constant *= e), this;
  }
  negate() {
    return (this.constant *= -1), this.normal.negate(), this;
  }
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius;
  }
  projectPoint(e, t) {
    return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e));
  }
  intersectLine(e, t) {
    const n = e.delta(Pu),
      r = this.normal.dot(n);
    if (0 === r)
      return 0 === this.distanceToPoint(e.start) ? t.copy(e.start) : null;
    const i = -(e.start.dot(this.normal) + this.constant) / r;
    return i < 0 || i > 1 ? null : t.copy(e.start).addScaledVector(n, i);
  }
  intersectsLine(e) {
    const t = this.distanceToPoint(e.start),
      n = this.distanceToPoint(e.end);
    return (t < 0 && n > 0) || (n < 0 && t > 0);
  }
  intersectsBox(e) {
    return e.intersectsPlane(this);
  }
  intersectsSphere(e) {
    return e.intersectsPlane(this);
  }
  coplanarPoint(e) {
    return e.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(e, t) {
    const n = t || Sy.getNormalMatrix(e),
      r = this.coplanarPoint(Pu).applyMatrix4(e),
      i = this.normal.applyMatrix3(n).normalize();
    return (this.constant = -r.dot(i)), this;
  }
  translate(e) {
    return (this.constant -= e.dot(this.normal)), this;
  }
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Zi = new hd(),
  pa = new F();
class p_ {
  constructor(
    e = new nr(),
    t = new nr(),
    n = new nr(),
    r = new nr(),
    i = new nr(),
    a = new nr()
  ) {
    this.planes = [e, t, n, r, i, a];
  }
  set(e, t, n, r, i, a) {
    const o = this.planes;
    return (
      o[0].copy(e),
      o[1].copy(t),
      o[2].copy(n),
      o[3].copy(r),
      o[4].copy(i),
      o[5].copy(a),
      this
    );
  }
  copy(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) t[n].copy(e.planes[n]);
    return this;
  }
  setFromProjectionMatrix(e, t = ri) {
    const n = this.planes,
      r = e.elements,
      i = r[0],
      a = r[1],
      o = r[2],
      s = r[3],
      l = r[4],
      c = r[5],
      u = r[6],
      d = r[7],
      h = r[8],
      f = r[9],
      p = r[10],
      m = r[11],
      g = r[12],
      v = r[13],
      _ = r[14],
      x = r[15];
    if (
      (n[0].setComponents(s - i, d - l, m - h, x - g).normalize(),
      n[1].setComponents(s + i, d + l, m + h, x + g).normalize(),
      n[2].setComponents(s + a, d + c, m + f, x + v).normalize(),
      n[3].setComponents(s - a, d - c, m - f, x - v).normalize(),
      n[4].setComponents(s - o, d - u, m - p, x - _).normalize(),
      t === ri)
    )
      n[5].setComponents(s + o, d + u, m + p, x + _).normalize();
    else {
      if (t !== cl)
        throw new Error(
          "THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " +
            t
        );
      n[5].setComponents(o, u, p, _).normalize();
    }
    return this;
  }
  intersectsObject(e) {
    if (void 0 !== e.boundingSphere)
      null === e.boundingSphere && e.computeBoundingSphere(),
        Zi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
    else {
      const t = e.geometry;
      null === t.boundingSphere && t.computeBoundingSphere(),
        Zi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
    }
    return this.intersectsSphere(Zi);
  }
  intersectsSprite(e) {
    return (
      Zi.center.set(0, 0, 0),
      (Zi.radius = 0.7071067811865476),
      Zi.applyMatrix4(e.matrixWorld),
      this.intersectsSphere(Zi)
    );
  }
  intersectsSphere(e) {
    const t = this.planes,
      n = e.center,
      r = -e.radius;
    for (let e = 0; e < 6; e++) if (t[e].distanceToPoint(n) < r) return !1;
    return !0;
  }
  intersectsBox(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) {
      const r = t[n];
      if (
        ((pa.x = r.normal.x > 0 ? e.max.x : e.min.x),
        (pa.y = r.normal.y > 0 ? e.max.y : e.min.y),
        (pa.z = r.normal.z > 0 ? e.max.z : e.min.z),
        r.distanceToPoint(pa) < 0)
      )
        return !1;
    }
    return !0;
  }
  containsPoint(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) if (t[n].distanceToPoint(e) < 0) return !1;
    return !0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
function m_() {
  let e = null,
    t = !1,
    n = null,
    r = null;
  function i(t, a) {
    n(t, a), (r = e.requestAnimationFrame(i));
  }
  return {
    start: function () {
      !0 !== t && null !== n && ((r = e.requestAnimationFrame(i)), (t = !0));
    },
    stop: function () {
      e.cancelAnimationFrame(r), (t = !1);
    },
    setAnimationLoop: function (e) {
      n = e;
    },
    setContext: function (t) {
      e = t;
    },
  };
}
function My(e) {
  const t = new WeakMap();
  return {
    get: function (e) {
      return e.isInterleavedBufferAttribute && (e = e.data), t.get(e);
    },
    remove: function (n) {
      n.isInterleavedBufferAttribute && (n = n.data);
      const r = t.get(n);
      r && (e.deleteBuffer(r.buffer), t.delete(n));
    },
    update: function (n, r) {
      if (n.isGLBufferAttribute) {
        const e = t.get(n);
        return void (
          (!e || e.version < n.version) &&
          t.set(n, {
            buffer: n.buffer,
            type: n.type,
            bytesPerElement: n.elementSize,
            version: n.version,
          })
        );
      }
      n.isInterleavedBufferAttribute && (n = n.data);
      const i = t.get(n);
      if (void 0 === i)
        t.set(
          n,
          (function (t, n) {
            const r = t.array,
              i = t.usage,
              a = r.byteLength,
              o = e.createBuffer();
            let s;
            if (
              (e.bindBuffer(n, o),
              e.bufferData(n, r, i),
              t.onUploadCallback(),
              r instanceof Float32Array)
            )
              s = e.FLOAT;
            else if (r instanceof Uint16Array)
              s = t.isFloat16BufferAttribute ? e.HALF_FLOAT : e.UNSIGNED_SHORT;
            else if (r instanceof Int16Array) s = e.SHORT;
            else if (r instanceof Uint32Array) s = e.UNSIGNED_INT;
            else if (r instanceof Int32Array) s = e.INT;
            else if (r instanceof Int8Array) s = e.BYTE;
            else if (r instanceof Uint8Array) s = e.UNSIGNED_BYTE;
            else {
              if (!(r instanceof Uint8ClampedArray))
                throw new Error(
                  "THREE.WebGLAttributes: Unsupported buffer data format: " + r
                );
              s = e.UNSIGNED_BYTE;
            }
            return {
              buffer: o,
              type: s,
              bytesPerElement: r.BYTES_PER_ELEMENT,
              version: t.version,
              size: a,
            };
          })(n, r)
        );
      else if (i.version < n.version) {
        if (i.size !== n.array.byteLength)
          throw new Error(
            "THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported."
          );
        (function (t, n, r) {
          const i = n.array,
            a = n._updateRange,
            o = n.updateRanges;
          if (
            (e.bindBuffer(r, t),
            -1 === a.count && 0 === o.length && e.bufferSubData(r, 0, i),
            0 !== o.length)
          ) {
            for (let t = 0, n = o.length; t < n; t++) {
              const n = o[t];
              e.bufferSubData(
                r,
                n.start * i.BYTES_PER_ELEMENT,
                i,
                n.start,
                n.count
              );
            }
            n.clearUpdateRanges();
          }
          -1 !== a.count &&
            (e.bufferSubData(
              r,
              a.offset * i.BYTES_PER_ELEMENT,
              i,
              a.offset,
              a.count
            ),
            (a.count = -1)),
            n.onUploadCallback();
        })(i.buffer, n, r),
          (i.version = n.version);
      }
    },
  };
}
class bl extends Yi {
  constructor(e = 1, t = 1, n = 1, r = 1) {
    super(),
      (this.type = "PlaneGeometry"),
      (this.parameters = {
        width: e,
        height: t,
        widthSegments: n,
        heightSegments: r,
      });
    const i = e / 2,
      a = t / 2,
      o = Math.floor(n),
      s = Math.floor(r),
      l = o + 1,
      c = s + 1,
      u = e / o,
      d = t / s,
      h = [],
      f = [],
      p = [],
      m = [];
    for (let e = 0; e < c; e++) {
      const t = e * d - a;
      for (let n = 0; n < l; n++) {
        const r = n * u - i;
        f.push(r, -t, 0), p.push(0, 0, 1), m.push(n / o), m.push(1 - e / s);
      }
    }
    for (let e = 0; e < s; e++)
      for (let t = 0; t < o; t++) {
        const n = t + l * e,
          r = t + l * (e + 1),
          i = t + 1 + l * (e + 1),
          a = t + 1 + l * e;
        h.push(n, r, a), h.push(r, i, a);
      }
    this.setIndex(h),
      this.setAttribute("position", new Wn(f, 3)),
      this.setAttribute("normal", new Wn(p, 3)),
      this.setAttribute("uv", new Wn(m, 2));
  }
  copy(e) {
    return (
      super.copy(e), (this.parameters = Object.assign({}, e.parameters)), this
    );
  }
  static fromJSON(e) {
    return new bl(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
var Ey =
    "#ifdef USE_ALPHAHASH\n\tif ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;\n#endif",
  Ty =
    "#ifdef USE_ALPHAHASH\n\tconst float ALPHA_HASH_SCALE = 0.05;\n\tfloat hash2D( vec2 value ) {\n\t\treturn fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );\n\t}\n\tfloat hash3D( vec3 value ) {\n\t\treturn hash2D( vec2( hash2D( value.xy ), value.z ) );\n\t}\n\tfloat getAlphaHashThreshold( vec3 position ) {\n\t\tfloat maxDeriv = max(\n\t\t\tlength( dFdx( position.xyz ) ),\n\t\t\tlength( dFdy( position.xyz ) )\n\t\t);\n\t\tfloat pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );\n\t\tvec2 pixScales = vec2(\n\t\t\texp2( floor( log2( pixScale ) ) ),\n\t\t\texp2( ceil( log2( pixScale ) ) )\n\t\t);\n\t\tvec2 alpha = vec2(\n\t\t\thash3D( floor( pixScales.x * position.xyz ) ),\n\t\t\thash3D( floor( pixScales.y * position.xyz ) )\n\t\t);\n\t\tfloat lerpFactor = fract( log2( pixScale ) );\n\t\tfloat x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;\n\t\tfloat a = min( lerpFactor, 1.0 - lerpFactor );\n\t\tvec3 cases = vec3(\n\t\t\tx * x / ( 2.0 * a * ( 1.0 - a ) ),\n\t\t\t( x - 0.5 * a ) / ( 1.0 - a ),\n\t\t\t1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )\n\t\t);\n\t\tfloat threshold = ( x < ( 1.0 - a ) )\n\t\t\t? ( ( x < a ) ? cases.x : cases.y )\n\t\t\t: cases.z;\n\t\treturn clamp( threshold , 1.0e-6, 1.0 );\n\t}\n#endif",
  wy =
    "#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;\n#endif",
  Ay = "#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",
  Cy =
    "#ifdef USE_ALPHATEST\n\t#ifdef ALPHA_TO_COVERAGE\n\tdiffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );\n\tif ( diffuseColor.a == 0.0 ) discard;\n\t#else\n\tif ( diffuseColor.a < alphaTest ) discard;\n\t#endif\n#endif",
  Ry = "#ifdef USE_ALPHATEST\n\tuniform float alphaTest;\n#endif",
  Py =
    "#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_CLEARCOAT ) \n\t\tclearcoatSpecularIndirect *= ambientOcclusion;\n\t#endif\n\t#if defined( USE_SHEEN ) \n\t\tsheenSpecularIndirect *= ambientOcclusion;\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( STANDARD )\n\t\tfloat dotNV = saturate( dot( geometryNormal, geometryViewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );\n\t#endif\n#endif",
  Ly =
    "#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif",
  by =
    "#ifdef USE_BATCHING\n\t#if ! defined( GL_ANGLE_multi_draw )\n\t#define gl_DrawID _gl_DrawID\n\tuniform int _gl_DrawID;\n\t#endif\n\tuniform highp sampler2D batchingTexture;\n\tuniform highp usampler2D batchingIdTexture;\n\tmat4 getBatchingMatrix( const in float i ) {\n\t\tint size = textureSize( batchingTexture, 0 ).x;\n\t\tint j = int( i ) * 4;\n\t\tint x = j % size;\n\t\tint y = j / size;\n\t\tvec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );\n\t\tvec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );\n\t\tvec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );\n\t\tvec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );\n\t\treturn mat4( v1, v2, v3, v4 );\n\t}\n\tfloat getIndirectIndex( const in int i ) {\n\t\tint size = textureSize( batchingIdTexture, 0 ).x;\n\t\tint x = i % size;\n\t\tint y = i / size;\n\t\treturn float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );\n\t}\n#endif\n#ifdef USE_BATCHING_COLOR\n\tuniform sampler2D batchingColorTexture;\n\tvec3 getBatchingColor( const in float i ) {\n\t\tint size = textureSize( batchingColorTexture, 0 ).x;\n\t\tint j = int( i );\n\t\tint x = j % size;\n\t\tint y = j / size;\n\t\treturn texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;\n\t}\n#endif",
  Dy =
    "#ifdef USE_BATCHING\n\tmat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );\n#endif",
  Uy =
    "vec3 transformed = vec3( position );\n#ifdef USE_ALPHAHASH\n\tvPosition = vec3( position );\n#endif",
  Iy =
    "vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n\tvec3 objectTangent = vec3( tangent.xyz );\n#endif",
  Ny =
    "float G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotVH = saturate( dot( viewDir, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, 1.0, dotVH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n} // validated",
  Fy =
    "#ifdef USE_IRIDESCENCE\n\tconst mat3 XYZ_TO_REC709 = mat3(\n\t\t 3.2404542, -0.9692660,  0.0556434,\n\t\t-1.5371385,  1.8760108, -0.2040259,\n\t\t-0.4985314,  0.0415560,  1.0572252\n\t);\n\tvec3 Fresnel0ToIor( vec3 fresnel0 ) {\n\t\tvec3 sqrtF0 = sqrt( fresnel0 );\n\t\treturn ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );\n\t}\n\tvec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {\n\t\treturn pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );\n\t}\n\tfloat IorToFresnel0( float transmittedIor, float incidentIor ) {\n\t\treturn pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));\n\t}\n\tvec3 evalSensitivity( float OPD, vec3 shift ) {\n\t\tfloat phase = 2.0 * PI * OPD * 1.0e-9;\n\t\tvec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );\n\t\tvec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );\n\t\tvec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );\n\t\tvec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );\n\t\txyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );\n\t\txyz /= 1.0685e-7;\n\t\tvec3 rgb = XYZ_TO_REC709 * xyz;\n\t\treturn rgb;\n\t}\n\tvec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {\n\t\tvec3 I;\n\t\tfloat iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );\n\t\tfloat sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );\n\t\tfloat cosTheta2Sq = 1.0 - sinTheta2Sq;\n\t\tif ( cosTheta2Sq < 0.0 ) {\n\t\t\treturn vec3( 1.0 );\n\t\t}\n\t\tfloat cosTheta2 = sqrt( cosTheta2Sq );\n\t\tfloat R0 = IorToFresnel0( iridescenceIOR, outsideIOR );\n\t\tfloat R12 = F_Schlick( R0, 1.0, cosTheta1 );\n\t\tfloat T121 = 1.0 - R12;\n\t\tfloat phi12 = 0.0;\n\t\tif ( iridescenceIOR < outsideIOR ) phi12 = PI;\n\t\tfloat phi21 = PI - phi12;\n\t\tvec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );\t\tvec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );\n\t\tvec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );\n\t\tvec3 phi23 = vec3( 0.0 );\n\t\tif ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;\n\t\tif ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;\n\t\tif ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;\n\t\tfloat OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;\n\t\tvec3 phi = vec3( phi21 ) + phi23;\n\t\tvec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );\n\t\tvec3 r123 = sqrt( R123 );\n\t\tvec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );\n\t\tvec3 C0 = R12 + Rs;\n\t\tI = C0;\n\t\tvec3 Cm = Rs - T121;\n\t\tfor ( int m = 1; m <= 2; ++ m ) {\n\t\t\tCm *= r123;\n\t\t\tvec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );\n\t\t\tI += Cm * Sm;\n\t\t}\n\t\treturn max( I, vec3( 0.0 ) );\n\t}\n#endif",
  Oy =
    "#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vBumpMapUv );\n\t\tvec2 dSTdy = dFdy( vBumpMapUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {\n\t\tvec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );\n\t\tvec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 ) * faceDirection;\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif",
  zy =
    "#if NUM_CLIPPING_PLANES > 0\n\tvec4 plane;\n\t#ifdef ALPHA_TO_COVERAGE\n\t\tfloat distanceToPlane, distanceGradient;\n\t\tfloat clipOpacity = 1.0;\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n\t\t\tplane = clippingPlanes[ i ];\n\t\t\tdistanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;\n\t\t\tdistanceGradient = fwidth( distanceToPlane ) / 2.0;\n\t\t\tclipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );\n\t\t\tif ( clipOpacity == 0.0 ) discard;\n\t\t}\n\t\t#pragma unroll_loop_end\n\t\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\t\tfloat unionClipOpacity = 1.0;\n\t\t\t#pragma unroll_loop_start\n\t\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n\t\t\t\tplane = clippingPlanes[ i ];\n\t\t\t\tdistanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;\n\t\t\t\tdistanceGradient = fwidth( distanceToPlane ) / 2.0;\n\t\t\t\tunionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );\n\t\t\t}\n\t\t\t#pragma unroll_loop_end\n\t\t\tclipOpacity *= 1.0 - unionClipOpacity;\n\t\t#endif\n\t\tdiffuseColor.a *= clipOpacity;\n\t\tif ( diffuseColor.a == 0.0 ) discard;\n\t#else\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n\t\t\tplane = clippingPlanes[ i ];\n\t\t\tif ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;\n\t\t}\n\t\t#pragma unroll_loop_end\n\t\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\t\tbool clipped = true;\n\t\t\t#pragma unroll_loop_start\n\t\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n\t\t\t\tplane = clippingPlanes[ i ];\n\t\t\t\tclipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t\t}\n\t\t\t#pragma unroll_loop_end\n\t\t\tif ( clipped ) discard;\n\t\t#endif\n\t#endif\n#endif",
  ky =
    "#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif",
  By = "#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n#endif",
  Hy =
    "#if NUM_CLIPPING_PLANES > 0\n\tvClipPosition = - mvPosition.xyz;\n#endif",
  Vy =
    "#if defined( USE_COLOR_ALPHA )\n\tdiffuseColor *= vColor;\n#elif defined( USE_COLOR )\n\tdiffuseColor.rgb *= vColor;\n#endif",
  Gy =
    "#if defined( USE_COLOR_ALPHA )\n\tvarying vec4 vColor;\n#elif defined( USE_COLOR )\n\tvarying vec3 vColor;\n#endif",
  Wy =
    "#if defined( USE_COLOR_ALPHA )\n\tvarying vec4 vColor;\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )\n\tvarying vec3 vColor;\n#endif",
  Xy =
    "#if defined( USE_COLOR_ALPHA )\n\tvColor = vec4( 1.0 );\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )\n\tvColor = vec3( 1.0 );\n#endif\n#ifdef USE_COLOR\n\tvColor *= color;\n#endif\n#ifdef USE_INSTANCING_COLOR\n\tvColor.xyz *= instanceColor.xyz;\n#endif\n#ifdef USE_BATCHING_COLOR\n\tvec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );\n\tvColor.xyz *= batchingColor.xyz;\n#endif",
  Yy =
    "#define PI 3.141592653589793\n#define PI2 6.283185307179586\n#define PI_HALF 1.5707963267948966\n#define RECIPROCAL_PI 0.3183098861837907\n#define RECIPROCAL_PI2 0.15915494309189535\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement( a ) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nvec3 pow2( const in vec3 x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }\nfloat average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract( sin( sn ) * c );\n}\n#ifdef HIGH_PRECISION\n\tfloat precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n\tfloat precisionSafeLength( vec3 v ) {\n\t\tfloat maxComponent = max3( abs( v ) );\n\t\treturn length( v / maxComponent ) * maxComponent;\n\t}\n#endif\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\n#ifdef USE_ALPHAHASH\n\tvarying vec3 vPosition;\n#endif\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nmat3 transposeMat3( const in mat3 m ) {\n\tmat3 tmp;\n\ttmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n\ttmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n\ttmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n\treturn tmp;\n}\nfloat luminance( const in vec3 rgb ) {\n\tconst vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );\n\treturn dot( weights, rgb );\n}\nbool isPerspectiveMatrix( mat4 m ) {\n\treturn m[ 2 ][ 3 ] == - 1.0;\n}\nvec2 equirectUv( in vec3 dir ) {\n\tfloat u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;\n\tfloat v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\treturn vec2( u, v );\n}\nvec3 BRDF_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {\n\tfloat fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n\treturn f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n}\nfloat F_Schlick( const in float f0, const in float f90, const in float dotVH ) {\n\tfloat fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n\treturn f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n} // validated",
  qy =
    "#ifdef ENVMAP_TYPE_CUBE_UV\n\t#define cubeUV_minMipLevel 4.0\n\t#define cubeUV_minTileSize 16.0\n\tfloat getFace( vec3 direction ) {\n\t\tvec3 absDirection = abs( direction );\n\t\tfloat face = - 1.0;\n\t\tif ( absDirection.x > absDirection.z ) {\n\t\t\tif ( absDirection.x > absDirection.y )\n\t\t\t\tface = direction.x > 0.0 ? 0.0 : 3.0;\n\t\t\telse\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\t\t} else {\n\t\t\tif ( absDirection.z > absDirection.y )\n\t\t\t\tface = direction.z > 0.0 ? 2.0 : 5.0;\n\t\t\telse\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\t\t}\n\t\treturn face;\n\t}\n\tvec2 getUV( vec3 direction, float face ) {\n\t\tvec2 uv;\n\t\tif ( face == 0.0 ) {\n\t\t\tuv = vec2( direction.z, direction.y ) / abs( direction.x );\n\t\t} else if ( face == 1.0 ) {\n\t\t\tuv = vec2( - direction.x, - direction.z ) / abs( direction.y );\n\t\t} else if ( face == 2.0 ) {\n\t\t\tuv = vec2( - direction.x, direction.y ) / abs( direction.z );\n\t\t} else if ( face == 3.0 ) {\n\t\t\tuv = vec2( - direction.z, direction.y ) / abs( direction.x );\n\t\t} else if ( face == 4.0 ) {\n\t\t\tuv = vec2( - direction.x, direction.z ) / abs( direction.y );\n\t\t} else {\n\t\t\tuv = vec2( direction.x, direction.y ) / abs( direction.z );\n\t\t}\n\t\treturn 0.5 * ( uv + 1.0 );\n\t}\n\tvec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {\n\t\tfloat face = getFace( direction );\n\t\tfloat filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );\n\t\tmipInt = max( mipInt, cubeUV_minMipLevel );\n\t\tfloat faceSize = exp2( mipInt );\n\t\thighp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;\n\t\tif ( face > 2.0 ) {\n\t\t\tuv.y += faceSize;\n\t\t\tface -= 3.0;\n\t\t}\n\t\tuv.x += face * faceSize;\n\t\tuv.x += filterInt * 3.0 * cubeUV_minTileSize;\n\t\tuv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );\n\t\tuv.x *= CUBEUV_TEXEL_WIDTH;\n\t\tuv.y *= CUBEUV_TEXEL_HEIGHT;\n\t\t#ifdef texture2DGradEXT\n\t\t\treturn texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;\n\t\t#else\n\t\t\treturn texture2D( envMap, uv ).rgb;\n\t\t#endif\n\t}\n\t#define cubeUV_r0 1.0\n\t#define cubeUV_m0 - 2.0\n\t#define cubeUV_r1 0.8\n\t#define cubeUV_m1 - 1.0\n\t#define cubeUV_r4 0.4\n\t#define cubeUV_m4 2.0\n\t#define cubeUV_r5 0.305\n\t#define cubeUV_m5 3.0\n\t#define cubeUV_r6 0.21\n\t#define cubeUV_m6 4.0\n\tfloat roughnessToMip( float roughness ) {\n\t\tfloat mip = 0.0;\n\t\tif ( roughness >= cubeUV_r1 ) {\n\t\t\tmip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;\n\t\t} else if ( roughness >= cubeUV_r4 ) {\n\t\t\tmip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;\n\t\t} else if ( roughness >= cubeUV_r5 ) {\n\t\t\tmip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;\n\t\t} else if ( roughness >= cubeUV_r6 ) {\n\t\t\tmip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;\n\t\t} else {\n\t\t\tmip = - 2.0 * log2( 1.16 * roughness );\t\t}\n\t\treturn mip;\n\t}\n\tvec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {\n\t\tfloat mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );\n\t\tfloat mipF = fract( mip );\n\t\tfloat mipInt = floor( mip );\n\t\tvec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );\n\t\tif ( mipF == 0.0 ) {\n\t\t\treturn vec4( color0, 1.0 );\n\t\t} else {\n\t\t\tvec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );\n\t\t\treturn vec4( mix( color0, color1, mipF ), 1.0 );\n\t\t}\n\t}\n#endif",
  $y =
    "vec3 transformedNormal = objectNormal;\n#ifdef USE_TANGENT\n\tvec3 transformedTangent = objectTangent;\n#endif\n#ifdef USE_BATCHING\n\tmat3 bm = mat3( batchingMatrix );\n\ttransformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );\n\ttransformedNormal = bm * transformedNormal;\n\t#ifdef USE_TANGENT\n\t\ttransformedTangent = bm * transformedTangent;\n\t#endif\n#endif\n#ifdef USE_INSTANCING\n\tmat3 im = mat3( instanceMatrix );\n\ttransformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );\n\ttransformedNormal = im * transformedNormal;\n\t#ifdef USE_TANGENT\n\t\ttransformedTangent = im * transformedTangent;\n\t#endif\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n\ttransformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n\ttransformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;\n\t#ifdef FLIP_SIDED\n\t\ttransformedTangent = - transformedTangent;\n\t#endif\n#endif",
  jy =
    "#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif",
  Ky =
    "#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );\n#endif",
  Zy =
    "#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif",
  Qy = "#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif",
  Jy = "gl_FragColor = linearToOutputTexel( gl_FragColor );",
  eS =
    "\nconst mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(\n\tvec3( 0.8224621, 0.177538, 0.0 ),\n\tvec3( 0.0331941, 0.9668058, 0.0 ),\n\tvec3( 0.0170827, 0.0723974, 0.9105199 )\n);\nconst mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(\n\tvec3( 1.2249401, - 0.2249404, 0.0 ),\n\tvec3( - 0.0420569, 1.0420571, 0.0 ),\n\tvec3( - 0.0196376, - 0.0786361, 1.0982735 )\n);\nvec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {\n\treturn vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );\n}\nvec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {\n\treturn vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );\n}\nvec4 LinearTransferOETF( in vec4 value ) {\n\treturn value;\n}\nvec4 sRGBTransferOETF( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}\nvec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn sRGBTransferOETF( value );\n}",
  tS =
    "#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvec3 cameraToFrag;\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToFrag = normalize( vWorldPosition - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToFrag, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif",
  nS =
    "#ifdef USE_ENVMAP\n\tuniform float envMapIntensity;\n\tuniform float flipEnvMap;\n\tuniform mat3 envMapRotation;\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\t\n#endif",
  iS =
    "#ifdef USE_ENVMAP\n\tuniform float reflectivity;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\tvarying vec3 vWorldPosition;\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif",
  rS =
    "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\t\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif",
  sS =
    "#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex;\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif",
  oS = "#ifdef USE_FOG\n\tvFogDepth = - mvPosition.z;\n#endif",
  aS = "#ifdef USE_FOG\n\tvarying float vFogDepth;\n#endif",
  lS =
    "#ifdef USE_FOG\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, vFogDepth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif",
  uS =
    "#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\tvarying float vFogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif",
  cS =
    "#ifdef USE_GRADIENTMAP\n\tuniform sampler2D gradientMap;\n#endif\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\tfloat dotNL = dot( normal, lightDirection );\n\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t#ifdef USE_GRADIENTMAP\n\t\treturn vec3( texture2D( gradientMap, coord ).r );\n\t#else\n\t\tvec2 fw = fwidth( coord ) * 0.5;\n\t\treturn mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );\n\t#endif\n}",
  fS =
    "#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif",
  dS =
    "LambertMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularStrength = specularStrength;",
  hS =
    "varying vec3 vViewPosition;\nstruct LambertMaterial {\n\tvec3 diffuseColor;\n\tfloat specularStrength;\n};\nvoid RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_Lambert\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Lambert",
  pS =
    "uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\n#if defined( USE_LIGHT_PROBES )\n\tuniform vec3 lightProbe[ 9 ];\n#endif\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n\tfloat x = normal.x, y = normal.y, z = normal.z;\n\tvec3 result = shCoefficients[ 0 ] * 0.886227;\n\tresult += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n\tresult += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n\tresult += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n\tresult += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n\tresult += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n\tresult += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n\tresult += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n\tresult += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n\treturn result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {\n\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\tvec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n\treturn irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\treturn irradiance;\n}\nfloat getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\tif ( cutoffDistance > 0.0 ) {\n\t\tdistanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t}\n\treturn distanceFalloff;\n}\nfloat getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {\n\treturn smoothstep( coneCosine, penumbraCosine, angleCosine );\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {\n\t\tlight.color = directionalLight.color;\n\t\tlight.direction = directionalLight.direction;\n\t\tlight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {\n\t\tvec3 lVector = pointLight.position - geometryPosition;\n\t\tlight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tlight.color = pointLight.color;\n\t\tlight.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );\n\t\tlight.visible = ( light.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {\n\t\tvec3 lVector = spotLight.position - geometryPosition;\n\t\tlight.direction = normalize( lVector );\n\t\tfloat angleCos = dot( light.direction, spotLight.direction );\n\t\tfloat spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\tif ( spotAttenuation > 0.0 ) {\n\t\t\tfloat lightDistance = length( lVector );\n\t\t\tlight.color = spotLight.color * spotAttenuation;\n\t\t\tlight.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tlight.visible = ( light.color != vec3( 0.0 ) );\n\t\t} else {\n\t\t\tlight.color = vec3( 0.0 );\n\t\t\tlight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltc_1;\tuniform sampler2D ltc_2;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {\n\t\tfloat dotNL = dot( normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\treturn irradiance;\n\t}\n#endif",
  mS =
    "#ifdef USE_ENVMAP\n\tvec3 getIBLIrradiance( const in vec3 normal ) {\n\t\t#ifdef ENVMAP_TYPE_CUBE_UV\n\t\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );\n\t\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t\t#else\n\t\t\treturn vec3( 0.0 );\n\t\t#endif\n\t}\n\tvec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {\n\t\t#ifdef ENVMAP_TYPE_CUBE_UV\n\t\t\tvec3 reflectVec = reflect( - viewDir, normal );\n\t\t\treflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );\n\t\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );\n\t\t\treturn envMapColor.rgb * envMapIntensity;\n\t\t#else\n\t\t\treturn vec3( 0.0 );\n\t\t#endif\n\t}\n\t#ifdef USE_ANISOTROPY\n\t\tvec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {\n\t\t\t#ifdef ENVMAP_TYPE_CUBE_UV\n\t\t\t\tvec3 bentNormal = cross( bitangent, viewDir );\n\t\t\t\tbentNormal = normalize( cross( bentNormal, bitangent ) );\n\t\t\t\tbentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );\n\t\t\t\treturn getIBLRadiance( viewDir, bentNormal, roughness );\n\t\t\t#else\n\t\t\t\treturn vec3( 0.0 );\n\t\t\t#endif\n\t\t}\n\t#endif\n#endif",
  gS = "ToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;",
  _S =
    "varying vec3 vViewPosition;\nstruct ToonMaterial {\n\tvec3 diffuseColor;\n};\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\tvec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_Toon\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Toon",
  vS =
    "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;",
  xS =
    "varying vec3 vViewPosition;\nstruct BlinnPhongMaterial {\n\tvec3 diffuseColor;\n\tvec3 specularColor;\n\tfloat specularShininess;\n\tfloat specularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong",
  yS =
    "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nvec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\nmaterial.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;\nmaterial.roughness = min( material.roughness, 1.0 );\n#ifdef IOR\n\tmaterial.ior = ior;\n\t#ifdef USE_SPECULAR\n\t\tfloat specularIntensityFactor = specularIntensity;\n\t\tvec3 specularColorFactor = specularColor;\n\t\t#ifdef USE_SPECULAR_COLORMAP\n\t\t\tspecularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;\n\t\t#endif\n\t\t#ifdef USE_SPECULAR_INTENSITYMAP\n\t\t\tspecularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;\n\t\t#endif\n\t\tmaterial.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );\n\t#else\n\t\tfloat specularIntensityFactor = 1.0;\n\t\tvec3 specularColorFactor = vec3( 1.0 );\n\t\tmaterial.specularF90 = 1.0;\n\t#endif\n\tmaterial.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );\n\tmaterial.specularF90 = 1.0;\n#endif\n#ifdef USE_CLEARCOAT\n\tmaterial.clearcoat = clearcoat;\n\tmaterial.clearcoatRoughness = clearcoatRoughness;\n\tmaterial.clearcoatF0 = vec3( 0.04 );\n\tmaterial.clearcoatF90 = 1.0;\n\t#ifdef USE_CLEARCOATMAP\n\t\tmaterial.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;\n\t#endif\n\t#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\t\tmaterial.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;\n\t#endif\n\tmaterial.clearcoat = saturate( material.clearcoat );\tmaterial.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );\n\tmaterial.clearcoatRoughness += geometryRoughness;\n\tmaterial.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n#endif\n#ifdef USE_DISPERSION\n\tmaterial.dispersion = dispersion;\n#endif\n#ifdef USE_IRIDESCENCE\n\tmaterial.iridescence = iridescence;\n\tmaterial.iridescenceIOR = iridescenceIOR;\n\t#ifdef USE_IRIDESCENCEMAP\n\t\tmaterial.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;\n\t#endif\n\t#ifdef USE_IRIDESCENCE_THICKNESSMAP\n\t\tmaterial.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;\n\t#else\n\t\tmaterial.iridescenceThickness = iridescenceThicknessMaximum;\n\t#endif\n#endif\n#ifdef USE_SHEEN\n\tmaterial.sheenColor = sheenColor;\n\t#ifdef USE_SHEEN_COLORMAP\n\t\tmaterial.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;\n\t#endif\n\tmaterial.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );\n\t#ifdef USE_SHEEN_ROUGHNESSMAP\n\t\tmaterial.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;\n\t#endif\n#endif\n#ifdef USE_ANISOTROPY\n\t#ifdef USE_ANISOTROPYMAP\n\t\tmat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );\n\t\tvec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;\n\t\tvec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;\n\t#else\n\t\tvec2 anisotropyV = anisotropyVector;\n\t#endif\n\tmaterial.anisotropy = length( anisotropyV );\n\tif( material.anisotropy == 0.0 ) {\n\t\tanisotropyV = vec2( 1.0, 0.0 );\n\t} else {\n\t\tanisotropyV /= material.anisotropy;\n\t\tmaterial.anisotropy = saturate( material.anisotropy );\n\t}\n\tmaterial.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );\n\tmaterial.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;\n\tmaterial.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;\n#endif",
  SS =
    "struct PhysicalMaterial {\n\tvec3 diffuseColor;\n\tfloat roughness;\n\tvec3 specularColor;\n\tfloat specularF90;\n\tfloat dispersion;\n\t#ifdef USE_CLEARCOAT\n\t\tfloat clearcoat;\n\t\tfloat clearcoatRoughness;\n\t\tvec3 clearcoatF0;\n\t\tfloat clearcoatF90;\n\t#endif\n\t#ifdef USE_IRIDESCENCE\n\t\tfloat iridescence;\n\t\tfloat iridescenceIOR;\n\t\tfloat iridescenceThickness;\n\t\tvec3 iridescenceFresnel;\n\t\tvec3 iridescenceF0;\n\t#endif\n\t#ifdef USE_SHEEN\n\t\tvec3 sheenColor;\n\t\tfloat sheenRoughness;\n\t#endif\n\t#ifdef IOR\n\t\tfloat ior;\n\t#endif\n\t#ifdef USE_TRANSMISSION\n\t\tfloat transmission;\n\t\tfloat transmissionAlpha;\n\t\tfloat thickness;\n\t\tfloat attenuationDistance;\n\t\tvec3 attenuationColor;\n\t#endif\n\t#ifdef USE_ANISOTROPY\n\t\tfloat anisotropy;\n\t\tfloat alphaT;\n\t\tvec3 anisotropyT;\n\t\tvec3 anisotropyB;\n\t#endif\n};\nvec3 clearcoatSpecularDirect = vec3( 0.0 );\nvec3 clearcoatSpecularIndirect = vec3( 0.0 );\nvec3 sheenSpecularDirect = vec3( 0.0 );\nvec3 sheenSpecularIndirect = vec3(0.0 );\nvec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {\n    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );\n    float x2 = x * x;\n    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );\n    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );\n}\nfloat V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\n#ifdef USE_ANISOTROPY\n\tfloat V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {\n\t\tfloat gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );\n\t\tfloat gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );\n\t\tfloat v = 0.5 / ( gv + gl );\n\t\treturn saturate(v);\n\t}\n\tfloat D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {\n\t\tfloat a2 = alphaT * alphaB;\n\t\thighp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );\n\t\thighp float v2 = dot( v, v );\n\t\tfloat w2 = a2 / v2;\n\t\treturn RECIPROCAL_PI * a2 * pow2 ( w2 );\n\t}\n#endif\n#ifdef USE_CLEARCOAT\n\tvec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {\n\t\tvec3 f0 = material.clearcoatF0;\n\t\tfloat f90 = material.clearcoatF90;\n\t\tfloat roughness = material.clearcoatRoughness;\n\t\tfloat alpha = pow2( roughness );\n\t\tvec3 halfDir = normalize( lightDir + viewDir );\n\t\tfloat dotNL = saturate( dot( normal, lightDir ) );\n\t\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\t\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\t\tfloat dotVH = saturate( dot( viewDir, halfDir ) );\n\t\tvec3 F = F_Schlick( f0, f90, dotVH );\n\t\tfloat V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\t\tfloat D = D_GGX( alpha, dotNH );\n\t\treturn F * ( V * D );\n\t}\n#endif\nvec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {\n\tvec3 f0 = material.specularColor;\n\tfloat f90 = material.specularF90;\n\tfloat roughness = material.roughness;\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\tfloat dotNL = saturate( dot( normal, lightDir ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotVH = saturate( dot( viewDir, halfDir ) );\n\tvec3 F = F_Schlick( f0, f90, dotVH );\n\t#ifdef USE_IRIDESCENCE\n\t\tF = mix( F, material.iridescenceFresnel, material.iridescence );\n\t#endif\n\t#ifdef USE_ANISOTROPY\n\t\tfloat dotTL = dot( material.anisotropyT, lightDir );\n\t\tfloat dotTV = dot( material.anisotropyT, viewDir );\n\t\tfloat dotTH = dot( material.anisotropyT, halfDir );\n\t\tfloat dotBL = dot( material.anisotropyB, lightDir );\n\t\tfloat dotBV = dot( material.anisotropyB, viewDir );\n\t\tfloat dotBH = dot( material.anisotropyB, halfDir );\n\t\tfloat V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );\n\t\tfloat D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );\n\t#else\n\t\tfloat V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\t\tfloat D = D_GGX( alpha, dotNH );\n\t#endif\n\treturn F * ( V * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\tconst float LUT_SIZE = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS = 0.5 / LUT_SIZE;\n\tfloat dotNV = saturate( dot( N, V ) );\n\tvec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\tfloat l = length( f );\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\tfloat x = dot( v1, v2 );\n\tfloat y = abs( x );\n\tfloat a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n\tfloat b = 3.4175940 + ( 4.1616724 + y ) * y;\n\tfloat v = a / b;\n\tfloat theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n\treturn cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 );\n\tmat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\tfloat result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n\treturn vec3( result );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie( float roughness, float dotNH ) {\n\tfloat alpha = pow2( roughness );\n\tfloat invAlpha = 1.0 / alpha;\n\tfloat cos2h = dotNH * dotNH;\n\tfloat sin2h = max( 1.0 - cos2h, 0.0078125 );\n\treturn ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );\n}\nfloat V_Neubelt( float dotNV, float dotNL ) {\n\treturn saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );\n}\nvec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\tfloat dotNL = saturate( dot( normal, lightDir ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat D = D_Charlie( sheenRoughness, dotNH );\n\tfloat V = V_Neubelt( dotNV, dotNL );\n\treturn sheenColor * ( D * V );\n}\n#endif\nfloat IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat r2 = roughness * roughness;\n\tfloat a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;\n\tfloat b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;\n\tfloat DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );\n\treturn saturate( DG * RECIPROCAL_PI );\n}\nvec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\tvec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;\n\treturn fab;\n}\nvec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {\n\tvec2 fab = DFGApprox( normal, viewDir, roughness );\n\treturn specularColor * fab.x + specularF90 * fab.y;\n}\n#ifdef USE_IRIDESCENCE\nvoid computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#else\nvoid computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#endif\n\tvec2 fab = DFGApprox( normal, viewDir, roughness );\n\t#ifdef USE_IRIDESCENCE\n\t\tvec3 Fr = mix( specularColor, iridescenceF0, iridescence );\n\t#else\n\t\tvec3 Fr = specularColor;\n\t#endif\n\tvec3 FssEss = Fr * fab.x + specularF90 * fab.y;\n\tfloat Ess = fab.x + fab.y;\n\tfloat Ems = 1.0 - Ess;\n\tvec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;\tvec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n\tsingleScatter += FssEss;\n\tmultiScatter += Fms * Ems;\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 normal = geometryNormal;\n\t\tvec3 viewDir = geometryViewDir;\n\t\tvec3 position = geometryPosition;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.roughness;\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos + halfWidth - halfHeight;\t\trectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\t\tvec4 t1 = texture2D( ltc_1, uv );\n\t\tvec4 t2 = texture2D( ltc_2, uv );\n\t\tmat3 mInv = mat3(\n\t\t\tvec3( t1.x, 0, t1.y ),\n\t\t\tvec3(    0, 1,    0 ),\n\t\t\tvec3( t1.z, 0, t1.w )\n\t\t);\n\t\tvec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n\t\treflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n\t}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifdef USE_CLEARCOAT\n\t\tfloat dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );\n\t\tvec3 ccIrradiance = dotNLcc * directLight.color;\n\t\tclearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );\n\t#endif\n\t#ifdef USE_SHEEN\n\t\tsheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );\n\t#endif\n\treflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n\t#ifdef USE_CLEARCOAT\n\t\tclearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );\n\t#endif\n\t#ifdef USE_SHEEN\n\t\tsheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );\n\t#endif\n\tvec3 singleScattering = vec3( 0.0 );\n\tvec3 multiScattering = vec3( 0.0 );\n\tvec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n\t#ifdef USE_IRIDESCENCE\n\t\tcomputeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );\n\t#else\n\t\tcomputeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );\n\t#endif\n\tvec3 totalScattering = singleScattering + multiScattering;\n\tvec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );\n\treflectedLight.indirectSpecular += radiance * singleScattering;\n\treflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;\n\treflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}",
  MS =
    "\nvec3 geometryPosition = - vViewPosition;\nvec3 geometryNormal = normal;\nvec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\nvec3 geometryClearcoatNormal = vec3( 0.0 );\n#ifdef USE_CLEARCOAT\n\tgeometryClearcoatNormal = clearcoatNormal;\n#endif\n#ifdef USE_IRIDESCENCE\n\tfloat dotNVi = saturate( dot( normal, geometryViewDir ) );\n\tif ( material.iridescenceThickness == 0.0 ) {\n\t\tmaterial.iridescence = 0.0;\n\t} else {\n\t\tmaterial.iridescence = saturate( material.iridescence );\n\t}\n\tif ( material.iridescence > 0.0 ) {\n\t\tmaterial.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );\n\t\tmaterial.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );\n\t}\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointLightInfo( pointLight, geometryPosition, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\n\t\tpointLightShadow = pointLightShadows[ i ];\n\t\tdirectLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\tvec4 spotColor;\n\tvec3 spotLightCoord;\n\tbool inSpotLightMap;\n\t#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotLightInfo( spotLight, geometryPosition, directLight );\n\t\t#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n\t\t#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX\n\t\t#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\t#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS\n\t\t#else\n\t\t#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n\t\t#endif\n\t\t#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )\n\t\t\tspotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;\n\t\t\tinSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );\n\t\t\tspotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );\n\t\t\tdirectLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;\n\t\t#endif\n\t\t#undef SPOT_LIGHT_MAP_INDEX\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\tspotLightShadow = spotLightShadows[ i ];\n\t\tdirectLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalLightInfo( directionalLight, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n\t\tdirectionalLightShadow = directionalLightShadows[ i ];\n\t\tdirectLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 iblIrradiance = vec3( 0.0 );\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\t#if defined( USE_LIGHT_PROBES )\n\t\tirradiance += getLightProbeIrradiance( lightProbe, geometryNormal );\n\t#endif\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );\n\t\t}\n\t\t#pragma unroll_loop_end\n\t#endif\n#endif\n#if defined( RE_IndirectSpecular )\n\tvec3 radiance = vec3( 0.0 );\n\tvec3 clearcoatRadiance = vec3( 0.0 );\n#endif",
  ES =
    "#if defined( RE_IndirectDiffuse )\n\t#ifdef USE_LIGHTMAP\n\t\tvec4 lightMapTexel = texture2D( lightMap, vLightMapUv );\n\t\tvec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t\tiblIrradiance += getIBLIrradiance( geometryNormal );\n\t#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\t#ifdef USE_ANISOTROPY\n\t\tradiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );\n\t#else\n\t\tradiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );\n\t#endif\n\t#ifdef USE_CLEARCOAT\n\t\tclearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );\n\t#endif\n#endif",
  TS =
    "#if defined( RE_IndirectDiffuse )\n\tRE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n\tRE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n#endif",
  wS =
    "#if defined( USE_LOGDEPTHBUF )\n\tgl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif",
  AS =
    "#if defined( USE_LOGDEPTHBUF )\n\tuniform float logDepthBufFC;\n\tvarying float vFragDepth;\n\tvarying float vIsPerspective;\n#endif",
  CS =
    "#ifdef USE_LOGDEPTHBUF\n\tvarying float vFragDepth;\n\tvarying float vIsPerspective;\n#endif",
  RS =
    "#ifdef USE_LOGDEPTHBUF\n\tvFragDepth = 1.0 + gl_Position.w;\n\tvIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n#endif",
  PS =
    "#ifdef USE_MAP\n\tvec4 sampledDiffuseColor = texture2D( map, vMapUv );\n\t#ifdef DECODE_VIDEO_TEXTURE\n\t\tsampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );\n\t\n\t#endif\n\tdiffuseColor *= sampledDiffuseColor;\n#endif",
  LS = "#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif",
  bS =
    "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\t#if defined( USE_POINTS_UV )\n\t\tvec2 uv = vUv;\n\t#else\n\t\tvec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n\t#endif\n#endif\n#ifdef USE_MAP\n\tdiffuseColor *= texture2D( map, uv );\n#endif\n#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, uv ).g;\n#endif",
  DS =
    "#if defined( USE_POINTS_UV )\n\tvarying vec2 vUv;\n#else\n\t#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\t\tuniform mat3 uvTransform;\n\t#endif\n#endif\n#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",
  US =
    "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );\n\tmetalnessFactor *= texelMetalness.b;\n#endif",
  IS = "#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif",
  NS =
    "#ifdef USE_INSTANCING_MORPH\n\tfloat morphTargetInfluences[ MORPHTARGETS_COUNT ];\n\tfloat morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;\n\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\t\tmorphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;\n\t}\n#endif",
  FS =
    "#if defined( USE_MORPHCOLORS )\n\tvColor *= morphTargetBaseInfluence;\n\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\t\t#if defined( USE_COLOR_ALPHA )\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];\n\t\t#elif defined( USE_COLOR )\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];\n\t\t#endif\n\t}\n#endif",
  OS =
    "#ifdef USE_MORPHNORMALS\n\tobjectNormal *= morphTargetBaseInfluence;\n\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\t\tif ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];\n\t}\n#endif",
  zS =
    "#ifdef USE_MORPHTARGETS\n\t#ifndef USE_INSTANCING_MORPH\n\t\tuniform float morphTargetBaseInfluence;\n\t\tuniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];\n\t#endif\n\tuniform sampler2DArray morphTargetsTexture;\n\tuniform ivec2 morphTargetsTextureSize;\n\tvec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {\n\t\tint texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;\n\t\tint y = texelIndex / morphTargetsTextureSize.x;\n\t\tint x = texelIndex - y * morphTargetsTextureSize.x;\n\t\tivec3 morphUV = ivec3( x, y, morphTargetIndex );\n\t\treturn texelFetch( morphTargetsTexture, morphUV, 0 );\n\t}\n#endif",
  kS =
    "#ifdef USE_MORPHTARGETS\n\ttransformed *= morphTargetBaseInfluence;\n\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\t\tif ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];\n\t}\n#endif",
  BS =
    "float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;\n#ifdef FLAT_SHADED\n\tvec3 fdx = dFdx( vViewPosition );\n\tvec3 fdy = dFdy( vViewPosition );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal );\n\t#ifdef DOUBLE_SIDED\n\t\tnormal *= faceDirection;\n\t#endif\n#endif\n#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )\n\t#ifdef USE_TANGENT\n\t\tmat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );\n\t#else\n\t\tmat3 tbn = getTangentFrame( - vViewPosition, normal,\n\t\t#if defined( USE_NORMALMAP )\n\t\t\tvNormalMapUv\n\t\t#elif defined( USE_CLEARCOAT_NORMALMAP )\n\t\t\tvClearcoatNormalMapUv\n\t\t#else\n\t\t\tvUv\n\t\t#endif\n\t\t);\n\t#endif\n\t#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )\n\t\ttbn[0] *= faceDirection;\n\t\ttbn[1] *= faceDirection;\n\t#endif\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\t#ifdef USE_TANGENT\n\t\tmat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );\n\t#else\n\t\tmat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );\n\t#endif\n\t#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )\n\t\ttbn2[0] *= faceDirection;\n\t\ttbn2[1] *= faceDirection;\n\t#endif\n#endif\nvec3 nonPerturbedNormal = normal;",
  HS =
    "#ifdef USE_NORMALMAP_OBJECTSPACE\n\tnormal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;\n\t#ifdef FLIP_SIDED\n\t\tnormal = - normal;\n\t#endif\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * faceDirection;\n\t#endif\n\tnormal = normalize( normalMatrix * normal );\n#elif defined( USE_NORMALMAP_TANGENTSPACE )\n\tvec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;\n\tmapN.xy *= normalScale;\n\tnormal = normalize( tbn * mapN );\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );\n#endif",
  VS =
    "#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif",
  GS =
    "#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif",
  WS =
    "#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif",
  XS =
    "#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n#endif\n#ifdef USE_NORMALMAP_OBJECTSPACE\n\tuniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )\n\tmat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {\n\t\tvec3 q0 = dFdx( eye_pos.xyz );\n\t\tvec3 q1 = dFdy( eye_pos.xyz );\n\t\tvec2 st0 = dFdx( uv.st );\n\t\tvec2 st1 = dFdy( uv.st );\n\t\tvec3 N = surf_norm;\n\t\tvec3 q1perp = cross( q1, N );\n\t\tvec3 q0perp = cross( N, q0 );\n\t\tvec3 T = q1perp * st0.x + q0perp * st1.x;\n\t\tvec3 B = q1perp * st0.y + q0perp * st1.y;\n\t\tfloat det = max( dot( T, T ), dot( B, B ) );\n\t\tfloat scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );\n\t\treturn mat3( T * scale, B * scale, N );\n\t}\n#endif",
  YS =
    "#ifdef USE_CLEARCOAT\n\tvec3 clearcoatNormal = nonPerturbedNormal;\n#endif",
  qS =
    "#ifdef USE_CLEARCOAT_NORMALMAP\n\tvec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;\n\tclearcoatMapN.xy *= clearcoatNormalScale;\n\tclearcoatNormal = normalize( tbn2 * clearcoatMapN );\n#endif",
  $S =
    "#ifdef USE_CLEARCOATMAP\n\tuniform sampler2D clearcoatMap;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\tuniform sampler2D clearcoatNormalMap;\n\tuniform vec2 clearcoatNormalScale;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\tuniform sampler2D clearcoatRoughnessMap;\n#endif",
  jS =
    "#ifdef USE_IRIDESCENCEMAP\n\tuniform sampler2D iridescenceMap;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n\tuniform sampler2D iridescenceThicknessMap;\n#endif",
  KS =
    "#ifdef OPAQUE\ndiffuseColor.a = 1.0;\n#endif\n#ifdef USE_TRANSMISSION\ndiffuseColor.a *= material.transmissionAlpha;\n#endif\ngl_FragColor = vec4( outgoingLight, diffuseColor.a );",
  ZS =
    "vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nvec2 packDepthToRG( in highp float v ) {\n\treturn packDepthToRGBA( v ).yx;\n}\nfloat unpackRGToDepth( const in highp vec2 v ) {\n\treturn unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );\n}\nvec4 pack2HalfToRGBA( vec2 v ) {\n\tvec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );\n\treturn vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );\n}\nvec2 unpackRGBATo2Half( vec4 v ) {\n\treturn vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {\n\treturn depth * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * depth - far );\n}",
  QS =
    "#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif",
  JS =
    "vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_BATCHING\n\tmvPosition = batchingMatrix * mvPosition;\n#endif\n#ifdef USE_INSTANCING\n\tmvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;",
  eM =
    "#ifdef DITHERING\n\tgl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif",
  tM =
    "#ifdef DITHERING\n\tvec3 dithering( vec3 color ) {\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\t\treturn color + dither_shift_RGB;\n\t}\n#endif",
  nM =
    "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );\n\troughnessFactor *= texelRoughness.g;\n#endif",
  iM = "#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif",
  rM =
    "#if NUM_SPOT_LIGHT_COORDS > 0\n\tvarying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n#endif\n#if NUM_SPOT_LIGHT_MAPS > 0\n\tuniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];\n#endif\n#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowIntensity;\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowIntensity;\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowIntensity;\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tvec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {\n\t\treturn unpackRGBATo2Half( texture2D( shadow, uv ) );\n\t}\n\tfloat VSMShadow (sampler2D shadow, vec2 uv, float compare ){\n\t\tfloat occlusion = 1.0;\n\t\tvec2 distribution = texture2DDistribution( shadow, uv );\n\t\tfloat hard_shadow = step( compare , distribution.x );\n\t\tif (hard_shadow != 1.0 ) {\n\t\t\tfloat distance = compare - distribution.x ;\n\t\t\tfloat variance = max( 0.00000, distribution.y * distribution.y );\n\t\t\tfloat softness_probability = variance / (variance + distance * distance );\t\t\tsoftness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );\t\t\tocclusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );\n\t\t}\n\t\treturn occlusion;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tfloat shadow = 1.0;\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;\n\t\tbool frustumTest = inFrustum && shadowCoord.z <= 1.0;\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tfloat dx2 = dx0 / 2.0;\n\t\t\tfloat dy2 = dy0 / 2.0;\n\t\t\tfloat dx3 = dx1 / 2.0;\n\t\t\tfloat dy3 = dy1 / 2.0;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 17.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx = texelSize.x;\n\t\t\tfloat dy = texelSize.y;\n\t\t\tvec2 uv = shadowCoord.xy;\n\t\t\tvec2 f = fract( uv * shadowMapSize + 0.5 );\n\t\t\tuv -= f * texelSize;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, uv, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),\n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),\n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),\n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t f.y )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_VSM )\n\t\t\tshadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#else\n\t\t\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn mix( 1.0, shadow, shadowIntensity );\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n\t\tfloat shadow = 1.0;\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\t\n\t\tfloat lightToPositionLength = length( lightToPosition );\n\t\tif ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {\n\t\t\tfloat dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );\t\t\tdp += shadowBias;\n\t\t\tvec3 bd3D = normalize( lightToPosition );\n\t\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )\n\t\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\t\tshadow = (\n\t\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t\t) * ( 1.0 / 9.0 );\n\t\t\t#else\n\t\t\t\tshadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t\t#endif\n\t\t}\n\t\treturn mix( 1.0, shadow, shadowIntensity );\n\t}\n#endif",
  sM =
    "#if NUM_SPOT_LIGHT_COORDS > 0\n\tuniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];\n\tvarying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n#endif\n#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowIntensity;\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowIntensity;\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowIntensity;\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n#endif",
  oM =
    "#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )\n\tvec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\tvec4 shadowWorldPosition;\n#endif\n#if defined( USE_SHADOWMAP )\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );\n\t\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;\n\t\t}\n\t\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );\n\t\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;\n\t\t}\n\t\t#pragma unroll_loop_end\n\t#endif\n#endif\n#if NUM_SPOT_LIGHT_COORDS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition;\n\t\t#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\t\tshadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;\n\t\t#endif\n\t\tvSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n#endif",
  aM =
    "float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tdirectionalLight = directionalLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tspotLight = spotLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tpointLight = pointLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#endif\n\treturn shadow;\n}",
  lM =
    "#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",
  uM =
    "#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\tuniform highp sampler2D boneTexture;\n\tmat4 getBoneMatrix( const in float i ) {\n\t\tint size = textureSize( boneTexture, 0 ).x;\n\t\tint j = int( i ) * 4;\n\t\tint x = j % size;\n\t\tint y = j / size;\n\t\tvec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );\n\t\tvec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );\n\t\tvec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );\n\t\tvec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );\n\t\treturn mat4( v1, v2, v3, v4 );\n\t}\n#endif",
  cM =
    "#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\ttransformed = ( bindMatrixInverse * skinned ).xyz;\n#endif",
  fM =
    "#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n\t#ifdef USE_TANGENT\n\t\tobjectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#endif\n#endif",
  dM =
    "float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif",
  hM = "#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif",
  pM =
    "#if defined( TONE_MAPPING )\n\tgl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif",
  mM =
    "#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nvec3 LinearToneMapping( vec3 color ) {\n\treturn saturate( toneMappingExposure * color );\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 RRTAndODTFit( vec3 v ) {\n\tvec3 a = v * ( v + 0.0245786 ) - 0.000090537;\n\tvec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;\n\treturn a / b;\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n\tconst mat3 ACESInputMat = mat3(\n\t\tvec3( 0.59719, 0.07600, 0.02840 ),\t\tvec3( 0.35458, 0.90834, 0.13383 ),\n\t\tvec3( 0.04823, 0.01566, 0.83777 )\n\t);\n\tconst mat3 ACESOutputMat = mat3(\n\t\tvec3(  1.60475, -0.10208, -0.00327 ),\t\tvec3( -0.53108,  1.10813, -0.07276 ),\n\t\tvec3( -0.07367, -0.00605,  1.07602 )\n\t);\n\tcolor *= toneMappingExposure / 0.6;\n\tcolor = ACESInputMat * color;\n\tcolor = RRTAndODTFit( color );\n\tcolor = ACESOutputMat * color;\n\treturn saturate( color );\n}\nconst mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(\n\tvec3( 1.6605, - 0.1246, - 0.0182 ),\n\tvec3( - 0.5876, 1.1329, - 0.1006 ),\n\tvec3( - 0.0728, - 0.0083, 1.1187 )\n);\nconst mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(\n\tvec3( 0.6274, 0.0691, 0.0164 ),\n\tvec3( 0.3293, 0.9195, 0.0880 ),\n\tvec3( 0.0433, 0.0113, 0.8956 )\n);\nvec3 agxDefaultContrastApprox( vec3 x ) {\n\tvec3 x2 = x * x;\n\tvec3 x4 = x2 * x2;\n\treturn + 15.5 * x4 * x2\n\t\t- 40.14 * x4 * x\n\t\t+ 31.96 * x4\n\t\t- 6.868 * x2 * x\n\t\t+ 0.4298 * x2\n\t\t+ 0.1191 * x\n\t\t- 0.00232;\n}\nvec3 AgXToneMapping( vec3 color ) {\n\tconst mat3 AgXInsetMatrix = mat3(\n\t\tvec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),\n\t\tvec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),\n\t\tvec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )\n\t);\n\tconst mat3 AgXOutsetMatrix = mat3(\n\t\tvec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),\n\t\tvec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),\n\t\tvec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )\n\t);\n\tconst float AgxMinEv = - 12.47393;\tconst float AgxMaxEv = 4.026069;\n\tcolor *= toneMappingExposure;\n\tcolor = LINEAR_SRGB_TO_LINEAR_REC2020 * color;\n\tcolor = AgXInsetMatrix * color;\n\tcolor = max( color, 1e-10 );\tcolor = log2( color );\n\tcolor = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );\n\tcolor = clamp( color, 0.0, 1.0 );\n\tcolor = agxDefaultContrastApprox( color );\n\tcolor = AgXOutsetMatrix * color;\n\tcolor = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );\n\tcolor = LINEAR_REC2020_TO_LINEAR_SRGB * color;\n\tcolor = clamp( color, 0.0, 1.0 );\n\treturn color;\n}\nvec3 NeutralToneMapping( vec3 color ) {\n\tconst float StartCompression = 0.8 - 0.04;\n\tconst float Desaturation = 0.15;\n\tcolor *= toneMappingExposure;\n\tfloat x = min( color.r, min( color.g, color.b ) );\n\tfloat offset = x < 0.08 ? x - 6.25 * x * x : 0.04;\n\tcolor -= offset;\n\tfloat peak = max( color.r, max( color.g, color.b ) );\n\tif ( peak < StartCompression ) return color;\n\tfloat d = 1. - StartCompression;\n\tfloat newPeak = 1. - d * d / ( peak + d - StartCompression );\n\tcolor *= newPeak / peak;\n\tfloat g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );\n\treturn mix( color, vec3( newPeak ), g );\n}\nvec3 CustomToneMapping( vec3 color ) { return color; }",
  gM =
    "#ifdef USE_TRANSMISSION\n\tmaterial.transmission = transmission;\n\tmaterial.transmissionAlpha = 1.0;\n\tmaterial.thickness = thickness;\n\tmaterial.attenuationDistance = attenuationDistance;\n\tmaterial.attenuationColor = attenuationColor;\n\t#ifdef USE_TRANSMISSIONMAP\n\t\tmaterial.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;\n\t#endif\n\t#ifdef USE_THICKNESSMAP\n\t\tmaterial.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;\n\t#endif\n\tvec3 pos = vWorldPosition;\n\tvec3 v = normalize( cameraPosition - pos );\n\tvec3 n = inverseTransformDirection( normal, viewMatrix );\n\tvec4 transmitted = getIBLVolumeRefraction(\n\t\tn, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,\n\t\tpos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,\n\t\tmaterial.attenuationColor, material.attenuationDistance );\n\tmaterial.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );\n\ttotalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );\n#endif",
  _M =
    "#ifdef USE_TRANSMISSION\n\tuniform float transmission;\n\tuniform float thickness;\n\tuniform float attenuationDistance;\n\tuniform vec3 attenuationColor;\n\t#ifdef USE_TRANSMISSIONMAP\n\t\tuniform sampler2D transmissionMap;\n\t#endif\n\t#ifdef USE_THICKNESSMAP\n\t\tuniform sampler2D thicknessMap;\n\t#endif\n\tuniform vec2 transmissionSamplerSize;\n\tuniform sampler2D transmissionSamplerMap;\n\tuniform mat4 modelMatrix;\n\tuniform mat4 projectionMatrix;\n\tvarying vec3 vWorldPosition;\n\tfloat w0( float a ) {\n\t\treturn ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );\n\t}\n\tfloat w1( float a ) {\n\t\treturn ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );\n\t}\n\tfloat w2( float a ){\n\t\treturn ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );\n\t}\n\tfloat w3( float a ) {\n\t\treturn ( 1.0 / 6.0 ) * ( a * a * a );\n\t}\n\tfloat g0( float a ) {\n\t\treturn w0( a ) + w1( a );\n\t}\n\tfloat g1( float a ) {\n\t\treturn w2( a ) + w3( a );\n\t}\n\tfloat h0( float a ) {\n\t\treturn - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );\n\t}\n\tfloat h1( float a ) {\n\t\treturn 1.0 + w3( a ) / ( w2( a ) + w3( a ) );\n\t}\n\tvec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {\n\t\tuv = uv * texelSize.zw + 0.5;\n\t\tvec2 iuv = floor( uv );\n\t\tvec2 fuv = fract( uv );\n\t\tfloat g0x = g0( fuv.x );\n\t\tfloat g1x = g1( fuv.x );\n\t\tfloat h0x = h0( fuv.x );\n\t\tfloat h1x = h1( fuv.x );\n\t\tfloat h0y = h0( fuv.y );\n\t\tfloat h1y = h1( fuv.y );\n\t\tvec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;\n\t\tvec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;\n\t\tvec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;\n\t\tvec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;\n\t\treturn g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +\n\t\t\tg1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );\n\t}\n\tvec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {\n\t\tvec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );\n\t\tvec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );\n\t\tvec2 fLodSizeInv = 1.0 / fLodSize;\n\t\tvec2 cLodSizeInv = 1.0 / cLodSize;\n\t\tvec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );\n\t\tvec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );\n\t\treturn mix( fSample, cSample, fract( lod ) );\n\t}\n\tvec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {\n\t\tvec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );\n\t\tvec3 modelScale;\n\t\tmodelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );\n\t\tmodelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );\n\t\tmodelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );\n\t\treturn normalize( refractionVector ) * thickness * modelScale;\n\t}\n\tfloat applyIorToRoughness( const in float roughness, const in float ior ) {\n\t\treturn roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );\n\t}\n\tvec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {\n\t\tfloat lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );\n\t\treturn textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );\n\t}\n\tvec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {\n\t\tif ( isinf( attenuationDistance ) ) {\n\t\t\treturn vec3( 1.0 );\n\t\t} else {\n\t\t\tvec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;\n\t\t\tvec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );\t\t\treturn transmittance;\n\t\t}\n\t}\n\tvec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,\n\t\tconst in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,\n\t\tconst in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,\n\t\tconst in vec3 attenuationColor, const in float attenuationDistance ) {\n\t\tvec4 transmittedLight;\n\t\tvec3 transmittance;\n\t\t#ifdef USE_DISPERSION\n\t\t\tfloat halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;\n\t\t\tvec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );\n\t\t\tfor ( int i = 0; i < 3; i ++ ) {\n\t\t\t\tvec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );\n\t\t\t\tvec3 refractedRayExit = position + transmissionRay;\n\t\t\n\t\t\t\tvec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );\n\t\t\t\tvec2 refractionCoords = ndcPos.xy / ndcPos.w;\n\t\t\t\trefractionCoords += 1.0;\n\t\t\t\trefractionCoords /= 2.0;\n\t\t\n\t\t\t\tvec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );\n\t\t\t\ttransmittedLight[ i ] = transmissionSample[ i ];\n\t\t\t\ttransmittedLight.a += transmissionSample.a;\n\t\t\t\ttransmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];\n\t\t\t}\n\t\t\ttransmittedLight.a /= 3.0;\n\t\t\n\t\t#else\n\t\t\n\t\t\tvec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );\n\t\t\tvec3 refractedRayExit = position + transmissionRay;\n\t\t\tvec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );\n\t\t\tvec2 refractionCoords = ndcPos.xy / ndcPos.w;\n\t\t\trefractionCoords += 1.0;\n\t\t\trefractionCoords /= 2.0;\n\t\t\ttransmittedLight = getTransmissionSample( refractionCoords, roughness, ior );\n\t\t\ttransmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );\n\t\t\n\t\t#endif\n\t\tvec3 attenuatedColor = transmittance * transmittedLight.rgb;\n\t\tvec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );\n\t\tfloat transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;\n\t\treturn vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );\n\t}\n#endif",
  vM =
    "#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n\tvarying vec2 vUv;\n#endif\n#ifdef USE_MAP\n\tvarying vec2 vMapUv;\n#endif\n#ifdef USE_ALPHAMAP\n\tvarying vec2 vAlphaMapUv;\n#endif\n#ifdef USE_LIGHTMAP\n\tvarying vec2 vLightMapUv;\n#endif\n#ifdef USE_AOMAP\n\tvarying vec2 vAoMapUv;\n#endif\n#ifdef USE_BUMPMAP\n\tvarying vec2 vBumpMapUv;\n#endif\n#ifdef USE_NORMALMAP\n\tvarying vec2 vNormalMapUv;\n#endif\n#ifdef USE_EMISSIVEMAP\n\tvarying vec2 vEmissiveMapUv;\n#endif\n#ifdef USE_METALNESSMAP\n\tvarying vec2 vMetalnessMapUv;\n#endif\n#ifdef USE_ROUGHNESSMAP\n\tvarying vec2 vRoughnessMapUv;\n#endif\n#ifdef USE_ANISOTROPYMAP\n\tvarying vec2 vAnisotropyMapUv;\n#endif\n#ifdef USE_CLEARCOATMAP\n\tvarying vec2 vClearcoatMapUv;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\tvarying vec2 vClearcoatNormalMapUv;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\tvarying vec2 vClearcoatRoughnessMapUv;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n\tvarying vec2 vIridescenceMapUv;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n\tvarying vec2 vIridescenceThicknessMapUv;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n\tvarying vec2 vSheenColorMapUv;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n\tvarying vec2 vSheenRoughnessMapUv;\n#endif\n#ifdef USE_SPECULARMAP\n\tvarying vec2 vSpecularMapUv;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n\tvarying vec2 vSpecularColorMapUv;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n\tvarying vec2 vSpecularIntensityMapUv;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n\tuniform mat3 transmissionMapTransform;\n\tvarying vec2 vTransmissionMapUv;\n#endif\n#ifdef USE_THICKNESSMAP\n\tuniform mat3 thicknessMapTransform;\n\tvarying vec2 vThicknessMapUv;\n#endif",
  xM =
    "#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n\tvarying vec2 vUv;\n#endif\n#ifdef USE_MAP\n\tuniform mat3 mapTransform;\n\tvarying vec2 vMapUv;\n#endif\n#ifdef USE_ALPHAMAP\n\tuniform mat3 alphaMapTransform;\n\tvarying vec2 vAlphaMapUv;\n#endif\n#ifdef USE_LIGHTMAP\n\tuniform mat3 lightMapTransform;\n\tvarying vec2 vLightMapUv;\n#endif\n#ifdef USE_AOMAP\n\tuniform mat3 aoMapTransform;\n\tvarying vec2 vAoMapUv;\n#endif\n#ifdef USE_BUMPMAP\n\tuniform mat3 bumpMapTransform;\n\tvarying vec2 vBumpMapUv;\n#endif\n#ifdef USE_NORMALMAP\n\tuniform mat3 normalMapTransform;\n\tvarying vec2 vNormalMapUv;\n#endif\n#ifdef USE_DISPLACEMENTMAP\n\tuniform mat3 displacementMapTransform;\n\tvarying vec2 vDisplacementMapUv;\n#endif\n#ifdef USE_EMISSIVEMAP\n\tuniform mat3 emissiveMapTransform;\n\tvarying vec2 vEmissiveMapUv;\n#endif\n#ifdef USE_METALNESSMAP\n\tuniform mat3 metalnessMapTransform;\n\tvarying vec2 vMetalnessMapUv;\n#endif\n#ifdef USE_ROUGHNESSMAP\n\tuniform mat3 roughnessMapTransform;\n\tvarying vec2 vRoughnessMapUv;\n#endif\n#ifdef USE_ANISOTROPYMAP\n\tuniform mat3 anisotropyMapTransform;\n\tvarying vec2 vAnisotropyMapUv;\n#endif\n#ifdef USE_CLEARCOATMAP\n\tuniform mat3 clearcoatMapTransform;\n\tvarying vec2 vClearcoatMapUv;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\tuniform mat3 clearcoatNormalMapTransform;\n\tvarying vec2 vClearcoatNormalMapUv;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\tuniform mat3 clearcoatRoughnessMapTransform;\n\tvarying vec2 vClearcoatRoughnessMapUv;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n\tuniform mat3 sheenColorMapTransform;\n\tvarying vec2 vSheenColorMapUv;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n\tuniform mat3 sheenRoughnessMapTransform;\n\tvarying vec2 vSheenRoughnessMapUv;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n\tuniform mat3 iridescenceMapTransform;\n\tvarying vec2 vIridescenceMapUv;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n\tuniform mat3 iridescenceThicknessMapTransform;\n\tvarying vec2 vIridescenceThicknessMapUv;\n#endif\n#ifdef USE_SPECULARMAP\n\tuniform mat3 specularMapTransform;\n\tvarying vec2 vSpecularMapUv;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n\tuniform mat3 specularColorMapTransform;\n\tvarying vec2 vSpecularColorMapUv;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n\tuniform mat3 specularIntensityMapTransform;\n\tvarying vec2 vSpecularIntensityMapUv;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n\tuniform mat3 transmissionMapTransform;\n\tvarying vec2 vTransmissionMapUv;\n#endif\n#ifdef USE_THICKNESSMAP\n\tuniform mat3 thicknessMapTransform;\n\tvarying vec2 vThicknessMapUv;\n#endif",
  yM =
    "#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n\tvUv = vec3( uv, 1 ).xy;\n#endif\n#ifdef USE_MAP\n\tvMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ALPHAMAP\n\tvAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_LIGHTMAP\n\tvLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_AOMAP\n\tvAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_BUMPMAP\n\tvBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_NORMALMAP\n\tvNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_DISPLACEMENTMAP\n\tvDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_EMISSIVEMAP\n\tvEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_METALNESSMAP\n\tvMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ROUGHNESSMAP\n\tvRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ANISOTROPYMAP\n\tvAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOATMAP\n\tvClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\tvClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\tvClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n\tvIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n\tvIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n\tvSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n\tvSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULARMAP\n\tvSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n\tvSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n\tvSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n\tvTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_THICKNESSMAP\n\tvThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;\n#endif",
  SM =
    "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0\n\tvec4 worldPosition = vec4( transformed, 1.0 );\n\t#ifdef USE_BATCHING\n\t\tworldPosition = batchingMatrix * worldPosition;\n\t#endif\n\t#ifdef USE_INSTANCING\n\t\tworldPosition = instanceMatrix * worldPosition;\n\t#endif\n\tworldPosition = modelMatrix * worldPosition;\n#endif";
const MM =
    "varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n\tgl_Position = vec4( position.xy, 1.0, 1.0 );\n}",
  EM =
    "uniform sampler2D t2D;\nuniform float backgroundIntensity;\nvarying vec2 vUv;\nvoid main() {\n\tvec4 texColor = texture2D( t2D, vUv );\n\t#ifdef DECODE_VIDEO_TEXTURE\n\t\ttexColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );\n\t#endif\n\ttexColor.rgb *= backgroundIntensity;\n\tgl_FragColor = texColor;\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n}",
  TM =
    "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}",
  wM =
    "#ifdef ENVMAP_TYPE_CUBE\n\tuniform samplerCube envMap;\n#elif defined( ENVMAP_TYPE_CUBE_UV )\n\tuniform sampler2D envMap;\n#endif\nuniform float flipEnvMap;\nuniform float backgroundBlurriness;\nuniform float backgroundIntensity;\nuniform mat3 backgroundRotation;\nvarying vec3 vWorldDirection;\n#include <cube_uv_reflection_fragment>\nvoid main() {\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );\n\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\tvec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );\n\t#else\n\t\tvec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n\t#endif\n\ttexColor.rgb *= backgroundIntensity;\n\tgl_FragColor = texColor;\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n}",
  AM =
    "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}",
  CM =
    "uniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\nvarying vec3 vWorldDirection;\nvoid main() {\n\tvec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );\n\tgl_FragColor = texColor;\n\tgl_FragColor.a *= opacity;\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n}",
  RM =
    "#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <uv_vertex>\n\t#include <batching_vertex>\n\t#include <skinbase_vertex>\n\t#include <morphinstance_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvHighPrecisionZW = gl_Position.zw;\n}",
  PM =
    "#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#include <clipping_planes_fragment>\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\t#include <logdepthbuf_fragment>\n\tfloat fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( fragCoordZ );\n\t#endif\n}",
  LM =
    "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <batching_vertex>\n\t#include <skinbase_vertex>\n\t#include <morphinstance_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition.xyz;\n}",
  bM =
    "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#include <clipping_planes_fragment>\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\tfloat dist = length( vWorldPosition - referencePosition );\n\tdist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n\tdist = saturate( dist );\n\tgl_FragColor = packDepthToRGBA( dist );\n}",
  DM =
    "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}",
  UM =
    "uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldDirection );\n\tvec2 sampleUV = equirectUv( direction );\n\tgl_FragColor = texture2D( tEquirect, sampleUV );\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n}",
  IM =
    "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\tvLineDistance = scale * lineDistance;\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphinstance_vertex>\n\t#include <morphcolor_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}",
  NM =
    "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\t#include <opaque_fragment>\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}",
  FM =
    "#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphinstance_vertex>\n\t#include <morphcolor_vertex>\n\t#include <batching_vertex>\n\t#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinbase_vertex>\n\t\t#include <skinnormal_vertex>\n\t\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n}",
  OM =
    "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <clipping_planes_fragment>\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\tvec4 lightMapTexel = texture2D( lightMap, vLightMapUv );\n\t\treflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <envmap_fragment>\n\t#include <opaque_fragment>\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
  zM =
    "#define LAMBERT\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphinstance_vertex>\n\t#include <morphcolor_vertex>\n\t#include <batching_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
  kM =
    "#define LAMBERT\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_lambert_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <clipping_planes_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_lambert_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\t#include <opaque_fragment>\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
  BM =
    "#define MATCAP\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphinstance_vertex>\n\t#include <morphcolor_vertex>\n\t#include <batching_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n\tvViewPosition = - mvPosition.xyz;\n}",
  HM =
    "#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <clipping_planes_fragment>\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tvec3 viewDir = normalize( vViewPosition );\n\tvec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n\tvec3 y = cross( viewDir, x );\n\tvec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n\t#ifdef USE_MATCAP\n\t\tvec4 matcapColor = texture2D( matcap, uv );\n\t#else\n\t\tvec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );\n\t#endif\n\tvec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n\t#include <opaque_fragment>\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
  VM =
    "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n\tvarying vec3 vViewPosition;\n#endif\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <batching_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphinstance_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n}",
  GM =
    "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n\tvarying vec3 vViewPosition;\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\tvec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );\n\t#include <clipping_planes_fragment>\n\t#include <logdepthbuf_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tgl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );\n\t#ifdef OPAQUE\n\t\tgl_FragColor.a = 1.0;\n\t#endif\n}",
  WM =
    "#define PHONG\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <batching_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphinstance_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
  XM =
    "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <clipping_planes_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\t#include <opaque_fragment>\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
  YM =
    "#define STANDARD\nvarying vec3 vViewPosition;\n#ifdef USE_TRANSMISSION\n\tvarying vec3 vWorldPosition;\n#endif\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphinstance_vertex>\n\t#include <morphcolor_vertex>\n\t#include <batching_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n#ifdef USE_TRANSMISSION\n\tvWorldPosition = worldPosition.xyz;\n#endif\n}",
  qM =
    "#define STANDARD\n#ifdef PHYSICAL\n\t#define IOR\n\t#define USE_SPECULAR\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef IOR\n\tuniform float ior;\n#endif\n#ifdef USE_SPECULAR\n\tuniform float specularIntensity;\n\tuniform vec3 specularColor;\n\t#ifdef USE_SPECULAR_COLORMAP\n\t\tuniform sampler2D specularColorMap;\n\t#endif\n\t#ifdef USE_SPECULAR_INTENSITYMAP\n\t\tuniform sampler2D specularIntensityMap;\n\t#endif\n#endif\n#ifdef USE_CLEARCOAT\n\tuniform float clearcoat;\n\tuniform float clearcoatRoughness;\n#endif\n#ifdef USE_DISPERSION\n\tuniform float dispersion;\n#endif\n#ifdef USE_IRIDESCENCE\n\tuniform float iridescence;\n\tuniform float iridescenceIOR;\n\tuniform float iridescenceThicknessMinimum;\n\tuniform float iridescenceThicknessMaximum;\n#endif\n#ifdef USE_SHEEN\n\tuniform vec3 sheenColor;\n\tuniform float sheenRoughness;\n\t#ifdef USE_SHEEN_COLORMAP\n\t\tuniform sampler2D sheenColorMap;\n\t#endif\n\t#ifdef USE_SHEEN_ROUGHNESSMAP\n\t\tuniform sampler2D sheenRoughnessMap;\n\t#endif\n#endif\n#ifdef USE_ANISOTROPY\n\tuniform vec2 anisotropyVector;\n\t#ifdef USE_ANISOTROPYMAP\n\t\tuniform sampler2D anisotropyMap;\n\t#endif\n#endif\nvarying vec3 vViewPosition;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <iridescence_fragment>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_physical_pars_fragment>\n#include <transmission_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <iridescence_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <clipping_planes_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <clearcoat_normal_fragment_begin>\n\t#include <clearcoat_normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;\n\tvec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;\n\t#include <transmission_fragment>\n\tvec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;\n\t#ifdef USE_SHEEN\n\t\tfloat sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );\n\t\toutgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;\n\t#endif\n\t#ifdef USE_CLEARCOAT\n\t\tfloat dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );\n\t\tvec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );\n\t\toutgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;\n\t#endif\n\t#include <opaque_fragment>\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
  $M =
    "#define TOON\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphinstance_vertex>\n\t#include <morphcolor_vertex>\n\t#include <batching_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
  jM =
    "#define TOON\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <clipping_planes_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_toon_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <opaque_fragment>\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
  KM =
    "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n#ifdef USE_POINTS_UV\n\tvarying vec2 vUv;\n\tuniform mat3 uvTransform;\n#endif\nvoid main() {\n\t#ifdef USE_POINTS_UV\n\t\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n\t#endif\n\t#include <color_vertex>\n\t#include <morphinstance_vertex>\n\t#include <morphcolor_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\tgl_PointSize = size;\n\t#ifdef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <fog_vertex>\n}",
  ZM =
    "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\t#include <opaque_fragment>\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}",
  QM =
    "#include <common>\n#include <batching_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <batching_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphinstance_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
  JM =
    "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <logdepthbuf_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\t#include <logdepthbuf_fragment>\n\tgl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n}",
  eE =
    "uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\tvec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n\tvec2 scale;\n\tscale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n\tscale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n\t#ifndef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) scale *= - mvPosition.z;\n\t#endif\n\tvec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n\tvec2 rotatedPosition;\n\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n\tmvPosition.xy += rotatedPosition;\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}",
  tE =
    "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\t#include <opaque_fragment>\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n}",
  De = {
    alphahash_fragment: Ey,
    alphahash_pars_fragment: Ty,
    alphamap_fragment: wy,
    alphamap_pars_fragment: Ay,
    alphatest_fragment: Cy,
    alphatest_pars_fragment: Ry,
    aomap_fragment: Py,
    aomap_pars_fragment: Ly,
    batching_pars_vertex: by,
    batching_vertex: Dy,
    begin_vertex: Uy,
    beginnormal_vertex: Iy,
    bsdfs: Ny,
    iridescence_fragment: Fy,
    bumpmap_pars_fragment: Oy,
    clipping_planes_fragment: zy,
    clipping_planes_pars_fragment: ky,
    clipping_planes_pars_vertex: By,
    clipping_planes_vertex: Hy,
    color_fragment: Vy,
    color_pars_fragment: Gy,
    color_pars_vertex: Wy,
    color_vertex: Xy,
    common: Yy,
    cube_uv_reflection_fragment: qy,
    defaultnormal_vertex: $y,
    displacementmap_pars_vertex: jy,
    displacementmap_vertex: Ky,
    emissivemap_fragment: Zy,
    emissivemap_pars_fragment: Qy,
    colorspace_fragment: Jy,
    colorspace_pars_fragment: eS,
    envmap_fragment: tS,
    envmap_common_pars_fragment: nS,
    envmap_pars_fragment: iS,
    envmap_pars_vertex: rS,
    envmap_physical_pars_fragment: mS,
    envmap_vertex: sS,
    fog_vertex: oS,
    fog_pars_vertex: aS,
    fog_fragment: lS,
    fog_pars_fragment: uS,
    gradientmap_pars_fragment: cS,
    lightmap_pars_fragment: fS,
    lights_lambert_fragment: dS,
    lights_lambert_pars_fragment: hS,
    lights_pars_begin: pS,
    lights_toon_fragment: gS,
    lights_toon_pars_fragment: _S,
    lights_phong_fragment: vS,
    lights_phong_pars_fragment: xS,
    lights_physical_fragment: yS,
    lights_physical_pars_fragment: SS,
    lights_fragment_begin: MS,
    lights_fragment_maps: ES,
    lights_fragment_end: TS,
    logdepthbuf_fragment: wS,
    logdepthbuf_pars_fragment: AS,
    logdepthbuf_pars_vertex: CS,
    logdepthbuf_vertex: RS,
    map_fragment: PS,
    map_pars_fragment: LS,
    map_particle_fragment: bS,
    map_particle_pars_fragment: DS,
    metalnessmap_fragment: US,
    metalnessmap_pars_fragment: IS,
    morphinstance_vertex: NS,
    morphcolor_vertex: FS,
    morphnormal_vertex: OS,
    morphtarget_pars_vertex: zS,
    morphtarget_vertex: kS,
    normal_fragment_begin: BS,
    normal_fragment_maps: HS,
    normal_pars_fragment: VS,
    normal_pars_vertex: GS,
    normal_vertex: WS,
    normalmap_pars_fragment: XS,
    clearcoat_normal_fragment_begin: YS,
    clearcoat_normal_fragment_maps: qS,
    clearcoat_pars_fragment: $S,
    iridescence_pars_fragment: jS,
    opaque_fragment: KS,
    packing: ZS,
    premultiplied_alpha_fragment: QS,
    project_vertex: JS,
    dithering_fragment: eM,
    dithering_pars_fragment: tM,
    roughnessmap_fragment: nM,
    roughnessmap_pars_fragment: iM,
    shadowmap_pars_fragment: rM,
    shadowmap_pars_vertex: sM,
    shadowmap_vertex: oM,
    shadowmask_pars_fragment: aM,
    skinbase_vertex: lM,
    skinning_pars_vertex: uM,
    skinning_vertex: cM,
    skinnormal_vertex: fM,
    specularmap_fragment: dM,
    specularmap_pars_fragment: hM,
    tonemapping_fragment: pM,
    tonemapping_pars_fragment: mM,
    transmission_fragment: gM,
    transmission_pars_fragment: _M,
    uv_pars_fragment: vM,
    uv_pars_vertex: xM,
    uv_vertex: yM,
    worldpos_vertex: SM,
    background_vert: MM,
    background_frag: EM,
    backgroundCube_vert: TM,
    backgroundCube_frag: wM,
    cube_vert: AM,
    cube_frag: CM,
    depth_vert: RM,
    depth_frag: PM,
    distanceRGBA_vert: LM,
    distanceRGBA_frag: bM,
    equirect_vert: DM,
    equirect_frag: UM,
    linedashed_vert: IM,
    linedashed_frag: NM,
    meshbasic_vert: FM,
    meshbasic_frag: OM,
    meshlambert_vert: zM,
    meshlambert_frag: kM,
    meshmatcap_vert: BM,
    meshmatcap_frag: HM,
    meshnormal_vert: VM,
    meshnormal_frag: GM,
    meshphong_vert: WM,
    meshphong_frag: XM,
    meshphysical_vert: YM,
    meshphysical_frag: qM,
    meshtoon_vert: $M,
    meshtoon_frag: jM,
    points_vert: KM,
    points_frag: ZM,
    shadow_vert: QM,
    shadow_frag: JM,
    sprite_vert: eE,
    sprite_frag: tE,
  },
  ae = {
    common: {
      diffuse: { value: new Ze(16777215) },
      opacity: { value: 1 },
      map: { value: null },
      mapTransform: { value: new Ue() },
      alphaMap: { value: null },
      alphaMapTransform: { value: new Ue() },
      alphaTest: { value: 0 },
    },
    specularmap: {
      specularMap: { value: null },
      specularMapTransform: { value: new Ue() },
    },
    envmap: {
      envMap: { value: null },
      envMapRotation: { value: new Ue() },
      flipEnvMap: { value: -1 },
      reflectivity: { value: 1 },
      ior: { value: 1.5 },
      refractionRatio: { value: 0.98 },
    },
    aomap: {
      aoMap: { value: null },
      aoMapIntensity: { value: 1 },
      aoMapTransform: { value: new Ue() },
    },
    lightmap: {
      lightMap: { value: null },
      lightMapIntensity: { value: 1 },
      lightMapTransform: { value: new Ue() },
    },
    bumpmap: {
      bumpMap: { value: null },
      bumpMapTransform: { value: new Ue() },
      bumpScale: { value: 1 },
    },
    normalmap: {
      normalMap: { value: null },
      normalMapTransform: { value: new Ue() },
      normalScale: { value: new Ve(1, 1) },
    },
    displacementmap: {
      displacementMap: { value: null },
      displacementMapTransform: { value: new Ue() },
      displacementScale: { value: 1 },
      displacementBias: { value: 0 },
    },
    emissivemap: {
      emissiveMap: { value: null },
      emissiveMapTransform: { value: new Ue() },
    },
    metalnessmap: {
      metalnessMap: { value: null },
      metalnessMapTransform: { value: new Ue() },
    },
    roughnessmap: {
      roughnessMap: { value: null },
      roughnessMapTransform: { value: new Ue() },
    },
    gradientmap: { gradientMap: { value: null } },
    fog: {
      fogDensity: { value: 25e-5 },
      fogNear: { value: 1 },
      fogFar: { value: 2e3 },
      fogColor: { value: new Ze(16777215) },
    },
    lights: {
      ambientLightColor: { value: [] },
      lightProbe: { value: [] },
      directionalLights: {
        value: [],
        properties: { direction: {}, color: {} },
      },
      directionalLightShadows: {
        value: [],
        properties: {
          shadowIntensity: 1,
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
        },
      },
      directionalShadowMap: { value: [] },
      directionalShadowMatrix: { value: [] },
      spotLights: {
        value: [],
        properties: {
          color: {},
          position: {},
          direction: {},
          distance: {},
          coneCos: {},
          penumbraCos: {},
          decay: {},
        },
      },
      spotLightShadows: {
        value: [],
        properties: {
          shadowIntensity: 1,
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
        },
      },
      spotLightMap: { value: [] },
      spotShadowMap: { value: [] },
      spotLightMatrix: { value: [] },
      pointLights: {
        value: [],
        properties: { color: {}, position: {}, decay: {}, distance: {} },
      },
      pointLightShadows: {
        value: [],
        properties: {
          shadowIntensity: 1,
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
          shadowCameraNear: {},
          shadowCameraFar: {},
        },
      },
      pointShadowMap: { value: [] },
      pointShadowMatrix: { value: [] },
      hemisphereLights: {
        value: [],
        properties: { direction: {}, skyColor: {}, groundColor: {} },
      },
      rectAreaLights: {
        value: [],
        properties: { color: {}, position: {}, width: {}, height: {} },
      },
      ltc_1: { value: null },
      ltc_2: { value: null },
    },
    points: {
      diffuse: { value: new Ze(16777215) },
      opacity: { value: 1 },
      size: { value: 1 },
      scale: { value: 1 },
      map: { value: null },
      alphaMap: { value: null },
      alphaMapTransform: { value: new Ue() },
      alphaTest: { value: 0 },
      uvTransform: { value: new Ue() },
    },
    sprite: {
      diffuse: { value: new Ze(16777215) },
      opacity: { value: 1 },
      center: { value: new Ve(0.5, 0.5) },
      rotation: { value: 0 },
      map: { value: null },
      mapTransform: { value: new Ue() },
      alphaMap: { value: null },
      alphaMapTransform: { value: new Ue() },
      alphaTest: { value: 0 },
    },
  },
  On = {
    basic: {
      uniforms: zt([
        ae.common,
        ae.specularmap,
        ae.envmap,
        ae.aomap,
        ae.lightmap,
        ae.fog,
      ]),
      vertexShader: De.meshbasic_vert,
      fragmentShader: De.meshbasic_frag,
    },
    lambert: {
      uniforms: zt([
        ae.common,
        ae.specularmap,
        ae.envmap,
        ae.aomap,
        ae.lightmap,
        ae.emissivemap,
        ae.bumpmap,
        ae.normalmap,
        ae.displacementmap,
        ae.fog,
        ae.lights,
        { emissive: { value: new Ze(0) } },
      ]),
      vertexShader: De.meshlambert_vert,
      fragmentShader: De.meshlambert_frag,
    },
    phong: {
      uniforms: zt([
        ae.common,
        ae.specularmap,
        ae.envmap,
        ae.aomap,
        ae.lightmap,
        ae.emissivemap,
        ae.bumpmap,
        ae.normalmap,
        ae.displacementmap,
        ae.fog,
        ae.lights,
        {
          emissive: { value: new Ze(0) },
          specular: { value: new Ze(1118481) },
          shininess: { value: 30 },
        },
      ]),
      vertexShader: De.meshphong_vert,
      fragmentShader: De.meshphong_frag,
    },
    standard: {
      uniforms: zt([
        ae.common,
        ae.envmap,
        ae.aomap,
        ae.lightmap,
        ae.emissivemap,
        ae.bumpmap,
        ae.normalmap,
        ae.displacementmap,
        ae.roughnessmap,
        ae.metalnessmap,
        ae.fog,
        ae.lights,
        {
          emissive: { value: new Ze(0) },
          roughness: { value: 1 },
          metalness: { value: 0 },
          envMapIntensity: { value: 1 },
        },
      ]),
      vertexShader: De.meshphysical_vert,
      fragmentShader: De.meshphysical_frag,
    },
    toon: {
      uniforms: zt([
        ae.common,
        ae.aomap,
        ae.lightmap,
        ae.emissivemap,
        ae.bumpmap,
        ae.normalmap,
        ae.displacementmap,
        ae.gradientmap,
        ae.fog,
        ae.lights,
        { emissive: { value: new Ze(0) } },
      ]),
      vertexShader: De.meshtoon_vert,
      fragmentShader: De.meshtoon_frag,
    },
    matcap: {
      uniforms: zt([
        ae.common,
        ae.bumpmap,
        ae.normalmap,
        ae.displacementmap,
        ae.fog,
        { matcap: { value: null } },
      ]),
      vertexShader: De.meshmatcap_vert,
      fragmentShader: De.meshmatcap_frag,
    },
    points: {
      uniforms: zt([ae.points, ae.fog]),
      vertexShader: De.points_vert,
      fragmentShader: De.points_frag,
    },
    dashed: {
      uniforms: zt([
        ae.common,
        ae.fog,
        {
          scale: { value: 1 },
          dashSize: { value: 1 },
          totalSize: { value: 2 },
        },
      ]),
      vertexShader: De.linedashed_vert,
      fragmentShader: De.linedashed_frag,
    },
    depth: {
      uniforms: zt([ae.common, ae.displacementmap]),
      vertexShader: De.depth_vert,
      fragmentShader: De.depth_frag,
    },
    normal: {
      uniforms: zt([
        ae.common,
        ae.bumpmap,
        ae.normalmap,
        ae.displacementmap,
        { opacity: { value: 1 } },
      ]),
      vertexShader: De.meshnormal_vert,
      fragmentShader: De.meshnormal_frag,
    },
    sprite: {
      uniforms: zt([ae.sprite, ae.fog]),
      vertexShader: De.sprite_vert,
      fragmentShader: De.sprite_frag,
    },
    background: {
      uniforms: {
        uvTransform: { value: new Ue() },
        t2D: { value: null },
        backgroundIntensity: { value: 1 },
      },
      vertexShader: De.background_vert,
      fragmentShader: De.background_frag,
    },
    backgroundCube: {
      uniforms: {
        envMap: { value: null },
        flipEnvMap: { value: -1 },
        backgroundBlurriness: { value: 0 },
        backgroundIntensity: { value: 1 },
        backgroundRotation: { value: new Ue() },
      },
      vertexShader: De.backgroundCube_vert,
      fragmentShader: De.backgroundCube_frag,
    },
    cube: {
      uniforms: {
        tCube: { value: null },
        tFlip: { value: -1 },
        opacity: { value: 1 },
      },
      vertexShader: De.cube_vert,
      fragmentShader: De.cube_frag,
    },
    equirect: {
      uniforms: { tEquirect: { value: null } },
      vertexShader: De.equirect_vert,
      fragmentShader: De.equirect_frag,
    },
    distanceRGBA: {
      uniforms: zt([
        ae.common,
        ae.displacementmap,
        {
          referencePosition: { value: new F() },
          nearDistance: { value: 1 },
          farDistance: { value: 1e3 },
        },
      ]),
      vertexShader: De.distanceRGBA_vert,
      fragmentShader: De.distanceRGBA_frag,
    },
    shadow: {
      uniforms: zt([
        ae.lights,
        ae.fog,
        { color: { value: new Ze(0) }, opacity: { value: 1 } },
      ]),
      vertexShader: De.shadow_vert,
      fragmentShader: De.shadow_frag,
    },
  };
On.physical = {
  uniforms: zt([
    On.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatMapTransform: { value: new Ue() },
      clearcoatNormalMap: { value: null },
      clearcoatNormalMapTransform: { value: new Ue() },
      clearcoatNormalScale: { value: new Ve(1, 1) },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatRoughnessMapTransform: { value: new Ue() },
      dispersion: { value: 0 },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceMapTransform: { value: new Ue() },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      iridescenceThicknessMapTransform: { value: new Ue() },
      sheen: { value: 0 },
      sheenColor: { value: new Ze(0) },
      sheenColorMap: { value: null },
      sheenColorMapTransform: { value: new Ue() },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      sheenRoughnessMapTransform: { value: new Ue() },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionMapTransform: { value: new Ue() },
      transmissionSamplerSize: { value: new Ve() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      thicknessMapTransform: { value: new Ue() },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: new Ze(0) },
      specularColor: { value: new Ze(1, 1, 1) },
      specularColorMap: { value: null },
      specularColorMapTransform: { value: new Ue() },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularIntensityMapTransform: { value: new Ue() },
      anisotropyVector: { value: new Ve() },
      anisotropyMap: { value: null },
      anisotropyMapTransform: { value: new Ue() },
    },
  ]),
  vertexShader: De.meshphysical_vert,
  fragmentShader: De.meshphysical_frag,
};
const ma = { r: 0, b: 0, g: 0 },
  Qi = new fi(),
  nE = new St();
function iE(e, t, n, r, i, a, o) {
  const s = new Ze(0);
  let l,
    c,
    u = !0 === a ? 0 : 1,
    d = null,
    h = 0,
    f = null;
  function p(e) {
    let r = !0 === e.isScene ? e.background : null;
    return (
      r && r.isTexture && (r = (e.backgroundBlurriness > 0 ? n : t).get(r)), r
    );
  }
  function m(t, n) {
    t.getRGB(ma, f_(e)), r.buffers.color.setClear(ma.r, ma.g, ma.b, n, o);
  }
  return {
    getClearColor: function () {
      return s;
    },
    setClearColor: function (e, t = 1) {
      s.set(e), (u = t), m(s, u);
    },
    getClearAlpha: function () {
      return u;
    },
    setClearAlpha: function (e) {
      (u = e), m(s, u);
    },
    render: function (t) {
      let n = !1;
      const i = p(t);
      null === i ? m(s, u) : i && i.isColor && (m(i, 1), (n = !0));
      const a = e.xr.getEnvironmentBlendMode();
      "additive" === a
        ? r.buffers.color.setClear(0, 0, 0, 1, o)
        : "alpha-blend" === a && r.buffers.color.setClear(0, 0, 0, 0, o),
        (e.autoClear || n) &&
          (r.buffers.depth.setTest(!0),
          r.buffers.depth.setMask(!0),
          r.buffers.color.setMask(!0),
          e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil));
    },
    addToRenderList: function (t, n) {
      const r = p(n);
      r && (r.isCubeTexture || r.mapping === Rl)
        ? (void 0 === c &&
            ((c = new Bn(
              new Po(1, 1, 1),
              new di({
                name: "BackgroundCubeMaterial",
                uniforms: Ms(On.backgroundCube.uniforms),
                vertexShader: On.backgroundCube.vertexShader,
                fragmentShader: On.backgroundCube.fragmentShader,
                side: Kt,
                depthTest: !1,
                depthWrite: !1,
                fog: !1,
              })
            )),
            c.geometry.deleteAttribute("normal"),
            c.geometry.deleteAttribute("uv"),
            (c.onBeforeRender = function (e, t, n) {
              this.matrixWorld.copyPosition(n.matrixWorld);
            }),
            Object.defineProperty(c.material, "envMap", {
              get: function () {
                return this.uniforms.envMap.value;
              },
            }),
            i.update(c)),
          Qi.copy(n.backgroundRotation),
          (Qi.x *= -1),
          (Qi.y *= -1),
          (Qi.z *= -1),
          r.isCubeTexture &&
            !1 === r.isRenderTargetTexture &&
            ((Qi.y *= -1), (Qi.z *= -1)),
          (c.material.uniforms.envMap.value = r),
          (c.material.uniforms.flipEnvMap.value =
            r.isCubeTexture && !1 === r.isRenderTargetTexture ? -1 : 1),
          (c.material.uniforms.backgroundBlurriness.value =
            n.backgroundBlurriness),
          (c.material.uniforms.backgroundIntensity.value =
            n.backgroundIntensity),
          c.material.uniforms.backgroundRotation.value.setFromMatrix4(
            nE.makeRotationFromEuler(Qi)
          ),
          (c.material.toneMapped = $e.getTransfer(r.colorSpace) !== et),
          (d !== r || h !== r.version || f !== e.toneMapping) &&
            ((c.material.needsUpdate = !0),
            (d = r),
            (h = r.version),
            (f = e.toneMapping)),
          c.layers.enableAll(),
          t.unshift(c, c.geometry, c.material, 0, 0, null))
        : r &&
          r.isTexture &&
          (void 0 === l &&
            ((l = new Bn(
              new bl(2, 2),
              new di({
                name: "BackgroundMaterial",
                uniforms: Ms(On.background.uniforms),
                vertexShader: On.background.vertexShader,
                fragmentShader: On.background.fragmentShader,
                side: Hi,
                depthTest: !1,
                depthWrite: !1,
                fog: !1,
              })
            )),
            l.geometry.deleteAttribute("normal"),
            Object.defineProperty(l.material, "map", {
              get: function () {
                return this.uniforms.t2D.value;
              },
            }),
            i.update(l)),
          (l.material.uniforms.t2D.value = r),
          (l.material.uniforms.backgroundIntensity.value =
            n.backgroundIntensity),
          (l.material.toneMapped = $e.getTransfer(r.colorSpace) !== et),
          !0 === r.matrixAutoUpdate && r.updateMatrix(),
          l.material.uniforms.uvTransform.value.copy(r.matrix),
          (d !== r || h !== r.version || f !== e.toneMapping) &&
            ((l.material.needsUpdate = !0),
            (d = r),
            (h = r.version),
            (f = e.toneMapping)),
          l.layers.enableAll(),
          t.unshift(l, l.geometry, l.material, 0, 0, null));
    },
  };
}
function rE(e, t) {
  const n = e.getParameter(e.MAX_VERTEX_ATTRIBS),
    r = {},
    i = c(null);
  let a = i,
    o = !1;
  function s(t) {
    return e.bindVertexArray(t);
  }
  function l(t) {
    return e.deleteVertexArray(t);
  }
  function c(e) {
    const t = [],
      r = [],
      i = [];
    for (let e = 0; e < n; e++) (t[e] = 0), (r[e] = 0), (i[e] = 0);
    return {
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: t,
      enabledAttributes: r,
      attributeDivisors: i,
      object: e,
      attributes: {},
      index: null,
    };
  }
  function u() {
    const e = a.newAttributes;
    for (let t = 0, n = e.length; t < n; t++) e[t] = 0;
  }
  function d(e) {
    h(e, 0);
  }
  function h(t, n) {
    const r = a.newAttributes,
      i = a.enabledAttributes,
      o = a.attributeDivisors;
    (r[t] = 1),
      0 === i[t] && (e.enableVertexAttribArray(t), (i[t] = 1)),
      o[t] !== n && (e.vertexAttribDivisor(t, n), (o[t] = n));
  }
  function f() {
    const t = a.newAttributes,
      n = a.enabledAttributes;
    for (let r = 0, i = n.length; r < i; r++)
      n[r] !== t[r] && (e.disableVertexAttribArray(r), (n[r] = 0));
  }
  function p(t, n, r, i, a, o, s) {
    !0 === s
      ? e.vertexAttribIPointer(t, n, r, a, o)
      : e.vertexAttribPointer(t, n, r, i, a, o);
  }
  function m() {
    g(), (o = !0), a !== i && ((a = i), s(a.object));
  }
  function g() {
    (i.geometry = null), (i.program = null), (i.wireframe = !1);
  }
  return {
    setup: function (n, i, l, m, g) {
      let v = !1;
      const _ = (function (t, n, i) {
        const a = !0 === i.wireframe;
        let o = r[t.id];
        void 0 === o && ((o = {}), (r[t.id] = o));
        let s = o[n.id];
        void 0 === s && ((s = {}), (o[n.id] = s));
        let l = s[a];
        return void 0 === l && ((l = c(e.createVertexArray())), (s[a] = l)), l;
      })(m, l, i);
      a !== _ && ((a = _), s(a.object)),
        (v = (function (e, t, n, r) {
          const i = a.attributes,
            o = t.attributes;
          let s = 0;
          const l = n.getAttributes();
          for (const t in l)
            if (l[t].location >= 0) {
              const n = i[t];
              let r = o[t];
              if (
                (void 0 === r &&
                  ("instanceMatrix" === t &&
                    e.instanceMatrix &&
                    (r = e.instanceMatrix),
                  "instanceColor" === t &&
                    e.instanceColor &&
                    (r = e.instanceColor)),
                void 0 === n || n.attribute !== r || (r && n.data !== r.data))
              )
                return !0;
              s++;
            }
          return a.attributesNum !== s || a.index !== r;
        })(n, m, l, g)),
        v &&
          (function (e, t, n, r) {
            const i = {},
              o = t.attributes;
            let s = 0;
            const l = n.getAttributes();
            for (const t in l)
              if (l[t].location >= 0) {
                let n = o[t];
                void 0 === n &&
                  ("instanceMatrix" === t &&
                    e.instanceMatrix &&
                    (n = e.instanceMatrix),
                  "instanceColor" === t &&
                    e.instanceColor &&
                    (n = e.instanceColor));
                const r = {};
                (r.attribute = n),
                  n && n.data && (r.data = n.data),
                  (i[t] = r),
                  s++;
              }
            (a.attributes = i), (a.attributesNum = s), (a.index = r);
          })(n, m, l, g),
        null !== g && t.update(g, e.ELEMENT_ARRAY_BUFFER),
        (v || o) &&
          ((o = !1),
          (function (n, r, i, a) {
            u();
            const o = a.attributes,
              s = i.getAttributes(),
              l = r.defaultAttributeValues;
            for (const r in s) {
              const i = s[r];
              if (i.location >= 0) {
                let s = o[r];
                if (
                  (void 0 === s &&
                    ("instanceMatrix" === r &&
                      n.instanceMatrix &&
                      (s = n.instanceMatrix),
                    "instanceColor" === r &&
                      n.instanceColor &&
                      (s = n.instanceColor)),
                  void 0 !== s)
                ) {
                  const r = s.normalized,
                    o = s.itemSize,
                    l = t.get(s);
                  if (void 0 === l) continue;
                  const c = l.buffer,
                    u = l.type,
                    f = l.bytesPerElement,
                    m = u === e.INT || u === e.UNSIGNED_INT || s.gpuType === od;
                  if (s.isInterleavedBufferAttribute) {
                    const t = s.data,
                      l = t.stride,
                      g = s.offset;
                    if (t.isInstancedInterleavedBuffer) {
                      for (let e = 0; e < i.locationSize; e++)
                        h(i.location + e, t.meshPerAttribute);
                      !0 !== n.isInstancedMesh &&
                        void 0 === a._maxInstanceCount &&
                        (a._maxInstanceCount = t.meshPerAttribute * t.count);
                    } else
                      for (let e = 0; e < i.locationSize; e++)
                        d(i.location + e);
                    e.bindBuffer(e.ARRAY_BUFFER, c);
                    for (let e = 0; e < i.locationSize; e++)
                      p(
                        i.location + e,
                        o / i.locationSize,
                        u,
                        r,
                        l * f,
                        (g + (o / i.locationSize) * e) * f,
                        m
                      );
                  } else {
                    if (s.isInstancedBufferAttribute) {
                      for (let e = 0; e < i.locationSize; e++)
                        h(i.location + e, s.meshPerAttribute);
                      !0 !== n.isInstancedMesh &&
                        void 0 === a._maxInstanceCount &&
                        (a._maxInstanceCount = s.meshPerAttribute * s.count);
                    } else
                      for (let e = 0; e < i.locationSize; e++)
                        d(i.location + e);
                    e.bindBuffer(e.ARRAY_BUFFER, c);
                    for (let e = 0; e < i.locationSize; e++)
                      p(
                        i.location + e,
                        o / i.locationSize,
                        u,
                        r,
                        o * f,
                        (o / i.locationSize) * e * f,
                        m
                      );
                  }
                } else if (void 0 !== l) {
                  const t = l[r];
                  if (void 0 !== t)
                    switch (t.length) {
                      case 2:
                        e.vertexAttrib2fv(i.location, t);
                        break;
                      case 3:
                        e.vertexAttrib3fv(i.location, t);
                        break;
                      case 4:
                        e.vertexAttrib4fv(i.location, t);
                        break;
                      default:
                        e.vertexAttrib1fv(i.location, t);
                    }
                }
              }
            }
            f();
          })(n, i, l, m),
          null !== g && e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, t.get(g).buffer));
    },
    reset: m,
    resetDefaultState: g,
    dispose: function () {
      m();
      for (const e in r) {
        const t = r[e];
        for (const e in t) {
          const n = t[e];
          for (const e in n) l(n[e].object), delete n[e];
          delete t[e];
        }
        delete r[e];
      }
    },
    releaseStatesOfGeometry: function (e) {
      if (void 0 === r[e.id]) return;
      const t = r[e.id];
      for (const e in t) {
        const n = t[e];
        for (const e in n) l(n[e].object), delete n[e];
        delete t[e];
      }
      delete r[e.id];
    },
    releaseStatesOfProgram: function (e) {
      for (const t in r) {
        const n = r[t];
        if (void 0 === n[e.id]) continue;
        const i = n[e.id];
        for (const e in i) l(i[e].object), delete i[e];
        delete n[e.id];
      }
    },
    initAttributes: u,
    enableAttribute: d,
    disableUnusedAttributes: f,
  };
}
function sE(e, t, n) {
  let r;
  function i(t, i, a) {
    0 !== a && (e.drawArraysInstanced(r, t, i, a), n.update(i, r, a));
  }
  (this.setMode = function (e) {
    r = e;
  }),
    (this.render = function (t, i) {
      e.drawArrays(r, t, i), n.update(i, r, 1);
    }),
    (this.renderInstances = i),
    (this.renderMultiDraw = function (e, i, a) {
      if (0 === a) return;
      t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r, e, 0, i, 0, a);
      let o = 0;
      for (let e = 0; e < a; e++) o += i[e];
      n.update(o, r, 1);
    }),
    (this.renderMultiDrawInstances = function (e, a, o, s) {
      if (0 === o) return;
      const l = t.get("WEBGL_multi_draw");
      if (null === l) for (let t = 0; t < e.length; t++) i(e[t], a[t], s[t]);
      else {
        l.multiDrawArraysInstancedWEBGL(r, e, 0, a, 0, s, 0, o);
        let t = 0;
        for (let e = 0; e < o; e++) t += a[e];
        for (let e = 0; e < s.length; e++) n.update(t, r, s[e]);
      }
    });
}
function oE(e, t, n, r) {
  let i;
  function a(t) {
    if ("highp" === t) {
      if (
        e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_FLOAT).precision >
          0 &&
        e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT).precision >
          0
      )
        return "highp";
      t = "mediump";
    }
    return "mediump" === t &&
      e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_FLOAT).precision >
        0 &&
      e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_FLOAT).precision >
        0
      ? "mediump"
      : "lowp";
  }
  let o = void 0 !== n.precision ? n.precision : "highp";
  const s = a(o);
  s !== o &&
    (console.warn(
      "THREE.WebGLRenderer:",
      o,
      "not supported, using",
      s,
      "instead."
    ),
    (o = s));
  const l = !0 === n.logarithmicDepthBuffer,
    c = e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),
    u = e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS);
  return {
    isWebGL2: !0,
    getMaxAnisotropy: function () {
      if (void 0 !== i) return i;
      if (!0 === t.has("EXT_texture_filter_anisotropic")) {
        const n = t.get("EXT_texture_filter_anisotropic");
        i = e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
      } else i = 0;
      return i;
    },
    getMaxPrecision: a,
    textureFormatReadable: function (t) {
      return !(
        t !== Pn &&
        r.convert(t) !== e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)
      );
    },
    textureTypeReadable: function (n) {
      const i =
        n === wo &&
        (t.has("EXT_color_buffer_half_float") ||
          t.has("EXT_color_buffer_float"));
      return !(
        n !== ci &&
        r.convert(n) !== e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE) &&
        n !== ii &&
        !i
      );
    },
    precision: o,
    logarithmicDepthBuffer: l,
    maxTextures: c,
    maxVertexTextures: u,
    maxTextureSize: e.getParameter(e.MAX_TEXTURE_SIZE),
    maxCubemapSize: e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),
    maxAttributes: e.getParameter(e.MAX_VERTEX_ATTRIBS),
    maxVertexUniforms: e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),
    maxVaryings: e.getParameter(e.MAX_VARYING_VECTORS),
    maxFragmentUniforms: e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),
    vertexTextures: u > 0,
    maxSamples: e.getParameter(e.MAX_SAMPLES),
  };
}
function aE(e) {
  const t = this;
  let n = null,
    r = 0,
    i = !1,
    a = !1;
  const o = new nr(),
    s = new Ue(),
    l = { value: null, needsUpdate: !1 };
  function c(e, n, r, i) {
    const a = null !== e ? e.length : 0;
    let c = null;
    if (0 !== a) {
      if (((c = l.value), !0 !== i || null === c)) {
        const t = r + 4 * a,
          i = n.matrixWorldInverse;
        s.getNormalMatrix(i),
          (null === c || c.length < t) && (c = new Float32Array(t));
        for (let t = 0, n = r; t !== a; ++t, n += 4)
          o.copy(e[t]).applyMatrix4(i, s),
            o.normal.toArray(c, n),
            (c[n + 3] = o.constant);
      }
      (l.value = c), (l.needsUpdate = !0);
    }
    return (t.numPlanes = a), (t.numIntersection = 0), c;
  }
  (this.uniform = l),
    (this.numPlanes = 0),
    (this.numIntersection = 0),
    (this.init = function (e, t) {
      const n = 0 !== e.length || t || 0 !== r || i;
      return (i = t), (r = e.length), n;
    }),
    (this.beginShadows = function () {
      (a = !0), c(null);
    }),
    (this.endShadows = function () {
      a = !1;
    }),
    (this.setGlobalState = function (e, t) {
      n = c(e, t, 0);
    }),
    (this.setState = function (o, s, u) {
      const d = o.clippingPlanes,
        h = o.clipIntersection,
        f = o.clipShadows,
        p = e.get(o);
      if (!i || null === d || 0 === d.length || (a && !f))
        a
          ? c(null)
          : (l.value !== n && ((l.value = n), (l.needsUpdate = r > 0)),
            (t.numPlanes = r),
            (t.numIntersection = 0));
      else {
        const e = a ? 0 : r,
          t = 4 * e;
        let i = p.clippingState || null;
        (l.value = i), (i = c(d, s, t, u));
        for (let e = 0; e !== t; ++e) i[e] = n[e];
        (p.clippingState = i),
          (this.numIntersection = h ? this.numPlanes : 0),
          (this.numPlanes += e);
      }
    });
}
function lE(e) {
  let t = new WeakMap();
  function n(e, t) {
    return t === Dc ? (e.mapping = vs) : t === Uc && (e.mapping = xs), e;
  }
  function r(e) {
    const n = e.target;
    n.removeEventListener("dispose", r);
    const i = t.get(n);
    void 0 !== i && (t.delete(n), i.dispose());
  }
  return {
    get: function (i) {
      if (i && i.isTexture) {
        const a = i.mapping;
        if (a === Dc || a === Uc) {
          if (t.has(i)) {
            return n(t.get(i).texture, i.mapping);
          }
          {
            const a = i.image;
            if (a && a.height > 0) {
              const o = new xy(a.height);
              return (
                o.fromEquirectangularTexture(e, i),
                t.set(i, o),
                i.addEventListener("dispose", r),
                n(o.texture, i.mapping)
              );
            }
            return null;
          }
        }
      }
      return i;
    },
    dispose: function () {
      t = new WeakMap();
    },
  };
}
class uE extends d_ {
  constructor(e = -1, t = 1, n = 1, r = -1, i = 0.1, a = 2e3) {
    super(),
      (this.isOrthographicCamera = !0),
      (this.type = "OrthographicCamera"),
      (this.zoom = 1),
      (this.view = null),
      (this.left = e),
      (this.right = t),
      (this.top = n),
      (this.bottom = r),
      (this.near = i),
      (this.far = a),
      this.updateProjectionMatrix();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.left = e.left),
      (this.right = e.right),
      (this.top = e.top),
      (this.bottom = e.bottom),
      (this.near = e.near),
      (this.far = e.far),
      (this.zoom = e.zoom),
      (this.view = null === e.view ? null : Object.assign({}, e.view)),
      this
    );
  }
  setViewOffset(e, t, n, r, i, a) {
    null === this.view &&
      (this.view = {
        enabled: !0,
        fullWidth: 1,
        fullHeight: 1,
        offsetX: 0,
        offsetY: 0,
        width: 1,
        height: 1,
      }),
      (this.view.enabled = !0),
      (this.view.fullWidth = e),
      (this.view.fullHeight = t),
      (this.view.offsetX = n),
      (this.view.offsetY = r),
      (this.view.width = i),
      (this.view.height = a),
      this.updateProjectionMatrix();
  }
  clearViewOffset() {
    null !== this.view && (this.view.enabled = !1),
      this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom),
      t = (this.top - this.bottom) / (2 * this.zoom),
      n = (this.right + this.left) / 2,
      r = (this.top + this.bottom) / 2;
    let i = n - e,
      a = n + e,
      o = r + t,
      s = r - t;
    if (null !== this.view && this.view.enabled) {
      const e = (this.right - this.left) / this.view.fullWidth / this.zoom,
        t = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      (i += e * this.view.offsetX),
        (a = i + e * this.view.width),
        (o -= t * this.view.offsetY),
        (s = o - t * this.view.height);
    }
    this.projectionMatrix.makeOrthographic(
      i,
      a,
      o,
      s,
      this.near,
      this.far,
      this.coordinateSystem
    ),
      this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.object.zoom = this.zoom),
      (t.object.left = this.left),
      (t.object.right = this.right),
      (t.object.top = this.top),
      (t.object.bottom = this.bottom),
      (t.object.near = this.near),
      (t.object.far = this.far),
      null !== this.view && (t.object.view = Object.assign({}, this.view)),
      t
    );
  }
}
const es = 4,
  sp = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582],
  sr = 20,
  Lu = new uE(),
  op = new Ze();
let bu = null,
  Du = 0,
  Uu = 0,
  Iu = !1;
const ir = (1 + Math.sqrt(5)) / 2,
  Hr = 1 / ir,
  ap = [
    new F(-ir, Hr, 0),
    new F(ir, Hr, 0),
    new F(-Hr, 0, ir),
    new F(Hr, 0, ir),
    new F(0, ir, -Hr),
    new F(0, ir, Hr),
    new F(-1, 1, -1),
    new F(1, 1, -1),
    new F(-1, 1, 1),
    new F(1, 1, 1),
  ];
class lp {
  constructor(e) {
    (this._renderer = e),
      (this._pingPongRenderTarget = null),
      (this._lodMax = 0),
      (this._cubeSize = 0),
      (this._lodPlanes = []),
      (this._sizeLods = []),
      (this._sigmas = []),
      (this._blurMaterial = null),
      (this._cubemapMaterial = null),
      (this._equirectMaterial = null),
      this._compileMaterial(this._blurMaterial);
  }
  fromScene(e, t = 0, n = 0.1, r = 100) {
    (bu = this._renderer.getRenderTarget()),
      (Du = this._renderer.getActiveCubeFace()),
      (Uu = this._renderer.getActiveMipmapLevel()),
      (Iu = this._renderer.xr.enabled),
      (this._renderer.xr.enabled = !1),
      this._setSize(256);
    const i = this._allocateTargets();
    return (
      (i.depthBuffer = !0),
      this._sceneToCubeUV(e, n, r, i),
      t > 0 && this._blur(i, 0, 0, t),
      this._applyPMREM(i),
      this._cleanup(i),
      i
    );
  }
  fromEquirectangular(e, t = null) {
    return this._fromTexture(e, t);
  }
  fromCubemap(e, t = null) {
    return this._fromTexture(e, t);
  }
  compileCubemapShader() {
    null === this._cubemapMaterial &&
      ((this._cubemapMaterial = fp()),
      this._compileMaterial(this._cubemapMaterial));
  }
  compileEquirectangularShader() {
    null === this._equirectMaterial &&
      ((this._equirectMaterial = cp()),
      this._compileMaterial(this._equirectMaterial));
  }
  dispose() {
    this._dispose(),
      null !== this._cubemapMaterial && this._cubemapMaterial.dispose(),
      null !== this._equirectMaterial && this._equirectMaterial.dispose();
  }
  _setSize(e) {
    (this._lodMax = Math.floor(Math.log2(e))),
      (this._cubeSize = Math.pow(2, this._lodMax));
  }
  _dispose() {
    null !== this._blurMaterial && this._blurMaterial.dispose(),
      null !== this._pingPongRenderTarget &&
        this._pingPongRenderTarget.dispose();
    for (let e = 0; e < this._lodPlanes.length; e++)
      this._lodPlanes[e].dispose();
  }
  _cleanup(e) {
    this._renderer.setRenderTarget(bu, Du, Uu),
      (this._renderer.xr.enabled = Iu),
      (e.scissorTest = !1),
      ga(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === vs || e.mapping === xs
      ? this._setSize(
          0 === e.image.length ? 16 : e.image[0].width || e.image[0].image.width
        )
      : this._setSize(e.image.width / 4),
      (bu = this._renderer.getRenderTarget()),
      (Du = this._renderer.getActiveCubeFace()),
      (Uu = this._renderer.getActiveMipmapLevel()),
      (Iu = this._renderer.xr.enabled),
      (this._renderer.xr.enabled = !1);
    const n = t || this._allocateTargets();
    return (
      this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n
    );
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112),
      t = 4 * this._cubeSize,
      n = {
        magFilter: Rn,
        minFilter: Rn,
        generateMipmaps: !1,
        type: wo,
        format: Pn,
        colorSpace: Xi,
        depthBuffer: !1,
      },
      r = up(e, t, n);
    if (
      null === this._pingPongRenderTarget ||
      this._pingPongRenderTarget.width !== e ||
      this._pingPongRenderTarget.height !== t
    ) {
      null !== this._pingPongRenderTarget && this._dispose(),
        (this._pingPongRenderTarget = up(e, t, n));
      const { _lodMax: r } = this;
      ({
        sizeLods: this._sizeLods,
        lodPlanes: this._lodPlanes,
        sigmas: this._sigmas,
      } = cE(r)),
        (this._blurMaterial = fE(r, e, t));
    }
    return r;
  }
  _compileMaterial(e) {
    const t = new Bn(this._lodPlanes[0], e);
    this._renderer.compile(t, Lu);
  }
  _sceneToCubeUV(e, t, n, r) {
    const i = new pn(90, 1, t, n),
      a = [1, -1, 1, 1, 1, 1],
      o = [1, 1, 1, -1, -1, -1],
      s = this._renderer,
      l = s.autoClear,
      c = s.toneMapping;
    s.getClearColor(op), (s.toneMapping = zi), (s.autoClear = !1);
    const u = new l_({
        name: "PMREM.Background",
        side: Kt,
        depthWrite: !1,
        depthTest: !1,
      }),
      d = new Bn(new Po(), u);
    let h = !1;
    const f = e.background;
    f
      ? f.isColor && (u.color.copy(f), (e.background = null), (h = !0))
      : (u.color.copy(op), (h = !0));
    for (let t = 0; t < 6; t++) {
      const n = t % 3;
      0 === n
        ? (i.up.set(0, a[t], 0), i.lookAt(o[t], 0, 0))
        : 1 === n
        ? (i.up.set(0, 0, a[t]), i.lookAt(0, o[t], 0))
        : (i.up.set(0, a[t], 0), i.lookAt(0, 0, o[t]));
      const l = this._cubeSize;
      ga(r, n * l, t > 2 ? l : 0, l, l),
        s.setRenderTarget(r),
        h && s.render(d, i),
        s.render(e, i);
    }
    d.geometry.dispose(),
      d.material.dispose(),
      (s.toneMapping = c),
      (s.autoClear = l),
      (e.background = f);
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer,
      r = e.mapping === vs || e.mapping === xs;
    r
      ? (null === this._cubemapMaterial && (this._cubemapMaterial = fp()),
        (this._cubemapMaterial.uniforms.flipEnvMap.value =
          !1 === e.isRenderTargetTexture ? -1 : 1))
      : null === this._equirectMaterial && (this._equirectMaterial = cp());
    const i = r ? this._cubemapMaterial : this._equirectMaterial,
      a = new Bn(this._lodPlanes[0], i);
    i.uniforms.envMap.value = e;
    const o = this._cubeSize;
    ga(t, 0, 0, 3 * o, 2 * o), n.setRenderTarget(t), n.render(a, Lu);
  }
  _applyPMREM(e) {
    const t = this._renderer,
      n = t.autoClear;
    t.autoClear = !1;
    const r = this._lodPlanes.length;
    for (let t = 1; t < r; t++) {
      const n = Math.sqrt(
          this._sigmas[t] * this._sigmas[t] -
            this._sigmas[t - 1] * this._sigmas[t - 1]
        ),
        i = ap[(r - t - 1) % ap.length];
      this._blur(e, t - 1, t, n, i);
    }
    t.autoClear = n;
  }
  _blur(e, t, n, r, i) {
    const a = this._pingPongRenderTarget;
    this._halfBlur(e, a, t, n, r, "latitudinal", i),
      this._halfBlur(a, e, n, n, r, "longitudinal", i);
  }
  _halfBlur(e, t, n, r, i, a, o) {
    const s = this._renderer,
      l = this._blurMaterial;
    "latitudinal" !== a &&
      "longitudinal" !== a &&
      console.error(
        "blur direction must be either latitudinal or longitudinal!"
      );
    const c = new Bn(this._lodPlanes[r], l),
      u = l.uniforms,
      d = this._sizeLods[n] - 1,
      h = isFinite(i) ? Math.PI / (2 * d) : (2 * Math.PI) / 39,
      f = i / h,
      p = isFinite(i) ? 1 + Math.floor(3 * f) : 20;
    p > 20 &&
      console.warn(
        `sigmaRadians, ${i}, is too large and will clip, as it requested ${p} samples when the maximum is set to 20`
      );
    const m = [];
    let g = 0;
    for (let e = 0; e < 20; ++e) {
      const t = e / f,
        n = Math.exp((-t * t) / 2);
      m.push(n), 0 === e ? (g += n) : e < p && (g += 2 * n);
    }
    for (let e = 0; e < m.length; e++) m[e] = m[e] / g;
    (u.envMap.value = e.texture),
      (u.samples.value = p),
      (u.weights.value = m),
      (u.latitudinal.value = "latitudinal" === a),
      o && (u.poleAxis.value = o);
    const { _lodMax: v } = this;
    (u.dTheta.value = h), (u.mipInt.value = v - n);
    const _ = this._sizeLods[r];
    ga(
      t,
      3 * _ * (r > v - 4 ? r - v + 4 : 0),
      4 * (this._cubeSize - _),
      3 * _,
      2 * _
    ),
      s.setRenderTarget(t),
      s.render(c, Lu);
  }
}
function cE(e) {
  const t = [],
    n = [],
    r = [];
  let i = e;
  const a = e - 4 + 1 + sp.length;
  for (let o = 0; o < a; o++) {
    const a = Math.pow(2, i);
    n.push(a);
    let s = 1 / a;
    o > e - 4 ? (s = sp[o - e + 4 - 1]) : 0 === o && (s = 0), r.push(s);
    const l = 1 / (a - 2),
      c = -l,
      u = 1 + l,
      d = [c, c, u, c, u, u, c, c, u, u, c, u],
      h = 6,
      f = 6,
      p = 3,
      m = 2,
      g = 1,
      v = new Float32Array(p * f * h),
      _ = new Float32Array(m * f * h),
      x = new Float32Array(g * f * h);
    for (let e = 0; e < h; e++) {
      const t = ((e % 3) * 2) / 3 - 1,
        n = e > 2 ? 0 : -1,
        r = [
          t,
          n,
          0,
          t + 2 / 3,
          n,
          0,
          t + 2 / 3,
          n + 1,
          0,
          t,
          n,
          0,
          t + 2 / 3,
          n + 1,
          0,
          t,
          n + 1,
          0,
        ];
      v.set(r, p * f * e), _.set(d, m * f * e);
      const i = [e, e, e, e, e, e];
      x.set(i, g * f * e);
    }
    const y = new Yi();
    y.setAttribute("position", new Gn(v, p)),
      y.setAttribute("uv", new Gn(_, m)),
      y.setAttribute("faceIndex", new Gn(x, g)),
      t.push(y),
      i > 4 && i--;
  }
  return { lodPlanes: t, sizeLods: n, sigmas: r };
}
function up(e, t, n) {
  const r = new yr(e, t, n);
  return (
    (r.texture.mapping = Rl),
    (r.texture.name = "PMREM.cubeUv"),
    (r.scissorTest = !0),
    r
  );
}
function ga(e, t, n, r, i) {
  e.viewport.set(t, n, r, i), e.scissor.set(t, n, r, i);
}
function fE(e, t, n) {
  const r = new Float32Array(20),
    i = new F(0, 1, 0);
  return new di({
    name: "SphericalGaussianBlur",
    defines: {
      n: 20,
      CUBEUV_TEXEL_WIDTH: 1 / t,
      CUBEUV_TEXEL_HEIGHT: 1 / n,
      CUBEUV_MAX_MIP: `${e}.0`,
    },
    uniforms: {
      envMap: { value: null },
      samples: { value: 1 },
      weights: { value: r },
      latitudinal: { value: !1 },
      dTheta: { value: 0 },
      mipInt: { value: 0 },
      poleAxis: { value: i },
    },
    vertexShader: pd(),
    fragmentShader:
      "\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform sampler2D envMap;\n\t\t\tuniform int samples;\n\t\t\tuniform float weights[ n ];\n\t\t\tuniform bool latitudinal;\n\t\t\tuniform float dTheta;\n\t\t\tuniform float mipInt;\n\t\t\tuniform vec3 poleAxis;\n\n\t\t\t#define ENVMAP_TYPE_CUBE_UV\n\t\t\t#include <cube_uv_reflection_fragment>\n\n\t\t\tvec3 getSample( float theta, vec3 axis ) {\n\n\t\t\t\tfloat cosTheta = cos( theta );\n\t\t\t\t// Rodrigues' axis-angle rotation\n\t\t\t\tvec3 sampleDirection = vOutputDirection * cosTheta\n\t\t\t\t\t+ cross( axis, vOutputDirection ) * sin( theta )\n\t\t\t\t\t+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );\n\n\t\t\t\treturn bilinearCubeUV( envMap, sampleDirection, mipInt );\n\n\t\t\t}\n\n\t\t\tvoid main() {\n\n\t\t\t\tvec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );\n\n\t\t\t\tif ( all( equal( axis, vec3( 0.0 ) ) ) ) {\n\n\t\t\t\t\taxis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );\n\n\t\t\t\t}\n\n\t\t\t\taxis = normalize( axis );\n\n\t\t\t\tgl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n\t\t\t\tgl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );\n\n\t\t\t\tfor ( int i = 1; i < n; i++ ) {\n\n\t\t\t\t\tif ( i >= samples ) {\n\n\t\t\t\t\t\tbreak;\n\n\t\t\t\t\t}\n\n\t\t\t\t\tfloat theta = dTheta * float( i );\n\t\t\t\t\tgl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );\n\t\t\t\t\tgl_FragColor.rgb += weights[ i ] * getSample( theta, axis );\n\n\t\t\t\t}\n\n\t\t\t}\n\t\t",
    blending: 0,
    depthTest: !1,
    depthWrite: !1,
  });
}
function cp() {
  return new di({
    name: "EquirectangularToCubeUV",
    uniforms: { envMap: { value: null } },
    vertexShader: pd(),
    fragmentShader:
      "\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform sampler2D envMap;\n\n\t\t\t#include <common>\n\n\t\t\tvoid main() {\n\n\t\t\t\tvec3 outputDirection = normalize( vOutputDirection );\n\t\t\t\tvec2 uv = equirectUv( outputDirection );\n\n\t\t\t\tgl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );\n\n\t\t\t}\n\t\t",
    blending: 0,
    depthTest: !1,
    depthWrite: !1,
  });
}
function fp() {
  return new di({
    name: "CubemapToCubeUV",
    uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } },
    vertexShader: pd(),
    fragmentShader:
      "\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tuniform float flipEnvMap;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform samplerCube envMap;\n\n\t\t\tvoid main() {\n\n\t\t\t\tgl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );\n\n\t\t\t}\n\t\t",
    blending: 0,
    depthTest: !1,
    depthWrite: !1,
  });
}
function pd() {
  return "\n\n\t\tprecision mediump float;\n\t\tprecision mediump int;\n\n\t\tattribute float faceIndex;\n\n\t\tvarying vec3 vOutputDirection;\n\n\t\t// RH coordinate system; PMREM face-indexing convention\n\t\tvec3 getDirection( vec2 uv, float face ) {\n\n\t\t\tuv = 2.0 * uv - 1.0;\n\n\t\t\tvec3 direction = vec3( uv, 1.0 );\n\n\t\t\tif ( face == 0.0 ) {\n\n\t\t\t\tdirection = direction.zyx; // ( 1, v, u ) pos x\n\n\t\t\t} else if ( face == 1.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xz *= -1.0; // ( -u, 1, -v ) pos y\n\n\t\t\t} else if ( face == 2.0 ) {\n\n\t\t\t\tdirection.x *= -1.0; // ( -u, v, 1 ) pos z\n\n\t\t\t} else if ( face == 3.0 ) {\n\n\t\t\t\tdirection = direction.zyx;\n\t\t\t\tdirection.xz *= -1.0; // ( -1, v, -u ) neg x\n\n\t\t\t} else if ( face == 4.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xy *= -1.0; // ( -u, -1, v ) neg y\n\n\t\t\t} else if ( face == 5.0 ) {\n\n\t\t\t\tdirection.z *= -1.0; // ( u, v, -1 ) neg z\n\n\t\t\t}\n\n\t\t\treturn direction;\n\n\t\t}\n\n\t\tvoid main() {\n\n\t\t\tvOutputDirection = getDirection( uv, faceIndex );\n\t\t\tgl_Position = vec4( position, 1.0 );\n\n\t\t}\n\t";
}
function dE(e) {
  let t = new WeakMap(),
    n = null;
  function r(e) {
    const n = e.target;
    n.removeEventListener("dispose", r);
    const i = t.get(n);
    void 0 !== i && (t.delete(n), i.dispose());
  }
  return {
    get: function (i) {
      if (i && i.isTexture) {
        const a = i.mapping,
          o = a === Dc || a === Uc,
          s = a === vs || a === xs;
        if (o || s) {
          let a = t.get(i);
          const l = void 0 !== a ? a.texture.pmremVersion : 0;
          if (i.isRenderTargetTexture && i.pmremVersion !== l)
            return (
              null === n && (n = new lp(e)),
              (a = o ? n.fromEquirectangular(i, a) : n.fromCubemap(i, a)),
              (a.texture.pmremVersion = i.pmremVersion),
              t.set(i, a),
              a.texture
            );
          if (void 0 !== a) return a.texture;
          {
            const l = i.image;
            return (o && l && l.height > 0) ||
              (s &&
                l &&
                (function (e) {
                  let t = 0;
                  const n = 6;
                  for (let r = 0; r < n; r++) void 0 !== e[r] && t++;
                  return t === n;
                })(l))
              ? (null === n && (n = new lp(e)),
                (a = o ? n.fromEquirectangular(i) : n.fromCubemap(i)),
                (a.texture.pmremVersion = i.pmremVersion),
                t.set(i, a),
                i.addEventListener("dispose", r),
                a.texture)
              : null;
          }
        }
      }
      return i;
    },
    dispose: function () {
      (t = new WeakMap()), null !== n && (n.dispose(), (n = null));
    },
  };
}
function hE(e) {
  const t = {};
  function n(n) {
    if (void 0 !== t[n]) return t[n];
    let r;
    switch (n) {
      case "WEBGL_depth_texture":
        r =
          e.getExtension("WEBGL_depth_texture") ||
          e.getExtension("MOZ_WEBGL_depth_texture") ||
          e.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        r =
          e.getExtension("EXT_texture_filter_anisotropic") ||
          e.getExtension("MOZ_EXT_texture_filter_anisotropic") ||
          e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        r =
          e.getExtension("WEBGL_compressed_texture_s3tc") ||
          e.getExtension("MOZ_WEBGL_compressed_texture_s3tc") ||
          e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        r =
          e.getExtension("WEBGL_compressed_texture_pvrtc") ||
          e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        r = e.getExtension(n);
    }
    return (t[n] = r), r;
  }
  return {
    has: function (e) {
      return null !== n(e);
    },
    init: function () {
      n("EXT_color_buffer_float"),
        n("WEBGL_clip_cull_distance"),
        n("OES_texture_float_linear"),
        n("EXT_color_buffer_half_float"),
        n("WEBGL_multisampled_render_to_texture"),
        n("WEBGL_render_shared_exponent");
    },
    get: function (e) {
      const t = n(e);
      return (
        null === t &&
          i_("THREE.WebGLRenderer: " + e + " extension not supported."),
        t
      );
    },
  };
}
function pE(e, t, n, r) {
  const i = {},
    a = new WeakMap();
  function o(e) {
    const s = e.target;
    null !== s.index && t.remove(s.index);
    for (const e in s.attributes) t.remove(s.attributes[e]);
    for (const e in s.morphAttributes) {
      const n = s.morphAttributes[e];
      for (let e = 0, r = n.length; e < r; e++) t.remove(n[e]);
    }
    s.removeEventListener("dispose", o), delete i[s.id];
    const l = a.get(s);
    l && (t.remove(l), a.delete(s)),
      r.releaseStatesOfGeometry(s),
      !0 === s.isInstancedBufferGeometry && delete s._maxInstanceCount,
      n.memory.geometries--;
  }
  function s(e) {
    const n = [],
      r = e.index,
      i = e.attributes.position;
    let o = 0;
    if (null !== r) {
      const e = r.array;
      o = r.version;
      for (let t = 0, r = e.length; t < r; t += 3) {
        const r = e[t + 0],
          i = e[t + 1],
          a = e[t + 2];
        n.push(r, i, i, a, a, r);
      }
    } else {
      if (void 0 === i) return;
      {
        const e = i.array;
        o = i.version;
        for (let t = 0, r = e.length / 3 - 1; t < r; t += 3) {
          const e = t + 0,
            r = t + 1,
            i = t + 2;
          n.push(e, r, r, i, i, e);
        }
      }
    }
    const s = new (n_(n) ? c_ : u_)(n, 1);
    s.version = o;
    const l = a.get(e);
    l && t.remove(l), a.set(e, s);
  }
  return {
    get: function (e, t) {
      return (
        !0 === i[t.id] ||
          (t.addEventListener("dispose", o),
          (i[t.id] = !0),
          n.memory.geometries++),
        t
      );
    },
    update: function (n) {
      const r = n.attributes;
      for (const n in r) t.update(r[n], e.ARRAY_BUFFER);
      const i = n.morphAttributes;
      for (const n in i) {
        const r = i[n];
        for (let n = 0, i = r.length; n < i; n++)
          t.update(r[n], e.ARRAY_BUFFER);
      }
    },
    getWireframeAttribute: function (e) {
      const t = a.get(e);
      if (t) {
        const n = e.index;
        null !== n && t.version < n.version && s(e);
      } else s(e);
      return a.get(e);
    },
  };
}
function mE(e, t, n) {
  let r, i, a;
  function o(t, o, s) {
    0 !== s && (e.drawElementsInstanced(r, o, i, t * a, s), n.update(o, r, s));
  }
  (this.setMode = function (e) {
    r = e;
  }),
    (this.setIndex = function (e) {
      (i = e.type), (a = e.bytesPerElement);
    }),
    (this.render = function (t, o) {
      e.drawElements(r, o, i, t * a), n.update(o, r, 1);
    }),
    (this.renderInstances = o),
    (this.renderMultiDraw = function (e, a, o) {
      if (0 === o) return;
      t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r, a, 0, i, e, 0, o);
      let s = 0;
      for (let e = 0; e < o; e++) s += a[e];
      n.update(s, r, 1);
    }),
    (this.renderMultiDrawInstances = function (e, s, l, c) {
      if (0 === l) return;
      const u = t.get("WEBGL_multi_draw");
      if (null === u)
        for (let t = 0; t < e.length; t++) o(e[t] / a, s[t], c[t]);
      else {
        u.multiDrawElementsInstancedWEBGL(r, s, 0, i, e, 0, c, 0, l);
        let t = 0;
        for (let e = 0; e < l; e++) t += s[e];
        for (let e = 0; e < c.length; e++) n.update(t, r, c[e]);
      }
    });
}
function gE(e) {
  const t = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
  return {
    memory: { geometries: 0, textures: 0 },
    render: t,
    programs: null,
    autoReset: !0,
    reset: function () {
      (t.calls = 0), (t.triangles = 0), (t.points = 0), (t.lines = 0);
    },
    update: function (n, r, i) {
      switch ((t.calls++, r)) {
        case e.TRIANGLES:
          t.triangles += i * (n / 3);
          break;
        case e.LINES:
          t.lines += i * (n / 2);
          break;
        case e.LINE_STRIP:
          t.lines += i * (n - 1);
          break;
        case e.LINE_LOOP:
          t.lines += i * n;
          break;
        case e.POINTS:
          t.points += i * n;
          break;
        default:
          console.error("THREE.WebGLInfo: Unknown draw mode:", r);
      }
    },
  };
}
function _E(e, t, n) {
  const r = new WeakMap(),
    i = new st();
  return {
    update: function (a, o, s) {
      const l = a.morphTargetInfluences,
        c =
          o.morphAttributes.position ||
          o.morphAttributes.normal ||
          o.morphAttributes.color,
        u = void 0 !== c ? c.length : 0;
      let d = r.get(o);
      if (void 0 === d || d.count !== u) {
        let e = function () {
          v.dispose(), r.delete(o), o.removeEventListener("dispose", e);
        };
        void 0 !== d && d.texture.dispose();
        const n = void 0 !== o.morphAttributes.position,
          a = void 0 !== o.morphAttributes.normal,
          s = void 0 !== o.morphAttributes.color,
          l = o.morphAttributes.position || [],
          c = o.morphAttributes.normal || [],
          h = o.morphAttributes.color || [];
        let f = 0;
        !0 === n && (f = 1), !0 === a && (f = 2), !0 === s && (f = 3);
        let p = o.attributes.position.count * f,
          m = 1;
        p > t.maxTextureSize &&
          ((m = Math.ceil(p / t.maxTextureSize)), (p = t.maxTextureSize));
        const g = new Float32Array(p * m * 4 * u),
          v = new s_(g, p, m, u);
        (v.type = ii), (v.needsUpdate = !0);
        const _ = 4 * f;
        for (let e = 0; e < u; e++) {
          const t = l[e],
            r = c[e],
            o = h[e],
            u = p * m * 4 * e;
          for (let e = 0; e < t.count; e++) {
            const l = e * _;
            !0 === n &&
              (i.fromBufferAttribute(t, e),
              (g[u + l + 0] = i.x),
              (g[u + l + 1] = i.y),
              (g[u + l + 2] = i.z),
              (g[u + l + 3] = 0)),
              !0 === a &&
                (i.fromBufferAttribute(r, e),
                (g[u + l + 4] = i.x),
                (g[u + l + 5] = i.y),
                (g[u + l + 6] = i.z),
                (g[u + l + 7] = 0)),
              !0 === s &&
                (i.fromBufferAttribute(o, e),
                (g[u + l + 8] = i.x),
                (g[u + l + 9] = i.y),
                (g[u + l + 10] = i.z),
                (g[u + l + 11] = 4 === o.itemSize ? i.w : 1));
          }
        }
        (d = { count: u, texture: v, size: new Ve(p, m) }),
          r.set(o, d),
          o.addEventListener("dispose", e);
      }
      if (!0 === a.isInstancedMesh && null !== a.morphTexture)
        s.getUniforms().setValue(e, "morphTexture", a.morphTexture, n);
      else {
        let t = 0;
        for (let e = 0; e < l.length; e++) t += l[e];
        const n = o.morphTargetsRelative ? 1 : 1 - t;
        s.getUniforms().setValue(e, "morphTargetBaseInfluence", n),
          s.getUniforms().setValue(e, "morphTargetInfluences", l);
      }
      s.getUniforms().setValue(e, "morphTargetsTexture", d.texture, n),
        s.getUniforms().setValue(e, "morphTargetsTextureSize", d.size);
    },
  };
}
function vE(e, t, n, r) {
  let i = new WeakMap();
  function a(e) {
    const t = e.target;
    t.removeEventListener("dispose", a),
      n.remove(t.instanceMatrix),
      null !== t.instanceColor && n.remove(t.instanceColor);
  }
  return {
    update: function (o) {
      const s = r.render.frame,
        l = o.geometry,
        c = t.get(o, l);
      if (
        (i.get(c) !== s && (t.update(c), i.set(c, s)),
        o.isInstancedMesh &&
          (!1 === o.hasEventListener("dispose", a) &&
            o.addEventListener("dispose", a),
          i.get(o) !== s &&
            (n.update(o.instanceMatrix, e.ARRAY_BUFFER),
            null !== o.instanceColor &&
              n.update(o.instanceColor, e.ARRAY_BUFFER),
            i.set(o, s))),
        o.isSkinnedMesh)
      ) {
        const e = o.skeleton;
        i.get(e) !== s && (e.update(), i.set(e, s));
      }
      return c;
    },
    dispose: function () {
      i = new WeakMap();
    },
  };
}
class g_ extends Zt {
  constructor(e, t, n, r, i, a, o, s, l, c = us) {
    if (c !== us && c !== Ss)
      throw new Error(
        "DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat"
      );
    void 0 === n && c === us && (n = xr),
      void 0 === n && c === Ss && (n = ys),
      super(null, r, i, a, o, s, c, n, l),
      (this.isDepthTexture = !0),
      (this.image = { width: e, height: t }),
      (this.magFilter = void 0 !== o ? o : gn),
      (this.minFilter = void 0 !== s ? s : gn),
      (this.flipY = !1),
      (this.generateMipmaps = !1),
      (this.compareFunction = null);
  }
  copy(e) {
    return super.copy(e), (this.compareFunction = e.compareFunction), this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      null !== this.compareFunction &&
        (t.compareFunction = this.compareFunction),
      t
    );
  }
}
const __ = new Zt(),
  dp = new g_(1, 1),
  v_ = new s_(),
  x_ = new ny(),
  y_ = new h_(),
  hp = [],
  pp = [],
  mp = new Float32Array(16),
  gp = new Float32Array(9),
  _p = new Float32Array(4);
function Cs(e, t, n) {
  const r = e[0];
  if (r <= 0 || r > 0) return e;
  const i = t * n;
  let a = hp[i];
  if ((void 0 === a && ((a = new Float32Array(i)), (hp[i] = a)), 0 !== t)) {
    r.toArray(a, 0);
    for (let r = 1, i = 0; r !== t; ++r) (i += n), e[r].toArray(a, i);
  }
  return a;
}
function Mt(e, t) {
  if (e.length !== t.length) return !1;
  for (let n = 0, r = e.length; n < r; n++) if (e[n] !== t[n]) return !1;
  return !0;
}
function Et(e, t) {
  for (let n = 0, r = t.length; n < r; n++) e[n] = t[n];
}
function Dl(e, t) {
  let n = pp[t];
  void 0 === n && ((n = new Int32Array(t)), (pp[t] = n));
  for (let r = 0; r !== t; ++r) n[r] = e.allocateTextureUnit();
  return n;
}
function xE(e, t) {
  const n = this.cache;
  n[0] !== t && (e.uniform1f(this.addr, t), (n[0] = t));
}
function yE(e, t) {
  const n = this.cache;
  if (void 0 !== t.x)
    (n[0] !== t.x || n[1] !== t.y) &&
      (e.uniform2f(this.addr, t.x, t.y), (n[0] = t.x), (n[1] = t.y));
  else {
    if (Mt(n, t)) return;
    e.uniform2fv(this.addr, t), Et(n, t);
  }
}
function SE(e, t) {
  const n = this.cache;
  if (void 0 !== t.x)
    (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z) &&
      (e.uniform3f(this.addr, t.x, t.y, t.z),
      (n[0] = t.x),
      (n[1] = t.y),
      (n[2] = t.z));
  else if (void 0 !== t.r)
    (n[0] !== t.r || n[1] !== t.g || n[2] !== t.b) &&
      (e.uniform3f(this.addr, t.r, t.g, t.b),
      (n[0] = t.r),
      (n[1] = t.g),
      (n[2] = t.b));
  else {
    if (Mt(n, t)) return;
    e.uniform3fv(this.addr, t), Et(n, t);
  }
}
function ME(e, t) {
  const n = this.cache;
  if (void 0 !== t.x)
    (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z || n[3] !== t.w) &&
      (e.uniform4f(this.addr, t.x, t.y, t.z, t.w),
      (n[0] = t.x),
      (n[1] = t.y),
      (n[2] = t.z),
      (n[3] = t.w));
  else {
    if (Mt(n, t)) return;
    e.uniform4fv(this.addr, t), Et(n, t);
  }
}
function EE(e, t) {
  const n = this.cache,
    r = t.elements;
  if (void 0 === r) {
    if (Mt(n, t)) return;
    e.uniformMatrix2fv(this.addr, !1, t), Et(n, t);
  } else {
    if (Mt(n, r)) return;
    _p.set(r), e.uniformMatrix2fv(this.addr, !1, _p), Et(n, r);
  }
}
function TE(e, t) {
  const n = this.cache,
    r = t.elements;
  if (void 0 === r) {
    if (Mt(n, t)) return;
    e.uniformMatrix3fv(this.addr, !1, t), Et(n, t);
  } else {
    if (Mt(n, r)) return;
    gp.set(r), e.uniformMatrix3fv(this.addr, !1, gp), Et(n, r);
  }
}
function wE(e, t) {
  const n = this.cache,
    r = t.elements;
  if (void 0 === r) {
    if (Mt(n, t)) return;
    e.uniformMatrix4fv(this.addr, !1, t), Et(n, t);
  } else {
    if (Mt(n, r)) return;
    mp.set(r), e.uniformMatrix4fv(this.addr, !1, mp), Et(n, r);
  }
}
function AE(e, t) {
  const n = this.cache;
  n[0] !== t && (e.uniform1i(this.addr, t), (n[0] = t));
}
function CE(e, t) {
  const n = this.cache;
  if (void 0 !== t.x)
    (n[0] !== t.x || n[1] !== t.y) &&
      (e.uniform2i(this.addr, t.x, t.y), (n[0] = t.x), (n[1] = t.y));
  else {
    if (Mt(n, t)) return;
    e.uniform2iv(this.addr, t), Et(n, t);
  }
}
function RE(e, t) {
  const n = this.cache;
  if (void 0 !== t.x)
    (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z) &&
      (e.uniform3i(this.addr, t.x, t.y, t.z),
      (n[0] = t.x),
      (n[1] = t.y),
      (n[2] = t.z));
  else {
    if (Mt(n, t)) return;
    e.uniform3iv(this.addr, t), Et(n, t);
  }
}
function PE(e, t) {
  const n = this.cache;
  if (void 0 !== t.x)
    (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z || n[3] !== t.w) &&
      (e.uniform4i(this.addr, t.x, t.y, t.z, t.w),
      (n[0] = t.x),
      (n[1] = t.y),
      (n[2] = t.z),
      (n[3] = t.w));
  else {
    if (Mt(n, t)) return;
    e.uniform4iv(this.addr, t), Et(n, t);
  }
}
function LE(e, t) {
  const n = this.cache;
  n[0] !== t && (e.uniform1ui(this.addr, t), (n[0] = t));
}
function bE(e, t) {
  const n = this.cache;
  if (void 0 !== t.x)
    (n[0] !== t.x || n[1] !== t.y) &&
      (e.uniform2ui(this.addr, t.x, t.y), (n[0] = t.x), (n[1] = t.y));
  else {
    if (Mt(n, t)) return;
    e.uniform2uiv(this.addr, t), Et(n, t);
  }
}
function DE(e, t) {
  const n = this.cache;
  if (void 0 !== t.x)
    (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z) &&
      (e.uniform3ui(this.addr, t.x, t.y, t.z),
      (n[0] = t.x),
      (n[1] = t.y),
      (n[2] = t.z));
  else {
    if (Mt(n, t)) return;
    e.uniform3uiv(this.addr, t), Et(n, t);
  }
}
function UE(e, t) {
  const n = this.cache;
  if (void 0 !== t.x)
    (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z || n[3] !== t.w) &&
      (e.uniform4ui(this.addr, t.x, t.y, t.z, t.w),
      (n[0] = t.x),
      (n[1] = t.y),
      (n[2] = t.z),
      (n[3] = t.w));
  else {
    if (Mt(n, t)) return;
    e.uniform4uiv(this.addr, t), Et(n, t);
  }
}
function IE(e, t, n) {
  const r = this.cache,
    i = n.allocateTextureUnit();
  let a;
  r[0] !== i && (e.uniform1i(this.addr, i), (r[0] = i)),
    this.type === e.SAMPLER_2D_SHADOW
      ? ((dp.compareFunction = t_), (a = dp))
      : (a = __),
    n.setTexture2D(t || a, i);
}
function NE(e, t, n) {
  const r = this.cache,
    i = n.allocateTextureUnit();
  r[0] !== i && (e.uniform1i(this.addr, i), (r[0] = i)),
    n.setTexture3D(t || x_, i);
}
function FE(e, t, n) {
  const r = this.cache,
    i = n.allocateTextureUnit();
  r[0] !== i && (e.uniform1i(this.addr, i), (r[0] = i)),
    n.setTextureCube(t || y_, i);
}
function OE(e, t, n) {
  const r = this.cache,
    i = n.allocateTextureUnit();
  r[0] !== i && (e.uniform1i(this.addr, i), (r[0] = i)),
    n.setTexture2DArray(t || v_, i);
}
function zE(e) {
  switch (e) {
    case 5126:
      return xE;
    case 35664:
      return yE;
    case 35665:
      return SE;
    case 35666:
      return ME;
    case 35674:
      return EE;
    case 35675:
      return TE;
    case 35676:
      return wE;
    case 5124:
    case 35670:
      return AE;
    case 35667:
    case 35671:
      return CE;
    case 35668:
    case 35672:
      return RE;
    case 35669:
    case 35673:
      return PE;
    case 5125:
      return LE;
    case 36294:
      return bE;
    case 36295:
      return DE;
    case 36296:
      return UE;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return IE;
    case 35679:
    case 36299:
    case 36307:
      return NE;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return FE;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return OE;
  }
}
function kE(e, t) {
  e.uniform1fv(this.addr, t);
}
function BE(e, t) {
  const n = Cs(t, this.size, 2);
  e.uniform2fv(this.addr, n);
}
function HE(e, t) {
  const n = Cs(t, this.size, 3);
  e.uniform3fv(this.addr, n);
}
function VE(e, t) {
  const n = Cs(t, this.size, 4);
  e.uniform4fv(this.addr, n);
}
function GE(e, t) {
  const n = Cs(t, this.size, 4);
  e.uniformMatrix2fv(this.addr, !1, n);
}
function WE(e, t) {
  const n = Cs(t, this.size, 9);
  e.uniformMatrix3fv(this.addr, !1, n);
}
function XE(e, t) {
  const n = Cs(t, this.size, 16);
  e.uniformMatrix4fv(this.addr, !1, n);
}
function YE(e, t) {
  e.uniform1iv(this.addr, t);
}
function qE(e, t) {
  e.uniform2iv(this.addr, t);
}
function $E(e, t) {
  e.uniform3iv(this.addr, t);
}
function jE(e, t) {
  e.uniform4iv(this.addr, t);
}
function KE(e, t) {
  e.uniform1uiv(this.addr, t);
}
function ZE(e, t) {
  e.uniform2uiv(this.addr, t);
}
function QE(e, t) {
  e.uniform3uiv(this.addr, t);
}
function JE(e, t) {
  e.uniform4uiv(this.addr, t);
}
function e1(e, t, n) {
  const r = this.cache,
    i = t.length,
    a = Dl(n, i);
  Mt(r, a) || (e.uniform1iv(this.addr, a), Et(r, a));
  for (let e = 0; e !== i; ++e) n.setTexture2D(t[e] || __, a[e]);
}
function t1(e, t, n) {
  const r = this.cache,
    i = t.length,
    a = Dl(n, i);
  Mt(r, a) || (e.uniform1iv(this.addr, a), Et(r, a));
  for (let e = 0; e !== i; ++e) n.setTexture3D(t[e] || x_, a[e]);
}
function n1(e, t, n) {
  const r = this.cache,
    i = t.length,
    a = Dl(n, i);
  Mt(r, a) || (e.uniform1iv(this.addr, a), Et(r, a));
  for (let e = 0; e !== i; ++e) n.setTextureCube(t[e] || y_, a[e]);
}
function i1(e, t, n) {
  const r = this.cache,
    i = t.length,
    a = Dl(n, i);
  Mt(r, a) || (e.uniform1iv(this.addr, a), Et(r, a));
  for (let e = 0; e !== i; ++e) n.setTexture2DArray(t[e] || v_, a[e]);
}
function r1(e) {
  switch (e) {
    case 5126:
      return kE;
    case 35664:
      return BE;
    case 35665:
      return HE;
    case 35666:
      return VE;
    case 35674:
      return GE;
    case 35675:
      return WE;
    case 35676:
      return XE;
    case 5124:
    case 35670:
      return YE;
    case 35667:
    case 35671:
      return qE;
    case 35668:
    case 35672:
      return $E;
    case 35669:
    case 35673:
      return jE;
    case 5125:
      return KE;
    case 36294:
      return ZE;
    case 36295:
      return QE;
    case 36296:
      return JE;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return e1;
    case 35679:
    case 36299:
    case 36307:
      return t1;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return n1;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return i1;
  }
}
class s1 {
  constructor(e, t, n) {
    (this.id = e),
      (this.addr = n),
      (this.cache = []),
      (this.type = t.type),
      (this.setValue = zE(t.type));
  }
}
class o1 {
  constructor(e, t, n) {
    (this.id = e),
      (this.addr = n),
      (this.cache = []),
      (this.type = t.type),
      (this.size = t.size),
      (this.setValue = r1(t.type));
  }
}
class a1 {
  constructor(e) {
    (this.id = e), (this.seq = []), (this.map = {});
  }
  setValue(e, t, n) {
    const r = this.seq;
    for (let i = 0, a = r.length; i !== a; ++i) {
      const a = r[i];
      a.setValue(e, t[a.id], n);
    }
  }
}
const Nu = /(\w+)(\])?(\[|\.)?/g;
function vp(e, t) {
  e.seq.push(t), (e.map[t.id] = t);
}
function l1(e, t, n) {
  const r = e.name,
    i = r.length;
  for (Nu.lastIndex = 0; ; ) {
    const a = Nu.exec(r),
      o = Nu.lastIndex;
    let s = a[1];
    const l = "]" === a[2],
      c = a[3];
    if ((l && (s |= 0), void 0 === c || ("[" === c && o + 2 === i))) {
      vp(n, void 0 === c ? new s1(s, e, t) : new o1(s, e, t));
      break;
    }
    {
      let e = n.map[s];
      void 0 === e && ((e = new a1(s)), vp(n, e)), (n = e);
    }
  }
}
class Na {
  constructor(e, t) {
    (this.seq = []), (this.map = {});
    const n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
    for (let r = 0; r < n; ++r) {
      const n = e.getActiveUniform(t, r);
      l1(n, e.getUniformLocation(t, n.name), this);
    }
  }
  setValue(e, t, n, r) {
    const i = this.map[t];
    void 0 !== i && i.setValue(e, n, r);
  }
  setOptional(e, t, n) {
    const r = t[n];
    void 0 !== r && this.setValue(e, n, r);
  }
  static upload(e, t, n, r) {
    for (let i = 0, a = t.length; i !== a; ++i) {
      const a = t[i],
        o = n[a.id];
      !1 !== o.needsUpdate && a.setValue(e, o.value, r);
    }
  }
  static seqWithValue(e, t) {
    const n = [];
    for (let r = 0, i = e.length; r !== i; ++r) {
      const i = e[r];
      i.id in t && n.push(i);
    }
    return n;
  }
}
function xp(e, t, n) {
  const r = e.createShader(t);
  return e.shaderSource(r, n), e.compileShader(r), r;
}
const u1 = 37297;
let c1 = 0;
function f1(e, t) {
  const n = e.split("\n"),
    r = [],
    i = Math.max(t - 6, 0),
    a = Math.min(t + 6, n.length);
  for (let e = i; e < a; e++) {
    const i = e + 1;
    r.push(`${i === t ? ">" : " "} ${i}: ${n[e]}`);
  }
  return r.join("\n");
}
function d1(e) {
  const t = $e.getPrimaries($e.workingColorSpace),
    n = $e.getPrimaries(e);
  let r;
  switch (
    (t === n
      ? (r = "")
      : t === ul && n === ll
      ? (r = "LinearDisplayP3ToLinearSRGB")
      : t === ll && n === ul && (r = "LinearSRGBToLinearDisplayP3"),
    e)
  ) {
    case Xi:
    case Pl:
      return [r, "LinearTransferOETF"];
    case Fn:
    case dd:
      return [r, "sRGBTransferOETF"];
    default:
      return (
        console.warn("THREE.WebGLProgram: Unsupported color space:", e),
        [r, "LinearTransferOETF"]
      );
  }
}
function yp(e, t, n) {
  const r = e.getShaderParameter(t, e.COMPILE_STATUS),
    i = e.getShaderInfoLog(t).trim();
  if (r && "" === i) return "";
  const a = /ERROR: 0:(\d+)/.exec(i);
  if (a) {
    const r = parseInt(a[1]);
    return n.toUpperCase() + "\n\n" + i + "\n\n" + f1(e.getShaderSource(t), r);
  }
  return i;
}
function h1(e, t) {
  const n = d1(t);
  return `vec4 ${e}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`;
}
function p1(e, t) {
  let n;
  switch (t) {
    case Px:
      n = "Linear";
      break;
    case Lx:
      n = "Reinhard";
      break;
    case bx:
      n = "OptimizedCineon";
      break;
    case Dx:
      n = "ACESFilmic";
      break;
    case Ix:
      n = "AgX";
      break;
    case Nx:
      n = "Neutral";
      break;
    case Ux:
      n = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", t),
        (n = "Linear");
  }
  return (
    "vec3 " + e + "( vec3 color ) { return " + n + "ToneMapping( color ); }"
  );
}
function m1(e) {
  return [
    e.extensionClipCullDistance
      ? "#extension GL_ANGLE_clip_cull_distance : require"
      : "",
    e.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : "",
  ]
    .filter(Xs)
    .join("\n");
}
function g1(e) {
  const t = [];
  for (const n in e) {
    const r = e[n];
    !1 !== r && t.push("#define " + n + " " + r);
  }
  return t.join("\n");
}
function _1(e, t) {
  const n = {},
    r = e.getProgramParameter(t, e.ACTIVE_ATTRIBUTES);
  for (let i = 0; i < r; i++) {
    const r = e.getActiveAttrib(t, i),
      a = r.name;
    let o = 1;
    r.type === e.FLOAT_MAT2 && (o = 2),
      r.type === e.FLOAT_MAT3 && (o = 3),
      r.type === e.FLOAT_MAT4 && (o = 4),
      (n[a] = {
        type: r.type,
        location: e.getAttribLocation(t, a),
        locationSize: o,
      });
  }
  return n;
}
function Xs(e) {
  return "" !== e;
}
function Sp(e, t) {
  const n =
    t.numSpotLightShadows + t.numSpotLightMaps - t.numSpotLightShadowsWithMaps;
  return e
    .replace(/NUM_DIR_LIGHTS/g, t.numDirLights)
    .replace(/NUM_SPOT_LIGHTS/g, t.numSpotLights)
    .replace(/NUM_SPOT_LIGHT_MAPS/g, t.numSpotLightMaps)
    .replace(/NUM_SPOT_LIGHT_COORDS/g, n)
    .replace(/NUM_RECT_AREA_LIGHTS/g, t.numRectAreaLights)
    .replace(/NUM_POINT_LIGHTS/g, t.numPointLights)
    .replace(/NUM_HEMI_LIGHTS/g, t.numHemiLights)
    .replace(/NUM_DIR_LIGHT_SHADOWS/g, t.numDirLightShadows)
    .replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, t.numSpotLightShadowsWithMaps)
    .replace(/NUM_SPOT_LIGHT_SHADOWS/g, t.numSpotLightShadows)
    .replace(/NUM_POINT_LIGHT_SHADOWS/g, t.numPointLightShadows);
}
function Mp(e, t) {
  return e
    .replace(/NUM_CLIPPING_PLANES/g, t.numClippingPlanes)
    .replace(
      /UNION_CLIPPING_PLANES/g,
      t.numClippingPlanes - t.numClipIntersection
    );
}
const v1 = /^[ \t]*#include +<([\w\d./]+)>/gm;
function cf(e) {
  return e.replace(v1, y1);
}
const x1 = new Map();
function y1(e, t) {
  let n = De[t];
  if (void 0 === n) {
    const e = x1.get(t);
    if (void 0 === e) throw new Error("Can not resolve #include <" + t + ">");
    (n = De[e]),
      console.warn(
        'THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',
        t,
        e
      );
  }
  return cf(n);
}
const S1 =
  /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function Ep(e) {
  return e.replace(S1, M1);
}
function M1(e, t, n, r) {
  let i = "";
  for (let e = parseInt(t); e < parseInt(n); e++)
    i += r
      .replace(/\[\s*i\s*\]/g, "[ " + e + " ]")
      .replace(/UNROLLED_LOOP_INDEX/g, e);
  return i;
}
function Tp(e) {
  let t = `precision ${e.precision} float;\n\tprecision ${e.precision} int;\n\tprecision ${e.precision} sampler2D;\n\tprecision ${e.precision} samplerCube;\n\tprecision ${e.precision} sampler3D;\n\tprecision ${e.precision} sampler2DArray;\n\tprecision ${e.precision} sampler2DShadow;\n\tprecision ${e.precision} samplerCubeShadow;\n\tprecision ${e.precision} sampler2DArrayShadow;\n\tprecision ${e.precision} isampler2D;\n\tprecision ${e.precision} isampler3D;\n\tprecision ${e.precision} isamplerCube;\n\tprecision ${e.precision} isampler2DArray;\n\tprecision ${e.precision} usampler2D;\n\tprecision ${e.precision} usampler3D;\n\tprecision ${e.precision} usamplerCube;\n\tprecision ${e.precision} usampler2DArray;\n\t`;
  return (
    "highp" === e.precision
      ? (t += "\n#define HIGH_PRECISION")
      : "mediump" === e.precision
      ? (t += "\n#define MEDIUM_PRECISION")
      : "lowp" === e.precision && (t += "\n#define LOW_PRECISION"),
    t
  );
}
function E1(e) {
  let t = "SHADOWMAP_TYPE_BASIC";
  return (
    e.shadowMapType === Vg
      ? (t = "SHADOWMAP_TYPE_PCF")
      : e.shadowMapType === tx
      ? (t = "SHADOWMAP_TYPE_PCF_SOFT")
      : e.shadowMapType === Zn && (t = "SHADOWMAP_TYPE_VSM"),
    t
  );
}
function T1(e) {
  let t = "ENVMAP_TYPE_CUBE";
  if (e.envMap)
    switch (e.envMapMode) {
      case vs:
      case xs:
        t = "ENVMAP_TYPE_CUBE";
        break;
      case Rl:
        t = "ENVMAP_TYPE_CUBE_UV";
    }
  return t;
}
function w1(e) {
  let t = "ENVMAP_MODE_REFLECTION";
  if (e.envMap && e.envMapMode === xs) t = "ENVMAP_MODE_REFRACTION";
  return t;
}
function A1(e) {
  let t = "ENVMAP_BLENDING_NONE";
  if (e.envMap)
    switch (e.combine) {
      case Gg:
        t = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case Cx:
        t = "ENVMAP_BLENDING_MIX";
        break;
      case Rx:
        t = "ENVMAP_BLENDING_ADD";
    }
  return t;
}
function C1(e) {
  const t = e.envMapCubeUVHeight;
  if (null === t) return null;
  const n = Math.log2(t) - 2,
    r = 1 / t;
  return {
    texelWidth: 1 / (3 * Math.max(Math.pow(2, n), 112)),
    texelHeight: r,
    maxMip: n,
  };
}
function R1(e, t, n, r) {
  const i = e.getContext(),
    a = n.defines;
  let o = n.vertexShader,
    s = n.fragmentShader;
  const l = E1(n),
    c = T1(n),
    u = w1(n),
    d = A1(n),
    h = C1(n),
    f = m1(n),
    p = g1(a),
    m = i.createProgram();
  let g,
    v,
    _ = n.glslVersion ? "#version " + n.glslVersion + "\n" : "";
  n.isRawShaderMaterial
    ? ((g = [
        "#define SHADER_TYPE " + n.shaderType,
        "#define SHADER_NAME " + n.shaderName,
        p,
      ]
        .filter(Xs)
        .join("\n")),
      g.length > 0 && (g += "\n"),
      (v = [
        "#define SHADER_TYPE " + n.shaderType,
        "#define SHADER_NAME " + n.shaderName,
        p,
      ]
        .filter(Xs)
        .join("\n")),
      v.length > 0 && (v += "\n"))
    : ((g = [
        Tp(n),
        "#define SHADER_TYPE " + n.shaderType,
        "#define SHADER_NAME " + n.shaderName,
        p,
        n.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "",
        n.batching ? "#define USE_BATCHING" : "",
        n.batchingColor ? "#define USE_BATCHING_COLOR" : "",
        n.instancing ? "#define USE_INSTANCING" : "",
        n.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
        n.instancingMorph ? "#define USE_INSTANCING_MORPH" : "",
        n.useFog && n.fog ? "#define USE_FOG" : "",
        n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "",
        n.map ? "#define USE_MAP" : "",
        n.envMap ? "#define USE_ENVMAP" : "",
        n.envMap ? "#define " + u : "",
        n.lightMap ? "#define USE_LIGHTMAP" : "",
        n.aoMap ? "#define USE_AOMAP" : "",
        n.bumpMap ? "#define USE_BUMPMAP" : "",
        n.normalMap ? "#define USE_NORMALMAP" : "",
        n.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
        n.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
        n.displacementMap ? "#define USE_DISPLACEMENTMAP" : "",
        n.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
        n.anisotropy ? "#define USE_ANISOTROPY" : "",
        n.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
        n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
        n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
        n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
        n.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
        n.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
        n.specularMap ? "#define USE_SPECULARMAP" : "",
        n.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
        n.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
        n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
        n.metalnessMap ? "#define USE_METALNESSMAP" : "",
        n.alphaMap ? "#define USE_ALPHAMAP" : "",
        n.alphaHash ? "#define USE_ALPHAHASH" : "",
        n.transmission ? "#define USE_TRANSMISSION" : "",
        n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
        n.thicknessMap ? "#define USE_THICKNESSMAP" : "",
        n.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
        n.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
        n.mapUv ? "#define MAP_UV " + n.mapUv : "",
        n.alphaMapUv ? "#define ALPHAMAP_UV " + n.alphaMapUv : "",
        n.lightMapUv ? "#define LIGHTMAP_UV " + n.lightMapUv : "",
        n.aoMapUv ? "#define AOMAP_UV " + n.aoMapUv : "",
        n.emissiveMapUv ? "#define EMISSIVEMAP_UV " + n.emissiveMapUv : "",
        n.bumpMapUv ? "#define BUMPMAP_UV " + n.bumpMapUv : "",
        n.normalMapUv ? "#define NORMALMAP_UV " + n.normalMapUv : "",
        n.displacementMapUv
          ? "#define DISPLACEMENTMAP_UV " + n.displacementMapUv
          : "",
        n.metalnessMapUv ? "#define METALNESSMAP_UV " + n.metalnessMapUv : "",
        n.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + n.roughnessMapUv : "",
        n.anisotropyMapUv
          ? "#define ANISOTROPYMAP_UV " + n.anisotropyMapUv
          : "",
        n.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + n.clearcoatMapUv : "",
        n.clearcoatNormalMapUv
          ? "#define CLEARCOAT_NORMALMAP_UV " + n.clearcoatNormalMapUv
          : "",
        n.clearcoatRoughnessMapUv
          ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + n.clearcoatRoughnessMapUv
          : "",
        n.iridescenceMapUv
          ? "#define IRIDESCENCEMAP_UV " + n.iridescenceMapUv
          : "",
        n.iridescenceThicknessMapUv
          ? "#define IRIDESCENCE_THICKNESSMAP_UV " + n.iridescenceThicknessMapUv
          : "",
        n.sheenColorMapUv
          ? "#define SHEEN_COLORMAP_UV " + n.sheenColorMapUv
          : "",
        n.sheenRoughnessMapUv
          ? "#define SHEEN_ROUGHNESSMAP_UV " + n.sheenRoughnessMapUv
          : "",
        n.specularMapUv ? "#define SPECULARMAP_UV " + n.specularMapUv : "",
        n.specularColorMapUv
          ? "#define SPECULAR_COLORMAP_UV " + n.specularColorMapUv
          : "",
        n.specularIntensityMapUv
          ? "#define SPECULAR_INTENSITYMAP_UV " + n.specularIntensityMapUv
          : "",
        n.transmissionMapUv
          ? "#define TRANSMISSIONMAP_UV " + n.transmissionMapUv
          : "",
        n.thicknessMapUv ? "#define THICKNESSMAP_UV " + n.thicknessMapUv : "",
        n.vertexTangents && !1 === n.flatShading ? "#define USE_TANGENT" : "",
        n.vertexColors ? "#define USE_COLOR" : "",
        n.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
        n.vertexUv1s ? "#define USE_UV1" : "",
        n.vertexUv2s ? "#define USE_UV2" : "",
        n.vertexUv3s ? "#define USE_UV3" : "",
        n.pointsUvs ? "#define USE_POINTS_UV" : "",
        n.flatShading ? "#define FLAT_SHADED" : "",
        n.skinning ? "#define USE_SKINNING" : "",
        n.morphTargets ? "#define USE_MORPHTARGETS" : "",
        n.morphNormals && !1 === n.flatShading
          ? "#define USE_MORPHNORMALS"
          : "",
        n.morphColors ? "#define USE_MORPHCOLORS" : "",
        n.morphTargetsCount > 0
          ? "#define MORPHTARGETS_TEXTURE_STRIDE " + n.morphTextureStride
          : "",
        n.morphTargetsCount > 0
          ? "#define MORPHTARGETS_COUNT " + n.morphTargetsCount
          : "",
        n.doubleSided ? "#define DOUBLE_SIDED" : "",
        n.flipSided ? "#define FLIP_SIDED" : "",
        n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
        n.shadowMapEnabled ? "#define " + l : "",
        n.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
        n.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
        n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
        "uniform mat4 modelMatrix;",
        "uniform mat4 modelViewMatrix;",
        "uniform mat4 projectionMatrix;",
        "uniform mat4 viewMatrix;",
        "uniform mat3 normalMatrix;",
        "uniform vec3 cameraPosition;",
        "uniform bool isOrthographic;",
        "#ifdef USE_INSTANCING",
        "\tattribute mat4 instanceMatrix;",
        "#endif",
        "#ifdef USE_INSTANCING_COLOR",
        "\tattribute vec3 instanceColor;",
        "#endif",
        "#ifdef USE_INSTANCING_MORPH",
        "\tuniform sampler2D morphTexture;",
        "#endif",
        "attribute vec3 position;",
        "attribute vec3 normal;",
        "attribute vec2 uv;",
        "#ifdef USE_UV1",
        "\tattribute vec2 uv1;",
        "#endif",
        "#ifdef USE_UV2",
        "\tattribute vec2 uv2;",
        "#endif",
        "#ifdef USE_UV3",
        "\tattribute vec2 uv3;",
        "#endif",
        "#ifdef USE_TANGENT",
        "\tattribute vec4 tangent;",
        "#endif",
        "#if defined( USE_COLOR_ALPHA )",
        "\tattribute vec4 color;",
        "#elif defined( USE_COLOR )",
        "\tattribute vec3 color;",
        "#endif",
        "#ifdef USE_SKINNING",
        "\tattribute vec4 skinIndex;",
        "\tattribute vec4 skinWeight;",
        "#endif",
        "\n",
      ]
        .filter(Xs)
        .join("\n")),
      (v = [
        Tp(n),
        "#define SHADER_TYPE " + n.shaderType,
        "#define SHADER_NAME " + n.shaderName,
        p,
        n.useFog && n.fog ? "#define USE_FOG" : "",
        n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "",
        n.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "",
        n.map ? "#define USE_MAP" : "",
        n.matcap ? "#define USE_MATCAP" : "",
        n.envMap ? "#define USE_ENVMAP" : "",
        n.envMap ? "#define " + c : "",
        n.envMap ? "#define " + u : "",
        n.envMap ? "#define " + d : "",
        h ? "#define CUBEUV_TEXEL_WIDTH " + h.texelWidth : "",
        h ? "#define CUBEUV_TEXEL_HEIGHT " + h.texelHeight : "",
        h ? "#define CUBEUV_MAX_MIP " + h.maxMip + ".0" : "",
        n.lightMap ? "#define USE_LIGHTMAP" : "",
        n.aoMap ? "#define USE_AOMAP" : "",
        n.bumpMap ? "#define USE_BUMPMAP" : "",
        n.normalMap ? "#define USE_NORMALMAP" : "",
        n.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
        n.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
        n.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
        n.anisotropy ? "#define USE_ANISOTROPY" : "",
        n.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
        n.clearcoat ? "#define USE_CLEARCOAT" : "",
        n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
        n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
        n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
        n.dispersion ? "#define USE_DISPERSION" : "",
        n.iridescence ? "#define USE_IRIDESCENCE" : "",
        n.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
        n.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
        n.specularMap ? "#define USE_SPECULARMAP" : "",
        n.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
        n.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
        n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
        n.metalnessMap ? "#define USE_METALNESSMAP" : "",
        n.alphaMap ? "#define USE_ALPHAMAP" : "",
        n.alphaTest ? "#define USE_ALPHATEST" : "",
        n.alphaHash ? "#define USE_ALPHAHASH" : "",
        n.sheen ? "#define USE_SHEEN" : "",
        n.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
        n.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
        n.transmission ? "#define USE_TRANSMISSION" : "",
        n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
        n.thicknessMap ? "#define USE_THICKNESSMAP" : "",
        n.vertexTangents && !1 === n.flatShading ? "#define USE_TANGENT" : "",
        n.vertexColors || n.instancingColor || n.batchingColor
          ? "#define USE_COLOR"
          : "",
        n.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
        n.vertexUv1s ? "#define USE_UV1" : "",
        n.vertexUv2s ? "#define USE_UV2" : "",
        n.vertexUv3s ? "#define USE_UV3" : "",
        n.pointsUvs ? "#define USE_POINTS_UV" : "",
        n.gradientMap ? "#define USE_GRADIENTMAP" : "",
        n.flatShading ? "#define FLAT_SHADED" : "",
        n.doubleSided ? "#define DOUBLE_SIDED" : "",
        n.flipSided ? "#define FLIP_SIDED" : "",
        n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
        n.shadowMapEnabled ? "#define " + l : "",
        n.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
        n.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
        n.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
        n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
        "uniform mat4 viewMatrix;",
        "uniform vec3 cameraPosition;",
        "uniform bool isOrthographic;",
        n.toneMapping !== zi ? "#define TONE_MAPPING" : "",
        n.toneMapping !== zi ? De.tonemapping_pars_fragment : "",
        n.toneMapping !== zi ? p1("toneMapping", n.toneMapping) : "",
        n.dithering ? "#define DITHERING" : "",
        n.opaque ? "#define OPAQUE" : "",
        De.colorspace_pars_fragment,
        h1("linearToOutputTexel", n.outputColorSpace),
        n.useDepthPacking ? "#define DEPTH_PACKING " + n.depthPacking : "",
        "\n",
      ]
        .filter(Xs)
        .join("\n"))),
    (o = cf(o)),
    (o = Sp(o, n)),
    (o = Mp(o, n)),
    (s = cf(s)),
    (s = Sp(s, n)),
    (s = Mp(s, n)),
    (o = Ep(o)),
    (s = Ep(s)),
    !0 !== n.isRawShaderMaterial &&
      ((_ = "#version 300 es\n"),
      (g =
        [
          f,
          "#define attribute in",
          "#define varying out",
          "#define texture2D texture",
        ].join("\n") +
        "\n" +
        g),
      (v =
        [
          "#define varying in",
          n.glslVersion === kh
            ? ""
            : "layout(location = 0) out highp vec4 pc_fragColor;",
          n.glslVersion === kh ? "" : "#define gl_FragColor pc_fragColor",
          "#define gl_FragDepthEXT gl_FragDepth",
          "#define texture2D texture",
          "#define textureCube texture",
          "#define texture2DProj textureProj",
          "#define texture2DLodEXT textureLod",
          "#define texture2DProjLodEXT textureProjLod",
          "#define textureCubeLodEXT textureLod",
          "#define texture2DGradEXT textureGrad",
          "#define texture2DProjGradEXT textureProjGrad",
          "#define textureCubeGradEXT textureGrad",
        ].join("\n") +
        "\n" +
        v));
  const x = _ + g + o,
    y = _ + v + s,
    S = xp(i, i.VERTEX_SHADER, x),
    M = xp(i, i.FRAGMENT_SHADER, y);
  function E(t) {
    if (e.debug.checkShaderErrors) {
      const n = i.getProgramInfoLog(m).trim(),
        r = i.getShaderInfoLog(S).trim(),
        a = i.getShaderInfoLog(M).trim();
      let o = !0,
        s = !0;
      if (!1 === i.getProgramParameter(m, i.LINK_STATUS))
        if (((o = !1), "function" == typeof e.debug.onShaderError))
          e.debug.onShaderError(i, m, S, M);
        else {
          const e = yp(i, S, "vertex"),
            r = yp(i, M, "fragment");
          console.error(
            "THREE.WebGLProgram: Shader Error " +
              i.getError() +
              " - VALIDATE_STATUS " +
              i.getProgramParameter(m, i.VALIDATE_STATUS) +
              "\n\nMaterial Name: " +
              t.name +
              "\nMaterial Type: " +
              t.type +
              "\n\nProgram Info Log: " +
              n +
              "\n" +
              e +
              "\n" +
              r
          );
        }
      else
        "" !== n
          ? console.warn("THREE.WebGLProgram: Program Info Log:", n)
          : ("" === r || "" === a) && (s = !1);
      s &&
        (t.diagnostics = {
          runnable: o,
          programLog: n,
          vertexShader: { log: r, prefix: g },
          fragmentShader: { log: a, prefix: v },
        });
    }
    i.deleteShader(S), i.deleteShader(M), (b = new Na(i, m)), (T = _1(i, m));
  }
  let b, T;
  i.attachShader(m, S),
    i.attachShader(m, M),
    void 0 !== n.index0AttributeName
      ? i.bindAttribLocation(m, 0, n.index0AttributeName)
      : !0 === n.morphTargets && i.bindAttribLocation(m, 0, "position"),
    i.linkProgram(m),
    (this.getUniforms = function () {
      return void 0 === b && E(this), b;
    }),
    (this.getAttributes = function () {
      return void 0 === T && E(this), T;
    });
  let w = !1 === n.rendererExtensionParallelShaderCompile;
  return (
    (this.isReady = function () {
      return !1 === w && (w = i.getProgramParameter(m, u1)), w;
    }),
    (this.destroy = function () {
      r.releaseStatesOfProgram(this),
        i.deleteProgram(m),
        (this.program = void 0);
    }),
    (this.type = n.shaderType),
    (this.name = n.shaderName),
    (this.id = c1++),
    (this.cacheKey = t),
    (this.usedTimes = 1),
    (this.program = m),
    (this.vertexShader = S),
    (this.fragmentShader = M),
    this
  );
}
let P1 = 0;
class L1 {
  constructor() {
    (this.shaderCache = new Map()), (this.materialCache = new Map());
  }
  update(e) {
    const t = e.vertexShader,
      n = e.fragmentShader,
      r = this._getShaderStage(t),
      i = this._getShaderStage(n),
      a = this._getShaderCacheForMaterial(e);
    return (
      !1 === a.has(r) && (a.add(r), r.usedTimes++),
      !1 === a.has(i) && (a.add(i), i.usedTimes++),
      this
    );
  }
  remove(e) {
    const t = this.materialCache.get(e);
    for (const e of t)
      e.usedTimes--, 0 === e.usedTimes && this.shaderCache.delete(e.code);
    return this.materialCache.delete(e), this;
  }
  getVertexShaderID(e) {
    return this._getShaderStage(e.vertexShader).id;
  }
  getFragmentShaderID(e) {
    return this._getShaderStage(e.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(e) {
    const t = this.materialCache;
    let n = t.get(e);
    return void 0 === n && ((n = new Set()), t.set(e, n)), n;
  }
  _getShaderStage(e) {
    const t = this.shaderCache;
    let n = t.get(e);
    return void 0 === n && ((n = new b1(e)), t.set(e, n)), n;
  }
}
class b1 {
  constructor(e) {
    (this.id = P1++), (this.code = e), (this.usedTimes = 0);
  }
}
function D1(e, t, n, r, i, a, o) {
  const s = new o_(),
    l = new L1(),
    c = new Set(),
    u = [],
    d = i.logarithmicDepthBuffer,
    h = i.vertexTextures;
  let f = i.precision;
  const p = {
    MeshDepthMaterial: "depth",
    MeshDistanceMaterial: "distanceRGBA",
    MeshNormalMaterial: "normal",
    MeshBasicMaterial: "basic",
    MeshLambertMaterial: "lambert",
    MeshPhongMaterial: "phong",
    MeshToonMaterial: "toon",
    MeshStandardMaterial: "physical",
    MeshPhysicalMaterial: "physical",
    MeshMatcapMaterial: "matcap",
    LineBasicMaterial: "basic",
    LineDashedMaterial: "dashed",
    PointsMaterial: "points",
    ShadowMaterial: "shadow",
    SpriteMaterial: "sprite",
  };
  function m(e) {
    return c.add(e), 0 === e ? "uv" : `uv${e}`;
  }
  return {
    getParameters: function (a, s, u, g, v) {
      const _ = g.fog,
        x = v.geometry,
        y = a.isMeshStandardMaterial ? g.environment : null,
        S = (a.isMeshStandardMaterial ? n : t).get(a.envMap || y),
        M = S && S.mapping === Rl ? S.image.height : null,
        E = p[a.type];
      null !== a.precision &&
        ((f = i.getMaxPrecision(a.precision)),
        f !== a.precision &&
          console.warn(
            "THREE.WebGLProgram.getParameters:",
            a.precision,
            "not supported, using",
            f,
            "instead."
          ));
      const b =
          x.morphAttributes.position ||
          x.morphAttributes.normal ||
          x.morphAttributes.color,
        T = void 0 !== b ? b.length : 0;
      let w,
        A,
        R,
        C,
        P = 0;
      if (
        (void 0 !== x.morphAttributes.position && (P = 1),
        void 0 !== x.morphAttributes.normal && (P = 2),
        void 0 !== x.morphAttributes.color && (P = 3),
        E)
      ) {
        const e = On[E];
        (w = e.vertexShader), (A = e.fragmentShader);
      } else
        (w = a.vertexShader),
          (A = a.fragmentShader),
          l.update(a),
          (R = l.getVertexShaderID(a)),
          (C = l.getFragmentShaderID(a));
      const L = e.getRenderTarget(),
        U = !0 === v.isInstancedMesh,
        D = !0 === v.isBatchedMesh,
        N = !!a.map,
        I = !!a.matcap,
        F = !!S,
        O = !!a.aoMap,
        k = !!a.lightMap,
        z = !!a.bumpMap,
        B = !!a.normalMap,
        H = !!a.displacementMap,
        V = !!a.emissiveMap,
        G = !!a.metalnessMap,
        W = !!a.roughnessMap,
        X = a.anisotropy > 0,
        j = a.clearcoat > 0,
        q = a.dispersion > 0,
        Y = a.iridescence > 0,
        J = a.sheen > 0,
        K = a.transmission > 0,
        $ = X && !!a.anisotropyMap,
        Z = j && !!a.clearcoatMap,
        Q = j && !!a.clearcoatNormalMap,
        ee = j && !!a.clearcoatRoughnessMap,
        te = Y && !!a.iridescenceMap,
        ne = Y && !!a.iridescenceThicknessMap,
        re = J && !!a.sheenColorMap,
        ie = J && !!a.sheenRoughnessMap,
        ae = !!a.specularMap,
        oe = !!a.specularColorMap,
        se = !!a.specularIntensityMap,
        le = K && !!a.transmissionMap,
        ce = K && !!a.thicknessMap,
        ue = !!a.gradientMap,
        de = !!a.alphaMap,
        he = a.alphaTest > 0,
        fe = !!a.alphaHash,
        pe = !!a.extensions;
      let me = zi;
      a.toneMapped &&
        (null === L || !0 === L.isXRRenderTarget) &&
        (me = e.toneMapping);
      const ge = {
        shaderID: E,
        shaderType: a.type,
        shaderName: a.name,
        vertexShader: w,
        fragmentShader: A,
        defines: a.defines,
        customVertexShaderID: R,
        customFragmentShaderID: C,
        isRawShaderMaterial: !0 === a.isRawShaderMaterial,
        glslVersion: a.glslVersion,
        precision: f,
        batching: D,
        batchingColor: D && null !== v._colorsTexture,
        instancing: U,
        instancingColor: U && null !== v.instanceColor,
        instancingMorph: U && null !== v.morphTexture,
        supportsVertexTextures: h,
        outputColorSpace:
          null === L
            ? e.outputColorSpace
            : !0 === L.isXRRenderTarget
            ? L.texture.colorSpace
            : Xi,
        alphaToCoverage: !!a.alphaToCoverage,
        map: N,
        matcap: I,
        envMap: F,
        envMapMode: F && S.mapping,
        envMapCubeUVHeight: M,
        aoMap: O,
        lightMap: k,
        bumpMap: z,
        normalMap: B,
        displacementMap: h && H,
        emissiveMap: V,
        normalMapObjectSpace: B && 1 === a.normalMapType,
        normalMapTangentSpace: B && 0 === a.normalMapType,
        metalnessMap: G,
        roughnessMap: W,
        anisotropy: X,
        anisotropyMap: $,
        clearcoat: j,
        clearcoatMap: Z,
        clearcoatNormalMap: Q,
        clearcoatRoughnessMap: ee,
        dispersion: q,
        iridescence: Y,
        iridescenceMap: te,
        iridescenceThicknessMap: ne,
        sheen: J,
        sheenColorMap: re,
        sheenRoughnessMap: ie,
        specularMap: ae,
        specularColorMap: oe,
        specularIntensityMap: se,
        transmission: K,
        transmissionMap: le,
        thicknessMap: ce,
        gradientMap: ue,
        opaque:
          !1 === a.transparent && 1 === a.blending && !1 === a.alphaToCoverage,
        alphaMap: de,
        alphaTest: he,
        alphaHash: fe,
        combine: a.combine,
        mapUv: N && m(a.map.channel),
        aoMapUv: O && m(a.aoMap.channel),
        lightMapUv: k && m(a.lightMap.channel),
        bumpMapUv: z && m(a.bumpMap.channel),
        normalMapUv: B && m(a.normalMap.channel),
        displacementMapUv: H && m(a.displacementMap.channel),
        emissiveMapUv: V && m(a.emissiveMap.channel),
        metalnessMapUv: G && m(a.metalnessMap.channel),
        roughnessMapUv: W && m(a.roughnessMap.channel),
        anisotropyMapUv: $ && m(a.anisotropyMap.channel),
        clearcoatMapUv: Z && m(a.clearcoatMap.channel),
        clearcoatNormalMapUv: Q && m(a.clearcoatNormalMap.channel),
        clearcoatRoughnessMapUv: ee && m(a.clearcoatRoughnessMap.channel),
        iridescenceMapUv: te && m(a.iridescenceMap.channel),
        iridescenceThicknessMapUv: ne && m(a.iridescenceThicknessMap.channel),
        sheenColorMapUv: re && m(a.sheenColorMap.channel),
        sheenRoughnessMapUv: ie && m(a.sheenRoughnessMap.channel),
        specularMapUv: ae && m(a.specularMap.channel),
        specularColorMapUv: oe && m(a.specularColorMap.channel),
        specularIntensityMapUv: se && m(a.specularIntensityMap.channel),
        transmissionMapUv: le && m(a.transmissionMap.channel),
        thicknessMapUv: ce && m(a.thicknessMap.channel),
        alphaMapUv: de && m(a.alphaMap.channel),
        vertexTangents: !!x.attributes.tangent && (B || X),
        vertexColors: a.vertexColors,
        vertexAlphas:
          !0 === a.vertexColors &&
          !!x.attributes.color &&
          4 === x.attributes.color.itemSize,
        pointsUvs: !0 === v.isPoints && !!x.attributes.uv && (N || de),
        fog: !!_,
        useFog: !0 === a.fog,
        fogExp2: !!_ && _.isFogExp2,
        flatShading: !0 === a.flatShading,
        sizeAttenuation: !0 === a.sizeAttenuation,
        logarithmicDepthBuffer: d,
        skinning: !0 === v.isSkinnedMesh,
        morphTargets: void 0 !== x.morphAttributes.position,
        morphNormals: void 0 !== x.morphAttributes.normal,
        morphColors: void 0 !== x.morphAttributes.color,
        morphTargetsCount: T,
        morphTextureStride: P,
        numDirLights: s.directional.length,
        numPointLights: s.point.length,
        numSpotLights: s.spot.length,
        numSpotLightMaps: s.spotLightMap.length,
        numRectAreaLights: s.rectArea.length,
        numHemiLights: s.hemi.length,
        numDirLightShadows: s.directionalShadowMap.length,
        numPointLightShadows: s.pointShadowMap.length,
        numSpotLightShadows: s.spotShadowMap.length,
        numSpotLightShadowsWithMaps: s.numSpotLightShadowsWithMaps,
        numLightProbes: s.numLightProbes,
        numClippingPlanes: o.numPlanes,
        numClipIntersection: o.numIntersection,
        dithering: a.dithering,
        shadowMapEnabled: e.shadowMap.enabled && u.length > 0,
        shadowMapType: e.shadowMap.type,
        toneMapping: me,
        decodeVideoTexture:
          N &&
          !0 === a.map.isVideoTexture &&
          $e.getTransfer(a.map.colorSpace) === et,
        premultipliedAlpha: a.premultipliedAlpha,
        doubleSided: 2 === a.side,
        flipSided: a.side === Kt,
        useDepthPacking: a.depthPacking >= 0,
        depthPacking: a.depthPacking || 0,
        index0AttributeName: a.index0AttributeName,
        extensionClipCullDistance:
          pe &&
          !0 === a.extensions.clipCullDistance &&
          r.has("WEBGL_clip_cull_distance"),
        extensionMultiDraw:
          ((pe && !0 === a.extensions.multiDraw) || D) &&
          r.has("WEBGL_multi_draw"),
        rendererExtensionParallelShaderCompile: r.has(
          "KHR_parallel_shader_compile"
        ),
        customProgramCacheKey: a.customProgramCacheKey(),
      };
      return (
        (ge.vertexUv1s = c.has(1)),
        (ge.vertexUv2s = c.has(2)),
        (ge.vertexUv3s = c.has(3)),
        c.clear(),
        ge
      );
    },
    getProgramCacheKey: function (t) {
      const n = [];
      if (
        (t.shaderID
          ? n.push(t.shaderID)
          : (n.push(t.customVertexShaderID), n.push(t.customFragmentShaderID)),
        void 0 !== t.defines)
      )
        for (const e in t.defines) n.push(e), n.push(t.defines[e]);
      return (
        !1 === t.isRawShaderMaterial &&
          ((function (e, t) {
            e.push(t.precision),
              e.push(t.outputColorSpace),
              e.push(t.envMapMode),
              e.push(t.envMapCubeUVHeight),
              e.push(t.mapUv),
              e.push(t.alphaMapUv),
              e.push(t.lightMapUv),
              e.push(t.aoMapUv),
              e.push(t.bumpMapUv),
              e.push(t.normalMapUv),
              e.push(t.displacementMapUv),
              e.push(t.emissiveMapUv),
              e.push(t.metalnessMapUv),
              e.push(t.roughnessMapUv),
              e.push(t.anisotropyMapUv),
              e.push(t.clearcoatMapUv),
              e.push(t.clearcoatNormalMapUv),
              e.push(t.clearcoatRoughnessMapUv),
              e.push(t.iridescenceMapUv),
              e.push(t.iridescenceThicknessMapUv),
              e.push(t.sheenColorMapUv),
              e.push(t.sheenRoughnessMapUv),
              e.push(t.specularMapUv),
              e.push(t.specularColorMapUv),
              e.push(t.specularIntensityMapUv),
              e.push(t.transmissionMapUv),
              e.push(t.thicknessMapUv),
              e.push(t.combine),
              e.push(t.fogExp2),
              e.push(t.sizeAttenuation),
              e.push(t.morphTargetsCount),
              e.push(t.morphAttributeCount),
              e.push(t.numDirLights),
              e.push(t.numPointLights),
              e.push(t.numSpotLights),
              e.push(t.numSpotLightMaps),
              e.push(t.numHemiLights),
              e.push(t.numRectAreaLights),
              e.push(t.numDirLightShadows),
              e.push(t.numPointLightShadows),
              e.push(t.numSpotLightShadows),
              e.push(t.numSpotLightShadowsWithMaps),
              e.push(t.numLightProbes),
              e.push(t.shadowMapType),
              e.push(t.toneMapping),
              e.push(t.numClippingPlanes),
              e.push(t.numClipIntersection),
              e.push(t.depthPacking);
          })(n, t),
          (function (e, t) {
            s.disableAll(),
              t.supportsVertexTextures && s.enable(0),
              t.instancing && s.enable(1),
              t.instancingColor && s.enable(2),
              t.instancingMorph && s.enable(3),
              t.matcap && s.enable(4),
              t.envMap && s.enable(5),
              t.normalMapObjectSpace && s.enable(6),
              t.normalMapTangentSpace && s.enable(7),
              t.clearcoat && s.enable(8),
              t.iridescence && s.enable(9),
              t.alphaTest && s.enable(10),
              t.vertexColors && s.enable(11),
              t.vertexAlphas && s.enable(12),
              t.vertexUv1s && s.enable(13),
              t.vertexUv2s && s.enable(14),
              t.vertexUv3s && s.enable(15),
              t.vertexTangents && s.enable(16),
              t.anisotropy && s.enable(17),
              t.alphaHash && s.enable(18),
              t.batching && s.enable(19),
              t.dispersion && s.enable(20),
              t.batchingColor && s.enable(21),
              e.push(s.mask),
              s.disableAll(),
              t.fog && s.enable(0),
              t.useFog && s.enable(1),
              t.flatShading && s.enable(2),
              t.logarithmicDepthBuffer && s.enable(3),
              t.skinning && s.enable(4),
              t.morphTargets && s.enable(5),
              t.morphNormals && s.enable(6),
              t.morphColors && s.enable(7),
              t.premultipliedAlpha && s.enable(8),
              t.shadowMapEnabled && s.enable(9),
              t.doubleSided && s.enable(10),
              t.flipSided && s.enable(11),
              t.useDepthPacking && s.enable(12),
              t.dithering && s.enable(13),
              t.transmission && s.enable(14),
              t.sheen && s.enable(15),
              t.opaque && s.enable(16),
              t.pointsUvs && s.enable(17),
              t.decodeVideoTexture && s.enable(18),
              t.alphaToCoverage && s.enable(19),
              e.push(s.mask);
          })(n, t),
          n.push(e.outputColorSpace)),
        n.push(t.customProgramCacheKey),
        n.join()
      );
    },
    getUniforms: function (e) {
      const t = p[e.type];
      let n;
      if (t) {
        const e = On[t];
        n = my.clone(e.uniforms);
      } else n = e.uniforms;
      return n;
    },
    acquireProgram: function (t, n) {
      let r;
      for (let e = 0, t = u.length; e < t; e++) {
        const t = u[e];
        if (t.cacheKey === n) {
          (r = t), ++r.usedTimes;
          break;
        }
      }
      return void 0 === r && ((r = new R1(e, n, t, a)), u.push(r)), r;
    },
    releaseProgram: function (e) {
      if (0 == --e.usedTimes) {
        const t = u.indexOf(e);
        (u[t] = u[u.length - 1]), u.pop(), e.destroy();
      }
    },
    releaseShaderCache: function (e) {
      l.remove(e);
    },
    programs: u,
    dispose: function () {
      l.dispose();
    },
  };
}
function U1() {
  let e = new WeakMap();
  return {
    get: function (t) {
      let n = e.get(t);
      return void 0 === n && ((n = {}), e.set(t, n)), n;
    },
    remove: function (t) {
      e.delete(t);
    },
    update: function (t, n, r) {
      e.get(t)[n] = r;
    },
    dispose: function () {
      e = new WeakMap();
    },
  };
}
function I1(e, t) {
  return e.groupOrder !== t.groupOrder
    ? e.groupOrder - t.groupOrder
    : e.renderOrder !== t.renderOrder
    ? e.renderOrder - t.renderOrder
    : e.material.id !== t.material.id
    ? e.material.id - t.material.id
    : e.z !== t.z
    ? e.z - t.z
    : e.id - t.id;
}
function wp(e, t) {
  return e.groupOrder !== t.groupOrder
    ? e.groupOrder - t.groupOrder
    : e.renderOrder !== t.renderOrder
    ? e.renderOrder - t.renderOrder
    : e.z !== t.z
    ? t.z - e.z
    : e.id - t.id;
}
function Ap() {
  const e = [];
  let t = 0;
  const n = [],
    r = [],
    i = [];
  function a(n, r, i, a, o, s) {
    let l = e[t];
    return (
      void 0 === l
        ? ((l = {
            id: n.id,
            object: n,
            geometry: r,
            material: i,
            groupOrder: a,
            renderOrder: n.renderOrder,
            z: o,
            group: s,
          }),
          (e[t] = l))
        : ((l.id = n.id),
          (l.object = n),
          (l.geometry = r),
          (l.material = i),
          (l.groupOrder = a),
          (l.renderOrder = n.renderOrder),
          (l.z = o),
          (l.group = s)),
      t++,
      l
    );
  }
  return {
    opaque: n,
    transmissive: r,
    transparent: i,
    init: function () {
      (t = 0), (n.length = 0), (r.length = 0), (i.length = 0);
    },
    push: function (e, t, o, s, l, c) {
      const u = a(e, t, o, s, l, c);
      o.transmission > 0
        ? r.push(u)
        : !0 === o.transparent
        ? i.push(u)
        : n.push(u);
    },
    unshift: function (e, t, o, s, l, c) {
      const u = a(e, t, o, s, l, c);
      o.transmission > 0
        ? r.unshift(u)
        : !0 === o.transparent
        ? i.unshift(u)
        : n.unshift(u);
    },
    finish: function () {
      for (let n = t, r = e.length; n < r; n++) {
        const t = e[n];
        if (null === t.id) break;
        (t.id = null),
          (t.object = null),
          (t.geometry = null),
          (t.material = null),
          (t.group = null);
      }
    },
    sort: function (e, t) {
      n.length > 1 && n.sort(e || I1),
        r.length > 1 && r.sort(t || wp),
        i.length > 1 && i.sort(t || wp);
    },
  };
}
function N1() {
  let e = new WeakMap();
  return {
    get: function (t, n) {
      const r = e.get(t);
      let i;
      return (
        void 0 === r
          ? ((i = new Ap()), e.set(t, [i]))
          : n >= r.length
          ? ((i = new Ap()), r.push(i))
          : (i = r[n]),
        i
      );
    },
    dispose: function () {
      e = new WeakMap();
    },
  };
}
function F1() {
  const e = {};
  return {
    get: function (t) {
      if (void 0 !== e[t.id]) return e[t.id];
      let n;
      switch (t.type) {
        case "DirectionalLight":
          n = { direction: new F(), color: new Ze() };
          break;
        case "SpotLight":
          n = {
            position: new F(),
            direction: new F(),
            color: new Ze(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0,
          };
          break;
        case "PointLight":
          n = { position: new F(), color: new Ze(), distance: 0, decay: 0 };
          break;
        case "HemisphereLight":
          n = { direction: new F(), skyColor: new Ze(), groundColor: new Ze() };
          break;
        case "RectAreaLight":
          n = {
            color: new Ze(),
            position: new F(),
            halfWidth: new F(),
            halfHeight: new F(),
          };
      }
      return (e[t.id] = n), n;
    },
  };
}
function O1() {
  const e = {};
  return {
    get: function (t) {
      if (void 0 !== e[t.id]) return e[t.id];
      let n;
      switch (t.type) {
        case "DirectionalLight":
        case "SpotLight":
          n = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Ve(),
          };
          break;
        case "PointLight":
          n = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Ve(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3,
          };
      }
      return (e[t.id] = n), n;
    },
  };
}
let z1 = 0;
function k1(e, t) {
  return (
    (t.castShadow ? 2 : 0) -
    (e.castShadow ? 2 : 0) +
    (t.map ? 1 : 0) -
    (e.map ? 1 : 0)
  );
}
function B1(e) {
  const t = new F1(),
    n = O1(),
    r = {
      version: 0,
      hash: {
        directionalLength: -1,
        pointLength: -1,
        spotLength: -1,
        rectAreaLength: -1,
        hemiLength: -1,
        numDirectionalShadows: -1,
        numPointShadows: -1,
        numSpotShadows: -1,
        numSpotMaps: -1,
        numLightProbes: -1,
      },
      ambient: [0, 0, 0],
      probe: [],
      directional: [],
      directionalShadow: [],
      directionalShadowMap: [],
      directionalShadowMatrix: [],
      spot: [],
      spotLightMap: [],
      spotShadow: [],
      spotShadowMap: [],
      spotLightMatrix: [],
      rectArea: [],
      rectAreaLTC1: null,
      rectAreaLTC2: null,
      point: [],
      pointShadow: [],
      pointShadowMap: [],
      pointShadowMatrix: [],
      hemi: [],
      numSpotLightShadowsWithMaps: 0,
      numLightProbes: 0,
    };
  for (let e = 0; e < 9; e++) r.probe.push(new F());
  const i = new F(),
    a = new St(),
    o = new St();
  return {
    setup: function (i) {
      let a = 0,
        o = 0,
        s = 0;
      for (let e = 0; e < 9; e++) r.probe[e].set(0, 0, 0);
      let l = 0,
        c = 0,
        u = 0,
        d = 0,
        h = 0,
        f = 0,
        p = 0,
        m = 0,
        g = 0,
        v = 0,
        _ = 0;
      i.sort(k1);
      for (let e = 0, x = i.length; e < x; e++) {
        const x = i[e],
          y = x.color,
          S = x.intensity,
          M = x.distance,
          E = x.shadow && x.shadow.map ? x.shadow.map.texture : null;
        if (x.isAmbientLight) (a += y.r * S), (o += y.g * S), (s += y.b * S);
        else if (x.isLightProbe) {
          for (let e = 0; e < 9; e++)
            r.probe[e].addScaledVector(x.sh.coefficients[e], S);
          _++;
        } else if (x.isDirectionalLight) {
          const e = t.get(x);
          if (
            (e.color.copy(x.color).multiplyScalar(x.intensity), x.castShadow)
          ) {
            const e = x.shadow,
              t = n.get(x);
            (t.shadowIntensity = e.intensity),
              (t.shadowBias = e.bias),
              (t.shadowNormalBias = e.normalBias),
              (t.shadowRadius = e.radius),
              (t.shadowMapSize = e.mapSize),
              (r.directionalShadow[l] = t),
              (r.directionalShadowMap[l] = E),
              (r.directionalShadowMatrix[l] = x.shadow.matrix),
              f++;
          }
          (r.directional[l] = e), l++;
        } else if (x.isSpotLight) {
          const e = t.get(x);
          e.position.setFromMatrixPosition(x.matrixWorld),
            e.color.copy(y).multiplyScalar(S),
            (e.distance = M),
            (e.coneCos = Math.cos(x.angle)),
            (e.penumbraCos = Math.cos(x.angle * (1 - x.penumbra))),
            (e.decay = x.decay),
            (r.spot[u] = e);
          const i = x.shadow;
          if (
            (x.map &&
              ((r.spotLightMap[g] = x.map),
              g++,
              i.updateMatrices(x),
              x.castShadow && v++),
            (r.spotLightMatrix[u] = i.matrix),
            x.castShadow)
          ) {
            const e = n.get(x);
            (e.shadowIntensity = i.intensity),
              (e.shadowBias = i.bias),
              (e.shadowNormalBias = i.normalBias),
              (e.shadowRadius = i.radius),
              (e.shadowMapSize = i.mapSize),
              (r.spotShadow[u] = e),
              (r.spotShadowMap[u] = E),
              m++;
          }
          u++;
        } else if (x.isRectAreaLight) {
          const e = t.get(x);
          e.color.copy(y).multiplyScalar(S),
            e.halfWidth.set(0.5 * x.width, 0, 0),
            e.halfHeight.set(0, 0.5 * x.height, 0),
            (r.rectArea[d] = e),
            d++;
        } else if (x.isPointLight) {
          const e = t.get(x);
          if (
            (e.color.copy(x.color).multiplyScalar(x.intensity),
            (e.distance = x.distance),
            (e.decay = x.decay),
            x.castShadow)
          ) {
            const e = x.shadow,
              t = n.get(x);
            (t.shadowIntensity = e.intensity),
              (t.shadowBias = e.bias),
              (t.shadowNormalBias = e.normalBias),
              (t.shadowRadius = e.radius),
              (t.shadowMapSize = e.mapSize),
              (t.shadowCameraNear = e.camera.near),
              (t.shadowCameraFar = e.camera.far),
              (r.pointShadow[c] = t),
              (r.pointShadowMap[c] = E),
              (r.pointShadowMatrix[c] = x.shadow.matrix),
              p++;
          }
          (r.point[c] = e), c++;
        } else if (x.isHemisphereLight) {
          const e = t.get(x);
          e.skyColor.copy(x.color).multiplyScalar(S),
            e.groundColor.copy(x.groundColor).multiplyScalar(S),
            (r.hemi[h] = e),
            h++;
        }
      }
      d > 0 &&
        (!0 === e.has("OES_texture_float_linear")
          ? ((r.rectAreaLTC1 = ae.LTC_FLOAT_1),
            (r.rectAreaLTC2 = ae.LTC_FLOAT_2))
          : ((r.rectAreaLTC1 = ae.LTC_HALF_1),
            (r.rectAreaLTC2 = ae.LTC_HALF_2))),
        (r.ambient[0] = a),
        (r.ambient[1] = o),
        (r.ambient[2] = s);
      const x = r.hash;
      (x.directionalLength !== l ||
        x.pointLength !== c ||
        x.spotLength !== u ||
        x.rectAreaLength !== d ||
        x.hemiLength !== h ||
        x.numDirectionalShadows !== f ||
        x.numPointShadows !== p ||
        x.numSpotShadows !== m ||
        x.numSpotMaps !== g ||
        x.numLightProbes !== _) &&
        ((r.directional.length = l),
        (r.spot.length = u),
        (r.rectArea.length = d),
        (r.point.length = c),
        (r.hemi.length = h),
        (r.directionalShadow.length = f),
        (r.directionalShadowMap.length = f),
        (r.pointShadow.length = p),
        (r.pointShadowMap.length = p),
        (r.spotShadow.length = m),
        (r.spotShadowMap.length = m),
        (r.directionalShadowMatrix.length = f),
        (r.pointShadowMatrix.length = p),
        (r.spotLightMatrix.length = m + g - v),
        (r.spotLightMap.length = g),
        (r.numSpotLightShadowsWithMaps = v),
        (r.numLightProbes = _),
        (x.directionalLength = l),
        (x.pointLength = c),
        (x.spotLength = u),
        (x.rectAreaLength = d),
        (x.hemiLength = h),
        (x.numDirectionalShadows = f),
        (x.numPointShadows = p),
        (x.numSpotShadows = m),
        (x.numSpotMaps = g),
        (x.numLightProbes = _),
        (r.version = z1++));
    },
    setupView: function (e, t) {
      let n = 0,
        s = 0,
        l = 0,
        c = 0,
        u = 0;
      const d = t.matrixWorldInverse;
      for (let t = 0, h = e.length; t < h; t++) {
        const h = e[t];
        if (h.isDirectionalLight) {
          const e = r.directional[n];
          e.direction.setFromMatrixPosition(h.matrixWorld),
            i.setFromMatrixPosition(h.target.matrixWorld),
            e.direction.sub(i),
            e.direction.transformDirection(d),
            n++;
        } else if (h.isSpotLight) {
          const e = r.spot[l];
          e.position.setFromMatrixPosition(h.matrixWorld),
            e.position.applyMatrix4(d),
            e.direction.setFromMatrixPosition(h.matrixWorld),
            i.setFromMatrixPosition(h.target.matrixWorld),
            e.direction.sub(i),
            e.direction.transformDirection(d),
            l++;
        } else if (h.isRectAreaLight) {
          const e = r.rectArea[c];
          e.position.setFromMatrixPosition(h.matrixWorld),
            e.position.applyMatrix4(d),
            o.identity(),
            a.copy(h.matrixWorld),
            a.premultiply(d),
            o.extractRotation(a),
            e.halfWidth.set(0.5 * h.width, 0, 0),
            e.halfHeight.set(0, 0.5 * h.height, 0),
            e.halfWidth.applyMatrix4(o),
            e.halfHeight.applyMatrix4(o),
            c++;
        } else if (h.isPointLight) {
          const e = r.point[s];
          e.position.setFromMatrixPosition(h.matrixWorld),
            e.position.applyMatrix4(d),
            s++;
        } else if (h.isHemisphereLight) {
          const e = r.hemi[u];
          e.direction.setFromMatrixPosition(h.matrixWorld),
            e.direction.transformDirection(d),
            u++;
        }
      }
    },
    state: r,
  };
}
function Cp(e) {
  const t = new B1(e),
    n = [],
    r = [];
  const i = {
    lightsArray: n,
    shadowsArray: r,
    camera: null,
    lights: t,
    transmissionRenderTarget: {},
  };
  return {
    init: function (e) {
      (i.camera = e), (n.length = 0), (r.length = 0);
    },
    state: i,
    setupLights: function () {
      t.setup(n);
    },
    setupLightsView: function (e) {
      t.setupView(n, e);
    },
    pushLight: function (e) {
      n.push(e);
    },
    pushShadow: function (e) {
      r.push(e);
    },
  };
}
function H1(e) {
  let t = new WeakMap();
  return {
    get: function (n, r = 0) {
      const i = t.get(n);
      let a;
      return (
        void 0 === i
          ? ((a = new Cp(e)), t.set(n, [a]))
          : r >= i.length
          ? ((a = new Cp(e)), i.push(a))
          : (a = i[r]),
        a
      );
    },
    dispose: function () {
      t = new WeakMap();
    },
  };
}
class V1 extends Ll {
  constructor(e) {
    super(),
      (this.isMeshDepthMaterial = !0),
      (this.type = "MeshDepthMaterial"),
      (this.depthPacking = Ox),
      (this.map = null),
      (this.alphaMap = null),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.depthPacking = e.depthPacking),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      this
    );
  }
}
class G1 extends Ll {
  constructor(e) {
    super(),
      (this.isMeshDistanceMaterial = !0),
      (this.type = "MeshDistanceMaterial"),
      (this.map = null),
      (this.alphaMap = null),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      this
    );
  }
}
const W1 = "void main() {\n\tgl_Position = vec4( position, 1.0 );\n}",
  X1 =
    "uniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\n#include <packing>\nvoid main() {\n\tconst float samples = float( VSM_SAMPLES );\n\tfloat mean = 0.0;\n\tfloat squared_mean = 0.0;\n\tfloat uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );\n\tfloat uvStart = samples <= 1.0 ? 0.0 : - 1.0;\n\tfor ( float i = 0.0; i < samples; i ++ ) {\n\t\tfloat uvOffset = uvStart + i * uvStride;\n\t\t#ifdef HORIZONTAL_PASS\n\t\t\tvec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );\n\t\t\tmean += distribution.x;\n\t\t\tsquared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n\t\t#else\n\t\t\tfloat depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );\n\t\t\tmean += depth;\n\t\t\tsquared_mean += depth * depth;\n\t\t#endif\n\t}\n\tmean = mean / samples;\n\tsquared_mean = squared_mean / samples;\n\tfloat std_dev = sqrt( squared_mean - mean * mean );\n\tgl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );\n}";
function Y1(e, t, n) {
  let r = new p_();
  const i = new Ve(),
    a = new Ve(),
    o = new st(),
    s = new V1({ depthPacking: zx }),
    l = new G1(),
    c = {},
    u = n.maxTextureSize,
    d = { [Hi]: Kt, [Kt]: Hi, [ei]: 2 },
    h = new di({
      defines: { VSM_SAMPLES: 8 },
      uniforms: {
        shadow_pass: { value: null },
        resolution: { value: new Ve() },
        radius: { value: 4 },
      },
      vertexShader: W1,
      fragmentShader: X1,
    }),
    f = h.clone();
  f.defines.HORIZONTAL_PASS = 1;
  const p = new Yi();
  p.setAttribute(
    "position",
    new Gn(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3)
  );
  const m = new Bn(p, h),
    g = this;
  (this.enabled = !1),
    (this.autoUpdate = !0),
    (this.needsUpdate = !1),
    (this.type = Vg);
  let v = this.type;
  function _(n, r) {
    const a = t.update(m);
    h.defines.VSM_SAMPLES !== n.blurSamples &&
      ((h.defines.VSM_SAMPLES = n.blurSamples),
      (f.defines.VSM_SAMPLES = n.blurSamples),
      (h.needsUpdate = !0),
      (f.needsUpdate = !0)),
      null === n.mapPass && (n.mapPass = new yr(i.x, i.y)),
      (h.uniforms.shadow_pass.value = n.map.texture),
      (h.uniforms.resolution.value = n.mapSize),
      (h.uniforms.radius.value = n.radius),
      e.setRenderTarget(n.mapPass),
      e.clear(),
      e.renderBufferDirect(r, null, a, h, m, null),
      (f.uniforms.shadow_pass.value = n.mapPass.texture),
      (f.uniforms.resolution.value = n.mapSize),
      (f.uniforms.radius.value = n.radius),
      e.setRenderTarget(n.map),
      e.clear(),
      e.renderBufferDirect(r, null, a, f, m, null);
  }
  function x(t, n, r, i) {
    let a = null;
    const o =
      !0 === r.isPointLight ? t.customDistanceMaterial : t.customDepthMaterial;
    if (void 0 !== o) a = o;
    else if (
      ((a = !0 === r.isPointLight ? l : s),
      (e.localClippingEnabled &&
        !0 === n.clipShadows &&
        Array.isArray(n.clippingPlanes) &&
        0 !== n.clippingPlanes.length) ||
        (n.displacementMap && 0 !== n.displacementScale) ||
        (n.alphaMap && n.alphaTest > 0) ||
        (n.map && n.alphaTest > 0))
    ) {
      const e = a.uuid,
        t = n.uuid;
      let r = c[e];
      void 0 === r && ((r = {}), (c[e] = r));
      let i = r[t];
      void 0 === i &&
        ((i = a.clone()), (r[t] = i), n.addEventListener("dispose", S)),
        (a = i);
    }
    if (
      ((a.visible = n.visible),
      (a.wireframe = n.wireframe),
      (a.side =
        i === Zn
          ? null !== n.shadowSide
            ? n.shadowSide
            : n.side
          : null !== n.shadowSide
          ? n.shadowSide
          : d[n.side]),
      (a.alphaMap = n.alphaMap),
      (a.alphaTest = n.alphaTest),
      (a.map = n.map),
      (a.clipShadows = n.clipShadows),
      (a.clippingPlanes = n.clippingPlanes),
      (a.clipIntersection = n.clipIntersection),
      (a.displacementMap = n.displacementMap),
      (a.displacementScale = n.displacementScale),
      (a.displacementBias = n.displacementBias),
      (a.wireframeLinewidth = n.wireframeLinewidth),
      (a.linewidth = n.linewidth),
      !0 === r.isPointLight && !0 === a.isMeshDistanceMaterial)
    ) {
      e.properties.get(a).light = r;
    }
    return a;
  }
  function y(n, i, a, o, s) {
    if (!1 === n.visible) return;
    if (
      n.layers.test(i.layers) &&
      (n.isMesh || n.isLine || n.isPoints) &&
      (n.castShadow || (n.receiveShadow && s === Zn)) &&
      (!n.frustumCulled || r.intersectsObject(n))
    ) {
      n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse, n.matrixWorld);
      const r = t.update(n),
        l = n.material;
      if (Array.isArray(l)) {
        const t = r.groups;
        for (let c = 0, u = t.length; c < u; c++) {
          const u = t[c],
            d = l[u.materialIndex];
          if (d && d.visible) {
            const t = x(n, d, o, s);
            n.onBeforeShadow(e, n, i, a, r, t, u),
              e.renderBufferDirect(a, null, r, t, n, u),
              n.onAfterShadow(e, n, i, a, r, t, u);
          }
        }
      } else if (l.visible) {
        const t = x(n, l, o, s);
        n.onBeforeShadow(e, n, i, a, r, t, null),
          e.renderBufferDirect(a, null, r, t, n, null),
          n.onAfterShadow(e, n, i, a, r, t, null);
      }
    }
    const l = n.children;
    for (let e = 0, t = l.length; e < t; e++) y(l[e], i, a, o, s);
  }
  function S(e) {
    e.target.removeEventListener("dispose", S);
    for (const t in c) {
      const n = c[t],
        r = e.target.uuid;
      r in n && (n[r].dispose(), delete n[r]);
    }
  }
  this.render = function (t, n, s) {
    if (
      !1 === g.enabled ||
      (!1 === g.autoUpdate && !1 === g.needsUpdate) ||
      0 === t.length
    )
      return;
    const l = e.getRenderTarget(),
      c = e.getActiveCubeFace(),
      d = e.getActiveMipmapLevel(),
      h = e.state;
    h.setBlending(0),
      h.buffers.color.setClear(1, 1, 1, 1),
      h.buffers.depth.setTest(!0),
      h.setScissorTest(!1);
    const f = v !== Zn && this.type === Zn,
      p = v === Zn && this.type !== Zn;
    for (let l = 0, c = t.length; l < c; l++) {
      const c = t[l],
        d = c.shadow;
      if (void 0 === d) {
        console.warn("THREE.WebGLShadowMap:", c, "has no shadow.");
        continue;
      }
      if (!1 === d.autoUpdate && !1 === d.needsUpdate) continue;
      i.copy(d.mapSize);
      const m = d.getFrameExtents();
      if (
        (i.multiply(m),
        a.copy(d.mapSize),
        (i.x > u || i.y > u) &&
          (i.x > u &&
            ((a.x = Math.floor(u / m.x)),
            (i.x = a.x * m.x),
            (d.mapSize.x = a.x)),
          i.y > u &&
            ((a.y = Math.floor(u / m.y)),
            (i.y = a.y * m.y),
            (d.mapSize.y = a.y))),
        null === d.map || !0 === f || !0 === p)
      ) {
        const e = this.type !== Zn ? { minFilter: gn, magFilter: gn } : {};
        null !== d.map && d.map.dispose(),
          (d.map = new yr(i.x, i.y, e)),
          (d.map.texture.name = c.name + ".shadowMap"),
          d.camera.updateProjectionMatrix();
      }
      e.setRenderTarget(d.map), e.clear();
      const g = d.getViewportCount();
      for (let e = 0; e < g; e++) {
        const t = d.getViewport(e);
        o.set(a.x * t.x, a.y * t.y, a.x * t.z, a.y * t.w),
          h.viewport(o),
          d.updateMatrices(c, e),
          (r = d.getFrustum()),
          y(n, s, d.camera, c, this.type);
      }
      !0 !== d.isPointLightShadow && this.type === Zn && _(d, s),
        (d.needsUpdate = !1);
    }
    (v = this.type), (g.needsUpdate = !1), e.setRenderTarget(l, c, d);
  };
}
function q1(e) {
  const t = new (function () {
      let t = !1;
      const n = new st();
      let r = null;
      const i = new st(0, 0, 0, 0);
      return {
        setMask: function (n) {
          r !== n && !t && (e.colorMask(n, n, n, n), (r = n));
        },
        setLocked: function (e) {
          t = e;
        },
        setClear: function (t, r, a, o, s) {
          !0 === s && ((t *= o), (r *= o), (a *= o)),
            n.set(t, r, a, o),
            !1 === i.equals(n) && (e.clearColor(t, r, a, o), i.copy(n));
        },
        reset: function () {
          (t = !1), (r = null), i.set(-1, 0, 0, 0);
        },
      };
    })(),
    n = new (function () {
      let t = !1,
        n = null,
        r = null,
        i = null;
      return {
        setTest: function (t) {
          t ? z(e.DEPTH_TEST) : B(e.DEPTH_TEST);
        },
        setMask: function (r) {
          n !== r && !t && (e.depthMask(r), (n = r));
        },
        setFunc: function (t) {
          if (r !== t) {
            switch (t) {
              case 0:
                e.depthFunc(e.NEVER);
                break;
              case 1:
                e.depthFunc(e.ALWAYS);
                break;
              case 2:
                e.depthFunc(e.LESS);
                break;
              case 3:
              default:
                e.depthFunc(e.LEQUAL);
                break;
              case 4:
                e.depthFunc(e.EQUAL);
                break;
              case 5:
                e.depthFunc(e.GEQUAL);
                break;
              case 6:
                e.depthFunc(e.GREATER);
                break;
              case 7:
                e.depthFunc(e.NOTEQUAL);
            }
            r = t;
          }
        },
        setLocked: function (e) {
          t = e;
        },
        setClear: function (t) {
          i !== t && (e.clearDepth(t), (i = t));
        },
        reset: function () {
          (t = !1), (n = null), (r = null), (i = null);
        },
      };
    })(),
    r = new (function () {
      let t = !1,
        n = null,
        r = null,
        i = null,
        a = null,
        o = null,
        s = null,
        l = null,
        c = null;
      return {
        setTest: function (n) {
          t || (n ? z(e.STENCIL_TEST) : B(e.STENCIL_TEST));
        },
        setMask: function (r) {
          n !== r && !t && (e.stencilMask(r), (n = r));
        },
        setFunc: function (t, n, o) {
          (r !== t || i !== n || a !== o) &&
            (e.stencilFunc(t, n, o), (r = t), (i = n), (a = o));
        },
        setOp: function (t, n, r) {
          (o !== t || s !== n || l !== r) &&
            (e.stencilOp(t, n, r), (o = t), (s = n), (l = r));
        },
        setLocked: function (e) {
          t = e;
        },
        setClear: function (t) {
          c !== t && (e.clearStencil(t), (c = t));
        },
        reset: function () {
          (t = !1),
            (n = null),
            (r = null),
            (i = null),
            (a = null),
            (o = null),
            (s = null),
            (l = null),
            (c = null);
        },
      };
    })(),
    i = new WeakMap(),
    a = new WeakMap();
  let o = {},
    s = {},
    l = new WeakMap(),
    c = [],
    u = null,
    d = !1,
    h = null,
    f = null,
    p = null,
    m = null,
    g = null,
    v = null,
    _ = null,
    x = new Ze(0, 0, 0),
    y = 0,
    S = !1,
    M = null,
    E = null,
    b = null,
    T = null,
    w = null;
  const A = e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let R = !1,
    C = 0;
  const P = e.getParameter(e.VERSION);
  -1 !== P.indexOf("WebGL")
    ? ((C = parseFloat(/^WebGL (\d)/.exec(P)[1])), (R = C >= 1))
    : -1 !== P.indexOf("OpenGL ES") &&
      ((C = parseFloat(/^OpenGL ES (\d)/.exec(P)[1])), (R = C >= 2));
  let L = null,
    U = {};
  const D = e.getParameter(e.SCISSOR_BOX),
    N = e.getParameter(e.VIEWPORT),
    I = new st().fromArray(D),
    F = new st().fromArray(N);
  function O(t, n, r, i) {
    const a = new Uint8Array(4),
      o = e.createTexture();
    e.bindTexture(t, o),
      e.texParameteri(t, e.TEXTURE_MIN_FILTER, e.NEAREST),
      e.texParameteri(t, e.TEXTURE_MAG_FILTER, e.NEAREST);
    for (let o = 0; o < r; o++)
      t === e.TEXTURE_3D || t === e.TEXTURE_2D_ARRAY
        ? e.texImage3D(n, 0, e.RGBA, 1, 1, i, 0, e.RGBA, e.UNSIGNED_BYTE, a)
        : e.texImage2D(n + o, 0, e.RGBA, 1, 1, 0, e.RGBA, e.UNSIGNED_BYTE, a);
    return o;
  }
  const k = {};
  function z(t) {
    !0 !== o[t] && (e.enable(t), (o[t] = !0));
  }
  function B(t) {
    !1 !== o[t] && (e.disable(t), (o[t] = !1));
  }
  (k[e.TEXTURE_2D] = O(e.TEXTURE_2D, e.TEXTURE_2D, 1)),
    (k[e.TEXTURE_CUBE_MAP] = O(
      e.TEXTURE_CUBE_MAP,
      e.TEXTURE_CUBE_MAP_POSITIVE_X,
      6
    )),
    (k[e.TEXTURE_2D_ARRAY] = O(e.TEXTURE_2D_ARRAY, e.TEXTURE_2D_ARRAY, 1, 1)),
    (k[e.TEXTURE_3D] = O(e.TEXTURE_3D, e.TEXTURE_3D, 1, 1)),
    t.setClear(0, 0, 0, 1),
    n.setClear(1),
    r.setClear(0),
    z(e.DEPTH_TEST),
    n.setFunc(3),
    W(!1),
    X(1),
    z(e.CULL_FACE),
    G(0);
  const H = {
    [rr]: e.FUNC_ADD,
    [ix]: e.FUNC_SUBTRACT,
    [rx]: e.FUNC_REVERSE_SUBTRACT,
  };
  (H[sx] = e.MIN), (H[ox] = e.MAX);
  const V = {
    [ax]: e.ZERO,
    [lx]: e.ONE,
    [ux]: e.SRC_COLOR,
    [Lc]: e.SRC_ALPHA,
    [mx]: e.SRC_ALPHA_SATURATE,
    [hx]: e.DST_COLOR,
    [fx]: e.DST_ALPHA,
    [cx]: e.ONE_MINUS_SRC_COLOR,
    [bc]: e.ONE_MINUS_SRC_ALPHA,
    [px]: e.ONE_MINUS_DST_COLOR,
    [dx]: e.ONE_MINUS_DST_ALPHA,
    [gx]: e.CONSTANT_COLOR,
    [_x]: e.ONE_MINUS_CONSTANT_COLOR,
    [vx]: e.CONSTANT_ALPHA,
    [xx]: e.ONE_MINUS_CONSTANT_ALPHA,
  };
  function G(t, n, r, i, a, o, s, l, c, u) {
    if (0 !== t) {
      if ((!1 === d && (z(e.BLEND), (d = !0)), 5 === t))
        (a = a || n),
          (o = o || r),
          (s = s || i),
          (n !== f || a !== g) &&
            (e.blendEquationSeparate(H[n], H[a]), (f = n), (g = a)),
          (r !== p || i !== m || o !== v || s !== _) &&
            (e.blendFuncSeparate(V[r], V[i], V[o], V[s]),
            (p = r),
            (m = i),
            (v = o),
            (_ = s)),
          (!1 === l.equals(x) || c !== y) &&
            (e.blendColor(l.r, l.g, l.b, c), x.copy(l), (y = c)),
          (h = t),
          (S = !1);
      else if (t !== h || u !== S) {
        if (
          ((f !== rr || g !== rr) &&
            (e.blendEquation(e.FUNC_ADD), (f = rr), (g = rr)),
          u)
        )
          switch (t) {
            case 1:
              e.blendFuncSeparate(
                e.ONE,
                e.ONE_MINUS_SRC_ALPHA,
                e.ONE,
                e.ONE_MINUS_SRC_ALPHA
              );
              break;
            case 2:
              e.blendFunc(e.ONE, e.ONE);
              break;
            case 3:
              e.blendFuncSeparate(e.ZERO, e.ONE_MINUS_SRC_COLOR, e.ZERO, e.ONE);
              break;
            case 4:
              e.blendFuncSeparate(e.ZERO, e.SRC_COLOR, e.ZERO, e.SRC_ALPHA);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", t);
          }
        else
          switch (t) {
            case 1:
              e.blendFuncSeparate(
                e.SRC_ALPHA,
                e.ONE_MINUS_SRC_ALPHA,
                e.ONE,
                e.ONE_MINUS_SRC_ALPHA
              );
              break;
            case 2:
              e.blendFunc(e.SRC_ALPHA, e.ONE);
              break;
            case 3:
              e.blendFuncSeparate(e.ZERO, e.ONE_MINUS_SRC_COLOR, e.ZERO, e.ONE);
              break;
            case 4:
              e.blendFunc(e.ZERO, e.SRC_COLOR);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", t);
          }
        (p = null),
          (m = null),
          (v = null),
          (_ = null),
          x.set(0, 0, 0),
          (y = 0),
          (h = t),
          (S = u);
      }
    } else !0 === d && (B(e.BLEND), (d = !1));
  }
  function W(t) {
    M !== t && (t ? e.frontFace(e.CW) : e.frontFace(e.CCW), (M = t));
  }
  function X(t) {
    0 !== t
      ? (z(e.CULL_FACE),
        t !== E &&
          (1 === t
            ? e.cullFace(e.BACK)
            : 2 === t
            ? e.cullFace(e.FRONT)
            : e.cullFace(e.FRONT_AND_BACK)))
      : B(e.CULL_FACE),
      (E = t);
  }
  function j(t, n, r) {
    t
      ? (z(e.POLYGON_OFFSET_FILL),
        (T !== n || w !== r) && (e.polygonOffset(n, r), (T = n), (w = r)))
      : B(e.POLYGON_OFFSET_FILL);
  }
  return {
    buffers: { color: t, depth: n, stencil: r },
    enable: z,
    disable: B,
    bindFramebuffer: function (t, n) {
      return (
        s[t] !== n &&
        (e.bindFramebuffer(t, n),
        (s[t] = n),
        t === e.DRAW_FRAMEBUFFER && (s[e.FRAMEBUFFER] = n),
        t === e.FRAMEBUFFER && (s[e.DRAW_FRAMEBUFFER] = n),
        !0)
      );
    },
    drawBuffers: function (t, n) {
      let r = c,
        i = !1;
      if (t) {
        (r = l.get(n)), void 0 === r && ((r = []), l.set(n, r));
        const a = t.textures;
        if (r.length !== a.length || r[0] !== e.COLOR_ATTACHMENT0) {
          for (let t = 0, n = a.length; t < n; t++)
            r[t] = e.COLOR_ATTACHMENT0 + t;
          (r.length = a.length), (i = !0);
        }
      } else r[0] !== e.BACK && ((r[0] = e.BACK), (i = !0));
      i && e.drawBuffers(r);
    },
    useProgram: function (t) {
      return u !== t && (e.useProgram(t), (u = t), !0);
    },
    setBlending: G,
    setMaterial: function (i, a) {
      2 === i.side ? B(e.CULL_FACE) : z(e.CULL_FACE);
      let o = i.side === Kt;
      a && (o = !o),
        W(o),
        1 === i.blending && !1 === i.transparent
          ? G(0)
          : G(
              i.blending,
              i.blendEquation,
              i.blendSrc,
              i.blendDst,
              i.blendEquationAlpha,
              i.blendSrcAlpha,
              i.blendDstAlpha,
              i.blendColor,
              i.blendAlpha,
              i.premultipliedAlpha
            ),
        n.setFunc(i.depthFunc),
        n.setTest(i.depthTest),
        n.setMask(i.depthWrite),
        t.setMask(i.colorWrite);
      const s = i.stencilWrite;
      r.setTest(s),
        s &&
          (r.setMask(i.stencilWriteMask),
          r.setFunc(i.stencilFunc, i.stencilRef, i.stencilFuncMask),
          r.setOp(i.stencilFail, i.stencilZFail, i.stencilZPass)),
        j(i.polygonOffset, i.polygonOffsetFactor, i.polygonOffsetUnits),
        !0 === i.alphaToCoverage
          ? z(e.SAMPLE_ALPHA_TO_COVERAGE)
          : B(e.SAMPLE_ALPHA_TO_COVERAGE);
    },
    setFlipSided: W,
    setCullFace: X,
    setLineWidth: function (t) {
      t !== b && (R && e.lineWidth(t), (b = t));
    },
    setPolygonOffset: j,
    setScissorTest: function (t) {
      t ? z(e.SCISSOR_TEST) : B(e.SCISSOR_TEST);
    },
    activeTexture: function (t) {
      void 0 === t && (t = e.TEXTURE0 + A - 1),
        L !== t && (e.activeTexture(t), (L = t));
    },
    bindTexture: function (t, n, r) {
      void 0 === r && (r = null === L ? e.TEXTURE0 + A - 1 : L);
      let i = U[r];
      void 0 === i && ((i = { type: void 0, texture: void 0 }), (U[r] = i)),
        (i.type !== t || i.texture !== n) &&
          (L !== r && (e.activeTexture(r), (L = r)),
          e.bindTexture(t, n || k[t]),
          (i.type = t),
          (i.texture = n));
    },
    unbindTexture: function () {
      const t = U[L];
      void 0 !== t &&
        void 0 !== t.type &&
        (e.bindTexture(t.type, null), (t.type = void 0), (t.texture = void 0));
    },
    compressedTexImage2D: function () {
      try {
        e.compressedTexImage2D.apply(e, arguments);
      } catch (e) {
        console.error("THREE.WebGLState:", e);
      }
    },
    compressedTexImage3D: function () {
      try {
        e.compressedTexImage3D.apply(e, arguments);
      } catch (e) {
        console.error("THREE.WebGLState:", e);
      }
    },
    texImage2D: function () {
      try {
        e.texImage2D.apply(e, arguments);
      } catch (e) {
        console.error("THREE.WebGLState:", e);
      }
    },
    texImage3D: function () {
      try {
        e.texImage3D.apply(e, arguments);
      } catch (e) {
        console.error("THREE.WebGLState:", e);
      }
    },
    updateUBOMapping: function (t, n) {
      let r = a.get(n);
      void 0 === r && ((r = new WeakMap()), a.set(n, r));
      let i = r.get(t);
      void 0 === i && ((i = e.getUniformBlockIndex(n, t.name)), r.set(t, i));
    },
    uniformBlockBinding: function (t, n) {
      const r = a.get(n).get(t);
      i.get(n) !== r &&
        (e.uniformBlockBinding(n, r, t.__bindingPointIndex), i.set(n, r));
    },
    texStorage2D: function () {
      try {
        e.texStorage2D.apply(e, arguments);
      } catch (e) {
        console.error("THREE.WebGLState:", e);
      }
    },
    texStorage3D: function () {
      try {
        e.texStorage3D.apply(e, arguments);
      } catch (e) {
        console.error("THREE.WebGLState:", e);
      }
    },
    texSubImage2D: function () {
      try {
        e.texSubImage2D.apply(e, arguments);
      } catch (e) {
        console.error("THREE.WebGLState:", e);
      }
    },
    texSubImage3D: function () {
      try {
        e.texSubImage3D.apply(e, arguments);
      } catch (e) {
        console.error("THREE.WebGLState:", e);
      }
    },
    compressedTexSubImage2D: function () {
      try {
        e.compressedTexSubImage2D.apply(e, arguments);
      } catch (e) {
        console.error("THREE.WebGLState:", e);
      }
    },
    compressedTexSubImage3D: function () {
      try {
        e.compressedTexSubImage3D.apply(e, arguments);
      } catch (e) {
        console.error("THREE.WebGLState:", e);
      }
    },
    scissor: function (t) {
      !1 === I.equals(t) && (e.scissor(t.x, t.y, t.z, t.w), I.copy(t));
    },
    viewport: function (t) {
      !1 === F.equals(t) && (e.viewport(t.x, t.y, t.z, t.w), F.copy(t));
    },
    reset: function () {
      e.disable(e.BLEND),
        e.disable(e.CULL_FACE),
        e.disable(e.DEPTH_TEST),
        e.disable(e.POLYGON_OFFSET_FILL),
        e.disable(e.SCISSOR_TEST),
        e.disable(e.STENCIL_TEST),
        e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),
        e.blendEquation(e.FUNC_ADD),
        e.blendFunc(e.ONE, e.ZERO),
        e.blendFuncSeparate(e.ONE, e.ZERO, e.ONE, e.ZERO),
        e.blendColor(0, 0, 0, 0),
        e.colorMask(!0, !0, !0, !0),
        e.clearColor(0, 0, 0, 0),
        e.depthMask(!0),
        e.depthFunc(e.LESS),
        e.clearDepth(1),
        e.stencilMask(4294967295),
        e.stencilFunc(e.ALWAYS, 0, 4294967295),
        e.stencilOp(e.KEEP, e.KEEP, e.KEEP),
        e.clearStencil(0),
        e.cullFace(e.BACK),
        e.frontFace(e.CCW),
        e.polygonOffset(0, 0),
        e.activeTexture(e.TEXTURE0),
        e.bindFramebuffer(e.FRAMEBUFFER, null),
        e.bindFramebuffer(e.DRAW_FRAMEBUFFER, null),
        e.bindFramebuffer(e.READ_FRAMEBUFFER, null),
        e.useProgram(null),
        e.lineWidth(1),
        e.scissor(0, 0, e.canvas.width, e.canvas.height),
        e.viewport(0, 0, e.canvas.width, e.canvas.height),
        (o = {}),
        (L = null),
        (U = {}),
        (s = {}),
        (l = new WeakMap()),
        (c = []),
        (u = null),
        (d = !1),
        (h = null),
        (f = null),
        (p = null),
        (m = null),
        (g = null),
        (v = null),
        (_ = null),
        (x = new Ze(0, 0, 0)),
        (y = 0),
        (S = !1),
        (M = null),
        (E = null),
        (b = null),
        (T = null),
        (w = null),
        I.set(0, 0, e.canvas.width, e.canvas.height),
        F.set(0, 0, e.canvas.width, e.canvas.height),
        t.reset(),
        n.reset(),
        r.reset();
    },
  };
}
function Rp(e, t, n, r) {
  const i = $1(r);
  switch (n) {
    case $g:
    case Kg:
      return e * t;
    case Zg:
      return e * t * 2;
    case Qg:
    case ud:
      return ((e * t) / i.components) * i.byteLength;
    case Jg:
    case cd:
      return ((e * t * 2) / i.components) * i.byteLength;
    case jg:
      return ((e * t * 3) / i.components) * i.byteLength;
    case Pn:
    case fd:
      return ((e * t * 4) / i.components) * i.byteLength;
    case La:
    case ba:
      return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 8;
    case Da:
    case Ua:
      return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    case Oc:
    case kc:
      return (Math.max(e, 16) * Math.max(t, 8)) / 4;
    case Fc:
    case zc:
      return (Math.max(e, 8) * Math.max(t, 8)) / 2;
    case Bc:
    case Hc:
      return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 8;
    case Vc:
    case Gc:
      return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    case Wc:
      return Math.floor((e + 4) / 5) * Math.floor((t + 3) / 4) * 16;
    case Xc:
      return Math.floor((e + 4) / 5) * Math.floor((t + 4) / 5) * 16;
    case Yc:
      return Math.floor((e + 5) / 6) * Math.floor((t + 4) / 5) * 16;
    case qc:
      return Math.floor((e + 5) / 6) * Math.floor((t + 5) / 6) * 16;
    case $c:
      return Math.floor((e + 7) / 8) * Math.floor((t + 4) / 5) * 16;
    case jc:
      return Math.floor((e + 7) / 8) * Math.floor((t + 5) / 6) * 16;
    case Kc:
      return Math.floor((e + 7) / 8) * Math.floor((t + 7) / 8) * 16;
    case Zc:
      return Math.floor((e + 9) / 10) * Math.floor((t + 4) / 5) * 16;
    case Qc:
      return Math.floor((e + 9) / 10) * Math.floor((t + 5) / 6) * 16;
    case Jc:
      return Math.floor((e + 9) / 10) * Math.floor((t + 7) / 8) * 16;
    case ef:
      return Math.floor((e + 9) / 10) * Math.floor((t + 9) / 10) * 16;
    case tf:
      return Math.floor((e + 11) / 12) * Math.floor((t + 9) / 10) * 16;
    case nf:
      return Math.floor((e + 11) / 12) * Math.floor((t + 11) / 12) * 16;
    case Ia:
    case rf:
    case sf:
      return Math.ceil(e / 4) * Math.ceil(t / 4) * 16;
    case e_:
    case of:
      return Math.ceil(e / 4) * Math.ceil(t / 4) * 8;
    case af:
    case lf:
      return Math.ceil(e / 4) * Math.ceil(t / 4) * 16;
  }
  throw new Error(`Unable to determine texture byte length for ${n} format.`);
}
function $1(e) {
  switch (e) {
    case ci:
    case Xg:
      return { byteLength: 1, components: 1 };
    case xo:
    case Yg:
    case wo:
      return { byteLength: 2, components: 1 };
    case ad:
    case ld:
      return { byteLength: 2, components: 4 };
    case xr:
    case od:
    case ii:
      return { byteLength: 4, components: 1 };
    case qg:
      return { byteLength: 4, components: 3 };
  }
  throw new Error(`Unknown texture type ${e}.`);
}
function j1(e, t, n, r, i, a, o) {
  const s = t.has("WEBGL_multisampled_render_to_texture")
      ? t.get("WEBGL_multisampled_render_to_texture")
      : null,
    l = !(typeof navigator > "u") && /OculusBrowser/g.test(navigator.userAgent),
    c = new Ve(),
    u = new WeakMap();
  let d;
  const h = new WeakMap();
  let f = !1;
  try {
    f =
      typeof OffscreenCanvas < "u" &&
      null !== new OffscreenCanvas(1, 1).getContext("2d");
  } catch {}
  function p(e, t) {
    return f ? new OffscreenCanvas(e, t) : fl("canvas");
  }
  function m(e, t, n) {
    let r = 1;
    const i = B(e);
    if (
      ((i.width > n || i.height > n) && (r = n / Math.max(i.width, i.height)),
      r < 1)
    ) {
      if (
        (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement) ||
        (typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement) ||
        (typeof ImageBitmap < "u" && e instanceof ImageBitmap) ||
        (typeof VideoFrame < "u" && e instanceof VideoFrame)
      ) {
        const n = Math.floor(r * i.width),
          a = Math.floor(r * i.height);
        void 0 === d && (d = p(n, a));
        const o = t ? p(n, a) : d;
        return (
          (o.width = n),
          (o.height = a),
          o.getContext("2d").drawImage(e, 0, 0, n, a),
          console.warn(
            "THREE.WebGLRenderer: Texture has been resized from (" +
              i.width +
              "x" +
              i.height +
              ") to (" +
              n +
              "x" +
              a +
              ")."
          ),
          o
        );
      }
      return (
        "data" in e &&
          console.warn(
            "THREE.WebGLRenderer: Image in DataTexture is too big (" +
              i.width +
              "x" +
              i.height +
              ")."
          ),
        e
      );
    }
    return e;
  }
  function g(e) {
    return e.generateMipmaps && e.minFilter !== gn && e.minFilter !== Rn;
  }
  function v(t) {
    e.generateMipmap(t);
  }
  function _(n, r, i, a, o = !1) {
    if (null !== n) {
      if (void 0 !== e[n]) return e[n];
      console.warn(
        "THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" +
          n +
          "'"
      );
    }
    let s = r;
    if (
      (r === e.RED &&
        (i === e.FLOAT && (s = e.R32F),
        i === e.HALF_FLOAT && (s = e.R16F),
        i === e.UNSIGNED_BYTE && (s = e.R8)),
      r === e.RED_INTEGER &&
        (i === e.UNSIGNED_BYTE && (s = e.R8UI),
        i === e.UNSIGNED_SHORT && (s = e.R16UI),
        i === e.UNSIGNED_INT && (s = e.R32UI),
        i === e.BYTE && (s = e.R8I),
        i === e.SHORT && (s = e.R16I),
        i === e.INT && (s = e.R32I)),
      r === e.RG &&
        (i === e.FLOAT && (s = e.RG32F),
        i === e.HALF_FLOAT && (s = e.RG16F),
        i === e.UNSIGNED_BYTE && (s = e.RG8)),
      r === e.RG_INTEGER &&
        (i === e.UNSIGNED_BYTE && (s = e.RG8UI),
        i === e.UNSIGNED_SHORT && (s = e.RG16UI),
        i === e.UNSIGNED_INT && (s = e.RG32UI),
        i === e.BYTE && (s = e.RG8I),
        i === e.SHORT && (s = e.RG16I),
        i === e.INT && (s = e.RG32I)),
      r === e.RGB && i === e.UNSIGNED_INT_5_9_9_9_REV && (s = e.RGB9_E5),
      r === e.RGBA)
    ) {
      const t = o ? al : $e.getTransfer(a);
      i === e.FLOAT && (s = e.RGBA32F),
        i === e.HALF_FLOAT && (s = e.RGBA16F),
        i === e.UNSIGNED_BYTE && (s = t === et ? e.SRGB8_ALPHA8 : e.RGBA8),
        i === e.UNSIGNED_SHORT_4_4_4_4 && (s = e.RGBA4),
        i === e.UNSIGNED_SHORT_5_5_5_1 && (s = e.RGB5_A1);
    }
    return (
      (s === e.R16F ||
        s === e.R32F ||
        s === e.RG16F ||
        s === e.RG32F ||
        s === e.RGBA16F ||
        s === e.RGBA32F) &&
        t.get("EXT_color_buffer_float"),
      s
    );
  }
  function x(t, n) {
    let r;
    return (
      t
        ? null === n || n === xr || n === ys
          ? (r = e.DEPTH24_STENCIL8)
          : n === ii
          ? (r = e.DEPTH32F_STENCIL8)
          : n === xo &&
            ((r = e.DEPTH24_STENCIL8),
            console.warn(
              "DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment."
            ))
        : null === n || n === xr || n === ys
        ? (r = e.DEPTH_COMPONENT24)
        : n === ii
        ? (r = e.DEPTH_COMPONENT32F)
        : n === xo && (r = e.DEPTH_COMPONENT16),
      r
    );
  }
  function y(e, t) {
    return !0 === g(e) ||
      (e.isFramebufferTexture && e.minFilter !== gn && e.minFilter !== Rn)
      ? Math.log2(Math.max(t.width, t.height)) + 1
      : void 0 !== e.mipmaps && e.mipmaps.length > 0
      ? e.mipmaps.length
      : e.isCompressedTexture && Array.isArray(e.image)
      ? t.mipmaps.length
      : 1;
  }
  function S(e) {
    const t = e.target;
    t.removeEventListener("dispose", S),
      (function (e) {
        const t = r.get(e);
        if (void 0 === t.__webglInit) return;
        const n = e.source,
          i = h.get(n);
        if (i) {
          const r = i[t.__cacheKey];
          r.usedTimes--,
            0 === r.usedTimes && E(e),
            0 === Object.keys(i).length && h.delete(n);
        }
        r.remove(e);
      })(t),
      t.isVideoTexture && u.delete(t);
  }
  function M(t) {
    const n = t.target;
    n.removeEventListener("dispose", M),
      (function (t) {
        const n = r.get(t);
        if (
          (t.depthTexture && t.depthTexture.dispose(),
          t.isWebGLCubeRenderTarget)
        )
          for (let t = 0; t < 6; t++) {
            if (Array.isArray(n.__webglFramebuffer[t]))
              for (let r = 0; r < n.__webglFramebuffer[t].length; r++)
                e.deleteFramebuffer(n.__webglFramebuffer[t][r]);
            else e.deleteFramebuffer(n.__webglFramebuffer[t]);
            n.__webglDepthbuffer &&
              e.deleteRenderbuffer(n.__webglDepthbuffer[t]);
          }
        else {
          if (Array.isArray(n.__webglFramebuffer))
            for (let t = 0; t < n.__webglFramebuffer.length; t++)
              e.deleteFramebuffer(n.__webglFramebuffer[t]);
          else e.deleteFramebuffer(n.__webglFramebuffer);
          if (
            (n.__webglDepthbuffer && e.deleteRenderbuffer(n.__webglDepthbuffer),
            n.__webglMultisampledFramebuffer &&
              e.deleteFramebuffer(n.__webglMultisampledFramebuffer),
            n.__webglColorRenderbuffer)
          )
            for (let t = 0; t < n.__webglColorRenderbuffer.length; t++)
              n.__webglColorRenderbuffer[t] &&
                e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);
          n.__webglDepthRenderbuffer &&
            e.deleteRenderbuffer(n.__webglDepthRenderbuffer);
        }
        const i = t.textures;
        for (let t = 0, n = i.length; t < n; t++) {
          const n = r.get(i[t]);
          n.__webglTexture &&
            (e.deleteTexture(n.__webglTexture), o.memory.textures--),
            r.remove(i[t]);
        }
        r.remove(t);
      })(n);
  }
  function E(t) {
    const n = r.get(t);
    e.deleteTexture(n.__webglTexture);
    const i = t.source;
    delete h.get(i)[n.__cacheKey], o.memory.textures--;
  }
  let b = 0;
  function T(t, i) {
    const a = r.get(t);
    if (
      (t.isVideoTexture &&
        (function (e) {
          const t = o.render.frame;
          u.get(e) !== t && (u.set(e, t), e.update());
        })(t),
      !1 === t.isRenderTargetTexture &&
        t.version > 0 &&
        a.__version !== t.version)
    ) {
      const e = t.image;
      if (null === e)
        console.warn(
          "THREE.WebGLRenderer: Texture marked for update but no image data found."
        );
      else {
        if (!1 !== e.complete) return void L(a, t, i);
        console.warn(
          "THREE.WebGLRenderer: Texture marked for update but image is incomplete"
        );
      }
    }
    n.bindTexture(e.TEXTURE_2D, a.__webglTexture, e.TEXTURE0 + i);
  }
  const w = { [Ic]: e.REPEAT, [ur]: e.CLAMP_TO_EDGE, [Nc]: e.MIRRORED_REPEAT },
    A = {
      [gn]: e.NEAREST,
      [Fx]: e.NEAREST_MIPMAP_NEAREST,
      [jo]: e.NEAREST_MIPMAP_LINEAR,
      [Rn]: e.LINEAR,
      [uu]: e.LINEAR_MIPMAP_NEAREST,
      [cr]: e.LINEAR_MIPMAP_LINEAR,
    },
    R = {
      [Hx]: e.NEVER,
      [qx]: e.ALWAYS,
      [Vx]: e.LESS,
      [t_]: e.LEQUAL,
      [Gx]: e.EQUAL,
      [Yx]: e.GEQUAL,
      [Wx]: e.GREATER,
      [Xx]: e.NOTEQUAL,
    };
  function C(n, a) {
    if (
      (a.type === ii &&
        !1 === t.has("OES_texture_float_linear") &&
        (a.magFilter === Rn ||
          a.magFilter === uu ||
          a.magFilter === jo ||
          a.magFilter === cr ||
          a.minFilter === Rn ||
          a.minFilter === uu ||
          a.minFilter === jo ||
          a.minFilter === cr) &&
        console.warn(
          "THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."
        ),
      e.texParameteri(n, e.TEXTURE_WRAP_S, w[a.wrapS]),
      e.texParameteri(n, e.TEXTURE_WRAP_T, w[a.wrapT]),
      (n === e.TEXTURE_3D || n === e.TEXTURE_2D_ARRAY) &&
        e.texParameteri(n, e.TEXTURE_WRAP_R, w[a.wrapR]),
      e.texParameteri(n, e.TEXTURE_MAG_FILTER, A[a.magFilter]),
      e.texParameteri(n, e.TEXTURE_MIN_FILTER, A[a.minFilter]),
      a.compareFunction &&
        (e.texParameteri(n, e.TEXTURE_COMPARE_MODE, e.COMPARE_REF_TO_TEXTURE),
        e.texParameteri(n, e.TEXTURE_COMPARE_FUNC, R[a.compareFunction])),
      !0 === t.has("EXT_texture_filter_anisotropic"))
    ) {
      if (
        a.magFilter === gn ||
        (a.minFilter !== jo && a.minFilter !== cr) ||
        (a.type === ii && !1 === t.has("OES_texture_float_linear"))
      )
        return;
      if (a.anisotropy > 1 || r.get(a).__currentAnisotropy) {
        const o = t.get("EXT_texture_filter_anisotropic");
        e.texParameterf(
          n,
          o.TEXTURE_MAX_ANISOTROPY_EXT,
          Math.min(a.anisotropy, i.getMaxAnisotropy())
        ),
          (r.get(a).__currentAnisotropy = a.anisotropy);
      }
    }
  }
  function P(t, n) {
    let r = !1;
    void 0 === t.__webglInit &&
      ((t.__webglInit = !0), n.addEventListener("dispose", S));
    const i = n.source;
    let a = h.get(i);
    void 0 === a && ((a = {}), h.set(i, a));
    const s = (function (e) {
      const t = [];
      return (
        t.push(e.wrapS),
        t.push(e.wrapT),
        t.push(e.wrapR || 0),
        t.push(e.magFilter),
        t.push(e.minFilter),
        t.push(e.anisotropy),
        t.push(e.internalFormat),
        t.push(e.format),
        t.push(e.type),
        t.push(e.generateMipmaps),
        t.push(e.premultiplyAlpha),
        t.push(e.flipY),
        t.push(e.unpackAlignment),
        t.push(e.colorSpace),
        t.join()
      );
    })(n);
    if (s !== t.__cacheKey) {
      void 0 === a[s] &&
        ((a[s] = { texture: e.createTexture(), usedTimes: 0 }),
        o.memory.textures++,
        (r = !0)),
        a[s].usedTimes++;
      const i = a[t.__cacheKey];
      void 0 !== i && (a[t.__cacheKey].usedTimes--, 0 === i.usedTimes && E(n)),
        (t.__cacheKey = s),
        (t.__webglTexture = a[s].texture);
    }
    return r;
  }
  function L(t, o, s) {
    let l = e.TEXTURE_2D;
    (o.isDataArrayTexture || o.isCompressedArrayTexture) &&
      (l = e.TEXTURE_2D_ARRAY),
      o.isData3DTexture && (l = e.TEXTURE_3D);
    const c = P(t, o),
      u = o.source;
    n.bindTexture(l, t.__webglTexture, e.TEXTURE0 + s);
    const d = r.get(u);
    if (u.version !== d.__version || !0 === c) {
      n.activeTexture(e.TEXTURE0 + s);
      const t = $e.getPrimaries($e.workingColorSpace),
        r = "" === o.colorSpace ? null : $e.getPrimaries(o.colorSpace),
        h = "" === o.colorSpace || t === r ? e.NONE : e.BROWSER_DEFAULT_WEBGL;
      e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, o.flipY),
        e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, o.premultiplyAlpha),
        e.pixelStorei(e.UNPACK_ALIGNMENT, o.unpackAlignment),
        e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL, h);
      let f = m(o.image, !1, i.maxTextureSize);
      f = z(o, f);
      const p = a.convert(o.format, o.colorSpace),
        S = a.convert(o.type);
      let M,
        E = _(o.internalFormat, p, S, o.colorSpace, o.isVideoTexture);
      C(l, o);
      const b = o.mipmaps,
        T = !0 !== o.isVideoTexture,
        w = void 0 === d.__version || !0 === c,
        A = u.dataReady,
        R = y(o, f);
      if (o.isDepthTexture)
        (E = x(o.format === Ss, o.type)),
          w &&
            (T
              ? n.texStorage2D(e.TEXTURE_2D, 1, E, f.width, f.height)
              : n.texImage2D(
                  e.TEXTURE_2D,
                  0,
                  E,
                  f.width,
                  f.height,
                  0,
                  p,
                  S,
                  null
                ));
      else if (o.isDataTexture)
        if (b.length > 0) {
          T && w && n.texStorage2D(e.TEXTURE_2D, R, E, b[0].width, b[0].height);
          for (let t = 0, r = b.length; t < r; t++)
            (M = b[t]),
              T
                ? A &&
                  n.texSubImage2D(
                    e.TEXTURE_2D,
                    t,
                    0,
                    0,
                    M.width,
                    M.height,
                    p,
                    S,
                    M.data
                  )
                : n.texImage2D(
                    e.TEXTURE_2D,
                    t,
                    E,
                    M.width,
                    M.height,
                    0,
                    p,
                    S,
                    M.data
                  );
          o.generateMipmaps = !1;
        } else
          T
            ? (w && n.texStorage2D(e.TEXTURE_2D, R, E, f.width, f.height),
              A &&
                n.texSubImage2D(
                  e.TEXTURE_2D,
                  0,
                  0,
                  0,
                  f.width,
                  f.height,
                  p,
                  S,
                  f.data
                ))
            : n.texImage2D(
                e.TEXTURE_2D,
                0,
                E,
                f.width,
                f.height,
                0,
                p,
                S,
                f.data
              );
      else if (o.isCompressedTexture)
        if (o.isCompressedArrayTexture) {
          T &&
            w &&
            n.texStorage3D(
              e.TEXTURE_2D_ARRAY,
              R,
              E,
              b[0].width,
              b[0].height,
              f.depth
            );
          for (let t = 0, r = b.length; t < r; t++)
            if (((M = b[t]), o.format !== Pn))
              if (null !== p)
                if (T) {
                  if (A)
                    if (o.layerUpdates.size > 0) {
                      const r = Rp(M.width, M.height, o.format, o.type);
                      for (const i of o.layerUpdates) {
                        const a = M.data.subarray(
                          (i * r) / M.data.BYTES_PER_ELEMENT,
                          ((i + 1) * r) / M.data.BYTES_PER_ELEMENT
                        );
                        n.compressedTexSubImage3D(
                          e.TEXTURE_2D_ARRAY,
                          t,
                          0,
                          0,
                          i,
                          M.width,
                          M.height,
                          1,
                          p,
                          a,
                          0,
                          0
                        );
                      }
                      o.clearLayerUpdates();
                    } else
                      n.compressedTexSubImage3D(
                        e.TEXTURE_2D_ARRAY,
                        t,
                        0,
                        0,
                        0,
                        M.width,
                        M.height,
                        f.depth,
                        p,
                        M.data,
                        0,
                        0
                      );
                } else
                  n.compressedTexImage3D(
                    e.TEXTURE_2D_ARRAY,
                    t,
                    E,
                    M.width,
                    M.height,
                    f.depth,
                    0,
                    M.data,
                    0,
                    0
                  );
              else
                console.warn(
                  "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"
                );
            else
              T
                ? A &&
                  n.texSubImage3D(
                    e.TEXTURE_2D_ARRAY,
                    t,
                    0,
                    0,
                    0,
                    M.width,
                    M.height,
                    f.depth,
                    p,
                    S,
                    M.data
                  )
                : n.texImage3D(
                    e.TEXTURE_2D_ARRAY,
                    t,
                    E,
                    M.width,
                    M.height,
                    f.depth,
                    0,
                    p,
                    S,
                    M.data
                  );
        } else {
          T && w && n.texStorage2D(e.TEXTURE_2D, R, E, b[0].width, b[0].height);
          for (let t = 0, r = b.length; t < r; t++)
            (M = b[t]),
              o.format !== Pn
                ? null !== p
                  ? T
                    ? A &&
                      n.compressedTexSubImage2D(
                        e.TEXTURE_2D,
                        t,
                        0,
                        0,
                        M.width,
                        M.height,
                        p,
                        M.data
                      )
                    : n.compressedTexImage2D(
                        e.TEXTURE_2D,
                        t,
                        E,
                        M.width,
                        M.height,
                        0,
                        M.data
                      )
                  : console.warn(
                      "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"
                    )
                : T
                ? A &&
                  n.texSubImage2D(
                    e.TEXTURE_2D,
                    t,
                    0,
                    0,
                    M.width,
                    M.height,
                    p,
                    S,
                    M.data
                  )
                : n.texImage2D(
                    e.TEXTURE_2D,
                    t,
                    E,
                    M.width,
                    M.height,
                    0,
                    p,
                    S,
                    M.data
                  );
        }
      else if (o.isDataArrayTexture)
        if (T) {
          if (
            (w &&
              n.texStorage3D(
                e.TEXTURE_2D_ARRAY,
                R,
                E,
                f.width,
                f.height,
                f.depth
              ),
            A)
          )
            if (o.layerUpdates.size > 0) {
              const t = Rp(f.width, f.height, o.format, o.type);
              for (const r of o.layerUpdates) {
                const i = f.data.subarray(
                  (r * t) / f.data.BYTES_PER_ELEMENT,
                  ((r + 1) * t) / f.data.BYTES_PER_ELEMENT
                );
                n.texSubImage3D(
                  e.TEXTURE_2D_ARRAY,
                  0,
                  0,
                  0,
                  r,
                  f.width,
                  f.height,
                  1,
                  p,
                  S,
                  i
                );
              }
              o.clearLayerUpdates();
            } else
              n.texSubImage3D(
                e.TEXTURE_2D_ARRAY,
                0,
                0,
                0,
                0,
                f.width,
                f.height,
                f.depth,
                p,
                S,
                f.data
              );
        } else
          n.texImage3D(
            e.TEXTURE_2D_ARRAY,
            0,
            E,
            f.width,
            f.height,
            f.depth,
            0,
            p,
            S,
            f.data
          );
      else if (o.isData3DTexture)
        T
          ? (w &&
              n.texStorage3D(e.TEXTURE_3D, R, E, f.width, f.height, f.depth),
            A &&
              n.texSubImage3D(
                e.TEXTURE_3D,
                0,
                0,
                0,
                0,
                f.width,
                f.height,
                f.depth,
                p,
                S,
                f.data
              ))
          : n.texImage3D(
              e.TEXTURE_3D,
              0,
              E,
              f.width,
              f.height,
              f.depth,
              0,
              p,
              S,
              f.data
            );
      else if (o.isFramebufferTexture) {
        if (w)
          if (T) n.texStorage2D(e.TEXTURE_2D, R, E, f.width, f.height);
          else {
            let t = f.width,
              r = f.height;
            for (let i = 0; i < R; i++)
              n.texImage2D(e.TEXTURE_2D, i, E, t, r, 0, p, S, null),
                (t >>= 1),
                (r >>= 1);
          }
      } else if (b.length > 0) {
        if (T && w) {
          const t = B(b[0]);
          n.texStorage2D(e.TEXTURE_2D, R, E, t.width, t.height);
        }
        for (let t = 0, r = b.length; t < r; t++)
          (M = b[t]),
            T
              ? A && n.texSubImage2D(e.TEXTURE_2D, t, 0, 0, p, S, M)
              : n.texImage2D(e.TEXTURE_2D, t, E, p, S, M);
        o.generateMipmaps = !1;
      } else if (T) {
        if (w) {
          const t = B(f);
          n.texStorage2D(e.TEXTURE_2D, R, E, t.width, t.height);
        }
        A && n.texSubImage2D(e.TEXTURE_2D, 0, 0, 0, p, S, f);
      } else n.texImage2D(e.TEXTURE_2D, 0, E, p, S, f);
      g(o) && v(l), (d.__version = u.version), o.onUpdate && o.onUpdate(o);
    }
    t.__version = o.version;
  }
  function U(t, i, o, l, c, u) {
    const d = a.convert(o.format, o.colorSpace),
      h = a.convert(o.type),
      f = _(o.internalFormat, d, h, o.colorSpace);
    if (!r.get(i).__hasExternalTextures) {
      const t = Math.max(1, i.width >> u),
        r = Math.max(1, i.height >> u);
      c === e.TEXTURE_3D || c === e.TEXTURE_2D_ARRAY
        ? n.texImage3D(c, u, f, t, r, i.depth, 0, d, h, null)
        : n.texImage2D(c, u, f, t, r, 0, d, h, null);
    }
    n.bindFramebuffer(e.FRAMEBUFFER, t),
      k(i)
        ? s.framebufferTexture2DMultisampleEXT(
            e.FRAMEBUFFER,
            l,
            c,
            r.get(o).__webglTexture,
            0,
            O(i)
          )
        : (c === e.TEXTURE_2D ||
            (c >= e.TEXTURE_CUBE_MAP_POSITIVE_X &&
              c <= e.TEXTURE_CUBE_MAP_NEGATIVE_Z)) &&
          e.framebufferTexture2D(
            e.FRAMEBUFFER,
            l,
            c,
            r.get(o).__webglTexture,
            u
          ),
      n.bindFramebuffer(e.FRAMEBUFFER, null);
  }
  function D(t, n, r) {
    if ((e.bindRenderbuffer(e.RENDERBUFFER, t), n.depthBuffer)) {
      const i = n.depthTexture,
        a = i && i.isDepthTexture ? i.type : null,
        o = x(n.stencilBuffer, a),
        l = n.stencilBuffer ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT,
        c = O(n);
      k(n)
        ? s.renderbufferStorageMultisampleEXT(
            e.RENDERBUFFER,
            c,
            o,
            n.width,
            n.height
          )
        : r
        ? e.renderbufferStorageMultisample(
            e.RENDERBUFFER,
            c,
            o,
            n.width,
            n.height
          )
        : e.renderbufferStorage(e.RENDERBUFFER, o, n.width, n.height),
        e.framebufferRenderbuffer(e.FRAMEBUFFER, l, e.RENDERBUFFER, t);
    } else {
      const t = n.textures;
      for (let i = 0; i < t.length; i++) {
        const o = t[i],
          l = a.convert(o.format, o.colorSpace),
          c = a.convert(o.type),
          u = _(o.internalFormat, l, c, o.colorSpace),
          d = O(n);
        r && !1 === k(n)
          ? e.renderbufferStorageMultisample(
              e.RENDERBUFFER,
              d,
              u,
              n.width,
              n.height
            )
          : k(n)
          ? s.renderbufferStorageMultisampleEXT(
              e.RENDERBUFFER,
              d,
              u,
              n.width,
              n.height
            )
          : e.renderbufferStorage(e.RENDERBUFFER, u, n.width, n.height);
      }
    }
    e.bindRenderbuffer(e.RENDERBUFFER, null);
  }
  function N(t) {
    const i = r.get(t),
      a = !0 === t.isWebGLCubeRenderTarget;
    if (t.depthTexture && !i.__autoAllocateDepthBuffer) {
      if (a)
        throw new Error(
          "target.depthTexture not supported in Cube render targets"
        );
      !(function (t, i) {
        if (i && i.isWebGLCubeRenderTarget)
          throw new Error(
            "Depth Texture with cube render targets is not supported"
          );
        if (
          (n.bindFramebuffer(e.FRAMEBUFFER, t),
          !i.depthTexture || !i.depthTexture.isDepthTexture)
        )
          throw new Error(
            "renderTarget.depthTexture must be an instance of THREE.DepthTexture"
          );
        (!r.get(i.depthTexture).__webglTexture ||
          i.depthTexture.image.width !== i.width ||
          i.depthTexture.image.height !== i.height) &&
          ((i.depthTexture.image.width = i.width),
          (i.depthTexture.image.height = i.height),
          (i.depthTexture.needsUpdate = !0)),
          T(i.depthTexture, 0);
        const a = r.get(i.depthTexture).__webglTexture,
          o = O(i);
        if (i.depthTexture.format === us)
          k(i)
            ? s.framebufferTexture2DMultisampleEXT(
                e.FRAMEBUFFER,
                e.DEPTH_ATTACHMENT,
                e.TEXTURE_2D,
                a,
                0,
                o
              )
            : e.framebufferTexture2D(
                e.FRAMEBUFFER,
                e.DEPTH_ATTACHMENT,
                e.TEXTURE_2D,
                a,
                0
              );
        else {
          if (i.depthTexture.format !== Ss)
            throw new Error("Unknown depthTexture format");
          k(i)
            ? s.framebufferTexture2DMultisampleEXT(
                e.FRAMEBUFFER,
                e.DEPTH_STENCIL_ATTACHMENT,
                e.TEXTURE_2D,
                a,
                0,
                o
              )
            : e.framebufferTexture2D(
                e.FRAMEBUFFER,
                e.DEPTH_STENCIL_ATTACHMENT,
                e.TEXTURE_2D,
                a,
                0
              );
        }
      })(i.__webglFramebuffer, t);
    } else if (a) {
      i.__webglDepthbuffer = [];
      for (let r = 0; r < 6; r++)
        n.bindFramebuffer(e.FRAMEBUFFER, i.__webglFramebuffer[r]),
          (i.__webglDepthbuffer[r] = e.createRenderbuffer()),
          D(i.__webglDepthbuffer[r], t, !1);
    } else
      n.bindFramebuffer(e.FRAMEBUFFER, i.__webglFramebuffer),
        (i.__webglDepthbuffer = e.createRenderbuffer()),
        D(i.__webglDepthbuffer, t, !1);
    n.bindFramebuffer(e.FRAMEBUFFER, null);
  }
  const I = [],
    F = [];
  function O(e) {
    return Math.min(i.maxSamples, e.samples);
  }
  function k(e) {
    const n = r.get(e);
    return (
      e.samples > 0 &&
      !0 === t.has("WEBGL_multisampled_render_to_texture") &&
      !1 !== n.__useRenderToTexture
    );
  }
  function z(e, t) {
    const n = e.colorSpace,
      r = e.format,
      i = e.type;
    return (
      !0 === e.isCompressedTexture ||
        !0 === e.isVideoTexture ||
        (n !== Xi &&
          "" !== n &&
          ($e.getTransfer(n) === et
            ? (r !== Pn || i !== ci) &&
              console.warn(
                "THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."
              )
            : console.error(
                "THREE.WebGLTextures: Unsupported texture color space:",
                n
              ))),
      t
    );
  }
  function B(e) {
    return (
      typeof HTMLImageElement < "u" && e instanceof HTMLImageElement
        ? ((c.width = e.naturalWidth || e.width),
          (c.height = e.naturalHeight || e.height))
        : typeof VideoFrame < "u" && e instanceof VideoFrame
        ? ((c.width = e.displayWidth), (c.height = e.displayHeight))
        : ((c.width = e.width), (c.height = e.height)),
      c
    );
  }
  (this.allocateTextureUnit = function () {
    const e = b;
    return (
      e >= i.maxTextures &&
        console.warn(
          "THREE.WebGLTextures: Trying to use " +
            e +
            " texture units while this GPU supports only " +
            i.maxTextures
        ),
      (b += 1),
      e
    );
  }),
    (this.resetTextureUnits = function () {
      b = 0;
    }),
    (this.setTexture2D = T),
    (this.setTexture2DArray = function (t, i) {
      const a = r.get(t);
      t.version > 0 && a.__version !== t.version
        ? L(a, t, i)
        : n.bindTexture(e.TEXTURE_2D_ARRAY, a.__webglTexture, e.TEXTURE0 + i);
    }),
    (this.setTexture3D = function (t, i) {
      const a = r.get(t);
      t.version > 0 && a.__version !== t.version
        ? L(a, t, i)
        : n.bindTexture(e.TEXTURE_3D, a.__webglTexture, e.TEXTURE0 + i);
    }),
    (this.setTextureCube = function (t, o) {
      const s = r.get(t);
      t.version > 0 && s.__version !== t.version
        ? (function (t, o, s) {
            if (6 !== o.image.length) return;
            const l = P(t, o),
              c = o.source;
            n.bindTexture(e.TEXTURE_CUBE_MAP, t.__webglTexture, e.TEXTURE0 + s);
            const u = r.get(c);
            if (c.version !== u.__version || !0 === l) {
              n.activeTexture(e.TEXTURE0 + s);
              const t = $e.getPrimaries($e.workingColorSpace),
                r = "" === o.colorSpace ? null : $e.getPrimaries(o.colorSpace),
                d =
                  "" === o.colorSpace || t === r
                    ? e.NONE
                    : e.BROWSER_DEFAULT_WEBGL;
              e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, o.flipY),
                e.pixelStorei(
                  e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,
                  o.premultiplyAlpha
                ),
                e.pixelStorei(e.UNPACK_ALIGNMENT, o.unpackAlignment),
                e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL, d);
              const h = o.isCompressedTexture || o.image[0].isCompressedTexture,
                f = o.image[0] && o.image[0].isDataTexture,
                p = [];
              for (let e = 0; e < 6; e++)
                (p[e] =
                  h || f
                    ? f
                      ? o.image[e].image
                      : o.image[e]
                    : m(o.image[e], !0, i.maxCubemapSize)),
                  (p[e] = z(o, p[e]));
              const x = p[0],
                S = a.convert(o.format, o.colorSpace),
                M = a.convert(o.type),
                E = _(o.internalFormat, S, M, o.colorSpace),
                b = !0 !== o.isVideoTexture,
                T = void 0 === u.__version || !0 === l,
                w = c.dataReady;
              let A,
                R = y(o, x);
              if ((C(e.TEXTURE_CUBE_MAP, o), h)) {
                b &&
                  T &&
                  n.texStorage2D(e.TEXTURE_CUBE_MAP, R, E, x.width, x.height);
                for (let t = 0; t < 6; t++) {
                  A = p[t].mipmaps;
                  for (let r = 0; r < A.length; r++) {
                    const i = A[r];
                    o.format !== Pn
                      ? null !== S
                        ? b
                          ? w &&
                            n.compressedTexSubImage2D(
                              e.TEXTURE_CUBE_MAP_POSITIVE_X + t,
                              r,
                              0,
                              0,
                              i.width,
                              i.height,
                              S,
                              i.data
                            )
                          : n.compressedTexImage2D(
                              e.TEXTURE_CUBE_MAP_POSITIVE_X + t,
                              r,
                              E,
                              i.width,
                              i.height,
                              0,
                              i.data
                            )
                        : console.warn(
                            "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"
                          )
                      : b
                      ? w &&
                        n.texSubImage2D(
                          e.TEXTURE_CUBE_MAP_POSITIVE_X + t,
                          r,
                          0,
                          0,
                          i.width,
                          i.height,
                          S,
                          M,
                          i.data
                        )
                      : n.texImage2D(
                          e.TEXTURE_CUBE_MAP_POSITIVE_X + t,
                          r,
                          E,
                          i.width,
                          i.height,
                          0,
                          S,
                          M,
                          i.data
                        );
                  }
                }
              } else {
                if (((A = o.mipmaps), b && T)) {
                  A.length > 0 && R++;
                  const t = B(p[0]);
                  n.texStorage2D(e.TEXTURE_CUBE_MAP, R, E, t.width, t.height);
                }
                for (let t = 0; t < 6; t++)
                  if (f) {
                    b
                      ? w &&
                        n.texSubImage2D(
                          e.TEXTURE_CUBE_MAP_POSITIVE_X + t,
                          0,
                          0,
                          0,
                          p[t].width,
                          p[t].height,
                          S,
                          M,
                          p[t].data
                        )
                      : n.texImage2D(
                          e.TEXTURE_CUBE_MAP_POSITIVE_X + t,
                          0,
                          E,
                          p[t].width,
                          p[t].height,
                          0,
                          S,
                          M,
                          p[t].data
                        );
                    for (let r = 0; r < A.length; r++) {
                      const i = A[r].image[t].image;
                      b
                        ? w &&
                          n.texSubImage2D(
                            e.TEXTURE_CUBE_MAP_POSITIVE_X + t,
                            r + 1,
                            0,
                            0,
                            i.width,
                            i.height,
                            S,
                            M,
                            i.data
                          )
                        : n.texImage2D(
                            e.TEXTURE_CUBE_MAP_POSITIVE_X + t,
                            r + 1,
                            E,
                            i.width,
                            i.height,
                            0,
                            S,
                            M,
                            i.data
                          );
                    }
                  } else {
                    b
                      ? w &&
                        n.texSubImage2D(
                          e.TEXTURE_CUBE_MAP_POSITIVE_X + t,
                          0,
                          0,
                          0,
                          S,
                          M,
                          p[t]
                        )
                      : n.texImage2D(
                          e.TEXTURE_CUBE_MAP_POSITIVE_X + t,
                          0,
                          E,
                          S,
                          M,
                          p[t]
                        );
                    for (let r = 0; r < A.length; r++) {
                      const i = A[r];
                      b
                        ? w &&
                          n.texSubImage2D(
                            e.TEXTURE_CUBE_MAP_POSITIVE_X + t,
                            r + 1,
                            0,
                            0,
                            S,
                            M,
                            i.image[t]
                          )
                        : n.texImage2D(
                            e.TEXTURE_CUBE_MAP_POSITIVE_X + t,
                            r + 1,
                            E,
                            S,
                            M,
                            i.image[t]
                          );
                    }
                  }
              }
              g(o) && v(e.TEXTURE_CUBE_MAP),
                (u.__version = c.version),
                o.onUpdate && o.onUpdate(o);
            }
            t.__version = o.version;
          })(s, t, o)
        : n.bindTexture(e.TEXTURE_CUBE_MAP, s.__webglTexture, e.TEXTURE0 + o);
    }),
    (this.rebindTextures = function (t, n, i) {
      const a = r.get(t);
      void 0 !== n &&
        U(
          a.__webglFramebuffer,
          t,
          t.texture,
          e.COLOR_ATTACHMENT0,
          e.TEXTURE_2D,
          0
        ),
        void 0 !== i && N(t);
    }),
    (this.setupRenderTarget = function (t) {
      const i = t.texture,
        s = r.get(t),
        l = r.get(i);
      t.addEventListener("dispose", M);
      const c = t.textures,
        u = !0 === t.isWebGLCubeRenderTarget,
        d = c.length > 1;
      if (
        (d ||
          (void 0 === l.__webglTexture &&
            (l.__webglTexture = e.createTexture()),
          (l.__version = i.version),
          o.memory.textures++),
        u)
      ) {
        s.__webglFramebuffer = [];
        for (let t = 0; t < 6; t++)
          if (i.mipmaps && i.mipmaps.length > 0) {
            s.__webglFramebuffer[t] = [];
            for (let n = 0; n < i.mipmaps.length; n++)
              s.__webglFramebuffer[t][n] = e.createFramebuffer();
          } else s.__webglFramebuffer[t] = e.createFramebuffer();
      } else {
        if (i.mipmaps && i.mipmaps.length > 0) {
          s.__webglFramebuffer = [];
          for (let t = 0; t < i.mipmaps.length; t++)
            s.__webglFramebuffer[t] = e.createFramebuffer();
        } else s.__webglFramebuffer = e.createFramebuffer();
        if (d)
          for (let t = 0, n = c.length; t < n; t++) {
            const n = r.get(c[t]);
            void 0 === n.__webglTexture &&
              ((n.__webglTexture = e.createTexture()), o.memory.textures++);
          }
        if (t.samples > 0 && !1 === k(t)) {
          (s.__webglMultisampledFramebuffer = e.createFramebuffer()),
            (s.__webglColorRenderbuffer = []),
            n.bindFramebuffer(e.FRAMEBUFFER, s.__webglMultisampledFramebuffer);
          for (let n = 0; n < c.length; n++) {
            const r = c[n];
            (s.__webglColorRenderbuffer[n] = e.createRenderbuffer()),
              e.bindRenderbuffer(e.RENDERBUFFER, s.__webglColorRenderbuffer[n]);
            const i = a.convert(r.format, r.colorSpace),
              o = a.convert(r.type),
              l = _(
                r.internalFormat,
                i,
                o,
                r.colorSpace,
                !0 === t.isXRRenderTarget
              ),
              u = O(t);
            e.renderbufferStorageMultisample(
              e.RENDERBUFFER,
              u,
              l,
              t.width,
              t.height
            ),
              e.framebufferRenderbuffer(
                e.FRAMEBUFFER,
                e.COLOR_ATTACHMENT0 + n,
                e.RENDERBUFFER,
                s.__webglColorRenderbuffer[n]
              );
          }
          e.bindRenderbuffer(e.RENDERBUFFER, null),
            t.depthBuffer &&
              ((s.__webglDepthRenderbuffer = e.createRenderbuffer()),
              D(s.__webglDepthRenderbuffer, t, !0)),
            n.bindFramebuffer(e.FRAMEBUFFER, null);
        }
      }
      if (u) {
        n.bindTexture(e.TEXTURE_CUBE_MAP, l.__webglTexture),
          C(e.TEXTURE_CUBE_MAP, i);
        for (let n = 0; n < 6; n++)
          if (i.mipmaps && i.mipmaps.length > 0)
            for (let r = 0; r < i.mipmaps.length; r++)
              U(
                s.__webglFramebuffer[n][r],
                t,
                i,
                e.COLOR_ATTACHMENT0,
                e.TEXTURE_CUBE_MAP_POSITIVE_X + n,
                r
              );
          else
            U(
              s.__webglFramebuffer[n],
              t,
              i,
              e.COLOR_ATTACHMENT0,
              e.TEXTURE_CUBE_MAP_POSITIVE_X + n,
              0
            );
        g(i) && v(e.TEXTURE_CUBE_MAP), n.unbindTexture();
      } else if (d) {
        for (let i = 0, a = c.length; i < a; i++) {
          const a = c[i],
            o = r.get(a);
          n.bindTexture(e.TEXTURE_2D, o.__webglTexture),
            C(e.TEXTURE_2D, a),
            U(
              s.__webglFramebuffer,
              t,
              a,
              e.COLOR_ATTACHMENT0 + i,
              e.TEXTURE_2D,
              0
            ),
            g(a) && v(e.TEXTURE_2D);
        }
        n.unbindTexture();
      } else {
        let r = e.TEXTURE_2D;
        if (
          ((t.isWebGL3DRenderTarget || t.isWebGLArrayRenderTarget) &&
            (r = t.isWebGL3DRenderTarget ? e.TEXTURE_3D : e.TEXTURE_2D_ARRAY),
          n.bindTexture(r, l.__webglTexture),
          C(r, i),
          i.mipmaps && i.mipmaps.length > 0)
        )
          for (let n = 0; n < i.mipmaps.length; n++)
            U(s.__webglFramebuffer[n], t, i, e.COLOR_ATTACHMENT0, r, n);
        else U(s.__webglFramebuffer, t, i, e.COLOR_ATTACHMENT0, r, 0);
        g(i) && v(r), n.unbindTexture();
      }
      t.depthBuffer && N(t);
    }),
    (this.updateRenderTargetMipmap = function (t) {
      const i = t.textures;
      for (let a = 0, o = i.length; a < o; a++) {
        const o = i[a];
        if (g(o)) {
          const i = t.isWebGLCubeRenderTarget
              ? e.TEXTURE_CUBE_MAP
              : e.TEXTURE_2D,
            a = r.get(o).__webglTexture;
          n.bindTexture(i, a), v(i), n.unbindTexture();
        }
      }
    }),
    (this.updateMultisampleRenderTarget = function (t) {
      if (t.samples > 0)
        if (!1 === k(t)) {
          const i = t.textures,
            a = t.width,
            o = t.height;
          let s = e.COLOR_BUFFER_BIT;
          const c = t.stencilBuffer
              ? e.DEPTH_STENCIL_ATTACHMENT
              : e.DEPTH_ATTACHMENT,
            u = r.get(t),
            d = i.length > 1;
          if (d)
            for (let t = 0; t < i.length; t++)
              n.bindFramebuffer(
                e.FRAMEBUFFER,
                u.__webglMultisampledFramebuffer
              ),
                e.framebufferRenderbuffer(
                  e.FRAMEBUFFER,
                  e.COLOR_ATTACHMENT0 + t,
                  e.RENDERBUFFER,
                  null
                ),
                n.bindFramebuffer(e.FRAMEBUFFER, u.__webglFramebuffer),
                e.framebufferTexture2D(
                  e.DRAW_FRAMEBUFFER,
                  e.COLOR_ATTACHMENT0 + t,
                  e.TEXTURE_2D,
                  null,
                  0
                );
          n.bindFramebuffer(
            e.READ_FRAMEBUFFER,
            u.__webglMultisampledFramebuffer
          ),
            n.bindFramebuffer(e.DRAW_FRAMEBUFFER, u.__webglFramebuffer);
          for (let n = 0; n < i.length; n++) {
            if (
              (t.resolveDepthBuffer &&
                (t.depthBuffer && (s |= e.DEPTH_BUFFER_BIT),
                t.stencilBuffer &&
                  t.resolveStencilBuffer &&
                  (s |= e.STENCIL_BUFFER_BIT)),
              d)
            ) {
              e.framebufferRenderbuffer(
                e.READ_FRAMEBUFFER,
                e.COLOR_ATTACHMENT0,
                e.RENDERBUFFER,
                u.__webglColorRenderbuffer[n]
              );
              const t = r.get(i[n]).__webglTexture;
              e.framebufferTexture2D(
                e.DRAW_FRAMEBUFFER,
                e.COLOR_ATTACHMENT0,
                e.TEXTURE_2D,
                t,
                0
              );
            }
            e.blitFramebuffer(0, 0, a, o, 0, 0, a, o, s, e.NEAREST),
              !0 === l &&
                ((I.length = 0),
                (F.length = 0),
                I.push(e.COLOR_ATTACHMENT0 + n),
                t.depthBuffer &&
                  !1 === t.resolveDepthBuffer &&
                  (I.push(c),
                  F.push(c),
                  e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER, F)),
                e.invalidateFramebuffer(e.READ_FRAMEBUFFER, I));
          }
          if (
            (n.bindFramebuffer(e.READ_FRAMEBUFFER, null),
            n.bindFramebuffer(e.DRAW_FRAMEBUFFER, null),
            d)
          )
            for (let t = 0; t < i.length; t++) {
              n.bindFramebuffer(
                e.FRAMEBUFFER,
                u.__webglMultisampledFramebuffer
              ),
                e.framebufferRenderbuffer(
                  e.FRAMEBUFFER,
                  e.COLOR_ATTACHMENT0 + t,
                  e.RENDERBUFFER,
                  u.__webglColorRenderbuffer[t]
                );
              const a = r.get(i[t]).__webglTexture;
              n.bindFramebuffer(e.FRAMEBUFFER, u.__webglFramebuffer),
                e.framebufferTexture2D(
                  e.DRAW_FRAMEBUFFER,
                  e.COLOR_ATTACHMENT0 + t,
                  e.TEXTURE_2D,
                  a,
                  0
                );
            }
          n.bindFramebuffer(
            e.DRAW_FRAMEBUFFER,
            u.__webglMultisampledFramebuffer
          );
        } else if (t.depthBuffer && !1 === t.resolveDepthBuffer && l) {
          const n = t.stencilBuffer
            ? e.DEPTH_STENCIL_ATTACHMENT
            : e.DEPTH_ATTACHMENT;
          e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER, [n]);
        }
    }),
    (this.setupDepthRenderbuffer = N),
    (this.setupFrameBufferTexture = U),
    (this.useMultisampledRTT = k);
}
function K1(e, t) {
  return {
    convert: function (n, r = "") {
      let i;
      const a = $e.getTransfer(r);
      if (n === ci) return e.UNSIGNED_BYTE;
      if (n === ad) return e.UNSIGNED_SHORT_4_4_4_4;
      if (n === ld) return e.UNSIGNED_SHORT_5_5_5_1;
      if (n === qg) return e.UNSIGNED_INT_5_9_9_9_REV;
      if (n === Xg) return e.BYTE;
      if (n === Yg) return e.SHORT;
      if (n === xo) return e.UNSIGNED_SHORT;
      if (n === od) return e.INT;
      if (n === xr) return e.UNSIGNED_INT;
      if (n === ii) return e.FLOAT;
      if (n === wo) return e.HALF_FLOAT;
      if (n === $g) return e.ALPHA;
      if (n === jg) return e.RGB;
      if (n === Pn) return e.RGBA;
      if (n === Kg) return e.LUMINANCE;
      if (n === Zg) return e.LUMINANCE_ALPHA;
      if (n === us) return e.DEPTH_COMPONENT;
      if (n === Ss) return e.DEPTH_STENCIL;
      if (n === Qg) return e.RED;
      if (n === ud) return e.RED_INTEGER;
      if (n === Jg) return e.RG;
      if (n === cd) return e.RG_INTEGER;
      if (n === fd) return e.RGBA_INTEGER;
      if (n === La || n === ba || n === Da || n === Ua)
        if (a === et) {
          if (((i = t.get("WEBGL_compressed_texture_s3tc_srgb")), null === i))
            return null;
          if (n === La) return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (n === ba) return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (n === Da) return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (n === Ua) return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else {
          if (((i = t.get("WEBGL_compressed_texture_s3tc")), null === i))
            return null;
          if (n === La) return i.COMPRESSED_RGB_S3TC_DXT1_EXT;
          if (n === ba) return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;
          if (n === Da) return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;
          if (n === Ua) return i.COMPRESSED_RGBA_S3TC_DXT5_EXT;
        }
      if (n === Fc || n === Oc || n === zc || n === kc) {
        if (((i = t.get("WEBGL_compressed_texture_pvrtc")), null === i))
          return null;
        if (n === Fc) return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (n === Oc) return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (n === zc) return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (n === kc) return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      }
      if (n === Bc || n === Hc || n === Vc) {
        if (((i = t.get("WEBGL_compressed_texture_etc")), null === i))
          return null;
        if (n === Bc || n === Hc)
          return a === et ? i.COMPRESSED_SRGB8_ETC2 : i.COMPRESSED_RGB8_ETC2;
        if (n === Vc)
          return a === et
            ? i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC
            : i.COMPRESSED_RGBA8_ETC2_EAC;
      }
      if (
        n === Gc ||
        n === Wc ||
        n === Xc ||
        n === Yc ||
        n === qc ||
        n === $c ||
        n === jc ||
        n === Kc ||
        n === Zc ||
        n === Qc ||
        n === Jc ||
        n === ef ||
        n === tf ||
        n === nf
      ) {
        if (((i = t.get("WEBGL_compressed_texture_astc")), null === i))
          return null;
        if (n === Gc)
          return a === et
            ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR
            : i.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (n === Wc)
          return a === et
            ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR
            : i.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (n === Xc)
          return a === et
            ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR
            : i.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (n === Yc)
          return a === et
            ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR
            : i.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (n === qc)
          return a === et
            ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR
            : i.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (n === $c)
          return a === et
            ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR
            : i.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (n === jc)
          return a === et
            ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR
            : i.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (n === Kc)
          return a === et
            ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR
            : i.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (n === Zc)
          return a === et
            ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR
            : i.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (n === Qc)
          return a === et
            ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR
            : i.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (n === Jc)
          return a === et
            ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR
            : i.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (n === ef)
          return a === et
            ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR
            : i.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (n === tf)
          return a === et
            ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR
            : i.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (n === nf)
          return a === et
            ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR
            : i.COMPRESSED_RGBA_ASTC_12x12_KHR;
      }
      if (n === Ia || n === rf || n === sf) {
        if (((i = t.get("EXT_texture_compression_bptc")), null === i))
          return null;
        if (n === Ia)
          return a === et
            ? i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT
            : i.COMPRESSED_RGBA_BPTC_UNORM_EXT;
        if (n === rf) return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
        if (n === sf) return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
      }
      if (n === e_ || n === of || n === af || n === lf) {
        if (((i = t.get("EXT_texture_compression_rgtc")), null === i))
          return null;
        if (n === Ia) return i.COMPRESSED_RED_RGTC1_EXT;
        if (n === of) return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (n === af) return i.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (n === lf) return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      }
      return n === ys ? e.UNSIGNED_INT_24_8 : void 0 !== e[n] ? e[n] : null;
    },
  };
}
class Z1 extends pn {
  constructor(e = []) {
    super(), (this.isArrayCamera = !0), (this.cameras = e);
  }
}
class _a extends on {
  constructor() {
    super(), (this.isGroup = !0), (this.type = "Group");
  }
}
const Q1 = { type: "move" };
class Fu {
  constructor() {
    (this._targetRay = null), (this._grip = null), (this._hand = null);
  }
  getHandSpace() {
    return (
      null === this._hand &&
        ((this._hand = new _a()),
        (this._hand.matrixAutoUpdate = !1),
        (this._hand.visible = !1),
        (this._hand.joints = {}),
        (this._hand.inputState = { pinching: !1 })),
      this._hand
    );
  }
  getTargetRaySpace() {
    return (
      null === this._targetRay &&
        ((this._targetRay = new _a()),
        (this._targetRay.matrixAutoUpdate = !1),
        (this._targetRay.visible = !1),
        (this._targetRay.hasLinearVelocity = !1),
        (this._targetRay.linearVelocity = new F()),
        (this._targetRay.hasAngularVelocity = !1),
        (this._targetRay.angularVelocity = new F())),
      this._targetRay
    );
  }
  getGripSpace() {
    return (
      null === this._grip &&
        ((this._grip = new _a()),
        (this._grip.matrixAutoUpdate = !1),
        (this._grip.visible = !1),
        (this._grip.hasLinearVelocity = !1),
        (this._grip.linearVelocity = new F()),
        (this._grip.hasAngularVelocity = !1),
        (this._grip.angularVelocity = new F())),
      this._grip
    );
  }
  dispatchEvent(e) {
    return (
      null !== this._targetRay && this._targetRay.dispatchEvent(e),
      null !== this._grip && this._grip.dispatchEvent(e),
      null !== this._hand && this._hand.dispatchEvent(e),
      this
    );
  }
  connect(e) {
    if (e && e.hand) {
      const t = this._hand;
      if (t) for (const n of e.hand.values()) this._getHandJoint(t, n);
    }
    return this.dispatchEvent({ type: "connected", data: e }), this;
  }
  disconnect(e) {
    return (
      this.dispatchEvent({ type: "disconnected", data: e }),
      null !== this._targetRay && (this._targetRay.visible = !1),
      null !== this._grip && (this._grip.visible = !1),
      null !== this._hand && (this._hand.visible = !1),
      this
    );
  }
  update(e, t, n) {
    let r = null,
      i = null,
      a = null;
    const o = this._targetRay,
      s = this._grip,
      l = this._hand;
    if (e && "visible-blurred" !== t.session.visibilityState) {
      if (l && e.hand) {
        a = !0;
        for (const r of e.hand.values()) {
          const e = t.getJointPose(r, n),
            i = this._getHandJoint(l, r);
          null !== e &&
            (i.matrix.fromArray(e.transform.matrix),
            i.matrix.decompose(i.position, i.rotation, i.scale),
            (i.matrixWorldNeedsUpdate = !0),
            (i.jointRadius = e.radius)),
            (i.visible = null !== e);
        }
        const r = l.joints["index-finger-tip"],
          i = l.joints["thumb-tip"],
          o = r.position.distanceTo(i.position),
          s = 0.02,
          c = 0.005;
        l.inputState.pinching && o > s + c
          ? ((l.inputState.pinching = !1),
            this.dispatchEvent({
              type: "pinchend",
              handedness: e.handedness,
              target: this,
            }))
          : !l.inputState.pinching &&
            o <= s - c &&
            ((l.inputState.pinching = !0),
            this.dispatchEvent({
              type: "pinchstart",
              handedness: e.handedness,
              target: this,
            }));
      } else
        null !== s &&
          e.gripSpace &&
          ((i = t.getPose(e.gripSpace, n)),
          null !== i &&
            (s.matrix.fromArray(i.transform.matrix),
            s.matrix.decompose(s.position, s.rotation, s.scale),
            (s.matrixWorldNeedsUpdate = !0),
            i.linearVelocity
              ? ((s.hasLinearVelocity = !0),
                s.linearVelocity.copy(i.linearVelocity))
              : (s.hasLinearVelocity = !1),
            i.angularVelocity
              ? ((s.hasAngularVelocity = !0),
                s.angularVelocity.copy(i.angularVelocity))
              : (s.hasAngularVelocity = !1)));
      null !== o &&
        ((r = t.getPose(e.targetRaySpace, n)),
        null === r && null !== i && (r = i),
        null !== r &&
          (o.matrix.fromArray(r.transform.matrix),
          o.matrix.decompose(o.position, o.rotation, o.scale),
          (o.matrixWorldNeedsUpdate = !0),
          r.linearVelocity
            ? ((o.hasLinearVelocity = !0),
              o.linearVelocity.copy(r.linearVelocity))
            : (o.hasLinearVelocity = !1),
          r.angularVelocity
            ? ((o.hasAngularVelocity = !0),
              o.angularVelocity.copy(r.angularVelocity))
            : (o.hasAngularVelocity = !1),
          this.dispatchEvent(Q1)));
    }
    return (
      null !== o && (o.visible = null !== r),
      null !== s && (s.visible = null !== i),
      null !== l && (l.visible = null !== a),
      this
    );
  }
  _getHandJoint(e, t) {
    if (void 0 === e.joints[t.jointName]) {
      const n = new _a();
      (n.matrixAutoUpdate = !1),
        (n.visible = !1),
        (e.joints[t.jointName] = n),
        e.add(n);
    }
    return e.joints[t.jointName];
  }
}
const J1 = "\nvoid main() {\n\n\tgl_Position = vec4( position, 1.0 );\n\n}",
  eT =
    "\nuniform sampler2DArray depthColor;\nuniform float depthWidth;\nuniform float depthHeight;\n\nvoid main() {\n\n\tvec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );\n\n\tif ( coord.x >= 1.0 ) {\n\n\t\tgl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;\n\n\t} else {\n\n\t\tgl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;\n\n\t}\n\n}";
class tT {
  constructor() {
    (this.texture = null),
      (this.mesh = null),
      (this.depthNear = 0),
      (this.depthFar = 0);
  }
  init(e, t, n) {
    if (null === this.texture) {
      const r = new Zt();
      (e.properties.get(r).__webglTexture = t.texture),
        (t.depthNear != n.depthNear || t.depthFar != n.depthFar) &&
          ((this.depthNear = t.depthNear), (this.depthFar = t.depthFar)),
        (this.texture = r);
    }
  }
  getMesh(e) {
    if (null !== this.texture && null === this.mesh) {
      const t = e.cameras[0].viewport,
        n = new di({
          vertexShader: J1,
          fragmentShader: eT,
          uniforms: {
            depthColor: { value: this.texture },
            depthWidth: { value: t.z },
            depthHeight: { value: t.w },
          },
        });
      this.mesh = new Bn(new bl(20, 20), n);
    }
    return this.mesh;
  }
  reset() {
    (this.texture = null), (this.mesh = null);
  }
  getDepthTexture() {
    return this.texture;
  }
}
class nT extends As {
  constructor(e, t) {
    super();
    const n = this;
    let r = null,
      i = 1,
      a = null,
      o = "local-floor",
      s = 1,
      l = null,
      c = null,
      u = null,
      d = null,
      h = null,
      f = null;
    const p = new tT(),
      m = t.getContextAttributes();
    let g = null,
      v = null;
    const _ = [],
      x = [],
      y = new Ve();
    let S = null;
    const M = new pn();
    M.layers.enable(1), (M.viewport = new st());
    const E = new pn();
    E.layers.enable(2), (E.viewport = new st());
    const b = [M, E],
      T = new Z1();
    T.layers.enable(1), T.layers.enable(2);
    let w = null,
      A = null;
    function R(e) {
      const t = x.indexOf(e.inputSource);
      if (-1 === t) return;
      const n = _[t];
      void 0 !== n &&
        (n.update(e.inputSource, e.frame, l || a),
        n.dispatchEvent({ type: e.type, data: e.inputSource }));
    }
    function C() {
      r.removeEventListener("select", R),
        r.removeEventListener("selectstart", R),
        r.removeEventListener("selectend", R),
        r.removeEventListener("squeeze", R),
        r.removeEventListener("squeezestart", R),
        r.removeEventListener("squeezeend", R),
        r.removeEventListener("end", C),
        r.removeEventListener("inputsourceschange", P);
      for (let e = 0; e < _.length; e++) {
        const t = x[e];
        null !== t && ((x[e] = null), _[e].disconnect(t));
      }
      (w = null),
        (A = null),
        p.reset(),
        e.setRenderTarget(g),
        (h = null),
        (d = null),
        (u = null),
        (r = null),
        (v = null),
        I.stop(),
        (n.isPresenting = !1),
        e.setPixelRatio(S),
        e.setSize(y.width, y.height, !1),
        n.dispatchEvent({ type: "sessionend" });
    }
    function P(e) {
      for (let t = 0; t < e.removed.length; t++) {
        const n = e.removed[t],
          r = x.indexOf(n);
        r >= 0 && ((x[r] = null), _[r].disconnect(n));
      }
      for (let t = 0; t < e.added.length; t++) {
        const n = e.added[t];
        let r = x.indexOf(n);
        if (-1 === r) {
          for (let e = 0; e < _.length; e++) {
            if (e >= x.length) {
              x.push(n), (r = e);
              break;
            }
            if (null === x[e]) {
              (x[e] = n), (r = e);
              break;
            }
          }
          if (-1 === r) break;
        }
        const i = _[r];
        i && i.connect(n);
      }
    }
    (this.cameraAutoUpdate = !0),
      (this.enabled = !1),
      (this.isPresenting = !1),
      (this.getController = function (e) {
        let t = _[e];
        return (
          void 0 === t && ((t = new Fu()), (_[e] = t)), t.getTargetRaySpace()
        );
      }),
      (this.getControllerGrip = function (e) {
        let t = _[e];
        return void 0 === t && ((t = new Fu()), (_[e] = t)), t.getGripSpace();
      }),
      (this.getHand = function (e) {
        let t = _[e];
        return void 0 === t && ((t = new Fu()), (_[e] = t)), t.getHandSpace();
      }),
      (this.setFramebufferScaleFactor = function (e) {
        (i = e),
          !0 === n.isPresenting &&
            console.warn(
              "THREE.WebXRManager: Cannot change framebuffer scale while presenting."
            );
      }),
      (this.setReferenceSpaceType = function (e) {
        (o = e),
          !0 === n.isPresenting &&
            console.warn(
              "THREE.WebXRManager: Cannot change reference space type while presenting."
            );
      }),
      (this.getReferenceSpace = function () {
        return l || a;
      }),
      (this.setReferenceSpace = function (e) {
        l = e;
      }),
      (this.getBaseLayer = function () {
        return null !== d ? d : h;
      }),
      (this.getBinding = function () {
        return u;
      }),
      (this.getFrame = function () {
        return f;
      }),
      (this.getSession = function () {
        return r;
      }),
      (this.setSession = async function (c) {
        if (((r = c), null !== r)) {
          if (
            ((g = e.getRenderTarget()),
            r.addEventListener("select", R),
            r.addEventListener("selectstart", R),
            r.addEventListener("selectend", R),
            r.addEventListener("squeeze", R),
            r.addEventListener("squeezestart", R),
            r.addEventListener("squeezeend", R),
            r.addEventListener("end", C),
            r.addEventListener("inputsourceschange", P),
            !0 !== m.xrCompatible && (await t.makeXRCompatible()),
            (S = e.getPixelRatio()),
            e.getSize(y),
            void 0 === r.renderState.layers)
          ) {
            const n = {
              antialias: m.antialias,
              alpha: !0,
              depth: m.depth,
              stencil: m.stencil,
              framebufferScaleFactor: i,
            };
            (h = new XRWebGLLayer(r, t, n)),
              r.updateRenderState({ baseLayer: h }),
              e.setPixelRatio(1),
              e.setSize(h.framebufferWidth, h.framebufferHeight, !1),
              (v = new yr(h.framebufferWidth, h.framebufferHeight, {
                format: Pn,
                type: ci,
                colorSpace: e.outputColorSpace,
                stencilBuffer: m.stencil,
              }));
          } else {
            let n = null,
              a = null,
              o = null;
            m.depth &&
              ((o = m.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24),
              (n = m.stencil ? Ss : us),
              (a = m.stencil ? ys : xr));
            const s = { colorFormat: t.RGBA8, depthFormat: o, scaleFactor: i };
            (u = new XRWebGLBinding(r, t)),
              (d = u.createProjectionLayer(s)),
              r.updateRenderState({ layers: [d] }),
              e.setPixelRatio(1),
              e.setSize(d.textureWidth, d.textureHeight, !1),
              (v = new yr(d.textureWidth, d.textureHeight, {
                format: Pn,
                type: ci,
                depthTexture: new g_(
                  d.textureWidth,
                  d.textureHeight,
                  a,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  n
                ),
                stencilBuffer: m.stencil,
                colorSpace: e.outputColorSpace,
                samples: m.antialias ? 4 : 0,
                resolveDepthBuffer: !1 === d.ignoreDepthValues,
              }));
          }
          (v.isXRRenderTarget = !0),
            this.setFoveation(s),
            (l = null),
            (a = await r.requestReferenceSpace(o)),
            I.setContext(r),
            I.start(),
            (n.isPresenting = !0),
            n.dispatchEvent({ type: "sessionstart" });
        }
      }),
      (this.getEnvironmentBlendMode = function () {
        if (null !== r) return r.environmentBlendMode;
      }),
      (this.getDepthTexture = function () {
        return p.getDepthTexture();
      });
    const L = new F(),
      U = new F();
    function D(e, t) {
      null === t
        ? e.matrixWorld.copy(e.matrix)
        : e.matrixWorld.multiplyMatrices(t.matrixWorld, e.matrix),
        e.matrixWorldInverse.copy(e.matrixWorld).invert();
    }
    (this.updateCamera = function (e) {
      if (null === r) return;
      null !== p.texture && ((e.near = p.depthNear), (e.far = p.depthFar)),
        (T.near = E.near = M.near = e.near),
        (T.far = E.far = M.far = e.far),
        (w !== T.near || A !== T.far) &&
          (r.updateRenderState({ depthNear: T.near, depthFar: T.far }),
          (w = T.near),
          (A = T.far),
          (M.near = w),
          (M.far = A),
          (E.near = w),
          (E.far = A),
          M.updateProjectionMatrix(),
          E.updateProjectionMatrix(),
          e.updateProjectionMatrix());
      const t = e.parent,
        n = T.cameras;
      D(T, t);
      for (let e = 0; e < n.length; e++) D(n[e], t);
      2 === n.length
        ? (function (e, t, n) {
            L.setFromMatrixPosition(t.matrixWorld),
              U.setFromMatrixPosition(n.matrixWorld);
            const r = L.distanceTo(U),
              i = t.projectionMatrix.elements,
              a = n.projectionMatrix.elements,
              o = i[14] / (i[10] - 1),
              s = i[14] / (i[10] + 1),
              l = (i[9] + 1) / i[5],
              c = (i[9] - 1) / i[5],
              u = (i[8] - 1) / i[0],
              d = (a[8] + 1) / a[0],
              h = o * u,
              f = o * d,
              p = r / (-u + d),
              m = p * -u;
            t.matrixWorld.decompose(e.position, e.quaternion, e.scale),
              e.translateX(m),
              e.translateZ(p),
              e.matrixWorld.compose(e.position, e.quaternion, e.scale),
              e.matrixWorldInverse.copy(e.matrixWorld).invert();
            const g = o + p,
              v = s + p,
              _ = h - m,
              x = f + (r - m),
              y = ((l * s) / v) * g,
              S = ((c * s) / v) * g;
            e.projectionMatrix.makePerspective(_, x, y, S, g, v),
              e.projectionMatrixInverse.copy(e.projectionMatrix).invert();
          })(T, M, E)
        : T.projectionMatrix.copy(M.projectionMatrix),
        (function (e, t, n) {
          null === n
            ? e.matrix.copy(t.matrixWorld)
            : (e.matrix.copy(n.matrixWorld),
              e.matrix.invert(),
              e.matrix.multiply(t.matrixWorld)),
            e.matrix.decompose(e.position, e.quaternion, e.scale),
            e.updateMatrixWorld(!0),
            e.projectionMatrix.copy(t.projectionMatrix),
            e.projectionMatrixInverse.copy(t.projectionMatrixInverse),
            e.isPerspectiveCamera &&
              ((e.fov = 2 * uf * Math.atan(1 / e.projectionMatrix.elements[5])),
              (e.zoom = 1));
        })(e, T, t);
    }),
      (this.getCamera = function () {
        return T;
      }),
      (this.getFoveation = function () {
        if (null !== d || null !== h) return s;
      }),
      (this.setFoveation = function (e) {
        (s = e),
          null !== d && (d.fixedFoveation = e),
          null !== h && void 0 !== h.fixedFoveation && (h.fixedFoveation = e);
      }),
      (this.hasDepthSensing = function () {
        return null !== p.texture;
      }),
      (this.getDepthSensingMesh = function () {
        return p.getMesh(T);
      });
    let N = null;
    const I = new m_();
    I.setAnimationLoop(function (t, i) {
      if (((c = i.getViewerPose(l || a)), (f = i), null !== c)) {
        const t = c.views;
        null !== h &&
          (e.setRenderTargetFramebuffer(v, h.framebuffer),
          e.setRenderTarget(v));
        let n = !1;
        t.length !== T.cameras.length && ((T.cameras.length = 0), (n = !0));
        for (let r = 0; r < t.length; r++) {
          const i = t[r];
          let a = null;
          if (null !== h) a = h.getViewport(i);
          else {
            const t = u.getViewSubImage(d, i);
            (a = t.viewport),
              0 === r &&
                (e.setRenderTargetTextures(
                  v,
                  t.colorTexture,
                  d.ignoreDepthValues ? void 0 : t.depthStencilTexture
                ),
                e.setRenderTarget(v));
          }
          let o = b[r];
          void 0 === o &&
            ((o = new pn()),
            o.layers.enable(r),
            (o.viewport = new st()),
            (b[r] = o)),
            o.matrix.fromArray(i.transform.matrix),
            o.matrix.decompose(o.position, o.quaternion, o.scale),
            o.projectionMatrix.fromArray(i.projectionMatrix),
            o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),
            o.viewport.set(a.x, a.y, a.width, a.height),
            0 === r &&
              (T.matrix.copy(o.matrix),
              T.matrix.decompose(T.position, T.quaternion, T.scale)),
            !0 === n && T.cameras.push(o);
        }
        const i = r.enabledFeatures;
        if (i && i.includes("depth-sensing")) {
          const n = u.getDepthInformation(t[0]);
          n && n.isValid && n.texture && p.init(e, n, r.renderState);
        }
      }
      for (let e = 0; e < _.length; e++) {
        const t = x[e],
          n = _[e];
        null !== t && void 0 !== n && n.update(t, i, l || a);
      }
      N && N(t, i),
        i.detectedPlanes &&
          n.dispatchEvent({ type: "planesdetected", data: i }),
        (f = null);
    }),
      (this.setAnimationLoop = function (e) {
        N = e;
      }),
      (this.dispose = function () {});
  }
}
const Ji = new fi(),
  iT = new St();
function rT(e, t) {
  function n(e, t) {
    !0 === e.matrixAutoUpdate && e.updateMatrix(), t.value.copy(e.matrix);
  }
  function r(e, r) {
    (e.opacity.value = r.opacity),
      r.color && e.diffuse.value.copy(r.color),
      r.emissive &&
        e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),
      r.map && ((e.map.value = r.map), n(r.map, e.mapTransform)),
      r.alphaMap &&
        ((e.alphaMap.value = r.alphaMap), n(r.alphaMap, e.alphaMapTransform)),
      r.bumpMap &&
        ((e.bumpMap.value = r.bumpMap),
        n(r.bumpMap, e.bumpMapTransform),
        (e.bumpScale.value = r.bumpScale),
        r.side === Kt && (e.bumpScale.value *= -1)),
      r.normalMap &&
        ((e.normalMap.value = r.normalMap),
        n(r.normalMap, e.normalMapTransform),
        e.normalScale.value.copy(r.normalScale),
        r.side === Kt && e.normalScale.value.negate()),
      r.displacementMap &&
        ((e.displacementMap.value = r.displacementMap),
        n(r.displacementMap, e.displacementMapTransform),
        (e.displacementScale.value = r.displacementScale),
        (e.displacementBias.value = r.displacementBias)),
      r.emissiveMap &&
        ((e.emissiveMap.value = r.emissiveMap),
        n(r.emissiveMap, e.emissiveMapTransform)),
      r.specularMap &&
        ((e.specularMap.value = r.specularMap),
        n(r.specularMap, e.specularMapTransform)),
      r.alphaTest > 0 && (e.alphaTest.value = r.alphaTest);
    const i = t.get(r),
      a = i.envMap,
      o = i.envMapRotation;
    a &&
      ((e.envMap.value = a),
      Ji.copy(o),
      (Ji.x *= -1),
      (Ji.y *= -1),
      (Ji.z *= -1),
      a.isCubeTexture &&
        !1 === a.isRenderTargetTexture &&
        ((Ji.y *= -1), (Ji.z *= -1)),
      e.envMapRotation.value.setFromMatrix4(iT.makeRotationFromEuler(Ji)),
      (e.flipEnvMap.value =
        a.isCubeTexture && !1 === a.isRenderTargetTexture ? -1 : 1),
      (e.reflectivity.value = r.reflectivity),
      (e.ior.value = r.ior),
      (e.refractionRatio.value = r.refractionRatio)),
      r.lightMap &&
        ((e.lightMap.value = r.lightMap),
        (e.lightMapIntensity.value = r.lightMapIntensity),
        n(r.lightMap, e.lightMapTransform)),
      r.aoMap &&
        ((e.aoMap.value = r.aoMap),
        (e.aoMapIntensity.value = r.aoMapIntensity),
        n(r.aoMap, e.aoMapTransform));
  }
  return {
    refreshFogUniforms: function (t, n) {
      n.color.getRGB(t.fogColor.value, f_(e)),
        n.isFog
          ? ((t.fogNear.value = n.near), (t.fogFar.value = n.far))
          : n.isFogExp2 && (t.fogDensity.value = n.density);
    },
    refreshMaterialUniforms: function (e, i, a, o, s) {
      i.isMeshBasicMaterial || i.isMeshLambertMaterial
        ? r(e, i)
        : i.isMeshToonMaterial
        ? (r(e, i),
          (function (e, t) {
            t.gradientMap && (e.gradientMap.value = t.gradientMap);
          })(e, i))
        : i.isMeshPhongMaterial
        ? (r(e, i),
          (function (e, t) {
            e.specular.value.copy(t.specular),
              (e.shininess.value = Math.max(t.shininess, 1e-4));
          })(e, i))
        : i.isMeshStandardMaterial
        ? (r(e, i),
          (function (e, t) {
            (e.metalness.value = t.metalness),
              t.metalnessMap &&
                ((e.metalnessMap.value = t.metalnessMap),
                n(t.metalnessMap, e.metalnessMapTransform)),
              (e.roughness.value = t.roughness),
              t.roughnessMap &&
                ((e.roughnessMap.value = t.roughnessMap),
                n(t.roughnessMap, e.roughnessMapTransform)),
              t.envMap && (e.envMapIntensity.value = t.envMapIntensity);
          })(e, i),
          i.isMeshPhysicalMaterial &&
            (function (e, t, r) {
              (e.ior.value = t.ior),
                t.sheen > 0 &&
                  (e.sheenColor.value
                    .copy(t.sheenColor)
                    .multiplyScalar(t.sheen),
                  (e.sheenRoughness.value = t.sheenRoughness),
                  t.sheenColorMap &&
                    ((e.sheenColorMap.value = t.sheenColorMap),
                    n(t.sheenColorMap, e.sheenColorMapTransform)),
                  t.sheenRoughnessMap &&
                    ((e.sheenRoughnessMap.value = t.sheenRoughnessMap),
                    n(t.sheenRoughnessMap, e.sheenRoughnessMapTransform))),
                t.clearcoat > 0 &&
                  ((e.clearcoat.value = t.clearcoat),
                  (e.clearcoatRoughness.value = t.clearcoatRoughness),
                  t.clearcoatMap &&
                    ((e.clearcoatMap.value = t.clearcoatMap),
                    n(t.clearcoatMap, e.clearcoatMapTransform)),
                  t.clearcoatRoughnessMap &&
                    ((e.clearcoatRoughnessMap.value = t.clearcoatRoughnessMap),
                    n(
                      t.clearcoatRoughnessMap,
                      e.clearcoatRoughnessMapTransform
                    )),
                  t.clearcoatNormalMap &&
                    ((e.clearcoatNormalMap.value = t.clearcoatNormalMap),
                    n(t.clearcoatNormalMap, e.clearcoatNormalMapTransform),
                    e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),
                    t.side === Kt && e.clearcoatNormalScale.value.negate())),
                t.dispersion > 0 && (e.dispersion.value = t.dispersion),
                t.iridescence > 0 &&
                  ((e.iridescence.value = t.iridescence),
                  (e.iridescenceIOR.value = t.iridescenceIOR),
                  (e.iridescenceThicknessMinimum.value =
                    t.iridescenceThicknessRange[0]),
                  (e.iridescenceThicknessMaximum.value =
                    t.iridescenceThicknessRange[1]),
                  t.iridescenceMap &&
                    ((e.iridescenceMap.value = t.iridescenceMap),
                    n(t.iridescenceMap, e.iridescenceMapTransform)),
                  t.iridescenceThicknessMap &&
                    ((e.iridescenceThicknessMap.value =
                      t.iridescenceThicknessMap),
                    n(
                      t.iridescenceThicknessMap,
                      e.iridescenceThicknessMapTransform
                    ))),
                t.transmission > 0 &&
                  ((e.transmission.value = t.transmission),
                  (e.transmissionSamplerMap.value = r.texture),
                  e.transmissionSamplerSize.value.set(r.width, r.height),
                  t.transmissionMap &&
                    ((e.transmissionMap.value = t.transmissionMap),
                    n(t.transmissionMap, e.transmissionMapTransform)),
                  (e.thickness.value = t.thickness),
                  t.thicknessMap &&
                    ((e.thicknessMap.value = t.thicknessMap),
                    n(t.thicknessMap, e.thicknessMapTransform)),
                  (e.attenuationDistance.value = t.attenuationDistance),
                  e.attenuationColor.value.copy(t.attenuationColor)),
                t.anisotropy > 0 &&
                  (e.anisotropyVector.value.set(
                    t.anisotropy * Math.cos(t.anisotropyRotation),
                    t.anisotropy * Math.sin(t.anisotropyRotation)
                  ),
                  t.anisotropyMap &&
                    ((e.anisotropyMap.value = t.anisotropyMap),
                    n(t.anisotropyMap, e.anisotropyMapTransform))),
                (e.specularIntensity.value = t.specularIntensity),
                e.specularColor.value.copy(t.specularColor),
                t.specularColorMap &&
                  ((e.specularColorMap.value = t.specularColorMap),
                  n(t.specularColorMap, e.specularColorMapTransform)),
                t.specularIntensityMap &&
                  ((e.specularIntensityMap.value = t.specularIntensityMap),
                  n(t.specularIntensityMap, e.specularIntensityMapTransform));
            })(e, i, s))
        : i.isMeshMatcapMaterial
        ? (r(e, i),
          (function (e, t) {
            t.matcap && (e.matcap.value = t.matcap);
          })(e, i))
        : i.isMeshDepthMaterial
        ? r(e, i)
        : i.isMeshDistanceMaterial
        ? (r(e, i),
          (function (e, n) {
            const r = t.get(n).light;
            e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),
              (e.nearDistance.value = r.shadow.camera.near),
              (e.farDistance.value = r.shadow.camera.far);
          })(e, i))
        : i.isMeshNormalMaterial
        ? r(e, i)
        : i.isLineBasicMaterial
        ? ((function (e, t) {
            e.diffuse.value.copy(t.color),
              (e.opacity.value = t.opacity),
              t.map && ((e.map.value = t.map), n(t.map, e.mapTransform));
          })(e, i),
          i.isLineDashedMaterial &&
            (function (e, t) {
              (e.dashSize.value = t.dashSize),
                (e.totalSize.value = t.dashSize + t.gapSize),
                (e.scale.value = t.scale);
            })(e, i))
        : i.isPointsMaterial
        ? (function (e, t, r, i) {
            e.diffuse.value.copy(t.color),
              (e.opacity.value = t.opacity),
              (e.size.value = t.size * r),
              (e.scale.value = 0.5 * i),
              t.map && ((e.map.value = t.map), n(t.map, e.uvTransform)),
              t.alphaMap &&
                ((e.alphaMap.value = t.alphaMap),
                n(t.alphaMap, e.alphaMapTransform)),
              t.alphaTest > 0 && (e.alphaTest.value = t.alphaTest);
          })(e, i, a, o)
        : i.isSpriteMaterial
        ? (function (e, t) {
            e.diffuse.value.copy(t.color),
              (e.opacity.value = t.opacity),
              (e.rotation.value = t.rotation),
              t.map && ((e.map.value = t.map), n(t.map, e.mapTransform)),
              t.alphaMap &&
                ((e.alphaMap.value = t.alphaMap),
                n(t.alphaMap, e.alphaMapTransform)),
              t.alphaTest > 0 && (e.alphaTest.value = t.alphaTest);
          })(e, i)
        : i.isShadowMaterial
        ? (e.color.value.copy(i.color), (e.opacity.value = i.opacity))
        : i.isShaderMaterial && (i.uniformsNeedUpdate = !1);
    },
  };
}
function sT(e, t, n, r) {
  let i = {},
    a = {},
    o = [];
  const s = e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);
  function l(e, t, n, r) {
    const i = e.value,
      a = t + "_" + n;
    if (void 0 === r[a])
      return (
        (r[a] = "number" == typeof i || "boolean" == typeof i ? i : i.clone()),
        !0
      );
    {
      const e = r[a];
      if ("number" == typeof i || "boolean" == typeof i) {
        if (e !== i) return (r[a] = i), !0;
      } else if (!1 === e.equals(i)) return e.copy(i), !0;
    }
    return !1;
  }
  function c(e) {
    const t = { boundary: 0, storage: 0 };
    return (
      "number" == typeof e || "boolean" == typeof e
        ? ((t.boundary = 4), (t.storage = 4))
        : e.isVector2
        ? ((t.boundary = 8), (t.storage = 8))
        : e.isVector3 || e.isColor
        ? ((t.boundary = 16), (t.storage = 12))
        : e.isVector4
        ? ((t.boundary = 16), (t.storage = 16))
        : e.isMatrix3
        ? ((t.boundary = 48), (t.storage = 48))
        : e.isMatrix4
        ? ((t.boundary = 64), (t.storage = 64))
        : e.isTexture
        ? console.warn(
            "THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."
          )
        : console.warn(
            "THREE.WebGLRenderer: Unsupported uniform value type.",
            e
          ),
      t
    );
  }
  function u(t) {
    const n = t.target;
    n.removeEventListener("dispose", u);
    const r = o.indexOf(n.__bindingPointIndex);
    o.splice(r, 1), e.deleteBuffer(i[n.id]), delete i[n.id], delete a[n.id];
  }
  return {
    bind: function (e, t) {
      const n = t.program;
      r.uniformBlockBinding(e, n);
    },
    update: function (n, d) {
      let h = i[n.id];
      void 0 === h &&
        ((function (e) {
          const t = e.uniforms;
          let n = 0;
          const r = 16;
          for (let e = 0, i = t.length; e < i; e++) {
            const i = Array.isArray(t[e]) ? t[e] : [t[e]];
            for (let e = 0, t = i.length; e < t; e++) {
              const t = i[e],
                a = Array.isArray(t.value) ? t.value : [t.value];
              for (let e = 0, i = a.length; e < i; e++) {
                const i = c(a[e]),
                  o = n % r;
                0 !== o && r - o < i.boundary && (n += r - o),
                  (t.__data = new Float32Array(
                    i.storage / Float32Array.BYTES_PER_ELEMENT
                  )),
                  (t.__offset = n),
                  (n += i.storage);
              }
            }
          }
          const i = n % r;
          i > 0 && (n += r - i), (e.__size = n), (e.__cache = {});
        })(n),
        (h = (function (t) {
          const n = (function () {
            for (let e = 0; e < s; e++)
              if (-1 === o.indexOf(e)) return o.push(e), e;
            return (
              console.error(
                "THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."
              ),
              0
            );
          })();
          t.__bindingPointIndex = n;
          const r = e.createBuffer(),
            i = t.__size,
            a = t.usage;
          return (
            e.bindBuffer(e.UNIFORM_BUFFER, r),
            e.bufferData(e.UNIFORM_BUFFER, i, a),
            e.bindBuffer(e.UNIFORM_BUFFER, null),
            e.bindBufferBase(e.UNIFORM_BUFFER, n, r),
            r
          );
        })(n)),
        (i[n.id] = h),
        n.addEventListener("dispose", u));
      const f = d.program;
      r.updateUBOMapping(n, f);
      const p = t.render.frame;
      a[n.id] !== p &&
        ((function (t) {
          const n = i[t.id],
            r = t.uniforms,
            a = t.__cache;
          e.bindBuffer(e.UNIFORM_BUFFER, n);
          for (let t = 0, n = r.length; t < n; t++) {
            const n = Array.isArray(r[t]) ? r[t] : [r[t]];
            for (let r = 0, i = n.length; r < i; r++) {
              const i = n[r];
              if (!0 === l(i, t, r, a)) {
                const t = i.__offset,
                  n = Array.isArray(i.value) ? i.value : [i.value];
                let r = 0;
                for (let a = 0; a < n.length; a++) {
                  const o = n[a],
                    s = c(o);
                  "number" == typeof o || "boolean" == typeof o
                    ? ((i.__data[0] = o),
                      e.bufferSubData(e.UNIFORM_BUFFER, t + r, i.__data))
                    : o.isMatrix3
                    ? ((i.__data[0] = o.elements[0]),
                      (i.__data[1] = o.elements[1]),
                      (i.__data[2] = o.elements[2]),
                      (i.__data[3] = 0),
                      (i.__data[4] = o.elements[3]),
                      (i.__data[5] = o.elements[4]),
                      (i.__data[6] = o.elements[5]),
                      (i.__data[7] = 0),
                      (i.__data[8] = o.elements[6]),
                      (i.__data[9] = o.elements[7]),
                      (i.__data[10] = o.elements[8]),
                      (i.__data[11] = 0))
                    : (o.toArray(i.__data, r),
                      (r += s.storage / Float32Array.BYTES_PER_ELEMENT));
                }
                e.bufferSubData(e.UNIFORM_BUFFER, t, i.__data);
              }
            }
          }
          e.bindBuffer(e.UNIFORM_BUFFER, null);
        })(n),
        (a[n.id] = p));
    },
    dispose: function () {
      for (const t in i) e.deleteBuffer(i[t]);
      (o = []), (i = {}), (a = {});
    },
  };
}
class oT {
  constructor(e = {}) {
    const {
      canvas: t = jx(),
      context: n = null,
      depth: r = !0,
      stencil: i = !1,
      alpha: a = !1,
      antialias: o = !1,
      premultipliedAlpha: s = !0,
      preserveDrawingBuffer: l = !1,
      powerPreference: c = "default",
      failIfMajorPerformanceCaveat: u = !1,
    } = e;
    let d;
    if (((this.isWebGLRenderer = !0), null !== n)) {
      if (
        typeof WebGLRenderingContext < "u" &&
        n instanceof WebGLRenderingContext
      )
        throw new Error(
          "THREE.WebGLRenderer: WebGL 1 is not supported since r163."
        );
      d = n.getContextAttributes().alpha;
    } else d = a;
    const h = new Uint32Array(4),
      f = new Int32Array(4);
    let p = null,
      m = null;
    const g = [],
      v = [];
    (this.domElement = t),
      (this.debug = { checkShaderErrors: !0, onShaderError: null }),
      (this.autoClear = !0),
      (this.autoClearColor = !0),
      (this.autoClearDepth = !0),
      (this.autoClearStencil = !0),
      (this.sortObjects = !0),
      (this.clippingPlanes = []),
      (this.localClippingEnabled = !1),
      (this._outputColorSpace = Fn),
      (this.toneMapping = zi),
      (this.toneMappingExposure = 1);
    const _ = this;
    let x = !1,
      y = 0,
      S = 0,
      M = null,
      E = -1,
      b = null;
    const T = new st(),
      w = new st();
    let A = null;
    const R = new Ze(0);
    let C = 0,
      P = t.width,
      L = t.height,
      U = 1,
      D = null,
      N = null;
    const I = new st(0, 0, P, L),
      O = new st(0, 0, P, L);
    let k = !1;
    const z = new p_();
    let B = !1,
      H = !1;
    const V = new St(),
      G = new F(),
      W = new st(),
      X = {
        background: null,
        fog: null,
        environment: null,
        overrideMaterial: null,
        isScene: !0,
      };
    let j = !1;
    function q() {
      return null === M ? U : 1;
    }
    let Y,
      J,
      K,
      $,
      Z,
      Q,
      ee,
      te,
      ne,
      re,
      ie,
      ae,
      oe,
      se,
      le,
      ce,
      ue,
      de,
      he,
      fe,
      pe,
      me,
      ge,
      ve,
      _e = n;
    function xe(e, n) {
      return t.getContext(e, n);
    }
    try {
      const e = {
        alpha: !0,
        depth: r,
        stencil: i,
        antialias: o,
        premultipliedAlpha: s,
        preserveDrawingBuffer: l,
        powerPreference: c,
        failIfMajorPerformanceCaveat: u,
      };
      if (
        ("setAttribute" in t &&
          t.setAttribute("data-engine", `three.js r${sd}`),
        t.addEventListener("webglcontextlost", Me, !1),
        t.addEventListener("webglcontextrestored", Ee, !1),
        t.addEventListener("webglcontextcreationerror", be, !1),
        null === _e)
      ) {
        const t = "webgl2";
        if (((_e = xe(t, e)), null === _e))
          throw xe(t)
            ? new Error(
                "Error creating WebGL context with your selected attributes."
              )
            : new Error("Error creating WebGL context.");
      }
    } catch (e) {
      throw (console.error("THREE.WebGLRenderer: " + e.message), e);
    }
    function ye() {
      (Y = new hE(_e)),
        Y.init(),
        (me = new K1(_e, Y)),
        (J = new oE(_e, Y, e, me)),
        (K = new q1(_e)),
        ($ = new gE(_e)),
        (Z = new U1()),
        (Q = new j1(_e, Y, K, Z, J, me, $)),
        (ee = new lE(_)),
        (te = new dE(_)),
        (ne = new My(_e)),
        (ge = new rE(_e, ne)),
        (re = new pE(_e, ne, $, ge)),
        (ie = new vE(_e, re, ne, $)),
        (he = new _E(_e, J, Q)),
        (ce = new aE(Z)),
        (ae = new D1(_, ee, te, Y, J, ge, ce)),
        (oe = new rT(_, Z)),
        (se = new N1()),
        (le = new H1(Y)),
        (de = new iE(_, ee, te, K, ie, d, s)),
        (ue = new Y1(_, ie, J)),
        (ve = new sT(_e, $, J, K)),
        (fe = new sE(_e, Y, $)),
        (pe = new mE(_e, Y, $)),
        ($.programs = ae.programs),
        (_.capabilities = J),
        (_.extensions = Y),
        (_.properties = Z),
        (_.renderLists = se),
        (_.shadowMap = ue),
        (_.state = K),
        (_.info = $);
    }
    ye();
    const Se = new nT(_, _e);
    function Me(e) {
      e.preventDefault(),
        console.log("THREE.WebGLRenderer: Context Lost."),
        (x = !0);
    }
    function Ee() {
      console.log("THREE.WebGLRenderer: Context Restored."), (x = !1);
      const e = $.autoReset,
        t = ue.enabled,
        n = ue.autoUpdate,
        r = ue.needsUpdate,
        i = ue.type;
      ye(),
        ($.autoReset = e),
        (ue.enabled = t),
        (ue.autoUpdate = n),
        (ue.needsUpdate = r),
        (ue.type = i);
    }
    function be(e) {
      console.error(
        "THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",
        e.statusMessage
      );
    }
    function Te(e) {
      const t = e.target;
      t.removeEventListener("dispose", Te),
        (function (e) {
          (function (e) {
            const t = Z.get(e).programs;
            void 0 !== t &&
              (t.forEach(function (e) {
                ae.releaseProgram(e);
              }),
              e.isShaderMaterial && ae.releaseShaderCache(e));
          })(e),
            Z.remove(e);
        })(t);
    }
    function we(e, t, n) {
      !0 === e.transparent && 2 === e.side && !1 === e.forceSinglePass
        ? ((e.side = Kt),
          (e.needsUpdate = !0),
          Fe(e, t, n),
          (e.side = Hi),
          (e.needsUpdate = !0),
          Fe(e, t, n),
          (e.side = 2))
        : Fe(e, t, n);
    }
    (this.xr = Se),
      (this.getContext = function () {
        return _e;
      }),
      (this.getContextAttributes = function () {
        return _e.getContextAttributes();
      }),
      (this.forceContextLoss = function () {
        const e = Y.get("WEBGL_lose_context");
        e && e.loseContext();
      }),
      (this.forceContextRestore = function () {
        const e = Y.get("WEBGL_lose_context");
        e && e.restoreContext();
      }),
      (this.getPixelRatio = function () {
        return U;
      }),
      (this.setPixelRatio = function (e) {
        void 0 !== e && ((U = e), this.setSize(P, L, !1));
      }),
      (this.getSize = function (e) {
        return e.set(P, L);
      }),
      (this.setSize = function (e, n, r = !0) {
        Se.isPresenting
          ? console.warn(
              "THREE.WebGLRenderer: Can't change size while VR device is presenting."
            )
          : ((P = e),
            (L = n),
            (t.width = Math.floor(e * U)),
            (t.height = Math.floor(n * U)),
            !0 === r &&
              ((t.style.width = e + "px"), (t.style.height = n + "px")),
            this.setViewport(0, 0, e, n));
      }),
      (this.getDrawingBufferSize = function (e) {
        return e.set(P * U, L * U).floor();
      }),
      (this.setDrawingBufferSize = function (e, n, r) {
        (P = e),
          (L = n),
          (U = r),
          (t.width = Math.floor(e * r)),
          (t.height = Math.floor(n * r)),
          this.setViewport(0, 0, e, n);
      }),
      (this.getCurrentViewport = function (e) {
        return e.copy(T);
      }),
      (this.getViewport = function (e) {
        return e.copy(I);
      }),
      (this.setViewport = function (e, t, n, r) {
        e.isVector4 ? I.set(e.x, e.y, e.z, e.w) : I.set(e, t, n, r),
          K.viewport(T.copy(I).multiplyScalar(U).round());
      }),
      (this.getScissor = function (e) {
        return e.copy(O);
      }),
      (this.setScissor = function (e, t, n, r) {
        e.isVector4 ? O.set(e.x, e.y, e.z, e.w) : O.set(e, t, n, r),
          K.scissor(w.copy(O).multiplyScalar(U).round());
      }),
      (this.getScissorTest = function () {
        return k;
      }),
      (this.setScissorTest = function (e) {
        K.setScissorTest((k = e));
      }),
      (this.setOpaqueSort = function (e) {
        D = e;
      }),
      (this.setTransparentSort = function (e) {
        N = e;
      }),
      (this.getClearColor = function (e) {
        return e.copy(de.getClearColor());
      }),
      (this.setClearColor = function () {
        de.setClearColor.apply(de, arguments);
      }),
      (this.getClearAlpha = function () {
        return de.getClearAlpha();
      }),
      (this.setClearAlpha = function () {
        de.setClearAlpha.apply(de, arguments);
      }),
      (this.clear = function (e = !0, t = !0, n = !0) {
        let r = 0;
        if (e) {
          let e = !1;
          if (null !== M) {
            const t = M.texture.format;
            e = t === fd || t === cd || t === ud;
          }
          if (e) {
            const e = M.texture.type,
              t =
                e === ci ||
                e === xr ||
                e === xo ||
                e === ys ||
                e === ad ||
                e === ld,
              n = de.getClearColor(),
              r = de.getClearAlpha(),
              i = n.r,
              a = n.g,
              o = n.b;
            t
              ? ((h[0] = i),
                (h[1] = a),
                (h[2] = o),
                (h[3] = r),
                _e.clearBufferuiv(_e.COLOR, 0, h))
              : ((f[0] = i),
                (f[1] = a),
                (f[2] = o),
                (f[3] = r),
                _e.clearBufferiv(_e.COLOR, 0, f));
          } else r |= _e.COLOR_BUFFER_BIT;
        }
        t && (r |= _e.DEPTH_BUFFER_BIT),
          n &&
            ((r |= _e.STENCIL_BUFFER_BIT),
            this.state.buffers.stencil.setMask(4294967295)),
          _e.clear(r);
      }),
      (this.clearColor = function () {
        this.clear(!0, !1, !1);
      }),
      (this.clearDepth = function () {
        this.clear(!1, !0, !1);
      }),
      (this.clearStencil = function () {
        this.clear(!1, !1, !0);
      }),
      (this.dispose = function () {
        t.removeEventListener("webglcontextlost", Me, !1),
          t.removeEventListener("webglcontextrestored", Ee, !1),
          t.removeEventListener("webglcontextcreationerror", be, !1),
          se.dispose(),
          le.dispose(),
          Z.dispose(),
          ee.dispose(),
          te.dispose(),
          ie.dispose(),
          ge.dispose(),
          ve.dispose(),
          ae.dispose(),
          Se.dispose(),
          Se.removeEventListener("sessionstart", Re),
          Se.removeEventListener("sessionend", Ce),
          Pe.stop();
      }),
      (this.renderBufferDirect = function (e, t, n, r, i, a) {
        null === t && (t = X);
        const o = i.isMesh && i.matrixWorld.determinant() < 0,
          s = (function (e, t, n, r, i) {
            !0 !== t.isScene && (t = X), Q.resetTextureUnits();
            const a = t.fog,
              o = r.isMeshStandardMaterial ? t.environment : null,
              s =
                null === M
                  ? _.outputColorSpace
                  : !0 === M.isXRRenderTarget
                  ? M.texture.colorSpace
                  : Xi,
              l = (r.isMeshStandardMaterial ? te : ee).get(r.envMap || o),
              c =
                !0 === r.vertexColors &&
                !!n.attributes.color &&
                4 === n.attributes.color.itemSize,
              u = !!n.attributes.tangent && (!!r.normalMap || r.anisotropy > 0),
              d = !!n.morphAttributes.position,
              h = !!n.morphAttributes.normal,
              f = !!n.morphAttributes.color;
            let p = zi;
            r.toneMapped &&
              (null === M || !0 === M.isXRRenderTarget) &&
              (p = _.toneMapping);
            const g =
                n.morphAttributes.position ||
                n.morphAttributes.normal ||
                n.morphAttributes.color,
              v = void 0 !== g ? g.length : 0,
              x = Z.get(r),
              y = m.state.lights;
            if (!0 === B && (!0 === H || e !== b)) {
              const t = e === b && r.id === E;
              ce.setState(r, e, t);
            }
            let S = !1;
            r.version === x.__version
              ? ((x.needsLights && x.lightsStateVersion !== y.state.version) ||
                  x.outputColorSpace !== s ||
                  (i.isBatchedMesh && !1 === x.batching) ||
                  (!i.isBatchedMesh && !0 === x.batching) ||
                  (i.isBatchedMesh &&
                    !0 === x.batchingColor &&
                    null === i.colorTexture) ||
                  (i.isBatchedMesh &&
                    !1 === x.batchingColor &&
                    null !== i.colorTexture) ||
                  (i.isInstancedMesh && !1 === x.instancing) ||
                  (!i.isInstancedMesh && !0 === x.instancing) ||
                  (i.isSkinnedMesh && !1 === x.skinning) ||
                  (!i.isSkinnedMesh && !0 === x.skinning) ||
                  (i.isInstancedMesh &&
                    !0 === x.instancingColor &&
                    null === i.instanceColor) ||
                  (i.isInstancedMesh &&
                    !1 === x.instancingColor &&
                    null !== i.instanceColor) ||
                  (i.isInstancedMesh &&
                    !0 === x.instancingMorph &&
                    null === i.morphTexture) ||
                  (i.isInstancedMesh &&
                    !1 === x.instancingMorph &&
                    null !== i.morphTexture) ||
                  x.envMap !== l ||
                  (!0 === r.fog && x.fog !== a) ||
                  (void 0 !== x.numClippingPlanes &&
                    (x.numClippingPlanes !== ce.numPlanes ||
                      x.numIntersection !== ce.numIntersection)) ||
                  x.vertexAlphas !== c ||
                  x.vertexTangents !== u ||
                  x.morphTargets !== d ||
                  x.morphNormals !== h ||
                  x.morphColors !== f ||
                  x.toneMapping !== p ||
                  x.morphTargetsCount !== v) &&
                (S = !0)
              : ((S = !0), (x.__version = r.version));
            let T = x.currentProgram;
            !0 === S && (T = Fe(r, t, i));
            let w = !1,
              A = !1,
              R = !1;
            const C = T.getUniforms(),
              P = x.uniforms;
            if (
              (K.useProgram(T.program) && ((w = !0), (A = !0), (R = !0)),
              r.id !== E && ((E = r.id), (A = !0)),
              w || b !== e)
            ) {
              C.setValue(_e, "projectionMatrix", e.projectionMatrix),
                C.setValue(_e, "viewMatrix", e.matrixWorldInverse);
              const t = C.map.cameraPosition;
              void 0 !== t &&
                t.setValue(_e, G.setFromMatrixPosition(e.matrixWorld)),
                J.logarithmicDepthBuffer &&
                  C.setValue(
                    _e,
                    "logDepthBufFC",
                    2 / (Math.log(e.far + 1) / Math.LN2)
                  ),
                (r.isMeshPhongMaterial ||
                  r.isMeshToonMaterial ||
                  r.isMeshLambertMaterial ||
                  r.isMeshBasicMaterial ||
                  r.isMeshStandardMaterial ||
                  r.isShaderMaterial) &&
                  C.setValue(
                    _e,
                    "isOrthographic",
                    !0 === e.isOrthographicCamera
                  ),
                b !== e && ((b = e), (A = !0), (R = !0));
            }
            if (i.isSkinnedMesh) {
              C.setOptional(_e, i, "bindMatrix"),
                C.setOptional(_e, i, "bindMatrixInverse");
              const e = i.skeleton;
              e &&
                (null === e.boneTexture && e.computeBoneTexture(),
                C.setValue(_e, "boneTexture", e.boneTexture, Q));
            }
            i.isBatchedMesh &&
              (C.setOptional(_e, i, "batchingTexture"),
              C.setValue(_e, "batchingTexture", i._matricesTexture, Q),
              C.setOptional(_e, i, "batchingIdTexture"),
              C.setValue(_e, "batchingIdTexture", i._indirectTexture, Q),
              C.setOptional(_e, i, "batchingColorTexture"),
              null !== i._colorsTexture &&
                C.setValue(_e, "batchingColorTexture", i._colorsTexture, Q));
            const D = n.morphAttributes;
            if (
              ((void 0 !== D.position ||
                void 0 !== D.normal ||
                void 0 !== D.color) &&
                he.update(i, n, T),
              (A || x.receiveShadow !== i.receiveShadow) &&
                ((x.receiveShadow = i.receiveShadow),
                C.setValue(_e, "receiveShadow", i.receiveShadow)),
              r.isMeshGouraudMaterial &&
                null !== r.envMap &&
                ((P.envMap.value = l),
                (P.flipEnvMap.value =
                  l.isCubeTexture && !1 === l.isRenderTargetTexture ? -1 : 1)),
              r.isMeshStandardMaterial &&
                null === r.envMap &&
                null !== t.environment &&
                (P.envMapIntensity.value = t.environmentIntensity),
              A &&
                (C.setValue(_e, "toneMappingExposure", _.toneMappingExposure),
                x.needsLights &&
                  (function (e, t) {
                    (e.ambientLightColor.needsUpdate = t),
                      (e.lightProbe.needsUpdate = t),
                      (e.directionalLights.needsUpdate = t),
                      (e.directionalLightShadows.needsUpdate = t),
                      (e.pointLights.needsUpdate = t),
                      (e.pointLightShadows.needsUpdate = t),
                      (e.spotLights.needsUpdate = t),
                      (e.spotLightShadows.needsUpdate = t),
                      (e.rectAreaLights.needsUpdate = t),
                      (e.hemisphereLights.needsUpdate = t);
                  })(P, R),
                a && !0 === r.fog && oe.refreshFogUniforms(P, a),
                oe.refreshMaterialUniforms(
                  P,
                  r,
                  U,
                  L,
                  m.state.transmissionRenderTarget[e.id]
                ),
                Na.upload(_e, Oe(x), P, Q)),
              r.isShaderMaterial &&
                !0 === r.uniformsNeedUpdate &&
                (Na.upload(_e, Oe(x), P, Q), (r.uniformsNeedUpdate = !1)),
              r.isSpriteMaterial && C.setValue(_e, "center", i.center),
              C.setValue(_e, "modelViewMatrix", i.modelViewMatrix),
              C.setValue(_e, "normalMatrix", i.normalMatrix),
              C.setValue(_e, "modelMatrix", i.matrixWorld),
              r.isShaderMaterial || r.isRawShaderMaterial)
            ) {
              const e = r.uniformsGroups;
              for (let t = 0, n = e.length; t < n; t++) {
                const n = e[t];
                ve.update(n, T), ve.bind(n, T);
              }
            }
            return T;
          })(e, t, n, r, i);
        K.setMaterial(r, o);
        let l = n.index,
          c = 1;
        if (!0 === r.wireframe) {
          if (((l = re.getWireframeAttribute(n)), void 0 === l)) return;
          c = 2;
        }
        const u = n.drawRange,
          d = n.attributes.position;
        let h = u.start * c,
          f = (u.start + u.count) * c;
        null !== a &&
          ((h = Math.max(h, a.start * c)),
          (f = Math.min(f, (a.start + a.count) * c))),
          null !== l
            ? ((h = Math.max(h, 0)), (f = Math.min(f, l.count)))
            : null != d && ((h = Math.max(h, 0)), (f = Math.min(f, d.count)));
        const p = f - h;
        if (p < 0 || p === 1 / 0) return;
        ge.setup(i, r, s, n, l);
        let g,
          v = fe;
        if (
          (null !== l && ((g = ne.get(l)), (v = pe), v.setIndex(g)), i.isMesh)
        )
          !0 === r.wireframe
            ? (K.setLineWidth(r.wireframeLinewidth * q()), v.setMode(_e.LINES))
            : v.setMode(_e.TRIANGLES);
        else if (i.isLine) {
          let e = r.linewidth;
          void 0 === e && (e = 1),
            K.setLineWidth(e * q()),
            i.isLineSegments
              ? v.setMode(_e.LINES)
              : i.isLineLoop
              ? v.setMode(_e.LINE_LOOP)
              : v.setMode(_e.LINE_STRIP);
        } else
          i.isPoints
            ? v.setMode(_e.POINTS)
            : i.isSprite && v.setMode(_e.TRIANGLES);
        if (i.isBatchedMesh)
          if (null !== i._multiDrawInstances)
            v.renderMultiDrawInstances(
              i._multiDrawStarts,
              i._multiDrawCounts,
              i._multiDrawCount,
              i._multiDrawInstances
            );
          else if (Y.get("WEBGL_multi_draw"))
            v.renderMultiDraw(
              i._multiDrawStarts,
              i._multiDrawCounts,
              i._multiDrawCount
            );
          else {
            const e = i._multiDrawStarts,
              t = i._multiDrawCounts,
              n = i._multiDrawCount,
              a = l ? ne.get(l).bytesPerElement : 1,
              o = Z.get(r).currentProgram.getUniforms();
            for (let r = 0; r < n; r++)
              o.setValue(_e, "_gl_DrawID", r), v.render(e[r] / a, t[r]);
          }
        else if (i.isInstancedMesh) v.renderInstances(h, p, i.count);
        else if (n.isInstancedBufferGeometry) {
          const e =
              void 0 !== n._maxInstanceCount ? n._maxInstanceCount : 1 / 0,
            t = Math.min(n.instanceCount, e);
          v.renderInstances(h, p, t);
        } else v.render(h, p);
      }),
      (this.compile = function (e, t, n = null) {
        null === n && (n = e),
          (m = le.get(n)),
          m.init(t),
          v.push(m),
          n.traverseVisible(function (e) {
            e.isLight &&
              e.layers.test(t.layers) &&
              (m.pushLight(e), e.castShadow && m.pushShadow(e));
          }),
          e !== n &&
            e.traverseVisible(function (e) {
              e.isLight &&
                e.layers.test(t.layers) &&
                (m.pushLight(e), e.castShadow && m.pushShadow(e));
            }),
          m.setupLights();
        const r = new Set();
        return (
          e.traverse(function (e) {
            const t = e.material;
            if (t)
              if (Array.isArray(t))
                for (let i = 0; i < t.length; i++) {
                  const a = t[i];
                  we(a, n, e), r.add(a);
                }
              else we(t, n, e), r.add(t);
          }),
          v.pop(),
          (m = null),
          r
        );
      }),
      (this.compileAsync = function (e, t, n = null) {
        const r = this.compile(e, t, n);
        return new Promise((t) => {
          function n() {
            r.forEach(function (e) {
              Z.get(e).currentProgram.isReady() && r.delete(e);
            }),
              0 !== r.size ? setTimeout(n, 10) : t(e);
          }
          null !== Y.get("KHR_parallel_shader_compile")
            ? n()
            : setTimeout(n, 10);
        });
      });
    let Ae = null;
    function Re() {
      Pe.stop();
    }
    function Ce() {
      Pe.start();
    }
    const Pe = new m_();
    function Le(e, t, n, r) {
      if (!1 === e.visible) return;
      if (e.layers.test(t.layers))
        if (e.isGroup) n = e.renderOrder;
        else if (e.isLOD) !0 === e.autoUpdate && e.update(t);
        else if (e.isLight) m.pushLight(e), e.castShadow && m.pushShadow(e);
        else if (e.isSprite) {
          if (!e.frustumCulled || z.intersectsSprite(e)) {
            r && W.setFromMatrixPosition(e.matrixWorld).applyMatrix4(V);
            const t = ie.update(e),
              i = e.material;
            i.visible && p.push(e, t, i, n, W.z, null);
          }
        } else if (
          (e.isMesh || e.isLine || e.isPoints) &&
          (!e.frustumCulled || z.intersectsObject(e))
        ) {
          const t = ie.update(e),
            i = e.material;
          if (
            (r &&
              (void 0 !== e.boundingSphere
                ? (null === e.boundingSphere && e.computeBoundingSphere(),
                  W.copy(e.boundingSphere.center))
                : (null === t.boundingSphere && t.computeBoundingSphere(),
                  W.copy(t.boundingSphere.center)),
              W.applyMatrix4(e.matrixWorld).applyMatrix4(V)),
            Array.isArray(i))
          ) {
            const r = t.groups;
            for (let a = 0, o = r.length; a < o; a++) {
              const o = r[a],
                s = i[o.materialIndex];
              s && s.visible && p.push(e, t, s, n, W.z, o);
            }
          } else i.visible && p.push(e, t, i, n, W.z, null);
        }
      const i = e.children;
      for (let e = 0, a = i.length; e < a; e++) Le(i[e], t, n, r);
    }
    function Ue(e, t, n, r) {
      const i = e.opaque,
        a = e.transmissive,
        o = e.transparent;
      m.setupLightsView(n),
        !0 === B && ce.setGlobalState(_.clippingPlanes, n),
        r && K.viewport(T.copy(r)),
        i.length > 0 && Ne(i, t, n),
        a.length > 0 && Ne(a, t, n),
        o.length > 0 && Ne(o, t, n),
        K.buffers.depth.setTest(!0),
        K.buffers.depth.setMask(!0),
        K.buffers.color.setMask(!0),
        K.setPolygonOffset(!1);
    }
    function De(e, t, n, r) {
      if (null !== (!0 === n.isScene ? n.overrideMaterial : null)) return;
      void 0 === m.state.transmissionRenderTarget[r.id] &&
        (m.state.transmissionRenderTarget[r.id] = new yr(1, 1, {
          generateMipmaps: !0,
          type:
            Y.has("EXT_color_buffer_half_float") ||
            Y.has("EXT_color_buffer_float")
              ? wo
              : ci,
          minFilter: cr,
          samples: 4,
          stencilBuffer: i,
          resolveDepthBuffer: !1,
          resolveStencilBuffer: !1,
          colorSpace: $e.workingColorSpace,
        }));
      const a = m.state.transmissionRenderTarget[r.id],
        o = r.viewport || T;
      a.setSize(o.z, o.w);
      const s = _.getRenderTarget();
      _.setRenderTarget(a),
        _.getClearColor(R),
        (C = _.getClearAlpha()),
        C < 1 && _.setClearColor(16777215, 0.5),
        j ? de.render(n) : _.clear();
      const l = _.toneMapping;
      _.toneMapping = zi;
      const c = r.viewport;
      if (
        (void 0 !== r.viewport && (r.viewport = void 0),
        m.setupLightsView(r),
        !0 === B && ce.setGlobalState(_.clippingPlanes, r),
        Ne(e, n, r),
        Q.updateMultisampleRenderTarget(a),
        Q.updateRenderTargetMipmap(a),
        !1 === Y.has("WEBGL_multisampled_render_to_texture"))
      ) {
        let e = !1;
        for (let i = 0, a = t.length; i < a; i++) {
          const a = t[i],
            o = a.object,
            s = a.geometry,
            l = a.material,
            c = a.group;
          if (2 === l.side && o.layers.test(r.layers)) {
            const t = l.side;
            (l.side = Kt),
              (l.needsUpdate = !0),
              Ie(o, n, r, s, l, c),
              (l.side = t),
              (l.needsUpdate = !0),
              (e = !0);
          }
        }
        !0 === e &&
          (Q.updateMultisampleRenderTarget(a), Q.updateRenderTargetMipmap(a));
      }
      _.setRenderTarget(s),
        _.setClearColor(R, C),
        void 0 !== c && (r.viewport = c),
        (_.toneMapping = l);
    }
    function Ne(e, t, n) {
      const r = !0 === t.isScene ? t.overrideMaterial : null;
      for (let i = 0, a = e.length; i < a; i++) {
        const a = e[i],
          o = a.object,
          s = a.geometry,
          l = null === r ? a.material : r,
          c = a.group;
        o.layers.test(n.layers) && Ie(o, t, n, s, l, c);
      }
    }
    function Ie(e, t, n, r, i, a) {
      e.onBeforeRender(_, t, n, r, i, a),
        e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse, e.matrixWorld),
        e.normalMatrix.getNormalMatrix(e.modelViewMatrix),
        !0 === i.transparent && 2 === i.side && !1 === i.forceSinglePass
          ? ((i.side = Kt),
            (i.needsUpdate = !0),
            _.renderBufferDirect(n, t, r, i, e, a),
            (i.side = Hi),
            (i.needsUpdate = !0),
            _.renderBufferDirect(n, t, r, i, e, a),
            (i.side = 2))
          : _.renderBufferDirect(n, t, r, i, e, a),
        e.onAfterRender(_, t, n, r, i, a);
    }
    function Fe(e, t, n) {
      !0 !== t.isScene && (t = X);
      const r = Z.get(e),
        i = m.state.lights,
        a = m.state.shadowsArray,
        o = i.state.version,
        s = ae.getParameters(e, i.state, a, t, n),
        l = ae.getProgramCacheKey(s);
      let c = r.programs;
      (r.environment = e.isMeshStandardMaterial ? t.environment : null),
        (r.fog = t.fog),
        (r.envMap = (e.isMeshStandardMaterial ? te : ee).get(
          e.envMap || r.environment
        )),
        (r.envMapRotation =
          null !== r.environment && null === e.envMap
            ? t.environmentRotation
            : e.envMapRotation),
        void 0 === c &&
          (e.addEventListener("dispose", Te),
          (c = new Map()),
          (r.programs = c));
      let u = c.get(l);
      if (void 0 !== u) {
        if (r.currentProgram === u && r.lightsStateVersion === o)
          return ke(e, s), u;
      } else
        (s.uniforms = ae.getUniforms(e)),
          e.onBeforeCompile(s, _),
          (u = ae.acquireProgram(s, l)),
          c.set(l, u),
          (r.uniforms = s.uniforms);
      const d = r.uniforms;
      return (
        ((!e.isShaderMaterial && !e.isRawShaderMaterial) ||
          !0 === e.clipping) &&
          (d.clippingPlanes = ce.uniform),
        ke(e, s),
        (r.needsLights = (function (e) {
          return (
            e.isMeshLambertMaterial ||
            e.isMeshToonMaterial ||
            e.isMeshPhongMaterial ||
            e.isMeshStandardMaterial ||
            e.isShadowMaterial ||
            (e.isShaderMaterial && !0 === e.lights)
          );
        })(e)),
        (r.lightsStateVersion = o),
        r.needsLights &&
          ((d.ambientLightColor.value = i.state.ambient),
          (d.lightProbe.value = i.state.probe),
          (d.directionalLights.value = i.state.directional),
          (d.directionalLightShadows.value = i.state.directionalShadow),
          (d.spotLights.value = i.state.spot),
          (d.spotLightShadows.value = i.state.spotShadow),
          (d.rectAreaLights.value = i.state.rectArea),
          (d.ltc_1.value = i.state.rectAreaLTC1),
          (d.ltc_2.value = i.state.rectAreaLTC2),
          (d.pointLights.value = i.state.point),
          (d.pointLightShadows.value = i.state.pointShadow),
          (d.hemisphereLights.value = i.state.hemi),
          (d.directionalShadowMap.value = i.state.directionalShadowMap),
          (d.directionalShadowMatrix.value = i.state.directionalShadowMatrix),
          (d.spotShadowMap.value = i.state.spotShadowMap),
          (d.spotLightMatrix.value = i.state.spotLightMatrix),
          (d.spotLightMap.value = i.state.spotLightMap),
          (d.pointShadowMap.value = i.state.pointShadowMap),
          (d.pointShadowMatrix.value = i.state.pointShadowMatrix)),
        (r.currentProgram = u),
        (r.uniformsList = null),
        u
      );
    }
    function Oe(e) {
      if (null === e.uniformsList) {
        const t = e.currentProgram.getUniforms();
        e.uniformsList = Na.seqWithValue(t.seq, e.uniforms);
      }
      return e.uniformsList;
    }
    function ke(e, t) {
      const n = Z.get(e);
      (n.outputColorSpace = t.outputColorSpace),
        (n.batching = t.batching),
        (n.batchingColor = t.batchingColor),
        (n.instancing = t.instancing),
        (n.instancingColor = t.instancingColor),
        (n.instancingMorph = t.instancingMorph),
        (n.skinning = t.skinning),
        (n.morphTargets = t.morphTargets),
        (n.morphNormals = t.morphNormals),
        (n.morphColors = t.morphColors),
        (n.morphTargetsCount = t.morphTargetsCount),
        (n.numClippingPlanes = t.numClippingPlanes),
        (n.numIntersection = t.numClipIntersection),
        (n.vertexAlphas = t.vertexAlphas),
        (n.vertexTangents = t.vertexTangents),
        (n.toneMapping = t.toneMapping);
    }
    Pe.setAnimationLoop(function (e) {
      Ae && Ae(e);
    }),
      typeof self < "u" && Pe.setContext(self),
      (this.setAnimationLoop = function (e) {
        (Ae = e), Se.setAnimationLoop(e), null === e ? Pe.stop() : Pe.start();
      }),
      Se.addEventListener("sessionstart", Re),
      Se.addEventListener("sessionend", Ce),
      (this.render = function (e, t) {
        if (void 0 !== t && !0 !== t.isCamera)
          return void console.error(
            "THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera."
          );
        if (!0 === x) return;
        if (
          (!0 === e.matrixWorldAutoUpdate && e.updateMatrixWorld(),
          null === t.parent &&
            !0 === t.matrixWorldAutoUpdate &&
            t.updateMatrixWorld(),
          !0 === Se.enabled &&
            !0 === Se.isPresenting &&
            (!0 === Se.cameraAutoUpdate && Se.updateCamera(t),
            (t = Se.getCamera())),
          !0 === e.isScene && e.onBeforeRender(_, e, t, M),
          (m = le.get(e, v.length)),
          m.init(t),
          v.push(m),
          V.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse),
          z.setFromProjectionMatrix(V),
          (H = this.localClippingEnabled),
          (B = ce.init(this.clippingPlanes, H)),
          (p = se.get(e, g.length)),
          p.init(),
          g.push(p),
          !0 === Se.enabled && !0 === Se.isPresenting)
        ) {
          const e = _.xr.getDepthSensingMesh();
          null !== e && Le(e, t, -1 / 0, _.sortObjects);
        }
        Le(e, t, 0, _.sortObjects),
          p.finish(),
          !0 === _.sortObjects && p.sort(D, N),
          (j =
            !1 === Se.enabled ||
            !1 === Se.isPresenting ||
            !1 === Se.hasDepthSensing()),
          j && de.addToRenderList(p, e),
          this.info.render.frame++,
          !0 === B && ce.beginShadows();
        const n = m.state.shadowsArray;
        ue.render(n, e, t),
          !0 === B && ce.endShadows(),
          !0 === this.info.autoReset && this.info.reset();
        const r = p.opaque,
          i = p.transmissive;
        if ((m.setupLights(), t.isArrayCamera)) {
          const n = t.cameras;
          if (i.length > 0)
            for (let t = 0, a = n.length; t < a; t++) {
              De(r, i, e, n[t]);
            }
          j && de.render(e);
          for (let t = 0, r = n.length; t < r; t++) {
            const r = n[t];
            Ue(p, e, r, r.viewport);
          }
        } else i.length > 0 && De(r, i, e, t), j && de.render(e), Ue(p, e, t);
        null !== M &&
          (Q.updateMultisampleRenderTarget(M), Q.updateRenderTargetMipmap(M)),
          !0 === e.isScene && e.onAfterRender(_, e, t),
          ge.resetDefaultState(),
          (E = -1),
          (b = null),
          v.pop(),
          v.length > 0
            ? ((m = v[v.length - 1]),
              !0 === B && ce.setGlobalState(_.clippingPlanes, m.state.camera))
            : (m = null),
          g.pop(),
          (p = g.length > 0 ? g[g.length - 1] : null);
      }),
      (this.getActiveCubeFace = function () {
        return y;
      }),
      (this.getActiveMipmapLevel = function () {
        return S;
      }),
      (this.getRenderTarget = function () {
        return M;
      }),
      (this.setRenderTargetTextures = function (e, t, n) {
        (Z.get(e.texture).__webglTexture = t),
          (Z.get(e.depthTexture).__webglTexture = n);
        const r = Z.get(e);
        (r.__hasExternalTextures = !0),
          (r.__autoAllocateDepthBuffer = void 0 === n),
          r.__autoAllocateDepthBuffer ||
            (!0 === Y.has("WEBGL_multisampled_render_to_texture") &&
              (console.warn(
                "THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"
              ),
              (r.__useRenderToTexture = !1)));
      }),
      (this.setRenderTargetFramebuffer = function (e, t) {
        const n = Z.get(e);
        (n.__webglFramebuffer = t), (n.__useDefaultFramebuffer = void 0 === t);
      }),
      (this.setRenderTarget = function (e, t = 0, n = 0) {
        (M = e), (y = t), (S = n);
        let r = !0,
          i = null,
          a = !1,
          o = !1;
        if (e) {
          const s = Z.get(e);
          void 0 !== s.__useDefaultFramebuffer
            ? (K.bindFramebuffer(_e.FRAMEBUFFER, null), (r = !1))
            : void 0 === s.__webglFramebuffer
            ? Q.setupRenderTarget(e)
            : s.__hasExternalTextures &&
              Q.rebindTextures(
                e,
                Z.get(e.texture).__webglTexture,
                Z.get(e.depthTexture).__webglTexture
              );
          const l = e.texture;
          (l.isData3DTexture ||
            l.isDataArrayTexture ||
            l.isCompressedArrayTexture) &&
            (o = !0);
          const c = Z.get(e).__webglFramebuffer;
          e.isWebGLCubeRenderTarget
            ? ((i = Array.isArray(c[t]) ? c[t][n] : c[t]), (a = !0))
            : (i =
                e.samples > 0 && !1 === Q.useMultisampledRTT(e)
                  ? Z.get(e).__webglMultisampledFramebuffer
                  : Array.isArray(c)
                  ? c[n]
                  : c),
            T.copy(e.viewport),
            w.copy(e.scissor),
            (A = e.scissorTest);
        } else
          T.copy(I).multiplyScalar(U).floor(),
            w.copy(O).multiplyScalar(U).floor(),
            (A = k);
        if (
          (K.bindFramebuffer(_e.FRAMEBUFFER, i) && r && K.drawBuffers(e, i),
          K.viewport(T),
          K.scissor(w),
          K.setScissorTest(A),
          a)
        ) {
          const r = Z.get(e.texture);
          _e.framebufferTexture2D(
            _e.FRAMEBUFFER,
            _e.COLOR_ATTACHMENT0,
            _e.TEXTURE_CUBE_MAP_POSITIVE_X + t,
            r.__webglTexture,
            n
          );
        } else if (o) {
          const r = Z.get(e.texture),
            i = t || 0;
          _e.framebufferTextureLayer(
            _e.FRAMEBUFFER,
            _e.COLOR_ATTACHMENT0,
            r.__webglTexture,
            n || 0,
            i
          );
        }
        E = -1;
      }),
      (this.readRenderTargetPixels = function (e, t, n, r, i, a, o) {
        if (!e || !e.isWebGLRenderTarget)
          return void console.error(
            "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget."
          );
        let s = Z.get(e).__webglFramebuffer;
        if ((e.isWebGLCubeRenderTarget && void 0 !== o && (s = s[o]), s)) {
          K.bindFramebuffer(_e.FRAMEBUFFER, s);
          try {
            const o = e.texture,
              s = o.format,
              l = o.type;
            if (!J.textureFormatReadable(s))
              return void console.error(
                "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format."
              );
            if (!J.textureTypeReadable(l))
              return void console.error(
                "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type."
              );
            t >= 0 &&
              t <= e.width - r &&
              n >= 0 &&
              n <= e.height - i &&
              _e.readPixels(t, n, r, i, me.convert(s), me.convert(l), a);
          } finally {
            const e = null !== M ? Z.get(M).__webglFramebuffer : null;
            K.bindFramebuffer(_e.FRAMEBUFFER, e);
          }
        }
      }),
      (this.readRenderTargetPixelsAsync = async function (e, t, n, r, i, a, o) {
        if (!e || !e.isWebGLRenderTarget)
          throw new Error(
            "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget."
          );
        let s = Z.get(e).__webglFramebuffer;
        if ((e.isWebGLCubeRenderTarget && void 0 !== o && (s = s[o]), s)) {
          K.bindFramebuffer(_e.FRAMEBUFFER, s);
          try {
            const o = e.texture,
              s = o.format,
              l = o.type;
            if (!J.textureFormatReadable(s))
              throw new Error(
                "THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format."
              );
            if (!J.textureTypeReadable(l))
              throw new Error(
                "THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type."
              );
            if (t >= 0 && t <= e.width - r && n >= 0 && n <= e.height - i) {
              const e = _e.createBuffer();
              _e.bindBuffer(_e.PIXEL_PACK_BUFFER, e),
                _e.bufferData(
                  _e.PIXEL_PACK_BUFFER,
                  a.byteLength,
                  _e.STREAM_READ
                ),
                _e.readPixels(t, n, r, i, me.convert(s), me.convert(l), 0),
                _e.flush();
              const o = _e.fenceSync(_e.SYNC_GPU_COMMANDS_COMPLETE, 0);
              await Kx(_e, o, 4);
              try {
                _e.bindBuffer(_e.PIXEL_PACK_BUFFER, e),
                  _e.getBufferSubData(_e.PIXEL_PACK_BUFFER, 0, a);
              } finally {
                _e.deleteBuffer(e), _e.deleteSync(o);
              }
              return a;
            }
          } finally {
            const e = null !== M ? Z.get(M).__webglFramebuffer : null;
            K.bindFramebuffer(_e.FRAMEBUFFER, e);
          }
        }
      }),
      (this.copyFramebufferToTexture = function (e, t = null, n = 0) {
        !0 !== e.isTexture &&
          (console.warn(
            "WebGLRenderer: copyFramebufferToTexture function signature has changed."
          ),
          (t = arguments[0] || null),
          (e = arguments[1]));
        const r = Math.pow(2, -n),
          i = Math.floor(e.image.width * r),
          a = Math.floor(e.image.height * r),
          o = null !== t ? t.x : 0,
          s = null !== t ? t.y : 0;
        Q.setTexture2D(e, 0),
          _e.copyTexSubImage2D(_e.TEXTURE_2D, n, 0, 0, o, s, i, a),
          K.unbindTexture();
      }),
      (this.copyTextureToTexture = function (e, t, n = null, r = null, i = 0) {
        let a, o, s, l, c, u;
        !0 !== e.isTexture &&
          (console.warn(
            "WebGLRenderer: copyTextureToTexture function signature has changed."
          ),
          (r = arguments[0] || null),
          (e = arguments[1]),
          (t = arguments[2]),
          (i = arguments[3] || 0),
          (n = null)),
          null !== n
            ? ((a = n.max.x - n.min.x),
              (o = n.max.y - n.min.y),
              (s = n.min.x),
              (l = n.min.y))
            : ((a = e.image.width), (o = e.image.height), (s = 0), (l = 0)),
          null !== r ? ((c = r.x), (u = r.y)) : ((c = 0), (u = 0));
        const d = me.convert(t.format),
          h = me.convert(t.type);
        Q.setTexture2D(t, 0),
          _e.pixelStorei(_e.UNPACK_FLIP_Y_WEBGL, t.flipY),
          _e.pixelStorei(_e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, t.premultiplyAlpha),
          _e.pixelStorei(_e.UNPACK_ALIGNMENT, t.unpackAlignment);
        const f = _e.getParameter(_e.UNPACK_ROW_LENGTH),
          p = _e.getParameter(_e.UNPACK_IMAGE_HEIGHT),
          m = _e.getParameter(_e.UNPACK_SKIP_PIXELS),
          g = _e.getParameter(_e.UNPACK_SKIP_ROWS),
          v = _e.getParameter(_e.UNPACK_SKIP_IMAGES),
          _ = e.isCompressedTexture ? e.mipmaps[i] : e.image;
        _e.pixelStorei(_e.UNPACK_ROW_LENGTH, _.width),
          _e.pixelStorei(_e.UNPACK_IMAGE_HEIGHT, _.height),
          _e.pixelStorei(_e.UNPACK_SKIP_PIXELS, s),
          _e.pixelStorei(_e.UNPACK_SKIP_ROWS, l),
          e.isDataTexture
            ? _e.texSubImage2D(_e.TEXTURE_2D, i, c, u, a, o, d, h, _.data)
            : e.isCompressedTexture
            ? _e.compressedTexSubImage2D(
                _e.TEXTURE_2D,
                i,
                c,
                u,
                _.width,
                _.height,
                d,
                _.data
              )
            : _e.texSubImage2D(_e.TEXTURE_2D, i, c, u, a, o, d, h, _),
          _e.pixelStorei(_e.UNPACK_ROW_LENGTH, f),
          _e.pixelStorei(_e.UNPACK_IMAGE_HEIGHT, p),
          _e.pixelStorei(_e.UNPACK_SKIP_PIXELS, m),
          _e.pixelStorei(_e.UNPACK_SKIP_ROWS, g),
          _e.pixelStorei(_e.UNPACK_SKIP_IMAGES, v),
          0 === i && t.generateMipmaps && _e.generateMipmap(_e.TEXTURE_2D),
          K.unbindTexture();
      }),
      (this.copyTextureToTexture3D = function (
        e,
        t,
        n = null,
        r = null,
        i = 0
      ) {
        let a, o, s, l, c, u, d, h, f;
        !0 !== e.isTexture &&
          (console.warn(
            "WebGLRenderer: copyTextureToTexture3D function signature has changed."
          ),
          (n = arguments[0] || null),
          (r = arguments[1] || null),
          (e = arguments[2]),
          (t = arguments[3]),
          (i = arguments[4] || 0));
        const p = e.isCompressedTexture ? e.mipmaps[i] : e.image;
        null !== n
          ? ((a = n.max.x - n.min.x),
            (o = n.max.y - n.min.y),
            (s = n.max.z - n.min.z),
            (l = n.min.x),
            (c = n.min.y),
            (u = n.min.z))
          : ((a = p.width),
            (o = p.height),
            (s = p.depth),
            (l = 0),
            (c = 0),
            (u = 0)),
          null !== r
            ? ((d = r.x), (h = r.y), (f = r.z))
            : ((d = 0), (h = 0), (f = 0));
        const m = me.convert(t.format),
          g = me.convert(t.type);
        let v;
        if (t.isData3DTexture) Q.setTexture3D(t, 0), (v = _e.TEXTURE_3D);
        else {
          if (!t.isDataArrayTexture && !t.isCompressedArrayTexture)
            return void console.warn(
              "THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray."
            );
          Q.setTexture2DArray(t, 0), (v = _e.TEXTURE_2D_ARRAY);
        }
        _e.pixelStorei(_e.UNPACK_FLIP_Y_WEBGL, t.flipY),
          _e.pixelStorei(_e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, t.premultiplyAlpha),
          _e.pixelStorei(_e.UNPACK_ALIGNMENT, t.unpackAlignment);
        const _ = _e.getParameter(_e.UNPACK_ROW_LENGTH),
          x = _e.getParameter(_e.UNPACK_IMAGE_HEIGHT),
          y = _e.getParameter(_e.UNPACK_SKIP_PIXELS),
          S = _e.getParameter(_e.UNPACK_SKIP_ROWS),
          M = _e.getParameter(_e.UNPACK_SKIP_IMAGES);
        _e.pixelStorei(_e.UNPACK_ROW_LENGTH, p.width),
          _e.pixelStorei(_e.UNPACK_IMAGE_HEIGHT, p.height),
          _e.pixelStorei(_e.UNPACK_SKIP_PIXELS, l),
          _e.pixelStorei(_e.UNPACK_SKIP_ROWS, c),
          _e.pixelStorei(_e.UNPACK_SKIP_IMAGES, u),
          e.isDataTexture || e.isData3DTexture
            ? _e.texSubImage3D(v, i, d, h, f, a, o, s, m, g, p.data)
            : t.isCompressedArrayTexture
            ? _e.compressedTexSubImage3D(v, i, d, h, f, a, o, s, m, p.data)
            : _e.texSubImage3D(v, i, d, h, f, a, o, s, m, g, p),
          _e.pixelStorei(_e.UNPACK_ROW_LENGTH, _),
          _e.pixelStorei(_e.UNPACK_IMAGE_HEIGHT, x),
          _e.pixelStorei(_e.UNPACK_SKIP_PIXELS, y),
          _e.pixelStorei(_e.UNPACK_SKIP_ROWS, S),
          _e.pixelStorei(_e.UNPACK_SKIP_IMAGES, M),
          0 === i && t.generateMipmaps && _e.generateMipmap(v),
          K.unbindTexture();
      }),
      (this.initRenderTarget = function (e) {
        void 0 === Z.get(e).__webglFramebuffer && Q.setupRenderTarget(e);
      }),
      (this.initTexture = function (e) {
        e.isCubeTexture
          ? Q.setTextureCube(e, 0)
          : e.isData3DTexture
          ? Q.setTexture3D(e, 0)
          : e.isDataArrayTexture || e.isCompressedArrayTexture
          ? Q.setTexture2DArray(e, 0)
          : Q.setTexture2D(e, 0),
          K.unbindTexture();
      }),
      (this.resetState = function () {
        (y = 0), (S = 0), (M = null), K.reset(), ge.reset();
      }),
      typeof __THREE_DEVTOOLS__ < "u" &&
        __THREE_DEVTOOLS__.dispatchEvent(
          new CustomEvent("observe", { detail: this })
        );
  }
  get coordinateSystem() {
    return ri;
  }
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(e) {
    this._outputColorSpace = e;
    const t = this.getContext();
    (t.drawingBufferColorSpace = e === dd ? "display-p3" : "srgb"),
      (t.unpackColorSpace =
        $e.workingColorSpace === Pl ? "display-p3" : "srgb");
  }
}
class aT extends on {
  constructor() {
    super(),
      (this.isScene = !0),
      (this.type = "Scene"),
      (this.background = null),
      (this.environment = null),
      (this.fog = null),
      (this.backgroundBlurriness = 0),
      (this.backgroundIntensity = 1),
      (this.backgroundRotation = new fi()),
      (this.environmentIntensity = 1),
      (this.environmentRotation = new fi()),
      (this.overrideMaterial = null),
      typeof __THREE_DEVTOOLS__ < "u" &&
        __THREE_DEVTOOLS__.dispatchEvent(
          new CustomEvent("observe", { detail: this })
        );
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      null !== e.background && (this.background = e.background.clone()),
      null !== e.environment && (this.environment = e.environment.clone()),
      null !== e.fog && (this.fog = e.fog.clone()),
      (this.backgroundBlurriness = e.backgroundBlurriness),
      (this.backgroundIntensity = e.backgroundIntensity),
      this.backgroundRotation.copy(e.backgroundRotation),
      (this.environmentIntensity = e.environmentIntensity),
      this.environmentRotation.copy(e.environmentRotation),
      null !== e.overrideMaterial &&
        (this.overrideMaterial = e.overrideMaterial.clone()),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      null !== this.fog && (t.object.fog = this.fog.toJSON()),
      this.backgroundBlurriness > 0 &&
        (t.object.backgroundBlurriness = this.backgroundBlurriness),
      1 !== this.backgroundIntensity &&
        (t.object.backgroundIntensity = this.backgroundIntensity),
      (t.object.backgroundRotation = this.backgroundRotation.toArray()),
      1 !== this.environmentIntensity &&
        (t.object.environmentIntensity = this.environmentIntensity),
      (t.object.environmentRotation = this.environmentRotation.toArray()),
      t
    );
  }
}
class md extends Yi {
  constructor(e = [], t = [], n = 1, r = 0) {
    super(),
      (this.type = "PolyhedronGeometry"),
      (this.parameters = { vertices: e, indices: t, radius: n, detail: r });
    const i = [],
      a = [];
    function o(e, t, n, r) {
      const i = r + 1,
        a = [];
      for (let r = 0; r <= i; r++) {
        a[r] = [];
        const o = e.clone().lerp(n, r / i),
          s = t.clone().lerp(n, r / i),
          l = i - r;
        for (let e = 0; e <= l; e++)
          a[r][e] = 0 === e && r === i ? o : o.clone().lerp(s, e / l);
      }
      for (let e = 0; e < i; e++)
        for (let t = 0; t < 2 * (i - e) - 1; t++) {
          const n = Math.floor(t / 2);
          t % 2 == 0
            ? (s(a[e][n + 1]), s(a[e + 1][n]), s(a[e][n]))
            : (s(a[e][n + 1]), s(a[e + 1][n + 1]), s(a[e + 1][n]));
        }
    }
    function s(e) {
      i.push(e.x, e.y, e.z);
    }
    function l(t, n) {
      const r = 3 * t;
      (n.x = e[r + 0]), (n.y = e[r + 1]), (n.z = e[r + 2]);
    }
    function c(e, t, n, r) {
      r < 0 && 1 === e.x && (a[t] = e.x - 1),
        0 === n.x && 0 === n.z && (a[t] = r / 2 / Math.PI + 0.5);
    }
    function u(e) {
      return Math.atan2(e.z, -e.x);
    }
    function d(e) {
      return Math.atan2(-e.y, Math.sqrt(e.x * e.x + e.z * e.z));
    }
    (function (e) {
      const n = new F(),
        r = new F(),
        i = new F();
      for (let a = 0; a < t.length; a += 3)
        l(t[a + 0], n), l(t[a + 1], r), l(t[a + 2], i), o(n, r, i, e);
    })(r),
      (function (e) {
        const t = new F();
        for (let n = 0; n < i.length; n += 3)
          (t.x = i[n + 0]),
            (t.y = i[n + 1]),
            (t.z = i[n + 2]),
            t.normalize().multiplyScalar(e),
            (i[n + 0] = t.x),
            (i[n + 1] = t.y),
            (i[n + 2] = t.z);
      })(n),
      (function () {
        const e = new F();
        for (let t = 0; t < i.length; t += 3) {
          (e.x = i[t + 0]), (e.y = i[t + 1]), (e.z = i[t + 2]);
          const n = u(e) / 2 / Math.PI + 0.5,
            r = d(e) / Math.PI + 0.5;
          a.push(n, 1 - r);
        }
        (function () {
          const e = new F(),
            t = new F(),
            n = new F(),
            r = new F(),
            o = new Ve(),
            s = new Ve(),
            l = new Ve();
          for (let d = 0, h = 0; d < i.length; d += 9, h += 6) {
            e.set(i[d + 0], i[d + 1], i[d + 2]),
              t.set(i[d + 3], i[d + 4], i[d + 5]),
              n.set(i[d + 6], i[d + 7], i[d + 8]),
              o.set(a[h + 0], a[h + 1]),
              s.set(a[h + 2], a[h + 3]),
              l.set(a[h + 4], a[h + 5]),
              r.copy(e).add(t).add(n).divideScalar(3);
            const f = u(r);
            c(o, h + 0, e, f), c(s, h + 2, t, f), c(l, h + 4, n, f);
          }
        })(),
          (function () {
            for (let e = 0; e < a.length; e += 6) {
              const t = a[e + 0],
                n = a[e + 2],
                r = a[e + 4],
                i = Math.max(t, n, r),
                o = Math.min(t, n, r);
              i > 0.9 &&
                o < 0.1 &&
                (t < 0.2 && (a[e + 0] += 1),
                n < 0.2 && (a[e + 2] += 1),
                r < 0.2 && (a[e + 4] += 1));
            }
          })();
      })(),
      this.setAttribute("position", new Wn(i, 3)),
      this.setAttribute("normal", new Wn(i.slice(), 3)),
      this.setAttribute("uv", new Wn(a, 2)),
      0 === r ? this.computeVertexNormals() : this.normalizeNormals();
  }
  copy(e) {
    return (
      super.copy(e), (this.parameters = Object.assign({}, e.parameters)), this
    );
  }
  static fromJSON(e) {
    return new md(e.vertices, e.indices, e.radius, e.details);
  }
}
class gd extends md {
  constructor(e = 1, t = 0) {
    const n = (1 + Math.sqrt(5)) / 2;
    super(
      [
        -1,
        n,
        0,
        1,
        n,
        0,
        -1,
        -n,
        0,
        1,
        -n,
        0,
        0,
        -1,
        n,
        0,
        1,
        n,
        0,
        -1,
        -n,
        0,
        1,
        -n,
        n,
        0,
        -1,
        n,
        0,
        1,
        -n,
        0,
        -1,
        -n,
        0,
        1,
      ],
      [
        0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11,
        10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9,
        4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1,
      ],
      e,
      t
    ),
      (this.type = "IcosahedronGeometry"),
      (this.parameters = { radius: e, detail: t });
  }
  static fromJSON(e) {
    return new gd(e.radius, e.detail);
  }
}
class lT {
  constructor(e = !0) {
    (this.autoStart = e),
      (this.startTime = 0),
      (this.oldTime = 0),
      (this.elapsedTime = 0),
      (this.running = !1);
  }
  start() {
    (this.startTime = Pp()),
      (this.oldTime = this.startTime),
      (this.elapsedTime = 0),
      (this.running = !0);
  }
  stop() {
    this.getElapsedTime(), (this.running = !1), (this.autoStart = !1);
  }
  getElapsedTime() {
    return this.getDelta(), this.elapsedTime;
  }
  getDelta() {
    let e = 0;
    if (this.autoStart && !this.running) return this.start(), 0;
    if (this.running) {
      const t = Pp();
      (e = (t - this.oldTime) / 1e3),
        (this.oldTime = t),
        (this.elapsedTime += e);
    }
    return e;
  }
}
function Pp() {
  return (typeof performance > "u" ? Date : performance).now();
}
typeof __THREE_DEVTOOLS__ < "u" &&
  __THREE_DEVTOOLS__.dispatchEvent(
    new CustomEvent("register", { detail: { revision: sd } })
  ),
  typeof window < "u" &&
    (window.__THREE__
      ? console.warn("WARNING: Multiple instances of Three.js being imported.")
      : (window.__THREE__ = sd));
const uT =
    "\n// Classic Perlin 3D Noise \n// by Stefan Gustavson\n//\nvec4 permute(vec4 x) {\n    return mod(((x*34.0)+1.0)*x, 289.0);\n}\n\nvec4 taylorInvSqrt(vec4 r) {\n    return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nvec3 fade(vec3 t) {\n    return t*t*t*(t*(t*6.0-15.0)+10.0);\n}\n\nfloat cnoise(vec3 P) {\n    vec3 Pi0 = floor(P); // Integer part for indexing\n    vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1\n    Pi0 = mod(Pi0, 289.0);\n    Pi1 = mod(Pi1, 289.0);\n    vec3 Pf0 = fract(P); // Fractional part for interpolation\n    vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0\n    vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\n    vec4 iy = vec4(Pi0.yy, Pi1.yy);\n    vec4 iz0 = Pi0.zzzz;\n    vec4 iz1 = Pi1.zzzz;\n\n    vec4 ixy = permute(permute(ix) + iy);\n    vec4 ixy0 = permute(ixy + iz0);\n    vec4 ixy1 = permute(ixy + iz1);\n\n    vec4 gx0 = ixy0 / 7.0;\n    vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;\n    gx0 = fract(gx0);\n    vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\n    vec4 sz0 = step(gz0, vec4(0.0));\n    gx0 -= sz0 * (step(0.0, gx0) - 0.5);\n    gy0 -= sz0 * (step(0.0, gy0) - 0.5);\n\n    vec4 gx1 = ixy1 / 7.0;\n    vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;\n    gx1 = fract(gx1);\n    vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\n    vec4 sz1 = step(gz1, vec4(0.0));\n    gx1 -= sz1 * (step(0.0, gx1) - 0.5);\n    gy1 -= sz1 * (step(0.0, gy1) - 0.5);\n\n    vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);\n    vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);\n    vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);\n    vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);\n    vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);\n    vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);\n    vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);\n    vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);\n\n    vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\n    g000 *= norm0.x;\n    g010 *= norm0.y;\n    g100 *= norm0.z;\n    g110 *= norm0.w;\n    vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\n    g001 *= norm1.x;\n    g011 *= norm1.y;\n    g101 *= norm1.z;\n    g111 *= norm1.w;\n\n    float n000 = dot(g000, Pf0);\n    float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\n    float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\n    float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\n    float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\n    float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\n    float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\n    float n111 = dot(g111, Pf1);\n\n    vec3 fade_xyz = fade(Pf0);\n    vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\n    vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\n    float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); \n    return 2.2 * n_xyz;\n}\n",
  cT =
    "\nvec3 mod289(vec3 x) {\n    return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n  \nvec2 mod289(vec2 x) {\n    return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n  \nvec3 permute(vec3 x) {\n    return mod289(((x*34.0)+10.0)*x);\n}\n\nfloat snoise(vec2 v)\n{\n    const vec4 C = vec4(0.211324865405187,  // (3.0-sqrt(3.0))/6.0\n                        0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)\n                        -0.577350269189626,  // -1.0 + 2.0 * C.x\n                        0.024390243902439); // 1.0 / 41.0\n    // First corner\n    vec2 i  = floor(v + dot(v, C.yy) );\n    vec2 x0 = v -   i + dot(i, C.xx);\n\n    // Other corners\n    vec2 i1;\n    //i1.x = step( x0.y, x0.x ); // x0.x > x0.y ? 1.0 : 0.0\n    //i1.y = 1.0 - i1.x;\n    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);\n    // x0 = x0 - 0.0 + 0.0 * C.xx ;\n    // x1 = x0 - i1 + 1.0 * C.xx ;\n    // x2 = x0 - 1.0 + 2.0 * C.xx ;\n    vec4 x12 = x0.xyxy + C.xxzz;\n    x12.xy -= i1;\n\n    // Permutations\n    i = mod289(i); // Avoid truncation effects in permutation\n    vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))\n            + i.x + vec3(0.0, i1.x, 1.0 ));\n\n    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);\n    m = m*m ;\n    m = m*m ;\n\n    // Gradients: 41 points uniformly over a line, mapped onto a diamond.\n    // The ring size 17*17 = 289 is close to a multiple of 41 (41*7 = 287)\n\n    vec3 x = 2.0 * fract(p * C.www) - 1.0;\n    vec3 h = abs(x) - 0.5;\n    vec3 ox = floor(x + 0.5);\n    vec3 a0 = x - ox;\n\n    // Normalise gradients implicitly by scaling m\n    // Approximation of: m *= inversesqrt( a0*a0 + h*h );\n    m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );\n\n    // Compute final noise value at P\n    vec3 g;\n    g.x  = a0.x  * x0.x  + h.x  * x0.y;\n    g.yz = a0.yz * x12.xz + h.yz * x12.yw;\n    return 130.0 * dot(m, g);\n} \n",
  fT = `\nvarying vec2 vUv;\nvarying float vDisplacement;\nuniform float time;\nuniform float intensity;\n\n${uT}\n\nvoid main() {\n    vUv = uv;\n\n    vDisplacement = cnoise(position + vec3(2.0 * time));\n\n    vec3 newPosition = position + normal * (intensity * vDisplacement);\n\n    vec4 modelPosition = modelMatrix * vec4(newPosition, 1.0);\n    vec4 viewPosition = viewMatrix * modelPosition;\n    vec4 projectedPosition = projectionMatrix * viewPosition;\n\n    gl_Position = projectedPosition;\n}\n`,
  dT = `\nuniform float time;\nvarying vec2 vUv;\nvarying float vDisplacement;\nuniform vec4 colors[5];\n\n${cT}\n\nvec4 gradient5(float f, vec4 colors[5])\n{\n    // Calculate the interval between colors\n    float interval = 1.0 / 4.0;\n    \n    // Calculate the index of the color interval\n    int index = int(f / interval);\n    \n    // Calculate the relative position within the interval\n    float t = (f - float(index) * interval) / interval;\n    \n    // Interpolate between the two colors at the ends of the interval\n    vec4 color1 = colors[index];\n    vec4 color2 = colors[index + 1];\n    return mix(color1, color2, t);\n}\n\nvoid main() {\n    float noise1 = (snoise(vUv.xy * 2. + time * 0.1) + 1.) * .5;\n    float noise2 = (snoise(-vUv.xy * 2. + time * 0.1) + 1.) * .2;\n\n    vec4 color0 = gradient5(vUv.y, colors);\n    vec4 color1 = gradient5(min(noise1 + 0.5, 1.), colors);\n    vec4 color2 = gradient5(max(noise2 - 0.5, 0.), colors);\n\n    float s = (sin(time * 3.) +1. ) * 0.3;\n    vec4 color = mix(color0, mix(color1, color2, s), vDisplacement);\n\n    gl_FragColor = vec4(color.rgb * 1.15, color.a);\n}\n`,
  hT = [
    new st(1, 1, 1, 1),
    new st(0.3613067797729723, 0.4396571738310091, 0.5583403896257968, 1),
    new st(0.5906188409113381, 0.6444796819634361, 0.76052450467022, 1),
    new st(0.76052450467022, 0.7991027380100881, 0.85499260812105, 1),
    new st(1, 1, 1, 1),
  ];
class pT extends Bn {
  constructor() {
    const e = new di({
      vertexShader: fT,
      fragmentShader: dT,
      uniforms: {
        time: { value: 0 },
        intensity: { value: 0 },
        colors: { value: hT },
        blendValue: { value: 1 },
      },
      wireframe: !1,
    });
    super(new gd(2, 20), e);
  }
}
let mT = class {
  constructor() {
    (this.scene = new aT()),
      (this.renderer = new oT({
        antialias: !0,
        alpha: !0,
        preserveDrawingBuffer: !0,
      })),
      (this.scene.background = null),
      this.renderer.setPixelRatio(window.devicePixelRatio),
      (this.camera = new pn(57.4, 1, 1, 1e3)),
      (this.clock = new lT());
    const e = this.renderer.domElement,
      t = this.renderer.domElement.style;
    (t.width = "100%"),
      (t.height = "100%"),
      this.camera.position.set(0, 0, 50),
      new window.ResizeObserver(this.onResize.bind(this)).observe(e, {
        box: "content-box",
      }),
      (this.mesh = new pT()),
      this.mesh.scale.setScalar(12),
      this.scene.add(this.mesh);
  }
  mount(e) {
    e
      ? (e.prepend(this.renderer.domElement), this.onResize())
      : this.renderer.domElement.remove();
  }
  onResize() {
    const e = this.renderer.domElement;
    (this.camera.aspect = e.clientWidth / e.clientHeight),
      this.camera.updateProjectionMatrix(),
      this.renderer.setSize(e.clientWidth, e.clientHeight, !1);
  }
  start() {
    this.clock.start(), this.renderer.setAnimationLoop(this.update.bind(this));
  }
  stop() {
    this.clock.stop(), this.renderer.setAnimationLoop(null);
  }
  update() {
    const e = this.clock.getDelta();
    (this.mesh.material.uniforms.time.value = 0.1 * this.clock.elapsedTime),
      (this.mesh.rotation.y += 1e-4 * e),
      this.render();
  }
  render() {
    this.renderer.render(this.scene, this.camera);
  }
  dispose() {
    this.stop();
  }
};
const gT = () => {
  const e = ts.useMemo(() => new mT(), []);
  ts.useEffect(() => {
    const t = e;
    return (
      t.start(),
      () => {
        t.dispose();
      }
    );
  }, []);
  const t = ts.useCallback((t) => {
    e.mount(t);
  }, []);
  return fr.jsx("div", {
    style: { paddingTop: "100%", position: "relative" },
    children: fr.jsx("div", {
      ref: t,
      style: { position: "absolute", top: 0, right: 0, bottom: 0, left: 0 },
    }),
  });
};
function _T() {
  return fr.jsx("div", {
    style: {
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    children: fr.jsx("div", {
      style: { width: "min(100vmin, 700px)", height: "min(100vmin, 700px)" },
      children: fr.jsx(gT, {}),
    }),
  });
}
Ou.createRoot(document.getElementById("tempus-one-orb")).render(
  fr.jsx(H_.StrictMode, { children: fr.jsx(_T, {}) })
);
//# sourceMappingURL=orb-react-app.js.map

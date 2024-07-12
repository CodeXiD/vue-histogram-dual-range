import { unref as C, computed as N, ref as H, watch as A, getCurrentInstance as M, nextTick as O, defineComponent as I, toRefs as P, onUnmounted as E, openBlock as q, createElementBlock as z, normalizeStyle as F, createElementVNode as R, pushScopeId as W, popScopeId as U, Fragment as T, renderList as _, createVNode as D, isRef as J } from "vue";
function t(e, r) {
  return C(e);
}
function G(e) {
  return typeof e == "function" ? e() : C(e);
}
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const j = (e) => typeof e < "u";
function L(e, r) {
  function c(...l) {
    return new Promise((n, o) => {
      Promise.resolve(e(() => r.apply(this, l), { fn: r, thisArg: this, args: l })).then(n).catch(o);
    });
  }
  return c;
}
const Z = (e) => e();
function w(...e) {
  if (e.length === 2) {
    const [r, c] = e;
    r.value = c;
  }
  if (e.length === 3) {
    const [r, c, l] = e;
    r[c] = l;
  }
}
function K(e, r = {}) {
  const {
    method: c = "parseFloat",
    radix: l,
    nanToZero: n
  } = r;
  return N(() => {
    let o = G(e);
    return typeof o == "string" && (o = Number[c](o, l)), n && Number.isNaN(o) && (o = 0), o;
  });
}
function Q(e, r, c = {}) {
  const {
    eventFilter: l = Z,
    ...n
  } = c, o = L(
    l,
    r
  );
  let h, a, s;
  if (n.flush === "sync") {
    const u = H(!1);
    a = () => {
    }, h = (g) => {
      u.value = !0, g(), u.value = !1;
    }, s = A(
      e,
      (...g) => {
        u.value || o(...g);
      },
      n
    );
  } else {
    const u = [], g = H(0), p = H(0);
    a = () => {
      g.value = p.value;
    }, u.push(
      A(
        e,
        () => {
          p.value++;
        },
        { ...n, flush: "sync" }
      )
    ), h = (d) => {
      const m = p.value;
      d(), g.value += p.value - m;
    }, u.push(
      A(
        e,
        (...d) => {
          const m = g.value > 0 && g.value === p.value;
          g.value = 0, p.value = 0, !m && o(...d);
        },
        n
      )
    ), s = () => {
      u.forEach((d) => d());
    };
  }
  return { stop: s, ignoreUpdates: h, ignorePrevAsyncUpdates: a };
}
function X(e) {
  return JSON.parse(JSON.stringify(e));
}
function B(e, r, c, l = {}) {
  var n, o, h;
  const {
    clone: a = !1,
    passive: s = !1,
    eventName: u,
    deep: g = !1,
    defaultValue: p,
    shouldEmit: d
  } = l, m = M(), S = c || (m == null ? void 0 : m.emit) || ((n = m == null ? void 0 : m.$emit) == null ? void 0 : n.bind(m)) || ((h = (o = m == null ? void 0 : m.proxy) == null ? void 0 : o.$emit) == null ? void 0 : h.bind(m == null ? void 0 : m.proxy));
  let b = u;
  b = b || `update:${r.toString()}`;
  const x = (i) => a ? typeof a == "function" ? a(i) : X(i) : i, V = () => j(e[r]) ? x(e[r]) : p, $ = (i) => {
    d ? d(i) && S(b, i) : S(b, i);
  };
  if (s) {
    const i = V(), v = H(i);
    let f = !1;
    return A(
      () => e[r],
      (y) => {
        f || (f = !0, v.value = x(y), O(() => f = !1));
      }
    ), A(
      v,
      (y) => {
        !f && (y !== e[r] || g) && $(y);
      },
      { deep: g }
    ), v;
  } else
    return N({
      get() {
        return V();
      },
      set(i) {
        $(i);
      }
    });
}
const Y = (e) => (W("data-v-f556e555"), e = e(), U(), e), ee = { class: "sliders-control" }, te = /* @__PURE__ */ Y(() => /* @__PURE__ */ R("div", { class: "slider-track" }, null, -1)), re = ["value", "min", "max"], oe = ["value", "min", "max"], le = /* @__PURE__ */ I({
  __name: "DoubleRangeSlider",
  props: {
    modelValue: {
      type: Array,
      default: () => [0, 100]
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    sliderColor: {
      type: String,
      required: !0
    },
    sliderBorderColor: {
      type: String,
      required: !0
    },
    sliderHoverColor: {
      type: String,
      required: !0
    },
    sliderSize: {
      type: Number,
      required: !0
    },
    rangeColor: {
      type: String,
      required: !0
    },
    rangeActiveColor: {
      type: String,
      required: !0
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: r }) {
    const c = r, l = e, { sliderColor: n, rangeColor: o, rangeActiveColor: h, min: a, max: s } = P(l), u = B(l, "modelValue", c), g = ([i, v]) => {
      let f = i, y = v;
      return f >= y && (f = y - 1), y <= f && (y = f + 1), (f < t(a) || f > t(s)) && (f = t(a)), (y > t(s) || y < t(a)) && (y = t(s)), [f, y];
    }, { ignoreUpdates: p, stop: d } = Q(u, (i, v) => {
      i[0] === v[0] && i[1] === v[1] || w(u, g(i));
    });
    E(() => {
      d();
    });
    const m = H(), S = H(), b = H(), x = (i) => {
      let v = parseInt(i.target.value, 10);
      const f = t(u)[1];
      p(() => {
        w(u, g([v, f]));
      });
    }, V = (i) => {
      const v = t(u)[0];
      let f = parseInt(i.target.value, 10);
      p(() => {
        w(u, g([v, f]));
      });
    }, $ = N(() => {
      const i = t(u)[0] / t(s) * 100, v = t(u)[1] / t(s) * 100;
      return `linear-gradient(to right, ${t(o)} ${i}%, ${t(h)} ${i}%, ${t(h)} ${v}%, ${t(o)} ${v}%)`;
    });
    return (i, v) => (q(), z("div", {
      class: "double-range-slider",
      style: F({
        "--sliderColor": C(n),
        "--sliderBorderColor": e.sliderBorderColor,
        "--sliderHoverColor": e.sliderHoverColor,
        "--sliderSize": e.sliderSize,
        "--rangeColor": C(o),
        "--rangeActiveColor": C(h),
        "--rangeFillBg": $.value
      })
    }, [
      R("div", ee, [
        te,
        R("input", {
          ref_key: "fromSliderRef",
          ref: m,
          class: "fromSlider",
          type: "range",
          value: C(u)[0],
          min: C(a),
          max: C(s),
          onInput: x
        }, null, 40, re),
        R("input", {
          ref_key: "toSliderRef",
          ref: S,
          class: "toSlider",
          type: "range",
          value: C(u)[1],
          min: C(a),
          max: C(s),
          style: F({ background: b.value }),
          onInput: V
        }, null, 44, oe)
      ])
    ], 4));
  }
}), k = (e, r) => {
  const c = e.__vccOpts || e;
  for (const [l, n] of r)
    c[l] = n;
  return c;
}, ne = /* @__PURE__ */ k(le, [["__scopeId", "data-v-f556e555"]]);
function ie({ histogramDataMap: e, step: r, min: c, max: l }) {
  const n = [];
  for (let o = c; o <= l; o += r) {
    let h = 0, a = 0;
    for (let s = o; s < o + r && s <= l; s++)
      e.has(s) && (h += e.get(s), a++);
    a > 0 ? n.push(Number((h / a).toFixed(2))) : n.push(0);
  }
  return n;
}
const ae = ["x", "width", "height", "fill"], se = /* @__PURE__ */ I({
  __name: "Histogram",
  props: {
    histogramData: {
      type: Array,
      default: () => [0, 100]
    },
    histogramHeight: {
      type: Number,
      default: 83
    },
    histogramColumnCount: {
      type: Number,
      required: !0
    },
    min: {
      type: Number,
      required: !0
    },
    max: {
      type: Number,
      required: !0
    },
    histogramColumnColor: {
      type: String,
      required: !0
    },
    histogramColumnOffset: {
      type: Number,
      required: !0
    },
    sliderSize: {
      type: Number,
      required: !0
    }
  },
  setup(e) {
    const r = e, { histogramData: c, min: l, max: n, histogramColumnCount: o, histogramColumnOffset: h } = P(r), a = H(), s = N(() => {
      var d;
      if (t(a))
        return (d = t(a)) == null ? void 0 : d.clientWidth;
    }), u = N(() => {
      const d = t(s);
      return d ? t(K((d / t(o) - t(h)).toFixed(2))) : 0;
    }), g = N(() => {
      let d = /* @__PURE__ */ new Map();
      return t(c).forEach((m) => {
        d.set(m.value, m.count);
      }), d;
    }), p = N(() => {
      const d = Math.ceil(t(n) / t(o)), m = ie({
        histogramDataMap: t(g),
        step: d,
        min: t(l),
        max: t(n)
      }), S = Math.max.apply(Math, m);
      return m.map((x) => x / S * 100).map((x, V) => {
        let $ = 0;
        return V > 0 && ($ = t(u) * V + V * t(h)), {
          heightPercentage: x,
          x: $
        };
      });
    });
    return (d, m) => (q(), z("div", {
      class: "histogram",
      style: F({
        "--sliderSize": e.sliderSize
      })
    }, [
      (q(), z("svg", {
        ref_key: "svgHistogramRef",
        ref: a,
        style: F({ height: `${e.histogramHeight}px` }),
        xmlns: "http://www.w3.org/2000/svg"
      }, [
        (q(!0), z(T, null, _(p.value, (S, b) => (q(), z("rect", {
          key: b,
          x: S.x,
          y: "0",
          width: u.value,
          height: `${S.heightPercentage}%`,
          fill: e.histogramColumnColor
        }, null, 8, ae))), 128))
      ], 4))
    ], 4));
  }
}), ue = /* @__PURE__ */ k(se, [["__scopeId", "data-v-a4392c68"]]), ce = { class: "histogram-range-container" }, de = /* @__PURE__ */ I({
  __name: "VueHistogramDualRange",
  props: {
    modelValue: {
      type: Array,
      default: () => [0, 100]
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    histogramData: {
      type: Array,
      default: () => []
    },
    histogramColumnCount: {
      type: Number,
      default: 17
    },
    histogramHeight: {
      type: Number,
      default: 83
    },
    histogramColumnColor: {
      type: String,
      default: "#a3bbff"
    },
    histogramColumnOffset: {
      type: Number,
      default: 5
    },
    sliderColor: {
      type: String,
      default: "#3264fe"
    },
    sliderBorderColor: {
      type: String,
      default: "#577cec"
    },
    sliderHoverColor: {
      type: String,
      default: "#577cec"
    },
    sliderSize: {
      type: Number,
      default: 20
    },
    rangeColor: {
      type: String,
      default: "#dadae5"
    },
    rangeActiveColor: {
      type: String,
      default: "#3264fe"
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: r }) {
    const c = r, l = e, n = B(l, "modelValue", c), o = N(() => l.histogramColumnCount <= l.max ? l.histogramColumnCount : l.max);
    return (h, a) => (q(), z("div", ce, [
      D(ue, {
        "histogram-data": e.histogramData,
        "histogram-height": e.histogramHeight,
        "histogram-column-count": o.value,
        max: e.max,
        min: e.min,
        "histogram-column-color": e.histogramColumnColor,
        "histogram-column-offset": e.histogramColumnOffset,
        "slider-size": e.sliderSize
      }, null, 8, ["histogram-data", "histogram-height", "histogram-column-count", "max", "min", "histogram-column-color", "histogram-column-offset", "slider-size"]),
      D(ne, {
        modelValue: C(n),
        "onUpdate:modelValue": a[0] || (a[0] = (s) => J(n) ? n.value = s : null),
        min: e.min,
        max: e.max,
        "slider-color": e.sliderColor,
        "slider-border-color": e.sliderBorderColor,
        "slider-hover-color": e.sliderHoverColor,
        "slider-size": e.sliderSize,
        "range-color": e.rangeColor,
        "range-active-color": e.rangeActiveColor
      }, null, 8, ["modelValue", "min", "max", "slider-color", "slider-border-color", "slider-hover-color", "slider-size", "range-color", "range-active-color"])
    ]));
  }
}), ge = /* @__PURE__ */ k(de, [["__scopeId", "data-v-ed8a03ee"]]);
export {
  ge as default
};

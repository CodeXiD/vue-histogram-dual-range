import { unref as x, computed as N, ref as V, watch as H, getCurrentScope as L, onScopeDispose as Z, isReactive as j, getCurrentInstance as B, nextTick as K, onMounted as Q, defineComponent as W, toRefs as P, onUnmounted as k, openBlock as O, createElementBlock as z, normalizeStyle as M, createElementVNode as q, pushScopeId as X, popScopeId as Y, Fragment as ee, renderList as te, createVNode as E, isRef as re } from "vue";
function U(e) {
  return L() ? (Z(e), !0) : !1;
}
function u(e, t) {
  return t == null ? x(e) : x(e)[t];
}
function $(e) {
  return typeof e == "function" ? e() : x(e);
}
const oe = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const ne = (e) => typeof e < "u", ie = (e) => e != null, F = () => {
};
function le(e, t) {
  function l(...o) {
    return new Promise((s, r) => {
      Promise.resolve(e(() => t.apply(this, o), { fn: t, thisArg: this, args: o })).then(s).catch(r);
    });
  }
  return l;
}
const se = (e) => e();
function I(...e) {
  if (e.length === 2) {
    const [t, l] = e;
    t.value = l;
  }
  if (e.length === 3) {
    const [t, l, o] = e;
    t[l] = o;
  }
}
function ae(e, t = {}) {
  const {
    method: l = "parseFloat",
    radix: o,
    nanToZero: s
  } = t;
  return N(() => {
    let r = $(e);
    return typeof r == "string" && (r = Number[l](r, o)), s && Number.isNaN(r) && (r = 0), r;
  });
}
function T(e, t, l = {}) {
  const {
    eventFilter: o = se,
    ...s
  } = l, r = le(
    o,
    t
  );
  let g, a, i;
  if (s.flush === "sync") {
    const c = V(!1);
    a = () => {
    }, g = (n) => {
      c.value = !0, n(), c.value = !1;
    }, i = H(
      e,
      (...n) => {
        c.value || r(...n);
      },
      s
    );
  } else {
    const c = [], n = V(0), m = V(0);
    a = () => {
      n.value = m.value;
    }, c.push(
      H(
        e,
        () => {
          m.value++;
        },
        { ...s, flush: "sync" }
      )
    ), g = (y) => {
      const h = m.value;
      y(), n.value += m.value - h;
    }, c.push(
      H(
        e,
        (...y) => {
          const h = n.value > 0 && n.value === m.value;
          n.value = 0, m.value = 0, !h && r(...y);
        },
        s
      )
    ), i = () => {
      c.forEach((y) => y());
    };
  }
  return { stop: i, ignoreUpdates: g, ignorePrevAsyncUpdates: a };
}
function ue(e, t, l = {}) {
  let o;
  function s() {
    if (!o)
      return;
    const n = o;
    o = void 0, n();
  }
  function r(n) {
    o = n;
  }
  const g = (n, m) => (s(), t(n, m, r)), a = T(e, g, l), { ignoreUpdates: i } = a;
  return {
    ...a,
    trigger: () => {
      let n;
      return i(() => {
        n = g(ce(e), de(e));
      }), n;
    }
  };
}
function ce(e) {
  return j(e) ? e : Array.isArray(e) ? e.map((t) => $(t)) : $(e);
}
function de(e) {
  return Array.isArray(e) ? e.map(() => {
  }) : void 0;
}
function R(e) {
  var t;
  const l = $(e);
  return (t = l == null ? void 0 : l.$el) != null ? t : l;
}
const _ = oe ? window : void 0;
function me() {
  const e = V(!1), t = B();
  return t && Q(() => {
    e.value = !0;
  }, t), e;
}
function J(e) {
  const t = me();
  return N(() => (t.value, !!e()));
}
function ge(e) {
  return JSON.parse(JSON.stringify(e));
}
function fe(e, t, l = {}) {
  const { window: o = _, ...s } = l;
  let r;
  const g = J(() => o && "ResizeObserver" in o), a = () => {
    r && (r.disconnect(), r = void 0);
  }, i = N(() => Array.isArray(e) ? e.map((m) => R(m)) : [R(e)]), c = H(
    i,
    (m) => {
      if (a(), g.value && o) {
        r = new ResizeObserver(t);
        for (const y of m)
          y && r.observe(y, s);
      }
    },
    { immediate: !0, flush: "post" }
  ), n = () => {
    a(), c();
  };
  return U(n), {
    isSupported: g,
    stop: n
  };
}
function ve(e, t, l = {}) {
  const {
    root: o,
    rootMargin: s = "0px",
    threshold: r = 0.1,
    window: g = _,
    immediate: a = !0
  } = l, i = J(() => g && "IntersectionObserver" in g), c = N(() => {
    const S = $(e);
    return (Array.isArray(S) ? S : [S]).map(R).filter(ie);
  });
  let n = F;
  const m = V(a), y = i.value ? H(
    () => [c.value, R(o), m.value],
    ([S, A]) => {
      if (n(), !m.value || !S.length)
        return;
      const v = new IntersectionObserver(
        t,
        {
          root: R(A),
          rootMargin: s,
          threshold: r
        }
      );
      S.forEach((b) => b && v.observe(b)), n = () => {
        v.disconnect(), n = F;
      };
    },
    { immediate: a, flush: "post" }
  ) : F, h = () => {
    n(), y(), m.value = !1;
  };
  return U(h), {
    isSupported: i,
    isActive: m,
    pause() {
      n(), m.value = !1;
    },
    resume() {
      m.value = !0;
    },
    stop: h
  };
}
function G(e, t, l, o = {}) {
  var s, r, g;
  const {
    clone: a = !1,
    passive: i = !1,
    eventName: c,
    deep: n = !1,
    defaultValue: m,
    shouldEmit: y
  } = o, h = B(), S = l || (h == null ? void 0 : h.emit) || ((s = h == null ? void 0 : h.$emit) == null ? void 0 : s.bind(h)) || ((g = (r = h == null ? void 0 : h.proxy) == null ? void 0 : r.$emit) == null ? void 0 : g.bind(h == null ? void 0 : h.proxy));
  let A = c;
  A = A || `update:${t.toString()}`;
  const v = (d) => a ? typeof a == "function" ? a(d) : ge(d) : d, b = () => ne(e[t]) ? v(e[t]) : m, w = (d) => {
    y ? y(d) && S(A, d) : S(A, d);
  };
  if (i) {
    const d = b(), p = V(d);
    let f = !1;
    return H(
      () => e[t],
      (C) => {
        f || (f = !0, p.value = v(C), K(() => f = !1));
      }
    ), H(
      p,
      (C) => {
        !f && (C !== e[t] || n) && w(C);
      },
      { deep: n }
    ), p;
  } else
    return N({
      get() {
        return b();
      },
      set(d) {
        w(d);
      }
    });
}
const he = (e) => (X("data-v-64a45762"), e = e(), Y(), e), pe = { class: "sliders-control" }, ye = /* @__PURE__ */ he(() => /* @__PURE__ */ q("div", { class: "slider-track" }, null, -1)), Ce = ["value", "min", "max"], be = ["value", "min", "max"], Se = /* @__PURE__ */ W({
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
  setup(e, { emit: t }) {
    const l = t, o = e, { sliderColor: s, rangeColor: r, rangeActiveColor: g, min: a, max: i } = P(o), c = G(o, "modelValue", l), n = ([d, p]) => {
      let f = d, C = p;
      return f > C && (f = C - 1), C < f && (C = f + 1), (f < u(a) || f > u(i)) && (f = u(a)), (C > u(i) || C < u(a)) && (C = u(i)), [f, C];
    }, { ignoreUpdates: m, stop: y } = T(c, (d, p) => {
      d[0] === p[0] && d[1] === p[1] || I(c, n(d));
    });
    k(() => {
      y();
    });
    const h = V(), S = V(), A = V(), v = (d) => {
      let p = parseInt(d.target.value, 10);
      const f = u(c)[1];
      m(() => {
        I(c, n([p, f]));
      });
    }, b = (d) => {
      const p = u(c)[0];
      let f = parseInt(d.target.value, 10);
      m(() => {
        I(c, n([p, f]));
      });
    }, w = N(() => {
      const d = u(c)[0] / u(i) * 100, p = u(c)[1] / u(i) * 100;
      return `linear-gradient(to right, ${u(r)} ${d}%, ${u(g)} ${d}%, ${u(g)} ${p}%, ${u(r)} ${p}%)`;
    });
    return (d, p) => (O(), z("div", {
      class: "double-range-slider",
      style: M({
        "--sliderColor": x(s),
        "--sliderBorderColor": e.sliderBorderColor,
        "--sliderHoverColor": e.sliderHoverColor,
        "--sliderSize": e.sliderSize,
        "--rangeColor": x(r),
        "--rangeActiveColor": x(g),
        "--rangeFillBg": w.value
      })
    }, [
      q("div", pe, [
        ye,
        q("input", {
          ref_key: "fromSliderRef",
          ref: h,
          class: "fromSlider",
          type: "range",
          value: x(c)[0],
          min: x(a),
          max: x(i),
          onInput: v
        }, null, 40, Ce),
        q("input", {
          ref_key: "toSliderRef",
          ref: S,
          class: "toSlider",
          type: "range",
          value: x(c)[1],
          min: x(a),
          max: x(i),
          style: M({ background: A.value }),
          onInput: b
        }, null, 44, be)
      ])
    ], 4));
  }
}), D = (e, t) => {
  const l = e.__vccOpts || e;
  for (const [o, s] of t)
    l[o] = s;
  return l;
}, xe = /* @__PURE__ */ D(Se, [["__scopeId", "data-v-64a45762"]]);
function Ve({ histogramDataMap: e, step: t, min: l, max: o }) {
  const s = [];
  for (let r = l; r <= o; r += t) {
    let g = 0, a = 0;
    for (let i = r; i < r + t && i <= o; i++)
      e.has(i) && (g += e.get(i), a++);
    a > 0 ? s.push(Number((g / a).toFixed(2))) : s.push(0);
  }
  return s;
}
const Ae = ["x", "width", "height", "fill"], Ne = /* @__PURE__ */ W({
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
    histogramColumnAverages: {
      type: Array,
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
    const t = e, { histogramData: l, min: o, max: s, histogramColumnCount: r, histogramColumnOffset: g, histogramColumnAverages: a } = P(t), i = V(), c = V(0), n = ue(
      i,
      () => {
        var v;
        I(c, (v = u(i)) == null ? void 0 : v.clientWidth);
      }
    ), m = N(() => {
      const v = u(c);
      return v ? u(ae((v / u(r) - u(g)).toFixed(2))) : 0;
    }), y = fe(i, () => {
      n.trigger();
    }), h = ve(
      i,
      ([{ isIntersecting: v }]) => {
        v && n.trigger();
      }
    );
    k(() => {
      y.stop(), h.stop();
    });
    const S = N(() => {
      let v = /* @__PURE__ */ new Map();
      return u(l).forEach((b) => {
        v.set(b.value, b.count);
      }), v;
    }), A = N(() => {
      const v = Math.ceil(u(s) / u(r)), b = u(a) ? u(a) : Ve({
        histogramDataMap: u(S),
        step: v,
        min: u(o),
        max: u(s)
      }), w = Math.max.apply(Math, b);
      return b.map((p) => p / w * 100).map((p, f) => {
        let C = 0;
        return f > 0 && (C = u(m) * f + f * u(g)), {
          heightPercentage: p,
          x: C
        };
      });
    });
    return (v, b) => (O(), z("div", {
      class: "histogram",
      style: M({
        "--sliderSize": e.sliderSize
      })
    }, [
      (O(), z("svg", {
        ref_key: "svgHistogramRef",
        ref: i,
        style: M({ height: `${e.histogramHeight}px` }),
        xmlns: "http://www.w3.org/2000/svg"
      }, [
        (O(!0), z(ee, null, te(A.value, (w, d) => (O(), z("rect", {
          key: d,
          x: w.x,
          y: "0",
          width: m.value,
          height: `${w.heightPercentage}%`,
          fill: e.histogramColumnColor
        }, null, 8, Ae))), 128))
      ], 4))
    ], 4));
  }
}), we = /* @__PURE__ */ D(Ne, [["__scopeId", "data-v-4b5ad2b5"]]), He = { class: "histogram-range-container" }, Oe = /* @__PURE__ */ W({
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
    histogramColumnAverages: {
      type: Array,
      default: null
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
  setup(e, { emit: t }) {
    const l = t, o = e, s = G(o, "modelValue", l), r = N(() => o.histogramColumnCount <= o.max ? o.histogramColumnCount : o.max);
    return (g, a) => (O(), z("div", He, [
      E(we, {
        "histogram-data": e.histogramData,
        "histogram-height": e.histogramHeight,
        "histogram-column-count": r.value,
        "histogram-column-averages": e.histogramColumnAverages,
        max: e.max,
        min: e.min,
        "histogram-column-color": e.histogramColumnColor,
        "histogram-column-offset": e.histogramColumnOffset,
        "slider-size": e.sliderSize
      }, null, 8, ["histogram-data", "histogram-height", "histogram-column-count", "histogram-column-averages", "max", "min", "histogram-column-color", "histogram-column-offset", "slider-size"]),
      E(xe, {
        modelValue: x(s),
        "onUpdate:modelValue": a[0] || (a[0] = (i) => re(s) ? s.value = i : null),
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
}), Re = /* @__PURE__ */ D(Oe, [["__scopeId", "data-v-75c20065"]]);
export {
  Re as default
};
//# sourceMappingURL=vue-histogram-dual-range-lib.js.map

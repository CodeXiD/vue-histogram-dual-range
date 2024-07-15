import { unref as x, computed as w, ref as N, watch as H, getCurrentScope as L, onScopeDispose as Z, isReactive as j, getCurrentInstance as B, nextTick as K, onMounted as Q, defineComponent as W, toRefs as P, onUnmounted as k, openBlock as O, createElementBlock as z, normalizeStyle as M, createElementVNode as I, pushScopeId as X, popScopeId as Y, Fragment as ee, renderList as te, createVNode as E, isRef as re } from "vue";
function U(e) {
  return L() ? (Z(e), !0) : !1;
}
function c(e, t) {
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
function q(...e) {
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
  return w(() => {
    let r = $(e);
    return typeof r == "string" && (r = Number[l](r, o)), s && Number.isNaN(r) && (r = 0), r;
  });
}
function _(e, t, l = {}) {
  const {
    eventFilter: o = se,
    ...s
  } = l, r = le(
    o,
    t
  );
  let m, i, a;
  if (s.flush === "sync") {
    const d = N(!1);
    i = () => {
    }, m = (n) => {
      d.value = !0, n(), d.value = !1;
    }, a = H(
      e,
      (...n) => {
        d.value || r(...n);
      },
      s
    );
  } else {
    const d = [], n = N(0), f = N(0);
    i = () => {
      n.value = f.value;
    }, d.push(
      H(
        e,
        () => {
          f.value++;
        },
        { ...s, flush: "sync" }
      )
    ), m = (y) => {
      const h = f.value;
      y(), n.value += f.value - h;
    }, d.push(
      H(
        e,
        (...y) => {
          const h = n.value > 0 && n.value === f.value;
          n.value = 0, f.value = 0, !h && r(...y);
        },
        s
      )
    ), a = () => {
      d.forEach((y) => y());
    };
  }
  return { stop: a, ignoreUpdates: m, ignorePrevAsyncUpdates: i };
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
  const m = (n, f) => (s(), t(n, f, r)), i = _(e, m, l), { ignoreUpdates: a } = i;
  return {
    ...i,
    trigger: () => {
      let n;
      return a(() => {
        n = m(ce(e), de(e));
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
const T = oe ? window : void 0;
function me() {
  const e = N(!1), t = B();
  return t && Q(() => {
    e.value = !0;
  }, t), e;
}
function J(e) {
  const t = me();
  return w(() => (t.value, !!e()));
}
function fe(e) {
  return JSON.parse(JSON.stringify(e));
}
function ge(e, t, l = {}) {
  const { window: o = T, ...s } = l;
  let r;
  const m = J(() => o && "ResizeObserver" in o), i = () => {
    r && (r.disconnect(), r = void 0);
  }, a = w(() => Array.isArray(e) ? e.map((f) => R(f)) : [R(e)]), d = H(
    a,
    (f) => {
      if (i(), m.value && o) {
        r = new ResizeObserver(t);
        for (const y of f)
          y && r.observe(y, s);
      }
    },
    { immediate: !0, flush: "post" }
  ), n = () => {
    i(), d();
  };
  return U(n), {
    isSupported: m,
    stop: n
  };
}
function ve(e, t, l = {}) {
  const {
    root: o,
    rootMargin: s = "0px",
    threshold: r = 0.1,
    window: m = T,
    immediate: i = !0
  } = l, a = J(() => m && "IntersectionObserver" in m), d = w(() => {
    const b = $(e);
    return (Array.isArray(b) ? b : [b]).map(R).filter(ie);
  });
  let n = F;
  const f = N(i), y = a.value ? H(
    () => [d.value, R(o), f.value],
    ([b, g]) => {
      if (n(), !f.value || !b.length)
        return;
      const C = new IntersectionObserver(
        t,
        {
          root: R(g),
          rootMargin: s,
          threshold: r
        }
      );
      b.forEach((V) => V && C.observe(V)), n = () => {
        C.disconnect(), n = F;
      };
    },
    { immediate: i, flush: "post" }
  ) : F, h = () => {
    n(), y(), f.value = !1;
  };
  return U(h), {
    isSupported: a,
    isActive: f,
    pause() {
      n(), f.value = !1;
    },
    resume() {
      f.value = !0;
    },
    stop: h
  };
}
function G(e, t, l, o = {}) {
  var s, r, m;
  const {
    clone: i = !1,
    passive: a = !1,
    eventName: d,
    deep: n = !1,
    defaultValue: f,
    shouldEmit: y
  } = o, h = B(), b = l || (h == null ? void 0 : h.emit) || ((s = h == null ? void 0 : h.$emit) == null ? void 0 : s.bind(h)) || ((m = (r = h == null ? void 0 : h.proxy) == null ? void 0 : r.$emit) == null ? void 0 : m.bind(h == null ? void 0 : h.proxy));
  let g = d;
  g = g || `update:${t.toString()}`;
  const C = (u) => i ? typeof i == "function" ? i(u) : fe(u) : u, V = () => ne(e[t]) ? C(e[t]) : f, A = (u) => {
    y ? y(u) && b(g, u) : b(g, u);
  };
  if (a) {
    const u = V(), p = N(u);
    let v = !1;
    return H(
      () => e[t],
      (S) => {
        v || (v = !0, p.value = C(S), K(() => v = !1));
      }
    ), H(
      p,
      (S) => {
        !v && (S !== e[t] || n) && A(S);
      },
      { deep: n }
    ), p;
  } else
    return w({
      get() {
        return V();
      },
      set(u) {
        A(u);
      }
    });
}
const he = (e) => (X("data-v-f556e555"), e = e(), Y(), e), pe = { class: "sliders-control" }, ye = /* @__PURE__ */ he(() => /* @__PURE__ */ I("div", { class: "slider-track" }, null, -1)), Ce = ["value", "min", "max"], be = ["value", "min", "max"], Se = /* @__PURE__ */ W({
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
    const l = t, o = e, { sliderColor: s, rangeColor: r, rangeActiveColor: m, min: i, max: a } = P(o), d = G(o, "modelValue", l), n = ([u, p]) => {
      let v = u, S = p;
      return v >= S && (v = S - 1), S <= v && (S = v + 1), (v < c(i) || v > c(a)) && (v = c(i)), (S > c(a) || S < c(i)) && (S = c(a)), [v, S];
    }, { ignoreUpdates: f, stop: y } = _(d, (u, p) => {
      u[0] === p[0] && u[1] === p[1] || q(d, n(u));
    });
    k(() => {
      y();
    });
    const h = N(), b = N(), g = N(), C = (u) => {
      let p = parseInt(u.target.value, 10);
      const v = c(d)[1];
      f(() => {
        q(d, n([p, v]));
      });
    }, V = (u) => {
      const p = c(d)[0];
      let v = parseInt(u.target.value, 10);
      f(() => {
        q(d, n([p, v]));
      });
    }, A = w(() => {
      const u = c(d)[0] / c(a) * 100, p = c(d)[1] / c(a) * 100;
      return `linear-gradient(to right, ${c(r)} ${u}%, ${c(m)} ${u}%, ${c(m)} ${p}%, ${c(r)} ${p}%)`;
    });
    return (u, p) => (O(), z("div", {
      class: "double-range-slider",
      style: M({
        "--sliderColor": x(s),
        "--sliderBorderColor": e.sliderBorderColor,
        "--sliderHoverColor": e.sliderHoverColor,
        "--sliderSize": e.sliderSize,
        "--rangeColor": x(r),
        "--rangeActiveColor": x(m),
        "--rangeFillBg": A.value
      })
    }, [
      I("div", pe, [
        ye,
        I("input", {
          ref_key: "fromSliderRef",
          ref: h,
          class: "fromSlider",
          type: "range",
          value: x(d)[0],
          min: x(i),
          max: x(a),
          onInput: C
        }, null, 40, Ce),
        I("input", {
          ref_key: "toSliderRef",
          ref: b,
          class: "toSlider",
          type: "range",
          value: x(d)[1],
          min: x(i),
          max: x(a),
          style: M({ background: g.value }),
          onInput: V
        }, null, 44, be)
      ])
    ], 4));
  }
}), D = (e, t) => {
  const l = e.__vccOpts || e;
  for (const [o, s] of t)
    l[o] = s;
  return l;
}, xe = /* @__PURE__ */ D(Se, [["__scopeId", "data-v-f556e555"]]);
function Ve({ histogramDataMap: e, step: t, min: l, max: o }) {
  const s = [];
  for (let r = l; r <= o; r += t) {
    let m = 0, i = 0;
    for (let a = r; a < r + t && a <= o; a++)
      e.has(a) && (m += e.get(a), i++);
    i > 0 ? s.push(Number((m / i).toFixed(2))) : s.push(0);
  }
  return s;
}
const Ne = ["x", "width", "height", "fill"], we = /* @__PURE__ */ W({
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
    const t = e, { histogramData: l, min: o, max: s, histogramColumnCount: r, histogramColumnOffset: m } = P(t), i = N(), a = N(0), d = ue(
      i,
      () => {
        var g;
        q(a, (g = c(i)) == null ? void 0 : g.clientWidth);
      }
    ), n = w(() => {
      const g = c(a);
      return g ? c(ae((g / c(r) - c(m)).toFixed(2))) : 0;
    }), f = ge(i, () => {
      d.trigger();
    }), y = ve(
      i,
      ([{ isIntersecting: g }]) => {
        g && d.trigger();
      }
    );
    k(() => {
      f.stop(), y.stop();
    });
    const h = w(() => {
      let g = /* @__PURE__ */ new Map();
      return c(l).forEach((C) => {
        g.set(C.value, C.count);
      }), g;
    }), b = w(() => {
      const g = Math.ceil(c(s) / c(r)), C = Ve({
        histogramDataMap: c(h),
        step: g,
        min: c(o),
        max: c(s)
      }), V = Math.max.apply(Math, C);
      return C.map((u) => u / V * 100).map((u, p) => {
        let v = 0;
        return p > 0 && (v = c(n) * p + p * c(m)), {
          heightPercentage: u,
          x: v
        };
      });
    });
    return (g, C) => (O(), z("div", {
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
        (O(!0), z(ee, null, te(b.value, (V, A) => (O(), z("rect", {
          key: A,
          x: V.x,
          y: "0",
          width: n.value,
          height: `${V.heightPercentage}%`,
          fill: e.histogramColumnColor
        }, null, 8, Ne))), 128))
      ], 4))
    ], 4));
  }
}), Ae = /* @__PURE__ */ D(we, [["__scopeId", "data-v-994b0234"]]), He = { class: "histogram-range-container" }, Oe = /* @__PURE__ */ W({
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
  setup(e, { emit: t }) {
    const l = t, o = e, s = G(o, "modelValue", l), r = w(() => o.histogramColumnCount <= o.max ? o.histogramColumnCount : o.max);
    return (m, i) => (O(), z("div", He, [
      E(Ae, {
        "histogram-data": e.histogramData,
        "histogram-height": e.histogramHeight,
        "histogram-column-count": r.value,
        max: e.max,
        min: e.min,
        "histogram-column-color": e.histogramColumnColor,
        "histogram-column-offset": e.histogramColumnOffset,
        "slider-size": e.sliderSize
      }, null, 8, ["histogram-data", "histogram-height", "histogram-column-count", "max", "min", "histogram-column-color", "histogram-column-offset", "slider-size"]),
      E(xe, {
        modelValue: x(s),
        "onUpdate:modelValue": i[0] || (i[0] = (a) => re(s) ? s.value = a : null),
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
}), Re = /* @__PURE__ */ D(Oe, [["__scopeId", "data-v-ed8a03ee"]]);
export {
  Re as default
};

import { ref as O, watch as R, computed as V, onMounted as bt, withDirectives as Kt, openBlock as k, createElementBlock as E, createElementVNode as z, normalizeStyle as L, normalizeClass as Pe, createCommentVNode as pe, unref as T, renderSlot as ee, normalizeProps as Ae, guardReactiveProps as Ne, createTextVNode as ot, toDisplayString as it, vShow as Jt, getCurrentScope as Qt, onScopeDispose as eo, isReactive as to, getCurrentInstance as $t, nextTick as _t, shallowReactive as oo, defineComponent as le, toRefs as St, onUnmounted as Ct, createBlock as Me, pushScopeId as io, popScopeId as no, withScopeId as ro, resolveComponent as We, withKeys as so, Fragment as Tt, mergeProps as ao, withCtx as ye, createVNode as Oe, useSlots as Pt, renderList as lo, createSlots as At, isRef as uo } from "vue";
const co = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [i, n] of t)
    o[i] = n;
  return o;
}, po = ["dir"], ho = ["value", "step", "min", "max"], fo = ["value", "step", "min", "max"], mo = {
  __name: "VueDoubleRangeInput",
  props: {
    min: { type: [Number, String], default: 0 },
    max: { type: [Number, String], default: 100 },
    minValue: { type: [Number, String], default: 25 },
    maxValue: { type: [Number, String], default: 75 },
    dir: { type: String, default: "ltr" },
    step: { type: [Number, String], default: null },
    color: { type: String, default: "#2497E3" },
    trackColor: { type: String, default: "#cccccc" },
    trackHeight: { type: String, default: "9px" },
    trackRadius: { type: String, default: "9999px" },
    handlerColor: { type: String, default: "#2497E3" },
    handlerRadius: { type: String, default: "9999px" },
    handlerWidth: { type: String, default: "24px" },
    handlerHeight: { type: String, default: "24px" },
    pushOnTouch: { type: Boolean, default: !0 },
    showNumbers: { type: Boolean, default: !0 }
  },
  emits: ["update:minValue", "update:maxValue"],
  setup(e, { emit: t }) {
    const o = e, i = O("uc" + Math.floor(Math.random() * 1e4)), n = o.handlerHeight.match(/(\d+)/)[0], r = o.trackHeight.match(/(\d+)/)[0], s = O(!0), a = O(), l = O(o.min), u = O(o.max), d = O(o.minValue), p = O(o.maxValue);
    R(() => o.min, (c) => {
      l.value = c, d.value = c, t("update:minValue", c), s.value = l.value != u.value;
    }), R(() => o.max, (c) => {
      u.value = c, p.value = c, t("update:maxValue", c), s.value = l.value != u.value;
    }), R(() => o.minValue, (c) => {
      d.value = c, h(c), m(), d.value > o.max - o.max * (1 / 15) && (a.value = "dri_min_value");
    }), R(() => o.maxValue, (c) => {
      p.value = c, g(c), m(), p.value < o.max / 15 && (a.value = "dri_max_value");
    });
    function m() {
      t("update:maxValue", p.value), t("update:minValue", d.value);
    }
    R(d, (c) => {
      h(c);
    });
    function h(c) {
      parseInt(c) > parseInt(p.value) && (o.pushOnTouch ? p.value = c : d.value = p.value), (c == null || c == "" || parseInt(c) < l.value) && (d.value = l.value);
    }
    R(p, (c) => {
      g(c);
    });
    function g(c) {
      parseInt(c) < parseInt(d.value) && (o.pushOnTouch ? d.value = c : p.value = d.value), (c == null || c == "" || parseInt(c) > u.value) && (p.value = u.value);
    }
    const v = V(() => {
      const c = p.value - l.value, f = d.value - l.value, y = u.value - l.value;
      return c / y * 100 - f / y * 100 + "%";
    }), w = V(() => {
      const c = d.value - l.value, f = u.value - l.value;
      return c / f * 100 + "%";
    });
    return bt(() => {
      document.querySelectorAll("input[type=range]." + i.value).forEach((c) => {
        c.style.setProperty("--handlerColor", o.handlerColor), c.style.setProperty("--handlerRadius", o.handlerRadius), c.style.setProperty("--handlerWidth", o.handlerWidth), c.style.setProperty("--handlerHeight", o.handlerHeight), c.style.setProperty("--trackHeight", o.trackHeight), c.style.setProperty("--trackColor", o.trackColor), c.style.setProperty("--trackRadius", o.trackRadius);
      });
    }), (c, f) => Kt((k(), E("div", {
      class: "dri-container",
      dir: e.dir.toLowerCase() == "ltr" ? "ltr" : "rtl"
    }, [
      z("div", {
        class: "dri-scroll",
        style: L([{ backgroundColor: e.trackColor }, { height: o.trackHeight }, { borderRadius: o.trackRadius }])
      }, [
        z("input", {
          type: "range",
          id: "dri_min_value",
          name: "dri_min_value",
          class: Pe(["dri-input", [i.value, e.dir.toLowerCase() == "ltr" ? "dri-left-0" : "dri-right-0", a.value == "dri_min_value" ? "dri-z-10" : "dri-z-1"]]),
          value: d.value,
          onInput: f[0] || (f[0] = (y) => d.value = y.target.value),
          onChange: f[1] || (f[1] = (y) => t("update:minValue", y.target.value)),
          onMouseenter: f[2] || (f[2] = (y) => a.value = y.target.id),
          step: e.step,
          min: l.value,
          max: u.value
        }, null, 42, ho),
        z("input", {
          type: "range",
          id: "dri_max_value",
          name: "dri_max_value",
          class: Pe(["dri-input", [i.value, e.dir.toLowerCase() == "ltr" ? "dri-left-0" : "dri-right-0", a.value == "dri_max_value" ? "dri-z-10" : "dri-z-1"]]),
          value: p.value,
          onInput: f[3] || (f[3] = (y) => p.value = y.target.value),
          onChange: f[4] || (f[4] = (y) => t("update:maxValue", y.target.value)),
          onMouseenter: f[5] || (f[5] = (y) => a.value = y.target.id),
          step: e.step,
          min: l.value,
          max: u.value
        }, null, 42, fo),
        z("div", null, [
          e.dir.toLowerCase() == "ltr" ? (k(), E("div", {
            key: 0,
            class: "in-between",
            style: L([{ width: v.value }, { left: w.value }, { backgroundColor: o.color }, { height: o.trackHeight }])
          }, null, 4)) : pe("", !0),
          e.dir.toLowerCase() != "ltr" ? (k(), E("div", {
            key: 1,
            class: "in-between",
            style: L([{ width: v.value }, { right: w.value }, { backgroundColor: o.color }, { height: o.trackHeight }])
          }, null, 4)) : pe("", !0)
        ])
      ], 4),
      e.showNumbers ? (k(), E("div", {
        key: 0,
        class: "dri-numbers",
        style: L([{ marginTop: Math.max(0, (T(n) - T(r)) / 2) + "px" }])
      }, [
        z("span", null, [
          ee(c.$slots, "from", Ae(Ne({ minValueRef: d.value })), () => [
            ot("From: " + it(d.value), 1)
          ], !0)
        ]),
        z("span", null, [
          ee(c.$slots, "to", Ae(Ne({ maxValueRef: p.value })), () => [
            ot("To: " + it(p.value), 1)
          ], !0)
        ])
      ], 4)) : pe("", !0)
    ], 8, po)), [
      [Jt, s.value]
    ]);
  }
}, go = /* @__PURE__ */ co(mo, [["__scopeId", "data-v-ee2bbb49"]]);
function Nt(e) {
  return Qt() ? (eo(e), !0) : !1;
}
function _(e, t) {
  return t == null ? T(e) : T(e)[t];
}
function we(e) {
  return typeof e == "function" ? e() : T(e);
}
const vo = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const yo = (e) => typeof e < "u", wo = (e) => e != null, Ve = () => {
};
function xo(e, t) {
  function o(...i) {
    return new Promise((n, r) => {
      Promise.resolve(e(() => t.apply(this, i), { fn: t, thisArg: this, args: i })).then(n).catch(r);
    });
  }
  return o;
}
const bo = (e) => e();
function Ce(...e) {
  if (e.length === 2) {
    const [t, o] = e;
    t.value = o;
  }
  if (e.length === 3) {
    const [t, o, i] = e;
    t[o] = i;
  }
}
function $o(e, t = {}) {
  const {
    method: o = "parseFloat",
    radix: i,
    nanToZero: n
  } = t;
  return V(() => {
    let r = we(e);
    return typeof r == "string" && (r = Number[o](r, i)), n && Number.isNaN(r) && (r = 0), r;
  });
}
function Ot(e, t, o = {}) {
  const {
    eventFilter: i = bo,
    ...n
  } = o, r = xo(
    i,
    t
  );
  let s, a, l;
  if (n.flush === "sync") {
    const u = O(!1);
    a = () => {
    }, s = (d) => {
      u.value = !0, d(), u.value = !1;
    }, l = R(
      e,
      (...d) => {
        u.value || r(...d);
      },
      n
    );
  } else {
    const u = [], d = O(0), p = O(0);
    a = () => {
      d.value = p.value;
    }, u.push(
      R(
        e,
        () => {
          p.value++;
        },
        { ...n, flush: "sync" }
      )
    ), s = (m) => {
      const h = p.value;
      m(), d.value += p.value - h;
    }, u.push(
      R(
        e,
        (...m) => {
          const h = d.value > 0 && d.value === p.value;
          d.value = 0, p.value = 0, !h && r(...m);
        },
        n
      )
    ), l = () => {
      u.forEach((m) => m());
    };
  }
  return { stop: l, ignoreUpdates: s, ignorePrevAsyncUpdates: a };
}
function _o(e, t, o = {}) {
  let i;
  function n() {
    if (!i)
      return;
    const d = i;
    i = void 0, d();
  }
  function r(d) {
    i = d;
  }
  const s = (d, p) => (n(), t(d, p, r)), a = Ot(e, s, o), { ignoreUpdates: l } = a;
  return {
    ...a,
    trigger: () => {
      let d;
      return l(() => {
        d = s(So(e), Co(e));
      }), d;
    }
  };
}
function So(e) {
  return to(e) ? e : Array.isArray(e) ? e.map((t) => we(t)) : we(e);
}
function Co(e) {
  return Array.isArray(e) ? e.map(() => {
  }) : void 0;
}
function he(e) {
  var t;
  const o = we(e);
  return (t = o == null ? void 0 : o.$el) != null ? t : o;
}
const zt = vo ? window : void 0;
function To() {
  const e = O(!1), t = $t();
  return t && bt(() => {
    e.value = !0;
  }, t), e;
}
function kt(e) {
  const t = To();
  return V(() => (t.value, !!e()));
}
function Po(e) {
  return JSON.parse(JSON.stringify(e));
}
function Ao(e, t, o = {}) {
  const { window: i = zt, ...n } = o;
  let r;
  const s = kt(() => i && "ResizeObserver" in i), a = () => {
    r && (r.disconnect(), r = void 0);
  }, l = V(() => Array.isArray(e) ? e.map((p) => he(p)) : [he(e)]), u = R(
    l,
    (p) => {
      if (a(), s.value && i) {
        r = new ResizeObserver(t);
        for (const m of p)
          m && r.observe(m, n);
      }
    },
    { immediate: !0, flush: "post" }
  ), d = () => {
    a(), u();
  };
  return Nt(d), {
    isSupported: s,
    stop: d
  };
}
function No(e, t, o = {}) {
  const {
    root: i,
    rootMargin: n = "0px",
    threshold: r = 0.1,
    window: s = zt,
    immediate: a = !0
  } = o, l = kt(() => s && "IntersectionObserver" in s), u = V(() => {
    const g = we(e);
    return (Array.isArray(g) ? g : [g]).map(he).filter(wo);
  });
  let d = Ve;
  const p = O(a), m = l.value ? R(
    () => [u.value, he(i), p.value],
    ([g, v]) => {
      if (d(), !p.value || !g.length)
        return;
      const w = new IntersectionObserver(
        t,
        {
          root: he(v),
          rootMargin: n,
          threshold: r
        }
      );
      g.forEach((c) => c && w.observe(c)), d = () => {
        w.disconnect(), d = Ve;
      };
    },
    { immediate: a, flush: "post" }
  ) : Ve, h = () => {
    d(), m(), p.value = !1;
  };
  return Nt(h), {
    isSupported: l,
    isActive: p,
    pause() {
      d(), p.value = !1;
    },
    resume() {
      p.value = !0;
    },
    stop: h
  };
}
function Oo(e, t) {
  const i = oo(/* @__PURE__ */ new Map()), n = (...d) => JSON.stringify(d), r = (d, ...p) => (i.set(d, e(...p)), i.get(d)), s = (...d) => r(n(...d), ...d), a = (...d) => {
    i.delete(n(...d));
  }, l = () => {
    i.clear();
  }, u = (...d) => {
    const p = n(...d);
    return i.has(p) ? i.get(p) : r(p, ...d);
  };
  return u.load = s, u.delete = a, u.clear = l, u.generateKey = n, u.cache = i, u;
}
function Ht(e, t, o, i = {}) {
  var n, r, s;
  const {
    clone: a = !1,
    passive: l = !1,
    eventName: u,
    deep: d = !1,
    defaultValue: p,
    shouldEmit: m
  } = i, h = $t(), g = o || (h == null ? void 0 : h.emit) || ((n = h == null ? void 0 : h.$emit) == null ? void 0 : n.bind(h)) || ((s = (r = h == null ? void 0 : h.proxy) == null ? void 0 : r.$emit) == null ? void 0 : s.bind(h == null ? void 0 : h.proxy));
  let v = u;
  v = v || `update:${t.toString()}`;
  const w = (y) => a ? typeof a == "function" ? a(y) : Po(y) : y, c = () => yo(e[t]) ? w(e[t]) : p, f = (y) => {
    m ? m(y) && g(v, y) : g(v, y);
  };
  if (l) {
    const y = c(), $ = O(y);
    let x = !1;
    return R(
      () => e[t],
      (S) => {
        x || (x = !0, $.value = w(S), _t(() => x = !1));
      }
    ), R(
      $,
      (S) => {
        !x && (S !== e[t] || d) && f(S);
      },
      { deep: d }
    ), $;
  } else
    return V({
      get() {
        return c();
      },
      set(y) {
        f(y);
      }
    });
}
const zo = /* @__PURE__ */ le({
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
    },
    rangeHeight: {
      type: String,
      required: !0
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = t, i = e, { sliderColor: n, rangeColor: r, rangeActiveColor: s, min: a, max: l } = St(i), u = Ht(i, "modelValue", o), d = Oo(([v, w]) => {
      let c = v, f = w;
      return c > f && (c = f), f < c && (f = c), (c < _(a) || c > _(l)) && (c = _(a)), (f > _(l) || f < _(a)) && (f = _(l)), [c, f];
    }), { ignoreUpdates: p, stop: m } = Ot(u, (v, w) => {
      v[0] === w[0] && v[1] === w[1] || Ce(u, d(v));
    });
    Ct(() => {
      m();
    });
    const h = (v) => {
      let w = parseInt(v, 10);
      const c = _(u)[1];
      p(() => {
        Ce(u, [w, c]);
      });
    }, g = (v) => {
      const w = _(u)[0];
      let c = parseInt(v, 10);
      p(() => {
        Ce(u, [w, c]);
      });
    };
    return (v, w) => (k(), Me(T(go), {
      min: T(a),
      max: T(l),
      "min-value": T(u)[0],
      "max-value": T(u)[1],
      color: T(s),
      "track-color": T(r),
      "handler-color": T(n),
      "hander-width": e.sliderSize,
      "hander-height": e.sliderSize,
      "track-height": e.rangeHeight,
      "show-numbers": !1,
      "push-on-touch": !0,
      "onUpdate:minValue": h,
      "onUpdate:maxValue": g
    }, null, 8, ["min", "max", "min-value", "max-value", "color", "track-color", "handler-color", "hander-width", "hander-height", "track-height"]));
  }
}), Xe = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [i, n] of t)
    o[i] = n;
  return o;
}, ko = /* @__PURE__ */ Xe(zo, [["__scopeId", "data-v-2054bf6e"]]), Ho = ["top", "right", "bottom", "left"], nt = ["start", "end"], rt = /* @__PURE__ */ Ho.reduce((e, t) => e.concat(t, t + "-" + nt[0], t + "-" + nt[1]), []), re = Math.min, ne = Math.max, Ro = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Mo = {
  start: "end",
  end: "start"
};
function qe(e, t, o) {
  return ne(e, re(t, o));
}
function ue(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function j(e) {
  return e.split("-")[0];
}
function F(e) {
  return e.split("-")[1];
}
function Rt(e) {
  return e === "x" ? "y" : "x";
}
function Ke(e) {
  return e === "y" ? "height" : "width";
}
function ae(e) {
  return ["top", "bottom"].includes(j(e)) ? "y" : "x";
}
function Je(e) {
  return Rt(ae(e));
}
function Mt(e, t, o) {
  o === void 0 && (o = !1);
  const i = F(e), n = Je(e), r = Ke(n);
  let s = n === "x" ? i === (o ? "end" : "start") ? "right" : "left" : i === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (s = ke(s)), [s, ke(s)];
}
function Do(e) {
  const t = ke(e);
  return [ze(e), t, ze(t)];
}
function ze(e) {
  return e.replace(/start|end/g, (t) => Mo[t]);
}
function Bo(e, t, o) {
  const i = ["left", "right"], n = ["right", "left"], r = ["top", "bottom"], s = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return o ? t ? n : i : t ? i : n;
    case "left":
    case "right":
      return t ? r : s;
    default:
      return [];
  }
}
function Eo(e, t, o, i) {
  const n = F(e);
  let r = Bo(j(e), o === "start", i);
  return n && (r = r.map((s) => s + "-" + n), t && (r = r.concat(r.map(ze)))), r;
}
function ke(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Ro[t]);
}
function Lo(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Dt(e) {
  return typeof e != "number" ? Lo(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function fe(e) {
  const {
    x: t,
    y: o,
    width: i,
    height: n
  } = e;
  return {
    width: i,
    height: n,
    top: o,
    left: t,
    right: t + i,
    bottom: o + n,
    x: t,
    y: o
  };
}
function st(e, t, o) {
  let {
    reference: i,
    floating: n
  } = e;
  const r = ae(t), s = Je(t), a = Ke(s), l = j(t), u = r === "y", d = i.x + i.width / 2 - n.width / 2, p = i.y + i.height / 2 - n.height / 2, m = i[a] / 2 - n[a] / 2;
  let h;
  switch (l) {
    case "top":
      h = {
        x: d,
        y: i.y - n.height
      };
      break;
    case "bottom":
      h = {
        x: d,
        y: i.y + i.height
      };
      break;
    case "right":
      h = {
        x: i.x + i.width,
        y: p
      };
      break;
    case "left":
      h = {
        x: i.x - n.width,
        y: p
      };
      break;
    default:
      h = {
        x: i.x,
        y: i.y
      };
  }
  switch (F(t)) {
    case "start":
      h[s] -= m * (o && u ? -1 : 1);
      break;
    case "end":
      h[s] += m * (o && u ? -1 : 1);
      break;
  }
  return h;
}
const Vo = async (e, t, o) => {
  const {
    placement: i = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: s
  } = o, a = r.filter(Boolean), l = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let u = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: n
  }), {
    x: d,
    y: p
  } = st(u, i, l), m = i, h = {}, g = 0;
  for (let v = 0; v < a.length; v++) {
    const {
      name: w,
      fn: c
    } = a[v], {
      x: f,
      y,
      data: $,
      reset: x
    } = await c({
      x: d,
      y: p,
      initialPlacement: i,
      placement: m,
      strategy: n,
      middlewareData: h,
      rects: u,
      platform: s,
      elements: {
        reference: e,
        floating: t
      }
    });
    d = f ?? d, p = y ?? p, h = {
      ...h,
      [w]: {
        ...h[w],
        ...$
      }
    }, x && g <= 50 && (g++, typeof x == "object" && (x.placement && (m = x.placement), x.rects && (u = x.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: n
    }) : x.rects), {
      x: d,
      y: p
    } = st(u, m, l)), v = -1);
  }
  return {
    x: d,
    y: p,
    placement: m,
    strategy: n,
    middlewareData: h
  };
};
async function De(e, t) {
  var o;
  t === void 0 && (t = {});
  const {
    x: i,
    y: n,
    platform: r,
    rects: s,
    elements: a,
    strategy: l
  } = e, {
    boundary: u = "clippingAncestors",
    rootBoundary: d = "viewport",
    elementContext: p = "floating",
    altBoundary: m = !1,
    padding: h = 0
  } = ue(t, e), g = Dt(h), w = a[m ? p === "floating" ? "reference" : "floating" : p], c = fe(await r.getClippingRect({
    element: (o = await (r.isElement == null ? void 0 : r.isElement(w))) == null || o ? w : w.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(a.floating)),
    boundary: u,
    rootBoundary: d,
    strategy: l
  })), f = p === "floating" ? {
    x: i,
    y: n,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, y = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(a.floating)), $ = await (r.isElement == null ? void 0 : r.isElement(y)) ? await (r.getScale == null ? void 0 : r.getScale(y)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, x = fe(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: f,
    offsetParent: y,
    strategy: l
  }) : f);
  return {
    top: (c.top - x.top + g.top) / $.y,
    bottom: (x.bottom - c.bottom + g.bottom) / $.y,
    left: (c.left - x.left + g.left) / $.x,
    right: (x.right - c.right + g.right) / $.x
  };
}
const Fo = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: o,
      y: i,
      placement: n,
      rects: r,
      platform: s,
      elements: a,
      middlewareData: l
    } = t, {
      element: u,
      padding: d = 0
    } = ue(e, t) || {};
    if (u == null)
      return {};
    const p = Dt(d), m = {
      x: o,
      y: i
    }, h = Je(n), g = Ke(h), v = await s.getDimensions(u), w = h === "y", c = w ? "top" : "left", f = w ? "bottom" : "right", y = w ? "clientHeight" : "clientWidth", $ = r.reference[g] + r.reference[h] - m[h] - r.floating[g], x = m[h] - r.reference[h], S = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
    let P = S ? S[y] : 0;
    (!P || !await (s.isElement == null ? void 0 : s.isElement(S))) && (P = a.floating[y] || r.floating[g]);
    const D = $ / 2 - x / 2, A = P / 2 - v[g] / 2 - 1, C = re(p[c], A), H = re(p[f], A), U = C, oe = P - v[g] - H, N = P / 2 - v[g] / 2 + D, de = qe(U, N, oe), G = !l.arrow && F(n) != null && N !== de && r.reference[g] / 2 - (N < U ? C : H) - v[g] / 2 < 0, I = G ? N < U ? N - U : N - oe : 0;
    return {
      [h]: m[h] + I,
      data: {
        [h]: de,
        centerOffset: N - de - I,
        ...G && {
          alignmentOffset: I
        }
      },
      reset: G
    };
  }
});
function Io(e, t, o) {
  return (e ? [...o.filter((n) => F(n) === e), ...o.filter((n) => F(n) !== e)] : o.filter((n) => j(n) === n)).filter((n) => e ? F(n) === e || (t ? ze(n) !== n : !1) : !0);
}
const Wo = function(e) {
  return e === void 0 && (e = {}), {
    name: "autoPlacement",
    options: e,
    async fn(t) {
      var o, i, n;
      const {
        rects: r,
        middlewareData: s,
        placement: a,
        platform: l,
        elements: u
      } = t, {
        crossAxis: d = !1,
        alignment: p,
        allowedPlacements: m = rt,
        autoAlignment: h = !0,
        ...g
      } = ue(e, t), v = p !== void 0 || m === rt ? Io(p || null, h, m) : m, w = await De(t, g), c = ((o = s.autoPlacement) == null ? void 0 : o.index) || 0, f = v[c];
      if (f == null)
        return {};
      const y = Mt(f, r, await (l.isRTL == null ? void 0 : l.isRTL(u.floating)));
      if (a !== f)
        return {
          reset: {
            placement: v[0]
          }
        };
      const $ = [w[j(f)], w[y[0]], w[y[1]]], x = [...((i = s.autoPlacement) == null ? void 0 : i.overflows) || [], {
        placement: f,
        overflows: $
      }], S = v[c + 1];
      if (S)
        return {
          data: {
            index: c + 1,
            overflows: x
          },
          reset: {
            placement: S
          }
        };
      const P = x.map((C) => {
        const H = F(C.placement);
        return [C.placement, H && d ? (
          // Check along the mainAxis and main crossAxis side.
          C.overflows.slice(0, 2).reduce((U, oe) => U + oe, 0)
        ) : (
          // Check only the mainAxis.
          C.overflows[0]
        ), C.overflows];
      }).sort((C, H) => C[1] - H[1]), A = ((n = P.filter((C) => C[2].slice(
        0,
        // Aligned placements should not check their opposite crossAxis
        // side.
        F(C[0]) ? 2 : 3
      ).every((H) => H <= 0))[0]) == null ? void 0 : n[0]) || P[0][0];
      return A !== a ? {
        data: {
          index: c + 1,
          overflows: x
        },
        reset: {
          placement: A
        }
      } : {};
    }
  };
}, qo = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var o, i;
      const {
        placement: n,
        middlewareData: r,
        rects: s,
        initialPlacement: a,
        platform: l,
        elements: u
      } = t, {
        mainAxis: d = !0,
        crossAxis: p = !0,
        fallbackPlacements: m,
        fallbackStrategy: h = "bestFit",
        fallbackAxisSideDirection: g = "none",
        flipAlignment: v = !0,
        ...w
      } = ue(e, t);
      if ((o = r.arrow) != null && o.alignmentOffset)
        return {};
      const c = j(n), f = ae(a), y = j(a) === a, $ = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), x = m || (y || !v ? [ke(a)] : Do(a)), S = g !== "none";
      !m && S && x.push(...Eo(a, v, g, $));
      const P = [a, ...x], D = await De(t, w), A = [];
      let C = ((i = r.flip) == null ? void 0 : i.overflows) || [];
      if (d && A.push(D[c]), p) {
        const N = Mt(n, s, $);
        A.push(D[N[0]], D[N[1]]);
      }
      if (C = [...C, {
        placement: n,
        overflows: A
      }], !A.every((N) => N <= 0)) {
        var H, U;
        const N = (((H = r.flip) == null ? void 0 : H.index) || 0) + 1, de = P[N];
        if (de)
          return {
            data: {
              index: N,
              overflows: C
            },
            reset: {
              placement: de
            }
          };
        let G = (U = C.filter((I) => I.overflows[0] <= 0).sort((I, Y) => I.overflows[1] - Y.overflows[1])[0]) == null ? void 0 : U.placement;
        if (!G)
          switch (h) {
            case "bestFit": {
              var oe;
              const I = (oe = C.filter((Y) => {
                if (S) {
                  const Z = ae(Y.placement);
                  return Z === f || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  Z === "y";
                }
                return !0;
              }).map((Y) => [Y.placement, Y.overflows.filter((Z) => Z > 0).reduce((Z, Xt) => Z + Xt, 0)]).sort((Y, Z) => Y[1] - Z[1])[0]) == null ? void 0 : oe[0];
              I && (G = I);
              break;
            }
            case "initialPlacement":
              G = a;
              break;
          }
        if (n !== G)
          return {
            reset: {
              placement: G
            }
          };
      }
      return {};
    }
  };
};
async function jo(e, t) {
  const {
    placement: o,
    platform: i,
    elements: n
  } = e, r = await (i.isRTL == null ? void 0 : i.isRTL(n.floating)), s = j(o), a = F(o), l = ae(o) === "y", u = ["left", "top"].includes(s) ? -1 : 1, d = r && l ? -1 : 1, p = ue(t, e);
  let {
    mainAxis: m,
    crossAxis: h,
    alignmentAxis: g
  } = typeof p == "number" ? {
    mainAxis: p,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...p
  };
  return a && typeof g == "number" && (h = a === "end" ? g * -1 : g), l ? {
    x: h * d,
    y: m * u
  } : {
    x: m * u,
    y: h * d
  };
}
const Uo = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var o, i;
      const {
        x: n,
        y: r,
        placement: s,
        middlewareData: a
      } = t, l = await jo(t, e);
      return s === ((o = a.offset) == null ? void 0 : o.placement) && (i = a.arrow) != null && i.alignmentOffset ? {} : {
        x: n + l.x,
        y: r + l.y,
        data: {
          ...l,
          placement: s
        }
      };
    }
  };
}, Go = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: o,
        y: i,
        placement: n
      } = t, {
        mainAxis: r = !0,
        crossAxis: s = !1,
        limiter: a = {
          fn: (w) => {
            let {
              x: c,
              y: f
            } = w;
            return {
              x: c,
              y: f
            };
          }
        },
        ...l
      } = ue(e, t), u = {
        x: o,
        y: i
      }, d = await De(t, l), p = ae(j(n)), m = Rt(p);
      let h = u[m], g = u[p];
      if (r) {
        const w = m === "y" ? "top" : "left", c = m === "y" ? "bottom" : "right", f = h + d[w], y = h - d[c];
        h = qe(f, h, y);
      }
      if (s) {
        const w = p === "y" ? "top" : "left", c = p === "y" ? "bottom" : "right", f = g + d[w], y = g - d[c];
        g = qe(f, g, y);
      }
      const v = a.fn({
        ...t,
        [m]: h,
        [p]: g
      });
      return {
        ...v,
        data: {
          x: v.x - o,
          y: v.y - i
        }
      };
    }
  };
}, Yo = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      const {
        placement: o,
        rects: i,
        platform: n,
        elements: r
      } = t, {
        apply: s = () => {
        },
        ...a
      } = ue(e, t), l = await De(t, a), u = j(o), d = F(o), p = ae(o) === "y", {
        width: m,
        height: h
      } = i.floating;
      let g, v;
      u === "top" || u === "bottom" ? (g = u, v = d === (await (n.isRTL == null ? void 0 : n.isRTL(r.floating)) ? "start" : "end") ? "left" : "right") : (v = u, g = d === "end" ? "top" : "bottom");
      const w = h - l.top - l.bottom, c = m - l.left - l.right, f = re(h - l[g], w), y = re(m - l[v], c), $ = !t.middlewareData.shift;
      let x = f, S = y;
      if (p ? S = d || $ ? re(y, c) : c : x = d || $ ? re(f, w) : w, $ && !d) {
        const D = ne(l.left, 0), A = ne(l.right, 0), C = ne(l.top, 0), H = ne(l.bottom, 0);
        p ? S = m - 2 * (D !== 0 || A !== 0 ? D + A : ne(l.left, l.right)) : x = h - 2 * (C !== 0 || H !== 0 ? C + H : ne(l.top, l.bottom));
      }
      await s({
        ...t,
        availableWidth: S,
        availableHeight: x
      });
      const P = await n.getDimensions(r.floating);
      return m !== P.width || h !== P.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function M(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function W(e) {
  return M(e).getComputedStyle(e);
}
const at = Math.min, me = Math.max, He = Math.round;
function Bt(e) {
  const t = W(e);
  let o = parseFloat(t.width), i = parseFloat(t.height);
  const n = e.offsetWidth, r = e.offsetHeight, s = He(o) !== n || He(i) !== r;
  return s && (o = n, i = r), { width: o, height: i, fallback: s };
}
function te(e) {
  return Lt(e) ? (e.nodeName || "").toLowerCase() : "";
}
let _e;
function Et() {
  if (_e) return _e;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (_e = e.brands.map((t) => t.brand + "/" + t.version).join(" "), _e) : navigator.userAgent;
}
function q(e) {
  return e instanceof M(e).HTMLElement;
}
function J(e) {
  return e instanceof M(e).Element;
}
function Lt(e) {
  return e instanceof M(e).Node;
}
function lt(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof M(e).ShadowRoot || e instanceof ShadowRoot;
}
function Be(e) {
  const { overflow: t, overflowX: o, overflowY: i, display: n } = W(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + i + o) && !["inline", "contents"].includes(n);
}
function Zo(e) {
  return ["table", "td", "th"].includes(te(e));
}
function je(e) {
  const t = /firefox/i.test(Et()), o = W(e), i = o.backdropFilter || o.WebkitBackdropFilter;
  return o.transform !== "none" || o.perspective !== "none" || !!i && i !== "none" || t && o.willChange === "filter" || t && !!o.filter && o.filter !== "none" || ["transform", "perspective"].some((n) => o.willChange.includes(n)) || ["paint", "layout", "strict", "content"].some((n) => {
    const r = o.contain;
    return r != null && r.includes(n);
  });
}
function Vt() {
  return !/^((?!chrome|android).)*safari/i.test(Et());
}
function Qe(e) {
  return ["html", "body", "#document"].includes(te(e));
}
function Ft(e) {
  return J(e) ? e : e.contextElement;
}
const It = { x: 1, y: 1 };
function ce(e) {
  const t = Ft(e);
  if (!q(t)) return It;
  const o = t.getBoundingClientRect(), { width: i, height: n, fallback: r } = Bt(t);
  let s = (r ? He(o.width) : o.width) / i, a = (r ? He(o.height) : o.height) / n;
  return s && Number.isFinite(s) || (s = 1), a && Number.isFinite(a) || (a = 1), { x: s, y: a };
}
function xe(e, t, o, i) {
  var n, r;
  t === void 0 && (t = !1), o === void 0 && (o = !1);
  const s = e.getBoundingClientRect(), a = Ft(e);
  let l = It;
  t && (i ? J(i) && (l = ce(i)) : l = ce(e));
  const u = a ? M(a) : window, d = !Vt() && o;
  let p = (s.left + (d && ((n = u.visualViewport) == null ? void 0 : n.offsetLeft) || 0)) / l.x, m = (s.top + (d && ((r = u.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / l.y, h = s.width / l.x, g = s.height / l.y;
  if (a) {
    const v = M(a), w = i && J(i) ? M(i) : i;
    let c = v.frameElement;
    for (; c && i && w !== v; ) {
      const f = ce(c), y = c.getBoundingClientRect(), $ = getComputedStyle(c);
      y.x += (c.clientLeft + parseFloat($.paddingLeft)) * f.x, y.y += (c.clientTop + parseFloat($.paddingTop)) * f.y, p *= f.x, m *= f.y, h *= f.x, g *= f.y, p += y.x, m += y.y, c = M(c).frameElement;
    }
  }
  return { width: h, height: g, top: m, right: p + h, bottom: m + g, left: p, x: p, y: m };
}
function Q(e) {
  return ((Lt(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Ee(e) {
  return J(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function Wt(e) {
  return xe(Q(e)).left + Ee(e).scrollLeft;
}
function be(e) {
  if (te(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || lt(e) && e.host || Q(e);
  return lt(t) ? t.host : t;
}
function qt(e) {
  const t = be(e);
  return Qe(t) ? t.ownerDocument.body : q(t) && Be(t) ? t : qt(t);
}
function Re(e, t) {
  var o;
  t === void 0 && (t = []);
  const i = qt(e), n = i === ((o = e.ownerDocument) == null ? void 0 : o.body), r = M(i);
  return n ? t.concat(r, r.visualViewport || [], Be(i) ? i : []) : t.concat(i, Re(i));
}
function ut(e, t, o) {
  return t === "viewport" ? fe(function(i, n) {
    const r = M(i), s = Q(i), a = r.visualViewport;
    let l = s.clientWidth, u = s.clientHeight, d = 0, p = 0;
    if (a) {
      l = a.width, u = a.height;
      const m = Vt();
      (m || !m && n === "fixed") && (d = a.offsetLeft, p = a.offsetTop);
    }
    return { width: l, height: u, x: d, y: p };
  }(e, o)) : J(t) ? fe(function(i, n) {
    const r = xe(i, !0, n === "fixed"), s = r.top + i.clientTop, a = r.left + i.clientLeft, l = q(i) ? ce(i) : { x: 1, y: 1 };
    return { width: i.clientWidth * l.x, height: i.clientHeight * l.y, x: a * l.x, y: s * l.y };
  }(t, o)) : fe(function(i) {
    const n = Q(i), r = Ee(i), s = i.ownerDocument.body, a = me(n.scrollWidth, n.clientWidth, s.scrollWidth, s.clientWidth), l = me(n.scrollHeight, n.clientHeight, s.scrollHeight, s.clientHeight);
    let u = -r.scrollLeft + Wt(i);
    const d = -r.scrollTop;
    return W(s).direction === "rtl" && (u += me(n.clientWidth, s.clientWidth) - a), { width: a, height: l, x: u, y: d };
  }(Q(e)));
}
function dt(e) {
  return q(e) && W(e).position !== "fixed" ? e.offsetParent : null;
}
function ct(e) {
  const t = M(e);
  let o = dt(e);
  for (; o && Zo(o) && W(o).position === "static"; ) o = dt(o);
  return o && (te(o) === "html" || te(o) === "body" && W(o).position === "static" && !je(o)) ? t : o || function(i) {
    let n = be(i);
    for (; q(n) && !Qe(n); ) {
      if (je(n)) return n;
      n = be(n);
    }
    return null;
  }(e) || t;
}
function Xo(e, t, o) {
  const i = q(t), n = Q(t), r = xe(e, !0, o === "fixed", t);
  let s = { scrollLeft: 0, scrollTop: 0 };
  const a = { x: 0, y: 0 };
  if (i || !i && o !== "fixed") if ((te(t) !== "body" || Be(n)) && (s = Ee(t)), q(t)) {
    const l = xe(t, !0);
    a.x = l.x + t.clientLeft, a.y = l.y + t.clientTop;
  } else n && (a.x = Wt(n));
  return { x: r.left + s.scrollLeft - a.x, y: r.top + s.scrollTop - a.y, width: r.width, height: r.height };
}
const Ko = { getClippingRect: function(e) {
  let { element: t, boundary: o, rootBoundary: i, strategy: n } = e;
  const r = o === "clippingAncestors" ? function(u, d) {
    const p = d.get(u);
    if (p) return p;
    let m = Re(u).filter((w) => J(w) && te(w) !== "body"), h = null;
    const g = W(u).position === "fixed";
    let v = g ? be(u) : u;
    for (; J(v) && !Qe(v); ) {
      const w = W(v), c = je(v);
      (g ? c || h : c || w.position !== "static" || !h || !["absolute", "fixed"].includes(h.position)) ? h = w : m = m.filter((f) => f !== v), v = be(v);
    }
    return d.set(u, m), m;
  }(t, this._c) : [].concat(o), s = [...r, i], a = s[0], l = s.reduce((u, d) => {
    const p = ut(t, d, n);
    return u.top = me(p.top, u.top), u.right = at(p.right, u.right), u.bottom = at(p.bottom, u.bottom), u.left = me(p.left, u.left), u;
  }, ut(t, a, n));
  return { width: l.right - l.left, height: l.bottom - l.top, x: l.left, y: l.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: o, strategy: i } = e;
  const n = q(o), r = Q(o);
  if (o === r) return t;
  let s = { scrollLeft: 0, scrollTop: 0 }, a = { x: 1, y: 1 };
  const l = { x: 0, y: 0 };
  if ((n || !n && i !== "fixed") && ((te(o) !== "body" || Be(r)) && (s = Ee(o)), q(o))) {
    const u = xe(o);
    a = ce(o), l.x = u.x + o.clientLeft, l.y = u.y + o.clientTop;
  }
  return { width: t.width * a.x, height: t.height * a.y, x: t.x * a.x - s.scrollLeft * a.x + l.x, y: t.y * a.y - s.scrollTop * a.y + l.y };
}, isElement: J, getDimensions: function(e) {
  return q(e) ? Bt(e) : e.getBoundingClientRect();
}, getOffsetParent: ct, getDocumentElement: Q, getScale: ce, async getElementRects(e) {
  let { reference: t, floating: o, strategy: i } = e;
  const n = this.getOffsetParent || ct, r = this.getDimensions;
  return { reference: Xo(t, await n(o), i), floating: { x: 0, y: 0, ...await r(o) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => W(e).direction === "rtl" }, Jo = (e, t, o) => {
  const i = /* @__PURE__ */ new Map(), n = { platform: Ko, ...o }, r = { ...n.platform, _c: i };
  return Vo(e, t, { ...n, platform: r });
}, se = {
  // Disable popper components
  disabled: !1,
  // Default position offset along main axis (px)
  distance: 5,
  // Default position offset along cross axis (px)
  skidding: 0,
  // Default container where the tooltip will be appended
  container: "body",
  // Element used to compute position and size boundaries
  boundary: void 0,
  // Skip delay & CSS transitions when another popper is shown, so that the popper appear to instanly move to the new position.
  instantMove: !1,
  // Auto destroy tooltip DOM nodes (ms)
  disposeTimeout: 150,
  // Triggers on the popper itself
  popperTriggers: [],
  // Positioning strategy
  strategy: "absolute",
  // Prevent overflow
  preventOverflow: !0,
  // Flip to the opposite placement if needed
  flip: !0,
  // Shift on the cross axis to prevent the popper from overflowing
  shift: !0,
  // Overflow padding (px)
  overflowPadding: 0,
  // Arrow padding (px)
  arrowPadding: 0,
  // Compute arrow overflow (useful to hide it)
  arrowOverflow: !0,
  /**
   * By default, compute autohide on 'click'.
   */
  autoHideOnMousedown: !1,
  // Themes
  themes: {
    tooltip: {
      // Default tooltip placement relative to target element
      placement: "top",
      // Default events that trigger the tooltip
      triggers: ["hover", "focus", "touch"],
      // Close tooltip on click on tooltip target
      hideTriggers: (e) => [...e, "click"],
      // Delay (ms)
      delay: {
        show: 200,
        hide: 0
      },
      // Update popper on content resize
      handleResize: !1,
      // Enable HTML content in directive
      html: !1,
      // Displayed when tooltip content is loading
      loadingContent: "..."
    },
    dropdown: {
      // Default dropdown placement relative to target element
      placement: "bottom",
      // Default events that trigger the dropdown
      triggers: ["click"],
      // Delay (ms)
      delay: 0,
      // Update popper on content resize
      handleResize: !0,
      // Hide on clock outside
      autoHide: !0
    },
    menu: {
      $extend: "dropdown",
      triggers: ["hover", "focus"],
      popperTriggers: ["hover"],
      delay: {
        show: 0,
        hide: 400
      }
    }
  }
};
function Ue(e, t) {
  let o = se.themes[e] || {}, i;
  do
    i = o[t], typeof i > "u" ? o.$extend ? o = se.themes[o.$extend] || {} : (o = null, i = se[t]) : o = null;
  while (o);
  return i;
}
function Qo(e) {
  const t = [e];
  let o = se.themes[e] || {};
  do
    o.$extend && !o.$resetCss ? (t.push(o.$extend), o = se.themes[o.$extend] || {}) : o = null;
  while (o);
  return t.map((i) => `v-popper--theme-${i}`);
}
function pt(e) {
  const t = [e];
  let o = se.themes[e] || {};
  do
    o.$extend ? (t.push(o.$extend), o = se.themes[o.$extend] || {}) : o = null;
  while (o);
  return t;
}
let $e = !1;
if (typeof window < "u") {
  $e = !1;
  try {
    const e = Object.defineProperty({}, "passive", {
      get() {
        $e = !0;
      }
    });
    window.addEventListener("test", null, e);
  } catch {
  }
}
let jt = !1;
typeof window < "u" && typeof navigator < "u" && (jt = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream);
const ei = ["auto", "top", "bottom", "left", "right"].reduce((e, t) => e.concat([
  t,
  `${t}-start`,
  `${t}-end`
]), []), ht = {
  hover: "mouseenter",
  focus: "focus",
  click: "click",
  touch: "touchstart",
  pointer: "pointerdown"
}, ft = {
  hover: "mouseleave",
  focus: "blur",
  click: "click",
  touch: "touchend",
  pointer: "pointerup"
};
function mt(e, t) {
  const o = e.indexOf(t);
  o !== -1 && e.splice(o, 1);
}
function Fe() {
  return new Promise((e) => requestAnimationFrame(() => {
    requestAnimationFrame(e);
  }));
}
const B = [];
let ie = null;
const gt = {};
function vt(e) {
  let t = gt[e];
  return t || (t = gt[e] = []), t;
}
let Ge = function() {
};
typeof window < "u" && (Ge = window.Element);
function b(e) {
  return function(t) {
    return Ue(t.theme, e);
  };
}
const Ie = "__floating-vue__popper", Ut = () => le({
  name: "VPopper",
  provide() {
    return {
      [Ie]: {
        parentPopper: this
      }
    };
  },
  inject: {
    [Ie]: { default: null }
  },
  props: {
    theme: {
      type: String,
      required: !0
    },
    targetNodes: {
      type: Function,
      required: !0
    },
    referenceNode: {
      type: Function,
      default: null
    },
    popperNode: {
      type: Function,
      required: !0
    },
    shown: {
      type: Boolean,
      default: !1
    },
    showGroup: {
      type: String,
      default: null
    },
    // eslint-disable-next-line vue/require-prop-types
    ariaId: {
      default: null
    },
    disabled: {
      type: Boolean,
      default: b("disabled")
    },
    positioningDisabled: {
      type: Boolean,
      default: b("positioningDisabled")
    },
    placement: {
      type: String,
      default: b("placement"),
      validator: (e) => ei.includes(e)
    },
    delay: {
      type: [String, Number, Object],
      default: b("delay")
    },
    distance: {
      type: [Number, String],
      default: b("distance")
    },
    skidding: {
      type: [Number, String],
      default: b("skidding")
    },
    triggers: {
      type: Array,
      default: b("triggers")
    },
    showTriggers: {
      type: [Array, Function],
      default: b("showTriggers")
    },
    hideTriggers: {
      type: [Array, Function],
      default: b("hideTriggers")
    },
    popperTriggers: {
      type: Array,
      default: b("popperTriggers")
    },
    popperShowTriggers: {
      type: [Array, Function],
      default: b("popperShowTriggers")
    },
    popperHideTriggers: {
      type: [Array, Function],
      default: b("popperHideTriggers")
    },
    container: {
      type: [String, Object, Ge, Boolean],
      default: b("container")
    },
    boundary: {
      type: [String, Ge],
      default: b("boundary")
    },
    strategy: {
      type: String,
      validator: (e) => ["absolute", "fixed"].includes(e),
      default: b("strategy")
    },
    autoHide: {
      type: [Boolean, Function],
      default: b("autoHide")
    },
    handleResize: {
      type: Boolean,
      default: b("handleResize")
    },
    instantMove: {
      type: Boolean,
      default: b("instantMove")
    },
    eagerMount: {
      type: Boolean,
      default: b("eagerMount")
    },
    popperClass: {
      type: [String, Array, Object],
      default: b("popperClass")
    },
    computeTransformOrigin: {
      type: Boolean,
      default: b("computeTransformOrigin")
    },
    /**
     * @deprecated
     */
    autoMinSize: {
      type: Boolean,
      default: b("autoMinSize")
    },
    autoSize: {
      type: [Boolean, String],
      default: b("autoSize")
    },
    /**
     * @deprecated
     */
    autoMaxSize: {
      type: Boolean,
      default: b("autoMaxSize")
    },
    autoBoundaryMaxSize: {
      type: Boolean,
      default: b("autoBoundaryMaxSize")
    },
    preventOverflow: {
      type: Boolean,
      default: b("preventOverflow")
    },
    overflowPadding: {
      type: [Number, String],
      default: b("overflowPadding")
    },
    arrowPadding: {
      type: [Number, String],
      default: b("arrowPadding")
    },
    arrowOverflow: {
      type: Boolean,
      default: b("arrowOverflow")
    },
    flip: {
      type: Boolean,
      default: b("flip")
    },
    shift: {
      type: Boolean,
      default: b("shift")
    },
    shiftCrossAxis: {
      type: Boolean,
      default: b("shiftCrossAxis")
    },
    noAutoFocus: {
      type: Boolean,
      default: b("noAutoFocus")
    },
    disposeTimeout: {
      type: Number,
      default: b("disposeTimeout")
    }
  },
  emits: {
    show: () => !0,
    hide: () => !0,
    "update:shown": (e) => !0,
    "apply-show": () => !0,
    "apply-hide": () => !0,
    "close-group": () => !0,
    "close-directive": () => !0,
    "auto-hide": () => !0,
    resize: () => !0
  },
  data() {
    return {
      isShown: !1,
      isMounted: !1,
      skipTransition: !1,
      classes: {
        showFrom: !1,
        showTo: !1,
        hideFrom: !1,
        hideTo: !0
      },
      result: {
        x: 0,
        y: 0,
        placement: "",
        strategy: this.strategy,
        arrow: {
          x: 0,
          y: 0,
          centerOffset: 0
        },
        transformOrigin: null
      },
      randomId: `popper_${[Math.random(), Date.now()].map((e) => e.toString(36).substring(2, 10)).join("_")}`,
      shownChildren: /* @__PURE__ */ new Set(),
      lastAutoHide: !0,
      pendingHide: !1,
      containsGlobalTarget: !1,
      isDisposed: !0,
      mouseDownContains: !1
    };
  },
  computed: {
    popperId() {
      return this.ariaId != null ? this.ariaId : this.randomId;
    },
    shouldMountContent() {
      return this.eagerMount || this.isMounted;
    },
    slotData() {
      return {
        popperId: this.popperId,
        isShown: this.isShown,
        shouldMountContent: this.shouldMountContent,
        skipTransition: this.skipTransition,
        autoHide: typeof this.autoHide == "function" ? this.lastAutoHide : this.autoHide,
        show: this.show,
        hide: this.hide,
        handleResize: this.handleResize,
        onResize: this.onResize,
        classes: {
          ...this.classes,
          popperClass: this.popperClass
        },
        result: this.positioningDisabled ? null : this.result,
        attrs: this.$attrs
      };
    },
    parentPopper() {
      var e;
      return (e = this[Ie]) == null ? void 0 : e.parentPopper;
    },
    hasPopperShowTriggerHover() {
      var e, t;
      return ((e = this.popperTriggers) == null ? void 0 : e.includes("hover")) || ((t = this.popperShowTriggers) == null ? void 0 : t.includes("hover"));
    }
  },
  watch: {
    shown: "$_autoShowHide",
    disabled(e) {
      e ? this.dispose() : this.init();
    },
    async container() {
      this.isShown && (this.$_ensureTeleport(), await this.$_computePosition());
    },
    triggers: {
      handler: "$_refreshListeners",
      deep: !0
    },
    positioningDisabled: "$_refreshListeners",
    ...[
      "placement",
      "distance",
      "skidding",
      "boundary",
      "strategy",
      "overflowPadding",
      "arrowPadding",
      "preventOverflow",
      "shift",
      "shiftCrossAxis",
      "flip"
    ].reduce((e, t) => (e[t] = "$_computePosition", e), {})
  },
  created() {
    this.autoMinSize && console.warn('[floating-vue] `autoMinSize` option is deprecated. Use `autoSize="min"` instead.'), this.autoMaxSize && console.warn("[floating-vue] `autoMaxSize` option is deprecated. Use `autoBoundaryMaxSize` instead.");
  },
  mounted() {
    this.init(), this.$_detachPopperNode();
  },
  activated() {
    this.$_autoShowHide();
  },
  deactivated() {
    this.hide();
  },
  beforeUnmount() {
    this.dispose();
  },
  methods: {
    show({ event: e = null, skipDelay: t = !1, force: o = !1 } = {}) {
      var i, n;
      (i = this.parentPopper) != null && i.lockedChild && this.parentPopper.lockedChild !== this || (this.pendingHide = !1, (o || !this.disabled) && (((n = this.parentPopper) == null ? void 0 : n.lockedChild) === this && (this.parentPopper.lockedChild = null), this.$_scheduleShow(e, t), this.$emit("show"), this.$_showFrameLocked = !0, requestAnimationFrame(() => {
        this.$_showFrameLocked = !1;
      })), this.$emit("update:shown", !0));
    },
    hide({ event: e = null, skipDelay: t = !1 } = {}) {
      var o;
      if (!this.$_hideInProgress) {
        if (this.shownChildren.size > 0) {
          this.pendingHide = !0;
          return;
        }
        if (this.hasPopperShowTriggerHover && this.$_isAimingPopper()) {
          this.parentPopper && (this.parentPopper.lockedChild = this, clearTimeout(this.parentPopper.lockedChildTimer), this.parentPopper.lockedChildTimer = setTimeout(() => {
            this.parentPopper.lockedChild === this && (this.parentPopper.lockedChild.hide({ skipDelay: t }), this.parentPopper.lockedChild = null);
          }, 1e3));
          return;
        }
        ((o = this.parentPopper) == null ? void 0 : o.lockedChild) === this && (this.parentPopper.lockedChild = null), this.pendingHide = !1, this.$_scheduleHide(e, t), this.$emit("hide"), this.$emit("update:shown", !1);
      }
    },
    init() {
      var e;
      this.isDisposed && (this.isDisposed = !1, this.isMounted = !1, this.$_events = [], this.$_preventShow = !1, this.$_referenceNode = ((e = this.referenceNode) == null ? void 0 : e.call(this)) ?? this.$el, this.$_targetNodes = this.targetNodes().filter((t) => t.nodeType === t.ELEMENT_NODE), this.$_popperNode = this.popperNode(), this.$_innerNode = this.$_popperNode.querySelector(".v-popper__inner"), this.$_arrowNode = this.$_popperNode.querySelector(".v-popper__arrow-container"), this.$_swapTargetAttrs("title", "data-original-title"), this.$_detachPopperNode(), this.triggers.length && this.$_addEventListeners(), this.shown && this.show());
    },
    dispose() {
      this.isDisposed || (this.isDisposed = !0, this.$_removeEventListeners(), this.hide({ skipDelay: !0 }), this.$_detachPopperNode(), this.isMounted = !1, this.isShown = !1, this.$_updateParentShownChildren(!1), this.$_swapTargetAttrs("data-original-title", "title"));
    },
    async onResize() {
      this.isShown && (await this.$_computePosition(), this.$emit("resize"));
    },
    async $_computePosition() {
      if (this.isDisposed || this.positioningDisabled)
        return;
      const e = {
        strategy: this.strategy,
        middleware: []
      };
      (this.distance || this.skidding) && e.middleware.push(Uo({
        mainAxis: this.distance,
        crossAxis: this.skidding
      }));
      const t = this.placement.startsWith("auto");
      if (t ? e.middleware.push(Wo({
        alignment: this.placement.split("-")[1] ?? ""
      })) : e.placement = this.placement, this.preventOverflow && (this.shift && e.middleware.push(Go({
        padding: this.overflowPadding,
        boundary: this.boundary,
        crossAxis: this.shiftCrossAxis
      })), !t && this.flip && e.middleware.push(qo({
        padding: this.overflowPadding,
        boundary: this.boundary
      }))), e.middleware.push(Fo({
        element: this.$_arrowNode,
        padding: this.arrowPadding
      })), this.arrowOverflow && e.middleware.push({
        name: "arrowOverflow",
        fn: ({ placement: i, rects: n, middlewareData: r }) => {
          let s;
          const { centerOffset: a } = r.arrow;
          return i.startsWith("top") || i.startsWith("bottom") ? s = Math.abs(a) > n.reference.width / 2 : s = Math.abs(a) > n.reference.height / 2, {
            data: {
              overflow: s
            }
          };
        }
      }), this.autoMinSize || this.autoSize) {
        const i = this.autoSize ? this.autoSize : this.autoMinSize ? "min" : null;
        e.middleware.push({
          name: "autoSize",
          fn: ({ rects: n, placement: r, middlewareData: s }) => {
            var a;
            if ((a = s.autoSize) != null && a.skip)
              return {};
            let l, u;
            return r.startsWith("top") || r.startsWith("bottom") ? l = n.reference.width : u = n.reference.height, this.$_innerNode.style[i === "min" ? "minWidth" : i === "max" ? "maxWidth" : "width"] = l != null ? `${l}px` : null, this.$_innerNode.style[i === "min" ? "minHeight" : i === "max" ? "maxHeight" : "height"] = u != null ? `${u}px` : null, {
              data: {
                skip: !0
              },
              reset: {
                rects: !0
              }
            };
          }
        });
      }
      (this.autoMaxSize || this.autoBoundaryMaxSize) && (this.$_innerNode.style.maxWidth = null, this.$_innerNode.style.maxHeight = null, e.middleware.push(Yo({
        boundary: this.boundary,
        padding: this.overflowPadding,
        apply: ({ availableWidth: i, availableHeight: n }) => {
          this.$_innerNode.style.maxWidth = i != null ? `${i}px` : null, this.$_innerNode.style.maxHeight = n != null ? `${n}px` : null;
        }
      })));
      const o = await Jo(this.$_referenceNode, this.$_popperNode, e);
      Object.assign(this.result, {
        x: o.x,
        y: o.y,
        placement: o.placement,
        strategy: o.strategy,
        arrow: {
          ...o.middlewareData.arrow,
          ...o.middlewareData.arrowOverflow
        }
      });
    },
    $_scheduleShow(e, t = !1) {
      if (this.$_updateParentShownChildren(!0), this.$_hideInProgress = !1, clearTimeout(this.$_scheduleTimer), ie && this.instantMove && ie.instantMove && ie !== this.parentPopper) {
        ie.$_applyHide(!0), this.$_applyShow(!0);
        return;
      }
      t ? this.$_applyShow() : this.$_scheduleTimer = setTimeout(this.$_applyShow.bind(this), this.$_computeDelay("show"));
    },
    $_scheduleHide(e, t = !1) {
      if (this.shownChildren.size > 0) {
        this.pendingHide = !0;
        return;
      }
      this.$_updateParentShownChildren(!1), this.$_hideInProgress = !0, clearTimeout(this.$_scheduleTimer), this.isShown && (ie = this), t ? this.$_applyHide() : this.$_scheduleTimer = setTimeout(this.$_applyHide.bind(this), this.$_computeDelay("hide"));
    },
    $_computeDelay(e) {
      const t = this.delay;
      return parseInt(t && t[e] || t || 0);
    },
    async $_applyShow(e = !1) {
      clearTimeout(this.$_disposeTimer), clearTimeout(this.$_scheduleTimer), this.skipTransition = e, !this.isShown && (this.$_ensureTeleport(), await Fe(), await this.$_computePosition(), await this.$_applyShowEffect(), this.positioningDisabled || this.$_registerEventListeners([
        ...Re(this.$_referenceNode),
        ...Re(this.$_popperNode)
      ], "scroll", () => {
        this.$_computePosition();
      }));
    },
    async $_applyShowEffect() {
      if (this.$_hideInProgress)
        return;
      if (this.computeTransformOrigin) {
        const t = this.$_referenceNode.getBoundingClientRect(), o = this.$_popperNode.querySelector(".v-popper__wrapper"), i = o.parentNode.getBoundingClientRect(), n = t.x + t.width / 2 - (i.left + o.offsetLeft), r = t.y + t.height / 2 - (i.top + o.offsetTop);
        this.result.transformOrigin = `${n}px ${r}px`;
      }
      this.isShown = !0, this.$_applyAttrsToTarget({
        "aria-describedby": this.popperId,
        "data-popper-shown": ""
      });
      const e = this.showGroup;
      if (e) {
        let t;
        for (let o = 0; o < B.length; o++)
          t = B[o], t.showGroup !== e && (t.hide(), t.$emit("close-group"));
      }
      B.push(this), document.body.classList.add("v-popper--some-open");
      for (const t of pt(this.theme))
        vt(t).push(this), document.body.classList.add(`v-popper--some-open--${t}`);
      this.$emit("apply-show"), this.classes.showFrom = !0, this.classes.showTo = !1, this.classes.hideFrom = !1, this.classes.hideTo = !1, await Fe(), this.classes.showFrom = !1, this.classes.showTo = !0, this.noAutoFocus || this.$_popperNode.focus();
    },
    async $_applyHide(e = !1) {
      if (this.shownChildren.size > 0) {
        this.pendingHide = !0, this.$_hideInProgress = !1;
        return;
      }
      if (clearTimeout(this.$_scheduleTimer), !this.isShown)
        return;
      this.skipTransition = e, mt(B, this), B.length === 0 && document.body.classList.remove("v-popper--some-open");
      for (const o of pt(this.theme)) {
        const i = vt(o);
        mt(i, this), i.length === 0 && document.body.classList.remove(`v-popper--some-open--${o}`);
      }
      ie === this && (ie = null), this.isShown = !1, this.$_applyAttrsToTarget({
        "aria-describedby": void 0,
        "data-popper-shown": void 0
      }), clearTimeout(this.$_disposeTimer);
      const t = this.disposeTimeout;
      t !== null && (this.$_disposeTimer = setTimeout(() => {
        this.$_popperNode && (this.$_detachPopperNode(), this.isMounted = !1);
      }, t)), this.$_removeEventListeners("scroll"), this.$emit("apply-hide"), this.classes.showFrom = !1, this.classes.showTo = !1, this.classes.hideFrom = !0, this.classes.hideTo = !1, await Fe(), this.classes.hideFrom = !1, this.classes.hideTo = !0;
    },
    $_autoShowHide() {
      this.shown ? this.show() : this.hide();
    },
    $_ensureTeleport() {
      if (this.isDisposed)
        return;
      let e = this.container;
      if (typeof e == "string" ? e = window.document.querySelector(e) : e === !1 && (e = this.$_targetNodes[0].parentNode), !e)
        throw new Error("No container for popover: " + this.container);
      e.appendChild(this.$_popperNode), this.isMounted = !0;
    },
    $_addEventListeners() {
      const e = (o) => {
        this.isShown && !this.$_hideInProgress || (o.usedByTooltip = !0, !this.$_preventShow && this.show({ event: o }));
      };
      this.$_registerTriggerListeners(this.$_targetNodes, ht, this.triggers, this.showTriggers, e), this.$_registerTriggerListeners([this.$_popperNode], ht, this.popperTriggers, this.popperShowTriggers, e);
      const t = (o) => {
        o.usedByTooltip || this.hide({ event: o });
      };
      this.$_registerTriggerListeners(this.$_targetNodes, ft, this.triggers, this.hideTriggers, t), this.$_registerTriggerListeners([this.$_popperNode], ft, this.popperTriggers, this.popperHideTriggers, t);
    },
    $_registerEventListeners(e, t, o) {
      this.$_events.push({ targetNodes: e, eventType: t, handler: o }), e.forEach((i) => i.addEventListener(t, o, $e ? {
        passive: !0
      } : void 0));
    },
    $_registerTriggerListeners(e, t, o, i, n) {
      let r = o;
      i != null && (r = typeof i == "function" ? i(r) : i), r.forEach((s) => {
        const a = t[s];
        a && this.$_registerEventListeners(e, a, n);
      });
    },
    $_removeEventListeners(e) {
      const t = [];
      this.$_events.forEach((o) => {
        const { targetNodes: i, eventType: n, handler: r } = o;
        !e || e === n ? i.forEach((s) => s.removeEventListener(n, r)) : t.push(o);
      }), this.$_events = t;
    },
    $_refreshListeners() {
      this.isDisposed || (this.$_removeEventListeners(), this.$_addEventListeners());
    },
    $_handleGlobalClose(e, t = !1) {
      this.$_showFrameLocked || (this.hide({ event: e }), e.closePopover ? this.$emit("close-directive") : this.$emit("auto-hide"), t && (this.$_preventShow = !0, setTimeout(() => {
        this.$_preventShow = !1;
      }, 300)));
    },
    $_detachPopperNode() {
      this.$_popperNode.parentNode && this.$_popperNode.parentNode.removeChild(this.$_popperNode);
    },
    $_swapTargetAttrs(e, t) {
      for (const o of this.$_targetNodes) {
        const i = o.getAttribute(e);
        i && (o.removeAttribute(e), o.setAttribute(t, i));
      }
    },
    $_applyAttrsToTarget(e) {
      for (const t of this.$_targetNodes)
        for (const o in e) {
          const i = e[o];
          i == null ? t.removeAttribute(o) : t.setAttribute(o, i);
        }
    },
    $_updateParentShownChildren(e) {
      let t = this.parentPopper;
      for (; t; )
        e ? t.shownChildren.add(this.randomId) : (t.shownChildren.delete(this.randomId), t.pendingHide && t.hide()), t = t.parentPopper;
    },
    $_isAimingPopper() {
      const e = this.$_referenceNode.getBoundingClientRect();
      if (ge >= e.left && ge <= e.right && ve >= e.top && ve <= e.bottom) {
        const t = this.$_popperNode.getBoundingClientRect(), o = ge - X, i = ve - K, n = t.left + t.width / 2 - X + (t.top + t.height / 2) - K + t.width + t.height, r = X + o * n, s = K + i * n;
        return Se(X, K, r, s, t.left, t.top, t.left, t.bottom) || // Left edge
        Se(X, K, r, s, t.left, t.top, t.right, t.top) || // Top edge
        Se(X, K, r, s, t.right, t.top, t.right, t.bottom) || // Right edge
        Se(X, K, r, s, t.left, t.bottom, t.right, t.bottom);
      }
      return !1;
    }
  },
  render() {
    return this.$slots.default(this.slotData);
  }
});
if (typeof document < "u" && typeof window < "u") {
  if (jt) {
    const e = $e ? {
      passive: !0,
      capture: !0
    } : !0;
    document.addEventListener("touchstart", (t) => yt(t), e), document.addEventListener("touchend", (t) => wt(t, !0), e);
  } else
    window.addEventListener("mousedown", (e) => yt(e), !0), window.addEventListener("click", (e) => wt(e, !1), !0);
  window.addEventListener("resize", ii);
}
function yt(e, t) {
  for (let o = 0; o < B.length; o++) {
    const i = B[o];
    try {
      i.mouseDownContains = i.popperNode().contains(e.target);
    } catch {
    }
  }
}
function wt(e, t) {
  ti(e, t);
}
function ti(e, t) {
  const o = {};
  for (let i = B.length - 1; i >= 0; i--) {
    const n = B[i];
    try {
      const r = n.containsGlobalTarget = n.mouseDownContains || n.popperNode().contains(e.target);
      n.pendingHide = !1, requestAnimationFrame(() => {
        if (n.pendingHide = !1, !o[n.randomId] && xt(n, r, e)) {
          if (n.$_handleGlobalClose(e, t), !e.closeAllPopover && e.closePopover && r) {
            let a = n.parentPopper;
            for (; a; )
              o[a.randomId] = !0, a = a.parentPopper;
            return;
          }
          let s = n.parentPopper;
          for (; s && xt(s, s.containsGlobalTarget, e); )
            s.$_handleGlobalClose(e, t), s = s.parentPopper;
        }
      });
    } catch {
    }
  }
}
function xt(e, t, o) {
  return o.closeAllPopover || o.closePopover && t || oi(e, o) && !t;
}
function oi(e, t) {
  if (typeof e.autoHide == "function") {
    const o = e.autoHide(t);
    return e.lastAutoHide = o, o;
  }
  return e.autoHide;
}
function ii() {
  for (let e = 0; e < B.length; e++)
    B[e].$_computePosition();
}
let X = 0, K = 0, ge = 0, ve = 0;
typeof window < "u" && window.addEventListener("mousemove", (e) => {
  X = ge, K = ve, ge = e.clientX, ve = e.clientY;
}, $e ? {
  passive: !0
} : void 0);
function Se(e, t, o, i, n, r, s, a) {
  const l = ((s - n) * (t - r) - (a - r) * (e - n)) / ((a - r) * (o - e) - (s - n) * (i - t)), u = ((o - e) * (t - r) - (i - t) * (e - n)) / ((a - r) * (o - e) - (s - n) * (i - t));
  return l >= 0 && l <= 1 && u >= 0 && u <= 1;
}
const ni = {
  extends: Ut()
}, et = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [i, n] of t)
    o[i] = n;
  return o;
};
function ri(e, t, o, i, n, r) {
  return k(), E("div", {
    ref: "reference",
    class: Pe(["v-popper", {
      "v-popper--shown": e.slotData.isShown
    }])
  }, [
    ee(e.$slots, "default", Ae(Ne(e.slotData)))
  ], 2);
}
const si = /* @__PURE__ */ et(ni, [["render", ri]]);
function ai() {
  var e = window.navigator.userAgent, t = e.indexOf("MSIE ");
  if (t > 0)
    return parseInt(e.substring(t + 5, e.indexOf(".", t)), 10);
  var o = e.indexOf("Trident/");
  if (o > 0) {
    var i = e.indexOf("rv:");
    return parseInt(e.substring(i + 3, e.indexOf(".", i)), 10);
  }
  var n = e.indexOf("Edge/");
  return n > 0 ? parseInt(e.substring(n + 5, e.indexOf(".", n)), 10) : -1;
}
let Te;
function Ye() {
  Ye.init || (Ye.init = !0, Te = ai() !== -1);
}
var Le = {
  name: "ResizeObserver",
  props: {
    emitOnMount: {
      type: Boolean,
      default: !1
    },
    ignoreWidth: {
      type: Boolean,
      default: !1
    },
    ignoreHeight: {
      type: Boolean,
      default: !1
    }
  },
  emits: [
    "notify"
  ],
  mounted() {
    Ye(), _t(() => {
      this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.emitOnMount && this.emitSize();
    });
    const e = document.createElement("object");
    this._resizeObject = e, e.setAttribute("aria-hidden", "true"), e.setAttribute("tabindex", -1), e.onload = this.addResizeHandlers, e.type = "text/html", Te && this.$el.appendChild(e), e.data = "about:blank", Te || this.$el.appendChild(e);
  },
  beforeUnmount() {
    this.removeResizeHandlers();
  },
  methods: {
    compareAndNotify() {
      (!this.ignoreWidth && this._w !== this.$el.offsetWidth || !this.ignoreHeight && this._h !== this.$el.offsetHeight) && (this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.emitSize());
    },
    emitSize() {
      this.$emit("notify", {
        width: this._w,
        height: this._h
      });
    },
    addResizeHandlers() {
      this._resizeObject.contentDocument.defaultView.addEventListener("resize", this.compareAndNotify), this.compareAndNotify();
    },
    removeResizeHandlers() {
      this._resizeObject && this._resizeObject.onload && (!Te && this._resizeObject.contentDocument && this._resizeObject.contentDocument.defaultView.removeEventListener("resize", this.compareAndNotify), this.$el.removeChild(this._resizeObject), this._resizeObject.onload = null, this._resizeObject = null);
    }
  }
};
const li = /* @__PURE__ */ ro("data-v-b329ee4c");
io("data-v-b329ee4c");
const ui = {
  class: "resize-observer",
  tabindex: "-1"
};
no();
const di = /* @__PURE__ */ li((e, t, o, i, n, r) => (k(), Me("div", ui)));
Le.render = di;
Le.__scopeId = "data-v-b329ee4c";
Le.__file = "src/components/ResizeObserver.vue";
const Gt = (e = "theme") => ({
  computed: {
    themeClass() {
      return Qo(this[e]);
    }
  }
}), ci = le({
  name: "VPopperContent",
  components: {
    ResizeObserver: Le
  },
  mixins: [
    Gt()
  ],
  props: {
    popperId: String,
    theme: String,
    shown: Boolean,
    mounted: Boolean,
    skipTransition: Boolean,
    autoHide: Boolean,
    handleResize: Boolean,
    classes: Object,
    result: Object
  },
  emits: [
    "hide",
    "resize"
  ],
  methods: {
    toPx(e) {
      return e != null && !isNaN(e) ? `${e}px` : null;
    }
  }
}), pi = ["id", "aria-hidden", "tabindex", "data-popper-placement"], hi = {
  ref: "inner",
  class: "v-popper__inner"
}, fi = /* @__PURE__ */ z("div", { class: "v-popper__arrow-outer" }, null, -1), mi = /* @__PURE__ */ z("div", { class: "v-popper__arrow-inner" }, null, -1), gi = [
  fi,
  mi
];
function vi(e, t, o, i, n, r) {
  const s = We("ResizeObserver");
  return k(), E("div", {
    id: e.popperId,
    ref: "popover",
    class: Pe(["v-popper__popper", [
      e.themeClass,
      e.classes.popperClass,
      {
        "v-popper__popper--shown": e.shown,
        "v-popper__popper--hidden": !e.shown,
        "v-popper__popper--show-from": e.classes.showFrom,
        "v-popper__popper--show-to": e.classes.showTo,
        "v-popper__popper--hide-from": e.classes.hideFrom,
        "v-popper__popper--hide-to": e.classes.hideTo,
        "v-popper__popper--skip-transition": e.skipTransition,
        "v-popper__popper--arrow-overflow": e.result && e.result.arrow.overflow,
        "v-popper__popper--no-positioning": !e.result
      }
    ]]),
    style: L(e.result ? {
      position: e.result.strategy,
      transform: `translate3d(${Math.round(e.result.x)}px,${Math.round(e.result.y)}px,0)`
    } : void 0),
    "aria-hidden": e.shown ? "false" : "true",
    tabindex: e.autoHide ? 0 : void 0,
    "data-popper-placement": e.result ? e.result.placement : void 0,
    onKeyup: t[2] || (t[2] = so((a) => e.autoHide && e.$emit("hide"), ["esc"]))
  }, [
    z("div", {
      class: "v-popper__backdrop",
      onClick: t[0] || (t[0] = (a) => e.autoHide && e.$emit("hide"))
    }),
    z("div", {
      class: "v-popper__wrapper",
      style: L(e.result ? {
        transformOrigin: e.result.transformOrigin
      } : void 0)
    }, [
      z("div", hi, [
        e.mounted ? (k(), E(Tt, { key: 0 }, [
          z("div", null, [
            ee(e.$slots, "default")
          ]),
          e.handleResize ? (k(), Me(s, {
            key: 0,
            onNotify: t[1] || (t[1] = (a) => e.$emit("resize", a))
          })) : pe("", !0)
        ], 64)) : pe("", !0)
      ], 512),
      z("div", {
        ref: "arrow",
        class: "v-popper__arrow-container",
        style: L(e.result ? {
          left: e.toPx(e.result.arrow.x),
          top: e.toPx(e.result.arrow.y)
        } : void 0)
      }, gi, 4)
    ], 4)
  ], 46, pi);
}
const Yt = /* @__PURE__ */ et(ci, [["render", vi]]), Zt = {
  methods: {
    show(...e) {
      return this.$refs.popper.show(...e);
    },
    hide(...e) {
      return this.$refs.popper.hide(...e);
    },
    dispose(...e) {
      return this.$refs.popper.dispose(...e);
    },
    onResize(...e) {
      return this.$refs.popper.onResize(...e);
    }
  }
};
let Ze = function() {
};
typeof window < "u" && (Ze = window.Element);
const yi = le({
  name: "VPopperWrapper",
  components: {
    Popper: si,
    PopperContent: Yt
  },
  mixins: [
    Zt,
    Gt("finalTheme")
  ],
  props: {
    theme: {
      type: String,
      default: null
    },
    referenceNode: {
      type: Function,
      default: null
    },
    shown: {
      type: Boolean,
      default: !1
    },
    showGroup: {
      type: String,
      default: null
    },
    // eslint-disable-next-line vue/require-prop-types
    ariaId: {
      default: null
    },
    disabled: {
      type: Boolean,
      default: void 0
    },
    positioningDisabled: {
      type: Boolean,
      default: void 0
    },
    placement: {
      type: String,
      default: void 0
    },
    delay: {
      type: [String, Number, Object],
      default: void 0
    },
    distance: {
      type: [Number, String],
      default: void 0
    },
    skidding: {
      type: [Number, String],
      default: void 0
    },
    triggers: {
      type: Array,
      default: void 0
    },
    showTriggers: {
      type: [Array, Function],
      default: void 0
    },
    hideTriggers: {
      type: [Array, Function],
      default: void 0
    },
    popperTriggers: {
      type: Array,
      default: void 0
    },
    popperShowTriggers: {
      type: [Array, Function],
      default: void 0
    },
    popperHideTriggers: {
      type: [Array, Function],
      default: void 0
    },
    container: {
      type: [String, Object, Ze, Boolean],
      default: void 0
    },
    boundary: {
      type: [String, Ze],
      default: void 0
    },
    strategy: {
      type: String,
      default: void 0
    },
    autoHide: {
      type: [Boolean, Function],
      default: void 0
    },
    handleResize: {
      type: Boolean,
      default: void 0
    },
    instantMove: {
      type: Boolean,
      default: void 0
    },
    eagerMount: {
      type: Boolean,
      default: void 0
    },
    popperClass: {
      type: [String, Array, Object],
      default: void 0
    },
    computeTransformOrigin: {
      type: Boolean,
      default: void 0
    },
    /**
     * @deprecated
     */
    autoMinSize: {
      type: Boolean,
      default: void 0
    },
    autoSize: {
      type: [Boolean, String],
      default: void 0
    },
    /**
     * @deprecated
     */
    autoMaxSize: {
      type: Boolean,
      default: void 0
    },
    autoBoundaryMaxSize: {
      type: Boolean,
      default: void 0
    },
    preventOverflow: {
      type: Boolean,
      default: void 0
    },
    overflowPadding: {
      type: [Number, String],
      default: void 0
    },
    arrowPadding: {
      type: [Number, String],
      default: void 0
    },
    arrowOverflow: {
      type: Boolean,
      default: void 0
    },
    flip: {
      type: Boolean,
      default: void 0
    },
    shift: {
      type: Boolean,
      default: void 0
    },
    shiftCrossAxis: {
      type: Boolean,
      default: void 0
    },
    noAutoFocus: {
      type: Boolean,
      default: void 0
    },
    disposeTimeout: {
      type: Number,
      default: void 0
    }
  },
  emits: {
    show: () => !0,
    hide: () => !0,
    "update:shown": (e) => !0,
    "apply-show": () => !0,
    "apply-hide": () => !0,
    "close-group": () => !0,
    "close-directive": () => !0,
    "auto-hide": () => !0,
    resize: () => !0
  },
  computed: {
    finalTheme() {
      return this.theme ?? this.$options.vPopperTheme;
    }
  },
  methods: {
    getTargetNodes() {
      return Array.from(this.$el.children).filter((e) => e !== this.$refs.popperContent.$el);
    }
  }
});
function wi(e, t, o, i, n, r) {
  const s = We("PopperContent"), a = We("Popper");
  return k(), Me(a, ao({ ref: "popper" }, e.$props, {
    theme: e.finalTheme,
    "target-nodes": e.getTargetNodes,
    "popper-node": () => e.$refs.popperContent.$el,
    class: [
      e.themeClass
    ],
    onShow: t[0] || (t[0] = () => e.$emit("show")),
    onHide: t[1] || (t[1] = () => e.$emit("hide")),
    "onUpdate:shown": t[2] || (t[2] = (l) => e.$emit("update:shown", l)),
    onApplyShow: t[3] || (t[3] = () => e.$emit("apply-show")),
    onApplyHide: t[4] || (t[4] = () => e.$emit("apply-hide")),
    onCloseGroup: t[5] || (t[5] = () => e.$emit("close-group")),
    onCloseDirective: t[6] || (t[6] = () => e.$emit("close-directive")),
    onAutoHide: t[7] || (t[7] = () => e.$emit("auto-hide")),
    onResize: t[8] || (t[8] = () => e.$emit("resize"))
  }), {
    default: ye(({
      popperId: l,
      isShown: u,
      shouldMountContent: d,
      skipTransition: p,
      autoHide: m,
      show: h,
      hide: g,
      handleResize: v,
      onResize: w,
      classes: c,
      result: f
    }) => [
      ee(e.$slots, "default", {
        shown: u,
        show: h,
        hide: g
      }),
      Oe(s, {
        ref: "popperContent",
        "popper-id": l,
        theme: e.finalTheme,
        shown: u,
        mounted: d,
        "skip-transition": p,
        "auto-hide": m,
        "handle-resize": v,
        classes: c,
        result: f,
        onHide: g,
        onResize: w
      }, {
        default: ye(() => [
          ee(e.$slots, "popper", {
            shown: u,
            hide: g
          })
        ]),
        _: 2
      }, 1032, ["popper-id", "theme", "shown", "mounted", "skip-transition", "auto-hide", "handle-resize", "classes", "result", "onHide", "onResize"])
    ]),
    _: 3
  }, 16, ["theme", "target-nodes", "popper-node", "class"]);
}
const tt = /* @__PURE__ */ et(yi, [["render", wi]]);
({
  ...tt
});
({
  ...tt
});
const xi = {
  ...tt,
  name: "VTooltip",
  vPopperTheme: "tooltip"
};
le({
  name: "VTooltipDirective",
  components: {
    Popper: Ut(),
    PopperContent: Yt
  },
  mixins: [
    Zt
  ],
  inheritAttrs: !1,
  props: {
    theme: {
      type: String,
      default: "tooltip"
    },
    html: {
      type: Boolean,
      default: (e) => Ue(e.theme, "html")
    },
    content: {
      type: [String, Number, Function],
      default: null
    },
    loadingContent: {
      type: String,
      default: (e) => Ue(e.theme, "loadingContent")
    },
    targetNodes: {
      type: Function,
      required: !0
    }
  },
  data() {
    return {
      asyncContent: null
    };
  },
  computed: {
    isContentAsync() {
      return typeof this.content == "function";
    },
    loading() {
      return this.isContentAsync && this.asyncContent == null;
    },
    finalContent() {
      return this.isContentAsync ? this.loading ? this.loadingContent : this.asyncContent : this.content;
    }
  },
  watch: {
    content: {
      handler() {
        this.fetchContent(!0);
      },
      immediate: !0
    },
    async finalContent() {
      await this.$nextTick(), this.$refs.popper.onResize();
    }
  },
  created() {
    this.$_fetchId = 0;
  },
  methods: {
    fetchContent(e) {
      if (typeof this.content == "function" && this.$_isShown && (e || !this.$_loading && this.asyncContent == null)) {
        this.asyncContent = null, this.$_loading = !0;
        const t = ++this.$_fetchId, o = this.content(this);
        o.then ? o.then((i) => this.onResult(t, i)) : this.onResult(t, o);
      }
    },
    onResult(e, t) {
      e === this.$_fetchId && (this.$_loading = !1, this.asyncContent = t);
    },
    onShow() {
      this.$_isShown = !0, this.fetchContent();
    },
    onHide() {
      this.$_isShown = !1;
    }
  }
});
const bi = xi;
function $i({ histogramDataMap: e, step: t, min: o, max: i }) {
  const n = [];
  for (let r = o; r <= i; r += t) {
    let s = 0, a = 0;
    for (let l = r; l < r + t && l <= i; l++)
      e.has(l) && (s += e.get(l), a++);
    a > 0 ? n.push({
      avg: Number((s / a).toFixed(2)),
      sum: s,
      range: {
        from: r,
        to: Math.min(i, r + t)
      }
    }) : n.push({
      avg: 0,
      sum: 0,
      range: {
        from: r,
        to: Math.min(i, r + t)
      }
    });
  }
  return n;
}
const _i = /* @__PURE__ */ le({
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
    histogramNoZeroColumnMinHeightPercent: {
      type: Number,
      required: !0
    },
    sliderSize: {
      type: Number,
      required: !0
    }
  },
  setup(e) {
    const t = Pt(), o = e, { histogramData: i, min: n, max: r, histogramColumnCount: s, histogramColumnOffset: a, histogramColumnAverages: l, histogramNoZeroColumnMinHeightPercent: u } = St(o), d = O(), p = O(0), m = _o(
      d,
      () => {
        var f;
        Ce(p, (f = _(d)) == null ? void 0 : f.clientWidth);
      }
    ), h = V(() => {
      const f = _(p);
      return f ? _($o((f - (_(a) * _(s) - _(a))) / _(s))) : 0;
    }), g = Ao(d, () => {
      m.trigger();
    }), v = No(
      d,
      ([{ isIntersecting: f }]) => {
        f && m.trigger();
      }
    );
    Ct(() => {
      g.stop(), v.stop();
    });
    const w = V(() => {
      let f = /* @__PURE__ */ new Map();
      return _(i).forEach((y) => {
        f.set(y.value, y.count);
      }), f;
    }), c = V(() => {
      const f = Math.ceil(_(r) / _(s)), y = _(l) ? _(l) : $i({
        histogramDataMap: _(w),
        step: f,
        min: _(n),
        max: _(r)
      }), $ = Math.max.apply(Math, y.map((x) => typeof x == "number" ? x : x.avg));
      return y.map((x, S) => {
        const P = (typeof x == "number" ? x : x.avg) / $ * 100, D = P > 0 ? Math.max(P, _(u)) : 0;
        let A = 0;
        return S > 0 && (A = _(h) * S + S * _(a)), {
          heightPercentage: D,
          x: A,
          data: x
        };
      });
    });
    return (f, y) => (k(), E("div", {
      class: "histogram",
      style: L({
        "--sliderSize": e.sliderSize
      })
    }, [
      z("div", {
        ref_key: "histogramRef",
        ref: d,
        style: L({ height: `${e.histogramHeight}px` }),
        class: "histogram-columns"
      }, [
        (k(!0), E(Tt, null, lo(c.value, ($, x) => (k(), E("div", {
          key: x,
          class: "histogram-column-wrapper",
          style: L({
            left: `${$.x}px`,
            width: h.value + "px",
            height: `${$.heightPercentage}%`
          })
        }, [
          Oe(T(bi), {
            class: "histogram-column-tooltip",
            "popper-class": "histogram-column-tooltip-popper",
            disabled: !T(t).columnTooltip
          }, At({
            default: ye(() => [
              z("div", {
                class: "histogram-column",
                style: L({
                  background: e.histogramColumnColor
                })
              }, null, 4)
            ]),
            _: 2
          }, [
            T(t).columnTooltip ? {
              name: "popper",
              fn: ye(() => [
                ee(f.$slots, "columnTooltip", { column: $ }, void 0, !0)
              ]),
              key: "0"
            } : void 0
          ]), 1032, ["disabled"])
        ], 4))), 128))
      ], 4)
    ], 4));
  }
}), Si = /* @__PURE__ */ Xe(_i, [["__scopeId", "data-v-ebc7874a"]]), Ci = { class: "histogram-range-container" }, Ti = /* @__PURE__ */ le({
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
    histogramNoZeroColumnMinHeightPercent: {
      type: Number,
      default: 0
    },
    sliderColor: {
      type: String,
      default: "#3264fe"
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
    },
    rangeHeight: {
      type: String,
      default: "5px"
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = t, i = Pt(), n = e;
    console.log("### slots 111", i);
    const r = Ht(n, "modelValue", o), s = V(() => n.histogramColumnCount <= n.max ? n.histogramColumnCount : n.max);
    return (a, l) => (k(), E("div", Ci, [
      Oe(Si, {
        "histogram-data": e.histogramData,
        "histogram-height": e.histogramHeight,
        "histogram-column-count": s.value,
        "histogram-column-averages": e.histogramColumnAverages,
        max: e.max,
        min: e.min,
        "histogram-column-color": e.histogramColumnColor,
        "histogram-column-offset": e.histogramColumnOffset,
        "slider-size": e.sliderSize,
        "histogram-no-zero-column-min-height-percent": e.histogramNoZeroColumnMinHeightPercent
      }, At({ _: 2 }, [
        T(i).columnTooltip ? {
          name: "columnTooltip",
          fn: ye((u) => [
            ee(a.$slots, "columnTooltip", Ae(Ne(u)), void 0, !0)
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["histogram-data", "histogram-height", "histogram-column-count", "histogram-column-averages", "max", "min", "histogram-column-color", "histogram-column-offset", "slider-size", "histogram-no-zero-column-min-height-percent"]),
      Oe(ko, {
        modelValue: T(r),
        "onUpdate:modelValue": l[0] || (l[0] = (u) => uo(r) ? r.value = u : null),
        min: e.min,
        max: e.max,
        "slider-color": e.sliderColor,
        "slider-size": e.sliderSize,
        "range-color": e.rangeColor,
        "range-active-color": e.rangeActiveColor,
        "range-height": e.rangeHeight
      }, null, 8, ["modelValue", "min", "max", "slider-color", "slider-size", "range-color", "range-active-color", "range-height"])
    ]));
  }
}), Ai = /* @__PURE__ */ Xe(Ti, [["__scopeId", "data-v-58f9c35d"]]);
export {
  Ai as default
};
//# sourceMappingURL=vue-histogram-dual-range-lib.js.map

import { unref as T, computed as L, ref as M, watch as ne, getCurrentScope as Jt, onScopeDispose as Kt, isReactive as Zt, getCurrentInstance as gt, nextTick as vt, onMounted as Qt, defineComponent as ae, toRefs as yt, onUnmounted as wt, openBlock as B, createElementBlock as J, normalizeStyle as q, createElementVNode as z, pushScopeId as bt, popScopeId as xt, createBlock as qe, normalizeClass as $t, renderSlot as ue, normalizeProps as _t, guardReactiveProps as St, withScopeId as eo, resolveComponent as Ee, withKeys as to, Fragment as Ct, createCommentVNode as Ze, mergeProps as oo, withCtx as ve, createVNode as Te, useSlots as Tt, renderList as io, createSlots as At, isRef as no } from "vue";
function Pt(e) {
  return Jt() ? (Kt(e), !0) : !1;
}
function S(e, t) {
  return t == null ? T(e) : T(e)[t];
}
function ye(e) {
  return typeof e == "function" ? e() : T(e);
}
const ro = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const so = (e) => typeof e < "u", ao = (e) => e != null, Me = () => {
};
function lo(e, t) {
  function o(...i) {
    return new Promise((n, r) => {
      Promise.resolve(e(() => t.apply(this, i), { fn: t, thisArg: this, args: i })).then(n).catch(r);
    });
  }
  return o;
}
const co = (e) => e();
function Se(...e) {
  if (e.length === 2) {
    const [t, o] = e;
    t.value = o;
  }
  if (e.length === 3) {
    const [t, o, i] = e;
    t[o] = i;
  }
}
function uo(e, t = {}) {
  const {
    method: o = "parseFloat",
    radix: i,
    nanToZero: n
  } = t;
  return L(() => {
    let r = ye(e);
    return typeof r == "string" && (r = Number[o](r, i)), n && Number.isNaN(r) && (r = 0), r;
  });
}
function Ot(e, t, o = {}) {
  const {
    eventFilter: i = co,
    ...n
  } = o, r = lo(
    i,
    t
  );
  let s, a, l;
  if (n.flush === "sync") {
    const d = M(!1);
    a = () => {
    }, s = (c) => {
      d.value = !0, c(), d.value = !1;
    }, l = ne(
      e,
      (...c) => {
        d.value || r(...c);
      },
      n
    );
  } else {
    const d = [], c = M(0), u = M(0);
    a = () => {
      c.value = u.value;
    }, d.push(
      ne(
        e,
        () => {
          u.value++;
        },
        { ...n, flush: "sync" }
      )
    ), s = (h) => {
      const p = u.value;
      h(), c.value += u.value - p;
    }, d.push(
      ne(
        e,
        (...h) => {
          const p = c.value > 0 && c.value === u.value;
          c.value = 0, u.value = 0, !p && r(...h);
        },
        n
      )
    ), l = () => {
      d.forEach((h) => h());
    };
  }
  return { stop: l, ignoreUpdates: s, ignorePrevAsyncUpdates: a };
}
function po(e, t, o = {}) {
  let i;
  function n() {
    if (!i)
      return;
    const c = i;
    i = void 0, c();
  }
  function r(c) {
    i = c;
  }
  const s = (c, u) => (n(), t(c, u, r)), a = Ot(e, s, o), { ignoreUpdates: l } = a;
  return {
    ...a,
    trigger: () => {
      let c;
      return l(() => {
        c = s(ho(e), fo(e));
      }), c;
    }
  };
}
function ho(e) {
  return Zt(e) ? e : Array.isArray(e) ? e.map((t) => ye(t)) : ye(e);
}
function fo(e) {
  return Array.isArray(e) ? e.map(() => {
  }) : void 0;
}
function pe(e) {
  var t;
  const o = ye(e);
  return (t = o == null ? void 0 : o.$el) != null ? t : o;
}
const Nt = ro ? window : void 0;
function mo() {
  const e = M(!1), t = gt();
  return t && Qt(() => {
    e.value = !0;
  }, t), e;
}
function zt(e) {
  const t = mo();
  return L(() => (t.value, !!e()));
}
function go(e) {
  return JSON.parse(JSON.stringify(e));
}
function vo(e, t, o = {}) {
  const { window: i = Nt, ...n } = o;
  let r;
  const s = zt(() => i && "ResizeObserver" in i), a = () => {
    r && (r.disconnect(), r = void 0);
  }, l = L(() => Array.isArray(e) ? e.map((u) => pe(u)) : [pe(e)]), d = ne(
    l,
    (u) => {
      if (a(), s.value && i) {
        r = new ResizeObserver(t);
        for (const h of u)
          h && r.observe(h, n);
      }
    },
    { immediate: !0, flush: "post" }
  ), c = () => {
    a(), d();
  };
  return Pt(c), {
    isSupported: s,
    stop: c
  };
}
function yo(e, t, o = {}) {
  const {
    root: i,
    rootMargin: n = "0px",
    threshold: r = 0.1,
    window: s = Nt,
    immediate: a = !0
  } = o, l = zt(() => s && "IntersectionObserver" in s), d = L(() => {
    const m = ye(e);
    return (Array.isArray(m) ? m : [m]).map(pe).filter(ao);
  });
  let c = Me;
  const u = M(a), h = l.value ? ne(
    () => [d.value, pe(i), u.value],
    ([m, y]) => {
      if (c(), !u.value || !m.length)
        return;
      const b = new IntersectionObserver(
        t,
        {
          root: pe(y),
          rootMargin: n,
          threshold: r
        }
      );
      m.forEach((f) => f && b.observe(f)), c = () => {
        b.disconnect(), c = Me;
      };
    },
    { immediate: a, flush: "post" }
  ) : Me, p = () => {
    c(), h(), u.value = !1;
  };
  return Pt(p), {
    isSupported: l,
    isActive: u,
    pause() {
      c(), u.value = !1;
    },
    resume() {
      u.value = !0;
    },
    stop: p
  };
}
function Rt(e, t, o, i = {}) {
  var n, r, s;
  const {
    clone: a = !1,
    passive: l = !1,
    eventName: d,
    deep: c = !1,
    defaultValue: u,
    shouldEmit: h
  } = i, p = gt(), m = o || (p == null ? void 0 : p.emit) || ((n = p == null ? void 0 : p.$emit) == null ? void 0 : n.bind(p)) || ((s = (r = p == null ? void 0 : p.proxy) == null ? void 0 : r.$emit) == null ? void 0 : s.bind(p == null ? void 0 : p.proxy));
  let y = d;
  y = y || `update:${t.toString()}`;
  const b = (g) => a ? typeof a == "function" ? a(g) : go(g) : g, f = () => so(e[t]) ? b(e[t]) : u, w = (g) => {
    h ? h(g) && m(y, g) : m(y, g);
  };
  if (l) {
    const g = f(), x = M(g);
    let v = !1;
    return ne(
      () => e[t],
      (_) => {
        v || (v = !0, x.value = b(_), vt(() => v = !1));
      }
    ), ne(
      x,
      (_) => {
        !v && (_ !== e[t] || c) && w(_);
      },
      { deep: c }
    ), x;
  } else
    return L({
      get() {
        return f();
      },
      set(g) {
        w(g);
      }
    });
}
const wo = (e) => (bt("data-v-64a45762"), e = e(), xt(), e), bo = { class: "sliders-control" }, xo = /* @__PURE__ */ wo(() => /* @__PURE__ */ z("div", { class: "slider-track" }, null, -1)), $o = ["value", "min", "max"], _o = ["value", "min", "max"], So = /* @__PURE__ */ ae({
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
    const o = t, i = e, { sliderColor: n, rangeColor: r, rangeActiveColor: s, min: a, max: l } = yt(i), d = Rt(i, "modelValue", o), c = ([g, x]) => {
      let v = g, _ = x;
      return v > _ && (v = _ - 1), _ < v && (_ = v + 1), (v < S(a) || v > S(l)) && (v = S(a)), (_ > S(l) || _ < S(a)) && (_ = S(l)), [v, _];
    }, { ignoreUpdates: u, stop: h } = Ot(d, (g, x) => {
      g[0] === x[0] && g[1] === x[1] || Se(d, c(g));
    });
    wt(() => {
      h();
    });
    const p = M(), m = M(), y = M(), b = (g) => {
      let x = parseInt(g.target.value, 10);
      const v = S(d)[1];
      u(() => {
        Se(d, c([x, v]));
      });
    }, f = (g) => {
      const x = S(d)[0];
      let v = parseInt(g.target.value, 10);
      u(() => {
        Se(d, c([x, v]));
      });
    }, w = L(() => {
      const g = S(d)[0] / S(l) * 100, x = S(d)[1] / S(l) * 100;
      return `linear-gradient(to right, ${S(r)} ${g}%, ${S(s)} ${g}%, ${S(s)} ${x}%, ${S(r)} ${x}%)`;
    });
    return (g, x) => (B(), J("div", {
      class: "double-range-slider",
      style: q({
        "--sliderColor": T(n),
        "--sliderBorderColor": e.sliderBorderColor,
        "--sliderHoverColor": e.sliderHoverColor,
        "--sliderSize": e.sliderSize,
        "--rangeColor": T(r),
        "--rangeActiveColor": T(s),
        "--rangeFillBg": w.value
      })
    }, [
      z("div", bo, [
        xo,
        z("input", {
          ref_key: "fromSliderRef",
          ref: p,
          class: "fromSlider",
          type: "range",
          value: T(d)[0],
          min: T(a),
          max: T(l),
          onInput: b
        }, null, 40, $o),
        z("input", {
          ref_key: "toSliderRef",
          ref: m,
          class: "toSlider",
          type: "range",
          value: T(d)[1],
          min: T(a),
          max: T(l),
          style: q({ background: y.value }),
          onInput: f
        }, null, 44, _o)
      ])
    ], 4));
  }
}), Ge = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [i, n] of t)
    o[i] = n;
  return o;
}, Co = /* @__PURE__ */ Ge(So, [["__scopeId", "data-v-64a45762"]]), To = ["top", "right", "bottom", "left"], Qe = ["start", "end"], et = /* @__PURE__ */ To.reduce((e, t) => e.concat(t, t + "-" + Qe[0], t + "-" + Qe[1]), []), ie = Math.min, oe = Math.max, Ao = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Po = {
  start: "end",
  end: "start"
};
function Le(e, t, o) {
  return oe(e, ie(t, o));
}
function le(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function I(e) {
  return e.split("-")[0];
}
function D(e) {
  return e.split("-")[1];
}
function Ht(e) {
  return e === "x" ? "y" : "x";
}
function Ue(e) {
  return e === "y" ? "height" : "width";
}
function se(e) {
  return ["top", "bottom"].includes(I(e)) ? "y" : "x";
}
function Ye(e) {
  return Ht(se(e));
}
function kt(e, t, o) {
  o === void 0 && (o = !1);
  const i = D(e), n = Ye(e), r = Ue(n);
  let s = n === "x" ? i === (o ? "end" : "start") ? "right" : "left" : i === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (s = Pe(s)), [s, Pe(s)];
}
function Oo(e) {
  const t = Pe(e);
  return [Ae(e), t, Ae(t)];
}
function Ae(e) {
  return e.replace(/start|end/g, (t) => Po[t]);
}
function No(e, t, o) {
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
function zo(e, t, o, i) {
  const n = D(e);
  let r = No(I(e), o === "start", i);
  return n && (r = r.map((s) => s + "-" + n), t && (r = r.concat(r.map(Ae)))), r;
}
function Pe(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Ao[t]);
}
function Ro(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Mt(e) {
  return typeof e != "number" ? Ro(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function he(e) {
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
function tt(e, t, o) {
  let {
    reference: i,
    floating: n
  } = e;
  const r = se(t), s = Ye(t), a = Ue(s), l = I(t), d = r === "y", c = i.x + i.width / 2 - n.width / 2, u = i.y + i.height / 2 - n.height / 2, h = i[a] / 2 - n[a] / 2;
  let p;
  switch (l) {
    case "top":
      p = {
        x: c,
        y: i.y - n.height
      };
      break;
    case "bottom":
      p = {
        x: c,
        y: i.y + i.height
      };
      break;
    case "right":
      p = {
        x: i.x + i.width,
        y: u
      };
      break;
    case "left":
      p = {
        x: i.x - n.width,
        y: u
      };
      break;
    default:
      p = {
        x: i.x,
        y: i.y
      };
  }
  switch (D(t)) {
    case "start":
      p[s] -= h * (o && d ? -1 : 1);
      break;
    case "end":
      p[s] += h * (o && d ? -1 : 1);
      break;
  }
  return p;
}
const Ho = async (e, t, o) => {
  const {
    placement: i = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: s
  } = o, a = r.filter(Boolean), l = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let d = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: n
  }), {
    x: c,
    y: u
  } = tt(d, i, l), h = i, p = {}, m = 0;
  for (let y = 0; y < a.length; y++) {
    const {
      name: b,
      fn: f
    } = a[y], {
      x: w,
      y: g,
      data: x,
      reset: v
    } = await f({
      x: c,
      y: u,
      initialPlacement: i,
      placement: h,
      strategy: n,
      middlewareData: p,
      rects: d,
      platform: s,
      elements: {
        reference: e,
        floating: t
      }
    });
    c = w ?? c, u = g ?? u, p = {
      ...p,
      [b]: {
        ...p[b],
        ...x
      }
    }, v && m <= 50 && (m++, typeof v == "object" && (v.placement && (h = v.placement), v.rects && (d = v.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: n
    }) : v.rects), {
      x: c,
      y: u
    } = tt(d, h, l)), y = -1);
  }
  return {
    x: c,
    y: u,
    placement: h,
    strategy: n,
    middlewareData: p
  };
};
async function ze(e, t) {
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
    boundary: d = "clippingAncestors",
    rootBoundary: c = "viewport",
    elementContext: u = "floating",
    altBoundary: h = !1,
    padding: p = 0
  } = le(t, e), m = Mt(p), b = a[h ? u === "floating" ? "reference" : "floating" : u], f = he(await r.getClippingRect({
    element: (o = await (r.isElement == null ? void 0 : r.isElement(b))) == null || o ? b : b.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(a.floating)),
    boundary: d,
    rootBoundary: c,
    strategy: l
  })), w = u === "floating" ? {
    x: i,
    y: n,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, g = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(a.floating)), x = await (r.isElement == null ? void 0 : r.isElement(g)) ? await (r.getScale == null ? void 0 : r.getScale(g)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, v = he(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: w,
    offsetParent: g,
    strategy: l
  }) : w);
  return {
    top: (f.top - v.top + m.top) / x.y,
    bottom: (v.bottom - f.bottom + m.bottom) / x.y,
    left: (f.left - v.left + m.left) / x.x,
    right: (v.right - f.right + m.right) / x.x
  };
}
const ko = (e) => ({
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
      element: d,
      padding: c = 0
    } = le(e, t) || {};
    if (d == null)
      return {};
    const u = Mt(c), h = {
      x: o,
      y: i
    }, p = Ye(n), m = Ue(p), y = await s.getDimensions(d), b = p === "y", f = b ? "top" : "left", w = b ? "bottom" : "right", g = b ? "clientHeight" : "clientWidth", x = r.reference[m] + r.reference[p] - h[p] - r.floating[m], v = h[p] - r.reference[p], _ = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(d));
    let A = _ ? _[g] : 0;
    (!A || !await (s.isElement == null ? void 0 : s.isElement(_))) && (A = a.floating[g] || r.floating[m]);
    const R = x / 2 - v / 2, N = A / 2 - y[m] / 2 - 1, C = ie(u[f], N), O = ie(u[w], N), W = C, ee = A - y[m] - O, P = A / 2 - y[m] / 2 + R, de = Le(W, P, ee), j = !l.arrow && D(n) != null && P !== de && r.reference[m] / 2 - (P < W ? C : O) - y[m] / 2 < 0, E = j ? P < W ? P - W : P - ee : 0;
    return {
      [p]: h[p] + E,
      data: {
        [p]: de,
        centerOffset: P - de - E,
        ...j && {
          alignmentOffset: E
        }
      },
      reset: j
    };
  }
});
function Mo(e, t, o) {
  return (e ? [...o.filter((n) => D(n) === e), ...o.filter((n) => D(n) !== e)] : o.filter((n) => I(n) === n)).filter((n) => e ? D(n) === e || (t ? Ae(n) !== n : !1) : !0);
}
const Bo = function(e) {
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
        elements: d
      } = t, {
        crossAxis: c = !1,
        alignment: u,
        allowedPlacements: h = et,
        autoAlignment: p = !0,
        ...m
      } = le(e, t), y = u !== void 0 || h === et ? Mo(u || null, p, h) : h, b = await ze(t, m), f = ((o = s.autoPlacement) == null ? void 0 : o.index) || 0, w = y[f];
      if (w == null)
        return {};
      const g = kt(w, r, await (l.isRTL == null ? void 0 : l.isRTL(d.floating)));
      if (a !== w)
        return {
          reset: {
            placement: y[0]
          }
        };
      const x = [b[I(w)], b[g[0]], b[g[1]]], v = [...((i = s.autoPlacement) == null ? void 0 : i.overflows) || [], {
        placement: w,
        overflows: x
      }], _ = y[f + 1];
      if (_)
        return {
          data: {
            index: f + 1,
            overflows: v
          },
          reset: {
            placement: _
          }
        };
      const A = v.map((C) => {
        const O = D(C.placement);
        return [C.placement, O && c ? (
          // Check along the mainAxis and main crossAxis side.
          C.overflows.slice(0, 2).reduce((W, ee) => W + ee, 0)
        ) : (
          // Check only the mainAxis.
          C.overflows[0]
        ), C.overflows];
      }).sort((C, O) => C[1] - O[1]), N = ((n = A.filter((C) => C[2].slice(
        0,
        // Aligned placements should not check their opposite crossAxis
        // side.
        D(C[0]) ? 2 : 3
      ).every((O) => O <= 0))[0]) == null ? void 0 : n[0]) || A[0][0];
      return N !== a ? {
        data: {
          index: f + 1,
          overflows: v
        },
        reset: {
          placement: N
        }
      } : {};
    }
  };
}, Do = function(e) {
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
        elements: d
      } = t, {
        mainAxis: c = !0,
        crossAxis: u = !0,
        fallbackPlacements: h,
        fallbackStrategy: p = "bestFit",
        fallbackAxisSideDirection: m = "none",
        flipAlignment: y = !0,
        ...b
      } = le(e, t);
      if ((o = r.arrow) != null && o.alignmentOffset)
        return {};
      const f = I(n), w = se(a), g = I(a) === a, x = await (l.isRTL == null ? void 0 : l.isRTL(d.floating)), v = h || (g || !y ? [Pe(a)] : Oo(a)), _ = m !== "none";
      !h && _ && v.push(...zo(a, y, m, x));
      const A = [a, ...v], R = await ze(t, b), N = [];
      let C = ((i = r.flip) == null ? void 0 : i.overflows) || [];
      if (c && N.push(R[f]), u) {
        const P = kt(n, s, x);
        N.push(R[P[0]], R[P[1]]);
      }
      if (C = [...C, {
        placement: n,
        overflows: N
      }], !N.every((P) => P <= 0)) {
        var O, W;
        const P = (((O = r.flip) == null ? void 0 : O.index) || 0) + 1, de = A[P];
        if (de)
          return {
            data: {
              index: P,
              overflows: C
            },
            reset: {
              placement: de
            }
          };
        let j = (W = C.filter((E) => E.overflows[0] <= 0).sort((E, G) => E.overflows[1] - G.overflows[1])[0]) == null ? void 0 : W.placement;
        if (!j)
          switch (p) {
            case "bestFit": {
              var ee;
              const E = (ee = C.filter((G) => {
                if (_) {
                  const U = se(G.placement);
                  return U === w || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  U === "y";
                }
                return !0;
              }).map((G) => [G.placement, G.overflows.filter((U) => U > 0).reduce((U, Xt) => U + Xt, 0)]).sort((G, U) => G[1] - U[1])[0]) == null ? void 0 : ee[0];
              E && (j = E);
              break;
            }
            case "initialPlacement":
              j = a;
              break;
          }
        if (n !== j)
          return {
            reset: {
              placement: j
            }
          };
      }
      return {};
    }
  };
};
async function Eo(e, t) {
  const {
    placement: o,
    platform: i,
    elements: n
  } = e, r = await (i.isRTL == null ? void 0 : i.isRTL(n.floating)), s = I(o), a = D(o), l = se(o) === "y", d = ["left", "top"].includes(s) ? -1 : 1, c = r && l ? -1 : 1, u = le(t, e);
  let {
    mainAxis: h,
    crossAxis: p,
    alignmentAxis: m
  } = typeof u == "number" ? {
    mainAxis: u,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...u
  };
  return a && typeof m == "number" && (p = a === "end" ? m * -1 : m), l ? {
    x: p * c,
    y: h * d
  } : {
    x: h * d,
    y: p * c
  };
}
const Lo = function(e) {
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
      } = t, l = await Eo(t, e);
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
}, Fo = function(e) {
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
          fn: (b) => {
            let {
              x: f,
              y: w
            } = b;
            return {
              x: f,
              y: w
            };
          }
        },
        ...l
      } = le(e, t), d = {
        x: o,
        y: i
      }, c = await ze(t, l), u = se(I(n)), h = Ht(u);
      let p = d[h], m = d[u];
      if (r) {
        const b = h === "y" ? "top" : "left", f = h === "y" ? "bottom" : "right", w = p + c[b], g = p - c[f];
        p = Le(w, p, g);
      }
      if (s) {
        const b = u === "y" ? "top" : "left", f = u === "y" ? "bottom" : "right", w = m + c[b], g = m - c[f];
        m = Le(w, m, g);
      }
      const y = a.fn({
        ...t,
        [h]: p,
        [u]: m
      });
      return {
        ...y,
        data: {
          x: y.x - o,
          y: y.y - i
        }
      };
    }
  };
}, Vo = function(e) {
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
      } = le(e, t), l = await ze(t, a), d = I(o), c = D(o), u = se(o) === "y", {
        width: h,
        height: p
      } = i.floating;
      let m, y;
      d === "top" || d === "bottom" ? (m = d, y = c === (await (n.isRTL == null ? void 0 : n.isRTL(r.floating)) ? "start" : "end") ? "left" : "right") : (y = d, m = c === "end" ? "top" : "bottom");
      const b = p - l.top - l.bottom, f = h - l.left - l.right, w = ie(p - l[m], b), g = ie(h - l[y], f), x = !t.middlewareData.shift;
      let v = w, _ = g;
      if (u ? _ = c || x ? ie(g, f) : f : v = c || x ? ie(w, b) : b, x && !c) {
        const R = oe(l.left, 0), N = oe(l.right, 0), C = oe(l.top, 0), O = oe(l.bottom, 0);
        u ? _ = h - 2 * (R !== 0 || N !== 0 ? R + N : oe(l.left, l.right)) : v = p - 2 * (C !== 0 || O !== 0 ? C + O : oe(l.top, l.bottom));
      }
      await s({
        ...t,
        availableWidth: _,
        availableHeight: v
      });
      const A = await n.getDimensions(r.floating);
      return h !== A.width || p !== A.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function H(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function F(e) {
  return H(e).getComputedStyle(e);
}
const ot = Math.min, fe = Math.max, Oe = Math.round;
function Bt(e) {
  const t = F(e);
  let o = parseFloat(t.width), i = parseFloat(t.height);
  const n = e.offsetWidth, r = e.offsetHeight, s = Oe(o) !== n || Oe(i) !== r;
  return s && (o = n, i = r), { width: o, height: i, fallback: s };
}
function Q(e) {
  return Et(e) ? (e.nodeName || "").toLowerCase() : "";
}
let $e;
function Dt() {
  if ($e) return $e;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? ($e = e.brands.map((t) => t.brand + "/" + t.version).join(" "), $e) : navigator.userAgent;
}
function V(e) {
  return e instanceof H(e).HTMLElement;
}
function K(e) {
  return e instanceof H(e).Element;
}
function Et(e) {
  return e instanceof H(e).Node;
}
function it(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof H(e).ShadowRoot || e instanceof ShadowRoot;
}
function Re(e) {
  const { overflow: t, overflowX: o, overflowY: i, display: n } = F(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + i + o) && !["inline", "contents"].includes(n);
}
function Io(e) {
  return ["table", "td", "th"].includes(Q(e));
}
function Fe(e) {
  const t = /firefox/i.test(Dt()), o = F(e), i = o.backdropFilter || o.WebkitBackdropFilter;
  return o.transform !== "none" || o.perspective !== "none" || !!i && i !== "none" || t && o.willChange === "filter" || t && !!o.filter && o.filter !== "none" || ["transform", "perspective"].some((n) => o.willChange.includes(n)) || ["paint", "layout", "strict", "content"].some((n) => {
    const r = o.contain;
    return r != null && r.includes(n);
  });
}
function Lt() {
  return !/^((?!chrome|android).)*safari/i.test(Dt());
}
function Xe(e) {
  return ["html", "body", "#document"].includes(Q(e));
}
function Ft(e) {
  return K(e) ? e : e.contextElement;
}
const Vt = { x: 1, y: 1 };
function ce(e) {
  const t = Ft(e);
  if (!V(t)) return Vt;
  const o = t.getBoundingClientRect(), { width: i, height: n, fallback: r } = Bt(t);
  let s = (r ? Oe(o.width) : o.width) / i, a = (r ? Oe(o.height) : o.height) / n;
  return s && Number.isFinite(s) || (s = 1), a && Number.isFinite(a) || (a = 1), { x: s, y: a };
}
function we(e, t, o, i) {
  var n, r;
  t === void 0 && (t = !1), o === void 0 && (o = !1);
  const s = e.getBoundingClientRect(), a = Ft(e);
  let l = Vt;
  t && (i ? K(i) && (l = ce(i)) : l = ce(e));
  const d = a ? H(a) : window, c = !Lt() && o;
  let u = (s.left + (c && ((n = d.visualViewport) == null ? void 0 : n.offsetLeft) || 0)) / l.x, h = (s.top + (c && ((r = d.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / l.y, p = s.width / l.x, m = s.height / l.y;
  if (a) {
    const y = H(a), b = i && K(i) ? H(i) : i;
    let f = y.frameElement;
    for (; f && i && b !== y; ) {
      const w = ce(f), g = f.getBoundingClientRect(), x = getComputedStyle(f);
      g.x += (f.clientLeft + parseFloat(x.paddingLeft)) * w.x, g.y += (f.clientTop + parseFloat(x.paddingTop)) * w.y, u *= w.x, h *= w.y, p *= w.x, m *= w.y, u += g.x, h += g.y, f = H(f).frameElement;
    }
  }
  return { width: p, height: m, top: h, right: u + p, bottom: h + m, left: u, x: u, y: h };
}
function Z(e) {
  return ((Et(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function He(e) {
  return K(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function It(e) {
  return we(Z(e)).left + He(e).scrollLeft;
}
function be(e) {
  if (Q(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || it(e) && e.host || Z(e);
  return it(t) ? t.host : t;
}
function Wt(e) {
  const t = be(e);
  return Xe(t) ? t.ownerDocument.body : V(t) && Re(t) ? t : Wt(t);
}
function Ne(e, t) {
  var o;
  t === void 0 && (t = []);
  const i = Wt(e), n = i === ((o = e.ownerDocument) == null ? void 0 : o.body), r = H(i);
  return n ? t.concat(r, r.visualViewport || [], Re(i) ? i : []) : t.concat(i, Ne(i));
}
function nt(e, t, o) {
  return t === "viewport" ? he(function(i, n) {
    const r = H(i), s = Z(i), a = r.visualViewport;
    let l = s.clientWidth, d = s.clientHeight, c = 0, u = 0;
    if (a) {
      l = a.width, d = a.height;
      const h = Lt();
      (h || !h && n === "fixed") && (c = a.offsetLeft, u = a.offsetTop);
    }
    return { width: l, height: d, x: c, y: u };
  }(e, o)) : K(t) ? he(function(i, n) {
    const r = we(i, !0, n === "fixed"), s = r.top + i.clientTop, a = r.left + i.clientLeft, l = V(i) ? ce(i) : { x: 1, y: 1 };
    return { width: i.clientWidth * l.x, height: i.clientHeight * l.y, x: a * l.x, y: s * l.y };
  }(t, o)) : he(function(i) {
    const n = Z(i), r = He(i), s = i.ownerDocument.body, a = fe(n.scrollWidth, n.clientWidth, s.scrollWidth, s.clientWidth), l = fe(n.scrollHeight, n.clientHeight, s.scrollHeight, s.clientHeight);
    let d = -r.scrollLeft + It(i);
    const c = -r.scrollTop;
    return F(s).direction === "rtl" && (d += fe(n.clientWidth, s.clientWidth) - a), { width: a, height: l, x: d, y: c };
  }(Z(e)));
}
function rt(e) {
  return V(e) && F(e).position !== "fixed" ? e.offsetParent : null;
}
function st(e) {
  const t = H(e);
  let o = rt(e);
  for (; o && Io(o) && F(o).position === "static"; ) o = rt(o);
  return o && (Q(o) === "html" || Q(o) === "body" && F(o).position === "static" && !Fe(o)) ? t : o || function(i) {
    let n = be(i);
    for (; V(n) && !Xe(n); ) {
      if (Fe(n)) return n;
      n = be(n);
    }
    return null;
  }(e) || t;
}
function Wo(e, t, o) {
  const i = V(t), n = Z(t), r = we(e, !0, o === "fixed", t);
  let s = { scrollLeft: 0, scrollTop: 0 };
  const a = { x: 0, y: 0 };
  if (i || !i && o !== "fixed") if ((Q(t) !== "body" || Re(n)) && (s = He(t)), V(t)) {
    const l = we(t, !0);
    a.x = l.x + t.clientLeft, a.y = l.y + t.clientTop;
  } else n && (a.x = It(n));
  return { x: r.left + s.scrollLeft - a.x, y: r.top + s.scrollTop - a.y, width: r.width, height: r.height };
}
const jo = { getClippingRect: function(e) {
  let { element: t, boundary: o, rootBoundary: i, strategy: n } = e;
  const r = o === "clippingAncestors" ? function(d, c) {
    const u = c.get(d);
    if (u) return u;
    let h = Ne(d).filter((b) => K(b) && Q(b) !== "body"), p = null;
    const m = F(d).position === "fixed";
    let y = m ? be(d) : d;
    for (; K(y) && !Xe(y); ) {
      const b = F(y), f = Fe(y);
      (m ? f || p : f || b.position !== "static" || !p || !["absolute", "fixed"].includes(p.position)) ? p = b : h = h.filter((w) => w !== y), y = be(y);
    }
    return c.set(d, h), h;
  }(t, this._c) : [].concat(o), s = [...r, i], a = s[0], l = s.reduce((d, c) => {
    const u = nt(t, c, n);
    return d.top = fe(u.top, d.top), d.right = ot(u.right, d.right), d.bottom = ot(u.bottom, d.bottom), d.left = fe(u.left, d.left), d;
  }, nt(t, a, n));
  return { width: l.right - l.left, height: l.bottom - l.top, x: l.left, y: l.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: o, strategy: i } = e;
  const n = V(o), r = Z(o);
  if (o === r) return t;
  let s = { scrollLeft: 0, scrollTop: 0 }, a = { x: 1, y: 1 };
  const l = { x: 0, y: 0 };
  if ((n || !n && i !== "fixed") && ((Q(o) !== "body" || Re(r)) && (s = He(o)), V(o))) {
    const d = we(o);
    a = ce(o), l.x = d.x + o.clientLeft, l.y = d.y + o.clientTop;
  }
  return { width: t.width * a.x, height: t.height * a.y, x: t.x * a.x - s.scrollLeft * a.x + l.x, y: t.y * a.y - s.scrollTop * a.y + l.y };
}, isElement: K, getDimensions: function(e) {
  return V(e) ? Bt(e) : e.getBoundingClientRect();
}, getOffsetParent: st, getDocumentElement: Z, getScale: ce, async getElementRects(e) {
  let { reference: t, floating: o, strategy: i } = e;
  const n = this.getOffsetParent || st, r = this.getDimensions;
  return { reference: Wo(t, await n(o), i), floating: { x: 0, y: 0, ...await r(o) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => F(e).direction === "rtl" }, qo = (e, t, o) => {
  const i = /* @__PURE__ */ new Map(), n = { platform: jo, ...o }, r = { ...n.platform, _c: i };
  return Ho(e, t, { ...n, platform: r });
}, re = {
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
function Ve(e, t) {
  let o = re.themes[e] || {}, i;
  do
    i = o[t], typeof i > "u" ? o.$extend ? o = re.themes[o.$extend] || {} : (o = null, i = re[t]) : o = null;
  while (o);
  return i;
}
function Go(e) {
  const t = [e];
  let o = re.themes[e] || {};
  do
    o.$extend && !o.$resetCss ? (t.push(o.$extend), o = re.themes[o.$extend] || {}) : o = null;
  while (o);
  return t.map((i) => `v-popper--theme-${i}`);
}
function at(e) {
  const t = [e];
  let o = re.themes[e] || {};
  do
    o.$extend ? (t.push(o.$extend), o = re.themes[o.$extend] || {}) : o = null;
  while (o);
  return t;
}
let xe = !1;
if (typeof window < "u") {
  xe = !1;
  try {
    const e = Object.defineProperty({}, "passive", {
      get() {
        xe = !0;
      }
    });
    window.addEventListener("test", null, e);
  } catch {
  }
}
let jt = !1;
typeof window < "u" && typeof navigator < "u" && (jt = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream);
const Uo = ["auto", "top", "bottom", "left", "right"].reduce((e, t) => e.concat([
  t,
  `${t}-start`,
  `${t}-end`
]), []), lt = {
  hover: "mouseenter",
  focus: "focus",
  click: "click",
  touch: "touchstart",
  pointer: "pointerdown"
}, dt = {
  hover: "mouseleave",
  focus: "blur",
  click: "click",
  touch: "touchend",
  pointer: "pointerup"
};
function ct(e, t) {
  const o = e.indexOf(t);
  o !== -1 && e.splice(o, 1);
}
function Be() {
  return new Promise((e) => requestAnimationFrame(() => {
    requestAnimationFrame(e);
  }));
}
const k = [];
let te = null;
const ut = {};
function pt(e) {
  let t = ut[e];
  return t || (t = ut[e] = []), t;
}
let Ie = function() {
};
typeof window < "u" && (Ie = window.Element);
function $(e) {
  return function(t) {
    return Ve(t.theme, e);
  };
}
const De = "__floating-vue__popper", qt = () => ae({
  name: "VPopper",
  provide() {
    return {
      [De]: {
        parentPopper: this
      }
    };
  },
  inject: {
    [De]: { default: null }
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
      default: $("disabled")
    },
    positioningDisabled: {
      type: Boolean,
      default: $("positioningDisabled")
    },
    placement: {
      type: String,
      default: $("placement"),
      validator: (e) => Uo.includes(e)
    },
    delay: {
      type: [String, Number, Object],
      default: $("delay")
    },
    distance: {
      type: [Number, String],
      default: $("distance")
    },
    skidding: {
      type: [Number, String],
      default: $("skidding")
    },
    triggers: {
      type: Array,
      default: $("triggers")
    },
    showTriggers: {
      type: [Array, Function],
      default: $("showTriggers")
    },
    hideTriggers: {
      type: [Array, Function],
      default: $("hideTriggers")
    },
    popperTriggers: {
      type: Array,
      default: $("popperTriggers")
    },
    popperShowTriggers: {
      type: [Array, Function],
      default: $("popperShowTriggers")
    },
    popperHideTriggers: {
      type: [Array, Function],
      default: $("popperHideTriggers")
    },
    container: {
      type: [String, Object, Ie, Boolean],
      default: $("container")
    },
    boundary: {
      type: [String, Ie],
      default: $("boundary")
    },
    strategy: {
      type: String,
      validator: (e) => ["absolute", "fixed"].includes(e),
      default: $("strategy")
    },
    autoHide: {
      type: [Boolean, Function],
      default: $("autoHide")
    },
    handleResize: {
      type: Boolean,
      default: $("handleResize")
    },
    instantMove: {
      type: Boolean,
      default: $("instantMove")
    },
    eagerMount: {
      type: Boolean,
      default: $("eagerMount")
    },
    popperClass: {
      type: [String, Array, Object],
      default: $("popperClass")
    },
    computeTransformOrigin: {
      type: Boolean,
      default: $("computeTransformOrigin")
    },
    /**
     * @deprecated
     */
    autoMinSize: {
      type: Boolean,
      default: $("autoMinSize")
    },
    autoSize: {
      type: [Boolean, String],
      default: $("autoSize")
    },
    /**
     * @deprecated
     */
    autoMaxSize: {
      type: Boolean,
      default: $("autoMaxSize")
    },
    autoBoundaryMaxSize: {
      type: Boolean,
      default: $("autoBoundaryMaxSize")
    },
    preventOverflow: {
      type: Boolean,
      default: $("preventOverflow")
    },
    overflowPadding: {
      type: [Number, String],
      default: $("overflowPadding")
    },
    arrowPadding: {
      type: [Number, String],
      default: $("arrowPadding")
    },
    arrowOverflow: {
      type: Boolean,
      default: $("arrowOverflow")
    },
    flip: {
      type: Boolean,
      default: $("flip")
    },
    shift: {
      type: Boolean,
      default: $("shift")
    },
    shiftCrossAxis: {
      type: Boolean,
      default: $("shiftCrossAxis")
    },
    noAutoFocus: {
      type: Boolean,
      default: $("noAutoFocus")
    },
    disposeTimeout: {
      type: Number,
      default: $("disposeTimeout")
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
      return (e = this[De]) == null ? void 0 : e.parentPopper;
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
      (this.distance || this.skidding) && e.middleware.push(Lo({
        mainAxis: this.distance,
        crossAxis: this.skidding
      }));
      const t = this.placement.startsWith("auto");
      if (t ? e.middleware.push(Bo({
        alignment: this.placement.split("-")[1] ?? ""
      })) : e.placement = this.placement, this.preventOverflow && (this.shift && e.middleware.push(Fo({
        padding: this.overflowPadding,
        boundary: this.boundary,
        crossAxis: this.shiftCrossAxis
      })), !t && this.flip && e.middleware.push(Do({
        padding: this.overflowPadding,
        boundary: this.boundary
      }))), e.middleware.push(ko({
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
            let l, d;
            return r.startsWith("top") || r.startsWith("bottom") ? l = n.reference.width : d = n.reference.height, this.$_innerNode.style[i === "min" ? "minWidth" : i === "max" ? "maxWidth" : "width"] = l != null ? `${l}px` : null, this.$_innerNode.style[i === "min" ? "minHeight" : i === "max" ? "maxHeight" : "height"] = d != null ? `${d}px` : null, {
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
      (this.autoMaxSize || this.autoBoundaryMaxSize) && (this.$_innerNode.style.maxWidth = null, this.$_innerNode.style.maxHeight = null, e.middleware.push(Vo({
        boundary: this.boundary,
        padding: this.overflowPadding,
        apply: ({ availableWidth: i, availableHeight: n }) => {
          this.$_innerNode.style.maxWidth = i != null ? `${i}px` : null, this.$_innerNode.style.maxHeight = n != null ? `${n}px` : null;
        }
      })));
      const o = await qo(this.$_referenceNode, this.$_popperNode, e);
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
      if (this.$_updateParentShownChildren(!0), this.$_hideInProgress = !1, clearTimeout(this.$_scheduleTimer), te && this.instantMove && te.instantMove && te !== this.parentPopper) {
        te.$_applyHide(!0), this.$_applyShow(!0);
        return;
      }
      t ? this.$_applyShow() : this.$_scheduleTimer = setTimeout(this.$_applyShow.bind(this), this.$_computeDelay("show"));
    },
    $_scheduleHide(e, t = !1) {
      if (this.shownChildren.size > 0) {
        this.pendingHide = !0;
        return;
      }
      this.$_updateParentShownChildren(!1), this.$_hideInProgress = !0, clearTimeout(this.$_scheduleTimer), this.isShown && (te = this), t ? this.$_applyHide() : this.$_scheduleTimer = setTimeout(this.$_applyHide.bind(this), this.$_computeDelay("hide"));
    },
    $_computeDelay(e) {
      const t = this.delay;
      return parseInt(t && t[e] || t || 0);
    },
    async $_applyShow(e = !1) {
      clearTimeout(this.$_disposeTimer), clearTimeout(this.$_scheduleTimer), this.skipTransition = e, !this.isShown && (this.$_ensureTeleport(), await Be(), await this.$_computePosition(), await this.$_applyShowEffect(), this.positioningDisabled || this.$_registerEventListeners([
        ...Ne(this.$_referenceNode),
        ...Ne(this.$_popperNode)
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
        for (let o = 0; o < k.length; o++)
          t = k[o], t.showGroup !== e && (t.hide(), t.$emit("close-group"));
      }
      k.push(this), document.body.classList.add("v-popper--some-open");
      for (const t of at(this.theme))
        pt(t).push(this), document.body.classList.add(`v-popper--some-open--${t}`);
      this.$emit("apply-show"), this.classes.showFrom = !0, this.classes.showTo = !1, this.classes.hideFrom = !1, this.classes.hideTo = !1, await Be(), this.classes.showFrom = !1, this.classes.showTo = !0, this.noAutoFocus || this.$_popperNode.focus();
    },
    async $_applyHide(e = !1) {
      if (this.shownChildren.size > 0) {
        this.pendingHide = !0, this.$_hideInProgress = !1;
        return;
      }
      if (clearTimeout(this.$_scheduleTimer), !this.isShown)
        return;
      this.skipTransition = e, ct(k, this), k.length === 0 && document.body.classList.remove("v-popper--some-open");
      for (const o of at(this.theme)) {
        const i = pt(o);
        ct(i, this), i.length === 0 && document.body.classList.remove(`v-popper--some-open--${o}`);
      }
      te === this && (te = null), this.isShown = !1, this.$_applyAttrsToTarget({
        "aria-describedby": void 0,
        "data-popper-shown": void 0
      }), clearTimeout(this.$_disposeTimer);
      const t = this.disposeTimeout;
      t !== null && (this.$_disposeTimer = setTimeout(() => {
        this.$_popperNode && (this.$_detachPopperNode(), this.isMounted = !1);
      }, t)), this.$_removeEventListeners("scroll"), this.$emit("apply-hide"), this.classes.showFrom = !1, this.classes.showTo = !1, this.classes.hideFrom = !0, this.classes.hideTo = !1, await Be(), this.classes.hideFrom = !1, this.classes.hideTo = !0;
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
      this.$_registerTriggerListeners(this.$_targetNodes, lt, this.triggers, this.showTriggers, e), this.$_registerTriggerListeners([this.$_popperNode], lt, this.popperTriggers, this.popperShowTriggers, e);
      const t = (o) => {
        o.usedByTooltip || this.hide({ event: o });
      };
      this.$_registerTriggerListeners(this.$_targetNodes, dt, this.triggers, this.hideTriggers, t), this.$_registerTriggerListeners([this.$_popperNode], dt, this.popperTriggers, this.popperHideTriggers, t);
    },
    $_registerEventListeners(e, t, o) {
      this.$_events.push({ targetNodes: e, eventType: t, handler: o }), e.forEach((i) => i.addEventListener(t, o, xe ? {
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
      if (me >= e.left && me <= e.right && ge >= e.top && ge <= e.bottom) {
        const t = this.$_popperNode.getBoundingClientRect(), o = me - Y, i = ge - X, n = t.left + t.width / 2 - Y + (t.top + t.height / 2) - X + t.width + t.height, r = Y + o * n, s = X + i * n;
        return _e(Y, X, r, s, t.left, t.top, t.left, t.bottom) || // Left edge
        _e(Y, X, r, s, t.left, t.top, t.right, t.top) || // Top edge
        _e(Y, X, r, s, t.right, t.top, t.right, t.bottom) || // Right edge
        _e(Y, X, r, s, t.left, t.bottom, t.right, t.bottom);
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
    const e = xe ? {
      passive: !0,
      capture: !0
    } : !0;
    document.addEventListener("touchstart", (t) => ht(t), e), document.addEventListener("touchend", (t) => ft(t, !0), e);
  } else
    window.addEventListener("mousedown", (e) => ht(e), !0), window.addEventListener("click", (e) => ft(e, !1), !0);
  window.addEventListener("resize", Jo);
}
function ht(e, t) {
  for (let o = 0; o < k.length; o++) {
    const i = k[o];
    try {
      i.mouseDownContains = i.popperNode().contains(e.target);
    } catch {
    }
  }
}
function ft(e, t) {
  Yo(e, t);
}
function Yo(e, t) {
  const o = {};
  for (let i = k.length - 1; i >= 0; i--) {
    const n = k[i];
    try {
      const r = n.containsGlobalTarget = n.mouseDownContains || n.popperNode().contains(e.target);
      n.pendingHide = !1, requestAnimationFrame(() => {
        if (n.pendingHide = !1, !o[n.randomId] && mt(n, r, e)) {
          if (n.$_handleGlobalClose(e, t), !e.closeAllPopover && e.closePopover && r) {
            let a = n.parentPopper;
            for (; a; )
              o[a.randomId] = !0, a = a.parentPopper;
            return;
          }
          let s = n.parentPopper;
          for (; s && mt(s, s.containsGlobalTarget, e); )
            s.$_handleGlobalClose(e, t), s = s.parentPopper;
        }
      });
    } catch {
    }
  }
}
function mt(e, t, o) {
  return o.closeAllPopover || o.closePopover && t || Xo(e, o) && !t;
}
function Xo(e, t) {
  if (typeof e.autoHide == "function") {
    const o = e.autoHide(t);
    return e.lastAutoHide = o, o;
  }
  return e.autoHide;
}
function Jo() {
  for (let e = 0; e < k.length; e++)
    k[e].$_computePosition();
}
let Y = 0, X = 0, me = 0, ge = 0;
typeof window < "u" && window.addEventListener("mousemove", (e) => {
  Y = me, X = ge, me = e.clientX, ge = e.clientY;
}, xe ? {
  passive: !0
} : void 0);
function _e(e, t, o, i, n, r, s, a) {
  const l = ((s - n) * (t - r) - (a - r) * (e - n)) / ((a - r) * (o - e) - (s - n) * (i - t)), d = ((o - e) * (t - r) - (i - t) * (e - n)) / ((a - r) * (o - e) - (s - n) * (i - t));
  return l >= 0 && l <= 1 && d >= 0 && d <= 1;
}
const Ko = {
  extends: qt()
}, Je = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [i, n] of t)
    o[i] = n;
  return o;
};
function Zo(e, t, o, i, n, r) {
  return B(), J("div", {
    ref: "reference",
    class: $t(["v-popper", {
      "v-popper--shown": e.slotData.isShown
    }])
  }, [
    ue(e.$slots, "default", _t(St(e.slotData)))
  ], 2);
}
const Qo = /* @__PURE__ */ Je(Ko, [["render", Zo]]);
function ei() {
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
let Ce;
function We() {
  We.init || (We.init = !0, Ce = ei() !== -1);
}
var ke = {
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
    We(), vt(() => {
      this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.emitOnMount && this.emitSize();
    });
    const e = document.createElement("object");
    this._resizeObject = e, e.setAttribute("aria-hidden", "true"), e.setAttribute("tabindex", -1), e.onload = this.addResizeHandlers, e.type = "text/html", Ce && this.$el.appendChild(e), e.data = "about:blank", Ce || this.$el.appendChild(e);
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
      this._resizeObject && this._resizeObject.onload && (!Ce && this._resizeObject.contentDocument && this._resizeObject.contentDocument.defaultView.removeEventListener("resize", this.compareAndNotify), this.$el.removeChild(this._resizeObject), this._resizeObject.onload = null, this._resizeObject = null);
    }
  }
};
const ti = /* @__PURE__ */ eo("data-v-b329ee4c");
bt("data-v-b329ee4c");
const oi = {
  class: "resize-observer",
  tabindex: "-1"
};
xt();
const ii = /* @__PURE__ */ ti((e, t, o, i, n, r) => (B(), qe("div", oi)));
ke.render = ii;
ke.__scopeId = "data-v-b329ee4c";
ke.__file = "src/components/ResizeObserver.vue";
const Gt = (e = "theme") => ({
  computed: {
    themeClass() {
      return Go(this[e]);
    }
  }
}), ni = ae({
  name: "VPopperContent",
  components: {
    ResizeObserver: ke
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
}), ri = ["id", "aria-hidden", "tabindex", "data-popper-placement"], si = {
  ref: "inner",
  class: "v-popper__inner"
}, ai = /* @__PURE__ */ z("div", { class: "v-popper__arrow-outer" }, null, -1), li = /* @__PURE__ */ z("div", { class: "v-popper__arrow-inner" }, null, -1), di = [
  ai,
  li
];
function ci(e, t, o, i, n, r) {
  const s = Ee("ResizeObserver");
  return B(), J("div", {
    id: e.popperId,
    ref: "popover",
    class: $t(["v-popper__popper", [
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
    style: q(e.result ? {
      position: e.result.strategy,
      transform: `translate3d(${Math.round(e.result.x)}px,${Math.round(e.result.y)}px,0)`
    } : void 0),
    "aria-hidden": e.shown ? "false" : "true",
    tabindex: e.autoHide ? 0 : void 0,
    "data-popper-placement": e.result ? e.result.placement : void 0,
    onKeyup: t[2] || (t[2] = to((a) => e.autoHide && e.$emit("hide"), ["esc"]))
  }, [
    z("div", {
      class: "v-popper__backdrop",
      onClick: t[0] || (t[0] = (a) => e.autoHide && e.$emit("hide"))
    }),
    z("div", {
      class: "v-popper__wrapper",
      style: q(e.result ? {
        transformOrigin: e.result.transformOrigin
      } : void 0)
    }, [
      z("div", si, [
        e.mounted ? (B(), J(Ct, { key: 0 }, [
          z("div", null, [
            ue(e.$slots, "default")
          ]),
          e.handleResize ? (B(), qe(s, {
            key: 0,
            onNotify: t[1] || (t[1] = (a) => e.$emit("resize", a))
          })) : Ze("", !0)
        ], 64)) : Ze("", !0)
      ], 512),
      z("div", {
        ref: "arrow",
        class: "v-popper__arrow-container",
        style: q(e.result ? {
          left: e.toPx(e.result.arrow.x),
          top: e.toPx(e.result.arrow.y)
        } : void 0)
      }, di, 4)
    ], 4)
  ], 46, ri);
}
const Ut = /* @__PURE__ */ Je(ni, [["render", ci]]), Yt = {
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
let je = function() {
};
typeof window < "u" && (je = window.Element);
const ui = ae({
  name: "VPopperWrapper",
  components: {
    Popper: Qo,
    PopperContent: Ut
  },
  mixins: [
    Yt,
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
      type: [String, Object, je, Boolean],
      default: void 0
    },
    boundary: {
      type: [String, je],
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
function pi(e, t, o, i, n, r) {
  const s = Ee("PopperContent"), a = Ee("Popper");
  return B(), qe(a, oo({ ref: "popper" }, e.$props, {
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
    default: ve(({
      popperId: l,
      isShown: d,
      shouldMountContent: c,
      skipTransition: u,
      autoHide: h,
      show: p,
      hide: m,
      handleResize: y,
      onResize: b,
      classes: f,
      result: w
    }) => [
      ue(e.$slots, "default", {
        shown: d,
        show: p,
        hide: m
      }),
      Te(s, {
        ref: "popperContent",
        "popper-id": l,
        theme: e.finalTheme,
        shown: d,
        mounted: c,
        "skip-transition": u,
        "auto-hide": h,
        "handle-resize": y,
        classes: f,
        result: w,
        onHide: m,
        onResize: b
      }, {
        default: ve(() => [
          ue(e.$slots, "popper", {
            shown: d,
            hide: m
          })
        ]),
        _: 2
      }, 1032, ["popper-id", "theme", "shown", "mounted", "skip-transition", "auto-hide", "handle-resize", "classes", "result", "onHide", "onResize"])
    ]),
    _: 3
  }, 16, ["theme", "target-nodes", "popper-node", "class"]);
}
const Ke = /* @__PURE__ */ Je(ui, [["render", pi]]);
({
  ...Ke
});
({
  ...Ke
});
const hi = {
  ...Ke,
  name: "VTooltip",
  vPopperTheme: "tooltip"
};
ae({
  name: "VTooltipDirective",
  components: {
    Popper: qt(),
    PopperContent: Ut
  },
  mixins: [
    Yt
  ],
  inheritAttrs: !1,
  props: {
    theme: {
      type: String,
      default: "tooltip"
    },
    html: {
      type: Boolean,
      default: (e) => Ve(e.theme, "html")
    },
    content: {
      type: [String, Number, Function],
      default: null
    },
    loadingContent: {
      type: String,
      default: (e) => Ve(e.theme, "loadingContent")
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
const fi = hi;
function mi({ histogramDataMap: e, step: t, min: o, max: i }) {
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
const gi = /* @__PURE__ */ ae({
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
    const t = Tt(), o = e, { histogramData: i, min: n, max: r, histogramColumnCount: s, histogramColumnOffset: a, histogramColumnAverages: l } = yt(o), d = M(), c = M(0), u = po(
      d,
      () => {
        var f;
        Se(c, (f = S(d)) == null ? void 0 : f.clientWidth);
      }
    ), h = L(() => {
      const f = S(c);
      return f ? S(uo((f / S(s) - S(a)).toFixed(2))) : 0;
    }), p = vo(d, () => {
      u.trigger();
    }), m = yo(
      d,
      ([{ isIntersecting: f }]) => {
        f && u.trigger();
      }
    );
    wt(() => {
      p.stop(), m.stop();
    });
    const y = L(() => {
      let f = /* @__PURE__ */ new Map();
      return S(i).forEach((w) => {
        f.set(w.value, w.count);
      }), f;
    }), b = L(() => {
      const f = Math.ceil(S(r) / S(s)), w = S(l) ? S(l) : mi({
        histogramDataMap: S(y),
        step: f,
        min: S(n),
        max: S(r)
      }), g = Math.max.apply(Math, w.map((v) => typeof v == "number" ? v : v.avg));
      return w.map((v, _) => {
        const A = (typeof v == "number" ? v : v.avg) / g * 100;
        let R = 0;
        return _ > 0 && (R = S(h) * _ + _ * S(a)), {
          heightPercentage: A,
          x: R,
          data: v
        };
      });
    });
    return (f, w) => (B(), J("div", {
      class: "histogram",
      style: q({
        "--sliderSize": e.sliderSize
      })
    }, [
      z("div", {
        ref_key: "histogramRef",
        ref: d,
        style: q({ height: `${e.histogramHeight}px` }),
        class: "histogram-columns"
      }, [
        (B(!0), J(Ct, null, io(b.value, (g, x) => (B(), J("div", {
          key: x,
          class: "histogram-column-wrapper",
          style: q({
            left: `${g.x}px`,
            width: h.value + "px",
            height: `${g.heightPercentage}%`
          })
        }, [
          Te(T(fi), {
            class: "histogram-column-tooltip",
            disabled: !T(t).columnTooltip
          }, At({
            default: ve(() => [
              z("div", {
                class: "histogram-column",
                style: q({
                  background: e.histogramColumnColor
                })
              }, null, 4)
            ]),
            _: 2
          }, [
            T(t).columnTooltip ? {
              name: "popper",
              fn: ve(() => [
                ue(f.$slots, "columnTooltip", { column: g }, void 0, !0)
              ]),
              key: "0"
            } : void 0
          ]), 1032, ["disabled"])
        ], 4))), 128))
      ], 4)
    ], 4));
  }
}), vi = /* @__PURE__ */ Ge(gi, [["__scopeId", "data-v-5bb91f6f"]]), yi = { class: "histogram-range-container" }, wi = /* @__PURE__ */ ae({
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
    const o = t, i = Tt(), n = e;
    console.log("### slots 111", i);
    const r = Rt(n, "modelValue", o), s = L(() => n.histogramColumnCount <= n.max ? n.histogramColumnCount : n.max);
    return (a, l) => (B(), J("div", yi, [
      Te(vi, {
        "histogram-data": e.histogramData,
        "histogram-height": e.histogramHeight,
        "histogram-column-count": s.value,
        "histogram-column-averages": e.histogramColumnAverages,
        max: e.max,
        min: e.min,
        "histogram-column-color": e.histogramColumnColor,
        "histogram-column-offset": e.histogramColumnOffset,
        "slider-size": e.sliderSize
      }, At({ _: 2 }, [
        T(i).columnTooltip ? {
          name: "columnTooltip",
          fn: ve((d) => [
            ue(a.$slots, "columnTooltip", _t(St(d)), void 0, !0)
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["histogram-data", "histogram-height", "histogram-column-count", "histogram-column-averages", "max", "min", "histogram-column-color", "histogram-column-offset", "slider-size"]),
      Te(Co, {
        modelValue: T(r),
        "onUpdate:modelValue": l[0] || (l[0] = (d) => no(r) ? r.value = d : null),
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
}), xi = /* @__PURE__ */ Ge(wi, [["__scopeId", "data-v-c1e3ff7b"]]);
export {
  xi as default
};
//# sourceMappingURL=vue-histogram-dual-range-lib.js.map

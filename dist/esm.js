var e = {
    d: (t, o) => {
      for (var r in o) e.o(o, r) && !e.o(t, r) && Object.defineProperty(t, r, { enumerable: !0, get: o[r] })
    },
    o: (e, t) => Object.prototype.hasOwnProperty.call(e, t),
  },
  t = {}
function o(e, t, o) {
  let r = 0
  return function (...n) {
    r && clearTimeout(r)
    const a = o ? e.bind(o) : e
    r = setTimeout(a, 1e3 * t)
  }
}
e.d(t, { D: () => o })
var r = t.D
export { r as debounce }

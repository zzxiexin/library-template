type FunType = <P = unknown, R = unknown>(...arg: P[]) => R
export default function debounce(fun: FunType, delay: number, This?: unknown) {
  let timer: ReturnType<typeof setTimeout> = 0
  return function (...args: unknown[]) {
    if (timer) {
      clearTimeout(timer)
    }
    const final_fun = This ? fun.bind(This) : fun
    timer = setTimeout(() => final_fun(...args), delay * 1000)
  }
}

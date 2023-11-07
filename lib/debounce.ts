type FunType = <P = any, R = any>(arg: P) => R
export default function debounce(fun: FunType, delay: number, This?: any) {
  let timer: ReturnType<typeof setTimeout> = 0
  return function (...args: any[]) {
    if (timer) {
      clearTimeout(timer)
    }
    const final_fun = This ? fun.bind(This) : fun
    timer = setTimeout(final_fun, delay * 1000)
  }
}

type FunType = <P = any, R = any>(arg: P) => R
export default function debounce(fun: FunType, delay: number, This?: any): (...args: any[]) => void
export {}

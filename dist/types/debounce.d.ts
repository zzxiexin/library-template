type FunType = <P = unknown, R = unknown>(...arg: P[]) => R;
export default function debounce(fun: FunType, delay: number, This?: unknown): (...args: unknown[]) => void;
export {};

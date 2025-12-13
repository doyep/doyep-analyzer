/**
 * Custom type that allow type or factory that return that value
 */
export type ValueOrFactory<T> = T | (() => T);

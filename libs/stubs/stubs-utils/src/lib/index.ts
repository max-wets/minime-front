export const cloneDeep = <T extends Record<string, unknown>>(obj: T | T[]) =>
  JSON.parse(JSON.stringify(obj));

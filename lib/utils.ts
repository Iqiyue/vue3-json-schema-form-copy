export const isObject = (thing: any): boolean => {
  return typeof thing == "object" && thing !== null && !Array.isArray(thing);
};

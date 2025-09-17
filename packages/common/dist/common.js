const e = (o) => o == null, l = (o) => o && typeof o == "object", n = (o) => e(o) || Array.isArray(o) && o.length === 0 || l(o) && Object.keys(o).length === 0 || typeof o == "string" && o.trim().length === 0, s = () => {
  console.log("hello");
};
export {
  n as isBlank,
  e as isEmpty,
  l as isObject,
  s as log
};

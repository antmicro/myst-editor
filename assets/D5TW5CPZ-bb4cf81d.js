import { M as f } from "./IU7WZTP6-20f2a5ec.js";
var n = /[\t ]*accDescr(?:[\t ]*:(?:[^\n\r]*?(?=%%)|[^\n\r]*)|\s*({))/y;
function l() {
  let e = !1;
  return (r, c) => {
    n.lastIndex = c;
    let t = n.exec(r);
    if (t === null)
      return -1;
    let i = n.lastIndex;
    if (t[1] === void 0)
      return i;
    if (e)
      return -1;
    let u = r.indexOf("}", i);
    return e = u === -1, u + 1 || -1;
  };
}
function a(e = "ACC_DESCR") {
  return { ...f, name: e, scanner: l };
}
export {
  a as i
};
//# sourceMappingURL=D5TW5CPZ-bb4cf81d.js.map

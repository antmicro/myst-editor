function f(n) {
  let e = 0;
  for (let l = n.indexOf("~"); l !== -1; l = n.indexOf("~", l + 1))
    e++;
  return e;
}
function r(n) {
  let e = f(n);
  if (e <= 1)
    return n;
  let l = e % 2 !== 0 && n.startsWith("~"), t = n.split(""), i = [];
  for (let o = l ? 1 : 0; o < t.length; o++)
    t[o] === "~" && i.push(o);
  for (let o = 0, u = i.length - 1; o < u; o++, u--)
    t[i[o]] = "<", t[i[u]] = ">";
  return t.join("");
}
function s(n) {
  if (!n.includes("~"))
    return n;
  let e = n.split(/(,)/), l = [];
  for (let t = 0; t < e.length; t++) {
    let i = e[t];
    i === "," && t > 0 && t + 1 < e.length && f(e[t - 1]) === 1 && f(e[t + 1]) === 1 && (i = e[t - 1] + "," + e[t + 1], t++, l.pop()), l.push(r(i));
  }
  return l.join("");
}
export {
  s as c
};
//# sourceMappingURL=G3MDBVQH-bcd5257d.js.map

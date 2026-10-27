var oa = Object.defineProperty;
var da = (e, t, a) => t in e ? oa(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a;
var M = (e, t, a) => (da(e, typeof t != "symbol" ? t + "" : t, a), a);
import { D as ca, N as ua } from "./6B2VI7MB-716cdb27.js";
import { d as ha, a as J, e as ye, V as fa } from "./lazy-950901f8.js";
import { l as ma } from "./DKTLEL5E-e2b762b2.js";
import { e as Ve, V as se, m as $t, S as ga, L as ke, x as h, l as ya, b as ka, a as wa } from "./3G3HCGVE-09704139.js";
var R = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], V = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
function le(e) {
  return !Number.isNaN(e.getTime());
}
function S(e, t) {
  let a = String(e);
  return a.length >= t ? a : "0".repeat(t - a.length) + a;
}
function Gt(e) {
  let t = ["th", "st", "nd", "rd"], a = e % 100;
  return e + (t[(a - 20) % 10] || t[a] || t[0]);
}
function Qe(e) {
  let t = -Math.round(e.getTimezoneOffset() / 15) * 15;
  return t === 0 ? 0 : t;
}
function St(e) {
  let t = Qe(e), a = Math.abs(t);
  return (t >= 0 ? "+" : "-") + S(Math.floor(a / 60), 2) + ":" + S(a % 60, 2);
}
function Zt(e) {
  return e.getDay() || 7;
}
function Z(e, t) {
  let a = new Date(e);
  return a.setDate(a.getDate() + t), a;
}
function Ma(e) {
  let t = new Date(e.getFullYear(), e.getMonth() + 1, 0);
  return t.setHours(23, 59, 59, 999), t.getDate();
}
function Yt(e, t) {
  let a = new Date(e);
  return a.setDate(1), t(a), a.setDate(Math.min(e.getDate(), Ma(a))), a;
}
function Ot(e, t, a) {
  switch (a) {
    case "M":
      return Yt(e, (r) => r.setMonth(e.getMonth() + t));
    case "y":
      return Yt(e, (r) => r.setFullYear(e.getFullYear() + t));
    case "d":
      return Z(e, Math.round(t));
    case "w":
      return Z(e, Math.round(7 * t));
    case "h":
      return new Date(e.getTime() + t * 36e5);
    case "m":
      return new Date(e.getTime() + t * 6e4);
    case "s":
      return new Date(e.getTime() + t * 1e3);
    default:
      return new Date(e.getTime() + t);
  }
}
function Xt(e) {
  return Z(e, 4 - Zt(e));
}
function Ft(e) {
  let t = Xt(e), a = new Date(t.getFullYear(), 0, 1), r = Zt(a), i = Z(a, 4 - r + (r > 4 ? 7 : 0)), n = (Qe(i) - Qe(t)) * 6e4, s = (t.getTime() - i.getTime() - n) / 6048e5;
  return (s < 0 ? Math.ceil(s) || 0 : Math.floor(s)) + 1;
}
var pa = /\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g, Da = /\[([^\]]+)]|YYYY|YY|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, xa = "YYYY-MM-DDTHH:mm:ssZ";
function Pt(e, t) {
  if (!le(e))
    return "Invalid Date";
  let a = t || xa;
  if (a === "YYYY-MM-DD")
    return Vt(e);
  let r = !1, i = a.replace(pa, (s) => {
    switch (s) {
      case "Q":
        return String(Math.ceil((e.getMonth() + 1) / 3));
      case "Do":
        return "[" + Gt(e.getDate()) + "]";
      case "GGGG":
        return String(Xt(e).getFullYear());
      case "W":
        return String(Ft(e));
      case "WW":
        return S(Ft(e), 2);
      case "k":
        return String(e.getHours() || 24);
      case "kk":
        return S(e.getHours() || 24, 2);
      case "X":
        return String(Math.floor(e.getTime() / 1e3));
      case "x":
        return String(e.getTime());
      case "gggg":
      case "wo":
      case "w":
      case "ww":
      case "z":
      case "zzz":
        return r = !0, s;
      default:
        return s;
    }
  });
  if (r)
    return;
  let n = e.getHours();
  return i.replace(Da, (s, l) => {
    if (l)
      return l;
    switch (s) {
      case "YY":
        return String(e.getFullYear()).slice(-2);
      case "YYYY":
        return S(e.getFullYear(), 4);
      case "M":
        return String(e.getMonth() + 1);
      case "MM":
        return S(e.getMonth() + 1, 2);
      case "MMM":
        return R[e.getMonth()].slice(0, 3);
      case "MMMM":
        return R[e.getMonth()];
      case "D":
        return String(e.getDate());
      case "DD":
        return S(e.getDate(), 2);
      case "d":
        return String(e.getDay());
      case "dd":
        return V[e.getDay()].slice(0, 2);
      case "ddd":
        return V[e.getDay()].slice(0, 3);
      case "dddd":
        return V[e.getDay()];
      case "H":
        return String(n);
      case "HH":
        return S(n, 2);
      case "h":
        return String(n % 12 || 12);
      case "hh":
        return S(n % 12 || 12, 2);
      case "a":
        return n < 12 ? "am" : "pm";
      case "A":
        return n < 12 ? "AM" : "PM";
      case "m":
        return String(e.getMinutes());
      case "mm":
        return S(e.getMinutes(), 2);
      case "s":
        return String(e.getSeconds());
      case "ss":
        return S(e.getSeconds(), 2);
      case "SSS":
        return S(e.getMilliseconds(), 3);
      case "Z":
        return St(e);
      default:
        return St(e).replace(":", "");
    }
  });
}
function Vt(e) {
  let t = e.getFullYear(), a = e.getMonth() + 1, r = e.getDate();
  return (t >= 1e3 && t <= 9999 ? t : S(t, 4)) + (a < 10 ? "-0" : "-") + a + (r < 10 ? "-0" : "-") + r;
}
var ba = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, va = /\[[^\]]+]/g, _t = /\d/, ne = /\d\d/, Ta = /\d{3}/, $a = /\d{4}/, _ = /\d\d?/, Sa = /[+-]?\d+/, It = /[+-]\d\d:?(\d\d)?|Z/, ie = /\d*[^-_:/,()\s\d]+/;
function b(e) {
  return (t, a) => (t[e] = +a, !0);
}
var At = (e, t) => {
  if (t === "Z")
    return e.offset = 0, !0;
  let a = t.match(/([+-]|\d\d)/g), r = +a[1] * 60 + (+a[2] || 0);
  return e.offset = r === 0 ? 0 : a[0] === "+" ? -r : r, !0;
};
function Nt(e) {
  return (t, a) => {
    let r = e.indexOf(a) + 1;
    return r < 1 ? !1 : (t.month = r % 12 || r, !0);
  };
}
var Ya = /* @__PURE__ */ new Map([["A", { re: ie, read: (e, t) => (e.afternoon = t === "PM", !0) }], ["a", { re: ie, read: (e, t) => (e.afternoon = t === "pm", !0) }], ["Q", { re: _t, read: (e, t) => (e.month = (+t - 1) * 3 + 1, !0) }], ["S", { re: _t, read: (e, t) => (e.milliseconds = +t * 100, !0) }], ["SS", { re: ne, read: (e, t) => (e.milliseconds = +t * 10, !0) }], ["SSS", { re: Ta, read: (e, t) => (e.milliseconds = +t, !0) }], ["s", { re: _, read: b("seconds") }], ["ss", { re: _, read: b("seconds") }], ["m", { re: _, read: b("minutes") }], ["mm", { re: _, read: b("minutes") }], ["H", { re: _, read: b("hours") }], ["h", { re: _, read: b("hours") }], ["HH", { re: _, read: b("hours") }], ["hh", { re: _, read: b("hours") }], ["D", { re: _, read: b("day") }], ["DD", { re: ne, read: b("day") }], ["Do", { re: ie, read: (e, t) => {
  let a = t.match(/\d+/);
  if (!a)
    return !1;
  e.day = +a[0], e.dayGiven = !0;
  for (let r = 1; r <= 31; r++)
    Gt(r) === t && (e.day = r);
  return !0;
} }], ["w", { re: _, read: b("week") }], ["ww", { re: ne, read: b("week") }], ["M", { re: _, read: b("month") }], ["MM", { re: ne, read: b("month") }], ["MMM", { re: ie, read: Nt(R.map((e) => e.slice(0, 3))) }], ["MMMM", { re: ie, read: Nt(R) }], ["Y", { re: Sa, read: b("year") }], ["YY", { re: ne, read: (e, t) => (e.year = +t + (+t > 68 ? 1900 : 2e3), !0) }], ["YYYY", { re: $a, read: b("year") }], ["Z", { re: It, read: At }], ["ZZ", { re: It, read: At }]]), Ht, we = null;
function Fa(e) {
  if (e === Ht)
    return we;
  if (Ht = e, we = null, /[Ll]/.test(e.replace(va, "")))
    return null;
  let t = e.match(ba);
  return t ? (we = t.map((a) => {
    var r;
    return (r = Ya.get(a)) != null ? r : a.replace(/^\[|\]$/g, "");
  }), we) : null;
}
function _a(e, t, a) {
  if (t === "x" || t === "X")
    return new Date((t === "X" ? 1e3 : 1) * Number(e));
  let r = Fa(t);
  if (!r)
    return;
  let i = {}, n = e, s = 0;
  for (let D of r) {
    if (typeof D == "string") {
      s += D.length;
      continue;
    }
    let N = D.re.exec(n.slice(s));
    if (!N || !D.read(i, N[0]))
      return;
    n = n.replace(N[0], "");
  }
  i.afternoon !== void 0 && i.hours !== void 0 && (i.afternoon ? i.hours < 12 && (i.hours += 12) : i.hours === 12 && (i.hours = 0));
  let l = i.dayGiven || i.day ? i.day : !i.year && !i.month ? a.getDate() : 1, u = i.year || a.getFullYear(), g = 0;
  i.year && !i.month || (g = i.month > 0 ? i.month - 1 : a.getMonth());
  let p = i.hours || 0, y = i.minutes || 0, c = i.seconds || 0, k = i.milliseconds || 0;
  if (i.offset !== void 0)
    return new Date(Date.UTC(u, g, l, p, y, c, k + i.offset * 6e4));
  if (!i.week)
    return new Date(u, g, l, p, y, c, k);
}
function Ia(e, t, a) {
  let r = _a(e, t, a);
  return r && le(r) && Pt(r, t) === e ? r : void 0;
}
var Aa = /^[YMDHhmsSZXx\-/.:, T]*$/, Na = /^\s*(active|done|crit|milestone|vert)\s*$/, Ha = /^after\s+([\d\w- ]+)/, Ea = /^until\s+([\d\w- ]+)/, Ca = /^(\d+(?:\.\d+)?)([Mdhmswy]|ms)$/, za = /[\s,]+/, La = /^\d+$/, Wa = new Set(V.map((e) => e.toLowerCase())), Ga = 4e8, Za = 400, Oa = 200, Xa = 400;
function Qt(e) {
  let t = e === void 0 ? NaN : +e;
  return Number.isFinite(t) ? t : Date.now();
}
function Pa(e) {
  let t = Ca.exec(e.trim());
  return t ? [Number.parseFloat(t[1]), t[2]] : [NaN, "ms"];
}
function Et(e, t) {
  let a = new Set(e);
  for (let r of t.toLowerCase().split(za))
    r !== "" && a.add(r);
  return [...a];
}
var Va = class {
  constructor(e = {}) {
    M(this, "type", "gantt");
    M(this, "title");
    M(this, "accTitle");
    M(this, "accDescr");
    M(this, "dateFormat", "");
    M(this, "axisFormat", "");
    M(this, "tickInterval");
    M(this, "todayMarker", "");
    M(this, "includes", []);
    M(this, "excludes", []);
    M(this, "inclusiveEndDates", !1);
    M(this, "topAxis", !1);
    M(this, "displayMode", "");
    M(this, "weekday");
    M(this, "weekend", "saturday");
    M(this, "sections", []);
    M(this, "links", /* @__PURE__ */ new Map());
    M(this, "tasks", []);
    M(this, "byId", /* @__PURE__ */ new Map());
    M(this, "currentSection", "");
    M(this, "taskCount", 0);
    M(this, "lastOrder", 0);
    M(this, "lastTaskId");
    M(this, "options");
    M(this, "now", 0);
    M(this, "work", 0);
    M(this, "includeSet", /* @__PURE__ */ new Set());
    M(this, "excludeSet", /* @__PURE__ */ new Set());
    M(this, "excludedDays", []);
    M(this, "datedTokens", !1);
    this.options = e;
  }
  setDateFormat(e) {
    this.dateFormat = e;
  }
  enableInclusiveEndDates() {
    this.inclusiveEndDates = !0;
  }
  TopAxis() {
    this.topAxis = !0;
  }
  setAxisFormat(e) {
    this.axisFormat = e;
  }
  setTickInterval(e) {
    this.tickInterval = e;
  }
  setTodayMarker(e) {
    this.todayMarker = e;
  }
  setIncludes(e) {
    this.includes = Et(this.includes, e);
  }
  setExcludes(e) {
    this.excludes = Et(this.excludes, e);
  }
  setWeekday(e) {
    this.weekday = e;
  }
  setWeekend(e) {
    this.weekend = e;
  }
  setDiagramTitle(e) {
    this.title = e;
  }
  setAccTitle(e) {
    this.accTitle = e.replace(/^\s+/g, "");
  }
  setAccDescription(e) {
    this.accDescr = e.replace(/\n\s+/g, `
`);
  }
  addSection(e) {
    this.currentSection = e, this.sections.push(e);
  }
  addTask(e, t) {
    let a = (t.startsWith(":") ? t.slice(1) : t).split(","), r = { id: "", task: e, section: this.currentSection, startTime: void 0, endTime: void 0, renderEndTime: null, manualEndTime: !1, processed: !1, active: !1, done: !1, crit: !1, milestone: !1, vert: !1, order: -1, classes: [], prevTaskId: this.lastTaskId, raw: { data: t, start: void 0, end: "" } }, i;
    for (; a.length > 0 && (i = Na.exec(a[0])) !== null; )
      r[i[1]] = !0, a.shift();
    if (a.length === 0)
      throw new J(`Task "${e.trim()}" needs a duration or an end date.`, "semantic", { type: "gantt" });
    if (a.length > 3)
      throw new J(`Task "${e.trim()}" has too many fields. A task takes an id, a start, and an end or duration.`, "semantic", { type: "gantt" });
    for (let n = 0; n < a.length; n++)
      a[n] = a[n].trim();
    a.length === 3 ? r.id = a[0] : (this.taskCount++, r.id = "task" + this.taskCount), a.length > 1 && (r.raw.start = a[a.length - 2]), r.raw.end = a[a.length - 1], r.vert || (r.order = this.lastOrder++), this.tasks.push(r), this.lastTaskId = r.id, this.byId.set(r.id, r);
  }
  setLink(e, t) {
    let a = ua(t);
    for (let r of e.split(","))
      this.byId.has(r) && this.links.set(r, a);
    this.setClass(e, "clickable");
  }
  setClickEvent(e, t, a) {
    this.setClass(e, "clickable");
  }
  setClass(e, t) {
    var a;
    for (let r of e.split(","))
      (a = this.byId.get(r)) == null || a.classes.push(t);
  }
  getTasks(e) {
    this.now = Qt(e), this.work = 0, this.includeSet = new Set(this.includes), this.excludeSet = new Set(this.excludes);
    let t = this.weekend === "friday" ? 5 : this.weekend === "saturday" ? 6 : NaN, a = this.excludeSet.has("weekends");
    this.excludedDays = V.map((i, n) => {
      let s = n || 7;
      return a && (s === t || s === t + 1) || this.excludeSet.has(i.toLowerCase());
    }), this.datedTokens = this.includes.length > 0 || !Aa.test(this.dateFormat.trim());
    for (let i of this.excludes)
      i !== "weekends" && !Wa.has(i) && (this.datedTokens = !0);
    for (let i of this.tasks)
      i.startTime = i.endTime = void 0, i.renderEndTime = null, i.processed = i.manualEndTime = !1;
    let r = this.compileTasks();
    for (let i = 0; !r && i < 10; i++)
      r = this.compileTasks();
    return this.tasks;
  }
  isInvalidDate(e) {
    let t = this.excludedDays[e.getDay()];
    if (!this.datedTokens)
      return t;
    let a = this.dateFormat.trim(), r = Vt(e), i = r;
    this.spend(Oa), a !== "YYYY-MM-DD" && (this.spend(Xa + a.length * 8), i = Pt(e, a));
    let n = (s) => s.has(r) || i !== void 0 && s.has(i);
    return n(this.includeSet) ? !1 : t || n(this.excludeSet);
  }
  spend(e) {
    if (this.work += e, this.work > Ga)
      throw new J("The gantt chart takes too much work to schedule.", "limit", { type: "gantt" });
  }
  parse(e, t) {
    return this.spend((t.length + 1) * (e.length + 1)), Ia(e, t, new Date(this.now));
  }
  today() {
    let e = new Date(this.now);
    return e.setHours(0, 0, 0, 0), e;
  }
  warn(e) {
    this.options.warn && this.options.warn(e());
  }
  compileTasks() {
    let e = !0;
    for (let t of this.tasks)
      this.compileTask(t), e = e && t.processed;
    return e;
  }
  compileTask(e) {
    let t = e.raw.start;
    if (t === void 0) {
      let a = e.prevTaskId === void 0 ? void 0 : this.byId.get(e.prevTaskId);
      e.startTime = a ? a.endTime : this.today();
    } else {
      let a = this.getStartDate(t);
      a && (e.startTime = a);
    }
    e.startTime && (e.endTime = this.getEndDate(e.startTime, e.raw.end), e.endTime && (e.processed = !0, e.manualEndTime = this.parse(e.raw.end, "YYYY-MM-DD") !== void 0, this.checkTaskDates(e)));
  }
  references(e, t) {
    let a = [], r;
    for (let i of t.split(" ")) {
      if (i === "")
        continue;
      let n = this.byId.get(i);
      n ? a.push(n) : (r != null ? r : r = []).push(i);
    }
    if (r) {
      let i = r;
      this.warn(() => `Gantt: "${e}" refers to task ids that do not exist: ${i.join(", ")}.`);
    }
    return a;
  }
  getStartDate(e) {
    let t = e.trim(), a = this.dateFormat.trim();
    if ((a === "x" || a === "X") && La.test(t))
      return this.checked(new Date(Number(t)), t);
    let r = Ha.exec(t);
    if (r !== null) {
      let s = this.references("after", r[1]), l;
      for (let u of s)
        (!l || u.endTime > l.endTime) && (l = u);
      return l ? l.endTime : this.today();
    }
    let i = this.parse(t, a);
    if (i)
      return i;
    let n = new Date(t);
    if (!le(n) || n.getFullYear() < -1e4 || n.getFullYear() > 1e4)
      throw new J("Invalid date:" + t, "semantic", { type: "gantt" });
    return n;
  }
  checked(e, t) {
    if (!le(e))
      throw new J("Invalid date:" + t, "semantic", { type: "gantt" });
    return e;
  }
  getEndDate(e, t) {
    let a = t.trim(), r = Ea.exec(a);
    if (r !== null) {
      let g = this.references("until", r[1]), p;
      for (let y of g)
        (!p || y.startTime < p.startTime) && (p = y);
      return p ? p.startTime : this.today();
    }
    let i = this.dateFormat.trim(), n = this.parse(a, i);
    if (n)
      return this.inclusiveEndDates ? Z(n, 1) : n;
    let [s, l] = Pa(a);
    if (Number.isNaN(s))
      return this.warn(() => `Gantt: "${a}" is neither a date in the "${i}" format nor a duration such as "3d", so the task gets no duration.`), new Date(e);
    let u = Ot(e, s, l);
    return le(u) ? u : new Date(e);
  }
  checkTaskDates(e) {
    if (this.excludes.length === 0 || e.manualEndTime)
      return;
    let t = Z(e.startTime, 1), a = new Date(e.endTime), r = +Z(a, 1e4), i = !1, n = null;
    for (; +t <= +a; ) {
      if (this.spend(Za), i || (n = +a), i = this.isInvalidDate(t), i && (a.setDate(a.getDate() + 1), +a > r))
        throw new J("Failed to find a valid date that was not excluded by `excludes` after 10,000 iterations.", "semantic", { type: "gantt" });
      t.setDate(t.getDate() + 1);
    }
    e.endTime = a, e.renderEndTime = n === null ? null : new Date(n);
  }
}, Qa = ["$end", "INVALID", "open_directive", "acc_title", "acc_title_value", "acc_descr", "acc_descr_value", "acc_descr_multiline_value", "NL", "href", "callbackname", "callbackargs", "click", "gantt", "dateFormat", "inclusiveEndDates", "topAxis", "axisFormat", "tickInterval", "includes", "excludes", "todayMarker", "weekday_monday", "weekday_tuesday", "weekday_wednesday", "weekday_thursday", "weekday_friday", "weekday_saturday", "weekday_sunday", "weekend_friday", "weekend_saturday", "date", "title", "accDescription", "section", "taskTxt", "taskData", ":", "EOF"], qa = /accTitle\s*:\s*/iy, ja = /accDescr\s*:\s*/iy, Ja = /accDescr\s*\{\s*/iy, Ua = /href\s+"/iy, Ba = /call\s+/iy, Ra = /click\s+/iy, Ka = /\(\s*\)/y, Ze = /weekday\s+(monday|tuesday|wednesday|thursday|friday|saturday|sunday)\b/iy, er = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"], Oe = /weekend\s+(?:(friday)|saturday)\b/iy, tr = /\d\d\d\d-\d\d-\d\d\b/y, ar = /title[^\S\r\n]*(?=[\r\n]|$)/iy, rr = /* @__PURE__ */ new Map([[97, [[/axisFormat\s[^#\n;]+/iy, 17], [/accDescription\s[^#\n;]+/iy, 33]]], [103, [[/gantt\b/iy, 13]]], [100, [[/dateFormat\s[^#\n;]+/iy, 14]]], [105, [[/inclusiveEndDates\b/iy, 15], [/includes\s[^#\n;]+/iy, 19]]], [116, [[/topAxis\b/iy, 16], [/tickInterval\s[^#\n;]+/iy, 18], [/todayMarker\s[^\n;]+/iy, 21], [/title[^\S\r\n][^\n]+/iy, 32]]], [101, [[/excludes\s[^#\n;]+/iy, 20]]], [115, [[/section\s[^\n]+/iy, 34]]]]);
function sr(e) {
  let t = e.length, a = [], r = [], i = [], n = 0, s = 0, l = (y, c, k) => {
    a.push(y), r.push(e.slice(c, k)), i.push(c), s = k;
  }, u = (y) => (y.lastIndex = s, y.test(e) ? y.lastIndex : -1), g = (y, c) => {
    let k = e.indexOf(y, c);
    return k === -1 ? t : k;
  }, p = (y) => {
    let c;
    switch (y | 32) {
      case 97:
        if ((c = u(qa)) >= 0)
          return n = 1, l(3, s, c), !0;
        if ((c = u(ja)) >= 0)
          return n = 2, l(5, s, c), !0;
        if ((c = u(Ja)) >= 0)
          return n = 3, s = c, !0;
        break;
      case 104:
        if ((c = u(Ua)) >= 0)
          return n = 4, s = c, !0;
        break;
      case 99:
        if ((c = u(Ba)) >= 0)
          return n = 5, s = c, !0;
        if ((c = u(Ra)) >= 0)
          return n = 7, s = c, !0;
        break;
      case 116:
        if ((c = u(ar)) >= 0)
          return s = c, !0;
        break;
      case 119: {
        Ze.lastIndex = s;
        let D = Ze.exec(e);
        if (D)
          return l(22 + er.indexOf(D[1].toLowerCase()), s, Ze.lastIndex), !0;
        if (Oe.lastIndex = s, D = Oe.exec(e), D)
          return l(D[1] !== void 0 ? 29 : 30, s, Oe.lastIndex), !0;
        break;
      }
    }
    let k = rr.get(y | 32);
    if (k) {
      for (let [D, N] of k)
        if ((c = u(D)) >= 0)
          return l(N, s, c), !0;
    }
    return !1;
  };
  for (; ; ) {
    if (s >= t) {
      let c = 38;
      switch (n) {
        case 1:
          c = 4;
          break;
        case 2:
          c = 6;
          break;
        case 3:
          c = 7;
          break;
        case 4:
          c = 9;
          break;
        case 5:
          c = 10;
          break;
        case 6:
          c = 11;
          break;
        case 7:
          c = 12;
          break;
      }
      l(c, t, t);
      break;
    }
    let y = e.charCodeAt(s);
    switch (n) {
      case 0: {
        let c = e.charCodeAt(s + 1);
        if (y === 37)
          if (c !== 37) {
            let k = g(`
`, s + 1);
            for (; e.charCodeAt(k) === 10; )
              k++;
            s = k;
          } else {
            if (e.charCodeAt(s + 2) === 123)
              return l(2, s, s + 3), l(1, s, s), { types: a, texts: r, starts: i };
            s = g(`
`, s + 2);
          }
        else if (y === 10) {
          let k = s + 1;
          for (; e.charCodeAt(k) === 10; )
            k++;
          l(8, s, k);
        } else if (ye(y))
          for (s++; s < t && ye(e.charCodeAt(s)); )
            s++;
        else {
          if (p(y))
            break;
          if (y >= 48 && y <= 57 && u(tr) >= 0)
            l(31, s, s + 10);
          else if (y !== 58) {
            let k = s + 1;
            for (; k < t; ) {
              let D = e.charCodeAt(k);
              if (D === 58 || D === 10)
                break;
              k++;
            }
            l(35, s, k);
          } else {
            let k = s + 1;
            for (; k < t; ) {
              let D = e.charCodeAt(k);
              if (D === 35 || D === 10 || D === 59)
                break;
              k++;
            }
            l(k > s + 1 ? 36 : 37, s, k);
          }
        }
        break;
      }
      case 1:
      case 2: {
        let c = n === 1 ? 4 : 6;
        n = 0, l(c, s, g(`
`, s));
        break;
      }
      case 3:
        y === 125 ? (n = 0, s++) : l(7, s, g("}", s));
        break;
      case 4:
        y === 34 ? (n = 0, s++) : l(9, s, g('"', s));
        break;
      case 5:
        if (y === 40) {
          let c = u(Ka);
          c >= 0 ? (n = 0, s = c) : (n = 6, s++);
        } else
          l(10, s, g("(", s));
        break;
      case 6:
        y === 41 ? (n = 0, s++) : l(11, s, g(")", s));
        break;
      case 7:
        if (ye(y))
          n = 0, s++;
        else {
          let c = s + 1;
          for (; c < t && !ye(e.charCodeAt(c)); )
            c++;
          l(12, s, c);
        }
        break;
    }
  }
  return a.push(0), r.push(""), i.push(t), { types: a, texts: r, starts: i };
}
var nr = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"], Ct = "'EOF', 'SPACE', 'NL', 'weekday_monday', 'weekday_tuesday', 'weekday_wednesday', 'weekday_thursday', 'weekday_friday', 'weekday_saturday', 'weekday_sunday', 'weekend_friday', 'weekend_saturday', 'dateFormat', 'inclusiveEndDates', 'topAxis', 'axisFormat', 'tickInterval', 'excludes', 'includes', 'todayMarker', 'title', 'acc_title', 'acc_descr', 'acc_descr_multiline_value', 'section', 'taskTxt', 'click'", be = new Uint8Array(39);
for (let e = 22; e <= 30; e++)
  be[e] = 1;
for (let e of [38, 8, 14, 15, 16, 17, 18, 20, 19, 21, 32, 3, 5, 7, 34, 35, 12])
  be[e] = 1;
function ir(e, t) {
  let { types: a, texts: r, starts: i } = sr(e), n = 0, s = (u) => {
    let g = a[n];
    throw fa("gantt", e, i[n], `Expecting ${u}, got '${g === 0 ? "1" : Qa[g]}'`);
  }, l = (u = "") => {
    be[a[n]] !== 1 && s(Ct + u);
  };
  for (a[n] !== 13 && s("'gantt'"), n++; ; ) {
    let u = a[n], g = r[n];
    switch (be[u] !== 1 && s(Ct), n++, u) {
      case 38:
        if (a[n] === 0)
          return;
        l();
        break;
      case 8:
        break;
      case 14:
        l(), t.setDateFormat(g.slice(11));
        break;
      case 15:
        l(), t.enableInclusiveEndDates();
        break;
      case 16:
        l(), t.TopAxis();
        break;
      case 17:
        l(), t.setAxisFormat(g.slice(11));
        break;
      case 18:
        l(), t.setTickInterval(g.slice(13));
        break;
      case 20:
        l(), t.setExcludes(g.slice(9));
        break;
      case 19:
        l(), t.setIncludes(g.slice(9));
        break;
      case 21:
        l(), t.setTodayMarker(g.slice(12));
        break;
      case 29:
        l(), t.setWeekend("friday");
        break;
      case 30:
        l(), t.setWeekend("saturday");
        break;
      case 32:
        l(), t.setDiagramTitle(g.slice(6));
        break;
      case 3: {
        a[n] !== 4 && s("'acc_title_value'");
        let p = r[n++];
        l(), t.setAccTitle(p.trim());
        break;
      }
      case 5: {
        a[n] !== 6 && s("'acc_descr_value'");
        let p = r[n++];
        l(), t.setAccDescription(p.trim());
        break;
      }
      case 7:
        l(), t.setAccDescription(g.trim());
        break;
      case 34:
        l(), t.addSection(g.slice(8));
        break;
      case 35: {
        a[n] !== 36 && s("'taskData'");
        let p = r[n++];
        l(), t.addTask(g, p);
        break;
      }
      case 12: {
        let p, y = null, c;
        a[n] === 10 ? (p = r[n++], a[n] === 11 && (y = r[n++]), a[n] === 9 ? (c = r[n++], l()) : l(y === null ? ", 'callbackargs', 'href'" : ", 'href'")) : a[n] === 9 ? (c = r[n++], a[n] === 10 ? (p = r[n++], a[n] === 11 ? (y = r[n++], l()) : l(", 'callbackargs'")) : l(", 'callbackname'")) : s("'callbackname', 'href'"), p !== void 0 && t.setClickEvent(g, p, y), c !== void 0 && t.setLink(g, c);
        break;
      }
      default:
        l(), t.setWeekday(nr[u - 22]);
    }
  }
}
var z = 1e3, L = 60 * z, P = 60 * L, Q = 24 * P, de = 7 * Q, qe = 30 * Q, ve = 365 * Q;
function Me(e) {
  e.setHours(0, 0, 0, 0);
}
function $e(e) {
  return { floor(t) {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), Me(t);
  }, offset: (t, a) => t.setDate(t.getDate() + a * 7), cycle: 1 / 0, ms: de };
}
var oe = { millisecond: { floor: () => {
}, offset: (e, t) => e.setTime(+e + t), cycle: 1 / 0, ms: 1 }, second: { floor: (e) => e.setTime(+e - e.getMilliseconds()), offset: (e, t) => e.setTime(+e + t * z), field: (e) => e.getUTCSeconds(), cycle: 60, ms: z }, minute: { floor: (e) => e.setTime(+e - e.getMilliseconds() - e.getSeconds() * z), offset: (e, t) => e.setTime(+e + t * L), field: (e) => e.getMinutes(), cycle: 60, ms: L }, hour: { floor: (e) => e.setTime(+e - e.getMilliseconds() - e.getSeconds() * z - e.getMinutes() * L), offset: (e, t) => e.setTime(+e + t * P), field: (e) => e.getHours(), cycle: 24, ms: P }, day: { floor: Me, offset: (e, t) => e.setDate(e.getDate() + t), field: (e) => e.getDate() - 1, cycle: 31, ms: Q }, month: { floor(e) {
  e.setDate(1), Me(e);
}, offset: (e, t) => e.setMonth(e.getMonth() + t), field: (e) => e.getMonth(), cycle: 12, ms: qe }, year: { floor(e) {
  e.setMonth(0, 1), Me(e);
}, offset: (e, t) => e.setFullYear(e.getFullYear() + t), cycle: 1 / 0, ms: ve } };
function Te(e, t, a) {
  return Math.floor((+t - +e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * L) / a);
}
function lr(e, t) {
  return (e % t + t) % t;
}
function pe(e, t, a) {
  let r = e === "week" ? $e(a) : oe[e];
  if (t <= 1)
    return r;
  if (e === "millisecond")
    return { ...r, floor: (s) => s.setTime(Math.floor(+s / t) * t), offset: (s, l) => s.setTime(+s + l * t) };
  if (e === "year")
    return { ...r, floor(s) {
      s.setFullYear(Math.floor(s.getFullYear() / t) * t), r.floor(s);
    }, offset: (s, l) => s.setFullYear(s.getFullYear() + l * t) };
  if (e === "week") {
    let s = new Date(0);
    return r.floor(s), { ...r, floor(l) {
      r.floor(l), r.offset(l, -lr(Te(s, l, de), t));
    }, offset: (l, u) => r.offset(l, u * t) };
  }
  let i = r.field, n = (s) => i(s) % t === 0;
  return { ...r, floor(s) {
    for (r.floor(s); Number.isFinite(+s) && !n(s); r.floor(s))
      s.setTime(+s - 1);
  }, offset(s, l) {
    for (let u = 0; u < l && Number.isFinite(+s); u++)
      do
        r.offset(s, 1);
      while (Number.isFinite(+s) && !n(s));
  } };
}
function qt(e, t, a, r) {
  let i = new Date(t - 1);
  e.floor(i), e.offset(i, 1), e.floor(i);
  let n = [], s = -1 / 0;
  for (; +i <= a && +i > s; ) {
    if (n.length >= r)
      return;
    s = +i, n.push(s), e.offset(i, 1), e.floor(i);
  }
  return n;
}
function zt(e, t, a) {
  let r = (t - e) / Math.max(0, a), i = Math.floor(Math.log10(r)), n = r / Math.pow(10, i), s = n >= Math.sqrt(50) ? 10 : n >= Math.sqrt(10) ? 5 : n >= Math.SQRT2 ? 2 : 1;
  return Math.pow(10, i) * s;
}
var U = [["second", 1, z], ["second", 5, 5 * z], ["second", 15, 15 * z], ["second", 30, 30 * z], ["minute", 1, L], ["minute", 5, 5 * L], ["minute", 15, 15 * L], ["minute", 30, 30 * L], ["hour", 1, P], ["hour", 3, 3 * P], ["hour", 6, 6 * P], ["hour", 12, 12 * P], ["day", 1, Q], ["day", 2, 2 * Q], ["week", 1, de], ["month", 1, qe], ["month", 3, 3 * qe], ["year", 1, ve]];
function or(e, t, a) {
  var s;
  let r = (t - e) / a, i = 0;
  for (; i < U.length && U[i][2] <= r; )
    i++;
  let n;
  if (i === U.length)
    n = pe("year", Math.max(1, zt(e / ve, t / ve, a)), 0);
  else if (i === 0)
    n = pe("millisecond", Math.max(zt(e, t, a), 1), 0);
  else {
    let [l, u] = U[r / U[i - 1][2] < U[i][2] / r ? i - 1 : i];
    n = pe(l, u, 0);
  }
  return (s = qt(n, e, t, 4 * a + 8)) != null ? s : [];
}
var dr = /^([1-9]\d*)(millisecond|second|minute|hour|day|week|month)$/, cr = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
function ur(e, t, a, r, i) {
  let n = dr.exec(e);
  if (!n)
    return;
  let s = parseInt(n[1], 10), l = n[2], u = pe(l, s, Math.max(0, cr.indexOf(t)));
  if (!((r - a) / (Math.min(s, u.cycle) * u.ms) > i))
    return qt(u, a, r, i);
}
function x(e, t, a) {
  let r = e < 0 ? "-" : "", i = String(r ? -e : e);
  return r + (i.length < a ? t.repeat(a - i.length) + i : i);
}
function G(e, t) {
  let a = new Date(+e);
  return t.floor(a), a;
}
function Lt(e, t) {
  let a = $e(t), r = G(e, oe.year);
  return Te(G(new Date(+r - 1), a), G(e, a), de);
}
function Xe(e) {
  let t = $e(4), a = e.getDay(), r = G(a >= 4 || a === 0 ? e : new Date(+e - 1), t);
  return a >= 4 || a === 0 || (t.offset(r, 1), t.floor(r)), r;
}
var hr = /* @__PURE__ */ new Map([["-", ""], ["_", " "], ["0", "0"]]);
function De(e, t) {
  let a = "", r = 0, i = e.length;
  for (let n = 0; n < i; n++) {
    if (e.charCodeAt(n) !== 37)
      continue;
    a += e.slice(r, n);
    let s = e.charAt(++n), l = hr.get(s);
    l !== void 0 ? s = e.charAt(++n) : l = s === "e" ? " " : "0", a += fr(s, t, l), r = n + 1;
  }
  return a + e.slice(r);
}
function fr(e, t, a) {
  switch (e) {
    case "a":
      return V[t.getDay()].slice(0, 3);
    case "A":
      return V[t.getDay()];
    case "b":
      return R[t.getMonth()].slice(0, 3);
    case "B":
      return R[t.getMonth()];
    case "c":
      return De("%x, %X", t);
    case "d":
    case "e":
      return x(t.getDate(), a, 2);
    case "f":
      return x(t.getMilliseconds(), a, 3) + "000";
    case "g":
      return x(Xe(t).getFullYear() % 100, a, 2);
    case "G":
      return x(Xe(t).getFullYear() % 1e4, a, 4);
    case "H":
      return x(t.getHours(), a, 2);
    case "I":
      return x(t.getHours() % 12 || 12, a, 2);
    case "j":
      return x(1 + Te(G(t, oe.year), G(t, oe.day), Q), a, 3);
    case "L":
      return x(t.getMilliseconds(), a, 3);
    case "m":
      return x(t.getMonth() + 1, a, 2);
    case "M":
      return x(t.getMinutes(), a, 2);
    case "p":
      return t.getHours() >= 12 ? "PM" : "AM";
    case "q":
      return String(1 + Math.floor(t.getMonth() / 3));
    case "Q":
      return String(+t);
    case "s":
      return String(Math.floor(+t / 1e3));
    case "S":
      return x(t.getSeconds(), a, 2);
    case "u":
      return String(t.getDay() || 7);
    case "U":
      return x(Lt(t, 0), a, 2);
    case "V": {
      let r = Xe(t), i = G(r, oe.year), n = G(i, $e(4));
      return x(Te(n, r, de) + (i.getDay() === 4 ? 1 : 0), a, 2);
    }
    case "w":
      return String(t.getDay());
    case "W":
      return x(Lt(t, 1), a, 2);
    case "x":
      return De("%-m/%-d/%Y", t);
    case "X":
      return De("%-I:%M:%S %p", t);
    case "y":
      return x(t.getFullYear() % 100, a, 2);
    case "Y":
      return x(t.getFullYear() % 1e4, a, 4);
    case "Z": {
      let r = t.getTimezoneOffset(), i = Math.abs(r);
      return (r > 0 ? "-" : "+") + x(Math.floor(i / 60), "0", 2) + x(i % 60, "0", 2);
    }
    case "%":
      return "%";
    default:
      return e;
  }
}
var mr = 800, gr = 240, B = 8, yr = /<br\s*\/?>/gi;
function A(e, t, a, r) {
  var n;
  let i = (n = e.gantt) == null ? void 0 : n[t];
  return typeof i == "number" && Number.isFinite(i) ? Math.min(r, Math.max(a, i)) : void 0;
}
function Pe(e, t) {
  var r;
  let a = (r = e.gantt) == null ? void 0 : r[t];
  return typeof a == "string" ? a : void 0;
}
function kr(e, t) {
  var a;
  return ((a = e.gantt) == null ? void 0 : a[t]) === !0;
}
function Wt(e, t, a) {
  let r = Ve(e.replace(yr, " "), !1, t, a, 4e3);
  return r.lines.length <= 1 ? r : { ...r, lines: [r.lines[0]], widths: [r.widths[0]], width: r.widths[0], height: r.lineHeight };
}
function xe(e) {
  return Number.isFinite(+e.startTime) && Number.isFinite(+e.endTime);
}
function wr(e, t, a) {
  let r = e.filter(xe).sort((s, l) => +s.startTime - +l.startTime || s.order - l.order), i = [];
  for (let s of r) {
    let l = +s.startTime, u = 0;
    for (; u < i.length && l < i[u]; )
      u++;
    i[u] = +s.endTime, a.set(s, t + u);
  }
  let n = i.length;
  for (let s of e)
    a.has(s) || a.set(s, t + n++);
  return Math.max(n, 1);
}
function Mr(e, t, a) {
  var ot, dt, ct, ut, ht, ft, mt, gt, yt, kt, wt, Mt, pt, Dt, xt, bt;
  let r = (ot = a.fontSize) != null ? ot : 16, i = (dt = a.measurer) != null ? dt : ha(a.fontFamily, a.fontFamilyMono), n = (ct = a.padding) != null ? ct : 8, s = Qt(a.now), l = (ut = A(t, "fontSize", 4, 72)) != null ? ut : Math.round(r * 0.8125), u = (ht = A(t, "sectionFontSize", 4, 72)) != null ? ht : l, g = Math.round(r * 0.75), p = (ft = A(t, "barHeight", 4, 400)) != null ? ft : Math.round(l * 1.85), y = (mt = A(t, "barGap", 0, 400)) != null ? mt : Math.round(p / 4), c = p + y, k = Math.round((gt = A(t, "numberSectionStyles", 1, 1e3)) != null ? gt : 4), D = e.displayMode === "compact", N = e.topAxis || kr(t, "topAxis"), Se = e.getTasks(s), ce = Se.filter((o) => !o.vert), jt = Se.filter((o) => o.vert && xe(o)), q = /* @__PURE__ */ new Map();
  for (let o of ce)
    q.has(o.section) || q.set(o.section, q.size);
  let Ye = /* @__PURE__ */ new Map(), O = [];
  if (D) {
    let o = /* @__PURE__ */ new Map();
    for (let d of ce) {
      let f = o.get(d.section);
      f ? f.push(d) : o.set(d.section, [d]);
    }
    for (let [d, f] of o) {
      let m = wr(f, O.length, Ye);
      for (let w = 0; w < m; w++)
        O.push(d);
    }
  } else
    for (let o of ce)
      Ye.set(o, O.length), O.push(o.section);
  let Fe = O.length, T = 1 / 0, Y = -1 / 0;
  for (let o of Se)
    xe(o) && (T = Math.min(T, +o.startTime), Y = Math.max(Y, +o.endTime));
  let Jt = T <= Y, H = Ve(e.title, !1, i, r, 4e3, 1), Ut = H.height > 0 ? H.height + 16 : 0;
  if (!Jt) {
    let o = Math.ceil(Math.max(H.width, 1) + 2 * n), d = Math.ceil(Math.max(H.height, 1) + 2 * n), f = se(H, o / 2, n + H.height / 2, ' class="pele-title" font-weight="var(--_tw)"');
    return { svg: $t("gantt", o, d, r, a, e, f), width: o, height: d, links: [] };
  }
  let je = /* @__PURE__ */ new Map(), ue = 0;
  for (let o of q.keys()) {
    let d = Ve(o, !1, i, u, 180);
    je.set(o, d), ue = Math.max(ue, d.width);
  }
  let Bt = e.axisFormat || (e.dateFormat === "D" ? "%d" : (yt = Pe(t, "axisFormat")) != null ? yt : "%Y-%m-%d"), _e = (o) => De(Bt, new Date(o)), Ie = Math.max(i.width(_e(T), g, 0), i.width(_e(Y), g, 0)), E = n + ((kt = A(t, "leftPadding", 0, 2e3)) != null ? kt : Math.max(ue > 0 ? ue + 24 : 0, Ie / 2)), Ae = (wt = A(t, "rightPadding", 0, 2e3)) != null ? wt : Math.max(16, Ie / 2), Rt = ma(a, (Mt = A(t, "useWidth", 100, 2e4)) != null ? Mt : mr, 280), K = Math.max(gr, Rt - E - Ae - n), ee = E + K, Je = Y > T ? K / (Y - T) : 0, W = (o) => Je === 0 ? E + K / 2 : E + (o - T) * Je, te = Math.round(g * 1.75), ae = A(t, "topPadding", 0, 2e3), Ue = A(t, "gridLineStartPadding", 0, 2e3), Be = n + Ut + (N ? te : 0), I = Math.max(Be, ae != null ? ae : 0), re = ae !== void 0 && Ue !== void 0 ? Math.max(0, Math.min(ae - Ue, I - Be)) : 0, Re = Math.max(Fe, 1) * c, X = I + Re, Ne = [], C = ee + Ae;
  for (let o of ce) {
    let d = Wt(o.task, i, l), f = Ye.get(o);
    if (!xe(o)) {
      let F = E + B + d.width / 2;
      C = Math.max(C, F + d.width / 2), Ne.push({ task: o, label: d, row: f, x0: NaN, x1: NaN, labelX: F, inside: !1 });
      continue;
    }
    let m = W(+o.startTime), w = Math.max(W(+((pt = o.renderEndTime) != null ? pt : o.endTime)), m + (o.milestone ? 0 : 2));
    if (o.milestone) {
      let F = m + (W(+o.endTime) - m) / 2;
      m = F - p / 2, w = F + p / 2;
    }
    let $ = !o.milestone && d.width + 2 * B <= w - m, v = (m + w) / 2;
    if (!$) {
      let F = w + B + d.width <= ee + Ae, fe = m - B - d.width >= E;
      v = F || !fe ? w + B + d.width / 2 : m - B - d.width / 2, C = Math.max(C, v + d.width / 2);
    }
    Ne.push({ task: o, label: d, row: f, x0: m, x1: w, labelX: v, inside: $ });
  }
  let Kt = e.tickInterval || Pe(t, "tickInterval") || "", ea = (xt = (Dt = e.weekday) != null ? Dt : Pe(t, "weekday")) != null ? xt : "sunday", ta = Math.max(2, Math.min(10, Math.floor(K / (Ie + 24)))), aa = (bt = ur(Kt, ea, T, Y, Math.ceil(K / 3))) != null ? bt : or(T, Y, ta), Ke = "", et = "", tt = "", He = -1 / 0, at = "", ra = X + te / 2 + 2, sa = I - re - te / 2 - 2;
  for (let o of aa) {
    let d = W(o);
    Ke += `M${h(d)},${h(I - re)}V${h(X)}`;
    let f = _e(o), m = i.width(f, g, 0);
    if (d - m / 2 < He + 8 || f === at)
      continue;
    He = d + m / 2, at = f, C = Math.max(C, He);
    let w = `text-anchor="middle">${ga(f)}</text>`;
    et += `<text x="${h(d)}" y="${h(ra + g * 0.35)}" ${w}`, N && (tt += `<text x="${h(d)}" y="${h(sa + g * 0.35)}" ${w}`);
  }
  let Ee = "", Ce = "", j = [], na = X + te + 4, ze = Math.round(l * 1.5);
  for (let o of [...jt].sort((d, f) => +d.startTime - +f.startTime)) {
    let d = W(+o.startTime), f = Wt(o.task, i, l), m = Math.max(n + f.width / 2, d), w = 0;
    for (; w < j.length && m - f.width / 2 < j[w] + 8; )
      w++;
    j[w] = m + f.width / 2, C = Math.max(C, j[w]), Ee += `<path class="pele-vert" data-id="${ke(o.id)}" d="M${h(d)},${h(I - re)}V${h(X)}"/>`, Ce += se(f, m, na + w * ze + ze / 2, ` class="pele-vert-label" data-id="${ke(o.id)}"`);
  }
  let he = Math.ceil(Math.max(C, n + H.width) + n), rt = Math.ceil(X + te + (j.length > 0 ? 4 + j.length * ze : 0) + n), Le = "", st = "";
  for (let o = 0; o < Fe; ) {
    let d = O[o], f = o + 1;
    for (; f < Fe && O[f] === d; )
      f++;
    let m = q.get(d) % k, w = I + o * c, $ = (f - o) * c;
    (q.size > 1 || d !== "") && (Le += `<rect class="pele-section pele-section-${m}" x="0" y="${h(w)}" width="${he}" height="${h($)}" fill="${m % 2 === 0 ? "var(--_s)" : "none"}"/>`);
    let v = je.get(d);
    st += se(v, n + 8 + v.width / 2, w + $ / 2, ` class="pele-section-label" data-id="${ke(d)}"`, a.icons), o = f;
  }
  let We = "";
  if ((e.excludes.length > 0 || e.includes.length > 0) && +Ot(new Date(T), 6, "y") > Y) {
    let o, d, f = () => {
      if (!o || !d)
        return;
      let m = new Date(o);
      m.setHours(0, 0, 0, 0);
      let w = new Date(d);
      w.setHours(23, 59, 59, 999);
      let $ = Math.max(E, W(+m)), v = Math.min(ee, W(+w));
      v > $ && (We += `<rect x="${h($)}" y="${h(I)}" width="${h(v - $)}" height="${h(Re)}"/>`), o = d = void 0;
    };
    for (let m = new Date(T); +m <= Y; m = Z(m, 1))
      e.isInvalidDate(m) ? (o != null || (o = m), d = m) : f();
    f();
  }
  let nt = [], it = "";
  for (let o of Ne) {
    let d = o.task, f = I + o.row * c + c / 2, m = d.active ? "active" : d.done ? "done" : "", w = "pele-task";
    m && (w += " pele-" + m), d.crit && (w += " pele-crit"), d.milestone && (w += " pele-milestone"), d.classes.includes("clickable") && (w += " pele-clickable");
    let $ = "", v = "";
    if (Number.isNaN(o.x0))
      w += " pele-unscheduled", v = ' fill="var(--_m)"';
    else {
      let Ge = d.crit ? ya : "var(--_c)", vt = m === "done" ? 'fill="var(--_a)"' : m === "active" ? `fill="${Ge}" fill-opacity="0.25"` : `fill="${Ge}"`, Tt = `stroke="${m === "done" && !d.crit ? "var(--_b)" : Ge}"`;
      if (d.milestone) {
        let me = (o.x0 + o.x1) / 2, ge = p / 2;
        $ = `<path d="M${h(me)},${h(f - ge)}L${h(me + ge)},${h(f)}L${h(me)},${h(f + ge)}L${h(me - ge)},${h(f)}Z" ${vt} ${Tt} stroke-linejoin="round"/>`;
      } else
        $ = `<rect x="${h(o.x0)}" y="${h(f - p / 2)}" width="${h(o.x1 - o.x0)}" height="${h(p)}" ${vt} ${Tt}${ka}/>`;
      o.inside ? v = m === "" ? ' fill="var(--_bg)"' : "" : m === "done" && (v = ' fill="var(--_m)"');
    }
    let F = $ + se(o.label, o.labelX, f, ` class="pele-label"${v}`), fe = e.links.get(d.id);
    fe !== void 0 && (F = ca(F, fe, d.id, nt, a)), it += `<g class="${w}" data-id="${ke(d.id)}">${F}</g>`;
  }
  let lt = "";
  if (e.todayMarker !== "off" && s >= T && s <= Y && Y > T) {
    let o = W(s), d = I - re, f = e.todayMarker ? wa(e.todayMarker.split(",")).line : "";
    lt = `<g class="pele-today"><path d="M${h(o)},${h(d)}V${h(X)}" fill="none" stroke="var(--_c)" stroke-width="2"${f}/>` + (f ? "" : `<path d="M${h(o - 4)},${h(d - 5)}H${h(o + 4)}L${h(o)},${h(d + 1)}Z" fill="var(--_c)"/>`) + "</g>";
  }
  let ia = `M${h(E)},${h(X)}H${h(ee)}` + (N ? `M${h(E)},${h(I - re)}H${h(ee)}` : ""), la = se(H, he / 2, n + H.height / 2, ' class="pele-title" font-weight="var(--_tw)"') + (Le ? `<g class="pele-sections">${Le}</g>` : "") + (We ? `<g class="pele-excluded" fill="var(--_a)">${We}</g>` : "") + `<g class="pele-grid" fill="none"><path d="${Ke}" stroke="var(--_b)" stroke-dasharray="1 3"/><path d="${ia}" stroke="var(--_b)"/></g>` + (Ee ? `<g class="pele-verts" fill="none" stroke="var(--_l)" stroke-width="1.5" stroke-dasharray="4 3">${Ee}</g>` : "") + lt + `<g class="pele-tasks" font-size="${h(l)}">${it}</g><g class="pele-section-labels" font-size="${h(u)}">${st}</g><g class="pele-axis" font-size="${g}" fill="var(--_m)">${et}${tt}</g>` + (Ce ? `<g class="pele-vert-labels" font-size="${h(l)}">${Ce}</g>` : "");
  return { svg: $t("gantt", he, rt, r, a, e, la), width: he, height: rt, links: nt };
}
var Tr = { type: "gantt", parse(e, t, a) {
  var n;
  let r = new Va();
  a && (r.title = a);
  let i = (n = t.gantt) == null ? void 0 : n.displayMode;
  return typeof i == "string" && (r.displayMode = i), ir(e, r), r;
}, render: Mr };
export {
  Tr as gantt
};
//# sourceMappingURL=DGIHIYXJ-2d0b420b.js.map

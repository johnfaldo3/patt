"use strict";
exports.__esModule = true;
var enums_1 = require("./enums");
var operate_1 = require("./helpers/operate");
var roundDate_1 = require("./helpers/roundDate");
var parse = function (shorthand) {
    var now = +new Date().getTime();
    var string = shorthand.replace('now', '');
    var addSubtractOperators = string.replace(enums_1.regexes.rounding, '');
    var operations = addSubtractOperators.match(enums_1.regexes.operations);
    var rounding = string.match('/')
        ? string.match(enums_1.regexes.rounding)[0].replace('/', '')
        : null;
    var result = now;
    // we might just be rounding
    if (operations.length > 0) {
        result = operate_1["default"](now, operations);
    }
    return rounding
        ? roundDate_1["default"](new Date(result), rounding).toISOString()
        : new Date(result).toISOString();
};
// const stringify = (date: Date) => {
//   const then = +new Date(date).getTime();
//   const now = +new Date().getTime();
//   const difference = then > now
//     ? then - now
//     : now - then;
//   const hours: number = difference / PartToMilliseconds.h;
//   const days: number = difference / PartToMilliseconds.d;
//   const weeks: number = days / 7;
//   const months: number = days / 31;
//   const years: number = months / 12;
// };
console.log(JSON.stringify(parse('now+1h-3w/d')));
// console.log(JSON.stringify(stringify('now+1h+1m+1w/d')));

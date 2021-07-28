"use strict";
exports.__esModule = true;
var DatePart;
(function (DatePart) {
    DatePart["s"] = "s";
    DatePart["m"] = "m";
    DatePart["h"] = "h";
    DatePart["d"] = "d";
    DatePart["w"] = "w";
    DatePart["M"] = "M";
    DatePart["y"] = "y";
})(DatePart = exports.DatePart || (exports.DatePart = {}));
;
var PartToMilliseconds;
(function (PartToMilliseconds) {
    PartToMilliseconds[PartToMilliseconds["s"] = 1000] = "s";
    PartToMilliseconds[PartToMilliseconds["m"] = 60000] = "m";
    PartToMilliseconds[PartToMilliseconds["h"] = 3600000] = "h";
    PartToMilliseconds[PartToMilliseconds["d"] = 86400000] = "d";
    PartToMilliseconds[PartToMilliseconds["w"] = 604799999] = "w";
    PartToMilliseconds[PartToMilliseconds["M"] = 2629745999] = "M";
    PartToMilliseconds[PartToMilliseconds["y"] = 31556952000] = "y";
})(PartToMilliseconds = exports.PartToMilliseconds || (exports.PartToMilliseconds = {}));
exports.regexes = {
    rounding: /\/[a-z]/,
    operations: /[+-][0-9]+[a-z]/g,
    part: /[a-z]/,
    number: /[0-9]+/,
    addition: /[+]/,
    subtraction: /[-]/
};

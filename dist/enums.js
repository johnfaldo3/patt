"use strict";
exports.__esModule = true;
var DatePart;
(function (DatePart) {
    DatePart["d"] = "DAY";
    DatePart["m"] = "MONTH";
    DatePart["y"] = "YEAR";
    DatePart["h"] = "HOUR";
})(DatePart = exports.DatePart || (exports.DatePart = {}));
;
var PartToMilliseconds;
(function (PartToMilliseconds) {
    PartToMilliseconds[PartToMilliseconds["h"] = 3600000] = "h";
    PartToMilliseconds[PartToMilliseconds["d"] = 86400000] = "d";
    PartToMilliseconds[PartToMilliseconds["y"] = 31536000000] = "y";
})(PartToMilliseconds = exports.PartToMilliseconds || (exports.PartToMilliseconds = {}));
exports.regexes = {
    rounding: /\/[a-z]/,
    operations: /[+-][0-9]+[a-z]/g,
    part: /[a-z]/,
    number: /[0-9]+/,
    addition: /[+]/,
    subtraction: /[-]/
};

"use strict";
exports.__esModule = true;
var enums_1 = require("../enums");
var daysInMonth = function (month, year) { return new Date(year, month, 0).getUTCDate(); };
var roundYear = function (date) {
    var year = date.getUTCFullYear();
    var day = date.getUTCDate();
    var month = date.getUTCMonth();
    if (month >= 5) {
        return new Date(year + 1, 0, day, 0, 0, 0, 0);
    }
    return new Date(year, 0, day, 0, 0, 0, 0);
};
var roundDate = function (date, part) {
    var ms = enums_1.PartToMilliseconds[part];
    switch (part) {
        case enums_1.DatePart.y:
            return roundYear(date);
        case enums_1.DatePart.M:
            // eslint-disable-next-line no-use-before-define
            return roundMonth(date);
        default:
            return new Date(Math.round(date.valueOf() / ms) * ms);
    }
};
var roundMonth = function (date) {
    var year = date.getUTCFullYear();
    var day = date.getUTCDate();
    var month = date.getUTCMonth();
    var numberOfDays = daysInMonth(month, year);
    if (day >= numberOfDays / 2) {
        var newYear = month === 11;
        return roundDate(new Date(newYear ? year + 1 : year, newYear ? 0 : month + 1, 1, 0, 0, 0, 0), enums_1.DatePart.d);
    }
    return roundDate(new Date(year, month, 1, 0, 0, 0, 0), enums_1.DatePart.d);
};
exports["default"] = roundDate;

"use strict";
exports.__esModule = true;
var enums_1 = require("../enums");
var roundDate = function (date, part) {
    var ms = enums_1.PartToMilliseconds[part];
    return new Date(Math.round(date.getTime() / ms) * ms);
};
exports["default"] = roundDate;

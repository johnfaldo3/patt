"use strict";
exports.__esModule = true;
var enums_1 = require("../enums");
var operate = function (now, operations) {
    var value = now;
    Object.values(operations).forEach(function (operation) {
        var partValue = Number(enums_1.PartToMilliseconds[operation.match(enums_1.regexes.part)[0]]);
        var isAddition = enums_1.regexes.addition.test(operation);
        var quantity = Number(operation.match(enums_1.regexes.number)[0]);
        var adjustment = (quantity * partValue);
        if (isAddition) {
            value += adjustment;
        }
        else {
            value -= adjustment;
        }
    });
    return value;
};
exports["default"] = operate;

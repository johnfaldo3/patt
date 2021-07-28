"use strict";
exports.__esModule = true;
var enums_1 = require("./enums");
var roundDate_1 = require("./helpers/roundDate");
var operate = function (now, operations) {
    var value = now;
    Object.values(operations).forEach(function (operation) {
        var partValue = Number(enums_1.PartToMilliseconds[operation.match(enums_1.regexes.part)[0]]);
        var quantity = Number(operation.match(enums_1.regexes.number)[0]);
        var adjustment = quantity * partValue;
        var isAddition = enums_1.regexes.addition.test(operation);
        if (isAddition) {
            value += adjustment;
        }
        else {
            value -= adjustment;
        }
    });
    return value;
};
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
    if (operations) {
        result = operate(now, operations);
    }
    console.log({ result: result, rounded: roundDate_1["default"](new Date(result), rounding) });
    return rounding
        ? roundDate_1["default"](new Date(result), rounding).toISOString()
        : new Date(result).toISOString();
};
// console.log(JSON.stringify(parse('now+1h-3w/d')));
exports["default"] = parse;

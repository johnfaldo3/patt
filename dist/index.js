"use strict";
exports.__esModule = true;
var enums_1 = require("./enums");
var operate_1 = require("./helpers/operate");
var roundDate_1 = require("./helpers/roundDate");
var parse = function (shorthand) {
    var now = +new Date().getTime();
    var string = shorthand.replace('now', '');
    var round = string.match('/')
        ? string.match(enums_1.regexes.rounding)[0].replace('/', '')
        : null;
    var minusRound = string.replace(enums_1.regexes.rounding, '');
    var operations = minusRound.match(enums_1.regexes.operations);
    var result = operate_1["default"](now, operations);
    var date = new Date(result);
    var parsed = round ? roundDate_1["default"](date, round).toISOString() : date.toISOString();
    return {
        parsed: parsed
    };
};
console.log(JSON.stringify(parse('now+1h/d')));

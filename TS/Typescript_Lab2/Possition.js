"use strict";
exports.__esModule = true;
exports.printInForPossition = exports.Possition = void 0;
var Possition = /** @class */ (function () {
    function Possition(id, name) {
        this.id = id;
        this.name = name;
    }
    Possition.prototype.getid = function () {
        return this.id;
    };
    Possition.prototype.setid = function (id) {
        this.id = id;
    };
    Possition.prototype.getname = function () {
        return this.name;
    };
    Possition.prototype.setname = function (name) {
        this.name = name;
    };
    return Possition;
}());
exports.Possition = Possition;
function printInForPossition(possition) {
    console.log("ID " + possition.getid() + "name " + possition.getname());
}
exports.printInForPossition = printInForPossition;

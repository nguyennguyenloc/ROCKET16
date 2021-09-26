"use strict";
exports.__esModule = true;
exports.printInForDepartment = exports.Department = void 0;
var Department = /** @class */ (function () {
    function Department(id, name) {
        this.id = id;
        this.name = name;
    }
    Department.prototype.getid = function () {
        return this.id;
    };
    Department.prototype.setid = function (id) {
        this.id = id;
    };
    Department.prototype.getname = function () {
        return this.name;
    };
    Department.prototype.setname = function (name) {
        this.name = name;
    };
    return Department;
}());
exports.Department = Department;
function printInForDepartment(department) {
    console.log("ID " + department.getid() + "name " + department.getname());
}
exports.printInForDepartment = printInForDepartment;

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Employees = void 0;
var Staff_1 = require("./Staff");
var Employees = /** @class */ (function (_super) {
    __extends(Employees, _super);
    function Employees(name, age, gender, address, task) {
        var _this = _super.call(this, name, age, gender, address) || this;
        _this.task = task;
        return _this;
    }
    Employees.prototype.printInForEmployees = function () {
        console.log("Thông tin Employees");
        _super.prototype.printInOfStaff.call(this);
        console.log("Task " + this.task);
    };
    return Employees;
}(Staff_1.Staff));
exports.Employees = Employees;

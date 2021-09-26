"use strict";
exports.__esModule = true;
exports.Staff = void 0;
var Staff = /** @class */ (function () {
    function Staff(name, age, gender, address) {
        this.name = name;
        this.address = address;
        this.age = age;
        this.gender = gender;
    }
    Staff.prototype.setname = function (name) {
        this.name = name;
    };
    Staff.prototype.getname = function () {
        return this.name;
    };
    Staff.prototype.setgender = function (gender) {
        this.gender = gender;
    };
    Staff.prototype.getgender = function () {
        return this.gender;
    };
    Staff.prototype.setage = function (age) {
        this.age = age;
    };
    Staff.prototype.getage = function () {
        return this.age;
    };
    Staff.prototype.setaddress = function (address) {
        this.address = address;
    };
    Staff.prototype.getaddress = function () {
        return this.address;
    };
    Staff.prototype.printInOfStaff = function () {
        console.log("Name: " + this.name + " Age: " + this.age + " Gender: " + this.gender + " Address: " + this.address);
    };
    return Staff;
}());
exports.Staff = Staff;

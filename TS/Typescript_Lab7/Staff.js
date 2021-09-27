"use strict";
exports.__esModule = true;
exports.Staff = void 0;
var Staff = /** @class */ (function () {
    function Staff(name, age, gender, address) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.address = address;
    }
    // Nhóm hàm getter và Setter
    Staff.prototype.setname = function (v) {
        this.name = v;
    };
    Staff.prototype.getname = function () {
        return this.name;
    };
    Staff.prototype.setage = function (v) {
        this.age = v;
    };
    Staff.prototype.getage = function () {
        return this.age;
    };
    Staff.prototype.setgender = function (v) {
        this.gender = v;
    };
    Staff.prototype.getgender = function () {
        return this.gender;
    };
    Staff.prototype.setaddress = function (v) {
        this.address = v;
    };
    Staff.prototype.getaddress = function () {
        return this.address;
    };
    Staff.prototype.printInforStaff = function () {
        console.log("Name: " +
            this.name +
            " Age: " +
            this.age +
            " Gender: " +
            this.gender +
            " Address: " +
            this.address);
    };
    return Staff;
}());
exports.Staff = Staff;

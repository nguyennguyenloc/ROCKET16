"use strict";
exports.__esModule = true;
exports.print_Account_Arrow_Function1 = exports.print_Account_Arrow_Function = exports.print_Account = exports.printInforAccount = exports.Account = void 0;
var Account = /** @class */ (function () {
    // Hàm tạo full tham số cho Account
    function Account(email, username, fullname) {
        this.email = email;
        this.username = username;
        this.fullname = fullname;
    }
    // Nhóm hàm getter và Setter
    Account.prototype.setemail = function (v) {
        this.email = v;
    };
    Account.prototype.getemail = function () {
        return this.email;
    };
    Account.prototype.setusername = function (v) {
        this.username = v;
    };
    Account.prototype.getusername = function () {
        return this.username;
    };
    Account.prototype.setfullname = function (v) {
        this.fullname = v;
    };
    Account.prototype.getfullname = function () {
        return this.fullname;
    };
    return Account;
}());
exports.Account = Account;
// Hàm in thông tin Account, viết bên ngoài class
//Cách 1
function printInforAccount(account) {
    console.log("Email: " + account.getemail() + " UserName: " + account.getusername() + " Fullname: " + account.getfullname());
}
exports.printInforAccount = printInforAccount;
//Cách 2
var print_Account = function printInforAccount(account) {
    console.log("Email: " + account.getemail() + " UserName: " + account.getusername() + " Fullname: " + account.getfullname());
};
exports.print_Account = print_Account;
//Cách 3
var print_Account_Arrow_Function = function (account) {
    console.log("Email: " + account.getemail() + " UserName: " + account.getusername() + " Fullname: " + account.getfullname());
};
exports.print_Account_Arrow_Function = print_Account_Arrow_Function;
//Cách 4
var print_Account_Arrow_Function1 = function (account) {
    console.log("Email: " + account.getemail() + " UserName: " + account.getusername() + " Fullname: " + account.getfullname());
};
exports.print_Account_Arrow_Function1 = print_Account_Arrow_Function1;

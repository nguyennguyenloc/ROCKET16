"use strict";
exports.__esModule = true;
var Account_1 = require("./Account");
var account1 = new Account_1.Account("Account1", "Loc", "Nguyen Loc");
var account2 = new Account_1.Account("Account2", "Loc2", "Nguyen Loc 2");
var account3 = new Account_1.Account("Account3", "Loc3", "Nguyen Loc 3");
console.log("Cách 1");
(0, Account_1.printInforAccount)(account1);
console.log("Cách 2");
(0, Account_1.print_Account)(account1);
console.log("Cách 3");
(0, Account_1.print_Account_Arrow_Function)(account1);
console.log("Cách 4");
(0, Account_1.print_Account_Arrow_Function1)(account1);
var account_Array;
account_Array = [account1, account2, account3];
console.log("---Thông tin Account sử dụng Map---");
account_Array.map(function (account, key) {
    console.log("STT: ", key);
    (0, Account_1.printInforAccount)(account);
});

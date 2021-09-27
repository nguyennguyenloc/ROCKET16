import { Account, printInforAccount, print_Account, print_Account_Arrow_Function, print_Account_Arrow_Function1 } from "./Account";
let account1 = new Account("Account1", "Loc", "Nguyen Loc");
let account2 = new Account("Account2", "Loc2", "Nguyen Loc 2");
let account3 = new Account("Account3", "Loc3", "Nguyen Loc 3");
console.log("Cách 1");
printInforAccount(account1);
console.log("Cách 2");
print_Account(account1);
console.log("Cách 3");
print_Account_Arrow_Function(account1);
console.log("Cách 4");
print_Account_Arrow_Function1(account1);

let account_Array: Account[];
account_Array = [account1, account2, account3];
console.log("---Thông tin Account sử dụng Map---");
account_Array.map(function(account: Account, key: number){
    console.log("STT: ", key);
    printInforAccount(account);
})
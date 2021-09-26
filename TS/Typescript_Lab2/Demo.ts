import { Account, printInforAccount } from "./Account";
import { Department, printInForDepartment } from "./Department";
import { Possition, printInForPossition } from "./Possition";

let dep1 = new Department(1, "Develop");
let dep2 = new Department(2, "Sale");
let dep3 = new Department(3, "Master");

console.log("In thông tin các phòng ban");
printInForDepartment(dep1);
printInForDepartment(dep2);
printInForDepartment(dep3);

let pos1 = new Possition(1, "Dev")
let pos2 = new Possition(2, "Ok");
let pos3 = new Possition(3, "VTI");
console.log("In thông tin các khu vực");
printInForPossition(pos1);
printInForPossition(pos2);
printInForPossition(pos3);

let date: Date = new Date("2021-09-26");
let acc1 = new Account(1, "nnloc123@gmail.com", "loc", "nguyenloc", dep1, pos1, date);
let acc2 = new Account(2, "ok@gmail.com", "ok", "ok ok", dep2, pos2, date);
console.log("In thông tin account");
printInforAccount(acc1);
printInforAccount(acc2);
"use strict";
exports.__esModule = true;
var Worker_1 = require("./Worker");
var Employee_1 = require("./Employee");
var Engineer_1 = require("./Engineer");
// Tạo ra các đối tượng
var worker1 = new Worker_1.Worker("Worker1", 20, "Male", "HN", 10);
var worker2 = new Worker_1.Worker("Worker2", 22, "FeMale", "NĐ", 7);
var worker3 = new Worker_1.Worker("Worker3", 24, "Male", "HN", 8);
var Engineer1 = new Engineer_1.Engineer("Engineer1", 20, "Male", "HN", "DEV");
var Engineer2 = new Engineer_1.Engineer("Engineer2", 22, "FeMale", "NĐ", "TEST");
var Engineer3 = new Engineer_1.Engineer("Engineer3", 24, "Male", "HN", "DEV");
var Employee1 = new Employee_1.Employee("Employee1", 20, "Male", "HN", "Task1"); // Tạo mới 1 đối tượng Worker.
var Employee2 = new Employee_1.Employee("Employee2", 22, "FeMale", "NĐ", "Task2");
var Employee3 = new Employee_1.Employee("Employee3", 24, "Male", "HN", "Task3");
var staffArray;
staffArray = [worker1, worker2, worker3, Engineer1, Engineer2, Engineer3, Employee1, Employee2, Employee3];
//Cách 1: cách gọi hàm bình thường
console.log("===Demo cách gọi hàm bình thường====");
function printWorkerInfo(staffArray) {
    staffArray.forEach(function (element) {
        if (element instanceof Worker_1.Worker) {
            element.printInforWorker();
        }
    });
}
function printEmployeeInfo(staffArray) {
    staffArray.forEach(function (element) {
        if (element instanceof Employee_1.Employee) {
            element.printInforEmployee();
        }
    });
}
printWorkerInfo(staffArray);
printEmployeeInfo(staffArray);
//Cách 2: sử dụng HOF, tham số đầu vào là 1 hàm, đầu ra trả ra 1 hàm
console.log("=====Demo HOF cách 2: ======");
function printStaff(staffArray, function_printf) {
    return function_printf(staffArray);
}
console.log("===Sử dụng HOF để in thông tin===");
printStaff(staffArray, printWorkerInfo);
printStaff(staffArray, printEmployeeInfo);
//Cách 3: Hàm giá trị truyền vào là 1 object
console.log("======In theo cách 3======");
function printStaffArray(staffArray, params) {
    staffArray.forEach(function (element) {
        if (element instanceof params) {
            console.log("Thông tin: ", element);
        }
    });
}
printStaffArray(staffArray, Worker_1.Worker);
printStaffArray(staffArray, Employee_1.Employee);

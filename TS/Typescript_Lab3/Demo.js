"use strict";
exports.__esModule = true;
var Employee_1 = require("./Employee");
var Engineer_1 = require("./Engineer");
var Worker_1 = require("./Worker");
var worker1 = new Worker_1.Worker("Worker1", 19, "Male", "HN", 10);
var worker2 = new Worker_1.Worker("Worker2", 29, "Female", "DN", 60);
var worker3 = new Worker_1.Worker("Worker3", 9, "Male", "SG", 5);
console.log("In thông tin worker");
worker1.printInOfWorker();
worker2.printInOfWorker();
worker3.printInOfWorker();
// --------
var workerArray;
workerArray = [worker1, worker2, worker3];
console.log("=== Sử dụng foreach để in thông tin worker:");
workerArray.forEach(function (element) {
    element.printInOfWorker();
});
// -------------
var engineer1 = new Engineer_1.Engineer("Engineer1", 20, "Male", "HN", "DEV");
var engineer2 = new Engineer_1.Engineer("Engineer2", 10, "Male", "HN", "DEV");
var engineer3 = new Engineer_1.Engineer("Engineer3", 26, "Female", "HN", "DEV");
var engineerSet = new Set();
engineerSet.add(engineer1);
engineerSet.add(engineer2);
engineerSet.add(engineer3);
console.log("===Demo Set Engineer===");
engineerSet.forEach(function (element) {
    console.log(element);
});
// ----------
var employees1 = new Employee_1.Employees("Employees1", 20, "Male", "HN", "Task1");
var employees2 = new Employee_1.Employees("Employees2", 28, "Female", "SG", "Task2");
var employees3 = new Employee_1.Employees("Employees3", 35, "Male", "DN", "Task3");
var employeesArray;
employeesArray = [employees1, employees2, employees3];
console.log("===Demo for of Employees===");
for (var _i = 0, employeesArray_1 = employeesArray; _i < employeesArray_1.length; _i++) {
    var element = employeesArray_1[_i];
    element.printInForEmployees();
}

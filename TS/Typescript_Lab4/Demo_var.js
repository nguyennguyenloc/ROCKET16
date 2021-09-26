"use strict";
exports.__esModule = true;
var Worker_1 = require("./Worker");
var name = "Loc1";
var age = 18;
var gender = "Male";
var address;
address = "HN";
var rank = 7;
var worker1 = new Worker_1.Worker(name, age, gender, address, rank);
console.log("Thông tin worker1");
worker1.printInOfWorker();
console.log("Thông tin worker1 sau khi khai báo var lại 1 lần nữa");
var worker1 = new Worker_1.Worker("Worker2", 29, "Female", "DN", 60);
worker1.printInOfWorker();
// ---------
var worker3 = new Worker_1.Worker("Worker3", 9, "Male", "SG", 5);
console.log("In thông tin thông qua khai báo thêm 1 hàm");
function printworker_array() {
    var workerArray;
    workerArray = [worker1, worker3];
    workerArray.forEach(function (element) {
        element.printInOfWorker();
    });
}
printworker_array();

import { Worker } from "./Worker";

var name: string = "Loc1";
var age: number = 18;
var gender = "Male";
var address;
address = "HN";
var rank: number = 7;

var worker1 = new Worker(name, age, gender, address, rank);
console.log("Thông tin worker1");
worker1.printInOfWorker();
console.log("Thông tin worker1 sau khi khai báo var lại 1 lần nữa");
var worker1 = new Worker("Worker2", 29, "Female", "DN", 60);
worker1.printInOfWorker();
// ---------
var worker3 = new Worker("Worker3", 9, "Male", "SG", 5);
console.log("In thông tin thông qua khai báo thêm 1 hàm");
function printworker_array(): void {
    var workerArray: Worker[];
    workerArray = [worker1, worker3];
    workerArray.forEach((element) => {
        element.printInOfWorker();
    });

    worker3 = new Worker("Worker3", 9, "Female_CHANGE", "SG_CHANGE", 5);
}

printworker_array();

worker3.printInOfStaff();
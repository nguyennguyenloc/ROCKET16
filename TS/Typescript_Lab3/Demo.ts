import { Employees } from "./Employee";
import { Engineer } from "./Engineer";
import { Worker } from "./Worker";

let worker1 = new Worker("Worker1", 19, "Male", "HN", 10);
let worker2 = new Worker("Worker2", 29, "Female", "DN", 60);
let worker3 = new Worker("Worker3", 9, "Male", "SG", 5);

console.log("In thông tin worker");
worker1.printInOfWorker();
worker2.printInOfWorker();
worker3.printInOfWorker();
// --------
let workerArray: Worker[];
workerArray = [worker1, worker2, worker3];
console.log("=== Sử dụng foreach để in thông tin worker:");
workerArray.forEach((element) => {
    element.printInOfWorker();
})
// -------------

let engineer1= new Engineer("Engineer1", 20, "Male", "HN", "DEV");
let engineer2= new Engineer("Engineer2", 10, "Male", "HN", "DEV");
let engineer3= new Engineer("Engineer3", 26, "Female", "HN", "DEV");
let engineerSet = new Set();
engineerSet.add(engineer1);
engineerSet.add(engineer2);
engineerSet.add(engineer3);
console.log("===Demo Set Engineer===");
engineerSet.forEach((element) => {
    console.log(element);
});

// ----------
let employees1 = new Employees("Employees1", 20, "Male", "HN", "Task1");
let employees2 = new Employees("Employees2", 28, "Female", "SG", "Task2");
let employees3 = new Employees("Employees3", 35, "Male", "DN", "Task3");
let employeesArray: Employees[];
employeesArray = [employees1, employees2, employees3];
console.log("===Demo for of Employees===");
for (const element of employeesArray) {
    element.printInForEmployees();
}
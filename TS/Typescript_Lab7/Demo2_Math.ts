import { Worker } from "./Worker";
import { Employee } from "./Employee";
import { Staff } from "./Staff";
import { Engineer } from "./Engineer";
 
// Tạo ra các đối tượng
let worker1 = new Worker("Worker1", 20, "Male", "HN", 10);
let worker2 = new Worker("Worker2", 22, "FeMale", "NĐ", 7);
let worker3 = new Worker("Worker3", 24, "Male", "HN", 8);
 
let Engineer1 = new Engineer("Engineer1", 20, "Male", "HN", "DEV");
let Engineer2 = new Engineer("Engineer2", 22, "FeMale", "NĐ", "TEST");
let Engineer3 = new Engineer("Engineer3", 24, "Male", "HN", "DEV");
 
let Employee1 = new Employee("Employee1", 20, "Male", "HN", "Task1"); // Tạo mới 1 đối tượng Worker.
let Employee2 = new Employee("Employee2", 22, "FeMale", "NĐ", "Task2");
let Employee3 = new Employee("Employee3", 24, "Male", "HN", "Task3");
 
let staffArray: Staff[];
staffArray = [ worker1, worker2, worker3, Engineer1, Engineer2, Engineer3, Employee1, Employee2, Employee3];

//Cách 1: cách gọi hàm bình thường
console.log("===Demo cách gọi hàm bình thường====");
function printWorkerInfo(staffArray: Staff[]){
    staffArray.forEach((element) => {
        if(element instanceof Worker){
            element.printInforWorker();
        }
    });
}

function printEmployeeInfo(staffArray: Staff[]){
    staffArray.forEach((element) => {
        if(element instanceof Employee){
            element.printInforEmployee();
      }
    });
}

printWorkerInfo(staffArray);
printEmployeeInfo(staffArray);

//Cách 2: sử dụng HOF, tham số đầu vào là 1 hàm, đầu ra trả ra 1 hàm
console.log("=====Demo HOF cách 2: ======");
function printStaff(staffArray: Staff[], function_printf){
    return function_printf(staffArray);
}

console.log("===Sử dụng HOF để in thông tin===");
printStaff(staffArray, printWorkerInfo);
printStaff(staffArray, printEmployeeInfo);

//Cách 3: Hàm giá trị truyền vào là 1 object
console.log("======In theo cách 3======");
function printStaffArray(staffArray: Staff[], params){
    staffArray.forEach((element) => {
        if (element instanceof params){
            console.log("Thông tin: ", element);
        }
    });
}
printStaffArray(staffArray, Worker);
printStaffArray(staffArray, Employee);

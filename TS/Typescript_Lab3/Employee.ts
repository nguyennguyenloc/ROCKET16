import { Staff } from "./Staff";

class Employees extends Staff{
    private task: string;
    constructor(name: string, age: number, gender: string, address:string, task: string){
        super(name, age, gender, address);
        this.task = task;
    }

    public printInForEmployees(){
        console.log("Thông tin Employees");
        super.printInOfStaff();
        console.log("Task " + this.task);
    }
}

export {Employees};
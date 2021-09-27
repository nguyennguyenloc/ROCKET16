import { Staff } from "./Staff";
 
class Employee extends Staff {
  private task: string;
  constructor(
    name: string,
    age: number,
    gender: string,
    address,
    task: string
  ) {
    super(name, age, gender, address);
    this.task = task;
  }
  public printInforEmployee() {
    console.log("Thông tin Engineer");
    super.printInforStaff();
    console.log("task: " + this.task);
  }
}
 
export { Employee };

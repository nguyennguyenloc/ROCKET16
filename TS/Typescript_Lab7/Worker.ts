import { Staff } from "./Staff";
 
class Worker extends Staff {
  private rank: number;
  constructor(
    name: string,
    age: number,
    gender: string,
    address: string,
    rank: number
  ) {
    super(name, age, gender, address);
    this.rank = rank;
  }
  public printInforWorker() {
    console.log("Thông tin worker");
    super.printInforStaff();
    console.log("Rank: ", this.rank);
  }
}
export { Worker };
 

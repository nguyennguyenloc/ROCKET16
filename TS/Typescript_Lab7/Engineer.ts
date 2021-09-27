import { Staff } from "./Staff";
 
class Engineer extends Staff {
  private specialized: string;
  constructor(name: string, age: number, gender: string, address: string, specialized: string) {
    super(name, age, gender, address);
    this.specialized = specialized;
  }
  public printInforEngineer() {
    console.log("Thông tin Engineer");
    super.printInforStaff();
    console.log("Sspecialized: " + this.specialized);
  }
}
export { Engineer };

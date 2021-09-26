import { Staff } from "./Staff";

class Worker extends Staff{
    private rank: number;
    constructor(name: string, age: number, gender: string, address: string, rank: number){
        super(name, age, gender, address);
        this.rank = rank;
    }

    public printInOfWorker(){
        console.log("Thông tin Worker");
        super.printInOfStaff();
        console.log("Rank: " + this.rank);
    }

}

export {Worker};
class Staff{
    private name: string;
    private age: number;
    private gender: string;
    private address: string;

    constructor(name: string, age: number, gender: string, address: string){
        this.name = name;
        this.address = address;
        this.age = age;
        this.gender = gender;
    }

    public setname(name: string){
        this.name = name;
    }

    public getname(): string{
        return this.name;
    }

    public setgender(gender: string){
        this.gender = gender;
    }

    public getgender(): string{
        return this.gender;
    }

    public setage(age: number){
        this.age = age;
    }

    public getage(): number{
        return this.age;
    }

    public setaddress(address: string){
        this.address = address;
    }

    public getaddress(): string{
        return this.address;
    }

    public printInOfStaff(){
        console.log("Name: "+ this.name + " Age: " + this.age + " Gender: " + this.gender + " Address: " + this.address)
    }
}

export {Staff};
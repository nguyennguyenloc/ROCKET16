class Staff {
    private name: string;
    private age: number;
    private gender: string;
    private address: string;
   
    constructor(name: string, age: number, gender: string, address: string) {
      this.name = name;
      this.age = age;
      this.gender = gender;
      this.address = address;
    }
    // Nhóm hàm getter và Setter
    public setname(v: string) {
      this.name = v;
    }
    public getname(): string {
      return this.name;
    }
   
    public setage(v: number) {
      this.age = v;
    }
    public getage(): number {
      return this.age;
    }
   
    public setgender(v: string) {
      this.gender = v;
    }
    public getgender(): string {
      return this.gender;
    }
   
    public setaddress(v: string) {
      this.address = v;
    }
    public getaddress(): string {
      return this.address;
    }
    public printInforStaff() {
      console.log(
        "Name: " +
          this.name +
          " Age: " +
          this.age +
          " Gender: " +
          this.gender +
          " Address: " +
          this.address
      );
    }
}

export { Staff };
  
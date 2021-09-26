class Department{
    private id: number;
    private name: string;
    constructor(id:number, name:string){
        this.id=id;
        this.name=name;
    }
    public getid(): number{
        return this.id;
    }

    public setid(id: number): void{
        this.id = id;
    }

    public getname(): string{
        return this.name;
    }

    public setname(name: string): void{
        this.name = name;
    }
}

function printInForDepartment(department: Department): void{
    console.log("ID "+ department.getid()+ "name "+ department.getname());
}

export {Department, printInForDepartment};
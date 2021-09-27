

class Account{
    private email: string;
    private username: string;
    private fullname: string;
    // Hàm tạo full tham số cho Account
    constructor(email: string, username: string, fullname: string) {
        this.email = email;
        this.username = username;
        this.fullname = fullname;
    }
    // Nhóm hàm getter và Setter
    public setemail(v: string) {
        this.email = v;
    }
    public getemail(): string {
        return this.email;
    }
 
    public setusername(v: string) {
        this.username = v;
    }
    public getusername(): string {
        return this.username;
    }
 
    public setfullname(v: string) {
        this.fullname = v;
    }
    public getfullname(): string {
        return this.fullname;
    }
}
// Hàm in thông tin Account, viết bên ngoài class
//Cách 1
function printInforAccount(account: Account): void {
    console.log("Email: " + account.getemail() + " UserName: " + account.getusername() + " Fullname: " + account.getfullname());
}

//Cách 2
let print_Account = function printInforAccount(account: Account): void {
    console.log("Email: " + account.getemail() + " UserName: " + account.getusername() + " Fullname: " + account.getfullname());
}

//Cách 3
let print_Account_Arrow_Function = (account: Account) => {
    console.log("Email: " + account.getemail() + " UserName: " + account.getusername() + " Fullname: " + account.getfullname());
}

//Cách 4
let print_Account_Arrow_Function1 = account => {
    console.log("Email: " + account.getemail() + " UserName: " + account.getusername() + " Fullname: " + account.getfullname());
}
// Export Account và hàm printInforAccount sang class khác để sử dụng.
export { Account, printInforAccount, print_Account, print_Account_Arrow_Function, print_Account_Arrow_Function1 };
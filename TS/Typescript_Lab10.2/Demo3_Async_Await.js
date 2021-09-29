var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function callAPICreateAccount() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("===Step 3===");
        return "Create Account Successfully!";
    });
}
function callAPICreateDepartment() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("===Step 1===");
        return "Create Department Successfully";
    });
}
function callAPICreatePosition() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("===Step 2===");
        return "Create Position Successfully";
    });
}
function Create_New_Department_Position_Account() {
    return __awaiter(this, void 0, void 0, function* () {
        let resultCreateDepartment = yield callAPICreateDepartment();
        console.log(resultCreateDepartment);
        let resultCreatePosition = yield callAPICreatePosition();
        console.log(resultCreatePosition);
        let resultCreateAccount = yield callAPICreateAccount();
        console.log(resultCreateAccount);
    });
}
Create_New_Department_Position_Account();

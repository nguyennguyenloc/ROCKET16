var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function callAPI() {
    return __awaiter(this, void 0, void 0, function* () {
        // setTimeout(() => {
        //     console.log("Thực hiện đoạn lệnh gọi API từ server ...");
        //     return "Call API Successfully!, next step";
        // }, 10);
        console.log("Thực hiện đoạn lệnh gọi API từ server ...");
        return "Call API Successfully!, next step";
    });
}
function callAPICreateUser() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Step1");
        let result = yield callAPI();
        console.log("Step 2 result kết quả là: ", result);
        console.log("Step 3");
    });
}
callAPICreateUser();

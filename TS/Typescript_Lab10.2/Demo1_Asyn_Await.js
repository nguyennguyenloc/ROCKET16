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
        console.log("Thực hiện đoạn lệnh gọi API từ server ...");
        return "Call API Successfully! Next step";
    });
}
function callAPICreateUser() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Step 1: thực hiện đoạn lênh trước khi gọi API!");
        let result = yield callAPI();
        console.log("Step 2: Thực hiện call API và trả về kết quả: ", result);
        console.log("Step 3: Thực hiện đoạn lệnh sau khi gọi API");
    });
}
callAPICreateUser();

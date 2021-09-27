// Thực hiện demo tạo mới 1 Account trong db TestingSystem
// Step1: Tạo mới 1 Department
// Step2: Tạo mới 1 Position
// Step3: Tạo mới 1 Account
function callAPICreateAccount() {
    // Viết promise giống như cách viết ở Demo1_Promise_1
    let promise = new Promise(function (resolve, reject) {
        console.log("------ Step3: call API Create Account!------");
        resolve("Create Account successfully!");
        // reject("Account Name is Exists!");
    });
    //   return new Promise(function (resolve, reject) {
    //     console.log("call API Create User!");
    //     resolve("Create User successfully!");
    //   });
    return promise;
}
// Viết theo cách mới, return ra luôn 1 promise mới.
function callAPICreateDepartment() {
    return new Promise(function (resolve, reject) {
        console.log("------ Step1: call API Create Department!------");
        resolve("Create Department successfully!");
        // reject("Department Name is Exists!");
    });
}
function callAPICreatePosition() {
    return new Promise(function (resolve, reject) {
        console.log("------ Step2: call API Create Position!------");
        resolve("Create Position successfully!");
        // reject("Position Name is Exists!");
    });
}
// Thực hiện tạo department, position, account theo Promise
// Trong trường hợp xảy ra lỗi ở bất cứ phần nào sẽ lập tức dừng thực hiện lệnh ở những phần tiếp theo
callAPICreateDepartment()
    .then(function (message) {
    return callAPICreatePosition();
})
    .then(function (message) {
    return callAPICreateAccount();
})
    .then(function (message) {
    console.log(message);
})
    .catch(function (error) {
    console.log(error);
});

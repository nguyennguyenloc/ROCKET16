let promise = new Promise(function (resolve, reject) {
    // Call API
    // resolve("Call API Success");
    reject("Error when load API");
});

promise.then(
    function(Success){
        console.log("Email chưa tồn tại, làm tiếp đi");
        console.log(Success);
    },
    function(error){
        console.log("Email đã tồn tại, làm lại đi");
        console.log(error);
    }
);
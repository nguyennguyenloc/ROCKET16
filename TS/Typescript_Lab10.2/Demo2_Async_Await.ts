async function callAPI(){
    // setTimeout(() => {
    //     console.log("Thực hiện đoạn lệnh gọi API từ server ...");
    //     return "Call API Successfully!, next step";
    // }, 10);
    console.log("Thực hiện đoạn lệnh gọi API từ server ...");
    return "Call API Successfully!, next step";
}

async function callAPICreateUser(){
    console.log("Step1");
    let result = await callAPI();
    console.log("Step 2 result kết quả là: ", result);
    console.log("Step 3");
}

callAPICreateUser();
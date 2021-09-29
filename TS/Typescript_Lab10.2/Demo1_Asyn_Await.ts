async function callAPI(){
    console.log("Thực hiện đoạn lệnh gọi API từ server ...");
    return "Call API Successfully! Next step";
}

async function callAPICreateUser(){
    console.log("Step 1: thực hiện đoạn lênh trước khi gọi API!");

    let result = await callAPI();
    console.log("Step 2: Thực hiện call API và trả về kết quả: ", result);

    console.log("Step 3: Thực hiện đoạn lệnh sau khi gọi API");
}

callAPICreateUser();
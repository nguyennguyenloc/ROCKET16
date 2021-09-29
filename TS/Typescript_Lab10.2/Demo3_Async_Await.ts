async function callAPICreateAccount(){
    console.log("===Step 3===");
    return "Create Account Successfully!";
}

async function callAPICreateDepartment(){
    console.log("===Step 1===");
    return "Create Department Successfully";
}

async function callAPICreatePosition(){
    console.log("===Step 2===");
    return "Create Position Successfully";
}

async function Create_New_Department_Position_Account(){
    let resultCreateDepartment = await callAPICreateDepartment();
    console.log(resultCreateDepartment);

    let resultCreatePosition = await callAPICreatePosition();
    console.log(resultCreatePosition);

    let resultCreateAccount = await callAPICreateAccount();
    console.log(resultCreateAccount);
}

Create_New_Department_Position_Account();

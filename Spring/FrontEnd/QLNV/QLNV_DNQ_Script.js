var listAccount = [];
var listDepartment = [];
var listPosition = [];

//page
var currentPage = 1;
var size = 5;
var totalPage;

//Sort
var sortField = "id";
var isAsc = true;

$(function(){
    getListDepartment();
    getListPosition();
    getListAccount();

    //hiden
    $("#form1").hide();

    $("#reset_btn").click(function(){
        $("ID_ID").val("");
        $("Email_ID"),val("");
        $("Username_ID").val("");
        $("Fullname_ID").val("");
        $("Department_ID").val("");
        $("Position_ID").val("");
        $("Cretate_Date_ID").val("");
    });

    $("#ID_ID").attr('disabled','disabled');
    $("#Cretate_Date_ID").attr('disabled','disabled');
    
    $("#Main_Form_ID").submit(function(){
        // var v_ID_ID = $("#ID_ID").val();
        var v_Email_ID = $("#Email_ID").val();
        var v_Username_ID = $("#Username_ID").val();
        var v_Fullname_ID = $("#Fullname_ID").val();
        var v_Department_Name =$("#Department_ID").val();
        var v_Position_Name = $("#Position_ID").val();
        // var v_Cretate_Date_ID = $("#Cretate_Date_ID").val();

        if (!v_Email_ID || v_Email_ID.length < 6 || v_Email_ID.length > 50) {
            // show error message
            alert("Email name must be from 6 to 50 characters!");
            return false;
        }
        if (!v_Username_ID || v_Username_ID.length < 6 || v_Username_ID.length > 50) {
            // show error message
            alert("Username name must be from 6 to 50 characters!");
            return false;
        }
        if (!v_Fullname_ID || v_Fullname_ID.length < 6 || v_Fullname_ID.length > 50) {
            // show error message
            alert("Fullname name must be from 6 to 50 characters!");
            return false;
        }
        if (!v_Department_Name || v_Department_Name == '--Select a Department--') {
            // show error message
            alert("Pls choose Department!");
            return false;
        }
        if (!v_Position_Name || v_Position_Name == '--Select a Position--') {
            // show error message
            alert("Pls choose Possition!");
            return false;
        }

        //chuy???n ?????i v_department_name v??? d???ng department_id
        for (let index = 0; index < listDepartment.length; index++) {
            if(listDepartment[index].name == v_Department_Name){
                var depID = listDepartment[index].id;
            }          
        }

        for (let index = 0; index < listPosition.length; index++) {
            if(listPosition[index].name == v_Position_Name){
                var posID = listPosition[index].id;
                // console.log("t??n: ", v_Position_Name);
            }            
        }

        //validate 

        var account = {
            // ID: v_ID_ID,
            email: v_Email_ID,
            username: v_Username_ID,
            fullname: v_Fullname_ID,
            departmentId: depID,
            positionId: posID,
            // CreateDate: v_Cretate_Date_ID,
        };
        console.log("new account", account);
        //h??m ?????y d??? li???u t???o account
        // $.post("http://localhost:8080/api/v1/accounts", account, function(data, status){
        //     if(status == "error"){
        //         alert("Error When loading data");
        //         return;
        //     }
        //     //success
        //     getListAccount();
        // });
        // listAccount.push(account);
        // showAccount();   
        // pagingTable(data.totalPages);

        //check email c?? t???n t???i hay kh??ng
        $.ajax({
            url: "http://localhost:8080/api/v1/accounts/EmailExists/" + v_Email_ID,
            type: 'GET',
            contentType: "application/json",
            dataType: 'json', // datatype return

            // dataType: 'json', // datatype return
            beforeSend: function(xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa(localStorage.getItem("USERNAME") + ":" + localStorage.getItem("PASSWORD")));
            },
            success: function(data, textStatus, xhr) {
                if(data){
                    alert("Email ???? t???n t???i tr??n h??? th???ng");
                    return false;
                }else{
                    $.ajax({
                        url: "http://localhost:8080/api/v1/accounts/UsernameExists/" + v_Username_ID,
                        type: 'GET',
                        contentType: "application/json",
                        dataType: 'json', // datatype return
                        // dataType: 'json', // datatype return
                        beforeSend: function(xhr) {
                            xhr.setRequestHeader("Authorization", "Basic " + btoa(localStorage.getItem("USERNAME") + ":" + localStorage.getItem("PASSWORD")));
                        },
                        success: function(data, textStatus, xhr) {
                            if(data){
                                alert("Username ???? t???n t???i tr??n h??? th???ng");
                                return false;
                            } else {
                                                        //call api
                                $.ajax({
                                    url: "http://localhost:8080/api/v1/accounts",
                                    type: "POST",
                                    data: JSON.stringify(account), // body
                                    contentType: "application/json", // type of body (json, xml, text)
                                    // dataType: 'json', // datatype return
                                    beforeSend: function(xhr) {
                                        xhr.setRequestHeader("Authorization", "Basic " + btoa(localStorage.getItem("USERNAME") + ":" + localStorage.getItem("PASSWORD")));
                                    },
                                    success: function(data, textStatus, xhr) {
                                        currentPage = totalPages;
                                        getListAccount();
                                        listAccount.push(account);
                                    },
                                    error(jqXHR, textStatus, errorThrown) {
                                        alert("Error when loading data");
                                        console.log(jqXHR);
                                        console.log(textStatus);
                                        console.log(errorThrown);
                                    },
                                    
                                });
                            }
                        },
                        error(jqXHR, textStatus, errorThrown) {
                            alert("Error when loading data");
                            console.log(jqXHR);
                            console.log(textStatus);
                            console.log(errorThrown);
                        },
                        
                    });
                }
            },
            error(jqXHR, textStatus, errorThrown) {
                alert("Error when loading data");
                console.log(jqXHR);
                console.log(textStatus);
                console.log(errorThrown);
            },           
        });

        

        return false;
    });
})
//h??m l???y d??? li???u department
// function getListDepartment(){
//     $.get("http://localhost:8080/api/v1/departments", function(data,status){
//         console.log("Data nh???n ???????c: ", data);
//         console.log("Status: ", status);
//         if(status=="error"){
//             alert("Error when loading data");
//             return;
//         }
//         data.forEach(item => {
//             var department = {
//                 'id': item.id,
//                 'name': item.name,
//             };
//             listDepartment.push(department);
//         });
//         //show d??? li???u
//         for (let index = 0; index < listDepartment.length; index++) {
//             $("#Department_ID").append(`<option>${listDepartment[index].name}</option>`)            
//         }
//     })
// }
function getListDepartment(){
    $.ajax({
        url: "http://localhost:8080/api/v1/departments",
        type: 'GET',
        contentType: "application/json",
        dataType: 'json', // datatype return
        beforeSend: function(xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa(localStorage.getItem("USERNAME") + ":" + localStorage.getItem("PASSWORD")));
        },
        success: function(data, textStatus, xhr) {
            // ??o???n l???nh n??y copy t??? ph???n g???i Ajax theo c??ch kh??ng x??c th???c commemt b??n tr??n xu???ng.
            data.forEach(item => {
                var department = {
                    'id': item.id,
                    'name': item.name,
                };
                listDepartment.push(department);
            });
            for (let index = 0; index < listDepartment.length; index++) {
                $('#Department_ID').append(`
            <option>${listDepartment[index].name}</option>
            `)

            }
        },
        error(jqXHR, textStatus, errorThrown) {
            console.log("ooo");
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
        }
    });
}

//h??m l???y d??? li???u Position
// function getListPosition(){
//     $.get("http://localhost:8080/api/v1/possitions",function(data,status){
//         if(status=="error"){
//             alert("Error When loading data");
//             return;
//         }
//         data.forEach((item) => {
//             var position = {
//                 id: item.id,
//                 name: item.name,
//             };
//             listPosition.push(position);
//         });
//         console.log("list position", listPosition);
//         //show d??? li???u
//         for (let index = 0; index < listPosition.length; index++) {
//             $("#Position_ID").append(`<option>${listPosition[index].name}</option>`)            
//         }
//     })
// }

function getListPosition(){
    $.ajax({
        url: "http://localhost:8080/api/v1/possitions",
        type: 'GET',
        contentType: "application/json",
        dataType: 'json', // datatype return
        beforeSend: function(xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa(localStorage.getItem("USERNAME") + ":" + localStorage.getItem("PASSWORD")));
        },
        success: function(data, textStatus, xhr) {
            // ??o???n l???nh n??y copy t??? ph???n g???i Ajax theo c??ch kh??ng xac th???c commemt b??n tr??n xu???ng.
            data.forEach(function(item) {
                var possition = {
                    'id': item.id,
                    'name': item.name,
                }
                listPosition.push(possition)
            });
            for (let index = 0; index < listPosition.length; index++) {
                $('#Position_ID').append(`
            <option>${listPosition[index].name}</option>
              `)
 
            }
        },
        error(jqXHR, textStatus, errorThrown) {
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
        }
    });
}
//h??m l???y d??? li???u Account
function getListAccount(){
    var url = "http://localhost:8080/api/v1/accounts";
    url += "?page=" + currentPage + "&size=" + size;

    url += "&sort=" + sortField + "," + (isAsc ? "asc" : "desc");

    var search = $('#input-search-department').val();
    // console.log("search", search);
    if(search){
        url += "&search=" + search;
    }
    // console.log("url", url);
    // $.get(url, function(data,status){
    //     console.log("Data Account:", data);    
    //     listAccount = [];
    //     if(status == "error"){
    //         alert("Error when loading data Account");
    //         return;
    //     }
    //     data.content.forEach((item) => {
    //             var account = {
    //                 'AccountID': item.id,
    //                 'Email': item.email,
    //                 'Username': item.username,
    //                 'Fullname': item.fullname,
    //                 'Department': item.department,
    //                 'Position': item.position,
    //                 'CreateDate': item.createDate,
    //             };
    //         listAccount.push(account);
    //     });
    //     showAccount();
    //     totalPage = data.totalPages;
    //     pagingTable(totalPage);
    // })

    $.ajax({
        url: url,
        type: 'GET',
        contentType: "application/json",
        dataType: 'json', // datatype return
        beforeSend: function(xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa(localStorage.getItem("USERNAME") + ":" + localStorage.getItem("PASSWORD")));
        },
        success: function(data, textStatus, xhr) {
            // reset list employees
            listAccount = [];
            parseData(data);
            showAccount();
            totalPages = data.totalPages;
            // Sau khi hi???n th??? d??? li???u s??? Show th??m c??c n??t ????? th???c hi???n ph??n trang, t??nh c??c n??t n??y d???a tr??n API totalPages ???????c tr??? ra
            pagingTable(totalPages);
        },
        error(jqXHR, textStatus, errorThrown) {
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
        }
    });

}
//Vi???t h??m showAccount()
function showAccount(){
    $("#Result_TB").empty();
    for (var index = 0; index < listAccount.length ;index++ ) {
    $("#Result_TB").append(`
    <tr>
    <th>${listAccount[index].AccountID}</th>
    <th>${listAccount[index].Email}</th>
    <th>${listAccount[index].Username}</th>
    <th>${listAccount[index].Fullname}</th>
    <th>${listAccount[index].Department}</th>
    <th>${listAccount[index].Position}</th>
    <th>${listAccount[index].CreateDate}</th>
    <th><button class="btn btn-warning" onclick="editAccount(${index})">Edit</button></th>
    <th><button class="btn btn-warning" onclick="deleteAccount(${index})">Delete</button></th>
    </tr>
    `);      
    }
}

//h??m edit c??c Account
function editAccount(index){
    $("#ID_ID").val(listAccount[index].AccountID);
    $("#Email_ID").val(listAccount[index].Email);
    $("#Username_ID").val(listAccount[index].Username);
    $("#Fullname_ID").val(listAccount[index].Fullname);
    $("#Department_ID").val(listAccount[index].Department);
    $("#Position_ID").val(listAccount[index].Position);
    $("#Cretate_Date_ID").val(listAccount[index].CreateDate);
 
    var v_ID_ID = listAccount[index].AccountID;
    $("#update_btn").click(function(){
        //  var v_ID_ID = $("#ID_ID").val();
        //  var v_Email_ID = $("#Email_ID").val();
        //  var v_Username_ID = $("#Username_ID").val();
         var v_Fullname_ID = $("#Fullname_ID").val();
         var v_Department_Name =$("#Department_ID").val();
         var v_Position_Name = $("#Position_ID").val();
         // var v_Cretate_Date_ID = $("#Cretate_Date_ID").val();

        //chuy???n ?????i v_department_name v??? d???ng department_id
        for (let index = 0; index < listDepartment.length; index++) {
            if(listDepartment[index].name == v_Department_Name){
                var depID = listDepartment[index].id;
            }          
        }

        for (let index = 0; index < listPosition.length; index++) {
            if(listPosition[index].name == v_Position_Name){
                var posID = listPosition[index].id;
            }            
        }
        //  listAccount[index].AccountID = v_Email_ID;
        //  listAccount[index].Email = v_Email_ID;
        //  listAccount[index].Username = v_Username_ID;
        //  listAccount[index].Fullname = v_Fullname_ID;
        //  listAccount[index].Department = v_Department_Name;
        //  listAccount[index].Position = v_Position_Name;
        //  listAccount[index].CreateDate = v_Cretate_Date_ID;
        
        //t???o account update ?????y v???
        var account = {
            fullname: v_Fullname_ID,
            departmentId: depID,
            positionId: posID,
        };

        // $.ajax({
        //     url:"http://localhost:8080/api/v1/accounts/" + v_ID_ID,
        //     type: "PUT",
        //     data: account,
        //     success: function(result){
        //         //error
        //         if(result == undefined || result == null){
        //             alert("Error When Loading Data");
        //             return;
        //         }
        //         getListAccount();
        //     }
        // });
        
        // showAccount();
        $.ajax({
            url: 'http://localhost:8080/api/v1/accounts/' + v_ID_ID,
            type: 'PUT',
            data: JSON.stringify(account), // body
            contentType: "application/json", // type of body (json, xml, text)
            beforeSend: function(xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa(localStorage.getItem("USERNAME") + ":" + localStorage.getItem("PASSWORD")));
            },
            // dataType: 'json', // datatype return
            success: function(data, textStatus, xhr) {
                getListAccount();
            },
            error(jqXHR, textStatus, errorThrown) {
                alert("Error when loading data");
                console.log(jqXHR);
                console.log(textStatus);
                console.log(errorThrown);
            }
        });

    })
}

function deleteAccount(index){
    var v_del_ID = listAccount[index].AccountID;
    var confirm_del = confirm("B???n c?? ch???c ch???n mu???n xo?? Account n??y kh??ng?");
    if(confirm_del){
        // $.ajax({
        //     url: "http://localhost:8080/api/v1/accounts/" + v_del_ID,
        //     type: "DELETE",
        //     success: function(result){
        //         //error
        //         if(result == undefined || result == null){
        //             alert("Error when loading data");
        //             return;
        //         }
        //         getListAccount();
        //     }
        // })

        $.ajax({
            url: 'http://localhost:8080/api/v1/accounts/' + v_del_ID,
            type: 'DELETE',
            beforeSend: function(xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa(localStorage.getItem("USERNAME") + ":" + localStorage.getItem("PASSWORD")));
            },
            success: function(result) {
                // error
                if (result == undefined || result == null) {
                    alert("Error when loading data");
                    return;
                }
 
                // success
                resetPaging();
                getListAccount();
            }
        });

    }else{
        return;
    }
}

function resetPaging() {
    currentPage = 1;
    size = 5;
}

//nh??m h??m x??? l?? hi???n th??? d??? li???u
function pagingTable(pageAmount) {
    var pagingStr = "";
    // H??m Gen n??t Previous
    if (pageAmount > 1 && currentPage > 1) {
        pagingStr +=
            '<li class="page-item">' +
            '<a class="page-link" onClick="prevPaging()">Previous</a>' +
            '</li>';
    }
    // H??m Gen n??t s??? trang 1,2,3 ...
    for (i = 0; i < pageAmount; i++) {
        pagingStr +=
            '<li class="page-item ' + (currentPage == i + 1 ? "active" : "") + '">' +
            '<a class="page-link" onClick="changePage(' + (i + 1) + ')">' + (i + 1) + '</a>' +
            '</li>';
    }
    // H??m Gen n??t Next
    if (pageAmount > 1 && currentPage < pageAmount) {
        pagingStr +=
            '<li class="page-item">' +
            '<a class="page-link" onClick="nextPaging()">Next</a>' +
            '</li>';
    }
 
    $('#pagination').empty();
    $('#pagination').append(pagingStr);
}

function changePage(page){
    if(page == currentPage){
        return;
    }
    currentPage = page;
    getListAccount();
}

// H??m x??? l?? khi nh???n n??t Previous
function prevPaging() {
    changePage(currentPage - 1);
}
// H??m x??? l?? khi nh???n n??t next
function nextPaging() {
    changePage(currentPage + 1);
}

function changeSort(field){
    if(field == sortField){
        isAsc = !isAsc;
    }else{
        sortField = field;
        isAsc = true;
    }
    getListAccount();
}

//X??? l?? s??? ki???n khi nh???t n??t Search
function handleSearch(){
   getListAccount();
}
function parseData(data) {
    // employees = data;
    // c???n s??? d???ng th??m thu???c t??nh data.content ????? l???y ra ???????c list account theo API t??? Backend
    data.content.forEach(function(item) {
        var account = {
            'AccountID': item.id,
            'Email': item.email,
            'Username': item.username,
            'Fullname': item.fullname,
            'Department': item.department,
            'Position': item.position,
            'CreateDate': item.createDate,
        }
        listAccount.push(account)
    });
}

function loginSuccess(){
   // Get username & password
   var username = $('#Email_Login_id').val();
   var password = $('#Password_Login_id').val();

   // Call API
   $.ajax({
       url: 'http://localhost:8080/api/v1/login',
       type: 'GET',
       contentType: "application/json",
       dataType: 'json', // datatype return
       beforeSend: function(xhr) {
           xhr.setRequestHeader("Authorization", "Basic " + btoa(username + ":" + password));
       },
       success: function(data, textStatus, xhr) {
            if (data.status == "NOT_ACTIVE") {
                alert("B???n h??y Active t??i kho???n tr?????c khi ????ng nh???p h??? th???ng.");
                return false;
            }
    
           // save data to storage
           // https://www.w3schools.com/html/html5_webstorage.asp
           localStorage.setItem("ID", data.id);
           localStorage.setItem("FULL_NAME", data.fullName);
           localStorage.setItem("USERNAME", username);
           localStorage.setItem("PASSWORD", password);

           // redirect to home page
           // https://www.w3schools.com/howto/howto_js_redirect_webpage.asp
           window.location.replace("QLNV_DNQ.html");
       },
       error(jqXHR, textStatus, errorThrown) {
           if (jqXHR.status == 401) {
               alert("Ki???m tra l???i th??ng tin!!")
           } else {
               console.log(jqXHR);
               console.log(textStatus);
               console.log(errorThrown);
           }
       }
   });
}

//register
function returnPageRegister() {
    window.location.replace("RegisterPage.html");
}

//logout
function logout(){
    localStorage.removeItem("ID");
    localStorage.removeItem("USERNAME");
    localStorage.removeItem("FULL_NAME");
    localStorage.removeItem("PASSWORD");

    window.location.replace("Login.html");
}
  
// K??ch ho???t qua email
// H??m x??? l?? s??? ki???n khi click v??o n??t Resent Token, ???n hi???n form g???i l???i m?? Token
function ResentEmailActive() {
    $("#form1").toggle();
}
//H??m x??? l?? click v??o n??t Get Token, vi???t h??m ????? g???i l???i Token
function getToken() {
    var email_id_token = $("#email_id_token").val();
    // console.log("Email nh???n ???????c: ", email_id_token);
    // Th???c hi???n check xem ng?????i d??ng ???? nh???p v??o Email hay ch??a.
    if (email_id_token) {
    var base_URL =
        "http://localhost:8080/api/v1/accountsRegister/userRegistrationConfirmRequest/";
    base_URL += "?email=" + email_id_token;
    // Th???c hi???n validate Email, ki???m tra xem email c?? tr??n h??? th???ng hay kh??ng
    $.ajax({
        url:
        "http://localhost:8080/api/v1/accounts/EmailExists/" + email_id_token,
        type: "GET",
        contentType: "application/json",
        dataType: "json", // datatype return
        beforeSend: function (xhr) {
        xhr.setRequestHeader(
            "Authorization",
            "Basic " + btoa("Username1:123456")
        );
        },
        success: function (data, textStatus, xhr) {
        if (data) {
            // TH n??y email ???? c?? tr??n h??? th???ng, s??? th???c hi???n Resent Email token
            $.ajax({
            url: base_URL,
            type: "GET",
            contentType: "application/json",
            dataType: "text", // datatype return
            beforeSend: function (xhr) {
                xhr.setRequestHeader(
                "Authorization",
                "Basic " + btoa("Username1:123456")
                );
            },
            success: function (data, textStatus, xhr) {
                alert(
                "Ch??ng t??i ???? g???i l???i cho b???n email ????? k??ch ho???t, h??y Check l???i."
                );
                $("#form1").hide(); // Th???c hi???n ????ng form g???i email Token
            },
            error(jqXHR, textStatus, errorThrown) {
                console.log(jqXHR);
                console.log(textStatus);
                console.log(errorThrown);
            },
            });
        } else {
            // TH n??y Kh??ng c?? email ng?????i d??ng nh???p tr??n h??? th???ng
            alert("H??y ki???m tra l???i th??ng tin email!!!");
            return false;
        }
        },
        error(jqXHR, textStatus, errorThrown) {
        console.log(jqXHR);
        console.log(textStatus);
        console.log(errorThrown);
        },
    });
    } else {
    alert("H??y nh???p v??o email!!");
    return false;
    }
}
//

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
        //chuyển đổi v_department_name về dạng department_id
        for (let index = 0; index < listDepartment.length; index++) {
            if(listDepartment[index].name == v_Department_Name){
                var depID = listDepartment[index].id;
            }          
        }

        for (let index = 0; index < listPosition.length; index++) {
            if(listPosition[index].name == v_Position_Name){
                var posID = listPosition[index].id;
                // console.log("tên: ", v_Position_Name);
            }            
        }
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
        //hàm đẩy dữ liệu tạo account
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

        return false;
    });
})
//hàm lấy dữ liệu department
// function getListDepartment(){
//     $.get("http://localhost:8080/api/v1/departments", function(data,status){
//         console.log("Data nhận được: ", data);
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
//         //show dữ liệu
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
            // Đoạn lệnh này copy từ phần gọi Ajax theo cách không xác thực commemt bên trên xuống.
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

//hàm lấy dữ liệu Position
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
//         //show dữ liệu
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
            // Đoạn lệnh này copy từ phần gọi Ajax theo cách không xac thực commemt bên trên xuống.
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
//hàm lấy dữ liệu Account
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
            // Sau khi hiển thị dữ liệu sẽ Show thêm các nút để thực hiện phân trang, tính các nút này dựa trên API totalPages được trả ra
            pagingTable(totalPages);
        },
        error(jqXHR, textStatus, errorThrown) {
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
        }
    });

}
//Viết hàm showAccount()
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

//hàm edit các Account
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

        //chuyển đổi v_department_name về dạng department_id
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
        
        //tạo account update đẩy về
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
    var confirm_del = confirm("Bạn có chắc chắn muốn xoá Account này không?");
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

//nhóm hàm xử lý hiển thị dữ liệu
function pagingTable(pageAmount) {
    var pagingStr = "";
    // Hàm Gen nút Previous
    if (pageAmount > 1 && currentPage > 1) {
        pagingStr +=
            '<li class="page-item">' +
            '<a class="page-link" onClick="prevPaging()">Previous</a>' +
            '</li>';
    }
    // Hàm Gen nút số trang 1,2,3 ...
    for (i = 0; i < pageAmount; i++) {
        pagingStr +=
            '<li class="page-item ' + (currentPage == i + 1 ? "active" : "") + '">' +
            '<a class="page-link" onClick="changePage(' + (i + 1) + ')">' + (i + 1) + '</a>' +
            '</li>';
    }
    // Hàm Gen nút Next
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

// Hàm xử lý khi nhấn nút Previous
function prevPaging() {
    changePage(currentPage - 1);
}
// Hàm xử lý khi nhấn nút next
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

//Xử lý sự kiện khi nhất nút Search
function handleSearch(){
   getListAccount();
}
function parseData(data) {
    // employees = data;
    // cần sử dụng thêm thuộc tính data.content để lấy ra được list account theo API từ Backend
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
               alert("Kiểm tra lại thông tin!!")
           } else {
               console.log(jqXHR);
               console.log(textStatus);
               console.log(errorThrown);
           }
       }
   });
 
}
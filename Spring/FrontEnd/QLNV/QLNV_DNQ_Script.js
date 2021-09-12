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
        $.post("http://localhost:8080/api/v1/accounts", account, function(data, status){
            if(status == "error"){
                alert("Error When loading data");
                return;
            }
            //success
            getListAccount();
        });
        listAccount.push(account);
        showAccount();
        return false;
    });
})
//hàm lấy dữ liệu department
function getListDepartment(){
    $.get("http://localhost:8080/api/v1/departments", function(data,status){
        console.log("Data nhận được: ", data);
        console.log("Status: ", status);
        if(status=="error"){
            alert("Error when loading data");
            return;
        }
        data.forEach(item => {
            var department = {
                'id': item.id,
                'name': item.name,
            };
            listDepartment.push(department);
        });
        //show dữ liệu
        for (let index = 0; index < listDepartment.length; index++) {
            $("#Department_ID").append(`<option>${listDepartment[index].name}</option>`)            
        }
    })
}

//hàm lấy dữ liệu Position
function getListPosition(){
    $.get("http://localhost:8080/api/v1/possitions",function(data,status){
        if(status=="error"){
            alert("Error When loading data");
            return;
        }
        data.forEach((item) => {
            var position = {
                id: item.id,
                name: item.name,
            };
            listPosition.push(position);
        });
        console.log("list position", listPosition);
        //show dữ liệu
        for (let index = 0; index < listPosition.length; index++) {
            $("#Position_ID").append(`<option>${listPosition[index].name}</option>`)            
        }
    })
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
    $.get(url, function(data,status){
        console.log("Data Account:", data);    
        listAccount = [];
        if(status == "error"){
            alert("Error when loading data Account");
            return;
        }
        data.content.forEach((item) => {
                var account = {
                    'AccountID': item.id,
                    'Email': item.email,
                    'Username': item.username,
                    'Fullname': item.fullname,
                    'Department': item.department,
                    'Position': item.position,
                    'CreateDate': item.createDate,
                };
            listAccount.push(account);
        });
        showAccount();
        totalPage = data.totalPages;
        pagingTable(totalPage);
    })
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

        $.ajax({
            url:"http://localhost:8080/api/v1/accounts/" + v_ID_ID,
            type: "PUT",
            data: account,
            success: function(result){
                //error
                if(result == undefined || result == null){
                    alert("Error When Loading Data");
                    return;
                }
                getListAccount();
            }
        });
        
        // showAccount();
    })
}

function deleteAccount(index){
    var v_del_ID = listAccount[index].AccountID;
    var confirm_del = confirm("Bạn có chắc chắn muốn xoá Account này không?");
    if(confirm_del){
        $.ajax({
            url: "http://localhost:8080/api/v1/accounts/" + v_del_ID,
            type: "DELETE",
            success: function(result){
                //error
                if(result == undefined || result == null){
                    alert("Error when loading data");
                    return;
                }
                getListAccount();
            }
        })
    }else{
        return;
    }
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
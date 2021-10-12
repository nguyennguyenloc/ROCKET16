import React, { Component } from "react";
import "./App.css";
import InputForm from "./Components/InputForm";
import ResultForm from "./Components/ResultForm";
import SearchForm from "./Components/SearchForm";
// import Axios from "axios";
import AccountApi from "./Api/AccountApi";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listAccounts: [],
      isShowInputForm: false,
      accountUpdate: null,
      search_key: null,
    };
  }
  // Viết hàm componentDidMount
  componentDidMount() {
    // if (localStorage && localStorage.getItem("listAccounts")) {
    //   let listAccounts = JSON.parse(localStorage.getItem("listAccounts"));
    //   this.setState({
    //     listAccounts: listAccounts,
    //   });
    // }
    //Call API
    //http://localhost:8080/api/v1/accounts
    this.getListAccounts();
  }

  // getListAccounts = () => {
  //   const baseURL = `http://localhost:8080`;
  //   Axios.get(`${baseURL}/api/v1/accounts`)
  //     .then((response) => {
  //       console.log("API nhận được ", response.data);
  //       let listAccounts_API = response.data;
  //       let listAccounts = [];
  //       for (let index = 0; index < listAccounts_API.length; index++) {
  //         let account = {
  //           ID: listAccounts_API[index].id,
  //           Email: listAccounts_API[index].email,
  //           Username: listAccounts_API[index].username,
  //           Fullname: listAccounts_API[index].fullname,
  //           Department: listAccounts_API[index].department,
  //           Position: listAccounts_API[index].position,
  //           Create_Date: listAccounts_API[index].createDate,
  //         };
  //         listAccounts.push(account);
  //       }
  //       this.setState({
  //         listAccounts: listAccounts,
  //       });
  //     })
  //     .catch((errors) => {
  //       console.log("lỗi: " + errors);
  //     });
  // };

  getListAccounts = async () => {
    try {
      let response = await AccountApi.getAll();
      let listAccounts_API = response;
      // console.log("data " + response);
      let listAccounts = [];
      for (let index = 0; index < listAccounts_API.length; index++) {
        let account = {
          ID: listAccounts_API[index].id,
          Email: listAccounts_API[index].email,
          Username: listAccounts_API[index].username,
          Fullname: listAccounts_API[index].fullname,
          Department: listAccounts_API[index].department,
          Position: listAccounts_API[index].position,
          Create_Date: listAccounts_API[index].createDate,
        };
        console.log(account.Create_Date);
        listAccounts.push(account);
        console.log(listAccounts);
      }
      this.setState({
        listAccounts: listAccounts,
      });
    } catch (error) {
      alert("Lỗi khi get list");
    }
  };
  // Viết function
  showInputForm = () => {
    this.setState({
      isShowInputForm: !this.state.isShowInputForm,
    });
  };

  onshowForm = () => {
    this.setState({
      isShowInputForm: !this.state.isShowInputForm,
    });
  };

  // Xử lý cho nút Submit
  // onSaveForm = (data) => {
  //   // console.log("Dữ liệu nhận được từ Input Form ở APP.js: ", data);
  //   // // Bước 1. Set lại State listaccount
  //   // let listAccounts = this.state.listAccounts;
  //   // listAccounts.push(data);
  //   // this.setState({
  //   //   listAccounts: listAccounts,
  //   // });
  //   // // Bước 2: Lưu lại listaccount xuông localStorage
  //   // localStorage.setItem("listAccounts", JSON.stringify(listAccounts));
  //   const account = {
  //     email: data.Email,
  //     username: data.Username,
  //     fullname: data.Fullname,
  //     departmentId: data.Department,
  //     positionId: data.Position,
  //   };
  //   const baseURL = `http://localhost:8080`;
  //   Axios.post(`${baseURL}/api/v1/accounts`, account)
  //     .then((response) => {
  //       console.log(response);
  //       this.getListAccounts();
  //     })
  //     .catch((errors) => console.log(errors));
  // };

  onSaveForm = async (data) => {
    try {
      const account = {
        email: data.Email,
        username: data.Username,
        fullname: data.Fullname,
        departmentId: data.Department,
        positionId: data.Position,
      };
      await AccountApi.create(account);
      this.getListAccounts();
    } catch (error) {
      alert("Lỗi khi add Account");
    }
  };
  // Hàm xóa dữ liệu
  // onDeleteForm = (id) => {
  //   // console.log("ID Cần xóa là: ", id);
  //   // let listAccounts = this.state.listAccounts;
  //   // let indexAccountDel = listAccounts.findIndex(
  //   //   (account) => account.ID === id
  //   // );
  //   // console.log("Index của phần tử cần xóa:", indexAccountDel);
  //   // if (indexAccountDel !== -1) {
  //   //   listAccounts.splice(indexAccountDel, 1);
  //   //   this.setState({
  //   //     listAccounts: listAccounts,
  //   //   });
  //   //   localStorage.setItem("listAccounts", JSON.stringify(listAccounts));
  //   // }
  //   const baseURL = `http://localhost:8080`;
  //   Axios.delete(`${baseURL}/api/v1/accounts/${id}`)
  //     .then((response) => {
  //       this.getListAccounts();
  //     })
  //     .catch((errors) => console.log(errors));
  // };

  onDeleteForm = async (id) => {
    try {
      await AccountApi.deleteById(id);
      this.getListAccounts();
    } catch (error) {
      alert("Lỗi khi delete by ID");
    }
  };
  // Xử lý update dữ liệu
  onDUpdateForm = (id) => {
    console.log("ID của Account cần update: ", id);
    let listAccounts = this.state.listAccounts;
    let indexAccountUpdate = listAccounts.findIndex(
      (account) => account.ID === id
    );
    if (indexAccountUpdate !== -1) {
      // let isShowInputForm = this.state.isShowInputForm;
      // isShowInputForm = true;
      this.setState({
        isShowInputForm: true,
      });

      console.log("Index của Account cần update: ", indexAccountUpdate);
      let accountUpdate = listAccounts[indexAccountUpdate];
      console.log("Thông tin Account cần update: ", accountUpdate);
      // Set lại State cho accountUpdate
      this.setState({
        accountUpdate: accountUpdate,
      });
    }
  };
  // Hàm xử lý update dữ liệu vào list
  // update_Account_Button = (account) => {
  //   // console.log("Dữ liệu account update là: ", account);
  //   // let listAccounts = this.state.listAccounts;
  //   // let indexAccount_Update = listAccounts.findIndex(
  //   //   (account1) => account1.ID === account.ID
  //   // );
  //   // if (indexAccount_Update !== -1) {
  //   //   listAccounts[indexAccount_Update] = account; // Thực hiện sửa lại Account theo data nhận được
  //   //   this.setState({
  //   //     listAccounts: listAccounts,
  //   //   });
  //   //   localStorage.setItem("listAccounts", JSON.stringify(listAccounts)); // Lưu lại dữ liệu xuống local Storage
  //   // }

  //   let id = account.ID;
  //   const body = {
  //     fullname: account.Fullname,
  //     departmentId: account.Department,
  //     positionId: account.Position,
  //   };

  //   const baseURL = `http://localhost:8080`;
  //   Axios.put(`${baseURL}/api/v1/accounts/${id}`, body)
  //     .then((response) => {
  //       this.getListAccounts();
  //     })
  //     .catch((errors) => console.log(errors));
  // };

  update_Account_Button = async (account) => {
    try {
      let id = account.ID;
      const body = {
        fullname: account.Fullname,
        departmentId: account.Department,
        positionId: account.Position,
      };
      await AccountApi.updateById(id, body);
      this.getListAccounts();
    } catch (error) {
      alert("lỗi khi update account");
    }
  };
  // Xử lý search dữ liệu
  onSearchForm = (data) => {
    console.log("Dữ liệu search từ APP: ", data);
    this.setState({
      search_key: data,
    });
  };
  render() {
    let accountUpdate = this.state.accountUpdate;
    let isShowInputForm = this.state.isShowInputForm;
    let inputForm_Element;
    let listAccounts = this.state.listAccounts;
    //  <InputForm />;
    if (isShowInputForm) {
      inputForm_Element = (
        <InputForm
          onshowForm={this.onshowForm}
          onSaveForm={this.onSaveForm}
          accountUpdate={accountUpdate}
          update_Account_Button={this.update_Account_Button}
        />
      );
    } else {
      inputForm_Element = "";
    }
    // Xử lý render cho search
    let search_key = this.state.search_key;

    if (search_key) {
      let listAccounts_filter = [];
      for (let index = 0; index < listAccounts.length; index++) {
        // Sử dụng hàm includes để so sánh chuỗi, if chuỗi cha bao gồm chuỗi con sẽ trả về true, https://www.w3schools.com/jsref/jsref_includes.asp
        if (
          listAccounts[index].ID.toLowerCase().includes(
            search_key.toLowerCase()
          ) ||
          listAccounts[index].Email.toLowerCase().includes(
            search_key.toLowerCase()
          ) ||
          listAccounts[index].Username.toLowerCase().includes(
            search_key.toLowerCase()
          ) ||
          listAccounts[index].Fullname.toLowerCase().includes(
            search_key.toLowerCase()
          ) ||
          listAccounts[index].Department.toLowerCase().includes(
            search_key.toLowerCase()
          ) ||
          listAccounts[index].Position.toLowerCase().includes(
            search_key.toLowerCase()
          )
          // ||
          // listAccounts[index].Cretate_Date.toLowerCase().includes(search_key.toLowerCase())
        ) {
          listAccounts_filter.push(listAccounts[index]); // Lấy các phần tử thỏa mãn đk search_key lưu vào listAccounts_filter trung gian
        }
      }
      listAccounts = listAccounts_filter;
    }
    //
    return (
      <div className="App">
        <div className="container">
          <input
            type="button"
            className="btn btn-success"
            id="Create_btn"
            value="Create Account"
            onClick={this.showInputForm}
          ></input>
          {inputForm_Element}
          {/* ô search dữ liệu */}
          <SearchForm onSearchForm={this.onSearchForm} />
          {/*  */}
          <ResultForm
            listAccounts={listAccounts}
            onDeleteForm={this.onDeleteForm}
            onDUpdateForm={this.onDUpdateForm}
          />
        </div>
      </div>
    );
  }
}

export default App;

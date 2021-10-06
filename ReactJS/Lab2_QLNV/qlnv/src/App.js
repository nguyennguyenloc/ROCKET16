import React, { Component } from "react";
import "./App.css";
import InputForm from "./Components/InputForm";
import ResultForm from "./Components/ResultForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listAccounts: [],
      isShowInputForm: false,
    };
  }

  createData = () => {
    let listAccounts = [
      {
        ID: "1",
        Email: "Email1@gmail.com",
        Username: "Username1",
        Fullname: "Fullname1",
        Department: "Accounting",
        Position: "Scrum Master",
      },
      {
        ID: "2",
        Email: "Email2@gmail.com",
        Username: "Username2",
        Fullname: "Fullname2",
        Department: "Accounting",
        Position: "Scrum Master",
      },
      {
        ID: "3",
        Email: "Email3@gmail.com",
        Username: "Username3",
        Fullname: "Fullname3",
        Department: "Accounting",
        Position: "Scrum Master",
      },
      {
        ID: "4",
        Email: "Email4@gmail.com",
        Username: "Username4",
        Fullname: "Fullname4",
        Department: "Accounting",
        Position: "Scrum Master",
      },
    ];
    this.setState({
      listAccounts: listAccounts,
    });
    localStorage.setItem("listAccounts", JSON.stringify(listAccounts));
  };

  componentDidMount = () => {
    if (localStorage && localStorage.getItem("listAccounts")) {
      let listAccounts = JSON.parse(localStorage.getItem("listAccounts"));
      this.setState({
        listAccounts: listAccounts,
      });
    }
  };
  showInputForm = () => {
    this.setState({
      isShowInputForm: !this.state.isShowInputForm,
    });
  };

  onShowForm = () => {
    this.setState({
      isShowInputForm: false,
    });
  };

  onSaveForm = (account) => {
    let listAccounts = this.state.listAccounts;
    listAccounts.push(account);
    this.setState({
      // listAccounts: [...listAccounts, account],
      listAccounts: listAccounts,
    });
    localStorage.setItem("listAccounts", JSON.stringify(listAccounts));
  };

  onDeleteFrom = (id) => {
    console.log(id);
    let listAccounts = this.state.listAccounts;
    let indexAccountDel = listAccounts.findIndex(
      (account) => account.ID === id
    );
    console.log(indexAccountDel);
    if (indexAccountDel !== -1) {
      listAccounts.splice(indexAccountDel, 1);
      this.setState({
        listAccounts: listAccounts,
      });
      localStorage.setItem("listAccounts", JSON.stringify(listAccounts));
    }
  };
  render() {
    let isShowInputForm = this.state.isShowInputForm;
    let inputFormElement = "";
    if (isShowInputForm) {
      inputFormElement = (
        <InputForm onShowForm={this.onShowForm} onSaveForm={this.onSaveForm} />
      );
    }
    return (
      <div className="App">
        <div className="container">
          {/* <input
            type="button"
            className="btn btn-success"
            value="Create Data"
            onClick={this.createData}
          /> */}
          <input
            type="button"
            className="btn btn-success"
            value="Create Account"
            onClick={this.showInputForm}
          />
          {inputFormElement}
          <ResultForm
            listAccounts={this.state.listAccounts}
            onDeleteFrom={this.onDeleteFrom}
          />
        </div>
      </div>
    );
  }
}
export default App;

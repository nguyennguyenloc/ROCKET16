import React, { Component } from "react";
import { Redirect } from "react-router";

class AccountDetail extends Component {
  listAccounts = [
    {
      ID: "1",
      Email: "Email1@gmail.com",
      Username: "Username1",
      Fullname: "Fullname1",
      Department: "Sale",
      Position: "Scrum Master",
    },
    {
      ID: "2",
      Email: "Email2@gmail.com",
      Username: "Username2",
      Fullname: "Fullname2",
      Department: "Sale",
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

  render() {
    var user_login = JSON.parse(localStorage.getItem("user_login"));
    if (!user_login) {
      alert("Hãy đăng nhập hệ thống để truy cập");
      return <Redirect to="/Login" />;
    }
    const match = this.props.match;
    console.log("Match param", match.params.ID);
    const idParam = match.params.ID;

    const row_Account = this.listAccounts.map((account, index) => {
      if (account.ID == idParam) {
        return (
          <>
            <tr>
              <td>{account.ID}</td>
              <td>{account.Email}</td>
              <td>{account.Username}</td>
              <td>{account.Fullname}</td>
              <td>{account.Department}</td>
              <td>{account.Position}</td>
            </tr>
          </>
        );
      }
    });
    return (
      <div className="row text-center">
        <h3>This is Account Detail Page</h3>
        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
          {/* Sử dụng để căn giữa trang */}
        </div>
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <table className="table table-hover">
            <thead>
              <tr style={{ color: "red", fontWeight: "bold" }}>
                <td>ID</td>
                <td>Email</td>
                <td>Username</td>
                <td>Fullname</td>
                <td>Department</td>
                <td>Position</td>
              </tr>
            </thead>
            <tbody>
              {/* In các row */}
              {row_Account}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default AccountDetail;

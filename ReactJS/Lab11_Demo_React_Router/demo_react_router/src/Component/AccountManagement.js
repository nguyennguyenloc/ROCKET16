import React, { Component } from "react";
import { Redirect } from "react-router";
import { NavLink } from "react-router-dom";
class AccountManagement extends Component {
  listAccounts = [
    {
      ID: "1",
      Email: "Email1@gmail.com",
    },
    {
      ID: "2",
      Email: "Email2@gmail.com",
    },
    {
      ID: "3",
      Email: "Email3@gmail.com",
    },
    {
      ID: "4",
      Email: "Email4@gmail.com",
    },
  ];

  render() {
    var user_login = JSON.parse(localStorage.getItem("user_login"));
    if (!user_login) {
      alert("Hãy đăng nhập hệ thống để truy cập");
      return <Redirect to="/Login" />;
    }

    const match = this.props.match;
    console.log("Match ", match);
    console.log("Match URL", match.url);
    const row_Account = this.listAccounts.map((account, index) => {
      let url = match.url.concat("/").concat(account.ID);
      return (
        <>
          <tr>
            <td>{account.ID}</td>
            <td>
              <NavLink to={url}>{account.Email}</NavLink>
            </td>
          </tr>
        </>
      );
    });
    return (
      <div className="row">
        <h3>Thông tin Account</h3>
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <table className="table table-hover">
            <thead>
              <tr>
                <td>ID</td>
                <td>Email</td>
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

export default AccountManagement;

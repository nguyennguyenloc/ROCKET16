import React, { Component } from "react";
import { Redirect } from "react-router";

class AccountManagement extends Component {
  render() {
    var user_login = JSON.parse(localStorage.getItem("user_login"));
    if (!user_login) {
      alert("Hãy đăng nhập hệ thống để truy cập");
      return <Redirect to="/Login" />;
    }
    return (
      <div>
        <h1>This is AccountManagement</h1>
      </div>
    );
  }
}

export default AccountManagement;

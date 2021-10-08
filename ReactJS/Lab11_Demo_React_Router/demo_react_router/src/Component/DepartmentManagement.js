import React, { Component } from "react";
import { Redirect } from "react-router";

export default class DepartmentManagement extends Component {
  render() {
    var user_login = JSON.parse(localStorage.getItem("user_login"));
    if (!user_login) {
      alert("Hãy đăng nhập hệ thống để truy cập");
      return <Redirect to="/Login" />;
    }
    return (
      <div>
        <h1>This is DepartmentManagement</h1>
      </div>
    );
  }
}

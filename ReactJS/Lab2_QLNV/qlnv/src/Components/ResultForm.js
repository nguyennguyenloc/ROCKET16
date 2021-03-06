import React, { Component } from "react";
import ResultFormItem from "./ResultFormItem";

class ResultForm extends Component {
  render() {
    return (
      <div className="container">
        <div className="form">
          <h3>Thông tin nhân viên trên hệ thống</h3>
          <table className="table table-hover" id="Detail_Staff_ID">
            <thead>
              <tr>
                <th>ID</th>
                <th>Email</th>
                <th>Username</th>
                <th>Fullname</th>
                <th>Department</th>
                <th>Position</th>
                <th>Cretate Date</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody id="Result_TB">
              <ResultFormItem
                listAccounts={this.props.listAccounts}
                onDeleteFrom={this.props.onDeleteFrom}
                onUpdateFrom={this.props.onUpdateFrom}
              />
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default ResultForm;

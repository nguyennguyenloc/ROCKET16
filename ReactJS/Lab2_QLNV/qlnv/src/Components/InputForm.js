import React, { Component } from "react";

class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ID: "",
      Username: "",
      Fullname: "",
      Email: "",
      Department: "",
      Position: "",
      Create_Date: "",
      isShowForm: true,
    };
  }
  handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    let account = {
      ID: this.state.ID,
      Email: this.state.Email,
      Username: this.state.Username,
      Fullname: this.state.Fullname,
      Department: this.state.Department,
      Position: this.state.Position,
      Create_Date: this.state.Create_Date,
    };
    event.preventDefault();
    this.props.onSaveForm(account);
  };

  onShowForm = () => {
    // this.setState({});
    this.props.onShowForm();
  };
  render() {
    return (
      <div className="form">
        <h3>Quản lý nhân viên</h3>
        <form method="POST" id="Main_Form_ID">
          <div className="form-group">
            <label htmlFor="">ID: </label>
            <input
              type="number"
              required="true"
              className="form-control"
              id="ID_ID"
              name="ID"
              value={this.state.ID}
              placeholder="Enter Id"
              onChange={this.handleChange}
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="">Email: </label>
            <input
              type="email"
              required="true"
              className="form-control"
              id="Email_ID"
              value={this.state.Email}
              name="Email"
              placeholder="Enter Email"
              onChange={this.handleChange}
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="">Username: </label>
            <input
              type="text"
              required="true"
              className="form-control"
              id="Username_ID"
              value={this.state.Username}
              name="Username"
              placeholder="Enter Username"
              onChange={this.handleChange}
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="">Fullname: </label>
            <input
              type="text"
              required="true"
              className="form-control"
              id="Fullname_ID"
              value={this.state.Fullname}
              name="Fullname"
              placeholder="Enter Fullname"
              onChange={this.handleChange}
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="sel1">Select a Department:</label>
            <select
              className="form-control"
              id="Department_ID"
              name="Department"
              value={this.state.Department}
              onChange={this.handleChange}
            >
              <option>--Select a Department--</option>
              <option>Accounting</option>
              <option>Business Development</option>
              <option>Engineering</option>
              <option>Human Resources</option>
              <option>Research and Development</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="sel1">Select a Position:</label>
            <select
              className="form-control"
              id="Position_ID"
              name="Position"
              value={this.state.Position}
              onChange={this.handleChange}
            >
              <option>--Select a Position--</option>
              <option>Developer</option>
              <option>Tester</option>
              <option>Scrum Master</option>
              <option>PM</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="">Cretate Date: </label>
            <input
              type="date"
              required="true"
              className="form-control"
              id="Cretate_Date_ID"
              value={this.state.Create_Date}
              name="Create_Date"
              onChange={this.handleChange}
            ></input>
          </div>
          <div className="form-group">
            <input
              type="submit"
              className="btn btn-success"
              value="Save"
              onClick={this.handleSubmit}
            ></input>
            <input
              type="button"
              className="btn btn-success"
              id="update_btn"
              value="Update"
            ></input>
            <input
              type="button"
              className="btn btn-success"
              id="reset_btn"
              value="Reset"
            ></input>
            <input
              type="button"
              className="btn btn-danger"
              id="reset_btn"
              value="Close"
              onClick={this.onShowForm}
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default InputForm;

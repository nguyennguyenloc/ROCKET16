import React, { Component } from "react";
import { Prompt } from "react-router";

export default class Sign_Up extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Full_Name: "",
      Email: "",
      Password: "",
      Re_Password: "",
      Birthday: "",
      isBlocking: false,
    };
  }

  handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    let isBlocking = false;
    if (event.target.value.length > 0) {
      isBlocking = true;
    }
    this.setState({
      [name]: value,
      isBlocking: isBlocking,
    });
  };

  handleSubmit = () => {
    var user = {
      Full_Name: this.state.Full_Name,
      Email: this.state.Email,
      Password: this.state.Password,
      Birthday: this.state.Birthday,
    };
    var json = JSON.stringify(user);
    localStorage.setItem("user", json);
  };
  render() {
    return (
      <div className="container">
        <Prompt
          when={this.state.isBlocking}
          message={(location) => "Bạn có muốn thoát hay không?"}
        />
        <div className="row">
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <h3>Register System</h3>

            <div className="form-group">
              <label for="">Full Name: </label>
              <input
                type="text"
                required="true"
                className="form-control"
                id="Full_Name_ID"
                name="Full_Name"
                value={this.state.Full_Name}
                onChange={this.handleChange}
                placeholder="Enter Fullname"
              />
            </div>
            <div className="form-group">
              <label for="">Email: </label>
              <input
                type="email"
                required="true"
                className="form-control"
                id="Email_ID"
                name="Email"
                value={this.state.Email}
                onChange={this.handleChange}
                placeholder="Enter Email"
              />
            </div>
            <div className="form-group">
              <label for="">Password: </label>
              <input
                type="password"
                required="true"
                className="form-control"
                id="Password_ID"
                name="Password"
                value={this.state.Password}
                onChange={this.handleChange}
                placeholder="Enter Password"
              />
            </div>
            <div className="form-group">
              <label for="">Confirmation Password: </label>
              <input
                type="password"
                required="true"
                className="form-control"
                id="Re_Password_ID"
                name="Re_Password"
                value={this.state.Re_Password}
                onChange={this.handleChange}
                placeholder="Enter Password"
              />
            </div>
            <div className="form-group">
              <label for="">Birthday: </label>
              <input
                type="date"
                required="true"
                className="form-control"
                id="Birthday_ID"
                name="Birthday"
                value={this.state.Birthday}
                onChange={this.handleChange}
                placeholder="Choose Birthday"
              />
            </div>
            <div className="form-group">
              <input
                type="submit"
                className="btn btn-success"
                onClick={this.handleSubmit}
                value="Register"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

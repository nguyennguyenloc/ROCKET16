import React, { Component } from "react";
import { Redirect } from "react-router-dom";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Email: "",
      Password: "",
      isRedirect: false,
    };
  }

  handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = () => {
    var user = JSON.parse(localStorage.getItem("user"));
    console.log("user " + user.Email + " " + user.Password);
    console.log("state " + this.state.Email + " " + this.state.Password);
    if (
      user.Email === this.state.Email &&
      user.Password === this.state.Password
    ) {
      alert("Đăng nhập thành công");
      var user_login = {
        Email: this.state.Email,
        Password: this.state.Password,
      };
      var json = JSON.stringify(user_login);
      localStorage.setItem("user_login", json);

      this.setState({
        isRedirect: true,
      });
    }
  };
  render() {
    if (this.state.isRedirect) {
      return <Redirect to="/AccountManagement" />;
    }
    var user_login = JSON.parse(localStorage.getItem("user_login"));
    if (user_login) {
      return <Redirect to="/AccountManagement" />;
    }
    return (
      <div className="container" style={{ width: "70%" }}>
        <div className="row">
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <br />
            <br />
            <br />
            <h3>LOGIN</h3>
            <br />
            <div className="form-group">
              <label for="Email">Email:</label>
              <input
                type="email"
                required="true"
                className="form-control"
                id="Email_Login_id"
                name="Email"
                value={this.state.Email}
                onChange={this.handleChange}
                placeholder="Enter email"
              />
            </div>
            <div className="form-group">
              <label for="Password">Password:</label>
              <input
                type="password"
                required="true"
                className="form-control"
                id="Password_Login_id"
                name="Password"
                value={this.state.Password}
                onChange={this.handleChange}
                placeholder="Enter Password"
              />
            </div>
            <button
              type="submit"
              className="btn btn-info"
              onClick={this.handleSubmit}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;

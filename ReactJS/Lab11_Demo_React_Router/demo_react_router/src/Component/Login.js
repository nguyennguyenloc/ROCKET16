import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Email: "",
      Password: "",
    };
  }

  handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({
      [name]: [value],
    });
  };

  handleSubmit = () => {
    console.log("ok");
  };
  render() {
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
                type="Password"
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

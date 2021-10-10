import React, { Component } from "react";
import Axios from "axios";

class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ID: "",
      Email: "",
      Username: "",
      Fullname: "",
      Department: "",
      Position: "",
      Cretate_Date: "",
      listDepartment: [],
      listPossition: [],
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
    // alert("ID bạn vừa nhập là: " + this.state.ID);
    // alert("Email bạn vừa nhập là: " + this.state.Email);
    // alert("Usernamebạn vừa nhập là: " + this.state.Username);
    // alert("Fullname bạn vừa nhập là: " + this.state.Fullname);
    // alert("Department bạn vừa nhập là: " + this.state.Department);
    // alert("Position bạn vừa nhập là: " + this.state.Position);
    // alert("Cretate_Date bạn vừa nhập là: " + this.state.Cretate_Date);
    let account = {
      ID: this.state.ID,
      Email: this.state.Email,
      Username: this.state.Username,
      Fullname: this.state.Fullname,
      Department: this.state.Department,
      Position: this.state.Position,
      Cretate_Date: this.state.Cretate_Date,
    };
    this.props.onSaveForm(account);
    event.preventDefault();
  };
  onShowForm = () => {
    this.props.onshowForm();
  };

  // Hiển thị thông tin Account cần update
  componentDidMount() {
    if (this.props.accountUpdate) {
      this.setState({
        ID: this.props.accountUpdate.ID,
        Email: this.props.accountUpdate.Email,
        Username: this.props.accountUpdate.Username,
        Fullname: this.props.accountUpdate.Fullname,
        Department: this.props.accountUpdate.Department,
        Position: this.props.accountUpdate.Position,
        Cretate_Date: this.props.accountUpdate.Cretate_Date,
      });
    }
    this.getListDepartments();
    this.getListPossitions();
  }

  getListDepartments = () => {
    const baseURL = `http://localhost:8080`;
    Axios.get(`${baseURL}/api/v1/departments`)
      .then((response) => {
        console.log("Department ", response.data);
        this.setState({
          listDepartment: response.data,
        });
      })
      .catch((errors) => console.log(errors));
  };

  getListPossitions = () => {
    const baseURL = `http://localhost:8080`;
    Axios.get(`${baseURL}/api/v1/possitions`)
      .then((response) => {
        console.log("Possition ", response.data);
        this.setState({
          listPossition: response.data,
        });
      })
      .catch((errors) => console.log(errors));
  };
  // Hàm xử lý sự kiện khi click vào nút Update
  handleUpdate = () => {
    this.props.update_Account_Button(this.state);
  };
  //
  static getDerivedStateFromProps(new_props, state) {
    console.log("Thông tin new_props", new_props);

    if (new_props.accountUpdate === null) {
      // props.accountUpdate.ID = 0;
      return;
    }

    if (new_props.accountUpdate.ID !== state.ID) {
      return {
        ID: new_props.accountUpdate.ID,
        Email: new_props.accountUpdate.Email,
        Username: new_props.accountUpdate.Username,
        Fullname: new_props.accountUpdate.Fullname,
        Department: new_props.accountUpdate.Department,
        Position: new_props.accountUpdate.Position,
        Cretate_Date: new_props.accountUpdate.Cretate_Date,
      };
    }
  }
  //
  render() {
    let listDepartment = this.state.listDepartment;
    let departmentItems = listDepartment.map((departmentItem) => (
      <option key={departmentItem.name} value={departmentItem.id}>
        {departmentItem.name}
      </option>
    ));
    let listPossition = this.state.listPossition;
    let possitionItems = listPossition.map((possitionItem) => (
      <option key={possitionItem.name} value={possitionItem.id}>
        {possitionItem.name}
      </option>
    ));
    return (
      <div className="form">
        <h3>Quản lý nhân viên</h3>
        <form id="Main_Form_ID">
          <div className="form-group">
            <label htmlFor="">ID: </label>
            <input
              type="number"
              className="form-control"
              id="ID_ID"
              defaultValue=""
              placeholder="Enter Id"
              name="ID"
              value={this.state.ID}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Email: </label>
            <input
              type="email"
              className="form-control"
              id="Email_ID"
              defaultValue=""
              placeholder="Enter Email"
              name="Email"
              value={this.state.Email}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Username: </label>
            <input
              type="text"
              className="form-control"
              id="Username_ID"
              defaultValue=""
              placeholder="Enter Username"
              name="Username"
              value={this.state.Username}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Fullname: </label>
            <input
              type="text"
              className="form-control"
              id="Fullname_ID"
              defaultValue=""
              placeholder="Enter Fullname"
              name="Fullname"
              value={this.state.Fullname}
              onChange={this.handleChange}
            />
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
              {departmentItems}
              {/* <option>Accounting</option>
              <option>Business Development</option>
              <option>Engineering</option>
              <option>Human Resources</option>
              <option>Research and Development</option> */}
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
              {possitionItems}
              {/* <option>Developer</option>
              <option>Tester</option>
              <option>Scrum Master</option>
              <option>PM</option> */}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="">Cretate Date: </label>
            <input
              type="date"
              className="form-control"
              id="Cretate_Date_ID"
              defaultValue=""
              name="Cretate_Date"
              value={this.state.Cretate_Date}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              className="btn btn-success"
              defaultValue="Save"
              onClick={this.handleSubmit}
            />
            <input
              type="button"
              className="btn btn-success"
              id="update_btn"
              defaultValue="Update"
              onClick={this.handleUpdate}
            />
            <input
              type="button"
              className="btn btn-success"
              id="reset_btn"
              defaultValue="Reset"
            />
            {/* Nút Close */}
            <input
              type="button"
              class="btn btn-danger"
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

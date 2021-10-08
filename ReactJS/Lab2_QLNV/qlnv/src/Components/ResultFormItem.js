import React, { Component } from "react";

class ResultFormItem extends Component {
  constructor(props) {
    super(props);
    this.Cretate_Date = "4/10/2021";
  }
  onUpdateFrom = (id) => {
    this.props.onUpdateFrom(id);
  };
  onDeleteFrom = (id) => {
    this.props.onDeleteFrom(id);
  };
  render() {
    const { listAccounts } = this.props;
    const rows = listAccounts.map((row, index) => {
      return (
        <tr>
          <td>{row.ID}</td>
          <td>{row.Email}</td>
          <td>{row.Username}</td>
          <td>{row.Fullname}</td>
          <td>{row.Department}</td>
          <td>{row.Position}</td>
          <td>{row.Create_Date}</td>
          <td>
            <button
              className="btn btn-warning"
              onClick={() => this.onUpdateFrom(row.ID)}
            >
              Edit
            </button>
          </td>
          <td>
            <button
              className="btn btn-warning"
              onClick={() => this.onDeleteFrom(row.ID)}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
    return rows;
  }
}
export default ResultFormItem;

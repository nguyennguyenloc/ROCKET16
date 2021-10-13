import React from "react";
import DataContext from "../Context/DataContext";
import { useContext } from "react";

function ChildComponent(props) {
  let data = useContext(DataContext);
  // console.log("data", data);
  let rowItem = data.data.map((item) => (
    <tr key={item}>
      <td>{item}</td>
    </tr>
  ));
  let rowItem_account = data.listAccounts.map((Item) => (
    <tr key={Item}>
      <td>{Item.ID}</td>
      <td>{Item.Name}</td>
      <td>{Item.Email}</td>
      <td>{Item.FUllname}</td>
      <td>{Item.Department}</td>
    </tr>
  ));
  return (
    <div>
      {/* <DataContext.Consumer>
        {(data) => <h1>Data from Grandparents: {data} </h1>}
      </DataContext.Consumer> */}

      <table className="table table-hover">
        <thead>
          <tr>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>{rowItem}</tbody>
      </table>
      <h1>Table 2</h1>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>FUllname</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>{rowItem_account}</tbody>
      </table>
    </div>
  );
}

export default ChildComponent;

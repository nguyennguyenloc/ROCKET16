import React from "react";
import DataContext from "../Context/DataContext";
import ParentComponent2 from "./ParentComponent2";

function GrandParentComponent(props) {
  const data = ["data1", "data2", "data3"];
  const listAccounts = [
    {
      ID: 1,
      Name: "daonq1",
      Email: "daonq1@viettel.com.vn",
      FUllname: "Nguyễn Đạo",
      Department: "Sale",
    },
    {
      ID: 2,
      Name: "daonq2",
      Email: "daonq2@viettel.com.vn",
      FUllname: "Nguyễn Đạo",
      Department: "Sale2",
    },
    {
      ID: 3,
      Name: "daonq3",
      Email: "daonq3@viettel.com.vn",
      FUllname: "Nguyễn Đạo",
      Department: "Sale3",
    },
  ];

  return (
    <DataContext.Provider value={{ data, listAccounts }}>
      <ParentComponent2 />
    </DataContext.Provider>
  );
}

export default GrandParentComponent;

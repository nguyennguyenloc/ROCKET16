import React, { useState } from "react";
import ChildComponent2 from "./ChildComponent2";

function ParentComponent(props) {
  const [Data1, setData1] = useState(0);
  const [Data2, setData2] = useState(0);
  return (
    <div>
      <div class="row">
        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <button
            type="button"
            className="btn btn-default"
            onClick={() => setData1(Data1 + 1)}
          >
            Change State Data 1
          </button>
          <br />
          Data1: {Data1}
        </div>

        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <ChildComponent2 data2={Data2} />
        </div>
      </div>
    </div>
  );
}

export default ParentComponent;

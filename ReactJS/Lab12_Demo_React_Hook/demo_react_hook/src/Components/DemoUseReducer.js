import React, { useState } from "react";

function DemoUseReducer() {
  const [Data, setData] = useState(0);

  let handleInCrease_1 = () => {
    setData(Data + 1);
  };

  let handleDeCrease_1 = () => {
    setData(Data - 1);
  };

  let handleInCrease_2 = () => {
    setData(Data + 2);
  };

  let handleDeCrease_2 = () => {
    setData(Data - 2);
  };

  let handleX_2 = () => {
    setData(Data * Data);
  };

  let handleReset = () => {
    setData(0);
  };
  return (
    <div>
      <div className="row">
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h3 className="panel-title">
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={handleInCrease_1}
                >
                  +1
                </button>
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={handleDeCrease_1}
                >
                  -1
                </button>
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={handleInCrease_2}
                >
                  +2
                </button>
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={handleDeCrease_2}
                >
                  -2
                </button>
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={handleX_2}
                >
                  x^2
                </button>
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={handleReset}
                >
                  Reset
                </button>
              </h3>
            </div>
            <div className="panel-body">
              <h3>Result:{Data} </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default DemoUseReducer;

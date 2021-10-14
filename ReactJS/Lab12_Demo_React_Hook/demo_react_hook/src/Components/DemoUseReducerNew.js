import React, { useReducer, useState } from "react";

function DemoUseReducerNew() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return state + action.value;
      case "DECREMENT":
        return state - action.value;
      case "X_2":
        return state * state;
      case "RESET":
        return 0;
      default:
        return state;
    }
  };
  const [Data, dispatch] = useReducer(reducer, 0);

  //định nghĩa action
  //   let INCREMENT_1 = {
  //     type: "INCREMENT",
  //     value: 1,
  //   };

  let DECREMENT_1 = {
    type: "DECREMENT",
    value: 1,
  };

  let INCREMENT_2 = {
    type: "INCREMENT",
    value: 2,
  };

  let DECREMENT_2 = {
    type: "DECREMENT",
    value: 2,
  };

  let X_2 = {
    type: "X_2",
  };

  let RESET = {
    type: "RESET",
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
                  onClick={() => dispatch({ type: "INCREMENT", value: 1 })}
                >
                  +1
                </button>
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={() => dispatch(DECREMENT_1)}
                >
                  -1
                </button>
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={() => dispatch(INCREMENT_2)}
                >
                  +2
                </button>
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={() => dispatch(DECREMENT_2)}
                >
                  -2
                </button>
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={() => dispatch(X_2)}
                >
                  x^2
                </button>
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={() => dispatch(RESET)}
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
export default DemoUseReducerNew;

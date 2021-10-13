import React, { useState } from "react";

function Demo1(props) {
  const [count, setCount] = useState(0);
  return (
    <div className="row">
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <button
          type="button"
          className="btn btn-success"
          onClick={() => setCount(count + 1)}
        >
          Click
        </button>
      </div>
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <p style={{ fontSize: "50" }}>Bạn đã click {count} lần.</p>
      </div>
    </div>
  );
}

export default Demo1;

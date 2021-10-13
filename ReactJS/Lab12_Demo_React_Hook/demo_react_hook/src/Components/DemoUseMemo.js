import React, { useState, useMemo } from "react";

function DemoUseMemo() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);
  const [d, setD] = useState(0);

  const sum = (a, b) => {
    let a_num = Number(a);
    let b_num = Number(b);
    console.log("Calculating sum-----");
    return a_num + b_num;
  };

  const minus = (c, d) => {
    let c_num = Number(c);
    let d_num = Number(d);
    console.log("Calculating minus-----");
    return c_num - d_num;
  };

  const sumResult = useMemo(() => sum(a, b), [a, b]);
  const minusResult = useMemo(() => minus(c, d), [c, d]);
  return (
    <div>
      <div className="row">
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <div className="panel panel-success">
            <div className="panel-heading">
              <h3 className="panel-title">Sum</h3>
            </div>
            <div className="panel-body">
              <input
                type="number"
                value={a}
                onChange={(e) => setA(e.target.value)}
              />
              <br />
              <br />
              <input
                type="number"
                value={b}
                onChange={(e) => setB(e.target.value)}
              />
              <br />
              <br />
              <b>Sum: {sumResult}</b>
            </div>
          </div>
        </div>
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <div className="panel panel-success">
            <div className="panel-heading">
              <h3 className="panel-title">Minus</h3>
            </div>
            <div className="panel-body">
              <input
                type="number"
                value={c}
                onChange={(e) => setC(e.target.value)}
              />
              <br />
              <br />
              <input
                type="number"
                value={d}
                onChange={(e) => setD(e.target.value)}
              />
              <br />
              <br />
              <b>Minus: {minusResult}</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DemoUseMemo;

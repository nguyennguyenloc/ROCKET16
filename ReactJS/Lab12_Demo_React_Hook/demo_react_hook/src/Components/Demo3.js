import React, { useEffect, useState } from "react";

function Demo3(props) {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  useEffect(() => {
    console.log(
      "Sau khi Button1 thì hiển thị useEffect này ~ Component Did mount"
    );
    return () => {
      console.log("Thực hiện componentWillUnmount");
    };
  }, [count1]);

  useEffect(() => {
    console.log(
      "Sau khi Button2 thì hiển thị useEffect này ~ Component Did mount"
    );
  }, [count2]);

  useEffect(() => {
    console.log("UseState ~ Component Did mount");
  }, []);
  return (
    <div className="row">
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <button
          type="button"
          className="btn btn-success"
          onClick={() => setCount1(count1 + 1)}
        >
          Click 1
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={() => setCount2(count2 + 1)}
        >
          Click 2
        </button>
      </div>
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <p style={{ fontSize: "50" }}>Bạn đã click 1 được {count1} lần.</p>
        <br />
        <p style={{ fontSize: "50" }}>Bạn đã click 2 được {count2} lần.</p>
      </div>
    </div>
  );
}

export default Demo3;

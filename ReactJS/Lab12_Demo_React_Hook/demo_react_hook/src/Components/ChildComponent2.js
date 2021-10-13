import React from "react";

function ChildComponent2() {
  console.log("---Render Component 2---");
  return <div>This is ChildComponent 2</div>;
}

export default React.memo(ChildComponent2);

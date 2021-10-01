import "./App.css";
import React from "react";
function App() {
  const handleClick = () => {
    alert("Submit Success!");
  };
  return (
    <div className="App">
      <h1>Hello Lộc</h1>
      <button
        type="button"
        className="btn btn-default"
        onClick={handleClick}
      ></button>
    </div>
  );
}

export default App;

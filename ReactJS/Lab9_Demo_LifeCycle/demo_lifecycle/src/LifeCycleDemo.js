import React, { Component } from "react";

class LifeCycleDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello VTI",
    };
    console.log("Bước 1: khởi tạo constructor");
  }
  changeState = () => {
    this.setState({
      // message: "ok",
      message: "Hello VTI",
    });
    console.log("Bước 1 Thay đổi State - ShouldComponentUpdate");
  };
  render() {
    console.log("Bước 2 + 3.1: gọi hàm render");

    return (
      <React.Fragment>
        <div>{this.state.message}</div>;
        <button onClick={this.changeState}>Change State</button>
      </React.Fragment>
    );
  }
  componentDidMount = () => {
    console.log("Bước 3: Component DidMount");
  };

  shouldComponentUpdate = (newProps, newState) => {
    console.log("newProps ", newProps);
    console.log("newState ", newState);
    console.log("Bước 2: shouldComponentUpdate");
    if (newState.message !== this.state.message) {
      return true;
    }
    return false;
  };
  componentDidUpdate = (prevProps, prevState) => {
    console.log("PrevProps ", prevProps);
    console.log("PrevState ", prevState);
    console.log("Bước 4 ComponentDidUpdate");
  };

  componentDidCatch = () => {
    console.log("ComponentDidCatch");
  };

  componentWillUnmount = () => {
    console.log("ComponentWillUnmount");
  };
}

export default LifeCycleDemo;

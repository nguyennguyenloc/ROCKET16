import React, { Component } from "react";
import ComponentsBottom from "./Components/ComponentsBottom";
import ComponentsTop from "./Components/ComponentsTop";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
    };
  }
  getDataFromComponentTop = (data) => {
    this.setState({
      data: data,
    });
  };
  render() {
    return (
      <div className="App">
        <ComponentsTop
          getData={this.getDataFromComponentTop}
          dataToTopChild="jojo"
        />
        <ComponentsBottom data={this.state.data} />
      </div>
    );
  }
}

export default App;

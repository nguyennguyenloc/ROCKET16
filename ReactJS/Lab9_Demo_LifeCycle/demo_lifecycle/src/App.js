import { Component } from "react";
import "./App.css";
import LifeCycleDemo from "./LifeCycleDemo";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
    };
  }

  deleteComponent = () => {
    this.setState({
      show: !this.state.show,
    });
  };
  render() {
    return (
      <div className="App">
        <h1>Hello Lộc</h1>
        {this.state.show && <LifeCycleDemo />}
        <br />
        <br />

        <button
          type="button"
          class="btn btn-default"
          onClick={this.deleteComponent}
        >
          button
        </button>
      </div>
    );
  }
}

export default App;

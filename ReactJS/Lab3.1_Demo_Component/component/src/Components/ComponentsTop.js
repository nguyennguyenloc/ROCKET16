import { Component } from "react";
import ComponentsChild from "./ComponentsTopChild";

class ComponentsTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Input_Name: "",
    };
  }

  handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({
      [name]: value,
    });
  };

  click = () => {
    this.props.getData(this.state.Input_Name);
  };
  render() {
    return (
      <div class="row">
        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <div class="panel panel-primary">
            <div class="panel-heading">
              <h3 class="panel-title">Components_Top</h3>
            </div>
            <div class="panel-body">
              <div class="row">
                <form method="" id="Main_Form_ID">
                  <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                    <input
                      type="text"
                      name="Input_Name"
                      id="input"
                      className="form-control"
                      value={this.state.Input_Name}
                      required="required"
                      pattern=""
                      title=""
                      placeholder="Input something here"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="row">
                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={this.click}
                      >
                        Sent Data
                      </button>
                    </div>
                  </div>
                </form>

                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <h1>ok</h1>
                  <ComponentsChild data={this.props.dataToTopChild} />
                  <h1>ok1</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ComponentsTop;

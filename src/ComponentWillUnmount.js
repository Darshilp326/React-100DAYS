import React, { Component } from "react";

export default class ComponentWillUnmount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
    };
  }
  delHeader = () => {
    this.setState({ show: false });
  };
  render() {
    let header;
    if (this.state.show) {
      header = <Child />;
    }
    return (
      <div>
        {header}
        <button type="button" onClick={this.delHeader}>
          Delete Header
        </button>
      </div>
    );
  }
}
class Child extends Component {
  componentWillUnmount() {
    alert("this component is going to be unmounted");
  }
  render() {
    return <h1>Hello World!</h1>;
  }
}

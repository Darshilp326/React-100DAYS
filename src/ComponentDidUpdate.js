import React, { Component } from "react";

export default class ComponentDidUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = { favColor: "red" };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ favColor: "yellow" });
    }, 2000);
  }
  componentDidUpdate() {
    document.getElementById("div2").innerHTML =
      "Favourite color after updating is" + this.state.favColor;
  }
  render() {
    return (
      <div>
        <h1>My favourite color is {this.state.favColor}</h1>
        <div id="div2"></div>
      </div>
    );
  }
}

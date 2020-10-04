import React, { Component } from "react";

export default class GetDerivedStateFromProps extends Component {
  constructor(props) {
    super(props);
    this.setState({ favColor: "red" });
  }
  static getDerivedStateFromProps(props, state) {
    return { favColor: "blue" };
  }
  render() {
    return (
      <div>
        <h1>Favourite color is {this.state.favColor}</h1>
      </div>
    );
  }
}

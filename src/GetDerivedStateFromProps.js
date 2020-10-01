import React, { Component } from "react";

export default class GetDerivedStateFromProps extends Component {
  constructor(props) {
    super(props);
    this.setState({ favColor: "red" });
  }
  render() {
    return <div></div>;
  }
}

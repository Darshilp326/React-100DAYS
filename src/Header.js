import React, { Component } from "react";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "red",
    };
  }
  componentDidMount() {
    setInterval(() => this.setState({ color: "yellow" }), 1000);
  }
  render() {
    return (
      <div>
        <h1>Color is {this.state.color}</h1>
      </div>
    );
  }
}

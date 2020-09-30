import React, { Component } from "react";

export default class Constructor extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    return (
      <div>
        <h2>Please check console!</h2>
        <h1>Printing value from props</h1>
        <h1>{this.props.name}</h1>
      </div>
    );
  }
}

import React, { Component } from "react";

export default class Greeting extends Component {
  render() {
    return (
      <div>
        <h1>
          Hello {this.props.userInfo.firstName} {this.props.userInfo.lastName}!
        </h1>
      </div>
    );
  }
}

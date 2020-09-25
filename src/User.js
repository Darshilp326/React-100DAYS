import React, { Component } from "react";
import Greeting from "./Greeting";

export default class User extends Component {
  render() {
    const name = "Darshil";
    return (
      <div>
        <Greeting name={name} />
      </div>
    );
  }
}

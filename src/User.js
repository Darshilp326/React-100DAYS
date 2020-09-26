import React, { Component } from "react";
import Greeting from "./Greeting";

export default class User extends Component {
  render() {
    const userInfo = {
      firstName: "Darshil",
      lastName: "Patel",
    };
    return (
      <div>
        <Greeting userInfo={userInfo} />
      </div>
    );
  }
}

import React, { Component } from "react";

export default class List extends Component {
  render() {
    const items = ["home", "about-us", "gallery", "contact-us"];
    const navBar = items.map((item) => {
      return <li>{item}</li>;
    });
    return <div>{navBar}</div>;
  }
}

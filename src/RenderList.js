import React, { Component } from "react";

export default class RenderList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fruits: ["mango", "apple", "banana", "papaya", "grapes"],
    };
  }
  //const fruits=this.state.fruits.map((fruit){<h1>{this.fruit}</h1>})
  render() {
    return (
      <div>
        <li>
          {this.state.fruits.map((fruit) => (
            <ul>{fruit}</ul>
          ))}
        </li>
      </div>
    );
  }
}

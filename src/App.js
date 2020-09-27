import React from "react";
import logo from "./logo.svg";
import Car from "./Car";
import Table from "./Table";
import User from "./User";
//import "./App.css";
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <User />
      </div>
    );
  }
}

export default App;

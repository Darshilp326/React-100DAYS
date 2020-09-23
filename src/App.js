import React from "react";
import logo from "./logo.svg";
import Car from "./Car";
import "./App.css";
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Car />
      </div>
    );
  }
}

export default App;

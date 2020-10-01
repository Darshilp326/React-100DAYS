import React from "react";
import logo from "./logo.svg";
import "./App.css";
import GetDerivedStateFromProps from "./GetDerivedStateFromProps";
class App extends React.Component {
  render() {
    return (
      <div>
        <GetDerivedStateFromProps />
      </div>
    );
  }
}
export default App;

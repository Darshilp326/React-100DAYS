import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ComponentWillUnmount from "./ComponentWillUnmount";
class App extends React.Component {
  render() {
    return (
      <div>
        <ComponentWillUnmount />
      </div>
    );
  }
}
export default App;

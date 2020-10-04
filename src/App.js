import React from "react";
import logo from "./logo.svg";
import "./App.css";
import GetSnapshotBeforeUpdate from "./GetSnapshotBeforeUpdate";
class App extends React.Component {
  render() {
    return (
      <div>
        <GetSnapshotBeforeUpdate />
      </div>
    );
  }
}
export default App;

import React from "react";
import logo from "./logo.svg";
import "./App.css";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "Darshil Patel" };
  }
  changeState = (e) => {
    this.setState({
      name: "Virat Kohli",
    });
  };
  render() {
    return (
      <div>
        <button type="button" onClick={this.changeState}>
          {this.state.name}
        </button>
      </div>
    );
  }
}
export default App;

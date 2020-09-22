import React from "react";
import logo from "./logo.svg";
import "./App.css";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "Click here!" };
  }
  changeState = (e) => {
    this.setState({
      text: "You clicked!",
    });
  };
  render() {
    return (
      <div>
        <button type="button" onClick={this.changeState}>
          {this.state.text}
        </button>
      </div>
    );
  }
}

//export default App;

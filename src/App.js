import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Constructor from "./Constructor";
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
        <Constructor name="Darshil" />
      </div>
    );
  }
}
export default App;

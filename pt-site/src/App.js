import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Background from "./Components/Background";
import Jumbotron from "./Components/Jumbotron";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Jumbotron />
        <Background />;
      </div>
    );
  }
}

export default App;

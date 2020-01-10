import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav";
import HogContainer from "./components/HogContainer.js";

const HOG_URL = "http://localhost:3000/hogs";

class App extends Component {
  state = { hogs: [] };

  componentDidMount = () => {
    this.fetchHogs();
  };

  fetchHogs = () => {
    fetch(HOG_URL)
      .then(resp => resp.json())
      .then(data => this.setState({ hogs: data }));
  };

  render() {
    return (
      <div className="App">
        <Nav />
        <HogContainer hogs={this.state.hogs} />
      </div>
    );
  }
}

export default App;

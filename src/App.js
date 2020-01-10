import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav";
import HogContainer from "./components/HogContainer.js";

const HOG_URL = "http://localhost:3000/hogs";

class App extends Component {
  state = { hogs: [], greasyFilter: false, sortType: "default" };

  componentDidMount = () => {
    this.fetchHogs();
  };

  fetchHogs = () => {
    fetch(HOG_URL)
      .then(resp => resp.json())
      .then(data => this.setState({ hogs: data }));
  };

  toggleGreasyFilter = () => {
    this.setState({
      greasyFilter: !this.state.greasyFilter
    });
  };

  handleSortTypeChange = event => {
    this.setState({
      sortType: event.target.value
    });
  };

  sortHogs = (hogs, sortType) => {
    if (sortType === "default") return hogs;

    if (sortType === "name")
      return hogs.sort((a, b) => a.name.localeCompare(b.name));

    if (sortType === "weight") return hogs.sort((a, b) => b.weight - a.weight);
  };

  // hideHog = hogId => {
  //   const
  // }

  render() {
    const pigsToRender = this.state.greasyFilter
      ? this.state.hogs.filter(hog => hog.greased === true)
      : this.state.hogs;

    const sortedHogsToRender = this.sortHogs(pigsToRender, this.state.sortType);

    return (
      <div className="App">
        <Nav
          toggleGreasyFilter={this.toggleGreasyFilter}
          greasyFilter={this.state.greasyFilter}
          sortType={this.state.sortType}
          handleSortTypeChange={this.handleSortTypeChange}
        />
        <HogContainer hogs={sortedHogsToRender} hideHog={this.hideHog} />
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import Player from "./components/Player";
import StationChooser from "./components/StationChooser";
import "./App.css";

import stations from "./stations";

class App extends Component {
  state = {
    currentStation: stations[5]
  };

  render() {
    return (
      <React.Fragment>
        <Player station={this.state.currentStation} />
        <StationChooser
          stations={stations}
          currentStation={this.state.currentStation}
          onStationChange={this.handleStationChange}
        />
      </React.Fragment>
    );
  }

  handleStationChange = e => {
    this.setState({ currentStation: stations[e.target.getAttribute("index")] });
  };
}

export default App;

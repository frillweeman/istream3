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
      <div style={{ textAlign: "center" }}>
        <Player station={this.state.currentStation} />
        <StationChooser
          stations={stations}
          currentStation={this.state.currentStation}
          onStationChange={this.handleStationChange}
        />
      </div>
    );
  }

  handleStationChange = e => {
    this.setState({
      currentStation: stations[e.currentTarget.getAttribute("index")]
    });
  };
}

export default App;

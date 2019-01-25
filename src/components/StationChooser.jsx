import React, { Component } from "react";
import Station from "./Station";

class StationChooser extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div className="row">
          {this.props.stations.map((station, i) => (
            <Station
              key={i}
              index={i}
              streamTitle={station.streamTitle}
              port={station.port}
              isActive={station.port === this.props.currentStation.port}
              onClick={this.props.onStationChange}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default StationChooser;

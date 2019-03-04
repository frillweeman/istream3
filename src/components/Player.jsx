import React, { Component } from "react";

const styles = {
  div: {
    width: "100%",
    paddingTop: "2.3em",
    paddingBottom: "0.3em",
    marginBottom: "2em",
    textAlign: "center",
    color: "#fff",
    position: "sticky",
    top: 0,
    background: "#222",
    zIndex: 5
  },
  nowPlaying: {
    fontWeight: "bold",
    fontSize: "1.7em",
    textTransform: "uppercase"
  },
  stationTitle: {}
};

class Player extends Component {
  state = {};

  render() {
    return (
      <div style={styles.div}>
        <h2 style={styles.nowPlaying}>Now Playing</h2>
        <h1 style={styles.stationTitle}> {this.props.station.streamTitle} </h1>
        <audio
          autoPlay
          ref="audio"
          src={`http://m1.mixhits.com:${this.props.station.port}/;stream.mp3`}
        />
      </div>
    );
  }

  componentDidUpdate = () => {
    this.refs.audio.load();
  };
}

export default Player;

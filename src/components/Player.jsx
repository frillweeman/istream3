import React, { Component } from "react";

const styles = {
  div: {
    width: "50%",
    margin: "auto",
    marginBottom: 20,
    textAlign: "center"
  }
};

class Player extends Component {
  state = {
    audioURL: ""
  };

  render() {
    return (
      <div style={styles.div}>
        <h2>Now Playing</h2>
        <h1> {this.props.station.streamTitle}</h1>
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

import React, { Component } from "react";

const styles = {
  icon: {
    height: 100,
    padding: 10
  },
  name: {
    marginLeft: 10,
    fontWeight: "bold"
  }
};

class Station extends Component {
  state = {};
  render() {
    return (
      <div
        className={"col-4" + (this.props.isActive ? " selected" : "")}
        style={styles.icon}
        onClick={this.props.onClick}
        index={this.props.index}
      >
        <img height="100%" src={`/img/${this.props.port}.png`} />
        <span style={styles.name}>{this.props.streamTitle}</span>
      </div>
    );
  }
}

export default Station;

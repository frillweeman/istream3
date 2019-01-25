import React, { Component } from "react";

const styles = {
  icon: {
    height: 50
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
        {this.props.streamTitle}
      </div>
    );
  }
}

export default Station;

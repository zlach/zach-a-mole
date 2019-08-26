import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

class Player extends Component {
  render() {
    return <h1>{this.props.player}</h1>;
  }
}

export default Player;

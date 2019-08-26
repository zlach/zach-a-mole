import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

class SelectPlayer extends Component {
  state = {
    score1: '000',
    score2: '000'
  };
  render() {
    return (
      <>
        <h1>Whack-a-Mole!</h1>
        <Link to='/player1'>Player 1</Link>
        <Link to='/player2'>Player 2</Link>
      </>
    );
  }
}

export default SelectPlayer;

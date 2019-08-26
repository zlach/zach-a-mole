import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import SelectPlayer from './components/SelectPlayer';
import Player from './components/Player';

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path='/' component={SelectPlayer} />
        <Switch>
          <Route exact path='/player1' render={() => <Player player='1' />} />
          <Route exact path='/player2' render={() => <Player player='2' />} />
        </Switch>
      </Router>
    );
  }
}

export default App;

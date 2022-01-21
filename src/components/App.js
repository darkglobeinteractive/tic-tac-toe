import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import Header from './Header';
import GameContainer from './GameContainer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <GameContainer />
    </div>
  );
}

const mapStateToProps = state => {
  console.log(state);
  return {}
}

export default connect(mapStateToProps)(App);

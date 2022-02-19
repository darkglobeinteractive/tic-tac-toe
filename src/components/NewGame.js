import React from 'react';
import { connect } from 'react-redux';
import { newGame } from '../actions';

const NewGame = props => {
  return (
    <button className="new-game" onClick={props.newGame}>New Game</button>
  );
}

export default connect(null, { newGame })(NewGame);

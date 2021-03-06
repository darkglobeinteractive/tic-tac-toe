import React from 'react';
import { connect } from 'react-redux';
import { newGame } from '../actions';

const NewGame = props => {

  // If the gameLog is empty, don't show the New Game button
  if (props.gameLog.length === 0) {
    return <></>;
  }
  return (
    <button className="new-game" onClick={props.newGame}>New Game</button>
  );
  
}

const mapStateToProps = state => {
  return {
    gameLog: state.gameLog
  }
}

export default connect(mapStateToProps, { newGame })(NewGame);

import React from 'react';
import { connect } from 'react-redux';
import { newGame } from '../actions';

const NewGame = props => {
  return (
    <button className={`new-game${props.gameLog.length > 0 ? '' : ' disabled'}`} onClick={props.newGame}>New Game</button>
  );
}

const mapStateToProps = state => {
  return {
    gameLog: state.gameLog
  }
}

export default connect(mapStateToProps, { newGame })(NewGame);

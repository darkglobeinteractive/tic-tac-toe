import React from 'react';
import { connect } from 'react-redux';
import { setSquare, toggleEditing } from '../actions';

const Square = props => {
  return (
    <div className={'ttt-square' + (props.square.isEditing ? ' editing-' + props.currentPlayer : '')}>
      <div className="ttt-display" onClick={() => props.toggleEditing(props.square)}>
        <span>{props.square.symbol}</span>
      </div>
      <div className="ttt-switch">
        <button className="play-x" onClick={() => props.setSquare(props.square, 'x')}>X</button>
        <button className="play-o" onClick={() => props.setSquare(props.square, 'o')}>O</button>
        <button onClick={() => props.setSquare(props.square, null)}>close</button>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    squares: state.squares,
    currentPlayer: state.currentPlayer
  }
}

export default connect(mapStateToProps, { setSquare, toggleEditing })(Square);

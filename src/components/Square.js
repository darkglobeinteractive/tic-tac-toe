import React from 'react';
import { connect } from 'react-redux';
import { setSquare, toggleEditing } from '../actions';

const Square = props => {

  // When a square is clicked, toggle it to edit if a symbol hasn't been set
  const handleClick = square => {
    if (square.symbol === null) {
      props.toggleEditing(props.square);
    }
  }

  // The isEditing value sets the class of editing-[currentPlayer] to display only the appropriate play button
  return (
    <div className={'ttt-square' + (props.square.isEditing ? ' editing-' + props.currentPlayer : '')}>
      <div className="ttt-display" onClick={() => handleClick(props.square)}>
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
    currentPlayer: state.currentPlayer
  }
}

export default connect(mapStateToProps, { setSquare, toggleEditing })(Square);

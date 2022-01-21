import React from 'react';
import { connect } from 'react-redux';
import Square from './Square';
import UndoMove from './UndoMove';

const GameContainer = props => {

  return (
    <div className="ttt-container">
      <div className="ttt-winner">
        <span>[Alert Message]</span>
      </div>
      <div className="ttt-board">
        {props.squares.map((square, index) => {
          return (
            <Square
              key={index}
              square={square}
            />
          );
        })}
      </div>
       <div className="ttt-controls">
         <button className="new-game">New Game</button>
         <UndoMove />
       </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    squares: state.squares
  }
}

export default connect(mapStateToProps)(GameContainer);

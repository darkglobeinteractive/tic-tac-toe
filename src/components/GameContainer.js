import React from 'react';
import { connect } from 'react-redux';
import NewGame from './NewGame';
import Square from './Square';
import UndoMove from './UndoMove';

const GameContainer = props => {

  return (
    <div className={`ttt-container${props.alertMessage !== '' ? ' show-winner' : ''}`}>
      <div className="ttt-winner">
        <span>{props.alertMessage}</span>
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
         <NewGame />
         <UndoMove />
       </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    alertMessage: state.alertMessage,
    squares: state.squares
  }
}

export default connect(mapStateToProps)(GameContainer);

import React from 'react';
import Square from './Square';
import UndoMove from './UndoMove';

const GameContainer = () => {
  return (
    <div className="ttt-container">
      <div className="ttt-winner">
        <span>[Alert Message]</span>
      </div>
      <div className="ttt-board">
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
      </div>
       <div className="ttt-controls">
         <button className="new-game">New Game</button>
         <UndoMove />
       </div>
    </div>
  );
}

export default GameContainer;

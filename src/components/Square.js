import React from 'react';

const Square = () => {
  return (
    <div className="ttt-square">
      <div className="ttt-display">
        <span>[Symbol]</span>
      </div>
      <div className="ttt-switch">
        <button className="play-x">X</button>
        <button className="play-o">O</button>
        <button>close</button>
      </div>
    </div>
  );
}

export default Square;

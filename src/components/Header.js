import React from 'react';

const Header = () => {
  return (
    <div className="header">
      <h1>Tic-Tac-Toe</h1>
      <ul className="scores">
        <li>X Wins: []</li>
        <li>O Wins: []</li>
      </ul>
    </div>
  );
}

export default Header;

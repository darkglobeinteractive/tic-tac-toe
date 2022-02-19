import React from 'react';
import { connect } from 'react-redux';

const Header = props => {
  return (
    <div className="header">
      <h1>Tic-Tac-Toe</h1>
      <ul className="scores">
        <li>X Wins: {props.wins.x}</li>
        <li>O Wins: {props.wins.o}</li>
      </ul>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    wins: state.wins
  }
}

export default connect(mapStateToProps)(Header);

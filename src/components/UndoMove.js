import React from 'react';
import { connect } from 'react-redux';
import { undoMove } from '../actions';

const UndoMove = props => {

  // Handle clicking the "Undo Last Move" button
  const handleUndo = () => {
    // Only do something if the gameLog array contains a move
    if (props.gameLog.length > 0) {
      // Determine the square ID contained in the last move
      const lastMoveId = props.gameLog.length - 1;
      // Trigger the action creator using the ID
      props.undoMove(props.gameLog[lastMoveId]);
    }
  }

  // If the gameLog is empty OR the alert message isn't empty (meaning game is over), then don't show the Undo button
  if (props.gameLog.length === 0 || props.alertMessage !== '') {
    return <React.Fragment />;
  }
  return (
    <button className="undo-move" onClick={handleUndo}>Undo Last Move</button>
  );

}

const mapStateToProps = state => {
  return {
    alertMessage: state.alertMessage,
    gameLog: state.gameLog
  }
}

export default connect(mapStateToProps, { undoMove })(UndoMove);

import { END_GAME, SQUARE_SET } from './types';

const setSquare = (square, symbol) => {

  // We are returning a function here because we need to check state for a winner before setting the square
  return (dispatch, getState) => {

    // We essentially need to create a temporary version of state that includes this new move
    // We iterate through the existing "squares" state using getState().squares.map() and update the square we are setting right now
    const s = getState().squares.map(sq => {
      if (sq.id === square.id) {
        return { ...square, symbol };
      } else {
        return sq;
      }
    });

    // Set some other variables we need
    let winner = null;

    // Test each winning scenario and set a winner if you can
    if (s[0].symbol !== null && s[0].symbol === s[1].symbol && s[1].symbol === s[2].symbol) { // Top 3 across
      winner = s[0].symbol;
    } else if  (s[3].symbol !== null && s[3].symbol === s[4].symbol && s[4].symbol === s[5].symbol) { // Middle 3 across
      winner = s[3].symbol;
    } else if (s[6].symbol !== null && s[6].symbol === s[7].symbol && s[7].symbol === s[8].symbol) { // Bottom 3 across
      winner = s[6].symbol;
    } else if (s[0].symbol !== null && s[0].symbol === s[3].symbol && s[3].symbol === s[6].symbol) { // Left 3 down
      winner = s[0].symbol;
    } else if (s[1].symbol !== null && s[1].symbol === s[4].symbol && s[4].symbol === s[7].symbol) { // Middle 3 down
      winner = s[1].symbol;
    } else if (s[2].symbol !== null && s[2].symbol === s[5].symbol && s[5].symbol === s[8].symbol) { // Right 3 down
      winner = s[2].symbol;
    } else if (s[0].symbol !== null && s[0].symbol === s[4].symbol && s[4].symbol === s[8].symbol) { // Top-Left diagonal
      winner = s[0].symbol;
    } else if (s[2].symbol !== null && s[2].symbol === s[4].symbol && s[4].symbol === s[6].symbol) { // Top-right diagonal
      winner = s[2].symbol;
    }

    // If the winner was set OR the current gameLog is 8 moves long, end the game
    if (winner !== null || getState().gameLog.length === 8) {
      const alertMessage = (winner === null ? 'And... we have a draw!' : winner + ' is the winner!');
      dispatch({
        type: END_GAME,
        payload: {
          square,
          symbol,
          winner,
          alertMessage
        }
      });

    // Otherwise set the square
    } else {
      dispatch({
        type: SQUARE_SET,
        payload: { square, symbol }
      });
    }

  }

}

export default setSquare;

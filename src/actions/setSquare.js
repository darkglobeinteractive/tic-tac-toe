import { END_GAME, SQUARE_SET } from './types';

const setSquare = (square, symbol) => {

  // We are returning a function here because we need to check state for a winner before setting the square
  return (dispatch, getState) => {

    // Set variable for squares and default values for other variables
    const s = getState().squares.map(sq => {
      if (sq.id === square.id) {
        return { ...square, symbol };
      } else {
        return sq;
      }
    });
    let winner = '';
    let alertMessage = '';

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

    console.log('Winner: '+winner);
    console.log(s);

    if (winner !== '') {
      alertMessage = winner + ' is the winner!';
      dispatch({
        type: END_GAME,
        payload: {
          square,
          symbol,
          winner,
          alertMessage
        }
      });
    } else if (winner === '' && getState().gameLog.length === 8) {
      alertMessage = 'And... we have a draw!';
      dispatch({
        type: END_GAME,
        payload: {
          square,
          symbol,
          winner: null,
          alertMessage
        }
      });
    } else {
      dispatch({
        type: SQUARE_SET,
        payload: { square, symbol }
      });
    }

  }

}

export default setSquare;

import { NEW_GAME, SQUARE_SET, UNDO_MOVE } from '../actions/types';

const INITIAL_STATE = 'x';

export default (currentPlayer = INITIAL_STATE, action) => {

  if (action.type === SQUARE_SET) {
    if (action.payload.symbol === null) {
      return currentPlayer;
    } else {
      return (currentPlayer === 'x' ? 'o' : 'x');
    }
  }

  if (action.type === UNDO_MOVE) {
    return (currentPlayer === 'x' ? 'o' : 'x');
  }

  if (action.type === NEW_GAME) {
    return INITIAL_STATE;
  }

  return currentPlayer;

}

import { NEW_GAME, SQUARE_SET, UNDO_MOVE } from '../actions/types';

const INITIAL_STATE = 'x';

export default (state = INITIAL_STATE, action) => {

  if (action.type === SQUARE_SET) {

    // The close button was clicked inside a toggled-to-edit square
    if (action.payload.symbol === null) {
      return state;

    // A symbol button was clicked inside a toggled-to-edit square so the next player is set to play
    } else {
      return (state === 'x' ? 'o' : 'x');
    }

  }

  // Switch the user if we're going back a move OR if we're starting a new game
  if (action.type === UNDO_MOVE || action.type === NEW_GAME) {
    return (state === 'x' ? 'o' : 'x');
  }

  return state;

}

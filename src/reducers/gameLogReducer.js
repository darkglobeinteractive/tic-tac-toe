import { NEW_GAME, SQUARE_SET, UNDO_MOVE } from '../actions/types';

export default (state = [], action) => {

  if (action.type === SQUARE_SET) {

    // The close button was clicked inside a toggled-to-edit square
    if (action.payload.symbol === null) {
      return state;

    // A symbol button was clicked inside a toggled-to-edit square
    } else {
      return [...state, action.payload.square.id];
    }

  }

  // We will undo the last move by returning everything but the last item in the gameLog array
  if (action.type === UNDO_MOVE) {
    return state.filter((element, index, array) => {
      return index < (array.length - 1);
    });
  }

  // Return an empty array if we're starting over
  if (action.type === NEW_GAME) {
    return [];
  }

  return state;

}

import { END_GAME, NEW_GAME } from '../actions/types';

export default (state = '', action) => {

  // This is triggered when a win or tie is detected in /actions/setSquare.js
  if (action.type === END_GAME) {
    return action.payload.alertMessage;

  // This is triggered when the New Game button is clicked
  } else if (action.type === NEW_GAME) {
    return '';
  }

  return state;
  
}

import { END_GAME, NEW_GAME } from '../actions/types';

export default (alertMessage = '', action) => {
  if (action.type === END_GAME) {
    return action.payload.alertMessage;
  } else if (action.type === NEW_GAME) {
    return '';
  }
  return alertMessage;
}

import { END_GAME } from '../actions/types';

export default (wins = { x: 0, o: 0}, action) => {

  if (action.type === END_GAME) {
    if (action.payload.winner !== null) {
      return { ...wins, [action.payload.winner]: wins[action.payload.winner] + 1 };
    } else {
      return wins;
    }
  }

  return wins;
}

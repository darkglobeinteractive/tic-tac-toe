import { NEW_GAME, SQUARE_SET, UNDO_MOVE } from '../actions/types';

export default (gameLog = [], action) => {
  if (action.type === SQUARE_SET) {
    if (action.payload.symbol !== null) {
      return [...gameLog, action.payload.square.id];
    } else {
      return gameLog;
    }
  }
  if (action.type === UNDO_MOVE) {
    gameLog.pop();
    return gameLog;
  }
  if (action.type === NEW_GAME) {
    return [];
  }
  return gameLog;
}

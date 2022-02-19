import { UNDO_MOVE } from './types';

const undoMove = (id) => {
  return {
    type: UNDO_MOVE,
    payload: {
      lastSquareId: id
    }
  }
}

export default undoMove;

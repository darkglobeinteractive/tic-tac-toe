import { EDITING_TOGGLED, END_GAME, NEW_GAME, SQUARE_SET, UNDO_MOVE } from '../actions/types';

const INITIAL_STATE = [
  {
    'id': 1,
    'symbol': null,
    'isEditing': false
  },
  {
    'id': 2,
    'symbol': null,
    'isEditing': false
  },
  {
    'id': 3,
    'symbol': null,
    'isEditing': false
  },
  {
    'id': 4,
    'symbol': null,
    'isEditing': false
  },
  {
    'id': 5,
    'symbol': null,
    'isEditing': false
  },
  {
    'id': 6,
    'symbol': null,
    'isEditing': false
  },
  {
    'id': 7,
    'symbol': null,
    'isEditing': false
  },
  {
    'id': 8,
    'symbol': null,
    'isEditing': false
  },
  {
    'id': 9,
    'symbol': null,
    'isEditing': false
  }
];

export default (squares = INITIAL_STATE, action) => {

  if (action.type === EDITING_TOGGLED) {
    return squares.map(square => {
      if (square.id === action.payload.id) {
        return { ...square, isEditing: true };
      } else {
        return {...square, isEditing: false };
      }
    });
  }

  // We are setting the square, even if it's the last move, so the game board is complete
  if (action.type === SQUARE_SET || action.type === END_GAME) {
    return squares.map(square => {
      if (square.id === action.payload.square.id) {
        return { ...square, symbol: action.payload.symbol, isEditing: false };
      } else {
        return square;
      }
    });
  }

  // If we are undoing a move, we want to set the symbol to null and tur
  if (action.type === UNDO_MOVE) {
    return squares.map(square => {
      if (square.id === action.payload.lastSquareId) {
        return { ...square, symbol: null };
      } else {
        return square;
      }
    });
  }

  // A new game just resets the board
  if (action.type === NEW_GAME) {
    return INITIAL_STATE;
  }

  return squares;

}

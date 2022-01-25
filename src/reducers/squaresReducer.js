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
  if (action.type === 'EDITING_TOGGLED') {
    return squares.map(square => {
      if (square.id === action.payload.id && square.symbol === null) {
        return { ...square, isEditing: !square.isEditing };
      } else {
        return {...square, isEditing: false };
      }
    });
  }
  if (action.type === 'SQUARE_SET') {
    return squares.map(square => {
      if (square.id === action.payload.square.id) {
        if (action.payload.symbol !== null) {
          return { ...square, symbol: action.payload.symbol, isEditing: false };
        } else {
          return { ...square, isEditing: false };
        }
      } else {
        return square;
      }
    });
  }
  return squares;
}

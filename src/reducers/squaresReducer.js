export default (squares = [], action) => {
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

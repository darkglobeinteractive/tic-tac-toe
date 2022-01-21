export default (currentPlayer = '', action) => {
  if (action.type === 'SQUARE_SET') {
    if (action.payload.symbol === null) {
      return currentPlayer;
    } else {
      return (currentPlayer === 'x' ? 'o' : 'x');
    }
  }
  return currentPlayer;
}

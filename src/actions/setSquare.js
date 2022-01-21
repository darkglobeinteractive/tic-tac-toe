const setSquare = (square, symbol) => {
  return {
    type: 'SQUARE_SET',
    payload: { square, symbol }
  }
}

export default setSquare;

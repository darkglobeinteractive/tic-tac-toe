export default (gameLog = [], action) => {
  if(action.type === 'SQUARE_SET') {
    return [...gameLog, action.payload.square.id];
  }
  return gameLog;
}

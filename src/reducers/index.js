import { combineReducers } from 'redux';
import currentPlayerReducer from './currentPlayerReducer';
import gameLogReducer from './gameLogReducer';
import squaresReducer from './squaresReducer';

export default combineReducers({
  currentPlayer: currentPlayerReducer,
  gameLog: gameLogReducer,
  squares: squaresReducer
});

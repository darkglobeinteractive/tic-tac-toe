import { combineReducers } from 'redux';
import alertMessageReducer from './alertMessageReducer';
import currentPlayerReducer from './currentPlayerReducer';
import gameLogReducer from './gameLogReducer';
import squaresReducer from './squaresReducer';
import winsReducer from './winsReducer';

export default combineReducers({
  alertMessage: alertMessageReducer,
  currentPlayer: currentPlayerReducer,
  gameLog: gameLogReducer,
  squares: squaresReducer,
  wins: winsReducer
});

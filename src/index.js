import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/App';
import reducers from './reducers';

const defaultState = {
  currentPlayer: 'x',
  squares: [
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
  ]
}

const store = createStore(reducers, {
  currentPlayer: defaultState.currentPlayer,
  squares: defaultState.squares
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById('root')
);

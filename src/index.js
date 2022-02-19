import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

// Import core App component and reducers
import App from './components/App';
import reducers from './reducers';

// This allows the Redux DevTools browser extension to work
// Note the need to import compose from the redux module
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create store using reducers and needed middleware
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);

// Wrap core App component in Provider component from react-redux to add context throughout child components
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

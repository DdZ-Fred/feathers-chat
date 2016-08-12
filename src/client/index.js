import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import { Provider } from 'react-redux';

import rootReducer from './reducers';
import App from './components/App';

const createStoreWithMiddleware = applyMiddleware(
  promiseMiddleware
)(createStore);

const store = createStoreWithMiddleware(rootReducer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);

import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import { Provider } from 'react-redux';

import io from 'socket.io-client';
import feathers from 'feathers/client';
import fSocketio from 'feathers-socketio/client';
import fHooks from 'feathers-hooks';
import fAuthentication from 'feathers-authentication/client';

import rootReducer from './reducers';
import FeathersApp from './components/FeathersApp';
// import MessageListContainer from './containers/MessageListContainer';
import MessageList from './components/MessageList';

// Feathers Init
const socket = io('http://localhost:3030');
const app = feathers()
  .configure(fSocketio(socket))
  .configure(fHooks())
  .configure(fAuthentication({
    storage: window.localStorage,
  }));

// React-Redux Init
const createStoreWithMiddleware = applyMiddleware(
  promiseMiddleware
)(createStore);

const store = createStoreWithMiddleware(rootReducer);

app.authenticate().then(() => {
  render(
    <Provider store={store}>
      <FeathersApp app={app}>
        <MessageList />
      </FeathersApp>
    </Provider>,
    document.getElementById('app'));
});

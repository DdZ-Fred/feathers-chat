import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import reducerMessages from './reducerMessages';

const rootReducer = combineReducers({
  messages: reducerMessages,
  form: formReducer,
});

export default rootReducer;

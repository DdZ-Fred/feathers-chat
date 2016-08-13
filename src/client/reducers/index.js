import { combineReducers } from 'redux';
import reducerMessages from './reducerMessages';

const rootReducer = combineReducers({
  mesages: reducerMessages,
});

export default rootReducer;

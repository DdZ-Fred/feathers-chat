import {
  FETCH_MESSAGES,
  CREATE_MESSAGE,
  ADD_MESSAGE,
  REMOVE_MESSAGE,
} from '../actions/creatorsMessages';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_MESSAGES: {
      return action.payload.data;
    }
    case CREATE_MESSAGE: {
      console.log('CREATE_MESSAGE received', action.payload);
      // As the payload was a Promise and was resolved by redux-promise middleware
      return [
        action.payload,
        ...state,
      ];
    }
    case ADD_MESSAGE: {
      // payload has been a simple object the whole time
      return [
        action.payload,
        ...state,
      ];
    }
    case REMOVE_MESSAGE: {
      return [

      ];
    }
    default: {
      return state;
    }
  }
}

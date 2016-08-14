import {
  FETCH_MESSAGES,
  CREATE_MESSAGE,
  UPDATE_MESSAGE,
  PATCH_MESSAGE,
  REMOVE_MESSAGE,
} from '../actions/actionsMessages';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_MESSAGES: {
      return action.payload.data;
    }
    case CREATE_MESSAGE: {
      // payload has been a simple object the whole time
      return [
        action.payload,
        ...state,
      ];
    }
    case UPDATE_MESSAGE: {
      console.log(`${UPDATE_MESSAGE} received`, action.payload);
      // Find target message in state
      // Replace it
      return state;
    }
    case PATCH_MESSAGE: {
      console.log(`${PATCH_MESSAGE} received`, action.payload);
      // Find target message in state
      // Replace it
      return state;
    }
    case REMOVE_MESSAGE: {
      console.log(`${REMOVE_MESSAGE} received`, action.payload);
      // Find target message in state
      // Remove it
      return state;
    }
    default: {
      return state;
    }
  }
}

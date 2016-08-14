export const FETCH_MESSAGES = 'FETCH_MESSAGES';
export const CREATE_MESSAGE = 'CREATE_MESSAGE';
// UPDATE IS TO BE USED WHEN A RESOURCE NEEDS TO BE REPLACE
// (takes the complete updated resource)
export const UPDATE_MESSAGE = 'UPDATE_MESSAGE';
// PATCH IS TO BE USED WHEN A RESOURCE NEEDS TO BE PATCHE
// (is a partial update, data passed in merged)
export const PATCH_MESSAGE = 'PATCH_MESSAGE';
export const REMOVE_MESSAGE = 'REMOVE_MESSAGE';

export function fetchMessages(messageService) {
  console.log('FETCHING MESSAGES');
  return {
    type: FETCH_MESSAGES,
    payload: messageService.find(),
  };
}

/**
 * ADD TO STATE A PREVIOUSLY CREATED MESSAGE.
 * THE MESSAGE OBJECT IS RECEIVED BY THE SERVICE LISTENER
 */
export function createMessage(message) {
  return {
    type: CREATE_MESSAGE,
    payload: message,
  };
}

export function updateMessage(updatedMessage) {
  return {
    type: UPDATE_MESSAGE,
    payload: updatedMessage,
  };
}

export function patchMessage(patchedMessage) {
  return {
    type: PATCH_MESSAGE,
    payload: patchedMessage,
  };
}

export function removeMessage(removedMessage) {
  return {
    type: REMOVE_MESSAGE,
    payload: removedMessage,
  };
}

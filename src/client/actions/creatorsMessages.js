export const FETCH_MESSAGES = 'FETCH_MESSAGES';
export const CREATE_MESSAGE = 'CREATE_MESSAGE';
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const REMOVE_MESSAGE = 'REMOVE_MESSAGE';

export function fetchMessages(messageService) {
  console.log('FETCHING MESSAGES');
  return {
    type: FETCH_MESSAGES,
    payload: messageService.find(),
  };
}

export function createMessage(message, messageService) {
  console.log('createMessage action sent!');
  return {
    type: CREATE_MESSAGE,
    payload: messageService.create(message),
  };
}

/**
 * ADD TO STATE AN ALREADY CREATED MESSAGE.
 * THE MESSAGE OBJECT IS RECEIVED BY THE SERVICE LISTENER
 */
export function addMessage(message) {
  return {
    type: ADD_MESSAGE,
    payload: message,
  };
}

export function removeMessage(id, messageService) {
  return {
    type: REMOVE_MESSAGE,
    payload: messageService.remove(id),
  };
}

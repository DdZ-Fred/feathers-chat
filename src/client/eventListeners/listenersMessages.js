import { createMessage,
  updateMessage,
  patchMessage,
  removeMessage,
} from '../actions/actionsMessages';

export default function (messageService, dispatch) {
  messageService
    .on('created', message => dispatch(createMessage(message)))
    .on('updated', updatedMessage => dispatch(updateMessage(updatedMessage)))
    .on('patched', patchedMessage => dispatch(patchMessage(patchedMessage)))
    .on('removed', removedMessage => dispatch(removeMessage(removedMessage)));
}

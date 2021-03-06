import React, { PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { fetchMessages } from '../actions/actionsMessages';
import initMessagesListeners from '../eventListeners/listenersMessages';
import Message from './Message';

const contextTypes = {
  feathers: PropTypes.object,
};

const propTypes = {
  messages: PropTypes.array.isRequired,
  fetchMessages: PropTypes.func.isRequired,
};

class MessageList extends React.Component {

  constructor(props) {
    super(props);

    // Feathers Services Init and Listeners
    this.messageService = null;

    // Handlers bindings
    this.handleCreateMessage = this.handleCreateMessage.bind(this);
  }

  componentWillMount() {
    this.messageService = this.context.feathers.service('messages');
    console.log('MessageList is about to render');
    this.props.fetchMessages(this.messageService);

    initMessagesListeners(this.messageService, this.props.dispatch);
  }

  handleCreateMessage(values) {
    console.log('VALUES', values);
    this.messageService.create(values);
  }

  renderMessages() {
    if (!this.props.messages.length) {
      return <li>No message yet</li>;
    }
    return this.props.messages.map((message) => (
      <Message key={message._id} message={message}/>
    ));
  }

  render() {
    const {
      fields: { text },
      handleSubmit,
    } = this.props;

    return (
      <div>
        <ul className="list-group">
          {this.renderMessages()}
        </ul>
        <hr/>
        <hr/>
        <h3>write a message</h3>
        <form onSubmit={handleSubmit(this.handleCreateMessage)}>
          <div className="form-group">
            <label htmlFor="text">Text:</label>
            <input className="form-control" type="text" placeholder="Enter your message" {...text}/>
          </div>
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}
MessageList.contextTypes = contextTypes;
MessageList.propTypes = propTypes;

function mapStateToProps(state) {
  return {
    messages: state.messages,
  };
}

export default reduxForm({
  form: 'createMessageForm',
  fields: ['text'],
}, mapStateToProps, {
  fetchMessages,
})(MessageList);

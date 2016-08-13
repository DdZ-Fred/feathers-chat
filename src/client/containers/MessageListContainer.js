import React, { PropTypes } from 'react';
import withFeathers from '../hoc/withFeathers';
import MessageList from '../components/MessageList';

const propTypes = {
  feathers: PropTypes.object.isRequired,
};

class MessageListContainer extends React.Component {

  constructor(props) {
    super(props);

    this.messageService = this.props.feathers.service('messages');

    this.state = {
      messages: [],
    };
  }

  componentWillMount() {
    this.messageService.find()
      .then(({ data }) => this.setState({ messages: data }));

    this.messageService.on('created', message => this.setState({
      messages: [
        message,
        ...this.state.messages,
      ],
    }));
  }

  handleCreateMessage(message) {
    this.messageService.create(message);
  }

  render() {
    return (
      <MessageList
        messages={this.state.messages}
        createMessage={this.handleCreateMessage}/>
    );
  }
}
MessageListContainer.propTypes = propTypes;

export default withFeathers(MessageListContainer);

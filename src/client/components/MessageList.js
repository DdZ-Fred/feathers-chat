import React, { PropTypes } from 'react';

const propTypes = {
  messages: PropTypes.array.isRequired,
};

const defaultProps = {
  messages: [],
};

class MessageList extends React.Component {

  render() {
    return <div>
    <ul>
      {this.props.messages.map((m) => (
        <li>{`Message #${m._id}: ${m.title}`}</li>
      ))}
    </ul>
    </div>;
  }
}
MessageList.propTypes = propTypes;
MessageList.defaultProps = defaultProps;

export default MessageList;

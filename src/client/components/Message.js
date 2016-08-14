import React, { PropTypes } from 'react';

const propTypes = {
  message: PropTypes.object.isRequired,
};

class Message extends React.Component {
  render() {
    const { _id, text, userId, createdAt } = this.props.message;

    return (
      <li>
        <span>{`${_id}: ${text}`}</span>
        <span>{createdAt}</span>
      </li>
    );
  }
}
Message.propTypes = propTypes;

export default Message;

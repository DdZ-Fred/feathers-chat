import React, { PropTypes } from 'react';

const propTypes = {
  app: PropTypes.object.isRequired,
};

const childContextTypes = {
  feathers: PropTypes.object,
};

class FeathersApp extends React.Component {

  getChildContext() {
    return {
      feathers: this.props.app,
    };
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
FeathersApp.propTypes = propTypes;
FeathersApp.childContextTypes = childContextTypes;

export default FeathersApp;

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class HeaderTextElement extends Component {
  static propTypes = {
    color: PropTypes.string.isRequired,
    children: PropTypes.any,
  };
  static defaultProps = {
    color: '#000000',
  };

  render() {
    return (
      <p>Hello there!</p>
    );
  }
}

export default HeaderTextElement;

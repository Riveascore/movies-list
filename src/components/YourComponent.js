import React from 'react';
import PropTypes from 'prop-types';
import '../stories/your_component.css';

export const YourComponent = ({ primary, color, size, label, ...props }) => {
  // const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <h1
      className="storybook-your-component"
      style={color && { color }}
      {...props}
    >
      {label}
    </h1>
  );
};

YourComponent.propTypes = {
  color: PropTypes.string
};

YourComponent.defaultProps = {
  color: null
};

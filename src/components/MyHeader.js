// title
// image
// overview

import React from 'react';
import PropTypes from 'prop-types';
import '../stories/movie_list_item.css';

export const MyHeader = ({ title, ...props }) => {
  // const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <div>
      <h1
        className="storybook-movie-list-item"
      >
        {title}
      </h1>
    </div>
  );
};

// export default MyHeader;

MyHeader.propTypes = {
  // color: PropTypes.string
  title: "Title"
};

MyHeader.defaultProps = {
  // color: null
  title: "Title"
};


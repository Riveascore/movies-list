// title
// image
// overview

import React from 'react';
// import PropTypes from 'prop-types';
import '../stories/movie_list_item.css';

export const MovieListItem = ({ title, image, overview, ...props }) => {
  // const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <div>
      <h1
        className="storybook-movie-list-item"
        {...props}
      >
        {title}
      </h1>
      <img
        src={""}
        alt=""
      />
      <p>
        {overview}
      </p>
    </div>
  );
};

// MovieListItem.propTypes = {
//   color: PropTypes.string
// };

// MovieListItem.defaultProps = {
//   color: null
// };


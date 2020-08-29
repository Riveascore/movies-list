// title
// image
// overview

import React from 'react';
// import PropTypes from 'prop-types';
import '../stories/movie_list_item.css';

const MovieListItem = ({ title, uri, overview, ...props }) => {
  // const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <div>
      <h1
        className="storybook-movie-list-item"
      >
        {title}
      </h1>
      <img
        src={uri}
        alt={title}
      />
      <p>
        {overview}
      </p>
    </div>
  );
};

export default MovieListItem;

// MovieListItem.propTypes = {
//   color: PropTypes.string
// };

// MovieListItem.defaultProps = {
//   color: null
// };


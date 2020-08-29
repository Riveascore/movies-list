// title
// image
// overview

import React from 'react';
import PropTypes from 'prop-types';
import '../stories/movie_list_item.css';

export const MovieListItem = ({ title, uri, overview, ...props }) => {
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

// export default MovieListItem;

MovieListItem.propTypes = {
  // color: PropTypes.string
  title: "Title",
  uri: 'https://i.pinimg.com/originals/d7/87/da/d787da8630ce5dfcd2d7f375b03efc55.png',
  overview: "Overview"
};

MovieListItem.defaultProps = {
  // color: null
  title: "Title",
  uri: 'https://i.pinimg.com/originals/d7/87/da/d787da8630ce5dfcd2d7f375b03efc55.png',
  overview: "Overview"
};


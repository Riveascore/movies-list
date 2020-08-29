// title
// image
// overview

import React from 'react';
// import PropTypes from 'prop-types';
import '../stories/movie_list.css';
import movies from '../data/movies';


import MovieListItem from './MovieListItem';

export const MovieList = ({ ...props }) => {
  // const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <div>
      {movies.map(movie => <MovieListItem key={movie.title} {...movie} />)}
    </div>
  );
};

// MovieListItem.propTypes = {
//   color: PropTypes.string
// };

// MovieListItem.defaultProps = {
//   color: null
// };


// title
// image
// overview

import React from 'react';
// import PropTypes from 'prop-types';
import '../stories/movie_list.css';
import movies from '../data/movies';


import MovieListItem from './MovieListItem';

const MovieList = ({ ...props }) => {
  // const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <div>
      {movies.map(movie => <MovieListItem key={movie.title} {...movie} />)}
    </div>
  );
};

export default MovieList;

// MovieList.propTypes = {
//   color: PropTypes.string
// };

// MovieList.defaultProps = {
//   color: null
// };


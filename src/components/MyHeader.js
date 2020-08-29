// title
// image
// overview

import React from 'react';
import PropTypes from 'prop-types';
import '../stories/movie_list_item.css';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/core/MenuIcon';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';

export const MyHeader = ({ title, ...props }) => {
  // const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    // <div>
    //   <h1
    //     className="storybook-movie-list-item"
    //   >
    //     {title}
    //   </h1>
    // </div>
    <AppBar position="static">
      <Toolbar>
        {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton> */}
        {/* <Typography variant="h6" className={classes.title}> */}
        <Typography variant="h6" className="">
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
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


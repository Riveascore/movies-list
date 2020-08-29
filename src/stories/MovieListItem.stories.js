import React from 'react';

import { MovieListItem } from '../components/MovieListItem';

export default {
  title: 'Example/MovieListItem',
  component: MovieListItem
};

const Template = (args) => <MovieListItem {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: "Title",
  uri: 'https://i.pinimg.com/originals/d7/87/da/d787da8630ce5dfcd2d7f375b03efc55.png',
  overview: "Overview"
};

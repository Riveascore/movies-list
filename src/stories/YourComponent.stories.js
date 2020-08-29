// YourComponent.stories.js

import React from 'react';
import { YourComponent } from '../components/YourComponent';

// This default export determines where you story goes in the story list
export default {
  title: 'YourComponent',
  component: YourComponent,
};

const Template = (args) => <YourComponent {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
  label: 'Heading'
};

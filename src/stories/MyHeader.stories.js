import React from 'react';

import { MyHeader } from '../components/MyHeader';

export default {
  title: 'Example/MyHeader',
  component: MyHeader
};

const Template = (args) => <MyHeader {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: "Title"
};

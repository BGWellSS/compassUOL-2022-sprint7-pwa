import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Search from '.';


export default {
  title: 'Components/Search Bar',
  component: Search,
} as ComponentMeta<typeof Search>;

const Template: ComponentStory<typeof Search> = (args) => <Search {...args} />;

export const storySearch = Template.bind({});
storySearch.args = {
  placeholder: 'Search for products or brands.....'
};

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import SearchBar from '.';


export default {
  title: 'Components/Search Bar',
  component: SearchBar,
} as ComponentMeta<typeof SearchBar>;

const Template: ComponentStory<typeof SearchBar> = (args) => <SearchBar {...args} />;

export const lightBar = Template.bind({});
lightBar.args = {
  placeholder: 'Search for products or brands.....'
};

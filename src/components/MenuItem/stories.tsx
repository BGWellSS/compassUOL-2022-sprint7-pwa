import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import MenuItem from '.';

export default {
  title: 'Components/Menu Item',
  component: MenuItem,
} as ComponentMeta<typeof MenuItem>;

const Template: ComponentStory<typeof MenuItem> = (args) => <MenuItem {...args} />;

export const exemple = Template.bind({});
exemple.args = {
  children: 'Handbags',
  link: '404.html',
};

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Menu from '.';

export default {
  title: 'Components/Menu',
  component: Menu,
} as ComponentMeta<typeof Menu>;

const Template: ComponentStory<typeof Menu> = (args) => <Menu {...args} />;

export const exemple = Template.bind({});
exemple.args = {};

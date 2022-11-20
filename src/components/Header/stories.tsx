import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Header from '.';

export default {
  title: 'Components/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const exemple = Template.bind({});
exemple.args = {};

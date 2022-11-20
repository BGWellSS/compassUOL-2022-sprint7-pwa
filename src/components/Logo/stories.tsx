import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Logo from '.';

export default {
  title: 'Components/Logo',
  component: Logo,
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

export const exemple = Template.bind({});
exemple.args = {
  link: '404.html',
};

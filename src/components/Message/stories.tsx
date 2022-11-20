import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Message from '.';

export default {
  title: 'Components/Message',
  component: Message,
} as ComponentMeta<typeof Message>;

const Template: ComponentStory<typeof Message> = (args) => <Message {...args} />;

export const exemple = Template.bind({});
exemple.args = {
  message: 'We are currently experiencing local customs clearance delays. For the latest updates, please check your order status',
  link: '404.html'
};

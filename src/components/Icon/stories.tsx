import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Icon from ".";


export default {
  title: "Components/Icons",
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const storyIcon = Template.bind({});
storyIcon.args = {};

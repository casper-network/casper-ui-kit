import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Button, ButtonProps } from '../../components/Button';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta<typeof Button>;

// Create a master template for mapping args to render the Button component
const Template: StoryFn<typeof Button> = (args: ButtonProps) => (
  <Button {...args} />
);

const ChildText = 'Button';

const clickActionShoutOut = (storyName: string) => {
  // eslint-disable-next-line no-console
  console.log(`You've clicked the ${storyName} button`);
};

export const Base = Template.bind({});

Base.args = {
  children: ChildText,
  onClick: () => clickActionShoutOut('Base'),
  type: 'button',
};

export const RedButton = Template.bind({});

RedButton.args = {
  children: ChildText,
  onClick: () => clickActionShoutOut('RedButton'),
  color: 'white',
  bgColor: 'red',
  type: 'button',
};

export const DisabledButton = Template.bind({});

DisabledButton.args = {
  children: ChildText,
  onClick: () => clickActionShoutOut('DisabledButton'),
  color: 'white',
  bgColor: 'purple',
  type: 'button',
  disabled: true,
};

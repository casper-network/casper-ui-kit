import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
// import { within } from '@storybook/testing-library';
// import { expect } from '@storybook/jest';
import { Button, ButtonProps } from '../../components/Button';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta<typeof Button>;

// Create a master template for mapping args to render the Button component
const Template: StoryFn<typeof Button> = (args: ButtonProps) => (
  <Button {...args} />
);

const ChildText = <p>Button</p>;

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

// Base.play = async ({ canvasElement }) => {
//   const canvas = within(canvasElement);
//   const baseButton = await canvas.getByRole('button');
//   await expect(baseButton).toHaveStyle('background-color: blue');
// };

export const RedButton = Template.bind({});

RedButton.args = {
  children: ChildText,
  onClick: () => clickActionShoutOut('RedButton'),
  color: 'red',
  type: 'button',
};

export const DisabledButton = Template.bind({});

DisabledButton.args = {
  children: ChildText,
  onClick: () => clickActionShoutOut('DisabledButton'),
  color: 'purple',
  type: 'button',
  isDisabled: true,
};

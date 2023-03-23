import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { withTests } from '@storybook/addon-jest';
import results from '../../../.jest-test-results.json';
import { Button, ButtonProps } from '../../components/Button';

export default {
  title: 'Components/Button',
  component: Button,
  decorators: [withTests({ results })],
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

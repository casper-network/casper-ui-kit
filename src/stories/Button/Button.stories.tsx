import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ButtonProps } from 'src/components/Button/Button';
import { Button } from '../../components/Button';

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

// Create a master template for mapping args to render the Button component
const Template: ComponentStory<typeof Button> = (args: ButtonProps) => (
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

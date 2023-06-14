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
  bgColor: '#02c1b0',
  borderRadius: 10,
  borderWidth: 2,
  borderColor: '#02c1b0',
  hoverBgColor: 'transparent',
  hoverBorderColor: '#02c1b0',
  focusBorderColor: '#02c1b0',
  hoverFontColor: '#02c1b0',
  hoverBgColorTransitionDuration: 300,
  children: ChildText,
  onClick: () => clickActionShoutOut('Base'),
  type: 'button',
};

export const RedButton = Template.bind({});

RedButton.args = {
  bgColor: 'red',
  borderRadius: 10,
  borderWidth: 2,
  borderColor: 'red',
  hoverBgColor: 'transparent',
  hoverFontColor: 'red',
  focusBorderColor: 'red',
  hoverBgColorTransitionDuration: 300,
  children: ChildText,
  onClick: () => clickActionShoutOut('Required Button'),
  type: 'button',
};

export const DisabledButton = Template.bind({});

DisabledButton.args = {
  bgColor: 'grey',
  borderRadius: 10,
  borderWidth: 2,
  children: ChildText,
  disabled: true,
};

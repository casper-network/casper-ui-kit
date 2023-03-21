import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import {
  ButtonToggle,
  ButtonToggleProps,
} from '../../components/Toggles/ButtonToggle';

export default {
  title: 'Components/Toggles',
  component: ButtonToggle,
} as Meta<typeof ButtonToggle>;

const clickActionShoutOut = (storyName: string) => {
  // eslint-disable-next-line no-console
  console.log(`You've clicked the ${storyName} toggle`);
};

const Template: StoryFn<typeof ButtonToggle> = (args: ButtonToggleProps) => (
  <ButtonToggle {...args} />
);

export const Base = Template.bind({});

Base.args = {
  toggleOptions: ['English', 'Deutsch', 'Spanish'],
  onToggle: () => clickActionShoutOut('Base'),
};

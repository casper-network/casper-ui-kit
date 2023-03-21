import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import {
  BaseToggle,
  BaseToggleProps,
} from '../../components/Toggles/BaseToggle';

export default {
  title: 'Components/Toggles',
  component: BaseToggle,
} as Meta<typeof BaseToggle>;

const Template: StoryFn<typeof BaseToggle> = (args: BaseToggleProps) => (
  <BaseToggle {...args} />
);

const clickActionShoutOut = (storyName: string) => {
  // eslint-disable-next-line no-console
  console.log(`You've clicked the ${storyName}`);
};

export const Toggle = Template.bind({});

Toggle.args = {
  toggleOptions: {
    left: 'Left Option',
    right: 'Right Option',
  },
  onToggle: () => clickActionShoutOut('Toggle'),
};

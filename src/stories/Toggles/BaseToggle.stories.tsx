import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import {
  BaseToggle,
  BaseToggleProps,
} from '../../components/Toggles/BaseToggle';

export default {
  title: 'Components/Toggles',
  component: BaseToggle,
} as ComponentMeta<typeof BaseToggle>;

const Template: ComponentStory<typeof BaseToggle> = (args: BaseToggleProps) => (
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

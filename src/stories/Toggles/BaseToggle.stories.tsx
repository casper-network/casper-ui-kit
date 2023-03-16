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

// Create a master template for mapping args to render the Button component
const Template: ComponentStory<typeof BaseToggle> = (args: BaseToggleProps) => (
  <BaseToggle {...args} />
);

export const Toggle = Template.bind({});

Toggle.args = {
  toggleOptions: {
    left: 'Left Option',
    right: 'Right Option',
  },
};

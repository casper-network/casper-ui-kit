import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Checkbox, CheckboxProps } from '../../components/Checkbox/Checkbox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {
    initialChecked: {
      control: false,
    },
  },
} as Meta<typeof Checkbox>;

// Create a master template for mapping args to render the Checkbox component
const Template: StoryFn<typeof Checkbox> = (args: CheckboxProps) => (
  <Checkbox {...args} />
);

export const Base = Template.bind({});

const color = 'blue';

Base.args = {};

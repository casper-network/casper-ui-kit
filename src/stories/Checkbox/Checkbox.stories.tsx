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

Base.args = {
  boxColor: '#02c1b0',
  checkmarkColor: '#02c1b0',
};

export const RequiredCheckbox = Template.bind({});

RequiredCheckbox.args = {
  boxColor: '#FF0000',
  checkmarkColor: '#FF0000',
};

export const DisabledCheckbox = Template.bind({});

DisabledCheckbox.args = {
  boxColor: '#F1F1F4',
  checkmarkColor: '#F1F1F4',
  initialChecked: true,
  disabled: true,
};

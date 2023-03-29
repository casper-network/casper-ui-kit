import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import {
  PasswordInput,
  PasswordInputProps,
} from '../../../components/Inputs/PasswordInput';

export default {
  title: 'Components/PasswordInput',
  component: PasswordInput,
} as Meta<typeof PasswordInput>;

// Create a master template for mapping args to render the PasswordInput component
const Template: StoryFn<typeof PasswordInput> = (args: PasswordInputProps) => (
  <PasswordInput {...args} />
);

export const Base = Template.bind({});

Base.args = {};

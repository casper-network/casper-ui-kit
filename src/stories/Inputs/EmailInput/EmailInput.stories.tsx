import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import {
  EmailInput,
  EmailInputProps,
} from '../../../components/Inputs/EmailInput';

export default {
  title: 'Components/EmailInput',
  component: EmailInput,
} as Meta<typeof EmailInput>;

// Create a master template for mapping args to render the EmailInput component
const Template: StoryFn<typeof EmailInput> = (args: EmailInputProps) => (
  <EmailInput {...args} />
);

export const Base = Template.bind({});

Base.args = {};

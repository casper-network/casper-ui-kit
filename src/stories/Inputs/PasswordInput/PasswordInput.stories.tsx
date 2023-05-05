import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import styled from '@emotion/styled';
import {
  PasswordInput,
  PasswordInputProps,
} from '../../../components/Inputs/PasswordInput';
import { pxToRem } from '../../../utils';

export default {
  title: 'Components/PasswordInput',
  component: PasswordInput,
} as Meta<typeof PasswordInput>;

// Create a master template for mapping args to render the PasswordInput component
const Template: StoryFn<typeof PasswordInput> = (args: PasswordInputProps) => (
  <StoryContainer>
    <PasswordInput {...args} />
  </StoryContainer>
);

export const Base = Template.bind({});

Base.args = {
  id: 'password-input',
  label: 'Password Input',
};

const StoryContainer = styled.div`
  width: 100%;
  max-width: ${pxToRem(400)};
  padding: 2rem;
  background: white;
`;

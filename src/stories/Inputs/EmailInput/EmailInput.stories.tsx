import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import styled from '@emotion/styled';
import { pxToRem } from '../../../utils';
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
  <StoryContainer>
    <EmailInput {...args} />
  </StoryContainer>
);

export const Base = Template.bind({});

Base.args = {
  id: 'email-input',
  label: 'Email Input',
};

const StoryContainer = styled.div`
  width: 100%;
  max-width: ${pxToRem(400)};
  padding: 2rem;
  background: white;
`;

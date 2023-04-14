import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import styled from '@emotion/styled';
import { pxToRem } from '../../../utils';
import {
  GenericInput,
  GenericInputProps,
} from '../../../components/Inputs/GenericInput';

export default {
  title: 'Components/GenericInput',
  component: GenericInput,
} as Meta<typeof GenericInput>;

// Create a master template for mapping args to render the TextInput component
const Template: StoryFn<typeof GenericInput> = (args: GenericInputProps) => (
  <StoryContainer>
    <GenericInput {...args} />
  </StoryContainer>
);

export const Base = Template.bind({});

Base.args = {
  inputType: 'text',
};

const StoryContainer = styled.div`
  width: 100%;
  max-width: ${pxToRem(400)};
  padding: 2rem;
  background: white;
`;

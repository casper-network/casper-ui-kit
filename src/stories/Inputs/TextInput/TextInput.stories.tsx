import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import styled from '@emotion/styled';
import { pxToRem } from '../../../utils';
import {
  TextInput,
  TextInputProps,
} from '../../../components/Inputs/TextInput';

export default {
  title: 'Components/TextInput',
  component: TextInput,
} as Meta<typeof TextInput>;

// Create a master template for mapping args to render the TextInput component
const Template: StoryFn<typeof TextInput> = (args: TextInputProps) => (
  <StoryContainer>
    <TextInput {...args} />
  </StoryContainer>
);

export const Base = Template.bind({});

Base.args = {};

const StoryContainer = styled.div`
  width: 100%;
  max-width: ${pxToRem(400)};
  padding: 2rem;
  background: white;
`;

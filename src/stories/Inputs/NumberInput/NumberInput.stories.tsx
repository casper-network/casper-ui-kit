import React from 'react';
import styled from '@emotion/styled';
import { Meta, StoryFn } from '@storybook/react';
import { pxToRem } from '../../../utils';
import {
  NumberInput,
  NumberInputProps,
} from '../../../components/Inputs/NumberInput';

export default {
  title: 'Components/NumberInput',
  component: NumberInput,
} as Meta<typeof NumberInput>;

// Create a master template for mapping args to render the NumberInput component
const Template: StoryFn<typeof NumberInput> = (args: NumberInputProps) => (
  <StoryContainer>
    <NumberInput {...args} />
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

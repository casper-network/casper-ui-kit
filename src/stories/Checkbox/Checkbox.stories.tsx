import React from 'react';
import styled from '@emotion/styled';
import { Meta, StoryFn } from '@storybook/react';
import { pxToRem } from '../../utils';
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
  <StoryContainer>
    <Checkbox {...args} />
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

import React from 'react';
import styled from '@emotion/styled';
import { Meta, StoryFn } from '@storybook/react';
import { Typography } from '../../components/Typography';

export default {
  title: 'Components/Typography',
  component: Typography,
} as Meta<typeof Typography>;

// Create a master template for mapping args to render the Button component
const Template: StoryFn<typeof Typography> = ({ ...args }) => (
  <StoryContainer>
    <Typography {...args}>This is the typography component</Typography>
  </StoryContainer>
);

export const Base = Template.bind({});

Base.args = {};

export const LargeTypography = Template.bind({});

LargeTypography.args = {
  fontSize: 40,
};

const StoryContainer = styled.div`
  width: 100%;
  padding: 2rem;
  background: white;
`;

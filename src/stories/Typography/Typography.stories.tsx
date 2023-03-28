import React from 'react';
import styled from '@emotion/styled';
import { Meta, StoryFn } from '@storybook/react';
import { TypographyDisplay } from '../../components/Theme/TypographyDisplay';

export default {
  title: 'Components/Typography',
  component: TypographyDisplay,
} as Meta<typeof TypographyDisplay>;

// Create a master template for mapping args to render the Button component
const Template: StoryFn<typeof TypographyDisplay> = () => (
  <StoryContainer>
    <TypographyDisplay />
  </StoryContainer>
);

export const Base = Template.bind({});

Base.args = {};

const StoryContainer = styled.div`
  width: 100%;
  padding: 2rem;
  background: white;
`;

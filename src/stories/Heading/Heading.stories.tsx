import React from 'react';
import styled from '@emotion/styled';
import { Meta, StoryFn } from '@storybook/react';
import { Heading, HeadingProps, HeadingType } from '../../components/Heading';

export default {
  title: 'Components/Heading',
  component: Heading,
} as Meta<typeof Heading>;

// Create a master template for mapping args to render the Button component
const Template: StoryFn<typeof Heading> = (args: HeadingProps) => {
  const { type: headingType } = args;

  return (
    <StoryContainer>
      <Heading {...args}>This is the heading {headingType} component</Heading>
    </StoryContainer>
  );
};

export const H1 = Template.bind({});

H1.args = {
  type: HeadingType.H1,
};

export const H2 = Template.bind({});

H2.args = {
  type: HeadingType.H2,
};

export const H3 = Template.bind({});

H3.args = {
  type: HeadingType.H3,
};

export const H4 = Template.bind({});

H4.args = {
  type: HeadingType.H4,
};

export const H5 = Template.bind({});

H5.args = {
  type: HeadingType.H5,
};

export const H6 = Template.bind({});

H6.args = {
  type: HeadingType.H6,
};

const StoryContainer = styled.div`
  width: 100%;
  padding: 2rem;
  background: white;
`;

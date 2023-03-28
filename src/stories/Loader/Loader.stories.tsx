import React from 'react';
import styled from '@emotion/styled';
import { Meta, StoryFn } from '@storybook/react';
import { Loader, LoaderProps } from '../../components/Loader';

export default {
  title: 'Components/Loader',
  component: Loader,
} as Meta<typeof Loader>;

// Create a master template for mapping args to render the Loader component
const Template: StoryFn<typeof Loader> = (args: LoaderProps) => (
  <StoryContainer>
    <Loader {...args} />
  </StoryContainer>
);

export const Base = Template.bind({});

Base.args = {};

const StoryContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 3rem;
  background: white;
`;

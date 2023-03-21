import React from 'react';
import styled from '@emotion/styled';
import { Meta, StoryFn } from '@storybook/react';
import { pxToRem } from '../../utils';
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
  width: 100%;
  max-width: ${pxToRem(400)};
  padding: 3rem;
  background: white;
`;

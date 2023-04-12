import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import styled from '@emotion/styled';
import {
  ProgressBar,
  ProgressBarProps,
} from '../../components/ProgressBar/ProgressBar';

export default {
  title: 'Components/ProgressBar',
  component: ProgressBar,
} as Meta<typeof ProgressBar>;

const Template: StoryFn<typeof ProgressBar> = (args: ProgressBarProps) => (
  <StoryContainer>
    <ProgressBar {...args} />
  </StoryContainer>
);

export const BaseProgressBar = Template.bind({});

BaseProgressBar.args = {
  currentStep: 'test',
  processSteps: ['build', 'test', 'deploy'],
};

const StoryContainer = styled.div`
  width: 100%;
  padding: 3rem;
  background: white;
`;

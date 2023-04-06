import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import {
  ProgressBar,
  ProgressBarProps,
} from '../../components/ProgressBar/ProgressBar';

export default {
  title: 'Components/ProgressBar',
  component: ProgressBar,
} as ComponentMeta<typeof ProgressBar>;

const Template: ComponentStory<typeof ProgressBar> = (
  args: ProgressBarProps,
) => <ProgressBar {...args} />;

export const BaseProgressBar = Template.bind({});

BaseProgressBar.args = {
  currentStep: 'test',
  processSteps: ['build', 'test', 'deploy'],
};

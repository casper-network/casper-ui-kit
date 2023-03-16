import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { SvgIcon, SvgIconProps } from '../../components/Icons/SvgIcon';

export default {
  title: 'Components/SvgIcon',
  component: SvgIcon,
} as Meta<typeof SvgIcon>;

// Create a master template for mapping args to render the SvgIcon component
const Template: StoryFn<typeof SvgIcon> = (args: SvgIconProps) => (
  <SvgIcon {...args} />
);

export const BlocksIcon = Template.bind({});

BlocksIcon.args = {
  icon: 'BlocksIcon',
  stroke: '#7F8095',
};

export const ValidatorsIcon = Template.bind({});

ValidatorsIcon.args = {
  icon: 'ValidatorsIcon',
  stroke: '#7F8095',
  fill: 'none',
};

export const DeploysIcon = Template.bind({});

DeploysIcon.args = {
  icon: 'DeploysIcon',
  stroke: '#7F8095',
  fill: 'none',
};

export const OpenMenuIcon = Template.bind({});
OpenMenuIcon.args = {
  icon: 'OpenMenuIcon',
  stroke: '#8F9398',
  strokeWidth: 3,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

export const CloseMenuIcon = Template.bind({});
CloseMenuIcon.args = {
  icon: 'CloseMenuIcon',
  stroke: '#8F9398',
  strokeWidth: 3,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

export const ErrorIcon = Template.bind({});

ErrorIcon.args = {
  icon: 'ErrorIcon',
  stroke: 'red',
  fill: 'none',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

export const FailureIcon = Template.bind({});

FailureIcon.args = {
  icon: 'FailureIcon',
};

export const LoaderIcon = Template.bind({});

LoaderIcon.args = {
  icon: 'LoaderIcon',
};

export const SuccessIcon = Template.bind({});

SuccessIcon.args = {
  icon: 'SuccessIcon',
  fill: '#21DA11',
};

export const ButtonIcon = Template.bind({});

ButtonIcon.args = {
  icon: 'ButtonIcon',
  fill: '#7F8095',
};

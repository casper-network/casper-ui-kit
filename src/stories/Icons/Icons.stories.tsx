import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Icons, IconsProps } from '../../components/Icons/Icons';

export default {
  title: 'Components/Icons',
  component: Icons,
} as Meta<typeof Icons>;

// Create a master template for mapping args to render the Icons component
const Template: StoryFn<typeof Icons> = (args: IconsProps) => (
  <Icons {...args} />
);

export const BlocksIcon = Template.bind({});

BlocksIcon.args = {
  iconName: 'BlocksIcon',
  stroke: '#7F8095',
};

export const ValidatorsIcon = Template.bind({});

ValidatorsIcon.args = {
  iconName: 'ValidatorsIcon',
  stroke: '#7F8095',
  fill: 'none',
};

export const DeploysIcon = Template.bind({});

DeploysIcon.args = {
  iconName: 'DeploysIcon',
  stroke: '#7F8095',
  fill: 'none',
};

export const CheckboxIcon = Template.bind({});

CheckboxIcon.args = {
  iconName: 'CheckboxIcon',
  stroke: '#7F8095',
  fill: '#7F8095',
};

export const OpenMenuIcon = Template.bind({});
OpenMenuIcon.args = {
  iconName: 'OpenMenuIcon',
};

export const CloseMenuIcon = Template.bind({});
CloseMenuIcon.args = {
  iconName: 'CloseMenuIcon',
};

export const ErrorIcon = Template.bind({});

ErrorIcon.args = {
  iconName: 'ErrorIcon',
  stroke: 'red',
  fill: 'none',
};

export const FailureIcon = Template.bind({});

FailureIcon.args = {
  iconName: 'FailureIcon',
};

export const LoaderIcon = Template.bind({});

LoaderIcon.args = {
  iconName: 'LoaderIcon',
};

export const SuccessIcon = Template.bind({});

SuccessIcon.args = {
  iconName: 'SuccessIcon',
  fill: '#21DA11',
};

export const ButtonIcon = Template.bind({});

ButtonIcon.args = {
  iconName: 'ButtonIcon',
  stroke: '#fff',
};

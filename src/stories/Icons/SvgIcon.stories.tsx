import React from 'react';
import styled from '@emotion/styled';
import { Meta, StoryFn } from '@storybook/react';
import { SvgIcon, SvgIconProps } from '../../components/Icons/SvgIcon';
import { pxToRem } from '../../utils';

export default {
  title: 'Components/SvgIcon',
  component: SvgIcon,
} as Meta<typeof SvgIcon>;

// Create a master template for mapping args to render the SvgIcon component
const Template: StoryFn<typeof SvgIcon> = (args: SvgIconProps) => (
  <StoryContainer>
    <SvgIcon {...args} />
  </StoryContainer>
);

export const BlocksIcon = Template.bind({});

BlocksIcon.args = {
  icon: 'BlocksIcon',
  title: 'Blocks Icon',
  stroke: '#7F8095',
  fill: 'none',
};

export const ValidatorsIcon = Template.bind({});

ValidatorsIcon.args = {
  icon: 'ValidatorsIcon',
  title: 'Validators Icon',
  stroke: '#7F8095',
  fill: 'none',
};

export const DeploysIcon = Template.bind({});

DeploysIcon.args = {
  icon: 'DeploysIcon',
  title: 'Validators Icon',
  stroke: '#7F8095',
  fill: 'none',
};

export const OpenMenuIcon = Template.bind({});
OpenMenuIcon.args = {
  icon: 'OpenMenuIcon',
  title: 'Open navigation menu icon',
  stroke: '#8F9398',
  strokeWidth: 3,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

export const CloseMenuIcon = Template.bind({});
CloseMenuIcon.args = {
  icon: 'CloseMenuIcon',
  title: 'Close navigation menu icon',
  stroke: '#8F9398',
  strokeWidth: 3,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

export const ErrorIcon = Template.bind({});

ErrorIcon.args = {
  icon: 'ErrorIcon',
  title: 'Error icon',
  stroke: 'red',
  fill: 'none',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

export const FailureIcon = Template.bind({});

FailureIcon.args = {
  icon: 'FailureIcon',
  title: 'Failure icon',
};

export const LoaderIcon = Template.bind({});

LoaderIcon.args = {
  icon: 'LoaderIcon',
  title: 'Loading icon',
};

export const SuccessIcon = Template.bind({});

SuccessIcon.args = {
  icon: 'SuccessIcon',
  title: 'Success icon',
  fill: '#21DA11',
};

export const ButtonIcon = Template.bind({});

ButtonIcon.args = {
  icon: 'ButtonIcon',
  title: 'Button icon',
  fill: '#7F8095',
};

const StoryContainer = styled.div`
  width: 100%;
  max-width: ${pxToRem(400)};
  padding: 3rem;
  background: white;
`;

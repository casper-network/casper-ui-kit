import React from 'react';
import styled from '@emotion/styled';
import { Meta, StoryFn } from '@storybook/react';
import { Icon, IconProps } from '../../components/Icon/Icon';
import { pxToRem } from '../../utils';
import { defaultTheme } from '../../theme';

export default {
  title: 'Components/Icon',
  component: Icon,
} as Meta<typeof Icon>;

const Template: StoryFn<typeof Icon> = (args: IconProps) => (
  <StoryContainer>
    <Icon {...args} />
  </StoryContainer>
);

export const BlocksIcon = Template.bind({});

BlocksIcon.args = {
  icon: 'BlocksIcon',
  width: 200,
};

export const ValidatorsIcon = Template.bind({});

ValidatorsIcon.args = {
  icon: 'ValidatorsIcon',
  width: 200,
};

export const DeployIcon = Template.bind({});

DeployIcon.args = {
  icon: 'DeployIcon',
  width: 200,
};

export const OpenMenuIcon = Template.bind({});
OpenMenuIcon.args = {
  icon: 'OpenMenuIcon',
  width: 200,
  strokeWidth: 2,
};

export const CloseMenuIcon = Template.bind({});
CloseMenuIcon.args = {
  icon: 'CloseMenuIcon',
  width: 200,
  strokeWidth: 2,
};

export const ErrorIcon = Template.bind({});

ErrorIcon.args = {
  icon: 'ErrorIcon',
  width: 200,
  color: defaultTheme.colors.primary.CasperRed,
  stroke: 'white',
};

export const FailureIcon = Template.bind({});

FailureIcon.args = {
  icon: 'FailureIcon',
  width: 200,
  color: 'white',
  stroke: 'transparent',
};

export const LoaderIcon = Template.bind({});

LoaderIcon.args = {
  icon: 'LoaderIcon',
  width: 200,
  stroke: 'transparent',
};

export const SuccessIcon = Template.bind({});

SuccessIcon.args = {
  icon: 'SuccessIcon',
  width: 200,
  stroke: 'transparent',
  color: defaultTheme.colors.secondary.CasperGreen,
};

export const SearchIcon = Template.bind({});

SearchIcon.args = {
  icon: 'SearchIcon',
  width: 200,
  stroke: 'transparent',
  color: defaultTheme.colors.primary.Black,
};

const StoryContainer = styled.div`
  width: 100%;
  max-width: ${pxToRem(400)};
  padding: 3rem;
  background: white;
`;

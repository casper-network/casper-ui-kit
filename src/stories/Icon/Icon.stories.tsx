import React from 'react';
import styled from '@emotion/styled';
import { Meta, StoryFn } from '@storybook/react';
import { Icon, IconProps } from '../../components/Icon/Icon';
import { pxToRem } from '../../utils';

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
};

export const ValidatorsIcon = Template.bind({});

ValidatorsIcon.args = {
  icon: 'ValidatorsIcon',
};

export const DeploysIcon = Template.bind({});

DeploysIcon.args = {
  icon: 'DeploysIcon',
};

export const OpenMenuIcon = Template.bind({});
OpenMenuIcon.args = {
  icon: 'OpenMenuIcon',
};

export const CloseMenuIcon = Template.bind({});
CloseMenuIcon.args = {
  icon: 'CloseMenuIcon',
};

export const ErrorIcon = Template.bind({});

ErrorIcon.args = {
  icon: 'ErrorIcon',
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
};

export const ButtonIcon = Template.bind({});

ButtonIcon.args = {
  icon: 'ButtonIcon',
};

const StoryContainer = styled.div`
  width: 100%;
  max-width: ${pxToRem(400)};
  padding: 3rem;
  background: white;
`;

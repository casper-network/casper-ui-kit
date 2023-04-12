import React from 'react';
import styled from '@emotion/styled';
import { Meta, StoryFn } from '@storybook/react';
import { pxToRem } from '../../utils';
import { Logo, LogoProps } from '../../components/Logos/Logo';

export default {
  title: 'Components/SvgLogo',
  component: Logo,
} as Meta<typeof Logo>;

// Create a master template for mapping args to render the SvgLogo component
const Template: StoryFn<typeof Logo> = (args: LogoProps) => (
  <StoryContainer>
    <Logo {...args} />
  </StoryContainer>
);

export const BlockExplorerGradientLogo = Template.bind({});

BlockExplorerGradientLogo.args = {
  logo: 'BlockExplorerGradientLogo',
  title: 'Block Explorer Gradient Logo',
};

export const BlueCasperLogo = Template.bind({});

BlueCasperLogo.args = {
  logo: 'BlueCasperLogo',
  title: 'Blue Casper Logo',
};

export const WhiteCasperLogo = Template.bind({});
WhiteCasperLogo.args = {
  logo: 'WhiteCasperLogo',
  title: 'White Casper Logo',
};

const StoryContainer = styled.div`
  width: 100%;
  max-width: ${pxToRem(400)};
  padding: 3rem;
  background: #eee;
`;

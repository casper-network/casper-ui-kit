import React from 'react';
import styled from '@emotion/styled';
import { Meta, StoryFn } from '@storybook/react';
import { pxToRem } from '../../utils';
import { SvgLogo, SvgLogoProps } from '../../components/Logos/SvgLogo';

export default {
  title: 'Components/SvgLogo',
  component: SvgLogo,
} as Meta<typeof SvgLogo>;

// Create a master template for mapping args to render the SvgLogo component
const Template: StoryFn<typeof SvgLogo> = (args: SvgLogoProps) => (
  <StoryContainer>
    <SvgLogo {...args} />
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

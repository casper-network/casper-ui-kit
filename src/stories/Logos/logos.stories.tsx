import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { SvgLogo, SvgLogoProps } from '../../components/Logos/SvgLogo';

export default {
  title: 'Components/SvgLogo',
  component: SvgLogo,
} as Meta<typeof SvgLogo>;

// Create a master template for mapping args to render the SvgLogo component
const Template: StoryFn<typeof SvgLogo> = (args: SvgLogoProps) => (
  <SvgLogo {...args} />
);

export const RedBlackCasperLogo = Template.bind({});

RedBlackCasperLogo.args = {
  logo: 'RedBlackCasperLogo',
};

export const BlockExplorerGradientLogo = Template.bind({});

BlockExplorerGradientLogo.args = {
  logo: 'BlockExplorerGradientLogo',
};

export const BlueCasperLogo = Template.bind({});

BlueCasperLogo.args = {
  logo: 'BlueCasperLogo',
};

export const WhiteCasperLogo = Template.bind({});
WhiteCasperLogo.args = {
  logo: 'WhiteCasperLogo',
};

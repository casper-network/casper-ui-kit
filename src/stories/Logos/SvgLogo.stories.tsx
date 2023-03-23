import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { withTests } from '@storybook/addon-jest';
// eslint-disable-next-line import/extensions
import results from '../../../.jest-test-results.json';
import { SvgLogo, SvgLogoProps } from '../../components/Logos/SvgLogo';

export default {
  title: 'Components/SvgLogo',
  component: SvgLogo,
  decorators: [withTests({ results })],
} as Meta<typeof SvgLogo>;

// Create a master template for mapping args to render the SvgLogo component
const Template: StoryFn<typeof SvgLogo> = (args: SvgLogoProps) => (
  <SvgLogo {...args} />
);

export const RedBlackCasperLogo = Template.bind({});

RedBlackCasperLogo.args = {
  logo: 'RedBlackCasperLogo',
  title: 'Red and Black Casper Labs Logo',
};

export const BlockExplorerGradientLogo = Template.bind({});

BlockExplorerGradientLogo.args = {
  logo: 'BlockExplorerGradientLogo',
  title: 'Gradient Block Explorer Logo',
};

export const BlueCasperLogo = Template.bind({});

BlueCasperLogo.args = {
  logo: 'BlueCasperLogo',
  title: 'Blue Casper Labs Logo',
};

export const WhiteCasperLogo = Template.bind({});
WhiteCasperLogo.args = {
  logo: 'WhiteCasperLogo',
  title: 'White Casper Labs Logo',
};

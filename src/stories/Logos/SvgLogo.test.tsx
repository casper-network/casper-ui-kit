import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import {
  BlockExplorerGradientLogo,
  BlueCasperLogo,
  WhiteCasperLogo,
} from './SvgLogo.stories';

describe('SvgIcon.stories', () => {
  it('should render the Block Explorer Gradient Logo', () => {
    render(
      <BlockExplorerGradientLogo
        logo="BlockExplorerGradientLogo"
        title="BlockExplorerGradientLogo"
        {...BlockExplorerGradientLogo.args}
      />,
    );

    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('should render the Blue Casper Logo', () => {
    render(
      <BlueCasperLogo
        logo="BlueCasperLogo"
        title="BlueCasperLogo"
        {...BlueCasperLogo.args}
      />,
    );

    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('should render the White Casper Logo', () => {
    render(
      <WhiteCasperLogo
        logo="WhiteCasperLogo"
        title="WhiteCasperLogo"
        {...WhiteCasperLogo.args}
      />,
    );

    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});

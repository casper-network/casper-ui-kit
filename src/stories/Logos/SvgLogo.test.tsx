import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import {
  RedBlackCasperLogo,
  BlockExplorerGradientLogo,
  BlueCasperLogo,
  WhiteCasperLogo,
} from './SvgLogo.stories';

describe('SvgIcon', () => {
  it('should render the RedBlackCasperLogo', () => {
    render(
      <RedBlackCasperLogo
        logo="RedBlackCasperLogo"
        title='icon="RedBlackCasperLogo'
        {...RedBlackCasperLogo.args}
      />,
    );

    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('should render the BlockExplorerGradientLogo', () => {
    render(
      <BlockExplorerGradientLogo
        logo="BlockExplorerGradientLogo"
        title="BlockExplorerGradientLogo"
        {...BlockExplorerGradientLogo.args}
      />,
    );

    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('should render the BlueCasperLogo', () => {
    render(
      <BlueCasperLogo
        logo="BlueCasperLogo"
        title="BlueCasperLogo"
        {...BlueCasperLogo.args}
      />,
    );

    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('should render the WhiteCasperLogo', () => {
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

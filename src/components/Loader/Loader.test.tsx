import React from 'react';
import { render } from '@testing-library/react';
import { Loader } from './Loader';

// TODO: Set up infra to test checkbox.stories.ts via
// https://github.com/casper-network/casper-ui-kit/issues/60
describe('Loader', () => {
  it('should render base loader', () => {
    const { queryAllByTestId } = render(<Loader />);
    const loaderSvg = queryAllByTestId('loaderSvgWrapper');

    expect(loaderSvg).toBeTruthy();
  });
});

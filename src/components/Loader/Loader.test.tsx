import React from 'react';
import { render } from '@testing-library/react';
import { Loader } from './Loader';

describe('Loader', () => {
  it('should render base loader', () => {
    const { queryAllByTestId } = render(<Loader />);
    const loaderSvg = queryAllByTestId('loaderSvg');

    // TODO: Write less trivial test. Only for basic functionality
    expect(loaderSvg).toBeTruthy();
  });
});

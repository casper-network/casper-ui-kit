import React from 'react';
import { render } from '@testing-library/react';
import { Loader } from './Loader';

describe('Loader', () => {
  it('should render base loader', () => {
    const { queryAllByTestId } = render(<Loader />);
    const loaderSvg = queryAllByTestId('loaderSvg');

    expect(loaderSvg).toBeTruthy();
  });
});

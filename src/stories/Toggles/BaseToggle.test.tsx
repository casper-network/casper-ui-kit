import React from 'react';
import { render } from '@testing-library/react';
import { BaseToggle } from 'src/components/Toggles';

const testToggleOptions = {
  left: 'leftTest',
  right: 'rightTest',
};

describe('BaseToggle', () => {
  it('should render base toggle', () => {
    const { queryAllByTestId } = render(
      <BaseToggle toggleOptions={testToggleOptions} />,
    );
    const baseToggle = queryAllByTestId('baseToggle');

    expect(baseToggle).toBeTruthy();
  });
});

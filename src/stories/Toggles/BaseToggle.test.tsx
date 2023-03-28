import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { BaseToggle } from '../../components/Toggles/BaseToggle';

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

  it('should be checked on click', () => {
    const { getByTestId } = render(
      <BaseToggle toggleOptions={testToggleOptions} />,
    );

    const baseToggleCheckbox = getByTestId(
      'baseToggleCheckbox',
    ) as HTMLInputElement;

    fireEvent.click(baseToggleCheckbox);
    expect(baseToggleCheckbox.checked).toEqual(true);
  });
});

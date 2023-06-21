import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BaseToggle } from '../../components/Toggles/BaseToggle';

const testToggleOptions = {
  left: 'leftTest',
  right: 'rightTest',
};

describe('BaseToggle', () => {
  it('should render base toggle', () => {
    render(
      <BaseToggle
        selectedToggleOption=""
        setSelectedToggleOption={jest.fn}
        toggleOptions={testToggleOptions}
      />,
    );

    expect(screen.getByTestId('base-toggle')).toBeInTheDocument();
  });

  it('should be checked on click', () => {
    const { getByTestId } = render(
      <BaseToggle
        selectedToggleOption=""
        setSelectedToggleOption={jest.fn}
        toggleOptions={testToggleOptions}
      />,
    );

    const baseToggleCheckbox = getByTestId(
      'base-toggle-checkbox',
    ) as HTMLInputElement;

    fireEvent.click(baseToggleCheckbox);
    expect(baseToggleCheckbox.checked).toEqual(true);
  });
});

import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ButtonToggle } from '../../components/Toggles/ButtonToggle';

const testToggleOptions = ['testOption1', 'testOption2'];

describe('ButtonToggle', () => {
  it('should render button toggle', () => {
    render(
      <ButtonToggle
        selectedToggleOption="testOption1"
        setSelectedToggleOption={jest.fn}
        toggleOptions={testToggleOptions}
      />,
    );

    expect(screen.getByTestId('button-toggle')).toBeInTheDocument();
  });

  it('should disable selected option', () => {
    const { getByText } = render(
      <ButtonToggle
        selectedToggleOption="testOption2"
        setSelectedToggleOption={jest.fn}
        toggleOptions={testToggleOptions}
      />,
    );

    const testDeselectedOption = getByText(
      testToggleOptions[0],
    ) as HTMLButtonElement;
    const testSelectedOption = getByText(
      testToggleOptions[1],
    ) as HTMLButtonElement;

    expect(testSelectedOption.disabled).toEqual(true);
    expect(testDeselectedOption.disabled).toEqual(false);
  });
});

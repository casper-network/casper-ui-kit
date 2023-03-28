import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { ButtonToggle } from '../../components/Toggles/ButtonToggle';

const testToggleOptions = ['testOption1', 'testOption2'];

describe('ButtonToggle', () => {
  it('should render button toggle', () => {
    const { queryAllByTestId } = render(
      <ButtonToggle toggleOptions={testToggleOptions} />,
    );

    const buttonToggle = queryAllByTestId('buttonToggle');

    expect(buttonToggle).toBeTruthy();
  });

  it('should disable selected option', () => {
    const { getByText } = render(
      <ButtonToggle toggleOptions={testToggleOptions} />,
    );

    const testDeselectedOption = getByText('testOption1') as HTMLButtonElement;
    const testSelectedOption = getByText('testOption2') as HTMLButtonElement;

    fireEvent.click(testSelectedOption);
    expect(testSelectedOption.disabled).toEqual(true);
    expect(testDeselectedOption.disabled).toEqual(false);
  });
});

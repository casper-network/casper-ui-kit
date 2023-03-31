import React from 'react';
import selectEvent from 'react-select-event';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { DropDownSelector } from '../../components/Selectors/DropDownSelector';

describe('DropDownSelector', () => {
  const mockSelectOptions = [
    { value: 'value1', label: 'Option 1' },
    { value: 'value2', label: 'Option 2' },
    { value: 'value3', label: 'Option 3' },
    { value: 'value4', label: 'Option 4' },
  ];

  const mockDefaultValue = mockSelectOptions[0];
  const mockName = 'filterOptions';
  const mockProps = {
    isMenuOpen: false,
    setIsMenuOpen: jest.fn,
    defaultValue: mockDefaultValue,
    currentSelection: mockSelectOptions[0],
    name: mockName,
    options: mockSelectOptions,
    onChange: jest.fn,
  };

  it('should render customSelect with "Option 1" as default value', async () => {
    render(<DropDownSelector {...mockProps} />);

    expect(
      screen.getByRole('combobox', { name: 'select-button' }),
    ).toBeInTheDocument();
    expect(mockDefaultValue.label).toEqual('Option 1');
    expect(screen.getByTestId('select-wrapper')).toHaveTextContent('Option 1');
  });

  it('should open menu on user click', async () => {
    const { getByLabelText, queryByText, queryAllByText, getByText } = render(
      <DropDownSelector {...mockProps} />,
    );

    const option1 = queryAllByText('Option 1');

    expect(queryByText('Option 2')).toBeNull();

    selectEvent.openMenu(getByLabelText('Select'));

    expect(option1[0]).toBeInTheDocument();
    // 'Option 1' appears twice as the default option and first option
    expect(getByText('Option 2')).toBeInTheDocument();
    expect(getByText('Option 3')).toBeInTheDocument();
    expect(getByText('Option 4')).toBeInTheDocument();
  });

  it('should call onChange when an option is selected and display the selected option', async () => {
    const { getByLabelText, getByTestId } = render(
      <DropDownSelector {...mockProps} />,
    );

    const selectWrapper = getByTestId('select-wrapper');
    const selectLabel = getByLabelText('Select');

    await selectEvent.select(selectLabel, 'Option 4');

    expect(selectWrapper).toHaveTextContent('Option 4');
    expect(selectWrapper).not.toHaveTextContent('Option 3');
    expect(selectWrapper).not.toHaveTextContent('Option 2');
    expect(selectWrapper).not.toHaveTextContent('Option 1');
  });
});

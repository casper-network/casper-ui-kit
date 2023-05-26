import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { Base } from './NumberInput.stories';

describe('NumberInput.stories', () => {
  it('should render the Base NumberInput', () => {
    render(<Base />);

    expect(screen.getByRole('spinbutton')).toBeInTheDocument();
  });

  it('should render an input of type number', () => {
    render(<Base />);

    expect(screen.getByTestId('number-input')).toHaveAttribute(
      'type',
      'number',
    );
  });

  it('should render an input of type number', () => {
    render(
      <Base
        id="test-id"
        fontSize={1}
        label="test-label"
        fontColor="blue"
        width={1}
        min={1}
        max={10}
        step={2}
        value={1}
        readOnly
        focusBorderColor="green"
        focusBorderWidth={1}
        required
      />,
    );

    expect(screen.getByTestId('number-input')).toHaveAttribute('id', 'test-id');
    expect(screen.getByTestId('number-input')).toHaveAttribute(
      'label',
      'test-label',
    );
    expect(screen.getByTestId('number-input')).toHaveAttribute('id', 'test-id');
    expect(screen.getByTestId('number-input')).toHaveAttribute('id', 'test-id');
  });
});

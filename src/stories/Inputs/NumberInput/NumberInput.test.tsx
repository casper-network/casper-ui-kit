import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { NumberInput } from 'src/components';
import { pxToRem } from '../../../utils';

describe('NumberInput.stories', () => {
  it('should render the Base NumberInput', () => {
    render(<NumberInput />);

    expect(screen.getByRole('spinbutton')).toBeInTheDocument();
  });

  it('should render an input of type number', () => {
    render(<NumberInput />);

    expect(screen.getByTestId('number-input')).toHaveAttribute(
      'type',
      'number',
    );
  });

  it('should apply id to input', () => {
    render(<NumberInput id="test-id" />);

    expect(screen.getByTestId('number-input')).toHaveAttribute('id', 'test-id');
  });

  it('should apply label to input', () => {
    render(<NumberInput label="test-label" />);
    expect(screen.getByTestId('number-input-label')).toBeInTheDocument();
    expect(screen.getByTestId('number-input-label')).toHaveTextContent(
      'test-label',
    );
  });

  it('should apply readonly to input', () => {
    render(<NumberInput readOnly />);
    expect(screen.getByTestId('number-input')).toHaveAttribute('readonly');
  });

  it('should apply required to input', () => {
    render(<NumberInput required />);
    expect(screen.getByTestId('number-input')).toHaveAttribute('required');
  });

  it('should apply disabled to input', () => {
    render(<NumberInput disabled />);
    expect(screen.getByTestId('number-input')).toHaveAttribute('disabled');
  });

  it('should apply provided value to input', () => {
    render(<NumberInput defaultValue={1} />);
    expect(screen.getByTestId('number-input')).toHaveValue(1);
  });

  it('should apply color to input', () => {
    render(
      <NumberInput
        fontColor="blue"
        focusBorderColor="pink"
        arrowColor="green"
        boxShadowColor="purple"
      />,
    );
    expect(screen.getByTestId('arrow-button')).toHaveStyle({
      fill: 'green',
    });
    expect(screen.getByTestId('input-and-arrows-container')).toHaveStyle({
      boxShadow: 'inset 0px 1px 7px purple',
    });
    expect(screen.getByTestId('number-input')).toHaveStyle({ color: 'blue' });
  });

  it('should apply font size to input', () => {
    render(<NumberInput fontSize={16} />);
    expect(screen.getByTestId('number-input')).toHaveStyle({
      fontSize: pxToRem(16),
    });
  });

  it('should apply width and height to input', () => {
    render(<NumberInput width={1} height={1} />);
    expect(screen.getByTestId('number-input')).toHaveStyle({
      width: pxToRem(1),
    });
    expect(screen.getByTestId('input-and-arrows-container')).toHaveStyle({
      height: pxToRem(1),
    });
  });

  it('should apply min and max to input', () => {
    render(<NumberInput min={1} max={10} />);
    expect(screen.getByTestId('number-input')).toHaveAttribute('min', '1');
    expect(screen.getByTestId('number-input')).toHaveAttribute('max', '10');
  });

  it('should apply step to input', () => {
    render(<NumberInput step={2} />);

    expect(screen.getByTestId('number-input')).toHaveAttribute('step', '2');
  });
});

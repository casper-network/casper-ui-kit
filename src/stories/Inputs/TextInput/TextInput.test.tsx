import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { TextInput } from 'src/components';
import { pxToRem } from 'src/utils';

describe('TextInput.stories', () => {
  it('should render the Base TextInput', () => {
    render(<TextInput />);

    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByTestId('text-input')).toBeInTheDocument();
  });
  it('should apply id to input', () => {
    render(<TextInput id="test-id" />);

    expect(screen.getByTestId('text-input')).toHaveAttribute('id', 'test-id');
  });

  it('should apply label to input', () => {
    render(<TextInput label="test-label" />);
    expect(screen.getByTestId('text-input-label')).toBeInTheDocument();
    expect(screen.getByTestId('text-input-label')).toHaveTextContent(
      'test-label',
    );
  });

  it('should apply required to input', () => {
    render(<TextInput required />);
    expect(screen.getByTestId('text-input')).toHaveAttribute('required');
  });

  it('should apply disabled to input', () => {
    render(<TextInput disabled />);
    expect(screen.getByTestId('text-input')).toHaveAttribute('disabled');
  });

  it('should apply color to input', () => {
    render(<TextInput placeholderColor="blue" boxShadowColor="purple" />);
    expect(screen.getByTestId('text-input')).toHaveStyle({
      boxShadow: 'inset 0px 1px 7px purple',
      color: 'blue',
    });
  });

  it('should apply font size to input', () => {
    render(<TextInput fontSize={16} />);
    expect(screen.getByTestId('text-input')).toHaveStyle({
      fontSize: pxToRem(16),
    });
  });

  it('should apply width and height to input', () => {
    render(<TextInput width={1} height={1} />);
    expect(screen.getByTestId('text-input')).toHaveStyle({
      width: pxToRem(1),
    });
  });
});

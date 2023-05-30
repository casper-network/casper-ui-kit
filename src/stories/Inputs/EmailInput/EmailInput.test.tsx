import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { EmailInput } from 'src/components';
import { pxToRem } from 'src/utils';

describe('EmailInput.stories', () => {
  it('should render the Base EmailInput', () => {
    render(<EmailInput />);

    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByTestId('email-input')).toBeInTheDocument();
    expect(screen.getByTestId('email-input')).toHaveAttribute('type', 'email');
  });

  it('should apply id to input', () => {
    render(<EmailInput id="test-id" />);

    expect(screen.getByTestId('email-input')).toHaveAttribute('id', 'test-id');
  });

  it('should apply label to input', () => {
    render(<EmailInput label="test-label" />);
    expect(screen.getByTestId('email-input-label')).toBeInTheDocument();
    expect(screen.getByTestId('email-input-label')).toHaveTextContent(
      'test-label',
    );
  });

  it('should apply required to input', () => {
    render(<EmailInput required />);
    expect(screen.getByTestId('email-input')).toHaveAttribute('required');
  });

  it('should apply disabled to input', () => {
    render(<EmailInput disabled />);
    expect(screen.getByTestId('email-input')).toHaveAttribute('disabled');
  });

  it('should apply color to input', () => {
    render(<EmailInput placeholderColor="blue" boxShadowColor="purple" />);
    expect(screen.getByTestId('email-input')).toHaveStyle({
      boxShadow: 'inset 0px 1px 7px purple',
      color: 'blue',
    });
  });

  it('should apply font size to input', () => {
    render(<EmailInput fontSize={16} />);
    expect(screen.getByTestId('email-input')).toHaveStyle({
      fontSize: pxToRem(16),
    });
  });

  it('should apply width and height to input', () => {
    render(<EmailInput width={1} height={1} />);
    expect(screen.getByTestId('email-input')).toHaveStyle({
      width: pxToRem(1),
    });
  });
});

import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen } from '@testing-library/react';
import { PasswordInput } from 'src/components';
import { pxToRem } from 'src/utils';

describe('Password.stories', () => {
  it('should render the Base PasswordInput', () => {
    render(<PasswordInput />);

    expect(screen.getByTestId('password-input')).toBeInTheDocument();
  });

  it('should toggle password to be visible', () => {
    render(<PasswordInput />);
    const viewPasswordButton = screen.getByTestId('view-password-button');
    fireEvent.click(viewPasswordButton);

    expect(screen.getByTestId('view-password-button')).toBeInTheDocument();
    expect(screen.getByTestId('password-input')).toHaveAttribute(
      'type',
      'text',
    );
  });

  it('should apply id to input', () => {
    render(<PasswordInput id="test-id" />);

    expect(screen.getByTestId('password-input')).toHaveAttribute(
      'id',
      'test-id',
    );
  });

  it('should apply label to input', () => {
    render(<PasswordInput label="test-label" />);
    expect(screen.getByTestId('password-input-label')).toBeInTheDocument();
    expect(screen.getByTestId('password-input-label')).toHaveTextContent(
      'test-label',
    );
  });

  it('should apply required to input', () => {
    render(<PasswordInput required />);
    expect(screen.getByTestId('password-input')).toHaveAttribute('required');
  });

  it('should apply disabled to input', () => {
    render(<PasswordInput disabled />);
    expect(screen.getByTestId('password-input')).toHaveAttribute('disabled');
  });

  it('should apply color to input', () => {
    render(<PasswordInput placeholderColor="blue" boxShadowColor="purple" />);
    expect(screen.getByTestId('password-input')).toHaveStyle({
      boxShadow: 'inset 0px 1px 7px purple',
      color: 'blue',
    });
  });

  it('should apply font size to input', () => {
    render(<PasswordInput fontSize={16} />);
    expect(screen.getByTestId('password-input')).toHaveStyle({
      fontSize: pxToRem(16),
    });
  });

  it('should apply width and height to input', () => {
    render(<PasswordInput width={1} height={1} />);
    expect(screen.getByTestId('password-input')).toHaveStyle({
      width: pxToRem(1),
    });
  });
});

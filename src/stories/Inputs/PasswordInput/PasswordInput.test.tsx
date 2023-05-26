import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { Base } from './PasswordInput.stories';

describe('Password.stories', () => {
  it('should render the Base PasswordInput', () => {
    render(<Base />);

    expect(screen.getByTestId('password-input')).toBeInTheDocument();
  });

  it('should toggle password to be visible', () => {
    render(<Base />);
    const viewPasswordButton = screen.getByTestId('view-test');

    userEvent.click(viewPasswordButton);
    expect(screen.getByTestId('view-password-button')).toBeInTheDocument();
    expect(screen.getByTestId('view-test')).toBeInTheDocument();
    expect(screen.getByTestId('password-input')).toHaveAttribute(
      'type',
      'text',
    );
  });
});

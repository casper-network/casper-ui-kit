import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Base } from './GenericInput.stories';

describe('GenericInput.stories', () => {
  it('should render the text GenericInput', () => {
    render(<Base inputType="text" />);

    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByTestId('generic-input')).toBeInTheDocument();
  });

  it('should render the email GenericInput', () => {
    render(<Base inputType="email" />);

    expect(screen.getByTestId('generic-input')).toBeInTheDocument();
    expect(screen.getByTestId('generic-input')).toHaveAttribute(
      'type',
      'email',
    );
  });

  it('should render the password GenericInput', () => {
    render(<Base inputType="password" />);

    expect(screen.getByTestId('generic-input')).toBeInTheDocument();
    expect(screen.getByTestId('generic-input')).toHaveAttribute(
      'type',
      'password',
    );
  });
});

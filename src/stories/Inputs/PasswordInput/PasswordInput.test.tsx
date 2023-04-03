import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { Base } from './PasswordInput.stories';

describe('EmailInput.stories', () => {
  it('should render the Base PasswordInput', () => {
    render(<Base />);

    expect(screen.getByTestId('password-input')).toBeInTheDocument();
  });
});

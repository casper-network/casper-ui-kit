import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { Base } from './EmailInput.stories';

describe('EmailInput.stories', () => {
  it('should render the Base EmailInput with specified color', () => {
    render(<Base />);

    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByTestId('email-input')).toBeInTheDocument();
  });
});

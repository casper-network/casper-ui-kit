import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { Base } from './TextInput.stories';

describe('TextInput.stories', () => {
  it('should render the Base TextInput', () => {
    render(<Base />);

    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByTestId('text-input')).toBeInTheDocument();
  });
});

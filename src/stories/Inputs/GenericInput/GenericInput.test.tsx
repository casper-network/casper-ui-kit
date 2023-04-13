import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { Base } from './GenericInput.stories';

describe('TextInput.stories', () => {
  it('should render the Base GenericInput', () => {
    render(<Base inputType="text" />);

    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByTestId('generic-input')).toBeInTheDocument();
  });
});

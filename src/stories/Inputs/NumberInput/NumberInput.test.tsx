import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { Base } from './NumberInput.stories';

describe('NumberInput.stories', () => {
  it('should render the Base NumberInput with specified arrow color', () => {
    render(<Base />);

    expect(screen.getByRole('spinbutton')).toBeInTheDocument();
  });
});

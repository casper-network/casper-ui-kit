import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Base } from './Loader.stories';

describe('Loader.stories', () => {
  it('should render the Base loader', () => {
    render(<Base {...Base.args} />);

    expect(screen.getByRole('status')).toBeInTheDocument();
  });
});

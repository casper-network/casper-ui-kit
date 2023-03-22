import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { Base, DisabledButton, RedButton } from './Button.stories';

describe('Button', () => {
  it('should render the base button', () => {
    render(
      <Base type="button" {...Base.args}>
        base button
      </Base>,
    );
    expect(screen.getByRole('button')).toHaveTextContent('base button');
    expect(screen.getByRole('button')).toHaveStyle('background-color: blue');
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
  it('should render the red button', () => {
    render(
      <RedButton type="button" {...RedButton.args}>
        red button
      </RedButton>,
    );
    expect(screen.getByRole('button')).toHaveTextContent('red button');
    expect(screen.getByRole('button')).toHaveStyle('background-color: red');
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
  it('should render the disabled button', () => {
    render(
      <DisabledButton type="button" {...DisabledButton.args}>
        disabled button
      </DisabledButton>,
    );

    expect(screen.getByRole('button')).toHaveTextContent('disabled button');
    expect(screen.getByRole('button')).toHaveStyle('background-color: purple');
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});

import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { Base, DisabledButton, RedButton } from './Button.stories';

describe('Button', () => {
  it('should render the base button', () => {
    render(
      <Base type="button" {...Base.args}>
        button
      </Base>,
    );
    expect(screen.getByRole('button')).toHaveTextContent('button');
    expect(screen.getByRole('button')).toHaveStyle('background-color: blue');
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
  it('should render red button', () => {
    render(
      <RedButton type="button" {...Base.args}>
        button
      </RedButton>,
    );
    expect(screen.getByRole('button')).toHaveTextContent('button');
    // expect(screen.getByRole('button')).toHaveStyle('background-color: red');
    // expect(screen.getByRole('button')).toHaveStyle(
    //   `background-color: ${RedButton.args?.color!}`,
    // );
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
  it('should render the disabled button', () => {
    render(
      <DisabledButton type="button" {...Base.args}>
        button
      </DisabledButton>,
    );

    expect(screen.getByRole('button')).toHaveTextContent('button');
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});

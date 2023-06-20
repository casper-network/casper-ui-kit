import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { Base, DisabledButton, RedButton } from './Button.stories';

describe('Button.stories', () => {
  it('should render the Base button', () => {
    render(
      <Base type="button" bgColor="#02c1b0" {...Base.args}>
        base button
      </Base>,
    );
    expect(screen.getByRole('button')).toHaveTextContent('base button');
    expect(screen.getByRole('button')).toHaveStyle('background-color: #02c1b0');
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should render the Red Button', () => {
    render(
      <RedButton type="button" bgColor="red" {...RedButton.args}>
        red button
      </RedButton>,
    );
    expect(screen.getByRole('button')).toHaveTextContent('red button');
    expect(screen.getByRole('button')).toHaveStyle('background-color: red');
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should render the Disabled Button', () => {
    render(
      <DisabledButton type="button" bgColor="#F4F4F4" {...DisabledButton.args}>
        disabled button
      </DisabledButton>,
    );

    expect(screen.getByRole('button')).toHaveTextContent('disabled button');
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should be disabled', () => {
    render(
      <DisabledButton type="button" bgColor="#F4F4F4" {...DisabledButton.args}>
        disabled button
      </DisabledButton>,
    );

    expect(screen.getByRole('button')).toBeDisabled();
  });
});

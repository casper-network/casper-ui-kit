import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { GenericInput } from 'src/components';
import { pxToRem } from 'src/utils';

describe('GenericInput.stories', () => {
  it('should render the text GenericInput', () => {
    render(<GenericInput inputType="text" />);

    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByTestId('generic-input')).toBeInTheDocument();
  });

  it('should render the email GenericInput', () => {
    render(<GenericInput inputType="email" />);

    expect(screen.getByTestId('generic-input')).toBeInTheDocument();
    expect(screen.getByTestId('generic-input')).toHaveAttribute(
      'type',
      'email',
    );
  });

  it('should render the password GenericInput', () => {
    render(<GenericInput inputType="password" />);

    expect(screen.getByTestId('generic-input')).toBeInTheDocument();
    expect(screen.getByTestId('generic-input')).toHaveAttribute(
      'type',
      'password',
    );
  });

  it('should apply id to input', () => {
    render(<GenericInput inputType="text" id="test-id" />);

    expect(screen.getByTestId('generic-input')).toHaveAttribute(
      'id',
      'test-id',
    );
  });

  it('should apply label to input', () => {
    render(<GenericInput inputType="text" label="test-label" />);
    expect(screen.getByTestId('generic-input-label')).toBeInTheDocument();
    expect(screen.getByTestId('generic-input-label')).toHaveTextContent(
      'test-label',
    );
  });

  it('should apply required to input', () => {
    render(<GenericInput inputType="text" required />);
    expect(screen.getByTestId('generic-input')).toHaveAttribute('required');
  });

  it('should apply disabled to input', () => {
    render(<GenericInput inputType="text" disabled />);
    expect(screen.getByTestId('generic-input')).toHaveAttribute('disabled');
  });

  it('should apply color to input', () => {
    render(
      <GenericInput
        inputType="text"
        placeholderColor="blue"
        boxShadowColor="purple"
      />,
    );
    expect(screen.getByTestId('generic-input')).toHaveStyle({
      boxShadow: 'inset 0px 1px 7px purple',
      color: 'blue',
    });
  });

  it('should apply font size to input', () => {
    render(<GenericInput inputType="text" fontSize={16} />);
    expect(screen.getByTestId('generic-input')).toHaveStyle({
      fontSize: pxToRem(16),
    });
  });

  it('should apply width and height to input', () => {
    render(<GenericInput inputType="text" width={1} height={1} />);
    expect(screen.getByTestId('generic-input')).toHaveStyle({
      width: pxToRem(1),
    });
  });
});

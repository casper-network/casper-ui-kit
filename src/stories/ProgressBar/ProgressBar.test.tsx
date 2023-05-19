import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { ProgressBar } from '../../components';

const testCurrentStep = 'test';
const testProcessSteps = ['build', 'test', 'deploy'];

describe('ProgressBar.stories', () => {
  it('should render the Base progress bar', async () => {
    render(
      <ProgressBar
        currentStep={testCurrentStep}
        processSteps={testProcessSteps}
      />,
    );

    expect(screen.getByTestId('progress-bar')).toBeInTheDocument();
  });

  it('should ', async () => {
    render(
      <ProgressBar
        currentStep={testCurrentStep}
        processSteps={testProcessSteps}
      />,
    );

    expect(screen.getAllByTestId('node-indicator')[1]).toHaveStyle(
      'background-color: #FF2D2E',
    );
    expect(screen.getAllByTestId('node-indicator')[0]).toHaveStyle(
      'background-color: #F4F4F4',
    );
    expect(screen.getAllByTestId('node-indicator')[2]).toHaveStyle(
      'background-color: #F4F4F4',
    );
  });
});

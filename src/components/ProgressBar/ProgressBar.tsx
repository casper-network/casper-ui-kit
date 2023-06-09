import styled from 'src/styled';
import React from 'react';

import { defaultTheme } from '../../theme';

export interface ProgressBarProps {
  readonly processSteps: string[];
  readonly currentStep: string;
  readonly className?: string;
  readonly progressBarDataCy?: string;
  readonly nodeIndicatorDataCy?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  currentStep,
  processSteps,
  className,
  progressBarDataCy,
  nodeIndicatorDataCy,
}) => {
  return (
    <ProgressBarWrapper data-testid="progress-bar" data-cy={progressBarDataCy}>
      {processSteps.map(step => {
        return (
          <div className={className} key={step}>
            <NodeIndicator
              data-testid="node-indicator"
              data-cy={nodeIndicatorDataCy}
              checked={currentStep === step}
            />
            <NodeLabel>{step}</NodeLabel>
          </div>
        );
      })}
    </ProgressBarWrapper>
  );
};

const ProgressBarWrapper = styled.div`
  display: flex;
  width: 55%;
  justify-content: space-evenly;
  margin: 2rem auto;
  border-top: ${defaultTheme.colors.primary.CasperWhite} 3px solid;
`;

const NodeIndicator = styled.div<{ checked: boolean }>`
  position: relative;
  margin: 0 auto 1rem;
  top: -0.75rem;
  z-index: 1;
  border-radius: 50%;
  background-color: ${({ checked }) =>
    checked
      ? defaultTheme.colors.primary.CasperRed
      : defaultTheme.colors.primary.CasperWhite};
  width: 1.5rem;
  height: 1.5rem;
`;

const NodeLabel = styled.span`
  color: ${defaultTheme.colors.primary.Black};
  min-width: 8.125rem;
  position: relative;
`;

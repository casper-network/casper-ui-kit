import styled from '@emotion/styled';
import React from 'react';

import { defaultTheme } from '../../theme';

export interface ProgressBarProps {
  processSteps: string[];
  currentStep: string;
  className?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  currentStep,
  processSteps,
  className,
}) => {
  return (
    <ProgressBarWrapper data-testid="progress-bar">
      {processSteps.map(step => {
        return (
          <div className={className} key={step}>
            <NodeIndicator
              data-testid="node-indicator"
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

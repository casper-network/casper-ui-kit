import styled from '@emotion/styled';
import React from 'react';
import { NormalPalette } from '../../Theme';

export interface BaseToggleProps {
  toggleOptions: {
    left: string;
    right: string;
  };
  className?: string;
  onToggle?: () => void;
}

export const BaseToggle: React.FC<BaseToggleProps> = ({
  toggleOptions,
  className,
  onToggle,
}) => {
  const [selectedToggleOption, setSelectedToggleOption] = React.useState(
    toggleOptions.left,
  );
  const handleChange = () => {
    setSelectedToggleOption(
      selectedToggleOption === toggleOptions.left
        ? toggleOptions.right
        : toggleOptions.left,
    );
    onToggle?.();
  };

  return (
    <BaseToggleWrapper data-testid="baseToggle" className={className}>
      <ToggleLabel>{toggleOptions.left}</ToggleLabel>
      <Label>
        <Input
          data-testid="baseToggleCheckbox"
          type="checkbox"
          onChange={handleChange}
        />
        <Switch
          currentFilter={selectedToggleOption}
          toggleSettings={toggleOptions}
        />
      </Label>
      <ToggleLabel>{toggleOptions.right}</ToggleLabel>
    </BaseToggleWrapper>
  );
};

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 0.625rem;
  cursor: pointer;
`;

const Switch = styled.div<{
  currentFilter: string;
  toggleSettings: {
    left: string;
    right: string;
  };
}>`
  position: relative;
  width: 3.75rem;
  height: 2rem;
  background: ${NormalPalette.secondary.White};
  border-radius: 2rem;
  padding: 0.25rem;
  border: 3px ${NormalPalette.primary.CasperRed} solid;
  transition: 300ms all;
  margin: 0 1.25rem;

  &::before {
    transition: 300ms all;
    content: '';
    position: absolute;
    width: 1.75rem;
    height: 1.75rem;
    border-radius: 2.25rem;
    top: 50%;
    left: 0.25rem;
    background: ${NormalPalette.primary.CasperRed};
    transform: translate(
      ${({ currentFilter, toggleSettings }) =>
        currentFilter === toggleSettings.left ? 0 : '2rem'},
      -50%
    );
  }
`;

const Input = styled.input`
  opacity: 0;
  position: absolute;
`;

const BaseToggleWrapper = styled.div`
  display: flex;
  padding-top: 1.3rem;
  padding-bottom: 0.9rem;
  padding-right: 8.25rem;
`;

const ToggleLabel = styled.p`
  font-size: 1rem;
  font-weight: 500;
  padding-right: 0.25rem;
  margin-bottom: 0;
`;

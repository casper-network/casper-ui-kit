import styled from 'src/styled';
import React from 'react';
import { defaultTheme } from '../../../theme';

export interface BaseToggleProps {
  toggleOptions: {
    left: string;
    right: string;
  };
  color?: string;
  className?: string;
  onToggle?: () => void;
}

export const BaseToggle: React.FC<BaseToggleProps> = ({
  toggleOptions,
  color = 'black',
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
          color={color}
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
  color: string;
  toggleSettings: {
    left: string;
    right: string;
  };
}>`
  position: relative;
  width: 3.75rem;
  height: 2rem;
  background: ${defaultTheme.colors.secondary.White};
  border-radius: 2rem;
  padding: 0.25rem;
  border: 0.1875rem ${({ color }) => color} solid;
  transition: 300ms all;
  margin: 0 1.25rem;

  &::before {
    transition: 300ms all;
    content: '';
    position: absolute;
    width: 1.75rem;
    height: 1.75rem;
    border-radius: 2.25rem;
    top: -0.0625rem;
    background: ${({ color }) => color};
    left: ${({ currentFilter, toggleSettings }) =>
      currentFilter === toggleSettings.left ? 0 : '50%'};
  }
`;

const Input = styled.input`
  opacity: 0;
  position: absolute;
`;

const BaseToggleWrapper = styled.div`
  display: flex;
  padding: 1rem 0;
  align-items: center;
`;

const ToggleLabel = styled.p`
  font-size: 1rem;
  font-weight: 500;
  padding-right: 0.25rem;
  margin: 0;
`;

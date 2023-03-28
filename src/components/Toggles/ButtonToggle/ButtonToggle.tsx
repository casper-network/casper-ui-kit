import React, { useState } from 'react';
import styled from '@emotion/styled';
import { NormalPalette } from '../../Theme';

export interface ButtonToggleProps {
  toggleOptions: string[];
  className: string;
  onToggle?: () => void;
}

export const ButtonToggle: React.FC<ButtonToggleProps> = ({
  toggleOptions,
  onToggle,
  className,
}) => {
  const [selectedToggleOption, setSelectedToggleOption] = useState(
    toggleOptions[0],
  );

  const handleToggle = (toggleOption: string) => {
    setSelectedToggleOption(toggleOption);
    onToggle?.();
  };
  return (
    <div className={className}>
      {toggleOptions.map(toggleOption => (
        <ToggleButton
          key={toggleOption}
          type="submit"
          onClick={() => handleToggle(toggleOption)}
          disabled={toggleOption === selectedToggleOption}>
          {toggleOption}
        </ToggleButton>
      ))}
    </div>
  );
};

export const ToggleButton = styled.button`
  border: ${NormalPalette.primary.CasperWhite} 2px solid;
  text-align: center;
  padding: 0.25rem 1rem;
  cursor: pointer;
  background-color: ${NormalPalette.secondary.White};
  min-width: 6rem;

  :disabled {
    background-color: ${NormalPalette.primary.CasperRed};
    color: ${NormalPalette.secondary.White};
  }
`;

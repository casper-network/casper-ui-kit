import React, { useState } from 'react';
import styled from 'src/styled';
import { defaultTheme } from '../../../theme';

export interface ButtonToggleProps {
  toggleOptions: string[];
  buttonColor?: string;
  selectedColor?: string;
  buttonBorderColor?: string;
  className?: string;
  onToggle?: () => void;
}

export const ButtonToggle: React.FC<ButtonToggleProps> = ({
  toggleOptions,
  buttonColor,
  selectedColor,
  buttonBorderColor,
  className,
  onToggle,
}) => {
  const [selectedToggleOption, setSelectedToggleOption] = useState(
    toggleOptions[0],
  );

  const handleToggle = (toggleOption: string) => {
    setSelectedToggleOption(toggleOption);
    onToggle?.();
  };
  return (
    <div className={className} data-testid="button-toggle">
      {toggleOptions.map(toggleOption => (
        <ToggleButton
          key={toggleOption}
          type="submit"
          buttonColor={buttonColor || defaultTheme.colors.secondary.White}
          selectedColor={selectedColor || defaultTheme.colors.primary.CasperRed}
          buttonBorderColor={
            buttonBorderColor || defaultTheme.colors.secondary.White
          }
          onClick={() => handleToggle(toggleOption)}
          disabled={toggleOption === selectedToggleOption}>
          {toggleOption}
        </ToggleButton>
      ))}
    </div>
  );
};

export const ToggleButton = styled.button<{
  buttonColor: string;
  selectedColor: string;
  buttonBorderColor: string;
}>`
  border: ${({ buttonColor }) => buttonColor} 0.125rem solid;
  text-align: center;
  padding: 0.25rem 1rem;
  cursor: pointer;
  background-color: ${({ buttonColor }) => buttonColor};
  min-width: 6rem;

  :disabled {
    background-color: ${({ selectedColor }) => selectedColor};
    color: ${({ buttonColor }) => buttonColor};
  }
`;

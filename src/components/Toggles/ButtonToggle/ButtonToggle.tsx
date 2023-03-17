import React, { useState } from 'react';
import styled from '@emotion/styled';

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
  border: #64748b 2px solid;
  text-align: center;
  padding: 0.25rem 1rem;
  cursor: pointer;
  background-color: white;
  min-width: 6rem;
  :disabled {
    background-color: #64748b;
    color: white;
  }
`;

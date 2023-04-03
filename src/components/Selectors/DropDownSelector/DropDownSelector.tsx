import styled from '@emotion/styled';
import React, { ReactNode, useState } from 'react';
import Select, { PropsValue } from 'react-select';
import { NormalPalette } from '../../Theme';

export interface SelectOptions {
  value: string;
  label: string;
}

export interface DropDownSelectorProps {
  readonly currentSelection: SelectOptions;
  readonly name: string;
  readonly defaultValue: PropsValue<SelectOptions>;
  readonly options: SelectOptions[];
  readonly onChange?: () => void;
  readonly noOptionsMessage?: (obj: { inputValue: string }) => ReactNode;
  className?: string;
}

export const DropDownSelector: React.FC<DropDownSelectorProps> = ({
  currentSelection,
  name,
  defaultValue,
  options,
  onChange,
  className,
  noOptionsMessage = () => null,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentOption, setCurrentOption] = useState<null | SelectOptions>(
    currentSelection,
  );

  const handleChange = (selectedOption: SelectOptions | null) => {
    onChange?.();
    setCurrentOption(selectedOption);
  };

  return (
    <SelectWrapper
      className={className}
      isMenuOpen={isMenuOpen}
      data-testid="select-wrapper">
      <SelectLabel htmlFor="select">Select</SelectLabel>
      <Select
        aria-label="select-button"
        inputId="select"
        onMenuOpen={() => setIsMenuOpen(true)}
        onMenuClose={() => setIsMenuOpen(false)}
        defaultValue={defaultValue}
        value={currentOption}
        name={name}
        options={options}
        onChange={handleChange}
        isSearchable={false}
        noOptionsMessage={noOptionsMessage}
        classNamePrefix="react-select"
      />
    </SelectWrapper>
  );
};
const SelectLabel = styled.label`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
`;

const SelectWrapper = styled.div<{ isMenuOpen: boolean }>`
  .react-select__control {
    width: 9.9rem;
    box-shadow: none;
    border: none;
  }

  .react-select__value-container {
    height: 2.5rem;
    background-color: #fff;
    padding: 0.65rem 0rem;
    background-color: ${NormalPalette.secondary.White};
    margin: 0;
    border-radius: 0.375rem 0 0 0.375rem;
    box-shadow: inset 0px 1px 7px rgba(127, 128, 149, 0.2);
    position: relative;
  }

  .react-select__indicators {
    display: block;
    position: absolute;
    top: 0.1rem;
    left: 7.5rem;
    padding: 0;
  }

  .react-select__value-container:hover {
    cursor: pointer;
  }

  .react-select__single-value {
    color: ${NormalPalette.primary.Black};
    font-weight: 500;
    font-size: 1rem;
    text-align: left;
    padding: 0 2.3rem 0.35rem 1.5rem;
    margin: 0 auto;
  }

  .react-select__dropdown-indicator svg {
    color: ${NormalPalette.primary.Black};
    width: 1.6rem;
    transition: all 200ms ease-in;
    transform: ${({ isMenuOpen }) => (isMenuOpen ? 'rotate(180deg)' : null)};

    :focus,
    :hover {
      cursor: pointer;
    }
  }

  .react-select__indicator {
    display: block;
    color: ${NormalPalette.primary.Black};
    width: 5px;
    padding: 0.5rem 0.4rem 0.5rem 0;
  }

  .react-select__menu-list {
    color: ${NormalPalette.primary.Black};
    font-size: clamp(1rem, 1.2vw, 1.4rem);
    padding: 0;
    margin: 0;
    border-radius: 0.375rem;
  }

  .react-select__menu {
    text-align: center;
    background-color: ${NormalPalette.secondary.White};
    border-radius: 0.375rem;
    width: 9.9rem;
  }

  .react-select__option:hover,
  .react-select__option:focus {
    color: ${NormalPalette.primary.CasperRed};
    transition: ease-in-out, font-weight, color, 400ms;
    font-weight: 700;
  }

  .react-select__option {
    background-color: transparent;
  }

  .react-select__option--is-selected {
    display: none;
  }
`;

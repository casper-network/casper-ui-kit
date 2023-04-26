import React from 'react';
import styled from '@emotion/styled';
import { pxToRem } from '../../utils';
import { RadioButtonBoxGroupOptions } from './RadioButtonTypes';
import { RadioButtonBox } from './RadioButtonBox';

export interface RadioButtonBoxGroupProps {
  readonly options: RadioButtonBoxGroupOptions[];
  readonly width?: number;
  readonly orientation?: string;
}

export const RadioButtonBoxGroup: React.FC<RadioButtonBoxGroupProps> = ({
  options,
  width,
  orientation,
}) => {
  const renderOptions = () => {
    return options.map(
      ({
        value,
        name,
        disabled,
        required,
        color,
      }: RadioButtonBoxGroupOptions) => {
        const optionId = `radio-option-${value}`;

        return (
          <RadioButtonBox
            value={value}
            label={value}
            name={name}
            disabled={disabled}
            required={required}
            color={color}
            key={optionId}
          />
        );
      },
    );
  };

  return (
    <RadioButtonBoxContainer
      width={width}
      orientation={orientation}
      data-testid="RadioButtonBoxContainer">
      {renderOptions()}
    </RadioButtonBoxContainer>
  );
};

const RadioButtonBoxContainer = styled.div<{
  width?: number;
  orientation?: string;
}>`
  display: flex;
  flex-direction: ${({ orientation }) => orientation ?? 'column'};
  justify-content: space-between;
  width: ${({ width }) => (width ? pxToRem(width) : 'fit-content')};
`;
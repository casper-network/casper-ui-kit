import React from 'react';
import styled from 'src/styled';
import { pxToRem } from '../../utils';
import { RadioButtonBoxGroupOptions } from './RadioButtonTypes';
import { RadioButtonBox } from './RadioButtonBox';

export interface RadioButtonBoxGroupProps {
  readonly options: RadioButtonBoxGroupOptions[];
  readonly width?: number;
  readonly orientation?: string;
  readonly className?: string;
}

export const RadioButtonBoxGroup: React.FC<RadioButtonBoxGroupProps> = ({
  options,
  width,
  orientation,
  className,
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
      role="radiogroup"
      className={className}
      width={width}
      orientation={orientation}
      data-testid="radio-button-box-container">
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

import React from 'react';
import styled from '@emotion/styled';
import { pxToRem } from '../../utils';
import { OptionProps, RadioButtonLabelPositions } from './RadioButtonTypes';
import { BaseRadioButton } from './Partials/BaseRadioButton';
import { NormalPalette } from '../Theme';

export interface OptionGroupProps {
  readonly options: OptionProps[];
  readonly width?: number;
  readonly verticalPadding?: number;
  readonly orientation?: string;
  readonly onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const RadioButtonGroup: React.FC<OptionGroupProps> = ({
  options,
  width,
  orientation,
  onChange,
}) => {
  const renderOptions = () => {
    return options.map(
      (
        {
          label,
          name,
          disabled,
          required,
          labelPosition,
          gapSize,
          verticalPadding,
          ...rest
        }: OptionProps,
        index,
      ) => {
        const optionId = `radio-option-${label}`;

        return (
          <LabelRadioButtonContainer
            key={optionId}
            labelPosition={labelPosition}
            gapSize={gapSize}
            verticalPadding={verticalPadding}>
            <StyledLabel htmlFor="radio-button" disabled={disabled}>
              {label}
            </StyledLabel>
            <BaseRadioButton
              value={label}
              label={label}
              id={optionId}
              name={name}
              disabled={disabled}
              defaultChecked={index === 0}
              onChange={onChange}
              required={required}
              {...rest}
            />
          </LabelRadioButtonContainer>
        );
      },
    );
  };

  return (
    <RadioButtonsContainer
      width={width}
      orientation={orientation}
      data-testid="RadioButtonsContainer">
      {renderOptions()}
    </RadioButtonsContainer>
  );
};

const RadioButtonsContainer = styled.div<{
  width?: number;
  orientation?: string;
}>`
  display: flex;
  flex-direction: ${({ orientation }) => orientation ?? 'column'};
  justify-content: space-between;
  width: ${({ width }) => (width ? pxToRem(width) : 'fit-content')};
`;

const LabelRadioButtonContainer = styled.div<{
  labelPosition?: RadioButtonLabelPositions;
  gapSize?: number;
  verticalPadding?: number;
}>`
  display: flex;
  flex-direction: ${({ labelPosition }) => {
    if (labelPosition === 'top') return 'column';
    if (labelPosition === 'right') return 'row-reverse';
    if (labelPosition === 'bottom') return 'column-reverse';
    return 'row';
  }};
  justify-content: flex-end;
  align-items: center;
  gap: ${({ gapSize }) => (gapSize ? `${pxToRem(gapSize)}` : `${pxToRem(10)}`)};
  padding: ${({ verticalPadding }) =>
    verticalPadding ? `${pxToRem(verticalPadding)} 0` : `${pxToRem(2)} 0`};
`;

export const StyledLabel = styled.label<{ disabled?: boolean }>`
  color: ${({ disabled }) =>
    disabled
      ? `${NormalPalette.lowContrastSecondary.CasperLightGrey}`
      : `${NormalPalette.primary.Black}`};
  text-align: right;
`;

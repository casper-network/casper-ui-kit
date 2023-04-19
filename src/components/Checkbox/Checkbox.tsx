import styled from '@emotion/styled';
import React, { forwardRef, useState } from 'react';
import { pxToRem } from '../../utils';
import CheckboxSvg from '../../assets/svg/icons/checkbox.svg';

export type LabelPositions = 'top' | 'right' | 'bottom' | 'left';

export interface CheckboxProps {
  readonly checked?: boolean;
  readonly boxColor?: string;
  readonly checkmarkColor?: string;
  readonly label?: string;
  readonly labelPosition?: LabelPositions;
  readonly gapSize?: number;
  readonly width?: number;
  readonly checkmarkSize?: number;
  readonly borderWidth?: number;
  readonly disabled?: boolean;
  readonly required?: boolean;
  readonly name?: string;
  readonly value?: string | number;
  readonly onChange?: React.ChangeEventHandler<HTMLInputElement>;
  readonly ref?: React.ForwardedRef<HTMLInputElement>;
}

export const Checkbox: React.FC<CheckboxProps> = forwardRef(
  (
    {
      boxColor = '#02c1b0',
      checkmarkColor = '#02c1b0',
      label = 'Checkbox Label',
      labelPosition = 'left',
      gapSize = 10,
      width = 30,
      borderWidth = 2,
      checkmarkSize = 65,
      checked,
      disabled,
      onChange,
      value,
      name,
      required,
    },
    ref,
  ) => {
    const [isChecked, setIsChecked] = useState(checked);

    return (
      <LabelCheckboxContainer labelPosition={labelPosition} gapSize={gapSize}>
        <label>{label}</label>
        <CheckboxContainer
          onClick={() => setIsChecked(prev => !prev)}
          width={width}>
          <StyledCheckbox
            ref={ref}
            boxColor={boxColor}
            width={width}
            borderWidth={borderWidth}
            type="checkbox"
            onChange={onChange}
            disabled={disabled}
            value={value}
            name={name}
            checked={checked}
            required={required}
          />
          {isChecked && (
            <CheckboxSvgWrapper width={width} checkmarkSize={checkmarkSize}>
              <StyledCheckboxSvg
                checkmarkColor={checkmarkColor}
                disabled={disabled}
                required={required}
              />
            </CheckboxSvgWrapper>
          )}
        </CheckboxContainer>
      </LabelCheckboxContainer>
    );
  },
);

Checkbox.displayName = 'Checkbox';

const LabelCheckboxContainer = styled.div<{
  labelPosition: LabelPositions;
  gapSize: number;
}>`
  display: flex;
  flex-direction: ${({ labelPosition }) => {
    if (labelPosition === 'top') return 'column';
    if (labelPosition === 'right') return 'row-reverse';
    if (labelPosition === 'bottom') return 'column-reverse';
    return 'row';
  }};
  justify-content: center;
  align-items: center;
  gap: ${({ gapSize }) => `${pxToRem(gapSize)}`};
`;

const CheckboxContainer = styled.div<{ width: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: ${({ width }) => pxToRem(width)};
  height: ${({ width }) => pxToRem(width)};
`;

const StyledCheckbox = styled.input<{
  boxColor: string;
  disabled?: boolean;
  required?: boolean;
  borderWidth: number;
}>`
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  border: ${({ disabled, required, borderWidth, boxColor }) => {
    const disabledStyles = `${pxToRem(borderWidth)} solid #F1F1F4`;
    const requiredStyles = `${pxToRem(borderWidth)} solid #FF0000`;

    if (disabled) return disabledStyles;
    if (required) return requiredStyles;
    return `${pxToRem(borderWidth)}  solid ${boxColor}`;
  }};
  cursor: pointer;
  -webkit-appearance: none;
  appearance: none;
`;

const CheckboxSvgWrapper = styled.div<{
  width: number;
  checkmarkSize: number;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  margin: 0 auto;
  left: 0;
  right: 0;
  width: ${({ checkmarkSize }) => `${checkmarkSize}%`};
  max-width: ${({ width }) => pxToRem(width)};
  cursor: pointer;
`;

interface StyledCheckboxSvgProps {
  disabled?: boolean;
  required?: boolean;
  checkmarkColor: string;
}

const StyledCheckboxSvg = styled(CheckboxSvg)`
  fill: ${({ disabled, required, checkmarkColor }: StyledCheckboxSvgProps) => {
    let fillColor = checkmarkColor;

    if (disabled) {
      fillColor = '#F1F1F4';
      return fillColor;
    }

    if (required) return '#FF0000';

    return fillColor;
  }};
`;

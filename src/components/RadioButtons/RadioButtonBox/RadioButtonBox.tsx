import styled from '@emotion/styled';
import React from 'react';
import { pxToRem } from '../../../utils';
import XSvg from '../../../assets/svg/icons/x-icon.svg';

export type LabelPositions = 'top' | 'right' | 'bottom' | 'left';

export interface RadioButtonBoxProps {
  readonly defaultChecked?: boolean;
  readonly color?: string;
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
  readonly onChange?: () => void;
}

export const RadioButtonBox: React.FC<RadioButtonBoxProps> = ({
  color = '#02c1b0',
  label = 'Checkbox Label',
  labelPosition = 'left',
  gapSize = 10,
  width = 30,
  borderWidth = 2,
  checkmarkSize = 65,
  defaultChecked,
  disabled,
  onChange,
  value,
  name,
  required,
}) => {
  return (
    <LabelCheckboxContainer labelPosition={labelPosition} gapSize={gapSize}>
      <label>{label}</label>
      <CheckboxContainer width={width}>
        <StyledCheckbox
          color={color}
          width={width}
          borderWidth={borderWidth}
          type="radio"
          disabled={disabled}
          value={value}
          onClick={onChange}
          name={name}
          required={required}
          defaultChecked={defaultChecked}
        />

        <CheckboxSvgWrapper width={width} checkmarkSize={checkmarkSize}>
          <StyledCheckboxSvg
            color={color}
            disabled={disabled}
            required={required}
          />
        </CheckboxSvgWrapper>
      </CheckboxContainer>
    </LabelCheckboxContainer>
  );
};

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
  color: string;
  disabled?: boolean;
  required?: boolean;
  borderWidth: number;
}>`
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  border: ${({ disabled, required, borderWidth, color }) => {
    const disabledStyles = `${pxToRem(borderWidth)} solid #F1F1F4`;
    const requiredStyles = `${pxToRem(borderWidth)} solid #FF0000`;

    if (disabled) return disabledStyles;
    if (required) return requiredStyles;
    return `${pxToRem(borderWidth)}  solid ${color}`;
  }};
  cursor: pointer;
  -webkit-appearance: none;
  appearance: none;

  + div {
    display: none;
  }

  :checked {
    + div {
      display: block;
    }
  }
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
  color: string;
}

const StyledCheckboxSvg = styled(XSvg)`
  fill: ${({ disabled, required, color }: StyledCheckboxSvgProps) => {
    let fillColor = color;

    if (disabled) {
      fillColor = '#F1F1F4';
      return fillColor;
    }

    if (required) return '#FF0000';

    return fillColor;
  }};
`;

import styled from '@emotion/styled';
import React, { useState } from 'react';
import { pxToRem } from '../../utils';
import CheckboxSvg from '../../assets/svg/checkbox.svg';

export interface CheckboxProps {
  readonly boxColor: string;
  readonly checkmarkColor: string;
  readonly label?: string;
  readonly width?: number;
  readonly checkmarkSize?: number;
  readonly borderWidth?: number;
  readonly checked?: boolean;
  readonly disabled?: boolean;
  readonly onChange?: React.ChangeEventHandler<HTMLInputElement>;
  readonly required?: boolean;
  readonly name?: string;
  readonly value?: string | number;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  boxColor = '#02c1b0',
  checkmarkColor = '#02c1b0',
  label = 'Checkbox Label',
  width = 30,
  borderWidth = 2,
  checkmarkSize = 65,
  checked = false,
  disabled,
  onChange,
  value,
  name,
  required,
}) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <LabelCheckboxContainer>
      <CheckboxContainer
        onClick={() => setIsChecked(prev => !prev)}
        width={width}>
        <StyledCheckbox
          boxColor={boxColor}
          width={width}
          borderWidth={borderWidth}
          type="checkbox"
          onChange={onChange}
          disabled={disabled}
          value={value}
          name={name}
          required={required}
        />
        {(isChecked || checked) && (
          <CheckboxSvgWrapper width={width} checkmarkSize={checkmarkSize}>
            <StyledSvg
              checkmarkColor={checkmarkColor}
              disabled={disabled}
              required={required}>
              <CheckboxSvg />
            </StyledSvg>
          </CheckboxSvgWrapper>
        )}
      </CheckboxContainer>
      <label>{label}</label>
    </LabelCheckboxContainer>
  );
};

const LabelCheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${pxToRem(10)};
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
  border: ${({ disabled, required, borderWidth, boxColor }) =>
    disabled
      ? `${pxToRem(borderWidth)} solid #F1F1F4`
      : required
      ? `${pxToRem(borderWidth)} solid #FF0000`
      : `${pxToRem(borderWidth)}  solid ${boxColor}`};
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

const StyledSvg = styled.svg<{
  checkmarkColor: string;
  disabled?: boolean;
  required?: boolean;
}>`
  fill: ${({ disabled, required, checkmarkColor }) =>
    disabled ? '#F1F1F4' : required ? '#FF0000' : checkmarkColor};
`;

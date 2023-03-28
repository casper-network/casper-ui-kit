import styled from '@emotion/styled';
import React, { useState } from 'react';
import { pxToRem } from '../../utils';
import TogglePasswordViewIcon from '../../assets/svg/icons/view-password-icon.svg';

export type LabelPositions = 'top' | 'right' | 'bottom' | 'left';

export interface PasswordInputProps {
  readonly label?: string;
  readonly labelPosition?: LabelPositions;
  readonly gapSize?: number;
  readonly fontSize?: number;
  readonly fontColor?: string;
  readonly placeholder?: string;
  readonly placeholderColor?: string;
  readonly svgColor?: string;
  readonly boxShadowColor?: string;
  readonly focusBorderColor?: string;
  readonly focusBorderWidth?: number;
  readonly width?: number;
  readonly height?: number;
  readonly minPasswordLength?: number;
  readonly maxPasswordLength?: number;
  readonly pattern?: string;
  readonly disabled?: boolean;
  readonly required?: boolean;
  readonly onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export const PasswordInput: React.FC<PasswordInputProps> = ({
  label = 'Password Label',
  labelPosition = 'left',
  gapSize,
  fontSize,
  fontColor,
  placeholder = '••••••••••••••••••••',
  placeholderColor,
  svgColor,
  boxShadowColor,
  focusBorderColor,
  focusBorderWidth,
  width,
  height,
  minPasswordLength = 1,
  maxPasswordLength = 20,
  pattern,
  onChange,
  required,
  disabled,
}) => {
  const [passwordIsVisible, setPasswordIsVisible] = useState<boolean>();

  return (
    <LabelPasswordInputContainer
      labelPosition={labelPosition}
      gapSize={gapSize}>
      <label>{label}</label>
      <InputIconContainer>
        <StyledPasswordInput
          fontSize={fontSize}
          fontColor={fontColor}
          boxShadowColor={boxShadowColor}
          focusBorderColor={focusBorderColor}
          focusBorderWidth={focusBorderWidth}
          width={width}
          height={height}
          placeholder={placeholder}
          placeholderColor={placeholderColor}
          type={passwordIsVisible ? 'text' : 'password'}
          min={minPasswordLength}
          maxLength={maxPasswordLength}
          pattern={pattern}
          onChange={onChange}
          required={required}
          disabled={disabled}
        />
        <ViewPasswordButton
          onClick={() => setPasswordIsVisible(prev => !prev)}
          svgColor={svgColor}
          focusBorderColor={focusBorderColor}
          focusBorderWidth={focusBorderWidth}>
          <TogglePasswordViewIcon />
        </ViewPasswordButton>
      </InputIconContainer>
    </LabelPasswordInputContainer>
  );
};

const LabelPasswordInputContainer = styled.div<{
  labelPosition: LabelPositions;
  gapSize?: number;
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
  gap: ${({ gapSize }) => (gapSize ? `${pxToRem(gapSize)}` : `${pxToRem(10)}`)};
`;

const InputIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const StyledPasswordInput = styled.input<{
  fontSize?: number;
  fontColor?: string;
  placeholderColor?: string;
  boxShadowColor?: string;
  focusBorderColor?: string;
  focusBorderWidth?: number;
  width?: number;
  height?: number;
}>`
  font-size: ${({ fontSize }) =>
    fontSize ? `${pxToRem(fontSize)}` : '0.85rem'};
  color: ${({ fontColor }) => fontColor ?? '#000'};
  background-color: #fff;
  width: ${({ width }) => (width ? `${pxToRem(width)}` : `${pxToRem(190)}`)};
  height: ${({ height }) => (height ? `${pxToRem(height)}` : `${pxToRem(36)}`)};
  box-shadow: ${({ boxShadowColor }) =>
    `inset 0px 1px 7px ${
      boxShadowColor ? `${boxShadowColor}4c` : 'rgba(127, 128, 149, 0.3)'
    }`};
  border-radius: ${pxToRem(8)};
  border: ${({ focusBorderWidth, required }) =>
    `solid ${required ? '#FF0000' : 'transparent'} ${
      focusBorderWidth ? pxToRem(focusBorderWidth) : '0.125rem'
    } `};
  border-radius: ${pxToRem(8)};
  padding-left: 1.5rem;
  -webkit-appearance: none;
  appearance: none;

  &:placeholder-shown {
    color: ${({ placeholderColor }) => placeholderColor ?? '#a4a3a1'};
  }

  &:focus {
    border: ${({ focusBorderColor, focusBorderWidth }) =>
      `solid ${focusBorderWidth ? pxToRem(focusBorderWidth) : '0.125rem'} ${
        focusBorderColor ?? 'blue'
      }`};
    outline: none;
  }
`;

const ViewPasswordButton = styled.button<{
  svgColor?: string;
  focusBorderColor?: string;
  focusBorderWidth?: number;
}>`
  background-color: transparent;
  fill: ${({ svgColor }) => svgColor ?? '#A4A3A1'};
  border: ${({ focusBorderWidth }) =>
    `solid transparent ${
      focusBorderWidth ? pxToRem(focusBorderWidth) : '0.125rem'
    } `};
  position: absolute;
  right: 1rem;
  cursor: pointer;
  -webkit-appearance: none;
  appearance: none;

  &:focus {
    border: ${({ focusBorderColor, focusBorderWidth }) =>
      `solid ${focusBorderWidth ? pxToRem(focusBorderWidth) : '0.125rem'} ${
        focusBorderColor ?? 'blue'
      }`};
    border-radius: ${pxToRem(8)};
    outline: none;
  }
`;

import styled from '@emotion/styled';
import React from 'react';
import { pxToRem } from '../../utils';

export type LabelPositions = 'top' | 'right' | 'bottom' | 'left';

export interface EmailInputProps {
  readonly label?: string;
  readonly labelPosition?: LabelPositions;
  readonly gapSize?: number;
  readonly fontSize?: number;
  readonly fontColor?: string;
  readonly placeholder?: string;
  readonly placeholderColor?: string;
  readonly boxShadowColor?: string;
  readonly focusBorderColor?: string;
  readonly focusBorderWidth?: number;
  readonly width?: number;
  readonly height?: number;
  readonly minEmailLength?: number;
  readonly maxEmailLength?: number;
  readonly pattern?: string;
  readonly disabled?: boolean;
  readonly required?: boolean;
  readonly onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export const EmailInput: React.FC<EmailInputProps> = ({
  label = 'email label',
  labelPosition = 'left',
  gapSize,
  fontSize,
  fontColor,
  placeholder = 'Enter email address',
  placeholderColor,
  boxShadowColor,
  focusBorderColor,
  focusBorderWidth,
  width,
  height,
  minEmailLength = 1,
  maxEmailLength = 20,
  pattern,
  onChange,
  required,
  disabled,
}) => {
  return (
    <LabelPasswordInputContainer
      labelPosition={labelPosition}
      gapSize={gapSize}>
      <label>{label}</label>
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
        type="email"
        minLength={minEmailLength}
        maxLength={maxEmailLength}
        pattern={pattern}
        onChange={onChange}
        required={required}
        disabled={disabled}
      />
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

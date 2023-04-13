import styled from '@emotion/styled';
import React from 'react';
import { pxToRem } from '../../utils';

export type GenericLabelPositions = 'top' | 'right' | 'bottom' | 'left';
export type GenericTypes = 'text' | 'email' | 'password';

export interface GenericInputProps {
  readonly inputType: GenericTypes;
  readonly label?: string;
  readonly labelPosition?: GenericLabelPositions;
  readonly gapSize?: number;
  readonly fontSize?: number;
  readonly fontColor?: string;
  readonly placeholder?: string;
  readonly placeholderColor?: string;
  readonly boxShadowColor?: string;
  readonly borderColor?: string;
  readonly focusBorderColor?: string;
  readonly focusBorderWidth?: number;
  readonly width?: number;
  readonly height?: number;
  readonly minTextLength?: number;
  readonly maxTextLength?: number;
  readonly spellcheck?: boolean;
  readonly pattern?: string;
  readonly disabled?: boolean;
  readonly required?: boolean;
  readonly onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export const GenericInput: React.FC<GenericInputProps> = ({
  inputType = 'tel',
  label = 'Generic label',
  labelPosition = 'left',
  gapSize,
  fontSize,
  fontColor,
  placeholder = 'Enter text',
  placeholderColor,
  boxShadowColor,
  borderColor,
  focusBorderColor,
  focusBorderWidth,
  width,
  height,
  minTextLength,
  maxTextLength,
  spellcheck,
  pattern,
  onChange,
  required,
  disabled,
}) => (
  <LabelPasswordInputContainer labelPosition={labelPosition} gapSize={gapSize}>
    <label>{label}</label>
    <StyledInput
      type={inputType}
      fontSize={fontSize}
      fontColor={fontColor}
      boxShadowColor={boxShadowColor}
      borderColor={borderColor}
      focusBorderColor={focusBorderColor}
      focusBorderWidth={focusBorderWidth}
      width={width}
      height={height}
      placeholder={placeholder}
      placeholderColor={placeholderColor}
      minLength={minTextLength}
      maxLength={maxTextLength}
      spellCheck={spellcheck}
      pattern={pattern}
      onChange={onChange}
      required={required}
      disabled={disabled}
      data-testid="generic-input"
    />
  </LabelPasswordInputContainer>
);

const LabelPasswordInputContainer = styled.div<{
  labelPosition: GenericLabelPositions;
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

const StyledInput = styled.input<{
  fontSize?: number;
  fontColor?: string;
  placeholderColor?: string;
  boxShadowColor?: string;
  borderColor?: string;
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
      boxShadowColor ? `${boxShadowColor}` : 'rgba(127, 128, 149, 0.3)'
    }`};
  border-radius: ${pxToRem(8)};
  border: ${({ borderColor, focusBorderWidth, required }) => {
    const baseBorderColor = borderColor ?? 'transparent';
    const color = required ? '#FF0000' : baseBorderColor;
    const width = focusBorderWidth ? pxToRem(focusBorderWidth) : '0.125rem';

    return `solid ${color} ${width}`;
  }};
  border-radius: ${pxToRem(8)};
  padding-left: 1.5rem;
  -webkit-appearance: none;
  appearance: none;

  &:placeholder-shown {
    color: ${({ placeholderColor }) => placeholderColor ?? '#a4a3a1'};
  }

  &:focus {
    border: ${({ focusBorderColor, focusBorderWidth }) => {
      const width = focusBorderWidth ? pxToRem(focusBorderWidth) : '0.125rem';
      const color = focusBorderColor ?? 'blue';
      return `solid ${color} ${width} `;
    }};
    outline: none;
  }
`;

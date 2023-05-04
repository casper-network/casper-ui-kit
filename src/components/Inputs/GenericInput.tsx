import styled from 'src/styled';
import React, { InputHTMLAttributes, forwardRef, useState } from 'react';
import { pxToRem } from '../../utils';
import ViewPasswordIcon from '../../assets/svg/icons/view-password-icon.svg';
import HidePasswordIcon from '../../assets/svg/icons/hide-password-icon.svg';

export type GenericLabelPositions = 'top' | 'right' | 'bottom' | 'left';
export type GenericTypes = 'text' | 'email' | 'password' | 'radio';

export interface GenericInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  readonly inputType: GenericTypes;
  readonly label?: string;
  readonly labelPosition?: GenericLabelPositions;
  readonly passwordToggle?: boolean;
  readonly gapSize?: number;
  readonly fontSize?: number;
  readonly fontColor?: string;
  readonly svgColor?: string;
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
  readonly ref?: React.ForwardedRef<HTMLInputElement>;
  readonly id?: string;
}

export const GenericInput: React.FC<GenericInputProps> = forwardRef(
  (
    {
      inputType = 'text',
      id = 'genericInput',
      label,
      labelPosition = 'left',
      passwordToggle = false,
      gapSize,
      fontSize,
      fontColor,
      svgColor,
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
      ...baseInputProps
    },
    ref,
  ) => {
    const [passwordIsVisible, setPasswordIsVisible] = useState(passwordToggle);
    const toggleView = passwordIsVisible ? (
      <ViewPasswordIcon />
    ) : (
      <HidePasswordIcon />
    );

    return (
      <LabelPasswordInputContainer
        labelPosition={labelPosition}
        gapSize={gapSize}>
        <label htmlFor={id}>{label}</label>
        <InputIconContainer>
          <StyledInput
            id={id}
            ref={ref}
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
            {...baseInputProps}
            data-testid="generic-input"
          />
          {passwordToggle && (
            <ViewPasswordButton
              type="button"
              onClick={() => setPasswordIsVisible(prev => !prev)}
              svgColor={svgColor}
              focusBorderColor={focusBorderColor}
              focusBorderWidth={focusBorderWidth}>
              {toggleView}
            </ViewPasswordButton>
          )}
        </InputIconContainer>
      </LabelPasswordInputContainer>
    );
  },
);

GenericInput.displayName = 'GenericInput';

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

const InputIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
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
    border: ${({ focusBorderColor, focusBorderWidth }) => {
      const color = focusBorderColor ?? 'blue';
      const width = focusBorderWidth ? pxToRem(focusBorderWidth) : '0.125rem';
      return `solid ${color} ${width}`;
    }};
    border-radius: ${pxToRem(8)};
    outline: none;
  }
`;

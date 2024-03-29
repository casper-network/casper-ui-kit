import styled from 'src/styled';
import React, { InputHTMLAttributes, forwardRef } from 'react';
import { pxToRem } from '../../utils';

export type EmailLabelPositions = 'top' | 'right' | 'bottom' | 'left';

export interface EmailInputProps extends InputHTMLAttributes<HTMLInputElement> {
  readonly label?: string;
  readonly labelPosition?: EmailLabelPositions;
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
  readonly minEmailLength?: number;
  readonly maxEmailLength?: number;
  readonly multiple?: boolean;
  readonly pattern?: string;
  readonly disabled?: boolean;
  readonly required?: boolean;
  readonly onChange?: React.ChangeEventHandler<HTMLInputElement>;
  readonly ref?: React.ForwardedRef<HTMLInputElement>;
  readonly id?: string;
  readonly className?: string;
  readonly dataCy?: string;
}

export const EmailInput: React.FC<EmailInputProps> = forwardRef(
  (
    {
      id,
      label,
      labelPosition = 'left',
      gapSize,
      fontSize,
      fontColor,
      placeholder = 'Enter email address',
      placeholderColor,
      boxShadowColor,
      borderColor,
      focusBorderColor,
      focusBorderWidth,
      width,
      height,
      minEmailLength = 1,
      maxEmailLength = 254,
      multiple,
      pattern,
      onChange,
      required,
      disabled,
      className,
      dataCy,
      ...baseInputProps
    },
    ref,
  ) => (
    <LabelPasswordInputContainer
      className={className}
      labelPosition={labelPosition}
      gapSize={gapSize}>
      <label data-testid="email-input-label" htmlFor={id}>
        {label}
      </label>
      <StyledPasswordInput
        id={id}
        ref={ref}
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
        type="email"
        minLength={minEmailLength}
        maxLength={maxEmailLength}
        multiple={multiple}
        pattern={pattern}
        onChange={onChange}
        required={required}
        disabled={disabled}
        data-testid="email-input"
        data-cy={dataCy}
        {...baseInputProps}
      />
    </LabelPasswordInputContainer>
  ),
);

EmailInput.displayName = 'EmailInput';

const LabelPasswordInputContainer = styled.div<{
  labelPosition: EmailLabelPositions;
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
    const width = focusBorderWidth ? pxToRem(focusBorderWidth) : '0.125rem';
    const color = required ? '#FF0000' : baseBorderColor;
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

import React, { InputHTMLAttributes, forwardRef, useState } from 'react';
import styled from '@emotion/styled';
import { pxToRem } from '../../utils';
import ArrowUpIcon from '../../assets/svg/icons/arrow-up-icon.svg';
import ArrowDownIcon from '../../assets/svg/icons/arrow-down-icon.svg';

export type NumberLabelPositions = 'top' | 'right' | 'bottom' | 'left';

export interface NumberInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  readonly label?: string;
  readonly labelPosition?: NumberLabelPositions;
  readonly gapSize?: number;
  readonly fontSize?: number;
  readonly fontColor?: string;
  readonly arrowColor?: string;
  readonly boxShadowColor?: string;
  readonly focusBorderColor?: string;
  readonly focusBorderWidth?: number;
  readonly width?: number;
  readonly height?: number;
  readonly readonly?: boolean;
  readonly defaultValue?: number;
  readonly step?: number;
  readonly minNumberValue?: number;
  readonly maxNumberValue?: number;
  readonly disabled?: boolean;
  readonly required?: boolean;
  readonly ref?: React.ForwardedRef<HTMLInputElement>;
}

export const NumberInput: React.FC<NumberInputProps> = forwardRef(
  function NumberInput(
    {
      label = 'number input',
      labelPosition,
      gapSize,
      fontSize,
      fontColor,
      boxShadowColor,
      focusBorderColor,
      focusBorderWidth = 1,
      width,
      height,
      arrowColor,
      readonly = false,
      defaultValue = 0,
      step = 1,
      minNumberValue = 0,
      maxNumberValue = 20,
      required,
      disabled,
      ...rest
    },
    ref,
  ) {
    const [inputValue, setInputValue] = useState(defaultValue);

    const onChangeHandler = (e: { target: { value: string | number } }) =>
      setInputValue(+e.target.value);

    const handleIncrement = () =>
      inputValue < maxNumberValue
        ? setInputValue(prev => prev + step)
        : setInputValue(maxNumberValue);

    const handleDecrement = () => {
      if (inputValue > maxNumberValue) {
        setInputValue(maxNumberValue);
      }
      if (inputValue > minNumberValue) {
        setInputValue(prev => prev - step);
      } else {
        setInputValue(minNumberValue);
      }
    };

    return (
      <LabelPasswordInputContainer
        labelPosition={labelPosition}
        gapSize={gapSize}>
        <label>{label}</label>
        <InputAndArrowsContainer
          height={height}
          boxShadowColor={boxShadowColor}>
          <StyledInput
            ref={ref}
            type="number"
            fontSize={fontSize}
            fontColor={fontColor}
            width={width}
            min={minNumberValue}
            max={maxNumberValue}
            step={step}
            value={inputValue.toFixed(0)}
            readOnly={readonly}
            focusBorderColor={focusBorderColor}
            focusBorderWidth={focusBorderWidth}
            required={required}
            disabled={disabled}
            onChange={onChangeHandler}
            {...rest}
          />
          <ArrowsContainer>
            <ArrowButton
              arrowColor={arrowColor}
              focusBorderColor={focusBorderColor}
              focusBorderWidth={focusBorderWidth}
              disabled={disabled}
              onClick={handleIncrement}>
              <ArrowUpIcon />
            </ArrowButton>
            <ArrowButton
              arrowColor={arrowColor}
              focusBorderColor={focusBorderColor}
              focusBorderWidth={focusBorderWidth}
              disabled={disabled}
              onClick={handleDecrement}>
              <ArrowDownIcon />
            </ArrowButton>
          </ArrowsContainer>
        </InputAndArrowsContainer>
      </LabelPasswordInputContainer>
    );
  },
);

const LabelPasswordInputContainer = styled.div<{
  labelPosition?: NumberLabelPositions;
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

const InputAndArrowsContainer = styled.div<{
  boxShadowColor?: string;
  height?: number;
}>`
  display: flex;
  height: ${({ height }) => (height ? `${pxToRem(height)}` : `${pxToRem(27)}`)};
  align-items: center;
  box-shadow: ${({ boxShadowColor }) =>
    `inset 0px 1px 7px ${
      boxShadowColor ? `${boxShadowColor}` : 'rgba(127, 128, 149, 0.3)'
    }`};
  border-radius: ${pxToRem(8)};
  padding: ${pxToRem(2)} ${pxToRem(5)};
  margin: 0;
`;

const ArrowsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: ${pxToRem(24)};
`;

const ArrowButton = styled.button<{
  arrowColor?: string;
  disabled?: boolean;
  focusBorderColor?: string;
  focusBorderWidth?: number;
}>`
  display: flex;
  fill: ${({ arrowColor, disabled }) => {
    if (disabled) return 'grey';
    if (arrowColor) return arrowColor;
    return '#02c1b0';
  }};
  align-items: center;
  background-color: transparent;
  padding: 0;
  border: ${({ focusBorderWidth }) =>
    `solid transparent ${
      focusBorderWidth ? pxToRem(focusBorderWidth) : '0.125rem'
    }`};
  border-radius: ${pxToRem(8)};

  &:focus {
    border: ${({ focusBorderColor, focusBorderWidth }) => {
      const width = focusBorderWidth ? pxToRem(focusBorderWidth) : '0.125rem';
      const color = focusBorderColor ?? 'blue';
      return `solid ${color} ${width} `;
    }};
    outline: none;
  }
`;

const StyledInput = styled.input<{
  fontSize?: number;
  fontColor?: string;
  width?: number;
  height?: number;
  focusBorderColor?: string;
  focusBorderWidth?: number;
  required?: boolean;
}>`
  font-size: ${({ fontSize }) =>
    fontSize ? `${pxToRem(fontSize)}` : `${pxToRem(14)}`};
  color: ${({ fontColor }) => fontColor ?? '#000'};
  background-color: transparent;
  width: ${({ width }) => (width ? `${pxToRem(width)}` : `${pxToRem(20)}`)};
  border: ${({ focusBorderWidth, required }) => {
    const width = focusBorderWidth ? pxToRem(focusBorderWidth) : '0.125rem';
    const color = required ? '#FF0000' : 'transparent';
    return `solid ${color} ${width}`;
  }};
  border-radius: ${pxToRem(8)};
  outline: none;
  -moz-appearance: textfield;

  ::-webkit-inner-spin-button,
  -webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &:focus {
    border: ${({ focusBorderColor, focusBorderWidth }) => {
      const width = focusBorderWidth ? pxToRem(focusBorderWidth) : '0.125rem';
      const color = focusBorderColor ?? 'blue';
      return `solid ${color} ${width} `;
    }};
  }
`;

import styled from '@emotion/styled';
import React, { useState } from 'react';
import { pxToRem } from '../../utils';
import TogglePasswordViewIcon from '../../assets/svg/icons/view-password-icon.svg';

export type LabelPositions = 'top' | 'right' | 'bottom' | 'left';

export interface PasswordInputProps {
  readonly label?: string;
  readonly labelPosition?: LabelPositions;
  readonly gapSize?: number;
  readonly placeholder?: string;
  readonly fontSize?: number;
  readonly color?: string;
  readonly width?: number;
  readonly height?: number;
  readonly minPasswordLength?: number;
  readonly maxPasswordLength?: number;
  // TODO: KEEP LOOKING AT ATTRIBUTES.  CAN THERE BE JUST ONE INPUT COMPONENT?
  // readonly pattern?: RegExp;
  //   readonly initialChecked?: boolean;
  //   readonly disabled?: boolean;
  readonly required?: boolean;
  //   readonly name?: string;
  //   readonly value?: string | number;
  readonly onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export const PasswordInput: React.FC<PasswordInputProps> = ({
  label = 'Password Label',
  labelPosition = 'left',
  gapSize,
  placeholder = '••••••••••••••••••••',
  fontSize,
  color,
  width,
  height,
  minPasswordLength = 1,
  maxPasswordLength = 20,
  // TODO: FIGURE OUT REGEX STUFF
  // pattern = '[sS]*',
  //   initialChecked = false,
  //   disabled,
  onChange,
  //   value,
  //   name,
  required,
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
          color={color}
          width={width}
          height={height}
          placeholder={placeholder}
          type={passwordIsVisible ? 'text' : 'password'}
          min={minPasswordLength}
          maxLength={maxPasswordLength}
          // pattern={pattern}
          onChange={onChange}
          //   disabled={disabled}
          //   value={value}
          //   name={name}
          required={required}
        />
        <ViewPasswordButton onClick={() => setPasswordIsVisible(prev => !prev)}>
          {/* TODO: ADD COLOR OPTION */}
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
// TODO: ADD COLOR TO BOX-SHADOW
// TODO: BACKGROUND-COLOR COULD BE AN OPTION
const StyledPasswordInput = styled.input<{
  fontSize?: number;
  color?: string;
  width?: number;
  height?: number;
}>`
  font-size: ${({ fontSize }) => (fontSize ? `${pxToRem(fontSize)}` : '13.75')};
  color: ${({ color }) => color ?? 'magenta'};
  background-color: #fff;
  width: ${({ width }) => (width ? `${pxToRem(width)}` : `${pxToRem(197)}`)};
  height: ${({ height }) => (height ? `${pxToRem(height)}` : `${pxToRem(36)}`)};
  box-shadow: inset 0px 1px 7px rgba(127, 128, 149, 0.3);
  border-radius: ${pxToRem(8)};
  border-style: none;
  padding-left: 1.5rem;
  -webkit-appearance: none;
  appearance: none;
`;

const ViewPasswordButton = styled.button`
  background-color: transparent;
  border: none;
  position: absolute;
  right: 1.35rem;
  cursor: pointer;
  -webkit-appearance: none;
  appearance: none;
`;

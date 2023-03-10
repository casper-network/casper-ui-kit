import styled from '@emotion/styled';
import React, { useState } from 'react';
import { pxToRem } from '../../utils';

export interface CheckboxProps {
  readonly label?: string;
  readonly checked?: boolean;
  readonly disabled?: boolean;
  readonly onChange?: React.ChangeEventHandler<HTMLInputElement>;
  readonly required?: boolean;
  readonly name?: string;
  readonly value?: string | number;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  label = 'Checkbox Label',
  checked,
  disabled,
  onChange,
  value,
  name,
  required,
}) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <CheckboxWrapper>
      <StyledCheckbox
        data-testid="checkbox"
        type="checkbox"
        isChecked={isChecked}
        onChange={onChange}
        onClick={() => setIsChecked(!isChecked)}
        checked={checked}
        disabled={disabled}
        value={value}
        name={name}
        required={required}
      />
      <label data-testid="checkboxLabel">{label}</label>
    </CheckboxWrapper>
  );
};

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${pxToRem(5)};
  background-color: #fff;
`;

const StyledCheckbox = styled.input<{
  isChecked: boolean;
  disabled: boolean | undefined;
  checked: boolean | undefined;
}>`
  width: ${pxToRem(30)};
  height: ${pxToRem(30)};
  background-color: #fff;
  position: ${({ isChecked, checked, disabled }) =>
    !isChecked && !checked && !disabled ? 'static' : 'relative'};
  border: ${({ disabled }) =>
    disabled ? `${pxToRem(2)} solid #F1F1F4` : `${pxToRem(2)} solid #02c1b0`};
  outline: none;
  cursor: pointer;
  -webkit-appearance: none;
  appearance: none;

  ::after {
    display: ${({ isChecked, checked, disabled }) =>
      !isChecked && !checked && !disabled ? 'none' : 'inline-block'};
    position: absolute;
    right: ${pxToRem(1.35)};
    top: ${pxToRem(-9.75)};
    content: '\\00d7';
    font-size: ${pxToRem(40)};
    color: ${({ disabled }) => (disabled ? '#F1F1F4' : '#02c1b0')};
  }
`;

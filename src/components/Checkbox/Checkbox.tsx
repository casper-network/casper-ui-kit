import styled from '@emotion/styled';
import React, { useState } from 'react';
import { pxToRem } from '../../utils';

export interface CheckboxProps {
  readonly label?: string;
  readonly disabled?: boolean;
  readonly checked?: boolean;
  readonly value?: string | number;
  readonly name?: string;
  readonly required?: boolean;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  label = 'Checkbox Label',
  checked,
  disabled,
  value,
  name,
  required,
}) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <CheckboxWrapper>
      <StyledCheckbox
        type="checkbox"
        isChecked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
        checked={checked}
        disabled={disabled}
        value={value}
        name={name}
        required={required}
      />
      <label>{label}</label>
      {/* <p>{isChecked ? 'Checked' : 'Unchecked'}</p> */}
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
  isChecked: boolean | undefined;
  disabled: boolean | undefined;
  checked: boolean | undefined;
}>`
  width: ${pxToRem(30)};
  height: ${pxToRem(30)};
  background-color: #fff;
  position: ${({ isChecked, checked, disabled }) =>
    !isChecked && !checked && !disabled ? 'static' : 'relative'};
  border: ${({ disabled }) =>
    disabled ? `0.15em solid #F1F1F4` : '0.15em solid #02c1b0'};
  outline: none;
  cursor: pointer;
  -webkit-appearance: none;
  appearance: none;

  ::after {
    /* factoring */
    display: ${({ isChecked, checked, disabled }) =>
      !isChecked && !checked && !disabled ? `none` : `inline-block`};

    /* accessibility? */
    position: absolute;
    right: ${pxToRem(1.35)};
    top: ${pxToRem(-9.5)};

    content: '\\00d7';
    font-size: 2.5rem;
    color: ${({ disabled }) => (disabled ? `#F1F1F4` : ' #02c1b0')};
  }
`;

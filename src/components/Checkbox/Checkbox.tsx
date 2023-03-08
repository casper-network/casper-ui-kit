import styled from '@emotion/styled';
import React, { useState } from 'react';
import { pxToRem } from 'src/utils';

export type CheckboxState = 'checked' | 'unchecked' | 'disabled';

export interface CheckboxProps {
  readonly label?: string;
  readonly disabled?: boolean;
  readonly checked?: boolean;
  readonly stylesState?: CheckboxState;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  label = 'test',
  checked,
  ...props
}) => {
  // specify whether or not a checkbox should be checked by default
  const defaultChecked = checked ? checked : false;
  const [isChecked, setIsChecked] = useState(false);
  return (
    <CheckboxWrapper>
      <label>
        <StyledCheckbox
          type="checkbox"
          onChange={() => setIsChecked(prev => !prev)}
          {...props}
          checked={defaultChecked}
          isChecked={isChecked}
        />
        <span>{label}</span>
      </label>
      <p>{isChecked ? 'Checked' : 'Unchecked'}</p>
    </CheckboxWrapper>
  );
};

const CheckboxWrapper = styled.div`
  background-color: lightpink;
`;

const StyledCheckbox = styled.input<CheckboxProps>`
  /* removing default appearance */
  -webkit-appearance: none;
  appearance: none;
  /* creating a custom design */
  width: 1.6em;
  height: 1.6em;
  background-color: ${({ isChecked }) => (isChecked ? `#007a7e` : '')};
  position: ${({ isChecked }) => (isChecked ? `relative` : 'static')};
  border-radius: 0.15em;
  margin-right: 0.5em;
  border: 0.15em solid #007a7e;
  outline: none;
  cursor: pointer;

  &:before {
    content: '\\2714';
    font-size: 1.5em;
    color: #fff;
    position: absolute;
    right: 1px;
    top: -4px;
  }
`;

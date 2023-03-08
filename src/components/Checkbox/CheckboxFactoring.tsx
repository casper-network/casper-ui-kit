import styled from '@emotion/styled';
import React from 'react';
import { pxToRem } from '../../utils';

export interface CheckboxFactoringProps {
  width?: string;
  onChange?: () => void;
  value?: string | number | readonly string[] | undefined;
  checked?: boolean;
}

export const CheckboxFactoring: React.FC<CheckboxFactoringProps> = ({
  width,
  onChange,
  checked,
  value,
}) => {
  return (
    <StyledCheckbox
      width={width}
      onChange={onChange}
      type="checkbox"
      checked={checked}
      value={value}
    />
  );
};

const StyledCheckbox = styled.input<CheckboxFactoringProps>`
  display: grid;
  place-items: center;
  appearance: none;
  border: 2px solid #02c1b0;
  border-radius: 0;
  background: white;
  width: ${({ width }) => width ?? pxToRem(30)};

  /* use width as this should be a box always */
  height: ${({ width }) => width ?? pxToRem(30)};

  ::after {
    position: relative;
    display: ${({ checked }) => (checked ? 'inline-block' : 'none')};
    content: '\\00d7';
    font-size: ${({ width }) => width ?? pxToRem(30)};
    color: #02c1b0;

    /* fixes :focus-visible ui bug */
    overflow: hidden;

    /* trick for centering the X -> character isn't centered itself  */
    width: 1ch;
    height: 1ch;
    line-height: 1ch;
    left: -0.025ch;
    top: -0.065ch;
  }
`;

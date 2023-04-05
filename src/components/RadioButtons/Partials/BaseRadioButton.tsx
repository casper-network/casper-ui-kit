import React from 'react';
import styled from '@emotion/styled';
import { pxToRem } from '../../../utils';
import { BaseRadioButtonProps } from '../RadioButtonTypes';

export const BaseRadioButton: React.FC<BaseRadioButtonProps> = ({
  disabled,
  required,
  diameter,
  borderColor,
  centerColor,
  ...rest
}) => (
  <StyledRadioButton
    type="radio"
    disabled={disabled}
    required={required}
    diameter={diameter}
    borderColor={borderColor}
    centerColor={centerColor}
    {...rest}
  />
);

export const StyledRadioButton = styled.input<{
  disabled?: boolean;
  required?: boolean;
  diameter?: number;
  borderWidth?: number;
  borderColor?: string;
  centerWidth?: number;
  centerColor?: string;
}>`
  height: ${({ diameter }) =>
    diameter ? `${pxToRem(diameter)}` : `${pxToRem(20)}`};
  width: ${({ diameter }) =>
    diameter ? `${pxToRem(diameter)}` : `${pxToRem(20)}`};
  border: ${({ borderColor }) => {
    const defaultBoarderColor = borderColor ?? '#02c1b0';

    return `solid ${defaultBoarderColor} ${pxToRem(2)}`;
  }};
  border-radius: 50%;
  padding: ${pxToRem(2)};
  margin: 0;
  transition: all 0.1s ease-in-out;
  -webkit-appearance: none;
  appearance: none;

  :required {
    border: ${pxToRem(2)} solid #ff0000;
    :checked {
      :after {
        background-color: #ff0000;
      }
    }
  }

  :disabled {
    cursor: not-allowed;
    border: ${pxToRem(2)} solid #f1f1f4;
    :checked {
      :after {
        background-color: #f1f1f4;
      }
    }
  }

  :after {
    content: '';
    display: block;
    border-radius: 50%;
    width: ${({ diameter }) =>
      diameter ? `${pxToRem(diameter - 10)}` : `${pxToRem(10)}`};
    height: ${({ diameter }) =>
      diameter ? `${pxToRem(diameter - 10)}` : `${pxToRem(10)}`};
    margin: ${pxToRem(1)};
  }

  :checked {
    :after {
      background-color: ${({ centerColor }) => centerColor ?? '#02c1b0'};
    }
  }
`;

import React from 'react';
import styled from 'src/styled';
import { pxToRem } from '../../../utils';
import { BaseRadioButtonProps } from '../RadioButtonTypes';
import { defaultTheme } from '../../../theme';

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
  height: ${({ diameter }) => `${pxToRem(diameter ?? 20)}`};
  width: ${({ diameter }) => `${pxToRem(diameter ?? 20)}`};
  border: ${({ borderColor }) => {
    const defaultBoarderColor =
      borderColor ?? `${defaultTheme.colors.secondary.CasperGreen}`;

    return `solid ${defaultBoarderColor} ${pxToRem(2)}`;
  }};
  border-radius: 50%;
  padding: ${pxToRem(2)};
  margin: 0;
  transition: all 0.1s ease-in-out;
  -webkit-appearance: none;
  appearance: none;

  :required {
    border: ${pxToRem(2)} solid ${defaultTheme.colors.primary.CasperRed};
    :checked {
      :after {
        background-color: ${defaultTheme.colors.primary.CasperRed};
      }
    }
  }

  :disabled {
    cursor: not-allowed;
    border: ${pxToRem(2)} solid
      ${defaultTheme.colors.lowContrastSecondary.CasperLightGrey};
    :checked {
      :after {
        background-color: ${defaultTheme.colors.lowContrastSecondary
          .CasperLightGrey};
      }
    }
  }

  :after {
    content: '';
    display: block;
    border-radius: 50%;
    width: ${({ diameter }) => `${pxToRem(diameter ? diameter - 10 : 10)}`};
    height: ${({ diameter }) => `${pxToRem(diameter ? diameter - 10 : 10)}`};
    margin: ${pxToRem(1)};
  }

  :checked {
    :after {
      background-color: ${({ centerColor }) =>
        centerColor ?? `${defaultTheme.colors.secondary.CasperGreen}`};
    }
  }
`;

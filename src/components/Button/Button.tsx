import React, { InputHTMLAttributes } from 'react';
import styled from '@emotion/styled';
import { pxToRem } from '../../utils';
import { colors } from '../../theme/colors';

export type ButtonType = 'submit' | 'reset' | 'button';

export interface ButtonProps extends InputHTMLAttributes<HTMLButtonElement> {
  readonly type: ButtonType;
  readonly fontSize?: number;
  readonly paddingX?: number;
  readonly paddingY?: number;
  readonly fontColor?: string;
  readonly hoverFontColor?: string;
  readonly bgColor?: string;
  readonly hoverBgColor?: string;
  readonly hoverBgColorTransitionDuration?: number;
  readonly borderColor?: string;
  readonly hoverBorderColor?: string;
  readonly focusBorderColor?: string;
  readonly borderWidth?: number;
  readonly borderRadius?: number;
  readonly minButtonWidth?: number;
  readonly disabled?: boolean;
  readonly className?: string;
  readonly children: React.ReactNode;
  readonly onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button: React.FC<ButtonProps> = ({
  type = 'button',
  fontSize,
  paddingX,
  paddingY,
  fontColor,
  hoverFontColor,
  bgColor = '#02c1b0',
  hoverBgColor,
  hoverBgColorTransitionDuration,
  borderColor,
  hoverBorderColor,
  focusBorderColor,
  borderWidth,
  borderRadius,
  minButtonWidth,
  disabled,
  className,
  children,
  onClick,
  ...baseButtonProps
}) => {
  return (
    <StyledButton
      type={type}
      fontSize={fontSize}
      paddingX={paddingX}
      paddingY={paddingY}
      fontColor={fontColor}
      hoverFontColor={hoverFontColor}
      bgColor={bgColor}
      hoverBgColor={hoverBgColor}
      hoverBgColorTransitionDuration={hoverBgColorTransitionDuration}
      borderColor={borderColor}
      hoverBorderColor={hoverBorderColor}
      focusBorderColor={focusBorderColor}
      borderWidth={borderWidth}
      borderRadius={borderRadius}
      minButtonWidth={minButtonWidth}
      disabled={disabled}
      className={className}
      onClick={onClick}
      {...baseButtonProps}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button<{
  fontSize?: number;
  paddingX?: number;
  paddingY?: number;
  fontColor?: string;
  hoverFontColor?: string;
  bgColor?: string;
  hoverBgColor?: string;
  hoverBgColorTransitionDuration?: number;
  borderColor?: string;
  hoverBorderColor?: string;
  focusBorderColor?: string;
  borderWidth?: number;
  borderRadius?: number;
  minButtonWidth?: number;
  disabled?: boolean;
}>`
  font-size: ${({ fontSize }) => pxToRem(fontSize ?? 16)};
  white-space: nowrap;
  color: ${({ fontColor }) => fontColor ?? `${colors.secondary.White}`};
  background-color: ${({ bgColor }) =>
    bgColor ?? `${colors.secondary.CasperGreen}`};
  padding: ${({ paddingX, paddingY }) => {
    const x = pxToRem(paddingX ?? 16);
    const y = pxToRem(paddingY ?? 16);

    return `${y} ${x}`;
  }};
  border: ${({ borderColor, borderWidth, bgColor }) => {
    if (!borderColor || !bgColor) {
      return 'initial';
    }

    const baseBorderColor = borderColor ?? bgColor;
    const width = borderWidth ? pxToRem(borderWidth) : '0.125rem';

    return `solid ${baseBorderColor} ${width}`;
  }};
  border-radius: ${({ borderRadius }) => pxToRem(borderRadius ?? 10)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  min-width: ${({ minButtonWidth }) => pxToRem(minButtonWidth ?? 128)};

  &:focus {
    border: ${({ focusBorderColor, borderWidth }) => {
      const width = borderWidth ? pxToRem(borderWidth) : '0.125rem';
      const color = focusBorderColor ?? `${colors.secondary.CasperBlue}`;
      return `solid ${color} ${width} `;
    }};
    outline: none;
  }

  &:hover {
    color: ${({ hoverFontColor, bgColor }) => hoverFontColor ?? bgColor};
    border: ${({ hoverBorderColor, bgColor, borderWidth }) => {
      if (!hoverBorderColor || !bgColor) {
        return 'initial';
      }

      return `solid ${borderWidth || pxToRem(1.5)} ${
        hoverBorderColor ?? bgColor
      }`;
    }};
    background-color: ${({ hoverBgColor }) =>
      hoverBgColor ?? `${colors.secondary.White}`};
    transition: ${({ hoverBgColorTransitionDuration }) =>
      `background-color ${hoverBgColorTransitionDuration ?? 300}ms`};
  }

  &:disabled {
    color: ${colors.secondary.White};
    background-color: ${colors.lowContrastSecondary.CasperLightGrey};
    border: none;
  }
`;

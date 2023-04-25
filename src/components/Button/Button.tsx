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
  readonly required?: boolean;
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
  required,
  className,
  children,
  onClick,
  ...rest
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
      required={required}
      className={className}
      onClick={onClick}
      {...rest}>
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
  required?: boolean;
}>`
  font-size: ${({ fontSize }) => pxToRem(fontSize ?? 16)};
  white-space: nowrap;
  color: ${({ fontColor, required }) => {
    const baseFontColor = fontColor ?? `${colors.secondary.White}`;
    const requiredFontColor = `${colors.primary.CasperRed}`;

    return required ? requiredFontColor : baseFontColor;
  }};
  background-color: ${({ bgColor, required }) => {
    const baseBgColor = bgColor ?? `${colors.secondary.CasperGreen}`;
    const requiredBgColor = `${colors.secondary.White}`;

    return required ? requiredBgColor : baseBgColor;
  }};
  padding: ${({ paddingX, paddingY }) => {
    const x = pxToRem(paddingX ?? 16);
    const y = pxToRem(paddingY ?? 16);

    return `${y} ${x}`;
  }};
  border: ${({ borderColor, borderWidth, required, bgColor }) => {
    const baseBorderColor = borderColor ?? bgColor;
    const color = required ? `${colors.primary.CasperRed}` : baseBorderColor;
    const width = borderWidth ? pxToRem(borderWidth) : '0.125rem';

    return `solid ${color} ${width}`;
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
    color: ${({ hoverFontColor, bgColor, required }) => {
      const baseHoverFontColor = hoverFontColor ?? bgColor;
      const requiredFontColor = required
        ? `${colors.primary.CasperRed}`
        : bgColor;

      return required ? requiredFontColor : baseHoverFontColor;
    }};
    border: ${({ hoverBorderColor, bgColor, borderWidth }) =>
      `solid ${borderWidth} ${hoverBorderColor ?? bgColor}`};
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

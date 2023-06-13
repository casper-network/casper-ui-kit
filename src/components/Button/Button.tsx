import React, { InputHTMLAttributes } from 'react';
import styled from 'src/styled';
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
  readonly dataCy?: string;
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
  dataCy,
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
      data-cy={dataCy}
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
  bgColor: string;
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
  background-color: ${({ bgColor }) => bgColor};
  padding: ${({ paddingX, paddingY }) => {
    const xAxis = pxToRem(paddingX ?? 20);
    const yAxis = pxToRem(paddingY ?? 8);

    return `${yAxis} ${xAxis}`;
  }};
  border: ${({ borderColor, borderWidth }) => {
    const color = borderColor ?? 'transparent';
    const width = borderWidth ? pxToRem(borderWidth) : '0';
    return `solid ${color} ${width}`;
  }};
  border-radius: ${({ borderRadius }) => pxToRem(borderRadius ?? 0)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  min-width: ${({ minButtonWidth }) => pxToRem(minButtonWidth ?? 0)};

  &:focus {
    border: ${({ focusBorderColor, borderWidth }) => {
      const width = borderWidth ? pxToRem(borderWidth) : '0';
      const color = focusBorderColor ?? 'transparent';
      return `solid ${color} ${width} `;
    }};
    outline: none;
  }

  &:hover {
    color: ${({ hoverFontColor }) => hoverFontColor};
    border: ${({ hoverBorderColor, borderWidth }) =>
      `solid ${borderWidth ?? '0'} ${hoverBorderColor ?? 'transparent'}`};
    background-color: ${({ hoverBgColor }) => hoverBgColor};
    transition: ${({ hoverBgColorTransitionDuration }) =>
      `background-color ${hoverBgColorTransitionDuration ?? 300}ms`};
  }

  &:disabled {
    color: ${colors.secondary.White};
    background-color: ${colors.lowContrastSecondary.MediumGrey};
    border: ${({ borderColor, borderWidth }) =>
      `solid ${borderWidth ?? '0'} ${borderColor ?? 'initial'}`};
  }
`;

// export type ButtonType = 'submit' | 'reset' | 'button';

// export interface ButtonProps extends InputHTMLAttributes<HTMLButtonElement> {
//   readonly type: ButtonType;
//   readonly fontSize?: number;
//   readonly paddingX?: number;
//   readonly paddingY?: number;
//   readonly fontColor?: string;
//   readonly hoverFontColor?: string;
//   readonly bgColor: string;
//   readonly hoverBgColor?: string;
//   readonly hoverBgColorTransitionDuration?: number;
//   readonly borderColor?: string;
//   readonly hoverBorderColor?: string;
//   readonly focusBorderColor?: string;
//   readonly borderWidth?: number;
//   readonly borderRadius?: number;
//   readonly minButtonWidth?: number;
//   readonly disabled?: boolean;
//   readonly className?: string;
//   readonly children: React.ReactNode;
//   readonly onClick?: React.MouseEventHandler<HTMLButtonElement>;
//   readonly dataCy?: string;
// }

// export const Button: React.FC<ButtonProps> = ({
//   type = 'button',
//   fontSize,
//   paddingX,
//   paddingY,
//   fontColor,
//   hoverFontColor,
//   bgColor = '#02c1b0',
//   hoverBgColor,
//   hoverBgColorTransitionDuration,
//   borderColor,
//   hoverBorderColor = '#02c1b0',
//   focusBorderColor,
//   borderWidth = 2,
//   borderRadius,
//   minButtonWidth,
//   disabled,
//   className,
//   children,
//   onClick,
//   dataCy,
//   ...baseButtonProps
// }) => {
//   return (
//     <StyledButton
//       type={type}
//       fontSize={fontSize}
//       paddingX={paddingX}
//       paddingY={paddingY}
//       fontColor={fontColor}
//       hoverFontColor={hoverFontColor}
//       bgColor={bgColor}
//       hoverBgColor={hoverBgColor}
//       hoverBgColorTransitionDuration={hoverBgColorTransitionDuration}
//       borderColor={borderColor}
//       hoverBorderColor={hoverBorderColor}
//       focusBorderColor={focusBorderColor}
//       borderWidth={borderWidth}
//       borderRadius={borderRadius}
//       minButtonWidth={minButtonWidth}
//       disabled={disabled}
//       className={className}
//       onClick={onClick}
//       data-cy={dataCy}
//       {...baseButtonProps}>
//       {children}
//     </StyledButton>
//   );
// };

// const StyledButton = styled.button<{
//   fontSize?: number;
//   paddingX?: number;
//   paddingY?: number;
//   fontColor?: string;
//   hoverFontColor?: string;
//   bgColor: string;
//   hoverBgColor?: string;
//   hoverBgColorTransitionDuration?: number;
//   borderColor?: string;
//   hoverBorderColor: string;
//   focusBorderColor?: string;
//   borderWidth: number;
//   borderRadius?: number;
//   minButtonWidth?: number;
//   disabled?: boolean;
// }>`
//   font-size: ${({ fontSize }) => pxToRem(fontSize ?? 16)};
//   white-space: nowrap;
//   color: ${({ fontColor }) => fontColor ?? `${colors.secondary.White}`};
//   background-color: ${({ bgColor }) => bgColor};
//   padding: ${({ paddingX, paddingY }) => {
//     const xAxis = pxToRem(paddingX ?? 20);
//     const yAxis = pxToRem(paddingY ?? 8);

//     return `${yAxis} ${xAxis}`;
//   }};
//   border: ${({ borderColor, borderWidth, bgColor }) => {
//     const color = borderColor ?? bgColor;
//     const width = borderWidth ? pxToRem(borderWidth) : '0.125rem';
//     return `solid ${color} ${width}`;
//   }};
//   border-radius: ${({ borderRadius }) => pxToRem(borderRadius ?? 10)};
//   cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
//   min-width: ${({ minButtonWidth }) => pxToRem(minButtonWidth ?? 0)};

//   &:focus {
//     border: ${({ focusBorderColor, borderWidth }) => {
//       const width = borderWidth ? pxToRem(borderWidth) : '0.125rem';
//       const color = focusBorderColor ?? `${colors.secondary.CasperBlue}`;
//       return `solid ${color} ${width} `;
//     }};
//     outline: none;
//   }

//   &:hover {
//     color: ${({ hoverFontColor, bgColor }) => hoverFontColor ?? bgColor};
//     border: ${({ hoverBorderColor, borderWidth }) =>
//       `solid ${borderWidth} ${hoverBorderColor}`};
//     background-color: ${({ hoverBgColor }) => hoverBgColor ?? 'transparent'};
//     transition: ${({ hoverBgColorTransitionDuration }) =>
//       `background-color ${hoverBgColorTransitionDuration ?? 300}ms`};
//   }

//   &:disabled {
//     color: ${colors.lowContrastSecondary.MediumGrey};
//     background-color: transparent;
//     border: ${({ borderColor, borderWidth, bgColor }) =>
//       `solid ${borderWidth} ${borderColor ?? bgColor}`};
//   }
// `;

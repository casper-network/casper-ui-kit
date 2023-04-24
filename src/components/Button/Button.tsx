import React, { InputHTMLAttributes } from 'react';
import styled from '@emotion/styled';
import { pxToRem } from '../../utils';

export type ButtonType = 'submit' | 'reset' | 'button';

export interface ButtonProps extends InputHTMLAttributes<HTMLButtonElement> {
  readonly children: React.ReactNode;
  readonly onClick?: () => void;
  readonly bgColor?: string;
  readonly color?: string;
  readonly type: ButtonType;
  readonly className?: string;
  readonly isDisabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  bgColor = '#3EDC64',
  color = 'white',
  type,
  className,
  isDisabled = false,
  ...baseButtonProps
}) => {
  return (
    <StyledButton
      type={type}
      className={className}
      bgColor={bgColor}
      color={color}
      onClick={onClick}
      disabled={isDisabled}
      {...baseButtonProps}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button<{
  bgColor: string;
  color: string;
  disabled: boolean;
}>`
  font-size: 1rem;
  color: ${({ color }) => color};
  background-color: ${({ bgColor }) => bgColor};
  text-align: center;
  padding: 0.5rem 1.25rem;
  border-radius: ${pxToRem(10)};
  border: none;
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

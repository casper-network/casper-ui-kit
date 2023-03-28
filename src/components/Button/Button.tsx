import React from 'react';
import styled from '@emotion/styled';
import { pxToRem } from '../../utils';

export type ButtonType = 'submit' | 'reset' | 'button';

export interface ButtonProps {
  readonly children: React.ReactNode;
  readonly onClick?: () => void;
  readonly color?: string;
  readonly type: ButtonType;
  readonly className?: string;
  readonly isDisabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  color = 'blue',
  type,
  className,
  isDisabled = false,
}) => {
  return (
    <StyledButton
      type={type}
      className={className}
      bgColor={color}
      onClick={onClick}
      disabled={isDisabled}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button<{ bgColor: string; disabled: boolean }>`
  font-size: 1rem;
  color: white;
  background-color: ${({ bgColor }) => bgColor};
  text-align: center;
  padding: 0.5rem 1.25rem;
  border-radius: ${pxToRem(10)};
  border: none;
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

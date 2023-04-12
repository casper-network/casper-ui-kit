import React from 'react';
import styled from '@emotion/styled';
import { pxToRem } from '../../utils';
import { defaultTheme } from '../../theme';

export interface TypographyProps {
  color?: string;
  font?: string;
  fontWeight?: number;
  fontSize?: number;
  textAlign?: 'left' | 'right' | 'center' | 'justify' | 'initial' | 'inherit';
  children: React.ReactNode;
}

export const Typography: React.FC<TypographyProps> = ({
  color = defaultTheme.colors.primary.Black,
  font = defaultTheme.typography.fonts.Inter,
  fontWeight = defaultTheme.typography.fontWeights.normal,
  fontSize,
  textAlign = 'inherit',
  children,
}) => {
  return (
    <TypographyText
      textColor={color}
      fontFamily={font}
      fontWeight={fontWeight}
      fontSize={fontSize}
      textAlign={textAlign}>
      {children}
    </TypographyText>
  );
};

interface TypographyTextProps {
  textColor: string;
  fontFamily: string;
  fontWeight: number;
  fontSize?: number;
  textAlign: string;
}

const TypographyText = styled.p<TypographyTextProps>`
  text-align: ${({ textAlign }) => textAlign};
  // defaults to 1rem
  font-size: ${({ fontSize }) =>
    fontSize ? pxToRem(fontSize) : defaultTheme.typography.fontSizes.md};
  font-weight: ${({ fontWeight }) => fontWeight};
  color: ${({ textColor }) => textColor};
  font-family: ${({ fontFamily }) => fontFamily};
  font-weight: ${({ fontWeight }) => fontWeight};
`;
import React from 'react';
import styled from '@emotion/styled';
import { pxToRem } from '../../utils';
import { defaultTheme } from '../../theme';

export enum HeadingType {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6',
}

export interface HeadingProps {
  type: HeadingType;
  color?: string;
  font?: string;
  fontWeight?: number;
  fontSize?: number;
  textAlign?: 'left' | 'right' | 'center' | 'justify' | 'initial' | 'inherit';
  children: React.ReactNode;
}

export const Heading: React.FC<HeadingProps> = ({
  type,
  color = defaultTheme.colors.primary.Black,
  font = defaultTheme.typography.fonts.Inter,
  fontWeight = defaultTheme.typography.fontWeights.bold,
  fontSize,
  textAlign = 'inherit',
  children,
}) => {
  const props = {
    textColor: color,
    fontFamily: font,
    fontWeight,
    textAlign,
    // satisfy ts; should never take this value
    fontSize: 1,
  };

  switch (type) {
    case HeadingType.H1:
      props.fontSize = fontSize || 40;
      return <H1 {...props}>{children}</H1>;
    case HeadingType.H2:
      props.fontSize = fontSize || 32;
      return <H2 {...props}>{children}</H2>;
    case HeadingType.H3:
      props.fontSize = fontSize || 28;
      props.fontWeight =
        fontWeight || defaultTheme.typography.fontWeights.medium;
      return <H3 {...props}>{children}</H3>;
    case HeadingType.H4:
      props.fontSize = fontSize || 24;
      props.fontWeight =
        fontWeight || defaultTheme.typography.fontWeights.medium;
      return <H4 {...props}>{children}</H4>;
    case HeadingType.H5:
      props.fontWeight =
        fontWeight || defaultTheme.typography.fontWeights.normal;
      props.fontSize = fontSize || 20;
      return <H5 {...props}>{children}</H5>;
    case HeadingType.H6:
      props.fontWeight =
        fontWeight || defaultTheme.typography.fontWeights.normal;
      props.fontSize = fontSize || 16;
      return <H6 {...props}>{children}</H6>;
    default:
      props.fontSize = fontSize || 40;
      return <H1 {...props}>{children}</H1>;
  }
};

interface HeadingTextProps {
  textColor: string;
  fontFamily: string;
  fontWeight: number;
  fontSize: number;
  textAlign: string;
}

const H1 = styled.h1<HeadingTextProps>`
  text-align: ${({ textAlign }) => textAlign};
  font-size: ${({ fontSize }) => pxToRem(fontSize)};
  font-weight: ${({ fontWeight }) => fontWeight};
  color: ${({ textColor }) => textColor};
  font-family: ${({ fontFamily }) => fontFamily};
  font-weight: ${({ fontWeight }) => fontWeight};
`;

const H2 = styled.h2<HeadingTextProps>`
  text-align: ${({ textAlign }) => textAlign};
  font-size: ${({ fontSize }) => pxToRem(fontSize)};
  font-weight: ${({ fontWeight }) => fontWeight};
  color: ${({ textColor }) => textColor};
  font-family: ${({ fontFamily }) => fontFamily};
  font-weight: ${({ fontWeight }) => fontWeight};
`;

const H3 = styled.h3<HeadingTextProps>`
  text-align: ${({ textAlign }) => textAlign};
  font-size: ${({ fontSize }) => pxToRem(fontSize)};
  font-weight: ${({ fontWeight }) => fontWeight};
  color: ${({ textColor }) => textColor};
  font-family: ${({ fontFamily }) => fontFamily};
  font-weight: ${({ fontWeight }) => fontWeight};
`;

const H4 = styled.h4<HeadingTextProps>`
  text-align: ${({ textAlign }) => textAlign};
  font-size: ${({ fontSize }) => pxToRem(fontSize)};
  font-weight: ${({ fontWeight }) => fontWeight};
  color: ${({ textColor }) => textColor};
  font-family: ${({ fontFamily }) => fontFamily};
  font-weight: ${({ fontWeight }) => fontWeight};
`;

const H5 = styled.h5<HeadingTextProps>`
  text-align: ${({ textAlign }) => textAlign};
  font-size: ${({ fontSize }) => pxToRem(fontSize)};
  font-weight: ${({ fontWeight }) => fontWeight};
  color: ${({ textColor }) => textColor};
  font-family: ${({ fontFamily }) => fontFamily};
  font-weight: ${({ fontWeight }) => fontWeight};
`;

const H6 = styled.h6<HeadingTextProps>`
  text-align: ${({ textAlign }) => textAlign};
  font-size: ${({ fontSize }) => pxToRem(fontSize)};
  font-weight: ${({ fontWeight }) => fontWeight};
  color: ${({ textColor }) => textColor};
  font-family: ${({ fontFamily }) => fontFamily};
  font-weight: ${({ fontWeight }) => fontWeight};
`;

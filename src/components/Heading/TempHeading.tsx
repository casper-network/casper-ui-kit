import React, { HTMLAttributes } from 'react';
import styled from 'src/styled';
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

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  readonly children: React.ReactNode;
  readonly className?: string;
  readonly color?: string;
  readonly font?: string;
  readonly fontWeight?: number;
  readonly fontSize?: number;
  readonly textAlign?:
    | 'left'
    | 'right'
    | 'center'
    | 'justify'
    | 'initial'
    | 'inherit';
  readonly dataCy?: string;
}

export const Heading: React.FC<HeadingProps> = ({
  color = defaultTheme.colors.primary.Black,
  font = defaultTheme.typography.fonts.Inter,
  fontWeight = defaultTheme.typography.fontWeights.bold,
  textAlign = 'inherit',
  children,
  ...restOfProps
}) => {
  const props = {
    textColor: color,
    fontFamily: font,
    fontWeight,
    textAlign,
    fontSize: 1,
    ...restOfProps,
  };

  // switch (type) {
  //   case HeadingType.H1:
  //     if (!props.fontSize) props.fontSize = 40;
  //     return <H1 {...props} />;
  //   case HeadingType.H2:
  //     if (!props.fontSize) props.fontSize = 32;
  //     return <H2 {...props} />;
  //   case HeadingType.H3:
  //     if (!props.fontSize) props.fontSize = 28;
  //     props.fontWeight =
  //       fontWeight || defaultTheme.typography.fontWeights.medium;
  //     return <H3 {...props} />;
  //   case HeadingType.H4:
  //     if (!props.fontSize) props.fontSize = 24;
  //     props.fontWeight =
  //       fontWeight || defaultTheme.typography.fontWeights.medium;
  //     return <H4 {...props} />;
  //   case HeadingType.H5:
  //     props.fontWeight =
  //       fontWeight || defaultTheme.typography.fontWeights.normal;
  //     if (!props.fontSize) props.fontSize = 20;
  //     return <H5 {...props} />;
  //   case HeadingType.H6:
  //     props.fontWeight =
  //       fontWeight || defaultTheme.typography.fontWeights.normal;
  //     if (!props.fontSize) props.fontSize = 16;
  //     return <H6 {...props} />;
  //   default:
  //     if (!props.fontSize) props.fontSize = 40;
  //     return <H1 {...props} />;
  // }

  return <H1 {...props}>{children}</H1>;
};

interface HeadingTextProps {
  textColor: string;
  fontFamily: string;
  fontWeight: number;
  fontSize: number;
  textAlign: string;
  children: React.ReactNode;
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

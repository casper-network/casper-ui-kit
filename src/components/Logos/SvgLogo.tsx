import styled from '@emotion/styled';
import React from 'react';
import { pxToRem } from '../../utils';
import BlockExplorerGradientLogo from '../../assets/svg/logos/block-explorer-gradient-logo.svg';
import BlueCasperLogo from '../../assets/svg/logos/blue-casper-logo.svg';
import RedBlackCasperLogo from '../../assets/svg/logos/red-black-casper-logo.svg';
import WhiteCasperLogo from '../../assets/svg/logos/white-casper-logo.svg';

export type LogoNames =
  | 'BlockExplorerGradientLogo'
  | 'BlueCasperLogo'
  | 'RedBlackCasperLogo'
  | 'WhiteCasperLogo';

export type Logos = {
  BlockExplorerGradientLogo: LogoNames;
  BlueCasperLogo: LogoNames;
  RedBlackCasperLogo: LogoNames;
  WhiteCasperLogo: LogoNames;
};

export interface SvgLogoProps {
  readonly logo: keyof Logos;
  readonly width?: number;
}

export const SvgLogo: React.FC<SvgLogoProps> = ({
  logo = 'RedBlackCasperLogo',
  width = 500,
}) => {
  console.log(logo);

  const logos = {
    blockExplorerGradientLogo: <BlockExplorerGradientLogo />,
    blueCasperLogo: <BlueCasperLogo />,
    redBlackCasperLogo: <RedBlackCasperLogo />,
    whiteCasperLogo: <WhiteCasperLogo />,
  };

  return (
    <LogoContainer>
      <LogoWrapper width={width}>
        <StyledSvg>{logos.logo}</StyledSvg>
      </LogoWrapper>
    </LogoContainer>
  );
};

export const LogoContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style-type: none;
`;
export const LogoWrapper = styled.li<{ width: number }>`
  display: block;
  width: ${({ width }) => `${pxToRem(width)}`};
`;

export const StyledSvg = styled.svg`
  display: block;
  width: 100%;
  height: auto;
`;

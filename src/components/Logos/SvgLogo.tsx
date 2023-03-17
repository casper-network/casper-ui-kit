import styled from '@emotion/styled';
import React from 'react';
import { pxToRem } from '../../utils';
import BlockExplorerGradientLogo from '../../assets/svg/logos/block-explorer-gradient-logo.svg';
import BlueCasperLogo from '../../assets/svg/logos/blue-casper-logo.svg';
import RedBlackCasperLogo from '../../assets/svg/logos/red-black-casper-logo.svg';
import WhiteCasperLogo from '../../assets/svg/logos/white-casper-logo.svg';

const logos = {
  RedBlackCasperLogo: <RedBlackCasperLogo />,
  BlockExplorerGradientLogo: <BlockExplorerGradientLogo />,
  BlueCasperLogo: <BlueCasperLogo />,
  WhiteCasperLogo: <WhiteCasperLogo />,
};

export interface SvgLogoProps {
  readonly logo: keyof typeof logos;
  readonly title: string;
  readonly width?: number;
}

export const SvgLogo: React.FC<SvgLogoProps> = ({
  logo = 'RedBlackCasperLogo',
  title = 'Red and black Casper Labs Logo',
  width = 500,
}) => (
  <LogoContainer>
    <LogoWrapper width={width}>
      <StyledSvg role="img">
        <title>{title}</title>
        {logos[logo]}
      </StyledSvg>
    </LogoWrapper>
  </LogoContainer>
);

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

import styled from '@emotion/styled';
import React from 'react';
import { pxToRem } from '../../utils';
import BlockExplorerGradientLogo from '../../assets/svg/logos/block-explorer-gradient-logo.svg';
import BlueCasperLogo from '../../assets/svg/logos/blue-casper-logo.svg';
import WhiteCasperLogo from '../../assets/svg/logos/white-casper-logo.svg';

const logos = {
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
  logo = 'BlockExplorerGradientLogo',
  title = 'Red and black Casper Labs Logo',
  width = 250,
}) => (
  <LogoContainer>
    <StyledSvg width={width} role="img">
      <title>{title}</title>
      {logos[logo]}
    </StyledSvg>
  </LogoContainer>
);

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledSvg = styled.svg<{ width: number }>`
  height: auto;
  width: ${({ width }) => pxToRem(width)};
`;

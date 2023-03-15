import styled from '@emotion/styled';
import React from 'react';
import { pxToRem } from '../../utils';
import BlockExplorerGradientLogo from '../../assets/svg/logos/block-explorer-gradient-logo.svg';
import BlueCasperLogo from '../../assets/svg/logos/blue-casper-logo.svg';
import RedBlackCasperLogo from '../../assets/svg/logos/red-black-casper-logo.svg';
import WhiteCasperLogo from '../../assets/svg/logos/white-casper-logo.svg';

export interface SvgLogoProps {
  readonly logoName: string;
  readonly width?: number;
}

export const SvgLogo: React.FC<SvgLogoProps> = ({
  logoName = 'BlockExplorerGradientLogo',
  width = 500,
}) => {
  const logos = [
    {
      comp: <BlockExplorerGradientLogo />,
      key: 'BlockExplorerGradientLogo',
    },
    {
      comp: <BlueCasperLogo />,
      key: 'BlueCasperLogo',
    },
    {
      comp: <RedBlackCasperLogo />,
      key: 'RedBlackCasperLogo',
    },
    {
      comp: <WhiteCasperLogo />,
      key: 'WhiteCasperLogo',
    },
  ];

  return (
    <LogoContainer>
      {logos.map(({ key, comp }) => (
        <LogoWrapper width={width} key={`Logo: key=${key}`}>
          {logoName === key && <StyledSvg>{comp}</StyledSvg>}
        </LogoWrapper>
      ))}
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

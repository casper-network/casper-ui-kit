import styled from 'src/styled';
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

export interface LogoProps {
  readonly logo: keyof typeof logos;
  readonly title: string;
  readonly width?: number;
  readonly className?: string;
  readonly dataCy?: string;
  readonly ariaLabel?: string;
}

export const Logo: React.FC<LogoProps> = ({
  logo = 'BlockExplorerGradientLogo',
  title = 'Red and black Casper Labs Logo',
  width = 250,
  className,
  dataCy,
  ariaLabel,
}) => (
  <LogoContainer className={className}>
    <StyledSvg aria-label={ariaLabel} width={width} role="img" data-cy={dataCy}>
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

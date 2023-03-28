import styled from '@emotion/styled';
import React from 'react';
import { pxToRem } from '../../utils';
import BlocksIcon from '../../assets/svg/icons/blocks-icon.svg';
import ButtonIcon from '../../assets/svg/icons/button-icon.svg';
import CloseMenuIcon from '../../assets/svg/icons/close-menu-icon.svg';
import DeploysIcon from '../../assets/svg/icons/deploys-icon.svg';
import ErrorIcon from '../../assets/svg/icons/error-icon.svg';
import FailureIcon from '../../assets/svg/icons/failure-icon.svg';
import LoaderIcon from '../../assets/svg/icons/loader-icon.svg';
import OpenMenuIcon from '../../assets/svg/icons/open-menu-icon.svg';
import PeersIcon from '../../assets/svg/icons/peers-icon.svg';
import SuccessIcon from '../../assets/svg/icons/success-icon.svg';
import ValidatorsIcon from '../../assets/svg/icons/validators-icon.svg';

const icons = {
  BlocksIcon: <BlocksIcon />,
  ButtonIcon: <ButtonIcon />,
  CloseMenuIcon: <CloseMenuIcon />,
  DeploysIcon: <DeploysIcon />,
  ErrorIcon: <ErrorIcon />,
  FailureIcon: <FailureIcon />,
  LoaderIcon: <LoaderIcon />,
  OpenMenuIcon: <OpenMenuIcon />,
  PeersIcon: <PeersIcon />,
  SuccessIcon: <SuccessIcon />,
  ValidatorsIcon: <ValidatorsIcon />,
};

export type strokeLinecapValues =
  | 'inherit'
  | 'butt'
  | 'round'
  | 'square'
  | undefined;
export type strokeLinejoinValues =
  | 'inherit'
  | 'round'
  | 'miter'
  | 'bevel'
  | undefined;

export interface SvgIconProps {
  readonly icon: keyof typeof icons;
  readonly title: string;
  readonly stroke?: string;
  readonly fill?: string;
  readonly width?: number;
  readonly strokeWidth?: number;
  readonly strokeLinecap?: strokeLinecapValues;
  readonly strokeLinejoin?: strokeLinejoinValues;
}

export const SvgIcon: React.FC<SvgIconProps> = ({
  icon = 'BlocksIcon',
  title = 'Blocks Icon',
  stroke,
  fill,
  width = 251,
  strokeWidth,
  strokeLinecap,
  strokeLinejoin,
}) => (
  <IconsContainer>
    <IconsWrapper width={width}>
      <StyledSvg
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLinecap}
        strokeLinejoin={strokeLinejoin}
        role="img">
        <title>{title}</title>
        {icons[icon]}
      </StyledSvg>
    </IconsWrapper>
  </IconsContainer>
);

export const IconsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style-type: none;
`;
export const IconsWrapper = styled.li<{ width: number }>`
  display: block;
  width: ${({ width }) => `${pxToRem(width)}`};
`;

export const StyledSvg = styled.svg<{
  stroke?: string;
  fill?: string;
  strokeWidth?: number;
  strokeLinecap: strokeLinecapValues;
  strokeLinejoin: strokeLinejoinValues;
}>`
  display: block;
  width: 100%;
  fill: ${({ fill }) => fill ?? 'initial'};
  stroke: ${({ stroke }) => stroke ?? 'initial'};
  stroke-width: ${({ strokeWidth }) => strokeWidth ?? 'initial'};
  stroke-linecap: ${({ strokeLinecap }) => strokeLinecap};
  stroke-linejoin: ${({ strokeLinejoin }) => strokeLinejoin};
`;

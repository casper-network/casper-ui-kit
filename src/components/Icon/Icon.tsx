import React from 'react';
import styled from '@emotion/styled';
import { pxToRem } from '../../utils';
import BlocksIcon from '../../assets/svg/icons/blocks-icon.svg';
import SearchIcon from '../../assets/svg/icons/search-icon.svg';
import CloseMenuIcon from '../../assets/svg/icons/close-menu-icon.svg';
import DeployIcon from '../../assets/svg/icons/deploys-icon.svg';
import ErrorIcon from '../../assets/svg/icons/error-icon.svg';
import FailureIcon from '../../assets/svg/icons/failure-icon.svg';
import LoaderIcon from '../../assets/svg/icons/loader-icon.svg';
import OpenMenuIcon from '../../assets/svg/icons/open-menu-icon.svg';
import PeersIcon from '../../assets/svg/icons/peers-icon.svg';
import SuccessIcon from '../../assets/svg/icons/success-icon.svg';
import ValidatorsIcon from '../../assets/svg/icons/validators-icon.svg';

const icons = {
  BlocksIcon: <BlocksIcon />,
  SearchIcon: <SearchIcon />,
  CloseMenuIcon: <CloseMenuIcon />,
  DeployIcon: <DeployIcon />,
  ErrorIcon: <ErrorIcon />,
  FailureIcon: <FailureIcon />,
  LoaderIcon: <LoaderIcon />,
  OpenMenuIcon: <OpenMenuIcon />,
  PeersIcon: <PeersIcon />,
  SuccessIcon: <SuccessIcon />,
  ValidatorsIcon: <ValidatorsIcon />,
};

export interface IconProps {
  readonly icon: keyof typeof icons;
  readonly width?: number;
  readonly height?: number;
  readonly color?: string;
  readonly stroke?: string;
  readonly strokeWidth?: number;
}

export const Icon: React.FC<IconProps> = ({
  icon = 'BlocksIcon',
  width = 32,
  height,
  color = 'white',
  stroke = 'grey',
  strokeWidth = 1,
}) => (
  <IconContainer data-testid="icon-component">
    <IconWrapper
      width={width}
      height={height}
      currentColor={color}
      stroke={stroke}
      strokeWidth={strokeWidth}>
      {icons[icon]}
    </IconWrapper>
  </IconContainer>
);

export const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
`;

export const IconWrapper = styled.svg<{
  width: number;
  height?: number;
  currentColor: string;
  stroke: string;
  strokeWidth: number;
}>`
  display: block;
  width: ${({ width }) => `${pxToRem(width)}`};
  height: ${({ height }) => (height ? `${pxToRem(height)}` : 'auto')};
  fill: ${({ currentColor }) => currentColor};
  color: ${({ currentColor }) => currentColor};
  stroke: ${({ stroke }) => stroke};
  stroke-width: ${({ strokeWidth }) => pxToRem(strokeWidth)};
  background-color: transparent;
`;

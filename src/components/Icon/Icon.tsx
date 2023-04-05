import React from 'react';
import styled from '@emotion/styled';
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

export interface IconProps {
  readonly icon: keyof typeof icons;
  readonly width?: number;
  readonly color?: string;
}

export const Icon: React.FC<IconProps> = ({
  icon = 'BlocksIcon',
  width = 32,
  color = 'inherit',
}) => (
  <IconsContainer data-testid="icon-component">
    <IconsWrapper width={width} color={color}>
      {icons[icon]}
    </IconsWrapper>
  </IconsContainer>
);

export const IconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
`;

export const IconsWrapper = styled.div<{ width: number; color: string }>`
  display: block;
  width: ${({ width }) => `${pxToRem(width)}`};
  color: ${({ color }) => color};
`;

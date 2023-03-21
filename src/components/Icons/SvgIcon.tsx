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

export interface SvgIconProps {
  readonly icon: keyof typeof icons;
  readonly title: string;
  readonly stroke?: string;
  readonly fill?: string;
  readonly width?: number;
}

export const SvgIcon: React.FC<SvgIconProps> = ({
  icon = 'BlocksIcon',
  title = 'Blocks Icon',
  stroke = '',
  fill = 'none',
  width = 250,
}) => (
  <IconsContainer>
    <IconsWrapper width={width}>
      <SvgContainer fill={fill} stroke={stroke} role="img">
        <title>{title}</title>
        {icons[icon]}
      </SvgContainer>
    </IconsWrapper>
  </IconsContainer>
);

export const IconsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const IconsWrapper = styled.li<{ width: number }>`
  display: block;
  width: ${({ width }) => `${pxToRem(width)}`};
`;

export const SvgContainer = styled.div<{
  stroke?: string;
  fill?: string;
  strokeWidth?: number;
}>`
  display: block;
  width: 100%;
  fill: ${({ fill }) => fill ?? 'initial'};
  stroke: ${({ stroke }) => stroke ?? 'initial'};
  stroke-width: ${({ strokeWidth }) => strokeWidth ?? 'initial'};
`;

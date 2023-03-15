import styled from '@emotion/styled';
import React from 'react';
import { pxToRem } from '../../utils';
import BlocksIcon from '../../assets/svg/icons/blocks-icon.svg';
import ButtonIcon from '../../assets/svg/icons/button-icon.svg';
import CheckboxIcon from '../../assets/svg/icons/checkbox-icon.svg';
import CloseMenuIcon from '../../assets/svg/icons/close-menu-icon.svg';
import DeploysIcon from '../../assets/svg/icons/deploys-icon.svg';
import ErrorIcon from '../../assets/svg/icons/error-icon.svg';
import FailureIcon from '../../assets/svg/icons/failure-icon.svg';
import LoaderIcon from '../../assets/svg/icons/loader-icon.svg';
import OpenMenuIcon from '../../assets/svg/icons/open-menu-icon.svg';
import PeersIcon from '../../assets/svg/icons/peers-icon.svg';
import SuccessIcon from '../../assets/svg/icons/success-icon.svg';
import ValidatorsIcon from '../../assets/svg/icons/validators-icon.svg';

export interface IconsProps {
  readonly iconName: string;
  readonly stroke?: string;
  readonly fill?: string;
  readonly width?: number;
}

export const Icons: React.FC<IconsProps> = ({
  iconName = 'BlocksIcon',
  stroke = '',
  fill = 'none',
  width = 250,
}) => {
  const icons = [
    {
      alt: 'Blocks Icon',
      comp: <BlocksIcon />,
      key: 'BlocksIcon',
    },
    {
      alt: 'Button Icon',
      comp: <ButtonIcon />,
      key: 'ButtonIcon',
    },
    {
      alt: 'Checkbox Icon',
      comp: <CheckboxIcon />,
      key: 'CheckboxIcon',
    },
    {
      alt: 'CloseMenu Icon',
      comp: <CloseMenuIcon />,
      key: 'CloseMenuIcon',
    },
    {
      alt: 'Deploys Icon',
      comp: <DeploysIcon />,
      key: 'DeploysIcon',
    },
    {
      alt: 'Error Icon',
      comp: <ErrorIcon />,
      key: 'ErrorIcon',
    },
    {
      alt: 'Failure Icon',
      comp: <FailureIcon />,
      key: 'FailureIcon',
    },
    {
      alt: 'Loader Icon',
      comp: <LoaderIcon />,
      key: 'LoaderIcon',
    },
    {
      alt: 'OpenMenu Icon',
      comp: <OpenMenuIcon />,
      key: 'OpenMenuIcon',
    },
    {
      alt: 'Peers Icon',
      comp: <PeersIcon />,
      key: 'PeersIcon',
    },
    {
      alt: 'Success Icon',
      comp: <SuccessIcon />,
      key: 'SuccessIcon',
    },
    {
      alt: 'Validators Icon',
      comp: <ValidatorsIcon />,
      key: 'ValidatorsIcon',
    },
  ];

  return (
    <IconsContainer>
      {icons.map(({ key, comp }) => (
        <IconsWrapper width={width} key={`Icons: key=${key}`}>
          {iconName === key && (
            <StyledSvg stroke={stroke} fill={fill}>
              {comp}
            </StyledSvg>
          )}
        </IconsWrapper>
      ))}
    </IconsContainer>
  );
};

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
  stroke: string | undefined;
  fill: string | undefined;
}>`
  display: block;
  stroke: ${({ stroke }) => stroke ?? '#7F8095'};
  fill: ${({ fill }) => fill ?? 'none'};
  width: 100%;
  height: auto;
`;

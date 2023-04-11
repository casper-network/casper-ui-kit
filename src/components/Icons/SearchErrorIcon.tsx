import styled from '@emotion/styled';
import React from 'react';
import ErrorIcon from '../../assets/svg/icons/error-icon.svg';

export const SearchErrorIcon: React.FC = () => (
  <IconsContainer>
    <IconsWrapper>
      <StyledSvg role="img">
        <title>{'Error Icon'}</title>
        {<ErrorIcon />}
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
  padding: 0;
  height: 30px;
  margin: 0;
`;
export const IconsWrapper = styled.li`
  display: block;
  width: 30px;
`;

export const StyledSvg = styled.svg`
  stroke: red;
  fill: none;
  display: block;
  width: 100%;
  stroke-linecap: round;
  stroke-linejoin: round;
`;

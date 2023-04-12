import styled from '@emotion/styled';
import React from 'react';
import ButtonIcon from '../../assets/svg/icons/button-icon.svg';

export const SearchButtonIcon: React.FC = () => (
  <IconsContainer>
    <IconsWrapper>
      <StyledSvg role="img">
        <title>{'Button Icon'}</title>
        {<ButtonIcon />}
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
  height: 20px;
  margin: 0;
`;
export const IconsWrapper = styled.li`
  display: block;
  width: 20px;
`;

export const StyledSvg = styled.svg`
  display: block;
  width: 100%;
  fill: white;
`;

import styled from '@emotion/styled';
import React from 'react';

export interface InfoCardProps {
  children: React.ReactNode;
  textColor?: string;
  backgroundColor?: string;
  boxShadowColor?: string;
  borderColor?: string;
}

export const InfoCard: React.FC<InfoCardProps> = ({
  children,
  textColor = 'black',
  backgroundColor = 'white',
  boxShadowColor = 'rgba(127, 128, 149, 0.2)',
  borderColor = '#e3e3e9',
}) => {
  return (
    <InfoCardSection
      backgroundColor={backgroundColor}
      boxShadowColor={boxShadowColor}
      borderColor={borderColor}
      textColor={textColor}>
      <InfoCardContentWrapper>{children}</InfoCardContentWrapper>
    </InfoCardSection>
  );
};

const InfoCardSection = styled.section<{
  backgroundColor: string;
  boxShadowColor: string;
  borderColor: string;
  textColor: string;
}>`
  color: ${({ textColor }) => textColor};
  margin: 0;
  border-radius: 0.35rem;
  width: 100%;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border: 1px solid ${({ borderColor }) => borderColor};
  box-shadow: 0px 0.125rem 0.5rem ${({ boxShadowColor }) => boxShadowColor};
`;

const InfoCardContentWrapper = styled.div`
  width: 100%;
  padding: 2rem;
  margin: 0 auto;
  overflow-x: auto;
  max-width: calc(100vw - 4rem);

  @media only screen and (min-width: 100px) {
    max-width: calc(100vw - 6rem);
  }
`;

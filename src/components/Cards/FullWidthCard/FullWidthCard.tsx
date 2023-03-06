import React from 'react';
import styled from '@emotion/styled';

export interface FullWidthCardProps {
  children: React.ReactNode;
}

const getChildrenOnDisplayName = (
  children: React.ReactNode,
  displayName: string,
) =>
  React.Children.map(children, (child: any) =>
    child?.type.displayName === displayName ? child : null,
  );

export const FullWidthCard = ({ children }: FullWidthCardProps) => {
  const header = getChildrenOnDisplayName(children, 'Header');
  const body = getChildrenOnDisplayName(children, 'Body');
  const footer = getChildrenOnDisplayName(children, 'Footer');

  return (
    <InfoCardSection>
      <InfoCardContentWrapper>
        {header}
        {body}
        {footer}
      </InfoCardContentWrapper>
    </InfoCardSection>
  );
};

const Header = ({ children }: { children: React.ReactNode }) => (
  <HeaderWrapper>{children}</HeaderWrapper>
);
Header.displayName = 'Header';
FullWidthCard.Header = Header;

const Body = ({ children }: { children: React.ReactNode }) => (
  <BodyWrapper>{children}</BodyWrapper>
);
Body.displayName = 'Body';
FullWidthCard.Body = Body;

const Footer = ({ children }: { children: React.ReactNode }) => (
  <FooterWrapper>{children}</FooterWrapper>
);
Footer.displayName = 'Footer';
FullWidthCard.Footer = Footer;

const HeaderWrapper = styled.div`
  margin-bottom: 2rem;
`;

const BodyWrapper = styled.div`
  height: 100%;
  width: auto;
  padding: 1rem 0;
  border: none;
`;

const FooterWrapper = styled.div`
  margin-top: 1rem;
`;

const InfoCardSection = styled.section`
  color: black;
  margin: 0;
  border-radius: 0.35rem;
  width: 100%;
  background-color: white;
  border: 1px solid #e3e3e9;
  box-shadow: 0px 0.125rem 0.5rem rgba(127, 128, 149, 0.2);
`;

const InfoCardContentWrapper = styled.div`
  width: 100%;
  padding: 2rem;
  margin: 0 auto;
  overflow-x: auto;
  max-width: calc(100vw - 4rem);
`;

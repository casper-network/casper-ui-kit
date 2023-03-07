import styled from '@emotion/styled';
import React from 'react';

export interface Children {
  children: React.ReactNode;
}

export interface CardProps extends Children {}

export const Card = ({ children }: Children) => {
  const subComponentList = Object.keys(Card);

  const subComponents = subComponentList.map((key: string) => {
    return React.Children.map(children, (child: any) => {
      return child?.type.name === key ? child : null;
    });
  });

  return (
    <CardContentWrapper className="card">
      {subComponents.map(component => component)}
    </CardContentWrapper>
  );
};

const Header: React.FC<Children> = ({ children }) => (
  <div className="header">{children}</div>
);
Card.Header = Header;

const Body: React.FC<Children> = ({ children }) => (
  <div className="body">{children}</div>
);
Card.Body = Body;

const Footer: React.FC<Children> = ({ children }) => (
  <div className="body">{children}</div>
);
Card.Footer = Footer;

export const CardContentWrapper = styled.div`
  width: 100%;
  background: white;
  border: 1px solid #e3e3e9;
  box-shadow: 0px 0.125rem 0.5rem rgba(127, 128, 149, 0.2);
  border-radius: 0.35rem;
  padding: 2rem;
  overflow-x: auto;
  max-width: calc(100vw - 4rem);
  margin: 0 auto 2rem auto;
`;

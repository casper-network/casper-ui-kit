import styled from 'src/styled';
import React from 'react';
import { subComponentHelper } from '../../../utils';

export interface ComponentProps {
  readonly children: React.ReactNode;
  readonly className?: string;
}

export interface CardProps extends ComponentProps {
  readonly className?: string;
  readonly baseCardDataCy?: string;
}

export const Card = ({ children, className, baseCardDataCy }: CardProps) => {
  const subComponentList = Object.keys(Card);

  const subComponents = subComponentHelper(subComponentList, children);

  return (
    <CardContentWrapper
      data-testid="base-card"
      data-cy={baseCardDataCy}
      className={className}>
      {subComponents.map(component => component)}
    </CardContentWrapper>
  );
};

const Header: React.FC<ComponentProps> = ({ children, className }) => (
  <div data-testid="base-card-header" className={`header ${className || ''}`}>
    {children}
  </div>
);
Header.displayName = 'Header';
Card.Header = Header;

const Body: React.FC<ComponentProps> = ({ children, className }) => (
  <div data-testid="base-card-body" className={`body ${className || ''}`}>
    {children}
  </div>
);
Body.displayName = 'Body';
Card.Body = Body;

const Footer: React.FC<ComponentProps> = ({ children, className }) => (
  <div data-testid="base-card-footer" className={`footer ${className || ''}`}>
    {children}
  </div>
);
Footer.displayName = 'Footer';
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

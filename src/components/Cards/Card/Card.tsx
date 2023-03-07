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
    <div className="card">{subComponents.map(component => component)}</div>
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

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Card } from '../../components/Cards/Card/Card';

describe('Card', () => {
  it('should render base card', () => {
    render(
      <Card>
        <Card.Body>Body</Card.Body>
      </Card>,
    );

    expect(screen.getByTestId('baseCard')).toBeInTheDocument();
    expect(screen.getByTestId('baseCardBody')).toBeInTheDocument();
  });

  it('should render base card with header', () => {
    render(
      <Card>
        <Card.Header>Header</Card.Header>
      </Card>,
    );
    expect(screen.getByTestId('baseCardHeader')).toBeInTheDocument();
  });

  it('should render base card with footer', () => {
    render(
      <Card>
        <Card.Footer>Footer</Card.Footer>
      </Card>,
    );
    expect(screen.getByTestId('baseCardFooter')).toBeInTheDocument();
  });
});

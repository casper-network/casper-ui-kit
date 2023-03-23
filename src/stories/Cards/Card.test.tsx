import React from 'react';
import { render } from '@testing-library/react';
import { Card } from '../../components/Cards/Card/Card';

describe('Card', () => {
  it('should render base card', () => {
    const { queryAllByTestId } = render(
      <Card>
        <Card.Body>Body</Card.Body>
      </Card>,
    );
    const baseCard = queryAllByTestId('baseCard');

    expect(baseCard).toBeTruthy();
  });

  it('should render base card with header', () => {
    const { queryAllByTestId } = render(
      <Card>
        <Card.Header>Header</Card.Header>
      </Card>,
    );
    const baseCardHeader = queryAllByTestId('baseCardHeader');
    expect(baseCardHeader).toBeTruthy();
  });

  it('should render base card with footer', () => {
    const { queryAllByTestId } = render(
      <Card>
        <Card.Footer>Footer</Card.Footer>
      </Card>,
    );
    const baseCardFooter = queryAllByTestId('baseCardFooter');
    expect(baseCardFooter).toBeTruthy();
  });
});

import React from 'react';
import styled from '@emotion/styled';
import { Meta, StoryFn } from '@storybook/react';
import { Card, CardProps } from '../../components/Cards/Card';

export default {
  title: 'Components/Card',
  component: Card,
} as Meta<typeof Card>;

// Create a master template for mapping args to render the Button component
const Template: StoryFn<typeof Card> = (args: CardProps) => (
  <StoryContainer>
    <Card {...args}>
      <Card.Header>Header</Card.Header>
      <Card.Body>Body</Card.Body>
      <Card.Footer>Footer</Card.Footer>
    </Card>
  </StoryContainer>
);

export const BaseCard = Template.bind({});

BaseCard.args = {};

const StoryContainer = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 2rem;
`;

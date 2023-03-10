import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Card, CardProps } from '../../components/Cards/Card';

export default {
  title: 'Components/Card',
  component: Card,
} as ComponentMeta<typeof Card>;

// Create a master template for mapping args to render the Button component
const Template: ComponentStory<typeof Card> = (args: CardProps) => (
  <Card {...args}>
    <Card.Header>Header</Card.Header>
    <Card.Body>Body</Card.Body>
    <Card.Footer>Footer</Card.Footer>
  </Card>
);

export const BaseFullWidthCard = Template.bind({});

BaseFullWidthCard.args = {};

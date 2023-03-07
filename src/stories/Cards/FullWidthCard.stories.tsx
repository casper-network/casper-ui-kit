import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Card, Children } from '../../components/Cards/FullWidthCard';

export default {
  title: 'Components/Card',
  component: Card,
} as ComponentMeta<typeof Card>;

// Create a master template for mapping args to render the Button component
const Template: ComponentStory<typeof Card> = (args: Children) => (
  <Card {...args}>
    <Card.Header>Header</Card.Header>
    <Card.Footer>Footer</Card.Footer>
  </Card>
);

export const BaseFullWidthCard = Template.bind({});

BaseFullWidthCard.args = {};

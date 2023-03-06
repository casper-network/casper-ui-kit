import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import {
  FullWidthCard,
  FullWidthCardProps,
} from '../../components/Cards/FullWidthCard';

export default {
  title: 'Components/FullWidthCard',
  component: FullWidthCard,
} as ComponentMeta<typeof FullWidthCard>;

// Create a master template for mapping args to render the Button component
const Template: ComponentStory<typeof FullWidthCard> = (
  args: FullWidthCardProps,
) => <FullWidthCard {...args} />;

const Children = (
  <>
    <FullWidthCard.Header>Header</FullWidthCard.Header>
    <FullWidthCard.Body>Body</FullWidthCard.Body>
    <FullWidthCard.Footer>Footer</FullWidthCard.Footer>
  </>
);

export const BaseFullWidthCard = Template.bind({});

BaseFullWidthCard.args = {
  children: Children,
};

import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { InfoCard, InfoCardProps } from '../../components/Cards/InfoCard';

export default {
  title: 'Components/InfoCard',
  component: InfoCard,
} as ComponentMeta<typeof InfoCard>;

// Create a master template for mapping args to render the Button component
const Template: ComponentStory<typeof InfoCard> = (args: InfoCardProps) => (
  <InfoCard {...args} />
);

const ChildText = <p>InfoCard Content</p>;

export const BaseInfoCard = Template.bind({});

BaseInfoCard.args = {
  children: ChildText,
};

export const DarkModeInfoCard = Template.bind({});

DarkModeInfoCard.args = {
  children: ChildText,
  backgroundColor: '#212121',
  borderColor: '616161',
  textColor: '#eee',
};

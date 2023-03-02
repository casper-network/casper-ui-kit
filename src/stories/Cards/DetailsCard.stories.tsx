import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import {
  DetailCardProps,
  DetailsCard,
} from '../../components/Cards/DetailsCard';

export default {
  title: 'Components/DetailsCard',
  component: DetailsCard,
} as ComponentMeta<typeof DetailsCard>;

// Create a master template for mapping args to render the Button component
const Template: ComponentStory<typeof DetailsCard> = (
  args: DetailCardProps,
) => <DetailsCard {...args} />;

const Rows = [
  { key: '1', detailKey: 'detailKey1', value: 'value1' },
  { key: '2', detailKey: 'detailKey2', value: 'value2' },
  { key: '3', detailKey: 'detailKey3', value: 'value3' },
];
const HeadContent = <h1>Header Content</h1>;
const FootContent = <p>Footer Content</p>;
export const BaseDetailsCard = Template.bind({});

BaseDetailsCard.args = {
  headContent: HeadContent,
  rows: Rows,
  footContent: FootContent,
};

export const DarkModeDetailsCard = Template.bind({});

DarkModeDetailsCard.args = {
  headContent: HeadContent,
  rows: Rows,
  footContent: FootContent,
};

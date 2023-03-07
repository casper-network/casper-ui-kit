import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import {
  TwoColumnTable,
  TwoColumnTableProps,
} from '../../components/Tables/TwoColumnTable';

export default {
  title: 'Components/Tables',
  component: TwoColumnTable,
} as ComponentMeta<typeof TwoColumnTable>;

// Create a master template for mapping args to render the Button component
const Template: ComponentStory<typeof TwoColumnTable> = (
  args: TwoColumnTableProps,
) => <TwoColumnTable {...args} />;

const Rows = [
  { key: 1, value: 'val1', detailKey: 'det1' },
  { key: 2, value: 'val2', detailKey: 'det2' },
  { key: 3, value: 'val3', detailKey: 'det3' },
];

export const BaseTwoColumnTable = Template.bind({});

BaseTwoColumnTable.args = {
  rows: Rows,
  noDividers: false,
};

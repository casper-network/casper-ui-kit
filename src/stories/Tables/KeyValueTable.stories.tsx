import React from 'react';
import styled from '@emotion/styled';
import { Meta, StoryFn } from '@storybook/react';
import {
  KeyValueTable,
  KeyValueTableProps,
} from '../../components/Tables/KeyValueTable';
import { Card } from '../../components';
import { pxToRem } from '../../utils';

export default {
  title: 'Components/Tables',
  component: KeyValueTable,
} as Meta<typeof KeyValueTable>;

// Create a master template for mapping args to render the Button component
const Template: StoryFn<typeof KeyValueTable> = (args: KeyValueTableProps) => (
  <StoryContainer>
    <Card>
      <Card.Body>
        <KeyValueTable {...args} />
      </Card.Body>
    </Card>
  </StoryContainer>
);

const Rows = [
  { key: 1, value: 'val1', detailKey: 'det1' },
  { key: 2, value: 'val2', detailKey: 'det2' },
  { key: 3, value: 'val3', detailKey: 'det3' },
];

export const BaseKeyValueTable = Template.bind({});

BaseKeyValueTable.args = {
  rows: Rows,
  noDividers: false,
};

const StoryContainer = styled.div`
  width: 100%;
  max-width: ${pxToRem(400)};
  padding: 2rem;
`;

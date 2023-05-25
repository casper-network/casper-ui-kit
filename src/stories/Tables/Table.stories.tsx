import React from 'react';
import styled from '@emotion/styled';
import { Meta, StoryFn } from '@storybook/react';
import { ColumnDef } from '@tanstack/react-table';
import { pxToRem } from 'src/utils';
import { Table, TableProps } from '../../components';

export default {
  title: 'Components/Tables',
  component: Table,
} as Meta<typeof Table>;

interface FakeTableData {
  id: number;
  name: string;
  randomNumberField: number;
}

const Template: StoryFn<typeof Table<FakeTableData>> = (
  args: TableProps<FakeTableData>,
) => (
  <StoryContainer>
    <Table<FakeTableData> {...args} />
  </StoryContainer>
);

const columns: ColumnDef<FakeTableData>[] = [
  {
    header: 'ID',
    accessorKey: 'id',
    enableSorting: false,
    maxSize: 100,
    cell: ({ getValue }) => getValue<number>(),
  },
  {
    header: 'Name',
    accessorKey: 'name',
    enableSorting: false,
    maxSize: 125,
    cell: ({ getValue }) => getValue<string>(),
  },
  {
    header: 'Random Number Field',
    accessorKey: 'randomNumberField',
    enableSorting: false,
    maxSize: 125,
    cell: ({ getValue }) => getValue<number>(),
  },
];

const buildFakeTableData: (rowCount: number) => FakeTableData[] = (
  rowCount: number = 10,
) => {
  const fakeData = [];

  for (let i = 0; i < rowCount; i++) {
    fakeData.push({
      id: i + 1,
      name: `Name ${i + 1}`,
      randomNumberField: Math.floor(Math.random() * 1000 + 1),
    });
  }

  return fakeData;
};

const pageSize = 10;
const amountOfPages = 1;
const rowCount = pageSize * amountOfPages;

const fakeTableData = buildFakeTableData(rowCount);

const TableHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: rgb(100, 116, 139);
  height: ${pxToRem(42)};
`;

const Foot = styled.div`
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  height: ${pxToRem(42)};
`;

const HeadValue = styled.p`
  color: rgb(100, 116, 139);
`;

const FootValue = HeadValue;

const header = (
  <TableHead>
    <HeadValue>{rowCount} rows</HeadValue>
  </TableHead>
);

const footer = (
  <Foot>
    <FootValue>This is the footer</FootValue>
  </Foot>
);

const isPageLoading = false;

export const BaseTable = Template.bind({});

BaseTable.args = {
  header,
  footer,
  columns,
  data: fakeTableData,
  tableBodyLoading: isPageLoading,
  isLastPage: false,
  currentPageSize: pageSize,
  placeholderData: {},
};

const StoryContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  background-color: white;
  padding: 4rem;
`;

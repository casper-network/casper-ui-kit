import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ColumnDef } from '@tanstack/react-table';
import { standardizeNumber } from 'src/utils/';
import { Block, createMockBlocks } from 'src/mocks';
import { Table } from '../../components/Tables/Table';

const headerContent = 'This is the head content';

const header = <div data-testid="head-content">{headerContent}</div>;

const footerContent = 'This is the footer content';

const footer = <div data-testid="footer-content">{footerContent}</div>;

const data = createMockBlocks(5);

const firstColHeader = 'Block Height';
const secondColHeader = 'Era';
const thirdColHeader = 'Deploy';
const fourthColHeader = 'Age';
const fifthColHeader = 'Block Hash';
const sixthColHeader = 'Validator';

const columns: ColumnDef<Block>[] = [
  {
    id: 'height',
    header: firstColHeader,
    accessorKey: 'header.height',
    enableSorting: true,
    cell: ({ getValue }) => <>{standardizeNumber(getValue<number>())}</>,
  },
  {
    header: secondColHeader,
    accessorKey: 'header.era_id',
    enableSorting: false,
    cell: ({ getValue }) => getValue<number>(),
  },
  {
    header: thirdColHeader,
    accessorKey: 'body',
    cell: ({ getValue }) => {
      const body = getValue<Block['body']>();

      return (
        (body.deploy_hashes?.length ?? 0) + (body.transfer_hashes?.length ?? 0)
      );
    },
    maxSize: 100,
    enableSorting: false,
  },
  {
    header: fourthColHeader,
    accessorKey: 'header.timestamp',
    enableSorting: false,
    cell: ({ getValue }) => getValue<string>(),
  },
  {
    header: fifthColHeader,
    accessorKey: 'hash',
    enableSorting: false,
    cell: ({ getValue }) => getValue<string>(),
    minSize: 230,
  },
  {
    header: sixthColHeader,
    accessorKey: 'body.proposer',
    enableSorting: false,
    cell: ({ getValue }) => getValue<string>(),
    maxSize: 100,
  },
];

const Template: React.FC<{ loading?: boolean }> = ({ loading }) => {
  return (
    <Table<Block>
      header={header}
      columns={columns}
      data={data}
      footer={footer}
      tableBodyLoading={!!loading}
      isLastPage
    />
  );
};

describe('Table', () => {
  it('should render out all table columns heads', () => {
    render(<Template />);

    const firstTableHead = screen.getByText(firstColHeader);
    const secondTableHead = screen.getByText(secondColHeader);
    const thirdTableHead = screen.getByText(thirdColHeader);
    const fourthTableHead = screen.getByText(fourthColHeader);
    const fifthTableHead = screen.getByText(fifthColHeader);
    const sixthTableHead = screen.getByText(sixthColHeader);

    expect(firstTableHead).toBeInTheDocument();
    expect(secondTableHead).toBeInTheDocument();
    expect(thirdTableHead).toBeInTheDocument();
    expect(fourthTableHead).toBeInTheDocument();
    expect(fifthTableHead).toBeInTheDocument();
    expect(sixthTableHead).toBeInTheDocument();
  });

  it('should render 5 rows when given 5 data objects', () => {
    render(<Template />);

    const fifthRow = screen.getByText(data[4].hash);

    expect(fifthRow).toBeInTheDocument();
  });

  it('should render row column content', () => {
    render(<Template />);

    const thirdRowSecondColumnContent = screen.getByText(data[2].hash);

    expect(thirdRowSecondColumnContent).toBeInTheDocument();
  });

  it('should render head content', () => {
    render(<Template />);

    const headerByTestId = screen.getByTestId('head-content');

    expect(headerByTestId).toHaveTextContent(headerContent);
  });

  it('should render foot content when given foot content', () => {
    render(<Template />);

    const footerByTestId = screen.getByTestId('footer-content');

    expect(footerByTestId).toHaveTextContent(footerContent);
  });

  it('should render loading skeleton when table body is loading', () => {
    render(<Template loading />);

    const skeletonLoader = screen.getAllByTestId('skeleton-loader');

    expect(skeletonLoader).toHaveLength(data.length * columns.length);
  });
});

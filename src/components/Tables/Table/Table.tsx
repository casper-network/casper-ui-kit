import React, { useMemo } from 'react';
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  OnChangeFn,
  SortingState,
  TableOptions,
  useReactTable,
} from '@tanstack/react-table';
import Skeleton from 'react-loading-skeleton';
import { css } from '@emotion/react';
import { pxToRem } from 'src/utils';
import styled from '../../../styled';
import DownArrowLight from '../../../assets/svg/icons/down-icon-light.svg';
import DownArrowDark from '../../../assets/svg/icons/down-icon-dark.svg';

interface TableThemeProps {
  bgColor?: string;
  borderColor?: string;
  borderWidth?: string;
  boxShadow?: string;
  margin?: string;
  width?: string;
  maxWidth?: string;
  borderRadius?: string;
  color?: string;
  tableHeadBgColor?: string;
  sortButtonActiveColor?: string;
  sortButtonBorderColor?: string;
  sortIconUp?: React.ReactElement;
  sortIconDown?: React.ReactElement;
  sortIconNeutral?: React.ReactElement;
}

export interface TableProps<T> {
  readonly className?: string;
  readonly header?: React.ReactNode;
  readonly columns: ColumnDef<T>[];
  readonly data: T[];
  readonly footer?: React.ReactNode;
  readonly onSortingChange?: OnChangeFn<SortingState>;
  readonly sorting?: SortingState;
  readonly initialSorting?: SortingState;
  readonly tableBodyLoading?: boolean;
  readonly currentPageSize?: number;
  /*
  - used for deeply nested accessor values to allow for skeleton loaders to work
  - parsing tableData will throw error without
  - placeholderData can be anything, it just has to match nested data type
  */
  readonly placeholderData?: { [key: string]: any };
  readonly isLastPage?: boolean;
  readonly theme?: TableThemeProps;
}

export function Table<T extends unknown>({
  columns,
  data,
  header,
  footer,
  onSortingChange,
  sorting,
  initialSorting,
  tableBodyLoading,
  currentPageSize,
  placeholderData,
  isLastPage,
  theme,
  className,
}: TableProps<T>) {
  const defaultTheme = {
    bgColor: 'white',
    borderColor: 'rgb(69, 137, 246)',
    borderWidth: '0.1875rem',
    boxShadow: 'rgba(127, 128, 149, 0.2) 0px 2px 7px',
    margin: '0 auto',
    width: '100%',
    maxWidth: 'calc(100vw - 5rem)',
    borderRadius: '0.5rem',
    color: 'rgb(0, 0, 0)',
    tableHeadBgColor: 'rgb(244, 244, 244)',
    sortButtonActiveColor: '#4589F6',
    sortButtonBorderColor: '#E3E3E9',
    sortIconUp: <StyledArrowLight orientation="up" />,
    sortIconDown: <StyledArrowLight orientation="down" />,
    sortIconNeutral: <DownArrowDark orientation="down" />,
  };

  const fullTheme = {
    ...defaultTheme,
    ...theme,
  };

  const tableData = useMemo(() => {
    if (!data.length || (data.length !== currentPageSize && !isLastPage)) {
      return Array(currentPageSize).fill(placeholderData ?? {}) as T[];
    }

    return data;
  }, [data, currentPageSize, placeholderData, isLastPage]);

  const tableColumns = useMemo(() => {
    return tableBodyLoading
      ? columns.map(column => ({
          ...column,
          cell: () => <Skeleton containerTestId="skeleton-loader" />,
        }))
      : columns;
  }, [tableBodyLoading, columns]);

  const options: TableOptions<T> = {
    data: tableData,
    columns: tableColumns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  };

  if (onSortingChange) options.onSortingChange = onSortingChange;
  if (sorting) options.state = { sorting };
  if (initialSorting) options.initialState = { sorting: initialSorting };

  const { getHeaderGroups, getRowModel } = useReactTable(options);

  return (
    <TableWrapper
      className={className}
      bgColor={fullTheme.bgColor}
      borderColor={fullTheme.borderColor}
      borderWidth={fullTheme.borderWidth}
      boxShadow={fullTheme.boxShadow}
      textColor={fullTheme.color}
      data-testid="base-table">
      <Header>{header}</Header>
      <StyledTable bgColor={fullTheme.bgColor}>
        <TableHead bgColor={fullTheme.tableHeadBgColor}>
          {getHeaderGroups().map(headerGroup => {
            return (
              <TableHeader key={headerGroup.id}>
                {headerGroup.headers.map(header => {
                  const isSorted = header.column.getIsSorted();
                  const canSort = header.column.getCanSort();

                  return (
                    <Th
                      key={header.id}
                      colSpan={header.colSpan}
                      style={{ width: header.getSize() }}
                      sortable={header.column.getCanSort()}
                      onClick={() =>
                        header.column.getCanSort()
                          ? header.column.toggleSorting(
                              header.column.getIsSorted() === 'asc',
                            )
                          : undefined
                      }>
                      {header.isPlaceholder ? null : (
                        <>
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                          <span>
                            {{
                              asc: (
                                <SortIconWrapper
                                  bgColor={fullTheme.sortButtonActiveColor}>
                                  {fullTheme.sortIconUp}
                                </SortIconWrapper>
                              ),
                              desc: (
                                <SortIconWrapper
                                  bgColor={fullTheme.sortButtonActiveColor}>
                                  {fullTheme.sortIconDown}
                                </SortIconWrapper>
                              ),
                            }[header.column.getIsSorted() as string] ?? null}
                            {canSort && !isSorted && (
                              <SortIconNeutralWrapper
                                bgColor={fullTheme.tableHeadBgColor}
                                borderColor={fullTheme.sortButtonBorderColor}>
                                {fullTheme.sortIconNeutral}
                              </SortIconNeutralWrapper>
                            )}
                          </span>
                        </>
                      )}
                    </Th>
                  );
                })}
              </TableHeader>
            );
          })}
        </TableHead>
        <tbody>
          {getRowModel().rows.map(row => (
            <TableBodyRow
              key={row.id}
              hoverBgColor={fullTheme.tableHeadBgColor}>
              {row.getVisibleCells().map(cell => {
                return (
                  <TableBodyItem
                    key={cell.id}
                    style={{ width: cell.column.getSize() }}
                    borderColor={fullTheme.tableHeadBgColor}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableBodyItem>
                );
              })}
            </TableBodyRow>
          ))}
        </tbody>
      </StyledTable>
      {footer}
    </TableWrapper>
  );
}

const TableWrapper = styled.div<{
  bgColor: string;
  borderColor: string;
  borderWidth: string;
  boxShadow: string;
  textColor: string;
}>`
  width: 100%;
  border-radius: 0.5rem;
  overflow-x: auto;
  max-width: calc(100vw - 5rem);
  margin: 0 auto;
  background-color: ${props => props.bgColor};
  border: ${props => props.borderWidth} solid ${props => props.borderColor};
  box-shadow: ${props => props.boxShadow};
  color: ${props => props.textColor};
`;

const Header = styled.div`
  padding: 1rem 2rem;
  width: 100%;
  box-sizing: border-box;
`;

const StyledTable = styled.table<{ bgColor: string }>`
  table-layout: auto;
  width: 100%;
  border-spacing: 0px 0px;
  min-width: ${pxToRem(800)};
  background-color: ${props => props.bgColor};
  position: relative;
`;

const TableHead = styled.thead<{ bgColor: string }>`
  background-color: ${props => props.bgColor};
`;

const TableHeader = styled.tr`
  height: 4rem;
`;

const Th = styled.th<{ sortable?: boolean }>`
  text-align: start;
  padding: 0 2rem;
  font-weight: normal;

  ${({ sortable }) => {
    if (sortable)
      return css`
        position: relative;
        user-select: none;
        cursor: pointer;

        & > span {
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
        }
      `;
  }}
`;

const TableBodyRow = styled.tr<{ hoverBgColor: string }>`
  height: ${pxToRem(50)};

  :hover {
    background-color: ${props => props.hoverBgColor};
  }
`;

const TableBodyItem = styled.td<{ borderColor: string }>`
  text-align: start;
  padding: 0 ${pxToRem(32)};
  border-bottom: ${pxToRem(1)} solid ${props => props.borderColor};
`;

const SortIconWrapper = styled.div<{ bgColor: string }>`
  height: ${pxToRem(27)};
  width: ${pxToRem(27)};
  background-color: ${props => props.bgColor};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0.5rem;

  * {
    color: white;
    z-index: 1;
  }

  :hover {
    cursor: pointer;
  }
`;

const SortIconNeutralWrapper = styled.div<{
  bgColor: string;
  borderColor: string;
}>`
  height: ${pxToRem(27)};
  width: ${pxToRem(27)};
  background-color: ${props => props.bgColor};
  border: 1px solid ${props => props.borderColor};
  border-radius: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0.5rem;

  * {
    color: white;
    z-index: 1;
  }

  :hover {
    cursor: pointer;
  }
`;

const StyledArrowLight = styled(DownArrowLight)<{ orientation: 'up' | 'down' }>`
  transform: ${({ orientation }) =>
    orientation === 'up' ? 'rotate(180deg)' : undefined};
`;

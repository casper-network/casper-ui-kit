import React from 'react';
import styled from '@emotion/styled';

export interface KeyValueRow {
  key: React.Key;
  detailKey: React.ReactNode;
  value: React.ReactNode;
}

export interface KeyValueTableProps {
  rows: KeyValueRow[];
  noDividers?: boolean;
  className?: string;
}

export const KeyValueTable: React.FC<KeyValueTableProps> = ({
  rows,
  noDividers,
  className,
}) => (
  <KeyValueTableWrapper data-testid="key-value-table" className={className}>
    <tbody>
      {rows.map(({ detailKey, value, key }) => {
        return (
          <tr key={key}>
            <TableLabel data-testid="table-key" noDividers={noDividers}>
              {detailKey}
            </TableLabel>
            <TableValue data-testid="table-value" noDividers={noDividers}>
              {value}
            </TableValue>
          </tr>
        );
      })}
    </tbody>
  </KeyValueTableWrapper>
);

const KeyValueTableWrapper = styled.table`
  width: 100%;
`;

export const TableData = styled.td<{ noDividers?: boolean }>`
  height: 100%;
  padding: 1rem 0;
  border: none;
  border-bottom: ${({ noDividers }) =>
    noDividers ? 'none' : '1px solid black'};
`;

export const TableLabel = styled(TableData)`
  width: 12.5rem;
  color: #64748b;
  white-space: nowrap;
  padding-right: 2rem;
  vertical-align: top;
`;

export const TableValue = styled(TableData)`
  display: flex;
  align-items: center;
`;

import React from 'react';
import styled from 'src/styled';

export interface KeyValueRow {
  readonly key: React.Key;
  readonly detailKey: React.ReactNode;
  readonly value: React.ReactNode;
  readonly tableKeyDataCy?: string;
  readonly tableValueDataCy?: string;
}

export interface KeyValueTableProps {
  readonly rows: KeyValueRow[];
  readonly noDividers?: boolean;
  readonly className?: string;
  readonly keyValueTableDataCy?: string;
}

export const KeyValueTable: React.FC<KeyValueTableProps> = ({
  rows,
  noDividers,
  className,
  keyValueTableDataCy,
}) => (
  <KeyValueTableWrapper
    data-testid="key-value-table"
    data-cy={keyValueTableDataCy}
    className={className}>
    <tbody>
      {rows.map(
        ({ detailKey, value, key, tableKeyDataCy, tableValueDataCy }) => {
          return (
            <tr key={key}>
              <TableLabel
                data-testid="table-key"
                data-cy={tableKeyDataCy}
                noDividers={noDividers}>
                {detailKey}
              </TableLabel>
              <TableValue
                data-testid="table-value"
                data-cy={tableValueDataCy}
                noDividers={noDividers}>
                {value}
              </TableValue>
            </tr>
          );
        },
      )}
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

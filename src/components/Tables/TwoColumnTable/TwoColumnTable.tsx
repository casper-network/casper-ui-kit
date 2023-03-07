import React from 'react';
import styled from '@emotion/styled';

export interface DetailCardRow {
  readonly key: React.Key;
  readonly detailKey: React.ReactNode;
  readonly value: React.ReactNode;
}

export interface TwoColumnTableProps {
  readonly rows: DetailCardRow[];
  readonly noDividers?: boolean;
}

export const TwoColumnTable: React.FC<TwoColumnTableProps> = ({
  rows,
  noDividers,
}) => {
  return (
    <TwoColumnTableWrapper>
      <tbody>
        {rows.map(({ detailKey, value, key }, index) => {
          return (
            <tr key={key} data-testid={index + 1}>
              <TableLabel noDividers={noDividers}>{detailKey}</TableLabel>
              <TableValue noDividers={noDividers}>{value}</TableValue>
            </tr>
          );
        })}
      </tbody>
    </TwoColumnTableWrapper>
  );
};

const TwoColumnTableWrapper = styled.table`
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

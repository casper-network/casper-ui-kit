import React from 'react';
import styled from '@emotion/styled';

export interface DetailCardRow {
  key: React.Key;
  detailKey: React.ReactNode;
  value: React.ReactNode;
}

export interface TwoColumnTableProps {
  rows: DetailCardRow[];
  noDividers?: boolean;
  className?: string;
}

export const TwoColumnTable: React.FC<TwoColumnTableProps> = ({
  rows,
  noDividers,
  className,
}) => (
  <TwoColumnTableWrapper className={className}>
    <tbody>
      {rows.map(({ detailKey, value, key }) => {
        return (
          <tr key={key}>
            <TableLabel noDividers={noDividers}>{detailKey}</TableLabel>
            <TableValue noDividers={noDividers}>{value}</TableValue>
          </tr>
        );
      })}
    </tbody>
  </TwoColumnTableWrapper>
);

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

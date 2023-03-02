import React from 'react';
import styled from '@emotion/styled';
import { InfoCard } from '../InfoCard';

interface DetailCardRow {
  readonly key: React.Key;
  readonly detailKey: React.ReactNode;
  readonly value: React.ReactNode;
}

export interface DetailCardProps {
  readonly headContent?: React.ReactNode;
  readonly rows: DetailCardRow[];
  readonly footContent?: React.ReactNode;
  readonly noDividers?: boolean;
}

export const DetailsCard: React.FC<DetailCardProps> = ({
  headContent,
  rows,
  footContent,
  noDividers = true,
}) => {
  return (
    <InfoCard>
      {!!headContent && <HeadContentWrapper>{headContent}</HeadContentWrapper>}
      <InfoCardTable>
        <tbody>
          {rows.map(({ detailKey, value, key }, index) => {
            return (
              <tr key={key} data-testid={index + 1}>
                <TableLabel noDividers>{detailKey}</TableLabel>
                <TableValue noDividers>{value}</TableValue>
              </tr>
            );
          })}
        </tbody>
      </InfoCardTable>
      {!!footContent && <FootContentWrapper>{footContent}</FootContentWrapper>}
    </InfoCard>
  );
};

const InfoCardTable = styled.table`
  width: 100%;
`;

export const TableData = styled.td<{ noDividers?: boolean }>`
  height: 100%;
  width: auto;
  padding: 1rem 0;
  border: none;
  border-bottom: ${({ noDividers }) =>
    noDividers ? 'none' : '1px solid black'};
`;

export const TableLabel = styled(TableData)`
  width: 12.5rem;
  color: black;
  white-space: nowrap;
  padding-right: 2rem;
  vertical-align: top;
`;

export const TableValue = styled(TableData)`
  display: flex;
  align-items: center;
`;

const HeadContentWrapper = styled.div`
  margin-bottom: 2rem;
`;

const FootContentWrapper = styled.div`
  margin-top: 1rem;
`;

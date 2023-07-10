import styled from '@emotion/styled';

export const TableHead = styled.div<{ color: string }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ color }) => color};
`;

export const TableTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const TotalRows = styled.p`
  margin-right: 1.5rem;
  white-space: nowrap;
`;

export const TableFooter = styled.div``;

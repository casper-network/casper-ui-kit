import styled from '@emotion/styled';
import { defaultTheme } from 'src/theme';
import { pxToRem } from 'src/utils';

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

export const TableFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: ${pxToRem(20)} 1.5rem;
  min-width: ${pxToRem(450)};

  @media (min-width: ${defaultTheme.breakpoints.lg}) {
    justify-content: flex-end;
    padding: ${pxToRem(20)} 2rem;
  }
`;

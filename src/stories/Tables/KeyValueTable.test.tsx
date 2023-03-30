import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { KeyValueTable } from '../../components/Tables/KeyValueTable/KeyValueTable';

const testRows = [{ key: 1, detailKey: 'detail1', value: 'value1' }];
describe('KeyValueTable', () => {
  it('should render key value table', () => {
    const { queryAllByTestId } = render(<KeyValueTable rows={testRows} />);
    const keyValueTable = queryAllByTestId('keyValueTable');
    expect(keyValueTable).toBeTruthy();
  });

  it('should render table key and value', () => {
    render(<KeyValueTable rows={testRows} />);
    expect(screen.getByTestId('tableKey')).toHaveTextContent(
      testRows[0].detailKey,
    );
    expect(screen.getByTestId('tableValue')).toHaveTextContent(
      testRows[0].value,
    );
  });

  it('should render with dividers', () => {
    render(<KeyValueTable rows={testRows} noDividers={false} />);
    expect(screen.getByTestId('tableKey')).toHaveStyle(
      'border-bottom: 1px solid black',
    );
    expect(screen.getByTestId('tableValue')).toHaveStyle(
      'border-bottom: 1px solid black',
    );
  });
});

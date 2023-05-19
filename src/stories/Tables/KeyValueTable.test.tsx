import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { KeyValueTable } from '../../components/Tables/KeyValueTable/KeyValueTable';

const testRows = [{ key: 1, detailKey: 'detail1', value: 'value1' }];
describe('KeyValueTable', () => {
  it('should render key value table', () => {
    render(<KeyValueTable rows={testRows} />);
    expect(screen.getByTestId('key-value-table')).toBeInTheDocument();
  });

  it('should render table key and value', () => {
    render(<KeyValueTable rows={testRows} />);
    expect(screen.getByTestId('table-key')).toHaveTextContent(
      testRows[0].detailKey,
    );
    expect(screen.getByTestId('table-value')).toHaveTextContent(
      testRows[0].value,
    );
  });

  it('should render with dividers', () => {
    render(<KeyValueTable rows={testRows} noDividers={false} />);
    expect(screen.getByTestId('table-key')).toHaveStyle(
      'border-bottom: 1px solid black',
    );
    expect(screen.getByTestId('table-value')).toHaveStyle(
      'border-bottom: 1px solid black',
    );
  });
});

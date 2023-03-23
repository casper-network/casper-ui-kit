import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { TwoColumnTable } from '../../components/Tables/TwoColumnTable/TwoColumnTable';

const testRows = [{ key: 1, detailKey: 'detail1', value: 'value1' }];
describe('TwoColumnTable', () => {
  it('should render two column table', () => {
    const { queryAllByTestId } = render(<TwoColumnTable rows={testRows} />);
    const twoColumnTable = queryAllByTestId('twoColumnTable');
    // const twoColumnTableLabel = queryAllByTestId('twoColumnTableLabel');
    expect(twoColumnTable).toBeTruthy();
    // expect(twoColumnTableLabel).toHaveTextContent('detail1');
  });

  it('should render table label and value', () => {
    render(<TwoColumnTable rows={testRows} />);
    expect(screen.getByTestId('twoColumnTableLabel')).toHaveTextContent(
      'detail1',
    );
    expect(screen.getByTestId('twoColumnTableValue')).toHaveTextContent(
      'value1',
    );
  });

  it('should render with dividers', () => {
    render(<TwoColumnTable rows={testRows} noDividers={false} />);
    expect(screen.getByTestId('twoColumnTableLabel')).toHaveStyle(
      'border-bottom: 1px solid black',
    );
    expect(screen.getByTestId('twoColumnTableValue')).toHaveStyle(
      'border-bottom: 1px solid black',
    );
  });
});

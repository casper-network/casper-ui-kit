import React from 'react';
import { render } from '@testing-library/react';

import { Checkbox } from './Checkbox';

describe('Loader', () => {
  it('should render base loader', () => {
    const { getByRole, getByTestId } = render(<Checkbox checked />);

    const checkbox = getByRole('checkbox');
    const checkboxLabel = getByTestId('checkboxLabel');

    expect(checkbox).toBeTruthy();
    expect(checkboxLabel).toBeTruthy();
  });
});

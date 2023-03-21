import React from 'react';
import { render } from '@testing-library/react';

import { Base } from './Loader.stories';

describe('Loader', () => {
  it('renders base loader', () => {
    const { getByTestId } = render(<Base {...Base.args} />);

    const loaderWrapper = getByTestId('loaderId');
    expect(loaderWrapper).toBeInTheDocument();
  });
});

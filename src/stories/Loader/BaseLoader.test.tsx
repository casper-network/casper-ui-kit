import React from 'react';
import { render } from '@testing-library/react';

import { Base } from './Loader.stories';

it('Checks if the form is valid', () => {
  const { getByTestId } = render(<Base {...Base.args} />);

  const loaderWrapper = getByTestId('loaderId');
  expect(loaderWrapper).toBeInTheDocument();
});

import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Base } from './Loader.stories';

describe('Loader', () => {
  it('renders base loader', () => {
    render(<Base {...Base.args} />);
  });
});

import React from 'react';
import { render } from '@testing-library/react';
import { ButtonToggle } from 'src/components/Toggles';

const testToggleOptions = ['testOption1', 'testOption2'];

describe('BaseToggle', () => {
  it('should render base toggle', () => {
    const { queryAllByTestId } = render(
      <ButtonToggle toggleOptions={testToggleOptions} />,
    );
    const baseToggle = queryAllByTestId('baseToggle');

    expect(baseToggle).toBeTruthy();
  });
});

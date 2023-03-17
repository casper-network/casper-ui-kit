import React from 'react';
import { render } from '@testing-library/react';
import { Checkbox } from './Checkbox';

// TODO: Set up infra to test checkbox.stories.ts via
// https://github.com/casper-network/casper-ui-kit/issues/60
describe('Checkbox', () => {
  it('should render base checkbox', () => {
    const { getByRole } = render(
      <Checkbox boxColor="blue" checkmarkColor="blue" />,
    );
    const checkboxComponent = getByRole('checkbox');

    expect(checkboxComponent).toBeTruthy;
  });
});

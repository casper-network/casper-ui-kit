import React from 'react';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import * as stories from '../../stories/Checkbox/Checkbox.stories';

describe('Checkbox', () => {
  const { Base } = composeStories(stories);
  it('should render base checkbox', () => {
    render(<Base />);
    const checkboxComponent = screen.getByRole('checkbox');

    expect(checkboxComponent).toBeTruthy;
  });
});

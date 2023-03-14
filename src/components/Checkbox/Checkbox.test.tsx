import React from 'react';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import * as stories from '../../stories/Checkbox/Checkbox.stories'; // import all stories from the stories file

describe('Checkbox', () => {
  const { Base } = composeStories(stories);
  it('should render base checkbox', () => {
    render(<Base />);
    const checkboxComponent = screen.getByRole('checkbox');

    expect(checkboxComponent).not.toBeNull();
    // expect(checkboxComponent).toBeInTheDocument();
    // expect(checkboxComponent).toBeVisible();
    // expect(checkboxComponent).toHaveStyle('backgroundColor: blue');
  });
});

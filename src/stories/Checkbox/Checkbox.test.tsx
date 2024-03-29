import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Base, RequiredCheckbox, DisabledCheckbox } from './Checkbox.stories';

describe('Checkbox.stories', () => {
  it('should render the Base checkbox with specified color', () => {
    render(<Base boxColor="#02c1b0" checkmarkColor="#02c1b0" {...Base.args} />);

    expect(screen.getByRole('checkbox')).toHaveStyle(
      'border: 0.125rem solid #02c1b0',
    );
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  it('should toggle between checked and unchecked upon user click', async () => {
    const user = userEvent.setup();
    render(<Base boxColor="#02c1b0" checkmarkColor="#02c1b0" {...Base.args} />);

    await user.click(screen.getByRole('checkbox'));
    expect(screen.getByRole('checkbox')).toBeChecked();
    await user.click(screen.getByRole('checkbox'));
    expect(screen.getByRole('checkbox')).not.toBeChecked();
  });

  it('should render the Required Checkbox with specified color', async () => {
    render(
      <RequiredCheckbox
        boxColor="#FF0000"
        checkmarkColor="#FF0000"
        {...RequiredCheckbox.args}
      />,
    );

    expect(screen.getByRole('checkbox')).toHaveStyle(
      'border: 0.125rem solid #FF0000',
    );
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  it('should render the Disabled Checkbox with specified color', async () => {
    render(
      <DisabledCheckbox
        boxColor="#F1F1F4"
        checkmarkColor="#F1F1F4"
        {...DisabledCheckbox.args}
      />,
    );

    expect(screen.getByRole('checkbox')).toHaveStyle(
      'border: 0.125rem solid #F1F1F4',
    );
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  it('should render the Disabled Checkbox as disabled', async () => {
    const user = userEvent.setup();
    render(
      <DisabledCheckbox
        boxColor="#F1F1F4"
        checkmarkColor="#F1F1F4"
        {...DisabledCheckbox.args}
      />,
    );

    await user.click(screen.getByRole('checkbox'));
    expect(screen.getByRole('checkbox')).toBeDisabled();
  });
});

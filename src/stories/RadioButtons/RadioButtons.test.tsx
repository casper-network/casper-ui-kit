import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { Base } from './RadioButtons.stories';

const options = [
  {
    label: 'OptionOne',
    name: 'base-button-types',
  },
  {
    label: 'Option2',
    name: 'base-button-types',
  },
];

describe('RadioButton.stories', () => {
  it('should render the Base RadioButtonGroup', () => {
    render(<Base options={options} {...Base.args} />);

    expect(screen.getByTestId('RadioButtonsContainer')).toBeInTheDocument();
  });
});

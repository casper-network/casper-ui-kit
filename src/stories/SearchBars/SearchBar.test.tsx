import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import {
  BaseSearchBar,
  FilteredSearchBar,
  ErrorSearchBar,
} from './SearchBar.stories';

describe('SearchBar.stories', () => {
  it('should render the Base SearchBar', () => {
    render(
      <BaseSearchBar
        onClick={() => {
          // eslint-disable-next-line no-console
          console.log('clicked');
        }}
      />,
    );

    expect(screen.getByTestId('searchBar')).toBeInTheDocument();
  });

  it('should render the Filtered SearchBar', () => {
    render(
      <FilteredSearchBar
        currentFilter={{ value: 'val1', label: 'val1' }}
        defaultValue={{ value: '', label: '' }}
        filters={[
          { value: 'val1', label: 'val1' },
          { value: 'val2', label: 'val2' },
          { value: 'val3', label: 'val3' },
        ]}
        onClick={() => {
          // eslint-disable-next-line no-console
          console.log('clicked');
        }}
      />,
    );

    expect(screen.getByTestId('searchBarFilter')).toBeInTheDocument();
  });

  it('should render the Error Message SearchBar', () => {
    render(
      <ErrorSearchBar
        currentFilter={{ value: 'val1', label: 'val1' }}
        defaultValue={{ value: '', label: '' }}
        filters={[
          { value: 'val1', label: 'val1' },
          { value: 'val2', label: 'val2' },
          { value: 'val3', label: 'val3' },
        ]}
        onClick={() => {
          // eslint-disable-next-line no-console
          console.log('clicked');
        }}
        errorMessage={<span>Test Error</span>}
      />,
    );

    expect(screen.getByTestId('errorMessage')).toBeInTheDocument();
    expect(screen.getByTestId('errorMessage')).toHaveTextContent('Test Error');
  });
});

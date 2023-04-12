import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { SearchBar, SearchBarProps } from '../../components';

export default {
  title: 'Components/SearchBar',
  component: SearchBar,
} as Meta<typeof SearchBar>;

const Template: StoryFn<typeof SearchBar> = (args: SearchBarProps) => (
  <SearchBar {...args} />
);

export const FilteredSearchBar = Template.bind({});

FilteredSearchBar.args = {
  currentFilter: { value: 'val1', label: 'val1' },

  defaultValue: { value: '', label: '' },
  filters: [
    { value: 'val1', label: 'val1' },
    { value: 'val2', label: 'val2' },
    { value: 'val3', label: 'val3' },
  ],
  onClick: () => {
    // eslint-disable-next-line no-console
    console.log('clicked');
  },
};

export const ErrorSearchBar = Template.bind({});

ErrorSearchBar.args = {
  currentFilter: { value: 'val1', label: 'val1' },

  defaultValue: { value: '', label: '' },
  filters: [
    { value: 'val1', label: 'val1' },
    { value: 'val2', label: 'val2' },
    { value: 'val3', label: 'val3' },
  ],
  onClick: () => {
    // eslint-disable-next-line no-console
    console.log('clicked');
  },
  errorMessage: <p>Test Error</p>,
};

export const BaseSearchBar = Template.bind({});

BaseSearchBar.args = {};

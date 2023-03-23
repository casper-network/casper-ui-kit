import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { withTests } from '@storybook/addon-jest';
import results from '../../../.jest-test-results.json';
import { Loader, LoaderProps } from '../../components/Loader';

export default {
  title: 'Components/Loader',
  component: Loader,
  decorators: [withTests({ results })],
} as Meta<typeof Loader>;

// Create a master template for mapping args to render the Loader component
const Template: StoryFn<typeof Loader> = (args: LoaderProps) => (
  <Loader {...args} />
);

export const Base = Template.bind({});

Base.args = {};

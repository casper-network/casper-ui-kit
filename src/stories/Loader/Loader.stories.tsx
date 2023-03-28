import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Loader, LoaderProps } from '../../components/Loader';

export default {
  title: 'Components/Loader',
  component: Loader,
} as Meta<typeof Loader>;

// Create a master template for mapping args to render the Loader component
const Template: StoryFn<typeof Loader> = (args: LoaderProps) => (
  <Loader {...args} />
);

export const Base = Template.bind({});

Base.args = {};

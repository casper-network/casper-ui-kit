import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Loader, LoaderProps } from '../../components/Loader';

export default {
  title: 'Components/Loader',
  component: Loader,
} as ComponentMeta<typeof Loader>;

// Create a master template for mapping args to render the Loader component
const Template: ComponentStory<typeof Loader> = (args: LoaderProps) => (
  <Loader {...args} />
);

export const Base = Template.bind({});

Base.args = {};

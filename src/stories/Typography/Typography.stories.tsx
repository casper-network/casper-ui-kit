import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { TypographyDisplay } from '../../components/Theme/TypographyDisplay';

export default {
  title: 'Components/Typography',
  component: TypographyDisplay,
} as Meta<typeof TypographyDisplay>;

// Create a master template for mapping args to render the Button component
const Template: StoryFn<typeof TypographyDisplay> = () => <TypographyDisplay />;

export const Base = Template.bind({});

Base.args = {};

import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TypographyDisplay } from '../../components/Theme/TypographyDisplay';

export default {
  title: 'Components/Typography',
  component: TypographyDisplay,
} as ComponentMeta<typeof TypographyDisplay>;

// Create a master template for mapping args to render the Button component
const Template: ComponentStory<typeof TypographyDisplay> = () => (
  <TypographyDisplay />
);

export const Base = Template.bind({});

Base.args = {};

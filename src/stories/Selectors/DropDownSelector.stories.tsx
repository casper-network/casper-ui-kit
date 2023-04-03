import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import {
  DropDownSelector,
  DropDownSelectorProps,
} from '../../components/Selectors/DropDownSelector';

export default {
  title: 'Components/Selectors',
  component: DropDownSelector,
} as ComponentMeta<typeof DropDownSelector>;

const Template: ComponentStory<typeof DropDownSelector> = (
  args: DropDownSelectorProps,
) => <DropDownSelector {...args} />;

export const BaseDropDownSelector = Template.bind({});

BaseDropDownSelector.args = {
  currentSelection: { value: 'val1', label: 'val1' },
  name: 'name',
  defaultValue: { value: '', label: '' },
  options: [
    { value: 'val1', label: 'val1' },
    { value: 'val2', label: 'val2' },
    { value: 'val3', label: 'val3' },
  ],
  onChange: () => {
    // eslint-disable-next-line no-console
    console.log('clicked');
  },
};

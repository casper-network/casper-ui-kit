import React from 'react';
import styled from '@emotion/styled';
import { Meta, StoryFn } from '@storybook/react';
import { pxToRem } from '../../utils';
import {
  OptionGroupProps,
  RadioCheckGroup,
} from '../../components/RadioButtons';

export default {
  title: 'Components/RadioCheckboxGroups',
  component: RadioCheckGroup,
} as Meta<typeof RadioCheckGroup>;

// Create a master template for mapping args to render the RadioButtonGroup component
const Template: StoryFn<typeof RadioCheckGroup> = (args: OptionGroupProps) => (
  <StoryContainer>
    <RadioCheckGroup {...args} />
  </StoryContainer>
);

const base = [
  {
    label: 'Option1',
    name: 'base-button-types',
  },
  {
    label: 'Option2',
    name: 'base-button-types',
  },
  {
    label: 'Option3',
    name: 'base-button-types',
  },
  {
    label: 'Option4',
    name: 'base-button-types',
  },
];

export const Base = Template.bind({});

Base.args = {
  options: base,
  orientation: 'column',
};

const row = [
  {
    label: 'Option1',
    name: 'base-button-types',
  },
  {
    label: 'Option2',
    name: 'base-button-types',
  },
  {
    label: 'Option3',
    name: 'base-button-types',
  },
];

export const Row = Template.bind({});

Row.args = {
  options: row,
  width: 275,
  orientation: 'row',
};

const disabledOptions = [
  {
    label: 'Option1',
    name: 'base-button-types',
    disabled: true,
  },
  {
    label: 'Option2',
    name: 'base-button-types',
    disabled: true,
  },
];

export const Disabled = Template.bind({});

Disabled.args = {
  options: disabledOptions,
  orientation: 'column',
};

const requiredOptions = [
  {
    label: 'Option1',
    name: 'base-button-types',
    required: true,
  },
  {
    label: 'Option2',
    name: 'base-button-types',
    required: true,
  },
];

export const Required = Template.bind({});

Required.args = {
  options: requiredOptions,
  orientation: 'column',
};

const options = [
  {
    label: 'Option1',
    name: 'base-button-types',
    borderColor: 'blue',
    centerColor: 'green',
    diameter: 35,
    labelPosition: 'top' as 'top',
    verticalPadding: 5,
  },
  {
    label: 'Option2',
    name: 'base-button-types',
    borderColor: 'purple',
    centerColor: 'red',
    diameter: 25,
    labelPosition: 'right' as 'right',
    verticalPadding: 10,
  },

  {
    label: 'Option3',
    name: 'base-button-types',
    borderColor: 'orange',
    centerColor: 'green',
    diameter: 15,
    labelPosition: 'bottom' as 'bottom',
    verticalPadding: 15,
  },
];

export const StyleOptions = Template.bind({});

StyleOptions.args = {
  options,
  orientation: 'column',
};

const StoryContainer = styled.div`
  width: 100%;
  max-width: ${pxToRem(500)};
  padding: 2rem;
  background: white;
`;

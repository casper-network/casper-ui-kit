import React from 'react';
import styled from '@emotion/styled';
import { Meta, StoryFn } from '@storybook/react';
import { pxToRem } from '../../utils';
import {
  RadioButtonBoxGroup,
  RadioButtonBoxGroupProps,
} from '../../components/RadioButtons';

export default {
  title: 'Components/RadioCheckboxGroups',
  component: RadioButtonBoxGroup,
} as Meta<typeof RadioButtonBoxGroup>;

const Template: StoryFn<typeof RadioButtonBoxGroup> = (
  args: RadioButtonBoxGroupProps,
) => (
  <StoryContainer>
    <RadioButtonBoxGroup {...args} />
  </StoryContainer>
);

const base = [
  {
    value: 'Option1',
    name: 'base-button-types',
  },
  {
    value: 'Option2',
    name: 'base-button-types',
  },
  {
    value: 'Option3',
    name: 'base-button-types',
  },
  {
    value: 'Option4',
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
    value: 'Option1',
    name: 'base-button-types',
  },
  {
    value: 'Option2',
    name: 'base-button-types',
  },
  {
    value: 'Option3',
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
    value: 'Option1',
    name: 'base-button-types',
    disabled: true,
  },
  {
    value: 'Option2',
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
    value: 'Option1',
    name: 'base-button-types',
    required: true,
  },
  {
    value: 'Option2',
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
    value: 'Option1',
    name: 'base-button-types',
    color: 'green',
    diameter: 35,
    labelPosition: 'top' as 'top',
    verticalPadding: 5,
  },
  {
    value: 'Option2',
    name: 'base-button-types',
    color: 'red',
    diameter: 25,
    labelPosition: 'right' as 'right',
    verticalPadding: 10,
  },

  {
    value: 'Option3',
    name: 'base-button-types',
    color: 'orange',
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

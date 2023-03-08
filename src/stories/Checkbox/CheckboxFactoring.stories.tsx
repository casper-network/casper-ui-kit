import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import {
  CheckboxFactoring,
  CheckboxFactoringProps,
} from '../../components/Checkbox/CheckboxFactoring';

export default {
  title: 'Components/CheckboxFactoring',
  component: CheckboxFactoring,
} as ComponentMeta<typeof CheckboxFactoring>;

// Create a master template for mapping args to render the CheckboxFactoring component
const Template: ComponentStory<typeof CheckboxFactoring> = (
  args: CheckboxFactoringProps,
) => <CheckboxFactoring {...args} />;

// const ChildText = <p>Checkbox</p>;

// const clickActionShoutOut = (storyName: string) => {
//   // eslint-disable-next-line no-console
//   console.log(`You've clicked the ${storyName} button`);
// };

export const Base = Template.bind({});

Base.args = {};

// export const RedButton = Template.bind({});

// RedButton.args = {
//   children: ChildText,
//   onClick: () => clickActionShoutOut('RedButton'),
//   color: 'red',
//   type: 'button',
// };

// export const DisabledButton = Template.bind({});

// DisabledButton.args = {
//   children: ChildText,
//   onClick: () => clickActionShoutOut('DisabledButton'),
//   color: 'purple',
//   type: 'button',
//   isDisabled: true,
// };

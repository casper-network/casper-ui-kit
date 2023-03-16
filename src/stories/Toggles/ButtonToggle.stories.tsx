import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import {
  ButtonToggle,
  ButtonToggleProps,
} from '../../components/Toggles/ButtonToggle';

export default {
  title: 'Components/Toggles',
  component: ButtonToggle,
} as ComponentMeta<typeof ButtonToggle>;

const clickActionShoutOut = (storyName: string) => {
  // eslint-disable-next-line no-console
  console.log(`You've clicked the ${storyName} toggle`);
};

const Template: ComponentStory<typeof ButtonToggle> = (
  args: ButtonToggleProps,
) => <ButtonToggle {...args} />;

export const Base = Template.bind({});

Base.args = {
  toggleOptions: ['English', 'Deutsch', 'Spanish'],
  onToggle: () => clickActionShoutOut('Base'),
};

import React from 'react';
import styled from '@emotion/styled';
import { Meta, StoryFn } from '@storybook/react';
import {
  ButtonToggle,
  ButtonToggleProps,
} from '../../components/Toggles/ButtonToggle';
import { pxToRem } from '../../utils';

export default {
  title: 'Components/Toggles',
  component: ButtonToggle,
} as Meta<typeof ButtonToggle>;

const clickActionShoutOut = (storyName: string) => {
  // eslint-disable-next-line no-console
  console.log(`You've clicked the ${storyName} toggle`);
};

const Template: StoryFn<typeof ButtonToggle> = (args: ButtonToggleProps) => (
  <StoryContainer>
    <ButtonToggle {...args} />
  </StoryContainer>
);

export const Base = Template.bind({});

Base.args = {
  toggleOptions: ['English', 'Deutsch', 'Spanish'],
  onToggle: () => clickActionShoutOut('Base'),
};

const StoryContainer = styled.div`
  width: 100%;
  max-width: ${pxToRem(300)};
  padding: 2rem;
  background: white;
`;

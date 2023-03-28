import React from 'react';
import styled from '@emotion/styled';
import { Meta, StoryFn } from '@storybook/react';
import {
  BaseToggle,
  BaseToggleProps,
} from '../../components/Toggles/BaseToggle';
import { pxToRem } from '../../utils';

export default {
  title: 'Components/Toggles',
  component: BaseToggle,
} as Meta<typeof BaseToggle>;

const Template: StoryFn<typeof BaseToggle> = (args: BaseToggleProps) => (
  <StoryContainer>
    <BaseToggle {...args} />
  </StoryContainer>
);

const clickActionShoutOut = (storyName: string) => {
  // eslint-disable-next-line no-console
  console.log(`You've clicked the ${storyName}`);
};

export const Toggle = Template.bind({});

Toggle.args = {
  toggleOptions: {
    left: 'Left Option',
    right: 'Right Option',
  },
  onToggle: () => clickActionShoutOut('Toggle'),
};

const StoryContainer = styled.div`
  width: 100%;
  max-width: ${pxToRem(300)};
  padding: 2rem;
  background: white;
`;

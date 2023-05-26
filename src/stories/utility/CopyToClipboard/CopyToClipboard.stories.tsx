import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import {
  CopyToClipboard,
  CopyToClipboardProps,
} from '../../../components/utility/CopyToClipboard';

export default {
  title: 'Components/CopyToClipboard',
  component: CopyToClipboard,
} as Meta<typeof CopyToClipboard>;

const Template: StoryFn<typeof CopyToClipboard> = (
  args: CopyToClipboardProps,
) => <CopyToClipboard {...args} />;

export const Base = Template.bind({});

Base.args = {
  textToCopy: 'test',
};

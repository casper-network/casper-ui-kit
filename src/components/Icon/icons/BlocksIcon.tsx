import React from 'react';
import { Icon, IconProps } from '../Icon';

type BlocksIconProps = Omit<IconProps, 'icon'>;

export const BlocksIcon: React.FC<BlocksIconProps> = props => {
  return <Icon icon="BlocksIcon" {...props} />;
};

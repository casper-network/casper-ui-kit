import React from 'react';
import { Icon, IconProps } from '../Icon';

type DeployIconProps = Omit<IconProps, 'icon'>;

export const DeployIcon: React.FC<DeployIconProps> = props => {
  return <Icon icon="DeployIcon" {...props} />;
};

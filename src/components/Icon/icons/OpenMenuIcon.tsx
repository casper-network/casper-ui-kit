import React from 'react';
import { Icon, IconProps } from '../Icon';

type OpenMenuIconProps = Omit<IconProps, 'icon'>;

export const OpenMenuIcon: React.FC<OpenMenuIconProps> = ({
  strokeWidth,
  ...props
}) => {
  return <Icon icon="OpenMenuIcon" {...props} strokeWidth={strokeWidth || 2} />;
};

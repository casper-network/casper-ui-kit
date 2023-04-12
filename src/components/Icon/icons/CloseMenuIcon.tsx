import React from 'react';
import { Icon, IconProps } from '../Icon';

type CloseMenuIconProps = Omit<IconProps, 'icon'>;

export const CloseMenuIcon: React.FC<CloseMenuIconProps> = ({
  strokeWidth,
  ...props
}) => {
  return (
    <Icon icon="CloseMenuIcon" {...props} strokeWidth={strokeWidth || 2} />
  );
};

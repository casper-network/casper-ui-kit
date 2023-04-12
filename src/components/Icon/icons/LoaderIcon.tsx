import React from 'react';
import { Icon, IconProps } from '../Icon';

type LoaderIconProps = Omit<IconProps, 'icon'>;

export const LoaderIcon: React.FC<LoaderIconProps> = ({ stroke, ...props }) => {
  return <Icon icon="LoaderIcon" {...props} stroke={stroke || 'transparent'} />;
};

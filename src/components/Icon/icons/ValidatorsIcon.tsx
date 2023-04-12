import React from 'react';
import { Icon, IconProps } from '../Icon';

type ValidatorsIconProps = Omit<IconProps, 'icon'>;

export const ValidatorsIcon: React.FC<ValidatorsIconProps> = props => {
  return <Icon icon="ValidatorsIcon" {...props} />;
};

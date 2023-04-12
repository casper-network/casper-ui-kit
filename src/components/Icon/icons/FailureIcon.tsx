import React from 'react';
import { Icon, IconProps } from '../Icon';
import { defaultTheme } from '../../../theme';

type FailureIconProps = Omit<IconProps, 'icon'>;

export const FailureIcon: React.FC<FailureIconProps> = ({
  color,
  stroke,
  ...props
}) => {
  return (
    <Icon
      icon="FailureIcon"
      {...props}
      color={color || defaultTheme.colors.primary.CasperRed}
      stroke={stroke || 'transparent'}
    />
  );
};

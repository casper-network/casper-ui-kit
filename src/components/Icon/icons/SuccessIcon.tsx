import React from 'react';
import { defaultTheme } from '../../../theme';
import { Icon, IconProps } from '../Icon';

type SuccessIconProps = Omit<IconProps, 'icon'>;

export const SuccessIcon: React.FC<SuccessIconProps> = ({
  color,
  stroke,
  ...props
}) => {
  return (
    <Icon
      icon="SuccessIcon"
      {...props}
      color={color || defaultTheme.colors.secondary.CasperGreen}
      stroke={stroke || 'transparent'}
    />
  );
};

import React from 'react';
import { Icon, IconProps } from '../Icon';
import { defaultTheme } from '../../../theme';

type ErrorIconProps = Omit<IconProps, 'icon'>;

export const ErrorIcon: React.FC<ErrorIconProps> = ({
  color,
  stroke,
  ...props
}) => {
  return (
    <Icon
      icon="ErrorIcon"
      {...props}
      color={color || defaultTheme.colors.primary.CasperRed}
      stroke={stroke || defaultTheme.colors.secondary.White}
    />
  );
};

import React from 'react';
import { defaultTheme } from '../../../theme';
import { Icon, IconProps } from '../Icon';

type OpenMenuIconProps = Omit<IconProps, 'icon'>;

export const OpenMenuIcon: React.FC<OpenMenuIconProps> = ({
  color,
  stroke,
  ...props
}) => {
  return (
    <Icon
      icon="OpenMenuIcon"
      {...props}
      color={color || defaultTheme.colors.secondary.CasperGreen}
      stroke={stroke || 'transparent'}
    />
  );
};

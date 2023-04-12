import React from 'react';
import { Icon, IconProps } from '../Icon';
import { defaultTheme } from '../../../theme';

type SearchIconProps = Omit<IconProps, 'icon'>;

export const SearchIcon: React.FC<SearchIconProps> = ({
  color,
  stroke,
  ...props
}) => {
  return (
    <Icon
      icon="SearchIcon"
      {...props}
      color={color || defaultTheme.colors.primary.Black}
      stroke={stroke || 'transparent'}
    />
  );
};

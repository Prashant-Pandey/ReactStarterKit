import { Badge, BadgeProps } from '@material-ui/core';
import React from 'react';

const PrimaryBadge = ({ children, ...props }: BadgeProps) => {
  return (
    <Badge data-color="px_color_badge_4" max={999999} {...props}>
      {children}
    </Badge>
  );
};
export default PrimaryBadge;

import { IconButton, IconButtonProps } from '@material-ui/core';
import React from 'react';

interface IPrimaryIconButton extends IconButtonProps {
  children?: any;
}

const PrimaryIconButton = ({ children, ...props }: IPrimaryIconButton) => {
  return (
    <IconButton color="primary" disableFocusRipple disableRipple disableTouchRipple {...props}>
      {children}
    </IconButton>
  );
};
export default PrimaryIconButton;

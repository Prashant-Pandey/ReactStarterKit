import { Button, ButtonProps } from '@material-ui/core';
import React from 'react';

interface ITertiaryButton extends ButtonProps {
  component?: any;
  to?: any;
}

function TertiaryButton({ children, ...props }: ITertiaryButton) {
  return (
    <Button variant="text" color="primary" {...props}>
      {children}
    </Button>
  );
}

export default TertiaryButton;

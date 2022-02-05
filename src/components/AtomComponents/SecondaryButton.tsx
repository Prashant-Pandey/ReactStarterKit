import { Button, ButtonProps } from '@material-ui/core'
import React from 'react';
function SecondaryButton({ children, ...props }: ButtonProps) {
    return (
        <Button variant="outlined" color="primary" {...props}>
            {children}
        </Button>
    )
}

export default SecondaryButton

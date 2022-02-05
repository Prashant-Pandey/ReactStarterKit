import React from 'react';
import { TextField as InputField, TextFieldProps } from '@material-ui/core';

function TextField({ children, InputProps, ...props }: TextFieldProps) {
  return (
    <InputField color="primary" variant="outlined" InputProps={InputProps} {...props}>
      {children}
    </InputField>
  );
}

export default TextField;

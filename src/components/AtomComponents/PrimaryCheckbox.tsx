import { Checkbox, CheckboxProps } from '@material-ui/core';
import React from 'react';

const PrimaryCheckbox = (props: CheckboxProps) => {
  return <Checkbox color="primary" {...props} />;
};
export default PrimaryCheckbox;

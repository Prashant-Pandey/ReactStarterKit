import { Fab } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import React from 'react';

const AddFab = (props: any) => {
  return (
    <Fab data-id="add" color="primary" aria-label="add" size="small" {...props}>
      <Add />
    </Fab>
  );
};
export default AddFab;

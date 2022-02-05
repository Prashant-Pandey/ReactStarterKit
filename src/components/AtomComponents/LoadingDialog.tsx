import { CircularProgress, Dialog } from "@material-ui/core";
import React from "react";

interface ILoadingDialog {
  isDialogOpen: boolean;
}

function LoadingDialog({ isDialogOpen }: ILoadingDialog) {
  return (
    <Dialog open={isDialogOpen} onClose={() => {}} disableEscapeKeyDown>
      <CircularProgress />
    </Dialog>
  );
}

export default LoadingDialog;

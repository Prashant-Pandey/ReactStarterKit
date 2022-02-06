import { Alert } from "@material-ui/lab";
import { Snackbar as MuiSnackbar } from "@material-ui/core";
import { connect } from "react-redux";
import { hideMessage } from "../redux/actions/messageActions";
import { IMessagePayload } from "../redux/reducer/messageReducer";
import { useEffect, useState } from "react";

interface ISnackbarProps {
  snackbarState: IMessagePayload;
  dispatch: any;
}

const Snackbar = ({ snackbarState, dispatch }: ISnackbarProps) => {
  const [snackbar, setSnackbar] = useState<IMessagePayload>();
  useEffect(() => {
    if (snackbar?.show !== snackbarState.show) setSnackbar(snackbarState);
  }, [snackbar, snackbarState]);
  const handleClose = () => dispatch(hideMessage());
  return (
    <MuiSnackbar
      open={!!snackbar?.show}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      autoHideDuration={6000}
      onClose={handleClose}
    >
      <Alert
        onClose={handleClose}
        variant="filled"
        severity={snackbar?.type || "error"}
      >
        {snackbar?.message || ""}
      </Alert>
    </MuiSnackbar>
  );
};

const mapStateToProps = (state: any) => {
  return {
    snackbarState: state.messageState,
  };
};
export default connect(mapStateToProps)(Snackbar);

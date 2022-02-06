import { Alert } from "@material-ui/lab";
import { Snackbar as MuiSnackbar } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { hideMessage } from "../redux/actions/messageActions";
import { IMessagePayload } from "../redux/reducer/messageReducer";

const Snackbar = () => {
  const snackbarState: IMessagePayload = useSelector(
    (state: any) => state.messageState
  );
  console.log("snackbar rendered", snackbarState);
  const dispatch = useDispatch();
  const handleClose = () => dispatch(hideMessage());
  return (
    <MuiSnackbar
      open={snackbarState.show}
      anchorOrigin={{vertical: 'top', horizontal: 'center'}}
      autoHideDuration={6000}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} variant="filled" severity={snackbarState.type}>
          {snackbarState.message}
      </Alert>
    </MuiSnackbar>
  );
};
export default Snackbar;

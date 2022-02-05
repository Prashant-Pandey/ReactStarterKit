import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps, Color } from '@material-ui/lab/Alert';

export type IMessageType = 'error' | 'success' | 'warning' | 'info';

export enum eMessageType {
  error = 'error',
  success = 'success',
  warning = 'warning',
  info = 'info',
}

const Alert = (props: AlertProps) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

const ErrorHandlerContext = React.createContext<any>(null);

export const ErrorHandler = ({ children }: { children: any }) => {
  const [isSnackBarOpen, setIsSnackBarOpen] = React.useState<boolean>(false);

  // useEffect(() => {
  //   console.log(isSnackBarOpen, 'isSnackBarOpen')
  // }, [isSnackBarOpen])

  const [message, setMessage] = React.useState<string | null>();

  const [type, setType] = React.useState<IMessageType>();

  const openSnackBar = (msg: any, t: IMessageType) => {
    setIsSnackBarOpen(true);
    setMessage(msg);
    setType(t);
  };

  const onClose = () => setIsSnackBarOpen(false);

  const renderContent = () => {
    return (
      <>
        {children}
        <Snackbar
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          open={isSnackBarOpen}
          autoHideDuration={30000}
          onClose={onClose}>
          <Alert severity={type as Color} onClose={onClose}>
            {message}
          </Alert>
        </Snackbar>
      </>
    );
  };

  const contextPayload = React.useMemo(() => ({ openSnackBar }), []);

  // We expose the context's value down to our components
  return (
    <ErrorHandlerContext.Provider value={contextPayload}>
      {renderContent()}
    </ErrorHandlerContext.Provider>
  );
};

export const useShowMessage = () => React.useContext(ErrorHandlerContext);

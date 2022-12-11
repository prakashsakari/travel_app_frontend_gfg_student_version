import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useAlert } from '../../context';


export const Alert = ()  => {
  const {alert, setAlert} = useAlert()

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setAlert({open: false});
  };

  return (
      <Snackbar open={alert.open} autoHideDuration={2500} onClose={handleClose}>
        <MuiAlert onClose={handleClose} severity={alert.type} elevation={10} variant="filled">
          {alert.message}
        </MuiAlert>
      </Snackbar>
  );
}

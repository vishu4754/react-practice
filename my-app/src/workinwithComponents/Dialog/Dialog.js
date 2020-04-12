import React from 'react';
import Button from '@material-ui/core/Button';
import SignUp from './signUp';
import SignIn from '../LogIn/LogIn';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function FormDialog() {
    const [open, setOpen] = React.useState(false);
    const [values, setValues] = React.useState({});
    const [loginOpen, setLoginOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setLoginOpen(false);
    };
    const handleSubmit = () => {
        console.log('-----------values-----------', values);
        setLoginOpen(true);
    }
    const data = (state) => {
        console.log('-----------state------------', state);
        setValues(Object.assign(values, state));

    }

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Open form dialog
      </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">SignUp</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Creates Your Account
          </DialogContentText>
                    <SignUp information={data} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
          </Button>
                    <Button onClick={handleSubmit} color="primary">
                        Submit
          </Button>
                </DialogActions>
            </Dialog>
            <Dialog open={loginOpen} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">SignUp</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Creates Your Account
          </DialogContentText>
                    <SignIn />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
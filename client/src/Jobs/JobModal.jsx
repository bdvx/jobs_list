import React from 'react';
import ReactDOM from 'react-dom'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

export default function JobModal({job, isOpen, handleClose}) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const modalRoot = document.getElementById('modal-root') || document.createElement('div');
  console.log(modalRoot, document);

  const modalComponent = (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Let Google help apps determine location. This means sending anonymous location data to
            Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Close
          </Button>
          <a href={job.url} target="_blank" rel="noopener noreferrer">
            <Button onClick={handleClose} color="primary" autoFocus>
                Apply
            </Button>
          </a>
        </DialogActions>
      </Dialog>
    </div>
  );

  return ReactDOM.createPortal(modalComponent, modalRoot);
}
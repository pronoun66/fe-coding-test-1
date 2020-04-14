import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import style from './style.css';

const styles = (theme: any) => ({
  root: {
    padding: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center',
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  tryAgainButton: {
    background: '#2CB624',
    color: '#FFFFFF',
  },
});

const DialogTitle = withStyles(styles as any)((props: any) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="body2">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 'auto',
    padding: theme.spacing(1),
  },
  button: {
    color: '#FFFFFF',
    backgroundColor: '#680CEA',
  },
}))((props: any) => {
  const { children, classes, onClick } = props;

  return (
    <MuiDialogActions className={classes.root}>
      <Button
        className={classes.button}
        onClick={onClick}
      >
        {children}
      </Button>
    </MuiDialogActions>
  )
})

export default () => {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  const handleRefresh = () => {
    window.location.reload();
  }

  return (
    <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} maxWidth="xs">
      <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        ERROR
      </DialogTitle>
      <DialogContent>
        <Typography gutterBottom variant="h6">
          UNABLE TO LOAD CONTROLS
        </Typography>
      </DialogContent>
      <DialogActions onClick={handleRefresh}>
        TRY AGAIN
      </DialogActions>
    </Dialog>
  );
};

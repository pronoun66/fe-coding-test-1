import React, {useEffect} from 'react';
import style from './style.css';
import { useDispatch, useSelector } from 'react-redux';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Paper, Container, CircularProgress, IconButton, Button
} from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { makeStyles } from '@material-ui/core/styles';
import { useControlActions } from 'app/actions';
import { RootState } from 'app/reducers';
import Dialogue from '../../components/Dialogue';

const useStyles = makeStyles((theme) => ({
  button: {
    background: '#2CB624',
    border: 0,
    color: '#FFFFFF',
    height: 20,
    fontSize: 12,
    padding: '0 10px 10px',
  },
}));

export default () => {
  const classes = useStyles()
  const dispatch = useDispatch();
  const controlActions = useControlActions(dispatch);

  useEffect(() => {
    controlActions.loadControls();
  }, [])

  const { controls, error } = useSelector((state: RootState) => state.controls);

  if (controls.length === 0) {
    return (
      <div>
        <CircularProgress className={style.circular_progress} />
        { error && <Dialogue /> }
      </div>
    )
  }

  return (
    <div className={style.control_table}>
      <div className={style.add_button_section}>
        <p className={style.add_button_text}> Controls </p>
        <AddCircleIcon className={style.add_button_icon} />
      </div>

      <TableContainer component={Paper}>
        <Table className={style.container} aria-label="simple table">
          <TableHead className={style.table_head}>
            <TableRow>
              <TableCell>TITLE</TableCell>
              <TableCell>TYPE</TableCell>
              <TableCell>POLAR ANGLE</TableCell>
              <TableCell>MAX RABI RATE</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {controls.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.attributes.name}
                </TableCell>
                <TableCell>
                  <Button
                    className={classes.button}
                  >
                    {row.attributes.type}
                  </Button>
                </TableCell>
                <TableCell>{row.attributes.polar_angle}</TableCell>
                <TableCell>{row.attributes.maximum_rabi_rate}</TableCell>
                <TableCell>
                  <IconButton>
                    <ArrowForwardIosIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );

};

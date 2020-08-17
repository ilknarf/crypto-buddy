import React from 'react';
import { makeStyles, Paper } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  card: {
    padding: theme.spacing(1),
    margin: theme.spacing(1),
  },
}));

function Card(props) {
  const classes = useStyles();
  return (
    <Paper className={classes.card}>
      {props.children}
    </Paper>
  )
}

export default Card;
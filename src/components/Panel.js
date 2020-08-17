import React from 'react';
import { makeStyles, Box } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'inline-block',
    padding: theme.spacing(1),
    margin: theme.spacing(2),
  },
}));

function Panel(props) {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      {props.children}
    </Box>
  )
}

export default Panel;
import React from 'react';
import { AppBar, Box, Button, Toolbar, Typography, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  buttonBox: {
    margin: theme.spacing(1),
  },
}));

function NavBar(props) {
  const { paths } = props;
  const { buttonBox } = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h5" color="inherit" style={{ textTransform: 'none', flex: 1, textDecoration: 'none' }} component={Link} to={"/"}>
          Crypto Buddy
        </Typography>
        {paths.map(v => (
          <Box>
            <Button className={buttonBox} component={Link} to={v.path} disableElevation variant="contained">
              {v.name}
            </Button>
          </Box>
        ))}
      </Toolbar>
    </AppBar>
  )
}

export default NavBar;
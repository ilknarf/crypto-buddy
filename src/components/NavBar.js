import React from 'react';
import { AppBar, Box, Button, Toolbar, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

function NavBar(props) {
  const { paths } = props;
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h5" color="inherit" style={{ textTransform: 'none', flex: 1, textDecoration: 'none' }} component={Link} to={"/"}>
          Crypto Buddy
        </Typography>
        {paths.map(v => (
          <Button component={Link} to={v.path} color="inherit" variant="outlined">
            {v.name}
          </Button>
        ))}
      </Toolbar>
    </AppBar>
  )
}

export default NavBar;
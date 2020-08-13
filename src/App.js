import React from 'react';
import { CssBaseline, Container, Box, AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { Switch, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import Rsa from './pages/Rsa';

function App() {
  const algos = [
    {
      path: '/rsa',
      name: 'RSA',
      component: <Rsa />,
    },
    {
      path: '/rsa',
      name: 'RSA',
      component: <Rsa />,
    },{
      path: '/rsa',
      name: 'RSA',
      component: <Rsa />,
    },{
      path: '/rsa',
      name: 'RSA',
      component: <Rsa />,
    },
  ]

  return (
    <React.Fragment>
      <CssBaseline />
      <Box>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h5" color="inherit" style={{ textTransform: 'none', flex: 1, textDecoration: 'none' }} component={Link} to={"/"}>
              Crypto Buddy
            </Typography>
            {algos.map(v => (
              <Button component={Link} to={v.path} variant="contained">
                {v.name}
              </Button>
            ))}
          </Toolbar>
        </AppBar>
        <Switch>
          {algos.map(v => <Route path={v.path} children={v.component} />)}
          <Route path="" children={<Home algos={algos} />} />
        </Switch>
      </Box>
    </React.Fragment>
  );
}

export default App;

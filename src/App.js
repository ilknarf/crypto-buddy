import React from 'react';
import { CssBaseline, Container, Box, AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { Switch, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import Rsa from './pages/Rsa';
import Cipher from './pages/Cipher';
import NavBar from './components/NavBar';

const algos = [
  {
    path: '/rsa',
    name: 'RSA',
    component: <Rsa />,
  },
  {
    path: '/cipher',
    name: 'Cipher',
    component: <Cipher />,
  },
]

function App() {

  return (
    <React.Fragment>
      <CssBaseline />
      <Box>
        <NavBar paths={algos} />
        <Switch>
          {algos.map(v => <Route path={v.path} children={v.component} />)}
          <Route path="" children={<Home algos={algos} />} />
        </Switch>
      </Box>
    </React.Fragment>
  );
}

export default App;

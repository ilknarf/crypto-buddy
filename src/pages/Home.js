import React from 'react';
import { Container, Box, Button, List, ListItem, ListItemText, ListItemAvatar, Typography } from '@material-ui/core';
import LockIcon from '@material-ui/icons/Lock';
import { Link } from 'react-router-dom';

function Home(props) {
  return(
    <Container>
      <Typography>
        Welcome to Crypto Buddy! Here I will put some implementations of cryptography as educative examples. <br />
        Current Algorithms: <br />
      </Typography>
      <Box style={{ flexGrow: 1 }} spacing={1}>
        <List container>
          {props.algos.map(v => (
            <ListItem item component={Link} to={v.path} style={{ padding: '10px' }} divider>
              <ListItemAvatar>
                <LockIcon />
              </ListItemAvatar>
              <ListItemText primary={v.name} />
            </ListItem>
              ))}
        </List>
      </Box>
    </Container>
  )
}

export default Home;
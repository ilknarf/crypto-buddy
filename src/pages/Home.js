import React from 'react';
import { Container, Box, Button, Grid, Paper, ListItemText } from '@material-ui/core';
import { Link } from 'react-router-dom';

function Home(props) {
  return(
    <Container>
      <p>
        Welcome to Crypto Buddy! Here I will put some implementations of cryptography as educative examples. <br />
        Current Algorithms: <br />
      </p>
      <Box style={{ flexGrow: 1 }} spacing={1}>
        <Grid container>
          {props.algos.map(v => (
            <Grid item component={Link} to={v.path} style={{ padding: '10px' }}>
              <Button variant="contained" disableElevation>
                <ListItemText primary={v.name} />
              </Button>
            </Grid>
              ))}
        </Grid>
      </Box>
    </Container>
  )
}

export default Home;
import React, {useState} from 'react';

import {FormControl, TextField, Container, Button, Typography, makeStyles, TextareaAutosize } from '@material-ui/core';

import Panel from '../components/Panel';
import Card from '../components/Card';

import cipher from '../utils/cipher';

function setState(setter) {
  return function(e) {
    setter(e.target.value);
  }
}

const useStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'center',
  }
});

function Cipher(props) {
  const classes = useStyles();

  const [message, setMessage] = useState('');
  const [key, setKey] = useState(0);

  return (
    <Container className={classes.container}>
      <Panel>
        <Card>
          <FormControl>
            <Typography>
              1. Enter an integer key to act <br />
              as a cipher
            </Typography>
            <TextField label="Key" value={key} onChange={setState(setKey)} type="number" />
            <Typography>
              2. Enter a message to <br />
              encrypt
            </Typography>
            <TextareaAutosize placeholder="Message" value={message} onChange={setState(setMessage)} />
            <Button>
              Encrypt
            </Button>
          </FormControl>
        </Card>
      </Panel>
      <Panel>
        <Card>
          <FormControl>
            <TextField label="Key" value={key} contentEditable="false" />
            <TextareaAutosize placeholder="Encrypted Message" contentEditable="false" />
          </FormControl>
        </Card>
      </Panel>
    </Container>
  )
}

export default Cipher;
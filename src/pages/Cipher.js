import React, {useState} from 'react';

import {FormControl, TextField, Container, Button, Typography, makeStyles, Box, TextareaAutosize } from '@material-ui/core';

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
  },
});

function Cipher(props) {
  const classes = useStyles();

  let [message, setMessage] = useState('');
  let [key, setKey] = useState('0');
  let [currKey, setCurrKey] = useState('');
  let [encrypted, setEncrypted] = useState('');
  let [decrypted, setDecrypted] = useState('');

  function encryptMessage() {
    setEncrypted(cipher.encrypt(message, key));
    setCurrKey(key);
  }

  function decryptMessage() {
    setDecrypted(cipher.decrypt(encrypted, currKey));
  }

  function CipherInfo() {
    return (
      <Panel>
        <Card>
          <Typography>
            In order to use this module:
            <ol>
              <li> Enter an integer key to act as a cipher and a message and press <strong>Encrypt Message</strong></li>
              <li> Press <strong>Decrypt Message</strong></li>
            </ol>
          </Typography>
        </Card>
      </Panel>
    )
  }

  return (
    <Box>
      <Container className={classes.container}>
        <CipherInfo />
      </Container>
      <Container className={classes.container}>
        <Panel>
          <Card>
            <FormControl>
              <TextField label="Key" value={key} onChange={setState(setKey)} type="number" />
              <TextareaAutosize placeholder="Message" value={message} onChange={setState(setMessage)} rowsMin={3} />
              <Button onClick={encryptMessage}>
                Encrypt Message
              </Button>
            </FormControl>
          </Card>
        </Panel>
        <Panel>
          <Card>
            <FormControl>
              <TextField label="Key" value={currKey} contentEditable="false" />
              <TextareaAutosize placeholder="Encrypted Message" contentEditable="false" value={encrypted} rowsMin={3} />
              <Button onClick={decryptMessage}>
                Decrypt Message
              </Button>
              <TextareaAutosize placeholder="Decrypted Message" contentEditable="false" value={decrypted} rowsMin={3} />
            </FormControl>
          </Card>
        </Panel>
      </Container>
    </Box>
  )
}

export default Cipher;
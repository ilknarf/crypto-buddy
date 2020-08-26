/* global BigInt:false */
import React, { useState } from 'react';
import { Container, FormControl, TextField, Button, Box, Typography, TextareaAutosize, makeStyles } from '@material-ui/core';

import Panel from '../components/Panel';
import Card from '../components/Card';

import RSA from '../utils/rsaAlgorithm';

import ErrorAlert from '../components/ErrorAlert';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'center',
  },
});


function setState(setter) {
  return function(e) {
    setter(e.target.value);
  }
}

function RsaGeneratePrivateKey(props) {
  const {
    p1,
    error,
    p2,
    pub,
    generatePrivateKey,
    privateKey,
    setP1,
    setP2,
    setPub,
  } = props;

  return (
    <Panel>
      <Card>
        <FormControl>
          <TextField value={p1} error={error} type="number" onChange={setState(setP1)} label="Prime 1" />
          <TextField value={p2} error={error} type="number" onChange={setState(setP2)} label="Prime 2" />
          <TextField value={pub} error={error} type="number" onChange={setState(setPub)} label="Public Key" />
          <Button onClick={generatePrivateKey}>
            Generate Private Key
          </Button>
        </FormControl>
      </Card>
      <Card>
        <TextField placeholder="Private Key" contentEditable="false" value={privateKey}/>
      </Card>
    </Panel>
  );
}

function RsaEncryptMessage(props) {
  const {
    currentPub,
    semiprime,
    message,
    encryptedMessage,
    setMessage,
    encryptMessage,
  } = props;

  return (
    <Panel>
      <Card>
        <FormControl>
          <TextField value={currentPub} contentEditable="false" label="Public Key" />
          <TextField value={semiprime} contentEditable="false" label="Semiprime" />
          <TextareaAutosize
            rowsMin={3}
            placeholder="Message to encrypt"
            value={message}
            onChange={setState(setMessage)}
          />
          <Button onClick={encryptMessage}>
            Encrypt Message
          </Button>
          <TextareaAutosize
            rowsMin={3}
            placeholder="Encrypted message"
            value={encryptedMessage}
            contentEditable="false"
          />
        </FormControl>
      </Card>
    </Panel>
  );
}

function RsaDecryptMessage(props) {
  const {
    privateKey,
    semiprime,
    encryptedMessage,
    decryptMessage,
    decryptedMessage
  } = props;

  return (
    <Panel>
      <Card>
        <FormControl>
          <TextField value={privateKey} contentEditable="false" label="Private Key" />
          <TextField value={semiprime} contentEditable="false" label="Semiprime" />
          <TextareaAutosize
            rowsMin={3}
            placeholder="Encrypted message"
            value={encryptedMessage}
            contentEditable="false"
          />
          <Button onClick={decryptMessage}>
            Decrypt Message
          </Button>
          <TextareaAutosize
            rowsMin={3}
            placeholder="Decrypted message"
            value={decryptedMessage}
            contentEditable="false"
          />
        </FormControl>
      </Card>
    </Panel>
  )
}

function RsaInfo() {
  return (
    <Panel>
      <Card>
        <Typography>
          In order to use this module:

          <ol>
            <li>Enter two distinct primes and a desired public key, and press <strong>Generate Private Key</strong></li>
            <li>Enter a message that you'd like to encrypt, then press <strong>Encrypt Message</strong></li>
            <li>Decrypt the message by pressing the <strong>Decrypt Message</strong> button</li>
          </ol>
        </Typography>
      </Card>
    </Panel>
  )
}

function Rsa() {
  const classes = useStyles();

  let [currentPub, setCurrentPub] = useState('');
  let [privateKey, setPrivateKey] = useState('');

  let [p1, setP1] = useState('263');
  let [p2, setP2] = useState('271');
  let [pub, setPub] = useState('577');

  let [semiprime, setSemiprime] = useState('');

  let [error, setError] = useState(false);
  let [hidden, setHidden] = useState(true);
  let [helperText, setHelperText] = useState('');

  let [message, setMessage] = useState('');
  let [encryptedMessage, setEncryptedMessage] = useState('');

  let [decryptedMessage, setDecryptedMessage] = useState('');


  function generatePrivateKey() {
    try {
      for (let l of [p1, p2, pub]) {
        if (l.includes('e')) {
          setHidden(false);
          setError(true);
          setHelperText('Error contains "e"');
          return;
        }
      }

      let prime1 = BigInt(p1);
      let prime2 = BigInt(p2);
      let publicKey = BigInt(pub);

      setSemiprime((prime1 * prime2).toString());

      const priv = RSA.computePrivateKey(prime1, prime2, publicKey);

      setPrivateKey(priv.toString());
      setCurrentPub(publicKey.toString());
      setEncryptedMessage('');

      setError(false);
    } catch (e) {
      setHidden(false);
      setError(true);
      setHelperText('Public key not coprime to totient')
    }
  }

  function encryptMessage() {
    const encrypted = RSA.encryptMessage(message, BigInt(currentPub), BigInt(semiprime));

    setEncryptedMessage(encrypted);
  }

  function decryptMessage() {
    const decrypted = RSA.decryptMessage(encryptedMessage, BigInt(privateKey), BigInt(semiprime));

    setDecryptedMessage(decrypted);
  }

  return (
    <Box>
      <ErrorAlert hidden={hidden} close={() => setHidden(true)}>
        {helperText}
      </ErrorAlert>
      <Container className={classes.container}>
        <RsaInfo />
      </Container>
      <Container className={classes.container}>
        <RsaGeneratePrivateKey
          p1={p1}
          error={error}
          p2={p2}
          pub={pub}
          generatePrivateKey={generatePrivateKey}
          privateKey={privateKey}
          setP1={setP1}
          setP2={setP2}
          setPub={setPub}
        />
        <RsaEncryptMessage
          currentPub={currentPub}
          semiprime={semiprime}
          message={message}
          encryptedMessage={encryptedMessage}
          setMessage={setMessage}
          encryptMessage={encryptMessage}
        />
        <RsaDecryptMessage
          privateKey={privateKey}
          semiprime={semiprime}
          encryptedMessage={encryptedMessage}
          decryptMessage={decryptMessage}
          decryptedMessage={decryptedMessage}
        />
      </Container>
    </Box>
  )
}

export default Rsa;
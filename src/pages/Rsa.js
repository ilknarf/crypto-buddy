/*global BigInt:false*/


import React, { useState } from 'react';
import { Container, FormControl, TextField, Button, Divider, TextareaAutosize } from '@material-ui/core';

import Panel from '../components/Panel';
import Card from '../components/Card';

import RSA from '../utils/rsaAlgorithm';

import ErrorAlert from '../components/ErrorAlert';


function setState(setter) {
  return function(e) {
    setter(e.target.value);
  }
}

function Rsa() {
  let [privateKey, setPrivateKey] = useState(null);

  let [p1, setP1] = useState(263);
  let [p2, setP2] = useState(271);
  let [pub, setPub] = useState(577);

  let [error, setError] = useState(false);
  let [hidden, setHidden] = useState(true);
  let [helperText, setHelperText] = useState('');

  let [message, setMessage] = useState(null);

  function generatePrivateKey() {
    try {
      const priv = RSA.computePrivateKey(BigInt(p1), BigInt(p2), BigInt(pub));
      setPrivateKey(priv.toString());
      setError(false);
    } catch (e) {
      setHidden(false);
      setError(true);
      setHelperText('Public key not coprime to totient')
    }
  }

  return (
    <React.Fragment>
      <ErrorAlert hidden={hidden} close={() => setHidden(true)}>
        {helperText}
      </ErrorAlert>
      <Container>
        <Panel>
          <Card>
            <FormControl>
              <TextField value={p1} error={error} onChange={setState(setP1)} label="Prime 1" />
              <TextField value={p2} error={error} onChange={setState(setP2)} label="Prime 2" />
              <TextField value={pub} error={error} onChange={setState(setPub)} label="Public Key" />
              <Button onClick={generatePrivateKey}>
                Generate Private Key
              </Button>
            </FormControl>
          </Card>
          <Card>
            <TextField placeholder="Private Key" contentEditable="false" value={privateKey}/>
          </Card>
        </Panel>
        <Panel>
          <Card>
            <FormControl>
              <TextField value={pub} label="Public Key" />
              <TextField value={privateKey} placeholder={"Private Key"} />
              <TextareaAutosize
                rowsMin={3}
                placeholder="Message to encrypt"
                value={message}
                onChange={setState(setMessage)}
              />
              <Button>
                Generate Encrypted Message
              </Button>
            </FormControl>
          </Card>
        </Panel>
      </Container>
    </React.Fragment>
  )
}

export default Rsa;
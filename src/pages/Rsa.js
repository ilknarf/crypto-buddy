import React, { useState } from 'react';
import { Container, FormControl, TextField, Button, Paper, Typography } from '@material-ui/core';

import Panel from '../components/Panel';
import Card from '../components/Card';

import RSA from '../utils/rsaAlgorithm';


function Rsa() {
  let [privateKey, setPrivateKey] = useState(null);
  return (
    <Container>
      <Panel>
        <Card>
          <FormControl>
            <TextField label="Prime 1" />
            <TextField label="Prime 2" />
            <TextField label="Public Key" />
            <Button>
              Generate Private Key
            </Button>
          </FormControl>
        </Card>
        <Card>
          <TextField label="Private Key" contentEditable="false" value={privateKey}/>
        </Card>
      </Panel>
    </Container>
  )
}

export default Rsa;
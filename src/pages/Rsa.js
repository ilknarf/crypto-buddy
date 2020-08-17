import React from 'react';
import { Container, FormControl, TextField, Button, Paper, Typography } from '@material-ui/core';

import Panel from '../components/Panel';
import Card from '../components/Card';


function Rsa() {
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
          <TextField label="Private Key" contentEditable="false" />
        </Card>
      </Panel>
    </Container>
  )
}

export default Rsa;
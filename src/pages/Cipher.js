import React, {useState} from 'react';

import { FormControl, TextField, Typography } from '@material-ui/core';

import Panel from '../components/Panel';
import Card from '../components/Card';

import cipher from '../utils/cipher';

function Cipher(props) {
  return (
    <Panel>
      <Card>
        <FormControl>
          <TextField label="key" type="number" />
        </FormControl>
      </Card>
    </Panel>
  )
}

export default Cipher;
import React from 'react';
import Alert from '@material-ui/lab/Alert';
import { Typography } from '@material-ui/core';

function ErrorAlert(props) {

  const { hidden, children, close } = props;

  return (
    <React.Fragment>
      {hidden? null: (
      <Alert
        severity="error"
        onClose={close}
      >
        <Typography>
          {children}
        </Typography>
      </Alert>
      )}
    </React.Fragment>
  )
}

export default ErrorAlert;
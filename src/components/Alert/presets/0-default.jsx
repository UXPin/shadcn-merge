import * as React from 'react';
import Alert from '../Alert';
import AlertTitle from '../../AlertTitle/AlertTitle';
import AlertDescription from '../../AlertDescription/AlertDescription';

export default (
  <Alert uxpId='alert-1' variant='default'>
    <AlertTitle uxpId='alert-title-1'>Heads up!</AlertTitle>
    <AlertDescription uxpId='alert-description-1'>
      You can add components and dependencies to your project using the CLI.
    </AlertDescription>
  </Alert>
);

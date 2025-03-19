import * as React from 'react';
import AlertDialogFooter from '../AlertDialogFooter';
import AlertDialogCancel from '../../AlertDialogCancel/AlertDialogCancel';
import AlertDialogAction from '../../AlertDialogAction/AlertDialogAction';

export default (
  <AlertDialogFooter uxpId='alert-dialog-footer-1'>
    <AlertDialogCancel uxpId='alert-dialog-cancel-1'>Cancel</AlertDialogCancel>
    <AlertDialogAction uxpId='alert-dialog-action-1'>Confirm</AlertDialogAction>
  </AlertDialogFooter>
);

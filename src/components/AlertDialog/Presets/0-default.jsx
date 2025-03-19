import * as React from 'react';
import AlertDialog from '../AlertDialog';
import AlertDialogTrigger from '../../AlertDialogTrigger/AlertDialogTrigger';
import AlertDialogContent from '../../AlertDialogContent/AlertDialogContent';
import AlertDialogHeader from '../../AlertDialogHeader/AlertDialogHeader';
import AlertDialogFooter from '../../AlertDialogFooter/AlertDialogFooter';
import AlertDialogTitle from '../../AlertDialogTitle/AlertDialogTitle';
import AlertDialogDescription from '../../AlertDialogDescription/AlertDialogDescription';
import AlertDialogCancel from '../../AlertDialogCancel/AlertDialogCancel';
import AlertDialogAction from '../../AlertDialogAction/AlertDialogAction';
import Button from '../../Button/Button';

export default (
  <AlertDialog uxpId='alert-dialog-1'>
    <AlertDialogTrigger uxpId='alert-dialog-trigger-1'>
      <Button variant='outline' uxpId='alert-dialog-trigger-button-1'>
        Open Dialog
      </Button>
    </AlertDialogTrigger>
    <AlertDialogContent uxpId='alert-dialog-content-1'>
      <AlertDialogHeader uxpId='alert-dialog-header-1'>
        <AlertDialogTitle uxpId='alert-dialog-title-1'>
          Are you sure?
        </AlertDialogTitle>
        <AlertDialogDescription uxpId='alert-dialog-description-1'>
          This action cannot be undone. This will permanently delete your data.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter uxpId='alert-dialog-footer-1'>
        <AlertDialogCancel uxpId='alert-dialog-cancel-1'>
          Cancel
        </AlertDialogCancel>
        <AlertDialogAction uxpId='alert-dialog-action-1'>
          Continue
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);

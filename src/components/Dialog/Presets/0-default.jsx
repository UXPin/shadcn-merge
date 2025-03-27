import * as React from 'react';
import Dialog from '../Dialog';
import DialogTrigger from '../../DialogTrigger/DialogTrigger';
import DialogClose from '../../DialogClose/DialogClose';
import DialogContent from '../../DialogContent/DialogContent';
import DialogHeader from '../../DialogHeader/DialogHeader';
import DialogTitle from '../../DialogTitle/DialogTitle';
import DialogDescription from '../../DialogDescription/DialogDescription';
import DialogFooter from '../../DialogFooter/DialogFooter';
import Button from '../../Button/Button';

export default (
  <Dialog uxpId='dialog-1'>
    <DialogTrigger uxpId='dialog-trigger'>
      <Button variant='outline' uxpId='share-button'>
        Open Dialog
      </Button>
    </DialogTrigger>
    <DialogContent uxpId='dialog-content'>
      <DialogHeader uxpId='dialog-header'>
        <DialogTitle uxpId='dialog-title'>Share link</DialogTitle>
        <DialogDescription uxpId='dialog-description'>
          Anyone who has this link will be able to view this.
        </DialogDescription>
      </DialogHeader>

      <DialogFooter uxpId='dialog-footer'>
        <DialogClose uxpId='dialog-close'>
          <Button type='button' variant='secondary' uxpId='close-button'>
            Close
          </Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);

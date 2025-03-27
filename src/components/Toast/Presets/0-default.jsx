import * as React from 'react';
import Toast from '../Toast';
import ToastProvider from '../../ToastProvider/ToastProvider';
import ToastAction from '../../ToastAction/ToastAction';
import ToastClose from '../../ToastClose/ToastClose';
import ToastDescription from '../../ToastDescription/ToastDescription';
import ToastTitle from '../../ToastTitle/ToastTitle';
import Button from '../../Button/Button';
import ToastViewport from '../../ToastViewport/ToastViewport';

export default (
  <Toast uxpId='toast' open={true}>
    <ToastTitle uxpId='toast-title'>Title</ToastTitle>
    <ToastDescription uxpId='toast-description'>Description</ToastDescription>
    <ToastClose aria-label='Close' uxpId='toast-close'>
      X
    </ToastClose>
    <ToastAction altText='Goto schedule to undo' uxpId='toast-action'>
      <Button uxpId='toast-action-button' variant='link'>
        Undo
      </Button>
    </ToastAction>
  </Toast>
);

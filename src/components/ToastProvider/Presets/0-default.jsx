import * as React from 'react';
import ToastProvider from '../ToastProvider';
import Toast from '../../Toast/Toast';
import ToastAction from '../../ToastAction/ToastAction';
import ToastClose from '../../ToastClose/ToastClose';
import ToastDescription from '../../ToastDescription/ToastDescription';
import ToastTitle from '../../ToastTitle/ToastTitle';
import Button from '../../Button/Button';
import ToastViewport from '../../ToastViewport/ToastViewport';

export default (
  <ToastProvider uxpId='toast-provider'>
    <Toast uxpId='toast'>
      <ToastTitle uxpId='toast-title'>Scheduled: Catch up</ToastTitle>
      <ToastDescription uxpId='toast-description'>
        toast description
      </ToastDescription>
      <ToastAction altText='Goto schedule to undo' uxpId='toast-action'>
        <Button uxpId='toast-action-button'>Undo</Button>
      </ToastAction>
    </Toast>
    <ToastViewport uxpId='toast-viewport' />
  </ToastProvider>
);

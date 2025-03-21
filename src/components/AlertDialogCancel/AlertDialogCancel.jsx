import React from 'react';
import PropTypes from 'prop-types';
import { AlertDialogCancel as AlertDialogCancelM } from '../ui/alert-dialog';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/alert-dialog
 * @uxpindescription The cancel button for the alert dialog.
 */
const AlertDialogCancel = ({ children, ...props }) => {
  return <AlertDialogCancelM {...props}>{children}</AlertDialogCancelM>;
};

AlertDialogCancel.propTypes = {
  /** The content of the component. */
  children: PropTypes.node,
  /** Change the component to the specified HTML tag or custom component.
   * @uxpinignoreprop
   */
  asChild: PropTypes.bool,
};

export default AlertDialogCancel;

import React from 'react';
import PropTypes from 'prop-types';
import { AlertDialogHeader as AlertDialogHeaderM } from '../ui/alert-dialog';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/alert-dialog
 * @uxpindescription The header section of the alert dialog.
 */
const AlertDialogHeader = ({ children, ...props }) => {
  return <AlertDialogHeaderM {...props}>{children}</AlertDialogHeaderM>;
};

AlertDialogHeader.propTypes = {
  /** The content of the component. */
  children: PropTypes.node,
};

export default AlertDialogHeader;

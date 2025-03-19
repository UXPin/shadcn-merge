import React from 'react';
import PropTypes from 'prop-types';
import { AlertDialogFooter as AlertDialogFooterM } from '../ui/alert-dialog';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/alert-dialog
 * @uxpindescription The footer section of the alert dialog.
 */
const AlertDialogFooter = ({ children, ...props }) => {
  return <AlertDialogFooterM {...props}>{children}</AlertDialogFooterM>;
};

AlertDialogFooter.propTypes = {
  /** The content of the component. */
  children: PropTypes.node,
};

export default AlertDialogFooter;

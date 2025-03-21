import React from 'react';
import PropTypes from 'prop-types';
import { AlertDialogAction as AlertDialogActionM } from '../ui/alert-dialog';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/alert-dialog
 * @uxpindescription The action button for the alert dialog.
 */
const AlertDialogAction = ({ children, ...props }) => {
  return <AlertDialogActionM {...props}>{children}</AlertDialogActionM>;
};

AlertDialogAction.propTypes = {
  /** The content of the component. */
  children: PropTypes.node,
  /** Change the component to the specified HTML tag or custom component.
   * @uxpinignoreprop
   */
  asChild: PropTypes.bool,
};

export default AlertDialogAction;

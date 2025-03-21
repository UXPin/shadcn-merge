import React from 'react';
import PropTypes from 'prop-types';
import { AlertDialogTrigger as AlertDialogTriggerM } from '../ui/alert-dialog';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/alert-dialog
 * @uxpindescription The trigger button that opens the alert dialog.
 */
const AlertDialogTrigger = ({ children, ...props }) => {
  return <AlertDialogTriggerM {...props}>{children}</AlertDialogTriggerM>;
};

AlertDialogTrigger.propTypes = {
  /** The content of the component. */
  children: PropTypes.node,
  /** Change the component to the specified HTML tag or custom component.
   * @uxpinignoreprop
   */
  asChild: PropTypes.bool,
};

export default AlertDialogTrigger;

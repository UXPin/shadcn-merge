import React from 'react';
import PropTypes from 'prop-types';
import { AlertDialogTitle as AlertDialogTitleM } from '../ui/alert-dialog';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/alert-dialog
 * @uxpindescription The title section of the alert dialog.
 */
const AlertDialogTitle = ({ children, ...props }) => {
  return <AlertDialogTitleM {...props}>{children}</AlertDialogTitleM>;
};

AlertDialogTitle.propTypes = {
  /** The content of the component. */
  children: PropTypes.node,
  /** Change the component to the specified HTML tag or custom component.
   * @uxpinignoreprop
   */
  asChild: PropTypes.bool,
};

export default AlertDialogTitle;

import React from 'react';
import PropTypes from 'prop-types';
import { AlertDialogContent as AlertDialogContentM } from '../ui/alert-dialog';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/alert-dialog
 * @uxpindescription The content container for the alert dialog.
 */
const AlertDialogContent = ({ children, ...props }) => {
  return <AlertDialogContentM {...props}>{children}</AlertDialogContentM>;
};

AlertDialogContent.propTypes = {
  /** The content of the component. */
  children: PropTypes.node,
  /** Change the component to the specified HTML tag or custom component.
   * @uxpinignoreprop
   */
  asChild: PropTypes.bool,
  /** Always keep the content rendered. */
  forceMount: PropTypes.bool,
  /** Event handler called when focus moves into the component after opening. */
  onOpenAutoFocus: PropTypes.func,
  /** Event handler called when focus moves to the trigger after closing. */
  onCloseAutoFocus: PropTypes.func,
  /** Event handler called when the escape key is pressed. */
  onEscapeKeyDown: PropTypes.func,
};

export default AlertDialogContent;

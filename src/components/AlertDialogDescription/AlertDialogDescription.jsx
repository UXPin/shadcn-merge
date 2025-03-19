import React from 'react';
import PropTypes from 'prop-types';
import { AlertDialogDescription as AlertDialogDescriptionM } from '../ui/alert-dialog';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/alert-dialog
 * @uxpindescription The description section of the alert dialog.
 */
const AlertDialogDescription = ({ children, ...props }) => {
  return (
    <AlertDialogDescriptionM {...props}>{children}</AlertDialogDescriptionM>
  );
};

AlertDialogDescription.propTypes = {
  /** The content of the component. */
  children: PropTypes.node,
};

export default AlertDialogDescription;

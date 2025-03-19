import React from 'react';
import PropTypes from 'prop-types';
import { AlertDialogPortal as AlertDialogPortalM } from '../ui/alert-dialog';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/alert-dialog
 * @uxpindescription The action button for the alert dialog.
 */
const AlertDialogPortal = ({ children, ...props }) => {
  return (
    <AlertDialogPortalM
      {...props}
      container={document.getElementById(props.container)}
    >
      {children}
    </AlertDialogPortalM>
  );
};

AlertDialogPortal.propTypes = {
  /** The content of the component. */
  children: PropTypes.node,
  /** Always keep the portal rendered. */
  forceMount: PropTypes.bool,
  /** Specify a container element to portal the content into. Defaults to document.body. */
  container: PropTypes.string,
};

export default AlertDialogPortal;

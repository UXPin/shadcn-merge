import React from 'react';
import PropTypes from 'prop-types';
import { AlertDialog as AlertDialogM } from '../ui/alert-dialog';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/alert-dialog
 * @uxpindescription A modal dialog that interrupts the user with a mandatory action.
 */
const AlertDialog = ({ children, ...props }) => {
  const [open, setOpen] = React.useState(props.open);

  React.useEffect(() => {
    setOpen(props.open);
  }, [props.open])

  const onOpenChange = (value) => {
    props.uxpinOnChange(props.open, value, 'open');
    if (props.onOpenChange) {
      props.onOpenChange(value);
    }
  }

  return <AlertDialogM key={props.defaultOpen} {...props} open={open} onOpenChange={onOpenChange} >{children}</AlertDialogM>;
};

AlertDialog.propTypes = {
  /** The content of the component. */
  children: PropTypes.node,
  /** The open state when the dialog is initially rendered. */
  defaultOpen: PropTypes.bool,
  /** The controlled open state of the dialog. Must be used in conjunction with onOpenChange. */
  open: PropTypes.bool,
  /** Event handler called when the open state of the dialog changes. */
  onOpenChange: PropTypes.func,
};

export default AlertDialog;

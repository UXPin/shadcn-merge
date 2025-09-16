import React from 'react';
import PropTypes from 'prop-types';
import {
  Dialog as DialogM,
} from '../ui/dialog';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/dialog
 * @uxpindescription Root component to manage dialog state and logic.
 */
const Dialog = (props) => {
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
  return <DialogM key={props.defaultOpen} {...props} open={open} onOpenChange={onOpenChange} />;
};

Dialog.propTypes = {
  children: PropTypes.node,
  /**
   * @uxpincontroltype tailwindclassname
   */
  className: PropTypes.string,
  /** The controlled open state of the dialog.
   * @uxpinbind onOpenChange 0
   */
  open: PropTypes.bool,
  /** The open state of the dialog when it is initially rendered. */
  defaultOpen: PropTypes.bool,
  /** Event handler called when the open state of the dialog changes. */
  onOpenChange: PropTypes.func,
  /** The modality of the dialog. When true, interaction with outside elements will be disabled and only dialog content will be visible to screen readers. */
  modal: PropTypes.bool,
};

export default Dialog;

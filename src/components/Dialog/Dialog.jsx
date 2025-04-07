import React from 'react';
import PropTypes from 'prop-types';
import {
  Dialog as DialogM,
  DialogClose,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogHeader,
  DialogFooter,
  DialogDescription,
} from '../ui/dialog';
import Button from '../Button/Button';
/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/dialog
 * @uxpindescription Root component to manage dialog state and logic.
 */
const Dialog = (props) => {
  return <DialogM {...props} />;
};

Dialog.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  /** The controlled open state of the dialog.
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

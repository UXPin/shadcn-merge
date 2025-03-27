import React from 'react';
import PropTypes from 'prop-types';
import { DialogTrigger as DialogTriggerM } from '../ui/dialog';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/dialog
 * @uxpindescription Element that triggers the opening of the dialog.
 */
const DialogTrigger = ({ children, className, ...props }) => {
  return (
    <DialogTriggerM className={className} {...props}>
      {children}
    </DialogTriggerM>
  );
};

DialogTrigger.propTypes = {
  /** The content of the DialogTrigger. */
  children: PropTypes.node,
  /** Additional className for styling. */
  className: PropTypes.string,
};

export default DialogTrigger;

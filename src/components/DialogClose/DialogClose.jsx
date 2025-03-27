import React from 'react';
import PropTypes from 'prop-types';
import { DialogClose as DialogCloseM } from '../ui/dialog';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/dialog
 * @uxpindescription Button or element to close the dialog.
 */
const DialogClose = ({ children, className, ...props }) => {
  return (
    <DialogCloseM className={className} {...props}>
      {children}
    </DialogCloseM>
  );
};

DialogClose.propTypes = {
  /** The content of DialogClose. */
  children: PropTypes.node,
  /** Additional className for styling. */
  className: PropTypes.string,
};

export default DialogClose;

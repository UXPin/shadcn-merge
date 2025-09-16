import React from 'react';
import PropTypes from 'prop-types';
import { DialogHeader as DialogHeaderM } from '../ui/dialog';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/dialog
 * @uxpindescription Wrapper for dialog header elements.
 */
const DialogHeader = ({ children, className, ...props }) => {
  return (
    <DialogHeaderM className={className} {...props}>
      {children}
    </DialogHeaderM>
  );
};

DialogHeader.propTypes = {
  /** The content of the header. */
  children: PropTypes.node,
  /** Additional className for styling.
   * @uxpincontroltype tailwindclassname
   */
  className: PropTypes.string,
};

export default DialogHeader;

import React from 'react';
import PropTypes from 'prop-types';
import { DialogFooter as DialogFooterM } from '../ui/dialog';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/dialog
 * @uxpindescription Wrapper for footer elements, like buttons.
 */
const DialogFooter = ({ children, className, ...props }) => {
  return (
    <DialogFooterM className={className} {...props}>
      {children}
    </DialogFooterM>
  );
};

DialogFooter.propTypes = {
  /** The content of the footer. */
  children: PropTypes.node,
  /** Additional className for styling.
   * @uxpincontroltype tailwindclassname
   */
  className: PropTypes.string,
};

export default DialogFooter;

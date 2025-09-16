import React from 'react';
import PropTypes from 'prop-types';
import { DialogDescription as DialogDescriptionM } from '../ui/dialog';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/dialog
 * @uxpindescription Description element inside the dialog.
 */
const DialogDescription = ({ children, className, ...props }) => {
  return (
    <DialogDescriptionM className={className} {...props}>
      {children}
    </DialogDescriptionM>
  );
};

DialogDescription.propTypes = {
  /** Change the default rendered element for the one passed as a child, merging their props and behavior.
   * @uxpinignoreprop
   */
  asChild: PropTypes.bool,
  /** Additional className for styling.
   * @uxpincontroltype tailwindclassname
   */
  className: PropTypes.string,
  /** The content of the description. */
  children: PropTypes.node.isRequired,
};

export default DialogDescription;

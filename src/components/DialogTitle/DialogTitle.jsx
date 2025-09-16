import React from 'react';
import PropTypes from 'prop-types';
import { DialogTitle as DialogTitleM } from '../ui/dialog';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/dialog
 * @uxpindescription Title element of the dialog.
 */
const DialogTitle = ({ children, className, ...props }) => {
  return (
    <DialogTitleM className={className} {...props}>
      {children}
    </DialogTitleM>
  );
};

DialogTitle.propTypes = {
  /** Additional className for styling.
   * @uxpincontroltype tailwindclassname
   */
  className: PropTypes.string,
  /** The content of the title. */
  children: PropTypes.node.isRequired,
};

export default DialogTitle;

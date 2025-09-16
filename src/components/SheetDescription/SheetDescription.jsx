import React from 'react';
import PropTypes from 'prop-types';
import { SheetDescription as SheetDescriptionM } from '../ui/sheet';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/sheet
 * @uxpindescription Descriptive text within the sheet header.
 */
const SheetDescription = ({ children, className, ...props }) => {
  return (
    <SheetDescriptionM className={className} {...props}>
      {children}
    </SheetDescriptionM>
  );
};

SheetDescription.propTypes = {
  children: PropTypes.node,
  /**
   * @uxpincontroltype tailwindclassname
   */
  className: PropTypes.string,
};

export default SheetDescription;

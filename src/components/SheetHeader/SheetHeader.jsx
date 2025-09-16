import React from 'react';
import PropTypes from 'prop-types';
import { SheetHeader as SheetHeaderM } from '../ui/sheet';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/sheet
 * @uxpindescription Header container of the sheet.
 */
const SheetHeader = ({ children, className, ...props }) => {
  return (
    <SheetHeaderM className={className} {...props}>
      {children}
    </SheetHeaderM>
  );
};

SheetHeader.propTypes = {
  children: PropTypes.node,
  /**
   * @uxpincontroltype tailwindclassname
   */
  className: PropTypes.string,
};

export default SheetHeader;

import React from 'react';
import PropTypes from 'prop-types';
import { SheetClose as SheetCloseM } from '../ui/sheet';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/sheet
 * @uxpindescription Button or element to close the sheet.
 */
const SheetClose = ({ children, className, ...props }) => {
  return (
    <SheetCloseM className={className} {...props}>
      {children}
    </SheetCloseM>
  );
};

SheetClose.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default SheetClose;

import React from 'react';
import PropTypes from 'prop-types';
import { SheetContent as SheetContentM } from '../ui/sheet';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/sheet
 * @uxpindescription Main content area of the sheet.
 */
const SheetContent = ({ children, className, ...props }) => {
  return (
    <SheetContentM className={className} {...props}>
      {children}
    </SheetContentM>
  );
};

SheetContent.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default SheetContent;

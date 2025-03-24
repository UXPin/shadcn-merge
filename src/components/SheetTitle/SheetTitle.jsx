import React from 'react';
import PropTypes from 'prop-types';
import { SheetTitle as SheetTitleM } from '../ui/sheet';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/sheet
 * @uxpindescription Title of the sheet.
 */
const SheetTitle = ({ children, className, ...props }) => {
  return (
    <SheetTitleM className={className} {...props}>
      {children}
    </SheetTitleM>
  );
};

SheetTitle.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default SheetTitle;

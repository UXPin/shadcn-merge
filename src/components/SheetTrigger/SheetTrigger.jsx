import React from 'react';
import PropTypes from 'prop-types';
import { SheetTrigger as SheetTriggerM } from '../ui/sheet';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/sheet
 * @uxpindescription Element used to open the sheet.
 */
const SheetTrigger = ({ children, className, ...props }) => {
  return (
    <SheetTriggerM className={className} {...props}>
      {children}
    </SheetTriggerM>
  );
};

SheetTrigger.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default SheetTrigger;

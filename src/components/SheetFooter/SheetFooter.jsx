import React from 'react';
import PropTypes from 'prop-types';
import { SheetFooter as SheetFooterM } from '../ui/sheet';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/sheet
 * @uxpindescription Footer section for actions.
 */
const SheetFooter = ({ children, className, ...props }) => {
  return (
    <SheetFooterM className={className} {...props}>
      {children}
    </SheetFooterM>
  );
};

SheetFooter.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default SheetFooter;

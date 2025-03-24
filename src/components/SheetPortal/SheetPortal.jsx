import React from 'react';
import PropTypes from 'prop-types';
import { SheetPortal as SheetPortalM } from '../ui/sheet';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/sheet
 * @uxpindescription Portal element for rendering sheet content outside the DOM hierarchy.
 */
const SheetPortal = ({ children, className, ...props }) => {
  return (
    <SheetPortalM
      className={className}
      {...props}
      container={document.querySelector(props.container)}
    >
      {children}
    </SheetPortalM>
  );
};

SheetPortal.propTypes = {
  children: PropTypes.node,
  // container: PropTypes.string,
};

export default SheetPortal;

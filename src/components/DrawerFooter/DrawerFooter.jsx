import React from 'react';
import PropTypes from 'prop-types';
import { DrawerFooter as DrawerFooterM } from '../ui/drawer';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/drawer
 * @uxpindescription The footer section of the drawer.
 */
const DrawerFooter = ({ children, className, ...props }) => {
  return (
    <DrawerFooterM className={className} {...props}>
      {children}
    </DrawerFooterM>
  );
};

DrawerFooter.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default DrawerFooter;

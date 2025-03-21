import React from 'react';
import PropTypes from 'prop-types';
import { DrawerHeader as DrawerHeaderM } from '../ui/drawer';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/drawer
 * @uxpindescription The header section of the drawer.
 */
const DrawerHeader = ({ children, className, ...props }) => {
  return (
    <DrawerHeaderM className={className} {...props}>
      {children}
    </DrawerHeaderM>
  );
};

DrawerHeader.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default DrawerHeader;

import React from 'react';
import PropTypes from 'prop-types';
import { DrawerContent as DrawerContentM } from '../ui/drawer';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/drawer
 * @uxpindescription The main content area inside the drawer.
 */
const DrawerContent = ({ children, className, ...props }) => {
  return (
    <DrawerContentM className={className} {...props}>
      {children}
    </DrawerContentM>
  );
};

DrawerContent.propTypes = {
  children: PropTypes.node,
  /**
   * @uxpincontroltype tailwindclassname
   */
  className: PropTypes.string,
};

export default DrawerContent;

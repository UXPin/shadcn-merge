import React from 'react';
import PropTypes from 'prop-types';
import { DrawerTrigger as DrawerTriggerM } from '../ui/drawer';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/drawer
 * @uxpindescription The button or element that triggers the drawer.
 */
const DrawerTrigger = ({ children, className, ...props }) => {
  return (
    <DrawerTriggerM className={className} {...props}>
      {children}
    </DrawerTriggerM>
  );
};

DrawerTrigger.propTypes = {
  children: PropTypes.node.isRequired,
  /**
   * @uxpincontroltype tailwindclassname
   */
  className: PropTypes.string,
};

export default DrawerTrigger;

import React from 'react';
import PropTypes from 'prop-types';
import { DrawerDescription as DrawerDescriptionM } from '../ui/drawer';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/drawer
 * @uxpindescription The description text beneath the drawer title.
 */
const DrawerDescription = ({ children, className, ...props }) => {
  return (
    <DrawerDescriptionM className={className} {...props}>
      {children}
    </DrawerDescriptionM>
  );
};

DrawerDescription.propTypes = {
  children: PropTypes.node,
  /**
   * @uxpincontroltype tailwindclassname
   */
  className: PropTypes.string,
};

export default DrawerDescription;

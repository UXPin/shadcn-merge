import React from 'react';
import PropTypes from 'prop-types';
import { DrawerClose as DrawerCloseM } from '../ui/drawer';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/drawer
 * @uxpindescription A button or element used to close the drawer.
 */
const DrawerClose = ({ children, className, ...props }) => {
  return (
    <DrawerCloseM className={className} {...props}>
      {children}
    </DrawerCloseM>
  );
};

DrawerClose.propTypes = {
  /** Content inside the close button */
  children: PropTypes.node,

  /** Additional class names for styling
   * @uxpincontroltype tailwindclassname
   */
  className: PropTypes.string,
};

export default DrawerClose;

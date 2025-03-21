import React from 'react';
import PropTypes from 'prop-types';
import { DrawerTitle as DrawerTitleM } from '../ui/drawer';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/drawer
 * @uxpindescription The title element of the drawer header.
 */
const DrawerTitle = ({ children, className, ...props }) => {
  return (
    <DrawerTitleM className={className} {...props}>
      {children}
    </DrawerTitleM>
  );
};

DrawerTitle.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default DrawerTitle;

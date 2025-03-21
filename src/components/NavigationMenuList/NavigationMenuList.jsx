import React from 'react';
import PropTypes from 'prop-types';
import { NavigationMenuList as NavigationMenuListM } from '../ui/navigation-menu';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/navigation-menu
 * @uxpindescription Container for navigation menu items.
 */
const NavigationMenuList = ({ children, className, ...props }) => {
  return (
    <NavigationMenuListM className={className} {...props}>
      {children}
    </NavigationMenuListM>
  );
};

NavigationMenuList.propTypes = {
  /** Child components to render inside the NavigationMenuList. */
  children: PropTypes.node,
};

export default NavigationMenuList;

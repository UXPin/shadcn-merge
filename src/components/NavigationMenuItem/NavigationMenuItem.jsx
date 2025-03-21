import React from 'react';
import PropTypes from 'prop-types';
import { NavigationMenuItem as NavigationMenuItemM } from '../ui/navigation-menu';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/navigation-menu
 * @uxpindescription An individual navigation item.
 */
const NavigationMenuItem = ({ children, className, ...props }) => {
  return (
    <NavigationMenuItemM className={className} {...props}>
      {children}
    </NavigationMenuItemM>
  );
};

NavigationMenuItem.propTypes = {
  /** A unique value that associates the item with an active value when the navigation menu is controlled. */
  value: PropTypes.string,
  /** Child components to render inside the NavigationMenuItem. */
  children: PropTypes.node,
};

export default NavigationMenuItem;

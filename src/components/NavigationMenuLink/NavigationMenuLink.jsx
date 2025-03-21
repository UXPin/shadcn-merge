import React from 'react';
import PropTypes from 'prop-types';
import { NavigationMenuLink as NavigationMenuLinkM } from '../ui/navigation-menu';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/navigation-menu
 * @uxpindescription Navigable link inside the menu.
 */
const NavigationMenuLink = ({ children, className, ...props }) => {
  return (
    <NavigationMenuLinkM className={className} {...props}>
      {children}
    </NavigationMenuLinkM>
  );
};

NavigationMenuLink.propTypes = {
  /** Used to identify the link as the currently active page. */
  active: PropTypes.bool,
  /** Event handler called when the user selects a link (via mouse or keyboard). Calling event.preventDefault in this handler will prevent the navigation menu from closing when selecting that link. */
  onSelect: PropTypes.func,
  /** Child components to render inside the NavigationMenuLink. */
  children: PropTypes.node,
};

export default NavigationMenuLink;

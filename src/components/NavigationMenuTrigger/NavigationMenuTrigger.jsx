import React from 'react';
import PropTypes from 'prop-types';
import { NavigationMenuTrigger as NavigationMenuTriggerM } from '../ui/navigation-menu';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/navigation-menu
 * @uxpindescription Trigger for a submenu.
 */
const NavigationMenuTrigger = ({ children, className, ...props }) => {
  return (
    <NavigationMenuTriggerM className={className} {...props}>
      {children}
    </NavigationMenuTriggerM>
  );
};

NavigationMenuTrigger.propTypes = {
  /** If true, renders the component as a child element. */
  asChild: PropTypes.bool,
  /** When true, prevents the user from interacting with the item. */
  disabled: PropTypes.bool,
  /** Child components to render inside the NavigationMenuTrigger. */
  children: PropTypes.node,
};

export default NavigationMenuTrigger;

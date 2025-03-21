import React from 'react';
import PropTypes from 'prop-types';
import { NavigationMenu as NavigationMenuM } from '../ui/navigation-menu';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/navigation-menu
 * @uxpindescription Root navigation menu component.
 */
const NavigationMenu = ({ children, className, ...props }) => {
  return (
    <NavigationMenuM className={className} {...props}>
      {children}
    </NavigationMenuM>
  );
};

NavigationMenu.propTypes = {
  /** If true, renders the component as a child element. */
  asChild: PropTypes.bool,
  /** The value of the menu item that should be active when initially rendered. */
  defaultValue: PropTypes.string,
  /** The controlled value of the menu item to activate.
   * @uxpinbind onValueChange 0
   */
  value: PropTypes.string,
  /** Event handler called when the value changes. */
  onValueChange: PropTypes.func,
  /** The duration from when the pointer enters the trigger until the tooltip gets opened. */
  delayDuration: PropTypes.number,
  /** How much time a user has to enter another trigger without incurring a delay again. */
  skipDelayDuration: PropTypes.number,
  /** The reading direction of the navigation menu. */
  dir: PropTypes.oneOf(['ltr', 'rtl']),
  /** The orientation of the menu. */
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  /** Child components to render inside the NavigationMenuRoot. */
  children: PropTypes.node,
};

export default NavigationMenu;

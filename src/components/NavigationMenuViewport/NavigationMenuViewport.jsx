import React from 'react';
import PropTypes from 'prop-types';
import { NavigationMenuViewport as NavigationMenuViewportM } from '../ui/navigation-menu';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/navigation-menu
 * @uxpindescription Viewport that displays the content.
 */
const NavigationMenuViewport = ({ children, className, ...props }) => {
  return (
    <NavigationMenuViewportM className={className} {...props}>
      {children}
    </NavigationMenuViewportM>
  );
};

NavigationMenuViewport.propTypes = {
  /** Used to force mounting when more control is needed. Useful when controlling animation with animation libraries. */
  forceMount: PropTypes.bool,
  /** Child components to render inside the NavigationMenuViewport. */
  children: PropTypes.node,
};

export default NavigationMenuViewport;
